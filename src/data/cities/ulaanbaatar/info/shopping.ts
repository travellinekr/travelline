import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "국영백화점": {
        photos: ["/images/ulaanbaatar/info/shopping/state-department-store-ulaanbaatar.jpg"],
        summary: "국영백화점 기준으로 확인한 울란바토르 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["기념품, 캐시미어, 생활 쇼핑", "평점 4.3", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.nomin.mn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17703290559929967760", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%AD%EC%98%81%EB%B0%B1%ED%99%94%EC%A0%90+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "갤러리아 울란바토르": {
        photos: ["/images/ulaanbaatar/info/shopping/galleria-ulaanbaatar.jpg"],
        summary: "Galleria Ulaanbaatar 기준으로 확인한 울란바토르 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["패션, 카페, 도심 쇼핑", "평점 4.5", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/GalleriaUlaanbaatar/?mibextid=ZbWKwL", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6005801688004180984", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%A4%EB%9F%AC%EB%A6%AC%EC%95%84+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "샹그릴라 몰": {
        photos: ["/images/ulaanbaatar/info/shopping/shangri-la-mall-ulaanbaatar.jpg"],
        summary: "Shangri-La Mall 기준으로 확인한 울란바토르 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["브랜드, 레스토랑, 영화관", "평점 4.5", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://shangrilacentreub.mn/shangri-la-mall/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3991590028733705157", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%B9%EA%B7%B8%EB%A6%B4%EB%9D%BC+%EB%AA%B0+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "나란툴 시장": {
        photos: ["/images/ulaanbaatar/info/shopping/naran-tuul-market-ulaanbaatar.jpg"],
        summary: "현지 로컬 분위기를 제대로 느낄 수 있는 울란바토르 최대 규모의 전통 시장",
        updatedAt: "2026-07-14",
        highlights: ["전통 의류 및 생활용품", "활기찬 현지 마켓 체험"],
        tips: ["흥정은 필수, 소매치기는 주의하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 8:00; 화요일: 휴무일",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9642611372025007330", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EB%9E%80%ED%88%B4+%EC%8B%9C%EC%9E%A5+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "고비 캐시미어": {
        photos: ["/images/ulaanbaatar/info/shopping/gobi-cashmere-ulaanbaatar.jpg"],
        summary: "몽골 여행 선물 1순위, 부드러운 프리미엄 캐시미어를 만나는 곳",
        updatedAt: "2026-07-14",
        highlights: ["고품질 캐시미어 의류", "기념품 쇼핑"],
        tips: ["세일 기간을 노리면 더 저렴하게 득템 가능"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.gobi.mn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3838172254526818296", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A0%EB%B9%84+%EC%BA%90%EC%8B%9C%EB%AF%B8%EC%96%B4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
