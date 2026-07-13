import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "JR 타워 호텔 닛코 삿포로": {
        photos: ["/images/sapporo/info/accommodations/jr-tower-hotel-nikko-sapporo.jpg"],
        summary: "삿포로역 직결과 고층 전망, 온천 시설이 강점인 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["삿포로역 직결과 고층 전망, 온천 시설이 강점인 호텔입니다.", "평점 4.5", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-5番地 Kita 5 Jōnishi, Chuo Ward, Sapporo, Hokkaido 060-0005 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.jrhotels.co.jp/tower/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12841292389571272202", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=JR+%ED%83%80%EC%9B%8C+%ED%98%B8%ED%85%94+%EB%8B%9B%EC%BD%94+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 그랜드 호텔": {
        photos: ["/images/sapporo/info/accommodations/sapporo-grand-hotel.jpg"],
        summary: "오도리와 삿포로역 사이의 클래식한 대표 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["오도리와 삿포로역 사이의 클래식한 대표 호텔입니다.", "평점 4.2", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "일본 〒060-0001 홋카이도 삿포로시 주오구 기타 1 조니시 4 조메", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.grand1934.com/?utm_source=google&utm_medium=maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8925788322469674582", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%EA%B7%B8%EB%9E%9C%EB%93%9C+%ED%98%B8%ED%85%94+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "게이오 플라자 호텔 삿포로": {
        photos: ["/images/sapporo/info/accommodations/keio-plaza-hotel-sapporo.jpg"],
        summary: "삿포로역 도보권의 안정적인 대형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["삿포로역 도보권의 안정적인 대형 호텔입니다.", "평점 4.2", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "7-chōme-２番地１ Kita 5 Jōnishi, Chuo Ward, Sapporo, Hokkaido 060-0005 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.keioplaza-sapporo.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5681110938072784523", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B2%8C%EC%9D%B4%EC%98%A4+%ED%94%8C%EB%9D%BC%EC%9E%90+%ED%98%B8%ED%85%94+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크로스 호텔 삿포로": {
        photos: ["/images/sapporo/info/accommodations/cross-hotel-sapporo.jpg"],
        summary: "삿포로역·오도리 사이 위치와 대욕장이 장점인 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["삿포로역·오도리 사이 위치와 대욕장이 장점인 호텔입니다.", "평점 4.3", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-23 Kita 2 Jōnishi, Chuo Ward, Sapporo, Hokkaido 060-0002 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.crosshotel.com/sapporo/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3012066955190922641", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A1%9C%EC%8A%A4+%ED%98%B8%ED%85%94+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 몬토레 에델호프 삿포로": {
        photos: ["/images/sapporo/info/accommodations/hotel-monterey-edelhof-sapporo.jpg"],
        summary: "유럽풍 인테리어와 스파 시설이 있는 도심 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["유럽풍 인테리어와 스파 시설이 있는 도심 호텔입니다.", "평점 4", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "일본 〒060-0002 北海道札幌市中央区北２条西１丁目１", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.hotelmonterey.co.jp/edelhof/?utm_source=google&utm_medium=mybusiness&utm_campaign=website_monedl", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15962390469759463657", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%AA%AC%ED%86%A0%EB%A0%88+%EC%97%90%EB%8D%B8%ED%98%B8%ED%94%84+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미쓰이 가든 호텔 삿포로 웨스트": {
        photos: ["/images/sapporo/info/accommodations/mitsui-garden-hotel-sapporo-west.jpg"],
        summary: "삿포로역 도보권과 깔끔한 객실 컨디션이 장점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["삿포로역 도보권과 깔끔한 객실 컨디션이 장점입니다.", "평점 4.4", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "6-chōme-2-4 Kita 5 Jōnishi, Chuo Ward, Sapporo, Hokkaido 060-0005 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.gardenhotels.co.jp/sapporo-west/?utm_source=googlebusinessprofile&utm_medium=google&utm_campaign=maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2326600095907970643", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%93%B0%EC%9D%B4+%EA%B0%80%EB%93%A0+%ED%98%B8%ED%85%94+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%9B%A8%EC%8A%A4%ED%8A%B8+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 포르자 삿포로 스테이션": {
        photos: ["/images/sapporo/info/accommodations/hotel-forza-sapporo-station.jpg"],
        summary: "삿포로역과 오도리 사이라 이동하기 정말 편한 가성비 숙소예요.",
        updatedAt: "2026-07-13",
        highlights: ["삿포로역-오도리 접근성 최고", "깔끔하고 실속 있는 객실 컨디션"],
        tips: ["주변에 맛집이 많아 저녁 식사 해결하기 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "일본 〒060-0003 Hokkaido, Sapporo, Chuo Ward, Kita 3 Jōnishi, 2-chōme−１−１", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3356961039926154839", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%ED%8F%AC%EB%A5%B4%EC%9E%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "솔라리아 니시테츠 호텔 삿포로": {
        photos: ["/images/sapporo/info/accommodations/solaria-nishitetsu-hotel-sapporo.jpg"],
        summary: "삿포로역과 도청 근처의 깔끔하고 세련된 신상급 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쾌적한 최신 시설", "주요 관광지 이동 동선 최적화"],
        tips: ["새 건물이라 깨끗한 숙소를 찾는 분들께 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "5-chōme-1番2 Kita 4 Jōnishi, Chuo Ward, Sapporo, Hokkaido 060-0004 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://nnr-h.com/solaria/sapporo/?utm_source=google&utm_medium=google_map&utm_campaign=02", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7172379445626926623", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%94%EB%9D%BC%EB%A6%AC%EC%95%84+%EB%8B%88%EC%8B%9C%ED%85%8C%EC%B8%A0+%ED%98%B8%ED%85%94+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 그레이서리 삿포로": {
        photos: ["/images/sapporo/info/accommodations/hotel-gracery-sapporo.jpg"],
        summary: "삿포로역 바로 앞이라 기차나 지하철 이용하기 최적인 위치예요.",
        updatedAt: "2026-07-13",
        highlights: ["역세권의 압도적인 편리함", "이동 동선 최소화 가능"],
        tips: ["역 근처라 체크인 전후로 짐 맡기기에 아주 편해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "4-chōme-1-8 Kita 4 Jōnishi, Chuo Ward, Sapporo, Hokkaido 060-0004 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://gracery.com/sapporo/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3635295002554165499", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%84%9C%EB%A6%AC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "도큐스테이 삿포로 오도리": {
        photos: ["/images/sapporo/info/accommodations/tokyu-stay-sapporo-odori.jpg"],
        summary: "객실 내 세탁기가 있어 장기 여행이나 빨래 걱정 없는 실용적인 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["객실 내 세탁기 구비", "오도리·스스키노 접근성 우수"],
        tips: ["장기 숙박 시 빨래 해결에 매우 유용해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "5-chōme-26-2 Minami 2 Jōnishi, Chuo Ward, Sapporo, Hokkaido 060-0062 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.tokyustay.co.jp/hotel/SPO/?utm_source=google&utm_medium=gbp&utm_campaign=sapporo_odori", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3859489369334427451", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%ED%81%90%EC%8A%A4%ED%85%8C%EC%9D%B4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%98%A4%EB%8F%84%EB%A6%AC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카라쿠사 호텔 삿포로": {
        photos: ["/images/sapporo/info/accommodations/karaksa-hotel-sapporo.jpg"],
        summary: "다누키코지와 스스키노가 가까워 쇼핑과 먹거리를 즐기기에 최적화된 가족형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다누키코지 인접", "쇼핑 및 맛집 탐방에 유리한 위치"],
        tips: ["아이와 함께하는 가족 여행객에게 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "5-chōme-24 Minami 3 Jōnishi, Chuo Ward, Sapporo, Hokkaido 060-0063 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://karaksahotels.com/sapporo/?utm_source=google&utm_medium=google_map&utm_campaign=sapporo", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17225000830785809208", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%9D%BC%EC%BF%A0%EC%82%AC+%ED%98%B8%ED%85%94+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 로열 파크 캔버스 삿포로 오도리 파크": {
        photos: ["/images/sapporo/info/accommodations/the-royal-park-canvas-sapporo-odori-park.jpg"],
        summary: "오도리 공원 바로 앞, 감각적인 디자인과 루프톱을 즐길 수 있는 뷰 맛집 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["오도리 공원 조망", "감각적인 인테리어와 루프톱"],
        tips: ["루프톱에서 공원 뷰를 보며 여유를 즐겨보세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1-chōme-12 Ōdōrinishi, Chuo Ward, Sapporo, Hokkaido 060-0042 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.royalparkhotels.co.jp/canvas/sapporoodoripark/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2311088753873721157", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%A1%9C%EC%97%B4+%ED%8C%8C%ED%81%AC+%EC%BA%94%EB%B2%84%EC%8A%A4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%98%A4%EB%8F%84%EB%A6%AC+%ED%8C%8C%ED%81%AC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "머큐어 호텔 삿포로": {
        photos: ["/images/sapporo/info/accommodations/mercure-hotel-sapporo.jpg"],
        summary: "스스키노·다누키코지 접근성이 좋은 위치형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스스키노·다누키코지 접근성이 좋은 위치형 호텔입니다.", "평점 4.2", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "일본 〒064-0804 Hokkaido, Sapporo, Chuo Ward, Minami 4 Jōnishi, 2-chōme, 2-4 Minami 4-Jo Nishi 2-Chome Chuo-Ku", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=7023&merchantid=seo-maps-JP-7023&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11632358192952232991", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A8%B8%ED%81%90%EC%96%B4+%ED%98%B8%ED%85%94+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "퀸테사 호텔 삿포로 스스키노": {
        photos: ["/images/sapporo/info/accommodations/quintessa-hotel-sapporo-susukino.jpg"],
        summary: "스스키노 중심부 접근이 편한 합리적 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스스키노 중심부 접근이 편한 합리적 호텔입니다.", "평점 4.1", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "일본 〒064-0808 홋카이도 삿포로시 주오구 미나미 8 조니시 5 조메", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://quintessahotels.com/sapporo/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16692445258017775085", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%80%B8%ED%85%8C%EC%82%AC+%ED%98%B8%ED%85%94+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%8A%A4%EC%8A%A4%ED%82%A4%EB%85%B8+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "베셀 호텔 캄파나 스스키노": {
        photos: ["/images/sapporo/info/accommodations/vessel-hotel-campana-susukino-sapporo.jpg"],
        summary: "대욕장과 스스키노 접근성이 좋은 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["대욕장과 스스키노 접근성이 좋은 호텔입니다.", "평점 4.5", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "6-chōme-16番地1 Minami 5 Jōnishi, Chuo Ward, Sapporo, Hokkaido 064-0805 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.vessel-hotel.jp/campana/susukino/?utm_source=google&utm_medium=gbp&utm_campaign=campana_susukino", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16498071872327052572", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%EC%85%80+%ED%98%B8%ED%85%94+%EC%BA%84%ED%8C%8C%EB%82%98+%EC%8A%A4%EC%8A%A4%ED%82%A4%EB%85%B8+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 마이스테이스 프리미어 삿포로 파크": {
        photos: ["/images/sapporo/info/accommodations/hotel-mystays-premier-sapporo-park.jpg"],
        summary: "나카지마 공원 근처에서 대욕장 온천을 즐기기 좋은 대형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["공원 인근의 편리한 위치", "피로를 풀 수 있는 대욕장 시설"],
        tips: ["공원 산책 후 온천으로 하루를 마무리하기 딱 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-2-10 Minami 9 Jōnishi, Chuo Ward, Sapporo, Hokkaido 064-0809 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://iconia.co.jp/hotel-mystays-premier-sapporo-park-hokkaido/?utm_source=google&utm_medium=GBP&utm_campaign=MSPSapporoPark", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15575116323051841806", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%A7%88%EC%9D%B4%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%8A%A4+%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%8C%8C%ED%81%AC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "프리미어 호텔 나카지마공원 삿포로": {
        photos: ["/images/sapporo/info/accommodations/premier-hotel-nakajima-park-sapporo.jpg"],
        summary: "나카지마 공원의 탁 트인 전망과 함께 조용한 휴식을 원하는 분들께 추천합니다.",
        updatedAt: "2026-07-13",
        highlights: ["아름다운 공원 뷰", "차분하고 정적인 숙박 환경"],
        tips: ["공원 전망 객실을 예약하면 더욱 여유로운 아침을 맞이할 수 있어요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "6-chōme-1-21 Minami 10 Jōnishi, Chuo Ward, Sapporo, Hokkaido 064-8561 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://premier.kenhotels.com/nakajimapark/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5750648329409916168", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4+%ED%98%B8%ED%85%94+%EB%82%98%EC%B9%B4%EC%A7%80%EB%A7%88%EA%B3%B5%EC%9B%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 프린스 호텔": {
        photos: ["/images/sapporo/info/accommodations/sapporo-prince-hotel.jpg"],
        summary: "독특한 원형 타워 구조와 온천 시설을 갖춘 규모 있는 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["랜드마크 같은 원형 타워 외관", "쾌적한 온천 시설"],
        tips: ["호텔 내 온천에서 여행의 피로를 풀기 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "일본 〒060-8615 홋카이도 삿포로시 주오구 미나미 2 조니시 11 조메", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.princehotels.co.jp/sapporo/?utm_source=gbp&utm_medium=organic&utm_campaign=sapporo_prince_hotel", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1714590544399136141", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%94%84%EB%A6%B0%EC%8A%A4+%ED%98%B8%ED%85%94+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "OMO3 삿포로 스스키노 by 호시노 리조트": {
        photos: ["/images/sapporo/info/accommodations/omo3-sapporo-susukino-by-hoshino-resorts.jpg"],
        summary: "스스키노 먹거리 동선에 특화된 캐주얼 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스스키노 먹거리 동선에 특화된 캐주얼 호텔입니다.", "평점 4.1", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "6-chōme-14-1 Minami 5 Jōnishi, Chuo Ward, Sapporo, Hokkaido 064-0805 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://hoshinoresorts.com/ja/hotels/omo3sapporosusukino/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2150417984603201993", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=OMO3+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%8A%A4%EC%8A%A4%ED%82%A4%EB%85%B8+by+%ED%98%B8%EC%8B%9C%EB%85%B8+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "온센 료칸 유엔 삿포로": {
        photos: ["/images/sapporo/info/accommodations/onsen-ryokan-yuen-sapporo.jpg"],
        summary: "도심에서 료칸 감성과 온천 분위기를 즐기기 좋은 숙소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["도심에서 료칸 감성과 온천 분위기를 즐기기 좋은 숙소입니다.", "평점 4.3", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "일본 〒060-0001 北海道札幌市中央区北１条西７丁目６", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.uds-hotels.com/yuen/sapporo/?utm_source=google&utm_medium=maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8083143377834193961", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A8%EC%84%BC+%EB%A3%8C%EC%B9%B8+%EC%9C%A0%EC%97%94+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
