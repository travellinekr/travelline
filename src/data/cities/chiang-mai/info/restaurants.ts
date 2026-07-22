import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "흐언펜": {
        photos: ["/images/chiang-mai/info/restaurants/huen-phen-chiang-mai.jpg"],
        summary: "흐언펜 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["카오소이·북부 가정식", "평점 4", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "카오소이·북부 가정식", items: [{ name: "대표 메뉴", price: "฿80~300", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:30 ~ 오후 4:30, 오후 5:00~10:00; 화요일: 오전 8:30 ~ 오후 4:30, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/%E0%B9%80%E0%B8%AE%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B9%80%E0%B8%9E%E0%B9%87%E0%B8%8D-238150782968717/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5931652883148881047", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9D%90%EC%96%B8%ED%8E%9C+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카오소이 매싸이": {
        photos: ["/images/chiang-mai/info/restaurants/khao-soi-mae-sai-chiang-mai.jpg"],
        summary: "카오소이 매싸이 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["카오소이", "평점 4.5", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "카오소이", items: [{ name: "대표 메뉴", price: "฿60~180", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 4:00; 화요일: 오전 8:00 ~ 오후 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/khaosoimaesai", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5039605543517047272", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%98%A4%EC%86%8C%EC%9D%B4+%EB%A7%A4%EC%8B%B8%EC%9D%B4+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카오소이 쿤야이": {
        photos: ["/images/chiang-mai/info/restaurants/khao-soi-khun-yai-chiang-mai.jpg"],
        summary: "카우써이 쿤야이 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["카오소이", "평점 4.6", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "카오소이", items: [{ name: "대표 메뉴", price: "฿60~180", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 2:00; 화요일: 오전 10:00 ~ 오후 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9881694157078611059", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%98%A4%EC%86%8C%EC%9D%B4+%EC%BF%A4%EC%95%BC%EC%9D%B4+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카오소이 이슬람": {
        photos: ["/images/chiang-mai/info/restaurants/khao-soi-islam-chiang-mai.jpg"],
        summary: "Khao soi Islam Restaurant 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["카오소이·커리누들", "평점 4.4", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "카오소이·커리누들", items: [{ name: "대표 메뉴", price: "฿60~220", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 5:00; 화요일: 오전 7:30 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7645269624961201266", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%98%A4%EC%86%8C%EC%9D%B4+%EC%9D%B4%EC%8A%AC%EB%9E%8C+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "에스피 치킨": {
        photos: ["/images/chiang-mai/info/restaurants/sp-chicken-chiang-mai.jpg"],
        summary: "SP Chicken 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로스트 치킨·솜땀", "평점 4.2", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로스트 치킨·솜땀", items: [{ name: "대표 메뉴", price: "฿100~350", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 5:00; 화요일: 오전 10:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4163692835834756552", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EC%8A%A4%ED%94%BC+%EC%B9%98%ED%82%A8+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "통템토": {
        photos: ["/images/chiang-mai/info/restaurants/tong-tem-toh-chiang-mai.jpg"],
        summary: "떵뗌또 치앙마이 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["북부식 구이·딥", "평점 4.2", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "북부식 구이·딥", items: [{ name: "대표 메뉴", price: "฿150~500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/TongTemToh/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17702298077137349945", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%B5%ED%85%9C%ED%86%A0+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "청도이 로스트 치킨": {
        photos: ["/images/chiang-mai/info/restaurants/cherng-doi-roast-chicken-chiang-mai.jpg"],
        summary: "까이양 청더이 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로스트 치킨", "평점 4.3", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로스트 치킨", items: [{ name: "대표 메뉴", price: "฿100~350", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://l.facebook.com/l.php?u=https%3A%2F%2Ffb.me%2FKaiyangcherngdoi2&h=AT34RFLWFLDzCnBmM8boRPb5Km5TPjNG1KnFbsdPgSRCtlhs2P1YZ0aixG33gkAstj9xfGitveoeDAb4YRFmNiL69zqjlY-1d_kvTRUzwfO3-Hq5ywa5Il2AbwPWSJVWzDUc", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17835361123260205616", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B2%AD%EB%8F%84%EC%9D%B4+%EB%A1%9C%EC%8A%A4%ED%8A%B8+%EC%B9%98%ED%82%A8+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "대시 레스토랑 앤 바": {
        photos: ["/images/chiang-mai/info/restaurants/dash-restaurant-and-bar-chiang-mai.jpg"],
        summary: "Dash Teak House 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["태국 요리·칵테일", "평점 4.5", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "태국 요리·칵테일", items: [{ name: "대표 메뉴", price: "฿250~800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.dashchiangmai.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4148541367313503630", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8C%80%EC%8B%9C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%95%A4+%EB%B0%94+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 하우스 바이 진저": {
        photos: ["/images/chiang-mai/info/restaurants/the-house-by-ginger-chiang-mai.jpg"],
        summary: "THE HOUSE by Ginger 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["태국 퓨전·칵테일", "평점 4.3", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "태국 퓨전·칵테일", items: [{ name: "대표 메뉴", price: "฿300~1000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.thehousebygingercm.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9900522049030851356", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%95%98%EC%9A%B0%EC%8A%A4+%EB%B0%94%EC%9D%B4+%EC%A7%84%EC%A0%80+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "진저 팜 키친": {
        photos: ["/images/chiang-mai/info/restaurants/ginger-farm-kitchen-chiang-mai.png"],
        summary: "GINGER FARM kitchen at ONENIMMAN Chiangmai 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["태국식 팜투테이블", "평점 4.3", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "태국식 팜투테이블", items: [{ name: "대표 메뉴", price: "฿250~800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.gingerfarmkitchen.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2051551831623895628", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%84%EC%A0%80+%ED%8C%9C+%ED%82%A4%EC%B9%9C+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리버사이드 바 앤 레스토랑": {
        photos: ["/images/chiang-mai/info/restaurants/riverside-bar-and-restaurant-chiang-mai.jpg"],
        summary: "리버사이드 바 & 레스토랑 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["강변 식사·라이브 음악", "평점 4.3", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "강변 식사·라이브 음악", items: [{ name: "대표 메뉴", price: "฿250~900", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 1:00; 화요일: 오전 11:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.theriversidechiangmai.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8621506123366533969", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C+%EB%B0%94+%EC%95%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "굿뷰 바 앤 레스토랑": {
        photos: ["/images/chiang-mai/info/restaurants/good-view-bar-and-restaurant-chiang-mai.jpg"],
        summary: "The Good View Bar & Restaurant 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["강변 식사·라이브 음악", "평점 4.3", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "강변 식사·라이브 음악", items: [{ name: "대표 메뉴", price: "฿250~900", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00 ~ 오전 1:00; 화요일: 오후 5:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.goodview.co.th/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=695826155511633878", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%BF%EB%B7%B0+%EB%B0%94+%EC%95%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우 카페": {
        photos: ["/images/chiang-mai/info/restaurants/woo-cafe-art-gallery-lifestyle-shop-chiang-mai.jpg"],
        summary: "우카페 아트갤러리 라이프스타일샵 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["브런치·디저트", "평점 4.5", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "브런치·디저트", items: [{ name: "대표 메뉴", price: "฿180~600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~10:00; 화요일: 오후 12:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1559368155597483581", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0+%EC%B9%B4%ED%8E%98+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그래프 카페": {
        photos: ["/images/chiang-mai/info/restaurants/graph-cafe-chiang-mai.jpg"],
        summary: "GRAPH ground 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["커피·디저트", "평점 4.7", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커피·디저트", items: [{ name: "대표 메뉴", price: "฿100~300", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.graphcoffeeco.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16590211772926660205", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%98%ED%94%84+%EC%B9%B4%ED%8E%98+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아카 아마 커피": {
        photos: ["/images/chiang-mai/info/restaurants/akha-ama-coffee-chiang-mai.jpg"],
        summary: "카페 아카 아마 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로컬 커피", "평점 4.6", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로컬 커피", items: [{ name: "대표 메뉴", price: "฿80~250", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.akhaamacoffee.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4800936117945047878", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%B9%B4+%EC%95%84%EB%A7%88+%EC%BB%A4%ED%94%BC+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리스트레토": {
        photos: ["/images/chiang-mai/info/restaurants/ristr8to-chiang-mai.jpg"],
        summary: "Ristr8to Original 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["라떼아트·커피", "평점 4.6", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "라떼아트·커피", items: [{ name: "대표 메뉴", price: "฿100~300", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 5:30; 화요일: 오전 7:00 ~ 오후 5:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/Ristr8to/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2895210237033690735", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%8A%A4%ED%8A%B8%EB%A0%88%ED%86%A0+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "펀 포레스트 카페": {
        photos: ["/images/chiang-mai/info/restaurants/fern-forest-cafe-chiang-mai.jpg"],
        summary: "펀 포레스트 카페 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["브런치·케이크", "평점 4.4", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "브런치·케이크", items: [{ name: "대표 메뉴", price: "฿150~500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://web.facebook.com/FernForestCafe/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15820818624008512700", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%80+%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8+%EC%B9%B4%ED%8E%98+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "프리버드 카페": {
        photos: ["/images/chiang-mai/info/restaurants/free-bird-cafe-chiang-mai.jpg"],
        summary: "Free Bird Cafe CNX Donation Center and Thrift Store 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["비건 브런치", "평점 4.6", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "비건 브런치", items: [{ name: "대표 메뉴", price: "฿150~450", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 9:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/FreeBirdCafe", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15255638799051525595", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EB%A6%AC%EB%B2%84%EB%93%9C+%EC%B9%B4%ED%8E%98+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "데이비드 키친": {
        photos: ["/images/chiang-mai/info/restaurants/david-s-kitchen-chiang-mai.jpg"],
        summary: "David's Kitchen at 909 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["파인다이닝", "평점 4.7", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "파인다이닝", items: [{ name: "대표 메뉴", price: "฿800~2500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16051491419805697356", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%B0%EC%9D%B4%EB%B9%84%EB%93%9C+%ED%82%A4%EC%B9%9C+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "옥시젠 다이닝룸": {
        photos: ["/images/chiang-mai/info/restaurants/oxygen-dining-room-chiang-mai.jpg"],
        summary: "Oxygen Dining Room 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["코스 요리", "평점 4.4", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "코스 요리", items: [{ name: "대표 메뉴", price: "฿1200~3500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://crosschiangmairiverside.com/dine", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15169081135404265659", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A5%EC%8B%9C%EC%A0%A0+%EB%8B%A4%EC%9D%B4%EB%8B%9D%EB%A3%B8+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "단테와다": {
        photos: ["/images/chiang-mai/info/restaurants/dantewada-chiang-mai.jpg"],
        summary: "매림 근교 동선에서 자주 묶이는 폭포 정원형 카페·테마 공간입니다.",
        updatedAt: "2026-07-22",
        highlights: ["폭포 정원 포토스팟", "가족·커플 근교 코스에 적합", "단테와다 카페 동선"],
        tips: ["시내에서 거리가 있어 차량 이동 코스와 묶는 편이 좋습니다.", "사진 촬영 목적이면 밝은 시간대 방문이 좋습니다."],
        reservation: { required: false, method: "단체 방문은 사전 확인 권장" },
        menu: { signature: "카페·디저트·간단 식사", items: [{ name: "대표 메뉴", price: "฿100~500", note: "메뉴와 가격은 현장 기준 변동 가능" }] },
        hours: "방문 전 운영시간 확인 권장",
        waitTime: "주말·피크타임 혼잡 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/104346961421347/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Dantewada%20Chiang%20Mai&query_place_id=ChIJEf2-gm8R2jARBALXYKKmJUU", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A8%ED%85%8C%EC%99%80%EB%8B%A4%20%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
