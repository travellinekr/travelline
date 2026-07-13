import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "담시장": {
        photos: ["/images/nha-trang/info/shopping/dam-market-nha-trang.jpg"],
        summary: "로컬 감성 가득한 나트랑 대표 시장이에요.",
        updatedAt: "2026-07-13",
        highlights: ["저렴한 기념품 쇼핑", "다양한 건어물 종류", "활기찬 현지 분위기"],
        tips: ["흥정은 필수, 웃으며 시도해보세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 5:00 ~ 오후 6:30; 화요일: 오전 5:00 ~ 오후 6:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16690157337651283829", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%B4%EC%8B%9C%EC%9E%A5+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "나트랑 센터": {
        photos: ["/images/nha-trang/info/shopping/nha-trang-center.jpg"],
        summary: "쇼핑과 맛집을 한 번에 즐기는 쾌적한 실내 몰입니다.",
        updatedAt: "2026-07-13",
        highlights: ["깔끔한 쇼핑 환경", "다양한 식당가 입점", "시원한 에어컨 동선"],
        tips: ["더운 낮 시간대에 시원하게 구경하기 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://nhatrangcenter.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16329877035520827187", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%ED%8A%B8%EB%9E%91+%EC%84%BC%ED%84%B0+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "롯데마트 나트랑": {
        photos: ["/images/nha-trang/info/shopping/lotte-mart-nha-trang.jpg"],
        summary: "여행객들의 필수 코스, 기념품 쟁이기 딱 좋은 곳이에요.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 과자와 간식", "여행 중 필요한 생필품", "깔끔하고 편리한 쇼핑"],
        tips: ["귀국 전 선물용 커피나 간식 쟁이기 추천!"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:30 ~ 오후 10:00; 화요일: 오전 8:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://lottemart.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12564291677517669989", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%AF%EB%8D%B0%EB%A7%88%ED%8A%B8+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈컴 플라자 쩐푸": {
        photos: ["/images/nha-trang/info/shopping/vincom-plaza-tran-phu-nha-trang.jpg"],
        summary: "쇼핑부터 맛집까지 한 번에 해결 가능한 나트랑 대표 복합 쇼핑몰입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 패션 브랜드", "쾌적한 마트와 식당가"],
        tips: ["더위를 피해 시원하게 쇼핑하기 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12191973860686659928", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EC%BB%B4+%ED%94%8C%EB%9D%BC%EC%9E%90+%EC%A9%90%ED%91%B8+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "GO! 나트랑": {
        photos: ["/images/nha-trang/info/shopping/go-nha-trang-big-c.jpg"],
        summary: "저렴한 가격으로 다양한 식료품과 생필품을 쟁여둘 수 있는 대형 마트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["가성비 좋은 간식류", "다양한 생활용품"],
        tips: ["기념품이나 여행 중 먹거리 쇼핑에 딱이에요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://minisovietnam.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3159735641050521135", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=GO%21+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "쏨머이 시장": {
        photos: ["/images/nha-trang/info/shopping/xom-moi-market-nha-trang.jpg"],
        summary: "나트랑 현지의 활기를 느낄 수 있는 로컬 식재료와 생필품 시장입니다.",
        updatedAt: "2026-07-13",
        highlights: ["신선한 로컬 식재료", "저렴한 생활용품"],
        tips: ["현지 분위기를 느끼며 소소하게 구경하기 좋습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 5:00; 화요일: 오전 6:00 ~ 오후 5:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5267769530783173301", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8F%A8%EB%A8%B8%EC%9D%B4+%EC%8B%9C%EC%9E%A5+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "나트랑 야시장": {
        photos: ["/images/nha-trang/info/shopping/nha-trang-night-market.jpg"],
        summary: "아기자기한 기념품과 맛있는 길거리 음식을 즐길 수 있는 활기찬 곳이에요.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 의류와 액세서리", "현지 분위기 가득한 야식"],
        tips: ["흥정은 필수! 조금씩 깎아보세요.", "사람이 많으니 소지품 관리에 유의하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 3:00~11:00; 화요일: 오후 3:00~11:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10838335052295821984", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%ED%8A%B8%EB%9E%91+%EC%95%BC%EC%8B%9C%EC%9E%A5+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "맥시마크 쇼핑몰": {
        photos: ["/images/nha-trang/info/shopping/maximark-shopping-mall-nha-trang.jpg"],
        summary: "식당가와 마트, 생활용품까지 한 번에 해결 가능한 깔끔한 쇼핑몰입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쾌적한 실내 환경", "다양한 맛집이 모인 푸드코트"],
        tips: ["더위를 피하고 싶을 때 방문하기 좋아요.", "쇼핑 후 식사까지 한 번에 해결 가능해요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://vincom.com.vn/vincom-plaza-le-thanh-ton", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1802869941442867287", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%A5%EC%8B%9C%EB%A7%88%ED%81%AC+%EC%87%BC%ED%95%91%EB%AA%B0+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "에이마트 나트랑": {
        photos: ["/images/nha-trang/info/shopping/a-mart-nha-trang.jpg"],
        summary: "현지 간식과 음료, 생활용품을 저렴하게 구매하기 좋은 마트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["베트남 로컬 과자와 음료", "가성비 좋은 기념품 쇼핑"],
        tips: ["여행 마지막 날 선물용 간식을 쟁여두기 좋아요.", "주변 소품샵과 함께 둘러보세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 11:00; 화요일: 오전 7:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10164038367829400863", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EC%9D%B4%EB%A7%88%ED%8A%B8+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈르엉 시장": {
        photos: ["/images/nha-trang/info/shopping/vinh-luong-market-nha-trang.jpg"],
        summary: "Chợ Hải Sản Cảng Vĩnh Lương 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해산물, 로컬 시장", "평점 4.3", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 9:00; 화요일: 오전 6:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14028121393395216724", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EB%A5%B4%EC%97%89+%EC%8B%9C%EC%9E%A5+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
