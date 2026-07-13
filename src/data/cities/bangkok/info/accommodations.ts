import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "만다린 오리엔탈 방콕": {
        photos: ["/images/bangkok/info/accommodations/mandarin-oriental-bangkok.jpg"],
        summary: "짜오프라야 강변의 품격이 느껴지는 클래식한 럭셔리 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["역사와 전통이 살아있는 고품격 서비스", "강변을 따라 즐기는 로맨틱한 분위기"],
        tips: ["호텔 전용 보트를 타고 이동하는 특별한 경험을 놓치지 마세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "48 Oriental Ave, Khwaeng Bang Rak, Khet Bang Rak, Krung Thep Maha Nakhon 10500 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.mandarinoriental.com/en/bangkok/chao-phraya-river?src=loc.yext.mobkk.ggl", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=842962800430664421", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%EB%8B%A4%EB%A6%B0+%EC%98%A4%EB%A6%AC%EC%97%94%ED%83%88+%EB%B0%A9%EC%BD%95+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시암 켐핀스키 호텔 방콕": {
        photos: ["/images/bangkok/info/accommodations/siam-kempinski-hotel-bangkok.jpg"],
        summary: "시암 파라곤과 바로 연결되어 쇼핑하기 최적화된 도심 속 휴양지입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쇼핑몰 접근성이 뛰어난 완벽한 위치", "도심 속 오아시스 같은 수영장"],
        tips: ["쇼핑 후 바로 객실로 돌아와 쉴 수 있어 가족 여행객에게 추천합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "991, 9 Rama I Rd, Khwaeng Pathum Wan, Pathum Wan, Krung Thep Maha Nakhon 10330 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.kempinski.com/en/siam-hotel?utm_medium=organic&utm_source=google&utm_campaign=KIBKK1&utm_content=gmb&source=S308962248", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3738789648082224563", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EC%95%94+%EC%BC%90%ED%95%80%EC%8A%A4%ED%82%A4+%ED%98%B8%ED%85%94+%EB%B0%A9%EC%BD%95+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 페닌슐라 방콕": {
        photos: ["/images/bangkok/info/accommodations/the-peninsula-bangkok.jpg"],
        summary: "아름다운 강변 전망과 편리한 보트 서비스를 제공하는 리버사이드 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["탁 트인 짜오프라야 강 전망", "강을 따라 이동하는 로맨틱한 셔틀 보트"],
        tips: ["강변 산책로를 따라 여유로운 오후를 즐기기에 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "333 Charoen Nakhon Rd, Khwaeng Khlong Ton Sai, Khet Khlong San, Krung Thep Maha Nakhon 10600 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6320093061142400311", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%8E%98%EB%8B%8C%EC%8A%90%EB%9D%BC+%EB%B0%A9%EC%BD%95+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카펠라 방콕": {
        photos: ["/images/bangkok/info/accommodations/capella-bangkok.jpg"],
        summary: "짜오프라야 강변에서 만나는 최고의 럭셔리 경험",
        updatedAt: "2026-07-13",
        highlights: ["환상적인 리버뷰와 프라이빗한 분위기", "품격 있는 서비스와 미식"],
        tips: ["특별한 기념일이나 완벽한 호캉스를 원할 때 딱이에요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "300 2 ถ. เจริญกรุง Khwaeng Yan Nawa, Khet Sathon, Krung Thep Maha Nakhon 10120 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3618450629827623144", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%A0%EB%9D%BC+%EB%B0%A9%EC%BD%95+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "샹그릴라 방콕": {
        photos: ["/images/bangkok/info/accommodations/shangri-la-bangkok.jpg"],
        summary: "사판탁신역과 강변 이동이 편한 대형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["사판탁신역과 강변 이동이 편한 대형 호텔입니다.", "평점 4.6", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "89 Soi Wat Suan Phlu, Khwaeng Bang Rak, Khet Bang Rak, Krung Thep Maha Nakhon 10500 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.shangri-la.com/bangkok/?WT.mc_id=SLBK_201905_GLOBAL_GMB_HOTEL_TEXTLINK_EN", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7492278184318549116", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%B9%EA%B7%B8%EB%A6%B4%EB%9D%BC+%EB%B0%A9%EC%BD%95+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아난타라 리버사이드 방콕 리조트": {
        photos: ["/images/bangkok/info/accommodations/anantara-riverside-bangkok-resort.jpg"],
        summary: "도심 속에서 리조트의 여유를 느낄 수 있는 강변 숙소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["휴양지 느낌 물씬 나는 넓은 수영장", "가족 여행객에게 추천하는 쾌적한 공간"],
        tips: ["리조트 분위기를 제대로 즐기려면 꼭 며칠 머물러 보세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "257/1-3 Charoennakorn Road Samrae Khet Thon Buri, Krung Thep Maha Nakhon 10600 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7984632237990514454", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%82%9C%ED%83%80%EB%9D%BC+%EB%A6%AC%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C+%EB%B0%A9%EC%BD%95+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "포시즌스 호텔 방콕 앳 짜오프라야 리버": {
        photos: ["/images/bangkok/info/accommodations/four-seasons-hotel-bangkok-at-chao-phraya-river.jpg"],
        summary: "강변 다이닝과 고급 시설이 강점인 럭셔리 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["강변 다이닝과 고급 시설이 강점인 럭셔리 호텔입니다.", "평점 4.8", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "300/1 ถ. เจริญกรุง Khwaeng Yan Nawa, Khet Sathon, Krung Thep Maha Nakhon 10120 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14262520341718275433", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%EC%8B%9C%EC%A6%8C%EC%8A%A4+%ED%98%B8%ED%85%94+%EB%B0%A9%EC%BD%95+%EC%95%B3+%EC%A7%9C%EC%98%A4%ED%94%84%EB%9D%BC%EC%95%BC+%EB%A6%AC%EB%B2%84+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "킴튼 말라이 방콕": {
        photos: ["/images/bangkok/info/accommodations/kimpton-maa-lai-bangkok.jpg"],
        summary: "랑수언/루민피니 권역의 세련된 라이프스타일 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["랑수언/루민피니 권역의 세련된 라이프스타일 호텔입니다.", "평점 4.9", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "78 Soi Ton Son, Khwaeng Lumphini, Pathum Wan, Krung Thep Maha Nakhon 10330 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://bit.ly/GGKimptonMaaLaiBangkok", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14335413063641348252", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%B4%ED%8A%BC+%EB%A7%90%EB%9D%BC%EC%9D%B4+%EB%B0%A9%EC%BD%95+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "칼튼 호텔 방콕 수쿰윗": {
        photos: ["/images/bangkok/info/accommodations/carlton-hotel-bangkok-sukhumvit.jpg"],
        summary: "아속·프롬퐁 이동이 편한 수쿰윗권 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["아속·프롬퐁 이동이 편한 수쿰윗권 호텔입니다.", "평점 4.7", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "491 Sukhumvit Rd, Khwaeng Khlong Toei Nuea, Watthana, Krung Thep Maha Nakhon 10110 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.carltonhotel.co.th/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9784675243960328137", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%BC%ED%8A%BC+%ED%98%B8%ED%85%94+%EB%B0%A9%EC%BD%95+%EC%88%98%EC%BF%B0%EC%9C%97+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이스틴 그랜드 호텔 사톤 방콕": {
        photos: ["/images/bangkok/info/accommodations/eastin-grand-hotel-sathorn-bangkok.jpg"],
        summary: "BTS 수라삭역과 바로 연결되어 이동이 정말 편리한 사톤의 대표 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["BTS 수라삭역 직결로 대중교통 이용 최적", "사톤 지역 중심의 뛰어난 접근성"],
        tips: ["지하철역에서 내리자마자 바로 연결되니 길 찾기 걱정 없어요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "33/1 S Sathon Rd, Yannawa Khet Sathon, Krung Thep Maha Nakhon 10120 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.eastinhotelsresidences.com/eastingrandsathornbangkok/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9455924634641103332", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%8A%A4%ED%8B%B4+%EA%B7%B8%EB%9E%9C%EB%93%9C+%ED%98%B8%ED%85%94+%EC%82%AC%ED%86%A4+%EB%B0%A9%EC%BD%95+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그랜드 센터 포인트 터미널21 방콕": {
        photos: ["/images/bangkok/info/accommodations/grande-centre-point-terminal-21-bangkok.jpg"],
        summary: "아속역과 터미널21 쇼핑몰이 바로 연결되어 가족 여행객에게 딱인 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["터미널21 및 아속역 초근접", "가족 단위 여행객에게 추천하는 넓은 시설"],
        tips: ["쇼핑과 식사를 한 번에 해결할 수 있어 동선이 매우 효율적이에요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2 Soi Sukhumvit 19, Khwaeng Khlong Toei Nuea, Watthana, Krung Thep Maha Nakhon 10110 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.grandecentrepointterminal21.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15652684825667402780", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%9C%EB%93%9C+%EC%84%BC%ED%84%B0+%ED%8F%AC%EC%9D%B8%ED%8A%B8+%ED%84%B0%EB%AF%B8%EB%84%9021+%EB%B0%A9%EC%BD%95+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "차트리움 호텔 리버사이드 방콕": {
        photos: ["/images/bangkok/info/accommodations/chatrium-hotel-riverside-bangkok.jpg"],
        summary: "넓은 객실과 아름다운 강변 전망을 만끽할 수 있는 리버사이드 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["탁 트인 짜오프라야 강 전망", "여유롭고 쾌적한 대형 객실"],
        tips: ["강변의 여유를 느끼며 호캉스하기에 최고의 선택입니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "28 ถ. เจริญกรุง Khwaeng Wat Phraya Krai, Khet Bang Kho Laem, Krung Thep Maha Nakhon 10120 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.chatrium.com/chatriumriversidebangkok?utm_source=google&utm_medium=organic&utm_campaign=gmb-chatriumhotelriversidebangkok", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12381565732285298657", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B0%A8%ED%8A%B8%EB%A6%AC%EC%9B%80+%ED%98%B8%ED%85%94+%EB%A6%AC%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C+%EB%B0%A9%EC%BD%95+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "SO/ 방콕": {
        photos: ["/images/bangkok/info/accommodations/so-bangkok.jpg"],
        summary: "룸피니 공원 전망과 감각적인 디자인이 돋보이는 트렌디한 호텔",
        updatedAt: "2026-07-13",
        highlights: ["룸피니 공원 파노라마 뷰", "유니크하고 스타일리시한 인테리어"],
        tips: ["공원 쪽 객실을 예약하면 더 멋진 전망을 즐길 수 있어요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2 N Sathon Rd, Si Lom, Khet Bang Rak, Krung Thep Maha Nakhon 10500 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://so-hotels.com/en/bangkok/?utm_source=Google&utm_medium=MyBusiness&utm_campaign=SOB-HotelWebsite", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4424842080386112650", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=SO%2F+%EB%B0%A9%EC%BD%95+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오쿠라 프레스티지 방콕": {
        photos: ["/images/bangkok/info/accommodations/the-okura-prestige-bangkok.jpg"],
        summary: "플런칫역과 연결되어 접근성이 뛰어나고 서비스가 품격 있는 호텔",
        updatedAt: "2026-07-13",
        highlights: ["플런칫역 직결로 편리한 교통", "안정적이고 수준 높은 프리미엄 서비스"],
        tips: ["역과 바로 연결되어 있어 비 오는 날에도 이동이 매우 편해요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "57, Park Ventures Ecoplex 57 Thanon Witthayu, Khwaeng Lumphini, Pathum Wan, Krung Thep Maha Nakhon 10330 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.okurabangkok.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6955247198597743942", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%BF%A0%EB%9D%BC+%ED%94%84%EB%A0%88%EC%8A%A4%ED%8B%B0%EC%A7%80+%EB%B0%A9%EC%BD%95+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아바니 플러스 리버사이드 방콕": {
        photos: ["/images/bangkok/info/accommodations/avani-plus-riverside-bangkok-hotel.jpg"],
        summary: "짜오프라야 강변의 탁 트인 전망과 루프톱이 매력적인 호텔",
        updatedAt: "2026-07-13",
        highlights: ["환상적인 리버뷰", "멋진 루프톱 수영장과 바"],
        tips: ["강변 뷰 객실을 선택해야 완벽한 휴식을 즐길 수 있어요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "257 Charoen Nakhon Rd, Khwaeng Samre, Khet Thon Buri, Krung Thep Maha Nakhon 10600 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2588869881114686872", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%B0%94%EB%8B%88+%ED%94%8C%EB%9F%AC%EC%8A%A4+%EB%A6%AC%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C+%EB%B0%A9%EC%BD%95+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
