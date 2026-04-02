import type { RestaurantData } from '../index';

const restaurants: RestaurantData[] = [
    {
        name: "우미카지 테라스",
        type: "fusion",
        city: "Okinawa",
        coordinates: { lat: 26.1946, lng: 127.6464 },
        cuisine: "퓨전 요리",
        specialty: "타코스, 타코라이스",
        priceRange: "¥1,500~2,500",
        features: ["오션뷰", "인생샷"],
        icon: "🌮"
    },
    {
        name: "제이크스 스테이크하우스",
        type: "western",
        city: "Okinawa",
        coordinates: { lat: 26.3358, lng: 127.8011 },
        cuisine: "스테이크",
        specialty: "안구스 비프",
        priceRange: "¥3,000~6,000",
        features: ["미군 기지 스타일", "두툼한 스테이크"],
        icon: "🥩"
    },
    {
        name: "나하 공설시장",
        type: "local",
        city: "Okinawa",
        coordinates: { lat: 26.216, lng: 127.6774 },
        cuisine: "시장 음식",
        specialty: "고야 참푸루",
        priceRange: "¥800~1,800",
        features: ["로컬 시장", "현지 음식"],
        icon: "🥘"
    },
    {
        name: "C&C 브렉퍼스트",
        type: "cafe",
        city: "Okinawa",
        coordinates: { lat: 26.415, lng: 127.7155 },
        cuisine: "브런치",
        specialty: "아사이볼, 팬케이크",
        priceRange: "¥1,200~2,000",
        features: ["건강식", "해변 근처"],
        icon: "🥥"
    },
    {
        name: "나키진 소키소바",
        type: "local",
        city: "Okinawa",
        coordinates: { lat: 26.688, lng: 127.929 },
        cuisine: "오키나와 소바",
        specialty: "소키소바",
        priceRange: "¥700~1,200",
        features: ["현지 맛집", "부드러운 돼지갈비"],
        icon: "🍜"
    }
];

export default restaurants;
