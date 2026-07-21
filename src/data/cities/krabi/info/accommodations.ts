import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "라일레이 베이 리조트 & 스파": {
        photos: ["/images/krabi/info/accommodations/railay-bay-resort-spa-krabi.jpg"],
        summary: "라일레이 비치로의 이동이 매우 편리한 리조트형 숙소입니다.",
        updatedAt: "2026-07-21",
        highlights: ["편리한 라일레이 비치 동선", "여유로운 리조트 분위기"],
        tips: ["해변 산책을 즐기기에 최적의 위치입니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "145 Tambon Ao Nang, Amphoe Mueang Krabi, Chang Wat Krabi 81180 태국" }, { icon: "⭐", label: "평점", note: "4.1" }],
        location: { landmark: "아오낭·라일레이·공항 이동 동선 확인 권장", airport: "끄라비국제공항 이동 시간은 지역별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.krabi-railaybay.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17042807426699227069", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%9D%BC%EB%A0%88%EC%9D%B4+%EB%B2%A0%EC%9D%B4+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%26+%EC%8A%A4%ED%8C%8C+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "샌드 씨 리조트 라일레이": {
        photos: ["/images/krabi/info/accommodations/sand-sea-resort-railay-beach-krabi.jpg"],
        summary: "라일레이 서쪽 해변에 접근하기 좋은 편리한 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["서쪽 해변 높은 접근성", "쾌적한 숙박 환경"],
        tips: ["해질녘 해변 산책을 추천합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "39, Tambon Ao Nang, Amphoe Mueang Krabi, Chang Wat Krabi 81180 태국" }, { icon: "⭐", label: "평점", note: "4.1" }],
        location: { landmark: "아오낭·라일레이·공항 이동 동선 확인 권장", airport: "끄라비국제공항 이동 시간은 지역별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.krabisandsea.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12334926188370050288", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%8C%EB%93%9C+%EC%94%A8+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%9D%BC%EC%9D%BC%EB%A0%88%EC%9D%B4+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "센타라 그랜드 비치 리조트 끄라비": {
        photos: ["/images/krabi/info/accommodations/centara-grand-beach-resort-villas-krabi.jpg"],
        summary: "파이 플롱 베이 전용 해변을 품고 있어 프라이빗한 휴양을 즐기기 좋은 대형 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["전용 해변 보유", "대규모 부지의 리조트 시설"],
        tips: ["해변 근처 객실을 선택하면 더욱 완벽한 휴식을 즐길 수 있습니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "396-396/1, Tambon Ao Nang, Amphoe Mueang Krabi, Chang Wat Krabi 81180 태국" }, { icon: "⭐", label: "평점", note: "4.3" }],
        location: { landmark: "아오낭·라일레이·공항 이동 동선 확인 권장", airport: "끄라비국제공항 이동 시간은 지역별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.centarahotelsresorts.com/centaragrand/ckbr/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10587039296275055392", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%BC%ED%83%80%EB%9D%BC+%EA%B7%B8%EB%9E%9C%EB%93%9C+%EB%B9%84%EC%B9%98+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%81%84%EB%9D%BC%EB%B9%84+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "파난 끄라비 리조트": {
        photos: ["/images/krabi/info/accommodations/panan-krabi-resort-ao-nang.jpg"],
        summary: "아오낭 중심가와 가까워 이동이 편리하며 멋진 수영장을 갖춘 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["아오낭 중심지 위치", "매력적인 수영장 시설"],
        tips: ["주변 맛집과 상점을 이용하기에 매우 편리한 동선입니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "945 Tambon Ao Nang, Amphoe Mueang Krabi, Chang Wat Krabi 81180 태국" }, { icon: "⭐", label: "평점", note: "4.4" }],
        location: { landmark: "아오낭·라일레이·공항 이동 동선 확인 권장", airport: "끄라비국제공항 이동 시간은 지역별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.panankrabiresort.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3134576698832337251", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%EB%82%9C+%EB%81%84%EB%9D%BC%EB%B9%84+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "아오낭 피오레 리조트": {
        photos: ["/images/krabi/info/accommodations/aonang-fiore-resort-krabi.jpg"],
        summary: "언덕과 정원 분위기를 느낄 수 있는 조용한 아오낭의 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["평화로운 정원 분위기", "조용한 휴식 가능"],
        tips: ["조용한 휴식을 원하는 여행객에게 추천합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "764, Tambon Ao Nang, Muang, Chang Wat Krabi 81180 태국" }, { icon: "⭐", label: "평점", note: "4.2" }],
        location: { landmark: "아오낭·라일레이·공항 이동 동선 확인 권장", airport: "끄라비국제공항 이동 시간은 지역별 상이" },
        links: [
            { label: "공식 사이트", url: "http://aonangfiore.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4772528377358061731", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%98%A4%EB%82%AD+%ED%94%BC%EC%98%A4%EB%A0%88+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "씨 시커 끄라비 리조트": {
        photos: ["/images/krabi/info/accommodations/sea-seeker-krabi-resort-ao-nang.jpg"],
        summary: "아오낭 여행자들이 즐겨 찾는 가성비 좋은 리조트 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["뛰어난 가성비", "아오낭 중심가 접근성"],
        tips: ["합리적인 가격의 숙소를 찾는 분들께 적합합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "963 Tambon Ao Nang, Amphoe Mueang Krabi, Chang Wat Krabi 81180 태국" }, { icon: "⭐", label: "평점", note: "4.5" }],
        location: { landmark: "아오낭·라일레이·공항 이동 동선 확인 권장", airport: "끄라비국제공항 이동 시간은 지역별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.seaseekerkrabiresort.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6112825962471920012", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%94%A8+%EC%8B%9C%EC%BB%A4+%EB%81%84%EB%9D%BC%EB%B9%84+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "홀리데이 아오낭 비치 리조트": {
        photos: ["/images/krabi/info/accommodations/holiday-ao-nang-beach-resort-krabi.jpg"],
        summary: "노파랏타라와 아오낭 해변을 편리하게 이용할 수 있는 가족 친화형 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["해변 접근성이 뛰어난 위치", "가족 여행객에게 최적화된 시설"],
        tips: ["아이와 함께하는 여행이라면 키즈 클럽 시설을 미리 확인하세요"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "244, Moo 2, Tambon Ao Nang, Krabi, Chang Wat Krabi 81180 태국" }, { icon: "⭐", label: "평점", note: "4.5" }],
        location: { landmark: "아오낭·라일레이·공항 이동 동선 확인 권장", airport: "끄라비국제공항 이동 시간은 지역별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5794820555577941353", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%80%EB%A6%AC%EB%8D%B0%EC%9D%B4+%EC%95%84%EC%98%A4%EB%82%AD+%EB%B9%84%EC%B9%98+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "아바니 아오낭 클리프 끄라비 리조트": {
        photos: ["/images/krabi/info/accommodations/avani-ao-nang-cliff-krabi-resort.jpg"],
        summary: "아오낭 중심가에서 환상적인 절벽 전망을 감상할 수 있는 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["웅장한 절벽 뷰 제공", "아오낭 중심부의 편리한 위치"],
        tips: ["전망 좋은 객실을 예약하기 위해 사전 요청을 하는 것이 좋습니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "328, Tambon Ao Nang, Muang, Chang Wat Krabi 81180 태국" }, { icon: "⭐", label: "평점", note: "4.6" }],
        location: { landmark: "아오낭·라일레이·공항 이동 동선 확인 권장", airport: "끄라비국제공항 이동 시간은 지역별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5906959606784299328", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%B0%94%EB%8B%88+%EC%95%84%EC%98%A4%EB%82%AD+%ED%81%B4%EB%A6%AC%ED%94%84+%EB%81%84%EB%9D%BC%EB%B9%84+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "블루소텔 끄라비 아오낭 비치": {
        photos: ["/images/krabi/info/accommodations/bluesotel-krabi-ao-nang-beach.jpg"],
        summary: "아오낭 메인로드와 가까워 접근성이 매우 뛰어난 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["아오낭 비치 인근의 편리한 위치", "메인 도로와의 높은 접근성"],
        tips: ["주변 맛집과 상점을 이용하기에 최적의 장소입니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "778 Tambon Ao Nang, Amphoe Mueang Krabi, Chang Wat Krabi 81180 태국" }, { icon: "⭐", label: "평점", note: "4.4" }],
        location: { landmark: "아오낭·라일레이·공항 이동 동선 확인 권장", airport: "끄라비국제공항 이동 시간은 지역별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.bluesotelkrabi.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10353678874398919326", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%94%EB%A3%A8%EC%86%8C%ED%85%94+%EB%81%84%EB%9D%BC%EB%B9%84+%EC%95%84%EC%98%A4%EB%82%AD+%EB%B9%84%EC%B9%98+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "비욘드 끄라비 리조트": {
        photos: ["/images/krabi/info/accommodations/beyond-krabi-resort-klong-muang.jpg"],
        summary: "클롱무앙 해변에서 조용하고 여유로운 휴양을 즐기기에 적합한 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["클롱무앙 해변의 평화로운 분위기", "프라이빗한 휴식을 위한 최적의 장소"],
        tips: ["조용한 휴식을 원하는 여행객에게 추천합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "98, Tambon Nong Thale, Amphoe Mueang Krabi, Chang Wat Krabi 81180 태국" }, { icon: "⭐", label: "평점", note: "4.3" }],
        location: { landmark: "아오낭·라일레이·공항 이동 동선 확인 권장", airport: "끄라비국제공항 이동 시간은 지역별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7184040350317441837", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%84%EC%9A%98%EB%93%9C+%EB%81%84%EB%9D%BC%EB%B9%84+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
