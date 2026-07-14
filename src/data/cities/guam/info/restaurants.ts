import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "메스클라 차모로 퓨전 비스트로": {
        photos: ["/images/guam/info/restaurants/meskla-chamoru-fusion-bistro-guam.jpg"],
        summary: "Meskla Chamoru Fusion Bistro - Hagatna 기준으로 확인한 괌 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["차모로식 바비큐·로컬 플레이트", "평점 4.4", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "차모로식 바비큐·로컬 플레이트", items: [{ name: "대표 메뉴", price: "$20~45", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 5:30~9:00; 화요일: 오전 11:00 ~ 오후 2:00, 오후 5:30~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://mesklaguam.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10706344871214999767", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EC%8A%A4%ED%81%B4%EB%9D%BC+%EC%B0%A8%EB%AA%A8%EB%A1%9C+%ED%93%A8%EC%A0%84+%EB%B9%84%EC%8A%A4%ED%8A%B8%EB%A1%9C+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "프로아 레스토랑": {
        photos: ["/images/guam/info/restaurants/proa-restaurant-guam.jpg"],
        summary: "프로아 기준으로 확인한 괌 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["히바치 스타일 바비큐·해산물", "평점 4", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "히바치 스타일 바비큐·해산물", items: [{ name: "대표 메뉴", price: "$25~55", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~9:00; 화요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12817453097418268801", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EB%A1%9C%EC%95%84+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "피카스 카페": {
        photos: ["/images/guam/info/restaurants/pika-s-cafe-guam.jpg"],
        summary: "Pika's Cafe 기준으로 확인한 괌 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["로컬 브런치·커피", "평점 4.4", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로컬 브런치·커피", items: [{ name: "대표 메뉴", price: "$15~35", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 3:00; 화요일: 오전 7:30 ~ 오후 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.pikascafeguam.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10052122276890510831", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EC%B9%B4%EC%8A%A4+%EC%B9%B4%ED%8E%98+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 비치 바": {
        photos: ["/images/guam/info/restaurants/the-beach-bar-guam.jpg"],
        summary: "괌 더비치 바 레스토랑 기준으로 확인한 괌 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["석양 바비큐·칵테일", "평점 4.2", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "석양 바비큐·칵테일", items: [{ name: "대표 메뉴", price: "$20~50", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00~10:00; 화요일: 오후 4:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.guambeachbar.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4399511612636183813", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%B9%84%EC%B9%98+%EB%B0%94+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "테리스 로컬 컴포트 푸드": {
        photos: ["/images/guam/info/restaurants/terry-s-local-comfort-food-guam.jpg"],
        summary: "Beans & Barrels 기준으로 확인한 괌 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["차모로 가정식", "평점 5", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "차모로 가정식", items: [{ name: "대표 메뉴", price: "$15~35", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 10:00; 화요일: 오전 6:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.beans-barrels.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8138167273243008153", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%8C%EB%A6%AC%EC%8A%A4+%EB%A1%9C%EC%BB%AC+%EC%BB%B4%ED%8F%AC%ED%8A%B8+%ED%91%B8%EB%93%9C+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "메스클라 도스 어퍼 투몬": {
        photos: ["/images/guam/info/restaurants/meskla-dos-upper-tumon-guam.jpg"],
        summary: "메스클라 도스 새우버거 맛집 기준으로 확인한 괌 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["차모로 버거·로컬 플레이트", "평점 4.3", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "차모로 버거·로컬 플레이트", items: [{ name: "대표 메뉴", price: "$15~35", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18402163612024280138", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EC%8A%A4%ED%81%B4%EB%9D%BC+%EB%8F%84%EC%8A%A4+%EC%96%B4%ED%8D%BC+%ED%88%AC%EB%AA%AC+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "자메이칸 그릴 투몬": {
        photos: ["/images/guam/info/restaurants/jamaican-grill-tumon-guam.jpg"],
        summary: "괌 여행 중 꼭 먹어야 할 이국적인 저크 치킨과 바비큐 맛집",
        updatedAt: "2026-07-14",
        highlights: ["짭조름한 저크 치킨", "육즙 가득한 바비큐"],
        tips: ["저녁 피크 타임에는 웨이팅 주의"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "저크 치킨·바비큐", items: [{ name: "대표 메뉴", price: "$15~35", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.jamaicangrill.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=939775062653932849", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%90%EB%A9%94%EC%9D%B4%EC%B9%B8+%EA%B7%B8%EB%A6%B4+%ED%88%AC%EB%AA%AC+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "에그앤띵스 괌": {
        photos: ["/images/guam/info/restaurants/eggs-n-things-guam.jpg"],
        summary: "폭신한 팬케이크와 오믈렛으로 즐기는 달콤한 브런치",
        updatedAt: "2026-07-14",
        highlights: ["달콤한 팬케이크", "든든한 오믈렛"],
        tips: ["아침 식사나 브런치 메뉴로 강력 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "팬케이크·오믈렛", items: [{ name: "대표 메뉴", price: "$15~35", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 2:00; 화요일: 오전 7:00 ~ 오후 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5463261719766786094", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EA%B7%B8%EC%95%A4%EB%9D%B5%EC%8A%A4+%EA%B4%8C+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리틀 피카스": {
        photos: ["/images/guam/info/restaurants/little-pika-s-guam.jpg"],
        summary: "현지 로컬 메뉴와 브런치를 맛볼 수 있는 감성 카페",
        updatedAt: "2026-07-14",
        highlights: ["다양한 로컬 브런치", "감성적인 분위기"],
        tips: ["현지 느낌 가득한 특별한 메뉴를 시도해보세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "카페 브런치·로컬 메뉴", items: [{ name: "대표 메뉴", price: "$15~35", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 3:00; 화요일: 오전 7:30 ~ 오후 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.pikascafeguam.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2071249854175312742", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%ED%8B%80+%ED%94%BC%EC%B9%B4%EC%8A%A4+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반 타이 괌": {
        photos: ["/images/guam/info/restaurants/ban-thai-guam.jpg"],
        summary: "진한 풍미의 태국식 커리와 누들을 즐길 수 있는 곳",
        updatedAt: "2026-07-14",
        highlights: ["태국 정통 커리", "다양한 누들 메뉴"],
        tips: ["캐주얼하게 즐기기 좋은 식당"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "태국 커리·누들", items: [{ name: "대표 메뉴", price: "$15~35", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 4:00~8:30; 화요일: 오전 11:00 ~ 오후 2:00, 오후 4:00~8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6662160728043287762", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98+%ED%83%80%EC%9D%B4+%EA%B4%8C+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크러스트 피제리아 나폴레타나": {
        photos: ["/images/guam/info/restaurants/crust-pizzeria-napoletana-guam.jpg"],
        summary: "쫄깃한 도우가 일품인 정통 나폴리식 피자 전문점",
        updatedAt: "2026-07-14",
        highlights: ["화덕에서 구운 피자", "풍부한 치즈 맛"],
        tips: ["피자 본연의 맛을 느끼고 싶을 때 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "나폴리식 피자", items: [{ name: "대표 메뉴", price: "$18~40", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:30~10:00; 화요일: 오후 4:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://crustpizzeriaguam.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9387178256341011158", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%9F%AC%EC%8A%A4%ED%8A%B8+%ED%94%BC%EC%A0%9C%EB%A6%AC%EC%95%84+%EB%82%98%ED%8F%B4%EB%A0%88%ED%83%80%EB%82%98+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "테이블 35": {
        photos: ["/images/guam/info/restaurants/table-35-guam.jpg"],
        summary: "스테이크와 파스타, 와인을 함께 즐기는 분위기 맛집",
        updatedAt: "2026-07-14",
        highlights: ["육즙 가득한 스테이크", "깊은 맛의 파스타", "다양한 와인 리스트"],
        tips: ["특별한 저녁 식사나 데이트 코스로 제격"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스테이크·파스타·와인", items: [{ name: "대표 메뉴", price: "$35~80", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7413193141015579438", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%8C%EC%9D%B4%EB%B8%94+35+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "후지 이치반 투몬": {
        photos: ["/images/guam/info/restaurants/fuji-ichiban-guam-tumon.jpg"],
        summary: "투몬 시내에서 가볍고 든든하게 즐기기 좋은 라멘 맛집",
        updatedAt: "2026-07-14",
        highlights: ["진한 국물의 라멘", "부담 없는 일식 메뉴"],
        tips: ["간단한 한 끼 식사로 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "라멘·일식 간단식", items: [{ name: "대표 메뉴", price: "$12~30", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://fujiichiguam.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9559086539965286531", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9B%84%EC%A7%80+%EC%9D%B4%EC%B9%98%EB%B0%98+%ED%88%AC%EB%AA%AC+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "비친 쉬림프": {
        photos: ["/images/guam/info/restaurants/beachin-shrimp-guam.jpg"],
        summary: "괌 여행객들의 필수 코스, 새우 요리 전문점",
        updatedAt: "2026-07-14",
        highlights: ["다양한 소스의 새우 요리", "신선한 해산물 플레이트"],
        tips: ["웨이팅이 있을 수 있으니 피크 타임을 피해서 방문하세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "새우 요리·해산물 플레이트", items: [{ name: "대표 메뉴", price: "$20~45", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1943874218207146074", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%84%EC%B9%9C+%EC%89%AC%EB%A6%BC%ED%94%84+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우오마루 혼텐 괌": {
        photos: ["/images/guam/info/restaurants/uomaru-honten-guam.jpg"],
        summary: "신선한 스시와 일식 안주를 즐기기 좋은 이자카야",
        updatedAt: "2026-07-14",
        highlights: ["퀄리티 높은 스시", "다양한 이자카야 메뉴"],
        tips: ["저녁 식사나 가벼운 술 한잔하기 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스시·이자카야", items: [{ name: "대표 메뉴", price: "$25~60", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:30, 오후 5:00 ~ 오전 1:00; 화요일: 오전 11:00 ~ 오후 2:30, 오후 5:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1111535030847280066", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EC%98%A4%EB%A7%88%EB%A3%A8+%ED%98%BC%ED%85%90+%EA%B4%8C+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
