// 실제 사용자 여행 일정(src/data/reference/<city>.json)을 로드해
// generate 프롬프트에 "실제 여행 사례" 블록으로 압축 주입한다.
// 목적: Gemini 가 장소 이름이 아니라 "동선·하루 묶음·페이스·숙소 분할" 패턴을 참조하도록.
// 안전장치: 사례에 카탈로그 밖 장소가 있어도 validateCatalogPlan 화이트리스트가 걸러냄.

import type { ReferenceItinerary } from '@/data/reference/_types';

const COMP_LABEL: Record<string, string> = {
    solo: '혼자', couple: '커플', family: '가족', friends: '친구',
};

// engName("Nha Trang") → 파일 슬러그("nha-trang") → 도시별 참조 일정 로드. 없으면 [].
export async function loadReferenceItineraries(engName?: string): Promise<ReferenceItinerary[]> {
    if (!engName) return [];
    const slug = engName.trim().toLowerCase().replace(/\s+/g, '-');
    if (!/^[a-z0-9-]+$/.test(slug)) return [];
    try {
        // 상대경로 템플릿 → webpack 이 reference 디렉토리 json 을 컨텍스트로 번들(신규 도시 자동 포함)
        const mod = await import(`../../data/reference/${slug}.json`);
        const data = (mod.default ?? mod) as ReferenceItinerary[];
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

// 요청 조건(일수·동행)에 가까운 사례를 골라 압축 텍스트 블록으로. 없으면 ''.
export function buildReferenceBlock(
    items: ReferenceItinerary[],
    dayCount: number,
    companion?: string,
    max = 3,
): string {
    if (!items?.length) return '';

    const scored = items
        .map((it) => {
            let s = it.source?.reliability ?? 0.5;
            if (it.days === dayCount) s += 2;        // 같은 일수 최우선
            else s -= Math.abs((it.days ?? 0) - dayCount) * 0.3;
            if (companion && it.companion === companion) s += 1;
            return { it, s };
        })
        .sort((a, b) => b.s - a.s)
        .slice(0, max)
        .map((x) => x.it);

    const blocks = scored.map((it, i) => formatOne(it, i + 1));
    return [
        '[실제 여행 사례] (실제 여행자 동선 예시. 장소 이름이 아니라 "하루 묶음·동선·페이스·숙소 분할 패턴"을 참고하세요.',
        '카탈로그에 없는 장소는 절대 쓰지 말고, 반드시 위 [장소 카탈로그]의 장소로 대체하세요.)',
        ...blocks,
    ].join('\n');
}

function formatOne(it: ReferenceItinerary, n: number): string {
    const compLabel = COMP_LABEL[it.companion ?? ''] ?? it.companion;
    // 테마에서 동행 라벨과 겹치는 토큰 제거(예: 동행 "가족" + 테마 "가족" 중복 방지)
    const themes = (it.themes ?? []).filter((t) => t !== compLabel && t !== it.companion).slice(0, 3);
    const meta = [
        `${it.nights}박${it.days}일`,
        compLabel,
        it.pace,
        themes.length ? themes.join('·') : null,
    ].filter(Boolean).join('·');

    const days = (it.plan ?? []).map((d) => {
        const line = [...(d.items ?? [])]
            .sort((a, b) => a.seq - b.seq)
            .map((i) => i.name + (i.area ? `(${i.area})` : ''))
            .join(' → ');
        return `  D${d.day}${d.label ? `[${d.label}]` : ''}: ${line}`;
    });

    const tips = it.tips?.length ? `  요령: ${it.tips.join(' / ')}` : '';
    return [`· 사례${n} (${meta})`, ...days, tips].filter(Boolean).join('\n');
}
