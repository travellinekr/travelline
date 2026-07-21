import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "바나힐 썬월드": {
        photos: ["/images/da-nang/info/tourSpa/sun-world-ba-na-hills-da-nang.png"],
        summary: "골든브릿지와 케이블카로 유명한 다낭 대표 테마파크입니다.",
        updatedAt: "2026-07-13",
        highlights: ["골든브릿지", "케이블카 탑승"],
        tips: ["케이블카를 타고 멋진 풍경을 감상해 보세요."],
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        duration: "반나절~1일",
        price: "입장권/투어 상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Ba Na, Da Nang, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6652863794353109257", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EB%82%98%ED%9E%90+%EC%8D%AC%EC%9B%94%EB%93%9C+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오행산": {
        photos: ["/images/da-nang/info/tourSpa/the-marble-mountains-da-nang.jpg"],
        summary: "동굴, 사원, 전망 포인트를 함께 즐길 수 있는 다낭 남부 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["신비로운 동굴", "사원 탐방", "전망 포인트"],
        tips: ["계단이 많으니 편한 신발을 착용하세요."],
        hours: "월요일: 오전 7:00 ~ 오후 5:30; 화요일: 오전 7:00 ~ 오후 5:30",
        duration: "1~2시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "81 Huyền Trân Công Chúa, Hoà Hải, Ngũ Hành Sơn, Đà Nẵng 550000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://nguhanhson.org/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13577824764986909893", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%ED%96%89%EC%82%B0+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "린응사": {
        photos: ["/images/da-nang/info/tourSpa/linh-ung-pagoda-son-tra-da-nang.jpg"],
        summary: "선짜반도의 해안 전망과 거대한 해수관음상이 대표적인 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해수관음상", "선짜반도 해안 뷰"],
        tips: ["탁 트인 바다를 배경으로 멋진 사진을 남겨보세요."],
        hours: "월요일: 오전 6:30 ~ 오후 5:30; 화요일: 오전 6:30 ~ 오후 5:30",
        duration: "1~2시간",
        price: "무료 또는 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Vườn Lâm Tỳ Ni, Hoàng Sa, Sơn Trà, Đà Nẵng, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4339303802408387579", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%B0%EC%9D%91%EC%82%AC+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "누이탄타이 온천파크": {
        photos: ["/images/da-nang/info/tourSpa/nui-than-tai-hot-springs-park-da-nang.jpg"],
        summary: "온천, 워터파크, 머드스파를 동시에 즐기는 교외 휴양 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["온천욕", "워터파크", "머드스파"],
        tips: ["가족 단위의 힐링 여행지로 추천합니다."],
        hours: "월요일: 오전 8:30 ~ 오후 5:30; 화요일: 오전 8:30 ~ 오후 5:30",
        duration: "반나절~1일",
        price: "입장권/패키지별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Thôn Phú Túc, Hoa Vang, Da Nang 550000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://nuithantai.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17322092107953916815", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%88%84%EC%9D%B4%ED%83%84%ED%83%80%EC%9D%B4+%EC%98%A8%EC%B2%9C%ED%8C%8C%ED%81%AC+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미선 유적 투어": {
        photos: ["/images/da-nang/info/tourSpa/my-son-sanctuary-da-nang-tour.jpg"],
        summary: "참파 왕국 유적을 둘러보는 다낭/호이안 연계 대표 문화 투어입니다.",
        updatedAt: "2026-07-13",
        highlights: ["참파 왕국 유적", "역사 탐방"],
        tips: ["다낭과 호이안 여행 시 함께 방문하기 좋습니다."],
        hours: "월요일: 오전 5:00 ~ 오후 11:00; 화요일: 오전 5:00 ~ 오후 11:00",
        duration: "반나절",
        price: "투어 상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Nguyễn Tất Thành/448 Bầu ốc thượng, Hamlet, Hội An Tây, Đà Nẵng 51300 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://mysontour.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=611510008298520272", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%84%A0+%EC%9C%A0%EC%A0%81+%ED%88%AC%EC%96%B4+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "한강 야경 크루즈": {
        photos: ["/images/da-nang/info/tourSpa/da-nang-han-river-dragon-cruise.jpg"],
        summary: "한강의 아름다운 야경과 용다리를 배 위에서 감상하는 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["한강 야경", "용다리 관람"],
        tips: ["저녁 시간대에 탑승하여 화려한 야경을 즐겨보세요."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~2시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "32 Bạch Đằng, Hải Châu, Đà Nẵng 50000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://veduthuyen.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17123142639192010901", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%9C%EA%B0%95+%EC%95%BC%EA%B2%BD+%ED%81%AC%EB%A3%A8%EC%A6%88+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미카즈키 워터파크 365": {
        photos: ["/images/da-nang/info/tourSpa/mikazuki-water-park-365-da-nang.jpg"],
        summary: "실내외 워터파크와 온천 시설을 갖춘 가족형 휴양 시설입니다.",
        updatedAt: "2026-07-13",
        highlights: ["실내외 워터파크", "온천 시설"],
        tips: ["아이들과 함께 즐기기 좋은 가족형 테마파크입니다."],
        hours: "월요일: 오전 9:00 ~ 오후 7:00; 화요일: 오전 9:00 ~ 오후 7:00",
        duration: "반나절",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Khu du lịch Xuân Thiều, Nguyễn Tất Thành, Hải Vân, Đà Nẵng 55000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.mikazukiwaterpark.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12545002484952220341", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%B9%B4%EC%A6%88%ED%82%A4+%EC%9B%8C%ED%84%B0%ED%8C%8C%ED%81%AC+365+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "퀸스파 다낭": {
        photos: ["/images/da-nang/info/tourSpa/spa-da-nang-da-nang.jpg"],
        summary: "다낭 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "144 Phạm Cự Lượng, An Hải, Đà Nẵng 550000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%ED%80%B8%20%EC%8A%A4%ED%8C%8C&query_place_id=ChIJjwHqn9UZQjERfjpTNTc-qEU", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%80%B8%EC%8A%A4%ED%8C%8C%20%EB%8B%A4%EB%82%AD%20%EB%8B%A4%EB%82%AD%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "허벌스파 다낭": {
        photos: ["/images/da-nang/info/tourSpa/spa-da-nang-tp-ontzm.jpg"],
        summary: "다낭 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "201 D. Đình Nghệ, An Hải, Đà Nẵng 550000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Herbal%20Spa&query_place_id=ChIJ6dOY7ykYQjER0aPtP-ONTzM", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%88%EB%B2%8C%EC%8A%A4%ED%8C%8C%20%EB%8B%A4%EB%82%AD%20%EB%8B%A4%EB%82%AD%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "참스파 다낭": {
        photos: ["/images/da-nang/info/tourSpa/spa-da-nang-lqfsuyno.jpg"],
        summary: "다낭 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "05 Lê Quang Hòa, Hòa Xuân, Đà Nẵng 550000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Cham%20Riverside%3A%20Onsen%20-%20Jjimjilbang%20-%20Spa&query_place_id=ChIJFUCvTfcZQjERqNOlqFsuYno", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B0%B8%EC%8A%A4%ED%8C%8C%20%EB%8B%A4%EB%82%AD%20%EB%8B%A4%EB%82%AD%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "아난스파 다낭": {
        photos: ["/images/da-nang/info/tourSpa/spa-da-nang-k3u3d1oc.jpg"],
        summary: "다낭 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "11A Trần Quốc Toản, Hải Châu, Đà Nẵng 550000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EB%8B%A4%EB%82%AD%20%EB%A7%88%EC%82%AC%EC%A7%80%20%EC%8A%A4%ED%8C%8C%20%EC%95%A0%EB%82%98%20%EC%8A%A4%ED%8C%8C%20DANANG%20MASSAGE%20ANNA%20SPA&query_place_id=ChIJH0v0Z2UZQjEROUWK3U3D1Oc", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%82%9C%EC%8A%A4%ED%8C%8C%20%EB%8B%A4%EB%82%AD%20%EB%8B%A4%EB%82%AD%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "센스파 다낭": {
        photos: ["/images/da-nang/info/tourSpa/senspa-da-nang-da-nang.jpg"],
        summary: "다낭 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "236 238 Hồ Nghinh, An Hải, Đà Nẵng 550000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EC%84%BC%EC%8A%A4%ED%8C%8C&query_place_id=ChIJGxYcjMgXQjERIteNRvpBvuQ", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%BC%EC%8A%A4%ED%8C%8C%20%EB%8B%A4%EB%82%AD%20%EB%8B%A4%EB%82%AD%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "라스파 다낭": {
        photos: ["/images/da-nang/info/tourSpa/spa-da-nang-l5alux1w.jpg"],
        summary: "다낭 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "132 Hùng Vương, Hội An Tây, Đà Nẵng 560000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=La%20Spa%20Hoi%20An&query_place_id=ChIJ8WcbqCIPQjERGmJL5Alux1w", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%8A%A4%ED%8C%8C%20%EB%8B%A4%EB%82%AD%20%EB%8B%A4%EB%82%AD%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "망고스파 다낭": {
        photos: ["/images/da-nang/info/tourSpa/spa-da-nang-zt-bglhi.jpg"],
        summary: "다낭 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "17 Lâm Hoành, An Hải, Đà Nẵng 550000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Mango%20Spa%20%26%20Nail%20Danang&query_place_id=ChIJA1AK1YcXQjERwZJZt-BGLHI", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%9D%EA%B3%A0%EC%8A%A4%ED%8C%8C%20%EB%8B%A4%EB%82%AD%20%EB%8B%A4%EB%82%AD%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "미우미우스파 다낭": {
        photos: ["/images/da-nang/info/tourSpa/spa-da-nang-bz7yteki.jpg"],
        summary: "다낭 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "120 Trần Bạch Đằng, Ngũ Hành Sơn, Đà Nẵng 550000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Miu%20spa&query_place_id=ChIJq9ekEQwXQjEROEFBz7yTEkI", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%9A%B0%EB%AF%B8%EC%9A%B0%EC%8A%A4%ED%8C%8C%20%EB%8B%A4%EB%82%AD%20%EB%8B%A4%EB%82%AD%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "다낭 풋스파": {
        photos: ["/images/da-nang/info/tourSpa/da-nang-spa-da-nang.jpg"],
        summary: "다낭 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "144 Phạm Cự Lượng, An Hải, Đà Nẵng 550000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%ED%80%B8%20%EC%8A%A4%ED%8C%8C&query_place_id=ChIJjwHqn9UZQjERfjpTNTc-qEU", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EB%82%AD%20%ED%92%8B%EC%8A%A4%ED%8C%8C%20%EB%8B%A4%EB%82%AD%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "다낭 한시장 마사지": {
        photos: ["/images/da-nang/info/tourSpa/da-nang-massage-da-nang.jpg"],
        summary: "다낭 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "36 Hùng Vương, Hải Châu, Đà Nẵng 550000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Han%20Spa%20Massage%20%26%20Nail%20%EB%8B%A4%EB%82%AD%20%ED%95%9C%EC%8B%9C%EC%9E%A5%20%EB%A7%88%EC%82%AC%EC%A7%80%20%EB%84%A4%EC%9D%BC%20%ED%95%9C%EC%8A%A4%ED%8C%8C%20%EB%B3%B8%EC%A0%90&query_place_id=ChIJc_yfNIsZQjERw9mgb8dNH0Y", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EB%82%AD%20%ED%95%9C%EC%8B%9C%EC%9E%A5%20%EB%A7%88%EC%82%AC%EC%A7%80%20%EB%8B%A4%EB%82%AD%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
