import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "쿠알라오 레스토랑": {
        photos: ["/images/vientiane/info/restaurants/kualao-restaurant-vientiane.jpg"],
        summary: "라오 전통 코스 요리와 함께 화려한 공연을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["라오 전통 코스 요리", "전통 공연 관람"],
        tips: ["공연 시간을 미리 확인하고 방문하세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "라오 전통 코스와 공연 분위기", items: [{ name: "대표 메뉴", price: "₭150k~400k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 6:00~10:00; 화요일: 오전 11:00 ~ 오후 2:00, 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.kualaorestaurant.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8963706482522292664", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BF%A0%EC%95%8C%EB%9D%BC%EC%98%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "컵자이더": {
        photos: ["/images/vientiane/info/restaurants/khop-chai-deu-vientiane.jpg"],
        summary: "여행자 거리의 활기찬 분위기 속에서 라오 음식과 맥주를 즐기기 좋습니다.",
        updatedAt: "2026-07-21",
        highlights: ["라오 현지 음식", "시원한 맥주"],
        tips: ["여행자 거리 근처에 있어 접근성이 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "라오 음식과 맥주, 여행자 거리 분위기", items: [{ name: "대표 메뉴", price: "₭80k~250k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:30; 화요일: 오전 10:00 ~ 오후 11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.inthira.com/restaurants.php?rid=3", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4360561161550391815", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BB%B5%EC%9E%90%EC%9D%B4%EB%8D%94+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "PVO 베트남 음식점": {
        photos: ["/images/vientiane/info/restaurants/pvo-vietnamese-food-vientiane.jpg"],
        summary: "반미와 쌀국수가 맛있는 비엔티안의 베트남 음식 전문점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["바삭한 반미 샌드위치", "깊은 맛의 쌀국수"],
        tips: ["현지 분위기를 느끼며 식사하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "반미·쌀국수", items: [{ name: "대표 메뉴", price: "₭40k~150k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 3:00; 화요일: 오전 6:00 ~ 오후 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/PVOrestaurant", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2432521668707044696", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=PVO+%EB%B2%A0%ED%8A%B8%EB%82%A8+%EC%9D%8C%EC%8B%9D%EC%A0%90+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "노이스 프루트 헤븐": {
        photos: ["/images/vientiane/info/restaurants/noy-s-fruit-heaven-vientiane.jpg"],
        summary: "신선한 스무디와 과일 브런치를 즐길 수 있는 건강한 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 생과일 스무디", "상큼한 과일 브런치 메뉴"],
        tips: ["아침이나 점심 식사 대용으로 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스무디와 과일 브런치", items: [{ name: "대표 메뉴", price: "₭40k~120k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 9:30; 화요일: 오전 9:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://noysfruitheaven.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4063786192438915477", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%B8%EC%9D%B4%EC%8A%A4+%ED%94%84%EB%A3%A8%ED%8A%B8+%ED%97%A4%EB%B8%90+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "조마 베이커리 카페": {
        photos: ["/images/vientiane/info/restaurants/joma-bakery-cafe-vientiane.jpg"],
        summary: "신선한 베이커리와 커피, 샌드위치를 즐길 수 있는 비엔티안의 인기 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 베이커리와 샌드위치", "맛있는 커피 메뉴"],
        tips: ["여유로운 브런치를 위해 오전 방문을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피·샌드위치·베이커리", items: [{ name: "대표 메뉴", price: "₭50k~180k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 9:00; 화요일: 오전 7:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14470567096808799997", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A1%B0%EB%A7%88+%EB%B2%A0%EC%9D%B4%EC%BB%A4%EB%A6%AC+%EC%B9%B4%ED%8E%98+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "르 바네통": {
        photos: ["/images/vientiane/info/restaurants/le-banneton-vientiane.jpg"],
        summary: "크루아상과 브런치 메뉴가 유명한 정통 스타일의 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["바삭하고 맛있는 크루아상", "다양한 브런치 메뉴"],
        tips: ["인기 있는 메뉴는 조기에 품절될 수 있으니 서두르세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "크루아상과 브런치", items: [{ name: "대표 메뉴", price: "₭60k~200k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 6:30; 화요일: 오전 7:00 ~ 오후 6:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2811274394330403180", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A5%B4+%EB%B0%94%EB%84%A4%ED%86%B5+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "라 시그니처 레스토랑": {
        photos: ["/images/vientiane/info/restaurants/la-signature-restaurant-vientiane.jpg"],
        summary: "비엔티안에서 즐길 수 있는 고급스러운 프렌치 다이닝 전문점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["고급스러운 프렌치 코스 요리", "홈메이드 스타일의 정성스러운 음식"],
        tips: ["특별한 기념일에 방문하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "고급 프렌치 다이닝", items: [{ name: "대표 메뉴", price: "₭250k~700k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 6:00; 화요일: 오전 11:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8134523066351823511", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC+%EC%8B%9C%EA%B7%B8%EB%8B%88%EC%B2%98+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "라드레스 드 티네": {
        photos: ["/images/vientiane/info/restaurants/l-adresse-de-tinay-vientiane.jpg"],
        summary: "프렌치 홈스타일 메뉴를 제공하는 아늑한 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["편안한 분위기의 프렌치 홈스타일 식사", "현지 느낌이 물씬 나는 위치"],
        tips: ["여유로운 점심 식사를 즐기기에 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "프렌치 홈스타일 메뉴", items: [{ name: "대표 메뉴", price: "₭150k~400k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8806315176964351343", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%93%9C%EB%A0%88%EC%8A%A4+%EB%93%9C+%ED%8B%B0%EB%84%A4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "타이슨 키친": {
        photos: ["/images/vientiane/info/restaurants/tyson-kitchen-vientiane.jpg"],
        summary: "버거와 캐주얼한 메뉴를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["맛있는 버거", "캐주얼한 분위기"],
        tips: ["가벼운 식사를 원할 때 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "버거와 캐주얼 메뉴", items: [{ name: "대표 메뉴", price: "₭80k~250k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오후 12:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.facebook.com/tysonkitchen", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16757424414684035055", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%9D%B4%EC%8A%A8+%ED%82%A4%EC%B9%9C+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "피멘톤 비엔티안": {
        photos: ["/images/vientiane/info/restaurants/pimenton-vientiane.jpg"],
        summary: "스테이크와 타파스를 전문으로 하는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["품격 있는 스테이크", "다양한 타파스 메뉴"],
        tips: ["특별한 저녁 식사 장소로 좋습니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스테이크와 타파스", items: [{ name: "대표 메뉴", price: "₭150k~450k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 5:00~10:00; 화요일: 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7886008616079215423", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EB%A9%98%ED%86%A4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "아이카포네 비엔티안": {
        photos: ["/images/vientiane/info/restaurants/aicapone-vientiane.jpg"],
        summary: "맛있는 피자와 파스타를 즐길 수 있는 비엔티안의 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 피자", "정통 파스타 요리"],
        tips: ["피자와 함께 곁들일 음료를 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "피자와 파스타", items: [{ name: "대표 메뉴", price: "₭100k~300k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11887517192927127118", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9D%B4%EC%B9%B4%ED%8F%AC%EB%84%A4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "비아비아 비엔티안": {
        photos: ["/images/vientiane/info/restaurants/via-via-vientiane.jpg"],
        summary: "여행객들을 위한 다양한 메뉴와 피자를 제공하는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["여행자 맞춤형 메뉴", "맛있는 피자 요리"],
        tips: ["다양한 메뉴 구성을 확인해보세요"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "피자와 여행자 메뉴", items: [{ name: "대표 메뉴", price: "₭80k~250k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6251720554542681625", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%84%EC%95%84%EB%B9%84%EC%95%84+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "커먼 그라운즈 카페": {
        photos: ["/images/vientiane/info/restaurants/common-grounds-cafe-vientiane.jpg"],
        summary: "비엔티안에서 커피와 브런치를 즐기기에 완벽한 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 베이커리와 커피", "여유로운 브런치 메뉴"],
        tips: ["오전 시간대에 방문하여 여유를 즐겨보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피와 브런치", items: [{ name: "대표 메뉴", price: "₭50k~180k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 8:00; 화요일: 오전 7:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.commongroundslaos.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=892565139889913195", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BB%A4%EB%A8%BC+%EA%B7%B8%EB%9D%BC%EC%9A%B4%EC%A6%88+%EC%B9%B4%ED%8E%98+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "쿵스 카페 라오": {
        photos: ["/images/vientiane/info/restaurants/kung-s-cafe-lao-vientiane.jpg"],
        summary: "라오식 아침 식사와 간단한 식사를 맛볼 수 있는 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["현지 스타일의 아침 식사", "가벼운 식사 메뉴"],
        tips: ["현지 분위기를 느끼며 가볍게 한 끼 해결하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "라오식 아침·간단 식사", items: [{ name: "대표 메뉴", price: "₭40k~150k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 4:00; 화요일: 오전 7:00 ~ 오후 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14525779197342821440", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BF%B5%EC%8A%A4+%EC%B9%B4%ED%8E%98+%EB%9D%BC%EC%98%A4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "도이 카 노이": {
        photos: ["/images/vientiane/info/restaurants/doi-ka-noi-vientiane.jpg"],
        summary: "계절 재료를 활용하여 정성스럽게 만든 라오스 전통 요리를 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 계절 식재료 사용", "정통 라오스 요리 전문"],
        tips: ["현지 분위기를 느끼기에 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "계절 재료 라오 요리", items: [{ name: "대표 메뉴", price: "₭100k~300k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4563257025702731664", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%9D%B4+%EC%B9%B4+%EB%85%B8%EC%9D%B4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "탱고 펍 바 레스토랑": {
        photos: ["/images/vientiane/info/restaurants/tango-pub-bar-restaurant-vientiane.jpg"],
        summary: "맛있는 저녁 식사와 함께 다양한 음료를 즐길 수 있는 활기찬 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 메뉴의 저녁 식사", "즐거운 분위기의 음료 서비스"],
        tips: ["저녁 시간 방문을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "저녁 식사와 음료", items: [{ name: "대표 메뉴", price: "₭80k~250k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13593834438038274002", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%B1%EA%B3%A0+%ED%8E%8D+%EB%B0%94+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "하드락 카페 비엔티안": {
        photos: ["/images/vientiane/info/restaurants/hard-rock-cafe-vientiane.jpg"],
        summary: "라이브 음악과 함께 버거와 퀘사디아를 즐길 수 있는 활기찬 분위기의 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["버거 및 퀘사디아 맛집", "라이브 공연 분위기"],
        tips: ["저녁 시간대 라이브 공연을 확인하고 방문하세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "버거·퀘사디아·라이브 분위기", items: [{ name: "대표 메뉴", price: "₭120k~350k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://cafe.hardrock.com/vientiane/#utm_source=Google&utm_medium=Yext&utm_campaign=Listings", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15539563173641504287", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%93%9C%EB%9D%BD+%EC%B9%B4%ED%8E%98+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "카페 아마존 비엔티안": {
        photos: ["/images/vientiane/info/restaurants/cafe-amazon-vientiane-mekong.jpg"],
        summary: "시원한 아이스커피를 마시며 편안하게 휴식을 취하기 좋은 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["가성비 좋은 아이스커피", "편안한 휴식 공간"],
        tips: ["더운 날씨에 갈증을 해소하기 위해 방문하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "아이스커피와 휴식", items: [{ name: "대표 메뉴", price: "₭30k~120k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 8:00; 화요일: 오전 6:30 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13319206750242268532", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%98+%EC%95%84%EB%A7%88%EC%A1%B4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "레이스 그릴 비엔티안": {
        photos: ["/images/vientiane/info/restaurants/ray-s-grille-vientiane.jpg"],
        summary: "버거와 다양한 그릴 요리를 전문으로 하는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["육즙 가득한 버거", "다채로운 그릴 메뉴"],
        tips: ["저녁 시간대에는 미리 예약하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "버거와 그릴 메뉴", items: [{ name: "대표 메뉴", price: "₭80k~250k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 3:30~10:00; 화요일: 오후 3:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/raysgrilleLaopdr", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5239509370154492440", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%88%EC%9D%B4%EC%8A%A4+%EA%B7%B8%EB%A6%B4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "스티키 핑거스 비엔티안": {
        photos: ["/images/vientiane/info/restaurants/sticky-fingers-vientiane.jpg"],
        summary: "여유로운 브런치와 서양식 식사를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["맛있는 브런치 메뉴", "분위기 좋은 서양식 요리"],
        tips: ["느긋한 아침 식사를 위해 오전 방문을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "브런치와 서양식 메뉴", items: [{ name: "대표 메뉴", price: "₭80k~250k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18442521999309419409", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%8B%B0%ED%82%A4+%ED%95%91%EA%B1%B0%EC%8A%A4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
