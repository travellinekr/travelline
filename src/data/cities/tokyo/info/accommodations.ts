import type { AccommodationInfo } from '@/data/card-info-types';

// 도쿄 숙소 카드 상세 정보.
// 기준: 2026-07-08, 최근 한국어 후기/예약 페이지에서 반복 확인되는 객실 상태·위치·조식 포인트 중심으로 간결 정리.
const info: Record<string, AccommodationInfo> = {
    "호텔 메트로폴리탄 도쿄 마루노우치": {
        summary: "도쿄역 접근성이 핵심인 고층 비즈니스형 호텔로, 짧은 일정과 이동 많은 여행에 편합니다.",
        updatedAt: "2026-07-08",
        highlights: ["도쿄역·마루노우치 이동이 매우 편리", "객실은 깔끔하지만 도쿄 도심 호텔답게 크기는 아담한 편", "고층 뷰와 조용한 분위기 선호 여행자에게 적합"],
        warnings: ["도쿄역 주변이라 객실 단가는 높은 편입니다."],
        checkIn: { time: "15:00" },
        checkOut: { time: "12:00" },
        breakfast: { included: false, time: "6:30-10:00", menu: "양식·일식 중심 조식" },
        amenities: [{ icon: "🚉", label: "도쿄역권" }, { icon: "🧳", label: "비즈니스 동선" }, { icon: "🌃", label: "고층 전망" }],
        roomTypes: [{ name: "더블/트윈", capacity: "2인", note: "역세권 소형 객실 중심" }],
        location: { transit: "도쿄역 도보권", landmark: "마루노우치·황거 외원 접근 편리", airport: "나리타/하네다 공항철도·리무진 연계 용이" },
        tips: ["첫날·마지막날처럼 캐리어 이동이 많은 일정에 특히 편합니다."],
        links: [{ label: "공식 사이트", url: "https://tokyomarunouchi.metropolitan.jp/", type: "official", description: "호텔 공식 객실·조식 정보" }]
    },
    "JR 큐슈 호텔 블라섬 신주쿠": {
        summary: "신주쿠역 남쪽 동선이 좋아 한국 여행자 후기에서 위치 만족도가 자주 언급되는 호텔입니다.",
        updatedAt: "2026-07-08",
        highlights: ["신주쿠역·버스터미널 접근이 쉬움", "객실·욕실 관리가 깔끔하다는 후기가 많음", "첫 도쿄 여행자도 동선 잡기 쉬운 위치"],
        checkIn: { time: "14:00" },
        checkOut: { time: "11:00" },
        breakfast: { included: false, time: "6:30-10:00", menu: "규슈풍 일식과 양식 뷔페" },
        amenities: [{ icon: "🚉", label: "신주쿠역권" }, { icon: "🛁", label: "깔끔한 욕실" }, { icon: "🍽️", label: "조식 평이 무난" }],
        roomTypes: [{ name: "더블/트윈", capacity: "2인", note: "도심 표준 크기" }],
        location: { transit: "신주쿠역 남쪽 출구 도보권", landmark: "신주쿠 쇼핑·맛집권", airport: "신주쿠 고속버스터미널 이용 편리" },
        tips: ["공항버스나 고속버스 이용 일정이면 위치 장점이 큽니다."],
        links: [{ label: "공식 사이트", url: "https://www.jrk-hotels.co.jp/Shinjuku/en/", type: "official" }]
    },
    "호텔 그레이스리 신주쿠": {
        summary: "가부키초 중심의 대형 호텔로, 번화가 접근성과 고질라 헤드로 인지도가 높습니다.",
        updatedAt: "2026-07-08",
        highlights: ["신주쿠 야간 동선이 편리", "객실은 실용적이고 기본 시설 위주", "관광·쇼핑 후 늦게 들어오는 일정에 맞음"],
        warnings: ["번화가 한가운데라 조용한 숙소를 원하면 위치 호불호가 있습니다."],
        checkIn: { time: "14:00" },
        checkOut: { time: "11:00" },
        breakfast: { included: false, time: "6:30-10:30", menu: "뷔페식 조식" },
        amenities: [{ icon: "🦖", label: "고질라 헤드" }, { icon: "🌃", label: "번화가" }, { icon: "🧺", label: "코인세탁" }],
        roomTypes: [{ name: "싱글/더블/트윈", capacity: "1~2인", note: "실용형 객실" }],
        location: { transit: "신주쿠역·세이부신주쿠역 도보권", landmark: "가부키초, 골든가이, 오모이데요코초", airport: "신주쿠역 환승 이용" },
        tips: ["밤 늦은 귀가가 많다면 편하지만, 가족 여행은 주변 분위기를 고려하세요."],
        links: [{ label: "공식 사이트", url: "https://gracery.com/shinjuku/", type: "official" }]
    },
    "미츠이 가든 호텔 긴자 프리미어": {
        summary: "긴자·신바시 사이 고층 호텔로, 객실 전망과 쇼핑 동선이 장점입니다.",
        updatedAt: "2026-07-08",
        highlights: ["긴자 쇼핑과 신바시 교통을 함께 쓰기 좋음", "고층 뷰와 차분한 객실 분위기", "커플·성인 여행 후기가 많은 편"],
        checkIn: { time: "15:00" },
        checkOut: { time: "11:00" },
        breakfast: { included: false, time: "6:30-10:00", menu: "일식·양식 뷔페" },
        amenities: [{ icon: "🌃", label: "도심 전망" }, { icon: "🛍️", label: "긴자 쇼핑" }, { icon: "🍷", label: "라운지 분위기" }],
        roomTypes: [{ name: "모더레이트/슈페리어", capacity: "2인", note: "전망 객실 선호도 높음" }],
        location: { transit: "신바시역·긴자역 도보권", landmark: "긴자 식스, 츠키지, 히비야", airport: "하네다 접근 비교적 편리" },
        tips: ["전망을 중시하면 저층보다 고층/뷰 조건을 확인하는 편이 좋습니다."],
        links: [{ label: "공식 사이트", url: "https://www.gardenhotels.co.jp/ginzapremier/eng/", type: "official" }]
    },
    "리치몬드 호텔 프리미어 아사쿠사": {
        summary: "센소지와 스카이트리 관광 동선이 좋은 아사쿠사권 실속형 호텔입니다.",
        updatedAt: "2026-07-08",
        highlights: ["아사쿠사 관광지 도보 접근", "객실 컨디션 대비 가격 만족도 후기가 많음", "가족·커플 여행 모두 무난"],
        checkIn: { time: "14:00" },
        checkOut: { time: "11:00" },
        breakfast: { included: false, time: "6:30-10:00", menu: "일식·양식 뷔페" },
        amenities: [{ icon: "🏮", label: "아사쿠사" }, { icon: "🗼", label: "스카이트리권" }, { icon: "🧺", label: "세탁 편의" }],
        roomTypes: [{ name: "더블/트윈", capacity: "2인", note: "관광형 객실" }],
        location: { transit: "아사쿠사역·쓰쿠바익스프레스역 도보권", landmark: "센소지, 나카미세도리", airport: "나리타 접근 동선이 비교적 단순" },
        tips: ["동쪽 도쿄 위주 일정이면 신주쿠보다 이동 피로가 적습니다."],
        links: [{ label: "공식 사이트", url: "https://richmondhotel.jp/asakusa-international/", type: "official" }]
    },
    "NOHGA HOTEL UENO TOKYO": {
        summary: "우에노역 도보권의 감각적인 라이프스타일 호텔로, 객실 상태와 조식 만족도가 자주 언급됩니다.",
        updatedAt: "2026-07-08",
        highlights: ["우에노·아메요코·공원 동선이 좋음", "깔끔하고 현대적인 객실 분위기", "조식과 로컬 감성 공간 선호 후기가 많음"],
        checkIn: { time: "15:00" },
        checkOut: { time: "11:00" },
        breakfast: { included: false, time: "7:00-10:00", menu: "카페형 조식·양식 중심" },
        amenities: [{ icon: "☕", label: "카페 분위기" }, { icon: "🚲", label: "로컬 감성" }, { icon: "🚉", label: "우에노역권" }],
        roomTypes: [{ name: "더블/트윈", capacity: "2인", note: "모던한 인테리어" }],
        location: { transit: "우에노역 도보권", landmark: "아메요코, 우에노공원, 국립박물관", airport: "게이세이 우에노 이용 시 나리타 접근 편리" },
        tips: ["숙소 분위기와 조식을 중시하는 여행자에게 잘 맞습니다."],
        links: [{ label: "공식 사이트", url: "https://nohgahotel.com/ueno/en/", type: "official" }]
    },
    "더 게이트 호텔 도쿄 바이 휴릭": {
        summary: "긴자·히비야·유라쿠초를 한 번에 쓰기 좋은 도심형 호텔입니다.",
        updatedAt: "2026-07-08",
        highlights: ["긴자 쇼핑과 히비야 산책 동선이 좋음", "루프탑·라운지 분위기 만족 후기가 있음", "객실은 깔끔하고 성인 여행에 적합"],
        checkIn: { time: "14:00" },
        checkOut: { time: "11:00" },
        breakfast: { included: false, time: "6:30-10:30", menu: "양식 중심 조식" },
        amenities: [{ icon: "🌆", label: "루프탑" }, { icon: "🛍️", label: "긴자권" }, { icon: "🍸", label: "라운지" }],
        roomTypes: [{ name: "클래시/에센셜", capacity: "2인", note: "도심 전망 객실 선택 가능" }],
        location: { transit: "긴자역·히비야역·유라쿠초역 도보권", landmark: "긴자, 히비야공원, 도쿄국제포럼", airport: "하네다 이동 편리" },
        tips: ["쇼핑·공연·맛집 위주 일정이면 동선이 좋습니다."],
        links: [{ label: "공식 사이트", url: "https://www.gate-hotel.jp/tokyo/en/", type: "official" }]
    },
    "다이와 로이넷 호텔 니시신주쿠 프리미어": {
        summary: "신주쿠 중심부보다 차분한 니시신주쿠에 있어 가족·장기 일정에 무난합니다.",
        updatedAt: "2026-07-08",
        highlights: ["주변이 비교적 조용하고 정돈된 분위기", "객실 상태와 욕실 편의성 후기가 무난", "신주쿠 접근성과 휴식감을 같이 원하는 일정에 적합"],
        checkIn: { time: "14:00" },
        checkOut: { time: "11:00" },
        breakfast: { included: false, time: "7:00-10:00", menu: "간단한 뷔페식 조식" },
        amenities: [{ icon: "🏙️", label: "니시신주쿠" }, { icon: "🧺", label: "장기숙박 편의" }, { icon: "👨‍👩‍👧", label: "가족 여행" }],
        roomTypes: [{ name: "더블/트윈", capacity: "2인", note: "비즈니스형 넓이" }],
        location: { transit: "니시신주쿠역 도보권", landmark: "도쿄도청, 신주쿠 중앙공원", airport: "신주쿠역 환승 또는 리무진 연계" },
        tips: ["가부키초 쪽 번잡함이 부담스러우면 대안으로 좋습니다."],
        links: [{ label: "공식 사이트", url: "https://www.daiwaroynet.jp/nishishinjuku-premier/", type: "official" }]
    },
    "호텔 메트로폴리탄 도쿄 이케부쿠로": {
        summary: "이케부쿠로역 인접 대형 호텔로, 북서부 도쿄와 쇼핑 동선이 편합니다.",
        updatedAt: "2026-07-08",
        highlights: ["이케부쿠로역 접근성이 좋음", "대형 호텔이라 기본 서비스가 안정적인 편", "신주쿠·시부야 외 지역 이동 계획에 유리"],
        checkIn: { time: "15:00" },
        checkOut: { time: "12:00" },
        breakfast: { included: false, time: "6:30-10:00", menu: "일식·양식 뷔페" },
        amenities: [{ icon: "🚉", label: "이케부쿠로역권" }, { icon: "🛍️", label: "쇼핑" }, { icon: "🏨", label: "대형 호텔" }],
        roomTypes: [{ name: "스탠다드/슈페리어", capacity: "1~2인", note: "대형 호텔 표준 객실" }],
        location: { transit: "이케부쿠로역 도보권", landmark: "선샤인시티, 백화점·쇼핑몰", airport: "나리타/하네다 리무진·철도 연계" },
        tips: ["도쿄 북서부 일정이나 사이타마 방면 이동이 있으면 편합니다."],
        links: [{ label: "공식 사이트", url: "https://ikebukuro.metropolitan.jp/", type: "official" }]
    },
    "sequence MIYASHITA PARK": {
        summary: "시부야 미야시타파크와 연결된 감성 호텔로, 젊은 여행자와 쇼핑·카페 일정에 잘 맞습니다.",
        updatedAt: "2026-07-08",
        highlights: ["시부야 중심부와 미야시타파크 접근성", "객실은 컴팩트하지만 디자인 만족 후기가 많음", "체크아웃 시간이 늦어 여유로운 일정에 좋음"],
        warnings: ["체크인 시간이 17:00로 늦은 편이라 첫날 일정에 주의가 필요합니다."],
        checkIn: { time: "17:00" },
        checkOut: { time: "14:00" },
        breakfast: { included: false, time: "7:00-12:00", menu: "카페형 브런치 스타일" },
        amenities: [{ icon: "🛍️", label: "미야시타파크" }, { icon: "🎧", label: "감성 디자인" }, { icon: "⏰", label: "레이트 체크아웃" }],
        roomTypes: [{ name: "Queen/Twin", capacity: "2인", note: "컴팩트한 디자인 객실" }],
        location: { transit: "시부야역 도보권", landmark: "미야시타파크, 시부야 스크램블", airport: "시부야역 환승 이용" },
        tips: ["쇼핑·카페·야간 시부야 일정이면 위치 장점이 큽니다."],
        links: [{ label: "공식 사이트", url: "https://www.sequencehotels.com/miyashita-park/", type: "official" }]
    }
};

export default info;
