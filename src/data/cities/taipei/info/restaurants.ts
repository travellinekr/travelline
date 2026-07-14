import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "딘타이펑 신이 본점": {
        photos: ["/images/taipei/info/restaurants/din-tai-fung-xinyi-taipei.jpg"],
        summary: "샤오롱바오와 볶음밥의 정석, 대만 여행 필수 코스",
        updatedAt: "2026-07-13",
        highlights: ["육즙 가득한 샤오롱바오", "고소한 계란 볶음밥"],
        tips: ["웨이팅이 길 수 있으니 앱으로 대기 현황을 미리 확인하세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "샤오롱바오·볶음밥", items: [{ name: "대표 메뉴", price: "NT$400~1,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 8:30; 화요일: 오전 11:00 ~ 오후 8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.dintaifung.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6292126131638321145", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%98%ED%83%80%EC%9D%B4%ED%8E%91+%EC%8B%A0%EC%9D%B4+%EB%B3%B8%EC%A0%90+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "융캉우육면": {
        photos: ["/images/taipei/info/restaurants/yong-kang-beef-noodles-taipei.jpg"],
        summary: "진하고 깊은 국물 맛이 일품인 홍샤오 우육면 전문점",
        updatedAt: "2026-07-13",
        highlights: ["깊은 풍미의 홍샤오 국물", "부드러운 소고기"],
        tips: ["현지 로컬 분위기를 느끼며 가볍게 즐기기 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "홍샤오 우육면", items: [{ name: "대표 메뉴", price: "NT$250~500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 8:30; 화요일: 오전 11:00 ~ 오후 8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=100063524573126&mibextid=LQQJ4d", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2093328631498160184", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%B5%EC%BA%89%EC%9A%B0%EC%9C%A1%EB%A9%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아종면선": {
        photos: ["/images/taipei/info/restaurants/ay-chung-flour-rice-noodle-taipei.jpg"],
        summary: "시먼딩에서 꼭 먹어야 할 중독성 강한 곱창 국수",
        updatedAt: "2026-07-13",
        highlights: ["쫄깃한 면발과 고소한 곱창", "가성비 최고의 길거리 음식"],
        tips: ["서서 먹는 곳이니 물티슈를 챙겨가면 편리해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "곱창면선", items: [{ name: "대표 메뉴", price: "NT$80~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 10:30; 화요일: 오전 7:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://aychungflourricenoodle.shop/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12798177317606213357", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%A2%85%EB%A9%B4%EC%84%A0+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "푸항또우장": {
        photos: ["/images/taipei/info/restaurants/fu-hang-soy-milk-taipei.jpg"],
        summary: "대만식 아침 식사의 정석, 따뜻한 또우장과 바삭한 샤오빙의 환상적인 조합.",
        updatedAt: "2026-07-13",
        highlights: ["고소하고 부드러운 따뜻한 또우장", "겉바속촉 식감이 일품인 샤오빙"],
        tips: ["웨이팅이 매우 길 수 있으니 오픈런을 강력 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "또우장·샤오빙", items: [{ name: "대표 메뉴", price: "NT$80~200", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 5:30 ~ 오후 12:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/pages/%E8%8F%AF%E5%B1%B1%E5%B8%82%E5%A0%B4-%E9%98%9C%E6%9D%AD%E8%B1%86%E6%BC%BF/154088941341874", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11496230489420672286", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%ED%95%AD%EB%98%90%EC%9A%B0%EC%9E%A5+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "린동팡 우육면": {
        photos: ["/images/taipei/info/restaurants/lin-dong-fang-beef-noodles-taipei.jpg"],
        summary: "깊고 진한 국물 맛이 일품인 현지인들이 사랑하는 로컬 우육면 맛집.",
        updatedAt: "2026-07-13",
        highlights: ["묵직하고 깊은 풍미의 소고기 육수", "입안에서 부드럽게 씹히는 고기 고명"],
        tips: ["국물이 진해 한국인 입맛에도 잘 맞는 편"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "진한 소고기 국물면", items: [{ name: "대표 메뉴", price: "NT$250~500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 3:00; 화요일: 오전 11:00 ~ 오전 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7323288501267334366", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%B0%EB%8F%99%ED%8C%A1+%EC%9A%B0%EC%9C%A1%EB%A9%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "진펑 루러우판": {
        photos: ["/images/taipei/info/restaurants/jin-feng-braised-pork-rice-taipei.jpg"],
        summary: "달콤 짭짤한 돼지고기 덮밥의 정석을 맛볼 수 있는 곳.",
        updatedAt: "2026-07-13",
        highlights: ["입안에서 녹는 듯한 부드러운 루러우판", "중독성 강한 간장 베이스의 소스"],
        tips: ["계란 후라이를 추가해서 먹으면 훨씬 풍미가 좋음"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "루러우판", items: [{ name: "대표 메뉴", price: "NT$80~250", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://jinfengbraisedporkrice.shop/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15694935650441423724", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%84%ED%8E%91+%EB%A3%A8%EB%9F%AC%EC%9A%B0%ED%8C%90+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "텐텐리": {
        photos: ["/images/taipei/info/restaurants/tian-tian-li-ximending-taipei.jpg"],
        summary: "天天利美食坊 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["루러우판·굴전", "평점 4.1", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "루러우판·굴전", items: [{ name: "대표 메뉴", price: "NT$100~300", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5597686872059367178", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%90%ED%85%90%EB%A6%AC+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "류산둥 우육면": {
        photos: ["/images/taipei/info/restaurants/liu-shandong-beef-noodles-taipei.jpg"],
        summary: "劉山東小吃店 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["두툼한 우육면", "평점 4", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "두툼한 우육면", items: [{ name: "대표 메뉴", price: "NT$200~450", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 6:00; 화요일: 오전 8:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/114637975312065/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1174056091795400445", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A5%98%EC%82%B0%EB%91%A5+%EC%9A%B0%EC%9C%A1%EB%A9%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "상인수산": {
        photos: ["/images/taipei/info/restaurants/addiction-aquatic-development-taipei.jpg"],
        summary: "상인수산(해산물요리) 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스시·해산물 마켓", "평점 4", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스시·해산물 마켓", items: [{ name: "대표 메뉴", price: "NT$500~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 10:30; 화요일: 오전 7:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.addiction.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7364862798033183003", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%81%EC%9D%B8%EC%88%98%EC%82%B0+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "RAW 타이베이": {
        photos: ["/images/taipei/info/restaurants/raw-taipei.jpg"],
        summary: "대만 식재료를 현대적으로 재해석한 미슐랭 스타 파인 다이닝",
        updatedAt: "2026-07-13",
        highlights: ["대만 로컬 식재료의 화려한 변신", "예술적인 플레이팅과 독창적인 코스"],
        tips: ["최소 몇 달 전 예약 필수"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대만 식재료 파인 다이닝", items: [{ name: "대표 메뉴", price: "NT$3,000~8,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.raw.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4019288039047906847", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=RAW+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "무메": {
        photos: ["/images/taipei/info/restaurants/mume-taipei.jpg"],
        summary: "대만 제철 재료를 활용한 세련된 컨템포러리 코스 요리",
        updatedAt: "2026-07-13",
        highlights: ["신선한 로컬 식재료 기반의 메뉴", "모던하고 감각적인 인테리어"],
        tips: ["분위기 좋은 데이트나 기념일 장소로 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대만 재료 기반 코스", items: [{ name: "대표 메뉴", price: "NT$2,500~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:30~11:00; 화요일: 오후 5:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.mume.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3458791050005111054", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AC%B4%EB%A9%94+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "제임스 키친": {
        photos: ["/images/taipei/info/restaurants/james-kitchen-taipei.jpg"],
        summary: "대만식 반찬과 신선한 해산물을 즐길 수 있는 캐주얼 다이닝",
        updatedAt: "2026-07-13",
        highlights: ["정성 가득한 대만식 가정식 스타일", "신선함이 살아있는 해산물 요리"],
        tips: ["부담 없이 현지 맛을 느끼기 좋은 곳"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대만식 반찬·해산물", items: [{ name: "대표 메뉴", price: "NT$500~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~11:30; 화요일: 오후 5:00~11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://facebook.com/dayin.Izakaya/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7909826708841864866", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%9C%EC%9E%84%EC%8A%A4+%ED%82%A4%EC%B9%9C+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "두샤오웨 단자이몐": {
        photos: ["/images/taipei/info/restaurants/du-hsiao-yueh-taipei.jpg"],
        summary: "현지인 느낌 제대로 나는 담백한 단자이몐 맛집",
        updatedAt: "2026-07-13",
        highlights: ["고소함 가득한 단자이몐", "가성비 최고"],
        tips: ["사람 몰리는 시간은 피해서 방문하세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "단자이몐", items: [{ name: "대표 메뉴", price: "NT$200~600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 4:30~9:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 4:30~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.noodle1895.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6861977877329318520", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%91%90%EC%83%A4%EC%98%A4%EC%9B%A8+%EB%8B%A8%EC%9E%90%EC%9D%B4%EB%AA%90+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "항저우 샤오롱바오": {
        photos: ["/images/taipei/info/restaurants/hangzhou-xiao-long-bao-taipei.jpg"],
        summary: "육즙 팡 터지는 샤오롱바오를 즐길 수 있는 곳",
        updatedAt: "2026-07-13",
        highlights: ["탱글탱글한 피와 풍부한 육즙", "깔끔하고 담백한 맛"],
        tips: ["생강 채랑 같이 먹으면 훨씬 맛있어요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "샤오롱바오", items: [{ name: "대표 메뉴", price: "NT$300~800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~9:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9047894646477950333", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%AD%EC%A0%80%EC%9A%B0+%EC%83%A4%EC%98%A4%EB%A1%B1%EB%B0%94%EC%98%A4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카오치 융캉점": {
        photos: ["/images/taipei/info/restaurants/kao-chi-yongkang-taipei.jpg"],
        summary: "입에서 녹는 동파육과 샤오롱바오의 완벽한 조화",
        updatedAt: "2026-07-13",
        highlights: ["야들야들한 식감의 동파육", "정통 대만 요리"],
        tips: ["동파육은 꼭 시켜야 하는 필수 메뉴"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "샤오롱바오·동파육", items: [{ name: "대표 메뉴", price: "NT$400~1,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.kao-chi.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9538800082177619312", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%98%A4%EC%B9%98+%EC%9C%B5%EC%BA%89%EC%A0%90+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스무디 하우스 융캉제": {
        photos: ["/images/taipei/info/restaurants/yongkang-street-smoothie-house-taipei.jpg"],
        summary: "스무시 하우스 본관 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["망고빙수", "평점 3.7", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "망고빙수", items: [{ name: "대표 메뉴", price: "NT$200~400", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:30 ~ 오후 9:00; 화요일: 오전 9:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.smoothiehouse.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4428062545455296663", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EB%AC%B4%EB%94%94+%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%9C%B5%EC%BA%89%EC%A0%9C+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아이스몬스터": {
        photos: ["/images/taipei/info/restaurants/ice-monster-taipei.jpg"],
        summary: "진한 망고 맛과 풍성한 토핑으로 유명한 빙수 전문점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["입안 가득 퍼지는 달콤한 망고의 풍미", "다양한 토핑 조합"],
        tips: ["스무시 하우스와 함께 비교하며 먹어보는 재미가 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "망고빙수", items: [{ name: "대표 메뉴", price: "NT$200~500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~9:00; 화요일: 오후 12:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4984638502095024792", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9D%B4%EC%8A%A4%EB%AA%AC%EC%8A%A4%ED%84%B0+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "춘수당 타이베이": {
        photos: ["/images/taipei/info/restaurants/chun-shui-tang-taipei.jpg"],
        summary: "버블티의 원조를 경험할 수 있는 타이베이 필수 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쫀득한 식감이 일품인 진주밀크티", "클래식한 분위기의 티룸"],
        tips: ["밀크티와 함께 곁들일 간단한 간식 메뉴도 추천합니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "진주밀크티", items: [{ name: "대표 메뉴", price: "NT$150~400", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://chunshuitang.com.tw/location_detail.php?id=19", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18075978662310754842", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B6%98%EC%88%98%EB%8B%B9+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "피카피카 카페": {
        photos: ["/images/taipei/info/restaurants/fika-fika-cafe-taipei.jpg"],
        summary: "정성 가득한 핸드드립 커피를 즐길 수 있는 아늑한 분위기의 카페",
        updatedAt: "2026-07-13",
        highlights: ["깊은 풍미를 느낄 수 있는 핸드드립 커피", "여유로운 휴식이 가능한 차분한 공간"],
        tips: ["조용한 시간을 원한다면 평일 낮 시간대를 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "핸드드립 커피", items: [{ name: "대표 메뉴", price: "NT$150~400", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:30 ~ 오후 9:00; 화요일: 오전 8:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.fikafikacafe.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11386370734412146415", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EC%B9%B4%ED%94%BC%EC%B9%B4+%EC%B9%B4%ED%8E%98+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "란자 과바오": {
        photos: ["/images/taipei/info/restaurants/lan-jia-gua-bao-taipei.jpg"],
        summary: "입안 가득 육즙이 터지는 대만식 돼지고기 버거 맛집",
        updatedAt: "2026-07-13",
        highlights: ["부드러운 빵과 고소한 돼지고기의 환상적인 조화", "현지 느낌을 제대로 느낄 수 있는 과바오"],
        tips: ["인기가 많아 피크 타임에는 웨이팅이 있을 수 있으니 서두르세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대만식 돼지고기 버거 과바오", items: [{ name: "대표 메뉴", price: "NT$80~200", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://instagram.com/lan_jia_gua_bao?utm_medium=copy_link", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10180140947890385693", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%80%EC%9E%90+%EA%B3%BC%EB%B0%94%EC%98%A4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "닝샤 야시장": {
        photos: ["/images/taipei/info/restaurants/ningxia-night-market-taipei.jpg"],
        summary: "다양한 길거리 음식을 한곳에서 알차게 맛볼 수 있는 야시장",
        updatedAt: "2026-07-13",
        highlights: ["갓 튀겨낸 지파이와 고소한 굴전", "입가심하기 좋은 달콤한 디저트까지 완벽한 먹거리"],
        tips: ["규모는 크지 않지만 알짜배기 맛집들이 밀집되어 있어 짧고 굵게 즐기기 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "굴전·지파이·디저트", items: [{ name: "대표 메뉴", price: "NT$100~500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~11:30; 화요일: 오후 5:00~11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11738230280794280116", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%9D%EC%83%A4+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라오허제 야시장": {
        photos: ["/images/taipei/info/restaurants/raohe-night-market-taipei.jpg"],
        summary: "입구부터 맛있는 냄새가 가득한, 후추빵이 필수인 로컬 야시장.",
        updatedAt: "2026-07-13",
        highlights: ["갓 구운 뜨끈한 후추빵", "다양한 길거리 간식"],
        tips: ["입구 쪽 줄 긴 곳은 꼭 먹어보기"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "후추빵·간식", items: [{ name: "대표 메뉴", price: "NT$100~500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00 ~ 오전 12:00; 화요일: 오후 5:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4441131439049537270", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%98%A4%ED%97%88%EC%A0%9C+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스린 야시장": {
        photos: ["/images/taipei/info/restaurants/shilin-night-market-taipei.jpg"],
        summary: "타이베이에서 가장 규모가 크고 활기찬 먹거리 천국.",
        updatedAt: "2026-07-13",
        highlights: ["얼굴만한 사이즈의 지파이", "다양한 테마의 길거리 음식"],
        tips: ["사람이 매우 많으니 소지품 주의하기"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "지파이·간식", items: [{ name: "대표 메뉴", price: "NT$100~500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00 ~ 오전 12:00; 화요일: 오후 4:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16700031033317783849", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EB%A6%B0+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "르 팔레": {
        photos: ["/images/taipei/info/restaurants/le-palais-taipei.jpg"],
        summary: "품격 있는 광둥식 요리와 정갈한 딤섬을 즐길 수 있는 곳.",
        updatedAt: "2026-07-13",
        highlights: ["정성 가득한 광둥식 코스", "고급스러운 딤섬 요리"],
        tips: ["특별한 날 예약 필수"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "딤섬·광둥식 코스", items: [{ name: "대표 메뉴", price: "NT$2,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오후 12:00~2:30, 오후 6:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.palaisdechinehotel.com/p/pdc-tw/pages/lepalais", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10409924790036712938", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A5%B4+%ED%8C%94%EB%A0%88+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "신예 타이완 요리": {
        photos: ["/images/taipei/info/restaurants/shin-yeh-taiwanese-cuisine-taipei.jpg"],
        summary: "대만 정통 가정식을 고급스럽게 즐길 수 있는 곳",
        updatedAt: "2026-07-13",
        highlights: ["정갈한 대만식 요리", "가족 식사에 제격인 분위기"],
        tips: ["예약은 필수, 부모님 모시고 가기 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대만식 가족 식사", items: [{ name: "대표 메뉴", price: "NT$600~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:00, 오후 5:00~9:30; 화요일: 오전 11:30 ~ 오후 3:00, 오후 5:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.shinyeh.com.tw/content/zh/Brand/Index.aspx?BrandId=11", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7951160131974254111", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%EC%98%88+%ED%83%80%EC%9D%B4%EC%99%84+%EC%9A%94%EB%A6%AC+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아청 어러우": {
        photos: ["/images/taipei/info/restaurants/a-cheng-goose-taipei.jpg"],
        summary: "훈제 거위고기의 진수를 맛볼 수 있는 로컬 핫플",
        updatedAt: "2026-07-13",
        highlights: ["입안에서 녹는 거위고기", "현지 느낌 가득한 노포 감성"],
        tips: ["웨이팅 주의, 오픈런을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "훈제 거위고기", items: [{ name: "대표 메뉴", price: "NT$300~900", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 9:30; 화요일: 오전 11:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2370882635228171763", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%B2%AD+%EC%96%B4%EB%9F%AC%EC%9A%B0+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마이 웜 데이": {
        photos: ["/images/taipei/info/restaurants/my-warm-day-taipei.jpg"],
        summary: "여유로운 브런치를 즐기기 좋은 감성 카페",
        updatedAt: "2026-07-13",
        highlights: ["예쁜 비주얼의 브런치 메뉴", "아늑하고 따뜻한 분위기"],
        tips: ["네이후 쪽 나들이 코스로 딱이에요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대만식 브런치", items: [{ name: "대표 메뉴", price: "NT$200~600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 2:00; 화요일: 오전 6:30 ~ 오후 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13841337678085974879", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%9D%B4+%EC%9B%9C+%EB%8D%B0%EC%9D%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "위스타리아 티하우스": {
        photos: ["/images/taipei/info/restaurants/wistaria-tea-house-taipei.jpg"],
        summary: "자등려차관(즈텅루차관) 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["대만차·전통 공간", "평점 4.2", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대만차·전통 공간", items: [{ name: "대표 메뉴", price: "NT$300~800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.wistariateahouse.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5277021442699824452", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%84%EC%8A%A4%ED%83%80%EB%A6%AC%EC%95%84+%ED%8B%B0%ED%95%98%EC%9A%B0%EC%8A%A4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "롱테일": {
        photos: ["/images/taipei/info/restaurants/longtail-taipei.jpg"],
        summary: "Longtail 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["칵테일·퓨전 요리", "평점 4.1", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "칵테일·퓨전 요리", items: [{ name: "대표 메뉴", price: "NT$1,500~4,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://longtail.com.tw/index_ch.php", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4814859082437415695", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%B1%ED%85%8C%EC%9D%BC+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "임프롬프투 바이 폴 리": {
        photos: ["/images/taipei/info/restaurants/impromptu-by-paul-lee-taipei.jpg"],
        summary: "Impromptu by Paul Lee (麗晶精品林森北路出入口下來） 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["테이스팅 코스", "평점 4.1", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "테이스팅 코스", items: [{ name: "대표 메뉴", price: "NT$3,000~7,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오후 6:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10131343573324698219", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%84%ED%94%84%EB%A1%AC%ED%94%84%ED%88%AC+%EB%B0%94%EC%9D%B4+%ED%8F%B4+%EB%A6%AC+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
