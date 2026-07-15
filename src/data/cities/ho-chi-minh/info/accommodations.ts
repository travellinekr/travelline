import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "파크 하얏트 사이공": {
        photos: ["/images/ho-chi-minh/info/accommodations/park-hyatt-saigon-ho-chi-minh-city.jpg"],
        summary: "클래식하고 우아한 분위기에서 즐기는 호치민 최고의 럭셔리 스테이.",
        updatedAt: "2026-07-15",
        highlights: ["고풍스러운 인테리어와 품격 있는 서비스", "시내 중심가 위치로 주요 관광지 접근성 최고"],
        tips: ["조식이 매우 정갈하니 꼭 포함해서 예약하세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2 Công trường Lam Sơn, Bến Nghé, Sài Gòn, Hồ Chí Minh 700000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4417121817027181243", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%ED%81%AC+%ED%95%98%EC%96%8F%ED%8A%B8+%EC%82%AC%EC%9D%B4%EA%B3%B5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 레버리 사이공": {
        photos: ["/images/ho-chi-minh/info/accommodations/the-reverie-saigon-ho-chi-minh-city.jpg"],
        summary: "화려함의 극치, 마치 궁전에 온 듯한 느낌을 주는 초호화 호텔.",
        updatedAt: "2026-07-15",
        highlights: ["이탈리아 명품 가구로 꾸며진 압도적인 인테리어", "환상적인 시티뷰를 자랑하는 수영장과 바"],
        tips: ["특별한 기념일이나 호캉스 목적이라면 강력 추천."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "22-36 Nguyễn Huệ, Sài Gòn, Hồ Chí Minh, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.thereveriesaigon.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12683491373053497248", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%A0%88%EB%B2%84%EB%A6%AC+%EC%82%AC%EC%9D%B4%EA%B3%B5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카라벨 사이공": {
        photos: ["/images/ho-chi-minh/info/accommodations/caravelle-saigon-ho-chi-minh-city.jpg"],
        summary: "역사와 전통이 느껴지는 클래식하고 안정적인 호텔.",
        updatedAt: "2026-07-15",
        highlights: ["오페라 하우스 인근의 편리한 위치", "전통 있는 서비스와 깔끔한 객실 컨디션"],
        tips: ["주변 맛집과 카페를 도보로 이용하기 매우 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "19-23 Công trường Lam Sơn, Sài Gòn, Hồ Chí Minh, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1177773432294078390", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%9D%BC%EB%B2%A8+%EC%82%AC%EC%9D%B4%EA%B3%B5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 마제스틱 사이공": {
        photos: ["/images/ho-chi-minh/info/accommodations/hotel-majestic-saigon-ho-chi-minh-city.jpg"],
        summary: "프랑스 식민지 시대의 고풍스러운 매력을 그대로 간직한 호치민의 상징적인 역사적 호텔입니다.",
        updatedAt: "2026-07-15",
        highlights: ["클래식한 프랑스식 인테리어", "사이공 강 전망이 아름다운 테라스"],
        tips: ["역사적인 분위기를 선호하는 여행자에게 강력 추천합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1 Đồng Khởi, Sài Gòn, Hồ Chí Minh, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18398927503742282742", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%A7%88%EC%A0%9C%EC%8A%A4%ED%8B%B1+%EC%82%AC%EC%9D%B4%EA%B3%B5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "인터컨티넨탈 사이공": {
        photos: ["/images/ho-chi-minh/info/accommodations/intercontinental-saigon-hotel-ho-chi-minh-city.jpg"],
        summary: "동꼬이 거리 중심에 위치해 쇼핑과 관광을 동시에 즐기기 좋은 클래식한 숙소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["주요 명소 도보 이동 가능", "전통적인 고급스러움"],
        tips: ["호치민의 활기찬 시내 분위기를 느끼기에 최적의 위치입니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Hotel Continental Saigon, 132 Đồng Khởi, Sài Gòn, Hồ Chí Minh 700000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.booking.com/hotel/vn/continental-saigon.html?aid=7955654", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8195718976047571246", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B8%ED%84%B0%EC%BB%A8%ED%8B%B0%EB%84%A8%ED%83%88+%EC%82%AC%EC%9D%B4%EA%B3%B5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "뉴월드 사이공 호텔": {
        photos: ["/images/ho-chi-minh/info/accommodations/new-world-saigon-hotel-ho-chi-minh-city.png"],
        summary: "현대적이고 세련된 시설로 쾌적한 휴식을 보장하는 프리미엄 호텔입니다.",
        updatedAt: "2026-07-15",
        highlights: ["넓고 깔끔한 객실 컨디션", "훌륭한 조식과 수영장"],
        tips: ["가족 여행객이나 비즈니스 출장객에게 매우 적합합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "76 Lê Lai, Bến Thành, Hồ Chí Minh 700000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://saigon.newworldhotels.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3077900276901012951", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%89%B4%EC%9B%94%EB%93%9C+%EC%82%AC%EC%9D%B4%EA%B3%B5+%ED%98%B8%ED%85%94+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "롯데 호텔 사이공": {
        photos: ["/images/ho-chi-minh/info/accommodations/lotte-hotel-saigon-ho-chi-minh-city.jpg"],
        summary: "호치민의 클래식한 럭셔리를 경험할 수 있는 품격 있는 호텔입니다.",
        updatedAt: "2026-07-15",
        highlights: ["최상급 서비스와 조식", "호치민 중심가 위치", "쾌적하고 고급스러운 객실"],
        tips: ["부모님과 함께하는 가족 여행객에게 강력 추천합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2A-4A Tôn Đức Thắng, Phường, Sài Gòn, Hồ Chí Minh 700000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.lottehotel.com/saigon-hotel/en", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16066699602537526590", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%AF%EB%8D%B0+%ED%98%B8%ED%85%94+%EC%82%AC%EC%9D%B4%EA%B3%B5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "르네상스 리버사이드 호텔 사이공": {
        photos: ["/images/ho-chi-minh/info/accommodations/renaissance-riverside-hotel-saigon.jpg"],
        summary: "사이공 강변의 아름다운 전망을 만끽할 수 있는 낭만적인 숙소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["환상적인 리버뷰", "사이공 강 인근 산책로 접근성", "여유로운 야외 수영장"],
        tips: ["꼭 강이 보이는 전망의 객실을 예약하세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "8-15 Tôn Đức Thắng, Sài Gòn, Hồ Chí Minh, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/sgnbr-renaissance-riverside-hotel-saigon/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5425127119428530305", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A5%B4%EB%84%A4%EC%83%81%EC%8A%A4+%EB%A6%AC%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C+%ED%98%B8%ED%85%94+%EC%82%AC%EC%9D%B4%EA%B3%B5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리버티 센트럴 사이공 시티포인트": {
        photos: ["/images/ho-chi-minh/info/accommodations/liberty-central-saigon-citypoint-hotel.jpg"],
        summary: "트렌디한 감각과 뛰어난 접근성을 모두 갖춘 가성비 좋은 호텔입니다.",
        updatedAt: "2026-07-15",
        highlights: ["세련된 루프탑 수영장", "주요 관광지 도보 이동 가능", "모던하고 깔끔한 인테리어"],
        tips: ["시내 중심가 맛집 탐방을 즐기는 여행자에게 딱 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "59 Pasteur, Sài Gòn, Hồ Chí Minh, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.libertycentralsaigoncitypoint.com/en/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8534896421544628832", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EB%B2%84%ED%8B%B0+%EC%84%BC%ED%8A%B8%EB%9F%B4+%EC%82%AC%EC%9D%B4%EA%B3%B5+%EC%8B%9C%ED%8B%B0%ED%8F%AC%EC%9D%B8%ED%8A%B8+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "실버랜드 벤탄 호텔": {
        photos: ["/images/ho-chi-minh/info/accommodations/silverland-ben-thanh-hotel-ho-chi-minh-city.png"],
        summary: "벤탄 시장 근처라 위치가 정말 좋고 깔끔한 호텔이에요.",
        updatedAt: "2026-07-15",
        highlights: ["벤탄 시장 도보 이동 가능", "세련된 인테리어", "친절한 서비스"],
        tips: ["주변에 맛집이 많아 식사 해결하기 편해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "14-16 Lê Lai, Bến Thành, Hồ Chí Minh 70000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://silverlandhotels.com/silverland-ben-thanh-hotel", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7915794929570609184", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A4%EB%B2%84%EB%9E%9C%EB%93%9C+%EB%B2%A4%ED%83%84+%ED%98%B8%ED%85%94+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "퓨전 스위트 사이공": {
        photos: ["/images/ho-chi-minh/info/accommodations/fusion-suites-saigon-ho-chi-minh-city.jpg"],
        summary: "모던한 분위기와 멋진 수영장을 즐길 수 있는 프리미엄 숙소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["루프탑 수영장", "세련된 객실 디자인", "쾌적한 시설"],
        tips: ["수영장에서 보는 시티뷰가 정말 예뻐요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-5 Sương Nguyệt Anh, Street, Bến Thành, Hồ Chí Minh 71000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://fusion-suites.com/saigon/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10797058034797437903", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%93%A8%EC%A0%84+%EC%8A%A4%EC%9C%84%ED%8A%B8+%EC%82%AC%EC%9D%B4%EA%B3%B5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오락 샤르네 호텔": {
        photos: ["/images/ho-chi-minh/info/accommodations/au-lac-charner-hotel-ho-chi-minh-city.jpg"],
        summary: "클래식하고 고급스러운 분위기를 느낄 수 있는 가성비 좋은 호텔이에요.",
        updatedAt: "2026-07-15",
        highlights: ["프렌치 스타일 인테리어", "조용한 휴식 가능", "친절한 직원"],
        tips: ["조용하게 쉬고 싶은 여행자에게 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "87 Hồ Tùng Mậu, Sài Gòn, Hồ Chí Minh 70000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://aulachotels.com/au-lac-charner-district-1-hotel/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6868516276336961908", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%9D%BD+%EC%83%A4%EB%A5%B4%EB%84%A4+%ED%98%B8%ED%85%94+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 닛코 사이공": {
        photos: ["/images/ho-chi-minh/info/accommodations/hotel-nikko-saigon-ho-chi-minh-city.jpg"],
        summary: "일본식 서비스의 세심함과 클래식한 품격을 느낄 수 있는 호치민 대표 호텔입니다.",
        updatedAt: "2026-07-15",
        highlights: ["넓고 쾌적한 객실 컨디션", "정갈하고 맛있는 조식 메뉴", "주요 관광지 이동이 편리한 위치"],
        tips: ["가족 단위 여행객에게 특히 추천하는 숙소예요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "235 Nguyễn Văn Cừ, Cầu Ông Lãnh, Hồ Chí Minh, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3859079654878349765", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%8B%9B%EC%BD%94+%EC%82%AC%EC%9D%B4%EA%B3%B5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미아 사이공 럭셔리 부티크 호텔": {
        photos: ["/images/ho-chi-minh/info/accommodations/mia-saigon-luxury-boutique-hotel.jpg"],
        summary: "사이공 강변의 여유로움을 만끽할 수 있는 로맨틱한 부티크 호텔입니다.",
        updatedAt: "2026-07-15",
        highlights: ["강 전망이 아름다운 인피니티 풀", "프라이빗하고 고급스러운 분위기", "도심 속 휴양지 같은 느낌"],
        tips: ["커플 여행이나 기념일 숙소로 강력 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "02-04 Đường số 10, An Khánh, Hồ Chí Minh 700000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.miasaigon.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=265676120793805864", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%95%84+%EC%82%AC%EC%9D%B4%EA%B3%B5+%EB%9F%AD%EC%85%94%EB%A6%AC+%EB%B6%80%ED%8B%B0%ED%81%AC+%ED%98%B8%ED%85%94+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마이 하우스 사이공 호텔": {
        photos: ["/images/ho-chi-minh/info/accommodations/mai-house-saigon-hotel-ho-chi-minh-city.jpg"],
        summary: "세련된 디자인과 최상급 서비스로 만족도가 매우 높은 프리미엄 호텔입니다.",
        updatedAt: "2026-07-15",
        highlights: ["감각적이고 모던한 인테리어", "친절하고 세심한 호스피탈리티", "호치민 중심가에서의 편리한 접근성"],
        tips: ["호텔 곳곳이 포토존이라 사진 찍기 정말 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Lối vào sảnh: 01, Ngô Thời Nhiệm/157 Nam Kỳ Khởi Nghĩa, Xuân Hòa, Hồ Chí Minh 700000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://maihouse.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11728848184919750670", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%9D%B4+%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%82%AC%EC%9D%B4%EA%B3%B5+%ED%98%B8%ED%85%94+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
