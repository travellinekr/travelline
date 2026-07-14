import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "하버시티": {
        photos: ["/images/hong-kong/info/shopping/harbour-city-hong-kong.jpg"],
        summary: "침사추이를 대표하는 홍콩 최대 규모의 쇼핑몰입니다.",
        updatedAt: "2026-07-14",
        highlights: ["명품부터 스파 브랜드까지 입점한 방대한 매장", "쇼핑 중 즐기는 아름다운 빅토리아 하버 뷰"],
        tips: ["규모가 매우 크니 꼭 편한 신발을 신고 가세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.harbourcity.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14279479113744389170", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%B2%84%EC%8B%9C%ED%8B%B0+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "K11 뮤제아": {
        photos: ["/images/hong-kong/info/shopping/k11-musea-hong-kong.jpg"],
        summary: "예술과 쇼핑이 결안된 프리미엄 아트 몰입니다.",
        updatedAt: "2026-07-14",
        highlights: ["감각적인 인테리어와 다양한 전시 공간", "트렌디한 편집숍과 힙한 맛집"],
        tips: ["쇼핑뿐만 아니라 사진 찍기 좋은 스팟이 많아 데이트 코스로 추천해요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.k11musea.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7044914512518373682", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=K11+%EB%AE%A4%EC%A0%9C%EC%95%84+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "타임스 스퀘어 홍콩": {
        photos: ["/images/hong-kong/info/shopping/times-square-hong-kong.jpg"],
        summary: "코즈웨이 베이의 중심에 위치한 활기찬 쇼핑 명소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["다양한 패션 브랜드와 라이프스타일 매장", "쇼핑 후 즐길 수 있는 맛집 밀집 지역"],
        tips: ["주변에 카페와 식당이 많아 쇼핑 후 식사하기 딱 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.timessquare.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9468002844789250843", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%9E%84%EC%8A%A4+%EC%8A%A4%ED%80%98%EC%96%B4+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "IFC 몰": {
        photos: ["/images/hong-kong/info/shopping/ifc-mall-hong-kong.jpg"],
        summary: "센트럴의 중심, 명품 쇼핑과 하버뷰를 동시에 즐기는 곳",
        updatedAt: "2026-07-14",
        highlights: ["프리미엄 브랜드 입점", "빅토리아 하버 전망"],
        tips: ["AEL 역과 바로 연결되어 이동이 정말 편해요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ifc.com.hk/en/mall/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=227688900202172285", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=IFC+%EB%AA%B0+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "퍼시픽 플레이스": {
        photos: ["/images/hong-kong/info/shopping/pacific-place-hong-kong.jpg"],
        summary: "애드미럴티에서 만나는 럭셔리한 쇼핑 타임",
        updatedAt: "2026-07-14",
        highlights: ["하이엔드 명품관", "쾌적하고 여유로운 분위기"],
        tips: ["쇼핑 후 근처 맛집 탐방을 추천해요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.pacificplace.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9737151134587730382", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8D%BC%EC%8B%9C%ED%94%BD+%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "랜드마크 홍콩": {
        photos: ["/images/hong-kong/info/shopping/landmark-hong-kong.jpg"],
        summary: "홍콩의 품격을 느낄 수 있는 프리미엄 쇼핑몰",
        updatedAt: "2026-07-14",
        highlights: ["최상급 브랜드 집결", "세련된 인테리어"],
        tips: ["근처 미드레벨 에스컬레이터와 묶어서 가기 좋아요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오전 12:00; 화요일: 오전 7:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.landmark.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12700919006700787120", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%9C%EB%93%9C%EB%A7%88%ED%81%AC+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리 가든스": {
        photos: ["/images/hong-kong/info/shopping/lee-gardens-hong-kong.jpg"],
        summary: "Lee Garden 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["쇼핑몰", "평점 None", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3794507294577612425", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC+%EA%B0%80%EB%93%A0%EC%8A%A4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "소고 코즈웨이베이": {
        photos: ["/images/hong-kong/info/shopping/sogo-causeway-bay-hong-kong.jpg"],
        summary: "소고 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["백화점", "평점 4", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.sogo.com.hk/cwb/en/about/location.php", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10628107508132381519", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%8C%EA%B3%A0+%EC%BD%94%EC%A6%88%EC%9B%A8%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시티게이트 아울렛": {
        photos: ["/images/hong-kong/info/shopping/citygate-outlets-hong-kong.jpg"],
        summary: "Citygate Outlets 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["아울렛", "평점 4", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.citygateoutlets.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16182642354378582639", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%8B%B0%EA%B2%8C%EC%9D%B4%ED%8A%B8+%EC%95%84%EC%9A%B8%EB%A0%9B+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "몽콕 스니커즈 스트리트": {
        photos: ["/images/hong-kong/info/shopping/sneakers-street-mong-kok-hong-kong.jpg"],
        summary: "운동화거리 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["운동화 거리", "평점 4.1", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 2:15 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.sneakers-street.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10529769240247004000", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%BD%EC%BD%95+%EC%8A%A4%EB%8B%88%EC%BB%A4%EC%A6%88+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "레이디스 마켓": {
        photos: ["/images/hong-kong/info/shopping/ladies-market-hong-kong.jpg"],
        summary: "레이디스마켓 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["야시장·시장", "평점 3.9", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 11:30; 화요일: 오전 11:00 ~ 오후 11:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.ladies-market.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18255385939667396015", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%88%EC%9D%B4%EB%94%94%EC%8A%A4+%EB%A7%88%EC%BC%93+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "템플 스트리트 야시장": {
        photos: ["/images/hong-kong/info/shopping/temple-street-night-market-hong-kong.jpg"],
        summary: "템플스트리트 야시장 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["야시장", "평점 3.8", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 2:00~11:00; 화요일: 오후 2:00~11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.temple-street-night-market.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13248819550881067940", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%9C%ED%94%8C+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "캣 스트리트": {
        photos: ["/images/hong-kong/info/shopping/cat-street-hong-kong.jpg"],
        summary: "빈티지 소품과 앤티크한 매력이 가득한 홍콩의 골목길",
        updatedAt: "2026-07-14",
        highlights: ["희귀한 빈티지 아이템", "아기자기한 골동품 구경"],
        tips: ["보물찾기하듯 천천히 둘러보는 재미가 있어요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.cat-street.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8391373790670143822", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BA%A3+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "PMQ": {
        photos: ["/images/hong-kong/info/shopping/pmq-hong-kong.jpg"],
        summary: "홍콩 로컬 디자이너들의 감각적인 아이템을 만날 수 있는 편집숍",
        updatedAt: "2026-07-14",
        highlights: ["유니크한 디자인 소품", "로컬 브랜드 쇼핑"],
        tips: ["디자인 전시와 함께 구경하면 더 좋아요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6676989976376565510", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=PMQ+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "타이쿤": {
        photos: ["/images/hong-kong/info/shopping/tai-kwun-hong-kong.jpg"],
        summary: "옛 경찰서를 개조해 만든 예술과 문화가 공존하는 복합 공간",
        updatedAt: "2026-07-14",
        highlights: ["감각적인 현대 미술 전시", "힙한 분위기의 산책로"],
        tips: ["주변 카페와 함께 여유로운 오후를 즐기기 좋아요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9149147509840151390", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%9D%B4%EC%BF%A4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "압리우 스트리트 플리마켓": {
        photos: ["/images/hong-kong/info/shopping/apliu-street-flea-market-hong-kong.jpg"],
        summary: "Apliu Street Flea Market 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["전자·중고 시장", "평점 4", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14529168312992625309", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%95%EB%A6%AC%EC%9A%B0+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%ED%94%8C%EB%A6%AC%EB%A7%88%EC%BC%93+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "T 갤러리아 DFS 침사추이": {
        photos: ["/images/hong-kong/info/shopping/t-galleria-by-dfs-tsim-sha-tsui-hong-kong.jpg"],
        summary: "DFS Hong Kong, Canton Road 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["면세 쇼핑", "평점 3.4", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.dfs.com/en/hong-kong/stores/dfs-hong-kong-canton-road?utm_source=google-maps&utm_medium=organic", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9683233393704512032", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=T+%EA%B0%A4%EB%9F%AC%EB%A6%AC%EC%95%84+DFS+%EC%B9%A8%EC%82%AC%EC%B6%94%EC%9D%B4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "엘리먼츠": {
        photos: ["/images/hong-kong/info/shopping/elements-hong-kong.jpg"],
        summary: "Elements 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["대형 쇼핑몰", "평점 4.1", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.elementshk.com/tch/elements/main", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17152207272076068014", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%98%EB%A6%AC%EB%A8%BC%EC%B8%A0+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "랭함 플레이스": {
        photos: ["/images/hong-kong/info/shopping/langham-place-hong-kong.jpg"],
        summary: "랭함 플레이스 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["쇼핑몰", "평점 4.1", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:30 ~ 오후 10:30; 화요일: 오전 10:30 ~ 오후 10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.langhamplace.com.hk/en/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12457722493116700242", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%AD%ED%95%A8+%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "모코 몽콕": {
        photos: ["/images/hong-kong/info/shopping/moko-mong-kok-hong-kong.jpg"],
        summary: "Mothercare - MOKO (Mong Kok East) 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["쇼핑몰", "평점 4.9", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.mothercare.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12299141882714891977", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%EC%BD%94+%EB%AA%BD%EC%BD%95+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
