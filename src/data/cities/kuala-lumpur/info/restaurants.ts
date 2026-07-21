import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "잘란 알로 야시장": {
        photos: ["/images/kuala-lumpur/info/restaurants/jalan-alor-food-street-kuala-lumpur.jpg"],
        summary: "다양한 사테와 해산물, 두리안 등 다채로운 길거리 음식을 즐길 수 있는 활기찬 야시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["사테 및 각종 해산물 요리", "두리안과 볶음요리"],
        tips: ["저녁 시간대에는 매우 붐비므로 여유 있게 방문하세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "사테·해산물·두리안·볶음요리", items: [{ name: "대표 메뉴", price: "RM10~60", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:30 ~ 오전 2:00; 화요일: 오전 10:30 ~ 오전 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5891102546099294315", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%98%EB%9E%80+%EC%95%8C%EB%A1%9C+%EC%95%BC%EC%8B%9C%EC%9E%A5+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "롯10 후통": {
        photos: ["/images/kuala-lumpur/info/restaurants/lot-10-hutong-kuala-lumpur.jpg"],
        summary: "말레이시아의 유명한 로컬 맛집들을 한곳에서 만날 수 있는 프리미엄 푸드코트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 로컬 맛집 집결", "쾌적한 식사 환경"],
        tips: ["인기 메뉴는 대기 시간이 발생할 수 있습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "유명 로컬 맛집 푸드코트", items: [{ name: "대표 메뉴", price: "RM10~40", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://lot10hutong.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18373921233402851411", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%AF10+%ED%9B%84%ED%86%B5+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "빌리지 파크 레스토랑": {
        photos: ["/images/kuala-lumpur/info/restaurants/village-park-restaurant-kuala-lumpur.jpg"],
        summary: "나시르막이 유명한 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["대표 메뉴인 나시르막", "현지 분위기의 식사"],
        tips: ["피크 타임에는 대기할 수 있습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "나시르막", items: [{ name: "대표 메뉴", price: "RM10~30", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 5:30; 화요일: 오전 6:30 ~ 오후 5:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/Village-Park-Restaurant-1639483826264341/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2425966433158524732", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%8C%EB%A6%AC%EC%A7%80+%ED%8C%8C%ED%81%AC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "나시 칸다르 펠리타": {
        photos: ["/images/kuala-lumpur/info/restaurants/nasi-kandar-pelita-kuala-lumpur.jpg"],
        summary: "커리와 나시칸다르를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["풍미 가득한 커리", "전통적인 나시칸다르 스타일"],
        tips: ["다양한 종류의 커리를 조합해 보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "나시칸다르·커리", items: [{ name: "대표 메뉴", price: "RM10~40", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11631383842283619460", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EC%8B%9C+%EC%B9%B8%EB%8B%A4%EB%A5%B4+%ED%8E%A0%EB%A6%AC%ED%83%80+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "마담 콴 수리아 KLCC": {
        photos: ["/images/kuala-lumpur/info/restaurants/madam-kwan-s-suria-klcc.jpg"],
        summary: "수리아 KLCC 내 위치하여 나시르막과 차퀘이테오 등 정통 말레이 음식을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["나시르막 전문", "차퀘이테오 맛집"],
        tips: ["쇼핑몰 내에 있어 접근성이 매우 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "나시르막·차퀘이테오", items: [{ name: "대표 메뉴", price: "RM25~80", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.madamkwans.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9262508241241972924", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%8B%B4+%EC%BD%B4+%EC%88%98%EB%A6%AC%EC%95%84+KLCC+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "비잔 바 & 레스토랑": {
        photos: ["/images/kuala-lumpur/info/restaurants/bijan-bar-restaurant-kuala-lumpur.jpg"],
        summary: "고급스러운 분위기에서 품격 있는 말레이 전통 요리 코스를 경험할 수 있는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["말레이 전통요리 코스", "고급스러운 분위기"],
        tips: ["특별한 날을 위한 예약 방문을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "말레이 전통요리 코스", items: [{ name: "대표 메뉴", price: "RM60~180", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 4:30~11:00; 화요일: 오후 4:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.bijanrestaurant.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16067909030578639533", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%84%EC%9E%94+%EB%B0%94+%26+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "드완 1958 바이 셰프 완": {
        photos: ["/images/kuala-lumpur/info/restaurants/de-wan-1958-by-chef-wan-kuala-lumpur.jpg"],
        summary: "셰프 완의 정체성이 담긴 프리미엄 말레이 요리를 선보이는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["고급스러운 말레이시아 전통 요리", "뱅사 쇼핑 센터 내 위치"],
        tips: ["특별한 날을 위한 예약 권장"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "프리미엄 말레이 요리", items: [{ name: "대표 메뉴", price: "RM50~180", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:30, 오후 6:00~9:30; 화요일: 오전 11:00 ~ 오후 3:30, 오후 6:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://dewan.space/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17072601940135046927", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%93%9C%EC%99%84+1958+%EB%B0%94%EC%9D%B4+%EC%85%B0%ED%94%84+%EC%99%84+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "데와칸": {
        photos: ["/images/kuala-lumpur/info/restaurants/dewakan-kuala-lumpur.jpg"],
        summary: "현대적인 감각으로 재해석한 테이스팅 메뉴를 즐길 수 있는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["창의적인 테이스팅 코스", "KLCC 전망이 좋은 위치"],
        tips: ["사전 예약 필수"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "테이스팅 메뉴", items: [{ name: "대표 메뉴", price: "RM300+", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 6:00~11:30; 화요일: 오후 6:00~11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.dewakan.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5739520210191574613", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%B0%EC%99%80%EC%B9%B8+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "노부 쿠알라룸푸르": {
        photos: ["/images/kuala-lumpur/info/restaurants/nobu-kuala-lumpur.jpg"],
        summary: "고층에서 환상적인 전망을 즐길 수 있는 파인다이닝 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["고층 전망의 파인다이닝", "세련된 분위기"],
        tips: ["특별한 기념일에 방문하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "고층 전망 파인다이닝", items: [{ name: "대표 메뉴", price: "RM200+", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:45 ~ 오후 2:00, 오후 6:00~10:00; 화요일: 오전 11:45 ~ 오후 2:00, 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.noburestaurants.com/kuala-lumpur", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18399244299135829401", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%B8%EB%B6%80+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "마리니스 온 57": {
        photos: ["/images/kuala-lumpur/info/restaurants/marini-s-on-57-kuala-lumpur.jpg"],
        summary: "트윈타워를 한눈에 조망할 수 있는 매력적인 다이닝 공간입니다.",
        updatedAt: "2026-07-21",
        highlights: ["페트로나스 트윈타워 전망", "럭셔리한 분위기"],
        tips: ["전망 좋은 좌석을 위해 사전 예약을 권장합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "트윈타워 전망 다이닝", items: [{ name: "대표 메뉴", price: "RM120+", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 5:00 ~ 오전 2:00; 화요일: 오후 5:00 ~ 오전 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://marinisgroup.com/marinis-on-57/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4886916415301270180", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A6%AC%EB%8B%88%EC%8A%A4+%EC%98%A8+57+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "서티에잇 그랜드 하얏트": {
        photos: ["/images/kuala-lumpur/info/restaurants/thirty8-grand-hyatt-kuala-lumpur.jpg"],
        summary: "그랜드 하얏트 호텔 내 위치하여 멋진 전망과 함께 브런치와 디너를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["환상적인 도시 전망", "다양한 메뉴의 브런치 및 디너"],
        tips: ["전망 좋은 좌석을 위해 사전 예약 권장"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "전망 브런치·디너", items: [{ name: "대표 메뉴", price: "RM100+", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오전 12:00; 화요일: 오전 6:30 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2519832852180390313", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%9C%ED%8B%B0%EC%97%90%EC%9E%87+%EA%B7%B8%EB%9E%9C%EB%93%9C+%ED%95%98%EC%96%8F%ED%8A%B8+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "윳키 레스토랑": {
        photos: ["/images/kuala-lumpur/info/restaurants/yut-kee-restaurant-kuala-lumpur.jpg"],
        summary: "로티 바비와 치킨찹 등 전통적인 맛을 느낄 수 있는 유명한 로컬 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["대표 메뉴 로티 바비", "클래식한 치킨찹"],
        tips: ["현지 분위기를 느끼고 싶을 때 방문하기 좋음"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "로티 바비·치킨찹", items: [{ name: "대표 메뉴", price: "RM10~40", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 7:30 ~ 오후 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://yutkee.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=821701979128123478", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%B3%ED%82%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "올드 차이나 카페": {
        photos: ["/images/kuala-lumpur/info/restaurants/old-china-cafe-kuala-lumpur.jpg"],
        summary: "전통적인 페라나칸 요리를 맛볼 수 있는 분위기 좋은 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["정통 페라나칸 요리", "클래식한 인테리어"],
        tips: ["현지 스타일의 식사를 경험하고 싶을 때 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "페라나칸 요리", items: [{ name: "대표 메뉴", price: "RM25~80", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.oldchina.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7162937257270503257", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%AC%EB%93%9C+%EC%B0%A8%EC%9D%B4%EB%82%98+%EC%B9%B4%ED%8E%98+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "머천트 레인": {
        photos: ["/images/kuala-lumpur/info/restaurants/merchant-s-lane-kuala-lumpur.jpg"],
        summary: "차이나타운에서 즐길 수 있는 맛있는 브런치 전문점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["차이나타운 브런치 맛집", "높은 평점"],
        tips: ["여유로운 아침 식사를 위해 방문해 보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "차이나타운 브런치", items: [{ name: "대표 메뉴", price: "RM20~70", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://wa.me/60320221736", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1365771613957848319", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A8%B8%EC%B2%9C%ED%8A%B8+%EB%A0%88%EC%9D%B8+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "VCR 카페": {
        photos: ["/images/kuala-lumpur/info/restaurants/vcr-cafe-kuala-lumpur.jpg"],
        summary: "커피와 프렌치토스트가 유명한 몽키아라의 인기 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["맛있는 프렌치토스트", "훌륭한 커피 품질"],
        tips: ["여유로운 브런치를 즐기기에 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피·프렌치토스트", items: [{ name: "대표 메뉴", price: "RM20~70", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://vcr.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6398451922394492179", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=VCR+%EC%B9%B4%ED%8E%98+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "피카 커피 로스터스": {
        photos: ["/images/kuala-lumpur/info/restaurants/feeka-coffee-roasters-kuala-lumpur.jpg"],
        summary: "부킷 빈탕에서 스페셜티 커피와 브런치를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["직접 로스팅한 스페셜티 커피", "다양한 브런치 메뉴"],
        tips: ["커피 애호가들에게 강력 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스페셜티 커피·브런치", items: [{ name: "대표 메뉴", price: "RM20~70", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4501121685384446339", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EC%B9%B4+%EC%BB%A4%ED%94%BC+%EB%A1%9C%EC%8A%A4%ED%84%B0%EC%8A%A4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "오피움 KL": {
        photos: ["/images/kuala-lumpur/info/restaurants/opium-kl-kuala-lumpur.jpg"],
        summary: "부킷빈탕에서 즐길 수 있는 세련된 분위기의 퓨전 다이닝 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["감각적인 인테리어와 분위기", "다양한 퓨전 요리"],
        tips: ["특별한 저녁 식사나 데이트 장소로 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "부킷빈탕 퓨전 다이닝", items: [{ name: "대표 메뉴", price: "RM60~160", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 9:30; 화요일: 오전 6:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.lloydsinn.com/opeumbistro", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4030339530354044211", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%ED%94%BC%EC%9B%80+KL+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "사오남 베트남 퀴진": {
        photos: ["/images/kuala-lumpur/info/restaurants/sao-nam-vietnamese-cuisine-kuala-lumpur.jpg"],
        summary: "정통 베트남의 맛을 느낄 수 있는 쌀국수와 가정식 전문점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["깊은 맛의 쌀국수", "현지 느낌의 베트남 가정식"],
        tips: ["현지의 맛을 선호하는 분들에게 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "쌀국수·베트남 가정식", items: [{ name: "대표 메뉴", price: "RM30~100", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 12:00~2:30, 오후 6:00~10:00; 화요일: 오후 12:00~2:30, 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.saonam.com.my/saonam.com.my/contact_us.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5921419362181652499", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%98%A4%EB%82%A8+%EB%B2%A0%ED%8A%B8%EB%82%A8+%ED%80%B4%EC%A7%84+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "타마린드 스프링스": {
        photos: ["/images/kuala-lumpur/info/restaurants/tamarind-springs-kuala-lumpur.jpg"],
        summary: "정글의 자연 친화적인 분위기 속에서 식사를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["정글 분위기의 다이닝 경험", "평점 4.1의 높은 만족도"],
        tips: ["자연 속 분위기를 만끽하고 싶을 때 방문하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "정글 분위기 다이닝", items: [{ name: "대표 메뉴", price: "RM100+", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 6:00~11:00; 화요일: 오후 12:00~3:00, 오후 6:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://samadhiretreats.com/tamarind-springs-kuala-lumpur/19", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17889082553690258170", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EB%A7%88%EB%A6%B0%EB%93%9C+%EC%8A%A4%ED%94%84%EB%A7%81%EC%8A%A4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "하카 레스토랑": {
        photos: ["/images/kuala-lumpur/info/restaurants/hakka-restaurant-kuala-lumpur.jpg"],
        summary: "다양한 해산물과 하카 요리를 전문으로 하는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 해산물 요리", "전통적인 하카 스타일의 음식"],
        tips: ["해산물을 좋아한다면 꼭 방문해보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물·하카 요리", items: [{ name: "대표 메뉴", price: "RM40~150", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:00, 오후 5:30~10:00; 화요일: 오전 11:30 ~ 오후 2:00, 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://hakkakl.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9796333899413981089", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
