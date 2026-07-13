import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "빈원더스 나트랑": {
        photos: ["/images/nha-trang/info/tourSpa/vinwonders-nha-trang.jpg"],
        summary: "혼쩨섬의 테마파크와 케이블카를 함께 즐기는 대표 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["혼쩨섬의 테마파크와 케이블카를 함께 즐기는 대표 코스입니다.", "평점 4.7", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:30 ~ 오후 8:00; 화요일: 오전 8:30 ~ 오후 8:00",
        duration: "반나절~1일",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Đảo Hòn Tre, Nha Trang, Khánh Hòa, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://booking.vinwonders.com/en-USD/search?code=NTVW1&usingDate=31-10-2025&style=b&VinWonderTagGroupCode=all&utm_source=GG_Business_SEO&utm_medium=&utm_campaign=En__VW_NhaTrang__booking_Website_yennt90&utm_id=&utm_content=", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9397716162511889699", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EC%9B%90%EB%8D%94%EC%8A%A4+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "포나가르 참탑": {
        photos: ["/images/nha-trang/info/tourSpa/po-nagar-cham-towers-nha-trang.jpg"],
        summary: "참파 유적과 시내 전망을 함께 볼 수 있는 나트랑 대표 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["참파 유적과 시내 전망을 함께 볼 수 있는 나트랑 대표 명소입니다.", "평점 4.5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 6:00 ~ 오후 5:30; 화요일: 오전 6:00 ~ 오후 5:30",
        duration: "1~2시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "61 Hai Tháng Tư, Bắc Nha Trang, Khánh Hòa 650000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1251841919817817468", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%EB%82%98%EA%B0%80%EB%A5%B4+%EC%B0%B8%ED%83%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "롱선사": {
        photos: ["/images/nha-trang/info/tourSpa/long-son-pagoda-nha-trang.jpg"],
        summary: "대형 불상과 시내 전망이 있는 나트랑 사찰 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["대형 불상과 시내 전망이 있는 나트랑 사찰 명소입니다.", "평점 4.3", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1시간 내외",
        price: "무료 또는 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "22 Đ. 23 Tháng 10, Tây Nha Trang, Khánh Hòa 650000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1964151982017053726", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%B1%EC%84%A0%EC%82%AC+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "혼문섬 투어": {
        photos: ["/images/nha-trang/info/tourSpa/hon-mun-island-nha-trang.jpg"],
        summary: "스노클링과 섬 투어로 많이 찾는 나트랑 해양 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스노클링과 섬 투어로 많이 찾는 나트랑 해양 코스입니다.", "평점 4.3", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "반나절~1일",
        price: "투어 상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Hòn Mun, Nha Trang, Khánh Hòa, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12870535570708157359", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%BC%EB%AC%B8%EC%84%AC+%ED%88%AC%EC%96%B4+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아이리조트 머드온천": {
        photos: ["/images/nha-trang/info/tourSpa/i-resort-nha-trang.jpg"],
        summary: "머드스파와 온천을 즐기는 나트랑 인기 휴식 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["머드스파와 온천을 즐기는 나트랑 인기 휴식 코스입니다.", "평점 4.4", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:00 ~ 오후 5:30; 화요일: 오전 8:00 ~ 오후 5:30",
        duration: "2~4시간",
        price: "패키지별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "75CG+X3W, Tổ 19 thôn Xuân Ngọc, Tây Nha Trang, Khánh Hòa, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.i-resort.vn/main.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16225829871338576213", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9D%B4%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%A8%B8%EB%93%9C%EC%98%A8%EC%B2%9C+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "탑바 머드온천": {
        photos: ["/images/nha-trang/info/tourSpa/thap-ba-mud-bath-nha-trang.jpg"],
        summary: "나트랑의 대표적인 머드온천·스파 시설입니다.",
        updatedAt: "2026-07-13",
        highlights: ["나트랑의 대표적인 머드온천·스파 시설입니다.", "평점 4.4", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 7:30 ~ 오후 5:00; 화요일: 오전 7:30 ~ 오후 5:00",
        duration: "2~4시간",
        price: "코스별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "438 Ngô Đến, Tây Nha Trang, Khánh Hòa, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://tambunthapba.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10245478832122355109", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%91%EB%B0%94+%EB%A8%B8%EB%93%9C%EC%98%A8%EC%B2%9C+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "바호 폭포": {
        photos: ["/images/nha-trang/info/tourSpa/ba-ho-waterfalls-nha-trang.jpg"],
        summary: "트레킹과 물놀이를 함께 즐기는 나트랑 근교 자연 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["트레킹과 물놀이를 함께 즐기는 나트랑 근교 자연 코스입니다.", "평점 4.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "반나절",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "7688+9XC, Phạm Văn Đồng, Nha Trang, Khánh Hòa 650000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10576392866681117825", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%ED%98%B8+%ED%8F%AD%ED%8F%AC+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "나트랑 대성당": {
        photos: ["/images/nha-trang/info/tourSpa/nha-trang-cathedral.jpg"],
        summary: "석조 고딕 양식의 도심 랜드마크입니다.",
        updatedAt: "2026-07-13",
        highlights: ["석조 고딕 양식의 도심 랜드마크입니다.", "평점 4.6", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 5:00 ~ 오후 9:00; 화요일: 오전 5:00 ~ 오후 9:00",
        duration: "30분~1시간",
        price: "무료 또는 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "22 Trần Phú, Nha Trang, Khánh Hòa 650000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://giaophannhatrang.org/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1581059747933070210", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%ED%8A%B8%EB%9E%91+%EB%8C%80%EC%84%B1%EB%8B%B9+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "혼땀섬": {
        photos: ["/images/nha-trang/info/tourSpa/hon-tam-island-nha-trang.jpg"],
        summary: "해변 휴식과 머드스파를 함께 즐길 수 있는 섬 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해변 휴식과 머드스파를 함께 즐길 수 있는 섬 코스입니다.", "평점 4.5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "반나절~1일",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Hòn Tằm, Nha Trang, Khanh Hoa, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5310813651024343124", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%BC%EB%95%80%EC%84%AC+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "몽키 아일랜드": {
        photos: ["/images/nha-trang/info/tourSpa/monkey-island-nha-trang.jpg"],
        summary: "가족 여행자에게 인기 있는 근교 섬 체험 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["가족 여행자에게 인기 있는 근교 섬 체험 코스입니다.", "평점 4.2", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 7:30 ~ 오후 4:30; 화요일: 오전 7:30 ~ 오후 4:30",
        duration: "반나절",
        price: "투어 상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Lương Sơn, Nha Trang, Khánh Hòa 650000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://longphutourist.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11118247723553814495", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%BD%ED%82%A4+%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "디엡선섬 투어": {
        photos: ["/images/nha-trang/info/tourSpa/diep-son-island-nha-trang.jpg"],
        summary: "바닷길과 섬 풍경으로 유명한 나트랑 근교 투어입니다.",
        updatedAt: "2026-07-13",
        highlights: ["바닷길과 섬 풍경으로 유명한 나트랑 근교 투어입니다.", "평점 4.5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        duration: "1일",
        price: "투어 상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Thôn Điệp Sơn, Vạn Thắng, Khánh Hòa 650000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6098330782648888230", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94%EC%97%A1%EC%84%A0%EC%84%AC+%ED%88%AC%EC%96%B4+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "페어리 스프링 폭포": {
        photos: ["/images/nha-trang/info/tourSpa/fairy-spring-waterfall-nha-trang.jpg"],
        summary: "가벼운 트레킹과 계곡 풍경을 즐기는 자연 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["가벼운 트레킹과 계곡 풍경을 즐기는 자연 코스입니다.", "평점 4.8", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "반나절",
        price: "현장/투어별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "76W2+QMH, Bac NHA Trang, Khanh Hoa, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6654331295136418128", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%98%EC%96%B4%EB%A6%AC+%EC%8A%A4%ED%94%84%EB%A7%81+%ED%8F%AD%ED%8F%AC+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "나트랑 씨워킹": {
        photos: ["/images/nha-trang/info/tourSpa/nha-trang-sea-walking.jpg"],
        summary: "수중 산책과 해양 액티비티를 즐기는 체험입니다.",
        updatedAt: "2026-07-13",
        highlights: ["수중 산책과 해양 액티비티를 즐기는 체험입니다.", "평점 5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "반나절",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "104 Trần Phú, Nha Trang, Khánh Hòa 650000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2266719371293827534", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%ED%8A%B8%EB%9E%91+%EC%94%A8%EC%9B%8C%ED%82%B9+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "엠퍼러 크루즈 나트랑": {
        photos: ["/images/nha-trang/info/tourSpa/emperor-cruises-nha-trang.jpg"],
        summary: "나트랑 베이에서 식사와 선셋을 즐기는 크루즈입니다.",
        updatedAt: "2026-07-13",
        highlights: ["나트랑 베이에서 식사와 선셋을 즐기는 크루즈입니다.", "평점 4.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        duration: "반나절",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "74 Tô Hiệu, Nha Trang, Khánh Hòa, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://emperorcruises.com/emperor-cruises-nha-trang/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15281070183432016451", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%A0%ED%8D%BC%EB%9F%AC+%ED%81%AC%EB%A3%A8%EC%A6%88+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "100 에그 머드온천": {
        photos: ["/images/nha-trang/info/tourSpa/100-egg-mud-bath-nha-trang.jpg"],
        summary: "달걀 테마의 머드스파와 온천을 즐기는 가족형 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["달걀 테마의 머드스파와 온천을 즐기는 가족형 코스입니다.", "평점 4.7", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:30 ~ 오후 6:00; 화요일: 오전 8:30 ~ 오후 6:00",
        duration: "2~4시간",
        price: "코스별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Đại lộ, Nguyễn Tất Thành, Nam Nha Trang, Khánh Hòa 650000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://tramtrung100egg.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7676973866910180906", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=100+%EC%97%90%EA%B7%B8+%EB%A8%B8%EB%93%9C%EC%98%A8%EC%B2%9C+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
