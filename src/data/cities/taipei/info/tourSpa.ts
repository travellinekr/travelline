import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "타이베이 101 전망대": {
        photos: ["/images/taipei/info/tourSpa/taipei-101-observatory.jpg"],
        summary: "타이베이의 화려한 스카이라인과 환상적인 야경을 한눈에 담을 수 있는 대표 랜드마크입니다.",
        updatedAt: "2026-07-13",
        highlights: ["타이베이 전경 감상", "환상적인 도시 야경"],
        tips: ["일몰 시간에 맞춰 방문하면 낮과 밤의 풍경을 모두 즐길 수 있어요."],
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "110 대만 Taipei City, Xinyi District, Xicun Village, Section 5, Xinyi Rd, 7號89樓", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.taipei-101.com.tw/tw/observatory", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15350791680915855665", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+101+%EC%A0%84%EB%A7%9D%EB%8C%80+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "국립고궁박물원": {
        photos: ["/images/taipei/info/tourSpa/national-palace-museum-taipei.jpg"],
        summary: "세계적인 규모를 자랑하는 중화권 최고의 유물을 만날 수 있는 박물관입니다.",
        updatedAt: "2026-07-13",
        highlights: ["방대한 역사적 가치를 지닌 유물", "중화권 문화의 정수 관람"],
        tips: ["주요 유물은 오디오 가이드를 활용해 깊이 있게 관람하는 것을 추천해요."],
        hours: "월요일: 휴무일; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "2~3시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "No. 221, Sec 2, Zhi Shan Rd, Shilin District, Taipei City, 대만 111", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.npm.gov.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6732160267334584769", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%AD%EB%A6%BD%EA%B3%A0%EA%B6%81%EB%B0%95%EB%AC%BC%EC%9B%90+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "중정기념당": {
        photos: ["/images/taipei/info/tourSpa/chiang-kai-shek-memorial-hall-taipei.jpg"],
        summary: "웅장한 광장과 근위병 교대식을 통해 대만의 역사를 느낄 수 있는 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["근위병 교대식 관람", "탁 트인 넓은 광장 산책"],
        tips: ["교대식 시간을 미리 체크하고 방문하면 더욱 알찬 관람이 가능합니다."],
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        duration: "1~2시간",
        price: "무료 구역 중심",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "100 대만 타이베이 중정 구", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.cksmh.gov.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4893446054581594546", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A4%91%EC%A0%95%EA%B8%B0%EB%85%90%EB%8B%B9+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "용산사": {
        photos: ["/images/taipei/info/tourSpa/longshan-temple-taipei.jpg"],
        summary: "현지 신앙과 전통 건축을 가까이 볼 수 있는 대표 사찰입니다.",
        updatedAt: "2026-07-13",
        highlights: ["현지 신앙과 전통 건축을 가까이 볼 수 있는 대표 사찰입니다.", "평점 5", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오후 5:00~10:00; 화요일: 오후 5:00~10:00",
        duration: "1시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "No. 153號, Section 1, Xiyuan Rd, Fumin Village, Wanhua District, Taipei City, 대만 108", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://tourmeaway.com/tours/foodtour", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5002691951716191713", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%A9%EC%82%B0%EC%82%AC+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "베이터우 온천박물관": {
        photos: ["/images/taipei/info/tourSpa/beitou-hot-spring-museum-taipei.jpg"],
        summary: "온천 마을 산책과 함께 대만 온천 문화를 이해하기 좋은 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["온천 마을 산책과 함께 대만 온천 문화를 이해하기 좋은 장소입니다.", "평점 4.5", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 휴무일; 화요일: 오전 10:00 ~ 오후 6:00",
        duration: "1~2시간",
        price: "시설별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "No. 2, Zhongshan Rd, Linquan Village, Beitou District, Taipei City, 대만 112", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://hotspringmuseum.taipei/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12533956645974968892", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%EC%9D%B4%ED%84%B0%EC%9A%B0+%EC%98%A8%EC%B2%9C%EB%B0%95%EB%AC%BC%EA%B4%80+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마오콩 곤돌라": {
        photos: ["/images/taipei/info/tourSpa/maokong-gondola-taipei.jpg"],
        summary: "곤돌라로 산 위 찻집과 타이베이 전망을 즐기는 반나절 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["곤돌라로 산 위 찻집과 타이베이 전망을 즐기는 반나절 코스입니다.", "평점 4.6", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 8:00; 화요일: 오전 9:00 ~ 오후 8:00",
        duration: "2~4시간",
        price: "탑승권별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "No. 200號, Lane 157, Section 3, Zhinan Rd, Zhinan Village, Wenshan District, Taipei City, 대만 116", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.gondola.taipei/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6907924584566200666", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%98%A4%EC%BD%A9+%EA%B3%A4%EB%8F%8C%EB%9D%BC+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "지우펀 옛거리": {
        photos: ["/images/taipei/info/tourSpa/jiufen-old-street-taiwan.jpg"],
        summary: "홍등 골목과 찻집, 간식을 즐기는 타이베이 근교 대표 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["홍등 골목과 찻집, 간식을 즐기는 타이베이 근교 대표 코스입니다.", "평점 4.3", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        duration: "반나절",
        price: "교통·투어별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Jishan St, Ruifang District, New Taipei City, 대만 224", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6851525733968553938", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%80%EC%9A%B0%ED%8E%80+%EC%98%9B%EA%B1%B0%EB%A6%AC+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "예류지질공원": {
        photos: ["/images/taipei/info/tourSpa/yehliu-geopark-taiwan.jpg"],
        summary: "기암 지형과 해안 풍경을 보는 북부 해안 대표 자연 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["기암 지형과 해안 풍경을 보는 북부 해안 대표 자연 명소입니다.", "평점 4.4", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:00 ~ 오후 6:00; 화요일: 오전 8:00 ~ 오후 6:00",
        duration: "2~3시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "20744 대만 New Taipei City, Wanli District, Yeliu Village, 港東路167-1號", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.ylgeopark.org.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16487985207228655703", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%88%EB%A5%98%EC%A7%80%EC%A7%88%EA%B3%B5%EC%9B%90+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "단수이 옛거리": {
        photos: ["/images/taipei/info/tourSpa/tamsui-old-street-taipei.jpg"],
        summary: "강변 산책, 노을, 먹거리를 함께 즐기기 좋은 MRT 당일 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["강변 산책, 노을, 먹거리를 함께 즐기기 좋은 MRT 당일 코스입니다.", "평점 4.4", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "2~4시간",
        price: "무료 구역 중심",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "草東里中正路, 重建街, 清水街一帶, Tamsui District, New Taipei City, 대만 251", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://newtaipei.travel/zh-tw/attractions/detail/109658", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11820853155828998597", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A8%EC%88%98%EC%9D%B4+%EC%98%9B%EA%B1%B0%EB%A6%AC+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "타이베이 동물원": {
        photos: ["/images/taipei/info/tourSpa/taipei-zoo.jpg"],
        summary: "마오콩 곤돌라와 함께 묶기 좋은 가족 여행 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["마오콩 곤돌라와 함께 묶기 좋은 가족 여행 명소입니다.", "평점 4.6", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "2~4시간",
        price: "입장권별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "No. 30號, Section 2, Xinguang Rd, Wanxing Village, Wenshan District, Taipei City, 대만 116", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12321293314391594854", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%EB%8F%99%EB%AC%BC%EC%9B%90+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스펀 폭포": {
        photos: ["/images/taipei/info/tourSpa/shifen-waterfall.jpg"],
        summary: "시원한 물줄기가 압권인 대만의 나이아가라, 스펀 폭포",
        updatedAt: "2026-07-23",
        highlights: ["웅장하고 거대한 규모의 폭포 경관", "주변 산책로를 따라 즐기는 시원한 자연 풍경", "스펀 천등 날리기 체험과 연계 가능한 코스"],
        tips: ["폭포 근처는 물보라로 인해 옷이 젖을 수 있으니 주의하세요.", "스펀 마을의 천등 날리기 체험과 함께 방문하면 더욱 알찬 여행이 됩니다."],
        hours: "월요일: 오전 9:00 ~ 오후 4:30; 화요일: 오전 9:00 ~ 오후 4:30",
        duration: "1~2시간",
        price: "무료 구역 중심",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "226 대만 New Taipei City, Pingxi District, Nanshan Village, 乾坑10號", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=12687194182303361353", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=12687194182303361353", type: "guide", description: "지도에서 위치 보기" }]
    },
    "홍마오청": {
        photos: ["/images/taipei/info/tourSpa/fort-san-domingo.jpg"],
        summary: "단수이 여행의 필수 코스로, 역사적 가치와 아름다운 풍경을 동시에 즐길 수 있는 문화 명소입니다.",
        updatedAt: "2026-07-23",
        highlights: ["스페인과 네덜란드 양식이 혼합된 이국적인 건축물", "붉은 벽돌과 초록빛 나무가 어우러진 인생샷 포토존", "단수이 강변의 평화로운 풍경을 조망할 수 있는 전망"],
        tips: ["주변 단수이 라오제 거리와 함께 둘러보며 길거리 음식을 즐기기에 좋습니다."],
        hours: "월요일: 오전 9:30 ~ 오후 5:00; 화요일: 오전 9:30 ~ 오후 5:00",
        duration: "1시간",
        price: "입장권별 상이",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "251 대만 New Taipei City, Tamsui District, Wenhua Village, 中正路28巷1號", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://www.tshs.ntpc.gov.tw/xmdoc/cont?xsmsid=0L271515544528923536&sid=0L271521471889545285", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=17282740888371650269", type: "guide", description: "지도에서 위치 보기" }]
    }
};

export default info;
