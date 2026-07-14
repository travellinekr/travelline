import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "호텔,리조트 조식": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "숙소에서 즐기는 여유로운 아침 식사",
        "updatedAt": "2026-07-14",
        "highlights": [
                "숙소 컨디션에 따른 다양한 메뉴 구성",
                "든든하게 하루를 시작할 수 있는 기회"
        ],
        "tips": [
                "체크인 시 조식 포함 여부를 미리 확인하세요."
        ],
        "warnings": [],
        "menu": {
                "signature": "숙소 조식",
                "items": [
                        {
                                "name": "숙소 조식",
                                "price": "숙소 요금 포함/별도"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "숙소마다 상이",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94%2C%EB%A6%AC%EC%A1%B0%ED%8A%B8%20%EC%A1%B0%EC%8B%9D%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "로쿠린샤 도쿄역점": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "진한 국물이 일품인 도쿄역 필수 코스 츠케멘 맛집",
        "updatedAt": "2026-07-14",
        "highlights": [
                "걸쭉하고 진한 특제 소스의 풍미",
                "쫄깃한 면발과 소스의 완벽한 조화"
        ],
        "tips": [
                "도쿄역 에키벤 거리 근처라 웨이팅이 있을 수 있어요."
        ],
        "warnings": [],
        "menu": {
                "signature": "츠케멘",
                "items": [
                        {
                                "name": "츠케멘",
                                "price": "¥1,000~1,500"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "11:00-23:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EB%A1%9C%EC%BF%A0%EB%A6%B0%EC%83%A4%20%EB%8F%84%EC%BF%84%EC%97%AD%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "이치란 시부야점": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "혼밥하기 딱 좋은 돈코츠 라멘의 정석",
        "updatedAt": "2026-07-14",
        "highlights": [
                "취향대로 조절 가능한 맛 레시피",
                "프라이빗한 독서실 형태 좌석"
        ],
        "tips": [
                "24시간 운영이라 언제든 방문하기 좋아요."
        ],
        "warnings": [],
        "menu": {
                "signature": "돈코츠 라멘",
                "items": [
                        {
                                "name": "돈코츠 라멘",
                                "price": "¥1,000~1,500"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "24시간",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%B9%98%EB%9E%80%20%EC%8B%9C%EB%B6%80%EC%95%BC%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "우오베이 시부야 도겐자카점": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "고속 레일로 즐기는 재미있는 가성비 초밥집",
        "updatedAt": "2026-07-14",
        "highlights": [
                "신선한 초밥을 고속 레일로 빠르게 배달",
                "부담 없는 가격으로 즐기는 다양한 메뉴"
        ],
        "tips": [
                "초밥을 먹으면 피규어를 뽑는 이벤트에 참여해보세요"
        ],
        "warnings": [
                "인기 시간대에는 웨이팅이 발생할 수 있습니다"
        ],
        "menu": {
                "signature": "고속 레일 초밥",
                "items": [
                        {
                                "name": "고속 레일 초밥",
                                "price": "¥1,500~3,000"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "11:00-22:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EC%9A%B0%EC%98%A4%EB%B2%A0%EC%9D%B4%20%EC%8B%9C%EB%B6%80%EC%95%BC%20%EB%8F%84%EA%B2%90%EC%9E%90%EC%B9%B4%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "규카츠 모토무라 신주쿠 미나미구치점": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "개인 화로에 구워 먹는 육즙 가득한 규카츠 전문점",
        "updatedAt": "2026-07-14",
        "highlights": [
                "입안에서 살살 녹는 부드러운 소고기 카츠",
                "직접 원하는 굽기로 구워 먹는 재미"
        ],
        "tips": [
                "밥과 양배추 리필을 활용해 더욱 든든하게 즐기세요"
        ],
        "warnings": [
                "대기 줄이 매우 길 수 있으니 오픈런을 추천합니다"
        ],
        "menu": {
                "signature": "소고기 카츠",
                "items": [
                        {
                                "name": "소고기 카츠",
                                "price": "¥1,500~2,500"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "11:00-22:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EA%B7%9C%EC%B9%B4%EC%B8%A0%20%EB%AA%A8%ED%86%A0%EB%AC%B4%EB%9D%BC%20%EC%8B%A0%EC%A3%BC%EC%BF%A0%20%EB%AF%B8%EB%82%98%EB%AF%B8%EA%B5%AC%EC%B9%98%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "긴자 바이린 본점": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "긴자의 전통이 느껴지는 클래식한 돈카츠 맛집",
        "updatedAt": "2026-07-14",
        "highlights": [
                "바삭한 튀김옷과 두툼한 고기의 조화",
                "깊은 맛을 자랑하는 정통 가츠동과 돈카츠"
        ],
        "tips": [
                "여유로운 식사를 위해 점심 피크 타임을 피해 방문하세요"
        ],
        "warnings": [],
        "menu": {
                "signature": "가츠동·돈카츠",
                "items": [
                        {
                                "name": "가츠동·돈카츠",
                                "price": "¥1,500~3,000"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "11:30-20:30",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90%20%EB%B0%94%EC%9D%B4%EB%A6%B0%20%EB%B3%B8%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "츠지한 니혼바시 본점": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "입안 가득 퍼지는 바다의 풍미, 제이타쿠동 맛집.",
        "updatedAt": "2026-07-14",
        "highlights": [
                "신선한 해산물이 듬뿍 올라간 제이타쿠동",
                "니혼바시 본점만의 깊은 감칠맛"
        ],
        "tips": [
                "웨이팅이 길 수 있으니 오픈런 추천"
        ],
        "warnings": [],
        "menu": {
                "signature": "제이타쿠동",
                "items": [
                        {
                                "name": "제이타쿠동",
                                "price": "¥1,500~2,500"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "11:00-21:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EC%B8%A0%EC%A7%80%ED%95%9C%20%EB%8B%88%ED%98%BC%EB%B0%94%EC%8B%9C%20%EB%B3%B8%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "스시노미도리 시부야점": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "가성비와 맛을 모두 잡은 시부야 필수 코스.",
        "updatedAt": "2026-07-14",
        "highlights": [
                "푸짐한 구성의 초밥 세트",
                "신선하고 두툼한 네타"
        ],
        "tips": [
                "대기가 매우 길어 식사 시간 피해서 방문 권장"
        ],
        "warnings": [],
        "menu": {
                "signature": "초밥 세트",
                "items": [
                        {
                                "name": "초밥 세트",
                                "price": "¥2,000~4,000"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "11:00-22:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%8B%9C%EB%85%B8%EB%AF%B8%EB%8F%84%EB%A6%AC%20%EC%8B%9C%EB%B6%80%EC%95%BC%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "네무로 하나마루 KITTE 마루노우치점": {
        "photos": [
                "/images/tokyo/info/restaurants/kitte.jpg"
        ],
        "summary": "홋카이도 직송 신선함을 느낄 수 있는 회전초밥.",
        "updatedAt": "2026-07-14",
        "highlights": [
                "홋카이도산 프리미엄 식재료 사용",
                "다양한 종류의 초밥을 즐길 수 있는 회전식"
        ],
        "tips": [
                "KITTE 쇼핑몰 내 위치해 접근성 좋음",
                "인기 메뉴는 금방 소진될 수 있음"
        ],
        "warnings": [],
        "menu": {
                "signature": "홋카이도 회전초밥",
                "items": [
                        {
                                "name": "홋카이도 회전초밥",
                                "price": "¥2,000~4,000"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "11:00-22:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EB%84%A4%EB%AC%B4%EB%A1%9C%20%ED%95%98%EB%82%98%EB%A7%88%EB%A3%A8%20KITTE%20%EB%A7%88%EB%A3%A8%EB%85%B8%EC%9A%B0%EC%B9%98%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "돈카츠 마이센 아오야마 본점": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "입안에서 녹는 부드러운 쿠로부타 돈카츠 전문점입니다.",
        "updatedAt": "2026-07-14",
        "highlights": [
                "육즙 가득한 쿠로부타 돈카츠",
                "아오야마 본점만의 고즈넉한 분위기"
        ],
        "tips": [
                "본점 특유의 클래식한 매력을 느껴보세요."
        ],
        "warnings": [],
        "menu": {
                "signature": "쿠로부타 돈카츠",
                "items": [
                        {
                                "name": "쿠로부타 돈카츠",
                                "price": "¥2,000~4,000"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "11:00-21:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EB%8F%88%EC%B9%B4%EC%B8%A0%20%EB%A7%88%EC%9D%B4%EC%84%BC%20%EC%95%84%EC%98%A4%EC%95%BC%EB%A7%88%20%EB%B3%B8%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "AFURI 하라주쿠점": {
        "photos": [
                "/images/tokyo/info/restaurants/afuri.jpg"
        ],
        "summary": "상큼한 유자 향이 일품인 깔끔한 라멘 맛집입니다.",
        "updatedAt": "2026-07-14",
        "highlights": [
                "산뜻한 유자시오 라멘",
                "깔끔하고 담백한 국물"
        ],
        "tips": [
                "하라주쿠 쇼핑 중 가벼운 식사로 추천해요."
        ],
        "warnings": [],
        "menu": {
                "signature": "유자시오 라멘",
                "items": [
                        {
                                "name": "유자시오 라멘",
                                "price": "¥1,200~2,000"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "10:30-22:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=AFURI%20%ED%95%98%EB%9D%BC%EC%A3%BC%EC%BF%A0%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "멘야 무사시 신주쿠 본점": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "진한 풍미의 츠케멘과 라멘을 즐길 수 있는 곳입니다.",
        "updatedAt": "2026-07-14",
        "highlights": [
                "깊고 진한 맛의 츠케멘",
                "든든하고 푸짐한 양"
        ],
        "tips": [
                "신주쿠에서 강렬한 맛이 당길 때 방문해보세요."
        ],
        "warnings": [],
        "menu": {
                "signature": "츠케멘·라멘",
                "items": [
                        {
                                "name": "츠케멘·라멘",
                                "price": "¥1,000~1,500"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "11:00-22:30",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EB%A9%98%EC%95%BC%20%EB%AC%B4%EC%82%AC%EC%8B%9C%20%EC%8B%A0%EC%A3%BC%EC%BF%A0%20%EB%B3%B8%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "풍운아 신주쿠": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "진하고 고소한 국물이 일품인 닭백탕 츠케멘 전문점",
        "updatedAt": "2026-07-14",
        "highlights": [
                "꾸덕한 면발과 진한 닭 육수의 환상적인 조화",
                "신주쿠에서 즐기는 가성비 최고의 라멘"
        ],
        "tips": [
                "웨이팅을 피하려면 오픈 직후나 애매한 시간대를 공략하세요."
        ],
        "warnings": [],
        "menu": {
                "signature": "닭백탕 츠케멘",
                "items": [
                        {
                                "name": "닭백탕 츠케멘",
                                "price": "¥1,000~1,500"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "11:00-21:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%ED%92%8D%EC%9A%B4%EC%95%84%20%EC%8B%A0%EC%A3%BC%EC%BF%A0%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "츠키지 스시세이 본점": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "츠키지 시장의 신선함을 그대로 담은 정통 스시 맛집",
        "updatedAt": "2026-07-14",
        "highlights": [
                "입안에서 녹는 신선한 니기리 세트",
                "합리적인 가격으로 즐기는 고퀄리티 스시"
        ],
        "tips": [
                "신선한 재료 소진 시 조기 마감될 수 있으니 서두르는 게 좋아요."
        ],
        "warnings": [],
        "menu": {
                "signature": "니기리 세트",
                "items": [
                        {
                                "name": "니기리 세트",
                                "price": "¥3,000~6,000"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "10:30-21:30",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EC%B8%A0%ED%82%A4%EC%A7%80%20%EC%8A%A4%EC%8B%9C%EC%84%B8%EC%9D%B4%20%EB%B3%B8%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "츠키지 이타도리 별관": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "아침 식사로 딱 좋은 해산물 가득 카이센동 맛집",
        "updatedAt": "2026-07-14",
        "highlights": [
                "다양한 해산물이 듬뿍 올라간 풍성한 비주얼",
                "신선함이 살아있는 츠키지 스타일 카이센동"
        ],
        "tips": [
                "오전 일찍 방문해야 가장 신선하고 다양한 메뉴를 즐길 수 있어요."
        ],
        "warnings": [
                "영업 종료 시간이 오후 3시로 매우 빠르니 주의하세요."
        ],
        "menu": {
                "signature": "카이센동",
                "items": [
                        {
                                "name": "카이센동",
                                "price": "¥2,000~4,000"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "07:00-15:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EC%B8%A0%ED%82%A4%EC%A7%80%20%EC%9D%B4%ED%83%80%EB%8F%84%EB%A6%AC%20%EB%B3%84%EA%B4%80%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "아사쿠사 규카츠": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "입안에서 살살 녹는 육즙 가득한 규카츠 맛집.",
        "updatedAt": "2026-07-14",
        "highlights": [
                "직접 구워 먹는 재미가 있는 규카츠 정식",
                "부드러운 고기 식감과 풍부한 육즙"
        ],
        "tips": [
                "웨이팅이 길 수 있으니 오픈런을 추천합니다"
        ],
        "warnings": [],
        "menu": {
                "signature": "규카츠 정식",
                "items": [
                        {
                                "name": "규카츠 정식",
                                "price": "¥1,800~2,800"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "11:00-22:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EC%95%84%EC%82%AC%EC%BF%A0%EC%82%AC%20%EA%B7%9C%EC%B9%B4%EC%B8%A0%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "다이코쿠야 텐푸라 본점": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "아사쿠사에서 꼭 맛봐야 할 바삭한 텐동 전문점.",
        "updatedAt": "2026-07-14",
        "highlights": [
                "바삭하고 고소한 튀김이 올라간 텐동",
                "전통 있는 깊은 맛의 덴푸라"
        ],
        "tips": [
                "달콤 짭짤한 소스가 일품이라 밥도둑입니다"
        ],
        "warnings": [],
        "menu": {
                "signature": "텐동",
                "items": [
                        {
                                "name": "텐동",
                                "price": "¥2,000~3,500"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "11:10-20:30",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9D%B4%EC%BD%94%EC%BF%A0%EC%95%BC%20%ED%85%90%ED%91%B8%EB%9D%BC%20%EB%B3%B8%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "긴자 카가리 본점": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "진한 닭 육수의 풍미가 일품인 프리미엄 라멘집.",
        "updatedAt": "2026-07-14",
        "highlights": [
                "크리미하고 진한 토리파이탄 소바",
                "긴자를 대표하는 고급스러운 라멘 맛"
        ],
        "tips": [
                "웨이팅이 필수이니 시간 여유를 두고 방문하세요"
        ],
        "warnings": [],
        "menu": {
                "signature": "토리파이탄 소바",
                "items": [
                        {
                                "name": "토리파이탄 소바",
                                "price": "¥1,200~2,000"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "11:00-22:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90%20%EC%B9%B4%EA%B0%80%EB%A6%AC%20%EB%B3%B8%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "츠루톤탄 신주쿠점": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "진한 크림 소스가 일품인 인생 우동 맛집",
        "updatedAt": "2026-07-14",
        "highlights": [
                "꾸덕한 크림 우동",
                "다양한 토핑 선택 가능"
        ],
        "tips": [
                "웨이팅이 길 수 있으니 오픈런 추천"
        ],
        "warnings": [],
        "menu": {
                "signature": "크림 우동",
                "items": [
                        {
                                "name": "크림 우동",
                                "price": "¥1,500~3,000"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "11:00-23:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EC%B8%A0%EB%A3%A8%ED%86%A4%ED%83%84%20%EC%8B%A0%EC%A3%BC%EC%BF%A0%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "토리키조쿠 시부야 센터가이점": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "부담 없는 가격으로 즐기는 가성비 최고의 야키토리 전문점",
        "updatedAt": "2026-07-14",
        "highlights": [
                "모든 메뉴 균일가",
                "활기찬 이자카야 분위기"
        ],
        "tips": [
                "늦은 시간까지 영업해서 2차로 딱임"
        ],
        "warnings": [],
        "menu": {
                "signature": "균일가 꼬치",
                "items": [
                        {
                                "name": "균일가 꼬치",
                                "price": "¥2,000~3,500"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "17:00-04:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%ED%86%A0%EB%A6%AC%ED%82%A4%EC%A1%B0%EC%BF%A0%20%EC%8B%9C%EB%B6%80%EC%95%BC%20%EC%84%BC%ED%84%B0%EA%B0%80%EC%9D%B4%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "카츠쿠라 신주쿠 타카시마야점": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "육즙 가득한 프리미엄 돈카츠를 맛볼 수 있는 곳",
        "updatedAt": "2026-07-14",
        "highlights": [
                "두툼하고 부드러운 돈카츠",
                "고급스러운 정식 구성"
        ],
        "tips": [
                "백화점 내 위치해 쇼핑 후 들르기 좋음"
        ],
        "warnings": [],
        "menu": {
                "signature": "돈카츠 정식",
                "items": [
                        {
                                "name": "돈카츠 정식",
                                "price": "¥1,800~3,000"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "11:00-22:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%B8%A0%EC%BF%A0%EB%9D%BC%20%EC%8B%A0%EC%A3%BC%EC%BF%A0%20%ED%83%80%EC%B9%B4%EC%8B%9C%EB%A7%88%EC%95%BC%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "몬자 쿠라 츠키시마": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "도쿄 일정에 넣기 좋은 몬자 쿠라 츠키시마 카드입니다. 최근 동선과 실용 정보를 기준으로 업데이트했습니다.",
        "updatedAt": "2026-07-14",
        "highlights": [
                "명란치즈 몬자",
                "¥2,000~3,500"
        ],
        "tips": [
                "방문 전 공식 영업시간과 예약 가능 여부를 확인하세요."
        ],
        "warnings": [],
        "menu": {
                "signature": "명란치즈 몬자",
                "items": [
                        {
                                "name": "명란치즈 몬자",
                                "price": "¥2,000~3,500"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "11:00-22:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EB%AA%AC%EC%9E%90%20%EC%BF%A0%EB%9D%BC%20%EC%B8%A0%ED%82%A4%EC%8B%9C%EB%A7%88%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "소메타로 아사쿠사": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "도쿄 일정에 넣기 좋은 소메타로 아사쿠사 카드입니다. 최근 동선과 실용 정보를 기준으로 업데이트했습니다.",
        "updatedAt": "2026-07-14",
        "highlights": [
                "오코노미야키",
                "¥1,500~3,000"
        ],
        "tips": [
                "방문 전 공식 영업시간과 예약 가능 여부를 확인하세요."
        ],
        "warnings": [],
        "menu": {
                "signature": "오코노미야키",
                "items": [
                        {
                                "name": "오코노미야키",
                                "price": "¥1,500~3,000"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "12:00-22:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EC%86%8C%EB%A9%94%ED%83%80%EB%A1%9C%20%EC%95%84%EC%82%AC%EC%BF%A0%EC%82%AC%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "카라시비 미소라멘 키칸보 칸다 본점": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "도쿄 일정에 넣기 좋은 카라시비 미소라멘 키칸보 칸다 본점 카드입니다. 최근 동선과 실용 정보를 기준으로 업데이트했습니다.",
        "updatedAt": "2026-07-14",
        "highlights": [
                "매운 미소라멘",
                "¥1,000~1,500"
        ],
        "tips": [
                "방문 전 공식 영업시간과 예약 가능 여부를 확인하세요."
        ],
        "warnings": [],
        "menu": {
                "signature": "매운 미소라멘",
                "items": [
                        {
                                "name": "매운 미소라멘",
                                "price": "¥1,000~1,500"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "11:00-21:30",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%9D%BC%EC%8B%9C%EB%B9%84%20%EB%AF%B8%EC%86%8C%EB%9D%BC%EB%A9%98%20%ED%82%A4%EC%B9%B8%EB%B3%B4%20%EC%B9%B8%EB%8B%A4%20%EB%B3%B8%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "긴자 우카이테이": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "입안에서 녹는 와규 철판요리의 정수",
        "updatedAt": "2026-07-14",
        "highlights": [
                "프리미엄 와규 철판 코스",
                "고급스러운 긴자 분위기"
        ],
        "tips": [
                "특별한 기념일 예약 추천"
        ],
        "warnings": [],
        "menu": {
                "signature": "와규 철판 코스",
                "items": [
                        {
                                "name": "와규 철판 코스",
                                "price": "¥20,000~40,000"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "12:00-22:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90%20%EC%9A%B0%EC%B9%B4%EC%9D%B4%ED%85%8C%EC%9D%B4%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "나리사와": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "자연의 맛을 담은 혁신적인 이노베이티브 퀴진",
        "updatedAt": "2026-07-14",
        "highlights": [
                "사토야마 코스",
                "창의적인 플레이팅과 풍미"
        ],
        "tips": [
                "예약 난이도가 매우 높으니 사전 예약 필수"
        ],
        "warnings": [
                "높은 가격대 주의"
        ],
        "menu": {
                "signature": "사토야마 코스",
                "items": [
                        {
                                "name": "사토야마 코스",
                                "price": "¥35,000~60,000"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "12:00-23:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EB%82%98%EB%A6%AC%EC%82%AC%EC%99%80%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "긴자 코쥬": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "제철 식재료로 즐기는 정갈한 카이세키 요리",
        "updatedAt": "2026-07-14",
        "highlights": [
                "계절 카이세키 코스",
                "정성 가득한 일본 전통의 맛"
        ],
        "tips": [
                "방문 전 제철 메뉴 확인 권장"
        ],
        "warnings": [],
        "menu": {
                "signature": "계절 카이세키",
                "items": [
                        {
                                "name": "계절 카이세키",
                                "price": "¥30,000~50,000"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "12:00-22:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90%20%EC%BD%94%EC%A5%AC%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "bills 오모테산도": {
        "photos": [
                "/images/tokyo/info/restaurants/bills.jpg"
        ],
        "summary": "입안에서 사르르 녹는 리코타 핫케이크 맛집",
        "updatedAt": "2026-07-14",
        "highlights": [
                "폭신한 리코타 핫케이크",
                "세련된 오모테산도 분위기"
        ],
        "tips": [
                "브런치 타임에는 웨이팅이 있을 수 있어요"
        ],
        "warnings": [],
        "menu": {
                "signature": "리코타 핫케이크",
                "items": [
                        {
                                "name": "리코타 핫케이크",
                                "price": "¥2,000~4,000"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "08:30-22:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=bills%20%EC%98%A4%EB%AA%A8%ED%85%8C%EC%82%B0%EB%8F%84%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "행복한 팬케이크 오모테산도점": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "구름처럼 폭신한 수플레 팬케이크의 정석",
        "updatedAt": "2026-07-14",
        "highlights": [
                "입안 가득 퍼지는 달콤함",
                "부드러운 식감"
        ],
        "tips": [
                "오픈 시간에 맞춰 방문하는 것을 추천해요"
        ],
        "warnings": [],
        "menu": {
                "signature": "수플레 팬케이크",
                "items": [
                        {
                                "name": "수플레 팬케이크",
                                "price": "¥1,500~2,500"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "10:00-20:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%ED%96%89%EB%B3%B5%ED%95%9C%20%ED%8C%AC%EC%BC%80%EC%9D%B4%ED%81%AC%20%EC%98%A4%EB%AA%A8%ED%85%8C%EC%82%B0%EB%8F%84%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "잇푸도 긴자점": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "진한 국물이 일품인 하카타식 돈코츠 라멘 전문점",
        "updatedAt": "2026-07-14",
        "highlights": [
                "깊고 진한 돈코츠 육수",
                "긴자에서 즐기는 정통 라멘"
        ],
        "tips": [
                "회전율이 빠르지만 식사 시간에는 줄을 설 수 있어요"
        ],
        "warnings": [],
        "menu": {
                "signature": "하카타 돈코츠",
                "items": [
                        {
                                "name": "하카타 돈코츠",
                                "price": "¥1,000~1,800"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "11:00-23:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EC%9E%87%ED%91%B8%EB%8F%84%20%EA%B8%B4%EC%9E%90%EC%A0%90%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "오니기리 봉고": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "정성이 가득 담긴 큼직한 수제 오니 기리를 맛볼 수 있는 곳.",
        "updatedAt": "2026-07-14",
        "highlights": [
                "속이 꽉 찬 수제 오니기리",
                "다양하고 풍성한 토핑"
        ],
        "tips": [
                "인기가 많아 웨이팅을 고려해 방문하세요."
        ],
        "warnings": [],
        "menu": {
                "signature": "수제 오니기리",
                "items": [
                        {
                                "name": "수제 오니기리",
                                "price": "¥1,000~2,000"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "11:30-23:00",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EC%98%A4%EB%8B%88%EA%B8%B0%EB%A6%AC%20%EB%B4%89%EA%B3%A0%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
    "긴자 하치고": {
        "photos": [
                "/images/tokyo/info/restaurants/place.jpg"
        ],
        "summary": "미쉐린 가이드가 인정한 깔끔하고 깊은 맛의 라멘 전문점.",
        "updatedAt": "2026-07-14",
        "highlights": [
                "미쉐린 선정 맑은 국물 라멘",
                "깔끔한 일본식 라멘의 정석"
        ],
        "tips": [
                "방문 전 영업시간을 꼭 확인하세요."
        ],
        "warnings": [],
        "menu": {
                "signature": "미쉐린 라멘·맑은 국물",
                "items": [
                        {
                                "name": "미쉐린 라멘·맑은 국물",
                                "price": "¥1,500~2,500"
                        }
                ]
        },
        "reservation": {
                "required": false,
                "method": "매장/공식 안내 확인",
                "note": "피크 시간 대기 가능"
        },
        "hours": "방문 전 공식 확인",
        "waitTime": "피크타임 대기 가능",
        "payment": [
                "현금",
                "카드 가능 여부 현장 확인"
        ],
        "links": [
                {
                        "label": "네이버 후기 검색",
                        "url": "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90%20%ED%95%98%EC%B9%98%EA%B3%A0%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0",
                        "type": "blog",
                        "description": "최근 한국어 후기 확인"
                }
        ]
},
};

export default info;
