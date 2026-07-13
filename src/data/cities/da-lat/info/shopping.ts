import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "달랏 시장": {
        photos: ["/images/da-lat/info/shopping/da-lat-market.png"],
        summary: "Da Lat Market 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["딸기, 말린 과일, 로컬 간식", "평점 4.5", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5084899052227786311", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%AC%EB%9E%8F+%EC%8B%9C%EC%9E%A5+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "달랏 야시장": {
        photos: ["/images/da-lat/info/shopping/dalat-night-market.jpg"],
        summary: "달랏 야시장 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["간식, 의류, 기념품", "평점 4.2", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 5:30 ~ 오전 12:00; 화요일: 오후 5:30 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2436440445419988028", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%AC%EB%9E%8F+%EC%95%BC%EC%8B%9C%EC%9E%A5+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "랑팜 스토어 달랏": {
        photos: ["/images/da-lat/info/shopping/l-angfarm-store-da-lat.jpg"],
        summary: "Langfarm Store Go! Đà Lạt 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["말린 과일, 차, 잼, 커피", "평점 5", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:30 ~ 오후 10:00; 화요일: 오전 7:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://langfarm.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3146554589909373444", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%91%ED%8C%9C+%EC%8A%A4%ED%86%A0%EC%96%B4+%EB%8B%AC%EB%9E%8F+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빅씨 달랏": {
        photos: ["/images/da-lat/info/shopping/big-c-da-lat.png"],
        summary: "고! 달랏 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["간식, 생필품, 기념품", "평점 4.2", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:30 ~ 오후 10:00; 화요일: 오전 7:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17724423355459344240", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%85%EC%94%A8+%EB%8B%AC%EB%9E%8F+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "달랏 센터": {
        photos: ["/images/da-lat/info/shopping/dalat-center.jpg"],
        summary: "Đà Lạt Center Condotel 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["마트, 카페, 도심 쇼핑", "평점 4.6", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6224726320777713226", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%AC%EB%9E%8F+%EC%84%BC%ED%84%B0+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "XQ 달랏 자수마을": {
        photos: ["/images/da-lat/info/shopping/xq-da-lat-historical-village.jpg"],
        summary: "Xq Historical Village 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["자수 작품, 공예품", "평점 4.6", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 5:30; 화요일: 오전 8:00 ~ 오후 5:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10476575796238915003", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=XQ+%EB%8B%AC%EB%9E%8F+%EC%9E%90%EC%88%98%EB%A7%88%EC%9D%84+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "달랏 하스팜 플라워샵": {
        photos: ["/images/da-lat/info/shopping/dalat-hasfarm-shop.jpg"],
        summary: "Dalat Hasfarm 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["꽃, 선물, 플라워 상품", "평점 4.3", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 8:00; 화요일: 오전 6:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://dalathasfarm.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4351144814448632274", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%AC%EB%9E%8F+%ED%95%98%EC%8A%A4%ED%8C%9C+%ED%94%8C%EB%9D%BC%EC%9B%8C%EC%83%B5+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "꺼우닷 팜샵": {
        photos: ["/images/da-lat/info/shopping/nong-trai-cu-cau-dat-farm-shop-da-lat.jpg"],
        summary: "Nông trại trà và cà phê Cầu Đất 1650 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["차, 커피, 농장 상품", "평점 5", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 8:00; 화요일: 오전 7:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://caudat1650.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15026029108841526115", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%BA%BC%EC%9A%B0%EB%8B%B7+%ED%8C%9C%EC%83%B5+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호아빈 광장 상권": {
        photos: ["/images/da-lat/info/shopping/hoa-binh-area-da-lat-market.jpg"],
        summary: "Khu hoà bình đà lạt 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["의류, 카페, 기념품", "평점 4.8", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9381533903988069050", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%EC%95%84%EB%B9%88+%EA%B4%91%EC%9E%A5+%EC%83%81%EA%B6%8C+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "달랏 기념품숍": {
        photos: ["/images/da-lat/info/shopping/da-lat-souvenir-shop.jpg"],
        summary: "Miue healing Gifts Shop cs2 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로컬 기념품, 간식", "평점 5", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7580002424888503981", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%AC%EB%9E%8F+%EA%B8%B0%EB%85%90%ED%92%88%EC%88%8D+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
