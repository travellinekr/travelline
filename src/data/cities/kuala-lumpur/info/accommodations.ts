import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "그랜드 하얏트 쿠알라룸푸르": {
        photos: ["/images/kuala-lumpur/info/accommodations/grand-hyatt-kuala-lumpur.jpg"],
        summary: "도심 전망과 KLCC 접근성이 뛰어난 고급스러운 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["환상적인 도심 뷰 제공", "KLCC와의 우수한 접근성"],
        tips: ["전망 좋은 객실을 미리 요청하세요"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "12, Jalan Pinang, Kuala Lumpur, 50450 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, 말레이시아" }, { icon: "⭐", label: "평점", note: "4.6" }],
        location: { landmark: "KLCC·부킷빈탕·KL센트럴 이동 동선 확인 권장", airport: "쿠알라룸푸르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2158749341995490280", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%9C%EB%93%9C+%ED%95%98%EC%96%8F%ED%8A%B8+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "트레이더스 호텔 쿠알라룸푸르": {
        photos: ["/images/kuala-lumpur/info/accommodations/traders-hotel-kuala-lumpur.jpg"],
        summary: "트윈타워 전망과 KLCC 파크 접근성이 매우 뛰어난 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["페트로나스 트윈타워 조망 가능", "KLCC 파크 인접성"],
        tips: ["전망 중심의 객실 예약을 추천합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Persiaran KLCC, Kuala Lumpur City Centre, 50088 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, 말레이시아" }, { icon: "⭐", label: "평점", note: "4.5" }],
        location: { landmark: "KLCC·부킷빈탕·KL센트럴 이동 동선 확인 권장", airport: "쿠알라룸푸르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.shangri-la.com/en/kualalumpur/traders/?WT.mc_id=THKL_20220808_MY_REFERRAL_GOOGLE_ALWAYSON_GOOGLE_THKL_WEBSITE_EN-NA-NA", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8608096046158693750", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8A%B8%EB%A0%88%EC%9D%B4%EB%8D%94%EC%8A%A4+%ED%98%B8%ED%85%94+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "EQ 쿠알라룸푸르": {
        photos: ["/images/kuala-lumpur/info/accommodations/eq-kuala-lumpur.jpg"],
        summary: "루프톱 바와 시내 접근성이 뛰어난 고급 도심 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["환상적인 전망을 자랑하는 루프톱 시설", "편리한 도심 위치"],
        tips: ["루프톱 바 이용 시 일몰 시간을 맞춰 방문하는 것을 추천합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Equatorial Plaza, Jln Sultan Ismail, Kuala Lumpur, 50250 Kuala Lumpur, Federal Territory of Kuala Lumpur, 말레이시아" }, { icon: "⭐", label: "평점", note: "4.7" }],
        location: { landmark: "KLCC·부킷빈탕·KL센트럴 이동 동선 확인 권장", airport: "쿠알라룸푸르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.eqkualalumpur.equatorial.com/?utm_source=local&utm_medium=organic&utm_campaign=GoogleMyBusiness", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16443776309278076991", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=EQ+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "더 루마 호텔 앤 레지던스": {
        photos: ["/images/kuala-lumpur/info/accommodations/the-ruma-hotel-and-residences-kuala-lumpur.jpg"],
        summary: "KLCC 인근에서 조용하게 머물 수 있는 고급 부티크형 숙소입니다.",
        updatedAt: "2026-07-21",
        highlights: ["조용한 분위기의 프리미엄 숙박 경험", "KLCC 접근성 용이"],
        tips: ["프라이빗한 휴식을 원하는 여행객에게 적합합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "7, Jalan Kia Peng, Kuala Lumpur, 50450 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, 말레이시아" }, { icon: "⭐", label: "평점", note: "4.6" }],
        location: { landmark: "KLCC·부킷빈탕·KL센트럴 이동 동선 확인 권장", airport: "쿠알라룸푸르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.theruma.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10354415730544803018", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%A3%A8%EB%A7%88+%ED%98%B8%ED%85%94+%EC%95%A4+%EB%A0%88%EC%A7%80%EB%8D%98%EC%8A%A4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "파빌리온 호텔 쿠알라룸푸르": {
        photos: ["/images/kuala-lumpur/info/accommodations/pavilion-hotel-kuala-lumpur-managed-by-banyan-tree.jpg"],
        summary: "파빌리온 몰과 바로 연결되어 쇼핑하기에 최적화된 숙소입니다.",
        updatedAt: "2026-07-21",
        highlights: ["쇼핑몰 접근성 매우 우수", "반얀트리 운영의 프리미엄 서비스"],
        tips: ["쇼핑 후 바로 휴식을 취하고 싶은 여행객에게 추천합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "170, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, 말레이시아" }, { icon: "⭐", label: "평점", note: "4.5" }],
        location: { landmark: "KLCC·부킷빈탕·KL센트럴 이동 동선 확인 권장", airport: "쿠알라룸푸르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6784066985029745940", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%EB%B9%8C%EB%A6%AC%EC%98%A8+%ED%98%B8%ED%85%94+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "JW 메리어트 쿠알라룸푸르": {
        photos: ["/images/kuala-lumpur/info/accommodations/jw-marriott-kuala-lumpur.jpg"],
        summary: "부킷빈탕의 주요 쇼핑가와 맛집을 도보로 편리하게 이용할 수 있는 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["부킷빈탕 중심지 위치", "주변 맛집 및 쇼핑 동선 최적화"],
        tips: ["미식 여행과 쇼핑을 동시에 즐기기에 가장 좋습니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "183, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, 말레이시아" }, { icon: "⭐", label: "평점", note: "4.5" }],
        location: { landmark: "KLCC·부킷빈탕·KL센트럴 이동 동선 확인 권장", airport: "쿠알라룸푸르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/kuldt-jw-marriott-hotel-kuala-lumpur/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13123189665313436875", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=JW+%EB%A9%94%EB%A6%AC%EC%96%B4%ED%8A%B8+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "더 웨스틴 쿠알라룸푸르": {
        photos: ["/images/kuala-lumpur/info/accommodations/the-westin-kuala-lumpur.jpg"],
        summary: "파빌리온 쇼핑몰 바로 앞에 위치하여 접근성이 매우 뛰어난 안정적인 체인 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["부킷빈탕 중심지의 편리한 입지", "검증된 서비스 품질"],
        tips: ["쇼핑을 목적으로 방문한다면 최적의 선택지입니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "199, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, 말레이시아" }, { icon: "⭐", label: "평점", note: "4.4" }],
        location: { landmark: "KLCC·부킷빈탕·KL센트럴 이동 동선 확인 권장", airport: "쿠알라룸푸르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/kulwi-the-westin-kuala-lumpur/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13640766877479396558", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%9B%A8%EC%8A%A4%ED%8B%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "풀만 쿠알라룸푸르 시티 센터": {
        photos: ["/images/kuala-lumpur/info/accommodations/pullman-kuala-lumpur-city-centre-hotel-residences.jpg"],
        summary: "KLCC와 부킷빈탕 사이의 동선에 적합한 호텔과 레지던스를 동시에 제공합니다.",
        updatedAt: "2026-07-21",
        highlights: ["KLCC 접근성이 좋은 위치", "호텔과 레지던스의 결합"],
        tips: ["두 주요 관광 지역을 모두 둘러보고 싶은 여행객에게 추천합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "4, Jalan Conlay, Kuala Lumpur, 50450 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, 말레이시아" }, { icon: "⭐", label: "평점", note: "4.4" }],
        location: { landmark: "KLCC·부킷빈탕·KL센트럴 이동 동선 확인 권장", airport: "쿠알라룸푸르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=A0C5&merchantid=seo-maps-MY-A0C5&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2284105514408827793", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%92%80%EB%A7%8C+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%EC%8B%9C%ED%8B%B0+%EC%84%BC%ED%84%B0+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "알릴라 방사르 쿠알라룸푸르": {
        photos: ["/images/kuala-lumpur/info/accommodations/alila-bangsar-kuala-lumpur.jpg"],
        summary: "KL 센트럴과 방사르 지역으로의 이동이 매우 편리한 세련된 디자인 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["편리한 교통 접근성", "감각적인 디자인"],
        tips: ["주변 방사르 지역 맛집 탐방을 추천합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "58, Jalan Ang Seng, Brickfields, 50470 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, 말레이시아" }, { icon: "⭐", label: "평점", note: "4.5" }],
        location: { landmark: "KLCC·부킷빈탕·KL센트럴 이동 동선 확인 권장", airport: "쿠알라룸푸르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16296522463225798359", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%8C%EB%A6%B4%EB%9D%BC+%EB%B0%A9%EC%82%AC%EB%A5%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "알로프트 쿠알라룸푸르 센트럴": {
        photos: ["/images/kuala-lumpur/info/accommodations/aloft-kuala-lumpur-sentral.jpg"],
        summary: "공항철도와 KL 센트럴역과의 접근성이 뛰어나 여행객에게 실용적인 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["KL 센트럴 인접성", "뛰어난 공항 이동 편의성"],
        tips: ["공항 이동 전후 숙소로 이용하기 좋습니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "5, Jalan Stesen Sentral, Kuala Lumpur Sentral, 50470 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, 말레이시아" }, { icon: "⭐", label: "평점", note: "4.4" }],
        location: { landmark: "KLCC·부킷빈탕·KL센트럴 이동 동선 확인 권장", airport: "쿠알라룸푸르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/kulal-aloft-kuala-lumpur-sentral/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9040467107284739806", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%8C%EB%A1%9C%ED%94%84%ED%8A%B8+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%EC%84%BC%ED%8A%B8%EB%9F%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "힐튼 쿠알라룸푸르": {
        photos: ["/images/kuala-lumpur/info/accommodations/hilton-kuala-lumpur.jpg"],
        summary: "KL 센트럴 역세권에 위치하여 접근성이 뛰어난 대형 체인 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["KL 센트럴 역 인근의 편리한 위치", "믿고 방문할 수 있는 글로벌 체인 브랜드"],
        tips: ["공항 철도 이용 시 이동이 매우 편리합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "3, Jalan Stesen Sentral, Kuala Lumpur Sentral, 50470 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, 말레이시아" }, { icon: "⭐", label: "평점", note: "4.5" }],
        location: { landmark: "KLCC·부킷빈탕·KL센트럴 이동 동선 확인 권장", airport: "쿠알라룸푸르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17271407487899684568", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9E%90%ED%8A%BC+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "르 메르디앙 쿠알라룸푸르": {
        photos: ["/images/kuala-lumpur/info/accommodations/le-m-ridien-kuala-lumpur.jpg"],
        summary: "공항 및 시내 이동이 매우 용이한 역세권 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["공항과 시내로의 뛰어난 접근성", "교통 요충지에 위치한 편리함"],
        tips: ["대중교통 이용 계획이 있다면 최적의 선택지입니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "2, Jalan Stesen Sentral, Kuala Lumpur Sentral, 50470 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, 말레이시아" }, { icon: "⭐", label: "평점", note: "4.5" }],
        location: { landmark: "KLCC·부킷빈탕·KL센트럴 이동 동선 확인 권장", airport: "쿠알라룸푸르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/kulmd-le-meridien-kuala-lumpur/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13246845810492952424", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A5%B4+%EB%A9%94%EB%A5%B4%EB%94%94%EC%95%99+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "더 마제스틱 호텔 쿠알라룸푸르": {
        photos: ["/images/kuala-lumpur/info/accommodations/the-majestic-hotel-kuala-lumpur.jpg"],
        summary: "헤리티지 분위기와 조용한 체류감을 느낄 수 있는 품격 있는 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["고풍스러운 헤리티지 스타일의 인테리어", "조용하고 여유로운 휴식 가능"],
        tips: ["클래식한 분위기를 선호하는 여행객에게 추천합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "5, Jalan Sultan Hishamuddin, Tasik Perdana, 50000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, 말레이시아" }, { icon: "⭐", label: "평점", note: "4.4" }],
        location: { landmark: "KLCC·부킷빈탕·KL센트럴 이동 동선 확인 권장", airport: "쿠알라룸푸르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/kulak-the-majestic-hotel-kuala-lumpur-autograph-collection/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17342417596782242984", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%A7%88%EC%A0%9C%EC%8A%A4%ED%8B%B1+%ED%98%B8%ED%85%94+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "시티즌M 쿠알라룸푸르 부킷빈탕": {
        photos: ["/images/kuala-lumpur/info/accommodations/citizenm-kuala-lumpur-bukit-bintang.jpg"],
        summary: "부킷빈탕과 잘란알로 지역으로의 접근성이 뛰어난 실용적인 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["부킷빈탕 중심가와 가까운 위치", "잘란알로 먹거리 거리 인접"],
        tips: ["쇼핑과 맛집 탐방을 목적으로 하는 여행객에게 적합합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "128, Jln Pudu, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, 말레이시아" }, { icon: "⭐", label: "평점", note: "4.5" }],
        location: { landmark: "KLCC·부킷빈탕·KL센트럴 이동 동선 확인 권장", airport: "쿠알라룸푸르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/kulcm-citizenm-kuala-lumpur/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10100094661991809814", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%8B%B0%EC%A6%8CM+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%EB%B6%80%ED%82%B7%EB%B9%88%ED%83%95+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "카프리 바이 프레이저 부킷빈탕": {
        photos: ["/images/kuala-lumpur/info/accommodations/capri-by-fraser-bukit-bintang-kuala-lumpur.jpg"],
        summary: "부킷빈탕 중심가에 위치하여 쇼핑과 장기 체류에 최적화된 레지던스형 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["쇼핑몰 접근성이 뛰어난 편리한 위치", "장기 투숙객을 위한 레지던스 스타일의 객실"],
        tips: ["주변 쇼핑몰과 맛집이 많아 도보 여행에 유리합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "160, Jln Imbi, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, 말레이시아" }, { icon: "⭐", label: "평점", note: "4.4" }],
        location: { landmark: "KLCC·부킷빈탕·KL센트럴 이동 동선 확인 권장", airport: "쿠알라룸푸르국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.frasershospitality.com/en/malaysia/kualalumpur/capri-by-fraser-bukit-bintang/?utm_source=google_map&utm_medium=organic", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1011311794061681745", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%94%84%EB%A6%AC+%EB%B0%94%EC%9D%B4+%ED%94%84%EB%A0%88%EC%9D%B4%EC%A0%80+%EB%B6%80%ED%82%B7%EB%B9%88%ED%83%95+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
