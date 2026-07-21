import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "크라운 플라자 비엔티안": {
        photos: ["/images/vientiane/info/accommodations/crowne-plaza-vientiane.jpg"],
        summary: "시내 접근성과 공항 이동의 편의성을 모두 갖춘 대형 체인 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["공항 및 시내 이동이 용이함", "검증된 글로벌 체인의 서비스 품질"],
        tips: ["비즈니스와 관광 목적 모두에 적합합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Bldg A, Nongduang Nua Village, 20 ຖະໜົນສາມແສນໄທ, Vientiane 01000 라오스" }, { icon: "⭐", label: "평점", note: "4.6" }],
        location: { landmark: "남푸·메콩강·공항 이동 동선 확인 권장", airport: "비엔티안 왓따이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4914629708827752742", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%9D%BC%EC%9A%B4+%ED%94%8C%EB%9D%BC%EC%9E%90+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "라오 플라자 호텔": {
        photos: ["/images/vientiane/info/accommodations/lao-plaza-hotel-vientiane.png"],
        summary: "남푸 분수 인근에 위치하여 시내 주요 명소로의 이동이 편리한 클래식 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["남푸 분수 근처의 편리한 위치", "클래식한 분위기의 숙소"],
        tips: ["시내 중심가 관광을 계획 중인 여행객에게 추천합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "라오스 비엔티안" }, { icon: "⭐", label: "평점", note: "4.3" }],
        location: { landmark: "남푸·메콩강·공항 이동 동선 확인 권장", airport: "비엔티안 왓따이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.laoplazahotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=972742485334363580", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%98%A4+%ED%94%8C%EB%9D%BC%EC%9E%90+%ED%98%B8%ED%85%94+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "세타 팰리스 호텔": {
        photos: ["/images/vientiane/info/accommodations/settha-palace-hotel-vientiane.jpg"],
        summary: "식민지풍의 고전적인 분위기 속에서 조용한 휴식을 즐길 수 있는 부티크 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["식민지풍의 클래식한 인테리어", "조용하고 평화로운 휴양 환경"],
        tips: ["도심의 소음에서 벗어나 여유로운 휴식을 원하는 여행객에게 추천합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Street, 6 ຖະໜົນປາງຄຳ, Vientiane, 라오스" }, { icon: "⭐", label: "평점", note: "4.4" }],
        location: { landmark: "남푸·메콩강·공항 이동 동선 확인 권장", airport: "비엔티안 왓따이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.setthapalace.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16810717786817484664", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%B8%ED%83%80+%ED%8C%B0%EB%A6%AC%EC%8A%A4+%ED%98%B8%ED%85%94+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "살라나 부티크 호텔": {
        photos: ["/images/vientiane/info/accommodations/salana-boutique-hotel-vientiane.jpg"],
        summary: "메콩강 야시장과 시내 주요 명소를 산책하기에 최적의 위치를 자랑하는 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["메콩강 야시장과의 뛰어난 접근성", "시내 중심가 산책에 용이한 동선"],
        tips: ["주변 맛집과 야시장을 즐기려는 활동적인 여행객에게 좋습니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Street, Chao Anou Road, Vientiane, 라오스" }, { icon: "⭐", label: "평점", note: "4.5" }],
        location: { landmark: "남푸·메콩강·공항 이동 동선 확인 권장", airport: "비엔티안 왓따이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.salanaboutique.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14921124254662723260", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%B4%EB%9D%BC%EB%82%98+%EB%B6%80%ED%8B%B0%ED%81%AC+%ED%98%B8%ED%85%94+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "그린 파크 부티크 호텔": {
        photos: ["/images/vientiane/info/accommodations/green-park-boutique-hotel-vientiane.jpg"],
        summary: "도심 속에서 조용하게 휴식을 취하며 수영장을 즐기기 좋은 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["조용한 분위기의 도심 휴식처", "매력적인 수영장 시설"],
        tips: ["수영장 이용 시 여유로운 시간을 계획하세요"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "248 Khouvieng Road, Vientiane, 라오스" }, { icon: "⭐", label: "평점", note: "4.3" }],
        location: { landmark: "남푸·메콩강·공항 이동 동선 확인 권장", airport: "비엔티안 왓따이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://sites.google.com/view/green-park-boutique-hotel/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15189066395056202648", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%A6%B0+%ED%8C%8C%ED%81%AC+%EB%B6%80%ED%8B%B0%ED%81%AC+%ED%98%B8%ED%85%94+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "랜드마크 메콩 리버사이드 호텔": {
        photos: ["/images/vientiane/info/accommodations/landmark-mekong-riverside-hotel-vientiane.jpg"],
        summary: "메콩강변의 대형 시설을 갖추어 여유로운 휴양감을 느낄 수 있는 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["메콩강변의 탁 트인 전망", "대규모 부대시설 보유"],
        tips: ["강변 산책로를 활용해 여유를 즐겨보세요"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Thatkhao Village, Sisattanak District, WJV8+FRR, Vientiane, Lao PDR, 라오스" }, { icon: "⭐", label: "평점", note: "4.3" }],
        location: { landmark: "남푸·메콩강·공항 이동 동선 확인 권장", airport: "비엔티안 왓따이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://sites.google.com/view/landmark-mekong-riverside/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16897313861165964300", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%9C%EB%93%9C%EB%A7%88%ED%81%AC+%EB%A9%94%EC%BD%A9+%EB%A6%AC%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C+%ED%98%B8%ED%85%94+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "이스틴 호텔 비엔티안": {
        photos: ["/images/vientiane/info/accommodations/eastin-hotel-vientiane.jpg"],
        summary: "메콩강 인근에 위치하여 현대적이고 깔끔한 시설을 자랑하는 신식 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["메콩강 인근의 쾌적한 위치", "현대적이고 세련된 객실 시설"],
        tips: ["강변 산책을 즐기기에 매우 좋습니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Unit11, Khaemkong Road Oumoung Village Sikhottabong District, XH9P+246, ວຽງຈັນ, 라오스" }, { icon: "⭐", label: "평점", note: "4.7" }],
        location: { landmark: "남푸·메콩강·공항 이동 동선 확인 권장", airport: "비엔티안 왓따이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.eastinhotelsresidences.com/eastinvientianelaos", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11293375775819611353", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%8A%A4%ED%8B%B4+%ED%98%B8%ED%85%94+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "이비스 비엔티안 남푸": {
        photos: ["/images/vientiane/info/accommodations/ibis-vientiane-nam-phu.jpg"],
        summary: "남푸 분수와 가까워 도보 이동이 편리하고 실용적인 체인 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["남푸 분수 인근의 뛰어난 접근성", "가성비 좋은 실용적인 숙소"],
        tips: ["주요 관광지와의 도보 동선을 고려할 때 추천합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "LA Vientiane, Nam Phu Square Setthathirath Road Ban Xieng, NgeunChanthabury 01000 라오스" }, { icon: "⭐", label: "평점", note: "4.6" }],
        location: { landmark: "남푸·메콩강·공항 이동 동선 확인 권장", airport: "비엔티안 왓따이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=8074&merchantid=seo-maps-LA-8074&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10249857872336479120", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EB%B9%84%EC%8A%A4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%82%A8%ED%91%B8+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "홀리데이 인 앤 스위트 비엔티안": {
        photos: ["/images/vientiane/info/accommodations/holiday-inn-suites-vientiane.jpg"],
        summary: "시내 체류와 공항 이동 모두 무난한 IHG 계열의 체인 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["공항 접근성 우수", "검증된 글로벌 체인 서비스"],
        tips: ["비즈니스 및 가족 여행객에게 추천합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Building B, Nongduang Nua Village, 20 ຖະໜົນສາມແສນໄທ, ວຽງຈັນ 01000 라오스" }, { icon: "⭐", label: "평점", note: "4.6" }],
        location: { landmark: "남푸·메콩강·공항 이동 동선 확인 권장", airport: "비엔티안 왓따이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12300048148832284234", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%80%EB%A6%AC%EB%8D%B0%EC%9D%B4+%EC%9D%B8+%EC%95%A4+%EC%8A%A4%EC%9C%84%ED%8A%B8+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "민트라 호텔 비엔티안": {
        photos: ["/images/vientiane/info/accommodations/mintra-hotel-vientiane.jpg"],
        summary: "여행자 거리와 남푸 분수 등 주요 명소와의 접근성이 뛰어난 도심 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["주요 관광지 인접", "도심 중심부 위치"],
        tips: ["도보 여행을 선호하는 여행객에게 적합합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "라오스 비엔티안" }, { icon: "⭐", label: "평점", note: "4.6" }],
        location: { landmark: "남푸·메콩강·공항 이동 동선 확인 권장", airport: "비엔티안 왓따이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.mintrahotelvientiane.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17509002182092918301", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%BC%ED%8A%B8%EB%9D%BC+%ED%98%B8%ED%85%94+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "르 샤름 비엔티안 호텔": {
        photos: ["/images/vientiane/info/accommodations/le-charme-vientiane-hotel.jpg"],
        summary: "강변과 카페 및 식당으로의 이동이 편리한 중급 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["강변 접근성 우수", "주변 카페 및 식당 동선 최적"],
        tips: ["강변 산책을 계획 중이라면 추천합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "2-12 Francois Nginn Street, 2, 12 Rue Francois Ngin, ວຽງຈັນ, 라오스" }, { icon: "⭐", label: "평점", note: "4.2" }],
        location: { landmark: "남푸·메콩강·공항 이동 동선 확인 권장", airport: "비엔티안 왓따이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3017416890533539666", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A5%B4+%EC%83%A4%EB%A6%84+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%98%B8%ED%85%94+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "S 파크 디자인 호텔": {
        photos: ["/images/vientiane/info/accommodations/s-park-design-hotel-vientiane.jpg"],
        summary: "깔끔한 인테리어와 합리적인 가격을 자랑하는 디자인 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["세련된 객실 디자인", "가성비 좋은 숙박"],
        tips: ["합리적인 여행 예산을 선호하는 분들께 적합합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "40 Dongnasok Road, Ban Nakham, Sikhottabong District, Laos, XHCP+CJH, ຮ່ອມ 5, ວຽງຈັນ, 라오스" }, { icon: "⭐", label: "평점", note: "4.3" }],
        location: { landmark: "남푸·메콩강·공항 이동 동선 확인 권장", airport: "비엔티안 왓따이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4394083254841407030", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=S+%ED%8C%8C%ED%81%AC+%EB%94%94%EC%9E%90%EC%9D%B8+%ED%98%B8%ED%85%94+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "므엉탄 럭셔리 비엔티안 호텔": {
        photos: ["/images/vientiane/info/accommodations/muong-thanh-luxury-vientiane-hotel.jpg"],
        summary: "대형 객실과 뛰어난 시내 접근성을 자랑하는 프리미엄 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["넓고 쾌적한 객실 공간", "비엔티안 시내 주요 명소와 인접"],
        tips: ["시내 관광을 목적으로 하는 여행객에게 추천합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Bourichane Road, Phonsinouan Village, Sisattanak District, Ban Phon Kheng 00856 라오스" }, { icon: "⭐", label: "평점", note: "4.3" }],
        location: { landmark: "남푸·메콩강·공항 이동 동선 확인 권장", airport: "비엔티안 왓따이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://booking.muongthanh.com/hotel-muong-thanh-luxury-vientiane", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16018791389867458660", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%80%EC%97%89%ED%83%84+%EB%9F%AD%EC%85%94%EB%A6%AC+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%98%B8%ED%85%94+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "서머셋 비엔티안": {
        photos: ["/images/vientiane/info/accommodations/somerset-vientiane.jpg"],
        summary: "가족 단위 여행객이나 장기 체류객에게 최적화된 레지던스형 숙소입니다.",
        updatedAt: "2026-07-21",
        highlights: ["취사 시설을 갖춘 레지던스 타입", "가족 및 장기 투숙에 적합한 환경"],
        tips: ["장기 여행 시 내 집 같은 편안함을 느낄 수 있습니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Souphanouvong Avenue, Sikhotabong, 라오스" }, { icon: "⭐", label: "평점", note: "4.1" }],
        location: { landmark: "남푸·메콩강·공항 이동 동선 확인 권장", airport: "비엔티안 왓따이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17210168517302027587", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%9C%EB%A8%B8%EC%85%8B+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "다바라 부티크 호텔": {
        photos: ["/images/vientiane/info/accommodations/dhavara-boutique-hotel-vientiane.jpg"],
        summary: "비엔티안 시내 중심부에 위치한 고전적이고 우아한 분위기의 부티크 숙소입니다.",
        updatedAt: "2026-07-21",
        highlights: ["시내 중심부의 편리한 접근성", "고전적인 인테리어와 고급스러운 분위기"],
        tips: ["주요 관광지와의 이동이 편리하여 여행객에게 추천합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "25 Manthalath Road , Ban Xieng Ngeun, Chanthabouly District، Vientiane 01000 라오스" }, { icon: "⭐", label: "평점", note: "4.4" }],
        location: { landmark: "남푸·메콩강·공항 이동 동선 확인 권장", airport: "비엔티안 왓따이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.dhavarahotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15965134526017602", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EB%B0%94%EB%9D%BC+%EB%B6%80%ED%8B%B0%ED%81%AC+%ED%98%B8%ED%85%94+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
