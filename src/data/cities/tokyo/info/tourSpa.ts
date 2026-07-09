import type { TourSpaInfo } from '@/data/card-info-types';

const info: Record<string, TourSpaInfo> = {
    "센소지": {
        photos: ["/images/tokyo/info/tourspa/sensoji.jpg"],
        summary: "아사쿠사 전통 동선의 핵심 사찰로, 나카미세도리와 함께 짧고 밀도 있게 둘러보기 좋습니다.",
        highlights: ["가미나리몬·나카미세도리·본당을 한 번에 연결", "초행 도쿄 여행자 후기에서 반복적으로 추천", "스카이트리·스미다 강 동선과 묶기 좋음"],
        tips: ["오전 일찍 가면 단체 관광객이 적어 사진 찍기 수월합니다.", "나카미세도리는 폐점 시간이 빠른 편이라 쇼핑은 낮 시간대가 안전합니다."],
        warnings: ["주말과 오후 시간대는 가미나리몬 앞 사진 대기가 길 수 있습니다."],
        hours: "본당 06:00~17:00 전후, 경내는 시간대별 상이",
        duration: "1~2시간",
        price: "무료",
        bestTime: "오전 또는 해질 무렵",
        access: { area: "아사쿠사", station: "아사쿠사역 도보권", note: "스카이트리와 같은 날 동선 추천" },
        links: [
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%BF%84+%EC%84%BC%EC%86%8C%EC%A7%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 방문 후기 확인" },
            { label: "GO TOKYO 센소지", url: "https://www.gotokyo.org/kr/spot/15/index.html", type: "guide", description: "도쿄 관광 공식 가이드" }
        ],
        updatedAt: "2026-07-09"
    },
    "메이지 신궁": {
        photos: ["/images/tokyo/info/tourspa/meiji-jingu.jpg"],
        summary: "하라주쿠 옆 숲길을 따라 걷는 조용한 신궁 코스로, 도심 속 산책형 일정에 적합합니다.",
        highlights: ["숲길 산책 만족도가 높은 코스", "하라주쿠·오모테산도와 연결 쉬움", "센소지와 대비되는 차분한 분위기"],
        tips: ["입구에서 본전까지 거리가 있어 편한 신발이 좋습니다.", "하라주쿠 쇼핑 전후로 1시간 정도 배정하면 무난합니다."],
        warnings: ["비 오는 날에는 참배로가 미끄러울 수 있습니다."],
        hours: "일출~일몰 기준 변동",
        duration: "1~2시간",
        price: "무료",
        bestTime: "오전 산책 시간대",
        access: { area: "하라주쿠", station: "하라주쿠역·메이지진구마에역 도보권", note: "오모테산도와 연계 추천" },
        links: [
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%BF%84+%EB%A9%94%EC%9D%B4%EC%A7%80%EC%8B%A0%EA%B6%81+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 방문 후기 확인" },
            { label: "메이지 신궁 공식", url: "https://www.meijijingu.or.jp/en/", type: "official", description: "운영 시간 확인" }
        ],
        updatedAt: "2026-07-09"
    },
    "도쿄 타워": {
        photos: ["/images/tokyo/info/tourspa/tokyo-tower.jpg"],
        summary: "도쿄의 클래식 랜드마크로, 야경·사진 코스와 전망대 일정을 함께 잡기 좋습니다.",
        highlights: ["도쿄 대표 상징물", "야간 사진 만족도가 높음", "롯폰기·아자부다이 동선과 연결 가능"],
        tips: ["전망대 목적이면 온라인 티켓 가격과 운영 시간을 먼저 확인하세요.", "외관 사진만 찍을 경우 시바공원·조조지 방향이 무난합니다."],
        warnings: ["주말 야간에는 전망대 입장 대기가 생길 수 있습니다."],
        hours: "09:00~23:00 전후, 시설별 변동",
        duration: "1~2시간",
        price: "메인덱 ¥1,200 전후부터",
        bestTime: "일몰 전후~야간",
        access: { area: "미나토", station: "아카바네바시역·가미야초역 도보권", note: "롯폰기/아자부다이와 연계 가능" },
        links: [
            { label: "네이버 전망대 비교 후기", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%BF%84%ED%83%80%EC%9B%8C+%EC%8A%A4%EC%B9%B4%EC%9D%B4%ED%8A%B8%EB%A6%AC+%EC%8B%9C%EB%B6%80%EC%95%BC%EC%8A%A4%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "전망대 비교 후기" },
            { label: "도쿄 타워 공식", url: "https://www.tokyotower.co.jp/en/", type: "official", description: "티켓·운영시간" }
        ],
        updatedAt: "2026-07-09"
    },
    "도쿄 스카이트리": {
        photos: ["/images/tokyo/info/tourspa/tokyo-skytree.jpg"],
        summary: "아사쿠사·스미다 동선과 잘 맞는 초고층 전망대로, 쇼핑몰까지 한 번에 해결하기 좋습니다.",
        highlights: ["634m 전망대", "소라마치 쇼핑몰 연결", "센소지와 묶는 후기가 많음"],
        tips: ["날씨 영향을 크게 받으므로 방문 전 시야 상태를 확인하세요.", "아사쿠사 오전 방문 후 오후 스카이트리 동선이 효율적입니다."],
        warnings: ["흐린 날은 전망 만족도가 떨어질 수 있습니다."],
        hours: "10:00~22:00 전후",
        duration: "2~3시간",
        price: "전망대 ¥2,100 전후부터",
        bestTime: "맑은 날 오후~야경",
        access: { area: "오시아게", station: "도쿄스카이트리역·오시아게역 연결", note: "아사쿠사와 연계 추천" },
        links: [
            { label: "네이버 전망대 비교 후기", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%BF%84+%EC%8A%A4%EC%B9%B4%EC%9D%B4%ED%8A%B8%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 방문 후기" },
            { label: "스카이트리 공식", url: "https://www.tokyo-skytree.jp/en/", type: "official", description: "티켓·운영시간" }
        ],
        updatedAt: "2026-07-09"
    },
    "시부야 스카이": {
        photos: ["/images/tokyo/info/tourspa/shibuya-sky.jpg"],
        summary: "시부야 상공에서 도쿄 전경과 노을을 보는 인기 전망대라 사전 예약 만족도가 높습니다.",
        highlights: ["노을·야경 후기 만족도가 높음", "도쿄타워·스카이트리 조망 가능", "시부야 쇼핑·식사와 연결 쉬움"],
        tips: ["노을 시간대는 빨리 매진되므로 미리 예약하세요.", "루프탑은 날씨와 강풍에 따라 제한될 수 있습니다."],
        warnings: ["입장 시간 지정형이라 일정 여유를 두고 이동해야 합니다."],
        hours: "10:00~22:30 전후",
        duration: "1~2시간",
        price: "온라인 티켓 ¥2,500 전후부터",
        bestTime: "일몰 30~60분 전 입장",
        access: { area: "시부야", station: "시부야역 직결권", note: "시부야 스크램블 스퀘어 상부" },
        reservation: { required: true, method: "온라인 사전 예약", note: "노을 시간대는 조기 매진 가능" },
        links: [
            { label: "네이버 예약 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EB%B6%80%EC%95%BC+%EC%8A%A4%EC%B9%B4%EC%9D%B4+%EC%98%88%EC%95%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "예약·야경 후기" },
            { label: "시부야 스카이 공식", url: "https://www.shibuya-scramble-square.com/sky/", type: "official", description: "티켓·운영시간" }
        ],
        updatedAt: "2026-07-09"
    },
    "황거 동쪽 정원": {
        photos: ["/images/tokyo/info/tourspa/imperial-palace-garden.jpg"],
        summary: "도쿄역 근처에서 역사 유적과 정원을 가볍게 걷는 무료 산책 코스입니다.",
        highlights: ["도쿄역·마루노우치와 가까움", "무료 입장", "에도성 유적과 정원 산책 가능"],
        tips: ["휴원일이 있으므로 방문 전 공식 일정을 확인하세요.", "도쿄역 주변 일정 사이 1~2시간 넣기 좋습니다."],
        warnings: ["월·금 등 정기 휴원 패턴과 임시 휴원이 있을 수 있습니다."],
        hours: "09:00~16:30 전후, 계절별 변동",
        duration: "1~2시간",
        price: "무료",
        bestTime: "오전 또는 점심 전후 산책",
        access: { area: "마루노우치·황거", station: "오테마치역·도쿄역 도보권", note: "도쿄역 일정과 연계" },
        links: [
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%BF%84+%ED%99%A9%EA%B1%B0+%EB%8F%99%EC%AA%BD+%EC%A0%95%EC%9B%90+%ED%9B%84%EA%B8%B0", type: "blog", description: "방문 후기 확인" },
            { label: "궁내청 황거 동쪽 정원", url: "https://www.kunaicho.go.jp/e-event/higashigyoen.html", type: "official", description: "개방일·운영시간" }
        ],
        updatedAt: "2026-07-09"
    },
    "우에노 공원": {
        photos: ["/images/tokyo/info/tourspa/ueno-park.jpg"],
        summary: "박물관·미술관·동물원까지 묶을 수 있는 우에노 대표 산책지입니다.",
        highlights: ["도쿄국립박물관과 같은 날 동선", "벚꽃 시즌 대표 명소", "나리타 공항 이동 전후 거점으로도 편리"],
        tips: ["공원만 보면 짧고, 박물관까지 넣으면 반나절 일정으로 잡으세요.", "아메요코 시장과 함께 묶으면 식사·쇼핑 동선이 편합니다."],
        warnings: ["벚꽃 시즌과 주말에는 매우 혼잡합니다."],
        hours: "공원 상시 개방, 시설별 상이",
        duration: "1~3시간",
        price: "공원 무료, 시설별 유료",
        bestTime: "오전 산책 또는 박물관 개관 시간대",
        access: { area: "우에노", station: "우에노역·게이세이우에노역 도보권", note: "박물관·아메요코 연계" },
        links: [
            { label: "네이버 우에노 후기", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EC%97%90%EB%85%B8+%EA%B3%B5%EC%9B%90+%EB%8F%84%EC%BF%84%EA%B5%AD%EB%A6%BD%EB%B0%95%EB%AC%BC%EA%B4%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "공원·박물관 후기" },
            { label: "우에노 공원 공식", url: "https://www.kensetsu.metro.tokyo.lg.jp/jimusho/toubuk/ueno/index_top.html", type: "official", description: "도쿄도 공원 안내" }
        ],
        updatedAt: "2026-07-09"
    },
    "도쿄 국립박물관": {
        photos: ["/images/tokyo/info/tourspa/tokyo-national-museum.jpg"],
        summary: "일본 미술·역사 유물을 폭넓게 볼 수 있는 우에노 핵심 실내 명소입니다.",
        highlights: ["우천 대안으로 좋음", "우에노 공원과 자연스럽게 연결", "본관·정원 관람 후기가 많음"],
        tips: ["상설전만 봐도 2시간 이상 잡는 것이 좋습니다.", "특별전은 별도 티켓·혼잡 여부를 확인하세요."],
        warnings: ["월요일 휴관 등 휴관일이 있을 수 있습니다."],
        hours: "09:30~17:00 전후, 전시별 변동",
        duration: "2~3시간",
        price: "상설전 ¥1,000 전후",
        bestTime: "오전 개관 직후 또는 비 오는 날",
        access: { area: "우에노", station: "우에노역 도보권", note: "우에노 공원 내부" },
        links: [
            { label: "네이버 박물관 후기", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%BF%84+%EA%B5%AD%EB%A6%BD%EB%B0%95%EB%AC%BC%EA%B4%80+%EC%9A%B0%EC%97%90%EB%85%B8+%ED%9B%84%EA%B8%B0", type: "blog", description: "관람 후기" },
            { label: "도쿄 국립박물관 공식", url: "https://www.tnm.jp/?lang=en", type: "official", description: "전시·휴관일" }
        ],
        updatedAt: "2026-07-09"
    },
    "하마리큐 은사정원": {
        photos: ["/images/tokyo/info/tourspa/hamarikyu-garden.jpg"],
        summary: "도심 빌딩과 전통 정원이 함께 보이는 긴자·신바시권 산책 명소입니다.",
        highlights: ["전통과 현대가 공존하는 풍경", "츠키지·신바시·긴자와 동선 좋음", "혼잡한 도심 일정 중 쉬어가기 좋음"],
        tips: ["츠키지 식사 후 산책 코스로 넣으면 자연스럽습니다.", "정원 내 찻집 운영 여부는 방문 전 확인하세요."],
        warnings: ["입장 마감 시간이 빠른 편이라 늦은 오후 방문은 주의하세요."],
        hours: "09:00~17:00 전후",
        duration: "1~2시간",
        price: "¥300 전후",
        bestTime: "오전~오후 초반",
        access: { area: "시오도메·신바시", station: "시오도메역·신바시역 도보권", note: "츠키지·긴자와 연계" },
        links: [
            { label: "네이버 하마리큐 후기", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%A7%88%EB%A6%AC%ED%81%90+%EC%9D%80%EC%82%AC%EC%A0%95%EC%9B%90+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 방문 후기" },
            { label: "하마리큐 공식 안내", url: "https://www.tokyo-park.or.jp/park/hama-rikyu/", type: "official", description: "운영시간·입장료" }
        ],
        updatedAt: "2026-07-09"
    },
    "teamLab Borderless Azabudai Hills": {
        photos: ["/images/tokyo/info/tourspa/teamlab-borderless.jpg"],
        summary: "아자부다이 힐스의 몰입형 디지털 아트 전시로, 사전 예약형 실내 일정에 적합합니다.",
        highlights: ["예약 후 방문 후기가 많음", "비 오는 날·더운 날 실내 대안", "아자부다이 힐스 구경과 연결 가능"],
        tips: ["늦은 시간대는 관람 시간이 짧게 느껴질 수 있어 여유 있게 예약하세요.", "짐은 락커에 맡기고 움직이는 편이 편합니다."],
        warnings: ["인기 시간대는 매진 가능성이 있어 사전 예약이 안전합니다."],
        hours: "09:00~21:00 전후, 날짜별 변동",
        duration: "2~3시간",
        price: "¥3,800~4,800 전후",
        bestTime: "오전 첫 타임 또는 평일",
        access: { area: "아자부다이 힐스", station: "가미야초역·롯폰기잇초메역 도보권", note: "도쿄타워와 연계 가능" },
        reservation: { required: true, method: "공식 온라인 예약", note: "시간 지정형 티켓" },
        links: [
            { label: "네이버 팀랩 후기", url: "https://search.naver.com/search.naver?query=teamLab+Borderless+Azabudai+Hills+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0+%EC%98%88%EC%95%BD", type: "blog", description: "예약·관람 후기" },
            { label: "teamLab Borderless 공식", url: "https://www.teamlab.art/e/borderless-azabudai/", type: "official", description: "티켓·운영시간" }
        ],
        updatedAt: "2026-07-09"
    },
    "도쿄도청 전망대": {
        photos: ["/images/tokyo/info/tourspa/tmg-observation.jpg"],
        summary: "신주쿠에서 무료로 도쿄 전경을 볼 수 있는 실속형 전망대입니다.",
        highlights: ["무료 전망대", "신주쿠 숙소·쇼핑 동선과 가까움", "도쿄타워·스카이트리 대안으로 좋음"],
        tips: ["유료 전망대 전후 비교 코스로 넣기 좋습니다.", "입장 대기와 운영 전망실 변경 여부를 확인하세요."],
        warnings: ["행사·점검으로 전망실 운영이 바뀔 수 있습니다."],
        hours: "09:30~22:00 전후, 전망실별 변동",
        duration: "1시간",
        price: "무료",
        bestTime: "맑은 날 오후 또는 야간",
        access: { area: "신주쿠", station: "도초마에역 연결·신주쿠역 도보권", note: "신주쿠 일정과 연계" },
        links: [
            { label: "네이버 전망대 후기", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%BF%84%EB%8F%84%EC%B2%AD+%EC%A0%84%EB%A7%9D%EB%8C%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "방문 후기" },
            { label: "도쿄도청 전망대 공식", url: "https://www.yokoso.metro.tokyo.lg.jp/en/tenbou/index.html", type: "official", description: "운영시간·휴무" }
        ],
        updatedAt: "2026-07-09"
    },
    "오다이바 해변공원": {
        photos: ["/images/tokyo/info/tourspa/odaiba-seaside-park.jpg"],
        summary: "레인보우브릿지와 베이사이드 야경을 보며 산책하기 좋은 오다이바 대표 명소입니다.",
        highlights: ["야경·해변 산책", "쇼핑몰·실내 시설과 연결 쉬움", "하마리큐·수상버스 동선과도 연계 가능"],
        tips: ["해질 무렵부터 야경까지 보는 일정이 가장 무난합니다.", "바람이 강한 날이 있어 외투를 준비하면 좋습니다."],
        warnings: ["해변 공원 자체보다 주변 쇼핑몰·시설 운영시간을 함께 확인해야 합니다."],
        hours: "공원 상시 개방, 주변 시설별 상이",
        duration: "1~2시간",
        price: "무료",
        bestTime: "일몰~야간",
        access: { area: "오다이바", station: "오다이바카이힌코엔역 도보권", note: "다이버시티·아쿠아시티와 연계" },
        links: [
            { label: "네이버 오다이바 후기", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%8B%A4%EC%9D%B4%EB%B0%94+%ED%95%B4%EB%B3%80%EA%B3%B5%EC%9B%90+%ED%9B%84%EA%B8%B0", type: "blog", description: "야경·산책 후기" },
            { label: "오다이바 해변공원 안내", url: "https://www.tptc.co.jp/en/park/01_02", type: "official", description: "공원 안내" }
        ],
        updatedAt: "2026-07-09"
    }
};

export default info;
