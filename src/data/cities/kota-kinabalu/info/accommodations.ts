import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "샹그릴라 탄중아루 코타키나발루": {
        photos: ["/images/kota-kinabalu/info/accommodations/shangri-la-tanjung-aru-kota-kinabalu.jpg"],
        summary: "환상적인 탄중아루 선셋을 가장 가까이서 만끽할 수 있는 가족 여행 최적화 리조트",
        updatedAt: "2026-07-15",
        highlights: ["세계적인 수준의 탄중아루 선셋 뷰", "아이들이 좋아하는 워터파크와 키즈 클럽", "프라이빗 비치에서의 여유로운 휴식"],
        tips: ["선셋 명당인 바(Bar)는 예약이 필수예요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 20, Jalan Aru, Tanjung Aru, 88100 Kota Kinabalu, Sabah, 말레이시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.shangri-la.com/tanjungaru", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3904245602338261693", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%B9%EA%B7%B8%EB%A6%B4%EB%9D%BC+%ED%83%84%EC%A4%91%EC%95%84%EB%A3%A8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마젤란 수트라 리조트": {
        photos: ["/images/kota-kinabalu/info/accommodations/the-magellan-sutera-resort-kota-kinabalu.jpg"],
        summary: "수트라 하버의 럭셔리한 분위기를 품격 있게 즐길 수 있는 프리미엄 휴양지",
        updatedAt: "2026-07-15",
        highlights: ["고급스럽고 클래식한 인테리어", "수트라 하버 단지 내 위치한 뛰어난 접근성", "프라이빗하고 여유로운 호캉스 가능"],
        tips: ["가족 단위 여행객에게 더욱 추천하는 럭셔리 숙소예요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "The Magellan Sutera Resort, 1 Sutera Harbour Boulevard, Sutera Harbour, 88100 Kota Kinabalu, Sabah, 말레이시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3150694337228957448", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%A0%A4%EB%9E%80+%EC%88%98%ED%8A%B8%EB%9D%BC+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "퍼시픽 수트라 호텔": {
        photos: ["/images/kota-kinabalu/info/accommodations/the-pacific-sutera-hotel-kota-kinabalu.jpg"],
        summary: "수트라 하버의 인프라를 합리적인 가격으로 누릴 수 있는 실속형 리조트",
        updatedAt: "2026-07-15",
        highlights: ["수트라 하버 단지 내 편리한 이동성", "깔끔하고 모던한 객실 컨디션", "가성비 좋게 즐기는 호캉스"],
        tips: ["마젤란 수트라와 부대시설을 함께 이용할 수 있어 경제적이에요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "The Pacific Sutera Hotel, 1 Sutera Harbour Boulevard, Sutera Harbour, 88100 Kota Kinabalu, Sabah, 말레이시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2979619309550068374", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8D%BC%EC%8B%9C%ED%94%BD+%EC%88%98%ED%8A%B8%EB%9D%BC+%ED%98%B8%ED%85%94+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하얏트 센트릭 코타키나발루": {
        photos: ["/images/kota-kinabalu/info/accommodations/hyatt-centric-kota-kinabalu.jpg"],
        summary: "시내 중심에 위치한 깔끔하고 세련된 최신식 호텔입니다.",
        updatedAt: "2026-07-15",
        highlights: ["신축이라 매우 쾌적함", "시내 주요 명소 접근성 우수"],
        tips: ["주변 쇼핑몰과 맛집 이동이 정말 편해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "18, Jln Haji Saman, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu, Sabah, 말레이시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6599642318670110860", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%96%8F%ED%8A%B8+%EC%84%BC%ED%8A%B8%EB%A6%AD+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코타키나발루 메리어트 호텔": {
        photos: ["/images/kota-kinabalu/info/accommodations/kota-kinabalu-marriott-hotel.jpg"],
        summary: "환상적인 선셋을 감상하기 좋은 워터프런트 명소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["탁 트인 오션뷰", "워터프런트 산책로 인접"],
        tips: ["일몰 시간에 맞춰 객실 창가 자리를 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Lot G, 23A, Jln Tun Fuad Stephens, 88000 Kota Kinabalu, 말레이시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/bkikk-kota-kinabalu-marriott-hotel/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9408827948180286422", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%EB%A9%94%EB%A6%AC%EC%96%B4%ED%8A%B8+%ED%98%B8%ED%85%94+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "르메르디앙 코타키나발루": {
        photos: ["/images/kota-kinabalu/info/accommodations/le-meridien-kota-kinabalu.jpg"],
        summary: "야시장과 워터프런트를 모두 즐기기 좋은 최적의 위치입니다.",
        updatedAt: "2026-07-15",
        highlights: ["야시장 도보 이동 가능", "주변 인프라 매우 좋음"],
        tips: ["식도락 여행을 계획한다면 최고의 선택이에요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Jln Tun Fuad Stephens, Sinsuran, 88000 Kota Kinabalu, 말레이시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/bkimd-le-meridien-kota-kinabalu/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4175299039078666148", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A5%B4%EB%A9%94%EB%A5%B4%EB%94%94%EC%95%99+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "힐튼 코타키나발루": {
        photos: ["/images/kota-kinabalu/info/accommodations/hilton-kota-kinabalu.jpg"],
        summary: "시내 주요 명소로 이동하기 편리한 깔끔하고 세련된 비즈니스급 호텔입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쾌적하고 모던한 객실 컨디션", "시내 중심가 위치로 높은 접근성"],
        tips: ["주변에 맛집과 카페가 많아 식사 해결이 매우 쉬워요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Jln Tunku Abdul Rahman, Asia City, 88000 Kota Kinabalu, Sabah, 말레이시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2883222429030394557", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9E%90%ED%8A%BC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그란디스 호텔 코타키나발루": {
        photos: ["/images/kota-kinabalu/info/accommodations/grandis-hotels-and-resorts-kota-kinabalu.jpg"],
        summary: "수리아 사바 쇼핑몰과 바로 연결되어 쇼핑과 식사를 즐기기에 최적화된 호텔입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑몰 직결로 압도적인 편리함", "쇼핑과 맛집 탐방에 최고의 위치"],
        tips: ["쇼핑 후 무거운 짐을 바로 객실에 두기 정말 편해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Suria Sabah Shopping Mall, 1A, Jln Tun Fuad Stephens, Kota Kinabalu, 88000 Kota Kinabalu, Sabah, 말레이시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.hotelgrandis.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11779932668472570682", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%80%EB%94%94%EC%8A%A4+%ED%98%B8%ED%85%94+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 식스티3": {
        photos: ["/images/kota-kinabalu/info/accommodations/hotel-sixty3-kota-kinabalu.jpg"],
        summary: "가야 스트리트 근처에서 머물기 좋은 감각적인 분위기의 부티크 호텔입니다.",
        updatedAt: "2026-07-15",
        highlights: ["가야 스트리트 도보 이동 가능", "감성 넘치는 인테리어의 부티크 스타일"],
        tips: ["주말 가야 스트리트 마켓 구경하기에 딱 좋은 위치예요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "0, CITY CENTRE, KM 63, Jalan Gaya, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu, Sabah, 말레이시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.hotelsixty3.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7220311774939258055", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EC%8B%9D%EC%8A%A4%ED%8B%B03+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 루마 호텔 코타키나발루": {
        photos: ["/images/kota-kinabalu/info/accommodations/the-luma-hotel-kota-kinabalu.jpg"],
        summary: "이마고몰 쇼핑과 트렌디한 감성을 모두 잡은 세련된 숙소",
        updatedAt: "2026-07-15",
        highlights: ["이마고몰 인접으로 쇼핑과 식사하기 매우 편리함", "감각적이고 모던한 디자인의 객실 컨디션"],
        tips: ["호텔 주변 맛집 탐방을 함께 즐기기 좋음"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Lot 2-5. Block A, Sutera Avenue, Jalan Sembulan, 88100 Kota Kinabalu, Sabah, 말레이시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://thelumahotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2582691728647593914", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%A3%A8%EB%A7%88+%ED%98%B8%ED%85%94+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "머큐어 코타키나발루 시티 센터": {
        photos: ["/images/kota-kinabalu/info/accommodations/mercure-kota-kinabalu-city-centre.jpg"],
        summary: "섬 투어 출발지로 딱인 제셀톤 포인트 근처 가성비 호텔",
        updatedAt: "2026-07-15",
        highlights: ["제셀톤 포인트와 가까워 섬 투어 이동이 매우 용이함", "시내 중심가에 위치해 접근성이 뛰어난 실속형 숙소"],
        tips: ["섬 투어를 계획 중인 여행객에게 최적의 선택"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "41, Jalan Gaya, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu, Sabah, 말레이시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=9416&merchantid=seo-maps-MY-9416&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15274677870400831426", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A8%B8%ED%81%90%EC%96%B4+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%EC%8B%9C%ED%8B%B0+%EC%84%BC%ED%84%B0+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "홀리데이 인 익스프레스 코타키나발루": {
        photos: ["/images/kota-kinabalu/info/accommodations/holiday-inn-express-kota-kinabalu-city-centre.jpg"],
        summary: "깔끔하고 군더더기 없는 시내 중심의 실속형 숙소",
        updatedAt: "2026-07-15",
        highlights: ["IHG 계열 특유의 믿고 가는 깔끔한 객실 상태", "시내 주요 명소로 이동하기 좋은 편리한 위치"],
        tips: ["짧은 일정이나 가성비를 중시하는 여행객에게 추천"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1, Jln Tunku Abdul Rahman, 88000 Kota Kinabalu, Sabah, 말레이시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12904322231616519595", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%80%EB%A6%AC%EB%8D%B0%EC%9D%B4+%EC%9D%B8+%EC%9D%B5%EC%8A%A4%ED%94%84%EB%A0%88%EC%8A%A4+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "가야 아일랜드 리조트": {
        photos: ["/images/kota-kinabalu/info/accommodations/gaya-island-resort-kota-kinabalu.jpg"],
        summary: "프라이빗한 섬에서 즐기는 완벽한 럭셔리 휴양",
        updatedAt: "2026-07-15",
        highlights: ["에메랄드빛 바다와 맞닿은 고급스러운 객실", "스노클링과 다양한 해양 액티비티 가능"],
        tips: ["섬 안이라 조용하지만, 시내로 나갈 때는 보트 시간을 미리 체크하세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Malohom Bay Tunku Abdul Rahman, Marine Park, 88000 Kota Kinabalu, Sabah, 말레이시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.gayaislandresort.com/?utm_source=google&utm_medium=organic&utm_campaign=gmb", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=487389027435862477", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%80%EC%95%BC+%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "붕아라야 아일랜드 리조트": {
        photos: ["/images/kota-kinabalu/info/accommodations/bunga-raya-island-resort-kota-kinabalu.jpg"],
        summary: "자연 그대로의 아름다움을 간직한 섬 속의 낙원",
        updatedAt: "2026-07-15",
        highlights: ["툰쿠 압둘 라만 해양공원의 깨끗한 수중 환경", "프라이빗하고 여유로운 휴식에 최적화된 분위기"],
        tips: ["자연 친화적인 리조트라 벌레가 있을 수 있으니 대비하세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Polish Bay, Gaya Island, Tunku Abdul Rahman Park, 88000 Kota Kinabalu, Sabah, 말레이시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://echoresorts.com/bungaraya-island-resort", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1249567341347390353", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%95%EC%95%84%EB%9D%BC%EC%95%BC+%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시타딘 워터프런트 코타키나발루": {
        photos: ["/images/kota-kinabalu/info/accommodations/citadines-waterfront-kota-kinabalu.jpg"],
        summary: "시내 접근성과 멋진 전망을 모두 잡은 레지던스형 호텔",
        updatedAt: "2026-07-15",
        highlights: ["워터프런트 바로 앞이라 선셋 감상에 최고", "취사 시설이 있어 가족 단위 여행객에게 추천"],
        tips: ["시내 중심가라 주변 맛집과 카페를 도보로 이용하기 편리해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "G-08, Jln Tun Fuad Stephens, Pusat Bandar Kota Kinabalu, 88000 Kota Kinabalu, Sabah, 말레이시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11076261156626498297", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%83%80%EB%94%98+%EC%9B%8C%ED%84%B0%ED%94%84%EB%9F%B0%ED%8A%B8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
