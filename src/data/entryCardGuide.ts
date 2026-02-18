/**
 * 한국인 여행자 입국신고서 가이드 데이터
 * 최종 업데이트: 2025년 2월 기준
 */

// 국가별 입국신고서 데이터
export const ENTRY_CARD_DATA: Record<string, EntryCardInfo> = {
    vietnam: {
        country: "🇻🇳 베트남",
        status: "불필요",
        statusEmoji: "✅",
        details: [
            { label: "입국신고서", value: "❌ 불필요 (2022년 폐지)" },
            { label: "비자", value: "45일 무비자" },
            { label: "여권 유효기간", value: "6개월 이상" },
            { label: "준비물", value: "귀국 항공권" },
        ],
        warnings: [],
    },
    hongkong: {
        country: "🇭🇰 홍콩",
        status: "불필요",
        statusEmoji: "✅",
        details: [
            { label: "입국신고서", value: "❌ 불필요 (2024.10.16 폐지)" },
            { label: "비자", value: "90일 무비자" },
            { label: "여권 유효기간", value: "체류기간 + 1개월" },
            { label: "참고", value: "입국 시 랜딩 슬립(Landing Slip) 발급" },
        ],
        warnings: [],
    },
    france: {
        country: "🇫🇷 프랑스 (솅겐 지역)",
        status: "현재 불필요 → 변경 예정",
        statusEmoji: "⚠️",
        details: [
            { label: "입국신고서", value: "❌ 현재 불필요" },
            { label: "비자", value: "180일 중 90일 무비자" },
            { label: "여권 유효기간", value: "출발일 기준 3개월 + 발행 10년 이내" },
            { label: "왕복 항공권", value: "필수" },
            { label: "숙소 예약 확인서", value: "필수" },
            { label: "여행자 보험", value: "€30,000 이상" },
            { label: "여행 경비", value: "숙소 있을 경우 €65/일, 없을 경우 €120/일" },
        ],
        warnings: ["⚠️ 2025년부터: ETIAS + EES 도입 예정"],
    },
    uk: {
        country: "🇬🇧 영국",
        status: "현재 불필요 → 변경 예정",
        statusEmoji: "⚠️",
        details: [
            { label: "입국신고서", value: "❌ 현재 불필요" },
            { label: "E-gate", value: "만 10세 이상 이용 가능" },
            { label: "ETA 비용", value: "£10" },
            { label: "ETA 유효기간", value: "2년" },
            { label: "ETA 처리기간", value: "3일 이내" },
        ],
        warnings: ["⚠️ 2025.1.8부터: ETA 필수 (신청: 2024.11.27부터 가능)"],
    },
    thailand: {
        country: "🇹🇭 태국",
        status: "전자입국신고서 필수 예정",
        statusEmoji: "📱",
        details: [
            { label: "현재 (2024)", value: "종이 입국신고서(TM6) 폐지, 불필요" },
            { label: "TDAC 작성 시기", value: "도착 3일 이내" },
            { label: "방법", value: "온라인 웹사이트" },
            { label: "필요정보", value: "개인정보, 항공편, 숙소 주소" },
            { label: "결과", value: "QR 코드 발급 → 입국 심사 시 제시" },
        ],
        warnings: ["⚠️ 2025.5.1부터: TDAC (Thailand Digital Arrival Card) 의무화"],
    },
    japan: {
        country: "🇯🇵 일본",
        status: "전자입국신고서 권장",
        statusEmoji: "📱",
        details: [
            { label: "권장", value: "Visit Japan Web (VJW)" },
            { label: "대안", value: "종이 입국신고서 가능" },
            { label: "VJW 장점", value: "입국 심사 + 세관 신고 통합 QR 코드 (2024.1.25부터)" },
            { label: "등록 시기", value: "도착 2주 전~하루 전 (3-5일 전 권장)" },
            { label: "필요정보", value: "여권, 항공권, 숙소 주소, 일본 체류 정보" },
        ],
        warnings: [],
        links: [{ label: "Visit Japan Web 바로가기", url: "https://vjw-lp.digital.go.jp/ko/" }],
    },
    singapore: {
        country: "🇸🇬 싱가포르",
        status: "전자입국신고서 필수",
        statusEmoji: "📱",
        details: [
            { label: "필수", value: "SG Arrival Card (SGAC)" },
            { label: "작성 시기", value: "도착 3일 이내" },
            { label: "방법", value: "온라인 웹사이트 or MyICA 앱" },
            { label: "언어", value: "한국어 지원" },
            { label: "필요정보", value: "여권, 항공편, 숙소 정보, 건강 신고서" },
        ],
        warnings: ["⚠️ 미제출 시: 입국 거부 or 최대 $1,000 벌금"],
        links: [{ label: "SGAC 신청 바로가기", url: "https://www.ica.gov.sg/enter-transit-depart/entering-singapore/sg-arrival-card" }],
    },
    taiwan: {
        country: "🇹🇼 대만",
        status: "전자입국신고서 권장 → 의무화 예정",
        statusEmoji: "📱",
        details: [
            { label: "권장", value: "온라인 입국신고서" },
            { label: "대안", value: "종이 입국신고서 가능" },
            { label: "작성 시기", value: "도착 3일 이내" },
            { label: "방법", value: "대만 이민서 웹사이트 (한국어 지원)" },
            { label: "필요정보", value: "개인정보(영문), 비자 유형: Visa-Exempt, 항공편(입국+출국), 숙소 정보" },
            { label: "e-Gate", value: "만 17세 이상, 키 140cm 이상 이용 가능" },
        ],
        warnings: ["⚠️ 2025년부터: 온라인 의무화 예정"],
    },
    malaysia: {
        country: "🇲🇾 말레이시아",
        status: "전자입국신고서 필수",
        statusEmoji: "📱",
        details: [
            { label: "필수", value: "MDAC (Malaysia Digital Arrival Card)" },
            { label: "시행", value: "2024.1.1부터 의무화" },
            { label: "작성 시기", value: "도착 3일 전부터 당일까지" },
            { label: "방법", value: "말레이시아 이민국 웹사이트" },
            { label: "비용", value: "무료" },
            { label: "필요정보", value: "개인정보(영문), 여행정보, 숙소 주소" },
            { label: "자동출입국", value: "쿠알라룸푸르 공항(KLIA/KLIA2) 이용 가능" },
        ],
        warnings: ["⚠️ 수정 불가: 작성 완료 후 수정 불가"],
    },
    indonesia: {
        country: "🇮🇩 인도네시아 (발리)",
        status: "전자입국신고서 필수",
        statusEmoji: "📱",
        details: [
            { label: "필수", value: "All Indonesia Arrival Card" },
            { label: "통합", value: "E-CD + SSHP 통합 (2025.9.1부터)" },
            { label: "작성 시기", value: "입국 2일 전부터" },
            { label: "방법", value: "온라인 웹사이트" },
            { label: "비용", value: "무료" },
            { label: "E-VOA / VOA", value: "50만 루피아 (약 $50) 필수" },
            { label: "발리 관광세", value: "150,000 루피아 (약 $14) - Love Bali 웹사이트" },
            { label: "여권 유효기간", value: "6개월 이상" },
        ],
        warnings: [],
    },
    philippines: {
        country: "🇵🇭 필리핀",
        status: "전자입국신고서 필수",
        statusEmoji: "📱",
        details: [
            { label: "필수", value: "eTravel" },
            { label: "통합", value: "입국신고서 + 건강신고서 + 세관신고서" },
            { label: "작성 시기", value: "출발 72시간 이내" },
            { label: "방법", value: "etravel.gov.ph (모바일 웹 or PC)" },
            { label: "비용", value: "무료" },
            { label: "필요정보", value: "개인정보(여권과 동일), 항공편 정보" },
            { label: "결과", value: "QR 코드 발급 → 입국 시 제시" },
            { label: "여권 유효기간", value: "6개월 이상" },
        ],
        warnings: [],
        links: [{ label: "eTravel 신청 바로가기", url: "https://etravel.gov.ph" }],
    },
    usa: {
        country: "🇺🇸 미국",
        status: "전자여행허가 필수",
        statusEmoji: "✈️",
        details: [
            { label: "필수", value: "ESTA (Electronic System for Travel Authorization)" },
            { label: "신청 시기", value: "출발 72시간 전 (권장)" },
            { label: "신청 방법", value: "미국 정부 공식 웹사이트 (esta.cbp.dhs.gov)" },
            { label: "비용", value: "$21" },
            { label: "유효기간", value: "여권 만료일까지 (최대 2년)" },
            { label: "필요정보", value: "전자여권(MRZ 코드), 미국 내 체류지 주소, 신용카드" },
            { label: "세관신고서", value: "항공기 내 배부 (가족당 1부)" },
            { label: "현금 신고", value: "$10,000 이상 신고 필수" },
            { label: "식품 신고", value: "모든 식품 신고 필수" },
        ],
        warnings: [],
        links: [{ label: "ESTA 신청 바로가기", url: "https://esta.cbp.dhs.gov" }],
    },
    australia: {
        country: "🇦🇺 호주",
        status: "전자여행허가 필수",
        statusEmoji: "✈️",
        details: [
            { label: "필수", value: "ETA (Electronic Travel Authority)" },
            { label: "신청 방법", value: "Australian ETA 앱 (iOS/Android)" },
            { label: "비용", value: "AUD $20" },
            { label: "유효기간", value: "1년 (입국당 최대 3개월 체류)" },
            { label: "준비물", value: "여권(6개월 이상 유효), 신용카드, 스마트폰(Face Verification)" },
            { label: "입국신고서", value: "종이 Incoming Passenger Card 작성 필수" },
            { label: "세관 검역", value: "음식물, 식물, 동물 제품 신고 필수" },
            { label: "현금 신고", value: "AUD $10,000 이상 신고" },
        ],
        warnings: [],
    },
    newzealand: {
        country: "🇳🇿 뉴질랜드",
        status: "전자여행허가 필수",
        statusEmoji: "✈️",
        details: [
            { label: "필수", value: "NZeTA (New Zealand Electronic Travel Authority)" },
            { label: "신청 방법", value: "이민성 웹사이트 or NZeTA 앱" },
            { label: "비용 (앱)", value: "NZD $17 + IVL $35 = $52" },
            { label: "비용 (웹)", value: "NZD $23 + IVL $35 = $58" },
            { label: "유효기간", value: "2년 (입국당 최대 3개월 체류)" },
            { label: "처리기간", value: "3일 이내 (빠르면 수 시간)" },
            { label: "여권 유효기간", value: "6개월 이상" },
            { label: "NZTD 작성 시기", value: "출발 24시간 전부터" },
            { label: "NZTD 방법", value: "웹사이트 or 앱 (무료, 약 10분 소요)" },
        ],
        warnings: [],
    },
    canada: {
        country: "🇨🇦 캐나다",
        status: "전자여행허가 필수",
        statusEmoji: "✈️",
        details: [
            { label: "필수", value: "eTA (Electronic Travel Authorization)" },
            { label: "신청 방법", value: "온라인 (항공편으로 입국 시만)" },
            { label: "비용", value: "CAD $7" },
            { label: "유효기간", value: "최대 5년 (여권 만료일 중 빠른 날)" },
            { label: "준비물", value: "여권, 신용카드, 이메일" },
            { label: "Advance Declaration", value: "ArriveCAN 앱, 출발 72시간 전부터 가능" },
        ],
        warnings: ["⚠️ 육로/해로 입국 시 eTA 불필요"],
    },
    china: {
        country: "🇨🇳 중국",
        status: "30일 무비자 (2025.12.31까지) + 전자입국신고서",
        statusEmoji: "📱",
        details: [
            { label: "비자", value: "30일 무비자 (2024.11.8 ~ 2025.12.31, 관광·비즈니스·친지방문·경유)" },
            { label: "전자입국신고서", value: "2025.11.20부터 의무화 (Electronic Arrival Card)" },
            { label: "작성 시기", value: "입국일 기준 90일 전 ~ 당일" },
            { label: "작성 방법", value: "NIA 공식 웹사이트 / 앱 'NIA 12367' / 위챗·알리페이 미니프로그램" },
            { label: "결과", value: "QR 코드 발급 → 입국 심사 시 제시 또는 키오스크 스캔" },
            { label: "여권 유효기간", value: "6개월 이상" },
            { label: "경유 무비자", value: "240시간(10일) 이내, 24개 성 60개 항구 이용 가능" },
        ],
        warnings: [
            "⚠️ 30일 초과 체류·취업·유학·취재 등은 별도 비자 필요",
            "⚠️ 2025.11.20부터 전자입국신고서 미작성 시 입국 지연 가능",
        ],
        links: [
            { label: "중국 국가이민관리국(NIA) 전자입국신고서", url: "https://www.nia.gov.cn" },
        ],
    },
    turkey: {
        country: "🇹🇷 터키",
        status: "90일 무비자",
        statusEmoji: "✅",
        details: [
            { label: "비자", value: "180일 중 90일 무비자 (관광·친지방문·비즈니스)" },
            { label: "여권 유효기간", value: "6개월 이상" },
            { label: "준비물", value: "왕복 항공권, 숙소 예약 확인서, 여행 경비 증빙" },
            { label: "의료보험", value: "권장 (체류 기간 유효)" },
        ],
        warnings: ["⚠️ 취업·장기체류·유학 목적은 별도 비자 필요"],
    },
    india: {
        country: "🇮🇳 인도",
        status: "e-Visa 필수 + 전자입국신고서 (2025.10~)",
        statusEmoji: "📋",
        details: [
            { label: "비자", value: "e-Visa 사전 신청 필수 (관광·비즈니스·의료)" },
            { label: "신청 기간", value: "출발 최소 4일 전 (성수기 2주 전 권장)" },
            { label: "처리 기간", value: "3~5일 이내" },
            { label: "준비물", value: "여권 사본(PDF), 여권 사진(흰 배경 JPEG), 신용카드" },
            { label: "여권 유효기간", value: "6개월 이상" },
            { label: "전자입국신고서", value: "2025.10.1부터 의무화 (e-Arrival Card)" },
            { label: "e-Arrival 신청", value: "입국 72시간 전부터 / indianvisaonline.gov.in/earrival 또는 'Visa Su-Swagatam' 앱" },
        ],
        warnings: [
            "⚠️ e-Visa 미신청 시 탑승 거부 가능",
            "⚠️ 2025.10.1부터 전자입국신고서 미작성 시 입국 지연",
        ],
        links: [
            { label: "인도 e-Visa 공식 신청", url: "https://indianvisaonline.gov.in/evisa/tvoa.html" },
            { label: "e-Arrival Card 신청", url: "https://indianvisaonline.gov.in/earrival" },
        ],
    },
    uae: {
        country: "🇦🇪 UAE (두바이·아부다비)",
        status: "90일 무비자",
        statusEmoji: "✅",
        details: [
            { label: "비자", value: "90일 무비자 (관광 목적)" },
            { label: "입국신고서", value: "❌ 불필요" },
            { label: "여권 유효기간", value: "6개월 이상" },
            { label: "준비물", value: "왕복 항공권, 숙소 예약 확인서, 체류 경비 증빙" },
        ],
        warnings: ["⚠️ 취업·사업 활동은 별도 비자 필요, 90일 초과 시 벌금"],
    },
    spain: {
        country: "🇪🇸 스페인 (솅겐 지역)",
        status: "90일 무비자 (ETIAS 2026년 예정)",
        statusEmoji: "⚠️",
        details: [
            { label: "비자", value: "180일 중 90일 무비자" },
            { label: "여권 유효기간", value: "출발일 기준 3개월 이상 + 발행 10년 이내" },
            { label: "왕복 항공권", value: "필수" },
            { label: "숙소 예약 확인서", value: "필수" },
            { label: "여행자 보험", value: "€30,000 이상" },
            { label: "여행 경비", value: "숙소 있을 경우 €65/일, 없을 경우 €120/일" },
            { label: "ETIAS", value: "2026년 말 도입 예정 (현재 불필요)" },
            { label: "EES", value: "2025년 10월 도입 예정 (자동화, 별도 준비 불필요)" },
        ],
        warnings: ["⚠️ 2026년부터 ETIAS 신청 필요 예정 (€7, 3년 유효)"],
    },
    italy: {
        country: "🇮🇹 이탈리아 (솅겐 지역)",
        status: "90일 무비자 (ETIAS 2026년 예정)",
        statusEmoji: "⚠️",
        details: [
            { label: "비자", value: "180일 중 90일 무비자" },
            { label: "여권 유효기간", value: "출발일 기준 3개월 이상 + 발행 10년 이내" },
            { label: "왕복 항공권", value: "필수" },
            { label: "숙소 예약 확인서", value: "필수" },
            { label: "여행자 보험", value: "€30,000 이상" },
            { label: "ETIAS", value: "2026년 말 도입 예정 (현재 불필요)" },
        ],
        warnings: ["⚠️ 2026년부터 ETIAS 신청 필요 예정"],
    },
    germany: {
        country: "🇩🇪 독일 (솅겐 지역)",
        status: "90일 무비자 (ETIAS 2026년 예정)",
        statusEmoji: "⚠️",
        details: [
            { label: "비자", value: "180일 중 90일 무비자" },
            { label: "여권 유효기간", value: "출발일 기준 3개월 이상 + 발행 10년 이내" },
            { label: "왕복 항공권", value: "필수" },
            { label: "숙소 예약 확인서", value: "필수" },
            { label: "여행자 보험", value: "€30,000 이상" },
            { label: "ETIAS", value: "2026년 말 도입 예정 (현재 불필요)" },
        ],
        warnings: ["⚠️ 2026년부터 ETIAS 신청 필요 예정"],
    },
    greece: {
        country: "🇬🇷 그리스 (솅겐 지역)",
        status: "90일 무비자 (ETIAS 2026년 예정)",
        statusEmoji: "⚠️",
        details: [
            { label: "비자", value: "180일 중 90일 무비자" },
            { label: "여권 유효기간", value: "출발일 기준 3개월 이상 + 발행 10년 이내" },
            { label: "왕복 항공권", value: "필수" },
            { label: "숙소 예약 확인서", value: "필수" },
            { label: "여행자 보험", value: "€30,000 이상" },
            { label: "ETIAS", value: "2026년 말 도입 예정 (현재 불필요)" },
        ],
        warnings: ["⚠️ 2026년부터 ETIAS 신청 필요 예정"],
    },
    egypt: {
        country: "🇪🇬 이집트",
        status: "e-Visa 또는 도착비자 필요",
        statusEmoji: "📋",
        details: [
            { label: "비자 방법 1", value: "e-Visa (온라인 사전 신청, 권장) — 단수 $25, 복수 $60" },
            { label: "비자 방법 2", value: "도착비자 — 공항 현장 $25 현금 납부" },
            { label: "처리 기간", value: "e-Visa 1~3일 이내" },
            { label: "체류 기간", value: "입국 후 30일" },
            { label: "여권 유효기간", value: "6개월 이상" },
            { label: "준비물", value: "왕복 항공권, 숙소 예약 확인서" },
        ],
        warnings: [
            "⚠️ 도착비자는 대기 시간이 길 수 있음, 현금만 가능",
            "⚠️ e-Visa 발급일로부터 90일 이내 입국 필수",
        ],
        links: [
            { label: "이집트 e-Visa 공식 신청", url: "https://visa2egypt.gov.eg" },
        ],
    },
    morocco: {
        country: "🇲🇦 모로코",
        status: "90일 무비자",
        statusEmoji: "✅",
        details: [
            { label: "비자", value: "90일 무비자 (관광 목적)" },
            { label: "입국신고서", value: "입국 시 작성 (공항 현장)" },
            { label: "여권 유효기간", value: "6개월 이상" },
            { label: "준비물", value: "왕복 항공권, 숙소 예약 확인서, 체류 경비" },
        ],
        warnings: ["⚠️ 90일 초과 체류 시 체류 허가증(Carte de Séjour) 필요"],
    },
    kenya: {
        country: "🇰🇪 케냐",
        status: "eTA 사전 신청 필수",
        statusEmoji: "📱",
        details: [
            { label: "비자", value: "eTA (전자여행허가) 사전 신청 필수 (2024년 비자 폐지)" },
            { label: "신청 시기", value: "입국 3개월 전부터 가능, 항공권·숙소 예약 후 신청 권장" },
            { label: "유효기간", value: "최대 3개월 (여권 만료일에 따라 상이)" },
            { label: "여권 유효기간", value: "6개월 이상" },
            { label: "준비물", value: "왕복 항공권, 숙소 예약 확인서" },
        ],
        warnings: [
            "⚠️ eTA 미신청 시 탑승 거부 가능",
            "⚠️ 공식 사이트(etakenya.go.ke) 외 피싱 사이트 주의",
        ],
        links: [
            { label: "케냐 eTA 공식 신청", url: "https://www.etakenya.go.ke" },
        ],
    },
};

