/**
 * 여행지 데이터
 * 
 * 이 파일은 DestinationPicker 컴포넌트에서 사용하는 여행지 정보와 이미지를 관리합니다.
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 📝 데이터 업데이트 방법
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * 1. 새로운 지역 추가하기:
 *    DESTINATION_DATA에 새 키를 추가하고 RegionKey 타입도 업데이트
 * 
 * 2. 새로운 도시 추가하기:
 *    해당 지역의 cities 배열에 CityData 객체 추가
 * 
 * 3. 도시 정보 수정하기:
 *    cities 배열에서 해당 도시 찾아서 필드 수정
 * 
 * 4. 이미지 URL 업데이트:
 *    FALLBACK_IMAGES에서 영문 도시명으로 찾아서 URL 수정
 * 
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📌 타입 정의
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * 지역 키 타입
 * 새로운 지역을 추가하려면 여기에 키를 추가하세요
 */
export type RegionKey = "japan" | "china_taiwan" | "se_asia" | "long_haul";

/**
 * 도시 데이터 타입
 */
export interface CityData {
    name: string;              // 한글 도시명 (예: "도쿄")
    engName: string;           // 영문 도시명 (예: "Tokyo")
    country: string;           // 국가명 (예: "일본")
    desc: string;              // 도시 설명 (한 줄, 예: "현대와 전통의 조화")
    tags: string[];            // 태그 배열 (예: ["쇼핑", "도시"])
    hemisphere?: 'north' | 'south'; // 반구 (남반구면 계절 반대)
    landmark?: string;         // 랜드마크 키워드 (Unsplash 검색용)
    airports?: Array<{ name: string; code: string }>; // 공항 정보
    timezone: number;          // UTC 기준 시차 (예: 일본 +9, 태국 +7, 파리 +1)
}

/**
 * 지역 데이터 구조 타입
 */
