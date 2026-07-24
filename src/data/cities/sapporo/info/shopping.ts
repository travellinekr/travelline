import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "다이마루 삿포로": {
        photos: ["/images/sapporo/info/shopping/daimaru-sapporo.jpg"],
        summary: "명품 쇼핑부터 맛있는 디저트까지 한 번에 해결할 수 있는 백화점",
        updatedAt: "2026-07-13",
        highlights: ["다양한 명품 브랜드 입점", "퀄리티 높은 프리미엄 식품관", "선물용 디저트 쇼핑 최적"],
        tips: ["식품관 인기 디저트는 일찍 품절될 수 있으니 서두르세요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.daimaru.co.jp/sapporo/?utm_source=google_map&utm_medium=social&utm_campaign=info&utm_content=07", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7779771215124676674", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9D%B4%EB%A7%88%EB%A3%A8+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 스텔라 플레이스": {
        photos: ["/images/sapporo/info/shopping/sapporo-stellar-place.jpg"],
        summary: "트렌디한 패션 브랜드와 맛집이 모여 있는 JR 타워 내 쇼핑몰",
        updatedAt: "2026-07-13",
        highlights: ["최신 유행 패션 아이템", "다양한 테마의 식당가", "JR 타워와 바로 연결된 편리함"],
        tips: ["쇼핑 후 JR 타워 전망대에서 삿포로 전경을 구경해 보세요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.stellarplace.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=957704132955663800", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%8A%A4%ED%85%94%EB%9D%BC+%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "에스타 삿포로": {
        photos: ["/images/sapporo/info/shopping/esta-sapporo.jpg"],
        summary: "전자제품과 식당가가 모여 있어 역 이동 중에 들르기 좋은 쇼핑 스팟",
        updatedAt: "2026-07-13",
        highlights: ["다양한 전자제품 입점", "편리한 역 동선", "알찬 구성의 식당가"],
        tips: ["역 근처라 여행 일정 중 짧게 들러 쇼핑하기 매우 편리해요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.yoshidakaban.com/shopinfo/potr/050/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8084296686827662369", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EC%8A%A4%ED%83%80+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 팩토리": {
        photos: ["/images/sapporo/info/shopping/sapporo-factory.jpg"],
        summary: "쇼핑과 영화, 맥주 역사를 한곳에서 즐기는 복합 문화 공간",
        updatedAt: "2026-07-13",
        highlights: ["쇼핑몰 및 영화관", "맥주 역사 체험"],
        tips: ["넓은 실내 공간이라 날씨 상관없이 구경하기 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sapporofactory.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7411927541422878872", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%8C%A9%ED%86%A0%EB%A6%AC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다누키코지 상점가": {
        photos: ["/images/sapporo/info/shopping/tanukikoji-shopping-street-sapporo.jpg"],
        summary: "드럭스토어와 맛집이 가득한 삿포로 쇼핑의 성지",
        updatedAt: "2026-07-13",
        highlights: ["다양한 드럭스토어", "기념품 및 길거리 음식"],
        tips: ["비나 눈을 피해 길게 이어진 상점가를 산책하기 좋아요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.tanukikoji.or.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4470248669125351329", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EB%88%84%ED%82%A4%EC%BD%94%EC%A7%80+%EC%83%81%EC%A0%90%EA%B0%80+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "폴타운": {
        photos: ["/images/sapporo/info/shopping/pole-town-sapporo.jpg"],
        summary: "비나 눈을 피해 아늑하게 즐기는 지하 쇼핑 거리",
        updatedAt: "2026-07-13",
        highlights: ["패션 아이템", "아기자기한 카페"],
        tips: ["추운 날씨에 따뜻하게 이동하며 구경하기 딱이에요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.sapporo-chikagai.jp/floorguide/?floor=pole", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12374667213875742941", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%B4%ED%83%80%EC%9A%B4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오로라타운": {
        photos: ["/images/sapporo/info/shopping/aurora-town-sapporo.jpg"],
        summary: "오도리역과 바로 연결되어 날씨 걱정 없이 쇼핑하기 좋은 지하 상가입니다.",
        updatedAt: "2026-07-13",
        highlights: ["오도리역 직결", "쾌적한 지하 통로"],
        tips: ["비나 눈이 오는 날 이동 경로로 활용하기 좋습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.sapporo-chikagai.jp/floorguide/?floor=aurora", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4330623455576058897", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%A1%9C%EB%9D%BC%ED%83%80%EC%9A%B4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "노르베사": {
        photos: ["/images/sapporo/info/shopping/norbesa-sapporo.jpg"],
        summary: "대관람차와 다양한 식당, 엔터테인먼트 시설을 한곳에서 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-13",
        highlights: ["도심 속 대관람차", "다양한 맛집"],
        tips: ["쇼핑 후 관람차를 타고 삿포로 야경을 감상해 보세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.norbesa.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9668939382000134155", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%B8%EB%A5%B4%EB%B2%A0%EC%82%AC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 파르코": {
        photos: ["/images/sapporo/info/shopping/parco-sapporo.jpg"],
        summary: "트렌디한 패션 브랜드와 잡화, 예쁜 카페가 모여 있는 쇼핑몰입니다.",
        updatedAt: "2026-07-13",
        highlights: ["최신 패션 아이템", "감성적인 카페"],
        tips: ["다양한 브랜드가 많아 구경하며 시간을 보내기 좋습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sapporo.parco.jp/?utm_source=mybusiness", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11028155924239346955", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%8C%8C%EB%A5%B4%EC%BD%94+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미쓰코시 삿포로": {
        photos: ["/images/sapporo/info/shopping/mitsukoshi-sapporo.jpg"],
        summary: "맛있는 디저트와 패션 쇼핑을 한 번에 해결하기 좋은 곳",
        updatedAt: "2026-07-13",
        highlights: ["고퀄리티 식품관", "다양한 브랜드 의류", "선물용 디저트 천국"],
        tips: ["지하 식품관에서 홋카이도 특산품 기념품 사기 딱 좋아요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 7:00; 화요일: 오전 10:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://mitsukoshi.mistore.jp/store/sapporo/index.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17601938766367119676", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%93%B0%EC%BD%94%EC%8B%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마루이 이마이 삿포로 본점": {
        photos: ["/images/sapporo/info/shopping/marui-imai-sapporo-main-store.jpg"],
        summary: "홋카이도의 로컬 맛과 감성을 만날 수 있는 쇼핑 명소",
        updatedAt: "2026-07-13",
        highlights: ["지역 특산 식재료", "세련된 패션 아이템", "정성 가득한 선물 세트"],
        tips: ["로컬 한정 디저트 코너는 꼭 들러보세요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:30 ~ 오후 7:30; 화요일: 오전 10:30 ~ 오후 7:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.maruiimai.mistore.jp/sapporo.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8769307183193897360", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A3%A8%EC%9D%B4+%EC%9D%B4%EB%A7%88%EC%9D%B4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EB%B3%B8%EC%A0%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "도큐백화점 삿포로": {
        photos: ["/images/sapporo/info/shopping/tokyu-department-store-sapporo.jpg"],
        summary: "트렌디한 의류부터 실용적인 생활용품까지 알찬 백화점",
        updatedAt: "2026-07-13",
        highlights: ["다양한 라이프스타일 굿즈", "맛있는 먹거리가 가득한 식품관", "패션 아이템"],
        tips: ["여행 기념품이나 소소한 잡화 쇼핑하기 좋아요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tokyu-dept.co.jp/sapporo/index.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5003881644452098584", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%ED%81%90%EB%B0%B1%ED%99%94%EC%A0%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빅카메라 삿포로": {
        photos: ["/images/sapporo/info/shopping/bic-camera-sapporo.jpg"],
        summary: "가전제품과 카메라 쇼핑하기 좋은 면세 전문 매장입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 디지털 기기", "간편한 면세 혜택"],
        tips: ["여권을 꼭 챙겨가야 면세를 받을 수 있어요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14559559469692544131", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%85%EC%B9%B4%EB%A9%94%EB%9D%BC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "요도바시카메라 삿포로": {
        photos: ["/images/sapporo/info/shopping/yodobashi-camera-multimedia-sapporo.jpg"],
        summary: "게임부터 카메라까지 IT 제품이 가득한 대형 가전 매장입니다.",
        updatedAt: "2026-07-13",
        highlights: ["방대한 게임 및 주변기기 라인업", "다양한 카메라 액세서리"],
        tips: ["매장이 매우 넓으니 미리 쇼핑 리스트를 준비하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9802739205559943701", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%94%EB%8F%84%EB%B0%94%EC%8B%9C%EC%B9%B4%EB%A9%94%EB%9D%BC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "돈키호테 다누키코지": {
        photos: ["/images/sapporo/info/shopping/don-quijote-sapporo-tanukikoji.jpg"],
        summary: "일본 기념품과 화장품을 한 번에 털 수 있는 쇼핑 필수 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 일본 간식 및 잡화", "가성비 좋은 코스메틱"],
        tips: ["사람이 많으니 여유로운 시간대에 방문하는 걸 추천해요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.donki.com/store/shop_detail.php?shop_id=467", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3946501892973204778", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%88%ED%82%A4%ED%98%B8%ED%85%8C+%EB%8B%A4%EB%88%84%ED%82%A4%EC%BD%94%EC%A7%80+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "니조시장": {
        photos: ["/images/sapporo/info/shopping/nijo-market-sapporo.jpg"],
        summary: "신선한 해산물을 바로 맛볼 수 있는 삿포로의 대표적인 수산 시장입니다.",
        updatedAt: "2026-07-13",
        highlights: ["싱싱한 카이센동", "다양한 기념품 쇼핑"],
        tips: ["아침 일찍 방문해야 가장 신선한 상태의 해산물을 즐길 수 있어요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 5:00; 화요일: 오전 7:00 ~ 오후 5:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://nijomarket.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10549800672913289719", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%88%EC%A1%B0%EC%8B%9C%EC%9E%A5+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 장외시장": {
        photos: ["/images/sapporo/info/shopping/curb-market-sapporo-central-wholesale-market.jpg"],
        summary: "대게와 멜론 등 홋카이도의 제철 특산물을 제대로 만날 수 있는 곳입니다.",
        updatedAt: "2026-07-13",
        highlights: ["큼직한 게 요리", "달콤한 홋카이도 멜론"],
        tips: ["현지 분위기를 느끼며 제철 해산물을 골라 먹는 재미가 있어요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 2:30; 화요일: 오전 9:00 ~ 오후 2:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2704552363625031114", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%9E%A5%EC%99%B8%EC%8B%9C%EC%9E%A5+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아리오 삿포로": {
        photos: ["/images/sapporo/info/shopping/ario-sapporo.jpg"],
        summary: "쇼핑부터 식사까지 한 번에 해결 가능한 대형 복합 쇼핑몰입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 브랜드와 마트", "편리한 푸드코트"],
        tips: ["가족 단위 여행객이 여유롭게 장보며 쉬어가기 좋습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sapporo.ario.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1156014809168977345", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%A6%AC%EC%98%A4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미쓰이 아울렛파크 삿포로 기타히로시마": {
        photos: ["/images/sapporo/info/shopping/mitsui-outlet-park-sapporo-kitahiroshima.jpg"],
        summary: "Mitsui Outlet Park Sapporo-Kitahiroshima 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["브랜드 아울렛, 근교 쇼핑", "평점 4", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mitsui-shopping-park.com/mop/sapporo/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17227823925360364557", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%93%B0%EC%9D%B4+%EC%95%84%EC%9A%B8%EB%A0%9B%ED%8C%8C%ED%81%AC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EA%B8%B0%ED%83%80%ED%9E%88%EB%A1%9C%EC%8B%9C%EB%A7%88+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "치토세 아울렛몰 레라": {
        photos: ["/images/sapporo/info/shopping/rera-chitose-outlet-mall-sapporo.jpg"],
        summary: "지토세 아울렛몰 레라 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["공항 근교 아울렛", "평점 3.4", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.outlet-rera.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10553156036790183417", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%98%ED%86%A0%EC%84%B8+%EC%95%84%EC%9A%B8%EB%A0%9B%EB%AA%B0+%EB%A0%88%EB%9D%BC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "닝구르테라스": {
        photos: ["/images/sapporo/info/shopping/ningle-terrace.jpg"],
        summary: "후라노 숲길 사이 펼쳐진 아기자기한 수공예품 상점가",
        updatedAt: "2026-07-23",
        highlights: ["동화 같은 통나무집 마을 풍경", "작가들의 정성이 담긴 수공예 소품", "야간 조명이 만드는 환상적인 야경"],
        tips: ["해질녘 조명과 산책 동선을 함께 잡으면 좋습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 7:45; 화요일: 오전 11:00 ~ 오후 7:45",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [{ label: "공식/지도", url: "https://www.princehotels.co.jp/shinfurano/facility/ningle_terrace/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=12084578554544908332", type: "guide", description: "지도에서 위치 보기" }]
    },
    "사카이마치도리 상점가": {
        photos: ["/images/sapporo/info/shopping/sakaimachi-dori-shopping-street.jpg"],
        summary: "유리공예와 달콤한 디저트가 가득한 오타루의 대표적인 산책 코스",
        updatedAt: "2026-07-23",
        highlights: ["정교한 유리공예품 구경", "오타루 명물 디저트 맛보기", "아기자기한 기념품 쇼핑"],
        tips: ["상점별 영업시간이 달라 늦은 시간 방문 전 확인을 추천합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [{ label: "공식/지도", url: "https://otaru-sakaimachi.com/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=10168121066734803839", type: "guide", description: "지도에서 위치 보기" }]
    },
    "오타루 오르골당 본관": {
        photos: ["/images/sapporo/info/shopping/otaru-music-box-museum.jpg"],
        summary: "다양한 종류의 오르골과 아기자기한 기념품을 만날 수 있는 오타루 대표 쇼핑 스팟",
        updatedAt: "2026-07-23",
        highlights: ["수만 점의 다채로운 오르골 컬렉션", "클래식하고 낭만적인 매장 분위기", "여행 추억을 간직할 특별한 기념품 쇼핑"],
        tips: ["오르골 소리를 감상하며 천천히 둘러보는 것을 추천합니다.", "오타루 산책 코스와 함께 방문하기 좋습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [{ label: "공식/지도", url: "https://www.otaru-orgel.co.jp/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=13013518922636518855", type: "guide", description: "지도에서 위치 보기" }]
    }
};

export default info;
