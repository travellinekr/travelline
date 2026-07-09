import type { ShoppingInfo } from '@/data/card-info-types';

const shoppingInfo: Record<string, ShoppingInfo> = {
    "돈키호테 신주쿠 가부키초점": {
        summary: "네이버 도쿄 쇼핑 후기에서 가장 자주 보이는 24시간 종합 할인 쇼핑 스팟.",
        updatedAt: "2026-07-09",
        photos: ["/images/tokyo/info/shopping/donki-shinjuku.jpg"],
        highlights: [
            "화장품·과자·의약품·캐릭터 굿즈를 한 번에 담기 좋음",
            "심야에도 열려 마지막 날 추가 쇼핑 동선으로 편함",
            "면세 계산대가 붐빌 수 있어 여권 지참 필수"
        ],
        tips: [
            "사람이 몰리는 저녁보다 오전이나 늦은 밤이 비교적 수월합니다.",
            "지점별 재고가 달라 인기 과자는 보이면 바로 담는 편이 안전합니다."
        ],
        warnings: ["통로가 좁고 혼잡해 캐리어 동반 쇼핑은 불편할 수 있습니다."],
        hours: "24시간 운영 지점으로 알려져 있으나 방문 전 공식 페이지 확인 권장",
        taxRefund: { available: true, minAmount: "일반적으로 세전 ¥5,000 이상", method: "여권 제시 후 면세 계산", note: "소모품은 밀봉 포장될 수 있습니다." },
        payment: ["현금", "신용카드", "일부 간편결제"],
        floors: "복수층 종합 할인점",
        links: [
            { label: "돈키호테 공식 사이트", url: "https://www.donki.com/", type: "official", description: "지점·영업 정보 확인" },
            { label: "네이버 블로그 검색", url: "https://search.naver.com/search.naver?where=blog&query=%EB%8F%84%EC%BF%84%20%EB%8F%88%ED%82%A4%ED%98%B8%ED%85%8C%20%EC%8B%A0%EC%A3%BC%EC%BF%A0%20%EC%87%BC%ED%95%91", type: "blog", description: "최근 쇼핑 후기 확인" }
        ]
    },
    "아키하바라 전자상가": {
        summary: "전자제품·게임·애니 굿즈가 모이는 도쿄 대표 취미 쇼핑 거리.",
        updatedAt: "2026-07-09",
        photos: ["/images/tokyo/info/shopping/akihabara.jpg"],
        highlights: ["피규어·프라모델·중고 게임 매장이 밀집", "전자제품 대형점과 소형 전문점 비교 쇼핑 가능", "면세 매장이 많지만 중고품 조건은 매장별 확인 필요"],
        tips: ["중고 피규어는 박스 상태와 부속품을 꼭 확인하세요.", "라디오회관·요도바시·전문 샵을 묶어 보는 동선이 효율적입니다."],
        hours: "대부분 11:00~20:00 전후, 매장별 상이",
        taxRefund: { available: true, note: "대형 매장 위주로 지원, 소형 중고 매장은 조건 확인 필요" },
        payment: ["현금", "신용카드"],
        floors: "거리형 상권",
        links: [
            { label: "아키하바라 관광추진협회", url: "https://akiba.or.jp/", type: "official", description: "지역 공식 정보" },
            { label: "네이버 블로그 검색", url: "https://search.naver.com/search.naver?where=blog&query=%EB%8F%84%EC%BF%84%20%EC%95%84%ED%82%A4%ED%95%98%EB%B0%94%EB%9D%BC%20%EC%87%BC%ED%95%91", type: "blog" }
        ]
    },
    "시부야 109": {
        summary: "시부야역 앞 패션 랜드마크로 트렌디한 의류·잡화 쇼핑에 적합.",
        updatedAt: "2026-07-09",
        photos: ["/images/tokyo/info/shopping/shibuya109.jpg"],
        highlights: ["젊은 여성 패션·뷰티 브랜드가 강함", "시부야 스크램블·하치코 동선과 묶기 좋음", "층별 브랜드가 많아 짧게 훑어도 쇼핑 밀도가 높음"],
        tips: ["사이즈·교환 조건은 브랜드별로 다르니 결제 전 확인하세요.", "주말 오후는 엘리베이터와 계산대가 붐빕니다."],
        hours: "10:00~21:00 전후",
        taxRefund: { available: true, note: "입점 매장별 조건 확인" },
        payment: ["현금", "신용카드"],
        floors: "패션몰 복수층",
        links: [
            { label: "SHIBUYA109 공식", url: "https://www.shibuya109.jp/", type: "official" },
            { label: "네이버 블로그 검색", url: "https://search.naver.com/search.naver?where=blog&query=%EC%8B%9C%EB%B6%80%EC%95%BC%20109%20%EC%87%BC%ED%95%91", type: "blog" }
        ]
    },
    "갓파바시 도구거리": {
        summary: "그릇·칼·조리도구·식품 샘플을 찾는 여행자에게 인기 있는 주방용품 거리.",
        updatedAt: "2026-07-09",
        photos: ["/images/tokyo/info/shopping/kappabashi.jpg"],
        highlights: ["일본식 그릇·젓가락·주방칼 쇼핑에 좋음", "식품 샘플 전문점이 있어 기념품으로 독특함", "아사쿠사와 도보 연계 가능"],
        tips: ["칼 구매 시 항공 수하물 규정을 고려해 위탁수하물 포장하세요.", "일요일·공휴일 휴무 매장이 있어 평일 방문이 안전합니다."],
        warnings: ["거리형 상권이라 매장별 영업시간과 휴무가 크게 다릅니다."],
        hours: "10:00~17:00 전후, 매장별 상이",
        taxRefund: { available: false, note: "개별 매장별로 다르며 소규모 매장은 미지원 가능" },
        payment: ["현금", "신용카드 일부"],
        floors: "전문 상점 거리",
        links: [
            { label: "갓파바시 도구거리 공식", url: "https://www.kappabashi.or.jp/", type: "official" },
            { label: "네이버 블로그 검색", url: "https://search.naver.com/search.naver?where=blog&query=%EB%8F%84%EC%BF%84%20%EA%B0%93%ED%8C%8C%EB%B0%94%EC%8B%9C%20%EB%8F%84%EA%B5%AC%EA%B1%B0%EB%A6%AC", type: "blog" }
        ]
    },
    "다케시타도리": {
        summary: "하라주쿠 스트리트 패션과 간식 매장이 몰린 도쿄 대표 쇼핑 거리.",
        updatedAt: "2026-07-09",
        photos: ["/images/tokyo/info/shopping/takeshita.jpg"],
        highlights: ["저가 패션·잡화·캐릭터 소품 쇼핑에 적합", "크레페·디저트 매장이 많아 짧은 산책 동선으로 좋음", "오모테산도·메이지신궁과 함께 묶기 쉬움"],
        tips: ["거리 폭이 좁아 주말 오후는 매우 혼잡합니다.", "사진보다 실제 상품 품질을 확인하고 구매하세요."],
        hours: "11:00~20:00 전후, 매장별 상이",
        taxRefund: { available: false, note: "소규모 매장 중심이라 매장별 확인 필요" },
        payment: ["현금", "신용카드 일부"],
        floors: "거리형 상권",
        links: [
            { label: "다케시타도리 공식", url: "https://www.takeshita-street.com/", type: "official" },
            { label: "네이버 블로그 검색", url: "https://search.naver.com/search.naver?where=blog&query=%EB%8F%84%EC%BF%84%20%EB%8B%A4%EC%BC%80%EC%8B%9C%ED%83%80%EB%8F%84%EB%A6%AC%20%EC%87%BC%ED%95%91", type: "blog" }
        ]
    },
    "이세탄 신주쿠": {
        summary: "식품관·패션·화장품 만족도가 높은 신주쿠 대표 프리미엄 백화점.",
        updatedAt: "2026-07-09",
        photos: ["/images/tokyo/info/shopping/isetan-shinjuku.jpg"],
        highlights: ["지하 식품관과 디저트 선물 쇼핑이 강점", "신주쿠역 동선에서 접근성 좋음", "화장품·패션 브랜드 구성이 탄탄함"],
        tips: ["식품관은 저녁 시간대 인기 상품이 품절될 수 있습니다.", "면세는 여권과 결제카드 명의 확인을 준비하세요."],
        hours: "10:00~20:00 전후",
        taxRefund: { available: true, minAmount: "일반적으로 세전 ¥5,000 이상", method: "면세 카운터 또는 매장별 처리" },
        payment: ["현금", "신용카드"],
        floors: "대형 백화점",
        links: [
            { label: "이세탄 신주쿠 공식", url: "https://www.mistore.jp/store/shinjuku.html", type: "official" },
            { label: "네이버 블로그 검색", url: "https://search.naver.com/search.naver?where=blog&query=%EC%9D%B4%EC%84%B8%ED%83%84%20%EC%8B%A0%EC%A3%BC%EC%BF%A0%20%EC%87%BC%ED%95%91", type: "blog" }
        ]
    },
    "긴자 미츠코시": {
        summary: "긴자 중심의 클래식 백화점으로 명품·화장품·식품 선물 쇼핑에 적합.",
        updatedAt: "2026-07-09",
        photos: ["/images/tokyo/info/shopping/ginza-mitsukoshi.jpg"],
        highlights: ["긴자역·긴자 거리 쇼핑과 바로 연결", "식품관과 일본식 선물 구성이 좋음", "고급 브랜드 쇼핑 동선에 적합"],
        tips: ["긴자 식사 전후로 짧게 들르기 좋습니다.", "식품 선물은 보관·반입 조건을 확인하세요."],
        hours: "10:00~20:00 전후",
        taxRefund: { available: true, minAmount: "일반적으로 세전 ¥5,000 이상", method: "면세 카운터 확인" },
        payment: ["현금", "신용카드"],
        floors: "대형 백화점",
        links: [
            { label: "긴자 미츠코시 공식", url: "https://www.mistore.jp/store/ginza.html", type: "official" },
            { label: "네이버 블로그 검색", url: "https://search.naver.com/search.naver?where=blog&query=%EA%B8%B4%EC%9E%90%20%EB%AF%B8%EC%B8%A0%EC%BD%94%EC%8B%9C%20%EC%87%BC%ED%95%91", type: "blog" }
        ]
    },
    "긴자 로프트": {
        summary: "문구·생활잡화·디자인 소품을 한 번에 보기 좋은 긴자 라이프스타일 매장.",
        updatedAt: "2026-07-09",
        photos: ["/images/tokyo/info/shopping/ginza-loft.jpg"],
        highlights: ["문구·뷰티·여행용품·선물 아이템 구성이 다양", "가격대가 넓어 가벼운 기념품 구매에 좋음", "긴자 쇼핑 동선에 넣기 쉬움"],
        tips: ["시즌 한정 문구와 잡화는 빠르게 품절될 수 있습니다.", "선물용 소품은 층별로 분산되어 있어 여유 있게 둘러보세요."],
        hours: "11:00~21:00 전후",
        taxRefund: { available: true, note: "면세 조건과 카운터 위치는 공식 정보 확인" },
        payment: ["현금", "신용카드"],
        floors: "라이프스타일 편집샵",
        links: [
            { label: "긴자 로프트 공식", url: "https://www.loft.co.jp/shop_list/detail.php?shop_id=407", type: "official" },
            { label: "네이버 블로그 검색", url: "https://search.naver.com/search.naver?where=blog&query=%EA%B8%B4%EC%9E%90%20%EB%A1%9C%ED%94%84%ED%8A%B8%20%EC%87%BC%ED%95%91", type: "blog" }
        ]
    },
    "나카미세도리": {
        summary: "센소지 앞 전통 기념품 거리로 아사쿠사 방문과 함께 보기 좋음.",
        updatedAt: "2026-07-09",
        photos: ["/images/tokyo/info/shopping/nakamise.jpg"],
        highlights: ["전통 과자·부채·기념품 쇼핑에 적합", "센소지 동선상 자연스럽게 지나감", "사진 찍기 좋은 전통 상점가 분위기"],
        tips: ["먹거리 포장·섭취 규칙은 매장 안내를 따르세요.", "오전 방문이 비교적 덜 붐빕니다."],
        hours: "10:00~18:00 전후, 매장별 상이",
        taxRefund: { available: false, note: "소규모 상점 중심" },
        payment: ["현금", "신용카드 일부"],
        floors: "전통 상점 거리",
        links: [
            { label: "나카미세 상점가 공식", url: "https://www.asakusa-nakamise.jp/", type: "official" },
            { label: "네이버 블로그 검색", url: "https://search.naver.com/search.naver?where=blog&query=%EB%8F%84%EC%BF%84%20%EB%82%98%EC%B9%B4%EB%AF%B8%EC%84%B8%EB%8F%84%EB%A6%AC%20%EC%87%BC%ED%95%91", type: "blog" }
        ]
    },
    "아메요코 시장": {
        summary: "우에노의 활기 있는 시장형 쇼핑 거리로 식품·잡화·의류를 저렴하게 보기 좋음.",
        updatedAt: "2026-07-09",
        photos: ["/images/tokyo/info/shopping/ameyoko.jpg"],
        highlights: ["과자·건어물·잡화·의류 매장이 밀집", "우에노역·우에노공원과 연계 쉬움", "시장 분위기와 가격 비교 재미가 있음"],
        tips: ["가격과 용량을 비교하고 현금도 준비하세요.", "폐점 시간이 빠른 매장도 있어 늦은 밤 쇼핑에는 부적합합니다."],
        hours: "10:00~20:00 전후, 매장별 상이",
        taxRefund: { available: false, note: "개별 매장별 상이" },
        payment: ["현금", "신용카드 일부"],
        floors: "시장형 거리",
        links: [
            { label: "아메요코 공식", url: "https://www.ameyoko.net/", type: "official" },
            { label: "네이버 블로그 검색", url: "https://search.naver.com/search.naver?where=blog&query=%EB%8F%84%EC%BF%84%20%EC%95%84%EB%A9%94%EC%9A%94%EC%BD%94%20%EC%8B%9C%EC%9E%A5", type: "blog" }
        ]
    },
    "도쿄역 캐릭터 스트리트": {
        summary: "도쿄역 지하에서 캐릭터 굿즈와 한정 상품을 짧게 쇼핑하기 좋은 거리.",
        updatedAt: "2026-07-09",
        photos: ["/images/tokyo/info/shopping/tokyo-character-street.jpg"],
        highlights: ["포켓몬·산리오·방송국 캐릭터 등 굿즈 매장 밀집", "열차 이동 전후 짧은 쇼핑에 좋음", "도쿄역 과자 선물 코너와 함께 보기 쉬움"],
        tips: ["인기 한정 상품은 품절될 수 있어 보이면 바로 구매하세요.", "도쿄역 지하 동선이 복잡해 시간 여유를 두세요."],
        hours: "10:00~20:30 전후",
        taxRefund: { available: true, note: "입점 매장별 조건 확인" },
        payment: ["현금", "신용카드"],
        floors: "도쿄역 일번가 지하 상점가",
        links: [
            { label: "도쿄 캐릭터 스트리트 공식", url: "https://www.tokyoeki-1bangai.co.jp/street/character", type: "official" },
            { label: "네이버 블로그 검색", url: "https://search.naver.com/search.naver?where=blog&query=%EB%8F%84%EC%BF%84%EC%97%AD%20%EC%BA%90%EB%A6%AD%ED%84%B0%20%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8", type: "blog" }
        ]
    },
    "도쿄 솔라마치": {
        summary: "도쿄 스카이트리 아래 대형 복합몰로 기념품·식당·캐릭터 쇼핑을 한 번에 해결하기 좋음.",
        updatedAt: "2026-07-09",
        photos: ["/images/tokyo/info/shopping/tokyo-solamachi.jpg"],
        highlights: ["스카이트리 관람 전후 동선이 좋음", "도쿄·일본 기념품과 캐릭터 매장 선택지가 많음", "식당가와 디저트 매장도 함께 이용 가능"],
        tips: ["전망대 예약 시간 전후로 쇼핑 시간을 분리해두면 여유롭습니다.", "주말과 휴일은 식당가 대기가 길 수 있습니다."],
        hours: "10:00~21:00 전후",
        taxRefund: { available: true, note: "대상 매장 및 조건 확인" },
        payment: ["현금", "신용카드"],
        floors: "대형 복합 쇼핑몰",
        links: [
            { label: "도쿄 솔라마치 공식", url: "https://www.tokyo-solamachi.jp/", type: "official" },
            { label: "네이버 블로그 검색", url: "https://search.naver.com/search.naver?where=blog&query=%EB%8F%84%EC%BF%84%20%EC%86%94%EB%9D%BC%EB%A7%88%EC%B9%98%20%EC%87%BC%ED%95%91", type: "blog" }
        ]
    },
    "다이버시티 도쿄 플라자": {
        summary: "오다이바의 대형 쇼핑몰로 실물대 건담과 함께 굿즈·패션 쇼핑을 즐기기 좋음.",
        updatedAt: "2026-07-09",
        photos: ["/images/tokyo/info/shopping/divercity.jpg"],
        highlights: ["건담베이스와 캐릭터 굿즈 쇼핑에 강점", "오다이바 해변·팀랩/전망 동선과 묶기 좋음", "패션·잡화·식당가가 한 건물에 모임"],
        tips: ["건담베이스 한정 상품은 재고 변동이 큽니다.", "오다이바 일정이 없다면 이동 시간이 길 수 있어 동선 확인이 필요합니다."],
        hours: "11:00~20:00 전후, 구역별 상이",
        taxRefund: { available: true, note: "입점 매장별 조건 확인" },
        payment: ["현금", "신용카드"],
        floors: "대형 복합 쇼핑몰",
        links: [
            { label: "다이버시티 도쿄 플라자 공식", url: "https://mitsui-shopping-park.com/divercity-tokyo/", type: "official" },
            { label: "네이버 블로그 검색", url: "https://search.naver.com/search.naver?where=blog&query=%EB%8F%84%EC%BF%84%20%EB%8B%A4%EC%9D%B4%EB%B2%84%EC%8B%9C%ED%8B%B0%20%EC%87%BC%ED%95%91", type: "blog" }
        ]
    }
};

export default shoppingInfo;
