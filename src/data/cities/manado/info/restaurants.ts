import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "라자 사테 마나도": {
        photos: ["/images/manado/info/restaurants/raja-sate-manado.jpg"],
        summary: "사테와 다양한 그릴 메뉴를 전문으로 하는 아시안 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["맛있는 사테 및 BBQ 메뉴", "다양한 아시아식 요리"],
        tips: ["그릴 메뉴 주문 시 소스를 취향에 맞게 요청해보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "사테·그릴 메뉴", items: [{ name: "대표 메뉴", price: "Rp30k~150k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~10:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5333522711782067754", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%9E%90+%EC%82%AC%ED%85%8C+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "시티 엑스트라 씨푸드": {
        photos: ["/images/manado/info/restaurants/city-extra-seafood-manado.jpg"],
        summary: "아름다운 바다 전망과 함께 신선한 해산물을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["탁 트인 바다 전망", "신선한 해산물 요리"],
        tips: ["전망 좋은 자리를 위해 미리 예약하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "바다 전망 해산물", items: [{ name: "대표 메뉴", price: "Rp80k~300k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 12:00~10:00; 화요일: 오후 12:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12807654699836367650", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%8B%B0+%EC%97%91%EC%8A%A4%ED%8A%B8%EB%9D%BC+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "위사타 바하리 씨푸드": {
        photos: ["/images/manado/info/restaurants/wisata-bahari-seafood-restaurant-manado.jpg"],
        summary: "신선한 생선구이와 다양한 해산물 요리를 즐길 수 있는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 신선한 해산물 요리", "직접 구운 생선구이 전문"],
        tips: ["해산물의 신선도를 확인하고 주문하세요"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "생선구이·해산물 요리", items: [{ name: "대표 메뉴", price: "Rp80k~300k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15150073213723900669", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%84%EC%82%AC%ED%83%80+%EB%B0%94%ED%95%98%EB%A6%AC+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "그린 가든 레스토랑 마나도": {
        photos: ["/images/manado/info/restaurants/rm-green-garden-manado.jpg"],
        summary: "마나도 현지식과 맛있는 해산물을 경험할 수 있는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["정통 마나도 현지식 메뉴", "다양한 해산물 요리"],
        tips: ["현지 특유의 향신료를 좋아한다면 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "현지식·해산물", items: [{ name: "대표 메뉴", price: "Rp40k~180k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 11:00; 화요일: 오전 7:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12513876005513262841", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%A6%B0+%EA%B0%80%EB%93%A0+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "다부다부 레몽": {
        photos: ["/images/manado/info/restaurants/dabu-dabu-lemong-manado.jpg"],
        summary: "매콤한 다부다부 소스를 곁들인 마나도 스타일의 생선 구이 전문점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["특제 다부다부 소스의 매콤한 맛", "신선한 생선 요리"],
        tips: ["매운맛을 좋아하시는 분들께 강력 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "매콤한 다부다부 소스와 생선요리", items: [{ name: "대표 메뉴", price: "Rp40k~180k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오전 12:00; 화요일: 오전 10:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18279593952666244202", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EB%B6%80%EB%8B%A4%EB%B6%80+%EB%A0%88%EB%AA%BD+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "와케케 티누투안": {
        photos: ["/images/manado/info/restaurants/wakeke-tinutuan-manado.jpg"],
        summary: "마나도의 전통 음식인 티누투안 죽을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["전통 방식의 티누투안 죽", "현지 분위기를 느낄 수 있는 식당"],
        tips: ["든받은 아침 식사로 즐기기에 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "티누투안 죽", items: [{ name: "대표 메뉴", price: "Rp20k~80k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 1:30; 화요일: 오전 6:00 ~ 오후 1:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5553276259794564878", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%80%EC%BC%80%EC%BC%80+%ED%8B%B0%EB%88%84%ED%88%AC%EC%95%88+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "나시 쿠닝 사로자": {
        photos: ["/images/manado/info/restaurants/nasi-kuning-saroja-manado.jpg"],
        summary: "나시쿠닝을 전문으로 하는 맛있는 현지 식당입니다.",
        updatedAt: "2026-07-21",
        highlights: ["맛있는 나시쿠닝", "현지 분위기"],
        tips: ["현지 스타일의 정통 맛을 느껴보세요"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "나시쿠닝", items: [{ name: "대표 메뉴", price: "Rp20k~80k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 5:30 ~ 오후 8:00; 화요일: 오전 5:30 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11158711786971207404", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EC%8B%9C+%EC%BF%A0%EB%8B%9D+%EC%82%AC%EB%A1%9C%EC%9E%90+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "바카르 리차 마나도": {
        photos: ["/images/manado/info/restaurants/bakar-rica-manado.jpg"],
        summary: "리차 소스를 곁들인 생선과 닭요리가 일품인 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["매콤한 리차 요리", "신선한 생선 및 닭고기"],
        tips: ["매운맛을 좋아하신다면 리차 요리를 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "리차리차 생선·닭요리", items: [{ name: "대표 메뉴", price: "Rp40k~180k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오전 12:00; 화요일: 오전 10:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7225620323004938148", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%B9%B4%EB%A5%B4+%EB%A6%AC%EC%B0%A8+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "밤부 덴 블러바드": {
        photos: ["/images/manado/info/restaurants/rumah-makan-bambu-den-boulevard-manado.jpg"],
        summary: "신선한 해산물과 현지 음식을 즐길 수 있는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 신선한 해산물 요리", "현지 느낌이 물씬 풍기는 메뉴 구성"],
        tips: ["Telkomsel 매장 옆이라 찾기 쉽습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물·현지식", items: [{ name: "대표 메뉴", price: "Rp40k~180k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 9:00; 화요일: 오전 7:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10359887218872485134", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%A4%EB%B6%80+%EB%8D%B4+%EB%B8%94%EB%9F%AC%EB%B0%94%EB%93%9C+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "폰독 히자우 레스토랑": {
        photos: ["/images/manado/info/restaurants/pondok-hijau-restaurant-manado.jpg"],
        summary: "가족과 함께 방문하기 좋은 로컬 메뉴 전문 식당입니다.",
        updatedAt: "2026-07-21",
        highlights: ["가족 단위 방문에 적합한 분위기", "정통 현지 로컬 메뉴 제공"],
        tips: ["북부 미나하사 지역 여행 시 들르기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "가족식 로컬 메뉴", items: [{ name: "대표 메뉴", price: "Rp40k~160k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17270958662107965067", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%B0%EB%8F%85+%ED%9E%88%EC%9E%90%EC%9A%B0+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "넬라얀 씨푸드 마나도": {
        photos: ["/images/manado/info/restaurants/nelayan-seafood-restaurant-manado.jpg"],
        summary: "신선한 해산물 요리를 즐길 수 있는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 신선한 해산물", "현지 분위기를 느낄 수 있는 식사"],
        tips: ["해산물의 신선도를 꼭 확인하세요"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "Rp60k~250k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12905131485170895414", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%84%AC%EB%9D%BC%EC%96%80+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "빅 피시 마나도": {
        photos: ["/images/manado/info/restaurants/big-fish-manado.jpg"],
        summary: "맛있는 생선구이와 다양한 해산물을 제공하는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["대표 메뉴인 생선구이", "다채로운 해산물 요리"],
        tips: ["생선구이를 메인으로 주문하는 것을 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "생선구이·해산물", items: [{ name: "대표 메뉴", price: "Rp60k~250k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 9:30 ~ 오후 10:15; 화요일: 오전 9:30 ~ 오후 10:15",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9750027245420063850", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%85+%ED%94%BC%EC%8B%9C+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "키오스 펠랑이 마나도": {
        photos: ["/images/manado/info/restaurants/kios-pelangi-manado.jpg"],
        summary: "마나도 현지의 맛을 느낄 수 있는 로컬 식사와 간단한 메뉴를 제공하는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["현지 스타일의 로컬 식사", "가볍게 즐기기 좋은 메뉴"],
        tips: ["현지 분위기를 만끽하고 싶을 때 방문하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "로컬 식사와 간단 메뉴", items: [{ name: "대표 메뉴", price: "Rp20k~100k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 3:00; 화요일: 오전 6:30 ~ 오후 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12428237008260630141", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A4%EC%98%A4%EC%8A%A4+%ED%8E%A0%EB%9E%91%EC%9D%B4+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "와하하 포크립 마나도": {
        photos: ["/images/manado/info/restaurants/wahaha-pork-ribs-manado.jpg"],
        summary: "맛있는 포크립과 그릴 요리를 전문으로 하는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["부드러운 포크립 요리", "풍미 가득한 그릴 메뉴"],
        tips: ["그릴 요리를 좋아한다면 꼭 방문해 보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "포크립·그릴", items: [{ name: "대표 메뉴", price: "Rp80k~250k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9372691570032778739", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%80%ED%95%98%ED%95%98+%ED%8F%AC%ED%81%AC%EB%A6%BD+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "엑셀소 마나도 타운스퀘어": {
        photos: ["/images/manado/info/restaurants/excelso-manado-town-square.jpg"],
        summary: "커피와 간단한 식사를 즐기기에 좋은 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 커피 메뉴", "가벼운 식사 가능"],
        tips: ["타운스퀘어 쇼핑 중 휴식하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피·간단 식사", items: [{ name: "대표 메뉴", price: "Rp30k~120k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16856556687777584381", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%91%EC%85%80%EC%86%8C+%EB%A7%88%EB%82%98%EB%8F%84+%ED%83%80%EC%9A%B4%EC%8A%A4%ED%80%98%EC%96%B4+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "카완 바루 마나도": {
        photos: ["/images/manado/info/restaurants/kawan-baru-manado.jpg"],
        summary: "현지 분위기를 느낄 수 있는 로컬 식당입니다.",
        updatedAt: "2026-07-21",
        highlights: ["맛있는 로컬 음식", "높은 평점"],
        tips: ["현지 맛을 제대로 느끼고 싶을 때 방문하세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "로컬 식사", items: [{ name: "대표 메뉴", price: "Rp30k~120k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://kawanbaru.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7942744666450264789", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%99%84+%EB%B0%94%EB%A3%A8+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "라투 오치 마나도": {
        photos: ["/images/manado/info/restaurants/rm-ratu-oci-manado.jpg"],
        summary: "신선한 재료로 만든 오치 생선요리를 전문으로 하는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["오치 생선요리", "현지 스타일의 신선한 해산물"],
        tips: ["생선 요리의 신선도를 확인해보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "오치 생선요리", items: [{ name: "대표 메뉴", price: "Rp40k~180k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10849201420311462989", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%ED%88%AC+%EC%98%A4%EC%B9%98+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "박소 솔로 마나도": {
        photos: ["/images/manado/info/restaurants/bakso-solo-manado.jpg"],
        summary: "깊은 국물 맛이 일품인 박소를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["전통적인 박소 맛", "풍부한 육수"],
        tips: ["현지 스타일의 양념을 곁들여 드셔보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "박소", items: [{ name: "대표 메뉴", price: "Rp20k~80k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8431115539185577031", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%95%EC%86%8C+%EC%86%94%EB%A1%9C+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "루마 코피 티칼라": {
        photos: ["/images/manado/info/restaurants/rumah-kopi-tikala-manado.jpg"],
        summary: "마나도식 커피와 다양한 간식을 즐길 수 있는 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["현지 스타일의 마나도식 커피", "맛있는 현지 간식"],
        tips: ["여유로운 분위기에서 휴식을 취하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "마나도식 커피와 간식", items: [{ name: "대표 메뉴", price: "Rp20k~80k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 10:00; 화요일: 오전 6:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3967887556597042196", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A3%A8%EB%A7%88+%EC%BD%94%ED%94%BC+%ED%8B%B0%EC%B9%BC%EB%9D%BC+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "미에 바 가루다 마나도": {
        photos: ["/images/manado/info/restaurants/mie-ba-garuda-manado.jpg"],
        summary: "높은 평점을 자랑하는 미에 바 전문 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["깊은 맛의 미에 바", "검증된 현지 맛집"],
        tips: ["인기가 많으니 방문 시간을 잘 확인하세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "미에 바", items: [{ name: "대표 메뉴", price: "Rp20k~80k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3451451490697757294", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%97%90+%EB%B0%94+%EA%B0%80%EB%A3%A8%EB%8B%A4+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
