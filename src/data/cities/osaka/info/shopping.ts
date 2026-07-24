import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "신사이바시 파르코": {
        photos: ["/images/osaka/info/shopping/shinsaibashi-parco-osaka.jpg"],
        summary: "파르코 신사이바시 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 캐릭터, 식당가", "평점 4.2", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://shinsaibashi.parco.jp/?utm_source=mybusiness", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4448462780053158731", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%EC%82%AC%EC%9D%B4%EB%B0%94%EC%8B%9C+%ED%8C%8C%EB%A5%B4%EC%BD%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다이마루 신사이바시": {
        photos: ["/images/osaka/info/shopping/daimaru-shinsaibashi-osaka.jpg"],
        summary: "다이마루 신사이바시 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["명품, 패션, 디저트", "평점 4.1", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.daimaru.co.jp/shinsaibashi/?utm_source=google_map&utm_medium=social&utm_campaign=info&utm_content=01", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12525137505886472735", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9D%B4%EB%A7%88%EB%A3%A8+%EC%8B%A0%EC%82%AC%EC%9D%B4%EB%B0%94%EC%8B%9C+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "난바 파크스": {
        photos: ["/images/osaka/info/shopping/namba-parks-osaka.jpg"],
        summary: "난바 파크스 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 식당가, 옥상정원", "평점 4", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://nambaparks.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15602370614875201382", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%9C%EB%B0%94+%ED%8C%8C%ED%81%AC%EC%8A%A4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "난바 시티": {
        photos: ["/images/osaka/info/shopping/namba-city-osaka.png"],
        summary: "패션부터 맛집까지 난바에서 한 번에 즐기기 좋은 쇼핑몰이에요.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 패션 브랜드와 잡화", "편리한 식당가"],
        tips: ["난바 관광 후 가볍게 들러 구경하고 식사하기 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.nambacity.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7232209965047412017", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%9C%EB%B0%94+%EC%8B%9C%ED%8B%B0+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다카시마야 오사카점": {
        photos: ["/images/osaka/info/shopping/takashimaya-osaka-store.jpg"],
        summary: "명품 쇼핑과 맛있는 디저트를 동시에 즐길 수 있는 백화점이에요.",
        updatedAt: "2026-07-13",
        highlights: ["럭셔리 브랜드와 명품", "퀄리티 높은 식품관"],
        tips: ["지하 식품관에서 일본 현지 간식이나 선물을 사기 딱 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.takashimaya.co.jp/osaka/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8755743815820642124", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%B9%B4%EC%8B%9C%EB%A7%88%EC%95%BC+%EC%98%A4%EC%82%AC%EC%B9%B4%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그랜드 프론트 오사카": {
        photos: ["/images/osaka/info/shopping/grand-front-osaka.png"],
        summary: "우메다에서 트렌디한 라이프스타일 아이템을 만날 수 있는 곳이에요.",
        updatedAt: "2026-07-13",
        highlights: ["감각적인 패션 및 라이프스타일 숍", "세련된 식당가"],
        tips: ["우메다 지역 쇼핑 코스에 넣으면 딱 좋은 세련된 공간입니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.grandfront-osaka.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=749935559767271893", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%9C%EB%93%9C+%ED%94%84%EB%A1%A0%ED%8A%B8+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "루쿠아 오사카": {
        photos: ["/images/osaka/info/shopping/lucua-osaka.jpg"],
        summary: "트렌디한 패션과 맛집이 가득한 우메다 쇼핑의 성지",
        updatedAt: "2026-07-13",
        highlights: ["최신 유행 브랜드", "감각적인 뷰티 아이템", "입맛 저격 맛집"],
        tips: ["루쿠아 1100층 식당가에서 여유로운 식사를 즐겨보세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:30 ~ 오후 8:30; 화요일: 오전 10:30 ~ 오후 8:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.lucua.jp/?utm_source=google&utm_medium=maps&utm_campaign=gmb", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7138839288115191113", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A3%A8%EC%BF%A0%EC%95%84+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "한큐 우메다 본점": {
        photos: ["/images/osaka/info/shopping/hankyu-umeda-main-store-osaka.png"],
        summary: "명품부터 프리미엄 디저트까지 만날 수 있는 고급스러운 백화점",
        updatedAt: "2026-07-13",
        highlights: ["글로벌 명품 브랜드", "화려한 식품관", "세련된 패션 컬렉션"],
        tips: ["지하 식품관의 유명 디저트는 놓치지 말고 꼭 구경하세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hankyu-dept.co.jp/honten/?utm_source=hqhtgooglemap&utm_medium=storemedia&utm_campaign=information", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13590576495565490093", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%9C%ED%81%90+%EC%9A%B0%EB%A9%94%EB%8B%A4+%EB%B3%B8%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "한신백화점 우메다": {
        photos: ["/images/osaka/info/shopping/hanshin-department-store-umeda-osaka.jpg"],
        summary: "맛있는 먹거리와 달콤한 디저트가 가득한 미식 쇼핑 명소",
        updatedAt: "2026-07-13",
        highlights: ["알찬 구성의 식품관", "달콤한 디저트 맛집", "여행 기념품 추천"],
        tips: ["지인들에게 줄 간식 선물을 사기에 가장 좋은 곳이에요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hanshin-dept.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10435298327912627944", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%9C%EC%8B%A0%EB%B0%B1%ED%99%94%EC%A0%90+%EC%9A%B0%EB%A9%94%EB%8B%A4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "요도바시카메라 우메다": {
        photos: ["/images/osaka/info/shopping/yodobashi-camera-multimedia-umeda-osaka.jpg"],
        summary: "최신 가전부터 카메라, 게임기까지 한눈에 볼 수 있는 전자제품 천국",
        updatedAt: "2026-07-13",
        highlights: ["방대한 IT 기기 및 카메라 라인업", "우메다역 인근의 편리한 접근성"],
        tips: ["면세 혜택을 위해 여권을 꼭 지참하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17881692208387198900", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%94%EB%8F%84%EB%B0%94%EC%8B%9C%EC%B9%B4%EB%A9%94%EB%9D%BC+%EC%9A%B0%EB%A9%94%EB%8B%A4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "돈키호테 도톤보리": {
        photos: ["/images/osaka/info/shopping/don-quijote-dotonbori-osaka.jpg"],
        summary: "기념품부터 화장품까지 없는 게 없는 도톤보리의 필수 쇼핑 코스",
        updatedAt: "2026-07-13",
        highlights: ["다양한 일본 간식 및 과자류", "인기 화장품 및 잡화"],
        tips: ["사람이 매우 많으니 소지품 관리에 유의하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.donki.com/store/shop_detail.php?shop_id=110", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2788090604519832902", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%88%ED%82%A4%ED%98%B8%ED%85%8C+%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "구로몬시장": {
        photos: ["/images/osaka/info/shopping/kuromon-ichiba-market-osaka.jpg"],
        summary: "신선한 해산물과 다양한 길거리 음식을 맛볼 수 있는 오사카의 부엌",
        updatedAt: "2026-07-13",
        highlights: ["신선한 해산물 즉석 요리", "다양한 일본 전통 먹거리"],
        tips: ["현금 결제가 편리하므로 엔화를 준비하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12402117845945925953", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%AC%EB%A1%9C%EB%AA%AC%EC%8B%9C%EC%9E%A5+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "덴진바시스지 상점가": {
        photos: ["/images/osaka/info/shopping/tenjinbashisuji-shopping-street-osaka.jpg"],
        summary: "일본 최장 길이의 상점가에서 즐기는 로컬 쇼핑과 먹거리 탐방",
        updatedAt: "2026-07-13",
        highlights: ["현지 분위기 가득한 맛집 투어", "다양한 잡화 및 드럭스토어"],
        tips: ["규모가 매우 크니 편한 운동화 필수"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tenjin123.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10590307626199221847", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%B4%EC%A7%84%EB%B0%94%EC%8B%9C%EC%8A%A4%EC%A7%80+%EC%83%81%EC%A0%90%EA%B0%80+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아메리카무라": {
        photos: ["/images/osaka/info/shopping/america-mura-osaka.jpg"],
        summary: "오사카의 힙한 감성을 느낄 수 있는 스트릿 패션의 성지",
        updatedAt: "2026-07-13",
        highlights: ["개성 넘치는 빈티지 의류 쇼핑", "트렌디한 길거리 음식"],
        tips: ["골목 구석구석 숨은 빈티지 숍 찾기"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15529983547416149783", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%AC%B4%EB%9D%BC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "헵파이브": {
        photos: ["/images/osaka/info/shopping/hep-five-osaka.jpg"],
        summary: "쇼핑과 도심 관람차를 동시에 즐길 수 있는 우메다의 명소",
        updatedAt: "2026-07-13",
        highlights: ["트렌디한 패션 브랜드 쇼핑", "빨간색 대관람차 탑승"],
        tips: ["쇼핑 후 야경을 보며 관람차 타는 코스 추천"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hepfive.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7311547120174286369", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%B5%ED%8C%8C%EC%9D%B4%EB%B8%8C+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아베노 하루카스 긴테츠백화점": {
        photos: ["/images/osaka/info/shopping/abeno-harukas-kintetsu-department-store-osaka.jpg"],
        summary: "쇼핑과 전망을 동시에 즐길 수 있는 오사카의 랜드마크 백화점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["명품 브랜드 입점", "탁 트인 전망대", "퀄리티 높은 식품관"],
        tips: ["전망대 관람 후 지하 식품관에서 디저트 쇼핑을 꼭 해보세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://abenoharukas.d-kintetsu.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17488796720453805276", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%B2%A0%EB%85%B8+%ED%95%98%EB%A3%A8%EC%B9%B4%EC%8A%A4+%EA%B8%B4%ED%85%8C%EC%B8%A0%EB%B0%B1%ED%99%94%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "덴노지 미오": {
        photos: ["/images/osaka/info/shopping/tennoji-mio-osaka.jpg"],
        summary: "다양한 패션 아이템과 맛집이 모여 있는 실속 있는 쇼핑몰입니다.",
        updatedAt: "2026-07-13",
        highlights: ["트렌디한 패션 잡화", "다양한 식당가", "편리한 접근성"],
        tips: ["가벼운 마음으로 구경하기 좋고, 근처 덴노지 공원과 함께 둘러보세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:30 ~ 오후 8:30; 화요일: 오전 10:30 ~ 오후 8:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tennoji-mio.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4607795338890194378", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%B4%EB%85%B8%EC%A7%80+%EB%AF%B8%EC%98%A4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "린쿠 프리미엄 아울렛": {
        photos: ["/images/osaka/info/shopping/rinku-premium-outlets-osaka.jpg"],
        summary: "간사이 공항 가기 전 마지막 쇼핑 코스로 완벽한 브랜드 아울렛입니다.",
        updatedAt: "2026-07-13",
        highlights: ["글로벌 브랜드 할인", "공항 이동 동선 최적화", "쾌적한 야외 쇼핑"],
        tips: ["출국 전 여유 시간을 활용해 득템하기 딱 좋은 곳이에요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.premiumoutlets.co.jp/rinku/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14141131390446530690", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%B0%EC%BF%A0+%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84+%EC%95%84%EC%9A%B8%EB%A0%9B+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "유니버설 시티워크 오사카": {
        photos: ["/images/osaka/info/shopping/universal-citywalk-osaka.jpg"],
        summary: "USJ 방문 전후로 맛집과 쇼핑을 즐기기 좋은 곳",
        updatedAt: "2026-07-13",
        highlights: ["다양한 테마 레스토랑", "귀여운 캐릭터 굿즈샵"],
        tips: ["USJ 입장 전 식사 해결하기 딱 좋아요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://times-info.net/P27-osaka/C104/park-detail-BUK0044884/?utm_source=detail&utm_medium=map&utm_campaign=mybusiness", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14646902042336498869", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%A0%EB%8B%88%EB%B2%84%EC%84%A4+%EC%8B%9C%ED%8B%B0%EC%9B%8C%ED%81%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라라포트 엑스포시티": {
        photos: ["/images/osaka/info/shopping/lalaport-expocity-osaka.jpg"],
        summary: "온 가족이 하루 종일 즐길 수 있는 대형 복합 쇼핑몰",
        updatedAt: "2026-07-13",
        highlights: ["가족 단위 쇼핑에 최적화된 브랜드", "다양한 엔터테인먼트 시설"],
        tips: ["아이와 함께하는 여행이라면 필수 코스예요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mitsui-shopping-park.com/lalaport/expocity/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17481515500333781975", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%9D%BC%ED%8F%AC%ED%8A%B8+%EC%97%91%EC%8A%A4%ED%8F%AC%EC%8B%9C%ED%8B%B0+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "신사이바시스지 상점가": {
        photos: ["/images/osaka/info/shopping/shinsaibashi-suji-shopping-street.jpg"],
        summary: "패션부터 먹거리까지 한곳에서 즐기는 오사카 최대 규모의 쇼핑 아케이드입니다.",
        updatedAt: "2026-07-23",
        highlights: ["트렌디한 패션 및 잡화 쇼핑", "길거리 간식과 다양한 먹거리 탐방", "날씨 걱정 없는 아케이드 구조"],
        tips: ["주변 도톤보리와 연계하여 방문하기 좋습니다.", "편한 신발을 신고 여유 있게 둘러보세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식/지도", url: "https://www.shinsaibashi.or.jp/", type: "official", description: "공식 또는 지도 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7087755665176380195", type: "guide", description: "지도에서 위치 보기" }
        ]
    }
};

export default info;
