// 실제 사용자 여행 일정(네이버/유튜브 등)을 "참조 데이터"로 모으는 표준 포맷.
// 목적: Gemini 플래너가 현실적인 동선·페이스·일자별 구성을 학습신호로 참조하도록 함.
//
// 원칙
//  1) 앱 카드 카테고리(hotel/food/...)와 동일하게 맞춤 → Gemini 출력과 바로 비교 가능
//  2) 원문 문장·사진은 저장하지 않는다. "장소·일차·카테고리" 뼈대 + 원본 링크만.
//  3) 사람이 손으로 채우기 쉽게 최소 필드. 애매하면 비워라(선택 필드는 생략 OK).
//
// 저장 위치: src/data/reference/<city>.json  (city = destinations.ts 의 engName)
//   파일 = ReferenceItinerary[]  (배열에 한 건씩 append)

/** 앱 카드와 동일한 카테고리. 잘 모르면 'other'. */
export type RefCategory =
    | 'hotel'
    | 'food'
    | 'shopping'
    | 'transport'
    | 'tourspa'
    | 'flight'
    | 'other';

export type Companion = 'solo' | 'couple' | 'family' | 'friends';
export type Pace = 'packed' | 'relaxed';
export type TimeOfDay = '오전' | '오후' | '저녁' | '밤';

/** 하루 안의 한 방문지/활동 (그날 순서대로). */
export interface ReferenceItem {
    /** 그날 방문 순서 (1부터). */
    seq: number;
    /** 대략의 시간대. 정확한 시각 대신 오전/오후/저녁/밤. (선택) */
    timeOfDay?: TimeOfDay;
    /** 장소·활동 이름. 원문 표기 그대로 OK (예: "혼문섬 호핑투어"). */
    name: string;
    category: RefCategory;
    /** 동네·지구 — 동선 힌트용 (예: "시내", "깜란", "도톤보리"). (선택) */
    area?: string;
    /** 아주 짧은 메모. (선택, 한 줄 이내) */
    note?: string;
}

/** 하루치 일정. */
export interface ReferenceDay {
    /** 일차 (1부터). 도착 준비일은 필요시 0 사용 가능. */
    day: number;
    /** 그날의 한 줄 테마 (예: "도착", "호핑투어", "리조트 이동"). (선택) */
    label?: string;
    items: ReferenceItem[];
}

/** 참조 일정 1건 = 실제 사용자 여행기 하나. */
export interface ReferenceItinerary {
    /** 고유 id. 권장 형식: "<city-slug>-<n>n<m>d-<companion>-<번호>" 예: "nha-trang-4n6d-couple-001" */
    id: string;
    /** destinations.ts 의 engName 과 정확히 일치 (예: "Nha Trang", "Osaka"). */
    city: string;
    nights: number;
    days: number;
    companion?: Companion;
    /** 여행 시기 (월). (선택) */
    month?: number;
    pace?: Pace;
    /** 성격 태그 (예: ["휴양", "해양액티비티", "미식"]). (선택) */
    themes?: string[];

    /** ★ 핵심: 일차별 실제 동선. */
    plan: ReferenceDay[];

    /** 도시 전반 팁 — 짧게. (선택, 원문 인용 금지) */
    tips?: string[];

    source: {
        platform: 'naver_blog' | 'naver_cafe' | 'youtube' | 'other';
        url: string;
        title?: string;
        /** 수집일 YYYY-MM-DD */
        collectedAt: string;
        /** 신뢰도 0~1 (조회수·구독자·추천 기반, 대략). (선택) */
        reliability?: number;
    };
}
