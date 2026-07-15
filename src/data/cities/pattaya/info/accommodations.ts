import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "힐튼 파타야": {
        photos: ["/images/pattaya/info/accommodations/hilton-pattaya.jpg"],
        summary: "센트럴 페스티벌 쇼핑몰과 연결되어 접근성이 최고인 오션뷰 호텔",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑몰 직결로 편리한 쇼핑 동선", "환상적인 파타야 바다 전망", "럭셔리한 루프탑 바 이용 가능"],
        tips: ["쇼핑 후 바로 객실로 복귀하기 정말 편해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "333/101 Moo 9 Nongprue Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20260 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=248139876403356248", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9E%90%ED%8A%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그란데 센터 포인트 스페이스 파타야": {
        photos: ["/images/pattaya/info/accommodations/grande-centre-point-space-pattaya.jpg"],
        summary: "우주 테마의 독특한 인테리어와 워터파크를 갖춘 가족 여행 최적화 숙소",
        updatedAt: "2026-07-15",
        highlights: ["아이들이 열광하는 우주 컨셉 디자인", "대규모 워터파크 시설 완비", "최신식의 깔끔하고 쾌적한 객실"],
        tips: ["워터파크 인기가 많으니 체크인 직후 바로 이용하세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "888 หมู่ที่ 5 Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://spacepattaya.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=731236222321094306", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%80%EB%8D%B0+%EC%84%BC%ED%84%B0+%ED%8F%AC%EC%9D%B8%ED%8A%B8+%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "센타라 그랜드 미라지 비치 리조트": {
        photos: ["/images/pattaya/info/accommodations/centara-grand-mirage-beach-resort-pattaya.jpg"],
        summary: "테마파크급 수영장 시설을 자랑하는 완벽한 휴양형 리조트",
        updatedAt: "2026-07-15",
        highlights: ["다채로운 테마의 대형 수영장 시설", "가족 단위 여행객에게 강력 추천", "리조트 내 다양한 액티비티"],
        tips: ["수영장이 메인이니 수영복과 물놀이 용품은 필수예요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "277 หมู่ที่ 5 Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.centarahotelsresorts.com/centaragrand/cmbr/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3124380227009952577", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%BC%ED%83%80%EB%9D%BC+%EA%B7%B8%EB%9E%9C%EB%93%9C+%EB%AF%B8%EB%9D%BC%EC%A7%80+%EB%B9%84%EC%B9%98+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "홀리데이 인 파타야": {
        photos: ["/images/pattaya/info/accommodations/holiday-inn-pattaya.jpg"],
        summary: "가족 여행객에게 최적화된 가성비와 접근성을 모두 잡은 호텔",
        updatedAt: "2026-07-15",
        highlights: ["파타야 비치 바로 앞 위치", "아이들을 위한 키즈 클럽과 수영장 완비", "깔끔하고 현대적인 객실 컨디션"],
        tips: ["조식 뷔페가 다양하니 꼭 포함해서 예약하세요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "463/68, 463/99, หมู่ที่ 9 Pattayasainueang, ตำบล หนองปรือ, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2311580472174192404", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%80%EB%A6%AC%EB%8D%B0%EC%9D%B4+%EC%9D%B8+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "두짓타니 파타야": {
        photos: ["/images/pattaya/info/accommodations/dusit-thani-pattaya.jpg"],
        summary: "클래식한 고급스러움과 탁 트인 오션뷰를 즐길 수 있는 휴양지 호텔",
        updatedAt: "2026-07-15",
        highlights: ["해변 접근성이 좋은 위치", "태국 전통미가 느껴지는 인테리어", "넓고 쾌적한 객실"],
        tips: ["비치 로드 근처라 주변 맛집 탐방하기 좋습니다"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "240, 2 Beach Rd, Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.dusit.com/dusitthani-pattaya/?utm_source=google_maps&utm_medium=seo_maps&utm_campaign=seo_maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17801587879499945063", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%91%90%EC%A7%93%ED%83%80%EB%8B%88+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "로열 클리프 비치 호텔": {
        photos: ["/images/pattaya/info/accommodations/royal-cliff-beach-hotel-pattaya.jpg"],
        summary: "프라이빗하고 조용한 휴식을 원하는 분들께 추천하는 프리미엄 리조트",
        updatedAt: "2026-07-15",
        highlights: ["웅장한 규모와 아름다운 해안 절벽 뷰", "넓은 야외 수영장", "다양한 부대시설"],
        tips: ["시내 중심가와는 거리가 있으니 호캉스 전용으로 추천해요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "353 Phra Tamnak, Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.royalcliff.com/royal-cliff-beach-hotel/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=577112553395086084", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EC%97%B4+%ED%81%B4%EB%A6%AC%ED%94%84+%EB%B9%84%EC%B9%98+%ED%98%B8%ED%85%94+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "케이프 다라 리조트": {
        photos: ["/images/pattaya/info/accommodations/cape-dara-resort-pattaya.jpg"],
        summary: "전 객실 오션뷰로 파타야 바다를 한눈에 담을 수 있는 럭셔리 리조트",
        updatedAt: "2026-07-15",
        highlights: ["모든 객실에서 즐기는 환상적인 파노라마 오션뷰", "인피니티 풀에서 인생샷 남기기 좋은 곳"],
        tips: ["일몰 시간에 맞춰 인피니티 풀 방문을 추천해요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "256, 256 Na Kluea 20 Alley, Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://capedarapattaya.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10219677830595388324", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BC%80%EC%9D%B4%ED%94%84+%EB%8B%A4%EB%9D%BC+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "인터컨티넨탈 파타야 리조트": {
        photos: ["/images/pattaya/info/accommodations/intercontinental-pattaya-resort.jpg"],
        summary: "프라이빗한 휴식을 원하는 분들께 완벽한 고급스러운 해변 리조트",
        updatedAt: "2026-07-15",
        highlights: ["프라이빗 비치를 품은 조용하고 고급스러운 분위기", "품격 있는 서비스와 훌륭한 조식"],
        tips: ["커플이나 가족 단위의 프라이빗한 휴양에 딱이에요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Pattaya, 437 Phra Tamnak, Muang Pattaya, Road, Chang Wat Chon Buri 20150 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=705571730154556477", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B8%ED%84%B0%EC%BB%A8%ED%8B%B0%EB%84%A8%ED%83%88+%ED%8C%8C%ED%83%80%EC%95%BC+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아마리 파타야": {
        photos: ["/images/pattaya/info/accommodations/amari-pattaya.jpg"],
        summary: "넓은 수영장과 활기찬 분위기로 가족 여행객에게 인기 만점인 리조트",
        updatedAt: "2026-07-15",
        highlights: ["아이들이 놀기 좋은 대규모 워터파크급 수영장", "파타야 중심가와 가까워 접근성 최고"],
        tips: ["수영장이 넓어 아이 동반 가족 여행객에게 강력 추천해요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "240 Beach Rd, Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.maai-spa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12729288875496071416", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%A7%88%EB%A6%AC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시암 베이쇼어 리조트": {
        photos: ["/images/pattaya/info/accommodations/siam-bayshore-resort-pattaya.png"],
        summary: "파타야 비치 로드 근처에서 클래식한 휴식을 즐기기 좋은 곳",
        updatedAt: "2026-07-15",
        highlights: ["해변과 가까운 최적의 위치", "잘 가꾸어진 정원과 수영장"],
        tips: ["비치 로드 중심가라 도보 이동이 편리해요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "559 Beach Rd, ตำบล หนองปรือ, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7566859755501513439", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EC%95%94+%EB%B2%A0%EC%9D%B4%EC%87%BC%EC%96%B4+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아버 호텔 앤 레지던스": {
        photos: ["/images/pattaya/info/accommodations/arbour-hotel-and-residence-pattaya.jpg"],
        summary: "인스타 감성 가득한 루프탑 수영장이 매력적인 세련된 호텔",
        updatedAt: "2026-07-15",
        highlights: ["탁 트인 전망의 루프탑 인피니티 풀", "모던하고 깔끔한 객실 컨디션"],
        tips: ["루프탑 바에서 보는 노을이 정말 예쁘니 꼭 들러보세요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "99 10 Soi Durian Pattaya Sai 3, Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.arbourhotelandresidence.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8514979011697391758", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%B2%84+%ED%98%B8%ED%85%94+%EC%95%A4+%EB%A0%88%EC%A7%80%EB%8D%98%EC%8A%A4+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아바니 파타야 리조트": {
        photos: ["/images/pattaya/info/accommodations/avani-pattaya-resort.jpg"],
        summary: "넓은 수영장과 쾌적한 시설로 호캉스하기 좋은 리조트",
        updatedAt: "2026-07-15",
        highlights: ["여유로운 분위기의 대형 야외 수영장", "가족 여행객에게도 적합한 깔끔한 객실"],
        tips: ["리조트 내 부대시설이 잘 되어 있어 여유롭게 머물기 좋아요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "218/2-3, ตำบล หนองปรือ, Amphoe Bang Lamung, Chang Wat Chon Buri 20260 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=906290158454268399", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%B0%94%EB%8B%88+%ED%8C%8C%ED%83%80%EC%95%BC+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "뫼벤픽 시암 호텔 나 좀티엔": {
        photos: ["/images/pattaya/info/accommodations/movenpick-siam-hotel-na-jomtien-pattaya.jpg"],
        summary: "나 좀티엔의 조용한 휴식을 선사하는 럭셔리한 스파 호텔입니다.",
        updatedAt: "2026-07-15",
        highlights: ["렛츠릴랙스 스파 이용 가능", "나 좀티엔 해변 근처의 평온한 분위기"],
        tips: ["도심의 소음에서 벗어나 진정한 힐링이 필요할 때 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Movenpick Siam na Jomtien Pattaya, ถ. สุขุมวิท ตำบล นาจอมเทียน อำเภอสัตหีบ ชลบุรี 20250 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://letsrelaxspa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4541553355384505530", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AB%BC%EB%B2%A4%ED%94%BD+%EC%8B%9C%EC%95%94+%ED%98%B8%ED%85%94+%EB%82%98+%EC%A2%80%ED%8B%B0%EC%97%94+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "풀만 파타야 호텔 G": {
        photos: ["/images/pattaya/info/accommodations/pullman-pattaya-hotel-g.jpg"],
        summary: "세련된 디자인과 트렌디한 감각이 돋보이는 파타야의 핫플레이스입니다.",
        updatedAt: "2026-07-15",
        highlights: ["감각적인 인테리어와 수영장", "파타야 시내 접근성 좋음"],
        tips: ["인생샷을 남기고 싶은 여행객에게 딱 맞는 곳이에요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "445 Soi Saranchon, Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=7540&merchantid=seo-maps-TH-7540&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8738378807639629319", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%92%80%EB%A7%8C+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%98%B8%ED%85%94+G+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 자인 호텔 파타야": {
        photos: ["/images/pattaya/info/accommodations/the-zign-hotel-pattaya.jpg"],
        summary: "넓은 수영장과 다양한 부대시설을 갖춘 대규모 리조트입니다.",
        updatedAt: "2026-07-15",
        highlights: ["압도적인 규모의 야외 수영장", "가족 단위 여행객에게 최적"],
        tips: ["수영장이 여러 개라 물놀이하며 여유롭게 즐기기 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "555/65 Moo 5 12 NAKLUA RD Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.thezignhotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4764963740124700597", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%9E%90%EC%9D%B8+%ED%98%B8%ED%85%94+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
