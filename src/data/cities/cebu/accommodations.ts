import type { AccommodationData } from '../index';

const accommodations: AccommodationData[] = [
    {
        name: "샹그릴라 막탄",
        type: "resort",
        coordinates: { lat: 10.3081301, lng: 124.0200301 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Cebu",
        description: "530개 객실, 400m 백사장",
        tags: ["막탄", "럭셔리"]
    },
    {
        name: "크림슨 리조트 앤 스파",
        type: "resort",
        coordinates: { lat: 10.2966371, lng: 124.0140605 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Cebu",
        description: "프라이빗 바다, 인피니티 풀",
        tags: ["막탄", "럭셔리"]
    },
    {
        name: "제이파크 아일랜드 리조트",
        type: "resort",
        coordinates: { lat: 10.282778, lng: 123.9955854 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Cebu",
        description: "워터파크, 가족 추천",
        tags: ["막탄", "가족"]
    },
    {
        name: "뫼벤픽 호텔 막탄",
        type: "resort",
        coordinates: { lat: 10.3105249, lng: 124.0234039 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Cebu",
        description: "고층 리조트, 이비자 클럽",
        tags: ["막탄", "나이트"]
    },
    {
        name: "블루워터 마리바고",
        type: "resort",
        coordinates: { lat: 10.2867261, lng: 124.0011428 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Cebu",
        description: "다양한 객실, 가성비 조식",
        tags: ["막탄", "가성비"]
    },
    {
        name: "두짓 타니 막탄",
        type: "resort",
        coordinates: { lat: 10.3303929, lng: 124.0393159 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Cebu",
        description: "2019년 오픈, 최대 인피니티 풀",
        tags: ["막탄", "풀"]
    },
    {
        name: "바이 호텔 세부",
        type: "hotel",
        coordinates: { lat: 10.3118418, lng: 123.9212061 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Cebu",
        description: "5성급, 인피니티 풀, 루프탑 바",
        tags: ["세부시티", "가성비"]
    },
    {
        name: "플랜테이션 베이",
        type: "resort",
        coordinates: { lat: 10.2605254, lng: 123.9828074 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Cebu",
        description: "웅장하고 독특한 분위기",
        tags: ["막탄", "풀"]
    }
];

export default accommodations;
