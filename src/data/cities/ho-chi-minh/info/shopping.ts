import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "벤탄 시장": {
        photos: ["/images/ho-chi-minh/info/shopping/ben-thanh-market-ho-chi-minh-city.jpg"],
        summary: "벤탄시장 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 4", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10190288580948819760", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A4%ED%83%84+%EC%8B%9C%EC%9E%A5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사이공 센터 다카시마야": {
        photos: ["/images/ho-chi-minh/info/shopping/saigon-centre-takashimaya-ho-chi-minh-city.jpg"],
        summary: "사이공 센터 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 4.5", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 9:30; 화요일: 오전 9:30 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://shopping.saigoncentre.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1643415366400034868", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%9D%B4%EA%B3%B5+%EC%84%BC%ED%84%B0+%EB%8B%A4%EC%B9%B4%EC%8B%9C%EB%A7%88%EC%95%BC+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈컴센터 동커이": {
        photos: ["/images/ho-chi-minh/info/shopping/vincom-center-dong-khoi-ho-chi-minh-city.jpg"],
        summary: "빈컴센터 동커이점 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 4.5", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15188274742999982402", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EC%BB%B4%EC%84%BC%ED%84%B0+%EB%8F%99%EC%BB%A4%EC%9D%B4+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사이공 스퀘어": {
        photos: ["/images/ho-chi-minh/info/shopping/saigon-square-ho-chi-minh-city.jpg"],
        summary: "트렌디한 의류와 액세서리를 한눈에 볼 수 있는 쇼핑 성지입니다.",
        updatedAt: "2026-07-15",
        highlights: ["최신 유행 패션 아이템", "다양한 잡화 및 소품"],
        tips: ["기분 좋게 흥정하며 가격을 맞춰보세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=294265276674156626", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%9D%B4%EA%B3%B5+%EC%8A%A4%ED%80%98%EC%96%B4+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "안동 시장": {
        photos: ["/images/ho-chi-minh/info/shopping/an-dong-market-ho-chi-minh-city.jpg"],
        summary: "현지인들이 즐겨 찾는 대규모 의류 및 잡화 도매 시장입니다.",
        updatedAt: "2026-07-15",
        highlights: ["가성비 좋은 의류 쇼핑", "다양한 생활 잡화"],
        tips: ["도매 위주라 여러 개 묶음 구매 시 더 저렴해요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 6:00; 화요일: 오전 6:00 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tiktok.com/@longbanquet?_r=1&_t=ZS-97bOpzSX7jd", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9378551707282343259", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%88%EB%8F%99+%EC%8B%9C%EC%9E%A5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈떠이 시장": {
        photos: ["/images/ho-chi-minh/info/shopping/binh-tay-market-ho-chi-minh-city.jpg"],
        summary: "호치민에서 가장 큰 규모를 자랑하는 전통 시장입니다.",
        updatedAt: "2026-07-15",
        highlights: ["전통적인 시장 분위기", "다양한 식료품 및 생필품"],
        tips: ["진정한 로컬 감성 쇼핑을 원한다면 추천!"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 6:00; 화요일: 오전 7:00 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3893127340704664081", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EB%96%A0%EC%9D%B4+%EC%8B%9C%EC%9E%A5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "응우옌짜이 쇼핑거리": {
        photos: ["/images/ho-chi-minh/info/shopping/nguyen-trai-street-shopping-ho-chi-minh-city.jpg"],
        summary: "다양한 기념품과 의류를 한눈에 둘러볼 수 있는 호치민의 대표적인 쇼핑 거리예요.",
        updatedAt: "2026-07-15",
        highlights: ["합리적인 가격대의 액세서리와 의류", "현지 분위기 가득한 상점들"],
        tips: ["기념품 구매할 때 가벼운 흥정은 필수!"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:30; 화요일: 오전 8:00 ~ 오후 10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/share/16VHYNHz6b/?mibextid=wwXIfr", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17017034625842238141", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%91%EC%9A%B0%EC%98%8C%EC%A7%9C%EC%9D%B4+%EC%87%BC%ED%95%91%EA%B1%B0%EB%A6%AC+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "동커이 거리": {
        photos: ["/images/ho-chi-minh/info/shopping/dong-khoi-street-ho-chi-minh-city.jpg"],
        summary: "세련된 브랜드와 고급스러운 분위기를 만끽할 수 있는 호치민의 명품 쇼핑가예요.",
        updatedAt: "2026-07-15",
        highlights: ["고급 브랜드 매장 밀집", "쾌적하고 세련된 거리 풍경"],
        tips: ["쇼핑 후 근처 카페에서 여유를 즐기기 좋아요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 4:00~11:30; 화요일: 오후 4:00~11:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.meat-drink.com/tables157", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6577267715894152172", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%99%EC%BB%A4%EC%9D%B4+%EA%B1%B0%EB%A6%AC+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이온몰 떤푸 셀라돈": {
        photos: ["/images/ho-chi-minh/info/shopping/aeon-mall-tan-phu-celadon-ho-chi-minh-city.jpg"],
        summary: "시원한 에어컨 바람 아래서 다양한 쇼핑과 먹거리를 즐길 수 있는 대형 몰이에요.",
        updatedAt: "2026-07-15",
        highlights: ["대규모 푸드코트와 다양한 브랜드", "쾌적하고 넓은 쇼핑 공간"],
        tips: ["더위를 피해 쾌적하게 쇼핑하고 싶을 때 딱이에요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://s.shopee.vn/6AhosrQLPO", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5131838300127239515", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%98%A8%EB%AA%B0+%EB%96%A4%ED%91%B8+%EC%85%80%EB%9D%BC%EB%8F%88+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크레센트 몰": {
        photos: ["/images/ho-chi-minh/info/shopping/crescent-mall-ho-chi-minh-city.jpg"],
        summary: "크레센트몰 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 4.5", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://crescentmall.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13168693420682513086", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A0%88%EC%84%BC%ED%8A%B8+%EB%AA%B0+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
