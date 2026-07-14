import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "더 페닌슐라 상하이": {
        photos: ["/images/shanghai/info/accommodations/the-peninsula-shanghai.jpg"],
        summary: "와이탄과 황푸강의 환상적인 전망을 품은 클래식 럭셔리의 정석",
        updatedAt: "2026-07-14",
        highlights: ["황푸강 파노라마 뷰", "품격 있는 클래식 인테리어"],
        tips: ["창가 쪽 객실을 예약하면 와이탄 야경을 제대로 즐길 수 있어요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "32 Zhong Shan Dong Yi Lu, Waitan, Huang Pu Qu, 중국 200002", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1328105244029115754", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%8E%98%EB%8B%8C%EC%8A%90%EB%9D%BC+%EC%83%81%ED%95%98%EC%9D%B4+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "월도프 아스토리아 상하이 온 더 번드": {
        photos: ["/images/shanghai/info/accommodations/waldorf-astoria-shanghai-on-the-bund.jpg"],
        summary: "와이탄 중심에서 역사적인 분위기와 최고급 서비스를 경험할 수 있는 곳",
        updatedAt: "2026-07-14",
        highlights: ["역사적 가치가 느껴지는 고급스러운 서비스", "와이탄 중심부의 완벽한 위치"],
        tips: ["상하이의 클래식한 매력을 느끼고 싶은 여행자에게 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2 Zhong Shan Dong Yi Lu, Waitan, Huang Pu Qu, Shang Hai Shi, 중국 200002", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://waldorfastoriahotels.com.cn/zh-cn/hotel/shanghai/waldorf-astoria-shanghai-SHAWAWA/index.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14845214940755852074", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9B%94%EB%8F%84%ED%94%84+%EC%95%84%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%95%84+%EC%83%81%ED%95%98%EC%9D%B4+%EC%98%A8+%EB%8D%94+%EB%B2%88%EB%93%9C+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "페어몬트 피스 호텔": {
        photos: ["/images/shanghai/info/accommodations/fairmont-peace-hotel-shanghai.jpg"],
        summary: "상하이의 역사를 간직한 랜드마크 호텔로 와이탄 산책에 최적화된 곳",
        updatedAt: "2026-07-14",
        highlights: ["상하이 랜드마크급 클래식 무드", "와이탄 산책로와의 뛰어난 접근성"],
        tips: ["호텔 주변의 역사적인 건축물들을 구경하며 산책하기 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "20 Nan Jing Dong Lu, Waitan, Huang Pu Qu, Shang Hai Shi, 중국 200002", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11658790430361360680", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%98%EC%96%B4%EB%AA%AC%ED%8A%B8+%ED%94%BC%EC%8A%A4+%ED%98%B8%ED%85%94+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 풀리 호텔 앤 스파": {
        photos: ["/images/shanghai/info/accommodations/the-puli-hotel-and-spa-shanghai.jpg"],
        summary: "징안 지역에서 조용하고 세련된 휴식을 원하는 여행자에게 적합합니다.",
        updatedAt: "2026-07-14",
        highlights: ["징안 지역에서 조용하고 세련된 휴식을 원하는 여행자에게 적합합니다.", "평점 4.6", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1 Chang De Lu, 久光 Jing An Qu, Shang Hai Shi, 중국 200040", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.thepuli.com/zh-hans/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5475297110753347409", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%92%80%EB%A6%AC+%ED%98%B8%ED%85%94+%EC%95%A4+%EC%8A%A4%ED%8C%8C+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "징안 샹그릴라 상하이": {
        photos: ["/images/shanghai/info/accommodations/jing-an-shangri-la-shanghai.jpg"],
        summary: "징안 상권과 쇼핑몰 접근성이 좋은 고급 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["징안 상권과 쇼핑몰 접근성이 좋은 고급 호텔입니다.", "평점 4.5", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1218 Yan An Zhong Lu, 久光 Jing An Qu, Shang Hai Shi, 중국 200040", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.shangri-la.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7176034028458624053", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%95%EC%95%88+%EC%83%B9%EA%B7%B8%EB%A6%B4%EB%9D%BC+%EC%83%81%ED%95%98%EC%9D%B4+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 랭함 상하이 신천지": {
        photos: ["/images/shanghai/info/accommodations/the-langham-shanghai-xintiandi.jpg"],
        summary: "신천지 레스토랑과 야간 동선을 즐기기 좋은 위치입니다.",
        updatedAt: "2026-07-14",
        highlights: ["신천지 레스토랑과 야간 동선을 즐기기 좋은 위치입니다.", "평점 4.5", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "99 Ma Dang Lu, Huang Pu Qu, Shang Hai Shi, 중국 200021", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8707554733833509588", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%9E%AD%ED%95%A8+%EC%83%81%ED%95%98%EC%9D%B4+%EC%8B%A0%EC%B2%9C%EC%A7%80+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "안다즈 신천지 상하이": {
        photos: ["/images/shanghai/info/accommodations/andaz-xintiandi-shanghai.jpg"],
        summary: "신천지와 화이하이루 접근성이 뛰어난 트렌디한 라이프스타일 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["신천지 쇼핑 및 맛집 탐방에 최적화된 위치", "감각적인 인테리어와 세련된 분위기"],
        tips: ["주변에 힙한 카페와 편집숍이 많아 산책하기 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "88 Song Shan Lu, Huang Pu Qu, 중국 200021", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4266330992902518304", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%88%EB%8B%A4%EC%A6%88+%EC%8B%A0%EC%B2%9C%EC%A7%80+%EC%83%81%ED%95%98%EC%9D%B4+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그랜드 하얏트 상하이": {
        photos: ["/images/shanghai/info/accommodations/grand-hyatt-shanghai.jpg"],
        summary: "루자쭈이의 화려한 고층 전망을 즐기기 좋은 비즈니스 최적화 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["압도적인 스카이라인 뷰", "비즈니스 동선이 편리한 위치"],
        tips: ["상하이의 야경을 제대로 즐기고 싶다면 고층 객실을 추천합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "88 Shi Ji Da Dao, Lujiazui, Pu Dong Xin Qu, Shang Hai Shi, 중국 200120", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8805728674769920271", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%9C%EB%93%9C+%ED%95%98%EC%96%8F%ED%8A%B8+%EC%83%81%ED%95%98%EC%9D%B4+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "파크 하얏트 상하이": {
        photos: ["/images/shanghai/info/accommodations/park-hyatt-shanghai.jpg"],
        summary: "상하이 월드파이낸셜센터(SWFC)에서 누리는 최상급 럭셔리 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["상하이 최고의 파노라마 전망", "프라이빗하고 품격 있는 서비스"],
        tips: ["전망이 핵심인 만큼 창가 쪽 객실을 꼭 확인하세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "100 Shi Ji Da Dao, Lujiazui, Pu Dong Xin Qu, Shang Hai Shi, 중국 200120", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8675306334493658334", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%ED%81%AC+%ED%95%98%EC%96%8F%ED%8A%B8+%EC%83%81%ED%95%98%EC%9D%B4+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "상하이 메리어트 마르퀴스 시티 센터": {
        photos: ["/images/shanghai/info/accommodations/shanghai-marriott-marquis-city-centre.jpg"],
        summary: "난징동루와 인민광장 이동이 편한 대형 도심 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["난징동루와 인민광장 이동이 편한 대형 도심 호텔입니다.", "평점 4.8", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "중국 Huangpu DistrictShanghai Huang Pu Qu, People's Square, 555 Xi Zang Road (Middle) 邮政编码: 200003", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com.au/hotels/hotel-information/restaurant/shamc-shanghai-marriott-hotel-city-centre/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1730291242959715806", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%81%ED%95%98%EC%9D%B4+%EB%A9%94%EB%A6%AC%EC%96%B4%ED%8A%B8+%EB%A7%88%EB%A5%B4%ED%80%B4%EC%8A%A4+%EC%8B%9C%ED%8B%B0+%EC%84%BC%ED%84%B0+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
