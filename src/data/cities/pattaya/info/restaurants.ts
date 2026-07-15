import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "뿌펜 씨푸드": {
        photos: ["/images/pattaya/info/restaurants/pupen-seafood-pattaya.png"],
        summary: "게 요리가 일품인 솜칫 지역의 신선한 해산물 맛집",
        updatedAt: "2026-07-15",
        highlights: ["부드러운 게살 요리", "신선한 제철 해산물"],
        tips: ["가족 단위 방문객에게 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/pupen24", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8420473939244118190", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%BF%8C%ED%8E%9C+%EC%94%A8%ED%91%B8%EB%93%9C+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 글래스 하우스 파타야": {
        photos: ["/images/pattaya/info/restaurants/the-glass-house-pattaya.jpg"],
        summary: "바다 바로 앞에서 낭만적인 식사를 즐길 수 있는 비치 클럽",
        updatedAt: "2026-07-15",
        highlights: ["환상적인 오션뷰", "감성적인 인테리어"],
        tips: ["해변 쪽 좌석은 사전 예약 권장"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.glasshouse-pattaya.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7090399358167099605", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EA%B8%80%EB%9E%98%EC%8A%A4+%ED%95%98%EC%9A%B0%EC%8A%A4+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 스카이 갤러리": {
        photos: ["/images/pattaya/info/restaurants/the-sky-gallery-pattaya.jpg"],
        summary: "탁 트인 파노라마 바다 전망을 자랑하는 언덕 위 레스토랑",
        updatedAt: "2026-07-15",
        highlights: ["아름다운 일몰 명소", "인생샷 가능한 뷰 맛집"],
        tips: ["일몰 시간에 맞춰 방문하기"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/theskygallerypattaya/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14151300337356777282", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%8A%A4%EC%B9%B4%EC%9D%B4+%EA%B0%A4%EB%9F%AC%EB%A6%AC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "캐비지스 앤 콘돔스 파타야": {
        photos: ["/images/pattaya/info/restaurants/cabbages-and-condoms-pattaya.jpg"],
        summary: "이색적인 테마와 맛있는 태국 요리를 만날 수 있는 정원 레스토랑",
        updatedAt: "2026-07-15",
        highlights: ["독특한 인테리어", "푸짐한 태국식 메뉴", "아름다운 가든 뷰"],
        tips: ["인기 장소라 예약 권장", "가족 단위 방문객에게 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 11:00; 화요일: 오전 7:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://cabbagesandcondoms.com/restaurant", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9152635462555146143", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BA%90%EB%B9%84%EC%A7%80%EC%8A%A4+%EC%95%A4+%EC%BD%98%EB%8F%94%EC%8A%A4+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "서프 앤 터프 비치 클럽": {
        photos: ["/images/pattaya/info/restaurants/surf-and-turf-beach-club-pattaya.jpg"],
        summary: "파타야 해변의 선셋을 감상하며 여유를 즐기는 비치 클럽",
        updatedAt: "2026-07-15",
        highlights: ["환상적인 오션뷰", "일몰 명소", "다양한 칵테일과 해산물"],
        tips: ["해질녘 시간 맞춰 방문하기", "선베드에서 휴식 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14169529110207669526", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%9C%ED%94%84+%EC%95%A4+%ED%84%B0%ED%94%84+%EB%B9%84%EC%B9%98+%ED%81%B4%EB%9F%BD+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라 바게트 파타야": {
        photos: ["/images/pattaya/info/restaurants/la-baguette-pattaya.jpg"],
        summary: "신선한 빵과 커피로 여유로운 브런치를 즐기기 좋은 카페",
        updatedAt: "2026-07-15",
        highlights: ["갓 구운 베이커리", "깔끔하고 아늑한 분위기", "가벼운 브런치 메뉴"],
        tips: ["아침 식사나 간식으로 딱", "현지인 맛집 느낌"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/labaguettebakerycafe", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6353991838165552436", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC+%EB%B0%94%EA%B2%8C%ED%8A%B8+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "자스민 카페 파타야": {
        photos: ["/images/pattaya/info/restaurants/jasmin-s-cafe-pattaya.jpg"],
        summary: "파타야에서 여유롭게 즐기는 감성 가득한 카페",
        updatedAt: "2026-07-15",
        highlights: ["감성적인 인테리어", "여유로운 분위기"],
        tips: ["사진 찍기 좋은 명소로 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sites.google.com/view/jasminscafe/accueil", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7949812235592768728", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%90%EC%8A%A4%EB%AF%BC+%EC%B9%B4%ED%8E%98+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "메이스 파타야": {
        photos: ["/images/pattaya/info/restaurants/mays-pattaya.jpg"],
        summary: "맛과 분위기를 모두 잡은 파타야의 핫플레이스",
        updatedAt: "2026-07-15",
        highlights: ["검증된 맛", "트렌디한 공간"],
        tips: ["피크 타임에는 미리 예약하는 것이 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~11:00; 화요일: 오후 12:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.thisismays.com/book-pattaya", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1045254762157169486", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EC%9D%B4%EC%8A%A4+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카페 데자미": {
        photos: ["/images/pattaya/info/restaurants/cafe-des-amis-pattaya.jpg"],
        summary: "특별한 날을 위한 품격 있는 파인 다이닝",
        updatedAt: "2026-07-15",
        highlights: ["고급스러운 코스 요리", "최상급 서비스"],
        tips: ["기념일이나 데이트 코스로 강력 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.cafe-des-amis.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15834840305764927620", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%98+%EB%8D%B0%EC%9E%90%EB%AF%B8+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "만트라 레스토랑 앤 바": {
        photos: ["/images/pattaya/info/restaurants/mantra-restaurant-and-bar-pattaya.jpg"],
        summary: "파타야 해변의 낭만을 만끽할 수 있는 선셋 맛집",
        updatedAt: "2026-07-15",
        highlights: ["해변 테라스석", "신선한 씨푸드 요리"],
        tips: ["일몰 시간에 맞춰 예약하면 인생샷 가능"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.mantra-pattaya.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17972693943720287485", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%ED%8A%B8%EB%9D%BC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%95%A4+%EB%B0%94+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "홉스 브루하우스": {
        photos: ["/images/pattaya/info/restaurants/hops-brewhouse-pattaya.jpg"],
        summary: "시원한 수제 맥주와 힙한 분위기를 즐기는 곳",
        updatedAt: "2026-07-15",
        highlights: ["다양한 크래프트 비어", "캐주얼한 무드"],
        tips: ["친구들과 가볍게 맥주 한잔하기 딱 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00 ~ 오전 12:00; 화요일: 오후 4:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://hopsbrewhouse.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17084171203383362962", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%89%EC%8A%A4+%EB%B8%8C%EB%A3%A8%ED%95%98%EC%9A%B0%EC%8A%A4+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호라이즌 루프탑 레스토랑": {
        photos: ["/images/pattaya/info/restaurants/horizon-rooftop-restaurant-hilton-pattaya.jpg"],
        summary: "호라이즌 루프탑 레스토랑&바 기준으로 확인한 파타야 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.5", "파타야 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00 ~ 오전 1:00; 화요일: 오후 4:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14502152637633222503", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%EB%9D%BC%EC%9D%B4%EC%A6%8C+%EB%A3%A8%ED%94%84%ED%83%91+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "킹 씨푸드 파타야": {
        photos: ["/images/pattaya/info/restaurants/king-seafood-pattaya-walking-street.jpg"],
        summary: "신선한 해산물을 합리적인 가격에 즐길 수 있는 파타야 대표 씨푸드 맛집",
        updatedAt: "2026-07-15",
        highlights: ["신선한 해산물 요리", "가성비 좋은 메뉴 구성"],
        tips: ["인기 메뉴는 미리 주문하는 것을 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 3:00 ~ 오전 1:00; 화요일: 오후 3:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3244620336779569369", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%B9+%EC%94%A8%ED%91%B8%EB%93%9C+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "렝키 레스토랑": {
        photos: ["/images/pattaya/info/restaurants/leng-kee-restaurant-pattaya.jpg"],
        summary: "현지 분위기를 물씬 느낄 수 있는 가성비 넘치는 로컬 식당",
        updatedAt: "2026-07-15",
        highlights: ["태국 현지식 맛집", "부담 없는 가격대"],
        tips: ["현지인들이 즐겨 찾는 곳"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.lkpattaya.com/lengkee", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13256691157917588018", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%9D%ED%82%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "댕덤 파타야": {
        photos: ["/images/pattaya/info/restaurants/dang-dum-pattaya.jpg"],
        summary: "파타야 여행 중 든든하게 한 끼 해결하기 좋은 로컬 맛집",
        updatedAt: "2026-07-15",
        highlights: ["다양한 태국 요리", "친근하고 편안한 분위기"],
        tips: ["가족 단위 방문객에게 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 10:00; 화요일: 오전 6:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/share/CcYKpcrdoqjNs3Uc/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7498793672209721533", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8C%95%EB%8D%A4+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "재토 비프누들 파타야": {
        photos: ["/images/pattaya/info/restaurants/jae-tho-beef-noodle-pattaya.jpg"],
        summary: "진한 육수가 일품인 소고기 국수 맛집",
        updatedAt: "2026-07-15",
        highlights: ["깊은 풍미의 비프 누들", "현지 로컬 분위기"],
        tips: ["웨이팅이 있을 수 있으니 서두르세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 4:00; 화요일: 오전 7:00 ~ 오후 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12764660300386814392", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%AC%ED%86%A0+%EB%B9%84%ED%94%84%EB%88%84%EB%93%A4+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "매스리루언 파타야": {
        photos: ["/images/pattaya/info/restaurants/mae-sri-ruen-pattaya.jpg"],
        summary: "매 씨 르언 기준으로 확인한 파타야 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.3", "파타야 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.msrpattaya.com/home.php", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6177734406190590598", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%A4%EC%8A%A4%EB%A6%AC%EB%A3%A8%EC%96%B8+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "수땅락 파타야": {
        photos: ["/images/pattaya/info/restaurants/suttangrak-pattaya.jpg"],
        summary: "Suttangrak Pattaya 기준으로 확인한 파타야 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.1", "파타야 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2406433390329238110", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%98%EB%95%85%EB%9D%BD+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "쏨땀 빌라 파타야": {
        photos: ["/images/pattaya/info/restaurants/somtum-villa-pattaya.jpg"],
        summary: "현지 느낌 물씬 나는 상큼하고 매콤한 쏨땀 맛집",
        updatedAt: "2026-07-15",
        highlights: ["정통 태국식 쏨땀", "다양한 로컬 메뉴"],
        tips: ["캐주얼하게 즐기기 좋은 곳이에요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.alacampagnepattaya.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17548976112722814085", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8F%A8%EB%95%80+%EB%B9%8C%EB%9D%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "르언타이 레스토랑": {
        photos: ["/images/pattaya/info/restaurants/ruenthai-restaurant-pattaya.jpg"],
        summary: "파타야에서 편안하게 즐기는 클래식한 태국 요리",
        updatedAt: "2026-07-15",
        highlights: ["깔끔한 태국 전통 음식", "가족 식사에 추천"],
        tips: ["대중적인 맛이라 누구나 좋아해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.ruenthairestaurant.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12061130142638531322", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A5%B4%EC%96%B8%ED%83%80%EC%9D%B4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "인디언 바이 네이처": {
        photos: ["/images/pattaya/info/restaurants/indian-by-nature-pattaya.jpg"],
        summary: "깊은 풍미를 느낄 수 있는 프리미엄 인도 요리 전문점",
        updatedAt: "2026-07-15",
        highlights: ["진한 커리와 난의 조화", "고급스러운 분위기"],
        tips: ["특별한 저녁 식사 장소로 딱이에요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:30~10:30; 화요일: 오후 5:30~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.indian-by-nature.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11981583374240470702", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B8%EB%94%94%EC%96%B8+%EB%B0%94%EC%9D%B4+%EB%84%A4%EC%9D%B4%EC%B2%98+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카사 파스칼": {
        photos: ["/images/pattaya/info/restaurants/casa-pascal-pattaya.jpg"],
        summary: "분위기 좋은 식사를 원하는 분들께 추천하는 곳",
        updatedAt: "2026-07-15",
        highlights: ["깔끔하고 세련된 분위기", "높은 평점의 검증된 맛"],
        tips: ["여유로운 식사를 위해 예약 권장"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 2:00, 오후 6:00~11:00; 화요일: 오전 8:00 ~ 오후 2:00, 오후 6:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.restaurant-in-pattaya.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4509486574992717759", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%82%AC+%ED%8C%8C%EC%8A%A4%EC%B9%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빅 피시 파타야": {
        photos: ["/images/pattaya/info/restaurants/big-fish-pattaya.jpg"],
        summary: "신선한 해산물을 마음껏 즐길 수 있는 씨푸드 뷔페",
        updatedAt: "2026-07-15",
        highlights: ["다양하고 풍성한 해산물 구성", "가족 여행객에게 추천하는 가성비 맛집"],
        tips: ["인기 시간대는 미리 예약하는 것이 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 12:00; 화요일: 오전 6:00 ~ 오후 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.bigfishpattaya.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8276935618542990873", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%85+%ED%94%BC%EC%8B%9C+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "팻 벨리 파타야": {
        photos: ["/images/pattaya/info/restaurants/fat-belly-pattaya.jpg"],
        summary: "맛과 분위기를 모두 잡은 힙한 로컬 맛집",
        updatedAt: "2026-07-15",
        highlights: ["현지 느낌 가득한 식사 공간", "믿고 먹는 높은 평점"],
        tips: ["피크 타임에는 웨이팅이 있을 수 있음"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.manhattanpattaya.com/facilities/fat-belly-pattaya/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10996253832452252477", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%BB+%EB%B2%A8%EB%A6%AC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 초콜릿 팩토리 파타야": {
        photos: ["/images/pattaya/info/restaurants/the-chocolate-factory-pattaya.jpg"],
        summary: "초콜릿 팩토리 (파타야 수쿰빗) 기준으로 확인한 파타야 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대표 메뉴", "평점 4.5", "파타야 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대표 메뉴", items: [{ name: "대표 메뉴", price: "฿100~2000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/thechocolatefactorythailand/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12164575106381695683", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%B4%88%EC%BD%9C%EB%A6%BF+%ED%8C%A9%ED%86%A0%EB%A6%AC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%8C%8C%ED%83%80%EC%95%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
