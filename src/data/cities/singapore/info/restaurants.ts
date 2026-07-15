import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "티안티안 하이난 치킨라이스": {
        photos: ["/images/singapore/info/restaurants/tian-tian-hainanese-chicken-rice-singapore.jpg"],
        summary: "싱가포르 치킨라이스의 정석을 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-07-15",
        highlights: ["부드러운 닭고기와 고소한 밥의 완벽한 조화", "진한 풍미를 자랑하는 특제 간장 소스"],
        tips: ["웨이팅이 길 수 있으니 피크 타임을 피해 방문하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5140166299448514331", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8B%B0%EC%95%88%ED%8B%B0%EC%95%88+%ED%95%98%EC%9D%B4%EB%82%9C+%EC%B9%98%ED%82%A8%EB%9D%BC%EC%9D%B4%EC%8A%A4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호커찬": {
        photos: ["/images/singapore/info/restaurants/hawker-chan-singapore.jpg"],
        summary: "미슐랭 스타로 검증된 가성비 최고의 소이 치킨 맛집입니다.",
        updatedAt: "2026-07-15",
        highlights: ["달콤 짭조름한 소스가 배어든 소이 치킨", "부담 없는 가격으로 즐기는 현지식 식사"],
        tips: ["호커 센터 특유의 활기찬 분위기를 경험하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:30 ~ 오후 3:30; 화요일: 오전 10:30 ~ 오후 3:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.liaofanhawkerchan.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3674368111285686568", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%EC%BB%A4%EC%B0%AC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "점보 씨푸드 리버사이드": {
        photos: ["/images/singapore/info/restaurants/jumbo-seafood-riverside-point-singapore.jpg"],
        summary: "리버사이드 야경과 함께 즐기는 프리미엄 칠리 크랩 전문점입니다.",
        updatedAt: "2026-07-15",
        highlights: ["중독성 강한 매콤달콤한 시그니처 칠리 소스", "신선하고 푸짐한 해산물 요리"],
        tips: ["인기가 매우 높으므로 반드시 사전 예약을 추천합니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 11:00; 화요일: 오전 11:30 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.jumboseafood.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15842127738215567666", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%90%EB%B3%B4+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%A6%AC%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "노사인보드 씨푸드": {
        photos: ["/images/singapore/info/restaurants/no-signboard-seafood-singapore.jpg"],
        summary: "노 사인보드 씨푸드 @ 게일랑 기준으로 확인한 싱가포르 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.2", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:30; 화요일: 오전 11:00 ~ 오전 12:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://nosignboardseafoodatgeylang.shop/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13386836470060926368", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%B8%EC%82%AC%EC%9D%B8%EB%B3%B4%EB%93%9C+%EC%94%A8%ED%91%B8%EB%93%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "송파 바쿠테 뉴브리지로드": {
        photos: ["/images/singapore/info/restaurants/song-fa-bak-kut-teh-new-bridge-road-singapore.jpg"],
        summary: "송파 바쿠테 본점 기준으로 확인한 싱가포르 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.4", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:30 ~ 오후 9:30; 화요일: 오전 9:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.songfa.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14392686212514869493", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%A1%ED%8C%8C+%EB%B0%94%EC%BF%A0%ED%85%8C+%EB%89%B4%EB%B8%8C%EB%A6%AC%EC%A7%80%EB%A1%9C%EB%93%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "328 카통 락사": {
        photos: ["/images/singapore/info/restaurants/328-katong-laksa-singapore.jpg"],
        summary: "328 Katong Laksa 기준으로 확인한 싱가포르 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.2", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://328katonglaksa.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14031700179242330380", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=328+%EC%B9%B4%ED%86%B5+%EB%9D%BD%EC%82%AC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라우파삿 사테 스트리트": {
        photos: ["/images/singapore/info/restaurants/lau-pa-sat-satay-street-singapore.jpg"],
        summary: "빌딩 숲 사이 야외에서 즐기는 낭만적인 사테 맛집",
        updatedAt: "2026-07-15",
        highlights: ["불맛 가득한 꼬치 요리 사테", "도심 속 이색적인 노천 분위기"],
        tips: ["저녁 시간엔 사람이 많으니 조금 일찍 방문하는 것을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 7:00 ~ 오전 3:00; 화요일: 오후 7:00 ~ 오전 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15037913315851860017", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%9A%B0%ED%8C%8C%EC%82%BF+%EC%82%AC%ED%85%8C+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "뉴턴 푸드센터": {
        photos: ["/images/singapore/info/restaurants/newton-food-centre-singapore.jpg"],
        summary: "싱가포르 로컬 음식을 저렴하고 푸짐하게 즐길 수 있는 호커 센터",
        updatedAt: "2026-07-15",
        highlights: ["칠리 크랩과 다양한 해산물 요리", "다양한 종류의 로컬 스트릿 푸드"],
        tips: ["현금이나 트래블로그/트래블월렛 카드를 미리 준비하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://r.grab.com/o/b2eQfmau", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15313617145150253769", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%89%B4%ED%84%B4+%ED%91%B8%EB%93%9C%EC%84%BC%ED%84%B0+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "채터박스 싱가포르": {
        photos: ["/images/singapore/info/restaurants/chatterbox-singapore.jpg"],
        summary: "정통 치킨 라이스를 맛볼 수 있는 센토사 안의 프리미엄 레스토랑",
        updatedAt: "2026-07-15",
        highlights: ["입안에서 녹는 부드러운 치킨 라이스", "센토사 여행 중 즐기는 고급스러운 한 끼"],
        tips: ["인기가 많으니 예약 후 방문하면 더 여유롭게 식사할 수 있어요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:30, 오후 5:30~9:30; 화요일: 오전 11:30 ~ 오후 3:30, 오후 5:30~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://chatterbox.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10955532395483270586", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B1%84%ED%84%B0%EB%B0%95%EC%8A%A4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "바이올렛 운 내셔널 키친": {
        photos: ["/images/singapore/info/restaurants/violet-oon-singapore-national-kitchen.jpg"],
        summary: "내셔널 갤러리에서 즐기는 품격 있는 페라나칸 요리 전문점입니다.",
        updatedAt: "2026-07-15",
        highlights: ["아름다운 인테리어와 정갈한 전통 메뉴", "싱가포르의 역사를 담은 고급스러운 분위기"],
        tips: ["창가 자리를 예약하면 더욱 쾌적하게 즐길 수 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 6:00~10:30; 화요일: 오후 12:00~3:00, 오후 6:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5343552936842987574", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%9D%B4%EC%98%AC%EB%A0%9B+%EC%9A%B4+%EB%82%B4%EC%85%94%EB%84%90+%ED%82%A4%EC%B9%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "캔들넛 싱가포르": {
        photos: ["/images/singapore/info/restaurants/candlenut-singapore.jpg"],
        summary: "미슐랭 스타로 검증된 세계 최초의 페라나칸 레스토랑입니다.",
        updatedAt: "2026-07-15",
        highlights: ["현대적으로 재해석한 정통 페라나칸 요리", "뎀시 힐의 여유로운 분위기"],
        tips: ["인기가 매우 높으니 사전 예약은 필수입니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 6:00~10:00; 화요일: 오후 12:00~3:00, 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5837197023813758139", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BA%94%EB%93%A4%EB%84%9B+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "번트 엔즈": {
        photos: ["/images/singapore/info/restaurants/burnt-ends-singapore.jpg"],
        summary: "참나무 장작으로 구워낸 프리미엄 호주식 바비큐 맛집입니다.",
        updatedAt: "2026-07-15",
        highlights: ["불맛 가득한 수준 높은 그릴 요리", "싱가포르에서 가장 핫한 다이닝 경험"],
        tips: ["예약 난이도가 매우 높으니 여행 일정이 정해지면 바로 예약하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오후 6:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://burntends.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12908640024525839683", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%88%ED%8A%B8+%EC%97%94%EC%A6%88+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "딘타이펑 파라곤": {
        photos: ["/images/singapore/info/restaurants/din-tai-fung-paragon-singapore.jpg"],
        summary: "육즙 가득한 샤오롱바오를 맛볼 수 있는 실패 없는 딤섬 맛집",
        updatedAt: "2026-07-15",
        highlights: ["샤오롱바오", "깔끔하고 고급스러운 분위기"],
        tips: ["웨이팅이 길 수 있으니 식사 시간보다 조금 일찍 방문하세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.dintaifung.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13409746662828269626", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%98%ED%83%80%EC%9D%B4%ED%8E%91+%ED%8C%8C%EB%9D%BC%EA%B3%A4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "야쿤 카야토스트": {
        photos: ["/images/singapore/info/restaurants/ya-kun-kaya-toast-far-east-square-singapore.jpg"],
        summary: "싱가포르 여행의 필수 코스, 정통 카야 토스트 전문점",
        updatedAt: "2026-07-15",
        highlights: ["바삭한 토스트와 달콤한 카야 잼", "부드러운 반숙 계란"],
        tips: ["세트 메뉴로 주문해 따뜻한 코피와 함께 즐겨보세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 7:00; 화요일: 오전 7:30 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.yakun.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18016420241661199137", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%BC%EC%BF%A4+%EC%B9%B4%EC%95%BC%ED%86%A0%EC%8A%A4%ED%8A%B8+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "킬리니 코피티암": {
        photos: ["/images/singapore/info/restaurants/killiney-kopitiam-singapore.jpg"],
        summary: "현지 로컬 분위기를 물씬 느낄 수 있는 전통 커피 맛집",
        updatedAt: "2026-07-15",
        highlights: ["깊은 풍미의 전통 커피", "가성비 좋은 메뉴 구성"],
        tips: ["토아 파요 지역에서 현지인처럼 여유로운 아침 식사 가능"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 8:00; 화요일: 오전 7:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://killiney-kopitiam.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11202335574957950783", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%AC%EB%A6%AC%EB%8B%88+%EC%BD%94%ED%94%BC%ED%8B%B0%EC%95%94+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "잠잠 레스토랑": {
        photos: ["/images/singapore/info/restaurants/zam-zam-restaurant-singapore.jpg"],
        summary: "잠잠 기준으로 확인한 싱가포르 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.2", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 11:00; 화요일: 오전 7:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://zamzam.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4359366392955917744", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%A0%EC%9E%A0+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "테카 센터": {
        photos: ["/images/singapore/info/restaurants/tekka-centre-singapore.jpg"],
        summary: "Tekka Centre 기준으로 확인한 싱가포르 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.2", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16670539394555039452", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%8C%EC%B9%B4+%EC%84%BC%ED%84%B0+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "맥스웰 푸드센터": {
        photos: ["/images/singapore/info/restaurants/maxwell-food-centre-singapore.jpg"],
        summary: "맥스웰 푸드 센터 기준으로 확인한 싱가포르 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.4", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.nea.gov.sg/our-services/hawker-management/overview", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14879639582559932586", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%A5%EC%8A%A4%EC%9B%B0+%ED%91%B8%EB%93%9C%EC%84%BC%ED%84%B0+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이스트코스트 라군 푸드빌리지": {
        photos: ["/images/singapore/info/restaurants/east-coast-lagoon-food-village-singapore.jpg"],
        summary: "바다 근처에서 현지 분위기를 제대로 느낄 수 있는 해산물 맛집",
        updatedAt: "2026-07-15",
        highlights: ["싱싱한 씨푸드와 다양한 로컬 메뉴", "야외 노천 식당의 낭만적인 분위기"],
        tips: ["저녁 피크 타임에는 사람이 많으니 조금 일찍 방문하는 것을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00 ~ 오전 10:30; 화요일: 오후 4:00~10:45",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.nea.gov.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7853980947918247856", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%8A%A4%ED%8A%B8%EC%BD%94%EC%8A%A4%ED%8A%B8+%EB%9D%BC%EA%B5%B0+%ED%91%B8%EB%93%9C%EB%B9%8C%EB%A6%AC%EC%A7%80+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "PS 카페 하딩로드": {
        photos: ["/images/singapore/info/restaurants/ps-cafe-harding-road-singapore.jpg"],
        summary: "싱가포르의 초록빛 감성을 담은 세련된 브런치 카페",
        updatedAt: "2026-07-15",
        highlights: ["숲속에 온 듯한 아름다운 인테리어", "인생샷을 남기기 좋은 분위기 맛집"],
        tips: ["창가 자리를 원한다면 미리 예약하고 방문하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "S$5~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.pscafe.com/pscafe-at-harding-road/?utm_source=google&utm_medium=organic&utm_campaign=gmb", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5373851063022746891", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=PS+%EC%B9%B4%ED%8E%98+%ED%95%98%EB%94%A9%EB%A1%9C%EB%93%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
