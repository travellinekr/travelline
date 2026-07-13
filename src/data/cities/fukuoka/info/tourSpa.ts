import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "오호리 공원": {
        photos: ["/images/fukuoka/info/tourSpa/ohori-park-fukuoka.jpg"],
        summary: "도심 속 호수 산책과 카페 투어를 즐기기 좋은 힐링 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["여유로운 호숫가 산책로", "공원 내 감성적인 카페들"],
        tips: ["피크닉 매트를 챙겨가면 더욱 여유로운 시간을 보낼 수 있어요."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒810-0051 Fukuoka, Chuo Ward, Ōhorikōen, 1 公園管理事務所", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.ohorikouen.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14839213291318671256", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%ED%98%B8%EB%A6%AC+%EA%B3%B5%EC%9B%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "후쿠오카 타워": {
        photos: ["/images/fukuoka/info/tourSpa/fukuoka-tower.jpg"],
        summary: "모모치 해변의 아름다운 전망과 야경을 한눈에 담는 곳입니다.",
        updatedAt: "2026-07-13",
        highlights: ["탁 트인 바다 뷰", "환상적인 일몰과 야경"],
        tips: ["해질녘에 맞춰 방문해 노을과 야경을 모두 감상해 보세요."],
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "2-chōme-3-26 Momochihama, Sawara Ward, Fukuoka, 814-0001 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.fukuokatower.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17975057117492187437", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%83%80%EC%9B%8C+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다자이후 텐만구": {
        photos: ["/images/fukuoka/info/tourSpa/dazaifu-tenmangu-fukuoka.jpg"],
        summary: "학문의 신을 모신 신사로, 맛있는 간식거리와 함께 즐기는 근교 여행지입니다.",
        updatedAt: "2026-07-13",
        highlights: ["고즈넉한 참배길", "명물 우메가에모치"],
        tips: ["참배길 주변의 다양한 길거리 음식을 맛보는 재미를 놓치지 마세요."],
        hours: "월요일: 오전 6:00 ~ 오후 7:30; 화요일: 오전 6:00 ~ 오후 7:30",
        duration: "반나절",
        price: "무료 구역 중심",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "4-chōme-7-1 Saifu, Dazaifu, Fukuoka 818-0117 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.dazaifutenmangu.or.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13268960937318002327", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9E%90%EC%9D%B4%ED%9B%84+%ED%85%90%EB%A7%8C%EA%B5%AC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "구시다 신사": {
        photos: ["/images/fukuoka/info/tourSpa/kushida-shrine-fukuoka.jpg"],
        summary: "하카타 기온 야마카사와 연결되는 도심 대표 신사입니다.",
        updatedAt: "2026-07-13",
        highlights: ["하카타 기온 야마카사와 연결되는 도심 대표 신사입니다.", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "30분~1시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1-41 Kamikawabatamachi, Hakata Ward, Fukuoka, 812-0026 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://fukuoka-jinjacho.or.jp/area/fukuoka/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11639954002556587428", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%AC%EC%8B%9C%EB%8B%A4+%EC%8B%A0%EC%82%AC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "팀랩 포레스트 후쿠오카": {
        photos: ["/images/fukuoka/info/tourSpa/teamlab-forest-fukuoka.jpg"],
        summary: "모모치권 실내 미디어아트 전시로 날씨 영향이 적습니다.",
        updatedAt: "2026-07-13",
        highlights: ["모모치권 실내 미디어아트 전시로 날씨 영향이 적습니다.", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 11:00 ~ 오후 7:00; 화요일: 오전 11:00 ~ 오후 7:00",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒810-0065 Fukuoka, Chuo Ward, Jigyōhama, 2-chōme−2−６ 5F BOSS E・ZO FUKUOKA", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.teamlab.art/jp/e/forest/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=946617048746295340", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%80%EB%9E%A9+%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마린월드 우미노나카미치": {
        photos: ["/images/fukuoka/info/tourSpa/marine-world-uminonakamichi-fukuoka.png"],
        summary: "하카타만 전망과 돌고래 쇼가 있는 가족 여행 인기 수족관입니다.",
        updatedAt: "2026-07-13",
        highlights: ["하카타만 전망과 돌고래 쇼가 있는 가족 여행 인기 수족관입니다.", "평점 4.5", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:30 ~ 오후 5:30; 화요일: 오전 9:30 ~ 오후 5:30",
        duration: "2~3시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "18-28 Saitozaki, Higashi Ward, Fukuoka, 811-0321 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.marine-world.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13779341237293466180", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A6%B0%EC%9B%94%EB%93%9C+%EC%9A%B0%EB%AF%B8%EB%85%B8%EB%82%98%EC%B9%B4%EB%AF%B8%EC%B9%98+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우미노나카미치 해변공원": {
        photos: ["/images/fukuoka/info/tourSpa/uminonakamichi-seaside-park-fukuoka.jpg"],
        summary: "넓은 계절 꽃밭과 자전거 동선이 좋은 대형 해변공원입니다.",
        updatedAt: "2026-07-13",
        highlights: ["넓은 계절 꽃밭과 자전거 동선이 좋은 대형 해변공원입니다.", "평점 4.5", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:30 ~ 오후 5:30; 화요일: 휴무일",
        duration: "반나절",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "18-25 Saitozaki, Higashi Ward, Fukuoka, 811-0321 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://uminaka-park.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13681811987032125839", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%AF%B8%EB%85%B8%EB%82%98%EC%B9%B4%EB%AF%B8%EC%B9%98+%ED%95%B4%EB%B3%80%EA%B3%B5%EC%9B%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "노코노시마 아일랜드 파크": {
        photos: ["/images/fukuoka/info/tourSpa/nokonoshima-island-park-fukuoka.jpg"],
        summary: "페리로 다녀오는 섬 꽃밭과 하카타만 전망 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["페리로 다녀오는 섬 꽃밭과 하카타만 전망 명소입니다.", "평점 4.4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 5:30; 화요일: 오전 9:00 ~ 오후 5:30",
        duration: "반나절",
        price: "입장료·페리 별도",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒819-0012 福岡県福岡市西区能古島", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://nokonoshima.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14813712857181706771", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%B8%EC%BD%94%EB%85%B8%EC%8B%9C%EB%A7%88+%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%ED%8C%8C%ED%81%AC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "난조인": {
        photos: ["/images/fukuoka/info/tourSpa/nanzoin-temple-fukuoka.png"],
        summary: "거대한 와불상으로 유명한 후쿠오카 근교 사찰입니다.",
        updatedAt: "2026-07-13",
        highlights: ["거대한 와불상으로 유명한 후쿠오카 근교 사찰입니다.", "평점 4.5", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 4:30; 화요일: 오전 9:00 ~ 오후 4:30",
        duration: "반나절",
        price: "무료 구역 중심",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1035 Sasaguri, Kasuya District, Fukuoka 811-2405 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://nanzoin.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15558845831406787965", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%9C%EC%A1%B0%EC%9D%B8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "캐널시티 하카타 분수쇼": {
        photos: ["/images/fukuoka/info/tourSpa/canal-city-hakata-fountain-show-fukuoka.jpg"],
        summary: "쇼핑 중간에 보기 좋은 캐널시티의 무료 분수·라이트 쇼입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쇼핑 중간에 보기 좋은 캐널시티의 무료 분수·라이트 쇼입니다.", "평점 4.5", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        duration: "30분~1시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1 Chome-2 Sumiyoshi, Hakata Ward, Fukuoka, 812-0018 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://canalcity.co.jp/zh-tw/event/detail/503", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15050275969203417903", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BA%90%EB%84%90%EC%8B%9C%ED%8B%B0+%ED%95%98%EC%B9%B4%ED%83%80+%EB%B6%84%EC%88%98%EC%87%BC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
