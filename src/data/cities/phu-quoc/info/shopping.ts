import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "푸꾸옥 야시장": {
        photos: ["/images/phu-quoc/info/shopping/phu-quoc-night-market.png"],
        placeId: "ChIJeaUPhUuNpzERsYgZr-tG9Hw",
        placePhotos: [
            { photoReference: "AWCwydi8tSZTfboWlXkhfBlRfMyPt089xXULKJM_9KTuSPQF8_mfw6dbKwHFaSDyLsIk1sB97c86d64tiSu52tjJ2ywmpXuvMkYf4ZAzY8QefSDzlR6vxmL5Sa1Y8IbUt_j_jSfZS_Fcz0GoTaGAT-FFUot8FO593DFKVxgnNcR9v-Jr6gw3CoQammmMOKqSLkKFYxEdK1nO7KC7_PLhVsdiEYk9dsyjhEqGzlY23tMQsT5F1C6BImGrSuHqsrB0vVEcOZfYAmM3vYN29F62GiYcYbsFTT4mcZcgtyMVmAXtvT65b-iwrHqyoxqCiLEYvb5MTGbuo4sophD6Z0wlFicSzHgGEXg8XcqmFYzwoujZLOJ0qR2-42xwXDQF7jC8DwSt0flOcJJaWwVKKEmSogdP8r-xnzyO7Wp8EtyovM1acXQd1A", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103469685976242404621\">루시Lucy</a>"] },
            { photoReference: "AWCwydj_-4xtzB4Th8eJbVVl_w6vj-pyEpif-F12EtaKUO8x4_kHIviqSgBNaGjAm5qjvct9sI5s4BXv9iyzAhLJRMjrxjiny2c1psxdHCGfrsS9bZzsuBnGSNkFlOE5FaAiqDckOQ4G1rp2JjYrA0HoihpRPMRtugkcI5p845q8b8jlYb7nU_0CZTZ6ubN9Bx74yZiDRQ7un-weqkABcuh5Jhu4HopMm-oYdH1wqsXC4UyH2nOwRxTJZgqyFd49GbPDZY7McqbVxXAhhOZf35lWbEU1pr9zlov0GQyX7tmzJMxJxFWYMNLNYTiY7mYdMxJXvQPSi6XSc5AGDNfr7yP_-lZOZwU6FWYGop_rKGSG4rPMlaJ2A0db5eLLNTQ74uDlc1NI00U3HMlCoB1z32cRZkiYix-DX4-2G9iREki8x28SqQ", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106356114017896454137\">Nam Nguyen</a>"] },
            { photoReference: "AWCwydg5opD4r34SQSzlFc5-68MjnLKmdExEkwd9sLsIcVlnuelfD9-dR2LcGOyOOs9azvEqjLDyzRo-cmimkJpZCbuqKKhcTxYkyKRnEd3NgY9lJVmG3urPy0U0vPmDEAY9tr0wel3HQmbQWZUwH9YkKUlaJHaSdW8JmDxvWbzjtaCgz-fQpYFMwkA07Lb2U1JqZcFKNehthDBQ9HiYPHxN1bmk01O8y0qfYu8LwWTWNQnr0XpPLKlpQmtccMilNKimOvCAOfJ_vyUoeAnHyLuXw2lGydPSbDGzc1sp9hrChnhU21Y4I_QYohlSerTeozoEr_wG1cGeH7z20SitF_Q6SyOH8UQTqI-fJNBUoxG9MbpIuBIsEO5A8T7BVWKx2GaL7Dzm-pJ_8uUJYqkiWB7Mbq0XAnfL4XIy0o2HK9J45YKdwj1s", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111524411703242306267\">Лев Барашкин</a>"] },
            { photoReference: "AWCwydhrXN2fuDPHh4df9hY8RnseOZGW8KC76nqeob_YCQ1TDlWeANvuMzwFQkvmbAf7IrP_0kwfwwTJBrre6W0YhGAHBekUvccmW4ca5sXCY0iOva9lrVTYJqgxpVBEgFwoUEVZyn4wLSwbuGOmHf2THjidZi0AyzUVtwTiLBDjj2VDvgp0GseoTxgoc0l1XCrEhdV201vkYGJkGI6tBUI1lstviDMvWEvmx1JsOEs7rXwxvb2ucu8L08qIH2HqujGTdyXH88JvMCw95A2gZ3CPM79WhD9q5n4WsFnUrJZrRYgnzBbURRwdRa5j4dI9pW2AKrxgrt1qSNIruId6bCBKlfBhjID72B_tfRFcWf7Do_XXQNJjWY1V8lK1blZBR0cOrtucLTfG_-_7_IqrVGRgO-DCf-rWxMDZ8JmNPQ3Gv205Yg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110308212992427476247\">이둥둥</a>"] },
            { photoReference: "AWCwydhV2DMfOODbwQyJynLk3-cp3wN4BXFSi_mRTIaxfqMcG0yINPMrs4fbNi5LmF27rg87OMyjyVwo3Ak2Ouofykt-f8p-HT9MzhGKLAOcot47IOGTtXKMFYmx_1QpcjTa1T0n_HAL-jQPuIu5y_J0U-k9gnWoSJ9iiYqUycNOf_wFzled9C9pfQXGqhGHfDWJ_bjK5AWVLf2fxkHA_YrQkgxho1raooQHciKzrYmpGlEcRkgxMfxQPcnG6h4oBIwzRzmHQ_tYxluRYsj-5r6RgDCALxWoWUUxssEbO1v3WoQLsnUZrl63o93n9XwF3tmXC3MZCBjn9G-xzzU1iABXKAxCm0kbAbsw10IsQfo9AevggTUyEUsp9YPkL_apSlqR8PmFfvssNDNkWkqBj668WY744EahFup1Od7_cyBnRg__ew", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106356114017896454137\">Nam Nguyen</a>"] }
        ],
        summary: "싱싱한 해산물과 다양한 기념품을 만날 수 있는 푸꾸옥 대표 야시장",
        updatedAt: "2026-07-15",
        highlights: ["해산물 요리", "진주 쇼핑", "길거리 간식"],
        tips: ["사람이 많으니 소지품 주의하기"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://luggagestorage.io/locations/luggage-storage-hopapa-hotel-spa", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5586699472923444197", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EA%BE%B8%EC%98%A5+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "소나시 야시장": {
        photos: ["/images/phu-quoc/info/shopping/sonasea-night-market-phu-quoc.jpg"],
        placeId: "ChIJ63dMC3OSpzERKnRGHebGU5E",
        placePhotos: [
            { photoReference: "AWCwydjGjR1BmWJ85ay395HUfyS4ni_S60Oy2UFu9J1-RKd3xOWRfW6YyKlW-_DRW0ePcZPF2vNcurVuuH6zcxvmpjwJS1qrDL1ifUsZ7jGpCWWul9QelNTnI-erX_rXwQVIdq1H1SZpTIZjCvlQhyx9IaEIke0HaB7GUPPPMymyKz5a8Wun9-aNav0xd8LxO-F_XghyVwob4aV-aTy-P8zchFilz5Kku-Sf-0JzdkJnpXbMF1wPCaURyXFZ2Bz-6_xoLpyyQhFHN1DngQa8Bh4USeXDI6xPawhB3FwwyIGC1RhpdduzGyZMCgpjemygRA8d018IoGpr2PtlcgW1R0pfEgi3eP34RrDFmhRO7GigBPB16hWz6azeX45R6oZ03iz0Apjms3B77TxS0iX_yVz3ijKzgNzjU2LU0HlYStsErHkS30Q-", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114911582321293331675\">Hùng Đỗ Việt</a>"] },
            { photoReference: "AWCwydhPcqwjRelwYI6_XoLMCd7MElMiAwI2IXYr-cG3zyJrTRAEeuENETIlK7ZhYeeKjqXSGUWH2CkuBUc6-Tawj7112bR17zao8y9QPOYH9kjOFUtkCrfgcm5rT1qjwqv3r17o1_xHuiwawNL2w0h4JD9NCeubwSSoK1d_LudWp2oaNG0ehI8WFBEqyMHdtcWDb_N7l8oSV13jWibQdUQkY9pfakNbrkqRfDhQT38Xc7fv9A0guGrAGIWIEoevdnVBG7nvHbpsRxUwfSI9UbDSs-Dkj9Zwtf898WRi6HnFB-qMfLiDQNG-4jw1UriogmXaqmKkg3gf72XX64YSABzIqdO7MnhA4esijPRU-B53LQY233yZ_bhVqzOubwHhbZfqNpS5aGmoC3DO1Jyp8yDgd-_SiD9ywHAdKw4L13CzAJ7Sqb68", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115001126465707016039\">YH Kim</a>"] },
            { photoReference: "AWCwydjcmQp71uhepHntO23QYgwYLe42n7rqt8BFkAMep2MzElwCOAWv-7tmH_REzJVL7DPxJYKgTVmoXeIPWEeTvsryJx2hoV2PUnHuhIfj5TC0HqV6w2VnWtRqt6N29chQ_8Y1iS1s1fNDnsZ6IzwYR0igrmIt8PQ2-2M1d74CiPLn36D-Gg4qBc4e-679RgIigBLF6Nm_TH8zQreV6cehbiIH5KgNTKAFuBZRxdx51Qmi_WYsib2i3W8-PuksIycDALt-MJQxhj_trD6pa6Tr3oKT6F_mWAJFFBoqCPqkj3G35UJBw7bW0PZVC_oHEashKPAajXnkfYiPk0l0syKdQkEgwC3zzSfJ-MzT_W4DLxJ19SZ-d_NLFyP63KD4R3P-FL_tqshMPFUqB5PbickG2kyBVmK86ccSOASYGi9y2X8jWbVA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105806876152470521926\">Ethan Kang</a>"] },
            { photoReference: "AWCwydjeRhPIRcn8JRMKOyagQKTK0xApQFTeiTh0L47h0jo15CmTZbN3HuhFJlCNfJAJrVPw1eBs7L7ULWDxdnCUo8mBUnJFiHTddgV10kt8X3JDCBUo2N51cs_WL0sFMzpOmuPWiALbPU6hF1GCRWzEjC9oTHu7TfwrpRbFVDn1RE-cC9uhxeJSfdH5kkvyqNhG-l2PULalHz2WUH4mFx6ZXccbIATc24O4wmwqeAqOKTAMAcjJ-SCoGOtVi-YhvxmFyNKU91LpfQWQt6uMWrtFlxR8030EbdGVKIrbLLCs6F4EjqFo4LILPqkLg9h4datSvfIuYS0qQiLOJuY7RIbvijRjc4BOWLeQrRCIJFAIQxPTcsTI_qIj9qsqmY37dLG98u-stLSC2aJSEN1SnVuDrWzmZHT566RolhzIAM2MdK22nA", width: 960, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117461890776079989906\">UX-UI</a>"] },
            { photoReference: "AWCwydivIEzHOH69sLQuvG_zr7ALoqSBvce5Ohq66o6IeRUD4qE1ultIawFugPziQA2Uioqm06SDTkIhPFrUwrtcNRO4WYYhXMg8pyqXevUVEvfh2sfiDZLo125kcUJVYBjWiFYdeKnMNQM4fPGM31592_fMWZdRdOrYniRpXs6DsrXNgTOgni1fDOVWMogD984R2WB_z7YjSUzUVoVjymdrrxW2ej5jhZJ_V3cl7ecfKqbgvrvkgEqsbzXRPPJPXykdeCI-z13t29nM21nGju2z52IYVTwiK1uNFTObqKPMFHSdhU9rjSEpCk8hbSmJ77nzFLk45rriNA6eq1pxCxtnOffsP_6C6o8Gvio9fmFXRCh7S8RV6qwEPElBCUHdKW4vnaoX4uxbPgdmFRUDqgbp1oX4ECQXkPU1OMmLFgejhtkyxg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102877838678799564412\">羅主任</a>"] }
        ],
        summary: "리조트 단지 근처에서 깔끔하게 즐기는 맛집과 기념품 거리",
        updatedAt: "2026-07-15",
        highlights: ["리조트 인근 야시장", "다양한 식당가", "기념품 쇼핑"],
        tips: ["숙소가 소나시 쪽이라면 저녁 산책 코스로 추천"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13669430903800341715", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%8C%EB%82%98%EC%8B%9C+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그랜드월드 푸꾸옥": {
        photos: ["/images/phu-quoc/info/shopping/grand-world-phu-quoc.png"],
        placeId: "ChIJbUZGsQEfCDERXgX4I2SUCsI",
        placePhotos: [
            { photoReference: "AWCwydiT2fE6B4pC42Nt5Q5fHFYekXyyXNYXOVaV_LY5M9H6XCwyU2xt5aBPLK2cZOpBKRXBAL4fvZXdgE4C5PBW8Rbo3Aew-ANgV1Q55A6AF47J3LFDYcC90QIrCGdXH-FULqCshGcAbB8LfL43mQIm1V9srg1e28CY3YO0W0uNl1V2vChU-Tf4Dr6CWiRSMA-RNXWtQC5dZPErlcJC8vW-QGmj63RzEeQXiorAJY6-Z55iSY140A_6ObbXZqrfFH900lIcKcR0Dk8OlQXp1UtpYtXxaq2rFWaWFUdL2E_AMjMqYZZpJz4NbMXMHn6zDOefusPKB2VMOSBmyv3sAY-jDkpklwXAe7tYK0vxkpTuaB2EBvfVF_cct9WHR4d6xP3opTD8wJH2rhCN3W105erxczHh331gB1Fxn303e08PNG2tNw", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100295824686482231705\">Dylan Wang</a>"] },
            { photoReference: "AWCwydhoK6vn_mvr6cWIPNvVUIealZJOeJ5QovpMJTWWgN23OLtJ4aCNgDfhrUU-bWXkFTDn7lpORkLGrrkVLvvECWYmz0VyWCEwxEWZDulZ5AvhuS6uXFSjXVwGQZj5bzChYFG27QFLNOsmktCTQE6x522bZ1-ytXw0c95xsbhQ9QqDI8AUkbxTSKUYU5F8_I55d88w8xb1fDS_yLcFbqQgEvWx8yDMEMKhyLVcacKyJpdCJlRlS0IwdfJJVjRAMR9t7jKuaicc62K9A_3IXFvLbqvONZOPNcz-AT4z1UPLyJUiq9kINMHAy2kvdDEkSYvQoo1ajwHuAuyT8Jmtmo_T0AM5_5rtilUYEH5I8DWv2fgNJuAmzXNi_xYmSBMRnGESb23rKcqCycZbdMxHCz_dIcS78X0Jhw41g-SNgQo-xkpzawkv", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103711021953077789590\">Hoang Vu Nguyen</a>"] },
            { photoReference: "AWCwydiBATk15wbZV8SV13HQquGLkSQOJ9Y15BgRPc_s4DkYsN-IG97Az8IzCM1ayMvMK9JaxdHI4PWHNS1AUdfTwzjKOrAir7mZVuTdR512U4CLKXM9D8GuDvv6y3jWO6MaV3KoYxqlz53yp5_8yOMWbcjmnu7CT7E-YVRk7DXZ1_vXithhCN_KR-3A-l1uLzCMzjMGdU-49WKe1OjDn8ZS1qMLH2wygz1WWZS2asIxaZrBuBwYzN4_ddXBAVV7xmIyULBioh56MrLICwr3bdmqndAmnOzocpw09iiOH7_jpOD3fSdLoLiOYl4gdmYHx6yIeFtr3J4UHkwKX_fnr3Nb4pus52lLhemKyxcV2VX5MyPujddLm7t6Q182gWeJt_jsUGqbI9zt_Ua9xX5VTqHZAZQQJbkVu4Flq3xx4OYDjFTS1qA", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115960658409574012840\">Tran The Sinh</a>"] },
            { photoReference: "AWCwydgGB4eUfJi-leg4PO3JJjZBCULszZDNneIzJGYPYBTfON6cqJcx6wAVzU2oTz6fiNOL5UblOVUS-pOe35Qizg_7XrsfkfLbRyMLaU4bMuI2h8jIkXkGEa36Ygw9wvR_dAqTNCOw3aXjh0nsOl5rkLi_J9WyX8NMLL9mh1PlRZ7Xxg0gJQVCKAtTG6I-Q2HMwq_Fb2FMPCsNDnEUhkqBtMxofrRcUBAQmfiZER87GGdlzHGgImMMOhW_4dAZXZj5vOx5cTTz1TeN_sNc9tKEs2S5d0SsofUCM7WTyjry5tAuDAiDd_7lNYlj3ucYTJRBrlNj1mxP8Y_LR83IbITodsKQCwcf8U6OpGsnNUuLJhccpRrOJoV0i6o8QvE9bS4PqqJdi-d9EXDlVycI7Mk5V_N3SA0eOV-dEEAUcDqPDSk41Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111423544485207404555\">Nam Trà Nguyễn (Nam Nguyễn)</a>"] },
            { photoReference: "AWCwydgS7NWMR5fa5mF9F6OYoH5Jh4Xe6YtqHeQgJJ55-TMS5tH8penaGemdY4yM1pO1-NnYy_xYyxujC1pLEwEtBeDmhkeoYljTN2cLnWLh9osvSBFoCCWU_rSbgaTKNPL14RWdTxqHNr7TP3h_ldV-Xt0XidJDb_Um0ANsvF9blSeH9rErzci4Yoy8mV8pWrwj6dYQgAG8XEdGp_QMbNhYmDpAsSHCz5ty2X_A5P0Xf3EHqSBSkAzVBU_K2pHxlfGCyn6XwQMBQidKB4VHIDGTTUfb3EO9dSg95ghR7e7o9Zea9V3UHwuvY9hfZXCyV4Z0xx-lKfQnQGQIu-HYDue448E-gr9hMAaLyxsvQMTm38FsJOko6f3thZyMM6hs7MSXwhNoSYmGhFLcPD3tUDjBMk9q4Sid2kgLhYKYFTYuLOI9Xw", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105693415551648058422\">吳建誼</a>"] }
        ],
        summary: "화려한 야경과 이국적인 상점들이 가득한 밤 산책 명소",
        updatedAt: "2026-07-15",
        highlights: ["이국적인 상점가", "아름다운 야간 산책로", "기념품 구매"],
        tips: ["야경 사진 찍기 좋은 시간대에 방문하기"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2435664654751684437", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%9C%EB%93%9C%EC%9B%94%EB%93%9C+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "킹콩마트 푸꾸옥": {
        photos: ["/images/phu-quoc/info/shopping/king-kong-mart-phu-quoc.jpg"],
        placeId: "ChIJabPU6haNpzER0xtz5ErMvYw",
        placePhotos: [
            { photoReference: "AWCwydhV0y9TSBw7Y2aa4u3J3E4_gLSqP9oTgXR0MPSbrP0iwhx4o3HZ2HnEWtToputtTNaQC5UTRK4WTAkC3bVBu8AZwAdsu1pn8N7PGBlGwb7bom4bjysiVyoTK4LSZKm-xAYfvT4xkHVemVDsrN0jGCztCe0CvXb1kNusOEp3yHC-4eMWDYOaRrZzK_iFjMEQgYLrEZLGkJwXaZ0S5qJu7rezLYxpYi4ESlAEDtGo1ssmHza-dUqQIsK9CUNJeCH1eq55_zd31TydA5naGTPEPkTuvOqjYhUCBO26ea7IDclNEE7XiGpAsZBtxddNRMWfk-3Y-ClLk3wLy46cJ0AAfMSBlrTDV1AXz186cN3tKHIVFbASXXPjWMN9gY9p-1xtZb0UGGcT6A1MgbElpgbkiVHQy5TkXilfpbol9Owv8XMVKEUG", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100276384885433262103\">Павел Слепцов</a>"] },
            { photoReference: "AWCwydgpAzs0vQD9LLYw5I6dNra39P6SWLmMuEEMxu3yzxzolI0mkXnXOM8_XS0kLkci405uwYCtPZvJ-iKXEvF_NkOzW8OEeOokOIb1ECtF1FtO2IZhRIgC50f6dz6-uL4ntLfuYjxWQNU41MpS0COxcvqaERAbdndWR2sx0cVRuM1CD2WkDHt84D9eWES86GqV6w-EgWlSZ4ILOlR75YbxYW_Y1o9o7sUoSdIxKwJ0mFysu9DmbWTRMuftrvcQPoo2ik9qiiIauX1mnBk0P3Kw2iXGVF089AuyQ3Rf3P2ApteW7sKFQ52r_hszKMWWQTCS6q7Mu1OFI8a6OZYAQd4AQOJtS1_PNTUO_08SJpSIrw108EM0r0szEab4xl6wBNZQdbwOPcPuZ41BFhlY0C5B8d7LegGSAK4n7teTjcboXTCVn3DLZaXmRBFsYotQu-Ks", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102317005179933901530\">강동우</a>"] },
            { photoReference: "AWCwydjpYoF26naEPR0NvOV7LRpTSPjKAipxkWWNwA9z8stTEWPIAhnGvppcZALRly_M4Rocp43zs5DxEIGMq8msnXbb5QrNNpqoNKI0PTYsIYNSJiEQyk93GCAqWsmIbphw4rYH_O2ey3zdfc9MysH430jWoW1bfOm_XiOm7ADp-ycmDQ_qHFw0rtG-yuIiTHxRNAEDialkQvUqjRkRSOhqSZELG-HgknMN6iwEyijU4S1iSBraXF2R5lTT13evFrO87IXLvfJz_zYizm2x7RlVPusjwTP2KNFmaH7FYA9MdqsIQbfizMvC_AS3pRVXV9Mya8h1VcTUy6AdUXYQ5jD_8ArG2L4i-wZjaRs-4Y3MK0DfniCdBGYDmAwpLbDuhtByfIsdg120rqJ78Kkz-djgwWUo_ybk_E_FO8E7BfthXPg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112439692782304679582\">David Breitkopf</a>"] },
            { photoReference: "AWCwydiKolF12rJkmRMWOhm5Uxp-BQZd42IKmDvfaz0dpHS_EJN7v-PGnSMbyls4uC6h7L2ydm5RiUItBZ6SiXYP3ibhvZwiBJW5ltLgaGVDIGs4G6Yu3Mvm5thY4n9kmfhwfZ1zyPOOlnf3zzNAMigtVAfKYbtFEXyg2_dG-GyEcmQjwFH0Q3fNv0aa0HhTNeM-ZkrSn9Uqmkq3PYyI4bGHmF7AwT2TON-i9dMb-GajWMbDSPIY7wpq8D4qgb0suszU4Uo4ANE9E1lbZnoqzzQTQi3Hc2z6nYkQKF_uOPR7IGTmgSlZIFrPK_TmwGrNClvum72h91loaFfUWyPNzlV8jTKFtIcLzYn369v7_Y8maATmEIILAQ69ElEQi_Boix3o5zp5FlhAZSxVZh50ZXJLgNjwmb9dfqW8b8qaQemdoWjmJ-pYbOY3mHSMjdUALOqW", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100862623806117136761\">Nguyen Hoang</a>"] },
            { photoReference: "AWCwydjxVdygUaqfcJ91i0xYSF8qcsL7U-VdRVN2g6RdkH7v7nlNgENIEajDzygNiwk6waslUTshRBzCvnOk4kxgawJKnvCQaT-7UTCzdaZsWSPNaruW2JPE_CvX3c4Eeut3zA8e60ElmDrO9ou8QddVjMjViDqWG4mISEGRUovvp5ybZxxCoyFeebQXKh5Xt3lRfcGSRdbcR9OTmBwtLCocKjP958dQiC15XmujBFQypgLujNV19JA8Q0sS-mOaqaFezroHGWpLzVdGO6YcN2iQ4-m-7MPQRr7c4GWj1O_C1Fq2Xy5MD9jFE2SysKIN0PRLHRi0JsXQnRM2bJUrWfZMBKr1esvFK8bE7ZsUS3jAtlE09WVGAWVubXEJ6Y_5J0aDD4LpiB8K8Ui3XRj3Vs-RtsH210kCCyPGmQX4qFoTD-7rhw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105840348049779128534\">SICILIAN-AMERICAN</a>"] }
        ],
        summary: "Kingkong Mart - Phu Quoc Specialties Store 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["간식, 생필품, 여행용품", "평점 4.4", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://facebook.com/sieuthikingkong", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10141486557940620243", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%B9%EC%BD%A9%EB%A7%88%ED%8A%B8+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "즈엉동 시장": {
        photos: ["/images/phu-quoc/info/shopping/duong-dong-market-phu-quoc.jpg"],
        placeId: "ChIJXX5dRSeNpzERADiyRNheVKk",
        placePhotos: [
            { photoReference: "AWCwydgM99qVyem3c6JoVvjBGs45P0oma2vBGaefKpxQVfl1lLXXVV1hjzRdxOV0rb4QztTdq3ryxk-6IB5kAvAXaUdJvIxQslIbPZVQS0OU13rsTuJqCot7trH2sbKMuFzf2otWovI4dCEdxOzAC3maHd7V4-a1wD4zOXELupTq6eooxDQgCad6S8u1EBYa5R2-LWkOAufxZZt9mBF-K1yxcA_Pt4A1S41OyMKRDJ5Aeqf8oNef7IGWxCbhRXGPDnJugPMQUI2bRUMuopqlOCD3Hgk5Qyn_bwpIbuuW14LZXp_XnYdCvh1eAYqorGzNwaSkOgM4TuBNbZ10A0M1gFc_tfGDU1gxyyrSE638Kr3BweOoVAi2frhPw5-Dhua9F0sqxCKpqqlgLoSzpmvKqq2vzNRLh4I2fwTSH-iJZFga31EbClY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101203207955652939487\">Andre CHEN-MING</a>"] },
            { photoReference: "AWCwydjfLVnXmPfAhznTWfKUgg097sHkNPqrKfOq4krJRrFgME58_3a-D-EhF9wYFe_pmi5b3LdTfI7K0QgHTJhBjWTOWWi4G3DBnKh3d5CD614T_a14LwR2M5qmCn3zZBkBY5TgWjD2maz6ZIu4Cnw_eczDXo_Gk7OO0qhNrpImDqpxrmhGlIK1OjycIFaw4BY7Ek6CQktwgQwAqyIGghimQV8ILrpY-U7RLXnJye6X4QNEx0vL4mUlknydESAdsBkc5e-kDNVKlSf89pZQn8_bMtrXiXzqOywR9zzHeLPWZPsQSH-bHGUpKN-GNbtB2ybwrBuHpSpuwXzeLRlwEqGxdJzT5BivFxdPXonyHsT1EG4S9lji3PQ8o0cSxKq8LbgRhEmiGqTVT-gAG6glp2vZNwZzO4z21uloAr3EcpVTz_R-rg", width: 4000, height: 1868, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114606048427606119238\">SJ Y</a>"] },
            { photoReference: "AWCwydjUA_UMzd41rQt8NeUh70mPDRz6QwFx-hTYA-ICQ2-6MgmHhVdtwkRv24SRZcTWQATvOL5na7-33tUsKvX-ZSmUefRPnCMJQx3VuIZp5hzOkXzwBvGkp6HLpg0EQhkWg4SyTGI1HENVaysBv8Rr5BBMTthKJDyJYjh8hDmYrBcoDERXgw3WRmHZIbCtT81LqpzT5tqPLhuaVenLs2ScUEhaMirZx7Uwgmh_-rl2TwqjylVfMgvYGn9hktDBwnhdVTAQF2TMsezjH66-1fYr6NeADz-dWCmpDDzAQ5MAWPXrqpKamVx-Wvb1-8oIiVrediGhmstzWVlqaVRV-XOlCAb4gP0Mrll9VBNj2VreGGmxnW1qRMoCtTU5C0ZEO2_QqfxLHMd-3qY_U-Mj3TUuPIthoxssGMlr_BeAfdsQDRF-rNVmMOOwvbNC6u5zUQ", width: 3060, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115837109765621228711\">Gregory</a>"] },
            { photoReference: "AWCwydj8RcpHXZbrEQVhGeh-kH7KvOBmG0Vo-O6SPep57s139T2N6cEb4TqreAYn3M7vWTZFG669NWz9glzPaItcJnt9pM1umBfCEmo7OdF1CNiuH-MUsi6XFDkYF9noxXtd5jSwLZyVn8iSY24VTfhkAXoAVqlkVsSwE2xWTKahAZ1bpxDJMPnrcs52COjQXVeMmvrk0zZgb3ByL0-KiWJDNlLO4TTK7bkWrEFCWYLKJx0cCKrcMuVsTp9rQfEWutay2tvtIwpwR10X2XcJ-Dt9_9-gp6MmJCZ2gBF5W2hW2X51E-W_arpG1wgBYn8NB5MknrQykU1wOyuoryHteQunfADod6tKlSs0a8_mshJ57lS_AxU9YhIHvmdM4XMYxVxqAUil5zUlcYz0s0sq0hK8YOVzBlT6QgAIeAXIaF-Y851k38C8BnZQgNge2W_UNw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102420128555973284024\">jiin</a>"] },
            { photoReference: "AWCwydjlpgH6shWFj_o7IXtwpjAduSg7TXOnnGWGrI1POpsXNMs4Q6kE4n-qyOtoXI-Lc_Q4hRaMQ4CJtLYcar-jtOTE4yitHBVV0_qLKBpw2M1fJM1MIzuESa8WWTVDIfVJFiYuyUD9mueRQ2b6K601Qv0IDL9x1lisSxm8_lAhLsfDRXt7wTR92iwabouh_N87-lcYkGbufriE4EY7cDqR0B95qvyaqCVKdvyWTr2Fupo123kR_L_iMTIC0dc2XkRAS6plsOHe0ASaMrVPteT21kvmeAl5CT0EQcGxkiiNO7pVbtWKCTWMnIgzYj2RUlkU9OeCQBuiIszy7iW_KSETigKjZ5nvq7QC4jW_4YMNf2KY_SKGXMDuqbla33Heu74L79mhmdZgLhldHG7KcEaoJw4IXuR2kJReQ79KAPCXTs4wfg4Rdrb9bof7RGzqSfFd", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118101817426204556742\">Tomáš Malý</a>"] }
        ],
        summary: "Chợ Dương Đông Phú Quốc 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["해산물, 과일, 로컬 식재료", "평점 4.3", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17084729101629020860", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A6%88%EC%97%89%EB%8F%99+%EC%8B%9C%EC%9E%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "푸꾸옥 진주 농장": {
        photos: ["/images/phu-quoc/info/shopping/phu-quoc-pearl-farm.jpg"],
        placeId: "ChIJG0ygU8-NpzERXtcRcF0Av7k",
        placePhotos: [
            { photoReference: "AWCwydi4Af52t6fRP5OGokW5FNs88yn3x3HNxC-S_2kZOqOAtSdlG-m66dUxYub83KE4N9iqOoCUphf2K1nd-U1JxLWDUcLXLPmQj9dSeCe05aPca0wjgfmkO1MwI1bAU7xpkj5W6YkpBf5yLtJx96sNm5_dpDhLXdvCShIN7KkZ8C8X_WR6Pln6bWP48tnfNUZGxVKy1sELxeLLATTbjYHoEMJHS61ay_uRSK0PHDbWM1EhZNWwUe5bgfA3yJNX8nNaR9cAv18EqVkMnin8QdZU_ZRSJqmeVyM8wiOy6RFIxp_AwNKXDEFYCMJU7tuuJiDp8V8V-BPDNQYUP-b4DFeA3AQRQzRLy_7pVMRgbQsb82LbE_XQjlwxuf94sveZiWowQW1LvMCVVZC-I_JeddnyCm3bTxPZ46WQox1gcUgJ7Fhhow", width: 1280, height: 957, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105386378357797981839\">Ngọc trai Ngọc Hiền</a>"] },
            { photoReference: "AWCwydgdiQpZ6O8fHwQUFwMYYVO0Cjjj3bEeEZCNeBZsS0qNtLm8meQDWcpPFdnqkjO90riC8tiXBiaUAaG1yyug2iUoJ7N6fOQAc7s4VnMR0DQVhC-tscZilpvPXDVZ0NqZiNC-ui7313Zp5VoHnDJU8pp7-DQGDKwJTauS0G9vq_pXrIYchQTASelowAzgXzsL1XJ4qVObd6iGVWGd2DiYzYnimSZduLg3iO262pMx9TX8gBN-MVjzmh8Z16O5GfEH_mCWam8PkFsgiFqIktKRKsyF2UmVW647kyqWcOm1FqwsWi5vHY6Vc1t5kAa0ZmIF8azyboaswem5swOMvXHCiFJL_w_hfPIFLoBx1xahf8faNt7vETwU6v_PRQfgFyzl22YuhnbTiVTb5JANpb_99dExC-6KsUfC54xretFuM69MhMoT3ucjoGKrex5qnA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109277162023238561608\">Tu DINH</a>"] },
            { photoReference: "AWCwydhU2vb0tMqqqlHe1ZdABdxN4X4kaCH6J6boTYkG2x4_36gFn_9kNm_gMrSrTZ9YpeTeDQwMnuwuC5KiCJXOwLfat3XtdP8CmPQ3DrTs1WtfQwWC3iqVIkp1OQQUmCXS9NLlAG4BDewCj4NkXRzpgjmBEdFNiQ0hIyQe5G_tYzMWrGUVid4vlS8VOYXpBHx9iMq0EMIrakjfxdxYwYcxJ-jThv96RWQxG6z5g2l9dJgGoUNj-1WsdZFSukBU2XbZwk5JdqhZxFU_CIYfZyNzQMQ7NxrKbfmURnULVrRCri4k5g4CwFYZIhD1Ndqz-jbjW8o76GJWsiiLcC22TT55lW5fGNDVdJU47KCmSedi1L5yQ-FmqoIakMAEGtVvOeq12snQB14VfB1LCy49oWtHAT99y10oq_7bfAaXjRrVCkFUFOYW", width: 2191, height: 1242, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106115973217763512183\">KBN trippy family</a>"] },
            { photoReference: "AWCwydjt043xGuPGu-COTHzJQSKMUmKvkLIr7ljk709CzNhXPjq66IF3bdI7RkFvXydu5BJAOxL0hiC4CLbuR3qdtThQZp0Qah4QQ2IvhGkGN5I1RKbR8LttIeA-mq9cqGsrH2C6r9moxxSSheABuNsHPQV9I6HT7MyozFJOGz9bAX22tlvS71pn_8bh0gu8xwHyzmMDaHlWBqnkNUUWEYH-dOH3HOMD6BFWt6YtlVajSgHLWut7vv6InL9HvYt8QbwA3boMOEWwWGCvwCsbJfpjJOrhBOQnfD33eC7HPNLkI0FCVF1C-EBoZQDLkzYPIXNfFJFg5SA0-djrlwbC-Gy5evC17lgXZ89ppwqlR7_sJlrsjlNszRI9gbx8rV9WIgGR17iL18PLAWsdZwSFhNiw0oL7M1gMtj99hKzD1ark-2rPD7NuBcHqdCxulhkf7px6", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112961439279965577862\">surendra kumar</a>"] },
            { photoReference: "AWCwydjy1qpygK1lDzfjjDmJ-us6_I2AE2rqow6C6CpIlT5htiHhOXUgJdBlZAxDNLVixFT4wa0Gd1wqqA4EpnDffLiga76ih_wlj96XRKGg6DmSbl0rnHn-mQMeB75EDFjBuZevzSqiO49cbSlVHt17a0DvmCGqbMfG_716VXaM4CohLTSlqxcIAtZk9jz3NNlmqjmvk5FC4Z6hNjLzqwQWn6ZMTNw2-76iMImxVPGab4HneAIn_KRSWurL_8-sCtgu6J0LLC06COQsmahfummgbBFo8YGsiIuxYPP9G1xkqEySfrzWCv-SqGCnlrytAkjaXagWt4lYlIm9652CbAinyzlMMcfKpRJ_LDvULjrLoFASOXVfM6Xx-5VBOBfQyiHl7k9UBMIJIhglWPwFFSJlXmh8nAX7E21fX__k_6hUWSDp7Q", width: 4032, height: 1960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115166814478494064847\">Nguyễn Thế hiệp</a>"] }
        ],
        summary: "Trang trại Ngọc Trai Ngọc Hiền 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["진주 주얼리, 기념품", "평점 5", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ngochienpearl.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11890141333609689809", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EA%BE%B8%EC%98%A5+%EC%A7%84%EC%A3%BC+%EB%86%8D%EC%9E%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "롱비치 센터": {
        photos: ["/images/phu-quoc/info/shopping/long-beach-center-phu-quoc.jpg"],
        placeId: "ChIJiS2L-HCNpzERNPKbLjxyvDY",
        placePhotos: [
            { photoReference: "AWCwydiGOZ-JigNA5OfUS7T-2UCcK6xJST-fOdin7SJtbGRWOznVQRUzKJy1nDoyrIRqSn1TRTz9DKsKZF8gl_gvgxHRPUpPWa33rrvToegk1YQyWW-VY1z9Zj9btydFp49jevLmwu07sjo5A8MgpmydcnMlvIZZoAsh5yNBke_BaV70aq2K3pBm1UZ-jPUg_UE2Va0X0aVkJFJIcAQATdl-TdCsycn5vdqamkxcHKCPgL-eFKVWTZrp16CciO8KOw0pWPiu5o1Ks_mjoFkub2tM1H2339v_yYfbHeNEI3bX4X5_zvcv5-wY6YlZxH-zDRElFZM42TBVmI247cI4sDGRPXrT_AABwu00zuUEPFCHoxB0nQnpH3NbRZXc45vmgLweFW6Ld6wHA-taozlFIw4JEOh5xCVXYWWolaZh-4zGRBl2okMGzNR4TIOo9PeRK3j6", width: 1440, height: 810, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103826341348024933254\">Long Beach Mart</a>"] },
            { photoReference: "AWCwydjTXoRtAamCY25O4DpQ6YqT0wgoDNaMddUzo3bW83l_YFRL7kdyyMOKiD6hlQfMXgh_mG2K80Bes5HiyVKMjQZgKz8m6See9KIj0BAO8lnnPYKMurPQOhqfA1LI9sFrJaR_YYZGlibAO8kyq5318rWYN6yOxDgveJ1waNb9uFHCqZnX0mC4fIJ4XkBjYKB7rez_qZnsLoiUxGDe6g9KawD6NL1Xg_JzBvO_pQEhprwiKxMkNHbPIpASpW68RDZDZh2sQ-1CLMSrgujdRDVO0jFB7rIK4P2iUFChun34SU0fJ4pbz5SF1zQhUAiiFEHA-pT5Bd5JMhaT_PxF50k1MeI3J_YpjWfOE6474NvaTukdhrgpjngK2-nzfNOMWoxsthQLADcUAhPCbfIxQkLzNSqNGHD63k6mYnBFMxigHRS2dPP90i-1xdi5HJ5-VA", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117475937274617009870\">하이제이 Hi - J</a>"] },
            { photoReference: "AWCwydh60MfhvU98ShUVb_8szpf7vzrj3kH6LWB3cOusgDRiwLRDlHHj6AFNrZy-K3ZV_CUOkES2-sFT7Z1aqjvYca3YiAO1PmCNpUUWhkjBFX21ANFq9RvzZDbymUHs5bqTt5W14GogCOhcn1oDzzNZkGbjINw-t1Z5i_NTFS6CeUYBLR5ThjZ3sG0Q6Ctqy-xoqPeGS1R0HEqh9t6L8SqIeb00uCh1Nsk0jjVAt5MulaejLiuLQrmqTgM5uBcondTxs5TDCg9UwO4yd8m9XzD-AhIthTViX1l4TlACHeW5jGvsCxVUDaiIvRMxh3bYG5S5PyvGNeJGfCCfY1JQxjOhrmt-tPhDT9QRQm3jXJ1bBRaL1252o5oVL6iN-vUzLjoMvoTDsVNVGtG467bCZXhxJPXqlYE3PrmZS9_bZigVQTlYIu55VRvjChIUz_ZIPKMM", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117475937274617009870\">하이제이 Hi - J</a>"] },
            { photoReference: "AWCwydii2-E62SG6P9T2JDPgMpnJzqB-7Pj-sZMeSv96RlH3WK8kNgv35ZKM8Fvy0yweV8-T5qxG6CXiI-TpNjApLtQsOX426_MoMifPAs8BpDYBW3Oxg8zJs7xJDlj4tkF9QOjIcdpRrobuJ2uporUSKw5bxYqkM24cMdD-WuVLJmYgbO-PUDoiHjgROEKfUrLttt3drtehht9PuAssZfDlEnFiW0KgJA4RhUQLtzZ3xawigLaChZaq-wIESwP3kLYANirLbXZ93Z3X7K4Koxb5HCmD_AV7TuB6idw5ohN_He8Z3kFAZ04apYKXi1VvfwlcB1JG577H6snuaArAeTSaIh5R3y-vgSc4BJ2DxVD3Crv4ATlYR-CE8DM3-bV4f90Uzm9fiRBTe_qN9hVnSfpq9pSsOAQvI-ZcA9nfKrzFsVBbTEdkS4qxkOGPcTqpAxZT", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118307994813416524328\">Manfred</a>"] },
            { photoReference: "AWCwydjuRhOzrvPN-2OnQDVuIJSfDI1YioMw5d0h9eFkuiAB8fmEYqrfL3FZSh3TuZLXyR2Xa-0joiwQTQvIHnQPB4mG473g0HTtVjmj_ps5Yvqp_SsHt1iiRDns1aTf-eZmlvk8bM1h5BgWWIwNrpPAvKfTZ_g89P1PvuZWgq_CJLk19RcdPbh4gUqsyIGxnkVielBUj5IAALnGJAP53m6Q3CPOommqPPgkpP6sJyQjMsHDgZ2MsWb4ot9Cwbdn4VWPbqsgOTXZyM0KHmnbkkQU51cnsvTCU6Pc2UrTj7usM05Hda-5hq_V8tnkI5PgYcrzXlKaBKt4RX7WoIKeCmb5DDhDJ0ZFz8fz4cgj3fJ4MzAC9pQqK-nFaavbVlXTJ3E0Gsa7g-HBYmhjpyc1rRVFgGbqQ2pId3iTIxJ4c45LqiIVj7sXO1mMobiT_Vwg_Q", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109161261938642497617\">Eunice Yousun Cho</a>"] }
        ],
        summary: "맛집과 쇼핑을 한 번에 즐길 수 있는 복합 공간이에요.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 식당", "예쁜 카페", "기념품 상점"],
        tips: ["식사와 쇼핑을 동시에 해결하기 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오전 12:00; 화요일: 오전 6:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/longbeachworld", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1038660241174446076", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%B1%EB%B9%84%EC%B9%98+%EC%84%BC%ED%84%B0+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "즈엉동 슈퍼마켓": {
        photos: ["/images/phu-quoc/info/shopping/sieu-thi-duong-dong-phu-quoc.jpg"],
        placeId: "ChIJoSAPFoOLpzERUG6O4N1jC0w",
        placePhotos: [
            { photoReference: "AWCwydhGu75KWWGnobqblb4naCxPqTrgPc0gPSCXshKA1B-qabsIFnL6uFTh16CKSDZxrT7DPt6tF1gd07VTBoQKDpNQRV_P2jnHDm_-LJfkBpwBcX2XaFVRhEputOuQrpfiQ25_AjxO85LQYYkGk5kC1ZtFdiq7SLCLrd9Us403bP1PqMb1TNzP1ulqVawv2GR01ekueBsn-G4otjppwBpns_BmWbXCsmN6vN5rGu57RAma09YmZD0hSaiH0NOQjKq8ksUcII1ua5WtDubgFBgaZWda0sH3hXqEuRqLwdaSZ0dTvqIXrKg5OgJGibowGKDoi6f6Dn9iQwMOjD80yAroeTfcS_ahKL0VO_XIUTYzlw5NgnVn6sCi5KrLwnBcFR9NwBhBAiwdW9KO4WDRlYDPTPYBbZJWOmWYKa0JrEX3IfyrkA", width: 900, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106363809976886808102\">한다맨</a>"] },
            { photoReference: "AWCwydgBb7tHoP2mSkseJSHsUIb1t3_G4ds4NL1mPgMc5BG8cxT0Ogx2vbSC7QRtSzy0rTRhac6fyifZq7p-G8Ug2JX5wkrGQirkQZgcR-kpHqNbAyeZVs-BvcS2Td8HfYQPHFFD9cKLnStQwNySlT8jrEg0WhOMe_JBfAMhqNi4Zd-FRmaM0VcuQmmVC7rrzuJdvhiRQ3r9N0davZy-WS89wPQ2RH-OSebTRn_CTyUTJCcPjEiXDJhizZqpbq0KoQVF9xG2WDFXHbU356s7RXqoowEe6pOZwK1FTj4lg40yim8uwibX6MYQc5BciFg0AWb7GdBMrS8z4HNwtJHnu02ISg_OylQMNapsFVk-7LNu7Q7iC3aGQlwAHSK5uN2TWAHoBJU6FHwyBeW7UGalq0QHAlEL-G8gqoqT2I3_G-TVb_Rz9WxO", width: 3008, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102211434516182450633\">Maxim Semin</a>"] },
            { photoReference: "AWCwydjJN5YcwpsAKFYGgG-MnYSxOLhj8nmxA_3dEMFsq8h4pDvVZ5lDn0cRQguFUYsD8FyxqGbbscy5bYRUq5KhlhBnWPI2gDzlrhlxn-Z7xkySJgUGQXCj2p7M15fyiLszOX9tD52ynERehg1KTdYxe3fAjBHjfIRb8sL-I9q80Pppy4XdcxIrlRKBBGNeuNIgwFL2A-T9scS_nTOp4ZcqlTq7CbnnlUEDwud0pmRLCBHnoiYNyx37Viw04V24wp7TP-hBfxVBNob38EmmZeOKWanrS51_pBXqBAQ2dd9_pabu68RGZL2-CM6itoh4W0kG7PWN4DNEC-44h3M7398f5DaIvmYNWqQ10PohZY_EWF7-UqNG1vkVwAdIK7QQfF0iZxq2pMHCePoAEtDRVjrYCg7Hxe6fZOSYWsYqnWo8dcB3rxA", width: 956, height: 1276, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106556557419259912572\">LÊ THANH TÙNG</a>"] },
            { photoReference: "AWCwydi8mI9Y91-yc1gftxpWqdR3wjuIwN3W-JLOi9eLqUkDHRTrpjJ4qwAc3IUwN5MQVVdrKIyK6jv0XRJnh4UauZDq70zh36UDQwJSKR16Op3vHREuMbdRwMgA8ARtwDR-wZCtgQQAXolUCzx1U4cNYEr8gFKIpihjreqFoFI-RZZ0fx038fRhZQjvd4NUSqjzE4XMl-tHI6_p5mxIdX9wPelhRTXLEn8bp30Mc3FCnTDT3l0avaVG6S3ksuNgb2BDyxc4hOM81WAAjbyVwun28EdYrFv1amijV3xpkrY-8yqvk3Vzgcnmm_8TK1HhksuvKudKuuwMSLwuvONyVqd-NCrFQuDGqsSgLz-cLnJG8spSs3eXdx8z9rWcLAFtt8H3WrlaX8VenZm5aCkB0EkrLZczh_mHjIc_dR8yR1uxpdClEek", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109001101050862393388\">Thuận Phú</a>"] },
            { photoReference: "AWCwydjRXjCD9Qj5enCGzkt6Wb-5GwdTX2iLBbOLYdsB63zGr0LHPGHru-3PYBfGTUBY0k7z6MLSG9MlgAJFq4BlrCW33i7yP2KI0Sq9TlpOSTWqj1i3xSFz7iGTvNQ7vf2gx_Xs4k0QVFbQRuL9T2s4IoLzzIUTbJs7OXq6SEA79eLeEnQVfF8EjS8r0gQvGgN-_O-n0pXUmjpkyI2-ayNpMIKq5lt2-OwQKJ8cQgBhqlTVqVS7Q-rqS3CF8i87QC6CXC0FvoQAELMG8_UqD6gTIEnSSWJrXWS0Hu9_vKOokCWYrioUmLRo_h22oseB9Mmo0uUapMOpAnCZSCzUUtw3qob2L8ZCloT3eC-L3TSr32m6Zx8-EJEP47T5J6Fn4fiMQDyFE82XN6dtqnnk1XNWbm2xnXAvTBvz38P1K-N895ePlcN1", width: 3120, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110180130802882005539\">EVGENII ISAKOV</a>"] }
        ],
        summary: "여행 중 필요한 간식과 음료를 사기에 딱 좋은 곳이에요.",
        updatedAt: "2026-07-15",
        highlights: ["현지 과자", "시원한 음료", "다양한 식료품"],
        tips: ["툭툭이 타고 들러서 쟁여오기 좋아요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:30 ~ 오전 2:00; 화요일: 오전 7:30 ~ 오전 2:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.deliveryk.com/shops/9748", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8689609646655281115", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A6%88%EC%97%89%EB%8F%99+%EC%8A%88%ED%8D%BC%EB%A7%88%EC%BC%93+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "푸꾸옥 센터": {
        photos: ["/images/phu-quoc/info/shopping/phu-quoc-centre.jpg"],
        placeId: "ChIJbYvoSyqNpzER-Damlo13tio",
        placePhotos: [
            { photoReference: "AWCwydhyE_iY5dtaij3w5RgQ1mtLtTDCb15bvxw1QnXX5C7rQFA6_OASpk6W1eJH5Rd96aQkmLxDZ1awg77xV-gDojMn5kE4dg6_UxSx-GwTQ0GimV4Bl9rp1gNRa1Ft2FRrYrbLmfo3xNqe4BwPwQQmqDLRonv_82u4kOD8t7ZJw7mWOBYS7TIkzrqolDFMNM5eg7qdaTs7PuHHTsrir1J2iYitd11BmNzuBS1M5Ymim9TANQBJ_0j2gI8MwcfxnIHyThxfDUSy2d3Nu4XKRh_OBEecfNGtHSS0F_neMbANlrJcsZgICz7xFHg2n1l_npCOmxK4nim9ZUCZDo7Fazbm8OaCJCuJbJNDVMctL6Q4V6-O9qwT4wYw2E97wtn1AYWXhGynMBshCYfqm-NygvdC0i6gD-6beLAMnq-XT-lMCg0", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110689954005838214916\">Nhà thuốc Long Tâm Phú Quốc</a>"] },
            { photoReference: "AWCwydh5OhqDxdqKj04sKDBs2OyDcTX13BgTpevTPeY3I4m6y7Hl_IIPYADu8TLS0jh_1Slqc6DU_UwAwGfG8tnvj9u5EbrrVrX1pZVIKwY56_Ui7ZOTT9iYgHk571wuMtySej4pCv2ZfsMGHzLwMMsSIuHuVP7rVfssozOLrMuzUsYJ8BjJx59Eg5T3PEDLRUM2-aL5_BJnWtMQbWflb2YH6RH4HlkL99h9lOCB97eVSBDgiN1b0y8opzKZI2GA9qMZzsBuWVRdl8MdXYVcxFoxR8TqWnT-bLdqT5t4kzkwjLC4YfT7bkmOfAqjQAAs2GzMuaYYWhFkTcBoNEkSv1Wf5-tNsEN28Fru8bsXinq6iQAfKZ5ZRzkFU8WchVhoYXttpoT8DD1wQGL6o8pgkb8lnPeBDkwvVT2FRGF2yKy8kvjF-uw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100179160318670639457\">Đảo Ngọc Ruby</a>"] },
            { photoReference: "AWCwydhFwLUrTnrtcSUQJMDBasDQibgWcdElX9oeiKzl8ZnQe5lHnB3TM2SY0Jd2rsms_bp2NX_00eqTcFSKyVuADCfEhR9Dnqtw8CerwbXGsFNVOxpEAVZSE7haGdGFxWTNUkJu7c-Ttn1DnFiGQcfadFsfJzzXTKcu6QajMTFpcszZQ2FQLVn5dU0NYK2IWTra5PAQ-QD_iYWY38J2G3Bt_ql-gFPztTu5tw-LpXqebre_NL5Plz6ExsHQ-FbH6EaQKOS5ujLnthWXqDWciRNPHwfKp1JwDuM_FsaBbAjgZsHgjflS1ZDXN-g3wJ0qJUC4ifoJ07LCVTCB9wQ_lhi-coB_bxyTtf63R9mOUUE6_IRS6CFfUMtPfPeg-WNUGCE6eht1pg_LVQ6_d8W1bp5dnm91rgdQQDo4PgfJvDrrQwLK_ImL", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113308952315886980181\">Tuan Tran</a>"] },
            { photoReference: "AWCwydizwId-9YVRE8yJgXmW7H2clkgWitoRjFVF1Rdf9rK7FmhjjWqk-Pr4Byy2dggKqggf6xtLGfsi6t_VlVgl4YfIXRn8p8O6wvD-mHSEcnom3_k48L6V07UBbe_pWJGrWZBHfnQBGs_tQ6cCDOIzorqFfR5vgde1cItNOymlFhPGQRG3yVD7VvC8YOiIhYav0pRU6Gh8KqgxyZ84_X9SuX3oorOuxf6XO6OHRX8xQACWsKZPA5uBkgsdE_oDV4zCGRm3IYylxxluonOgB6tdQJRDysNRiOSg2Lco3XL_iIlUsB9cvMHfqlFwl8pNecavIx1WJC18RUl8e-XLqiUluw3BFh2Ed88xo87KVXXV-FPQCdEWLEduqa0epztgtNBOayiRRahialcqZN0Ff3glz0kFt572OcgU27SteQaRMmzMyzS4", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109129959251021960774\">Thương Huyền Vũ thị</a>"] },
            { photoReference: "AWCwydgA5DuV8A8JAHfgRQGuUSUJiMpgzHncAL8JXf32K19m92YjYfzXo9hZ_GvjvkHq1jmuQgOphfltOAE_eGQOW2PTvJ3_W1g38B60PRfJ4XoNJ52AMLaTibcAnUjdy26l0-8X9Q6iLyBcbM5Q2aLT7IxrSr5tu2PxW-nL4I685Hag6dMut8Sb5iQBXtT5X4GL3dQX93BZcaJ3rAUrtpmaelrn6dfCT8ML7gk0hkgunsgquTzMKaw9xA5aWDkT0nm7r3o25zFCtd03NzHtd2ff8LNhIWW_kL5D_gZVtiwAijZHqj3gTGCoqWqPjkJL10yRTxZv7jG_DQm-oRqIEbiRPxJLuHC0BzNcag-fFr60I46T9iADJVgKrhvJYLhXcEO7UuCZUpfk482VKCvTf6LqHX9FAlDKNMx-h60gRUE4GDdhgA", width: 2404, height: 1646, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104827953539152019792\">Mr. John Inline</a>"] }
        ],
        summary: "쇼핑과 카페 휴식을 동시에 즐길 수 있는 편리한 장소예요.",
        updatedAt: "2026-07-15",
        highlights: ["로컬 상점", "카페", "편의시설"],
        tips: ["여행 중 필요한 물품을 찾기에 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7880658704697140820", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EA%BE%B8%EC%98%A5+%EC%84%BC%ED%84%B0+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "안터이 시장": {
        photos: ["/images/phu-quoc/info/shopping/an-thoi-market-phu-quoc.jpg"],
        placeId: "ChIJlxqScJuWpzERUZIqbihH-PA",
        placePhotos: [
            { photoReference: "AWCwydjcHchCL9-O7CDvCmaWieE--LF-qz9hiqfhWntqPx9ncu9BjvJkDmfJkSPI8-46cgoeF3ptkrP9r3xRtzuoNTXmt2frThehBA07uKCoeQxSe0w37tiFwghYO9YdK8XZ5n0QId6Zl5NkFVJegEh-Z2dQqUn1vFsf8alQhPRey5FQdmpJVPbgtZ1SWWv-AtRTg5E9QsGLVpysiW3Ubr3nxLZ8qMdRbVJVG_nvrHuwPlmiZ5KZiJRYBcgejcdZKmd7TFt0naerWAGyTJZpHOrjISSU__WA4pWAPl8NcHT3OoaQgg3h-YtuS8DzqW8SRs_WeI9tQTOGmcfue9MyD2Ql6A5BEf977QuDBKCkObhhJe30ayn9LIZXMz7HM-AjHdGm6RJf3L6V5UUkG-SZV3G9WLl3MXIK5x7q4nsckzuV_tfrhBE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105414073172403460162\">Gia Cao Hoang</a>"] },
            { photoReference: "AWCwydi-63NTRyKze3o6kMezfs7uFLOQLq6HrJWsGurX4FXZUGjdAQO-cypgukvu_n620CODaza-Tc1gCd9eB9M7Nn_FdMVTzJZIwcXbDwaGjOHXh2SiZrs_Qn0LjHL3M-5I2RmV3DF0jNVOxfTMKPN-MYO8jrsbxrQ6A4IjJ2COa4DZI59gJsSV-bFPJHNpHQlbIs6gNygEBYsX58YmPM4ypTKuRYE8LwUdg-5u1x8dvCf-dDxISGOGLjF_5dYLTd-w3AMN4v9lr-GB8iLrY6Zib_e6cfBiU99y-kk5oXzmdvnuGe_t-_Vabv3khDZE5h3UFrxTjdsFLCh4kHrOPJh32bkmD6RiG16QUKDIzgp2pFZl1dwgeb8WToSmzBGeyXS1l-xTHGhKxLnx4w-aKUc7W2-wK9s99qhQHFbe7IA0qjKX5znk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112391884281700017058\">Tung Cheung</a>"] },
            { photoReference: "AWCwydjlEYq3OSVSBMdhsQGj6a6xZIPTkgr969EIel3jwrRqYUp0fcgKmmTtJ_mygIo-fUIvRJySVMOxO9x8CrmK7J_SGZXeAz0TR0nDNjjARyE_vG6ym4Due1jMfXrAcoD4sLheA7hh-Y3aHCQk_UppZHacRrfYDtZII_l0GySoMP5Ua6Sk2NcpxfZBtIffic2p2sM1r6fUusy1DeoeVjEthi2YJf0IE7IoC_tSBzciVBVLW6hEW4uSdeoZx_d-zTvJPMqGMEB2sI8PINfoJf45S4gYeQxNrUike85LMe3RLhonzMjNI4DsUeS7dicwmWa0-5LlHBAFI5D_E1AfIKdbtEZG_KmVAyHiSGqyqdSu7ZmwCZ_0v5RWPqpPqO9bgyx-tVCQbhMDWee9Uuc05mJYA7t3Gsoo2Gy0ITOR5_feTpgtBE6FCKA32GT5VH9OEqCC", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108313463998490109962\">Khuong Nguyen</a>"] },
            { photoReference: "AWCwydheW_kUHt4xZXPsHMnjg6ov7kXydaiF543hyBIqhsAgkMTYAoVPywCARZBzebrd5m85OEwiyfrT6qoE3fhkqwPj_qjX9ECD0R2Vy7MJBmE3nWpfNFV4jyxxb6tRmAtbxb99Z-V-suEVZmlgExBYkXN44TInjnkT_wY63IFf-xyXWLicqh4WE8oOn5nmbpEP7cJXRNVj4QlCW2g9zJHySu2uqewsRFZ89oZHK-SdfdREgbPVmIzrriUEsUB_RtgTUbz6J04pc1BSjYkns-PB1N2QirhFI3C7_xxuUCdMruC5Y46R9r_1oIdfPG55dBbLj9LhbO9G42Z2y9Sroj3Ytfywxb4_B2AE4Cg1Eo7KOyduQpW0xhcj6Ovj7SYF1PQ-SlsPLnYwW2jdyvRGjoGPeaSVZ_-QCch50lbxJmjjytG8TdW_dfYjfoNpdidyLbn4", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115963120874821941805\">Slava M</a>"] },
            { photoReference: "AWCwydiR31BlPwHxkGTu_wsHTxdFuHIy-yhtJb78lm-VS0EuYa0Cm3JMjz6eBiiO9b9OhSsI4sp2ZIYRYzT7vLUVcmvdPSyMMDUj1jc3mab0JU90W7bfHtvJp_nIKkBerZh6tU-7XPjgPy63Z9NhAwiEATpsP3F32FRYVlz3FNUeO1t17yerqPuZMDn-eHK_S8AHgnjrDzWpLzPh16tGfNfqqhCLpnCb48cO7H_LbWJSv75VM7bFEHu4xuoYDuHSmTz0HmYtpT7tC0147UAJnCa6YZGb_0cDPC65PJgV8jK9QPqa5amMDBEn_QGT3MafjajIgthq9BW2IipIE7RXsm3jLCAaQ_Ul_jwuvxHDy9I0HqKOTdUN0fLWZqvOrSPeJTGkRb7fpG679fYeM11OwU8eY4rTcIqfAGhI_4iRZ_8jpg65fQ", width: 2268, height: 2671, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100913379781551719175\">Trực Nguyễn</a>"] }
        ],
        summary: "Chợ An Thới 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["해산물, 로컬 식재료", "평점 4.1", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 5:30; 화요일: 오전 7:00 ~ 오후 5:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17363706602299494993", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%88%ED%84%B0%EC%9D%B4+%EC%8B%9C%EC%9E%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
