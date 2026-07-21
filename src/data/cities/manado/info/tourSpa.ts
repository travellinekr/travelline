import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "부나켄 국립해양공원": {
        photos: ["/images/manado/info/tourSpa/bunaken-national-marine-park-manado.jpg"],
        summary: "세계적인 수준의 다이빙과 스노클링을 즐길 수 있는 해양 국립공원입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다채로운 산호초 군락", "풍부한 해양 생태계"],
        tips: ["스노클링 장비를 미리 준비하면 좋습니다."],
        duration: "반나절~1일",
        price: "투어별 상이",
        access: { area: "Pelabuhan Marina plazaa, Manado City, North Sulawesi, 인도네시아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6948478763678298103", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%80%EB%82%98%EC%BC%84+%EA%B5%AD%EB%A6%BD%ED%95%B4%EC%96%91%EA%B3%B5%EC%9B%90+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "부나켄 섬": {
        photos: ["/images/manado/info/tourSpa/bunaken-island-manado.jpg"],
        summary: "거북이와 아름다운 산호를 관찰할 수 있는 마나도 대표 섬 투어 명소입니다.",
        updatedAt: "2026-07-21",
        highlights: ["거북이 관찰 가능", "아름다운 바다 풍경"],
        tips: ["물때를 확인하고 방문하는 것을 추천합니다."],
        duration: "반나절~1일",
        price: "보트·투어별 상이",
        access: { area: "Bunaken, North Sulawesi, 인도네시아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16173316806817288111", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%80%EB%82%98%EC%BC%84+%EC%84%AC+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "실라덴 섬": {
        photos: ["/images/manado/info/tourSpa/siladen-island-manado.jpg"],
        summary: "부나켄 인근에 위치하여 조용하게 스노클링을 즐기기 좋은 섬입니다.",
        updatedAt: "2026-07-21",
        highlights: ["조용한 스노클링 환경", "부나켄 국립공원 접근성"],
        tips: ["스노클링 장비를 미리 준비하면 더욱 편리합니다."],
        duration: "반나절~1일",
        price: "투어별 상이",
        access: { area: "Siladen Island, Bunaken, Bunaken Kepulauan, Manado City, North Sulawesi, 인도네시아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14735958440733209942", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A4%EB%9D%BC%EB%8D%B4+%EC%84%AC+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "마나도 투아 섬": {
        photos: ["/images/manado/info/tourSpa/manado-tua-island.jpg"],
        summary: "화산섬의 아름다운 풍경과 환상적인 다이빙 포인트를 동시에 경험할 수 있습니다.",
        updatedAt: "2026-07-21",
        highlights: ["웅장한 화산섬 경관", "최적의 다이빙 포인트"],
        tips: ["다이빙을 계획 중이라면 물때를 미리 확인하세요."],
        duration: "반나절~1일",
        price: "투어별 상이",
        access: { area: "Manadotua Island, North Sulawesi, 인도네시아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14962579077434829834", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%82%98%EB%8F%84+%ED%88%AC%EC%95%84+%EC%84%AC+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "렘베 해협": {
        photos: ["/images/manado/info/tourSpa/lembeh-strait-bitung.jpg"],
        summary: "매크로 다이빙의 성지로 불리는 비퉁 방면의 유명한 다이빙 포인트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 마이크로 생물 관찰 가능", "매크로 다이빙 특화"],
        tips: ["수중 생물을 자세히 보기 위해 좋은 매크로 렌즈를 준비하세요."],
        duration: "1일",
        price: "다이빙샵별 상이",
        access: { area: "Lembeh Strait, 인도네시아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18062937409613803174", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%98%EB%B2%A0+%ED%95%B4%ED%98%91+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "탕코코 자연보호구역": {
        photos: ["/images/manado/info/tourSpa/tangkoko-nature-reserve-bitung.jpg"],
        summary: "안경원숭이와 울창한 열대림을 탐험할 수 있는 자연 투어 명소입니다.",
        updatedAt: "2026-07-21",
        highlights: ["희귀한 안경원숭이 관찰", "열대 우림 트레킹"],
        tips: ["야생 동물을 만나기 위해 가이드와 함께하는 투어를 추천합니다."],
        duration: "반나절~1일",
        price: "가이드·입장권 별도",
        access: { area: "Kasawari, Aertembaga, Bitung City, North Sulawesi, 인도네시아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8140227303842709183", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%95%EC%BD%94%EC%BD%94+%EC%9E%90%EC%97%B0%EB%B3%B4%ED%98%B8%EA%B5%AC%EC%97%AD+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "로콘산": {
        photos: ["/images/manado/info/tourSpa/mount-lokon-tomohon.jpg"],
        summary: "토모혼 인근에서 즐길 수 있는 화산 트레킹의 주요 후보지입니다.",
        updatedAt: "2026-07-21",
        highlights: ["화산 트레킹 코스 제공", "토모혼 지역의 자연 경관"],
        tips: ["트레킹을 위해 편안한 등산화와 복장을 준비하세요."],
        duration: "반나절",
        price: "가이드 조건 확인",
        access: { area: "인도네시아 술라웨시 우타라 Tomohon City, Tomohon Utara, Kayawu, 로콘산", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14733747229798266377", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EC%BD%98%EC%82%B0+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "리노우 호수": {
        photos: ["/images/manado/info/tourSpa/linow-lake-tomohon.jpg"],
        summary: "온도에 따라 색이 변하는 신비로운 호수와 고원 카페를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["색이 변하는 아름다운 호수", "주변의 전망 좋은 고원 카페"],
        tips: ["호수의 변화를 관찰하기 위해 날씨가 맑은 날 방문하는 것을 추천합니다."],
        duration: "1~2시간",
        price: "입장권 별도",
        access: { area: "Lake Linow, Lahendong, Tomohon Selatan, Tomohon City, North Sulawesi, 인도네시아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15684325967890905414", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EB%85%B8%EC%9A%B0+%ED%98%B8%EC%88%98+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "마하우 화산": {
        photos: ["/images/manado/info/tourSpa/mahawu-volcano-tomohon.jpg"],
        summary: "짧은 트레킹을 통해 아름다운 분화구를 감상할 수 있는 토모혼의 명소입니다.",
        updatedAt: "2026-07-21",
        highlights: ["가벼운 트레킹 코스", "웅장한 분화구 경관"],
        tips: ["편안한 운동화를 착용하세요"],
        duration: "1~2시간",
        price: "입장권 별도",
        access: { area: "Mount Mahawu, Kakaskasen Satu, Tomohon Utara, Tomohon City, North Sulawesi, 인도네시아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15616327661142733073", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%ED%95%98%EC%9A%B0+%ED%99%94%EC%82%B0+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "예수 축복상": {
        photos: ["/images/manado/info/tourSpa/jesus-blesses-manado.jpg"],
        summary: "마나도 시내 전경을 한눈에 내려다볼 수 있는 거대한 예수 조형물입니다.",
        updatedAt: "2026-07-21",
        highlights: ["대형 예수 조형물", "마나도 시내 전망"],
        tips: ["일몰 시간대에 방문하면 더욱 아름답습니다"],
        duration: "30분~1시간",
        price: "무료/현장 확인",
        access: { area: "인도네시아 술라웨시 우타라 Manado City, Malalayang, Winangun Satu", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11644854334615944043", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%88%EC%88%98+%EC%B6%95%EB%B3%B5%EC%83%81+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "수카르노 브리지": {
        photos: ["/images/manado/info/tourSpa/soekarno-bridge-manado.jpg"],
        summary: "마나도 해안선과 아름다운 일몰을 감상하기에 최적화된 다리입니다.",
        updatedAt: "2026-07-21",
        highlights: ["환상적인 일몰 전망", "아름다운 마나도 해안선 조망"],
        tips: ["해 질 녘 시간에 맞춰 방문하는 것을 추천합니다."],
        duration: "30분~1시간",
        price: "무료",
        access: { area: "FRWQ+CP3, North Wenang, Wenang, Manado City, North Sulawesi, 인도네시아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4714820392308577206", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%98%EC%B9%B4%EB%A5%B4%EB%85%B8+%EB%B8%8C%EB%A6%AC%EC%A7%80+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "말라라양 비치": {
        photos: ["/images/manado/info/tourSpa/malalayang-beach-manado.jpg"],
        summary: "시내와 가까워 접근성이 좋으며 해변 산책과 일몰을 즐기기 좋은 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["여유로운 해변 산책로", "도심 근처의 편리한 위치"],
        tips: ["산책 후 주변 맛집에서 현지 음식을 즐겨보세요."],
        duration: "1~2시간",
        price: "무료/현장 확인",
        access: { area: "Jl. Wolter Monginsidi No.83, Malalayang Dua, Kec. Malalayang, Kota Manado, Sulawesi Utara 95162 인도네시아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3768308825897168912", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%90%EB%9D%BC%EB%9D%BC%EC%96%91+%EB%B9%84%EC%B9%98+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "풀리산 비치": {
        photos: ["/images/manado/info/tourSpa/pulisan-beach-north-sulawesi.jpg"],
        summary: "북술라웨시의 아름다운 해변 드라이브와 물놀이를 즐기기에 최적인 장소입니다.",
        updatedAt: "2026-07-21",
        highlights: ["아름다운 해안가 드라이브 코스", "다양한 해상 액티비티 가능"],
        tips: ["물놀이 후를 대비해 여벌 옷과 수건을 꼭 챙기세요."],
        duration: "반나절~1일",
        price: "교통·입장 조건 확인",
        access: { area: "Kinunang Beach, Pulisan, Kec. Likupang Tim., Manado, Sulawesi Utara 95375 인도네시아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "공식 사이트", url: "http://www.pulisanresort.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12186000921529117191", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%92%80%EB%A6%AC%EC%82%B0+%EB%B9%84%EC%B9%98+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "리하가 섬": {
        photos: ["/images/manado/info/tourSpa/lihaga-island-north-sulawesi.jpg"],
        summary: "맑은 바닷물과 눈부신 백사장을 자랑하는 환상적인 섬 투어 명소입니다.",
        updatedAt: "2026-07-21",
        highlights: ["투명한 바다와 깨끗한 백사장", "스노클링하기 좋은 환경"],
        tips: ["섬 투어 시 자외선 차단을 위한 선크림을 준비하세요."],
        duration: "1일",
        price: "보트·투어별 상이",
        access: { area: "Towade Lehaga, 인도네시아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2472306114496431097", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%ED%95%98%EA%B0%80+%EC%84%AC+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "투 피시 다이버스 부나켄": {
        photos: ["/images/manado/info/tourSpa/two-fish-divers-bunaken.jpg"],
        summary: "부나켄 다이빙 여행자들이 즐겨 찾는 유명한 다이브 센터입니다.",
        updatedAt: "2026-07-21",
        highlights: ["부나켄 국립공원 다이빙 전문", "다양한 다이빙 프로그램 제공"],
        tips: ["사전 예약 후 방문하는 것을 권장합니다"],
        duration: "반나절~1일",
        price: "다이빙 패키지별 상이",
        access: { area: "Pangulisang Beach Bunaken Island, Bunaken, Bunaken Kepulauan, Manado City, North Sulawesi, 인도네시아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "공식 사이트", url: "http://www.twofishdivers.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7869271107587737555", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%88%AC+%ED%94%BC%EC%8B%9C+%EB%8B%A4%EC%9D%B4%EB%B2%84%EC%8A%A4+%EB%B6%80%EB%82%98%EC%BC%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
