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
    "동방수성": {
        photos: ["/images/dalian/info/tourSpa/dalian-venice-water-city.jpg"],
        summary: "이탈리아 베네치아를 옮겨 놓은 듯한 아름다운 운하와 유럽풍 건축물이 매력적인 대련의 대표 야경 및 산책 코스입니다.",
        updatedAt: "2026-07-23",
        highlights: ["운하를 따라 펼쳐지는 이국적인 유럽식 건축물", "대련의 낭만을 느낄 수 있는 로맨틱한 야경", "인생샷을 남기기 좋은 아름다운 수변 산책로"],
        tips: ["해 질 녘에 방문하여 화려한 조명이 켜진 야경을 감상하는 것을 추천합니다.", "주변 동강 지역과 연계하여 일정을 짜면 더욱 효율적입니다."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "무료 구역 중심",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "WMGP+F39, Gang Pu Lu, Zhong Shan Qu, Da Lian Shi, Liao Ning Sheng, 중국", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "http://dalianpress.com/donggang-venice-water-city/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=6431358341302960772", type: "guide", description: "지도에서 위치 보기" }]
    },
    "중산광장": {
        photos: ["/images/dalian/info/tourSpa/zhongshan-square.jpg"],
        summary: "유럽식 건축미가 돋보이는 다롄의 상징적인 중심 광장",
        updatedAt: "2026-07-23",
        highlights: ["이국적인 유럽풍 근대 건축물 관람", "다롄 도심의 활기찬 분위기 체험", "야경 명소로 유명한 아름다운 조명"],
        tips: ["주변 건축물의 야경을 보기 위해 저녁 시간 방문을 추천합니다.", "광장 주변 산책로를 따라 천천히 걷는 코스가 좋습니다."],
        hours: "방문 전 확인 권장",
        duration: "1시간",
        price: "무료",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "중국 다롄 시 중산 구 邮政编码: 116006", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=7580736715527481881", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=7580736715527481881", type: "guide", description: "지도에서 위치 보기" }]
    },
    "어인부두": {
        photos: ["/images/dalian/info/tourSpa/fisherman-wharf.jpg"],
        summary: "유럽풍 건축물과 바다의 낭만이 가득한 대련의 대표적인 해안 산책 코스",
        updatedAt: "2026-07-23",
        highlights: ["이국적인 유럽 스타일 건축물", "탁 트인 바다 전망과 해안 산책로", "항구 특유의 활기찬 분위기"],
        tips: ["일몰 시간에 맞춰 방문하면 더욱 로맨틱한 풍경을 감상할 수 있습니다.", "주변에 신선한 해산물을 즐길 수 있는 식당이 많으니 함께 둘러보세요."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "무료 구역 중심",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "VMHP+225, Bin Hai Dong Lu, Zhong Shan Qu, Da Lian Shi, Liao Ning Sheng, 중국 116018", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=2793597153396065630", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=2793597153396065630", type: "guide", description: "지도에서 위치 보기" }]
    },
    "동관가 역사문화거리": {
        photos: ["/images/dalian/info/tourSpa/dongguan-street.jpg"],
        summary: "다롄의 역사가 살아 숨 쉬는 전통 거리로, 옛 건축물 사이에서 로컬 먹거리와 문화를 체험할 수 있는 산책 코스입니다.",
        updatedAt: "2026-07-23",
        highlights: ["전통 양식의 고풍스러운 건축물 관람", "다양한 길거리 음식과 로컬 맛집 탐방", "사진 찍기 좋은 레트로한 거리 풍경"],
        tips: ["해 질 녘 조명이 켜질 때 방문하면 더욱 낭만적인 분위기를 즐길 수 있습니다.", "주변 중산구 명소들과 연계하여 반나절 코스로 구성하기 좋습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "무료 구역 중심",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "WJCC+2Q2, Dong Guan Jie, Xi Gang Qu, Da Lian Shi, Liao Ning Sheng, 중국 116011", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=14502295599778273402", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=14502295599778273402", type: "guide", description: "지도에서 위치 보기" }]
    },
    "러시아풍정가": {
        photos: ["/images/dalian/info/tourSpa/russian-style-street.jpg"],
        summary: "러시아풍 건축물을 따라 걷는 다롄의 이국적인 역사 산책로",
        updatedAt: "2026-07-23",
        highlights: ["19-20세기 러시아식 건축 양식 관람", "이국적인 거리 풍경과 사진 촬영", "다롄의 역사적 배경 체험"],
        tips: ["가벼운 산책 코스로 적합하며, 주변의 이국적인 건물들을 배경으로 인생샷을 남기기 좋습니다."],
        hours: "방문 전 확인 권장",
        duration: "1시간",
        price: "무료 구역 중심",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "중국 Liao Ning Sheng, Da Lian Shi, Xi Gang Qu, 俄罗斯风情街WJHP+2MJ 邮政编码: 116006", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=5527163039372906871", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=5527163039372906871", type: "guide", description: "지도에서 위치 보기" }]
    },
    "연화산 전망대": {
        photos: ["/images/dalian/info/tourSpa/lianhuashan-viewing-platform.jpg"],
        summary: "대련의 파노라마 뷰를 감상할 수 있는 필수 코스",
        updatedAt: "2026-07-23",
        highlights: ["대련 시내와 바다를 동시에 즐기는 환상적인 파노라마 뷰", "탁 트인 개방감과 아름다운 해안 경관", "가벼운 산책과 함께 즐기는 여유로운 시간"],
        tips: ["일몰 시간에 맞춰 방문하면 더욱 로맨틱하고 황홀한 풍경을 감상할 수 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "중국 Liao Ning Sheng, Da Lian Shi, Sha He Kou Qu, 60, 白云雁水健身公园 邮政编码: 116023", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=10050698566546898685", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=10050698566546898685", type: "guide", description: "지도에서 위치 보기" }]
    }
};

export default info;
