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
};

export default info;
