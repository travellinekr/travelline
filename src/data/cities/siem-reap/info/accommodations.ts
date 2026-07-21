import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "쿠프리 호텔 씨엠립": {
        photos: ["/images/siem-reap/info/accommodations/kouprey-hotel-siem-reap.jpg"],
        summary: "앙코르와트 투어 전후로 편안하게 휴식하기 좋은 가성비 높은 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["합리적인 가격대의 숙박 시설", "앙코르와트 일정에 최적화된 위치"],
        tips: ["가성비를 중시하는 여행객에게 추천합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Top Town Road, Krous Village Rd, ក្រុងសៀមរាប, 캄보디아" }, { icon: "⭐", label: "평점", note: "4.4" }],
        location: { landmark: "앙코르와트·펍스트리트 동선 확인 권장", airport: "씨엠립 앙코르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.hotelkoupreyangkor.org/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=444010104526969134", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BF%A0%ED%94%84%EB%A6%AC+%ED%98%B8%ED%85%94+%EC%94%A8%EC%97%A0%EB%A6%BD+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "소카 씨엠립 리조트 & 컨벤션 센터": {
        photos: ["/images/siem-reap/info/accommodations/sokha-siem-reap-resort-convention-center.jpg"],
        summary: "다양하고 넓은 부대시설을 자랑하는 럭셔리한 5성급 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["규모가 큰 대형 리조트 시설", "다채로운 부대시설 보유"],
        tips: ["호캉스를 즐기려는 가족 단위 여행객에게 적합합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Angkor Cultural & Tourism Complex Junction, Road 60, Krong Siem Reap, 캄보디아" }, { icon: "⭐", label: "평점", note: "4.4" }],
        location: { landmark: "앙코르와트·펍스트리트 동선 확인 권장", airport: "씨엠립 앙코르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.sokhahotels.com.kh/siemreap/room", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6096732735763763165", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%8C%EC%B9%B4+%EC%94%A8%EC%97%A0%EB%A6%BD+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%26+%EC%BB%A8%EB%B2%A4%EC%85%98+%EC%84%BC%ED%84%B0+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "로얄 크라운 호텔 & 스파": {
        photos: ["/images/siem-reap/info/accommodations/royal-crown-hotel-spa-siem-reap.jpg"],
        summary: "시내 접근성이 뛰어나 여행하기 편리한 호텔 및 스파 숙소입니다.",
        updatedAt: "2026-07-21",
        highlights: ["우수한 시내 접근성", "편안한 스파 시설"],
        tips: ["주변 맛집과 이동 동선을 고려해 예약하세요"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "29 7 Makara St, Krong Siem Reap 17253 캄보디아" }, { icon: "⭐", label: "평점", note: "4.4" }],
        location: { landmark: "앙코르와트·펍스트리트 동선 확인 권장", airport: "씨엠립 앙코르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.royalcrownhotelspa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13627568569007305050", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EC%96%84+%ED%81%AC%EB%9D%BC%EC%9A%B4+%ED%98%B8%ED%85%94+%26+%EC%8A%A4%ED%8C%8C+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "파크 하얏트 씨엠립": {
        photos: ["/images/siem-reap/info/accommodations/park-hyatt-siem-reap.png"],
        summary: "올드마켓과 펍스트리트 인근에 위치하여 관광하기 좋은 고급 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["럭셔리한 숙박 경험", "주요 관광지와의 높은 접근성"],
        tips: ["고급스러운 휴식을 원하는 여행객에게 추천합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Sivutha Blvd, Krong Siem Reap 17252 캄보디아" }, { icon: "⭐", label: "평점", note: "4.7" }],
        location: { landmark: "앙코르와트·펍스트리트 동선 확인 권장", airport: "씨엠립 앙코르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11286786112287229266", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%ED%81%AC+%ED%95%98%EC%96%8F%ED%8A%B8+%EC%94%A8%EC%97%A0%EB%A6%BD+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "FCC 앙코르 바이 아바니": {
        photos: ["/images/siem-reap/info/accommodations/fcc-angkor-by-avani-siem-reap.jpg"],
        summary: "강변과 왕궁 주변 산책하기 좋은 위치의 부티크 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["왕궁 인근의 편리한 접근성", "강변 산책 동선에 최적화된 위치"],
        tips: ["주변 왕궁 산책 코스를 함께 계획하면 좋습니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Next to the Royal Residence, រុក្ខវិថី ពោធិកំបោរ, ក្រុងសៀមរាប, 캄보디아" }, { icon: "⭐", label: "평점", note: "4.6" }],
        location: { landmark: "앙코르와트·펍스트리트 동선 확인 권장", airport: "씨엠립 앙코르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5489286292195221995", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=FCC+%EC%95%99%EC%BD%94%EB%A5%B4+%EB%B0%94%EC%9D%B4+%EC%95%84%EB%B0%94%EB%8B%88+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "자야 하우스 리버 파크": {
        photos: ["/images/siem-reap/info/accommodations/jaya-house-river-park-siem-reap.jpg"],
        summary: "조용한 리버사이드 분위기를 느낄 수 있는 고급 부티크 숙소입니다.",
        updatedAt: "2026-07-21",
        highlights: ["평온한 강변 분위기", "높은 고객 만족도의 고급 서비스"],
        tips: ["조용한 휴식을 원하는 여행객에게 추천합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "River Rd, Krong Siem Reap, 캄보디아" }, { icon: "⭐", label: "평점", note: "4.9" }],
        location: { landmark: "앙코르와트·펍스트리트 동선 확인 권장", airport: "씨엠립 앙코르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.jayahouseriverpark.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7261968770124843232", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%90%EC%95%BC+%ED%95%98%EC%9A%B0%EC%8A%A4+%EB%A6%AC%EB%B2%84+%ED%8C%8C%ED%81%AC+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "트리라인 어반 리조트": {
        photos: ["/images/siem-reap/info/accommodations/treeline-urban-resort-siem-reap.jpg"],
        summary: "현대적인 디자인과 도심 접근성을 모두 갖춘 세련된 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["모던한 인테리어와 쾌적한 시설", "시내 주요 명소로의 뛰어난 접근성"],
        tips: ["도심 여행과 휴식을 동시에 즐기기에 최적입니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Achasva Street Wat Bo Village, ក្រុងសៀមរាប, 캄보디아" }, { icon: "⭐", label: "평점", note: "4.9" }],
        location: { landmark: "앙코르와트·펍스트리트 동선 확인 권장", airport: "씨엠립 앙코르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://treelinehotels.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12475591472302330521", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8A%B8%EB%A6%AC%EB%9D%BC%EC%9D%B8+%EC%96%B4%EB%B0%98+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "바이로스 호텔": {
        photos: ["/images/siem-reap/info/accommodations/viroth-s-hotel-siem-reap.jpg"],
        summary: "방문객들의 후기 만족도가 매우 높은 시내 중심의 부티크 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["높은 고객 만족도를 자랑하는 서비스", "시내 중심가에 위치한 편리한 입지"],
        tips: ["부티크 호텔 특유의 아늑한 분위기를 선호하는 분들께 추천합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Street 24, Village, Wat Bo Rd, Krong Siem Reap 171204 캄보디아" }, { icon: "⭐", label: "평점", note: "4.9" }],
        location: { landmark: "앙코르와트·펍스트리트 동선 확인 권장", airport: "씨엠립 앙코르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.viroth-hotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5650393222568870513", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%9D%B4%EB%A1%9C%EC%8A%A4+%ED%98%B8%ED%85%94+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "골든 템플 레지던스": {
        photos: ["/images/siem-reap/info/accommodations/golden-temple-residence-siem-reap.jpg"],
        summary: "올드마켓 인근에 위치하여 여행 동선이 매우 편리한 숙소입니다.",
        updatedAt: "2026-07-21",
        highlights: ["올드마켓 접근성 우수", "편리한 여행 동선"],
        tips: ["주변 시장 구경과 함께 식사를 해결하기 좋습니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Sok San Rd, Krong Siem Reap 17252 캄보디아" }, { icon: "⭐", label: "평점", note: "4.9" }],
        location: { landmark: "앙코르와트·펍스트리트 동선 확인 권장", airport: "씨엠립 앙코르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.goldentemple.asia/residence/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1320862557633358541", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A8%EB%93%A0+%ED%85%9C%ED%94%8C+%EB%A0%88%EC%A7%80%EB%8D%98%EC%8A%A4+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "보레이 앙코르 리조트 & 스파": {
        photos: ["/images/siem-reap/info/accommodations/borei-angkor-resort-spa-siem-reap.jpg"],
        summary: "클래식한 분위기의 대형 리조트로 수준 높은 스파 시설을 갖추고 있습니다.",
        updatedAt: "2026-07-21",
        highlights: ["클래식한 대형 리조트", "훌륭한 스파 시설"],
        tips: ["리조트 내 스파 서비스를 미리 예약하는 것을 추천합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "9V68+7QP, 0369 NR6, Krong Siem Reap 17252 캄보디아" }, { icon: "⭐", label: "평점", note: "4.7" }],
        location: { landmark: "앙코르와트·펍스트리트 동선 확인 권장", airport: "씨엠립 앙코르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.boreiangkor.com/special-offers", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1590610091107417967", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%EB%A0%88%EC%9D%B4+%EC%95%99%EC%BD%94%EB%A5%B4+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%26+%EC%8A%A4%ED%8C%8C+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
