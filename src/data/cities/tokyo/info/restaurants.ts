import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "호텔,리조트 조식": {
        photos: ["/images/tokyo/info/restaurants/place.jpg"],
        summary: "도쿄 스테이션 호텔에서 즐기는 품격 있는 조식",
        updatedAt: "2026-07-14",
        highlights: ["도쿄역 바로 옆 위치", "고급스러운 분위기"],
        tips: ["숙소 예약 시 포함 여부 확인 필수"],
        warnings: [],
        menu: {
            signature: "숙소 조식",
            items: [{ name: "숙소 조식", price: "숙소 요금 포함/별도" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 6:30~11:00; 화요일: 오전 6:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tokyostationhotel.jp/restaurants/atrium/?utm_source=google&utm_medium=knowledgepanel&utm_campaign=atrium", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1883412725715448345", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94%2C%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%A1%B0%EC%8B%9D+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "로쿠린샤 도쿄역점": {
        photos: ["/images/tokyo/info/restaurants/place-2.jpg"],
        summary: "도쿄 라멘 스트리트의 대표 츠케멘 맛집",
        updatedAt: "2026-07-14",
        highlights: ["진한 국물의 츠케멘", "도쿄역 지하 위치"],
        tips: ["도쿄역 에키나카 내에 있어 접근성 좋음"],
        warnings: ["웨이팅이 길 수 있으니 시간 여유를 둘 것"],
        menu: {
            signature: "츠케멘",
            items: [{ name: "츠케멘", price: "¥1,000~1,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 7:30~9:45, 오전 10:00 ~ 오후 11:00; 화요일: 오전 7:30~9:45, 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://rokurinsha.com/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11140097630059971228", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EC%BF%A0%EB%A6%B0%EC%83%A4+%EB%8F%84%EC%BF%84%EC%97%AD%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "이치란 시부야점": {
        photos: ["/images/tokyo/info/restaurants/place-3.jpg"],
        summary: "혼밥하기 최적화된 돈코츠 라멘 전문점",
        updatedAt: "2026-07-14",
        highlights: ["커스텀 레시피 가능", "24시간 운영"],
        tips: ["시부야 중심가에 있어 접근성 최고"],
        warnings: ["피크 타임에는 대기 발생 가능"],
        menu: {
            signature: "돈코츠 라멘",
            items: [{ name: "돈코츠 라멘", price: "¥1,000~1,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ichiran.com/shop/tokyo/shibuya/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1092125928485198446", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%B9%98%EB%9E%80+%EC%8B%9C%EB%B6%80%EC%95%BC%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "우오베이 시부야 도겐자카점": {
        photos: ["/images/tokyo/info/restaurants/place-4.jpg"],
        summary: "가성비 좋게 즐기는 고속 레일 초밥 전문점",
        updatedAt: "2026-07-14",
        highlights: ["빠르게 배달되는 고속 레일 시스템", "부담 없는 가격대의 다양한 메뉴"],
        tips: ["태블릿을 이용해 간편하게 주문 가능", "웨이팅이 있을 수 있으니 여유 있게 방문하세요"],
        warnings: ["인기 맛집이라 피크 타임에는 대기가 발생할 수 있습니다"],
        menu: {
            signature: "고속 레일 초밥",
            items: [{ name: "고속 레일 초밥", price: "¥1,500~3,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.uobei.info/?utm_source=gmb&utm_medium=referral&utm_campaign=map&utm_content=U312", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5886746596086835007", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EC%98%A4%EB%B2%A0%EC%9D%B4+%EC%8B%9C%EB%B6%80%EC%95%BC+%EB%8F%84%EA%B2%90%EC%9E%90%EC%B9%B4%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "규카츠 모토무라 신주쿠 미나미구치점": {
        photos: ["/images/tokyo/info/restaurants/place-5.jpg"],
        summary: "신주쿠에서 즐기는 부드러운 소고기 카츠 전문점",
        updatedAt: "2026-07-14",
        highlights: ["입안에서 녹는 부드러운 규카츠", "개인 화로에 직접 구워 먹는 재미"],
        tips: ["웨이팅이 길 수 있으니 식사 시간 외 방문 추천", "가격대는 약 1,500~2,500엔 사이"],
        warnings: ["인기 맛집이라 대기 시간이 발생할 수 있음"],
        menu: {
            signature: "소고기 카츠",
            items: [{ name: "소고기 카츠", price: "¥1,500~2,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.gyukatsu-motomura.com/store/Shinjuku-South_Exit?utm_source=google&utm_medium=GBP_shinjuku-south", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10259173076433349501", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%9C%EC%B9%B4%EC%B8%A0+%EB%AA%A8%ED%86%A0%EB%AC%B4%EB%9D%BC+%EC%8B%A0%EC%A3%BC%EC%BF%A0+%EB%AF%B8%EB%82%98%EB%AF%B8%EA%B5%AC%EC%B9%98%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "긴자 바이린 본점": {
        photos: ["/images/tokyo/info/restaurants/place-6.jpg"],
        summary: "긴자의 전통을 느낄 수 있는 프리미엄 돈카츠 전문점",
        updatedAt: "2026-07-14",
        highlights: ["바삭한 튀김옷과 육즙 가득한 정통 돈카츠", "긴자에서 오랜 역사를 자랑하는 맛집"],
        tips: ["점심 피크 타임에는 웨이팅이 발생할 수 있습니다."],
        warnings: ["재료 소진 시 영업이 조기 종료될 수 있습니다."],
        menu: {
            signature: "가츠동·돈카츠",
            items: [{ name: "가츠동·돈카츠", price: "¥1,500~3,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:30 ~ 오후 8:00; 화요일: 오전 11:30 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ginzabairin.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8684877893208776297", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90+%EB%B0%94%EC%9D%B4%EB%A6%B0+%EB%B3%B8%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "츠지한 니혼바시 본점": {
        photos: ["/images/tokyo/info/restaurants/place-7.jpg"],
        summary: "신선한 해산물이 듬뿍 올라간 도쿄 대표 제이타쿠동 맛집",
        updatedAt: "2026-07-14",
        highlights: ["입안 가득 퍼지는 바다의 풍미", "마지막에 즐기는 진한 도미 육수 죽"],
        tips: ["웨이팅이 길 수 있으니 오픈 직후나 식사 시간 피해서 방문 추천"],
        warnings: ["대기 줄이 매우 긴 편"],
        menu: {
            signature: "제이타쿠동",
            items: [{ name: "제이타쿠동", price: "¥1,500~2,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tsujihan-jp.com/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2386807723085252126", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B8%A0%EC%A7%80%ED%95%9C+%EB%8B%88%ED%98%BC%EB%B0%94%EC%8B%9C+%EB%B3%B8%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "스시노미도리 시부야점": {
        photos: ["/images/tokyo/info/restaurants/place-8.jpg"],
        summary: "가성비와 퀄리티를 모두 잡은 시부야의 인기 초밥 전문점",
        updatedAt: "2026-07-14",
        highlights: ["두툼한 네타가 특징인 신선한 초밥 세트", "합리적인 가격대"],
        tips: ["시부야 중심가에 있어 접근성 좋음"],
        warnings: ["식사 시간대에는 대기가 매우 길 수 있음"],
        menu: {
            signature: "초밥 세트",
            items: [{ name: "초밥 세트", price: "¥2,000~4,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~9:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.sushinomidori.co.jp/shop.php?name=shibuya", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6860257876597898590", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%8B%9C%EB%85%B8%EB%AF%B8%EB%8F%84%EB%A6%AC+%EC%8B%9C%EB%B6%80%EC%95%BC%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "네무로 하나마루 KITTE 마루노우치점": {
        photos: ["/images/tokyo/info/restaurants/kitte.jpg"],
        summary: "홋카이도 직송 재료로 맛을 낸 프리미엄 회전초밥",
        updatedAt: "2026-07-14",
        highlights: ["신선한 홋카이도산 해산물", "도쿄역 근처 편리한 위치"],
        tips: ["KITTE 쇼핑몰 내에 있어 식사 후 쇼핑하기 좋음"],
        warnings: ["인기 매장이라 대기 번호표를 미리 받는 것이 유리함"],
        menu: {
            signature: "홋카이도 회전초밥",
            items: [{ name: "홋카이도 회전초밥", price: "¥2,000~4,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.sushi-hanamaru.com/store/details/s11.html", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14326864775095335517", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%84%A4%EB%AC%B4%EB%A1%9C+%ED%95%98%EB%82%98%EB%A7%88%EB%A3%A8+KITTE+%EB%A7%88%EB%A3%A8%EB%85%B8%EC%9A%B0%EC%B9%98%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "돈카츠 마이센 아오야마 본점": {
        photos: ["/images/tokyo/info/restaurants/place-9.jpg"],
        summary: "아오야마의 상징적인 돈카츠 맛집",
        updatedAt: "2026-07-14",
        highlights: ["입안에서 녹는 부드러운 쿠로부타 돈카츠", "고풍스러운 본점 건물의 특별한 분위기"],
        tips: ["점심시간을 살짝 피해서 방문하면 더 여유롭게 즐길 수 있어요"],
        warnings: [],
        menu: {
            signature: "쿠로부타 돈카츠",
            items: [{ name: "쿠로부타 돈카츠", price: "¥2,000~4,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8353092544941080303", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%88%EC%B9%B4%EC%B8%A0+%EB%A7%88%EC%9D%B4%EC%84%BC+%EC%95%84%EC%98%A4%EC%95%BC%EB%A7%88+%EB%B3%B8%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "AFURI 하라주쿠점": {
        photos: ["/images/tokyo/info/restaurants/afuri.jpg"],
        summary: "상큼한 유자 향이 매력적인 라멘 맛집",
        updatedAt: "2026-07-14",
        highlights: ["깔끔하고 담백한 유자시오 라멘", "하라주쿠 쇼핑 중 들르기 좋은 위치"],
        tips: ["웨이팅이 있을 수 있으니 식사 시간대를 확인해 보세요"],
        warnings: [],
        menu: {
            signature: "유자시오 라멘",
            items: [{ name: "유자시오 라멘", price: "¥1,200~2,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://afuri.com/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14658399961265590294", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=AFURI+%ED%95%98%EB%9D%BC%EC%A3%BC%EC%BF%A0%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "멘야 무사시 신주쿠 본점": {
        photos: ["/images/tokyo/info/restaurants/place-10.jpg"],
        summary: "신주쿠에서 즐기는 진한 풍미의 츠케멘",
        updatedAt: "2026-07-14",
        highlights: ["두툼한 면발과 진한 육수의 환상적인 조화", "든든하고 만족스러운 한 끼 식사"],
        tips: ["신주쿠 근처라면 꼭 들러볼 만한 곳"],
        warnings: ["화요일은 휴무이니 방문 전 꼭 확인하세요"],
        menu: {
            signature: "츠케멘·라멘",
            items: [{ name: "츠케멘·라멘", price: "¥1,000~1,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:30 ~ 오후 2:00, 오후 5:00~10:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.freedomi.jp/shinjuku", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15447522191168502462", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%98%EC%95%BC+%EB%AC%B4%EC%82%AC%EC%8B%9C+%EC%8B%A0%EC%A3%BC%EC%BF%A0+%EB%B3%B8%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "풍운아 신주쿠": {
        photos: ["/images/tokyo/info/restaurants/place-11.jpg"],
        summary: "진한 닭백탕 국물이 일품인 츠케멘 전문점",
        updatedAt: "2026-07-14",
        highlights: ["깊고 담백한 풍미의 닭백탕 베이스", "1,000~1,500엔대의 합리적인 가격"],
        tips: ["브레이크 타임(15:00~17:00) 확인 필수", "인기 메뉴는 조기 품절될 수 있음"],
        warnings: ["점심 및 저녁 피크 시간대 웨이팅 발생 가능"],
        menu: {
            signature: "닭백탕 츠케멘",
            items: [{ name: "닭백탕 츠케멘", price: "¥1,000~1,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~9:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.fu-unji.com/?utm_source=gbp?utm_medium=organic", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3272539110311166620", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%92%8D%EC%9A%B4%EC%95%84+%EC%8B%A0%EC%A3%BC%EC%BF%A0+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "츠키지 스시세이 본점": {
        photos: ["/images/tokyo/info/restaurants/place-12.jpg"],
        summary: "츠키지 시장의 신선한 재료로 만든 니기리 세트 전문점입니다.",
        updatedAt: "2026-07-14",
        highlights: ["신선한 니기리 세트", "합리적인 가격대"],
        tips: ["브레이크 타임을 꼭 확인하세요.", "인기가 많아 방문 전 시간 체크를 권장합니다."],
        warnings: ["재료 소진 시 조기 마감될 수 있습니다."],
        menu: {
            signature: "니기리 세트",
            items: [{ name: "니기리 세트", price: "¥3,000~6,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 10:00 ~ 오후 2:30, 오후 5:00~8:30; 화요일: 오전 10:00 ~ 오후 2:30, 오후 5:00~8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.tsukijisushisay.co.jp/store/honten.html", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13533179521417656094", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B8%A0%ED%82%A4%EC%A7%80+%EC%8A%A4%EC%8B%9C%EC%84%B8%EC%9D%B4+%EB%B3%B8%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "츠키지 이타도리 별관": {
        photos: ["/images/tokyo/info/restaurants/place-13.jpg"],
        summary: "츠키지 시장의 신선함을 가득 담은 가성비 최고의 카이센동 전문점입니다.",
        updatedAt: "2026-07-14",
        highlights: ["신선한 제철 해산물이 듬뿍 올라간 카이센동", "4.5점의 높은 평점으로 검증된 맛", "부담 없는 가격대의 프리미엄 식사"],
        tips: ["오전 일찍 방문하면 더욱 신선한 재료를 만날 수 있습니다.", "주변 츠키지 시장 구경과 함께 즐기기 좋습니다."],
        warnings: ["인기 맛집이라 피크 타임에는 대기가 발생할 수 있습니다."],
        menu: {
            signature: "카이센동",
            items: [{ name: "카이센동", price: "¥2,000~4,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 7:00 ~ 오후 10:00; 화요일: 오전 7:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://beyondtsukiji-hd.co.jp/shop/itadori-bekkan/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5124312734786734946", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B8%A0%ED%82%A4%EC%A7%80+%EC%9D%B4%ED%83%80%EB%8F%84%EB%A6%AC+%EB%B3%84%EA%B4%80+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "아사쿠사 규카츠": {
        photos: ["/images/tokyo/info/restaurants/place-14.jpg"],
        summary: "아사쿠사의 상징적인 맛집으로, 입안에서 살살 녹는 부드러운 규카츠를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-14",
        highlights: ["부드러운 육질의 프리미엄 규카츠", "개인 화로에 직접 구워 먹는 재미", "압도적인 리뷰 수와 높은 평점"],
        tips: ["웨이팅이 길 수 있으니 오픈 시간이나 식사 시간을 피해서 방문하세요.", "개인 화로를 사용해 취향껏 굽기 정도를 조절할 수 있습니다."],
        warnings: ["대기 줄이 매우 길어 인내심이 필요할 수 있습니다."],
        menu: {
            signature: "규카츠 정식",
            items: [{ name: "규카츠 정식", price: "¥1,800~2,800" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tabelog.com/tokyo/A1311/A131102/13172454/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15133757769088164000", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%82%AC%EC%BF%A0%EC%82%AC+%EA%B7%9C%EC%B9%B4%EC%B8%A0+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "다이코쿠야 텐푸라 본점": {
        photos: ["/images/tokyo/info/restaurants/place-15.jpg"],
        summary: "아사쿠사의 명물, 바삭한 튀김이 일품인 전통 텐동 맛집입니다.",
        updatedAt: "2026-07-14",
        highlights: ["바삭하고 고소한 프리미엄 텐동", "아사쿠사 여행 필수 코스", "합리적인 가격대의 식사"],
        tips: ["피크 타임에는 웨이팅이 발생할 수 있으니 여유 있게 방문하세요."],
        warnings: ["인기 맛집이라 대기 시간이 길 수 있습니다."],
        menu: {
            signature: "텐동",
            items: [{ name: "텐동", price: "¥2,000~3,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.tempura.co.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17105810987302783774", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9D%B4%EC%BD%94%EC%BF%A0%EC%95%BC+%ED%85%90%ED%91%B8%EB%9D%BC+%EB%B3%B8%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "긴자 카가리 본점": {
        photos: ["/images/tokyo/info/restaurants/place-16.jpg"],
        summary: "진한 닭 육수의 풍미가 일품인 긴자 대표 토리파이탄 소바 맛집",
        updatedAt: "2026-07-14",
        highlights: ["부드럽고 크리미한 닭 백탕 국물", "긴자를 상징하는 유명 라멘 전문점"],
        tips: ["웨이팅이 길 수 있으니 식사 피크 타임을 피해서 방문하세요", "1,200~2,000엔대의 합리적인 가격대"],
        warnings: ["인기 매장이라 대기 시간이 발생할 수 있습니다"],
        menu: {
            signature: "토리파이탄 소바",
            items: [{ name: "토리파이탄 소바", price: "¥1,200~2,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/kagari_honten/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9392657951139765811", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90+%EC%B9%B4%EA%B0%80%EB%A6%AC+%EB%B3%B8%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "츠루톤탄 신주쿠점": {
        photos: ["/images/tokyo/info/restaurants/place-17.jpg"],
        summary: "신주쿠에서 즐기는 진한 풍미의 크림 우동 전문점",
        updatedAt: "2026-07-14",
        highlights: ["다양하고 풍성한 토핑이 특징인 크림 우동", "신주쿠 가부키초 중심가에 위치해 접근성 좋음"],
        tips: ["웨이팅이 발생할 수 있으니 피크 타임을 피해 방문하세요", "1,500~3,000엔 사이의 합리적인 가격대"],
        warnings: ["늦은 시간까지 영업하지만 방문 전 운영 시간 재확인 권장"],
        menu: {
            signature: "크림 우동",
            items: [{ name: "크림 우동", price: "¥1,500~3,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오전 8:00; 화요일: 오전 11:00 ~ 오전 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tsurutontan.co.jp/shop/shinjuku/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=466795079063985157", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B8%A0%EB%A3%A8%ED%86%A4%ED%83%84+%EC%8B%A0%EC%A3%BC%EC%BF%A0%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "토리키조쿠 시부야 센터가이점": {
        photos: ["/images/tokyo/info/restaurants/place-18.jpg"],
        summary: "가성비 넘치는 균일가 야끼토리 전문점",
        updatedAt: "2026-07-14",
        highlights: ["모든 메뉴를 저렴한 균일가로 즐길 수 있음", "시부야 중심가에 위치해 접근성 우수"],
        tips: ["피크 시간대에는 웨이팅이 발생할 수 있음", "가벼운 술자리나 가성비 식사에 최적"],
        warnings: ["영업시간 및 메뉴 가격 변동 여부를 확인하세요"],
        menu: {
            signature: "균일가 꼬치",
            items: [{ name: "균일가 꼬치", price: "¥2,000~3,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오후 5:00~10:30; 화요일: 오후 5:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.akiyoshi.co.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9677494093757923822", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%A0%EB%A6%AC%ED%82%A4%EC%A1%B0%EC%BF%A0+%EC%8B%9C%EB%B6%80%EC%95%BC+%EC%84%BC%ED%84%B0%EA%B0%80%EC%9D%B4%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "카츠쿠라 신주쿠 타카시마야점": {
        photos: ["/images/tokyo/info/restaurants/place-19.jpg"],
        summary: "신주쿠 타카시마야 백화점에서 즐기는 프리미엄 돈카츠 전문점",
        updatedAt: "2026-07-14",
        highlights: ["육즙 가득한 프리미엄 돈카츠 정식", "타카시마야 백화점 14층의 편리한 접근성", "정갈하고 깔끔한 구성의 식사"],
        tips: ["백화점 쇼핑 후 방문하기 좋습니다.", "피크 타임을 피하면 더 여유로운 식사가 가능합니다."],
        warnings: ["인기 맛집이라 식사 시간에는 대기가 발생할 수 있습니다."],
        menu: {
            signature: "돈카츠 정식",
            items: [{ name: "돈카츠 정식", price: "¥1,800~3,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.katsukura.jp/shops/shinjuku-takashimaya/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13571770056714267083", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%B8%A0%EC%BF%A0%EB%9D%BC+%EC%8B%A0%EC%A3%BC%EC%BF%A0+%ED%83%80%EC%B9%B4%EC%8B%9C%EB%A7%88%EC%95%BC%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "몬자 쿠라 츠키시마": {
        photos: ["/images/tokyo/info/restaurants/place-20.jpg"],
        summary: "3만 개 이상의 리뷰가 증명하는 시부야 명란치즈 몬자 맛집",
        updatedAt: "2026-07-14",
        highlights: ["입안 가득 풍미가 터지는 명란치즈 몬자 전문점", "압도적인 평점(4.9)으로 검증된 현지 인기 맛집"],
        tips: ["대표 메뉴인 명란치즈 몬자를 꼭 주문해 보세요", "예산은 인당 약 2,000~3,500엔 정도로 계획하세요"],
        warnings: ["방문객이 매우 많아 피크 시간대에는 웨이팅이 발생할 수 있습니다"],
        menu: {
            signature: "명란치즈 몬자",
            items: [{ name: "명란치즈 몬자", price: "¥2,000~3,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 10:45 ~ 오후 11:00; 화요일: 오전 10:45 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tabelog.com/tokyo/A1303/A130301/13243695/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1978719074806591162", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%AC%EC%9E%90+%EC%BF%A0%EB%9D%BC+%EC%B8%A0%ED%82%A4%EC%8B%9C%EB%A7%88+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "소메타로 아사쿠사": {
        photos: ["/images/tokyo/info/restaurants/place-21.jpg"],
        summary: "아사쿠사에서 즐기는 정통 오코노미야키 맛집",
        updatedAt: "2026-07-14",
        highlights: ["현지 분위기가 물씬 풍기는 오코노미야키 전문점", "1,500~3,000엔대의 합리적인 가격"],
        tips: ["화요일은 정기 휴무이므로 방문 전 확인 필수", "인기 맛집이라 웨이팅이 발생할 수 있음"],
        warnings: ["점심과 저녁 사이 브레이크 타임 주의"],
        menu: {
            signature: "오코노미야키",
            items: [{ name: "오코노미야키", price: "¥1,500~3,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오후 12:00~2:30, 오후 5:30~8:30; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15093122525121686287", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%8C%EB%A9%94%ED%83%80%EB%A1%9C+%EC%95%84%EC%82%AC%EC%BF%A0%EC%82%AC+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "카라시비 미소라멘 키칸보 칸다 본점": {
        photos: ["/images/tokyo/info/restaurants/place-22.jpg"],
        summary: "강렬한 매운맛이 특징인 칸다의 유명 미소라멘 맛집",
        updatedAt: "2026-07-14",
        highlights: ["중독성 있는 매콤한 미소라멘", "6,400개 이상의 리뷰가 증명하는 검증된 맛"],
        tips: ["1,000~1,500엔대의 합리적인 가격대", "피크 타임 웨이팅 주의"],
        warnings: ["매운맛 강도가 높을 수 있으니 주의"],
        menu: {
            signature: "매운 미소라멘",
            items: [{ name: "매운 미소라멘", price: "¥1,000~1,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://kikanbo.co.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13122633145404946701", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%9D%BC%EC%8B%9C%EB%B9%84+%EB%AF%B8%EC%86%8C%EB%9D%BC%EB%A9%98+%ED%82%A4%EC%B9%B8%EB%B3%B4+%EC%B9%B8%EB%8B%A4+%EB%B3%B8%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "긴자 우카이테이": {
        photos: ["/images/tokyo/info/restaurants/place-23.jpg"],
        summary: "긴자에서 즐기는 프리미엄 와규 철판 요리 코스",
        updatedAt: "2026-07-14",
        highlights: ["최상급 와규를 맛볼 수 있는 철판 코스", "긴자의 고급스럽고 품격 있는 분위기"],
        tips: ["인기가 매우 높으므로 사전 예약 권장", "1인당 약 2~4만 엔의 예산 고려 필요"],
        warnings: ["가격대가 높은 프리미엄 레스토랑"],
        menu: {
            signature: "와규 철판 코스",
            items: [{ name: "와규 철판 코스", price: "¥20,000~40,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오후 12:00~9:30; 화요일: 오후 12:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.ukai.co.jp/ginza/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9657200045435452382", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90+%EC%9A%B0%EC%B9%B4%EC%9D%B4%ED%85%8C%EC%9D%B4+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "나리사와": {
        photos: ["/images/tokyo/info/restaurants/place-24.jpg"],
        summary: "자연의 풍미를 담은 사토야마 코스 요리를 선보이는 도쿄의 프리미엄 레스토랑입니다.",
        updatedAt: "2026-07-14",
        highlights: ["사토야마 컨셉의 독창적인 코스 요리", "도쿄 미나토구의 고급스러운 분위기", "높은 평점(4.6)으로 검증된 맛"],
        tips: ["가격대가 높으므로 예산 계획 필수", "월요일 휴무를 반드시 확인하세요"],
        warnings: ["사전 예약 없이는 방문이 어려울 수 있습니다"],
        menu: {
            signature: "사토야마 코스",
            items: [{ name: "사토야마 코스", price: "¥35,000~60,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 휴무일; 화요일: 오후 12:00~2:30, 오후 5:30~8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.narisawa-yoshihiro.com/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8700438358203358044", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EB%A6%AC%EC%82%AC%EC%99%80+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "긴자 코쥬": {
        photos: ["/images/tokyo/info/restaurants/place-25.jpg"],
        summary: "긴자에서 즐기는 품격 있는 계절 카이세키 요리",
        updatedAt: "2026-07-14",
        highlights: ["제철 식재료를 사용한 정갈한 코스", "긴자의 고급스러운 분위기", "예술적인 플레이팅"],
        tips: ["사전 예약 필수", "점심 영업 시간이 짧으니 방문 전 확인 필요"],
        warnings: ["높은 가격대(3만 엔~5만 엔) 유의"],
        menu: {
            signature: "계절 카이세키",
            items: [{ name: "계절 카이세키", price: "¥30,000~50,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오후 12:00~1:00, 오후 6:00~9:30; 화요일: 오후 12:00~1:00, 오후 6:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.kojyu.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9302355949854769069", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90+%EC%BD%94%EC%A5%AC+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "bills 오모테산도": {
        photos: ["/images/tokyo/info/restaurants/bills.jpg"],
        summary: "입안에서 살살 녹는 리코타 핫케이크로 유명한 오모테산도의 대표 브런치 맛집입니다.",
        updatedAt: "2026-07-14",
        highlights: ["부드러운 식감의 시그니처 리코타 핫케이크", "오모테산도 분위기를 즐기기 좋은 세련된 공간"],
        tips: ["인기가 많아 웨이팅이 발생할 수 있으니 여유 있게 방문하세요.", "브런치 메뉴와 함께 커피를 곁들이면 더욱 좋습니다."],
        warnings: ["주말이나 피크 타임에는 대기 시간이 길어질 수 있습니다."],
        menu: {
            signature: "리코타 핫케이크",
            items: [{ name: "리코타 핫케이크", price: "¥2,000~4,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 8:30 ~ 오후 10:00; 화요일: 오전 8:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.billsjapan.com/jp/locations/omotesando", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=842209506955036887", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=bills+%EC%98%A4%EB%AA%A8%ED%85%8C%EC%82%B0%EB%8F%84+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "행복한 팬케이크 오모테산도점": {
        photos: ["/images/tokyo/info/restaurants/place-26.jpg"],
        summary: "입안에서 사르르 녹는 폭신한 식감의 수플레 팬케이크 전문점",
        updatedAt: "2026-07-14",
        highlights: ["부드럽고 촉촉한 시그니처 수플레 팬케이크", "오모테산도 분위기에 어울리는 달콤한 디저트"],
        tips: ["웨이팅이 길 수 있으니 오픈 시간 방문을 추천합니다", "1인당 약 1,500~2,500엔 정도의 예산을 고려하세요"],
        warnings: ["재료 소진 시 조기 마감될 수 있습니다", "주말에는 대기 시간이 매우 길어질 수 있습니다"],
        menu: {
            signature: "수플레 팬케이크",
            items: [{ name: "수플레 팬케이크", price: "¥1,500~2,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 10:00 ~ 오후 7:00; 화요일: 오전 10:00 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "http://magia.tokyo/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15976839811420102512", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%96%89%EB%B3%B5%ED%95%9C+%ED%8C%AC%EC%BC%80%EC%9D%B4%ED%81%AC+%EC%98%A4%EB%AA%A8%ED%85%8C%EC%82%B0%EB%8F%84%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "잇푸도 긴자점": {
        photos: ["/images/tokyo/info/restaurants/place-27.jpg"],
        summary: "긴자에서 즐기는 진한 풍미의 하카타 돈코츠 라멘 맛집",
        updatedAt: "2026-07-14",
        highlights: ["깊고 진한 육수의 정통 돈코츠 라멘", "긴자 중심가에 위치해 접근성 우수"],
        tips: ["1,000~1,800엔대의 합리적인 가격대", "피크 타임 방문 시 웨이팅 대비 필요"],
        warnings: ["인기 매장으로 대기 시간이 발생할 수 있음"],
        menu: {
            signature: "하카타 돈코츠",
            items: [{ name: "하카타 돈코츠", price: "¥1,000~1,800" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://stores.ippudo.com/1123?utm_source=Yext&utm_medium=Yext&utm_campaign=Listings", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9280641726961323714", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%87%ED%91%B8%EB%8F%84+%EA%B8%B4%EC%9E%90%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "오니기리 봉고": {
        photos: ["/images/tokyo/info/restaurants/place-28.jpg"],
        summary: "정성이 가득 담긴 맛있는 수제 오니기리 전문점",
        updatedAt: "2026-07-14",
        highlights: ["신선한 재료로 만든 수제 오니기리", "부담 없는 가격의 든든한 한 끼"],
        tips: ["인기가 많아 대기 줄이 길 수 있으니 여유 있게 방문하세요.", "가벼운 아침이나 점심 식사로 추천합니다."],
        warnings: ["재료 소진 시 영업이 조기 종료될 수 있습니다."],
        menu: {
            signature: "수제 오니기리",
            items: [{ name: "수제 오니기리", price: "¥1,000~2,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.onigiribongo.info/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13893936020885369055", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%8B%88%EA%B8%B0%EB%A6%AC+%EB%B4%89%EA%B3%A0+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "긴자 하치고": {
        photos: ["/images/tokyo/info/restaurants/place-29.jpg"],
        summary: "긴자의 미쉐린 가이드에 선정된 맑고 깔끔한 국물의 라멘 맛집입니다.",
        updatedAt: "2026-07-14",
        highlights: ["미쉐린 가이드가 인정한 깊은 맛의 맑은 국물", "긴자 중심에서 즐기는 정통 라멘"],
        tips: ["화요일 영업 시간(11:00~16:00)을 반드시 확인하세요", "예산은 약 2,500엔 내외로 준비하는 것이 좋습니다"],
        warnings: ["매주 월요일은 정기 휴무입니다", "영업 시간이 짧아 방문 전 운영 여부를 꼭 체크하세요"],
        menu: {
            signature: "미쉐린 라멘·맑은 국물",
            items: [{ name: "미쉐린 라멘·맑은 국물", price: "¥1,500~2,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://katsumoto-japan.com/ja/ginza_hachigou.html", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13357916488765453786", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90+%ED%95%98%EC%B9%98%EA%B3%A0+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
};

export default info;
