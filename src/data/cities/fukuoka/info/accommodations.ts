import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "미야코 호텔 하카타": {
        photos: ["/images/fukuoka/info/accommodations/miyako-hotel-hakata-fukuoka.jpg"],
        summary: "하카타역 바로 앞이라 위치가 환상적이고 대욕장까지 즐길 수 있는 프리미엄 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["하카타역 초근접 입지", "여행 피로를 풀어주는 대욕장 보유"],
        tips: ["대욕장은 투숙객이라면 꼭 이용해 보세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-1-1 Hakataekihigashi, Hakata Ward, Fukuoka, 812-0013 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.miyakohotels.ne.jp/hakata/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8104812217387566281", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%95%BC%EC%BD%94+%ED%98%B8%ED%85%94+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 닛코 후쿠오카": {
        photos: ["/images/fukuoka/info/accommodations/hotel-nikko-fukuoka.jpg"],
        summary: "하카타역 접근성이 좋고 서비스가 안정적이라 편안하게 머물기 좋은 클래식 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["뛰어난 역 접근성", "믿고 머무는 안정적인 서비스"],
        tips: ["부모님이나 아이와 함께하는 여행객에게 추천합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-18-25 Hakata Ekimae, Hakata Ward, Fukuoka, 812-0011 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://hotelnikko-fukuoka.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2051602111481608185", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%8B%9B%EC%BD%94+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그랜드 하얏트 후쿠오카": {
        photos: ["/images/fukuoka/info/accommodations/grand-hyatt-fukuoka.jpg"],
        summary: "캐널시티와 연결되어 쇼핑과 식사를 한 번에 해결할 수 있는 최적의 위치입니다.",
        updatedAt: "2026-07-13",
        highlights: ["캐널시티 쇼핑몰 직결", "주변 맛집 및 식당가 접근성 최고"],
        tips: ["쇼핑 위주의 여행 일정이라면 최고의 선택지입니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1-chōme-2-82 Sumiyoshi, Hakata Ward, Fukuoka, 812-0018 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4552544701133624513", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%9C%EB%93%9C+%ED%95%98%EC%96%8F%ED%8A%B8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 블라썸 하카타 프리미어": {
        photos: ["/images/fukuoka/info/accommodations/the-blossom-hakata-premier-fukuoka.jpg"],
        summary: "하카타·기온 사이 도보 동선과 대욕장이 좋은 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["하카타·기온 사이 도보 동선과 대욕장이 좋은 호텔입니다.", "평점 4.5", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-8-12 Hakata Ekimae, Hakata Ward, Fukuoka, 812-0011 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.jrk-hotels.co.jp/Hakata_premier/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12694098749512981652", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%B8%94%EB%9D%BC%EC%8D%B8+%ED%95%98%EC%B9%B4%ED%83%80+%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "니시테츠 호텔 크룸 하카타": {
        photos: ["/images/fukuoka/info/accommodations/nishitetsu-hotel-croom-hakata-fukuoka.jpg"],
        summary: "하카타역 도보권과 대욕장 이용이 편한 실속형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["하카타역 도보권과 대욕장 이용이 편한 실속형 호텔입니다.", "평점 4.5", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "6-30 Gionmachi, Hakata Ward, Fukuoka, 812-0038 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://nnr-h.com/croom/hakatagion/?utm_source=google&utm_medium=google_map&utm_campaign=03", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14919892634397891225", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%88%EC%8B%9C%ED%85%8C%EC%B8%A0+%ED%98%B8%ED%85%94+%ED%81%AC%EB%A3%B8+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "JR 큐슈 호텔 블라썸 하카타 센트럴": {
        photos: ["/images/fukuoka/info/accommodations/jr-kyushu-hotel-blossom-hakata-central-fukuoka.jpg"],
        summary: "하카타역 도보권으로 공항·기차 이동이 편한 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["하카타역 도보권으로 공항·기차 이동이 편한 호텔입니다.", "평점 4.4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-2-11 Hakata Ekimae, Hakata Ward, Fukuoka, 812-0011 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.jrk-hotels.co.jp/Hakatachuo/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13710855921790367982", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=JR+%ED%81%90%EC%8A%88+%ED%98%B8%ED%85%94+%EB%B8%94%EB%9D%BC%EC%8D%B8+%ED%95%98%EC%B9%B4%ED%83%80+%EC%84%BC%ED%8A%B8%EB%9F%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오리엔탈 호텔 후쿠오카 하카타 스테이션": {
        photos: ["/images/fukuoka/info/accommodations/oriental-hotel-fukuoka-hakata-station.jpg"],
        summary: "하카타역 치쿠시구치 바로 앞이라 이동이 정말 편리한 위치형 호텔이에요.",
        updatedAt: "2026-07-13",
        highlights: ["하카타역 초역세권의 압도적 접근성", "주변 편의시설 이용이 매우 용이함"],
        tips: ["기차나 버스 이용 계획이 많은 여행객에게 강력 추천합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "4-23 Hakataekichūōgai, Hakata Ward, Fukuoka, 812-0012 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://fukuoka-orientalhotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14768126831290939589", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%A6%AC%EC%97%94%ED%83%88+%ED%98%B8%ED%85%94+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%95%98%EC%B9%B4%ED%83%80+%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미쓰이 가든 호텔 후쿠오카 기온": {
        photos: ["/images/fukuoka/info/accommodations/mitsui-garden-hotel-fukuoka-gion.jpg"],
        summary: "캐널시티와 가까워 쇼핑하기 좋고, 피로를 풀 수 있는 대욕장이 매력적인 곳이에요.",
        updatedAt: "2026-07-13",
        highlights: ["기온·캐널시티 쇼핑 동선 최적화", "여행의 피로를 녹여주는 깔끔한 대욕장"],
        tips: ["쇼핑과 온천을 동시에 즐기고 싶은 분들께 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "일본 〒812-0011 Fukuoka, Hakata Ward, Hakata Ekimae, 2-chōme−8−１５ 三井ガーデンホテル福岡祇園 １階", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.gardenhotels.co.jp/fukuoka-gion/?utm_source=googlebusinessprofile&utm_medium=google&utm_campaign=maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12044263983146824153", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%93%B0%EC%9D%B4+%EA%B0%80%EB%93%A0+%ED%98%B8%ED%85%94+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%EA%B8%B0%EC%98%A8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미쓰이 가든 호텔 후쿠오카 나카스": {
        photos: ["/images/fukuoka/info/accommodations/mitsui-garden-hotel-fukuoka-nakasu.jpg"],
        summary: "나카스 강변의 정취와 텐진 접근성을 모두 잡은 도심 속 휴식처입니다.",
        updatedAt: "2026-07-13",
        highlights: ["나카스 강변 산책하기 좋은 위치", "텐진 중심가로 이동이 매우 편리함"],
        tips: ["나카스 포장마차 거리나 텐진 맛집 탐방을 즐기기에 딱 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "일본 〒810-0801 Fukuoka, Hakata Ward, Nakasu, 5-chōme−5−１ 三井ガーデンホテル福岡中州 １F", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.gardenhotels.co.jp/fukuoka-nakasu/?utm_source=googlebusinessprofile&utm_medium=google&utm_campaign=maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6879780643892121841", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%93%B0%EC%9D%B4+%EA%B0%80%EB%93%A0+%ED%98%B8%ED%85%94+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%EB%82%98%EC%B9%B4%EC%8A%A4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 레솔 트리니티 하카타": {
        photos: ["/images/fukuoka/info/accommodations/hotel-resol-trinity-hakata-fukuoka.jpg"],
        summary: "나카스카와바타역 인근 대욕장 있는 도심 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["나카스카와바타역 인근 대욕장 있는 도심 호텔입니다.", "평점 4.1", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "4-chōme-4-10 Nakasu, Hakata Ward, Fukuoka, 810-0801 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.resol-hotel.jp/trinity-hakata/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3213422448484290220", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%A0%88%EC%86%94+%ED%8A%B8%EB%A6%AC%EB%8B%88%ED%8B%B0+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "도큐스테이 후쿠오카 텐진": {
        photos: ["/images/fukuoka/info/accommodations/tokyu-stay-fukuoka-tenjin.jpg"],
        summary: "객실 내 세탁기와 텐진·나카스 접근성이 장점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["객실 내 세탁기와 텐진·나카스 접근성이 장점입니다.", "평점 4.4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-chōme-21-24 Haruyoshi, Chuo Ward, Fukuoka, 810-0003 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.tokyustay.co.jp/hotel/FT/?utm_source=google&utm_medium=gbp&utm_campaign=fukuokatenjin", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15212356235943574999", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%ED%81%90%EC%8A%A4%ED%85%8C%EC%9D%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%85%90%EC%A7%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "솔라리아 니시테츠 호텔 후쿠오카": {
        photos: ["/images/fukuoka/info/accommodations/solaria-nishitetsu-hotel-fukuoka.jpg"],
        summary: "텐진역·쇼핑몰 연결성이 강점인 위치형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["텐진역·쇼핑몰 연결성이 강점인 위치형 호텔입니다.", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-2-43 Tenjin, Chuo Ward, Fukuoka, 810-0001 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://nnr-h.com/solaria/fukuoka/#utm_source=google&utm_medium=meo&utm_campaign=gbp_fukuoka", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15079166230498313696", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%94%EB%9D%BC%EB%A6%AC%EC%95%84+%EB%8B%88%EC%8B%9C%ED%85%8C%EC%B8%A0+%ED%98%B8%ED%85%94+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "니시테츠 그랜드 호텔": {
        photos: ["/images/fukuoka/info/accommodations/nishitetsu-grand-hotel-fukuoka.jpg"],
        summary: "텐진 중심부의 클래식 호텔로 쇼핑 동선이 좋습니다.",
        updatedAt: "2026-07-13",
        highlights: ["텐진 중심부의 클래식 호텔로 쇼핑 동선이 좋습니다.", "평점 4.2", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-6-60 Daimyō, Chuo Ward, Fukuoka, 810-0041 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://nnr-h.com/grandhotel/?utm_source=google&utm_medium=google_map&utm_campaign=01", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1706255578284454792", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%88%EC%8B%9C%ED%85%8C%EC%B8%A0+%EA%B7%B8%EB%9E%9C%EB%93%9C+%ED%98%B8%ED%85%94+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 몬토레 라 스루 후쿠오카": {
        photos: ["/images/fukuoka/info/accommodations/hotel-monterey-la-soeur-fukuoka.jpg"],
        summary: "텐진·아카사카 사이 이동이 편한 합리적 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["텐진·아카사카 사이 이동이 편한 합리적 호텔입니다.", "평점 4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-8-27 Daimyō, Chuo Ward, Fukuoka, 810-0041 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.hotelmonterey.co.jp/lasoeur_fukuoka/?utm_source=google&utm_medium=mybusiness&utm_campaign=website_monlsf", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4690382155335311520", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%AA%AC%ED%86%A0%EB%A0%88+%EB%9D%BC+%EC%8A%A4%EB%A3%A8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 라이블리 후쿠오카 하카타": {
        photos: ["/images/fukuoka/info/accommodations/the-lively-fukuoka-hakata.jpg"],
        summary: "나카스 인근 감각적인 라이프스타일 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["나카스 인근 감각적인 라이프스타일 호텔입니다.", "평점 3.7", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "5-chōme-2-18 Nakasu, Hakata Ward, Fukuoka, 810-0801 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.livelyhotels.com/thelivelyfukuoka/?utm_source=google&utm_medium=gmb&utm_campaign=gmb", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15720757252268726292", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%9D%BC%EC%9D%B4%EB%B8%94%EB%A6%AC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라이프 텐진 후쿠오카": {
        photos: ["/images/fukuoka/info/accommodations/lyf-tenjin-fukuoka.jpg"],
        summary: "젊고 캐주얼한 분위기의 텐진권 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["젊고 캐주얼한 분위기의 텐진권 호텔입니다.", "평점 4.1", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "일본 〒810-0021 Fukuoka, Chuo Ward, Imaizumi, 1-chōme−2−１３ 3F", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10278353110004852555", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%9D%B4%ED%94%84+%ED%85%90%EC%A7%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "힐튼 후쿠오카 씨호크": {
        photos: ["/images/fukuoka/info/accommodations/hilton-fukuoka-sea-hawk.jpg"],
        summary: "모모치 해변·페이페이돔 동선에 좋은 대형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["모모치 해변·페이페이돔 동선에 좋은 대형 호텔입니다.", "평점 4.2", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-2-3 Jigyōhama, Chuo Ward, Fukuoka, 810-8650 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4302778211594709298", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9E%90%ED%8A%BC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%EC%94%A8%ED%98%B8%ED%81%AC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 레지덴셜 스위트 후쿠오카": {
        photos: ["/images/fukuoka/info/accommodations/the-residential-suites-fukuoka.jpg"],
        summary: "모모치권 가족·장기 숙박에 적합한 넓은 객실 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["모모치권 가족·장기 숙박에 적합한 넓은 객실 호텔입니다.", "평점 4.2", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "일본 〒814-0001 Fukuoka, Sawara Ward, Momochihama, 1-chōme−3 3番70号", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.trs-fukuoka.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=416155373914094240", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%A0%88%EC%A7%80%EB%8D%B4%EC%85%9C+%EC%8A%A4%EC%9C%84%ED%8A%B8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 오쿠라 후쿠오카": {
        photos: ["/images/fukuoka/info/accommodations/hotel-okura-fukuoka.jpg"],
        summary: "나카스카와바타와 리버레인 접근성이 좋은 고급 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["나카스카와바타와 리버레인 접근성이 좋은 고급 호텔입니다.", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-2 Shimokawabatamachi, Hakata Ward, Fukuoka, 812-0027 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.fuk.hotelokura.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16290748547030302394", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EC%98%A4%EC%BF%A0%EB%9D%BC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 일 팔라초": {
        photos: ["/images/fukuoka/info/accommodations/hotel-il-palazzo-fukuoka.jpg"],
        summary: "나카스·하루요시권의 디자인 감도 높은 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["나카스·하루요시권의 디자인 감도 높은 호텔입니다.", "평점 4.1", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-chōme-13-1 Haruyoshi, Chuo Ward, Fukuoka, 810-0003 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://ilpalazzo.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5157776137633665476", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EC%9D%BC+%ED%8C%94%EB%9D%BC%EC%B4%88+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
