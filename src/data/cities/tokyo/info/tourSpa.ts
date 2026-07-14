import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "센소지": {
        photos: ["/images/tokyo/info/tourSpa/place.jpg"],
        summary: "아사쿠사를 대표하는 유서 깊은 사찰로, 나카미세도리와 함께 일본의 전통적인 분위기를 만끽할 수 있는 명소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["아사쿠사의 상징적인 붉은 등", "나카미세도리의 다양한 길거리 음식 탐방", "일본 전통 사찰의 고즈넉한 정취"],
        tips: ["나카미세도리 상점가와 함께 둘러보기 좋습니다.", "입장료는 무료입니다."],
        warnings: ["사찰 운영 시간(06:00-17:00)을 미리 확인하세요."],
        hours: "06:00-17:00",
        duration: "1~3시간",
        price: "티켓/현장 확인",
        reservation: { required: false, method: "공식 사이트/현장 확인", note: "주말·성수기 사전 예매 권장" },
        access: { area: "2-chōme-3-1 Asakusa, Taito City, Tokyo 111-0032 일본", note: "대중교통 동선 확인 권장" },
        bestTime: "오전 이른 시간 또는 해질녘 전후",
        links: [
            { label: "공식 사이트", url: "https://www.senso-ji.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7785923974874169613", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%BC%EC%86%8C%EC%A7%80+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "메이지 신궁": {
        photos: ["/images/tokyo/info/tourSpa/place-2.jpg"],
        summary: "하라주쿠 인근의 울창한 숲과 고요한 분위기를 느낄 수 있는 도쿄의 대표적인 신사입니다.",
        updatedAt: "2026-07-14",
        highlights: ["도심 속 거대한 숲길 산책", "웅장한 도리이와 신궁 건축물", "무료 입장으로 즐기는 여유로운 휴식"],
        tips: ["일출부터 일몰까지 운영되므로 낮 시간 방문을 추천합니다."],
        warnings: ["일몰 이후에는 입장이 제한될 수 있으니 시간을 확인하세요."],
        hours: "일출-일몰",
        duration: "1~3시간",
        price: "티켓/현장 확인",
        reservation: { required: false, method: "공식 사이트/현장 확인", note: "주말·성수기 사전 예매 권장" },
        access: { area: "1-1 Yoyogikamizonochō, Shibuya, Tokyo 151-8557 일본", note: "대중교통 동선 확인 권장" },
        bestTime: "오전 이른 시간 또는 해질녘 전후",
        links: [
            { label: "공식 사이트", url: "https://www.meijijingu.or.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10361244767556222835", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EC%9D%B4%EC%A7%80+%EC%8B%A0%EA%B6%81+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "도쿄 타워": {
        photos: ["/images/tokyo/info/tourSpa/place-3.jpg"],
        summary: "도쿄의 상징적인 클래식 랜드마크로, 아름다운 야경과 사진 촬영에 최적화된 전망 명소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["환상적인 도쿄 시내 야경", "인생샷을 남기기 좋은 포토 스팟"],
        tips: ["일몰 시간대에 맞춰 방문하면 낮과 밤의 풍경을 모두 즐길 수 있습니다.", "대기 시간을 줄이기 위해 운영 시간을 미리 확인하세요."],
        warnings: ["악천후 시 전망대 이용이 제한될 수 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        duration: "1~3시간",
        price: "티켓/현장 확인",
        reservation: { required: false, method: "공식 사이트/현장 확인", note: "주말·성수기 사전 예매 권장" },
        access: { area: "4-chōme-2-8 Shibakōen, Minato City, Tokyo 105-0011 일본", note: "대중교통 동선 확인 권장" },
        bestTime: "오전 이른 시간 또는 해질녘 전후",
        links: [
            { label: "공식 사이트", url: "https://www.tokyotower.co.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5195627782660688349", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%BF%84+%ED%83%80%EC%9B%8C+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "도쿄 스카이트리": {
        photos: ["/images/tokyo/info/tourSpa/place-4.jpg"],
        summary: "스미다·아사쿠사 지역과 함께 둘러보기 좋은 도쿄의 랜드마크 초고층 전망대",
        updatedAt: "2026-07-14",
        highlights: ["도쿄 시내를 한눈에 담는 파노라마 뷰", "스미다·아사쿠사 여행 코스로 최적"],
        tips: ["아사쿠사와 함께 방문하여 도심 산책 코스를 짜보세요."],
        warnings: ["입장료가 다소 높은 편이니 예산을 확인하세요."],
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        duration: "1~3시간",
        price: "티켓/현장 확인",
        reservation: { required: false, method: "공식 사이트/현장 확인", note: "주말·성수기 사전 예매 권장" },
        access: { area: "1-chōme-1-2 Oshiage, Sumida City, Tokyo 131-0045 일본", note: "대중교통 동선 확인 권장" },
        bestTime: "오전 이른 시간 또는 해질녘 전후",
        links: [
            { label: "공식 사이트", url: "https://www.tokyo-skytree.jp/?utm_source=google&utm_medium=maps", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9015449659807889194", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%BF%84+%EC%8A%A4%EC%B9%B4%EC%9D%B4%ED%8A%B8%EB%A6%AC+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "시부야 스카이": {
        photos: ["/images/tokyo/info/tourSpa/place-5.jpg"],
        summary: "도쿄의 파노라마 뷰를 한눈에 담을 수 있는 시부야 최고의 전망 명소",
        updatedAt: "2026-07-14",
        highlights: ["시부야 스크램블 교차로가 내려다보이는 탁 트인 루프탑 뷰", "도쿄 도심의 아름다운 낮과 밤을 모두 즐길 수 있는 곳"],
        tips: ["일몰 시간대에 맞춰 예약하면 더욱 환상적인 풍경을 감상할 수 있습니다.", "방문 전 사전 예약은 필수입니다."],
        warnings: ["기상 악화나 강풍 시 루프탑 출입이 제한될 수 있습니다."],
        hours: "월요일: 오전 10:00 ~ 오후 10:30; 화요일: 오전 10:00 ~ 오후 10:30",
        duration: "1~3시간",
        price: "티켓/현장 확인",
        reservation: { required: false, method: "공식 사이트/현장 확인", note: "주말·성수기 사전 예매 권장" },
        access: { area: "일본 〒150-6145 Tokyo, Shibuya, 2-chōme−24−１２ スクランブルスクエア 14階・45階 46階・屋上", note: "대중교통 동선 확인 권장" },
        bestTime: "오전 이른 시간 또는 해질녘 전후",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8067212359343678579", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EB%B6%80%EC%95%BC+%EC%8A%A4%EC%B9%B4%EC%9D%B4+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "황거 동쪽 정원": {
        photos: ["/images/tokyo/info/tourSpa/place-6.jpg"],
        summary: "도쿄역·마루노우치 일정과 함께 즐기기 좋은 역사적인 산책 코스입니다.",
        updatedAt: "2026-07-14",
        highlights: ["도쿄역 인근의 역사적 산책로", "무료로 즐기는 여유로운 공원"],
        tips: ["도쿄역·마루노우치 동선에 포함해 계획하세요", "방문 전 운영 시간을 꼭 확인하세요"],
        warnings: ["매주 월요일은 휴무입니다"],
        hours: "월요일: 휴무일; 화요일: 오전 9:00 ~ 오후 7:00",
        duration: "1~3시간",
        price: "티켓/현장 확인",
        reservation: { required: false, method: "공식 사이트/현장 확인", note: "주말·성수기 사전 예매 권장" },
        access: { area: "11 Naitōmachi, Shinjuku City, Tokyo 160-0014 일본", note: "대중교통 동선 확인 권장" },
        bestTime: "오전 이른 시간 또는 해질녘 전후",
        links: [
            { label: "공식 사이트", url: "https://www.env.go.jp/garden/shinjukugyoen/index.html", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7646744610971579015", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%A9%EA%B1%B0+%EB%8F%99%EC%AA%BD+%EC%A0%95%EC%9B%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "우에노 공원": {
        photos: ["/images/tokyo/info/tourSpa/place-7.jpg"],
        summary: "박물관, 미술관, 동물원을 한 번에 즐길 수 있는 도쿄의 대표적인 산책 명소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["다양한 문화 시설(박물관·미술관) 인접", "여유로운 산책과 피크닉 가능", "공원 입장료 무료"],
        tips: ["주변 박물관과 연계하여 하루 코스로 계획하기 좋습니다.", "벚꽃 시즌에 방문하면 더욱 아름다운 풍경을 볼 수 있습니다."],
        warnings: ["주말이나 공휴일에는 인파가 매우 많을 수 있습니다."],
        hours: "월요일: 오전 5:00 ~ 오후 11:00; 화요일: 오전 5:00 ~ 오후 11:00",
        duration: "1~3시간",
        price: "티켓/현장 확인",
        reservation: { required: false, method: "공식 사이트/현장 확인", note: "주말·성수기 사전 예매 권장" },
        access: { area: "일본 〒110-0007 도쿄도 다이토구 우에노코엔 4", note: "대중교통 동선 확인 권장" },
        bestTime: "오전 이른 시간 또는 해질녘 전후",
        links: [
            { label: "공식 사이트", url: "https://www.kensetsu.metro.tokyo.lg.jp/jimusho/toubuk/ueno", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12811393089244390490", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EC%97%90%EB%85%B8+%EA%B3%B5%EC%9B%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "도쿄 국립박물관": {
        photos: ["/images/tokyo/info/tourSpa/place-8.jpg"],
        summary: "일본의 미술과 역사를 한눈에 볼 수 있는 우에노 공원의 대표적인 실내 명소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["일본의 귀중한 역사 및 미술 유물 관람", "우에노 공원 내 위치한 쾌적한 문화 공간"],
        tips: ["월요일은 휴관이므로 방문 전 일정을 확인하세요.", "입장료는 약 1,000엔 내외입니다."],
        warnings: ["오후 5시에 운영이 종료되니 관람 시간을 주의하세요."],
        hours: "월요일: 휴무일; 화요일: 오전 9:30 ~ 오후 5:00",
        duration: "1~3시간",
        price: "티켓/현장 확인",
        reservation: { required: false, method: "공식 사이트/현장 확인", note: "주말·성수기 사전 예매 권장" },
        access: { area: "13-9 Uenokōen, Taito City, Tokyo 110-8712 일본", note: "대중교통 동선 확인 권장" },
        bestTime: "오전 이른 시간 또는 해질녘 전후",
        links: [
            { label: "공식 사이트", url: "https://www.tnm.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2535480516976146397", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%BF%84+%EA%B5%AD%EB%A6%BD%EB%B0%95%EB%AC%BC%EA%B4%80+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "하마리큐 은사정원": {
        photos: ["/images/tokyo/info/tourSpa/place-9.jpg"],
        summary: "긴자·신바시와 함께 둘러보기 좋은 도심 속 일본식 정원",
        updatedAt: "2026-07-14",
        highlights: ["도심에서 즐기는 고즈넉한 일본식 풍경", "긴자, 신바시, 츠키지 동선에 최적화된 위치"],
        tips: ["입장료는 약 300엔 내외로 부담 없이 방문 가능", "주변 맛집 및 쇼핑 거리와 연계한 일정 추천"],
        warnings: ["오후 5시 폐장이므로 방문 전 운영 시간 확인 필수"],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "1~3시간",
        price: "티켓/현장 확인",
        reservation: { required: false, method: "공식 사이트/현장 확인", note: "주말·성수기 사전 예매 권장" },
        access: { area: "1-1 Hamarikyūteien, Chuo City, Tokyo 104-0046 일본", note: "대중교통 동선 확인 권장" },
        bestTime: "오전 이른 시간 또는 해질녘 전후",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11189930762912151578", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%A7%88%EB%A6%AC%ED%81%90+%EC%9D%80%EC%82%AC%EC%A0%95%EC%9B%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "teamLab Borderless Azabudai Hills": {
        photos: ["/images/tokyo/info/tourSpa/teamlab-borderless-azabudai-hills.jpg"],
        summary: "아자부다이 힐스에서 즐기는 환상적인 몰입형 디지털 아트 전시",
        updatedAt: "2026-07-14",
        highlights: ["경계 없는 예술의 세계를 경험하는 인터랙티브 미디어 아트", "아자부다이 힐스의 새로운 랜드마크 디지털 뮤지엄"],
        tips: ["날씨에 상관없이 방문하기 좋은 실내 일정 추천", "방문 전 사전 예약 권장"],
        warnings: ["입장료가 다소 높은 편이니 확인 필요"],
        hours: "월요일: 오전 8:30 ~ 오후 9:00; 화요일: 오전 8:30 ~ 오후 9:00",
        duration: "1~3시간",
        price: "티켓/현장 확인",
        reservation: { required: false, method: "공식 사이트/현장 확인", note: "주말·성수기 사전 예매 권장" },
        access: { area: "일본 〒106-0041 Tokyo, Minato City, Toranomon, 5-chōme−9−９ Azabudai Hills Garden Plaza B, B1", note: "대중교통 동선 확인 권장" },
        bestTime: "오전 이른 시간 또는 해질녘 전후",
        links: [
            { label: "공식 사이트", url: "https://www.teamlab.art/jp/e/tokyo/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6355049266444838481", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=teamLab+Borderless+Azabudai+Hills+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "도쿄도청 전망대": {
        photos: ["/images/tokyo/info/tourSpa/place-10.jpg"],
        summary: "신주쿠에서 도쿄 전경을 무료로 감상할 수 있는 전망대입니다.",
        updatedAt: "2026-07-14",
        highlights: ["도쿄 시내를 한눈에 볼 수 있는 탁 트인 전망", "부담 없는 무료 입장"],
        tips: ["맑은 날 방문하면 후지산까지 보일 수 있습니다.", "방문 전 운영 시간을 미리 확인하세요."],
        warnings: ["월요일은 휴무이므로 방문 시 주의가 필요합니다."],
        hours: "월요일: 휴무일; 화요일: 오전 9:30 ~ 오후 5:00",
        duration: "1~3시간",
        price: "티켓/현장 확인",
        reservation: { required: false, method: "공식 사이트/현장 확인", note: "주말·성수기 사전 예매 권장" },
        access: { area: "일본 〒163-8001 Tokyo, Shinjuku City, Nishishinjuku, 2-chōme−8−１ Tochomae Station, 45F", note: "대중교통 동선 확인 권장" },
        bestTime: "오전 이른 시간 또는 해질녘 전후",
        links: [
            { label: "공식 사이트", url: "https://www.zaimu.metro.tokyo.lg.jp/tochousha/goannai/tenbou", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16551227205725519406", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%BF%84%EB%8F%84%EC%B2%AD+%EC%A0%84%EB%A7%9D%EB%8C%80+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "오다이바 해변공원": {
        photos: ["/images/tokyo/info/tourSpa/place-11.jpg"],
        summary: "레인보우 브릿지의 아름다운 야경과 쇼핑을 동시에 즐길 수 있는 도쿄 베이사이드 명소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["레인보우 브릿지 야경", "쇼핑몰과의 편리한 동선", "무료 이용 가능"],
        tips: ["야경 감상을 위해 해 질 녘 방문을 추천합니다.", "주변 쇼핑몰과 함께 일정을 계획하면 좋습니다."],
        warnings: ["밤에는 바닷바람이 차가울 수 있으니 외투를 준비하세요."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~3시간",
        price: "티켓/현장 확인",
        reservation: { required: false, method: "공식 사이트/현장 확인", note: "주말·성수기 사전 예매 권장" },
        access: { area: "1-chōme-4-4 Daiba, Minato City, Tokyo 135-0091 일본", note: "대중교통 동선 확인 권장" },
        bestTime: "오전 이른 시간 또는 해질녘 전후",
        links: [
            { label: "공식 사이트", url: "http://www.tptc.co.jp/park/01_02", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9066800158489327401", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%8B%A4%EC%9D%B4%EB%B0%94+%ED%95%B4%EB%B3%80%EA%B3%B5%EC%9B%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "도쿄 도요스 만요클럽": {
        photos: ["/images/tokyo/info/tourSpa/place-12.jpg"],
        summary: "도요스 센캬쿠반라이와 함께 즐기는 도쿄의 새로운 온천 휴식처",
        updatedAt: "2026-07-14",
        highlights: ["도요스 센캬쿠반라이와 연계된 신규 스파 코스", "24시간 운영으로 언제든 여유로운 온천욕 가능"],
        tips: ["주변 맛집 거리인 센캬쿠반라이와 함께 방문하면 더욱 좋습니다.", "입장권 종류에 따라 가격이 다르니 미리 확인하세요."],
        warnings: ["티켓 종류별로 입장료가 상이할 수 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~3시간",
        price: "티켓/현장 확인",
        reservation: { required: false, method: "공식 사이트/현장 확인", note: "주말·성수기 사전 예매 권장" },
        access: { area: "6-chōme-5-1 Toyosu, Koto City, Tokyo 135-0061 일본", note: "대중교통 동선 확인 권장" },
        bestTime: "오전 이른 시간 또는 해질녘 전후",
        links: [
            { label: "공식 사이트", url: "https://tokyo-toyosu.manyo.co.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5698941766336617192", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%BF%84+%EB%8F%84%EC%9A%94%EC%8A%A4+%EB%A7%8C%EC%9A%94%ED%81%B4%EB%9F%BD+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
};

export default info;
