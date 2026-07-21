import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "NDC 리조트 & 스파 마나도": {
        photos: ["/images/manado/info/accommodations/ndc-resort-spa-manado.jpg"],
        summary: "부나켄 투어 동선에 최적화된 해변형 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["부나켄 국립공원 접근성 우수", "해변과 인접한 휴양 시설"],
        tips: ["스노클링 장비 대여 여부를 미리 확인하세요"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Unnamed Road, Molas, Kec. Bunaken, Kota Manado, Sulawesi Utara, 인도네시아" }, { icon: "⭐", label: "평점", note: "4.4" }],
        location: { landmark: "부나켄·시내·공항 이동 동선 확인 권장", airport: "삼 라투랑이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.ndcmanado.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1735537407970562464", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=NDC+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%26+%EC%8A%A4%ED%8C%8C+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "그랜드 룰레이 마나도": {
        photos: ["/images/manado/info/accommodations/grand-luley-manado.jpg"],
        summary: "부나켄 다이빙과 편안한 휴양을 동시에 즐기기 좋은 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다이빙하기 좋은 위치", "쾌적한 휴양 환경"],
        tips: ["다이빙 예약 시 일정을 미리 조율하세요"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Tongkeina, Bunaken, Manado City, North Sulawesi 95244 인도네시아" }, { icon: "⭐", label: "평점", note: "4.5" }],
        location: { landmark: "부나켄·시내·공항 이동 동선 확인 권장", airport: "삼 라투랑이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.luleyhotels.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1010703234382741514", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%9C%EB%93%9C+%EB%A3%B0%EB%A0%88%EC%9D%B4+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "포포인츠 바이 쉐라톤 마나도": {
        photos: ["/images/manado/info/accommodations/four-points-by-sheraton-manado.jpg"],
        summary: "시내와 쇼핑몰 접근성이 뛰어난 글로벌 체인 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["쇼핑몰 인접성 우수", "편리한 시내 접근성"],
        tips: ["주변 쇼핑 시설을 이용하기에 매우 편리합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Jl. Piere Tendean Jl. Mantos, Kec. Sario, Kota Manado, Sulawesi Utara 95111 인도네시아" }, { icon: "⭐", label: "평점", note: "4.6" }],
        location: { landmark: "부나켄·시내·공항 이동 동선 확인 권장", airport: "삼 라투랑이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/mdcfp-four-points-manado/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6713573241599355859", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%ED%8F%AC%EC%9D%B8%EC%B8%A0+%EB%B0%94%EC%9D%B4+%EC%89%90%EB%9D%BC%ED%86%A4+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "아리아두타 마나도": {
        photos: ["/images/manado/info/accommodations/aryaduta-manado.jpg"],
        summary: "마나도 시내로의 이동이 용이한 대형 규모의 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["시내 접근성 양호", "대규모 객실 보유"],
        tips: ["시내 관광을 계획 중인 여행객에게 추천합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Jalan Piere Tendean (Boulevard, Jl. Piere Tendean, Wenang Utara, Kec. Wenang, Kota Manado, Sulawesi Utara 95111 인도네시아" }, { icon: "⭐", label: "평점", note: "4.5" }],
        location: { landmark: "부나켄·시내·공항 이동 동선 확인 권장", airport: "삼 라투랑이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.aryaduta.com/en/hotel/AMD/aryaduta-manado?utm_source=digital-direct&utm_medium=web-link&utm_campaign=website&utm_id=digital-direct&utm_term=google-web-button", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12832553924730132115", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%A6%AC%EC%95%84%EB%91%90%ED%83%80+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "스위스벨호텔 말레오산 마나도": {
        photos: ["/images/manado/info/accommodations/swiss-belhotel-maleosan-manado.jpg"],
        summary: "시내 일정과 공항 이동을 함께 계획하기에 매우 편리한 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["시내 접근성 우수", "공항 이동 용이"],
        tips: ["시내 관광 위주의 여행객에게 추천합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "FRFR+WRP, Jl. Jendral Sudirman No.85-87, Pinaesaan, Kec. Wenang, Kota Manado, Sulawesi Utara 95122 인도네시아" }, { icon: "⭐", label: "평점", note: "4.8" }],
        location: { landmark: "부나켄·시내·공항 이동 동선 확인 권장", airport: "삼 라투랑이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.swiss-belhotel.com/hotels/swiss-belhotel-maleosan-manado?utm_source=Google&utm_medium=GMB&utm_campaign=Website", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1627647886551384043", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%9C%84%EC%8A%A4%EB%B2%A8%ED%98%B8%ED%85%94+%EB%A7%90%EB%A0%88%EC%98%A4%EC%82%B0+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "노보텔 마나도 골프 리조트": {
        photos: ["/images/manado/info/accommodations/novotel-manado-golf-resort-convention-center.jpg"],
        summary: "공항과의 접근성이 좋으면서도 리조트형 부대시설을 즐길 수 있는 숙소입니다.",
        updatedAt: "2026-07-21",
        highlights: ["공항 인접성", "다양한 리조트 시설"],
        tips: ["여유로운 휴식을 원하는 여행객에게 적합합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Jalan Raya Tanawangko, Tateli Satu, Kec. Mandolang, Kabupaten Minahasa, Sulawesi Utara 95661 인도네시아" }, { icon: "⭐", label: "평점", note: "4.6" }],
        location: { landmark: "부나켄·시내·공항 이동 동선 확인 권장", airport: "삼 라투랑이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "http://manado-tateli.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16281292441777081676", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%B8%EB%B3%B4%ED%85%94+%EB%A7%88%EB%82%98%EB%8F%84+%EA%B3%A8%ED%94%84+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "루완사 호텔 마나도": {
        photos: ["/images/manado/info/accommodations/luwansa-hotel-manado.jpg"],
        summary: "깔끔하고 현대적인 시설을 갖춘 시내형 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["쾌적한 객실 컨디션", "컨벤션 센터 운영"],
        tips: ["시내 중심가 이동이 편리합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Jl. Pomurow No.68, Taas, Kec. Tikala, Kota Manado, Sulawesi Utara 95129 인도네시아" }, { icon: "⭐", label: "평점", note: "4.6" }],
        location: { landmark: "부나켄·시내·공항 이동 동선 확인 권장", airport: "삼 라투랑이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17747049258216454813", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A3%A8%EC%99%84%EC%82%AC+%ED%98%B8%ED%85%94+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "신테사 페닌슐라 호텔 마나도": {
        photos: ["/images/manado/info/accommodations/sintesa-peninsula-hotel-manado.jpg"],
        summary: "시내 전망과 뛰어난 접근성을 자랑하는 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["멋진 시내 뷰 제공", "주요 명소와의 높은 접근성"],
        tips: ["전망 좋은 객실을 요청해 보세요."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Jl. Jend Sudirman, Gunung Wenang, Pinaesaan, Wenang, Pinaesaan Wenang Pinaesaan Wenang, Pinaesaan, Kec. Wenang, Kota Manado, Sulawesi Utara 95123 인도네시아" }, { icon: "⭐", label: "평점", note: "4.5" }],
        location: { landmark: "부나켄·시내·공항 이동 동선 확인 권장", airport: "삼 라투랑이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.sintesahotels.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10497104249654648851", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%ED%85%8C%EC%82%AC+%ED%8E%98%EB%8B%8C%EC%8A%90%EB%9D%BC+%ED%98%B8%ED%85%94+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "베스트 웨스턴 더 라군 호텔 마나도": {
        photos: ["/images/manado/info/accommodations/best-western-the-lagoon-hotel-manado.jpg"],
        summary: "바다 전망과 시내 접근성을 동시에 누릴 수 있는 편리한 호텔입니다.",
        updatedAt: "2026-07-21",
        highlights: ["아름다운 바다 전망 제공", "마나도 시내 주요 지점 이동 용이"],
        tips: ["해안가 근처 객실을 예약하면 더욱 멋진 뷰를 즐길 수 있습니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "FR6F+VC9, Jl. Wolter Monginsidi No.1, Bahu, Kec. Malalayang, Kota Manado, Sulawesi Utara 95115 인도네시아" }, { icon: "⭐", label: "평점", note: "4.5" }],
        location: { landmark: "부나켄·시내·공항 이동 동선 확인 권장", airport: "삼 라투랑이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5029718292390670254", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%EC%8A%A4%ED%8A%B8+%EC%9B%A8%EC%8A%A4%ED%84%B4+%EB%8D%94+%EB%9D%BC%EA%B5%B0+%ED%98%B8%ED%85%94+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "부나켄 오아시스 다이브 리조트 & 스파": {
        photos: ["/images/manado/info/accommodations/bunaken-oasis-dive-resort-and-spa.jpg"],
        summary: "부나켄 섬에서 다이빙을 중심으로 머물기 좋은 고급스러운 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["전문적인 다이빙 프로그램 운영", "프라이빗하고 여유로운 휴식 가능"],
        tips: ["다이빙 일정을 미리 확인하여 예약하는 것이 좋습니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Liang Beach, Bunaken, Kec. Bunaken Kepulauan, Kota Manado, Sulawesi Utara, 인도네시아" }, { icon: "⭐", label: "평점", note: "4.8" }],
        location: { landmark: "부나켄·시내·공항 이동 동선 확인 권장", airport: "삼 라투랑이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.bunakenoasis.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2162471482386152850", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%80%EB%82%98%EC%BC%84+%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4+%EB%8B%A4%EC%9D%B4%EB%B8%8C+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%26+%EC%8A%A4%ED%8C%8C+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "부나켄 씨 가든 리조트": {
        photos: ["/images/manado/info/accommodations/bunaken-sea-garden-resort.jpg"],
        summary: "부나켄 섬 체류와 스노클링 일정에 최적화된 숙소입니다.",
        updatedAt: "2026-07-21",
        highlights: ["스노클링하기 좋은 위치", "섬 내 체류에 적합"],
        tips: ["스노클링 장비 지참을 권장합니다"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Unnamed Rd, Taman Nasional Bunaken, Indonesien, JQ6J+H66, Kec. Bunaken Kepulauan, Kota Manado, Sulawesi Utara, 인도네시아" }, { icon: "⭐", label: "평점", note: "3.9" }],
        location: { landmark: "부나켄·시내·공항 이동 동선 확인 권장", airport: "삼 라투랑이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://www.bunakenseagardenresort.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9676295329803512182", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%80%EB%82%98%EC%BC%84+%EC%94%A8+%EA%B0%80%EB%93%A0+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "부나켄 차차 네이처 리조트": {
        photos: ["/images/manado/info/accommodations/bunaken-cha-cha-nature-resort.jpg"],
        summary: "부나켄의 자연 속에서 다이빙과 휴식을 즐기기에 좋습니다.",
        updatedAt: "2026-07-21",
        highlights: ["다이빙하기 좋은 환경", "자연 친화적인 분위기"],
        tips: ["다이빙 일정 전 미리 예약하세요"],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Pantai Buro Tanjung Parigi Pulau, 부나켄 해양 국립공원 Bunaken, Kec. Bunaken Kepulauan, Kota Manado, Sulawesi Utara 95000 인도네시아" }, { icon: "⭐", label: "평점", note: "4.4" }],
        location: { landmark: "부나켄·시내·공항 이동 동선 확인 권장", airport: "삼 라투랑이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.bunakenchacha.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16701813262956733239", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%80%EB%82%98%EC%BC%84+%EC%B0%A8%EC%B0%A8+%EB%84%A4%EC%9D%B4%EC%B2%98+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "3윌 부나켄 다이브 리조트": {
        photos: ["/images/manado/info/accommodations/3will-bunaken-dive-resort-manado.jpg"],
        summary: "부나켄 다이빙 여행자들에게 추천하는 숙소 후보입니다.",
        updatedAt: "2026-07-21",
        highlights: ["높은 평점(4.7)", "다이빙 최적화"],
        tips: ["다이빙 일정과 함께 예약하는 것을 권장합니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Pangalisang Beach, Bunaken, Kec. Bunaken Kepulauan, Kota Manado, Sulawesi Utara 95000 인도네시아" }, { icon: "⭐", label: "평점", note: "4.7" }],
        location: { landmark: "부나켄·시내·공항 이동 동선 확인 권장", airport: "삼 라투랑이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.bunaken.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11900636505197263273", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=3%EC%9C%8C+%EB%B6%80%EB%82%98%EC%BC%84+%EB%8B%A4%EC%9D%B4%EB%B8%8C+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "바스티아노스 부나켄 다이브 리조트": {
        photos: ["/images/manado/info/accommodations/bastianos-bunaken-dive-resort.jpg"],
        summary: "다이빙 프로그램과 편안한 체류를 동시에 즐기기 좋은 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다이빙 프로그램 운영", "편리한 숙박 시설"],
        tips: ["프로그램 구성 내용을 미리 확인하세요."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "Liang Beach, Bunaken Island, Bunaken, Kec. Bunaken Kepulauan, Kota Manado, Sulawesi Utara, 인도네시아" }, { icon: "⭐", label: "평점", note: "4.3" }],
        location: { landmark: "부나켄·시내·공항 이동 동선 확인 권장", airport: "삼 라투랑이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "http://www.bastianos.com/bastianos-bunaken/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4533820757653156729", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%8A%A4%ED%8B%B0%EC%95%84%EB%85%B8%EC%8A%A4+%EB%B6%80%EB%82%98%EC%BC%84+%EB%8B%A4%EC%9D%B4%EB%B8%8C+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "타식 리아 리조트 마나도": {
        photos: ["/images/manado/info/accommodations/tasik-ria-resort-manado.jpg"],
        summary: "다이빙과 편안한 휴양을 동시에 즐길 수 있는 아름다운 해변 리조트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["스노클링과 다이빙에 최적화된 위치", "여유로운 해변 휴양 가능"],
        tips: ["다이빙 프로그램을 이용하려면 미리 예약하는 것이 좋습니다."],
        checkIn: { time: "15:00", note: "예약 조건별 변동 가능" },
        checkOut: { time: "11:00", note: "레이트 체크아웃은 현장 확인" },
        amenities: [{ icon: "📍", label: "위치", note: "CP75+F8W Tasik Ria, Jl. Trans Sulawesi, Mokupa, Kec. Tombariri, Manado, Sulawesi Utara 95351 인도네시아" }, { icon: "⭐", label: "평점", note: "4.5" }],
        location: { landmark: "부나켄·시내·공항 이동 동선 확인 권장", airport: "삼 라투랑이 국제공항 이동 시간은 교통상황별 상이" },
        links: [
            { label: "공식 사이트", url: "https://tasikria.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11077477895930511846", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%8B%9D+%EB%A6%AC%EC%95%84+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
