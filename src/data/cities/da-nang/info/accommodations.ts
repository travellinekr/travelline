import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "신라 모노그램 다낭": {
        photos: ["/images/da-nang/info/accommodations/shilla-monogram-quangnam-danang.jpg"],
        summary: "호이안과 다낭 사이 해변권에 위치한 한국 여행자 선호 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["비치 리조트", "가족 여행"],
        tips: ["호이안과 다낭을 함께 여행하기 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장", note: "운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Lạc Long Quân, Điện Bàn Đông, Đà Nẵng, 베트남", airport: "다낭국제공항 기준 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11337900497257245119", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%EB%9D%BC+%EB%AA%A8%EB%85%B8%EA%B7%B8%EB%9E%A8+%EB%8B%A4%EB%82%AD+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하얏트 리젠시 다낭 리조트 앤 스파": {
        photos: ["/images/da-nang/info/accommodations/hyatt-regency-danang-resort-and-spa.jpg"],
        summary: "논느억 비치와 오행산 접근성이 좋은 대형 비치 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["비치", "가족 여행"],
        tips: ["오행산과 해변을 동시에 즐기기에 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장", note: "운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "5 Truong Sa Street, Ngu Hanh Son Ward, Ngũ Hành Sơn, Đà Nẵng 550000 베트남", airport: "다낭국제공항 기준 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12589027484402672192", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%96%8F%ED%8A%B8+%EB%A6%AC%EC%A0%A0%EC%8B%9C+%EB%8B%A4%EB%82%AD+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%95%A4+%EC%8A%A4%ED%8C%8C+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "인터컨티넨탈 다낭 선 페닌슐라 리조트": {
        photos: ["/images/da-nang/info/accommodations/intercontinental-danang-sun-peninsula-resort.jpg"],
        summary: "선짜반도에 위치한 고급 럭셔리 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["럭셔리", "프라이빗"],
        tips: ["프라이빗한 휴식을 원하는 분들께 추천합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장", note: "운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Bãi Bắc, Thọ Quang, Sơn Trà, Đà Nẵng 550000 베트남", airport: "다낭국제공항 기준 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6547822829102607629", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B8%ED%84%B0%EC%BB%A8%ED%8B%B0%EB%84%A8%ED%83%88+%EB%8B%A4%EB%82%AD+%EC%84%A0+%ED%8E%98%EB%8B%8C%EC%8A%90%EB%9D%BC+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "TIA 웰니스 리조트 다낭": {
        photos: ["/images/da-nang/info/accommodations/tia-wellness-resort-da-nang.jpg"],
        summary: "스파와 웰니스 프로그램에 강점이 있는 비치 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["웰니스", "스파"],
        tips: ["스파와 웰니스 프로그램을 통해 진정한 휴식을 경험해보세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장", note: "운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "109 Võ Nguyên Giáp, Ngũ Hành Sơn, Đà Nẵng 557276 베트남", airport: "다낭국제공항 기준 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://tiawellnessresort.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1265663632225367805", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=TIA+%EC%9B%B0%EB%8B%88%EC%8A%A4+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%8B%A4%EB%82%AD+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "푸라마 리조트 다낭": {
        photos: ["/images/da-nang/info/accommodations/furama-resort-danang.jpg"],
        summary: "미케비치권에 가까운 클래식한 대형 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["비치", "리조트"],
        tips: ["미케비치 인근에서 휴양하기 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장", note: "운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "105 Võ Nguyên Giáp, Ngũ Hành Sơn, Đà Nẵng 550000 베트남", airport: "다낭국제공항 기준 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://furamavietnam.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11126774209849730514", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EB%9D%BC%EB%A7%88+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%8B%A4%EB%82%AD+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "풀만 다낭 비치 리조트": {
        photos: ["/images/da-nang/info/accommodations/pullman-danang-beach-resort.jpg"],
        summary: "비치 접근성과 시내 이동 균형이 좋은 리조트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["비치", "시내 접근"],
        tips: ["해변 휴양과 시내 관광을 동시에 즐기기에 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장", note: "운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "101 Võ Nguyên Giáp, Ngũ Hành Sơn, Đà Nẵng 550000 베트남", airport: "다낭국제공항 기준 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://all.accor.com/lien_externe.svlt?goto=fiche_hotel&code_hotel=8838&merchantid=seo-maps-VN-8838&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11635923627476186712", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%92%80%EB%A7%8C+%EB%8B%A4%EB%82%AD+%EB%B9%84%EC%B9%98+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "힐튼 다낭": {
        photos: ["/images/da-nang/info/accommodations/hilton-da-nang.jpg"],
        summary: "한강변 시내 동선에 편한 글로벌 체인 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["시내", "한강변"],
        tips: ["다낭 시내 중심가 여행에 편리합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장", note: "운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "50 Bạch Đằng, Hải Châu, Đà Nẵng 50000 베트남", airport: "다낭국제공항 기준 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11492475035019453431", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9E%90%ED%8A%BC+%EB%8B%A4%EB%82%AD+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
