import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "싱하이 광장": {
        photos: ["/images/dalian/info/tourSpa/xinghai-square-dalian.jpg"],
        summary: "바다와 광장의 탁 트인 풍경을 만끽하며 산책하기 좋은 다롄의 랜드마크입니다.",
        updatedAt: "2026-07-14",
        highlights: ["시원한 바다 전망", "웅장한 광장 야경"],
        tips: ["해 질 녘에 방문하면 아름다운 노을과 야경을 동시에 즐길 수 있어요."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "VHJH+WGJ, Zhong Shan Lu, Sha He Kou Qu, Da Lian Shi, Liao Ning Sheng, 중국 116023", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15622764631647971453", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%B1%ED%95%98%EC%9D%B4+%EA%B4%91%EC%9E%A5+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "방추이다오 풍경구": {
        photos: ["/images/dalian/info/tourSpa/bangchuidao-scenic-area-dalian.jpg"],
        summary: "아름다운 해안선을 따라 여유로운 산책과 휴식을 즐기기 좋은 명소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["아름다운 해안 산책로", "조용한 힐링 스팟"],
        tips: ["해변을 따라 걷는 코스가 많으니 편한 신발을 착용하는 것을 추천해요."],
        hours: "방문 전 확인 권장",
        duration: "2~3시간",
        price: "입장권별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "중국 Liao Ning Sheng, Da Lian Shi, Zhong Shan Qu, 迎宾路1号 邮政编码: 116015", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12321576282320515011", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%A9%EC%B6%94%EC%9D%B4%EB%8B%A4%EC%98%A4+%ED%92%8D%EA%B2%BD%EA%B5%AC+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다롄 삼림동물원": {
        photos: ["/images/dalian/info/tourSpa/dalian-forest-zoo.jpg"],
        summary: "아이와 함께하는 가족 여행객에게 딱 좋은 다롄의 대형 동물원입니다.",
        updatedAt: "2026-07-14",
        highlights: ["다양한 동물 관람", "가족 나들이 최적지"],
        tips: ["반나절 정도의 일정으로 계획하면 여유롭게 둘러보기 좋습니다."],
        hours: "방문 전 확인 권장",
        duration: "3~5시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "중국 랴오닝 성 다롄 시 사허커우 구 VJM2+GX2 邮政编码: 116023", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16014228404287246547", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EB%A1%84+%EC%82%BC%EB%A6%BC%EB%8F%99%EB%AC%BC%EC%9B%90+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라오후탄 해양공원": {
        photos: ["/images/dalian/info/tourSpa/laohutan-ocean-park-dalian.jpg"],
        summary: "해양 동물 전시와 공연을 함께 볼 수 있는 다롄 대표 가족 명소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["해양 동물 전시와 공연을 함께 볼 수 있는 다롄 대표 가족 명소입니다.", "평점 4.4", "다롄 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "3~5시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "9 Bin Hai Zhong Lu, Zhong Shan Qu, Da Lian Shi, Liao Ning Sheng, 중국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.laohutan.com.cn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14064539520300380848", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%98%A4%ED%9B%84%ED%83%84+%ED%95%B4%EC%96%91%EA%B3%B5%EC%9B%90+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "뤼순항": {
        photos: ["/images/dalian/info/tourSpa/lushun-port-dalian.jpg"],
        summary: "근대사 유적과 항구 풍경을 함께 둘러보는 다롄 근교 코스입니다.",
        updatedAt: "2026-07-14",
        highlights: ["근대사 유적과 항구 풍경을 함께 둘러보는 다롄 근교 코스입니다.", "평점 None", "다롄 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "반나절",
        price: "교통·입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "중국 랴오닝 성 다롄 시 뤼순커우 구", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15417985463403507392", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A4%BC%EC%88%9C%ED%95%AD+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
