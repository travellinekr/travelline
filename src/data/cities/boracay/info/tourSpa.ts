import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "화이트 비치": {
        photos: ["/images/boracay/info/tourSpa/white-beach-boracay.jpg"],
        summary: "보라카이 대표 액티비티",
        updatedAt: "2026-07-15",
        highlights: ["보라카이 대표 액티비티", "평점 4.6", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "White Beach, Boracay, Aklan, 필리핀", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.whitebeachboracay.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4917457344593196210", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%94%EC%9D%B4%ED%8A%B8+%EB%B9%84%EC%B9%98+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "푸카 쉘 비치": {
        photos: ["/images/boracay/info/tourSpa/puka-shell-beach-boracay.jpg"],
        summary: "보라카이 대표 액티비티",
        updatedAt: "2026-07-15",
        highlights: ["보라카이 대표 액티비티", "평점 4.5", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "필리핀 푸카 셸 비치", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3341578129462757940", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EC%B9%B4+%EC%89%98+%EB%B9%84%EC%B9%98+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "디니위드 비치": {
        photos: ["/images/boracay/info/tourSpa/diniwid-beach-boracay.jpg"],
        summary: "보라카이 대표 액티비티",
        updatedAt: "2026-07-15",
        highlights: ["보라카이 대표 액티비티", "평점 4.5", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "950 Din-Iwid Rd, Malay, 5608 Aklan, 필리핀", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11338223564412897110", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94%EB%8B%88%EC%9C%84%EB%93%9C+%EB%B9%84%EC%B9%98+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "불라복 비치": {
        photos: ["/images/boracay/info/tourSpa/bulabog-beach-boracay.jpg"],
        summary: "보라카이의 역동적인 에너지를 느낄 수 있는 수상 스포츠의 천국",
        updatedAt: "2026-07-15",
        highlights: ["윈드서핑과 카이트서핑 성지", "활기찬 해변 분위기"],
        tips: ["바람이 강한 시즌에 방문하면 더 다양한 액티비티를 즐길 수 있어요"],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "필리핀 불라복 비치", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3064532139371220294", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%88%EB%9D%BC%EB%B3%B5+%EB%B9%84%EC%B9%98+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "루호산 전망대": {
        photos: ["/images/boracay/info/tourSpa/mount-luho-boracay.jpg"],
        summary: "보라카이 대표 액티비티",
        updatedAt: "2026-07-15",
        highlights: ["보라카이 대표 액티비티", "평점 3.4", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "필리핀 어클란 말레이 루호 산", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9461910832689008899", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A3%A8%ED%98%B8%EC%82%B0+%EC%A0%84%EB%A7%9D%EB%8C%80+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "윌리스 록": {
        photos: ["/images/boracay/info/tourSpa/willys-rock-boracay.jpg"],
        summary: "보라카이의 상징적인 바위와 성모 마리아상이 있는 아름다운 명소",
        updatedAt: "2026-07-15",
        highlights: ["에메랄드빛 바다와 조화로운 바위", "인생샷 스팟"],
        tips: ["물때를 확인하고 방문하면 더 선명한 사진을 찍을 수 있어요"],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "필리핀 어클란 말레이 XW99+7FW", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11756540478453161572", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%8C%EB%A6%AC%EC%8A%A4+%EB%A1%9D+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "보라카이 호핑투어": {
        photos: ["/images/boracay/info/tourSpa/boracay-island-hopping.jpg"],
        summary: "보라카이 대표 액티비티",
        updatedAt: "2026-07-15",
        highlights: ["보라카이 대표 액티비티", "평점 5", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Bolabog St, Bolabog St, Boracay, Malay, 5608 Aklan, 필리핀", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/BoracayToursbyKuyaAldrien/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6471424279346418103", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%98%B8%ED%95%91%ED%88%AC%EC%96%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아리엘스 포인트": {
        photos: ["/images/boracay/info/tourSpa/ariel-s-point-boracay.jpg"],
        summary: "보라카이 대표 액티비티",
        updatedAt: "2026-07-15",
        highlights: ["보라카이 대표 액티비티", "평점 4.7", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Batason, Buruanga, 5609 Aklan, 필리핀", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://arielspoint.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6238193883404939443", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%A6%AC%EC%97%98%EC%8A%A4+%ED%8F%AC%EC%9D%B8%ED%8A%B8+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크리스탈 코브 아일랜드": {
        photos: ["/images/boracay/info/tourSpa/crystal-cove-island-boracay.jpg"],
        summary: "보라카이 대표 액티비티",
        updatedAt: "2026-07-15",
        highlights: ["보라카이 대표 액티비티", "평점 4.3", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "WXV5+R64 Tabon Point, Nabas, 5618 Aklan, 필리핀", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18020685935505333525", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%83%88+%EC%BD%94%EB%B8%8C+%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "매직 아일랜드": {
        photos: ["/images/boracay/info/tourSpa/magic-island-boracay.jpg"],
        summary: "보라카이 대표 액티비티",
        updatedAt: "2026-07-15",
        highlights: ["보라카이 대표 액티비티", "평점 4.5", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "필리핀 어클란 나바스 WXR4+RR9", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2225556105038621646", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%A4%EC%A7%81+%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "벨라 이사 스파 보라카이": {
        photos: ["/images/boracay/info/tourSpa/spa-boracay-5rjrxwsg.jpg"],
        summary: "보라카이 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "Casa Camilla Boat Station 3, White Beach Path, Angol Road, Boracay Island, Malay, Aklan, 필리핀", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Bella%20Isa%20Spa&query_place_id=ChIJ_____zw8pTMRkyE5RJrXWSg", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A8%EB%9D%BC%20%EC%9D%B4%EC%82%AC%20%EC%8A%A4%ED%8C%8C%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "만달라 스파 보라카이": {
        photos: ["/images/boracay/info/tourSpa/spa-boracay-zthipk7g.jpg"],
        summary: "보라카이 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "Station 3, Boracay Island, Malay, 5608 Aklan, 필리핀", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Mandala%20Spa%20%26%20Resort%20Villas&query_place_id=ChIJh1UL2xc8pTMRd-YZTHiPk7g", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%EB%8B%AC%EB%9D%BC%20%EC%8A%A4%ED%8C%8C%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카이 스파 보라카이": {
        photos: ["/images/boracay/info/tourSpa/spa-boracay-uu0ofrow.jpg"],
        summary: "보라카이 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "PH, BORACAY Malay, 5608 Aklan, 필리핀", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=KABAYAN%20SPA%28%EC%B9%B4%EB%B0%94%EC%96%80%EC%8A%A4%ED%8C%8C%29%20MASSAGE&query_place_id=ChIJP3CNhXU9pTMRp5KUu0Ofrow", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%9D%B4%20%EC%8A%A4%ED%8C%8C%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "티르타 스파 보라카이": {
        photos: ["/images/boracay/info/tourSpa/spa-boracay-4ikqyyyo.jpg"],
        summary: "보라카이 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "Barangay Manocmanoc, Malay, 5608 Aklan, 필리핀", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Tirta%20Spa%20Boracay&query_place_id=ChIJI6GBrIM-pTMROGD4IKqYYYo", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8B%B0%EB%A5%B4%ED%83%80%20%EC%8A%A4%ED%8C%8C%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "포세이돈 스파 보라카이": {
        photos: ["/images/boracay/info/tourSpa/spa-boracay-czmquesk.jpg"],
        summary: "보라카이 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "필리핀 어클란 말레이", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=POSEIDON%20SPA%20Waiting%20Area&query_place_id=ChIJcXzt0CI8pTMRSsMczMqueSk", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%EC%84%B8%EC%9D%B4%EB%8F%88%20%EC%8A%A4%ED%8C%8C%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "야사이 스파 보라카이": {
        photos: ["/images/boracay/info/tourSpa/spa-boracay-u_qahcdw.jpg"],
        summary: "보라카이 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "Station 3 White Beach Path, Angol Boracay Island, Malay, 5608 Aklan, 필리핀", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EC%95%BC%EC%88%98%EB%9D%BC%EA%B8%B0&query_place_id=ChIJW-JvdZw-pTMRcqNu_QahcDw", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%BC%EC%82%AC%EC%9D%B4%20%EC%8A%A4%ED%8C%8C%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "화이트비치 마사지 보라카이": {
        photos: ["/images/boracay/info/tourSpa/massage-boracay-a3ztluii.jpg"],
        summary: "보라카이 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "2nd floor of, Borasky hotel, mainroad, Balabag, Malay, 5608 Aklan, 필리핀", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Emily%20Massage%20%26%20Spa%20Boracay&query_place_id=ChIJgxusNvg9pTMR-nZA3zTlUiI", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%94%EC%9D%B4%ED%8A%B8%EB%B9%84%EC%B9%98%20%EB%A7%88%EC%82%AC%EC%A7%80%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "디몰 마사지 보라카이": {
        photos: ["/images/boracay/info/tourSpa/massage-boracay-7jyat1we.jpg"],
        summary: "보라카이 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "D Mall phase 4, Malay, Aklan, 필리핀", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=D%27Spa%20Boracay&query_place_id=ChIJb1upoiI8pTMRC1K7Jyat1wE", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94%EB%AA%B0%20%EB%A7%88%EC%82%AC%EC%A7%80%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "헬리오스 스파 보라카이": {
        photos: ["/images/boracay/info/tourSpa/spa-boracay-vsc6x7zc.jpg"],
        summary: "보라카이 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "Bantud, Manoc Manoc, Boracay, 5608 Aklan, 필리핀", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%ED%97%AC%EB%A6%AC%EC%98%A4%EC%8A%A4%20%EC%8A%A4%ED%8C%8C&query_place_id=ChIJEUZlAoM-pTMRS71Vsc6x7Zc", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%AC%EB%A6%AC%EC%98%A4%EC%8A%A4%20%EC%8A%A4%ED%8C%8C%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "아리엘 스파 보라카이": {
        photos: ["/images/boracay/info/tourSpa/spa-boracay-dhemekly.jpg"],
        summary: "보라카이 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네이버 후기에서 반복 언급", "Google Places 대표사진 확인", "예약 전 조건 확인 권장"],
        tips: ["공항 픽업·샌딩·샤워 가능 여부를 예약 전 확인하세요.", "팁 포함 여부와 원하는 강도를 미리 말하는 편이 좋습니다."],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "Batason, Buruanga, 5609 Aklan, 필리핀", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Ariel%27s%20Point&query_place_id=ChIJ-9AVGmpHpTMRs7BdHEmEklY", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%A6%AC%EC%97%98%20%EC%8A%A4%ED%8C%8C%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "보라카이 선셋 세일링": {
        photos: ["/images/boracay/info/tourSpa/boracay-sunset-sailing.jpg"],
        summary: "보라카이 화이트 비치에서 만나는 환상적인 선셋 세일링 체험",
        updatedAt: "2026-07-23",
        highlights: ["화이트 비치의 황홀한 일몰 감상", "바다 위에서 즐기는 여유로운 항해"],
        tips: ["해가 지기 전 미리 예약하여 명당 확보하기"],
        duration: "30~60분",
        price: "상품별 상이",
        access: { area: "White Beach, Boracay, Aklan, 필리핀", note: "Google Place Details place_id 기반 화이트비치 집결축 좌표" },
        bestTime: "오후~저녁",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=%ED%99%94%EC%9D%B4%ED%8A%B8%EB%B9%84%EC%B9%98&query_place_id=ChIJa0aowyI8pTMRsvScrmZRPkQ", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%EC%84%A0%EC%85%8B%20%EC%84%B8%EC%9D%BC%EB%A7%81%20%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
