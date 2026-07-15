import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "동쑤언 시장": {
        photos: ["/images/hanoi/info/shopping/dong-xuan-market-hanoi.jpg"],
        summary: "하노이 최대 규모의 전통 시장으로 다양한 기념품을 구경하기 좋아요.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 로컬 아이템", "현지 분위기 가득한 골목"],
        tips: ["흥정은 필수!", "오전 방문을 추천해요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15699254198429423590", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%99%EC%91%A4%EC%96%B8+%EC%8B%9C%EC%9E%A5+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하노이 올드쿼터 야시장": {
        photos: ["/images/hanoi/info/shopping/hanoi-old-quarter-night-market.jpg"],
        summary: "활기찬 밤의 열기를 느낄 수 있는 길거리 쇼핑의 성지입니다.",
        updatedAt: "2026-07-15",
        highlights: ["길거리 먹거리와 소품", "북적이는 야시장 분위기"],
        tips: ["주말 저녁에만 운영하니 일정 확인 필수!", "사람이 많으니 소매치기를 주의하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6436514622737634446", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%85%B8%EC%9D%B4+%EC%98%AC%EB%93%9C%EC%BF%BC%ED%84%B0+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "짱띠엔 플라자": {
        photos: ["/images/hanoi/info/shopping/trang-tien-plaza-hanoi.jpg"],
        summary: "하노이에서 만나는 세련된 브랜드와 현대적인 쇼핑 공간입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쾌적한 실내 환경", "다양한 글로벌 브랜드 입점"],
        tips: ["더위를 피해 시원하게 쇼핑하기 좋아요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 9:30; 화요일: 오전 9:30 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5294772138945665532", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%B1%EB%9D%A0%EC%97%94+%ED%94%8C%EB%9D%BC%EC%9E%90+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "롯데센터 하노이": {
        photos: ["/images/hanoi/info/shopping/lotte-center-hanoi.jpg"],
        summary: "쇼핑과 전망을 동시에 즐길 수 있는 하노이의 대표적인 랜드마크입니다.",
        updatedAt: "2026-07-15",
        highlights: ["롯데마트에서 다양한 기념품 쇼핑 가능", "하노이 시내를 한눈에 담는 탁 트인 전망대"],
        tips: ["일몰 시간에 맞춰 방문하면 아름다운 야경까지 감상할 수 있어요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://thinkoffice.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18153478485024015252", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%AF%EB%8D%B0%EC%84%BC%ED%84%B0+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈컴센터 바찌에우": {
        photos: ["/images/hanoi/info/shopping/vincom-center-ba-trieu-hanoi.jpg"],
        summary: "트렌디한 브랜드와 맛집이 모여 있는 세련된 복합 쇼핑 공간입니다.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 패션 브랜드와 대형 영화관 보유", "쾌적하고 깔끔한 쇼핑 환경"],
        tips: ["주말에는 인파가 몰릴 수 있으니 평일 방문을 추천해요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://vincom.com.vn/vincom-center-ba-trieu", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3589625131157833119", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EC%BB%B4%EC%84%BC%ED%84%B0+%EB%B0%94%EC%B0%8C%EC%97%90%EC%9A%B0+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "항가이 실크 거리": {
        photos: ["/images/hanoi/info/shopping/hang-gai-street-hanoi.jpg"],
        summary: "베트남 전통 실크 제품과 아기자기한 소품들을 만날 수 있는 올드쿼터의 명소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["고퀄리티 실크 스카프와 의류", "베트남 감성 가득한 기념품 쇼핑"],
        tips: ["흥정은 필수! 마음에 드는 물건을 발견하면 천천히 가격을 맞춰보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3525821374106144776", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%AD%EA%B0%80%EC%9D%B4+%EC%8B%A4%ED%81%AC+%EA%B1%B0%EB%A6%AC+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "꽝바 꽃시장": {
        photos: ["/images/hanoi/info/shopping/quang-ba-flower-market-hanoi.jpg"],
        summary: "Trường Xuân Flower & Bonsai 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 4.8", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10258092355042451076", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%BD%9D%EB%B0%94+%EA%BD%83%EC%8B%9C%EC%9E%A5+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이온몰 롱비엔": {
        photos: ["/images/hanoi/info/shopping/aeon-mall-long-bien-hanoi.jpg"],
        summary: "이온몰 롱비엔점 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 4.6", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=260332788385884473", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%98%A8%EB%AA%B0+%EB%A1%B1%EB%B9%84%EC%97%94+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하노이 주말 야시장": {
        photos: ["/images/hanoi/info/shopping/hanoi-weekend-night-market.jpg"],
        summary: "Chợ Hàng Mã 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 4.5", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 6:00~11:30; 화요일: 오후 6:00~11:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5180229018120390641", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%85%B8%EC%9D%B4+%EC%A3%BC%EB%A7%90+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "항다 시장": {
        photos: ["/images/hanoi/info/shopping/hang-da-market-hanoi.jpg"],
        summary: "Hàng Da Market 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 3.8", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 5:00 ~ 오후 8:00; 화요일: 오전 5:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3456316342943706756", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%AD%EB%8B%A4+%EC%8B%9C%EC%9E%A5+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
