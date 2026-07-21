import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "전쟁박물관": {
        photos: ["/images/ho-chi-minh/info/tourSpa/war-remnants-museum-ho-chi-minh-city.jpg"],
        summary: "베트남 전쟁의 역사를 생생하게 마주할 수 있는 호치민 필수 코스입니다.",
        updatedAt: "2026-07-15",
        highlights: ["전쟁 당시의 기록과 유물 전시", "베트남 현대사의 아픔을 담은 공간"],
        tips: ["역사적 내용이 깊어 천천히 둘러보는 것을 추천해요."],
        hours: "월요일: 오전 7:30 ~ 오후 5:30; 화요일: 오전 7:30 ~ 오후 5:30",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Phường 6, Quận 3, Hồ Chí Minh 700000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://baotangchungtichchientranh.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8996304053010199722", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%84%EC%9F%81%EB%B0%95%EB%AC%BC%EA%B4%80+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "통일궁": {
        photos: ["/images/ho-chi-minh/info/tourSpa/independence-palace-ho-chi-minh-city.jpg"],
        summary: "베트남 통일의 역사를 상징하는 웅장한 건축물입니다.",
        updatedAt: "2026-07-15",
        highlights: ["프랑스식 건축 양식의 아름다움", "베트남 현대사의 주요 현장"],
        tips: ["주변 정원이 넓어 산책하며 둘러보기 좋아요."],
        hours: "월요일: 오전 7:00 ~ 오후 6:00; 화요일: 오전 7:00 ~ 오후 6:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Ben Thanh, Ho Chi Minh, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.dinhdoclap.gov.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1695404177673260394", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%B5%EC%9D%BC%EA%B6%81+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사이공 노트르담 대성당": {
        photos: ["/images/ho-chi-minh/info/tourSpa/notre-dame-cathedral-of-saigon.jpg"],
        summary: "호치민 시내를 상징하는 이국적인 분위기의 랜드마크입니다.",
        updatedAt: "2026-07-15",
        highlights: ["붉은 벽돌의 고딕 양식 성당", "호치민 여행의 대표 포토존"],
        tips: ["보수 공사 여부를 미리 확인하고 방문하세요."],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "01 Công trường Công xã Paris, Quận 1, Hồ Chí Minh 70000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16739696829681982277", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%9D%B4%EA%B3%B5+%EB%85%B8%ED%8A%B8%EB%A5%B4%EB%8B%B4+%EB%8C%80%EC%84%B1%EB%8B%B9+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사이공 중앙우체국": {
        photos: ["/images/ho-chi-minh/info/tourSpa/saigon-central-post-office-ho-chi-minh-city.jpg"],
        summary: "프랑스 식민지 시절의 아름다운 건축미를 간직한 호치민의 상징적인 명소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["고전적인 프랑스식 건축 양식", "빈티지한 분위기의 내부 인테리어"],
        tips: ["근처 노트르담 성당과 함께 둘러보는 코스를 추천합니다."],
        hours: "월요일: 오전 7:30 ~ 오후 6:00; 화요일: 오전 7:30 ~ 오후 6:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "02 Công trường Công xã Paris, Bến Nghé, Quận 1, Hồ Chí Minh 70000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12752177036863445938", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%9D%B4%EA%B3%B5+%EC%A4%91%EC%95%99%EC%9A%B0%EC%B2%B4%EA%B5%AD+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "벤탄 시장": {
        photos: ["/images/ho-chi-minh/info/tourSpa/ben-thanh-market-ho-chi-minh-city.jpg"],
        summary: "호치민의 활기찬 에너지를 느낄 수 있는 대표적인 전통 시장입니다.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 기념품 쇼핑", "로컬 길거리 음식 체험"],
        tips: ["물건을 구매할 때는 적절한 흥정이 필수이며 소지품 관리에 유의하세요."],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Ben Thanh, Ho Chi Minh, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10190288580948819760", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A4%ED%83%84+%EC%8B%9C%EC%9E%A5+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "비텍스코 사이공 스카이덱": {
        photos: ["/images/ho-chi-minh/info/tourSpa/bitexco-financial-tower-saigon-skydeck.jpg"],
        summary: "호치민 시내 전경을 한눈에 내려다볼 수 있는 탁 트인 전망대입니다.",
        updatedAt: "2026-07-15",
        highlights: ["환상적인 파노라마 시티 뷰", "아름다운 도시 야경"],
        tips: ["일몰 시간에 맞춰 방문하면 낮과 밤의 풍경을 모두 즐길 수 있습니다."],
        hours: "월요일: 오전 9:30 ~ 오후 9:30; 화요일: 오전 9:30 ~ 오후 9:30",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "2 Đ. Hải Triều, Sài Gòn, Hồ Chí Minh 700000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14513308945688027946", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%84%ED%85%8D%EC%8A%A4%EC%BD%94+%EC%82%AC%EC%9D%B4%EA%B3%B5+%EC%8A%A4%EC%B9%B4%EC%9D%B4%EB%8D%B1+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "응우옌후에 워킹스트리트": {
        photos: ["/images/ho-chi-minh/info/tourSpa/nguyen-hue-walking-street-ho-chi-minh-city.jpg"],
        summary: "호치민의 밤을 제대로 즐기고 싶다면 꼭 들러야 할 핫플이에요.",
        updatedAt: "2026-07-15",
        highlights: ["화려한 야경", "길거리 먹거리"],
        tips: ["주말 저녁엔 사람이 정말 많으니 참고하세요."],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "4 Bùng binh Cây Liễu, Sài Gòn, Hồ Chí Minh, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7167868849551227662", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%91%EC%9A%B0%EC%98%8C%ED%9B%84%EC%97%90+%EC%9B%8C%ED%82%B9%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호치민 오페라하우스": {
        photos: ["/images/ho-chi-minh/info/tourSpa/ho-chi-minh-city-opera-house.jpg"],
        summary: "프랑스풍의 우아한 건축미가 돋보이는 호치민의 상징적인 곳이에요.",
        updatedAt: "2026-07-15",
        highlights: ["클래식한 외관", "근처 카페 투어"],
        tips: ["공연 관람 전 사진 찍기 정말 좋아요."],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "07 Công trường Lam Sơn, Sài Gòn, Hồ Chí Minh 700000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6193911520574615099", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%EC%B9%98%EB%AF%BC+%EC%98%A4%ED%8E%98%EB%9D%BC%ED%95%98%EC%9A%B0%EC%8A%A4+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "옥황사": {
        photos: ["/images/ho-chi-minh/info/tourSpa/jade-emperor-pagoda-ho-chi-minh-city.jpg"],
        summary: "도심 속에서 고즈넉하게 마음을 달랠 수 있는 아름다운 사찰이에요.",
        updatedAt: "2026-07-15",
        highlights: ["정교한 불상", "평화로운 분위기"],
        tips: ["조용한 산책과 힐링이 필요할 때 추천해요."],
        hours: "월요일: 오전 7:00 ~ 오후 6:00; 화요일: 오전 7:00 ~ 오후 6:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "73 Mai Thị Lựu, Tân Định, Hồ Chí Minh 700000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4102120846024444045", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A5%ED%99%A9%EC%82%AC+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "구찌 터널 투어": {
        photos: ["/images/ho-chi-minh/info/tourSpa/cu-chi-tunnels-tour-from-ho-chi-minh-city.png"],
        summary: "호치민 대표 명소",
        updatedAt: "2026-07-15",
        highlights: ["호치민 대표 명소", "평점 5", "호치민 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:30 ~ 오후 6:00; 화요일: 오전 8:30 ~ 오후 6:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "151 Đồng Khởi, Ward, Hồ Chí Minh 700000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://cuchitours.com/?utm_source=google_maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15964373104012371593", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%AC%EC%B0%8C+%ED%84%B0%EB%84%90+%ED%88%AC%EC%96%B4+%ED%98%B8%EC%B9%98%EB%AF%BC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "디엘로스파": {
        photos: ["/images/ho-chi-minh/info/tourSpa/spa-hs1czkkk.jpg"],
        summary: "호치민 1군에 위치한 마사지 및 네일샵으로 공항 무료 샌딩 서비스가 매우 유용한 곳입니다.",
        updatedAt: "2026-07-20",
        highlights: ["공항 무료 샌딩 서비스 제공", "샤워 시설 이용 가능", "프라이빗한 공간 구성"],
        tips: ["밤 비행기 탑승객에게 강력 추천", "예약 시 샌딩 조건 미리 확인하기"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "18Bis Hẻm 12 Nguyễn Thị Minh Khai, P, Sài Gòn, Hồ Chí Minh 70000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Massage%20the%20elo%20spa%20%26%20Nail%20%EB%94%94%EC%97%98%EB%A1%9C%EC%8A%A4%ED%8C%8C%20%ED%98%B8%EC%B9%98%EB%AF%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%EB%84%A4%EC%9D%BC%20%E8%83%A1%E5%BF%97%E6%98%8E%E6%8C%89%E6%91%A9&query_place_id=ChIJVbd2BIcvdTERxHiHS1czKkk", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94%EC%97%98%EB%A1%9C%EC%8A%A4%ED%8C%8C%20%ED%98%B8%EC%B9%98%EB%AF%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "모모스파": {
        photos: ["/images/ho-chi-minh/info/tourSpa/spa-kizcrbqg.jpg"],
        summary: "벤탄시장 근처에 위치하여 접근성이 좋고 두피 마사지가 유명한 가성비 스파입니다.",
        updatedAt: "2026-07-20",
        highlights: ["두피 마사지 전문", "벤탄시장 인근 위치", "짐 보관 및 공항 픽업/샌딩 지원"],
        tips: ["그랩을 통한 편리한 이동 가능", "가성비 좋은 메뉴 위주로 예약하기"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "227 Lê Thánh Tôn, Bến Thành, Hồ Chí Minh, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Momo%20Spa%20massage%20%26%20nails%20%EB%AA%A8%EB%AA%A8%EB%A7%88%EC%82%AC%EC%A7%80&query_place_id=ChIJdxflKCwvdTEReSVKIzCrBqg", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%EB%AA%A8%EC%8A%A4%ED%8C%8C%20%ED%98%B8%EC%B9%98%EB%AF%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "미도 럭셔리스파": {
        photos: ["/images/ho-chi-minh/info/tourSpa/spa-a9me2s3e.jpg"],
        summary: "벤탄시장 근처에서 청결하고 깔끔하게 관리되는 것으로 유명한 프리미엄 스파입니다.",
        updatedAt: "2026-07-20",
        highlights: ["청결하고 위생적인 시설", "다양한 룸 타입(2인실~6인실)", "커플 및 가족 여행객 적합"],
        tips: ["가족 단위 방문 시 넓은 룸 예약 권장", "벤탄시장 관광 동선에 포함하기 좋음"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "122 Yersin, Bến Thành, Hồ Chí Minh 70000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=MIDO%20LUXURY%20SPA&query_place_id=ChIJpdvzWOUvdTERQuaA9me2S3E", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EB%8F%84%20%EB%9F%AD%EC%85%94%EB%A6%AC%EC%8A%A4%ED%8C%8C%20%ED%98%B8%EC%B9%98%EB%AF%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "유주스파": {
        photos: ["/images/ho-chi-minh/info/tourSpa/spa-tyvtd-se.jpg"],
        summary: "마사지와 네일/패디 서비스를 동시에 즐길 수 있는 1군 소재의 스파입니다.",
        updatedAt: "2026-07-20",
        highlights: ["네일 및 패디 서비스 전문", "전신 및 하체 관리 메뉴 보유", "키즈 메뉴 운영"],
        tips: ["한국어로 디테일한 요청 가능", "네일과 마사지를 함께 예약하여 시간 절약하기"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "38 Lê Lai, Bến Thành, Hồ Chí Minh, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=YUJU%20SPA%20%26%20NAIL%20%7C%20Ben%20Thanh%20Market&query_place_id=ChIJZRcY1McvdTER9IyTyvtD-SE", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%A0%EC%A3%BC%EC%8A%A4%ED%8C%8C%20%ED%98%B8%EC%B9%98%EB%AF%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "하스파": {
        photos: ["/images/ho-chi-minh/info/tourSpa/spa-iakawou0.jpg"],
        summary: "관광객용 샵보다는 현지인들이 많이 찾는 로컬 감성의 스파입니다.",
        updatedAt: "2026-07-20",
        highlights: ["현지 느낌 물씬 나는 분위기", "로컬 마사지의 매력 보유", "1군 위치"],
        tips: ["진짜 베트남 현지 스타일을 경험하고 싶은 분들께 추천"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "49 Phạm Viết Chánh, Cầu Ông Lãnh, Hồ Chí Minh, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=HA%20SPA&query_place_id=ChIJHW16QcUvdTERm0lIAkAWOU0", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%8A%A4%ED%8C%8C%20%ED%98%B8%EC%B9%98%EB%AF%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 목 스파": {
        photos: ["/images/ho-chi-minh/info/tourSpa/spa-ou6dl6x0.jpg"],
        summary: "1군 부이비엔 근처에 위치한 시설과 실력이 검증된 로컬 스파입니다.",
        updatedAt: "2026-07-20",
        highlights: ["VIP Deep Massage 프로그램", "깔끔하고 쾌적한 내부 시설", "부이비엔 인근 접근성"],
        tips: ["내돈내산 리뷰가 많은 검증된 곳", "인기 메뉴는 사전 예약 권장"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "15 Lê Thị Riêng, Bến Thành, Hồ Chí Minh 700000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EB%8D%94%EB%AA%A9%EC%8A%A4%ED%8C%8C&query_place_id=ChIJH6JgzTAvdTERQiCOU6Dl6X0", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94%20%EB%AA%A9%20%EC%8A%A4%ED%8C%8C%20%ED%98%B8%EC%B9%98%EB%AF%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "온스파": {
        photos: ["/images/ho-chi-minh/info/tourSpa/spa-dpsi6sta.jpg"],
        summary: "1군 중심지에 위치하여 접근성이 매우 뛰어나고 가격이 저렴한 가성비 스파입니다.",
        updatedAt: "2026-07-20",
        highlights: ["1군 중심지 위치로 높은 접근성", "짐 보관 및 샤워 서비스 가능", "저렴하고 합리적인 가격"],
        tips: ["여행 중 짧은 시간 피로를 풀기에 최적"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "153 Ký Con, Bến Thành, Hồ Chí Minh, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=On%20Spa%20-%20Arum%20K%20Spa&query_place_id=ChIJz778NwAvdTER7x-dpsi6STA", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A8%EC%8A%A4%ED%8C%8C%20%ED%98%B8%EC%B9%98%EB%AF%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "22스파": {
        photos: ["/images/ho-chi-minh/info/tourSpa/22spa-ho-chi-minh.jpg"],
        summary: "가성비가 매우 뛰어나며 핫스톤 등 다양한 코스를 제공하는 로컬 스파입니다.",
        updatedAt: "2026-07-20",
        highlights: ["핫스톤 및 허브베개 포함 코스", "매우 뛰어난 가성비", "1군 위치"],
        tips: ["골목 안쪽에 위치해 있으므로 그랩 이용 권장"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "100 Đề Thám, Cầu Ông Lãnh, Hồ Chí Minh 700000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=22Spa%20%26%20Massage&query_place_id=ChIJs6IqGwcvdTERLkHgWg6Tk3M", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=22%EC%8A%A4%ED%8C%8C%20%ED%98%B8%EC%B9%98%EB%AF%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "샘샘뷰티": {
        photos: ["/images/ho-chi-minh/info/tourSpa/place-0uykqema.jpg"],
        summary: "두피 마사지와 헤드스파로 유명한 뷰티 전문 스파입니다.",
        updatedAt: "2026-07-20",
        highlights: ["두피 마사지(헤드스파) 특화", "예약제 운영", "친구와 함께 방문하기 좋은 분위기"],
        tips: ["헤드스파 집중 관리를 위해 사전 예약 필수"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "234 Tân Sơn Nhì, P, Tân Sơn Nhì, Hồ Chí Minh 700000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Sam%20Sam%20Beauty%20-%20Skincare%20and%20Wellness&query_place_id=ChIJU-PL0qkpdTER83l0UYkQEMA", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%98%EC%83%98%EB%B7%B0%ED%8B%B0%20%ED%98%B8%EC%B9%98%EB%AF%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "화이트스파": {
        photos: ["/images/ho-chi-minh/info/tourSpa/spa-w0tzksxq.jpg"],
        summary: "최근 시설을 새로 이전하여 매우 쾌적하고 깔끔한 환경을 자랑하는 스파입니다.",
        updatedAt: "2026-07-20",
        highlights: ["새로 이전한 깨끗한 시설", "6층 규모의 대형 건물", "픽업 서비스 제공"],
        tips: ["시설의 청결도를 중요하게 생각한다면 추천"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "39 Ngô Đức Kế, Sài Gòn, Hồ Chí Minh 700000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Black%20%26%20White%20Beauty%20Salon%20%26%20Spa&query_place_id=ChIJ0aCGfwAvdTERbzMW0tZKsXQ", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%94%EC%9D%B4%ED%8A%B8%EC%8A%A4%ED%8C%8C%20%ED%98%B8%EC%B9%98%EB%AF%BC%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
