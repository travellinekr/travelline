import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "호안끼엠 호수": {
        photos: ["/images/hanoi/info/tourSpa/hoan-kiem-lake-hanoi.jpg"],
        summary: "하노이의 심장이자 산책하기 좋은 도심 속 휴식처",
        updatedAt: "2026-07-15",
        highlights: ["평화로운 호숫가 산책로", "밤이면 더 화려해지는 야경"],
        tips: ["주말에는 차 없는 거리가 운영되어 걷기 훨씬 편해요."],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "베트남 Ha Noi, Hoan Kiem, 호안끼엠 호", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=124622409024774670", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%EC%95%88%EB%81%BC%EC%97%A0+%ED%98%B8%EC%88%98+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "문묘": {
        photos: ["/images/hanoi/info/tourSpa/temple-of-literature-hanoi.jpg"],
        summary: "베트남 최초의 대학이자 유교 전통을 느낄 수 있는 고즈넉한 명소",
        updatedAt: "2026-07-15",
        highlights: ["전통적인 건축미", "역사적 가치가 높은 공간"],
        tips: ["조용한 분위기를 즐기려면 이른 오전 방문을 추천해요."],
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "58 Quốc Tử Giám, Văn Miếu, Đống Đa, Hà Nội, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://vanmieu.gov.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6345017207668727582", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AC%B8%EB%AC%98+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호치민 묘소": {
        photos: ["/images/hanoi/info/tourSpa/ho-chi-minh-mausoleum-hanoi.jpg"],
        summary: "베트남의 영웅 호치민 주석이 안치된 역사적인 성지",
        updatedAt: "2026-07-15",
        highlights: ["웅장한 건축물", "베트남 역사의 상징성"],
        tips: ["복장 규정이 엄격하니 어깨와 무릎을 가리는 옷을 준비하세요."],
        hours: "월요일: 휴무일; 화요일: 오전 7:30~10:30",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1 Hùng Vương, Điện Biên, Ba Đình, Hà Nội, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7065731937148685644", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%EC%B9%98%EB%AF%BC+%EB%AC%98%EC%86%8C+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "탕롱 황성": {
        photos: ["/images/hanoi/info/tourSpa/thang-long-imperial-citadel-hanoi.jpg"],
        summary: "유네스코 세계문화유산으로 지정된 하노이 역사의 상징적인 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["웅장한 고대 성벽", "하노이의 오랜 역사 탐방"],
        tips: ["야간 개장 시 방문하면 더욱 특별한 분위기를 즐길 수 있어요."],
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "19c Hoàng Diệu, Điện Biên, Ba Đình, Hà Nội 100000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://hoangthanhthanglong.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13051897747951069495", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%95%EB%A1%B1+%ED%99%A9%EC%84%B1+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호아로 수용소": {
        photos: ["/images/hanoi/info/tourSpa/hoa-lo-prison-relic-hanoi.jpg"],
        summary: "베트남 근현대사의 아픈 역사를 생생하게 마주할 수 있는 박물관입니다.",
        updatedAt: "2026-07-15",
        highlights: ["실제 수용 시설 관람", "가슴 먹먹한 역사적 기록"],
        tips: ["역사적 맥락을 이해하기 위해 가이드 투어를 추천해요."],
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1 P. Hoả Lò, Trần Hưng Đạo, Hoàn Kiếm, Hà Nội, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://hoalo.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10881225616060952404", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%EC%95%84%EB%A1%9C+%EC%88%98%EC%9A%A9%EC%86%8C+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "베트남 민족학 박물관": {
        photos: ["/images/hanoi/info/tourSpa/vietnam-museum-of-ethnology-hanoi.jpg"],
        summary: "베트남 54개 소수민족의 다채로운 문화를 한자리에서 만나는 곳입니다.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 종족의 전통 가옥", "생동감 넘치는 문화 전시"],
        tips: ["야외 전시 구역이 넓으니 편한 운동화를 신고 방문하세요."],
        hours: "월요일: 휴무일; 화요일: 오전 8:30 ~ 오후 5:30",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Đ. Nguyễn Văn Huyên, Nghĩa Đô, Hà Nội 100000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5172754411353020956", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%ED%8A%B8%EB%82%A8+%EB%AF%BC%EC%A1%B1%ED%95%99+%EB%B0%95%EB%AC%BC%EA%B4%80+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "성 요셉 성당": {
        photos: ["/images/hanoi/info/tourSpa/st-joseph-cathedral-hanoi.jpg"],
        summary: "하노이의 이국적인 정취를 물씬 느낄 수 있는 상징적인 성당입니다.",
        updatedAt: "2026-07-15",
        highlights: ["프랑스식 고딕 양식의 웅장한 건축물", "성당 앞 활기찬 카페 거리와 분위기"],
        tips: ["해 질 녘에 방문하면 더욱 로맨틱한 사진을 남길 수 있어요."],
        hours: "월요일: 오전 8:00~11:00, 오후 2:00~5:00; 화요일: 오전 8:00~11:00, 오후 2:00~5:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1 P. Nhà Thờ, Phường, Hoàn Kiếm, Hà Nội 100000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://giaoxuchinhtoahanoi.org/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10427370394078927246", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%B1+%EC%9A%94%EC%85%89+%EC%84%B1%EB%8B%B9+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "못꼿 사원": {
        photos: ["/images/hanoi/info/tourSpa/one-pillar-pagoda-hanoi.jpg"],
        summary: "연꽃 모양을 본뜬 독특하고 신비로운 하노이의 대표적인 사원입니다.",
        updatedAt: "2026-07-15",
        highlights: ["연꽃 위에 떠 있는 듯한 아름다운 건축미", "베트남의 역사를 간직한 상징적 명소"],
        tips: ["주변 호안끼엠 호수 산책 코스와 함께 둘러보길 추천해요."],
        hours: "월요일: 오전 7:00 ~ 오후 6:00; 화요일: 오전 7:00 ~ 오후 6:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "P. Chùa Một Cột, Ba Đình, Hà Nội 100000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15845693668219404974", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%BB%EA%BC%BF+%EC%82%AC%EC%9B%90+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하노이 오페라하우스": {
        photos: ["/images/hanoi/info/tourSpa/hanoi-opera-house.jpg"],
        summary: "프랑스 식민지 시대의 우아함이 돋보이는 하노이의 문화 예술 중심지입니다.",
        updatedAt: "2026-07-15",
        highlights: ["고전적인 유럽풍 건축 양식", "야경이 아름다운 도시의 랜드마크"],
        tips: ["주변의 고급스러운 거리 분위기를 느끼며 산책하기 좋습니다."],
        hours: "월요일: 오전 7:00 ~ 오후 5:00; 화요일: 오전 7:00 ~ 오후 5:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1 Tràng Tiền, Cửa Nam, Hà Nội 100000 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7240365436428127531", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%85%B8%EC%9D%B4+%EC%98%A4%ED%8E%98%EB%9D%BC%ED%95%98%EC%9A%B0%EC%8A%A4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "탕롱 수상인형극장": {
        photos: ["/images/hanoi/info/tourSpa/thang-long-water-puppet-theatre-hanoi.jpg"],
        summary: "하노이 대표 명소",
        updatedAt: "2026-07-15",
        highlights: ["하노이 대표 명소", "평점 4.4", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:30 ~ 오후 8:00; 화요일: 오전 8:30 ~ 오후 8:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "57B Đinh Tiên Hoàng, Hàng Bạc, Hoàn Kiếm, Hà Nội, 베트남", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5647135313407683868", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%95%EB%A1%B1+%EC%88%98%EC%83%81%EC%9D%B8%ED%98%95%EA%B7%B9%EC%9E%A5+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라비엔 스파": {
        photos: ["/images/hanoi/info/tourSpa/spa-xrqlz9ui.jpg"],
        summary: "다양한 마사지 코스를 갖춘 하노이의 유명 마사지 명소",
        updatedAt: "2026-07-20",
        highlights: ["오일 마사지 및 타이거밤", "키즈 마사지 운영", "아로마 및 핫스톤 서비스"],
        tips: ["할인 예약 방법 미리 확인하기"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "48 P. Lương Văn Can, Phố cổ Hà Nội, Hoàn Kiếm, Hà Nội 100000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=La%20Belle%20Vie%20Spa&query_place_id=ChIJJ8OibsCrNTERHFrXRQlZ9UI", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%B9%84%EC%97%94%20%EC%8A%A4%ED%8C%8C%20%ED%95%98%EB%85%B8%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "웰터치 스파": {
        photos: ["/images/hanoi/info/tourSpa/spa-eytkjjm0.jpg"],
        summary: "공항 샌딩 서비스와 쾌적한 시설을 자랑하는 스파",
        updatedAt: "2026-07-20",
        highlights: ["공항 샌딩 서비스 제공", "짐 보관 가능", "청결한 시설 및 공기청정기 완비"],
        tips: ["여행 마지막 날 이용하기 매우 좋음"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "A5, Five star, Đ. Đình Thôn, Đình Thôn, Từ Liêm, Hà Nội, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Well%20Touch%20spa&query_place_id=ChIJHw07rR5VNDER33jEytkJJm0", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9B%B0%ED%84%B0%EC%B9%98%20%EC%8A%A4%ED%8C%8C%20%ED%95%98%EB%85%B8%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "욜로 스파": {
        photos: ["/images/hanoi/info/tourSpa/spa-3tvbskwa.jpg"],
        summary: "가성비가 뛰어나고 샤워가 가능한 로컬 마사지샵",
        updatedAt: "2026-07-20",
        highlights: ["샤워 가능", "한국어 소통 가능", "팁 없는 합리적인 가격"],
        tips: ["구시가지 번화가에 위치하여 접근성 좋음"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "P. Bát Đàn/45a P. Cửa Đông, Phố cổ Hà Nội, Hoàn Kiếm, Hà Nội 100000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EB%B2%A0%ED%8A%B8%EB%82%A8%20%ED%95%98%EB%85%B8%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%EC%9A%9C%EB%A1%9C%EC%8A%A4%ED%8C%8C%20Hanoi%20Massage%20Yolo%20Spa&query_place_id=ChIJFesc4DerNTEROYJ3tvBskWA", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%9C%EB%A1%9C%20%EC%8A%A4%ED%8C%8C%20%ED%95%98%EB%85%B8%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "어반 오아시스 스파": {
        photos: ["/images/hanoi/info/tourSpa/oasis-spa-hanoi.jpg"],
        summary: "호안끼엠 근처 시내 중심부에 위치한 편안한 스파",
        updatedAt: "2026-07-20",
        highlights: ["호안끼엠 인근 위치", "응이아툭 광장 근처"],
        tips: ["식사 전후 산책하며 들르기 좋음"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "39A Ng. Hàng Hành, Hoàn Kiếm, Hà Nội, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Urban%20Oasis%20Spa&query_place_id=ChIJ7Z8l0b-rNTERGpjAHM17ULE", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%96%B4%EB%B0%98%20%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4%20%EC%8A%A4%ED%8C%8C%20%ED%95%98%EB%85%B8%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "라스파": {
        photos: ["/images/hanoi/info/tourSpa/spa--skm1qee.jpg"],
        summary: "올드쿼터에서 즐길 수 있는 고퀄리티 스파 서비스",
        updatedAt: "2026-07-20",
        highlights: ["올드쿼터 위치", "호텔 스파 서비스 가능", "뛰어난 마사지 압과 가격"],
        tips: ["팁이 발생할 수 있으니 참고"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "3rd floor, No. 4- 6 P. Bà Triệu, Cửa Nam, Hà Nội, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=La%20Spa%20Lakeside&query_place_id=ChIJbcrqZ7irNTERApw-sKM1qeE", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%8A%A4%ED%8C%8C%20%ED%95%98%EB%85%B8%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "쓰리따봉 스파": {
        photos: ["/images/hanoi/info/tourSpa/spa-vpwzjztc.jpg"],
        summary: "미딩 지역의 대규모 프리미엄 스파",
        updatedAt: "2026-07-20",
        highlights: ["압도적인 규모와 고급 인테리어", "키즈 마사지 가능", "높은 고객 평점"],
        tips: ["하노이 교민들이 추천하는 핫플레이스"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "Tầng 1, TTTM The Garden, Đ. Mễ Trì, Từ Liêm, Hà Nội, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=THREE%20TABOM%20SPA&query_place_id=ChIJNfOcWE5VNDERi2QvpwZJZTc", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%93%B0%EB%A6%AC%EB%94%B0%EB%B4%89%20%EC%8A%A4%ED%8C%8C%20%ED%95%98%EB%85%B8%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "미도 스파": {
        photos: ["/images/hanoi/info/tourSpa/spa-5rw5-h9w.jpg"],
        summary: "호안끼엠 시내에서 편리하게 이용 가능한 스파",
        updatedAt: "2026-07-20",
        highlights: ["호안끼엠 시내 위치", "숙소 픽드랍 서비스 가능", "공항 샌딩 서비스 제공"],
        tips: ["1일 1스파 코스로 추천"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "11 P. Hàng Mành, Phố cổ Hà Nội, Hoàn Kiếm, Hà Nội 10000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EB%AF%B8%EB%8F%84%20%EC%8A%A4%ED%8C%8C&query_place_id=ChIJjdPZPb6rNTERDrB5Rw5-H9w", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EB%8F%84%20%EC%8A%A4%ED%8C%8C%20%ED%95%98%EB%85%B8%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "궁스파": {
        photos: ["/images/hanoi/info/tourSpa/gungspa-hanoi.jpg"],
        summary: "한국인 사장님이 운영하여 예약이 편리한 스파",
        updatedAt: "2026-07-20",
        highlights: ["공항 픽업 및 샌딩 서비스", "무료 짐 보관 가능", "샤워 시설 완비"],
        tips: ["카카오톡으로 간편하게 예약 가능"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "45a P. Đào Duy Từ, Phố cổ Hà Nội, Hoàn Kiếm, Hà Nội, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%ED%95%98%EB%85%B8%EC%9D%B4%20%EA%B6%81%EC%8A%A4%ED%8C%8C%20GOONG%20SPA&query_place_id=ChIJ44Wpez2rNTERhabpiszA-oM", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B6%81%EC%8A%A4%ED%8C%8C%20%ED%95%98%EB%85%B8%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "파라곤 스파": {
        photos: ["/images/hanoi/info/tourSpa/spa-ynazxoz8.jpg"],
        summary: "깔끔한 시설과 네일 서비스를 함께 즐길 수 있는 곳",
        updatedAt: "2026-07-20",
        highlights: ["네일아트 서비스 제공", "수준 높은 마사지 실력", "깔끔하고 쾌적한 시설"],
        tips: ["마사지와 네일을 동시에 이용하기 좋음"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "Tầng 3, Tháp A, P. Dương Đình Nghệ, Keangnam, Yên Hòa, Hà Nội, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Paragon%20Spa&query_place_id=ChIJJZAqSwCrNTERIdYYnaZXOz8", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%EB%9D%BC%EA%B3%A4%20%EC%8A%A4%ED%8C%8C%20%ED%95%98%EB%85%B8%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "에스테바 스파": {
        photos: ["/images/hanoi/info/tourSpa/spa-tpu4h6rk.jpg"],
        summary: "팁 부담 없이 샤워까지 가능한 가성비 스파",
        updatedAt: "2026-07-20",
        highlights: ["팁 없는 합리적인 가격", "샤워 가능"],
        tips: ["여행 중 쌓인 피로를 풀기에 적합함"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "카카오톡/공식 채널 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "75 P. Lò Sũ, French Quarter, Hoàn Kiếm, Hà Nội, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Estheva%20Spa&query_place_id=ChIJT4awjAWrNTER1Z4tPu4h6Rk", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EC%8A%A4%ED%85%8C%EB%B0%94%20%EC%8A%A4%ED%8C%8C%20%ED%95%98%EB%85%B8%EC%9D%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "하롱베이 크루즈": {
        photos: ["/images/hanoi/info/tourSpa/halong-bay-cruise.jpg"],
        summary: "웅장한 하롱베이의 자연 경관을 크루즈 위에서 만끽하는 특별한 경험",
        updatedAt: "2026-07-23",
        highlights: ["에메랄드빛 바다와 기암괴석의 절경", "크루즈에서 즐기는 낭만적인 식사"],
        tips: ["상품별로 소요 시간이 다르니 일정에 맞춰 예약하세요"],
        hours: "방문 전 확인 권장",
        duration: "4~8시간",
        price: "상품별 상이",
        reservation: { required: true, method: "투어/입장권 상품별 조건 확인" },
        access: { area: "Nhà ga - Cảng tàu khách quốc tế, Hạ Long, Bãi Cháy, Quảng Ninh 200000 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "오전 또는 오후",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=Ambassador%20Cruise%20Halong%20Bay&query_place_id=ChIJV-lLrr5fSjERTXIdtxSl2vA", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%A1%B1%EB%B2%A0%EC%9D%B4%20%ED%81%AC%EB%A3%A8%EC%A6%88%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "깟깟마을": {
        photos: ["/images/hanoi/info/tourSpa/cat-cat-village.jpg"],
        summary: "사파의 자연 경관과 소수민족 문화를 체험할 수 있는 깟깟마을",
        updatedAt: "2026-07-23",
        highlights: ["아름다운 계단식 논 풍경", "소수민족 전통 의상 체험", "시원한 폭포와 산책로"],
        tips: ["전통 의상을 대여해 인생샷 남기기", "입장료 별도 확인 필수"],
        hours: "방문 전 확인 권장",
        duration: "2~3시간",
        price: "입장료 별도",
        reservation: { required: true, method: "투어/입장권 상품별 조건 확인" },
        access: { area: "Cat Cat Village, San Sả Hồ, Ta Van, Lao Cai, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "오전 또는 오후",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=Cat%20Cat%20Village&query_place_id=ChIJRXU9ykJBzTYRjrK3LB07du8", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B9%9F%EA%B9%9F%EB%A7%88%EC%9D%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "판시판 케이블카": {
        photos: ["/images/hanoi/info/tourSpa/fansipan-cable-car.jpg"],
        summary: "썬월드 케이블카를 타고 구름 위 판시판 산맥의 절경을 만끽하세요.",
        updatedAt: "2026-07-23",
        highlights: ["구름 위를 가르는 압도적인 케이블카 뷰", "인도차이나 최고봉 판시판 정상 정복"],
        tips: ["오전 시간대에 방문하여 맑은 풍경 감상하기", "기온 변화에 대비해 따뜻한 외투 준비하기"],
        hours: "방문 전 확인 권장",
        duration: "3~5시간",
        price: "티켓 요금 변동",
        reservation: { required: true, method: "투어/입장권 상품별 조건 확인" },
        access: { area: "8RPF+QM, Nguyễn Chí Thanh, Sa Pa, Lào Cai, 베트남", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "오전",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=%ED%8C%90%EC%8B%9C%ED%8C%90%20%EC%8D%AC%EC%9B%94%EB%93%9C%20%EC%BC%80%EC%9D%B4%EB%B8%94%EC%B9%B4%20%EC%97%AD&query_place_id=ChIJ3dK8gGFBzTYRuJAsl36EwJ4", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%90%EC%8B%9C%ED%8C%90%20%EC%BC%80%EC%9D%B4%EB%B8%94%EC%B9%B4%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
