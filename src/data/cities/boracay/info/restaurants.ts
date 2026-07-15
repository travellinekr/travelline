import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "도스 메스티조스": {
        photos: ["/images/boracay/info/restaurants/dos-mestizos-boracay.jpg"],
        summary: "스테이션 1에서 즐기는 정통 스페인 요리 맛집",
        updatedAt: "2026-07-15",
        highlights: ["파에야", "타파스"],
        tips: ["저녁 시간엔 웨이팅이 있을 수 있으니 예약 권장"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.dosmestizos.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16994185589636726627", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%8A%A4+%EB%A9%94%EC%8A%A4%ED%8B%B0%EC%A1%B0%EC%8A%A4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "써니 사이드 카페": {
        photos: ["/images/boracay/info/restaurants/sunny-side-cafe-boracay.jpg"],
        summary: "화이트 비치 산책 중 들르기 좋은 브런치 명소",
        updatedAt: "2026-07-15",
        highlights: ["에그 베네딕트", "프렌치 토스트"],
        tips: ["아침 식사나 가벼운 브런치로 강력 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 7:00; 화요일: 오전 7:00 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4002496207231564011", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8D%A8%EB%8B%88+%EC%82%AC%EC%9D%B4%EB%93%9C+%EC%B9%B4%ED%8E%98+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "노니스 레스토랑": {
        photos: ["/images/boracay/info/restaurants/nonie-s-restaurant-boracay.jpg"],
        summary: "스테이션 3 해변가에서 맛보는 신선한 건강식",
        updatedAt: "2026-07-15",
        highlights: ["로컬 재료 요리", "신선한 샐러드"],
        tips: ["해변 분위기를 느끼며 여유롭게 식사하기 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.nonies.com.ph/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15156440574100804288", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%B8%EB%8B%88%EC%8A%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "로스 인디오스 브라보스": {
        photos: ["/images/boracay/info/restaurants/los-indios-bravos-boracay.jpg"],
        summary: "보라카이에서 즐기는 정통 스페인풍 요리의 매력",
        updatedAt: "2026-07-15",
        highlights: ["스페인 스타일의 풍미 가득한 메뉴", "분위기 좋은 식사 공간"],
        tips: ["저녁 시간엔 예약하고 방문하는 것을 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.losindiosbravos.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10803145551493125693", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EC%8A%A4+%EC%9D%B8%EB%94%94%EC%98%A4%EC%8A%A4+%EB%B8%8C%EB%9D%BC%EB%B3%B4%EC%8A%A4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "프라나 레스토랑": {
        photos: ["/images/boracay/info/restaurants/prana-restaurant-boracay.jpg"],
        summary: "평점 5점이 증명하는 스테이션 3의 숨은 맛집",
        updatedAt: "2026-07-15",
        highlights: ["최고의 맛과 서비스", "건강하고 신선한 재료 사용"],
        tips: ["조용한 분위기를 원한다면 스테이션 3 쪽을 공략하세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00~10:00, 오후 12:00~3:00, 오후 6:00~8:00; 화요일: 오전 7:00~10:00, 오후 12:00~3:00, 오후 6:00~8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15147286895914916694", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EB%9D%BC%EB%82%98+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "레모니 카페": {
        photos: ["/images/boracay/info/restaurants/lemoni-cafe-boracay.jpg"],
        summary: "디몰 근처에서 즐기는 상큼하고 여유로운 브런치 타임",
        updatedAt: "2026-07-15",
        highlights: ["상큼한 레몬 테마의 인테리어", "가볍게 즐기기 좋은 메뉴"],
        tips: ["디몰 쇼핑 후 쉬어가기 딱 좋은 위치예요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 11:00; 화요일: 오전 7:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2314321907897814943", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%88%EB%AA%A8%EB%8B%88+%EC%B9%B4%ED%8E%98+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아리아 쿠치나 이탈리아나": {
        photos: ["/images/boracay/info/restaurants/aria-cucina-italiana-boracay.jpg"],
        summary: "Aria Restaurant 기준으로 확인한 보라카이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.1", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오전 12:00; 화요일: 오전 10:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.aria.com.ph/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13722739286644736051", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%A6%AC%EC%95%84+%EC%BF%A0%EC%B9%98%EB%82%98+%EC%9D%B4%ED%83%88%EB%A6%AC%EC%95%84%EB%82%98+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코코 마마": {
        photos: ["/images/boracay/info/restaurants/coco-mama-boracay.jpg"],
        summary: "Coco Mama 기준으로 확인한 보라카이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.4", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14846825099446069125", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EC%BD%94+%EB%A7%88%EB%A7%88+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "조나스 프룻쉐이크": {
        photos: ["/images/boracay/info/restaurants/jonah-s-fruit-shake-boracay.jpg"],
        summary: "Jonah's Fruit Shake & Snack Bar 기준으로 확인한 보라카이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.3", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://jonahsfruitshake.wordpress.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13898725863736896544", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A1%B0%EB%82%98%EC%8A%A4+%ED%94%84%EB%A3%BB%EC%89%90%EC%9D%B4%ED%81%AC+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리얼 커피 앤 티 카페": {
        photos: ["/images/boracay/info/restaurants/real-coffee-and-tea-cafe-boracay.jpg"],
        summary: "보라카이의 아침을 깨우는 달콤한 초콜릿 컵과 커피 맛집",
        updatedAt: "2026-07-15",
        highlights: ["달콤한 초콜릿 컵", "여유로운 카페 분위기"],
        tips: ["아침 식사 대용으로 가볍게 즐기기 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 7:00; 화요일: 오전 7:00 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/originalrealcoffeeandteacafe", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12854470674142319020", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%96%BC+%EC%BB%A4%ED%94%BC+%EC%95%A4+%ED%8B%B0+%EC%B9%B4%ED%8E%98+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스모크 레스토": {
        photos: ["/images/boracay/info/restaurants/smoke-resto-boracay.jpg"],
        summary: "현지 느낌 물씬 나는 합리적인 가격의 맛있는 바비큐 전문점",
        updatedAt: "2026-07-15",
        highlights: ["가성비 좋은 바비큐 메뉴", "현지 분위기 가득한 식당"],
        tips: ["웨이팅이 있을 수 있으니 피크 타임을 살짝 피해 방문하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 10:30; 화요일: 오전 7:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5115998073253497267", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EB%AA%A8%ED%81%AC+%EB%A0%88%EC%8A%A4%ED%86%A0+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스파이스버드": {
        photos: ["/images/boracay/info/restaurants/spicebird-boracay.jpg"],
        summary: "세련된 분위기에서 즐기는 풍미 가득한 퓨전 요리 맛집",
        updatedAt: "2026-07-15",
        highlights: ["감각적인 플레이팅", "다양한 향신료를 사용한 창의적인 메뉴"],
        tips: ["분위기가 좋아 데이트 코스로 강력 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 11:00; 화요일: 오전 7:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6242460294281879661", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%8C%8C%EC%9D%B4%EC%8A%A4%EB%B2%84%EB%93%9C+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "차차스 비치 카페": {
        photos: ["/images/boracay/info/restaurants/cha-cha-s-beach-cafe-boracay.jpg"],
        summary: "차차의 비치 카페 기준으로 확인한 보라카이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.2", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오전 12:00; 화요일: 오전 7:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18068479485949523524", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B0%A8%EC%B0%A8%EC%8A%A4+%EB%B9%84%EC%B9%98+%EC%B9%B4%ED%8E%98+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마야스 보라카이": {
        photos: ["/images/boracay/info/restaurants/mayas-filipino-and-mexican-cuisine-boracay.jpg"],
        summary: "Mayas Filipino & Mexican Cuisine 기준으로 확인한 보라카이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.5", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 10:00; 화요일: 오전 7:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.jonysbeachresortboracay.com/dining-experience", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1371718403372103572", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%95%BC%EC%8A%A4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 피그 아웃 비스트로": {
        photos: ["/images/boracay/info/restaurants/the-pig-out-bistro-boracay.jpg"],
        summary: "The Pig Out Bistro 기준으로 확인한 보라카이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.6", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 10:00; 화요일: 오전 7:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13683652297083564594", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%94%BC%EA%B7%B8+%EC%95%84%EC%9B%83+%EB%B9%84%EC%8A%A4%ED%8A%B8%EB%A1%9C+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "수보 보라카이": {
        photos: ["/images/boracay/info/restaurants/subo-boracay.jpg"],
        summary: "분위기 맛집으로 유명한 감성 식당",
        updatedAt: "2026-07-15",
        highlights: ["예쁜 플레이팅", "다양한 메뉴 구성"],
        tips: ["저녁엔 예약하고 방문하는 걸 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~11:00; 화요일: 오후 12:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://suboboracay.co/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8351988760781780150", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%98%EB%B3%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마마스 피시 하우스": {
        photos: ["/images/boracay/info/restaurants/mama-s-fish-house-boracay.jpg"],
        summary: "신선한 해산물을 가성비 있게 즐기는 곳",
        updatedAt: "2026-07-15",
        highlights: ["싱싱한 생선 요리", "로컬 느낌 물씬 나는 분위기"],
        tips: ["가볍고 부담 없는 식사를 원할 때 딱이에요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 9:00; 화요일: 오전 6:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15150146667812280049", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A7%88%EC%8A%A4+%ED%94%BC%EC%8B%9C+%ED%95%98%EC%9A%B0%EC%8A%A4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "날카 씨푸드": {
        photos: ["/images/boracay/info/restaurants/nalka-seafood-boracay.jpg"],
        summary: "스테이션 1에서 만나는 프리미엄 씨푸드 바",
        updatedAt: "2026-07-15",
        highlights: ["신선한 굴 요리", "깔끔하고 고급스러운 분위기"],
        tips: ["해산물 매니아라면 꼭 들러야 할 코스"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 4:00, 오후 5:00~9:00; 화요일: 오전 11:30 ~ 오후 4:00, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/nalkaseafoodrestaurant", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10347639748376294016", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%A0%EC%B9%B4+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "모자이크 라틴 아메리칸 그릴": {
        photos: ["/images/boracay/info/restaurants/mosaic-latin-american-grill-boracay.jpg"],
        summary: "보라카이에서 즐기는 이국적인 라틴 아메리칸 풍미의 그릴 요리 맛집",
        updatedAt: "2026-07-15",
        highlights: ["풍성한 육즙의 스테이크와 타코", "분위기 좋은 야외 테라스 좌석"],
        tips: ["저녁 노을과 함께 로맨틱한 식사를 즐기기에 딱 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 6:00~10:30; 화요일: 오후 6:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.crimsonhotel.com/boracay", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2742171148915844424", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%EC%9E%90%EC%9D%B4%ED%81%AC+%EB%9D%BC%ED%8B%B4+%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B8+%EA%B7%B8%EB%A6%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리틀 타지 보라카이": {
        photos: ["/images/boracay/info/restaurants/little-taj-boracay.jpg"],
        summary: "보라카이에서 만나는 정통 인도 스트릿 푸드의 매력",
        updatedAt: "2026-07-15",
        highlights: ["향긋한 커리와 갓 구운 난", "가성비 좋은 인도식 길거리 음식"],
        tips: ["D'Mall 근처라 접근성이 좋고 가볍게 한 끼 해결하기 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:30; 화요일: 오전 10:00 ~ 오후 11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://littletaj.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12730961956007642224", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%ED%8B%80+%ED%83%80%EC%A7%80+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "바이트 클럽": {
        photos: ["/images/boracay/info/restaurants/bite-club-boracay.jpg"],
        summary: "힙한 분위기에서 즐기는 육즙 가득한 수제 버거 맛집",
        updatedAt: "2026-07-15",
        highlights: ["두툼한 패티가 일품인 스팀펑크 버거", "빈티지하고 힙한 인테리어"],
        tips: ["스테이션 2 관람차 근처라 식사 후 산책하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.steampunkboracay.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9649654912844153080", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%9D%B4%ED%8A%B8+%ED%81%B4%EB%9F%BD+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시마 그릭 타베르나": {
        photos: ["/images/boracay/info/restaurants/cyma-greek-taverna-boracay.jpg"],
        summary: "Cyma Greek Taverna Boracay 기준으로 확인한 보라카이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.1", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15384777279095669852", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EB%A7%88+%EA%B7%B8%EB%A6%AD+%ED%83%80%EB%B2%A0%EB%A5%B4%EB%82%98+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "올레 스패니시 타파스": {
        photos: ["/images/boracay/info/restaurants/ole-spanish-tapas-bar-boracay.jpg"],
        summary: "Ole Boracay 기준으로 확인한 보라카이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 3.5", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오전 2:00; 화요일: 오전 8:00 ~ 오전 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11603473193036594012", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%AC%EB%A0%88+%EC%8A%A4%ED%8C%A8%EB%8B%88%EC%8B%9C+%ED%83%80%ED%8C%8C%EC%8A%A4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "에픽 보라카이": {
        photos: ["/images/boracay/info/restaurants/epic-boracay.jpg"],
        summary: "Epic Boracay 기준으로 확인한 보라카이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.2", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오전 4:00; 화요일: 오전 7:00 ~ 오전 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8925661095225121382", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%ED%94%BD+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카페 마루하": {
        photos: ["/images/boracay/info/restaurants/cafe-maruja-boracay.jpg"],
        summary: "Cafe Maruja 기준으로 확인한 보라카이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.5", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₱300~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 11:00; 화요일: 오전 7:30 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://cafemaruja.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1436925898055909781", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%98+%EB%A7%88%EB%A3%A8%ED%95%98+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
