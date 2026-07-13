import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "이치란 도톤보리": {
        photos: ["/images/osaka/info/restaurants/ichiran-dotonbori-osaka.jpg"],
        summary: "이치란 도톤보리점 별관 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["돈코츠 라멘", "평점 4.3", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "돈코츠 라멘", items: [{ name: "대표 메뉴", price: "¥1,000~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ichiran.com/shop/kinki/dotonbori-south/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5996734370962942050", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%B9%98%EB%9E%80+%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미즈노": {
        photos: ["/images/osaka/info/restaurants/mizuno-okonomiyaki-osaka.jpg"],
        summary: "오코노미야키 미즈노 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["야마이모야키·오코노미야키", "평점 3.8", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "야마이모야키·오코노미야키", items: [{ name: "대표 메뉴", price: "¥1,500~3,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mizuno.gorp.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14993068628475195202", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%A6%88%EB%85%B8+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "쿠시카츠 다루마 신세카이": {
        photos: ["/images/osaka/info/restaurants/kushikatsu-daruma-shinsekai-osaka.jpg"],
        summary: "쿠시카츠 다루마 신세카이 총본점 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["꼬치튀김", "평점 4.1", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "꼬치튀김", items: [{ name: "대표 메뉴", price: "¥1,500~3,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://k471500.gorp.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17209588581346616951", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BF%A0%EC%8B%9C%EC%B9%B4%EC%B8%A0+%EB%8B%A4%EB%A3%A8%EB%A7%88+%EC%8B%A0%EC%84%B8%EC%B9%B4%EC%9D%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하루코마 스시": {
        photos: ["/images/osaka/info/restaurants/harukoma-sushi-tenjinbashi-osaka.jpg"],
        summary: "하루코마 본점 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["가성비 스시", "평점 4.2", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "가성비 스시", items: [{ name: "대표 메뉴", price: "¥2,000~4,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/harukoma_5tenjinbashi/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6656831565755969603", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%A3%A8%EC%BD%94%EB%A7%88+%EC%8A%A4%EC%8B%9C+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "엔도 스시": {
        photos: ["/images/osaka/info/restaurants/endo-sushi-kyobashi-osaka.jpg"],
        summary: "Endo Sushi Kyobashi branch 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["오마카세 스타일 스시", "평점 3.9", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "오마카세 스타일 스시", items: [{ name: "대표 메뉴", price: "¥2,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.endo-sushi.com/1243312435123931235812395123881235612390.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17097331028453420549", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%94%EB%8F%84+%EC%8A%A4%EC%8B%9C+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "지유켄 난바": {
        photos: ["/images/osaka/info/restaurants/jiyuken-namba-osaka.jpg"],
        summary: "지유켄 난바본점 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["명물 카레", "평점 4", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "명물 카레", items: [{ name: "대표 메뉴", price: "¥1,000~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 7:35",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.jiyuken.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=365342684045844433", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%80%EC%9C%A0%EC%BC%84+%EB%82%9C%EB%B0%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "야키니쿠 M 호젠지요코초": {
        photos: ["/images/osaka/info/restaurants/yakiniku-m-hozenjiyokocho-osaka.jpg"],
        summary: "입안에서 살살 녹는 프리미엄 마츠자카규를 제대로 즐길 수 있는 야키니쿠 전문점",
        updatedAt: "2026-07-13",
        highlights: ["최상급 마츠자카규 구이", "호젠지요초의 고즈넉한 분위기"],
        tips: ["인기가 많아 사전 예약 권장"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "와규 야키니쿠", items: [{ name: "대표 메뉴", price: "¥5,000~12,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 5:00~11:00; 화요일: 오후 12:00~3:00, 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://matsusaka-projects.com/english/shop/houzenji", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12107619520962549084", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%BC%ED%82%A4%EB%8B%88%EC%BF%A0+M+%ED%98%B8%EC%A0%A0%EC%A7%80%EC%9A%94%EC%BD%94%EC%B4%88+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아지노야 본점": {
        photos: ["/images/osaka/info/restaurants/ajinoya-honten-osaka.jpg"],
        summary: "오사카 여행 필수 코스, 겉바속촉 식감이 일품인 오코노미야끼 맛집",
        updatedAt: "2026-07-13",
        highlights: ["현지 느낌 가득한 맛", "풍성한 재료의 조화"],
        tips: ["웨이팅이 있을 수 있으니 오픈 시간 공략"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "오코노미야키·야키소바", items: [{ name: "대표 메뉴", price: "¥1,500~3,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ajinoya-okonomiyaki.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13558371125293422542", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%A7%80%EB%85%B8%EC%95%BC+%EB%B3%B8%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "치보 도톤보리": {
        photos: ["/images/osaka/info/restaurants/chibo-dotonbori-osaka.png"],
        summary: "도톤보리 중심에서 활기찬 분위기와 함께 즐기는 정통 오코노미야끼 전문점",
        updatedAt: "2026-07-13",
        highlights: ["다양한 토핑 선택 가능", "최고의 접근성"],
        tips: ["관광객이 많아 피크 타임은 혼잡할 수 있음"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "오코노미야키", items: [{ name: "대표 메뉴", price: "¥1,500~4,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://shop.chibo.com/detail/28/?utm_source=google&utm_medium=maps&utm_campaign=gbp", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11230990528616538865", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%98%EB%B3%B4+%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "와나카 난바": {
        photos: ["/images/osaka/info/restaurants/wanaka-namba-osaka.jpg"],
        summary: "겉바속촉의 정석을 맛볼 수 있는 난바의 유명 타코야키 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["겉은 바삭하고 속은 촉촉한 식감", "현지인들도 즐겨 찾는 노포 분위기"],
        tips: ["갓 구워져 나왔을 때 바로 먹는 것이 가장 맛있어요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "타코야키", items: [{ name: "대표 메뉴", price: "¥600~1,200", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://takoyaki-wanaka.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4848399409286648854", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%80%EB%82%98%EC%B9%B4+%EB%82%9C%EB%B0%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크레오루 도톤보리": {
        photos: ["/images/osaka/info/restaurants/creo-ru-takoyaki-dotonbori-osaka.jpg"],
        summary: "도톤보리 길거리 음식의 정수를 느낄 수 있는 타코야키와 오코노미야키 전문점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 토핑을 얹은 풍성한 맛", "도톤보리 산책 중 가볍게 즐기기 좋음"],
        tips: ["포장해서 도톤보리 강변에서 먹으면 분위기가 더 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "타코야키·오코노미야키", items: [{ name: "대표 메뉴", price: "¥800~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://creo-ru.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5890314574750646781", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A0%88%EC%98%A4%EB%A3%A8+%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카니도라쿠 도톤보리 본점": {
        photos: ["/images/osaka/info/restaurants/kani-doraku-dotonbori-honten-osaka.jpg"],
        summary: "도톤보리의 상징인 움직이는 게 간판이 반겨주는 프리미엄 게 요리 전문점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 구성의 풍성한 게 코스 요리", "입안 가득 퍼지는 게살의 달콤함"],
        tips: ["웨이팅이 길 수 있으니 미리 예약하고 방문하는 것을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "게 코스", items: [{ name: "대표 메뉴", price: "¥4,000~12,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://douraku.co.jp/kansai/honten/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10320232838878048301", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%8B%88%EB%8F%84%EB%9D%BC%EC%BF%A0+%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EB%B3%B8%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "킨류라멘 도톤보리": {
        photos: ["/images/osaka/info/restaurants/kinryu-ramen-dotonbori-osaka.jpg"],
        summary: "도톤보리 거리에서 언제든 부담 없이 즐길 수 있는 24시간 라멘 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["24시간 영업으로 야식 메뉴로 최고", "도톤보리의 활기찬 분위기를 느낄 수 있는 곳"],
        tips: ["취향에 따라 차슈나 부추를 추가해 풍미를 높여보세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "24시간 라멘", items: [{ name: "대표 메뉴", price: "¥800~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://kinryuramen.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12313835939676469871", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A8%EB%A5%98%EB%9D%BC%EB%A9%98+%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카무쿠라 도톤보리": {
        photos: ["/images/osaka/info/restaurants/kamukura-dotonbori-osaka.jpg"],
        summary: "자극적이지 않고 깔끔한 국물 맛이 일품인 현지인 추천 라멘집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["신선한 채소가 듬뿍 들어간 담백한 육수", "부담 없이 즐길 수 있는 깔끔한 뒷맛"],
        tips: ["배추의 아삭함을 살려 먹는 것이 포인트입니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "오이시 라멘", items: [{ name: "대표 메뉴", price: "¥900~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 11:30; 화요일: 오전 9:00 ~ 오후 11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://kamukura.co.jp/shop/7229/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15375594530048223547", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%AC%B4%EC%BF%A0%EB%9D%BC+%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리쿠로 오지상 난바": {
        photos: ["/images/osaka/info/restaurants/rikuro-ojisan-no-mise-namba-osaka.jpg"],
        summary: "입안에서 사르르 녹는 폭신한 식감이 매력적인 오사카 대표 디저트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["갓 구워져 나온 따끈하고 부드러운 치즈케이크", "오사카 여행 시 꼭 맛봐야 할 필수 간식"],
        tips: ["매장에서 갓 나왔을 때 먹어야 진정한 폭신함을 느낄 수 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "치즈케이크", items: [{ name: "대표 메뉴", price: "¥1,000~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 8:00; 화요일: 오전 9:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.rikuro.co.jp/shoplist/134.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9250892613011960260", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%BF%A0%EB%A1%9C+%EC%98%A4%EC%A7%80%EC%83%81+%EB%82%9C%EB%B0%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "551 호라이 에비스바시": {
        photos: ["/images/osaka/info/restaurants/551-horai-ebisubashi-osaka.jpg"],
        summary: "오사카 여행의 필수 코스, 육즙 가득한 부타만 맛집.",
        updatedAt: "2026-07-13",
        highlights: ["따끈따끈한 부타만", "난바의 상징적인 간식"],
        tips: ["줄이 길 수 있으니 눈에 보이면 바로 구매하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "부타만", items: [{ name: "대표 메뉴", price: "¥500~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.551horai.co.jp/shop/list/13/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2120556066066794875", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=551+%ED%98%B8%EB%9D%BC%EC%9D%B4+%EC%97%90%EB%B9%84%EC%8A%A4%EB%B0%94%EC%8B%9C+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "키지 우메다": {
        photos: ["/images/osaka/info/restaurants/okonomiyaki-kiji-umeda-sky-building-osaka.jpg"],
        summary: "우메다 스카이빌딩에서 즐기는 정통 오코노미야키.",
        updatedAt: "2026-07-13",
        highlights: ["현지인 추천 맛집", "풍부한 소스의 맛"],
        tips: ["피크 타임에는 웨이팅이 필수예요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "오코노미야키", items: [{ name: "대표 메뉴", price: "¥1,500~3,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 8:00; 화요일: 오전 11:30 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/okonomi_kiji_skybldg?igsh=MTd0aHlzMWh5b2F5MQ==&utm_source=qr", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16710215185814148984", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A4%EC%A7%80+%EC%9A%B0%EB%A9%94%EB%8B%A4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하지메": {
        photos: ["/images/osaka/info/restaurants/hajime-osaka.jpg"],
        summary: "미쉐린 스타의 정점을 경험할 수 있는 파인다이닝.",
        updatedAt: "2026-07-13",
        highlights: ["예술적인 플레이팅", "최상급 식재료"],
        tips: ["사전 예약은 필수, 특별한 날 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "미쉐린 파인다이닝", items: [{ name: "대표 메뉴", price: "¥30,000~", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4721227362907570112", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%A7%80%EB%A9%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "후지야 1935": {
        photos: ["/images/osaka/info/restaurants/fujiya-1935-osaka.jpg"],
        summary: "정갈한 코스 요리를 즐기기 좋은 품격 있는 다이닝",
        updatedAt: "2026-07-13",
        highlights: ["고급스러운 분위기", "정성 가득한 코스 메뉴"],
        tips: ["특별한 날 예약하고 방문하기 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "코스 다이닝", items: [{ name: "대표 메뉴", price: "¥20,000~", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~1:00, 오후 6:00~8:00; 화요일: 오후 12:00~1:00, 오후 6:00~8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://fujiya1935.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18313300881791018697", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9B%84%EC%A7%80%EC%95%BC+1935+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라 심": {
        photos: ["/images/osaka/info/restaurants/la-cime-osaka.jpg"],
        summary: "섬세한 맛과 서비스가 매력적인 프리미엄 다이닝",
        updatedAt: "2026-07-13",
        highlights: ["프라이빗하고 차분한 공간", "완성도 높은 코스 구성"],
        tips: ["조용한 식사를 원한다면 예약 필수"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "코스 다이닝", items: [{ name: "대표 메뉴", price: "¥20,000~", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 6:00~10:00; 화요일: 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.la-cime.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17324493822690737557", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC+%EC%8B%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마쓰사카규 야키니쿠 M": {
        photos: ["/images/osaka/info/restaurants/matsusakagyu-yakiniku-m-hozenji-osaka.png"],
        summary: "입안에서 살살 녹는 최상급 마쓰사카규를 맛볼 수 있는 곳",
        updatedAt: "2026-07-13",
        highlights: ["최고급 마쓰사카규 구이", "높은 평점이 증명하는 맛"],
        tips: ["인기가 많으니 꼭 예약하고 가세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "마쓰사카규", items: [{ name: "대표 메뉴", price: "¥8,000~20,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 5:00~11:00; 화요일: 오후 12:00~3:00, 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://matsusaka-projects.com/english/shop/houzenji-hanare", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2827550958429058892", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%93%B0%EC%82%AC%EC%B9%B4%EA%B7%9C+%EC%95%BC%ED%82%A4%EB%8B%88%EC%BF%A0+M+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "츠루통탄 소에몬초": {
        photos: ["/images/osaka/info/restaurants/tsurutontan-soemoncho-osaka.jpg"],
        summary: "오사카 츠루통탄 소에몬쵸점 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["대형 그릇 우동", "평점 4", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대형 그릇 우동", items: [{ name: "대표 메뉴", price: "¥1,500~3,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 6:00; 화요일: 오전 11:00 ~ 오전 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tsurutontan.co.jp/shop/soemoncho/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12563860394098208989", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B8%A0%EB%A3%A8%ED%86%B5%ED%83%84+%EC%86%8C%EC%97%90%EB%AA%AC%EC%B4%88+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "도톤보리 이마이 본점": {
        photos: ["/images/osaka/info/restaurants/dotonbori-imai-honten-osaka.jpg"],
        summary: "도톤보리 이마이 본점 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["키츠네 우동", "평점 4.3", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "키츠네 우동", items: [{ name: "대표 메뉴", price: "¥1,000~2,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 9:00; 화요일: 오전 11:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.d-imai.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18399770083682177411", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EC%9D%B4%EB%A7%88%EC%9D%B4+%EB%B3%B8%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "텐푸라 다이키치 난바": {
        photos: ["/images/osaka/info/restaurants/tempura-daikichi-namba-osaka.jpg"],
        summary: "덴뿌라 다이키치 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["튀김 정식", "평점 4.2", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "튀김 정식", items: [{ name: "대표 메뉴", price: "¥1,500~4,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://t-daikichi-sakai.crayonsite.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4926256423269151335", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%90%ED%91%B8%EB%9D%BC+%EB%8B%A4%EC%9D%B4%ED%82%A4%EC%B9%98+%EB%82%9C%EB%B0%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우동보": {
        photos: ["/images/osaka/info/restaurants/udonbo-osaka.jpg"],
        summary: "우동보우 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["사누키 우동", "평점 4.2", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "사누키 우동", items: [{ name: "대표 메뉴", price: "¥1,000~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:30~8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.udonbo.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16152100255681806047", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%8F%99%EB%B3%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "교자오 도톤보리": {
        photos: ["/images/osaka/info/restaurants/gyozaoh-dotonbori-osaka.jpg"],
        summary: "Gyozaoh! Dotonbori 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["교자·이자카야", "평점 4.4", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "교자·이자카야", items: [{ name: "대표 메뉴", price: "¥1,500~3,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=640195248392289649", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%90%EC%9E%90%EC%98%A4+%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "야키토리 이치마츠": {
        photos: ["/images/osaka/info/restaurants/yakitori-ichimatsu-osaka.jpg"],
        summary: "야키토리 이치마츠 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["닭꼬치 코스", "평점 4.4", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "닭꼬치 코스", items: [{ name: "대표 메뉴", price: "¥6,000~12,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오후 4:00~6:00, 오후 6:30~8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1087722571695552376", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%BC%ED%82%A4%ED%86%A0%EB%A6%AC+%EC%9D%B4%EC%B9%98%EB%A7%88%EC%B8%A0+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "야키토리 마쓰리": {
        photos: ["/images/osaka/info/restaurants/yakitori-matsuri-osaka.jpg"],
        summary: "육즙 가득한 닭꼬치를 맛볼 수 있는 도지마의 로컬 맛집",
        updatedAt: "2026-07-13",
        highlights: ["불향 가득한 다양한 닭꼬치 메뉴", "현지 분위기 물씬 풍기는 노포 감성"],
        tips: ["저녁 피크 타임에는 웨이팅이 있을 수 있으니 서두르세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "닭꼬치", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 6:00~10:30; 화요일: 오후 6:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tabelog.com/osaka/A2701/A270101/27119656/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8522645218334036308", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%BC%ED%82%A4%ED%86%A0%EB%A6%AC+%EB%A7%88%EC%93%B0%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "브루클린 로스팅 컴퍼니 기타하마": {
        photos: ["/images/osaka/info/restaurants/brooklyn-roasting-company-kitahama-osaka.jpg"],
        summary: "기타하마 강변 뷰와 함께 즐기는 스페셜티 커피",
        updatedAt: "2026-07-13",
        highlights: ["탁 트인 테라스 좌석", "깊은 풍미의 스페셜티 원두"],
        tips: ["날씨 좋은 날엔 테라스 자리를 선점하는 것을 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스페셜티 커피", items: [{ name: "대표 메뉴", price: "¥800~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://brooklynroasting.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3143396422888168986", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%8C%EB%A3%A8%ED%81%B4%EB%A6%B0+%EB%A1%9C%EC%8A%A4%ED%8C%85+%EC%BB%B4%ED%8D%BC%EB%8B%88+%EA%B8%B0%ED%83%80%ED%95%98%EB%A7%88+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리로 커피 로스터스": {
        photos: ["/images/osaka/info/restaurants/lilo-coffee-roasters-osaka.jpg"],
        summary: "커피 마니아라면 꼭 들러야 할 신사이바시 로스터리 카페",
        updatedAt: "2026-07-13",
        highlights: ["직접 로스팅한 신선하고 깊은 맛의 커피", "힙하고 감각적인 공간 분위기"],
        tips: ["매장에서 판매하는 원두를 기념품으로 구매하기 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스페셜티 커피", items: [{ name: "대표 메뉴", price: "¥700~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://coffee.liloinveve.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16291659530834990214", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EB%A1%9C+%EC%BB%A4%ED%94%BC+%EB%A1%9C%EC%8A%A4%ED%84%B0%EC%8A%A4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
