import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "스미냑 빌리지": {
        photos: ["/images/bali/info/shopping/seminyak-village-bali.jpg"],
        summary: "스미냑 빌리지 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 식당가, 실내 쇼핑", "평점 4.1", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.seminyakvillage.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11504385821411613754", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EB%AF%B8%EB%83%91+%EB%B9%8C%EB%A6%AC%EC%A7%80+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스미냑 스퀘어": {
        photos: ["/images/bali/info/shopping/seminyak-square-bali.jpg"],
        summary: "Seminyak Square Hotel And Villas 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["부티크, 기념품, 카페", "평점 5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10528880290974469178", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EB%AF%B8%EB%83%91+%EC%8A%A4%ED%80%98%EC%96%B4+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "비치워크 쇼핑센터": {
        photos: ["/images/bali/info/shopping/beachwalk-shopping-center-bali.jpg"],
        summary: "비치워크 쇼핑센터 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 다이닝, 꾸따 동선", "평점 4.5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://beachwalkbali.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2685757038776770022", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%84%EC%B9%98%EC%9B%8C%ED%81%AC+%EC%87%BC%ED%95%91%EC%84%BC%ED%84%B0+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "디스커버리 쇼핑몰": {
        photos: ["/images/bali/info/shopping/discovery-shopping-mall-bali.jpg"],
        summary: "Beachwell Bali, Discovery mall 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쇼핑, 식당가, 꾸따 해변", "평점 5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11650716874786225434", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94%EC%8A%A4%EC%BB%A4%EB%B2%84%EB%A6%AC+%EC%87%BC%ED%95%91%EB%AA%B0+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "몰 발리 갤러리아": {
        photos: ["/images/bali/info/shopping/mal-bali-galeria.jpg"],
        summary: "Orlena Mal Bali Galeria 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["마트, 패션, 식당가", "평점 5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.orlenalycious.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16341034795191765734", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%B0+%EB%B0%9C%EB%A6%AC+%EA%B0%A4%EB%9F%AC%EB%A6%AC%EC%95%84+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "트랜스 스튜디오 몰 발리": {
        photos: ["/images/bali/info/shopping/trans-studio-mall-bali.jpg"],
        summary: "Trans Studio Mall Bali 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쇼핑, 실내 시설, 식당가", "평점 4.4", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://transshoppingmall.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10826202174461944473", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8A%B8%EB%9E%9C%EC%8A%A4+%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4+%EB%AA%B0+%EB%B0%9C%EB%A6%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "레벨21 몰 덴파사르": {
        photos: ["/images/bali/info/shopping/level-21-mall-denpasar-bali.jpg"],
        summary: "Level 21 Mall 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 영화관, 식당가", "평점 4.6", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://level21mall.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2265962218905788305", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%88%EB%B2%A821+%EB%AA%B0+%EB%8D%B4%ED%8C%8C%EC%82%AC%EB%A5%B4+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리빙월드 덴파사르": {
        photos: ["/images/bali/info/shopping/living-world-denpasar-bali.jpg"],
        summary: "Living World Mall Denpasar 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쇼핑, 다이닝, 생활용품", "평점 4.6", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://denpasar.livingworld.co.id/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9152065353346322721", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EB%B9%99%EC%9B%94%EB%93%9C+%EB%8D%B4%ED%8C%8C%EC%82%AC%EB%A5%B4+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "수카와티 아트 마켓": {
        photos: ["/images/bali/info/shopping/sukawati-art-market-bali.jpg"],
        summary: "Sukawati Street Market 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["그림, 공예품, 기념품", "평점 5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 4:30; 화요일: 오전 7:30 ~ 오후 4:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10493413356971676537", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%98%EC%B9%B4%EC%99%80%ED%8B%B0+%EC%95%84%ED%8A%B8+%EB%A7%88%EC%BC%93+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우붓 아트 마켓": {
        photos: ["/images/bali/info/shopping/ubud-art-market-bali.jpg"],
        summary: "Bali Becik Art Market 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["라탄, 의류, 공예품", "평점 5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1867843771783129079", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%B6%93+%EC%95%84%ED%8A%B8+%EB%A7%88%EC%BC%93+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "꾸따 아트 마켓": {
        photos: ["/images/bali/info/shopping/kuta-art-market-bali.jpg"],
        summary: "Kuta Art Market 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["기념품, 의류, 해변 소품", "평점 4.1", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/khoirurrahman45/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8005382987254084571", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%BE%B8%EB%94%B0+%EC%95%84%ED%8A%B8+%EB%A7%88%EC%BC%93+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크리스나 올레올레 선셋로드": {
        photos: ["/images/bali/info/shopping/krisna-oleh-oleh-bali-sunset-road.jpg"],
        summary: "Krisna Oleh - Oleh Bali Sunset Road 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["발리 과자, 기념품, 의류", "평점 4.5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://krisnabali.co.id/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15226211825263843037", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A6%AC%EC%8A%A4%EB%82%98+%EC%98%AC%EB%A0%88%EC%98%AC%EB%A0%88+%EC%84%A0%EC%85%8B%EB%A1%9C%EB%93%9C+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "에를랑가 2 기념품": {
        photos: ["/images/bali/info/shopping/erlangga-2-bali-souvenir.jpg"],
        summary: "Erlangga 2 Pusat Oleh-oleh Bali 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["기념품, 라탄, 의류", "평점 4.6", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7488418528225374249", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EB%A5%BC%EB%9E%91%EA%B0%80+2+%EA%B8%B0%EB%85%90%ED%92%88+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈탕 슈퍼마켓 스미냑": {
        photos: ["/images/bali/info/shopping/bintang-supermarket-seminyak-bali.jpg"],
        summary: "Bintang Supermarket Seminyak 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["간식, 생필품, 음료", "평점 4.4", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:30 ~ 오후 10:00; 화요일: 오전 7:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://bintangsupermarket.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3855921151964447320", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%ED%83%95+%EC%8A%88%ED%8D%BC%EB%A7%88%EC%BC%93+%EC%8A%A4%EB%AF%B8%EB%83%91+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "페피토 마켓 짱구": {
        photos: ["/images/bali/info/shopping/pepito-market-canggu-bali.jpg"],
        summary: "Pepito Market Batu Bolong 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["식료품, 수입 식재료", "평점 4.4", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오전 12:00; 화요일: 오전 7:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.pepitosupermarket.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14381867236429844118", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%98%ED%94%BC%ED%86%A0+%EB%A7%88%EC%BC%93+%EC%A7%B1%EA%B5%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "짱구 스테이션": {
        photos: ["/images/bali/info/shopping/canggu-station-bali.jpg"],
        summary: "Canggu Station Restaurant 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["식료품, 생활용품, 수입 식재료", "평점 4.9", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/canggustation.official?igsh=aWw3bnI4dndkMThm", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7736804867465044667", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%B1%EA%B5%AC+%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하디스 사누르": {
        photos: ["/images/bali/info/shopping/hardys-sanur-bali.png"],
        summary: "Arta Sedana Sanur 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["생필품, 기념품, 식료품", "평점 4", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/artasedana_sanur/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17120332550542063512", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%94%94%EC%8A%A4+%EC%82%AC%EB%88%84%EB%A5%B4+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사마디 선데이 마켓": {
        photos: ["/images/bali/info/shopping/samadi-sunday-market-canggu-bali.jpg"],
        summary: "SΛMΛDI Super Foods & Wellness 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로컬 제품, 유기농 식품", "평점 4.4", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:30 ~ 오후 9:00; 화요일: 오전 6:30 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.samadibali.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2750921785388538930", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EB%A7%88%EB%94%94+%EC%84%A0%EB%8D%B0%EC%9D%B4+%EB%A7%88%EC%BC%93+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "러브 앵커 짱구": {
        photos: ["/images/bali/info/shopping/love-anchor-canggu-bali.jpg"],
        summary: "Love Anchor Canggu 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["의류, 액세서리, 기념품", "평점 4.2", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.loveanchorcanggu.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17796933794229069746", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9F%AC%EB%B8%8C+%EC%95%B5%EC%BB%A4+%EC%A7%B1%EA%B5%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스미냑 플리마켓": {
        photos: ["/images/bali/info/shopping/the-flea-market-seminyak-bali.jpg"],
        summary: "The Flea Market 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["의류, 액세서리, 기념품", "평점 3.7", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1899844787777798866", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EB%AF%B8%EB%83%91+%ED%94%8C%EB%A6%AC%EB%A7%88%EC%BC%93+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "발리 밀레니아 팩토리 아울렛": {
        photos: ["/images/bali/info/shopping/bali-millenia-factory-outlet.jpg"],
        summary: "저렴한 가격과 편리한 쇼핑 환경을 제공하는 아울렛입니다.",
        updatedAt: "2026-08-10",
        highlights: ["저렴한 가격", "편리한 쇼핑", "좋은 품질"],
        tips: ["가성비 좋은 쇼핑", "편리한 위치"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=197855115704330507", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%9C%EB%A6%AC+%EB%B0%80%EB%A0%88%EB%8B%88%EC%95%84+%ED%8C%A9%ED%86%A0%EB%A6%AC+%EC%95%84%EC%9A%B8%EB%A0%9B+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오리지널 서프 아울렛 (OSO)": {
        photos: ["/images/bali/info/shopping/original-surf-outlet-oso-store-bali.jpg"],
        summary: "다양한 상품 구성과 저렴한 가격으로 재방문율이 높은 아울렛입니다.",
        updatedAt: "2026-08-10",
        highlights: ["다양한 상품", "저렴한 가격", "높은 재방문율"],
        tips: ["사이즈 재고 확인", "다양한 상품 탐색"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:30 ~ 오후 10:00; 화요일: 오전 8:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1337749957911794704", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%A6%AC%EC%A7%80%EB%84%90+%EC%84%9C%ED%94%84+%EC%95%84%EC%9A%B8%EB%A0%9B+%28OSO%29+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "발리 듀티 프리 (Dufry)": {
        photos: ["/images/bali/info/shopping/bali-duty-free-by-dufry.jpg"],
        summary: "공항 내 위치하여 다양한 기념품과 초콜릿, 향수 등을 구매할 수 있는 면세점입니다.",
        updatedAt: "2026-08-10",
        highlights: ["공항 내 위치", "다양한 기념품", "친절한 직원"],
        tips: ["할인 혜택 확인", "기념품 구매"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://bali.shopdutyfree.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5676622273430935618", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%9C%EB%A6%AC+%EB%93%80%ED%8B%B0+%ED%94%84%EB%A6%AC+%28Dufry%29+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "DFS 발리 에어포트": {
        photos: ["/images/bali/info/shopping/dfs-bali-airport.jpg"],
        summary: "공항 내 위치한 주요 면세점으로 이용객이 많은 곳입니다.",
        updatedAt: "2026-08-10",
        highlights: ["공항 내 위치", "주요 면세점", "쾌적한 환경"],
        tips: ["정품 확인", "쇼핑 리스트 준비"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 5:00 ~ 오전 1:00; 화요일: 오전 5:00 ~ 오전 1:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.dfs.com/en/bali/stores/dfs-bali-ngurah-rai-international-airport?utm_source=google-maps&utm_medium=organic", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12262717155818042552", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=DFS+%EB%B0%9C%EB%A6%AC+%EC%97%90%EC%96%B4%ED%8F%AC%ED%8A%B8+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 케랑장 발리": {
        photos: ["/images/bali/info/shopping/the-keranjang-bali.jpg"],
        summary: "매우 높은 평점을 보유한 발리의 대표적인 기념품 전문점입니다.",
        updatedAt: "2026-08-10",
        highlights: ["독특한 기념품", "대규모 매장", "다양한 상품"],
        tips: ["3층 매장 탐색", "기념품 쇼핑"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://thekeranjangbali.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16207318227159565426", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%BC%80%EB%9E%91%EC%9E%A5+%EB%B0%9C%EB%A6%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
