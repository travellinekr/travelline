import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "괌 프리미어 아울렛": {
        photos: ["/images/guam/info/shopping/guam-premier-outlets.jpg"],
        summary: "괌 프리미어 아울렛 기준으로 확인한 괌 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["브랜드 할인 쇼핑, 푸드코트", "평점 4.1", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.gpoguam.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8107909422660008965", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B4%8C+%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4+%EC%95%84%EC%9A%B8%EB%A0%9B+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마이크로네시아 몰": {
        photos: ["/images/guam/info/shopping/micronesia-mall-guam.jpg"],
        summary: "마이크로네시아몰 기준으로 확인한 괌 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["백화점, 푸드코트, 가족 쇼핑", "평점 4.1", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.micronesiamall.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14458873827386550960", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C%EB%84%A4%EC%8B%9C%EC%95%84+%EB%AA%B0+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "T 갤러리아 DFS 괌": {
        photos: ["/images/guam/info/shopping/t-galleria-by-dfs-guam.jpg"],
        summary: "T갤러리아 DFS 기준으로 확인한 괌 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["명품, 화장품, 기념품", "평점 4", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4393394649213291606", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=T+%EA%B0%A4%EB%9F%AC%EB%A6%AC%EC%95%84+DFS+%EA%B4%8C+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "투몬 샌즈 플라자": {
        photos: ["/images/guam/info/shopping/tumon-sands-plaza-guam.jpg"],
        summary: "투몬 시내 중심에서 즐기는 명품과 패션 쇼핑의 성지",
        updatedAt: "2026-07-14",
        highlights: ["다양한 브랜드 입점", "쾌적한 쇼핑 환경"],
        tips: ["에어컨이 시원해서 더위 피하기 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.tumonsandsplaza.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14451607547494582731", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%88%AC%EB%AA%AC+%EC%83%8C%EC%A6%88+%ED%94%8C%EB%9D%BC%EC%9E%90+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "괌 K마트": {
        photos: ["/images/guam/info/shopping/kmart-guam.jpg"],
        summary: "기념품부터 간식까지, 괌 여행객들의 필수 코스인 대형 마트",
        updatedAt: "2026-07-14",
        highlights: ["가성비 넘치는 스낵류", "다양한 기념품 쇼핑 가능"],
        tips: ["여행 마지막 날 선물용으로 쓸 물건들 털기 좋아요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12979997179460097280", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B4%8C+K%EB%A7%88%ED%8A%B8+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
