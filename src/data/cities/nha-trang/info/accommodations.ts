import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "인터컨티넨탈 나트랑": {
        photos: ["/images/nha-trang/info/accommodations/intercontinental-nha-trang.jpg"],
        summary: "쩐푸 해변 중심부에 위치한 글로벌 체인 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쩐푸 해변 중심부에 위치한 글로벌 체인 호텔입니다.", "평점 4.8", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "32 Trần Phú, Nha Trang, Khánh Hòa 650000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7616711774394864003", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B8%ED%84%B0%EC%BB%A8%ED%8B%B0%EB%84%A8%ED%83%88+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "쉐라톤 나트랑 호텔 앤 스파": {
        photos: ["/images/nha-trang/info/accommodations/sheraton-nha-trang-hotel-spa.jpg"],
        summary: "해변과 시내 접근성이 좋은 대형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해변과 시내 접근성이 좋은 대형 호텔입니다.", "평점 4.6", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "26-28 Trần Phú, Nha Trang, Khánh Hòa 650000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/nhasi-sheraton-nha-trang-hotel-and-spa/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5614888715305784603", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%89%90%EB%9D%BC%ED%86%A4+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%98%B8%ED%85%94+%EC%95%A4+%EC%8A%A4%ED%8C%8C+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아미아나 리조트 나트랑": {
        photos: ["/images/nha-trang/info/accommodations/amiana-resort-nha-trang.jpg"],
        summary: "프라이빗 비치와 조용한 휴식에 강점이 있는 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["프라이빗 비치와 조용한 휴식에 강점이 있는 리조트입니다.", "평점 4.7", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Phạm Văn Đồng, Tổ 14, Bắc Nha Trang, Khánh Hòa 650000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.amianaresortsandhotels.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3390880111734667615", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%AF%B8%EC%95%84%EB%82%98+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미아 리조트 나트랑": {
        photos: ["/images/nha-trang/info/accommodations/mia-resort-nha-trang.jpg"],
        summary: "캄란 방향 해안 절벽권의 휴양형 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["캄란 방향 해안 절벽권의 휴양형 리조트입니다.", "평점 4.7", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Bãi Dông, Cam Lam, Khanh Hoa 650000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://mianhatrang.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11676739043607792638", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%95%84+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "식스센스 닌반베이": {
        photos: ["/images/nha-trang/info/accommodations/six-senses-ninh-van-bay.jpg"],
        summary: "보트 접근형 럭셔리 프라이빗 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["보트 접근형 럭셔리 프라이빗 리조트입니다.", "평점 4.7", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Dong Ninh Hoa, Khanh Hoa, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6056948139648441720", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9D%EC%8A%A4%EC%84%BC%EC%8A%A4+%EB%8B%8C%EB%B0%98%EB%B2%A0%EC%9D%B4+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라알리아 닌반베이": {
        photos: ["/images/nha-trang/info/accommodations/l-alya-ninh-van-bay.jpg"],
        summary: "닌반베이 자연 속 빌라형 휴양 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["닌반베이 자연 속 빌라형 휴양 리조트입니다.", "평점 4.7", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Ninh Vân, Ninh Hòa, Khánh Hòa, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.palladiumhotelgroup.com/en/hotels/vietnam/ninh-van-bay/l-alya?partner=10214&utm_source=organic&utm_medium=mybusiness&utm_campaign=EC_ES_lnibv", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5132257489065222049", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%95%8C%EB%A6%AC%EC%95%84+%EB%8B%8C%EB%B0%98%EB%B2%A0%EC%9D%B4+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈펄 리조트 나트랑": {
        photos: ["/images/nha-trang/info/accommodations/vinpearl-resort-nha-trang.jpg"],
        summary: "혼쩨섬에서 리조트와 테마파크 동선을 함께 잡기 좋습니다.",
        updatedAt: "2026-07-13",
        highlights: ["혼쩨섬에서 리조트와 테마파크 동선을 함께 잡기 좋습니다.", "평점 4.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Đảo Hòn Tre, Nha Trang, Khánh Hòa 65000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7701218876238954971", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%ED%8E%84+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈펄 비치프론트 나트랑": {
        photos: ["/images/nha-trang/info/accommodations/vinpearl-beachfront-nha-trang.jpg"],
        summary: "쩐푸 해변 도심권의 비치프론트 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쩐푸 해변 도심권의 비치프론트 호텔입니다.", "평점 4.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "78-80 Trần Phú, phường, Nha Trang, Khánh Hòa 650000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12064941459041983643", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%ED%8E%84+%EB%B9%84%EC%B9%98%ED%94%84%EB%A1%A0%ED%8A%B8+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리브라 나트랑 호텔": {
        photos: ["/images/nha-trang/info/accommodations/libra-nha-trang-hotel.jpg"],
        summary: "시내 중심 이동과 가성비가 좋은 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["시내 중심 이동과 가성비가 좋은 호텔입니다.", "평점 4.6", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "14 Hùng Vương, Nha Trang, Khánh Hòa 650000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4258275658088570904", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EB%B8%8C%EB%9D%BC+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%98%B8%ED%85%94+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "노보텔 나트랑": {
        photos: ["/images/nha-trang/info/accommodations/novotel-nha-trang.jpg"],
        summary: "해변 길 건너편 중심부에 위치한 안정적인 체인 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해변 길 건너편 중심부에 위치한 안정적인 체인 호텔입니다.", "평점 4.5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "50 Trần Phú, Nha Trang, Khánh Hòa 652076 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=6033&merchantid=seo-maps-VN-6033&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13823160008378554963", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%B8%EB%B3%B4%ED%85%94+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하바나 나트랑 호텔": {
        photos: ["/images/nha-trang/info/accommodations/havana-nha-trang-hotel.jpg"],
        summary: "쩐푸 해변 접근성과 전망이 장점인 대형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쩐푸 해변 접근성과 전망이 장점인 대형 호텔입니다.", "평점 4.5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "38 Trần Phú, phường, Nha Trang, Khánh Hòa 650000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://havanahotel.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15259114391653941605", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%B0%94%EB%82%98+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%98%B8%ED%85%94+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "레갈리아 골드 호텔 나트랑": {
        photos: ["/images/nha-trang/info/accommodations/regalia-gold-hotel-nha-trang.jpg"],
        summary: "도심 접근성과 루프톱 시설이 장점인 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["도심 접근성과 루프톱 시설이 장점인 호텔입니다.", "평점 4.3", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "39-41 Nguyễn Thị Minh Khai, Phường, Nha Trang, Khánh Hòa 650000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://regaliagoldhotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4669829925044053903", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%88%EA%B0%88%EB%A6%AC%EC%95%84+%EA%B3%A8%EB%93%9C+%ED%98%B8%ED%85%94+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "멜리아 빈펄 나트랑 엠파이어": {
        photos: ["/images/nha-trang/info/accommodations/melia-vinpearl-nha-trang-empire.jpg"],
        summary: "시내 중심부의 장기투숙형 객실 구성이 있는 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["시내 중심부의 장기투숙형 객실 구성이 있는 호텔입니다.", "평점 4.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "44-46 Đ. Lê Thánh Tôn, Ward, Khánh Hòa 650000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8125363031769301798", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%9C%EB%A6%AC%EC%95%84+%EB%B9%88%ED%8E%84+%EB%82%98%ED%8A%B8%EB%9E%91+%EC%97%A0%ED%8C%8C%EC%9D%B4%EC%96%B4+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "포티크 호텔 나트랑": {
        photos: ["/images/nha-trang/info/accommodations/potique-hotel-nha-trang.jpg"],
        summary: "부티크 감성과 중심가 접근성이 좋은 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["부티크 감성과 중심가 접근성이 좋은 호텔입니다.", "평점 4.8", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "22 Hùng Vương, Nha Trang, Khánh Hòa 57000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://potiquehotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5110165973785282715", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%ED%8B%B0%ED%81%AC+%ED%98%B8%ED%85%94+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 아남 캄란": {
        photos: ["/images/nha-trang/info/accommodations/the-anam-cam-ranh.jpg"],
        summary: "캄란 해변권의 고급 휴양 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["캄란 해변권의 고급 휴양 리조트입니다.", "평점 4.7", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "452V+53X, Nguyễn Tất Thành, Cam Lâm, Khánh Hòa 650000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.theanam.com/the-anam-cam-ranh", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2530740765308267625", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%95%84%EB%82%A8+%EC%BA%84%EB%9E%80+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "알마 리조트 캄란": {
        photos: ["/images/nha-trang/info/accommodations/alma-resort-cam-ranh.jpg"],
        summary: "가족형 시설과 넓은 리조트 동선이 강점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["가족형 시설과 넓은 리조트 동선이 강점입니다.", "평점 4.5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Tòa Khách Sạn Khu Nghỉ Dưỡng Alma, Lô D7 a2, TT4X6, Cam Lâm, Khánh Hòa, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.alma-resort.com/home/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15085922086417936547", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%8C%EB%A7%88+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%BA%84%EB%9E%80+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "보톤 블루 호텔 앤 스파": {
        photos: ["/images/nha-trang/info/accommodations/boton-blue-hotel-and-spa-nha-trang.jpg"],
        summary: "북부 해변권 전망과 루프톱 시설이 장점인 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["북부 해변권 전망과 루프톱 시설이 장점인 호텔입니다.", "평점 4.7", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Phạm Văn Đồng, Ba Làng, Bắc Nha Trang, Khánh Hòa 650000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://botonbluehotels.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15673862896155916226", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%ED%86%A4+%EB%B8%94%EB%A3%A8+%ED%98%B8%ED%85%94+%EC%95%A4+%EC%8A%A4%ED%8C%8C+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "디쿠아 호텔 나트랑": {
        photos: ["/images/nha-trang/info/accommodations/dqua-hotel-nha-trang.jpg"],
        summary: "시내 접근성과 객실 컨디션 균형이 좋은 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["시내 접근성과 객실 컨디션 균형이 좋은 호텔입니다.", "평점 4.4", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "29 Đ. Phan Chu Trinh, Nha Trang, Khánh Hòa 650000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://dquahotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16343527624233451697", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94%EC%BF%A0%EC%95%84+%ED%98%B8%ED%85%94+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "므엉탄 럭셔리 나트랑 호텔": {
        photos: ["/images/nha-trang/info/accommodations/muong-thanh-luxury-nha-trang-hotel.jpg"],
        summary: "해변 접근성과 대형 호텔 시설이 장점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해변 접근성과 대형 호텔 시설이 장점입니다.", "평점 4.3", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Khu 01, Khu dân cư Cồn, Nha Trang, Khánh Hòa 650000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://booking.muongthanh.com/khach-san-muong-thanh-luxury-khanh-hoa", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6602313194551879950", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%80%EC%97%89%ED%83%84+%EB%9F%AD%EC%85%94%EB%A6%AC+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%98%B8%ED%85%94+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시타딘 베이프론트 나트랑": {
        photos: ["/images/nha-trang/info/accommodations/citadines-bayfront-nha-trang.jpg"],
        summary: "비치프론트 위치와 레지던스형 편의성이 장점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["비치프론트 위치와 레지던스형 편의성이 장점입니다.", "평점 4.6", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "62 Trần Phú, Nha Trang, Khánh Hòa 650000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12597688523572039775", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%83%80%EB%94%98+%EB%B2%A0%EC%9D%B4%ED%94%84%EB%A1%A0%ED%8A%B8+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
