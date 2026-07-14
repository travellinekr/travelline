import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "호텔 메트로폴리탄 도쿄 마루노우치": {
        photos: ["/images/tokyo/info/accommodations/place.jpg"],
        summary: "도쿄역과 직결되어 이동이 매우 편리한 마루노우치의 중심 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["도쿄역 직결급의 압도적인 접근성", "마루노우치 비즈니스 및 관광 최적의 거점", "사피아 타워 고층에서 즐기는 도심 전망"],
        tips: ["도쿄역 이용 시 이동 시간을 대폭 단축할 수 있습니다.", "주변 마루노우치 지역의 맛집과 쇼핑몰을 즐기기에 좋습니다."],
        warnings: ["방문 전 공식 운영시간 및 예약 상태를 확인하세요."],
        checkIn: { time: "15:00", note: "호텔별 상이, 예약 확인서 기준" },
        checkOut: { time: "11:00", note: "호텔별 상이" },
        breakfast: { included: false, price: "예약 플랜별 상이", time: "호텔별 확인", menu: "뷔페/세트 여부 확인" },
        amenities: [{ icon: "🚇", label: "교통", note: "가까운 역과 이동 시간을 확인하세요." }, { icon: "🧳", label: "짐보관", note: "체크인 전후 가능 여부 확인" }],
        location: { landmark: "일본 〒100-0005 Tokyo, Chiyoda City, Marunouchi, 1-chōme−7−１２ サピアタワ 27階", airport: "공항 이동 시간은 교통 상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://marunouchi.metropolitan.jp/?utm_source=google&utm_medium=gbp", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15020598287052289431", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%A9%94%ED%8A%B8%EB%A1%9C%ED%8F%B4%EB%A6%AC%ED%83%84+%EB%8F%84%EC%BF%84+%EB%A7%88%EB%A3%A8%EB%85%B8%EC%9A%B0%EC%B9%98+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "JR 큐슈 호텔 블라섬 신주쿠": {
        photos: ["/images/tokyo/info/accommodations/jr.jpg"],
        summary: "신주쿠역 남쪽 역세권으로 한국 여행객에게 인기 있는 호텔",
        updatedAt: "2026-07-14",
        highlights: ["신주쿠역 인근 편리한 접근성", "한국인 후기가 검증된 숙소", "깔끔하고 현대적인 시설"],
        tips: ["방문 전 공식 운영시간 확인 권장", "신주쿠역 남쪽 출구 이용 시 이동이 편리함"],
        warnings: ["인기 숙소로 사전 예약 필수"],
        checkIn: { time: "15:00", note: "호텔별 상이, 예약 확인서 기준" },
        checkOut: { time: "11:00", note: "호텔별 상이" },
        breakfast: { included: false, price: "예약 플랜별 상이", time: "호텔별 확인", menu: "뷔페/세트 여부 확인" },
        amenities: [{ icon: "🚇", label: "교통", note: "가까운 역과 이동 시간을 확인하세요." }, { icon: "🧳", label: "짐보관", note: "체크인 전후 가능 여부 확인" }],
        location: { landmark: "일본 〒151-0053 Tokyo, Shibuya, Yoyogi, 2-chōme−6−２ ＪＲ九州ホテルブラッサム新宿 １階", airport: "공항 이동 시간은 교통 상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.jrk-hotels.co.jp/Shinjuku/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8478747531044151851", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=JR+%ED%81%90%EC%8A%88+%ED%98%B8%ED%85%94+%EB%B8%94%EB%9D%BC%EC%84%AC+%EC%8B%A0%EC%A3%BC%EC%BF%A0+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "호텔 그레이스리 신주쿠": {
        photos: ["/images/tokyo/info/accommodations/place-2.jpg"],
        summary: "신주쿠 가부키초의 랜드마크, 고질라 헤드로 유명한 대표 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["가부키초 중심의 뛰어난 접근성", "호텔 상징인 거대 고질라 헤드 조형물", "4.3점의 높은 사용자 평점"],
        tips: ["주변 가부키초 맛집과 쇼핑 시설 이용이 편리합니다.", "고질라 테마를 즐길 수 있는 특별한 경험을 제공합니다."],
        warnings: ["유흥가 중심에 위치하여 밤늦게 소음이 발생할 수 있습니다."],
        checkIn: { time: "15:00", note: "호텔별 상이, 예약 확인서 기준" },
        checkOut: { time: "11:00", note: "호텔별 상이" },
        breakfast: { included: false, price: "예약 플랜별 상이", time: "호텔별 확인", menu: "뷔페/세트 여부 확인" },
        amenities: [{ icon: "🚇", label: "교통", note: "가까운 역과 이동 시간을 확인하세요." }, { icon: "🧳", label: "짐보관", note: "체크인 전후 가능 여부 확인" }],
        location: { landmark: "1-chōme-19-1 Kabukichō, Shinjuku City, Tokyo 160-8466 일본", airport: "공항 이동 시간은 교통 상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11364248213360716905", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%8A%A4%EB%A6%AC+%EC%8B%A0%EC%A3%BC%EC%BF%A0+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "미츠이 가든 호텔 긴자 프리미어": {
        photos: ["/images/tokyo/info/accommodations/place-3.jpg"],
        summary: "긴자와 신바시 사이, 야경과 쇼핑 접근성이 뛰어난 고층 호텔",
        updatedAt: "2026-07-14",
        highlights: ["도쿄 도심을 한눈에 담는 환상적인 야경", "긴자·신바시 지역 쇼핑 및 미식 접근성 우수", "세련된 분위기의 프리미엄 객실"],
        tips: ["전망을 위해 고층 객실 예약을 추천합니다", "방문 전 공식 운영시간 확인을 권장합니다"],
        warnings: ["인기 호텔로 사전 예약이 필수적입니다"],
        checkIn: { time: "15:00", note: "호텔별 상이, 예약 확인서 기준" },
        checkOut: { time: "11:00", note: "호텔별 상이" },
        breakfast: { included: false, price: "예약 플랜별 상이", time: "호텔별 확인", menu: "뷔페/세트 여부 확인" },
        amenities: [{ icon: "🚇", label: "교통", note: "가까운 역과 이동 시간을 확인하세요." }, { icon: "🧳", label: "짐보관", note: "체크인 전후 가능 여부 확인" }],
        location: { landmark: "8-chōme-13-1 Ginza, Chuo City, Tokyo 104-0061 일본", airport: "공항 이동 시간은 교통 상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.gardenhotels.co.jp/ginza-premier/?utm_source=googlebusinessprofile&utm_medium=google&utm_campaign=maps", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16518853781871248391", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%B8%A0%EC%9D%B4+%EA%B0%80%EB%93%A0+%ED%98%B8%ED%85%94+%EA%B8%B4%EC%9E%90+%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "리치몬드 호텔 프리미어 아사쿠사": {
        photos: ["/images/tokyo/info/accommodations/place.png"],
        summary: "센소지와 스카이트리 관광에 최적화된 아사쿠사의 인기 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["센소지·스카이트리 관광 동선에 매우 유리", "4.4점의 높은 평점과 풍부한 이용 후기"],
        tips: ["방문 전 공식 운영시간을 확인하세요."],
        warnings: [],
        checkIn: { time: "15:00", note: "호텔별 상이, 예약 확인서 기준" },
        checkOut: { time: "11:00", note: "호텔별 상이" },
        breakfast: { included: false, price: "예약 플랜별 상이", time: "호텔별 확인", menu: "뷔페/세트 여부 확인" },
        amenities: [{ icon: "🚇", label: "교통", note: "가까운 역과 이동 시간을 확인하세요." }, { icon: "🧳", label: "짐보관", note: "체크인 전후 가능 여부 확인" }],
        location: { landmark: "2-chōme-6-7 Asakusa, Taito City, Tokyo 111-0032 일본", airport: "공항 이동 시간은 교통 상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://richmondhotel.jp/asakusa-international/?utm_source=GGL&utm_medium=GBP&utm_campaign=Canly", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14638168679095614495", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%B9%98%EB%AA%AC%EB%93%9C+%ED%98%B8%ED%85%94+%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4+%EC%95%84%EC%82%AC%EC%BF%A0%EC%82%AC+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "NOHGA HOTEL UENO TOKYO": {
        photos: ["/images/tokyo/info/accommodations/nohga-hotel-ueno-tokyo.jpg"],
        summary: "우에노역 인근의 감각적인 로컬 라이프스타일 호텔",
        updatedAt: "2026-07-14",
        highlights: ["우에노역 도보권의 편리한 위치", "감각적이고 세련된 로컬 디자인"],
        tips: ["주변 로컬 맛집과 카페 탐방을 추천합니다"],
        warnings: [],
        checkIn: { time: "15:00", note: "호텔별 상이, 예약 확인서 기준" },
        checkOut: { time: "11:00", note: "호텔별 상이" },
        breakfast: { included: false, price: "예약 플랜별 상이", time: "호텔별 확인", menu: "뷔페/세트 여부 확인" },
        amenities: [{ icon: "🚇", label: "교통", note: "가까운 역과 이동 시간을 확인하세요." }, { icon: "🧳", label: "짐보관", note: "체크인 전후 가능 여부 확인" }],
        location: { landmark: "2-chōme-21-10 Higashiueno, Taito City, Tokyo 110-0015 일본", airport: "공항 이동 시간은 교통 상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://nohgahotel.com/ueno/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13582207158481703769", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=NOHGA+HOTEL+UENO+TOKYO+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "더 게이트 호텔 도쿄 바이 휴릭": {
        photos: ["/images/tokyo/info/accommodations/place-4.jpg"],
        summary: "긴자와 히비야 지역으로의 접근성이 뛰어나며, 도쿄 도심의 환상적인 야경을 즐길 수 있는 루프탑 라운지가 매력적인 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["도쿄 도심 야경을 감상할 수 있는 루프탑 라운지", "긴자·히비야 이동이 편리한 최적의 위치"],
        tips: ["일몰 시간대에 맞춰 루프탑 라운지를 방문하면 더욱 아름다운 야경을 즐길 수 있습니다."],
        warnings: ["루프탑 이용 시 날씨 상황에 따라 운영 여부가 달라질 수 있습니다."],
        checkIn: { time: "15:00", note: "호텔별 상이, 예약 확인서 기준" },
        checkOut: { time: "11:00", note: "호텔별 상이" },
        breakfast: { included: false, price: "예약 플랜별 상이", time: "호텔별 확인", menu: "뷔페/세트 여부 확인" },
        amenities: [{ icon: "🚇", label: "교통", note: "가까운 역과 이동 시간을 확인하세요." }, { icon: "🧳", label: "짐보관", note: "체크인 전후 가능 여부 확인" }],
        location: { landmark: "2-chōme-2-3 Yūrakuchō, Chiyoda City, Tokyo 100-0006 일본", airport: "공항 이동 시간은 교통 상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.gate-hotel.jp/tokyo/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5755203236204594335", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EA%B2%8C%EC%9D%B4%ED%8A%B8+%ED%98%B8%ED%85%94+%EB%8F%84%EC%BF%84+%EB%B0%94%EC%9D%B4+%ED%9C%B4%EB%A6%AD+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "다이와 로이넷 호텔 니시신주쿠 프리미어": {
        photos: ["/images/tokyo/info/accommodations/place-5.jpg"],
        summary: "니시신주쿠의 조용한 위치로 장기 숙박과 가족 여행에 최적화된 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["조용하고 쾌적한 니시신주쿠 위치", "장기 숙박 및 가족 여행객에게 적합", "4.4점의 높은 사용자 평점"],
        tips: ["가족 단위 또는 장기 투숙객에게 추천합니다."],
        warnings: ["번화가보다는 조용한 환경을 선호하는 분들께 적합합니다."],
        checkIn: { time: "15:00", note: "호텔별 상이, 예약 확인서 기준" },
        checkOut: { time: "11:00", note: "호텔별 상이" },
        breakfast: { included: false, price: "예약 플랜별 상이", time: "호텔별 확인", menu: "뷔페/세트 여부 확인" },
        amenities: [{ icon: "🚇", label: "교통", note: "가까운 역과 이동 시간을 확인하세요." }, { icon: "🧳", label: "짐보관", note: "체크인 전후 가능 여부 확인" }],
        location: { landmark: "6-chōme-12-39 Nishishinjuku, Shinjuku City, Tokyo 160-0023 일본", airport: "공항 이동 시간은 교통 상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.daiwaroynet.jp/nishi-shinjuku/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17220133125875812100", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9D%B4%EC%99%80+%EB%A1%9C%EC%9D%B4%EB%84%B7+%ED%98%B8%ED%85%94+%EB%8B%88%EC%8B%9C%EC%8B%A0%EC%A3%BC%EC%BF%A0+%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "호텔 메트로폴리탄 도쿄 이케부쿠로": {
        photos: ["/images/tokyo/info/accommodations/place-6.jpg"],
        summary: "이케부쿠로역과 인접하여 도쿄 북서부 이동과 쇼핑에 매우 편리한 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["이케부쿠로역 근접으로 뛰어난 접근성", "도쿄 북서부 지역 여행 및 쇼핑 최적화"],
        tips: ["방문 전 공식 운영시간을 확인하는 것이 좋습니다."],
        warnings: [],
        checkIn: { time: "15:00", note: "호텔별 상이, 예약 확인서 기준" },
        checkOut: { time: "11:00", note: "호텔별 상이" },
        breakfast: { included: false, price: "예약 플랜별 상이", time: "호텔별 확인", menu: "뷔페/세트 여부 확인" },
        amenities: [{ icon: "🚇", label: "교통", note: "가까운 역과 이동 시간을 확인하세요." }, { icon: "🧳", label: "짐보관", note: "체크인 전후 가능 여부 확인" }],
        location: { landmark: "1-chōme-6-1 Nishiikebukuro, Toshima City, Tokyo 171-8505 일본", airport: "공항 이동 시간은 교통 상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://ikebukuro.metropolitan.jp/?utm_source=google&utm_medium=gbp", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1669693716906684867", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%A9%94%ED%8A%B8%EB%A1%9C%ED%8F%B4%EB%A6%AC%ED%83%84+%EB%8F%84%EC%BF%84+%EC%9D%B4%EC%BC%80%EB%B6%80%EC%BF%A0%EB%A1%9C+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "sequence MIYASHITA PARK": {
        photos: ["/images/tokyo/info/accommodations/sequence-miyashita-park.jpg"],
        summary: "시부야 미야시타 파크와 직결된 트렌디한 감성 호텔",
        updatedAt: "2026-07-14",
        highlights: ["미야시타 파크 바로 옆 위치", "젊은 여행객에게 인기 있는 감성 숙소"],
        tips: ["주변 쇼핑몰 및 맛집 접근성 매우 우수"],
        warnings: ["방문 전 공식 운영 시간 확인 권장"],
        checkIn: { time: "15:00", note: "호텔별 상이, 예약 확인서 기준" },
        checkOut: { time: "11:00", note: "호텔별 상이" },
        breakfast: { included: false, price: "예약 플랜별 상이", time: "호텔별 확인", menu: "뷔페/세트 여부 확인" },
        amenities: [{ icon: "🚇", label: "교통", note: "가까운 역과 이동 시간을 확인하세요." }, { icon: "🧳", label: "짐보관", note: "체크인 전후 가능 여부 확인" }],
        location: { landmark: "MIYASHITA PARK North, 6-chōme-20-10 Jingūmae, Shibuya, Tokyo 150-0001 일본", airport: "공항 이동 시간은 교통 상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.sequencehotels.com/miyashita-park/?utm_source=googlebusinessprofile&utm_medium=google&utm_campaign=maps", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9510849312829855018", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=sequence+MIYASHITA+PARK+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "자누 도쿄": {
        photos: ["/images/tokyo/info/accommodations/place-7.jpg"],
        summary: "아자부다이 힐스에 위치한 신규 럭셔리 호텔로, 도심 미식과 멋진 전망을 즐기기에 최적화된 숙소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["아자부다이 힐스의 세련된 인프라 이용 가능", "도심 미식 및 관광 동선이 매우 편리함", "탁 트인 도심 전망 제공"],
        tips: ["방문 전 공식 운영시간 확인 권장"],
        warnings: ["신규 오픈 호텔로 예약 상황을 미리 확인하세요"],
        checkIn: { time: "15:00", note: "호텔별 상이, 예약 확인서 기준" },
        checkOut: { time: "11:00", note: "호텔별 상이" },
        breakfast: { included: false, price: "예약 플랜별 상이", time: "호텔별 확인", menu: "뷔페/세트 여부 확인" },
        amenities: [{ icon: "🚇", label: "교통", note: "가까운 역과 이동 시간을 확인하세요." }, { icon: "🧳", label: "짐보관", note: "체크인 전후 가능 여부 확인" }],
        location: { landmark: "1-chōme-2-2 Azabudai, Minato City, Tokyo 106-0041 일본", airport: "공항 이동 시간은 교통 상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.janu.com/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18402723767902518618", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%90%EB%88%84+%EB%8F%84%EC%BF%84+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
};

export default info;
