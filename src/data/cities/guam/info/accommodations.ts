import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "두짓타니 괌 리조트": {
        photos: ["/images/guam/info/accommodations/dusit-thani-guam-resort.jpg"],
        summary: "투몬 중심 해변과 쇼핑 접근성이 좋은 고급 리조트입니다.",
        updatedAt: "2026-07-14",
        highlights: ["투몬 중심 해변과 쇼핑 접근성이 좋은 고급 리조트입니다.", "평점 4.5", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1227 Pale San Vitores Rd, Tumon, 96913 괌", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.dusit.com/dusitthani-guamresort/?utm_source=google&utm_medium=organic&utm_campaign=seo-maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=111273195075957929", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%91%90%EC%A7%93%ED%83%80%EB%8B%88+%EA%B4%8C+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 츠바키 타워 괌": {
        photos: ["/images/guam/info/accommodations/the-tsubaki-tower-guam.jpg"],
        summary: "넓은 객실과 바다 전망, 고급 부대시설이 강점인 신축급 리조트입니다.",
        updatedAt: "2026-07-14",
        highlights: ["넓은 객실과 바다 전망, 고급 부대시설이 강점인 신축급 리조트입니다.", "평점 4.5", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "241 Gun Beach Road 27 th floor, Tumon, 96913 괌", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://tsubakitower.kenhotels.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=49519758619666194", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%B8%A0%EB%B0%94%ED%82%A4+%ED%83%80%EC%9B%8C+%EA%B4%8C+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하얏트 리젠시 괌": {
        photos: ["/images/guam/info/accommodations/hyatt-regency-guam.jpg"],
        summary: "투몬 비치 바로 앞 위치와 수영장 동선이 좋은 가족형 리조트입니다.",
        updatedAt: "2026-07-14",
        highlights: ["투몬 비치 바로 앞 위치와 수영장 동선이 좋은 가족형 리조트입니다.", "평점 4.3", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1155 Pale San Vitores Road Tumon, 4206, 96913 괌", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5356671376080926584", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%96%8F%ED%8A%B8+%EB%A6%AC%EC%A0%A0%EC%8B%9C+%EA%B4%8C+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "힐튼 괌 리조트 앤 스파": {
        photos: ["/images/guam/info/accommodations/hilton-guam-resort-and-spa.jpg"],
        summary: "이파오 비치 인근에서 조용한 휴양과 스노클링 동선이 좋은 리조트입니다.",
        updatedAt: "2026-07-14",
        highlights: ["이파오 비치 인근에서 조용한 휴양과 스노클링 동선이 좋은 리조트입니다.", "평점 4.2", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Tumon Bay, 202 Hilton Road, Tumon, 96913 괌", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2115804736183130806", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9E%90%ED%8A%BC+%EA%B4%8C+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%95%A4+%EC%8A%A4%ED%8C%8C+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "괌 리프 호텔": {
        photos: ["/images/guam/info/accommodations/guam-reef-hotel.jpg"],
        summary: "투몬 중심가와 해변 접근성이 좋아 쇼핑·식당 이동이 편합니다.",
        updatedAt: "2026-07-14",
        highlights: ["투몬 중심가와 해변 접근성이 좋아 쇼핑·식당 이동이 편합니다.", "평점 4.1", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1317 Pale San Vitores Rd, Tumon, 96913 괌", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4487100604335407893", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B4%8C+%EB%A6%AC%ED%94%84+%ED%98%B8%ED%85%94+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "롯데 호텔 괌": {
        photos: ["/images/guam/info/accommodations/lotte-hotel-guam.jpg"],
        summary: "투몬 북쪽의 바다 전망과 한국인 여행자 편의성이 좋은 리조트입니다.",
        updatedAt: "2026-07-14",
        highlights: ["투몬 북쪽의 바다 전망과 한국인 여행자 편의성이 좋은 리조트입니다.", "평점 4.2", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "185 Gun Beach Road, Tumon, 96913 괌", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.lottehotel.com/guam-hotel/en", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11987505059134454824", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%AF%EB%8D%B0+%ED%98%B8%ED%85%94+%EA%B4%8C+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 닛코 괌": {
        photos: ["/images/guam/info/accommodations/hotel-nikko-guam.jpg"],
        summary: "건비치의 한적한 해변과 워터슬라이드를 즐기기 좋은 가족 친화적 리조트예요.",
        updatedAt: "2026-07-14",
        highlights: ["프라이빗하고 조용한 건비치 전용 해변", "아이들이 좋아하는 워터슬라이드 시설"],
        tips: ["여유로운 휴식을 원하는 가족 여행객에게 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "245 Gun Beach Road, Tumon, 96913 괌", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.nikkoguam.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9201982455503154641", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%8B%9B%EC%BD%94+%EA%B4%8C+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "퍼시픽 아일랜드 클럽 괌": {
        photos: ["/images/guam/info/accommodations/pacific-islands-club-guam.jpg"],
        summary: "워터파크와 다양한 액티비티로 아이들과 함께하기 가장 좋은 곳이에요.",
        updatedAt: "2026-07-14",
        highlights: ["대규모 워터파크 시설", "지루할 틈 없는 다채로운 액티비티"],
        tips: ["활동적인 가족 여행객이라면 이곳이 정답입니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "210 Pale San Vitores Rd, Tumon, 96913 괌", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.picresorts.com/guam?utm_source=google&utm_medium=organic&utm_campaign=gbp_listing", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12026068053504465796", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8D%BC%EC%8B%9C%ED%94%BD+%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%ED%81%B4%EB%9F%BD+%EA%B4%8C+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크라운 플라자 리조트 괌": {
        photos: ["/images/guam/info/accommodations/crowne-plaza-resort-guam.jpg"],
        summary: "투몬 해변 접근성과 쇼핑몰 인접성을 모두 갖춘 완벽한 위치예요.",
        updatedAt: "2026-07-14",
        highlights: ["투몬 해변과 시내 중심가 사이의 최적화된 위치", "편리한 주변 상권 인프라"],
        tips: ["쇼핑과 휴양을 동시에 잡고 싶은 분들께 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "801 Pale San Vitores Rd, Tamuning, 96913 괌", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2648504493355977420", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%9D%BC%EC%9A%B4+%ED%94%8C%EB%9D%BC%EC%9E%90+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EA%B4%8C+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리가 로얄 라구나 괌 리조트": {
        photos: ["/images/guam/info/accommodations/rihga-royal-laguna-guam-resort.jpg"],
        summary: "라군 전망과 조용한 분위기를 원하는 여행자에게 맞는 리조트입니다.",
        updatedAt: "2026-07-14",
        highlights: ["라군 전망과 조용한 분위기를 원하는 여행자에게 맞는 리조트입니다.", "평점 4.1", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "470 Fahrenholt Avenue, Apotgan, 96913 괌", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://rihga-guam.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8438030312657840885", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EA%B0%80+%EB%A1%9C%EC%96%84+%EB%9D%BC%EA%B5%AC%EB%82%98+%EA%B4%8C+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
