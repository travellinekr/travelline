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
    "럭시(LUXY)": {
        photos: [],
        placeId: "ChIJn8IHpLmNpzERY2ObzKmo-pc",
        placePhotos: [
            { photoReference: "AWCwydhePR1tmVpstwwWqOTlDlVguGpBxPIx69gjLrigKl5QVSsbNzZHcPtCAuV0ugY7vUmOjPhNt-X6xpva0RnzDx2lXZOVsVCiV-h2RQcuGMIEgsgLh6Soe8HDxpJUJWX-TYheFHamuOQy7_mGCnuhGveDbNnxUd29GDR1b8tDaygVGTuTEkhPVca4Hx7_SFx65rYhhzaCYyf8FTwnsnbdud7i-61IUCuctigbdpHnOF7vd26y03IrgpPLgndUThFPxRhCml8H2ihvjaWf6bo128KWzTqlI4LYaTy504-y6WULdjef3fobefAYSEWp6izvJlAdyahijfJZvda_rH_M6iok8RCj57l-FkcHLnAEaGwLeP0x2P2FyYJbyhm_6ZErvXHMVeY5pjxkz57MH4Ts2x5N-FFp54ah65A5jRfDpVsqOjGIEC33QRNapdwjaQ", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111759132453449242628\">LUX (럭스) - 푸꾸옥 최고 명품샵</a>"] },
            { photoReference: "AWCwydhEDpCmQSHKGDx15NDCboLP8uPBepN9gx3q7Dd8792g-uMHOmffbDqIqga9GsunpJLmDZPAspt16WIOvsTFxkEudXit7ZIqwcb8HiV9ll5dXhGTuFaQ30AvQ48V6z7mbd2DPWevhpWINwTrSY6IQ4fzy6ADVxYnVUt4YKfyH3i3iITvo_jfkY3GQNsskdAfsEG_HrBd38Snlit9aZ9G4zeOgLV1YvRhQRMnpRxQYjcJApMh7UloE70uoIeHw51O4Pxop2wpINy629QvY4R8n97y8Y7Ys2PYABcC2jgEbGJ7bsAZZnP6S3zqtAyfca7Nok0juwHjxiYkWeeKd6_Gp-6r51AN0Po8m64wv7imsnjnFOjN4Lwy5gyeI12sDYDDDpK54cSuUvt_WQeY3i0PeeWBEEk9cHACUnUQ4JFysBFgtuZZKwqLvmE7IEUmsKW0", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103416633804963189628\">me taphor</a>"] },
            { photoReference: "AWCwydi1SJQHwNS6g2cV7LRspBrO11NHzi3hU7v_kZHw2OTmk8WDTqahJMAWtq4tjC04DqwQuoxFVG0-m5kz3RA9MV0LBK03R7gGBv8lAJxcfppp9qYCL_iAaBwitIYsfSrxoI465RZkgEzSDM9Tott_p6iBf1BpAdy6xSuoah82BOsKp9XoOc5-g03x8eHzAxsIEM9qE1OM2ehQ4wXLUtDgC-9umK7yWtJxhIHfR6gCu6wi-XBYuGJR2xibFhx0R_4T5qdhYB0GCAxjfY_mY8xJJTNj-JTeLBMhH_TcifoFPsPSScmMfu9xw1ixybTN_XxQ9CQPvwGn9LnW6Y3IctLUnzvvaLvas219OkyDGqdrUpjtPRHo6zNyuMyQ3MH-isA4OHTeUWL8EnRkN11GW_6pT344xejx9ss3hep6z14utVPUMCarfSwIKssrmy501A", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106625343707479652257\">jua Lee</a>"] },
            { photoReference: "AWCwydgSbx7bpI6cmutEs2ALHLWneHEBoufX8u3z20ui-L_j5chUqOSqhfCWk7m81r__EbGEeTYYGISzsFmiebL9zZAMs89fZ2l-S-xLpU7aHH9PERA7PSCzFFnH94LyfFIynJilG314HhxpZJgoPHTWZN6yQWp1ieQtumSsLUiq0fN9tETCuPc-NmI3A1WxNrIuA8wh9Z6A-HNTlgUgNp-vTXcNC2xJDHWL9Ic-UjhTowBUWbuvupg4-Ffqbc9_O6I7NPRa8gZEdZ9Y3f-Q77c_vksFg7LA82NplVn7tD98cjA6Kpdy-klLQdO28uklpVzcs7_uOwehrjjwr5bYDfyuFBNxoYWuKNurA_XEe71lp5sz9Hxm-B95KLhFinFd6FfJlWCeW9gyxzxicuf2sjVPEC7iM0_J9fgzoWjnAB5xLhcpI0zy9km6Qa1UpcyY9g", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111759132453449242628\">LUX (럭스) - 푸꾸옥 최고 명품샵</a>"] },
            { photoReference: "AWCwydgBHE5MVFf2Mk8IVDdjZKBPf5NvZUrL88eS-y3E1RC0RfOp0YbHraKzp2x3_qlH4ANm9WJ5dLOictai3eMR4RInKi2rUN8nd_u2YUYPu-60FpDeCT7ryecSUffnIBKuI9CBFSmPl4i3MTSsTGcMtSRUyZ_bW0n0VGQRog-QpiIJOBk8056w4SpDcwmLNjbaMErGTqz4PjY5To6wK-ow39D9yVcvl3PcLnPpGXUEna1mt2C6W223LWhYXSwRsdHrmX2oXjNDzRdoj-hnhx0S4gE_WSad4OpUIXGXXT8EQHM13f8iFZjNRDdX69K40C78sbJYNbJNgHz25CqTime3KU5SQaJ4XzxDx_5iMdhDtcl3M0thsE4mQ8rWowUKisvnypE_qKjLuKLVV8xZGLaDrHA_Al-5AassBwalJpMD3sfGYA", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101821529833711037234\">붕붕제빵소</a>"] }
        ],
        summary: "친절한 서비스와 좋은 분위기를 갖춘 푸꾸옥의 인기 쇼핑몰입니다.",
        updatedAt: "2026-08-14",
        highlights: ["높은 평점 4.8", "친절한 직원 서비스"],
        tips: ["푸꾸옥 방문 시 필수 코스로 추천"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10951250891140457315", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9F%AD%EC%8B%9C%28LUXY%29+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "테 세 지오 꾸아 Tang": {
        photos: [],
        placeId: "ChIJc9WZGymNpzERAxeu9URRcQg",
        placePhotos: [
            { photoReference: "AWCwydgTblWlNNThQnCiwvwODqAv72KSidbnoP8DLUOvu-wC-I7dEATpV2WHK81Qc7z2f3oW9NY3vPJsSbbq2DIPoEN7RT7jUeBqcxut5CEu5Riy5WFS_cQVEfhh6IDFe20fa-ZNB8x3xAjAFuewz8t5-rX9K8kpUhkyyBItln3CGBp73kRhjG2CLtIkesJu_h-1B7JcoQEw-hsaXlQGuv-nCnIJcT0K0mP36fP5Hd-nrM7ybyuVBs7NxzIFati0UWvXrM_j5M3Pby17FSiA_bqxqLzX2ZpEjjTzxPVUHmSbRteLo7RTm4M3RreUVH8_aH0kTSuZtruhKJ8VRtXcFbolrFgyIWtubAWz3bZht_pPwVDFBTSVsMgL63gse_Itg8UNifS5bXUh_EC__LAhtg2yvKAVhwfrqZBKs_AJXWyRd5336B-z", width: 1289, height: 1509, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106918473511910326676\">Thế giới quà tặng</a>"] },
            { photoReference: "AWCwydihCeExESuA6KP20ZTfjfLH6yHCFZpW-_LRGirmlSio7BxhUfuJ_Ve6lnkA-XfudzCB-pgt83BsaAw8ifazJrckE1DMcsuL_SMAlyAju2WC1XMRL6J6E9Fs8XaJPI8W90K3L_gALfKocjyoZlO9xRhzTZK6vXA1l4rPQq55f-04tuOyYagMwoLcfR-zFVSwqrq_Iv7idKmA1PC5A5y99jqt1Lj5SnjN16p0bHnTDA1EmiVo5WcOyI6zhjPW2eFQFmwTgMONPovkcjuSyglaH4FC0ZCT_dCWK1avODoczUHn6S_cbLsZ9jyooL3yv1ybaFhZXoOmG1mqI_OiNFVX8OQ1gqFQk6rcEbRuAhDhEJDjUJv4pfuzdr5-3GgM67R7TH9GI_qPqG3RoEXn-_UWJHq8otFkmGjsiuWqHd9Ymvh2sg", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106918473511910326676\">Thế giới quà tặng</a>"] },
            { photoReference: "AWCwydjgMCps80_fGFxz2z4DzyLwC0y5LaWRJTK3o3_rJ2MQbk2vQLlfuayREzaw86YvkeA4_V0v4aewow_j_SbYFnTFMCgVV0TQvGCtD1yqsLNJNE58vjRkNxPCsWgHgIgaYPYLNZn--m3eXnL_lF1KSby25vXGph8hn08FzwpStjXA7qDAwho_AtM6MZwpDur2FpvwHoO4OnyQoxcyOIbswH3WA8rmQce0v6x9_iicCGQQ4SAeRjFj14f9Go5u4MmiYsMvZCiTC6TlLe-91SKfOvfZzFhGyuP53QReuyyLCeLuOnCBAHBmeRwuU_-9_wtkrc5yYbdPXRWEVxnshCfcoaRDx1-tfAlUs-wsrTB49iQXaztnaklLppXLbEdIaC9CQ9i8k9Yl6XlGj4FL14Vi7ejEPrIUODKQx8egQI31EM6wk8m4", width: 1088, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106918473511910326676\">Thế giới quà tặng</a>"] },
            { photoReference: "AWCwydiycckrHyBPwSzfiKZCkdu7DAoP0E0XtPBBwl73yrJG6mAtwaWRGwPUt4wtKrlg4feo19Uw5LjZMuYofDBKINsD0S4ckKLFRWKmkOHM7Q5jf7oS9df_zIrYgoD0hbMUICf7JKXBb0TPEX-Ctpe4abHHV-rf0bvQM2PvES9TtNaMb5JPobPRjRuXWrwIaQOhd6u__xxh0G6Sx9kDDROVw8DePQ25KOHE8aeuq88Aga1FE4YeMNwDNNITElEVaRY8lLO707oyktCCj8PViahDPON_DELzh1a9wC3v9Ijtee_PQzHLBwouv_FzEHkAHUAaBOlrrLRZTlNI5QokN-fs7K2KwxgLzZHS3R9XnxxxK2te5PO-XJiczkd_gaNw94Kr5RSfomDVXZNZCgOa_X8aw2BvUplWOZO_9QykQzlwptPFJCsG", width: 1926, height: 2568, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106918473511910326676\">Thế giới quà tặng</a>"] },
            { photoReference: "AWCwydhBZ10W7KMshcGExSeLN8kk_Khzqev7MSqasZM_DrjrCsWAqNLShprNSRYaQaLmnqKanySPGydTDGohpXSyoI0X1ZiEGVyXy0ObV_7UBiT2Z3FHW6luoMEV8jDytsFnuvCGTH7DdQl6jtw-sCmWsy0eHRBJLQwVjak33s4gfQaGDsAi8yb9-4KXSdJn0uP20JyOY-PJr7zhchvADRjQS3-DSSDYC_RhT7d1N4fczFO9Q_G2PHbZO2clGwCeHBrnwh21HDnvKpzS3dkwwGsDuBkQYWl5G4Wh0bKicW33uQrEPkiUwe2TjZXaDH8v3SBa53KUCsnW_TGyaxGTjDuXHdQ2WhkwOxk3l2P4A5Xgk81riHfmvuQYgZNEm4vU1VsV8Sh7Yo1Gc-RKZskd6JQPe-HuuPVbqJwHj4jFNvDbC0A0x1IdQBNBwbv86SOuBruS", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106918473511910326676\">Thế giới quà tặng</a>"] }
        ],
        summary: "높은 평점과 친절한 서비스, 아름다운 디자인의 주얼리를 갖춘 쇼핑몰입니다.",
        updatedAt: "2026-08-14",
        highlights: ["쾌적한 쇼핑 분위기", "다양한 상품군", "친절한 판매 직원", "할인 혜택 제공"],
        tips: ["진주 반지와 귀걸이 같은 아름다운 디자인의 주얼리를 확인해보세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 11:30; 화요일: 오전 7:00 ~ 오후 11:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/ThanhNhanPhuQuoc", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=608356781293180675", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%8C+%EC%84%B8+%EC%A7%80%EC%98%A4+%EA%BE%B8%EC%95%84+Tang+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "즈엉바오 시장": {
        photos: [],
        placeId: "ChIJVzD8nRyNpzERLkLGhy9Z2CY",
        placePhotos: [
            { photoReference: "AWCwydjTVvFKnXz7uG_WnAHy9MofgeNXceropzy8nMDg0E4VIrTuUoBa32MZ2YBZgl6L4zCZh_CabSQTwij1-xdYxWxryxoWDXQ2b-RVL-I-PHFcTgekg_8oc9fjMfJYUyxR748v9YC5qid4mN67zjbc6Fx9mq5O2oOnD_fzWjORQUb16KUsn1L90wv3cRnnHkKEpPZ_cZUjGC7Hyt_miPjTa6dw1zMTPdJL3M-7OACQJH3vOM2SUfzQYykiC4EQ58xfeK5qCAioKQbES0Fm20o_M0h5Wq73e0L6tW3oj1R_eyt-UrGJ9D5IlS2uvp6u3NugW0UbWe-o5ujMtoDoXHYrxaC9pVtyVr4arLhzxWlh44m59bHNNKuyqIx2_hGfJhZmjKnERluOBP5ErD4OQDTW9A2bKJshzmesP4GonJwRdE0xxaPL", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101711516661986599818\">Darius G</a>"] },
            { photoReference: "AWCwydiwY4ibIBKo70SrqwPMRmTAhkftBeQNAHMkjaNdsypjxDuz__qLizqjYPfDqsBE2F0y_lKKhoov1xnM5m2KHNq5fD2JENI-U8ROT5rLkIYO4Vi5I177kILqN1SlgcUwK3tqd691_vaBvAF-Rm-A4wtofTKe4CHEKvXNiLlp97LoBZKGvjVCYZD_-8Aq3AGOe1e3ZToPDUp6HPeEKsEtiCaotOZadAzYdpgTXb5stQzw6MXVGKXiQnQxhtBijq8zVVG1VTuHoO9uxxGC6Ns8z8y2cnZTSW9v6K0JoAj2hiedilF4eJiGYm0ggIxhOvwxylMmIxNLEdXDZppAPGqtjAnJaiHHZ6s4rhFooL_ZLpKMjnZGk9rnt1TNXMVmGuHLqhE3g8zr8DdedehMkS5GQ9D2D62a_PRgpMv7g-eY7C7BYA", width: 3060, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116506931443541277338\">Antonella Turta</a>"] },
            { photoReference: "AWCwydgdw4IoHEgsfckY96La2JaPCXeWxuSCpWV3XHHmKc0ljzmNT3OV6fldgBJZtB5WfMR1_86q70XrzHNa64_U2uSPnrZGOl-l8K5nn2n46UxQYznCtLJWiftM2oia57ktRvlIUQ1AjqHm02l7P9jVfjoGqrIUni1vmVFydygeKYQJ1rhUtzNYeWUF0tzHdc0eXEnmiu1N1cbjcexXcvsuRP9OHLg8Bw8TOfCQ_8qw6I_pKte712qWPeEeFVlhQvT7erWsWnaalLNXw51JsJgM-D9YX9Nl56u0Kc2VqIIJ_L1ue_0hbX6NQ095XhNaYKCrrjhJIUxQ-ks8PbgggowhMttzSSTxRPQOaLhhWVBEDL1W4xFXUXdf4413Ci5NS1-ujXIxlQ4U9i1lT7l7yIekW026Eq9hwClG6VWiOkpmveh5BUTw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115179655403305334774\">Đức Phạm đăng</a>"] },
            { photoReference: "AWCwydhHzkFElUGF6Tq33mZBe74SEgQrbOTKtGJvSBwTw7Pk6mzDh9ai6qXi0eIhI2Nqs7w2CMDjqfugunp2NWS9gFQCeiE1TLKfZa_43n87ZAHRHlAiVqyEoCrIJ44DVBp6rAyAiq2fsJG13LofxBFJGsxI8hel7PWWDlNQJDP0LLkVoEipXHp73dfwmWCEijevIzDq7gfFiWSg0akMX9zSUqd6Ht3JUbtLhiYyO1iSOwOlVVB7O-ZJamrgDYQdKHvH2FDp8Zy_UJuiiY-y5DXREx4XG1SOe_qMXjaakz17vTnZtNAQQ4OPJCdu6VRORyy5AUeR9RMIXdbKH1CAK0-XTdSs8nHfww-oF8WHnf2jD9f7rCntrTSEOzfu74Tz5UKKRCKyhHzywjjCV6a25ZoiEJhsaeFuduaP5p56U6F25dVhbDRe7LlWTcRBF0Ou3uGS", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111239830161143031402\">hhh Y</a>"] },
            { photoReference: "AWCwydj_n_VxibHqp3wE6i7BI5622V5G-WC11L7XLNn2Xk_FaBONeKn2q9BwGOHgaoeA9tEyt9qdAnIZ1XuaybYS9tJKKpknGtQizZWxEY6AENLL8ySWDCT_uhyuE9haWDB3g-VJvOUzEP88wmTQaQhbyR8TZMZJT6WnUSDZi7yDsAUP90HcThiD-Jrp-L12iOZwrC-bMler6shsJAGSdCC1ZyTF0cUR3zGxm2_SqIcrKLfo3x5qo_Izv97E8D2QNDL62UraDjKvF7UcCO6pyTFhqzm5p7OZpAZsqpyFdrRU-qf8AJl79El-IhdOybW7oiL-VFWkD2jegUJ1mhZ6EKOglBCc-Olno4bIEvsfD1FuFLqjYhyv1n8Y_6Ri61zIrtqm2JSL4pyIW87dlaXP53bObm4B3eiopVZ0yEPkXpzFYTG9qA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104418998492111982496\">KJ Bielik</a>"] }
        ],
        summary: "다양한 먹거리가 가득한 현지 시장",
        updatedAt: "2026-08-14",
        highlights: ["맛있는 음식", "현지 분위기"],
        tips: ["다양한 먹거리 탐방"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 5:30 ~ 오후 7:00; 화요일: 오전 5:30 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2799085229087015470", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A6%88%EC%97%89%EB%B0%94%EC%98%A4+%EC%8B%9C%EC%9E%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "킹콩마트": {
        photos: [],
        placeId: "ChIJRQVFmFqNpzERu5Sg8_W6Zoo",
        placePhotos: [
            { photoReference: "AWCwydgnUcCY0f1tdOTYVmiaHNYaQq8anbED9ljunI4tTWW-2TQbWxPMjNPQDBzjn9l09NxM8f7_x8XqDptexFlJ4hu1yKWRoRWPlOB5x0vH9zHK47X3RveWG6nOwjumXhA7R1j2jM8PyjeGOWK-qXZJMpmmO548ANZgdlq1KPaowLMk6z__ZlxRzgyizZHnuEBoQs4Bu1UKAP6Mf-IndsdbbU1t2GYFWmPrY5lRXUAKrs7MUx6vQwFDkZPeTVqzxvdx3Kh947Mr3iqqYB3eDbds6IiCgFLGNtL4rhfPc1taCNApzU1VgnYEHmdJbf9KC1D738g6yZgIHdzf-DZYCoJKIEzOYyaCxIr_aD5SEoF1od9HB62QnCqpOefeT4bSmWRbd_9wUD2sQeCIcltV6XPD6RGW_ct3TmF2lEf6TTO4w6-Oe48", width: 1108, height: 832, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108707775091621490022\">King Kong Mart chợ đêm</a>"] },
            { photoReference: "AWCwydiXCcM0X9vKB-itX6-HOr6WAbW0C2amp7rSKBJvb30EJFOlYRbOBbBPnht1uw34qVQNDhoJ7jdOswe0iQW39rI7xOA7d0FD136czwhW9dtK8r7G9nz_N9w5xXK4IOBvjLiiLXBAt2rwzo_FQ87HO9KxKiZdU2bUhTF-x61lhiMkRE6X3nOB5A8_kSaHWAPtmhKwGFzVtTHr3JTySQmsCOw68FYJvgYEINljJ1a2Db0d6xvXhIvSK3Nc8ZFmGHeFxxLDb15omMIjBD0kr15DyAijiZ5OlvuNuXnRR_OlBzn-d4HF6z-8OE7SG5VjiMiAVKpzq0VhXo_Lju6DdEfY_RkCR8e-ZtmaGHRguxYKHafamQPyYSLdot1iBA-0YJU3T7hxU56m26dnSLiOwHMRwtDyDrCR5GoJqwA2U89i6B27u_4w", width: 4032, height: 2269, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111388670343636030119\">555 KING MART</a>"] },
            { photoReference: "AWCwydh6xSI42-hgOl-4qip83EDR0KCFLlnhMO0RoEpUjHAgbd_UITrW9jciMnE5NESHTuRxwxi3P1cFcGelCv_zXZeXbwwRjKzaWKbzU5qCJsNIwnP40R7eiBh_u9--lDZis-VJQUPfhx_7q9G4vLZ0npDCzNsCfDD9aYafq5JEwkz9YL5Qqlx-K42SapFawssFB3lTnExfCXCOxCAX-sZ6InB_9y36WuZ9ZUYu0ugyfjP_3ZeFF5na1lFRjeDTQO9Q6hrgvVymIJ8cOI_IibnX5heX9v_rH3lBzezS2vq3gZ3mjprIqbBok3IObWhRBAEq8wjM_MsyVNneFTLZe9jXgJl6_CKHIe_YrhboT-w7WePzCeAtSEAItDZPH4Ef-os9lAZv4eCpHKaOEr7v2GbBhUY4MS_gdD_Z48Lg2AbAUwfrGzI", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100016570723604685960\">Nguyen Tri Thanh</a>"] },
            { photoReference: "AWCwydji0GVBJDM6UyDz9a-0qLXhF3Ybjedpyfj2zWPZeamhEjWk0WoV73JW_ONSsB0GBgzEgsLoUzUigOz-AnVdJ-U-O9ZYiD6ImfWYLZIsN35y1krC-cx8V0ou4wyniPkqyNdOHbl6tyCaX0Nb-MN-zLGNmEbwSCwyytnVOXLJYpFbuiu4EDjN9VpEISdMFqAmnaVlvxdZXQRpFIMGYcxTxmP27tR5at0kFnYlUyUCHIJR-hmosoMfjJoRBZ7k5M3aKyvNGUQzKMoim-aY0ZUIFPZErredrDneayZPKSw4VyXnvpBlHRb4tbNAuXHWeVMhqawQn_tVU_8kuaaYhOiAAgpfiZoloyznAEbfFulr4_nm-qcuUCEih9tXih05oeXE4IeCoe4NlWRt-xCiTweW8ZJw_BJvNOJ2edZKk7D_jUoeRw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106888005624313793546\">Le Truong</a>"] },
            { photoReference: "AWCwydjaVgvntCnLLBxHV-h2xlNpPow18kLeECXasWTdR1WFKu0A6B5YQaAMHfUxHLdDVBPhWRvFonieg13HQkCOaBLg3eJexSROIzR_qnXgJDYuWjls5ZDREQf4qkp71Vj-ocPWpsc9BqSKb_AqpnHBbixvx-n4MJa1qqZ2lvxRmQphaVcwGvziSRkGBD56T9SzFn_Hg5hQIuP3M16haPvjpPhGdkJ73b4ZSDJSrvan9moCz5n9KGt4Le28opnprgmDmXQXNJvnIGvUBQCXbyMmxYmB1O1Hx0wegapxMJjD2csZijvcCEk2jvNex5XKH7mj0rRjkfqMUOgSITINLti8mGYkyackWUWtqF6iLKR14CBq32299ERU9JW1Hqm0z8js0hu07JbI683KuI8dGJcQ-UR56y5qD_RvYhEnHfxIu_BgnQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111336655342050848430\">Bùi Huy</a>"] }
        ],
        summary: "가성비가 좋고 쾌적한 환경을 갖춘 푸꾸옥의 대표적인 마트입니다.",
        updatedAt: "2026-08-14",
        highlights: ["높은 사용자 평점", "우수한 가성비"],
        tips: ["에어컨 시설이 잘 갖춰져 있어 쾌적합니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 12:30~10:30; 화요일: 오후 12:30~10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9972863990375683259", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%B9%EC%BD%A9%EB%A7%88%ED%8A%B8+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "TR 마트": {
        photos: [],
        placeId: "ChIJczqbAkOTpzERdaHoPPH4MBY",
        placePhotos: [
            { photoReference: "AWCwydi4G9f5bO9qHvO2gLDyNXQDW-o5spK9SP2y3xPxPUA5LxA_kW5_K2hJHIzCZzWDC3VWlXQYT24tycXNIrRGxK-3pZ5MArVBRxNuvRKZc3viC0l8GOG5cNTsoiMHjh0E0h6GJHWHSPw1cKpr3T3sUljNfYWn1dOUyXGk2s-KHIoYzcuyiPMoFu9mo7VTG2zCjqNfSqoWMWQ2hd5OR4ZJ4O95-TOetYUPQnOsv12qZ66OJ49TawHC1MPQIw7g4WdosQdrbrEBnMCWPBrASE7sKyOGrAahFy9lSClTm86fCmnaBbXxzBAc1qRVOKP1bAKZbUXPfwHHv1u7fyLW6y8HyG1Vkw1GCpz0eVT4Rx9kAAnXjrbsT0TiYHgfusyeuzxNpvZSDTKwtbIJ2O8tF_6wmYcW6NnqAUN-k0h72Ln_5qwkr0vlikMd8jw-XDT9xOH0", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109446504091037127254\">Bluer</a>"] },
            { photoReference: "AWCwydh0h6_SY98hOTdt6vlnD_EK6HfyXDbfclrurwVu8R9D3R7SX_CKFUbD8xzJcY-nwBmybx76xXasixheMjRUYjh7MdJl4eHWgVloYHvmr2-aN9u_WnCOYePXqSJWXIRTx4FWAeO75J7tL7UzmAnjfepssDe96wdpV0tKd_2n5n496LGGL4J-fQaJXq0lmkEcZWVELOFkI1IIC-3nBUBgjV9aJJQlg0vGLy3kXiss_IHtdv9Gm6WuyohPXGVtY7t4rAKO-jwB1cHohnnJUr_3RX2F53NGyLFgTTwIdKO3Jiwel4laWq68UNjCmAsI9Pv-Qsh1XLQdxOfQQyYxUe8TL8HRaflOEEqdRpVU-3ElENRmIAWEH60NSGlERcUU7ORyIOTKRhcH8axD9osGpsEkkyuMr0iQQirmUxzyuSmWv0kEJ-J90v990TZHOiSeGjg0", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106151165297378459421\">TakaChannel _VG</a>"] },
            { photoReference: "AWCwydiz7O_PcbO6Tj3akm4QYsDXRnBAL7Nti_UzBOkp8ihntCbms6e5nvMkm48tL6ULikj9kdBCcWdvTz32c7hC-DLEgJPF4uzTxiW05bUqhRqcZkCwxLVYSKrpkB4xkZ6-WdMVpxwdz7pOmVKQtt7w7lfBOxRdgbf6PZKpYbKmBdo7x1UHzp_GZ4beqAGxFbEcZnjeThy-WoycdG5OgzuPrELrhRqW1Llb6fJ8iif_k-xjB5m9a-SPfmK3QrN9aXGB1_P-oDqx0EWdfWJilwK7x0C59wVreQBQ-AU1NA9DBjMJ_ZT7Fy4YZ0LxM0mkjeHzrvPqrzX8VbOikPtUWUxzVL9-z0ZzyPv1jCYEDvVLSnt3vNBRSUxZkZyPATNesa7mXtlQnT3rtVd88ELj-dh4h5NG7PKE70KhnK2RHyHKLbDYIg", width: 1613, height: 1075, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108749500118123737199\">Huyền Phạm</a>"] },
            { photoReference: "AWCwydhXO906EQIdZ6KmSyVsy6OG4WEcbVRhgwORb-IONDMaIdx9MIYHXg9mZ5iOm36bnEcevNkWyeFtryBZ05VdHeVlEYAM358-zkVJ2sWKdt04cdQfZpYO5BH00XIRhPg_k0inmtUH5t9PNWuZ9YwDye-kR28CbbYftXsG2uV0p8b-1kxgkUoOmJ69Q-Hr8HBrlYm-i8S-nqMNRXfg-Wlu6sejc3Z3wxrN5VrbEbrqk6AQaD0Eo8IuihwkeFoBpiJBHpo0b6oBBJxN7qZIIllUReXPsOm7EpWdEyla2s2vezY_e4k6ENcVLtXNGrA-LtFXwPxD1wbNhw9egsvWxfUzFjkqXtyYMWME3IJ1s5taQRIHN2oLYXmmxQKrOgGJLPa4xxi1PNMKD_1d1KM-QiG-XuJLWexJXax6wieqYzBhMCI", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115152650804724745048\">Luke Phạm</a>"] },
            { photoReference: "AWCwydjyVL2QWJ28BhyadkL5-7yyDU1CZ7aiSlO4jmFvAMkkzvZ63idI5snwKN7un1tz-DrWfotaRUZdzjs4poO2VuFIi6-MyLyRpuUTw4Udt9L48SpPvSARB-obHkYH-BFstRVmJmva_ZhwuAwpA2YieCwLdGDLEYtZ9VeFxaX6ohZa37Kbardvq2LWvvu4NJ8rbRTJT-HOMPN_Mn5Z0q_IY3IN-G8UTk7P24dsuBRrcY5QkpIVyMSntXm-Znm_JoSkaq4BTLa-okQlGrgbo2ztk7hW7Ppyo_xhB8Yvk3x--23ZO4fWH2hOVmmQhi7MqrleRSPly9BaSMn_5Ed6VDOMND6AGpldtX1uHwM6VTFdfssYYS1kDMeQz-oGxIhsaI3ztcbxq4TIYyLz-UFIi6Fl9hVeMWM-uMyHnwaEnSm01gglKFGV", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108749500118123737199\">Huyền Phạm</a>"] }
        ],
        summary: "친절한 서비스와 경제적인 쇼핑이 가능한 소나시의 슈퍼마켓입니다.",
        updatedAt: "2026-08-14",
        highlights: ["친절하고 전문적인 고객 서비스", "편리하고 경제적인 쇼핑 환경"],
        tips: ["호텔에서 슈퍼마켓까지 카트 이동 도움 가능"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://trmartpq.kiotvietweb.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1599051582709211509", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=TR+%EB%A7%88%ED%8A%B8+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Z 마트": {
        photos: [],
        placeId: "ChIJN7fxJQCLpzERR-KWMIIbKAQ",
        placePhotos: [
            { photoReference: "AWCwydjtW9i4lH0Ori0D9htBFTuQ8acUM1z0-6HVWMfYkoa0i4Opi8j--I4mL17uS1AD8lLJINwS3rSFObbGHapJrBfZwaCD0UGVWAHRs5HTYt4jV2MaicmZQRuYvvdW2r8cf-W3Y-uqgcpsrC_ZzpKu9gGhYYJJeiNq8szzILKZ0EGx7l--jRtegWALbudx7Konrf08WPWP21dbjY6DkDSVUx7pFJJIai5YzBUfWwYUyS4-m74ODh2kDZWrimRkaBCq0LbW4sL4iB_k7NCqV7UUm7M1eweM_Zs2s4DWB4RL2Ggzww-YJwzPdjuO7o1HweYUXpv2p2UljuKrmzcjk96CK0ldC_kif16_Mt_rSTNDeQlOHiANiI6soAcYLjInPmIHJ-HbB8GyPQBM5oenBOyotTQ_UGTSx6MXi6nqA9dKEUJrUHH4", width: 1616, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109550373783344883773\">SIÊU THỊ ZMART 3 SỈ VÀ LẺ ( ZMART 3 SUPER MARTKET)</a>"] },
            { photoReference: "AWCwydi5uWxLJ5SxmHjDk2RUcMqBMx72KGYZeoqjQwaHkveJMtaTJueRXjjCQF0kZqYojJdEQQwAvvvVS_gBjVOt7y73VPcMM5-it5ITwJGTZAbSs4bzevGbMZ7i1L74xS-DyxDP8EZ2QGgast2Qlc1yuvBWkkL1Dh7A6fMp_9j3p-LklaoyZ8dn2ddekYhk6GdGHxBNDYzK6LIwWucWAXZGj02PaMo_LhfmN3bMZJMK-srfZ7d64gevbhhrfCc6dMTfKgZtA4v0XvmguJOHsY1-0dkZcFCDk0pkyDRrPHaerh_a35MDCc8zz-jQvvkuBwrCsGp01LB84vZT7me_hyQzJDJXLFhRNa5hdH-aQRO0wZmKloLa9r6WTmVFIS_LABHcZ2uA80kPlN5aBWbQoyIzg6f20hA93T12t8A4bseGT_IZANl6ytIavWt6t_haow", width: 3614, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114164043892822787289\">Josh Dobeck</a>"] },
            { photoReference: "AWCwydiAJxObhQl6B7Qlxb3U0_gQIUwcgPXfvHLf6Rq3JTjPCjIVaVKim75S-NPdisixPZYQImmJa70wv2ivshQ278BvWFRnOyAoj8vaZ2tt4UtYwjI9KY6DljnTJ5XyuCdyd6wtTGuvjmm8AN7rIE2v9qo9dnLqPkM9bYaerRDYLJnQNVgX4JLlfz30nkzWfgiALikY4kSv-tqpwaTPQS5bCkMVCpvqz-cd6uiPz1vH9Jxt0fTx9FoAjsNEvKx7O05hXpqgSBb-VeuS2rMOd5LEFmEbfyBVJLXEHNfdQeGilTATPF4W4URXa1p704tHW4wbRphGBFn1zFL8BtabdLf608_5A7uZXjHP9DjJcFVnyzEXpKqskhFWmQzYjtp3NaGvVD96uKwWTTnc38mrvWE3N3DEt30vkLiYB2APTDErSnYSMA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117587676464328360636\">An Bình</a>"] },
            { photoReference: "AWCwydjhreC12HB1-1ycA3aNf_7CELxt0SNauPKJgmdkR3yldYOzTmLBh1yvK9ApHW77GO2PdVPQXnfm0rBfV32-R_29IRKmJLer9IR4ejgr-7blZqeOKVeNHzfIUhZV03YWq4kHbyZqSoIUYDV7z5kH3iIndYWH5PjZw12xkqjnsLh-RcWb1Nnz4jcqmTWcQcIq9CQzPs-EccUkRwaxukTE9fE-VR98H9GH6cps-OFOMNzQ9m_4fGDv-yeN0sy88XEs1AfZz4kP7Nc-vmxEw-2cdMbr2HQqv_j8hjVQrmeFxO8H1OAHpJMKYMbGZ7GLrNb1YkV217qn00pGye7qfFD-p1EA_A12vIUaEp2jsclsoBEuuC36gjVgu-whlMtWmi0AGYSDZsrFDIt5_wwq5ijjkFZEIR00KEWWf4BJj5kqChav08I", width: 1080, height: 1616, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109550373783344883773\">SIÊU THỊ ZMART 3 SỈ VÀ LẺ ( ZMART 3 SUPER MARTKET)</a>"] },
            { photoReference: "AWCwydipBKtGDWc1yvGtwbuw_V89qNe0IbZKVp49QCNYHaTAIPAl-gNv5pP4M8zLfi6mA58qRwe3hXVjsaljCuQ7mTjPdxRDPsMbTJnRryA1FkWV0_6s4Xe6FXR00q-sIUiWxHQBy2vuqpDRNQVkxIZIB6wf9d15LbZyzJMPsqYMzeUkZ3yM-2E5QZlBB_liNBlclzUJV1fp5JKzfMVW0oj-35KK_4ftlcJ1QjMYIMjmIyHjWw9HUfDd6IpMjQX7wS-QdFBJpjGeFmIOlRKF_K6GF7I2sH8K4RgYkwDo6NZiPTFvmwUu1M5USCiBajn964Ps9EMz8dY8G1-pAvi0vVvEWyE2MGCRpUajM0Kx1XkJ7Jry3GkjRPbrIcX3mPFyvWZim_FbyqRcauJbZsddVqij0_C9adECHKXcz8HQcep9Lpbnw0JkhRYMxBmcrVrdwEGL", width: 3614, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114164043892822787289\">Josh Dobeck</a>"] }
        ],
        summary: "친절한 서비스와 넓고 시원한 공간을 갖춘 슈퍼마켓입니다.",
        updatedAt: "2026-08-14",
        highlights: ["친절한 직원 서비스", "넓고 시원한 매장 공간"],
        tips: ["짐 포장이 필요할 때 직원에게 도움을 요청할 수 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오전 12:00; 화요일: 오전 6:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=61561959174908", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=299519621195031111", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Z+%EB%A7%88%ED%8A%B8+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "럭스 아울렛 선셋타운": {
        photos: [],
        placeId: "ChIJYwexDfCVpzERbRMNdu4R72s",
        placePhotos: [
            { photoReference: "AWCwydgdgV4CW10nCaEZu9kYzMqdvn-XKu3967DxG_wYLC8fQjNxjxmNemDn8QiCo7Cg79FhTNiENII8aJFSILj_WUCQ4zJ1jirzja1zCvdIzVBPVKda_a3cLI8QHbAaYtSCz51r9IMMpmh24VJVw_yZ8IAxwpVtthXDQMRqelM1NQsBUjMtm-mkFHsFgGKNREUH9bYTb-DvNidUTk9MZqSJhW-4gaXtCoZ5KjcBUg2r6Exkg0EzExWJKtG0lNxb9RpUmtKeRJ4WPzrv6-a0_iY2A9zhtXd-Ck_ynUopNdfNcMjKobtkSDLYyMrbScDe2dW4bxCfnyCbxRvorn9u2YT4D6H6-txAY22fCAmi1tY28bF-54b_c_jQm21l_IsL4d7GtcdN9Qj9Zpl7eurOTObHJRe-phLbyswMH0ZmYOUqHhSApZ9boq0-REZ-_1tmni73", width: 532, height: 400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108193534504451998444\">럭스 아울렛 선셋타운 푸꾸옥 LUXE OUTLET SUNSET TOWN PHU QUOC</a>"] },
            { photoReference: "AWCwydieolYmw3GjBl9_ic095xOhZplvLmNeGdsiJEpunjQXjJGxDZp220x13wIvYbPUOGdoTD8grCCU0vQyAXqFvdTZODQ4g8ikNSACaEo2VPoAbdLE_Mt_L34nf-fCyVjrmBRyMf1f8plJDHS9MKDD85oYv48CWSssg_PzOx2Rg6FaXnL8Ysx175BXBJ4pgc0vsOZUe6t5twV_Sc9MDWPbm0iEsbc1KJ0iZv3PiK0ZPP-gOQaeK1KeLV5EYAQjoRNeMbhb6p5E3zO3cj6nIKXelMAKoJV-D7IIXMmxZNOekAOKxb42FUwMVkNLoMovoBBUIevf_3qd3RvQqYlr2h9ZUdHZV6tzdeItqpSvsvCTUWcXwCZ_oSESqIXErUcH_GL1U2pfSkzkA2jmkRINWFndIb5ynSSnDjIW4ylCivcqbpIze-XxKTwqPa4G6prM0pzi", width: 532, height: 400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108193534504451998444\">럭스 아울렛 선셋타운 푸꾸옥 LUXE OUTLET SUNSET TOWN PHU QUOC</a>"] },
            { photoReference: "AWCwydgzDQAoB7d5y-oytwmbIHrJbYHpX92NsvxyXBQoeI14p2-dltb1KVJfWi-q5lMJcKCstlUGPsc6EGoU5KAgctXMhVXQYEO1k8i53XjmmRLdKzdiJ4OGZpL7rfA4-Wwz4Nriir7W-APfIm05GrhcEdBNQ4lzhtjfwkA5wOZPJco-I74tW5LJKTGmMYYEhVaKF_EQ5NkOjsl6oNmXOiWqf4W3EqiDk4WRFGTpsie9VrDc0ydc6yGEF3kZgL14RjVviZ3Rm4_EZujHnFoiNGzW833CIk7pJPes6_jvTBJg00IITUyBkcUHLKGauhbSCqw_PU4cQJKNAI8xF9A1Mc_AYbcEy95fU6eKnvnxUhQ9DPMHSN-p2JlGt00VM8OCRqqUdyh0fX2AcCQCie-IHDU-P7pijAaPHG8R9gZEsg1WWrPIrefiRnwbYUk2dR5FBdLB", width: 532, height: 400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108193534504451998444\">럭스 아울렛 선셋타운 푸꾸옥 LUXE OUTLET SUNSET TOWN PHU QUOC</a>"] },
            { photoReference: "AWCwydjwTb-r7lkOxm-GRyOQPbURxX_zWPTWbWq6p2FOX5bhr1F0QwIyPHsm1Z0WCjDpVGZXFEfJhn-BaxLxQnNU_fwTTrhWt3tBF2poYzTsmX_4fDOTlGL4xCZmOKW2IhfSfbKzVbAmyMlp15KaARc5W1m8IdL2-m9NTwt-_u2ALSfabgXxVQ5FLvusl9SN25dQiCwGY67wMdDM2FlCCtcMMWByNupN3tericHaEEM2_RBQ_lAxYGP73GmRHiWuIR-fPgM-BunVMN3g-UXDgeDkoUGZa63sLZF4asQs4AKgtYslTlHXaDt857E2-Oq7E6i_j8Gyfv3HLWJRP0jMibkrUr782qoXT7rgVQZbyp8KObQHQkj14Lasp7TLON1m0qbD8wXGOzZPLiX84uB04OOIRfdp36HxpJxuiitABSGfG62YNqTlOdNckK-zhk0UoMaT", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100200642407113051891\">Ngân Hà Võ</a>"] },
            { photoReference: "AWCwydiVfpCP-D6KiCStbvFG9b7wV0tZUy7VLnAg5DKuqsAyIRO0YNj8W_RH2P0WqaEwNnhukU7pz-VYjJF705poY5ln0B6G_esK68UDkRTIi5LmpXeqJPsGBicdhRa0dFldUnYiqtvwS4UZL5QvNHhKbdlNqu7u8cVz9agH_Xv1FmWMEbftrlY1Y0l-pRfPP56AZiBx27A26bosXJbLD79wR8AwzAJH-71n3cn-2dbIZjYVa3UfvrhI3B-bDMAzNONySZOVq2kj-2xF-ZltPPrt0E5kLw_-xf31acFSr1zAwmbWlYXnYjk3JRf--9M9ln2hquPdpBLkCefSQdtPSY_JMe-xymyUpYVmx3reKZ5DXdieLv9jP3WYFHdCrbetZFEGjewJ1PJ4bj-dTXFnq9feG-zzxh0tm2qxb_gYF5JP55nuq1gqkvHmVBx_OWNdHw", width: 532, height: 400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108193534504451998444\">럭스 아울렛 선셋타운 푸꾸옥 LUXE OUTLET SUNSET TOWN PHU QUOC</a>"] }
        ],
        summary: "다양한 제품군과 열정적인 서비스를 제공하는 쇼핑 명소입니다.",
        updatedAt: "2026-08-14",
        highlights: ["다양한 브랜드 제품 보유", "열정적인 직원 서비스"],
        tips: ["보테가 베네타 등 고퀄리티 제품 구매 가능", "재방문 의사가 높은 쇼핑 장소"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7777454797372593005", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9F%AD%EC%8A%A4+%EC%95%84%EC%9A%B8%EB%A0%9B+%EC%84%A0%EC%85%8B%ED%83%80%EC%9A%B4+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "미스 하오 아울렛": {
        photos: [],
        placeId: "ChIJFRyQDgCNpzER8QelDTcsJMU",
        placePhotos: [
            { photoReference: "AWCwydjW0Dutbb07HAq0PwNFh6GyuMnTjhps7JpFw_z-QyZ89aq-SY0a7X0Kg2rTreP_1rjU1nUMtqGJhYA0SBTEe0MFJSLqwR_zqRYI41H8Hsl4W-WEdnmk0Olhzny7VpU3sab93yLSsRa8n9rOhlWvxa71HWGd_v2Ltwzrze64dbrSPe4ymZAfiEGFWgmFAJj76li5u8zmluPnEdQpDEuE1JlEWKlEnFyWiQySOjH5UGkMwEURkOeLrNn-Vvqd3utRMbw3r372HwOtWW_YSiHCYY4iOQC7Vz3NbvXpS9R_3BDjiYlB9yblZqnjYloC_7KpF4WtrQg0hVFUWT21kSBTupk_eRI9aT1PTE3ul5DS-5LbKmLX3XTDlrTCexyiDIjihLvKzJLRueElW7lDYzvqRL9yKwwfGkEn0Q3yNx8bRVwpjfCUScc8vApiGaOJw3Mg", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105534533619265672810\">Miss Hao Outlet</a>"] },
            { photoReference: "AWCwydiKMRt73_CL5cvLK1pWYPvZpJmaPlCCMjzA3aUvx_LghqTRAHxCM_KAxYDIJJzMjkQBtBikSsvk2jCsoD33zqHXIbtY7j8FSSOx2B61JrPJiRcuKbanWu4CdamQJCEQm0W6r2dfEQKkmzInBQbF4mKMuPqByLU63xOoAGR9U7sc-ajQLDOhR-SmseAx_AgesPtxLC0Cb0u_hP0_osZ_JPcadHCoJw92rVIN6v2xJ_j69-IJAbzYl2bFmzdCbr0gU3A1_i6d3hZvLNNwCbC8QCjuRnmj_PbI-AWkP1EHdPN_nkUPQ69M6EH8XeE-kaXYWex1pr7PNfCjDlTbIzBEIU5rYO19F32RS56cMrDxfPB3-nlWTZngLiFvpEKg9KllAvQl7MbGFRuxz8C8TieS7Aono8lj2tkashSR2BF_V7kPENcfAWifEKH3ZcIC4A", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105534533619265672810\">Miss Hao Outlet</a>"] },
            { photoReference: "AWCwydjjXTIVweRRLpzEy0rYn8x8w2VggWmidB6TfTdOn5nnzMq5_or71WAvZnibsbu4y--1-GW5GqpSGQMujfyNoGNMCV5vzmuE8mspAai7BUO5IzDo0Nacg8Zaw-_igM2o3B1FWEaBeQr_steylxQ374VA1IDUu4ozWkAlzYPxb_yhAUled1sfh4utaqLWEn_MyjYBDJDg4SAhospHcrS6bUZJtuiyK4i--1nDVWAnMyD_UMGcNhxtpe8xyQHGloScxBg-SF-53TEMQe-2E7rdT1_sGSBTHMLmnjnGod0qRjEm3R8NI-AhlaHDeWe53GO7_nzxgaFEUZJIfXzOpcTLfkru19ukfEVURVF70U8GI8Bgsg9AmbiyfKsF3gi95f8O1hka-2qdRD41vL2Sw3r78TJg5cqP9g1wxsW6C6C932VB3Sh4g3w6aDUPH94Fp906", width: 960, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105534533619265672810\">Miss Hao Outlet</a>"] },
            { photoReference: "AWCwydhcMI4D2Kb98UjN021w_IZ0wWMySvVAS8xw2XbbVKwyPT7AIjghczvO5iPfC4w13PDjrFE7kZEG6QJsOueEW92noFoyz2XS-xtkRlk1Kwnjo4vbRIDW0CuqJRxv6onzSk8nh4d64f2mJbVP7IotNbH0f8YBOabPGFogiCwjuKrjSIrwsyi1bT1FMjW_eY_2_LM8FrTunJk52XskOIorlTLkg-eceNpcssG7pLya05O9KWo21lKSOarRVIco0tUKA-CtQ6yJuiivGWdZW9tcnJnXgDOqQDK0xQDoBq3Q4VVcm4c_WMGe8tpWUlreLpfwkTBQEnQ5Oe-gHARQ6GRU3LyWoQEpnQVmy3gc499UEVdZ1R_1JNixLesPHax_z4_kDsPE-W2-AyCi5ONe_4Qkee2BupA_i_MS5uwRFCJVba-nGLL7C4kuk_baRMPiFw", width: 1926, height: 2568, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105534533619265672810\">Miss Hao Outlet</a>"] },
            { photoReference: "AWCwydgaXHgq2KAUeK9hClEquYDPWtQd8uWa_IgpS_zBE08CDjbc47wct0wZ1tl9WB0HZLYt_qbGc14R1kbtq1OJUJ52Mr1FbmklkFnnEP7xqIEzCOeWEVDg8KWiSrljXz9OXvi2YTOI0Jj13iLcLCVGQulwoy-d1Hx1KPRsw9milv8_a9jNRy9FjxFFHxPgqiiiPLxrWYUu3XDht3nXyv6mLf7HxUXfWydrHAt-x2mdgkZG89LqsG8nssUxvfyhemBOpjEEiuSyyA8KZJSWf6k46oEcSmhkgi7negshxTC1_JbWZP68YQ1-dooLvDEv7gpvb77GPXXqljWavG0w9m1CeFclR8xPRV3zJJnaZfW7NDmLlPEuMUVWS4Cu2Iw_1aCrpl0G2WUBj1Qxruc7E70fMQ6-MQ7oFdET7pLv4KsHEhfjtTOLLyeWrSXDm4ndVw", width: 1920, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105534533619265672810\">Miss Hao Outlet</a>"] }
        ],
        summary: "친절한 서비스와 믿을 수 있는 정품을 제공하는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["다양한 스타일의 제품", "합리적인 가격", "100% 정품 보장"],
        tips: ["친절한 서비스를 경험해보세요", "다양한 스타일을 비교해보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 8:00; 화요일: 오전 9:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://outletstorepq.kiotvietweb.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14205527739597129713", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%8A%A4+%ED%95%98%EC%98%A4+%EC%95%84%EC%9A%B8%EB%A0%9B+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "럭셔리 아울렛": {
        photos: [],
        placeId: "ChIJ-dQciG0fCDERLvpF4Sd45h0",
        placePhotos: [
            { photoReference: "AWCwydhMFECZIK_sASUd7djrhW2SQGzU_3EcKTnX7KIfCn2Bk3Ny81X8LzHgSEDeZeOFr99kAVQbcliZswozRHCH56aBFtifi-JVsbxmm_P2u2FiV5e5fOikx9wS4BEzdjQTPKBWWTWQHWVWeur6PNRi5A7b4lvXXbtIBR7xZSTglw6qmxKQWk6_vV9jU8vjyfdB3MmytXagGRM-xJm1LTshwoxBOngfvq61ttiOYsDatNgVmFqNNLpbcFsdvjsEITscyGdtygkjH_FzUyXGQSMXBii8aCnhmSxHl8qmX3DFC7vtDFklT3PG156JbYQLHoddoiVuDpO5j6fuNqLoRmcJ_Uy0hUApaB3wjVL7RVmVia-ipevA3z8ROtfs_7vIyGUN6MbXbt03gxbZ5cwVq5Ey7q9yDiXopd3gDJoqSdIQgY8", width: 1280, height: 721, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110380513577651219150\">럭셔리아울렛 Luxury Outlet</a>"] },
            { photoReference: "AWCwydje7zvkgWFfrRkPawhkJKvsT7c_srT-NZ3S6-89PPcl-kCAl9L6UJpGgdayXll8Aw2rq3GgGnY5JMSxmVk_4Z4c81ewV3OyTJWw2hDicu57QkfMypshkwl6bSYGWAOfKvn7DuIsB61E7abTd9hTs_yP-KY7uT6wbONJA2U5vE4YlTqqeJi3rXHR4xy6TOGHcYWaCoWpjioIG1n5mNfscaLmiATu6xsm3Z_elILZT4_xVZS3aNOsqUivQOGQrNxqasGBw-CVtUriCSkDozQi__KK7IrmGZt42ZAJ8OdFf4JcmYjJ-xC4bp5PjmBd5fO1E7Mk7ituxFy2nhKEoRko3Q6M-mydLde9NBKzlCYOnTajNjtivjkTtYP4M4Tfe1us8bFKLvGQEgMMhHSyx8xl5Lx65hfJRKtl9VWvvlJF7y0IwnFT4fpH4_L-kZuQeg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101751327717276844767\">이광현</a>"] },
            { photoReference: "AWCwydjKdbHsLJw-h314pl2UsHYG0rmzHXmoONlLbE-Hj2lmr4_Nq_2vUqh6QFEL_rGSwhNOdYLo3hWRotnTd9J26HaH_qJ8rQ0RjFPckLmdPgdgGHxH6Z_Pe11rNNwPYnHLbsJCWalTbVAWAHVLTcAdy9uoouY4b3wyr8MUvu_SBBUfa1L6ztWcMIMnXnEUwhXAq5rj909OnIbvwD5IGMvGcRFa6NH0at8YqnKdra2UGHhyVwJDtfll4dx2qZ-oh1BhSeSVOPo_7ogddRsHhWsE1QyWzxkpL2lAGnZ2UF1oIv3PcGNC4Q59y-AstfM7Dsud1BrGcMQ-zq55kZzw60tJySkKucCbBU3iCRGnr56qGqmjae76OQyI7f4z0blYpWAxH1ouW35WryUVSutMqADMZpMLSJ6osNC9Th75atv5DVvgrg_nb2MyrD3ODMORe5Ns", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102777103308856757358\">국동</a>"] },
            { photoReference: "AWCwydiseUumVd4ZLubOCsOw5ZMt40Jtni1hMsFEQ9CtWUlZi1dvIoWYRLmwRWAGQM-UG8OKUjiQFJQTx-ZaeqQHLfB1JD0ktroXt5auGd3A6K07iQXKyz5XhZaAEIsdg7QDSH2RgxUtzELrC1uWw-lts-hBppXIHI0h56hjaY3FIElLoDOY8n7vyGYMG7hRyEJn_raCqsQ_yhYkltvRPh4DPh58sY5AIZycPa5zzOaUoXJjcV3gF_i5PvQBlUaidbX0moU12fr4eRRcgfTFaypq1ZWF-zi0SmCkJZGOueaIOhRJBF6Z3x6nGDUD0DWJ9zOhVshNdPjsjWWTaJ19JwMpGLH8s3wnBUnYql1urqk4bgd9CdkBVHeHJNZ7l1_NHjdnajpou042csKAZdVBc_FC6LHAUyyCoo5Q42bCT7e64517jN_j257JJulzkP9KQw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118429769772399348406\">김귀화</a>"] },
            { photoReference: "AWCwydhX9XY8a4bmmFAAqHd9rUK0XRH7nIvpb8yW7nYx7TRS4sBxaDQ3giQwfcRRtGd2YE6ijszYpxbB9tykeCf8ZM2HUWx6wWVLh63Z3Ypb0at-YfKHprlpjQpQJFMBjrPHpcWl5A47W8LSfoVyr0c6O2Cun0T_RQ-4bm2XBJbTwcCG0fT8c2C-MYoheoDuldP9ktquEX-uYEs7tD0PO3MO-CXz6f9G4cGBjXEctVS78IdtE_JAdoWUh8tgdU91tUp4K0fdi6wsftrp5qpVLGlhy3MuAdGNexLRX38bSsAZep0ddqFuV1aDI4JpDhNVRy8X1HcPXcwNb1qRz1ZBOl0pVG1Ui-YgbkmiohjEpHYE7u8v_wvcUhFgX_NpPXqdg563uoWVml5fWefzKWiAXG02VfSdizx25UFYnpGRp7lJOyifcnNkPn0-Ofi4oa6lLzYC", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108447868174946017802\">장혜민</a>"] }
        ],
        summary: "한국어 응대가 가능한 친절한 서비스와 우수한 제품 품질을 자랑하는 쇼핑 명소입니다.",
        updatedAt: "2026-08-14",
        highlights: ["한국어 가능 직원 상주", "우수한 제품 품질", "깔끔한 매장 환경"],
        tips: ["한국어 소통이 가능하여 쇼핑이 편리합니다", "마지막 날 방문하여 쇼핑하기 좋습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:30; 화요일: 오전 10:00 ~ 오후 10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.youtube.com/@phuquocplaylist", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2154541584421878318", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9F%AD%EC%85%94%EB%A6%AC+%EC%95%84%EC%9A%B8%EB%A0%9B+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "K 아울렛": {
        photos: [],
        placeId: "ChIJzUf7WTYfCDERADjpcQOufO4",
        placePhotos: [
            { photoReference: "AWCwydjR9QO-2N8j3hgnq91QsJOlAhiMpY2mFREEmFfBuBxgO5O75u8NYpEWnLwP3WCVM6veuxnG0ln91yRjz0BAwR3SDuLGHV9_nq-ofA-zRsrzdmWrgl3cADbhT2QEc9u7UZmCcW6Se3N8EAAZ7hJKKycKkXmIztya8V00YbpdRB0IDP1Ysh3kvzKevoHI-gtcWDF1zUvCiV2COQJrY6FnlH0WiLrqv7dAOvOxIDWzkGh-s2LgPyhD71mBKGpzU5AO9Aijp2PB5TFQOfOb4UGMbgvB6_ujP02MssRXNL537qX3D7Pcv8v3NLQUOpvtxqP-118x1i9VwkXeRCjyRQCiSttUoA4Bsw1teFIPReIH44ti5fFpPaZbrPnFDcnfweJTu163Xu0IhRwcl62PG2kWPZuOKHEMT-D0s5DpOXzQ6MHFark", width: 765, height: 1020, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107888729166603509762\">K OUTLET - K 아울렛</a>"] },
            { photoReference: "AWCwydjardoJAZ-NxzNmXXuxz72I1uDKXHazYQnvB_eW4gWpmgWFxHcUXs_Ns92umuniJM__1D8rElTe0uxpkGYUxLDdCJAgdyNTPBZkoB1Q65Q3cWKheG4SJ1Xh8vb0Ne491Gl1b9DY1EmGd3t2rFvvgF_VjMg8yOAXQ47QOqaLM4ldmE83y1ec1em6NH_QqFFVbgyPs7bbTMR1PlKas4W546hLgY9f8tyfIuOpo0pOmAM4AE2ZCST2tdXEf8SqKh9nph9PPmHpdq1Z8z5K4TCTotveKiZvLrptkPKViKxoGkHPgRp1EkGs4QL1maPSo7iw_gkGFtI5KYw-EQ3vqUoHYO0-lpMgPjMKnJFxkXqaiLNfw0VHylJJZOYAin2HlBEbVbgfTcu7WSqiEuxxxZylUmMKgTgLdaYOBKQeogmXHOg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107888729166603509762\">K OUTLET - K 아울렛</a>"] },
            { photoReference: "AWCwydhOOcj_tIvDSkwL_p5LVmDhta1CiGsAoUmCjK2cfU1qHVKTw3ZQpnDCQIWWVxr3NWQnkS54hsiR7tWTF3oOjJpe7WaDUX1W-HRVSb22FzfetkD6w-Rej_yQxAatk-H779gTI-_DgbJPX6rbesgOA9kV2fzEk8J7SkL5hUIEhe1bkpKxw2pdmi6nmhofhx7kR8etqLbowgut39sdGXGB3xoeUTYderBGS_FQzAm8Kyq6njjhEXhLECTa_Rghl-TuRD-RPh1VzzdhHjZRGwpxuB2_wtsg2tzOgLyKBl2WYE2DqGRRaQS1JmmweqLlSHSgbX_TMPZwwfYxglkCSIk7eJYiGchr6EiieyX3pj1R4ZUowAxtJVDbcOysNp1opYW_jDr9KXQG_9E0qhHY5HW0AHLIWkc2w0g86b9ko69eYG8", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110161128169223692303\">Марина Цой</a>"] },
            { photoReference: "AWCwydi_zssZ5ckOhFW92kDjiu4GV-ORkSEhvSv1d30M7PLWgX_Dtr7YZh-DUmB3VY6D90VCFaPF6KdKyq-RxNS4HMXOMaH5NU_YuZedShiUsUVoOHGxtIvDDvZW2uxZ0MqLxXYlbFFMifXuXS1DmVEWLgzyFR0L2TszRN1_mXfvlTA4hT3uayXIHhKM2AEDU8SdAe8QrZyg8-jG7vR4gRCbyhOxpMpZIHewb7pTKwxLHHx3bfLW_g_nl1PUka4mTeJUpAkbVU1yf3K7F4XpKhyiSoj8D3r-mO5zEgqVqL8Az-Mfk3zCs-uwVRNCFHfARwnssr5yEB-EboPiodhuGWmVM_MScvwDWPfDw-tlfcTQWogaepLxTz8w-A8-eiOHavDX7HNwooc_gmdFquFZdfn7X9T5ewI-V2gVLvU44OwUnOI", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107888729166603509762\">K OUTLET - K 아울렛</a>"] },
            { photoReference: "AWCwydgMD_miTb7EFaMQw9XyNK-1GwJkqlMKYg8CzBek6CAZjEKeMP3jLgKSxl8t8WRwX23KSnjQfT_Y8RvyEA9irZys_6JZGqyY2GQChcBbhkUDZr626lcf0vlU2IMRImUiGLoj5HcYY-6AyDC1rISH923wow4iJ2y2cfn5JXZ34WLeDZZ6Ieg4P2sAU1HcZXxD9VlD7Ek-FhJHu9b-Pj9zs82VnEqi18Onj-hQ61iY7wF_MCD6_LRSbqqJEYQLDjJfy8GjY8Uf3ASQP226ZnQLdbsz1x4gnPd5p6uiF5mOIZV0pDZ0zT9bFzVUiXadI38ngQ02CFoYmwoYNMTSrUYnybBcKJ0vZCutcdo3-fTfIL85CDoJ_zcSUmAe13hV3YpiSXK5qXSDCr4IDpW6OjEfzM39vAovGOkYL0LqimR6r-2v5x7D", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107888729166603509762\">K OUTLET - K 아울렛</a>"] }
        ],
        summary: "전통 시장의 번잡함 대신 쾌적한 환경에서 쇼핑을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["세련된 디자인의 의류", "쾌적하고 깔끔한 매장 내부"],
        tips: ["에어컨 시설이 완비되어 있어 쾌적하게 쇼핑할 수 있습니다", "다양한 옷을 직접 입어보며 쇼핑하기 좋습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=61564928060409", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17184801607958214656", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=K+%EC%95%84%EC%9A%B8%EB%A0%9B+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "VDF 베트남 면세점 (푸꾸옥 공항 출발층)": {
        photos: [],
        placeId: "ChIJxWkV9VSLpzERsOS25uF_PkQ",
        placePhotos: [
            { photoReference: "AWCwydihytuNmFjlOfjZCqjXVdgz0ZkcOIhmNLDNT7EDmIF_8XH4CziUt52fXZYjGvUAU1b5DnRdhCCCKqaOzJONOf8gZ4KfJIbQgKSVBI9LtuUA5teLxTkwj3LOpVe9C1NAfEvcs5hlp-G5UdjOvQ9kSinm0lo_MX86TeU75bcLQzIuw844H19UzfW9j3o68gfWjhdYYjJqkCvzf6y0OVjq3Oa5mPNoukqeCP23BjxXMox_xspeAJI5TKBWn8hQJ1C4h2m94S-AeZYmXZ4lVM6vpI8QDf3ZNowEvdZBpUaGzuebUPPXpcFEe7PKJTw73NDxp-PJgGA0IJxjuoCSil0RKmIxGQCi1giGoff2lcWSuakEBx2G0xg-u0uP7VcSpcwDeN5sV56o7G4n2FWTLo1sjvrmde8TSTuPXfWn7YvXKvZiKaDrzz-E0r4CMD6sPfZk", width: 2568, height: 1926, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106720869097689420744\">Vietnam Duty Free Phu Quoc Airport Departure</a>"] },
            { photoReference: "AWCwydi9HMa6A2CNPapohBg42PPjin9xivBEIbsH64J8EbvDkxwTW0O9lcAVFVkKIU-Q4GTSj6j5YODfdUHwdDjpNIRB6u6di85hfYFo-2EHLXVaPdVvO-mHBswlbsziuTOOfm5xcNu4tU4KFMtA3At5c9TZHKr-viNLeUBFWCQx-I6LI47JJ5A4n6gkHXwjAOU5sxBIdBmbBRO88YEdAEcsun-KZx-6EJiQEQtkRNwdFFESDtVPj6n2ITfa4hEEsrvvVTn2kOXrenA7lvMXT8m4MgJOHQ3LNqu6EyOD4BHlulqqYqO0icxzNvDi6BuPdr_q3-4AqEyfwV1yF7LtHmOYdNC-EzdzN2WmL6G90wHShUlJeYKAkczrPVdjBELJssUZ1RibQUEhaqqu6msSgM1DbAev0fueogDokEk5fWGmoTziYlqLQroJdwQazyxIY8TP", width: 2564, height: 1404, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106720869097689420744\">Vietnam Duty Free Phu Quoc Airport Departure</a>"] },
            { photoReference: "AWCwydjLItxWJu2TKfYE536k4vY23qcLwzub-XQTqX0rMerThcSReEftD7D4zox4zPd0aUo3OFot0UhP9uLGXSJDGYcvdT2FpPgH_0wmFdNjkHTAZx6KhX2DHj3QQjgOwZBXweVlpFlzZnPJTtgVKJrLc7_4F056dgOnLhrDDF1mJkF1NrKd1lVcaSickz12oPicGVkEex91KK4ujspEvquvywPof0hLwlZEb3PXMxdhKqd_Ngvh6nSAL465DUReywNLZH0POnnQZ3mXzwIaL1NwJPWuDqM4kW-SPcZiIlmS9FyLnMpacMzegasVrptoSwEFmp7phjnm23BQM8zuM7gtMg9N94qvmN4PA7wSvMbEtDMEIBdMQpQs0JMc533LcRud7KdpqoEu7_2iiphq955g1B9HWkn_8mp4Mxg1IMyXUjXbnZ0joxqksmA38Jz_rg", width: 1918, height: 2558, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106720869097689420744\">Vietnam Duty Free Phu Quoc Airport Departure</a>"] },
            { photoReference: "AWCwydhd20oCzpSW6iBWWYPiW6Hl5QbjgbK1t1rajHEWNwb5PhvCgg1Ij7op8_nKTFLywUUiOx0EguHBNsw32AHQ-VgY5RBynL4Iei7Di0RZJpbKof6jB4SJylc44_SfzGJIdD89tguZ_Cyg3mnbg3-UBvXHzaY-jPba-XoHITRjvaFIV9u0Q4SbcLnc4N9LnDp-3yjE2XWKxQA0b-_SJEBa9Zgtfmm6ANHG4WgFIYPv7almmJHPyJZZvoiSjfLPOhQ4xl-aZ6NmrEMZ3i28hyQtehYgfH4zlkeuoP9wpNe3LasnCkzWSVx8lWt79tDZXljxqgD3Kz6aAQMc6a0pQwz7FmVwtBiCO-qBYOhQx-e8_Di3l_kaHAGaBNQzSCeh4zwusBks-3PEtT4KkF84qIAjRj3omg18jyLktzT8ATXhNsEF8vUqNiJ13RxbMqh2XJiP", width: 960, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106720869097689420744\">Vietnam Duty Free Phu Quoc Airport Departure</a>"] },
            { photoReference: "AWCwydifxtz3QuTCjwAUNUmP-daNtBR5fgxhtTWDUb41kh-KDGZrcgNfJq0nn8lAweofjaDnxU40eiOhs6br49UJW0jXWWdJYk3shrCBXQwexan-rnVtqg0LXnJsW_bAYWc-y_FTtdYAZuNqZ66yW8AcioBLCxUnyTelcgUnnrt4fvtFEYRD5ON-otRb4hFeP4IiqCzjf5UWsambuU1ZjQ0vlHkULBo4FmXJ-cEkAZq8_Owd5Wwha8M1d9JkDBiFXNQ3i9nEFM8voEKolMwMgnkx2f0e7BhGMoBN5zJ4aTbIbx3bW6za6ab28ADbp8gNUC6nFJlcvX00NsRF5Yts7o6dNBQpLzXB-5HbF41IusTXQho40zBgmAO7_BXBzdrAEqdzrCcz06yMxoIAa56dUbn6DgL-Q9IMAZwcZ8RUzzo_snhZ0XlJpR8jBw3_He6ftQnS", width: 960, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106720869097689420744\">Vietnam Duty Free Phu Quoc Airport Departure</a>"] }
        ],
        summary: "다양한 혜택과 합리적인 가격을 갖춘 공항 내 면세점",
        updatedAt: "2026-08-14",
        highlights: ["합리적인 가격", "다양한 프로모션", "공항 내 편리한 위치"],
        tips: ["다양한 할인 혜택을 확인하세요", "공항 내 위치하여 이용이 편리합니다"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://vdf.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4917508451350275248", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=VDF+%EB%B2%A0%ED%8A%B8%EB%82%A8+%EB%A9%B4%EC%84%B8%EC%A0%90+%28%ED%91%B8%EA%BE%B8%EC%98%A5+%EA%B3%B5%ED%95%AD+%EC%B6%9C%EB%B0%9C%EC%B8%B5%29+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "VDF 베트남 면세점 (푸꾸옥 공항 도착층)": {
        photos: [],
        placeId: "ChIJbSrUgqKLpzERnM8I7WtDaNU",
        placePhotos: [
            { photoReference: "AWCwydjkFkGzP9WbAOMINqyEOeq_896tn-bP_5KO-rNQPVJVeoTo75xKiEjpujZoT5DU3o3xNGV7qFN4ilQBOWEhY4aKHGSlyNedyYBqCS9MWwl5ZxChjljZK_3JXUgXyERcR9OzqyOol5GYZ3O4YFSdmt5H5H8bmOUVvGwUnA1lkwU0hPVPjSmWFQoRgHfoDT9Nsse8VgsFU0NudoW5dSrS45Q5KvRckH6eQNryTL-9P_cnagRZ2o3SA3C_XUkCLRWYJS0WIy45OGN99vLS-2x0EBdU_4vq6u72XjE7EdVCJkb7zF5krJ1i8_WMEcfwQDv2VeXqbRvaWHuvPDKec4iozZ1-o3c1AHrGdIXebuZvHQcodiZHOUCAXaW3Y6rpb3d149zzyqXg4lSHma9a74T5FQEWxEqabC33RBj6RGlJlCpyzIYktToY3vK873Xz05E0", width: 1448, height: 1086, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104695754679703356814\">Vietnam Duty Free Phu Quoc Airport Arrival</a>"] },
            { photoReference: "AWCwydgMaYLn4guNn7bi2lVOr75Vcr59Dskvs2qOAtoFfDhDxgKINBRF_jWnGkkiIv2R7ebIwc92F9ZdiTSgyDQYl1r60rlgjMIU5quKbv524jJJx8rx_8fMin8TT-OKQ4nbG1tABMVr4n3En46WNqMyAdRE9jF864Jo-0i7Qdi7b-gta4BQzKMzGajW1rqJwnuHtXbhP8wn0B1lx_t05OjpcBMpie5uiSOqiII0hKF-4mRH-52h5ptL8zVVEB7KjrLmbxbMAuB8ny7hz6Ixkoko76TA43NawEQXi4niRL-oVKyHUQr65DT-vhh7aP5BpC9ZbE81q9bVJRLB4ehrt5i8r43Yl3o0sgMQP9TwyOQE2O2bGrdx8jhH7mqoXFEjAfNMjiyCdly6vAscEv9ddH0l7qJVp33ISdG70Me5Gk-aTuE2EhrmNnoWYDcQpc-4gA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104052587176792902301\">Hao Ly Quoc</a>"] },
            { photoReference: "AWCwydj6z2hz3OyZg2gqB9X_ALumlQbBgVBXjJoe7Yhd0z4vudNb70vMzvly2QYU4rsQvcIp3nC-ubcbli3VZtYLFCEJOf9kN-kbigHpKmsp3vbtqalhAtNQaQTHdm-Hm9iRzXQwtZh6Lk9TGYhovg3cOt4eo67JyGUXXbHq-RSjPgkX2Z4seSnjuqeJVcuD0eWYCzkJyClRv2I4xfU5jJT9FniG4PRk_KJfzJ7R9oDGjXvODu8xivjwf2EDsH9gbExqLAz-AM4jvi6wylNLALdATu7WCbJmD15KEbMZmFrdChnrlFky27fAEhXg_UkBnKWCDwq-WrwV0N6kqOr4-XD1Ui84PtsVVZvI5Nv12LyHQ7g1mlrWSbxtftTHz1OHis34fiW6m7KaxDN-kt4z_4WsGpHuOZNxsQVw0MjwfH2T2MKKKl_Ij8YjxyxfKQ7X1H6R", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104052587176792902301\">Hao Ly Quoc</a>"] }
        ],
        summary: "합리적인 가격에 정품 와인, 담배, 과자류 등을 구매할 수 있는 깨끗하고 친절한 면세점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["합리적인 가격의 정품 상품", "와인 및 담배 프로모션 제공"],
        tips: ["프로모션 기간을 활용하면 더욱 저렴하게 구매 가능", "공항 내 위치하여 이용이 편리함"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://vdf.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15377615058473897884", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=VDF+%EB%B2%A0%ED%8A%B8%EB%82%A8+%EB%A9%B4%EC%84%B8%EC%A0%90+%28%ED%91%B8%EA%BE%B8%EC%98%A5+%EA%B3%B5%ED%95%AD+%EB%8F%84%EC%B0%A9%EC%B8%B5%29+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 원 업 스토어": {
        photos: [],
        placeId: "ChIJN8Q_KhaNpzERV_5cBZkIf5M",
        placePhotos: [
            { photoReference: "AWCwydg_vowSGev7DF3bH50p09RKnaRX2iTrPf5fz37VUHhWDfjJ9wo5QpbPLFRp4x5BQkNgShx7eQyfi8qIGxxrug2GLknSt7RYL-GPbbzCK7BO8BWpiCR-fY4wHBTUJXZ-UZj7eatTz6ItJ4lzMxQwmnZtnaUJgMtTFqo2CQQ7IEpxrO4GFzCW0gLQOI15zhRydCWOElVVxomxASwPjQp3GQil67yRcprpCkLmNYHm9wwFkIi8NqntzfYn4ahyjwKy0l6IFTNr0YEYEd8KFgdyo4uZ30S-d7tFgQ2DirEpBBRyCVYSjpehppIAqjIIf2rTixa0b7LyyUPqstgfRVqxdi1Vn43ZuXyyiVVOCyAqqBIol3lD5I8-482PHA8lj1h642WYvrHpz6ORxkZNE7yrRfsDQ97yW2fxt51X3kXoIW6umY-d", width: 3759, height: 2611, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118424181717540844247\">Store Oneup</a>"] },
            { photoReference: "AWCwydiw9DJiwfZqas1HDYZtsHoxBwFcM8MsbORw79csEYSjSpGGDLShTgWloZUlhMromLasBwktoVif69RkNQUV-1WPdtloBEBnq94YQJzvQ1DyEhMwCERYfKRpxtaneEip80-WNumOXij14gFg3fiIUeeKzy-6bYJOolduDPUzigO-6f0fkMgLYM5Qh11xf0K0rNK5fv7FTXC2cNOGOogzVRMX2LlRoKFqfj71JN6jaSmMuqF9c-SaPEIgQpajpplkikPPyTVE8zyXSB9E7kdvFHz0zlynudUdmKhcsh4BoZbG79uNaZedEVoDN7HxkoEAyfFO4tYdg6bgFwNr8IQE37py58G_H8sh6sPyE5WaOvXbXJISvK9QxUKseLN-QatOBICyyAPy3oMYKuobizLDU1dF-j4KbFGZ9RvRWFvJqseLG1BkSz01vOTVV9RlWmn7", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104816384958322025735\">Anna Girl Phu Quoc</a>"] },
            { photoReference: "AWCwydgSRC4TxnSsxkiYVItm3RCbJ8I16mGxq-yvGUYT5P8uTiMSkR2amxqX7xxPFB8XJQNpfWx3-8DwZkx1jqpxNpQ94CCnWIMBm0_WghwVxZ3msIRvPT5H_ELV3C3mDoyqsWpmneEVd48qMxUyUxEKQvwQs9B-axYzdZl1qTTH5jDRUNeYDVMRa62xXRxb6ILkgWu84bVeJSLieShtaJO_u5zsAHg3o9V6rl2vjOgVfdYIuGylUwBMPKuGieNYWfPKjGPGuwP5Ca413MMjsvE73-MnVwzSYBS4_vI-jajaNtwoDws07M3s54qWqY-zOMd2CJC4FQUO8kVjYHT1q2gGSYSMurNG1Qs83WMrSj7knuwSs5cJpIM5eFJiuwg5vnEW5id9FB2Js4fU70SEwS6ZuE__mDvUZOgwQdh2D1yS-yezQA", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100301940049542987795\">jason n (Talion431)</a>"] },
            { photoReference: "AWCwydiqMiPh-oa6H5JwE7Bwi2G9Fg9bg1Z9ZiaYq-dX7B8UPWfPjb3mJu975EeO3fk37nrnbUsM4MvCyyddaCTv7BInIeAGHhh2qNmYbWvzhbGRbJD5Ik5D_vmfRnmAiTglJcbZRHQmgxpUcPnJcyrlDCtlM-1gEzH7-dGBaew_31bRrVP-rtt5kCv6zEYkmfAYrbNQ_M9dR5lOy6A0FvXDPUrhmGhWoNly2ac2PeWxGqPJQWrX56oCmU9Nu6PTByji390JPF51c7NWyMNjt-_VW_JHzP7znZxQ3NERUxNAGqZMbmnEbllTUbOvCO6qMjMiMSaTTMZVJ-_k-7n9kU5P5gSXg8ksh-Y5fuxxaLGm8X9HMaUhgvv7hp6aY0jDjpqiYtoj88dLxYADz8KpjpoqbYeN26Qbi6AQ_CdZf0GtsUp3C6M2", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110955934123102809852\">Abdelrahman Alwan</a>"] },
            { photoReference: "AWCwydhgdPsRlhCQwdmFpR48-imRvi_RZOLP0eMN4-ylQQfw0iCxhN5h73QncdW-EFtlQxZwlz6YnZpP0EYOu6gM6itlQ2d-YDJ5UNjqvilPVUpPmZDueH9xQXblB-5vnIkiix6VW0KpU6DWF3yHQnO0jUt3qJqGTD8h4PqwNUGVWZf0Og6CM13-b_t5JCWLTHud8lVeunhgTskxXHHvhTRI7RJmvmb-l4IOZuIdFxyUKuRPxhsNoL_rW4y4p6p6N29ZRJGalHDaCN2IqQUuvWWv5P8KPD5q4LJBR0sAeuEsLaFDMCVco-f7kNz_CXX5Yw6yQSDjEf159MOCsUVec-0qGVKughyjoA4Dr3Wng6ifkpob1gkAUqT0AiHz3UIcAN4UtjV2NzuJg_aDIUlWKmdLs0qY2ierDRFc4tfMyu18oN1In4YT", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114724452355084445790\">Sarah Fi</a>"] }
        ],
        summary: "특별한 수제품과 합리적인 가격을 갖춘 기념품 전문점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["흔하지 않은 특별한 물건", "합리적인 가격", "제품에 이름 무료 각인 가능"],
        tips: ["직원들이 친절하며 영어 소통이 가능합니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 3:00~10:30; 화요일: 오후 3:00~10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/100035014730434/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10628223098930658903", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%9B%90+%EC%97%85+%EC%8A%A4%ED%86%A0%EC%96%B4+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "LOCA - 코이 응우온 뮤지엄": {
        photos: [],
        placeId: "ChIJJYfwqkWNpzERFaO6BP6pzqE",
        placePhotos: [
            { photoReference: "AWCwydhqADhYvNFaaTZgGeoJFtGKM7UiLlTZ-gmDn5TmbzI9lmnAiY7ubZn8lt3tRGF92hxVl3f0LBqlHpVxhpbyXk-EJewL9rEVfunwjIfevaBtMf6g3eOP03LHUADpNP8ikks4lVVq13w-dGwmPBityeEKVS6MgK12Sn-bsxiRBwwE7WILTYGE3O4EvBbhERMd8wcEzwXulj-dBCy8CCBZOVIGF1lPmheXocnh1nrAMsN6AwVpCpxHCDu3W98B6Kzu_SSqWRESZ6FiA407chVcrw1P9FQehEVtKyWvv_Kr8xEW6PVDxRGmrkr2apHc3MIR5g-ZE21cFdn_SwElaVL930z4R4W9k9EWq1aRODp3swkBteh8v4SyXeNkRT2BFfIiyNGaHpFXcXJocb66Tpon4YmQ6O0PRtROylJJ3Xvvva-xbDSVHVsTesQWZvrvng", width: 2694, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112819847952192685894\">LOCA - Cội Nguồn Museum</a>"] },
            { photoReference: "AWCwydjwSwwirig7SnSSZ_IMdsLsBGrPKFEi-qDhhE5wPJLFKm4GKV3i5DtT_rNHfHRXBGv1yYuuQwgEvOlikVP6TjGHx6iIg3wVT4NYzgnMPCE-FW_wzBrzfUoyf7DKya2eAFyPmv6Y3OOKFgZYyG6tCmFrJvcwLqt5SK-sT0Pdhm40ZmShzDgVy6ScynHXjVYJ2teLDx82ZyYYXbgTlIAvMzhue8DOn1a_MVFM5rNvr3y43KDpPzfxzh5bJtbJf2QJpXrIlG5NXhAJkXXnJEAkrUVMs5KrZD7KtLX0-Vx9Qp4TgA7Jkyb3H7foNS4DOaBgE--IHnCFFTJI-KR7V-ZOKWzzuNcTjcL-XFxM233mWwWk2-p6XdwtsOW01-UNxpLXiARw0580rw2KVVgy63VXiM2NHpQ9kwjwR5H83fz6s3iv0Firh4XPUqHxq0oZfkmi", width: 4800, height: 2694, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112819847952192685894\">LOCA - Cội Nguồn Museum</a>"] },
            { photoReference: "AWCwydik3j9Vd7QcuMq6Cfx5ExerMa29vxchSPvwyAdpF2P2Akuj1NnAWwhFhK8VATKyjHkJ7A9aYzgOpbS5ChTl-f6ghYIr6ur2DYQ5q7U-pdo76L1nH3CO7uZQvi5j_GKWdY9L0zwnI7t0w75OnVKGtZ6rhjoHhgJpwblChZx6nGBuYstrrBFZtDAShtLkso3EFqZ_NVGTn7mGkoTouZC0rf3LlX6bddKYjEzJqRSEXXqXOfkVeGsUAOso7dH9YERDjOHVg2QSzdGjt5tKYcOEqENOzFrunSlCL-B6zRBgI0y1fyuDgknRNVRiqbJekUEOV4KArhXqtQ-gwCSsZtDg-c2qEgb95XwGWNnzR5536mQOhoxRjudrfJwrAON915_Z_rlZMsSHpegU7BO62yebVb3CmnUjbpfpSWgKkQNvabe5eIbZiU95xk-IQ-bZQUFl", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113813658712628675869\">Bestlyn Loo</a>"] },
            { photoReference: "AWCwydhvRRLZkcvc4Fd_yzgtC_NBgPqtxwb-Qn8wqoAsfY_E7PHIjaQwV1CV3KJoZlP5naSV_T1zZ71S2nkHyWTeK3LF-CrUax6JGkBKHAGVr2gjfSI0qQzJSQOeABpzB0IZzdbhWkEE1VmY8lYOvXJo51yLO1EHJjBXXWi-9j-c7KzvAVnhyuqJjoZ9Em02LBof_XbzuZNu0vPosX3So8AJjNFG8GYMfH1zhpQMQXWjmbyr0R_2WUeFtP1RAdIwy5c1OiAN7qPx1n5aQG_hGl15p2EPng8UqH1DrcinxqTmOc6qzT4AMj7c344T0oeBGRdApOusmygblRT5pNskc_3PufN1_fKVhBSVgepjzTKN6-MQTtwWem4IL-NDrpVLQor9AKyaHdKsQpFGVjmjj8V9AVgUGeetlFU0vFzhqudIA-QEMtpp3BPsXRPL2K07Au7M", width: 2694, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112819847952192685894\">LOCA - Cội Nguồn Museum</a>"] },
            { photoReference: "AWCwydhhedx7NYNbSZ8R6H3sJumR8xKXDhMikCzNWm-6EVrFUA2KzjW2wTubbShLmz27o6zhY_t8-YClM99VixFsCeWbKyPYeiJnAW0QEev5kSJCQ_Sjursa1LKTx676K2KwnfCUtQPu7bO9JB3w9abeGaXqFWhJk6smZqmFRji04k0Cq2B7-rRRYpYAwlaojXo3aoGkO0zcPZMY9mT_oePTRyV31T8KkOSDiykdqCfec8guN0UVr1CSdPV7xwJk3fODzWWqXT-din7a8jslXoCe87zjSwgpRfX6_q9vNZGX4SPT0yRgIrjzAfDw4_9TivmZhK1DHuKNyy2BMFAt68OqnfrZz55KseHLLsk5optCcpJEuvszFPbOgrjhlvf4BIfyJeCebt-pWGgqUIXPl5tGqmweNtHuMChqceaW9F4lITYXwMOli0hplrAmD0rgwTBm", width: 2694, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112819847952192685894\">LOCA - Cội Nguồn Museum</a>"] }
        ],
        summary: "다양한 현지 기념품을 만날 수 있는 평점 높은 기념품 가게입니다.",
        updatedAt: "2026-08-14",
        highlights: ["현지 기념품 구매 최적화", "친절한 직원 서비스"],
        tips: ["판매원 Huy 씨를 찾아보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=61576200216745", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11659443393774920469", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=LOCA+-+%EC%BD%94%EC%9D%B4+%EC%9D%91%EC%9A%B0%EC%98%A8+%EB%AE%A4%EC%A7%80%EC%97%84+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "특산물 푸꾸옥 칸 맙": {
        photos: [],
        placeId: "ChIJg571tWqRpzERJwTcomUaDsQ",
        placePhotos: [
            { photoReference: "AWCwydjEvJikJByyPneUglS2Sk0UeDYsIIaBWfltfr76s0K26DNy7xwWPNcEvbku0HVDMMJ5urd58t-m-5oiT_gCpO7Zo1iBpkoyOd159xYVxhISnJOlIXV8epRW_3HL-9wAYPz2zcV9sAueFQd0O3TyWxe_nqmpNxPGzJqP9R_hROd2lRYBj-XFtyoIER33n-F0iI-lGfxXMcrTh91dW7SJ_ln5yG70Cea1JVmbduxNG4hDzv2cqEh2SUIgDFBdFTeCVq9yzjTa1Vq2AvtJpwOJhs2Nzz6LtJBv89NqBjLf7dJIfq5FbVPgrFTHuqYq6YFae2xcKmm0EZ88bsgdkpU6NRoj1f2o6yiu3vihgPJoFKQGLKTIaFcQopZAUCXYyEC-7ptwWWSs-LQ4SxXkNPBOxFYDJEzGquffr2qLWNSpxrcVe0lpRMhO_70XARg7zlmi", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109377332381992587647\">Bùi Chí Tâm</a>"] },
            { photoReference: "AWCwydh1NIMonUj28CBgjrwNUujbA-bJFD1J8sg4cgj48uS1u7TW58gQDlRsCiEM_7QgIK09K5mDTp9nClPezYbNRQMmNGy1vPeLCITYAbY3qDg-R6WnBehKAK1AvCB1k6CKh8Z4E40tJtxHbE9TZm9wlXNE8rAtHwOqTZnGcp5n5-rsiWeWyr3v4W-GiNwkGf2nPzgiBTUzRekMwk_vBqfGcXr9DYSKo1Em1ii4ZORRTCCCb0qfJxLOaJSH77YToZjS-JahZ24SSss4wgG5djqiChQ5PIhqFYSKFomEgWiNfH4LmrPSEhjdJDpusBDjKRkaCBIsHwqNTAf2QAZGGB6Mxymf1IqbhC0a9UdYLcig2ZQsZVktJXR4_oPP1gZzVLYyzF1NJUK7yqmXA86Ka9E5c3yhWulspYcp7Y6skUMP0geRSYZMv4Dzfv8Z8CH65lw-", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113374131050373608057\">Tracy Phan</a>"] },
            { photoReference: "AWCwydh_8lhx8XFWUrPlgRy5T2nTQ3irAM5rEmAUalqVay3gubIlGkThYdqCk-4nmD_fq5RMDQh5BvVBHyu9DpJSZavSXTuPPq6FnH-9Dylm-7txJfe10eysvOxBQ4vn8EVheycApGOFTworTju7Q24HIMFi9pTs-bsK8M-HsKlVhDr0lCo2UCZtq48zlnHh9xe-z0CklDsu_hhBI1vKASHuGkq40iGRqhshAM8vqf5hjwCX3vZoZhJdR6daixWCvd02Cp9lu34Cl537Q7S2iSqVbB6oWqEvRLd8dIHPlZ148nu28VtS8Eq6OAF-DAvQsMkV9YnPFnov40B8xuFkHuibhVJIqIqbQXaDg1Xo-oxs6Y8IcQXpLq61LDnAsy-cpf9yu0Tj78pbKAPFedkJ98znnzNLFoDZo29msVV-xY4DY2I", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103546692439977624884\">Quách Minh Tiến (Kiến Trúc Thuận Tự Nhiên)</a>"] },
            { photoReference: "AWCwydinPAoYPdYsY55mlXCjiOT-8PsO4WaxB77L3Hy7tf0Sti1g7DLxWWQQCXIIqYZugbSt_Xrb2KGLpgpvlKEk8hfY2M4YlLXNsSMWLK0EGK_nrHDTpDoJNlwixtUdkC1f0Feneg1keYemt2KTAFHX8ZwHuFY74R7_Z-kr_xPFQrfPHn955R5jUo1j1L8AW8exZV17OTtyVzdeqv5TSHBxbIJasoI4CLT_F-Q1kpPveg0INooQDYaS8o2ehEx9_RqbH-YbpS-U3dzdBR09-fbaUAkk9aDdrJzyuzUBHx-B7CKSPbEZDsmIW_PNmGoBIlljsfqNFMKrjP50x-Z_ZaVLQQGv5kPO3E70uPbgpDWBHY9PeM4-chdqtUT54qL7yGBfkBQihuDFbkZobxSUgIcPsJ5R0Qw38Y5VTli6K-WQeji__g", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105987815795646378329\">Trương Thị Hải Yến</a>"] },
            { photoReference: "AWCwydiw2A4rH9SAGMgK7rwa8C-cjsCAX4FOoJ0kA93bAqMCVexnD7_u2TBNzt6FZFlZO9_tM01yMRtaC9w-pBPMkVcGu8_DG6EwsTzdDqCHLnxnUZsR-57ngO-iDzAG7lXRkg0C-GScc1iZewgPoR4m_blGeoQ5NbrA6HbB4E3CggCYQzmepv8Np52dwJt7iKiBODbJd9LxqcQNsgM5s7eJRAiCbZU3ISY3pKFG-ibRs15l_8HDTEzz0oYpnjPtVYZBSy9o8RW0tcrnLvLMnIlbZg8_DHIytuMHoKpPKEdRSOA2IVCxHTxtWjTDy1HPujh2AAIsrX9rqIQWLxtipyD_n-rFaXJ6diumvVc3vxdIWvPLZShYUqgdSeDbMu4EmgHV-APW2DX_bbgtpmqDtY2i5wclDqXYJP5m977g-cTclZTVsUE", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117135106506112513084\">Teresa Ruan</a>"] }
        ],
        summary: "합리적인 가격에 다양한 지역 특산품과 선물을 구매할 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["다양한 지역 특산품 판매", "기념품 및 선물 구입 가능", "합리적인 가격"],
        tips: ["주차 가능", "매일 오전 6:30부터 오후 10:30까지 운영"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:30 ~ 오후 10:30; 화요일: 오전 6:30 ~ 오후 10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://khanhmap.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14127258104934171687", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8A%B9%EC%82%B0%EB%AC%BC+%ED%91%B8%EA%BE%B8%EC%98%A5+%EC%B9%B8+%EB%A7%99+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "메종 PQM": {
        photos: [],
        placeId: "ChIJ9b8DUjiTpzERGZE36ReSZeY",
        placePhotos: [
            { photoReference: "AWCwydgfafJr749-rHAzf5RiR4dRwzKqp9r8c8PNpfIzKWFcwjusiQoLgJ2v7VWTbFsV34tDXIKnS4KttkGZl0eOEDe2UsQGoNbv4tfSt63fsnQvOUa8x4f2g6C25xn5P5twgBdHr06A_gyxjshumu0AxlRA-qWc7qusDn6uCypUH2jcTkOAnet1mxOKvMynhyoMJNprR7EbBZdAFQd5M7ntSEsz5ruNZ93CH5odLJA-mZFrckP4pB-HjMM6cEbVAT_Sa8qEIeKfRNs8qscp5DYLoXkg-bH8qmvdDfkLhucx-JSaizESNSgXSFlbVo6rsblIevS_vLpqRxpLkhMbkOf59vlObBZ1yHlqej0L-xNlqS1jNYDcVH2VnD2q2RqRT-azAjbiFzNSAJ0KZlOHTPNECi4Iv_7bX-4durEdzKM68WtJIw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101126366982552311244\">김선영</a>"] },
            { photoReference: "AWCwydg2p5wfj0ZL2QLAs10BJMx1AUDL7YYBHmHp4deLQrC_p-LhUhoL2J012JP3O24KI8gNUV29TyPbppGF9r3IMNQciE5qwpFUh2VzbCxrELVSTB9mQfDFPoGcyTm4VSgfaM06rCNqKARJKxb3kbjucMVC_PlOUjrtJJH1Czg2XXA9jyrsLdBPVErB8JB8nxX2k0tkjKOglUbPky3FPA7B0BbluvpVCQ_JrTYlvTb3mD2e7FG9Ay79kktYT0N7X1pXoYDFFgwh6vUguN2hw0OhX_HqdeHmir6OjBNwgTmBQhwdZGG-fb03NtqIEDutLq0PPF-ItmRV8NBYNg7quM0LVAnZRhxKSRXqCcISI8XSu7czEQV7KmUFUHDeI9qaJhXbQkRLrXBo2R1LL-uoAqCB1WEV4Uyrh5J-g_JuhpfgNE26W2gkfHCSoYC5nm10opLf", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104617879209726410171\">Mins World</a>"] },
            { photoReference: "AWCwydgPxVLLedZxUArGJDN7NEf07lEk_n32Edu1iG4nYVawvyDaStSOmOeI4OSEustNuXmAHnoiY3s3UYwdVtXVw0zc4U-9nSe6hZlMMCksbaZbM1Kr8TDepkkwUQwWtBKw9vMtwKBSN32daP2kMNGpdjNOSwdJAeEDCEXm6NcrXWqZWWbjg2ffixdq--6w4ttyaVQcjkhLZ8EAnhx0slEYBCBHBATL1nL_VXcBk3reTeTF0quTJHT4kovZcCG_xnrv1agMDGsCIeF5Dse8WYMa6mmTpZsLLzOmw1kq-DNcAqE_a3KwVOMgE45ijEbRdIpTH7fCKN-T1JKDtMbozbvzSAUWOxs6E_3OL-u5fuTn6CGtUDr84Kmc7YcSiEYQgH0BhM34VO7SNkT44cUKRk656OmVRlb6t4E9fVXuag6ZBsj2-EIur4szNiIE1-hTmUru", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112600477274175082626\">MAISON PQM</a>"] },
            { photoReference: "AWCwydh_7cia61oVN7SOkbHcpxUDpYaaSsOkDk2Rh1GllCCbGQofRglD7w9JJMteFdmI99KMpe5wCP02-Ymfx2Hc48PScZGVaVjfDfIeUx6gM-ZZ61_MrDgzgBfpZh7RVVtLerZ__WAHi4HqDL1zgTctlLI9yGMes1FsE9xKXU1wqUrz3387dwbAc-42Qg2a6Dlyzp-cuirumA4-zMN54xWChw3mAzU8mzBnrdzAtSSi4w5k5q2A5lESWRUcaqQWYMjlqmQ0dwTzIQAakyib3HrBKOE22_vHsj62liUejfARq-npYRV66HstSOXWM1FS0fmKtbt9_DjKaqrTgspmZsQA1CV6Pu2lJ5NSf6kxXbdAmtWz7SzwNdqVA6ipK-Qo1QQZgXYPO_5LzWD40K6S6Nw5rb-6WUOyeR5jhpjAuuapSiyzKIMs9HCfDo9mc_hlBrF3", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112600477274175082626\">MAISON PQM</a>"] },
            { photoReference: "AWCwydh2AeK3nCCYkM7zhjYDy75CDWSDqQCN059irWQlIKblHoQ8ovMxD8UMYpmTGXs4DDw7lzeiuPMW7PnQz8LkBct_pi_6Y5V2FyxbSIIdfPTfNVIYaYv7rbH47WNflmP36nD4c_-KEYFroXuSYU2_ABBFZXFtQB8mTZ7dfam0wrt5ojmkSdKRK3600iuZGVT_HU_GqUaK3TBU0UZt5_zTSLR27ZKz1TC0XxpZsRzMJ0jCigX3cyLppVtfGUitNry1p5RcofLgNzDDyk_dBih-xgKXiH8vL_2SLPm95uLIoY_-L4L_9gg4v2Eqe-5imYVdcQAUV5fLFyPD6xt03oIFgD1Iu2reRKFO65Atx7XHODA0RlDLpx4ZE1Kyajvma0ZUjFC1YFHMOkXhEUGV7iGF6OoJq3MrSi1XLBG6K3MGGc8hKY-T8MuA9y6lpyzOlA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112600477274175082626\">MAISON PQM</a>"] }
        ],
        summary: "다양한 종류의 귀여운 굿즈를 판매하는 소나시 기념품 샵입니다.",
        updatedAt: "2026-08-14",
        highlights: ["귀여운 굿즈가 많음", "친절한 서비스", "우수한 제품 퀄리티"],
        tips: ["5% 할인 혜택을 꼭 챙기세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://maisonpqm.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16601836232765837593", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EC%A2%85+PQM+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
