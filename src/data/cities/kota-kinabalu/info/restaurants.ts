import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "웰컴 씨푸드 레스토랑": {
        photos: ["/images/kota-kinabalu/info/restaurants/welcome-seafood-restaurant-kota-kinabalu.jpg"],
        summary: "코타키나발루 여행객들의 필수 코스, 가성비 넘치는 해산물 맛집입니다.",
        updatedAt: "2026-07-15",
        highlights: ["칠리크랩", "탱글한 새우 요리", "다양한 조개류"],
        tips: ["저녁 피크 타임에는 웨이팅이 길 수 있으니 서두르세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "칠리크랩·새우·조개", items: [{ name: "대표 메뉴", price: "RM40~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:30~11:00; 화요일: 오후 12:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16957066962621969129", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9B%B0%EC%BB%B4+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "수앙타인 씨푸드": {
        photos: ["/images/kota-kinabalu/info/restaurants/suang-tain-seafood-restaurant-kota-kinabalu.jpg"],
        summary: "현지 분위기를 물씬 느낄 수 있는 로컬 해산물 전문점입니다.",
        updatedAt: "2026-07-15",
        highlights: ["신선한 로컬 해산물", "현지 스타일 요리"],
        tips: ["가성비 좋게 로컬 맛을 즐기고 싶을 때 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로컬 해산물 요리", items: [{ name: "대표 메뉴", price: "RM40~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 2:30~11:00; 화요일: 오후 2:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12931999808620123604", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%98%EC%95%99%ED%83%80%EC%9D%B8+%EC%94%A8%ED%91%B8%EB%93%9C+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "팟키 씨푸드": {
        photos: ["/images/kota-kinabalu/info/restaurants/fatt-kee-seafood-restaurant-kota-kinabalu.jpg"],
        summary: "생선국수와 신선한 해산물을 동시에 즐길 수 있는 고평점 맛집입니다.",
        updatedAt: "2026-07-15",
        highlights: ["깊은 맛의 생선국수", "신선도가 뛰어난 해산물"],
        tips: ["높은 평점만큼 웨이팅이 있을 수 있으니 참고하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "생선국수·해산물", items: [{ name: "대표 메뉴", price: "RM20~100", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:30 ~ 오후 9:30; 화요일: 오전 8:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12506913999026743091", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%9F%ED%82%A4+%EC%94%A8%ED%91%B8%EB%93%9C+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이펑 락사": {
        photos: ["/images/kota-kinabalu/info/restaurants/yee-fung-laksa-kota-kinabalu.jpg"],
        summary: "진한 국물 맛이 일품인 코타키나발루 필수 먹거리 락사와 우육면 맛집",
        updatedAt: "2026-07-15",
        highlights: ["깊은 풍미의 락사", "부드러운 고기가 듬뿍 들어간 응우차프"],
        tips: ["현지 로컬 분위기를 제대로 느낄 수 있어요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "락사·응우차프", items: [{ name: "대표 메뉴", price: "RM10~30", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 5:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2024585748258702605", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%ED%8E%91+%EB%9D%BD%EC%82%AC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이펑 커피숍": {
        photos: ["/images/kota-kinabalu/info/restaurants/kedai-kopi-yee-fung-kota-kinabalu.jpg"],
        summary: "다양한 종류의 로컬 누들을 맛볼 수 있는 가성비 넘치는 현지 식당",
        updatedAt: "2026-07-15",
        highlights: ["다양한 로컬 누들 메뉴", "부담 없는 가격"],
        tips: ["현지인들이 즐겨 찾는 아침이나 점심 식사 장소로 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "락사·로컬 누들", items: [{ name: "대표 메뉴", price: "RM10~30", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 3:00; 화요일: 오전 6:00 ~ 오후 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7524938471555545430", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%ED%8E%91+%EC%BB%A4%ED%94%BC%EC%88%8D+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "푹유엔 카페": {
        photos: ["/images/kota-kinabalu/info/restaurants/kedai-kopi-fook-yuen-kota-kinabalu.jpg"],
        summary: "바삭한 카야 토스트와 커피로 여유로운 아침을 즐기기 좋은 곳",
        updatedAt: "2026-07-15",
        highlights: ["달콤하고 바삭한 카야 토스트", "고소한 로티와 진한 현지 커피"],
        tips: ["현지식 브런치를 경험하고 싶을 때 방문하기 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "카야토스트·로티·커피", items: [{ name: "대표 메뉴", price: "RM10~40", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 6:00 ~ 오후 11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=100196662969169892", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B9%EC%9C%A0%EC%97%94+%EC%B9%B4%ED%8E%98+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "멜라니안 3": {
        photos: ["/images/kota-kinabalu/info/restaurants/kedai-kopi-melanian-3-kota-kinabalu.jpg"],
        summary: "현지 느낌 물씬 나는 누들과 라이스를 맛볼 수 있는 가성비 로컬 식당",
        updatedAt: "2026-07-15",
        highlights: ["로컬 스타일의 누들·라이스 요리", "부담 없는 가격"],
        tips: ["현지인들이 즐겨 찾는 노포 분위기를 느껴보세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로컬 누들·라이스", items: [{ name: "대표 메뉴", price: "RM10~40", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 3:00; 화요일: 오전 6:30 ~ 오후 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/kedaikopimelanian3?mibextid=LQQJ4d", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12373428692382565228", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%9C%EB%9D%BC%EB%8B%88%EC%95%88+3+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "눅 카페": {
        photos: ["/images/kota-kinabalu/info/restaurants/nook-cafe-kota-kinabalu.jpg"],
        summary: "여유로운 브런치와 커피 한 잔의 휴식을 즐기기 좋은 카페",
        updatedAt: "2026-07-15",
        highlights: ["다양한 브런치 메뉴", "편안한 분위기"],
        tips: ["느긋한 오전 시간을 보내기에 아주 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커피·브런치", items: [{ name: "대표 메뉴", price: "RM20~60", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 7:00; 화요일: 오전 7:00 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://linktr.ee/look.for.nook", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12003863783450766375", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%88%85+%EC%B9%B4%ED%8E%98+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "옥토버 커피 하우스": {
        photos: ["/images/kota-kinabalu/info/restaurants/october-coffee-house-kota-kinabalu.jpg"],
        summary: "스페셜티 커피와 달콤한 디저트로 힐링하기 좋은 감성 카페",
        updatedAt: "2026-07-15",
        highlights: ["고퀄리티 스페셜티 커피", "매력적인 디저트"],
        tips: ["커피 맛에 진심이라면 꼭 들러야 할 곳입니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스페셜티 커피·디저트", items: [{ name: "대표 메뉴", price: "RM15~50", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/octobercoffeegaya/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17294705735320230234", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A5%ED%86%A0%EB%B2%84+%EC%BB%A4%ED%94%BC+%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "엘 센트로": {
        photos: ["/images/kota-kinabalu/info/restaurants/el-centro-kota-kinabalu.jpg"],
        summary: "타코와 버거를 즐기기 좋은 힙한 분위기의 브런치 맛집",
        updatedAt: "2026-07-15",
        highlights: ["다양한 종류의 타코", "육즙 가득한 수제 버거", "여유로운 브런치 메뉴"],
        tips: ["분위기가 좋아 친구들과 방문하기 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "타코·버거·브런치", items: [{ name: "대표 메뉴", price: "RM30~100", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/centro_el/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7149301743580024770", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%98+%EC%84%BC%ED%8A%B8%EB%A1%9C+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리틀 이탈리 코타키나발루": {
        photos: ["/images/kota-kinabalu/info/restaurants/little-italy-kota-kinabalu.jpg"],
        summary: "정통 이탈리아의 맛을 느낄 수 있는 파스타와 피자 전문점",
        updatedAt: "2026-07-15",
        highlights: ["풍미 가득한 화덕 피자", "다양한 소스의 파스타"],
        tips: ["현지에서 즐기는 이탈리안 요리로 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "파스타·피자", items: [{ name: "대표 메뉴", price: "RM35~120", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~10:00; 화요일: 오후 12:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10152756557145772979", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%ED%8B%80+%EC%9D%B4%ED%83%88%EB%A6%AC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "칠리 바닐라": {
        photos: ["/images/kota-kinabalu/info/restaurants/chilli-vanilla-kota-kinabalu.jpg"],
        summary: "와인과 함께 굴라시를 즐기기 좋은 로맨틱한 레스토랑",
        updatedAt: "2026-07-15",
        highlights: ["깊은 맛의 굴라시", "분위기 있는 와인 리스트"],
        tips: ["저녁 식사와 와인 한 잔 곁들이기에 딱이에요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "굴라시·파스타·와인", items: [{ name: "대표 메뉴", price: "RM35~120", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~9:30; 화요일: 오후 12:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/pages/Chilli-Vanilla-Cafe/147177555364821", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15435148770400795226", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%A0%EB%A6%AC+%EB%B0%94%EB%8B%90%EB%9D%BC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "어퍼스타 카페 앤 바": {
        photos: ["/images/kota-kinabalu/info/restaurants/upperstar-cafe-bar-kota-kinabalu.jpg"],
        summary: "스테이크와 버거를 맥주와 함께 즐기기 좋은 캐주얼한 곳입니다.",
        updatedAt: "2026-07-15",
        highlights: ["스테이크", "버거", "맥주"],
        tips: ["저녁 식사와 가벼운 맥주 한잔하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스테이크·버거·맥주", items: [{ name: "대표 메뉴", price: "RM25~100", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오전 12:00; 화요일: 오전 10:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/pages/Upperstar-Restaurant-Bar/131621573601734", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5226470455155671144", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%96%B4%ED%8D%BC%EC%8A%A4%ED%83%80+%EC%B9%B4%ED%8E%98+%EC%95%A4+%EB%B0%94+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "셍힝 커피숍": {
        photos: ["/images/kota-kinabalu/info/restaurants/seng-hing-coffee-shop-kota-kinabalu.jpg"],
        summary: "현지 스타일의 생선면과 로컬 누들을 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-07-15",
        highlights: ["생선면", "로컬 누들"],
        tips: ["현지 분위기를 느끼며 가볍게 식사하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "생선면·로컬 누들", items: [{ name: "대표 메뉴", price: "RM10~40", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 4:00; 화요일: 오전 7:00 ~ 오후 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/pages/Kedai-Kopi-Seng-Hing/155823381139947", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=945595785905504128", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%85%8D%ED%9E%9D+%EC%BB%A4%ED%94%BC%EC%88%8D+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "킴힝리 커피숍": {
        photos: ["/images/kota-kinabalu/info/restaurants/kedai-kopi-kim-hing-lee-kota-kinabalu.jpg"],
        summary: "사바 지역 특유의 맛이 담긴 면요리를 즐길 수 있습니다.",
        updatedAt: "2026-07-15",
        highlights: ["사바식 면요리", "생육면"],
        tips: ["현지인들이 자주 찾는 로컬 맛집입니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "사바식 면요리", items: [{ name: "대표 메뉴", price: "RM10~40", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 2:30; 화요일: 오전 6:30 ~ 오후 2:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8968363128786653923", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%B4%ED%9E%9D%EB%A6%AC+%EC%BB%A4%ED%94%BC%EC%88%8D+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "유키 바쿠테": {
        photos: ["/images/kota-kinabalu/info/restaurants/yu-kee-bak-kut-teh-kota-kinabalu.jpg"],
        summary: "진한 허브 향이 매력적인 현지식 돼지갈비탕 맛집",
        updatedAt: "2026-07-15",
        highlights: ["깊은 풍미의 약재 수프", "로컬 감성 가득한 식당"],
        tips: ["향신료에 민감하다면 미리 확인하세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "돼지갈비탕·허브수프", items: [{ name: "대표 메뉴", price: "RM20~70", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 2:30~11:00; 화요일: 오후 2:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/YuKeeBahKutTeh", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15821091229642063737", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%A0%ED%82%A4+%EB%B0%94%EC%BF%A0%ED%85%8C+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "신키 바쿠테": {
        photos: ["/images/kota-kinabalu/info/restaurants/sin-kee-bak-kut-teh-kota-kinabalu.jpg"],
        summary: "다양한 중식 반찬과 함께 즐기는 정통 바쿠테 전문점",
        updatedAt: "2026-07-15",
        highlights: ["바쿠테와 잘 어울리는 중식 사이드", "든든하게 즐기는 로컬 식사"],
        tips: ["함께 나오는 밑반찬을 꼭 곁들여 보세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "바쿠테·중식 반찬", items: [{ name: "대표 메뉴", price: "RM20~70", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~9:30; 화요일: 오후 12:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.facebook.com/sinkeebkt", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15410021919781487722", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%ED%82%A4+%EB%B0%94%EC%BF%A0%ED%85%8C+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스리 라타 커리 하우스": {
        photos: ["/images/kota-kinabalu/info/restaurants/sri-latha-curry-house-kota-kinabalu.jpg"],
        summary: "바나나 잎에 담겨 나오는 이색적인 인도 커리 맛집",
        updatedAt: "2026-07-15",
        highlights: ["바나나 리프 플레이팅의 특별한 경험", "다채로운 향신료의 풍미"],
        tips: ["현지 분위기를 제대로 느끼고 싶을 때 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "바나나리프 커리", items: [{ name: "대표 메뉴", price: "RM15~50", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 5:00; 화요일: 오전 6:30 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8630820942963268022", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EB%A6%AC+%EB%9D%BC%ED%83%80+%EC%BB%A4%EB%A6%AC+%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코히누르 노스 인디안": {
        photos: ["/images/kota-kinabalu/info/restaurants/kohinoor-north-indian-restaurant-kota-kinabalu.jpg"],
        summary: "코타키나발루에서 즐기는 정통 북인도 요리의 풍미",
        updatedAt: "2026-07-15",
        highlights: ["깊은 맛의 커리", "갓 구운 따끈한 난", "육즙 가득 탄두리 치킨"],
        tips: ["향신료를 좋아한다면 꼭 들러야 할 곳"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커리·난·탄두리", items: [{ name: "대표 메뉴", price: "RM30~100", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:00, 오후 5:00~11:00; 화요일: 오전 11:30 ~ 오후 2:00, 오후 5:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9852073972033182740", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%ED%9E%88%EB%88%84%EB%A5%B4+%EB%85%B8%EC%8A%A4+%EC%9D%B8%EB%94%94%EC%95%88+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "매드벤 카페": {
        photos: ["/images/kota-kinabalu/info/restaurants/mad-ben-cafe-kota-kinabalu.jpg"],
        summary: "Plaza 333에서 즐기는 여유로운 브런치 타임",
        updatedAt: "2026-07-15",
        highlights: ["다양한 파스타 메뉴", "트렌디한 브런치 플레이트"],
        tips: ["쇼핑 후 가볍게 식사하기 좋은 위치"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "브런치·파스타", items: [{ name: "대표 메뉴", price: "RM25~80", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.facebook.com/madbencafe", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=261192477857603850", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%A4%EB%93%9C%EB%B2%A4+%EC%B9%B4%ED%8E%98+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "비루비루 카페 앤 바": {
        photos: ["/images/kota-kinabalu/info/restaurants/biru-biru-cafe-bar-kota-kinabalu.jpg"],
        summary: "커피부터 칵테일까지 즐길 수 있는 분위기 맛집",
        updatedAt: "2026-07-15",
        highlights: ["감성적인 인테리어", "시원한 칵테일과 커피"],
        tips: ["저녁에는 가볍게 한잔하며 쉬어가기 좋음"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커피·칵테일·간단식", items: [{ name: "대표 메뉴", price: "RM20~80", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00 ~ 오전 12:00; 화요일: 오후 5:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://instagram.com/birubirucafe", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18257685520678361682", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%84%EB%A3%A8%EB%B9%84%EB%A3%A8+%EC%B9%B4%ED%8E%98+%EC%95%A4+%EB%B0%94+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "안중 센자 푸드코트": {
        photos: ["/images/kota-kinabalu/info/restaurants/anjung-senja-kota-kinabalu.jpg"],
        summary: "신선한 해산물과 불맛 나는 사테를 한곳에서 즐길 수 있는 활기찬 로컬 푸드코트",
        updatedAt: "2026-07-15",
        highlights: ["다양한 종류의 해산물 요리", "현지 스타일의 맛있는 사테", "다채로운 로컬 간식"],
        tips: ["저녁 시간대에는 사람이 많으니 조금 일찍 방문하는 것을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물·사테·로컬 간식", items: [{ name: "대표 메뉴", price: "RM10~80", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18093989562983370341", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%88%EC%A4%91+%EC%84%BC%EC%9E%90+%ED%91%B8%EB%93%9C%EC%BD%94%ED%8A%B8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "자시앙 커피숍": {
        photos: ["/images/kota-kinabalu/info/restaurants/kedai-kopi-jia-siang-kota-kinabalu.jpg"],
        summary: "담백하고 깔끔한 국물이 매력적인 사바식 생선 국수 전문점",
        updatedAt: "2026-07-15",
        highlights: ["정통 사바식 면 요리", "시원하고 담백한 생선 국수"],
        tips: ["현지 로컬 분위기를 제대로 느낄 수 있는 편안한 곳이에요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "생선국수·사바식 면", items: [{ name: "대표 메뉴", price: "RM10~40", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오전 2:00; 화요일: 오전 9:00 ~ 오전 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/JiaSiangSangNyukMee/?_rdr", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13562141638734177505", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%90%EC%8B%9C%EC%95%99+%EC%BB%A4%ED%94%BC%EC%88%8D+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "신수란 상육미": {
        photos: ["/images/kota-kinabalu/info/restaurants/sinsuran-sang-nyuk-mee-kota-kinabalu.jpg"],
        summary: "진한 육수와 부드러운 돼지고기가 어우러진 중독성 있는 국수 맛집",
        updatedAt: "2026-07-15",
        highlights: ["깊은 풍미의 돼지고기 국수", "중독성 강한 특제 육수"],
        tips: ["현지인들이 아침이나 점심 식사로 즐겨 찾는 로컬 맛집입니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "돼지고기 국수", items: [{ name: "대표 메뉴", price: "RM10~40", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 4:00; 화요일: 오전 7:00 ~ 오후 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=829440453177410594", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%EC%88%98%EB%9E%80+%EC%83%81%EC%9C%A1%EB%AF%B8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "론드로럭스": {
        photos: ["/images/kota-kinabalu/info/restaurants/laundroluxe-kota-kinabalu.jpg"],
        summary: "코타키나발루에서 여유롭게 즐기는 파스타와 피자 브런치 맛집",
        updatedAt: "2026-07-15",
        highlights: ["다양한 종류의 파스타와 피자를 맛볼 수 있는 곳", "깔끔하고 세련된 분위기의 브런치 레스토랑"],
        tips: ["여유로운 오전 시간을 보내기에 딱 좋은 분위기예요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "파스타·피자·브런치", items: [{ name: "대표 메뉴", price: "RM35~120", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6732985479599603639", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%A0%EB%93%9C%EB%A1%9C%EB%9F%AD%EC%8A%A4+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
