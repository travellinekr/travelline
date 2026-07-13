import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "국제거리": {
        photos: ["/images/okinawa/info/shopping/kokusai-dori-naha-okinawa.jpg"],
        summary: "오키나와 여행의 필수 코스, 다양한 기념품과 먹거리가 가득한 나하 최대의 번화가입니다.",
        updatedAt: "2026-07-13",
        highlights: ["오키나와 특산물 및 기념품 쇼핑", "다양한 길거리 간식 투어", "아기자기한 소품샵 구경"],
        tips: ["주말에는 인파가 매우 많으니 여유로운 일정으로 방문하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10189739362213780994", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%AD%EC%A0%9C%EA%B1%B0%EB%A6%AC+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "T 갤러리아 오키나와 by DFS": {
        photos: ["/images/okinawa/info/shopping/dfs-t-galleria-okinawa.jpg"],
        summary: "명품 브랜드부터 화장품까지 면세 혜택을 누릴 수 있는 프리미엄 쇼핑 공간입니다.",
        updatedAt: "2026-07-13",
        highlights: ["글로벌 명품 브랜드 입점", "다양한 코스메틱 브랜드", "쾌적하고 고급스러운 쇼핑 환경"],
        tips: ["면세 혜택을 위해 여권을 반드시 지참하세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11853769316566352063", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=T+%EA%B0%A4%EB%9F%AC%EB%A6%AC%EC%95%84+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+by+DFS+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이온몰 오키나와 라이카무": {
        photos: ["/images/okinawa/info/shopping/aeon-mall-okinawa-rycom.jpg"],
        summary: "패션부터 식당가까지 모든 것을 갖춘 대규모 복합 쇼핑몰로 가족 여행객에게 추천합니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 글로벌 패션 브랜드", "대형 푸드코트와 다양한 식당가", "아이들과 함께하기 좋은 넓은 공간"],
        tips: ["쇼핑과 식사를 한 번에 해결할 수 있어 편리합니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14640780388564529515", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%98%A8%EB%AA%B0+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%EB%9D%BC%EC%9D%B4%EC%B9%B4%EB%AC%B4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오키나와 아시비나 아울렛몰": {
        photos: ["/images/okinawa/info/shopping/ashibinaa-okinawa-outlet-mall.jpg"],
        summary: "오키나와 아웃렛몰 아시비나 기준으로 확인한 오키나와 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["브랜드 아울렛, 공항 근처 쇼핑", "평점 4", "오키나와 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.ashibinaa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15357081985715617318", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%EC%95%84%EC%8B%9C%EB%B9%84%EB%82%98+%EC%95%84%EC%9A%B8%EB%A0%9B%EB%AA%B0+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우미카지 테라스": {
        photos: ["/images/okinawa/info/shopping/umikaji-terrace-okinawa.jpg"],
        summary: "세나가섬 우미카지테라스 기준으로 확인한 오키나와 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["카페, 기념품, 바다 전망", "평점 4.3", "오키나와 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.umikajiterrace.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11904711692991169464", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%AF%B8%EC%B9%B4%EC%A7%80+%ED%85%8C%EB%9D%BC%EC%8A%A4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
