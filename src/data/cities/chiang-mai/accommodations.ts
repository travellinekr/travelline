import type { AccommodationData } from '../index';

const accommodations: AccommodationData[] = [
    {
        name: "센사이 호텔 님만",
        showInInbox: true,
        type: "hotel",
        coordinates: { lat: 18.795158, lng: 98.968226 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Chiang Mai",
        description: "5성급 부티크, 전통 란나 스타일",
        tags: ["님만", "부티크"]
    },
    {
        name: "아난타라 치앙마이",
        showInInbox: true,
        type: "resort",
        coordinates: { lat: 18.7815954, lng: 99.003714 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Chiang Mai",
        description: "5성급, 다양한 액티비티",
        tags: ["올드타운", "럭셔리"]
    },
    {
        name: "부리라타나 호텔",
        showInInbox: true,
        type: "hotel",
        coordinates: { lat: 18.7879397, lng: 98.9887655 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Chiang Mai",
        description: "올드타운, 가성비, 선데이 마켓",
        tags: ["올드타운", "가성비"]
    },
    {
        name: "멜리아 치앙마이",
        showInInbox: false,
        type: "hotel",
        coordinates: { lat: 18.7852997, lng: 99.0027877 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Chiang Mai",
        description: "2022년 오픈, 나이트 바자 근처",
        tags: ["나이트바자", "신상"]
    },
    {
        name: "라야 헤리티지",
        showInInbox: false,
        type: "hotel",
        coordinates: { lat: 18.8486074, lng: 98.98525769999999 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Chiang Mai",
        description: "강변 럭셔리 부티크",
        tags: ["강변", "부티크"]
    },
    {
        name: "크로스 치앙마이 리버사이드",
        showInInbox: false,
        type: "hotel",
        coordinates: { lat: 18.7661385, lng: 99.0048216 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Chiang Mai",
        description: "현대적 디자인, 스위트룸",
        tags: ["강변", "모던"]
    },
    {
        name: "포시즌스 리조트",
        showInInbox: false,
        type: "resort",
        coordinates: { lat: 18.7883439, lng: 98.98530079999999 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Chiang Mai",
        description: "매림 외곽, 전통 북부 스타일",
        tags: ["매림", "럭셔리"]
    }
];

export default accommodations;
