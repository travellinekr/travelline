import type { AccommodationData } from '../index';

const accommodations: AccommodationData[] = [
    {
        name: "파크 하얏트 도쿄",
        type: "hotel",
        coordinates: { lat: 35.6861125, lng: 139.6904007 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Tokyo",
        description: "2025년 리뉴얼 예정, 클래식 럭셔리",
        tags: ["신주쿠", "럭셔리"]
    },
    {
        name: "아만 도쿄",
        type: "hotel",
        coordinates: { lat: 35.6854775, lng: 139.7656705 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Tokyo",
        description: "30m 아트리움, 루프탑 수영장",
        tags: ["오테마치", "럭셔리"]
    },
    {
        name: "불가리 호텔 도쿄",
        type: "hotel",
        coordinates: { lat: 35.6788388, lng: 139.7683266 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Tokyo",
        description: "도쿄역 근처, 이탈리아 디자인",
        tags: ["도쿄역", "럭셔리"]
    },
    {
        name: "미츠이 가든 호텔 우에노",
        type: "hotel",
        coordinates: { lat: 35.7118567, lng: 139.7781079 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Tokyo",
        description: "팬더 테마 객실, 아메요코 근처",
        tags: ["우에노", "테마"]
    },
    {
        name: "신주쿠 워싱턴 호텔",
        type: "hotel",
        coordinates: { lat: 35.6869153, lng: 139.6932758 },
        checkInTime: "14:00",
        checkOutTime: "11:00",
        city: "Tokyo",
        description: "신주쿠역 직결, 한국인 직원",
        tags: ["신주쿠", "역직결"]
    },
    {
        name: "아사쿠사 뷰 호텔",
        type: "hotel",
        coordinates: { lat: 35.715464, lng: 139.7918707 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Tokyo",
        description: "스카이트리 뷰, 26층 조식",
        tags: ["아사쿠사", "전망"]
    },
    {
        name: "호텔 더 셀레스틴 도쿄 시바",
        type: "hotel",
        coordinates: { lat: 35.650874, lng: 139.748867 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Tokyo",
        description: "도쿄타워 뷰",
        tags: ["미나토", "전망"]
    },
    {
        name: "솔라리아 니시테츠 호텔 긴자",
        type: "hotel",
        coordinates: { lat: 35.6707725, lng: 139.7672454 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Tokyo",
        description: "긴자 5분, 넓은 객실",
        tags: ["긴자", "쇼핑"]
    },
    {
        name: "온센 료칸 유엔 신주쿠",
        type: "hotel",
        coordinates: { lat: 35.69291279999999, lng: 139.709008 },
        checkInTime: "15:00",
        checkOutTime: "10:00",
        city: "Tokyo",
        description: "도심 온천, 하코네 온천물",
        tags: ["신주쿠", "온천"]
    },
    {
        name: "시부야 엑셀 호텔 도큐",
        type: "hotel",
        coordinates: { lat: 35.6585773, lng: 139.6998213 },
        checkInTime: "14:00",
        checkOutTime: "11:00",
        city: "Tokyo",
        description: "스크램블 교차로 2분",
        tags: ["시부야", "중심"]
    }
];

export default accommodations;
