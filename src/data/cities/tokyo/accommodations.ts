import type { AccommodationData } from '../index';

const accommodations: AccommodationData[] = [
    {
        name: "호텔 메트로폴리탄 도쿄 마루노우치",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        coordinates: { lat: 35.6838969, lng: 139.7685697 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Tokyo",
        description: "도쿄역 직결급 접근성, 마루노우치 비즈니스·관광 거점",
        tags: ["도쿄역", "교통"]
    },
    {
        name: "JR 큐슈 호텔 블라섬 신주쿠",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        coordinates: { lat: 35.6878345, lng: 139.6984943 },
        checkInTime: "14:00",
        checkOutTime: "11:00",
        city: "Tokyo",
        description: "신주쿠역 남쪽, 한국 여행자 후기 많은 역세권 호텔",
        tags: ["신주쿠", "역세권"]
    },
    {
        name: "호텔 그레이스리 신주쿠",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        coordinates: { lat: 35.6953583, lng: 139.7020345 },
        checkInTime: "14:00",
        checkOutTime: "11:00",
        city: "Tokyo",
        description: "가부키초 중심, 고질라 헤드로 유명한 신주쿠 대표 호텔",
        tags: ["신주쿠", "번화가"]
    },
    {
        name: "미츠이 가든 호텔 긴자 프리미어",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        coordinates: { lat: 35.6671058, lng: 139.7632279 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Tokyo",
        description: "긴자·신바시 사이, 야경과 쇼핑 접근성이 좋은 고층 호텔",
        tags: ["긴자", "전망"]
    },
    {
        name: "리치몬드 호텔 프리미어 아사쿠사",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        coordinates: { lat: 35.7141245, lng: 139.7936921 },
        checkInTime: "14:00",
        checkOutTime: "11:00",
        city: "Tokyo",
        description: "센소지·스카이트리 관광 동선에 좋은 아사쿠사 인기 호텔",
        tags: ["아사쿠사", "관광"]
    },
    {
        name: "NOHGA HOTEL UENO TOKYO",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        coordinates: { lat: 35.7101686, lng: 139.7782184 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Tokyo",
        description: "우에노역 도보권, 감각적인 로컬 라이프스타일 호텔",
        tags: ["우에노", "감성"]
    },
    {
        name: "더 게이트 호텔 도쿄 바이 휴릭",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        coordinates: { lat: 35.6729489, lng: 139.7615741 },
        checkInTime: "14:00",
        checkOutTime: "11:00",
        city: "Tokyo",
        description: "긴자·히비야 접근성, 도쿄 도심 야경과 루프탑 라운지",
        tags: ["긴자", "루프탑"]
    },
    {
        name: "다이와 로이넷 호텔 니시신주쿠 프리미어",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        coordinates: { lat: 35.6943105, lng: 139.6893742 },
        checkInTime: "14:00",
        checkOutTime: "11:00",
        city: "Tokyo",
        description: "니시신주쿠 조용한 위치, 장기 숙박과 가족 여행에 무난한 호텔",
        tags: ["니시신주쿠", "가족"]
    },
    {
        name: "호텔 메트로폴리탄 도쿄 이케부쿠로",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        coordinates: { lat: 35.7285233, lng: 139.7080017 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Tokyo",
        description: "이케부쿠로역 인접, 북서부 도쿄 이동과 쇼핑에 편리",
        tags: ["이케부쿠로", "교통"]
    },
    {
        name: "sequence MIYASHITA PARK",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        coordinates: { lat: 35.6633113, lng: 139.7018839 },
        checkInTime: "17:00",
        checkOutTime: "14:00",
        city: "Tokyo",
        description: "시부야 미야시타파크 직결, 젊은 여행자 후기가 많은 감성 호텔",
        tags: ["시부야", "감성"]
    }
];

export default accommodations;
