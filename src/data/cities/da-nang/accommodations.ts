import type { AccommodationData } from '../index';

const accommodations: AccommodationData[] = [
    {
        name: "신라모노그램 다낭",
        type: "resort",
        coordinates: { lat: 15.9629566, lng: 108.2889999 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Da Nang",
        description: "5성급 리조트, 한국인 선호",
        tags: ["럭셔리", "비치"]
    },
    {
        name: "다낭 메리어트 리조트 & 스파",
        type: "resort",
        coordinates: { lat: 16.0544563, lng: 108.0717219 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Da Nang",
        description: "미케 비치, 실투숙객 만족도 높음",
        tags: ["비치", "럭셔리"]
    },
    {
        name: "라디슨 레드 다낭",
        type: "hotel",
        coordinates: { lat: 16.0544563, lng: 108.0717219 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Da Nang",
        description: "미케 비치 바로 앞, 현대적 디자인",
        tags: ["비치", "신상"]
    },
    {
        name: "풀먼 다낭 비치 리조트",
        type: "resort",
        coordinates: { lat: 16.0410, lng: 108.2505 },
        checkInTime: "14:00",
        checkOutTime: "12:00",
        city: "Da Nang",
        description: "5성급 비치 리조트",
        tags: ["비치", "럭셔리"]
    },
    {
        name: "다이아몬드 씨 호텔 다낭",
        type: "hotel",
        coordinates: { lat: 16.0664686, lng: 108.2451072 },
        checkInTime: "14:00",
        checkOutTime: "12:00",
        city: "Da Nang",
        description: "20층 루프탑 수영장, 오션뷰",
        tags: ["가성비", "전망"]
    },
    {
        name: "골든 로터스 럭셔리 호텔 다낭",
        type: "hotel",
        coordinates: { lat: 16.0523169, lng: 108.2466746 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Da Nang",
        description: "2023년 오픈, 16층 인피니티 풀",
        tags: ["신상", "풀"]
    },
    {
        name: "벨 메종 파로산드 다낭 호텔",
        type: "hotel",
        coordinates: { lat: 16.0675871, lng: 108.2448052 },
        checkInTime: "14:00",
        checkOutTime: "12:00",
        city: "Da Nang",
        description: "가족 여행 추천, 높은 만족도",
        tags: ["가족", "비치"]
    },
    {
        name: "하이안 비치 호텔 & 스파",
        type: "hotel",
        coordinates: { lat: 16.0530442, lng: 108.2475282 },
        checkInTime: "14:00",
        checkOutTime: "12:00",
        city: "Da Nang",
        description: "2025년 가성비 1위, 트립어드바이저",
        tags: ["가성비", "비치"]
    }
];

export default accommodations;
