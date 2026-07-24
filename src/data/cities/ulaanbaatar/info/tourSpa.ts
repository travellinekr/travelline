import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "간단테그친렌 사원": {
        photos: ["/images/ulaanbaatar/info/tourSpa/gandantegchinlen-monastery-ulaanbaatar.jpg"],
        summary: "울란바토르 도심에서 몽골 불교 문화를 만날 수 있는 대표 명소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["도심 속 평온한 사찰 분위기", "웅장한 불교 건축물"],
        tips: ["사원 관람 시 정숙을 유지해 주세요."],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "1~2시간",
        price: "입장료 별도",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "몽골 16040 울란바토르", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17921711781084038005", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%84%EB%8B%A8%ED%85%8C%EA%B7%B8%EC%B9%9C%EB%A0%8C+%EC%82%AC%EC%9B%90+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "수흐바타르 광장": {
        photos: ["/images/ulaanbaatar/info/tourSpa/sukhbaatar-square-ulaanbaatar.jpg"],
        summary: "정부청사와 칭기즈칸 동상이 있는 울란바토르 여행의 중심지입니다.",
        updatedAt: "2026-07-14",
        highlights: ["거대한 칭기즈칸 동상", "시내 산책의 시작점"],
        tips: ["주변 주요 명소와 연결되어 도보 투어에 좋습니다."],
        hours: "방문 전 확인 권장",
        duration: "30분~1시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "몽골 14201 울란바토르 WW99+C33", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1091615834424000219", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%98%ED%9D%90%EB%B0%94%ED%83%80%EB%A5%B4+%EA%B4%91%EC%9E%A5+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "몽골 국립박물관": {
        photos: ["/images/ulaanbaatar/info/tourSpa/national-museum-of-mongolia-ulaanbaatar.jpg"],
        summary: "몽골의 역사와 유목 문화를 한눈에 이해할 수 있는 박물관입니다.",
        updatedAt: "2026-07-14",
        highlights: ["몽골 역사의 흐름을 담은 전시", "유목 문화 체험"],
        tips: ["역사 공부를 위해 꼭 들러야 할 필수 코스입니다."],
        hours: "월요일: 오전 9:00 ~ 오후 8:00; 화요일: 오전 9:00 ~ 오후 8:00",
        duration: "1~2시간",
        price: "입장료 별도",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Travel St 1, CHD - 4 khoroo, Ulaanbaatar 15160 몽골", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.nationalmuseum.mn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=736205077874199705", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%BD%EA%B3%A8+%EA%B5%AD%EB%A6%BD%EB%B0%95%EB%AC%BC%EA%B4%80+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "자이승 전망대": {
        photos: ["/images/ulaanbaatar/info/tourSpa/zaisan-memorial-ulaanbaatar.jpg"],
        summary: "울란바토르 시내 전경을 한눈에 내려다볼 수 있는 최고의 조망 포인트입니다.",
        updatedAt: "2026-07-14",
        highlights: ["탁 트인 도시 파노라마 뷰", "아름다운 일몰 명소"],
        tips: ["해 질 녘에 맞춰 방문하면 멋진 야경까지 즐길 수 있어요."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "몽골 17023 울란바토르 VWM8+J5C", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7888649678437182290", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%90%EC%9D%B4%EC%8A%B9+%EC%A0%84%EB%A7%9D%EB%8C%80+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "테를지 국립공원": {
        photos: ["/images/ulaanbaatar/info/tourSpa/terelj-national-park-mongolia.jpg"],
        summary: "광활한 초원과 기암괴석, 승마 체험을 한 번에 즐기는 근교 필수 코스입니다.",
        updatedAt: "2026-07-14",
        highlights: ["대자연의 기암괴석", "이색적인 초원 승마"],
        tips: ["울란바토르에서 당일치기 여행지로 강력 추천해요."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "하루",
        price: "투어별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Энхтайвны Өргөн Чөлөө 206, Улаанбаатар, 몽골", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5158142980233887019", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%8C%EB%A5%BC%EC%A7%80+%EA%B5%AD%EB%A6%BD%EA%B3%B5%EC%9B%90+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "칭기즈 칸 기마상": {
        photos: ["/images/ulaanbaatar/info/tourSpa/genghis-khan-equestrian-statue.jpg"],
        summary: "40m 높이의 거대한 기마상 위에서 내려다보는 끝없는 초원과 압도적인 스케일을 자랑하는 몽골의 필수 관광 코스입니다.",
        updatedAt: "2026-07-23",
        highlights: ["동상 꼭대기 전망대에서 조망하는 탁 트인 테를지 초원 뷰", "칭기즈 칸의 역사와 전설을 느낄 수 있는 거대한 스테인리스 구조물", "독수리 체험 등 현지 문화를 경험할 수 있는 특별한 기회"],
        tips: ["동상 내부 전망대까지 올라가 광활한 초원을 한눈에 담아보세요.", "테를지 국립공원 투어 일정에 포함하여 방문하면 동선이 효율적입니다."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "Ulaanbaatar Chinggis Khaan Statue, ND - 5 khoroo, Nalaikh, Ulaanbaatar 12593 몽골", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=18109312195979863666", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=18109312195979863666", type: "guide", description: "지도에서 위치 보기" }]
    },
    "거북바위": {
        photos: ["/images/ulaanbaatar/info/tourSpa/turtle-rock-terelj.jpg"],
        summary: "거북이를 닮은 신비로운 형상의 거대 암석이 있는 테를지의 대표 랜드마크",
        updatedAt: "2026-07-23",
        highlights: ["거북이 모양의 독특한 화강암 바위 관람", "테를지 국립공원의 아름다운 자연 경관", "가벼운 트레킹과 사진 촬영 명소"],
        tips: ["주변에 승마 체험 코스가 많으니 함께 즐겨보세요.", "바위 근처는 그늘이 부족할 수 있으니 선크림을 준비하세요."],
        hours: "방문 전 확인 권장",
        duration: "30분~1시간",
        price: "무료 구역 중심",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "Turtle Rock, ND - 6 khoroo, Ulaanbaatar 12739 몽골", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=13239495705609639877", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=13239495705609639877", type: "guide", description: "지도에서 위치 보기" }]
    },
    "엘승타사르하이 미니사막": {
        photos: ["/images/ulaanbaatar/info/tourSpa/elsen-tasarkhai-mini-gobi.jpg"],
        summary: "몽골의 고비 사막을 대신해 만날 수 있는 매력적인 미니 사막으로, 낙타 체험과 모래 썰매가 가능한 어드벤처 명소입니다.",
        updatedAt: "2026-07-23",
        highlights: ["낙타를 타고 즐기는 평화로운 사막 트래킹", "모래 언덕에서 스릴 넘치는 모래 썰매 체험", "사막과 초원이 공존하는 이색적인 자연 경관"],
        tips: ["강한 햇빛에 대비해 선크림, 선글라스, 모자를 반드시 준비하세요.", "모래가 옷이나 신발에 들어갈 수 있으니 편안한 복장을 권장합니다."],
        hours: "방문 전 확인 권장",
        duration: "반나절~1일",
        price: "투어별 상이",
        reservation: { required: true, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "8MJQ+GRF, Högönö-Taranaiin-Hüree, Bulgan, 몽골", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=16783227041181929718", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=16783227041181929718", type: "guide", description: "지도에서 위치 보기" }]
    },
    "어기 호수": {
        photos: ["/images/ulaanbaatar/info/tourSpa/ugii-lake.jpg"],
        summary: "자연의 평온함이 가득한 어기 호수에서 즐기는 힐링과 액티비티",
        updatedAt: "2026-07-23",
        highlights: ["람사르 협약 등록 습지의 아름다운 생태계", "호숫가에서의 여유로운 낚시 체험", "탁 트인 풍경을 배경으로 하는 자전거 라이딩"],
        tips: ["현지 투어 프로그램을 이용하면 더욱 알찬 액티비티를 즐길 수 있으며, 사전 예약이 권장됩니다."],
        hours: "방문 전 확인 권장",
        duration: "반나절~1일",
        price: "투어별 상이",
        reservation: { required: true, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "Ugii Lake, Arkhangai, 몽골", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=2379905929651484755", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=2379905929651484755", type: "guide", description: "지도에서 위치 보기" }]
    }
};

export default info;
