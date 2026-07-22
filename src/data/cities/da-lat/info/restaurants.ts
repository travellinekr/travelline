import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "라우가 라에": {
        photos: ["/images/da-lat/info/restaurants/lau-ga-la-e-da-lat.jpg"],
        summary: "Lẩu Gà Lá É 668 - Gà nướng lu, quán ăn ngon, đặc sản uy tín nên ghé đến tại Đà Lạt 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["닭전골·라에잎", "평점 5", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "닭전골·라에잎", items: [{ name: "대표 메뉴", price: "₫100,000~350,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/KIMHOANG.TR/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=486464298731601625", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%9A%B0%EA%B0%80+%EB%9D%BC%EC%97%90+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반깐 레": {
        photos: ["/images/da-lat/info/restaurants/banh-can-le-da-lat.jpg"],
        summary: "Bánh Căn Cô Lệ Batoa Đà Lạt 1997 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["반깐", "평점 4.8", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "반깐", items: [{ name: "대표 메뉴", price: "₫40,000~120,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00~10:00; 화요일: 오전 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4225150347735647842", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%EA%B9%90+%EB%A0%88+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반미 씨우마이 황지우": {
        photos: ["/images/da-lat/info/restaurants/banh-mi-xiu-mai-hoang-dieu-da-lat.jpg"],
        summary: "Bánh Mì Xíu Mại Phúc Hân - Hoàng Diệu 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["씨우마이 반미", "평점 4.3", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "씨우마이 반미", items: [{ name: "대표 메뉴", price: "₫30,000~100,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00~11:30, 오후 3:00~7:30; 화요일: 오전 6:00~11:30, 오후 3:00~7:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9975957100578821300", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%EB%AF%B8+%EC%94%A8%EC%9A%B0%EB%A7%88%EC%9D%B4+%ED%99%A9%EC%A7%80%EC%9A%B0+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "넴느엉 중록": {
        photos: ["/images/da-lat/info/restaurants/nem-nuong-dung-loc-da-lat.jpg"],
        summary: "Nem nướng Dũng Lộc 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["넴느엉", "평점 4.5", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "넴느엉", items: [{ name: "대표 메뉴", price: "₫60,000~180,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7771178577332241909", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%84%B4%EB%8A%90%EC%97%89+%EC%A4%91%EB%A1%9D+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "넴느엉 바흥": {
        photos: ["/images/da-lat/info/restaurants/nem-nuong-ba-hung-da-lat.jpg"],
        summary: "Nem nướng Bà Hùng Trại Mát 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["넴느엉", "평점 4.3", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "넴느엉", items: [{ name: "대표 메뉴", price: "₫60,000~200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 8:30; 화요일: 오전 11:00 ~ 오후 8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10944348539991445066", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%84%B4%EB%8A%90%EC%97%89+%EB%B0%94%ED%9D%A5+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리엔호아 베이커리": {
        photos: ["/images/da-lat/info/restaurants/lien-hoa-bakery-da-lat.jpg"],
        summary: "리엔 호아 베이커리 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["빵·반미·간단식", "평점 4.1", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "빵·반미·간단식", items: [{ name: "대표 메뉴", price: "₫40,000~180,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 5:00 ~ 오전 12:00; 화요일: 오전 5:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://banhmilienhoa1987.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10796910706616996533", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%97%94%ED%98%B8%EC%95%84+%EB%B2%A0%EC%9D%B4%EC%BB%A4%EB%A6%AC+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "안 카페": {
        photos: ["/images/da-lat/info/restaurants/an-cafe-da-lat.jpg"],
        summary: "An - Tuyền Lâm 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["브런치·커피", "평점 4.7", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "브런치·커피", items: [{ name: "대표 메뉴", price: "₫80,000~250,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 7:00; 화요일: 오전 8:00 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2575432770828521116", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%88+%EC%B9%B4%ED%8E%98+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라비엣 커피": {
        photos: ["/images/da-lat/info/restaurants/la-viet-coffee-da-lat.jpg"],
        summary: "La Viet Coffee 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["달랏 커피", "평점 4.5", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "달랏 커피", items: [{ name: "대표 메뉴", price: "₫60,000~200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 10:00; 화요일: 오전 7:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.laviet.coffee/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7628271052339420736", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%B9%84%EC%97%A3+%EC%BB%A4%ED%94%BC+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "메린 커피 가든": {
        photos: ["/images/da-lat/info/restaurants/me-linh-coffee-garden-da-lat.jpg"],
        summary: "메린커피농장 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["커피 농장·전망", "평점 4.1", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커피 농장·전망", items: [{ name: "대표 메뉴", price: "₫70,000~250,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 5:00; 화요일: 오전 7:30 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://melinhcoffeegarden.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10903860802514097433", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EB%A6%B0+%EC%BB%A4%ED%94%BC+%EA%B0%80%EB%93%A0+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "째오 베오 카페": {
        photos: ["/images/da-lat/info/restaurants/tiem-ca-phe-cheo-veooo-da-lat.jpg"],
        summary: "카페 Cheo veooo 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["언덕 전망·커피", "평점 4.6", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "언덕 전망·커피", items: [{ name: "대표 메뉴", price: "₫60,000~200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 8:00; 화요일: 오전 7:30 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/cheoveooo/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10425634839311897508", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%B8%EC%98%A4+%EB%B2%A0%EC%98%A4+%EC%B9%B4%ED%8E%98+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "곡하탄 레스토랑": {
        photos: ["/images/da-lat/info/restaurants/goc-ha-thanh-restaurant-da-lat.jpg"],
        summary: "Goc ha thanh 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["베트남 가정식", "평점 4.4", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 가정식", items: [{ name: "대표 메뉴", price: "₫120,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 9:30; 화요일: 오전 11:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12440649533007388096", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A1%ED%95%98%ED%83%84+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아티스트 앨리": {
        photos: ["/images/da-lat/info/restaurants/artist-alley-restaurant-da-lat.jpg"],
        summary: "내가 가본곳 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스테이크·와인", "평점 4.5", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스테이크·와인", items: [{ name: "대표 메뉴", price: "₫250,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 8:30; 화요일: 오전 11:00 ~ 오후 8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17431194613657682186", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%ED%8B%B0%EC%8A%A4%ED%8A%B8+%EC%95%A8%EB%A6%AC+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "르 샬레 달랏": {
        photos: ["/images/da-lat/info/restaurants/le-chalet-dalat.jpg"],
        summary: "Le Chalet Dalat 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["브런치·가정식", "평점 4.4", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "브런치·가정식", items: [{ name: "대표 메뉴", price: "₫150,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/lechaletdalatbistro", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5298328933156529389", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A5%B4+%EC%83%AC%EB%A0%88+%EB%8B%AC%EB%9E%8F+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "가네쉬 인디안 달랏": {
        photos: ["/images/da-lat/info/restaurants/ganesh-indian-restaurant-da-lat.jpg"],
        summary: "SHREE GANESHA INDIAN RESTAURANT 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["커리·난", "평점 4.9", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커리·난", items: [{ name: "대표 메뉴", price: "₫180,000~600,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2123724749915102163", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%80%EB%84%A4%EC%89%AC+%EC%9D%B8%EB%94%94%EC%95%88+%EB%8B%AC%EB%9E%8F+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "응옥하이 식당": {
        photos: ["/images/da-lat/info/restaurants/nha-hang-ngoc-hai-da-lat.jpg"],
        summary: "Nhà hàng Như Ngọc (Cơm niêu Như Ngọc) 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로컬 식사", "평점 4.1", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로컬 식사", items: [{ name: "대표 메뉴", price: "₫80,000~300,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:30 ~ 오후 9:00; 화요일: 오전 10:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11566941384208092997", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%91%EC%98%A5%ED%95%98%EC%9D%B4+%EC%8B%9D%EB%8B%B9+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "꾸안느엉 쭈": {
        photos: ["/images/da-lat/info/restaurants/quan-nuong-chu-da-lat.jpg"],
        summary: "Nậm Nướng Đà Lạt 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["달랏식 구이", "평점 4.9", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "달랏식 구이", items: [{ name: "대표 메뉴", price: "₫120,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00~11:00; 화요일: 오후 4:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/namnuongdalat", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9609338726734180995", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%BE%B8%EC%95%88%EB%8A%90%EC%97%89+%EC%AD%88+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "펑기 칭구 달랏": {
        photos: ["/images/da-lat/info/restaurants/fungi-chingu-da-lat.jpg"],
        summary: "Fungi Chingu Linh Sơn - Quán nướng Hàn Quốc 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["고기구이·한식", "평점 4.7", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "고기구이·한식", items: [{ name: "대표 메뉴", price: "₫180,000~600,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 1:45, 오후 5:00~9:30; 화요일: 오전 11:00 ~ 오후 1:45, 오후 5:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7130204887065249360", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%91%EA%B8%B0+%EC%B9%AD%EA%B5%AC+%EB%8B%AC%EB%9E%8F+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "캐럿 레스토랑": {
        photos: ["/images/da-lat/info/restaurants/carrot-restaurant-da-lat.jpg"],
        summary: "당근 레스토랑 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["가정식·브런치", "평점 4.2", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "가정식·브런치", items: [{ name: "대표 메뉴", price: "₫120,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~10:00; 화요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/Carotrestaurant/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16579524796081209815", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BA%90%EB%9F%BF+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "쫑동 레스토랑": {
        photos: ["/images/da-lat/info/restaurants/trong-dong-restaurant-da-lat.jpg"],
        summary: "SAGAR INDIAN CUISINE ĐÀ LẠT (HALAL FOOD) 사가르 인도 레스토랑 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["베트남 요리", "평점 4.9", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 요리", items: [{ name: "대표 메뉴", price: "₫150,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오후 2:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://lively-gumdrop-902a36.netlify.app/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4095039860272943450", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%AB%91%EB%8F%99+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "꾸안안 꾸득": {
        photos: ["/images/da-lat/info/restaurants/quan-an-cu-duc-da-lat.jpg"],
        summary: "Quán nướng ngói Cu Đức 기준으로 확인한 달랏 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로컬 전골·구이", "평점 3.8", "달랏 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로컬 전골·구이", items: [{ name: "대표 메뉴", price: "₫120,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/nuongngoicuduc/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15828614088724680640", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%BE%B8%EC%95%88%EC%95%88+%EA%BE%B8%EB%93%9D+%EB%8B%AC%EB%9E%8F+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },    "텅룽덴 카페": {
        photos: ["/images/da-lat/info/restaurants/thung-lung-den-coffee-da-lat.jpg"],
        summary: "야경과 계곡 전망을 함께 즐기는 달랏 외곽 감성 카페 겸 BBQ 레스토랑입니다.",
        updatedAt: "2026-07-22",
        highlights: ["Thung Lũng Đèn Coffee - BBQ 기준 Google Places 검증", "평점 4.2", "야경·카페 동선에 적합"],
        tips: ["외곽 언덕길 이동이 있어 그랩/차량 이동을 권장합니다.", "저녁 피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "성수기·단체 방문은 사전 확인 권장" },
        menu: { signature: "카페·BBQ", items: [{ name: "대표 메뉴", price: "₫50,000~250,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/place/?q=place_id:ChIJxXeB6mgTcTERDLE2SDp-jxY", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%85%EB%A3%BD%EB%8D%B4%20%EC%B9%B4%ED%8E%98%20%EB%8B%AC%EB%9E%8F%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    }
};

export default info;
