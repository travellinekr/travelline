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
    "황푸강 유람선": {
        photos: ["/images/shanghai/info/tourSpa/huangpu-river-cruise.jpg"],
        summary: "황푸강 위에서 즐기는 상하이 최고의 야경 명소",
        updatedAt: "2026-07-23",
        highlights: ["와이탄과 푸동의 대조적인 스카이라인 관람", "상하이의 밤을 완성하는 화려한 조명 쇼", "강바람과 함께 즐기는 낭만적인 크루즈 항해"],
        tips: ["일몰 직후나 야경이 가장 밝은 시간에 탑승하는 것을 추천합니다.", "인기가 많으므로 방문 전 사전 예약이 필수입니다."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "티켓별 상이",
        reservation: { required: true, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "153 or 291Zhongshan Dong Er Lu (Zhongshan East2nd Rd), 外滩黄浦区 중국 200120", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://www.chinahighlights.com/shanghai/attraction/huangpu-river-night-cruise.htm", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=15291995811876603287", type: "guide", description: "지도에서 위치 보기" }]
    },
    "우캉루": {
        photos: ["/images/shanghai/info/tourSpa/wukang-road.jpg"],
        summary: "상하이 프랑스 조계지의 낭만을 느낄 수 있는 가로수길 산책 및 우캉맨션 관람",
        updatedAt: "2026-07-23",
        highlights: ["랜드마크인 우캉맨션(Wukang Mansion) 인증샷 촬영", "프랑스 조계지 특유의 이국적인 유럽풍 건축물 감상", "플라타너스 가로수 아래 여유로운 거리 산책"],
        tips: ["주변에 예쁜 카페와 소품샵이 많으니 중간중간 휴식을 즐기세요.", "우캉맨션의 독특한 외관을 담으려면 건물 모퉁이에서 촬영하는 것을 추천합니다."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "무료 구역 중심",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "Wu Kang Lu, Xu Hui Qu, Shang Hai Shi, 중국 200031", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=12702381232704087663", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=12702381232704087663", type: "guide", description: "지도에서 위치 보기" }]
    },
    "상하이 서커스 월드": {
        photos: ["/images/shanghai/info/tourSpa/shanghai-circus-world.jpg"],
        summary: "뮤지컬처럼 화려하고 역동적인 연출이 돋보이는 상하이 필수 관람 코스",
        updatedAt: "2026-07-23",
        highlights: ["전통 서커스와 첨단 미디어 아트의 환상적인 조화", "중력을 거스르는 듯한 고난도 아크로바틱 기술", "눈과 귀를 동시에 사로잡는 웅장한 무대 연출"],
        tips: ["인기 공연은 매진이 빠르므로 사전 예약 필수", "공연 시작 최소 30분 전 도착하여 분위기 만끽하기"],
        hours: "방문 전 확인 권장",
        duration: "2시간",
        price: "공연 티켓별 상이",
        reservation: { required: true, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "2266 Gong He Xin Lu, Zhabei Qu, Shang Hai Shi, 중국 200435", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "http://www.shanghaimaxicheng.com/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=17249157065934424875", type: "guide", description: "지도에서 위치 보기" }]
    }
};

export default info;
