import type { RestaurantInfo } from '@/data/card-info-types';

const info: Record<string, RestaurantInfo> = {
    "리코스 레촌": {
        photos: ["/images/cebu/info/restaurants/ricos-lechon.jpg"],
        summary: "세부의 유명한 레촌 전문점입니다.",
        updatedAt: "2026-07-12",
        highlights: ["레촌 맛집"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "short dish/category", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.ricoslechon.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10392488734988804874", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%BD%94%EC%8A%A4+%EB%A0%88%EC%B4%8C+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "하우스 오브 레촌": {
        photos: ["/images/cebu/info/restaurants/house-of-lechon.jpg"],
        summary: "높은 평점을 자랑하는 레촌 레스토랑입니다.",
        updatedAt: "2026-07-12",
        highlights: ["높은 구글 평점"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "short dish/category", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://house-of-lechon.shop/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13743440350264205159", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%98%A4%EB%B8%8C+%EB%A0%88%EC%B4%8C+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "레드크랩 세부": {
        photos: ["/images/cebu/info/restaurants/red-crab-cebu.jpg"],
        summary: "해산물을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-12",
        highlights: ["해산물 요리"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "정보 없음", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=100029538203349", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15710559026763504696", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%88%EB%93%9C%ED%81%AC%EB%9E%A9+%EC%84%B8%EB%B6%80+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "란타우 플로팅 네이티브 레스토랑": {
        photos: ["/images/cebu/info/restaurants/lantaw-floating-native-restaurant.jpg"],
        summary: "바다 위에서 식사하는 이색적인 레스토랑입니다.",
        updatedAt: "2026-07-12",
        highlights: ["플로팅 레스토랑", "현지 분위기"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "정보 없음", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/LantawSeafoodandGrill/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5625261835055012714", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%80%ED%83%80%EC%9A%B0+%ED%94%8C%EB%A1%9C%ED%8C%85+%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "골드망고 그릴": {
        photos: ["/images/cebu/info/restaurants/gold-mango-grill.jpg"],
        summary: "높은 평점을 보유한 그릴 요리 전문점입니다.",
        updatedAt: "2026-07-12",
        highlights: ["그릴 요리", "높은 구글 평점"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "short dish/category", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1059706312295605133", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A8%EB%93%9C%EB%A7%9D%EA%B3%A0+%EA%B7%B8%EB%A6%B4+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "파롤라 씨뷰 레스토랑": {
        photos: ["/images/cebu/info/restaurants/parola-seaview-restaurant.jpg"],
        summary: "다나오에서 아름다운 바다 전망을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-12",
        highlights: ["바다 전망"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "short dish/category", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/parolaseaview?mibextid=ZbWKwL", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6550066795522532856", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%EB%A1%A4%EB%9D%BC+%EC%94%A8%EB%B7%B0+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "주부촌": {
        photos: ["/images/cebu/info/restaurants/zubuchon.jpg"],
        summary: "세부 시티에 위치한 현지 식당입니다.",
        updatedAt: "2026-07-12",
        highlights: ["정보 없음", "Zubuchon", "네이버 최근 1년 후보 7위"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "정보 없음", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12731704569528987171", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A3%BC%EB%B6%80%EC%B4%8C+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "에이에이 바비큐": {
        photos: ["/images/cebu/info/restaurants/aa-bbq.jpg"],
        summary: "세부 시티의 바비큐 전문점입니다.",
        updatedAt: "2026-07-12",
        highlights: ["정보 없음", "AA BBQ", "네이버 최근 1년 후보 8위"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "정보 없음", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://aabbq.org/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16997550835311780085", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EC%9D%B4%EC%97%90%EC%9D%B4+%EB%B0%94%EB%B9%84%ED%81%90+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "버킷 쉬림프": {
        photos: ["/images/cebu/info/restaurants/bucket-shrimps.jpg"],
        summary: "다양한 새우 요리를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-12",
        highlights: ["새우 요리"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "새우 요리", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~10:00; 화요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16234959626797526949", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%84%ED%82%B7+%EC%89%AC%EB%A6%BC%ED%94%84+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "오이스터 베이": {
        photos: ["/images/cebu/info/restaurants/oyster-bay-seafood-restaurant.jpg"],
        summary: "신선한 굴 요리를 맛볼 수 있는 해산물 레스토랑입니다.",
        updatedAt: "2026-07-12",
        highlights: ["굴 요리"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "굴 요리", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 6:00~10:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16933864847938403119", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%9D%B4%EC%8A%A4%ED%84%B0+%EB%B2%A0%EC%9D%B4+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "게리스 그릴": {
        photos: ["/images/cebu/info/restaurants/gerrys-grill.jpg"],
        summary: "평점 4.8의 높은 인기를 자랑하는 곳입니다.",
        updatedAt: "2026-07-12",
        highlights: ["Central Bloc 위치", "평점 4.8"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "정보 없음", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.gerrysgrill.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8308129887598048411", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B2%8C%EB%A6%AC%EC%8A%A4+%EA%B7%B8%EB%A6%B4+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "피라미드": {
        photos: ["/images/cebu/info/restaurants/the-pyramid.jpg"],
        summary: "Garden Bloc에 위치한 평점 4점의 식당입니다.",
        updatedAt: "2026-07-12",
        highlights: ["Garden Bloc 위치", "평점 4"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "정보 없음", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14430837232330338022", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EB%9D%BC%EB%AF%B8%EB%93%9C+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "아바카 베이킹 컴퍼니": {
        photos: ["/images/cebu/info/restaurants/abaca-baking-company.jpg"],
        summary: "NUSTAR 리조트 내에 있는 곳입니다.",
        updatedAt: "2026-07-12",
        highlights: ["NUSTAR 리조트 위치", "평점 4"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "short dish/category", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1445115719214418309", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%B0%94%EC%B9%B4+%EB%B2%A0%EC%9D%B4%ED%82%B9+%EC%BB%B4%ED%8D%BC%EB%8B%88+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "라 비에 파리지엔": {
        photos: ["/images/cebu/info/restaurants/la-vie-parisienne.jpg"],
        summary: "Gorordo Ave에 위치한 평점 4.3의 맛집입니다.",
        updatedAt: "2026-07-12",
        highlights: ["Gorordo Ave 위치", "평점 4.3"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "short dish/category", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오전 1:00; 화요일: 오전 6:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7187646701021494392", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC+%EB%B9%84%EC%97%90+%ED%8C%8C%EB%A6%AC%EC%A7%80%EC%97%94+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "일라푸티": {
        photos: ["/images/cebu/info/restaurants/ilaputi.jpg"],
        summary: "세부의 유명한 맛집입니다.",
        updatedAt: "2026-07-12",
        highlights: ["세부 맛집", "평점 4.4"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "세부 맛집", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=218857330413001002", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%BC%EB%9D%BC%ED%91%B8%ED%8B%B0+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "쿡펍 세부": {
        photos: ["/images/cebu/info/restaurants/cookpub-cebu.png"],
        summary: "세부에서 맛있는 요리를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-12",
        highlights: ["세부 맛집", "CookPub-Cebu Banilad"],
        tips: ["현지 분위기를 느끼기 좋습니다."],
        menu: { signature: "세부 맛집", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오전 2:00; 화요일: 오전 11:00 ~ 오전 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.icookpub.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13612071473629602047", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BF%A1%ED%8E%8D+%EC%84%B8%EB%B6%80+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "씨엔티 레촌": {
        photos: ["/images/cebu/info/restaurants/cnt-lechon.jpg"],
        summary: "필리핀 전통 레촌을 맛볼 수 있는 식당입니다.",
        updatedAt: "2026-07-12",
        highlights: ["레촌 전문점", "CnT Lechon - Guadalupe"],
        tips: ["현지의 맛을 경험해보세요."],
        menu: { signature: "정보 없음", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/pages/Cnt-Lechon/100751080018862", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8353230861151258927", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%94%A8%EC%97%94%ED%8B%B0+%EB%A0%88%EC%B4%8C+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "마리바고 그릴": {
        photos: ["/images/cebu/info/restaurants/maribago-grill.jpg"],
        summary: "마리바고 지역에서 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-12",
        highlights: ["Maribago Grill", "마리바고 지역 맛집"],
        tips: ["현지 분위기를 만끽하기 좋습니다."],
        menu: { signature: "정보 없음", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14124768768645461093", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A6%AC%EB%B0%94%EA%B3%A0+%EA%B7%B8%EB%A6%B4+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "초비초비": {
        photos: ["/images/cebu/info/restaurants/choobi-choobi.jpg"],
        summary: "세부의 인기 있는 맛집입니다.",
        updatedAt: "2026-07-12",
        highlights: ["세부 맛집", "Choobi Choobi"],
        tips: ["Parkmall 내에 위치해 있습니다."],
        menu: { signature: "세부 맛집", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 5:30~10:00; 화요일: 오전 11:00 ~ 오후 2:00, 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://choobichoobi.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2832685960721123801", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B4%88%EB%B9%84%EC%B4%88%EB%B9%84+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "팀호완 세부": {
        photos: ["/images/cebu/info/restaurants/tim-ho-wan-cebu.jpg"],
        summary: "유명한 딤섬 전문점인 팀호완입니다.",
        updatedAt: "2026-07-12",
        highlights: ["세부 맛집", "Tim Ho Wan - SM City Cebu"],
        tips: ["SM City Cebu 쇼핑몰 안에 있습니다."],
        menu: { signature: "세부 맛집", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18403881097153144155", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%80%ED%98%B8%EC%99%84+%EC%84%B8%EB%B6%80+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
};

export default info;
