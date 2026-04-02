import type { AccommodationData } from '../index';

const accommodations: AccommodationData[] = [
    {
        name: "르 브리스톨 파리",
        type: "hotel",
        coordinates: { lat: 48.8732, lng: 2.3117 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Paris",
        description: "5성급, 샹제리제 근처 팔라스 호텔",
        tags: ["샹제리제", "럭셔리"]
    },
    {
        name: "호텔 리츠 파리",
        type: "hotel",
        coordinates: { lat: 48.8682, lng: 2.3298 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Paris",
        description: "방돔 광장, 파리 최고급 호텔",
        tags: ["방돔", "럭셔리"]
    },
    {
        name: "그랜드 호텔 뒤 팔레 루아얄",
        type: "hotel",
        coordinates: { lat: 48.8648, lng: 2.3370 },
        checkInTime: "15:00",
        checkOutTime: "12:00",
        city: "Paris",
        description: "팔레 루아얄 맞은편, 부티크",
        tags: ["루브르", "부티크"]
    },
    {
        name: "호텔 파리 생 빅토르",
        type: "hotel",
        coordinates: { lat: 48.8502, lng: 2.3510 },
        checkInTime: "14:00",
        checkOutTime: "11:00",
        city: "Paris",
        description: "노트르담 근처, 가성비 부티크",
        tags: ["노트르담", "가성비"]
    },
    {
        name: "시티즌M 파리 오페라",
        type: "hotel",
        coordinates: { lat: 48.8720, lng: 2.3430 },
        checkInTime: "14:00",
        checkOutTime: "11:00",
        city: "Paris",
        description: "오페라 가르니에 근처, 모던",
        tags: ["오페라", "모던"]
    },
    {
        name: "호텔 줄리안 파리",
        type: "hotel",
        coordinates: { lat: 48.8660, lng: 2.3550 },
        checkInTime: "14:00",
        checkOutTime: "11:00",
        city: "Paris",
        description: "마레 지구, 디자인 호텔",
        tags: ["마레", "디자인"]
    }
];

export default accommodations;
