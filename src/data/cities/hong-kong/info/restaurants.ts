import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "팀호완 삼수이포": {
        photos: ["/images/hong-kong/info/restaurants/tim-ho-wan-sham-shui-po-hong-kong.jpg"],
        summary: "가성비 있게 즐기는 미슐랭급 정통 딤섬 맛집",
        updatedAt: "2026-07-14",
        highlights: ["입안에서 녹는 차슈바오", "다양한 종류의 클래식 딤섬"],
        tips: ["삼수이포 본점은 웨이팅이 있을 수 있으니 여유 있게 방문하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "차슈바오·딤섬", items: [{ name: "대표 메뉴", price: "HK$80~180", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.timhowan.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4540539753907016659", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%80%ED%98%B8%EC%99%84+%EC%82%BC%EC%88%98%EC%9D%B4%ED%8F%AC+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "얏록 로스트 구스": {
        photos: ["/images/hong-kong/info/restaurants/yat-lok-restaurant-hong-kong.jpg"],
        summary: "서구룡역에서 만나는 정통 거위구이와 완탕면",
        updatedAt: "2026-07-14",
        highlights: ["겉바속촉의 정석 거위구이", "진한 육수의 완탕면"],
        tips: ["서구룡역 내 위치해 있어 기차 이용 전후에 들르기 좋습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "거위구이·완탕면", items: [{ name: "대표 메뉴", price: "HK$80~200", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 8:30; 화요일: 오전 11:00 ~ 오후 8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5874092399644390328", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%96%8F%EB%A1%9D+%EB%A1%9C%EC%8A%A4%ED%8A%B8+%EA%B5%AC%EC%8A%A4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "캄스 로스트 구스": {
        photos: ["/images/hong-kong/info/restaurants/kam-s-roast-goose-hong-kong.jpg"],
        summary: "육즙 가득한 풍미를 자랑하는 홍콩 대표 로스트 구스 전문점",
        updatedAt: "2026-07-14",
        highlights: ["풍미 깊은 로스트 구스", "달콤 짭짤한 차슈"],
        tips: ["웨이팅이 상당하므로 식사 피크 타임을 피해서 방문하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로스트 구스·차슈", items: [{ name: "대표 메뉴", price: "HK$100~250", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 9:30; 화요일: 오전 11:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.krg.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10755535674325808389", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BA%84%EC%8A%A4+%EB%A1%9C%EC%8A%A4%ED%8A%B8+%EA%B5%AC%EC%8A%A4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "막스 누들 웰링턴 스트리트": {
        photos: ["/images/hong-kong/info/restaurants/mak-s-noodle-wellington-street-hong-kong.jpg"],
        summary: "센트럴에서 만나는 탱글한 새우 완탕면의 정석.",
        updatedAt: "2026-07-14",
        highlights: ["탱글탱글한 식감의 새우 완탕", "센트럴 중심가 위치로 접근성 최고"],
        tips: ["점심 피크 타임은 웨이팅이 있을 수 있어요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "새우 완탕면", items: [{ name: "대표 메뉴", price: "HK$60~120", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.maksnoodle.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3092251090469102902", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%89%EC%8A%A4+%EB%88%84%EB%93%A4+%EC%9B%B0%EB%A7%81%ED%84%B4+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "침차이키 누들": {
        photos: ["/images/hong-kong/info/restaurants/tsim-chai-kee-noodle-hong-kong.jpg"],
        summary: "미슐랭 가이드가 인정한 홍콩 로컬 완탕면 맛집.",
        updatedAt: "2026-07-14",
        highlights: ["큼직한 새우가 듬뿍 들어간 완탕", "부담 없는 가격의 가성비 메뉴"],
        tips: ["어묵면을 함께 주문해 풍성하게 즐겨보세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "완탕면·어묵면", items: [{ name: "대표 메뉴", price: "HK$50~120", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:30 ~ 오후 8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2849518088041902230", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%A8%EC%B0%A8%EC%9D%B4%ED%82%A4+%EB%88%84%EB%93%A4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오스트레일리아 데어리 컴퍼니": {
        photos: ["/images/hong-kong/info/restaurants/australia-dairy-company-hong-kong.jpg"],
        summary: "홍콩 여행 필수 코스, 부드러운 스크램블 에그와 밀크푸딩의 조화.",
        updatedAt: "2026-07-14",
        highlights: ["입안에서 녹는 부드러운 스크램블 에그", "달콤하고 진한 클래식 밀크푸딩"],
        tips: ["회전율은 빠르지만 대기 줄이 길 수 있으니 서두르세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스크램블 에그·밀크푸딩", items: [{ name: "대표 메뉴", price: "HK$50~120", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 10:00; 화요일: 오전 7:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://australia-dairy-company.shop/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18038164721409490895", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%BC%EB%A6%AC%EC%95%84+%EB%8D%B0%EC%96%B4%EB%A6%AC+%EC%BB%B4%ED%8D%BC%EB%8B%88+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "란퐁유엔 센트럴": {
        photos: ["/images/hong-kong/info/restaurants/lan-fong-yuen-central-hong-kong.jpg"],
        summary: "란퐁유엔 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["실크스타킹 밀크티·토스트", "평점 3.8", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "실크스타킹 밀크티·토스트", items: [{ name: "대표 메뉴", price: "HK$40~120", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:30 ~ 오후 6:00; 화요일: 오전 10:30 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4442802535806592916", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%80%ED%90%81%EC%9C%A0%EC%97%94+%EC%84%BC%ED%8A%B8%EB%9F%B4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "상키 콘지": {
        photos: ["/images/hong-kong/info/restaurants/sang-kee-congee-hong-kong.jpg"],
        summary: "상기 콘지숍 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["광둥식 콘지", "평점 4.2", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "광둥식 콘지", items: [{ name: "대표 메뉴", price: "HK$60~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 8:30; 화요일: 오전 6:30 ~ 오후 8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7674710983751182597", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%81%ED%82%A4+%EC%BD%98%EC%A7%80+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호흥키 코즈웨이베이": {
        photos: ["/images/hong-kong/info/restaurants/ho-hung-kee-causeway-bay-hong-kong.jpg"],
        summary: "호흥키 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["완탕면·죽", "평점 3.9", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "완탕면·죽", items: [{ name: "대표 메뉴", price: "HK$80~180", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/hohungkee/?locale2=zh_HK", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1363387194553389244", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%9D%A5%ED%82%A4+%EC%BD%94%EC%A6%88%EC%9B%A8%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "원 딤섬": {
        photos: ["/images/hong-kong/info/restaurants/one-dim-sum-hong-kong.jpg"],
        summary: "센트럴에서 육즙 가득한 새우하가우와 샤오마이를 맛볼 수 있는 곳",
        updatedAt: "2026-07-14",
        highlights: ["새우하가우", "샤오마이"],
        tips: ["인기가 많아 피크 타임에는 웨이팅이 있을 수 있어요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "새우하가우·샤오마이", items: [{ name: "대표 메뉴", price: "HK$80~180", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://onedimsum.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16521029323640915966", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9B%90+%EB%94%A4%EC%84%AC+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "딤딤섬 몽콕": {
        photos: ["/images/hong-kong/info/restaurants/dimdimsum-mong-kok-hong-kong.jpg"],
        summary: "창펀과 하가우가 일품인 몽콕의 가성비 넘치는 딤섬 맛집",
        updatedAt: "2026-07-14",
        highlights: ["창펀", "하가우"],
        tips: ["항상 북적이는 곳이니 오픈 시간에 맞춰 방문하는 것을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "창펀·하가우", items: [{ name: "대표 메뉴", price: "HK$90~220", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오전 12:00; 화요일: 오전 10:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11339287955734934584", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%A4%EB%94%A4%EC%84%AC+%EB%AA%BD%EC%BD%95+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "모트 32": {
        photos: ["/images/hong-kong/info/restaurants/mott-32-hong-kong.jpg"],
        summary: "모트32 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["북경오리·딤섬", "평점 4.4", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "북경오리·딤섬", items: [{ name: "대표 메뉴", price: "HK$500~1200", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:30 ~ 오전 12:00; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:30 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mott32.com/hong-kong/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15173406229272732702", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%ED%8A%B8+32+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "두델스 홍콩": {
        photos: ["/images/hong-kong/info/restaurants/duddell-s-hong-kong.jpg"],
        summary: "예술적인 분위기 속에서 즐기는 품격 있는 딤섬과 광둥 요리",
        updatedAt: "2026-07-14",
        highlights: ["갤러리에 온 듯한 고급스러운 인테리어", "정갈하게 나오는 프리미엄 딤섬 메뉴"],
        tips: ["분위기가 좋아 기념일 데이트 코스로 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "딤섬·광둥 코스", items: [{ name: "대표 메뉴", price: "HK$500~1200", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~11:00; 화요일: 오후 12:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.duddells.co/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9177132888106571927", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%91%90%EB%8D%B8%EC%8A%A4+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "룽킹힌": {
        photos: ["/images/hong-kong/info/restaurants/lung-king-heen-hong-kong.jpg"],
        summary: "미슐랭 스타의 품격이 느껴지는 환상적인 해산물과 딤섬 맛집",
        updatedAt: "2026-07-14",
        highlights: ["최고급 식재료로 완성한 정통 광둥 요리", "전망 좋은 곳에서 즐기는 럭셔리 다이닝"],
        tips: ["인기가 워낙 많아 예약은 필수 중의 필수예요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물·딤섬", items: [{ name: "대표 메뉴", price: "HK$800~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~2:30, 오후 6:00~9:00; 화요일: 오후 12:00~2:30, 오후 6:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13204840369633368453", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A3%BD%ED%82%B9%ED%9E%8C+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "야드버드 홍콩": {
        photos: ["/images/hong-kong/info/restaurants/yardbird-hong-kong.jpg"],
        summary: "불맛 가득한 닭꼬치와 시원한 맥주가 생각날 때 찾는 힙한 이자카야",
        updatedAt: "2026-07-14",
        highlights: ["숯불 향이 살아있는 다양한 종류의 야키토리", "활기차고 트렌디한 분위기"],
        tips: ["웨이팅 맛집이니 조금 서둘러 방문하는 걸 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "닭꼬치·이자카야", items: [{ name: "대표 메뉴", price: "HK$300~700", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오후 6:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.yardbirdrestaurant.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6475533875917067237", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%BC%EB%93%9C%EB%B2%84%EB%93%9C+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리틀 바오": {
        photos: ["/images/hong-kong/info/restaurants/little-bao-hong-kong.jpg"],
        summary: "리틀 바오 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["바오버거·퓨전 플레이트", "평점 4.5", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "바오버거·퓨전 플레이트", items: [{ name: "대표 메뉴", price: "HK$180~400", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~4:00, 오후 6:00~10:00; 화요일: 오후 12:00~4:00, 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.little-bao.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7411657329219060067", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%ED%8B%80+%EB%B0%94%EC%98%A4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "융키 레스토랑": {
        photos: ["/images/hong-kong/info/restaurants/yung-kee-restaurant-hong-kong.jpg"],
        summary: "Yung’s Tangerine Peel Roast Goose Restaurant 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["거위구이·광둥 요리", "평점 4.3", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "거위구이·광둥 요리", items: [{ name: "대표 메뉴", price: "HK$200~600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오전 12:00; 화요일: 오전 7:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8463625131300701199", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%B5%ED%82%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "타이청 베이커리 센트럴": {
        photos: ["/images/hong-kong/info/restaurants/tai-cheong-bakery-central-hong-kong.jpg"],
        summary: "타이청 베이커리 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["에그타르트", "평점 3.9", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "에그타르트", items: [{ name: "대표 메뉴", price: "HK$20~80", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:30 ~ 오후 7:30; 화요일: 오전 9:30 ~ 오후 7:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.taoheung.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2510587266977636889", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%9D%B4%EC%B2%AD+%EB%B2%A0%EC%9D%B4%EC%BB%A4%EB%A6%AC+%EC%84%BC%ED%8A%B8%EB%9F%B4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "베이크하우스 완차이": {
        photos: ["/images/hong-kong/info/restaurants/bakehouse-wan-chai-hong-kong.jpg"],
        summary: "겉바속촉의 정석, 인생 에그타르트를 만날 수 있는 곳",
        updatedAt: "2026-07-14",
        highlights: ["갓 구운 에그타르트", "풍미 가득한 사워도우"],
        tips: ["인기 메뉴는 품절이 빠르니 서두르세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "에그타르트·사워도우", items: [{ name: "대표 메뉴", price: "HK$40~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 9:30; 화요일: 오전 7:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4787918885420153914", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%EC%9D%B4%ED%81%AC%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%99%84%EC%B0%A8%EC%9D%B4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "베이크하우스 소호": {
        photos: ["/images/hong-kong/info/restaurants/bakehouse-soho-hong-kong.jpg"],
        summary: "소호 거리에서 즐기는 여유로운 브런치와 에그타르트 타임",
        updatedAt: "2026-07-14",
        highlights: ["에그타르트 맛집", "감성 넘치는 브런치 메뉴"],
        tips: ["소호 산책 중 가볍게 들러 간식으로 추천합니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "에그타르트·브런치", items: [{ name: "대표 메뉴", price: "HK$50~180", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 9:00; 화요일: 오전 8:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.bakehouse.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9622753647468040163", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%EC%9D%B4%ED%81%AC%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%86%8C%ED%98%B8+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 체어맨": {
        photos: ["/images/hong-kong/info/restaurants/the-chairman-hong-kong.jpg"],
        summary: "홍콩 미식의 정점을 경험할 수 있는 프리미엄 광둥 요리 레스토랑",
        updatedAt: "2026-07-14",
        highlights: ["제철 식재료를 활용한 고급 광둥 요리", "예약 필수 맛집"],
        tips: ["인기가 매우 높으니 사전 예약은 필수입니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "제철 광둥 요리", items: [{ name: "대표 메뉴", price: "HK$800~1800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 6:00~11:00; 화요일: 오후 12:00~3:00, 오후 6:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.thechairmangroup.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9448908868861483999", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%B2%B4%EC%96%B4%EB%A7%A8+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "린흥 티하우스": {
        photos: ["/images/hong-kong/info/restaurants/lin-heung-tea-house-hong-kong.jpg"],
        summary: "린흥 티하우스 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["카트 딤섬·차", "평점 3.8", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "카트 딤섬·차", items: [{ name: "대표 메뉴", price: "HK$100~250", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오전 12:00; 화요일: 오전 6:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/linheunglau", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4173032956146084422", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%B0%ED%9D%A5+%ED%8B%B0%ED%95%98%EC%9A%B0%EC%8A%A4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "조이힝 로스트 미트": {
        photos: ["/images/hong-kong/info/restaurants/joy-hing-roasted-meat-hong-kong.jpg"],
        summary: "조이힝 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["차슈·로스트 포크", "평점 3.8", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "차슈·로스트 포크", items: [{ name: "대표 메뉴", price: "HK$60~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/joyhinghk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17016054847556962134", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A1%B0%EC%9D%B4%ED%9E%9D+%EB%A1%9C%EC%8A%A4%ED%8A%B8+%EB%AF%B8%ED%8A%B8+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마미 팬케이크": {
        photos: ["/images/hong-kong/info/restaurants/mammy-pancake-hong-kong.jpg"],
        summary: "Mammy Pancake (Mong Kok) 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["에그와플", "평점 4.6", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "에그와플", items: [{ name: "대표 메뉴", price: "HK$25~70", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~10:30; 화요일: 오후 12:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mammypancake.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10263238032520450076", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%AF%B8+%ED%8C%AC%EC%BC%80%EC%9D%B4%ED%81%AC+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오디스 푸디스": {
        photos: ["/images/hong-kong/info/restaurants/oddies-foodies-hong-kong.jpg"],
        summary: "ICC 전망과 함께 즐기는 달콤한 젤라토와 에그와플 맛집",
        updatedAt: "2026-07-14",
        highlights: ["뷰 맛집 ICC 위치", "쫀득한 식감의 젤라토", "겉바속촉 에그와플"],
        tips: ["디저트 타임에 방문해 멋진 전망과 함께 즐기세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "젤라토·에그와플", items: [{ name: "대표 메뉴", price: "HK$50~120", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~3:30, 오후 6:00~10:00; 화요일: 오후 12:00~3:30, 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.jcgroup.hk/restaurants/odyssee/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17013953991227714325", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%94%94%EC%8A%A4+%ED%91%B8%EB%94%94%EC%8A%A4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "막만키 누들샵": {
        photos: ["/images/hong-kong/info/restaurants/mak-man-kee-noodle-shop-hong-kong.jpg"],
        summary: "현지인들도 줄 서서 먹는 탱글탱글한 새우 완탕면 전문점",
        updatedAt: "2026-07-14",
        highlights: ["통통한 새우가 가득한 완탕", "진하고 깊은 국물 맛", "가성비 최고의 로컬 맛집"],
        tips: ["피크 타임에는 웨이팅이 있을 수 있으니 참고하세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "새우 완탕면", items: [{ name: "대표 메뉴", price: "HK$60~130", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00 ~ 오전 12:30; 화요일: 오후 12:00 ~ 오전 12:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.mmk.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=223003035127073132", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%89%EB%A7%8C%ED%82%A4+%EB%88%84%EB%93%A4%EC%83%B5+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스프링문 페닌슐라": {
        photos: ["/images/hong-kong/info/restaurants/spring-moon-hong-kong.jpg"],
        summary: "페닌슐라 호텔에서 즐기는 품격 있는 광둥식 코스 요리와 딤섬",
        updatedAt: "2026-07-14",
        highlights: ["고급스러운 광둥 요리", "정갈하고 깔끔한 딤섬 메뉴", "특별한 날을 위한 완벽한 분위기"],
        tips: ["중요한 식사라면 사전 예약을 권장합니다"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "딤섬·광둥 코스", items: [{ name: "대표 메뉴", price: "HK$500~1200", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 6:00~11:00; 화요일: 오전 11:30 ~ 오후 2:30, 오후 6:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11516205368040196448", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%94%84%EB%A7%81%EB%AC%B8+%ED%8E%98%EB%8B%8C%EC%8A%90%EB%9D%BC+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "포럼 레스토랑": {
        photos: ["/images/hong-kong/info/restaurants/forum-restaurant-hong-kong.jpg"],
        summary: "고급스러운 분위기에서 즐기는 정통 광둥식 아와비 요리 전문점",
        updatedAt: "2026-07-14",
        highlights: ["부드러운 전복 요리", "품격 있는 광둥식 코스"],
        tips: ["특별한 날 기념일 식사로 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "아와비·광둥 요리", items: [{ name: "대표 메뉴", price: "HK$600~1500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 6:00~11:00; 화요일: 오전 11:30 ~ 오후 2:30, 오후 6:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.forumrestaurant1977.com/tc/index.php", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1944223090707252440", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%EB%9F%BC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "윙 레스토랑": {
        photos: ["/images/hong-kong/info/restaurants/wing-restaurant-hong-kong.jpg"],
        summary: "세련된 감각으로 재해석한 트렌디한 현대 중식 코스 요리",
        updatedAt: "2026-07-14",
        highlights: ["감각적인 플레이팅", "창의적인 중식 메뉴"],
        tips: ["센트럴 야경과 함께 즐기기 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "현대 중식 코스", items: [{ name: "대표 메뉴", price: "HK$1000~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 6:00 ~ 오전 12:00; 화요일: 오후 6:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.wingrestaurant.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6658928834558820881", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%99+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "만와 만다린 오리엔탈": {
        photos: ["/images/hong-kong/info/restaurants/man-wah-mandarin-oriental-hong-kong.jpg"],
        summary: "만다린 오리엔탈 호텔에서 맛보는 환상적인 딤섬과 신선한 해산물",
        updatedAt: "2026-07-14",
        highlights: ["정통 딤섬의 진수", "최고급 해산물 요리"],
        tips: ["예약은 필수, 창가 자리를 노려보세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "딤섬·해산물", items: [{ name: "대표 메뉴", price: "HK$600~1500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.mandarinoriental.com/en/hong-kong/victoria-harbour/dine/man-wah?src=loc.yext.mohkg.ggl", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=998974736157461343", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%EC%99%80+%EB%A7%8C%EB%8B%A4%EB%A6%B0+%EC%98%A4%EB%A6%AC%EC%97%94%ED%83%88+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "몽콕 야시장": {
        photos: ["/images/hong-kong/info/restaurants/mong-kok-night-market.jpg"],
        summary: "다양한 로컬 간식과 쇼핑을 동시에 즐길 수 있는 홍콩 대표 야시장",
        updatedAt: "2026-07-23",
        highlights: ["화려한 홍콩 스타일의 길거리 음식 탐방", "저렴하고 다양한 기념품 쇼핑", "현지 분위기가 물씬 풍기는 활기찬 밤거리"],
        tips: ["인기 있는 간식은 대기 줄이 길 수 있으니 여유 있게 방문하세요. 현금 결제가 필요한 경우가 많으니 잔돈을 준비하는 것이 좋습니다."],
        reservation: { required: false, method: "피크타임 방문 전 현지 상황 확인 권장" },
        menu: { signature: "계란 와플(Gai Dan Jai), 어묵 꼬치, 커리 피쉬볼 등 홍콩 전통 길거리 간식", items: [{ name: "대표 먹거리", price: "HK$30~120", note: "메뉴와 가격은 현지 상황에 따라 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "현지 결제수단 확인"],
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=12672619749188803694", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=12672619749188803694", type: "guide", description: "지도에서 위치 보기" }]
    }
};

export default info;
