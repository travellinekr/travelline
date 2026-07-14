import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "그랜드 하얏트 다롄": {
        photos: ["/images/dalian/info/accommodations/grand-hyatt-dalian.jpg"],
        summary: "싱하이 광장과 해변 전망을 즐기기 좋은 고급 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["싱하이 광장과 해변 전망을 즐기기 좋은 고급 호텔입니다.", "평점 4.5", "다롄 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No. 33 C 3 Zone, Xinghai Square, 沙河口区大连市 LN, 중국 116023", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15417770884082497399", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%9C%EB%93%9C+%ED%95%98%EC%96%8F%ED%8A%B8+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 캐슬 호텔 다롄": {
        photos: ["/images/dalian/info/accommodations/the-castle-hotel-dalian.jpg"],
        summary: "성 형태 외관과 바다 전망으로 유명한 다롄 랜드마크 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["성 형태 외관과 바다 전망으로 유명한 다롄 랜드마크 호텔입니다.", "평점 4.5", "다롄 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "600  Bin Hai Xi Lu, Sha He Kou Qu, Da Lian Shi, Liao Ning Sheng, 중국 116023", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/hotels/travel/dlclc-the-castle-hotel-a-luxury-collection-hotel-dalian/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9469635892865956054", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%BA%90%EC%8A%AC+%ED%98%B8%ED%85%94+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "켐핀스키 호텔 다롄": {
        photos: ["/images/dalian/info/accommodations/kempinski-hotel-dalian.jpg"],
        summary: "노동공원과 도심 접근성이 좋은 클래식 고급 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["노동공원과 도심 접근성이 좋은 클래식 고급 호텔입니다.", "평점 4.2", "다롄 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "92 Jie Fang Lu, Zhong Shan Qu, Da Lian Shi, Liao Ning Sheng, 중국 116001", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1768752542857385341", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BC%90%ED%95%80%EC%8A%A4%ED%82%A4+%ED%98%B8%ED%85%94+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "샹그릴라 다롄": {
        photos: ["/images/dalian/info/accommodations/shangri-la-dalian.jpg"],
        summary: "중산구 비즈니스와 쇼핑 동선이 편리한 안정적인 대형 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["중심가 위치", "쇼핑 및 비즈니스 최적화"],
        tips: ["주변 쇼핑몰 접근성이 매우 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "66 Ren Min Lu, Zhong Shan Qu, Da Lian Shi, Liao Ning Sheng, 중국 116007", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.shangri-la.com/dalian/shangrila/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17221619921958536727", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%B9%EA%B7%B8%EB%A6%B4%EB%9D%BC+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "인터컨티넨탈 다롄": {
        photos: ["/images/dalian/info/accommodations/intercontinental-dalian.jpg"],
        summary: "우호광장과 중산광장 접근성이 뛰어난 도심 속 고급 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["우호광장 인접", "도심 관광 최적의 위치"],
        tips: ["주요 광장 산책하기에 딱이에요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "No.6 Youhao Square, Zhongshan District, 中山区大连市辽宁省 중국 116001", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10844167849462504193", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B8%ED%84%B0%EC%BB%A8%ED%8B%B0%EB%84%A8%ED%83%88+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "콘래드 다롄": {
        photos: ["/images/dalian/info/accommodations/conrad-dalian.jpg"],
        summary: "동항 비즈니스 지구와 해안 산책로를 즐기기 좋은 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["동항 지구 위치", "해안 산책로 인접"],
        tips: ["바다 근처 산책을 좋아한다면 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "31 Ren Min Dong Lu, Zhong Shan Qu, Da Lian Shi, Liao Ning Sheng, 중국 116001", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://conrad.hilton.com.cn/zh-CN/hotel/Dalian/conrad-Dalian-DLCZDCI/?_gl=1*2x2vj0*_gcl_aw*R0NMLjE3MjIzMjUwMzQuQ2p3S0NBanducUsxQmhCdkVpd0FpN28wWDBuVTFubGhvZlo3YW5pem9hdG1PTFBpZkxWWEItazhpcEQ0SUhBeTM2WHJnOHFodjhacThob0NZTGNRQXZEX0J3RQ..*_gcl_dc*R0NMLjE3MjIzMjUwMzQuQ2p3S0NBanducUsxQmhCdkVpd0FpN28wWDBuVTFubGhvZlo3YW5pem9hdG1PTFBpZkxWWEItazhpcEQ0SUhBeTM2WHJnOHFodjhacThob0NZTGNRQXZEX0J3RQ..*_gcl_au*MjAxMzYwMjcyOC4xNzIxOTgxOTY4", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15403447067491953217", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%98%EB%9E%98%EB%93%9C+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "푸라마 호텔 다롄": {
        photos: ["/images/dalian/info/accommodations/furama-hotel-dalian.jpg"],
        summary: "넓은 객실과 편리한 도심 접근성을 갖춘 곳이에요.",
        updatedAt: "2026-07-14",
        highlights: ["쾌적하고 넓은 객실", "뛰어난 시내 접근성"],
        tips: ["여유로운 공간을 선호하는 여행자에게 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "60 Ren Min Lu, Zhong Shan Qu, Da Lian Shi, Liao Ning Sheng, 중국 116001", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.furama.com.cn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=778387852502093406", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EB%9D%BC%EB%A7%88+%ED%98%B8%ED%85%94+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "알로프트 다롄": {
        photos: ["/images/dalian/info/accommodations/aloft-dalian.jpg"],
        summary: "트렌디한 분위기에서 가볍게 머물기 좋은 도심 호텔이에요.",
        updatedAt: "2026-07-14",
        highlights: ["감각적이고 젊은 무드", "도심 속 편리한 위치"],
        tips: ["혼자 여행하거나 짧은 시티 투어에 딱이에요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "중국 Liao Ning Sheng, Da Lian Shi, Zhong Shan Qu, 鲁迅路18-1号 邮政编码: 116001", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com.cn/hotels/dlcal-aloft-dalian/overview/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4606707473158008631", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%8C%EB%A1%9C%ED%94%84%ED%8A%B8+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "뉴월드 다롄 호텔": {
        photos: ["/images/dalian/info/accommodations/new-world-dalian-hotel.jpg"],
        summary: "중산구 쇼핑과 업무 동선이 매우 효율적인 안정적인 호텔입니다.",
        updatedAt: "2026-07-14",
        highlights: ["쇼핑 및 비즈니스 최적화", "검증된 서비스 품질"],
        tips: ["중산구 쪽 일정이 많을 때 숙소로 잡기 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "41 Ren Min Lu, Zhong Shan Qu, Da Lian Shi, Liao Ning Sheng, 중국 116001", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.dalian.newworldhotels.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9064998843968724479", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%89%B4%EC%9B%94%EB%93%9C+%EB%8B%A4%EB%A1%84+%ED%98%B8%ED%85%94+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "서머셋 그랜드 센트럴 다롄": {
        photos: ["/images/dalian/info/accommodations/somerset-grand-central-dalian.jpg"],
        summary: "장기 체류와 가족 여행에 편한 서비스드 레지던스입니다.",
        updatedAt: "2026-07-14",
        highlights: ["장기 체류와 가족 여행에 편한 서비스드 레지던스입니다.", "평점 4.3", "다롄 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "128-2 Jin Ma Lu, 经济开发区, Jin Zhou Qu, Dalian Shi, Liao Ning Sheng, 중국 116600", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.discoverasr.com.cn/somerset-serviced-residence/china/somerset-grand-central-dalian", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3114477032260501896", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%9C%EB%A8%B8%EC%85%8B+%EA%B7%B8%EB%9E%9C%EB%93%9C+%EC%84%BC%ED%8A%B8%EB%9F%B4+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
