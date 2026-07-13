import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "마데스 와룽 스미냑": {
        photos: ["/images/bali/info/restaurants/made-warung-seminyak-bali.jpg"],
        summary: "Made's Warung Seminyak 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["나시짬뿌르·인도네시아 요리", "평점 4.4", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "나시짬뿌르·인도네시아 요리", items: [{ name: "대표 메뉴", price: "Rp80,000~300,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:30; 화요일: 오전 10:00 ~ 오후 11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://madeswarung.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16131526508964398769", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%8D%B0%EC%8A%A4+%EC%99%80%EB%A3%BD+%EC%8A%A4%EB%AF%B8%EB%83%91+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "와룽 니아 스미냑": {
        photos: ["/images/bali/info/restaurants/warung-nia-seminyak-bali.jpg"],
        summary: "Warung Nia Balinese Food & Pork Ribs 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["사테·발리식 세트", "평점 4.8", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "사테·발리식 세트", items: [{ name: "대표 메뉴", price: "Rp80,000~300,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://warungnia.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6851347901052579622", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%80%EB%A3%BD+%EB%8B%88%EC%95%84+%EC%8A%A4%EB%AF%B8%EB%83%91+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "바비굴링 팍 말렌": {
        photos: ["/images/bali/info/restaurants/babi-guling-pak-malen-seminyak-bali.jpg"],
        summary: "Warung Babi Guling Pak Malen 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["바비굴링", "평점 4.4", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "바비굴링", items: [{ name: "대표 메뉴", price: "Rp60,000~200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:30 ~ 오후 6:00; 화요일: 오전 8:30 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://warungbabigulingpakmalen.shop/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9416697504903492848", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EB%B9%84%EA%B5%B4%EB%A7%81+%ED%8C%8D+%EB%A7%90%EB%A0%8C+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "너티 누리스 스미냑": {
        photos: ["/images/bali/info/restaurants/naughty-nuri-s-warung-seminyak-bali.jpg"],
        summary: "Naughty Nuri's Warung Seminyak 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["폭립", "평점 4.7", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "폭립", items: [{ name: "대표 메뉴", price: "Rp150,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://naughtynurisseminyak.com/?utm_source=google_business_profile&utm_medium=googlemybusiness&utm_campaign=organic", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=312932031516420111", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%84%88%ED%8B%B0+%EB%88%84%EB%A6%AC%EC%8A%A4+%EC%8A%A4%EB%AF%B8%EB%83%91+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시스터필즈 스미냑": {
        photos: ["/images/bali/info/restaurants/sisterfields-seminyak-bali.jpg"],
        summary: "Sisterfields 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["브런치·커피", "평점 4.8", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "브런치·커피", items: [{ name: "대표 메뉴", price: "Rp120,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 9:00; 화요일: 오전 7:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.sisterfieldsbali.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17649253168143105766", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EC%8A%A4%ED%84%B0%ED%95%84%EC%A6%88+%EC%8A%A4%EB%AF%B8%EB%83%91+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리볼버 에스프레소": {
        photos: ["/images/bali/info/restaurants/revolver-espresso-seminyak-bali.jpg"],
        summary: "Revolver Seminyak 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["커피·브런치", "평점 4.6", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커피·브런치", items: [{ name: "대표 메뉴", price: "Rp80,000~300,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 11:00; 화요일: 오전 7:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://revolverbali.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14907830140720061922", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EB%B3%BC%EB%B2%84+%EC%97%90%EC%8A%A4%ED%94%84%EB%A0%88%EC%86%8C+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "모텔 멕시콜라": {
        photos: ["/images/bali/info/restaurants/motel-mexicola-seminyak-bali.jpg"],
        summary: "모텔 멕시콜라 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["타코·칵테일", "평점 4.5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "타코·칵테일", items: [{ name: "대표 메뉴", price: "Rp150,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 1:00; 화요일: 오전 11:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://motelmexicola.info/seminyak/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8918179604645274251", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%ED%85%94+%EB%A9%95%EC%8B%9C%EC%BD%9C%EB%9D%BC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "메라 푸티": {
        photos: ["/images/bali/info/restaurants/merah-putih-seminyak-bali.png"],
        summary: "메라 푸티 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["현대식 인도네시아 요리", "평점 4.5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "현대식 인도네시아 요리", items: [{ name: "대표 메뉴", price: "Rp300,000~900,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 5:30~10:30; 화요일: 오후 12:00~3:00, 오후 5:30~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://merahputihbali.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4693021978644793389", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EB%9D%BC+%ED%91%B8%ED%8B%B0+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라 루치올라": {
        photos: ["/images/bali/info/restaurants/la-lucciola-seminyak-bali.jpg"],
        summary: "La Lucciola 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["비치프런트 이탈리안", "평점 4.5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "비치프런트 이탈리안", items: [{ name: "대표 메뉴", price: "Rp300,000~900,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오전 12:00; 화요일: 오전 9:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://lalucciolabali.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17294473705291165195", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC+%EB%A3%A8%EC%B9%98%EC%98%AC%EB%9D%BC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사딘 스미냑": {
        photos: ["/images/bali/info/restaurants/sardine-seminyak-bali.jpg"],
        summary: "Sardine Restaurant 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해산물·논뷰 다이닝", "평점 4.6", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물·논뷰 다이닝", items: [{ name: "대표 메뉴", price: "Rp300,000~900,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 4:00, 오후 6:00 ~ 오전 12:00; 화요일: 오전 11:30 ~ 오후 4:00, 오후 6:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.sardineseminyak.com/?utm_source=website&utm_medium=organic&utm_campaign=google_business_sardine_seminyak&utm_content=maps_listing", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12937439822255164406", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EB%94%98+%EC%8A%A4%EB%AF%B8%EB%83%91+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "로카보어 우붓": {
        photos: ["/images/bali/info/restaurants/locavore-ubud-bali.jpg"],
        summary: "Locavore NXT 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["테이스팅 메뉴", "평점 4.8", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "테이스팅 메뉴", items: [{ name: "대표 메뉴", price: "Rp800,000~2,500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:30~8:30; 화요일: 오후 5:30~8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://locavorenxt.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6517086824827002704", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EC%B9%B4%EB%B3%B4%EC%96%B4+%EC%9A%B0%EB%B6%93+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "후잔 로칼 우붓": {
        photos: ["/images/bali/info/restaurants/hujan-locale-ubud-bali.jpg"],
        summary: "Hujan Locale 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["인도네시아 가정식 재해석", "평점 4.6", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "인도네시아 가정식 재해석", items: [{ name: "대표 메뉴", price: "Rp200,000~700,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~10:00; 화요일: 오후 12:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hujanlocale.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=319516867173986024", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9B%84%EC%9E%94+%EB%A1%9C%EC%B9%BC+%EC%9A%B0%EB%B6%93+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이부 오카 우붓": {
        photos: ["/images/bali/info/restaurants/ibu-oka-ubud-bali.jpg"],
        summary: "Warung Babi Guling Ibu Oka 2 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["바비굴링", "평점 4.1", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "바비굴링", items: [{ name: "대표 메뉴", price: "Rp60,000~200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 6:00; 화요일: 오전 11:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8437019137414022681", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EB%B6%80+%EC%98%A4%EC%B9%B4+%EC%9A%B0%EB%B6%93+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "베벡 벵길 우붓": {
        photos: ["/images/bali/info/restaurants/bebek-bengil-ubud-bali.jpg"],
        summary: "Bebek Bengil 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["크리스피 덕", "평점 4.3", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "크리스피 덕", items: [{ name: "대표 메뉴", price: "Rp120,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12804855114863431426", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%EB%B2%A1+%EB%B2%B5%EA%B8%B8+%EC%9A%B0%EB%B6%93+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "클리어 카페 우붓": {
        photos: ["/images/bali/info/restaurants/clear-cafe-ubud-bali.jpg"],
        summary: "Clear Cafe 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스무디·채식 메뉴", "평점 4.3", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스무디·채식 메뉴", items: [{ name: "대표 메뉴", price: "Rp100,000~350,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://clearcafebali.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7387097257041676185", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%B4%EB%A6%AC%EC%96%B4+%EC%B9%B4%ED%8E%98+%EC%9A%B0%EB%B6%93+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "워터크레스 카페 짱구": {
        photos: ["/images/bali/info/restaurants/watercress-cafe-canggu-bali.jpg"],
        summary: "Watercress Seminyak 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["브런치·샐러드", "평점 4.7", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "브런치·샐러드", items: [{ name: "대표 메뉴", price: "Rp100,000~350,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 9:00; 화요일: 오전 7:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1233079210123183473", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9B%8C%ED%84%B0%ED%81%AC%EB%A0%88%EC%8A%A4+%EC%B9%B4%ED%8E%98+%EC%A7%B1%EA%B5%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크레이트 카페 짱구": {
        photos: ["/images/bali/info/restaurants/crate-cafe-canggu-bali.jpg"],
        summary: "Crate Cafe 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["브런치·커피", "평점 4.2", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "브런치·커피", items: [{ name: "대표 메뉴", price: "Rp80,000~300,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 10:00; 화요일: 오전 6:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17061625332193172174", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A0%88%EC%9D%B4%ED%8A%B8+%EC%B9%B4%ED%8E%98+%EC%A7%B1%EA%B5%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 셰이디 쉑 짱구": {
        photos: ["/images/bali/info/restaurants/the-shady-shack-canggu-bali.jpg"],
        summary: "Shady Shack 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["비건·브런치", "평점 4.5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "비건·브런치", items: [{ name: "대표 메뉴", price: "Rp100,000~350,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 10:30; 화요일: 오전 7:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.theshadyshackbali.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7712821590973585810", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%85%B0%EC%9D%B4%EB%94%94+%EC%89%91+%EC%A7%B1%EA%B5%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "메이슨 짱구": {
        photos: ["/images/bali/info/restaurants/mason-canggu-bali.jpg"],
        summary: "메종 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["그릴·칵테일", "평점 4.4", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "그릴·칵테일", items: [{ name: "대표 메뉴", price: "Rp200,000~700,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00 ~ 오전 12:00; 화요일: 오후 12:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://masonrybali.com/canggu", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15056148053939633613", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EC%9D%B4%EC%8A%A8+%EC%A7%B1%EA%B5%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라칼리타 짱구": {
        photos: ["/images/bali/info/restaurants/lacalita-canggu-bali.jpg"],
        summary: "LACALITA Canggu 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["타코·마가리타", "평점 4.4", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "타코·마가리타", items: [{ name: "대표 메뉴", price: "Rp150,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00 ~ 오전 12:00; 화요일: 오후 12:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.lacalitabali.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7255732932097445828", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%B9%BC%EB%A6%AC%ED%83%80+%EC%A7%B1%EA%B5%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "메네가 카페 짐바란": {
        photos: ["/images/bali/info/restaurants/menega-cafe-jimbaran-bali.jpg"],
        summary: "Menega Cafe 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["짐바란 해산물 BBQ", "평점 4.2", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "짐바란 해산물 BBQ", items: [{ name: "대표 메뉴", price: "Rp200,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=525940909053017257", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EB%84%A4%EA%B0%80+%EC%B9%B4%ED%8E%98+%EC%A7%90%EB%B0%94%EB%9E%80+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "키식 씨푸드 바 앤 그릴": {
        photos: ["/images/bali/info/restaurants/kisik-seafood-bar-and-grill-bali.jpg"],
        summary: "Kisik Seafood Bar and Grill 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해변 해산물 다이닝", "평점 4.4", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해변 해산물 다이닝", items: [{ name: "대표 메뉴", price: "Rp400,000~1,500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:30~11:00; 화요일: 오후 5:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.ayana.com/bali/dining/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17047026479082017062", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A4%EC%8B%9D+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%B0%94+%EC%95%A4+%EA%B7%B8%EB%A6%B4+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "싱글핀 울루와투": {
        photos: ["/images/bali/info/restaurants/single-fin-uluwatu-bali.jpg"],
        summary: "Single Fin Bali 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["선셋 다이닝·칵테일", "평점 4.6", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "선셋 다이닝·칵테일", items: [{ name: "대표 메뉴", price: "Rp150,000~600,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.singlefinbali.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8300252496958847412", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%B1%EA%B8%80%ED%95%80+%EC%9A%B8%EB%A3%A8%EC%99%80%ED%88%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "수카 에스프레소 울루와투": {
        photos: ["/images/bali/info/restaurants/suka-espresso-uluwatu-bali.jpg"],
        summary: "SUKA ULUWATU 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["커피·브런치", "평점 4.8", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커피·브런치", items: [{ name: "대표 메뉴", price: "Rp80,000~300,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 10:00; 화요일: 오전 7:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.bysuka.com/suka-uluwatu", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13098045285516621583", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%98%EC%B9%B4+%EC%97%90%EC%8A%A4%ED%94%84%EB%A0%88%EC%86%8C+%EC%9A%B8%EB%A3%A8%EC%99%80%ED%88%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "엘 카브론 발리": {
        photos: ["/images/bali/info/restaurants/el-kabron-bali.jpg"],
        summary: "El Kabron 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["선셋 클럽 다이닝", "평점 4.7", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "선셋 클럽 다이닝", items: [{ name: "대표 메뉴", price: "Rp400,000~1,500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.elkabron.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11510000296391882398", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%98+%EC%B9%B4%EB%B8%8C%EB%A1%A0+%EB%B0%9C%EB%A6%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "붐부 발리 누사두아": {
        photos: ["/images/bali/info/restaurants/bumbu-bali-nusa-dua.jpg"],
        summary: "Bumbu Bali Restaurant & Cooking School 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["발리식 코스 요리", "평점 4.5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "발리식 코스 요리", items: [{ name: "대표 메뉴", price: "Rp200,000~700,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 6:00~9:30; 화요일: 오전 11:00 ~ 오후 3:00, 오후 6:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.artcafebumbubali.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6206183799471943657", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%90%EB%B6%80+%EB%B0%9C%EB%A6%AC+%EB%88%84%EC%82%AC%EB%91%90%EC%95%84+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "누사두아 비치 그릴": {
        photos: ["/images/bali/info/restaurants/nusa-dua-beach-grill-bali.jpg"],
        summary: "Nusa Dua Beach Grill 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해변 그릴·해산물", "평점 4.4", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해변 그릴·해산물", items: [{ name: "대표 메뉴", price: "Rp150,000~600,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:30 ~ 오후 10:00; 화요일: 오전 8:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.nusaduabeachgrill.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=61831618962365585", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%88%84%EC%82%AC%EB%91%90%EC%95%84+%EB%B9%84%EC%B9%98+%EA%B7%B8%EB%A6%B4+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "와룽 막벵 사누르": {
        photos: ["/images/bali/info/restaurants/warung-mak-beng-sanur-bali.jpg"],
        summary: "Warung Mak Beng 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["생선 수프·튀김", "평점 4.6", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "생선 수프·튀김", items: [{ name: "대표 메뉴", price: "Rp60,000~200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17042352545328762182", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%80%EB%A3%BD+%EB%A7%89%EB%B2%B5+%EC%82%AC%EB%88%84%EB%A5%B4+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마시모 사누르": {
        photos: ["/images/bali/info/restaurants/massimo-italian-restaurant-sanur-bali.png"],
        summary: "Massimo Italian Restaurant 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["젤라토·파스타", "평점 4.7", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "젤라토·파스타", items: [{ name: "대표 메뉴", price: "Rp150,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://massimobali.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7866022212850565545", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%8B%9C%EB%AA%A8+%EC%82%AC%EB%88%84%EB%A5%B4+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "소울 인 어 볼 사누르": {
        photos: ["/images/bali/info/restaurants/soul-in-a-bowl-sanur-bali.jpg"],
        summary: "Soul in a Bowl 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["브런치·커피", "평점 4.5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "브런치·커피", items: [{ name: "대표 메뉴", price: "Rp100,000~350,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18198655529358299313", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%8C%EC%9A%B8+%EC%9D%B8+%EC%96%B4+%EB%B3%BC+%EC%82%AC%EB%88%84%EB%A5%B4+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
