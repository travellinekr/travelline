import type { TourSpaInfo } from '@/data/card-info-types';

const info: Record<string, TourSpaInfo> = {
    "날루수안 아일랜드 호핑": {
        photos: ["/images/cebu/info/tourSpa/nalusuan-island-hopping.jpg"],
        summary: "막탄 인근 섬에서 즐기는 대표적인 호핑투어로 스노클링과 해상 식사가 함께 제공됩니다.",
        highlights: ["막탄 출발 대표 호핑투어", "스노클링 및 해상 식사"],
        tips: ["날씨와 조류에 따른 일정 변경 가능성 확인"],
        warnings: [],
        hours: "해상 상황별 변동",
        duration: "반나절~1일",
        price: "투어 상품별 상이",
        bestTime: "오전 또는 투어 지정 시간",
        access: { area: "막탄 인근 섬", note: "이동 시간과 픽업 장소를 사전에 확인하세요." },
        reservation: { required: true, method: "투어 상품 사전 예약 권장", note: "픽업·장비·입장료 포함 여부를 확인하세요." },
        links: [{"label": "Google Maps", "url": "https://maps.google.com/?cid=15822065647823308049", "type": "guide", "description": "위치·운영시간 확인"}, {"label": "네이버 후기 검색", "url": "https://search.naver.com/search.naver?where=blog&query=%EB%82%A0%EB%A3%A8%EC%88%98%EC%95%88+%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%ED%98%B8%ED%95%91+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", "type": "blog", "description": "최근 여행 후기 확인"}],
        updatedAt: "2026-07-12"
    },
    "오슬롭 고래상어 투어": {
        photos: ["/images/cebu/info/tourSpa/oslob-whale-shark-watching.jpg"],
        summary: "세부 남부를 대표하는 액티비티로 고래상어를 관찰할 수 있는 투어입니다.",
        highlights: ["세부 남부 대표 액티비티", "고래상어 투어"],
        tips: ["이른 새벽 출발을 고려한 전날 일정 여유 확보", "투어사 픽업 포함 상품 이용 추천"],
        warnings: [],
        hours: "월요일: 오전 6:00 ~ 오후 12:00; 화요일: 오전 6:00 ~ 오후 12:00",
        duration: "반나절~1일",
        price: "투어 상품별 상이",
        bestTime: "오전 또는 투어 지정 시간",
        access: { area: "오슬롭", note: "이동 시간과 픽업 장소를 사전에 확인하세요." },
        reservation: { required: true, method: "투어 상품 사전 예약 권장", note: "픽업·장비·입장료 포함 여부를 확인하세요." },
        links: [{"label": "공식 사이트", "url": "http://www.oslobwhalesharks.com/", "type": "official", "description": "운영 정보 확인"}, {"label": "Google Maps", "url": "https://maps.google.com/?cid=4917107982817371095", "type": "guide", "description": "위치·운영시간 확인"}, {"label": "네이버 후기 검색", "url": "https://search.naver.com/search.naver?where=blog&query=%EC%98%A4%EC%8A%AC%EB%A1%AD+%EA%B3%A0%EB%9E%98%EC%83%81%EC%96%B4+%ED%88%AC%EC%96%B4+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", "type": "blog", "description": "최근 여행 후기 확인"}],
        updatedAt: "2026-07-12"
    },
    "모알보알 정어리떼 스노클링": {
        photos: ["/images/cebu/info/tourSpa/moalboal-sardine-run.jpg"],
        summary: "정어리떼와 거북이를 관찰할 수 있는 모알보알의 스노클링 투어입니다.",
        highlights: ["정어리떼 및 거북이 스노클링", "오슬롭·캐녀닝과 연계 가능"],
        tips: ["파도와 시야에 따른 만족도 차이 유의"],
        warnings: [],
        hours: "월요일: 오전 8:00 ~ 오후 3:00; 화요일: 오전 8:00 ~ 오후 3:00",
        duration: "반나절~1일",
        price: "투어 상품별 상이",
        bestTime: "오전 또는 투어 지정 시간",
        access: { area: "모알보알", note: "이동 시간과 픽업 장소를 사전에 확인하세요." },
        reservation: { required: true, method: "투어 상품 사전 예약 권장", note: "픽업·장비·입장료 포함 여부를 확인하세요." },
        links: [{"label": "공식 사이트", "url": "https://blurangetours.com/trip/moalboal-sardines-run-private-tour/", "type": "official", "description": "운영 정보 확인"}, {"label": "Google Maps", "url": "https://maps.google.com/?cid=7505367752978782264", "type": "guide", "description": "위치·운영시간 확인"}, {"label": "네이버 후기 검색", "url": "https://search.naver.com/search.naver?where=blog&query=%EB%AA%A8%EC%95%8C%EB%B3%B4%EC%95%8C+%EC%A0%95%EC%96%B4%EB%A6%AC%EB%96%BC+%EC%8A%A4%EB%85%B8%ED%81%B4%EB%A7%81+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", "type": "blog", "description": "최근 여행 후기 확인"}],
        updatedAt: "2026-07-12"
    },
    "카와산 폭포 캐녀닝": {
        photos: ["/images/cebu/info/tourSpa/kawasan-falls-canyoneering.jpg"],
        summary: "점프와 수영을 포함하여 즐길 수 있는 바디안 지역의 액티브한 코스입니다.",
        highlights: ["점프 및 수영 포함 액티브 코스", "바디안 지역 투어"],
        tips: ["아쿠아슈즈와 방수팩 준비 추천", "안전 장비와 가이드 포함 여부 확인 필요"],
        warnings: [],
        hours: "월요일: 오전 6:00 ~ 오후 2:00; 화요일: 오전 6:00 ~ 오후 2:00",
        duration: "반나절~1일",
        price: "투어 상품별 상이",
        bestTime: "오전 또는 투어 지정 시간",
        access: { area: "바디안", note: "이동 시간과 픽업 장소를 사전에 확인하세요." },
        reservation: { required: true, method: "투어 상품 사전 예약 권장", note: "픽업·장비·입장료 포함 여부를 확인하세요." },
        links: [{"label": "공식 사이트", "url": "http://www.phkawasancanyoneering.com/", "type": "official", "description": "운영 정보 확인"}, {"label": "Google Maps", "url": "https://maps.google.com/?cid=2211686965865139828", "type": "guide", "description": "위치·운영시간 확인"}, {"label": "네이버 후기 검색", "url": "https://search.naver.com/search.naver?where=blog&query=%EC%B9%B4%EC%99%80%EC%82%B0+%ED%8F%AD%ED%8F%AC+%EC%BA%90%EB%85%80%EB%8B%9D+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", "type": "blog", "description": "최근 여행 후기 확인"}],
        updatedAt: "2026-07-12"
    },
    "시라오 가든": {
        photos: ["/images/cebu/info/tourSpa/sirao-garden.jpg"],
        summary: "꽃밭과 포토존 중심의 세부 고지대 명소 (1~2시간 소요)",
        highlights: ["꽃밭과 포토존 중심", "레아 신전·탑스와 시티투어로 묶기 좋음"],
        tips: ["햇빛이 강해 오전 방문 추천"],
        warnings: [],
        hours: "월요일: 오전 8:00 ~ 오후 5:30; 화요일: 오전 8:00 ~ 오후 5:30",
        duration: "1~2시간",
        price: "입장료 현장 확인",
        bestTime: "오전 또는 투어 지정 시간",
        access: { area: "세부 고지대", note: "시티투어 동선과 묶기 좋습니다." },
        reservation: { required: false, method: "현장 방문 가능", note: "운영 시간과 휴무를 확인하세요." },
        links: [{"label": "공식 사이트", "url": "https://www.facebook.com/siraogarden/", "type": "official", "description": "운영 정보 확인"}, {"label": "Google Maps", "url": "https://maps.google.com/?cid=6526454421455249265", "type": "guide", "description": "위치·운영시간 확인"}, {"label": "네이버 후기 검색", "url": "https://search.naver.com/search.naver?where=blog&query=%EC%8B%9C%EB%9D%BC%EC%98%A4+%EA%B0%80%EB%93%A0+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", "type": "blog", "description": "최근 여행 후기 확인"}],
        updatedAt: "2026-07-12"
    },
    "산토니뇨 성당": {
        photos: ["/images/cebu/info/tourSpa/santo-nino-basilica.jpg"],
        summary: "마젤란의 십자가 바로 옆 세부 시티 구도심 역사 명소 (30분~1시간 소요)",
        highlights: ["마젤란의 십자가 바로 옆", "세부 시티 구도심 위치"],
        tips: ["복장과 예절 준수 필요", "행사·미사 시간 이동 제한 주의"],
        warnings: [],
        hours: "월요일: 오전 8:00~11:45, 오후 1:30~4:45; 화요일: 오전 8:00~11:45, 오후 1:30~4:45",
        duration: "30분~1시간",
        price: "무료",
        bestTime: "오전 또는 투어 지정 시간",
        access: { area: "세부 시티 구도심", note: "시티투어 동선과 묶기 좋습니다." },
        reservation: { required: false, method: "현장 방문 가능", note: "운영 시간과 휴무를 확인하세요." },
        links: [{"label": "공식 사이트", "url": "https://santoninodecebubasilica.org/", "type": "official", "description": "운영 정보 확인"}, {"label": "Google Maps", "url": "https://maps.google.com/?cid=1583756090320591852", "type": "guide", "description": "위치·운영시간 확인"}, {"label": "네이버 후기 검색", "url": "https://search.naver.com/search.naver?where=blog&query=%EC%82%B0%ED%86%A0%EB%8B%88%EB%87%A8+%EC%84%B1%EB%8B%B9+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", "type": "blog", "description": "최근 여행 후기 확인"}],
        updatedAt: "2026-07-12"
    },
    "탑스 전망대": {
        photos: ["/images/cebu/info/tourSpa/tops-cebu.jpg"],
        summary: "야경과 식사를 즐기기 좋은 부사이의 전망 명소 (1~2시간 소요)",
        highlights: ["야경과 식사 동선에 적합", "부사이 지역 전망 명소"],
        tips: ["차량 이동 동선 확보 필요", "흐린 날은 전망 만족도 저하 주의"],
        warnings: [],
        hours: "오후~야간",
        duration: "1~2시간",
        price: "입장료 현장 확인",
        bestTime: "오전 또는 투어 지정 시간",
        access: { area: "부사이", note: "시티투어 동선과 묶기 좋습니다." },
        reservation: { required: false, method: "현장 방문 가능", note: "운영 시간과 휴무를 확인하세요." },
        links: [{"label": "Google Maps", "url": "https://maps.google.com/?cid=7302151955472151865", "type": "guide", "description": "위치·운영시간 확인"}, {"label": "네이버 후기 검색", "url": "https://search.naver.com/search.naver?where=blog&query=%ED%83%91%EC%8A%A4+%EC%A0%84%EB%A7%9D%EB%8C%80+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", "type": "blog", "description": "최근 여행 후기 확인"}],
        updatedAt: "2026-07-12"
    },
    "엘스파": {
        photos: ["/images/cebu/info/tourSpa/spa-lgmiouug.jpg"],
        summary: "막탄 공항 근처에서 0.5박 이용이 가능한 스파",
        updatedAt: "2026-07-20",
        highlights: ["5년 이상 숙련된 테라피스트 보유", "매주 진행되는 정기적인 트레이닝 및 평가", "공항 픽업 및 드랍 서비스 제공"],
        tips: ["새벽 도착 시 0.5박 패키지 이용 추천"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "The El, Inc Bldg, Lapu-Lapu Airport Rd, Lapu-Lapu, Cebu, 필리핀", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EC%97%98%EC%8A%A4%ED%8C%8C&query_place_id=ChIJ163PmDaZqTMRQvhLgMIouUg", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%98%EC%8A%A4%ED%8C%8C%20%EC%84%B8%EB%B6%80%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오아시스 스파": {
        photos: ["/images/cebu/info/tourSpa/oasis-spa-cebu.jpg"],
        summary: "막탄 지역의 입국 및 출국팩 전문 스파",
        updatedAt: "2026-07-20",
        highlights: ["입국팩 및 출국팩 운영", "오일, 스톤, 임산부, 성장 마사지 등 다양한 프로그램", "공항 픽업 및 드랍 서비스 제공"],
        tips: ["가족 여행객에게 특히 추천하는 코스"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "OASIS SPA, The Promenade Mactan, Punta Engaño Rd, Lapu-Lapu, 6015 Cebu, 필리핀", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=OASIS%20SPA%20%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4%20%EC%8A%A4%ED%8C%8C&query_place_id=ChIJF0cqFNWXqTMR7P2SGvcR3Sk", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4%20%EC%8A%A4%ED%8C%8C%20%EC%84%B8%EB%B6%80%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "바안스파": {
        photos: ["/images/cebu/info/tourSpa/spa-s4m11kli.jpg"],
        summary: "막탄 뉴타운에 위치한 가성비 좋은 로컬 스파",
        updatedAt: "2026-07-20",
        highlights: ["가성비 좋은 가격대", "네일 서비스 함께 이용 가능", "공항 샌딩 서비스 제공"],
        tips: ["막탄 뉴타운 메인 거리 스타벅스 근처에 위치"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "필리핀 세부 라푸-라푸 마리바고", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EB%B0%94%EC%95%88%EC%8A%A4%ED%8C%8C%28%EB%A7%88%EB%A6%AC%EB%B0%94%EA%B3%A0%EC%A0%90%29&query_place_id=ChIJzetI-PqXqTMRrNoS4m11kLI", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%95%88%EC%8A%A4%ED%8C%8C%20%EC%84%B8%EB%B6%80%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "플라워트리 스파": {
        photos: ["/images/cebu/info/tourSpa/spa-cmdesni8.jpg"],
        summary: "막탄 내 깔끔하고 전문적인 분위기의 스파",
        updatedAt: "2026-07-20",
        highlights: ["입국팩 서비스 운영", "아늑하고 전문적인 매장 분위기", "여행 피로 회복에 특화"],
        tips: ["출국 전 마지막 마사지 코스로 추천"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "필리핀 6015 세부 라푸-라푸 마리바고 7XPX+F4R", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%ED%94%8C%EB%9D%BC%EC%9B%8C%ED%8A%B8%EB%A6%AC%EC%8A%A4%ED%8C%8C&query_place_id=ChIJSaxSAn-XqTMRyi2CMDEsni8", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%8C%EB%9D%BC%EC%9B%8C%ED%8A%B8%EB%A6%AC%20%EC%8A%A4%ED%8C%8C%20%EC%84%B8%EB%B6%80%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카라스파": {
        photos: ["/images/cebu/info/tourSpa/spa-e-s7-yg4.jpg"],
        summary: "제이파크 리조트 인근의 편안한 스파",
        updatedAt: "2026-07-20",
        highlights: ["제이파크 리조트 근처 위치", "부모님 동반 여행객에게 적합한 분위기"],
        tips: ["리조트 이용 시 함께 방문하기 좋음"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "M.L. Quezon National Highway, Maribago, Lapu-Lapu, 6015 Cebu, 필리핀", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Cara%20Spa%20%28%EC%B9%B4%EB%9D%BC%EC%8A%A4%ED%8C%8C%29%20at%20Jpark%20Resort&query_place_id=ChIJNW0GwrWQqTMRd6pE-s7-yG4", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%9D%BC%EC%8A%A4%ED%8C%8C%20%EC%84%B8%EB%B6%80%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "원스파": {
        photos: ["/images/cebu/info/tourSpa/spa-oilhvwx8.jpg"],
        summary: "공항 픽업과 수면이 가능한 0.5박 전문 스파",
        updatedAt: "2026-07-20",
        highlights: ["공항 픽업 서비스 제공", "수면 이용 가능", "베이비 시터 서비스 운영"],
        tips: ["새벽 도착 후 휴식이 필요한 여행객에게 유용"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "Unit 4, ESY bldg, MP Yap st, cor Juana Osmeña St, Cebu City, 6000 Cebu, 필리핀", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=The%20First%20Spa%20and%20Asian%20Healing&query_place_id=ChIJg9Cjw2iZqTMRHM-oILhVWx8", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9B%90%EC%8A%A4%ED%8C%8C%20%EC%84%B8%EB%B6%80%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "노아스파": {
        photos: ["/images/cebu/info/tourSpa/spa-ye5s9zce.jpg"],
        summary: "제이파크 근처의 입국팩 전문 스파",
        updatedAt: "2026-07-20",
        highlights: ["공항 픽업 및 샌딩 서비스", "90분 마사지, 샤워, 리조트 샌딩 포함 패키지", "합리적인 가격 구성"],
        tips: ["새벽 도착 후 샤워와 휴식이 동시에 필요할 때 추천"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "Pajac-Maribago Rd, Lapu-Lapu, 6015 Cebu, 필리핀", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EB%85%B8%EC%95%84%EC%8A%A4%ED%8C%8C&query_place_id=ChIJGZNs8k6XqTMR1v1Ye5S9ZcE", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%B8%EC%95%84%EC%8A%A4%ED%8C%8C%20%EC%84%B8%EB%B6%80%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "트리쉐이드 스파": {
        photos: ["/images/cebu/info/tourSpa/spa-li0kcv7e.jpg"],
        summary: "세부 시내 주변의 차분한 분위기 스파",
        updatedAt: "2026-07-20",
        highlights: ["임산부 마사지 가능", "친절한 직원 서비스", "차분하고 조용한 매장 분위기"],
        tips: ["시내 관광 중 방문하기 좋은 위치"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "Salinas Dr, Cebu City, 6000 Cebu, 필리핀", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%ED%8A%B8%EB%A6%AC%EC%89%90%EC%9D%B4%EB%93%9C&query_place_id=ChIJm3obnyOZqTMR_nxlI0kcv7E", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8A%B8%EB%A6%AC%EC%89%90%EC%9D%B4%EB%93%9C%20%EC%8A%A4%ED%8C%8C%20%EC%84%B8%EB%B6%80%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "반얀스파": {
        photos: ["/images/cebu/info/tourSpa/spa-9a4ha5he.jpg"],
        summary: "세부 공항 근처의 출국팩 전문 스파",
        updatedAt: "2026-07-20",
        highlights: ["출국팩 운영", "무제한 체류 가능", "샤워 시설 완비"],
        tips: ["공항 바로 앞이라 시간 관리에 매우 용이"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "3rd floor, Raja Park Hotel, Fuente Osmeña, Cebu City, Cebu City, 6000 Cebu, 필리핀", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Banyan%20Tree%20Spa&query_place_id=ChIJye3O_E6ZqTMRCmQ9a4hA5hE", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%EC%96%80%EC%8A%A4%ED%8C%8C%20%EC%84%B8%EB%B6%80%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "씨엘로 스파": {
        photos: ["/images/cebu/info/tourSpa/spa-ezhu8y70.jpg"],
        summary: "호핑 투어 후 이용하기 좋은 스파",
        updatedAt: "2026-07-20",
        highlights: ["짐 보관 서비스 제공", "가족 여행객에게 적합한 환경", "호핑 투어 후 피로 회복에 최적"],
        tips: ["새벽 비행기 이용 전 방문을 추천"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "Sitio Buot, Lapu-Lapu, Cebu, 필리핀", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Cielo%20Spa&query_place_id=ChIJZV1eJgCXqTMRMWQEZHU8y70", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%94%A8%EC%97%98%EB%A1%9C%20%EC%8A%A4%ED%8C%8C%20%EC%84%B8%EB%B6%80%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
