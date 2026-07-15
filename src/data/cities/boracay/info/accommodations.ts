import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "샹그릴라 보라카이": {
        photos: ["/images/boracay/info/accommodations/shangri-la-boracay.jpg"],
        summary: "프라이빗 비치를 품은 보라카이 최고의 럭셔리 리조트",
        updatedAt: "2026-07-15",
        highlights: ["전용 프라이빗 비치 보유", "최고급 스파 시설", "가족 여행객에게 최적화된 환경"],
        tips: ["스테이션 1의 조용한 휴식을 원하는 분들께 강력 추천해요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Boracay Island, Malay, 5608 Aklan, 필리핀", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.shangri-la.com/boracay/boracayresort/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15919298013311292389", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%B9%EA%B7%B8%EB%A6%B4%EB%9D%BC+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "디스커버리 쇼어스 보라카이": {
        photos: ["/images/boracay/info/accommodations/discovery-shores-boracay.jpg"],
        summary: "화이트 비치의 중심에서 즐기는 품격 있는 휴식",
        updatedAt: "2026-07-15",
        highlights: ["스테이션 1의 완벽한 위치", "친절하고 세심한 서비스", "해변 접근성 최고"],
        tips: ["다양한 해변 액티비티를 즐기기에 가장 편리한 위치예요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Station 1 Barangay Balabag Boracay Island, Malay, 5608 Aklan, 필리핀", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.discoveryboracay.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17284801775425198938", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94%EC%8A%A4%EC%BB%A4%EB%B2%84%EB%A6%AC+%EC%87%BC%EC%96%B4%EC%8A%A4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 린드 보라카이": {
        photos: ["/images/boracay/info/accommodations/the-lind-boracay.jpg"],
        summary: "세련된 디자인과 인피니티 풀이 매력적인 감성 숙소",
        updatedAt: "2026-07-15",
        highlights: ["인생샷 부르는 인피니티 풀", "모던하고 깔끔한 객실 인테리어", "탁 트인 오션뷰 전망"],
        tips: ["수영장에서 바라보는 일몰 타임은 꼭 놓치지 마세요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "필리핀 어클란 말레이 XWF8+68M", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.thelindhotels.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5080213111456385162", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%A6%B0%EB%93%9C+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크림슨 리조트 앤 스파 보라카이": {
        photos: ["/images/boracay/info/accommodations/crimson-resort-and-spa-boracay.jpg"],
        summary: "프라이빗하고 고급스러운 휴식을 원하는 분들께 추천하는 스테이션 제로의 프리미엄 리조트.",
        updatedAt: "2026-07-15",
        highlights: ["스테이션 제로의 조용하고 프라이빗한 분위기", "인생샷 부르는 넓고 예쁜 수영장"],
        tips: ["북적이는 곳을 피해 조용한 휴식을 원한다면 이곳이 정답이에요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "필리핀 5608 어클란 Boracay, 야팍", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://crimsonhotel.com/boracay/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11376282248746627984", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A6%BC%EC%8A%A8+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%95%A4+%EC%8A%A4%ED%8C%8C+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "뫼벤픽 리조트 앤 스파 보라카이": {
        photos: ["/images/boracay/info/accommodations/movenpick-resort-and-spa-boracay.jpg"],
        summary: "전용 비치와 맛있는 조식으로 유명한 가족 여행객 맞춤형 리조트.",
        updatedAt: "2026-07-15",
        highlights: ["여유로운 전용 비치 이용 가능", "퀄리티 높은 조식 뷔페"],
        tips: ["아이와 함께하는 가족 단위 여행객에게 만족도가 높아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Punta Bunga Rd, Boracay, Malay, 5608 Aklan, 필리핀", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://movenpick.accor.com/en/asia/philippines/boracay/resort-spa-boracay.html?merchantid=seo-maps-PH-B4P1&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&utm_content=Boracay", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7855975386548881987", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AB%BC%EB%B2%A4%ED%94%BD+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%95%A4+%EC%8A%A4%ED%8C%8C+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "헤난 크리스탈 샌즈 리조트": {
        photos: ["/images/boracay/info/accommodations/henann-crystal-sands-resort-boracay.jpg"],
        summary: "화이트 비치의 중심, 접근성과 수영장 시설이 압도적인 인기 숙소.",
        updatedAt: "2026-07-15",
        highlights: ["스테이션 1의 환상적인 해변 접근성", "리조트 곳곳에 연결된 대형 수영장"],
        tips: ["위치가 좋아 주변 맛집과 카페 이동이 매우 편리해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Beachfront, Station 1, Boracay Island, Malay, 5608 Aklan, 필리핀", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2111861891634901378", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%A4%EB%82%9C+%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%83%88+%EC%83%8C%EC%A6%88+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "헤난 팜 비치 리조트": {
        photos: ["/images/boracay/info/accommodations/henann-palm-beach-resort-boracay.jpg"],
        summary: "화이트 비치 접근성이 최고인 보라카이 대표 스테이션 2 숙소",
        updatedAt: "2026-07-15",
        highlights: ["넓은 수영장으로 물놀이하기 최적", "해변 바로 앞 위치로 이동 편리"],
        tips: ["스테이션 2 중심가라 주변 맛집과 이동하기 좋음"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Beachfront, Station 2, Boracay Island, Malay, 5608 Aklan, 필리핀", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5345265605894286119", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%A4%EB%82%9C+%ED%8C%9C+%EB%B9%84%EC%B9%98+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "헤난 리젠시 리조트 앤 스파": {
        photos: ["/images/boracay/info/accommodations/henann-regency-resort-and-spa-boracay.jpg"],
        summary: "다양한 수영장과 부대시설을 갖춘 스테이션 2의 클래식한 리조트",
        updatedAt: "2026-07-15",
        highlights: ["여러 개의 수영장을 보유해 물놀이 즐기기 좋음", "화이트 비치 접근성 우수"],
        tips: ["가족 단위 여행객에게 특히 추천하는 곳"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Beachfront, Station 2, XW5G+5M8 Balabag Boracay Islan Boracay, White Beach Path, Malay, 5608 Aklan, 필리핀", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6169273956712871258", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%A4%EB%82%9C+%EB%A6%AC%EC%A0%A0%EC%8B%9C+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%95%A4+%EC%8A%A4%ED%8C%8C+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "헤난 프라임 비치 리조트": {
        photos: ["/images/boracay/info/accommodations/henann-prime-beach-resort-boracay.jpg"],
        summary: "스테이션 1의 조용하고 쾌적한 휴식을 원하는 분들께 딱인 곳",
        updatedAt: "2026-07-15",
        highlights: ["스테이션 1 위치로 비교적 한적함", "깔끔하고 현대적인 시설"],
        tips: ["북적이는 곳보다 조용한 휴식을 원한다면 추천"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Station 1 Boracay Island, Malay, Aklan, 필리핀", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1604106506301375168", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%A4%EB%82%9C+%ED%94%84%EB%9D%BC%EC%9E%84+%EB%B9%84%EC%B9%98+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코스트 보라카이": {
        photos: ["/images/boracay/info/accommodations/coast-boracay.jpg"],
        summary: "화이트 비치 중심가에서 누리는 최고의 접근성과 럭셔리함.",
        updatedAt: "2026-07-15",
        highlights: ["스테이션 2 해변 바로 앞 위치", "프리미엄급 객실 컨디션", "맛있는 조식 메뉴"],
        tips: ["해변 이동이 매우 편리해서 물놀이하기 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "COAST, Station 2 Beachfront, XW5G+4VV Boracay Island, Sunset Road, Malay, 5600 Aklan, 필리핀", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.coastboracay.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1886066070232271454", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EC%8A%A4%ED%8A%B8+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아스토리아 커런트 보라카이": {
        photos: ["/images/boracay/info/accommodations/astoria-current-boracay.jpg"],
        summary: "스테이션 3의 여유로움을 담은 세련된 감성 리조트.",
        updatedAt: "2026-07-15",
        highlights: ["모던하고 깔끔한 인테리어", "조용하고 프라이빗한 분위기", "멋진 수영장 시설"],
        tips: ["북적이는 곳보다 조용한 휴식을 원하는 분들께 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Boracay Island, Sitio Mangayad, Station 3, Malay, 5608 Aklan, 필리핀", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://astoriacurrent.com/?utm_source=google&utm_medium=organic&utm_campaign=gmb", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2260436909633402758", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%95%84+%EC%BB%A4%EB%9F%B0%ED%8A%B8+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아쿠아 보라카이": {
        photos: ["/images/boracay/info/accommodations/aqua-boracay.png"],
        summary: "불라복 비치 근처에서 즐기는 가성비 좋은 트렌디한 숙소.",
        updatedAt: "2026-07-15",
        highlights: ["불라복 비치 접근성 우수", "감각적인 객실 디자인", "합리적인 가격대"],
        tips: ["수상 스포츠를 즐기기에 딱 좋은 위치예요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Bulabog Beach, Balabag, Boracay Island, Malay 5608, Boracay Bulabog Rd, Malay, Aklan, 필리핀", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.aquaboracay.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16119624310858233511", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%BF%A0%EC%95%84+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "앰배서더 인 파라다이스": {
        photos: ["/images/boracay/info/accommodations/ambassador-in-paradise-resort-boracay.jpg"],
        summary: "스테이션 1의 조용한 해변을 즐기기 좋은 가성비 숙소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["스테이션 1 위치로 깨끗한 해변 접근성", "깔끔하고 아늑한 객실 컨디션"],
        tips: ["조용한 휴식을 원하는 여행객에게 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Station 1 Boracay Island, Malay, Aklan, 필리핀", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.ambassadorinparadise.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12978186128734817671", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%B0%EB%B0%B0%EC%84%9C%EB%8D%94+%EC%9D%B8+%ED%8C%8C%EB%9D%BC%EB%8B%A4%EC%9D%B4%EC%8A%A4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "투 시즌스 보라카이": {
        photos: ["/images/boracay/info/accommodations/two-seasons-boracay-resort.jpg"],
        summary: "화이트 비치의 활기찬 분위기를 만끽할 수 있는 세련된 리조트입니다.",
        updatedAt: "2026-07-15",
        highlights: ["해변과 가까운 최적의 위치", "쾌적하고 현대적인 부대시설"],
        tips: ["수영장 시설이 잘 되어 있어 물놀이하기 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Aklan West Rd Boracay, XWC8+8XR, White Beach Path, Malay, 5608 Aklan, 필리핀", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://twoseasonsresorts.com/boracay", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12761729435245433539", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%88%AC+%EC%8B%9C%EC%A6%8C%EC%8A%A4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "만다린 베이 리조트 앤 스파": {
        photos: ["/images/boracay/info/accommodations/mandarin-bay-resort-and-spa-boracay.jpg"],
        summary: "고급스러운 스파와 함께 여유로운 호캉스를 즐기기 좋습니다.",
        updatedAt: "2026-07-15",
        highlights: ["럭셔리한 분위기의 객실과 스파", "스테이션 2의 편리한 인프라 접근성"],
        tips: ["스파 패키지를 이용해 여행의 피로를 풀어보세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Boracay Island Station, 2 Sunset Road, Malay, Aklan, 필리핀", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://mandarinpremier.com/mandarin-bay-boracay/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9506703990498345864", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%EB%8B%A4%EB%A6%B0+%EB%B2%A0%EC%9D%B4+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%95%A4+%EC%8A%A4%ED%8C%8C+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
