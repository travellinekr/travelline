import type { AccommodationData } from '../index';


const accommodations: AccommodationData[] = [
    {
        name: "인터컨티넨탈 나트랑",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        city: "Nha Trang",
        coordinates: { lat: 12.2445911, lng: 109.1960166 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "쩐푸 해변 중심부에 위치한 글로벌 체인 호텔입니다.",
        tags: ["해변", "중심가"]
    },
    {
        name: "쉐라톤 나트랑 호텔 앤 스파",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        city: "Nha Trang",
        coordinates: { lat: 12.2463429, lng: 109.1961206 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "해변과 시내 접근성이 좋은 대형 호텔입니다.",
        tags: ["해변", "루프톱"]
    },
    {
        name: "아미아나 리조트 나트랑",
        showInInbox: true,
        hasInfo: true,
        type: "resort",
        city: "Nha Trang",
        coordinates: { lat: 12.295209, lng: 109.2338719 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "프라이빗 비치와 조용한 휴식에 강점이 있는 리조트입니다.",
        tags: ["리조트", "프라이빗 비치"]
    },
    {
        name: "미아 리조트 나트랑",
        showInInbox: true,
        hasInfo: true,
        type: "resort",
        city: "Nha Trang",
        coordinates: { lat: 12.1352578, lng: 109.2123833 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "캄란 방향 해안 절벽권의 휴양형 리조트입니다.",
        tags: ["럭셔리", "휴양"]
    },
    {
        name: "식스센스 닌반베이",
        showInInbox: true,
        hasInfo: true,
        type: "resort",
        city: "Nha Trang",
        coordinates: { lat: 12.3589397, lng: 109.2776855 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "보트 접근형 럭셔리 프라이빗 리조트입니다.",
        tags: ["럭셔리", "프라이빗"]
    },
    {
        name: "라알리아 닌반베이",
        showInInbox: true,
        hasInfo: true,
        type: "resort",
        city: "Nha Trang",
        coordinates: { lat: 12.3774673, lng: 109.2631209 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "닌반베이 자연 속 빌라형 휴양 리조트입니다.",
        tags: ["빌라", "휴양"]
    },
    {
        name: "빈펄 리조트 나트랑",
        showInInbox: true,
        hasInfo: true,
        type: "resort",
        city: "Nha Trang",
        coordinates: { lat: 12.220935, lng: 109.2473572 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "혼쩨섬에서 리조트와 테마파크 동선을 함께 잡기 좋습니다.",
        tags: ["섬 리조트", "가족 여행"]
    },
    {
        name: "빈펄 비치프론트 나트랑",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        city: "Nha Trang",
        coordinates: { lat: 12.233433, lng: 109.1971117 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "쩐푸 해변 도심권의 비치프론트 호텔입니다.",
        tags: ["비치프론트", "중심가"]
    },
    {
        name: "리브라 나트랑 호텔",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        city: "Nha Trang",
        coordinates: { lat: 12.2415067, lng: 109.1946068 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "시내 중심 이동과 가성비가 좋은 호텔입니다.",
        tags: ["가성비", "시내"]
    },
    {
        name: "노보텔 나트랑",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        city: "Nha Trang",
        coordinates: { lat: 12.2378665, lng: 109.1963539 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "해변 길 건너편 중심부에 위치한 안정적인 체인 호텔입니다.",
        tags: ["해변", "체인 호텔"]
    },
    {
        name: "하바나 나트랑 호텔",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        city: "Nha Trang",
        coordinates: { lat: 12.2433961, lng: 109.195842 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "쩐푸 해변 접근성과 전망이 장점인 대형 호텔입니다.",
        tags: ["해변", "전망"]
    },
    {
        name: "레갈리아 골드 호텔 나트랑",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        city: "Nha Trang",
        coordinates: { lat: 12.2382408, lng: 109.1926995 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "도심 접근성과 루프톱 시설이 장점인 호텔입니다.",
        tags: ["루프톱", "시내"]
    },
    {
        name: "멜리아 빈펄 나트랑 엠파이어",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        city: "Nha Trang",
        coordinates: { lat: 12.2426063, lng: 109.1935773 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "시내 중심부의 장기투숙형 객실 구성이 있는 호텔입니다.",
        tags: ["시내", "가족 여행"]
    },
    {
        name: "포티크 호텔 나트랑",
        showInInbox: true,
        hasInfo: true,
        type: "hotel",
        city: "Nha Trang",
        coordinates: { lat: 12.2410245, lng: 109.1946719 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "부티크 감성과 중심가 접근성이 좋은 호텔입니다.",
        tags: ["부티크", "중심가"]
    },
    {
        name: "더 아남 캄란",
        showInInbox: true,
        hasInfo: true,
        type: "resort",
        city: "Nha Trang",
        coordinates: { lat: 12.1006224, lng: 109.1921175 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        description: "캄란 해변권의 고급 휴양 리조트입니다.",
        tags: ["리조트", "캄란"]
    },
];

export default accommodations;
