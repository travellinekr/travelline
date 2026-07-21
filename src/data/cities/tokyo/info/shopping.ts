import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "돈키호테 신주쿠 가부키초점": {
        photos: ["/images/tokyo/info/shopping/place.jpg"],
        summary: "신주쿠 가부키초에서 24시간 언제든 쇼핑할 수 있는 종합 할인점입니다.",
        updatedAt: "2026-07-14",
        highlights: ["다양한 잡화 및 기념품 구매 가능", "24시간 운영으로 편리한 방문"],
        tips: ["면세 혜택을 위해 여권을 반드시 지참하세요", "인기 상품은 품절될 수 있으니 미리 확인하세요"],
        warnings: ["매장이 매우 혼잡할 수 있으니 주의하세요"],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        taxRefund: { available: true, method: "매장별 확인", note: "면세 가능 매장과 최소 구매금액은 매장별로 다릅니다." },
        payment: ["현금", "카드", "간편결제 가능 여부 매장별 확인"],
        floors: "종합 할인점",
        links: [
            { label: "공식 사이트", url: "https://www.donki.com/store/shop_detail.php?shop_id=29", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9620539070280116520", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%88%ED%82%A4%ED%98%B8%ED%85%8C+%EC%8B%A0%EC%A3%BC%EC%BF%A0+%EA%B0%80%EB%B6%80%ED%82%A4%EC%B4%88%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "아키하바라 전자상가": {
        photos: ["/images/tokyo/info/shopping/place-2.jpg"],
        summary: "전자제품과 애니메이션 팬들의 성지, 아키하바라 전자상가",
        updatedAt: "2026-07-14",
        highlights: ["최신 가전 및 IT 기기 쇼핑", "다양한 애니메이션 굿즈와 피규어 탐방", "독특한 테마 카페 체험"],
        tips: ["면세 혜택을 위해 여권을 반드시 지참하세요", "주말보다는 평일 방문이 비교적 여유롭습니다"],
        warnings: ["상점마다 영업 종료 시간이 다를 수 있으니 확인 필수"],
        hours: "11:00~20:00 전후",
        taxRefund: { available: true, method: "매장별 확인", note: "면세 가능 매장과 최소 구매금액은 매장별로 다릅니다." },
        payment: ["현금", "카드", "간편결제 가능 여부 매장별 확인"],
        floors: "전자·애니메이션 거리",
        links: [
            { label: "공식 사이트", url: "http://akiba.or.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8054666486400292732", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%ED%82%A4%ED%95%98%EB%B0%94%EB%9D%BC+%EC%A0%84%EC%9E%90%EC%83%81%EA%B0%80+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "시부야 109": {
        photos: ["/images/tokyo/info/shopping/109.jpg"],
        summary: "도쿄 시부야의 상징적인 패션 쇼핑몰로, 일본 최신 트렌드를 한눈에 확인할 수 있는 곳입니다.",
        updatedAt: "2026-07-14",
        highlights: ["다양한 패션 브랜드와 액세서리 입점", "일본 MZ세대 유행 아이템 가득"],
        tips: ["영업 종료 시간(오후 9시)을 미리 확인하세요.", "주말에는 방문객이 많아 혼잡할 수 있습니다."],
        warnings: ["인기 매장은 대기 줄이 발생할 수 있습니다."],
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        taxRefund: { available: true, method: "매장별 확인", note: "면세 가능 매장과 최소 구매금액은 매장별로 다릅니다." },
        payment: ["현금", "카드", "간편결제 가능 여부 매장별 확인"],
        floors: "패션 몰",
        links: [
            { label: "공식 사이트", url: "https://www.shibuya109.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6170678451487891570", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EB%B6%80%EC%95%BC+109+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "갓파바시 도구거리": {
        photos: ["/images/tokyo/info/shopping/place-3.jpg"],
        summary: "도쿄의 유명한 주방용품 거리로, 다양한 조리 도구와 식기류를 만날 수 있는 곳입니다.",
        updatedAt: "2026-07-14",
        highlights: ["다양한 종류의 칼과 조리 도구", "정교한 음식 모형 상점", "일본 감성의 독특한 그릇과 식기"],
        tips: ["주말보다는 평일 방문을 추천합니다.", "식기류는 파손 위험이 있으니 포장에 유의하세요."],
        warnings: ["대부분의 상점이 오후 5시에 일찍 문을 닫으니 주의하세요."],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        taxRefund: { available: true, method: "매장별 확인", note: "면세 가능 매장과 최소 구매금액은 매장별로 다릅니다." },
        payment: ["현금", "카드", "간편결제 가능 여부 매장별 확인"],
        floors: "주방용품 거리",
        links: [
            { label: "공식 사이트", url: "http://www.kappabashi.or.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2397099946291010547", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%93%ED%8C%8C%EB%B0%94%EC%8B%9C+%EB%8F%84%EA%B5%AC%EA%B1%B0%EB%A6%AC+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "다케시타도리": {
        photos: ["/images/tokyo/info/shopping/place-4.jpg"],
        summary: "하라주쿠의 트렌디한 문화를 만날 수 있는 활기찬 쇼핑 거리입니다.",
        updatedAt: "2026-07-14",
        highlights: ["개성 넘치는 패션 아이템과 소품샵", "다양한 길거리 음식 체험"],
        tips: ["인파가 몰리는 주말보다는 평일 방문을 추천합니다.", "아기자기한 디저트 맛집이 많습니다."],
        warnings: ["주말에는 매우 혼잡하여 통행이 어려울 수 있습니다."],
        hours: "월요일: 오전 10:30 ~ 오후 8:00; 화요일: 오전 10:30 ~ 오후 8:00",
        taxRefund: { available: true, method: "매장별 확인", note: "면세 가능 매장과 최소 구매금액은 매장별로 다릅니다." },
        payment: ["현금", "카드", "간편결제 가능 여부 매장별 확인"],
        floors: "하라주쿠 쇼핑 거리",
        links: [
            { label: "공식 사이트", url: "https://www.mitsuifudosan.co.jp/corporate/news/2015/0120_02/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8495077770240075731", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%BC%80%EC%8B%9C%ED%83%80%EB%8F%84%EB%A6%AC+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "이세탄 신주쿠": {
        photos: ["/images/tokyo/info/shopping/place-5.jpg"],
        summary: "도쿄 신주쿠를 대표하는 프리미엄 백화점",
        updatedAt: "2026-07-14",
        highlights: ["최신 트렌드의 럭셔리 브랜드 입점", "다양한 고급 디저트와 식품관", "세련된 쇼핑 환경"],
        tips: ["면세 혜택을 위해 여권을 반드시 지참하세요", "식품관의 인기 디저트는 조기 품절될 수 있습니다"],
        warnings: ["주말 및 공휴일에는 매우 혼잡할 수 있습니다"],
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        taxRefund: { available: true, method: "매장별 확인", note: "면세 가능 매장과 최소 구매금액은 매장별로 다릅니다." },
        payment: ["현금", "카드", "간편결제 가능 여부 매장별 확인"],
        floors: "프리미엄 백화점",
        links: [
            { label: "공식 사이트", url: "https://www.mistore.jp/store/shinjuku.html", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10048688310454447541", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%84%B8%ED%83%84+%EC%8B%A0%EC%A3%BC%EC%BF%A0+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "긴자 미츠코시": {
        photos: ["/images/tokyo/info/shopping/place-6.jpg"],
        summary: "도쿄 긴자를 대표하는 품격 있는 럭셔리 백화점입니다.",
        updatedAt: "2026-07-14",
        highlights: ["다양한 명품 브랜드 입점", "프리미엄 쇼핑 경험"],
        tips: ["면세(Tax Refund) 서비스를 꼭 확인하세요", "백화점 내 식당가 이용을 추천합니다"],
        warnings: ["주말 및 공휴일에는 매우 혼잡할 수 있습니다"],
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        taxRefund: { available: true, method: "매장별 확인", note: "면세 가능 매장과 최소 구매금액은 매장별로 다릅니다." },
        payment: ["현금", "카드", "간편결제 가능 여부 매장별 확인"],
        floors: "럭셔리 백화점",
        links: [
            { label: "공식 사이트", url: "https://www.mistore.jp/store/ginza.html", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10519083699749749694", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90+%EB%AF%B8%EC%B8%A0%EC%BD%94%EC%8B%9C+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "긴자 로프트": {
        photos: ["/images/tokyo/info/shopping/place-7.jpg"],
        summary: "다양한 문구와 트렌디한 생활 잡화를 만날 수 있는 긴자의 대표 라이프스타일 편집샵",
        updatedAt: "2026-07-14",
        highlights: ["아기자기한 디자인 문구류", "감각적인 인테리어 소품", "다채로운 뷰티 및 코스메틱 아이템"],
        tips: ["층별로 테마가 다르니 여유 있게 둘러보세요", "선물용 아이템을 찾기에 최적의 장소입니다"],
        warnings: ["주말 및 공휴일에는 방문객이 많아 혼잡할 수 있습니다"],
        hours: "11:00~21:00",
        taxRefund: { available: true, method: "매장별 확인", note: "면세 가능 매장과 최소 구매금액은 매장별로 다릅니다." },
        payment: ["현금", "카드", "간편결제 가능 여부 매장별 확인"],
        floors: "라이프스타일 편집샵",
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/tyoal-aloft-tokyo-ginza/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4259981557227224873", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90+%EB%A1%9C%ED%94%84%ED%8A%B8+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "나카미세도리": {
        photos: ["/images/tokyo/info/shopping/place-8.jpg"],
        summary: "아사쿠사의 정취를 느낄 수 있는 전통 기념품 거리",
        updatedAt: "2026-07-14",
        highlights: ["다양한 일본 전통 간식", "아기자기한 기념품 쇼핑"],
        tips: ["오전 일찍 방문하면 여유로운 구경 가능", "길거리 음식은 구매한 자리 근처에서 취식"],
        warnings: ["주말 및 공휴일에는 매우 혼잡함", "상점별 영업시간이 다를 수 있음"],
        hours: "월요일: 오전 9:00 ~ 오후 8:00; 화요일: 오전 9:00 ~ 오후 8:00",
        taxRefund: { available: true, method: "매장별 확인", note: "면세 가능 매장과 최소 구매금액은 매장별로 다릅니다." },
        payment: ["현금", "카드", "간편결제 가능 여부 매장별 확인"],
        floors: "아사쿠사 기념품 거리",
        links: [
            { label: "공식 사이트", url: "http://www.asakusa-nakamise.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5851620788043619772", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EC%B9%B4%EB%AF%B8%EC%84%B8%EB%8F%84%EB%A6%AC+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "아메요코 시장": {
        photos: ["/images/tokyo/info/shopping/place-9.jpg"],
        summary: "우에노의 활기찬 분위기를 느낄 수 있는 도쿄의 대표적인 전통 시장입니다.",
        updatedAt: "2026-07-14",
        highlights: ["다양한 길거리 음식과 저렴한 식재료", "활기 넘치는 일본 전통 시장 분위기"],
        tips: ["현금 결제가 필요한 상점이 많으니 현금을 준비하세요.", "오후 늦게 방문하면 마감 세일 품목을 찾을 수 있습니다."],
        warnings: ["인파가 매우 많으므로 소지품 관리에 유의하세요."],
        hours: "10:00~20:00",
        taxRefund: { available: true, method: "매장별 확인", note: "면세 가능 매장과 최소 구매금액은 매장별로 다릅니다." },
        payment: ["현금", "카드", "간편결제 가능 여부 매장별 확인"],
        floors: "전통 시장",
        links: [
            { label: "공식 사이트", url: "https://ameyokoinfo.com/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7298938795051699978", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%A9%94%EC%9A%94%EC%BD%94+%EC%8B%9C%EC%9E%A5+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "도쿄역 캐릭터 스트리트": {
        photos: ["/images/tokyo/info/shopping/place-10.jpg"],
        summary: "다양한 캐릭터 굿즈를 한곳에서 만날 수 있는 도쿄역의 쇼핑 명소",
        updatedAt: "2026-07-14",
        highlights: ["인기 애니메이션 및 캐릭터 샵 밀집", "다양한 가격대의 기념품 쇼핑 가능"],
        tips: ["도쿄역 지하 연결 통로(B1층) 위치를 미리 확인하세요", "주말보다는 비교적 여유로운 평일 방문을 추천합니다"],
        warnings: ["인기 매장은 대기 줄이 발생할 수 있습니다", "한정판 상품은 조기 품절될 수 있으니 주의하세요"],
        hours: "월요일: 오전 10:00 ~ 오후 8:30; 화요일: 오전 10:00 ~ 오후 8:30",
        taxRefund: { available: true, method: "매장별 확인", note: "면세 가능 매장과 최소 구매금액은 매장별로 다릅니다." },
        payment: ["현금", "카드", "간편결제 가능 여부 매장별 확인"],
        floors: "캐릭터 굿즈 거리",
        links: [
            { label: "공식 사이트", url: "https://e-shop.tokyoeki-1bangai.co.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1169765817995755207", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%BF%84%EC%97%AD+%EC%BA%90%EB%A6%AD%ED%84%B0+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "도쿄 솔라마치": {
        photos: ["/images/tokyo/info/shopping/place-11.jpg"],
        summary: "도쿄 스카이트리 아래 위치한 다양한 브랜드와 맛집이 가득한 복합 쇼핑몰입니다.",
        updatedAt: "2026-07-14",
        highlights: ["다양한 캐릭터 굿즈 및 기념품 쇼핑 가능", "스카이트리 전망과 함께 즐기는 미식 경험"],
        tips: ["주말보다는 평일 방문을 추천합니다.", "스카이트리 입장권과 연계하여 방문하기 좋습니다."],
        warnings: ["인기 매장은 대기 시간이 발생할 수 있습니다."],
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        taxRefund: { available: true, method: "매장별 확인", note: "면세 가능 매장과 최소 구매금액은 매장별로 다릅니다." },
        payment: ["현금", "카드", "간편결제 가능 여부 매장별 확인"],
        floors: "스카이트리 복합 쇼핑몰",
        links: [
            { label: "공식 사이트", url: "http://www.tokyo-solamachi.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10487657001978202121", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%BF%84+%EC%86%94%EB%9D%BC%EB%A7%88%EC%B9%98+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "다이버시티 도쿄 플라자": {
        photos: ["/images/tokyo/info/shopping/place-12.jpg"],
        summary: "오다이바를 대표하는 대형 복합 쇼핑몰로 다양한 브랜드와 맛집을 한곳에서 즐길 수 있습니다.",
        updatedAt: "2026-07-14",
        highlights: ["실물 크기 건담 조형물 관람 가능", "다양한 패션, 잡화 및 캐릭터 굿즈 쇼핑", "다채로운 테마의 레스토랑과 푸드코트"],
        tips: ["건담 쇼 시간을 미리 확인하고 방문하세요", "쇼핑 후 오다이바 해변 공원 산책을 추천합니다"],
        warnings: ["주말 및 공휴일에는 인파가 매우 많을 수 있습니다", "영업 종료 시간(오후 8시)을 꼭 확인하세요"],
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        taxRefund: { available: true, method: "매장별 확인", note: "면세 가능 매장과 최소 구매금액은 매장별로 다릅니다." },
        payment: ["현금", "카드", "간편결제 가능 여부 매장별 확인"],
        floors: "오다이바 복합 쇼핑몰",
        links: [
            { label: "공식 사이트", url: "https://mitsui-shopping-park.com/divercity-tokyo/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7490649034022574967", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9D%B4%EB%B2%84%EC%8B%9C%ED%8B%B0+%EB%8F%84%EC%BF%84+%ED%94%8C%EB%9D%BC%EC%9E%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "시부야 사쿠라 스테이지": {
        photos: ["/images/tokyo/info/shopping/place-13.jpg"],
        summary: "시부야의 새로운 랜드마크, 쇼핑과 미식을 한곳에서 즐길 수 있는 복합 문화 공간입니다.",
        updatedAt: "2026-07-14",
        highlights: ["최신 트렌드를 반영한 세련된 쇼핑몰", "다양한 맛집과 카페가 모여 있는 사쿠라 테라스"],
        tips: ["매장별 영업시간이 상이하므로 방문 전 확인 권장"],
        warnings: ["주말 및 피크 타임에는 혼잡할 수 있음"],
        hours: "매장별 상이",
        taxRefund: { available: true, method: "매장별 확인", note: "면세 가능 매장과 최소 구매금액은 매장별로 다릅니다." },
        payment: ["현금", "카드", "간편결제 가능 여부 매장별 확인"],
        floors: "복합 쇼핑몰",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4220920539266025970", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EB%B6%80%EC%95%BC+%EC%82%AC%EC%BF%A0%EB%9D%BC+%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "긴자 식스": {
        photos: ["/images/tokyo/info/shopping/ginza-six.jpg"],
        summary: "명품 브랜드와 예술 전시를 동시에 즐길 수 있는 프리미엄 쇼핑 공간입니다.",
        updatedAt: "2026-07-21",
        highlights: ["럭셔리 브랜드 플래그십 스토어", "옥상 정원 및 아트 갤러리"],
        tips: ["주말에는 인파가 매우 많으니 여유로운 평일 방문을 추천합니다."],
        warnings: [],
        hours: "Monday: 10:30 AM – 8:30 PM; Tuesday: 10:30 AM – 8:30 PM",
        taxRefund: { available: true, method: "매장별 확인", note: "면세 가능 매장과 최소 구매금액은 매장별로 다릅니다." },
        payment: ["현금", "카드", "간편결제 가능 여부 매장별 확인"],
        floors: "복합 쇼핑몰",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=35.6697688,139.7641762&query_place_id=ChIJAQAsR--LGGAR_AmB8WMDy88", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90%20%EC%8B%9D%EC%8A%A4%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "오모테산도 힐즈": {
        photos: ["/images/tokyo/info/shopping/omotesando-hills.jpg"],
        summary: "안도 타다오가 설계한 건축미와 트렌디한 브랜드가 모인 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["감각적인 건축 디자인", "트렌디한 패션 및 라이프스타일 숍"],
        tips: ["주변 오모테산도 거리와 함께 산책하기 좋습니다."],
        warnings: [],
        hours: "Monday: 11:00 AM – 8:00 PM; Tuesday: 11:00 AM – 8:00 PM",
        taxRefund: { available: true, method: "매장별 확인", note: "면세 가능 매장과 최소 구매금액은 매장별로 다릅니다." },
        payment: ["현금", "카드", "간편결제 가능 여부 매장별 확인"],
        floors: "패션 쇼핑몰",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=35.6672869,139.7086162&query_place_id=ChIJCx6jgqGMGGARpfB5UIap15k", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%AA%A8%ED%85%8C%EC%82%B0%EB%8F%84%20%ED%9E%90%EC%A6%88%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "도요스 센캬쿠반라이": {
        photos: ["/images/tokyo/info/shopping/toyosu-senkyaku-banrai.jpg"],
        summary: "도요스 시장 인근의 먹거리와 볼거리가 가득한 테마 거리입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 해산물 먹거리", "에도 시대풍의 전통 건축물"],
        tips: ["인기 식당은 대기가 길 수 있으니 오픈 시간에 맞춰 방문하세요."],
        warnings: [],
        hours: "Monday: 9:00 AM – 10:00 PM; Tuesday: 9:00 AM – 10:00 PM",
        taxRefund: { available: true, method: "매장별 확인", note: "면세 가능 매장과 최소 구매금액은 매장별로 다릅니다." },
        payment: ["현금", "카드", "간편결제 가능 여부 매장별 확인"],
        floors: "먹거리·쇼핑 복합시설",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=35.6457275,139.7836383&query_place_id=ChIJJ1XphGeJGGARK0BhX9lYd7Y", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%9A%94%EC%8A%A4%20%EC%84%BC%EC%BA%AC%EC%BF%A0%EB%B0%98%EB%9D%BC%EC%9D%B4%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "이케부쿠로 선샤인시티": {
        photos: ["/images/tokyo/info/shopping/ikebukuro-sunshine-city.jpg"],
        summary: "수족관부터 전망대까지 다양한 즐길 거리가 가득한 이케부쿠로의 랜드마크",
        updatedAt: "2026-07-21",
        highlights: ["선샤인 수족관", "포켓몬 센터 메가 도쿄", "다양한 테마 쇼핑몰"],
        tips: ["주말에는 인파가 많으니 평일 방문을 추천합니다."],
        warnings: [],
        hours: "Monday: 10:00 AM – 8:00 PM; Tuesday: 10:00 AM – 8:00 PM",
        taxRefund: { available: true, method: "매장별 확인", note: "면세 가능 매장과 최소 구매금액은 매장별로 다릅니다." },
        payment: ["현금", "카드", "간편결제 가능 여부 매장별 확인"],
        floors: "복합 쇼핑몰",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=35.7289709,139.7195415&query_place_id=ChIJU9ZPE2-NGGARwiJyx0Id61E", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%BC%80%EB%B6%80%EC%BF%A0%EB%A1%9C%20%EC%84%A0%EC%83%A4%EC%9D%B8%EC%8B%9C%ED%8B%B0%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    }
};

export default info;
