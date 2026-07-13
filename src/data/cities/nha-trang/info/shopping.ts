import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "담시장": {
        photos: ["/images/nha-trang/info/shopping/dam-market-nha-trang.jpg"],
        summary: "Dam Market 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["기념품, 건어물, 로컬 쇼핑", "평점 3.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 5:00 ~ 오후 6:30; 화요일: 오전 5:00 ~ 오후 6:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16690157337651283829", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%B4%EC%8B%9C%EC%9E%A5+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "나트랑 센터": {
        photos: ["/images/nha-trang/info/shopping/nha-trang-center.jpg"],
        summary: "냐짱센터 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쇼핑, 식당가, 실내 동선", "평점 4.2", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://nhatrangcenter.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16329877035520827187", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%ED%8A%B8%EB%9E%91+%EC%84%BC%ED%84%B0+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "롯데마트 나트랑": {
        photos: ["/images/nha-trang/info/shopping/lotte-mart-nha-trang.jpg"],
        summary: "롯데마트 냐짱 골드코스트 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["과자, 기념품, 생필품", "평점 4.5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:30 ~ 오후 10:00; 화요일: 오전 8:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://lottemart.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12564291677517669989", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%AF%EB%8D%B0%EB%A7%88%ED%8A%B8+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈컴 플라자 쩐푸": {
        photos: ["/images/nha-trang/info/shopping/vincom-plaza-tran-phu-nha-trang.jpg"],
        summary: "Vincom Trần Phú 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 마트, 식당가", "평점 4.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12191973860686659928", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EC%BB%B4+%ED%94%8C%EB%9D%BC%EC%9E%90+%EC%A9%90%ED%91%B8+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "GO! 나트랑": {
        photos: ["/images/nha-trang/info/shopping/go-nha-trang-big-c.jpg"],
        summary: "Miniso go big c nha trang 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["마트 쇼핑, 식료품", "평점 4.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://minisovietnam.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3159735641050521135", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=GO%21+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "쏨머이 시장": {
        photos: ["/images/nha-trang/info/shopping/xom-moi-market-nha-trang.jpg"],
        summary: "Xom Moi Market 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로컬 식재료, 생활용품", "평점 4", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 5:00; 화요일: 오전 6:00 ~ 오후 5:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5267769530783173301", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8F%A8%EB%A8%B8%EC%9D%B4+%EC%8B%9C%EC%9E%A5+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "나트랑 야시장": {
        photos: ["/images/nha-trang/info/shopping/nha-trang-night-market.jpg"],
        summary: "Souvenirs Mrs. Trinh - Nha Trang Night Market 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["기념품, 의류, 야식", "평점 5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 3:00~11:00; 화요일: 오후 3:00~11:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10838335052295821984", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%ED%8A%B8%EB%9E%91+%EC%95%BC%EC%8B%9C%EC%9E%A5+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "맥시마크 쇼핑몰": {
        photos: ["/images/nha-trang/info/shopping/maximark-shopping-mall-nha-trang.jpg"],
        summary: "Vincom Plaza Lê Thánh Tôn 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["마트, 생활용품, 식당가", "평점 4.5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://vincom.com.vn/vincom-plaza-le-thanh-ton", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1802869941442867287", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%A5%EC%8B%9C%EB%A7%88%ED%81%AC+%EC%87%BC%ED%95%91%EB%AA%B0+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "에이마트 나트랑": {
        photos: ["/images/nha-trang/info/shopping/a-mart-nha-trang.jpg"],
        summary: "4U Mart & Souvenirs - Siêu thị & Quà lưu niệm Nha Trang 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["간식, 음료, 생활용품", "평점 5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 11:00; 화요일: 오전 7:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10164038367829400863", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EC%9D%B4%EB%A7%88%ED%8A%B8+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈르엉 시장": {
        photos: ["/images/nha-trang/info/shopping/vinh-luong-market-nha-trang.jpg"],
        summary: "Chợ Hải Sản Cảng Vĩnh Lương 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해산물, 로컬 시장", "평점 4.3", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 9:00; 화요일: 오전 6:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14028121393395216724", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EB%A5%B4%EC%97%89+%EC%8B%9C%EC%9E%A5+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코옵마트 나트랑": {
        photos: ["/images/nha-trang/info/shopping/sieu-thi-co-opmart-nha-trang.jpg"],
        summary: "꿉마트 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로컬 마트, 생필품", "평점 4.2", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://cooponline.vn/?store=140&fbclid=IwAR1HSym9wf_jaIYvONRlyMmcuah9JsIMORgbgf0eQWx9vxn5mvlOEuEp_o4", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16074976491359320135", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EC%98%B5%EB%A7%88%ED%8A%B8+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "AB 센트럴 스퀘어": {
        photos: ["/images/nha-trang/info/shopping/ab-central-square-nha-trang.jpg"],
        summary: "OLV AB Shopping Mall Nha Trang 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쇼핑, 식당가, 시내 동선", "평점 5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.olv.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13113148869448299118", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=AB+%EC%84%BC%ED%8A%B8%EB%9F%B4+%EC%8A%A4%ED%80%98%EC%96%B4+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "골드코스트 몰 나트랑": {
        photos: ["/images/nha-trang/info/shopping/gold-coast-mall-nha-trang.jpg"],
        summary: "Gold Coast Mall Nha Trang 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["롯데마트, 쇼핑, 다이닝", "평점 4.3", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://goldcoastmall.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7969175389610413624", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A8%EB%93%9C%EC%BD%94%EC%8A%A4%ED%8A%B8+%EB%AA%B0+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈컴 플라자 레탄톤": {
        photos: ["/images/nha-trang/info/shopping/vincom-plaza-le-thanh-ton-nha-trang.jpg"],
        summary: "MR.D.I.Y Vincom Plaza Lê Thánh Tôn, Nha Trang 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 마트, 영화관", "평점 5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.mrdiy.com/vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12792561036429199613", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EC%BB%B4+%ED%94%8C%EB%9D%BC%EC%9E%90+%EB%A0%88%ED%83%84%ED%86%A4+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "메가마켓 나트랑": {
        photos: ["/images/nha-trang/info/shopping/mega-market-nha-trang.jpg"],
        summary: "MM Mega Market Nha Trang 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["대용량 식료품, 생활용품", "평점 4.5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:30 ~ 오후 10:00; 화요일: 오전 7:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15352785518334574526", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EA%B0%80%EB%A7%88%EC%BC%93+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사파이어 나트랑 센터": {
        photos: ["/images/nha-trang/info/shopping/sapphire-nha-trang-center.jpg"],
        summary: "Nha Trang Center Place 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["시내 쇼핑, 식당가", "평점 5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8483173848316283689", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%ED%8C%8C%EC%9D%B4%EC%96%B4+%EB%82%98%ED%8A%B8%EB%9E%91+%EC%84%BC%ED%84%B0+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "프엉사이 시장": {
        photos: ["/images/nha-trang/info/shopping/cho-phuong-sai-nha-trang.jpg"],
        summary: "Sạp trái cây cô Thuỷ (chợ Phương Sài) 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["생활용품, 식재료", "평점 5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 4:30; 화요일: 오전 6:00 ~ 오후 4:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4015092775069772260", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EC%97%89%EC%82%AC%EC%9D%B4+%EC%8B%9C%EC%9E%A5+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "혼로 시장": {
        photos: ["/images/nha-trang/info/shopping/hon-ro-market-nha-trang.jpg"],
        summary: "혼 로 마켓 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해산물, 로컬 시장", "평점 3.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 3:58 ~ 오후 6:58; 화요일: 오전 3:58 ~ 오후 6:58",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3878455287950676199", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%BC%EB%A1%9C+%EC%8B%9C%EC%9E%A5+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미니소 나트랑 센터": {
        photos: ["/images/nha-trang/info/shopping/miniso-nha-trang-center.jpg"],
        summary: "MINISO VINCOM TRẦN PHÚ NHA TRANG 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["잡화, 여행 소품", "평점 4.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=61551901207922&mibextid=LQQJ4d", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7252280096463063223", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EB%8B%88%EC%86%8C+%EB%82%98%ED%8A%B8%EB%9E%91+%EC%84%BC%ED%84%B0+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "윈마트 나트랑 센터": {
        photos: ["/images/nha-trang/info/shopping/winmart-nha-trang-center.jpg"],
        summary: "Siêu thị WinMart Nha Trang 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["간식, 음료, 생필품", "평점 4.8", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14219739199951568781", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%88%EB%A7%88%ED%8A%B8+%EB%82%98%ED%8A%B8%EB%9E%91+%EC%84%BC%ED%84%B0+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
