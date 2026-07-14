import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "모던 노마즈": {
        photos: ["/images/ulaanbaatar/info/restaurants/modern-nomads-ulaanbaatar.jpg"],
        summary: "Modern Nomads 기준으로 확인한 울란바토르 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["허르헉·몽골 전통 요리", "평점 3.8", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "허르헉·몽골 전통 요리", items: [{ name: "대표 메뉴", price: "₮40000~90000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.modernnomads.mn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10992698571362310397", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%EB%8D%98+%EB%85%B8%EB%A7%88%EC%A6%88+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "BD's 몽골리안 그릴": {
        photos: ["/images/ulaanbaatar/info/restaurants/bd-s-mongolian-grill-ulaanbaatar.jpg"],
        summary: "Хуургандаа Mongolian Grill 기준으로 확인한 울란바토르 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["철판 그릴·고기 요리", "평점 4.3", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "철판 그릴·고기 요리", items: [{ name: "대표 메뉴", price: "₮40000~90000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8141258327118955682", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=BD%27s+%EB%AA%BD%EA%B3%A8%EB%A6%AC%EC%95%88+%EA%B7%B8%EB%A6%B4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "베란다": {
        photos: ["/images/ulaanbaatar/info/restaurants/veranda-ulaanbaatar.jpg"],
        summary: "Veranda 기준으로 확인한 울란바토르 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["파스타·피자·와인", "평점 4.4", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "파스타·피자·와인", items: [{ name: "대표 메뉴", price: "₮50000~120000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00 ~ 오전 12:00; 화요일: 오후 12:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://qrmenu.mn/menu/MjMx", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5675527068035577440", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%EB%9E%80%EB%8B%A4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "초이진 템플 레스토랑": {
        photos: ["/images/ulaanbaatar/info/restaurants/choijin-temple-restaurant-ulaanbaatar.jpg"],
        summary: "품격 있는 분위기에서 즐기는 프리미엄 몽골 코스 요리.",
        updatedAt: "2026-07-14",
        highlights: ["정갈한 몽골 전통 코스", "고급스러운 식사 환경"],
        tips: ["중요한 모임이나 기념일 식사로 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "프리미엄 몽골 요리·코스", items: [{ name: "대표 메뉴", price: "₮70000~180000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00 ~ 오전 12:00; 화요일: 오후 12:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/choijintemple/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5336327637777324480", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B4%88%EC%9D%B4%EC%A7%84+%ED%85%9C%ED%94%8C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하자라 인도 레스토랑": {
        photos: ["/images/ulaanbaatar/info/restaurants/hazara-indian-restaurant-ulaanbaatar.jpg"],
        summary: "정통 커리와 탄두리 요리의 풍미를 느낄 수 있는 곳.",
        updatedAt: "2026-07-14",
        highlights: ["진한 맛의 커리", "담백한 탄두리 메뉴"],
        tips: ["인도 향신료 매니아라면 꼭 가보세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커리·탄두리", items: [{ name: "대표 메뉴", price: "₮40000~100000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~10:00; 화요일: 오후 12:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17589149065982105376", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%9E%90%EB%9D%BC+%EC%9D%B8%EB%8F%84+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리틀 쉽 훠궈": {
        photos: ["/images/ulaanbaatar/info/restaurants/little-sheep-hot-pot-ulaanbaatar.jpg"],
        summary: "신선한 양고기를 뜨끈한 국물에 데쳐 먹는 훠궈 맛집.",
        updatedAt: "2026-07-14",
        highlights: ["퀄리티 높은 양고기", "다양한 육수 선택 가능"],
        tips: ["든든하고 따뜻한 한 끼로 제격이에요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "양고기 훠궈", items: [{ name: "대표 메뉴", price: "₮50000~120000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15736294365859746878", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%ED%8B%80+%EC%89%BD+%ED%9B%A0%EA%B6%88+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사쿠라 베이커리": {
        photos: ["/images/ulaanbaatar/info/restaurants/sakura-bakery-ulaanbaatar.jpg"],
        summary: "갓 구운 빵과 달콤한 케이크가 매력적인 베이커리 카페",
        updatedAt: "2026-07-14",
        highlights: ["다양한 종류의 베이커리", "달콤한 케이크와 커피"],
        tips: ["오전 방문 시 더 신선한 빵을 만날 수 있어요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "빵·케이크·커피", items: [{ name: "대표 메뉴", price: "₮15000~50000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13156545493600898697", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%BF%A0%EB%9D%BC+%EB%B2%A0%EC%9D%B4%EC%BB%A4%EB%A6%AC+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카페베네 울란바토르": {
        photos: ["/images/ulaanbaatar/info/restaurants/cafe-bene-ulaanbaatar.jpg"],
        summary: "익숙하고 편안하게 즐기는 커피와 디저트 타임",
        updatedAt: "2026-07-14",
        highlights: ["부드러운 커피", "달콤한 디저트", "아늑한 분위기"],
        tips: ["여행 중 잠시 쉬어가기에 딱 좋은 장소입니다"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커피·디저트", items: [{ name: "대표 메뉴", price: "₮15000~50000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 8:00; 화요일: 오전 7:30 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.caffebene.mn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1170270325154095333", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%98%EB%B2%A0%EB%84%A4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "밀리스 카페": {
        photos: ["/images/ulaanbaatar/info/restaurants/millie-s-cafe-ulaanbaatar.jpg"],
        summary: "신선한 샌드위치와 브런치로 즐기는 든든한 한 끼",
        updatedAt: "2026-07-14",
        highlights: ["풍미 가득한 에스프레소", "신선한 샌드위치와 브런치 메뉴"],
        tips: ["여유로운 아침이나 점심 식사 장소로 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "샌드위치·브런치·커피", items: [{ name: "대표 메뉴", price: "₮25000~70000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 6:00; 화요일: 오전 8:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/milliesespresso", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4906112339929469837", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%80%EB%A6%AC%EC%8A%A4+%EC%B9%B4%ED%8E%98+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 불 훠궈": {
        photos: ["/images/ulaanbaatar/info/restaurants/the-bull-hotpot-ulaanbaatar.jpg"],
        summary: "The Bull Hot Pot Restaurant 기준으로 확인한 울란바토르 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["샤브샤브·훠궈", "평점 4.4", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "샤브샤브·훠궈", items: [{ name: "대표 메뉴", price: "₮50000~120000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/thebullhotpot", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6379317770525393897", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%B6%88+%ED%9B%A0%EA%B6%88+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "후통 레스토랑": {
        photos: ["/images/ulaanbaatar/info/restaurants/hutong-restaurant-ulaanbaatar.jpg"],
        summary: "Hutong Restaurant, Shangri-La Ulaanbaatar 기준으로 확인한 울란바토르 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["중식·딤섬", "평점 4.4", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "중식·딤섬", items: [{ name: "대표 메뉴", price: "₮40000~100000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 5:30~10:00; 화요일: 오후 12:00~3:00, 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.shangri-la.com/mobile/ulaanbaatar/shangrila/dining/restaurants/hutong/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2253886609802221724", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9B%84%ED%86%B5+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "블루스카이 라운지": {
        photos: ["/images/ulaanbaatar/info/restaurants/the-blue-sky-lounge-ulaanbaatar.jpg"],
        summary: "Red Dog Lobby Lounge, Blue Sky Hotel & Tower 기준으로 확인한 울란바토르 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["전망 라운지·칵테일", "평점 5", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "전망 라운지·칵테일", items: [{ name: "대표 메뉴", price: "₮60000~150000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오전 12:00; 화요일: 오전 8:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hotelbluesky.mn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14244022914946003156", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%94%EB%A3%A8%EC%8A%A4%EC%B9%B4%EC%9D%B4+%EB%9D%BC%EC%9A%B4%EC%A7%80+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "실크로드 바 앤 그릴": {
        photos: ["/images/ulaanbaatar/info/restaurants/silk-road-bar-and-grill-ulaanbaatar.jpg"],
        summary: "육즙 가득한 그릴 요리와 시원한 맥주를 즐기기 좋은 곳",
        updatedAt: "2026-07-14",
        highlights: ["그릴 전문 메뉴", "다양한 맥주 라인업"],
        tips: ["저녁 식사와 함께 가볍게 맥주 한잔하기 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "그릴 요리·맥주", items: [{ name: "대표 메뉴", price: "₮40000~100000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~11:30; 화요일: 오후 12:00~11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17387021508616527934", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A4%ED%81%AC%EB%A1%9C%EB%93%9C+%EB%B0%94+%EC%95%A4+%EA%B7%B8%EB%A6%B4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "터닝 포인트 카페": {
        photos: ["/images/ulaanbaatar/info/restaurants/turning-point-cafe-ulaanbaatar.jpg"],
        summary: "재즈 선율과 함께 여유로운 브런치를 즐길 수 있는 감성 카페",
        updatedAt: "2026-07-14",
        highlights: ["분위기 좋은 재즈 카페", "맛있는 디저트와 브런치"],
        tips: ["여유로운 오후, 커피 한 잔의 휴식이 필요할 때 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커피·브런치·디저트", items: [{ name: "대표 메뉴", price: "₮25000~70000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00 ~ 오전 12:00; 화요일: 오후 4:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13843404574919935860", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%84%B0%EB%8B%9D+%ED%8F%AC%EC%9D%B8%ED%8A%B8+%EC%B9%B4%ED%8E%98+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "블랙 버거 팩토리": {
        photos: ["/images/ulaanbaatar/info/restaurants/black-burger-factory-ulaanbaatar.jpg"],
        summary: "두툼한 패티가 매력적인 수제버거 전문점",
        updatedAt: "2026-07-14",
        highlights: ["육즙 넘치는 수제버거", "바삭한 감자튀김"],
        tips: ["든든한 한 끼 식사로 딱이에요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "수제버거·감자튀김", items: [{ name: "대표 메뉴", price: "₮30000~80000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오전 12:00; 화요일: 오전 7:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://modernnomads.mn/index.php?r=25&lang=mn", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3117524931485396988", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%94%EB%9E%99+%EB%B2%84%EA%B1%B0+%ED%8C%A9%ED%86%A0%EB%A6%AC+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
