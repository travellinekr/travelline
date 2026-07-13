import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "더 스미냑 비치 리조트 앤 스파": {
        photos: ["/images/bali/info/accommodations/the-seminyak-beach-resort-and-spa-bali.jpg"],
        summary: "스미냑 해변 접근성과 선셋 동선이 좋은 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스미냑 해변 접근성과 선셋 동선이 좋은 리조트입니다.", "평점 4.8", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "8573+VJ8, Jl. Kayu Aya, Pantai, Seminyak, Kec. Kuta, Kabupaten Badung, Bali 80361 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.theseminyak.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13805908483438750608", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%8A%A4%EB%AF%B8%EB%83%91+%EB%B9%84%EC%B9%98+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%95%A4+%EC%8A%A4%ED%8C%8C+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "W 발리 스미냑": {
        photos: ["/images/bali/info/accommodations/w-bali-seminyak.jpg"],
        summary: "스미냑 비치클럽 분위기와 풀 시설이 강점인 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스미냑 비치클럽 분위기와 풀 시설이 강점인 리조트입니다.", "평점 4.6", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Jl. Petitenget, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/dpswh-w-bali-seminyak/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12278639940375449838", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=W+%EB%B0%9C%EB%A6%AC+%EC%8A%A4%EB%AF%B8%EB%83%91+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "알릴라 스미냑": {
        photos: ["/images/bali/info/accommodations/alila-seminyak-bali.jpg"],
        summary: "해변 바로 앞 위치와 모던한 시설이 장점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해변 바로 앞 위치와 모던한 시설이 장점입니다.", "평점 4.6", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Jl. Taman Ganesha Jl. Petitenget No.9, Seminyak, Bali, Kabupaten Badung, Bali 80361 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12429767759132428939", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%8C%EB%A6%B4%EB%9D%BC+%EC%8A%A4%EB%AF%B8%EB%83%91+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 레기안 스미냑": {
        photos: ["/images/bali/info/accommodations/the-legian-seminyak-bali.jpg"],
        summary: "조용한 럭셔리 휴식에 강점이 있는 스미냑 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["조용한 럭셔리 휴식에 강점이 있는 스미냑 리조트입니다.", "평점 4.7", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Jl. Kayu Aya, Seminyak, Kec. Kuta, Kabupaten Badung, Bali 80361 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://lhm-hotels.com/en/the-legian-seminyak-bali", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13511543066888610348", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%A0%88%EA%B8%B0%EC%95%88+%EC%8A%A4%EB%AF%B8%EB%83%91+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "포테이토 헤드 스위트": {
        photos: ["/images/bali/info/accommodations/potato-head-suites-bali.jpg"],
        summary: "비치클럽과 디자인 감성이 강점인 스미냑 숙소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["비치클럽과 디자인 감성이 강점인 스미냑 숙소입니다.", "평점 4.7", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Jl. Petitenget No.51B, Seminyak, Kec. Kuta Utara, Kabupaten Badung, Bali 80361 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://seminyak.potatohead.co/sleep?utm_source=google&utm_medium=gmb&utm_campaign=gmb_desa-potato-head&utm_term=creative-village&utm_content=landing-page", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6855431284523512593", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%ED%85%8C%EC%9D%B4%ED%86%A0+%ED%97%A4%EB%93%9C+%EC%8A%A4%EC%9C%84%ED%8A%B8+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코모 우마 짱구": {
        photos: ["/images/bali/info/accommodations/como-uma-canggu-bali.jpg"],
        summary: "짱구 해변과 웰니스 분위기를 함께 즐기기 좋습니다.",
        updatedAt: "2026-07-13",
        highlights: ["짱구 해변과 웰니스 분위기를 함께 즐기기 좋습니다.", "평점 4.6", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Echo Beach, Jl. Pantai Batu Mejan, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali 80361 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.comohotels.com/bali/como-uma-canggu?utm_source=Google&utm_medium=GoogleMyBusiness&utm_campaign=GMBprofile", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13120958775596389951", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EB%AA%A8+%EC%9A%B0%EB%A7%88+%EC%A7%B1%EA%B5%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아메티스 빌라 짱구": {
        photos: ["/images/bali/info/accommodations/ametis-villa-canggu-bali.jpg"],
        summary: "프라이빗 빌라형 휴식에 강점이 있는 짱구 숙소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["프라이빗 빌라형 휴식에 강점이 있는 짱구 숙소입니다.", "평점 4.7", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Jl. Pantai Batu Bolong, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali 80361 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.ametisvilla.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10826447969760206011", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%A9%94%ED%8B%B0%EC%8A%A4+%EB%B9%8C%EB%9D%BC+%EC%A7%B1%EA%B5%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더아나 빌라 앤 스파 짱구": {
        photos: ["/images/bali/info/accommodations/theanna-villa-and-spa-canggu-bali.jpg"],
        summary: "짱구 중심 접근성과 풀빌라 구성이 장점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["짱구 중심 접근성과 풀빌라 구성이 장점입니다.", "평점 4.8", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Jl. Pantai Batu Bolong No.25 A, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali 80361 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.theannavilla.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13576958157363998122", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94%EC%95%84%EB%82%98+%EB%B9%8C%EB%9D%BC+%EC%95%A4+%EC%8A%A4%ED%8C%8C+%EC%A7%B1%EA%B5%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "파드마 리조트 우붓": {
        photos: ["/images/bali/info/accommodations/padma-resort-ubud-bali.jpg"],
        summary: "정글 뷰와 대형 수영장이 강점인 우붓 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["정글 뷰와 대형 수영장이 강점인 우붓 리조트입니다.", "평점 4.8", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Padma Resort Ubud Banjar Carik, Jl. Raya Bukiyan, Puhu, Kec. Payangan, Kabupaten Gianyar, Bali 80572 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.padmaresortubud.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7847074353409935796", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%EB%93%9C%EB%A7%88+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%9A%B0%EB%B6%93+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마야 우붓 리조트 앤 스파": {
        photos: ["/images/bali/info/accommodations/maya-ubud-resort-and-spa-bali.jpg"],
        summary: "숲과 강변 분위기의 우붓 휴양 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["숲과 강변 분위기의 우붓 휴양 리조트입니다.", "평점 4.9", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Jl. Gn. Sari, Peliatan, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://mayaresorts.com/ubud", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1758533405063269421", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%95%BC+%EC%9A%B0%EB%B6%93+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%95%A4+%EC%8A%A4%ED%8C%8C+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "알릴라 우붓": {
        photos: ["/images/bali/info/accommodations/alila-ubud-bali.jpg"],
        summary: "정글 뷰와 조용한 휴식에 강점이 있습니다.",
        updatedAt: "2026-07-13",
        highlights: ["정글 뷰와 조용한 휴식에 강점이 있습니다.", "평점 4.6", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Melinggih Kelod, Ubud, Gianyar Regency, Bali 80572 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10088870420584163274", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%8C%EB%A6%B4%EB%9D%BC+%EC%9A%B0%EB%B6%93+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "행잉 가든스 오브 발리": {
        photos: ["/images/bali/info/accommodations/hanging-gardens-of-bali.jpg"],
        summary: "정글 인피니티풀로 유명한 럭셔리 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["정글 인피니티풀로 유명한 럭셔리 리조트입니다.", "평점 4.7", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Buahan, Payangan, Gianyar Regency, Bali 80571 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://hanginggardensofbali.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2009445562984146617", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%96%89%EC%9E%89+%EA%B0%80%EB%93%A0%EC%8A%A4+%EC%98%A4%EB%B8%8C+%EB%B0%9C%EB%A6%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "만다파 리츠칼튼 리저브": {
        photos: ["/images/bali/info/accommodations/mandapa-a-ritz-carlton-reserve-bali.jpg"],
        summary: "우붓 강변의 최상급 럭셔리 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["우붓 강변의 최상급 럭셔리 리조트입니다.", "평점 4.7", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Jl. Raya Kedewatan, Kedewatan, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.ritzcarlton.com/en/hotels/dpsub-mandapa-a-ritz-carlton-reserve/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4501694768053777965", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%EB%8B%A4%ED%8C%8C+%EB%A6%AC%EC%B8%A0%EC%B9%BC%ED%8A%BC+%EB%A6%AC%EC%A0%80%EB%B8%8C+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "포시즌스 리조트 발리 앳 사얀": {
        photos: ["/images/bali/info/accommodations/four-seasons-resort-bali-at-sayan.jpg"],
        summary: "우붓 사얀 계곡의 대표 럭셔리 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["우붓 사얀 계곡의 대표 럭셔리 리조트입니다.", "평점 4.8", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Jl. Raya Sayan, Sayan, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9202544246217537775", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%EC%8B%9C%EC%A6%8C%EC%8A%A4+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%B0%9C%EB%A6%AC+%EC%95%B3+%EC%82%AC%EC%96%80+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아야나 리조트 발리 짐바란": {
        photos: ["/images/bali/info/accommodations/ayana-resort-bali-jimbaran.jpg"],
        summary: "짐바란 절벽 전망과 락바로 유명한 대형 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["짐바란 절벽 전망과 락바로 유명한 대형 리조트입니다.", "평점 4.7", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Jl. Karang Mas Sejahtera, Jimbaran, Kec. Kuta Sel., Kabupaten Badung, Bali 80364 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.ayana.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3548526953338324682", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%95%BC%EB%82%98+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%B0%9C%EB%A6%AC+%EC%A7%90%EB%B0%94%EB%9E%80+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "림바 바이 아야나 발리": {
        photos: ["/images/bali/info/accommodations/rimba-by-ayana-bali.jpg"],
        summary: "아야나 단지 내 가족 여행에 좋은 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["아야나 단지 내 가족 여행에 좋은 리조트입니다.", "평점 4.7", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Sejahtera, Jl. Karang Mas, Jimbaran, Kec. Kuta Sel., Kabupaten Badung, Bali 80364 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.ayana.com/bali/rimba-by-ayana/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13458810559621731687", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%BC%EB%B0%94+%EB%B0%94%EC%9D%B4+%EC%95%84%EC%95%BC%EB%82%98+%EB%B0%9C%EB%A6%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "인터컨티넨탈 발리 리조트 짐바란": {
        photos: ["/images/bali/info/accommodations/intercontinental-bali-resort-jimbaran.jpg"],
        summary: "짐바란 해변과 가족 여행 동선에 좋은 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["짐바란 해변과 가족 여행 동선에 좋은 리조트입니다.", "평점 4.7", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Jl. Raya Uluwatu No.45, Jimbaran, Kec. Kuta Sel., Kabupaten Badung, Bali 80361 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18340043934462547495", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B8%ED%84%B0%EC%BB%A8%ED%8B%B0%EB%84%A8%ED%83%88+%EB%B0%9C%EB%A6%AC+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%A7%90%EB%B0%94%EB%9E%80+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아푸르바 켐핀스키 발리": {
        photos: ["/images/bali/info/accommodations/the-apurva-kempinski-bali.jpg"],
        summary: "누사두아 절벽형 대형 럭셔리 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["누사두아 절벽형 대형 럭셔리 리조트입니다.", "평점 4.8", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Jl. Raya Nusa Dua Selatan No.4, Benoa, Kec. Kuta Sel., Kabupaten Badung, Bali 80361 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.kempinski.com/en/the-apurva-kempinski-bali?utm_medium=organic&utm_source=google&utm_campaign=KIDPS1&utm_content=gmb&source=S308962248", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5218857665333554588", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%ED%91%B8%EB%A5%B4%EB%B0%94+%EC%BC%90%ED%95%80%EC%8A%A4%ED%82%A4+%EB%B0%9C%EB%A6%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "세인트 레지스 발리 리조트": {
        photos: ["/images/bali/info/accommodations/the-st-regis-bali-resort-nusa-dua.jpg"],
        summary: "누사두아 비치프런트 최상급 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["누사두아 비치프런트 최상급 리조트입니다.", "평점 4.8", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Jl. Raya Nusa Dua Selatan, Benoa, Kec. Kuta Sel., Kabupaten Badung, Bali 80363 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/dpsxr-the-st-regis-bali-resort/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4189511058657882657", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%B8%EC%9D%B8%ED%8A%B8+%EB%A0%88%EC%A7%80%EC%8A%A4+%EB%B0%9C%EB%A6%AC+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "콘래드 발리": {
        photos: ["/images/bali/info/accommodations/conrad-bali-nusa-dua.jpg"],
        summary: "누사두아 가족 여행과 휴양에 좋은 대형 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["누사두아 가족 여행과 휴양에 좋은 대형 리조트입니다.", "평점 4.7", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Jl. Pratama No.168, Tanjung, Benoa, Kec. Kuta Sel., Kabupaten Badung, Bali 80363 인도네시아", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.hilton.com/en/hotels/bpncici-conrad-bali/?SEO_id=GMB-APAC-CI-BPNCICI", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15751644144970485544", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%98%EB%9E%98%EB%93%9C+%EB%B0%9C%EB%A6%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
