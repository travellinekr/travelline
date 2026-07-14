import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "그랜드 하얏트 타이베이": {
        photos: ["/images/taipei/info/accommodations/grand-hyatt-taipei.jpg"],
        summary: "타이베이 101과 쇼핑몰을 도보로 즐기기 가장 좋은 위치의 대형 호텔이에요.",
        updatedAt: "2026-07-13",
        highlights: ["타이베이 101 인접", "신이 상권 중심지"],
        tips: ["쇼핑과 맛집 탐방 위주라면 최고의 선택입니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 2號, Songshou Rd, Xicun Village, Xinyi District, Taipei City, 대만 110061", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4958169876112761690", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%9C%EB%93%9C+%ED%95%98%EC%96%8F%ED%8A%B8+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "W 타이베이": {
        photos: ["/images/taipei/info/accommodations/w-taipei.jpg"],
        summary: "트렌디한 밤 문화를 즐기고 싶은 분들께 추천하는 힙한 호텔이에요.",
        updatedAt: "2026-07-13",
        highlights: ["신이 상권의 화려한 야경", "감각적인 인테리어"],
        tips: ["호텔 내 바와 라운지 분위기가 아주 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 10, Section 5 of Zhongxiao East RoadSection 5 of Zhongxiao E Rd, Xingya Village, Xinyi District, Taipei City, 대만 110", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/tpewh-w-taipei/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18132314861118204262", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=W+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "험블 하우스 타이베이": {
        photos: ["/images/taipei/info/accommodations/humble-house-taipei.jpg"],
        summary: "주변 쇼핑몰과의 이동이 매우 편리한 럭셔리한 휴식처예요.",
        updatedAt: "2026-07-13",
        highlights: ["쇼핑몰 연결로 편리한 동선", "차분하고 고급스러운 분위기"],
        tips: ["조용한 호캉스를 원하는 분들께 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 18號, Songgao Rd, Xicun Village, Xinyi District, Taipei City, 대만 110", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.humblehousehotels.com/zh-tw/websev?cat=contact", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15766162335138926822", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%98%EB%B8%94+%ED%95%98%EC%9A%B0%EC%8A%A4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "에슬라이트 호텔": {
        photos: ["/images/taipei/info/accommodations/eslite-hotel-taipei.jpg"],
        summary: "송산 문화창의공원과 디자인 숍 투어하기 딱 좋은 위치예요.",
        updatedAt: "2026-07-13",
        highlights: ["송산문화창의원구 인접", "디자인 상점가 접근성"],
        tips: ["주변 소품샵 구경하며 산책하기 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 98號, Yanchang Rd, Xinren Village, Xinyi District, Taipei City, 대만 110", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.eslitehotel.com/?utm_source=google&utm_medium=map", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12868180850758559090", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EC%8A%AC%EB%9D%BC%EC%9D%B4%ED%8A%B8+%ED%98%B8%ED%85%94+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "킴튼 다안 타이베이": {
        photos: ["/images/taipei/info/accommodations/kimpton-da-an-taipei.jpg"],
        summary: "다안 지구의 힙한 카페와 맛집을 즐기기 좋은 부티크 호텔이에요.",
        updatedAt: "2026-07-13",
        highlights: ["다안 지역 카페 투어 최적", "세련된 부티크 감성"],
        tips: ["주변에 예쁜 디저트 카페가 정말 많아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 25號, Lane 27, Section 4, Ren'ai Rd, Ren'ai Village, Da’an District, Taipei City, 대만 106", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1641387982633769523", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%B4%ED%8A%BC+%EB%8B%A4%EC%95%88+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 프로버브스 타이베이": {
        photos: ["/images/taipei/info/accommodations/hotel-proverbs-taipei.jpg"],
        summary: "동구 쇼핑몰과 맛집 탐방을 위한 최고의 베이스캠프예요.",
        updatedAt: "2026-07-13",
        highlights: ["동구 쇼핑몰 접근성 우수", "주변 레스토랑 밀집"],
        tips: ["쇼핑과 미식을 동시에 즐기고 싶은 분들께 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 56號, Section 1, Da'an Rd, Guangwu Village, Da’an District, Taipei City, 대만 10691", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.hotel-proverbs.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17791765099807200035", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%ED%94%84%EB%A1%9C%EB%B2%84%EB%B8%8C%EC%8A%A4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "만다린 오리엔탈 타이베이": {
        photos: ["/images/taipei/info/accommodations/mandarin-oriental-taipei.jpg"],
        summary: "조용한 럭셔리 체류와 고급 다이닝을 원하는 여행자에게 적합합니다.",
        updatedAt: "2026-07-13",
        highlights: ["조용한 럭셔리 체류와 고급 다이닝을 원하는 여행자에게 적합합니다.", "평점 4.6", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 158, DunHua N Rd, Songshan District, Taipei City, 대만 10548", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.mandarinoriental.com/en/taipei/songshan?src=loc.dir.motpe.ggl", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6674705079313647668", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%EB%8B%A4%EB%A6%B0+%EC%98%A4%EB%A6%AC%EC%97%94%ED%83%88+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오쿠라 프레스티지 타이베이": {
        photos: ["/images/taipei/info/accommodations/the-okura-prestige-taipei.jpg"],
        summary: "중산역 주변 쇼핑과 식당 접근성이 좋은 고급 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["중산역 주변 쇼핑과 식당 접근성이 좋은 고급 호텔입니다.", "평점 4.3", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 9號, Section 1, Nanjing E Rd, Kangle Village, Zhongshan District, Taipei City, 대만 10450", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.okurataipei.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2317726318200307724", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%BF%A0%EB%9D%BC+%ED%94%84%EB%A0%88%EC%8A%A4%ED%8B%B0%EC%A7%80+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리젠트 타이베이": {
        photos: ["/images/taipei/info/accommodations/regent-taipei.jpg"],
        summary: "중산 상권 중심에서 쇼핑과 미식을 즐기기 좋은 클래식 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["중산 상권 중심에서 쇼핑과 미식을 즐기기 좋은 클래식 호텔입니다.", "평점 4.6", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 3號, Lane 39, Section 2, Zhongshan N Rd, Kangle Village, Zhongshan District, Taipei City, 대만 104", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.regenttaiwan.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7944188266752151210", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%A0%A0%ED%8A%B8+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "팔레 드 쉰 호텔 타이베이": {
        photos: ["/images/taipei/info/accommodations/palais-de-chine-hotel-taipei.jpg"],
        summary: "타이베이역과 공항철도 접근성이 좋은 편리한 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["타이베이역과 공항철도 접근성이 좋은 편리한 호텔입니다.", "평점 4.4", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 3號, Section 1, Chengde Rd, Jianming Village, Datong District, Taipei City, 대만 103", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.palaisdechinehotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15033723596993440080", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%94%EB%A0%88+%EB%93%9C+%EC%89%B0+%ED%98%B8%ED%85%94+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시저 파크 호텔 타이베이": {
        photos: ["/images/taipei/info/accommodations/caesar-park-hotel-taipei.jpg"],
        summary: "타이베이역 바로 앞 위치가 강점인 실속형 대형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["타이베이역 바로 앞 위치가 강점인 실속형 대형 호텔입니다.", "평점 3.9", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "100 대만 Taipei City, Zhongzheng District, Liming Village, 忠孝西路一段38號", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://taipei.caesarpark.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=733532925671612381", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EC%A0%80+%ED%8C%8C%ED%81%AC+%ED%98%B8%ED%85%94+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시티즌M 타이베이 노스 게이트": {
        photos: ["/images/taipei/info/accommodations/citizenm-taipei-north-gate.jpg"],
        summary: "시먼딩과 타이베이역 사이 이동이 편한 현대적 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["시먼딩과 타이베이역 사이 이동이 편한 현대적 호텔입니다.", "평점 4.3", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 3號, Section 1, Zhonghua Rd, Guangfu Village, Zhongzheng District, Taipei City, 대만 100", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/tpecm-citizenm-taipei-north-gate/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14674605334353725678", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%8B%B0%EC%A6%8CM+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%EB%85%B8%EC%8A%A4+%EA%B2%8C%EC%9D%B4%ED%8A%B8+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "암바 타이베이 시먼딩": {
        photos: ["/images/taipei/info/accommodations/amba-taipei-ximending.jpg"],
        summary: "시먼딩 한가운데에서 쇼핑과 야식을 즐기기 좋은 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["시먼딩 한가운데에서 쇼핑과 야식을 즐기기 좋은 호텔입니다.", "평점 4.4", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 77號, Section 2, Wuchang St, Wanshou Village, Wanhua District, Taipei City, 대만 108", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.amba-hotels.com/tc/ximending/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8488924342609208958", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%94%EB%B0%94+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%EC%8B%9C%EB%A8%BC%EB%94%A9+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "로더스 호텔 타이베이": {
        photos: ["/images/taipei/info/accommodations/roaders-hotel-taipei.jpg"],
        summary: "시먼딩과 북문 동선이 좋은 개성 있는 가성비 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["시먼딩과 북문 동선이 좋은 개성 있는 가성비 호텔입니다.", "평점 4.8", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "100 대만 Taipei City, Zhongzheng District, Liming Village, 忠孝西路一段80號4F、24-35F", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://roadersplushotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14920995906899663830", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EB%8D%94%EC%8A%A4+%ED%98%B8%ED%85%94+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스위오 호텔 다안": {
        photos: ["/images/taipei/info/accommodations/swiio-hotel-daan-taipei.jpg"],
        summary: "다안 카페거리와 MRT 접근성이 좋은 부티크 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다안 카페거리와 MRT 접근성이 좋은 부티크 호텔입니다.", "평점 4.4", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 185號, Section 1, Da'an Rd, De'an Village, Da’an District, Taipei City, 대만 106", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.swiio.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11199275772527571222", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%9C%84%EC%98%A4+%ED%98%B8%ED%85%94+%EB%8B%A4%EC%95%88+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "매디슨 타이베이 호텔": {
        photos: ["/images/taipei/info/accommodations/madison-taipei-hotel.jpg"],
        summary: "다안구의 조용한 주거지 분위기와 시내 접근성을 모두 갖춘 곳입니다.",
        updatedAt: "2026-07-13",
        highlights: ["여유로운 다안 지역의 분위기", "시내 주요 명소로 이동하기 좋은 위치"],
        tips: ["조용한 휴식을 원하는 여행객에게 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "10685 대만 Taipei City, Da’an District, Dun'an Village, 敦化南路1段331號", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/tpemt-madison-taipei-a-tribute-portfolio-hotel/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9588438220760942208", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%A4%EB%94%94%EC%8A%A8+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%98%B8%ED%85%94+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "댄디 호텔 다안 파크": {
        photos: ["/images/taipei/info/accommodations/dandy-hotel-daan-park-taipei.jpg"],
        summary: "다안공원 산책과 MRT 이용이 편리한 실속형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다안공원 바로 앞이라 산책하기 최고", "MRT 역세권으로 교통이 매우 편리"],
        tips: ["가성비를 중시하는 뚜벅이 여행자에게 딱이에요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "106 대만 Taipei City, Da’an District, Minzhao Village, 信義路三段33號", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://daan.dandyhotel.com.tw/tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6303820187201218448", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8C%84%EB%94%94+%ED%98%B8%ED%85%94+%EB%8B%A4%EC%95%88+%ED%8C%8C%ED%81%AC+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 레조넌스 타이베이": {
        photos: ["/images/taipei/info/accommodations/hotel-resonance-taipei-tapestry-collection-by-hilton.jpg"],
        summary: "산다오쓰역 인근의 깔끔하고 교통 편의성이 뛰어난 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["산다오쓰역 근처라 이동이 매우 편리", "깔끔하고 세련된 객실 컨디션"],
        tips: ["쾌적한 시설과 브랜드 신뢰도를 중요하게 생각한다면 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 7, Linsen S Rd, Xingfu Village, Zhongzheng District, Taipei City, 대만 100", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://tapestry.hilton.com.cn/zh-hk/hotel/taibei/hotel-resonance-taipei-tsaupup/index.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14052315708133682476", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%A0%88%EC%A1%B0%EB%84%8C%EC%8A%A4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "베이터우 핫스프링 리조트": {
        photos: ["/images/taipei/info/accommodations/beitou-hot-spring-resort-taipei.jpg"],
        summary: "베이터우 온천 마을에서 여유롭게 쉬고 싶은 분들께 딱이에요.",
        updatedAt: "2026-07-13",
        highlights: ["베이터우 온천 중심지 위치", "프라이빗한 힐링"],
        tips: ["온천욕 후에 근처 산책로를 따라 걷기 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 19號, Quanyuan Rd, Zhongxin Village, Beitou District, Taipei City, 대만 112", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://beitou.wellspringbysilks.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10739815987437110368", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%EC%9D%B4%ED%84%B0%EC%9A%B0+%ED%95%AB%EC%8A%A4%ED%94%84%EB%A7%81+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그랜드 뷰 리조트 베이터우": {
        photos: ["/images/taipei/info/accommodations/grand-view-resort-beitou-taipei.jpg"],
        summary: "조용한 분위기 속에서 럭셔리한 온천 호캉스를 즐기기에 완벽해요.",
        updatedAt: "2026-07-13",
        highlights: ["고급스러운 시설과 서비스", "프라이빗한 휴양"],
        tips: ["조용히 쉬고 싶은 여행자라면 꼭 가보세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 30號, Youya Rd, Linquan Village, Beitou District, Taipei City, 대만 112", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.gvrb.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14400525343240409243", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%9C%EB%93%9C+%EB%B7%B0+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%B2%A0%EC%9D%B4%ED%84%B0%EC%9A%B0+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