export interface RegionData {
    title: string;      // 지역명 (예: "일본")
    subtitle: string;   // 부제목 (예: "가볍게 떠나는 미식과 온천")
    cities: CityData[]; // 도시 목록
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🌆 도시별 Fallback 이미지 (Wikimedia)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Unsplash API 실패 시 사용되는 기본 이미지
// 키는 영문 도시명 (CityData.engName)과 일치해야 함
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const FALLBACK_IMAGES: Record<string, string> = {
    "Osaka": "https://commons.wikimedia.org/wiki/Special:FilePath/Osaka_Castle_02bs3200.jpg?width=800",
    "Tokyo": "https://commons.wikimedia.org/wiki/Special:FilePath/Tokyo_Tower_M4854.jpg?width=800",
    "Fukuoka": "https://commons.wikimedia.org/wiki/Special:FilePath/Canalcity.jpg?width=800",
    "Sapporo": "https://commons.wikimedia.org/wiki/Special:FilePath/Sapporo_clock_tower.JPG?width=800",
    "Okinawa": "https://commons.wikimedia.org/wiki/Special:FilePath/Okinawa_beach_3.jpg?width=800",
    "Taipei": "https://commons.wikimedia.org/wiki/Special:FilePath/Taipei_101_from_Xiangshan_20240729.jpg?width=800",
    "Shanghai": "https://commons.wikimedia.org/wiki/Special:FilePath/Shanghai_skyline_from_the_bund.jpg?width=800",
    "Dalian": "https://commons.wikimedia.org/wiki/Special:FilePath/Dalian_Castle_Hotel_2015.jpg?width=800",
    "Da Nang": "https://commons.wikimedia.org/wiki/Special:FilePath/2020_Da_Nang_Dragon_Bridge_IMG_3897.jpg?width=800",
    "Bangkok": "https://commons.wikimedia.org/wiki/Special:FilePath/Wat_arun_bangkok.jpg?width=800",
    "Nha Trang": "https://commons.wikimedia.org/wiki/Special:FilePath/Nha_Trang_Beach,_Vietnam.jpg?width=800",
    "Bali": "https://commons.wikimedia.org/wiki/Special:FilePath/Bali_Pura_Lempuyang_Luhur.jpg?width=800",
    "Cebu": "https://commons.wikimedia.org/wiki/Special:FilePath/Taoist_Temple,_Cebu.jpg?width=800",
    "Chiang Mai": "https://commons.wikimedia.org/wiki/Special:FilePath/Chiang_Mai_View_from_Doi_Suthep.jpg?width=800",
    "Da Lat": "https://commons.wikimedia.org/wiki/Special:FilePath/Da_Lat_Flower_Park_01.jpg?width=800",
    "Guam": "https://commons.wikimedia.org/wiki/Special:FilePath/Beach_of_Tumon_Bay,_Guam,_USA_(8532198983).jpg?width=800",
    "Ulaanbaatar": "https://commons.wikimedia.org/wiki/Special:FilePath/Sukhbaatar_Square_-_Ulan_Bator_Ulaanbaatar,_Mongolia_-_Улаанбатар_(6246770744).jpg?width=800",
    "Paris": "https://commons.wikimedia.org/wiki/Special:FilePath/Eiffel_Tower_01.jpg?width=800",
    "Mallorca": "https://commons.wikimedia.org/wiki/Special:FilePath/Kathedrale_von_Palma_II.jpg?width=800"
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🗺️ 여행지 데이터
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 지역별로 그룹화된 여행지 정보
// 
// 각 도시 데이터 필드 설명:
// - name: 한글 도시명 (UI에 표시)
// - engName: 영문 도시명 (FALLBACK_IMAGES 키와 일치, Unsplash 검색 키워드)
// - country: 국가명
// - desc: 도시 한 줄 설명
// - tags: 도시 특징 태그 (최대 2개 권장)
// - landmark: 대표 랜드마크 (Unsplash 검색 시 사용, 더 정확한 이미지)
// - airports: 공항 정보 배열 (name: 한글명, code: IATA 코드)
// - timezone: UTC 기준 시차 (+9, +7, +1 등)
// - hemisphere: 'south'면 남반구 (계절 반대), 기본값 'north'
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const DESTINATION_DATA: Record<RegionKey, RegionData> = {
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🏯 일본
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    japan: {
        title: "일본",
        subtitle: "가볍게 떠나는 미식과 온천",
        cities: [
            {
                name: "오사카",
                engName: "Osaka",
                country: "일본",
                desc: "식도락과 유니버설 스튜디오",
                tags: ["미식", "테마파크"],
                landmark: "Osaka Castle",
                airports: [{ name: "간사이국제공항", code: "KIX" }],
                timezone: 9
            },
            {
                name: "도쿄",
                engName: "Tokyo",
                country: "일본",
                desc: "현대와 전통의 조화",
                tags: ["쇼핑", "도시"],
                landmark: "Tokyo Tower",
                airports: [
                    { name: "나리타국제공항", code: "NRT" },
                    { name: "하네다공항", code: "HND" }
                ],
                timezone: 9
            },
            {
                name: "후쿠오카",
                engName: "Fukuoka",
                country: "일본",
                desc: "가장 가까운 해외여행",
                tags: ["온천", "가성비"],
                landmark: "Fukuoka Tower",
                airports: [{ name: "후쿠오카공항", code: "FUK" }],
                timezone: 9
            },
            {
                name: "삿포로",
                engName: "Sapporo",
                country: "일본",
                desc: "겨울 눈과 여름 라벤더",
                tags: ["자연", "맥주"],
                landmark: "Sapporo Odori Park",
                airports: [{ name: "신치토세공항", code: "CTS" }],
                timezone: 9
            },
            {
                name: "오키나와",
                engName: "Okinawa",
                country: "일본",
                desc: "동양의 하와이",
                tags: ["가족", "드라이브"],
                landmark: "Okinawa Kabira Bay",
                airports: [{ name: "나하공항", code: "OKA" }],
                timezone: 9
            },
        ]
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🏮 중국 / 대만
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    china_taiwan: {
        title: "중국 / 대만",
        subtitle: "미식과 이색적인 풍경",
        cities: [
            {
                name: "타이베이",
                engName: "Taipei",
                country: "대만",
                desc: "야시장과 가성비 미식",
                tags: ["야시장", "가성비"],
                landmark: "Taipei 101",
                airports: [{ name: "타오위안국제공항", code: "TPE" }],
                timezone: 8
            },
            {
                name: "상하이",
                engName: "Shanghai",
                country: "중국",
                desc: "화려한 야경의 도시",
                tags: ["야경", "미식"],
                landmark: "The Bund Shanghai",
                airports: [
                    { name: "푸둥국제공항", code: "PVG" },
                    { name: "훙차오국제공항", code: "SHA" }
                ],
                timezone: 8
            },
            {
                name: "다롄",
                engName: "Dalian",
                country: "중국",
                desc: "가까운 유럽풍 도시",
                tags: ["이색", "가성비"],
                landmark: "Dalian Xinghai Square",
                airports: [{ name: "다롄저우수이쯔국제공항", code: "DLC" }],
                timezone: 8
            },
        ]
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🌴 동남아시아
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    se_asia: {
        title: "동남아시아",
        subtitle: "휴양과 힐링의 천국",
        cities: [
            {
                name: "다낭",
                engName: "Da Nang",
                country: "베트남",
                desc: "한국인 최애 가족 휴양지",
                tags: ["가족", "휴양"],
                landmark: "Golden Bridge Da Nang",
                airports: [{ name: "다낭국제공항", code: "DAD" }],
                timezone: 7
            },
            {
                name: "방콕",
                engName: "Bangkok",
                country: "태국",
                desc: "배낭여행의 성지",
                tags: ["쇼핑", "문화"],
                landmark: "Wat Arun",
                airports: [{ name: "수완나품국제공항", code: "BKK" }],
                timezone: 7
            },
            {
                name: "나트랑",
                engName: "Nha Trang",
                country: "베트남",
                desc: "가성비 최고의 비치",
                tags: ["해변", "가성비"],
                landmark: "Nha Trang Beach",
                airports: [{ name: "캄라인국제공항", code: "CXR" }],
                timezone: 7
            },
            {
                name: "발리",
                engName: "Bali",
                country: "인도네시아",
                desc: "신들의 섬, 럭셔리 휴양",
                tags: ["럭셔리", "허니문"],
                hemisphere: 'south',  // 남반구 - 계절 반대
                landmark: "Uluwatu Temple",
                airports: [{ name: "응우라라이국제공항", code: "DPS" }],
                timezone: 8
            },
            {
                name: "세부",
                engName: "Cebu",
                country: "필리핀",
                desc: "다이빙과 고래상어",
                tags: ["액티비티", "바다"],
                landmark: "Kawasan Falls",
                airports: [{ name: "막탄세부국제공항", code: "CEB" }],
                timezone: 8
            },
            {
                name: "치앙마이",
                engName: "Chiang Mai",
                country: "태국",
                desc: "디지털 노마드의 성지",
                tags: ["감성", "힐링"],
                landmark: "Doi Suthep",
                airports: [{ name: "치앙마이국제공항", code: "CNX" }],
                timezone: 7
            },
            {
                name: "달랏",
                engName: "Da Lat",
                country: "베트남",
                desc: "시원한 고원 도시",
                tags: ["이색", "날씨"],
                landmark: "Xuan Huong Lake",
                airports: [{ name: "리엔크엉국제공항", code: "DLI" }],
                timezone: 7
            },
        ]
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // ✈️ 이색 / 장거리
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    long_haul: {
        title: "이색 / 장거리",
        subtitle: "새로운 경험을 찾아서",
        cities: [
            {
                name: "괌",
                engName: "Guam",
                country: "미국",
                desc: "쇼핑과 휴양의 정석",
                tags: ["쇼핑", "아이동반"],
                landmark: "Tumon Bay",
                airports: [{ name: "괌국제공항", code: "GUM" }],
                timezone: 10
            },
            {
                name: "울란바토르",
                engName: "Ulaanbaatar",
                country: "몽골",
                desc: "별이 쏟아지는 초원",
                tags: ["이색", "자연"],
                landmark: "Genghis Khan Statue Complex",
                airports: [{ name: "칭기스칸국제공항", code: "UBN" }],
                timezone: 8
            },
            {
                name: "파리",
                engName: "Paris",
                country: "프랑스",
                desc: "낭만의 도시",
                tags: ["예술", "로맨틱"],
                landmark: "Eiffel Tower",
                airports: [{ name: "샤를드골공항", code: "CDG" }],
                timezone: 1
            },
            {
                name: "마요르카",
                engName: "Mallorca",
                country: "스페인",
                desc: "지중해의 보석",
                tags: ["휴양", "인생샷"],
                landmark: "Palma Cathedral",
                airports: [{ name: "팔마데마요르카공항", code: "PMI" }],
                timezone: 1
            },
        ]
    }
};
