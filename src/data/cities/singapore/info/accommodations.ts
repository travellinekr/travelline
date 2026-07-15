import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "마리나 베이 샌즈": {
        photos: ["/images/singapore/info/accommodations/marina-bay-sands-singapore.jpg"],
        summary: "싱가포르의 상징적인 인피니티 풀과 화려한 야경을 만끽할 수 있는 곳",
        updatedAt: "2026-07-15",
        highlights: ["인피니티 풀", "쇼핑몰 접근성", "분수쇼 관람"],
        tips: ["수영장 운영 시간 확인 필수", "고층 객실 요청 추천"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "10 Bayfront Ave, Singapore 018956", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=174684905472875991", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A6%AC%EB%82%98+%EB%B2%A0%EC%9D%B4+%EC%83%8C%EC%A6%88+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "래플스 싱가포르": {
        photos: ["/images/singapore/info/accommodations/raffles-singapore.jpg"],
        summary: "싱가포르의 역사를 품은 클래식하고 우아한 럭셔리 호텔",
        updatedAt: "2026-07-15",
        highlights: ["클래식 인테리어", "프라이빗 서비스", "역사적 가치"],
        tips: ["애프터눈 티 예약 필수", "드레스 코드 확인"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "189768", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12934321247233795988", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%98%ED%94%8C%EC%8A%A4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 풀러턴 호텔 싱가포르": {
        photos: ["/images/singapore/info/accommodations/the-fullerton-hotel-singapore.jpg"],
        summary: "유서 깊은 건축물에서 즐기는 품격 있는 마리나 베이 뷰",
        updatedAt: "2026-07-15",
        highlights: ["마리나 베이 전망", "고풍스러운 분위기", "최상급 서비스"],
        tips: ["전망 좋은 객실 예약 추천", "주변 산책로 이용"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1 Fullerton Sq, 싱가포르 049178", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.fullertonhotels.com/fullerton-hotel-singapore", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4738117008212586704", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%92%80%EB%9F%AC%ED%84%B4+%ED%98%B8%ED%85%94+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리츠칼튼 밀레니아 싱가포르": {
        photos: ["/images/singapore/info/accommodations/the-ritz-carlton-millenia-singapore.jpg"],
        summary: "마리나 베이의 환상적인 전망을 자랑하는 럭셔리 호텔",
        updatedAt: "2026-07-15",
        highlights: ["압도적인 마리나 베이 뷰 객실", "넓고 고급스러운 인테리어", "최상급 컨시어지 서비스"],
        tips: ["전망 좋은 고층 객실을 미리 요청하면 인생샷 가능"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "7 Raffles Ave., Marina Bay, 싱가포르 039799", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.ritzcarlton.com/en/hotels/sinrz-the-ritz-carlton-millenia-singapore/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12570201045894287199", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%B8%A0%EC%B9%BC%ED%8A%BC+%EB%B0%80%EB%A0%88%EB%8B%88%EC%95%84+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "만다린 오리엔탈 싱가포르": {
        photos: ["/images/singapore/info/accommodations/mandarin-oriental-singapore.jpg"],
        summary: "마리나 베이 중심에서 즐기는 품격 있는 휴식",
        updatedAt: "2026-07-15",
        highlights: ["탁 트인 바다 전망", "세련된 라운지 분위기", "주요 명소와의 뛰어난 접근성"],
        tips: ["수영장에서 바라보는 시티뷰가 정말 아름다움"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "5 Raffles Ave., Singapore 039797", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.mandarinoriental.com/en/singapore/marina-bay?src=loc.yext.mosin.ggl", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2319620118525988565", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%EB%8B%A4%EB%A6%B0+%EC%98%A4%EB%A6%AC%EC%97%94%ED%83%88+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "팬 퍼시픽 싱가포르": {
        photos: ["/images/singapore/info/accommodations/pan-pacific-singapore.jpg"],
        summary: "마리나 베이 산책로와 가까운 프리미엄 호텔",
        updatedAt: "2026-07-15",
        highlights: ["깔끔하고 모던한 객실 컨디션", "다양한 맛을 자랑하는 조식", "쇼핑몰 인접성"],
        tips: ["주변 쇼핑몰과 연결되어 있어 이동이 매우 편리함"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "7 Raffles Blvd, Singapore 039595", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.panpacific.com/en/hotels-and-resorts/pp-marina.html?utm_source=google&utm_medium=business_listing&utm_campaign=googlemybusiness", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15459649003988841204", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%AC+%ED%8D%BC%EC%8B%9C%ED%94%BD+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "파크로얄 컬렉션 피커링": {
        photos: ["/images/singapore/info/accommodations/parkroyal-collection-pickering-singapore.jpg"],
        summary: "도심 속 초록빛 휴식을 선사하는 친환경 호텔",
        updatedAt: "2026-07-15",
        highlights: ["수직 정원이 매력적인 건축미", "도심 속 오아시스 같은 분위기"],
        tips: ["마리나 베이 산책 코스로 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3 Upper Pickering St, 싱가포르 058289", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.panpacific.com/en/hotels-and-resorts/pr-collection-pickering.html?utm_source=google&utm_medium=business_listing&utm_campaign=googlemybusiness", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10192933062865865421", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%ED%81%AC%EB%A1%9C%EC%96%84+%EC%BB%AC%EB%A0%89%EC%85%98+%ED%94%BC%EC%BB%A4%EB%A7%81+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카펠라 싱가포르 센토사": {
        photos: ["/images/singapore/info/accommodations/capella-singapore-sentosa.png"],
        summary: "센토사 섬에서 만나는 품격 있는 럭셔리 스테이",
        updatedAt: "2026-07-15",
        highlights: ["프라이빗하고 조용한 휴식 공간", "고급스러운 서비스와 시설"],
        tips: ["기념일 여행지로 강력 추천합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1 The Knolls, Sentosa Island, 싱가포르 098297", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6123263206880478565", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%A0%EB%9D%BC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%84%BC%ED%86%A0%EC%82%AC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "샹그릴라 싱가포르": {
        photos: ["/images/singapore/info/accommodations/shangri-la-singapore.jpg"],
        summary: "가족 모두가 만족하는 프리미엄 호텔",
        updatedAt: "2026-07-15",
        highlights: ["넓고 쾌적한 객실", "아이들이 놀기 좋은 수영장"],
        tips: ["가족 단위 여행객에게 최적의 선택이에요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "22 Orange Grove Rd, 싱가포르 258350", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.shangri-la.com/singapore/shangrila", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4751180691306659723", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%B9%EA%B7%B8%EB%A6%B4%EB%9D%BC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "안다즈 싱가포르": {
        photos: ["/images/singapore/info/accommodations/andaz-singapore.jpg"],
        summary: "시티홀 근처, 세련된 감각이 돋보이는 도심 속 럭셔리 호텔이에요.",
        updatedAt: "2026-07-15",
        highlights: ["환상적인 루프탑 바 전망", "감각적이고 트렌디한 객실 인테리어", "주요 관광지와의 뛰어난 접근성"],
        tips: ["해 질 녘 루프탑 바에서 야경 즐기기는 필수예요!"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "5 Fraser St, Singapore 189354", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8028506155348849089", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%88%EB%8B%A4%EC%A6%88+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오아시아 호텔 다운타운": {
        photos: ["/images/singapore/info/accommodations/oasia-hotel-downtown-singapore.jpg"],
        summary: "도심 속 초록빛 휴식을 느낄 수 있는 정원 컨셉의 호텔이에요.",
        updatedAt: "2026-07-15",
        highlights: ["싱그러운 수직 정원 뷰", "차이나타운 인근의 편리한 위치", "쾌적하고 깔끔한 객실 시설"],
        tips: ["도심 속 힐링이 필요할 때 머물기 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "100 Peck Seah St, 싱가포르 079333", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.oasiahotels.com/en/singapore/hotels/oasia-hotel-downtown?utm_source=googleplaces_ohd&utm_medium=organic", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13562016661907414356", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%95%84%EC%8B%9C%EC%95%84+%ED%98%B8%ED%85%94+%EB%8B%A4%EC%9A%B4%ED%83%80%EC%9A%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 보스 싱가포르": {
        photos: ["/images/singapore/info/accommodations/hotel-boss-singapore.jpg"],
        summary: "합리적인 가격으로 머물기 좋은 가성비 최고의 숙소예요.",
        updatedAt: "2026-07-15",
        highlights: ["부담 없는 가격과 실속 있는 구성", "주변에 로컬 맛집이 가득함", "캄퐁 글람 지역 접근성 좋음"],
        tips: ["숙박비를 아껴 쇼핑이나 미식에 투자하고 싶은 분들께 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "500 Jln Sultan, 싱가포르 199020", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16640890853510031489", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%B3%B4%EC%8A%A4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빌리지 호텔 센토사": {
        photos: ["/images/singapore/info/accommodations/village-hotel-sentosa-singapore.jpg"],
        summary: "센토사 섬의 휴양 분위기를 만끽할 수 있는 가성비 좋은 리조트형 호텔입니다.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 테마의 야외 수영장", "센토사 주요 어트랙션 접근성 우수"],
        tips: ["가족 단위 여행객이나 호캉스 목적에 강력 추천"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "10 Artillery Ave, #02-01 Palawan Ridge, Sentosa Island, 싱가포르 099951", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.villagehotels.asia/en/hotels/village-hotel-sentosa?utm_source=googleplaces_vhs&utm_medium=organic", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14744687353858464545", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%8C%EB%A6%AC%EC%A7%80+%ED%98%B8%ED%85%94+%EC%84%BC%ED%86%A0%EC%82%AC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "요텔 싱가포르 오차드": {
        photos: ["/images/singapore/info/accommodations/yotel-singapore-orchard-road.jpg"],
        summary: "오차드 로드의 중심에서 스마트하고 효율적인 숙박을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-15",
        highlights: ["오차드 쇼핑가 인접", "콤팩트하지만 알찬 객실 구성"],
        tips: ["쇼핑과 도심 관광을 동시에 잡고 싶은 여행자에게 제격"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "366 Orchard Rd, Singapore 238904", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.yotel.com/en/hotels/yotel-singapore?utm_source=Google&utm_medium=Yext_YOSOR", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14447055280794616700", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%94%ED%85%94+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%98%A4%EC%B0%A8%EB%93%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라이프 푸난 싱가포르": {
        photos: ["/images/singapore/info/accommodations/lyf-funan-singapore.jpg"],
        summary: "푸난 몰 내 위치해 쇼핑과 미식을 즐기기 최적화된 트렌디한 코리빙 호텔입니다.",
        updatedAt: "2026-07-15",
        highlights: ["푸난 몰 바로 옆의 편리한 위치", "젊고 감각적인 인테리어와 커뮤니티 공간"],
        tips: ["혼자 여행하거나 친구와 함께하는 힙한 여행에 추천"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "67 Hill St, Level 4 Funan, 싱가포르 179370", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5698302414407817697", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%9D%B4%ED%94%84+%ED%91%B8%EB%82%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
