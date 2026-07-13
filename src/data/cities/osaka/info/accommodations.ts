import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "콘래드 오사카": {
        photos: ["/images/osaka/info/accommodations/conrad-osaka.jpg"],
        summary: "나카노시마의 환상적인 고층 전망과 럭셔리한 서비스를 만끽할 수 있는 곳입니다.",
        updatedAt: "2026-07-13",
        highlights: ["탁 트인 시티뷰", "프리미엄 서비스"],
        tips: ["고층 객실 배정을 요청해 오사카 전경을 감상해 보세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-chōme-2-4 Nakanoshima, Kita Ward, Osaka, 530-0005 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.hilton.com/en/hotels/osacici-conrad-osaka/?SEO_id=GMB-APAC-CI-OSACICI", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10561270487337634692", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%98%EB%9E%98%EB%93%9C+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "W 오사카": {
        photos: ["/images/osaka/info/accommodations/w-osaka.jpg"],
        summary: "신사이바시 쇼핑가와 가까워 이동이 편리하고 디자인이 감각적인 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["트렌디한 인테리어", "최적의 쇼핑 동선"],
        tips: ["힙한 분위기를 선호하는 여행자에게 강력 추천합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "4-chōme-1-3 Minamisenba, Chuo Ward, Osaka, 542-0081 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/osaow-w-osaka/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2705746213831136029", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=W+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리츠칼튼 오사카": {
        photos: ["/images/osaka/info/accommodations/the-ritz-carlton-osaka.png"],
        summary: "우메다 권역의 클래식 럭셔리 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["우메다 권역의 클래식 럭셔리 호텔입니다.", "평점 4.4", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-5-25 Umeda, Kita Ward, Osaka, 530-0001 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.ritzcarlton.com/en/hotels/osarz-the-ritz-carlton-osaka/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12999871427497016376", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%B8%A0%EC%B9%BC%ED%8A%BC+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "세인트 레지스 오사카": {
        photos: ["/images/osaka/info/accommodations/st-regis-osaka.jpg"],
        summary: "혼마치 중심에 위치해 난바와 우메다 양쪽으로 이동하기 좋은 고급 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["품격 있는 서비스", "난바·우메다 접근성 균형"],
        tips: ["주변이 비즈니스 지구라 밤에는 조용합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-chōme-6-12 Honmachi, Chuo Ward, Osaka, 541-0053 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/osaxr-the-st-regis-osaka/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3729737124090172523", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%B8%EC%9D%B8%ED%8A%B8+%EB%A0%88%EC%A7%80%EC%8A%A4+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "인터컨티넨탈 오사카": {
        photos: ["/images/osaka/info/accommodations/intercontinental-hotel-osaka.jpg"],
        summary: "그랜드 프론트와 연결되어 쇼핑과 미식을 즐기기 최적인 우메다 럭셔리 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["그랜드 프론트 직결", "우메다 대표 럭셔리 숙소"],
        tips: ["쇼핑몰이 바로 옆이라 비 오는 날에도 이동이 편해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-3-60 Ōfukachō, Kita Ward, Osaka, 530-0011 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18311635378805131458", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B8%ED%84%B0%EC%BB%A8%ED%8B%B0%EB%84%A8%ED%83%88+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 한큐 레스파이어 오사카": {
        photos: ["/images/osaka/info/accommodations/hotel-hankyu-respire-osaka.jpg"],
        summary: "우메다역과 쇼핑몰 접근성이 압도적으로 좋아 여행객에게 편리한 대형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["우메다역 초근접", "쇼핑몰 연결로 극대화된 편의성"],
        tips: ["쇼핑 후 짐을 바로 두러 오기 정말 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1-1 Ōfukachō, Kita Ward, Osaka, 530-0011 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.hankyu-hotel.com/hotel/respire/osaka?utm_source=googlemybusiness&utm_medium=organic", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4548582871689473998", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%ED%95%9C%ED%81%90+%EB%A0%88%EC%8A%A4%ED%8C%8C%EC%9D%B4%EC%96%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 그란비아 오사카": {
        photos: ["/images/osaka/info/accommodations/hotel-granvia-osaka.jpg"],
        summary: "JR 오사카역과 바로 연결되어 이동이 정말 편리한 교통 최적화 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["오사카역 직결로 비 오는 날에도 걱정 없는 동선", "교통의 중심지라 근교 여행 가기 최고"],
        tips: ["신칸센이나 JR 이용 계획이 있다면 무조건 여기 추천"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-chōme-1-1 Umeda, Kita Ward, Osaka, 530-0001 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.granvia-osaka.jp/?utm_source=google&utm_medium=my_business&utm_campaign=hgo", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6804507185547097229", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EA%B7%B8%EB%9E%80%EB%B9%84%EC%95%84+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스위소텔 난카이 오사카": {
        photos: ["/images/osaka/info/accommodations/swissotel-nankai-osaka.jpg"],
        summary: "난바역과 직결되어 공항 이동과 시내 관광 모두 잡은 완벽한 위치의 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["난카이 난바역 바로 위라 라피트 이용이 매우 편리함", "도톤보리 등 주요 명소 도보 이동 가능"],
        tips: ["공항철도 이용객이나 난바 중심가 숙소를 찾는 분들께 강추"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "5-chōme-1-60 Namba, Chuo Ward, Osaka, 542-0076 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.swissotel.com/hotels/nankai-osaka/?goto=fiche_hotel&code_hotel=A5C3&merchantid=seo-maps-JP-A5C3&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5181044893444391229", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%9C%84%EC%86%8C%ED%85%94+%EB%82%9C%EC%B9%B4%EC%9D%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "센타라 그랜드 호텔 오사카": {
        photos: ["/images/osaka/info/accommodations/centara-grand-hotel-osaka.jpg"],
        summary: "난바 파크스 인근의 신상급 고층 호텔로 쾌적한 투숙이 가능합니다.",
        updatedAt: "2026-07-13",
        highlights: ["최신 시설을 갖춘 깔끔하고 고급스러운 분위기", "고층 객실에서 즐기는 탁 트인 시티뷰"],
        tips: ["쇼핑과 미식을 동시에 즐기고 싶다면 난바 파크스 근처 이 호텔이 딱이에요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-11-50 Nanbanaka, Naniwa Ward, Osaka, 556-0011 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.centarahotelsresorts.com/centaragrand/ja/cgoj", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10782925308206196076", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%BC%ED%83%80%EB%9D%BC+%EA%B7%B8%EB%9E%9C%EB%93%9C+%ED%98%B8%ED%85%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크로스 호텔 오사카": {
        photos: ["/images/osaka/info/accommodations/cross-hotel-osaka.jpg"],
        summary: "도톤보리와 신사이바시를 내 집 앞마당처럼 누릴 수 있는 최고의 위치!",
        updatedAt: "2026-07-13",
        highlights: ["도톤보리·신사이바시 도보 이동 가능", "쇼핑과 먹거리 접근성 최상"],
        tips: ["주변에 맛집이 정말 많으니 밤늦게까지 즐기기 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-5-15 Shinsaibashisuji, Chuo Ward, Osaka, 542-0085 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://cross-osaka.orixhotelsandresorts.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14281617034206022174", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A1%9C%EC%8A%A4+%ED%98%B8%ED%85%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 로열 클래식 오사카": {
        photos: ["/images/osaka/info/accommodations/hotel-royal-classic-osaka.jpg"],
        summary: "난바 중심가에서 쇼핑과 미식을 한 번에 해결하고 싶은 분들께 추천해요.",
        updatedAt: "2026-07-13",
        highlights: ["난바 중심부의 편리한 위치", "쇼핑 및 식사 동선 최적화"],
        tips: ["주변 맛집 탐방하기 딱 좋은 위치라 이동 시간을 아낄 수 있어요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "4-chōme-3-3 Namba, Chuo Ward, Osaka, 542-0076 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://hotel-royalclassic.jp/?utm_source=google&utm_medium=maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7035889087340362549", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%A1%9C%EC%97%B4+%ED%81%B4%EB%9E%98%EC%8B%9D+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시타딘 난바 오사카": {
        photos: ["/images/osaka/info/accommodations/citadines-namba-osaka.jpg"],
        summary: "가족 여행이나 장기 숙박에 딱인 넓고 쾌적한 레지던스형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["가족·장기 투숙객에게 최적화된 공간", "취사 가능한 레지던스 스타일"],
        tips: ["아이와 함께하거나 짐이 많은 여행자라면 이곳을 강력 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-chōme-5-25 Nipponbashi, Naniwa Ward, Osaka, 556-0005 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2884774261130713554", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%83%80%EB%94%98+%EB%82%9C%EB%B0%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 라이블리 오사카 혼마치": {
        photos: ["/images/osaka/info/accommodations/the-lively-osaka-honmachi.jpg"],
        summary: "감각적인 인테리어와 트렌디한 무드가 돋보이는 혼마치의 스타일리시 호텔",
        updatedAt: "2026-07-13",
        highlights: ["세련된 디자인의 객실", "혼마치 중심가의 편리한 접근성"],
        tips: ["호텔 내 라운지에서 여유로운 시간을 보내기 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1-chōme-5-11 Minamihonmachi, Chuo Ward, Osaka, 541-0054 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.livelyhotels.com/thelivelyosaka/?utm_source=google&utm_medium=gmb&utm_campaign=gmb", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15782742866602751444", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%9D%BC%EC%9D%B4%EB%B8%94%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%98%BC%EB%A7%88%EC%B9%98+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "목시 오사카 혼마치": {
        photos: ["/images/osaka/info/accommodations/moxy-osaka-honmachi.jpg"],
        summary: "젊고 활기찬 에너지가 넘치는 캐주얼한 분위기의 메리어트 호텔",
        updatedAt: "2026-07-13",
        highlights: ["힙한 감성의 로비와 라운지", "가성비 좋은 깔끔한 객실"],
        tips: ["체크인 시 제공되는 웰컴 드링크를 놓치지 마세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-2-9 Kawaramachi, Chuo Ward, Osaka, 541-0048 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/osaox-moxy-osaka-honmachi/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9211338134798723413", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A9%EC%8B%9C+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%98%BC%EB%A7%88%EC%B9%98+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "OMO7 오사카 바이 호시노 리조트": {
        photos: ["/images/osaka/info/accommodations/omo7-osaka-by-hoshino-resorts.jpg"],
        summary: "신세카이의 로컬 매력을 만끽할 수 있는 호시노 리조트의 체험형 호텔",
        updatedAt: "2026-07-13",
        highlights: ["신세카이 맛집 탐방에 최적화된 위치", "로컬 테마가 담긴 특별한 서비스"],
        tips: ["호텔에서 운영하는 로컬 투어 프로그램을 꼭 이용해 보세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-chōme-16-30 Ebisunishi, Naniwa Ward, Osaka, 556-0003 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://hoshinoresorts.com/ja/hotels/omo7osaka/?utm_source=hr_google&utm_medium=mybusiness", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10904178204825139386", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=OMO7+%EC%98%A4%EC%82%AC%EC%B9%B4+%EB%B0%94%EC%9D%B4+%ED%98%B8%EC%8B%9C%EB%85%B8+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 유니버설 포트": {
        photos: ["/images/osaka/info/accommodations/hotel-universal-port-osaka.jpg"],
        summary: "USJ 가기 딱 좋은 유니버셜 시티 권역 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["USJ 접근성 최고", "테마파크 분위기 만끽"],
        tips: ["가족 여행객에게 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Hotel Universal Port, 1-chōme-1-111 Sakurajima, Konohana Ward, Osaka, 554-0031 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://universalport.orixhotelsandresorts.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15398724847078069765", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EC%9C%A0%EB%8B%88%EB%B2%84%EC%84%A4+%ED%8F%AC%ED%8A%B8+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 파크 프론트 호텔 앳 USJ": {
        photos: ["/images/osaka/info/accommodations/the-park-front-hotel-at-universal-studios-japan-osaka.png"],
        summary: "USJ 입구 바로 앞이라 접근성이 압도적인 공식 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["파크 입구 초근접", "공식 지정 호텔의 편리함"],
        tips: ["오픈런 계획 중이라면 최고의 선택이에요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "6-chōme-2-52 Shimaya, Konohana Ward, Osaka, 554-0024 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://parkfront-hotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13724326979961057332", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%8C%8C%ED%81%AC+%ED%94%84%EB%A1%A0%ED%8A%B8+%ED%98%B8%ED%85%94+%EC%95%B3+USJ+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리베르 호텔 오사카": {
        photos: ["/images/osaka/info/accommodations/liber-hotel-osaka.jpg"],
        summary: "온천 시설이 있어 여행 피로를 풀기 좋은 베이 에어리어 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["온천 이용 가능", "넓은 객실과 대형 규모"],
        tips: ["USJ 방문 후 온천으로 힐링하세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1-chōme-1-35 Sakurajima, Konohana Ward, Osaka, 554-0031 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.hotel-liber.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15910772696149825880", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EB%B2%A0%EB%A5%B4+%ED%98%B8%ED%85%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미마루 오사카 난바 노스": {
        photos: ["/images/osaka/info/accommodations/mimaru-osaka-namba-north.jpg"],
        summary: "가족이나 친구들과 함께 머물기 좋은 넓고 쾌적한 아파트형 숙소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["취사 시설을 갖춘 넓은 객실", "가족 단위 여행객에게 최적화된 공간"],
        tips: ["주변에 맛집과 쇼핑몰이 많아 편리해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1-chōme-2-10 Minamihorie, Nishi Ward, Osaka, 550-0015 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://mimaruhotels.com/hotel/namba-north/?utm_source=google&utm_medium=map&utm_campaign=nambanorth_2511_gbp", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10110503516046307181", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EB%A7%88%EB%A3%A8+%EC%98%A4%EC%82%AC%EC%B9%B4+%EB%82%9C%EB%B0%94+%EB%85%B8%EC%8A%A4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "프레이저 레지던스 난카이 오사카": {
        photos: ["/images/osaka/info/accommodations/fraser-residence-nankai-osaka.jpg"],
        summary: "난바역 인근이라 접근성이 뛰어나고 장기 숙박에도 안성맞춤인 레지던스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["난바역과 가까운 편리한 위치", "장기 투숙에 최적화된 편의 시설"],
        tips: ["집처럼 편안한 분위기를 원하는 여행객에게 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "일본 〒556-0011 Osaka, Naniwa Ward, Nanbanaka, 1-chōme−17−１１ フレイザーレジデンス南海大阪", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.frasershospitality.com/en/japan/osaka/fraser-residence-nankai-osaka/?utm_source=google_map&utm_medium=organic", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3249159869669586094", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EB%A0%88%EC%9D%B4%EC%A0%80+%EB%A0%88%EC%A7%80%EB%8D%98%EC%8A%A4+%EB%82%9C%EC%B9%B4%EC%9D%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
