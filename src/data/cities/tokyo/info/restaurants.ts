import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "호텔,리조트 조식": {
        photos: ["/images/tokyo/info/restaurants/place.jpg"],
        placeId: "ChIJwytKmWyLGGARNbFCG_7vOO0",
        placePhotos: [
            { photoReference: "AWCwydgqUE-fOxqm6imLFgBaD5ApSHJneb50EmByx7Xcu5SupbobXMxEYRijwAp9C2vFYuVdgXNeKEfnKqpd7zkNHHLRtVWw4kqgiAlgZEHBLHnZO8UXfdG_qEF4j5WbCEixbkpczxcKc4tgSbFvG7N-xiZuqkbA1VqWjv60mogPGgaAhGmNqW0sFLBj4F8a8r8zcDTHpsAAL_EvHdFGRcX_JnLdfXF4_CK2fnYvuglXQMCSlyuEc_93VruH9Nmqt-0oFpPEPmvGtOn-x6L5dZTOzYSZHfVeqgl34M5NuNvUHE5ICRIP0vRf1qmDpWSG8tz3jSnMGsHaruEuwyTD7adw_T6yIUANr0UnY418WkXXjJ6tO3dMUz34ztiBWg0X5kpPhS8fivqWJEJ2XObg5KkGnzEIsLCVuD1siT4LAub5cxKfMtbmFZTP4MGjCqIaqIBm", width: 2625, height: 3500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118423786729359538646\">三井ガーデンホテル銀座築地</a>"] },
            { photoReference: "AWCwydjOPYWr6HF47V6mhsadn_GUVO_AhyaYwMPWCQ2KRyFo8i77oN6YVQzdTFDpM52wmHD2hMIQZryp39ADdJvPfNp7kv3VETA1BncTFZymlwAbSrx_Esn4_0TrICrvZ4YLGqBcoRd-76uJ_Lg_2zblNhpe__tJZTeF4l0k6FMFfhEOGulbTiTW3IfvfzHXYZCW4HRjr9Tewy6F6MZ8tVu10Eqp2C8yrwQTQuwwuRZHaJq7VWwMWSkbQufTYx0SWUEGZWcnrXabEjB3AbMQ__y-Rh9M3LBoERp7Jm_kqkGECt2DEEYqUpTHlGn9Loj0yQdkLmR3ZSpkhjgwS-oSBmhZSedvvTfk4osKc09a_TwwfrBb5nK9rDwgBwbUuP7-zYifu2b8wmdXEuXy4Z5qIar0CmmC78cKhEYTKUyrJSuiUBmBpQ", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118423786729359538646\">三井ガーデンホテル銀座築地</a>"] },
            { photoReference: "AWCwydiR6sZwl6mb0FXTHaLvpoK1QL4WcFy35cT8wvSv9pBfgMl2TTpERFWHPoNz9Gk_We4irFcrwClTlgep-FUYRwgBPTjzFPU05K-HrCzCh3xePM5wXkroncCT4DSetSQwP-Fi5e7am-f9KgxSssZRRR_sAmfo-f6yNcOHMNTn1T6wmdG_vUMTegGXYjKjfbMQhSXKK3dHwV6YPM6XzC-KFIeWt6BSlKx_gQMBPXSXbC5iZlJn_aaOLzC66eC9XuHKB2o69fxHNFUAAbwpQi4PFUW3mh8b4_7-CAMhPxFUQNuAK4pRJKRHJ6O61eb4OBsL7Z5-vGrHDvxbIsslptkRUhdcZ8XKM1SOZeXKpgD3_rT4OrXmhZmtAUhH3FsCnuRk93BcOMFn1rnIPTtyR6v6SFtse76iQ6gYL3DaAvCsTu0", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118423786729359538646\">三井ガーデンホテル銀座築地</a>"] },
            { photoReference: "AWCwydjcT7mM0SsEnkkm0QEwwQxVAalHXyUoRSfTaxwGGg-kyF9_hc3KdLreb1yPytGcQlKg6ow7ycSy37iACTns0FudjITB2rLNB2qaz2yN92Fvum4-eZZu2_Cvpb0E-Tsjb-J1Fc2SZFTlMDRCoh4W__POOefUqdPH3eNx4ZdOxScat6HBJZ5GLFH1szu-NvMHO6khOeFu0EY5rTSg2doRF2nvIXdQPqe1xA-3RQtolgRF0e6PeBcaMjK5n0yH0RWN5UWfOdg4mdvBasoKsdc3G-CSt2zhVtq3XRnyj1hEz1lIrWO4DNdfNJRzNB02ll4Zlh8n6e6Nw1qPam-OE3t_fzt9ssXjpq35u1eWCIKQZj0DhNr5qNBtmeiiWMtqYpcpxwwS1HSIic-ebx2BUN1pUO4X3Ht_pP2D4cpGL4SGrTvWuPUc", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113775536177554079360\">Eric Kai</a>"] },
            { photoReference: "AWCwydiL_tBpo-Z2ZmeUrLOCgdCwqZIWa4A_Zg9WxQZQyj-FkG2ya0jSx2YnLzq8HoFgzK36-7tKRisqxx823tKAKP6lFzefXIcjLPHG2H5q4EFNeOhD6CnBk043dvKU1BwTTM-M43b0yMAGgr0v77Qw29NyOlss1gQ-l_xrOpUvAX3-NAJ788lMiPwrokhQHtTspxUzo-Wk9L4Qtqj1Ww95OIfKB1hH7_rqiaf4FRwzTg69utE8tPd7d6gYtgZh4U-C5mbfnEUuhcx4ikJyXH2Zbbngdkj4_Jvz7RmKMZb_RDY25d7ehDgvyo38najiWb2-MkuyxyBMYit0kMm4-swD386bJALqQDbjX4uS5o3MwVZd4WDKZuPaVbnT8pMl37283cOuVAJzOhbrnpoRqX5yaKMmQlSNPW42sYoamBl5B6STUA", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118423786729359538646\">三井ガーデンホテル銀座築地</a>"] }
        ],
        summary: "도쿄 스테이션 호텔에서 즐기는 품격 있는 조식",
        updatedAt: "2026-07-14",
        highlights: ["도쿄역 바로 옆 위치", "고급스러운 분위기"],
        tips: ["숙소 예약 시 포함 여부 확인 필수"],
        warnings: [],
        menu: {
            signature: "숙소 조식",
            items: [{ name: "숙소 조식", price: "숙소 요금 포함/별도" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 6:30~11:00; 화요일: 오전 6:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tokyostationhotel.jp/restaurants/atrium/?utm_source=google&utm_medium=knowledgepanel&utm_campaign=atrium", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1883412725715448345", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94%2C%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%A1%B0%EC%8B%9D+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "로쿠린샤 도쿄역점": {
        photos: ["/images/tokyo/info/restaurants/place-2.jpg"],
        placeId: "ChIJtxODuv6LGGARnELlksWTmZo",
        placePhotos: [
            { photoReference: "AWCwydg1fKiMMa1LZDXtxBBqy2JcJVcl3WrIUt-PyvaQ--EsEnMnAgrZwspouGSV3oiJNC2m2XkKR9B5nUHmiY-gNBGtq4TXKpwCnjqF5ykNFQyxM46HvHwHOX_QlWd_OkS-gTFSrtAE7up8w29CGoJBvhiWqZL8ABX2sc7aJN9cW34V7R7J8_xiw4E5mnyQ4JqlKAhs5zruqGtVeFauTFKdZRqeFHGMnB6QmJEwmPIJ5lsNRXrLr5YprM9DlHJEwjR34sLxaNWXs4MuV1TPbv0Tbmu0AVAmK7WhRrjEJEePXeXSoK_naPMNmLtxbOVU5OZZeJELqt-wLs3mN-zGr9m0seJ-QN94uXKIb-omdxKquW1cQhpifY7NcyN55iOCSWtVmjwsiEXlYjURhDIi6yNC5k7ZQkVEW-dqUuqTs5oTAapZghyXqBthYNdXPPyoFQ", width: 3957, height: 2968, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104502622847501732730\">ラモブルー</a>"] },
            { photoReference: "AWCwydgohG3FOby_paaJuLGBj8ZG61ST6vM674Hd5KrApYNzEzOWSexAgdYuhLh2XYluo9a5mWddAD4m27L-9FUmaT6p3VKKKhxH0fzUQJFUA5CjSAM6iLDqVwxXl9vXWS6PloIBz-lSt4VBqXLIZFml-YoyICLj3vWKNoNoLeJe-iodjLNLCwrgm1_PoW5ClSsBOUq_ChWSY_GnBcxZWlhHA1olqYGDj7-m9L5VeUbkUISb_HPxIm5n5bZ7WP-cskwggLuj7UQXC4VuWXSKoJGDQEfhKKQyY2vAS-eoURHRapwrDY7XmIGXmBm04jmVqWvAdUsK8qV7mCQ8s8AeedBHVJ79A2pgw7Rlx8IpO9UU0q6ad1v4B-SgbM3cHYZ9iDRue5chRQrNJ6dQD3rB0WG1u87Lxy34ZFkCoaRFpreD9SW9lTfUbPsiK0hgPxU2nafe", width: 720, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114446001593598509886\">六厘舎 東京ラーメンストリート店</a>"] },
            { photoReference: "AWCwydjx_RyPauwk_ENFOrwIQ717IIwaxrJy3JPlKc_yTCCMvoCczM-Ii-3P_MImpHVon-hvbE-MzzzrEwBuI9oNHYAwT5FIKoZbtbMNA20LxacPfG42jLcokINA_AjagVQzYOFuE1hU9WG1SYFu8V7KA7cqgmFvhqTC_omTmWSYkZEv6bv2u9CAq--cnjzkrLAPGCoZ0tqMOzgAHkOkkP7mS-B9xb4SaXIXdVdH9aQ9o0pO2o7GbrATZTHVvu90tumCyxji1T8n0uI0tWA3afR1ZFUh8kTrelCjRZjwAbJb0V7vumSTJga3h9Mjm3mKY6xJYgdT26_3Rg8kPcH-qjwMBokhhWw5WyYIDM8qor6GTkPw--FlNz4IdbdtFHs9H_VVv2BhyqPsCGVpzFu7oaoJNG03Td_ah66NgqYk39MUOIO4QoNFys4p0VQx02z-e2W1", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116651909710186650709\">今日のごちそう探し隊</a>"] },
            { photoReference: "AWCwydhCefJ4ItynDxWcNZCOiyZmS3WFl_dDRz5ap7Y6D9JW24F0F7LiFKb89ds_jWgKZRV5V_JXTRS9jHG--pEvrspJLAlF3u7LsgMKEAVkj4apDgCZK5XbqPN5VDbrsJeBse5ezByYZaDZim7Y8CTldm_NwBs3MQFOtJ9w-Ro5RgE-D6OsoyPv8c-6mrsyZ--NPXxfTTmoalz8lzSNLGhMWALUAKYeeFNIbeb7yfeDJHTMY5kCYjS2SmGoqxBvdRRaU4cXvlkwGh0laJhHwXZ0lbpDSGcGyXV5bPXl_pVuh8ivZ51OWRR_LFEhHl1iJrwSisAkcp1nTd8vngJpCT3bASeX4eWJyqgHMX9AsC1QMrkNJhuMWvqlISntxjMgi-hXSJhR3LqwCJBkmd6JVvph1m8HQy4SaWJe8DLug0ILe4wtmcjCDAwC0ZWfsoep2Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101930559092331433033\">michael meo</a>"] },
            { photoReference: "AWCwydjcYuhloWlNgs9vyrsuOXeJCHDqLmHDbSIP52IQdrQURfsRkJvlYrzxMf9tSaufepCuLZ0b7fgbti56TPXRjrVY-cZB8S9cXjXEDdR32Ln0lHugPsjfJJid7Z0ALVLTTdSjVu01W4aAHLEYxYNF3uTqxwFe_jywkLaTKa-IShYBCJxj28ficOsnLS_tTABj5Y-xTKSG8Q94DB7jVBhYrmGkTGG8bRjim-HK7he5OjUHnqmY4A1nKE_t97eUQoH0NuzWE1UDQm17NwXos7ptOdSgGsJENiYXvowR3LlizG8hkalCt3Yuq2N_IG_lrAg8o5fSI4Zw0Jnp7U5UDEmW_KiZDr5FoF6Vyb3ApLmMwfV_eg92UOpT1rjP8ev_wYyBdHT180_j4BtYSjtE9dywWpO6JS_jDkxQ70TpdySYi9nf0ExcAG05kTlxDP9BFbYB", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111377232683652836777\">papa shunsho</a>"] }
        ],
        summary: "도쿄 라멘 스트리트의 대표 츠케멘 맛집",
        updatedAt: "2026-07-14",
        highlights: ["진한 국물의 츠케멘", "도쿄역 지하 위치"],
        tips: ["도쿄역 에키나카 내에 있어 접근성 좋음"],
        warnings: ["웨이팅이 길 수 있으니 시간 여유를 둘 것"],
        menu: {
            signature: "츠케멘",
            items: [{ name: "츠케멘", price: "¥1,000~1,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 7:30~9:45, 오전 10:00 ~ 오후 11:00; 화요일: 오전 7:30~9:45, 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://rokurinsha.com/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11140097630059971228", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EC%BF%A0%EB%A6%B0%EC%83%A4+%EB%8F%84%EC%BF%84%EC%97%AD%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "이치란 시부야점": {
        photos: ["/images/tokyo/info/restaurants/place-3.jpg"],
        placeId: "ChIJOWucdKiMGGARbppa4b4CKA8",
        placePhotos: [
            { photoReference: "AWCwydihBC7XEfCASiJkif9SmoW4N9bENXOe2RHe2K0K6jWC4GRh4HXxxiSUm2Y9dVAVgPzkIMoEM2wpKeoA57OzSKWzxu3k_ujGnK26V6AdgTWabjAHkhhyj-qjcXhV9MP6x-EjHz0f4CqwlWQW20Fbf7qojDSGZdJ-qCZkZ7AcaRLjIbHeOdIcn-fPkDD2dpcyyq-89dF8Tkoh9vuB531jVwy6YhJoRENQf33RmCgeUMTnX4R2NmoAdRhdiYEDsXPJA3HwGo0O2rVDF6EeVDDsBHXwt68XWzWYaAL4qe7jHylaWjD8Tj95Q_wHVBQ27ydZYFkj4e05YEFlILJ3Gd6wHHDNJFQPTtKjjy4Xj-UQagoyMO5bmhUYTwWNahhLnQ3dWn_ehxYl6zVZrHOqbrMh8kv01hBiKID57_QBHPLiRns12w", width: 960, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111538560134926676081\">一蘭 渋谷店</a>"] },
            { photoReference: "AWCwydhGvFnWVi97ORXa04127Y9YceaXWcg73dnHMsZLSKmjytpMkQHhjhvswB65XLDLw0uIZ5m6j0eMs9QUFv1daYSnlijPcpXYpciIUq6Nz4J4VMlIKTaKKfDyhziGwmHKCCCPgbn_de45foVgz2hb7byttyDmVumyecvoZQH7oZSbgHA2zQBYnoj5lz2cKKFWAMQM1_Nh2TT6DGT4APySxFPDJDdFsSLyO0AfwgcR6ek5_I5yr_wFMug0fyiFzU09XILfAaJr0g-HtFHVkKkYMpHAa7bOc0uGtgAB4k1ECeCx7JDNuWje2f1G7P4kfuwSa_FLk6RwhC6OPkTwRnp0brrc5Hgo67wE5xNVPtCk3eRYGF6zAdOPwbY4ICqiyDmg9OfGy2jPA9NRAGk5w0i4j7-8prmUFbaIU4sMrLQ_NZp2gEc", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118314715905829311734\">neeraj yadav</a>"] },
            { photoReference: "AWCwydgjCZIHcD6SoeDUGzVTL5FVmuaWTeUnMjqp1L67YpbKQNM0EkCFpNA65R9PfFt9PdaBX8_ZWFg8j1R15b8_-YfZ4YlM2VLTCG8AqdMttpB8_DsBh02cl7Coem1PxQL_RxFAdDMV7DR08LLTSbeDmdY5QNz4Lmdkh1_UF4lb9rVm97d7CMbjELKoUqJnmu9_tTZouOXwxedNnPdbTJWbPLsJnp6LgCGXHDyXaP5XeAEw3vUGrMBFUNrxpjUdWtn_nnAQZbww3SoTfTPfD77jFRJvEN1iVBOi5KKpUT8YEsqfu6UPJrqeFRdGE5e9Wnijv9vGiKR8sudlKYK6_tnlzgskYexna8lrdW6g5mr5b2zhbpLCip-v0d74uCe59orMawZ1dwDh9LznRHAU63lMUosy7P9gDC6TraiYKMEgPnWh9zosN0X9Vdh3z9GdR6R6", width: 3980, height: 3980, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104110798287320659722\">yuki</a>"] },
            { photoReference: "AWCwydhQdxEnJwIp8lRS8vz1hiJP5abinp-NqyeD1_CDMlmi9Fl1aR_GSNv_h9nelIqttOQDAG1vMqmmXM6JjPvOdA-agdSY9uV6I0jjg9GnGmLZdYOFXzDz02RkfEb8-3aZ7FnxWjvpMWgHd2WbrqxrF7GpSmJoI0D2Bhs-0y02IALfLkn0eQ9PCKX2iQ2bkewmBqRDN_M360IOny5HU-iDrPkh8PiHs-GvFS8kbEYgMadPe4BtXxQt1lnSIhwdQX2CvQGIOgWN0pBFYyFtDS1EVrf5SJs3_aqxTceIs9OzZDRsqfTLcdIin-bJ-vT3B6_LGEVccvqQuG7fvVBShNLPG93asAPM9NIuCKapeC8C93-fPe5WoK3YcJ7nSixZb5PPktuOPDI9voCKk68ajTzOGOZCSYr1SG8r_J7krDP8VNLRTaFP3obI6FIJi3D3cg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113585862878685266372\">S Park</a>"] },
            { photoReference: "AWCwydgPdM_2dxGil_YBgtKcACRKJRMGQfntmM8kagpT0aNfvONf-k_uwCh7PS74b22IgC9A8C3yPEK00DD-rYJ7vS-CYF5zwB9eLXKrJNJP5QmIb4Tn9-iXyfNer_RMWLqSxYlio1uQIQcVUIRlwYzkXwMM01RO0xFNCAP83BDW2jqa0FYMnQxcPU-pOYE3w4hDwTb_gkeEfcmw_lhtEaZdsx3S2Y1QmhLiGT_DVtfz7TK8ZrTmvMlX-szfUsKA0MWz-ScwXYKaGKPvGvlsTwxyJD71V1GBW79BqGwA8-Hicjr3vDjcOv3zg9xXqF2vmhn2eyHKd8-vj70nAt2EjWxlxP1QAmAbHaWEDIf-t_6T24tnuYd2kGZMTYx9gvLc_LK6NaNd219mr5aYWJGBH1Q37t_vrne9PnBe153lyxz6poeY8tKFvck67pNuv7oP_A", width: 4000, height: 1844, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105809865620140468026\">Claudio Urbani</a>"] }
        ],
        summary: "혼밥하기 최적화된 돈코츠 라멘 전문점",
        updatedAt: "2026-07-14",
        highlights: ["커스텀 레시피 가능", "24시간 운영"],
        tips: ["시부야 중심가에 있어 접근성 최고"],
        warnings: ["피크 타임에는 대기 발생 가능"],
        menu: {
            signature: "돈코츠 라멘",
            items: [{ name: "돈코츠 라멘", price: "¥1,000~1,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ichiran.com/shop/tokyo/shibuya/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1092125928485198446", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%B9%98%EB%9E%80+%EC%8B%9C%EB%B6%80%EC%95%BC%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "우오베이 시부야 도겐자카점": {
        photos: ["/images/tokyo/info/restaurants/place-4.jpg"],
        placeId: "ChIJaTXpw6mMGGARP-d-_tbssVE",
        placePhotos: [
            { photoReference: "AWCwydi72Cut5gCDrLhmF38OuAxiR7hWMwrRuauj1kPBsKTceCPRwxHnKhiR--CrTsumNbap5rpEQJRDOHmCLXf9exqLXlg0dcgBKKFA0AkwKYPuaDputvjzlGjrycaXn5HxxZNMVpCfishSSZrkcVto4-Gxn4nSNODlql3CemVfVHsPtjpMoXHsBYHi-ctlWPcwLDJFlvWCgUOrr5HVqX7r0xGM-BNh1HFgBVSWgPAs1ZYdF79F96h3qmcZ8N0ku487QO4Q7hKysqX47571PTIXnFah4pLlI5rlHdNmJ8AiphcdWKXgq2UnKD1HyRYk3ugDHGf_f6eOSoIq9IGJ5hfMfVwxiLw6Q4sX8UMYITSuqdgzOz_XfZEeHMHiEsSRtkn6yLHO4FdLECdMR2ZBcyZhPO39Fthnh6Bxv8cUIhqgeffsRCQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117914252030376463928\">Hiroyuki Kikuchi</a>"] },
            { photoReference: "AWCwydhy8oQNvg7lHS3narOi1TUG2eWJLpMky9FoMxUn_nIMAD-vxvwwhRCTRHZTQBZ9FA8FFA6DswKUFkuV--HT6DTSsZLlOB7nqNUypidPMMmRiQc4eewlUUkT8ovgFpPo7cPhZy5sBIUhtVeQsjNoxNX41yH-cI8ue8eQvMgiyxmCjP_RQqdBDZ7Gc1P5IMibGRpKfo1jSFF3nB82hcquNXK60P-XMjZy4_y8lP5F4JfVXJ95FWLBaVBl9J7D6AVwXGbBo4uZdu845ItLXYVEhvqZPSjQUQDkOImNDazWLlU693SWo3w0CSzyA0UjD-aL3KU3veCQHLlTNbeCuE53OKjHJVdPwJtHKTmubsvGg0mvSpJRaIVxwZyan-2O-mhHD4cg-IUuEihelJ-KvzlqDByHWnoXdxLMHvd4esJg3tjr01e6nT_Qlt0ucjr2quhS", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115662586616608296092\">Alex Bird</a>"] },
            { photoReference: "AWCwydhS4PXgXnVdsDNLy6Ja2cUvRMUpIc7ka0WXN7V4hxf-qCSEuiZ1zh3iug9NWTLOTnQWt9YgcRr1NpHhtlsOsogT4pgwq8IRPtgGJ2nGDSt4XdYJqwBnJ9hh1HIDH5HrNWXxL-g4orqoKOMfMHecVJqa67rn6TNfgfL7tegisTKNO_lJh_Q3Qt3ISHyAXGiKxrzZfzxo3Z9UpFkrM6FUoaZuvDjkq8stcPrk1c6sTET06atZ9_-U9F4hytK_sAwH0JxJvZ897WbacQT5p4cQ0eI1cHGTop8QMHq1jKKDfxME6tthAh__eWIbQfb8gi7YXRQlHgmGDshoHgA0GYQpObsUS57KT1PxmFIOy8r8XpN3ufaPKaj1kVPR2TNmW9_TTJI9QOEi9VbL7JeYy7dg_nOjz8dEN3VE6yaBdsv4wqhYnHlAmVTufCgEFM0Fx8fT", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113799004591377168022\">Abdurrahman KAFKAS</a>"] },
            { photoReference: "AWCwydijeiklrC9K-5C4eodOyGoh3hqQNqQFkBNOiWDxVMznugI4T0ACbh2-B7wFt1mjpz1lqOKwKTQQ27GLiTD_IrpeyJ1ceXH-XNod5ZZj1LnERgTYazYAo_B0Sn_nQ20SqzGUl9tAYsQhB8WtWIHRPqJzYrmwywOd_QlKLDtaRpJYvhUA97o3Jt_gaWjyajEeiNoQdY0uBu6zuJy128OgAuW_V48jf6At69_PuK3IQdwnvPWTvW08uSl1akhoyarg_Icck2MivQiScxBZ0cumj2bzmY3JvbczP8USedAnPB7eaJplQxoURatNNZmi7MR0K8v30LJlci1rLgox0Mr6Av0WtuZ5I4YIaghoVbAmvJ2p33RLcGTl9nl7LgVAK2jF4M6EbgzF6ud-YutWnBz_IYEcb6ODw62elAzihImgZvqeBuhG0pf2K1QlOzj5U1UT", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104593436888623453792\">Dee M</a>"] },
            { photoReference: "AWCwydjzS_2TqyK9Sgvx89KVPsFlQRnvo2_uvl1DkbFZFbfW1lmEhdwBcHstsclag-ItcLmUW5qycyFcxMEsmDe5MQ0cowA5dms7PWlvKcZuedZDZ-ROaoA6luFd-HI9UEswhH_sXlZbyqSHCGkAAu8THz-f_grmzBD2cX8TfN-y6_0z8K-p2LInR07Z3fB4GeBDiaoqQ1o4QJSPKLnZIFwFkWlWI0Myg4NYf0uc42fCBKVHJQoPc12HZU6_8E5y8-5WUjllCjeIdo6vlc3DY7AOza7mYv--whp1QNajNnk7I48gadRdRJOapq7Op-s24-GqVShSRUn8537_9abpI22fbdUel0Bt0GGXT7jJzbU_0QMHSf9NQo1XqjHVYu8Y1K2Kpj6xc5dOjwMfgpNJfvXa9UW_TaAj4Mg1dPGHYZiWFMBwrz04YaWFt-FAFheAK0kz", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113329727417745976893\">hata</a>"] }
        ],
        summary: "가성비 좋게 즐기는 고속 레일 초밥 전문점",
        updatedAt: "2026-07-14",
        highlights: ["빠르게 배달되는 고속 레일 시스템", "부담 없는 가격대의 다양한 메뉴"],
        tips: ["태블릿을 이용해 간편하게 주문 가능", "웨이팅이 있을 수 있으니 여유 있게 방문하세요"],
        warnings: ["인기 맛집이라 피크 타임에는 대기가 발생할 수 있습니다"],
        menu: {
            signature: "고속 레일 초밥",
            items: [{ name: "고속 레일 초밥", price: "¥1,500~3,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.uobei.info/?utm_source=gmb&utm_medium=referral&utm_campaign=map&utm_content=U312", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5886746596086835007", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EC%98%A4%EB%B2%A0%EC%9D%B4+%EC%8B%9C%EB%B6%80%EC%95%BC+%EB%8F%84%EA%B2%90%EC%9E%90%EC%B9%B4%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "규카츠 모토무라 신주쿠 미나미구치점": {
        photos: ["/images/tokyo/info/restaurants/place-5.jpg"],
        placeId: "ChIJ9Skp4tqMGGARfasPvo7nX44",
        placePhotos: [
            { photoReference: "AWCwydgE5stMs8uFHFnI2eUJm3epAqx62Opd_szhu0xRWG0zLvCBFR7UHTPLl0GRzI9eOFXyi5FudhFfyHJHLsI8cFLm0_K4tSGsKxBxHDLZfecAieStr2pqaiM5DrUQqhB2jLrKfJNXcwu8N3sCMZZgyMfaexn3WApF8j3zpJ-P7Us0fo-Z0FoLnOeb6X3BcPuCC1A9a1f0yRQ0LlkHCd6De3Apcgam5NYdo9emox27Tf0Yp8ykaNHThZiAD43gjzGHPv11pRx-tv4tuwgANMB5kkOppp7DtrIRtqP5J2GWGBbRQjXQ6DzmA0ng-PnlE3-d0WrXYKF0ilKGHY7JpiIYZqqn26L15hSRUDOfxgfF3s3HTVq37HwW1Fh70mLPRyoOyzdfTHHexUeVumtwq-nkRpaSzKylRPJcttOJNLbfpP2s8A", width: 660, height: 480, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114165105624575422354\">牛かつもと村 新宿南口店</a>"] },
            { photoReference: "AWCwydjYltk67h7x1TxuNvyTfmGAEyrebzeoDdOqG1S7fgzb7IrCyNQ82EtDN5ZRODnYF40oSJpdMPR3F2wdPAMkM9VY92Z5S2szjYQ_0FIPCptynqAzCUOaJN8UsBnuz9oNsV6bF9Ey-xDHXgOKqndc3BWrz-yeFiZurRo7Czq6hcpJEyd9SyHMtmjSqp61KIqZunzItS8-OH6aMiTUIgRSXfD1AcdBMXd8F_nOvBqW3mIAnherM7-Cq37YAqv-6nXS11LD-wGpElB05tjqMdaPI8QsKF9eDXousVE7zNc_lPjKVT1vngc3Y7n0r6hUoSSSvRDdwiwG0WJpzFsnr1j8on5yeei6ZwhMdqdjvimg51o42oYvpC09cK11aP1MjgpSYd6qdKP_6-OjE0FM69hOn5k1yTC3cDAg1MlE8qzoB_WRKQ", width: 660, height: 480, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114165105624575422354\">牛かつもと村 新宿南口店</a>"] },
            { photoReference: "AWCwydhpaxexAlFGSlsGG1hAlAO3dgstGBlPduLvVJecxIqFl6pGdNVWGRiX--KaRwPVA_NRQUYT8uvDP_mfh8pvXP7q4JBNLuq-K6avYqtnfBQIIA4FNj-8MGGJsPbwO2_sHPCtbY1YB9yUSWRTlqURgYL2a3utQojAlTlwiP-ln7aly0Pszb7jtdeMun2PnvfgYO72gt67BU3wDDeZouyEcO7eX4HylYWePLfjZZWDC1r5xQRJ84joY4emLj5TaalTmmItjUBXFGMj0V_OiKoGDK3Y6Jy6_7yUW8z-a6uG1gA2ovVZPHjqlQZpzFtuGrNyEFxI-TDLfL8exN6I_kXEaEeGNm25nDyYcf5krJU6qse68TcCXru1DZzoQjM_-GmYV8nmVKwsIzZTrraLJoPMQ6MD0KHIrg0ztVdt4Q4C5FZGihY4L_fCzOHOWploQDFn", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116778155678406722303\">Chihyung Chien</a>"] },
            { photoReference: "AWCwydjEgrw1s-KIPGNmYAOuRO2GdqzL1p-i_6s_VXxdZevPPBo4JAV7dDSB7TIxL-EUkbu2BgevP5mLwMxmsH-a1SPIoXWv7VkfddFTzaSdKs3bUCqOZuVnJPvx30qAhf2g2Jat8Lqjloj07I8qrJ-7s5wjxFJvirsIc6IXWuxuW4zaRLEbPclHo42jcMa5hZvVtMI1bPigGFzxh-i8vvfXEzRJc2cyyehIXbalNuMjqhgj-0W6viSzMUIma79pgUEbZlxIdzuOx0w7tS3ag0jTfQs5YeUAHvnejHvU9bqttsMgkelccVsv3p3o2BXMFl7nGHr7l_WIjlNedjiafnbGR__WcaAOQLBFB37V59ReFXWmXBh5pKXrGLjyiNx0-RvTz24VlvoEz1fDnksIYDjUmKeNvvz2nbDGS8BG7GI1sniXSduf_ePN3mjC8IxsvjL2", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107039049263522907715\">Angel Hoang</a>"] },
            { photoReference: "AWCwydhYI5PiN4NH8NZEX2vdMAcfBOD_w73ON7cWQyHlpt94jFFJoSTuY3gB5OxiOZrKnDAtER6-BjFMSTrc5Y8eueP3vbRImgih0qgd8ucq7Q8rlH9C-CaaD2V2zLflzXrzUY6bJynNzkrUnRl44yNPOgEc8KAdi03DPTDvKR1ODyWXhnm8YSqU8FRuEUb_h_Len1ZTmv5rlTsdR_fJcKYf9I6KmABb6QGM3z-Hztwo3q2qMhhizO1wFP46ZZHFtHNG_XT2nVoq1PAR1oYA_5o7NsCBJExu3Z1Qcv2-A2PU3obDeJJd20Tx8GTVXjO6Zh3oKkKtI-HjkW3OR8spAPZBN19h-n6tADbBEUU6hFvGYKeIaSyIFD9S4tYHAvIltCDPI-fP_GJmwPjCEaNeDAj-RYPvuO-jHHAm97UIX3J-fgf35btH3kZy5wCWXsN0ElkX", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104057121163260156384\">Zero not Hero</a>"] }
        ],
        summary: "신주쿠에서 즐기는 부드러운 소고기 카츠 전문점",
        updatedAt: "2026-07-14",
        highlights: ["입안에서 녹는 부드러운 규카츠", "개인 화로에 직접 구워 먹는 재미"],
        tips: ["웨이팅이 길 수 있으니 식사 시간 외 방문 추천", "가격대는 약 1,500~2,500엔 사이"],
        warnings: ["인기 맛집이라 대기 시간이 발생할 수 있음"],
        menu: {
            signature: "소고기 카츠",
            items: [{ name: "소고기 카츠", price: "¥1,500~2,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.gyukatsu-motomura.com/store/Shinjuku-South_Exit?utm_source=google&utm_medium=GBP_shinjuku-south", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10259173076433349501", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%9C%EC%B9%B4%EC%B8%A0+%EB%AA%A8%ED%86%A0%EB%AC%B4%EB%9D%BC+%EC%8B%A0%EC%A3%BC%EC%BF%A0+%EB%AF%B8%EB%82%98%EB%AF%B8%EA%B5%AC%EC%B9%98%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "긴자 바이린 본점": {
        photos: ["/images/tokyo/info/restaurants/place-6.jpg"],
        placeId: "ChIJt4oOwIeLGGARaR5a7m3ihng",
        placePhotos: [
            { photoReference: "AWCwydii3Y9fctc1AE2_rR9wkPUZlP8wyPSbxYtkRRpl0VjlK-ghNDXUQeGvRTy5ao-aBI9Sx2znEGUlvSkcgS-5hVqGOiOTh3Kjay2QQ7qFHsyBViXJ_qKvNAAvmmPeugu3B37oEk4Wg9uESgdkfO7VoO4AvtZ_d2RyEOrQKWfaH2SU70aTyPz_HXu2b1AdqTxvZLb1__uRY9j5vcGEYEdVJ567uSfiu2HoB4q2jGdvFba4NzIRy7GzLP34veRGwYDYu-PBoBXHDPWorXG5mV-P6an3lecvFaKnO2FaiJJoDIxWRfwhQnatoOfI6-7BDemNMo0GIEQtJ0HDdPluPFZStA51RJe6_WkeMizOTCaRP5ilQ316KrhGaG5_vFxIaPT5ipWsUUnS10_jottQ7_menDE4sbqfn2WEe7PM4k8yYTiplceKfMEChS4XLEwEzw", width: 2160, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113797112629425213019\">ちゃりんこ99</a>"] },
            { photoReference: "AWCwydgP48UF_xUoOsk9jnf7ECMd9Y-dW9eTNdkfoQv3wYKD0AxQfMKd2RtOuV24BsjemLrP6k_vAVtjM4f8qbfPe6LD7Q60G5fkJiV2xEPjX59LLA5gdG8byIN-7ATPfiaBzH9KU2h8OMfDKTbWqiUYRlkxp0yx_A2KVMyk1GcnLlwDut7qM2fmjQkSag9Q36aWzelZrCY_2MaMK0yNS0DBUP1O3EdX18z3z2Ki-WCB9KHyLj24_qKrgD-bzA4xugyIduy__Pcd9NVa58wew6kkohvW0S601PQKpsYOb681DOc5QqqbjV57T3peIuIHfYVXlaZJRi-nA13kws8Kl7lHFXz5NZm5K-Ps-OYgP0dKrfMn5b3lyuL8P39YVYJz6LW-gFDiSNYD-hS0gH5bypMpHk7WM7mmgcciMKikm_M1ZLxdWJFOxsXC1k4bu9cTPOXj", width: 4800, height: 2699, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111831941026426621082\">jay lee</a>"] },
            { photoReference: "AWCwydj-3V_Ce9tMzL7KzBrDrNh1wSX1BZZKCqnWUg0QFWwlHg8lZKe9ljSK3IIgS59Hfycg30-DgN5BKlJFO10XhOdm778R2mij7HYuEW3tkLARUNpqWH5HvkhRqVc918WMGJtvbw2dbsDpE0rb_2-AkgvqW596UuHoprXBajo-q5jtJKvYkYx4h_hHkYW77hSyg-6RWtgg4RMjr921MRe7tmqeRdBd6n0Cu_Lawka4RM6tkBxxbW8HrGRohDXKIFIqQ0aavXMpfBVnkDn5CKgREy0FkK3I1nb-qzAvNDRyCNEIgCauK_BxwXM0dEIobCGLGpZ_MOOrfq_m3fvsNfmuKPCL6_BrtdEgRULdPNMlw2GyYGP5RZaiRln1aJD8thHJ985yZehj2h0m2ysy28in3_pk7FDnmCoQ7bz6DNwmL5il8fYoCTXk0Crkxcb90Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113030699230755480325\">Seaver Wang</a>"] },
            { photoReference: "AWCwydiOgaTkj9fOFU5geHeWxvJa1-5mGuHwHqb2YJfZPHNnzE4EB23MXMyADL0RrN4vAdYU-Wv3d2xMJpMgU0BGEY9bRF08cEhlwtiPENbRqv1ovRR3JA-jh86EZ3ei0XQmLJT46qDxQRO9HsATN-yOliFpcPjpnSyokiASaZpgrge5GTzZx5lrNSSPCop1OIdyMtOIKS2Y78GuGjqxSeWMQhgMw9pAf3kjTazpeonFWmU8UqadHpQ35crQgAL8ubBoSBpyY4pueod5M4D9GCwUwtMrhBwJYKe8CSTRF60OZb_pE00gPDeuKblKYSui-fZyglLn5F675m88wXC_viYbmkelVhnJSJmxqSgpCaPlrlQKdbAv5kbnw03oLo8Gt3W6LM84y4ku8PkeUP5ZCEML-Z2knZT-rSYOIzHTLKi1gkkcXexfHzsDPgbT8KJ2zyR5", width: 4030, height: 3022, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107390853333409140528\">Takuji</a>"] },
            { photoReference: "AWCwydi8Z9ILLX7wXPeTeTmH9sA8xoQQXDYP0u9cnS1DJ4t_FYTqLX4iRwsKNoJRDJX5y3viyDNAsnP7TDJrHM24ZfDAzy29zHodCqObtcGjp48dN-TIr4BI3WRnd2nWo_mNGtJgLEyktKYXIB2upmq-9F9Eh5htIK-42BwsqReZN_cFkK_BiOhsd_-gg_OZ__I-sfEUaZeqMTSIufs47lXTO8aaNZIEClyaTEDSQDFHMwopjO-r8lS64N7_Pe3vS15sDtRsLoX0Hui4op2G_ZfU0zgGLSeATBH9BQ7SzWaC3Fm38CLdraJmTEGyAq94cO0Nmvt0EZF-nP745E77DqdA-r5oTLUXF3N0Sy_02Tq9YtF2pz0f4kvttQVlqxJZgjfOiLhMz4pITpKzI4spTejP-7eelCeLWZreMXl6cMUY2_Mf-AdAxncVK06S4kXvVT8l", width: 2160, height: 2880, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115039018355866431266\">Lillian Hello</a>"] }
        ],
        summary: "긴자의 전통을 느낄 수 있는 프리미엄 돈카츠 전문점",
        updatedAt: "2026-07-14",
        highlights: ["바삭한 튀김옷과 육즙 가득한 정통 돈카츠", "긴자에서 오랜 역사를 자랑하는 맛집"],
        tips: ["점심 피크 타임에는 웨이팅이 발생할 수 있습니다."],
        warnings: ["재료 소진 시 영업이 조기 종료될 수 있습니다."],
        menu: {
            signature: "가츠동·돈카츠",
            items: [{ name: "가츠동·돈카츠", price: "¥1,500~3,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:30 ~ 오후 8:00; 화요일: 오전 11:30 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ginzabairin.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8684877893208776297", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90+%EB%B0%94%EC%9D%B4%EB%A6%B0+%EB%B3%B8%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "츠지한 니혼바시 본점": {
        photos: ["/images/tokyo/info/restaurants/place-7.jpg"],
        placeId: "ChIJU-JXDf2LGGARHsancfqkHyE",
        placePhotos: [
            { photoReference: "AWCwydjHMpprG0qfqAIoVpcbth4L9TaYc5REA6qJTG_M9E-MOIXXSoZ7sHvaR_TQXUlzWf_QoPl7HKb8WI55GklhdB1nRSF8DwG5NrvZRS1ahmHVaPvBLGjZ8E2noLK8p_vopBBfXZ2Ufxad_lp7CwAsewQOeb6bNkYDf7rFsloouk4zIAaLwdXOR__vkZ52Zs73LymXNNFrsuCrqiZ0247FMz93oDQS2gmcQLhfbKU5VMNvyx1q2fzvmUoeq4qysedoCYJt4_c3WBRZXwJHntkEXsqC_3y5wxfiaVNnrDuevJcMPU1BBD6niHLve5VxC_PMNAfzKwS7uhDv-w0B1W1jQ3QMIjpcAYvVysMzX4Q7z_BJDe612Rgh7DqYB7bzZIBOmHBBx3Blf8fuIQn9vho-iQIdHg0l08ilOw7Z-zKmsYKMtlZXJvb0SOxzU1oTdA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116301422885527196161\">Matsue Ando</a>"] },
            { photoReference: "AWCwydhAdrTiW2oXVqwTqmJ7VpjiFp2I-vapng5hq4lUxc40LL_-agelCxR3oRbZg4b7SHiDrJEAAlZE4p7Dx8POft2it3p5SEObAnvRkOc8ZTvZ1cke-VmZ6JYjUa0peZ49K5z6vvuWUy_sm-ba3NJ-rKHIdCbcMmC6qMLYCteJgYh9UxRm56puyK2m7Vl0enqjfVtfEPZk3XubHo-wOC_d3XhQzR3M2XCzrz3i0vI6X9mXJc09rFUZVjwbb6Lz-Jq1cJFQzyjU1PDmbyv-mofMpDzfxtXXWvo5unJfRE4HRzWEovApbJi_iB8j2lkOHSLmm3Xc2GmMbgDe6lUpZ8zs1ZnYfXDHdmAjUNefoFm52CsEtAy7YnMmY1WsuNDbx65M8BtGgybwRTaIf03lLr1k9K9j96iOd_GQGP5jSPW2OE4", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104581199734599368361\">N Jale Erentok</a>"] },
            { photoReference: "AWCwydibp0ejcYbPheDf5tZdQs_s0D0iCmW6fE9QkLpWu-Zb4v6bBXEqE7jnCcT1PjMfNmuIzv47ac3sZIhqFw4NqXurbzDIuv8kz9xOkAmON7xAMWq9tv19z3cA2Dfd2OMq_2MITbwJTqHqSqvmrUWCwG6JMdG9PVCOQyP05VgXQs2SPvIzgotNfeleT7v0u1vVSAkSwDWro-CCvuSRW_m8toI_y7jj0ZYbI5SNe0lfA_cky0XwO4m31JOIZKTnn8xAMNr9QbaCpxFDAnDVJKcNzIMSAPQZFuFGZrZqM_hDOh8mqfWUCPGjYo8zYyQCv56H4Xb_qAXIDKE1-hA5apxsROQ0xOuTNQ5OYZzKHmqxdarQlB-2J-VZQQr_Ya3_jTyzGKpEp-vAOKeJ_O1QzJo9XmpWAmY04cGToNFCiI0HRxnqWIcAarB88qxKpHTA_CLP", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110947598391607311588\">김기주</a>"] },
            { photoReference: "AWCwydipklEIZTrOxoHdXbxHJT6TVIW4XcX9-TwOV4fPrzRec6zonD1LLP86VzAtK6gdO9vosbq6iF5ZuOZX4C6n_rkpC_lQs0gcMS8ZpNPe9pdQ4Zy1VIjHWHdbiJyGEFu0sFccR1J4HB4DEoqSsE7blWdCdEvjatgtWhQPxpeonobOYnFgwP-_eiXYFCFXOWfMQGWLGs0nC4Pryfxb7NDNReyyGOVzTqaQrQthI8r0Yo1JAEoxOIcCYaRRD2-mz4z3eMNDNVStivh1E9fwRd8TrDsieQPMWQfh6lhHm_fnUfZ3sX9UUyTQDKkpkiLVSvOmhqb8NVsd88RJV9dsFyg8TTo_2a4lE1_HU07R2dV43voUdYEsmPsqAhtEJoD_gfBh8UdR7gYQV5pBoMYzVmf_5rZYECDWDhmx8ITVh0t8ewVDstyl02KNjW9BgDk6tJ44", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101694797531126240875\">Gabby J</a>"] },
            { photoReference: "AWCwydj5lfNK8X9LTG7CcpRHbYZA2Xct_gfPlR3WlSCncAVGENh12hbGmg33WE53X-3dzHh1D7toFAz5gjlEmTtqx9np6tTl1DVp_wmDEjm861_T6LC4EZoHWm2b6v1JkS2Qun5mLwdIfP0-r8tmZWs-ApSDwSw0dlFfgyrQQliaV6_B74VlrMOtAvfEGOBdfX_-8XFxbSBGuKSD4ScTSKMHruD0kBadYwVFlxSK9kJIQx7eVSpbc3fAEdY8TQxCBidhU50Z8e4-yNnU6pqBcOXMyWzU8cjkNmMGdhj7ItrZcASA6lzLaVBjRqTGblmvAVXbF7LFejHTrtir10ULNXEw4IOY2Xt7i-bspiBf9fwbzJRya5IuP8xWbGDWc8W_y2Sg03EB2ziztf24RTALXPtMbW5_l1wDDEcRwbEW59C3bss72noK7YnutK177mqrqQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108101367549829524371\">Ryo</a>"] }
        ],
        summary: "신선한 해산물이 듬뿍 올라간 도쿄 대표 제이타쿠동 맛집",
        updatedAt: "2026-07-14",
        highlights: ["입안 가득 퍼지는 바다의 풍미", "마지막에 즐기는 진한 도미 육수 죽"],
        tips: ["웨이팅이 길 수 있으니 오픈 직후나 식사 시간 피해서 방문 추천"],
        warnings: ["대기 줄이 매우 긴 편"],
        menu: {
            signature: "제이타쿠동",
            items: [{ name: "제이타쿠동", price: "¥1,500~2,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tsujihan-jp.com/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2386807723085252126", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B8%A0%EC%A7%80%ED%95%9C+%EB%8B%88%ED%98%BC%EB%B0%94%EC%8B%9C+%EB%B3%B8%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "스시노미도리 시부야점": {
        photos: ["/images/tokyo/info/restaurants/place-8.jpg"],
        placeId: "ChIJu9W4zVeLGGARXn0xCjGINF8",
        placePhotos: [
            { photoReference: "AWCwydh0--xxmwWaTdwlmOD16cTI83zeCazfuGqEYGLdK8rz5Roa0lcOYD5-86fT2h72SPBjZATviDsiUMXWExy6qJbLIHtO0JcyhfxQk1O1Q4h1Y2pdvLN904XYyumioUV7vtMmjjnXlyDBGldaFwRDgO3U5tMyVluXlYeqB0ypVoUXw0aYQHihLx7BjIGQ8VD6UoDNiW3Plk4mC7ZXJrtWinuQu4kZBakayEsu_POEvC-oDF1xga_iHd30I84FaPPCC9Vkg6zyRT0Pjisu16E6gbeJmU6xeM3_W163BmyxHwT9zM31lJyzVJ1kkpYPcg96IwcI--tNZl4gzQUNpCmKcrKwodR_98aP1So4MWg6xjzteLNBHK0LuFwBAjRwUt8z8A_-q32LN7P06nrEjiKdGuNlSCnDMmkMQ-BnRvrDsRuNRf9gKvuRwSnR2UVUdw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115910082725060662489\">Dawn</a>"] },
            { photoReference: "AWCwydjLOp9qRzKUvi_9jvc4hJaWP3DFpEEpqUUbgtFFfu5N3SV1m82wAubRvjmufkP9q1-GzQFUVqslQ9yYgplrSWBjdIRegWGKQO0MBBoAhh7n-qy2ENLlzsPE4guuXl-1b7mUlsGdj6H4EsfkBMCbE_yzCNjsQTeMDBxhmYu0maxJFqyj2H29fziG3kO-dpKvFfiE4Ul6cbJrpZxNCzTYaA9w1DozY0WcA38q7AeeHx8WZUg7NoOJg_wPoV5OZOh9kk83C8_6GRDL5XGLfEJ4dt44qmX20a4topb3Az0R-J3ro0nTfsGchN_jI1UfLyeafDMEDUPXkz7zVV0FNgo3SJuQcDJF7C5NS2WJu7o5tZRxWdvzMBBilQxez4Dax4wkbtNO0yxzJKFyFKOiJBzZF-xQPPpAnAnV0MyuHiyGNx6z9ugj", width: 1706, height: 1279, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110758838335860037759\">A F</a>"] },
            { photoReference: "AWCwydhkhRFowPIbggADWd-BkyjZC6gJjcLfq9LMI7AdCUuCyPIYsJtPpUjNMOL5V7dzyDVNd5rGXF9tAbFS_D7YBl4CtJ0oxYySk-dTaMbxF7tXfIaTmfHR4afm6PtmLKUO59wTdGMMLrji2V-6u7tACwFPjLuAEFyNT3cvR296WUMCXwVqIEyvn5o3ubkUwuv4yZGV7BkEMC5ke1kvEjY4iM5yn29_BoBcrwRUzmkKAh3t3PJw7ZWx1G1G0W4LouM07oJQRs53LM67nkNGPeU7MsSVz9m03GgiB9-yzjutDi8OInK0wYgYTSahY_8phDpEooP_A-cYxipNyYfwUfBG6g3URGQgfjSP08ksugE-xGIFwHkwZkMpGcQ-zvHK58AcwKt0Ootk_uS67jkBKtvnyR78pMmms9YAqpflUXUbB_ihKf9HRA06Egj65W3ANA", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106892475829909849862\">K YOSHIOKA</a>"] },
            { photoReference: "AWCwydhUQKVozQYRFKZbonEt6aQgtZqpBcvPIkat7PS_Gn6Nv5LhEw0yz3PbtCf0VAYhT5Kwt3p8DsCvbctbb7TbTaIC5fGVrPJH2fba9HfyOe7ywkJAvRhWpwrudffkKOgAAMROjAsLs2wT4qGi1jPxiO0uhRAIf-DENd0iDo_5hwL7dqD9znn0HV9zyYqE7AfgPptSOmT_ur3Oxz0VSZ6OSRJp37rvSQxpourELJ4ivx77-TczYBEIxE0vob9-h_uVz15arnb24AQ5k52bICuwdVmyhI_oETsywGPabbvKZPzoqQJrqEYozv85RVh1a8K5fm_3-CCYLpOCfPT2qS3K0PSDDeNYIG88z_CGZ35RUqSd1Qbk2SxkoSuopNYZLU2uNLT0AVcqpV8JChO3vF7iQJY81an-xOSUBDNt2RTsSJYyDrmd5zaMRfcfwytknYpb", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112684545305772160822\">Hanne</a>"] },
            { photoReference: "AWCwydhm8PRUS1zwSg18RnAKbD0r6UF0QwKOAMXyOWQV675VEEng2lHdBuyH2PiYNScky1Uv-rtBxNSTWKOqQCSi-VvS-SQ4ac10Ig2uO9Ev3krSWamLXbBE314yw8hpq5LyQRMu_ImQ2tHgEvzCjJVFSpNtidWCFDtc04AcvEn-1c_ZnRGVnVZaoGFhRIjU_XaBW2jmLClWZnuLV3HGT8Wv1osGLb3OW2TIAp5ZDq9Zb5Mdt7ApUfhLepDyCP7SuJePTQAEbV3sklpx2ItceW3RpugBBNMLTbeDdczIKsuhQcacjKjyy7bb0nbbB8oL7rROO3auUEdwlCB9vXnoJ0Dka1olyZNCnulXaYp_dwny4j9XaU_xxhj3JHUdeQtcTdEddSInFzr31UGWR18TS_C6ISkYcRShIArjfY5g8v_InbNadvAj2k9HSTPwtvQR1Q", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100439049084510207429\">Leonard Mok</a>"] }
        ],
        summary: "가성비와 퀄리티를 모두 잡은 시부야의 인기 초밥 전문점",
        updatedAt: "2026-07-14",
        highlights: ["두툼한 네타가 특징인 신선한 초밥 세트", "합리적인 가격대"],
        tips: ["시부야 중심가에 있어 접근성 좋음"],
        warnings: ["식사 시간대에는 대기가 매우 길 수 있음"],
        menu: {
            signature: "초밥 세트",
            items: [{ name: "초밥 세트", price: "¥2,000~4,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~9:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.sushinomidori.co.jp/shop.php?name=shibuya", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6860257876597898590", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%8B%9C%EB%85%B8%EB%AF%B8%EB%8F%84%EB%A6%AC+%EC%8B%9C%EB%B6%80%EC%95%BC%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "네무로 하나마루 KITTE 마루노우치점": {
        photos: ["/images/tokyo/info/restaurants/kitte.jpg"],
        placeId: "ChIJdUbpSvqLGGARCmbc6R7hZJ8",
        placePhotos: [
            { photoReference: "AWCwydiIOC7jLhTOCCjAnjXVT2C-yfHHHBYpEnPf3mpRIjKwgqv0PuYHIDPrk2uyrdgFcY11qE0wJxntEDsaljTGGxH6KmsUaTFZIfahVMmfjM7a6pjbF7b8WAMSBXL-H83GB6AAp6ZxgEx0iPxKxmoGgwpfQDs2MaLoXNzLDHDgdAepamZ8H4WS-1dNBwKlKZwWxHRrCB7K5y9sk-qe_dcIs1JDmq-Pm2SzLjp_q1v3Y_5a7vID8r4Ti7iaz4e56AyL3teZkQDM-IxQcJQHNnwRf4mWuE4K3lxi1Matu4AtscZRdgc96Ew1N6Cxsw1hFAMp1bAFk6w8jdNsNxC5hOa15uwgc9u54FJ5XPS0gHROMKoTF00UOkYFcI286FtXjFvVAhJVBLtIN7fc0RMBSOfuOxzTza3ZUOQk2QIzBBcnh2kLBUYskVpXn7MvQTzGs0yS", width: 4800, height: 2761, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103218173579878132333\">KITTE丸の内</a>"] },
            { photoReference: "AWCwydhUZvMXz8JrifmdcBa0MoSrxCq2KXwf1X1AOjdKyjCcOYirwB91iUJp_IGWiJ37unAiSgjGuYQ0lHYtf_ZA0fZaHjvRg-C-g3JE2X_jXBwhkom0-ZEgQ0lV-264U-3fgZ1pxMJLoZPyTWdUf8wqYNTbPgXztmbnUOsOc5Wh83RoG19tmzgiWlSQASb8mcurujNRNl_rQGDtyb_FDwj1gCv3Xo-2_wWZsyxGTmXrMlv2MJW4xkF1mN7g80oFt0TT9ADhVci1XkkGyAiuhYZkaLHtE-RkByXDTnavROkURK6UCPuQjUUVXugQisq_KLh1wWXWYrfbEFM1pN_y7Na0G0vMuTV4UeqtpGWzJnnkMtTsSb9a-PpdvmVVThOA5PhnwWUYL-fpOBG6Gi7E5Z7o74lIhtog1Z0NgqTB5MfkvuSHfkwU86e9NphPIu8NSA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112207962225345828468\">Shigure Serizawa (芹沢 時雨)</a>"] },
            { photoReference: "AWCwydjS003G1yBJIegF9n1CqqAsLZXb8I10HJ9WWjDvN27j8ly6aWnT9iB5hlXTZaHno6WPCLfgMNmKXyuIYK6mODhmD7BGoWexBVHujtjnHQ4Mkl6eN6wfZe_Z-aEDHWFAusYWqYoxOIcwFahHUYbK3TuR8NGR816vunjIhYaFcT7hoPnTWowsuD22RW-pdvPQQAEL9McnmKMl1xR0wCSIJeguKGYNtFw-Y0hCUAyy4XiAdj7TFo-_tRMK2pHhxv2S3wdI6LWd9vKnZ97BHD1fiSvPcbz4tFRsYO43nsYqxReE6aODHFg_mEm_PGVY6KwmKNtSGj1SeUPMHDsV7oIEY3p27qb8RzvNi6BmcFT3PP4x6CxRbNmPLQS9eibWpu_W6_R8ETaNdhAcHsUr5NCsVPUPg9c6XOPpOsaK624YVw5B-w", width: 3264, height: 2176, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117875654365522252231\">Toshihiro Gamo (Dakiny)</a>"] },
            { photoReference: "AWCwydjz-tBstb2k40DxRYuLAaXA8HVNEB4LOyuK35wZLOCf-mvXd19_K_kUI97zGKtlL6GBjAk8BM6pvHYoooVhkTwLeaWfWnnGTvX4EI5EI7HdzDNN86fkXTl3-SsfHpvhe2shLIhJLXvaT5fIWw_UkIyd31UZt5eUAMes-lBSjkuHql67uTUnIEHW8adeto4qePtDvenrqxmlQkO14nHAz4cuxTT1EnQSOJlY2T-MMxyMTocNWmR93aW6C-G-9cXQAAF0oKjwrfKD3Z-4y2IqUDXSbnIl8ZEq8qsvMX5NxM-bgmwMkHadt5acOb5lBqhO3c_UFdu_7TT1tf7vRqoe1ErNCkM7d3hDUV48mKlPZff-Maf7tYSwDiShQo9sJbHZXZ8InX-VmtBv2l_UweeLzsOmjD4v3AB6g3Mz2v8QLGc2wSoO", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100787145370651203908\">加藤恵子</a>"] },
            { photoReference: "AWCwydhxDnxju9S9a6Eha1uBngBGuXCNqSk9f3IlKcG-g6yHp57e6RGv3qBYOZ4fsRKR6fCEfS3MZf8I9dj05MXlt_WZOz8O9xI6nd-41cksI7u5-FoFOlZO_bJOD9eW096YeF2tHHOcPNoAR2s5IrplYMYFkMAHxD23Y7Nr1FAM20l3osThkw8QCe9BXUbLV8EP9YblgoPL6Q91qn13GSCcrMzsnOkvI7HG0_OhHmLKD0kKHVYtO_leiuHBU2M0FLuR9OYRRMPpPuzwD1XC0E8B45ZMI-R84BJtUc5XBuf_iYODsGmhUw_vHjcduOql5ay0sDKTjJ39EsDnWl5kdK7NPAlb8CXcsyMovBBxI_NiI6RSDEfVPL4OEPXNej7zIIT88MKPsmisruzuD0afwgPrOhRc7bO7zp9thMzH82XrdCx9BYQc", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115520386667645195751\">にゃんこゴールド</a>"] }
        ],
        summary: "홋카이도 직송 재료로 맛을 낸 프리미엄 회전초밥",
        updatedAt: "2026-07-14",
        highlights: ["신선한 홋카이도산 해산물", "도쿄역 근처 편리한 위치"],
        tips: ["KITTE 쇼핑몰 내에 있어 식사 후 쇼핑하기 좋음"],
        warnings: ["인기 매장이라 대기 번호표를 미리 받는 것이 유리함"],
        menu: {
            signature: "홋카이도 회전초밥",
            items: [{ name: "홋카이도 회전초밥", price: "¥2,000~4,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.sushi-hanamaru.com/store/details/s11.html", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14326864775095335517", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%84%A4%EB%AC%B4%EB%A1%9C+%ED%95%98%EB%82%98%EB%A7%88%EB%A3%A8+KITTE+%EB%A7%88%EB%A3%A8%EB%85%B8%EC%9A%B0%EC%B9%98%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "돈카츠 마이센 아오야마 본점": {
        photos: ["/images/tokyo/info/restaurants/place-9.jpg"],
        placeId: "ChIJa2mnui2NGGAR7z4tvWkl7HM",
        placePhotos: [
            { photoReference: "AWCwydiDoMfA7Ew1AESyzNrh7unhRijKlCNMwqYoFmFVa91m8ECoB7ifd30GzYgdXmPe7Jdv-Sw1_87nsmsw-VsJyfUeBwkNwgq5QEhch3vpdk9YKNG4XgunqkvGzBB3Kw5wEI8JYfQ-fVDMrLJow1f12J78PmLnjFhba9NIDJJYV_9Dsl2oVtG0qjBAUwLxV-f7eFQ7U_BZu0N0FsmhfFAnyuW5Nar5TSRJ08To-jxGz0TtgGNGCtDn52SBuVu9W2P6Bb4aq8HGQ6P81ZNb-3lXiCb9NYZdouSZ0Yep8Mmk7i3ZH-IeHzqA0HPaY_me6sRluBx1CmHOMPOZVXaysKFHkM3ntC2fqgn1iv4tIIxA_lr-_LvxW9u4uIxG3ANiOMZj_zZ294ww87qQejHC5h17mkDnbH2_t0fXzCOxM6czcCa0weaj", width: 1024, height: 704, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102502317324616943609\">とんかつまい泉 青山本店</a>"] },
            { photoReference: "AWCwydiwwHzjyBOql90G3NOj78By-9Lqn3P-4vehf5ShpKsF_q2tFviYA33vrnhApvaWobmcYHnXmfMI4bf6GLPWq-XbtaAd1FY1f8W4fZ1YpTQswJf4-EehLS_X41c_NfJmBe5qSGXH2ksBcth3BBrpH5k9vKNWTmiMRGnT3I9IEbzeKGd9xF33qHMu6GEV4v2EztYXFI047bCspthN0u9VHP_IVrm6HAQBbK1VLSnYa9543COsIuHmozERn7S2YHea3f4t9jGuC6XYrtc1rxSGLHilS32oi4f5sF-2RbskxQMEOtdW-ggOkrbR2a7BeefQRbyTOTFUoUriuV4yNaeCRmee3KAIO8S3y9nHcFUQGGOaHEPJRpXXhBfGWnXfqlch-yrv3apKJMoQJM9nHK_pOnk_13FBkjdxX5M6ILi-bfBZcSw", width: 1280, height: 853, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102502317324616943609\">とんかつまい泉 青山本店</a>"] },
            { photoReference: "AWCwydip7xk6d_DpXBYUOg_SIGrqhydCcVF6z8IAucNT1XyAZGnr_05Q643hU_rxL_2o5ZWMJNSZKl5xcR3ycmkII0j04-S55M7y3EssF4yGwxWGkqS7fLBwrfhX672wpIpUmuLfp-DEr6dlQONCElxlLN_bTaPfnypWgABDGzra0j2I39kYG_5vZt1JBqcy9GyYWrN5TuVE47Pjqyd9s2FQl2ATbC767gVv7JB7Ms512wFy1TVU7W8tlDVKF1hfEeNETNu64ZaJP1i4xWG5XdQf35jdR7TijFf_3jov6X0wfQUodQq_90ad1yaBJv7zHBH1V4rwsURoJjnJr1QA72IwxNTiW8uqzHkYj-7F5xNORfixRy1pkgd17OP0txDDW0cioWacnmShZhfdn8NXo6YZQuR5gXRFsqdFJDPFWZbccI_F79QXNh103iUR2wVqrQKL", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100502811528794486007\">ほっとけーき</a>"] },
            { photoReference: "AWCwydhkZW2g7wsIE0fvna_xtNqRAUZ6X9bZcdqORCOqHOXJ5hqR3TyyA0PwCjBdRziaoVBWJg7Gqml2MvQJtWC9SqkT810OTEYg9wHNK9zcazFcYQh8uMMFXv0BBiPo3kZpx2AarFVagaiJ7cj2nK-jKieEiXV3DyTRnxLO6KjC1bOtXVEB9s3EWogjsnP-vlv4vS01iNkZMFjlmjj8ScEkcNsp73Ua43M7iRL9Pv3G8CDyTVR0XfDfIq6J4uHiYH8j_JUGHAGGHs0VcaeTCfVnKay9YQIS-yEOC8dJMDIxmgrR4gnvvEV25j3-uzyN8zA9Dw2xVHB5jbLkiCD4EZO256ZOD-MhlYKD825tiMnfOjIBn8Twa7_EKzGccRkXL0Cd5zEMI5yVDd2WxGlTwYtXIUaEOx7bdg05RW9xgZQmVjlqzw", width: 1214, height: 809, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102502317324616943609\">とんかつまい泉 青山本店</a>"] },
            { photoReference: "AWCwydgsuz2XjOxivZFoT30HM4kY69D1mFjlijnOZBW1-RC0nh_wgOwxKRtQ0TMuug_rxhP4TWrYCmpcifboSu2FrlC7HPlr07kBhUNb4YN88NQGz4tGDEsZrkfLrq1D-IrT4ciTc9Lbhb2pkFZZrLzRi3DMMMX-72muUnWjp7a9WxHOCKXAvgmL64l-lM6tma7b2AVhdNzxFfkrgSDgjpGLTDHfpytq64uy8cMtivrJ9gexw5k_6sBFkMQzK9Ti5pgaOSzmSH1XbRHlo_ksL7sSrj7068QFaJVMMmr9QHE13FtlwGfye_kY0Ip-4cTsoE25iVkHSde2J4dHAQX_fllptMACJYiMKMDCkA9eJQItvAogSOC85yw6g4ZpxaDol5ja2sa04HGkkUk0rTyouu4l3PDgY7eav1DdSrFQu_aQyAa9mUNCEvD4MrURVpHnMQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102361186823219142877\">中里吉雄</a>"] }
        ],
        summary: "아오야마의 상징적인 돈카츠 맛집",
        updatedAt: "2026-07-14",
        highlights: ["입안에서 녹는 부드러운 쿠로부타 돈카츠", "고풍스러운 본점 건물의 특별한 분위기"],
        tips: ["점심시간을 살짝 피해서 방문하면 더 여유롭게 즐길 수 있어요"],
        warnings: [],
        menu: {
            signature: "쿠로부타 돈카츠",
            items: [{ name: "쿠로부타 돈카츠", price: "¥2,000~4,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8353092544941080303", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%88%EC%B9%B4%EC%B8%A0+%EB%A7%88%EC%9D%B4%EC%84%BC+%EC%95%84%EC%98%A4%EC%95%BC%EB%A7%88+%EB%B3%B8%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "AFURI 하라주쿠점": {
        photos: ["/images/tokyo/info/restaurants/afuri.jpg"],
        placeId: "ChIJq6qq-dCMGGARmyGicupYD2Y",
        placePhotos: [
            { photoReference: "AWCwydhuLaqXYA3G7Mx0PFmxXkEvhp39wYus93fkBYvxtm0FrEY7TliwjAN3iNBmY50PrVo1V4Po4VV4_iLVRJg43rUFseO_KeTd17W6fRdNQcoRWcJgWhjN-44zZ5ZiQIPrIpkc7RSxSpQcS0CSNSI-m8h2ItT2CdYh8ub01tLUNSMb81wvmZkjKnbmgsAkr4wkrb3QstAUeN7KnCKEHJn7S8O1gwpCjsdlFcyH2X1D5enCgJ4cM7OK8GrRVry_SJFESpO_j471dVBqwjDgQ7xmVHDx2HQkCsszZQc6JXNB1p3XWLk2R2LOMOZ8uX9uaabbpzaNM0G79xf4Nkkn3VLxGjZ5K9dyVDxa3v-YcDzCWTgLEENYYsU6ubscEagOGZBt3ko5mMAZ7E0c3JK-_hPAftYN-14DTuyv086fwO3S2yOMtw", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105725435601440879059\">AFURI 新宿ルミネ</a>"] },
            { photoReference: "AWCwydiK5Jai16kEle4CXxti2eXne54bxdAooDtYPZB6DEtqX_vV4-i_UBpct0lz123fvfcCtWXC2ZsbY0izLSWR6K9S-PsBRgxsF4BakZ0Y7MOPTe2yHsSmwbR6TL3_g_OIVBQpWQwBBshKeL4NEIfdu7eC8Ke50ckibfbBcss2DE0bMGaVYlOslTTbGWjZKmE64TfS0UKOCGijobyrfKamtBX0wYwY8QMFonuPYyrQkStbk__H8WD4oahtcJivuwDyo02XRS5fx_syfEBQrDjTK5H5-r7Wt5SF1R-foakCmhyWKDgMZjXj73anM06UDAQUfSkHIOQjJfxigUWSa9v3llMd52s_gbz4FF223ORWoteqlZvcfg_gH4lEDLpLFdvf8OUnPQvj9IitAvygz14agraJ7aUBae9fhKTtj3imiXI9CE4piE8QEKY25a3tIg", width: 1200, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105725435601440879059\">AFURI 新宿ルミネ</a>"] },
            { photoReference: "AWCwydgTXP-py5HhTVpxIQKSPGe0Oje9zOjhSnwfbZZ8mJsS0FS1iLs1FLrtGNU8ShPlH1SPvIDMPU0c33a27q35LAmv0W0FCSG33JNzYCd9LeNZkYfTU72G6ixknp3Ymc-xfUZSFFz_Jw2e07HIf-iHfF1cbrbZ-rb-M6vdgUh1x4l5ggFjySTdY52-0JPEnpf0exDjuOook19QP66Hk2KCufSPH2TxwwNjPT8GETpgQm4mxs13ocN3ea8-EjfANKsQ8o5nuO1tB3m3Xp914slgSCMQ_WtckdjNd9QCDL7-K51_qcs__503pzICsI0cVie4dPHk-NLd4DpBq6Nk021hC5V4xufC3rX53mnX1GX4R-BddFUKcB-pOtMvcpt0rXW4uKD_9a1dRH2fiqGi0loiPD2nYcoV5_V0lD5SEPf1kHVIL4F3flUp4v-GMKxAAaBz", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104009816833524826237\">Jafreisy Williams</a>"] },
            { photoReference: "AWCwydg-TP_PIbHdjApyceP3TOtRr1QDrQ4bc0CRWp5Eie3jDG5P-LOxZyhx0UNptca53jRFG9NDwOu2Odxh4BL5wMKl3bJob7Sr64XPQkVqLveHYW6mHWUyQfencWtyvIw6zRpdHOzr-zvcuKXJQUQFIOL0IyhWXZw2wuCqrS_ANZPnP27SuyRagbKRDTzR0Z9542rkSLJboVES5YN8NojZKDmXVyb0RRjeaaRWd7-75Kh7CNPcFw5r1U5sVa5EP01ErIzqxW3FnqBk4yWj7ykraIul14Q6p3WM9LvX_3Y3W8cKBl6Hepu_LWHqmBokapv_c7aSHZ5izSpvdKwzn9KOW7XZAeV8kwRY1U1dfGZuoIgQy_cyFGJr5QcX9eVkFCWlHej-Xt_X0kpIfaJJYWT23x7lH3leanR0owf9yWZxYFhU1a2BofVIAC3Cf4vDDvSP", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113480563827010738720\">Simon CHAU</a>"] },
            { photoReference: "AWCwydha4rkKrD2jc97yLYv-_RKK8DqALvMaEB-QKaESDm-UghLH0bQGizQnYOLv5_4oQaacAnwRvRSO1CbIzVgQcgBcjT4bLmcuBaGFXX_qk1PD8k52lYJmJM9JZA3i96tAlVukMALijxlPAm7NY3r0jogbJrQ14fTVVRBd-iAsUrWDqGp31M3rzGk5szg-TmHmv9MsrdvkWHpDXB35781j_7TwzpfAI9QmMz9n6GFgUOlPORoCYq0Tu5sxXm59OkwHD42F10qBxHCPtoqzHA1Sqm4vBy1oncFFs2L7Ie9VD2w4hIlcJPjQAq8_nIEPhElJHxhtUpkqNvs-SZcs4np2-r5iVEXsFm8G5g092h9F45KFN4b2aWhXKfrqj7997Kp3kq9yyHkWWklGl3K9VSmWNPAEwxe_IVsVMmu7O4SVdqRkuzsTGX7O9vublAoqaw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109721648223015336783\">Christopher Jianglin</a>"] }
        ],
        summary: "상큼한 유자 향이 매력적인 라멘 맛집",
        updatedAt: "2026-07-14",
        highlights: ["깔끔하고 담백한 유자시오 라멘", "하라주쿠 쇼핑 중 들르기 좋은 위치"],
        tips: ["웨이팅이 있을 수 있으니 식사 시간대를 확인해 보세요"],
        warnings: [],
        menu: {
            signature: "유자시오 라멘",
            items: [{ name: "유자시오 라멘", price: "¥1,200~2,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://afuri.com/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14658399961265590294", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=AFURI+%ED%95%98%EB%9D%BC%EC%A3%BC%EC%BF%A0%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "멘야 무사시 신주쿠 본점": {
        photos: ["/images/tokyo/info/restaurants/place-10.jpg"],
        placeId: "ChIJcyLiKtaMGGARGlb3Io-Rf3w",
        placePhotos: [
            { photoReference: "AWCwydj0d0bc-84s5d96WXwTOvGSzZiQqAMxg8_HPZBwNUx8mxTZaA_oMAOrmRi9GSMlJds3_3v2Ss5LpOW6m6Xu5aZSfRvr77bXzbQAdnLYd7hyizTmSmrnmGAe4xRvvkCm1ADhh84z6vREEi4UbE9gW3XN0VDPd88nEj-Zn19wfT2WECjOUWSwca5DvEyD2V6VfQVj4fVjE_wPeY77YtzNYYH7BhvHCSmt-lFPAV0xkpjDNrG5eKjoKmXb1qfnsZWH6Wck6_OuCNi9FX1-2aQNhoEZ1y1cV-2IuRRX_4TbQCzWGIbNE-SGBzC7LdXHKkJo55IF6-C5Z375Df_Lo3rNc8awyQbsPnojatmqJwU0jI4HsNs0BEW0lbHoJfsGXCn_U8NeUZp-si1FaFydT-3R2rhrQb2tYOlcjcPX3pYd87fqvg", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101390598215321130028\">創始麺屋武蔵</a>"] },
            { photoReference: "AWCwydj8c2zLiDrMsHoCu_wJGIVJR4c-11rNeHIdT32TfxxrWDLr0m-xuu32kiXUSMJJQh-p_04Hdgd4nzH2BX37diPK_-YMEGmTjAGwSzMqgzb8KtBl5YFUTWlmoUaGz9Niba4CV_9HAgSSsHCS6jJ_mKpTCKzz5af7Oha7ppF_ASayNPqJPoFE9K2WXcusy3j42MeZcu2z30iCBQyqVg_Fg3-7ntK4Qo-77s-ghJw7thO4AwGeB1hN1H3um97A_FxuJN5jmFSVyqRMTgeq-u-OH5dgCQ8MTXnG19i4OC-0h0fP-NRyyIQoGp_Zj0HWT7JmJigkyq8f2cK1mG637D3v_e-hGo0PFdvUrQvhQMOIsI2Zayo2OGgqEB6Pl_y1D9-o9wT3-FBCnnBUIpVyOSrkdvlaAITvNIe6Wy2Rim9Lh2n8Gw", width: 1107, height: 1288, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101390598215321130028\">創始麺屋武蔵</a>"] },
            { photoReference: "AWCwydgbQx_-veOwmudhBGshmKS72p5q0mpWReZlBKf-kErTiZyPgyeCzF9aLD_Zu5XNEgTUCYDM56FJ6_Lu_YMwLBc_kLSy3EBmwnAjfNIh4iU7sGiu72nQ5eAK-S9L0KihnjyReFJi-C4S5Cnqj8AAMd5kRYh-NAsjf5kQ9EEa85Nu0wDTmh4-rQoiSolIDnPpUL_opKk4pdIjnh9Z530rOkobvxXIBQmWb2GJmAEssQ7TssXAEViN4ykEAAkcjk-ye2efW6dtuWy4amsjtcrQeUbhuT3ZzKojhQefBAdpO5DaQdJiopwhyMTrF-dOfMca3jjWIYEBP4h3EoCIxU0vJh0MQq-GA_ohYhKWRiBvlMgwNpQXweiTKI5z_91ZZU2FZI5twRimQ9N68cYGpdAMP5PHyBS_k_Na23WZYmC2P3Srx7z_O3YXJwWW9ZGmlQ", width: 4096, height: 2728, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100452726465958966048\">尛布丁pupu pudding</a>"] },
            { photoReference: "AWCwydj8GzTYS-DMKUarotD0ac_1GJDkOqpKQRWLfcY2It7ArdvGPVDSuzRVCaWo_xbUCE7_7XpGbLLAsPehyyyCmrRBgPNRoOvLvcQue2BiPJjNG4hx1lc-wNgUdL4dq1Ihm1yg0HU4oFSdTlLjEnVcWfVTmJCtdE1etdaGv-LvZqsyRbjlW0NmujGrciNMiex6rhx0V9kjEkKyqPmIk8ueFdvtJ-AlbbcCTGvdne14T55kJ_GRJhJS0lo02oH7gtQnqMbwhoCwv0ppXFLC1H9coSd0OLkhaUtXanjNDQ0-Qi2EAccATTg4yjqRujpX9YTprFTSFnmxd8LOnnoN1Wg1wmTWqvbSgEIkOhS6JiPvoA4FqWvBbEuZ4InByDKeHKD8U0_8JPvK2Qik6Xx4F73eVxipu8DeL9akQa8jMPVfPdmovq64zOgQqjBoGCt3G9Xj", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100786132984650573684\">Yan Spence</a>"] },
            { photoReference: "AWCwydh_3WhgaFFY-rBTXow4Ni2CjJDvWaxulLwKxp9Vx8ufaVGUgXSNSQUAute97-MuYnMWCNPAr1fViTmTf8lIE65j8Vnc96SUGAkMhsQPBOKP8WzzZ8g2WSiR6II5OoF8a7UQur2B69FAZIgSrwWTqnXkKJgMw0PLmnNyzJOFMi-kfMvj2zRrnkGlftm568k6Q5znqhcrBaVAGtjuZdl5CbHC-_rgdVGSi4cEi6MoCKY17-gcuFEmOkv7FcKWnGt22m6CbQuyAaP7FF0fGF5dnvstGQdVlAmi-9JSRiB2PZm8L4w5wSFh1VacsTNHfW2c-n-0gmAFns3sNom_RUeHsvZD0JD0Yrh5gG6vNw4tpYLUAxxvrXgqlu32_IbEuOUkzOmU_nPtS3QlgdKNXIsdA62HR8vIzrA5JdkKC4DXhXeIBisp1a-nZZ7R6u_rmQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102133870321383938962\">上竹圭輔</a>"] }
        ],
        summary: "신주쿠에서 즐기는 진한 풍미의 츠케멘",
        updatedAt: "2026-07-14",
        highlights: ["두툼한 면발과 진한 육수의 환상적인 조화", "든든하고 만족스러운 한 끼 식사"],
        tips: ["신주쿠 근처라면 꼭 들러볼 만한 곳"],
        warnings: ["화요일은 휴무이니 방문 전 꼭 확인하세요"],
        menu: {
            signature: "츠케멘·라멘",
            items: [{ name: "츠케멘·라멘", price: "¥1,000~1,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:30 ~ 오후 2:00, 오후 5:00~10:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.freedomi.jp/shinjuku", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15447522191168502462", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%98%EC%95%BC+%EB%AC%B4%EC%82%AC%EC%8B%9C+%EC%8B%A0%EC%A3%BC%EC%BF%A0+%EB%B3%B8%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "풍운아 신주쿠": {
        photos: ["/images/tokyo/info/restaurants/place-11.jpg"],
        placeId: "ChIJ508frs-MGGARnIKrb_tkai0",
        placePhotos: [
            { photoReference: "AWCwydjXBjWy7Qa1fEurMTjjf1_NpiBIyQypFtmN5khvq_c_iU1dOm-Tj__WViF-MYPRC-jxU0Me0kP4fE4XgTUtm_8h6IWXR7JSm3Wt9v9Wc3bWbdGDFJmzWPqtNKi1ImsuvxRYLXdOUyy-bMBXkWuSceqOs8DTVGQDOc_dIodUlg88T8sZed0PLkF2OT7osdW1sGhlrnM2CVSRhjscIwvKkaqdKk1MuM-t_FrLspsGupZyu5VV8zm1EnDZsPrM4IKCcqrO1NVFsTSmHBv9ZYjMf7_c4xpnxdvBBW89V9xe3LzVu-zO1-aa-rU6NPcxUx2h37M8_0iz-ep9KLta4mCVj_IIxcqpE9ldUCzOZnWI4E94xUYNrM_w0ub-Ydrf63FpaP5E8zoHgkkMzQqwxEAbrmmgfDQ9XEo3vomu2O_5HyM2HQQEEpFH-hnO77W54g", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104209982840049322080\">kaede</a>"] },
            { photoReference: "AWCwydhN-9U4GfxYLuR6bRGh_xdm05Ly3e0ZrpY6hC9zWqh-nSKGX5b4ZDNSMqfKtGjwIb14rwzpsHnWbKfrtJ1RNDww8QNmLHCm-_iOtGXn0MNNxrLBC97iePlG3toxeNEDQ0vSGEnWC9sArhAWSjcl2RRGOYoFiEAtvVD6-kgd8a69xVD2vBKtd672MPWz76-bDg7kbRU3pu1QfWeYafy44hcyB5sWXHpsEonqAwmHY6vHpJCwI4nh6O_jlNjzmDOY5R1gAMHorVzUgfdQuo4idtGjyreMJUuCUbeKkGw4exVpiFazJpazjtfguljLcBU-yMvBtFukKq7FrT3aC86S8hn4xUCQKYZdpRq6yDAREOBDWfyhH7Vfn_9NmJ0I8Vz8unpc2h8MWO9b4OsQA_1sr-vIO7c2Vq5xJ6ZTtaPaJ-AYj5H7Hf85SyBQSl5hwE58", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114254520773769936557\">くじら</a>"] },
            { photoReference: "AWCwydiZ9da_J-68Z6tBGxQc40uScy-i8gJzTuZCORf9PgaTM8LkY3ejOLC25NTYVp6OrunBInxjdlDoGf2e3Rirm5e35sDvJ68EdmTaFOmeuEPh8KmQB1UH_LOHWQeGpORFZr5MsYxuKSQ044Z3KLYMdFUCv2ydTRmVGYqyd4DvQnZrd-clQeiVVlBGzQX75u5MKlPN05Jdzs26EYI0cOr4eEDB8wyaJJY2hueWiQTdMgZXNaoZF3En_PV61dCTC5Q8-9XJYTn7wl8K9WmRhX0qnPrc6WiL26BOeQIKoPEal8UWn1apL91BDE4xRdG4e5kdpoH1eWiU82WsnWXPva1vmt7BfoaVQ2lc0MJrXoxcVP5M-wSQOsKU5Oo3Ji5J9rxHmw1EHQJFOebPW-vN2ZcA45Vf_tgvCmzZKwkmFgmglbckCS5o_YatbHvYfEuAyzah", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113952640249116133484\">Allen Lau</a>"] },
            { photoReference: "AWCwydh31EA9O1Q-U-Mei_2LPZG3qcVDDwQcpkbD_GdqpIcSXPc44dNpwDqyIndRL2JH_5dp2bjhsY3AL3jZi7wMw3Rp2Z1VRMC43h3yrBIQ4RAHwtzDuIEQgK4j5w1nqST-Rs791s2EMfgZRnuk5C6K8ASgQbHRjiZKKd7bqFqX1-0GDkCcEKjtv95fVZ5Y17GeBDV7KclnAl_nriTGYp0x1MQzNs5cJ_MaRATQyl3XG3wTEGchL4Hhjs_7VxxJeG13NnhfcchpWRu84Y2kIaPIJ5rwj4FSG5EuhGLfh6O2LfK4Sve1G8_F6w0V0bP5-H_98symqPT8lj2Ih8bqE2wDVRnvkH5Hg9nMJBid5oqKzs7FLCideUPhLvAhmE005q3o_0PgrcKZlQW9oFphA80I6bJYHwIYvH6-6DYa3MzfzyZKIMXZMwDSRvRVM5SJhNnv", width: 4192, height: 4192, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115364972049275562877\">crewsrocker</a>"] },
            { photoReference: "AWCwydgnFAhEE6nZrvKNIJvAzxXjHivKPPJ3EQANckxd0JjM5bZayV6Gu2X9BWhD-s6p_K8N4J6eyBSdCi_T7dc_urGlBCG2SP4BNJ9VA2RBtpp5TtpDGiNrj3oqcchFpZ1jtp_2V4wEVvtDn7waZ0abshj6VW04vVzu2QHHdlxKKomsbRnJ0C25Qf9a39C3MLhSiNfnpUGGBMC7VI9VcABT3lxbeQYf2wBiiPDD8Blh85ezREBxA0TyvoQAG4erSxXCMtrLK4KwN7b3nEXu3Za6JAMQJIXej8NMH8FTCARa5Y11AglHrA8djLcfynUlaeOM_E_fqjZQ8BSUVlDNe0NQXgnPDAmWkGLwQNffUVnqLr1QBGCws3sIAXTRp6bfc-cR22NssLSzG22Z5K587dhNI6zOdXC9jeIdrRbNTrqXo_KdAKEAYC5sxPGFDZH-lQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104314846627466466926\">sungmin jo</a>"] }
        ],
        summary: "진한 닭백탕 국물이 일품인 츠케멘 전문점",
        updatedAt: "2026-07-14",
        highlights: ["깊고 담백한 풍미의 닭백탕 베이스", "1,000~1,500엔대의 합리적인 가격"],
        tips: ["브레이크 타임(15:00~17:00) 확인 필수", "인기 메뉴는 조기 품절될 수 있음"],
        warnings: ["점심 및 저녁 피크 시간대 웨이팅 발생 가능"],
        menu: {
            signature: "닭백탕 츠케멘",
            items: [{ name: "닭백탕 츠케멘", price: "¥1,000~1,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~9:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.fu-unji.com/?utm_source=gbp?utm_medium=organic", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3272539110311166620", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%92%8D%EC%9A%B4%EC%95%84+%EC%8B%A0%EC%A3%BC%EC%BF%A0+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "츠키지 스시세이 본점": {
        photos: ["/images/tokyo/info/restaurants/place-12.jpg"],
        placeId: "ChIJz4fNKt-LGGARHrewpxKDz7s",
        placePhotos: [
            { photoReference: "AWCwydjzFTY3X1FyEduOID6ce-njaSXQhhE8NZgRNey0j8_17gU0nNOVPREs2fTu_Wycmqfcp30_0pQFCmJw_RhHN9aZOqb1CUXtl2zJ055PZQ3JbUZ6lUPPInU6O-NfdFqZM2rJF5qZr7iyf5nel_c78U91ud5nfWuaW5fnvrCyEZmTMc1_xNQbjZhqG0iv3SOyn1kxH6v9bpIWNwBioz1JmNbAGeZtLILilMpyYWUqnVjBzbfVcanOKozxboJw3IMIgwVzz_EEm38LOokobKVKce-tNNBzok4Y4ni2jHAw0ayA1oYboUgGe3r4Cu5NC2ieqv-wQ9S6GLvWzJo5W7K-QluhKjb7hTOvKgzouZQv6Ls8M39oy4effBNqSlcWaKkp3_M_FJSjlCeXJPR1eQDvBFjpOu_li9jWY-QJLt5XHDMFEV9UF--GwHFhlLSVIA", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114266794333079433132\">佐藤隆</a>"] },
            { photoReference: "AWCwydgAy0OEorgIkElxKoNFZBpi4jLu_nXip-OWGesYQeabMsRKPn2Xf9F6T9zDLQ2DhDRPCZqbavsEOi0a7VWj93Ti4UjIDy9HZepXjEri64KX9vuqc54JhL-UO15kfiU0V6ytRdSlSSzWSoM7QU7Ns7qRcHFlSOOIz2XvpLM5gfTR-yuh2mcbgTVvqTS8QBFwjowtNN8eLGzUv-NAIlfGuXgZfr1TKWediAcOaQuAgSIDJiC0EXx2RVOsvM2mr5xItU6tRHWP57EBrSRo81K-pPIzrh_aZzR8V1hWsslVmJnH8bigY0-rhONi5OlbpDLp0bMCHXaEvxmnKaC9hcggbVMCH5WeDUSJ2CQSzX6zHeZu5j9mvs_xOf8MjELqbpZWFUNqiAUOrh-HvJ0zOl0ImiJBv8MocPTHwN0hV2sdlQRAwg", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103371422127418929432\">いくこ</a>"] },
            { photoReference: "AWCwydjtCPEKZgO9aU0dFNZUYCBZKtwMv0EJQ16SVtC54epqC01bY7mxqoX4AsICYDX0Gy_g_THlyzkxT47PO8QWMY3YohMWmRvs3x1yCH-mZKKy75pgKUrYYgr0eMqfIdxxUBByYh_jtpPWM7-f-sCtOXqwrgYB29vI1QzFgQrh1vpbCSWR2XVqiGgmLebmyXOz4Z1KVnv0loxrcgH7FagQgS5fO1RVDjb-YaMch9nzJkFA7YRLHWlJNjSbrQzHkuYYSInSBBDThhCOOzlsFH29lpSFLmy2rr9w-ZCadGljpjAwHfUMuhWZTU-t030QNCmGSmGQ9bgCgTe0-O22y7SV9qHP6gJTzkkGC-GSjGfTsNR6Yc0dQejHqwrQk7HqQPHqZ77NU0aouprtnhbRngAKMistFyfbUy7TxRRNDtuWKOG2dA3rY4bFP7aPRP5gKSqs", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109738631471665481655\">N O</a>"] },
            { photoReference: "AWCwydjIT6vSYxRPpFceiubBufHm70yaXJDBvz9th9bTBKS-cMdu785-pRgKifMMza0kn-scH0W9V5LN9kNApvHLg5MVq_0hRLEdUB_Qxv9Yv5wCx6y9v4puV1DrbKfSd2LyqSQ6mHBA5-XrN432CcQU4K_pbBMxRm3aR3byGxIk_-qunH09U1n28fBCibRUMMUboSjLtjeZGLouo8rgsiQDkEKdGFJxtYUp1EmQn9qlXnX9c45uRzMdx6NLd6drGdP-8LvcvslAmjlBflPEcy7W3llEqWhR0ZDgiQYAn2_cI7RUG7x8CM3CJjmQvAFHfufcRhJ3XBW8uF54iU11-p_TH-jRWFMPmBiKC3_S72IV0sYQR-DlvlukrFOASgM5rbNuHUAZu5CGAbFPK2TxtyOVQlUnMd1eLXGqdeqYDGWuKpM28RGduEQxonp2Qg9YgQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117306407634360894602\">Bryan Qin</a>"] },
            { photoReference: "AWCwydiZsVvVAAamAYxIq3rYJUDarD8OlLgyVObJVf7TRk_leu8bdIw0ZndnlvebJX9ESYL7g7ZTZugr9zTIeq2RPja7FqI2lnynbbvxeAGbVz_cRI7AivzK_I-165uOF5-TNQjWgpH7sR46NDHPQilLPBWjivtPbLYejObc34K-ArKWpOQxjDLPTzJdtkj6JCeywKOdH82J3wuiBeBlGwnJoA_p9vxEuPmN8s5rKIH71PMa0ttLMvz7-SZrqfgwayI2--T2okztQG2M-Dz67O7fOo7QF5W-MUBg8_IjDMJ9NaWaQ2foz2fjZrsCkzlcoJ7EAJArJf-rrI1O2Jq-ZKwcoJxrfRDEaFkCxgbU2gpCt-tTrtn9Yt-yIcezCEeAv9sbM1bvhxjRChGhrtJYh64fR4qYkyx3GS8QXk0OcieENkK80k6iMQlJAFzVCeU-qPAj", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104302016484200854348\">江哥（小江）</a>"] }
        ],
        summary: "츠키지 시장의 신선한 재료로 만든 니기리 세트 전문점입니다.",
        updatedAt: "2026-07-14",
        highlights: ["신선한 니기리 세트", "합리적인 가격대"],
        tips: ["브레이크 타임을 꼭 확인하세요.", "인기가 많아 방문 전 시간 체크를 권장합니다."],
        warnings: ["재료 소진 시 조기 마감될 수 있습니다."],
        menu: {
            signature: "니기리 세트",
            items: [{ name: "니기리 세트", price: "¥3,000~6,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 10:00 ~ 오후 2:30, 오후 5:00~8:30; 화요일: 오전 10:00 ~ 오후 2:30, 오후 5:00~8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.tsukijisushisay.co.jp/store/honten.html", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13533179521417656094", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B8%A0%ED%82%A4%EC%A7%80+%EC%8A%A4%EC%8B%9C%EC%84%B8%EC%9D%B4+%EB%B3%B8%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "츠키지 이타도리 별관": {
        photos: ["/images/tokyo/info/restaurants/place-13.jpg"],
        placeId: "ChIJs-ytIN-LGGARYkv5Ukg3HUc",
        placePhotos: [
            { photoReference: "AWCwydj5EyZhw5LRis54r7SXRR5bDfJRmmoMDRoEURNrGZY5BTM25cjsPBZNr3ZdTnjRWKl7mQqSKb2sInMQcp8DQXKUxkEgQCjlsSiRaLfl79jpNd2ojvCa6zTR2xOqaw_dYbqLOWIKeBz_64zA8WH3FnggHKkHYeEuR5EqL9q7sqGnnaqWesvmqPo4lN9SN05Ot2wsMTqdlZ61CCHe4XwCM4S5p6zZqZYEX5GSGtTINa6BqEaBOgtsqZp5OKhSf6YzuE7v1g61aRJ3vD6dlQIyjky1xvwUZxEwsTl0ky5yDmmrowtg4BdMROcbGQGigFuGLmHM31hQy9xn93Lt5pld5g91wO_mJbV1Yyl986bevFFEEwP9UAyabUb9kmAvonRVWf1kpkoa52pFRr6CVWDKpEaLQrCUFYUByxlj9RnYbPI4eESYaiatQCOOV2ZsTg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102221947340329794127\">寿司処 うに虎</a>"] },
            { photoReference: "AWCwydiD4Qo3Ej1dqEVZfynzasinhjHWRBkXBw9KVLyM_5QY3j2qmqALr8qNoenp_UHS4kX_p8MCOtQaRSPtVB7XhpPlewxyhw5J9R8wC5iVDXeJWHyd4s7vEwgejMTvKzG-fsXzeWzCP5_C95h8BJCj3oOKGFErbSkZ4LWRQUU9RFgDm2FBsSr4YROO7cJayM-9zJWSQj8iLjCiOWsznMh2kRNLzGY7nmOUdmnx850j6HnGIVNALU5LN2i_mo-EpL7oi9HnV4KUIdYIVopL4bKNxXTGwcka8ODTuWOZ_L5c7CvRSU-D3La6A2G3sGCeWW2uZQ4EkqqCw945clIfb1xNkU8ENji3rjbEdQIRB4wSC1wPe812du_j-u9JtQjP9w64sdxwMDPLnpinN3LaiXVTfKXp6S1IyjDk6nA8_eYbw523YRY8p43InhhuZ3snSFOl", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102221947340329794127\">寿司処 うに虎</a>"] },
            { photoReference: "AWCwydj1z9i2tT5u-ioYQCHMe4f3Kt64m-R5rxR8juX_lTuRhczFF5KUaww0f7kSuj_atQ2tj4CfCIar0CQ3uTOYEgL8BgHLjfzMQNXV1Odfpsx2Z7WiNVO-G4sXIz1feelfZ1uIXQo2PuSckHzjdqWnGOugbKBTY3xq8w6i2TMYcXZIMPY-6R6sp_zm3AitU-UlLTY4NB6rOZ6S8zZTCqRd15R895iK29UZvI9a_lqx-RixBp0RwiA8N6-ikAMaJ2m7wMYW8yTxSJiiVcbX05zDQ2-ilMZ6UZLhTiPW2j-RLCTxyo162suVBr6n8qvBnGX2BTLnTxFG_xMIRFgGdpGuMgwKvNDU_4mpG1omEqda6hhcpaIf8C9n7N8kgUxMGKn2cmJlI6cJToG5ny0ckiwyiI7VkVpbM-pSOm-3VsS9pFhQISR9-BRGPaFn6vARZXAy", width: 1536, height: 1024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102221947340329794127\">寿司処 うに虎</a>"] },
            { photoReference: "AWCwydixydzery98JXuwZgOZSsbzKJiJSQB6Wrhj-Z6w9pBi__QHiF3uD2CL5OULca556XlG2dokI89-tZ2hsXdumkwNl2nDzCY9Kc6MTHLMz24ECeMzUa8BJ3i9fwCp7salAYNifb4cnR-3Vd9mEreXzJAQB8CCfrbsqaBk7RyqvEJj4O7n5279LnQr6aPIGwLTXwKGVJHvcsFuRh015iAss3dfiimgRGUQiV5hMGe4B5Xh0X7IDVjYdFRnlHc2e5AZkXBXdrlTfIpxsbom3ImLNBGCTX_Aph9hIBSg9aj6eXp08wBGkOVJioxg3uCybImbAm3FHjcWdO8NR-Y49fs0QzBFuQ_6lnYbJlF5_IXP3VZrSUTCsbCA5ERwRh4aFJVJpDSTkLga_AGdb9xkSes_CGn7-b6JJutsYMb-pLrF72HNS259fFaXLasKzWribnqS", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118028854161731553879\">염상미</a>"] },
            { photoReference: "AWCwydhlKc7dcgn6Ot6ZLNdH6g9ie1YQ2MToikO9nKztYylliA1OVJP_EW2Jv0tna5hi-Cu5ompH0QuXETsBLyZ9QMs6L4E4otLHmGpWNWR-jc4qXu9uHBE0qGVNCUe0C2KDSirYHm2v4mhJim0tq_m7t6hZMtaxD76eQCbn7q7XnFYK4wKbObZuPyiZ2DMCTxslJjmPVJcPBR39-v_nKEFUMfTtGbdVSqNFfaMN6fVKY2Lrx7BCDlVIi_tjTnVzGEmsLgV3x9ZtH0pcnfBEllsFnB7crCPkS0B9zSCi_8hsxCK0ziq5-ilBRcnhq1bcRXB-y9QebiUx3WouvwbZWJ4IE3HWuXn0oQt61KkqpDZQhNz7zjKME5VRPFQaI5t8uoeIMhEVWp1B27iBPIkc1EiGNSF3L6S7EEs0Hjft48pdV_j6iA298k_pksD4yBSiGeZv", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104479825250975897558\">Mo Leonard</a>"] }
        ],
        summary: "츠키지 시장의 신선함을 가득 담은 가성비 최고의 카이센동 전문점입니다.",
        updatedAt: "2026-07-14",
        highlights: ["신선한 제철 해산물이 듬뿍 올라간 카이센동", "4.5점의 높은 평점으로 검증된 맛", "부담 없는 가격대의 프리미엄 식사"],
        tips: ["오전 일찍 방문하면 더욱 신선한 재료를 만날 수 있습니다.", "주변 츠키지 시장 구경과 함께 즐기기 좋습니다."],
        warnings: ["인기 맛집이라 피크 타임에는 대기가 발생할 수 있습니다."],
        menu: {
            signature: "카이센동",
            items: [{ name: "카이센동", price: "¥2,000~4,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 7:00 ~ 오후 10:00; 화요일: 오전 7:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://beyondtsukiji-hd.co.jp/shop/itadori-bekkan/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5124312734786734946", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B8%A0%ED%82%A4%EC%A7%80+%EC%9D%B4%ED%83%80%EB%8F%84%EB%A6%AC+%EB%B3%84%EA%B4%80+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "아사쿠사 규카츠": {
        photos: ["/images/tokyo/info/restaurants/place-14.jpg"],
        placeId: "ChIJAQBs38aOGGARoOBOR4LoBdI",
        placePhotos: [
            { photoReference: "AWCwydhXrMYr4DrlbvMU5EhLPTIFnqvlDyPTcW6L3EiHW_3zKASFOUe43-u_4kIvbc-NSB99xBBBQJWM7eBLAPea_cUkLSR_e_-MM8aFnUQpVZA_8SxF9oxM76O38lr-BNRqu34B9uBdyccjxsnBzJypmVjdCeVhyI7VJAQ-v27ya5Bq33bKL0Ex6lmPUdVYaRAGygtloumy82m7eWbTAXztiGmxMUFF4sFKqHDm6HvRL10Z2-8EwPpfZiue-y918mdvSaEKzjlXY4Y86BdAqU23GKnFsCxccIjpEZoELzUiize_Xb8YFk1aGIcvbsGQ5hEbEoHMUzEKXDSmmWtmCTNgYzTWhfD8ywr2VmRE1Sso1App8eF_GBulLpUUjGCAyNm_-asJrsr44pAReWX838z3KnSFNSMRz5q2uI6tNC3xHiWVE6-rVvpO15_zMRwm7A", width: 3504, height: 3504, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117152710538689379934\">何小溫</a>"] },
            { photoReference: "AWCwydgw_goVF4q0I1CSLSXdFYr5-5oTU0mqos1ZrZZwde9Z5-p3A61nAloBcMxqQuJd2ZbFOP3NRfSg94NB2XvCcxXBMnKn03TnNf1n6bHjLSWck_XZtR6RGU1jG-a8FD-PTBwY4HCclpoWXgbFewEfQsbxSZYQFMxsO6ulRczS-S3-kWV7f7hXiEDvV2cQFsgaCXjlKdhAGGiTmYIGYdjrlvl3c-TZ_SN7YYDh_0SxfFw7KV8eT0nOwjZ8w9mKfntHCepwG77ufT2POMWjdmN2L0TXDK_18mGhhreVDIcmq8whL10VksdW9Vr6UXK7acaY3oyQXlkIqpcd5rpKschO0qbgQdAgu4XzuIyIjhSgudxxg9VTnWHvcI1QXF0aBg8163Kxx4KCkF1zSStxSr4WXSQlZx5lkPGuDzfRoa5vIoYj55V-", width: 4800, height: 3194, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106036887851287929485\">浅草 牛かつ</a>"] },
            { photoReference: "AWCwydgdj_i9EYbCRftSJr9FYuqkljDxvA6lCkuT333CUsmb8YfjhTlWDnvK1EkbL7UYZ1CPlf8nCbu5QonDrzeBnXHjs6ho83B24Pz7Bo0z6psiW-Q2XLI0UWVo3DVYhBjEH-sqGXL4gp4AgCoxuVKZgGOn5NQlYNzrKdPbLrWHhXcr43LLWeLw3fBVTeyOx2v6GAwe-wKSEySKS9FAyrM7rwCjGqTYnAM8YaHi1mOZmhGNiawu00ZgwYbr1Y4WLbyvpeKLXabxm27pzWD43EFyDdB3VLwYzZ_2U8AsVriC5Yx-ROHhYOA1P8cZGdo_ZLOlBlLiznfCJrCYXtxPHE9ERnXRsNTd6dY1a5BwDMBiF400KiJVWbL_O2JRO9ZzFoMDxJeZxc-iL9yaQqLkZnlFCn7UqBoIlyXnkJarUKI3zXIXwuhU6NVOMwSZL34HgoYN", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100526183688113661770\">Mario Ferrigni</a>"] },
            { photoReference: "AWCwydh5-q-OunQkkErIAJeKKbZf4AjGxohniFBYrHFU6-L4BWcMlHk31Z5zjUS1yBsH66xGvK0yWvUrkrF3FAEytnREk1Wa986u-5VxEgyI3kIQIIgHFWN0svfqb9xW9CByZ2nwwJQN9zO6S-TIsDzCNOx-NH2wOB3s9VG2QZ2dFboaWX33pm-RiDuCA1BHHI9csYQeeS3G7Ggb5a5_3RypshO5_NEI1fD14zU9ulCz0jBMFJuOU22bOU4dK82C1fYhjp0F2QeCKCKawpHDO5zDRRgBB9JOJuyy9Az2jAbB-hKMp9oK4-v10DelFsIJy4-Cpnk9-Cso3UBqiuQ0xGYIM7smlgK6o_twS9fXBI76lHxZwblsM8UXQ58yEcN24n5wDtcdi-WqOtF0uchBG8YnjaM0yU08mXYrc_3j2KbLk2EXDSS7YFlhk4Dl04qoaB7E", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111598219272134309678\">グルメアスリート</a>"] },
            { photoReference: "AWCwydiExnySaeQwNhEOkcWaJ-Zf9InUQ63oPsVKLhprDYc7ZrmAArUs8a9eBOLtjW4YR40rsRtAFGfAcfiaK_EEPVaVsc8sS4P1_0z42kl0BvWC1Sbq5710-LvnAq1z1p1qVtQr7qvK3B7WFhMW6wIMY-hmv2GBe2HxLGWLcH8pXjHAK_85DdmccYg-_5Cdh4-B7bKWqjIIz5i8B8iEwpwKA-Bj1M_vapaUkQDGZP1arYffYe0CfuRBpe4ZX_wR-pC91gU4IOXoWe51BupKnqn84mfepd79VFk161Leu6fH5XpJ0yqCvEUl7-dfgpYOQHdDGzCSSMS7Im0Kks6mCjF_WSqepJgZmKhXHfKCwVxI6nlOfDyI-RQdHE0VB_x14BBd3qn_Jn9DBq5ASpLgLdgWSo81FgqaLQoLfem4gWiEOB6zTnN6zCyApdgzfLf5ukGB", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100866949746822635228\">徐青</a>"] }
        ],
        summary: "아사쿠사의 상징적인 맛집으로, 입안에서 살살 녹는 부드러운 규카츠를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-14",
        highlights: ["부드러운 육질의 프리미엄 규카츠", "개인 화로에 직접 구워 먹는 재미", "압도적인 리뷰 수와 높은 평점"],
        tips: ["웨이팅이 길 수 있으니 오픈 시간이나 식사 시간을 피해서 방문하세요.", "개인 화로를 사용해 취향껏 굽기 정도를 조절할 수 있습니다."],
        warnings: ["대기 줄이 매우 길어 인내심이 필요할 수 있습니다."],
        menu: {
            signature: "규카츠 정식",
            items: [{ name: "규카츠 정식", price: "¥1,800~2,800" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tabelog.com/tokyo/A1311/A131102/13172454/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15133757769088164000", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%82%AC%EC%BF%A0%EC%82%AC+%EA%B7%9C%EC%B9%B4%EC%B8%A0+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "다이코쿠야 텐푸라 본점": {
        photos: ["/images/tokyo/info/restaurants/place-15.jpg"],
        placeId: "ChIJ79EaJsGOGGARHgsoZXYMZO0",
        placePhotos: [
            { photoReference: "AWCwydgNYViWcS17wAOlESlZReb27HRUrm1E02S-xLMABTOXqXBWyiTnLv0uweJAasx32hjm9yBxIG-NG0SLxT2Ur4_8U4dP-v7B6Ru04DQCLkMSBP72m9klhXys_PiQ10IunDECbc1oAli4gOfhKQpyzzGeHWD74V8dc6joRM7vf2M0PsK03bLAGOV7q8z1jvDgClguetV9Hkav0131UoxM_abpEIoG28Bg3kp1BAMgpAg4EJAnGsH4_I9ukVsTXNScXx7U9PA-gfx0bX0OACP0DE_E6lTLlz9IHcD1X5JXcfZztp20xbtrqgdpGxeZ2gOBbg65bHnF_tn-mKP74DwPUuNrq2fpYfT8H_BP3cxl4NjXc3o2z3NsJjbqjXYnuIg5NRpbhLq459t9KFimqy25Osnf4zzaJEYshbnKgEoLw6yhGr3sl1mNuZrXE3CNWkL-", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110354958215274149951\">카피바랄라라</a>"] },
            { photoReference: "AWCwydh5cH30Nq99WzbYf9oL4VKif1jpXezG-kEFHjzeZANjAAzijbNwp2ezKnvcUrySH94omCT3PzF_w7QyQ_feMXDoyvqbEDY_k0SEtxcx0sqP5ZJx95j-s5n2LlBE6aExjEZKKorHtqdMdCVYu5F3tSmXFcvuJV883AApCOdAX707bX_12b0q5fkZwhwRrFr1n4cU3UP6jd_NmKlM8EpxZi6pzv4VMyzyqvT4PdmbaaeAIa4gCkppQ6rcM3FF6XBYOuuB0fNKbBzfHls2BHl6nXTWJNqtM02nD-OYH5SBuZP8sjSg1vuLfgH1DCw7hgHLOYWg7J8D-SEaZnmZZcSoV_a_G2BobwaXjpQLjh5EBV1-En5494Hatvou_QsQpPyNfZXAzWMB3kt3eSWMCAHLlcZYTVHC4wyQCsmKfW9RmiyzbxU", width: 1440, height: 808, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113399093181912709694\">大黒家天麩羅</a>"] },
            { photoReference: "AWCwydjINiRMy-FrfKJM_gOWs6ijtsA43MPI03gl8E8bSanr1WmFLwar9hfTYqR_1jL39QQZvZLi_NJnhc9sXMaaq1wXz6BXFCXNibyPAPoNYTglhdnh4O-PG7OhPoulWmCNsRNXLVzqaaG84uNqJbpp9sLjZ9uCYRev3At3UXNRfxdG0Dnieagr06iroRhd4seGw2iUAAhd9Ng7siiW2hE8eZBu9PoArs38fk_ZqQLmfLxSHh3m_SlAytHoSu8D3KvBqR_OoSSaruyuRjV1bmi9zAXZ9JY7OYjH6gtE8ClVV1m9YBua_wEUJCvgMRGqO4dxqF3J8CozIGe-wAvwuM2KvxYulSYg-96MNYwCw7Gpazlku8uKY3K0-SiC1QE6-daEm4dKk38fIaI_GYOv7KBJnKlqRPCo59uidDKinUmUpsW8sDw6Gpha6hqbQcteDr8_", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109642701019584871307\">嶋田隆夫</a>"] },
            { photoReference: "AWCwydiFCr59fljbkP20fmCgNqKl8fnYb_eQnkdexcmGT9h0dot4K6tJXdUSIU-o3EUD6UlKMeUKzqsTO3tDn0K0j7X80rAoQnGQM2mBprhfdPK4dvag4NM2VSedR8hEF0oTJ9mycr2auZIogiWc-KUO72SJSqQ_a0pv-QVvwp0AuWRMP74_7leCVKQB4RTXIbLJLwHeqlnUFBBxRtLHW8akCm-OEEwZnY5v27K2AQFPaqITf16ZDrVZyjg0SmC9ErvftkeCr284fD7CwIuwenwPc-530zn5N9GSfBZAJ1NyxHw0z47258aLDnLMuwblnLQ9L3mlIG6Qdw3kfTMM8ThSfxrXCEWRfs_Sd7vo5DO_YuPES_UVjKVP_-q6NaNqbJrkdx2FoTJrskZMszVfQ2rngM_AoEXwOyEPVGAx0_icuuzMkYjQOPR6he_rtesQ8A", width: 1170, height: 886, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101905088100834769610\">MJ</a>"] },
            { photoReference: "AWCwydg3ZgH2TALZvnVObP4zNPwN3Rm-dCtZIwZZc399sb7w-FtgiulJF8rw49Wr3OX9Fw8vGIdb4sGEIPEBvLiT7wTANMdvOZuQV1fvcys0BrrOAC2itqRjSu-FBerkbQuZAYk8A4P74PsgIa1yilo6bsRWPwv3wI-pA-EjdHT-3My9bpLXQPdPpbuszCMNcZpoh42Wxb7yZ5aET6GKNbH9K1qGWavosXKZx5jRibxEegrEYWMaBcTvLQQIVHR6jJcxOJ9HAY5daINACWNriv03zuVzJPDliTgoNiRNuR4saj1XUvQBcujFjxpXN6BukpUwu_iOKzbnhKc6qMrzyc50AJOmFhpyuu64LkfsPpDb-1ku0Wxumc2-cHNdxxtk6CvFZLzkrtCYHKtJ5jo4WdnAlj4m_PcBOlmUIWrlvUHEgR7OYp_kqpFdXG0toeEpOH8C", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107894848142154778212\">Will Tso</a>"] }
        ],
        summary: "아사쿠사의 명물, 바삭한 튀김이 일품인 전통 텐동 맛집입니다.",
        updatedAt: "2026-07-14",
        highlights: ["바삭하고 고소한 프리미엄 텐동", "아사쿠사 여행 필수 코스", "합리적인 가격대의 식사"],
        tips: ["피크 타임에는 웨이팅이 발생할 수 있으니 여유 있게 방문하세요."],
        warnings: ["인기 맛집이라 대기 시간이 길 수 있습니다."],
        menu: {
            signature: "텐동",
            items: [{ name: "텐동", price: "¥2,000~3,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.tempura.co.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17105810987302783774", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9D%B4%EC%BD%94%EC%BF%A0%EC%95%BC+%ED%85%90%ED%91%B8%EB%9D%BC+%EB%B3%B8%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "긴자 카가리 본점": {
        photos: ["/images/tokyo/info/restaurants/place-16.jpg"],
        placeId: "ChIJjykJZCCLGGARMx5vYqRsWYI",
        placePhotos: [
            { photoReference: "AWCwydiiCFLvsJx5DatExxdFTO6fzPyDXVZYTjRbNEOk7ySnriLAMNyXeRrl5ZhdWi3DGXkQyDzjOwH0H8oM-86lFOLgLhzJ9yUjTSuWOmblvKfUea42egfbfDNhmBUJwGYU2iqjXJzBySp1xsMca5VTBAUmXo3Jt57v3gKprs3OHh1rwnuQ7LW6phfj8HsEIo1tJNMJe2zCHDn0aZkNfvHeFh9VmzEWZ1AF_dRjuCP-IxDqZoCmjkUUpazWHujJXD4wvmQCxedPJ4KWEhKtoKJ0G0VLboMT80ifLJDcH4MrZIqn4HAI_JZc7evm9KVZkMSQQAtoQKLorlkdOcqnMk4Zdtl00kH1Z7qhHwzrBUjjLRxn_HlAn2Vv4-FDpNy5y_0Fjz7KE2jeLoD2cxUB4YjKWcuTKGsSajb37bz-4M8hCXX5XLMSlvjwVCNknlUjjTEk", width: 3872, height: 2576, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104995805343088760032\">銀座 篝 本店</a>"] },
            { photoReference: "AWCwydiTUOcp-DewWyavfZzVRuDfz_jkfac25kD1W-WmXAulUf6FkyhrN_edVCva8t96NU-rGVMMTOoqZBUi-XqnV7CjIVjDW2Cen_mFBDAf7uUjxYKrRX-fpBwCHzX5jgWcCYzICuxrKwJOvkNfHZk6uBmErtWvMOEOTP1PychVoqTOymMqSzLfMG1FSuBQZDHv87W5Olz07LlWPemvAGBOJobCLt4qQ1jKRENIPO7NzERH9ttFEDIzjqOyCiFI28-fhRlE22eZkAcklgfMEy4LpYX9eLDO47kNmizKzvRU-WrZzDX9MOK0jw1luxGP20uMmGAdNYf91vAgUW1gcBXOS-jlbvrFjJU1im2ybIiebnsEhKOHvuCjhi6bi5PSV9ilL19sgjeRUMhvmZeKVjLigzahzJZgLPjm0d5MLjqMbiM9EoaF-x0w9p-HmTmaJKP1", width: 3510, height: 2193, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104995805343088760032\">銀座 篝 本店</a>"] },
            { photoReference: "AWCwydgSXNRXVxqRmAjVhDDGIxfK9WzlSh1V25CbjqXkdcWP0tt4mllyjWwYweY35CE8-QdIi2r19Oz2a4c7Elp8copbTRsTAeu-cuwjvKea6j6ilieiTWMZ1OG1ldjQOStkpD1dv0YS6APDETWyuwHRmZweDx-TjJSXab-PK4whNm7gi_EcgMBgpLn0QEWvZDrd7fVJ55wwHPBwImL-0sPanR8rLOh2Icgkns9_a2hvOpaVCQYZ6VNKeACsTwgdACkOUcF3hb7SwwrleQl6o9IBhh7ALkAMLsYPlmqIpIAhPNwnxAh3TAYrea7jItPRrjtTtHCNGE89frpUWzMN9mjYRMGmVkhEXIw0F9n1AMECznsN4QM5UG4NxJk3T4_v4-ob4WO_rVkGCtfyUKLRtX5G1tJq53c_6VpVwCCxeUv1lzBZEuo8JsyqnYTNQDAvE5w3", width: 3000, height: 3519, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110319325928987624758\">手塚康寛</a>"] },
            { photoReference: "AWCwydiRe3NS4kyxD0zwS-jrTdZHuctA1T1KGPib-I9YeZFAwi_L9Kq51rXEGeld172MEeO-x2lsE3UtJYsfQHZ5wMTKaBF-8dxKZgkDnx5ba4gkK8GpoEwHVEBXLpuU8z7RGoRVS2eV5IS9m-XrdwCrrBy-OQJSA1kDN2ap5LpNSUw9OvIiBamUnzM9mJfRTMVGqrrEabExoLl82RcLh-nSQke8cqoyfool8HATg2L2_1SMV0sQYcRj4lWk5g119OhGuYGYiHFY6Ug_MtWXXucpKbWPmLqaHJjlQ3LNL28qc6JWIxU5Ki4PIxfhmmWcZ4qOh1g6m4vi6MfxL2LOWxPiuMrIlOtmwBIYbu8poLnLlOp8h2WuuNQc7zZ4U7J-y3BFPnGo2jNzE-6LnAdjYrvBxZjJWD3ZHFAqRCwR2wVzG6hrL2pvhlEf2YLtQHSRLpXM", width: 3000, height: 2054, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104995805343088760032\">銀座 篝 本店</a>"] },
            { photoReference: "AWCwydhmbfnitjcChvpfctN_VJHmecyEHay09YAAgIVdjXgzLPtlcfxY7Jq3DI7mT9jNCZqiM4YwLLIOpLYuiyWfFMU3BT9UtBtHbGbV-mVxGzPIdirVck_RZzLUwDAPm0mFwAklI_Nc2i3mjF3JgNju8GqD-x3Kj6_tv-9EsROd1w781i3N6jaOQqBgR8L0m9XWsVJEse7sV5mR7JlpzHOROrigQn6jP62va4WQgTa9zJSqyns8StXR4T8vOOaVVvDdagCNlulQr9ui4dGvN4B2DhdeRGuCnm1-t490HkkRVOZV2wK7husDY4_LKMyko5Dj-VcJ8y66RG6RqK0hOLOZTY4moP8Nawz7kQcS2TN2oLy5eU36klx8-C49DS9t4r8rzYN7dbQLuU3L6h9uka7ZH1oblriWW_MzwddjEUF0v9UQmKbLKUQk5lMjqJ0o2ZLV", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102103639782089238182\">NIMO KANKO CO.,LTD. (ニモ)</a>"] }
        ],
        summary: "진한 닭 육수의 풍미가 일품인 긴자 대표 토리파이탄 소바 맛집",
        updatedAt: "2026-07-14",
        highlights: ["부드럽고 크리미한 닭 백탕 국물", "긴자를 상징하는 유명 라멘 전문점"],
        tips: ["웨이팅이 길 수 있으니 식사 피크 타임을 피해서 방문하세요", "1,200~2,000엔대의 합리적인 가격대"],
        warnings: ["인기 매장이라 대기 시간이 발생할 수 있습니다"],
        menu: {
            signature: "토리파이탄 소바",
            items: [{ name: "토리파이탄 소바", price: "¥1,200~2,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/kagari_honten/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9392657951139765811", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90+%EC%B9%B4%EA%B0%80%EB%A6%AC+%EB%B3%B8%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "츠루톤탄 신주쿠점": {
        photos: ["/images/tokyo/info/restaurants/place-17.jpg"],
        placeId: "ChIJUeEGqnmLGGARBVyCtqZjegY",
        placePhotos: [
            { photoReference: "AWCwydjtwwxYZnLllpsP0prHyES91q0e855hrtPrBrYBvQkEXEeU-hWrEJenPk26FpVHdGVXzX_EFLwnCquUQgwvd3ppqn5T2ZFLu-DkcIoBkHgwwnTxreVixKBtdmWavHyYDBEfkzb9fxVK0K25co2kIhJUI823P4nfE-LHCUoLrWq40DU6Vdga65qjLIv4FbNBYlNsOJz0zxkz4jsSbmxByAssgJsAs0nOtyUaUtAlfx1RwjmpOIfpAxv4mm4vw8AYRICEcCXqEC5Y417v5G7FjcMShLl18eANzzOOsCkhCUx-4P7foAvAy44pQRgp3r2i1sO1vzaYrl8AVn02dPaK8QTUY2IRVmcEUyJQzxNZ_1sOaXWckAQWWakLeCINhmjHmLwk5j7VpaWC4jctCWccicHQelD39wP6sZTqls0E87RZhu2nHJo0gdOfa61eW2o4", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102798766725792400899\">sa ka</a>"] },
            { photoReference: "AWCwydiDdSAvK2vwX2uZC9xUUC-rfNpLliMc4diG6SG3uy2BD7zBh-F6pfQFz3zJ5dAjLbLDI-MOg2qaNy5hi1hjgR0mfrt8NJDx1t1Z8p1x9jTpIWMGor5Va7Q8OeVfqplPwhXcHbtp8yQTLvz_rhjK6RuymMaVRIfMzPOexJhv9PqWfeB-Ue-w1UjH3WMNYEtPoPKwjUPYqCi4cb4qyQh8uD60f-0OrtndZz9nf8HjRdJOD5W3JFj0R-PFm5gSexhoyCiVmbmI7XMj57IlJ3oJRSNAT-DBFAv4QWAZzwUwSilJsbsDHxXIT39Y7S5k8CoaL1vO0f_srQEmKz8I2RfE_PoQYWBSXFWNXNnl7MGeoJagw6SeIpmGpT69m6nNQktUafbka_F0IOeaoKIDlLo4i1VFs4cWAEw6ScXCNVM6wGi5bB93FBNSVGh_023ROjQq", width: 3468, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102358613477545148234\">Gary Chen</a>"] },
            { photoReference: "AWCwydjEDIIrnjZ2J6UrmmMVW6Q4lX6CMGvKyGIArZWoEJCRNJzfrIIJIl06_avCm60ZMYc0qSTUXKyIgNJYX0DhzLUqUQVt0U6ye3Y8GR4u55QLMdjgBRXVHHh-QoqCv51vNgcWDESTY0scAbPhj7_cwEOgHtylW_AF9cPE9QA_7KLQ3dcXAlkDMrUtM2BRuKtEa8tlZq72uO1Xh5Th99OC8dh_WAeLtGFvy7JI-bO6npzUr7cOPO3igxCnBGwBBJi_9yHhTp71wSskSolDTsVm4wK7NTe8gnV2jsRR9btN8uMyyE9ig3i9QoKMkhQLwpXNUvPpX-wW8Hhd40ngoOCXaw2DCRIbyPAaDl6JkZ_NnRIuXMXoD1rNkAZRsTh2bqxpUIJwPyuM-j_xVJvEfLslVgQx6g2olI91d1Ad0mVir-YI2ULNZfuYY1KMAj5-QPhJ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112633618971063136979\">0022</a>"] },
            { photoReference: "AWCwydgHCD-aFCsZf5ZGPweUb1GVP8atFUJpJEcobUorfmSwZPxelPumjO2GGjYPnSWigzWP7z_c9lGW79GxYQDvtwYxov3HutjFwwP0en93WD7xWr--6S8fNV0sK-CRB6LPw7rCBAG_iC7wzEKIfYfvlCSukD58vGQdIRejqrGsOlC4v5etVTjmSV9QMwB9J1aP60QxaM19GRC-tBU7f4LpMdY51ryu9TmLSAUdJWg4RKk8jlzY228_LIoux-DafBhvyuWNZ_gXMwzQ-QBX2FrrRxv8_RsZItha7-cQSwkFZRWwKB6BoR2FhdqPpN68A_fG18iCfLd-_ARZfuZ2NVkB6br8cap4DgQakEEVGYPB8iiXxICE3KGtwkS44tzlkxbU2R0PHtSVMoN8WDe8bAUxSHVMu6XeL3u8Vazt-H2tX4wa3XlUbsNCJd_T3BQuiA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115948485896993026025\">コロリン</a>"] },
            { photoReference: "AWCwydgCAyEtHI3qN4LROIeG-4hgN8f3aQpXZ4mDI33NIOcxm5eQzKVBnvmxcX6ukJ6tmUmWHLHijGHTZNX8Gr1xnsCe98OfFh8lMT0jz8mZWb_NUTA1GbXclhinJLXAFWTlmL2iCE9H9CFU76f74bhJJUg_bUDJSCgxvTGW3fdnSXlraK-wl9CeSLGcqRGFmQR3ZbTiaXU9SK7HZHWN7eWrJ13nW0JmEnUzDNrwL6Po5aYfmL8CxoshWXFFGuP-7frphAVqHxlX8z8Cp1JcqJXUONj0XbvfYzonmLTKZ8AYzuQ5A_f-1gjUwaTcEzyxF2b-p4lw-LbjlWm_k0FkiUEWw_N2LJnz1f8buZpl-R77dqWbrLEPx58Hwqs6UtqyxVOdqcyENolxErRyNGt9nzyCRAcbASgKeGbhPxoWzdhxDnH5yA3VBqzPFEhFbGsgRFtK", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117932598130328958751\">chappy m.o.</a>"] }
        ],
        summary: "신주쿠에서 즐기는 진한 풍미의 크림 우동 전문점",
        updatedAt: "2026-07-14",
        highlights: ["다양하고 풍성한 토핑이 특징인 크림 우동", "신주쿠 가부키초 중심가에 위치해 접근성 좋음"],
        tips: ["웨이팅이 발생할 수 있으니 피크 타임을 피해 방문하세요", "1,500~3,000엔 사이의 합리적인 가격대"],
        warnings: ["늦은 시간까지 영업하지만 방문 전 운영 시간 재확인 권장"],
        menu: {
            signature: "크림 우동",
            items: [{ name: "크림 우동", price: "¥1,500~3,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오전 8:00; 화요일: 오전 11:00 ~ 오전 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tsurutontan.co.jp/shop/shinjuku/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=466795079063985157", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B8%A0%EB%A3%A8%ED%86%A4%ED%83%84+%EC%8B%A0%EC%A3%BC%EC%BF%A0%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "토리키조쿠 시부야 센터가이점": {
        photos: ["/images/tokyo/info/restaurants/place-18.jpg"],
        placeId: "ChIJ1agNS6iMGGARCRNqyFvjQRM",
        placePhotos: [
            { photoReference: "AWCwydjChXKZ1Fx0XAf1XQ4YSR9bzIzRIoSZq_tPWAea99ZTOrfrBDeuL5bVDYj4O4A7S3Xil5iAtmtIrrFcRF68Hw880Av-1weKOFdN_imxpwNww3Eh7Z2ismbwNBDRPOEDyImdnSPu0Mg5qzHZB03WFiIBXmsl_FhqvSwLUmVFwg9z4L5TjCVAE8sijVREmdYjd2QXm6fwXO5_LymO5n-Y-t99-3_6fRlaS3bh_k582suuZ_ThVh-aFh4ZU3lNmMc42ShMYCUCj_VY01Qkz6kiXZLIYhg8pr9eNZSs08wehrZF6VEJ0s2e7_x5KaIY1aRnFfoqccHHr51Dc4Ie9OZI2hLWFh2-f2LbCZBsSUipDX5wjZErFVx2DzJsaGV8D6AGd6LH3zoNMl0K9mmDq-Tz6pCkbTj-nv71M9JY-jUrc4LAkzPxPD7aiurZn-FwA2mQ", width: 700, height: 467, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116766605291209703655\">鳥貴族 渋谷センター街店</a>"] },
            { photoReference: "AWCwydjL3ImQiAggBjsWo7KU9HEX-L285FKurmtX_f3dSk6Ox9lwiOYPrslJpqr9sXZ52q5-kNwJtZwlKG-XynnT_s94nqf0Ubb3GyUpPouaKd8kj4TVzvcepovjld_i55LEFxWvU0W35ZKX_lyKsddie7mrp-SQcAkKaSqJy1K4T4HXiWy6Y-VjD1WWNojM4PyVKYy__7Z0P7rcAfw9eYQOB14diq_-dy2JN3RJ2RSHDvvQFZcdYIxqk-XO6220vAdV0RjkiiV0NNb9LX-akNcUAV5BfdJkCdw42J_JTf0HZLSsdLEDT3GohSkhzCcDRyR31wa7vjVcsBzaUwr9XcALiXJJ7W4K02O80HBe5zrSH--evw9GY8i2O64ITNszZSOkwvIZ34W4e8l5qsZ_-2IKt5a6kj7BOPrxXZ234riNrAoQRxEBjz7t5Vgb5G0F5Qlh", width: 1788, height: 1005, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116766605291209703655\">鳥貴族 渋谷センター街店</a>"] },
            { photoReference: "AWCwydhVxYOH4WndFPyuHghLUOzQlYsG491I2MihYgNwEjLQwfb-5nCyd7yr8nFkEN6p20WQWKdV4L4SBwqHk86w5lArNaar1b82x40OAdvAkLHQGfsDjrnm5W7UBz5nhb4u0tloGAsZIc3JVKUmyzJYRf7KwE6M0wbkfvibnJTPrfrLDbQD9_v9sQ827m9NtFw9ajtI8LfueezCfXFTJ420K5t3NmUNDwwmEc3vJh-zRmB1fnpWADkJ6R2IGQdcNxBCrbsWHaN7pmQovAeGJPMQDT42HUz3Kyj5977bKgphmRY3t-WwGxucExF9fs3jUXH8iaHHaXsHYuwww-j0Gth_lyJ10aO0uIsA7zrr-zJXELOk_jbVF0Tf2AQwTBWgUwJTDLIApz9iWoD6yX5V59oM6EwbndxiUM0oLHyqPia3D6Ncp-ZGHiAnGfdErbFxGK5H", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104197408191280096687\">noid shii</a>"] },
            { photoReference: "AWCwydjM4u-XOthUe7yIGkbHb53vqyPv8WnG0DiXn7Kb4NLVcoCYO0p53G2HDHjJ0TmQOfd3cF0gc8GzeSErbGPVlL6I0QxIqtaHBCxzEqgpliqd7A_eErQBUw2qR4XjjxTpNrCoyfnM5L8TcGjFq_k4DN9Tc8M46Hizw2_gfaBNb54u0BzBz4-gsWOislMUWdqvmZ1WRph_j4x-iMzXTnKrZextUV9IhLvrYGYKTvo39OrQBBwMT5qv-0Q02YWqRYUCgYNle1PT4NjdYa1X079f_5-P9toeL7uGGArF5S95eeuYZfEg59a7RYZuSyX8afA3I_7T7l0Klxqz8WSbOEe0hbBwvUMW1DwDO3fRPxSe9q5kaz-kZZgXX-Ofk7MdS9Gi2lp7a1rXM7NcZtgJt_SDc9mS69wwIeE0W8JPwS7RruV63oBcaCAkAfYc_Fap_8jm", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106840492857936711634\">Angel Morales</a>"] },
            { photoReference: "AWCwydjgLfRm3Hfh3F8COUgSPpTQTcIMXQSCixsaHoaHjRWZGvfO9VdkF8N4e-zIt_PqTO1Ck6EXTXonx7ISOqH4hyiZ9sxqi9Ax2-oyoSpXa8ytFhl-4YhQzLB_thrvQRDLOwfEFOeWPATe3lsg0Q_J7YVjqlJiVvchQ5K84gJ4LkmCQR1UP0wMoFRie_ZfhLblqescz00ODZn6ICukGyyilfxeBAyKTgqbC30unHqglcOy8vr83BlXIVNPRAPHvjrlB2upv7I13ZMkTtmwbTmHdsrAkwPGK-aqGrZDp3FjLJWataK8ehu_9n5JfALZ7lF5QH-JTSaHs_f99ZNuKuFNRybAH_txnNbhLhtWHITafxyE6eFPJyqr1zlsGj51A_9u0F4HzAcIqheBsN9oQZuIPiDQUJevBpLPxWRBH6HJkYDPknOF", width: 3468, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108584931949022596846\">Lena Kong</a>"] }
        ],
        summary: "가성비 넘치는 균일가 야끼토리 전문점",
        updatedAt: "2026-07-14",
        highlights: ["모든 메뉴를 저렴한 균일가로 즐길 수 있음", "시부야 중심가에 위치해 접근성 우수"],
        tips: ["피크 시간대에는 웨이팅이 발생할 수 있음", "가벼운 술자리나 가성비 식사에 최적"],
        warnings: ["영업시간 및 메뉴 가격 변동 여부를 확인하세요"],
        menu: {
            signature: "균일가 꼬치",
            items: [{ name: "균일가 꼬치", price: "¥2,000~3,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오후 5:00~10:30; 화요일: 오후 5:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.akiyoshi.co.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9677494093757923822", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%A0%EB%A6%AC%ED%82%A4%EC%A1%B0%EC%BF%A0+%EC%8B%9C%EB%B6%80%EC%95%BC+%EC%84%BC%ED%84%B0%EA%B0%80%EC%9D%B4%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "카츠쿠라 신주쿠 타카시마야점": {
        photos: ["/images/tokyo/info/restaurants/place-19.jpg"],
        placeId: "ChIJxeqRsdqMGGARy6m80_WcWLw",
        placePhotos: [
            { photoReference: "AWCwydhDFLXrsiw1DTog2SQUdYMsicOo8QjQOMGQHDzwkO8zQEvkoOhZHjWggs8RCiOLF5E_VNCUjGYl7roMijHagRkNE7TeJ0nBMAsEbGgURHIQqKPE1-5bra5KN_c4i_xTHjz0TcBO5Z-wJ9_evpM_5XUzYUThRPjDIehAuKFQ-c7oLteaA7Dd8JANg7xjdFv6OFfe7WCWybqCmrnCM3yHhRMrC-L5obKQit01XTSqpcQdf1e9pnTEnXmbGjjRCZfGS06wKhTCzsD71smGbrzAhAWp9hNQmmsEGSMaYOXlt2yV-AyOjrA3FlrqHzECmPxOU2A8qee5jRolFpU08wqNXC9VRoqwyxeUHTY2O6QnlrFBdIZXRDsjfg26aKqdUqzjwbwo5JwPYjq9hvy01D8NVKB1b0Jg0ch7R9CjlZMKuKeUcg", width: 3600, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112169591137685557899\">Dev Cat</a>"] },
            { photoReference: "AWCwydj2vHdbClwzSBtJzLnyIM4zg-t4XkWJs-bIk-gFx54tZ-6ihJ3rCD43H4VH41s2b-jU14E9Ey7C9-UGT5EtgRfj2R3QvbS0N-g0GVWoxiedWYFQCbo_Ara2h62Ve9cr2wlKLpH3zGiX3RuTe_vp5-i-lT0k8Ex-nbSbh3lfnmv1TJmBEYQDfY2aZ9AAICX6jis12ewMdjWM1nr92f_VHrGB3nL5mgMsTM43QrJpGhk0U-HGE6xXOrVLTuc4cda6_kBEV0_NrTici7SQp9M-4ubVHje-Tk_DEc-QPjByPnIBD4kSA-v3rL6YJc_e3qcv-CaFMRC2_C5A1g3YQuOeUp-CDz72hOJUeSE2AJTqDM-yAz6JdDJn_25jApsemfcTbgQqyCSkg8zx9mOxYj1ZvmWo1k5PicMbjPkXOaHApf4FzIJ8aVotMdrU7MVipqbI", width: 720, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104326011871578146499\">名代とんかつ かつくら 新宿高島屋店</a>"] },
            { photoReference: "AWCwydjg3ct-ZI3H5X-BnOGvTycemdt0r1aehPxOfo-Wc05wRIHcBmXzL9QmB-cIxWsMwkDYqBTkY5vOqMOvAGEi3Z6mit-iwhPI57By6Oa5xzUw1q2o47fif_Z8YHuDYdPns2EFgpOs41J3pI22Bs8F8HTY4cGcEY7TqyG1Cvgvh47ucPj29ITMm3YnHNdZIt9JfxjIyQS-93V_5HTU7Wu1c6CRpa7WNZO9lxQf25fHQC9vLiIY6UqMWKI5K3-BrmL5fKZTdc-m1v7OVyrhnpjq9XJ6VU32NzRXl4gEjepYqtHG-_NrAZcnWlwxwMwBWD_ltjPiHUr7VGOCJMsa176VvjXBmIkiAUV4tZvRWNqDOGUEIfM9LlJwCgcpgDdxCX-bFfHRdn9iUfPzbaZ3d3gAfy85l0P8lNtf9Yi-Ck9SMmKjPzvM1SZrKZo6kj-WQA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112889117895433045104\">守井嘉朗</a>"] },
            { photoReference: "AWCwydj986ip7QUKKHMXziOeMLIzNKCMZzDxEtuAOiF9um6VgBEAQgonxnQ2yG19V9WIvOLOU-7FTzgprUu6jIwJMxEwCyF3-2-iM_26Pce78GlgNzB000llzXh_ZcIo8p2yrkZfJ0ZiTP-U5rzKVRJtteHbOljkHvBnMUJMc8PBYFjjqdD1wARmS6cjPsz2Zb4F-AMjEWu3XMZOBHvH4hCiZPY2yTBQiRAwCrOIh3RvY47r4XGzLmm9uHJbLBVApm8Va1uEKAvgvznmeCo1S_X5QOeZEuuDVBvVqfr7KltjHcl_ibAdEYIWLL98rTgYBktbglnA1_wKEzVpow3ZgU3bQLuqqV4rfl4T4XjYBwkwPxQsC4UotA1dUuBAxgUYFs_C4ux6kHxHcqJ_WK5Pz7sIM536kxD9RJu9VjvKpRVEs9zSPjpNKSO1R6I2FZS_ug", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115035125014227138215\">고요진</a>"] },
            { photoReference: "AWCwydhAkVxXyVb3djYuedEC-UAKV2jT5QYvHFz-TrLza-7fwh6lEAlD4mTAvpmjTxoU8IVD50RpVIyanb-ZmKaN65Ej08OzFo2J1ljC-AT-W4Q0sOmWnMj2U2D4s4JzNXqiDr5fnlROU61jHdH3kvAHzpb5ZoI6T6NQF9U3u6tZtmj_1ywRrTRa-EZvIZbp38_HBoiUjSRa57SywjTXu5PlIqblVLnQUfsfiYHoOBmm7U0yOLGAKyYj0P4SlGDAXTEX0a6DReL0KTKg1DBrcCczKk5hTHXlG05szhIzQN6HMgDZIHKpFYxwyw3kdA2XUikjiTHVRbVfj9ZfxajLLVI3qf4SYR04HRzApPithw8zCAhoK29TTzn-j9U7OJsmxE-nH1sl3Qo2lRPKbu6kNUGLxdIXoP3aR24tYrZUeXQaz_3Z-LLtZB_mT5voRaFZjqy_", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113504838925999761121\">¡Vamos!</a>"] }
        ],
        summary: "신주쿠 타카시마야 백화점에서 즐기는 프리미엄 돈카츠 전문점",
        updatedAt: "2026-07-14",
        highlights: ["육즙 가득한 프리미엄 돈카츠 정식", "타카시마야 백화점 14층의 편리한 접근성", "정갈하고 깔끔한 구성의 식사"],
        tips: ["백화점 쇼핑 후 방문하기 좋습니다.", "피크 타임을 피하면 더 여유로운 식사가 가능합니다."],
        warnings: ["인기 맛집이라 식사 시간에는 대기가 발생할 수 있습니다."],
        menu: {
            signature: "돈카츠 정식",
            items: [{ name: "돈카츠 정식", price: "¥1,800~3,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.katsukura.jp/shops/shinjuku-takashimaya/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13571770056714267083", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%B8%A0%EC%BF%A0%EB%9D%BC+%EC%8B%A0%EC%A3%BC%EC%BF%A0+%ED%83%80%EC%B9%B4%EC%8B%9C%EB%A7%88%EC%95%BC%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "몬자 쿠라 츠키시마": {
        photos: ["/images/tokyo/info/restaurants/place-20.jpg"],
        placeId: "ChIJsz7b6XqJGGAR829u2i7d1hQ",
        placePhotos: [
            { photoReference: "AWCwydhsGBdP6R-XTcDguPoQqHZTjBbUSdi4xH-_Chd5eUc490mULI4hz70QKqJcBNzhEddyCanL4zSkh8Y6F81qY1BXg-fNvabvS8YI-O_Y5VNym11xn-CjPmhB_EOd3s_szdRhMyPD8dFV1WAXVFgdO0LDGy-q6WkXVF1yViY2DUn7bMdNzD676gcmyQvcvJIv0DTmKpUokPt9Wp9w5bh8ghPjeWM0O5-GbNbGW0hFe_0JkTvbYDxNWO3YmOrwCe7BZmyOMitjMV_RN_206UXwF6HuMd0IilgNkZphVLvJATR6RVXyySGzZzQFvQjIIdkMPdSVcZwl7Hi3KW--Fhg5oXwOz7vxtO9ttdIiZRijuf-Uzfk_jkXg-bOU6xn6adZFNsV4iwS5GQQoAQ39h_DlVdMitVdXEmtzoUxAQ7XT-zf42LuhhQ3mn76zfL8nrI84", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115303618724042103628\">김지찬</a>"] },
            { photoReference: "AWCwydg95qpOXKBtpHtVzd9bkvbvLJeDUDdJPRGX5JE6vPIjgyVVUrgq89c-As-8EQ18mtaI73XSlduoY5Hit3Mzi2BgkTG6cMYHpRTApuvp1DDWffEWPJwBoeLpR1cj2sQ5xESQFs3Y-QgTtPWY4nDcSxndSqkwqEr_LptiI6qA63BL_ajDCynpOEjjJFQEtbheQkNh-Uqm9zSCz2FRNCGSj_y_e43N8DCPaw_4aCLS3ivCVGE3lae1zJ7dOGZLwbUDS0rmMa7vedU-6ZV_z7iycHb-Q2n2Oj4yE7K_zRw7AK5irxLZ1IB4yMCPXbg7lFWgH952vwItERV9ryh3WKThDkiUITaElj8TVd13TXhsI0cpcUGpbEavNvdM6p0ZhdG2l80vnoq2YXF9Q3rLqpm1kC7zTVlFXCoTCY_m82K5DuW0Seg6", width: 1155, height: 867, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112554028157586733597\">No.K</a>"] },
            { photoReference: "AWCwydh_OVON3K93-sFbIz7L1dNrcwJ-muNcZlhUhleTdEzxp1S0pOn4YmrlWgILlWQVqTgqXYJEC5t3Ohy-S6u01FxdqLij8bpYJyR-EZURvssN4exPbf1Tb0uaNYUXU5R3QOZ7cRdXxIYac23PnPmi5ubOma7tHy6HnAICYn_z0VROfhsdarPmiVShG6O-ShQ6zJTdb05OT6bxXDrjBKpea8WgX_oELemqNE0Dwr3BnlmQA8vydInVMN-RCW6_Rx_Jb3kzUxOgG2k45Rm_xCUOGp3z9wqTSuBNPWAO5HzmBuetlz1nymSaW4vtOvYWJ2c5E53yOcFFdGZ9J1IwXPrm4t1UdfI7TmdwfcZDE0eztHBmpIXEGzAodtYEKTCUSIF9NAcMzLn0UYoHSmiFdoj84ypSnBpmq8CguIM9pJnFLQhF5AQdEuj9EZzqXM6hhZb0", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111668384870100551973\">hiro</a>"] },
            { photoReference: "AWCwydhrTbJ-GIiMMAEZgUL7oymgn6KRZIxXf2VuSVcnqS6fmRZXUkH_-E2F2BMgv9fVX5-nzO8WK0_SM6FUsUtWoK4vucyZwDmYqCIDi51VqOc-YzBFVnH3Xduj3jb4OHmRtnpPTNVDGOPFzlASWy6NuhUPX8PsuNeuV-e3-OkLSdC-lJ5RY19wY210Qq-ZZEEK5lAnXpIiWjV87srWCTt_FMvtWuy0c3snZKzD-rUTVqJQAUOj0wUBZbl7mGmJkWgMxFhKQVz5VsiHvwbmyOsHadD8J-DjUgAuN7DZr4_7d4CQ2dI1I12U2cIFyG7e77OiUzwr0zp33T_djJUAbQUF1xA2v4dKz8MHsQKzB_dfwepBLIZQlcy_x3hXE2fEFrBR48mCZBFN9PWSVFutsf48uRTCngi-kTCVzbzqGYREyp2PPCCL8SZknMC82_O0Bk6a", width: 1415, height: 1180, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115303618724042103628\">김지찬</a>"] },
            { photoReference: "AWCwydgkiIGGpImcehhDAAShGemDcIJKPWqjUDPPI-XNHxRMvmER2ijJPfhiIt6OuK3uhpoUxW1kncray3BHvnaUOt_bF4jMLXOc8SJXi9k8Iyvti4C172qmkWndRcruvSbAaNGehWyoIyrFEdzDBzbCf3siG1qwtC28Y_RBJTgdBd-9R4b6ds34wE8f3jAxQ-h7pU4LoqiKIUJRsKlxygncgeE5S_4KGlg4CWNyW1b3cj_CKlPpHoMN_70GB4Fj38nuySk5PindVIHBYMADR1l7q-PcK5GTWeDu8vBiAzno8xobF1bJIcUqTt_vh3cO98WtdQvs5da0n2RMdJzKc3XHVco1wFCa2YRI_m_RjtislJrq-k7O_wyha4HnvlJhBDMB9CMC7-txZJMzUU2gqmikO5GbJ1sFg6FRjyKosXS-XPQ5KY-UKTPH7VuF_Ml1PA", width: 1814, height: 1814, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112957947713385095452\">BON</a>"] }
        ],
        summary: "3만 개 이상의 리뷰가 증명하는 시부야 명란치즈 몬자 맛집",
        updatedAt: "2026-07-14",
        highlights: ["입안 가득 풍미가 터지는 명란치즈 몬자 전문점", "압도적인 평점(4.9)으로 검증된 현지 인기 맛집"],
        tips: ["대표 메뉴인 명란치즈 몬자를 꼭 주문해 보세요", "예산은 인당 약 2,000~3,500엔 정도로 계획하세요"],
        warnings: ["방문객이 매우 많아 피크 시간대에는 웨이팅이 발생할 수 있습니다"],
        menu: {
            signature: "명란치즈 몬자",
            items: [{ name: "명란치즈 몬자", price: "¥2,000~3,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 10:45 ~ 오후 11:00; 화요일: 오전 10:45 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tabelog.com/tokyo/A1303/A130301/13243695/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1978719074806591162", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%AC%EC%9E%90+%EC%BF%A0%EB%9D%BC+%EC%B8%A0%ED%82%A4%EC%8B%9C%EB%A7%88+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "소메타로 아사쿠사": {
        photos: ["/images/tokyo/info/restaurants/place-21.jpg"],
        placeId: "ChIJR6VxAL-OGGARDytTRfiKddE",
        placePhotos: [
            { photoReference: "AWCwydhU6m1Jrl8Ie2tYOsBfVrvRsIgOrpvWV28dLz5HJ5sFYM6sm7F9DUEhZ1-v2EHoO3GbTy1q6AYOY8fsZlhuAG9D3Y3R1l3qw7Cb1huF57YuTS-KEai4l-mdRlYk0PGi2yXPpsZtWjywTzpyOa1iXWRWHFjtfJ5iFrTstb4F2fPQTf9yZjskudx1GuMeTxR1JRYQzUdYX1LnDPFJqIJ2pqTGM5J56vEAjT5lD3bXvPSnKvVdPh51lx7PLEwMzV68-uNz3WBNbit34TkgqH1_1hX8yRpINw7srHopC3kFUKdttpi3xZGry2qJuAYcYGdPz71gxHLuH_V58e9qCb50eadWSIJPbVwyL8zoalRt1vE6KtKcakyZ6rjc3LXRpkau3P-jgNzz68tfS389DbQiGpdLFbiPCjNFzj5rJo325gxC94Zz", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111286744449939884226\">Minh Dang</a>"] },
            { photoReference: "AWCwydi2NpqHxj1fykgNtE8rCqMgB0S6Ykdm7Beb3UTdnqFYZ1a8qtcdNWviM2iE40MPX6hBAMp7w2RAeoyvpnsWvwtuhl4iYFVVFHFQQyRNG-C7PdoEsZZPyFsuZq-9BRViXEGhyc6hXvXlqZtiv7am2M_sap3UHv328EPsIEdHiTNHtc-BSrlPbKhHoW-b0NPMWgrVT8oP8YY1Xk6b53uHJgLVPQeK5w6Pw00707klT7VI4a8BefYrj8RSc_IEcoePJolkE662uJlJtCKVWwg2F8_lpOqdB9DlVwHSCr7adzUuB_4YIYsDtFK7YIdGoBtEmUt2bETGH7-eUJnLRaJz33g9dTRFBv6FwD_HTnRSKG00LR3_NCvQqwUIBHoyX-IBa5y11WDgO9t8nRaPDPQjIpoRmtHTof1qhFJiBmgUii32j2Th", width: 4032, height: 2016, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109476482520511792955\">smallk sato</a>"] },
            { photoReference: "AWCwydjPpyWCMVYfDxiyEYucY4q6tnQHbU_L68UdYClwvfLWAB4M__KVLOZiTBvLz-FqEAYN9FoUCI9imBk1V7pN4eXIofi5X6wDvFY0eDTQGQGyZOFGCJ68M1zYIBsE8s9ERKFFrMIjp3pkire5Tq2VkT2ceDpGlVcFhzWK1xwfnYnKzCR-3CWhtCRVHCOmrY_7en4dfa2tnTajZ-fSrhm-cRux_CPZiwm1xu7O5jttHt-BBgUxyy2W1NEaXR59zYKA05snPwa3g6MTiHAuyzoMYUqXRqLNaQWV3P8Nm-UlM08T1Respl5bQ240K18Fxi3ow9NpuvalO4qUCB-4l54CmzF0laEWr_yo3ZGUQqhBSyyfalmq9LJOERfvhxEo1pnsdqIMcIEAwkkMfRlbeLz1WHld6XNC2kxEOCjxTRuzHdNxFAUevV00ngZFosT85b0C", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116812731261781451037\">gautama226 (yk)</a>"] },
            { photoReference: "AWCwydgUBNPg3qlJAkqpZnyVshe8alwV4FghTZXKek6T9l2iUaXELDyR8-SlDfIB7Qms-czrKHvtoiuMMaXaWN-9WLCWh48IK9iEPzc3DZBF1TY-izQEXVqIXYqUqL_O9Q2_I4RA0AovyhaSeNf9pSDssYGD6qHKX-naTh0JGP41JEeuJzfjibK2OAEdtUzUmset8cQ15b6B9stzpBBFvgDyELtMo6LtIu89X82izO4NuZDwluCzOafe_K3soVa_zD2mCg35lImJa-j_aFn3FpydE5OF1f1EokkZHZ6rsAZovLvp01RqI9egfhmPW5i7wir19rIOqqEUBpz4Ninbf0ZHrimNCd4gqXoEQAxfXlMf8b5Gw9KaitUHUhKEchrd201YkufdR1CAjgrN2pwc4ykaO78sOjuq13LDr4N4PWnc7KHZsQPFUK5NtEQRt3bx7yb8", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100831467634375492174\">Louise Davidson</a>"] },
            { photoReference: "AWCwydh-kWGZUuJZGNRCec9zTyo5KLEdmaJiiL1Ko0piye4E1u4O1TdqkPHk6DRZvExgY-lOxV6nINxgfrOphIiaYbQlH90xowAIDbajO5prRzUEUYAXJpfRxCizaa65Y9TGzXNr-1fnTpz4n3Qp2rM3xz3KkoN6B86dVaKZfCylFSfHefMuG7bGTQ3eDrrc3eWcegHNxiA2133E59lZa37pjfQzNay7TTJDt0gePFW2HX1MMPCf2ZUj6uq_WiC9yGyzsABsrOjS1_aGX4ZZPUvK8snvtisRnJtp-JfBK3d98MzjNRmbhvaS7nRqCAjIVtyKVRrCjS6-PLaWu81wKHrh8vIHVrA669ixykBUXEIqnc4nAiGHp-76Hi0PqtHF8JBABmUEqvIDm_FUmVmE0GdnCdZUtdGKSltHX5deBhc7DIhmariRHvcuuN86_vD8zpPy", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101899247024151803306\">El Ig</a>"] }
        ],
        summary: "아사쿠사에서 즐기는 정통 오코노미야키 맛집",
        updatedAt: "2026-07-14",
        highlights: ["현지 분위기가 물씬 풍기는 오코노미야키 전문점", "1,500~3,000엔대의 합리적인 가격"],
        tips: ["화요일은 정기 휴무이므로 방문 전 확인 필수", "인기 맛집이라 웨이팅이 발생할 수 있음"],
        warnings: ["점심과 저녁 사이 브레이크 타임 주의"],
        menu: {
            signature: "오코노미야키",
            items: [{ name: "오코노미야키", price: "¥1,500~3,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오후 12:00~2:30, 오후 5:30~8:30; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15093122525121686287", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%8C%EB%A9%94%ED%83%80%EB%A1%9C+%EC%95%84%EC%82%AC%EC%BF%A0%EC%82%AC+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "카라시비 미소라멘 키칸보 칸다 본점": {
        photos: ["/images/tokyo/info/restaurants/place-22.jpg"],
        placeId: "ChIJ0ZJ-DwKMGGARDfmgrVH1HLY",
        placePhotos: [
            { photoReference: "AWCwydicX4GOdjTqLi3FYxNkS82IZh_zCAGA1ppUfOjZ0Wy5Xw5PQ8K-1LWhf9Rc3heUrkAwFsa7fpRHHItNB9cfDFTmXLS0QPzpQgIpXvbgnmbC0QVvoLB-ChLi3ZGEaPu3WUE-nglQYVSeJHm51othU8lGpE7Dh_Jc76Gz36wJOM8tmPxJxfJkhSZOG5TONibOKXkEKLShVmifVcWtgT0jiaSLTGiTTbD2mWZqsfkNonggQVxHatRxV-vjNlCtnkhvg9rVwdZT3aWF8iZJHkyKGKKwOu1vhbyd4wiz7oxYovQ4CXu4fgBI0iAtig4zcehFJGBqovQqnlWIUisukS-KPWBXesZQTxnfcGRr29XB0JJtKuS6hBRxFC-9OET_mC8PjPjxVFQTla-7iTlb4G4n2et3SSPUHZnRefagxCo1emU", width: 2520, height: 1680, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113497649078418008459\">カラシビ味噌らー麺 鬼金棒 神田本店</a>"] },
            { photoReference: "AWCwydh7bK5fBag1oUA9nElwOQIs2kb2ij1uigzZTGGQN8ZpHpF5oBbysnOmeI6I4bA1LYHPSvlcHnqly2NZP9GcRxTN72lJeQ9y3xuQsUJdZJ5KmL6lLXpdz9d0LLuBLroLpg8i8S76nue2fhMHM_FMiHuorpedn7BqR1itLQMWASaj-CGQd8xsj-QeTLQcMkvHpjWrbH2mH-s9GbQFrdKoobEcrkQwhvtDy52I3WG8oGvpVMT1y63UvV7p3lXgihtuhq1B19wr_IvF7GpSRCHyIbapZycgehY1oH9XEd-N3qhZmYsZvHKSXVCrLtamFgV5qnTc6TCK2HO8rO866gxy6jt1n_-ZUzCdh7gY1A4YFMlBizRoNFwJgbo0_h-x6SJPelPRuY4P8iDITnV7jUNhB59-9qHI_w3AE5_DxYCAQrIPSKkT12RAr-l1yyfiiw", width: 2398, height: 1798, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110499458087747048324\">S H</a>"] },
            { photoReference: "AWCwydgFU2k260Zcy6Qf6TQLxC1KWLPZCDDnVjAJDmznrovAv_I2iHpAUvf6Ugk-4r4S_Pa7NCv0clLO2AN8bX0whgG5a0oB20HFDyUoe2oMQdzLUUGH1PVWA0mIhJYhsv_DYT_n-6nABRZ9PNC64zi3_6-R-2NoJqEWN-G3Hd6kSsvhJLEVmZGJvtJ5exixxRTts_29_uWuFv_8FsmWUR74MuRd7Po6amIxzbhBZlpfgL4_xkL9lG8FIvuL9gJMPaIyoKBOh5Vl4kw4HppWn9FtjnO6Aj4dDXtEmAbFSqyUXMIspasNI_50M_qaG7_8J-SgqngFKDtcOAnqYs_c8Rl62M9zxgyhugjt_JQ8KriEOhPjAU7kSau1fNsi4pba9CsfZk6WpDD-cN7nMjWlAs9fE5cv8itLYRKWLoVtIIg1grpHINEEQeM6I_0FKGUCvTUj", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115261676262804719075\">Yasu T</a>"] },
            { photoReference: "AWCwydgB9hNnEN5xmopkBbOCfvURnKO6CX5EFf77kL5riaCaCMhaf3_x4_0Gosgna8vvIi21uybxdWSvKerO_KLzLvtzdNu10xIbWzD9xCokD8cE-hqN00P0FuQU9nX8A58ockVv6vWAN7LvaWp5JvzLbii4yAlCC8D_JtfAoSyeK54ks2BxQ54GKRAAPM08fbO4u-X8tw2sVAcXsrD2qnNiIp7DdnGpBa1WYDymuo3cDMq7nfHbu57mclPpmJe-Oea-UhW5YgNKZ6TX8linFhtoO6wo1nfc-6xP2-jL24dM26K_uniwF-Mdont7zZp-0uS-4d_DA6Hwm9V7zNEhhX3UhS1Ae0onPMH23QhIuK7bC3VwmPeBzM85HRS0zJaDV-J4XAlfb-eOgOc173WksexEo42yBHRGo_SevGc8pI6rkFxWrRNHpAdCJ-QHqbdGizVh", width: 4800, height: 3831, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105218256184320923358\">Dori</a>"] },
            { photoReference: "AWCwydi22vt3U8qnPhhBvRqHo4FrpKEZ4d9mI2h7wkIbC1zfO65fdmVjGMkqYGpHHUSJwcg6R6Ov9fVybzzEEFzUcXhgoWuckRaF-R_bhjUwULdiS01GZ7CTB6cNPqHan81XedyRKz-4WIkMRTc6a7xxFnbI56igwz4yRByp8pq7_NMvrNHuaMorygDoaKHwE4xZLiNBuE9m39BrDA3iJMtmmZMtxRpq_uj9wvN4S886dz1P95CPnSuoqoyrHKQJ5uYtBb4seAO-TpPur7tNW9a0F23yM5hspsuVcNNf73WG6RmHHRrr7WXk_d_77kw86UoPurp274S1pvi2mCkz7EaYK48xS3L12dWTWtgS42dVsVmZR_8PYVZhRWFhfT7OzJHF6mfdvv64ooAYM09W35xu2W42yDUKloGzsiX8ymgefb_0O_4c4XcHHwnOHJDgAw", width: 3599, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110999087952048410930\">kkk</a>"] }
        ],
        summary: "강렬한 매운맛이 특징인 칸다의 유명 미소라멘 맛집",
        updatedAt: "2026-07-14",
        highlights: ["중독성 있는 매콤한 미소라멘", "6,400개 이상의 리뷰가 증명하는 검증된 맛"],
        tips: ["1,000~1,500엔대의 합리적인 가격대", "피크 타임 웨이팅 주의"],
        warnings: ["매운맛 강도가 높을 수 있으니 주의"],
        menu: {
            signature: "매운 미소라멘",
            items: [{ name: "매운 미소라멘", price: "¥1,000~1,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://kikanbo.co.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13122633145404946701", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%9D%BC%EC%8B%9C%EB%B9%84+%EB%AF%B8%EC%86%8C%EB%9D%BC%EB%A9%98+%ED%82%A4%EC%B9%B8%EB%B3%B4+%EC%B9%B8%EB%8B%A4+%EB%B3%B8%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "긴자 우카이테이": {
        photos: ["/images/tokyo/info/restaurants/place-23.jpg"],
        placeId: "ChIJf38F8OCLGGAR3vsQeUZEBYY",
        placePhotos: [
            { photoReference: "AWCwydhOzb9tMEvQu7ct8eBo2PyTX73YX2OYjwEGuRFxFRZ55jLHJv5EBC_LzodaOONGM2vNbH4BwglSk6T5PS4-iAsvrTWGTGLW3nuxSeUQa8CQZ6uyGHDUquhQH8YNLIGDcCIcJU0KQIvubU8UpEVNB5LlJfpqki4ah-IZbKJABkeshrEwrTWt-HeHpB_FhU4WJYYKUB2QlTyNV1LEsmRxbhXtXhIbfb25aQ62T-LG3hYkJTO0gizxd2JhqLM40GD3a6GhE_O3UFxSdt7sZB6GkqpW6ibbIm8kHHrnFYSTixhifpn3lQJiyfpu-dlvJvPIKJi0RVqZ2Kaz_7jYvCQFVyRGExgCnrASF8sdT_X65-VO21Et2znvcipUYul3jgdCuner58BJagQJAPeNZe3gIc9x6oHozd1CgNrymlH73g7tRH20fU1cl-Tksizh1PLk", width: 1315, height: 877, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106622420206872162959\">銀座 うかい亭</a>"] },
            { photoReference: "AWCwydigyTmAO_8HNk-szQZ1sPArSgJi5WJnXO_1VY_1wvKZdp7yCw6q1WD0SJpQay_KnylkzRcL0rMnACN-_KzhmAreUjwqzxqHCutv_kA6aHbk3nUgGEtiB6y4IeLS_uWUf3Hrf1UFEX8_N-f6TYbbyn-DpBnRipyQS6lL-7tm1ruuvBlMHnQId4dXPrqSAe2-to4NcL9Q80b6dWDYteT9ZTkdCztGayKcMv8eoL7zY36bEI4yp1LOzs2YsN2qDKrNniuXnr0RTpS_T4cZeWlCB6d7145QSnfeF8TG_Wgrw6mgtULkum1zgiyqCZxqu7NOXaYyHJQGOtvyAeAC0dIBSP2lzRklNXYdtewxoMj44b6ojy1_claqiTg4DRU0ShaAOFsk9lhYclJnCmg9Rg6ltpBgFu3tp3PYvctTO7bmSrAwsMTg3vJD66ccCgKaV--N", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106884532467012403609\">林廷華</a>"] },
            { photoReference: "AWCwydi3LmRJIjFPKezfcFU0ryRdNicTQ4OVjvfQIcF6K_5yQW9FQHE_IsEhGBKmONGBTb57HYKz7-9SLete4yO9c5jIFuZj7ysrT-BDDefGY9fxwJ14-ZUIop2sPHDQFPNkYeY4WF3tSZazYODy0hElNvQKpky4mfSsK4T9SJRqbddkphIZGYgj1egOJPCQFIbsH_Io4wiRT1Hcu-H6OnaBDXHFXOUo0DY4pBSKrFoexVeL4fISmCjhgr7tbM5TTmEm483tvzmKp-N6FynT_2OObLycQY-pNCl3D9lrFOh3ssmHnjaSpOgawUW9lvVQmjI1YSHUrOynUBpq5X3_0kdHzQCUWrb1qtk5MmMUiG0Gm1UlHB_ArlPVEJKfPvDxrsp8xEEtevUa7phSeBvSZI0NM8n07Xt98fOVDvCArhfQCqox0abF71fe8_dGsvP7oA", width: 555, height: 531, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106622420206872162959\">銀座 うかい亭</a>"] },
            { photoReference: "AWCwydic-1G1psJXh-6gxfF94SWAN9TkorcBPMosY1c9MhU3RO3ex2nIdmibFYgq011YrpL134_1hP5iVFLFXrKdbdPxH1z9UaUWUjHapSo3_cBptq-9zwjAXVBqGIwKMnwCgD-pR2uNG9qlXaKJ_oYo_t2ppWIGJPnjmvo7N6uznakTn0jd4PNSWxxVY0_ANMbvv9zN3nCpNRaNFHx22u9SrNWG7Ez2rnRsg3D5FDETeaQYCto-4k6zqQUQSizkHT6ybk2toqNxQeuHWRGIEJGlLEyoXP2-okn1jPSzPZHCtHzRQ3O1WTdM-hUbaMb6tTD1Hk4tjEots_pJeT4gz__FUhflQRSBdSU-GJEAWLkqoCmXkaGtd4oFP6YMdUQmiWdblAN8dfcYfybv7zsxCaY3dnKM6N6ewXK-HTyJmPw4HlYQ76x33elh6FquVwkl93C6", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108628049931580992805\">押井礼太</a>"] },
            { photoReference: "AWCwydhR8K2X0gwAlNfguqCH9SR5JbCw1OqMGPRjpnGt5XtVHfKo7BeD6z84t62pEpFSdRHN-8i2QRRTFv1Pf5hzTwaIms0XKiV5NATPoxuz7yfzS59kJXPsWidzmGbOhZk_zmYOX-SdjJXVSkX1saSOKS4CYKg3wTYaCqh2Ke-meOGUSo9A66WVXl9MWPDk5lrDjh3t6JJK2GL3uJ0Dz8oCDs30N-isg2sPvFmRAfkSqGkdgZSGqqbA04JhDSpXDfONQ213OsfQq0iuvR0EFd8nMd31U33o6tZy7HbLguhzrCAZV0h82w_SVgOErXxtliuulCWZpOAaj_Op2olHumrkL8F2afQwjsYbuXBEZ8v2iYZMCVXe6zX7ZZB0XYQvQNIW8n1KAkJfy71rraWbKKwMoxmytre8IZ-kil84wL1myaFackNM-riz0T8AdYzGFAX2", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108628049931580992805\">押井礼太</a>"] }
        ],
        summary: "긴자에서 즐기는 프리미엄 와규 철판 요리 코스",
        updatedAt: "2026-07-14",
        highlights: ["최상급 와규를 맛볼 수 있는 철판 코스", "긴자의 고급스럽고 품격 있는 분위기"],
        tips: ["인기가 매우 높으므로 사전 예약 권장", "1인당 약 2~4만 엔의 예산 고려 필요"],
        warnings: ["가격대가 높은 프리미엄 레스토랑"],
        menu: {
            signature: "와규 철판 코스",
            items: [{ name: "와규 철판 코스", price: "¥20,000~40,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오후 12:00~9:30; 화요일: 오후 12:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.ukai.co.jp/ginza/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9657200045435452382", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90+%EC%9A%B0%EC%B9%B4%EC%9D%B4%ED%85%8C%EC%9D%B4+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "나리사와": {
        photos: ["/images/tokyo/info/restaurants/place-24.jpg"],
        placeId: "ChIJrbAVNIOMGGARXNvkApcqvng",
        placePhotos: [
            { photoReference: "AWCwydgKYp4CgjNFbRLQ4Yan3RoqHQNKpMD2MZ5JfIyOJ9RIq3Qd4z3mGmWdnSqvdlLdLUd2Bmv72TzFmXI4BXQj1r_9_oOB8PFCJ4oxTtGWqT_UermCxDcjsos5pyWtZYPhN3rW_FWbwAnxSU6gjdDomvI2kqzGK1e5LZvt6y5VHCgDtFi2NT9qmB5i6rEq_yLO-04WjEvSFaJJfhD34eACpS86w7aRJ4HcM-c0YYQWxJhG8345Uib4fvS2-T9Yn2Jv1aLdZkr1KEjsrbr6zcFc0pLhbKMqfdV5ILEF3rWiTjXmPGYPAM27uSA1pqB2fGXxf2Zx9LHDipLNtI5YXo1XZMXL1kRXBanBmbug_C1XV-7j8-9Y-kWz5O5nKtx_FjDPcixZpxY33YMeZNACgLMKIP9YjiFzS7q_4U7b41ou6jak7dkKBW0MW6-to5tmbvov", width: 2210, height: 1470, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101632612067965073805\">NARISAWA</a>"] },
            { photoReference: "AWCwydglqOYlkHi_q3DvmNkrss5ygvLWCp83O5bAUnD5XuclC6vvXNXiXhnNC5LpdCdhmf-tfP0SWm4NVIfBmnZDNlLCj3DLoufWMpquXgCZEQ4Xn_2qwcURMRDkjC6xWeoYYMkIW8wtE0LmDe4vaFkPP3yxTyDTG5muTScZ1IglvDbkp3iWuY_CsgsiLVSrmlpc-WAlBxt_TBsw5grTv9PZsfz94BjS1xQ0gkoCvaZMVghMvOOVtAsXY2LYc0vh3tYOQJSIj7l3NYAZ6AQI-BceOShiBGgoeAWYQT6uTF1vDrNZ-2m1wlBZkSqC1FyTB415C9MXLMzX4FgxFMFRqnRWZM2EQbLbJlEPAiBWSzZ5JL2H7Y-vOFq8dHAhwxlQi7CDIrq38sjF4lIahScfhHz0QV1a86BLcjnb1WuSktFL7jlObNP4", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101632612067965073805\">NARISAWA</a>"] },
            { photoReference: "AWCwydiXvPBCYOyOMZevSywXJsG_zamd0LOEyU-gf355mb9exm9zYX1BOrF5ODwrO5UBIpXwjcQmkDwOHfTNZuvqDDW5a8LbgGOajn9L9S-8D7mlSdt7PoQ7Cj424R_FHfSNx2qNZ0g_N3ft2OXrIbf7f0yY7zi5hGaIAav2vYVg28aErrIKY5WVQxC_4UAVsS0_RA57wr_DeyI2n3wSG_4bYqdFX-BoFTuDC5UoF5CmUCEaK7j8mOy7OVP32cJ5WltbhoBjxIuAT6gubpKdj-jUT7FTFRwjzuX5MK3lHUdcriDfBvzigescECex6H_EBV70no1cJFugSbsuAvlmIN6WPbtnDII0hVvK_D7h8S7daItSAvvAloq-jIIufdXg1nNehIBY80cN874RSAeqfTTe_-3cjOQ7gmUsyKNH_kXDYLVod-TdMQp6WQv9AM0X6NWZ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104226689578265432035\">노인엘프</a>"] },
            { photoReference: "AWCwydgRMH7kngqK9OK5vY3idsp_GZXSAkwh7m5m7MJiw0l_6gMo2PSgg_tMb1AjtqYKrO0_fWRvIyU8eJ30hfLitnaKFgbaMzCWJ2-CYhHVERjVFpXojtHnAaSikd0l3oC2yFhs1U7elrtRcMjEsN1Wbd-g_uU59n6WSey5f-h2z9epTBLQ7r7Z6yOsuT5IwSmMabF8ZrEgmCoHxE1-7TDq0GQnVlF6yRW40qXxZf56HiY6TMDXSc3kyLIQ14cE-8wCi1ZkNFvvRn4zyZLcfbY70AK9A3qH0DByCY8cQDYkZJAEG22o3bM6VDq8-vZmpBrH1Y7T9sw-1wbUFTFlwQkgoJxo828Sv_ux0bnF0YnxhbiuquGE2RJnNDDmhcn90LojQ6ambwBfMSZBHJp0tnHRZa9nY2BKocOo3YAT9vKXq-bdzg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111442324861277330854\">Logan S. Y</a>"] },
            { photoReference: "AWCwydiVYQ9B_qNa66jDmdm7b8XRs5gZ7aD8y3rgsJQ2k4wTRVTRfzHzn4Si0bxNvhIRrNJZVpePv6Tiak0srauIh8z8v1Ku12KfFj0Ib8QqeTJYIReKOTNEnlcEqKZvg1pqduUSkV2GWRwtfNqulq44epzmtLEZkPnSdtwPQnmjVGcozffP6SL_VxD9bTP4bRY4OYJ_bNolKsKswIYJfwtSmwzm4pvhz1RvDl7N9Jow1fxnShBFktM5MEpQW2nE2e6mbfjdjGawnuSI__joWRs5ZVUAKf8eCMFejU4D_hKNDp-uqbU20NJBAx0DAfKwv8vxyfUZn3YuvlyhgrapQBeyWGOENKug6WncMbfXlMUBTmEQXi-SQ4clPLxCSH2t1MKLt3-We-YM3pJJ0B3b7UMPzW5fut60D934H8Ewx44KOaxRxJzxzCh5dY3DUszKaP0N", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104603967173346100960\">Kobachi</a>"] }
        ],
        summary: "자연의 풍미를 담은 사토야마 코스 요리를 선보이는 도쿄의 프리미엄 레스토랑입니다.",
        updatedAt: "2026-07-14",
        highlights: ["사토야마 컨셉의 독창적인 코스 요리", "도쿄 미나토구의 고급스러운 분위기", "높은 평점(4.6)으로 검증된 맛"],
        tips: ["가격대가 높으므로 예산 계획 필수", "월요일 휴무를 반드시 확인하세요"],
        warnings: ["사전 예약 없이는 방문이 어려울 수 있습니다"],
        menu: {
            signature: "사토야마 코스",
            items: [{ name: "사토야마 코스", price: "¥35,000~60,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 휴무일; 화요일: 오후 12:00~2:30, 오후 5:30~8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.narisawa-yoshihiro.com/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8700438358203358044", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EB%A6%AC%EC%82%AC%EC%99%80+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "긴자 코쥬": {
        photos: ["/images/tokyo/info/restaurants/place-25.jpg"],
        placeId: "ChIJVWDJ2-iLGGARrb9VTXObGIE",
        placePhotos: [
            { photoReference: "AWCwydjYUrZDWadYoLGUnTJM4K4AoUjzZDMKaZnLJE4T3fdWTsl9fIyBjSUFKeF7TB0hUbcAzzYhKsULPj6dJhuH2NiUoBalYYKsD1ylu1PqT_vqyZt2xAPsDDRjxBUTpuI1p7oQCZ4sPrnEHErHLua24nu0xEhQ86U6Wkl_LWmgSyReicMer35smef9RF_dekZzVfrU8jHLOezHr3Jdt9SDJJalYdPJIUmTII2MXAE_mnWzG36Xzxrifxi7X1zD0gvtncS6dZdGjsMoQmxQIVDgXT8jd00CG8GQO28cEN8my-e502lRfMlHc2mteW3eywkNWfLddroqVYXM0DjUzwULEB35rva94E8ad1Uke4F1ngEz97jfcdu-068CY7YW6xL5-shp21xcGRlEtYbUBw6dNj1geOrvL5Uqcfgvw7qiCwHve0_F", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118252634782609753961\">奈塚Q弥</a>"] },
            { photoReference: "AWCwydhPnAiy00X3NflPGcIMCHu-_tBSGxOoy8G4PLbbjgcFWiBqVurEBaHSFRv-j6TTTMBzPm_ruU4Gmy6v-JxRF8f1oUy4lImwtLhUIpZcjh81NQzTsdF_zleqaTIOdW6fVX7S1aLh0U_8F0hhQRj9vz_6ioM3JspOmqqsu12LwI0hm6ORvcTUE_EabPVT6pEacoBPhqrI6-jh6jAbVqXVCxHo__YSNk4gxhOadZ59XHrvcDPHdb-8Jdyd0Qk4G6Vj_SPKMZiNEpMMg2C3DFC_y9SQI0Ls1qlOczAO1ZG50kgXEVmFkFz71XH--t6ESFFFw-2w2ot2ovaSQYYWDmyw9R2quansSvrUuinqcBxsmtdTOS3vq1mWsUHkQmENFXxYqv_3EjLPzVgw-ea9eXSmj_kzpYWXdNoQX1AEH8icbPNY0dfAA1vdWi1u4pH2gA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104324965157283410545\">チャンさん</a>"] },
            { photoReference: "AWCwydh7l5X7C-SGphBtH7NJYUBt6A-GAbMSZnAO0JRU9_813qdRJkfHJGUkMMKdsQ0xzOcsZ_Xkh7ROJ1IwRhSWJAZD30Gctjg2fyexCu2V1y0i-o6QDmwB2mXsYYkl8WNAWL5ML72Wxgky4zUgR3YZWkVpPg7jfD7vc3y2AkHVFW8sccQ09qmSVCq_WaZNkuj9fRkwmA9emBUsfcKZlOUJEE_pAiCbT0OZ0xUQvlqSRKsLVIjcy1JQCsCp56qLJAQwq0iqSmotH45OHyL_td3DpuA2RarFuBH5nz7-EdHpTHIOu23MjrSZET6HXcKBNoEkUnOKr2IEqXRPDuVwgYg8xv6mqzhHK30IASkdxuRlNxWli7EGfQJ9fn6lkEIx2pVbPGVs8HZsj0DOApUZOjnFOO6QODUKG5WsrXYgfAzvCDxGpRDJ8PpN0VniCU4aDg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104324965157283410545\">チャンさん</a>"] },
            { photoReference: "AWCwydgOmJVTKlueefQrvncLbpkGa1DraNPGXKUGLjU-j5YEgcizZL8Tnkhx0B7dk24lBCnRVHQEuFX28Y8dAmJxfi2fa-1L9OU0XxtCxvEkInOC8e-zE1m0wy7eRfx5Aoi287tYYWXrqyq-1KHyTMerwg4GGv_7ET-DA8Xyjgrf7icEIXoURpTITX2A6QIuJARodwFwss_yw_6Uc8bIkMnYIYj4fRs3GWThwB_TpzPCUIy_QDKcqjQzFojf9jOPzZ__uaKhrFXar8aA2mK4vktOBcraDWcoTyWsnBz9Nb0y9ik6iizITB03xCBsmEEhli94Vj-PV2T8oFM7CTR8vFjweQ6ryviPfI3LKzP6PqDbzXJlDQ2Qy67CLDrKZklOrt0k4EXYeqI3YuepesmuD7_j33eNksVKq7t4f74m9jDq7pmneiH3evnG6UQ_7EiAiw", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101187566318500465357\">zachary liu</a>"] },
            { photoReference: "AWCwydg1XkmiR28BZ0gs2Pczy8OhCGyyYZtXnx46hAXSkmj3rbSO0XcZkS6337j4NRdWJtj-9keFEMSA7HW-Hybw7T5M6pB5JWLmUQv5nAh2Zwem1bhjpXSHjMo_qX6Yjs75xeuhtFavlVbIz1hRtXDfJpglFhELAMTlkh0xqYCPLhqZ05aBqIXyYV2W1c2hMBVo11meJVIjBB1CMrC8tUiMgIIy0lfaTlMMMtA-T6d8ydLYaw0EopAV3u1uFA-l-KBFaGBJvLEkwPDh10Q78nNrNdPwnmXdtwTCGJQYuL4JwtuiyAcnRu4i12G4oamu0VL5M_otoUaDfVqnZTc00wLcuPvM3j7U1drNg4HZWGRcjr29giX8nzj3LvWzqVxVEMufSBv9a7oYVcZmcjEYvF-kN8XE_bMsu71cwL_4Jff1ECa9gcoadPI_fTceM3K6ORFX", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101528104972158044154\">hr5578</a>"] }
        ],
        summary: "긴자에서 즐기는 품격 있는 계절 카이세키 요리",
        updatedAt: "2026-07-14",
        highlights: ["제철 식재료를 사용한 정갈한 코스", "긴자의 고급스러운 분위기", "예술적인 플레이팅"],
        tips: ["사전 예약 필수", "점심 영업 시간이 짧으니 방문 전 확인 필요"],
        warnings: ["높은 가격대(3만 엔~5만 엔) 유의"],
        menu: {
            signature: "계절 카이세키",
            items: [{ name: "계절 카이세키", price: "¥30,000~50,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오후 12:00~1:00, 오후 6:00~9:30; 화요일: 오후 12:00~1:00, 오후 6:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.kojyu.jp/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9302355949854769069", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90+%EC%BD%94%EC%A5%AC+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "bills 오모테산도": {
        photos: ["/images/tokyo/info/restaurants/bills.jpg"],
        placeId: "ChIJoQC4faSMGGAR1wiDmBUhsAs",
        placePhotos: [
            { photoReference: "AWCwydgBc0Gd9XW_7KyWPo7d2YMN-2djNXcIRhvQQ5TYCcz6C3ptiBIfNaMijmKeaagSxcY7MuWzqUzG-pFf_AHaGFB6itqAiy_nKeDT-2OtsrKh9M9bUStzyIzjDE9_kieaajQ7zrRlPwIsclAHI2yCWRMwhiGlw4ZeMK8wBhpAfyDHX0mp68g69_wr6fxH4-k_66XyR8cbQWDAr4NBoAbn31oiOMhCD1Om9MWZXIRo8c6sKaZTIr_7ZiBfpIzBxFMLdR6AzVtYUdKoKaf-UAJAusEZYyneeFM8jn6j2dUhm1ikA-Pqgxz3nCytG2iZcxA2Xc2GqBLzro8xxk2USr4L8QmuWN9FSFcO-18iqgpOn2lPbW6q05OYkPje3XubCGiw9It4Q3GPB8X3E2DsPGSKh59SWajbIjWPymZth-YCyYIkjPEy", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107159299459123516337\">bills 表参道</a>"] },
            { photoReference: "AWCwydi4Pme5cgGaOjSns1wsuBc_yawTaUu5pdpADssfYQ7k6iGufpUH1L4wp81zMz_xZhEXyohH6EsBX57nnXKegDsXXF70HVrjtPNNkJ1-BXzAvu8fMRtKMFWckUaJmS-nmZ6mPE-9NmirRWeP0KwQJ_65y5GqjZgedRR37jwaKkWUzeByUvd07xNQu5Vp496ONYMS1Pgz9nnO0akeL9HrHWgaz467dJ-s9XHJdgJqInJH8mH3VCvgBpw13rebCo05YptcliTMpnEAnGVVmcVCZXM9VxsLjg3aGRZYp-hnYZagskhVygDjQZ790btTUQ9ag2D53ECxNE30H54u6paMKfp2ZwJUe7RLHUfPTjUlU_PXZQWMs_ZZsrRKPF5pSd3puP7l8ObeEHDLjU3PgmPOk0HYQS5D6kLL-je7ZE4g5K8qZeNGe2j6_PnPbw5kXg", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111048591375880891672\">李永勤李很好房仲成交忙什麼（Ross9413）</a>"] },
            { photoReference: "AWCwydhvihWU2sZUWbd-xUh1ya6EWVcvHMs9okiQ1JH-0ZpE6rgi4OXeteBJyXU4yBl8rxJz5m86V9XJmsYuu4Hj1OVhXqmqpHRTDsPCcBf3OkJ0fgCb61bITUSWNUYrfqFtWc6eNz1rJUFsybS54N8msIo1xTB8NEao1JNyODWRwg7n3AQ4RGk1kzs5X-3XNXYVuQdFmdyPnCDesBZfyUiWwNqR7i1zEq8EnUI4R6lb41mW3hyY3SXfIJS2MIk9tp58x2gsg8xJYG7yEKdU2S7sAMgWMr49c3bVmQFcD_eVhOpapTlzM1I1KAWf1alJFU7IaZdQSqgFRaaostHtKoT9rOUghRJzYhh1xhpXiMYcfETyluJdQ_zi1fw4SfGlnafnnuJdlt8rak78xTHgfnsrS95mglRoZsAssZnojmxICRFpdECGVcWyMnQTMqrBBr4G", width: 2260, height: 1500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107159299459123516337\">bills 表参道</a>"] },
            { photoReference: "AWCwydgA4mdzqjI_16UShrc9F2eP4FNcINij-Jbpy5tKOTi0wiRMzS6k2GQnNSJ3vzc1_NIBIM_l3XIFXEawxAse8BKjft3IEXed9b0VRG4I5v-fdlVBQwRRyA4tHkXUl3MnfFxz9B99o6X-LPmkVXFGRrAq9qPcvjps5uMkWdGXt6A_8hUb59T9_ieNX5NbsHz5k2-AhY939OnkaS8fKo3kCmi7PfjHNmCY0GumKh2JmApCOXB14Z8FuGIIIJyK4FMxjmkz7Z-7NYQ2pn5M4kGVwqoVCbkZsv2oJxitufdNIcEP0ZCNJ0VXhMfHV1p0v3pd2LQdkQTZ9MbJ3MLknQmT13E4gIRF4KkOPfx-HEKgTZuwCtb526PX3iEnRp59uRonFl_fPKn5VLabMdWuQ8RylK0W5K5pX4f-taQawEOpH7RpVWK19K7y6mhXCqtQiQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116522823120846842122\">山田拓馬</a>"] },
            { photoReference: "AWCwydjzlW74DkwPXpLrIEIsnqseUNAfpfg_uK9NBATZte6Ekbw0NDXVbbKA6c3EXrtsRQbip4ZOTUMeDJmtm17pwPb2_Ab2Si8xAhbZDAiOzZIq6meohM8ZBCeP1FyEH6glrVqVJa6_E7NQcwx0X7-s712sg3rLIxgKBQONzUQ6eRmBMlYB-XBiVrk4Xq1vzCv3FDBY42LZ7tHVxhBOFObv6Drbnjkc3HpYuydcWvvf1ysch6O0ub8rc7SWvlfrhrQYVrkLwJ9IYi5Pam4AWJxeZitFGztcrQq6QHOODxNpzETeoDFnLigTr4kqc_iYlNI0AEfXhhZ_1LkPjy5JuhG4c8vEb-dTfZOseM-a1EKYaBIrmfQnXklAf6zIl-ZM9aVjmgt6L93xHtSBUVYndDpFzwealXwlvP8YcWZi8X-06ifn024WJM8dQwStdnzpgOoo", width: 960, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111353192266114157625\">Kelly Lam</a>"] }
        ],
        summary: "입안에서 살살 녹는 리코타 핫케이크로 유명한 오모테산도의 대표 브런치 맛집입니다.",
        updatedAt: "2026-07-14",
        highlights: ["부드러운 식감의 시그니처 리코타 핫케이크", "오모테산도 분위기를 즐기기 좋은 세련된 공간"],
        tips: ["인기가 많아 웨이팅이 발생할 수 있으니 여유 있게 방문하세요.", "브런치 메뉴와 함께 커피를 곁들이면 더욱 좋습니다."],
        warnings: ["주말이나 피크 타임에는 대기 시간이 길어질 수 있습니다."],
        menu: {
            signature: "리코타 핫케이크",
            items: [{ name: "리코타 핫케이크", price: "¥2,000~4,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 8:30 ~ 오후 10:00; 화요일: 오전 8:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.billsjapan.com/jp/locations/omotesando", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=842209506955036887", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=bills+%EC%98%A4%EB%AA%A8%ED%85%8C%EC%82%B0%EB%8F%84+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "행복한 팬케이크 오모테산도점": {
        photos: ["/images/tokyo/info/restaurants/place-26.jpg"],
        placeId: "ChIJi2Bt5qGMGGARcJ8D2Sgjud0",
        placePhotos: [
            { photoReference: "AWCwydi9Io0XqAL1yPhlIHBml6XZ5LxqpRUppdDI1pt1Cn2rutUTa7JRecNvh4RxdfQBesHbZH4rIg0FbYMVwzY2W3QS1IQGxxigvdYbip18ET-JlQyURgQIMcQPSDLiOuOFAzfi3ibBvvVXv1NkrMPOsz4IckgshK83BDOYXgHDj5YvRv4Ryw42BWioE3CRqRIsUW913Ixfc-JRb9AdDSpSfFvhYd0Gd46UhtRNgj6HGbqf8ghHydu5X74FhqWdNVclaIo0c_VVmjNwMn3d8fdvdLhgFsoekM3Y4_E7e48szdQGpCXKbXW8ME3Bxs741agFucfalULIwzQwOScgUUWsnunymHXDJOLncRAXihecJApd0ghuubM4NRzuG702IDqoNQI__DzwxGRD4dnMrYEafGaBI7MP2eIk5WuPIZsAnpzneMo", width: 840, height: 560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106385153154125994116\">幸せのパンケーキ 表参道店</a>"] },
            { photoReference: "AWCwydiUOnuv90GKoPs_mTIBSfUyZoZpJv4ggAcp1TiZPU3sfoUqvuZh3OVY4u4fQqWj3u6r7J4n5doq0iMze0CT9lp95y1pgoTV0d5Hyt03NBQMIi8PVIBgtPfkzoNGRbkDj1d2tmjoGbmn1E1uPPAt0gM8RmZ4lI-u5U0pFAtX-6b6GWjcpmM8yKl9e0g5SR37Dz-QAUfMIn5M2M9LUQEkbUCDGg5Gm-0KMGm1xhtxFCBppzT7LKOwwmAkSn3Ca6dgFvG2gn3jswJ1nXDNpfK5wm3xKpTpPil4xUO1cqF7CF0WpspJ6n1o4S3cmuKx0CQQTB9ADpv58_Zhbpy6ezxDgZ8ZolPqV5VHIKwCoNv7j8jA6N5w7NpupjRsjnVx0b95Ye-wB0Iogew3Tsu2gCmc1x3mV4KOHylwJxFO2g0fWFLfGg", width: 640, height: 640, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106385153154125994116\">幸せのパンケーキ 表参道店</a>"] },
            { photoReference: "AWCwydhqttMQ1KEts7GW8s3vATeVOch_GMbKF7APfIU7SHtWEDBvnLxGkMXYJ-Qf62GLg1dfNF9-KKy_hrlMQq9B_xXqLiV0CjzUlmvLMoJv6bxr4Vna_nVeLGc9hQ29driw2VuSfuqs0t78U4jqVxRzGH9RqVE3_NerYjZZuLyUUILblq-35QtpuvitMb3hDni9cUQlqTZg0xBCpwuYQwFzqa27LmNP3afEqhtdtejZgzGa0YuvPr7HRkIw0hP7gYoQyVbn0rQiICFaci28rV5J_ed0GmYs1BS38PvtyluSiSLjAHMQYE31iyDxZZ0k4lSxOhWO1hyps2SDtJevuo6BreJHshWGD0rDzDbBxzo0sm8tChZHLXv9oOM8IXpAGKoqarE32G9GTd9G-_Pq4GJ1j9PqxKz1iIjzeCpeVpMGJtmHuBtpMt8qj3F19V1Dk4QB", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108526407042538002911\">張阿政</a>"] },
            { photoReference: "AWCwydgGeEZBNw2m2BIAKm7AcnOayGbHd95TppB72IQ1xvxVQcfBhfq1mop0QJtJo-KVY9b5ZqmLpFB1TtECoY7NMcv7ouU9rUx6SpN9MBzuqLnJkbN2bXnXcXWWuHuZvmzf9sLfbgHgWF7OZ-vAfi5EFhOhK7aSO7Dn0x91Qkd3MzFg9EXn3ntmjpQmR47Kk3JR-P2V0dtVz90_7tT69CnM9gdUOKn_4iYqkW2jJX07cux7M-gnyRWjgO9sBug6-MCwtJGtLbQzNX18XK1ZldRI3jW4rd25sKANed9XPieCnjdtmCdVF7Dya3doD0__Kpp5tFTzFNEVkvBy8rWMyXj8GU4IncrtAJQRVd5umdrFv5x_ltTDrTD8GePevQ8efQgeoLRUVdeJP8ki65KZy8-lzAOAFHaE_zVrGiOdfpIFdna0iLvyBH5EMTu0J0IgS1Kh", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101625948398097418236\">사기치는냥이</a>"] },
            { photoReference: "AWCwydifbQfZxXrA5NdXPz7LgKhk1R4MqMJ4SAtBGF4oRpZx0R6gAVjCPP8nxUJeyW6yd0ZAekKSMW7YgNLBVpWGZerQ5_uR7Ad57DAKkTsOM5nEJ9slMb6UheKh3RCiqOLe3W14nYoGO-pGOCQeWXBpZT7WVrdTL97QMVp7z08ycsSz8wSg84PiL3bg5SGs1kJ_3e1xQOhXuclk1kHjOA_KK-eCbKdJ9p3NDI3A0XENQ7Mjc_epauQxub4EmHs_NKVcgAce1rmrC7KFI4pLCOtisnGnL3mGdDSFWpvkIVvG4V8CnZ72-5qmv5WCW7hYE2L81LicXKYVzn_WaJXq6nz8jqrNO8JWsG94wgTKfMeZJGnBlV7zrbO0B2kr4injP1IRaW8RIw6ZaKptiGfWIJlAta2FGGd0i9TQTcXYwwwjSF9HTYbSPh4gSWvyibVA6ZVo", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110740814723676270519\">rululu</a>"] }
        ],
        summary: "입안에서 사르르 녹는 폭신한 식감의 수플레 팬케이크 전문점",
        updatedAt: "2026-07-14",
        highlights: ["부드럽고 촉촉한 시그니처 수플레 팬케이크", "오모테산도 분위기에 어울리는 달콤한 디저트"],
        tips: ["웨이팅이 길 수 있으니 오픈 시간 방문을 추천합니다", "1인당 약 1,500~2,500엔 정도의 예산을 고려하세요"],
        warnings: ["재료 소진 시 조기 마감될 수 있습니다", "주말에는 대기 시간이 매우 길어질 수 있습니다"],
        menu: {
            signature: "수플레 팬케이크",
            items: [{ name: "수플레 팬케이크", price: "¥1,500~2,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 10:00 ~ 오후 7:00; 화요일: 오전 10:00 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "http://magia.tokyo/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15976839811420102512", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%96%89%EB%B3%B5%ED%95%9C+%ED%8C%AC%EC%BC%80%EC%9D%B4%ED%81%AC+%EC%98%A4%EB%AA%A8%ED%85%8C%EC%82%B0%EB%8F%84%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "잇푸도 긴자점": {
        photos: ["/images/tokyo/info/restaurants/place-27.jpg"],
        placeId: "ChIJR7VjvuCLGGARwo4yz3p2y4A",
        placePhotos: [
            { photoReference: "AWCwydgexZSEGS2yVzI79DjaJbh-AnJEe8NEoEpeyk5Tr3xruvzwbRU82RPIGlxIeOqCSl7eh0fEwYAVahvNVKRxU4RY_Qy3OSCsQ8LUOBYIApmGJML9X2GDqTSr2KVa7x4DVcvet7_S4bGKzmEbvpAqNAOSFlRFj3DPh5zjije98xGnVIgxM9TaKBO2NbaQnJUowHbD5RJ4ZN9T8Ud_PBbu26iOAZcn5f3eFD3aXWKrgkhgB0h5zzF4JbwMzDyCqYrZvpGNjfLwqvONZ1b_TSqcxErp0egsE1gcciKl8FD6uSr2Mo_TNXJUc4mkCcC3t5ObD0VibheN7lJgeXHTG6bCQbnGi3LESHif3woVVHgvA_wbNqOkzUwfxXx5bZ4Xwkm6htCigiGMoJQ-qHT59wvLyarTlL8nerm7Ff311jLiTFD0RFKV-BTx9sYYMfwYGKPx", width: 3224, height: 2708, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111139316463867389106\">みかど</a>"] },
            { photoReference: "AWCwydjSFGa-QENsjndPQUOoUsy1w2cGsQKKGOMlOn25k6-YXLRfQ29sR4Is9Zdf7BPhTV8LnV5xJRh0RKI67bUxoCYFcQLVGxvVFVC4wFq4prKVEcbCxUzku99nbATCLRe2LNLv1K7Mubyeaep4QvJyklaOnVSe_YLxErfrr6Wr6kh6KqoxhLBHWgh4H2rcReAN3gFiPvRDGU-AXU1Dv3phQ8-t8c8cHK88fLcjbKzTRIyf8D1zkpgTkZNGtznXxz7_xyAJftUIqwKYTXmc1AQ2gQydPBbeXpjsvw-0YWOblxCQnGBWixfHOEYoMWKyzRiBdZPADmn7wxv6MijP_xz-sxtpgfcfM7eqamHue1OuevHQTH4bUXwEsGu_s9EtyV1gAmaXYUUzvN6utmTZdWGCBE-m788kOpz6zvLRbRPLYNI", width: 960, height: 540, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112259963659474052839\">一風堂 銀座店</a>"] },
            { photoReference: "AWCwydgFgiwiXC08WPfbguiv22Hd-EScsURP9dmoIPdst8s36imsgAS71jPTqgO5cqecpcLtaDbm7igHgFrYhRj3CyVnu9QWerPAyKDP1pFSkApJeb55c3z5XFcSYE0E0fDC-RP-b-rcCC8xbNISrrgnM_wjiw3U-gPpTqyCbcVhNR60XvHQJp7cMiT-U8F0SUfKA9IdsgLMZpp9Rt9gvnbKnRJfeVRl1UsC1Hn0Stc2yU5sJdFfrPHM2XuivNVsYo4100MmtjF8S9S3xJG7P4BILdcC9y9lhN3taUTtb804DNRD9B6F_9p-Smhee0WREoGufdjJamshEj4fsMSMTz_Olr4WDlcL43rBCEQY9ezxt5QLCE8YCmWuM2BzewBeFQoJztnHDk-FNsdFs3J8mkQAoI6fQNgC_lOwVjIM3dxaHuRV_NdV1vn90pIzDrvDL_w1", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117504950556829177207\">Shivani Kaw</a>"] },
            { photoReference: "AWCwydgGVVwC9J4t_33MkMLo0fmUYl1inc6yDyPv7RLMlLLbhX1IKruibh78O6kJxPVByDVs7vnOzBDP2HBCVcqz7iAdDbQh7NrU0qK40UzoV6NKXzDK4WBL4CZh9TQ0sZ4OW5buVmrzkNGLbbqlB8fYcAN8_uKS0WzHDrFNETYrJk0w3qmPD2YCoNfVSQgM69Blz5Om7d9uZqtXHPs3S30JGQcwP3mxqpiZEEfem3vVWM5xBu3sO0U5VoW93rPcht6-JWBFZyjgFpuNyDwHAmGOsI2nWdbJWb_Kk1988JM6Ni3o_WcSCBsO2iC_gkJffVDD_lEDLtEc0YuOlxlZSU7xYT5Dg7ouxiID7sLuBT7MpHPagVzuIlfSA8VxjZUyTiBSrn9hJQCiv7ZvfzQAz_blyaNYXLL2cBB5C756BNTpENk83JJIM_nnRDZH5mWxJrDv", width: 1440, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116978143320984390893\">Tellhim Kim</a>"] },
            { photoReference: "AWCwydhuYEpFasoM2vVd3gkLMhTnnkL44dHIrNfhLTswvXKvnZM7d6NzlHYLBB3E0ankIPzGrCAM5dp7TH7iMZgszRUI7lFzZjnKHtHAHn05ufT51ZWjz23Gr8LOzhgLC-dBe76eKc3N3oD-tkbEk-6djTDQZRS6yMA6dR8QDrr5XhspKZZeZmDq0fgz2k5No2NobX1Zt9GCJsdPe2Re6kD5DtJNFiBcko9NFn7UxvpMxpZx05f7mfdS1bmifHbgtFpKZyOJ_0qChH-gCYwVUGxSNC0o4kz3cjWHjw293XKePfDixRke8q2rt1nXQ7jcwcAK2GJOrZTP0atWWH_MDqdjUQJoDY9Jl83eNHOFistPEwd1f9Uvj0NCH7CPdYkS3l2O1U-8p2jGDgFof8oK2H6SORIF3EJmG_rC4Mw7pLMqsQq5XjQVrtCqeSaPfDOrCU2r", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118440104323628954507\">푸른하늘</a>"] }
        ],
        summary: "긴자에서 즐기는 진한 풍미의 하카타 돈코츠 라멘 맛집",
        updatedAt: "2026-07-14",
        highlights: ["깊고 진한 육수의 정통 돈코츠 라멘", "긴자 중심가에 위치해 접근성 우수"],
        tips: ["1,000~1,800엔대의 합리적인 가격대", "피크 타임 방문 시 웨이팅 대비 필요"],
        warnings: ["인기 매장으로 대기 시간이 발생할 수 있음"],
        menu: {
            signature: "하카타 돈코츠",
            items: [{ name: "하카타 돈코츠", price: "¥1,000~1,800" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://stores.ippudo.com/1123?utm_source=Yext&utm_medium=Yext&utm_campaign=Listings", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9280641726961323714", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%87%ED%91%B8%EB%8F%84+%EA%B8%B4%EC%9E%90%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "오니기리 봉고": {
        photos: ["/images/tokyo/info/restaurants/place-28.jpg"],
        placeId: "ChIJ0U1eAneNGGAR33DgoDIt0cA",
        placePhotos: [
            { photoReference: "AWCwydgA9Pb1k1PaSDlkgglRkilC1ojgW06eB9VoH-CUdors0GjlUL_gzCOCNC9KDD4xvGX0x_3KyVvHBNw0USKNyp8-6ZGWWln9hsvYgjYa9Zrdwuo7dO2qqO8vRJkqwsyn1qryJ0XqTUdzSdMyLbYGcLbj-_2FxwuiHgPSCbVjbSHDpACDNaBA4sIntZAzfSGMbGitvoIaqGcv3Al2iwfJVY826MfBCB_YH2iorCzIrFMBXXAKiBoINxvPe-2dAHQmqJqwB4uOh6o3O6OuHe56tNEaMglr2DPE1KLNwfsVKSC9J3TgQT4ETe6nx7FWBwLzFvR152Cptq65xyh_qmxTpPetU2s4RgxeHL2iS8PBGhBQkemGQTn0S_A6tufiG9hl6NV46gyvJ8wBJiFXJNJrx5utbomBsIWj72fXYnri2ggaNK7M-Tu9JwCpzdgExw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117719303455100696661\">ずんだもん</a>"] },
            { photoReference: "AWCwydg6k84dqtTlAb5iEwoR_0JXqx-VVvwgp_AaOn1uIX8oOBwS74M_Qp031UC0gwSY0zPnmXIqcU7x2SYzUmY39bFqPW_RqkOTRXX6NE3weqZCSRsiDdIhRMerD0dj3dfOQfqQjUNYuPKhHQejypPKRHJfNBtyDwU8tiRQga6AGq7C1-yD9FmoEz4uTD9Cf_a3Av5AsTKXJaaV8iMMfQ-Sx1QJStsGLKiulTt9DjbR-yfcW0Z5_VgVFZb-9NqR_kRTKAZ2wgBvuUhIT4xiTW7ofLKUTOsL_w7X0Hm0P0cfs_Je4mAM12edqFkiLpHH-Gj5MbjOs8QfoLGTfQqZV5kwIaM6nv9c7yR4vBYm9-IpQYaqdeC7aJqHXnPoqAHgJIGztUfR956nDoazxr6KqYWOFAKvWkP6CXRZKb0Z08Jwe5cOSA", width: 3648, height: 1680, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104851882444101830217\">錦隆雄</a>"] },
            { photoReference: "AWCwydgKz887IgFi2SHxCBDmweqRLNHVPf29hift2tQOeAhBOnJ7_YIPxYqpsDODMwJ5kiDPGUJtofKpJahztUwKMKjCYGSBuwC7BBWqNaHIGTm4dwwadYQc6n5jguyq7yCWpwPO_Vt9szTwhYx-JW8ArhhXMotJnSATGqZG1zo0kU7GwJkEHxNYiIMCWZRKJZiYVQry6qS4xQPf3WUfOcSl1741Af50V6o6jygLmn1f6RRhYciDg2WiWhRzZgxXSfUA8SSJZs7gWVXh3KmF99YD_jE0Wis0YgBi0CWSIrClR-3huTpUuZOTqQ3_csH1tGUgvDelamVuAefNmiQvCRoIRnYKoK7KHSRQJWwp8W6YUaY-6TJGb4Our59Z7Q1ZywuQCOnWcYM3aKK5Gv0KS1_PnvaUegXZ6FdgBEMDrco5gAnN3uy6wFIcTZxuZrrDbo7V", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105801007077236272331\">雑賀平治</a>"] },
            { photoReference: "AWCwydi7Jzyyg86pHoKXCevnkyyh8Jc-456iLQwZFS34XFY-SzYac_XFHdGkiNlA_bGnLb04BLjfM9Y5ai_pBcCoqw9PYgxVz4U2E-CN1_XOZx-hlvwjRuA6TMCf0yeGz6cxxMF5C1ucG42_ZcDdU-bjrAFboBNRvF8EZoDTcCEH8kvE-eKMwVxbYQ34VCOMkdmFNCH9KUx47WedOrjiA0D15GtYTi1BPE0N-QlLMva4ZYu8a4sFJqcRDGT6wD0_3f9xooo8bN0K-k1HcCjO8I0lk9vV0GR8zR8J3AAczDyxCcUU6TKJIbla2qYvJCmrzqFv6LVEuJihqk_keuX0CN5zosPkQlCqOzKtDKOBOmRUkfX1-ebVxcQwVD1iNMYiZBWMhqD31XohAqSrqRceUP2Y-ltgzLlZcayua6jfb-To3jGgATJwUpMvinyJ2sola9nB", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115563332639342679010\">Cathrine Chen</a>"] },
            { photoReference: "AWCwydgwufzlbXKEIP7jlJyPPkj6lWfGVRyieCCPGLpX0G9dO5bT8nFQI1guc223Rh6KcFkBjlsMjsWxy0h5_tqSPkOHwQ_JIMhVbjSzOja4775dKdiGo-x6JMjGNpIRa4g93ECi9_RBPlrGjqoVPQD05SCzfmvbgCAkwcl0_G4w87dVHomijI1GEG2Pcvy_VYIbdH7u3RGaUYxKESPVzoZ025lJ7FUDYi8AxEB2jVe6Asp2egVqZhdKc-4t8Fo92qHjVuQnrAstEdcxh2j4Op9-eIOdbW967VAsOvPcVP7lTFUA-FHDQ69DtLcppX-zK_1EK6G_ypQww7u4KOdYRSOszfbDsVPxrY2OcC-gQHHNCvYvUjHdUL5A7CgcWxvWCzLMaUYdOJgw0hiXKYcw5oJLByq3Z3LVngL4L-hVxeHW9ATXxPB4Fi8AfMytWO5sgCUG", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101075237094884725443\">A A</a>"] }
        ],
        summary: "정성이 가득 담긴 맛있는 수제 오니기리 전문점",
        updatedAt: "2026-07-14",
        highlights: ["신선한 재료로 만든 수제 오니기리", "부담 없는 가격의 든든한 한 끼"],
        tips: ["인기가 많아 대기 줄이 길 수 있으니 여유 있게 방문하세요.", "가벼운 아침이나 점심 식사로 추천합니다."],
        warnings: ["재료 소진 시 영업이 조기 종료될 수 있습니다."],
        menu: {
            signature: "수제 오니기리",
            items: [{ name: "수제 오니기리", price: "¥1,000~2,000" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.onigiribongo.info/", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13893936020885369055", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%8B%88%EA%B8%B0%EB%A6%AC+%EB%B4%89%EA%B3%A0+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "긴자 하치고": {
        photos: ["/images/tokyo/info/restaurants/place-29.jpg"],
        placeId: "ChIJX05jZOaLGGAR2rUy9EXaYLk",
        placePhotos: [
            { photoReference: "AWCwydhfRuo4JwvJRinqImVzCaQUj_QBEnhLwbqLc0pFSaHxKDNSX2cWUfIS1zWE_uqtcuzLMABEnHAGdoVIGKRGUw6irFrmsl-4dRLQsycTXVxbkEppdC_ZRtqxbRcj_Yh7E9Uju-dXM2oJbvMjI88k3r4XVkw1iVBoDj_MO0O6IabAySpxxAF6FkAzgBbxAuZJfWsW8o1rJOm5C1pvSDX5sgW7m7qLO0jgJ2JisADq32RSMA0pHKRkT0sKrAPwKHdqK1lpPAte8RnmpKvagtv-MTPmJfvtHEiwZZ_ADuuM8Cp_vGgMkCloZmbYsXVRdJfkkm7Xj8NcC_pUrJy3Rb4a8GeAEmYjrbjKwdvkV-Fa4LHufyaTB0JvozdXbfVhIwUEHmHLvEPgYriACTOp_DMtWb5VPlITSlBcF9lJQVznUBDyZw", width: 4656, height: 3492, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111420659287642606107\">T Shira</a>"] },
            { photoReference: "AWCwydhgkIlH_9VDVamCNk1SrtQDAQHHU0v17oHpf-Iy1owtRYPZLrS8Zs0lb981-RwDrCz9wo7LUU5V2OXyMOyx3EJ_PGWzV1NIUVHXURqXV5_UuB_HsL4NT-DTRyVZBTZDxkRzaZBBTDB0P54mm9KTbKmzPT4G2ioMaDwAvlyE-FHP9_CPj6DniGVTV9KmS8HFWhh3NFAfQK_e7kteEBPeacY7UZH5wvNL9ueHZiDuCqy6rn2QQwKk-f-pjV0HBJfaCpwt6XZfj5D_Xn1k8o-8tNWEzYMdxnQaqnNtPBNL41VXjXKfq3Yqtx-yp7zlemnR7OVlbR4VdSJU9wZ2KV3tSgQOPSQPG93mP6qdPzQR7ZaDCrAX9rgo63Nts0jX8bS4COBeaGTk2ttM7sRMFoAENRKyCFSzaNJb7nIQUVWm3Z4fEZexyc0Z1Bywjh1UmSl-", width: 4024, height: 4024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112091813805294074888\">銀座 八五</a>"] },
            { photoReference: "AWCwydgl3klQlThni7LSN55oX4-zLsW-k7klH13ETXa3glze5E_k5ct7LomcfdKtW8lPSGzyUp1ZtMNYCQs1XhqYOhAcIlotxLCLnBHuqPJG1HLgmfr3dX6ueLmayr2k6B9gcQNg7uzwIT3c__6ARwcyyIyL5I30Ay2E8BGCHVeJsICKmZVs80RlQAD_xLFoA0XyagmMI0cYR_i0RwWwaoqOg_6UPEPjzJ4cRkyEtlB6T1YFStS-4Vyb-qzDKxqLaSrzOoetKDAZ8IoAeFLPpKZDfuuD26TBWs70upntbAhsxLpZhAisUErPntixDjYhGpNmqrHT2GDxd3LFUA9b6qquTgTK6o-3Kr1V5plOl8Aej-14284o3Lp1-K9SDY1N_BX8x6tizdiojtNJaiW4Y6jVZwXR3U5JwLHkX84gmzC1RKdyWcaGWKeH3ublBbeH6A", width: 1600, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102358915446054597744\">Supphawat Pukahuta</a>"] },
            { photoReference: "AWCwydiCYR2i-opIqHoJT5Q8D0IqHxRIlIzjgVMoR9gnSOk4YDJyWYms64lSUiu-P2bbW2AxQWT8wq0JRrhyVtDBatyCoVSyilDs92E4NxlV3d8y3utGEfy1DARulfPOetg-IGskpWR-iyYRY0rKbD8okTfU3W4vwiXtXh_DnJMMkhM8rfqyDFPvUyihWgFDRkfWYyn_vWMgkglMSQIIxSqEz0S0jGqbOSKJBrQEgJKnWIkQvMWyXksOGPz0Z9MHWt0DKKeRYo51SLN6M4v0jUBg9L1YApHQVQ5zXrmPodYabV0F2WgfEeyttuUm7P9_Roe6hsJNMqvVw7ko_uBDOgvPKOuIbfmSschrlK3eT45dLufIAO54w_KutirPO1LAbL-drvTH5F3WcT9ZHHwzDhaYCcFb6h_O2d1kGNEps_U1aaY", width: 2000, height: 1333, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112091813805294074888\">銀座 八五</a>"] },
            { photoReference: "AWCwydiuGYXOKK_TajzkPY15XUwpIpOmzCzfHEyLF4Y1wi0iKkW9oexFGqHN6lcwmyi_CJ4FqmC2_2aWMHa-qNu-c0cQQqknvi0WG8pe1BUcbsAdPcz8Ad7-TdN68iMSVLfRBcsOdk5Kfp0sy8PEFRX1bJKN-psb7yfnaBD7LZII9_42UDUWgpD-92Ii5v866kuf1XFyoeNYFaW28Ag_t0aB_zlnCtimcVlNDRqPv-Z2anywyCjc7DIgsXqL1GLuAEf-GKSgugiGBG1KiEAWXblHCfzwpx-lrzQuDNP0w2D9JVgCX-HzMcP1FwQ0OejT3fd5a9VZdizfqdNGcWUYdaBxrTkaI-WVhJEvN6u0eyQWO8AbYm4CbV64T5Ww_pd7UipqaC3-Ceh0qCXt0c4CqvTOrj_QCOmGSVhmkxjBmN7y5vYIza-UMkbB8sq2N9F0laGE", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102654067356865700035\">Trac Le</a>"] }
        ],
        summary: "긴자의 미쉐린 가이드에 선정된 맑고 깔끔한 국물의 라멘 맛집입니다.",
        updatedAt: "2026-07-14",
        highlights: ["미쉐린 가이드가 인정한 깊은 맛의 맑은 국물", "긴자 중심에서 즐기는 정통 라멘"],
        tips: ["화요일 영업 시간(11:00~16:00)을 반드시 확인하세요", "예산은 약 2,500엔 내외로 준비하는 것이 좋습니다"],
        warnings: ["매주 월요일은 정기 휴무입니다", "영업 시간이 짧아 방문 전 운영 여부를 꼭 체크하세요"],
        menu: {
            signature: "미쉐린 라멘·맑은 국물",
            items: [{ name: "미쉐린 라멘·맑은 국물", price: "¥1,500~2,500" }]
        },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "공식 사이트", url: "https://katsumoto-japan.com/ja/ginza_hachigou.html", type: "official", description: "공식 운영 정보 확인" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13357916488765453786", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B4%EC%9E%90+%ED%95%98%EC%B9%98%EA%B3%A0+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    },
    "오모이데요코초": {
        photos: ["/images/tokyo/info/restaurants/omoide-yokocho.jpg"],
        placeId: "ChIJP9eKBdeMGGAR0zzBXJNVj5A",
        placePhotos: [
            { photoReference: "AWCwydhHwMR-2k4PfvILhy1SyUOrOdBUxZm2FeB2htakAZEBv30FSBfQDNWC5-EwZMqb1_05F9HeU-KaAjBvHOzazXjvZJAtQhj1VxLgdcX6kBHtJHimF_sdTGfy3qp1pSwozkSwPzFLWwXbs-TbMIDB4K-G5p1ql4L0eG77N2_xlZtXdL-79X2QO1443qugEr1oWwjCzEXfCovA02f61CAgXLpcXSA1P62q2d9XHVB6eemO5_ga7_yUTd6Tu81UrMTksmE_yLdubdzNZCWluyVDOHPjlRA6UPPj4yqUJOmrwyz8KQ8JyR8aQsc46F5KUAxGFSQeFrfMDe0l-FMcEkeixWN4BFRC2gUQD1vjMWiM3BHtfjqShi3g_fao4P5ijDxu6x8YypW8cMPmBcM-HtMtd-4eLmnEfAdhJ0uHO-cBrf6sGA", width: 660, height: 825, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107115663033369829215\">Hieu Loki</a>"] },
            { photoReference: "AWCwydi4TuMVpdklijk8g-J3U-BlKFT_VTKaRU7m1D6syOd25Nx5maCPV-447viV4qQiEJ39FdBlwhtZS5DUTkYTK0ej0gjXq6DL07KuTS1q9-0V48LQgt_Ex4McGP3CuYjW9B4vuUhr25QRnnmSd8U2DxL9wOpIwR9WV1JX5PPMNJvEcJ6DE9WdLKwW49lEqUcATeqGij4WA4b7CLUOQEmMiwPBq0leOAXrGyB5EYIKgw2cuwWDCbVsbqsuDT7TH6dBpIlhW2NeGOLsmk0ln3kPeIHDD-EJNAVimf8JRhvkYQADp7X7l55OWrcQQMh6O7TjbUCVdL5n1LNs17AJ_hk3vpjlPYRHfbygImgtlaK8TRPEe60qgr8gTrh-kXsnXspS7d-xf9JkZijrjOurWdAv5bJ5OkR0-hmJYub-eV0EiNjJ1Uc", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115086787511870947419\">Ashleigh</a>"] },
            { photoReference: "AWCwydhV9hYMnC_Vb6Ve2x4H_paqf7gFoCMeTJ4Uwl_9ydk_hzKrYvOHjWhvX5lw0qVGRzyrAybIisp7_x1XPXcApz_bTb4YsaWloyPpoIKYUUeJO7LzJYvQ8_FiemTUFIeX39u_yZ4nrlKPF6PpkLvOrlV-Fad3BW6LPUl84oy9pM0YPAyBvBskWd0MnTePButarLd8hM5KKFckBLosthl8YS_bxEQ904j8IxcGFWjBuS6ucsxBDc-E3UHtXDo3C_-hFi7miL0mqpDzIbG1rZGaaVXPe5IGK-pIJfetvn5C9oFIAR_pT87CGiLdcuNGO1om90ezlDLgUhRBB9F6TBBRcnQ9gTSBFbn4hwnBo-azUYmUsCtEzyU9e5WcMfYRUT6mj4ENUnXWEZsP4vjSrWkVW0WjPFAV4vbNafSodJFuzM9JCs-M", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105644165993296718434\">Kapil Sinha</a>"] },
            { photoReference: "AWCwydh3RXmY7nkmB1oOs_71AyufZDJUtz6CBGPHWgxKpCmosjMgVZ9PDi6vQ6K0kJED-JNLC8a2Fq9VpozxmejU8blmQWd-QsXsLSFeK7jC1dl3RkQLDcGoGkk0Qz9hiAIOZU4QrR1XHDMeBwoSpqwvW8xl-epcqWGX-1TJvIscORvFA2ns0fZf0Ff3GEdF3eqVjNfzK5ndmIEfEfCbUw9PKu4vZYWydcjhopFdtsUuDOUmqfazH359_58VElxfbfckaUJAiTH0yuQbgLgVw1x9Td9-i-L8a2UdPgA71Nk2oRxgsOU9pZCgAeEkiQAqKlCL18XgmpAwbKQRlSUPq02Xgf1-nWvJuVtcd881r3Il9x2-gKyrhQgkAJphFvM_lGiRQlq1mzC4NklGNpSh2Xj57OBCCrtr1qfAY5ENp631bvkVtvB3", width: 1920, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114111790662741268955\">根岸秀男</a>"] },
            { photoReference: "AWCwydjXmhKvZ7WPGHTRf2odh6FdqnZk8ny9wWKOHiUlfHAcBA8Er97PLD-BZDGWmPaXd3MncP4gOGn8X0T2U5fN7UlYPEHfiycPpEFepkNo7HU1v4H3fUWidU82hMxR8Xbg54-4SIdoZTiiN1XJHG6DYQqm9noar6gubMu8GHCBwq1KtLVxRRV1wVZG3sUSeUQOxtk32YaFpfgZgt_U1Zl49nkrp8FwuDuxpf4GAZbIAESCogwSP0eOBAae6rYlJ9gVumwzmxeKC1g3Ue31GH35el6b4NHz4jH4ttHzX7vvJn0aLXUNnxWY9Ao1-vZNeyHzEd155-P1VYq-ObE1BjbdrGEeeHfPmGfgg68NGZUsp63Nv_JLvsscS7wKu3PVGFj7OTpbVhLkJIy8oWPJ9CHGfJlyJqIWyIUcdDOWZt-sgbRiYw", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103469040950625264527\">ひろのぶ</a>"] }
        ],
        summary: "신주쿠의 정취를 느낄 수 있는 작은 선술집들이 모인 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["레트로한 일본 감성", "다양한 야키토리 맛집"],
        tips: ["좌석이 매우 협소하므로 1~2인 방문을 권장합니다."],
        warnings: [],
        menu: { signature: "야키토리", items: [{ name: "야키토리", price: "¥1,500~5,000" }] },
        reservation: { required: false, method: "공식/매장 안내 확인", note: "인기 시간대 대기 가능" },
        hours: "Monday: Open 24 hours; Tuesday: Open 24 hours",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 현장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=35.6927011,139.6995778&query_place_id=ChIJP9eKBdeMGGAR0zzBXJNVj5A", type: "guide", description: "지도와 최근 리뷰 확인" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%AA%A8%EC%9D%B4%EB%8D%B0%EC%9A%94%EC%BD%94%EC%B4%88%20%EB%8F%84%EC%BF%84%20%ED%9B%84%EA%B8%B0", type: "blog", description: "한국어 최근 후기 검색" }
        ]
    }
};

export default info;
