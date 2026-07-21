import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "혼똠 케이블카": {
        photos: ["/images/phu-quoc/info/tourSpa/hon-thom-cable-car-phu-quoc.jpg"],
        summary: "안터이에서 혼똠까지 이어지는 해상 케이블카",
        updatedAt: "2026-07-15",
        highlights: ["안터이에서 혼똠까지 이어지는 해상 케이블카", "평점 4.5", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:30 ~ 오후 5:30; 화요일: 오전 9:30 ~ 오후 5:30",
        duration: "2~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Bãi Đất Đỏ, Phú Quốc, An Giang, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://booking.sunworld.vn/vi/catalog?land=SunParadiseLandPhuQuoc&park=HTI&date=2026-07-10&flexibleDate=1&adultQuantity=1&childQuantity=0&seniorQuantity=0&click_id=6a5fcde404f042dd8d197eb2b4bbf2a4&aff_network=SF&campaign_id=10&at_pub_id=ADS000000467", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14413419425568023553", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%BC%EB%98%A0+%EC%BC%80%EC%9D%B4%EB%B8%94%EC%B9%B4+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈원더스 푸꾸옥": {
        photos: ["/images/phu-quoc/info/tourSpa/vinwonders-phu-quoc.jpg"],
        summary: "북부 대형 테마파크",
        updatedAt: "2026-07-15",
        highlights: ["북부 대형 테마파크", "평점 4.9", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "반나절~1일",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Bãi Dài, Gành Dầu, Phú Quốc, An Giang, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10126410576617268111", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EC%9B%90%EB%8D%94%EC%8A%A4+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈펄 사파리 푸꾸옥": {
        photos: ["/images/phu-quoc/info/tourSpa/vinpearl-safari-phu-quoc.jpg"],
        summary: "가족 여행에 좋은 사파리 파크",
        updatedAt: "2026-07-15",
        highlights: ["가족 여행에 좋은 사파리 파크", "평점 4.6", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 4:00; 화요일: 오전 9:00 ~ 오후 4:00",
        duration: "3~5시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Bãi Dài, Phú Quốc, An Giang 922200 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://vinwonders.com/en/vinpearl-safari-phu-quoc/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12099771461263823064", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%ED%8E%84+%EC%82%AC%ED%8C%8C%EB%A6%AC+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "푸꾸옥 감옥 박물관": {
        photos: ["/images/phu-quoc/info/tourSpa/phu-quoc-prison.jpg"],
        summary: "베트남의 아픈 현대사를 생생하게 마주할 수 있는 역사적인 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["전쟁 당시의 기록과 유물 전시", "당시 수감 환경을 재현한 공간"],
        tips: ["역사적 의미가 깊은 곳이니 차분한 마음으로 관람하는 것을 추천해요."],
        hours: "월요일: 오전 7:00 ~ 오후 5:00; 화요일: 오전 7:00 ~ 오후 5:00",
        duration: "1~2시간",
        price: "입장료 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "350 Đ. Nguyễn Văn Cừ, Phú Quốc, An Giang, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7479130006547933769", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EA%BE%B8%EC%98%A5+%EA%B0%90%EC%98%A5+%EB%B0%95%EB%AC%BC%EA%B4%80+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호꾸옥 사원": {
        photos: ["/images/phu-quoc/info/tourSpa/ho-quoc-temple-phu-quoc.jpg"],
        summary: "바다 전망이 좋은 남동부 사원",
        updatedAt: "2026-07-15",
        highlights: ["바다 전망이 좋은 남동부 사원", "평점 4.7", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 6:00 ~ 오후 6:00; 화요일: 오전 6:00 ~ 오후 6:00",
        duration: "1~2시간",
        price: "무료 또는 기부",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "426H+GVQ, Phu Quoc, An Giang, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5398173814522591702", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%EA%BE%B8%EC%98%A5+%EC%82%AC%EC%9B%90+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사오 비치": {
        photos: ["/images/phu-quoc/info/tourSpa/sao-beach-phu-quoc.jpg"],
        summary: "하얀 백사장과 에메랄드빛 바다가 매력적인 푸꾸옥 대표 해변입니다.",
        updatedAt: "2026-07-15",
        highlights: ["부드러운 모래사장", "투명한 바닷물과 다양한 해양 액티비티"],
        tips: ["해변 근처 식당에서 신선한 해산물을 즐기며 여유를 만끽해보세요."],
        hours: "방문 전 확인 권장",
        duration: "2~4시간",
        price: "비치 시설별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Sao Beach, An Giang, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13003265704314629032", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%98%A4+%EB%B9%84%EC%B9%98+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "켐 비치": {
        photos: ["/images/phu-quoc/info/tourSpa/khem-beach-phu-quoc.jpg"],
        summary: "남부 리조트 단지 근처의 한적하고 여유로운 해변입니다.",
        updatedAt: "2026-07-15",
        highlights: ["에메랄드빛 맑은 바다", "프라이빗한 휴식 가능"],
        tips: ["주변 고급 리조트 이용객에게 추천해요."],
        hours: "방문 전 확인 권장",
        duration: "2~4시간",
        price: "시설별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Khem Beach, An Giang, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9311686041065429937", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BC%90+%EB%B9%84%EC%B9%98+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스타피시 비치": {
        photos: ["/images/phu-quoc/info/tourSpa/starfish-beach-phu-quoc.jpg"],
        summary: "북부 해변과 불가사리 포인트",
        updatedAt: "2026-07-15",
        highlights: ["북부 해변과 불가사리 포인트", "평점 3.7", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "2~4시간",
        price: "이동비 별도",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "베트남 Kien Giang, Phu Quoc, Rạch Vẹm, 스타피쉬 비치", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16839162199301194799", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%83%80%ED%94%BC%EC%8B%9C+%EB%B9%84%EC%B9%98+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "푸꾸옥 국립공원": {
        photos: ["/images/phu-quoc/info/tourSpa/phu-quoc-national-park.jpg"],
        summary: "푸꾸옥의 울창한 자연을 느낄 수 있는 생태 보호 구역입니다.",
        updatedAt: "2026-07-15",
        highlights: ["푸른 숲과 트레킹 코스", "다양한 동식물 관찰"],
        tips: ["모기 기피제를 꼭 챙겨가세요."],
        hours: "방문 전 확인 권장",
        duration: "2~5시간",
        price: "투어별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "82JJ+M57, Phu Quoc, An Giang, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1030820115925008583", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EA%BE%B8%EC%98%A5+%EA%B5%AD%EB%A6%BD%EA%B3%B5%EC%9B%90+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "딘커우 사원": {
        photos: ["/images/phu-quoc/info/tourSpa/dinh-cau-temple-phu-quoc.jpg"],
        summary: "즈엉동 해안가에서 만나는 상징적인 사원",
        updatedAt: "2026-07-15",
        highlights: ["바다와 어우러진 고요한 풍경", "현지 문화의 정취"],
        tips: ["일몰 시간에 맞춰 방문하면 더욱 아름다워요"],
        hours: "월요일: 오전 7:00 ~ 오후 8:30; 화요일: 오전 7:00 ~ 오후 8:30",
        duration: "30분~1시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Khu phố 2, Kiên Giang 92500 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14297459752237185512", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%98%EC%BB%A4%EC%9A%B0+%EC%82%AC%EC%9B%90+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "선셋 사나토 비치 클럽": {
        photos: ["/images/phu-quoc/info/tourSpa/sunset-sanato-beach-club-phu-quoc.jpg"],
        summary: "인생샷을 부르는 석양 명소와 비치 클럽",
        updatedAt: "2026-07-15",
        highlights: ["독특한 예술 조형물 포토존", "환상적인 노을 감상"],
        tips: ["해질녘 골든아워를 놓치지 마세요"],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~3시간",
        price: "입장료 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Bắc Bãi Trường, Phú Quốc, An Giang 922200 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.sunsetsanato.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3482021163027256914", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%A0%EC%85%8B+%EC%82%AC%EB%82%98%ED%86%A0+%EB%B9%84%EC%B9%98+%ED%81%B4%EB%9F%BD+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마이룻 섬": {
        photos: ["/images/phu-quoc/info/tourSpa/may-rut-island-phu-quoc.png"],
        summary: "남부 호핑투어의 꽃, 에메랄드빛 투명한 바다",
        updatedAt: "2026-07-15",
        highlights: ["스노클링 명소", "맑고 깨끗한 해변"],
        tips: ["호핑투어 예약 시 필수 코스로 확인하세요"],
        hours: "방문 전 확인 권장",
        duration: "반나절~1일",
        price: "투어별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "May Rut island, An Giang, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15467157924467699696", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%9D%B4%EB%A3%BB+%EC%84%AC+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "몽떠이 섬": {
        photos: ["/images/phu-quoc/info/tourSpa/mong-tay-island-phu-quoc.jpg"],
        summary: "에메랄드빛 바다에서 즐기는 환상적인 스노클링 호핑투어 명소",
        updatedAt: "2026-07-15",
        highlights: ["맑고 투명한 바닷속 풍경", "여유로운 호핑투어 코스"],
        tips: ["스노클링 장비는 미리 체크하세요"],
        hours: "방문 전 확인 권장",
        duration: "반나절~1일",
        price: "투어별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "hòn Móng Tay, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17192401202926224137", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%BD%EB%96%A0%EC%9D%B4+%EC%84%AC+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "감기 섬": {
        photos: ["/images/phu-quoc/info/tourSpa/gam-ghi-island-phu-quoc.jpg"],
        summary: "화려한 산호초를 눈앞에서 만날 수 있는 스노클링 성지",
        updatedAt: "2026-07-15",
        highlights: ["다양한 종류의 산호 관찰 가능", "물고기가 가득한 포인트"],
        tips: ["수중 촬영을 위한 방수팩은 필수"],
        hours: "방문 전 확인 권장",
        duration: "반나절~1일",
        price: "투어별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Gam Ghi island, An Giang, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3487862154197282493", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%90%EA%B8%B0+%EC%84%AC+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "세일링 클럽 스파 푸꾸옥": {
        photos: ["/images/phu-quoc/info/tourSpa/spa-phu-quoc-rdkl5nri.jpg"],
        summary: "롱비치의 여유를 만끽하며 즐기는 프리미엄 리조트 스파",
        updatedAt: "2026-07-15",
        highlights: ["럭셔리한 분위기의 힐링 타임", "롱비치 인근의 완벽한 휴식"],
        tips: ["인기 시간대는 사전 예약 권장"],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "코스별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Tổ 6, Ấp, Huyện, Đường Bào, Phú Quốc, An Giang 70000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://sc-signaturephuquoc.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Spa%20at%20Sailing%20Club%20Signature%20Resort%20Phu%20Quoc&query_place_id=ChIJE4A7lA6TpzERKEwRdkL5nrI", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%B8%EC%9D%BC%EB%A7%81+%ED%81%B4%EB%9F%BD+%EC%8A%A4%ED%8C%8C+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "갈리나스파 푸꾸옥": {
        photos: ["/images/phu-quoc/info/tourSpa/spa-phu-quoc-nm3qbdww.jpg"],
        summary: "푸꾸옥 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "Tổ 2, Ấp, Đường Trần Hưng Đạo, Cửa Lấp, Phú Quốc, An Giang 720000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EB%B2%A0%EB%A5%B4%EC%83%A4%EC%9C%A0%20%EB%A8%B8%EB%93%9C%EC%8A%A4%ED%8C%8C&query_place_id=ChIJTbkC7KGNpzERoI2NM3qBdww", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%88%EB%A6%AC%EB%82%98%EC%8A%A4%ED%8C%8C%20%ED%91%B8%EA%BE%B8%EC%98%A5%20%ED%91%B8%EA%BE%B8%EC%98%A5%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "심스파 푸꾸옥": {
        photos: ["/images/phu-quoc/info/tourSpa/spa-phu-quoc-3iyy7emq.jpg"],
        summary: "푸꾸옥 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "SS12 Chợ đêm Sonasea, Đường Bào, Phú Quốc, An Giang, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Sim%20spa&query_place_id=ChIJD1y1OwCTpzERv6C3IYy7emQ", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%AC%EC%8A%A4%ED%8C%8C%20%ED%91%B8%EA%BE%B8%EC%98%A5%20%ED%91%B8%EA%BE%B8%EC%98%A5%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "라베란다스파 푸꾸옥": {
        photos: ["/images/phu-quoc/info/tourSpa/spa-phu-quoc-a5rul98q.jpg"],
        summary: "푸꾸옥 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "New World, Khem Beach Resort, B125, Phú Quốc, An Giang 92513 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Lala%20Spa%20Phu%20Quoc&query_place_id=ChIJ_9_EJR6XpzERop2a5Rul98Q", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%B2%A0%EB%9E%80%EB%8B%A4%EC%8A%A4%ED%8C%8C%20%ED%91%B8%EA%BE%B8%EC%98%A5%20%ED%91%B8%EA%BE%B8%EC%98%A5%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "센스파 푸꾸옥": {
        photos: ["/images/phu-quoc/info/tourSpa/senspa-phu-quoc-phu-quoc.jpg"],
        summary: "푸꾸옥 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "R171 Bãi Khem, Phú Quốc, An Giang, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Sen%20Spa&query_place_id=ChIJYxv1Go6XpzERi9cGmo5tovk", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%BC%EC%8A%A4%ED%8C%8C%20%ED%91%B8%EA%BE%B8%EC%98%A5%20%ED%91%B8%EA%BE%B8%EC%98%A5%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "푸꾸옥 머드스파": {
        photos: ["/images/phu-quoc/info/tourSpa/phu-quoc-spa-phu-quoc.jpg"],
        summary: "푸꾸옥 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "TH2-09, Grand World, Đường Thượng Hải 2, Phú Quốc, An Giang 92500 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Mer%20Spa%20Phu%20Quoc&query_place_id=ChIJrdeRavwfCDEREeDCRgtiXio", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EA%BE%B8%EC%98%A5%20%EB%A8%B8%EB%93%9C%EC%8A%A4%ED%8C%8C%20%ED%91%B8%EA%BE%B8%EC%98%A5%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "망고베이스파 푸꾸옥": {
        photos: ["/images/phu-quoc/info/tourSpa/spa-phu-quoc-tw_culqi.jpg"],
        summary: "푸꾸옥 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "91/5B, Đường Trần Hưng Đạo, Duong Dong, Phú Quốc, An Giang, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=MANGO%20SPA%20%26%20NAIL&query_place_id=ChIJYWVqP52NpzERraYTW_cuLQI", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%9D%EA%B3%A0%EB%B2%A0%EC%9D%B4%EC%8A%A4%ED%8C%8C%20%ED%91%B8%EA%BE%B8%EC%98%A5%20%ED%91%B8%EA%BE%B8%EC%98%A5%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "베르데스파 푸꾸옥": {
        photos: ["/images/phu-quoc/info/tourSpa/spa-phu-quoc--murm3g0.jpg"],
        summary: "푸꾸옥 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "108 Đường Trần Hưng Đạo, Khu Phố 7, Phú Quốc, An Giang, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Glow%20Day%20Spa%20Massage%201%20%28%20%EB%B0%9C%20%EB%A7%88%EC%82%AC%EC%A7%80%2C%20%EB%B0%94%EB%94%94%20%EB%A7%88%EC%82%AC%EC%A7%80%2C%ED%95%AB%EC%8A%A4%ED%86%A4%20%ED%85%8C%EB%9D%BC%ED%94%BC%29&query_place_id=ChIJE8hQn1ONpzER1K6-murM3g0", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%EB%A5%B4%EB%8D%B0%EC%8A%A4%ED%8C%8C%20%ED%91%B8%EA%BE%B8%EC%98%A5%20%ED%91%B8%EA%BE%B8%EC%98%A5%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오마모리스파 푸꾸옥": {
        photos: ["/images/phu-quoc/info/tourSpa/spa-phu-quoc-hh3zwsa8.jpg"],
        summary: "푸꾸옥 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "48 Ng. Huyện, Phố cổ Hà Nội, Hoàn Kiếm, Hà Nội 100000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Omamori%20Spa%20Old%20Quarter&query_place_id=ChIJLWup7_erNTERSqbhh3zWSa8", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%A7%88%EB%AA%A8%EB%A6%AC%EC%8A%A4%ED%8C%8C%20%ED%91%B8%EA%BE%B8%EC%98%A5%20%ED%91%B8%EA%BE%B8%EC%98%A5%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "푸꾸옥 풋마사지": {
        photos: ["/images/phu-quoc/info/tourSpa/phu-quoc-massage-phu-quoc.jpg"],
        summary: "푸꾸옥 여행 후기에 자주 등장하는 마사지·스파 후보입니다.",
        updatedAt: "2026-07-20",
        highlights: [],
        tips: [],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "1A Đường Trần Hưng Đạo, Khu 1, Phú Quốc, An Giang, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Golden%20Foot%20Massage%20Ph%C3%BA%20Qu%E1%BB%91c&query_place_id=ChIJ_QHQ2eWNpzER0VcwkboktMU", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EA%BE%B8%EC%98%A5%20%ED%92%8B%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%91%B8%EA%BE%B8%EC%98%A5%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
