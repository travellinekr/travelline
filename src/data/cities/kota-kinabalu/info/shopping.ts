import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "이마고 쇼핑몰": {
        photos: ["/images/kota-kinabalu/info/shopping/imago-shopping-mall-kota-kinabalu.jpg"],
        summary: "코타키나발루에서 가장 쾌적하고 세련된 프리미엄 쇼핑몰",
        updatedAt: "2026-07-15",
        highlights: ["글로벌 브랜드와 맛집이 모인 곳", "깔끔한 시설과 대형 마트 보유"],
        tips: ["에어컨이 시원해서 더위 피하기 좋고, 쇼핑과 식사를 한 번에 해결 가능해요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.imago.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3711006181107617164", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EB%A7%88%EA%B3%A0+%EC%87%BC%ED%95%91%EB%AA%B0+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "수리아 사바 쇼핑몰": {
        photos: ["/images/kota-kinabalu/info/shopping/suria-sabah-shopping-mall-kota-kinabalu.jpg"],
        summary: "수리아 사바 기준으로 확인한 코타키나발루 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["브랜드, 식당, 항구 접근", "평점 4.4", "코타키나발루 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.suriasabah.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1141509780800733103", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%98%EB%A6%AC%EC%95%84+%EC%82%AC%EB%B0%94+%EC%87%BC%ED%95%91%EB%AA%B0+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "센터 포인트 사바": {
        photos: ["/images/kota-kinabalu/info/shopping/centre-point-sabah-kota-kinabalu.jpg"],
        summary: "로컬 감성 가득한 알뜰 쇼핑의 성지",
        updatedAt: "2026-07-15",
        highlights: ["저렴한 로컬 상점과 다양한 식당가", "환전소가 있어 여행 경비 관리에 용이"],
        tips: ["기념품 쇼핑이나 환전 등 실속 있는 일정에 추천해요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3587395883773954700", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%BC%ED%84%B0+%ED%8F%AC%EC%9D%B8%ED%8A%B8+%EC%82%AC%EB%B0%94+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "필리피노 마켓": {
        photos: ["/images/kota-kinabalu/info/shopping/filipino-market-kota-kinabalu.jpg"],
        summary: "싱싱한 해산물과 반짝이는 진주 액세서리를 만날 수 있는 활기찬 야시장이에요.",
        updatedAt: "2026-07-15",
        highlights: ["신선한 해산물 요리", "다양한 디자인의 진주 제품"],
        tips: ["저녁에는 인파가 몰리니 조금 일찍 방문하는 것을 추천해요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:30; 화요일: 오전 8:00 ~ 오후 10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.instagram.com/shaandhana", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16165167725338152193", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%84%EB%A6%AC%ED%94%BC%EB%85%B8+%EB%A7%88%EC%BC%93+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "가야 스트리트 선데이 마켓": {
        photos: ["/images/kota-kinabalu/info/shopping/gaya-street-sunday-market-kota-kinabalu.jpg"],
        summary: "일요일 아침에만 열리는 로컬 감성 가득한 기념품 시장이에요.",
        updatedAt: "2026-07-15",
        highlights: ["아기자기한 수공예품", "다양한 현지 길거리 간식"],
        tips: ["일찍 서둘러야 예쁜 소품들을 선점할 수 있어요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 휴무일; 화요일: 휴무일",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18136024767373399661", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%80%EC%95%BC+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%EC%84%A0%EB%8D%B0%EC%9D%B4+%EB%A7%88%EC%BC%93+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카라문싱 컴플렉스": {
        photos: ["/images/kota-kinabalu/info/shopping/karamunsing-complex-kota-kinabalu.jpg"],
        summary: "전자제품과 생활용품을 합리적인 가격에 쇼핑할 수 있는 현지 쇼핑몰이에요.",
        updatedAt: "2026-07-15",
        highlights: ["가성비 좋은 전자 기기", "다양한 종류의 생필품"],
        tips: ["현지인들의 일상을 엿보며 실속 있게 쇼핑하기 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12209509574574686958", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%9D%BC%EB%AC%B8%EC%8B%B1+%EC%BB%B4%ED%94%8C%EB%A0%89%EC%8A%A4+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오셔너스 워터프런트 몰": {
        photos: ["/images/kota-kinabalu/info/shopping/oceanus-waterfront-mall-kota-kinabalu.jpg"],
        summary: "해안 산책로를 따라 맛집과 카페를 즐기기 좋은 곳",
        updatedAt: "2026-07-15",
        highlights: ["바다 전망의 산책 코스", "다양한 식당과 카페"],
        tips: ["일몰 시간에 맞춰 방문하면 환상적인 선셋을 볼 수 있어요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16826283068802258521", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%85%94%EB%84%88%EC%8A%A4+%EC%9B%8C%ED%84%B0%ED%94%84%EB%9F%B0%ED%8A%B8+%EB%AA%B0+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "제셀톤 듀티프리": {
        photos: ["/images/kota-kinabalu/info/shopping/jesselton-duty-free-kota-kinabalu.jpg"],
        summary: "주류와 화장품 등 면세 쇼핑을 즐길 수 있는 곳",
        updatedAt: "2026-07-15",
        highlights: ["저렴한 주류 및 브랜드 화장품", "다양한 기념품"],
        tips: ["귀국 전 선물용 아이템을 구매하기 좋아요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/jesseltondutyfree/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16239609027150668098", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%9C%EC%85%80%ED%86%A4+%EB%93%80%ED%8B%B0%ED%94%84%EB%A6%AC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "KK 플라자": {
        photos: ["/images/kota-kinabalu/info/shopping/kk-plaza-kota-kinabalu.jpg"],
        summary: "현지 마트와 다양한 상점이 모여 있는 쇼핑 명소",
        updatedAt: "2026-07-15",
        highlights: ["로컬 식재료를 파는 마트", "다채로운 로컬 상점과 식당"],
        tips: ["기념품용 간식이나 현지 소품을 구경하기 좋습니다"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9414687933240110452", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=KK+%ED%94%8C%EB%9D%BC%EC%9E%90+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코타키나발루 핸디크래프트 마켓": {
        photos: ["/images/kota-kinabalu/info/shopping/handicraft-market-kota-kinabalu.jpg"],
        summary: "필리피노 마켓 기준으로 확인한 코타키나발루 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["수공예품, 진주, 사바 기념품", "평점 4", "코타키나발루 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11432816678549530424", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%95%B8%EB%94%94%ED%81%AC%EB%9E%98%ED%94%84%ED%8A%B8+%EB%A7%88%EC%BC%93+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
