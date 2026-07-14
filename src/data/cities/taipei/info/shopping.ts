import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "타이베이 101 몰": {
        photos: ["/images/taipei/info/shopping/taipei-101-mall.jpg"],
        summary: "Taipei 101 Shopping center 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["명품, 전망대 동선, 식당가", "평점 4.4", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12449305195821862972", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+101+%EB%AA%B0+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "신콩 미츠코시 신이점": {
        photos: ["/images/taipei/info/shopping/shin-kong-mitsukoshi-xinyi-place-taipei.jpg"],
        summary: "Shin Kong Mitsukoshi Taipei Xinyi Place A9 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 화장품, 푸드코트", "평점 4.4", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.skm.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6361610829778237583", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%EC%BD%A9+%EB%AF%B8%EC%B8%A0%EC%BD%94%EC%8B%9C+%EC%8B%A0%EC%9D%B4%EC%A0%90+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "브리즈 센터": {
        photos: ["/images/taipei/info/shopping/breeze-center-taipei.jpg"],
        summary: "브리즈 센터 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["럭셔리 브랜드, 식당가", "평점 4.1", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3845475555909579317", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%8C%EB%A6%AC%EC%A6%88+%EC%84%BC%ED%84%B0+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "브리즈 난산": {
        photos: ["/images/taipei/info/shopping/breeze-nanshan-taipei.jpg"],
        summary: "신이 지구의 트렌디한 브랜드와 맛집을 한 번에 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 브랜드 쇼핑", "테마 레스토랑"],
        tips: ["101 타워와 함께 방문하기 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5680610108945611872", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%8C%EB%A6%AC%EC%A6%88+%EB%82%9C%EC%82%B0+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "청핀생활 송옌": {
        photos: ["/images/taipei/info/shopping/eslite-spectrum-songyan-taipei.jpg"],
        summary: "감각적인 디자인 소품과 카페가 모여있는 문화 공간입니다.",
        updatedAt: "2026-07-13",
        highlights: ["디자인 굿즈", "분위기 좋은 카페"],
        tips: ["송산 문화창의공원 산책 코스로 추천해요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=707633478795868600", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B2%AD%ED%95%80%EC%83%9D%ED%99%9C+%EC%86%A1%EC%98%8C+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "청핀 신이점": {
        photos: ["/images/taipei/info/shopping/eslite-xinyi-store-taipei.jpg"],
        summary: "책과 아기자기한 문구류를 만날 수 있는 서점형 쇼핑몰입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 도서와 문구", "디자인 소품"],
        tips: ["선물용 굿즈를 고르기에 딱 좋아요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8777987053672578635", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B2%AD%ED%95%80+%EC%8B%A0%EC%9D%B4%EC%A0%90+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시먼딩": {
        photos: ["/images/taipei/info/shopping/ximending-taipei.jpg"],
        summary: "시먼띵 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 잡화, 스트리트 푸드", "평점 None", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14696636719173915895", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EB%A8%BC%EB%94%A9+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우펀푸 의류상가": {
        photos: ["/images/taipei/info/shopping/wufenpu-garment-wholesale-area-taipei.jpg"],
        summary: "Wufenpu Shopping District 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["저가 의류, 액세서리", "평점 3.8", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 1:00~10:00; 화요일: 오후 1:00~10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6586521638892744601", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%ED%8E%80%ED%91%B8+%EC%9D%98%EB%A5%98%EC%83%81%EA%B0%80+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "광화상장": {
        photos: ["/images/taipei/info/shopping/guanghua-digital-plaza-taipei.jpg"],
        summary: "광화 디지탈 플라자 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["전자제품, PC 부품, 카메라", "평점 4.3", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.gh3c.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5536674709653418375", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B4%91%ED%99%94%EC%83%81%EC%9E%A5+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삼창생활원구": {
        photos: ["/images/taipei/info/shopping/syntrend-creative-park-taipei.jpg"],
        summary: "최신 IT 기기와 가젯을 직접 체험해볼 수 있는 디지털 성지",
        updatedAt: "2026-07-13",
        highlights: ["최첨단 디지털 디바이스", "직접 만져보는 체험형 매장"],
        tips: ["전자제품 쇼핑 전 미리 모델 확인하기"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.syntrend.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11177466618835926370", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BC%EC%B0%BD%EC%83%9D%ED%99%9C%EC%9B%90%EA%B5%AC+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "닝샤 야시장": {
        photos: ["/images/taipei/info/shopping/ningxia-night-market-taipei.jpg"],
        summary: "규모는 작지만 알찬 먹거리로 가득한 로컬 감성 야시장",
        updatedAt: "2026-07-13",
        highlights: ["다양한 길거리 간식", "현지인 맛집 밀집"],
        tips: ["사람이 몰리는 저녁 시간대 주의하기"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 5:00~11:30; 화요일: 오후 5:00~11:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11738230280794280116", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%9D%EC%83%A4+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라오허제 야시장": {
        photos: ["/images/taipei/info/shopping/raohe-street-night-market-taipei.jpg"],
        summary: "화려한 입구와 맛있는 후추빵이 매력적인 활기찬 야시장",
        updatedAt: "2026-07-13",
        highlights: ["입구의 필수 코스 후추빵", "다양한 기념품 쇼핑"],
        tips: ["입구 근처 핫한 간식부터 공략하기"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 5:00 ~ 오전 12:00; 화요일: 오후 5:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4441131439049537270", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%98%A4%ED%97%88%EC%A0%9C+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스린 야시장": {
        photos: ["/images/taipei/info/shopping/shilin-night-market-taipei.jpg"],
        summary: "타이베이 최대 규모를 자랑하는 먹거리와 게임이 가득한 활기찬 야시장입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 길거리 음식", "클래식한 게임 존"],
        tips: ["주말에는 인파가 매우 많으니 여유 있게 방문하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 4:00 ~ 오전 12:00; 화요일: 오후 4:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16700031033317783849", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EB%A6%B0+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "디화제": {
        photos: ["/images/taipei/info/shopping/dihua-street-taipei.jpg"],
        summary: "대만의 전통적인 분위기를 느끼며 차와 기념품을 쇼핑하기 좋은 거리입니다.",
        updatedAt: "2026-07-13",
        highlights: ["전통 찻집", "건어물 및 한방 재료"],
        tips: ["빈티지한 건물 사이에서 인생샷을 남겨보세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14205669941712931358", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94%ED%99%94%EC%A0%9C+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "융캉제": {
        photos: ["/images/taipei/info/shopping/yongkang-street-taipei.jpg"],
        summary: "감성적인 카페와 아기자기한 소품샵이 모여 있는 미식과 쇼핑의 성지입니다.",
        updatedAt: "2026-07-13",
        highlights: ["감성 카페 투어", "아기자기한 소품샵"],
        tips: ["유명한 망고 빙수 맛집은 웨이팅이 필수예요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5968754090926352593", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%B5%EC%BA%89%EC%A0%9C+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "타이베이 시티몰": {
        photos: ["/images/taipei/info/shopping/taipei-city-mall.jpg"],
        summary: "아기자기한 소품과 피규어가 가득한 지하 상가",
        updatedAt: "2026-07-13",
        highlights: ["다양한 잡화 및 피규어", "귀여운 우산과 기념품"],
        tips: ["지하로 연결되어 날씨 상관없이 구경하기 좋음"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.taipeimall.com.tw/zh-TW", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17073237141737122094", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%EC%8B%9C%ED%8B%B0%EB%AA%B0+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "큐 스퀘어": {
        photos: ["/images/taipei/info/shopping/q-square-taipei.jpg"],
        summary: "타이베이역 인근에서 즐기는 편리한 쇼핑과 식사",
        updatedAt: "2026-07-13",
        highlights: ["타이베이역 최고의 접근성", "다양한 맛집 식당가"],
        tips: ["쇼핑 후 바로 식사하기 좋은 동선"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.qsquare.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14387500080804131345", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%90+%EC%8A%A4%ED%80%98%EC%96%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "ATT 4 FUN": {
        photos: ["/images/taipei/info/shopping/att-4-fun-taipei.jpg"],
        summary: "ATT 4 FUN Xinyi Store 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 레스토랑, 야간 동선", "평점 4.2", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.att4fun.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6987816836761181873", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=ATT+4+FUN+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미라마 엔터테인먼트 파크": {
        photos: ["/images/taipei/info/shopping/miramar-entertainment-park-taipei.jpg"],
        summary: "대관람차와 쇼핑, 영화를 한 번에 즐길 수 있는 복합 문화 공간입니다.",
        updatedAt: "2026-07-13",
        highlights: ["타이베이 야경 명소 대관람차", "다양한 브랜드 매장과 영화관"],
        tips: ["해 질 녘에 맞춰 관람차를 타면 멋진 야경을 볼 수 있어요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 1:00~10:00; 화요일: 오후 1:00~10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5580873808688303649", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EB%9D%BC%EB%A7%88+%EC%97%94%ED%84%B0%ED%85%8C%EC%9D%B8%EB%A8%BC%ED%8A%B8+%ED%8C%8C%ED%81%AC+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시티링크 송산": {
        photos: ["/images/taipei/info/shopping/citylink-songshan-taipei.jpg"],
        summary: "라오허 야시장 근처에서 쇼핑과 식사를 쾌적하게 즐기기 좋습니다.",
        updatedAt: "2026-07-13",
        highlights: ["송산역 연결로 편리한 접근성", "다양한 맛집이 모인 푸드코트"],
        tips: ["야시장 구경 전후에 들러서 시원하게 쇼핑하기 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.citylink.tw/songshan/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15130632300170540427", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%8B%B0%EB%A7%81%ED%81%AC+%EC%86%A1%EC%82%B0+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
