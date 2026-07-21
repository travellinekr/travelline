import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "호세 팡라오": {
        photos: ["/images/bohol/info/restaurants/jose-panglao-bohol.jpg"],
        summary: "신선한 해산물 그릴 요리와 다양한 로컬 메뉴를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["해산물 그릴 요리", "다양한 현지식 메뉴"],
        tips: ["신선한 해산물을 맛보려면 저녁 시간 방문을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 그릴과 로컬 메뉴", items: [{ name: "대표 메뉴", price: "₱300~900", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5846299744850792532", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%EC%84%B8+%ED%8C%A1%EB%9D%BC%EC%98%A4+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "차다 레스토 바": {
        photos: ["/images/bohol/info/restaurants/chada-resto-bar-panglao-bohol.jpg"],
        summary: "현지식과 그릴 메뉴가 조화를 이루는 맛있는 레스토 바입니다.",
        updatedAt: "2026-07-21",
        highlights: ["현지식 요리", "그릴 메뉴"],
        tips: ["여유로운 분위기에서 식사를 즐기기에 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "현지식과 그릴 메뉴", items: [{ name: "대표 메뉴", price: "₱250~800", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오전 12:00; 화요일: 오전 6:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=298090432844124580", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B0%A8%EB%8B%A4+%EB%A0%88%EC%8A%A4%ED%86%A0+%EB%B0%94+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "보홀 비 팜 레스토랑": {
        photos: ["/images/bohol/info/restaurants/bohol-bee-farm-restaurant-panglao.jpg"],
        summary: "유기농 식사와 맛있는 아이스크림을 즐길 수 있는 보홀의 대표적인 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 유기농 재료 사용", "수제 아이스크림"],
        tips: ["리조트와 함께 방문하여 여유로운 시간을 보내보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "유기농 식사와 아이스크림", items: [{ name: "대표 메뉴", price: "₱300~900", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 9:00; 화요일: 오전 6:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://boholbeefarm.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4557354415432807968", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%ED%99%80+%EB%B9%84+%ED%8C%9C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "제라르다스 패밀리 레스토랑": {
        photos: ["/images/bohol/info/restaurants/gerarda-s-family-restaurant-tagbilaran.jpg"],
        summary: "보홀 전통 방식의 가족 메뉴를 맛볼 수 있는 따뜻한 분위기의 식당입니다.",
        updatedAt: "2026-07-21",
        highlights: ["전통적인 보홀식 요리", "가족 친화적인 분위기"],
        tips: ["현지 스타일의 풍성한 식사를 원할 때 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "보홀식 가족 메뉴", items: [{ name: "대표 메뉴", price: "₱250~800", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.facebook.com/gerardasresto", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6644010126520569491", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%9C%EB%9D%BC%EB%A5%B4%EB%8B%A4%EC%8A%A4+%ED%8C%A8%EB%B0%80%EB%A6%AC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "파약 레스토랑": {
        photos: ["/images/bohol/info/restaurants/payag-restaurant-tagbilaran-bohol.jpg"],
        summary: "치킨과 다양한 로컬 메뉴를 즐길 수 있는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["맛있는 치킨 요리", "다양한 현지식 메뉴"],
        tips: ["메인 지점을 방문하는 것이 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "치킨·로컬 메뉴", items: [{ name: "대표 메뉴", price: "₱200~700", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/pages/Payag-Restaurant-Bohol/231929530244537", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17662637577896210879", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%EC%95%BD+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "더 프론 팜": {
        photos: ["/images/bohol/info/restaurants/the-prawn-farm-bohol.jpg"],
        summary: "신선한 새우와 해산물 요리를 전문으로 하는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 새우 요리", "풍성한 해산물 메뉴"],
        tips: ["해산물을 좋아한다면 꼭 방문해보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "새우·해산물 요리", items: [{ name: "대표 메뉴", price: "₱300~1000", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16371806046428795472", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%94%84%EB%A1%A0+%ED%8C%9C+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "치킨 아티아티한 보홀": {
        photos: ["/images/bohol/info/restaurants/chicken-ati-atihan-bohol.jpg"],
        summary: "그릴 치킨을 전문으로 하는 맛있는 치킨 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["풍미 가득한 그릴 치킨", "현지 분위기를 느낄 수 있는 식사"],
        tips: ["갓 구운 치킨의 육즙을 즐겨보세요"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "그릴 치킨", items: [{ name: "대표 메뉴", price: "₱150~600", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13511411462883785019", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%98%ED%82%A8+%EC%95%84%ED%8B%B0%EC%95%84%ED%8B%B0%ED%95%9C+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "주세페 피자리아 보홀": {
        photos: ["/images/bohol/info/restaurants/giuseppe-pizzeria-and-sicilian-roast-bohol.jpg"],
        summary: "피자와 파스타를 전문으로 하는 맛있는 이탈리안 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 피자", "정통 스타일의 파스타"],
        tips: ["알로나 비치 근처라 접근성이 좋습니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "피자·파스타", items: [{ name: "대표 메뉴", price: "₱400~1200", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/GiuseppeBohol", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1897723684586414261", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A3%BC%EC%84%B8%ED%8E%98+%ED%94%BC%EC%9E%90%EB%A6%AC%EC%95%84+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "토토 에 페피노": {
        photos: ["/images/bohol/info/restaurants/toto-e-peppino-bohol.jpg"],
        summary: "맛있는 피자와 파스타를 즐길 수 있는 보홀의 인기 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["화덕에서 구운 맛있는 피자", "다양한 종류의 파스타"],
        tips: ["인기가 많으니 미리 예약하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "피자·파스타", items: [{ name: "대표 메뉴", price: "₱400~1200", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:30; 화요일: 오전 10:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3694257183718508832", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%A0%ED%86%A0+%EC%97%90+%ED%8E%98%ED%94%BC%EB%85%B8+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "바우 보홀": {
        photos: ["/images/bohol/info/restaurants/barwoo-bohol.jpg"],
        summary: "창의적인 아시안 메뉴를 선보이는 독특한 분위기의 식당입니다.",
        updatedAt: "2026-07-21",
        highlights: ["독창적인 아시안 퓨전 요리", "높은 고객 만족도"],
        tips: ["메뉴가 다양하므로 인기 메뉴를 미리 확인해보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "창의적인 아시안 메뉴", items: [{ name: "대표 메뉴", price: "₱400~1200", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 12:00~2:45, 오후 5:00~9:00; 화요일: 오후 12:00~2:45, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://instagram.com/barwoo_bohol", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16643412945579230955", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%9A%B0+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "라모이 레스토랑 팡라오": {
        photos: ["/images/bohol/info/restaurants/lamoy-restaurant-panglao.jpg"],
        summary: "알로나 비치 인근에서 신선한 해산물과 로컬 메뉴를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 해산물 요리", "알로나 인근의 편리한 위치"],
        tips: ["알로나 비치 근처 여행객에게 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "알로나 인근 로컬 메뉴", items: [{ name: "대표 메뉴", price: "₱250~900", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/lamoyrestaurant/?ref=py_c", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16887261433687072593", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%AA%A8%EC%9D%B4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%8C%A1%EB%9D%BC%EC%98%A4+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "시사 비스트로 보홀": {
        photos: ["/images/bohol/info/restaurants/sisa-bistro-bohol.png"],
        summary: "모던하게 재해석된 필리핀 전통 음식을 맛볼 수 있는 고품격 비스트로입니다.",
        updatedAt: "2026-07-21",
        highlights: ["세련된 모던 필리핀 메뉴", "높은 고객 만족도"],
        tips: ["특별한 저녁 식사를 위해 예약 후 방문하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "모던 필리핀 메뉴", items: [{ name: "대표 메뉴", price: "₱500~1500", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15196645253493348100", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EC%82%AC+%EB%B9%84%EC%8A%A4%ED%8A%B8%EB%A1%9C+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "미스트 팡라오": {
        photos: ["/images/bohol/info/restaurants/mist-panglao-bohol.jpg"],
        summary: "브런치와 커피를 즐기기 좋은 미스트 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["맛있는 브런치 메뉴", "향긋한 커피"],
        tips: ["여유로운 아침 식사로 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "브런치와 커피", items: [{ name: "대표 메뉴", price: "₱250~800", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:30 ~ 오후 10:00; 화요일: 오전 10:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://facebook.com/mistbohol", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16195274508880548442", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%8A%A4%ED%8A%B8+%ED%8C%A1%EB%9D%BC%EC%98%A4+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "오버그로운 카페 보홀": {
        photos: ["/images/bohol/info/restaurants/overgrown-cafe-bohol.jpg"],
        summary: "다양한 카페 메뉴와 디저트를 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다채로운 디저트", "훌륭한 카페 메뉴"],
        tips: ["디저트와 함께 여유를 즐겨보세요"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "카페 메뉴와 디저트", items: [{ name: "대표 메뉴", price: "₱250~800", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 10:00; 화요일: 오전 6:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=100088550370554", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12098589488626258028", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%B2%84%EA%B7%B8%EB%A1%9C%EC%9A%B4+%EC%B9%B4%ED%8E%98+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "샤카 보홀": {
        photos: ["/images/bohol/info/restaurants/shaka-bohol-panglao.jpg"],
        summary: "신선한 재료를 사용한 스무디볼과 건강식을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 스무디볼", "건강하고 신선한 메뉴"],
        tips: ["아침 식사나 가벼운 브런치로 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스무디볼·건강식", items: [{ name: "대표 메뉴", price: "₱250~700", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2786802709794470325", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%A4%EC%B9%B4+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "아이시스 타이 레스토랑 팡라오": {
        photos: ["/images/bohol/info/restaurants/isis-thai-restaurant-panglao-bohol.jpg"],
        summary: "해변에서 맛있는 타이 커리와 식사를 즐길 수 있는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["맛있는 타이 커리", "낭만적인 해변 분위기"],
        tips: ["해변가 좌석을 예약하면 더욱 좋습니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "타이 커리와 해변 식사", items: [{ name: "대표 메뉴", price: "₱300~900", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 9:00; 화요일: 오전 8:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3434860477218969745", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9D%B4%EC%8B%9C%EC%8A%A4+%ED%83%80%EC%9D%B4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%8C%A1%EB%9D%BC%EC%98%A4+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "루나 로사 보홀": {
        photos: ["/images/bohol/info/restaurants/luna-rossa-vegetarian-italian-restaurant-bohol.jpg"],
        summary: "보홀에서 즐길 수 있는 맛있는 채식 이탈리안 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["채식 전문 이탈리안 요리", "신선한 재료 사용"],
        tips: ["채식주의자에게 강력 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "채식 이탈리안", items: [{ name: "대표 메뉴", price: "₱350~1000", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6245918136146261366", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A3%A8%EB%82%98+%EB%A1%9C%EC%82%AC+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "펄 레스토랑 리나우 비치": {
        photos: ["/images/bohol/info/restaurants/linaw-beach-resort-pearl-restaurant-panglao.jpg"],
        summary: "리나우 비치의 아름다운 해변을 배경으로 식사할 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["해변 리조트 분위기", "환상적인 오션뷰"],
        tips: ["해질녘 시간에 맞춰 방문하는 것을 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해변 리조트 식사", items: [{ name: "대표 메뉴", price: "₱400~1200", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 11:00; 화요일: 오전 6:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2593479953615713091", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%84+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%A6%AC%EB%82%98%EC%9A%B0+%EB%B9%84%EC%B9%98+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "파프리카 레스토랑 보홀": {
        photos: ["/images/bohol/info/restaurants/paprika-restaurant-bohol.jpg"],
        summary: "아름다운 전망을 즐기며 식사할 수 있는 고급 다이닝 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["탁 트인 전망", "고급스러운 분위기"],
        tips: ["전망 좋은 좌석을 위해 미리 예약하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "전망 좋은 고급 다이닝", items: [{ name: "대표 메뉴", price: "₱600~2000", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 9:00; 화요일: 오전 7:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13403825968774168223", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%ED%94%84%EB%A6%AC%EC%B9%B4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "우베코 보홀": {
        photos: ["/images/bohol/info/restaurants/ubeco-bohol.jpg"],
        summary: "맛있는 우베 디저트와 향긋한 커피를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["대표 메뉴 우베 디저트", "훌륭한 커피 맛"],
        tips: ["디저트 메뉴는 인기가 많으니 꼭 주문해 보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "우베 디저트와 커피", items: [{ name: "대표 메뉴", price: "₱200~700", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.ubeco-bohol.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13290267104890756607", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%B2%A0%EC%BD%94+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
