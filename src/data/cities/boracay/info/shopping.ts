import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "디몰 보라카이": {
        photos: ["/images/boracay/info/shopping/d-mall-boracay.jpg"],
        summary: "보라카이 쇼핑의 중심이자 기념품 쇼핑의 성지",
        updatedAt: "2026-07-15",
        highlights: ["다양한 브랜드와 기념품점이 밀집된 핫플레이스", "맛집과 카페가 모여 있어 식사와 쇼핑을 한 번에 해결 가능"],
        tips: ["인기 있는 기념품은 품절될 수 있으니 여행 초기에 방문하는 것을 추천해요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14031621476538764473", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94%EB%AA%B0+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시티몰 보라카이": {
        photos: ["/images/boracay/info/shopping/citymall-boracay.jpg"],
        summary: "쾌적하고 현대적인 분위기에서 즐기는 쇼핑 공간",
        updatedAt: "2026-07-15",
        highlights: ["깔끔한 시설과 다양한 편의시설을 갖춘 쇼핑몰", "현지 느낌을 느끼며 여유롭게 둘러보기 좋은 곳"],
        tips: ["에어컨이 시원해 더위를 피하며 쉬어가기 딱 좋아요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 8:00; 화요일: 오전 9:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8116414407269895427", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%8B%B0%EB%AA%B0+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이몰 보라카이": {
        photos: ["/images/boracay/info/shopping/e-mall-boracay.jpg"],
        summary: "현지 분위기를 느끼며 가볍게 둘러보기 좋은 곳",
        updatedAt: "2026-07-15",
        highlights: ["로컬 기념품과 생필품을 부담 없는 가격에 구매 가능", "부담 없이 산책하듯 들르기 좋은 규모"],
        tips: ["규모가 크지 않으니 필요한 물건 리스트를 미리 챙겨가면 좋아요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14473256542113213630", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EB%AA%B0+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "버짓마트 스테이션2": {
        photos: ["/images/boracay/info/shopping/budget-mart-boracay-station-2.jpg"],
        summary: "스테이션 2 중심가에서 간편하게 이용하기 좋은 로컬 마트입니다.",
        updatedAt: "2026-07-15",
        highlights: ["간식 및 음료 쇼핑", "스테이션 2 접근성 좋음"],
        tips: ["현지 물가를 경험하며 가볍게 들르기 좋아요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오전 12:00; 화요일: 오전 8:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1256214618013896751", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%84%EC%A7%93%EB%A7%88%ED%8A%B8+%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%982+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크래프츠 오브 보라카이": {
        photos: ["/images/boracay/info/shopping/crafts-of-boracay-supermarket-department-store.jpg"],
        summary: "보라카이의 다양한 기념품과 생필품을 한 번에 둘러보기 좋습니다.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 기념품 종류", "대형 마트 스타일"],
        tips: ["기념품 쇼핑 리스트를 채울 때 들르기 딱이에요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10165237259758602097", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%9E%98%ED%94%84%EC%B8%A0+%EC%98%A4%EB%B8%8C+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "디니위드 비치 로드 숍": {
        photos: ["/images/boracay/info/shopping/diniwid-beach-road-shops-boracay.jpg"],
        summary: "보라카이의 아름다운 진주 제품을 만날 수 있는 곳입니다.",
        updatedAt: "2026-07-15",
        highlights: ["고퀄리티 진주 제품", "믿고 사는 기념품"],
        tips: ["소중한 사람을 위한 특별한 선물용으로 추천해요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.pickapearl.co/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13004924386994584146", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94%EB%8B%88%EC%9C%84%EB%93%9C+%EB%B9%84%EC%B9%98+%EB%A1%9C%EB%93%9C+%EC%88%8D+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스테이션2 기념품 숍": {
        photos: ["/images/boracay/info/shopping/station-2-souvenir-shops-boracay.jpg"],
        summary: "스테이션 2 중심가에서 가볍게 들르기 좋은 알찬 기념품 숍입니다.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 종류의 소품과 기념품", "스테이션 2 내 뛰어난 접근성"],
        tips: ["바(Bar) 근처라 위치 찾기가 매우 쉬워요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1875867756651895083", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%982+%EA%B8%B0%EB%85%90%ED%92%88+%EC%88%8D+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "탈리파파 부키드": {
        photos: ["/images/boracay/info/shopping/talipapa-bukid-boracay.jpg"],
        summary: "현지 분위기를 물씬 느낄 수 있는 로컬 시장 스타일의 쇼핑 스팟입니다.",
        updatedAt: "2026-07-15",
        highlights: ["현지 느낌 가득한 구경거리", "가성비 좋은 아이템"],
        tips: ["로컬 마켓 특유의 활기찬 분위기를 즐겨보세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 5:00 ~ 오후 8:00; 화요일: 오전 5:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12835597714590610777", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%88%EB%A6%AC%ED%8C%8C%ED%8C%8C+%EB%B6%80%ED%82%A4%EB%93%9C+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아일랜드 수비니어스 보라카이": {
        photos: ["/images/boracay/info/shopping/islands-souvenirs-boracay.jpg"],
        summary: "보라카이 여행객들이 가장 많이 찾는 유명 기념품 전문점입니다.",
        updatedAt: "2026-07-15",
        highlights: ["깔끔하고 세련된 디자인의 굿즈", "D'mall 내 위치해 쇼핑하기 편리함"],
        tips: ["보라카이 전용 티셔츠나 마그넷을 사기에 가장 좋아요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 7:00; 화요일: 오전 9:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.theislandsgroup.com/islandssouvenirs.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12256533960300073615", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%EC%88%98%EB%B9%84%EB%8B%88%EC%96%B4%EC%8A%A4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하이딜랜드 델리 보라카이": {
        photos: ["/images/boracay/info/shopping/heidiland-deli-boracay.jpg"],
        summary: "Heidiland Deli 기준으로 확인한 보라카이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 4.5", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 7:30; 화요일: 오전 9:30 ~ 오후 7:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12415850628979960261", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%9D%B4%EB%94%9C%EB%9E%9C%EB%93%9C+%EB%8D%B8%EB%A6%AC+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
