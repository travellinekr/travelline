import { execFileSync } from 'child_process';
import { existsSync, readFileSync, readdirSync, statSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

export interface CodexTokenUsage {
    input_tokens: number;
    cached_input_tokens: number;
    output_tokens: number;
    reasoning_output_tokens: number;
    total_tokens: number;
}

export interface CodexUsageWindow extends CodexTokenUsage {
    sessions: number;
    events: number;
}

export interface CodexLimitWindow {
    limitTokens: number | null;
    usedTokens: number;
    remainingTokens: number | null;
    usagePct: number | null;
}

export interface CodexStats {
    authMode: string | null;
    hasCodexCliAuth: boolean;
    hasHermesCodexCredential: boolean;
    hermesCredentialCount: number;
    lastRefresh: string | null;
    usageAvailable: boolean;
    usageUnavailableReason: string;
    checkedAt: number;
    usage: {
        today: CodexUsageWindow;
        last7Days: CodexUsageWindow;
        month: CodexUsageWindow;
        allTime: CodexUsageWindow;
        lastUsedAt: string | null;
        sessionFilesScanned: number;
    };
    hermesUsage: {
        today: CodexUsageWindow;
        last7Days: CodexUsageWindow;
        month: CodexUsageWindow;
        allTime: CodexUsageWindow;
        lastUsedAt: string | null;
        sessionRowsScanned: number;
    };
    limits: {
        daily: CodexLimitWindow;
        weekly: CodexLimitWindow;
        monthly: CodexLimitWindow;
        source: 'env' | 'unset';
        configuredKeys: string[];
        note: string;
    };
}

function readJson(path: string): any | null {
    try {
        if (!existsSync(path)) return null;
        return JSON.parse(readFileSync(path, 'utf8'));
    } catch {
        return null;
    }
}

function emptyUsageWindow(): CodexUsageWindow {
    return {
        input_tokens: 0,
        cached_input_tokens: 0,
        output_tokens: 0,
        reasoning_output_tokens: 0,
        total_tokens: 0,
        sessions: 0,
        events: 0,
    };
}

function addUsage(target: CodexUsageWindow, usage: Partial<CodexTokenUsage>) {
    target.input_tokens += Number(usage.input_tokens ?? 0);
    target.cached_input_tokens += Number(usage.cached_input_tokens ?? 0);
    target.output_tokens += Number(usage.output_tokens ?? 0);
    target.reasoning_output_tokens += Number(usage.reasoning_output_tokens ?? 0);
    target.total_tokens += Number(usage.total_tokens ?? 0);
    target.events += 1;
}

function listJsonlFiles(dir: string): string[] {
    if (!existsSync(dir)) return [];
    const files: string[] = [];
    const stack = [dir];
    while (stack.length > 0) {
        const current = stack.pop();
        if (!current) continue;
        for (const name of readdirSync(current)) {
            const fullPath = join(current, name);
            const info = statSync(fullPath);
            if (info.isDirectory()) {
                stack.push(fullPath);
            } else if (name.endsWith('.jsonl')) {
                files.push(fullPath);
            }
        }
    }
    return files;
}

function getWindowStarts(now: Date) {
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    return {
        todayStart,
        sevenDaysStart: todayStart - 6 * 24 * 60 * 60 * 1000,
        monthStart: new Date(now.getFullYear(), now.getMonth(), 1).getTime(),
    };
}

function getCodexLocalUsage(home: string): CodexStats['usage'] {
    const sessionsDir = join(home, '.codex', 'sessions');
    const files = listJsonlFiles(sessionsDir);
    const { todayStart, sevenDaysStart, monthStart } = getWindowStarts(new Date());

    const today = emptyUsageWindow();
    const last7Days = emptyUsageWindow();
    const month = emptyUsageWindow();
    const allTime = emptyUsageWindow();
    const sessionsByWindow = {
        today: new Set<string>(),
        last7Days: new Set<string>(),
        month: new Set<string>(),
        allTime: new Set<string>(),
    };
    let lastUsedAt: string | null = null;

    for (const file of files) {
        let lines: string[] = [];
        try {
            lines = readFileSync(file, 'utf8').split('\n');
        } catch {
            continue;
        }

        for (const line of lines) {
            if (!line.trim()) continue;
            let event: any;
            try {
                event = JSON.parse(line);
            } catch {
                continue;
            }

            const usage = event?.payload?.info?.last_token_usage;
            if (!usage) continue;

            const ts = typeof event.timestamp === 'string' ? Date.parse(event.timestamp) : NaN;
            if (!Number.isFinite(ts)) continue;

            addUsage(allTime, usage);
            sessionsByWindow.allTime.add(file);

            if (ts >= todayStart) {
                addUsage(today, usage);
                sessionsByWindow.today.add(file);
            }
            if (ts >= sevenDaysStart) {
                addUsage(last7Days, usage);
                sessionsByWindow.last7Days.add(file);
            }
            if (ts >= monthStart) {
                addUsage(month, usage);
                sessionsByWindow.month.add(file);
            }

            if (!lastUsedAt || ts > Date.parse(lastUsedAt)) {
                lastUsedAt = new Date(ts).toISOString();
            }
        }
    }

    today.sessions = sessionsByWindow.today.size;
    last7Days.sessions = sessionsByWindow.last7Days.size;
    month.sessions = sessionsByWindow.month.size;
    allTime.sessions = sessionsByWindow.allTime.size;

    return { today, last7Days, month, allTime, lastUsedAt, sessionFilesScanned: files.length };
}

function getHermesCodexUsage(home: string): CodexStats['hermesUsage'] {
    const dbPath = join(home, '.hermes', 'state.db');
    const empty = {
        today: emptyUsageWindow(),
        last7Days: emptyUsageWindow(),
        month: emptyUsageWindow(),
        allTime: emptyUsageWindow(),
        lastUsedAt: null as string | null,
        sessionRowsScanned: 0,
    };

    if (!existsSync(dbPath)) return empty;

    try {
        const script = String.raw`
import datetime
import json
import sqlite3
import sys

path = sys.argv[1]
now = datetime.datetime.now()
today_start = datetime.datetime(now.year, now.month, now.day).timestamp()
seven_start = today_start - 6 * 24 * 60 * 60
month_start = datetime.datetime(now.year, now.month, 1).timestamp()

def empty():
    return {
        "input_tokens": 0,
        "cached_input_tokens": 0,
        "output_tokens": 0,
        "reasoning_output_tokens": 0,
        "total_tokens": 0,
        "sessions": 0,
        "events": 0,
    }

def add(target, usage):
    for key in ["input_tokens", "cached_input_tokens", "output_tokens", "reasoning_output_tokens", "total_tokens"]:
        target[key] += int(usage.get(key) or 0)
    target["events"] += 1

out = {
    "today": empty(),
    "last7Days": empty(),
    "month": empty(),
    "allTime": empty(),
    "lastUsedAt": None,
    "sessionRowsScanned": 0,
}

con = sqlite3.connect(path)
con.row_factory = sqlite3.Row
rows = con.execute("""
    SELECT id, model, started_at, input_tokens, output_tokens, cache_read_tokens, cache_write_tokens, reasoning_tokens
    FROM sessions
    WHERE model IS NOT NULL
""").fetchall()
con.close()

for row in rows:
    model = str(row["model"] or "").lower()
    if "openai-codex" not in model and "gpt-5.5" not in model:
        continue

    ts = float(row["started_at"] or 0)
    usage = {
        "input_tokens": int(row["input_tokens"] or 0),
        "cached_input_tokens": int(row["cache_read_tokens"] or 0) + int(row["cache_write_tokens"] or 0),
        "output_tokens": int(row["output_tokens"] or 0),
        "reasoning_output_tokens": int(row["reasoning_tokens"] or 0),
    }
    usage["total_tokens"] = sum(usage.values())

    out["sessionRowsScanned"] += 1
    add(out["allTime"], usage)
    out["allTime"]["sessions"] += 1

    if ts >= today_start:
        add(out["today"], usage)
        out["today"]["sessions"] += 1
    if ts >= seven_start:
        add(out["last7Days"], usage)
        out["last7Days"]["sessions"] += 1
    if ts >= month_start:
        add(out["month"], usage)
        out["month"]["sessions"] += 1

    iso = datetime.datetime.fromtimestamp(ts, datetime.timezone.utc).isoformat().replace("+00:00", "Z")
    if out["lastUsedAt"] is None or iso > out["lastUsedAt"]:
        out["lastUsedAt"] = iso

print(json.dumps(out))
`;

        const raw = execFileSync('python3', ['-c', script, dbPath], {
            encoding: 'utf8',
            maxBuffer: 1024 * 1024,
            timeout: 5000,
        });
        return JSON.parse(raw) as CodexStats['hermesUsage'];
    } catch {
        return empty;
    }
}

function getConfiguredLimit(keys: string[]): number | null {
    for (const key of keys) {
        const raw = process.env[key] || '';
        const normalized = raw.replace(/[, _]/g, '');
        const value = Number(normalized);
        if (Number.isFinite(value) && value > 0) return Math.floor(value);
    }
    return null;
}

function buildLimitWindow(usedTokens: number, limitTokens: number | null): CodexLimitWindow {
    return {
        limitTokens,
        usedTokens,
        remainingTokens: limitTokens === null ? null : Math.max(0, limitTokens - usedTokens),
        usagePct: limitTokens === null ? null : Math.round((usedTokens / limitTokens) * 1000) / 10,
    };
}

function getConfiguredLimits(usage: CodexStats['hermesUsage']): CodexStats['limits'] {
    const daily = getConfiguredLimit(['CODEX_DAILY_TOKEN_LIMIT', 'HERMES_CODEX_DAILY_TOKEN_LIMIT']);
    const weekly = getConfiguredLimit(['CODEX_WEEKLY_TOKEN_LIMIT', 'HERMES_CODEX_WEEKLY_TOKEN_LIMIT']);
    const monthly = getConfiguredLimit(['CODEX_MONTHLY_TOKEN_LIMIT', 'HERMES_CODEX_MONTHLY_TOKEN_LIMIT']);
    const configuredKeys = [
        daily === null ? null : 'CODEX_DAILY_TOKEN_LIMIT',
        weekly === null ? null : 'CODEX_WEEKLY_TOKEN_LIMIT',
        monthly === null ? null : 'CODEX_MONTHLY_TOKEN_LIMIT',
    ].filter(Boolean) as string[];

    return {
        daily: buildLimitWindow(usage.today.total_tokens, daily),
        weekly: buildLimitWindow(usage.last7Days.total_tokens, weekly),
        monthly: buildLimitWindow(usage.month.total_tokens, monthly),
        source: configuredKeys.length > 0 ? 'env' : 'unset',
        configuredKeys,
        note: configuredKeys.length === 0
            ? 'Codex 계정 한도는 공개 API로 조회할 수 없어 CODEX_DAILY_TOKEN_LIMIT, CODEX_WEEKLY_TOKEN_LIMIT, CODEX_MONTHLY_TOKEN_LIMIT 환경변수 설정이 필요합니다.'
            : '환경변수 기준 수동 한도입니다. 실제 ChatGPT/Codex 계정 한도와 다를 수 있습니다.',
    };
}

export function getCodexStats(): CodexStats {
    const home = process.env.HOME || homedir();
    const codexAuthPath = join(home, '.codex', 'auth.json');
    const hermesAuthPath = join(home, '.hermes', 'auth.json');

    const codexAuth = readJson(codexAuthPath);
    const hermesAuth = readJson(hermesAuthPath);
    const codexPool = hermesAuth?.credential_pool?.['openai-codex'];
    const hermesCredentialCount = Array.isArray(codexPool) ? codexPool.length : codexPool ? 1 : 0;
    const hermesUsage = getHermesCodexUsage(home);

    return {
        authMode: typeof codexAuth?.auth_mode === 'string' ? codexAuth.auth_mode : null,
        hasCodexCliAuth: Boolean(codexAuth?.tokens || codexAuth?.OPENAI_API_KEY),
        hasHermesCodexCredential: hermesCredentialCount > 0,
        hermesCredentialCount,
        lastRefresh: typeof codexAuth?.last_refresh === 'string' ? codexAuth.last_refresh : null,
        usageAvailable: false,
        usageUnavailableReason: 'OpenAI Codex CLI/ChatGPT 계정 사용량·남은 한도는 현재 공개 API로 조회할 수 없습니다. 아래 값은 Hermes state.db와 로컬 Codex 세션 로그 기반 집계입니다.',
        checkedAt: Date.now(),
        usage: getCodexLocalUsage(home),
        hermesUsage,
        limits: getConfiguredLimits(hermesUsage),
    };
}
