import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "오사카성": {
        photos: ["/images/osaka/info/tourSpa/osaka-castle.jpg"],
        summary: "오사카의 역사를 상징하는 웅장한 성곽과 산책하기 좋은 넓은 공원입니다.",
        updatedAt: "2026-07-13",
        highlights: ["천수각 전망대", "성곽 주변 산책로"],
        tips: ["해 질 녘에 방문하면 더욱 로맨틱한 분위기를 즐길 수 있어요."],
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1-1 Ōsakajō, Chuo Ward, Osaka, 540-0002 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.osakacastle.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4831865609044200129", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%82%AC%EC%B9%B4%EC%84%B1+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "유니버설 스튜디오 재팬": {
        photos: ["/images/osaka/info/tourSpa/universal-studios-japan-osaka.jpg"],
        summary: "닌텐도 월드와 인기 어트랙션으로 가득한 오사카 필수 테마파크입니다.",
        updatedAt: "2026-07-13",
        highlights: ["슈퍼 닌텐도 월드", "해리포터 존"],
        tips: ["대기 시간을 줄이려면 익스프레스 패스를 미리 준비하는 것이 좋아요."],
        hours: "방문 전 확인 권장",
        duration: "하루",
        price: "날짜별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "2-chōme-1-33 Sakurajima, Konohana Ward, Osaka, 554-0031 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.usj.co.jp/web/ja/jp", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3892796888607511210", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%A0%EB%8B%88%EB%B2%84%EC%84%A4+%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4+%EC%9E%AC%ED%8C%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "도톤보리": {
        photos: ["/images/osaka/info/tourSpa/dotonbori-osaka.jpg"],
        summary: "글리코상과 화려한 네온사인, 맛있는 먹거리가 가득한 오사카의 심장부입니다.",
        updatedAt: "2026-07-13",
        highlights: ["글리코상 인증샷", "길거리 음식 투어"],
        tips: ["인기 맛집은 웨이팅이 길 수 있으니 오픈 시간을 노려보세요."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒542-0071 오사카부 오사카시 주오구 도톤보리", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16446419638008461065", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우메다 스카이 빌딩": {
        photos: ["/images/osaka/info/tourSpa/umeda-sky-building-osaka.jpg"],
        summary: "오사카 도심의 야경을 한눈에 담는 전망대입니다.",
        updatedAt: "2026-07-13",
        highlights: ["공중정원 전망대", "환상적인 도시 야경"],
        tips: ["해 질 녘 방문을 추천해요."],
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1-chōme-1-88 Ōyodonaka, Kita Ward, Osaka, 531-6023 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.skybldg.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6323866581023509245", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%A9%94%EB%8B%A4+%EC%8A%A4%EC%B9%B4%EC%9D%B4+%EB%B9%8C%EB%94%A9+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "가이유칸": {
        photos: ["/images/osaka/info/tourSpa/osaka-aquarium-kaiyukan.jpg"],
        summary: "거대한 수조 속 해양 생물을 만날 수 있는 대형 수족관입니다.",
        updatedAt: "2026-07-13",
        highlights: ["대형 수조", "다채로운 해양 생물"],
        tips: ["아이와 함께하는 가족 여행에 딱이에요."],
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        duration: "2~3시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1-chōme-1-10 Kaigandōri, Minato Ward, Osaka, 552-0022 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.kaiyukan.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8035482904308493516", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%80%EC%9D%B4%EC%9C%A0%EC%B9%B8+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시텐노지": {
        photos: ["/images/osaka/info/tourSpa/shitennoji-temple-osaka.jpg"],
        summary: "일본에서 가장 오래된 사찰 중 하나로 고즈넉한 분위기를 느낄 수 있습니다.",
        updatedAt: "2026-07-13",
        highlights: ["역사적인 사찰", "조용한 산책 코스"],
        tips: ["여유로운 문화 산책을 원하는 분들께 좋아요."],
        hours: "방문 전 확인 권장",
        duration: "1시간",
        price: "입장 구역별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1-chōme-11-18 Shitennōji, Tennoji Ward, Osaka, 543-0051 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14652002837896236873", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%85%90%EB%85%B8%EC%A7%80+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아베노 하루카스 300": {
        photos: ["/images/osaka/info/tourSpa/abeno-harukas-300-osaka.jpg"],
        summary: "오사카 시내를 한눈에 내려다볼 수 있는 압도적인 높이의 전망대입니다.",
        updatedAt: "2026-07-13",
        highlights: ["탁 트인 파노라마 뷰", "일몰과 야경 명소"],
        tips: ["해 질 녘에 맞춰 방문하면 낮과 밤의 풍경을 모두 즐길 수 있어요."],
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1-chōme-1-43 Abenosuji, Abeno Ward, Osaka, 545-6016 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.abenoharukas-300.jp/observatory/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17457951089637678730", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%B2%A0%EB%85%B8+%ED%95%98%EB%A3%A8%EC%B9%B4%EC%8A%A4+300+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스파월드": {
        photos: ["/images/osaka/info/tourSpa/spa-world-osaka.jpg"],
        summary: "신세카이 인근에서 온천과 수영장을 동시에 즐길 수 있는 대형 스파 시설입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 테마의 온천", "아이와 함께 가기 좋은 수영장"],
        tips: ["여행 중 쌓인 피로를 풀기에 최적의 장소예요."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "2~4시간",
        price: "이용권별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "3-chōme-4-24 Ebisuhigashi, Naniwa Ward, Osaka, 556-0002 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.spaworld.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14023248384873681322", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%8C%8C%EC%9B%94%EB%93%9C+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "팀랩 보태니컬 가든 오사카": {
        photos: ["/images/osaka/info/tourSpa/teamlab-botanical-garden-osaka.jpg"],
        summary: "밤의 식물원을 화려한 빛으로 수놓는 환상적인 미디어아트 전시입니다.",
        updatedAt: "2026-07-13",
        highlights: ["몽환적인 야간 미디어아트", "인생샷 명소"],
        tips: ["저녁 일정으로 계획하면 동선 짜기에 좋습니다."],
        hours: "월요일: 오후 7:45~9:30; 화요일: 오후 7:45~9:30",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1-23 Nagaikōen, Higashisumiyoshi Ward, Osaka, 546-0034 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.teamlab.art/jp/e/botanicalgarden/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4949594704093356283", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%80%EB%9E%A9+%EB%B3%B4%ED%83%9C%EB%8B%88%EC%BB%AC+%EA%B0%80%EB%93%A0+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "나카노시마 리버 크루즈": {
        photos: ["/images/osaka/info/tourSpa/nakanoshima-river-cruise-osaka.jpg"],
        summary: "도심 수변과 야경을 짧게 둘러보는 오사카 리버 크루즈입니다.",
        updatedAt: "2026-07-13",
        highlights: ["도심 수변과 야경을 짧게 둘러보는 오사카 리버 크루즈입니다.", "평점 4", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오후 5:00~9:00; 화요일: 오후 5:00~9:00",
        duration: "1시간 내외",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1 Chome-1 Fukushima, Fukushima Ward, Osaka, 553-0003 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.ipponmatsu.co.jp/cruise/nakanoshima-river.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5141415619256956675", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EC%B9%B4%EB%85%B8%EC%8B%9C%EB%A7%88+%EB%A6%AC%EB%B2%84+%ED%81%AC%EB%A3%A8%EC%A6%88+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
