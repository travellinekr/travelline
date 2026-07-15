import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "신짜오 레스토랑": {
        photos: ["/images/phu-quoc/info/restaurants/xin-chao-restaurant-phu-quoc.png"],
        summary: "환상적인 선셋과 함께 즐기는 신선한 해산물 요리 전문점",
        updatedAt: "2026-07-15",
        highlights: ["일몰 명소로 유명한 뷰 맛집", "다양한 베트남식 해산물 메뉴"],
        tips: ["노을을 보려면 창가 자리 예약은 필수!"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "석양 해산물·베트남 요리", items: [{ name: "대표 메뉴", price: "₫200,000~600,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/nhahangxinchaophuquoc/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10518499120489737517", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%EC%A7%9C%EC%98%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 홈 피자 푸꾸옥": {
        photos: ["/images/phu-quoc/info/restaurants/the-home-pizza-phu-quoc.jpg"],
        summary: "푸꾸옥 특산 재료를 활용해 색다른 맛을 선사하는 수제 피자집",
        updatedAt: "2026-07-15",
        highlights: ["현지 식재료로 만든 이색적인 토핑", "쫄깃하고 담백한 도우"],
        tips: ["가족 단위 여행객에게 추천하는 캐주얼한 공간"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "푸꾸옥 특산 재료 피자", items: [{ name: "대표 메뉴", price: "₫200,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://thehomepizza.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6590593866218315408", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%99%88+%ED%94%BC%EC%9E%90+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "분꽈이 끼엔싸이": {
        photos: ["/images/phu-quoc/info/restaurants/bun-quay-kien-xay-phu-quoc.jpg"],
        summary: "직접 소스를 만들어 먹는 재미가 있는 푸꾸옥 로컬 국수 맛집",
        updatedAt: "2026-07-15",
        highlights: ["푸꾸옥 대표 음식 분꽈이", "신선하고 탱글탱글한 해산물"],
        tips: ["나만의 커스텀 소스를 만드는 재미를 놓치지 마세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "분꽈이·해산물 국수", items: [{ name: "대표 메뉴", price: "₫60,000~150,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 10:00; 화요일: 오전 6:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=61585595857088", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14804018114391354955", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%84%EA%BD%88%EC%9D%B4+%EB%81%BC%EC%97%94%EC%8B%B8%EC%9D%B4+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크랩 하우스 푸꾸옥": {
        photos: ["/images/phu-quoc/info/restaurants/crab-house-phu-quoc.jpg"],
        summary: "신선한 게와 새우가 가득 담긴 풍성한 해산물 플래터를 즐길 수 있는 곳.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 종류의 크랩과 새우를 한 번에 맛보는 플래터", "푸짐한 양의 해산물 요리"],
        tips: ["여러 명이 방문해 플래터를 주문하면 더욱 풍성하게 즐길 수 있어요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "크랩·새우·해산물 플래터", items: [{ name: "대표 메뉴", price: "₫300,000~900,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sinhaghephuquoc.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3109035105772797689", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%9E%A9+%ED%95%98%EC%9A%B0%EC%8A%A4+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라코이 레스토랑": {
        photos: ["/images/phu-quoc/info/restaurants/ra-khoi-restaurant-phu-quoc.jpg"],
        summary: "현지 느낌 물씬 나는 신선한 해산물 볶음과 찜 요리를 맛볼 수 있는 식당.",
        updatedAt: "2026-07-15",
        highlights: ["로컬 스타일의 해산물 볶음", "담백하고 깔끔한 해산물 찜"],
        tips: ["현지 분위기를 느끼며 가성비 좋게 해산물을 즐기기에 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로컬 해산물 볶음·찜", items: [{ name: "대표 메뉴", price: "₫200,000~700,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1572476694631025548", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%BD%94%EC%9D%B4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "옥녹꽌": {
        photos: ["/images/phu-quoc/info/restaurants/oc-noc-quan-phu-quoc.jpg"],
        summary: "다양한 종류의 조개와 달팽이 요리를 전문으로 하는 평점 높은 맛집.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 식감의 조개 및 달팽이 요리", "현지인들에게도 사랑받는 검증된 맛"],
        tips: ["평점이 매우 높으니 꼭 방문해 보시길 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "조개·달팽이 요리", items: [{ name: "대표 메뉴", price: "₫150,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00 ~ 오전 3:00; 화요일: 오후 4:00 ~ 오전 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14968547652963341540", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A5%EB%85%B9%EA%BD%8C+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사이거니즈 이터리": {
        photos: ["/images/phu-quoc/info/restaurants/saigonese-eatery-phu-quoc.jpg"],
        summary: "베트남 로컬 맛을 세련되게 즐기는 감각적인 퓨전 브런치 맛집",
        updatedAt: "2026-07-15",
        highlights: ["베트남 퓨전 요리", "트렌디한 분위기"],
        tips: ["여유로운 오전 브런치를 즐기기에 딱 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "브런치·베트남 퓨전", items: [{ name: "대표 메뉴", price: "₫150,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.saigoneseeatery.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8898272490490588693", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%9D%B4%EA%B1%B0%EB%8B%88%EC%A6%88+%EC%9D%B4%ED%84%B0%EB%A6%AC+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "온 더 록스 망고 베이": {
        photos: ["/images/phu-quoc/info/restaurants/on-the-rocks-phu-quoc-mango-bay.jpg"],
        summary: "파도 소리와 함께 로맨틱한 식사를 즐길 수 있는 오션뷰 레스토랑",
        updatedAt: "2026-07-15",
        highlights: ["환상적인 바다 전망", "낭만적인 디너 분위기"],
        tips: ["일몰 시간에 맞춰 예약하면 인생샷 가능!"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "오션뷰 브런치·디너", items: [{ name: "대표 메뉴", price: "₫300,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mangobayphuquoc.com/en/dining/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11751419497465143195", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A8+%EB%8D%94+%EB%A1%9D%EC%8A%A4+%EB%A7%9D%EA%B3%A0+%EB%B2%A0%EC%9D%B4+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "추온추온 비스트로 앤 스카이바": {
        photos: ["/images/phu-quoc/info/restaurants/chuon-chuon-bistro-sky-bar-phu-quoc.jpg"],
        summary: "푸꾸옥 전경을 한눈에 담는 탁 트인 파노라마 뷰 스카이 바",
        updatedAt: "2026-07-15",
        highlights: ["멋진 시티뷰", "시원한 칵테일과 브런치"],
        tips: ["해 질 녘 노을 맛집으로 강력 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "전망 브런치·칵테일", items: [{ name: "대표 메뉴", price: "₫200,000~600,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 11:00; 화요일: 오전 7:30 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://chuonchuonbistrobar.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=998602008161703406", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B6%94%EC%98%A8%EC%B6%94%EC%98%A8+%EB%B9%84%EC%8A%A4%ED%8A%B8%EB%A1%9C+%EC%95%A4+%EC%8A%A4%EC%B9%B4%EC%9D%B4%EB%B0%94+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "붑 레스토랑": {
        photos: ["/images/phu-quoc/info/restaurants/bup-restaurant-phu-quoc.jpg"],
        summary: "BUP 씨푸드 레스토랑 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["로컬 해산물·볶음밥", "평점 4.2", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로컬 해산물·볶음밥", items: [{ name: "대표 메뉴", price: "₫150,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://facebook.com/BupRestaurant", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5892458186260286043", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%91+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "선셋 비치 바 앤 레스토랑": {
        photos: ["/images/phu-quoc/info/restaurants/sunset-beach-bar-restaurant-phu-quoc.jpg"],
        summary: "선셋 비치 바 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["선셋 칵테일·그릴", "평점 4.3", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "선셋 칵테일·그릴", items: [{ name: "대표 메뉴", price: "₫200,000~600,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오전 1:00; 화요일: 오전 9:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/sunsetbeachphuquoc", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9933357895358909300", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%A0%EC%85%8B+%EB%B9%84%EC%B9%98+%EB%B0%94+%EC%95%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반미 람": {
        photos: ["/images/phu-quoc/info/restaurants/banh-mi-lam-phu-quoc.jpg"],
        summary: "Bánh Mì Tổ Kén 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["반미·베트남 샌드위치", "평점 5", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "반미·베트남 샌드위치", items: [{ name: "대표 메뉴", price: "₫30,000~80,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:30 ~ 오전 12:00; 화요일: 오후 4:30 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/banhmitoken.com.vn", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7337124299077351403", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%EB%AF%B8+%EB%9E%8C+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "가네쉬 인도 레스토랑 푸꾸옥": {
        photos: ["/images/phu-quoc/info/restaurants/ganesh-indian-restaurant-phu-quoc.jpg"],
        summary: "가네쉬 인도 음식점 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["커리·난", "평점 4", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커리·난", items: [{ name: "대표 메뉴", price: "₫150,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16001687810952547083", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%80%EB%84%A4%EC%89%AC+%EC%9D%B8%EB%8F%84+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "윈스턴 버거 앤 비어": {
        photos: ["/images/phu-quoc/info/restaurants/winston-s-burgers-beer-phu-quoc.jpg"],
        summary: "윈스턴 버거 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["수제버거·맥주", "평점 4.4", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "수제버거·맥주", items: [{ name: "대표 메뉴", price: "₫150,000~350,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://facebook.com/winstonsburgers", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1089275855636642481", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%88%EC%8A%A4%ED%84%B4+%EB%B2%84%EA%B1%B0+%EC%95%A4+%EB%B9%84%EC%96%B4+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "칸리 채식 레스토랑": {
        photos: ["/images/phu-quoc/info/restaurants/khanh-ly-vegetarian-restaurant-phu-quoc.jpg"],
        summary: "카잉 리 채식식당 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["베트남 채식 뷔페", "평점 4.2", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 채식 뷔페", items: [{ name: "대표 메뉴", price: "₫50,000~150,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.foody.vn/phu-quoc/khanh-ly-quan-an-chay", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10191200894314688759", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B8%EB%A6%AC+%EC%B1%84%EC%8B%9D+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "한눙 럭셔리": {
        photos: ["/images/phu-quoc/info/restaurants/hanh-nhung-luxury-phu-quoc.jpg"],
        summary: "Hanh Nhung Luxury 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대형 해산물 레스토랑", "평점 4.1", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대형 해산물 레스토랑", items: [{ name: "대표 메뉴", price: "₫250,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:30; 화요일: 오전 8:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hanhnhungluxury.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8789052353774796220", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%9C%EB%88%99+%EB%9F%AD%EC%85%94%EB%A6%AC+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "송싼 레스토랑": {
        photos: ["/images/phu-quoc/info/restaurants/nha-hang-song-xanh-phu-quoc.jpg"],
        summary: "푸꾸옥 빈산 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["강변 해산물 요리", "평점 4.7", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "강변 해산물 요리", items: [{ name: "대표 메뉴", price: "₫200,000~700,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://vinhxanhpq.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3230567361521802489", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%A1%EC%8B%BC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "꽌 비엣 푸꾸옥": {
        photos: ["/images/phu-quoc/info/restaurants/quan-viet-phu-quoc.jpg"],
        summary: "MR. VIET COFFEE OUTLET IN PHU QUOC 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["로컬 가정식·해산물", "평점 5", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로컬 가정식·해산물", items: [{ name: "대표 메뉴", price: "₫100,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 2:00~10:00; 화요일: 오후 2:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mrviet.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3373603601997989738", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%BD%8C+%EB%B9%84%EC%97%A3+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "껌박 123": {
        photos: ["/images/phu-quoc/info/restaurants/com-bac-123-phu-quoc.jpg"],
        summary: "베트남 북부식 백반을 제대로 맛볼 수 있는 로컬 밥집.",
        updatedAt: "2026-07-15",
        highlights: ["정갈한 쌀밥과 다양한 로컬 반찬", "현지 느낌 물씬 나는 식사"],
        tips: ["가성비 넘치는 현지식을 찾는다면 필수."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "쌀밥·로컬 반찬", items: [{ name: "대표 메뉴", price: "₫60,000~180,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8794157169655145673", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%BB%8C%EB%B0%95+123+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "히우스 패밀리 레스토랑": {
        photos: ["/images/phu-quoc/info/restaurants/hieu-s-family-restaurant-phu-quoc.jpg"],
        summary: "그랜드 월드 해변 근처에서 가족과 함께 즐기기 좋은 곳.",
        updatedAt: "2026-07-15",
        highlights: ["해변 앞 여유로운 분위기", "호불호 없는 로컬 메뉴"],
        tips: ["그랜드 월드 산책 후 방문하기 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "가족식 로컬 메뉴", items: [{ name: "대표 메뉴", price: "₫100,000~300,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/MaiHuongBeachfront/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2663947787218946479", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9E%88%EC%9A%B0%EC%8A%A4+%ED%8C%A8%EB%B0%80%EB%A6%AC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반깐 풍": {
        photos: ["/images/phu-quoc/info/restaurants/banh-canh-phung-phu-quoc.jpg"],
        summary: "야시장에서 만나는 탱글한 어묵이 가득한 반깐 국수 맛집.",
        updatedAt: "2026-07-15",
        highlights: ["진한 육수의 어묵 국수(반깐)", "야시장 분위기 만끽 가능"],
        tips: ["야시장 구경하며 간단히 먹기 딱이에요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "반깐·어묵 국수", items: [{ name: "대표 메뉴", price: "₫50,000~120,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30~9:30, 오후 4:00~9:00; 화요일: 오전 6:30~9:30, 오후 4:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5890719974049360931", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%EA%B9%90+%ED%92%8D+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라바 레스토랑": {
        photos: ["/images/phu-quoc/info/restaurants/lava-restaurant-phu-quoc.jpg"],
        summary: "인터컨티넨탈 리조트에서 즐기는 품격 있는 프리미엄 해산물 디너",
        updatedAt: "2026-07-15",
        highlights: ["신선한 프리미엄 해산물 요리", "럭셔리하고 로맨틱한 분위기"],
        tips: ["특별한 기념일이나 고급스러운 저녁 식사를 원할 때 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "프리미엄 디너·해산물", items: [{ name: "대표 메뉴", price: "₫500,000~1,200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:30~11:00; 화요일: 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15626716358545497658", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%B0%94+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "옥센 비치 바 앤 클럽": {
        photos: ["/images/phu-quoc/info/restaurants/ocsen-beach-bar-club-phu-quoc.jpg"],
        summary: "푸꾸옥의 환상적인 선셋을 감상하며 가볍게 즐기기 좋은 비치 바",
        updatedAt: "2026-07-15",
        highlights: ["인생샷을 부르는 아름다운 일몰", "가성비 좋은 스낵과 칵테일"],
        tips: ["해 질 녘 명당 자리를 잡으려면 조금 서두르는 게 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "선셋 바·스낵", items: [{ name: "대표 메뉴", price: "₫150,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00 ~ 오전 1:00; 화요일: 오후 4:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.ocsenbeachbar.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1684639580507515459", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A5%EC%84%BC+%EB%B9%84%EC%B9%98+%EB%B0%94+%EC%95%A4+%ED%81%B4%EB%9F%BD+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "로리스 비치 바": {
        photos: ["/images/phu-quoc/info/restaurants/rory-s-beach-bar-phu-quoc.jpg"],
        summary: "파도 소리와 함께 여유로운 분위기를 만끽할 수 있는 해변 펍",
        updatedAt: "2026-07-15",
        highlights: ["낭만적인 해변가 분위기", "다양한 펍 메뉴와 음료"],
        tips: ["해변 바로 앞이라 시원한 바닷바람을 느끼며 쉬기 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해변 바·펍 메뉴", items: [{ name: "대표 메뉴", price: "₫150,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/RorysBarPhuQuoc/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11648725838486792259", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EB%A6%AC%EC%8A%A4+%EB%B9%84%EC%B9%98+%EB%B0%94+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "푸꾸옥 야시장 해산물": {
        photos: ["/images/phu-quoc/info/restaurants/phu-quoc-night-market-seafood-restaurant.jpg"],
        summary: "MYLA SEAFOOD 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["구운 해산물·간식", "평점 4.9", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "구운 해산물·간식", items: [{ name: "대표 메뉴", price: "₫100,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12760888044499323491", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EA%BE%B8%EC%98%A5+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%95%B4%EC%82%B0%EB%AC%BC+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
