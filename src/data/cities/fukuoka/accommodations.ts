import type { AccommodationData } from '../index';

const accommodations: AccommodationData[] = [
    {
        name: "JR 큐슈 호텔 블로썸 하카타",
        showInInbox: true,
        type: "hotel",
        coordinates: { lat: 33.59015249999999, lng: 130.414029 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Fukuoka",
        description: "하카타역 도보 2분, 모던 인테리어",
        tags: ["하카타", "역근처"]
    },
    {
        name: "호텔 닛코 후쿠오카",
        showInInbox: true,
        type: "hotel",
        coordinates: { lat: 33.5913235, lng: 130.4172277 },
        checkInTime: "14:00",
        checkOutTime: "12:00",
        city: "Fukuoka",
        description: "4성급, 서비스 품질 우수",
        tags: ["하카타", "고급"]
    },
    {
        name: "더 블로썸 텐진",
        showInInbox: true,
        type: "hotel",
        coordinates: { lat: 33.5901838, lng: 130.4016888 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Fukuoka",
        description: "2021년 오픈, 최신 시설",
        tags: ["텐진", "신상"]
    },
    {
        name: "원 후쿠오카 호텔",
        showInInbox: false,
        type: "hotel",
        coordinates: { lat: 33.5908005, lng: 130.4000978 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Fukuoka",
        description: "2025년 4월 오픈 예정, 럭셔리 스타일",
        tags: ["텐진", "신상"]
    },
    {
        name: "더 리츠칼튼 후쿠오카",
        showInInbox: false,
        type: "hotel",
        coordinates: { lat: 33.5897405, lng: 130.3947638 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Fukuoka",
        description: "5성급, 텐진 중심",
        tags: ["텐진", "럭셔리"]
    },
    {
        name: "솔라리아 니시테츠 호텔 후쿠오카",
        showInInbox: false,
        type: "hotel",
        coordinates: { lat: 33.5890853, lng: 130.3988213 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Fukuoka",
        description: "다이마루 백화점 연결",
        tags: ["텐진", "쇼핑"]
    },
    {
        name: "힐튼 후쿠오카 씨 호크",
        showInInbox: false,
        type: "resort",
        coordinates: { lat: 33.5954, lng: 130.3589 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Fukuoka",
        description: "바다 전망, 고층 호텔",
        tags: ["오션뷰", "럭셔리"]
    },
    {
        name: "미쓰이 가든 호텔 후쿠오카 기온",
        showInInbox: false,
        type: "hotel",
        coordinates: { lat: 33.5904295, lng: 130.4135396 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Fukuoka",
        description: "현대적 인테리어, 대중목욕탕",
        tags: ["하카타", "온천"]
    }
];

export default accommodations;
