import type { AccommodationInfo } from '@/data/card-info-types';

const info: Record<string, AccommodationInfo> = {
    "워터프론트 세부 시티 호텔": {
        photos: ["/images/cebu/info/accommodations/waterfront-cebu-city-hotel-and-casino.jpg"],
        summary: "카지노와 다양한 부대시설을 갖춘 세부 시티의 대표적인 호텔입니다.",
        updatedAt: "2026-07-12",
        highlights: ["카지노 이용 가능", "다양한 레스토랑"],
        tips: ["시티 투어의 중심지로 이동이 편리합니다."],
        checkIn: { time: "14:00", note: "숙소/플랜별 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 현장 확인" },
        breakfast: { included: false, menu: "예약 플랜별 상이" },
        amenities: [
            { icon: "🛏️", label: "객실", note: "객실 타입별 구성 상이" },
            { icon: "📍", label: "위치", note: "세부시티" }
        ],
        location: { landmark: "Salinas Dr, Lahug, Cebu City, 6000 Cebu, 필리핀", airport: "막탄-세부 국제공항 기준 이동 시간은 교통상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.waterfronthotels.com.ph/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14516703630822820520", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9B%8C%ED%84%B0%ED%94%84%EB%A1%A0%ED%8A%B8+%EC%84%B8%EB%B6%80+%EC%8B%9C%ED%8B%B0+%ED%98%B8%ED%85%94+%EC%84%B8%EB%B6%80+%EC%88%99%EC%86%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "퀘스트 호텔 세부": {
        photos: ["/images/cebu/info/accommodations/quest-hotel-cebu.jpg"],
        summary: "깔끔하고 현대적인 시설로 여행객들에게 높은 만족도를 주는 호텔입니다.",
        updatedAt: "2026-07-12",
        highlights: ["모던한 객실", "우수한 접근성"],
        tips: ["쇼핑몰과 가까워 쇼핑하기 좋습니다."],
        checkIn: { time: "14:00", note: "숙소/플랜별 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 현장 확인" },
        breakfast: { included: false, menu: "예약 플랜별 상이" },
        amenities: [
            { icon: "🛏️", label: "객실", note: "객실 타입별 구성 상이" },
            { icon: "📍", label: "위치", note: "세부시티" }
        ],
        location: { landmark: "Archbishop Reyes Ave, Cebu City, 6000 Cebu, 필리핀", airport: "막탄-세부 국제공항 기준 이동 시간은 교통상황에 따라 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8012038630996504621", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%80%98%EC%8A%A4%ED%8A%B8+%ED%98%B8%ED%85%94+%EC%84%B8%EB%B6%80+%EC%84%B8%EB%B6%80+%EC%88%99%EC%86%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "바이 호텔 세부": {
        photos: ["/images/cebu/info/accommodations/bai-hotel-cebu.jpg"],
        summary: "높은 평점을 자랑하는 세부의 프리미엄 숙소입니다.",
        updatedAt: "2026-07-12",
        highlights: ["럭셔리한 분위기", "최고급 서비스"],
        tips: ["수영장 시설이 매우 뛰어납니다."],
        checkIn: { time: "15:00", note: "숙소/플랜별 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 현장 확인" },
        breakfast: { included: false, menu: "예약 플랜별 상이" },
        amenities: [
            { icon: "🛏️", label: "객실", note: "객실 타입별 구성 상이" },
            { icon: "📍", label: "위치", note: "세부시티" }
        ],
        location: { landmark: "Ouano Avenue, corner C.D.Seno, Mandaue, 6014 Cebu, 필리핀", airport: "막탄-세부 국제공항 기준 이동 시간은 교통상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "http://baihotels.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4264381429706154976", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%9D%B4+%ED%98%B8%ED%85%94+%EC%84%B8%EB%B6%80+%EC%84%B8%EB%B6%80+%EC%88%99%EC%86%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "코스타벨라 트로피컬 비치 호텔": {
        photos: ["/images/cebu/info/accommodations/costabella-tropical-beach-hotel-cebu.jpg"],
        summary: "막탄의 아름다운 해변을 바로 앞에서 즐길 수 있는 휴양형 호텔입니다.",
        updatedAt: "2026-07-12",
        highlights: ["프라이빗 비치", "트로피컬 분위기"],
        tips: ["가족 단위 여행객에게 추천합니다."],
        checkIn: { time: "15:00", note: "숙소/플랜별 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 현장 확인" },
        breakfast: { included: false, menu: "예약 플랜별 상이" },
        amenities: [
            { icon: "🛏️", label: "객실", note: "객실 타입별 구성 상이" },
            { icon: "📍", label: "위치", note: "막탄/라푸라푸" }
        ],
        location: { landmark: "Mactan Island, Buyong Rd, Lapu-Lapu, 6015 Cebu, 필리핀", airport: "막탄-세부 국제공항 기준 이동 시간은 교통상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://costabellaresort.com/2024/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=234073542982288558", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EC%8A%A4%ED%83%80%EB%B2%A8%EB%9D%BC+%ED%8A%B8%EB%A1%9C%ED%94%BC%EC%BB%AC+%EB%B9%84%EC%B9%98+%ED%98%B8%ED%85%94+%EC%84%B8%EB%B6%80+%EC%88%99%EC%86%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "세부 파크레인 인터내셔널 호텔": {
        photos: ["/images/cebu/info/accommodations/cebu-parklane-international-hotel.jpg"],
        summary: "합리적인 가격으로 편안한 휴식을 제공하는 가성비 좋은 호텔입니다.",
        updatedAt: "2026-07-12",
        highlights: ["합리적인 가격", "쾌적한 객실"],
        tips: ["시티 중심가와 가까워 이동이 용이합니다."],
        checkIn: { time: "15:00", note: "숙소/플랜별 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 현장 확인" },
        breakfast: { included: false, menu: "예약 플랜별 상이" },
        amenities: [
            { icon: "🛏️", label: "객실", note: "객실 타입별 구성 상이" },
            { icon: "📍", label: "위치", note: "세부시티" }
        ],
        location: { landmark: "N Escario St, Cebu City, 6000 Cebu, 필리핀", airport: "막탄-세부 국제공항 기준 이동 시간은 교통상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.parklanehotels.com.ph/cebu-parklane-international-hotel/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4408432189163502252", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%B8%EB%B6%80+%ED%8C%8C%ED%81%AC%EB%A0%88%EC%9D%B8+%EC%9D%B8%ED%84%B0%EB%82%B4%EC%85%94%EB%84%90+%ED%98%B8%ED%85%94+%EC%84%B8%EB%B6%80+%EC%88%99%EC%86%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "필리 호텔 세부": {
        photos: ["/images/cebu/info/accommodations/fili-hotel-nustar-cebu.jpg"],
        summary: "누스타 리조트의 럭셔리함을 만끽할 수 있는 프리미엄 호텔입니다.",
        updatedAt: "2026-07-12",
        highlights: ["최고급 시설과 서비스", "세부 시티 내 완벽한 위치"],
        tips: ["카지노와 인접해 엔터테인먼트를 즐기기에 좋습니다."],
        checkIn: { time: "15:00", note: "숙소/플랜별 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 현장 확인" },
        breakfast: { included: false, menu: "예약 플랜별 상이" },
        amenities: [
            { icon: "🛏️", label: "객실", note: "객실 타입별 구성 상이" },
            { icon: "📍", label: "위치", note: "세부시티" }
        ],
        location: { landmark: "Tower 1, NUSTAR Resort and Casino, Kawit Island, Cebu South Coastal Rd, Cebu City, 6000 Cebu, 필리핀", airport: "막탄-세부 국제공항 기준 이동 시간은 교통상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.nustar.ph/hotels/fili", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9484435158225279894", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%84%EB%A6%AC+%ED%98%B8%ED%85%94+%EC%84%B8%EB%B6%80+%EC%84%B8%EB%B6%80+%EC%88%99%EC%86%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "사보이 호텔 막탄": {
        photos: ["/images/cebu/info/accommodations/savoy-hotel-mactan-newtown.jpg"],
        summary: "막탄 뉴타운의 편리함을 누릴 수 있는 가성비 좋은 호텔입니다.",
        updatedAt: "2026-07-12",
        highlights: ["뉴타운 내 우수한 접근성", "깔끔하고 현대적인 객실"],
        tips: ["주변 상권 이용이 매우 편리합니다."],
        checkIn: { time: "15:00", note: "숙소/플랜별 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 현장 확인" },
        breakfast: { included: false, menu: "예약 플랜별 상이" },
        amenities: [
            { icon: "🛏️", label: "객실", note: "객실 타입별 구성 상이" },
            { icon: "📍", label: "위치", note: "막탄/라푸라푸" }
        ],
        location: { landmark: "The Mactan Newtown, Newtown Blvd, Lapu-Lapu, Cebu, 필리핀", airport: "막탄-세부 국제공항 기준 이동 시간은 교통상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.savoyhotelmactan.com.ph/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3976194933538309963", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EB%B3%B4%EC%9D%B4+%ED%98%B8%ED%85%94+%EB%A7%89%ED%83%84+%EC%84%B8%EB%B6%80+%EC%88%99%EC%86%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "벨몬트 호텔 막탄": {
        photos: ["/images/cebu/info/accommodations/belmont-hotel-mactan.jpg"],
        summary: "막탄 뉴타운 중심에서 즐기는 쾌적한 휴식 공간입니다.",
        updatedAt: "2026-07-12",
        highlights: ["신축급의 깨끗한 시설", "편리한 주변 인프라"],
        tips: ["가족 단위 여행객에게 추천합니다."],
        checkIn: { time: "15:00", note: "숙소/플랜별 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 현장 확인" },
        breakfast: { included: false, menu: "예약 플랜별 상이" },
        amenities: [
            { icon: "🛏️", label: "객실", note: "객실 타입별 구성 상이" },
            { icon: "📍", label: "위치", note: "막탄/라푸라푸" }
        ],
        location: { landmark: "8248+P6P The Mactan Newtown, Newtown Blvd, Lapu-Lapu, 6015 Cebu, 필리핀", airport: "막탄-세부 국제공항 기준 이동 시간은 교통상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.belmontmactan.com.ph/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17776278296698519696", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A8%EB%AA%AC%ED%8A%B8+%ED%98%B8%ED%85%94+%EB%A7%89%ED%83%84+%EC%84%B8%EB%B6%80+%EC%88%99%EC%86%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "더 리프 아일랜드 리조트 막탄": {
        photos: ["/images/cebu/info/accommodations/the-reef-island-resort-mactan-cebu.jpg"],
        summary: "환상적인 바다 전망과 세련된 디자인이 돋보이는 프리미엄 리조트입니다.",
        updatedAt: "2026-07-12",
        highlights: ["인생샷을 부르는 수영장", "프라이빗하고 고급스러운 분위기"],
        tips: ["커플이나 신혼여행객에게 강력 추천합니다."],
        checkIn: { time: "15:00", note: "숙소/플랜별 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 현장 확인" },
        breakfast: { included: false, menu: "예약 플랜별 상이" },
        amenities: [
            { icon: "🛏️", label: "객실", note: "객실 타입별 구성 상이" },
            { icon: "📍", label: "위치", note: "막탄/라푸라푸" }
        ],
        location: { landmark: "72X8+G89, Dapdap, Lapu-Lapu, 6015 Cebu, 필리핀", airport: "막탄-세부 국제공항 기준 이동 시간은 교통상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.thereef.ph/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=694748083673796123", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%A6%AC%ED%94%84+%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%A7%89%ED%83%84+%EC%84%B8%EB%B6%80+%EC%88%99%EC%86%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "플랜테이션 베이 리조트 앤 스파": {
        photos: ["/images/cebu/info/accommodations/plantation-bay-resort-and-spa-cebu.jpg"],
        summary: "거대한 인공 라군을 품은 이국적인 대규모 리조트입니다.",
        updatedAt: "2026-07-12",
        highlights: ["광활한 인공 라군 수영장", "평화롭고 이국적인 분위기"],
        tips: ["물놀이를 좋아하는 가족 여행객에게 최적입니다."],
        checkIn: { time: "15:00", note: "숙소/플랜별 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 현장 확인" },
        breakfast: { included: false, menu: "예약 플랜별 상이" },
        amenities: [
            { icon: "🛏️", label: "객실", note: "객실 타입별 구성 상이" },
            { icon: "📍", label: "위치", note: "막탄/라푸라푸" }
        ],
        location: { landmark: "Marigondon, Mactan Island, Lapu-Lapu, 6015 Cebu, 필리핀", airport: "막탄-세부 국제공항 기준 이동 시간은 교통상황에 따라 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3535796692862656931", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%8C%EB%9E%9C%ED%85%8C%EC%9D%B4%EC%85%98+%EB%B2%A0%EC%9D%B4+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%95%A4+%EC%8A%A4%ED%8C%8C+%EC%84%B8%EB%B6%80+%EC%88%99%EC%86%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "제이파크 아일랜드 리조트": {
        photos: ["/images/cebu/info/accommodations/jpark-island-resort-and-waterpark-cebu.jpg"],
        summary: "워터파크 시설이 완비되어 아이와 함께하는 가족 여행에 최적화된 리조트입니다.",
        updatedAt: "2026-07-12",
        highlights: ["대규모 워터파크 보유", "가족 친화적인 부대시설"],
        tips: ["아이 동반 여행객에게 강력 추천합니다."],
        checkIn: { time: "15:00", note: "숙소/플랜별 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 현장 확인" },
        breakfast: { included: false, menu: "예약 플랜별 상이" },
        amenities: [
            { icon: "🛏️", label: "객실", note: "객실 타입별 구성 상이" },
            { icon: "📍", label: "위치", note: "막탄/라푸라푸" }
        ],
        location: { landmark: "M.L. Quezon National Highway, Maribago, Lapu-Lapu, Cebu, 필리핀", airport: "막탄-세부 국제공항 기준 이동 시간은 교통상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.jparkislandresort.com/cebu/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5438589008327253628", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%9C%EC%9D%B4%ED%8C%8C%ED%81%AC+%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%84%B8%EB%B6%80+%EC%88%99%EC%86%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "크림슨 리조트 앤 스파": {
        photos: ["/images/cebu/info/accommodations/crimson-resort-and-spa-mactan.jpg"],
        summary: "세련된 디자인과 프라이빗한 분위기를 즐길 수 있는 럭셔리 휴양지입니다.",
        updatedAt: "2026-07-12",
        highlights: ["아름다운 인피니티 풀", "프라이빗한 휴식 공간"],
        tips: ["커플이나 신혼여행객에게 추천하는 로맨틱한 곳입니다."],
        checkIn: { time: "15:00", note: "숙소/플랜별 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 현장 확인" },
        breakfast: { included: false, menu: "예약 플랜별 상이" },
        amenities: [
            { icon: "🛏️", label: "객실", note: "객실 타입별 구성 상이" },
            { icon: "📍", label: "위치", note: "막탄/라푸라푸" }
        ],
        location: { landmark: "Seascapes Resort Town Mactan Island, Lapu-Lapu, 6015 Cebu, 필리핀", airport: "막탄-세부 국제공항 기준 이동 시간은 교통상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.crimsonhotel.com/mactan", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1022142211010570960", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A6%BC%EC%8A%A8+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%95%A4+%EC%8A%A4%ED%8C%8C+%EC%84%B8%EB%B6%80+%EC%88%99%EC%86%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "쉐라톤 세부 막탄 리조트": {
        photos: ["/images/cebu/info/accommodations/sheraton-cebu-mactan-resort.jpg"],
        summary: "탁 트인 바다 전망과 품격 있는 서비스를 제공하는 프리미엄 리조트입니다.",
        updatedAt: "2026-07-12",
        highlights: ["아름다운 오션뷰", "최고급 객실 컨디션"],
        tips: ["조용한 휴식을 원하는 분들께 적합합니다."],
        checkIn: { time: "15:00", note: "숙소/플랜별 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 현장 확인" },
        breakfast: { included: false, menu: "예약 플랜별 상이" },
        amenities: [
            { icon: "🛏️", label: "객실", note: "객실 타입별 구성 상이" },
            { icon: "📍", label: "위치", note: "막탄/라푸라푸" }
        ],
        location: { landmark: "Mactan Island, Punta Engaño Rd, Lapu-Lapu, 6015 Cebu, 필리핀", airport: "막탄-세부 국제공항 기준 이동 시간은 교통상황에 따라 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8460232544099072174", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%89%90%EB%9D%BC%ED%86%A4+%EC%84%B8%EB%B6%80+%EB%A7%89%ED%83%84+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%84%B8%EB%B6%80+%EC%88%99%EC%86%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "두짓타니 막탄 세부": {
        photos: ["/images/cebu/info/accommodations/dusit-thani-mactan-cebu-resort.jpg"],
        summary: "태국 스타일의 고급스러움과 세부의 자연이 어우러진 리조트입니다.",
        updatedAt: "2026-07-12",
        highlights: ["태국풍의 이색적인 분위기", "아름다운 프라이빗 비치"],
        tips: ["리조트 내 스파 프로그램을 즐겨보세요."],
        checkIn: { time: "15:00", note: "숙소/플랜별 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 현장 확인" },
        breakfast: { included: false, menu: "예약 플랜별 상이" },
        amenities: [
            { icon: "🛏️", label: "객실", note: "객실 타입별 구성 상이" },
            { icon: "📍", label: "위치", note: "막탄/라푸라푸" }
        ],
        location: { landmark: "Punta Engaño Rd, Mactan Island, Lapu-Lapu, 6015 Cebu, 필리핀", airport: "막탄-세부 국제공항 기준 이동 시간은 교통상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.dusit.com/dusitthani-mactancebu/?utm_source=google_maps&utm_medium=seo_maps&utm_campaign=seo_maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8096829053466984026", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%91%90%EC%A7%93%ED%83%80%EB%8B%88+%EB%A7%89%ED%83%84+%EC%84%B8%EB%B6%80+%EC%84%B8%EB%B6%80+%EC%88%99%EC%86%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "세다 아얄라 센터 세부": {
        photos: ["/images/cebu/info/accommodations/seda-ayala-center-cebu.jpg"],
        summary: "쇼핑몰과 인접하여 접근성이 매우 뛰어난 도심형 호텔입니다.",
        updatedAt: "2026-07-12",
        highlights: ["아얄라 몰 바로 옆 위치", "편리한 시티 투어 거점"],
        tips: ["쇼핑과 맛집 탐방을 즐기는 여행객에게 좋습니다."],
        checkIn: { time: "14:00", note: "숙소/플랜별 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 현장 확인" },
        breakfast: { included: false, menu: "예약 플랜별 상이" },
        amenities: [
            { icon: "🛏️", label: "객실", note: "객실 타입별 구성 상이" },
            { icon: "📍", label: "위치", note: "세부시티" }
        ],
        location: { landmark: "Cebu Business Park, Cardinal Rosales Ave, Cebu City, 6000 Cebu, 필리핀", airport: "막탄-세부 국제공항 기준 이동 시간은 교통상황에 따라 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7620204177636186226", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%B8%EB%8B%A4+%EC%95%84%EC%96%84%EB%9D%BC+%EC%84%BC%ED%84%B0+%EC%84%B8%EB%B6%80+%EC%84%B8%EB%B6%80+%EC%88%99%EC%86%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
};

export default info;
