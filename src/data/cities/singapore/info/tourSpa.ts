import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "가든스 바이 더 베이": {
        photos: ["/images/singapore/info/tourSpa/gardens-by-the-bay-singapore.jpg"],
        summary: "싱가포르 여행의 필수 코스, 화려한 슈퍼트리 쇼와 식물원을 즐겨보세요.",
        updatedAt: "2026-07-15",
        highlights: ["슈퍼트리 야경", "클라우드 포레스트", "플라워 돔"],
        tips: ["저녁 가든 랩소디 쇼 시간 맞춰서 꼭 가기"],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "8 Marina Gardens Dr, Singapore 018951", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8947725083216466276", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%80%EB%93%A0%EC%8A%A4+%EB%B0%94%EC%9D%B4+%EB%8D%94+%EB%B2%A0%EC%9D%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마리나 베이 샌즈 스카이파크": {
        photos: ["/images/singapore/info/tourSpa/marina-bay-sands-skypark-singapore.png"],
        summary: "싱가포르의 화려한 도심 야경을 한눈에 담을 수 있는 최고의 전망대입니다.",
        updatedAt: "2026-07-15",
        highlights: ["파노라마 시티뷰", "인피니티 풀 뷰", "일몰 명소"],
        tips: ["해 질 녘에 방문해 낮과 밤 풍경 둘 다 보기"],
        hours: "월요일: 오전 10:00 ~ 오후 4:30, 오후 5:00~10:00; 화요일: 오전 10:00 ~ 오후 4:30, 오후 5:00~10:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "10 Bayfront Avenue, Hotel, Tower 3 Level 56, Marina Bay Sands 싱가포르 018956", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=588707449624412211", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A6%AC%EB%82%98+%EB%B2%A0%EC%9D%B4+%EC%83%8C%EC%A6%88+%EC%8A%A4%EC%B9%B4%EC%9D%B4%ED%8C%8C%ED%81%AC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "센토사 섬": {
        photos: ["/images/singapore/info/tourSpa/sentosa-singapore.jpg"],
        summary: "액티비티와 휴양을 동시에 즐길 수 있는 싱가포르 최고의 엔터테인먼트 섬입니다.",
        updatedAt: "2026-07-15",
        highlights: ["유니버설 스튜디오", "루지 체험", "실로소 비치"],
        tips: ["하루 종일 놀려면 편한 신발과 선크림은 필수!"],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "싱가포르 센토사섬", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17939587005458423041", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%BC%ED%86%A0%EC%82%AC+%EC%84%AC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "유니버설 스튜디오 싱가포르": {
        photos: ["/images/singapore/info/tourSpa/universal-studios-singapore.jpg"],
        summary: "센토사 섬에서 즐기는 짜릿한 테마파크 어트랙션",
        updatedAt: "2026-07-15",
        highlights: ["스릴 넘치는 롤러코스터", "다양한 캐릭터 퍼레이드"],
        tips: ["대기 시간을 줄여주는 익스프레스 패스 추천"],
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "8 Sentosa Gateway, 싱가포르 098269", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.rwsentosa.com/en/play/universal-studios-singapore", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3500426646667023007", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%A0%EB%8B%88%EB%B2%84%EC%84%A4+%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "싱가포르 동물원": {
        photos: ["/images/singapore/info/tourSpa/singapore-zoo.jpg"],
        summary: "자연과 동물이 하나 되는 오픈형 사육장 체험",
        updatedAt: "2026-07-15",
        highlights: ["자연 친화적인 관람 환경", "희귀 동물 관찰"],
        tips: ["더운 날씨를 대비해 선크림과 모자 필수"],
        hours: "월요일: 오전 8:30 ~ 오후 6:00; 화요일: 오전 8:30 ~ 오후 6:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "80 Mandai Lake Rd, 싱가포르 729826", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.mandai.com/en/singapore-zoo.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12976272166016981905", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EB%8F%99%EB%AC%BC%EC%9B%90+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "나이트 사파리": {
        photos: ["/images/singapore/info/tourSpa/night-safari-singapore.jpg"],
        summary: "어둠 속에서 펼쳐지는 신비로운 야생 동물 탐험",
        updatedAt: "2026-07-15",
        highlights: ["트램을 타고 즐기는 야간 투어", "야행성 동물의 생동감"],
        tips: ["인기 트램 시간대는 사전 예약 권장"],
        hours: "월요일: 오후 6:00 ~ 오전 12:00; 화요일: 오후 6:00 ~ 오전 12:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "80 Mandai Lake Rd, 싱가포르 729826", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.mandai.com/en/night-safari.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8066304183039611363", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EC%9D%B4%ED%8A%B8+%EC%82%AC%ED%8C%8C%EB%A6%AC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "싱가포르 플라이어": {
        photos: ["/images/singapore/info/tourSpa/singapore-flyer.jpg"],
        summary: "싱가포르의 아름다운 스카이라인을 한눈에 담을 수 있는 대관람차입니다.",
        updatedAt: "2026-07-15",
        highlights: ["탁 트인 파노라마 뷰", "싱가포르 주요 명소 조망"],
        tips: ["일몰 시간대에 맞춰 예약하면 야경까지 즐길 수 있어요."],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "30 Raffles Ave., Singapore Flyer, Singapore 039803", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10438516373862103395", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%94%8C%EB%9D%BC%EC%9D%B4%EC%96%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "멀라이언 파크": {
        photos: ["/images/singapore/info/tourSpa/merlion-park-singapore.jpg"],
        summary: "싱가포르의 상징인 멀라이언 동상과 마리나 베이 샌즈를 배경으로 사진 찍기 좋은 곳입니다.",
        updatedAt: "2026-07-15",
        highlights: ["멀라이언 동상 인증샷 필수", "마리나 베이 야경 명소"],
        tips: ["밤에 방문하면 화려한 레이저 쇼와 함께 멋진 야경을 볼 수 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1 Fullerton Rd, 싱가포르 049213", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7398674140980442023", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%80%EB%9D%BC%EC%9D%B4%EC%96%B8+%ED%8C%8C%ED%81%AC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "싱가포르 내셔널 갤러리": {
        photos: ["/images/singapore/info/tourSpa/national-gallery-singapore.jpg"],
        summary: "예술과 역사가 공존하는 공간으로, 아름다운 건축미를 느낄 수 있는 미술관입니다.",
        updatedAt: "2026-07-15",
        highlights: ["웅장한 건축물", "다양한 동남아시아 예술 작품"],
        tips: ["실내 에어컨이 시원해서 더위를 피하기 좋습니다."],
        hours: "월요일: 오전 10:00 ~ 오후 7:00; 화요일: 오전 10:00 ~ 오후 7:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "178957", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.nationalgallery.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16529228943337639552", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EB%82%B4%EC%85%94%EB%84%90+%EA%B0%A4%EB%9F%AC%EB%A6%AC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "클라키 키": {
        photos: ["/images/singapore/info/tourSpa/clarke-quay-singapore.jpg"],
        summary: "싱가포르 대표 명소",
        updatedAt: "2026-07-15",
        highlights: ["싱가포르 대표 명소", "평점 4.5", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Clarke Quay, 싱가포르", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12450201583291173640", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%B4%EB%9D%BC%ED%82%A4+%ED%82%A4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "제니스": {
        photos: ["/images/singapore/info/tourSpa/place-gul6-qkc.jpg"],
        summary: "차이나타운 근처 파크로얄컬렉션온피커링 호텔 인근에 위치한 만족도 높은 마사지샵",
        updatedAt: "2026-07-20",
        highlights: ["차이나타운 인근 위치", "매우 시원한 마사지 압"],
        tips: ["파크로얄컬렉션온피커링 호텔에서 도보 이동 가능"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "101 Upper Cross Street 01-32A People's Park Center, Singapore 058357", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Zenith%20Healing&query_place_id=ChIJA2YcJ4IZ2jERlWUGUL6-QKc", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%9C%EB%8B%88%EC%8A%A4%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "네이처랜드": {
        photos: ["/images/singapore/info/tourSpa/natureland-singapore.jpg"],
        summary: "창이공항 쥬얼창이에 위치한 가성비 좋은 스파로 발과 상체 마사지를 동시에 즐길 수 있음",
        updatedAt: "2026-07-20",
        highlights: ["4 in 1 가성비 코스 제공", "깨끗하고 합리적인 시설", "강한 압의 마사지"],
        tips: ["현장 가입 시 회원가로 이용 가능", "창이공항 쥬얼창기 T2 위치"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "238801 2 Orchard Turn #03-19, ION Orchard", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Natureland%20ION%20Orchard&query_place_id=ChIJ37FSCe8Z2jERzuuZ1HcoYjM", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%84%A4%EC%9D%B4%EC%B2%98%EB%9E%9C%EB%93%9C%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "소피텔 싱가포르 센토사 리조트 & 스파": {
        photos: ["/images/singapore/info/tourSpa/singapore-spa-singapore.jpg"],
        summary: "아름다운 조경과 함께 휴식을 취할 수 있는 센토사 섬 내의 럭셔리 스파",
        updatedAt: "2026-07-20",
        highlights: ["아름다운 리조트 조경", "센토사 지역 위치"],
        tips: ["공작새가 돌아다니는 예쁜 정원 구경 가능"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "2 Bukit Manis Rd, Sentosa, 싱가포르 099891", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EC%86%8C%ED%94%BC%ED%85%94%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EC%84%BC%ED%86%A0%EC%82%AC%20%EB%A6%AC%EC%A1%B0%ED%8A%B8%20%26%20%EC%8A%A4%ED%8C%8C&query_place_id=ChIJyyaE0q4e2jERSZ9xGmqPcI0", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%8C%ED%94%BC%ED%85%94%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EC%84%BC%ED%86%A0%EC%82%AC%20%EB%A6%AC%EC%A1%B0%ED%8A%B8%20%26%20%EC%8A%A4%ED%8C%8C%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "페어몬트 호텔 스파": {
        photos: ["/images/singapore/info/tourSpa/spa-dytuc9cm.jpg"],
        summary: "도심의 분주함을 잊고 조용하게 여유를 만끽할 수 있는 페어몬트 호텔 내 스파",
        updatedAt: "2026-07-20",
        highlights: ["조용한 분위기", "자연 친화적인 휴식 공간"],
        tips: ["아침 시간대 이용 시 더욱 여유로운 휴식 가능"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "80 Bras Basah Rd, 싱가포르 189560", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=SPA&query_place_id=ChIJIYAZ1KUZ2jERdF4dYtUc9cM", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%98%EC%96%B4%EB%AA%AC%ED%8A%B8%20%ED%98%B8%ED%85%94%20%EC%8A%A4%ED%8C%8C%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "래플스 호텔 스파 부티크": {
        photos: ["/images/singapore/info/tourSpa/spa-ydt-ppju.jpg"],
        summary: "싱가포르 자유여행객을 위한 럭셔리한 호캉스 코스로 유명한 스파",
        updatedAt: "2026-07-20",
        highlights: ["럭셔리한 분위기", "프리미엄 서비스"],
        tips: ["호캉스 일정의 일부로 추천"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "328 N Bridge Rd, 싱가포르 188719", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Raffles%20Spa&query_place_id=ChIJRUb2xKUZ2jERnSGydt-pPjU", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%98%ED%94%8C%EC%8A%A4%20%ED%98%B8%ED%85%94%20%EC%8A%A4%ED%8C%8C%20%EB%B6%80%ED%8B%B0%ED%81%AC%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "반얀트리 스파": {
        photos: ["/images/singapore/info/tourSpa/spa-3g-r5mum.jpg"],
        summary: "마리나베이샌즈 인근에서 즐길 수 있는 럭셔리한 휴식의 정수",
        updatedAt: "2026-07-20",
        highlights: ["럭셔리한 스파 경험", "마리나베이샌즈 인근 위치"],
        tips: ["고급스러운 휴식을 원하는 여행객에게 추천"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "10 Bayfront Ave, Tower 2, Level 5 Hotel Marina Bay Sands, 싱가포르 018956", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EB%B0%98%EC%96%80%ED%8A%B8%EB%A6%AC%20%EC%8A%A4%ED%8C%8C&query_place_id=ChIJNd-ipgUZ2jERT-k3g-R5MUM", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%EC%96%80%ED%8A%B8%EB%A6%AC%20%EC%8A%A4%ED%8C%8C%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "싱연 풋 리플렉솔로지 스파 피지오테라피": {
        photos: ["/images/singapore/info/tourSpa/foot-spa-singapore.jpg"],
        summary: "발 리플렉솔로지 전문 서비스를 제공하는 싱가포르 내 스파",
        updatedAt: "2026-07-20",
        highlights: ["풋 리플렉솔로지 전문", "피지오테라피 서비스"],
        tips: ["여행 일정 중 피로 회복용으로 적합"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "101 Upper Cross St, #02-01, 싱가포르 058357", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Xingyun%20Foot%20Reflexology%20Spa%20Physiotherapy&query_place_id=ChIJcf_XvnQZ2jERtOPulECpMGc", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%B1%EC%97%B0%20%ED%92%8B%20%EB%A6%AC%ED%94%8C%EB%A0%89%EC%86%94%EB%A1%9C%EC%A7%80%20%EC%8A%A4%ED%8C%8C%20%ED%94%BC%EC%A7%80%EC%98%A4%ED%85%8C%EB%9D%BC%ED%94%BC%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "리츠칼튼 밀레니아 싱가포르 스파": {
        photos: ["/images/singapore/info/tourSpa/singapore-spa-singapore.jpg"],
        summary: "리츠칼튼 호텔 내 위치한 프리미엄 스파로 세심한 서비스를 제공함",
        updatedAt: "2026-07-20",
        highlights: ["호텔 내 고급 시설", "세심한 고객 서비스"],
        tips: ["레몬물과 수건 등 편의 서비스 제공됨"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "7 Raffles Ave., 싱가포르 039799", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=The%20Ritz-Carlton%20Spa&query_place_id=ChIJ-YtAPEIZ2jERUjTA0DKyADY", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%B8%A0%EC%B9%BC%ED%8A%BC%20%EB%B0%80%EB%A0%88%EB%8B%88%EC%95%84%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EC%8A%A4%ED%8C%8C%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "만다린 오리엔탈 더 스파": {
        photos: ["/images/singapore/info/tourSpa/spa-wpmkkbzc.jpg"],
        summary: "나를 위한 사치스러운 시간을 보낼 수 있는 만다린 오리엔탈 호텔의 럭셔리 스파",
        updatedAt: "2026-07-20",
        highlights: ["호텔 내 럭셔리 스파", "프라이빗한 분위기"],
        tips: ["혼자만의 힐링 타임으로 추천"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "5 Raffles Ave., 싱가포르 039797", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=The%20Spa%20at%20Mandarin%20Oriental%2C%20Singapore&query_place_id=ChIJt7a1YKgZ2jERZvJwPMkKbZc", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%EB%8B%A4%EB%A6%B0%20%EC%98%A4%EB%A6%AC%EC%97%94%ED%83%88%20%EB%8D%94%20%EC%8A%A4%ED%8C%8C%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "yk풋스파": {
        photos: ["/images/singapore/info/tourSpa/ykfootspa-singapore.jpg"],
        summary: "차이나타운 근처에서 이용 가능한 발 마사지 전문점",
        updatedAt: "2026-07-20",
        highlights: ["차이나타운 인근 위치", "발 마사지 특화"],
        tips: ["가족 여행객의 피로 해소용으로 추천"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "772 N Bridge Rd, 싱가포르 198740", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%E6%80%A1%E5%92%8C%E5%A0%82%E6%A1%A5%E5%8C%97%E8%B7%AF%E5%BA%97%20Yi%20He%20Tang%20North%20Bridge&query_place_id=ChIJsX-MA_wZ2jERiCnpRhti-nA", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=yk%ED%92%8B%EC%8A%A4%ED%8C%8C%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "보타닉 가든": {
        photos: ["/images/singapore/info/tourSpa/singapore-botanic-gardens.jpg"],
        summary: "싱가포르 도심에서 자연과 여유를 함께 즐길 수 있는 유네스코 세계유산 정원입니다.",
        updatedAt: "2026-07-23",
        highlights: ["넓은 산책로와 열대 정원", "오키드 가든 등 가족 관람 포인트", "더운 낮에도 쉬어가기 좋은 녹지 코스"],
        tips: ["오키드 가든 등 일부 구역은 별도 요금이나 운영시간을 확인하세요."],
        hours: "방문 전 확인 권장",
        duration: "2~3시간",
        price: "무료~유료 구역 별도",
        reservation: { required: false, method: "특별 전시·유료 구역은 사전 확인" },
        access: { area: "1 Cluny Rd, Singapore 259569", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "오전 또는 해질녘",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16876812000428083584", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%ED%83%80%EB%8B%89+%EA%B0%80%EB%93%A0+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리버 크루즈": {
        photos: ["/images/singapore/info/tourSpa/singapore-river-cruise.jpg"],
        summary: "클락키에서 출발해 싱가포르 강과 마리나 베이 야경을 감상하는 크루즈입니다.",
        updatedAt: "2026-07-23",
        highlights: ["마리나 베이 야경 감상", "클락키와 강변 분위기", "짧은 일정에 넣기 쉬운 야간 액티비티"],
        tips: ["야경을 보려면 해가 진 뒤 시간대를 선택하는 편이 좋습니다."],
        hours: "방문 전 운항 시간 확인 권장",
        duration: "40~60분",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·야간 시간대 사전 예약 권장" },
        access: { area: "CLARK QUAY, JETTY, Singapore 058282", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "저녁~밤",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12128610364800667418", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EB%A6%AC%EB%B2%84+%ED%81%AC%EB%A3%A8%EC%A6%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