// 도시명 → 국가 코드 매핑
export const CITY_TO_COUNTRY: Record<string, string> = {
    // 베트남
    "하노이": "vietnam", "호치민": "vietnam", "다낭": "vietnam", "나트랑": "vietnam",
    "푸꾸옥": "vietnam", "호이안": "vietnam", "달랏": "vietnam",
    // 홍콩
    "홍콩": "hongkong",
    // 프랑스
    "파리": "france", "니스": "france", "리옹": "france",
    // 영국
    "런던": "uk", "에든버러": "uk", "맨체스터": "uk",
    // 태국
    "방콕": "thailand", "푸켓": "thailand", "치앙마이": "thailand",
    "파타야": "thailand", "코사무이": "thailand",
    // 일본
    "도쿄": "japan", "오사카": "japan", "교토": "japan", "후쿠오카": "japan",
    "삿포로": "japan", "나고야": "japan", "오키나와": "japan", "나라": "japan",
    "도쿄도": "japan", "요코하마": "japan",
    // 싱가포르
    "싱가포르": "singapore",
    // 대만
    "타이베이": "taiwan", "타이중": "taiwan", "가오슝": "taiwan",
    // 말레이시아
    "쿠알라룸푸르": "malaysia", "페낭": "malaysia", "코타키나발루": "malaysia",
    "조호르바루": "malaysia", "랑카위": "malaysia",
    // 인도네시아
    "발리": "indonesia", "자카르타": "indonesia", "롬복": "indonesia",
    "족자카르타": "indonesia",
    // 필리핀
    "마닐라": "philippines", "세부": "philippines", "보라카이": "philippines",
    "팔라완": "philippines", "다바오": "philippines",
    // 미국
    "뉴욕": "usa", "로스앤젤레스": "usa", "하와이": "usa", "라스베가스": "usa",
    "샌프란시스코": "usa", "시카고": "usa", "마이애미": "usa", "시애틀": "usa",
    "보스턴": "usa", "워싱턴": "usa",
    // 호주
    "시드니": "australia", "멜버른": "australia", "브리즈번": "australia",
    "골드코스트": "australia", "퍼스": "australia",
    // 뉴질랜드
    "오클랜드": "newzealand", "크라이스트처치": "newzealand", "퀸스타운": "newzealand",
    // 캐나다
    "밴쿠버": "canada", "토론토": "canada", "몬트리올": "canada", "캘거리": "canada",
    // 중국
    "베이징": "china", "상하이": "china", "광저우": "china", "선전": "china",
    "청두": "china", "시안": "china", "항저우": "china", "충칭": "china",
    "쿤밍": "china", "장가계": "china", "계림": "china", "하이난": "china",
    "삼아": "china", "우한": "china", "난징": "china", "칭다오": "china",
    // 터키
    "이스탄불": "turkey", "앙카라": "turkey", "카파도키아": "turkey",
    "안탈리아": "turkey", "보드룸": "turkey", "이즈미르": "turkey",
    // 인도
    "뉴델리": "india", "뭄바이": "india", "방갈로르": "india", "첸나이": "india",
    "콜카타": "india", "아그라": "india", "자이푸르": "india", "고아": "india",
    "케랄라": "india", "바라나시": "india",
    // UAE
    "두바이": "uae", "아부다비": "uae", "샤르자": "uae",
    // 스페인
    "마드리드": "spain", "바르셀로나": "spain", "세비야": "spain",
    "그라나다": "spain", "발렌시아": "spain", "말라가": "spain",
    // 이탈리아
    "로마": "italy", "밀라노": "italy", "베네치아": "italy", "피렌체": "italy",
    "나폴리": "italy", "시칠리아": "italy", "아말피": "italy",
    // 독일
    "베를린": "germany", "뮌헨": "germany", "함부르크": "germany",
    "프랑크푸르트": "germany", "쾰른": "germany", "드레스덴": "germany",
    // 그리스
    "아테네": "greece", "산토리니": "greece", "미코노스": "greece",
    "테살로니키": "greece", "크레타": "greece", "로도스": "greece",
    // 이집트
    "카이로": "egypt", "룩소르": "egypt", "아스완": "egypt",
    "후르가다": "egypt", "샤름엘셰이크": "egypt",
    // 모로코
    "마라케시": "morocco", "카사블랑카": "morocco", "페스": "morocco",
    "탕헤르": "morocco", "아가디르": "morocco",
    // 케냐
    "나이로비": "kenya", "몸바사": "kenya", "마사이마라": "kenya",
};

