import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "헤난 리조트 알로나 비치": {
        photos: ["/images/bohol/info/accommodations/henann-resort-alona-beach-bohol.jpg"],
        summary: "알로나 비치 중심부에 위치하여 접근성이 매우 뛰어난 대표적인 대형 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["알로나 비치 바로 앞의 환상적인 위치", "다양한 규모의 수영장 시설 보유"],
        tips: ["해변 접근성을 중요하게 생각하는 여행객에게 추천합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Alona Beach Rd, Panglao, 6340 Bohol, 필리핀" }, { icon: "⭐", label: "평점", note: "4.5" }],
        location: { landmark: "팡라오·알로나비치·타그빌라란 이동 동선 확인 권장", airport: "보홀 팡라오 국제공항 이동 시간은 숙소 위치별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18330235760474121190", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%A4%EB%82%9C+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%95%8C%EB%A1%9C%EB%82%98+%EB%B9%84%EC%B9%98+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "헤난 타왈라 리조트 보홀": {
        photos: ["/images/bohol/info/accommodations/henann-tawala-resort-bohol.jpg"],
        summary: "팡라오 중심부의 편리한 동선과 훌륭한 수영장 시설을 자랑하는 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["이동이 편리한 최적의 위치", "매력적인 수영장 인프라"],
        tips: ["수영장 이용을 즐기는 가족 단위 여행객에게 적합합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Brgy, Inside Henann Complex, Beside the convention center, Tawala, Panglao, Bohol, 필리핀" }, { icon: "⭐", label: "평점", note: "4.3" }],
        location: { landmark: "팡라오·알로나비치·타그빌라란 이동 동선 확인 권장", airport: "보홀 팡라오 국제공항 이동 시간은 숙소 위치별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15495725816595156175", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%A4%EB%82%9C+%ED%83%80%EC%99%88%EB%9D%BC+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "베스트 웨스턴 플러스 아이비월 리조트 팡라오": {
        photos: ["/images/bohol/info/accommodations/best-western-plus-the-ivywall-resort-panglao.jpg"],
        summary: "알로나 비치와 접근성이 뛰어난 편리한 체인형 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["알로나 비치 인근의 우수한 접근성", "믿고 방문할 수 있는 글로벌 체인 브랜드"],
        tips: ["해변 산책과 주변 편의시설 이용을 중시하는 여행객에게 추천합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Alona Beach Rd, Danao, Panglao, 6340 Bohol, 필리핀" }, { icon: "⭐", label: "평점", note: "4.3" }],
        location: { landmark: "팡라오·알로나비치·타그빌라란 이동 동선 확인 권장", airport: "보홀 팡라오 국제공항 이동 시간은 숙소 위치별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.bwplusivywall-panglao.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6738852083949372297", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%EC%8A%A4%ED%8A%B8+%EC%9B%A8%EC%8A%A4%ED%84%B4+%ED%94%8C%EB%9F%AC%EC%8A%A4+%EC%95%84%EC%9D%B4%EB%B9%84%EC%9B%94+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%8C%A1%EB%9D%BC%EC%98%A4+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "아모리타 리조트": {
        photos: ["/images/bohol/info/accommodations/amorita-resort-panglao-bohol.jpg"],
        summary: "절벽 전망과 함께 조용한 휴식을 즐길 수 있는 고급스러운 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["탁 트인 절벽 전망과 프라이빗한 분위기", "고급스러운 시설과 여유로운 휴양 환경"],
        tips: ["조용하고 럭셔리한 호캉스를 원하는 분들에게 최적의 장소입니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "1 Ester A. Lim Drive, 6340 Alona Beach Rd, Barangay Tawala, Panglao, Bohol, 필리핀" }, { icon: "⭐", label: "평점", note: "4.5" }],
        location: { landmark: "팡라오·알로나비치·타그빌라란 이동 동선 확인 권장", airport: "보홀 팡라오 국제공항 이동 시간은 숙소 위치별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.amoritaresort.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3442577124138623092", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%AA%A8%EB%A6%AC%ED%83%80+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "보홀 비치 클럽": {
        photos: ["/images/bohol/info/accommodations/bohol-beach-club-panglao.jpg"],
        summary: "넓은 전용 비치와 여유로운 동선을 갖춘 휴양형 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["탁 트인 넓은 비치 보유", "편안한 휴양 중심의 리조트 구조"],
        tips: ["해변 산책로를 따라 여유로운 시간을 보내기에 좋습니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Bo. Bolod Island of Panglao, Panglao, 6340 Bohol, 필리핀" }, { icon: "⭐", label: "평점", note: "4.6" }],
        location: { landmark: "팡라오·알로나비치·타그빌라란 이동 동선 확인 권장", airport: "보홀 팡라오 국제공항 이동 시간은 숙소 위치별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.boholbeachclub.com.ph/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6245112434726725718", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%ED%99%80+%EB%B9%84%EC%B9%98+%ED%81%B4%EB%9F%BD+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "사우스 팜스 리조트 팡라오": {
        photos: ["/images/bohol/info/accommodations/south-palms-resort-panglao-bohol.jpg"],
        summary: "넓은 해변과 함께 평화롭고 여유로운 분위기를 즐길 수 있는 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["여유로운 휴양 분위기", "아름답고 넓은 비치 프론트"],
        tips: ["프라이빗한 휴식을 원하는 여행객에게 추천합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "South Palms Resort And Spa, Anos Fonacier Circumferential Rd, Tawala, Panglao, 6340 Bohol, 필리핀" }, { icon: "⭐", label: "평점", note: "4.6" }],
        location: { landmark: "팡라오·알로나비치·타그빌라란 이동 동선 확인 권장", airport: "보홀 팡라오 국제공항 이동 시간은 숙소 위치별 상이" },
        links: [
            { label: "공식 사이트", url: "https://mgallery.accor.com/hotels/C0Q8?merchantid=seo-maps-PH-C0Q8&sourceid=aw-cen&utm_source=google+Maps&utm_medium=seo+maps&utm_campaign=seo+maps&utm_term=MGallery-Launch", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3438656676578531744", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%9A%B0%EC%8A%A4+%ED%8C%9C%EC%8A%A4+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%8C%A1%EB%9D%BC%EC%98%A4+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "더 벨뷰 리조트 보홀": {
        photos: ["/images/bohol/info/accommodations/the-bellevue-resort-bohol.png"],
        summary: "돌조비치 인근에 위치하여 조용하게 휴식을 즐기기 좋은 가족형 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["한적하고 평화로운 분위기", "가족 단위 여행객에게 최적화된 환경"],
        tips: ["조용한 휴식을 원하는 분들께 추천합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Island, Panglao, Bohol, 필리핀" }, { icon: "⭐", label: "평점", note: "4.6" }],
        location: { landmark: "팡라오·알로나비치·타그빌라란 이동 동선 확인 권장", airport: "보홀 팡라오 국제공항 이동 시간은 숙소 위치별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.thebellevuebohol.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15274643818332891214", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%B2%A8%EB%B7%B0+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "블루워터 팡라오 비치 리조트": {
        photos: ["/images/bohol/info/accommodations/bluewater-panglao-beach-resort.jpg"],
        summary: "팡라오의 휴양을 즐기기에 좋으며 수영장과의 동선이 매우 편리한 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["수영장 접근성이 뛰어난 구조", "팡라오 지역 여행에 최적화된 위치"],
        tips: ["물놀이를 좋아하는 분들께 강력 추천합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Sitio Daurong,, Danao,, Panglao Island, Bohol, 필리핀" }, { icon: "⭐", label: "평점", note: "4.7" }],
        location: { landmark: "팡라오·알로나비치·타그빌라란 이동 동선 확인 권장", airport: "보홀 팡라오 국제공항 이동 시간은 숙소 위치별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.bluewaterpanglao.com.ph/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=720384771939179785", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%94%EB%A3%A8%EC%9B%8C%ED%84%B0+%ED%8C%A1%EB%9D%BC%EC%98%A4+%EB%B9%84%EC%B9%98+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "비 그랜드 리조트 보홀": {
        photos: ["/images/bohol/info/accommodations/be-grand-resort-bohol.jpg"],
        summary: "팡라오에서 가족 여행객들이 머물기에 최적화된 대형 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["가족 단위 여행객에게 적합한 넓은 시설", "팡라오 지역의 대표적인 대형 리조트"],
        tips: ["가족과 함께하는 휴양 목적의 여행에 추천합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Brgy. Danao, Panglao, Bohol, 필리핀" }, { icon: "⭐", label: "평점", note: "4.3" }],
        location: { landmark: "팡라오·알로나비치·타그빌라란 이동 동선 확인 권장", airport: "보홀 팡라오 국제공항 이동 시간은 숙소 위치별 상이" },
        links: [
            { label: "공식 사이트", url: "http://begrandbohol.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7867257834683644659", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%84+%EA%B7%B8%EB%9E%9C%EB%93%9C+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "모달라 비치 리조트 팡라오": {
        photos: ["/images/bohol/info/accommodations/modala-beach-resort-panglao.jpg"],
        summary: "모달라 스트립과 해변으로의 이동이 매우 편리한 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["편리한 비치 동선", "모달라 스트립 접근성 우수"],
        tips: ["주변 편의시설 이용을 중시하는 여행객에게 좋습니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Tumoy Leisure Village 888 Purok 5 Barangay, Doljo, Panglao, Bohol, 필리핀" }, { icon: "⭐", label: "평점", note: "4.6" }],
        location: { landmark: "팡라오·알로나비치·타그빌라란 이동 동선 확인 권장", airport: "보홀 팡라오 국제공항 이동 시간은 숙소 위치별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.modala.ph/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1773621104978869877", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%EB%8B%AC%EB%9D%BC+%EB%B9%84%EC%B9%98+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%8C%A1%EB%9D%BC%EC%98%A4+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "팡라오 리젠트 파크 리조트": {
        photos: ["/images/bohol/info/accommodations/panglao-regents-park-resort-bohol.jpg"],
        summary: "알로나 비치 접근성과 가격 균형이 뛰어난 가성비 숙소입니다.",
        updatedAt: "2026-07-21",
        highlights: ["우수한 접근성", "합리적인 가격"],
        tips: ["가성비를 중시하는 여행객에게 추천합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Ester Lim Drive, Tawala, Panglao, Panglao, 6340 Bohol, 필리핀" }, { icon: "⭐", label: "평점", note: "3.9" }],
        location: { landmark: "팡라오·알로나비치·타그빌라란 이동 동선 확인 권장", airport: "보홀 팡라오 국제공항 이동 시간은 숙소 위치별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13478370171531027961", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%A1%EB%9D%BC%EC%98%A4+%EB%A6%AC%EC%A0%A0%ED%8A%B8+%ED%8C%8C%ED%81%AC+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "바탈라 리조트 팡라오": {
        photos: ["/images/bohol/info/accommodations/bathala-resort-panglao-bohol.jpg"],
        summary: "알로나 비치를 도보로 이용할 수 있는 매력적인 가성비 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["알로나 비치 도보권", "높은 평점"],
        tips: ["여유로운 휴식을 원하는 분들께 적합합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Daorong, Panglao, Bohol, 필리핀" }, { icon: "⭐", label: "평점", note: "4.6" }],
        location: { landmark: "팡라오·알로나비치·타그빌라란 이동 동선 확인 권장", airport: "보홀 팡라오 국제공항 이동 시간은 숙소 위치별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.bathalaresortpanglao.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3299966851597865133", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%ED%83%88%EB%9D%BC+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%8C%A1%EB%9D%BC%EC%98%A4+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "스텔라 팡라오 리조트": {
        photos: ["/images/bohol/info/accommodations/stella-hizon-reyes-panglao-resort-bohol.jpg"],
        summary: "팡라오 지역에서 합리적인 가격으로 이용할 수 있는 가성비 좋은 숙소입니다.",
        updatedAt: "2026-07-21",
        highlights: ["뛰어난 가성비", "깔끔한 시설"],
        tips: ["알로나 비치 인근의 위치를 확인하고 예약하세요."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Island 6340, Alona Beach Rd, Panglao, Bohol, 필리핀" }, { icon: "⭐", label: "평점", note: "4.8" }],
        location: { landmark: "팡라오·알로나비치·타그빌라란 이동 동선 확인 권장", airport: "보홀 팡라오 국제공항 이동 시간은 숙소 위치별 상이" },
        links: [
            { label: "공식 사이트", url: "https://stellarpanglao.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14028214755589989758", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%85%94%EB%9D%BC+%ED%8C%A1%EB%9D%BC%EC%98%A4+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "오셔니카 리조트 팡라오": {
        photos: ["/images/bohol/info/accommodations/oceanica-resort-panglao-bohol.jpg"],
        summary: "해변에서의 여유로운 휴양을 즐기기에 최적화된 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["해변 휴양에 적합한 환경", "편안한 휴식 공간"],
        tips: ["해변 접근성을 고려하여 객실 타입을 선택하세요."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Brgy, HQ2X+W9W, Bolod, Panglao, 6340 Bohol, 필리핀" }, { icon: "⭐", label: "평점", note: "4.5" }],
        location: { landmark: "팡라오·알로나비치·타그빌라란 이동 동선 확인 권장", airport: "보홀 팡라오 국제공항 이동 시간은 숙소 위치별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16629798456149698731", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%85%94%EB%8B%88%EC%B9%B4+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%8C%A1%EB%9D%BC%EC%98%A4+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "도나텔라 리조트 앤 생추어리": {
        photos: ["/images/bohol/info/accommodations/donatela-resort-and-sanctuary-bohol.jpg"],
        summary: "프라이빗하고 조용한 분위기에서 진정한 휴식을 즐길 수 있는 휴양형 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["조용하고 프라이빗한 휴식 가능", "자연 친화적인 생추어리 환경"],
        tips: ["조용한 휴식을 원하는 여행객에게 추천합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "KM 16, Brgy Hoyohoy, Tawala, Panglao, Bohol, 필리핀" }, { icon: "⭐", label: "평점", note: "4.3" }],
        location: { landmark: "팡라오·알로나비치·타그빌라란 이동 동선 확인 권장", airport: "보홀 팡라오 국제공항 이동 시간은 숙소 위치별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=235594574528571339", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EB%82%98%ED%85%94%EB%9D%BC+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%95%A4+%EC%83%9D%EC%B6%94%EC%96%B4%EB%A6%AC+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
