import type { AccommodationData } from '../index';


const accommodations: AccommodationData[] = [
    {
        name: "샹그릴라 탄중아루 코타키나발루",
        showInInbox: true,
        hasInfo: true,
        type: "resort",
        city: "Kota Kinabalu",
        coordinates: { lat: 5.9557196, lng: 116.0420114 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "탄중아루 선셋으로 유명한 가족형 리조트",
        tags: ["선셋", "가족"]
    },
    {
        name: "마젤란 수트라 리조트",
        showInInbox: true,
        hasInfo: true,
        type: "resort",
        city: "Kota Kinabalu",
        coordinates: { lat: 5.969479, lng: 116.057791 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "수트라 하버권 럭셔리 리조트",
        tags: ["리조트", "수영장"]
    },
    {
        name: "퍼시픽 수트라 호텔",
        showInInbox: true,
        hasInfo: true,
        type: "resort",
        city: "Kota Kinabalu",
        coordinates: { lat: 5.96552, lng: 116.056782 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "수트라 하버 접근 좋은 호텔형 리조트",
        tags: ["하버", "가족"]
    },
    {
        name: "하얏트 센트릭 코타키나발루",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        city: "Kota Kinabalu",
        coordinates: { lat: 5.987681299999999, lng: 116.0783957 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "시내 중심 신식 호텔",
        tags: ["시내", "루프탑"]
    },
    {
        name: "코타키나발루 메리어트 호텔",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        city: "Kota Kinabalu",
        coordinates: { lat: 5.9760168, lng: 116.0682664 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "워터프런트 접근 좋은 대형 호텔",
        tags: ["시내", "오션뷰"]
    },
    {
        name: "르메르디앙 코타키나발루",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        city: "Kota Kinabalu",
        coordinates: { lat: 5.980057899999999, lng: 116.0715963 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "야시장·워터프런트 접근성 좋은 호텔",
        tags: ["중심가", "야시장"]
    },
    {
        name: "힐튼 코타키나발루",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        city: "Kota Kinabalu",
        coordinates: { lat: 5.974757299999999, lng: 116.0736693 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "시내 이동 편한 비즈니스급 호텔",
        tags: ["시내", "루프탑"]
    },
    {
        name: "그란디스 호텔 코타키나발루",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        city: "Kota Kinabalu",
        coordinates: { lat: 5.9880634, lng: 116.0781416 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "수리아 사바 연결형 시내 호텔",
        tags: ["쇼핑", "시내"]
    },
    {
        name: "호텔 식스티3",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        city: "Kota Kinabalu",
        coordinates: { lat: 5.9855556, lng: 116.0777778 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "가야 스트리트 접근 좋은 부티크 호텔",
        tags: ["가야스트리트", "가성비"]
    },
    {
        name: "더 루마 호텔 코타키나발루",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        city: "Kota Kinabalu",
        coordinates: { lat: 5.9672053, lng: 116.0654862 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "이마고몰 근처 감성 호텔",
        tags: ["감성", "쇼핑"]
    },
    {
        name: "머큐어 코타키나발루 시티 센터",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        city: "Kota Kinabalu",
        coordinates: { lat: 5.988291299999999, lng: 116.0796038 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "제셀톤 포인트 가까운 실속 호텔",
        tags: ["가성비", "항구"]
    },
    {
        name: "홀리데이 인 익스프레스 코타키나발루",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        city: "Kota Kinabalu",
        coordinates: { lat: 5.974200499999999, lng: 116.074197 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "깔끔한 시내 실속 호텔",
        tags: ["가성비", "시내"]
    },
    {
        name: "가야 아일랜드 리조트",
        showInInbox: true,
        hasInfo: true,
        type: "resort",
        city: "Kota Kinabalu",
        coordinates: { lat: 6.0187123, lng: 116.0472628 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "섬 휴양형 럭셔리 리조트",
        tags: ["섬", "휴양"]
    },
    {
        name: "붕아라야 아일랜드 리조트",
        showInInbox: true,
        hasInfo: true,
        type: "resort",
        city: "Kota Kinabalu",
        coordinates: { lat: 6.027772, lng: 116.0191481 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "툰쿠 압둘 라만 해양공원 섬 리조트",
        tags: ["섬", "스노클링"]
    },
    {
        name: "시타딘 워터프런트 코타키나발루",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        city: "Kota Kinabalu",
        coordinates: { lat: 5.9817639, lng: 116.0729021 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "워터프런트권 레지던스형 호텔",
        tags: ["레지던스", "시내"]
    },
];

export default accommodations;