// 타입 정의
export interface EntryCardInfo {
    country: string;
    status: string;
    statusEmoji: string;
    details: { label: string; value: string }[];
    warnings: string[];
    links?: { label: string; url: string }[];
}

/**
 * 도시명으로 입국신고서 정보 조회
 */
export function getEntryCardInfo(cityName: string): EntryCardInfo | null {
    if (!cityName) return null;

    // 정확한 매핑 먼저 시도
    const countryCode = CITY_TO_COUNTRY[cityName];
    if (countryCode && ENTRY_CARD_DATA[countryCode]) {
        return ENTRY_CARD_DATA[countryCode];
    }

    // 부분 매핑 시도 (예: "도쿄 (일본)" 형식)
    for (const [city, code] of Object.entries(CITY_TO_COUNTRY)) {
        if (cityName.includes(city) || city.includes(cityName)) {
            if (ENTRY_CARD_DATA[code]) {
                return ENTRY_CARD_DATA[code];
            }
        }
    }

    return null;
}

/**
 * 입국신고서 정보를 BlockNote 블록 배열로 변환
 * BlockNote 스키마: content는 반드시 1개 이상의 inline content를 가져야 함
 */
export function getEntryCardBlocks(cityName: string): any[] {
    const info = getEntryCardInfo(cityName);

    if (!info) {
        return [
            {
                type: "paragraph",
                props: {},
                content: [
                    {
                        type: "text",
                        text: `${cityName}의 입국신고서 정보를 찾을 수 없습니다. 여행 전 해당 국가 대사관 또는 공식 사이트를 확인해주세요.`,
                        styles: {},
                    },
                ],
            },
        ];
    }

    const blocks: any[] = [];

    // 제목
    blocks.push({
        type: "heading",
        props: { level: 2 },
        content: [
            {
                type: "text",
                text: `${info.country} 입국 가이드`,
                styles: {},
            },
        ],
    });

    // 상태 배지
    blocks.push({
        type: "paragraph",
        props: {},
        content: [
            {
                type: "text",
                text: `${info.statusEmoji} ${info.status}`,
                styles: { bold: true },
            },
        ],
    });

    // 경고 메시지
    for (const warning of info.warnings) {
        blocks.push({
            type: "paragraph",
            props: {},
            content: [
                {
                    type: "text",
                    text: warning,
                    styles: { bold: true },
                },
            ],
        });
    }

    // 구분 단락
    blocks.push({
        type: "paragraph",
        props: {},
        content: [
            {
                type: "text",
                text: "─────────────────────",
                styles: {},
            },
        ],
    });

    // 상세 정보 (체크리스트 형태)
    for (const detail of info.details) {
        blocks.push({
            type: "checkListItem",
            props: { checked: false },
            content: [
                {
                    type: "text",
                    text: `${detail.label}: `,
                    styles: { bold: true },
                },
                {
                    type: "text",
                    text: detail.value,
                    styles: {},
                },
            ],
        });
    }

    // 링크
    if (info.links && info.links.length > 0) {
        blocks.push({
            type: "paragraph",
            props: {},
            content: [
                {
                    type: "text",
                    text: "🔗 유용한 링크",
                    styles: { bold: true },
                },
            ],
        });
        for (const link of info.links) {
            blocks.push({
                type: "paragraph",
                props: {},
                content: [
                    {
                        type: "link",
                        href: link.url,
                        content: [
                            {
                                type: "text",
                                text: link.label,
                                styles: {},
                            },
                        ],
                    },
                ],
            });
        }
    }

    // 마지막 주의사항
    blocks.push({
        type: "paragraph",
        props: {},
        content: [
            {
                type: "text",
                text: "📅 실제 여행 전 반드시 최신 정보를 확인하세요.",
                styles: { italic: true },
            },
        ],
    });

    return blocks;
}
