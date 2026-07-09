import type { RestaurantInfo } from '@/data/card-info-types';

const info: Record<string, RestaurantInfo> = {
    "로쿠린샤 도쿄역점": {
        photos: ["/images/tokyo/info/restaurants/rokurinsha.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 라멘 맛집입니다. 핵심 메뉴는 츠케멘이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 츠케멘", "예상 가격대: ¥1,000~1,500", "특징: 도쿄역, 라멘스트리트"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "츠케멘",
            items: [{ name: "츠케멘", price: "¥1,000~1,500" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "11:00-23:00",
        waitTime: "피크타임 30~90분",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EC%BF%A0%EB%A6%B0%EC%83%A4%20%EB%8F%84%EC%BF%84%EC%97%AD%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "이치란 시부야점": {
        photos: ["/images/tokyo/info/restaurants/ichiran.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 라멘 맛집입니다. 핵심 메뉴는 돈코츠 라멘이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 돈코츠 라멘", "예상 가격대: ¥1,000~1,500", "특징: 1인 좌석, 한국어 주문지"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "돈코츠 라멘",
            items: [{ name: "돈코츠 라멘", price: "¥1,000~1,500" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "24시간",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%B9%98%EB%9E%80%20%EC%8B%9C%EB%B6%80%EC%95%BC%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "우오베이 시부야 도겐자카점": {
        photos: ["/images/tokyo/info/restaurants/uobei.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 초밥 맛집입니다. 핵심 메뉴는 고속 레일 초밥이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 고속 레일 초밥", "예상 가격대: ¥1,500~3,000", "특징: 가성비, 태블릿 주문"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "고속 레일 초밥",
            items: [{ name: "고속 레일 초밥", price: "¥1,500~3,000" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "11:00-22:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EC%98%A4%EB%B2%A0%EC%9D%B4%20%EC%8B%9C%EB%B6%80%EC%95%BC%20%EB%8F%84%EA%B2%90%EC%9E%90%EC%B9%B4%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "규카츠 모토무라 신주쿠 미나미구치점": {
        photos: ["/images/tokyo/info/restaurants/gyukatsu-motomura.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 규카츠 맛집입니다. 핵심 메뉴는 소고기 카츠이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 소고기 카츠", "예상 가격대: ¥1,500~2,500", "특징: 직접 굽기, 웨이팅"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "소고기 카츠",
            items: [{ name: "소고기 카츠", price: "¥1,500~2,500" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "11:00-22:00",
        waitTime: "피크타임 30~90분",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%9C%EC%B9%B4%EC%B8%A0%20%EB%AA%A8%ED%86%A0%EB%AC%B4%EB%9D%BC%20%EC%8B%A0%EC%A3%BC%EC%BF%A0%20%EB%AF%B8%EB%82%98%EB%AF%B8%EA%B5%AC%EC%B9%98%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "긴자 바이린 본점": {
        photos: ["/images/tokyo/info/restaurants/ginza-bairin.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 돈카츠 맛집입니다. 핵심 메뉴는 가츠동·돈카츠이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 가츠동·돈카츠", "예상 가격대: ¥1,500~3,000", "특징: 긴자, 돈카츠"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "가츠동·돈카츠",
            items: [{ name: "가츠동·돈카츠", price: "¥1,500~3,000" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "11:30-20:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90%20%EB%B0%94%EC%9D%B4%EB%A6%B0%20%EB%B3%B8%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "츠지한 니혼바시 본점": {
        photos: ["/images/tokyo/info/restaurants/tsujihan.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 해산물 맛집입니다. 핵심 메뉴는 제이타쿠동이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 제이타쿠동", "예상 가격대: ¥1,500~2,500", "특징: 카이센동, 웨이팅"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "제이타쿠동",
            items: [{ name: "제이타쿠동", price: "¥1,500~2,500" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "11:00-21:00",
        waitTime: "피크타임 30~90분",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B8%A0%EC%A7%80%ED%95%9C%20%EB%8B%88%ED%98%BC%EB%B0%94%EC%8B%9C%20%EB%B3%B8%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "스시노미도리 시부야점": {
        photos: ["/images/tokyo/info/restaurants/sushi-no-midori.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 스시 맛집입니다. 핵심 메뉴는 초밥 세트이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 초밥 세트", "예상 가격대: ¥2,000~4,000", "특징: 가성비 스시, 시부야"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "초밥 세트",
            items: [{ name: "초밥 세트", price: "¥2,000~4,000" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "11:00-22:00",
        waitTime: "피크타임 30~90분",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%8B%9C%EB%85%B8%EB%AF%B8%EB%8F%84%EB%A6%AC%20%EC%8B%9C%EB%B6%80%EC%95%BC%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "네무로 하나마루 KITTE 마루노우치점": {
        photos: ["/images/tokyo/info/restaurants/nemuro-hanamaru.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 초밥 맛집입니다. 핵심 메뉴는 홋카이도 회전초밥이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 홋카이도 회전초밥", "예상 가격대: ¥2,000~4,000", "특징: KITTE, 회전초밥"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "홋카이도 회전초밥",
            items: [{ name: "홋카이도 회전초밥", price: "¥2,000~4,000" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "11:00-22:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%84%A4%EB%AC%B4%EB%A1%9C%20%ED%95%98%EB%82%98%EB%A7%88%EB%A3%A8%20KITTE%20%EB%A7%88%EB%A3%A8%EB%85%B8%EC%9A%B0%EC%B9%98%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "돈카츠 마이센 아오야마 본점": {
        photos: ["/images/tokyo/info/restaurants/maisen.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 돈카츠 맛집입니다. 핵심 메뉴는 쿠로부타 돈카츠이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 쿠로부타 돈카츠", "예상 가격대: ¥2,000~4,000", "특징: 오모테산도, 가족"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "쿠로부타 돈카츠",
            items: [{ name: "쿠로부타 돈카츠", price: "¥2,000~4,000" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "11:00-21:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%88%EC%B9%B4%EC%B8%A0%20%EB%A7%88%EC%9D%B4%EC%84%BC%20%EC%95%84%EC%98%A4%EC%95%BC%EB%A7%88%20%EB%B3%B8%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "AFURI 하라주쿠점": {
        photos: ["/images/tokyo/info/restaurants/afuri.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 라멘 맛집입니다. 핵심 메뉴는 유자시오 라멘이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 유자시오 라멘", "예상 가격대: ¥1,200~2,000", "특징: 유자라멘, 하라주쿠"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "유자시오 라멘",
            items: [{ name: "유자시오 라멘", price: "¥1,200~2,000" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "10:30-22:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=AFURI%20%ED%95%98%EB%9D%BC%EC%A3%BC%EC%BF%A0%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "멘야 무사시 신주쿠 본점": {
        photos: ["/images/tokyo/info/restaurants/menya-musashi.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 라멘 맛집입니다. 핵심 메뉴는 츠케멘·라멘이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 츠케멘·라멘", "예상 가격대: ¥1,000~1,500", "특징: 신주쿠, 진한 국물"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "츠케멘·라멘",
            items: [{ name: "츠케멘·라멘", price: "¥1,000~1,500" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "11:00-22:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%98%EC%95%BC%20%EB%AC%B4%EC%82%AC%EC%8B%9C%20%EC%8B%A0%EC%A3%BC%EC%BF%A0%20%EB%B3%B8%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "풍운아 신주쿠": {
        photos: ["/images/tokyo/info/restaurants/fuunji.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 라멘 맛집입니다. 핵심 메뉴는 닭백탕 츠케멘이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 닭백탕 츠케멘", "예상 가격대: ¥1,000~1,500", "특징: 츠케멘, 신주쿠"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "닭백탕 츠케멘",
            items: [{ name: "닭백탕 츠케멘", price: "¥1,000~1,500" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "11:00-21:00",
        waitTime: "피크타임 30~90분",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%92%8D%EC%9A%B4%EC%95%84%20%EC%8B%A0%EC%A3%BC%EC%BF%A0%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "츠키지 스시세이 본점": {
        photos: ["/images/tokyo/info/restaurants/tsukiji-sushisei.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 스시 맛집입니다. 핵심 메뉴는 니기리 세트이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 니기리 세트", "예상 가격대: ¥3,000~6,000", "특징: 츠키지, 스시"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "니기리 세트",
            items: [{ name: "니기리 세트", price: "¥3,000~6,000" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "10:30-21:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B8%A0%ED%82%A4%EC%A7%80%20%EC%8A%A4%EC%8B%9C%EC%84%B8%EC%9D%B4%20%EB%B3%B8%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "츠키지 이타도리 별관": {
        photos: ["/images/tokyo/info/restaurants/tsukiji-itadori.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 해산물 맛집입니다. 핵심 메뉴는 카이센동이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 카이센동", "예상 가격대: ¥2,000~4,000", "특징: 아침식사, 해산물"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "카이센동",
            items: [{ name: "카이센동", price: "¥2,000~4,000" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "07:00-15:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B8%A0%ED%82%A4%EC%A7%80%20%EC%9D%B4%ED%83%80%EB%8F%84%EB%A6%AC%20%EB%B3%84%EA%B4%80%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "아사쿠사 규카츠": {
        photos: ["/images/tokyo/info/restaurants/asakusa-gyukatsu.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 규카츠 맛집입니다. 핵심 메뉴는 규카츠 정식이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 규카츠 정식", "예상 가격대: ¥1,800~2,800", "특징: 아사쿠사, 직접 굽기"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "규카츠 정식",
            items: [{ name: "규카츠 정식", price: "¥1,800~2,800" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "11:00-22:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%82%AC%EC%BF%A0%EC%82%AC%20%EA%B7%9C%EC%B9%B4%EC%B8%A0%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "다이코쿠야 텐푸라 본점": {
        photos: ["/images/tokyo/info/restaurants/daikokuya-tempura.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 덴푸라 맛집입니다. 핵심 메뉴는 텐동이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 텐동", "예상 가격대: ¥2,000~3,500", "특징: 아사쿠사, 텐동"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "텐동",
            items: [{ name: "텐동", price: "¥2,000~3,500" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "11:10-20:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9D%B4%EC%BD%94%EC%BF%A0%EC%95%BC%20%ED%85%90%ED%91%B8%EB%9D%BC%20%EB%B3%B8%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "긴자 카가리 본점": {
        photos: ["/images/tokyo/info/restaurants/ginza-kagari.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 라멘 맛집입니다. 핵심 메뉴는 토리파이탄 소바이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 토리파이탄 소바", "예상 가격대: ¥1,200~2,000", "특징: 긴자, 닭백탕"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "토리파이탄 소바",
            items: [{ name: "토리파이탄 소바", price: "¥1,200~2,000" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "11:00-22:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90%20%EC%B9%B4%EA%B0%80%EB%A6%AC%20%EB%B3%B8%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "츠루톤탄 신주쿠점": {
        photos: ["/images/tokyo/info/restaurants/tsurutontan.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 우동 맛집입니다. 핵심 메뉴는 크림 우동이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 크림 우동", "예상 가격대: ¥1,500~3,000", "특징: 대형 그릇, 우동"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "크림 우동",
            items: [{ name: "크림 우동", price: "¥1,500~3,000" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "11:00-23:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B8%A0%EB%A3%A8%ED%86%A4%ED%83%84%20%EC%8B%A0%EC%A3%BC%EC%BF%A0%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "토리키조쿠 시부야 센터가이점": {
        photos: ["/images/tokyo/info/restaurants/torikizoku.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 야키토리 맛집입니다. 핵심 메뉴는 균일가 꼬치이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 균일가 꼬치", "예상 가격대: ¥2,000~3,500", "특징: 이자카야, 가성비"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "균일가 꼬치",
            items: [{ name: "균일가 꼬치", price: "¥2,000~3,500" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "17:00-04:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%A0%EB%A6%AC%ED%82%A4%EC%A1%B0%EC%BF%A0%20%EC%8B%9C%EB%B6%80%EC%95%BC%20%EC%84%BC%ED%84%B0%EA%B0%80%EC%9D%B4%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "카츠쿠라 신주쿠 타카시마야점": {
        photos: ["/images/tokyo/info/restaurants/katsukura.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 돈카츠 맛집입니다. 핵심 메뉴는 돈카츠 정식이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 돈카츠 정식", "예상 가격대: ¥1,800~3,000", "특징: 백화점, 가족"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "돈카츠 정식",
            items: [{ name: "돈카츠 정식", price: "¥1,800~3,000" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "11:00-22:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%B8%A0%EC%BF%A0%EB%9D%BC%20%EC%8B%A0%EC%A3%BC%EC%BF%A0%20%ED%83%80%EC%B9%B4%EC%8B%9C%EB%A7%88%EC%95%BC%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "몬자 쿠라 츠키시마": {
        photos: ["/images/tokyo/info/restaurants/monja-kura.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 몬자야키 맛집입니다. 핵심 메뉴는 명란치즈 몬자이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 명란치즈 몬자", "예상 가격대: ¥2,000~3,500", "특징: 츠키시마, 몬자야키"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "명란치즈 몬자",
            items: [{ name: "명란치즈 몬자", price: "¥2,000~3,500" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "11:00-22:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%AC%EC%9E%90%20%EC%BF%A0%EB%9D%BC%20%EC%B8%A0%ED%82%A4%EC%8B%9C%EB%A7%88%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "소메타로 아사쿠사": {
        photos: ["/images/tokyo/info/restaurants/sometaro.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 오코노미야키 맛집입니다. 핵심 메뉴는 오코노미야키이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 오코노미야키", "예상 가격대: ¥1,500~3,000", "특징: 아사쿠사, 노포"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "오코노미야키",
            items: [{ name: "오코노미야키", price: "¥1,500~3,000" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "12:00-22:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%8C%EB%A9%94%ED%83%80%EB%A1%9C%20%EC%95%84%EC%82%AC%EC%BF%A0%EC%82%AC%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "카라시비 미소라멘 키칸보 칸다 본점": {
        photos: ["/images/tokyo/info/restaurants/kikanbo.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 라멘 맛집입니다. 핵심 메뉴는 매운 미소라멘이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 매운 미소라멘", "예상 가격대: ¥1,000~1,500", "특징: 매운맛, 칸다"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "매운 미소라멘",
            items: [{ name: "매운 미소라멘", price: "¥1,000~1,500" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "11:00-21:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%9D%BC%EC%8B%9C%EB%B9%84%20%EB%AF%B8%EC%86%8C%EB%9D%BC%EB%A9%98%20%ED%82%A4%EC%B9%B8%EB%B3%B4%20%EC%B9%B8%EB%8B%A4%20%EB%B3%B8%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "긴자 우카이테이": {
        photos: ["/images/tokyo/info/restaurants/ukaitei.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 철판요리 맛집입니다. 핵심 메뉴는 와규 철판 코스이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 와규 철판 코스", "예상 가격대: ¥20,000~40,000", "특징: 예약 권장, 기념일"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "와규 철판 코스",
            items: [{ name: "와규 철판 코스", price: "¥20,000~40,000" }]
        },
        reservation: { required: true, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "12:00-22:00",
        waitTime: "예약 중심",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90%20%EC%9A%B0%EC%B9%B4%EC%9D%B4%ED%85%8C%EC%9D%B4%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "나리사와": {
        photos: ["/images/tokyo/info/restaurants/narisawa.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 이노베이티브 맛집입니다. 핵심 메뉴는 사토야마 코스이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 사토야마 코스", "예상 가격대: ¥35,000~60,000", "특징: 파인다이닝, 예약 필수"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "사토야마 코스",
            items: [{ name: "사토야마 코스", price: "¥35,000~60,000" }]
        },
        reservation: { required: true, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "12:00-23:00",
        waitTime: "예약 중심",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EB%A6%AC%EC%82%AC%EC%99%80%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "긴자 코쥬": {
        photos: ["/images/tokyo/info/restaurants/ginza-koju.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 카이세키 맛집입니다. 핵심 메뉴는 계절 카이세키이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 계절 카이세키", "예상 가격대: ¥30,000~50,000", "특징: 카이세키, 예약 필수"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "계절 카이세키",
            items: [{ name: "계절 카이세키", price: "¥30,000~50,000" }]
        },
        reservation: { required: true, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "12:00-22:00",
        waitTime: "예약 중심",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90%20%EC%BD%94%EC%A5%AC%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "bills 오모테산도": {
        photos: ["/images/tokyo/info/restaurants/bills.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 브런치 맛집입니다. 핵심 메뉴는 리코타 핫케이크이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 리코타 핫케이크", "예상 가격대: ¥2,000~4,000", "특징: 브런치, 오모테산도"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "리코타 핫케이크",
            items: [{ name: "리코타 핫케이크", price: "¥2,000~4,000" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "08:30-22:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=bills%20%EC%98%A4%EB%AA%A8%ED%85%8C%EC%82%B0%EB%8F%84%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "행복한 팬케이크 오모테산도점": {
        photos: ["/images/tokyo/info/restaurants/happy-pancake.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 디저트 맛집입니다. 핵심 메뉴는 수플레 팬케이크이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 수플레 팬케이크", "예상 가격대: ¥1,500~2,500", "특징: 수플레, 카페"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "수플레 팬케이크",
            items: [{ name: "수플레 팬케이크", price: "¥1,500~2,500" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "10:00-20:00",
        waitTime: "피크타임 30~90분",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%96%89%EB%B3%B5%ED%95%9C%20%ED%8C%AC%EC%BC%80%EC%9D%B4%ED%81%AC%20%EC%98%A4%EB%AA%A8%ED%85%8C%EC%82%B0%EB%8F%84%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "잇푸도 긴자점": {
        photos: ["/images/tokyo/info/restaurants/ippudo.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 라멘 맛집입니다. 핵심 메뉴는 하카타 돈코츠이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 하카타 돈코츠", "예상 가격대: ¥1,000~1,800", "특징: 돈코츠, 긴자"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "하카타 돈코츠",
            items: [{ name: "하카타 돈코츠", price: "¥1,000~1,800" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "11:00-23:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%87%ED%91%B8%EB%8F%84%20%EA%B8%B4%EC%9E%90%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    },
    "오니기리 봉고": {
        photos: ["/images/tokyo/info/restaurants/onigiri-bongo.jpg"],
        summary: "최근 도쿄 여행 후기에서 반복 언급되는 오니기리 맛집입니다. 핵심 메뉴는 수제 오니기리이며, 일정에 넣기 쉬운 대표 후보입니다.",
        updatedAt: "2026-07-08",
        highlights: ["대표 메뉴: 수제 오니기리", "예상 가격대: ¥1,000~2,000", "특징: 오니기리, 웨이팅"],
        tips: ["식사 피크 시간은 대기가 길 수 있어 오픈 직후나 애매한 시간대를 권장합니다."],
        menu: {
            signature: "수제 오니기리",
            items: [{ name: "수제 오니기리", price: "¥1,000~2,000" }]
        },
        reservation: { required: false, method: "매장/공식 안내 확인", note: "방문 전 영업일과 예약 가능 여부 확인 권장" },
        hours: "11:30-23:00",
        waitTime: "피크타임 30~90분",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [{ label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%8B%88%EA%B8%B0%EB%A6%AC%20%EB%B4%89%EA%B3%A0%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 확인용" }]
    }
};

export default info;
