import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "와이탄": {
        photos: ["/images/shanghai/info/tourSpa/the-bund-shanghai.jpg"],
        summary: "상하이 야경과 역사적 건축을 한 번에 볼 수 있는 대표 산책 코스입니다.",
        updatedAt: "2026-07-14",
        highlights: ["상하이 야경과 역사적 건축을 한 번에 볼 수 있는 대표 산책 코스입니다.", "평점 4.8", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "중국 Shang Hai Shi, Pu Dong Xin Qu, Lujiazui, 陆家嘴西路2967号 邮政编码: 200120", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12335756602182933694", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%80%EC%9D%B4%ED%83%84+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "예원": {
        photos: ["/images/shanghai/info/tourSpa/yu-garden-shanghai.jpg"],
        summary: "전통 정원과 상점가를 함께 둘러보기 좋은 상하이 대표 명소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["전통 정원과 상점가를 함께 둘러보기 좋은 상하이 대표 명소입니다.", "평점 4.5", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 휴무일; 화요일: 오전 9:00 ~ 오후 4:30",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "중국 상하이 시 황푸 구 四牌楼 邮政编码: 200000", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9556895105391581147", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%88%EC%9B%90+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "상하이 타워 전망대": {
        photos: ["/images/shanghai/info/tourSpa/shanghai-tower-observation-deck.jpg"],
        summary: "루자쭈이 고층 빌딩 숲과 도시 전경을 조망하는 전망대입니다.",
        updatedAt: "2026-07-14",
        highlights: ["루자쭈이 고층 빌딩 숲과 도시 전경을 조망하는 전망대입니다.", "평점 4.6", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:30 ~ 오후 9:30; 화요일: 오전 8:30 ~ 오후 9:30",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "501 Yin Cheng Zhong Lu, Lujiazui, Pu Dong Xin Qu, Shang Hai Shi, 중국 200120", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3830892174392470056", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%81%ED%95%98%EC%9D%B4+%ED%83%80%EC%9B%8C+%EC%A0%84%EB%A7%9D%EB%8C%80+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "상하이 디즈니랜드": {
        photos: ["/images/shanghai/info/tourSpa/shanghai-disneyland.jpg"],
        summary: "상하이 여행의 필수 코스, 압도적 규모를 자랑하는 테마파크예요.",
        updatedAt: "2026-07-14",
        highlights: ["짜릿한 트론 라이트사이클", "밤하늘을 수놓는 성 프로젝션 쇼"],
        tips: ["대기 시간을 줄이려면 프리미어 액세스 구매가 필수예요."],
        hours: "월요일: 오전 8:30 ~ 오후 9:30; 화요일: 오전 8:30 ~ 오후 9:30",
        duration: "하루",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "중국 상하이 시 푸둥 신구 4MV5+945 邮政编码: 201205", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.shanghaidisneyresort.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7643750451235837100", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%81%ED%95%98%EC%9D%B4+%EB%94%94%EC%A6%88%EB%8B%88%EB%9E%9C%EB%93%9C+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "주자자오 수향마을": {
        photos: ["/images/shanghai/info/tourSpa/zhujiajiao-ancient-town-shanghai.jpg"],
        summary: "상하이 근교에서 옛 운하의 정취를 만끽할 수 있는 곳이에요.",
        updatedAt: "2026-07-14",
        highlights: ["나룻배 타고 즐기는 여유로운 수로 투어", "고즈넉한 골목길 산책"],
        tips: ["반나절 코스로 가볍게 다녀오기 좋아요."],
        hours: "방문 전 확인 권장",
        duration: "반나절",
        price: "교통·입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "중국 상하이 시 칭푸 구 주자자오 4364+82Q 邮政编码: 201713", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3749861631834114476", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A3%BC%EC%9E%90%EC%9E%90%EC%98%A4+%EC%88%98%ED%96%A5%EB%A7%88%EC%9D%84+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
