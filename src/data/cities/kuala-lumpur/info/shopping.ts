import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "파빌리온 쿠알라룸푸르": {
        photos: ["/images/kuala-lumpur/info/shopping/pavilion-kuala-lumpur.jpg"],
        summary: "쿠알라룸푸르 부킷 빈탕 지역을 대표하는 대형 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 글로벌 브랜드 입점", "맛집과 카페 밀집"],
        tips: ["주말에는 인파가 매우 많으니 여유 있게 방문하세요."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://advance-ticket.com/pavilion-kuala-lumpur/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17119990127312478132", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%EB%B9%8C%EB%A6%AC%EC%98%A8+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "수리아 KLCC": {
        photos: ["/images/kuala-lumpur/info/shopping/suria-klcc-kuala-lumpur.jpg"],
        summary: "페트로나스 트윈 타워와 연결된 상징적인 랜드마크 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["트윈 타워 전망 및 접근성", "고급 브랜드 및 명품관"],
        tips: ["쇼핑 후 인근 KLCC 공원에서 산책하기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.suriaklcc.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14507695894215437865", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%98%EB%A6%AC%EC%95%84+KLCC+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "디 익스체인지 TRX": {
        photos: ["/images/kuala-lumpur/info/shopping/the-exchange-trx-kuala-lumpur.jpg"],
        summary: "쿠알라룸푸르의 최신 트렌드를 만날 수 있는 신상 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["최신 브랜드 입점", "쾌적한 쇼핑 환경"],
        tips: ["주변 랜드마크와 함께 둘러보기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "http://theexchange.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4061662819426486708", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94+%EC%9D%B5%EC%8A%A4%EC%B2%B4%EC%9D%B8%EC%A7%80+TRX+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "센트럴 마켓": {
        photos: ["/images/kuala-lumpur/info/shopping/central-market-kuala-lumpur.jpg"],
        summary: "다양한 기념품과 전통 공예품을 구매할 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["말레이시아 전통 공예품", "기념품 쇼핑의 성지"],
        tips: ["전통적인 분위기를 즐기며 천천히 둘러보세요."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://centralmarket.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18208912332495675394", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%BC%ED%8A%B8%EB%9F%B4+%EB%A7%88%EC%BC%93+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "페탈링 스트리트 마켓": {
        photos: ["/images/kuala-lumpur/info/shopping/petaling-street-market-kuala-lumpur.jpg"],
        summary: "쿠알라룸푸르 차이나타운의 활기찬 분위기를 느낄 수 있는 야시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 길거리 음식 체험", "저렴한 기념품 쇼핑"],
        tips: ["밤늦은 시간 방문을 추천합니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/@PetalingStreetChinatown/?mibextid=ZbWKwL", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12247248895206357757", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%98%ED%83%88%EB%A7%81+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%EB%A7%88%EC%BC%93+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "롯10 쿠알라룸푸르": {
        photos: ["/images/kuala-lumpur/info/shopping/lot-10-kuala-lumpur.jpg"],
        summary: "부킷 빈탕에 위치한 트렌디한 쇼핑몰이자 맛집이 모여 있는 푸드코트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 로컬 음식 즐기기", "쾌적한 쇼핑 환경"],
        tips: ["푸드코트의 다양한 메뉴를 골고루 시도해보세요."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://lot10.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2616099918785759749", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%AF10+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "화씨88": {
        photos: ["/images/kuala-lumpur/info/shopping/fahrenheit88-kuala-lumpur.jpg"],
        summary: "부킷빈탕 지역에 위치한 인기 있는 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["부킷빈탕 중심가 위치", "다양한 상점 입점"],
        tips: ["주변 맛집과 함께 방문하기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.fahrenheit88.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9916615432929010002", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%94%EC%94%A888+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "스타힐 쿠알라룸푸르": {
        photos: ["/images/kuala-lumpur/info/shopping/starhill-kuala-lumpur.jpg"],
        summary: "고급스러운 브랜드들이 모여 있는 럭셔리 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["명품 브랜드 입점", "세련된 쇼핑 환경"],
        tips: ["쇼핑 후 근처 카페에서 휴식을 취해보세요."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.thestarhill.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=599525147186027160", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%83%80%ED%9E%90+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "숭아이 왕 플라자": {
        photos: ["/images/kuala-lumpur/info/shopping/sungei-wang-plaza-kuala-lumpur.jpg"],
        summary: "현지 분위기를 물씬 느낄 수 있는 가성비 좋은 로컬 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["저렴한 가격의 의류 및 액세서리", "다양한 로컬 브랜드 입점"],
        tips: ["알뜰 쇼핑을 원하는 여행객에게 추천합니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.sungeiwang.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13771406073358535454", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%AD%EC%95%84%EC%9D%B4+%EC%99%95+%ED%94%8C%EB%9D%BC%EC%9E%90+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "누 센트럴": {
        photos: ["/images/kuala-lumpur/info/shopping/nu-sentral-kuala-lumpur.jpg"],
        summary: "교통의 중심지에 위치하여 접근성이 매우 뛰어난 대형 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["KL 센트럴역과 바로 연결된 편리함", "다양한 글로벌 브랜드와 맛집 입점"],
        tips: ["기차 이용 전후에 들러 쇼핑하기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.nusentral.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16089013369710736269", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%88%84+%EC%84%BC%ED%8A%B8%EB%9F%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "미드밸리 메가몰": {
        photos: ["/images/kuala-lumpur/info/shopping/mid-valley-megamall-kuala-lumpur.jpg"],
        summary: "다양한 브랜드와 상점이 모여 있는 대형 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["방대한 규모의 매장 구성", "다양한 먹거리와 편의시설"],
        tips: ["규모가 매우 크므로 편한 신발을 착용하세요."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.midvalley.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6218714981998367227", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EB%93%9C%EB%B0%B8%EB%A6%AC+%EB%A9%94%EA%B0%80%EB%AA%B0+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "더 가든스 몰": {
        photos: ["/images/kuala-lumpur/info/shopping/the-gardens-mall-kuala-lumpur.jpg"],
        summary: "고급스러운 분위기를 즐길 수 있는 프리미엄 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["럭셔리 브랜드 입점", "세련된 인테리어"],
        tips: ["미드밸리 메가몰과 연결되어 있어 함께 둘러보기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.thegardensmall.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7924997418937067303", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EA%B0%80%EB%93%A0%EC%8A%A4+%EB%AA%B0+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "미쓰이 아울렛 파크 KLIA": {
        photos: ["/images/kuala-lumpur/info/shopping/mitsui-outlet-park-klia-sepang.jpg"],
        summary: "쿠알라룸푸르 공항 인근에 위치한 대규모 브랜드 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 글로벌 브랜드 입점", "공항 접근성이 뛰어난 쇼핑 명소"],
        tips: ["출국 전 여유 있게 방문하여 쇼핑하기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15896549957811650237", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%93%B0%EC%9D%B4+%EC%95%84%EC%9A%B8%EB%A0%9B+%ED%8C%8C%ED%81%AC+KLIA+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "마스지드 인디아 마켓": {
        photos: ["/images/kuala-lumpur/info/shopping/jalan-masjid-india-market-kuala-lumpur.jpg"],
        summary: "현지의 활기찬 분위기를 느낄 수 있는 전통 로컬 시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 로컬 아이템 구매 가능", "토요일 오후에 열리는 특별한 시장"],
        tips: ["주말에는 사람이 매우 많으니 주의하세요."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16035608140525351609", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%8A%A4%EC%A7%80%EB%93%9C+%EC%9D%B8%EB%94%94%EC%95%84+%EB%A7%88%EC%BC%93+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "마이타운 쇼핑센터": {
        photos: ["/images/kuala-lumpur/info/shopping/mytown-shopping-centre-kuala-lumpur.jpg"],
        summary: "다양한 브랜드와 편의시설을 갖춘 쿠알라룸푸르의 대형 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 패션 및 라이프스타일 브랜드 입점", "편리한 쇼핑 동선과 넓은 공간"],
        tips: ["주변 식당가와 함께 방문하여 식사를 해결하기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://mytownkl.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10780534098182341405", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%9D%B4%ED%83%80%EC%9A%B4+%EC%87%BC%ED%95%91%EC%84%BC%ED%84%B0+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
