import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "JW 메리어트 푸꾸옥 에메랄드 베이": {
        photos: ["/images/phu-quoc/info/accommodations/jw-marriott-phu-quoc-emerald-bay-resort-spa.jpg"],
        summary: "동화 속 테마로 꾸며진 켐 비치의 대표적인 럭셔리 리조트",
        updatedAt: "2026-07-15",
        highlights: ["에메랄드빛 켐 비치와 맞닿은 환상적인 위치", "독특하고 화려한 인테리어의 테마 객실", "품격 있는 애프터눈 티 서비스"],
        tips: ["리조트 곳곳이 포토존이라 인생샷 남기기에 최고예요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Eco-Tourism at Bai Khem, Phú Quốc, An Giang 922280 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/pqcjw-jw-marriott-phu-quoc-emerald-bay-resort-and-spa/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13997105756103555522", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=JW+%EB%A9%94%EB%A6%AC%EC%96%B4%ED%8A%B8+%ED%91%B8%EA%BE%B8%EC%98%A5+%EC%97%90%EB%A9%94%EB%9E%84%EB%93%9C+%EB%B2%A0%EC%9D%B4+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "인터컨티넨탈 푸꾸옥 롱비치": {
        photos: ["/images/phu-quoc/info/accommodations/intercontinental-phu-quoc-long-beach-resort.jpg"],
        summary: "롱비치의 아름다운 일몰을 만끽할 수 있는 대형 리조트",
        updatedAt: "2026-07-15",
        highlights: ["탁 트인 바다 전망의 넓은 객실", "가족 여행객에게 최적화된 다양한 수영장", "선셋을 감상하기 좋은 루프탑 바"],
        tips: ["롱비치의 낙조를 보며 즐기는 칵테일 타임을 놓치지 마세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Marina, Bai Truong, Phú Quốc, An Giang, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11028286387296392693", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B8%ED%84%B0%EC%BB%A8%ED%8B%B0%EB%84%A8%ED%83%88+%ED%91%B8%EA%BE%B8%EC%98%A5+%EB%A1%B1%EB%B9%84%EC%B9%98+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리젠트 푸꾸옥": {
        photos: ["/images/phu-quoc/info/accommodations/regent-phu-quoc.jpg"],
        summary: "최상의 프라이빗 휴식을 제공하는 프리미엄 풀빌라 리조트",
        updatedAt: "2026-07-15",
        highlights: ["압도적인 럭셔리함을 자랑하는 프라이빗 풀빌라", "세심하고 품격 있는 맞춤형 서비스", "미식가들을 위한 고품격 다이닝"],
        tips: ["특별한 기념일이나 허니문을 위한 완벽한 선택지예요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Marina Integrated Resort Complex, đường Bào Dương Tơ, Phú Quốc, An Giang 92509 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10534371004609755120", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%A0%A0%ED%8A%B8+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "프리미어 빌리지 푸꾸옥 리조트": {
        photos: ["/images/phu-quoc/info/accommodations/premier-village-phu-quoc-resort.jpg"],
        summary: "남부 곶 끝자락에서 프라이빗한 휴식을 즐길 수 있는 독채 빌라형 리조트입니다.",
        updatedAt: "2026-07-15",
        highlights: ["모든 객실이 프라이빗 풀을 갖춘 고급 빌라 형태", "남부 해변의 환상적인 일몰을 감상할 수 있는 명소", "아코르 계열의 검증된 프리미엄 서비스"],
        tips: ["프라이빗한 휴식을 원하는 커플이나 가족 여행객에게 강력 추천합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Phu Quoc, Kiên Giang 920000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=B2R4&merchantid=seo-maps-VN-B2R4&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2689638218972875074", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4+%EB%B9%8C%EB%A6%AC%EC%A7%80+%ED%91%B8%EA%BE%B8%EC%98%A5+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "살린다 리조트 푸꾸옥": {
        photos: ["/images/phu-quoc/info/accommodations/salinda-resort-phu-quoc-island.jpg"],
        summary: "공항과 가까워 이동이 편리하고 감각적인 분위기를 자랑하는 부티크 리зо트입니다.",
        updatedAt: "2026-07-15",
        highlights: ["공항 접근성이 좋아 도착 직후나 출국 전 머물기 좋음", "세련되고 고급스러운 인테리어의 부티크 스타일", "친절한 서비스와 아늑하고 로맨틱한 분위기"],
        tips: ["짧은 일정이나 이동 시간을 최소화하고 싶은 여행자에게 최적입니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Cua Lap Hamlet, Duong To Commune, Phu Quoc Island, Cửa Lấp, Phú Quốc, An Giang 95000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.salindaresort.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9896049572669622597", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%B4%EB%A6%B0%EB%8B%A4+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "뫼벤픽 리조트 웨이벌리 푸꾸옥": {
        photos: ["/images/phu-quoc/info/accommodations/movenpick-resort-waverly-phu-quoc.jpg"],
        summary: "옹랑 지역의 평화로운 분위기 속에서 아이와 함께 머물기 좋은 가족형 리조트입니다.",
        updatedAt: "2026-07-15",
        highlights: ["아이들을 위한 다양한 키즈 프로그램과 시설 완비", "옹랑 해변 근처의 조용하고 여유로운 환경", "가족 단위 여행객에게 최적화된 넓고 쾌적한 객실"],
        tips: ["아이와 함께하는 편안한 호캉스를 계획 중이라면 이곳을 추천합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Zone 1, special zone, Ong Lang Hamlet, Phú Quốc, An Giang 920000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://movenpick.accor.com/en/asia/vietnam/phu-quoc/resort-waverly-phu-quoc.html?merchantid=seo-maps-VN-B4V5&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&utm_content=Phu-Quoc", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9883226164158423751", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AB%BC%EB%B2%A4%ED%94%BD+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%9B%A8%EC%9D%B4%EB%B2%8C%EB%A6%AC+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라 베란다 리조트 푸꾸옥": {
        photos: ["/images/phu-quoc/info/accommodations/la-veranda-resort-phu-quoc-mgallery.jpg"],
        summary: "프랑스 식민지 시대의 고풍스러운 감성을 느낄 수 있는 로맨틱한 해변 리조트",
        updatedAt: "2026-07-15",
        highlights: ["프렌치 콜로니얼 스타일의 클래식한 인테리어", "여유롭고 프라이빗한 비치 분위기"],
        tips: ["커플 여행이나 기념일 숙소로 강력 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Duong Dong Beach, Đường Trần Hưng Đạo, Street, Phú Quốc, An Giang 095000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://mgallery.accor.com/hotels/6479?merchantid=seo-maps-VN-6479&sourceid=aw-cen&utm_source=google+Maps&utm_medium=seo+maps&utm_campaign=seo+maps&utm_term=MGallery-Launch", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13290526321596662770", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC+%EB%B2%A0%EB%9E%80%EB%8B%A4+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "뉴월드 푸꾸옥 리조트": {
        photos: ["/images/phu-quoc/info/accommodations/new-world-phu-quoc-resort.jpg"],
        summary: "켐 비치의 에메랄드빛 바다를 품은 럭셔리 풀빌라 리조트",
        updatedAt: "2026-07-15",
        highlights: ["프라이빗한 휴식이 가능한 빌라형 객실", "아름다운 켐 비치와 바로 연결되는 접근성"],
        tips: ["가족 단위 여행객에게 최고의 휴식을 선사해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Khem Beach, Phú Quốc, An Giang 92513 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://phuquoc.newworldhotels.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16905985308489032769", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%89%B4%EC%9B%94%EB%93%9C+%ED%91%B8%EA%BE%B8%EC%98%A5+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "쉐라톤 푸꾸옥 롱비치 리조트": {
        photos: ["/images/phu-quoc/info/accommodations/sheraton-phu-quoc-long-beach-resort.jpg"],
        summary: "빈원더스와 사파리 이동이 편리한 북부의 프리미엄 리조트",
        updatedAt: "2026-07-15",
        highlights: ["테마파크 및 주요 관광지 접근성 우수", "롱비치의 탁 트인 전망과 아름다운 일몰"],
        tips: ["아이와 함께 테마파크 여행을 계획 중이라면 딱이에요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Bai Dai Area, Special Zone, Phú Quốc, An Giang 90000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/pqcsr-sheraton-phu-quoc-long-beach-resort/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16532522781999189425", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%89%90%EB%9D%BC%ED%86%A4+%ED%91%B8%EA%BE%B8%EC%98%A5+%EB%A1%B1%EB%B9%84%EC%B9%98+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈펄 리조트 앤 스파 푸꾸옥": {
        photos: ["/images/phu-quoc/info/accommodations/vinpearl-resort-spa-phu-quoc.jpg"],
        summary: "북부 테마파크와 즐길 거리가 가득한 대규모 복합 리조트 단지입니다.",
        updatedAt: "2026-07-15",
        highlights: ["사파리 및 빈원더스 접근성 최고", "가족 여행객에게 최적화된 시설", "넓고 쾌적한 객실 컨디션"],
        tips: ["아이와 함께라면 테마파크 이용이 편리한 북부 숙소를 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Bãi Dài, Gành Dầu, Phú Quốc, An Giang, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1901820554400811520", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%ED%8E%84+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%95%A4+%EC%8A%A4%ED%8C%8C+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "두짓 프린세스 문라이즈 비치 푸꾸옥": {
        photos: ["/images/phu-quoc/info/accommodations/dusit-princess-moonrise-beach-resort-phu-quoc.jpg"],
        summary: "롱비치의 아름다운 일몰을 가성비 있게 즐길 수 있는 리조트입니다.",
        updatedAt: "2026-07-15",
        highlights: ["롱비치 인근의 뛰어난 접근성", "합리적인 가격대의 프리미엄 시설", "멋진 선셋 뷰 감상 가능"],
        tips: ["가성비를 중시하는 커플이나 친구 단위 여행객에게 딱이에요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Tran Hung Dao, Street, Group 2, Village, Cửa Lấp, Phú Quốc, An Giang, 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.dusit.com/dusitprincess-moonrisebeachresort/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16450581585026939805", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%91%90%EC%A7%93+%ED%94%84%EB%A6%B0%EC%84%B8%EC%8A%A4+%EB%AC%B8%EB%9D%BC%EC%9D%B4%EC%A6%88+%EB%B9%84%EC%B9%98+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카시아 코티지 푸꾸옥": {
        photos: ["/images/phu-quoc/info/accommodations/cassia-cottage-phu-quoc.jpg"],
        summary: "아늑한 정원과 프라이빗한 분위기를 느낄 수 있는 부티크 리조트입니다.",
        updatedAt: "2026-07-15",
        highlights: ["감성 넘치는 정원형 객실", "조용하고 프라이빗한 휴식 가능", "아기자기한 비치 접근성"],
        tips: ["북적이는 곳보다 조용한 힐링을 원하는 분들께 추천합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "100/12c, Đường Trần Hưng Đạo Tổ 7, Khu Phố 7, Phú Quốc, An Giang 92500 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://cassiacottage.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp-listing", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15667495836471924489", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%8B%9C%EC%95%84+%EC%BD%94%ED%8B%B0%EC%A7%80+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라하나 리조트 푸꾸옥": {
        photos: ["/images/phu-quoc/info/accommodations/lahana-resort-phu-quoc.jpg"],
        summary: "즈엉동 시내와 가깝고 언덕 위에서 내려다보는 전망이 매력적인 리조트예요.",
        updatedAt: "2026-07-15",
        highlights: ["언덕형 구조의 탁 트인 뷰", "즈엉동 접근성 우수"],
        tips: ["시내 맛집 탐방하기 좋은 위치예요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Đặc Khu, 91/3 Đường Trần Hưng Đạo, Khu phố 7, Phú Quốc, An Giang 92506 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://lahanaresort.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1958624036302364780", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%ED%95%98%EB%82%98+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시쉘스 푸꾸옥 호텔 앤 스파": {
        photos: ["/images/phu-quoc/info/accommodations/seashells-phu-quoc-hotel-spa.jpg"],
        summary: "즈엉동 중심가에 있어 해변과 시내를 동시에 즐기기 딱 좋은 호텔이에요.",
        updatedAt: "2026-07-15",
        highlights: ["해변 바로 앞 위치", "즈엉동 중심가 접근성 최고"],
        tips: ["주변에 맛집과 카페가 많아 편리해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "01 Võ Thị Sáu, Khu 1, Phú Quốc, An Giang 92500 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11602450181331059796", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EC%89%98%EC%8A%A4+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%98%B8%ED%85%94+%EC%95%A4+%EC%8A%A4%ED%8C%8C+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "풀만 푸꾸옥 비치 리조트": {
        photos: ["/images/phu-quoc/info/accommodations/pullman-phu-quoc-beach-resort.jpg"],
        summary: "롱비치의 신상 대형 리조트로 깔끔하고 럭셔리한 휴식을 원하는 분들께 추천해요.",
        updatedAt: "2026-07-15",
        highlights: ["신축이라 매우 깨끗함", "웅장한 규모의 대형 리조트"],
        tips: ["부대시설이 잘 되어 있어 호캉스에 최적이에요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Group 6, Ban Quy Hamlet, Phú Quốc, An Giang 920000 베트남", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://pullmanphuquoc.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=454413436747043491", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%92%80%EB%A7%8C+%ED%91%B8%EA%BE%B8%EC%98%A5+%EB%B9%84%EC%B9%98+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
