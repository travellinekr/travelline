import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "앙코르 와트": {
        photos: ["/images/siem-reap/info/tourSpa/angkor-wat-siem-reap.jpg"],
        summary: "일출 관람과 핵심 유적 투어의 중심이 되는 세계적인 유적지입니다.",
        updatedAt: "2026-07-21",
        highlights: ["웅장한 일출 풍경", "정교한 부조 조각"],
        tips: ["일출 시간에 맞춰 방문하는 것을 추천합니다."],
        duration: "3~5시간",
        price: "앙코르 패스 별도",
        access: { area: "캄보디아 시엠레아프", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4515887843808133517", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%99%EC%BD%94%EB%A5%B4+%EC%99%80%ED%8A%B8+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "바이욘 사원": {
        photos: ["/images/siem-reap/info/tourSpa/bayon-temple-siem-reap.jpg"],
        summary: "앙코르 톰의 대표적인 얼굴 탑 사원으로 신비로운 분위기를 자아냅니다.",
        updatedAt: "2026-07-21",
        highlights: ["거대한 미소 짓는 얼굴 탑", "신비로운 석상들"],
        tips: ["사원 내부의 복잡한 구조를 천천히 둘러보세요."],
        duration: "1~2시간",
        price: "앙코르 패스 별도",
        access: { area: "캄보디아 시엠레아프", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12202159824396459363", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%9D%B4%EC%9A%98+%EC%82%AC%EC%9B%90+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "타프롬 사원": {
        photos: ["/images/siem-reap/info/tourSpa/ta-prohm-temple-siem-reap.jpg"],
        summary: "거대한 나무뿌리와 고대 유적이 신비롭게 어우러진 사원입니다.",
        updatedAt: "2026-07-21",
        highlights: ["나무뿌리가 건물을 감싸고 있는 독특한 풍경", "영화 촬영지로 유명한 신비로운 분위기"],
        tips: ["이른 아침에 방문하면 인파를 피할 수 있습니다."],
        duration: "1~2시간",
        price: "앙코르 패스 별도",
        access: { area: "캄보디아 시엠레아프", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14968071382244656414", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%ED%94%84%EB%A1%AC+%EC%82%AC%EC%9B%90+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "앙코르 톰": {
        photos: ["/images/siem-reap/info/tourSpa/angkor-thom-siem-reap.jpg"],
        summary: "바이욘 사원과 왕궁터를 포함한 거대한 규모의 유적 구역입니다.",
        updatedAt: "2026-07-21",
        highlights: ["바이욘 사원의 거대한 얼굴 조각상", "웅장한 성벽과 대규모 유적지"],
        tips: ["구역이 매우 넓으므로 편한 신발을 착용하세요."],
        duration: "2~4시간",
        price: "앙코르 패스 별도",
        access: { area: "캄보디아 시엠레아프 9W65+CVH", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "공식 사이트", url: "https://www.angkorprotravel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2769904275217131448", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%99%EC%BD%94%EB%A5%B4+%ED%86%B0+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "반띠아이 스레이": {
        photos: ["/images/siem-reap/info/tourSpa/banteay-srei-siem-reap.jpg"],
        summary: "정교한 붉은 사암 조각이 특징인 앙코르 유적지의 보석 같은 사원입니다.",
        updatedAt: "2026-07-21",
        highlights: ["섬세하고 아름다운 부조 조각", "붉은 사암의 독특한 색감"],
        tips: ["사원이 작으므로 이른 아침에 방문하는 것을 추천합니다."],
        duration: "반나절",
        price: "앙코르 패스 별도",
        access: { area: "Angkor Archaeological Park, Siem Reap 17000 캄보디아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "공식 사이트", url: "https://justsiemreap.com/temple-guide/banteay-srei/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13906316661129623352", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%EB%9D%A0%EC%95%84%EC%9D%B4+%EC%8A%A4%EB%A0%88%EC%9D%B4+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "프놈 쿨렌 국립공원": {
        photos: ["/images/siem-reap/info/tourSpa/phnom-kulen-national-park-siem-reap.jpg"],
        summary: "폭포와 산악 사원이 어우러진 자연 친화적인 당일치기 여행지입니다.",
        updatedAt: "2026-07-21",
        highlights: ["시원한 폭포수", "신비로운 산악 사원"],
        tips: ["활동적인 코스가 많으니 편안한 신발을 착용하세요."],
        duration: "반나절~1일",
        price: "입장권·차량 별도",
        access: { area: "8 ផ្លូវលេខ ៣១៥, រាជធានី​ភ្នំពេញ, 캄보디아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8674637995276633636", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EB%86%88+%EC%BF%A8%EB%A0%8C+%EA%B5%AD%EB%A6%BD%EA%B3%B5%EC%9B%90+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "캄퐁 플럭 수상마을": {
        photos: ["/images/siem-reap/info/tourSpa/kampong-phluk-floating-village-siem-reap.jpg"],
        summary: "톤레삽 호수의 아름다운 풍경을 보트 투어로 즐길 수 있는 수상 마을입니다.",
        updatedAt: "2026-07-21",
        highlights: ["톤레삽 호수 보트 투어", "수상 가옥 관람"],
        tips: ["물때를 미리 확인하고 방문하는 것이 좋습니다."],
        duration: "3~5시간",
        price: "투어별 상이",
        access: { area: "812, 캄보디아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6276834864473400364", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BA%84%ED%90%81+%ED%94%8C%EB%9F%AD+%EC%88%98%EC%83%81%EB%A7%88%EC%9D%84+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "파레 캄보디아 서커스": {
        photos: ["/images/siem-reap/info/tourSpa/phare-the-cambodian-circus-siem-reap.jpg"],
        summary: "캄보디아의 현대적인 예술 감각을 느낄 수 있는 역동적인 서커스 공연입니다.",
        updatedAt: "2026-07-21",
        highlights: ["현대적 서커스 퍼포먼스", "다양한 공연 예술 쇼"],
        tips: ["인기가 많으므로 사전에 예약하는 것을 추천합니다."],
        duration: "1~2시간",
        price: "좌석별 상이",
        access: { area: "Ring Road, south of the, Intersection, Sok San Rd, Krong Siem Reap, 캄보디아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "공식 사이트", url: "https://pharecircus.org/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7653447697038874034", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%EB%A0%88+%EC%BA%84%EB%B3%B4%EB%94%94%EC%95%84+%EC%84%9C%EC%BB%A4%EC%8A%A4+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "아포포 방문자 센터": {
        photos: ["/images/siem-reap/info/tourSpa/apopo-visitor-center-siem-reap.jpg"],
        summary: "지뢰 탐지 영웅쥐 프로젝트를 통해 인상적인 교육 경험을 제공하는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["지뢰 탐지 영웅쥐 관찰", "교육형 전시 프로그램"],
        tips: ["사전 예약 여부를 확인하고 방문하세요."],
        duration: "1시간",
        price: "입장권 별도",
        access: { area: "캄보디아 17253 Krong Siem Reap, Koumai Road Siem Reap", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "공식 사이트", url: "https://apopo.org/support-us/apopo-visitor-center/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4493283565436588574", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%ED%8F%AC%ED%8F%AC+%EB%B0%A9%EB%AC%B8%EC%9E%90+%EC%84%BC%ED%84%B0+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "앙코르 국립박물관": {
        photos: ["/images/siem-reap/info/tourSpa/angkor-national-museum-siem-reap.jpg"],
        summary: "앙코르 유적지의 역사와 문화를 깊이 있게 이해할 수 있는 박물관입니다.",
        updatedAt: "2026-07-21",
        highlights: ["앙코르 시대 유물 관람", "유적지 관람 전 필수 코스"],
        tips: ["유적지 투어 전에 방문하여 배경 지식을 쌓는 것을 추천합니다."],
        duration: "1~2시간",
        price: "입장권 별도",
        access: { area: "968 Vithei Preah Sihanouk Ave, Krong Siem Reap, 캄보디아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "공식 사이트", url: "http://www.angkornationalmuseum.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11476865357577564131", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%99%EC%BD%94%EB%A5%B4+%EA%B5%AD%EB%A6%BD%EB%B0%95%EB%AC%BC%EA%B4%80+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "보디아 스파 씨엠립": {
        photos: ["/images/siem-reap/info/tourSpa/bodia-spa-siem-reap.jpg"],
        summary: "여행자 후기가 매우 많은 씨엠립의 대표적인 스파입니다.",
        updatedAt: "2026-07-21",
        highlights: ["높은 고객 만족도", "씨엠립 대표 스파"],
        tips: ["올드 마켓 맞은편에 위치해 있어 찾기 쉽습니다."],
        duration: "60~120분",
        price: "코스별 상이",
        access: { area: "Opposite of Old Market, Street 9, corner of, Street 11, Krong Siem Reap 171209 캄보디아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "공식 사이트", url: "https://bodia-spa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6620732490395523735", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%EB%94%94%EC%95%84+%EC%8A%A4%ED%8C%8C+%EC%94%A8%EC%97%A0%EB%A6%BD+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "레몬그라스 가든 스파": {
        photos: ["/images/siem-reap/info/tourSpa/lemongrass-garden-spa-siem-reap.jpg"],
        summary: "시내 중심가에서 접근성이 매우 뛰어난 마사지 및 스파 시설입니다.",
        updatedAt: "2026-07-21",
        highlights: ["우수한 접근성", "쾌적한 스파 환경"],
        tips: ["시내 관광 중 방문하기 좋습니다."],
        duration: "60~120분",
        price: "코스별 상이",
        access: { area: "105B Sivutha Blvd, Krong Siem Reap, 캄보디아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "공식 사이트", url: "http://www.lemongrassgarden.com/siem-reap-spa", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1844560715964355560", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%88%EB%AA%AC%EA%B7%B8%EB%9D%BC%EC%8A%A4+%EA%B0%80%EB%93%A0+%EC%8A%A4%ED%8C%8C+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "크메르 릴리프 스파": {
        photos: ["/images/siem-reap/info/tourSpa/khmer-relief-spa-siem-reap.jpg"],
        summary: "피로 회복을 위한 마사지 서비스로 유명한 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["효과적인 피로 회복 마사지", "높은 고객 만족도"],
        tips: ["마사지 전후 컨디션 조절에 좋습니다."],
        duration: "60~120분",
        price: "코스별 상이",
        access: { area: "캄보디아 시엠레아프 9V43+MF8", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4931056295562334873", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A9%94%EB%A5%B4+%EB%A6%B4%EB%A6%AC%ED%94%84+%EC%8A%A4%ED%8C%8C+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "속칵 스파 리버사이드": {
        photos: ["/images/siem-reap/info/tourSpa/sokkhak-spa-river-side-siem-reap.jpg"],
        summary: "리버사이드 동선에 최적화된 프리미엄 스파입니다.",
        updatedAt: "2026-07-21",
        highlights: ["강변 근처의 편리한 위치", "고급스러운 스파 경험"],
        tips: ["리버사이드 산책 후 방문하기 좋습니다."],
        duration: "60~120분",
        price: "코스별 상이",
        access: { area: "Mondul 1 Village, Svay Dangkum Commune, Pokambor Ave, Krong Siem Reap ភូមិមណ្ឌល ១, សង្កាត់ស្វាយដង្គំ, រុក្ខវិថីពោធិកំបោរ, ក្រុងសៀមរាប, Cambodia 17252 캄보디아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "공식 사이트", url: "https://sokkhakspa-riverside.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17513440621905062257", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%8D%EC%B9%B5+%EC%8A%A4%ED%8C%8C+%EB%A6%AC%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "프랑지파니 스파": {
        photos: ["/images/siem-reap/info/tourSpa/frangipani-spa-siem-reap.jpg"],
        summary: "커플이나 휴식을 원하는 여행객에게 추천하는 씨엠립의 스파입니다.",
        updatedAt: "2026-07-21",
        highlights: ["커플 및 휴식 일정에 최적화된 서비스", "높은 고객 만족도(4.8점)"],
        tips: ["여유로운 일정을 위해 미리 예약하는 것을 권장합니다"],
        duration: "60~120분",
        price: "코스별 상이",
        access: { area: "24 Hap Guan St, Krong Siem Reap, 캄보디아", note: "Google Place Details place_id 기반 좌표" },
        links: [
            { label: "공식 사이트", url: "http://www.frangipanisiemreap.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8850492925453142728", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EB%9E%91%EC%A7%80%ED%8C%8C%EB%8B%88+%EC%8A%A4%ED%8C%8C+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "펍 스트리트": {
        photos: ["/images/siem-reap/info/tourSpa/pub-street-siem-reap.jpg"],
        summary: "다양한 먹거리와 즐길 거리가 가득한 씨엠립 최고의 밤문화 명소",
        updatedAt: "2026-07-23",
        highlights: ["활기 넘치는 거리 분위기", "다채로운 맛집과 바"],
        tips: ["밤 시간대에 방문하면 더욱 화려한 야경을 즐길 수 있습니다"],
        duration: "1~2시간",
        price: "무료~개별 소비",
        access: { area: "Street 08, Krong Siem Reap, 캄보디아", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "저녁~밤",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=Street%2008&query_place_id=ChIJ9Vw0ZWUXEDER6lQnAxPmNIs", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%8D%20%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8%20%EC%94%A8%EC%97%A0%EB%A6%BD%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "프레 룹": {
        photos: ["/images/siem-reap/info/tourSpa/pre-rup-temple.jpg"],
        summary: "앙코르 유적지의 정취를 느낄 수 있는 프레 룹 사원",
        updatedAt: "2026-07-23",
        highlights: ["환상적인 일출 및 일몰 명소", "고대 힌두교 사원의 신비로운 분위기"],
        tips: ["일출이나 일몰 시간대에 맞춰 방문하기", "앙코르 패스 별도 구매 필요"],
        duration: "45~90분",
        price: "앙코르 패스 별도",
        access: { area: "CWMC+X6F Angkor Archaeological Park, ក្រុងសៀមរាប 17000 캄보디아", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "오전 또는 오후 일몰 시간대",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=%ED%94%84%EB%A0%88%20%EB%A3%B9&query_place_id=ChIJG5DHtQY-EDERCd_FEDL3ir8", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EB%A0%88%20%EB%A3%B9%20%EC%94%A8%EC%97%A0%EB%A6%BD%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "프놈 바켕": {
        photos: ["/images/siem-reap/info/tourSpa/phnom-bakheng.jpg"],
        summary: "앙코르 유적지의 환상적인 저녁 노을을 만끽하는 명소",
        updatedAt: "2026-07-23",
        highlights: ["언덕 위에서 내려다보는 탁 트인 전망", "낭만적인 일몰 포인트"],
        tips: ["일몰 시간에 맞춰 방문하기", "앙코르 패스 사전 준비 필수"],
        duration: "1~2시간",
        price: "앙코르 패스 별도",
        access: { area: "CVF4+GCW Angkor Archaeological Park, ក្រុងសៀមរាប 17000 캄보디아", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "저녁",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=%ED%94%84%EB%86%88%20%EB%B0%94%EA%BB%AD%20%EC%82%AC%EC%9B%90&query_place_id=ChIJy7ghs5oWEDERVEH3b4fDIUk", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EB%86%88%20%EB%B0%94%EC%BC%95%20%EC%94%A8%EC%97%A0%EB%A6%BD%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
