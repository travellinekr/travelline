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
    "더 루이간스 스파 앤 리조트": {
        photos: [],
        placeId: "ChIJtacDgKaNQTURE5Nw5RKUhBc",
        placePhotos: [
            { photoReference: "AWCwydi0yacNXCySxBrhm-Qn01SdHMs7A2tMVog1CHTR_sW_8OmZLsQ59gIYnphBROVNlCeEtQbIjsx4CtXoMjO8KlHhe6QJ8M0kGV3yEMwrh1JtdPvPh9z7EHIzagedr5A8Kwsco6bWfpQwRdiM7_FI0yaBDpxFbSLfpKUtbXaHrC1RdaeYjHaf1gRUOZ0qk7uBUXJcZU1--6k8Sta-Ca6hTNKWO5i_mGNn29cfWlKpH9m3NjGg5E60Hs7XmSYMNm3PkkHr5Tz-xPDzvGDO8yhQtA_WFdbrzWTOWMMSOevSWK7sFvH-in-6hKIkyM0XjTA6SmbWnAbkv7QUbWjUDlZAPVIdJDsqpHZZsmBtpaheQ5ju53UMGoESI7zmNQif6UHoY4C46EG4Y6v1i7vP-Ij2dvsODYsZPgs4t0KyXghIpnjA2w", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105477613356675743996\">THE LUIGANS Spa＆Resort｜ザ・ルイガンズ．スパ &amp; リゾート</a>"] },
            { photoReference: "AWCwydgSooffg1rx78Xnnbec-TaFsiaoJSJu1SRV-qMZZAy1VUBmpGLnDoahGLBLO637Z3B0pN52aT7m0GgLm4Tt1H7_wrcQPXlsNpnKGZLtc-8PPqV9rxlWsDVbcNkMN8n_Ova5LXPEtPdhe5KZPLiujW6coCKn_lIvp4RkgcRYAMOU58hXoIRKVUGOqiXrwOSeBO26nIuAWuEA9Kwo0DcxQV7kZqsVxkvQb0MjdsjXD4Fnw7trYJp7Y3RzTWgC8JYZlCjkgLcoAmWIDGihLwnXvjnN-jPOFRLILejIFSEtZTqKbQ2jwPYnk205gD4uipmBh68UiDt85-ZEcQfGKLd4egrh8a7xoi6wQ8YxIESU6ToQhL9rI-HXEf-gbuaoxww2Cb_SQxcZsbtqhGOLbJpQt7aUZnqHYOeAr6LChPO6CF1c5ZFZ", width: 4800, height: 3203, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105477613356675743996\">THE LUIGANS Spa＆Resort｜ザ・ルイガンズ．スパ &amp; リゾート</a>"] },
            { photoReference: "AWCwydh4HfUC_ZEn83n9wwSpGYHMVfICZwNXc1Nrumi_reN0NKvDidsXBzJkEouN5dsMCwNyJotH57A8hZySD8UK2TXQeeDVxSZcFAV8oO0SFLZ0dObMHmAiCLiipKIGZd957BxsfKOB0a8M5CJ62U07CoSfJWk-skMo9KW0RB7O1H0my1CpS4BWwTQ7x02QALy5Cs3Y82AlBKZzKT6FoJVCK0F1Yv-zF44oNHSGJOSMtMgAbrRrNgEXjqs1ASG6OJ84u85Y0W0Ay0c4hiM62Kg3_ABf5YnPTWIoJ5ZILuV1De9VpbnuG_cGXcbcLHIH3WmnBnVOAJrsLDmWXdTpi5_jMtjFCasFDbrzGQNjq_6YneOtl8t7pgcZIXkKRRv2eoAH2F69qEhnyYqcoyRvUEYU7GJ04I0ECjImeNk3LOI-590ANPXw", width: 1800, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105477613356675743996\">THE LUIGANS Spa＆Resort｜ザ・ルイガンズ．スパ &amp; リゾート</a>"] },
            { photoReference: "AWCwydik1fC9O8MKCjJCTBIRBKSWUDh25dWD6mW-YRqn2IXPVK8nm1Va-QBrkMnqLpluAVwRzwv4iFtaUTWDGXjkd2pmFeLEDk2dHBWtUyu-N236k_9A0d-KIxoQnws_XCXZACIo_c5I1ZpnE-S4uXbAvGqi9umsZgIGLQR4maRtAxbrAXpcxO2iVxJ9wPLHlNddU5ArkmAQStvHtnMeL1hFg6XIIsvHWljxBlaXeNz3rPhuXoUs9jrSTb-MNrihlCdm5XJerwiQGIpMWJTi9UAwM1fwidjXTB0OuLCh9C_QQm-Q19JZa3jKlJVXpkJr9apd9D1Ta0RjzOVhoLvH2N0NOtza-eEJEO7XwO_F8HPjCeHgyawx2__9hfM9D4FZL4bqm4mvlhm2GmB-8NVRtCkFFGDogrvCbTnn0gdbxM5dpR97ULdvW5qu-zr_J4UvfGuZ", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105477613356675743996\">THE LUIGANS Spa＆Resort｜ザ・ルイガンズ．スパ &amp; リゾート</a>"] },
            { photoReference: "AWCwydj2DBXXsDILu4We2MWlX6th6OSvk6xFVuDAiigyZCh8cT4omn4tbU8LnW_YEDkVN_QML1EcV1CRf7b3MobpPGa-5gPVicz9xCmS56UC6PMFv1E2niP3fW0hm1xmIKE3dJK-bkosoOzQq6xVfVBcW3maxlHcJWcD2W75f_9NPckxXgaFh_JHJ72QqSE4Vn99tTkAhedDhF4_lg4wtxNL-H6p662jomduyB3zlOlblU_yJWPXqpIS68JKdZ0jP1coOlt06eLaLvM-j24vwW2xJbdBGXJGCIIe2LxNzTCHpALRZE3s_nWf46RdN7yI-Uu-RCdd5dvg1732qK8MPFax0A7G2PnjejnI9lZVl1st6UvO_mjduFXWkgItIl7BXgOfLq7S5hahC5M22rklgPeFkaBrTx11dOWuRJQbuEV3meW4oQ", width: 1500, height: 1000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105477613356675743996\">THE LUIGANS Spa＆Resort｜ザ・ルイガンズ．スパ &amp; リゾート</a>"] }
        ],
        summary: "수영장과 BBQ 등 즐길 거리가 풍부한 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["수영장", "BBQ 시설"],
        tips: ["인근 수족관과 함께 방문하면 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "일본 〒811-0321 Fukuoka, Higashi Ward, Saitozaki, １８−２５ ＴＨＥ ＬＵＩＧＡＮＳ Spa＆Resort" }],
        location: { landmark: "일본 〒811-0321 Fukuoka, Higashi Ward, Saitozaki, １８−２５ ＴＨＥ ＬＵＩＧＡＮＳ Spa＆Resort", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.luigans.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1694642168677831443", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=The+Luigans+Spa%EF%BC%86Resort+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "호텔 마리노아 리조트 후쿠오카": {
        photos: [],
        placeId: "ChIJn1TykzuTQTURdHnTUOXWZI0",
        placePhotos: [
            { photoReference: "AWCwydgvwYyEKjVVkjleaIOH0D4jaL4CoRVZyY6EHjGO--im8ni3549C3q4YJDlttrTgtTO1eFCEefaN4TaXp_vmLpPglGvbFfSLbHAUdZWaSwSYANqNDTCjyL8v1n_Bn_blaWr_tnOd4j5tpecr7SQoOlfsB08YCOLs1oy2cVuJjymHVcqpn3FvovbieI6eQtQOEFlFC12RaTDJv7aA3toEIv_QLDzU1ifDOicnsTzQSKstImsgATt-n-NSRROYX4U8OvvXRfMlcQwgQXVVcVaLVsydVsw4o9VuoQCLxIKrWgJIHro-BPCtWJ3Cf1vb4K3ri8L4BmPTw96fxqrPBtu5_Q2zkTwzYGJuHcWzDIwpWNg3aA0DFEDdE8vPPDwIpXadH8jYCqf5mtOMVHoanCxfG6SXHxhXqrE3MLGdjugyr_K7p9Ox", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105535840156057740947\">ホテルマリノアリゾート福岡</a>"] },
            { photoReference: "AWCwydia4pL3atbZcPqGpL9Eow5eJqtCTFHBUto_KDeQPQvgvlb9e07cCDXKLlTlubsT3vzMdrzjOi-PTmJMpgZmEvCYs-996sRcTuMUGa5wg_xmCssEswIFmCYSF-HsnbN2cBkqSYZ9dlRSwde_BVG-J6CvshWwcqo1j8U14zeWXZPiAwRd2kYsy_eqhsydnBuFCQuuRGbjAoe4E_Zm18cCOPIa-3rg1HdHh7-LzinmC1ulh3Pzw0fxesYBeYhA6fH-nJEoXIpCf6gg3ERcuYK14HRMMPNsUQsE7YVpQceFIWGWyiiQ-WDwfRD2qxUIyoXgaP-ksiCLXx8zAzSAHMSJyfKUxFkIfL2aEIv-3VprbOexb442h_HBHOQhY21jrzs9e5nuBfQCsbJRt0xvnDC8aA7ycLGTyijzIkcGp4xDx1lkwQ", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111169505876632362138\">Joseph</a>"] },
            { photoReference: "AWCwydh1Ndc_jStaEmxv5d-beop-emrvVfxPZoSXkK-XNC1w0wh_wzaXRnpe-5ylZ6PiDyJpn1_A081gpoYysSyLAET4PwPiTo04CDTBZK1BZVNjn8EHhrxcHSbhx-svWQrLALUx1cW968uXpPH0p5ameL0Mk3iSMTtstB9WHStPEGBwUVzkeV1oh3e4jC7EgYvgNKAOODPFyiRIDhUyT8nQObzstWmkgC6pVPuONjZU7sJ2LNO8iX722UTGzUbSSt32I-cXazJMBQFp6F09iHmRyGEi5jldqCJtKrk5ODcAy4tbk5Y4RL5AfCjNiXdxGX3NS75Gt25Le8yy4tkLI0JmGECe29HkMkUPghtRuJrqpoI9OfpgKcoZFDq6WGyMtG9ekUlgzZ5pix9FyagsK0z6bq20GaNTcKV_TE2UVmAGCg_Ekg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106051318422277906092\">Kinoko Hinting</a>"] },
            { photoReference: "AWCwydjJpYcBHiLZFh4goQQuHhSVGvEQl5La0dxkH-rFZ1rnLCpL785OexYS-9UyiaeVQQuQPP-YU5dWaHtaiDf4lzU2lE9W2HVruGz-GJzGFIR0szMtK1GnkWVwIkCLUlgmeorjdQRmfRz0NLIfSyRL22o2gsaTgxxUlwbP3hfvm5RsECpVwSejAeZ-lOQtcktxfmJZfojIrEnQIMhUfx2f_af4QMJasy9VGmL0Xaqx6dDSsI7p0Da_F4Iq6IoWKeR5BoiqkVlFi5JfDG5ZYNHYLwINELe6S4pn_Tn-8cm5cZU0XB8KIHKugellbQ_FDPPa7YSWCrw5bNjDxTGrHlLqo1ktmC8bkxkqKC8QeIyO-JobcFGhGrA3HjBK26w9jW-zHgEkcA91jFGZVgpzhoa3Xzm3oFnhG02LcjebRkcoLtWr4h-U", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118412423547409081724\">鹿島潤司</a>"] },
            { photoReference: "AWCwydiXIjmZ3t6lev7Q2LFl8_MQEnkUO8xk6WbcwQ1W6xxiGv-bVST4SLMtNU51l1E6vt63f596ytQQwZlq_NatADbgF3fmBAtD36PwX1RWAUxwlDSWzC2pubKPmfOCcJuA6iTW6D7lWtVL5AU16OT3XKF6ROFxJir3LCh_NMiggyCDsTfWW6amsXk5036trt7bh9qP_BOhoZxP2z4EVb-ypIIWd3--PIfgvg6rnrqS-Dh6P92UAM6_sRLVv5Bmn5PoAYdsIHnLokMS_nYserlQ-trLuVvnBhigqBOGUiTV9XnqHqoHC8cuvEkGEYGHOncuQt3yj4XbFu6SnoYpUF7ZGfvt_y2HH8EUY5YvuwiA1_oWKvG_UEGnpBP1qbPrWv29fHhJgTj1Qc4yX732W8ZrLPbJt8gIZnYaE2r2-0zTaEBwnQ", width: 2000, height: 1500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105535840156057740947\">ホテルマリノアリゾート福岡</a>"] }
        ],
        summary: "높은 서비스 만족도와 맛있는 뷔페를 제공합니다.",
        updatedAt: "2026-08-16",
        highlights: ["훌륭한 서비스", "깨끗한 객실", "맛있는 뷔페"],
        tips: ["뷔페 식사를 꼭 이용해 보세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "2-chōme-12-43 Odo, Nishi Ward, Fukuoka, 819-0001 일본" }],
        location: { landmark: "2-chōme-12-43 Odo, Nishi Ward, Fukuoka, 819-0001 일본", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "http://marinoaresort.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10188504537410795892", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%A7%88%EB%A6%AC%EB%85%B8%EC%95%84+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "세븐 바이 세븐 이토시마": {
        photos: [],
        placeId: "ChIJzY4JSGbvQTURv_RMxEIBVNQ",
        placePhotos: [
            { photoReference: "AWCwydh0MzElXjt49nwDN4Q2POjAnTrWZg8KtHGFETiKlMEu7isGBde0ns3xlwVqieyIJDjhi61KY-LxmgW00v5SAjt4U-MbtzfeBfLO95ZVvRQfsctrj_YNoctA8AYscOjC1HN9h7rsYCahipz0VHWUf8t7Y_qyfXdPuf929Q8UImBCuRbhvtkdkv6Ht1QMsCO9rOO1R2kN0oqexboVayaCPjR2jMLQoHiaQIZkxOqoe_CVN2H9TZ4CT7_sRIEFSAupN14iRWESSZ0dKekksvhxt_kmAXXSfutKc43zsIl4sVVCmnrZNQvCnKAmoWYq1DVKNdw53qkzyTjZbr-7zCAknrY6AxiFO30CjXX3ULK7tqcbnGEQU1Ehc17cULLJEK9qO0tGXMdfjlFoZiZSOgLJB0A5y8vgWlaftHKOpSJhL3EtavqT3Dy8fhsKhqzce-M0", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115327661568091960118\">seven x seven 糸島</a>"] },
            { photoReference: "AWCwydjB5xAymr8_WugsTTgndKd6ZAdYCXc2qLFtsU3cJkUZHBsuVORhJ1f_1c67JSuvJnLvIYBMKUay3dcjrO4lm19noiYwV2WPj0amqD9YI4ZNxCyLkk_M9QDCmu7Ru12atIVcfTg6KCX9LCjXaTVJI336NEpBW-Yisnl1OXro09AJLvf70WnmaMiwVbqTJd0luIvx131-hdUueu3Z2nrUfqBgk1dijj_TRkkw2skPaqOI1OvjljKD-ZbW7THVr5R8ZRAp0R4lIcRFxKlgYKLin9w34exofndA29He0m7nekupG5eWhjur6Tq3q50LP8eo09ytIuVEF5Im8_wS0Tn8Z9rdgOoTblfkRXW00Vtwwcyq_TQnAYEALpk6J3NmODoYDA8fcnLea7V9KDZhtT2GFKisjuvKbkDWMQbIIAulUZJE5quhPWmTRO0ydzit4lD2", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115327661568091960118\">seven x seven 糸島</a>"] },
            { photoReference: "AWCwydjPLo-ZEAwK9LEh0itFon0oWuSxHoj-huQN0ccAVp7rSJE9veQL60xq82Ki1cmeOGtIfVrr5DxvqXuU4HQkAB4nmJr31lDcoDMQ0luNbw-0qvHQdwVqE3EC3VjL1pXVifqp0vlKygLZuYU3RpaXEeXDTRPP6VQOO92X6vcEQpXn3Ojgut-36l2Zhpwxp7k7rq3vn7JU9ElKFgEw3m7rE3GlMPh3GiVH59xUysakq4bu2kuyn6Saii9blekGgJXsIJ9EslK28JEaOA_NdufrGELpBX-WpjQ56ZSZZ-SICrVEJKT7KXfzToy6heETJRfwOwVgah1gK2v1QzGD4L1hSkFyQNlTBNHGwiscMusXI3-d4L-qEiC1eVDVpRbv3bbytYefCdgUYK6yYZ76bFgs_cCE_983e5OUCoFWNWQ6IXb4Z4h8S3EDU7_8FXnbqQG2", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115327661568091960118\">seven x seven 糸島</a>"] },
            { photoReference: "AWCwydhZCeX5oPa_GwSCTKUr36IlzcxS_BycCSWFEi6kwUXafmZieAXYXMWjKIZZ0aQo5IKg3kHuD0e1PImpnUjCV5Xy1XN2DdTuHGtYchoEPvX-E06RfawRkCpoK75fFAeEbFhADySM157JzJyyra1NbHeyU5kUibBRKAeGSyDw07Fqn9iweMiqb15hUlrlPBQAMy3CrcMsEoE7yIkQbJqf9QkZ6YcQQfoFOtxy-sd7eJTgsVOuwYmKKCxRTkQbP39mJNcLr4rBcvhQB8-AOWHY08CuVP6OGeMGipMyCvSCOnVVrc1eYtjsd5XyqMVEE1rJCVTLuZB03Mkjj4N3EMcqwRqLrWWgswo_AtVJIUMByGwQ2wRjCVLxqz9u5Tw0lJiN-ANOZ1ZFfAhgvTj_7XZXK8u-SMXZHKoE6BV1kA_8xVT3azgD", width: 2000, height: 1333, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115327661568091960118\">seven x seven 糸島</a>"] },
            { photoReference: "AWCwydiPnZ5gauWzD9Qlxt1SLPVdIxkFYxd2IzmzphLQsKn7gVKwtDS0jHoMwWwW80BaEARBTLGKn-b4xV7vZTRLHDkup-ALs5OO5T2A1Ro0HrywjWlPxFQrv80yocGiClvuEPrjx0N0x65EecW-fwRqGpACLO7m2Q3xgRHjXnn0IdiU9OvgKrOSo8BZcQUkLlPGJRegkNZYsLU7ZzEJNBlHHKODXenckjqnLG48aCNS4T2b2qoJtc49t8XgUtC0Xk3YOqZekZ2FwMk5i9xKhCHuA96ihWxf_K0tAxU4jxdqC5p4NmVc5nYpsQ5WchmtlRnt7edJGCYU1uS2zTiX5uRtWICZTsnxjyKv46zUltRZedPsHNn4Hj14YcHVIY9TDV3Q_GnZlN261hZRwLQo4lJB131bicYCvwvw60YFUtHxMW5CwJv2", width: 2000, height: 1288, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115327661568091960118\">seven x seven 糸島</a>"] }
        ],
        summary: "해변 근처의 여유로운 분위기와 편리한 주방 시설이 특징입니다.",
        updatedAt: "2026-08-16",
        highlights: ["탁 트인 바다 전망", "객실 내 주방 시설 완비"],
        tips: ["주변에서 식재료를 구매해 직접 요리해 드세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "266番地 Nishinoura, Nishi Ward, Fukuoka, 819-0202 일본" }],
        location: { landmark: "266番地 Nishinoura, Nishi Ward, Fukuoka, 819-0202 일본", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "http://sevenxseven.com/hotels/itoshima/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15299855220357264575", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=seven+x+seven+%E7%B3%B8%E5%B3%B6+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "테리하 스파 리조트": {
        photos: [],
        placeId: "ChIJTYUQCMKOQTUR4kbENm6GuN4",
        placePhotos: [
            { photoReference: "AWCwydh6PcnH80zWdq64fkjQ5YIXwwqUGiPpVIvuRwNCbaQwltryPOuOuUGCdWcl5TFIU949NMjo1BLs4LOsmfxprKDe_6FZXOV_t2TLB29VcBWRC1tdf6P8KeltzggmaxqNF4BKWYrKrOBbLFUnb7duOSXfEU1Zs5g5GREDR7CXuNMT8jKxN3bsgVJRtkCs4WhIOx4XAJgQJucqzAsff-E2GVxgohtcX0Oc3uV7yUTrQ550hMmvPbK8yx5G15kC_9guEIkqQNbRXvusvhqDR98Q8mdjcm8eQV2AdOwh1DA8aG83pTYHMb2pe-FLWapQxScy5eIa5LGA8OdZweMIGsdPCv6IZ1kshXGBvjyPR6G5NAgUxw8lS0I0l8f1f4ThWhP35mBlDcOJPgLPE9Sz9R6kE_ckjqxwLKSUdBroSyVJOvTgRw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114562390763872088354\">裸の大将</a>"] },
            { photoReference: "AWCwydhn_hcqo9aI4119ralS0oGbhabMKir0OLyXMy2K8Ir4e9vzOJKF-nL0URL_hYHughZ3236eJzn4ZuBTZpXlT23jgUDyDne_uWUa7pco25yY0CzH4cEMBntdOKi94IlOKSKHC--sOJIeMsmLA7Q6AEP5_n0ZRjRLAE4gyeYhewNKF62lxpJb9bxPAW-X-JLGGKZ0GE4FZuZ9KDycAGvaDuoPXC9iNM7sItemasKWcFTwekBQq3tY1Q3R6Dy4wsDQAGLgvOBtQ2lTKUCU50nAtoPo6onJZpMI3vWu9S8kkw3hNUhzMyFrRQIQE2sH-iVUGYIu6bLqQj7Qgd8jgNfcmAaGOlQiCc3zjfFTk7P42eRkUGV4qgDHD_Kx9PV5vohgbVbEXgxb0gBPdkYy1a0lnvAT0iZEIFOBT3dtZFaldScOo--pMqNQq1D7E0E64dFc", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117633005434699214181\">堂林どうりん</a>"] },
            { photoReference: "AWCwydjFNcOC1mhDBksziN42HUGP6kAF3WrWIFy6KbeTkEVb7dsoazXZvK-yz7vAosGYVxRbiPSSjFi9lkvT_AGTdnKRPjsHrgoruDRRdGdyZGqZeXS_Q1QofpNn6vuCgFyDznGchsdn_rO6Hdob1Y4nzntsQOYMsG60yeFSRsEoosp7tFZDlFrzArKNqQdPy3clz_zJocRv2Ytw2QM9hCIMTtR3Yw0LE7ZvzzoMLmsar4SnwdGwgLiAOZkdD6xaq8ooJd3omGk0r0XiG185CQwdvlSOYp2QdPaDMtFCqg2MFA4itDONoIZvLkOvEih6ciAojVvIFWc_Q4bS5Dku72gr4opLnhc_EMBLSUpHfFgZBx5jNE7OcbdXxPIBIk8D_B6auIlogbborQvQjcP7605rn86LCEfVix82fJfyeKaG0bOQwQ", width: 2160, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107120942891655257633\">a</a>"] },
            { photoReference: "AWCwydiE4YVdWriy-0GpgSlRC7By7akLlbFzGlGAovGXRmD-mlZ7dN8bxW9tam5DRg7PBXH73MGM81sMvFYlUUEkg36GTZyEsg28O7sOQ3KNnBLzVMGgBFtLKyymXavHflUZgEQ_4H7UNo2XslrgPZ2JeR-g0S7BjlrzaVgQmhYzlRzxy-8lH_4eVFFRuMXZBSudWNuhA3FiAJ0wB-T8OpFWPaPMwSzr_-EVYgoE_beybcOdA1RpCOF4novPTc0wbRWBQrd4KDWtzCEWrkFOFOASVH9YlMTy0RIHHoC5aWuhZxSfnsT5QxyZASCs2eB1Z_JBDnAugEb9ZHIvbwAE-f_htNgKnWIZmOyhy3nNKB614GXulLZ5h3f4UHRYIf4d6kuhfGZ6xUyzU_-vxSTKuvuPSJvLh1o0mAbMxLZCR3AWQhMJ66EzydvVCpLhTt5O-w", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110558104466042321501\">藤波佑輔</a>"] },
            { photoReference: "AWCwydjsSCzpccafAhYHp0TP1SYNGnE2uF_7b1KCe1iiYILtHxfNRQjVZ_J4nCnMVxfrXgpLya1sjWRIim9Sz_UMrH4f-SwlT5anDJ4jdYWSH9-_IjHOftXpEYCMEeIUbJZMKI_VIGWD2ZS34i6hvLSRxnpKJBqYlz947dS4ByOya4o4wxftkJaBKB_gYZZKncFKzWe9ISmSWANRTOEg-lp-pB-O12DJedaHneI-wKzphhlfJS0muimunyT5cEW_pvfL8dtLMjmCKwa8jEN0Co9iSOSHYvlQNuOuDkVjJ25wnZpnHGT_Cr_sokOD3h7ovnmwxDO2dxeFT1ClZSoVBXeAcVDQBa2IZATY72BfzJTXHsx23X3zAPoDaXg7UU-MT3bdW1jqOm0CIbgWvj-C5fhqSgoCCUEuSYm1Km5pkE4QgTt7u74", width: 3968, height: 2976, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117851254414361270089\">ちゃまランチ</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 숙소입니다.",
        updatedAt: "2026-08-16",
        highlights: ["높은 평점", "많은 리뷰 수"],
        tips: ["리조트 시설을 즐겨보세요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "일본 〒813-0017 Fukuoka, Higashi Ward, Kashiiteriha, 5-chōme−2−１５ 照葉スパリゾート 本館 1F" }],
        location: { landmark: "일본 〒813-0017 Fukuoka, Higashi Ward, Kashiiteriha, 5-chōme−2−１５ 照葉スパリゾート 本館 1F", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.terihaspa.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16048725080058119906", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%8C%EB%A6%AC%ED%95%98+%EC%8A%A4%ED%8C%8C+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "위드 더 스타일 후쿠오카": {
        photos: [],
        placeId: "ChIJI4rGZ7eRQTURCRHpMnRmn5M",
        placePhotos: [
            { photoReference: "AWCwydjJzY5TtTzaaivHVoPIf4jS-f18hZnr-ydRULm4T4AEeUCF0WbLoFScuorYNxDB6RosoLGjJoi2L9jQlP9swU5s9fvctoalI9ebTN4B5tHP7fIhPn1ru82cfAncveeCOJX7Yx9m2DIX6Dia-9zuMecN9Iol_YhholB1Lsw-5qqE9h4U1kRSHJnuLj0avjU5lUr9Gfh4axjGkl55vkDo2whZMSRqG0WYPXJUVAbHfMs9oyj0SIoKr0STGFcK18GcjsXq8_1hN9NpadgzcUm7ML_3w-LTIey2vkabauCaANjSj6dJcu_1YlWPPXbInqlyQYHPMs0TYCf6GjIb0NApp4D5-rLafuFo9XcyIOsZo2q6yW_pdtLwR2IFvSIPksRlH317ULwDKnXUR7KAfUrZIp6Dx5x1QmvJDhOKfYQg1uO3e0w", width: 1200, height: 800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109224882196205809871\">WITH THE STYLE FUKUOKA</a>"] },
            { photoReference: "AWCwydgX7CnF0O1OgiFTGKpCHWak0_LN2jxCgzkGBe3aE-3_55QrBqHqnLQa2xSx9sNhoMZUxqAEVkuMREUB-t4elbIuv6NqE_UM0yuSigjIFHLFxd5YF3AklSNhxyXOECeq-oKqpJMtNCkNJNxjQ26XR49tq-W-WkwrPgEbmr8G4CemeA4XyCYPyUc9aJ6YHpcpYED--u4q-ooFY7vcqwnX_EoAd_SaMcfSEPuMBNjgXeXcReDjSgewLrrDlwY1iLgAY8Pot5nK8P-Cq8386GHlTaJryvexghVPA7Bjth4MhQD_EHRo0_khrFbgD3A2t1yO6_3T-Gmb3sHzpwCtNKo4DFfha1j6cPEAT0qeAh7cXBmogS2M45Smj4iJgo0FstlasIFsskV5gUoA6we2aLFyL7VMOSsHNANOxP4D4sSMS4oLR-Uq", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100733557130195632663\">IBM 13MAD</a>"] },
            { photoReference: "AWCwydjJ-mangWuTE0b0CbM_nPKeeSMPCyCtxFzNyceDgtPANAH8nBoPddwLPHzSI3Gzvm_Lk_WxLrc0_Uglnzio_tPvo6NW0aRbRhFBjfkBuaWblGm4Nlg6WMeKExU7nIqvkw3ePUu9FH-ocIPkzo24_IhNyt0W3CLUnmyvQtVbcEFhVvfrS9L2f9xEnItC2s3VVzGJV0BBMpTGQAi-cC7qy3pa9ldaM__vKc3bMCENKVa-Emhky0TtDFCt8w-c9Ql0sgNI5JAvF-4tGSMbg-TJmG7WP5CeFMjlvNBng64SOy_HLusP1CgDlLH3bJgUWj6o4Kvq2n0cjBtK51stWHSF5ia4UImdIK49gWdzYQ6LkCJ3CS2gMd9pNK2YSn7Ecp0tSQYdnyRz6SsElwAZijTV74uOqOSYwc6sysoMJF1VDbYO7w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108048918099105342796\">市川寛樹</a>"] },
            { photoReference: "AWCwydjW1zOzt4Z2OVmj_dMMAfGoMf-nBALuIVbKR5Cy2wAt51NZP7X_-UhsdDB0UqwbVP3tRsJQoWw2zEGznRN2idpNjG92kd1yzeod6jWV7KYE9VFQAdlCNz8WdrLhpPKW69cQHoK6fISbzjKcuIWO0WfXMGeYfgNPUyGLsQjukFi0G2BeJCGGk8eTxAI4al4vF2dgybWrjs7DUzD2_-gWSoK4kxJM8_dEa271v6FjDHMVo_LD6tShw-b0RkzM1L0kOcarjZt7orXp8qZvkhS2PANDkd804WXefAAgV5u__cwQ6HYPut8yR0Hwdcv72MLNxr8YZoBFWdHAj9yFz-P1PfJU6pwg8ZpRJkSvu0Jl2IGV7d_0hmJpv8oYPFix0Ml3zt6QSD6A47E4E9p7fGjpWcstrXiuTGX09AFoOt9Gwvx0VA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111364380061476085638\">直子</a>"] },
            { photoReference: "AWCwydhkMYeWQnIn9jlN1hBVxNxzShbrlxwcKIJ9MrWX_gsZOeuuCTcBiLQo2RqdEXu27Qit1jXWsigio_JCN0WJZh5dKIWpOQYVrAJ-Kx3qSLMugce53vxDuj0p7reI69Vito1o11EYlvBmKtkRnb5aI6xctIusiuhTXC3-VlLIqar_1ydh3LZDm5fPKbgmhDTU6cvVXhiJYjvhwFycEXlQxFPLe6ZoxGjgC6rPd081L3272TVIWg3CWPN-zM6NSo2OF_p68Uy4oRJ3dpTSUTf58A9AOBwvJYCCE6JPb6MDK7pbmKK4gzk30rr2W5BAT-_z3uMhQy0XW_h6PGnz7o_hta_7f1M24fEt4-p6gVixY7QiXxh5JiqzgpC_GnGptxN8Af8CwWC5jdLoIuCjxaIZXUnCSap0ErN-g5iG-zA0GuiwPA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109224882196205809871\">WITH THE STYLE FUKUOKA</a>"] }
        ],
        summary: "세심한 접객과 차분한 분위기가 인상적인 곳",
        updatedAt: "2026-08-16",
        highlights: ["뛰어난 접객 서비스", "차분하고 품격 있는 분위기"],
        tips: ["식사 메뉴를 이용해 보세요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "1-chōme-9-18 Hakataekiminami, Hakata Ward, Fukuoka, 812-0016 일본" }],
        location: { landmark: "1-chōme-9-18 Hakataekiminami, Hakata Ward, Fukuoka, 812-0016 일본", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.withthestyle.com/?utm_source=googleMyBusiness&utm_medium=referral", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10637333494128775433", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=WITH+THE+STYLE+FUKUOKA+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "그랜드 인 캐널사이드": {
        photos: [],
        placeId: "ChIJpVzajZqRQTURnyxhB0UIdHg",
        placePhotos: [
            { photoReference: "AWCwydhB7EB7aMsFFISWDJHr37uxa-Yp5OxbfuMrRMHth6oHt06ZvA0pdfk_NRlXw5UZLfPd6wveNBJE6EPNRZnnaNLL2ZpFla1X2cmQmej_ApCc4xJPAsSy--bWau7Vmph1fR9f1mqRxxfbbqazm1Ed1sclhkgFcwgGDzmy73FcWE9ef1nUWSsprwCfH1mnjZ2PwUIjDDWN2dEWovLI2w5sYLG4Yyvg0WrW-Fp84qPrJUPlXc8kETQmTMUYZQ2TK2I8Dd5Mlnh5PlF_o24iYDIVGUtEspZiS7pqjSGfjpuOcuhWYOUnVsrZlI3SJLoUIGCQFdUguwhGOvkkb8wpCRhFiV1B51aC5k1uU7S2RtAoDjgC9m5i2b7wFdDeJWar3QdMo0Qo39kKDOC_0TsldgVT1PCmQCYTI7943k1VCqowTYvl92qF", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108788971569556762300\">Grand Inn Canalside</a>"] },
            { photoReference: "AWCwydgJPVdkqmWy9ZWaFT_Ukw8tZN-PkNBmvsEGjOJyjQkczExzm5PI8PdkKRA79RlbPRHC6czXdtfdWfQLMkTJO1ZgfyDP8eRtlXWZkCD7JRlF-5oOy-qdNQryZyqL17yKlBKBIHJMvwENm_EoDAHevdndMyL1-l4OorLpLKlRzhFtjNHntOwnEgTiHrDkFx0g-yzFts-Fw_mv_ikg3_F9N3mR0HsHO95YEjAYPbTeaaq85jIDiVMv5ZHhnRwlXHnpiTrC3FmSCxJhyaQUpGY1OZFhWzBJ8TZhteK4XrxrWR2jSqugPBIVZqmKQLj05CJ3FVLqClLqicsqz7Tgo-Y2LNmF_rurIrQEzt1OMxatH60_r9J3h9I7N5rT-W31Mk3gNRWGcce0SeqpZaJGpmCSQC-zwL0zftYFYfvkcFyULI4", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108788971569556762300\">Grand Inn Canalside</a>"] },
            { photoReference: "AWCwydi3OK5MBiPeenuObi9-UhQspLCEUhA4wblwIabp37alb-uMPFPefraNRiU9ntOshTu0NMz0-GBr4Y5JeQ9DhQXZOUrJj4nQaohNMnxZYPVU7me3HUBFFQWgHL7f0-lpDM8rtkQGbQHLEHZ0S8nx28ofhy6kU3x6mAREOczeW1gNst3Q_Z75HArZbNTg3PGTTcQN9PgjANlG1z233uMyZutHYi28aRbIUvRQKGTf2U1TmypP8jne7I5Zh1_C-2fwrdim69Khvg-D5AwDmnnPwtsy4F77_BiJfm6-LHyaDjfJCvG2xN2I-kZ8o5Mv81uFFgMcwmwa-MedOE-DPFY12wjnHszxQ6fVN1ay5M4ShbQkC5H7W6IC1EJtQ0dWhmEvgoYsiKpvqxjwKz0GBHuQ43PL92bqbwHBRriB9OvmhTFMoaUS", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108788971569556762300\">Grand Inn Canalside</a>"] },
            { photoReference: "AWCwydgbTH1PVMJQdGMxfRLiNP__BbTNdhHQuRSwu5r1-cGby51FhrGZKkrIaC2p-sw5oUPtuamy1KXx5yygBCsEM_z7m7WTbX92R2s7PXHP8Dv0dQ-1RQNNoJLdVEmqn8r6knCuoJotPPTqZ2miqg0dJlaLfK9fvyZZnIDMNQxXgrdTgVjvjH5Akax9YMg2NOyCNGyIAuo1Z1CSAg6U1L_V3dGtdD1N5OvVAuAWYtjxUdhMOgOjfJI90u0OQItrAXVkTawcwziIROI6n02LFhXdNQbLMkqxik5cRzfEJLoGjvOvHoPyAJbhoIZgTloI5u8jjpV6HUYQQozR9Fyd8FwITfx3dMW4pNyzyt8B-9hl4GW9-zGiHlPJXbwo5wz1QeOPTJLirYt5zjRe0_T2KIsL8qCSooHchrfRcQuZ8US_v0Am0g", width: 4800, height: 3202, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108788971569556762300\">Grand Inn Canalside</a>"] },
            { photoReference: "AWCwydhAKcXMBvPXb6yVFGe4sjqNkofX4-Hst7H4zrx9-yNAXtcCfr-x3E-rweS-KxnZwx8y6TCXd051ozIPC_4NsebbZaQQJg-mosvLHGX2aiL44kOEguIIMbDV08odVrqBQM2sLdlmmXCNxMhZrrwV_Q513trAJAnsXYmgWWeb98_5qu7NVRT8RcbPGB8kl-RD4iJ0wrT6Zw4W5VqjQQoRqpafO3UqB1xcUyiWI2_v-MGU1anqnRCT1GKEbKI_C1-MMExehbfPkIG6X5ZtPUWgX0BCj7xu8A7aJuBEyphHdDzAyUj1PZEie96wFNsFE9-_Zld4hjB-17wWT9m6XpucF6oooK9LZhezZKwb3kaFo7aBCpvUVra2QRf07MntYDxmPq5LUS_Ia31xSFOuo8-q0s9FM9RJFuWmzRpbGA17RJyQUg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108788971569556762300\">Grand Inn Canalside</a>"] }
        ],
        summary: "캐널시티 인근의 편리한 위치와 주방 시설을 갖춘 숙소",
        updatedAt: "2026-08-16",
        highlights: ["캐널시티 인근", "주방 시설 완비"],
        tips: ["지하철역에서 도보로 약 8~10분 소요됩니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "2-chōme-21-2 Sumiyoshi, Hakata Ward, Fukuoka, 812-0018 일본" }],
        location: { landmark: "2-chōme-21-2 Sumiyoshi, Hakata Ward, Fukuoka, 812-0018 일본", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.booking.com/hotel/jp/grand-inn-canalside.ja.html?label=metagha-link-MRJP-hotel-6326870_dev-desktop_los-1_bw-1_dow-Wednesday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-_mcid-50_bc-AGCKVg_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20260617_ppt-B&utm_source=metagha&utm_medium=mapresults&utm_term=hotel-6326870&utm_content=dev-desktop_los-1_bw-1_dow-Wednesday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-_mcid-50_bc-AGCKVg_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20260617_ppt-B&utm_campaign=JP&aid=2127555&ucfs=1&arphpl=1&checkin=2026-06-17&checkout=2026-06-18&dest_id=6326870&dest_type=hotel&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=ecee12b16c821144&srepoch=1781577618&all_sr_blocks=632687001_392427638_2_0_0&highlighted_blocks=632687001_392427638_2_0_0&matching_block_id=632687001_392427638_2_0_0&sr_pri_blocks=632687001_392427638_2_0_0__842727&from=searchresults", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8679571474419362975", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%9C%EB%93%9C+%EC%9D%B8+%EC%BA%90%EB%84%90%EC%82%AC%EC%9D%B4%EB%93%9C+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "알파시오 리버사이드 스테이 하카타": {
        photos: [],
        placeId: "ChIJnyNjYWaRQTURjjf6bhZnR2o",
        placePhotos: [
            { photoReference: "AWCwydhPhLHy6YI-Pov_t_UpNOQ9PpFLj-HjFHMndxKvn8SjdAl21Qc0_W7zLK_pcAz7Efj6g63nXUSSWtFDV3YQLdHSh1BalZBNk6ORmv8xipidd3eNEUolZfSENCUDoH5o5cZgXMNCEehGlMcpcS2-FmBwN_SrtQwfDp2JCd_xBBn2BUVpqMoqP2oYrqDCZ_DVw0bixDeEN9dZqFyTxj7pKsO_87IJVFwPIQoKNGz_2zq6xop_8BoOyNVsR5SHKZiAQaaSWZUxFpHKUfUnKWwq2Yf4_jqvmDiIuibyI5BM_f9bn0N1_bsJtFibt6vLRxpBYpyO6nUtZIKctavvZ8wxwnE3C5DdHQv5VwWt8VcPymu_XkpOfPpx6RHsoq3iZsz0_wSJt5UtGqV_i0vIbhJrc5xAUuDvU3ZAtAMDF-h4QJ4s4Fw0EWKkpB57qCZN_NDq", width: 4800, height: 3202, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117622791358879597455\">ALFACIO RIVERSIDE STAY HAKATA</a>"] },
            { photoReference: "AWCwydh3erfhQ_KydPtTNiLecqAeA9erxmRPLyTTXu8eIA29Bida-9t9pIOydUy1KDjeqHf_zaOu2OrvM2nA4uuCBJcDUZiBUTalKofo1WBBLPCOpcsn_CtfCM2Pb32EcDpTa_5onsKg1zzwg0FGqAxw63jnbnBnV0sd6OQ5w_wfsNmpfndYSKcUihYj4pNkL8p5PgaLihWvstC7AeSjqqyffNJeDwPQoTwdHTJLiBxNIK9yHFvbOaTrUgJnXdqW4b9ZwjDME79XhCcE1BMzSt6CGDuwT6nCoYrniFc12R-EKyJZ01M59xA_ZlH5KWdZXBWzvvMtKUhsL04_PFEQIqUFvbor3OrWR_d1S_kK-JS0y0MzzXpdeMNkthcBhsn4SU24KTCGHewGz8z0QRdw_7IkGVbLtEDphFLgWdlyjQbbg-Wt6SgMv04ZXMpZ8AWSaA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117622791358879597455\">ALFACIO RIVERSIDE STAY HAKATA</a>"] },
            { photoReference: "AWCwydhGaOB6DBKybmjjMEMs0sSmE1evfNlXeQC4uOhBZQIwA91nC1G_u61eqH78oSr1Iz_yitIEd0HskMW-xTABqDyTKJhopsy6upBHlSSaltwFzb5Sd6vonmzBhj9wkH-whmsI3rHEiW0jvyqMCkLM5d33VhHgKCY0kfGn7l15KplY7LeU1xNsVPEH3PrJyHjYQoHODFjFg2HKuDVv9AcLkpyO8r1h4zD_wYII9-oDvENwJ4E2Q2aPoltpQzhbT2rDPricN-4Y_8Hn3BD_mm2IdhJr-2GBpVDiZAVFuyIxB0Kon9U-vbgpwBNUgOL53R1i6Z4boLt-s0xryKXXyg_5CaU4I3X9uhGWiMPv26NfJS4Mjawf3KgQjEoWLh-g0G3yctAZalMC35337gTVJUPMEuwTaRTZe_h18friVMpzH5ujMV5qUm5dZdrnkFfIRRSl", width: 4800, height: 3202, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117622791358879597455\">ALFACIO RIVERSIDE STAY HAKATA</a>"] },
            { photoReference: "AWCwydg6ijYkxEafMfEBjds74JXy_7g7Lnloq4nmsRrISLhP99hxqk8Fy7jdTX5zGMoh9IRJLta1BO4CgjN3pBOxjNJRt9IJ9Oh5b2Yq-OgneAXRpkgI1zQTn-GT2lSaPBg8C9Wb1MoJQ3ph0rxstEl5H3PXBZjvCVWFto5g76gaPm5bGvMAXN96J7sCANnpEkrjRSkZprCIcEglQ957DnyZprCfXWJYoU9p2rIXSl-mRR8JrsER4lhyC9jzPCWp1nKQlKFu516u5d1A-jFz6c6QpANcfJFFKxNyeh9CuIqny2JWlMRdNhLp5xs6fDFI8UyjspvKt6LKR1jjhf0RyLRExR-es8EnuVuTm_26NORqr5qzaYdBLTbuarfbYhXq9IGkuZX-Z590NE5O4--O64X5tc-RxNTPByf0Yg3GO8z79NY", width: 4000, height: 2668, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117622791358879597455\">ALFACIO RIVERSIDE STAY HAKATA</a>"] },
            { photoReference: "AWCwydhRBNQuVwu9kXXq0uRwL71h1vDrqDvvPNiKrZGXlWwa5WQk7Tv_6akhKGqDhhMcBHPyDkNdrw7k-DmbpUMYWVaBZjj9F9Us0E4XHhlA_YvpJpqKWw7W0LFyHhgxYahH9WVl3K9ZKFJg1tPVMUFaLKyD6dOqclIaK3_c81SHj6Hz07UboIOw71B9BRXWAGyeGYtH17mrb8tw_5ERB4rMet6k1uufqAUUShGdNT4-CGikmjzVWspisgsTIjNCjUk3es5XAqiiPqcDooU1FXcHjA3sVRcNfJsDb9XU7v65CNrPSEaKsLEwqqahhYgJ_O87TefaZpX1A371Btff5mcNjQ5BkbYqvgG7sdDwCy0jjPrq3JL0Iob4lkyfmuCRg49HwGJNin6JdILCD-Ooh3be8cer4cJIrF-YUQL7t61WlnUjY57znoCMr4y7e1R0NHM5", width: 2668, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117622791358879597455\">ALFACIO RIVERSIDE STAY HAKATA</a>"] }
        ],
        summary: "가족 단위 여행객에게 적합한 넓은 공간의 숙소입니다.",
        updatedAt: "2026-08-16",
        highlights: ["침대 3개와 주방 보유", "세탁기 및 공기청정기 구비"],
        tips: ["쓰레기봉투가 부족할 수 있으니 미리 확인하세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "2-chōme-21-15 Sumiyoshi, Hakata Ward, Fukuoka, 812-0018 일본" }],
        location: { landmark: "2-chōme-21-15 Sumiyoshi, Hakata Ward, Fukuoka, 812-0018 일본", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://bead-hotels.com/alfacio/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7658203037415651214", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=ALFACIO+RIVERSIDE+STAY+HAKATA+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 그랜드 레지던스 호텔 텐진": {
        photos: [],
        placeId: "ChIJmevWGu2RQTURHCX71AT7o3A",
        placePhotos: [
            { photoReference: "AWCwydjIBnH20d19WSeC5rY24-X8m9K0-apPp2qKDZbAmMd65c1VUp6-xMaBPfHb--4ZaToYpda8MyXLxPDAi1qwb7WdgsK5eXPHhej2aGBTNAbZAmhXpPVA-qyx8S4cShX7fja3tIcE-Z_j5D1frGT99C3lI0Wu1iLpOxP_ED9G6njUHz52KOJrz5T2-ilzUBq0Xtey9C7nj28br9kLE6_JZgs-P7_rV-DcmonfY-rn3uDUmoydywKcf1aXALHQIxiwxzf2pvJ_xuKtmv5Rhxb7hfa51e2xV-WBVjkDEM0cG8qnV5_ZKKZGB58gcJz_dnbxKXBEonfo51_qZ9SERS0u6DE0CvexVgqm0RA76iahTWKWvGAp8lwQ4QreNYCjaRzyzweITJsmqI2apGkqBOEUNIkkaxBR4xVikwcMwEv4vBuwXD6L", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115338107768284538652\">Jeff Teh</a>"] },
            { photoReference: "AWCwydiJm3xuabscStC9K_f-lM1ekQC3N8YEGzsxW_OjTCQ-LSV6oROl7Raxqb40nEZtCpX67N0XTFmXx7gbCxPSnJjeWlIejlD9T_xWJUIP51uiw8bF4ONPWmGHVTHt9Fmv6JKEv7tTdjyjLO8Bpg_lCOvignzjk_cfrl-PXu4i9Ihj2F5CaXjSvEbcv-U8DyL7aeqJAvyYsA1eY1pn_7G0JFSMjPP4Axr9lU8TA8EOC1TZbr3yja30CEF6CconunqsqRrFmPD6bGGJP1eTQwljmy9MwaCeQb_IiuWDMqiyMLqyRPCHGHOzo7tnD2NExBqNww4nKHbC5wBDXyyD7-Al5yjlHolKnJPJ1BTXABfOZ4iy5uPu3JmCnTxfyWrk3sU6ytx8KTCRWLJKVhtJB_VBMHPqaz8T9dgUM6cbMadoRLxGG8dzNOGfmcy_P9rhFPCY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108946178481027748810\">MinJi Kim</a>"] },
            { photoReference: "AWCwydhTmNHiuIIwa3z1hiKKi5Wd7QHxRYkJ02CHiAKGQ5M1Wof-AP4dwKL1aj0SdQBLpS1WHAUxkwixBzUrrZvb-4MHhBr9iZLbfqShjTKYUAl0nn99etDURV8fAoveV10bTICHBilBODVK2IzzvNMprKv4wRD9ytteTd2lesCU4KhlNyozKJ7Y6vP5IOmsk6gtaM3ECMee50jWDJ1ANqpM7La-sjcqtc3lxA8plhEGcqpiaHtacGw0BhayT9STK73iIdh9QlCTdhaSNzlTDxDQlXFR7CNqnKBuUjF5He42PEgntHCCr5DBq8aN-qlQSFNAQgcp7D9EX52L5iV4pggq1ZsPanRp7SWz4vs0BRhlM-_rh14ZWVRurogIPEMnRHm8RYzqBRm7PEJMeAdN9kKtu-J9UKXeM9At8vEzsvT2ZxhMCd8g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104303186963506100618\">gucci kaz</a>"] },
            { photoReference: "AWCwydgsTS21tGZu_2YYeFoHnf01AUD0q-J43HPNR_eXGrGQsjOU32a8V9XPKNSmfp3QE9bMHAEoXNDSQXfyheY_HuvC_Qw253eepukziPnT5c9MHDIG5EO2q3pu6OGQq497GPUqRSMSvFPixaamLt2C6sXX8Bx3zjMi3MUTsFJoQiWWoHO2D_qEneLbVAJQhqYDcOZs8PpZoNzZGor8wezyKbHDLaRHR3mgTBX3cwszHFQKYfmEEWnFvcGOyZJhipgaQxhSpwIpksklSYzlwifbcbIns9ajYjrd_a_jdZBuCkvYPJdRBOdWHgyXEWon6USesCH1sfMGhP9MfjssjMbvbV2Py38bPt4tyJEe0gUyjxr3c-WZtmIWrfT0yMXjuLH658Cm5nNbXJ0_YfAklvCKZDFWK0Dm0Tn7AZV8bCXg3WPaKA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110143301275728658074\">David choo</a>"] },
            { photoReference: "AWCwydgKcjjbSMGZpkngAsYdx0esSr1lcNsL-uBf_QV_9RJxc7Ps0qVOdgOKt38d2z2SYuv9OkwdlYTO6kSsAE0pu2ZJNUTH8o_dPSBS4sB1zES9J5TAkrf73CVguKttcQVjdeRF2eYmBvQyCrCKugjUK4wR0sACiV9H5rk7EoYRKwPU-ymmEobJqbGgY6NqZT5QwgJ8IFJF05zZuiOG9pqYVz5daKwEGzaAjgc6K7FCc-grwbH77SHY9ObcSW0HsyiLaAcBNHcDJjwQ5vOihnlSwIOkr-8M7bQCNOV1RuPE4iRAOA9mYG2blI_r7UDf7D9Zo6l9GnH3KIrcd3WD8pR47ao2ANHi11SCKKWJ241s6ya8Lba2F8aoyZvoRIBAtn7ZatF9zdUysyI86TqU8a7U0_hsW08z8_QdC0NrT8wXqgFOqiV64l6-SrI0WrAjQXda", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107145760752435750658\">김무성</a>"] }
        ],
        summary: "일반적인 아파트 형태의 숙소입니다.",
        updatedAt: "2026-08-16",
        highlights: ["아파트형 구조", "깔끔한 시설"],
        tips: ["화재 발생 시 대처 요령을 확인하세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "8-8 Komondomachi, Hakata Ward, Fukuoka, 812-0029 일본" }],
        location: { landmark: "8-8 Komondomachi, Hakata Ward, Fukuoka, 812-0029 일본", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.booking.com/hotel/jp/grand-residence-tenjin-fu-gang-shi.ja.html?aid=356980&label=gog235jc-10CAsodUImdGhlLWdyYW5kLXJlc2lkZW5jZS10ZW5qaW4tZnUtZ2FuZy1zaGlIM1gDaHWIAQGYATO4AQfIAQzYAQPoAQH4AQGIAgGoAgG4AvbZrNIGwAIB0gIkMWZhNTcxNWUtMDE5NC00ZTJlLWEyZWItNjM0M2ViZjJlMGMx2AIB4AIB&sid=b8e0c4d2e8bed7e091cc60738bc0f979&all_sr_blocks=1623068701_433071424_3_0_0&checkin=2026-08-19&checkout=2026-08-20&dest_id=16230687&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1623068701_433071424_3_0_0&hpos=1&matching_block_id=1623068701_433071424_3_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1623068701_433071424_3_0_0__1747830&srepoch=1785827536&srpvid=c90b32a59bee032e&type=total&ucfs=1&chal_t=1785827553819&force_referer=", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8116606951623435548", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=The+Grand+Residence+Hotel+Tenjin+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "란도오 레지덴셜 호텔 후쿠오카": {
        photos: [],
        placeId: "ChIJExIsX5iRQTUR1XTtryImdg4",
        placePhotos: [
            { photoReference: "AWCwydgHe8sCTvLppnXZyp0v1Ez9ggh_BPpvOqUpzbXbrj7EcrtJjM8Nq5UnKm-XoCuJMdmxB-EtdugRTFtyxPJl-_2jtxyfxsArfvLIj00R65NHLqWQ-G3PaTSLN1qoAr_hoTMn_F0CUIILQznl0P9BBmRSVTir9V5wjQwymcrhQtF8tozUkz0w5dsJ7_TccvqX7TsfCCtcAImV9xgZp_5yxEJdkMkgD16yE3fGmjJZaZGEru5nBGnzHcNFruTjqQGFsb9jEzZovZSKafK0vA8VSOHTJ_d4826KyQGIO0XtE5PpPAc7VSkTqScJ9qcMe-q7BHDv10ioWmgQij4UI4d6L9BKPhnX__elP5PUM917U7-NqwiKyRNXN-g-Hwg3nE_9E51Fs4s26XcHE4vaki4A_afANy6xn9JK83mYbulcKYjP9OlXgTNqErCxffIUpA", width: 1108, height: 1478, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103799992750583392016\">Randor Hotel Fukuoka</a>"] },
            { photoReference: "AWCwydiik2QLkwkLgKCjWU3oh2DwtFOO-UKuSCRKWFw5UXr9PKTnttdXAgcMDqCX_Q261rhZSRtIQQxJvsZnVSaGKLMKjy9A54M1RnB6cuE_AQu_dVAYEUmIPJcr0KDY2h5CEhPrlX9jKQJS6uJ2_Al28TzlNe4m5SqdV03PSDIZkAd6HIQ2sOq_FKYO1IJqouaA91kMEDQ_l71F66SK94hIOkcG83aMwYOyzD97PpUXB8Yvi5lDSccY0Lc1RpC1XVpao8dfVCITkd091Eyk33ISaw0KfAG99pj19iUsVRcfMssvsEv3hBm0KwRR5fPIli88gExkksswIIcEFFi55rQM9p71rtquqw54pe_Wosc4ALIkANv1AitUmrmvSeUmppRd2Y30NEt4W73Qzw_zs61UqJnZI70idZIsrLUpvpgKdR9nCg", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111476187121211788069\">Seo Jason</a>"] },
            { photoReference: "AWCwydi_DbFXme2s9bwnLGJ-At7OutPjo10V3XKjpFFsIkxTJFHCTj0iJqA0RffDNbctVsY6-5fvBz6LQiTiMNN5BkBXgwngycA0mtIRRXML40zY8lAImFWIjZyzIuJ5YZm1Yqs_gkBqpZMhmmyCbvZ7Je6hkTplxqJAbjdC4fIFlpk_Lk76Ak6WtXaAGYomrBzWMz8PHdwPR7aB3VjNNqFM3fDz0A7C9UR7zJ7txHr7UitFQwn2s7uXcVLSfyaDzuWbSHIiq1R6T2b7VXBpcGPUdOxWEZjyPWPNSfyDMAbfZ0_-Xwcy5LqJXUGLW9BOGmZmoX2-K7LuaZBAvdCIc7tNtJoGeXsj8dnboACYi0VzT13FQLSGplXxUVOP1cAK9nYj7PWF8yD_9VfvRS0gO0X3OEjIZJqpfRwskBTAoUXxx7A0FGBe", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108202971856737811435\">김선진</a>"] },
            { photoReference: "AWCwydhhjo4IpQFUknZoPx7vPa09Bx3gn9O8daFsGGGOnPvKyYqZNAiF1zGW1T03mIV0hYbY3ys0bTqnyLS6EC3975UqVyRsCRM6Vf26meeSV32Avkd2uenuemZfuijke3I1ST4itD8KS3IN3Kqew0x6ZehipmJpGQ_wgON8v0yxRZvEL_ES45qMeQEKvd49bIVG7R0mUX6dhhwH1VKsWYATUNMOuCZEFwUAL_saph7Zt4lQf75zkwix_mAJFuIWOcz6Lsg7y7VpUT0Wxz6HrjodYabI1Cup7yqtpge_1abgE8ht1gsu2Qht7OOAHHmG7o4F3W2djetrJPy19VqUVpUErTp68rcWaTNYeZTrMTd2xfRqWmzM9jwWypA1qHwhhfo8EWz3-ZLkgCDO4ihd9HmJy2J777uCZxwDuQdi1CW5Vh4wdin1", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105937401731978353220\">violet chan</a>"] },
            { photoReference: "AWCwydhApTHOBPvna5KRxLbey8Kc8KhBFsskebSaZd6B9tc2alGizZ0WTxgrUB6k9qQngMIaGPpYD9SnWNVggQokY6i2bCPFRqaIEdEwtEjRBPRQH07fIWfHOynvV3Ocf1TUiWkyzyAMVwP_UN9S_SCEDkNyoZePVzhWm9Lxm5cJ6B3ZCoVz0sYRaGHhWE8Nq8ZkM-vtHBBJsW03V64NWmOITkIGlK9wrqmdDvVA4C7aK3C8ysp7X9i-2pk3UJ0Il9PGyaq3a33ShaxReH168uZFAniTy8Eg4SslfAMTtctHJFVvy7Dn2sZjgKJuUhnvtrxwVnTTTaKK2u0LMxeLJm169dopOFfTBKa5gx8Zccv732CBwL_lqfNzhcT0QvUBtyN4k2oEXaR4ortdtiOQQF9pbqpUxs1mgGVupasKO1mE_R32kLkE", width: 3640, height: 2730, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105579599375184026332\">budian Lu</a>"] }
        ],
        summary: "청결하고 향기로운 객실을 제공합니다.",
        updatedAt: "2026-08-16",
        highlights: ["우수한 위치", "깨끗한 객실"],
        tips: ["객실의 청결 상태를 확인하세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "1-chōme-2-3 Kiyokawa, Chuo Ward, Fukuoka, 810-0005 일본" }],
        location: { landmark: "1-chōme-2-3 Kiyokawa, Chuo Ward, Fukuoka, 810-0005 일본", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.randor.asia/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1042062294205166805", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%80%EB%8F%84%EC%98%A4+%EB%A0%88%EC%A7%80%EB%8D%B4%EC%85%9C+%ED%98%B8%ED%85%94+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "그랜드 베이스 하카타 프리미엄": {
        photos: [],
        placeId: "ChIJFbyBhUyRQTURKJ947varoG0",
        placePhotos: [
            { photoReference: "AWCwydhpP2fmsw-G6ebdPLSRO3sU21zn6MwiQxN51sKhQg9B9ZkUivdSDjHusHVUGLgCRjfqWvqioS2bYd00TWivVvbAGZNtjD1xAfFxKV9y4mrE8gr1IyiPUcYnnbHaSPJW7WirsUom64Bf-fr_uVVy9-S6WOcObcbIuReYOoSVWBq_rLIdTZwnlKfEpLwF5jbWhPudWq0YDUYAA2hNUeie1RTjhflAL68y00zaxb4-0rHPllxd1f4wqVui6z3pzjk_Q5L9GqgGde-cEsiywlw_HozMX7hs7pxl7FJ5ZQYtPx29IuHDP2izrWvbnsgtMOcH9Z9bJlPpbpkYPiiomZn8p5vcPlNA70Le7Scd-BV-nIdYUb0RsyfURF7jg4fddZKuC4AGKHDP0jSWQs0eM9VyaATleByR2gZWidtvRv4YfS-sEg", width: 3600, height: 2400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106817312193149995615\">グランドベース博多プレミアム（無人ホテル）／ Grand Base Hakata Premium (Unmanned Hotel)</a>"] },
            { photoReference: "AWCwydjszcECaD246e4_E3T9i1yAzMg5WcbLLjWapev0XRLYhe7lRRk4Witwhkdi3ld5FxqPQJdN4C1bOt87TQnLR-NaswMjGpjsD4QC993knSAJlGrdr9EnWrD4-1Zdz4Rm1vTAfCWx39kS0TRdvqFLDS2ChCv2Gc3mV0c5hXtmMyUq7XOHszZGKptmFchUqGR6ev7lo2kKna_l3AE7NN0Xeteqr1Y_KSYqOWiPgsOPLD1j1KtxMi-I-VwKl_Yw29LQHctqM-ekHC7Byz1KbbdNvv2wWDiyIGb8K0dabX77ucJeDUGWifZ9c4sdvifAwW9Bf9HowdiGex9dYt-NV3vzkT9lOfayPGAFzivjOWAzkixfnOsmVTvG6CfFU6_5FjS95Y-LJN8dKTdFtZHw4cBZ41JTlxrdgH6lesLBPlVuy7zI4Bg", width: 3600, height: 2400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106817312193149995615\">グランドベース博多プレミアム（無人ホテル）／ Grand Base Hakata Premium (Unmanned Hotel)</a>"] },
            { photoReference: "AWCwydii9yO0AOAPQuT6_MxH7UY9D9i8-QRESs-s0oudnlAuKX0fREX2ucXxBlh5G8MeMDBGUu32ePcoMYYNPf3hUeindIyGtvUcYI0aDM6aESjEfLy8S-FceUo5C2qnXs-WkIA9WTsFmvwk53TRnyOIU4VJ34NXYmQGXOx7MnXOAtOg9yw2ROmrwIqzhW4BpxMAWlvkXW_vxlDW2VHikLy3Wnj-mZk7aQnVCZS_9XR6Ay5iMTyURK116KBDXpil8bodoCLBxUWsWtOhMY2Glmdiv3LKpsSaPxJtvbxMhSl2jgLV1tRNYN1s-jomgYT8x4VDtbMvWPs8tegDa4tZnUqhwNrE8AlqfYFIo0ReVhPf_gbDmcjuRsmvMKyUl8Rnqsc3yhAvh7crbivEEm8GN-apLMOYML-Ok5bDnTQi9sGkdHHV-ho", width: 3600, height: 2400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106817312193149995615\">グランドベース博多プレミアム（無人ホテル）／ Grand Base Hakata Premium (Unmanned Hotel)</a>"] },
            { photoReference: "AWCwydgewfvfXsDaAfr2NBsdlcbU8wjU_CR0V_bHXoYQm98RqiG7q6X1oFtlk1JLRpUwxCLI-dd43w3GormJhgIrd0rN2uY32hTk1tzX4X1qVyaIHSOmAskwELdyzF5Kk5-11XbIH7KdrsuE0oYTHl-3ZO7jWNiKKhl_cfL6tN0TuPUdNdODtuYiU1ux6UG7nGWtQZBrvI5OzVIXWMDq15hIgtp1Fn6gSWlCSVcq8cnZdf332JHujGkxKq4WX5TmiJt7vtvdYUvoU7SOJfusfAcr6lvpsAxS1speKRPBZIPPCiel_cPhj7tHIemd9yLfG36A8k5TfZkA-sGH8G5MCPqj-8BjgsHQoPrvxRB8Cr6McsMt6sqn18OAig59Gy10XOXmqlFM6-Rg45TVRVziZIVktJJU4qFjO8Sq6e35sAkN9XksdA", width: 3600, height: 2400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106817312193149995615\">グランドベース博多プレミアム（無人ホテル）／ Grand Base Hakata Premium (Unmanned Hotel)</a>"] },
            { photoReference: "AWCwydiXf8f7DOxdtbfpVaUHegUwBjL1Bd3D3oMieL91BG47Z9dQOjmSKu8bLaM3uxz9Ez59p-zhxAeTM3Yiq0NSg1ioDDqfYYqoniLr-zfy0U7sJ09MA-O3DMzdyTxdBXAu3l3jM3PknOyRodUdz_FF5uVUfcy36UipwgQrmzbJ2GNh5Mecbxz9S-wZ6Vni7EdPg1_MSOOuAcbhvSgBin6XlIzUMSWZGlXA2kGSg9IORbAxaYvUDTXiwxdE-9SBOD3HLPF2d84ArHkIXhb36Efn_oz5GXp2HMX-2ov5d7KByinS0-IgwkimfcOKgyRPAtLffyKpq36lIpYrajv6k4lM4LwFZSScaaRre977BbQKFWcLTs1YdLdeol2l7qOGobYA8hBfcyrlXISR152a4gPW-BrbUg33oJNi_dhiI9FXFzkdjmbx", width: 3600, height: 2400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106817312193149995615\">グランドベース博多プレミアム（無人ホテル）／ Grand Base Hakata Premium (Unmanned Hotel)</a>"] }
        ],
        summary: "주방과 세탁 시설을 갖춘 가족 친화적 숙소",
        updatedAt: "2026-08-16",
        highlights: ["넓은 객실 공간", "취사 및 세탁 가능"],
        tips: ["욕조 건조 기능을 활용해 빨래 건조 가능"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "4-chōme-9-12 Sumiyoshi, Hakata Ward, Fukuoka, 812-0018 일본" }],
        location: { landmark: "4-chōme-9-12 Sumiyoshi, Hakata Ward, Fukuoka, 812-0018 일본", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://bead-hotels.com/grandbase-hakatapremium/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7899502823459036968", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=GRAND+BASE+Hakata+Premium+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "후쿠오카 하나 호스텔": {
        photos: [],
        placeId: "ChIJW--KRpWRQTURNf_-R1Xyt0U",
        placePhotos: [
            { photoReference: "AWCwydhY0RrLG7dJaQpBXit7DWIgUvmSHbXObC3uFgQ0JZ3nlTegrE9C5j6LnHRxG3Yso3VApydipS4rz6U0v3FrLEyzfiMR0ZC0fTCHMGI1PhMttkUKz5-ke7nqaji3RXUJhIlRE83n6UZHQfnemYBL7nbS76O7Yge_l4q_naiY3czgNAWtugZA2nNhj6tELfN88tfK89Les6vY03eJ00KTSxLnTnHJNFX4bvPD9s5XpY5bzxau07CNF1M1597joOay0ipELMhGseG_KuTEU8BnDpTD3GYJ2qwj8_8XLWhbmR8KqMKqGy5-ew_JiRleRx0IN8nQtlrGYMzWOVRYIHb8XBe1ETIxKuxETTxJdbp6_eipyj6wiUq4EQhx55XRPDaiI8WbCN9ZYTH7Vmw2KjcQZF15xJICqPVDQQJxLPO12Efu3w", width: 4773, height: 3580, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112771409791564661447\">Fukuoka Hana Hostel -福岡花宿-</a>"] },
            { photoReference: "AWCwydjjnNW2fzkxQSLQ8oH2GHO86tDdEQJOFlyZkuN9oCJUaco2llRuC9bv10F8U69ytmBymjOeeybv-AJOalyk8g6HBSVrIxstrDUTNAZbkvxJotWTGOLWzmMpexn9V7-JVhTUV2dqfc_zuJO90rn6cEzjDH772np8JU145qoQreVK1ci7sFsq1L1M-IIvIDb36COITJObhpFQvlVOBYn-i8I1q6Nl8MLD4NYf4gP9IgYE5tgyS80gvHPC7-tkYUABFYMhu_fO9e82ChY2rdy7sSCmrWu6XkLPfIOvexaqzSab9y5eYnBny7udGFqyvFeUbfyUlcA-TMk6IgmxtQ9LTNZjio411Yx7NCDsWCs7HJj1vtqQ1A0BWjhssY5Q6SH-Ugs7BsumXHE-SzqLTkMtb0elI68KVAvTciHBHx3eeBbwRg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112771409791564661447\">Fukuoka Hana Hostel -福岡花宿-</a>"] },
            { photoReference: "AWCwydiSSDDQTfR-wfCda9uR0-qRQtCvrkPow6TxI3l9qGQXRiFDK0bmI7HcTwokgalxBXypGJIkWJC9-WP8NnKGCzZ_CnEm60gKHZMfpvBmHGCtDHTmmwnRRo984HRuVSIrnjvmaFUJrAt968nryLfWiUQGD3A43vkXqBop08X6uIRwWZOXxD7SOJTk249rmK3bd6h6Z48w6DcwGP_kKGrv59k2RgK1QTIu4BojfI66jtmPuiF7FyVy2fWZIDLsqzkSsHIMnL8trIT5M88we7VOeDAkFqYTxgH6uConlwjWZYOQYXtQVA8Pjey_XFjGP5f4lj6W4QziaGeMVBxaI558qTHkN4dPiRUPi0ffrwS8DU8XtOVlc4auAvLGJMkDKFNHn3q2d_CvZSHlkLqbuzVYaTN8Oi07Bbpl0OyrLfOU8pDevw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117576563988943863934\">Marco Lin</a>"] },
            { photoReference: "AWCwydgI861vv_ZifJNyDBfHoGvGxa64Py8UvyO4bzFZCs56LoxPZkaFd7en-DD7BrKOtZcprZ3pxg54-bYubiaCkqix3RcHCnRTTSRrkfEnHyco2_iI8up8Ur1KQ5rPYh-lM5WkeTENTsfwzuyRAggueSpLd2a0y8a34w_qiJ7UotjI0suFvubJyX9CYKFZNqQsTBQON_DhN_yAS9CdfXHyc2FDwiy3bSJsEJc1e-MY2ImFERRU1KW9COXPmahVD1-UJQSmFWuoy9zN6YXJeG246Iy9hFfzv2Kt2cx2eUokdFNCs47obM41i6bWsr89numcuhbpem7YMXAwOUYivrDnSUS4DwKtWWD_GHx3yGnz2I8DM39O5kMPihn3Bhfw_mmZ3TftWzldgTsMw1p4jgzVckWc3llok2qjVFd4ztIVU35ZDw", width: 4057, height: 3043, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112771409791564661447\">Fukuoka Hana Hostel -福岡花宿-</a>"] },
            { photoReference: "AWCwydhhOxPgJFgqu7cdQsDmR6QlWpCypTUUjoyXelV-kQtOEWaGcqGib7Wy7mg3qVJpwUJ3pQFAxsqC-mS8UMgsON81vOGKoJ8qt78ZZZLPCctWEH7glfpjurUgSgUlNf-CBqpBdH-uYcTiSz-vldX1_s2CFkAw04kkZRGcaCAiBki0-rqN9Y36-52oIOnagimchQ_S65bJ6DDkMLWTCVGqhzNyinIwT4wPBZf_MivTkUliRFfUu0g3peSLJd3yCUX4KfmYiWa-y3jEpZ-KSUx8-j0h41_-MyZHKG__gCfe69RjLbUjDtghlX6Y0p43VcHeWCT7yAKFmT3yk3rzglld1tIc7D4lFQuEPVJTsqW-OByAJy9yR5o0xDn3Ab8AyExHfSZJXP-q8td1vF6YXRIhx5af0ODpyaJSk9UItY-gfEGHtQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112771409791564661447\">Fukuoka Hana Hostel -福岡花宿-</a>"] }
        ],
        summary: "편리한 위치와 수하물 보관 서비스를 제공합니다.",
        updatedAt: "2026-08-16",
        highlights: ["좋은 위치", "수하물 보관 가능", "넓은 객실"],
        tips: ["엘리베이터가 없으니 참고하세요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "4-213 Kamikawabatamachi, Hakata Ward, Fukuoka, 812-0026 일본" }],
        location: { landmark: "4-213 Kamikawabatamachi, Hakata Ward, Fukuoka, 812-0026 일본", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://fukuoka.hanahostel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5023750357449113397", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%95%98%EB%82%98+%ED%98%B8%EC%8A%A4%ED%85%94+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "호스텔 토키": {
        photos: [],
        placeId: "ChIJnRI0K6WRQTURkXooaSPst2s",
        placePhotos: [
            { photoReference: "AWCwydgPdqRRPGWitfDrkRdXwnuieQ0JoQ0YFo-dhkZCJnqkqOnhUN5xsHzjKe59O3SmX83JvTBQ40jKWuMEPAgFMCM5eAirUIVR0TvfPXh_1Y91KCuMPXuaAQoQqOSoGWy_QGVH5zWy7-lk_eIVIUnRJkk8Nw6YjRfUtKJjVwp01Hf9QtLvXW36tkrz-CKlrXMB3wNH11pJAKkK4CFrmhqgRrEHRibLJm-MYE0o5vUWmH1zpALtlTCam-d_q7NZIGeJdfpr590M8Iq17EGBY4jqWAoHXQXeZv1AbvxmKTWMo2wFzMT_X6Gh439ejm56ZUd0vAMOPvIXfYy3KcmtgFxPVDmboEu8504KfKSY4b-9Rahmi5VFal93cmXBneNzkPhNzakEa3yoLcw3aaRqPfuPewk9o3J4GJZGObaH1ipo3psJFg", width: 2000, height: 1333, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107343223590003438811\">Hostel TOKI</a>"] },
            { photoReference: "AWCwydgUQQKfADJRvCeJ46R_twCKwBqlg1k6uaLYLrsOUlOiNxDIBUoea7WgiYGl7Kw_lXGQBSLV1_lSgmf3Nn7oTFW38V0cXQ1T4y0F_V_KloIpr98zjw-IFTaBSaBYeyxx6ivvS5vfEwjat4VKMePowLG87H0Z4cOMtIG1w-A-uLZRHzfA9pczD9xDDauYu62ayV8zPtguWxuKO2OZ_-JJmfn1nrn5pKBs3Iw4ktd971E0XBFtbQD_9jI1PvfMtWyRqar3F_kGUzWPY0lIo9MswbyHEBkym2GCq_SBFP3DqOX8oEU4LBHyOdp4va1ZJ887fVtNr6OyRug6quNKohRDX4U04VGw54ZFYGo1HsUnjgHVy0aPtrAGKnbEjBO-OvN7b0QxMQuno_4TzZuFvFSOnHW8pAlF1KVu0XFOmrNHI5d5xw", width: 1000, height: 667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107343223590003438811\">Hostel TOKI</a>"] },
            { photoReference: "AWCwydiN_FnHvbkfC_0m4a7kp3VZ7amPgesVwpT6D8Mhbq8a98nt6RlpyOxte6rIDjMbaHzksdzhP6ZN4nVRiSIeGbOrHmH0W8xKpTqs2JdwAcpyY58mKYxm6HlwHiEl82Dwgu6KlXQE_7CzUHZP9M2FqAwN_eTUJ4EAx0NbhaMi8Dv03NWlk7zJs352fdSy699BH8gZgwJ88BtA3l4BhB2ltU4OYjxJJMZy1YhfZgML86eN2o5eppmAF5HDO8Kk6ok9iiqLobWu6ifptNsuzKWiZMOK48nQhr1MKG76k8EFdjT8z_1OOk0O2PiRIYtLNw89Bj1exe-H9agos5oVgJtFzatCsFn44gvVXlMriL-NmB6nWpAudxQipq2cRHnhN89F6SfnqZad_z5dDuR-s44NUTlHnZhrn0u5_kop0EOcXu3_T3lr", width: 2000, height: 1389, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107343223590003438811\">Hostel TOKI</a>"] },
            { photoReference: "AWCwydgL99qN9fQBq56TuHHj_vxIvmZ_cJaB2jG6TBvFh0gr5DuRtG_6RLqO21lvOozASDWbEdfpFl8X602r-4X68d_93jUA5x8Gw4AF8v0aVaYSbSUo4NvtjXKuLpq0zo4tXxbZGrhuK4eIE34UhWe-8w6HpFzi-2vqMAW8K9nQndB-xksZmMmPMqVxzawObkMhYf4rGs1WQYmCZyi6mNryvx4Ki18kJjYsVCB97OC0Ygocf5TZLpdJYVh7ju9fGbVz4HGmg2lhutygh8S-NfAJQZHP-SAsVhBIvBUUs8rwNEa8OM8tX_NzAUoxK_Pz7jPWRTc8VaR_vnHxuG57zYZPvIsZ1OIm6F-HnbP8adlR4ZymIMX4ZP8H2ZQzyMLBc9q1kavXPH9F4bfK3yqqjR8BRHXwMxRuU086TCWGjf3EaJqRxPyI", width: 2000, height: 1333, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107343223590003438811\">Hostel TOKI</a>"] },
            { photoReference: "AWCwydhsqKVtD0USHX4BuL6usTIOt1M_fHaa40JyVNE0SzwC598Nr2m0PFGZD7V6kJ2ZU9vuxgWPOKOKx3JAEsfuLw7u5St1YDFEMxcCB93yfgW4m9qRUZHD-eOuLbOH1VCsxr9DpXI_a0gqSKLXc-MgIiMAnnhhQJLRBQjNX5A0kho0sUs52M-VzbiGlbLi_pyfOt6Rm8W-Iwc9qMHbfMskFw5v917TFPkVxer3NXHyoD6rtke5N4793IH7yn9I3b8uS-59p75RHxnHQUbHWZRcl4Dm4mFV8G3VTniqlwofQBLUu9hQ3oMXsbNsSfIrefDcwIZgWbmwcJ1Yc6DBE7EwrQsJX_l9ivQrrwZ_vFksBWG5hdPs-7kfGQ8Y8oOD09W4vRf6KRWBs9AbATegYgpxiyww8W3-AyZuBxmjm7qqdCKrmQKp", width: 2000, height: 1333, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107343223590003438811\">Hostel TOKI</a>"] }
        ],
        summary: "높은 평점과 친절한 직원들이 돋보이는 숙소",
        updatedAt: "2026-08-16",
        highlights: ["친절한 직원", "깨끗하고 편안한 침대"],
        tips: ["주변에 편의점과 슈퍼마켓이 있어 편리함"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "일본 〒812-0017 Fukuoka, Hakata Ward, Minoshima, 2-chōme−2−２１ 1F" }],
        location: { landmark: "일본 〒812-0017 Fukuoka, Hakata Ward, Minoshima, 2-chōme−2−２１ 1F", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.hosteltoki.com/jp", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7761932119628610193", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%EC%8A%A4%ED%85%94+%ED%86%A0%ED%82%A4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "위베이스 하카다": {
        photos: [],
        placeId: "ChIJ70ZJ9eqRQTURugXiF3UZGws",
        placePhotos: [
            { photoReference: "AWCwydgg8uuMqg-Gu7tgw7WChdFttIpbcDO0BtN4mspPLKUxB71iNMrHzoC-0P1l2lzPcdddixu8QMIMp4BzQHj-puZZaboVfvykOMYS6-0fOJRZcOP25rUR0VL-c4UpNLQXd1lu2zIorVpgWcUuT17-4hpKaO69H4GOO-aoh2Aw8G8Wkxq57PKMBp6iy831_n2dcI24pZ0rRID3u9jyt7LdVwUs8EkSmdFt71vYRmtcp3K5lV8Javw3H8mPavypogkZLF1R7lArPKYjfGJNK4V1kdw9RpLNUB-tD3M8b1gr__3YF13j_69bqfSbZymVORIwHunRVychJCIe12imlCT-L6Uq6Oem1vj8c42D1PHoTorhifqW9g6IuQQuxW2uBXtwVtwhcvGSc8sZG5rLYTuCAM0nnW5yjvOVh-aoHYX6uso", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118239301195787434708\">WeBase HAKATA Hostel</a>"] },
            { photoReference: "AWCwydhhuAhyjtGjPG1ZHriSRc_B_JnkPw1mTzwwtj3DFCh0jKg2QMvj_EKDleDHYi3RL7IxY0WjXpknlPZ50k1fpmndKcRt0G1s9GUHTCTDA9PXWMlTFjcsPMQhFeHsFmkAH19Owdu-lElhwyE6DFDLhNZsiGAIfp8htfKB5-_tNwdn0vHq6G8SaKtLp36eSO-Re90Hhdz0ly5EDxJNp4JWN1llXO0d00alBmtcg4ikUGy3Wo0T9IMCFGtK8YaSZ2jcKzkYIU9-YC3DZGPGGbExvGc1kApWNcizLIE--pcswoPJ6F7BmslX-_H5n_1BMEZL88HNA49QKj6Xd5M67AZc7XEmAY0SsQA3EozQ53WfHcqrO5PLxPXeD5Zh7RrQODn7xVc_Km1sOZ3a0TZYIa_SWrcnbHTM8Y5vGvG0KK836MnVhQ", width: 4800, height: 3189, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118239301195787434708\">WeBase HAKATA Hostel</a>"] },
            { photoReference: "AWCwydhafnQ6dexCCLdl6X_aIltzoqQyaCd4Zjr8Tq3EA_Zr5lr2eLUElpiIdyhDwD07Xl8ZXAf-p0FKWbzrmlchn_bQQxnNI625fJvgTtdRdlOnEwXXTgaOZ3kisJIVDh9t-jGM0Oe-P_F5DSy9AgXYi8MR9GF981dz1oxGdzFEtAtEv3LLsWjpgoHZi63B4Marz814Jd7pwo0G_G8YPbUs8BQ-w_W-RacuKB_qVPRbggDtWH1aDZkmbCiHPTWEs-3h-_PUgFErg5p5J2efXc5HE66m1N3oEX8FtmjVlleoK8rI9BcXXCSlv5fcQKnZLK_j-O3NEQVYdPWd3Q4Je_SjY_hBdpefTqxyKGgp6tDc0P-dJPdZx3jjMIPA1HIS7z0K0VFhgX4yCxIIkfjapTyVi0mXqhHdjMZRAlRcXySh10Cg9m1b2uLgR7LLThUQnu6R", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100363606289413664979\">정재훈</a>"] },
            { photoReference: "AWCwydifxSq0gy8PzxTMxOFvIZWSrzDp1FPo-89OpBGxXWD5t_taYr-vthZijkv1-j5vG6QWVcAP_4iGRnNP00J-3BVDEChj65pz7TwnCgo8ACdIkQ6G464J3jNY6-jkqT6UUL0QbVX0ecFeXRhNezjnWBJR-uGbNKuBxlYcbA8mb6-_p8Fx1peJI0kHSqQQ519a4vNLb3pxZSSk3CIy9wIwnVtzt5Yl-flYD2QpQvTymzrnwKvebwKDshAluhDUAxKwMGch7XdF8HGIVq7KYgH7xeTWsn6PYbH0FiBnhoEn9tTdSGgF-HaORjwtLXpi4aHHQ0xcWb5gNSCRnuNQEFpYZObI2IY6GfpRQdC5Cr_PiLt-DG2lN5D_gaoJI7DQSx-R8MG7N5zyr4uvna-kS6nWeN4fSxdlaSuKdN-gbFCPBr0arA", width: 4032, height: 1960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108406084500051421924\">Helen Yu</a>"] },
            { photoReference: "AWCwydjXiDiOkvB48_Fopse_fpLYWV0bBoYzzq7kCZlh9q7RXZJbizE0fWPJt34DIWXormNld-zpA0ei8LffW4nlIp4xGA-d3AJS_FsZiiqq4SXO3yUF9LR-W6c2N-kMvmcI5llIFSL8F9UMJFphq4cOEwRXKDYDhVMN3djyCFnR2OACNEb0UBzabhS5yUjA7qYd6WPr8pUu0T1TR65vS4NWOFnEwIQqIYqQu9uUlHoz5uCaHI8VHpprdM4pMyGnx32-FKIIguzjDAEiV79Mu3dWPFHB2ZceE7k-KDckHKtCPs4Lp9c__0E2J4wNqjwwCOFksBNlkQePZwH_KGf4vYms5PTO7XoqMkfx7htXG3t114UURdfKzefFpT9r7ECRii1z9bPd85XiWsLaJ1XetJyRxhgMLsUAvBBJKs_rKBOaxNPz6kw", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118239301195787434708\">WeBase HAKATA Hostel</a>"] }
        ],
        summary: "교통이 편리하고 청결도가 높은 숙소입니다.",
        updatedAt: "2026-08-16",
        highlights: ["역 및 버스 정류장 도보 이동 가능", "청결한 객실 상태"],
        tips: ["이층 침대 이용 시 공간이 좁을 수 있음"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "5-9 Tenyamachi, Hakata Ward, Fukuoka, 812-0025 일본" }],
        location: { landmark: "5-9 Tenyamachi, Hakata Ward, Fukuoka, 812-0025 일본", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://we-base.jp/hakata/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=800261349490951610", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%84%EB%B2%A0%EC%9D%B4%EC%8A%A4+%ED%95%98%EC%B9%B4%EB%8B%A4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "네코쿠라 호스텔": {
        photos: [],
        placeId: "ChIJgyABP9yRQTURv_aT5LgCCDA",
        placePhotos: [
            { photoReference: "AWCwydjvADC7HkCdrNFLnwSA54jdI1v66qnlqiQ2r0azj_IoCFkWjeddjRMa8lRL274dKOBHtQTUk9xqZrUf-zs0i_zHrRbH1wsLE5o3DQy1ZE4M3c2zZn4HJCODG3b9GeTva3Y5pVGjY7rR5eB5S1d4oXEMd317XripF1d2Ff4akqjfa2PKI13SYIzEOn73vKztWxFYfTHWg6gNoptO6BcwgiyyV1kyOOJOQBz-JZyiL8jAi1rEr-uV2bzF8A9ioSJVC_kcHaRutOcJHXlrtCc19_TI79xHVoP7udgMNuXxot5K81H7uuAGY-6A3M45ppb2AY34kKifgAFoikmsVr_khS8bKEmQNQin-lDMaupUuxrcNIZL3zruRDXMjB0v6FjAKoKHKis2jiSZYY7PnNCWaoidVyy688fIJwP-MK4qnYPrEg", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101963431156640837908\">朔望</a>"] },
            { photoReference: "AWCwydhfT7Hbq3o8UsD08RxIuQTVtnTkp3FzvPh-uJZNI5QZSJZj1jYGWJahR74xQT-hxJjtVNBesOuiZclPzd8wP92LYnTDYKsMjdemkuFaf_FzriRdbbSQ02IaGJkWiDbS_y4ctxPuLHgZ6B0qjkLnUcU3rjnwIr-CbvtH9ozH0gD4VqDsYV4mHa_m0BJLYwHYw2x1qMnI1zN84paqjwUn4xIao7p7lVOnqeBJ9wauxWS7eOL5N_OPusP0c0norLxcDSuBVo0DC9UKPCQFyqEoBQQx_Ukg3Zdv2vS1VIBzRczQoGMN7TM9iW055FT6rjJUx8RwzEXseHkmpZQ4tmO_RjMy3LEADErN-cBeY45YaV8SnihZhjRXXaxX_LwWGXP-WimtkmHHYfjyEfQGK6PPmdaEd83nS7PvA7MGbygARA3iNw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116597843170102329352\">Joseph Kim</a>"] },
            { photoReference: "AWCwydiF9TfKLPdQVcoy8HhpZiVSnHt0UmDqHsZOXyaeCyuNLruuFMqAePN8RiD1bm3uCsly7p_s7wU6LOY42nZDMKLnaTy7AAmkIp7BExL5E55h8wzQVCv2_7iEyollLyCup0ZTLJBviRwRfya8CJMpuN-wLUAVDWfgGp4uQwIKOgMi60kzx1toK78hTXEgGUgYBvAkzeQistF6iMP2q8HANOUtItz8OIKaXf4gf7ZxeU_nQ2nhBbJuw9VEDDCnEnZuk0XM_8oxVwR_EhBsAHA69wlhxZrqoTBZI1IgV3OQgzmcb9dZF0KPWdV5b53CnT0ULglwr3k_G_1nF0gU9PsM9nCaX0ZyJu2zN7qUFHynWnXJmnLGLK-FBVxCwqxzCf0RN4y7iSBmjjsYOrwMOkKQ_RlVeRRWtaQZKcyDyKmu0uDx4daZqBc79nVZW7hjdWul", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112029982050241262387\">Huang Nikolie</a>"] },
            { photoReference: "AWCwydjS4zNGsZLihGYv-Z2_rpL6dC5adNcPPfZKQmxylnVIbcEpLmzLKV05GCWclb4Mq_rvWFdJBXJ0wxqJXmnBrYsGgp4jS7wv-elAGK3xAx-1kgo0DZPcZzHqwUjFSA1RNpyUVB6mfW8d0JAXlNjumFLsQQV9pO-ugaeN_F5DnfVeeuyAcdU7MCfaIplNfai69T-tvu9GQ71IbsQnNjtpa9ACfIGn2raD6Vv3wrSB2n1WQUGlSpj3eASjkfXvfuYkWf1FbFNNIH0F9InG94UMbzJfeCv2RBp2URA5pudCShrq-yEGKAAhlYvjm3SH3ScNLSYW79S00_WZxI_IoU7G7UEfpHNpm74HKi2k1XERNh6s-St3fPWLSY1nNOotelFkXlWSF40iwdIMgyyht2PJdcxNTP5vx9KDGQKRgz3sZakIaCo", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113563310934297112141\">Victor Cheng</a>"] },
            { photoReference: "AWCwydhbrUsky5lFhdhGpDY_J1_SApp6f4cyp7h3e-ZbZAf-IL32rSMHjqa9l7o9J4_CRhKmaLrG6ksGSG2E5twua3U_lY4DCDM1Hs6FvDbOdSKImEY_xSLqjCbRj-eEqQz-RTMLnvgetaqgKGrs4UxHc_wb3NZHuD9_uUk3oTZD8wdXEAFESVD7z1kqJoVQTeSmwDx-NV9z0aK7NON_evYhOk_cAGKcb2QzeoFgyGqKVV-YX3x85QpLtincMwB5len7tf_4HanaYWB14B9R56LIiTj-JnrpYRwx_GuhvSwL-CIKT4uZljc2bdzihw2HlINf_591mpt0GRmouQ7_Ue-6ES8l-9O98pc_Oyleeb3JMtsvGlrYfz_o0uXGI9sQiBphr5CnGdXZ3HLAGPXJthjYGJfq8UZOOyV7fSC-HoKF3cODuFtvQEuif1B9H7eOrg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118110743173366807910\">Ann Diel</a>"] }
        ],
        summary: "합리적인 가격의 숙박 시설입니다.",
        updatedAt: "2026-08-16",
        highlights: ["4.4점의 높은 평점", "161개의 사용자 리뷰"],
        tips: ["운영 시간을 미리 확인하세요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "4-chōme-7-86 Chiyo, Hakata Ward, Fukuoka, 812-0044 일본" }],
        location: { landmark: "4-chōme-7-86 Chiyo, Hakata Ward, Fukuoka, 812-0044 일본", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.nekokura.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3461019306766366399", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%84%A4%EC%BD%94%EC%BF%A0%EB%9D%BC+%ED%98%B8%EC%8A%A4%ED%85%94+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "게스트하우스 나카이마": {
        photos: [],
        placeId: "ChIJyydJIsCRQTUR9efPoc8ZTpE",
        placePhotos: [
            { photoReference: "AWCwydjioSY4SIpVLoHLpbxlWAFnG5VjA69lIiyOKwycq4RC8V1qumgHbfP5_2QNjam973QxUhFf-2RtqSmD0iaom8ni9aVW3YwkH82WNDTebMdBCYiX-RJsqabvmzweGk8O-twPQZo3REm_W8ZlnTsSEzNuDAPC0thdDdXuBXNyUiTzLEGk8UNHQLVPBV-7lZRy8SUbeXQCEBdjELeD5N8At6Da9wQvVcIDaf1D_UGkB3sS9xfxhwmLofLGqbHJ9gHoPrq1G5MYCFYaWqSYlDo-VEdKny7DbZjQkx3ETvUUIUPJKywm0Emu6BF2EcE4gxrCrmI_xS0vqk_B9KoHymWpx3MRUGDW07xX4xLusEA3NJcr8Q6vGWzbOVIoIkbZTylBquIxdvRqV_6jBVrO3u7bQ8a8wRCs8Db3zSRlhxl-vJhnAiqU", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118117261935719179967\">GuestHouse Nakaima</a>"] },
            { photoReference: "AWCwydh_8aoCybZiCnuBiyYHGV2wgTM7boCEbobTD_ntdDoTSsnXiG7GkklPXoMFbI61wsTSfw6Jaz_dTVgfouDxR8jFbM5c-HsJaZjjgQI5mntQ2opkGh5ucujBxZBuQgbp-oK_v337P3efeVcPZqEPHWWIAvHgERUSiGfH9cYpYVxPemHxOiDXzc6MEZabHdExYMtyXxz0uwhDTbeOg9XlDvKjIUYycWP9RSbTlUeRzYbuAqXvh89bv9U4H1l3mPAPneOpy0YUsYCI45MjOdupoIzCmJmu27GcOgC2z7P6XUtjoeKgIKDxBRbesboeSbh1N_5em9obpwahNJF0LGd4tLMjThrhrGSVAEZ_WSBKaaStFkq0i6bTfJ0xpA3TRaYuhli2ax8ocj-puTmnb5Hu70JeYP60LEgToIp2cwIBZ0U", width: 960, height: 640, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110532820923244625471\">Tiffani Chan</a>"] },
            { photoReference: "AWCwydioxy1ZT4_HB3CqgwhAh95avNaVW90wwiYS2hVqIwfGTvOnPJ2gS2XogpgI9ho6myQGP6Kls8JYi9MladCfyRH-I4naJuF9R_u5N1ucDZum0CENz6rlXZuq7uIv-2_fmKsobYbIGez3_L-nykZHKIwUL2aTKxF1xr-9SHOGa7W-QPOfSt2VX2PrMi89FHbRJTzNgn_QI417Zs-9A8og93U0ddubugeq-rbz9vV9_HSXcewVkVX069wY9xWTSosBGnJSufkAeoibJhNpzE3TaspVIdN3OMAuSe7UKGS0antXfmo7L43xg7Y1lPwYD8bzSalh56hepJfhHu9dHaVqoihX6jOCu90JDMUPD2P-0V8zpwu-r1fTEb2qU3rFewYkC1N3Asr2hLsOrtV3i92G089AxVQd0ceWlaDPX-0tzHg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108771653712414116726\">FIVE- A</a>"] },
            { photoReference: "AWCwydgp1AKRW7nt9kg4-rU80ns-JAnp1i4RaCm3ozB857U2Z8jUNwVTdifruCYpX8DAmfKG7qdOe6yxE8MN0kxM4KXOL_OdScdqkWtsJr_a5SxR8921kGa4GOGGqd3bZztc3QeCGZP9vKhfW_YrFtskvqBmhq2pce50Q6NOAYj4ELYcTFD5MOsg_zWfUKanftW0aGFRfQ-j4Gfj5lq55a131H08_Zwo1kcAvnLSuWMS0LEcxFsxD_dkHrNK85a5qO1kisrPF1TxX2iDyAMv5t71WUELUuz2GnTIeZRJIvruE_gyMSzNGevCNxJLudrMe_8dNgFXbXXNvJupgL434SUHhM-qiOG6H8U-2LxpjBncVEzVuUAVoRgGNRSiO0yVqIjMgWeCqyZo88dZiilepC7LdaIMewadxmhDViiAuC4OzQI", width: 1616, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114823280977903423730\">劉冠</a>"] },
            { photoReference: "AWCwydiNa8dCg99GGrOGAzq25pCuCIgZGkTImIe7oIY-YebkWxePNdVOT-X77LuWZ7P8VZpGLRcqZfVnf0Bv4796_5At2mHItC6l1ep-cN7ERfI2nEDwJXDI6f7vz_pWV8sYsJaALLOKhiBpxMQJVWDcLxFCcfZSYLVz7bW-MJNvKY91DdMc9g3wm-_tejuvSUUZHUf_Pz2WFGXGaJY2S-6CTa1oXB-pVdxxzeMCLz9CN4YVqCFsiT6QmottLIFqy35xpWeGEO-jVpFNCyrxXotBQERQx_vaUaPKPaK2Vm4OvMzY5P6xLRpodVH7xbc8WDVmBAMxq5OrQQM7b_h133YOuMle2Gsh5rnb-gJEIIZ_t5pJwJUclOUMMG5KhonNxFARRT9BeL-iEv5LNx9FfXjIQw8dsiSr1vdD7P52n7uMqgEZT7I", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113314978221480458807\">陳鯊鯊游玩</a>"] }
        ],
        summary: "합리적인 가격에 깔끔한 시설을 제공하는 숙소입니다.",
        updatedAt: "2026-08-16",
        highlights: ["청결한 시설", "친절한 스태프", "기본 어메니티 완비"],
        tips: ["체크인 전 미리 연락하면 도움이 됩니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "6-26 Reisenmachi, Hakata Ward, Fukuoka, 812-0039 일본" }],
        location: { landmark: "6-26 Reisenmachi, Hakata Ward, Fukuoka, 812-0039 일본", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://guesthousenakaima.wixsite.com/nakaima", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10470334563246663669", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B2%8C%EC%8A%A4%ED%8A%B8%ED%95%98%EC%9A%B0%EC%8A%A4+%EB%82%98%EC%B9%B4%EC%9D%B4%EB%A7%88+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "후쿠오카 게스트하우스 하이브": {
        photos: [],
        placeId: "ChIJbVOyyqaRQTURnCeTlh4DEQE",
        placePhotos: [
            { photoReference: "AWCwydjXJ9lGGy68eWf2pBubPhY2EXBif-ohRtvyYAdcmt-SKmN28BkL6_S3VLAJK_V6JzIqHLaL0uY6Gh9bkv12IhHzvBw9oErbLin7KEw0vQmG73ffWQCqIs3sV3p-xf2VNFaNzy9KLwOSWYzyUH0luy0hQPVGCahEoq-0X2FjPBHDB69tLbeqFJ4Z_V3CNjkgZ2dHVnnpxinjGG_Jnwhf0YQi699ZnCWb40vjuxciDEPYmn4Udc8-7IHgZyh8VIfcxV7H8M5b6BUEIIc4svfuA1I1Fs-FXiaUqIWszrdRtkazrU9w3FN4-nJvh2krixOeAAWy64nIIVPITeTfv-Mo0M23T7m7hK-aR_vxnXfzFT30_o9MtwfPVw8RhLB4W4KdNOGAaeT1LgmByOXAYUS0PXAj66B00zNC9mPHOCBjcCBcW881", width: 1568, height: 1044, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106495197746223258107\">Fukuoka Guesthouse HIVE</a>"] },
            { photoReference: "AWCwydjyrwtHwPPjtu1CBdhnym_7PlDDRukSQetAS-sx3-25HpXZMr4nfIYNHYZVRPOWTeqVR2s4dASLoM0O5TkgtFh407l5SqTg8QfBdUzznDWZxdSc_3ASQX9aZyRNNbs2eNYbS6mxle72aDzMnzyhx_GcPk_DYO2Dn0iLEW-BUm81XuQS48hkbXTgc9jiXi3vk2h4k1HyXh4zYqbbQVgHqyD9tZNFrfRAYlq72i1uPaGuRNOQ3uNb07wmygS-T2MnGm-fNiEKcB33azpV7b9GbOgn4l9n0ZPprHE13GXBC4kDvpjWvaTIRML8XlZhYB4vk3BNRWkMLAxJrwI2XtG0Jf5GVI5Nch7w5Vatk8iUPsd-e24zTd3Ga16hPezbWIYOQkvodqMy0y6EwPAgyn-OTYPNOLfGJDd63EeSVv20wqEuen64", width: 1500, height: 1000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106495197746223258107\">Fukuoka Guesthouse HIVE</a>"] },
            { photoReference: "AWCwydi6kG0YvPLRx56BBpNudgGbnptjimoThMXYmSXYrGC4-JZM7MPJ4j_oAqDYLh4OV5t970b_Or9pNyYkzcyWqAiv8vBBFb6HqaGsgU6cxRe6mR9z3O0rouVPNup1WF9X7I0spttpWa7Z0z12FPPZ2f3BXRSYcLa1X89E10TvfIloO85Bg8aqAme5jQXN9dlYezbUgiPmDBFWfdPenassr9-w5ndP9IbCq4dcOMSlN_VQRQqwKqRu0v7bp6mIbS0IxDyQbdqOb5Sa0ZJ7oW20cNaPZRppATcOQzhmuNk7o5uqKBxZ4lMNHWd4OdEQqAEXpAS6HCaySOG5c7iER7reoxpPjIenkHc4QDEQyfEUoPT-IroFjYqYJm6sc5cI_jQZj7EU2QY-SdP5DNfcgE07P9-QwDAkDu5-vBUn4-Qr9ZDz1wRF", width: 1500, height: 1000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106495197746223258107\">Fukuoka Guesthouse HIVE</a>"] },
            { photoReference: "AWCwydiFceIgYdOrw05JQs__v7l-8SQssqRYQVov_b2RlAjD9E8A6pWEqfxm3qBLODbeTlhGrsbjeVBvP6JRcePwQwrW71fUUHvh4viFBLMxu-gfHNmHn17U4bapuxgecIPupsKMlz5Eesh2hndxZc7SF2qe_dlcmUpUGiEw9La3qNJde_TtPTvTq8KjfZWwyiZUEJbGgfADdm93TQ_Fnc0Axdm69h2WGRV9oQQ8Y-5KQdXjMBXouy6zJEHyn3ddqrrtNLU_zAD4eC2rL9kqYFS2F_95ahIhZ2QquTJNSIWDNDHyFm9yLlhrd8GIzch1xQKpRfHkxaRBJe9wOJx0r9m4RGuypl6HF7y2WXGE27Ptfkd2GOboESxRUX7VtoOHN85gEHinQfCArv4E8blGUWfTgSYOoMoHWCIaZVYUljagr1Y", width: 1500, height: 1000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106495197746223258107\">Fukuoka Guesthouse HIVE</a>"] },
            { photoReference: "AWCwydgra8vnALlWkSYrPZ5UmzChWceYK94JVCSU6MhlFcmsy5yhPYqlqBfvpeW9rcWaEV0xIFCNvRuGpd-qoO7Sz7xioRGSiqvuMr2CoZDtCN7uxiO6Umvl-qd72CXBcpikk04xGHfwq89VIVBG6sWw1nNzsmkwWgyWH6pJ8mRiV9uFmV-PcYKu1zFU65D8e6k7bhFfOmLau3aKR0CSE1SYIDh2TIBQns-4TzQKFyi0vO2eVRGRhzJYbIZ555INiTxqLLLrSd89oKVMHxUXIvtmnm6r-x8TaLytF9MqshbwnTtyXqqitpQbluK-JoULYxnnojwBeEhQXep30QMETbfQ3-p40Xtr07quJQ_MGPTorEEJ2w5cVHgHpOo1YH2VyzTTX-bdnKdGb-9R4wpAjaMSzguUq6fLNyc5O5eMQwAcKY5M98iI", width: 1500, height: 1000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106495197746223258107\">Fukuoka Guesthouse HIVE</a>"] }
        ],
        summary: "시내 위치와 다다미방의 매력이 있는 숙소입니다.",
        updatedAt: "2026-08-16",
        highlights: ["저렴한 숙박 비용", "다다미방 체험 가능"],
        tips: ["여성 전용 도미토리 이용 시 프라이버시 확인 권장"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "4-3 Kamigofukumachi, Hakata Ward, Fukuoka, 812-0036 일본" }],
        location: { landmark: "4-3 Kamigofukumachi, Hakata Ward, Fukuoka, 812-0036 일본", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "http://fgh-hive.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=76846098552137628", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Fukuoka+Guesthouse+HIVE+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "후쿠오카 게스트하우스 지카": {
        photos: [],
        placeId: "ChIJPTU6dpeRQTURQRBNvvZNouc",
        placePhotos: [
            { photoReference: "AWCwydihSW7Rt3Cnyx1K5lRuiFowweZwQoRpfvwhTviVIef0Fapk9f2WjN2N-zli6cTXXGbBHHCQahnD3C5wx1B4L0iCWK_-UmkU-mryBE24cWD-hL1Tb48ZGbD9GfrhdC-1BP5OzsiEVE6SZJYNQaYIlRFsziX6lDA1fu3E9Zmacrk9Ah7fJmQL6_6hIxStl2HgmYmNEXfbkg3of1INMTAuhwyaWQFni-Xmzt1lzsP45tpVYrEYY5yrhRGe9TL6rFugFCONBr3hmM-JxlDOq8Z3vaKRK-TAS6gd3D_3RsbdH71Gj9sV7V9SO53p8FHC2ZZnQ-7sCBn66fChzhKsy6lpeslnendPFcjBz-NjVZ7pmIhnCX5Ecf51DVz-NxP8Ra-27o3r3sj6YzE_lm2Yuh1tGlB6Thg_q2hYVv0Efvfpe_vul8c", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111216874788421195765\">福岡ゲストハウスJikka</a>"] },
            { photoReference: "AWCwydjzzTn7ZYV7ch6tZZUs-CzEOLIEpN3olg0Aam9L7JexaAXWb-G1lqfe5xQvb4sL0mZRjfA6WSYk9azqf8ZxoeE8LlC_NsOokewE9N_bW9mdylr1q1YCe5Y76tw9tb8fB1hOK330UbZW4IWnHSgyP4rxcHRxoLSW5PznxuyJS17jeulcv_lnXOqWcfw420AmPivPE5Ix0nG4VHBg71x32t5uVgReEmpoAdp4-MjKFUtmShAaNqeqSc2zH907BEGR-xlcVpwxzUcCjy3QQs_OL9D2ls-8YbIvQxw6lSWSoHiWv9jTIWRmLCR9rIgWrB49A36ZURrMB9xkFcXUwKz1iYcssQkMq-wRw_MfFXuyVAm09nhNR3dtZ5RV--6CUWzLkboIUe4hRnExeV7xVLkWYNPi6u_9mwICB_FDHmuHehP2V2Cq", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103983039804504313221\">supportサポート</a>"] },
            { photoReference: "AWCwydiGyS2YTxWlFT944E6SnZLW33UJV-grgTbykv79ylN28iokB6EBKKPns8hpaAia8a7nwFTOuCE4NdZQKTbKPchwF58s8cFSy7DTj0HkEFJKw_ucyS06oLwCr1c-qHeH1OEhJuMlp5nli54Cd3i4RQi1KY2T-GjHhuN4BjMjkZGsGtk9XWcOcNxuafjhmxo1eJclbByh_HowNfNbOINxZNrE7-eAlD6M2MQflbSF9Arff_kyRNHhy5F2kxVYncNgoOBXLKCYURA-giHBCDX-6K9QqjDjiJSb1nWUG7YW01uaeSHyYzqXgyi0r-fY0AxFRFxHRqqs_28-RsB8szNXxirC4EovqWgJtkkvwGVou8BO4eRPHxtVrKH1Mij9UqkVsn6aAQ6WxzGdQEbosxiIq0W5O0gVIHSuyoGkwK2pSmQOow", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103983039804504313221\">supportサポート</a>"] },
            { photoReference: "AWCwydjH0iH9z_C49FMukqHUieqYuS-P_fv5JZoAdirRXPoSeZkEBaEgfHz-p8rgUQQT9sxorD-Xl7MffgPVDFSbkAUeuOuX8ZkPl1HzF1yhItohtWfHb76zq-5trRSybcTMtyi8IO3rT63HmzKcIX0Ed2EkJAVqUTJpS-uhHzOXpDjajKYMkrCAFcGLNCBL6ybGtUArdNuZftNv7LA5Y_bLp_1eMkO-XWuNHw_qNfiCLHgQKaRTB3E94Scih8vRUm4CArFaXDDuY4dKjD5x4_vZDBm3dI2Af8o3XcIoPkC5MotEsjFv0RQ9svbwGHepYNb83KT_Pvd2a14qicLPvVdHIyoezGHQEJ0zPFR7KRvl42ak4S8ivaRQB7viXEmmrYqYd_kaudDww33BcMYU9xWWuWkfcHStL5loF9O4d-ObrEtk2w", width: 2553, height: 1915, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111216874788421195765\">福岡ゲストハウスJikka</a>"] },
            { photoReference: "AWCwydh7BZxwXg9yr6eIAGaSp19_YNJ6A7dXCVFehBrmPr4I8B-a5hn2Pv-aDuGJZ4e0a-bsoq8Une8KgsBio9tYA-ZVnhU6aWWJeGm6RSYwMJ1UDvdpmKdo4YU7m-icSW3OAIQB5LD0AJ5mLLoQpwSASsyEYEN7LocvNpr9hMSfZJXD0Kbs4lXr8xlYzfAci7SkJ9LTCqjszPnhjoQectzPBPJFRNglqtMqaIYeL2q-KGb0thXaEtP7saLEoe2O59bvLzaiUwDTINQW_y3xAzJdMgLjMS73wUAvI-dKcN0CaX_jNJXE5Azjva313bzbPhHYMLy8ICjpxdHiFizjv3Z3larQYuGo2a4v_Cz5DPsZItQ6xxBeG4LQSGcKWXzT15KyYUIVDeREqUhWjRrahEiCquftq_bZPXXhkqcLWORSEjZwsy4", width: 810, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111216874788421195765\">福岡ゲストハウスJikka</a>"] }
        ],
        summary: "합리적인 가격의 숙박 시설입니다.",
        updatedAt: "2026-08-16",
        highlights: ["높은 평점", "친절한 서비스"],
        tips: ["체크인 시간을 확인하세요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "1-chōme-14-25 Haruyoshi, Chuo Ward, Fukuoka, 810-0003 일본" }],
        location: { landmark: "1-chōme-14-25 Haruyoshi, Chuo Ward, Fukuoka, 810-0003 일본", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "https://fukuokaguesthousejikka.jphotel.site/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16690988891138494529", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%EA%B2%8C%EC%8A%A4%ED%8A%B8%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%A7%80%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "후쿠오카 게스트하우스 쉽": {
        photos: [],
        placeId: "ChIJ81EOD0CRQTURrhJ7W2TdsIo",
        placePhotos: [
            { photoReference: "AWCwydiU7ElHGmFbopEn4Fm8bF2nPq78Qya1l4xRpCnKYpHRBVijWZQNPzHH1W1FD3O_pOuJCmE6VrH5Rf8kqBjVYHTppRy7Qice15VWhQ1qtjXFW-bPNKNwGGPE3_iL6mOMaZgQ_niJkTkiyTDsshOS4ToNYvrJR4OSZuUyssWoocfF7S5usghKI4moFMVwbwQKBgF83rqRbbSzmfsnH9-4nN8ibBfWwvvHst1k8XgAWHiLdtiNz5X-yQtdUTkN9MrYgqvur7bkbXw-w9he0VHvdvDuJp41HSAf2HRnDW_y_2DrT143O8qfyya2MWabO6vNtC5xszNNJiXC2x32tKfFgNLNvo1rUOEg8oWRYFTEHxR3Nk0wLUbaD3yutHj-4hKa0re5n1wYEJE6FGYX-iX9Pl5dLlPJiwsGmirVpR0jhn8kog", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101868790911381165010\">Fukuoka Guesthouse SHIP</a>"] },
            { photoReference: "AWCwydjyeexOvtE7GkFXoV9Toe5SYe9b0H9Pwn2E_sv5EI74FqPzRiLGPlCLlhmDVYQmb4XHJvMJvsrQcwoWrP__uSisFAd_67fYjRK5D5zOd4YfjyQ3hjZKcPt-AKtaiBhnLgxPAUtVBeuBRk0y07dBDYq7i1j2UbPL5_139lPpjih039Ht2Q9HQZwUiONpskLHCY2xXtRHZb9xRCf9PDb3sEYR11HrQLsS1qKbVZKXzRaZWPSD5KAuJiKwH_wWLskwWbz-1kxq_UpiIlG1N2nMv2hcZh-dzmgJ-IhoU0FC_X3-agOyHiDwJrYTTrFavLfgf41JuJ_MIzUnZs9Kl8Uk3Vh18QaOp5fAG6QmEdVvRgcWleOJWVLhhfk9mMiQaakixzDvTdad5_DFf7enr3z8yOvb4zqdcpvYHLGJU8kNzw7cDZdA", width: 3684, height: 2456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101868790911381165010\">Fukuoka Guesthouse SHIP</a>"] },
            { photoReference: "AWCwydjldfcc5oVJuTEp3H8F_iHMvTQAjNRYJ5KURKkoRVwI5qQ1VCXJu9ix1zg_WECboQ5Smk9IZsWZH-3HxzPGeRKKHp7qC7MRtalN2UeeqEOtzO9gSE6YIvGGxivF0MbLZkik85uRBum7BzMM5fMDyKN-C3c1Dj1bi7nCz3x9bashO2lI73oe2y6xyYSkLR59GoftY3FgGEMJ81TmT9EyEdJjkZ-4kSm4K3_stig2Q_h8zLRs2akVQyebEguVWTPABZGq3ImZ0_JLgPaIM_EYclmcHHbL2wkDJiiBXtc00Kmi4EAyqu7MklzFlbt7Sk1TwfAiChcM_WXf38XvjAsMayhLByCX8PjW_9AmRdw2m53W-Iex0Aial4XtD4XE3e1AMe6DekDVsuZLYsKC9lPRGmYX9cAVg8-o2Bpl0zn4nVSMvr0", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101868790911381165010\">Fukuoka Guesthouse SHIP</a>"] },
            { photoReference: "AWCwydjtHZUxGyMvlR3LJiSXXO28meVfPostCMNIvjOl8zxYdT9vgpcmmQlktQfGmqwDIZBa_aKOiQ_VfHFG0blAArlk7d8YqsCaHiPb5DHGKmvWD0wHwVh4e2Q0x985Rwjs3FSABnrz5GtzlwchCK5KFBYyh0iRAJwEF84wgS6wJc_Py-EJkUV9SxcEhPjxTQyAGDJtyAMk-nNcWkV_nnoTd9wPekEeodlDRiBCJsO2O85960jBHoLFiCKe13NvS0VdEK7jYH02tnOcaCshOXxSf5GqRkEH0UmqNFMpzbmXJAI7DRiIAMuPojgVE0ttLG8ha9xlsVg2eJecZfA-QxGH8IX_TlkM1oIylcouwT2wI1Q7lBJJ7pg-lm-xr01GMcCBTEwjN1EDjDOfhg9DEk18TOzkgDNoZjl4cQZbUcgB-JVaEdc", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101868790911381165010\">Fukuoka Guesthouse SHIP</a>"] },
            { photoReference: "AWCwydikCDgF0Bye5TT6tazmoH1jveAUoVJauTLyNFgujOp1DqXX_5xCQBgrJ-o3tJry73RJ-bJqbstMvb9Pn_paFvTguIz-pnmPNcfphD1cul9ZNkzIw-H_5XOD6nsKXQSouiMei3-5Mh-G1JH3oKVl-6gaMI_XzaXLb9PgeCjUxgiux7qVFORpj_kBo07uwVE0Ap_F6xG7mLMrDiRm0Ww7GnR6L7TJ8Wzt2_fWx6aN_RAh9iORCHIxHZ6oLcwmisQ9xT1E-OKVdeDz5qoLAoFfe3eb2pfbGiEW-c-mGDmXO8mFByMpN-sFMXkA_Ej43fT0b-y-Hjdl_4glkZKVBltllkAIsUt3Tvrv9Y_C0kVOoTTW1-3xQVT60U9KhVjNikiC-pmJnCMe_xz5Qu29i3GNRNlBxeAiz3evDBAYSnPLn4kZog", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101868790911381165010\">Fukuoka Guesthouse SHIP</a>"] }
        ],
        summary: "하카타와 텐진 등 주요 명소와 가까운 숙소",
        updatedAt: "2026-08-16",
        highlights: ["편안한 침대와 에어컨", "친절하고 활기찬 직원"],
        tips: ["저녁 7시 이후 할인 행사 확인"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🛏️", label: "객실·공용시설", note: "시설별 운영 여부 확인" }, { icon: "📍", label: "위치", note: "8-26 Taihakumachi, Hakata Ward, Fukuoka, 812-0033 일본" }],
        location: { landmark: "8-26 Taihakumachi, Hakata Ward, Fukuoka, 812-0033 일본", airport: "공항 이동 시간은 교통 상황에 따라 변동" },
        links: [
            { label: "공식 사이트", url: "http://fgh-ship.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9993730996236391086", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Fukuoka+Guesthouse+SHIP+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
