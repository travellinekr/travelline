import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "할레쿨라니 오키나와": {
        photos: ["/images/okinawa/info/accommodations/halekulani-okinawa.jpg"],
        summary: "온나손 해변의 푸른 바다를 품은 최고급 럭셔리 리조트",
        updatedAt: "2026-07-13",
        highlights: ["에메랄드빛 프라이빗 비치", "환상적인 인피니티 풀"],
        tips: ["해변 산책로가 잘 되어 있어 아침 산책을 즐기기에 좋아요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1967-1 Nakama, Onna, Kunigami District, Okinawa 904-0401 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.okinawa.halekulani.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2223391507703505036", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%A0%EB%A0%88%EC%BF%A8%EB%9D%BC%EB%8B%88+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리츠칼튼 오키나와": {
        photos: ["/images/okinawa/info/accommodations/the-ritz-carlton-okinawa.jpg"],
        summary: "나고의 울창한 숲과 골프장 전망이 어우러진 프리미엄 휴양지",
        updatedAt: "2026-07-13",
        highlights: ["초록빛 숲속에서의 평온한 휴식", "품격 있는 서비스와 조식"],
        tips: ["골프 여행객이나 조용한 호캉스를 원하는 분들께 추천해요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1343-1 Kise, Nago, Okinawa 905-0026 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.ritzcarlton.com/en/hotels/okarz-the-ritz-carlton-okinawa/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16637586120666543608", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%B8%A0%EC%B9%BC%ED%8A%BC+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하얏트 리젠시 나하 오키나와": {
        photos: ["/images/okinawa/info/accommodations/hyatt-regency-naha-okinawa.jpg"],
        summary: "국제거리 접근성이 뛰어나 도심 관광에 최적화된 호텔",
        updatedAt: "2026-07-13",
        highlights: ["국제거리 쇼핑과 맛집 탐방 용이", "깔끔하고 현대적인 객실 컨디션"],
        tips: ["나하 시내 중심가 여행을 계획 중이라면 최고의 선택지예요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-chōme-6-20 Makishi, Naha, Okinawa 900-0013 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8319191278259974938", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%96%8F%ED%8A%B8+%EB%A6%AC%EC%A0%A0%EC%8B%9C+%EB%82%98%ED%95%98+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 컬렉티브 나하": {
        photos: ["/images/okinawa/info/accommodations/hotel-collective-naha-okinawa.jpg"],
        summary: "국제거리 중심부에서 쇼핑과 맛집을 즐기기 좋은 넓은 객실의 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["국제거리 바로 앞 최고의 접근성", "쾌적하고 여유로운 객실 공간"],
        tips: ["주변에 유명한 기념품샵과 맛집이 많아 도보 여행객에게 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-5-7 Matsuo, Naha, Okinawa 900-0014 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://hotelcollective.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16515178238970526716", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EC%BB%AC%EB%A0%89%ED%8B%B0%EB%B8%8C+%EB%82%98%ED%95%98+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "머큐어 호텔 오키나와 나하": {
        photos: ["/images/okinawa/info/accommodations/mercure-hotel-okinawa-naha.jpg"],
        summary: "유이레일 역과 가까워 이동이 편리한 가성비 좋은 실속형 숙소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["유이레일 접근성이 좋아 이동이 편리함", "깔끔하고 합리적인 가격대의 호텔"],
        tips: ["나하 시내 위주의 짧은 일정이나 가성비를 중시하는 여행자에게 딱이에요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-chōme-3-19 Tsubogawa, Naha, Okinawa 900-0025 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=8725&merchantid=seo-maps-JP-8725&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7813712287495790897", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A8%B8%ED%81%90%EC%96%B4+%ED%98%B8%ED%85%94+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%EB%82%98%ED%95%98+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 몬토레 오키나와 스파 앤 리조트": {
        photos: ["/images/okinawa/info/accommodations/hotel-monterey-okinawa-spa-and-resort.jpg"],
        summary: "타이거비치 바로 앞, 가족 여행객에게 추천하는 대형 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["타이거비치 앞 환상적인 해변 접근성", "가족 단위 여행에 최적화된 넓은 시설"],
        tips: ["리조트 내 스파와 수영장을 활용해 여유로운 호캉스를 즐겨보세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1550番地1 Fuchaku, Onna, Kunigami District, Okinawa 904-0413 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.hotelmonterey.co.jp/okinawa/?utm_source=google&utm_medium=mybusiness&utm_campaign=website_monoki", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2488866188860006505", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%AA%AC%ED%86%A0%EB%A0%88+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%EC%8A%A4%ED%8C%8C+%EC%95%A4+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "르네상스 오키나와 리조트": {
        photos: ["/images/okinawa/info/accommodations/renaissance-okinawa-resort.jpg"],
        summary: "아이와 함께라면 돌고래 체험이 가능한 이곳을 추천해요.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 해양 액티비티", "가족 친화적인 부대시설"],
        tips: ["인기 있는 프로그램은 사전 예약 필수!"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3425-2 Yamada, Onna, Kunigami District, Okinawa 904-0416 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/okarn-renaissance-okinawa-resort/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11902830974747872947", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A5%B4%EB%84%A4%EC%83%81%EC%8A%A4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카후 리조트 후차쿠 콘도 호텔": {
        photos: ["/images/okinawa/info/accommodations/kafuu-resort-fuchaku-condo-hotel-okinawa.jpg"],
        summary: "넓은 객실과 취사 시설 덕분에 가족 여행에 딱이에요.",
        updatedAt: "2026-07-13",
        highlights: ["쾌적하고 넓은 콘도형 객실", "탁 트인 오션뷰"],
        tips: ["간단한 조리가 가능해 아이 동반 시 편리해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "일본 〒904-0413 Okinawa, Kunigami District, Onna, Fuchaku, 志利 福地原 246-1", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.kafuu-okinawa.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17891408675920675200", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%9B%84+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%9B%84%EC%B0%A8%EC%BF%A0+%EC%BD%98%EB%8F%84+%ED%98%B8%ED%85%94+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "ANA 인터컨티넨탈 만자 비치 리조트": {
        photos: ["/images/okinawa/info/accommodations/ana-intercontinental-manza-beach-resort-okinawa.jpg"],
        summary: "만자 해변의 아름다운 풍경을 바로 앞에서 즐길 수 있어요.",
        updatedAt: "2026-07-13",
        highlights: ["만자 비치와 가까운 접근성", "다채로운 해양 레저 프로그램"],
        tips: ["리조트 앞 해변에서 스노클링하기 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2260 Serakaki, Onna, Kunigami District, Okinawa 904-0493 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12970961375609260803", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=ANA+%EC%9D%B8%ED%84%B0%EC%BB%A8%ED%8B%B0%EB%84%A8%ED%83%88+%EB%A7%8C%EC%9E%90+%EB%B9%84%EC%B9%98+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 닛코 알리빌라": {
        photos: ["/images/okinawa/info/accommodations/hotel-nikko-alivila-okinawa.jpg"],
        summary: "요미탄 해변의 남유럽풍 분위기가 강점인 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["요미탄 해변의 남유럽풍 분위기가 강점인 리조트입니다.", "평점 4.5", "오키나와 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "600 Gima, Yomitan, Nakagami District, Okinawa 904-0393 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.alivila.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17243127377165158380", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%8B%9B%EC%BD%94+%EC%95%8C%EB%A6%AC%EB%B9%8C%EB%9D%BC+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
