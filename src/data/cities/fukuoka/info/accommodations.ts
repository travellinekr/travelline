import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "미야코 호텔 하카타": {
        photos: ["/images/fukuoka/info/accommodations/miyako-hotel-hakata-fukuoka.jpg"],
        placeId: "ChIJlcknT8iRQTURycShRMUTenA",
        placePhotos: [
            { photoReference: "AWCwydi9tG8sAGLT5Ri8-VgyFZT383G7OQS29t58vkPuyoX1WeqSYQbmJiT3V8XlJp9LAwvUHeCMZrt2SIFIpZjmlhHmQuAE4O0dvBiRj8rlkBaWTOrlo97S7r_xYN6gBII_t_9RDhVJm3TH2UtYQIcLBEz7CtgrsLIStsODkvxYJaTYf8vCoRTPPMYWCEti1z6X6-xNf096kmr__zWEJdYpGYOxUPOF4T4PmHl-S_pGYqaxcdhWdHZLlrzcFZsjR7GbV37v6HNwm5v72dd7MN8pXDdLI1lm4-nDuulebmzWM9LzGHkDTClNnfhEnAgeHOfa7_cp9sNOvcGZHtaRq0QUu7MG0qm-vALGS56VwTGk6G78foRs_yvSWWvYqQCo20xAdgMraJh93tQL4paseGUN7kIP2pR5lj7HBAt-OsDduP7nMQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100091869880922509798\">都ホテル博多</a>"] },
            { photoReference: "AWCwydiuGiosKIceTV7wy8CAhe0dJqel4OBev2tKMFWvQGrV0L7dfNhFNspA3JC1g2A0IVfAts639Nro-vP5kryNUr1UDvLvKmjxIsNBfwOOJWxxsbLBxVsA_N8mri3JmAmOHq0yZdA3qV-a_klxV1v0y7W1py2w0KBHy-rnpOI-LVet-hfYe3SajHzpWijKtLHIZJ0oPlyXfD3aYns07IS_EVt1cqL9-Yxt03BzN-9QW3vApEDxWA1JPtrvTczOJJ4R59HRyyGegq1rtbfcQIgqCdBOl4QUOZFfOqp7AFeSolkFaA96KyylsLldQK5Pd0A-f0xHZzZLzdK_dnpJskMhO4k_CbFOk81FZPi3u0BAQVqaBoo2sJ6wAqiiU873NzTu5jUmzU0gqc-yyrZxSkFKVp07QV9AvG40fPL4v1SB__o8SDPf", width: 3888, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100091869880922509798\">都ホテル博多</a>"] },
            { photoReference: "AWCwydhfml5e4yn85ctZTBtEZH0hI9rkCAtEEYRQOVkXi_2XdDuhTlmoBDDhmgrK-H3W2DOFE55Pr5InAjZ1zXSJBSAIhp9gIIfofSo-L4NXrhPIlPCkpQVPEVnr3VACKkKJFr8mcL5j6l_ixSp0CT6cwTBqD0hvuf_msKOig8h3NMncfiyQj18LtjIjRf0b1gqMGZioPuW8flCX7tvic8RMeAhdzChzK1UMFzDJeS6Lng3Bwprw3j-_2pp3j6fNnn8tlTo-1PL84ATcOmrONtDTcN0ZIqgDt7vLvTUrgFYY-W_F_J2LBVHCUszRHYD_sqJ389Wa6bbFdpLAqOAXxfIxbdXMaLUuUPw75ksX3UBc-FODwEfxz7R-0D7uDD3mrV512i-y42_NE2VbdRVW2_E79S4ZMPDD9ykIDoBq6qU7Z6zyAjDN", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115102122739706332209\">kotaro abe</a>"] },
            { photoReference: "AWCwydiBgPcVtCgzqUW1uJGy7GXrQ-tw80X1vQijVuX3fQ966SEpHweSaVuricGmw8zkYnyJCVc77sgfsT0TAs5dR-n4Zdh1yc86FnmCDbuVgPdLa4giE0uEsyis1B8Nz9AlBr-3obV0yU4qYyYQNCVQoDHWcm5QJ5ZpP66VaPZkbqdG1Q8ngLqcKjHT_TKWsu6_SKcsUnP7KT2E1_VMleiRRGPhN8TuUQ2hnlyT5fWLhP-QJJOfm7jIXLlpjRs_H8NcBiIs1QgECB1fbrQl0HeDLg0KjbKxY-_GSCHi7eSQuFuuDaPbQlTxHPqK48UboYHAuBnohZXJZV_hwFZrSUwfspoCB-aSjAtYDQqfxqxOriKclBZ1Eo4HMTfOPLQeJHBn8bwR1jkbwEA4bvz7C0tsmPgmgD2FoCLGymjzWE_EovST8mfo", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102120084368781011989\">마이클</a>"] },
            { photoReference: "AWCwydhYlpH3YzALtkvvRbScsgjMVVXLZoYd7VcZs53VY0osIwU0MDFWDBK-FYU9hOAkdiDkVvf048YyxK27kqMh1k5fONKhcI8o29PgZt3sdmgT-OZ7X1kwXn97JXbCkgY5WNdjvPsfBzBt3ZGeSATu0U686eCPhr_AiGCdHgaQcvnIEv9a3oIm5YUeJtalCBzmeGlbw4JShdTc7Hry58XXNM73Js9ZbVuDydOV_V5ApVEqHNYaHMtFW6jQv1x81H9VyAYDEAX9Zvw_wv6iPjbLU7fo6TL0rYq8gojO0tw6DYBr2yx9TU0Lnd8Mp-jluZv2aCPY5lkQjsW396rBv3YPjc4PJ20aYLhOdtvbjy90aSRQ1TLaLS40NcHRJPxDpnl6YQvyr8brgtDxNFwsJKMhSz7IocMiriLXzcJ3OBJwZJjjEw", width: 3888, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100091869880922509798\">都ホテル博多</a>"] }
        ],
        summary: "하카타역 바로 앞이라 위치가 환상적이고 대욕장까지 즐길 수 있는 프리미엄 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["하카타역 초근접 입지", "여행 피로를 풀어주는 대욕장 보유"],
        tips: ["대욕장은 투숙객이라면 꼭 이용해 보세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-1-1 Hakataekihigashi, Hakata Ward, Fukuoka, 812-0013 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.miyakohotels.ne.jp/hakata/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8104812217387566281", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%95%BC%EC%BD%94+%ED%98%B8%ED%85%94+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 닛코 후쿠오카": {
        photos: ["/images/fukuoka/info/accommodations/hotel-nikko-fukuoka.jpg"],
        placeId: "ChIJXa5CQceRQTUR-XdNI0DBeBw",
        placePhotos: [
            { photoReference: "AWCwydjLpCy3BYkU8T0uwH0tBjvzS-7bIhlcF3gmMeac-ZJBQaTvzcTVB1jTUyMxAk3-PVJ3P1DBAgOI4PvxIP_fu4Mb2XnaM7gDt-m0B-S-p2GRrmcdczvzMCLdmxsAnAxV2FXihDvTO4AOOAD_Ig7DwiXb6fRMblDtptp_j21HJ-JP5Bar9BfINjr5TGw7YazZjznM1fyB-pj91EgN21EEBRiyyq9z-GKSqODMaCjL9DrFvI77qWi6P4HRqdgkL8I4RofjfvUyCN0RkKcL3MnJ-8IfT1YcvGawltzb7ZqpGlx1i0SA9GThB1IZBaVcoztamfQVXnc2xsPEfcUy_nJkrT2bDTTDoBPdr7cVYug2NnN84Kuctr9Fjc4lNm49FmWnKi9mXKT3G-Mjjvt7lGgpkPyFz6pDdsEMCZifLySs4zJReQ", width: 2048, height: 1525, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114193894708130697855\">ホテル日航福岡</a>"] },
            { photoReference: "AWCwydiehcLMa3H89odOt3VxI33tW_b7lP_ypcIQ3t6AuygNYno9HdqSybI3gveDbQYAepbItRfTqsdSfkSKK-OnNJqhG3R_BspEFAdsitqvFO2Nd8bXeF1UwxcjZqYRbSh1I-VhtHgMJnvipU3oEk30wDnw7uuzc-5rHYJxX8C9Fa7ogOKTb9BEObaZMoQ8t2ikPSIzjH-lYIOHlcFE6H6Q70HHigtaarXtbNclq-Ys-Y1f0WGzxcm3aqXJUBoXeUt4HJKk476FngQ20cukMDZK1iJYc6P_ZKRdvpPL0HY9TtJb_CgR1lK5QSVR0wsDs93gFJ9WLVxk_m1LfXPVRhnAvs76MqZEcNzdW7WXr1qN3a5qc7wZAAY3KpJwz3cPTYgy2dQbMNmSEVcjQdU6OV9b-iHj92EVaRxLjbuzT4H2ft5pyA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114193894708130697855\">ホテル日航福岡</a>"] },
            { photoReference: "AWCwydgy6I-9UWJtXMdHfGSO2lGi5LUKHVqTVHfyKcGy8xOJQIfru-NWxVucBouAO5TbBYEhloBExz22cEP8TlXC1CeZ4HmcLw0ihQ0DogaO_VgNRh6g6f8Iye378BwJduKjpbJBYH7qwjXuAiMVXQRomEPaDnHQzzENF3VW9hNVcJE9pb_YDY_8H4I1RCBQvJqdYu7tcDwFb9bzsod9p23K19Th3ka0pFrwbAfoFNZVmrRQozKoVez2yvKSghkokAHQjPjRJg0MEZAncL5B4M-1DjwNaAmUF3vFuV81oiuufvmEJ_tuh30t2t2zb1e75xDb4pfEzxW8C871d7b-MNTmqArBM1aMhRYabx1OserLYEiNA1nXDEtw-EbP_cloq40QOt9BQblk5UzCx8T5UBOgIxrKUZkgCmZSRO3ier5H68HB9Ww", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114193894708130697855\">ホテル日航福岡</a>"] },
            { photoReference: "AWCwydhJrHCAX1Elpb47DYqwmPi4rKxgfiroLNfspBeO5TaQInH1se3_EYGg6FIbWKquxx3uWw0djbvG16AOS70mysJWxKGN0rkrmVxqbe36TssZVPaqg2yRs49TwbVo599pTujDymRQOEmJNpH4pUp5IGnpiuAzJC0PlWEX0isLHtoICp_aUxYRXEuRV56xzWjOwpkF2U9TeXhp1-ICJuW2LSqizefqx7VFeH879BkMJ7pVM9GtnNeuWzIIU-gcKqPJGs-oCHl-NbW3JBm1SGDTltOm6fjrKZAv7ouwITsV-BTsPocolu_F1yY9A0wXF_sr8811Uv2_3z5VRManYzvRbDf0kSpOMhd_3pNwh4UfEnnI0i3s9y1fGBnYbqbkSYClMheFrptnrI0SXKYC3z-JtrNaOsa60dIqylj0tg3Svn6Vs0qv", width: 620, height: 380, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114193894708130697855\">ホテル日航福岡</a>"] },
            { photoReference: "AWCwydh78HEblRxTOTSYGVM3_KwbhCciyJ2l1I3_--K7RONCPODp6a8SUr-j-HiTZsa7Fwgzgskqo9zhZhNanFpo33wrppbN6ZoQssVw9mQn1SJkfTSc_YpdAMKc1h9jCzAWFZpWKNxAyrCiQ9qBD81ytHQlzk-yUROZb4dDUOjObtx4Gdr_GZ-214jxdgoTWoJuEDE6hWyW33bfsXR6IQsMt4O9z0LR8hB-MBNCQhnwBlygrlodolsE0eo3RrUhVMyMNjD5o0U5__judxVFuXZhiuzZ41s2lb4Vv73PE8KZqnWJAOV_kyVYhS83DrrdJgy9C9b8SpfDlVxtR6cnXsu2-B5DRtfwsstl7XsvzanF5TiSVI0Y0SxxthLZFhCS3K5ecRMKVfszBrpALvokTyNr_0DptmndKHi_3ZKcf-KJmd4", width: 1500, height: 1125, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114193894708130697855\">ホテル日航福岡</a>"] }
        ],
        summary: "하카타역 접근성이 좋고 서비스가 안정적이라 편안하게 머물기 좋은 클래식 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["뛰어난 역 접근성", "믿고 머무는 안정적인 서비스"],
        tips: ["부모님이나 아이와 함께하는 여행객에게 추천합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-18-25 Hakata Ekimae, Hakata Ward, Fukuoka, 812-0011 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://hotelnikko-fukuoka.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2051602111481608185", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%8B%9B%EC%BD%94+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그랜드 하얏트 후쿠오카": {
        photos: ["/images/fukuoka/info/accommodations/grand-hyatt-fukuoka.jpg"],
        placeId: "ChIJ6WkfjZWRQTURwRQoB0njLT8",
        placePhotos: [
            { photoReference: "AWCwydgqboPyY3zIkthitG4pGJCMLZbpn49B8k-QOq5CikpJo_PtLgRrRhZ59cvCBp8058bTlrividDotL-vRp0MRYPUpMTnmMgVYlCLsO_L3hFosWHOzDxm01fnYNPAJdA9Et1maElyJwrekiDXtlyZx6T90UStQNXEI5F0TczPtPUsWjJd1ugiu4RUSUtOrjACIJ2arYOkREhEeVCoNQL840Y_B7RNrZZUZc9Knrda0_Tp_AfAfrIEnDf5CLDBqscbyqDzJp3ncKDE_RC0vDPvcOUY5odrmqHwBm5pPfkNub88kpGJWmTVPj9NEZtEVVCIkVpRT8oZaQBoGy37Tn-FK27YSTPWUWR3k317yyeYBz705nY22tyjOThVb4thiBDOFl8CbIddipTCoXSM2Ds3d-JjKH-daTFcFrggN106bvHAG6UK", width: 2067, height: 1601, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113613337151652373945\">Grand Hyatt Fukuoka</a>"] },
            { photoReference: "AWCwydgjCCkG0a3TJdsgUAgFFCXHIoMFswotaeNpHV_VQTMDQbApfPFOOhHnE6aHfmm242eA7lmmcxaQhCEeN1brcPgihhvn5yqtcwkf8BamFHTPSoGIDfpaQVN_rHfTc43K5DRrvvHVWNmrEfm7bwbPcOJ_BrZVpfhaFmbs8A0r9r1PNWQgA7OZUwYyeyCE3QWrqqUd1i4IPsfkLltQnqnI57o4-EF61ocLZbK0fkhqBorh5rPNSEZHE-OKx8JlygXEj2SiwI2UWClpCLhzlHmxQ3z3P81o2jWJgqXNkKYnvc2_KYvfcIzMnbA7G1OjDCN8WT4smZa0IcFSHBonNuxBx9do0aBNZfYNAhSrW31-gAHDwaq9PrzzW9D7LGiCAIiCRYLpU7VIMQH1Vt2c2ee4muzHYuW8hrns57uewnfmZjxcXZmN1CmU1a2ar3rxHBFl", width: 2880, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113613337151652373945\">Grand Hyatt Fukuoka</a>"] },
            { photoReference: "AWCwydif0SzXKglJtBbhbVpqpw8i0qmAzftuvNDawBPAB1LvHdvQhS18dVVlf8hOatTngaJmd8BEtcELu5DMU_H6ExG-H8NzFVzRw0hY7eI2fQ418VI7XoYkZGe6Y69C90NtUa3mCMtwsUyl8rN0fF8K0yu0wBITK3JKoaRpSALUGsGPM3ZrWidtoL7WX7OPhxqgMxo5h4oyf6EOYO0QvOYLXqPqD2yYdfz8j2VGlTJM_nvwUwSnqOLPUl6pqL65sefaXcTaZCZCV0ZnG5OiyUnu2KjojLr3qiSV9cCefehI0OCmSO0pkC4JWRVVdN_HqIGwiMwoXjOlRDjaLALEHqaUtW_7i_YeuZ6D-lyeaLr-F3XlTVQfnoBLRNhXuAw6UAEIouutA0q0podLSm-gxibGz_jVZuIJ_ZWM562QH6Q-QeeWkQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110374923146594278336\">Patrick Fang</a>"] },
            { photoReference: "AWCwydibSPkDGO09bW0bxPSAsbcE8OJmkI_Gs5g2QLBBzNfsYMDSq33ubnq_u9HEefWeR5t-F-bQYB7AQpCvthbctpVs3lHQolI-jHUf7_t_4ZsnWKddocjX4LC9HJY6UDjoYmRjh2MUsGZmqwhx4crWqoEYxIf0tw4coq2UA5x9S3fFSAtKdi85SEZcF65AveBlZMWcpKaqAeVgPJ1NRoW_7flalKT_jvAkU3-AgfslXjhP33DURPD3oHvdvXr4mFTexiRVDRHq9SdG716A9bnyvcAzZe8fnNYk-PY8oOqvt-HHISBgjdJvYYv_j8Rdg674QQn3gmMpCA73N3AOnq88Af3abyEdW5iapRtvPV5-9UzwOF_n091CwN0VIeOwTYPi9UIvaFnxRsVsw4pQDLX0tj4F6SUoyr2_r3upqOAnL-lcy3nVcWa_NEQdV9jM1HeW", width: 2880, height: 1919, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113613337151652373945\">Grand Hyatt Fukuoka</a>"] },
            { photoReference: "AWCwydhY00AqqFpWGgCiG9Hq4e4GbNzWiiXUUKfFQY89o6FaScYCCcL2xJaNjhQWUAx6h7ml6UATu_NvqN6K-ZtWK0HaoZzhljyyeo6jlMunL5brSXsA01UIoYA9Z8hXOwwoc0eVMZ-YY8K14kUjixmLPmR32OeF281cgF-3Gs31JWJXwi3wbXwkoer_s2HDiap5yyu-IXv9kNE5HS526N9IswNXXl3hTyFunYvTt-V29mGUax0ypmgiuGLvvtasZ2cqhIklWbel34A2U9uVFSSJh07CfbSv6n3Py5tT5Q7X5stYRH2ewOQsEs1Pk2fKVlvaC6O0Ei4Qm9ao3HptspGjy5FaSf6w315EnvPEVtWO_2ROFbN-zYF2pIK0fWJYowfZQ6d57iBHMu0SrwKKpaL4Ee42t4-f5sQ7eSuBWI3MNy2rYUU", width: 1024, height: 683, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113613337151652373945\">Grand Hyatt Fukuoka</a>"] }
        ],
        summary: "캐널시티와 연결되어 쇼핑과 식사를 한 번에 해결할 수 있는 최적의 위치입니다.",
        updatedAt: "2026-07-13",
        highlights: ["캐널시티 쇼핑몰 직결", "주변 맛집 및 식당가 접근성 최고"],
        tips: ["쇼핑 위주의 여행 일정이라면 최고의 선택지입니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1-chōme-2-82 Sumiyoshi, Hakata Ward, Fukuoka, 812-0018 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4552544701133624513", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%9C%EB%93%9C+%ED%95%98%EC%96%8F%ED%8A%B8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 블라썸 하카타 프리미어": {
        photos: ["/images/fukuoka/info/accommodations/the-blossom-hakata-premier-fukuoka.jpg"],
        placeId: "ChIJ9yX8lJyRQTURlJxzdI5_KrA",
        placePhotos: [
            { photoReference: "AWCwydgU2hKsHO4ZAESYL9fxiT4M2kQVqFAKnqLsTmfXdEVVVRIUGI8pfRAi6Z3CaJC5LYJhxMS2pWDE3kqZs9qXXnuF-0wiMm2A-iQ1cwdZc2nsfhkY0DjJKcOZ0zoifWIEm4uziHbt8NTcnvkeLIlbSDh6VmAJqt7tb4P9Benns2YQdR0PcpTTOJyJeFGe7yE1lcL4Av0QTBLvkc562Gy45j_GhzZGIDVE3uYMEVmkozYhZZcgbNHmLCS-_pkf2vWl5So3_tPKR0_8K0-NRUymICwkDGDqfoEVtmEOw-7IUBO1Ehc3sjx9fJbU_pea-GkzkuYvab8E5sMqgzKKsOW_6McSeMQ4BDWpMzhKFAgYV8s31VYm0HMNtcb-aVpo_ham3EJlsEQNBLcoBDJUhliPwmnbc612tC-YFekk3mcZedbRIIflCaLWJH18ZeJrZg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112008117588887801321\">THE BLOSSOM HAKATA Premier</a>"] },
            { photoReference: "AWCwydilqb_boz1SIKUNVN6Th_k9JxO5a1o_jTFApnyfBxfwIa2ZOnGfEIyjDhl4D33hFs5hrKd7CFRMia4EY66M_kEXtdG9AR5yyoI7C12GAY_NdiKsNtO3WJFUT239n63t-SV6STNttyY92fpE8pCTN-ERwLhW00i2e71GtTbHApRgDIoTOUF6YLAV_8uxdNY6xx93JKc17zV6fnG4ZON1CvnDXEx79uH8GjLZkR8nyTztnB5AToWwUI1RmNX0vYlP69oO-GGgtbb67KvfbG5ir2Egl9ua8S49aJp_unD08uuHBwhcYKzhEB4KxVw1o5oRmvOrJi7WaW32evKjTpS2irUPFGfNSepcFwq6ALo___0aEiAhKv5lorXrttyB35WZfPH5PJhTAiAjc1kyQXAn8CyfVcTLDD9VqYKLlw3ZGoI98gC_moOLHpYeK8INrkOj", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112008117588887801321\">THE BLOSSOM HAKATA Premier</a>"] },
            { photoReference: "AWCwydjnooimFBrkeKTokSPB5OggPasgIS8SwIp2HzlhHlwMgTmIWGh0lu-Wm2Du8TvD2npSXAR9Dr5G4nVH2KgbnyPYlkRocZOECVdDEcYcuVd8vnZwElel3zaWvnvE-LUHKnMeKgaU9xW4R6S0c8X0dmCaLnSxzGKGGHLdtoaujj1ctlrrT6vX8Sqs8spyfN23tbNq8ttwW5U--YFPZDWkxWfWdR_Z8JVwW9_2-krSiVgcf7OvxZUvNg_3Dmyt-ZvOgTI500oMwlhi7xjkvyRda977d9_mtluU7WjN6UJ8JxlABGXbbqr-XrVdvbMXTvFOfBQbpfWkw_FpjlJL3FFzEPw8wasfbrv8Ulx9yQOLTRo9wtny8jLPe4lU5skLiIEhdbV-rIVaRucYKXcwwZg9FopXO63-kkqamCf444KjYtRdJQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112008117588887801321\">THE BLOSSOM HAKATA Premier</a>"] },
            { photoReference: "AWCwydiTpx1r4uMTuqVxbpeev30frCjUcpq89fcuvIAQ3ewX8UbwMd9Vm5m-yYTkfYHpzZvA3zLwR5CVbdRFG069FLa-yK-9OW92bBY3a6UiKjzWKiL9iw3mxJ8drptc09I-GhOJoumQnTglBiifP3Vr-wILWt6Tc-fNQH66G6wmRU9I2ZAWYB62zUYjP8c-b4RPKFy8MLqwwciPDTSB7UAUj4FmcJioV5vVJ712FYsuDIHwnJR4bNH0U14JHLqpH75dFbX91AF5yMrmlHt5SfU0hIwFNeRXr8h5g5UTTdwbaAZMksgDrnVRsGstgGGv_NbTPmfVi9Zs0rHa9MPZz4AHgBTht_EijJN34kPwMili6eviGjotTNXP2QJ-EQeFgfAQoQrqSDSdGivL_hSPvyB0cEStFK7BX5iuo8B4oGq7rA89vqldLQPTcnxrfgNiOz2B", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112008117588887801321\">THE BLOSSOM HAKATA Premier</a>"] },
            { photoReference: "AWCwydgzZ4Vj_hHlOzx15apmmB2YHp9HQIR5OBqPHOWphZQTUKreFk5ah2qFOocuVM0mIOnmTzHY_XK63Pdz-rwdz321vAzn8GCH5V6T2TYiPkWW_eeJ4NYStJE2wwZk6e1emQfRqdSl6JJBn70Ic02Bk0jbPAlsWW4yg5raEQPtlBfh-3QzaojPH-obfQcM0XTd-HFuepg7m0NVDX_DMpu7pr88qlioNjd-6Ay7zac54nnm9Q9ti-kJm7krj19SmvnCk0mYaVOzE_3k3b72aLVZVlM5I5m9Jt-px9CV8t8PlhVBnYv8rVlCCRrZGsVuuAb4DnyBY5Fdq70DFuZ7OvLTgC7nRtNLH1TqL8OsQchT9XhkpXrwbkuiSZgt9qNhVwsdjLvJE57el3loGoUPejhqt_bd8HCYvwddDzAXqj5bFDoSDoCzNFyeXEp6Lx_FRQ", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112008117588887801321\">THE BLOSSOM HAKATA Premier</a>"] }
        ],
        summary: "하카타·기온 사이 도보 동선과 대욕장이 좋은 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["하카타·기온 사이 도보 동선과 대욕장이 좋은 호텔입니다.", "평점 4.5", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-8-12 Hakata Ekimae, Hakata Ward, Fukuoka, 812-0011 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.jrk-hotels.co.jp/Hakata_premier/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12694098749512981652", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%B8%94%EB%9D%BC%EC%8D%B8+%ED%95%98%EC%B9%B4%ED%83%80+%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "니시테츠 호텔 크룸 하카타": {
        photos: ["/images/fukuoka/info/accommodations/nishitetsu-hotel-croom-hakata-fukuoka.jpg"],
        placeId: "ChIJIyaOR8aRQTURYUE-kujhvOI",
        placePhotos: [
            { photoReference: "AWCwydjx2Tn_Vs0-0CjWTQxSPXPvt_-73lZwCsB_G_kp1gK_XZo1K4rIJGaxegRw3BUoz7aZP1tC3aLOlX9I4tvLFzH5jDbMiI9EMM8qpFSQkdTMfxibyG87TqU_8NeBwyz1L3LtIrsTQX9jHPae68SQFD4oY2j0QdF7yUY4a8b-qq-EwWvBAwlMo0IMW89iz0BzRfNZJ6aJazvV6bWTAwcXiGbKF3KDamWlSIA4Y8ByiJzJ6fUSk6wC3aFuMohB-k8MAT4qeAgd8Yu2nPRlNnMu0dAyrZdWrV07WJjGhXV18u28F6iOyPrkojd4wl023i_k8OYcfnXhyznQz77_LkQ_2fOp3zCuVz9WXymCsrtwQWs6B9VeNUD056c8Q0We_B7argFPiuB1kcN4AXunK9s8-gjRXXEOQiBwM4xuJg7WkNy7TInuFFmWg9rvGCWMClYU", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112886328536510893005\">西鉄ホテル クルーム博多 天然温泉博多駅前の湯</a>"] },
            { photoReference: "AWCwydg39sE2WHdOHggu5Fb6JMc-RMITYlVGTvSih-kc3nxj2N_k1ar-SuQCGZGnsa5jWPd0g4cFC7qh-nW3cZRAh5FiOBvYl5mp7RxSBtxoMu2X8JaZnMUud3_MWLXd0BNLk7FdzDbsutbpDlaFypYfMi50QOmVx3audP07ZtNy1Yi-dZRfUqbLSCFLmAA83tXI0HndIMOha5ymGRyF8bI6R1z3oM8lGyXrRPOslfDsA5ckJaTQIrUO4ONBBsWZ_0eaZxFVu4vkVf8TRJQvSpAtJHKxmqyr16cmlSfsjwlVD4OlrxUuRqyAkB3EpWtGzcU3MoHHmR6QuvQ_mkdER4vWoJHLlTEgdBgCzfoQN7rNaBN_Ub3FTWkBXCpYBJqhLbEokXLqoDlvINAoQEI7M0OsvyPAIXZRJqsCwQ45uWnssyKIC1AooizZO-3rfeHYywXx", width: 1781, height: 1336, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112886328536510893005\">西鉄ホテル クルーム博多 天然温泉博多駅前の湯</a>"] },
            { photoReference: "AWCwydgU0gvMKLQ0Oafp7yel52WmwXbb3lUvZEgHCL9WBLDCtpseLd9LFfi3BRzUgj2LoBDh-QgPRdMnXmmkTt79HfLfNsqBq1EfG2-6F9rXB1i6eBNxJM4PuTdsmCGg6299FFRdNwNrDzT7-ZJwfwhZpLE94vSq7cyNVgXXpO9cao1BBLKWkzjzSKND1cscTHBrYOpE_GlbmdlhWg6pWQWjUQQKjX6H4dk6ZZdokRH1KxCA67yHgO4FGMvxdFBda_XKBt6N625OPpuXeQx8XJWC4tU18-8RS3CRGkBcF5fjnzJFWZ5SnbyCoSGuwtrsLR_Z_OEE7roW3gBSSXhVZexw78a-qxMLflIJukGw-uF2_r-78HgwMmh83R7TFUQuaNUhOKcvHiroRR1EigxJbhjW3tnptav1UKWjKZll7LTsKVY", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104952851278417233317\">3 T</a>"] },
            { photoReference: "AWCwydgmoUmcYHzWaJaRGy0arUj57ox0OUSFW7MbwnJvSC9nMA6mKBZezYZLa026kojF85mSBD2pBCkMeycKfgqcWxejYMl-2DWti4zchLbCIYkPPB9uu-srQL3hChR1pM-IgCmfKxQWDCY8FAW7ddLwn5pfcYZJrfUDL3zw1o9lKj9NTe-SeBpAgpE4Ckq0xj4bsk-dcbVCJ589iW6oHISKtPsIvtUyDsk60lTUxgtWTikY-I_4EfwTeKME6KTZtQ9_sQvkoBUmlAV8MCqe1HUoawSduEyxv93Rl-Kr8VecfMV-lvNkpRrpzpkSFwU9q-WRHs3RyM69a7GiOolekEpJ9FWxMUmEGham-2gT9pWpE7kj96GxX98PeD2HPqYu7M7N8XGkuNKHY8mAZBmZyXvCW53c8ZW97KLIrXqtjZJEmmfwHzhNI-oQPXmP8Izzyg", width: 1821, height: 1366, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112886328536510893005\">西鉄ホテル クルーム博多 天然温泉博多駅前の湯</a>"] },
            { photoReference: "AWCwydjVZSJcDz7ZKc0SNi_I1SWkYnRs9wwrLm4G-zvJbo5WN9kkL-yIt9LRLSDuSYMIWJz_lUqDLnNQ7z2mOdsgWotwDfu5JQRjtwDWe0jcsCP9WfxaOZ5gSmxI12IOt-gALetjlvypSq6YXWqdnJKM6Lg35xoamP1RTR35fEX3_yp1fLwdcRiCG49MEuxMszFAHV8q8pAm9bkLIpcgUTTbT4ZBod-JPdR4tFJIdoenHKdPGYtpoKELxJ3UZUsaSrkgyuiKJy0lFyujUbb8dAooOGv18Rv91LYRc2svVzBMb6H75A0C5P3W3Wa5Kvt8jO853qnZK0eWuSgCefvo9pqy9CcUDaWtCG7s-FoPikpoAbltrfKdoxErOOBTiJyE_VXdZnzy_9TD0zpoOzC134XmD67CWCGcb3qIQcssUYPbY5_K9kOgTCZGyjZzOUatRw", width: 2000, height: 1500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112886328536510893005\">西鉄ホテル クルーム博多 天然温泉博多駅前の湯</a>"] }
        ],
        summary: "하카타역 도보권과 대욕장 이용이 편한 실속형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["하카타역 도보권과 대욕장 이용이 편한 실속형 호텔입니다.", "평점 4.5", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "6-30 Gionmachi, Hakata Ward, Fukuoka, 812-0038 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://nnr-h.com/croom/hakatagion/?utm_source=google&utm_medium=google_map&utm_campaign=03", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14919892634397891225", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%88%EC%8B%9C%ED%85%8C%EC%B8%A0+%ED%98%B8%ED%85%94+%ED%81%AC%EB%A3%B8+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "JR 큐슈 호텔 블라썸 하카타 센트럴": {
        photos: ["/images/fukuoka/info/accommodations/jr-kyushu-hotel-blossom-hakata-central-fukuoka.jpg"],
        placeId: "ChIJp64OfMeRQTUR7jjgUNG-Rr4",
        placePhotos: [
            { photoReference: "AWCwydiKK1ulaX1fOEcjJpMb3PebUif5nxNoq40fSsgrbfJ6Bh83oK0bLFLt59BKxkg1zszEV-87yNqfBAhHHNJ8pID-zbgaKx2WAZAFyvHsstTN541XbM9oBpbTD1X38nX4YUie6kGTii7N7pkylRLfFRwjHe-JhAZEasoEVB_ferzj6O3cdOql5cjWYq-v1-4Yi6VbZYsdS7lU-zs_86WDiaD-D6l9WrIMTTJsFUx2Ab2gR5GUEWhehD3vJqOwbrkc4_pdpO3hNNpzkg968icaO8Lsmn0KlwhaX9QBPcHascBKmxekrjwJ75LGt0AU4F0vLGubX4_tQ5Ru9Y_VUIjDZUMKcTE0z9O_qdO6ZwvmzD884qjAaX7E95OPQOVIIelBiYkm1Wl7KNCE0e16pb3JbkfLwae-bJ5bFAfekSXLmFH-bAutTXsdfUF8K2eM1RvF", width: 480, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107703567881828207365\">JR九州ホテル ブラッサム博多中央</a>"] },
            { photoReference: "AWCwydh6pLGnPpAwUye_j27tZ6O3ktwEmfhqFHsIXLa2k8EAmP4uZUQx07LX_oEFHsnZH4N3ELeD8RgeEkN-2p8fKKdv5y5-P1Rnbf0i4lA__4GsMN-Tr3ZnFOYxq-T6fFrY23Z9obz0PyPHSW737FlfQ8LlQTh5PIzIQwM77ARxeCKu-vZgvdEN-G1A3aupgC5u7Qgj-5zGn1JLF02k0QUJTYs19Sso42mdYEtyHwUfuwrx9NCBd3okLXjO48jFNN-C287pHpTIwivn0rwhz2PD7Ls835HjW47YYsWsUW2tXZI6mIwtK4OuWqdmmbciYeF72vIu8_4Ia05wiWtiNK7tt_pbJP0q9crIE7IBuL-teunV0jFZh6ms6JC0Zy99xBAy9AABtm0LnLZyMWYFNphSEdaDOG8UtcATPN7kQpbpsC_ZIcTIYf04o4GF7Q86RusN", width: 720, height: 480, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107703567881828207365\">JR九州ホテル ブラッサム博多中央</a>"] },
            { photoReference: "AWCwydijIaerD5SBHHVXHi2bSOIiVrLQsJyAWhETDIXX7PjfNP9mlxzGKuVhCVhAsALSbQd1VDgYxHjy7hRGYhqgwcjR-Wl-MIL4EMUa2sjVR5JPayYSTzGkyQ20QarymbiBeUY2ivx9KxGYkZo0Y8rK9QvTG0lL31jUEA88gSAgO_7CzxbeS0q7iIx6_iPX2ydnedURsHEzmg9n7rybwU_Mxt8tn8mEd15zTrSOvR7Bl3qKjqfcc9_KCOecLbkf6QqUNZgeG7PnYUPRZho5OkUgrssik3A7_Xdd39T5YWE2WXE4qxuKt4n2qHCJypTrRAMbr7NubC28oS5mAnNMONA5mGZJ3M4WvY80sHjnCxuBggqUodiGYOpr4CrgQsYhJTEpq9R8bij5zU_rcl2qc2GNpLcH2CsJPXgUQlwmt5iLXoSZ7asK", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102468195149136355759\">웨이</a>"] },
            { photoReference: "AWCwydhyUbqsCAmGHsMiu4huXbotZxwf_I2Mit3g8d4v9bJRZuaeufnSthcdPViaD6K1Xku2fHgelMkLU9VSXEOiE-j8n8yygAPuMGCsHGorQ7StBxcCYCGPCHiSTRKk2i3xHCrWYrwxmXgdf7koAqtVkEZahqviKx61Qb1Vu5SnufUV_kGPmVebCSDoNFuOgNzr1-EsmdEIRkW-xQMHVKkWgJvLdS7jsJ7rmW5MDLtmsPhpfyIHgt25akR73_pe6Sr2EVMIRNk-l2k99SlxNqieadPR1TZf9Ym9Rjo4MdZPI-Z-BhOA3BfBRmqpS0zLRxisRC5HXB_uHwi-GHp4WFiA5MrJ-3NovHWKLY67RG_cXVg05A2HU-5FJxnE4D1ZbSkdkvTSZJcF_yCfF4t3DhqKC3XMQixnD0TrIvPyUcR_JxXVWVb8eEbulc-qZePX5chu", width: 720, height: 480, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107703567881828207365\">JR九州ホテル ブラッサム博多中央</a>"] },
            { photoReference: "AWCwydikhaQU7YUfxmEmJqod2G5OR8O71XuKtiflPMj8QkobeWkseWRjMnTHCtbuhvk6BQb3pXpR9HEeT7_kkBTTom1w3uPnzKByhCRnty_nIa8MSKtkttInrgzaq9OQMUrHNiBvv9z_Ht43SVEa6m2Wgt48_1cqRVKlLoWQjMx8qoOt05sToveLYTC58URb4qtoDLby4a98xzEdxqx7T9obFGahVxQH0L22VWSXmEzqSqvNHm08mbXv5BJ2F3YA2CxUJ16O23j8E4GJzh-WC_8Oswe8_QFcEb67PJR_md_iN2cAv7XRHmXKbmsZeVKEafoNSwoVPcJXnh2xuZMPgTU5W8gm-E_UVNCJ_BbtvvPD4yRHeraLVxNwA8qqpZZ7nud-z9j_cA0gbOEgvLsbF_OIkyjy39XDUTd7q5rJol2tGP9DzsoZlLxk-4mvMLV1rA", width: 720, height: 480, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107703567881828207365\">JR九州ホテル ブラッサム博多中央</a>"] }
        ],
        summary: "하카타역 도보권으로 공항·기차 이동이 편한 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["하카타역 도보권으로 공항·기차 이동이 편한 호텔입니다.", "평점 4.4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-2-11 Hakata Ekimae, Hakata Ward, Fukuoka, 812-0011 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.jrk-hotels.co.jp/Hakatachuo/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13710855921790367982", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=JR+%ED%81%90%EC%8A%88+%ED%98%B8%ED%85%94+%EB%B8%94%EB%9D%BC%EC%8D%B8+%ED%95%98%EC%B9%B4%ED%83%80+%EC%84%BC%ED%8A%B8%EB%9F%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오리엔탈 호텔 후쿠오카 하카타 스테이션": {
        photos: ["/images/fukuoka/info/accommodations/oriental-hotel-fukuoka-hakata-station.jpg"],
        placeId: "ChIJJaJ3CsaRQTURxfgCsRvt8sw",
        placePhotos: [
            { photoReference: "AWCwydizoJafs7ueE9RwukLMzfBUkLyTi4WqT_jjnS_pcTVskF12xMERtC8vgqlJS0da8IT2rT9rjLWGAa2i3PC_t7pn7-cj6VbNuRr4VqIIELcicxlWTLjIj0FVpKUutEAfVhCDNsJkX9Z064c3yKAWRK09nPpfYNujquZDMczHEqc9nWOkM_MdSI9l4_gaFIXgRfCqRKtwtgwwYE9vyuOtdU37kEEEq53uxD7fwlLoMF9ToXFLUzSxhdsYSagl3uisewSd9rneOKC1qPyfNGvr0KpVF-b0G5k5WgH9NLDJqmuqF2pFmTVrRPg7IN3pwuQQru9cmK_m9VCHdLgZXrcG5yHnb_tR7Mw9jh1L-T3914edqMyzw32JSM1ebe43qRdMXmBYCYdp_p70BUhgLlhtMpdIGFtlvArAJ8v4XTqN5L_20w", width: 1382, height: 922, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117339095624845243211\">オリエンタルホテル 福岡博多ステーション</a>"] },
            { photoReference: "AWCwydjGfk_hgUPB5jcCUA1UisTyqSAPbULlhs_OVpRHQU8fRCnvsJiTv78NTxdGM4fO6d1ESin2H6pd5xk3o8epUv_sjXbquY_CBPnQc2TQi_MRKSAnnGU-m-qPsVi4MQcoFyh9LiGzlpYUkwwFwK4zUl7917lzx8XCCLVuKr2BtAQML-VWlrEVFhLa9ISouxlYLvGRiJxEni6UT1YL2SSc_RhuRB-gd8Fyul-z7feOcWBsTU8L0-f0E_sJSl0p0-Sf2CvUKaEFasfP5TeKbEKwMeT4LuCQNNdatGtMY5Fpsn5BXKfnHKlOxq2n-F3RLmHSo4qFXscMJYiKlGolQhXiFqUPxoWVongzveVANrkcdMiDZ-O9aRGOuADZqAYurM-XK36iDwz_MyNXCTyc0TNPDYoHu3roIgY6mX74UeqRMI0XUg", width: 1400, height: 740, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117339095624845243211\">オリエンタルホテル 福岡博多ステーション</a>"] },
            { photoReference: "AWCwydgvvGtLCG7R0c2KF4h4pPCOsfzL_m79N7XOV5N3-yjeyGgA-XNR5SiiYCGvpSKAt49qsl4n8Q8gS_8vj0LkkWov9ECDcqjB6eLPD0IrJXjb_RJAI0O8yCmqAa7LeQ55xEjIVFue4xcoFS6mKqw-KmsfWEPVX-a7ljvlKh48tQWWCJv1t3D-A3oVXgP4dGYrKd2mJwmU-M99AQx77Max982V2ASEI7l8y4x_fkyOUegGHZzCZ2n-SDGFnK6xY1LhJWs6hzwlZSH2MYBLW6DAjfiNzYtIQQYRMBkN1Yu-DyLOnUYefalAWVtEAwH3EkkYcskRLSKq5ZR4l1hhvrXn3x5LetLdqelR1gGgLsMACdyOIFwxCHd2LLUQeGSlWgpaFhBDO9WBAgKxpavFrisyVqfUPkZuYFOnwDg2atu74eBR74Rv", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103049731368481480856\">Alexander Y. (Alex68)</a>"] },
            { photoReference: "AWCwydgOev2CQqOBNVReR6rR6WVqKP7lHFJt5EDJCwZMfIG7Y7pknbbEcFPxeT1QC2yKFkxOqihgd9GVQNbEJ9CggJfQyIYjz4kvKspqLyX3dszlYQhPbbUQI5Cqek1zZjn6ddKoHxapXgbYb-L9h04GE8cuzBN_hz6aXt33LqTxeDrmhUExkqfZe3vMX6FCn1tGnT4DDQD28OsOIKqOB6O-qw7FzIPTXq5Iw7YpDhXQH18y45pvF2WRkxPaCl6hbwqr4PUszbtj9RoNG9W4cmHuDLV09lIsGoEitd405_TURYXZ8Nh7miQaWmTWtcUQFUWM_CdAPngYCj-rPnHaNPeYNgF8vxS_Swh6y-wpTannSZdoJl8PBzNL8nDNy611hWVPYW3_SEgwr15_h4ErgU19-5xJ8MR32AzVctajniLNzBCcEVw", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104796269309502296660\">投稿者</a>"] },
            { photoReference: "AWCwydhqMjzcn45DNi74SGzc-FZqQPsFHqLT2PyS_o_aydLPdBJspkqMWGx6lmEny9SIN0ouysOk8hkBfBdKueg1O7kN4mLFAKTKILzqLsKx6Df8bVnRUzmRR6h9IBvu_XatgjhnmvMLV3kv4XCoLsr57LV52aNG_hO8NIZLKtG3dq8WyX751NKl1sCgyQyKZ1wb415hx4CQJ26i-4RzqRapoQGqK98ltTN-TKIqq8TEE3sRhEO6sxcRVIOs_otfioy-bUVoMP7U3dcjAVCZ1cX16AMGo-Fld-RdOSjijIOuGw9WWX1bM_VUyjRSt3TA_CEoSwU-mngBbIoF1pcg-3c-P0BiTZVyLpA_sx4A96iphnJUM9X1RSlx9Zwdz077ySUhro0EhEeQyPqIQr7nEa9uux1hwvyqHXqkNfeZecYqZgc", width: 1529, height: 899, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117339095624845243211\">オリエンタルホテル 福岡博多ステーション</a>"] }
        ],
        summary: "하카타역 치쿠시구치 바로 앞이라 이동이 정말 편리한 위치형 호텔이에요.",
        updatedAt: "2026-07-13",
        highlights: ["하카타역 초역세권의 압도적 접근성", "주변 편의시설 이용이 매우 용이함"],
        tips: ["기차나 버스 이용 계획이 많은 여행객에게 강력 추천합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "4-23 Hakataekichūōgai, Hakata Ward, Fukuoka, 812-0012 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://fukuoka-orientalhotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14768126831290939589", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%A6%AC%EC%97%94%ED%83%88+%ED%98%B8%ED%85%94+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%95%98%EC%B9%B4%ED%83%80+%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미쓰이 가든 호텔 후쿠오카 기온": {
        photos: ["/images/fukuoka/info/accommodations/mitsui-garden-hotel-fukuoka-gion.jpg"],
        placeId: "ChIJCc2YRmeRQTUR2XF_iEfSJac",
        placePhotos: [
            { photoReference: "AWCwydhCI9LlJEF08G5oBjPr358ETKVuCTmjjgNq8X8h_XrPCnwvORB9Qn4mHgb8UEk2DbP0XgZFR3XLXeAxroLB5Y7WSgyAYR6oxe_Y6JD5SfcEcXnHsrEhWl1LWowk4zzxEBklrNeDOVBIbRE1vW3VIfhzlPET3zLa0ZCr744ehRIXr_QSSJF-V39BEobTcC-jyI6C-7Z-OGQfkQD4UqqSbKh-vstK6bWMhEz6FnoR5TxQdTDQF4IqvuK1TKcB9FeputafXyJuJ9avp8-AC4Uwkcz-KSpxLdkLrYFXLWSUsPEz7_floeZNfOlusObDg81aSoH3ER7cXRG1fjEdUD6SqdQCdhHn7TNGGBT7megNALBbJAJQgWHtiM14e4v-ObTN_4geh9arsO-RgC-uEzLvffy_AFHIATbBGPeyktQ3R7DFdw", width: 2624, height: 3500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112097775561012458224\">三井ガーデンホテル福岡祇園</a>"] },
            { photoReference: "AWCwydjzmyGD2ABRUY41qhb7CnHkleXZDmAC2iwG3eQH7STk4LXO5bvCGZLaPAvhcRrFe-I1urP7lwO8K4g_lFMTsBcCrzHDnPiK7Wm8wWbxD6Q9bcvTTgwb8GjUjgarJC8lJB-e4ks38-HXX2Oy1ddMahExpnOhFkvzNmknbwWqraeB5dcI74zJlPvUlgdO4aKnW4_rS2kH0hKd98XeIVkS06B8TAEFA0KDHfjL8wq6p1uWdXqvZWKcKJ8pkhIAwbN2hriiWcVW3qUFMyxieVXnBYjpGkg_Xe64eJ9MMWqTFUn60uqCZRJO3mMl5muF-61LeTBbJbRaAvmHwpATIYPLyy6Ag3w8-eqWZsnXXQa-eGxP95aLabWkSjZQxOMmu1qsy23W5nE_2Zn7of6soA-SzPNwEYkCs6ii5loCvzf0mStV-Tg", width: 2000, height: 1125, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112097775561012458224\">三井ガーデンホテル福岡祇園</a>"] },
            { photoReference: "AWCwydgCNjc_QCS0bZ4v8wNtZLwcqFHzLQNQOECk__dTILsTcchBAVg6InzOwEVtrqMDp3wTzBbYKZoB0zJHsERIDdflbT5YQ9lhl1rLltZePR9T6PjZ1HQfp_xAdhUplOIsdiU-W97Np2mvMv6K8VGESUuZdUPWsVXeNZKv_dyjJrZWY9oKp7SqGPvHCmRA6NXYZUEAjwbLiwMwfATai-m5wOBNOdA3_QfW0hselaCBc4ZPLMCx1_7TJG3S6_LIDCVR-c_ExO7ofQ_Or5wCkaLNA_SdCidEo5aI0jRUR7U-6Z0RLFb7zWb49d6hPfC0pv1shb1uK46-4wlWqaMUmmhg2Ez9Gry_U7dyoKHC0kHiG7TzELrvkxjesYS8WEioNbTMWwmUPY1Y5MCtEvjnelYBpPooK2GPz25T8ocOphgY1zTR8fjH", width: 3500, height: 2624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112097775561012458224\">三井ガーデンホテル福岡祇園</a>"] },
            { photoReference: "AWCwydi7U7qacOczlRtQR1S9FMxtIAN6oBtOlk2dET3OYWaSpExshVziKydgS927ViQNKj_IJrQZcUurzGLbMAPKdi1feBJXcWtAHD9SaOJIgNeZ7KCO_5s2aaiG6Az-HOeeIbQwxR6FqL8_u67xld206bcezjMANTZhxO4pftby4Qhkv1N9jHZnq92f7GqaH3COoVzkP0GbmPNTS57xX5N_TCsAxyDnYTowSDe9cRSQV7GrIp00g7EYZpo5Raf_u6SU5aarC44T-IAFY5g6mCphBXoRBBk-AqqTV-Nx4nzrjwh9ENOmyjrNdAQTyJYgKLoFD_GDHDQJv8OIO2KLWB_RPIG5U1bdY2Sx6QQTWRNKQXtgUve6YP7N5-O6nylqRLF8qol5yZ7b4TgDFiAF-wPsoMVF9iyO9r5iaVx0xOGuO9s", width: 2000, height: 1125, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112097775561012458224\">三井ガーデンホテル福岡祇園</a>"] },
            { photoReference: "AWCwydi75zFb6FhMZ31j58AFJlXXdv-3psgZ90tKlx4w_uiSSqyHFUwDz7--yKKF7XT7s75TJHIL9P0ww1TR2EAi5qCJqHhm4xSRTURRytct2GHL7PvsH2CqCaCe0lxhMReCflRhxoyOZLdwx9xEO4qfhFb5UAzwJT8YYQG-6VuJf6k6sIYwkv13OBIByOik_jY87v_Kh4Q-mdw6JrDNPLuqk6QcdZPWuP7qLatkXSztpxU5ZihlTK2LpunH-Cn0SLoRMaBcMDW6MP-lUgaLWJCXcFnTvgc9uGODIznZjLPGfUN3hu4Eimg7rnjxDVkTG4vZn-qvkgHn91Hgj8MTYNqOK-kSzTrKko5fBTJhTbKxa4_2Yu51ntPCVXSf_Gk-IrniwGPn_1DYWxyEFad5YpZlNnfpkq7T6YvbSPcFeBBdBaJ_rA", width: 3500, height: 2624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112097775561012458224\">三井ガーデンホテル福岡祇園</a>"] }
        ],
        summary: "캐널시티와 가까워 쇼핑하기 좋고, 피로를 풀 수 있는 대욕장이 매력적인 곳이에요.",
        updatedAt: "2026-07-13",
        highlights: ["기온·캐널시티 쇼핑 동선 최적화", "여행의 피로를 녹여주는 깔끔한 대욕장"],
        tips: ["쇼핑과 온천을 동시에 즐기고 싶은 분들께 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "일본 〒812-0011 Fukuoka, Hakata Ward, Hakata Ekimae, 2-chōme−8−１５ 三井ガーデンホテル福岡祇園 １階", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.gardenhotels.co.jp/fukuoka-gion/?utm_source=googlebusinessprofile&utm_medium=google&utm_campaign=maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12044263983146824153", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%93%B0%EC%9D%B4+%EA%B0%80%EB%93%A0+%ED%98%B8%ED%85%94+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%EA%B8%B0%EC%98%A8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미쓰이 가든 호텔 후쿠오카 나카스": {
        photos: ["/images/fukuoka/info/accommodations/mitsui-garden-hotel-fukuoka-nakasu.jpg"],
        placeId: "ChIJZaGRhr6RQTUR8VDMgwvkeV8",
        placePhotos: [
            { photoReference: "AWCwydjF3WAdCT9kPe5Z9DId_R8FghTKzmzrnUOhaWTtuKNoSH8KwnpWYt6R9bYk-7uVu3FB4_sliJOz4glh24P4qDh0TJQoxRS57MPV5t8JvwJRqzoQEfZWuQvgHVz_Q34UoVT-SO0yZfCSbeL9URgo8V4oEMgJB1TCTpIbLuQep5PMMYLBrdjNOOaYd5iexCXqBKuzf8y5nk9tiwlwPTdcVPvHGp6THdiPEzeIFBcKhEQLrOTFe2TO9fjzZ-BWvGqEuS8i0IBGYItCqhrfGhI-uZrzpoOB-nb2ppE2z7Qa_wsIHesYuyEIhcbtv6sDJsW814LTb-Q1BdFqfV9w1GV5BJ3F8FWsjIDJl4l4Jllpiu0Ylyq4Or2nw8KzBugdkhHIKxt2ofRx4bECyJJWKHL2CHqNvBxWDptgJ3Og12iGg3r7yNM", width: 3500, height: 2625, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103112951363591923143\">三井ガーデンホテル福岡中洲</a>"] },
            { photoReference: "AWCwydiGZ4KK55buY3qttVVp_WloH1k2xIGB_EZhaYU71frELko55MWQUioMR4DbLbbU6DQ0YkYXrSz_IgVzhX62XHHuUAnzm41dZLaVd5-Sgbg65djvixUHBN75KD9WGAZLAORgaY7IjRJuBbDOL-kOcFqZFm2qudg2kOY94cGiAPZS5tkdV8mNDX_7xm4VUkz00jITmQ0vKi0VGuUMD4IMhM1G47KT1PraqISjLwVUDI3thczhUcN5VW1piNDhCtTqhRHEfb52K2knHNaVX1EYRoUoVaRI_AiJGj7bbleT5gza0huTUNE5QV2dXmIbHrGuFlqicaaZLJRaAZrH2Nlu4AUTPNwcIMl3QjcdyGfcwzL1p31Sobo1wrv7mOFnqT5srmZNxrAKiPA803Tj1f3vF70oWEqs1b6qShrzS699o5-sOA", width: 3500, height: 2333, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103112951363591923143\">三井ガーデンホテル福岡中洲</a>"] },
            { photoReference: "AWCwydgELpj4Rtet0yhWaK7w_Z856WP8zqLvvlUbOJ7yWCDDua3lRCEwy-GaR847r23F6aBf8XKv0sTAnnbQuN0qDO7Enx8iQ2QqEKjk44xCON-IE0lIAs4sZHDSuijakuF5spnZbSFfNcmLLRkmTOnUAw4zWUIvcU1laf_-x-MvKJgkIEGsRNjWa5dlbaEKKeCuHm0KXMZ3tqt6KZEAIImzJgZ0ebbz2xRKTTd2rkF-oHF0N60WZW4by4CFWH_Yu9Fjb79U3JS3f4tMSvtsiXvKoSVw42tfDBO0zPu4OtE-_HXv1g9UeobKWN9rNeyUwLVHHRwAO7GlE4OOS7TGSqWsC39w180UV9ziJDqmil7te4BIvy8ZM3cGM5XPMQmPvq9NGli8pQ_AhH3DXelGO6tvsPatAPJ7frPz4bbPpnldsxNq-Xuk", width: 3500, height: 2333, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103112951363591923143\">三井ガーデンホテル福岡中洲</a>"] },
            { photoReference: "AWCwydhfXIV7cTrZXBTgDvSurkVtHF3K9q-S_B6JJLYZ1X4uvn_hdvPJgDwUw5VnnBhwg5igY0pEbUN2asPSK3aAlcwYblu4eQ-tv1iVH9yLMhN4ybGm1aD8VlYYIm4zt1oxecdqmY4MX1oj4T90lInJce1rTfSUY1UO5HBJzyNmDq33VShg7qW4xzXtD6XFtrKHP2zaKuwKmH-LRxoqPYgHur1IIGmROfyHDJEQAMknmKX-nXF_TevKthJjFRO3T2qtj2O5fsDnHlvT63Cr7txjwG0ApDHsme35fE3yoBCkwjaQTOxTB9rEDbvZ6xI1zDgWkZ0McKW4PTV1YJV-9wCGybXRkmn9FRi2NMoTiJhIjVUpoo4Yxo5T3c-UphXuR6pkMr7CWJFLkixajkbuEafq5UwQ16-cCqD4sSwKfwwd9mueJHHg", width: 960, height: 540, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103112951363591923143\">三井ガーデンホテル福岡中洲</a>"] },
            { photoReference: "AWCwydiWHqs7Tv7sOZzYpqZJE4CfXDnD9918HcCNhGeaEV2jjJ8quOeEfz9_5YJ0G-OXocj2SHRDoSKv4XOVNh8FRhwC797sKLromJXswQj9G6nDsTZIc_OJS-HFseJH8Izrr-tqBE3F31xsXrsc5KxAGd6BAXr3U-RXyZf0NkFmGw3aMDD5mOCG2Bur59ifrY3gBsYv3ZeHtAWw16m4vxTvD_-Rd9b-SDTb4OBDSUHPtcCDnlF3kzLT3VDvZMZOiYAIoCx9aZ-KR2Zq05-NTMQfsb7-hqe6MUU9aEn-0cCN14U-dFyu0fxqjzlU6X1sDSyE7SI8e0bjRKsPHwaslrAWO-xVhqbndyxrkbZP5LwMTDjsYuEkVIlNM-YVeP7RjDX_wjEukEet1CyayN2cLvAS0esLNAlJ_-p95IIdxsNiVT64fQ", width: 3500, height: 2333, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103112951363591923143\">三井ガーデンホテル福岡中洲</a>"] }
        ],
        summary: "나카스 강변의 정취와 텐진 접근성을 모두 잡은 도심 속 휴식처입니다.",
        updatedAt: "2026-07-13",
        highlights: ["나카스 강변 산책하기 좋은 위치", "텐진 중심가로 이동이 매우 편리함"],
        tips: ["나카스 포장마차 거리나 텐진 맛집 탐방을 즐기기에 딱 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "일본 〒810-0801 Fukuoka, Hakata Ward, Nakasu, 5-chōme−5−１ 三井ガーデンホテル福岡中州 １F", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.gardenhotels.co.jp/fukuoka-nakasu/?utm_source=googlebusinessprofile&utm_medium=google&utm_campaign=maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6879780643892121841", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%93%B0%EC%9D%B4+%EA%B0%80%EB%93%A0+%ED%98%B8%ED%85%94+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%EB%82%98%EC%B9%B4%EC%8A%A4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 레솔 트리니티 하카타": {
        photos: ["/images/fukuoka/info/accommodations/hotel-resol-trinity-hakata-fukuoka.jpg"],
        placeId: "ChIJHzNwgZSRQTURrA4sA7FemCw",
        placePhotos: [
            { photoReference: "AWCwydiybBQQci7_yr5pq72FAZaHx7WVxNnYV-HGSPDx2dfoAuP3NTHboxVagu11qTWdPK4Q1tAMzdtNkRNnMaXTb4yykXtRt_hdOAphx_oQpnLQ0GL4MN6JbdvdYkK8vc0qxSghZi3L53q30QawZ0zlweI8ODznlMx_bEJ8R4adQJALO4aKJ4DsL4AYNz_7i57f9Svf_VkM-yRuyQThYQj23bal6FerBiLyl0MAM7cwD41RmZ6JmYukkm-apyrGAPOPCSlTDGBMla6N0fmI0hOqQjOlthL46_HWSqCV8cajiQ0AgaL93ah--aI8pGCySDACkET2eirI0Z5K6oOzYReLQUiwqjz7zW-fiXGZmcwiD5MmDIszeAwh6kad3bOZcFlQNXN86SuHLHldc1FZhbqnFJquAnvK500t2iBxXvLz2KLhE56iGmUh0L22KXVAyQnx", width: 900, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103389656536463885788\">ホテルリソルトリニティ博多</a>"] },
            { photoReference: "AWCwydg4rM5gexKCJBBSTKoXSi3ftGlHQGDQSMo_UJUTgj2wWQ5wIVumEfiLzZ9iVIdVsyok2vOI79Xlf6Sk2e3fY7CYO_Dnei52y0joGeltSY4Ze2sozPMwOnIBhbaqdVdaK7DSLwuZ-2PR6QvQ2w-f3hY85QKaC-e73tYqabknLD_mlElf4y-petIhI1SLTdAt2Us4yufR9Uih-J8Gyh6RVZq1Mt8i8VDNFUjM1SNVhbQVgmOur3vd4zq3LO3BD_DSGVHe84qwS-OWDd6Pb9F2MC6W46EvSTVj9zpO33a2QtP9JgGhFBRh8XjL087yvfRUBKR9kWmhfrHiCWMIRrrW0FXg1WuR9o8dNxZEjWDFotvTlta0wk2QQDH9v6fSD8_p7EdDwDICwAe2X_Xtrlfs_-ixZB99Oodvcv5KBNTO5Mlkb9eBf-oDNmL7FuvPwxfb", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103389656536463885788\">ホテルリソルトリニティ博多</a>"] },
            { photoReference: "AWCwydi1J2lBxzDFxgY5HblIhSQvzc5lY5Xbd_dberR5Nc8lGGp37UBjfemEmVFujJNfeJH224lfei1GMqhYJP9vqSq8OO21Tox-9kNUSCPgOgpXFtOwnSiRHNihJM11QFofQShDvEks8V0eB2AtDStW-4jb0TjZo_CETjv1s9lBQWJMMnMU9T1-E0s2BwXTJyljJmVg3J8BDXUlD87nx7YNI_EAOU91Mrih6lFeOEYybNc0g0-c0MAlmin_e-z3WLbW5hddq8DnGkPA8NZuxpQ2T-e664D4dSDCUu5bxMPRQ0aZM4H7RLa-qoREwP8Rq3zTFTuZZ2cFuBvtIu4_Tig6k9M-vTcEpSzmyyPny2DXNex1hL2Ktnhfzq1bIoT0Et4lG9ItxsjaVe42IF60AaMIloUzXeAVGc_tibDMLs5o_mUPj7w", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115028707663693072912\">隆司</a>"] },
            { photoReference: "AWCwydh_MjJ3OOig0e5WjbuYbDJGtaAIMyEECI50ey0ydvRs1Yk-bnnHcuz_TPe-nQ-EfCm0wTh_RYCDODO94aTUj5uhqW9K-8v8uiZWdHho1JaeUQVk_nm6wY3O9B3_ul6atDfy7rcKZnEvAo8K7a8oI8HSSkfVgVDPdLqUDPpfttLFxKtHUYgnzb5prNkAcHQj2aQy3Ln6qDHJxmac5YAQc040yoHEa11dOP0rz9JegKOyjQK9HxQLkTXW5ueS3ilaSfycFxbVokUTREIoOaVJwqMPkxp1zQKPob4uFzX027jUuBWZ58-7k6pu4TbhAlikaXYb1bWonHqoD9IxYTILKfPZVvOrAGVYKXSSK4Imza7700C4g48GLUeOL76YKu566SzyYnaTxGKCVIve66p9Qlx2t4MCH4tUY0n8G3Cip1GQPbv2", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103389656536463885788\">ホテルリソルトリニティ博多</a>"] },
            { photoReference: "AWCwydguBpmWSckLV1uv9fBLmsjp-3fVDHPB7UfYYNcC1gHWcBhXK5EMhW1asrZRhlenD5IPm_m1JK-p67xp8D8atquSE8ZXRrF6JAg1akf5Vmkr5Zy7XIDFlsqk0kUkFc8DFdX7ZuKVkuuht9Nr1xCYuAEnpiv9pt5_SkWCnEWoEkk17GSztiHhqrQ4aW-CYBxNgGg8Qkkkq5Elts67Mq09bxWXiAmnD6LQrvHmf6oigOBKprXFp-CjHYUlXhOf2XIBBT06mHwbddtRuSFxwVdLhGTtRyyR_5M_PhF1fJ8YvTsBbYo4k5llSu2gpEPT8ruqvZdZz1b4daFacHM85eDTPfBJg1ZwxINsVKLk1np4m1IBDg5mQHXMY3lxvwLztJb3pq-ZQHT3T54NDEJuh7UhAZY4bQuGT83K-115qsftdMKrg9LC0d7IEFHrXORS0g", width: 4500, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103389656536463885788\">ホテルリソルトリニティ博多</a>"] }
        ],
        summary: "나카스카와바타역 인근 대욕장 있는 도심 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["나카스카와바타역 인근 대욕장 있는 도심 호텔입니다.", "평점 4.1", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "4-chōme-4-10 Nakasu, Hakata Ward, Fukuoka, 810-0801 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.resol-hotel.jp/trinity-hakata/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3213422448484290220", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%A0%88%EC%86%94+%ED%8A%B8%EB%A6%AC%EB%8B%88%ED%8B%B0+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "도큐스테이 후쿠오카 텐진": {
        photos: ["/images/fukuoka/info/accommodations/tokyu-stay-fukuoka-tenjin.jpg"],
        placeId: "ChIJ-xGcCSaRQTUR130d6GUlHdM",
        placePhotos: [
            { photoReference: "AWCwydiiF1NwYXSer4T0vBd0xF1bnW280oxnC452CBYfxoQf9yZ_Xs1-lOMXgIAmpw-Pre9HscPRWQEzAPSgo48qEi7MNaUvfuLs-MaQuqJJa_-6iG5PWusgPWlcWowVnUHm7ZYVjkcW1mZyUr-9IeL7dnHiTTGMBHPNd_ZqNBEwU6XFZ_qTtkqSlnWA6ymfIsg-Y133hlwvso3mBHrVyvYyRWdhEEkTP2cFvploZKPMMW-QeyO2qYmeWqzczNIQUlcc-uwueE0Oxdh3-_V1SMDVgMroPDwIjCHtnnYIrRgBEHiCId9zp4KRrk2TVPMf49o18XVVjkM78fIS3g6lpPvPtaeTNmYMjkuXnsXoKAy7YsCL6fLYyQTIgQujd6pNhVb2BDe69_1VEgLDbrjp9DhGOvRS24oeZONgY6UV_QFcFSjMjhI", width: 720, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101421278082397454328\">東急ステイ福岡天神</a>"] },
            { photoReference: "AWCwydjmx9jvBEExddiCzPKwWr1l_DfAwP0pHn79HLH4gQaW7jB8E4lLAr51EqpL1dgERcadfmysGDxkePy_0WsbIf0f4Lv1ioQ3xJo-rxoFJ7rHHg6DVOlgvjvsYx6U86EJGDDXueRj3Vcbqz79zMHfMoTwT2OzXkJIz-IPmq9F-J3RiVj2nGTy414PAMlSpJan_wBdUTrXZZmO4r_MURHvnth9bYkOZxomHZvruwr68AXvlj1LXvCNbOrYkCk7DFzImXc21YQSQ0bLaEteY7hxef1CJchwUT0do4SgEx3oAmeGOaPmJnvPm9Q4iwVrCpcx82ksbRD3PDT4LeUJelgOjml3s_RSq-bZUAKsoDMx8Tn9_msNtjO1XSvabm02raOMSfvHRqN--EpVWHmTNqVK0BU56S_RGCsKx_Br6kN8SdxEj_UP", width: 720, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101421278082397454328\">東急ステイ福岡天神</a>"] },
            { photoReference: "AWCwydgWPqnpNLr_OL_YneKRj8NHWoT-Nn-kXDlVbufEbZbIIs1ExEtWJQRsHqGqo33-qKyYANCjNiADX4RvDVV55bBCdNEv_8z9jfyFenO1j5Usw42vGKKUlhg9BWBl_6Ktd6M4kYUCt7zWaLufGK8GmS5qNdnJJvDBK08dyNNaGYoZRXd2jUXGime4dda_zrGqaT_G64Af7HsDvaL2BCuLdBykTem5E-BdUQT8Xzex8R-RXTLD-YnH2XweEq5wpZZuUn5hMpDHionl8R3voMyJ0joRLNV4dlEDwZ3Kx23mIeh4U6vZ4U98TnNdPtlqszk4bXodHoLLoMmB1T9KG_C7lk8ZmxuvpSxWXEoJeQxqChzT3CQ8H3ufJ_yFdF4JG-aTRUf1H9iFlO15Zpzxt5KYxxJQJVczmHgW4qLYOng8WlU", width: 2268, height: 1512, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101421278082397454328\">東急ステイ福岡天神</a>"] },
            { photoReference: "AWCwydi8ch8ZlaEYRguO8DYJDUT_a9LS2sRACOod-0oZ4sgk5CATi8DU-ewROD89Of4qg4F6lXT4XC19w_b7ITB6sJP9H_cJpC5nOb4IzZ6YOvLrNX52yyNOBu7x1kPKPSEh1o6QE9RIDg1M_brJpfRrApNNDCVwsa8TrlCjT9OanSo-zkjlLr_XzeNeZZsg-ejhm3T2O3a-qiYOmGKsOnUY4XcaT96Arp5S2PXzK0ynYYvYe3aCb5FIz-ewyF-fJHfNgrVko0eCdmaq25ar1h1LXa9lr3iDbz1Mk3fVWOHglfaB-u2347WVi8q5YorNVqAt4bMmyeRhoMxE7sDFILcKw_SRs_BJ0pELvetGJyXGaVxIOKI3VWLYaEkuc0WHxPNJO4K4buaia7csXUOOT-CZY_FpZzrev-6v34_edI3wg4jekA", width: 1920, height: 2880, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101421278082397454328\">東急ステイ福岡天神</a>"] },
            { photoReference: "AWCwydjqqfQChYH-ciZ083THel2l1wzkccgTxHo69SJy3y7yvWsWRohN7GNr66JEE8zfbORZaGbwK1Zyfor-nfl50vOyAcqIMFYTZ9IEbsSKRe2Av1NYbpsaPNQD55ujbsG3dQBGEBawhJSRR7nl9PVFI4jAt4mrrTSRcxnNIb8P7ojM1Gk-kkKOSuB1ynL2bUPeg5G_u9kakfgRvYVAHpbJ-1JO0MMzF7TGxW_6v3l8MBYYRuVDTb86DE5aAnJaTQlEjw3qwJTlCXo8ZmkndAPFleTzBAD_00UEYba4x3V5zSPuPjYirnKT9CV-LlWTTbORdvXLxZyXx83v6MpsD2PVP1KHVg-Cs3DkGMgcLUQa7m-nJdeL-fqRNEuWs8rarVvpYoM2-E6bE1dEI7LX4XsboJk4Eu2Y6NyTCvNeonQR3iqEsO8", width: 2268, height: 1512, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101421278082397454328\">東急ステイ福岡天神</a>"] }
        ],
        summary: "객실 내 세탁기와 텐진·나카스 접근성이 장점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["객실 내 세탁기와 텐진·나카스 접근성이 장점입니다.", "평점 4.4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-chōme-21-24 Haruyoshi, Chuo Ward, Fukuoka, 810-0003 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.tokyustay.co.jp/hotel/FT/?utm_source=google&utm_medium=gbp&utm_campaign=fukuokatenjin", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15212356235943574999", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%ED%81%90%EC%8A%A4%ED%85%8C%EC%9D%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%85%90%EC%A7%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "솔라리아 니시테츠 호텔 후쿠오카": {
        photos: ["/images/fukuoka/info/accommodations/solaria-nishitetsu-hotel-fukuoka.jpg"],
        placeId: "ChIJWw-PmY-RQTUR4AXrNcv1Q9E",
        placePhotos: [
            { photoReference: "AWCwydjhe218AoGit16M6F55QOGqIlJWtBdIDofC0ALyVYFTSu86lVQCGvX9xB4mLgrZTSa6jSo3uh92ET2Zc9BOFp6wyCPt3_t2PUzQ6RvWlQRghgjy3nQXOVpz1KXoIXjyVpgIeTv7jSp5f-lUITDI8jl3y5eQGpTQTbetv6Hoy0No0X6KF7iWj7DNOkNvDkoaT5cxIBPiddlVvpulWuhOXU4zK6WohVWNP8AQ5Z4jXYWA1KbrywKjhkTrhd-4AglK-9kQu5kNnKlc_aJRmNLIzmhIIabAs-ECjiAiXGeRx_3c89Hr-F3GqufLG-CBbllCcnIlfYgNSFiAFxSL0u2c_kTP0s8doXXkbmn3x89PprwO0Z7I5Xp2bhPDZYYru7T7RTZpraipcRVbCpfSAIPmcMSRZyEdmwozxS0K6-ntcR8RT_s", width: 4800, height: 3194, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106946382495317906413\">ソラリア西鉄ホテル福岡</a>"] },
            { photoReference: "AWCwydgJoFbGvNjlgnhr6G2-CW4GUK_txa6V1ZgNFTFSN5Itpls1rZNAHDdlrZCi2ceO_D8cXGmRJfc1GDFgwh8MVLQzpA01VCDOnaODVmspohXPsXRdPjzYEtKnTIf0HE6QiWWh0uWrpaQUFsRqh7tTHbHZRl7VX_OlbMVahIXgavS-PR7eIbh6TtVgRZnGEHxdsVX6YIZhDAQXXBr_1PlKqTJhqajePEEM9_N7_kKTXKLgcm3TnYL4EKtLt-hsH1KEETVli4uBf_SfI3yVNU1ol4BkG7wr5VdojtzDWCDcw3x9XfsWA4zvIoW1_1r3ls26Ktqr2kgbrVhirlp2oUhx4jSyrHhu2hVCF31TSeagHVz8NdZ-pyMtl9pJb-9RKvmt_XIz_rTrPRDC9LEDZwElMA2jo0SxnS4v_FKunfrJorRLdA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109189548358005465775\">X X</a>"] },
            { photoReference: "AWCwydiR8L4Uhp65HAZqqhPms9KXft5btIWp0Mm9BW9zii6d8nOr8LiNenZunPQWrgH69hydabuylRCJQBU-bMBb_-pcDEfftPXc6s1WsfUWgnlK9M5FFJGLvK1xJGfKjwsuhNwiT7YVy8DtIQ16cleXx1Lmef900JAlkTOqkzaTXkhhBOqM4_AJc3guoGjtpHAPFGvpCzudFi3fzQbSJH-zl1rw0tPpIZwGaX_t7-3ehZbk3b2ArqmlsbEL5xdt9dZhrV6YZzPmXyxLFFZ2ya6-eCYrAuwEn4d8ElMocZXw3fO5d3j7Jk2VVJ3pWTcExq7_wYcZ-Ygac8tC2qk6XkvAP80F6yNmQOt5Eo5wSmmeqmFAvX9rB4ad1gGRACrlZKND5xOQVyVR5hyZC2PcLhIWGESOySzJCHhCSSKwN5txR7YMSw", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106142177755339273582\">puzak1</a>"] },
            { photoReference: "AWCwydh9iC-K65JrDHVDh9Fuk0vIn-wlVQEgcaZy2hH7aaUsNnh6tlMDiqmIVJNDnhDsq2D_SEGDdstV677WeWbxVSQ1vTA5KCj2E-06DuFz0jlFh7cPH583zbZ6YwyDRnUFfU660v1LK72mLxqTd7PPFfpyyOcxmAj3jLUKvtwhnw-wscwaYPyjHOLGPLRR4CAsqtI0gUotKhZpc1GdRsWz_9j_zn2dcSexKpARQg2EKZt6Ou5vD39Wc5JXm5Qt1nLUSKfe693us9DiZvj3gMmGShk4WcW7ujKGW0II42_Zghmkm8ywn9_E491IAsGFOZ4q6s6TUJcwOyM1onfpxd0O3ttFbZVAa0vIA_t8ML_X5GcMr9iU8z9zkz4Cpb6jdgFmJkGG0TBOPA78i_5jwYR6Ken-ltLEZCXJUxcnVnkSFZw8iMhLRKexoNbEU7puww", width: 1200, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106946382495317906413\">ソラリア西鉄ホテル福岡</a>"] },
            { photoReference: "AWCwydiHsqTfVZe5EqfbkxpTBAQ_qZSsB4NALHUem-2bGZafBSkil1GVg8Us5vE_LOc3yxz2DiWn-KhqKbECriz9sT2YtEwyTxvO0GSZkQbMGBCuuYDvxV-dTEGghtuFnbpUlB0pHm8k_HRRwj1fHfiJYsaDMSrhR5XtXabyU3kffP9pzjHsRa1Zeb_9XdOVV-PiB5voHRtPjLZxRA8vgNcruDX36jW5p9Oe6fAwB3WDeaTSY4GxAd43J4W9FqdJ5foBlUWDeuCdvrAhE8MVeydXuIrSdPc1TFZ6kfkGkRMlw8VNMUweXt5OA4NEsWrQt6K2TAVK_xNPvfVOgNJAyV-wWooCFsUCHHE-UKug2E_-3DADJm5IViLKPo6y4LC96lj_OqWCCo-NOVIUHSoXWBsKaYECpDVn_rO9byFe8Ia7J1YeIQ", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107191686135566620081\">아기참새</a>"] }
        ],
        summary: "텐진역·쇼핑몰 연결성이 강점인 위치형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["텐진역·쇼핑몰 연결성이 강점인 위치형 호텔입니다.", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-2-43 Tenjin, Chuo Ward, Fukuoka, 810-0001 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://nnr-h.com/solaria/fukuoka/#utm_source=google&utm_medium=meo&utm_campaign=gbp_fukuoka", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15079166230498313696", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%94%EB%9D%BC%EB%A6%AC%EC%95%84+%EB%8B%88%EC%8B%9C%ED%85%8C%EC%B8%A0+%ED%98%B8%ED%85%94+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "니시테츠 그랜드 호텔": {
        photos: ["/images/fukuoka/info/accommodations/nishitetsu-grand-hotel-fukuoka.jpg"],
        placeId: "ChIJawlcVY-RQTURiHOsh2jWrRc",
        placePhotos: [
            { photoReference: "AWCwydgR5r1ZMltBM2K_dRdcw3if_lhTLYt9MQ_Y0lrg9hr7vF2u_S0c7nEBE8uxE-bZoMEnYPWNjMRRNm5U32nFymx5ZazdCxf2Vz1wupt_f9YFa3mVg8iaUoU4dDXRY-NDk4VbrNFHmA97rspxCCFi0EQ-BEL_mEl15B2FSMEJPOA7JWVvxnRKXvw4jHfzuOtTaATx55Gf72FnOffQnGMPTljTwZA7ceteuOjqydSFVb9pcsc2J6tcYrQDj3QBF-N3gBMLtY3JgoOq1LmcGULKewbn-rrVTx27u-71lvufs4skqSevCXkWZcN9N15ea3SDCiGGe71DXel6XnrWiA9tBUSnBfSpla_c4qPk-KFVb-b1waGLh9YCm-IKF-EeFHlAL1W39TGn2EBsJU3T3e5yeF3Gc2lHopRfB4AH8Bx1a-owET8x", width: 3798, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109696480851324570460\">西鉄グランドホテル Nishitetsu Grand Hotel</a>"] },
            { photoReference: "AWCwydjL65PoOl6QIX6WHK-Lxxmr3-aNo40tCoSWWuyCB25gP3jMq5Ny-Q2y_GM52jHbI3GcFc6Ckhy_9ahT8Cv9_qSaTAt5pjMbRs4hixCyLagIgU8GF5B2pUMJ5oBBNPsqsvWulj1nelRWpL37iUmY4AAbyCKiV6IL8j9VlRNbuqpZFJOsJmNqCA-YhnaQEUWW3iqUqz4frdwzFyfr9u0mOTSpRepCo7RTvBInKextsaUS8Dz8jgloLYGh5wg0oSmJeZUBimx24iQXtPhcUqooUe0jfGe7-v0BjFQyaczQMk_60FOmUYkwbJ8aZMXXkhPlmXpK0Uq1_J-xWa6dVffzBIG8zTrTFLXwN4Ybsz5eG13bwn0sXIraCUqW5VJOVIPt8HhCE7JO6ESM2bYCAbPLVV8KZ-oWgxNQBGNsKGC4lwcqvw", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109696480851324570460\">西鉄グランドホテル Nishitetsu Grand Hotel</a>"] },
            { photoReference: "AWCwydjuvnAwYSleuPb6hy7sAl6yGmi4dLmi_Xk4YyN3a5SJegzwgTJ5Ys1qFeKJ88L1udfv0QUc3lgm24p_ppLJxtfCPPFD0U_zx2G5wG6UQeRFloU9fROigVgi0Wg8LJNIhOz1S6Uv9-9UVU8gPycU4iDst_b9MOfnkT4hEuUrTBHgewOHON5MF3dnG4vkihmruKLJbZGG9qi_U5dNuPBTj2i6-3t7WI_bJf0IY_gTsCqcFuWd5YnrBeMW82_366CNmKH3AK4_eY4s5au31bwNJdH5WpGlSYmhkNeis80m0EAgipu2X6l6qrND4p0U2A39Irc0VY-o0GOfCV4YLL8RkHlwy9SUZAcCRG3XUSMFf2ikS_XG0bjEf-vf1TyHZSFJhziJkywiCXsdIhUXz6MMvKP6qv6k7oXqtgL1ehQt6fsUsw", width: 1575, height: 2100, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115865123637995298420\">ShinFPV</a>"] },
            { photoReference: "AWCwydgE5RckNlcDL5XHotMhUAXCdDvgi99lP6FlL8uW7ECsifLOciA2fIBuCL5N4Vs2_b0ZsUmZ2Hxwk9gNyIYxiQMGPStD0KvGTCp5fPxf3GpbC8_nisAJHzxNqbkDNmhIuNlTcNZF8Y2AaIMhHZGrQl7FoHG6nJw1-BLDvXkaQGz83hWnnRENEnGDhff88WhRX9F5bz5uTtwtHx7HzwF-BQsqX1YOgDT_pysSu2wt-L096FT_CPO00JrZiJ6zHTLuQpy5lxR7W-uKueXTlIHTh_oxyQybDM2DdILVq6TZM4XFjntQfxIJrZcKYgq0F4Da0SKaYNrKOP5ZLNLMDRCFpBPKM0eLCRuV6JhajG6pQ6YpqZgPqHJmDcUMlHaGuxlWR8SiWOIRnZPlII9o3bncVg5Z6RCEtRxpBRHlXd9Zpu36hIDI3rdWJOrxt0scig", width: 800, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109696480851324570460\">西鉄グランドホテル Nishitetsu Grand Hotel</a>"] },
            { photoReference: "AWCwydgLGzeYD2CO9pMrF-QFqa7GMwl6_7dN9hwllKrXv013XiDRuED8CmaH4YQ1T_GLGvFF7Pw1tlp0peaX9TKjs7bm5uvZXbnS9aUgyy1DVWIOWWxTlzQlizTaUYyDX6i9PwvTSNO5vgTm0SlKTnRmYcms0k0sq5U2En7ZkGFNaz_jD6bPlzl0X9x3to1p8HoFI6XDTIQx936_lCoEDnG5BssbMGFeF4IL3y-rdlS932__7bouzfA7JrUebr5WDPwDZcCGaynF66ccoCnEdiLW--O8h2_LhmRhQ7VN6wZhUaMi0d-Dx6e46RbZxXFiwqTpSHUVGffg3u4BbHBPYOUgbUrj2i0_jGuN1bmAJ3QdP3VmiC94nbTh_KEYEO0n6V5R-XxE1gxRyeMEPPKfSpbfUtdpK6704Cb3ofBJVZ-JERxEGCVw", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109696480851324570460\">西鉄グランドホテル Nishitetsu Grand Hotel</a>"] }
        ],
        summary: "텐진 중심부의 클래식 호텔로 쇼핑 동선이 좋습니다.",
        updatedAt: "2026-07-13",
        highlights: ["텐진 중심부의 클래식 호텔로 쇼핑 동선이 좋습니다.", "평점 4.2", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-6-60 Daimyō, Chuo Ward, Fukuoka, 810-0041 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://nnr-h.com/grandhotel/?utm_source=google&utm_medium=google_map&utm_campaign=01", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1706255578284454792", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%88%EC%8B%9C%ED%85%8C%EC%B8%A0+%EA%B7%B8%EB%9E%9C%EB%93%9C+%ED%98%B8%ED%85%94+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 몬토레 라 스루 후쿠오카": {
        photos: ["/images/fukuoka/info/accommodations/hotel-monterey-la-soeur-fukuoka.jpg"],
        placeId: "ChIJMZBRyoiRQTURoKCXNbiVF0E",
        placePhotos: [
            { photoReference: "AWCwydic5yI5_PLBE0LJClwbNCMrTnr6oOiIM_mm4Cu5Y2V0-NMLLi9LdGzRZVKwGUxBJjXQHg-SbxzpeBP3RUgDpaIvBNY4ZHpL_8w6od6uw0KRuYgVEpXYRJ4zEUE8yDB6jl8JlbMkOxGgD8jZHPBPiSwQmBvW2rrdwtb8a0rkE2GcRyzogaCc8NjyghnABz2KN748jjRXWTCDofQiJLj1rKgHpGGsjorPvdsONxqoCfHirAX8zjlGquZilwc3pjhmlFYf3xwiJ6af1ot2Aytv5VaDqHff3Z3uBveuFBDtdayvdqM77BlqCzXawPcovblh_bFXLY3QxCbvARXKDl7OYrujr3OkuzVqv3LWZALEbirT9HEnAgR2Gvwb6GcAaQfjmrcMU-27xGQU0YECewcylhiwCLdO9Tj9-BboctBBSvom49s", width: 1120, height: 1428, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110653977363926220707\">ホテルモントレ ラ・スール福岡</a>"] },
            { photoReference: "AWCwydhrNP36GulQIbFjAEPu4v0lugQFf837eFU2eUr_U0GavAb1Lmke5W3pZQBeDsf3sbfBjHAuV1yKuzGk4ryqrexsBkaS0szBEsaf1hwhfX-UbMiEACC62qYUrZKFOWCsJfQ9ttx7Je24DteR0OzR0YqyavoWRm8nP4g99GpCC0KxRCODXgvF66Ejv1Vc2ALQef-MG0WpF4aW5ndpea5jNLFRwOzrwbTe3r6TgkIRWOOzZJfvTVZy7qh4jRSCUpSX-X7vKG9B2SuYyMHqaRoDvnbXQhunxcnlPeHIOqCUA57uJ-RS1eBPb3vUDQnsfbxO_gs3AqkQAc2-Chh6dCKmF34c2oZE0ra9pcZVAdox_WTV1V3TIaL09qjPdecvoW3X68FPHOyfZipaS-daGSjM_LjUnwClgOOR33BK23GIA_aQuQ", width: 1500, height: 1000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110653977363926220707\">ホテルモントレ ラ・スール福岡</a>"] },
            { photoReference: "AWCwydgS3mR0yjwfmJb1LwWm5_HOu91I9D6bG40p5k4rh1sE2q4RnlGcRXPZfSliAQyIWT6LcKTKRolVM7QITJR0562fvQf-yAwRxnj49uk2rbrxtTLKN1n-8QWPp2jd6FXtwkjxR9oX-hYBOI3hd0g5keu-28Zv01SfIjOsRHtC8VSv_8egSJws3QV7AGokETaS9NDHKyfOvfcpdpS9LR72A6pwcwuA-PfyMOr2mhtGk1Ol6PUa7zqqxtpRsZiH9hQMR-FJ5Bo8eQ9WwXpqEFuJMSzYLEGU1O742ylaMCi1MDDQLZg3OBJdTQKRP5szUSi3IKe3wiKXFShtPn0qfvYdsNSicV6kpGFoIcktm9VvDOp9TVfRJKzHVVGrgTlozLiIa2j6497JkSguXlzJL9AiDBmMWwFSN_e-OmeXTxHRZy4", width: 1440, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106749021321976025650\">砂田ちなつ</a>"] },
            { photoReference: "AWCwydhbMAwuQNeUos0jJnMGdS_jsDf_JGDoTZIqNELBm97tHQTT3W7QcW94-KRwJZsW8D9sB0PPkmazxO07tmj9P6nkGr3UcqyMm2-YqF5ptPzal2k9aq1B9T7r9tCOmWG5c0mdtEVRB0ZO6JIOTVbi2ZUrYFg1zwnKZDYgKEgZx2NuqgHRa0m4y4Fdw9gM02klWR1VCDN74ZhKJRHI8DlLWsksDuMQpucs6ddusFVl0qgS3WD-K4QSzDlm6PLqMsyfjErYmzUukbQXUZoldaZ7Vfxckb1BAZrdWZ4RMhNrHwDhd_88vcenGFivRyx67MlS-TTISKE3COxiKKzvakeI61XxFuF88ChgxtoAOCQ2NpdfHE8wYntvzeUfisYtIeyQP7BZcFlYMXi7cj-LAUz9IA_WFbWL8wha8QP149gE5j1asqVI", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103490862399330843003\">mori neco</a>"] },
            { photoReference: "AWCwydjOCrhwlVUOI1cfwz2GJdVB7I9zdpPrdTPmAgk7RdAc5pkdPpWg3-5iyu7p0vFUJILxY6WxEBFZ57tVe1RwxBFKC496iRRRkzBcP3HGdiEQJGTtyvCli-loIW833Ilijkz7S8le_LIOfKHkBsVSFG3WhvisLDSpxmPajf2VwZBVti1qR9dfgurdhPevsrFJ6R5TnR4ztC5t3ppFEF5iL9KoU0IGYiZtBUnw1GpxzFO_IqejOemL4JktEBv7ulr6j-2yYC6OSW43e0HLRttDkLrVA3glMebz3IjPbQXZx57fhbpyxtU_tjEWxKXgnhP_Dd1aVgM4Hvi4t7byuenBGCcZVXf3UVqqXp4e23umUftvSevsWA_me-nNUk_US9jeIdGY8ezYeLHiBiRHyFzwFZFdwFdswpsU5x336aYMWsNFxKipEkbUt1unVbpXwjAk", width: 2880, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110653977363926220707\">ホテルモントレ ラ・スール福岡</a>"] }
        ],
        summary: "텐진·아카사카 사이 이동이 편한 합리적 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["텐진·아카사카 사이 이동이 편한 합리적 호텔입니다.", "평점 4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-8-27 Daimyō, Chuo Ward, Fukuoka, 810-0041 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.hotelmonterey.co.jp/lasoeur_fukuoka/?utm_source=google&utm_medium=mybusiness&utm_campaign=website_monlsf", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4690382155335311520", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%AA%AC%ED%86%A0%EB%A0%88+%EB%9D%BC+%EC%8A%A4%EB%A3%A8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 라이블리 후쿠오카 하카타": {
        photos: ["/images/fukuoka/info/accommodations/the-lively-fukuoka-hakata.jpg"],
        placeId: "ChIJcR4hWniRQTURFJifxW1ZK9o",
        placePhotos: [
            { photoReference: "AWCwydh8gdNbBN_4X4YLxnInRoKOkdtErzujq3RwhrKWk_xrfDwFdyHu4UDPkJM-79BDk3KruBQrQBq1t8LDiH_q7h4Vrb5e_2kCEypZf1Lu1OIq2vTNRGHW7TzirAhnRHvnqHYcw4fcafuGJjdOjc4h7LK3R8H5RDelyYDP0bZbIB-DvGgo8bjCm8GHg73Gh4-h5iEPFhBVBzf35-bpOTRkhjqtLNsovwyBOA04FCNsOOmVHrUoTWWu80VSJTsLHrewJ3JEpJmNnuOxSsZUtHZlfIejqImC_--s2Dcg1QrsJYlwBX6sQzjZhHmZqKbHt0olYlTzVZuNAoPcy9DDLbbCdkhVXDyurJsvR_yW_nb6r8NWzYsxeiZdns3MHPBG5UndBb1qJ1BxzZpv345WhIfVqORm3OlkG2usHzCrc2W9aFtPxh2a", width: 1384, height: 1038, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102190764413171196913\">THE LIVELY 福岡博多（ザ・ライブリー福岡博多）</a>"] },
            { photoReference: "AWCwydir12bsti6Cr_isRTRiNXhPiGNwzzVyOXYbSbwE-J5_agDSxvW7y8Gq8WKVQFdk1_S51oe0_Bljocl8fQGkikg12XT9km-BUyGL_CMSvpodEka-HuQU3xSsLNDMgFSr0L55nh-nY9AYNTtznSt0c6FVLA2r5LeI0ARm1Iw48IgTBlB3AL6LLm-bXYbO0A45eVOxIXRDt1E4HP1nEQvBUjsXIrwN3BEUL_sqk2PviAQqHQDOuD3KAqA-WvLvH3h1BgvWhLWWmY1LMSbw38feFvO9u7tqw-JkE-OggGPiGZFtLDU4bwhMoJpUUswo-EpoQLqHgWV6z_JoAa7knRf_WpCE5hJ9-JlRmLqIPNqOJ-A_KfWV8YSQOu4aARtRUqpoU7NH5fo0kCEjQFGquCW-anLlg-aupLXxuNiX7UFRNOhBwh8", width: 1382, height: 922, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102190764413171196913\">THE LIVELY 福岡博多（ザ・ライブリー福岡博多）</a>"] },
            { photoReference: "AWCwydi8h4cdyCyHPuU0j8CNRXGaOUqYDv7I-OGdaclKyr2cKHbOXG0__iH5f943TAPdL4Svij7OF2wvCtG-154bOUgut8IbNBda6Z2Np4d4jmGTQ05VJwt_HxbPHU0azyn-eBTR3oukjIrmm-rQWdNCunUaCVJSw-eFA93wPXRybOCjH6obyv4cw6bQ3xh1-NZFi1Fx0UPuNXes0DhwZbzk0yHC3prLa4x_hBaWkoMS_XrJPIu_DZJ8xnyBgqoyJHEKulDE--sEMtC5jZHpO7opvHzcX87MXzxnzOMEOMNssDVG8VqADExuClVcTAKe3l0xQb67r0AkJCR7L6FtF1qqEvwGgejK68z7krzJepX5CBdjujkOVA18aLJl4sXYVsiaU-qOyeh9snegXiVuPbA9W0eoMqd-A7e3G5LuuhLdKeZZnAJ-", width: 4032, height: 1816, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109255341249556963031\">ちゅーしー</a>"] },
            { photoReference: "AWCwydgw56-C0Fg7qBLKxQZJOcKzOib2UkJKkYaqCcHMRXRdgu14SJpjn0BtT0ZL39FnKLEtBXP23ykjHD5syI0ZMhHcp-mJbXWAE_EQozJ4jKA6jP87_cXtL02T5HFHCSRaF3ykJdeIHYHs7c0aUNuBfhzUTZQ6323RqFgyzz0VZ_hJoi-msCKd1CiR-PfbAucGT5taYTblDVOz2xRzzInks8kaRMpgSXiLiffHqesRqp8nVLFI6Jv9EO6gyri1IHZ_Z7DLQgbuiM-Gh5CTXobVC6mRYvQt6sXvxEnmzUZ7AkSkzNHsyNOv5NCEqTLHZMhOkgkiPOdbTr1iOMiASGkltNCgsBZ51ricDZe90yDn-3zunsMwFVw7IqCzxBEzRGL3mJws-YnYxi-cmaQzf57TJ-a4qtbfTiIlp9_gO3bIIQDqAXnP", width: 2038, height: 1322, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102190764413171196913\">THE LIVELY 福岡博多（ザ・ライブリー福岡博多）</a>"] },
            { photoReference: "AWCwydilK-FN0vUXZj7QJU8-DMaxJjLe155bjo_8sQGuLboL5ptoYrh_DMapifQML9iNuHShQeCmnVpMPHm808NE-FSLCciIqqWChqPZFRcjwhjeGuYXlw2Msa4armrMPc33SDiLPDbf91QMEi_5yw0tYXjyB6XviuD6mPWWXX5okA8NCR7_kFZ_1vMi-K0NbYLEWzC12XIM-grFom12OG2VtxGni_URLf3_mBTIiLnNduyI3vLYY4FdkgTA7KkJp82-C1ZQXokAc3ECi7r8C75gdMkwu0HD_QvjF1pIFeBQ4sidBytFARkksUu1LqxvvVS6DYdczCuSmYM-La2qO8hGyDI5W9GmGXjo62wmbI9jMCOpGto2TFvpQ4dwQb3S_PId-03zHA-IIKVHu_9h1dzcUA3RqjGwCSZeO0vbK9SyRn-nXp5p", width: 1382, height: 922, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102190764413171196913\">THE LIVELY 福岡博多（ザ・ライブリー福岡博多）</a>"] }
        ],
        summary: "나카스 인근 감각적인 라이프스타일 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["나카스 인근 감각적인 라이프스타일 호텔입니다.", "평점 3.7", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "5-chōme-2-18 Nakasu, Hakata Ward, Fukuoka, 810-0801 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.livelyhotels.com/thelivelyfukuoka/?utm_source=google&utm_medium=gmb&utm_campaign=gmb", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15720757252268726292", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%9D%BC%EC%9D%B4%EB%B8%94%EB%A6%AC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라이프 텐진 후쿠오카": {
        photos: ["/images/fukuoka/info/accommodations/lyf-tenjin-fukuoka.jpg"],
        placeId: "ChIJV1EM9l2RQTURS-feTbILpI4",
        placePhotos: [
            { photoReference: "AWCwydhHd80Nrs97KgnqR9JaWKxus0EzeJEMuvl3lgEECf4ptMb7YRaLuhVFmKuLHGb7OSIjor0sfShQsLBXIHKG2C2Y-vHPqK6tih5l15rTAsS2EQ-Z5bFLzM77x0oJl9vwI_I-TOcbYuM53_1szP5Vo2Y3fSbv0EJgxDsLEQzgwk0sYaqjOk8daTOY5aaxnj4Hh5cNz-GKBjQs4MbDuX9RMiNDgZuoZlbuYKENF_sSij5JVvUi6zzHg65YRMbStCACm4A6PYxNTu1YP47TmqnE6fqrka5ygmIEvciGScDrDZjhRZZb32qlZttaMfG2m9zFg8WA3Bc7oCITa_lnlwu2C5PLxzVJSDMgKX25w7CqmyOWrfub1o2NsvxPzvmkfzLVpihI8_TsccAgnmI0lnpt2Bs2qJxjuDJ_1mys66RqpZrbJRzcsDOCV9Gz6T0JKk2A", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117224292912752981533\">lyf Tenjin Fukuoka</a>"] },
            { photoReference: "AWCwydgLCWaU7AY5SHonZhOQis6faXM84TFMT2h_kSa06XmXEUHjIE82f7SBodkEC6VFhUZjggi91CW7xuzwUCpO5AwOBw3v2WjFOEaEDpqeynLN8Xeh57BY9Qj7woGGOBO24DwxSePUmLjCjhnNctpQScsP9KpPy9yUqm4KC8vjt3-ameps9o0QR8FN_3uSGKaeAcbzXmyRdAColks6DRJdEk8H3-stE9guV3f5LdP3UT293kj8ohn8RDyYtrvoyiH3NKACE4dxMKkdAYCFY-frhauoasyHzn8w74LIpJy9DvLLnqvS45Yht4Whuq3LUNtBCSZlQeJLvVxtldhCsUTrzgQ_hrIFghv8ZlzT7SVi8sdraEku9l8c0ax_jk3G0QVyc-et62uA4sXXwM81iSpdUnqdLzgSYJZMK_5wEfLy4Bq7DQXYrQ8MvRz0AC96OViY", width: 3936, height: 2624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117224292912752981533\">lyf Tenjin Fukuoka</a>"] },
            { photoReference: "AWCwydiola9k6ItzdMcxMztOe7GByYP7uIUuKOSoN06aNOnyffx8-4Coh3pTi0wAUL_CyUnTEgw79uiWwbLb7pLhKifYq2jvznZSsMjGrFfswKc6Qs-FxX-k98t0MT1ktLns3I05mu4JCyPBUOYVMnTd73-Cnw2V6dnJjOJCZuirBPxs7mWRn7LOZtTvujKijxYH8xJCx7WK3o8OoFiW10aKGrBL1zYcw9s2moXQQBDZ3AEzd7wMdGmhiS5CR6FMp5glPyxD85dlMgAOXFRCTF9xyJ6FyigajRFC8bQRmgkdNcEcfV3wGYiZIBUgXGYiDQUTgHXgVmEzzTqxv5VXooMAhIBvYacEQWTGTmzMqqmn9147s5nd3iOGniJXj8Q-mG_af3kMjTEwexjLf3cQRx7-ROHC_CdvbAtIHO_6ox1M_U1oIOu8", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108144791110587343595\">長島アイスティー</a>"] },
            { photoReference: "AWCwydjG51cYpr69yTJ9iugVUpqMRVYMEY-lzehaVpCrWZxMnT8ltMY0xRMGjBhsSL9Ib9XBx7yu2fVm7h1QQ8QTwrzfdyXPM7abCoGYysCgNq8ES2j4Jb1Gucw7eFH8eRxiX0P6Ly29GvYx7neB8jdL1oNJN0cYzyMy1ACqJ8MsYzkQQU71lOkf6hBDGj55qGLCgD0pV8pyyOVecSIq0tdrr7fYhpIu-X3fRK__qp3AzpQciAChxf-Rpu-mfJ1wK6F4IBd9tkmMUfOW2SbqsNJX_gEC3pvQTe0_PnjBZ0b1LxEZ9h_SdtUY99ROUmwYnhDfVLckelQL-p01XE10Fea1fgeXZ_fvk_3rC0Cs4RuAtWhC8xeb9pu8qhg7GfItXa3LDcO6zW-gvntpbVe9Rfd24HX4UTL08BAre3jOo64UFjrXBZcCtuuzUsNQL1YwrQ", width: 3936, height: 2624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117224292912752981533\">lyf Tenjin Fukuoka</a>"] },
            { photoReference: "AWCwydimnxAwpCp00gpDWYoDKVtJZIJSu0BFJZQf9AZVKMi7QHFABqUfEKpEg3iyuw-1p14tjgkSJw3pmaSU227FXZfgWXSwIMw_6vU0zr2YqsA0mV9Q1-NkVP78ldYOjxZaIc6m0Q57Fq7ILmTaP526C7rcfFCZ4pzwEJVAI1mW8VzsHroxjXXxwMXkQYJuLVmhA7bu-LwpPvEFy9-VmuDvyAd04IjWLN4uIzC15hZHd4pbUbTrTaf4iHpwhSXiRXw1-ZWseK3R7ZhcZ8qWPn_ka9DJwoZjQSr0Awbkh0nXzAKd5LRtGx4DI8p6RSPvaec0Un95erDyXRL8YjY1PLVLMOJ5mlqQBzGy_OULsBsbqbCxDC6cPmAbfnR5ZtU3NAgcurgALnmbPq2t8LY8tcpY6LxjnMaHGhBt2ZL4KsNbClEkz_W-GYVtJI-iPo7QFxpi", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117224292912752981533\">lyf Tenjin Fukuoka</a>"] }
        ],
        summary: "젊고 캐주얼한 분위기의 텐진권 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["젊고 캐주얼한 분위기의 텐진권 호텔입니다.", "평점 4.1", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "일본 〒810-0021 Fukuoka, Chuo Ward, Imaizumi, 1-chōme−2−１３ 3F", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10278353110004852555", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%9D%B4%ED%94%84+%ED%85%90%EC%A7%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "힐튼 후쿠오카 씨호크": {
        photos: ["/images/fukuoka/info/accommodations/hilton-fukuoka-sea-hawk.jpg"],
        placeId: "ChIJNbSQrVKSQTURMqlkgfyJtjs",
        placePhotos: [
            { photoReference: "AWCwydgGD2Nn1CaFhGKIkbEgi4wH9gFhTz2bx1HIYJnOEVyCCQqdo9JipSEQZAS7h14lMzXe_Br4ieWxqWpXAbSCjXndk3AZ5y4wx-2lA5EH2UyMCnIgNkFpH9RSc4xwPb8CvmBlpC71X2k7LAbp006_OW90h7kmnIGcUmg-6jaZDoj7kAGdJt3BlpKILJHwRD5wbAfPP_REFyvCJeeQOiACmhVdMbHDRd1kCZpH6yCsRK3wvyBq5Cb5zAHhofx9-blq906CwvQ9hXqLUOIxh1XT5cjrqp2lp5RQRI7GAP8P4LSYT5wPLWBP7J9wp8OWk173MVfWiY45HnbofFuZVeTO8kC00VhE2kJofhiUfC8zFMo9xEGAsTZCFXVclIsIAdum3zgw-S5lfYb_mDIhcPTr1DhNILn4Zd7yFWeAvvKkQZkLawgjujz0TgYRJiafXw", width: 3000, height: 1999, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101814355802345378672\">ヒルトン福岡シーホーク</a>"] },
            { photoReference: "AWCwydhinh83OehaNS8py6VaQzm5BRRRgbbHigsCqMNFu0mijOehSQ1ZHf3Uc8IYiinUsv9TBhLThkOKf5Er-YopeH150VEmXGeoEtID3ey4vAm09GmSF68_DYgi-X5Yx2NBR_X_X30rxKD1GTK8FViTQ_MhJeIId4KNVcsCeSOJcyBtiNRNJqb2utAdwxiatMKyyUbxsaMWd_pnsfeudVK2iOGH2CJlMXmozDqZtWUwU1MVQWgpo3F8sKM3-8Iy1Rqqm-vY1lR3MTWFQ_K7WIupK1OCuxOM5ZtV_vHQCJ1IMgrWBrzv5u-jfU8661fK6dFm9oJP_m7hiiAH8hS4uGg9PPVPSJzgJ7RunNn9vuHLhLxiS92I_SHAZvqBfQsXc6y8oLSFwYuMFBsph1BjOj-OLAKZMTlMFYGkR3nkkA1ZMRtgowg", width: 2000, height: 1334, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101814355802345378672\">ヒルトン福岡シーホーク</a>"] },
            { photoReference: "AWCwydhx0Adr07LqxOfJap07N6o2AOtJpXdSn7Yv--npZ4k89Ikq-PnsmpNo0yn1lrT056yTv4TRUYmGcf3x4MPEmOmo4DNlbPUBIfOsiTJVOGH_0-u78hCuniNAedq_QmNWZSAK3qF05aKJq-SLkOqX8py3kJFOoiklDvEkWrYTYEqG2oFNMJ-XIV2SKh3MX-ssk0V03yItP7YJGLiWBTwpauREtl8cES51C8HnzYMI4asT-rQpG7Ly3cwlzu9KevT3Lv9dzxUuIndS_ZU2wcwetMjlZk5srukAkhtXAlbXMT3XorMrc4u2-R-tvKdVWsecwJbRP5JVzMveBJoVpXuPCSsq8l6TsGopSCdY8qcYyaEi6Fi1NX86WsO9Td99aTKllnBdorXF0aqhOSZlaEpRW4htNsMRWYM-BxDZ0uN5rS59Ug", width: 2500, height: 1668, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101814355802345378672\">ヒルトン福岡シーホーク</a>"] },
            { photoReference: "AWCwydgtC1f9Y7hSjFpzNBtCSP6lMRN2q44tBAUMAu0qQ_AL4A_je0gQ_lY5-RDMSWCfxDKO1JGsbxZQdtPq6Crpnu3L_E1QD9wSEeuEtseAQFGsOxcJ-ZbKaqwAwu1SD9vzhyUtzpRyK67DCXSljFxaBQuWgE4JycQD9hUSLmz3gfusd7FjsSNlDtL6Y9cu241_5bOSpV0jICLyNjQwSsSZU9dA9v_6Bxct4NdToYmF-ao_7Nk3inTzYBM0FZV-HxctMbRqxXffAvqGn5eS-ObvHEr35rou4PA1y5Sov5VDeKrowwf5DH7j2s9_71YYp_FOAHa-IRx8bxHDxDVOq6M8VbxrBCDbT-U0GFeA9f-TIQZUSnvbykL76AQ5mCC4XC9chvElgYLQ0xjYlIvR2-WLBgUU3dPU8EX3Je6E72KAbghNaIe7", width: 2000, height: 1334, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101814355802345378672\">ヒルトン福岡シーホーク</a>"] },
            { photoReference: "AWCwydi7fBlL732e0Jlo44uPnWBAQpBS8pDbj-PLCt3CwcUIho8_pl6UNx3WfiLL3Ylbrxcl0sYpBg9oHVu-y-Q9n4mdkyZLXaxJO_tuDvXQxk7VkcU96UUnmNs-XrocBcd-mwe3sOfKStw074bdY4UI3bX0SWGwxWQaZIUUuVkaIEdHfXcK7CHHpnWutiFNnj8vD_VylaOO1A9cyvNG8bZCq_HSMqQwOcDR4Lp3HvILxOQayF_fhMi9d7YucvfDtFptPvHA5O_xZdOeZ39K4BorREGZNF7Ac8g34yDvd9wYEHVaGqjxiCK8b5CfUMD82bUWSi1x3KLJstHp4VuPEkMPbOpLygUG09qGeUzw7wrUkl2IeTVnRyjSuwy1PBSm7XvaVgZO9HVGLpyzAzJZjpNSXsasDttgjnJUcD-JGEyRJ5WXVhYN", width: 2000, height: 1333, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101814355802345378672\">ヒルトン福岡シーホーク</a>"] }
        ],
        summary: "모모치 해변·페이페이돔 동선에 좋은 대형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["모모치 해변·페이페이돔 동선에 좋은 대형 호텔입니다.", "평점 4.2", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-2-3 Jigyōhama, Chuo Ward, Fukuoka, 810-8650 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4302778211594709298", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9E%90%ED%8A%BC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%EC%94%A8%ED%98%B8%ED%81%AC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 레지덴셜 스위트 후쿠오카": {
        photos: ["/images/fukuoka/info/accommodations/the-residential-suites-fukuoka.jpg"],
        placeId: "ChIJub0zxq6TQTURoPqEkRt7xgU",
        placePhotos: [
            { photoReference: "AWCwydhaxDDLhQkUqtwC3xh3DC2KBSuwbY6HwnA4jaNbQ-i6sYRfgcKa8zn-q6QoA_FxLPMVtMWUNPb01Mb28QcVVvzvP199u_yuoSMyXRRS8T-wCT5ipSLesZlKNYaBc0qEq6HQW-KoWe8B9mNwvm3ir9caOTPpNHk6-TiJPGhPCMZ1mlUkh9kwAD8gElMc22kd6Pil-qJAFGvkFP9WBpy5O74Jp1NY8cQym-RGlPgFP32FVPU8s_M2fdVBr967f3sqCw4mL8iEtYVtQrqfKp0khpcc15wMPEXN5CsRjIuXATt1sPfiTTyne7cnjF9FKI9R692Kva7p4C3ccCGFjylak_UjAU-IJon_5rEQXoAGk8TutwLpsqQWTt10VQFdYd07hPs6Zn79askfiaNJQ8eyP30k57FvCkmNai72fgEYoPtMWbV6", width: 1200, height: 800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103401340754222352288\">ザ・レジデンシャルスイート・福岡</a>"] },
            { photoReference: "AWCwydhmv5lj8txB8mCD6gjWBWjtd45b7_mqbO09PORnt60Cfef9S8yHJyuX4oB4KauNmuL4rhGI_bR2Cabbn1t2g9hkuqWJlElW0mcgGD5CNPDOgmdiLut12L9V5DIyESQVHMZZW8aVnWoAYK_pc7q45YHuwLCTyw_8U2aaAcwaXCtC0-gEmv1Z6jVLn5RpDc3L5NRBFJVNZNU95_Upn7qhChEz0y8hKdtH8WXz12tdGqBkzDuz7coFpl7yqB-jHhejfrbBSwrd-1M1VWQpO235MEvx9UCm0rZXok78wKUwDVPvYXpcaMeEmBPbQ1pGyLMfjdA5U1zhktU5RRgrEUWzyoYM-lQEfdfpO9ejocahZrqXpaUXEAwfdFwsLC6M4dvwm5c5-4yxCNDB37zZOFVThswa1Z4AHRiI9koU7F5R_Lh23Q", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103401340754222352288\">ザ・レジデンシャルスイート・福岡</a>"] },
            { photoReference: "AWCwydgeAkpe_Lsye8iAumzDWwB1oiVQIFx21Rh0bIHh7tZt0y1JiG1D3UUznqpv5Gw01PhEGUldXVLgo-GhsU4nXpeAqnN0llW7Gtq59-5_gJXEiJhR6jFg_7t9qqPcuWqWroZwsJr8WiFkW2eDbZz1LtaD_NPGX5pG2v4hhjqRCfLyRzSV6r50o2DjzjN0XsIXoI7CdzGt0_EFMflT-o9cxhTGtHGupGT8R7gjiyLrFCDxq5kV84qF9HryYgenbi5SCkxykF7zCqsXl0wlI6xr1aJA11uO8K6plPBJxPqkqY8CJVlFdIPuZ0I513R9UFmKpHXiUa2ZeL_n_rPO3CDAVfCQVnMoZKCOxjUJKLFAQ8u6I5-fit1X-xThKPJFhDV9lTl9PHvY70pwuPkdzQtnXZxYzdeySKADOMGHNot93A_9zw", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114247351537276424863\">Electron Microscopy</a>"] },
            { photoReference: "AWCwydhRtZ2Ck6kdty6jVo8hyBYzILhMm-Ij6VqSenuXNCWZQfVUwm03Cc0FfvETV5K4724BPewpp6ccstIzr_XyABRH1TEhmOkaU-2JOfpzSRnfBv7Ck7laxIla3II-T6_x1RIt4VLg9KYXpi0B4I9BSZji4wx8W9psdvSzvRTG41A9JbdDDqNmPfQVRSEZjesitg_NyBBQ1V5sbjNkv__H3qrA17l_qCfRO602XKBtntCOv_s1iOk3_xNB-4AcS6vyacRQkclapFLiSEGQ1E5u68EoA5-GIolZunWzopSNXRgM6_NydzvELgOseMYqf04meiLYXGF2r3y_9Hbqij6wxriKc7ReLnmoAwKnaWNDifApaB38zLTuZofH5cwHIsJKOehoWMAMxArc65gjWp-xDtMsH0wibEqmKuHo3Yb10Tvntnsk", width: 1200, height: 800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103401340754222352288\">ザ・レジデンシャルスイート・福岡</a>"] },
            { photoReference: "AWCwydhy2pAEcTcc6tiIeQDlnuti-KckPqil9n8-G7MQOJ4DT0TUp6_aeZYKHhk-MQwjiwSh5tb3kFQ1h9Ui0gWFW4BnenhG77R8bUB-7bBxbixeuvaIdXuirDuKHDvAKtrnlA0OBXTqQ2KxZHPvFPkVzHDM32shk3N_R8A7nOXHLbnq7P9IX3mjfks9yOO-XLTKnMhT3UFNNOJOFcXM_BrdD2JJuWBr7rStxm7xY1ugYuBtshNhBig5PwF4lLh6dP2910M8FRuvuhnBRX1O99dBLcxj8hWn1-ZiH3pNeu2XsVJ0FUX4OsEKb8u66g_p0iGJ2sNXH_y7BLrCWVfRMRBrRb6ixF58K4zNZLE2PtoeYKPKEdC_eYyABMCCTOYINw8iFdFFRTmjLI7KIFw3I2WGtIyHB8JRFxX6ETW2X0U", width: 1800, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103401340754222352288\">ザ・レジデンシャルスイート・福岡</a>"] }
        ],
        summary: "모모치권 가족·장기 숙박에 적합한 넓은 객실 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["모모치권 가족·장기 숙박에 적합한 넓은 객실 호텔입니다.", "평점 4.2", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "일본 〒814-0001 Fukuoka, Sawara Ward, Momochihama, 1-chōme−3 3番70号", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.trs-fukuoka.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=416155373914094240", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%A0%88%EC%A7%80%EB%8D%B4%EC%85%9C+%EC%8A%A4%EC%9C%84%ED%8A%B8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 오쿠라 후쿠오카": {
        photos: ["/images/fukuoka/info/accommodations/hotel-okura-fukuoka.jpg"],
        placeId: "ChIJVZgzsuyRQTURur7zzn1dFOI",
        placePhotos: [
            { photoReference: "AWCwydj9_02QaiSjDWRcBYoybnkWkiC1zKm6UncuzYtQXdIaKtERbl9ZWVgrW8v4OtT5Jj9ysU3AyUTR2z_t2NmddjyJS6ms44OmNgXlqg21EJ1tjyR1VrLbAswdI4uEOSNEnpZlOmAdqovMuJhyFrx-2G8i4wynKHawdnijILiMXeSdPZFM3dTU7ser0MmFnmpAw5A6R0litcP0ZcGVpiCWnPm9KgUK6cbQujpuwqn4MziLdis4BbdMiuxyGi87DjYYib3YiHJTY-va8chd5gdjUHuICXk9D3tUWfawK8e8Yr9j6IeCPM73Z5TfVylpZ-mVR35yp7grXoSWqVKF-zPXBHdGarjj-gEWJ_wVuKVGEqx1cqF86NGj2nSJQtdjJwmOW8UdqpNHnFlaCeBF1o1D59Q65H1tu-X6B40Spe0036U", width: 800, height: 562, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117311422126741379819\">ホテルオークラ福岡</a>"] },
            { photoReference: "AWCwydj1yFtErQzEiwjr0ayFqc3sGikrV6kNonULE3iPj92NukaxwljMZa-d8zVZi1rX5w4X7cRRRRtKKOXz9IrWsRuLhE4eTLsr2reQoAsv2yX4oE_KIfJAW3g3dxIyUXPt0Z03QCpGJ4KK1NYvzbU_Z-8iVTCb5D05RDbSSooV42_LjPQmp_2PoTc0c4AfttWxL20qX24m-M5v-UhPJbB2fbcxqS43mojfxH2nx1XL70nN7nYBJoTwxb7JKUrlb_E8oZsUmsdCuE234rW_Of4UeRKtBeq2VI-wqSW0tt2JCGrt2hfhdC4-lncMYjC-3FQCokfzktQ53Itp5gB_G8oFL1ZKT1rDkWw_KZDMPHk-4qf4tgawk2nDrplhWqqSAcf_w97d9ZpZW4g278V1LSLuUOTBDdcY7Yspbie4OjUv87p51JWi", width: 3857, height: 2893, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113861923464679544218\">CP</a>"] },
            { photoReference: "AWCwydixc7yXzsZiDN6PDriNESd66JY0co9njid0oO-3Wx7eMOkZwp3cOHv2zRKKIFLTY1sOMIqYeBKXt93uQbYKyuSj5FfLV_XlKGYniWOKojTwltsrRRdUnEQeWYVyV2jwJM8OQO9rASSxmPFLMoM0Ftof4zOhCq7TdnwmAb2f05ykfP2F1e47MEhFov1Yf2B14GdVdgCBs0gbsTo54pEbt8D3G2cO7Wy8tfq-ToYr8ef3F1yCVhWD-XXvtsYH6Brlo89q3FMQS81tdkC0_TxNFrx94qvHTO6jSMReBcRFk0ORdalSsV6vwW6sqF_FQ4tjaLevpH2J6ituvI86R0i4f6XokIui5PJNhuuVR3H2VbRxw0MBKIMsa6kJhe0XjsayRmT2gm8_u6fp1PRldAy3He4Cq1tTMlLw3SfTYyMv8z8w9w", width: 2920, height: 3883, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110131518233259372157\">田中ひろし</a>"] },
            { photoReference: "AWCwydgtFGCkn8EwmWoZUMaJtC6Mq_CBzZw6ANOzBU0d-FPh3TOHbjHDjUAtWLskkU9KOP9A4YlIBOQKqX5AjY3CO2gxv24o1R85s9czgiGFfCo7HFEUiPRrpSy7ZyFUFjDaIk0rJxiaQxmm_HORG7StULx6I0SdD7YLtwGH72nGnVO63RU3aO0gBnxP_9Yk5TFFpNj8HgCmbPF7HSQ-MKtH4Evx6KbZfNQaMXZ2dSkxj3Yyoe6GWsvRm2MlNWOY5fgPpvfVnOcqNFUo41R1BaGuKx3iXAhmj7bEsVonXTg96IRXoIzCB2P4J_pcOlfEqQM6v73UiOoFfRVkSh7d8iT00ZvEkiofn_PycMTF_TalbuQiAWLQNWR2Xm9QnvzeSvp9GJMN_1Lh_fgsqTc7T0MIF_j8LhCWyQerv-RMA7dqTBZibFPH", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114932496327935602359\">松田泰夫</a>"] },
            { photoReference: "AWCwydhJZSEKKsL5E1MnmPBCVdV1693MOYHm80N1E4U4VLG-zz30Bcov_bcbjkGnOhgsWljBRE3B86Q4yzOrHPpUCFxZAaqOmDxIVnyu4GjExkGPGvSY5Zx8kNlx0gRZ7gbX7GPG8XuitiUJa5fcj3J_5uE5Ki-GiCdL-a81GLW5Zd2FoMz99Yz3zvneYL21MnxvhtyKQs-TQlORaJZ68KXxXitUWNLwQYVRrkV2KLUYIzwPqeq9G9gpt3STuCwpw0RW9QzqDc8fdnkYjUqAa23PEklpKqqhw11c8QF3TcQSDIIqUne3p3_pW6OQ2p04XKZsvhLXXddF2Lkys2t8zkI6bvju4boAeBx9pfyYZjD38PYlyaOecjZuJlUW1XgrbkQ2whgWlkkHR8er4VmdW7alp7U4dfA9sULfrN9oQDRQuzciqwcs", width: 680, height: 684, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117311422126741379819\">ホテルオークラ福岡</a>"] }
        ],
        summary: "나카스카와바타와 리버레인 접근성이 좋은 고급 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["나카스카와바타와 리버레인 접근성이 좋은 고급 호텔입니다.", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-2 Shimokawabatamachi, Hakata Ward, Fukuoka, 812-0027 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.fuk.hotelokura.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16290748547030302394", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EC%98%A4%EC%BF%A0%EB%9D%BC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 일 팔라초": {
        photos: ["/images/fukuoka/info/accommodations/hotel-il-palazzo-fukuoka.jpg"],
        placeId: "ChIJBY9hIJSRQTURxBGk8hEalEc",
        placePhotos: [
            { photoReference: "AWCwydjSelR3M-yPIcDQ-nbVMZZPDg6ibg60K1MSpX0bas0tUHT1Bk8xgDIMEXI0wbcBdsGwKR2j8QeJL8k8zRs3jBNe2sFOFyFuoDyeQkin0NinNm_wi-zvlcv9mTqr0J6fLIpmD6tEQ0s9v6D3tc3f-_xy7xBdHzjjMuPhX1xX5exg_y3pkECNxsLSPddnIW8nAiaVq63s-kNYmSHe_Ob3XExEgolovtkV-G7J7FYZc3KWjLf-b6cWVpW6XedItnpOoEXEF5ZS3-kmFTMJAgLoEPwrkbkScqAq73byAFLqGwabviFLUEKhiMgavngpu-iNZQCU5V75KZizbeZ85QmRZqnqhAKHUKNYzGvudk8228CVL2bcQOtUKx9x4eTpGEePG0UOao3POeWi12XxAtwsq2ZK2_KfYUomXh3Fyqy36aawyA", width: 3000, height: 2287, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117602751733019627744\">ホテル イル・パラッツォ</a>"] },
            { photoReference: "AWCwydhJ2DSrPlWe7vyjGdL-5g0cefwPj8krJkvUbGuJa3DUV6lIW6uPm7E18zP47CMBmObHeS5duCkgZWmch9x4_2msVdJqCnu6PSj4rLDIIbjSVw0KcY1n71tHt_cEPdUv1fpv4p0zYPGi2crm19yLT5dHUgbmBbR61YRg791JBQVBdo3Phb2c2JCxjYMKRWebT7R1eJ9jX-Hd-_VOMT_EK5C0c7NMFBpahv_zS7CB3TCGcAEsMkR-l5MtY87ZnpfYaEt1ScSm_SdaTJj8kpe2EZzJr60HvrwKztPd_MKUofZRWqi5WcN-t_utJRBGJ0kXapbQCFVQYm-O7Rmm6_WQLqep5qFhD4tnm1zpuVzzVMHZTcXEy12ZVj2-NZms4f0eKTJjzthSGEm3hSx4xhFuqS3ZZRXFwbomX4t8YfVODgs", width: 1800, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117602751733019627744\">ホテル イル・パラッツォ</a>"] },
            { photoReference: "AWCwydioRNp8pxG0bF79YE1ZR5jPSVx5RSLNG9Dam0cnSwh5J74BZdxLkwuUdacb7H-ZJEgMH_dPBn-JqARc889OxEhH8N5qIvYTNtQBqn_n5-wWgooXBJgzGoKLqNLq_zyipEp0bEEHYFAMw29RwL2yMopvEl-tbRxsGR_VkMLsaGwBQUNw1RaG1-_RH_-lH0JiHOWU9RoX17Kt8LjFz0wllOUKWBqcrYdUv6n7q3AETcBMZzp6txtWhxhqTNP1_lXuQL-AgU1it0otAMYmW4i26C5OCHJyKTe1scfYfLHihhLbCt_5LGjVQZQwvEBaGVkzZ4ApUxpUNCkBG48Aqf1C0ErZEGOg3jfKLxurBG9-TCSV6aA5TsRwSSQHFWqOcaMiX1qHu_ndnAod2f86odKiiPawNCqwGgpJ3OfBvYGlIHk", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106251579540907079925\">co. myamya</a>"] },
            { photoReference: "AWCwydhQ_2OeyikLGnBRPUX56oA6RIfRU4dYFVgMiGhHZaErObBT-IY6pA7ZmaSLFW3MNbo4F0glDGRVId1zmNPxVjoxRIvxp03R7-cMMRJnxznpmGt81dtOf7po2_N7MRkD5FsKLalgVMyvsQ66Z3Mi3oIHKG-o3L45vLkP2NZKbqg0g8zKCxla9gJPa010fsQNh1s4ghfLDPMxX1jH5l_mIkRYrIDs3etHcqaHqqQqmSPWt8_ONO7udhOzSb_VueoSff7WXMF7xBjD038xnHtfJa8EgwX9-3k8WZTQtBT1sf8QwCAuKyU7X-0gmsReuDrQOJukZiMW_rQ_7efZQ8yVP1WFkhvBIvgZDYLe5iOIT9MYON9WgUwf6SMDf75MrjT9x3PHkfNVCUaQfnLviBvpDiqDu7ZfFz-J6bOLWpRF9AZT-A", width: 1800, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117602751733019627744\">ホテル イル・パラッツォ</a>"] },
            { photoReference: "AWCwydjjeWGy6W6xHKGdqU2FXMnjrXxP4f_YJ1vJXBCiOLndiA0JByO7174WjlZ6tZxbJs_CtkJOcwx2mXA-y2kT-KGZCkfkcuo1nS4UqeIT24utODWXbBFRDl1mnUl6Xf7gftK4pJa0-2HvKijLtz5YG668P0TprR1q9patI_l6JLF87CH-5BZzaYXC59zf7Nm75etjD0w0aVRS2z7WQpvbLxbGPAgRkUBeBOV2p8LD7qkPjSlX7vgIND9MQpZmZtn5BHXJcr2Tdl_-Dq378PyKfxzj7sbWkTh93byolP8735xmedJ0yzn1zDUVPjzqakRjZS8l-SA6mmPMiNQhC-JgezfGEldz9stfAbLUyVaExMNVzAa15QEGFrIGek6WS5eIvrClHR-FoA_KdQSvU8BrA8V9qjzbTYdCnZxYEPANrMmRh06j", width: 1620, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117602751733019627744\">ホテル イル・パラッツォ</a>"] }
        ],
        summary: "나카스·하루요시권의 디자인 감도 높은 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["나카스·하루요시권의 디자인 감도 높은 호텔입니다.", "평점 4.1", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-chōme-13-1 Haruyoshi, Chuo Ward, Fukuoka, 810-0003 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://ilpalazzo.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5157776137633665476", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EC%9D%BC+%ED%8C%94%EB%9D%BC%EC%B4%88+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
