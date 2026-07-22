import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "센트럴 페스티벌 치앙마이": {
        photos: ["/images/chiang-mai/info/shopping/central-festival-chiang-mai.jpg"],
        summary: "센트럴 페스티발 치앙마이 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 식당가, 영화관", "평점 4.5", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.centralchiangmai.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=322529596830662200", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%BC%ED%8A%B8%EB%9F%B4+%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마야 라이프스타일 쇼핑센터": {
        photos: ["/images/chiang-mai/info/shopping/maya-lifestyle-shopping-center-chiang-mai.jpg"],
        summary: "마야 라이프스타일 쇼핑센터 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["님만 쇼핑, 카페, 식당가", "평점 4.4", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.mayashoppingcenter.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2634136185446806142", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%95%BC+%EB%9D%BC%EC%9D%B4%ED%94%84%EC%8A%A4%ED%83%80%EC%9D%BC+%EC%87%BC%ED%95%91%EC%84%BC%ED%84%B0+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "원 님만": {
        photos: ["/images/chiang-mai/info/shopping/one-nimman-chiang-mai.png"],
        summary: "원님만 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["부티크, 카페, 디자인숍", "평점 4.5", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.onenimman.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4179123163732524983", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9B%90+%EB%8B%98%EB%A7%8C+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "치앙마이 나이트 바자": {
        photos: ["/images/chiang-mai/info/shopping/chiang-mai-night-bazaar.jpg"],
        summary: "선데이마켓 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["기념품, 의류, 먹거리", "평점 4.5", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 휴무일; 화요일: 휴무일",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15150396861317163278", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%EB%82%98%EC%9D%B4%ED%8A%B8+%EB%B0%94%EC%9E%90+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "선데이 워킹 스트리트": {
        photos: ["/images/chiang-mai/info/shopping/sunday-walking-street-chiang-mai.jpg"],
        summary: "Chiang Mai Walking Street 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["수공예품, 먹거리, 기념품", "평점 4.6", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 휴무일; 화요일: 휴무일",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12803601788408078358", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%A0%EB%8D%B0%EC%9D%B4+%EC%9B%8C%ED%82%B9+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "새터데이 나이트 마켓": {
        photos: ["/images/chiang-mai/info/shopping/saturday-night-market-chiang-mai.jpg"],
        summary: "Wua Lai Walking Street Saturday Market 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["먹거리, 기념품, 로컬 분위기", "평점 4.5", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 휴무일; 화요일: 휴무일",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9528490394611933464", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%88%ED%84%B0%EB%8D%B0%EC%9D%B4+%EB%82%98%EC%9D%B4%ED%8A%B8+%EB%A7%88%EC%BC%93+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "와로롯 시장": {
        photos: ["/images/chiang-mai/info/shopping/warorot-market-chiang-mai.jpg"],
        summary: "와로롯 시장 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["건과일, 간식, 로컬 식재료", "평점 4.4", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 5:00; 화요일: 오전 6:00 ~ 오후 5:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2648256326189542464", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%80%EB%A1%9C%EB%A1%AF+%EC%8B%9C%EC%9E%A5+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "깟루앙 시장": {
        photos: ["/images/chiang-mai/info/shopping/kad-luang-chiang-mai.jpg"],
        summary: "Kad Luang (Luang Market) 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로컬 식품, 의류, 간식", "평점 4.6", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 7:00; 화요일: 오전 7:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1268730289919144427", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B9%9F%EB%A3%A8%EC%95%99+%EC%8B%9C%EC%9E%A5+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "깟수언깨우": {
        photos: ["/images/chiang-mai/info/shopping/kad-suan-kaew-chiang-mai.jpg"],
        summary: "Kad Suan Kaew 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로컬 쇼핑몰, 생활용품", "평점 4.1", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2776446231613412337", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B9%9F%EC%88%98%EC%96%B8%EA%B9%A8%EC%9A%B0+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "림핑 슈퍼마켓 님시티": {
        photos: ["/images/chiang-mai/info/shopping/rimping-supermarket-nim-city-chiang-mai.jpg"],
        summary: "Rimping Supermarket Nim City Branch 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["식료품, 수입식품, 간식", "평점 4.6", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 9:00; 화요일: 오전 8:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.rimping.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8554321359809343287", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%BC%ED%95%91+%EC%8A%88%ED%8D%BC%EB%A7%88%EC%BC%93+%EB%8B%98%EC%8B%9C%ED%8B%B0+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "찡짜이 마켓": {
        photos: ["/images/chiang-mai/info/shopping/jing-jai-market-chiang-mai.jpg"],
        summary: "수공예품, 로컬 푸드, 빈티지 소품을 둘러보기 좋은 치앙마이 로컬 마켓입니다.",
        updatedAt: "2026-07-22",
        highlights: ["수공예품·디자인 소품", "로컬 푸드와 간식", "주말 오전 산책 코스"],
        tips: ["주말 오전에 가장 활기가 좋습니다.", "작은 현금을 준비하면 편합니다."],
        taxRefund: { available: false, note: "시장형 매장이라 일반적으로 택스리펀드 대상이 아닙니다." },
        hours: "방문 전 운영시간 확인 권장",
        payment: ["현금", "일부 매장 카드/QR 가능 여부 확인"],
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Jing%20Jai%20Market%20Chiang%20Mai&query_place_id=ChIJA4BmCAA72jARyJhdjYLGdtc", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B0%A1%EC%A7%9C%EC%9D%B4%20%EB%A7%88%EC%BC%93%20%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
