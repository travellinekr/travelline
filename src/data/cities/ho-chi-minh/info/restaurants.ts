import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "퍼 호아 파스퇴르": {
        photos: ["/images/ho-chi-minh/info/restaurants/pho-hoa-pasteur-ho-chi-minh-city.jpg"],
        summary: "호치민에서 가장 오래된 전통을 자랑하는 쌀국수 노포입니다.",
        updatedAt: "2026-07-15",
        highlights: ["깊고 진한 육수의 맛", "현지 분위기 물씬 풍기는 공간"],
        tips: ["오픈 시간에 맞춰 방문하면 더 여유롭게 즐길 수 있어요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 5:30 ~ 오후 10:30; 화요일: 오전 5:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15021671463455039530", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8D%BC+%ED%98%B8%EC%95%84+%ED%8C%8C%EC%8A%A4%ED%87%B4%EB%A5%B4+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "퍼 레": {
        photos: ["/images/ho-chi-minh/info/restaurants/pho-le-ho-chi-minh-city.png"],
        summary: "진한 국물과 푸짐한 고기로 현지인들에게 사랑받는 쌀국수 맛집입니다.",
        updatedAt: "2026-07-15",
        highlights: ["가성비 넘치는 넉넉한 양", "감칠맛 나는 육수"],
        tips: ["고수를 못 드신다면 주문 시 미리 빼달라고 하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오전 12:00; 화요일: 오전 6:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.phole.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6788466980726782215", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8D%BC+%EB%A0%88+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반미 후인호아": {
        photos: ["/images/ho-chi-minh/info/restaurants/banh-mi-huynh-hoa-ho-chi-minh-city.jpg"],
        summary: "속재료가 빈틈없이 꽉 찬 호치민 대표 프리미엄 반미 맛집입니다.",
        updatedAt: "2026-07-15",
        highlights: ["입안 가득 차는 풍성한 토핑", "바삭하고 고소한 바게트"],
        tips: ["양이 매우 많으니 포장해서 숙소에서 드시는 걸 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 10:00; 화요일: 오전 6:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://banhmihuynhhoa.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7665333571196675420", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%EB%AF%B8+%ED%9B%84%EC%9D%B8%ED%98%B8%EC%95%84+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반미 호아마": {
        photos: ["/images/ho-chi-minh/info/restaurants/banh-mi-hoa-ma-ho-chi-minh-city.jpg"],
        summary: "Bánh Mì Hòa Mã 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.3", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00~11:00; 화요일: 오전 6:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6451965279201449399", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%EB%AF%B8+%ED%98%B8%EC%95%84%EB%A7%88+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "런치 레이디": {
        photos: ["/images/ho-chi-minh/info/restaurants/lunch-lady-ho-chi-minh-city.jpg"],
        summary: "The Lunch Lady (Nguyen Thi Thanh) 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 3.9", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:30 ~ 오후 3:30; 화요일: 오전 10:30 ~ 오후 3:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12466535328225826539", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9F%B0%EC%B9%98+%EB%A0%88%EC%9D%B4%EB%94%94+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "분팃느엉 치뚜옌": {
        photos: ["/images/ho-chi-minh/info/restaurants/bun-thit-nuong-chi-tuyen-ho-chi-minh-city.jpg"],
        summary: "Bún Thịt Nướng Trương Tuyền 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.6", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 5:00 ~ 오후 9:00; 화요일: 오전 5:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14025769136582805613", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%84%ED%8C%83%EB%8A%90%EC%97%89+%EC%B9%98%EB%9A%9C%EC%98%8C+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "분보후에 동바": {
        photos: ["/images/ho-chi-minh/info/restaurants/bun-bo-hue-dong-ba-ho-chi-minh-city.jpg"],
        summary: "BÚN BÒ HUẾ CÔ XUÂN CHỢ ĐÔNG BA - CHI NHÁNH CHÁNH HƯNG (QUẬN 8 CŨ) 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 5", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3873202731734622201", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%84%EB%B3%B4%ED%9B%84%EC%97%90+%EB%8F%99%EB%B0%94+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "꽌 부이": {
        photos: ["/images/ho-chi-minh/info/restaurants/quan-bui-ho-chi-minh-city.jpg"],
        summary: "Quán Bụi Express, Thủ Thiêm - Authentic Vietnamese Cuisine 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.8", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 11:00; 화요일: 오전 7:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.quan-bui.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6428758257563554410", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%BD%8C+%EB%B6%80%EC%9D%B4+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시크릿 가든 레스토랑": {
        photos: ["/images/ho-chi-minh/info/restaurants/secret-garden-restaurant-ho-chi-minh-city.jpg"],
        summary: "시크릿가든 레스토랑 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.1", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/secretgarden158pasteur/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8659254940731870913", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%81%AC%EB%A6%BF+%EA%B0%80%EB%93%A0+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "꾹각꽌": {
        photos: ["/images/ho-chi-minh/info/restaurants/cuc-gach-quan-ho-chi-minh-city.png"],
        summary: "현지 분위기 물씬 풍기는 정통 베트남 가정식 맛집",
        updatedAt: "2026-07-15",
        highlights: ["정겨운 시골풍 인테리어", "다양한 로컬 요리"],
        tips: ["인기가 많아 웨이팅이 있을 수 있어요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 11:30; 화요일: 오전 9:00 ~ 오후 11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://cucgachquan.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10022954861294462091", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%BE%B9%EA%B0%81%EA%BD%8C+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "프로파간다 비스트로": {
        photos: ["/images/ho-chi-minh/info/restaurants/propaganda-bistro-ho-chi-minh-city.jpg"],
        summary: "감각적인 분위기에서 즐기는 세련된 베트남 퓨전 요리",
        updatedAt: "2026-07-15",
        highlights: ["힙한 인테리어와 플레이팅", "세련된 맛의 퓨전 메뉴"],
        tips: ["분위기가 좋아 데이트나 친구와 방문하기 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 10:30; 화요일: 오전 7:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://propagandabistros.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7159834380171282231", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EB%A1%9C%ED%8C%8C%EA%B0%84%EB%8B%A4+%EB%B9%84%EC%8A%A4%ED%8A%B8%EB%A1%9C+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "냐항응온 호치민": {
        photos: ["/images/ho-chi-minh/info/restaurants/nha-hang-ngon-ho-chi-minh-city.jpg"],
        summary: "고풍스러운 저택에서 즐기는 베트남 길거리 음식의 정수",
        updatedAt: "2026-07-15",
        highlights: ["다양한 종류의 로컬 스트릿 푸드", "아름다운 프랑스식 빌라 분위기"],
        tips: ["메뉴가 정말 많으니 천천히 골라보세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 10:30; 화요일: 오전 7:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13622103453648835628", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%83%90%ED%95%AD%EC%9D%91%EC%98%A8+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호아툭 사이공": {
        photos: ["/images/ho-chi-minh/info/restaurants/hoa-tuc-saigon-ho-chi-minh-city.jpg"],
        summary: "화툭 사이공 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.5", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.hoatuc.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2488355239385023050", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%EC%95%84%ED%88%AD+%EC%82%AC%EC%9D%B4%EA%B3%B5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "훔 베지테리언": {
        photos: ["/images/ho-chi-minh/info/restaurants/hum-vegetarian-cafe-ho-chi-minh-city.png"],
        summary: "Hum Signature - Plant-based fine dining 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.6", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 6:00~10:00; 화요일: 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hum-dining.vn/thuc-don-my-thuc/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2394836574591435478", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9B%94+%EB%B2%A0%EC%A7%80%ED%85%8C%EB%A6%AC%EC%96%B8+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "벱메인": {
        photos: ["/images/ho-chi-minh/info/restaurants/bep-me-in-ho-chi-minh-city.jpg"],
        summary: "벱메인2- 응우옌 타이 빈 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.8", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:30 ~ 오후 10:30; 화요일: 오전 10:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://bep.mein.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4821895918633354167", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%B1%EB%A9%94%EC%9D%B8+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "베트남 하우스 레스토랑": {
        photos: ["/images/ho-chi-minh/info/restaurants/vietnam-house-restaurant-ho-chi-minh-city.jpg"],
        summary: "베트남 하우스 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.3", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:00, 오후 5:30~10:00; 화요일: 오전 11:30 ~ 오후 3:00, 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/VietnamHouseRestaurant", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6303144761789413895", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%ED%8A%B8%EB%82%A8+%ED%95%98%EC%9A%B0%EC%8A%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아난 사이공": {
        photos: ["/images/ho-chi-minh/info/restaurants/anan-saigon-ho-chi-minh-city.jpg"],
        summary: "안안 사이공 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.1", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://anansaigon.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17237509100999607271", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%82%9C+%EC%82%AC%EC%9D%B4%EA%B3%B5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "벱 프라임 스테이크하우스": {
        photos: ["/images/ho-chi-minh/info/restaurants/bep-prime-steakhouse-ho-chi-minh-city.jpg"],
        summary: "ĐỈNH PHONG - THE BUTCHER'S STEAKHOUSE (SAIGON PEARL) 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.9", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10583657643270989117", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%B1+%ED%94%84%EB%9D%BC%EC%9E%84+%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%ED%95%98%EC%9A%B0%EC%8A%A4+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "피자 포피스 벤탄": {
        photos: ["/images/ho-chi-minh/info/restaurants/pizza-4p-s-ben-thanh-ho-chi-minh-city.jpg"],
        summary: "부라타 치즈가 터지는 인생 피자를 만날 수 있는 곳",
        updatedAt: "2026-07-15",
        highlights: ["신선한 부라타 치즈", "쫄깃한 화덕 도우"],
        tips: ["인기가 많으니 예약은 필수예요!"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://pizza4ps.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10323362865545159556", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EC%9E%90+%ED%8F%AC%ED%94%BC%EC%8A%A4+%EB%B2%A4%ED%83%84+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "루진 레러이": {
        photos: ["/images/ho-chi-minh/info/restaurants/l-usine-le-loi-ho-chi-minh-city.jpg"],
        summary: "분위기 맛집, 브런치와 쇼핑을 동시에 즐기는 힙한 공간",
        updatedAt: "2026-07-15",
        highlights: ["감각적인 플레이팅", "세련된 인테리어"],
        tips: ["사진 찍기 좋은 스팟으로 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://lusinespace.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9421427601356513740", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A3%A8%EC%A7%84+%EB%A0%88%EB%9F%AC%EC%9D%B4+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 워크숍 커피": {
        photos: ["/images/ho-chi-minh/info/restaurants/the-workshop-coffee-ho-chi-minh-city.jpg"],
        summary: "커피 향 가득한 빈티지 무드의 로스터리 카페",
        updatedAt: "2026-07-15",
        highlights: ["깊은 풍미의 핸드드립", "전문적인 커피 맛"],
        tips: ["조용히 커피 한 잔 하며 쉬어가기 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 8:30; 화요일: 오전 8:00 ~ 오후 8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.facebook.com/the.workshop.coffee", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8864834756804505306", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%9B%8C%ED%81%AC%EC%88%8D+%EC%BB%A4%ED%94%BC+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "콩카페 호치민": {
        photos: ["/images/ho-chi-minh/info/restaurants/cong-ca-phe-ho-chi-minh-city.jpg"],
        summary: "Cộng Cà Phê 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.7", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 10:00; 화요일: 오전 6:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://congcaphe.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3408067101775961447", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%A9%EC%B9%B4%ED%8E%98+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "응우옌후에 카페 아파트먼트": {
        photos: ["/images/ho-chi-minh/info/restaurants/cafe-apartment-nguyen-hue-ho-chi-minh-city.jpg"],
        summary: "VanillA bomB (5F Cafe Apartment) 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.9", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 7:00; 화요일: 오전 9:00 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/vanillabomb.vn?igsh=MTdtOTB2Nm5yY3VqOQ%3D%3D&utm_source=qr", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13735299231278897821", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%91%EC%9A%B0%EC%98%8C%ED%9B%84%EC%97%90+%EC%B9%B4%ED%8E%98+%EC%95%84%ED%8C%8C%ED%8A%B8%EB%A8%BC%ED%8A%B8+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "벤탄 스트리트 푸드 마켓": {
        photos: ["/images/ho-chi-minh/info/restaurants/ben-thanh-street-food-market-ho-chi-minh-city.jpg"],
        summary: "Ben Nghe Street Food 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.3", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오전 1:00; 화요일: 오전 9:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/streetfoodmarketbennghe?mibextid=kFxxJD", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11128028587886157075", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A4%ED%83%84+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%ED%91%B8%EB%93%9C+%EB%A7%88%EC%BC%93+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "응옥스엉 씨푸드": {
        photos: ["/images/ho-chi-minh/info/restaurants/ngoc-suong-seafood-ho-chi-minh-city.jpg"],
        summary: "Nhà Hàng Hải Sản Ngọc Sương - Nguyễn Siêu 기준으로 확인한 호치민 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "₫50k~800k", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.ngocsuong.co/ngocsuongsnb?utm_source=ggmaps&utm_medium=ggmaps&utm_campaign=ggmaps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11034413205499898450", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%91%EC%98%A5%EC%8A%A4%EC%97%89+%EC%94%A8%ED%91%B8%EB%93%9C+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
