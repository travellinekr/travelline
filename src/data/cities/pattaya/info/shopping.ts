import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "터미널21 파타야": {
        photos: ["/images/pattaya/info/shopping/terminal-21-pattaya.jpg"],
        summary: "세계 주요 도시 테마로 꾸며진 이색적인 인테리어의 쇼핑몰입니다.",
        updatedAt: "2026-07-15",
        highlights: ["도시별 컨셉이 뚜렷한 독특한 인테리어", "다양한 글로벌 패션 및 잡화 브랜드 입점"],
        tips: ["푸드코트 가성비가 좋아 식사까지 해결하기 좋습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5359659453328244292", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%84%B0%EB%AF%B8%EB%84%9021+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "센트럴 파타야": {
        photos: ["/images/pattaya/info/shopping/central-pattaya.jpg"],
        summary: "파타야 최대 규모를 자랑하는 쾌적한 대형 쇼핑몰입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대규모 브랜드와 대형 마트 입점", "다양한 의류 및 라이프스타일 아이템"],
        tips: ["기념품과 생필품 쇼핑을 한 번에 끝내기에 최적입니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13007183030814211835", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%BC%ED%8A%B8%EB%9F%B4+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "파타야 수상시장": {
        photos: ["/images/pattaya/info/shopping/pattaya-floating-market.jpg"],
        summary: "태국 전통 분위기를 느끼며 로컬 기념품을 구경할 수 있는 곳입니다.",
        updatedAt: "2026-07-15",
        highlights: ["전통 배를 타고 즐기는 이색적인 풍경", "아기자기한 수공예품과 현지 간식"],
        tips: ["현지 느낌 물씬 나는 소품 쇼핑을 즐겨보세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 7:00; 화요일: 오전 9:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://pattayafloatingmarket.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17296574346285400555", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%ED%83%80%EC%95%BC+%EC%88%98%EC%83%81%EC%8B%9C%EC%9E%A5+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "로열 가든 플라자": {
        photos: ["/images/pattaya/info/shopping/royal-garden-plaza-pattaya.jpg"],
        summary: "파타야 시내 중심에서 쇼핑과 식사를 한 번에 해결하기 딱 좋은 곳이에요.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 브랜드 매장", "쾌적한 실내 환경"],
        tips: ["더운 낮 시간대에 에어컨 바람 쐬며 쉬어가기 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.royalgardenplaza.co.th/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6802001375594959468", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EC%97%B4+%EA%B0%80%EB%93%A0+%ED%94%8C%EB%9D%BC%EC%9E%90+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마이크 쇼핑몰": {
        photos: ["/images/pattaya/info/shopping/mike-shopping-mall-pattaya.jpg"],
        summary: "가볍게 산책하듯 구경하며 기념품 사기 좋은 오픈형 몰이에요.",
        updatedAt: "2026-07-15",
        highlights: ["아기자기한 소품", "캐주얼한 쇼핑 분위기"],
        tips: ["야외 공간이 많으니 저녁 시간 방문을 추천해요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16306466630100987619", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%9D%B4%ED%81%AC+%EC%87%BC%ED%95%91%EB%AA%B0+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "텝쁘라싯 야시장": {
        photos: ["/images/pattaya/info/shopping/thepprasit-night-market-pattaya.jpg"],
        summary: "현지 감성 가득한 먹거리와 기념품이 가득한 활기찬 야시장입니다.",
        updatedAt: "2026-07-15",
        highlights: ["저렴하고 맛있는 길거리 음식", "현지 분위기 물씬"],
        tips: ["흥정하는 재미가 있으니 소액권 지폐를 준비하세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 5:00~10:30; 화요일: 오후 5:00~10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/thepprasitmarket", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7858593655101965473", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%9D%EC%81%98%EB%9D%BC%EC%8B%AF+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "좀티엔 야시장": {
        photos: ["/images/pattaya/info/shopping/jomtien-night-market-pattaya.jpg"],
        summary: "좀티엔 야시장 기준으로 확인한 파타야 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 4.4", "파타야 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.facebook.com/Jomtien.Night.Market18", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15613643072566810554", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A2%80%ED%8B%B0%EC%97%94+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하버 파타야": {
        photos: ["/images/pattaya/info/shopping/harbor-pattaya.jpg"],
        summary: "아버 호텔 앤 레지던스 파타야 기준으로 확인한 파타야 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 4.9", "파타야 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.arbourhotelandresidence.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8514979011697391758", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%B2%84+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아울렛 몰 파타야": {
        photos: ["/images/pattaya/info/shopping/outlet-mall-pattaya.jpg"],
        summary: "Outlet Mall Pattaya 기준으로 확인한 파타야 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 4", "파타야 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.outletmallthailand.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16792198060870439138", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9A%B8%EB%A0%9B+%EB%AA%B0+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빅씨 엑스트라 파타야": {
        photos: ["/images/pattaya/info/shopping/big-c-extra-pattaya.jpg"],
        summary: "파타야 여행 기념품 쇼핑을 한 번에 해결할 수 있는 대형 마트",
        updatedAt: "2026-07-15",
        highlights: ["태국 국민 과자와 다양한 간식거리 가득", "드럭스토어 및 각종 생필품 쇼핑 가능"],
        tips: ["기념품 대량 구매 시 미리 장바구니를 챙기면 편리해요", "매장 에어컨이 매우 강하니 얇은 외투를 준비하세요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13776276537421636827", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%85%EC%94%A8+%EC%97%91%EC%8A%A4%ED%8A%B8%EB%9D%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
