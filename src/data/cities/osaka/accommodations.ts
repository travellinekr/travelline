import type { AccommodationData } from '../index';

const accommodations: AccommodationData[] = [
    {
        name: "센타라 그랜드 호텔 오사카",
        showInInbox: true,
        type: "hotel",
        coordinates: { lat: 34.660291, lng: 135.5022983 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Osaka",
        description: "난바역 도보 5분, 간사이공항 라피트 이용 편리",
        tags: ["난바", "공항접근성"]
    },
    {
        name: "스위소텔 난카이 오사카",
        showInInbox: true,
        type: "hotel",
        coordinates: { lat: 34.6641574, lng: 135.5011441 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Osaka",
        description: "난바역 직결, 라피트역 연결",
        tags: ["난바", "역직결"]
    },
    {
        name: "호텔 한큐 리스파이어 오사카",
        showInInbox: true,
        type: "hotel",
        coordinates: { lat: 34.7047014, lng: 135.4961473 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Osaka",
        description: "JR 오사카역 도보 7분, 쾌적한 시설",
        tags: ["우메다", "쾌적"]
    },
    {
        name: "더 파크 프론트 호텔 앳 유니버설 스튜디오 재팬",
        showInInbox: false,
        type: "hotel",
        coordinates: { lat: 34.6678977, lng: 135.4372576 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Osaka",
        description: "USJ 바로 앞, 테마파크 여행 최적",
        tags: ["USJ", "테마파크"]
    },
    {
        name: "호텔 뉴 오타니 오사카",
        showInInbox: false,
        type: "hotel",
        coordinates: { lat: 34.6908166, lng: 135.5335447 },
        checkInTime: "14:00",
        checkOutTime: "12:00",
        city: "Osaka",
        description: "오사카성 공원 바로 옆, 멋진 전망",
        tags: ["오사카성", "전망"]
    },
    {
        name: "포시즌스 호텔 오사카",
        showInInbox: false,
        type: "hotel",
        coordinates: { lat: 34.6961363, lng: 135.4935424 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Osaka",
        description: "2024년 신규 오픈, 전통 료칸 경험 가능",
        tags: ["럭셔리", "료칸"]
    },
    {
        name: "칸데오 호텔 오사카 더 타워",
        showInInbox: false,
        type: "hotel",
        coordinates: { lat: 34.6954318, lng: 135.5005214 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Osaka",
        description: "고급스러운 인테리어, 난바 중심",
        tags: ["난바", "고급"]
    },
    {
        name: "카락사 호텔 오사카 난바",
        showInInbox: false,
        type: "hotel",
        coordinates: { lat: 34.6705808, lng: 135.4989305 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Osaka",
        description: "깔끔한 객실, 가성비 좋음",
        tags: ["난바", "가성비"]
    },
    {
        name: "호텔 유니버설 포트",
        showInInbox: false,
        type: "hotel",
        coordinates: { lat: 34.6663662, lng: 135.4380851 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Osaka",
        description: "USJ 공식 호텔, 가족 여행 추천",
        tags: ["USJ", "가족"]
    },
    {
        name: "호텔 발리 타워 오사카 텐노지",
        showInInbox: false,
        type: "hotel",
        coordinates: { lat: 34.647204, lng: 135.511924 },
        checkInTime: "15:00",
        checkOutTime: "11:00",
        city: "Osaka",
        description: "합리적 가격, 휴식 같은 분위기",
        tags: ["텐노지", "가성비"]
    }
];

export default accommodations;
