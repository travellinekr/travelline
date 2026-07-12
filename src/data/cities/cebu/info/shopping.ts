import type { ShoppingInfo } from '@/data/card-info-types';

const shoppingInfo: Record<string, ShoppingInfo> = {
    "아얄라 센터 세부": {
        photos: ["/images/cebu/info/shopping/ayala-center-cebu.jpg"],
        summary: "식사와 쇼핑을 동시에 해결하기 좋은 프리미엄 쇼핑몰입니다.",
        updatedAt: "2026-07-12",
        highlights: ["브랜드 매장", "정원형 공간"],
        tips: ["더위를 피하기 좋습니다"],
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        taxRefund: { available: false, note: "필리핀 일반 쇼핑몰은 여행자 즉시 환급 제도가 제한적이므로 매장별 확인이 필요합니다." },
        payment: ["현금", "신용카드", "일부 간편결제"],
        parking: "몰·시장별 주차 가능 여부와 요금은 방문 전 확인 권장",
        floors: "프리미엄 쇼핑몰",
        links: [
                    {
                                "label": "공식 사이트",
                                "url": "https://www.ayalamalls.com/explore/ayala-center-cebu",
                                "type": "official",
                                "description": "영업 정보 확인"
                    },
                    {
                                "label": "Google Maps",
                                "url": "https://maps.google.com/?cid=13654313669124625863",
                                "type": "guide",
                                "description": "위치·영업시간 확인"
                    },
                    {
                                "label": "네이버 후기 검색",
                                "url": "https://search.naver.com/search.naver?where=blog&query=%EC%95%84%EC%96%84%EB%9D%BC+%EC%84%BC%ED%84%B0+%EC%84%B8%EB%B6%80+%EC%84%B8%EB%B6%80+%EC%87%BC%ED%95%91",
                                "type": "blog",
                                "description": "최근 여행 후기 확인"
                    }
        ]
    },
    "파크몰": {
        photos: ["/images/cebu/info/shopping/parkmall-cebu.jpg"],
        summary: "만다우에와 막탄 이동 중 들르기 좋은 로컬 쇼핑몰입니다.",
        updatedAt: "2026-07-12",
        highlights: ["반려동물 친화", "캐주얼 식당가"],
        tips: ["이동 경로에 맞춰 방문하기 좋습니다"],
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        taxRefund: { available: false, note: "필리핀 일반 쇼핑몰은 여행자 즉시 환급 제도가 제한적이므로 매장별 확인이 필요합니다." },
        payment: ["현금", "신용카드", "일부 간편결제"],
        parking: "몰·시장별 주차 가능 여부와 요금은 방문 전 확인 권장",
        floors: "로컬 쇼핑몰",
        links: [
                    {
                                "label": "공식 사이트",
                                "url": "http://www.parkmallcebu.com/",
                                "type": "official",
                                "description": "영업 정보 확인"
                    },
                    {
                                "label": "Google Maps",
                                "url": "https://maps.google.com/?cid=10152818547187374176",
                                "type": "guide",
                                "description": "위치·영업시간 확인"
                    },
                    {
                                "label": "네이버 후기 검색",
                                "url": "https://search.naver.com/search.naver?where=blog&query=%ED%8C%8C%ED%81%AC%EB%AA%B0+%EC%84%B8%EB%B6%80+%EC%87%BC%ED%95%91",
                                "type": "blog",
                                "description": "최근 여행 후기 확인"
                    }
        ]
    },
    "가이사노 그랜드 몰 막탄": {
        photos: ["/images/cebu/info/shopping/gaisano-grand-mall-mactan.jpg"],
        summary: "막탄에서 생필품 보충과 마트 쇼핑을 하기 실용적인 로컬몰입니다.",
        updatedAt: "2026-07-12",
        highlights: ["로컬 마트 쇼핑", "생필품 보충"],
        tips: ["리조트 체류 중 이용하기 편리합니다"],
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        taxRefund: { available: false, note: "필리핀 일반 쇼핑몰은 여행자 즉시 환급 제도가 제한적이므로 매장별 확인이 필요합니다." },
        payment: ["현금", "신용카드", "일부 간편결제"],
        parking: "몰·시장별 주차 가능 여부와 요금은 방문 전 확인 권장",
        floors: "막탄 로컬몰",
        links: [
                    {
                                "label": "Google Maps",
                                "url": "https://maps.google.com/?cid=15937145386607139893",
                                "type": "guide",
                                "description": "위치·영업시간 확인"
                    },
                    {
                                "label": "네이버 후기 검색",
                                "url": "https://search.naver.com/search.naver?where=blog&query=%EA%B0%80%EC%9D%B4%EC%82%AC%EB%85%B8+%EA%B7%B8%EB%9E%9C%EB%93%9C+%EB%AA%B0+%EB%A7%89%ED%83%84+%EC%84%B8%EB%B6%80+%EC%87%BC%ED%95%91",
                                "type": "blog",
                                "description": "최근 여행 후기 확인"
                    }
        ]
    },
    "SM 씨사이드 시티 세부": {
        photos: ["/images/cebu/info/shopping/sm-seaside-city-cebu.jpg"],
        summary: "가족 여행객의 쇼핑, 식사, 영화 관람 동선에 적합한 초대형 쇼핑몰입니다.",
        updatedAt: "2026-07-12",
        highlights: ["대규모 쇼핑·식사 동선", "영화관"],
        tips: ["시내 중심부 이동 시간을 고려해야 합니다"],
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        taxRefund: { available: false, note: "필리핀 일반 쇼핑몰은 여행자 즉시 환급 제도가 제한적이므로 매장별 확인이 필요합니다." },
        payment: ["현금", "신용카드", "일부 간편결제"],
        parking: "몰·시장별 주차 가능 여부와 요금은 방문 전 확인 권장",
        floors: "초대형 쇼핑몰",
        links: [
                    {
                                "label": "공식 사이트",
                                "url": "https://www.smsupermalls.com/mall-directory/sm-seaside-city-cebu/information/?utm_source=GMB&utm_medium=directory&utm_campaign=mall_hours",
                                "type": "official",
                                "description": "영업 정보 확인"
                    },
                    {
                                "label": "Google Maps",
                                "url": "https://maps.google.com/?cid=9707088392750253140",
                                "type": "guide",
                                "description": "위치·영업시간 확인"
                    },
                    {
                                "label": "네이버 후기 검색",
                                "url": "https://search.naver.com/search.naver?where=blog&query=SM+%EC%94%A8%EC%82%AC%EC%9D%B4%EB%93%9C+%EC%8B%9C%ED%8B%B0+%EC%84%B8%EB%B6%80+%EC%84%B8%EB%B6%80+%EC%87%BC%ED%95%91",
                                "type": "blog",
                                "description": "최근 여행 후기 확인"
                    }
        ]
    },
    "SM 시티 세부": {
        photos: ["/images/cebu/info/shopping/sm-city-cebu.jpg"],
        summary: "슈퍼마켓과 전자제품 매장이 있어 실용적인 쇼핑에 강점이 있는 대형 쇼핑몰입니다.",
        updatedAt: "2026-07-12",
        highlights: ["대형 슈퍼마켓", "전자제품 매장"],
        tips: ["항구 및 시티 동선과 묶기 좋습니다"],
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        taxRefund: { available: false, note: "필리핀 일반 쇼핑몰은 여행자 즉시 환급 제도가 제한적이므로 매장별 확인이 필요합니다." },
        payment: ["현금", "신용카드", "일부 간편결제"],
        parking: "몰·시장별 주차 가능 여부와 요금은 방문 전 확인 권장",
        floors: "대형 쇼핑몰",
        links: [
                    {
                                "label": "공식 사이트",
                                "url": "https://www.smsupermalls.com/mall-locator/sm-city-cebu/information/",
                                "type": "official",
                                "description": "영업 정보 확인"
                    },
                    {
                                "label": "Google Maps",
                                "url": "https://maps.google.com/?cid=13338323341113700168",
                                "type": "guide",
                                "description": "위치·영업시간 확인"
                    },
                    {
                                "label": "네이버 후기 검색",
                                "url": "https://search.naver.com/search.naver?where=blog&query=SM+%EC%8B%9C%ED%8B%B0+%EC%84%B8%EB%B6%80+%EC%84%B8%EB%B6%80+%EC%87%BC%ED%95%91",
                                "type": "blog",
                                "description": "최근 여행 후기 확인"
                    }
        ]
    },
    "아얄라 몰 센트럴 블록": {
        photos: ["/images/cebu/info/shopping/ayala-malls-central-bloc.jpg"],
        summary: "IT파크 숙소 이용자에게 접근성이 좋으며 식당가와 카페 선택지가 풍부한 쇼핑몰입니다.",
        updatedAt: "2026-07-12",
        highlights: ["IT파크 숙소 접근성 우수", "다양한 식당가와 카페"],
        tips: ["야간 동선으로 활용하기 편리함"],
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        taxRefund: { available: false, note: "필리핀 일반 쇼핑몰은 여행자 즉시 환급 제도가 제한적이므로 매장별 확인이 필요합니다." },
        payment: ["현금", "신용카드", "일부 간편결제"],
        parking: "몰·시장별 주차 가능 여부와 요금은 방문 전 확인 권장",
        floors: "IT파크 쇼핑몰",
        links: [
                    {
                                "label": "공식 사이트",
                                "url": "https://www.ayalamalls.com/main/malls/ayala-malls-central-bloc",
                                "type": "official",
                                "description": "영업 정보 확인"
                    },
                    {
                                "label": "Google Maps",
                                "url": "https://maps.google.com/?cid=5463828834963666775",
                                "type": "guide",
                                "description": "위치·영업시간 확인"
                    },
                    {
                                "label": "네이버 후기 검색",
                                "url": "https://search.naver.com/search.naver?where=blog&query=%EC%95%84%EC%96%84%EB%9D%BC+%EB%AA%B0+%EC%84%BC%ED%8A%B8%EB%9F%B4+%EB%B8%94%EB%A1%9D+%EC%84%B8%EB%B6%80+%EC%87%BC%ED%95%91",
                                "type": "blog",
                                "description": "최근 여행 후기 확인"
                    }
        ]
    },
    "아일랜드 센트럴 막탄": {
        photos: ["/images/cebu/info/shopping/island-central-mactan.jpg"],
        summary: "막탄공항 근처에 위치하여 출도착 전후 짧은 쇼핑을 즐기기에 적합한 곳입니다.",
        updatedAt: "2026-07-12",
        highlights: ["막탄공항 인근 위치", "출도착 전후 이용 편리"],
        tips: ["환전 및 간단한 식사 가능", "기념품 보충 동선으로 활용"],
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        taxRefund: { available: false, note: "필리핀 일반 쇼핑몰은 여행자 즉시 환급 제도가 제한적이므로 매장별 확인이 필요합니다." },
        payment: ["현금", "신용카드", "일부 간편결제"],
        parking: "몰·시장별 주차 가능 여부와 요금은 방문 전 확인 권장",
        floors: "공항 근처 쇼핑몰",
        links: [
                    {
                                "label": "Google Maps",
                                "url": "https://maps.google.com/?cid=7471609802495333182",
                                "type": "guide",
                                "description": "위치·영업시간 확인"
                    },
                    {
                                "label": "네이버 후기 검색",
                                "url": "https://search.naver.com/search.naver?where=blog&query=%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%EC%84%BC%ED%8A%B8%EB%9F%B4+%EB%A7%89%ED%83%84+%EC%84%B8%EB%B6%80+%EC%87%BC%ED%95%91",
                                "type": "blog",
                                "description": "최근 여행 후기 확인"
                    }
        ]
    },
    "카본 마켓": {
        photos: ["/images/cebu/info/shopping/carbon-market-cebu.jpg"],
        summary: "세부의 대표적인 로컬 시장 분위기를 만끽할 수 있는 재래시장입니다.",
        updatedAt: "2026-07-12",
        highlights: ["대표적인 로컬 시장", "현지 분위기 체험"],
        tips: ["과일 및 생활용품 가격 비교 후 구매 권장"],
        hours: "월요일: 오전 12:00 ~ 오후 7:00; 화요일: 오전 12:00 ~ 오후 7:00",
        taxRefund: { available: false, note: "필리핀 일반 쇼핑몰은 여행자 즉시 환급 제도가 제한적이므로 매장별 확인이 필요합니다." },
        payment: ["현금", "신용카드", "일부 간편결제"],
        parking: "몰·시장별 주차 가능 여부와 요금은 방문 전 확인 권장",
        floors: "재래시장",
        links: [
                    {
                                "label": "Google Maps",
                                "url": "https://maps.google.com/?cid=18205750631427072655",
                                "type": "guide",
                                "description": "위치·영업시간 확인"
                    },
                    {
                                "label": "네이버 후기 검색",
                                "url": "https://search.naver.com/search.naver?where=blog&query=%EC%B9%B4%EB%B3%B8+%EB%A7%88%EC%BC%93+%EC%84%B8%EB%B6%80+%EC%87%BC%ED%95%91",
                                "type": "blog",
                                "description": "최근 여행 후기 확인"
                    }
        ]
    },
    "NUSTAR 더 몰": {
        photos: ["/images/cebu/info/shopping/nustar-the-mall.jpg"],
        summary: "리조트와 카지노 복합단지 내에 위치한 프리미엄 쇼핑 공간입니다.",
        updatedAt: "2026-07-12",
        highlights: ["프리미엄 쇼핑 동선", "고급 다이닝"],
        tips: ["짧게 둘러보기 좋음"],
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        taxRefund: { available: false, note: "필리핀 일반 쇼핑몰은 여행자 즉시 환급 제도가 제한적이므로 매장별 확인이 필요합니다." },
        payment: ["현금", "신용카드", "일부 간편결제"],
        parking: "몰·시장별 주차 가능 여부와 요금은 방문 전 확인 권장",
        floors: "프리미엄 복합몰",
        links: [
                    {
                                "label": "Google Maps",
                                "url": "https://maps.google.com/?cid=15238047561495345290",
                                "type": "guide",
                                "description": "위치·영업시간 확인"
                    },
                    {
                                "label": "네이버 후기 검색",
                                "url": "https://search.naver.com/search.naver?where=blog&query=NUSTAR+%EB%8D%94+%EB%AA%B0+%EC%84%B8%EB%B6%80+%EC%87%BC%ED%95%91",
                                "type": "blog",
                                "description": "최근 여행 후기 확인"
                    }
        ]
    },
    "로빈슨 갤러리아 세부": {
        photos: ["/images/cebu/info/shopping/robinsons-galleria-cebu.jpg"],
        summary: "백화점, 마트, 식당가가 균형 있게 구성된 대형 쇼핑몰입니다.",
        updatedAt: "2026-07-12",
        highlights: ["낮은 관광객 밀집도", "균형 잡힌 시설 구성"],
        tips: ["차분하게 둘러보기 좋음"],
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        taxRefund: { available: false, note: "필리핀 일반 쇼핑몰은 여행자 즉시 환급 제도가 제한적이므로 매장별 확인이 필요합니다." },
        payment: ["현금", "신용카드", "일부 간편결제"],
        parking: "몰·시장별 주차 가능 여부와 요금은 방문 전 확인 권장",
        floors: "대형 쇼핑몰",
        links: [
                    {
                                "label": "Google Maps",
                                "url": "https://maps.google.com/?cid=937845153228990408",
                                "type": "guide",
                                "description": "위치·영업시간 확인"
                    },
                    {
                                "label": "네이버 후기 검색",
                                "url": "https://search.naver.com/search.naver?where=blog&query=%EB%A1%9C%EB%B9%88%EC%8A%A8+%EA%B0%A4%EB%9F%AC%EB%A6%AC%EC%95%84+%EC%84%B8%EB%B6%80+%EC%84%B8%EB%B6%80+%EC%87%BC%ED%95%91",
                                "type": "blog",
                                "description": "최근 여행 후기 확인"
                    }
        ]
    }
};

export default shoppingInfo;
