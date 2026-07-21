import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "아일랜드 시티몰": {
        photos: ["/images/bohol/info/shopping/island-city-mall-bohol.jpg"],
        summary: "다양한 브랜드와 편의시설을 갖춘 보홀의 대표적인 대형 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 의류 및 잡화 브랜드 입점", "대형 마트와 식당가 이용 가능"],
        tips: ["쇼핑 후 몰 내 푸드코트에서 현지 음식을 즐겨보세요."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 8:00 ~ 오후 9:00; 화요일: 오전 8:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13795737754883261595", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%EC%8B%9C%ED%8B%B0%EB%AA%B0+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "BQ 몰 타그빌라란": {
        photos: ["/images/bohol/info/shopping/bq-mall-tagbilaran-bohol.jpg"],
        summary: "현지인들이 자주 찾는 친숙한 분위기의 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 생필품 및 식료품 구매 가능", "가성비 좋은 쇼핑 아이템"],
        tips: ["마트 이용 시 현지 물가를 체감하기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 8:30 ~ 오후 8:00; 화요일: 오전 8:30 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.boholquality.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=130667492344558140", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=BQ+%EB%AA%B0+%ED%83%80%EA%B7%B8%EB%B9%8C%EB%9D%BC%EB%9E%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "알투라스 몰 타그빌라란": {
        photos: ["/images/bohol/info/shopping/alturas-mall-tagbilaran-bohol.jpg"],
        summary: "타그빌라란 시내에 위치한 대형 쇼핑몰로 다양한 생필품과 식료품을 구매할 수 있습니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 품목의 슈퍼마켓 운영", "쇼핑과 편의시설 이용 가능"],
        tips: ["현지 기념품이나 생필품을 저렴하게 구입하기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 7:30 ~ 오후 9:00; 화요일: 오전 7:30 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7506417563216841627", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%8C%ED%88%AC%EB%9D%BC%EC%8A%A4+%EB%AA%B0+%ED%83%80%EA%B7%B8%EB%B9%8C%EB%9D%BC%EB%9E%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "팡라오 퍼블릭 마켓": {
        photos: ["/images/bohol/info/shopping/panglao-public-market-bohol.jpg"],
        summary: "팡라오 지역의 활기찬 전통시장으로 신선한 현지 식재료를 만날 수 있습니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 과일 및 해산물 판매", "현지 분위기를 느낄 수 있는 시장"],
        tips: ["이른 아침에 방문하면 더욱 신선한 상품을 볼 수 있습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 6:30 ~ 오후 6:00; 화요일: 오전 6:30 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3649217304411288124", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%A1%EB%9D%BC%EC%98%A4+%ED%8D%BC%EB%B8%94%EB%A6%AD+%EB%A7%88%EC%BC%93+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "타그빌라란 퍼블릭 마켓": {
        photos: ["/images/bohol/info/shopping/tagbilaran-public-market-bohol.jpg"],
        summary: "보홀의 현지 분위기를 느낄 수 있는 전통 시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 열대 과일", "현지 식재료 및 생선"],
        tips: ["이른 아침에 방문하면 가장 신선한 상품을 볼 수 있습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 6:00 ~ 오후 7:00; 화요일: 오전 6:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11171566205823724068", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EA%B7%B8%EB%B9%8C%EB%9D%BC%EB%9E%80+%ED%8D%BC%EB%B8%94%EB%A6%AD+%EB%A7%88%EC%BC%93+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "알로나비치 상점가": {
        photos: ["/images/bohol/info/shopping/alona-beach-shops-panglao.jpg"],
        summary: "다양한 기념품과 먹거리가 가득한 활기찬 거리입니다.",
        updatedAt: "2026-07-21",
        highlights: ["아기자기한 기념품 상점", "다양한 테마의 레스토랑"],
        tips: ["해변 산책 후 저녁 시간에 방문하는 것을 추천합니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://open.kakao.com/o/gbToi55f", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=271603963663957710", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%8C%EB%A1%9C%EB%82%98%EB%B9%84%EC%B9%98+%EC%83%81%EC%A0%90%EA%B0%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "모아드토 스트립 몰": {
        photos: ["/images/bohol/info/shopping/moadto-strip-mall-panglao.jpg"],
        summary: "팡라오 비치 근처에서 쇼핑을 즐길 수 있는 편리한 위치의 비치 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["비치와 인접한 편리한 접근성", "다양한 상점 구성"],
        tips: ["해변 산책 후 가볍게 둘러보기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/moadtostripmall/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2588241337358583395", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%EC%95%84%EB%93%9C%ED%86%A0+%EC%8A%A4%ED%8A%B8%EB%A6%BD+%EB%AA%B0+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "보홀 쉘 뮤지엄 기념품샵": {
        photos: ["/images/bohol/info/shopping/shell-museum-bohol-souvenir-shop.jpg"],
        summary: "보홀의 특색 있는 물건들을 만날 수 있는 평점이 높은 기념품 전문점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["높은 고객 만족도", "다양한 현지 기념품 보유"],
        tips: ["여행 선물용 아이템을 찾기에 최적입니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2271632083754912668", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%ED%99%80+%EC%89%98+%EB%AE%A4%EC%A7%80%EC%97%84+%EA%B8%B0%EB%85%90%ED%92%88%EC%83%B5+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "보홀 비 팜 기념품샵": {
        photos: ["/images/bohol/info/shopping/bohol-bee-farm-souvenir-shop.jpg"],
        summary: "보홀 여행의 추억을 간직할 수 있는 다양한 소품과 기념품을 판매하는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 로컬 기념품", "여행객들을 위한 맞춤형 아이템"],
        tips: ["기념품 구매 시 간단한 흥정을 시도해 보세요."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11660271934230478044", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%ED%99%80+%EB%B9%84+%ED%8C%9C+%EA%B8%B0%EB%85%90%ED%92%88%EC%83%B5+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "플라자 마르셀라": {
        photos: ["/images/bohol/info/shopping/plaza-marcela-tagbilaran-bohol.jpg"],
        summary: "보홀 타그빌라란 시티에 위치한 쇼핑을 즐길 수 있는 몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 상점 입점", "현지 분위기를 느낄 수 있는 쇼핑 공간"],
        tips: ["쇼핑 전 운영 시간을 미리 확인하는 것이 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 8:00 ~ 오후 7:45; 화요일: 오전 8:00 ~ 오후 7:45",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9433506055484782195", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%8C%EB%9D%BC%EC%9E%90+%EB%A7%88%EB%A5%B4%EC%85%80%EB%9D%BC+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
