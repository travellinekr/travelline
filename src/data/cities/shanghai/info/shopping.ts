import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "난징동루 보행가": {
        photos: ["/images/shanghai/info/shopping/nanjing-road-pedestrian-street-shanghai.jpg"],
        summary: "Nanjing Road Pedestrian Street 기준으로 확인한 상하이 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["대형 상점, 기념품, 야경 동선", "평점 4.6", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2673353610482772141", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%9C%EC%A7%95%EB%8F%99%EB%A3%A8+%EB%B3%B4%ED%96%89%EA%B0%80+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "상하이 IFC 몰": {
        photos: ["/images/shanghai/info/shopping/ifc-mall-shanghai.jpg"],
        summary: "IFC Mall 기준으로 확인한 상하이 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["명품, 레스토랑, 루자쭈이 쇼핑", "평점 4.4", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16767492508016795415", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%81%ED%95%98%EC%9D%B4+IFC+%EB%AA%B0+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "IAPM 몰": {
        photos: ["/images/shanghai/info/shopping/iapm-mall-shanghai.jpg"],
        summary: "IAPM Mall 기준으로 확인한 상하이 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["패션, 뷰티, 늦은 시간 쇼핑", "평점 4.6", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://goshopshanghai.com/iapm-shanghai-2318.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4802739981174146100", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=IAPM+%EB%AA%B0+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "신천지 스타일": {
        photos: ["/images/shanghai/info/shopping/xintiandi-style-shanghai.jpg"],
        summary: "세련된 디자이너 브랜드와 감각적인 카페가 모여 있는 상하이의 트렌디한 쇼핑 명소.",
        updatedAt: "2026-07-14",
        highlights: ["감각적인 디자이너 브랜드", "분위기 좋은 테라스 카페", "고급 레스토랑"],
        tips: ["주말보다는 평일 오후에 방문해야 여유롭게 즐길 수 있어요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16312196371241885220", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%EC%B2%9C%EC%A7%80+%EC%8A%A4%ED%83%80%EC%9D%BC+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "톈즈팡": {
        photos: ["/images/shanghai/info/shopping/tianzifang-shanghai.jpg"],
        summary: "아기자기한 골목길 사이로 개성 넘치는 소품샵과 카페가 가득한 예술가 거리.",
        updatedAt: "2026-07-14",
        highlights: ["아기자기한 기념품 쇼핑", "감성적인 공예품 구경", "골목 속 숨은 카페 투어"],
        tips: ["좁은 골목이 많으니 편한 운동화를 신고 방문하는 것을 추천해요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11771718863057848973", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%88%EC%A6%88%ED%8C%A1+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
