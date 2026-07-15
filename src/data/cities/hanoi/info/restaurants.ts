import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "퍼 지아쭈옌 밧단": {
        photos: ["/images/hanoi/info/restaurants/pho-gia-truyen-bat-dan-hanoi.jpg"],
        summary: "Phở Gia Truyền Bát Sứ 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 3.8", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 10:00; 화요일: 오전 7:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17606292718370015831", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8D%BC+%EC%A7%80%EC%95%84%EC%AD%88%EC%98%8C+%EB%B0%A7%EB%8B%A8+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "퍼틴 로득": {
        photos: ["/images/hanoi/info/restaurants/pho-thin-lo-duc-hanoi.jpg"],
        summary: "Phở Thìn Bờ Hồ 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.6", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 2:00, 오후 5:00~10:00; 화요일: 오전 6:00 ~ 오후 2:00, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.phothin1955.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7558139898229081554", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8D%BC%ED%8B%B4+%EB%A1%9C%EB%93%9D+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "분짜 흐엉리엔": {
        photos: ["/images/hanoi/info/restaurants/bun-cha-huong-lien-hanoi.jpg"],
        summary: "분짜 흐엉리엔(오바마 분짜) 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.1", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://facebook.com/bunchahuonglienobama", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9108413969528951015", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%84%EC%A7%9C+%ED%9D%90%EC%97%89%EB%A6%AC%EC%97%94+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "분짜 닥킴": {
        photos: ["/images/hanoi/info/restaurants/bun-cha-dac-kim-hanoi.jpg"],
        summary: "분짜닥킴 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 8:30; 화요일: 오전 9:00 ~ 오후 8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://bunchahangmanh.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18019269160087734551", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%84%EC%A7%9C+%EB%8B%A5%ED%82%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "짜까 라봉": {
        photos: ["/images/hanoi/info/restaurants/cha-ca-la-vong-hanoi.jpg"],
        summary: "Nhà hàng Chả cá HỀ (Hanoi La Vong Fish Restaurant) 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.9", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 2:00, 오후 5:00~10:30; 화요일: 오전 10:00 ~ 오후 2:00, 오후 5:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18161483929440158736", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%9C%EA%B9%8C+%EB%9D%BC%EB%B4%89+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반미25": {
        photos: ["/images/hanoi/info/restaurants/banh-mi-25-hanoi.jpg"],
        summary: "반미 25 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.5", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 9:00; 화요일: 오전 7:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.banhmi25.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17004396853142544051", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%EB%AF%B825+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "분보남보 바익프엉": {
        photos: ["/images/hanoi/info/restaurants/bun-bo-nam-bo-bach-phuong-hanoi.jpg"],
        summary: "분보남보백프응 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.5", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 10:30; 화요일: 오전 7:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/BachPhuongBBNB/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2645516167315393779", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%84%EB%B3%B4%EB%82%A8%EB%B3%B4+%EB%B0%94%EC%9D%B5%ED%94%84%EC%97%89+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "꽌안응온 하노이": {
        photos: ["/images/hanoi/info/restaurants/quan-an-ngon-hanoi.jpg"],
        summary: "Quán Ngon Phố Cổ 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.5", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 12:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10099111358517264582", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%BD%8C%EC%95%88%EC%9D%91%EC%98%A8+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마담 히엔": {
        photos: ["/images/hanoi/info/restaurants/madame-hien-hanoi.jpg"],
        summary: "마담 히엔 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.3", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11906059963101605364", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%8B%B4+%ED%9E%88%EC%97%94+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "홈 하노이 레스토랑": {
        photos: ["/images/hanoi/info/restaurants/home-hanoi-restaurant.jpg"],
        summary: "HOME Hanoi - HOME Vietnamese Restaurant 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.6", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 1:30, 오후 5:30~9:30; 화요일: 오전 11:00 ~ 오후 1:30, 오후 5:30~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://homevietnameserestaurants.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4668035241847581460", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%88+%ED%95%98%EB%85%B8%EC%9D%B4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "즈엉 다이닝 하노이": {
        photos: ["/images/hanoi/info/restaurants/duong-dining-hanoi.jpg"],
        summary: "Duong's 2 Restaurant & Cooking Class 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.6", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://duongs2restaurant.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11288374526454881769", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A6%88%EC%97%89+%EB%8B%A4%EC%9D%B4%EB%8B%9D+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하노이 소셜 클럽": {
        photos: ["/images/hanoi/info/restaurants/the-hanoi-social-club.png"],
        summary: "하노이소셜클럽 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.4", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.facebook.com/TheHanoiSocialClub", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7008554752374129769", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%85%B8%EC%9D%B4+%EC%86%8C%EC%85%9C+%ED%81%B4%EB%9F%BD+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "에센스 레스토랑 하노이": {
        photos: ["/images/hanoi/info/restaurants/essence-restaurant-hanoi.jpg"],
        summary: "Essence Restaurant 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.8", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30~10:00, 오전 11:30 ~ 오후 10:00; 화요일: 오전 6:30~10:00, 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.essencedining.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2940508784920936023", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EC%84%BC%EC%8A%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "홍호아이 레스토랑": {
        photos: ["/images/hanoi/info/restaurants/hong-hoai-restaurant-hanoi.jpg"],
        summary: "Hong Hoai's Restaurant 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.9", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://honghoaisrestaurant.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5051223794725005124", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%8D%ED%98%B8%EC%95%84%EC%9D%B4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "뉴데이 레스토랑": {
        photos: ["/images/hanoi/info/restaurants/new-day-restaurant-hanoi.jpg"],
        summary: "뉴데이 레스토랑 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.3", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오전 12:00; 화요일: 오전 10:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://newdayrestaurant.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6599253316940886286", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%89%B4%EB%8D%B0%EC%9D%B4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그린 탠저린 하노이": {
        photos: ["/images/hanoi/info/restaurants/green-tangerine-hanoi.jpg"],
        summary: "호안끼엠 올드쿼터에서 즐기는 품격 있는 미식 경험.",
        updatedAt: "2026-07-15",
        highlights: ["정갈한 플레이팅", "현지 식재료를 활용한 고급스러운 맛"],
        tips: ["인기 메뉴는 예약 권장", "분위기가 좋아 데이트 코스로 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://gourmetcornerrestaurant.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18131845730192019958", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%A6%B0+%ED%83%A0%EC%A0%80%EB%A6%B0+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "피자 포피스 짱띠엔": {
        photos: ["/images/hanoi/info/restaurants/pizza-4p-s-trang-tien-hanoi.jpg"],
        summary: "하노이 여행객들의 필수 코스, 인생 부라타 치즈 피자를 만날 수 있는 곳.",
        updatedAt: "2026-07-15",
        highlights: ["신선한 부라타 치즈", "화덕에서 갓 구운 도우"],
        tips: ["웨이팅이 길 수 있으니 미리 예약하세요", "치즈가 풍부한 메뉴 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://pizza4ps.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5131812692215048660", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EC%9E%90+%ED%8F%AC%ED%94%BC%EC%8A%A4+%EC%A7%B1%EB%9D%A0%EC%97%94+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라 바디안 하노이": {
        photos: ["/images/hanoi/info/restaurants/la-badiane-hanoi.jpg"],
        summary: "프랑스 감성이 느껴지는 세련된 분위기의 비스트로.",
        updatedAt: "2026-07-15",
        highlights: ["프렌치 스타일의 정교한 요리", "차분하고 고급스러운 인테리어"],
        tips: ["특별한 날 저녁 식사 장소로 제격", "와인과 함께 즐기기 좋음"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 1:30, 오후 6:00~9:30; 화요일: 오전 11:30 ~ 오후 1:30, 오후 6:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/labadiane/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15667276357159721298", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC+%EB%B0%94%EB%94%94%EC%95%88+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코토 반미에우": {
        photos: ["/images/hanoi/info/restaurants/koto-van-mieu-hanoi.jpg"],
        summary: "바삭한 반미와 베트남 현지 맛을 제대로 느낄 수 있는 곳.",
        updatedAt: "2026-07-15",
        highlights: ["겉바속촉의 정석인 반미", "현지 분위기 물씬 풍기는 식당"],
        tips: ["피크 타임에는 웨이팅이 있을 수 있으니 서두르세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.koto.com.au/kotovanmieu", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6142418830418093111", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%ED%86%A0+%EB%B0%98%EB%AF%B8%EC%97%90%EC%9A%B0+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카페 지앙": {
        photos: ["/images/hanoi/info/restaurants/cafe-giang-hanoi.jpg"],
        summary: "하노이 에그 커피의 원조를 맛볼 수 있는 상징적인 카페.",
        updatedAt: "2026-07-15",
        highlights: ["부드럽고 달콤한 에그 크림", "하노이 여행 필수 코스"],
        tips: ["좁은 골목 안쪽에 있으니 지도를 잘 확인하고 찾아가세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 10:30; 화요일: 오전 7:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://cafegiang.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18204465083517399907", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%98+%EC%A7%80%EC%95%99+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카페 딘": {
        photos: ["/images/hanoi/info/restaurants/cafe-dinh-hanoi.jpg"],
        summary: "호안끼엠 호수 근처에서 즐기는 고즈넉한 분위기의 카페.",
        updatedAt: "2026-07-15",
        highlights: ["빈티지한 인테리어와 여유로운 분위기", "에그 커피 맛집"],
        tips: ["창가 자리에 앉으면 호수 근처의 정취를 느끼기 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 10:00; 화요일: 오전 7:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/DinhCafe13", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6370511525648623661", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%98+%EB%94%98+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "로딩 티 카페": {
        photos: ["/images/hanoi/info/restaurants/loading-t-cafe-hanoi.jpg"],
        summary: "프랑스식 빌라의 빈티지한 감성을 느낄 수 있는 고즈넉한 카페",
        updatedAt: "2026-07-15",
        highlights: ["고즈넉한 분위기", "감성적인 인테리어"],
        tips: ["창가 자리는 일찍 방문해야 확보 가능"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 6:00; 화요일: 오전 8:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.loadingtcafe.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10921402531793009654", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EB%94%A9+%ED%8B%B0+%EC%B9%B4%ED%8E%98+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "소파 카페 하노이": {
        photos: ["/images/hanoi/info/restaurants/xofa-cafe-hanoi.jpg"],
        summary: "이름처럼 편안한 소파에 기대어 여유를 즐기기 좋은 아늑한 공간",
        updatedAt: "2026-07-15",
        highlights: ["푹신한 소파 좌석", "여유로운 휴식 가능"],
        tips: ["책 읽거나 작업하며 오래 머물기 좋음"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/xofacafe", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7564375323875583922", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%8C%ED%8C%8C+%EC%B9%B4%ED%8E%98+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하노이 기찻길 카페": {
        photos: ["/images/hanoi/info/restaurants/hanoi-train-street-cafe.jpg"],
        summary: "실제 기차가 지나가는 길목에서 즐기는 짜릿하고 이색적인 뷰",
        updatedAt: "2026-07-15",
        highlights: ["스릴 넘치는 기차 풍경", "인생샷 명소"],
        tips: ["기차 통과 시간을 미리 확인하고 방문할 것"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/Cafe61TrainSt.Hanoi/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10368548910055777819", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%85%B8%EC%9D%B4+%EA%B8%B0%EC%B0%BB%EA%B8%B8+%EC%B9%B4%ED%8E%98+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "꽌 곡다": {
        photos: ["/images/hanoi/info/restaurants/quan-goc-da-hanoi.jpg"],
        summary: "Tiệm ăn Góc Sì Gòn 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.8", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~500k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:30 ~ 오후 2:00, 오후 5:30~9:30; 화요일: 오전 9:30 ~ 오후 2:00, 오후 5:30~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6090544932405905821", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%BD%8C+%EA%B3%A1%EB%8B%A4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
