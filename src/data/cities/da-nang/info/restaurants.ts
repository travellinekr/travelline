import type { RestaurantInfo } from '@/data/card-info-types';

const info: Record<string, RestaurantInfo> = {
    "벱헨": {
        photos: ["/images/da-nang/info/restaurants/b-p-h-n.jpg"],
        summary: "다낭 현지의 맛을 느낄 수 있는 높은 평점의 로컬 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["현지 스타일의 정갈한 음식", "높은 사용자 만족도"],
        tips: ["점심과 저녁 사이 브레이크 타임이 있으니 방문 전 시간 확인 필수"],
        menu: { signature: "현지 요리", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 3:00, 오후 5:00~9:00; 화요일: 오전 10:00 ~ 오후 3:00, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5308597685978446312", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Bep+Hen+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "분짜까 히엔": {
        photos: ["/images/da-nang/info/restaurants/b-n-ch-c-h-n.jpg"],
        summary: "다낭식 어묵 국수인 분짜까를 전문으로 하는 인기 식당입니다.",
        updatedAt: "2026-07-13",
        highlights: ["신선한 어묵 국수", "현지 분위기의 맛집"],
        tips: ["오전과 오후 운영 시간이 나뉘어 있으니 시간 맞춰 방문하세요"],
        menu: { signature: "어묵 국수", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 6:00~10:30, 오후 3:00~8:00; 화요일: 오전 6:00~10:30, 오후 3:00~8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11929535624356975781", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Bun+Cha+Ca+Hon+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미꽝 바무아": {
        photos: ["/images/da-nang/info/restaurants/m-qu-ng-b-mua.jpg"],
        summary: "다낭 현지식 미꽝을 맛볼 수 있는 로컬 식당입니다.",
        updatedAt: "2026-07-13",
        highlights: ["현지 스타일의 다양한 미꽝 메뉴", "가성비 좋은 로컬 분위기"],
        tips: ["오전 6시부터 영업하여 아침 식사로 방문하기 좋습니다."],
        menu: { signature: "미꽝 전문점", items: [{ name: "대표 메뉴", price: "₫50,000~150,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 10:00; 화요일: 오전 6:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13962565705902010185", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Mi+Quang+Ba+Mua+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "넨 레스토랑": {
        photos: ["/images/da-nang/info/restaurants/n-n-restaurant.jpg"],
        summary: "다낭에서 즐기는 수준 높은 파인 다이닝",
        updatedAt: "2026-07-13",
        highlights: ["창의적인 메뉴 구성", "고급스러운 분위기"],
        tips: ["저녁 시간 방문 시 예약 권장", "요일별 영업시간 확인 필수"],
        menu: { signature: "모던 베트남 요리", items: [{ name: "대표 메뉴", price: "₫200,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:30 ~ 오후 2:00, 오후 5:30~8:45; 화요일: 오후 5:30~8:45",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.restaurantnen.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8551481328389375797", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Nen+Restaurant+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "베만 씨푸드": {
        photos: ["/images/da-nang/info/restaurants/b-m-n-seafood.png"],
        summary: "신선한 해산물을 즐길 수 있는 다낭의 유명 맛집",
        updatedAt: "2026-07-13",
        highlights: ["다양한 제철 해산물", "활기찬 현지 분위기"],
        tips: ["피크 타임에는 대기가 발생할 수 있음", "가족 단위 방문객에게 추천"],
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "₫100,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오전 12:00; 화요일: 오전 9:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1479927467982690388", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Be+Man+Seafood+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "남단 씨푸드": {
        photos: ["/images/da-nang/info/restaurants/n-m-nh-seafood.jpg"],
        summary: "신선한 해산물을 현지 분위기 속에서 합리적인 가격으로 즐길 수 있는 식당입니다.",
        updatedAt: "2026-07-13",
        highlights: ["제철 해산물 요리", "가성비 좋은 메뉴 구성", "로컬 스타일의 맛"],
        tips: ["저녁 피크 시간대에는 방문객이 많을 수 있으니 여유 있게 방문하세요."],
        menu: { signature: "신선한 해산물 요리", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=100063806033043", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3819754365879535270", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Nam+Danh+Seafood+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미한 씨푸드": {
        photos: ["/images/da-nang/info/restaurants/m-h-nh-seafood.jpg"],
        summary: "방대한 리뷰와 높은 평점으로 검증된 다낭의 대표적인 해산물 전문점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양하고 풍성한 해산물 메뉴", "검증된 맛과 품질", "쾌적한 식사 환경"],
        tips: ["인기가 매우 높아 대기 시간이 발생할 수 있으므로 이른 방문이나 예약을 권장합니다."],
        menu: { signature: "프리미엄 해산물", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://myhanhseafood.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15356935463653978732", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=My+Hanh+Seafood+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "목 씨푸드": {
        photos: ["/images/da-nang/info/restaurants/m-c-seafood.jpg"],
        summary: "신선한 해산물을 즐길 수 있는 다낭의 대표적인 로컬 해산물 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양하고 신선한 해산물 요리", "가족 및 단체 방문에 적합한 분위기"],
        tips: ["방문객이 매우 많으므로 피크 시간대에는 대기가 발생할 수 있습니다."],
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:30 ~ 오후 10:30; 화요일: 오전 10:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mocseafood.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2059427300039139311", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Moc+Seafood+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "콴웃 분보후에": {
        photos: ["/images/da-nang/info/restaurants/qu-n-c-m-hu-ngon.jpg"],
        summary: "현지의 맛을 느낄 수 있는 정통 분보후에(베트남식 소고기 국수) 전문점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["깊고 진한 국물 맛의 분보후에", "로컬 분위기의 담백한 식사"],
        tips: ["오전과 점심 시간대에만 운영하므로 방문 시간을 꼭 확인하세요."],
        menu: { signature: "분보후에", items: [{ name: "대표 메뉴", price: "₫50,000~150,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 1:30; 화요일: 오전 6:00 ~ 오후 1:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17827027116273242288", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Quan+Com+Hue+Ngon+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "바흐엉 반짱꾸온": {
        photos: ["/images/da-nang/info/restaurants/b-nh-tr-ng-cu-n-th-t-heo-tr-n.jpg"],
        summary: "신선한 돼지고기 수육과 라이스페이퍼 롤을 맛볼 수 있는 다낭의 대표 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["특제 소스와 조화로운 돼지고기 수육", "현지 스타일의 정통 메뉴"],
        tips: ["인기가 많아 피크 타임에는 대기가 발생할 수 있습니다."],
        menu: { signature: "반짱꾸온", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 10:00; 화요일: 오전 6:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6731173655093393578", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Banh+Trang+Cuon+Thit+Heo+Tran+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "껌냐린": {
        photos: ["/images/da-nang/info/restaurants/c-m-nh-linh.png"],
        summary: "정갈하고 깔끔한 베트남 가정식을 즐길 수 있는 높은 평점의 식당입니다.",
        updatedAt: "2026-07-13",
        highlights: ["정성 가득한 베트남식 가정식", "높은 음식 품질과 만족도"],
        tips: ["인기가 매우 높으므로 여유로운 방문을 권장합니다."],
        menu: { signature: "베트남 가정식", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.comnhalinh.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1849423580128850801", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Com+Nha+Linh+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "피자 4P's": {
        photos: ["/images/da-nang/info/restaurants/pizza-4ps-hoang-van-thu.jpg"],
        summary: "신선한 부라타 치즈와 화덕 피자로 유명한 다낭 최고의 인기 레스토랑입니다.",
        updatedAt: "2026-07-13",
        highlights: ["부라타 치즈 피자", "고급스러운 분위기", "신선한 식재료 사용"],
        tips: ["인기가 매우 많아 사전 예약 권장", "저녁 시간대 웨이팅 주의"],
        menu: { signature: "Pizza", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://pizza4ps.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8006025648679338542", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Pizza+4P%E2%80%99s+Hoang+Van+Thu+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "버거 브로스": {
        photos: ["/images/da-nang/info/restaurants/burger-bros.png"],
        summary: "육즙 가득한 패티와 신선한 재료가 특징인 정통 스타일의 수제 버거 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["수제 버거", "풍부한 육즙", "캐주얼한 분위기"],
        tips: ["브레이크 타임(14:00~17:00) 확인 필수", "가벼운 식사로 추천"],
        menu: { signature: "Burger", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~9:30; 화요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/burgerbros.danang", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15484905354261700686", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Burger+Bros+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 컵스 커피 다낭": {
        photos: ["/images/da-nang/info/restaurants/the-cups-coffee.jpg"],
        summary: "직접 로스팅한 신선한 원두를 사용하여 깊은 풍미를 자랑하는 프리미엄 로스터리 카페입니다.",
        updatedAt: "2026-07-13",
        highlights: ["고품질의 자체 로스팅 원두", "깔끔하고 모던한 매장 분위기"],
        tips: ["커피 본연의 맛을 즐기는 분들께 추천하며, 아침 일찍 방문하기 좋습니다."],
        menu: { signature: "로스터리", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 6:30 ~ 오후 10:30; 화요일: 오전 6:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15900484116151685693", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=The+Cups+Coffee+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "꾸아 도 레스토랑 다낭": {
        photos: ["/images/da-nang/info/restaurants/cua-do-restaurant.jpg"],
        summary: "신선한 해산물을 즐길 수 있는 다낭의 인기 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양하고 신선한 해산물 요리", "높은 평점과 많은 방문객 리뷰"],
        tips: ["저녁 시간대에는 방문객이 많을 수 있습니다."],
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:30 ~ 오후 11:00; 화요일: 오전 11:30 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8013225540093100889", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Cua+Do+Restaurant+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하이 산 포 다낭": {
        photos: ["/images/da-nang/info/restaurants/h-i-s-n-ph.jpg"],
        summary: "신선한 해산물을 맛볼 수 있는 현지 식당입니다.",
        updatedAt: "2026-07-13",
        highlights: ["신선한 해산물 메뉴", "높은 사용자 평점"],
        tips: ["영업 시간이 오전 위주이므로 방문 전 운영 시간을 꼭 확인하세요."],
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오전 12:00; 화요일: 오전 9:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12778015086387447613", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Hai+San+Pho+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "포박하이": {
        photos: ["/images/da-nang/info/restaurants/ph-b-c-h-i.jpg"],
        summary: "현지 분위기를 물씬 느낄 수 있는 24시간 운영 쌀국수 전문점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["깊고 진한 국물 맛이 일품인 정통 쌀국수", "언제든 방문 가능한 24시간 영업"],
        tips: ["현지인들이 즐겨 찾는 곳으로 피크 타임에는 약간의 대기가 있을 수 있습니다."],
        menu: { signature: "쌀국수", items: [{ name: "대표 메뉴", price: "₫50,000~150,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10466735399884916731", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Pho+Bac+Hai+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "바토이 해산물": {
        photos: ["/images/da-nang/info/restaurants/b-th-i-seafood.jpg"],
        summary: "신선한 해산물을 합리적인 가격에 맛볼 수 있는 로컬 식당입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양하고 신선한 종류의 해산물 요리", "가성비 좋은 다낭 로컬 맛집"],
        tips: ["저녁 시간대에는 방문객이 많을 수 있으니 여유 있게 방문하는 것을 추천합니다."],
        menu: { signature: "신선한 해산물", items: [{ name: "대표 메뉴", price: "₫200,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.foody.vn/da-nang/hai-san-ba-thoi-le-dinh-duong", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8655960273268658815", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Ba+Thoi+Seafood+Da+Nang+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마담 란": {
        photos: ["/images/da-nang/info/restaurants/nh-h-ng-madame-l-n-n-ng.jpg"],
        summary: "다낭 시내 대표 베트남 음식점으로 다낭 일정에 넣기 좋은 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다낭 시내 위치", "베트남 현지식", "여행자 동선에 맞추기 좋음"],
        tips: ["방문 전 영업시간을 확인하세요.", "피크타임에는 대기 가능성이 있습니다."],
        menu: { signature: "베트남 현지식", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 6:30 ~ 오후 9:30; 화요일: 오전 6:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://madamelan.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14048210979961660194", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%8B%B4+%EB%9E%80+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다낭 벱꾸온": {
        photos: ["/images/da-nang/info/restaurants/b-p-cu-n-n-ng.jpg"],
        summary: "미케비치권 베트남 롤/현지식 맛집으로 다낭 일정에 넣기 좋은 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다낭 시내 위치", "베트남 현지식", "여행자 동선에 맞추기 좋음"],
        tips: ["방문 전 영업시간을 확인하세요.", "피크타임에는 대기 가능성이 있습니다."],
        menu: { signature: "베트남 현지식", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:30 ~ 오후 9:00; 화요일: 오전 10:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/DINNER.LUNCH.BEPCUON/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15858543023798826021", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EB%82%AD+%EB%B2%B1%EA%BE%B8%EC%98%A8+%EB%8B%A4%EB%82%AD+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "콩카페 다낭": {
        photos: ["/images/da-nang/info/restaurants/cong-caphe-da-nang.jpg"],
        summary: "다낭 여행 중 꼭 들러야 할 필수 코스, 달콤하고 시원한 코코넛 스무디 커피를 즐길 수 있는 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["시그니처 코코넛 커피", "빈티지한 매력의 인테리어"],
        tips: ["피크 타임에는 웨이팅이 있을 수 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "코코넛 스무디 커피", items: [{ name: "대표 메뉴", price: "₫40,000~150,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 7:00 AM – 11:30 PM; Tuesday: 7:00 AM – 11:30 PM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=16.0690486,108.2248767&query_place_id=ChIJi0bpGjIYQjERRodYRF89PH8", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%A9%EC%B9%B4%ED%8E%98%20%EB%8B%A4%EB%82%AD%20%EB%8B%A4%EB%82%AD%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    }
};

export default info;
