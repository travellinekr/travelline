import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "더 페닌슐라 홍콩": {
        photos: ["/images/hong-kong/info/accommodations/the-peninsula-hong-kong.jpg"],
        summary: "홍콩의 역사를 간직한 클래식하고 품격 있는 럭셔리 호텔",
        updatedAt: "2026-07-14",
        highlights: ["전통적인 애프터눈 티 경험", "상징적인 롤스로이스 서비스"],
        tips: ["애프터눈 티는 예약이 필수예요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Salisbury Rd, Tsim Sha Tsui, 홍콩", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17267874180162557099", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%8E%98%EB%8B%8C%EC%8A%90%EB%9D%BC+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "포시즌스 호텔 홍콩": {
        photos: ["/images/hong-kong/info/accommodations/four-seasons-hotel-hong-kong.jpg"],
        summary: "빅토리아 하버의 환상적인 뷰를 품은 현대적인 럭셔리 숙소",
        updatedAt: "2026-07-14",
        highlights: ["탁 트인 하버 뷰 객실", "센트럴 중심가의 편리한 위치"],
        tips: ["하버 뷰 객실로 예약해야 감동이 두 배예요!"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "8 Finance St, Central, 홍콩", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.fsphk.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6795130145267412399", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%EC%8B%9C%EC%A6%8C%EC%8A%A4+%ED%98%B8%ED%85%94+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "만다린 오리엔탈 홍콩": {
        photos: ["/images/hong-kong/info/accommodations/mandarin-oriental-hong-kong.jpg"],
        summary: "세련된 서비스와 미식의 정점을 경험할 수 있는 상징적인 호텔",
        updatedAt: "2026-07-14",
        highlights: ["세계적인 수준의 다이닝", "럭셔리한 스파 시설"],
        tips: ["호텔 내 유명 레스토랑은 미리 예약하는 걸 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "5 Connaught Road, Central, 홍콩", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.mandarinoriental.com/en/hong-kong/victoria-harbour?src=loc.yext.mohkg.ggl", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8164315515732382963", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%EB%8B%A4%EB%A6%B0+%EC%98%A4%EB%A6%AC%EC%97%94%ED%83%88+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "로즈우드 홍콩": {
        photos: ["/images/hong-kong/info/accommodations/rosewood-hong-kong.jpg"],
        summary: "빅토리아 하버가 한눈에 들어오는 침사추이 최고의 럭셔리 호텔",
        updatedAt: "2026-07-14",
        highlights: ["환상적인 하버뷰 객실", "세련된 인테리어와 서비스"],
        tips: ["하버뷰 객실 예약은 필수"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "18 Salisbury Rd, Tsim Sha Tsui, 홍콩", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.rosewoodhotels.com/en/hong-kong", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3244380047082099871", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EC%A6%88%EC%9A%B0%EB%93%9C+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 어퍼 하우스": {
        photos: ["/images/hong-kong/info/accommodations/the-upper-house-hong-kong.jpg"],
        summary: "도심 속 프라이빗한 휴식을 선사하는 어드미럴티의 세련된 호텔",
        updatedAt: "2026-07-14",
        highlights: ["탁 트인 도심 전망", "차분하고 고급스러운 무드"],
        tips: ["조용한 힐링을 원하는 여행자에게 추천"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Upper House, 88 Queensway, Admiralty, 홍콩", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.upperhouse.com/en/hongkong", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6647980070732850538", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%96%B4%ED%8D%BC+%ED%95%98%EC%9A%B0%EC%8A%A4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리츠칼튼 홍콩": {
        photos: ["/images/hong-kong/info/accommodations/the-ritz-carlton-hong-kong.jpg"],
        summary: "구름 위에서 즐기는 압도적인 스카이라인 뷰와 초고층의 매력",
        updatedAt: "2026-07-14",
        highlights: ["압도적인 스카이라인 전망", "ICC 빌딩 최상층 위치"],
        tips: ["전망 좋은 바(Bar) 방문은 필수"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "九龙柯士甸道西1号, International Commerce Centre (ICC), 1 Austin Rd W, Kowloon, 홍콩", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.ritzcarlton.com/en/hotels/hkgkw-the-ritz-carlton-hong-kong/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10203039232210279301", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%B8%A0%EC%B9%BC%ED%8A%BC+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "W 홍콩": {
        photos: ["/images/hong-kong/info/accommodations/w-hong-kong.jpg"],
        summary: "힙한 감성과 화려한 분위기를 만끽할 수 있는 홍콩의 핫플레이스",
        updatedAt: "2026-07-14",
        highlights: ["트렌디한 루프탑 바", "세련된 인테리어", "활기찬 에너지"],
        tips: ["수영장에서 인생샷 남기기 좋아요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "홍콩", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.gov.hk/en/residents/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17332863731023661436", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=W+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "케리 호텔 홍콩": {
        photos: ["/images/hong-kong/info/accommodations/kerry-hotel-hong-kong.jpg"],
        summary: "빅토리아 하버의 탁 트인 전망을 마주하며 여유로운 휴식을 즐기는 곳",
        updatedAt: "2026-07-14",
        highlights: ["환상적인 하버 뷰", "넓고 쾌적한 객실", "야외 수영장"],
        tips: ["하버 뷰 객실 예약은 필수예요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "38 Hung Luen Rd, Hung Hom, 홍콩", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.shangri-la.com/hongkong/kerry/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14835575670293206231", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BC%80%EB%A6%AC+%ED%98%B8%ED%85%94+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 아이콘 홍콩": {
        photos: ["/images/hong-kong/info/accommodations/hotel-icon-hong-kong.jpg"],
        summary: "모던하고 세련된 디자인이 돋보이는 프리미엄 호텔",
        updatedAt: "2026-07-14",
        highlights: ["침사추이 인근의 편리한 위치", "고급스러운 분위기", "훌륭한 조식"],
        tips: ["주변 과학 박물관과 함께 둘러보기 좋아요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "17 Science Museum Rd, Tsim Sha Tsui, 홍콩", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.hotel-icon.com/?utm_source=google-local&utm_medium=listing", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16752544755824561610", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EC%95%84%EC%9D%B4%EC%BD%98+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코디스 홍콩": {
        photos: ["/images/hong-kong/info/accommodations/cordis-hong-kong.jpg"],
        summary: "쇼핑의 중심 몽콕에서 즐기는 럭셔리한 휴식",
        updatedAt: "2026-07-14",
        highlights: ["몽콕 쇼핑가와 바로 연결되는 편리한 위치", "쾌적하고 넓은 객실 컨디션"],
        tips: ["쇼핑 후 바로 쉬기 좋아 가족 여행객에게 강력 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "555 Shanghai St, Mong Kok, 홍콩", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14616188045506459607", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EB%94%94%EC%8A%A4+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하얏트 센트릭 빅토리아 하버": {
        photos: ["/images/hong-kong/info/accommodations/hyatt-centric-victoria-harbour-hong-kong.jpg"],
        summary: "빅토리아 하버의 환상적인 전망을 품은 세련된 호텔",
        updatedAt: "2026-07-14",
        highlights: ["탁 트인 하버 뷰 객실", "모던하고 감각적인 인테리어"],
        tips: ["일몰 시간에 맞춰 창가 자리를 예약하면 인생샷을 건질 수 있어요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1 North Point Estate Ln, North Point, 홍콩", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8096716531884307294", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%96%8F%ED%8A%B8+%EC%84%BC%ED%8A%B8%EB%A6%AD+%EB%B9%85%ED%86%A0%EB%A6%AC%EC%95%84+%ED%95%98%EB%B2%84+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이튼 HK": {
        photos: ["/images/hong-kong/info/accommodations/eaton-hk-hong-kong.jpg"],
        summary: "홍콩의 힙한 감성을 그대로 느낄 수 있는 가성비 숙소",
        updatedAt: "2026-07-14",
        highlights: ["트렌디하고 활기찬 호텔 분위기", "주변 로컬 맛집 접근성 최고"],
        tips: ["가성비를 중시하는 혼행족이나 친구와 함께하는 여행에 딱이에요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "홍콩 Yau Ma Tei, 逸東酒店, 380 Nathan Road, Jordan", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.eatonworkshop.com/hong-kong?utm_source=gmb&utm_medium=organic&utm_campaign=gmb", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3663969110848279377", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%ED%8A%BC+HK+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 미라 홍콩": {
        photos: ["/images/hong-kong/info/accommodations/the-mira-hong-kong.jpg"],
        summary: "침사추이 중심가에 위치해 쇼핑과 맛집 탐방하기 최적화된 트렌디한 호텔이에요.",
        updatedAt: "2026-07-14",
        highlights: ["침사추이 핵심 요지", "세련되고 현대적인 객실 컨디션"],
        tips: ["주변에 유명 맛집이 많아 식도락 여행객에게 강력 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "118-130 Nathan Rd, Tsim Sha Tsui, 홍콩", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.themirahotel.com/hong-kong/en/?utm_source=google&utm_medium=organic&utm_campaign=local-listing", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9518898726672974216", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%AF%B8%EB%9D%BC+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "페이지148 홍콩": {
        photos: ["/images/hong-kong/info/accommodations/page148-hong-kong.jpg"],
        summary: "감각적인 인테리어와 힙한 분위기로 사진 찍기 좋은 부티크 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["인스타 감성 가득한 디자인", "높은 고객 만족도의 깔끔한 시설"],
        tips: ["호텔 곳곳이 포토존이라 인생샷 남기기에 딱 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "G/F, 148 Austin Rd, Tsim Sha Tsui, 홍콩", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://pagehotels.com/en/page148", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8380416687207842427", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%98%EC%9D%B4%EC%A7%80148+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 플레밍 홍콩": {
        photos: ["/images/hong-kong/info/accommodations/the-fleming-hong-kong.jpg"],
        summary: "완차이의 매력을 담은 세련되고 독특한 컨셉의 프리미엄 호텔이에요.",
        updatedAt: "2026-07-14",
        highlights: ["감도 높은 유니크한 디자인", "완차이 특유의 여유로운 분위기"],
        tips: ["조용하고 고급스러운 휴식을 원하는 분들께 추천드려요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "The Fleming, 41 Fleming Rd, Wan Chai, 홍콩", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.thefleming.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17678463761802262371", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%94%8C%EB%A0%88%EB%B0%8D+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미라 문 홍콩": {
        photos: ["/images/hong-kong/info/accommodations/mira-moon-hong-kong.jpg"],
        summary: "코즈웨이 베이의 트렌디한 감성을 담은 디자인 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["감각적인 인테리어", "쇼핑하기 좋은 코즈웨이 베이 위치"],
        tips: ["주변에 힙한 카페와 맛집이 많아 산책하기 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "388 Jaffe Rd, Causeway Bay, 홍콩", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.miramoonhotel.com/?utm_source=google&utm_medium=organic&utm_campaign=local-listing", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13560424662114304744", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EB%9D%BC+%EB%AC%B8+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 스테이지": {
        photos: ["/images/hong-kong/info/accommodations/hotel-stage-hong-kong.jpg"],
        summary: "조던 지역의 깔끔하고 모던한 분위기를 자랑하는 숙소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["미니멀한 객실 디자인", "조던역 인근의 편리한 접근성"],
        tips: ["주변 로컬 맛집을 탐방하기에 최적의 위치예요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1 Chi Wo St, Jordan, 홍콩", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.hotelstage.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14776653051044526024", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 포팅거 홍콩": {
        photos: ["/images/hong-kong/info/accommodations/the-pottinger-hong-kong.jpg"],
        summary: "센트럴 중심가에서 즐기는 세련된 어반 라이프스타일 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["센트럴 핵심 지역 위치", "세련되고 모던한 분위기"],
        tips: ["주요 관광지 및 맛집으로 이동하기 매우 편리해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "74 Queen's Road Central (Hotel main entrance:, 21 Stanley St, Central, 홍콩", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.sino-hotels.com/en/hk/the-pottinger-hong-kong", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9975314709885640242", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%8F%AC%ED%8C%85%EA%B1%B0+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오볼로 사우스사이드": {
        photos: ["/images/hong-kong/info/accommodations/ovolo-southside-hong-kong.jpg"],
        summary: "감각적인 디자인과 힙한 분위기가 매력적인 부티크 호텔",
        updatedAt: "2026-07-14",
        highlights: ["개성 넘치는 화려한 객실 인테리어", "홍콩 남부의 여유로운 동네 분위기"],
        tips: ["웡칙항 역 근처라 주변 맛집 탐방하기 편리해요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Ovolo Southside, 64 Wong Chuk Hang Rd, Aberdeen, 홍콩", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12815199258028991252", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%B3%BC%EB%A1%9C+%EC%82%AC%EC%9A%B0%EC%8A%A4%EC%82%AC%EC%9D%B4%EB%93%9C+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "도르셋 몽콕 홍콩": {
        photos: ["/images/hong-kong/info/accommodations/dorsett-mongkok-hong-kong.png"],
        summary: "몽콕의 활기를 즐기기에 최적화된 가성비 좋은 숙소",
        updatedAt: "2026-07-14",
        highlights: ["쇼핑과 먹거리가 풍부한 중심가 접근성", "깔끔하고 현대적인 객실 컨디션"],
        tips: ["주변에 로컬 맛집이 많아 식도락 여행객에게 추천해요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "88 Tai Kok Tsui Rd, Tai Kok Tsui, 홍콩", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.mongkok.dorsetthotels.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6070442020558638672", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EB%A5%B4%EC%85%8B+%EB%AA%BD%EC%BD%95+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
