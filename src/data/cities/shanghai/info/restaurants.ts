import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "자자탕바오": {
        photos: ["/images/shanghai/info/restaurants/jia-jia-tang-bao-shanghai.jpg"],
        summary: "육즙 가득한 게살 샤오롱바오의 진수를 맛볼 수 있는 곳.",
        updatedAt: "2026-07-14",
        highlights: ["게살이 듬뿍 들어간 샤오롱바오", "현지인들에게도 사랑받는 노포 맛집"],
        tips: ["피크 타임에는 웨이팅이 길 수 있으니 서두르세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "게살 샤오롱바오", items: [{ name: "대표 메뉴", price: "¥50~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 9:30; 화요일: 오전 9:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4297225289912619030", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%90%EC%9E%90%ED%83%95%EB%B0%94%EC%98%A4+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "양스 덤플링": {
        photos: ["/images/shanghai/info/restaurants/yang-s-dumpling-shanghai.jpg"],
        summary: "바삭한 식감이 일품인 상하이 대표 길거리 간식.",
        updatedAt: "2026-07-14",
        highlights: ["겉바속촉의 정석, 상하이식 군만두", "가성비 최고의 로컬 맛집"],
        tips: ["간편하게 즐기기 좋아 테이크아웃을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "상하이식 군만두", items: [{ name: "대표 메뉴", price: "¥30~100", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.xysjg.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13736381603578334961", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%96%91%EC%8A%A4+%EB%8D%A4%ED%94%8C%EB%A7%81+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라오라오": {
        photos: ["/images/shanghai/info/restaurants/lao-lao-shanghai.jpg"],
        summary: "정갈한 맛의 완탕과 다양한 로컬 면 요리를 즐길 수 있는 곳.",
        updatedAt: "2026-07-14",
        highlights: ["깊은 풍미를 자랑하는 완탕", "다양한 종류의 상하이식 면 요리"],
        tips: ["가족 단위 여행객에게도 추천하는 편안한 분위기입니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "완탕·로컬 면요리", items: [{ name: "대표 메뉴", price: "¥50~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15066822357372761270", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%98%A4%EB%9D%BC%EC%98%A4+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "푸 1088": {
        photos: ["/images/shanghai/info/restaurants/fu-1088-shanghai.jpg"],
        summary: "상하이의 정취를 품격 있게 즐기는 파인 다이닝",
        updatedAt: "2026-07-14",
        highlights: ["정갈한 상하이 전통 요리", "고급스러운 분위기"],
        tips: ["중요한 모임이나 기념일 식사로 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "상하이식 파인 다이닝", items: [{ name: "대표 메뉴", price: "¥500~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://blog.remyhouse.com/898/%E6%96%B0%E6%B4%BE%E7%B2%BE%E7%B7%BB%E6%9C%AC%E5%B9%AB%E8%8F%9C-%E7%A6%8F1088/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17793243360830868359", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8+1088+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "로스트 헤븐": {
        photos: ["/images/shanghai/info/restaurants/lost-heaven-shanghai.jpg"],
        summary: "이국적인 풍미가 가득한 윈난 소수민족 요리 전문점",
        updatedAt: "2026-07-14",
        highlights: ["독특한 향신료의 조화", "분위기 있는 인테리어"],
        tips: ["향신료 맛이 강할 수 있으니 참고하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "윈난·소수민족 요리", items: [{ name: "대표 메뉴", price: "¥200~500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~10:00; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8578162423106307581", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EC%8A%A4%ED%8A%B8+%ED%97%A4%EB%B8%90+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "딘타이펑 신천지점": {
        photos: ["/images/shanghai/info/restaurants/din-tai-fung-shanghai-xintiandi.jpg"],
        summary: "육즙 가득한 샤오롱바오를 만날 수 있는 믿고 먹는 맛집",
        updatedAt: "2026-07-14",
        highlights: ["육즙 폭발 샤오롱바오", "신천지 쇼핑 후 들르기 좋은 위치"],
        tips: ["웨이팅이 있을 수 있으니 여유 있게 방문하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "샤오롱바오·볶음밥", items: [{ name: "대표 메뉴", price: "¥100~300", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18266572968449397318", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%98%ED%83%80%EC%9D%B4%ED%8E%91+%EC%8B%A0%EC%B2%9C%EC%A7%80%EC%A0%90+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "바오뤄 레스토랑": {
        photos: ["/images/shanghai/info/restaurants/bao-luo-restaurant-shanghai.jpg"],
        summary: "Baoluo Restaurant 기준으로 확인한 상하이 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["상하이식 로컬 요리", "평점 4", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "상하이식 로컬 요리", items: [{ name: "대표 메뉴", price: "¥100~300", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4292747493553626476", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%98%A4%EB%A4%84+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "제시 레스토랑": {
        photos: ["/images/shanghai/info/restaurants/jesse-restaurant-tianping-road-shanghai.jpg"],
        summary: "Jesse Restaurant 기준으로 확인한 상하이 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["홍사오러우·게요리", "평점 3.6", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "홍사오러우·게요리", items: [{ name: "대표 메뉴", price: "¥150~400", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18136352809623746482", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%9C%EC%8B%9C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "신다루 차이나 키친": {
        photos: ["/images/shanghai/info/restaurants/xindalu-china-kitchen-shanghai.jpg"],
        summary: "Xindalu China Kitchen 기준으로 확인한 상하이 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["베이징덕·중식 코스", "평점 4.2", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베이징덕·중식 코스", items: [{ name: "대표 메뉴", price: "¥300~800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:30, 오후 5:00~10:00; 화요일: 오전 11:00 ~ 오후 2:30, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11213459422129515615", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%EB%8B%A4%EB%A3%A8+%EC%B0%A8%EC%9D%B4%EB%82%98+%ED%82%A4%EC%B9%9C+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "울트라바이올렛": {
        photos: ["/images/shanghai/info/restaurants/ultraviolet-by-paul-pairet-shanghai.jpg"],
        summary: "ULTRAVIOLET BY PAUL PAIRET 기준으로 확인한 상하이 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["멀티센서리 코스", "평점 4.6", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "멀티센서리 코스", items: [{ name: "대표 메뉴", price: "¥4,000~8,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12163261137018591439", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B8%ED%8A%B8%EB%9D%BC%EB%B0%94%EC%9D%B4%EC%98%AC%EB%A0%9B+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "메르카토": {
        photos: ["/images/shanghai/info/restaurants/mercato-shanghai.jpg"],
        summary: "Mercato 기준으로 확인한 상하이 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["피자·파스타·와이탄 전망", "평점 4.6", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "피자·파스타·와이탄 전망", items: [{ name: "대표 메뉴", price: "¥250~600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6263213587228080897", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EB%A5%B4%EC%B9%B4%ED%86%A0+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "엠 온 더 번드": {
        photos: ["/images/shanghai/info/restaurants/m-on-the-bund-shanghai.jpg"],
        summary: "M on the Bund 기준으로 확인한 상하이 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["와이탄 전망 다이닝", "평점 4.1", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "와이탄 전망 다이닝", items: [{ name: "대표 메뉴", price: "¥300~700", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5293621348775615191", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%A0+%EC%98%A8+%EB%8D%94+%EB%B2%88%EB%93%9C+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "에그 상하이": {
        photos: ["/images/shanghai/info/restaurants/egg-shanghai.jpg"],
        summary: "경안구에서 즐기는 여유로운 브런치와 커피 한 잔의 행복.",
        updatedAt: "2026-07-14",
        highlights: ["부드러운 에그 샌드위치", "감성적인 카페 분위기"],
        tips: ["오전 시간대에 방문하면 더욱 여유로워요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "브런치·커피", items: [{ name: "대표 메뉴", price: "¥80~200", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:30; 화요일: 오전 10:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://eggshanghai.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15802425146389549199", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EA%B7%B8+%EC%83%81%ED%95%98%EC%9D%B4+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시소 커피": {
        photos: ["/images/shanghai/info/restaurants/seesaw-coffee-shanghai.jpg"],
        summary: "상하이 로컬 감성을 가득 담은 대표 스페셜티 커피 브랜드.",
        updatedAt: "2026-07-14",
        highlights: ["깔끔한 맛의 시그니처 라떼", "세련된 매장 인테리어"],
        tips: ["쇼핑몰 내 매장이 많아 접근성이 좋습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "상하이 로컬 커피", items: [{ name: "대표 메뉴", price: "¥40~120", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10043966798984232805", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EC%86%8C+%EC%BB%A4%ED%94%BC+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하카산 상하이": {
        photos: ["/images/shanghai/info/restaurants/hakkasan-shanghai.jpg"],
        summary: "와이탄의 야경과 함께 즐기는 품격 있는 딤섬 다이닝.",
        updatedAt: "2026-07-14",
        highlights: ["정갈한 프리미엄 딤섬", "환상적인 와이탄 뷰"],
        tips: ["특별한 날을 위해 예약 후 방문하는 것을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "딤섬·와이탄 다이닝", items: [{ name: "대표 메뉴", price: "¥400~1,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hakkasan.com/shanghai/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7027879537208080111", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4%EC%82%B0+%EC%83%81%ED%95%98%EC%9D%B4+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
