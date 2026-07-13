import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "락깐 레스토랑": {
        photos: ["/images/nha-trang/info/restaurants/lac-canh-restaurant-nha-trang.jpg"],
        summary: "숯불 향이 가득한 소고기 구이를 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-07-13",
        highlights: ["육즙 가득한 숯불 소고기", "현지 분위기 물씬"],
        tips: ["가성비 있게 고기를 즐기고 싶을 때 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "숯불 소고기 구이", items: [{ name: "대표 메뉴", price: "₫100,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:30 ~ 오후 9:00; 화요일: 오전 9:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.foody.vn/khanh-hoa/bo-nuong-lac-canh", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2952458743794068526", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BD%EA%B9%90+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "넴느엉 당반꾸엔": {
        photos: ["/images/nha-trang/info/restaurants/nem-nuong-dang-van-quyen-nha-trang.jpg"],
        summary: "나트랑 현지인들이 자주 찾는 넴느엉 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["바삭하고 고소한 넴느엉", "신선한 야채와 특제 소스"],
        tips: ["로컬의 진짜 맛을 느끼고 싶다면 꼭 가보세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "넴느엉", items: [{ name: "대표 메뉴", price: "₫50,000~200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 8:30; 화요일: 오전 7:30 ~ 오후 8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://nemdangvanquyen.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9159456414976441065", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%84%B4%EB%8A%90%EC%97%89+%EB%8B%B9%EB%B0%98%EA%BE%B8%EC%97%94+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "넴느엉 닌호아": {
        photos: ["/images/nha-trang/info/restaurants/nem-nuong-ninh-hoa-nha-trang.jpg"],
        summary: "평점이 매우 높은 믿고 먹는 넴느엉 전문점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["실패 없는 완벽한 맛", "높은 만족도"],
        tips: ["평점이 아주 높으니 방문 전 확인 필수!"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "넴느엉", items: [{ name: "대표 메뉴", price: "₫50,000~200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 10:30; 화요일: 오전 6:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11447275002939089685", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%84%B4%EB%8A%90%EC%97%89+%EB%8B%8C%ED%98%B8%EC%95%84+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "분까 응우옌 로안": {
        photos: ["/images/nha-trang/info/restaurants/bun-ca-nguyen-loan-nha-trang.jpg"],
        summary: "시원하고 담백한 국물이 일품인 생선쌀국수 맛집",
        updatedAt: "2026-07-13",
        highlights: ["깊은 풍미의 생선 육수", "현지 분위기 물씬"],
        tips: ["생선 향에 민감하다면 참고하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "생선쌀국수", items: [{ name: "대표 메뉴", price: "₫40,000~150,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 5:00 ~ 오후 10:00; 화요일: 오전 5:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1078060667865629271", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%84%EA%B9%8C+%EC%9D%91%EC%9A%B0%EC%98%8C+%EB%A1%9C%EC%95%88+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반깐 51": {
        photos: ["/images/nha-trang/info/restaurants/banh-can-51-nha-trang.jpg"],
        summary: "바삭한 식감이 매력적인 로컬 반깐 전문점",
        updatedAt: "2026-07-13",
        highlights: ["겉바속촉 반깐", "가성비 좋은 현지 맛집"],
        tips: ["소박한 현지 식당 분위기예요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "반깐", items: [{ name: "대표 메뉴", price: "₫40,000~150,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3103809981374497119", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%EA%B9%90+51+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반쎄오 차오 85": {
        photos: ["/images/nha-trang/info/restaurants/banh-xeo-chao-85-nha-trang.jpg"],
        summary: "높은 평점으로 검증된 바삭하고 고소한 반쎄오 맛집",
        updatedAt: "2026-07-13",
        highlights: ["바삭함이 살아있는 반쎄오", "검증된 현지인 맛집"],
        tips: ["웨이팅이 있을 수 있으니 참고하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "반쎄오", items: [{ name: "대표 메뉴", price: "₫50,000~200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14898010038579781827", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%EC%8E%84%EC%98%A4+%EC%B0%A8%EC%98%A4+85+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "보네 푸옥티엔": {
        photos: ["/images/nha-trang/info/restaurants/bo-ne-phuoc-thien-nha-trang.jpg"],
        summary: "Bò Né Hẻm 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["보네 철판 스테이크", "평점 5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "보네 철판 스테이크", items: [{ name: "대표 메뉴", price: "₫60,000~200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00~10:00; 화요일: 오전 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/RicardoKakavn?mibextid=LQQJ4d", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6289557321624824544", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%EB%84%A4+%ED%91%B8%EC%98%A5%ED%8B%B0%EC%97%94+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "옥 쑤언안": {
        photos: ["/images/nha-trang/info/restaurants/oc-xuan-anh-nha-trang.jpg"],
        summary: "꽌 옥쑤언안 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해산물·조개 요리", "평점 3.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물·조개 요리", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오전 12:00; 화요일: 오전 11:30 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13723289795669453510", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A5+%EC%91%A4%EC%96%B8%EC%95%88+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하이산 탄스엉": {
        photos: ["/images/nha-trang/info/restaurants/hai-san-thanh-suong-nha-trang.jpg"],
        summary: "Hải sản Thanh Sương 2 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로컬 해산물", "평점 4.4", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로컬 해산물", items: [{ name: "대표 메뉴", price: "₫150,000~700,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:30; 화요일: 오전 10:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://haisanthanhsuong.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16989201618745281132", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%9D%B4%EC%82%B0+%ED%83%84%EC%8A%A4%EC%97%89+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "옌스 레스토랑": {
        photos: ["/images/nha-trang/info/restaurants/nha-hang-yen-restaurant-nha-trang.jpg"],
        summary: "현지 느낌 가득한 정갈한 베트남 가정식을 맛볼 수 있는 곳",
        updatedAt: "2026-07-13",
        highlights: ["따뜻하고 정성스러운 로컬 가정식 메뉴", "높은 평점으로 검증된 현지인 맛집"],
        tips: ["진정한 베트남 로컬의 맛을 느끼고 싶을 때 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 가정식", items: [{ name: "대표 메뉴", price: "₫100,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3831036860284618946", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%8C%EC%8A%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "랜턴스 베트남 레스토랑": {
        photos: ["/images/nha-trang/info/restaurants/lanterns-vietnamese-restaurant-nha-trang.jpg"],
        summary: "빈컴 플라자에서 즐기는 풍성한 베트남 핫팟 요리",
        updatedAt: "2026-07-13",
        highlights: ["다양한 종류의 샤브샤브 메뉴", "쇼핑몰 내 위치해 뛰어난 접근성"],
        tips: ["쇼핑 후 깔끔하고 편리하게 식사하기 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 요리", items: [{ name: "대표 메뉴", price: "₫150,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://hotpotstory.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5658495031634414498", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%9C%ED%84%B4%EC%8A%A4+%EB%B2%A0%ED%8A%B8%EB%82%A8+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "세일링 클럽 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/sailing-club-nha-trang.jpg"],
        summary: "나트랑 해변의 낭만을 즐길 수 있는 비치 다이닝 명소",
        updatedAt: "2026-07-13",
        highlights: ["환상적인 오션뷰와 트렌디한 분위기", "칵테일과 함께 즐기는 저녁 식사"],
        tips: ["노을이 예쁜 일몰 시간에 맞춰 방문하면 인생샷 가능!"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해변 다이닝·칵테일", items: [{ name: "대표 메뉴", price: "₫200,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오전 2:00; 화요일: 오전 7:00 ~ 오전 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.sailingclubnhatrang.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13294210272972330636", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%B8%EC%9D%BC%EB%A7%81+%ED%81%B4%EB%9F%BD+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "루이지애나 브루하우스": {
        photos: ["/images/nha-trang/info/restaurants/louisiane-brewhouse-nha-trang.jpg"],
        summary: "Lousiane Brewhouse Nha Trang Restaurant & Craft Beer 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["수제맥주·비치 다이닝", "평점 4.3", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "수제맥주·비치 다이닝", items: [{ name: "대표 메뉴", price: "₫200,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오전 1:00; 화요일: 오전 7:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://louisianebrewhouse.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5109556596063558978", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A3%A8%EC%9D%B4%EC%A7%80%EC%95%A0%EB%82%98+%EB%B8%8C%EB%A3%A8%ED%95%98%EC%9A%B0%EC%8A%A4+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "믹스 레스토랑": {
        photos: ["/images/nha-trang/info/restaurants/mix-restaurant-nha-trang.jpg"],
        summary: "믹스 그리스 레스토랑 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["그릴·지중해 요리", "평점 4.6", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "그릴·지중해 요리", items: [{ name: "대표 메뉴", price: "₫200,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://3dmenustudio.com/mix-greek", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11214659987799403633", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B9%EC%8A%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "피타 GR": {
        photos: ["/images/nha-trang/info/restaurants/pita-gr-restaurant-nha-trang.jpg"],
        summary: "그릭 키친 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["기로스·피타", "평점 4.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "기로스·피타", items: [{ name: "대표 메뉴", price: "₫100,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17286891428455853102", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%ED%83%80+GR+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "알파카 홈스타일 카페": {
        photos: ["/images/nha-trang/info/restaurants/alpaca-homestyle-cafe-nha-trang.jpg"],
        summary: "나트랑에서 여유로운 아침을 즐기기 좋은 감성 브런치 카페",
        updatedAt: "2026-07-13",
        highlights: ["다양하고 맛있는 브런치 메뉴", "아늑하고 편안한 홈스타일 인테리어"],
        tips: ["여유로운 오전 시간에 방문하는 것을 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "브런치·커피", items: [{ name: "대표 메뉴", price: "₫100,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 9:30; 화요일: 오전 8:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/alpacanhatrang", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3103948771426530060", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%8C%ED%8C%8C%EC%B9%B4+%ED%99%88%EC%8A%A4%ED%83%80%EC%9D%BC+%EC%B9%B4%ED%8E%98+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "레인포레스트 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/rainforest-nha-trang.jpg"],
        summary: "정글 속에 온 듯한 이색적인 분위기의 테마 카페",
        updatedAt: "2026-07-13",
        highlights: ["인생샷 건지기 좋은 정글 컨셉 인테리어", "압도적인 비주얼의 공간 구성"],
        tips: ["사진 찍기 좋은 스팟이 많으니 카메라 준비 필수!"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "정글 콘셉트 카페", items: [{ name: "대표 메뉴", price: "₫80,000~300,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16994630397773571838", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%88%EC%9D%B8%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아이스드 커피 심플리 오리지널": {
        photos: ["/images/nha-trang/info/restaurants/iced-coffee-simply-original-nha-trang.jpg"],
        summary: "베트남 현지의 맛을 그대로 느낄 수 있는 시원한 아이스 커피 전문점",
        updatedAt: "2026-07-13",
        highlights: ["진하고 깔끔한 베트남식 커피 맛", "더위를 날려줄 시원한 메뉴"],
        tips: ["나트랑의 더운 오후, 갈증 해소용으로 딱이에요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 커피", items: [{ name: "대표 메뉴", price: "₫50,000~200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 10:30; 화요일: 오전 6:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://icedcoffee.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18404386528652923200", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9D%B4%EC%8A%A4%EB%93%9C+%EC%BB%A4%ED%94%BC+%EC%8B%AC%ED%94%8C%EB%A6%AC+%EC%98%A4%EB%A6%AC%EC%A7%80%EB%84%90+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "나트랑 뷰 레스토랑": {
        photos: ["/images/nha-trang/info/restaurants/nha-trang-view-restaurant.jpg"],
        summary: "Market Café at Hyatt Regency Nha Trang 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해변 전망 식사", "평점 5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해변 전망 식사", items: [{ name: "대표 메뉴", price: "₫200,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 10:30; 화요일: 오전 6:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18180513313375050742", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%ED%8A%B8%EB%9E%91+%EB%B7%B0+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코스타 씨푸드": {
        photos: ["/images/nha-trang/info/restaurants/costa-seafood-nha-trang.jpg"],
        summary: "코스타 씨푸드 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["프리미엄 해산물", "평점 4.1", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "프리미엄 해산물", items: [{ name: "대표 메뉴", price: "₫300,000~1,000,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30~10:00, 오전 11:00 ~ 오후 2:00, 오후 5:00~10:00; 화요일: 오전 6:30~10:00, 오전 11:00 ~ 오후 2:00, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9632974259285349130", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EC%8A%A4%ED%83%80+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
