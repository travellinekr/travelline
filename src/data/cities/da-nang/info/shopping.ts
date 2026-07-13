import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "한시장": {
        photos: ["/images/da-nang/info/shopping/han-market-da-nang.jpg"],
        summary: "한시장 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["재래시장", "평점 3.9", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 7:00; 화요일: 오전 6:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10426483548095678271", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%9C%EC%8B%9C%EC%9E%A5+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "꼰시장": {
        photos: ["/images/da-nang/info/shopping/con-market-da-nang.jpg"],
        summary: "Con Market 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로컬 시장", "평점 4.3", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 7:00; 화요일: 오전 7:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5423764435960124639", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%BC%B0%EC%8B%9C%EC%9E%A5+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "롯데마트 다낭": {
        photos: ["/images/da-nang/info/shopping/lotte-mart-da-nang.jpg"],
        summary: "롯데마트 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["대형마트", "평점 4.2", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:30 ~ 오후 10:30; 화요일: 오전 7:30 ~ 오후 10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://lottemart.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6422198662840621221", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%AF%EB%8D%B0%EB%A7%88%ED%8A%B8+%EB%8B%A4%EB%82%AD+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈컴 플라자 응오꾸옌": {
        photos: ["/images/da-nang/info/shopping/vincom-plaza-ngo-quyen-da-nang.jpg"],
        summary: "빈컴플라자 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쇼핑몰", "평점 4.2", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://s.shopee.vn/1Vv2BJq9e1", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7818750409929595867", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EC%BB%B4+%ED%94%8C%EB%9D%BC%EC%9E%90+%EC%9D%91%EC%98%A4%EA%BE%B8%EC%98%8C+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "GO! 다낭": {
        photos: ["/images/da-nang/info/shopping/go-da-nang-big-c.jpg"],
        summary: "고마트 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["대형마트", "평점 4.2", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=96166354032554002", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=GO%21+%EB%8B%A4%EB%82%AD+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "헬리오 야시장": {
        photos: ["/images/da-nang/info/shopping/helio-night-market-da-nang.jpg"],
        summary: "헬리오 야시장 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["야시장", "평점 4.1", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=575708182054531290", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%AC%EB%A6%AC%EC%98%A4+%EC%95%BC%EC%8B%9C%EC%9E%A5+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "선짜 야시장": {
        photos: ["/images/da-nang/info/shopping/son-tra-night-market-da-nang.jpg"],
        summary: "Son Tra Night Market Vending Machine 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["야시장", "평점 4", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3724565687241828259", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%A0%EC%A7%9C+%EC%95%BC%EC%8B%9C%EC%9E%A5+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다낭 수버니어스 앤 카페": {
        photos: ["/images/da-nang/info/shopping/danang-souvenirs-cafe-da-nang.jpg"],
        summary: "An Nam Dragon Souvenir ダナン スーベニア 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["기념품숍", "평점 5", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 9:00; 화요일: 오전 8:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12387221539204512792", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EB%82%AD+%EC%88%98%EB%B2%84%EB%8B%88%EC%96%B4%EC%8A%A4+%EC%95%A4+%EC%B9%B4%ED%8E%98+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "논느억 석조각 마을": {
        photos: ["/images/da-nang/info/shopping/non-nuoc-stone-carving-village-da-nang.jpg"],
        summary: "Non Nuoc Stone Carving Village 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["전문 쇼핑", "평점 4.4", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hoiandaytrip.com/non-nuoc-stone-carving-village/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15791203966355593767", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%BC%EB%8A%90%EC%96%B5+%EC%84%9D%EC%A1%B0%EA%B0%81+%EB%A7%88%EC%9D%84+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "인도차이나 리버사이드 몰": {
        photos: ["/images/da-nang/info/shopping/indochina-riverside-mall-da-nang.jpg"],
        summary: "Indochina Mall 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["리버사이드 몰", "평점 3.9", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://indochinamall.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8397313528656959440", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B8%EB%8F%84%EC%B0%A8%EC%9D%B4%EB%82%98+%EB%A6%AC%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C+%EB%AA%B0+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
