#!/usr/bin/env node
/**
 * AI 플래너 테스트 하니스 (runner)
 * ------------------------------------------------------------------
 * 실행 중인 dev 서버의 /api/ai-planner 에 시나리오를 던지고 결과를 자동 검증한다.
 * Gemini 실호출이라 "모델이 실제로 어떻게 어긋나는지"까지 드러난다.
 *
 * 사용법 (dev 서버가 켜져 있어야 함):
 *   npm run test:ai                    # 전체 케이스 1회
 *   npm run test:ai -- --repeat=3      # 각 케이스 3회 → 통과율(비결정성 확인)
 *   npm run test:ai -- --filter=편집    # 이름에 '편집' 들어간 케이스만
 *   npm run test:ai -- --list          # 케이스 목록만 출력
 *   AI_HARNESS_URL=http://localhost:3001 npm run test:ai
 *
 * 케이스 추가는 cases.mjs 만 편집하면 된다. (이 파일은 건드릴 필요 없음)
 */
import cases from './cases.mjs';

const BASE = process.env.AI_HARNESS_URL || 'http://localhost:3000';
const args = process.argv.slice(2);
const argVal = (k, def) => {
    const a = args.find((x) => x.startsWith(`--${k}=`));
    return a ? a.split('=').slice(1).join('=') : def;
};
const FILTER = argVal('filter', '');
const GLOBAL_REPEAT = Math.max(1, parseInt(argVal('repeat', '1'), 10) || 1);
const LIST_ONLY = args.includes('--list');

// ── ANSI ─────────────────────────────────────────
const C = {
    reset: '\x1b[0m', dim: '\x1b[2m', bold: '\x1b[1m',
    red: '\x1b[31m', green: '\x1b[32m', yellow: '\x1b[33m', cyan: '\x1b[36m', gray: '\x1b[90m',
};
const c = (col, s) => `${C[col]}${s}${C.reset}`;

// ── HTTP ─────────────────────────────────────────
async function post(body) {
    const res = await fetch(`${BASE}/api/ai-planner`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
    const text = await res.text();
    let data;
    try { data = JSON.parse(text); } catch { data = { __parseError: true, raw: text.slice(0, 400) }; }
    return { status: res.status, data };
}

// generate 를 한 번 호출해 currentPlan(편집/대화 fixture)로 변환. (dest,dayCount)별 캐시 → 크레딧 절약.
const planCache = new Map();
async function planFor(dest, dayCount, requirements = {}) {
    const key = `${dest}:${dayCount}:${JSON.stringify(requirements)}`;
    if (planCache.has(key)) return planCache.get(key);
    const { data } = await post({ phase: 'generate', destinationEngName: dest, requirements: { dayCount, ...requirements } });
    const days = (data?.plan?.days || []).map((d) => ({
        day: d.day,
        items: (d.items || []).map((i) => ({ name: i.text || i.title, category: i.category })),
    }));
    const cp = { dayCount, days };
    planCache.set(key, cp);
    return cp;
}

const helpers = { post, planFor };

// ── 체크 실행 ─────────────────────────────────────
// check: [desc, fn(data, meta), opts?]  fn 은 boolean 또는 문제 설명 문자열(=실패) 반환
function runChecks(checks, data, meta) {
    return checks.map(([desc, fn, opts = {}]) => {
        let ok = false, err = null;
        try {
            const r = fn(data, meta);
            if (typeof r === 'string') { ok = false; err = r; }
            else ok = !!r;
        } catch (e) { ok = false; err = e.message; }
        return { desc, ok, soft: !!opts.soft, err };
    });
}

function pickCases() {
    return cases.filter((cs) => !FILTER || cs.name.includes(FILTER));
}

async function main() {
    const selected = pickCases();

    if (LIST_ONLY) {
        console.log(c('bold', `\nAI 플래너 하니스 — 케이스 ${selected.length}개\n`));
        selected.forEach((cs, i) => console.log(`  ${String(i + 1).padStart(2)}. [${cs.phase}] ${cs.name}`));
        console.log();
        return;
    }

    console.log(c('bold', `\n🧪 AI 플래너 하니스`) + c('gray', `  (${BASE}, 반복 ${GLOBAL_REPEAT}회)\n`));

    let hardFail = 0, hardTotal = 0, softFail = 0;

    for (const cs of selected) {
        const repeat = cs.repeat || GLOBAL_REPEAT;
        console.log(c('cyan', `▶ [${cs.phase}] ${cs.name}`) + c('gray', repeat > 1 ? `  ×${repeat}` : ''));

        // 체크별 통과 횟수 집계
        const agg = new Map(); // desc → {ok, total, soft, lastErr, lastData}
        let runErr = null;

        for (let r = 0; r < repeat; r++) {
            try {
                const setup = cs.setup ? await cs.setup(helpers) : {};
                const reqBody = typeof cs.request === 'function' ? await cs.request(setup, helpers) : cs.request;
                const { status, data } = await post(reqBody);
                const results = runChecks(cs.checks, data, { status, sent: reqBody, setup });
                for (const res of results) {
                    const a = agg.get(res.desc) || { ok: 0, total: 0, soft: res.soft, lastErr: null, lastData: null };
                    a.total += 1;
                    if (res.ok) a.ok += 1;
                    else { a.lastErr = res.err; a.lastData = data; }
                    agg.set(res.desc, a);
                }
            } catch (e) {
                runErr = e.message;
                break;
            }
        }

        if (runErr) {
            console.log('   ' + c('red', `✗ 실행 오류: ${runErr}`));
            hardFail += 1; hardTotal += 1;
            console.log();
            continue;
        }

        for (const [desc, a] of agg) {
            const rate = a.ok / a.total;
            const label = repeat > 1 ? c('gray', ` (${a.ok}/${a.total})`) : '';
            if (rate === 1) {
                console.log('   ' + c('green', '✓ ') + desc + label);
            } else if (a.soft) {
                softFail += 1;
                console.log('   ' + c('yellow', '⚠ ') + desc + label + c('gray', ' (soft)'));
                if (a.lastErr) console.log('     ' + c('gray', a.lastErr));
            } else {
                console.log('   ' + c('red', '✗ ') + desc + label);
                if (a.lastErr) console.log('     ' + c('gray', String(a.lastErr).slice(0, 200)));
                if (a.lastData) console.log('     ' + c('gray', shorten(a.lastData)));
            }
            if (!a.soft) { hardTotal += 1; if (rate < 1) hardFail += 1; }
        }
        console.log();
    }

    const passHard = hardTotal - hardFail;
    console.log(c('bold', '─'.repeat(48)));
    console.log(
        c('bold', '결과: ') +
        c(hardFail ? 'red' : 'green', `${passHard}/${hardTotal} 하드 체크 통과`) +
        (softFail ? c('yellow', `  · soft 경고 ${softFail}`) : '')
    );
    console.log();
    process.exit(hardFail ? 1 : 0);
}

function shorten(data) {
    try {
        const s = JSON.stringify(data);
        return s.length > 260 ? s.slice(0, 260) + '…' : s;
    } catch { return String(data); }
}

main().catch((e) => { console.error(c('red', '하니스 실패: ' + e.message)); process.exit(1); });
