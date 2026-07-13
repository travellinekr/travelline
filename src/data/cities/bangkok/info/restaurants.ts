import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "제이파이": {
        photos: ["/images/bangkok/info/restaurants/jay-fai-bangkok.jpg"],
        summary: "미쉐린 가이드가 인정한 방콕 최고의 크랩 오믈렛 맛집",
        updatedAt: "2026-07-13",
        highlights: ["입안 가득 퍼지는 통통한 게살", "예약 필수 인생 맛집"],
        tips: ["예약이 매우 어려우니 여행 전 미리 확인하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "크랩 오믈렛", items: [{ name: "대표 메뉴", price: "฿500~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/jayfaibangkok", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15540702247320146498", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%9C%EC%9D%B4%ED%8C%8C%EC%9D%B4+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "팁싸마이 팟타이": {
        photos: ["/images/bangkok/info/restaurants/thipsamai-pad-thai-bangkok.jpg"],
        summary: "방콕에서 가장 유명한 전통 팟타이 전문점",
        updatedAt: "2026-07-13",
        highlights: ["오렌지 주스와의 환상적인 조합", "쫄깃하고 감칠맛 나는 팟타이"],
        tips: ["웨이팅이 길 수 있으니 식사 시간을 살짝 피해서 방문하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "팟타이", items: [{ name: "대표 메뉴", price: "฿100~500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오전 12:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7605461113463140286", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%81%EC%8B%B8%EB%A7%88%EC%9D%B4+%ED%8C%9F%ED%83%80%EC%9D%B4+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "와타나 파닛": {
        photos: ["/images/bangkok/info/restaurants/wattana-panich-ekkamai-bangkok.jpg"],
        summary: "수십 년 전통의 깊은 맛을 자랑하는 소고기 국수 노포",
        updatedAt: "2026-07-13",
        highlights: ["진한 육수가 일품인 소고기 국수", "가성비 최고의 현지 맛집"],
        tips: ["국물이 진해서 밥을 함께 주문해 말아 먹는 것을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "소고기 국수", items: [{ name: "대표 메뉴", price: "฿100~400", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 7:00; 화요일: 오전 9:00 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/WattanapanitSeriMarketThenine?mibextid=LQQJ4d", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15909431373479206", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%80%ED%83%80%EB%82%98+%ED%8C%8C%EB%8B%9B+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "히어 하이": {
        photos: ["/images/bangkok/info/restaurants/here-hai-bangkok.jpg"],
        summary: "게살이 듬뿍 들어간 프리미엄 크랩 볶음밥 맛집",
        updatedAt: "2026-07-13",
        highlights: ["입안 가득 퍼지는 진한 게살의 풍미", "탱글탱글한 식감이 일품인 크랩 볶음밥"],
        tips: ["웨이팅이 길 수 있으니 오픈 시간에 맞춰 방문 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "크랩 볶음밥", items: [{ name: "대표 메뉴", price: "฿200~900", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 10:00 ~ 오후 3:00, 오후 4:00~5:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.facebook.com/herehaifoods", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2748471789301096848", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9E%88%EC%96%B4+%ED%95%98%EC%9D%B4+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "피어 오르 똠얌꿍": {
        photos: ["/images/bangkok/info/restaurants/pe-aor-tom-yum-goong-bangkok.jpg"],
        summary: "진하고 새콤달콤한 국물이 매력적인 똠얌꿍 누들 전문점",
        updatedAt: "2026-07-13",
        highlights: ["중독성 강한 태국 현지의 맛", "신선한 해산물이 가득 들어간 국수"],
        tips: ["현지인들에게도 인기 있는 로컬 맛집 분위기"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "똠얌꿍 누들", items: [{ name: "대표 메뉴", price: "฿100~500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/219511371433546/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3835017274798473772", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EC%96%B4+%EC%98%A4%EB%A5%B4+%EB%98%A0%EC%96%8C%EA%BF%8D+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "쩨오쭐라": {
        photos: ["/images/bangkok/info/restaurants/jeh-o-chula-bangkok.jpg"],
        summary: "밤늦게 즐기는 화끈한 마마 똠얌의 정석",
        updatedAt: "2026-07-13",
        highlights: ["밤샘 먹방 필수 코스인 마마 똠얌", "자극적이고 중독적인 매콤새콤한 맛"],
        tips: ["대기 시간이 매우 길 수 있으니 시간 조절 필수"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "마마 똠얌", items: [{ name: "대표 메뉴", price: "฿100~600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00 ~ 오전 12:00; 화요일: 오후 4:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/RanCeXow/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15238757142073429372", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A9%A8%EC%98%A4%EC%AD%90%EB%9D%BC+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "고앙 카오만가이 프라투남": {
        photos: ["/images/bangkok/info/restaurants/go-ang-pratunam-chicken-rice-bangkok.jpg"],
        summary: "Go-Ang Pratunam Chicken Rice (Chinatown) 기준으로 확인한 방콕 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["카오만가이", "평점 4.6", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "카오만가이", items: [{ name: "대표 메뉴", price: "฿80~300", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 7:00; 화요일: 오전 9:00 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/GoAngPratunamChickenRice", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14011327498890124589", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A0%EC%95%99+%EC%B9%B4%EC%98%A4%EB%A7%8C%EA%B0%80%EC%9D%B4+%ED%94%84%EB%9D%BC%ED%88%AC%EB%82%A8+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "쏨땀더 살라댕": {
        photos: ["/images/bangkok/info/restaurants/somtum-der-sala-daeng-bangkok.jpg"],
        summary: "Somtum Der 기준으로 확인한 방콕 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쏨땀", "평점 4.4", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "쏨땀", items: [{ name: "대표 메뉴", price: "฿150~600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.somtumder.com/home.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8885475404359674723", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8F%A8%EB%95%80%EB%8D%94+%EC%82%B4%EB%9D%BC%EB%8C%95+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크루아 압손": {
        photos: ["/images/bangkok/info/restaurants/krua-apsorn-bangkok.jpg"],
        summary: "크루아압쏜 빠뚜피점 기준으로 확인한 방콕 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["게살 오믈렛", "평점 4.9", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "게살 오믈렛", items: [{ name: "대표 메뉴", price: "฿200~800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=100077371885500", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10243525738309895925", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A3%A8%EC%95%84+%EC%95%95%EC%86%90+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반 아이스": {
        photos: ["/images/bangkok/info/restaurants/baan-ice-bangkok.jpg"],
        summary: "시암 파라곤에서 즐기는 진한 풍미의 남부식 커리 전문점",
        updatedAt: "2026-07-13",
        highlights: ["깊은 맛이 일품인 남부식 커리", "쇼핑몰 내 위치해 쾌적하고 편리한 접근성"],
        tips: ["시원한 에어컨 아래서 깔끔하게 식사하기 좋음"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "남부식 커리", items: [{ name: "대표 메뉴", price: "฿200~800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.baanice.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16683070918823210731", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98+%EC%95%84%EC%9D%B4%EC%8A%A4+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반 쏨땀 사톤": {
        photos: ["/images/bangkok/info/restaurants/baan-somtum-sathorn-bangkok.jpg"],
        summary: "정통 쏨땀과 맛있는 구이 요리를 만날 수 있는 사톤 로컬 맛집",
        updatedAt: "2026-07-13",
        highlights: ["매콤새콤한 정통 쏨땀", "불향 가득한 다양한 구이 메뉴"],
        tips: ["현지 분위기를 제대로 느끼고 싶을 때 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "쏨땀·구이", items: [{ name: "대표 메뉴", price: "฿150~600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.baansomtum.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9380492308857186144", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98+%EC%8F%A8%EB%95%80+%EC%82%AC%ED%86%A4+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "롱롯": {
        photos: ["/images/bangkok/info/restaurants/rongros-bangkok.jpg"],
        summary: "왓아룬의 환상적인 전망을 바라보며 식사하는 뷰 맛집",
        updatedAt: "2026-07-13",
        highlights: ["낭만적인 왓아룬 파노라마 뷰", "분위기 있는 다이닝 경험"],
        tips: ["창가 자리는 예약 필수"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "왓아룬 뷰 다이닝", items: [{ name: "대표 메뉴", price: "฿500~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 12:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://linktr.ee/RONGROS_bkk", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2272362899657774987", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%B1%EB%A1%AF+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "블루 엘리펀트 방콕": {
        photos: ["/images/bangkok/info/restaurants/blue-elephant-bangkok.jpg"],
        summary: "품격 있는 로열 타이 퀴진을 경험할 수 있는 고급 레스토랑입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로열 타이 전통 요리", "고급스러운 분위기"],
        tips: ["특별한 날 기념일 식사 장소로 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로열 타이 퀴진", items: [{ name: "대표 메뉴", price: "฿1,000~3,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:00; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.blueelephant.com/bangkok", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=949756389916567207", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%94%EB%A3%A8+%EC%97%98%EB%A6%AC%ED%8E%80%ED%8A%B8+%EB%B0%A9%EC%BD%95+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "Err 어반 러스틱 타이": {
        photos: ["/images/bangkok/info/restaurants/err-urban-rustic-thai-bangkok.jpg"],
        summary: "캐주얼하고 힙한 분위기에서 즐기는 트렌디한 타이 다이닝입니다.",
        updatedAt: "2026-07-13",
        highlights: ["캐주얼한 타이 다이닝", "세련된 인테리어"],
        tips: ["친구들과 가볍게 맥주 한잔하며 식사하기 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "캐주얼 타이 다이닝", items: [{ name: "대표 메뉴", price: "฿300~1,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.errurbanrusticthai.co.th/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1754520333557128237", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Err+%EC%96%B4%EB%B0%98+%EB%9F%AC%EC%8A%A4%ED%8B%B1+%ED%83%80%EC%9D%B4+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반 카니타 수쿰윗": {
        photos: ["/images/bangkok/info/restaurants/baan-khanitha-sukhumvit-bangkok.jpg"],
        summary: "정통 태국 요리의 진수를 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-07-13",
        highlights: ["정통 태국 레시피", "깊은 풍미의 요리"],
        tips: ["수쿰윗 지역에서 정갈한 한 끼를 원할 때 방문하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "정통 태국 요리", items: [{ name: "대표 메뉴", price: "฿500~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15666248285595116759", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98+%EC%B9%B4%EB%8B%88%ED%83%80+%EC%88%98%EC%BF%B0%EC%9C%97+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "수파니가 이팅룸 통로": {
        photos: ["/images/bangkok/info/restaurants/supanniga-eating-room-thonglor-bangkok.jpg"],
        summary: "통로에서 즐기는 품격 있는 태국 가정식 맛집",
        updatedAt: "2026-07-13",
        highlights: ["정갈한 태국 전통 레시피", "세련되고 고급스러운 다이닝 분위기"],
        tips: ["분위기가 좋아 데이트나 가족 식사 장소로 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "태국 가정식", items: [{ name: "대표 메뉴", price: "฿300~1,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.supannigaeatingroom.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10423637570020447035", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%98%ED%8C%8C%EB%8B%88%EA%B0%80+%EC%9D%B4%ED%8C%85%EB%A3%B8+%ED%86%B5%EB%A1%9C+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "나이몽 허이텃": {
        photos: ["/images/bangkok/info/restaurants/nai-mong-hoi-thod-bangkok.jpg"],
        summary: "겉바속촉의 정석, 인생 굴전을 만날 수 있는 곳",
        updatedAt: "2026-07-13",
        highlights: ["바삭한 식감이 일품인 태국식 굴전", "신선하고 통통한 굴의 풍미"],
        tips: ["웨이팅이 있을 수 있으니 피크 타임을 피해 방문하세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "굴전", items: [{ name: "대표 메뉴", price: "฿100~400", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/hoithod539/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12802750900942145822", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EC%9D%B4%EB%AA%BD+%ED%97%88%EC%9D%B4%ED%85%83+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "애프터 유 시암파라곤": {
        photos: ["/images/bangkok/info/restaurants/after-you-dessert-cafe-siam-paragon-bangkok.jpg"],
        summary: "방콕 쇼핑 필수 코스, 달콤한 디저트의 성지",
        updatedAt: "2026-07-13",
        highlights: ["입안에서 녹는 부드러운 허니 토스트", "더위를 날려줄 시원하고 달콤한 빙수"],
        tips: ["쇼핑 중 당 충전이 필요할 때 들르기 딱 좋은 곳"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "허니 토스트·빙수", items: [{ name: "대표 메뉴", price: "฿150~500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18316853966416162195", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%A0%ED%94%84%ED%84%B0+%EC%9C%A0+%EC%8B%9C%EC%95%94%ED%8C%8C%EB%9D%BC%EA%B3%A4+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "깝카오깝쁠라 센트럴월드": {
        photos: ["/images/bangkok/info/restaurants/kub-kao-kub-pla-centralworld-bangkok.jpg"],
        summary: "깝카우 깝쁠라 기준으로 확인한 방콕 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["캐주얼 태국 요리", "평점 4", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "캐주얼 태국 요리", items: [{ name: "대표 메뉴", price: "฿200~800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.kubkao-kubpla.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16220374374330417423", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B9%9D%EC%B9%B4%EC%98%A4%EA%B9%9D%EC%81%A0%EB%9D%BC+%EC%84%BC%ED%8A%B8%EB%9F%B4%EC%9B%94%EB%93%9C+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사보이 씨푸드 수쿰윗": {
        photos: ["/images/bangkok/info/restaurants/savoey-seafood-sukhumvit-bangkok.jpg"],
        summary: "Savoey @Terminal 21 Asok 기준으로 확인한 방콕 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해산물 요리", "평점 4.6", "방콕 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "฿500~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.savoey.co.th/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15332943008039788478", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EB%B3%B4%EC%9D%B4+%EC%94%A8%ED%91%B8%EB%93%9C+%EC%88%98%EC%BF%B0%EC%9C%97+%EB%B0%A9%EC%BD%95+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
