import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "잭스 스테이크 하우스": {
        photos: ["/images/okinawa/info/restaurants/jack-s-steak-house-naha-okinawa.jpg"],
        summary: "두툼한 고기 육즙과 레트로 감성이 가득한 클래식 스테이크 맛집",
        updatedAt: "2026-07-13",
        highlights: ["입안 가득 퍼지는 테판 스테이크의 풍미", "현지 분위기를 물씬 느낄 수 있는 빈티지한 인테리어"],
        tips: ["웨이팅이 길 수 있으니 오픈 시간이나 식사 피크 타임을 피해 방문하세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "테판 스테이크", items: [{ name: "대표 메뉴", price: "¥2,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6522606484635319543", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%AD%EC%8A%A4+%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC+%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "유난기": {
        photos: ["/images/okinawa/info/restaurants/yunangi-naha-okinawa.jpg"],
        summary: "오키나와 전통 가정식을 제대로 맛볼 수 있는 로컬 식당",
        updatedAt: "2026-07-13",
        highlights: ["입에서 녹는 부드러운 라후테", "쌉싸름하고 고소한 매력의 고야참푸루"],
        tips: ["현지인들에게도 인기 있는 곳이라 저녁 시간엔 서두르는 것이 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "라후테·고야참푸루", items: [{ name: "대표 메뉴", price: "¥2,000~4,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~10:00; 화요일: 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13564136191706926577", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%A0%EB%82%9C%EA%B8%B0+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "슈리소바": {
        photos: ["/images/okinawa/info/restaurants/shuri-soba-naha-okinawa.jpg"],
        summary: "오키나와 소바 본연의 깊은 맛을 느낄 수 있는 슈리 지역 명소",
        updatedAt: "2026-07-13",
        highlights: ["진하고 담백한 전통 육수", "쫄깃한 면발과 깔끔한 뒷맛"],
        tips: ["가벼운 점심 식사로 즐기기에 딱 좋은 메뉴입니다"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "오키나와 소바", items: [{ name: "대표 메뉴", price: "¥800~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00; 화요일: 오전 11:00 ~ 오후 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/shurisoba?igsh=bThyeDZhMzJ2cHZs", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8226109045606690430", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%88%EB%A6%AC%EC%86%8C%EB%B0%94+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하마야 소바": {
        photos: ["/images/okinawa/info/restaurants/hamaya-soba-chatan-okinawa.jpg"],
        summary: "부드러운 갈비가 올라간 진한 국물의 소키소바 맛집",
        updatedAt: "2026-07-13",
        highlights: ["입안에서 녹는 부드러운 소키(돼지갈비)의 풍미", "깊고 담백한 육수와 쫄깃한 면발"],
        tips: ["점심시간에는 웨이팅이 있을 수 있으니 여유 있게 방문하세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "소키소바", items: [{ name: "대표 메뉴", price: "¥800~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 5:30; 화요일: 오전 10:00 ~ 오후 5:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hamayasoba.gorp.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12045287017928494962", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%A7%88%EC%95%BC+%EC%86%8C%EB%B0%94+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "기시모토 식당": {
        photos: ["/images/okinawa/info/restaurants/kishimoto-shokudo-motobu-okinawa.jpg"],
        summary: "오랜 전통을 간직한 정통 오키나와 소바의 진수를 맛볼 수 있는 곳",
        updatedAt: "2026-07-13",
        highlights: ["전통 방식 그대로의 깊은 국물 맛", "현지 분위기가 물씬 느껴지는 노포 감성"],
        tips: ["전통적인 스타일이라 호불호가 갈릴 수 있지만 꼭 경험해 볼 만한 맛"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "전통 오키나와 소바", items: [{ name: "대표 메뉴", price: "¥800~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 5:00; 화요일: 오전 11:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1608828000850414129", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B0%EC%8B%9C%EB%AA%A8%ED%86%A0+%EC%8B%9D%EB%8B%B9+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마키시 공설시장": {
        photos: ["/images/okinawa/info/restaurants/makishi-public-market-naha-okinawa.jpg"],
        summary: "신선한 해산물과 다양한 오키나와 식재료를 한눈에 즐기는 활기찬 시장",
        updatedAt: "2026-07-13",
        highlights: ["싱싱한 제철 해산물을 바로 만날 수 있는 곳", "오키나와 로컬 식재료 구경하는 재미"],
        tips: ["1층에서 재료를 골라 2층 식당에서 즉석 조리해 먹는 것을 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물·오키나와 식재료", items: [{ name: "대표 메뉴", price: "¥1,000~4,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.makishi-public-market.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12134031717300061400", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%ED%82%A4%EC%8B%9C+%EA%B3%B5%EC%84%A4%EC%8B%9C%EC%9E%A5+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "포크 타마고 오니기리 본점": {
        photos: ["/images/okinawa/info/restaurants/pork-tamago-onigiri-honten-naha-okinawa.jpg"],
        summary: "짭조름한 스팸과 폭신한 계란이 만난 오키나와 필수 간식",
        updatedAt: "2026-07-13",
        highlights: ["두툼한 스팸과 계란의 환상적인 조화", "가성비 좋고 든든한 한 끼 식사"],
        tips: ["아침 식사 대용이나 간단한 길거리 음식으로 딱이에요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "포크타마고 오니기리", items: [{ name: "대표 메뉴", price: "¥400~1,200", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 8:00; 화요일: 오전 7:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://porktamago.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7576803173627225668", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%ED%81%AC+%ED%83%80%EB%A7%88%EA%B3%A0+%EC%98%A4%EB%8B%88%EA%B8%B0%EB%A6%AC+%EB%B3%B8%EC%A0%90+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "블루씰 마키미나토": {
        photos: ["/images/okinawa/info/restaurants/blue-seal-makiminato-okinawa.jpg"],
        summary: "오키나와 여행 중 놓칠 수 없는 국민 아이스크림 맛집",
        updatedAt: "2026-07-13",
        highlights: ["다양하고 이색적인 로컬 플레이버", "더위를 식혀줄 시원한 디저트 타임"],
        tips: ["자우아이(자색고구마) 맛은 꼭 드셔보세요!"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "오키나와 아이스크림", items: [{ name: "대표 메뉴", price: "¥500~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://map.blueseal.co.jp/shop-info/?id=makiminato&utm_source=google&utm_medium=gbp", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17318301334061017980", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%94%EB%A3%A8%EC%94%B0+%EB%A7%88%ED%82%A4%EB%AF%B8%EB%82%98%ED%86%A0+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "류큐사보 아시비우나": {
        photos: ["/images/okinawa/info/restaurants/ryukyu-sabo-ashibiuna-naha-okinawa.png"],
        summary: "아름다운 고택 정원을 바라보며 즐기는 여유로운 식사",
        updatedAt: "2026-07-13",
        highlights: ["일본 전통 분위기가 물씬 풍기는 정원 뷰", "고즈넉하고 품격 있는 공간 경험"],
        tips: ["분위기가 좋아 예약 후 방문하는 것을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "고택 정원 식사", items: [{ name: "대표 메뉴", price: "¥2,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00~11:00; 화요일: 오후 4:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ryukyukiraku.owst.jp/?utm_source=GBP&utm_medium=GBP&utm_term=GBP&utm_content=GBP&utm_campaign=GBP", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11085225814642612759", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A5%98%ED%81%90%EC%82%AC%EB%B3%B4+%EC%95%84%EC%8B%9C%EB%B9%84%EC%9A%B0%EB%82%98+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "A&W 마키미나토": {
        photos: ["/images/okinawa/info/restaurants/a-and-w-makiminato-okinawa.jpg"],
        summary: "A&W Makiminato 기준으로 확인한 오키나와 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["루트비어·버거", "평점 4.3", "오키나와 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "루트비어·버거", items: [{ name: "대표 메뉴", price: "¥800~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.awok.co.jp/shopsearch/makiminato/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8960433303381575413", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=A%26W+%EB%A7%88%ED%82%A4%EB%AF%B8%EB%82%98%ED%86%A0+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우후야": {
        photos: ["/images/okinawa/info/restaurants/ufuya-nago-okinawa.jpg"],
        summary: "백년고가 우후야 기준으로 확인한 오키나와 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["아구 돼지·고택 식사", "평점 4.1", "오키나와 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "아구 돼지·고택 식사", items: [{ name: "대표 메뉴", price: "¥2,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:30, 오후 5:30~9:00; 화요일: 오전 11:00 ~ 오후 3:30, 오후 5:30~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ufuya.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7806570637372482677", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%ED%9B%84%EC%95%BC+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "캡틴 캥거루": {
        photos: ["/images/okinawa/info/restaurants/captain-kangaroo-okinawa.jpg"],
        summary: "캡틴 캥거루 기준으로 확인한 오키나와 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["수제버거", "평점 4.3", "오키나와 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "수제버거", items: [{ name: "대표 메뉴", price: "¥1,500~3,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 4:30; 화요일: 오전 11:00 ~ 오후 4:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/captainkangaroo_okinawa/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18413035578165687367", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BA%A1%ED%8B%B4+%EC%BA%A5%EA%B1%B0%EB%A3%A8+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시사이드 드라이브인": {
        photos: ["/images/okinawa/info/restaurants/seaside-drive-in-okinawa.jpg"],
        summary: "클래식한 미국식 식사와 따뜻한 수프를 즐길 수 있는 드라이브 코스 맛집",
        updatedAt: "2026-07-13",
        highlights: ["미국식 스타일의 든든한 메뉴", "깊은 풍미의 수프"],
        tips: ["해안 도로 드라이브 중 들르기 딱 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "수프·미국식 식사", items: [{ name: "대표 메뉴", price: "¥1,000~3,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.seaside-drivein.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17106185056103506259", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EC%82%AC%EC%9D%B4%EB%93%9C+%EB%93%9C%EB%9D%BC%EC%9D%B4%EB%B8%8C%EC%9D%B8+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코우리 쉬림프": {
        photos: ["/images/okinawa/info/restaurants/kouri-shrimp-okinawa.png"],
        summary: "코우리 섬 여행의 필수 코스, 마늘 향 가득한 갈릭 쉬림프 전문점",
        updatedAt: "2026-07-13",
        highlights: ["탱글탱글한 식감의 갈릭 쉬림프", "코우리 대교 근처 명소"],
        tips: ["인기 맛집이라 웨이팅을 고려하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "갈릭 쉬림프", items: [{ name: "대표 메뉴", price: "¥1,500~3,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 4:00; 화요일: 오전 11:00 ~ 오후 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://lovesokinawa.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7502359564575922405", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EC%9A%B0%EB%A6%AC+%EC%89%AC%EB%A6%BC%ED%94%84+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하테루마 국제거리": {
        photos: ["/images/okinawa/info/restaurants/hateruma-kokusai-dori-okinawa.jpg"],
        summary: "오키나와 전통 민요 라이브와 현지 요리를 동시에 즐기는 곳",
        updatedAt: "2026-07-13",
        highlights: ["생동감 넘치는 민요 라이브", "다양한 오키나와 향토 음식"],
        tips: ["현지 분위기에 흠뻑 빠지고 싶은 분들께 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "민요 라이브·오키나와 요리", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00 ~ 오전 12:00; 화요일: 오후 5:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tabelog.com/okinawa/A4701/A470101/47030592/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10216029636081029100", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%ED%85%8C%EB%A3%A8%EB%A7%88+%EA%B5%AD%EC%A0%9C%EA%B1%B0%EB%A6%AC+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "국제거리 포장마차 마을": {
        photos: ["/images/okinawa/info/restaurants/kokusai-dori-yataimura.jpg"],
        summary: "오리온 생맥주와 다양한 현지 안주가 가득한 나하의 대표적인 야시장 명소",
        updatedAt: "2026-07-23",
        highlights: ["오키나와 스타일 이자카야 메뉴", "시원한 오리온 생맥주", "활기찬 포장마차 거리 분위기"],
        tips: ["선선한 밤공기와 함께 즐기는 시원한 맥주 한 잔을 추천합니다.", "다양한 안주를 조금씩 여러 가게에서 맛보는 재미가 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "오키나와 안주·오리온 맥주", items: [{ name: "대표 메뉴", price: "¥1,500~3,500", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00 ~ 오전 12:00; 화요일: 오후 12:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [{ label: "공식/지도", url: "https://kokusaidoori-yataimura.okinawa/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=4055004008214392115", type: "guide", description: "지도에서 위치 보기" }]
    }
};

export default info;
