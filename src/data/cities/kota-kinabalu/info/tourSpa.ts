import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "툰쿠 압둘 라만 해양공원": {
        photos: ["/images/kota-kinabalu/info/tourSpa/tunku-abdul-rahman-marine-park-kota-kinabalu.jpg"],
        summary: "시내 앞 섬들을 연결하는 코타키나발루 대표 호핑 투어 코스입니다.",
        updatedAt: "2026-07-15",
        highlights: ["시내 근처의 뛰어난 접근성", "다양한 섬을 둘러보는 즐거움"],
        tips: ["섬마다 분위기가 다르니 취향에 맞춰 방문해 보세요."],
        hours: "방문 전 확인 권장",
        duration: "반나절~1일",
        price: "투어별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "말레이시아 사바 코타키나바루", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.sabahparks.org.my/tunku-abdul-rahman-park", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7656771177980292590", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%88%B0%EC%BF%A0+%EC%95%95%EB%91%98+%EB%9D%BC%EB%A7%8C+%ED%95%B4%EC%96%91%EA%B3%B5%EC%9B%90+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마누칸 섬": {
        photos: ["/images/kota-kinabalu/info/tourSpa/manukan-island-kota-kinabalu.jpg"],
        summary: "스노클링과 해변 휴식을 동시에 즐기기 가장 좋은 인기 섬입니다.",
        updatedAt: "2026-07-15",
        highlights: ["맑은 바다에서의 스노클링", "여유로운 비치 휴양"],
        tips: ["편의시설이 잘 갖춰져 있어 가족 단위 여행객에게 추천해요."],
        hours: "방문 전 확인 권장",
        duration: "반나절",
        price: "보트·입장료 별도",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Manukan Island, 말레이시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5071543929126660700", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%88%84%EC%B9%B8+%EC%84%AC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사피 섬": {
        photos: ["/images/kota-kinabalu/info/tourSpa/sapi-island-kota-kinabalu.jpg"],
        summary: "투명한 바다에서 다채로운 해양 액티비티를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-15",
        highlights: ["환상적인 물빛과 스노클링", "에너지 넘치는 해양 스포츠"],
        tips: ["액티브한 활동을 선호한다면 사피 섬이 최고의 선택이에요."],
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        duration: "반나절",
        price: "보트·입장료 별도",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "sapi island, K.K, Kota Kinabalu, 88000, Sabah, 말레이시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://osini.co/boni.island.hopping.com", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1267939464383931208", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%ED%94%BC+%EC%84%AC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마무틱 섬": {
        photos: ["/images/kota-kinabalu/info/tourSpa/mamutik-island-kota-kinabalu.jpg"],
        summary: "조용하게 스노클링을 즐기기 좋은 평화로운 호핑 섬입니다.",
        updatedAt: "2026-07-15",
        highlights: ["맑은 바닷속 스노클링", "여유로운 휴식"],
        tips: ["인파가 적어 한적한 시간을 보내고 싶을 때 추천해요."],
        hours: "월요일: 오전 8:30 ~ 오후 6:00; 화요일: 휴무일",
        duration: "반나절",
        price: "보트·입장료 별도",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Pulau Mamutik, Jalan Kota Kinabalu Lama 1, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu, Sabah, 말레이시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.sabahtourism.com/destination/tunku-abdul-rahman-park", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3869720873369560508", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%AC%B4%ED%8B%B1+%EC%84%AC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "탄중아루 비치": {
        photos: ["/images/kota-kinabalu/info/tourSpa/tanjung-aru-beach-kota-kinabalu.jpg"],
        summary: "코타키나발루에서 가장 아름다운 선셋을 만날 수 있는 필수 코스입니다.",
        updatedAt: "2026-07-15",
        highlights: ["환상적인 일몰", "해변 산책과 야시장"],
        tips: ["일몰 시간 맞춰 미리 자리를 잡는 것이 좋아요."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "9, Jalan Aru, Tanjung Aru, 88100 Kota Kinabalu, Sabah, 말레이시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12022989930429919093", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%84%EC%A4%91%EC%95%84%EB%A3%A8+%EB%B9%84%EC%B9%98+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코콜 힐": {
        photos: ["/images/kota-kinabalu/info/tourSpa/kokol-hill-kota-kinabalu.jpg"],
        summary: "시내와 바다를 한눈에 담을 수 있는 탁 트인 전망 명소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["파노라마 뷰", "시원한 산들바람"],
        tips: ["해 질 녘에 방문하면 더욱 로맨틱한 풍경을 볼 수 있어요."],
        hours: "방문 전 확인 권장",
        duration: "2~4시간",
        price: "이동비 별도",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "말레이시아 89200 사바 코타키나바루", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13600919087136953534", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EC%BD%9C+%ED%9E%90+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마리마리 문화마을": {
        photos: ["/images/kota-kinabalu/info/tourSpa/mari-mari-cultural-village-kota-kinabalu.jpg"],
        summary: "사바 원주민의 전통 생활 방식을 생생하게 체험할 수 있는 민속촌입니다.",
        updatedAt: "2026-07-15",
        highlights: ["원주민 전통 가옥 관람", "전통 음식 및 문화 체험"],
        tips: ["활동적인 투어를 위해 편한 복장을 추천해요."],
        hours: "월요일: 오전 10:00 ~ 오후 1:00, 오후 2:00~5:00; 화요일: 오전 10:00 ~ 오후 1:00, 오후 2:00~5:00",
        duration: "3~4시간",
        price: "투어별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Road, Jalan Kionsom, Inanam, 88450 Kota Kinabalu, Sabah, 말레이시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.marimariculturalvillage.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4270562597201813531", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A6%AC%EB%A7%88%EB%A6%AC+%EB%AC%B8%ED%99%94%EB%A7%88%EC%9D%84+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사바 주립 모스크": {
        photos: ["/images/kota-kinabalu/info/tourSpa/sabah-state-mosque-kota-kinabalu.jpg"],
        summary: "코타키나발루를 대표하는 웅장하고 아름다운 이슬람 건축물입니다.",
        updatedAt: "2026-07-15",
        highlights: ["정교한 이슬람 양식의 건축미", "사바 지역의 종교적 상징성"],
        tips: ["사원 내부 입장 시 복장 규정을 꼭 확인하세요."],
        hours: "월요일: 오전 4:00 ~ 오후 11:00; 화요일: 오전 4:00 ~ 오후 11:00",
        duration: "30분~1시간",
        price: "무료 또는 기부",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Jln Tunku Abdul Rahman, 88100 Kota Kinabalu, Sabah, 말레이시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/pengurusanmns", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13954136716553707405", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EB%B0%94+%EC%A3%BC%EB%A6%BD+%EB%AA%A8%EC%8A%A4%ED%81%AC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코타키나발루 시립 모스크": {
        photos: ["/images/kota-kinabalu/info/tourSpa/kota-kinabalu-city-mosque.jpg"],
        summary: "물 위에 떠 있는 듯한 신비로운 분위기의 블루 모스크입니다.",
        updatedAt: "2026-07-15",
        highlights: ["푸른 빛의 아름다운 외관", "물에 비친 반영 사진 명소"],
        tips: ["일몰 시간대에 맞춰 방문하면 더욱 환상적인 야경을 볼 수 있어요."],
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        duration: "30분~1시간",
        price: "입장료 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Jalan Pasir, Jalan Teluk Likas, Kampung Likas, 88400 Kota Kinabalu, Sabah, 말레이시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://sites.google.com/view/mbrkotakinabalu/home", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6055474541319108902", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%EC%8B%9C%EB%A6%BD+%EB%AA%A8%EC%8A%A4%ED%81%AC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "앳킨슨 시계탑": {
        photos: ["/images/kota-kinabalu/info/tourSpa/atkinson-clock-tower-kota-kinabalu.jpg"],
        summary: "시내 산책 중 들르기 좋은 역사 랜드마크",
        updatedAt: "2026-07-15",
        highlights: ["시내 산책 중 들르기 좋은 역사 랜드마크", "평점 4.3", "코타키나발루 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 7:00 ~ 오후 7:00; 화요일: 오전 7:00 ~ 오후 7:00",
        duration: "30분",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Kota Kinabalu, 88000 Kota Kinabalu, Sabah, 말레이시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11774306015716581928", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%B3%ED%82%A8%EC%8A%A8+%EC%8B%9C%EA%B3%84%ED%83%91+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시그널 힐 전망대": {
        photos: ["/images/kota-kinabalu/info/tourSpa/signal-hill-observatory-platform-kota-kinabalu.jpg"],
        summary: "시내와 항구를 내려다보는 전망 포인트",
        updatedAt: "2026-07-15",
        highlights: ["시내와 항구를 내려다보는 전망 포인트", "평점 4", "코타키나발루 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "30분~1시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "78, Jalan Asrama, signal hills, 88400 Kota Kinabalu, Sabah, 말레이시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4894046366784663560", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EA%B7%B8%EB%84%90+%ED%9E%90+%EC%A0%84%EB%A7%9D%EB%8C%80+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "키울루 래프팅": {
        photos: ["/images/kota-kinabalu/info/tourSpa/kiulu-white-water-rafting-sabah.jpg"],
        summary: "초보자도 접근 쉬운 래프팅 투어",
        updatedAt: "2026-07-15",
        highlights: ["초보자도 접근 쉬운 래프팅 투어", "평점 4.5", "코타키나발루 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:00 ~ 오후 4:30; 화요일: 오전 8:00 ~ 오후 4:30",
        duration: "반나절~1일",
        price: "투어별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Jalan Tamparuli Kiulu, 89250 Tamparuli, Sabah, 말레이시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.riverbug.asia/kiulu.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8355110347865255783", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A4%EC%9A%B8%EB%A3%A8+%EB%9E%98%ED%94%84%ED%8C%85+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "포링 온천": {
        photos: ["/images/kota-kinabalu/info/tourSpa/poring-hot-spring-sabah.jpg"],
        summary: "키나발루 공원 근처에서 즐기는 따뜻한 노천 온천과 짜릿한 캐노피 워크",
        updatedAt: "2026-07-15",
        highlights: ["따끈한 천연 온천욕", "스릴 넘치는 캐노피 워크"],
        tips: ["캐노피 워크는 꼭 같이 즐겨보세요"],
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        duration: "반나절~1일",
        price: "투어별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "말레이시아 89300 사바 라나우", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.sabahparks.org.my/kinabalu-park/poring", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7931422612427020010", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%EB%A7%81+%EC%98%A8%EC%B2%9C+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "키나발루 공원": {
        photos: ["/images/kota-kinabalu/info/tourSpa/kinabalu-park-sabah.jpg"],
        summary: "유네스코 세계자연유산으로 지정된 웅장하고 신비로운 국립공원",
        updatedAt: "2026-07-15",
        highlights: ["압도적인 산맥 풍경", "다양한 식생 탐방"],
        tips: ["트레킹 시 편안한 운동화는 필수"],
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        duration: "반나절~1일",
        price: "투어별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "말레이시아 89300 사바 라나우", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5418994279319339838", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%EA%B3%B5%EC%9B%90+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "데사 데어리 팜": {
        photos: ["/images/kota-kinabalu/info/tourSpa/desa-dairy-farm-sabah.jpg"],
        summary: "쿤다상 고원의 푸른 초원에서 만나는 뉴질랜드 감성 목장",
        updatedAt: "2026-07-15",
        highlights: ["탁 트인 고원 풍경", "신선한 유제품 시식"],
        tips: ["인생샷을 위해 밝은 옷을 추천해요"],
        hours: "방문 전 확인 권장",
        duration: "반나절~1일",
        price: "입장료 확인",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "2H5V+VF, 89308 Kundasang, Sabah, 말레이시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11384939314768585331", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%B0%EC%82%AC+%EB%8D%B0%EC%96%B4%EB%A6%AC+%ED%8C%9C+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
