import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "이치란 본사총본점": {
        photos: ["/images/fukuoka/info/restaurants/ichiran-main-store-fukuoka.jpg"],
        summary: "이치란 본사 총본점 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["돈코츠 라멘", "평점 4.2", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "돈코츠 라멘", items: [{ name: "대표 메뉴", price: "¥1,000~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ichiran.com/shop/kyushu/sohonten/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7524611293723795643", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%B9%98%EB%9E%80+%EB%B3%B8%EC%82%AC%EC%B4%9D%EB%B3%B8%EC%A0%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "신신 텐진": {
        photos: ["/images/fukuoka/info/restaurants/shin-shin-tenjin-fukuoka.jpg"],
        summary: "신신라멘 텐진본점 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["하카타 돈코츠 라멘", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "하카타 돈코츠 라멘", items: [{ name: "대표 메뉴", price: "¥800~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 3:00; 화요일: 오전 11:00 ~ 오전 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.hakata-shinshin.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7588674618156966490", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%EC%8B%A0+%ED%85%90%EC%A7%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하카타 잇소우": {
        photos: ["/images/fukuoka/info/restaurants/hakata-issou-fukuoka.jpg"],
        summary: "하카타 잇소우 본점 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["진한 돈코츠 라멘", "평점 4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "진한 돈코츠 라멘", items: [{ name: "대표 메뉴", price: "¥800~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.hakata-issou.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14997510692567609889", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4%ED%83%80+%EC%9E%87%EC%86%8C%EC%9A%B0+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "간소 나가하마야": {
        photos: ["/images/fukuoka/info/restaurants/ganso-nagahamaya-fukuoka.jpg"],
        summary: "Ganso Nagahamaya 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["나가하마 라멘", "평점 3.8", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "나가하마 라멘", items: [{ name: "대표 메뉴", price: "¥700~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.ganso-nagahamaya.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5978470784556864719", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%84%EC%86%8C+%EB%82%98%EA%B0%80%ED%95%98%EB%A7%88%EC%95%BC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "모츠나베 야마나카 아카사카": {
        photos: ["/images/fukuoka/info/restaurants/motsunabe-yamanaka-akasaka-fukuoka.jpg"],
        summary: "야마나카 아카사카점 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["곱창전골", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "곱창전골", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00~11:00; 화요일: 오후 4:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://motsunabe-yamanaka.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11536954514415003809", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%EC%B8%A0%EB%82%98%EB%B2%A0+%EC%95%BC%EB%A7%88%EB%82%98%EC%B9%B4+%EC%95%84%EC%B9%B4%EC%82%AC%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "모츠나베 라쿠텐치 텐진": {
        photos: ["/images/fukuoka/info/restaurants/motsunabe-rakutenchi-tenjin-fukuoka.jpg"],
        summary: "간소 모츠나베 라쿠텐치 텐진 다이묘점 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["곱창전골", "평점 4.9", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "곱창전골", items: [{ name: "대표 메뉴", price: "¥3,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00 ~ 오전 12:00; 화요일: 오후 5:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://rakutenti.com/shop/tenjindaimyou-2/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18118223323934607011", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%EC%B8%A0%EB%82%98%EB%B2%A0+%EB%9D%BC%EC%BF%A0%ED%85%90%EC%B9%98+%ED%85%90%EC%A7%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하카타 모츠나베 오오야마 KITTE 하카타": {
        photos: ["/images/fukuoka/info/restaurants/hakata-motsunabe-ooyama-kitte-hakata-fukuoka.jpg"],
        summary: "하카타 모츠나베 오오야마 킷테 하카타점 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["미소 모츠나베", "평점 4.7", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "미소 모츠나베", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.motu-ooyama.com/shop/kittehakata/?utm_source=MEO", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2155830852855679075", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4%ED%83%80+%EB%AA%A8%EC%B8%A0%EB%82%98%EB%B2%A0+%EC%98%A4%EC%98%A4%EC%95%BC%EB%A7%88+KITTE+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "테츠나베 교자": {
        photos: ["/images/fukuoka/info/restaurants/tetsunabe-gyoza-fukuoka.jpg"],
        summary: "테츠나베 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["철판 교자", "평점 3.9", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "철판 교자", items: [{ name: "대표 메뉴", price: "¥1,500~3,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00 ~ 오전 12:00; 화요일: 오후 5:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tetsunabe.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4836541239986668089", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%8C%EC%B8%A0%EB%82%98%EB%B2%A0+%EA%B5%90%EC%9E%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하카타 기온 테츠나베": {
        photos: ["/images/fukuoka/info/restaurants/hakata-gion-tetsunabe-fukuoka.jpg"],
        summary: "하카타 기온 테츠나베 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["철판 교자", "평점 3.8", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "철판 교자", items: [{ name: "대표 메뉴", price: "¥1,500~3,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~10:30; 화요일: 오후 5:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.tetsunabe.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3435000343965319314", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4%ED%83%80+%EA%B8%B0%EC%98%A8+%ED%85%8C%EC%B8%A0%EB%82%98%EB%B2%A0+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카와야 케고": {
        photos: ["/images/fukuoka/info/restaurants/kawaya-kego-fukuoka.jpg"],
        summary: "바삭한 식감이 매력적인 닭껍니 꼬치 맛집",
        updatedAt: "2026-07-13",
        highlights: ["겉바속촉의 정석 닭껍질 꼬치", "기온역 인근 접근성 좋은 곳"],
        tips: ["인기가 많아 웨이팅 주의"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "닭껍질 꼬치", items: [{ name: "대표 메뉴", price: "¥2,000~4,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00 ~ 오전 1:00; 화요일: 오후 5:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tabelog.com/fukuoka/A4001/A400101/40059272/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8235473796301480163", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%99%80%EC%95%BC+%EC%BC%80%EA%B3%A0+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "야키토리 하치베이": {
        photos: ["/images/fukuoka/info/restaurants/yakitori-hachibei-fukuoka.jpg"],
        summary: "하카타식 야키토리의 진수를 느낄 수 있는 곳",
        updatedAt: "2026-07-13",
        highlights: ["불향 가득한 정통 꼬치구이", "현지인 추천 고평점 맛집"],
        tips: ["시원한 생맥주와 함께 즐기기 좋음"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "하카타식 야키토리", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hachibei.com/?page_id=11634", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14103666401349552486", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%BC%ED%82%A4%ED%86%A0%EB%A6%AC+%ED%95%98%EC%B9%98%EB%B2%A0%EC%9D%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "야마나카 스시": {
        photos: ["/images/fukuoka/info/restaurants/yamanaka-sushi-fukuoka.jpg"],
        summary: "신선하고 고급스러운 스시 코스 전문점",
        updatedAt: "2026-07-13",
        highlights: ["입안에서 녹는 고퀄리티 스시", "정갈하고 품격 있는 구성"],
        tips: ["특별한 식사를 위해 사전 예약 권장"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스시 코스", items: [{ name: "대표 메뉴", price: "¥5,000~15,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:00, 오후 6:00~10:00; 화요일: 오전 11:30 ~ 오후 3:00, 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.sushi-yamanaka.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9097123694393848080", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%BC%EB%A7%88%EB%82%98%EC%B9%B4+%EC%8A%A4%EC%8B%9C+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "효탄 스시": {
        photos: ["/images/fukuoka/info/restaurants/hyotan-sushi-fukuoka.jpg"],
        summary: "효탄 스시 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["가성비 스시", "평점 4.2", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "가성비 스시", items: [{ name: "대표 메뉴", price: "¥2,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~8:00; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1941832127262034526", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9A%A8%ED%83%84+%EC%8A%A4%EC%8B%9C+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "치카에": {
        photos: ["/images/fukuoka/info/restaurants/chikae-fukuoka.jpg"],
        summary: "치카에 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["이케스 해산물 정식", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "이케스 해산물 정식", items: [{ name: "대표 메뉴", price: "¥2,000~8,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~10:00; 화요일: 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://chikae.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13972728301569760158", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%98%EC%B9%B4%EC%97%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "갓포 요시다": {
        photos: ["/images/fukuoka/info/restaurants/kappo-yoshida-fukuoka.jpg"],
        summary: "캇포 요시다 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["도미 차즈케", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "도미 차즈케", items: [{ name: "대표 메뉴", price: "¥1,500~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 1:40, 오후 5:00~9:00; 화요일: 오전 11:30 ~ 오후 1:40, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.kappo-yoshida.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11175386012556088205", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%93%ED%8F%AC+%EC%9A%94%EC%8B%9C%EB%8B%A4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하카타 하나미도리 텐진": {
        photos: ["/images/fukuoka/info/restaurants/hakata-hanamidori-tenjin-fukuoka.jpg"],
        summary: "하카타 하나미도리 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["닭 전골", "평점 4.4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "닭 전골", items: [{ name: "대표 메뉴", price: "¥3,000~7,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hanamidori.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2104184371828536642", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4%ED%83%80+%ED%95%98%EB%82%98%EB%AF%B8%EB%8F%84%EB%A6%AC+%ED%85%90%EC%A7%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미즈타키 나가노": {
        photos: ["/images/fukuoka/info/restaurants/mizutaki-nagano-fukuoka.jpg"],
        summary: "미즈타키 나가노 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["닭 전골", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "닭 전골", items: [{ name: "대표 메뉴", price: "¥4,000~8,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~10:00; 화요일: 오후 12:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://mizutakinagano.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15175599952932772184", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%A6%88%ED%83%80%ED%82%A4+%EB%82%98%EA%B0%80%EB%85%B8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "요시즈카 우나기야": {
        photos: ["/images/fukuoka/info/restaurants/yoshizuka-unagiya-fukuoka.jpg"],
        summary: "요시즈카 우나기야 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["우나기 세이로무시", "평점 4.4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "우나기 세이로무시", items: [{ name: "대표 메뉴", price: "¥3,000~7,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18295488444069659604", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%94%EC%8B%9C%EC%A6%88%EC%B9%B4+%EC%9A%B0%EB%82%98%EA%B8%B0%EC%95%BC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "텐푸라 히라오 본점": {
        photos: ["/images/fukuoka/info/restaurants/tempura-hirao-main-store-fukuoka.jpg"],
        summary: "텐푸라 히라오 본점 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["갓 튀긴 텐푸라 정식", "평점 4.4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "갓 튀긴 텐푸라 정식", items: [{ name: "대표 메뉴", price: "¥1,000~2,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:30 ~ 오후 8:00; 화요일: 오전 10:30 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.hirao-foods.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8553018763670409200", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%90%ED%91%B8%EB%9D%BC+%ED%9E%88%EB%9D%BC%EC%98%A4+%EB%B3%B8%EC%A0%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우동 타이라": {
        photos: ["/images/fukuoka/info/restaurants/udon-taira-fukuoka.jpg"],
        summary: "우동 타이라 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["고보텐 우동", "평점 4.4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "고보텐 우동", items: [{ name: "대표 메뉴", price: "¥700~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00; 화요일: 오전 11:00 ~ 오후 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://en-gage.net/udontaira", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14632460878750667045", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%8F%99+%ED%83%80%EC%9D%B4%EB%9D%BC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다이치노 우동 하카타역": {
        photos: ["/images/fukuoka/info/restaurants/daichi-no-udon-hakata-station-fukuoka.jpg"],
        summary: "다이치노 우동 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["고보텐 우동", "평점 4.2", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "고보텐 우동", items: [{ name: "대표 메뉴", price: "¥700~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 3:30, 오후 5:00~9:00; 화요일: 오전 10:00 ~ 오후 3:30, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://daichinoudon.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7359042347508622945", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9D%B4%EC%B9%98%EB%85%B8+%EC%9A%B0%EB%8F%99+%ED%95%98%EC%B9%B4%ED%83%80%EC%97%AD+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하카타 다루마": {
        photos: ["/images/fukuoka/info/restaurants/hakata-daruma-fukuoka.jpg"],
        summary: "진한 국물 맛이 일품인 정통 돈코츠 라멘 전문점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["깊고 진한 돈코츠 육수", "현지 분위기 가득한 노포 감성"],
        tips: ["피크 타임에는 웨이팅이 있을 수 있으니 조금 서두르세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "돈코츠 라멘", items: [{ name: "대표 메뉴", price: "¥900~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 2:00; 화요일: 오전 11:00 ~ 오전 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://ra-hide.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5743454260566436637", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4%ED%83%80+%EB%8B%A4%EB%A3%A8%EB%A7%88+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "잇푸도 다이묘": {
        photos: ["/images/fukuoka/info/restaurants/ippudo-daimyo-fukuoka.jpg"],
        summary: "전 세계적으로 유명한 돈코츠 라멘의 본고장을 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-07-13",
        highlights: ["깔끔하고 담백한 육수", "쫄깃한 면발"],
        tips: ["다이묘 거리 쇼핑 후 들르기 좋은 위치예요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "돈코츠 라멘", items: [{ name: "대표 메뉴", price: "¥900~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://stores.ippudo.com/1001?utm_source=Yext&utm_medium=Yext&utm_campaign=Listings", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14356439771692394902", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%87%ED%91%B8%EB%8F%84+%EB%8B%A4%EC%9D%B4%EB%AC%98+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "탄야 하카타": {
        photos: ["/images/fukuoka/info/restaurants/tanya-hakata-fukuoka.jpg"],
        summary: "부드러운 우설을 합리적인 가격에 즐길 수 있는 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["입안에서 녹는 우설 구이", "든든한 우설 정식"],
        tips: ["하카타역 지하 상가에 있어 접근성이 매우 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "우설 정식", items: [{ name: "대표 메뉴", price: "¥1,500~3,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 10:00; 화요일: 오전 7:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.jrfs.co.jp/tanya", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13220771836776839371", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%84%EC%95%BC+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하카타 로바타 피시맨": {
        photos: ["/images/fukuoka/info/restaurants/hakata-robata-fishman-fukuoka.jpg"],
        summary: "하카타로바타 피쉬맨 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해산물·로바타야키", "평점 4.9", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물·로바타야키", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:30, 오후 4:30~11:00; 화요일: 오전 11:00 ~ 오후 2:30, 오후 4:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tabelog.com/fukuoka/A4001/A400104/40006960/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10989049775176827923", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4%ED%83%80+%EB%A1%9C%EB%B0%94%ED%83%80+%ED%94%BC%EC%8B%9C%EB%A7%A8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "간소 하카타 멘타이주": {
        photos: ["/images/fukuoka/info/restaurants/ganso-hakata-mentaiju-fukuoka.jpg"],
        summary: "원조 하카타 멘타이쥬 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["멘타이주", "평점 3.9", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "멘타이주", items: [{ name: "대표 메뉴", price: "¥2,000~4,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 10:30; 화요일: 오전 7:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.mentaiju.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16000112296655436028", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%84%EC%86%8C+%ED%95%98%EC%B9%B4%ED%83%80+%EB%A9%98%ED%83%80%EC%9D%B4%EC%A3%BC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "렉 커피 야쿠인": {
        photos: ["/images/fukuoka/info/restaurants/rec-coffee-yakuin-fukuoka.jpg"],
        summary: "REC COFFEE Yakuin Station Shop 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스페셜티 커피", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스페셜티 커피", items: [{ name: "대표 메뉴", price: "¥700~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오전 12:00; 화요일: 오전 8:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://rec-coffee.com/pages/coffee-shop-yakuin", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3671326395210033113", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%89+%EC%BB%A4%ED%94%BC+%EC%95%BC%EC%BF%A0%EC%9D%B8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마누 커피 하루요시": {
        photos: ["/images/fukuoka/info/restaurants/manu-coffee-haruyoshi-fukuoka.jpg"],
        summary: "후쿠오카 로컬 감성을 제대로 느낄 수 있는 커피 맛집",
        updatedAt: "2026-07-13",
        highlights: ["깊은 풍미의 로컬 원두", "힙한 카페 분위기"],
        tips: ["테이크아웃해서 근처 산책하며 즐기기 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로컬 커피", items: [{ name: "대표 메뉴", price: "¥600~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오전 12:00; 화요일: 오전 9:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.manucoffee.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9786810668155644479", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%88%84+%EC%BB%A4%ED%94%BC+%ED%95%98%EB%A3%A8%EC%9A%94%EC%8B%9C+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시로 커피": {
        photos: ["/images/fukuoka/info/restaurants/siro-coffee-fukuoka.jpg"],
        summary: "예쁜 인테리어와 달콤한 디저트가 매력적인 감성 카페",
        updatedAt: "2026-07-13",
        highlights: ["비주얼 끝판왕 디저트", "아늑하고 세련된 공간"],
        tips: ["인기 맛집이라 웨이팅 주의하세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "감성 카페·디저트", items: [{ name: "대표 메뉴", price: "¥700~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:30~6:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.instagram.com/siro_coffee/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2925916062823619029", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EB%A1%9C+%EC%BB%A4%ED%94%BC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빌즈 후쿠오카": {
        photos: ["/images/fukuoka/info/restaurants/bills-fukuoka.jpg"],
        summary: "입안에서 녹는 리코타 팬케이크로 유명한 브런치 명소",
        updatedAt: "2026-07-13",
        highlights: ["폭신한 리코타 팬케이크", "공원 뷰와 함께하는 여유"],
        tips: ["수이조 공원 나들이 코스로 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "리코타 팬케이크", items: [{ name: "대표 메뉴", price: "¥1,500~3,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2732295606928101360", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%8C%EC%A6%88+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
