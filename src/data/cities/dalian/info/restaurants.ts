import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "완바오 해산물 레스토랑": {
        photos: ["/images/dalian/info/restaurants/wanbao-seafood-restaurant-dalian.jpg"],
        summary: "Wanbao Seafood Fang 기준으로 확인한 다롄 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["다롄식 해산물 요리", "평점 4.5", "다롄 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "다롄식 해산물 요리", items: [{ name: "대표 메뉴", price: "¥150~400", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10882540629867862171", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%84%EB%B0%94%EC%98%A4+%ED%95%B4%EC%82%B0%EB%AC%BC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "핀하이러우": {
        photos: ["/images/dalian/info/restaurants/pinhailou-dalian.jpg"],
        summary: "Pinhailou 기준으로 확인한 다롄 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["해삼·전복·해산물 코스", "평점 5", "다롄 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해삼·전복·해산물 코스", items: [{ name: "대표 메뉴", price: "¥200~600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4379225664599316521", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%80%ED%95%98%EC%9D%B4%EB%9F%AC%EC%9A%B0+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "톈톈위강": {
        photos: ["/images/dalian/info/restaurants/tian-tian-yu-gang-dalian.jpg"],
        summary: "Tin Tin Seafood Harbour 기준으로 확인한 다롄 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["생선·조개 해산물 요리", "평점 3.9", "다롄 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "생선·조개 해산물 요리", items: [{ name: "대표 메뉴", price: "¥120~350", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9544489629460300798", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%88%ED%86%88%EC%9C%84%EA%B0%95+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시딩 성게만두": {
        photos: ["/images/dalian/info/restaurants/xiding-sea-urchin-dumplings-dalian.jpg"],
        summary: "Xi Ding Hai Dan Dumplings 기준으로 확인한 다롄 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["성게 만두", "평점 4.7", "다롄 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "성게 만두", items: [{ name: "대표 메뉴", price: "¥80~250", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17955694811660547480", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EB%94%A9+%EC%84%B1%EA%B2%8C%EB%A7%8C%EB%91%90+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "위양 해산물": {
        photos: ["/images/dalian/info/restaurants/yuyang-seafood-dalian.jpg"],
        summary: "Qiankuli Seafood Barbecue Hot Pot Self-Service 기준으로 확인한 다롄 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["신선 해산물 요리", "평점 5", "다롄 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "신선 해산물 요리", items: [{ name: "대표 메뉴", price: "¥150~400", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9997612106829413858", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%84%EC%96%91+%ED%95%B4%EC%82%B0%EB%AC%BC+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스타벅스 리저브 다롄 중산": {
        photos: ["/images/dalian/info/restaurants/starbucks-reserve-dalian-zhongshan.jpg"],
        summary: "星巴克 기준으로 확인한 다롄 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["커피·휴식", "평점 5", "다롄 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커피·휴식", items: [{ name: "대표 메뉴", price: "¥40~120", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.starbucks.com.cn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14653888268986555121", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4+%EB%A6%AC%EC%A0%80%EB%B8%8C+%EB%8B%A4%EB%A1%84+%EC%A4%91%EC%82%B0+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "만커피 다롄": {
        photos: ["/images/dalian/info/restaurants/maan-coffee-dalian.jpg"],
        summary: "달콤한 와플과 커피로 여유로운 휴식을 즐기기 좋은 카페",
        updatedAt: "2026-07-14",
        highlights: ["바삭한 와플", "다양한 커피 메뉴"],
        tips: ["디저트와 함께 티타임을 갖기에 딱이에요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "와플·커피", items: [{ name: "대표 메뉴", price: "¥50~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13039757546123926752", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%EC%BB%A4%ED%94%BC+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "렌바흐 레스토랑 앤 바": {
        photos: ["/images/dalian/info/restaurants/lenbach-restaurant-and-bar-dalian.jpg"],
        summary: "시원한 맥주와 풍미 가득한 그릴 요리를 즐길 수 있는 곳",
        updatedAt: "2026-07-14",
        highlights: ["신선한 생맥주", "다양한 그릴 메뉴"],
        tips: ["저녁 식사와 함께 가볍게 맥주 한 잔 하기 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "맥주·그릴 요리", items: [{ name: "대표 메뉴", price: "¥120~300", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9606289425618670510", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%8C%EB%B0%94%ED%9D%90+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%95%A4+%EB%B0%94+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우노메 일식 다롄": {
        photos: ["/images/dalian/info/restaurants/unome-dalian-japanese-restaurant.jpg"],
        summary: "정갈하고 고급스러운 스시와 일식 코스를 맛볼 수 있는 곳",
        updatedAt: "2026-07-14",
        highlights: ["신선한 제철 스시", "품격 있는 일식 코스"],
        tips: ["특별한 날을 위해 미리 예약하는 것을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스시·일식 코스", items: [{ name: "대표 메뉴", price: "¥150~400", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2956153626666645509", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%85%B8%EB%A9%94+%EC%9D%BC%EC%8B%9D+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다디 춘빙 다롄": {
        photos: ["/images/dalian/info/restaurants/da-di-chun-bing-dalian.jpg"],
        summary: "바삭한 춘빙과 정갈한 동북식 반찬이 매력적인 로컬 맛집",
        updatedAt: "2026-07-14",
        highlights: ["겉바속촉 춘빙", "다양한 동북식 밑반찬"],
        tips: ["현지 분위기를 제대로 느끼고 싶을 때 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "춘빙·동북식 반찬", items: [{ name: "대표 메뉴", price: "¥60~180", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2049945496720732273", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EB%94%94+%EC%B6%98%EB%B9%99+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "첸리허 일식 다롄": {
        photos: ["/images/dalian/info/restaurants/qian-ri-he-japanese-restaurant-dalian.jpg"],
        summary: "신선한 스시를 즐길 수 있는 깔끔하고 고급스러운 일식 전문점",
        updatedAt: "2026-07-14",
        highlights: ["퀄리티 높은 제철 스시", "정갈한 플레이팅"],
        tips: ["특별한 날 방문하기 좋은 곳"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스시·일식", items: [{ name: "대표 메뉴", price: "¥120~350", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3228802721145825778", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B2%B8%EB%A6%AC%ED%97%88+%EC%9D%BC%EC%8B%9D+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다롄 중산 훠궈 레스토랑": {
        photos: ["/images/dalian/info/restaurants/dalian-hotpot-restaurant-zhongshan.jpg"],
        summary: "깊고 진한 국물 맛이 특징인 정통 훠궈 맛집",
        updatedAt: "2026-07-14",
        highlights: ["풍성한 훠궈 재료", "중독성 있는 육수"],
        tips: ["매운맛을 즐긴다면 홍탕 필수"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "훠궈", items: [{ name: "대표 메뉴", price: "¥100~300", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17720348252589135381", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EB%A1%84+%EC%A4%91%EC%82%B0+%ED%9B%A0%EA%B6%88+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "샹 팰리스 다롄": {
        photos: ["/images/dalian/info/restaurants/shang-palace-dalian.jpg"],
        summary: "샹그릴라 호텔에서 즐기는 품격 있는 정통 중식과 딤섬 맛집",
        updatedAt: "2026-07-14",
        highlights: ["부드러운 식감의 프리미엄 딤섬", "고급스러운 분위기의 호텔 다이닝"],
        tips: ["가족 모임이나 기념일 식사 장소로 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "호텔 중식·딤섬", items: [{ name: "대표 메뉴", price: "¥200~600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:00; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.shangri-la.com/dalian/shangrila/dining/restaurants/shang-palace/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=948497323271653915", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%B9+%ED%8C%B0%EB%A6%AC%EC%8A%A4+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카페 코펜하겐 다롄": {
        photos: ["/images/dalian/info/restaurants/cafe-copenhagen-dalian.jpg"],
        summary: "여유로운 브런치를 즐기기 좋은 감성 가득한 카페",
        updatedAt: "2026-07-14",
        highlights: ["다양한 메뉴의 브런치 플레이트", "분위기 좋은 인테리어와 향긋한 커피"],
        tips: ["햇살 잘 드는 창가 자리를 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커피·브런치", items: [{ name: "대표 메뉴", price: "¥50~180", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15664879865191070564", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%98+%EC%BD%94%ED%8E%9C%ED%95%98%EA%B2%90+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "블루프로그 다롄": {
        photos: ["/images/dalian/info/restaurants/blue-frog-dalian.jpg"],
        summary: "육즙 가득한 수제 버거와 시원한 맥주를 즐길 수 있는 곳",
        updatedAt: "2026-07-14",
        highlights: ["두툼하고 맛있는 수제 버거", "캐주얼하게 즐기는 맥주 한 잔"],
        tips: ["친구들과 캐주얼한 저녁 식사로 딱이에요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "버거·맥주", items: [{ name: "대표 메뉴", price: "¥100~280", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.bluefrog.com.cn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14097797697007396045", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%94%EB%A3%A8%ED%94%84%EB%A1%9C%EA%B7%B8+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
