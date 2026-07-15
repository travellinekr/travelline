import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "푸꾸옥 야시장": {
        photos: ["/images/phu-quoc/info/shopping/phu-quoc-night-market.png"],
        summary: "싱싱한 해산물과 다양한 기념품을 만날 수 있는 푸꾸옥 대표 야시장",
        updatedAt: "2026-07-15",
        highlights: ["해산물 요리", "진주 쇼핑", "길거리 간식"],
        tips: ["사람이 많으니 소지품 주의하기"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://luggagestorage.io/locations/luggage-storage-hopapa-hotel-spa", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5586699472923444197", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EA%BE%B8%EC%98%A5+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "소나시 야시장": {
        photos: ["/images/phu-quoc/info/shopping/sonasea-night-market-phu-quoc.jpg"],
        summary: "리조트 단지 근처에서 깔끔하게 즐기는 맛집과 기념품 거리",
        updatedAt: "2026-07-15",
        highlights: ["리조트 인근 야시장", "다양한 식당가", "기념품 쇼핑"],
        tips: ["숙소가 소나시 쪽이라면 저녁 산책 코스로 추천"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13669430903800341715", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%8C%EB%82%98%EC%8B%9C+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그랜드월드 푸꾸옥": {
        photos: ["/images/phu-quoc/info/shopping/grand-world-phu-quoc.png"],
        summary: "화려한 야경과 이국적인 상점들이 가득한 밤 산책 명소",
        updatedAt: "2026-07-15",
        highlights: ["이국적인 상점가", "아름다운 야간 산책로", "기념품 구매"],
        tips: ["야경 사진 찍기 좋은 시간대에 방문하기"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2435664654751684437", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%9C%EB%93%9C%EC%9B%94%EB%93%9C+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "킹콩마트 푸꾸옥": {
        photos: ["/images/phu-quoc/info/shopping/king-kong-mart-phu-quoc.jpg"],
        summary: "Kingkong Mart - Phu Quoc Specialties Store 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["간식, 생필품, 여행용품", "평점 4.4", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://facebook.com/sieuthikingkong", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10141486557940620243", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%B9%EC%BD%A9%EB%A7%88%ED%8A%B8+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "즈엉동 시장": {
        photos: ["/images/phu-quoc/info/shopping/duong-dong-market-phu-quoc.jpg"],
        summary: "Chợ Dương Đông Phú Quốc 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["해산물, 과일, 로컬 식재료", "평점 4.3", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17084729101629020860", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A6%88%EC%97%89%EB%8F%99+%EC%8B%9C%EC%9E%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "푸꾸옥 진주 농장": {
        photos: ["/images/phu-quoc/info/shopping/phu-quoc-pearl-farm.jpg"],
        summary: "Trang trại Ngọc Trai Ngọc Hiền 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["진주 주얼리, 기념품", "평점 5", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ngochienpearl.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11890141333609689809", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EA%BE%B8%EC%98%A5+%EC%A7%84%EC%A3%BC+%EB%86%8D%EC%9E%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "롱비치 센터": {
        photos: ["/images/phu-quoc/info/shopping/long-beach-center-phu-quoc.jpg"],
        summary: "맛집과 쇼핑을 한 번에 즐길 수 있는 복합 공간이에요.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 식당", "예쁜 카페", "기념품 상점"],
        tips: ["식사와 쇼핑을 동시에 해결하기 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오전 12:00; 화요일: 오전 6:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/longbeachworld", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1038660241174446076", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%B1%EB%B9%84%EC%B9%98+%EC%84%BC%ED%84%B0+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "즈엉동 슈퍼마켓": {
        photos: ["/images/phu-quoc/info/shopping/sieu-thi-duong-dong-phu-quoc.jpg"],
        summary: "여행 중 필요한 간식과 음료를 사기에 딱 좋은 곳이에요.",
        updatedAt: "2026-07-15",
        highlights: ["현지 과자", "시원한 음료", "다양한 식료품"],
        tips: ["툭툭이 타고 들러서 쟁여오기 좋아요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:30 ~ 오전 2:00; 화요일: 오전 7:30 ~ 오전 2:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.deliveryk.com/shops/9748", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8689609646655281115", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A6%88%EC%97%89%EB%8F%99+%EC%8A%88%ED%8D%BC%EB%A7%88%EC%BC%93+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "푸꾸옥 센터": {
        photos: ["/images/phu-quoc/info/shopping/phu-quoc-centre.jpg"],
        summary: "쇼핑과 카페 휴식을 동시에 즐길 수 있는 편리한 장소예요.",
        updatedAt: "2026-07-15",
        highlights: ["로컬 상점", "카페", "편의시설"],
        tips: ["여행 중 필요한 물품을 찾기에 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7880658704697140820", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EA%BE%B8%EC%98%A5+%EC%84%BC%ED%84%B0+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "안터이 시장": {
        photos: ["/images/phu-quoc/info/shopping/an-thoi-market-phu-quoc.jpg"],
        summary: "Chợ An Thới 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["해산물, 로컬 식재료", "평점 4.1", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 5:30; 화요일: 오전 7:00 ~ 오후 5:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17363706602299494993", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%88%ED%84%B0%EC%9D%B4+%EC%8B%9C%EC%9E%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
