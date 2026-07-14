import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "빅토리아 피크": {
        photos: ["/images/hong-kong/info/tourSpa/victoria-peak-hong-kong.jpg"],
        summary: "홍콩의 화려한 스카이라인을 한눈에 담을 수 있는 최고의 전망 명소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["파노라마 야경", "도심 전경"],
        tips: ["해 질 녘에 맞춰 올라가면 낮과 밤의 풍경을 모두 즐길 수 있어요."],
        hours: "방문 전 확인 권장",
        duration: "2~3시간",
        price: "피크트램/전망대 별도",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "홍콩 The Peak, 빅토리아 피크", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.hk-victoria-peak.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3328594691076231992", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%85%ED%86%A0%EB%A6%AC%EC%95%84+%ED%94%BC%ED%81%AC+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "피크트램": {
        photos: ["/images/hong-kong/info/tourSpa/peak-tram-hong-kong.jpg"],
        summary: "가파른 경사를 따라 빅토리아 피크까지 색다른 재미를 선사하는 트램입니다.",
        updatedAt: "2026-07-14",
        highlights: ["클래식한 탑승 경험", "창밖으로 펼쳐지는 도심 뷰"],
        tips: ["오른쪽 좌석에 앉아야 홍콩 시내 뷰가 더 잘 보여요."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "티켓별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "The Peak, 홍콩", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3622637794751733382", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%ED%81%AC%ED%8A%B8%EB%9E%A8+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "침사추이 산책로": {
        photos: ["/images/hong-kong/info/tourSpa/tsim-sha-tsui-promenade-hong-kong.jpg"],
        summary: "빅토리아 하버의 아름다운 해안선을 따라 여유롭게 산책하기 좋은 곳입니다.",
        updatedAt: "2026-07-14",
        highlights: ["심포니 오브 라이트 관람", "하버 뷰 조망"],
        tips: ["저녁 레이저 쇼 시간에 맞춰 방문하는 것을 추천해요."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Tsim Sha Tsui Promenade, 홍콩", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7052579378725774183", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%A8%EC%82%AC%EC%B6%94%EC%9D%B4+%EC%82%B0%EC%B1%85%EB%A1%9C+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스타의 거리": {
        photos: ["/images/hong-kong/info/tourSpa/avenue-of-stars-hong-kong.jpg"],
        summary: "홍콩 스카이라인을 한눈에 담을 수 있는 최고의 야경 명소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["빅토리아 하버의 환상적인 야경", "홍콩 영화 스타들의 핸드프린팅"],
        tips: ["심포니 오브 라이트 시간에 맞춰 방문하는 것을 추천해요."],
        hours: "방문 전 확인 권장",
        duration: "1시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Ave of Stars, 홍콩", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4047923852834211255", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%83%80%EC%9D%98+%EA%B1%B0%EB%A6%AC+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "홍콩 디즈니랜드": {
        photos: ["/images/hong-kong/info/tourSpa/hong-kong-disneyland.jpg"],
        summary: "동화 속 세상이 펼쳐지는 아이와 어른 모두를 위한 테마파크입니다.",
        updatedAt: "2026-07-14",
        highlights: ["겨울왕국 테마 구역", "화려한 야간 불꽃놀이"],
        tips: ["인기 어트랙션 대기 시간을 줄이려면 공식 앱을 꼭 확인하세요."],
        hours: "월요일: 오전 10:30 ~ 오후 8:00; 화요일: 오전 10:30 ~ 오후 8:00",
        duration: "하루",
        price: "티켓별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Lantau Island, 홍콩", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.hongkongdisneyland.com/?CMP=OKC-HKDL_gmap_hkdlpark", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3869629387062596613", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%8D%EC%BD%A9+%EB%94%94%EC%A6%88%EB%8B%88%EB%9E%9C%EB%93%9C+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오션파크 홍콩": {
        photos: ["/images/hong-kong/info/tourSpa/ocean-park-hong-kong.jpg"],
        summary: "짜릿한 놀이기구와 귀여운 판다를 동시에 만날 수 있는 곳입니다.",
        updatedAt: "2026-07-14",
        highlights: ["스릴 넘치는 어트랙션", "대형 아쿠아리움과 판다 관람"],
        tips: ["바다 전망을 즐기며 여유롭게 둘러보세요."],
        hours: "방문 전 확인 권장",
        duration: "반일~하루",
        price: "티켓별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Ocean Park, 홍콩", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10255315948302758308", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%85%98%ED%8C%8C%ED%81%AC+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "옹핑 360 케이블카": {
        photos: ["/images/hong-kong/info/tourSpa/ngong-ping-360-hong-kong.jpg"],
        summary: "란타우 섬의 아름다운 풍경을 한눈에 담는 짜릿한 케이블카 여행.",
        updatedAt: "2026-07-14",
        highlights: ["바닥이 투명한 크리스탈 캐빈", "란타우 섬의 탁 트인 파노라마 뷰"],
        tips: ["날씨가 맑은 날 방문해야 선명한 풍경을 즐길 수 있어요."],
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        duration: "2~4시간",
        price: "티켓별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "홍콩 Lantau Island, 鳳凰徑第四段", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.np360.com.hk/en/things-to-do/nearby-attractions/ngong-ping-viewing-platform", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12893994512111013731", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%B9%ED%95%91+360+%EC%BC%80%EC%9D%B4%EB%B8%94%EC%B9%B4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "천단대불": {
        photos: ["/images/hong-kong/info/tourSpa/tian-tan-buddha-hong-kong.jpg"],
        summary: "거대한 불상과 함께 마음이 평온해지는 란타우 섬의 상징적인 명소.",
        updatedAt: "2026-07-14",
        highlights: ["웅장한 규모의 대좌와 불상", "포린 사원의 고즈넉한 분위기"],
        tips: ["계단이 많으니 꼭 편한 운동화를 신고 가세요."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Po Lin Monastery, Ngong Ping, 홍콩", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13293090703576149032", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B2%9C%EB%8B%A8%EB%8C%80%EB%B6%88+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "타이오 어촌마을": {
        photos: ["/images/hong-kong/info/tourSpa/tai-o-fishing-village-hong-kong.jpg"],
        summary: "홍콩의 옛 정취를 그대로 간직한 평화로운 수상 가옥 마을.",
        updatedAt: "2026-07-14",
        highlights: ["아기자기한 수상 가옥 풍경", "돌고래 관찰 보트 투어"],
        tips: ["작은 보트를 타고 마을 한 바퀴를 도는 코스를 추천해요."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "2~3시간",
        price: "무료/보트 별도",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "홍콩 타이 오", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8039283459564625042", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%9D%B4%EC%98%A4+%EC%96%B4%EC%B4%8C%EB%A7%88%EC%9D%84+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "만모사원": {
        photos: ["/images/hong-kong/info/tourSpa/man-mo-temple-hong-kong.jpg"],
        summary: "Man Mo Temple 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["Man Mo Temple", "평점 4.3", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:00 ~ 오후 6:00; 화요일: 오전 8:00 ~ 오후 6:00",
        duration: "30분~1시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Man Mo Temple, 124-130 Hollywood Rd, Sheung Wan, 홍콩", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://hongkongfuns.com/manmo", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1534238293208784867", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%EB%AA%A8%EC%82%AC%EC%9B%90+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
