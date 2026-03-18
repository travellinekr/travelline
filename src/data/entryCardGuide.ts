/**
 * 한국인 여행자 입국신고서 가이드 데이터
 * 최종 업데이트: 2025년 2월 기준
 */

// 국가별 입국신고서 데이터
export const ENTRY_CARD_DATA: Record<string, EntryCardInfo> = {
    vietnam: {
        country: "🇻🇳 베트남",
        status: "입국신고서 불필요 · 45일 무비자",
        statusEmoji: "✅",
        updatedAt: "2026-03-10",
        source: "https://overseas.mofa.go.kr/vn-ho-ko/index.do",
        details: [
            { label: "입국신고서", value: "❌ 불필요 (2022년 폐지)" },
            { label: "비자", value: "45일 무비자 (관광 목적)" },
            { label: "여권 유효기간", value: "6개월 이상" },
            { label: "준비물", value: "귀국 항공권" },
        ],
        warnings: [],
        links: [
            { label: "외교부 베트남 입국 정보", url: "https://overseas.mofa.go.kr/vn-ho-ko/index.do", type: "official", description: "대한민국 외교부 공식 베트남 입국 안내" },
        ],
    },
    hongkong: {
        country: "🇭🇰 홍콩",
        status: "입국신고서 불필요 · 90일 무비자",
        statusEmoji: "✅",
        updatedAt: "2026-03-10",
        source: "https://www.immd.gov.hk/hkt/home/index.html",
        details: [
            { label: "입국신고서", value: "❌ 불필요 (2024.10.16 폐지)" },
            { label: "비자", value: "90일 무비자" },
            { label: "여권 유효기간", value: "체류기간 + 1개월" },
            { label: "참고", value: "입국 시 랜딩 슬립(Landing Slip) 자동 발급" },
        ],
        warnings: [],
        links: [
            { label: "홍콩 이민국 공식 사이트", url: "https://www.immd.gov.hk/hkt/home/index.html", type: "official", description: "홍콩 이민국 공식 입국 정보" },
        ],
    },
    france: {
        country: "🇫🇷 프랑스 (솅겐 지역)",
        status: "90일 무비자 (ETIAS 2026년 예정)",
        statusEmoji: "⚠️",
        updatedAt: "2026-03-10",
        source: "https://france-visas.gouv.fr",
        details: [
            { label: "입국신고서", value: "❌ 현재 불필요" },
            { label: "비자", value: "180일 중 90일 무비자" },
            { label: "여권 유효기간", value: "출발일 기준 3개월 + 발행 10년 이내" },
            { label: "왕복 항공권", value: "필수" },
            { label: "숙소 예약 확인서", value: "필수" },
            { label: "여행자 보험", value: "€30,000 이상" },
            { label: "여행 경비", value: "숙소 있을 경우 €65/일, 없을 경우 €120/일" },
        ],
        warnings: ["⚠️ 2026년부터: ETIAS(€7) + EES 도입 예정 → 사전 신청 필요"],
        links: [
            { label: "프랑스 비자 공식 안내", url: "https://france-visas.gouv.fr", type: "official", description: "프랑스 외교부 공식 비자 안내 사이트" },
            { label: "ETIAS 공식 안내", url: "https://travel-europe.europa.eu/etias_ko", type: "official", description: "유럽 ETIAS 제도 공식 안내 (한국어)" },
        ],
    },
    uk: {
        country: "🇬🇧 영국",
        status: "전자여행허가 ETA 필수 (2025.1.8~)",
        statusEmoji: "📱",
        updatedAt: "2026-03-10",
        source: "https://www.gov.uk/guidance/apply-for-an-evisitor",
        details: [
            { label: "시스템", value: "ETA (Electronic Travel Authorisation)" },
            { label: "시행", value: "2025.1.8부터 한국인 의무 적용" },
            { label: "비용", value: "£10" },
            { label: "유효기간", value: "2년 (복수 입국)" },
            { label: "처리기간", value: "3일 이내 (보통 수 시간)" },
            { label: "E-gate", value: "만 10세 이상 이용 가능" },
            { label: "여권 유효기간", value: "6개월 이상" },
        ],
        warnings: ["⚠️ ETA 미신청 시 탑승 거부 가능"],
        process: [
            { step: 1, title: "공식 사이트 접속", description: "gov.uk/apply-for-an-eta 접속" },
            { step: 2, title: "여권 정보 입력", description: "여권 번호, 국적, 생년월일 입력" },
            { step: 3, title: "여행 정보 입력", description: "방문 목적, 체류 기간 입력" },
            { step: 4, title: "카드 결제", description: "£10 신용카드 결제" },
            { step: 5, title: "승인 확인", description: "이메일로 ETA 승인 확인 → 여권에 자동 연동 (출력 불필요)" },
        ],
        links: [
            { label: "영국 ETA 공식 신청", url: "https://www.gov.uk/apply-for-an-eta", type: "official", description: "영국 정부 공식 ETA 신청 사이트" },
        ],
    },
    thailand: {
        country: "🇹🇭 태국",
        status: "전자입국신고서 필수 (2025.5.1~)",
        statusEmoji: "📱",
        updatedAt: "2025-03-10",
        source: "https://tdac.immigration.go.th",
        details: [
            { label: "시스템", value: "TDAC (Thailand Digital Arrival Card)" },
            { label: "시행", value: "2025.5.1부터 의무화 (종이 TM6 완전 폐지)" },
            { label: "신청 시기", value: "도착 72시간(3일) 전부터 ~ 출발 전" },
            { label: "권장 신청", value: "출발 24~48시간 전" },
            { label: "방법", value: "공식 웹사이트 or 모바일 앱 (한국어 지원)" },
            { label: "비용", value: "무료" },
            { label: "결과", value: "QR 코드 이메일 발급 → 입국 심사 시 제시" },
            { label: "필요 정보", value: "여권, 항공편명, 숙소 주소, 이메일" },
            { label: "비자", value: "60일 무비자 (관광 목적)" },
            { label: "여권 유효기간", value: "6개월 이상" },
        ],
        warnings: [
            "⚠️ 2025.5.1부터 TDAC 미작성 시 탑승 거부 또는 입국 지연 가능",
            "⚠️ 정보 변경(항공편·숙소) 시 반드시 재작성 필요",
            "⚠️ 완료 후 수정 불가 → 신중하게 입력 필요",
        ],
        process: [
            { step: 1, title: "공식 사이트 접속", description: "tdac.immigration.go.th 접속 → 'Arrival Card' 클릭" },
            { step: 2, title: "언어 선택", description: "한국어(🇰🇷) 선택 가능" },
            { step: 3, title: "개인 정보 입력", description: "여권 영문 이름, 생년월일, 국적, 여권 번호 입력" },
            { step: 4, title: "여행 정보 입력", description: "항공편명, 출발 국가, 입국 공항 선택" },
            { step: 5, title: "숙소 정보 입력", description: "태국 내 첫 번째 숙소 이름·주소 (영문) 정확히 입력" },
            { step: 6, title: "건강 정보 입력", description: "최근 14일 이내 방문 국가 기재" },
            { step: 7, title: "이메일 입력 후 제출", description: "확인서 받을 이메일 주소 입력 → Submit" },
            { step: 8, title: "QR 코드 저장", description: "이메일로 발송된 QR 코드 저장 또는 출력 → 입국 심사 시 여권과 함께 제시" },
        ],
        links: [
            {
                label: "TDAC 공식 신청 사이트",
                url: "https://tdac.immigration.go.th",
                type: "official",
                description: "태국 이민국 공식 TDAC 신청 사이트 (한국어 지원)",
            },
            {
                label: "조이의 태국 라이프 - TDAC 작성 완벽 가이드",
                url: "https://whateverinformation.tistory.com/99",
                type: "blog",
                description: "태국 거주자가 사진과 함께 단계별로 설명한 실전 가이드",
            },
            {
                label: "외교부 태국 입국 정보",
                url: "https://www.mofa.go.kr/www/nation/m_3458/view.do?seq=148&titleNm=%ED%83%9C%EA%B5%AD",
                type: "official",
                description: "대한민국 외교부 공식 태국 입국 안내",
            },
        ],
    },
    japan: {
        country: "🇯🇵 일본",
        status: "전자입국신고서 권장 (Visit Japan Web)",
        statusEmoji: "📱",
        updatedAt: "2026-03-10",
        source: "https://vjw-lp.digital.go.jp/ko/",
        details: [
            { label: "시스템", value: "Visit Japan Web (VJW) - 입국심사 + 세관 통합 QR" },
            { label: "대안", value: "종이 입국신고서 가능" },
            { label: "등록 시기", value: "입국 2주 전~하루 전 (3~5일 전 권장)" },
            { label: "비자", value: "90일 무비자" },
            { label: "여권 유효기간", value: "6개월 이상" },
            { label: "필요정보", value: "여권, 항공권, 숙소 주소" },
        ],
        warnings: [],
        process: [
            { step: 1, title: "VJW 접속", description: "vjw-lp.digital.go.jp/ko/ 접속 → 계정 생성 or 로그인" },
            { step: 2, title: "입국 예정 등록", description: "여권 정보 입력 (영문 이름, 여권번호, 국적)" },
            { step: 3, title: "항공편 + 숙소 등록", description: "항공편명, 일본 내 체류 주소 입력" },
            { step: 4, title: "세관 신고서 작성", description: "수하물 신고 내역 입력" },
            { step: 5, title: "QR 코드 저장", description: "입국심사 + 세관 통합 QR 코드 저장 또는 출력" },
        ],
        links: [
            { label: "Visit Japan Web 공식 사이트", url: "https://vjw-lp.digital.go.jp/ko/", type: "official", description: "일본 입국심사 + 세관 통합 QR 코드 발급" },
        ],
    },
    singapore: {
        country: "🇸🇬 싱가포르",
        status: "전자입국신고서 필수 (SGAC)",
        statusEmoji: "📱",
        updatedAt: "2026-03-10",
        source: "https://www.ica.gov.sg/enter-transit-depart/entering-singapore/sg-arrival-card",
        details: [
            { label: "시스템", value: "SG Arrival Card (SGAC)" },
            { label: "신청 시기", value: "도착 3일 이내" },
            { label: "방법", value: "공식 웹사이트 or MyICA 앱 (한국어 지원)" },
            { label: "비자", value: "90일 무비자" },
            { label: "여권 유효기간", value: "6개월 이상" },
            { label: "필요정보", value: "여권, 항공편, 숙소 정보, 건강 신고서" },
        ],
        warnings: ["⚠️ 미제출 시: 입국 거부 or 최대 $1,000 벌금"],
        process: [
            { step: 1, title: "공식 사이트 접속", description: "ica.gov.sg 또는 MyICA 앱 접속" },
            { step: 2, title: "여권 정보 입력", description: "여권번호, 이름, 국적, 유효기간 입력" },
            { step: 3, title: "항공편 + 숙소 입력", description: "항공편명, 싱가포르 내 체류 주소 입력" },
            { step: 4, title: "건강 신고서 작성", description: "최근 14일 내 방문 국가 기재" },
            { step: 5, title: "제출 후 확인서 저장", description: "이메일 확인서 저장 → 입국 심사 시 제시" },
        ],
        links: [
            { label: "SGAC 공식 신청 사이트", url: "https://www.ica.gov.sg/enter-transit-depart/entering-singapore/sg-arrival-card", type: "official", description: "싱가포르 이민국 공식 SGAC 신청" },
        ],
    },
    taiwan: {
        country: "🇹🇼 대만",
        status: "전자입국신고서 의무화 예정",
        statusEmoji: "📱",
        updatedAt: "2026-03-10",
        source: "https://niaspeedy.immigration.gov.tw/webacard",
        details: [
            { label: "시스템", value: "온라인 입국신고서 (의무화 예정)" },
            { label: "대안", value: "종이 입국신고서 현재 가능" },
            { label: "신청 시기", value: "도착 3일 이내" },
            { label: "방법", value: "대만 이민서 웹사이트 (한국어 지원)" },
            { label: "비자", value: "90일 무비자" },
            { label: "e-Gate", value: "만 17세 이상, 키 140cm 이상" },
        ],
        warnings: ["⚠️ 2025년 이후 온라인 의무화 예정"],
        process: [
            { step: 1, title: "대만 이민서 접속", description: "niaspeedy.immigration.gov.tw/webacard 접속" },
            { step: 2, title: "언어 선택", description: "한국어 선택 가능" },
            { step: 3, title: "개인 정보 입력", description: "여권 영문 이름, 국적, 여권번호 입력" },
            { step: 4, title: "여행 정보 입력", description: "비자 유형: Visa-Exempt, 입출국 항공편, 숙소 입력" },
            { step: 5, title: "제출", description: "제출 후 확인서 저장 → QR 코드 제시" },
        ],
        links: [
            { label: "대만 이민서 온라인 입국신고서", url: "https://niaspeedy.immigration.gov.tw/webacard", type: "official", description: "대만 이민서 공식 온라인 입국신고서 (한국어 지원)" },
        ],
    },
    malaysia: {
        country: "🇲🇾 말레이시아",
        status: "전자입국신고서 필수 (MDAC)",
        statusEmoji: "📱",
        updatedAt: "2026-03-10",
        source: "https://imigresen-online.imi.gov.my/mdac/main",
        details: [
            { label: "시스템", value: "MDAC (Malaysia Digital Arrival Card)" },
            { label: "시행", value: "2024.1.1부터 의무화" },
            { label: "신청 시기", value: "도착 3일 전부터 당일까지" },
            { label: "비용", value: "무료" },
            { label: "비자", value: "90일 무비자" },
            { label: "자동출입국", value: "쿠알라룸푸르 공항(KLIA/KLIA2) 이용 가능" },
        ],
        warnings: ["⚠️ 수정 불가: 작성 완료 후 수정 불가 → 신중하게 입력"],
        process: [
            { step: 1, title: "공식 사이트 접속", description: "imigresen-online.imi.gov.my/mdac/main 접속" },
            { step: 2, title: "MDAC 폼 선택", description: "'MDAC' 버튼 클릭" },
            { step: 3, title: "개인 정보 입력", description: "여권 영문 정보, 성별, 직업 입력" },
            { step: 4, title: "여행 + 숙소 입력", description: "항공편명, 말레이시아 체류 주소 입력" },
            { step: 5, title: "제출 (수정 불가!)", description: "Submit 후 컨펌메이션 저장 → 입국심사 시 제시" },
        ],
        links: [
            { label: "MDAC 공식 신청 사이트", url: "https://imigresen-online.imi.gov.my/mdac/main", type: "official", description: "말레이시아 이민국 MDAC 공식 신청" },
        ],
    },
    indonesia: {
        country: "🇮🇩 인도네시아 (발리)",
        status: "전자입국신고서 필수 (All Indonesia Arrival Card)",
        statusEmoji: "📱",
        updatedAt: "2026-03-10",
        source: "https://molina.imigrasi.go.id",
        details: [
            { label: "시스템", value: "All Indonesia Arrival Card (E-CD + SSHP 통합)" },
            { label: "신청 시기", value: "입국 2일 전부터" },
            { label: "비용", value: "무료 (E-VOA/VOA 별도 $50)" },
            { label: "E-VOA / VOA", value: "50만 루피아 (약 $50) 필수 (발리 입국 시)" },
            { label: "발리 관광세", value: "150,000 루피아 (약 $14) - lovebali.badungkab.go.id" },
            { label: "여권 유효기간", value: "6개월 이상" },
        ],
        warnings: ["⚠️ 발리 입국 시 E-VOA 사전 신청 또는 VOA 현장 납부 필수"],
        process: [
            { step: 1, title: "공식 사이트 접속", description: "molina.imigrasi.go.id 접속" },
            { step: 2, title: "Arrival Card 선택", description: "All Indonesia Arrival Card 선택" },
            { step: 3, title: "개인 정보 입력", description: "여권 정보, 항공편, 체류 주소 입력" },
            { step: 4, title: "E-VOA 신청 (발리)", description: "evisa.imigrasi.go.id 에서 도착 전 신청 가능 ($50)" },
            { step: 5, title: "발리 관광세 납부", description: "lovebali.badungkab.go.id 에서 사전 납부 (QR 코드 저장)" },
        ],
        links: [
            { label: "All Indonesia Arrival Card 공식 사이트", url: "https://molina.imigrasi.go.id", type: "official", description: "인도네시아 이민국 전자 입국신고서 공식 신청" },
            { label: "Love Bali 관광세 납부", url: "https://lovebali.badungkab.go.id", type: "official", description: "발리 관광세 (150,000 루피아) 사전 납부" },
        ],
    },
    philippines: {
        country: "🇵🇭 필리핀",
        status: "전자입국신고서 필수 (eTravel)",
        statusEmoji: "📱",
        updatedAt: "2026-03-10",
        source: "https://etravel.gov.ph",
        details: [
            { label: "시스템", value: "eTravel (입국신고서 + 건강신고서 + 세관신고서 통합)" },
            { label: "신청 시기", value: "출발 72시간 이내" },
            { label: "비용", value: "무료" },
            { label: "비자", value: "30일 무비자" },
            { label: "여권 유효기간", value: "6개월 이상" },
            { label: "결과", value: "QR 코드 발급 → 입국 시 제시" },
        ],
        warnings: ["⚠️ 출발 72시간 이내에 작성 필수 (너무 일찍 작성 불가)"],
        process: [
            { step: 1, title: "eTravel 접속", description: "etravel.gov.ph 접속 (모바일 웹 또는 PC)" },
            { step: 2, title: "개인 정보 입력", description: "여권 정보와 동일하게 영문 입력" },
            { step: 3, title: "항공편 정보 입력", description: "항공편명, 출발지, 필리핀 내 주소 입력" },
            { step: 4, title: "건강 신고서 작성", description: "최근 방문 국가 등 건강 관련 정보 입력" },
            { step: 5, title: "QR 코드 저장", description: "제출 후 QR 코드 스크린샷 저장 → 입국심사 시 제시" },
        ],
        links: [
            { label: "eTravel 공식 신청 사이트", url: "https://etravel.gov.ph", type: "official", description: "필리핀 eTravel 공식 사이트 (무료)" },
        ],
    },
    guam: {
        country: "🇬🇺 괌 (미국령)",
        status: "ESTA 필수 (미국 본토와 동일)",
        statusEmoji: "✈️",
        updatedAt: "2026-03-11",
        source: "https://esta.cbp.dhs.gov",
        details: [
            { label: "비자", value: "ESTA (Electronic System for Travel Authorization) — 미국 본토와 동일 규정" },
            { label: "괌-CNMI 비자면제", value: "한국은 VWP 국가이므로 해당 없음 → ESTA 필수" },
            { label: "비용", value: "$21" },
            { label: "유효기간", value: "여권 만료일까지 (최대 2년, 복수 입국)" },
            { label: "체류 가능", value: "최대 90일" },
            { label: "준비물", value: "전자여권(MRZ 코드), 괌 내 체류 주소, 신용카드" },
        ],
        warnings: [
            "⚠️ ESTA 미신청 시 탑승 거부 가능",
            "⚠️ 괌·CNMI 비자면제는 한국 여권 소지자에게 적용되지 않음 — ESTA 반드시 필요",
        ],
        process: [
            { step: 1, title: "공식 사이트 접속", description: "esta.cbp.dhs.gov 접속 (유료 대행 사이트 주의!)" },
            { step: 2, title: "여권 정보 입력", description: "전자여권 MRZ 코드 또는 수동 입력" },
            { step: 3, title: "여행 정보 입력", description: "괌 내 체류 주소, 방문 목적, 항공편 입력" },
            { step: 4, title: "보안 질문 응답", description: "범죄 경력, 건강 상태 등 Yes/No 응답" },
            { step: 5, title: "결제 및 승인 확인", description: "$21 결제 후 이메일로 승인 확인 (보통 수분~72시간)" },
        ],
        links: [
            { label: "ESTA 공식 신청 사이트", url: "https://esta.cbp.dhs.gov", type: "official", description: "미국 CBP 공식 ESTA 신청 (유사 대행 사이트 주의)" },
        ],
    },
    usa: {
        country: "🇺🇸 미국",
        status: "전자여행허가 ESTA 필수",
        statusEmoji: "✈️",
        updatedAt: "2026-03-10",
        source: "https://esta.cbp.dhs.gov",
        details: [
            { label: "시스템", value: "ESTA (Electronic System for Travel Authorization)" },
            { label: "신청 시기", value: "출발 72시간 전까지 (권장)" },
            { label: "비용", value: "$21" },
            { label: "유효기간", value: "여권 만료일까지 (최대 2년, 복수 입국)" },
            { label: "준비물", value: "전자여권(MRZ 코드), 미국 내 체류지 주소, 신용카드" },
            { label: "체류 가능", value: "최대 90일" },
        ],
        warnings: ["⚠️ ESTA 미신청 시 탑승 거부 가능"],
        process: [
            { step: 1, title: "공식 사이트 접속", description: "esta.cbp.dhs.gov 접속 (유료 대행 사이트 주의!)" },
            { step: 2, title: "여권 정보 입력", description: "전자여권 MRZ 코드 또는 수동 입력" },
            { step: 3, title: "여행 정보 입력", description: "미국 내 체류 주소, 방문 목적, 항공편 입력" },
            { step: 4, title: "보안 질문 응답", description: "범죄 경력, 건강 상태 등 Yes/No 응답" },
            { step: 5, title: "결제 및 승인 확인", description: "$21 결제 후 이메일로 승인 확인 (보통 수분~72시간)" },
        ],
        links: [
            { label: "ESTA 공식 신청 사이트", url: "https://esta.cbp.dhs.gov", type: "official", description: "미국 CBP 공식 ESTA 신청 (유사 사이트 주의)" },
        ],
    },
    australia: {
        country: "🇦🇺 호주",
        status: "전자여행허가 ETA 필수",
        statusEmoji: "✈️",
        updatedAt: "2026-03-10",
        source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601",
        details: [
            { label: "시스템", value: "ETA (Electronic Travel Authority) - 앱으로만 신청" },
            { label: "신청 방법", value: "Australian ETA 앱 (iOS/Android)" },
            { label: "비용", value: "AUD $20" },
            { label: "유효기간", value: "1년 (입국당 최대 3개월 체류)" },
            { label: "준비물", value: "여권, 신용카드, 스마트폰(Face Verification)" },
            { label: "여권 유효기간", value: "6개월 이상" },
        ],
        warnings: ["⚠️ 반드시 Australian ETA 공식 앱으로 신청 (웹 신청 불가)"],
        process: [
            { step: 1, title: "앱 설치", description: "App Store/Google Play에서 'Australian ETA' 공식 앱 설치" },
            { step: 2, title: "여권 스캔", description: "NFC 또는 카메라로 여권 스캔" },
            { step: 3, title: "얼굴 인식", description: "Face Verification 완료" },
            { step: 4, title: "개인 정보 확인", description: "여권 정보 확인 및 수정" },
            { step: 5, title: "결제 및 승인", description: "AUD $20 결제 → 앱에서 ETA 승인 확인" },
        ],
        links: [
            { label: "호주 ETA 공식 안내", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601", type: "official", description: "호주 내무부 공식 ETA 안내" },
        ],
    },
    newzealand: {
        country: "🇳🇿 뉴질랜드",
        status: "전자여행허가 NZeTA 필수",
        statusEmoji: "✈️",
        updatedAt: "2026-03-10",
        source: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/nzeta",
        details: [
            { label: "시스템", value: "NZeTA (New Zealand Electronic Travel Authority)" },
            { label: "신청 방법", value: "NZeTA 앱 or 이민성 웹사이트" },
            { label: "비용 (앱)", value: "NZD $17 + IVL $35 = 합계 $52" },
            { label: "비용 (웹)", value: "NZD $23 + IVL $35 = 합계 $58" },
            { label: "유효기간", value: "2년 (입국당 최대 3개월)" },
            { label: "처리기간", value: "3일 이내 (빠르면 수 시간)" },
            { label: "여권 유효기간", value: "6개월 이상" },
        ],
        warnings: ["⚠️ NZTD (건강신고서) 출발 24시간 전 별도 작성 필요"],
        process: [
            { step: 1, title: "NZeTA 앱 설치", description: "App Store/Google Play에서 NZeTA 앱 설치 (또는 웹)" },
            { step: 2, title: "여권 스캔 및 정보 입력", description: "여권 정보 스캔 또는 수동 입력" },
            { step: 3, title: "여행 정보 입력", description: "뉴질랜드 내 체류 주소, 방문 목적 입력" },
            { step: 4, title: "결제", description: "앱 NZD $52 / 웹 NZD $58 결제 (IVL 포함)" },
            { step: 5, title: "NZTD 작성", description: "출발 24시간 전 nztraveller.com 에서 건강신고서 별도 작성" },
        ],
        links: [
            { label: "뉴질랜드 NZeTA 공식 안내", url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/nzeta", type: "official", description: "뉴질랜드 이민국 공식 NZeTA 안내" },
        ],
    },
    canada: {
        country: "🇨🇦 캐나다",
        status: "전자여행허가 eTA 필수 (항공 입국)",
        statusEmoji: "✈️",
        updatedAt: "2026-03-10",
        source: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html",
        details: [
            { label: "시스템", value: "eTA (Electronic Travel Authorization) - 항공 입국 시만" },
            { label: "비용", value: "CAD $7" },
            { label: "유효기간", value: "최대 5년 (여권 만료일 중 빠른 날)" },
            { label: "준비물", value: "여권, 신용카드, 이메일" },
            { label: "처리기간", value: "수분~수일 (여유있게 신청 권장)" },
            { label: "육로/해로 입국", value: "eTA 불필요" },
        ],
        warnings: ["⚠️ 항공 탑승 전 eTA 미신청 시 탑승 거부 가능"],
        process: [
            { step: 1, title: "공식 사이트 접속", description: "canada.ca eTA 신청 페이지 접속" },
            { step: 2, title: "여권 정보 입력", description: "여권 번호, 만료일, 국적 입력" },
            { step: 3, title: "이메일 및 결제", description: "이메일 주소 입력 후 CAD $7 카드 결제" },
            { step: 4, title: "승인 확인", description: "이메일로 eTA 승인 확인 → 여권에 자동 연동" },
            { step: 5, title: "ArriveCAN (선택)", description: "출발 72시간 전 ArriveCAN 앱에서 Advance Declaration 작성 (선택)" },
        ],
        links: [
            { label: "캐나다 eTA 공식 신청", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/apply.html", type: "official", description: "캐나다 정부 공식 eTA 신청 페이지" },
        ],
    },
    china: {
        country: "🇨🇳 중국",
        status: "30일 무비자 + 전자입국신고서 의무",
        statusEmoji: "📱",
        updatedAt: "2026-03-10",
        source: "https://www.nia.gov.cn",
        details: [
            { label: "비자", value: "30일 무비자 (2024.11.8~, 관광·비즈니스·친지방문·경유)" },
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
        process: [
            { step: 1, title: "NIA 웹사이트 접속", description: "www.nia.gov.cn 접속 또는 'NIA 12367' 앱 설치" },
            { step: 2, title: "Electronic Arrival Card 선택", description: "전자입국신고서(电子入境卡) 선택" },
            { step: 3, title: "개인 정보 입력", description: "여권 정보, 방문 목적, 체류 주소 입력" },
            { step: 4, title: "제출 및 QR 코드 저장", description: "제출 후 QR 코드 스크린샷 저장" },
            { step: 5, title: "입국 심사", description: "QR 코드 제시 또는 키오스크 스캔 후 입국" },
        ],
        links: [
            { label: "중국 국가이민관리국(NIA) 공식 사이트", url: "https://www.nia.gov.cn", type: "official", description: "중국 전자입국신고서 공식 신청" },
        ],
    },
    turkey: {
        country: "🇹🇷 터키",
        status: "90일 무비자",
        statusEmoji: "✅",
        updatedAt: "2026-03-10",
        source: "https://www.ktb.gov.tr",
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
        status: "e-Visa 필수 + 전자입국신고서",
        statusEmoji: "📋",
        updatedAt: "2026-03-10",
        source: "https://indianvisaonline.gov.in/evisa/tvoa.html",
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
        process: [
            { step: 1, title: "e-Visa 신청", description: "indianvisaonline.gov.in 에서 e-Visa 신청 (출발 최소 4일 전)" },
            { step: 2, title: "서류 업로드", description: "여권 사본(PDF), 여권 사진(흰 배경) 업로드 후 결제" },
            { step: 3, title: "e-Visa 수신", description: "이메일로 e-Visa 수신 (3~5일 이내) → 출력 보관" },
            { step: 4, title: "e-Arrival Card 작성", description: "출발 72시간 전 indianvisaonline.gov.in/earrival 에서 작성" },
            { step: 5, title: "입국", description: "e-Visa + e-Arrival Card 제시 후 입국" },
        ],
        links: [
            { label: "인도 e-Visa 공식 신청", url: "https://indianvisaonline.gov.in/evisa/tvoa.html", type: "official", description: "인도 정부 공식 e-Visa 신청" },
            { label: "e-Arrival Card 신청", url: "https://indianvisaonline.gov.in/earrival", type: "official", description: "인도 전자입국신고서 공식 신청" },
        ],
    },
    uae: {
        country: "🇦🇪 UAE (두바이·아부다비)",
        status: "90일 무비자",
        statusEmoji: "✅",
        updatedAt: "2026-03-10",
        source: "https://u.ae/en/information-and-services/visa-and-emirates-id",
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
        updatedAt: "2026-03-10",
        source: "https://travel.ec.europa.eu/etias_en",
        details: [
            { label: "비자", value: "180일 중 90일 무비자" },
            { label: "여권 유효기간", value: "출발일 기준 3개월 이상 + 발행 10년 이내" },
            { label: "왕복 항공권", value: "필수" },
            { label: "숙소 예약 확인서", value: "필수" },
            { label: "여행자 보험", value: "€30,000 이상" },
            { label: "여행 경비", value: "숙소 있을 경우 €65/일, 없을 경우 €120/일" },
            { label: "ETIAS", value: "2026년 말 도입 예정 (현재 불필요)" },
        ],
        warnings: ["⚠️ 2026년부터 ETIAS 신청 필요 예정 (€7, 3년 유효)"],
    },
    italy: {
        country: "🇮🇹 이탈리아 (솅겐 지역)",
        status: "90일 무비자 (ETIAS 2026년 예정)",
        statusEmoji: "⚠️",
        updatedAt: "2026-03-10",
        source: "https://travel.ec.europa.eu/etias_en",
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
        updatedAt: "2026-03-10",
        source: "https://travel.ec.europa.eu/etias_en",
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
        updatedAt: "2026-03-10",
        source: "https://travel.ec.europa.eu/etias_en",
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
        updatedAt: "2026-03-10",
        source: "https://visa2egypt.gov.eg",
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
            { label: "이집트 e-Visa 공식 신청", url: "https://visa2egypt.gov.eg", type: "official", description: "이집트 전자비자 공식 신청 사이트" },
        ],
    },
    morocco: {
        country: "🇲🇦 모로코",
        status: "90일 무비자",
        statusEmoji: "✅",
        updatedAt: "2026-03-10",
        source: "https://www.marocainsdumonde.gov.ma",
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
        updatedAt: "2026-03-10",
        source: "https://www.etakenya.go.ke",
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
            { label: "케냐 eTA 공식 신청", url: "https://www.etakenya.go.ke", type: "official", description: "케냐 전자여행허가 공식 신청 사이트" },
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
    // 괌 (미국령)
    "괌": "guam", "하갓냐": "guam", "투몬": "guam",
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
export interface EntryLink {
    label: string;
    url: string;
    type: 'official' | 'guide' | 'blog';  // 공식사이트 | 가이드 | 블로그
    description?: string;                  // 링크 설명 (예: "화면 캡처 포함 신청 절차")
}

export interface ProcessStep {
    step: number;
    title: string;
    description: string;
}

export interface EntryCardInfo {
    country: string;
    status: string;
    statusEmoji: string;
    details: { label: string; value: string }[];
    warnings: string[];
    links?: EntryLink[];
    process?: ProcessStep[];  // 신청 절차 단계별 안내
    updatedAt?: string;       // 데이터 업데이트 날짜 (YYYY-MM-DD)
    source?: string;          // 참조 공식 출처 URL
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
