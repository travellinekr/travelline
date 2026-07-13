import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "삿포로 비어가든": {
        photos: ["/images/sapporo/info/restaurants/sapporo-beer-garden-sapporo.jpg"],
        summary: "삿포로 맥주원 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["징기스칸·맥주", "평점 4.2", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "징기스칸·맥주", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 9:00; 화요일: 오전 11:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sapporo-bier-garten.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=637930090976473508", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%EB%B9%84%EC%96%B4%EA%B0%80%EB%93%A0+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "징기스칸 다루마 5.5": {
        photos: ["/images/sapporo/info/restaurants/jingisukan-daruma-5-5-sapporo.jpg"],
        summary: "다루마 5.5점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["양고기 구이", "평점 4", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "양고기 구이", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00 ~ 오전 4:30; 화요일: 오후 5:00 ~ 오전 4:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sapporo-jingisukan.info/55ten/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=257774937553959204", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%95%EA%B8%B0%EC%8A%A4%EC%B9%B8+%EB%8B%A4%EB%A3%A8%EB%A7%88+5.5+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "징기스칸 다루마 6.4": {
        photos: ["/images/sapporo/info/restaurants/jingisukan-daruma-6-4-sapporo.jpg"],
        summary: "다루마 6.4점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["양고기 구이", "평점 4.1", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "양고기 구이", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00 ~ 오전 5:00; 화요일: 오후 5:00 ~ 오전 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4032425855532403630", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%95%EA%B8%B0%EC%8A%A4%EC%B9%B8+%EB%8B%A4%EB%A3%A8%EB%A7%88+6.4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스아게 플러스": {
        photos: ["/images/sapporo/info/restaurants/suage-plus-sapporo.jpg"],
        summary: "수프카레 스아게+ 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["수프카레", "평점 4.3", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "수프카레", items: [{ name: "대표 메뉴", price: "¥1,500~2,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 8:30; 화요일: 오전 11:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.suage.info/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10502422655510800755", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%95%84%EA%B2%8C+%ED%94%8C%EB%9F%AC%EC%8A%A4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "가라쿠": {
        photos: ["/images/sapporo/info/restaurants/garaku-sapporo.jpg"],
        summary: "스프카레 가라쿠 삿포로 본점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["수프카레", "평점 4.3", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "수프카레", items: [{ name: "대표 메뉴", price: "¥1,500~2,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:00, 오후 5:00~8:30; 화요일: 오전 11:30 ~ 오후 3:00, 오후 5:00~8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.s-garaku.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16775367457305999515", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%80%EB%9D%BC%EC%BF%A0+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "수프카레 킹": {
        photos: ["/images/sapporo/info/restaurants/soup-curry-king-sapporo.jpg"],
        summary: "수프카레 킹 센트럴점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["수프카레", "평점 4.5", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "수프카레", items: [{ name: "대표 메뉴", price: "¥1,500~2,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:30, 오후 5:30~9:30; 화요일: 오전 11:30 ~ 오후 3:30, 오후 5:30~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.soupcurry-king.shop/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11288501125129571132", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%98%ED%94%84%EC%B9%B4%EB%A0%88+%ED%82%B9+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "에비소바 이치겐 본점": {
        photos: ["/images/sapporo/info/restaurants/ebisoba-ichigen-main-shop-sapporo.jpg"],
        summary: "에비소바 이치겐 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["새우 라멘", "평점 4.3", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "새우 라멘", items: [{ name: "대표 메뉴", price: "¥900~1,600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 3:00; 화요일: 오전 11:00 ~ 오전 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.ebisoba.com/ig2649/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=133821498680476131", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EB%B9%84%EC%86%8C%EB%B0%94+%EC%9D%B4%EC%B9%98%EA%B2%90+%EB%B3%B8%EC%A0%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라멘 신겐 미나미6조": {
        photos: ["/images/sapporo/info/restaurants/ramen-shingen-minami-6jo-sapporo.jpg"],
        summary: "라멘 신겐 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["미소 라멘", "평점 4.1", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "미소 라멘", items: [{ name: "대표 메뉴", price: "¥900~1,600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 1:00; 화요일: 오전 11:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11307649988743543203", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%A9%98+%EC%8B%A0%EA%B2%90+%EB%AF%B8%EB%82%98%EB%AF%B86%EC%A1%B0+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "멘야 사이미": {
        photos: ["/images/sapporo/info/restaurants/menya-saimi-sapporo.jpg"],
        summary: "멘야 사이미 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["미소 라멘", "평점 4.2", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "미소 라멘", items: [{ name: "대표 메뉴", price: "¥900~1,600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 10:30 ~ 오후 3:15",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.menya-saimi.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13230786759453686988", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%98%EC%95%BC+%EC%82%AC%EC%9D%B4%EB%AF%B8+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스미레 삿포로 스스키노": {
        photos: ["/images/sapporo/info/restaurants/sumire-sapporo-susukino.jpg"],
        summary: "스미레 미소라멘 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["미소 라멘", "평점 3.9", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "미소 라멘", items: [{ name: "대표 메뉴", price: "¥900~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.sumireya.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9777075241444519631", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EB%AF%B8%EB%A0%88+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%8A%A4%EC%8A%A4%ED%82%A4%EB%85%B8+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "케야키 스스키노": {
        photos: ["/images/sapporo/info/restaurants/keyaki-susukino-sapporo.jpg"],
        summary: "케야키 스스키노 본점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["미소 라멘", "평점 3.9", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "미소 라멘", items: [{ name: "대표 메뉴", price: "¥900~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:30 ~ 오전 3:00; 화요일: 오전 10:30 ~ 오전 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.sapporo-keyaki.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16223278055157946803", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BC%80%EC%95%BC%ED%82%A4+%EC%8A%A4%EC%8A%A4%ED%82%A4%EB%85%B8+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "네무로 하나마루 JR타워": {
        photos: ["/images/sapporo/info/restaurants/nemuro-hanamaru-jr-tower-stellar-place-sapporo.jpg"],
        summary: "네무로 하나마루 JR타워 스텔라플레이스점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["홋카이도 스시", "평점 4.2", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "홋카이도 스시", items: [{ name: "대표 메뉴", price: "¥2,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.sushi-hanamaru.com/store/details/s03.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5164715388780302898", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%84%A4%EB%AC%B4%EB%A1%9C+%ED%95%98%EB%82%98%EB%A7%88%EB%A3%A8+JR%ED%83%80%EC%9B%8C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스시잔마이 스스키노": {
        photos: ["/images/sapporo/info/restaurants/sushi-zanmai-sapporo-susukino.jpg"],
        summary: "스시잔마이 스스키노점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스시·해산물", "평점 3.7", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스시·해산물", items: [{ name: "대표 메뉴", price: "¥2,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오전 7:00; 화요일: 오전 10:00 ~ 오전 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8597495542189915743", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%8B%9C%EC%9E%94%EB%A7%88%EC%9D%B4+%EC%8A%A4%EC%8A%A4%ED%82%A4%EB%85%B8+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "토리톤 도요히라": {
        photos: ["/images/sapporo/info/restaurants/kaiten-sushi-toriton-sapporo-toyohira.jpg"],
        summary: "토리톤스시 토요히라점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["홋카이도 회전초밥", "평점 4.3", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "홋카이도 회전초밥", items: [{ name: "대표 메뉴", price: "¥2,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://toriton-kita1.jp/shop/toyohira/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=172791602120061703", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%A0%EB%A6%AC%ED%86%A4+%EB%8F%84%EC%9A%94%ED%9E%88%EB%9D%BC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카니혼케 삿포로역앞": {
        photos: ["/images/sapporo/info/restaurants/kani-honke-sapporo-ekimae.jpg"],
        summary: "카니혼케 삿포로에키마에 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["게 코스", "평점 4.1", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "게 코스", items: [{ name: "대표 메뉴", price: "¥5,000~15,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11130542095548088011", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%8B%88%ED%98%BC%EC%BC%80+%EC%82%BF%ED%8F%AC%EB%A1%9C%EC%97%AD%EC%95%9E+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "효셋츠노몬": {
        photos: ["/images/sapporo/info/restaurants/hyousetsu-no-mon-sapporo.jpg"],
        summary: "효우세츠노몬(빙설의문) 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["게 샤브샤브", "평점 4.3", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "게 샤브샤브", items: [{ name: "대표 메뉴", price: "¥8,000~20,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 4:30~10:30; 화요일: 오전 11:00 ~ 오후 3:00, 오후 4:30~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.hyousetsu.co.jp/sp/index.php", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6789083509554852267", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9A%A8%EC%85%8B%EC%B8%A0%EB%85%B8%EB%AA%AC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오이소 니조시장": {
        photos: ["/images/sapporo/info/restaurants/nijo-market-oiso-sapporo.jpg"],
        summary: "Ohiso Nijo Market - 2nd Store 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["카이센동", "평점 4.2", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "카이센동", items: [{ name: "대표 메뉴", price: "¥2,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 3:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ohiso.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4419369595919713645", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%9D%B4%EC%86%8C+%EB%8B%88%EC%A1%B0%EC%8B%9C%EC%9E%A5+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "돈부리차야 니조시장": {
        photos: ["/images/sapporo/info/restaurants/donburi-chaya-nijo-market-sapporo.jpg"],
        summary: "돈베이 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["카이센동", "평점 4.5", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "카이센동", items: [{ name: "대표 메뉴", price: "¥2,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 8:00; 화요일: 오전 7:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.donbe.sapporo-asaichi.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13429710081302807996", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%88%EB%B6%80%EB%A6%AC%EC%B0%A8%EC%95%BC+%EB%8B%88%EC%A1%B0%EC%8B%9C%EC%9E%A5+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하치쿄": {
        photos: ["/images/sapporo/info/restaurants/hachikyo-sapporo.jpg"],
        summary: "마레 하치쿄 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["츠코메시 연어알 덮밥", "평점 4.8", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "츠코메시 연어알 덮밥", items: [{ name: "대표 메뉴", price: "¥4,000~8,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 6:00 ~ 오전 12:00; 화요일: 오후 6:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hachikyo.com/hachikyo/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6461516785649128582", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%98%EC%BF%84+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "로바타 오이소": {
        photos: ["/images/sapporo/info/restaurants/robata-ohiso-sapporo.jpg"],
        summary: "炉端とおでん 呼炉凪来 すすきの店 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해산물 구이", "평점 4.7", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물 구이", items: [{ name: "대표 메뉴", price: "¥4,000~8,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00 ~ 오전 12:00; 화요일: 오후 4:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://koronagirai-susukino.owst.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15216797622946947441", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EB%B0%94%ED%83%80+%EC%98%A4%EC%9D%B4%EC%86%8C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "롯카테이 삿포로 본점": {
        photos: ["/images/sapporo/info/restaurants/rokkatei-sapporo-main-store.jpg"],
        summary: "롯카테이 삿포로 본점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["버터샌드·디저트", "평점 4.3", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "버터샌드·디저트", items: [{ name: "대표 메뉴", price: "¥700~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 5:30; 화요일: 오전 10:00 ~ 오후 5:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.rokkatei.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7699630425760249374", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%AF%EC%B9%B4%ED%85%8C%EC%9D%B4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EB%B3%B8%EC%A0%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "기타카로 삿포로 본관": {
        photos: ["/images/sapporo/info/restaurants/kitakaro-sapporo-honkan.jpg"],
        summary: "키타카로 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["슈크림·과자", "평점 4.2", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "슈크림·과자", items: [{ name: "대표 메뉴", price: "¥700~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.kitakaro.com/ext/tenpo/sapporohonkan.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13887124307819441845", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B0%ED%83%80%EC%B9%B4%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EB%B3%B8%EA%B4%80+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 밀크 빌리지": {
        photos: ["/images/sapporo/info/restaurants/sapporo-milk-village.jpg"],
        summary: "Familymart Village Sapporo Shop 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["아이스크림", "평점 5", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "아이스크림", items: [{ name: "대표 메뉴", price: "¥1,000~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://store.family.co.jp/points/80366", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5697398992746811025", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%EB%B0%80%ED%81%AC+%EB%B9%8C%EB%A6%AC%EC%A7%80+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "키노토야 베이크 폴타운": {
        photos: ["/images/sapporo/info/restaurants/kinotoya-bake-pole-town-sapporo.jpg"],
        summary: "키노토야 베이크 폴타운점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["치즈타르트", "평점 4.6", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "치즈타르트", items: [{ name: "대표 메뉴", price: "¥500~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.kinotoya.com/shop_list/poultown/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16236524850216778594", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A4%EB%85%B8%ED%86%A0%EC%95%BC+%EB%B2%A0%EC%9D%B4%ED%81%AC+%ED%8F%B4%ED%83%80%EC%9A%B4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미쿠니 삿포로": {
        photos: ["/images/sapporo/info/restaurants/mikuni-sapporo.jpg"],
        summary: "홋카이도의 신선한 제철 식재료를 품격 있는 코스로 즐기는 프리미엄 일식 레스토랑.",
        updatedAt: "2026-07-13",
        highlights: ["최상급 홋카이도 식재료 사용", "정갈하고 고급스러운 가이세키 스타일"],
        tips: ["스테라플레이스 내 위치해 쇼핑 후 방문하기 편리해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "홋카이도 식재료 코스", items: [{ name: "대표 메뉴", price: "¥10,000~25,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:00, 오후 5:30~9:30; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.jrhotels.co.jp/tower/restaurant/mikuni/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11230427060500110058", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%BF%A0%EB%8B%88+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "프렌치 레스토랑 방케": {
        photos: ["/images/sapporo/info/restaurants/french-restaurant-banquet-sapporo.jpg"],
        summary: "아카렌가 테라스에서 즐기는 로맨틱하고 세련된 프랑스 코스 요리.",
        updatedAt: "2026-07-13",
        highlights: ["분위기 있는 프렌치 코스 요리", "아카렌가 테라스의 멋진 전망"],
        tips: ["특별한 기념일이나 데이트 코스로 강력 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "코스 요리", items: [{ name: "대표 메뉴", price: "¥8,000~20,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:00; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.la-brique.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=864479889962773109", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EB%A0%8C%EC%B9%98+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B0%A9%EC%BC%80+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "팜 투 테이블 테라": {
        photos: ["/images/sapporo/info/restaurants/farm-to-table-terra-sapporo.jpg"],
        summary: "홋카이도 농장의 신선함을 식탁으로 그대로 옮겨온 건강하고 담백한 맛.",
        updatedAt: "2026-07-13",
        highlights: ["산지 직송 홋카이도 식재료", "건강을 생각한 신선한 메뉴 구성"],
        tips: ["식재료 본연의 깔끔한 맛을 선호하는 분들께 딱이에요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "홋카이도 식재료", items: [{ name: "대표 메뉴", price: "¥3,000~8,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:00, 오후 6:00~10:00; 화요일: 오전 11:30 ~ 오후 2:00, 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sapporo-terra.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13791573901909715394", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%9C+%ED%88%AC+%ED%85%8C%EC%9D%B4%EB%B8%94+%ED%85%8C%EB%9D%BC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 징기스칸 본점": {
        photos: ["/images/sapporo/info/restaurants/sapporo-genghis-khan-honten.jpg"],
        summary: "삿포로 징기스칸 본점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["양고기 구이", "평점 4", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "양고기 구이", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~10:00; 화요일: 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sapporo-jingisukan.gorp.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18048047178651027479", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%A7%95%EA%B8%B0%EC%8A%A4%EC%B9%B8+%EB%B3%B8%EC%A0%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "토리마츠": {
        photos: ["/images/sapporo/info/restaurants/torimatsu-sapporo.jpg"],
        summary: "토리이치 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["닭꼬치·이자카야", "평점 4.9", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "닭꼬치·이자카야", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://toriichi-sapporo.com/?utm_source=google&utm_medium=meo", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17201026048115938417", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%A0%EB%A6%AC%EB%A7%88%EC%B8%A0+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 라멘 하루카": {
        photos: ["/images/sapporo/info/restaurants/sapporo-ramen-haruka.jpg"],
        summary: "라멘 하루카 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["삿포로 미소 라멘", "평점 4.8", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "삿포로 미소 라멘", items: [{ name: "대표 메뉴", price: "¥900~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~11:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.ramenharuka.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18191763978182280290", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%EB%9D%BC%EB%A9%98+%ED%95%98%EB%A3%A8%EC%B9%B4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
