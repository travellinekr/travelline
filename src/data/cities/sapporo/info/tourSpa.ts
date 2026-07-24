import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "오도리 공원": {
        photos: ["/images/sapporo/info/tourSpa/odori-park-sapporo.jpg"],
        summary: "삿포로 중심을 가로지르는 대표 공원으로 계절 축제와 산책 동선이 좋습니다.",
        updatedAt: "2026-07-13",
        highlights: ["삿포로 중심을 가로지르는 대표 공원으로 계절 축제와 산책 동선이 좋습니다.", "평점 4.5", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒060-0042 北海道札幌市中央区大通西１〜１２丁目", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://odori-park.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1039401562992074910", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%8F%84%EB%A6%AC+%EA%B3%B5%EC%9B%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 TV타워": {
        photos: ["/images/sapporo/info/tourSpa/sapporo-tv-tower.jpg"],
        summary: "오도리 공원과 도심을 내려다보는 삿포로 중심 전망대입니다.",
        updatedAt: "2026-07-13",
        highlights: ["오도리 공원과 도심을 내려다보는 삿포로 중심 전망대입니다.", "평점 4.1", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        duration: "1시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒060-0042 홋카이도 삿포로시 주오구 오도리니시 1 조메", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.tv-tower.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16286171258450747441", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+TV%ED%83%80%EC%9B%8C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 시계탑": {
        photos: ["/images/sapporo/info/tourSpa/sapporo-clock-tower.jpg"],
        summary: "삿포로 개척기 역사를 보여주는 도심 대표 랜드마크입니다.",
        updatedAt: "2026-07-13",
        highlights: ["삿포로 개척기 역사를 보여주는 도심 대표 랜드마크입니다.", "평점 3.9", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:45 ~ 오후 5:10; 화요일: 오전 8:45 ~ 오후 5:10",
        duration: "30분~1시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒060-0001 홋카이도 삿포로시 주오구 기타 1 조니시 2 조메", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://sapporoshi-tokeidai.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1989368697453858283", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%8B%9C%EA%B3%84%ED%83%91+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "홋카이도 신궁": {
        photos: ["/images/sapporo/info/tourSpa/hokkaido-jingu-sapporo.jpg"],
        summary: "마루야마 공원과 함께 여유롭게 산책하기 좋은 삿포로의 대표적인 신사예요.",
        updatedAt: "2026-07-13",
        highlights: ["마루야마 공원과 연결된 아름다운 산책 코스", "일본 전통 신사의 고즈넉한 분위기"],
        tips: ["공원 나들이와 함께 방문하면 더욱 좋아요."],
        hours: "월요일: 오전 6:00 ~ 오후 5:00; 화요일: 오전 6:00 ~ 오후 5:00",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "474 Miyagaoka, Chuo Ward, Sapporo, Hokkaido 064-0959 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.hokkaidojingu.or.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17045528883461805832", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%8B%EC%B9%B4%EC%9D%B4%EB%8F%84+%EC%8B%A0%EA%B6%81+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "모이와산 로프웨이": {
        photos: ["/images/sapporo/info/tourSpa/mt-moiwa-ropeway-sapporo.jpg"],
        summary: "삿포로 시내의 환상적인 야경을 한눈에 내려다볼 수 있는 필수 코스예요.",
        updatedAt: "2026-07-13",
        highlights: ["일본 신 3대 야경으로 불리는 아름다운 풍경", "로프웨이를 타고 올라가는 특별한 경험"],
        tips: ["일몰 시간에 맞춰 방문해 매직아워를 놓치지 마세요."],
        hours: "월요일: 오전 10:30 ~ 오후 10:00; 화요일: 오전 10:30 ~ 오후 10:00",
        duration: "2~3시간",
        price: "왕복권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒005-0041 Hokkaido, Sapporo, Minami Ward, Moiwayama, 1 모이와 산초", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://mt-moiwa.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11155252751532118033", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%EC%9D%B4%EC%99%80%EC%82%B0+%EB%A1%9C%ED%94%84%EC%9B%A8%EC%9D%B4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시로이 코이비토 파크": {
        photos: ["/images/sapporo/info/tourSpa/shiroi-koibito-park-sapporo.jpg"],
        summary: "홋카이도 명물 과자를 테마로 꾸며진 아기자기하고 달콤한 테마파크예요.",
        updatedAt: "2026-07-13",
        highlights: ["과자 제조 과정을 볼 수 있는 견학 프로그램", "동화 속 마을 같은 예쁜 포토존"],
        tips: ["쿠키 만들기 체험은 사전 예약이 필수예요."],
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        duration: "1~2시간",
        price: "입장·체험별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "2-chōme-11-36 Miyanosawa 2 Jō, Nishi Ward, Sapporo, Hokkaido 063-0052 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.shiroikoibitopark.jp/?utm_source=google&utm_medium=maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13987684257188413841", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EB%A1%9C%EC%9D%B4+%EC%BD%94%EC%9D%B4%EB%B9%84%ED%86%A0+%ED%8C%8C%ED%81%AC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 맥주박물관": {
        photos: ["/images/sapporo/info/tourSpa/sapporo-beer-museum.jpg"],
        summary: "삿포로 맥주 역사와 시음 동선을 함께 즐길 수 있는 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["삿포로 맥주 역사와 시음 동선을 함께 즐길 수 있는 명소입니다.", "평점 4.3", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 11:00 ~ 오후 5:30; 화요일: 오전 11:00 ~ 오후 5:30",
        duration: "1~2시간",
        price: "투어·시음별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "9-chōme-1-1 Kita 7 Jōhigashi, Higashi Ward, Sapporo, Hokkaido 065-8633 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.sapporobeer.jp/brewery/s_museum/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1396334665551701963", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%EB%A7%A5%EC%A3%BC%EB%B0%95%EB%AC%BC%EA%B4%80+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "모에레누마 공원": {
        photos: ["/images/sapporo/info/tourSpa/moerenuma-park-sapporo.jpg"],
        summary: "이사무 노구치가 설계한 넓은 예술 공원으로 사진 동선이 좋습니다.",
        updatedAt: "2026-07-13",
        highlights: ["이사무 노구치가 설계한 넓은 예술 공원으로 사진 동선이 좋습니다.", "평점 4.4", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 7:00 ~ 오후 10:00; 화요일: 오전 7:00 ~ 오후 10:00",
        duration: "2~3시간",
        price: "무료 구역 중심",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1-1 Moerenumakōen, Higashi Ward, Sapporo, Hokkaido 007-0011 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://moerenumapark.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6613355776250148977", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%EC%97%90%EB%A0%88%EB%88%84%EB%A7%88+%EA%B3%B5%EC%9B%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "조잔케이 온천": {
        photos: ["/images/sapporo/info/tourSpa/jozankei-onsen-sapporo.jpg"],
        summary: "삿포로 근교 온천 마을로 당일치기 휴식 코스로 좋습니다.",
        updatedAt: "2026-07-13",
        highlights: ["삿포로 근교 온천 마을로 당일치기 휴식 코스로 좋습니다.", "평점 None", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "반나절",
        price: "시설별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Jozankei Onsen, Minami Ward, Sapporo, Hokkaido, 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6148931708989145609", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A1%B0%EC%9E%94%EC%BC%80%EC%9D%B4+%EC%98%A8%EC%B2%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "홋카이도 개척촌": {
        photos: ["/images/sapporo/info/tourSpa/historical-village-of-hokkaido-sapporo.png"],
        summary: "홋카이도 개척 시대 건축과 생활상을 볼 수 있는 야외 박물관입니다.",
        updatedAt: "2026-07-13",
        highlights: ["홋카이도 개척 시대 건축과 생활상을 볼 수 있는 야외 박물관입니다.", "평점 4.4", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 4:30; 화요일: 오전 9:00 ~ 오후 4:30",
        duration: "2~3시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Konopporo-50-1 Atsubetsuchō, Atsubetsu Ward, Sapporo, Hokkaido 004-0006 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.kaitaku.or.jp/?utm_source=GBP&utm_medium=GBP&utm_term=GBP&utm_content=GBP&utm_campaign=GBP", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12294930820696419222", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%8B%EC%B9%B4%EC%9D%B4%EB%8F%84+%EA%B0%9C%EC%B2%99%EC%B4%8C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오타루 운하": {
        photos: ["/images/sapporo/info/tourSpa/otaru-canal.jpg"],
        summary: "낭만적인 야경과 옛 항구 도시의 정취를 느낄 수 있는 산책 코스",
        updatedAt: "2026-07-23",
        highlights: ["가스등이 켜지는 환상적인 야경", "역사적인 붉은 벽돌 창고군", "운하를 따라 이어지는 로맨틱한 산책로"],
        tips: ["해질녘과 야경 시간대 방문을 추천합니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "방문 전 운영·입장 정보를 확인하세요" },
        access: { area: "5 Minatomachi, Otaru, Hokkaido 047-0007 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://www.city.otaru.lg.jp/docs/2020100900367/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=355229862189438753", type: "guide", description: "지도에서 위치 보기" }]
    },
    "비에이 후라노 투어": {
        photos: ["/images/sapporo/info/tourSpa/biei-furano-tour.jpg"],
        summary: "패치워크 로드라 불리는 아름다운 언덕과 나무들이 펼쳐진 비에이의 상징적인 산책로",
        updatedAt: "2026-07-23",
        highlights: ["계절마다 변하는 다채로운 꽃밭과 농작물 풍경", "세븐다운의 나무, 켄과 메리의 나무 등 유명 포토존", "끝없이 펼쳐지는 완만한 구릉지의 파노라마 뷰"],
        tips: ["렌터카나 일일투어로 동선을 묶으면 이동 부담을 줄일 수 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "하루",
        price: "상품별 상이",
        reservation: { required: true, method: "방문 전 운영·입장 정보를 확인하세요" },
        access: { area: "北海道上川郡美瑛町大久保協生, Asahi, Biei, Kamikawa District, Hokkaido 071-0216 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=15789700945580453148", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=15789700945580453148", type: "guide", description: "지도에서 위치 보기" }]
    },
    "청의 호수": {
        photos: ["/images/sapporo/info/tourSpa/blue-pond-biei.jpg"],
        summary: "신비로운 푸른 빛을 띠는 비에이의 대표적인 자연 경관",
        updatedAt: "2026-07-23",
        highlights: ["에메랄드빛 투명한 호수 물빛", "물속에 잠긴 신비로운 자작나무 군락", "사계절 변화하는 아름다운 풍경"],
        tips: ["날씨와 계절에 따라 물빛이 달라져 맑은 날 방문을 추천합니다."],
        hours: "월요일: 오전 7:00 ~ 오후 7:00; 화요일: 오전 7:00 ~ 오후 7:00",
        duration: "1시간",
        price: "무료",
        reservation: { required: false, method: "방문 전 운영·입장 정보를 확인하세요" },
        access: { area: "일본 〒071-0235 홋카이도 Kamikawa District, 비에이조 시로가네", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://www.biei-hokkaido.jp/ja/sightseeing/shirogane-blue-pond/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=345959270472972190", type: "guide", description: "지도에서 위치 보기" }]
    }
};

export default info;
