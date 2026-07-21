import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "크메르 테이스트 레스토랑": {
        photos: ["/images/siem-reap/info/restaurants/khmer-taste-restaurant-siem-reap.jpg"],
        summary: "아목, 록락, 커리 등 다양한 크메르 전통 요리를 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["대표 메뉴인 아목과 록락 제공", "다양한 종류의 커리 전문"],
        tips: ["전통적인 크메르 풍미를 느끼고 싶은 분들께 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "아목·록락·커리", items: [{ name: "대표 메뉴", price: "$5~15", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 11:00; 화요일: 오전 7:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3877282856609238862", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A9%94%EB%A5%B4+%ED%85%8C%EC%9D%B4%EC%8A%A4%ED%8A%B8+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "크메르 키친": {
        photos: ["/images/siem-reap/info/restaurants/khmer-kitchen-restaurant-siem-reap.jpg"],
        summary: "정통 크메르 요리와 아목을 전문으로 하는 식당입니다.",
        updatedAt: "2026-07-21",
        highlights: ["아목 및 전통 크메르 요리 특화", "현지 느낌의 식사 가능"],
        tips: ["전통적인 맛을 선호한다면 방문해 보세요"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "아목·전통 크메르 요리", items: [{ name: "대표 메뉴", price: "$5~15", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15071755520764895158", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A9%94%EB%A5%B4+%ED%82%A4%EC%B9%9C+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "제네비브 레스토랑": {
        photos: ["/images/siem-reap/info/restaurants/genevieve-s-restaurant-siem-reap.jpg"],
        summary: "크메르 가정식과 그릴 요리를 전문으로 하는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["정통 크메르 가정식", "맛있는 그릴 요리"],
        tips: ["그릴 메뉴를 꼭 주문해보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "크메르 가정식·그릴", items: [{ name: "대표 메뉴", price: "$8~20", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/GenevievesRestaurant/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12468151101590555678", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%9C%EB%84%A4%EB%B9%84%EB%B8%8C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "포우 레스토랑 & 바": {
        photos: ["/images/siem-reap/info/restaurants/pou-restaurant-and-bar-siem-reap.jpg"],
        summary: "창의적인 크메르 요리를 선보이는 세련된 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["창의적인 크메르 퓨전 요리", "분위기 좋은 바"],
        tips: ["특별한 저녁 식사를 위해 예약하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "창의적인 크메르 요리", items: [{ name: "대표 메뉴", price: "$12~30", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.pourestaurant.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7088148169795164012", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%EC%9A%B0+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%26+%EB%B0%94+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "말리스 레스토랑 씨엠립": {
        photos: ["/images/siem-reap/info/restaurants/malis-restaurant-siem-reap.jpg"],
        summary: "프리미엄 크메르 코스 요리를 선보이는 고급스러운 식당입니다.",
        updatedAt: "2026-07-21",
        highlights: ["정통 크메르 스타일의 프리미엄 코스", "고급스러운 분위기"],
        tips: ["특별한 기념일에 방문하는 것을 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "프리미엄 크메르 코스", items: [{ name: "대표 메뉴", price: "$20~50", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 10:30; 화요일: 오전 6:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16691706133589084603", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%90%EB%A6%AC%EC%8A%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%94%A8%EC%97%A0%EB%A6%BD+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "엠버시 크메르 가스트로노미": {
        photos: ["/images/siem-reap/info/restaurants/embassy-khmer-gastronomy-siem-reap.jpg"],
        summary: "셰프 킴산이 선보이는 수준 높은 크메르 테이스팅 메뉴를 즐길 수 있습니다.",
        updatedAt: "2026-07-21",
        highlights: ["창의적인 크메르 테이스팅 메뉴", "높은 평점의 미식 경험"],
        tips: ["예약 후 방문하는 것이 좋습니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "크메르 테이스팅 메뉴", items: [{ name: "대표 메뉴", price: "$45~90", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 6:00~11:00; 화요일: 오후 6:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.embassy-restaurant.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17626263730374725979", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%A0%EB%B2%84%EC%8B%9C+%ED%81%AC%EB%A9%94%EB%A5%B4+%EA%B0%80%EC%8A%A4%ED%8A%B8%EB%A1%9C%EB%85%B8%EB%AF%B8+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "찬레이 트리": {
        photos: ["/images/siem-reap/info/restaurants/chanrey-tree-siem-reap.jpg"],
        summary: "강변의 아름다운 전망과 함께 정통 크메르 요리를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["강변 뷰를 감상하며 식사 가능", "정통 크메르 스타일 메뉴"],
        tips: ["창가 자리를 예약하면 더욱 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "강변 크메르 요리", items: [{ name: "대표 메뉴", price: "$12~35", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:30, 오후 5:30~10:30; 화요일: 오전 11:00 ~ 오후 2:30, 오후 5:30~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.chanreytree.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17246259385998678475", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B0%AC%EB%A0%88%EC%9D%B4+%ED%8A%B8%EB%A6%AC+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "더 슈가 팜": {
        photos: ["/images/siem-reap/info/restaurants/the-sugar-palm-siem-reap.jpg"],
        summary: "치킨 아목과 크메르 커리가 유명한 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["대표 메뉴인 치킨 아목", "깊은 풍미의 크메르 커리"],
        tips: ["현지 식재료의 신선함을 느껴보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "치킨 아목·크메르 커리", items: [{ name: "대표 메뉴", price: "$10~25", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오후 5:30~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.thesugarpalm.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14527631538107252390", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%8A%88%EA%B0%80+%ED%8C%9C+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "퀴진 왓 담낙": {
        photos: ["/images/siem-reap/info/restaurants/cuisine-wat-damnak-siem-reap.jpg"],
        summary: "시즌별 신선한 재료를 사용한 테이스팅 메뉴를 선보이는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["정교한 시즌 테이스팅 메뉴", "고급스러운 다이닝 경험"],
        tips: ["예약 후 방문하는 것을 권장합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "시즌 테이스팅 메뉴", items: [{ name: "대표 메뉴", price: "$35~80", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 6:00~11:00; 화요일: 오후 6:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.cuisinewatdamnak.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8723778561214297172", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%80%B4%EC%A7%84+%EC%99%93+%EB%8B%B4%EB%82%99+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "마룸": {
        photos: ["/images/siem-reap/info/restaurants/marum-siem-reap.jpg"],
        summary: "사회적 가치를 실현하는 소셜 엔터프라이즈 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["의미 있는 식사 경험", "소셜 임팩트 중심의 운영"],
        tips: ["지역 사회 공헌에 관심 있다면 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "소셜 엔터프라이즈 레스토랑", items: [{ name: "대표 메뉴", price: "$10~25", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 5:00~9:30; 화요일: 오후 5:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=61565832334763", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15935554952339975013", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A3%B8+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "테비스 플레이스": {
        photos: ["/images/siem-reap/info/restaurants/tevy-s-place-siem-reap.jpg"],
        summary: "록락과 커리 등 정성 가득한 홈스타일 메뉴를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 록락 메뉴", "맛있는 커리 요리"],
        tips: ["현지 스타일의 가정식을 경험하고 싶은 분들께 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "록락·커리·홈스타일 메뉴", items: [{ name: "대표 메뉴", price: "$5~15", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 9:30; 화요일: 오전 7:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/tevysplace/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10027680186645683481", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%8C%EB%B9%84%EC%8A%A4+%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "시스터 스레이 카페": {
        photos: ["/images/siem-reap/info/restaurants/sister-srey-cafe-siem-reap.jpg"],
        summary: "브런치와 커피, 상큼한 스무디를 여유롭게 즐기기 좋은 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 브런치 메뉴", "신선한 스무디와 커피"],
        tips: ["여유로운 아침 식사나 휴식을 위해 방문하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "브런치·커피·스무디", items: [{ name: "대표 메뉴", price: "$6~18", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 6:00; 화요일: 오전 7:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4482203333190365176", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EC%8A%A4%ED%84%B0+%EC%8A%A4%EB%A0%88%EC%9D%B4+%EC%B9%B4%ED%8E%98+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "풋프린트 카페": {
        photos: ["/images/siem-reap/info/restaurants/footprint-cafes-siem-reap.jpg"],
        summary: "책과 브런치를 함께 즐길 수 있는 여유로운 분위기의 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["책방 카페의 아늑한 분위기", "맛있는 브런치 메뉴"],
        tips: ["조용한 독서 시간을 원할 때 방문하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "책방 카페·브런치", items: [{ name: "대표 메뉴", price: "$6~18", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 8:00; 화요일: 오전 7:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://footprintcafes.org/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3389154996774761907", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%92%8B%ED%94%84%EB%A6%B0%ED%8A%B8+%EC%B9%B4%ED%8E%98+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "뉴 리프 이터리": {
        photos: ["/images/siem-reap/info/restaurants/new-leaf-eatery-siem-reap.jpg"],
        summary: "사회적 가치를 실천하는 의미 있는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["사회적 기업 운영 레스토랑", "신선하고 건강한 식재료 사용"],
        tips: ["의미 있는 한 끼를 원하는 여행객에게 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "사회적 기업 레스토랑", items: [{ name: "대표 메뉴", price: "$7~20", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 9:30; 화요일: 오전 7:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://newleafeatery.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1947355017180722307", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%89%B4+%EB%A6%AC%ED%94%84+%EC%9D%B4%ED%84%B0%EB%A6%AC+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "와일드 크리에이티브 바 & 이터리": {
        photos: ["/images/siem-reap/info/restaurants/wild-creative-bar-and-eatery-siem-reap.jpg"],
        summary: "창의적인 스프링롤과 수준 높은 칵테일을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["독창적인 메뉴 구성", "감각적인 칵테일"],
        tips: ["예약 후 방문하는 것을 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "창작 스프링롤·칵테일", items: [{ name: "대표 메뉴", price: "$8~25", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.wild-restaurants.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9894472257397334539", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%80%EC%9D%BC%EB%93%9C+%ED%81%AC%EB%A6%AC%EC%97%90%EC%9D%B4%ED%8B%B0%EB%B8%8C+%EB%B0%94+%26+%EC%9D%B4%ED%84%B0%EB%A6%AC+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
