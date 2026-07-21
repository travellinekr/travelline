import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "마나도 타운 스퀘어": {
        photos: ["/images/manado/info/shopping/manado-town-square.jpg"],
        summary: "다양한 브랜드와 상점이 모여 있는 마나도의 대표적인 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 패션 및 라이프스타일 브랜드 입점", "쾌적한 쇼핑 환경 제공"],
        tips: ["주말에는 방문객이 많으니 여유로운 시간에 방문하세요"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16862359320440141922", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%82%98%EB%8F%84+%ED%83%80%EC%9A%B4+%EC%8A%A4%ED%80%98%EC%96%B4+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "메가몰 마나도": {
        photos: ["/images/manado/info/shopping/mega-mall-manado.jpg"],
        summary: "다양한 물건을 합리적인 가격에 구매할 수 있는 쇼핑 공간입니다.",
        updatedAt: "2026-07-21",
        highlights: ["미니소 등 다양한 잡화 입점", "편리한 접근성"],
        tips: ["쇼핑 전 운영 시간을 미리 확인하는 것이 좋습니다"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.miniso.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18043453737759721181", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EA%B0%80%EB%AA%B0+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "트랜스마트 까르푸 마나도": {
        photos: ["/images/manado/info/shopping/transmart-carrefour-manado.jpg"],
        summary: "다양한 품목을 갖춘 마나도의 대표적인 대형 마트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["대규모 쇼핑 공간 제공", "다양한 식료품 및 생필품 구비"],
        tips: ["주말에는 방문객이 많으니 여유로운 시간에 방문하세요."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18394336317140537624", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8A%B8%EB%9E%9C%EC%8A%A4%EB%A7%88%ED%8A%B8+%EA%B9%8C%EB%A5%B4%ED%91%B8+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "프레시마트 바후": {
        photos: ["/images/manado/info/shopping/freshmart-bahu-manado.jpg"],
        summary: "바후 몰 내에 위치하여 편리하게 이용 가능한 슈퍼마켓입니다.",
        updatedAt: "2026-07-21",
        highlights: ["쇼핑몰 내 접근성 우수", "신선한 식재료 판매"],
        tips: ["몰 쇼핑과 함께 둘러보기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.freshmart.co.id/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11101950267898887124", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EB%A0%88%EC%8B%9C%EB%A7%88%ED%8A%B8+%EB%B0%94%ED%9B%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "골든 슈퍼마켓 마나도": {
        photos: ["/images/manado/info/shopping/golden-supermarket-manado.jpg"],
        summary: "다양한 식료품과 생필품을 편리하게 구매할 수 있는 현대적인 슈퍼마켓입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 현지 및 수입 식료품 보유", "깔끔하고 쾌적한 쇼핑 환경"],
        tips: ["현지 간식이나 음료를 대량으로 구매하기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3265031962530082710", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A8%EB%93%A0+%EC%8A%88%ED%8D%BC%EB%A7%88%EC%BC%93+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "베르세하티 시장": {
        photos: ["/images/manado/info/shopping/bersehati-market-manado.jpg"],
        summary: "현지의 활기찬 분위기를 느낄 수 있는 신선한 식재료 중심의 전통시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 과일과 채소를 저렴하게 구입 가능", "현지인들의 삶을 가까이서 체험할 수 있음"],
        tips: ["흥정을 통해 더 좋은 가격에 구매해보세요."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10997835721124368779", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%EB%A5%B4%EC%84%B8%ED%95%98%ED%8B%B0+%EC%8B%9C%EC%9E%A5+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "파사르 45 마나도": {
        photos: ["/images/manado/info/shopping/pasar-45-manado.jpg"],
        summary: "마나도 현지의 활기찬 분위기를 느낄 수 있는 대표적인 로컬 시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 신선한 식재료와 로컬 먹거리", "현지인들의 생생한 삶을 엿볼 수 있는 곳"],
        tips: ["흥정을 통해 더 저렴하게 구매해보세요"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 7:00 ~ 오후 10:00; 화요일: 오전 7:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1878066661695730931", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%EC%82%AC%EB%A5%B4+45+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "토모혼 전통시장": {
        photos: ["/images/manado/info/shopping/tomohon-traditional-market.jpg"],
        summary: "토모혼 지역의 특색 있는 물건들을 만날 수 있는 전통 시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["지역 특산물 및 다양한 전통 제품", "현지 분위기가 가득한 시장 구경"],
        tips: ["이른 아침에 방문하면 더욱 신선한 상품을 볼 수 있습니다"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11445042785530880311", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%A0%EB%AA%A8%ED%98%BC+%EC%A0%84%ED%86%B5%EC%8B%9C%EC%9E%A5+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "IT 센터 마나도": {
        photos: ["/images/manado/info/shopping/it-center-manado.jpg"],
        summary: "다양한 전자제품과 IT 기기를 만나볼 수 있는 마나도의 대표적인 전자상가입니다.",
        updatedAt: "2026-07-21",
        highlights: ["최신 가전 및 IT 기기 쇼핑", "다양한 전자 부품 취급"],
        tips: ["필요한 사양을 미리 확인하고 방문하세요"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2137990877226133719", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=IT+%EC%84%BC%ED%84%B0+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "스타 스퀘어 마나도": {
        photos: ["/images/manado/info/shopping/star-square-manado.jpg"],
        summary: "쇼핑과 여가를 동시에 즐길 수 있는 마나도의 인기 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 브랜드 매장 입점", "쾌적한 쇼핑 환경"],
        tips: ["주말에는 방문객이 많으니 여유 있게 방문하세요"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "http://starsquaremanado.blogspot.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9509161298977886213", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%83%80+%EC%8A%A4%ED%80%98%EC%96%B4+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "리포 플라자 카이라기": {
        photos: ["/images/manado/info/shopping/lippo-plaza-kairagi-manado.jpg"],
        summary: "마나도에서 다양한 브랜드와 상점을 만날 수 있는 현대적인 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 의류 및 잡화 브랜드 입점", "쾌적한 쇼핑 환경"],
        tips: ["쇼핑 후 몰 내 푸드코트 이용을 추천합니다"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=585939159576660271", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%ED%8F%AC+%ED%94%8C%EB%9D%BC%EC%9E%90+%EC%B9%B4%EC%9D%B4%EB%9D%BC%EA%B8%B0+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "마나도 로컬 기념품샵": {
        photos: ["/images/manado/info/shopping/souvenir-shop-manado-north-sulawesi.jpg"],
        summary: "마나도의 특산물과 맛있는 클라퍼타르트를 구매할 수 있는 유명한 기념품 전문점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["현지 특산품 쇼핑 가능", "유명한 클라퍼타르트 디저트 판매"],
        tips: ["신선한 클라퍼타르트는 방문 즉시 구매하는 것이 좋습니다"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/kawanuapaniki", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7283093549723741407", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%82%98%EB%8F%84+%EB%A1%9C%EC%BB%AC+%EA%B8%B0%EB%85%90%ED%92%88%EC%83%B5+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "폴로 스토어 마나도 타운스퀘어": {
        photos: ["/images/manado/info/shopping/polo-store-manado-town-square.jpg"],
        summary: "마나도 타운스퀘어 내에 위치한 폴로 브랜드 전문 매장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["폴로 브랜드 제품 취급", "쇼핑몰 내 편리한 접근성"],
        tips: ["쇼핑몰 주차장을 이용하면 편리합니다"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13115989376812888519", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%B4%EB%A1%9C+%EC%8A%A4%ED%86%A0%EC%96%B4+%EB%A7%88%EB%82%98%EB%8F%84+%ED%83%80%EC%9A%B4%EC%8A%A4%ED%80%98%EC%96%B4+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "하이퍼마트 마나도 타운스퀘어": {
        photos: ["/images/manado/info/shopping/hypermart-manado-town-square.jpg"],
        summary: "다양한 생필품과 식료품을 구매할 수 있는 대형 마트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 품목의 대형 마트", "높은 고객 만족도"],
        tips: ["쇼핑 전 할인 품목을 확인하세요"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6359878888017450532", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%9D%B4%ED%8D%BC%EB%A7%88%ED%8A%B8+%EB%A7%88%EB%82%98%EB%8F%84+%ED%83%80%EC%9A%B4%EC%8A%A4%ED%80%98%EC%96%B4+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "인도마렛 마나도": {
        photos: ["/images/manado/info/shopping/indomaret-manado.jpg"],
        summary: "마나도 지역에서 편리하게 이용할 수 있는 현지 편의점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 스낵과 음료 구비", "현지 식료품 구매 가능"],
        tips: ["여행 중 간단한 간식이나 생수를 구매하기 좋습니다"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6223222446191775557", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B8%EB%8F%84%EB%A7%88%EB%A0%9B+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
