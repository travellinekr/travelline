import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "캐널시티 하카타": {
        photos: ["/images/fukuoka/info/shopping/canal-city-hakata-fukuoka.jpg"],
        summary: "캐널시티 하카타 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쇼핑, 라멘스타디움, 분수쇼", "평점 4.2", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://canalcity.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16207815243977726417", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BA%90%EB%84%90%EC%8B%9C%ED%8B%B0+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "JR 하카타시티": {
        photos: ["/images/fukuoka/info/shopping/jr-hakata-city-fukuoka.jpg"],
        summary: "JR 하카타 에키마에 광장 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["아뮤플라자, 도큐핸즈, 식당가", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.jrhakatacity.com/communicationspace/eventspace/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12790490125066672287", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=JR+%ED%95%98%EC%B9%B4%ED%83%80%EC%8B%9C%ED%8B%B0+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아뮤플라자 하카타": {
        photos: ["/images/fukuoka/info/shopping/amu-plaza-hakata-fukuoka.jpg"],
        summary: "아뮤플라자 하카타 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 잡화, 식당가", "평점 4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.jrhakatacity.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6204142085769849844", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%AE%A4%ED%94%8C%EB%9D%BC%EC%9E%90+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하카타 한큐": {
        photos: ["/images/fukuoka/info/shopping/hakata-hankyu-fukuoka.jpg"],
        summary: "한큐 하카타 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["명품, 디저트, 식품관", "평점 4.1", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hankyu-dept.co.jp/hakata/?utm_source=hakatagooglemap&utm_medium=storemedia", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14575801725057795308", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4%ED%83%80+%ED%95%9C%ED%81%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "KITTE 하카타": {
        photos: ["/images/fukuoka/info/shopping/kitte-hakata-fukuoka.jpg"],
        summary: "킷테 하카타 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["식당가, 잡화, 역 접근", "평점 4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오전 12:00; 화요일: 오전 7:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hakata.jp-kitte.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9834527335979175800", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=KITTE+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "텐진 지하상가": {
        photos: ["/images/fukuoka/info/shopping/tenjin-underground-mall-fukuoka.jpg"],
        summary: "텐진 지하상가 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 카페, 비 오는 날 동선", "평점 4.1", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.tenchika.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12006416572707283355", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%90%EC%A7%84+%EC%A7%80%ED%95%98%EC%83%81%EA%B0%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "솔라리아 플라자": {
        photos: ["/images/fukuoka/info/shopping/solaria-plaza-fukuoka.jpg"],
        summary: "솔라리아 플라자 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 뷰티, 카페", "평점 4.1", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.solariaplaza.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2993202943202711023", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%94%EB%9D%BC%EB%A6%AC%EC%95%84+%ED%94%8C%EB%9D%BC%EC%9E%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "솔라리아 스테이지": {
        photos: ["/images/fukuoka/info/shopping/solaria-stage-fukuoka.jpg"],
        summary: "솔라리아 스테이지 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["식당가, 잡화, 교통 동선", "평점 3.9", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:30; 화요일: 오전 10:00 ~ 오후 8:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.solariastage.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17370759939890298347", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%94%EB%9D%BC%EB%A6%AC%EC%95%84+%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "후쿠오카 파르코": {
        photos: ["/images/fukuoka/info/shopping/fukuoka-parco.jpg"],
        summary: "파르코 텐진 후쿠오카 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 캐릭터, 식당가", "평점 4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:30; 화요일: 오전 10:00 ~ 오후 8:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://fukuoka.parco.jp/?utm_source=mybusiness", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5083421680458460640", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%8C%8C%EB%A5%B4%EC%BD%94+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미나 텐진": {
        photos: ["/images/fukuoka/info/shopping/mina-tenjin-fukuoka.jpg"],
        summary: "유니클로와 로프트 등 다양한 잡화를 한 번에 쇼핑하기 좋은 곳이에요.",
        updatedAt: "2026-07-13",
        highlights: ["유니클로", "로프트(LOFT)", "다양한 생활 잡화"],
        tips: ["의류부터 문구류까지 한곳에서 해결할 수 있어 편리해요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.mina-tenjin.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18036947488806088742", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EB%82%98+%ED%85%90%EC%A7%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이와타야 본점": {
        photos: ["/images/fukuoka/info/shopping/iwataya-main-store-fukuoka.jpg"],
        summary: "명품 브랜드와 고급스러운 식품관을 만날 수 있는 텐진의 대표 백화점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["명품 브랜드", "고급 식품관", "선물용 아이템"],
        tips: ["식품관에서 맛있는 디저트를 찾아보는 재미가 있어요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.iwataya-mitsukoshi.mistore.jp/iwataya.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16321166511239445850", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%99%80%ED%83%80%EC%95%BC+%EB%B3%B8%EC%A0%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다이마루 후쿠오카 텐진": {
        photos: ["/images/fukuoka/info/shopping/daimaru-fukuoka-tenjin.jpg"],
        summary: "명품 쇼핑과 달콤한 디저트를 동시에 즐기기 좋은 백화점이에요.",
        updatedAt: "2026-07-13",
        highlights: ["명품 브랜드", "디저트 맛집", "식품관"],
        tips: ["식품관의 다양한 디저트 라인업을 놓치지 마세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.daimaru.co.jp/fukuoka/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14777074030141287736", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9D%B4%EB%A7%88%EB%A3%A8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%85%90%EC%A7%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "돈키호테 나카스": {
        photos: ["/images/fukuoka/info/shopping/don-quijote-nakasu-fukuoka.jpg"],
        summary: "돈키호테 나카스점 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["기념품, 화장품, 잡화", "평점 3.7", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.donki.com/store/shop_detail.php?shop_id=278", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11140194501566150277", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%88%ED%82%A4%ED%98%B8%ED%85%8C+%EB%82%98%EC%B9%B4%EC%8A%A4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "요도바시카메라 하카타": {
        photos: ["/images/fukuoka/info/shopping/yodobashi-camera-hakata-fukuoka.jpg"],
        summary: "요도바시 카메라 멀티미디어 하카타 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["전자제품, 카메라, 게임", "평점 4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7733669148182315209", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%94%EB%8F%84%EB%B0%94%EC%8B%9C%EC%B9%B4%EB%A9%94%EB%9D%BC+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빅카메라 텐진": {
        photos: ["/images/fukuoka/info/shopping/bic-camera-tenjin-fukuoka.jpg"],
        summary: "빅카메라 텐진1호점 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["전자제품, 약품, 면세", "평점 3.8", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2330255254105817357", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%85%EC%B9%B4%EB%A9%94%EB%9D%BC+%ED%85%90%EC%A7%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마리노아시티 후쿠오카": {
        photos: ["/images/fukuoka/info/shopping/marinoa-city-fukuoka.jpg"],
        summary: "마리노아시티 후쿠오카 (Marinoa City Fukuoka) 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["아울렛 쇼핑, 항구 전망", "평점 3.9", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7155302585404326288", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A6%AC%EB%85%B8%EC%95%84%EC%8B%9C%ED%8B%B0+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라라포트 후쿠오카": {
        photos: ["/images/fukuoka/info/shopping/lalaport-fukuoka.jpg"],
        summary: "라라포트 후쿠오카 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["건담, 가족 쇼핑, 식당가", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mitsui-shopping-park.com/lalaport/fukuoka/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16534745193780662528", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%9D%BC%ED%8F%AC%ED%8A%B8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마크이즈 후쿠오카 모모치": {
        photos: ["/images/fukuoka/info/shopping/mark-is-fukuoka-momochi.jpg"],
        summary: "마크이즈 후쿠오카 모모치 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["모모치 쇼핑, 식당, 영화관", "평점 3.9", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.mec-markis.jp/fukuoka-momochi/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8617570902008776781", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%ED%81%AC%EC%9D%B4%EC%A6%88+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%EB%AA%A8%EB%AA%A8%EC%B9%98+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "야나기바시 연합시장": {
        photos: ["/images/fukuoka/info/shopping/yanagibashi-rengo-market-fukuoka.jpg"],
        summary: "Yanagibashi Rengo Market 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해산물, 로컬 식재료, 먹거리", "평점 3.8", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://yanagibashi-rengo.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1475070098750848996", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%BC%EB%82%98%EA%B8%B0%EB%B0%94%EC%8B%9C+%EC%97%B0%ED%95%A9%EC%8B%9C%EC%9E%A5+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "도스 프리미엄 아울렛": {
        photos: ["/images/fukuoka/info/shopping/tosu-premium-outlets-fukuoka.jpg"],
        summary: "도스 프리미엄 아울렛 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["브랜드 아울렛, 근교 쇼핑", "평점 4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.premiumoutlets.co.jp/tosu/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14382326322032179935", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%8A%A4+%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84+%EC%95%84%EC%9A%B8%EB%A0%9B+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
