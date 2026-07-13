import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "아나 만다라 빌라 달랏": {
        photos: ["/images/da-lat/info/accommodations/ana-mandara-villas-dalat-resort-and-spa.jpg"],
        summary: "프렌치 빌라 감성과 조용한 휴식이 좋은 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["프렌치 빌라 감성과 조용한 휴식이 좋은 리조트입니다.", "평점 4.6", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2 Đường Lê Lai, Cam Ly - Đà Lạt, Lâm Đồng, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://anamandara-resort.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7753107310771550007", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%82%98+%EB%A7%8C%EB%8B%A4%EB%9D%BC+%EB%B9%8C%EB%9D%BC+%EB%8B%AC%EB%9E%8F+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "달랏 팰리스 헤리티지 호텔": {
        photos: ["/images/da-lat/info/accommodations/dalat-palace-heritage-hotel.jpg"],
        summary: "호수 근처의 클래식한 헤리티지 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["호수 근처의 클래식한 헤리티지 호텔입니다.", "평점 4.4", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2 Đ. Trần Phú, Xuân Hương - Đà Lạt, Lâm Đồng, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.dalatpalacehotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13632160291114083599", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%AC%EB%9E%8F+%ED%8C%B0%EB%A6%AC%EC%8A%A4+%ED%97%A4%EB%A6%AC%ED%8B%B0%EC%A7%80+%ED%98%B8%ED%85%94+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "뒤 파크 호텔 달랏": {
        photos: ["/images/da-lat/info/accommodations/du-parc-hotel-dalat.jpg"],
        summary: "고전적인 분위기와 도심 접근성이 좋은 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["고전적인 분위기와 도심 접근성이 좋은 호텔입니다.", "평점 4", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "15 Đ. Trần Phú, Xuân Hương - Đà Lạt, Lâm Đồng 670000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.dalathotelduparc.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8790842944379774753", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%92%A4+%ED%8C%8C%ED%81%AC+%ED%98%B8%ED%85%94+%EB%8B%AC%EB%9E%8F+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "콜린 달랏 호텔": {
        photos: ["/images/da-lat/info/accommodations/colline-dalat-hotel.jpg"],
        summary: "달랏 시장과 도심 접근성이 좋은 현대식 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["달랏 시장과 도심 접근성이 좋은 현대식 호텔입니다.", "평점 4.4", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "10 Phan Bội Châu, Xuân Hương - Đà Lạt, Lâm Đồng 670000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://hotelcolline.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17255277842950743451", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%9C%EB%A6%B0+%EB%8B%AC%EB%9E%8F+%ED%98%B8%ED%85%94+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "테라코타 호텔 앤 리조트 달랏": {
        photos: ["/images/da-lat/info/accommodations/terracotta-hotel-and-resort-dalat.jpg"],
        summary: "뚜옌럼 호수 근처의 조용한 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["뚜옌럼 호수 근처의 조용한 리조트입니다.", "평점 4.4", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Phân khu chức năng 7.9 KDL hồ Tuyền Lâm, Xuân Hương - Đà Lạt, Lâm Đồng 670000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://dalat.terracottaresort.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13411763141745868215", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%8C%EB%9D%BC%EC%BD%94%ED%83%80+%ED%98%B8%ED%85%94+%EC%95%A4+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%8B%AC%EB%9E%8F+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "달랏 에덴시 레이크 리조트": {
        photos: ["/images/da-lat/info/accommodations/dalat-edensee-lake-resort-and-spa.jpg"],
        summary: "호수 전망과 휴양 분위기가 강점인 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["호수 전망과 휴양 분위기가 강점인 리조트입니다.", "평점 4.4", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Tuyen Lam Lake, Zone VII.2, Xuân Hương - Đà Lạt, Lâm Đồng 670000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.dalatedensee.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1812293315912519369", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%AC%EB%9E%8F+%EC%97%90%EB%8D%B4%EC%8B%9C+%EB%A0%88%EC%9D%B4%ED%81%AC+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스위스 벨리조트 뚜옌럼 달랏": {
        photos: ["/images/da-lat/info/accommodations/swiss-belresort-tuyen-lam-dalat.jpg"],
        summary: "골프장과 산 전망이 좋은 외곽 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["골프장과 산 전망이 좋은 외곽 리조트입니다.", "평점 4.4", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "số 7 và 8, KDL Hồ Tuyền Lâm, Phường 3, Xuân Hương - Đà Lạt, Lâm Đồng 061000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://samtuyenlamhotel.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16734836393639663936", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%9C%84%EC%8A%A4+%EB%B2%A8%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%9A%9C%EC%98%8C%EB%9F%BC+%EB%8B%AC%EB%9E%8F+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "머펄 달랏 호텔": {
        photos: ["/images/da-lat/info/accommodations/merperle-dalat-hotel.jpg"],
        summary: "깔끔한 시설과 가족 여행 동선에 좋은 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["깔끔한 시설과 가족 여행 동선에 좋은 호텔입니다.", "평점 4.9", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1 Đ. Hùng Vương, Xuân Hương - Đà Lạt, Lâm Đồng, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.merperledalat.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2925261577989617457", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A8%B8%ED%8E%84+%EB%8B%AC%EB%9E%8F+%ED%98%B8%ED%85%94+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "골프 밸리 호텔 달랏": {
        photos: ["/images/da-lat/info/accommodations/golf-valley-hotel-dalat.jpg"],
        summary: "도심 접근성과 현대적인 객실이 장점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["도심 접근성과 현대적인 객실이 장점입니다.", "평점 4.5", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "94 Đường Bùi Thị Xuân, Xuân Hương - Đà Lạt, Lâm Đồng 670000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://nestahotel.com.vn/accommodation/nesta-valley-dalat-hotel/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8381202117877470580", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A8%ED%94%84+%EB%B0%B8%EB%A6%AC+%ED%98%B8%ED%85%94+%EB%8B%AC%EB%9E%8F+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "TTC 호텔 프리미엄 응옥란": {
        photos: ["/images/da-lat/info/accommodations/ttc-hotel-premium-ngoc-lan-dalat.jpg"],
        summary: "쑤언흐엉 호수와 시장 접근성이 좋은 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쑤언흐엉 호수와 시장 접근성이 좋은 호텔입니다.", "평점 4.3", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "42 Đ. Nguyễn Chí Thanh, Xuân Hương - Đà Lạt, Lâm Đồng 02633 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10917282675636111174", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=TTC+%ED%98%B8%ED%85%94+%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84+%EC%9D%91%EC%98%A5%EB%9E%80+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라달랏 호텔": {
        photos: ["/images/da-lat/info/accommodations/ladalat-hotel.jpg"],
        summary: "사랑의 계곡 방면 동선에 좋은 대형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["사랑의 계곡 방면 동선에 좋은 대형 호텔입니다.", "평점 4.9", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Tầng 7, Khách sạn Ladalat, 106A Đường Mai Anh Đào, Lâm Viên - Đà Lạt, Lâm Đồng 66000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://ladalathotel.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4126302578005208714", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%8B%AC%EB%9E%8F+%ED%98%B8%ED%85%94+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "킹스 호텔 달랏": {
        photos: ["/images/da-lat/info/accommodations/kings-hotel-dalat.jpg"],
        summary: "시장과 호수 접근성이 좋은 실용적인 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["시장과 호수 접근성이 좋은 실용적인 호텔입니다.", "평점 3.8", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Số 10 Đường Bùi Thị Xuân, Xuân Hương - Đà Lạt, Lâm Đồng, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.kingshoteldalat.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14341709312785904334", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%B9%EC%8A%A4+%ED%98%B8%ED%85%94+%EB%8B%AC%EB%9E%8F+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "므엉탄 홀리데이 달랏": {
        photos: ["/images/da-lat/info/accommodations/muong-thanh-holiday-da-lat-hotel.jpg"],
        summary: "시내 중심 동선과 기본 시설이 무난한 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["시내 중심 동선과 기본 시설이 무난한 호텔입니다.", "평점 4.1", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "42 Phan Bội Châu, Xuân Hương - Đà Lạt, Lâm Đồng, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://holidaydalat.muongthanh.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1003164070957619988", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%80%EC%97%89%ED%83%84+%ED%99%80%EB%A6%AC%EB%8D%B0%EC%9D%B4+%EB%8B%AC%EB%9E%8F+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈안 빌리지 리조트 달랏": {
        photos: ["/images/da-lat/info/accommodations/binh-an-village-resort-dalat.jpg"],
        summary: "호숫가 빌리지 분위기의 조용한 휴양 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["호숫가 빌리지 분위기의 조용한 휴양 리조트입니다.", "평점 4.4", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Tuyen Lam Lake, Xuân Hương - Đà Lạt, Lâm Đồng, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.binhanvillage.com/index.php/en/mmenu-binhan-dalat", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=25309803906024738", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EC%95%88+%EB%B9%8C%EB%A6%AC%EC%A7%80+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%8B%AC%EB%9E%8F+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "샘 뚜옌럼 리조트 달랏": {
        photos: ["/images/da-lat/info/accommodations/sam-tuyen-lam-resort-dalat.jpg"],
        summary: "뚜옌럼 호수 근처에서 조용히 쉬기 좋은 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["뚜옌럼 호수 근처에서 조용히 쉬기 좋은 리조트입니다.", "평점 4.3", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Tuyền Lâm, Xuân Hương - Đà Lạt, Lâm Đồng, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://samtuyenlamresort.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8800297371191065240", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%98+%EB%9A%9C%EC%98%8C%EB%9F%BC+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%8B%AC%EB%9E%8F+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
