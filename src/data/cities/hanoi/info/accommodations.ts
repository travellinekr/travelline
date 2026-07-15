import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "소피텔 레전드 메트로폴 하노이": {
        photos: ["/images/hanoi/info/accommodations/sofitel-legend-metropole-hanoi.jpg"],
        summary: "하노이의 역사를 그대로 간직한 클래식하고 럭셔리한 상징적 호텔입니다.",
        updatedAt: "2026-07-15",
        highlights: ["프랑스 식민지 시대의 고풍스러운 분위기", "하노이 최고의 서비스와 품격 있는 조식", "호안끼엠 호수 인근의 완벽한 위치"],
        tips: ["역사 투어를 신청해 호텔에 얽힌 숨겨진 이야기를 들어보세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "15 P. Ngô Quyền, Phường, Hoàn Kiếm, Hà Nội 100000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://sofitel.accor.com/hotels/1555?merchantid=seo-maps-VN-1555&sourceid=aw-cen&utm_source=google+Maps&utm_medium=seo+maps&utm_campaign=seo+maps&utm_term=Sofitel-Launch", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10436696459157331749", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%8C%ED%94%BC%ED%85%94+%EB%A0%88%EC%A0%84%EB%93%9C+%EB%A9%94%ED%8A%B8%EB%A1%9C%ED%8F%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카펠라 하노이": {
        photos: ["/images/hanoi/info/accommodations/capella-hanoi.jpg"],
        summary: "예술적 감각과 화려함이 극대화된 프리미엄 부티크 호텔입니다.",
        updatedAt: "2026-07-15",
        highlights: ["오페라를 테마로 한 독창적인 인테리어", "세련되고 감각적인 객실 디자인", "미식가들을 위한 수준 높은 다이닝 경험"],
        tips: ["호텔 곳곳의 예술적인 디테일을 사진으로 남기기 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "11 P. Lê Phụng Hiểu, French Quarter, Hoàn Kiếm, Hà Nội 100000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4955562142576190172", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%A0%EB%9D%BC+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "페리도 그랜드 럭셔리 부티크 호텔": {
        photos: ["/images/hanoi/info/accommodations/peridot-grand-luxury-boutique-hotel-hanoi.jpg"],
        summary: "올드쿼터 중심에서 즐기는 가성비 높은 럭셔리 호캉스 명소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["루프탑 수영장에서 즐기는 환상적인 시티뷰", "현대적이고 깔끔한 객실 컨디션", "친절하고 세심한 서비스"],
        tips: ["해 질 녘 루프탑 바에서 칵테일 한 잔을 추천합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "33 Duong Thanh Street, Old Quarter Hanoi City Hanoi City, 33 P. Đường Thành, Phố cổ Hà Nội, Hoàn Kiếm, Hà Nội 100000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.booking.com/hotel/vn/peridot-grand-amp-spa-by-aira-hoan-kiem1.en-gb.html?aid=7955654", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17317549152520918695", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%98%EB%A6%AC%EB%8F%84+%EA%B7%B8%EB%9E%9C%EB%93%9C+%EB%9F%AD%EC%85%94%EB%A6%AC+%EB%B6%80%ED%8B%B0%ED%81%AC+%ED%98%B8%ED%85%94+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라 시에스타 클래식 마마이": {
        photos: ["/images/hanoi/info/accommodations/la-siesta-classic-ma-may-hanoi.jpg"],
        summary: "올드쿼터 중심에서 만나는 친절한 서비스와 깔끔한 객실.",
        updatedAt: "2026-07-15",
        highlights: ["하노이 주요 관광지 도보 이동 가능", "세련되고 모던한 인테리어", "친절한 직원들의 맞춤형 서비스"],
        tips: ["조식 평이 좋으니 꼭 포함해서 예약하세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "94 Mã Mây, Phố cổ Hà Nội, Hoàn Kiếm, Hà Nội, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://lasiestahotels.vn/mamay/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14158725080454958999", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC+%EC%8B%9C%EC%97%90%EC%8A%A4%ED%83%80+%ED%81%B4%EB%9E%98%EC%8B%9D+%EB%A7%88%EB%A7%88%EC%9D%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "애프리콧 호텔 하노이": {
        photos: ["/images/hanoi/info/accommodations/apricot-hotel-hanoi.jpg"],
        summary: "호안끼엠 호수 근처에서 즐기는 클래식하고 우아한 휴식.",
        updatedAt: "2026-07-15",
        highlights: ["호안끼엠 호수 인근의 편리한 위치", "고풍스러운 분위기의 호텔 디자인", "멋진 전망을 자랑하는 루프탑"],
        tips: ["루프탑 바에서 야경과 함께 칵테일 한잔 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "136 P. Hàng Trống, Hoàn Kiếm, Hà Nội, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.apricothotels.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15823939548609927254", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%A0%ED%94%84%EB%A6%AC%EC%BD%A7+%ED%98%B8%ED%85%94+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "인터컨티넨탈 하노이 웨스트레이크": {
        photos: ["/images/hanoi/info/accommodations/intercontinental-hanoi-westlake.jpg"],
        summary: "서호의 평온함을 그대로 느낄 수 있는 럭셔리 호캉스 명소.",
        updatedAt: "2026-07-15",
        highlights: ["환상적인 서호(West Lake) 전망", "도심 속 프라이빗한 휴양 분위기", "최고급 시설과 품격 있는 서비스"],
        tips: ["조용한 호캉스를 원하는 분들께 강력 추천합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "05 P. Từ Hoa, Tây Hồ, Hà Nội 100000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4050247584228206957", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B8%ED%84%B0%EC%BB%A8%ED%8B%B0%EB%84%A8%ED%83%88+%ED%95%98%EB%85%B8%EC%9D%B4+%EC%9B%A8%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%ED%81%AC+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "롯데 호텔 하노이": {
        photos: ["/images/hanoi/info/accommodations/lotte-hotel-hanoi.jpg"],
        summary: "하노이 주요 숙소",
        updatedAt: "2026-07-15",
        highlights: ["하노이 주요 숙소", "평점 4.7", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "54 P. Liễu Giai, Ba Đình, Hà Nội 100000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.lottehotel.com/hanoi-hotel/en", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12253095378882731130", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%AF%EB%8D%B0+%ED%98%B8%ED%85%94+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "JW 메리어트 호텔 하노이": {
        photos: ["/images/hanoi/info/accommodations/jw-marriott-hotel-hanoi.jpg"],
        summary: "하노이 주요 숙소",
        updatedAt: "2026-07-15",
        highlights: ["하노이 주요 숙소", "평점 4.7", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No 8 Do Duc Duc Road Tu Liem Ward, Từ Liêm, Hà Nội 100000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/hanjw-jw-marriott-hotel-hanoi/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=484649615699532128", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=JW+%EB%A9%94%EB%A6%AC%EC%96%B4%ED%8A%B8+%ED%98%B8%ED%85%94+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "팬 퍼시픽 하노이": {
        photos: ["/images/hanoi/info/accommodations/pan-pacific-hanoi.jpg"],
        summary: "하노이 주요 숙소",
        updatedAt: "2026-07-15",
        highlights: ["하노이 주요 숙소", "평점 4.5", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1 Thanh Niên, Road, Ba Đình, Hà Nội 100000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.panpacific.com/en/hotels-and-resorts/pp-hanoi.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2809720783138814725", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%AC+%ED%8D%BC%EC%8B%9C%ED%94%BD+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "디 오리엔탈 제이드 호텔": {
        photos: ["/images/hanoi/info/accommodations/the-oriental-jade-hotel-hanoi.jpg"],
        summary: "하노이 주요 숙소",
        updatedAt: "2026-07-15",
        highlights: ["하노이 주요 숙소", "평점 4.9", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "92-94 P. Hàng Trống, Hoàn Kiếm, Hà Nội, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://theorientaljadehotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2466464506760787251", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94+%EC%98%A4%EB%A6%AC%EC%97%94%ED%83%88+%EC%A0%9C%EC%9D%B4%EB%93%9C+%ED%98%B8%ED%85%94+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하노이 티란트 호텔": {
        photos: ["/images/hanoi/info/accommodations/hanoi-tirant-hotel.jpg"],
        summary: "하노이 주요 숙소",
        updatedAt: "2026-07-15",
        highlights: ["하노이 주요 숙소", "평점 4.6", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "38 P. Gia Ngư, Phố cổ Hà Nội, Hoàn Kiếm, Hà Nội, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.tiranthotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12013051708373212204", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%85%B8%EC%9D%B4+%ED%8B%B0%EB%9E%80%ED%8A%B8+%ED%98%B8%ED%85%94+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "실크 패스 호텔 하노이": {
        photos: ["/images/hanoi/info/accommodations/silk-path-hotel-hanoi.jpg"],
        summary: "하노이 주요 숙소",
        updatedAt: "2026-07-15",
        highlights: ["하노이 주요 숙소", "평점 4.7", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "21 P. Hàng Khay, Cửa Nam, Hà Nội, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://silkpathhotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7648943008216446718", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A4%ED%81%AC+%ED%8C%A8%EC%8A%A4+%ED%98%B8%ED%85%94+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "뫼벤픽 호텔 하노이 센터": {
        photos: ["/images/hanoi/info/accommodations/movenpick-hotel-hanoi-centre.jpg"],
        summary: "하노이 중심가에서 즐기는 품격 있는 휴식",
        updatedAt: "2026-07-15",
        highlights: ["야외 수영장과 스파 시설 완비", "깔끔하고 현대적인 객실 컨디션"],
        tips: ["조식이 맛있기로 유명하니 꼭 포함해서 예약하세요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "83A Lý Thường Kiệt, Cửa Nam, Hà Nội 100000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://movenpick.accor.com/en/asia/vietnam/hanoi/hotel-hanoi.html?merchantid=seo-maps-VN-B4G6&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&utm_content=Hanoi", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10851151326083447938", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AB%BC%EB%B2%A4%ED%94%BD+%ED%98%B8%ED%85%94+%ED%95%98%EB%85%B8%EC%9D%B4+%EC%84%BC%ED%84%B0+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그랜드 호텔 뒤 락 하노이": {
        photos: ["/images/hanoi/info/accommodations/grand-hotel-du-lac-hanoi.jpg"],
        summary: "호안끼엠 호수 근처의 럭셔리하고 감각적인 스테이",
        updatedAt: "2026-07-15",
        highlights: ["호안끼em 호수 인근의 환상적인 위치", "세련된 인테리어와 고급스러운 분위기"],
        tips: ["루프탑 바에서 보는 야경을 추천해요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "35 P. Hàng Trống, Phường, Hoàn Kiếm, Hà Nội, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://hoteldulachanoi.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15468439915269989584", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%9C%EB%93%9C+%ED%98%B8%ED%85%94+%EB%92%A4+%EB%9D%BD+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 드 로페라 하노이": {
        photos: ["/images/hanoi/info/accommodations/hotel-de-l-opera-hanoi.jpg"],
        summary: "클래식한 매력이 가득한 예술적인 분위기의 호텔",
        updatedAt: "2026-07-15",
        highlights: ["오페라 하우스 인근의 고풍스러운 디자인", "프렌치 감성이 느껴지는 객실"],
        tips: ["호텔 내부 곳곳이 포토존이라 사진 찍기 좋아요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "29 Tràng Tiền, Cửa Nam, Hà Nội 010000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://hoteldelopera.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7128612979145147297", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%93%9C+%EB%A1%9C%ED%8E%98%EB%9D%BC+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
