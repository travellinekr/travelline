import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "우붓 원숭이 숲": {
        photos: ["/images/bali/info/tourSpa/sacred-monkey-forest-sanctuary-ubud-bali.jpg"],
        summary: "우붓 중심의 숲과 원숭이를 함께 만나는 대표 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["우붓 중심의 숲과 원숭이를 함께 만나는 대표 명소입니다.", "평점 4.6", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        duration: "1~2시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Jl. Raya Sangeh Jl. Brahmana, Sangeh, Kec. Abiansemal, Kabupaten Badung, Bali 80352 인도네시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13192512722532413634", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%B6%93+%EC%9B%90%EC%88%AD%EC%9D%B4+%EC%88%B2+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "뜨갈랄랑 라이스 테라스": {
        photos: ["/images/bali/info/tourSpa/tegallalang-rice-terrace-bali.jpg"],
        summary: "계단식 논 풍경과 스윙 체험으로 유명한 우붓 북부 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["계단식 논 풍경과 스윙 체험으로 유명한 우붓 북부 코스입니다.", "평점 5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 7:00 ~ 오후 5:30; 화요일: 오전 7:00 ~ 오후 5:30",
        duration: "1~2시간",
        price: "현장/체험별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "H79M+J34, Br.Kebon, Kedisan, Kec. Tegallalang, Kabupaten Gianyar, Bali 80561 인도네시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=581413579446569597", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9C%A8%EA%B0%88%EB%9E%84%EB%9E%91+%EB%9D%BC%EC%9D%B4%EC%8A%A4+%ED%85%8C%EB%9D%BC%EC%8A%A4+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "띠르따 엠풀 사원": {
        photos: ["/images/bali/info/tourSpa/tirta-empul-temple-bali.jpg"],
        summary: "성수 정화 의식으로 유명한 발리 힌두 사원입니다.",
        updatedAt: "2026-07-13",
        highlights: ["성수 정화 의식으로 유명한 발리 힌두 사원입니다.", "평점 4.6", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:00 ~ 오후 6:00; 화요일: 오전 8:00 ~ 오후 6:00",
        duration: "1~2시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Tampaksiring, Gianyar Regency, Bali 80552 인도네시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6026478213714472129", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%A0%EB%A5%B4%EB%94%B0+%EC%97%A0%ED%92%80+%EC%82%AC%EC%9B%90+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "울루와뚜 사원": {
        photos: ["/images/bali/info/tourSpa/uluwatu-temple-bali.jpg"],
        summary: "절벽 사원과 선셋, 케착댄스로 유명한 남부 대표 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["절벽 사원과 선셋, 케착댄스로 유명한 남부 대표 명소입니다.", "평점 4.6", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 7:00 ~ 오후 7:00; 화요일: 오전 7:00 ~ 오후 7:00",
        duration: "2~3시간",
        price: "입장/공연료 별도",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "인도네시아 발리 바둥 군 South Kuta, Pecatu", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=916919149066388629", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B8%EB%A3%A8%EC%99%80%EB%9A%9C+%EC%82%AC%EC%9B%90+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "따나롯 사원": {
        photos: ["/images/bali/info/tourSpa/tanah-lot-temple-bali.jpg"],
        summary: "바다 위 사원 풍경과 석양으로 유명한 발리 랜드마크입니다.",
        updatedAt: "2026-07-13",
        highlights: ["바다 위 사원 풍경과 석양으로 유명한 발리 랜드마크입니다.", "평점 4.7", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 6:00 ~ 오후 7:00; 화요일: 오전 6:00 ~ 오후 7:00",
        duration: "1~2시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "93MP+8QC, Jl. Tanah Lot, Beraban, Kec. Kediri, Kabupaten Tabanan, Bali 82121 인도네시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://tanahlot.org/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17300195352792100574", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%B0%EB%82%98%EB%A1%AF+%EC%82%AC%EC%9B%90+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "바투르산 일출 트레킹": {
        photos: ["/images/bali/info/tourSpa/mount-batur-sunrise-trekking-bali.jpg"],
        summary: "새벽 등산 후 일출을 보는 발리 대표 액티비티입니다.",
        updatedAt: "2026-07-13",
        highlights: ["새벽 등산 후 일출을 보는 발리 대표 액티비티입니다.", "평점 5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "반나절",
        price: "투어 상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Jalan raya pendakian gunung batur, Ubud, Kecamatan Ubud, Kabupaten Bangli, Bali 80652 인도네시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://sunrisebaturtrekking.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5418649758774885939", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%ED%88%AC%EB%A5%B4%EC%82%B0+%EC%9D%BC%EC%B6%9C+%ED%8A%B8%EB%A0%88%ED%82%B9+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "낀따마니 화산 투어": {
        photos: ["/images/bali/info/tourSpa/kintamani-bali-volcano-tour.jpg"],
        summary: "바투르 화산과 호수 전망을 함께 보는 북부 투어입니다.",
        updatedAt: "2026-07-13",
        highlights: ["바투르 화산과 호수 전망을 함께 보는 북부 투어입니다.", "평점 5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "반나절~1일",
        price: "투어 상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Jl. Pendakian Gn. Batur, Batur Tengah, Kec. Kintamani, Kabupaten Bangli, Bali 80652 인도네시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://baturvolcanotour.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18284614958320123090", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%80%EB%94%B0%EB%A7%88%EB%8B%88+%ED%99%94%EC%82%B0+%ED%88%AC%EC%96%B4+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "누사페니다 섬 투어": {
        photos: ["/images/bali/info/tourSpa/nusa-penida-island-tour-bali.jpg"],
        summary: "켈링킹 비치와 절벽 전망으로 유명한 섬 일일 투어입니다.",
        updatedAt: "2026-07-13",
        highlights: ["켈링킹 비치와 절벽 전망으로 유명한 섬 일일 투어입니다.", "평점 5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1일",
        price: "투어 상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Br. Karang sari No.kec, Suana, Kec. Nusa Penida, Kabupaten Klungkung, Bali 80771 인도네시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.tourmurahnusapenida.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12352412487259153395", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%88%84%EC%82%AC%ED%8E%98%EB%8B%88%EB%8B%A4+%EC%84%AC+%ED%88%AC%EC%96%B4+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "켈링킹 비치": {
        photos: ["/images/bali/info/tourSpa/kelingking-beach-nusa-penida-bali.jpg"],
        summary: "누사페니다의 대표 절벽 해변 포토 스팟입니다.",
        updatedAt: "2026-07-13",
        highlights: ["누사페니다의 대표 절벽 해변 포토 스팟입니다.", "평점 4.7", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "투어 포함",
        price: "투어 상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "인도네시아 80771 발리 Klungkung Regency, Nusa Penida, Bunga Mekar, 켈링킹 비치", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12938986127358750062", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BC%88%EB%A7%81%ED%82%B9+%EB%B9%84%EC%B9%98+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "발리 스윙 우붓": {
        photos: ["/images/bali/info/tourSpa/bali-swing-ubud.jpg"],
        summary: "정글·논 전망 배경으로 스윙 사진을 찍는 체험 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["정글·논 전망 배경으로 스윙 사진을 찍는 체험 코스입니다.", "평점 4.8", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "1~2시간",
        price: "패키지별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Jl. Raya Sidan, Sidan, East of Ubud, Kabupaten Gianyar, Bali 80515 인도네시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10018335415240734858", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%9C%EB%A6%AC+%EC%8A%A4%EC%9C%99+%EC%9A%B0%EB%B6%93+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "워터봄 발리": {
        photos: ["/images/bali/info/tourSpa/waterbom-bali.jpg"],
        summary: "꾸따에 있는 대형 워터파크로 가족 여행자에게 좋습니다.",
        updatedAt: "2026-07-13",
        highlights: ["꾸따에 있는 대형 워터파크로 가족 여행자에게 좋습니다.", "평점 4.7", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        duration: "반나절~1일",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Jl. Kartika Plaza, Kuta, Kec. Kuta, Kabupaten Badung, Bali 80361 인도네시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1338086495235375013", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9B%8C%ED%84%B0%EB%B4%84+%EB%B0%9C%EB%A6%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우붓 ATV 체험": {
        photos: ["/images/bali/info/tourSpa/atv-ride-ubud-bali.jpg"],
        summary: "논길과 마을길을 달리는 액티비티 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["논길과 마을길을 달리는 액티비티 코스입니다.", "평점 5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "2~3시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Ubud central, Jl. Raya Ubud, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80552 인도네시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6153789312636638091", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%B6%93+ATV+%EC%B2%B4%ED%97%98+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아융강 래프팅": {
        photos: ["/images/bali/info/tourSpa/ayung-river-rafting-bali.jpg"],
        summary: "우붓 인근 강에서 즐기는 래프팅 액티비티입니다.",
        updatedAt: "2026-07-13",
        highlights: ["우붓 인근 강에서 즐기는 래프팅 액티비티입니다.", "평점 5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "반나절",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "G6JX+WHF, Jl. Raya Bunutan, Kedewatan, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571 인도네시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://ubudraftingadventure.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4632376313164421383", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9C%B5%EA%B0%95+%EB%9E%98%ED%94%84%ED%8C%85+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "발리 하이 크루즈 렘봉안": {
        photos: ["/images/bali/info/tourSpa/bali-hai-cruises-lembongan.png"],
        summary: "렘봉안 섬과 해양 액티비티를 즐기는 크루즈 상품입니다.",
        updatedAt: "2026-07-13",
        highlights: ["렘봉안 섬과 해양 액티비티를 즐기는 크루즈 상품입니다.", "평점 4.6", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 7:00 ~ 오후 9:00; 화요일: 오전 7:00 ~ 오후 9:00",
        duration: "1일",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Jl. Wahana Tirta No.1, Benoa, Denpasar Selatan, Kota Denpasar, Bali 80222 인도네시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4312497692028358520", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%9C%EB%A6%AC+%ED%95%98%EC%9D%B4+%ED%81%AC%EB%A3%A8%EC%A6%88+%EB%A0%98%EB%B4%89%EC%95%88+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "렘봉안 섬 데이 트립": {
        photos: ["/images/bali/info/tourSpa/lembongan-island-day-trip-bali.jpg"],
        summary: "스노클링과 비치클럽을 함께 즐기는 섬 투어입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스노클링과 비치클럽을 함께 즐기는 섬 투어입니다.", "평점 5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1일",
        price: "투어 상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Nusa lembongan, Nusa Lembongan, Jungut batu, Kec. Nusa Penida, Kabupaten Klungkung, Bali 80771 인도네시아", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.nusalembongantour.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9705581771675729051", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%98%EB%B4%89%EC%95%88+%EC%84%AC+%EB%8D%B0%EC%9D%B4+%ED%8A%B8%EB%A6%BD+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
