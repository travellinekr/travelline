import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "샹그릴라 울란바토르": {
        photos: ["/images/ulaanbaatar/info/accommodations/shangri-la-ulaanbaatar.jpg"],
        summary: "쇼핑몰과 연결되어 도심 관광과 쇼핑을 동시에 즐기기 좋은 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["쇼핑몰 직결로 편리한 동선", "비즈니스와 관광 모두 최적화된 위치"],
        tips: ["호텔 내 쇼핑몰에서 기념품 쇼핑하기 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Olympic Street 19, District-1, Ulaanbaatar 14241 몽골", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.shangri-la.com/ulaanbaatar/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14473296176348204716", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%B9%EA%B7%B8%EB%A6%B4%EB%9D%BC+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "블루스카이 호텔 앤 타워": {
        photos: ["/images/ulaanbaatar/info/accommodations/the-blue-sky-hotel-and-tower-ulaanbaatar.jpg"],
        summary: "수흐바타르 광장 인근의 랜드마크로 멋진 전망을 자랑하는 고층 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["광장 인근의 압도적인 시티뷰", "울란바토르를 상징하는 고층 랜드마크"],
        tips: ["전망 좋은 객실을 예약하면 도시 전경을 한눈에 담을 수 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Peace Ave 17 Blue Sky Tower, SBD - 1 khoroo, Ulaanbaatar 14240 몽골", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://hotelbluesky.mn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17397552767381473047", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%94%EB%A3%A8%EC%8A%A4%EC%B9%B4%EC%9D%B4+%ED%98%B8%ED%85%94+%EC%95%A4+%ED%83%80%EC%9B%8C+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "켐핀스키 호텔 칸 팰리스": {
        photos: ["/images/ulaanbaatar/info/accommodations/kempinski-hotel-khan-palace-ulaanbaatar.jpg"],
        summary: "도심에서 벗어나 조용하고 품격 있는 휴식을 원하는 분들께 추천하는 고급 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["안정적인 서비스와 정온한 환경", "품격 있는 투숙 경험"],
        tips: ["도심 중심부와는 거리가 있으니 이동 동선을 고려해 예약하세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Peace Avenue 13345 East Cross Road, BZD - 7 khoroo, Ulaanbaatar 13345 몽골", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.kempinski.com/en/hotel-khan-palace?utm_medium=organic&utm_source=google&utm_campaign=KIULN&utm_content=gmb&source=S308962248", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11711323268087017860", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BC%90%ED%95%80%EC%8A%A4%ED%82%A4+%ED%98%B8%ED%85%94+%EC%B9%B8+%ED%8C%B0%EB%A6%AC%EC%8A%A4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "베스트웨스턴 프리미어 투신 호텔": {
        photos: ["/images/ulaanbaatar/info/accommodations/best-western-premier-tuushin-hotel-ulaanbaatar.jpg"],
        summary: "수흐바타르 광장과 박물관 접근성이 좋은 중심부 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["수흐바타르 광장과 박물관 접근성이 좋은 중심부 호텔입니다.", "평점 4.4", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Prime Minister A.Amar St 15, SBD - 8 khoroo, Ulaanbaatar 14200 몽골", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.tuushinhotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10654695567050526371", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%EC%8A%A4%ED%8A%B8%EC%9B%A8%EC%8A%A4%ED%84%B4+%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4+%ED%88%AC%EC%8B%A0+%ED%98%B8%ED%85%94+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "홀리데이 인 울란바토르": {
        photos: ["/images/ulaanbaatar/info/accommodations/holiday-inn-ulaanbaatar.jpg"],
        summary: "국영백화점과 도심 이동이 편한 안정적인 체인 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["국영백화점과 도심 이동이 편한 안정적인 체인 호텔입니다.", "평점 4.4", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Sambuu St 24, CHD - 5 khoroo, Ulaanbaatar 15141 몽골", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13086239984658803987", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%80%EB%A6%AC%EB%8D%B0%EC%9D%B4+%EC%9D%B8+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "노보텔 울란바토르": {
        photos: ["/images/ulaanbaatar/info/accommodations/novotel-ulaanbaatar.jpg"],
        summary: "깔끔한 객실과 도심 접근성을 갖춘 가족·비즈니스 여행용 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["깔끔한 객실과 도심 접근성을 갖춘 가족·비즈니스 여행용 호텔입니다.", "평점 4.4", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Baga Toiruu 6th khoroo, SBD - 6 khoroo, Ulaanbaatar 14201 몽골", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=B1D8&merchantid=seo-maps-MN-B1D8&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4298458719545544655", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%B8%EB%B3%B4%ED%85%94+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라마다 울란바토르 시티센터": {
        photos: ["/images/ulaanbaatar/info/accommodations/ramada-ulaanbaatar-city-center.jpg"],
        summary: "쇼핑몰과 바로 연결되어 도심 여행의 편의성을 극대화한 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["쇼핑센터 직결로 편리한 접근성", "도심 체류에 최적화된 위치"],
        tips: ["쇼핑몰 내 식당을 이용하면 이동 시간을 훨씬 줄일 수 있어요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Peace Avenue 2 Баруун дөрвөн замын уулзвар, BGD - 16 khoroo, Ulaanbaatar 16040 몽골", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.wyndhamhotels.com/ramada/ulaanbaatar-mongolia/ramada-ulaanbaatar-citycenter/overview?CID=LC:wmcic5n98gs1g0r:38971&iata=00093796", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14252862933493701185", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%A7%88%EB%8B%A4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%EC%8B%9C%ED%8B%B0%EC%84%BC%ED%84%B0+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 나인 울란바토르": {
        photos: ["/images/ulaanbaatar/info/accommodations/hotel-nine-ulaanbaatar.jpg"],
        summary: "수흐바타르 광장 근처라 주요 명소를 도보로 둘러보기 좋습니다.",
        updatedAt: "2026-07-14",
        highlights: ["수흐바타르 광장 인근의 편리한 위치", "주요 관광지 도보 이동 가능"],
        tips: ["시내 중심가라 밤에도 안전하게 산책하기 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Ерөнхий сайд А.Амарын гудамж, SBD - 8 khoroo, Ulaanbaatar 14200 몽골", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.hotelnine.mn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2732824837130923301", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%82%98%EC%9D%B8+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "제이 호텔 울란바토르": {
        photos: ["/images/ulaanbaatar/info/accommodations/j-hotel-ulaanbaatar.jpg"],
        summary: "합리적인 가격으로 시내 중심부의 접근성을 누릴 수 있는 실속형 숙소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["가성비 좋은 합리적인 가격", "시내 중심부의 뛰어난 접근성"],
        tips: ["예산을 아끼고 싶은 여행자에게 추천하는 알뜰한 선택지예요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "몽골 14220 울란바토르 WW7H+CRJ", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://en.jhotel.mn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1673305998470935267", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%9C%EC%9D%B4+%ED%98%B8%ED%85%94+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스프링스 호텔 울란바토르": {
        photos: ["/images/ulaanbaatar/info/accommodations/springs-hotel-ulaanbaatar.jpg"],
        summary: "도심 주요 업무·관광지 이동이 편한 중급 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["도심 주요 업무·관광지 이동이 편한 중급 호텔입니다.", "평점 4.2", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Springs Hotel, 2A Olympic Street, SBD, Olympic Street 2-A, SBD - 1 khoroo, Ulaanbaatar 14210 몽골", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.springshotel.mn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11292759091106759214", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%94%84%EB%A7%81%EC%8A%A4+%ED%98%B8%ED%85%94+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
