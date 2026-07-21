import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "락깐 레스토랑": {
        photos: ["/images/nha-trang/info/restaurants/lac-canh-restaurant-nha-trang.jpg"],
        summary: "락깐 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["숯불 소고기 구이", "평점 3.7", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
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
        summary: "넴 느엉 당 반꾸엔 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["넴느엉", "평점 4.1", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
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
        summary: "Nem chua Nha Trang Nem Chua Ninh Hoa ngon 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["넴느엉", "평점 5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
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
        summary: "분 까 응우옌 로안 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["생선쌀국수", "평점 4", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
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
        summary: "반깐 51 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["반깐", "평점 3.2", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
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
        summary: "반 쎄오 짜오 85 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["반쎄오", "평점 4.3", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
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
        summary: "Tiệm Yến 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["베트남 가정식", "평점 5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
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
        summary: "Hotpot Story Vincom Trần Phú Nha Trang Restaurant 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["베트남 요리", "평점 4.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
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
        summary: "Sailing Club 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해변 다이닝·칵테일", "평점 4.2", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
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
        summary: "알파카 홈스타일 카페 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["브런치·커피", "평점 4.8", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
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
        summary: "Рейнфорест 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["정글 콘셉트 카페", "평점 5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
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
        summary: "아이스드 커피 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["베트남 커피", "평점 4.3", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
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
    "스카이라이트 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/skylight-nha-trang.jpg"],
        summary: "스카이라이트 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["루프톱 바·전망", "평점 4.6", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "루프톱 바·전망", items: [{ name: "대표 메뉴", price: "₫200,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오후 5:00 ~ 오전 12:45",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://skylightnhatrang.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4237274364947283575", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%B9%B4%EC%9D%B4%EB%9D%BC%EC%9D%B4%ED%8A%B8+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "응온 갤러리 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/nha-hang-ngon-gallery-nha-trang.jpg"],
        summary: "응온 갤러리 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["베트남 요리 뷔페", "평점 4.7", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 요리 뷔페", items: [{ name: "대표 메뉴", price: "₫300,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30~9:45, 오전 11:30 ~ 오후 1:45, 오후 5:00~9:45; 화요일: 오전 6:30~9:45, 오전 11:30 ~ 오후 1:45, 오후 5:00~9:45",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ngongalleryvn.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6007473449932114950", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%91%EC%98%A8+%EA%B0%A4%EB%9F%AC%EB%A6%AC+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스위스 하우스 라 카세롤": {
        photos: ["/images/nha-trang/info/restaurants/swiss-house-la-casserole-nha-trang.jpg"],
        summary: "안토이 2 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스위스·유럽 요리", "평점 4.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스위스·유럽 요리", items: [{ name: "대표 메뉴", price: "₫200,000~900,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:30 ~ 오후 9:30; 화요일: 오전 10:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/anthoi.vietnam/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8616602372252073345", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%9C%84%EC%8A%A4+%ED%95%98%EC%9A%B0%EC%8A%A4+%EB%9D%BC+%EC%B9%B4%EC%84%B8%EB%A1%A4+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그릭 수블라키 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/greek-souvlaki-nha-trang.jpg"],
        summary: "그릭 수블라키 냐짱 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["수블라키·기로스", "평점 4.7", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "수블라키·기로스", items: [{ name: "대표 메뉴", price: "₫100,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:30 ~ 오후 11:00; 화요일: 오전 9:30 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9890417582479538679", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%A6%AD+%EC%88%98%EB%B8%94%EB%9D%BC%ED%82%A4+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그릴 가든 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/grill-garden-nha-trang.jpg"],
        summary: "Vườn Nướng Grill Garden 2 (BBQ Buffet) 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해산물·고기 그릴", "평점 4.3", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물·고기 그릴", items: [{ name: "대표 메뉴", price: "₫200,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~10:00; 화요일: 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://facebook.com/grillgarden.vn", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10700388266070131444", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%A6%B4+%EA%B0%80%EB%93%A0+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "피스트 뷔페 쉐라톤 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/feast-buffet-nha-trang-sheraton.jpg"],
        summary: "Feast Restaurant Nha Trang 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해산물 뷔페", "평점 4.8", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물 뷔페", items: [{ name: "대표 메뉴", price: "₫500,000~1,200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30~11:00, 오후 5:00~9:00; 화요일: 오전 6:30~11:00, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.feastnhatrang.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7964546402146594343", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EC%8A%A4%ED%8A%B8+%EB%B7%94%ED%8E%98+%EC%89%90%EB%9D%BC%ED%86%A4+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스팀 앤 스파이스 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/steam-n-spice-nha-trang.jpg"],
        summary: "Steam n' Spice 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["딤섬·중식", "평점 4.7", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "딤섬·중식", items: [{ name: "대표 메뉴", price: "₫200,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~9:00; 화요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/nhasi-sheraton-nha-trang-hotel-and-spa/dining/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10699755168041702025", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%8C%80+%EC%95%A4+%EC%8A%A4%ED%8C%8C%EC%9D%B4%EC%8A%A4+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "키와미 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/kiwami-nha-trang.jpg"],
        summary: "키와미 초밥 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스시·일식", "평점 4.6", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스시·일식", items: [{ name: "대표 메뉴", price: "₫200,000~900,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 1:30, 오후 5:00~10:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/kiwamijapaneserestaurant/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1586440162826281117", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A4%EC%99%80%EB%AF%B8+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아키라 BBQ 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/akira-bbq-nha-trang.jpg"],
        summary: "AKIRA SUSHI - Japanese Cuisine 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["야키니쿠·뷔페", "평점 4.1", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "야키니쿠·뷔페", items: [{ name: "대표 메뉴", price: "₫250,000~700,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2594852421515355193", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%ED%82%A4%EB%9D%BC+BBQ+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "옌 스시 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/yen-sushi-nha-trang.jpg"],
        summary: "Ya! Japanese Dining & Cafe 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스시·롤", "평점 4.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스시·롤", items: [{ name: "대표 메뉴", price: "₫150,000~600,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4993998049791800181", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%8C+%EC%8A%A4%EC%8B%9C+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "짜오마오 씨푸드": {
        photos: ["/images/nha-trang/info/restaurants/chao-mao-seafood-nha-trang.jpg"],
        summary: "나트랑에서 꼭 가봐야 할 인기 해산물 레스토랑",
        updatedAt: "2026-07-21",
        highlights: ["신선한 제철 해산물 요리", "베트남 현지 분위기"],
        tips: ["인기가 많아 저녁 시간대 예약 필수"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "₫150,000~600,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 12:00 – 11:00 PM; Tuesday: 12:00 – 11:00 PM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=12.2406793,109.1924411", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%9C%EC%98%A4%EB%A7%88%EC%98%A4%20%EC%94%A8%ED%91%B8%EB%93%9C%20%EB%82%98%ED%8A%B8%EB%9E%91%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "냐벱": {
        photos: ["/images/nha-trang/info/restaurants/nha-bep-nha-trang.jpg"],
        summary: "깔끔하고 담백한 로컬 음식을 선호한다면 추천",
        updatedAt: "2026-07-21",
        highlights: ["정성 가득한 현지식 메뉴", "쾌적한 식사 환경"],
        tips: ["가족 단위 여행객에게 특히 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 가정식", items: [{ name: "대표 메뉴", price: "₫80,000~300,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 11:00 AM – 10:30 PM; Tuesday: 11:00 AM – 10:30 PM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=12.2417798,109.1917081", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%83%90%EB%B2%B1%20%EB%82%98%ED%8A%B8%EB%9E%91%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라이씨푸드": {
        photos: ["/images/nha-trang/info/restaurants/lai-seafood-nha-trang.jpg"],
        summary: "현지 느낌 물씬 나는 가성비 해산물 전문점",
        updatedAt: "2026-07-21",
        highlights: ["신선도 높은 해산물", "부담 없는 가격대"],
        tips: ["다양한 소스를 곁들여 드셔보세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "₫150,000~700,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 3:00 – 10:00 PM; Tuesday: 3:00 – 10:00 PM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=12.2341867,109.1947213", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%9D%B4%EC%94%A8%ED%91%B8%EB%93%9C%20%EB%82%98%ED%8A%B8%EB%9E%91%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "안키친": {
        photos: ["/images/nha-trang/info/restaurants/an-kitchen-nha-trang.jpg"],
        summary: "나트랑의 맛을 느낄 수 있는 깔끔한 레스토랑",
        updatedAt: "2026-07-21",
        highlights: ["다양한 베트남 메뉴", "깔끔하고 세련된 인테리어"],
        tips: ["현지 식재료를 활용한 요리가 일품"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 로컬 푸드", items: [{ name: "대표 메뉴", price: "₫80,000~300,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 11:00 AM – 10:00 PM; Tuesday: 11:00 AM – 10:00 PM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=12.2417827,109.1914829", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%88%ED%82%A4%EC%B9%9C%20%EB%82%98%ED%8A%B8%EB%9E%91%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "콩카페": {
        photos: ["/images/nha-trang/info/restaurants/cong-caphe-nha-trang.jpg"],
        summary: "코코넛 커피로 유명한 나트랑 필수 코스",
        updatedAt: "2026-07-21",
        highlights: ["시그니처 코코넛 커피", "빈티지한 베트남 분위기"],
        tips: ["코코넛 스무디 커피는 꼭 주문하세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "코코넛 커피", items: [{ name: "대표 메뉴", price: "₫40,000~150,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 7:30 AM – 11:00 PM; Tuesday: 7:30 AM – 11:00 PM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=12.2382683,109.1937485", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%A9%EC%B9%B4%ED%8E%98%20%EB%82%98%ED%8A%B8%EB%9E%91%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "안토이 2호점": {
        photos: ["/images/nha-trang/info/restaurants/an-toi-2-nha-trang.jpg"],
        summary: "나트랑 여행객들에게 사랑받는 곳으로, 정갈하고 맛있는 베트남 전통 요리를 즐길 수 있습니다.",
        updatedAt: "2026-07-21",
        highlights: ["깔끔한 현지식 메뉴 구성", "한국인 입맛에 잘 맞는 감칠맛"],
        tips: ["피크 타임에는 웨이팅이 있을 수 있으니 미리 방문하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 가정식 요리", items: [{ name: "대표 메뉴", price: "₫80,000~300,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 10:30 AM – 9:30 PM; Tuesday: 10:30 AM – 9:30 PM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=12.2416163,109.19164&query_place_id=ChIJh4Bjsw1ncDER3mheVtJlHtA", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%88%ED%86%A0%EC%9D%B4%202%ED%98%B8%EC%A0%90%20%EB%82%98%ED%8A%B8%EB%9E%91%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "CCCP 커피": {
        photos: ["/images/nha-trang/info/restaurants/cccp-coffee-nha-trang.jpg"],
        summary: "시원한 코코넛 스무디 커피로 유명한 나트랑의 대표적인 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["중독성 있는 코코넛 커피", "여유로운 카페 분위기"],
        tips: ["더운 낮 시간에 시원하게 휴식하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "코코넛 스무디 커피", items: [{ name: "대표 메뉴", price: "₫40,000~150,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 6:00 AM – 11:00 PM; Tuesday: 6:00 AM – 11:00 PM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=12.2400149,109.1921561&query_place_id=ChIJx5EjOw5ncDERCXpVpE-lRSI", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=CCCP%20%EC%BB%A4%ED%94%BC%20%EB%82%98%ED%8A%B8%EB%9E%91%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카페 제시": {
        photos: ["/images/nha-trang/info/restaurants/cafe-jessie-nha-trang.jpg"],
        summary: "다양한 생과일 메뉴와 달콤한 디저트로 힐링할 수 있는 공간입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 제철 과일 음료", "아기자기하고 깔끔한 분위기"],
        tips: ["과일 주스 메뉴를 추천합니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "생과일 주스", items: [{ name: "대표 메뉴", price: "₫50,000~180,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 7:00 AM – 10:00 PM; Tuesday: 7:00 AM – 10:00 PM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=12.2418473,109.191583&query_place_id=ChIJI96DayFncDERUDxdJFJl8MQ", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%98%20%EC%A0%9C%EC%8B%9C%20%EB%82%98%ED%8A%B8%EB%9E%91%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "케이하우스": {
        photos: ["/images/nha-trang/info/restaurants/k-house-nha-trang.jpg"],
        summary: "높은 평점을 자랑하는 곳으로, 정성 가득한 현지 요리를 맛볼 수 있습니다.",
        updatedAt: "2026-07-21",
        highlights: ["검증된 맛과 높은 서비스 품질", "쾌적하고 고급스러운 식사 환경"],
        tips: ["가족 단위 방문객에게도 추천합니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 로컬 요리", items: [{ name: "대표 메뉴", price: "₫100,000~350,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 11:00 AM – 2:00 AM; Tuesday: 11:00 AM – 2:00 AM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=12.23059,109.19912&query_place_id=ChIJTQBISo9ncDERyPcP3aY9kI4", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BC%80%EC%9D%B4%ED%95%98%EC%9A%B0%EC%8A%A4%20%EB%82%98%ED%8A%B8%EB%9E%91%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    }
};

export default info;
