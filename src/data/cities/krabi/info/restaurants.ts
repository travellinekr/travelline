import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "코담 키친": {
        photos: ["/images/krabi/info/restaurants/kodam-kitchen-ao-nang-krabi.jpg"],
        summary: "커리와 해산물, 팟타이 등 다양한 태국 요리를 즐길 수 있는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["풍부한 커리 메뉴", "신선한 해산물 요리", "맛있는 팟타이"],
        tips: ["인기 메뉴는 미리 주문하는 것이 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커리·해산물·팟타이", items: [{ name: "대표 메뉴", price: "฿100~350", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.kodamkitchen.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7828349515681075331", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EB%8B%B4+%ED%82%A4%EC%B9%9C+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "패밀리 타이푸드 & 씨푸드": {
        photos: ["/images/krabi/info/restaurants/family-thaifood-seafood-ao-nang-krabi.jpg"],
        summary: "태국 가정식과 신선한 해산물을 전문으로 하는 식당입니다.",
        updatedAt: "2026-07-21",
        highlights: ["정통 태국 가정식", "신선한 해산물 요리"],
        tips: ["해산물 메뉴를 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물·태국 가정식", items: [{ name: "대표 메뉴", price: "฿100~400", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11569968780233725567", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%A8%EB%B0%80%EB%A6%AC+%ED%83%80%EC%9D%B4%ED%91%B8%EB%93%9C+%26+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "래 레이 그릴": {
        photos: ["/images/krabi/info/restaurants/lae-lay-grill-krabi.jpg"],
        summary: "아름다운 선셋 전망과 함께 신선한 해산물을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["환상적인 일몰 전망", "신선한 해산물 요리"],
        tips: ["일몰 시간에 맞춰 예약하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "선셋 전망 해산물", items: [{ name: "대표 메뉴", price: "฿300~900", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.laelaygrill.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13995783608200020974", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%98+%EB%A0%88%EC%9D%B4+%EA%B7%B8%EB%A6%B4+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "더 힐탑 아오낭": {
        photos: ["/images/krabi/info/restaurants/the-hilltop-ao-nang-krabi.jpg"],
        summary: "탁 트인 전망을 자랑하는 씨푸드 전문 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["아름다운 파노라마 뷰", "다양한 씨푸드 메뉴"],
        tips: ["전망이 좋은 창가 자리를 미리 확보하세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "전망 레스토랑·씨푸드", items: [{ name: "대표 메뉴", price: "฿300~1000", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.thehilltopaonang.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3703819396885068511", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%9E%90%ED%83%91+%EC%95%84%EC%98%A4%EB%82%AD+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "카페 8.98 아오낭": {
        photos: ["/images/krabi/info/restaurants/cafe-8-98-ao-nang-krabi.jpg"],
        summary: "아오낭에서 즐길 수 있는 브런치와 커피, 건강식 전문 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 재료를 사용한 건강식 메뉴", "여유로운 분위기의 브런치 타임"],
        tips: ["아침이나 점심 식사로 방문하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "브런치·커피·건강식", items: [{ name: "대표 메뉴", price: "฿150~450", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 11:00; 화요일: 오전 7:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.cafe898.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16371589168644469734", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%98+8.98+%EC%95%84%EC%98%A4%EB%82%AD+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "카니보어 스테이크 앤 그릴": {
        photos: ["/images/krabi/info/restaurants/carnivore-steak-and-grill-ao-nang-krabi.jpg"],
        summary: "스테이크와 다양한 그릴 요리를 전문으로 하는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["육즙 가득한 스테이크", "다양한 종류의 그릴 메뉴"],
        tips: ["고기 요리를 좋아한다면 꼭 방문해보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스테이크·그릴 요리", items: [{ name: "대표 메뉴", price: "฿400~1200", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 12:00~10:00; 화요일: 오후 12:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17568034410292384810", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%8B%88%EB%B3%B4%EC%96%B4+%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC+%EC%95%A4+%EA%B7%B8%EB%A6%B4+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "움베르토스 퀴진": {
        photos: ["/images/krabi/info/restaurants/umberto-s-cuisine-ao-nang-krabi.jpg"],
        summary: "파스타, 피자, 와인을 전문으로 하는 맛있는 이탈리안 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 파스타와 피자", "품격 있는 와인 리스트"],
        tips: ["저녁 시간대에는 예약 후 방문하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "파스타·피자·와인", items: [{ name: "대표 메뉴", price: "฿300~900", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:30; 화요일: 오전 11:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.umbertorestaurant.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10208985158661633265", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9B%80%EB%B2%A0%EB%A5%B4%ED%86%A0%EC%8A%A4+%ED%80%B4%EC%A7%84+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "더 라스트 피셔맨": {
        photos: ["/images/krabi/info/restaurants/the-last-fisherman-ao-nang-krabi.jpg"],
        summary: "해변에서 신선한 씨푸드를 즐길 수 있는 분위기 좋은 바입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 해산물 요리", "낭만적인 해변 식사"],
        tips: ["일몰 시간에 맞춰 방문하면 멋진 풍경을 감상할 수 있습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해변 식사·씨푸드", items: [{ name: "대표 메뉴", price: "฿200~700", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 4:00, 오후 5:30~10:00; 화요일: 오전 11:00 ~ 오후 4:00, 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://thelastfishermanbar.com/?utm_source=google&utm_medium=gmb&utm_campaign=local-seo", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17211655726105288461", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%9D%BC%EC%8A%A4%ED%8A%B8+%ED%94%BC%EC%85%94%EB%A7%A8+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "완나스 플레이스": {
        photos: ["/images/krabi/info/restaurants/wanna-s-place-ao-nang-krabi.jpg"],
        summary: "스테이크와 다양한 태국 요리를 즐길 수 있는 아오낭의 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 스테이크 메뉴", "태국 전통 음식 제공"],
        tips: ["저녁 시간대 방문을 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스테이크·태국 메뉴", items: [{ name: "대표 메뉴", price: "฿250~800", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00~11:00, 오전 11:30 ~ 오후 10:00; 화요일: 오전 7:00~11:00, 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.thelresort.com/restaurants/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=334914053814768602", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%84%EB%82%98%EC%8A%A4+%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "메이 앤 진 레스토랑": {
        photos: ["/images/krabi/info/restaurants/may-and-zin-restaurant-ao-nang-krabi.jpg"],
        summary: "가성비 좋은 저렴한 로컬 태국 음식을 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["저렴하고 맛있는 로컬 타이푸드", "높은 고객 만족도"],
        tips: ["현지 분위기를 느끼기에 좋습니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "저렴한 로컬 타이푸드", items: [{ name: "대표 메뉴", price: "฿80~250", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17634506356183815889", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EC%9D%B4+%EC%95%A4+%EC%A7%84+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "보트 누들 아오낭": {
        photos: ["/images/krabi/info/restaurants/boat-noodle-ao-nang-krabi.jpg"],
        summary: "아오낭에서 즐길 수 있는 보트누들과 로컬 국수 전문점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["현지 스타일의 진한 국물 맛", "가성비 좋은 로컬 음식"],
        tips: ["국수와 함께 곁들일 사이드 메뉴를 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "보트누들·로컬 국수", items: [{ name: "대표 메뉴", price: "฿60~200", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11039608879764641742", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%ED%8A%B8+%EB%88%84%EB%93%A4+%EC%95%84%EC%98%A4%EB%82%AD+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "고빈다스 앳 더 비치": {
        photos: ["/images/krabi/info/restaurants/govinda-s-at-the-beach-krabi.jpg"],
        summary: "해변 근처에서 다양한 베지테리언 메뉴를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 채식 요리 구성", "여유로운 해변 분위기"],
        tips: ["비건 옵션이 필요한 여행객에게 특히 좋습니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "베지테리언 메뉴", items: [{ name: "대표 메뉴", price: "฿150~450", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2363846960477405063", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A0%EB%B9%88%EB%8B%A4%EC%8A%A4+%EC%95%B3+%EB%8D%94+%EB%B9%84%EC%B9%98+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "바와르치 딜라이트": {
        photos: ["/images/krabi/info/restaurants/bawarchi-delight-ao-nang-krabi.png"],
        summary: "커리와 탄두리 요리를 전문으로 하는 인도 음식점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["풍미 가득한 커리 메뉴", "전통적인 탄두리 요리"],
        tips: ["인도식 향신료를 좋아하신다면 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커리·탄두리", items: [{ name: "대표 메뉴", price: "฿200~700", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:30; 화요일: 오전 11:00 ~ 오후 11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10214452315264611673", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%99%80%EB%A5%B4%EC%B9%98+%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "루엔 마이 레스토랑": {
        photos: ["/images/krabi/info/restaurants/ruen-mai-restaurant-krabi-town.jpg"],
        summary: "태국 남부 스타일의 로컬 요리와 커리를 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["정통 태국 남부식 커리", "현지 느낌 가득한 로컬 요리"],
        tips: ["태국 현지의 깊은 맛을 느끼고 싶은 분들께 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "남부식 커리·로컬 요리", items: [{ name: "대표 메뉴", price: "฿150~500", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:30 ~ 오후 3:00, 오후 5:00~9:00; 화요일: 오전 10:30 ~ 오후 3:00, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/ruenmaikrabirestuarant", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1129542214166782910", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A3%A8%EC%97%94+%EB%A7%88%EC%9D%B4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "게코 카바네": {
        photos: ["/images/krabi/info/restaurants/gecko-cabane-restaurant-krabi-town.jpg"],
        summary: "커리와 프렌치 감성이 어우러진 독특한 퓨전 요리를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["커리 및 프렌치 스타일 퓨전 메뉴", "감성적인 레스토랑 분위기"],
        tips: ["특별한 퓨전 요리를 맛보고 싶을 때 방문하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커리·프렌치 감성 퓨전", items: [{ name: "대표 메뉴", price: "฿200~600", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://geckocabanerestaurant.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12835249184686477824", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B2%8C%EC%BD%94+%EC%B9%B4%EB%B0%94%EB%84%A4+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "카오통 테라스 레스토랑": {
        photos: ["/images/krabi/info/restaurants/khaothong-terrace-resort-restaurant-krabi.jpg"],
        summary: "아름다운 바다 전망과 함께 신선한 해산물을 즐길 수 있는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["환상적인 바다 전망", "신선한 해산물 요리"],
        tips: ["전망이 좋은 자리를 위해 미리 예약하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "바다 전망 해산물", items: [{ name: "대표 메뉴", price: "฿250~900", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10202228979747870272", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%98%A4%ED%86%B5+%ED%85%8C%EB%9D%BC%EC%8A%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "탄두리 나이츠 아오낭": {
        photos: ["/images/krabi/info/restaurants/tandoori-night-s-ao-nang-krabi.png"],
        summary: "다양한 종류의 탄두리와 커리를 전문으로 하는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["풍미 가득한 탄두리 요리", "깊은 맛의 인도식 커리"],
        tips: ["인기 메뉴는 미리 주문하는 것이 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "탄두리·커리", items: [{ name: "대표 메뉴", price: "฿200~700", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 12:00 ~ 오전 12:00; 화요일: 오후 12:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1206529016504184886", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%84%EB%91%90%EB%A6%AC+%EB%82%98%EC%9D%B4%EC%B8%A0+%EC%95%84%EC%98%A4%EB%82%AD+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "마사만 레스토랑 & 바": {
        photos: ["/images/krabi/info/restaurants/massaman-restaurant-bar-ao-nang-krabi.jpg"],
        summary: "정통 마사만 커리와 태국 요리를 즐길 수 있는 고급스러운 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["전통적인 마사만 커리", "다양한 태국식 메뉴"],
        tips: ["분위기가 좋으니 저녁 식사로 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "마사만 커리·태국 요리", items: [{ name: "대표 메뉴", price: "฿150~500", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.myfunnow.com/en/funbook/3383093273229/branch", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7721856355620029520", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%82%AC%EB%A7%8C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%26+%EB%B0%94+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "타지 팰리스 인디언 레스토랑": {
        photos: ["/images/krabi/info/restaurants/taj-palace-indian-restaurant-ao-nang-krabi.jpg"],
        summary: "커리, 난, 탄두리 요리를 전문으로 하는 인도 음식점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 커리와 난", "풍미 가득한 탄두리 요리"],
        tips: ["인도 전통 요리의 진수를 맛보고 싶을 때 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커리·난·탄두리", items: [{ name: "대표 메뉴", price: "฿200~700", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오전 1:00; 화요일: 오전 10:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tajpalace.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9476582189676679449", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%A7%80+%ED%8C%B0%EB%A6%AC%EC%8A%A4+%EC%9D%B8%EB%94%94%EC%96%B8+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "라일레이 패밀리 레스토랑": {
        photos: ["/images/krabi/info/restaurants/railay-family-restaurant-krabi.jpg"],
        summary: "라일레이 지역의 로컬 식사를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["현지 느낌 물씬 나는 로컬 메뉴", "가족과 함께 방문하기 좋은 분위기"],
        tips: ["태국 현지의 맛을 경험하고 싶은 여행객에게 적합합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "라일레이 로컬 식사", items: [{ name: "대표 메뉴", price: "฿100~350", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16822371234061733774", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%9D%BC%EB%A0%88%EC%9D%B4+%ED%8C%A8%EB%B0%80%EB%A6%AC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
