import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "포시즌스 리조트 치앙마이": {
        photos: ["/images/chiang-mai/info/accommodations/four-seasons-resort-chiang-mai.jpg"],
        summary: "논밭 풍경과 럭셔리 휴식에 강점이 있는 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["논밭 풍경과 럭셔리 휴식에 강점이 있는 리조트입니다.", "평점 4.7", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "502 MOO 1, MAE RIM, OLD ROAD, ตำบล ริมใต้ อำเภอสะเมิง เชียงใหม่ 50180 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14121008795258166302", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%EC%8B%9C%EC%A6%8C%EC%8A%A4+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아난타라 치앙마이 리조트": {
        photos: ["/images/chiang-mai/info/accommodations/anantara-chiang-mai-resort.jpg"],
        summary: "강변 위치와 조용한 분위기가 좋은 고급 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["강변 위치와 조용한 분위기가 좋은 고급 리조트입니다.", "평점 4.7", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "123, 1 Charoen Prathet Rd, Tambon Chang Khlan, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50100 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13961652307617965613", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%82%9C%ED%83%80%EB%9D%BC+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "137 필라스 하우스": {
        photos: ["/images/chiang-mai/info/accommodations/137-pillars-house-chiang-mai.jpg"],
        summary: "부티크 감성과 고급 서비스가 강점인 숙소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["부티크 감성과 고급 서비스가 강점인 숙소입니다.", "평점 4.7", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2 ถนน Soi Nha Wat Kaet 1, Tambon Chang Moi, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50000 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.137pillarschiangmai.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10246224016119516412", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=137+%ED%95%84%EB%9D%BC%EC%8A%A4+%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라차만카 호텔": {
        photos: ["/images/chiang-mai/info/accommodations/rachamankha-hotel-chiang-mai.jpg"],
        summary: "올드타운 안의 조용한 란나 스타일 부티크 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["올드타운 안의 조용한 란나 스타일 부티크 호텔입니다.", "평점 4.7", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "6 Soi Ratchamanka 9 Old City Tambon Si Phum, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.rachamankha.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12263655698563947712", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%B0%A8%EB%A7%8C%EC%B9%B4+%ED%98%B8%ED%85%94+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "타마린드 빌리지": {
        photos: ["/images/chiang-mai/info/accommodations/tamarind-village-chiang-mai.jpg"],
        summary: "올드타운 중심 접근성과 전통 분위기가 장점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["올드타운 중심 접근성과 전통 분위기가 장점입니다.", "평점 4.6", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "50 Rachadamnoen Rd Soi 1 Old City Tambon Si Phum, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.tamarindvillage.com/en/index.php", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4257483731658096792", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EB%A7%88%EB%A6%B0%EB%93%9C+%EB%B9%8C%EB%A6%AC%EC%A7%80+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "르 메르디앙 치앙마이": {
        photos: ["/images/chiang-mai/info/accommodations/le-meridien-chiang-mai.jpg"],
        summary: "나이트바자 접근성이 좋은 대형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["나이트바자 접근성이 좋은 대형 호텔입니다.", "평점 4.8", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "108 Changklan Rd, Tambon Chang Moi, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50100 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/cnxmc-chiang-mai-marriott-hotel/experiences/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17973725593287623254", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A5%B4+%EB%A9%94%EB%A5%B4%EB%94%94%EC%95%99+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "멜리아 치앙마이": {
        photos: ["/images/chiang-mai/info/accommodations/melia-chiang-mai.jpg"],
        summary: "신축급 시설과 시내 접근성이 좋은 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["신축급 시설과 시내 접근성이 좋은 호텔입니다.", "평점 4.7", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "46, 48 Charoen Prathet Rd, Tambon Chang Khlan, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50100 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5599188683989233375", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%9C%EB%A6%AC%EC%95%84+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "샹그릴라 치앙마이": {
        photos: ["/images/chiang-mai/info/accommodations/shangri-la-chiang-mai.jpg"],
        summary: "가족 여행과 수영장 시설에 강점이 있는 대형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["가족 여행과 수영장 시설에 강점이 있는 대형 호텔입니다.", "평점 4.6", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "89/8 Changklan Rd, Tambon Chang Khlan, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50100 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.shangri-la.com/chiangmai/shangrila/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17530409811542980083", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%B9%EA%B7%B8%EB%A6%B4%EB%9D%BC+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "인터컨티넨탈 치앙마이 매핑": {
        photos: ["/images/chiang-mai/info/accommodations/intercontinental-chiang-mai-the-mae-ping.jpg"],
        summary: "시내 중심 접근성과 브랜드 시설을 갖춘 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["시내 중심 접근성과 브랜드 시설을 갖춘 호텔입니다.", "평점 4.6", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "153 Sridonchai Rd, Tambon Chang Khlan, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50100 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=220709171939124011", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B8%ED%84%B0%EC%BB%A8%ED%8B%B0%EB%84%A8%ED%83%88+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%EB%A7%A4%ED%95%91+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "유 님만 치앙마이": {
        photos: ["/images/chiang-mai/info/accommodations/u-nimman-chiang-mai.jpg"],
        summary: "님만 중심 위치와 쇼핑 동선이 좋은 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["님만 중심 위치와 쇼핑 동선이 좋은 호텔입니다.", "평점 4.7", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Nimmana Haeminda Rd Lane 1 Nimmanhaemin Tambon Su Thep, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.uhotelsresorts.com/unimmanchiangmai/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11987848616909887778", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%A0+%EB%8B%98%EB%A7%8C+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이스틴 탄 호텔 치앙마이": {
        photos: ["/images/chiang-mai/info/accommodations/eastin-tan-hotel-chiang-mai.jpg"],
        summary: "마야몰·님만 접근성이 좋은 실용적인 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["마야몰·님만 접근성이 좋은 실용적인 호텔입니다.", "평점 4.5", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "171 Huay Kaew Rd Nimmanhaemin Tambon Su Thep, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.eastinhotelsresidences.com/eastintanchiangmai/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1259022722655308671", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%8A%A4%ED%8B%B4+%ED%83%84+%ED%98%B8%ED%85%94+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아키라 매너 치앙마이": {
        photos: ["/images/chiang-mai/info/accommodations/akyra-manor-chiang-mai.jpg"],
        summary: "님만 지역의 디자인 부티크 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["님만 지역의 디자인 부티크 호텔입니다.", "평점 4.6", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "22/2 Nimmana Haeminda Rd Lane 9 Nimmanhaemin Tambon Su Thep, Muang Chang Wat Chiang Mai 50200 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://amanorhotels.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=402043612893039235", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%ED%82%A4%EB%9D%BC+%EB%A7%A4%EB%84%88+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아트 마이 갤러리 호텔": {
        photos: ["/images/chiang-mai/info/accommodations/art-mai-gallery-hotel-chiang-mai.jpg"],
        summary: "예술 콘셉트와 님만 접근성이 장점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["예술 콘셉트와 님만 접근성이 장점입니다.", "평점 4.7", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "21 Nimmana Haeminda Rd Lane 3 Nimmanhaemin Tambon Su Thep, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.artmaigalleryhotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12898312783306527383", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%ED%8A%B8+%EB%A7%88%EC%9D%B4+%EA%B0%A4%EB%9F%AC%EB%A6%AC+%ED%98%B8%ED%85%94+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "프라싱 빌리지": {
        photos: ["/images/chiang-mai/info/accommodations/phra-singh-village-chiang-mai.jpg"],
        summary: "올드타운 사원 동선에 좋은 부티크 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["올드타운 사원 동선에 좋은 부티크 호텔입니다.", "평점 4.7", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "5 ถนน ราชมรรคา Soi 8 Old City Tambon Si Phum, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.phrasinghvillage.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4635810339414326670", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EB%9D%BC%EC%8B%B1+%EB%B9%8C%EB%A6%AC%EC%A7%80+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "찰라 넘버 6": {
        photos: ["/images/chiang-mai/info/accommodations/chala-number-6-chiang-mai.jpg"],
        summary: "올드타운 중심부에서 걷기 좋은 위치의 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["올드타운 중심부에서 걷기 좋은 위치의 호텔입니다.", "평점 4.7", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "6 6 Prapokklao Road Old City Tambon Si Phum, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200 태국", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.chalanumber6.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9439768212676283183", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B0%B0%EB%9D%BC+%EB%84%98%EB%B2%84+6+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
