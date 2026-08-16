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
    },
    "마장동": {
        photos: [],
        placeId: "ChIJI87ZA4WNGGARvZWSZRsxpKk",
        placePhotos: [
            { photoReference: "AWCwydjT0MWdc4Me-8uQc4iLjGPj9ywgfiDmkkyCm9fkaLLhRZLo-1s7rTE9B0Lbjr_1o090owF6yMZ1TSJds-9GLuHYo5N8kl9i_fEkjKRtpbfberq5mVFptCcQohcTACMBjzEUI5GBOq-XV-aICqIpzCV-vC0ED8rwYrTLehnCQE9vUpSN8hHYv-KesGx9v6QglbXrSbudMB-1CqljUbc33CzRPdla-Xi2Vy0uRDxqJuu38NszSYoJ1R3vvn49MKaQENQdCRk77c9fzJ_kIGyDjf03qGd2GYuCgmnylFHXBaCujM7s1WcJkubEhJSCFuLj4Tr588xMEqdTCjZfv6oJebqpD_qWdmfh5Xh3Q0DWhOEgkYccUETCcrVKboTVz52BIvyQQoQ0R1DNX2esz0Tev51aGUlEMNg6cOkiGiyv0pvyDn-L", width: 640, height: 359, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113441617139522451263\">新大久保焼肉 マジャンドン</a>"] },
            { photoReference: "AWCwydgFihvU-xb7Kl-KxCPMNeDUBoCc964tDQxBeUmuBooCU2G0XetRDQcny8QHDPT3VbdBdcaUhLeQA48z1PrlFt9KZjA154GCwWP9WC3YciTAo78Eieq8ojZ2zpEhUXbXWLJqcYvXjc0SRVZkfZe0x-xvZaJEHzY0Faqm2hExBbTxd1Ywczmcvc48grvD6k1jo2ygMtHdmpORrhX-tUgFU9Kio_g18ARGZ7eaLR2wqvI56UzCn-RZK5UFm_iL70Rgga1v4uV9Hfq1b-T5jglYS7cmNnzgYmy-YPqfyrPNtjyjzI5RRFmZKDl7qqOvBiWoGEpAuZ7CZ18WoPXWjYxzCM2wkOCGcJp7ztrF-byV1LuS2n4nU5o64rBjqGNSpeLYFNxZ3R2XXL33W8SsdAr0kdoUdA1WxKyZMAXKOOemr-9LQxrNMgqB2e5rWKGbncoI", width: 1024, height: 768, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113441617139522451263\">新大久保焼肉 マジャンドン</a>"] },
            { photoReference: "AWCwydjUphYKEharIun-1RM63nQ8bn_r1Zm1vXY_eaBGWNSabAHEafvgZKbAvadc0mHm2W3XqaVuoR14isRG_yP_ZWCNN9pZwEHkWRrgjLQvIathSfHIpik-nUUAjqb2a5lCrum6FAXtv91hIjbfg7E3uV84s59KlpDDvtbt2nRms_eijscEE-9gcknzMEneVF-63cTxlx84Xy51JSnkNk23uRfxMNkebCPVZRMyLk90fe-mmfP7WX8gF7JaI2j-NdV7Y5faQDA977kFz6KnfynuaGBuY0nJATNqe-iWSU7FR4JAc8rPbefrqKDf0bfIXNd9JsB0q4YGFmWn9sDeKV7UKvYF_G2ZeoYz3dlb2mIOB_XGAU3RHW5KZqILbnTCDhQwZV7kN8TA6KHdeoVxepizKgGLhLV7mthXYd0KsgHjkKawt--4-PXyrKiT1-NwvLsI", width: 1376, height: 768, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113441617139522451263\">新大久保焼肉 マジャンドン</a>"] },
            { photoReference: "AWCwydgndQViQ6iyd80FGYisuRGzGvhJKyI0TuJXE02bpZLZgCccAJ6AYEaJW2zol6URIwcKSZpOn10wssjST6wJBup3zMKF_xc3UvbTvABpvXXPm0Zb-tgLfKAl59saNngbYGTdlR8U4mhJJR4vjXE5kWcVoNdZSdhvEU3tXoYOIAKgsgt_xYiUdWd-6F4OdgSMLhJAPtvDhIdei1EmmCz-0trGLFimo-8TW1Pu_taD226tAbC5SF9IO-uvYDxf0Tc4chFzfITUTaNUSiNlYlnuUFrkRQCDIQTPZyuO1vw1uQs-jFai4mJjunv648kAGvut0K-hnsc2Uq6yQeNTg6OapAj70IMWa4ls9G7Lvqb_nE4lCSeWSwvUSSGzu8HZ0exE76kbROf9O6TouwDGhCDExnrOyle-zdSU7ckNXs7td0zNmSNGywq4HDZLn5jLzohb", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106915346186956523813\">Mutan (トムちん)</a>"] },
            { photoReference: "AWCwydj2MpSrN8eTvOVifVzzFe4B_-Rm4Lr30s721c6ur27kdFwRqTegS4Ry9N09ZCy9yySHHqj3dbF_Zqpc9wU-Vgivfglm-Mwcb8omizm66xWA-kqsn2rf-h45SSoW1jeyh29Er4o9BrIwMrtRwGuP2_3wPKakInBklU_u5jXjgAOPEe7M0fxp75Zm4wNwphG7B398rGjfZn3r9isv_6RFLESStYL7FPEcup4RIyqZhuHm6Glq9EfW38lv88XNSvybgyprA7gFblQpy4z2HN5AXot6t0ZJsFNzJLehzQrdNSGMoVatjv8UFu4Wi7tbVaw4qRme7rs9s-O1Ajo4iQGb0zFz9KtcmbXrmc1vE5L_av6HGbnVHHZcqJ4udl8XOtoAZFQasD4MdGgmV5IBs9V_m8W1I1oMzGuK14KbBGAs7hJ30gQd-mqnhvk9jbbd2A", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103253233016840753170\">서장원</a>"] }
        ],
        summary: "오마카세 메뉴가 맛있는 한국 음식점",
        updatedAt: "2026-08-16",
        highlights: ["맛있는 오마카세", "대화하기 좋은 분위기"],
        tips: ["오마카세 메뉴 추천"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:30; 화요일: 오전 11:00 ~ 오후 11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12223949282328352189", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%9E%A5%EB%8F%99+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "이춘지 신오쿠보 한국식당": {
        photos: [],
        placeId: "ChIJlfWxscONGGARpqUGevsCnVo",
        placePhotos: [
            { photoReference: "AWCwydhNyHRmglqoTVJvPi_SPaO45dqEHl7Eyxm9bu-zgzoR5532n8BHn6_7Bqo8Xfc8velbOlPlfOEJniXHV1Bezq184V1p-bNkL6nIcme1VdmiBIZ1BT-13SLfIzrWe6D2h63-Gk3O5MplhXnJUYezzGUOyxjowBkVNnwTBNhJJYlOIuHFtmseu7uguWlckz5zc9GMZlcUHXzsYM2qL6Vu2GI948kFA6OyKsNhsNtKL6o66S5rnn9qegtwREtmg2ta6uBHLXMy4UR3BRDma535Hj3MuPqf40XH34Lm5vGNbgKCg4tRAxImRKCTca8lns7j88n69_RTSYwCUebow0dfbCLgxGKd0UcMxxGYDB6_tFrG2TRuLGIfz7u07d5j_64FIMwtpzyuUcZpJb92JLeZ9h6KWcT0yeY5C1urFTXu5SLwZc4", width: 598, height: 596, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115990286188885255471\">イチュンジプ</a>"] },
            { photoReference: "AWCwydhQw_-pd524tzWoGTVo5H-_NzId4aqlHIO1uqkdCtyrGjsKSUOJwnIoHiKi2HKjowZ4QOXW1eaGl7YRVc454qaDfjX4IMUuu8tnFoiGThV8TnJjbzEuscqDIy4wJB2MbrItdrreL4cpue1AeLcnkbssnlLjPDPYTpztvNZ0KQLXUNDGilHK7GXe6ZDBReB0SNN6EbE3UunO6vxrnDB1TWLgtgbtIfW5Ew1WPCath6y24GF987E5gDslIwYqdrEmfVyEkQPvbfJl9YmbetYF_RoHmOFWHoHEBBlffgGki5JSoKWBpDuJYyf0icOP2HDO-aX10ik6KwprQ9ZaPxCGiRn60fiivlNATBBzTwOsuTVe1VlHxg0bPOp657ksoDSLgCy8zNgu2PT74-8-hstF4ZrieFVEOb20Cl3HbbP43jLDQSgkrXiOU40bnrJXr6cQ", width: 1586, height: 1466, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115990286188885255471\">イチュンジプ</a>"] },
            { photoReference: "AWCwydjqXbFVfp4Qdc6XAs3p4fy-evVQAJqI8mSc7oWRCSvkUrFycBZ85PUW8eRBfgmvRXVIpuld_fUpKcuEpX7eoWJoBZQWIXjpADEqQUl8rfgOgOkcZEYdR40jijcrdlGnLFrBmvP6O2QQSpbXYanrAhyVHAEXAu6E8pKhpRLj9iCO7J3TP55NXS5UW9QFswBwpe-J1C4JLMSQpYJF72RbS6zmzXX4432HjhH42CTOF3Ry1qo0UEXThaIaWANRH19UTrfokBABWTDIRO3lMmycjAus4bWBae0mLc4cX0NjElqS8wbCMe3TjCoz8-0szP3bddj2-wX-KFWDBtchgwNMOcdVJE9PTyON86lzOMRR5bpUdSILTuQkieS5QmZqbp7ydvXBBtZ2DhVPIaQh9Qsu8cOzxSd0q-PMy3CT9fQ40jooLCISkyh3GTqI6AvoTECC", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105788944209806017420\">Hoa Nguyen</a>"] },
            { photoReference: "AWCwydgULqv8McouRccuJv-LxList3Nwv-h7IPjjjcwRcZslEz9mYALwZVxb2w9LR1SjUcL4zpvGZcyo_9Tj148KR_dI_TSi8AWUjbo10-lfRYbIlJieI9E-PQUJEK9swwtEAIWWYsq3Cgx4EPSAc5oFlrOzAsiOq6LPLNRjdIiSul3qevG84D0qgIoIVNpGilNP4WQ9hFbPYzd5QTHjKmxb0d7M8ekP2UJ-S34a0VlS9bb_pTPNaAApi-dehg1WjsxGBVvB3hP6Qz9-C2OLLfsK0VyqDJKdvMM5HCDi6IgNzuq3IBlF2oOkzSB9sTpW397TPlVsi1fR0I8nDjstq4RJpPDZv1G9Rfas7eEMiKyTlD75rTd1g19-IfmiGNwhm9cAfmfi16xL7NvrDX2d0GEJcCtw2HOZD4MZCRPcstpMGXiJluHb6H40JFH0U5q_IA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112842269291599639708\">maki</a>"] },
            { photoReference: "AWCwydiIT56uSruYmgp9NCCvWSbyWtcZm-Clmuclg3YyJDEmosYTDYOxx-EIt2eKv4YVU12Lz7zyibFX0GrFuwsOoTDzqo6ZqjfuP1smFrBiTeSNr9ilBkcwYzpdHEstNb_jBn1ECHpy_P_knNpcM9M0kKR44VvcyWhvBMdeeBc2cEuWnS9IMsyF_Q-bRhzUA4p0e9ZvYShuvf2O9WD7qvrJJrlITRWoCX8VLuVUmMSMMKRqTZHBcqkRv6FYSHGfvzRsK_mf_6y-deQVeUOhMNchQhEdJfdsjqtbFCU1466qxhE_OJ1eCSpEkZKQHNwfPD5XLkD-dck6y7N3T9aPuMBZhl2kdke4Dkrv3yEXx75f0Du4JMldt7lUJUI3cvZjL6rZ48lWjFIHHAsRmnoXj413qFdvyJie0VBvpCS4TcqRGCVlGaCDmrPwJZJvnyW-y1eT", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114069999317030295335\">Tiên Cẩm</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 맛집",
        updatedAt: "2026-08-16",
        highlights: ["맛있는 음식", "친절한 직원"],
        tips: ["직원의 친절한 서비스를 경험해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hotpepper.jp/strJ003716069/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6529378313864390054", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%B6%98%EC%A7%80+%EC%8B%A0%EC%98%A4%EC%BF%A0%EB%B3%B4+%ED%95%9C%EA%B5%AD%EC%8B%9D%EB%8B%B9+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "규몬": {
        photos: [],
        placeId: "ChIJSzG_eFyLGGARQFPb6kRJLv8",
        placePhotos: [
            { photoReference: "AWCwydi4wKOcyBzJW-Zac_vNUP2W9_6LO-D5HlXtKWo8-LKYWsX0t2jue6jm327R6_PKE5Lh0UP_ExR7pN6dix_5btf26HDBm2pqsAt7Qr34nc97F4kp3wuUeLgsQDfB2e-7leQWOkZr4Fayqlfq7Z1Fczsy5qQAesv08xdXacwwK_58Yd7eNefBhWQYPpcP5DG4wByurYwjA9DWrX8GaY6AvI9F9pDuSUyX4or7BpuQh-bp5CCIEHfZVaP5Yl3gW03Kx0Rp_rW6wNLWYXz2f5DzMVjozob8MR6RjLF8ooaXsv6wm268R6m44ulG41_f_siEAzuAZ_chXzWSfvIfw6rZKXKW7khlEAVdvTaMCrAKGsonZ8rhJwcnqqL1W7ar920F8Po7UvE43e1NsJTC9-O46Kyw3zln43OvrHWmtMdka-5l5lbe", width: 640, height: 800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102844018887125605961\">Halal Wagyu Yakiniku Gyumon Shibuya（渋谷牛門）</a>"] },
            { photoReference: "AWCwydhTzSeaGmGhHcYwWJ-eMM557z5xu9F39RWeByZui6P_s453fd_38FZZ899RIVAdSFN43HCSxVnxaN0fVR8qpX0d7UqK4sbCvXWcOdAS-3z9BXHXFkWCR9ZsFSJef8LtgfqlwUeBYpr17NQtGwZ1RyKG9w2Yh6f_xX0Hao41LFYruOn50oj2KtVjeCZUIASBFBd8Pdw9vBVR6LFZgj6Md_Pk0z668ec8zb_1UqyyEMbX2a0V04EETy6wcmJHokXA2IdWm90Nx69wmITinNAREQaRJr_yaoJUcGXxeNe2vX9jQ0kgYClFzuhDKOvZAhutPTWlDE5WskIfD37CGoODuuuxLZ7XE8cQc3kMTS2P_pHNs_wJadru7YMxKZZfGyjZvmHcFlbGEam3l1ljKp7UjcBNyB3nV2o78EBRSdxRFlgeZOXaywtDRriV6i-7rg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102844018887125605961\">Halal Wagyu Yakiniku Gyumon Shibuya（渋谷牛門）</a>"] },
            { photoReference: "AWCwydgXkh5OC0kIKB0lJ7WLO0yYnSw5Ovwldh74uopEIsWVyT43tWlL4Mktp0GbEnvM8dIOErUqbmQZYPxWy_pzC66gUNVumDH0Ksy2u9sczktPMg_D4L5Svh32fctCx2hjtiFO_rJmZGQx3onpzbDrcuW3Tfw-FSGDIk7Pr8Vu_cz-I4ob96shosi7XilQSS8stb3VPCZnw13y5-ApVbGTvIbAN9cKL96XEGcmZppFNj0ZgswGUhw2CZYILwZy7k9EtoGBRJeygF58lzFO57yrE_JyWVvGYWMtjpYoD_SF3suwXXgsgHsWK_9yiDswoMCbM5HlqQYD1e481-2eEfsT3KyTiNY7XASvmO3huz_tzFK0sf3YKagUBpX-BQ7lW_n_4KvHXW2uwJSVIQKhhdlci2h72JBSldoerpDJ6hilgS3cjRepxDrfCAKrNiBEG6Yz", width: 1440, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115171781763605498310\">d</a>"] },
            { photoReference: "AWCwydj_iaGMGRO9ML0opLMXVmUjsbmRB_T8XiLoGW7d2DcF6cED6lvnPPZEWyQsUK2vJ7Q6k1yBwx49fsHEUKHsJcA_0foS_jQ3sObqvTv45N5RmYVX25vcQNXzVL6NJIoU-cwGGDCZ-6Kmi93KwGMsrEWRRT5uvMwKg983C0WDl4KDK_Lmwg-paGLuDDOt33rnlosa1Y5LpgTDKV2rVXUqra58Ue9jUhM2KDr3GGx3MHmZPX2yWpQkY_LN0LOq6oCQxU9Pdz2SCqX2UvEhZ0to1RnnwMXjDzy9U0EC5PHkyebNrZmxDhbKb63ZC7vvpi4Tl3rWOwr2M6AhZnc1RYpsjHs9uYDvi4Iocw3bUJHaGNOOIoZczMxaFTaSn6wgDMXIL7JNBHtJMZRS7E-Ku4vul6gfll2B5ABPM-0RyWG55FJ93UQI-4bLELPzdZ_k9fX4", width: 332, height: 443, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102844018887125605961\">Halal Wagyu Yakiniku Gyumon Shibuya（渋谷牛門）</a>"] },
            { photoReference: "AWCwydgGrG_fQR6NUHQszsXTw1NlKNmKl_XkCK2XqD5krI6jVtfT3u7P2_W7lc-rO5DTkj-BiPIhvCv43wmO3GCJdLRQpqjv7DOV1ANBjsYnI80x4KllP_ow4KiuT9asAr5a9VwNcxnmPUIjR3CTrYTn_L6IJzzglsBWlzEBlMpswG8Q42dwg0o3lru8h5nYvw9qhJbsA5NTZeukHGwyDNUMOqwkc5cVoctYXMFgsAmfSFsB-obeWX2-4zM2qbFPdKTTc-EgB34WRffimmY3E4C1VRFTbJKfJbfjJtt27XvtFjWvyN9Rx-D4YpEg2xapSvMRzPoHk0ApQbayluka6LL_UtioBhaa53PElVluzPcJDBU9UR5aqq4ONa2GhysRVuHmrAkjJrodgEw9f77rJei35QiiHLpodPNMzDBaYjmnqjBCgiwxL6-jS8r_xIgmFw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112849904186201111427\">Amal Elmanouzi</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 고기 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["최고의 고기 품질", "뛰어난 맛"],
        tips: ["고기 맛이 매우 훌륭합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국식 고기 구이", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00~11:00; 화요일: 오후 12:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://gyumon-group.com/shop/yakiniku-shibuya/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18387714888947159872", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%9C%EB%AA%AC+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "cocha 신오쿠보": {
        photos: [],
        placeId: "ChIJd1fxRQCNGGARLhZIVwH8DM0",
        placePhotos: [
            { photoReference: "AWCwydiw475VDz5nj6YhR8PsJ4fDqnR1O9DHq0CW0joo20fiVk1Jn174IWiyEOQVjU1KgDE6kMqjCvKw6x52E69pMPrLNgvGatdlomhUZAld8h3BhlLe5MjxphV3SlKRT_x92cFHPOpCySBm9l_yT-lp43nb2vOoADkpWehIs6ECYUmUdP4f0lRYQorjuSeuwKz9WVoD-L1KOH6EDGDc5yFWrfB1jlopdpUn9_ioQL_2hFOLIdAUb3Uw9lhYXqYAONA1dguKN3qm_EL9dF9fDUKaiptT9Q7WU-_C9gR6a6KgNt_1--b9tns-ebMleAWYtwX9wK1OLsT3wFqS_-DYpLFYVE6ZPHoA4g3RElNJqVo9PdUoeQbEFDnLSn5hnsH-QEkDJNgoOD6McTrexW5XnozF3hf4nvi7K---BLW4ndZF02trl8aEIjO-dKVKupdxYIJN", width: 2048, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106479636984387189722\">cocha 新大久保</a>"] },
            { photoReference: "AWCwydhq3-Dpc-kw3BUnOaHvlki8SzLMCaTFkHpMq7CEHNFZM0JZ3t7g6lA4BmTYldzV1R_OSDXZujdatSwOawadSbly7q663FLvsiMYM5gCL3ABbXIPl8JyOmGh1Xe390VVqbGUTBJLyYXAMEM93xBKtibDlTmIWx2f0L2t0mDIUU5nqgSmal8AtAeiqdr48o3YGuhgDrGn0QoU2ME4QF8L1PIhLMYRmAvgRGUNzZnvp05ROKUsV6GKrRUF_copr0Ng_QpJgsDepwkhj0uRB-SkfDH3Kz7Clv9E4TLNxOUp1hilhRhqzr4rUeXNqB9HIYZbiimEXcniC_gv3Rgf4MrWNM1egF2Odi_WYkqFlWaSjgOzYDatVkcib9MZqKbO_Mob75Qv-D4VEFg4TYRjfV-D6aYJENh-Dw82Q5rZmBlryLFTwhxKTo2_BUTj9Z9wGFRm", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108816896420548553291\">ヒロ</a>"] },
            { photoReference: "AWCwydjKSoK8WXnW0kV5VKAITAa7Ox20tOrNgGqQaEf6LthVbK16iQhaJK7hK2vR30Kh8OHFqN1MEbSLOIgp2NEsKFqa3IBtrUurDox42vJ4QuEtZZMhKlvWGUcQj__2biII-anP7A90uVb1LscP-SebN5aLui1MLyxCDCtZdSZ7WtoEywq550XjTlnXayiMeg1GQTkXY2WxzotnG7sEZTQVkjI9_HA-qJU6QF-_lBSeTz_qeFPh7TZ7oLKUDH_qI_x4nFivauIMTXsKyNjJao2XBxGpgshkpWHDaLhICGhggYUF_pIYyBczpD6yKjM3kE1FkJ3UKwplndTCnXSc0CLpnvBEPKMi0uVZBsmPyMpjcW9oLmmqeUsyvqNdTUDs3BvXcEetcF7fMZcrck_BqhSxFUbHVso7btTMrkR3DUcdOzmYTuZAR9VkzixgZDKASmNq", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106479636984387189722\">cocha 新大久保</a>"] },
            { photoReference: "AWCwydglkwv70lzGrBFFDGg1ycXfVP4fi4Ej9HfxY9b-gpiag2ObuMETymZ7XPm71mRL5ZxFstntHTLfgdggE7ZZ9J07in0d0VDy9f7kdCEtmErG3AbtdNxzMLITckti4MFouxMW6x_rUyLp7wPSx8KEpDdbF-bkrBJZ75VIc7nkHNLQHuDmBxyhtWph_923X5FznmedlLY277zXbGrq4_EbiaSAZcauR8lCuwi_tqvWx3XNS-9jRwFVaNmvD99kR56PwRPkt3LWtwOzcedMU4yn-Zw-jy4ZqUtdG1sfblPCLdIT2Nc3IOUTxfKGREUJeuiyBlJqIX_lwcFm7e7Tsb7vXMrQ7tBpYF838JPDJWvpP1BXdXlyZcygiqpX8EcB_PPISepkGno1y0FW_La2qgHSlj9bcK4Bwk8_JFKdzUbcFQXdIdrzBrfPEtuVlWHs9w", width: 4800, height: 3599, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116802824535888485591\">m m</a>"] },
            { photoReference: "AWCwydgeVONxSESh-OcjGz1gVN9pqnhHSyX1BfrkfSXC-tK35ew0v3c7mATeJyVuEJQOgjWi1Kz3c3_y87n5iq5f4qrABFFf9DWtklcW-Tn2Nrsg64aWVw-uxIausBdIgWNxBIb9H0m3qnP2_gzSGX4AVe7ylwylzW-tVQvCINSq4tFhwbYpPYl4g7eE3H0xTuLm2GHyGQbeJZNI59uMLotZHnV2zH1D5ZXh2dzewoRMFCSBTjlYkqz6gK2i1RtJiCZYNQoCa6PYCLytYHhZeJ1gktvwYfZSqNuZVxgAXsdvt-0AQXMu8KgpnXRBPNdNn8HgQpLVlCCwJHENfDrbYQ6rId4WDNbdFd__3MWYL_HBU1bN5UUeX-QNPHMjEqG8rJr-pEmaay9ZK23vhPv79qBTp-Uw9uN9i729w-9h6uRJsWtDXHlR5cU5U-ctX_PnPwV-", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112855991905581490180\">yuuri n</a>"] }
        ],
        summary: "다양한 메뉴와 훌륭한 맛을 자랑하는 곳",
        updatedAt: "2026-08-16",
        highlights: ["모든 요리가 맛있음", "맛있는 밥", "다양한 메뉴 구성"],
        tips: ["새로운 메뉴를 시도해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오전 1:00; 화요일: 오전 11:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/cocha0129/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14775461560185263662", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=cocha+%EC%8B%A0%EC%98%A4%EC%BF%A0%EB%B3%B4+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "미식당": {
        photos: [],
        placeId: "ChIJgbspbACNGGARGNqwjF2aKrY",
        placePhotos: [
            { photoReference: "AWCwydgqtHFL3okIQiJmNVFFgbGU-Z_rg3RpDZLq-offYnKLuQ7uJ4Uwo8Y4ZsUcmsI7CYUSSB9sGATRjTQRs12-5w0-dEg6Or3xchP6f5a7K1-MJb9B6XsTXDZxcasJPQITpufxQZPpdJOsMHzx-GypFlmw0LOPUGcKC2brdme8JosczD3q5zKD5itVINL0oc8sauhaxcrgZJCojTzKxtuxfY3PZo4gDwwXq9BUXWhrmXXXPSwJ6KmDNZePH2-jsw4NuIay6w4ZZerhzH1iDMqztyDrdNWjycCjEvG1uvcwnRqxM8WtU73Dk4vMz4qBZxIBOQdiN36P5WI0Ah3gtMZCM6i9cOOQmVWfYMZlvSygEtFB1Etv9SwTmpCqQJ9VgsUrxvRo0HL8_DHoTqlNc_4frGCBk575NfGAqzCHBlNjbwQ1_irvhoPrdgXjqHEnu_w0", width: 551, height: 636, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109579180947607672772\">ミシクタン</a>"] },
            { photoReference: "AWCwydjwIwRAp1dUidiQ8K1SwmqKuZr4HBAXNA5ygk8CaUf3SRsVQIhCKTaPtyJyN1GU1YxZX4G48hlq56jP2tSUp6rtFg9I1r9OndD59fZqZe9_6WBpV8EiXo2BjhxSU69aPIn7JP7XNySztYm7oHazAMdVilE5A3v-TG0FG3Q9rHVDDbsnPYjjOu8yNEIToNwdYS7sQI0gN1SDtC8omMWSLP8ofkQ6j8OsWeiSH9ZhQImH9q10ovdrD1hOYgDEK_Wsu5bmUDTsiM-g8nuqv7JX-Sinb1Vyuyj_N-Esr5-6w5xKcSztQPQGB5ZVX5DcDv06-KYmmT8P-Yg1cqZPom5dPgKeO541VIfOb0xj3NJ5qfWxyaKK-WbESqdhg-CYVjvFQbDg_83pBGFbx6XpfqhcT5RcAnK7V11xtgsX0NdVODyFDw", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109579180947607672772\">ミシクタン</a>"] },
            { photoReference: "AWCwydiqsn8vi9mJy0RK8u1LQcwavDnk1aPnIL-Vd8bApv4reXGGhEE709wErIMnvToAFD2hmfhUhdBLyq6JuZj9GzMaPd7NR-fv75-sAOAty-Uf_d5cwEC_ghfZi9c4PRCPGQEeTOin7GSzkwclSXUcIvyaIodHLTWRxf-87Lqo8uaUyHevJY_yfmf-HUF9QW9DTRzDv5k7by4Qu8zVgxyocuyqkK1mwOMJ-h6Jt61u_claeYwmxk-x4GuIKcUfuiIlWT3UlgdTdygP7xdCAx7itx37iNU0qqt2YfTwud7MgBIzH7BbXAXNLWTOFKo-PdBkSNRSYLVVRsVfac3Za_0rJxu0wnoSZ5iJICbhXmwL95EQ5m8ClXht7yxmD0Gj3KaBjgaaN124ejDl8lvFEd1AzsYzKtamq_cVfvtzyNR8R9KySvH5Jwnm4q6FL2Q9xK0n", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102024886003270657735\">ogawa shin</a>"] },
            { photoReference: "AWCwydg6WP6o1iRcPuhdry53E8_CiDrtN3nnCBp0FAZRoch6WUdBMitLpmunC1rzPyuNJAQKESiYkC34JWAUO2IHD_4YTpEIzjHr5bcORWSlEuHC0PvwU0rU5QzucFlAwQQ1oFrEN_HAwxxT2rWXWmNsMbcyrKXPiYlF902uKEFEmqEyDY6PZiSkyti0RrmB4bYZ9_KUQDXgAzCrEUcgD68vXj-iN2-Bt5gOEuvCXSG8SQZteLpp-hxgd9mLmkCwwCdcv1RXhiBISLxHySL7Y8DeMsd2rTjJ8XNrqJOUHSyF_TiL2a9Tt3f5t5cd7Hj9OT6W1DixsC4mJHlnMBJsLT8GgciXO72uswDuLxj0MlZ_D48Y26lgE9mAqRxOLrxmbJVZw-CEWgfdR3oejcI-pUrrKIRdGUwFZXsU_XMi-S-i5Qyytim9ySI8ZoVHrlhP_w", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107266038292638007052\">がりまる</a>"] },
            { photoReference: "AWCwydibqM88W05DSdhN5xhtiNzMc6HdH8NRMBs1X4dwzd-Wm7Ks6i4x6ANPUrgGYZ-5wFdW0b7XAqAyJ9qQbVOP7cUaZJ2YZdtc_EIRRUuyLIIv40FFGXBgSBCh7oEeJvb-NMFIeXxJV6YAGWfixEdNGwW7-WgGQ_DdyrWRwN7ql3FS8mCSMWprmjgNtEtrQMsCHP4s-F7djbUhmQfTP7Dq-7sPxRUMOPcVaeExw8kFGCWGOG6ycAZfv4X03bO2ZOLekquUYUhqV3Sg1xTbB6bnvH6myhr57KbHuXrF8AUwkAmX4ZoBoh_5hRWx-gSUyeQviG08FRFVTsJs_bTp9LwOLFZBG3Id83CTNI7eCw0Jig1fVIs94-4Wx4nPO5GbmTrtk-5Uxmbdoqe028LJBqiXtzdhPlxKd6aFbFvLJjALLBf9vEOm7mb1hpuo0yQ9h_14", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102024886003270657735\">ogawa shin</a>"] }
        ],
        summary: "합리적인 가격에 훌륭한 맛과 서비스를 제공하는 곳",
        updatedAt: "2026-08-16",
        highlights: ["높은 음식 퀄리티", "친절한 서비스"],
        tips: ["점심 세트 이용 시 가성비가 좋음"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hotpepper.jp/strJ003624381/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13126473790507768344", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%8B%9D%EB%8B%B9+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "요시카미": {
        photos: [],
        placeId: "ChIJVVVhhsCOGGARRyUgGMUOAXY",
        placePhotos: [
            { photoReference: "AWCwydh6wzwnBveVBJPGEVh9gCm-f4HdK007fJ0rRGIWT0fmzGbRqNnAzq2pytNvEmLbJHx0yoBvw8fiEDbuzvr8J7A4YlOT6bFdqzg_pbdTBNTcCQePebXIAzPQRaJvn_OypncUVy4vIlwx8bvMryijBZINGmbe0QOtkQfLG07q0z0Lzk-M7NLwZYUPqtT0v27iZWqCFRCLs6TCRTZ59EiWLRJyf9HB72kh8FFzOPSmHecthd47fxW7f7rsiFjdlJiB3jH51htqFhXxe45rfMYBiXoPNm5ePNQqgG3jPzc2TySciWjXmY6oMMcfTkEzyTu6-2ZndUNUAOfn2uBUEN3M2Coi5q0uNd-Dol1o7NxgMN5-oSOTle4s9OU5Vbz0LMNpR3yRDzwRYLKBwaon9yIP2aT2PFGY313GF6pQkNi7CS_tu_R9wicBJHB3_eumjEUa", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105092816793268081337\">くさまっちhideo</a>"] },
            { photoReference: "AWCwydgLNO7YYs3vOxPlM3sAstcjPXUV02W8ePo74dzGR6L6zwI8VmY_nxDk5Fp2qTMtnJLurO9gFKk_YXX3HGVVIZxZihRdbtsPEX8lH4ATDrfqH9fArPMXge66WGbbr_84QwLw_xkrfa8aXq4VnvcFk-hsIrzVWEe5lrxS6fqQVWXsK6NDrQvIiTtoIDyKsuixsQiMYtxx6mbDNo3XSoDtw6bb0gWKwkqIXRNFkgGOna9mLuloBdtAj3UBV319RkdUZdmianpjKRHAgjY4AJB6po6CxVbHO7et-YwOOhKctqfOB9i7QuEURv8765XJgegijdayDQFgqTWevYrcYurvjoKKlCj7V51Y4J-QwCe7Yy6Khs_pPEqqkPCnWa-9AxHuXlg7sTMUMVkzWqzXGw2VqHRd4vNfApoGdlKTSo4zOCRr61j6Dd5kIAus22w1hQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113799510430292867332\">Tomo Yasu</a>"] },
            { photoReference: "AWCwydhVLf4zevY-CyjZ4AKhynOp5EflslKnzSxodkNptccjKY-b1vCDzxRjm4JZkg9dUpqQD54t7UvjVEtgDmLtgRN0gpxkO7W7pFZ_Ej0h2YZnEETUdrZbBA_slg_bicWAz3zKOi8c5g9q0U3iReZOWJa8vq43BDpyT3WtBsmiG6ad3B39S0Mm3B30teuATapBoUmYig_msCMmiTItIs3_ofhkSPdmwNkLJTYHVkiRgDOADQb28VbPx_zyXwY3S0sbKHYo_YlV5qSyQya7oQmMy9A_0ygaSvMUP66PhwV2qnPa0xw603R3JDJ39VfQX6tOvgWVjESpyAKGurvV9rXZyZdU1aqM9ICH-k7IX1W80rQdnPtzQ4cLIrEZI7rARuXIQz3E_OwoRGW0C7u7rLZl2RZqNRYg3myMQ2S5FYKuJYhYNw", width: 1484, height: 1104, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112393461758366518208\">詩Tagalog</a>"] },
            { photoReference: "AWCwydg2eNvZUnlHyKL7Hq7O8IzlxWQC6QJbirklyUQHEuAZcFxE4wWfEDH6KGCxDxSGSmx6HgyjrZE7dfP3rS8vhCiVgIX0zJwsaTDUTjD8ELEGGF58_5aUentcwSQuNlKHL821s1JbZDXH6-enjSjkyV05d9_BvnYg0SHm7sKN9LFu72QA2EUkRYRXA2h8qZH_XWycoZaSihuTrX82oLmdn9bXTbub-LOAceLaAem6nqiocV34oFKarMYhIq3RsmpzrGDDmRI6SuTQomT66zQLYz01O4ZmYTMLTd0Lkvu33eAOssyC2S0H72n1BD-ytFbmjEoAB4YjnMTHpvUlWl7hmqifqJ3preRyi4OVS6gJueiwrKwtTaAg8S-YOpyv-_O96QxnjEPbLt10KTdEo9zh_V7Ijil90g4RGPwvZpw8R5xiwBoijQTJGADcC1EXLyWn", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115030944898249305272\">GmbH Roots</a>"] },
            { photoReference: "AWCwydgwMlMDybkTdL5O-SB1P9_OOzz_LqXCjCUERfY4QTgfMo6MNb00c_rfsO3IHE81t87ilcJQcbz7u4topHqHI2HFSgSzG-VS-GiSPljkQeF_RDvl0VSeqePclYPK6MGqGcRqk9urZ7wqfNuj5pForUt1Hq16d4KymcPbwcQnESWv1tmMi0AKqLaon9Dj0-BHVwuJJ9EcKQ_xxs4F76alJeEGjiuVkGYGimGDrf2OcmcxrGhlrvV61BIAuM1Ldd30TCxhe_5NWr64itQ73Kfc6feGjludAdOzrjbCyet7sYl0u5lJhmJVH7gDFYzHkEhW2f6KmzpZ_cm4sNml3ISKlNCQndyrW77NOHVD4HuaFREtW4f6nehY79VK6M9UEAcZLAdYRLTuPDFKTGEvYmmjUYU9iW2GXdikMQM0hU3lsijV4NKqdKfcXMqDJo6qkYfE", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100266478346072336740\">Ikuku Suyamo</a>"] }
        ],
        summary: "가족 외식에 적합하며 스테이크와 오므라이스가 인기 있는 곳",
        updatedAt: "2026-08-16",
        highlights: ["두툼하고 부드러운 사로인 스테이크", "감칠맛 나는 탄 스튜"],
        tips: ["주변 게임 센터에서 대기 시간을 보낼 수 있음"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스테이크", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.yoshikami.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8503093811128313159", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%94%EC%8B%9C%EC%B9%B4%EB%AF%B8+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "히키니쿠토 코메 시부야점": {
        photos: [],
        placeId: "ChIJsWJ80PiNGGAR8aSF8OFJeu4",
        placePhotos: [
            { photoReference: "AWCwydhCEobOCRq9pY5XRIVyv0I5SizLTAWk8d-bAywFmIit6Jp4lm2ecSl5BdvxTB2w5iyTYbjcslIFmlrUpzNyScuOttL90upVOJ45GnDLMOLyUR3LBGlOBQX9-IPAZvQ45gQhZBp1-1CevsEznlK0sAuHSr8UWtBWJVOvfbrVuto6u6lBbOOvRDVjmSLCUxjLK9Nr_eCTEkWDgHq81ifrVW6fnWshiBIzhP2MebuEwZyy3MqL4d_xT3c8gQ-wNDwB0WECD1YbZaQ8eKkxmh7ueLTsifqq5rgr7jIiCBxXUtl9bGrF_Yr7GEy03p3_9prus27ZN3HtTxyE1mpn9rzPmaxjcmK3_UhLo6v4L2uFvC4fb5c8d0HrCYUqLf48kzdw5OOsCxd9AdlB_kAJOb_QkNyhzpNWASOSYDZXN3Zuenp_Th2lp3A3IkyWE4iyC4di", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106228427104910709499\">挽肉と米 渋谷</a>"] },
            { photoReference: "AWCwydhb55IxGcP7YMLjKONkg_GcOB-ZcxgFtbDy2eCDTDBT_nrBqFwK4PgechFriDCv_13WWI3L9UlzwWfzSzVUeSwcxMPHr_jg8ACmVkePNpgAyVWqpylXzMPiYIPFNwU2nXofOurKomM3F7Vla9AyEAuDe2QcxUS74xuJnLMWtZan5Royx92kpewmJkByirL0LVy-2z_ihK8X6Zd7m8qckhN7o7LMASGx4DvDlJfEzP3CuDNLBZggE_m8a-FYq9fdS0od0_3RGu1T2sYXuWocUFd4SqgIlBYcFR-0_hi3R4mxTQZPW2jLSqB3iQb-nfFyT92TjlLodwjtIZ0sv1ojLb7WcuzOoOl6GiFsXVJD9kA7-A7JUoowd_fV8NQjr8mpIq9EFPO1sMCghVguW34p8ftM7u6ka03UtVOOkdUlMa3kF6hgrKeS7Iyr6SlL6spc", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106228427104910709499\">挽肉と米 渋谷</a>"] },
            { photoReference: "AWCwydj8x6JuLtTdSTpnS8Ac-_S7E05g36fwDFiVaJM27a6gwkZ3EAc7o3VxXLdhs95YRT3d7vAPdeqUfjSaJG80HGzBDl-bLfKM7OCoKqrE-yZWqgHq2ni1ea4TPtME6H1R3vbstuJVauS66PELN52t_r8YzGx8d-tTrr_njbCF6ZCL0ByzHml6iPWqoSN5et0qe8NGUUAEH9-Cd9TQ9psvGeKpjhRkhE6XY_OzRsPuqbUWTV7foVzZ0cMiRKJH-BKwmneC6SqAuE27CueEvuVbiyKTGQd7D01W4KZM2f1p8y5iiCUArVpMqPCsO_11BhlXW0eiKOndSVGdpj7yBy037Zd7rUDHQecEdl13ZMQUgdNmZ5jFXKtg1NnE94aH8l4g6BhW0fLjrO-y-LECJ9mzWVVHgaqTFDclVtSAqLHW5m2gMHJDbj8WTDUcHUMxRWlO", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112915805721236462320\">Y.C. Chu</a>"] },
            { photoReference: "AWCwydhAQizL0nSiQdc0x4Bx1rwXhnhU0D-Ath7G5PQETlVsFXaohSltWwJACUXu14uevTAAhdpO2qixCsVDrKrHXJ4H7yy24G-NaCVFVucdCuLECr6g7aBLMUNXC7ZT5O3tbzDErEU9hWLeQIMIYcWs6vkk0R90msqbOSFGt7Eo-dGmiGIDuIguuE8WEiOXSIkFRnmLeg3ZpsqPWWZa--7g304UjkX197C2pdkn-ebHTkFYD0rcKwOKLtySu6xjF7c1LZgRY0mom_jSgTR7BtDBKfaHe9AZ_U-HkB9x0CcUFJfsPExb-IlxhbC3gRcg84cQ-_pTpjlGgqbviadOZXOI0XFq5gmxDWFM4_thEIU-sYY91eut0M_o-jiQFw6TeT_sGeQnUWwsWpnWDYQNex9FQMVPVdwyOg0j9V80uowQRfoorg6pIM7zEu-YQKgsoH6D", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105978097370147330769\">Keito Yamada</a>"] },
            { photoReference: "AWCwydjYroV6YOCgYibsW3CA-kt_Ek2SzfoKZHhThiNUuev_5vtb16GUuYQuIJZpasdIGvZQrt7OdZzpaoaldNhiiCeDgQ1X7EuDpZMthPUjoe58HBbAhEAtT0lRfYvF2Y_mzuHjr7Xbcp1NgMJwjTk2RYfd7daCjACi1_8-07xaGmHfsMcAShLqfxYHL4M5ZKI24ZtKpOXMv57KRcQ1vWWRKVgEsDLmjHij2N4eUQaRQWsQRZqwe63zw3_Wli5OMRtkm-IZjLIS3SEey2hWuIgJz2dGvaCLzpIeH9h8alz-sVHuxFQAz4-McdRb0LyaRgUofpvlrCXZpCJhlZqMeuuLp0ARM6ww-ITQloDsrGi9F0UNwFkaNOqWlRpZFp3nt5PimuILK2sMYn9wSd8UzSYHl5NY8texKZwRRwWEUeLx4J8hnQsvdJ0SZOjGvaOlufQw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105864443303799489854\">Claudia Mejia</a>"] }
        ],
        summary: "숯불 향과 육즙이 가득한 함바그 맛집",
        updatedAt: "2026-08-16",
        highlights: ["스모키한 숯불 향", "풍부한 육즙", "능통한 영어 서비스"],
        tips: ["예약 후 방문 권장"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "함바그", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~9:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hikinikutocome.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17184128562937308401", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9E%88%ED%82%A4%EB%8B%88%EC%BF%A0%ED%86%A0+%EC%BD%94%EB%A9%94+%EC%8B%9C%EB%B6%80%EC%95%BC%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "쇼군 버거 신주쿠1호점": {
        photos: [],
        placeId: "ChIJJ7Wde1KNGGAR9-XMuzYbQo0",
        placePhotos: [
            { photoReference: "AWCwydizIoHHrgJ2midMRVizw-Of0esqcUugNWCKGpMQMDULdI4k431ibiGRoJfvdh4nkjNgI0rjXd0JuFJmf8PCpZajrI4anqJ-zAVD-fFXcuJc2zGIa01vv_ikRmv4TmPuHCc98EHHb1JbvX0JaX0lyM45ViXz1jzXP23uonYlNgffEgAa_Iv5CVEQNjxOI_INsSYxiI4pISLrfF-UaEStTgUOTtHro8kUhhjGDCf14W0uMlmJRxaDGXoIqk51kVjOYYFxea6PxMMp45lDpNJSH2xVgoQZ23x8VhlPvkTftEMTPMMXflHPMTKiv6iMbb2C9Nbwft9pt7HItC4yxpwNUbL4oBvIsPJ4ECWoD281GRuYj_2iPzYORTfjLf7I9R1pwx9kdhKgK9hE5Ch3ju33dyRKgRR5x1tMwzo6msvkCN4NDA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104204065341707823329\">ショーグンバーガー 新宿総本店</a>"] },
            { photoReference: "AWCwyditlD9QW7VIHm2mExd9eT6PtfjzcNA6uYo7_UklJAQ2Cf1gpKB_4T01OjXqBjR6Hxk-AmKwSiIeVSxgKiHFGXzeScCNow5e5u3-Fq93yLjV1nxNLo9HyLa68u9PA7k0D61q2NKJUVSE0qiI1JsKyW93v69erMwRA6p7_yMExMOJ_0UJvOUdtbHalcIa-ZYpSwgDbuNFwVukRtJVOd3PtWf8qAcXQXs2YGRydUC2_e2AUTN_wB1KXoSGQ7fJxa-VhP3EEis9Z7cqQEE1hC2lne9ullh9ZY5YTIqYfxbxjMBs8PVcqO9EzTOzauihGJd2jruQWjPmfDuekKWQPmCtEfQsK1HDo7cHIpVjkwv5XCKJe95dc8o4hZj0iXsgrE2IGN0B7WHJHyYMa2d5c_e5ljAUha5rPo319nj0Dx1qUOeD5tM6", width: 1141, height: 936, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104204065341707823329\">ショーグンバーガー 新宿総本店</a>"] },
            { photoReference: "AWCwydgFqwKfXbr9eb6i_EvahCcnJmgZv2Pqrhf3squWNOp-E2s8CegrL-iWQFxVt2BxKQbVQEUC89ma031UJkL6ljs3OXyEeEzAXRmOvX4Jtd9yRSOFMi_4gZMDLOSFNEe_YM63soNxJQOm2SR4l52LiBU_awn9APPHV5MnwJrz5IVLjXF522E2FcJhRmEWhqgvleX028zhtOre41X0U2-ULTd0nOj9SLdufWLq7N816JnR75W3c7_Hx9MxeP6NTopip3phoJyiD9FA73rgtmf7eMJAVf-N1S_XFX6m0dRoIq19hK1MsRQfa8VAeEdVtITHFL0Wbi98nepyAOCcQMjbCHY505xfT29g0nMyvcnpK3XKTREHOSzebWaxoCVERl56T-gSv-Ch6rp4CDa-nDE1jNeuzCCb7tT_u_hndvl6rYOKssTPd64cBVxIgiVw_w", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104120287384263353943\">C K</a>"] },
            { photoReference: "AWCwydgYfWuMRj1trbwXxxVvvm22CY8R4KoNMljd5kcBKiYXVeA8zCujDYsvapTuFOlyIypwhRI0hLENnB80YX_Xcef6um2xtfmkXQ2aAn6V7dO1R0CW0voT4jPjATsd-smguh1-V8ThxsbmkfN3e3ghRNjzwXmxXfayLw2yRHnAFLbFWUghE440ihtaJnS_iRvUOSlp4E3EjvigaT_q6r6QZjzLXeXLXyD8iJcXOWu6BziefS8ntvHRn5XeDmoPwIWbtn-TdGXM6Hc7z1HIeLHxqCnNFWDk7BGLV2MyHVwzEz-pTaG1dT8O2DUXHA8dNMuhot_i9kHvgE98C2nGc2BOs7rlNYqwEeE8-GoBV33XP0D2rJBKftHyJCGf19Cq_zpML0HJEUyP3LZ8JVcIbzNlpa3mraNFtpeOIx64ccVM8xMpRRtwtVPnG0YfQt_SB0ue", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104105335887169411051\">Tanja</a>"] },
            { photoReference: "AWCwydi-Kzq-Sr-ThbgullG4XY4uLAmNmZosO9jYoYjw1Nopk2ReDGfor47CenV5jYipIc2YZwF2tDOUL3yJRq7jy6FOF9_MXIRm54PQyjfp32sg_bzzcf15_zLYlCw8oq05f8YKJyQDZbLRsqkX7oOcp4zO1bX7aI2ICrKyhXaggDozYOrxvTMo6we3cdepVDFQlgKQx-4c7hiUkwmPUg9zixnqoHZAYgetKc-mGs7BNbPoqkECJSvVF0jrrxD_uQC1zUH2uIIaqvXKqCv0IbOjVbHkNmcVXmHSNg4J2rPUm8mBzwFbl_uqmtsJ4l8rlAa4L9MRXHhAS-9Bo43JRnBSDZyzx1ryrZHbCQmNRWJQuAK-_fn8pHkDN66-L4-Riwx1h_mLqwIXDqzW_p5DkFQJuQOj3Zvhwk68jo76fj5jizAOEkOnU7esg40NRvkaJwGN", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110274964422859255515\">Monica Irene Atienza</a>"] }
        ],
        summary: "맛있는 버거와 맥주를 즐길 수 있는 곳",
        updatedAt: "2026-08-16",
        highlights: ["훌륭한 버거", "시원한 맥주"],
        tips: ["예약 없이도 방문 가능"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "버거", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오전 3:30; 화요일: 오전 11:00 ~ 오전 3:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://shogun-burger.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10178728029703693815", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%87%BC%EA%B5%B0+%EB%B2%84%EA%B1%B0+%EC%8B%A0%EC%A3%BC%EC%BF%A01%ED%98%B8%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "야마모토노 함바그 시부야점": {
        photos: [],
        placeId: "ChIJe9zUmFmLGGARHfovh4p-GrE",
        placePhotos: [
            { photoReference: "AWCwydjyfHx-xhp19581IJceFa0WQTpB_vslz27qz1AIiUlfkOGOsBHXFbnDtIhNwYvbRnrPEAf1RVB3HFrozGD13pXAOGAh3no4wxAXV0U9nIg6ImTjSGi7pEIM1ngLFgdohmPZ5cNI7nyo0oMhEQ03ZYXUWTOr-y4ZFFH0Pe3r8qzxva26A8qoAIazXY13PrdqLU6ks7wDPS-8TRIA8BEAofF-49SapnMA9Lzkv7MW7LeI_vTppDQ4Sc731-7jU9Y9_gQ_Hmk6wCsSrf-jymNvuqGqgZUTrroRrcK9_zbCgTZtt986dr_WK-Z84khbSmi4KJRlguaGKmYU_bA3AQBRjg1lnt1zwaq_aXvKWpM0KuDVvNo4qWymVAmk0FNlnQAZMcI02KypZP6nocg21pZKMYes8NbXHrC38Z1xo6lFP6_k6gKbdCAKXJ2g4sAIbA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105868723454648032339\">ゆう【寄り道メモ】</a>"] },
            { photoReference: "AWCwydi9V5SAIQk1qJrRIaThKXM4d149-8ilgKCY7E_Ifg-VlTLO7NGpgkzCpah46vExoTHWXx44e6bqqYpCtaRlMyxgKdTbQ6JfxKeHGP0xuwG2b1QC7VKrXnnci5PwEvvmgZm6yadnpWpm4JRW1UyikoTA0en2Z4cHvtLyQwCLQBNq0MJw3W0_ggFX3qrbQSF3OzBguGq2OUS89kE59HnJ1X6lf4_KfpXgfPz6c8sWyR-RehX0wt2aTTGvnQew9N3dlkITg-XnbH_Pt5tnNKS4wpe7xvpD3OcW8Zcl8zplNl8w1XSSEBW2qCzUBa16--DNoHiRUXUaDZQjK_7xP1-bYuhBq1iVA43f7bPIKDnrPx4lpfqHR43zzH4OFGP6wQQZ3-fEeiZglLVAbZxqX9CWL7wZCiyoI7rA6UWzk6dPR8DxKA", width: 2048, height: 1363, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111850664757263281874\">山本のハンバーグ 渋谷食堂</a>"] },
            { photoReference: "AWCwydjW_SsxY3PoCWZFa4gQyHgih4uNL5KgMxWo_uF-M39xrcAlvSJtT4MZcmXNel9B3nq63fgwzcDQEOQqYABR139zPQJOn3KiLtJZPsd5qQ5yTwDk8MeeAVJZ5HFvDj2oIaouIo5VudmxYiwwodyaxOA7N1LUvPoUrr4SmjLOmsi7puoxNhPsFbJmfP3Dyu_IFI263IZ0d4qNDnS5Ipsxe-_fKIADgKtQ-eDmh5SdnvvIStzRYLyXgAv8w5KG0bxrIlVNElPpfeOFrG_GB_pNdOotYHxFxlfvRBfsobT_UjHfQ3PkSBWu8NbjBMVSRqSEQ2PB1iDrsDsjMD443hBYVbu6C8dXcwp0-RZTZQNNVvIUfbHdjkUQKrl70Q_D50CBXqOt9D_t3G-tuHhep3qYHkmbcQjAsCLQ7yYXqsNWe__pMW6tPZBANsGbQJX-nySC", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108226865242014077553\">Wang</a>"] },
            { photoReference: "AWCwydij15cmU2JJ1eO-ZOzeyodYLKNMo92h0lKdnoF5kks3PRgi551pZGow23JjiF-_zXJrtATb7wnvA1ufIeTnySZ49xj_07vonzk8bqXLAvBkEx-vI1r7O7xp-oP27GIWv8vK3bKHyXDbXDzA5AkB7rljR0klBeepGTYGFIwSYKKOpYKfLi3f251s5kPvShZH6hPVS1ToKrTGLbUzt-me3rWcdOmvoSGGE2VVt_c3R5eEpnufCjSCdu9hmneycwpDH7nTqnDGyhzij-5rcPW5ZFzEf9-ii36e3IoOZklu0x6YYeajYHb4OWfptCq16uQlA3FEAs7-xHAkacDSgR3AuG1O3BPlX2H8QEwYzryrt6nljxEVstfrrH9itwNmyaF-IlC1voz1grTUCjpJc6CCvxkyjvjOJjshcXeSG-u6Rw-Bbt-833QcsNH3BQLG8chL", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102897781687945022809\">토마토</a>"] },
            { photoReference: "AWCwydjMmX4itoPyNWyosYWpzFUvJm1BgUW0bS4x-LZo8uOuHJ-kr4bJXgKBNHwCBDEwV8_swpdbcYeXFxBgn6cCzWt9HGLlO0_6ZExmYx__IpRSvyts_zQslK9OZP1tRnWDaptncGWx9-YDpV_YMJEVZ9YJ9RYjH3kbiqOCCFReB6BH2tODNgUEPce6dFD8OwNEVmm_4nZPAzKipw9y3EugD2J2jKg7GskiGVUSQMdSCVw3vvOFBVqIhf37FlWhomYYYhH_q8P-7qoCFRzH6bPKk-oFNuEFuS7atRZ3rxYKSvqZQg3DAofQLrTX92Wada2v4TP1_xjaRn-SdKr9o7F4EfRwrpOT_HX19w5QKLbMXIGygQ7MgGFT2ZwgiYfx8De1b_4cRvvGab5nPyEb-wQoreEVStvJbFlxGhlFeqGhPP2RMFgiA4qp9Q", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102341702837103064439\">IGARASHI M.</a>"] }
        ],
        summary: "육즙 가득하고 건강한 맛의 함바그",
        updatedAt: "2026-08-16",
        highlights: ["철판에 조리되어 나오는 함바그", "친절한 서비스"],
        tips: ["현금 결제만 가능하니 주의하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "함바그", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.yamahan.tokyo/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12761651627546376733", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%BC%EB%A7%88%EB%AA%A8%ED%86%A0%EB%85%B8+%ED%95%A8%EB%B0%94%EA%B7%B8+%EC%8B%9C%EB%B6%80%EC%95%BC%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "플레이트 도쿄": {
        photos: [],
        placeId: "ChIJD2cueXqLGGARNzYzZQZtoCY",
        placePhotos: [
            { photoReference: "AWCwydjBPwxO2pfU3DWtWRlJZQrVrTC7uX-1pp36MEgBLxMHiBgalc7zi8jnPTE2qI-hEq-KvRoJ2JuIe2NLGnyeHopLeBhGBucQUWs0WNVMMQzNLUfF3Nt0cBFq-yCHFJr1kVKndxMUFHoilpnJlwGvYuxFFaROrY2ppoz7uD6-5BMJ2Tv6vmTqeuTT5WoOeb0XpHI991-qFXMecYy5gEPVxFuKYVcD_lyrzcJXrucVdjA02RKzFporycynSeFqh2p7_MXeQIVF4GalVa5Kk0L-xyhioEvHbrWRMCydEmxj8-5isyGi89zFHWc4t45wYrgzJyFMaRgy4nG9o9TjLs59e7nGPaighsWZwpQ52uBjJQ_6ONKV969Svl626fkII_NJFCxEV6d8cG4_3iTaKtBr1Ca1h3fd9hhSxm4Bv8wm8OY29Vs50purmODzRrpH-Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111652710556415483212\">plate tokyo</a>"] },
            { photoReference: "AWCwydibQc8xq6zIYjxP_3H0eBfshsYUHcp6th-34rYn4rZTd4L8yazSncTwD7-TBZ1U1RzxoJdAHjIYC_riS7T1RDY6JNuYD_C84p7uxI8YOQwSW_5_doC7FIt2tD5u19Q-s2Wv_Xi6QNTx1TjP9kdoXgTqGcYe0VhFY3IURTYUAG05IfStriThDbi-pyDA-reHi4RHHc-DQ1MbqpDYZi1F2klGXkNOOJ8zxyDkH1Ni7BoIsBQiLCQvWSOrTCjaRGmXqrQlJxZfe5jVWHwWrjmVOwtWF7a1ib1eeqecvraImKoaQ_tTgJxvheKH0TXBGPyoy4aPgbpdDToHQRHlMfUPeuQ_iTtmpWQjZy2AYQ-bg8lxE_u79qsx9LgHXZmZpaOmUoJkKwz3KrRgrG2vznTdPvq24CCFJf4vIM7Ztv_6H3YogCcZ", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111652710556415483212\">plate tokyo</a>"] },
            { photoReference: "AWCwydiJ2HO7wjrlq-E2XW46Y2wJvgQhr3g2nV5YVCckcnLXv2Ai9VtLEbjwl3WlF7tVfSWsTdZPpZPP_03NK7DJEQICUtr9QiECo36jTz_dhmxyWBRtgR4h3A945HV0x2cYypyQtLTmz6KEPfnM1jA6fxa2OlaYOaoIYecefQnOftOBN9EHFr2iA2SREFexLsLSmu-xhJAXlQFT2Q0lUcaWshWjwrdIkS8hSk2Q4JcXwxzymT0-xZv6U1W5KApJ0mn5-iIUOJ0YsVAWNvXXRkChYgE2DAj_f01Vjpx2msnXjHvULzF3WM7pHoEXCo810zLe40alvxsS_VHoxQ7FZSAOzYUKwjm2Y4gDv7wdLOZ3KjWrxBCWpDdFlo_0FcWkExpp1aSl-71ECDNLxQMR9rM8nb_o3imUAIHs9rxG4n6h57Y", width: 630, height: 356, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111652710556415483212\">plate tokyo</a>"] },
            { photoReference: "AWCwydjPuv4ss8KDCCyMENc5B00XmHXsTGMmyt_jt5pICkCa0_Wg-Yoa99FMjVOG3ARCeFxDiKmaSbvtDxQbDK3MTZYH0a89wM8es6TmfS5cFfyH0YRTrovHSlhhE4qvM7fCjW_aEp9UGK0VUvuCqPHb-YZzKSHFQbP9zSgkvZTNfJDmRbDSrfuyVbO3lDxO945JP0pjud-GXSiW0Wu44diBYAE0hxky177T72uZYlp_Wm2Q9xiuRvs_9F-UixP0kumxMi0x5QNHZlq9gHgKjUelKbn0a8oO6cF9HShgzBJcElGcXKLHLdxrK4YG3duHdmsPbOR9c6kz3X8d8xZ7SxKI3isYVvguoWqlwnfwvuq2BftOjLByLH2X3tO1P4PaBtb9GQhud2T7rH85SYSzrwRyZExBbTjr4u8SZ9htoWuccFk_Cm1C1qdHePAV5t4Mlw", width: 2160, height: 2880, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102394860087071796583\">h. h</a>"] },
            { photoReference: "AWCwydgPt19imrkTQv8SKZmgEKBN3RME9BFEvZJ9PtTPlN8_lxX5btXZuoNo1T7uW9z1PPx4FJBYAbWTG2BF9gIaj2QbX7F6fMYm0-3eLkUNVPpW5WWoY9-VDWc3IKAZOadWfYp7G8cYPMH6OHMP8kr1gEqd90R3iyR0vfgVrUn4zGcUe3ViZn2ciMUvRajyuPjCtPBzuP0I1ldyAPVkvBcLxIBrSh9Hw6v-pSs_n_VOcwuRLFzz9I59k2ZILZv-_Qri9iCPW9dIHhmJMNi_w2OnwgoQP8HIB1w0RzNBTDCRkLltNTLUpt8Eg_fS343YhyimDrp-6qJdZxQcaK80dbYe9LhzD0dEIQhLg5pH02jb6eypjlDa9A5us33CswGeHADlbSZyIMco1_eYacOow5zIQxvuLaY5YkIklGgMwLhpcy-RiA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105557222618772084194\">keitat</a>"] }
        ],
        summary: "친절한 서비스와 뛰어난 맛을 자랑하는 곳",
        updatedAt: "2026-08-16",
        highlights: ["환상적인 음식 맛", "친절한 사장님"],
        tips: ["작지만 알찬 공간이니 방문을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tablecheck.com/shops/plate-tokyo/reserve?utm_source=google", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2783344443950052919", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=plate+tokyo+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카이카야": {
        photos: [],
        placeId: "ChIJ33l4hlWLGGARDOCI8LI6JqY",
        placePhotos: [
            { photoReference: "AWCwydgudURPbniEQ6AyujWXaweKa91wsp12qYmULXe8bamjZtiIf-l0V28VPqCJE2aNVLX6E7NpRJkHWc09ycwBnGI0DgKIC8EhzakfkL3BOAvflDmf1jji3QZyODVLN73HMYVaCNJVO86uA-nVF2h84xyKqushRu8t-lBL5twkqY-YlLHy9IrJeMRoil5Zoh0OHC_gNLKrb186DzOLn1s2wfDXHboP_benKM13prrfJvKysEGJacVzIfP1t2wNj27HMGDdWeg_oiHNg-CS-ixPB-FpcYgd88K3CjWrfieT2BUEpPc9IK6A8-aKJnUdbvaUI1w-LXNyJq6o1rZNNzQpPbgnpoRq6M-NfFdh9bHRP0szgaivzWH0S1hRt04mLS-EnRchUzGtMrUWCWMVB82xoLWzWoQZ8kGAhIeQwWasIW-6WAi7--njDloua22GREv3", width: 1440, height: 972, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100031797705966666568\">開花屋 by the sea</a>"] },
            { photoReference: "AWCwydiNN9lmd-u5QAUzy-4KleiGT03gbV0ofof5ZBl-K4s69_mzQPWhmtZ3f3Y6EInc6nIkMR2dRJ8LeBamfQQWyn0HBRVOWF_h8yEp_3vDKpDiPaPGCtLlsF5bKKVi7kyp4XqoM6LVZc0pENSdho7s0ODh3eDPkXdJFe54qyJuDcyTizfBbSDceCp_xbfvTEzJbTP8RVkucpIlzpZlucEyZE83hG4MZsCcCqE5K-50mYdCD8PJnc32ZkVhiTU4u4vkKSb6Kc2Jj7m0fPeoLX7f9yEPIgzJkFVrEbIImAaU1HfxBT2FHkhRIdDyvyoP9DWJSDV5aTvZgYgFdxM7R5w9jvggirB82kHvRnWpDI3uqPrlDFxkV-JqAY03UDhO1vYqzT1qBaF8ZrTnVRYuj4Tp4iZuKJ6U2LohuNZ2mD7MlPbcqasJCcCUXCAsR_a0kwC6", width: 1151, height: 538, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100031797705966666568\">開花屋 by the sea</a>"] },
            { photoReference: "AWCwydgZr4Wfchq91_FaPGURK-eyp0k3Dx6fzggcjrCwjAoXC5k-2FXbRhgPMr2vT_PxxRLRN7jiNDlMw6tktcTpe9bcRqbR6AAysDTJ80tRuaDkrtBnemMPfFQ3hERVnfc7QjwjEmplGcPIYV6TKi1POqCi3aOeuwlUlF8VQxdhJx__NVjpg8zeIfI1u8GxnG7O_K_XrIbWmKNlsrtYHsApooNr1fCVNnRRN0eA8ZxkF2eYlJ9QPOAlyhoAic5QkgeLVQ_aM55HaGtBhcC87pbOnDYynGWlnfOg2YxfwxAplMd8pftOoTSzEGElUQAwhT4iQd1DastdeGJ4FRQyWfuVLTMFv7q8zM9j9QyBt9vZKl2FSxK9LZwgsVzRc6noFeQhvCUnDAy1HS-feQNU47IL4mlOWcfjZ7kj-vGJlsQmX5zN3E6Vlh416rP_8-W3R4-n", width: 810, height: 858, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100031797705966666568\">開花屋 by the sea</a>"] },
            { photoReference: "AWCwydixEBJWBzBE7sHty8h4itQ2cKIM76nagZdgc3giMbgOJrWy8YdSdbT841EUmN3Q7rQDNL1zUghRErR_ctcn54g-HMTAe5gzxBkyKWB1TixyAhst0DIguKjzX5RXVcQyuJlwdsCXkDS9tNjNcM5T3HgELFs-ojEIXBHzESHPuPzslBpPYtaRYuj9cpD-8qv028kDguWIN6ifFe2F_JjNLDc2TywyvZr2gBn2Rlmbxv9LwAIghA0KbvUUI0OWl_ZoNVbbksbKWo8DeP0ze637bMQHj322fsrxICMNCGjApoFGnqyWsneDeqTNP0rcC_JcM-7MUX7D7dJ4Plp1OT73c6cv1xYEpHiay2Bgs9X0nkKzbevWwwc1MuJEIyhYyq8U0JAXh7ByMWf_ZM3wWCN_dJ5a41xZkYbeYVWcbb1bIWMSNW7-t1D_gjfMR9ClmjmC", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104004204141486221733\">Mon Garcia</a>"] },
            { photoReference: "AWCwydhLxYWKlvNP0alS-C1-W6ZF0f5TQRLMFhzl82tuysYxO_iLPJgDACRiytrTSxHH7JMPVQIeRox1_q34l9SYYPPtQ1qlcWEj3Hm57dRqSwZGXGq2NjpzuZcQtMjkDAajUpBbWbW7WwXn2yAefRat5HKl9RgRTh9RdqeB1TB2oa4_Z7KmKZz9MLvm4yoJpZipYQClkLX0A-wV0iYPrEH-qAxLbAw8oXbktPsO-4Ozv3X4gtnVJJJfdIvHdnQz-19wSthaq0l6dMdWRElxX5GbvBixHtmoe-zHruzPNCp2Mel6EjlAWnZn8gXYeMKShqJeAXOK3WJd4Dz0QETaIiSxk8BfVVctlT2724Xg512tASYpfWzYXjzikrKFLK3teOZlFOAISxR7PP2OzcZGQsWC6ynm8rGNnmS6GGKLM2T9e8SvSmeFpIjTTKdEjvpnR4Vw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100602871386432090461\">Jack Wallace</a>"] }
        ],
        summary: "훌륭한 서비스와 신선한 해산물이 특징입니다.",
        updatedAt: "2026-08-16",
        highlights: ["신선한 해산물", "훌륭한 서비스", "매력적인 분위기"],
        tips: ["신선한 해산물을 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~10:30; 화요일: 오후 5:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.kaikaya.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11972321199625134092", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%9D%B4%EC%B9%B4%EC%95%BC+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카이센 토코로 무카이": {
        photos: [],
        placeId: "ChIJ91tyuUONGGARCbGRh8EAjCQ",
        placePhotos: [
            { photoReference: "AWCwydgaL19y8e7H4mEBoiMRy4BjWwrdwNuJsBxBEawOFjDpB1krJbJ1Lrot5mmKZeHvWwvQ0dem68jdMgLUJazc1FSKzcmtcv5g0Ktdw2LEC94apm5yZNWdtpaEFqCJAPE4g3bvnl0jgd8R-eCBeUHO3mh324eM1GzqVLvfec22al_Q5PG4NA8J7Cpz8sxlSxRojKD4a3SzmLuQD9d60cmyv7GZwBqdcbKPAUzEkyc9cJ4kpJu0bq8MtEcXi1aoHR8-0Ggg6SizEo4pe8WQLpmGdnqzVuA1T0l-sRK1WSGbR5qVUw6YzuY2gYc0ue4l4k1Dt7WHt3WQVVJ_o6MSdGNxMAyCDY7OxTlNCFSPtyNg9jic-lzdJXwIe4RlnjMm250XNFUyL2CbO3PTNYmScQsd8rDYMnx7ZBxhcbnacCCDhcGmhye0uCs84njQNIEn7g", width: 2048, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112752082379130537340\">海鮮処 向井</a>"] },
            { photoReference: "AWCwydiypmJsDM4RTmVO4DIqR-YGFYzEVuXyTS4nau9Ucmyg4DGJSPFnYzhlqZIn_mnoc3AiPO31N-GJzAam86s8VNzlyCPA2kLAdTVUFiANmHmvGtA_qqm3Ol4AgbYi7EGx7zdWYYEMur8rEUXNWj1erW9xIdcNhXoG5KqCQNqfh8LCp3en_poaAQVZhV56sf6w4WlHZaf2t2j7aZIWoT04XcvHYJN_iX2zaUq4klkP1LStTSZyuigVwDRJmd-BMMCwZr8g_Aix4wgWPExUSWxmYPX_PI9105_er1C1E4ryvF7VqK6tfoZUx_ZJQNNlz9BfSX8KlbcQiXF3Yih-XDsPcSirEi_-z1VanTGDmZVl5d7lXgKbXJf4ynnIhJi8gB7ukOpPfEr_g1UfzHl9SxsLgUi9bry5BQywzKOMgQrIQynqIA", width: 750, height: 738, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112752082379130537340\">海鮮処 向井</a>"] },
            { photoReference: "AWCwydhz7amrQPZobd9T7VPD8_EenwvIpzaRMdpJPsmdMtfGkL6D2Q1NAcY6Jb5L3frFsk_CncbaRJk1Y9v9GzKskzFzit-Kp1sb7Vaiaac9zskymqQBSOAuop5eFtcVOA5WroxnFs4lIy_CV2hP6-pGTVPclaQUVGTL4uNUKBinl-VSSQhsfy7xMlYOnVMTcfZ4ziIrFAVwhzs9Jbi3UIZkMfEzLs52heiGWzGCP24AYOChfAHY_NJH7HU3_5DUFc42rCq909bHwD9VNl0MJCOFvmSyQA1LZAwxqoj2V7TnFwVZfo_sXQt9E0torOJI-UIv-DEnQOdHjtm0ROTM0X2_gv9v4v9Rg8B1_aGSLoXj07JLZPGFKOsJ1CTAa8cx7Uu2qSsPLhJnlAFrbeQkzMLZjqNsDp5wAyjSa77v_8hU3If22Wmul1QMKMt5W63qEEuz", width: 2048, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112752082379130537340\">海鮮処 向井</a>"] },
            { photoReference: "AWCwydizOUeoJfogkiOtaq1VMdgxKSnMNKbH4pzzPPrZ7RPb6rKf_1haG8jmP09lJpMZIp4EgjhicWTLNH6DHYIsBlLh8VMWDgLSt7bIshd-ThT9kki4eiFo5Fwnb50aQMf2LwUyi9VUG3WuNP4f5nDjNPat7iB6cRClpO-NJOExDE3jt4dOxj-3LFrB4I-cjBVVR3OYuXCsucinEZ61_SDqOdQegBLpLnsh8MzuWWd75VADzBOqmlxS1sRkXk8cDAXkLtUmijCNxGeluYtvPnlPEW54UZwcxFQwr6kLWaWiAVdJH0fwd7tQuBOPbG2iMKWtNLr8bILe5303RoIMrtq2B7uYzbhIcCErNHvp2X1ilybyivmUq0VzzuoWXRVVEHYfdSghf1DgVNTVpNYsAyj2udmeCFnNNjm8njSVc8_LFv2aDh0hoLAlzdrUyCiN5S2m", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104512877436866187141\">Amanda L.</a>"] },
            { photoReference: "AWCwydicERQaBwH8q-GVT6Wsuh0nH4BeinudbSzECWvo7tPu_-gezEE-SDoJCyC8ofEKof7q-DJUldrw3A0_QvDhMO1_gcKY_WzYz-Kra2Fv5nYKP8sIqd3Jem2i2Zf3HKPFpEmyfffc6R08Ele26KbiujZJgfHTAWwEprqO8JQYJx6sXA4F9z1UWG6MQGe9piONrCE8BRnd2uIZx16R8FB2NxJ9JQU-VjPWMVEx1gQGDh5gbg7zF3EfU9SSa5Av-NivflwV0RuPhyz-5VS1tbFvACSVlgwBVrEi6d8NBBBQDV0Uev1vVrwMf9RQVHqC9Zq8KHgOObFfpiFwrgUXmh4ufNGyFOrOr2oxJlk5EJTijBTJJwVr-5ageLmSAFjsbtmYXM2aaa8BPqD7iGj-h57EMC4Mshn2eb_qic7ajYQJD81p4-H3Kw41Lp9gAEpCXDR3", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107247836461838042990\">美食女将</a>"] }
        ],
        summary: "다양한 해산물을 한 그릇에 담아낸 보물상자 같은 식당",
        updatedAt: "2026-08-16",
        highlights: ["압도적인 해산물 비주얼", "다양한 식감의 조화"],
        tips: ["마지막에 오차즈케로 즐기기"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 덮밥", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:45 ~ 오후 2:00, 오후 5:00~8:00; 화요일: 오전 10:45 ~ 오후 2:00, 오후 5:00~8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://dokoro.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2633480713308057865", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%9D%B4%EC%84%BC+%ED%86%A0%EC%BD%94%EB%A1%9C+%EB%AC%B4%EC%B9%B4%EC%9D%B4+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "자우오 시부야점": {
        photos: [],
        placeId: "ChIJa3cs7aiMGGAR8weY287qaJE",
        placePhotos: [
            { photoReference: "AWCwydiQ_c90yV4IkaZgMn-QwbLozy15CxaEnaRM8PqK_HOt77aKa9bMLAswrDLXw1Q9UFcRtzYFIdhTMf2XhQnGXqn8fDUH4O1XUpk4p4d5JuOaAggYEkjmAlq0-isGl6uvFF_4Cn2HkQwDotb3Y1OC4BBpKxzCbdsI9hMibvOGE0bOVGyUKwoyqkSbFvsyWs5VCslTeQiwyYgy0QGktCONlPtZIkGhjsTc0muid5BBgrhR4bvbExR56C5hJrJJSvysAtzeOMCjvfRLMnuzNJzvkY7OWgu2veh8RcKcU0-LYU1CWRUjoHTGMEDVWNMzBCg4yD4UoiuY6K00T0egFgg3zp39HG8_hdP1g-jG_QCNuZsh2fKx_gN0emKaGa6Mz_ulszHOJQtf2PndFkuX26ilriKIxC5M0xfH4F_wn5T4dS4", width: 1500, height: 997, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105980083715651260532\">釣船茶屋ざうお 渋谷店</a>"] },
            { photoReference: "AWCwydh-jqXaE6aD53QDlgyH8ls_glkusG1LZivj2edgeQFwFReD_tg4VcG7sj07g6qYAr4JFv2DUSzA3hIxOXbQFj93rgCIeo-BLBviuVfM_7qdaifo7Wj5l6UdVH_4tLpxh6LT_K3qRWwYw4gs7g2hVu9jc1lwnXPKgfoOy02Of4g2Az-6IbcR4vKfQHYrQfZDWwYMo6QWirwZtGImdRTU0x7yrbwqYN2YaUx83DR7X-UxvgqzLedgs9ldb1CaAJs1ogNh8CKvYpfR_qxufvFO-jgCBf98aWPYGzg97V0pNAaBd-70UhakVDXleGb-GuKvrwoXtqX3CWlXdL1sOqX14e7D5W1Q-5PJLkkQnfgQdYeFMJO5D8nmbnS5CAq8IPnpIg3OX2qrFuElCqTEmJidKzb-y4yG3o_0BXRGb-qYFQU2bGUB1-jO4fz4hXQAg81H", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102649020142096831489\">Hannah Nguyen</a>"] },
            { photoReference: "AWCwydhsDchv3h-JoS9cah6DWYby99GSshcXuKzLo8YrLYmS8aOn0bbCJ6agFLdaSB9HTj6jJkA_zIp5glKAJ_Gf7NrhPUJSnwiGmCew6fTvt4bVFHlDPXk7r_h_tJ23KQNPkKQhbcaMIEvvi4HS8TH-zFdVwDqHSaqcTM10c5gA3PewJzBiD1ym4rsUE33gAu3niELsSW2UW55PTrKSRrYsvbw71hLuB8ysKbqegEq3MgjROwjjPPLt5dEmqTl8lwFn0u0iEJX-4TGoXIUyrUIPd04Nif1u2rS28l9KC36cH3LfXEuYIXM_o6eFt6254qCTy7HuLxxnjTD-eFbsWw0sEispz4ko2SUqd70dCdC89sy8Jr8O2JQp4gq84I2aXzDyJwBiNJ6QInUkOFMwT7Duho_9-uu5d4tMYFtHxDjeDPvQPw", width: 600, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105980083715651260532\">釣船茶屋ざうお 渋谷店</a>"] },
            { photoReference: "AWCwydjQxgDdolZGzS4xhtMfNhXBjk-zW09hujGOkgMoKDMnz_VeXr_0zeQb_gTwkvrkScldE17YlscOHgurOaAg-NJsd7w-Mt6NSiJTrnxOLMgO93sbW_zDK-hyMQQaDG1L_xnh-01arKh7xY3EtVX1g-V5baSdMw3OlCcHBbNu7elW-VlJAQT5WmXmIz5NJ5Rw82Rxl069FS4ZGkje-qYJkhxH7L1CLf2k3tQURpXwNS5DuiZOkqxtQiqOPyGXXk6InVPBx7CwRzLfv2jIkh5eLoOCIIO6pyH620dvrDKdKfFaOJ5mVNbfJmPeIiG97OHWAzekP7vNtjNX_yrQCnMzY3nRy1p_bhmHIFtuKPcKbox8TrtIdeiSNI66dVbNZHymXB7q7D5V_6YZkHKmSWFUMv5uqYcjmRDpCYqT8BPlL4zjnhoFSmFyhbNUidTdkGwL", width: 4797, height: 3598, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116335056741444371491\">YANG YANG</a>"] },
            { photoReference: "AWCwydhF6Qp7chv5DgP4z2WXvkpUCQx-E65sBGU2SrnI-3P72eIqn5kyaXOms-paveNPlpVpZ0O2z5NprnGzkbbNt_3fkLKAX1yfW3IKm3An69QbRqyJm2EdYfQivqt29KKoZ5_kou3lEPKxM4Fa7BqhQ9JIbeTucxjTwLOmHu3XrmTH8tMkewHIIlQbi82eWAnZ4Z8vcTB5y4LN48-BaaRvWhCouHC_KgXl1_4ojdHQS0Ggd6TkK1naxw1SmRlTPe7nnF3lpg6MGF8erpk23CCFz5jgmZ1A1Ust8QCyDwE2dDOG1scU3uWJlds08oXJPehjsJXLzREwhd6faGFcBpI0z_7xS_thY7kj4iE8KtXDv4IbX-F6Z1ps43H7ZVQxbYq-e7lUBqADTmIVR6Sf2sjtUvSOJhgp1N83xKoKKngyPDXZXBfcEjfo6kSlbv1QyKE3", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105796031447073428240\">hk.restaurant. foodie</a>"] }
        ],
        summary: "직접 물고기를 낚는 특별한 경험을 제공하는 곳",
        updatedAt: "2026-08-16",
        highlights: ["낚시 체험", "축하 의식"],
        tips: ["아이와 함께 방문하기 좋음"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.zauo.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10477882707245795315", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%90%EC%9A%B0%EC%98%A4+%EC%8B%9C%EB%B6%80%EC%95%BC%EC%A0%90+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "도쿄 스시 볼": {
        photos: [],
        placeId: "ChIJa08ZHmGPGGARyyvBjn_Tee4",
        placePhotos: [
            { photoReference: "AWCwydhcl2CIU6VzWObmJwq-bounzDq16TRx_QMKjI-gn3-MeO34N4ox37B85w6egyd9N-aXEpbH_28omddz5Z6-8U7ivaFdIEerAkOAZdMlrNI3HRvtkahJkahKrXIsJJxyxLiWPLBi1oH2hN4zaWo4FMjKAmG6k4iS7jEeKvyj3dWRuCRXr-6jSRMitM9U7_oYsbEOIwO6_3DHma1Pd4x5T_q0oJuJyt5apCCzge8MeTr3VjEhAFcELK-eThMiA9r_AKXJSxGSRkcvsNPWd5z4F2Li1uVOOXJXIJtMsbhcN7WOuKwBYhy8KXlAY7cQaGyRB5y-z1ml2bP0CoVmOA_wqVRCQFmWAf3Np7x-xtDHyFkc1azTcVv8Csh8hY7Jbnh9ByO9tGJ0wuwY_L2sIpCuXPrP4Af4bHmEqQzsPnDu9UQ4uDgifY8YI-mxGp7U5jvh", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101817215148042447978\">TokyoSushiBowl</a>"] },
            { photoReference: "AWCwydhFLmhQ_tZtxZ9f7rpP5_axsRPgTmbWEhdldcmnu5dxtDAV4BzlZj4umwwzkgmL8op7q00QSWjTVXHbJz4yeezj2glooZtMtjPHBw6BRZ3jOxT5zkIShbSJMF4R_PxlsgNN_Kowrze6umXBmXZiDfRWydOp6qii16VmEtSFCty2y5-B-NoPxZi-MbuPrXB14kEETmCA-_bir44DqiyhpKjvZXl_WXU0HPAKLRefujLwTJ9aqa0x2SPzmz1GC389DWjhZWzvIyVm537FdxGrTyV9nKmgEeyCu9kH3HIaE49ko1fyFzewY5pJA0pyRbeo5yh_d2qpSgqJuz4yWizkTIbo6ikdAKNHqS6LrfCLOcBzv5xNUWdoK1u3cwCiuhvs_zaUKvV3PRYoVCgmoD4icXO2JKKsGcBEqh6o4Q8OHIeaaOmG3Wk4VEc49l3lhwbb", width: 4608, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101817215148042447978\">TokyoSushiBowl</a>"] },
            { photoReference: "AWCwydiJeJ-6Mih1oF7VdpEm6Qo_SMJMg8-UAEnxqeb6bvC3HzddL-zfH57ciMaet_FbyHZc2EWhLGNxTjSeiHfo1MZaHaIyaN2Oa0D7a_m8hOG79YiJO4NZy7CqDrKgmzCeOdxCTC8rSU83FufqtijDv3UeefFudHmpL6cm6uggnfhoV14iA_EaxheI0_CWNf0u--bix7OD24UMzYwdxQ6sLeE_t1aZABWIhbK4_Au0IFeH0k1af3v4M91n8St95HDBZ8NwqRsBRWaGmvOG4BwZhfAXf38qTsCzYW5KH3LqKxLLTdKe5fFWMhnqTX1cUB62bhmWNOQAphL0BkBKTEBqOj25oqgD5hwi3UJbxwyFRXdCzzJOaTZRe8rsK28xLg0TutPSkYnmsLg6RWYqd80fGrR5EwKl2XfteVA2lSgtcOEP0IGVBHYgGP9zYXglYg", width: 4608, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101817215148042447978\">TokyoSushiBowl</a>"] },
            { photoReference: "AWCwydhgwSUUt1_VDVsK5Hm1O3z3lvtNCDgjzTd1Bg3FbDeiNmzgSjaOaV1qRAc8uEtY3PXjWqxK4T-gcKKftU7y1iwluQ8m_OEorQEZo0_JGb-w4fDnKvA8G0OwUAJ6xMJgzLpcFy6MkgLgRDxfs_n1aVj3nzLkI4UAmnVRzpnVc_sSZx_iTOZnoVBPVDAD6LB2TuHnOPB1e1HVFU4R3WkCiczuHw19puiBkCWtQBJZTNwUh9wudz-L6C50LpP95InYy6067_b-2dagiwFd51JOyDPW8Uv5xGMbaaFQhwMHqdNDxQTT6mHYL8397uy-Ga0d03TPlovRXc-WrBzQ9_trRh_b5zs-WGuVWCD_veXZWL3_7zioUrb4GdVrsr7Vm2GAKEJv3Mwn3yv6MdenaQGMahNz81fkMh7X3sSgtTtZlHGvK5OwwlY2eu1OiN3hGoRB", width: 4445, height: 2963, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101817215148042447978\">TokyoSushiBowl</a>"] },
            { photoReference: "AWCwydj4y3k4GPm8Wrv9Vc7Rl3hvQlOER77pvvl_M3L4T66Yy_Sf8YAuEHkFVVDwPf9t59YVLWdGr4Ez124IJq_oEGzeXEnt4smylqjGUdK3GmJ6UeCrMZhO62Vw15D7BmPa2rHM-g27wVRGNEsLrTNamlm9R4DgOkJ2pNzFxwmXJaHOgekxXrWbr1dz77VHTRyaPkgNtUtljRkC3-0-z61DVnSa6ob7Z8YROwJqQKUZZgBROh6B87vt9HVlCBrGMrv_9BuNxCUnTCGwEp7P1tyrtPGoY9k86rrw6ZACLoFx9mg8fFOT5icCUig32CuAFEtvOZEZPhHf9c8d1x2Jq3v9oiwAcAhEa24deSVj8BVKN-ZXwn9SqrxFqZzFXByuK7mQ0KJeeOb7-NaXddczJ8ozORngB-et4bbcTvbICaPaqLtdHJ6zfATDVJU-IcA44A", width: 4608, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101817215148042447978\">TokyoSushiBowl</a>"] }
        ],
        summary: "높은 평점과 신선한 재료를 자랑하는 식당",
        updatedAt: "2026-08-16",
        highlights: ["신선한 주토로와 우니 덮밥", "친절한 직원 서비스"],
        tips: ["1인 식사로도 충분한 양을 제공함"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 덮밥", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tokyo-sushi-bowl.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17183998398018169803", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Tokyo+sushi+bowl+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "마구로 마트": {
        photos: [],
        placeId: "ChIJY5mZ55nyGGARFr9LsKUL6mI",
        placePhotos: [
            { photoReference: "AWCwydi15GOrjQP8eADiTdBznqlN3lTqIkGPTjFAq8bPwZCYSJtZIeDeSJkoPXaiUd2SpyITCyMg3kZFnUHQzfujvbQ3nwR4JodMSaoM6nGUSv5pg0qPTEH-C2XV-YErjFNwZH9sSBNW9CQbGrSfDgwJTts9n_kB6XXhTdvmQdokUlyDLpyzl0-P18qSVhMG6Ey873vrpqVc9EOH7oh0U3h_1kueiWBUBlgaOKrSgOrRPc2fHWF8r9uPM0WZ2KV_UrU75Xc3unM-RjO3KbpZZv6DLXoEj_4XKMm-ZtzPnU1Dfktrq6WELVTh9Q5-xKou8YK7IkC_q9ZwfdDfuW6Dzala9D0t4UDnkrCNFu9KPurGeRtjG5WhpU6SjiKrW9QxwJcFsT9oSCDYzaOCvuBgZ4fB8OfMXrJwQ3k_o3oyAGtRNwxojbrZWn3LwJh5BAK_YQm7", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109392397839245666447\">おひさま</a>"] },
            { photoReference: "AWCwydjeVCs7i0Y_ZUMZOZvFgT8gMjCB6AAdl7Ml118v4NaAG5BfvIhlgv5qQ8d2xvjKI5jkr-O220Hh9V_bJFduia4XH16qYn3Sq8INiUan2pWeG1U5IHRDj2jr_kqpOSKPCZwwMIUDNMOvdnwYuf5Q6RkAcl84DIBIJaamB_pqSg5EkQmwntWp5zHC_ae2qfPM9LehEjhtY6m8xNIg_BgTF2zBQ4gkPidPyshX-c61tC0dGI-zJMiMUTUPpfig5XfwkiNmjlNXLTooNrRbUdZs3GxgTrMZN0aQLGbDwLjy3T8VruV-tO_dDW3T3Owvm8V0jNj5CZHnEt5XUw8DaDGWUZp6zUpfbb6Jhv1YcArPlwuBgnQEiFr5HKZbwTtemWsd40D3ffzlvx877NxJ30IjSMzAvpTTifDqwpHaLXqqUg814Lyi", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104842649854813083836\">マグロマート</a>"] },
            { photoReference: "AWCwydgUrsQhqzSN8TUNLcQASw32PWyHsYznHEDgFWCi3OP_kjszRJ-q0DUYQkX0IzcWhTk38Snz24tmECHMXozzeWkE0OkkCmGrEAfQ9hUKvMVYZ-2cNr7d9zoWjg5M61ngAgUfbtUMh2453WyBGK5tS0d_qD6BoNr0AdgKM_ZaEhXwJjHOdL1ZdCBE3vAOuwOqfR7G5U1ffF9EXJ94Fs_WXXoTzUxaAVG8NCHhGJOyo_Q0ceRsYPrEmnuuBqVeJvgVUdIr_AjGEc7zHt-X5gCClvyQPwHMJYC65CPJFQISdYU-mV37wmTKatvZ3-V80VgrY2Lj-V4Uoeih3OhY2oDPmBevT2vpe2zKw8mKglg1CrbWJhLk_VUZYMGJaMnk_h1zAVG179eJQUWWpvgQCi2CAD_uBt2YnZc3HuL-ZZm-Rhr2B_tGJWYgSmQUwDMt9ZqR", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112989159772283435050\">みよ</a>"] },
            { photoReference: "AWCwydgBKpImKqQHhaJsboEU1HP3RrDhy8ZQ5WwCcC9SMEnqZnsUGgj4x_g9HNqnZ1PzECFyPn5YbWT13kvSzKLrt07KQVQn47fJ3PxeVsHZWoR5y7oKfs_PouEA93JxmYFTndZDL6uH_LtyuOJDv-hHr_S-8az3w0i_ZJazGRoSpAMSGdKTYkiCokbOMMIQjeiFvb6usiaw_jJg4ZGWz_VksHCM7jbnNY4e1mSzNJ4GNFBFFmyY95is0Pf1ptZtnbV0g9Zn-959S1miTzyKjxG9ekfu_CK3r6gisXqyETwKtqnf2zN_JOvHwdqdRZ9fAk1Wl0lbU1Dyy659R62lptPRGNcEpT-d8H1YrfacRBSubEXQn4KTnFdQx4su4n6LsawOeUfQV2fiOP2F8Wocq5YUV3GQr5KlLhh_bDt0rvogMRmIMSJDHihDMl2hOX507k3t", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108462382640648977765\">ham chan</a>"] },
            { photoReference: "AWCwydixucx-_Q4qEzXkqQVgGH2_rrlEp2_B5TfKF-P01f2wU80YAkhgiMNlWebL-IoFVhscHAz026E8Ev6qtZ_K3so1vxkjRn_tzHv_l_Tzcfvpjakb4oqk8-Q6CHkvRtP8j4YLUhjoWLk_zbCQhRd9ouAqxzq9dgJaIE0JVTShLqaw1fF0S311funJKPfiRJbWAlcCiCwg0jWYAIv1Sqhn9isB6-5DrtMVDZtLRKbnFF7w6Trg1wMicphA31oKFG6J_5SY6u5tBNpqwSD3D3AMl9RGEQRurn1SlJRR2V00q28-ME7PvgwgpTQNIDUt6WkjL0IScSNidLmGcXvS5IEjsau7FbtcurAzgZc2wqqsH7XcmiFPqszIKVisharnENB50qsFsyU1_Vz0mp0MXndpEvGbWcx_t3jaj6E8_Ps9zcX_O_BsNJxRQYVxFvkMn-UI", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117348941305677085733\">Kichi Giri</a>"] }
        ],
        summary: "음식의 질이 우수한 해산물 전문점",
        updatedAt: "2026-08-16",
        highlights: ["높은 평점", "많은 리뷰 수"],
        tips: ["음식의 질이 좋음"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~10:00; 화요일: 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tablecheck.com/shops/maguro-mart-pickup/reserve", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7127522166522494742", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EA%B5%AC%EB%A1%9C+%EB%A7%88%ED%8A%B8+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "타마카바코": {
        photos: [],
        placeId: "ChIJkaWmTXKNGGARGxZ_KRpOefk",
        placePhotos: [
            { photoReference: "AWCwydjoQKI_wAiVGiCDvoTAGxjEnsF0p4SOQLXZCXW1JKqmH3UrKsiTNwuMQGIv3fHnE4TMqqpjlctPuJhRSCvYSyeOte9A8V8VY_e3HI_1lbcBJgFdQCzaglFMxExQ-HKE0OnacClrAilg-agTbJ_O8qaLKRxBgRIDNdzHw1sfQqO6OnitVQh1njHaMK4M1YxSMKuPi8qQQhRigkRaIRJQuOJKJ9gPS4-wZXZ0EdUOpigIoCEoRpjTvIfLZCTEipYN8XQ7FRefyOnlV6RqrguLXIZ_63nRhJKitx4INuZf_f74sifDYqsK9D76VmL0LVksqOGsIMSkZtNxAqNR1juitQYeqwHvqFdoKD88CABRtQDLR24IjBXxkx2BMZklwO8Psu1ijZQgMaEefmRxXxQ2N35A9Yb_wDkUJQXKsjZu7om-K5_o", width: 1536, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116760787105802789665\">海鮮バイキング＆浜焼きBBQ 玉手箱</a>"] },
            { photoReference: "AWCwydgl-u1lyiOAAfNDNkjihYsLaKgGCQy1U8Tf7q9r-SioG-B9opwaPdha7GlPdRAKFoxpyuBaLjQhCg8rucIYL5SIIGb4mWwnPjjVjDUMZCo3E9A-t3TjxvHvQ_wTQv_2DMvd30eJRCbPPRsgoF1Q3kKo1BxN1ocQPU1e5zJpFJlT5ImeEeNh_ACPv9Q5tIGXqhKsYe71MNZQtZXIAxCDcZtYYFBl8KLYpeiLMWx8gCt_tUF-VB-VSMQ2tuSfrdQ7iTz1LmkJYuhTcl5UuwQvDpvgEktTgOFeE2q218DV_SOtK7RBZjXi4HNyeP74weJ3EPdl5hGNlUuvvzi_KPBr6a7qsNzvBDBKq_J_BN6aojE_b-BA8mt1OMa4TIUTKcFC7Uo1nGwWswRLRpsfaLupm1ig3GWUClE2ZhwUYz13GaE0g2-jmlCOfENKi-vQYxfb", width: 1280, height: 854, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116760787105802789665\">海鮮バイキング＆浜焼きBBQ 玉手箱</a>"] },
            { photoReference: "AWCwydiusvSd62ML68g8axPARNznt-C6t1WiM0AumV0Dxh8w8ecm8hcvf5bBkPV65cu077zy_Tyc-REgRclRRKp8QbBFWVpgi1cI0_yS00eVIo5fbt76pU2Qrcs1hpM0vmBPe3MjVIZzh6AUe7KYc1HJJX12OOnqIfVafSs7Ea0PdaSlh5usjYSBu_-vonthIuUWBwm-HIlDc61T3T9odxNONYQ65KR03okxLCRRzmaMPKAMoy4viSrHtTOSGDJjxG9IpWllZ-zWugl1OANcFwYdcbgs323XhwCG4AYpToeEYzGbJuHY5FLkXh6tmcSRKyyzngtBGoV_cboBEDmKN2F1uIZaapddaHA9R6t4C7Z3VwWcQxJLkHzq7EJjznKdMR7RlRye9-Y2NxVbdmVmMuePliLz39YOXr39auNdfAuLiveaSl7nCP1YVn_NioUuFUcJ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115594836216504283563\">佑衣</a>"] },
            { photoReference: "AWCwydhIi3i-_zZAhyOQJkhfDE_ZtnLUpIxhN0BR8MzssR61VbvejNbfIoHHtthUrIk9t-tBy3UOpYY4YTHy8FQTloNG8IKSwvC0gHzQS5P6VuTyG742FYdkv1ljtgXa30cfLJ-8stmedQOFg763Rt5gdmFOlZaTmF4X3NLfAVvSgd5bPQOELX5U-Kd6VA1z1Ds_kDnrvEwnxTRbOFzv86rrnPAv3RyHasICYAbYkXGiHYJ2VWQZp3hGk0JWsGNUDjmBpnkt3FDLGJE3LOhdxuoVLwaKDBUgLeIYQ1z-1KuPl1pR2HXztyAz-DYYMoN2OLlhS6Zzilu-uV8x3utt6kBwIjlul41FTK9DWsCYBaIdjGpG3VASmMcHikfrdz_3UBHXX4fCWl9UAHlHQbfcjWNxhXa6GnT9ObRtwSxLFffyjwAcJ-rlpDwRvgudiyxnBjGL", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113022036102140418715\">芦澤慎一</a>"] },
            { photoReference: "AWCwydhzgVTMd7GksvymkA-scSNjohnO9DkE1g_-pzePTd_5qOjXlZa_01ijtdk06GzVZLPe7jBS0tw69dq8PQJxYtQ76HPqc9Jr4D8stOZfTh618dGvpDGnzqYTS2FDnnZMb1C1Arfdt_F3OXPthpVUsT7bYohNxdzpKDT0MXPQcngR4VCATjszZ8roijIyl6qtpV4UjcBU0-Pc2H1YRGoqFEWajceq6vSe7GFxn6-ecCvRjx97nEM2_sjg2jgDhGjTXDLH4SZfOGkqSc1uEijg1rk0lS0FxG2-Si_wMwj18stnXug05cN_vGKYoa4rftOaIBHy9XvwSSBtDUuSKIjfVZ2NLP4b-gQLkP-SmN1xb-cQ4QSsxpTD4p3F9YxAi404RXZikM65ipvmxY8wOtblVH0b6th32n0fFtnFYXCcWfbcDq-xFme9Nhhq0-xHMgEB", width: 1280, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116760787105802789665\">海鮮バイキング＆浜焼きBBQ 玉手箱</a>"] }
        ],
        summary: "6,000건 이상의 방대한 리뷰를 보유한 맛집",
        updatedAt: "2026-08-16",
        highlights: ["친절한 직원", "즐거운 식사 분위기"],
        tips: ["새우 요리 추천"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tabelog.com/tokyo/A1303/A130301/13296269/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17976485261898356251", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EB%A7%88%EC%B9%B4%EB%B0%94%EC%BD%94+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "루크스 랍스터 오모테산도 캣 스트리트": {
        photos: [],
        placeId: "ChIJIZq0CKSMGGARAQsSvKqAiyg",
        placePhotos: [
            { photoReference: "AWCwydhmobtz4tDoSp9KAXEjMiw8mN-MmNlN3H05_fO78an-hIpbFhLyDbJe47gQsBjQZjnBqSoZWvxfgoQaTP2gaLyfbu6feDHFyXh3D32t2ecf_x_e64sPHkLclrIutCthu-Zd5BwC-YpnjpqiMgECJujmTT9P1SmP_QgkpGJ4fwr1IvEJlyraC97g09FjJcWdVM8Xh2x0eCjZjdu5EAzWVPZgTOfjF2yxF64NkyoMI1GC5w3s3dtF8pPBTFJvU5P_4toBKFWlfcWOr7RB7lGUB4lZO3tQajOdNDpZrDGZUW-ED9U9IaSNi8gHWKLFcxrykMb5-OY0ptqZs0ywhGZoFUAMSq-v05ipVM5FmbjpUWzDplW4PLEhPpYa3JsMCCZ3v51YS1ByWCV_yGj5iMtKGEgUZzawi1jrc_LoNfoNubEOzCbk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111397922308785806712\">Derek Lin</a>"] },
            { photoReference: "AWCwydjsYP2IhG43VI3st_noFEu0cGveXUQAX0nZIdKNRojABMKB5GyfD24y6hsb6wodvp7co48X8TO3ZIW1i18LcH4ZqsZOd3GFUHTzHw5CFLCvhdVESUcFy41BIB5Z7t1IjKFPka8x78hxMc8gUJGBnRbcOyGaOlVPVstl80mMhjbaAAC0nJBAJIAyPRT8BhKKAg0HfJxEXi3x2MJSfmZovQmUAPK7GZqqWUZsm4DedAqlHU-CTLRmSM4vXVV0mubsLNJOkNjU4_juUzHe5TrmeHymMCFF2ziyewG81ntgi7fdtqCRe4uWU8F5GHgXR92s5OcCFYHCMnYhMOV-VFzyKs3FEcgKU6bDrfIoi0RYYPAVSXEz-epBlYYFlo12Fei8CzmjzYljAoUZmXF3e5HRt_G2lmI_tHMO3kwirlh4iZaMKNEr", width: 2000, height: 1333, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112280100361155610895\">LUKE&#39;S LOBSTER 表参道キャットストリート店</a>"] },
            { photoReference: "AWCwydgC9Uq5c31c3qCkhpjPg1XAzsuuJ9Zsp5mSksL2A3LGKsEFdjCXMnbRPPVXoOswsIiYje7Q2Ew3anwacJI94IpHXclJWHfS-SD7T6JOhsmMdhKdxS5nuClemhrEbo5SwT3xg51Rd7IjbykQv3LYw410XW8GmJwC15r5B_rvJ6LmFIauobHyRcQd2F0lMlQqZMnZw2B7hjfjTDcq-Q_VffCBC6yzgX7E0-gBdhZSCGdVVZkBNhMiPjULmciELxQQgxMTtFBxyUeFRbH-SEClTgvUf10LywZs-SmhNt3uqbiKQvBfEfLX8yiQHoYCcD_1soYHNzk6LlSNv958f63TB3kppnl25-2FZ1s53arwFSPSNBKa5lcHXj5bH_vc6UEwr-_wR-_oIXcMh6BhcEMy1FXPuyeaOeFAyhbWw8I8F1VbL-lHvdxO0D_JOKLy52so", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118344693203477891935\">Jham Twayne</a>"] },
            { photoReference: "AWCwydiASVPfH9Zj2uut25gTj4P-SYa9oHL5m3_Pn9qxKCZZcThtOfXwsKzTXrBoMqlzuqgNL_Zg-jo1FUZiWcmYhP508TfrSd8vUjXuoTHhY9ADSKluNI59enf_6abgNZVUj_9CVB5cisIyOU-W4mwgzNINiIlKZUC3wNQ9DhuFLHhfTrO6XJqR18sWKKtqBLxOzVS6ei1Xg7YB_DwEPbRpF4RcAp-NZh-FKTTeZYAEBOwmYWuXz97P9NzCXWYNF8BLpdhNeFqAy6KSm94mptRoescD6FecgWPT5kM5-cbM1Fb2JwfPl43Yzwo9zzNmH0qWvxTvY4WCG12cykUQcniobyyH5iwldlm7Gi1ub7sFFo_8LdTQJ_jAxp0Bq5toWQ0jTisJ-pOCkTx246A0pOvQEFaBogTjqF3wQpT31JT86qjN3jRqIS_4_4eFZWW5GTzk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115005200098772978509\">佐藤</a>"] },
            { photoReference: "AWCwydhRDmsIWkXB3bqxLThL9I09L8F4vk0LSeSoBIJiJI9EDJ_zvDFWADuTjn0EYlGQJfCmCFAswHSibVPcAkb2WejgvZtwyqXO87_63TLhcqTjrPEubrw90PNnXBi7ak4ko6erJsKnnNi9AAkRJrSeOV8Ld0rANFrrtoNh65H5lPOqGiWwNe8UFacEVa95FmjQOz-PSUQ6hfIWxxZWm8WPNIBnpiLaTTsurQIvB4rGsgpOZR6b8S5sKoDXNAY5woN3cxzZQ67-RfRbCO5nun1QzTKLakW0dktF1lXbEN7PVJczz67gW4NrXRcpXiIVPRMP7ezLPfemvsN1RNqXBttvDh-qiFBCpSs4paSyK8YACWDBTaBKM5KUHzDldV81Tt5-Ue8tBI3dDTMR5IXaCuF2ivYEuE2Nk0oy_6rci5AlCOB3NkI", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116649987706165549619\">Jacky Poon</a>"] }
        ],
        summary: "친절한 서비스와 특별한 해산물 메뉴가 특징",
        updatedAt: "2026-08-16",
        highlights: ["신선한 해산물", "독특한 메뉴", "친절한 직원"],
        tips: ["다양한 해산물 요리를 시도해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.flavorworks.co.jp/lukes-lobster", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2921570254067993345", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A3%A8%ED%81%AC%EC%8A%A4+%EB%9E%8D%EC%8A%A4%ED%84%B0+%EC%98%A4%EB%AA%A8%ED%85%8C%EC%82%B0%EB%8F%84+%EC%BA%A3+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "시푸드 바 에르미타주 요요기점": {
        photos: [],
        placeId: "ChIJ92JTfo6NGGARl3vShAucLRc",
        placePhotos: [
            { photoReference: "AWCwydi9Ypbgf5_WFK9oguBpI7AePR6B1lzuqsymXmfxZ6s_GKW2WF7CvxcA7zThlF1rmDYrIZCVRbgHnU8q2y6iOf1P13LHl5S7o-4KayBAlh2YKlYpswuxGLIpyiBvvUZ_QfxbhPaclSLa29xqIqwjudkw14hJ1l6DQ1-NLcqoebgzIQL2yzzl_Jc-fVezN0L1ehFvfiqpBSavGsxTJBYL6wA3jRa84AquipXJLHeEyo6yY8zn60H-Ua2kSs-z-sP4S2_XyCdHYJqJ2zHDWInGth8oAQawmT1zcFsbkItquZ-n75nKYvGjT81lw_k-a8-pEMrh2rQPyfwDBnDlnCBvVwoD28TNvnonynG92JfJgZLlpIXvvYhQfW1eZwesVk7CnLuZqWkWqszyRsmL-7McbjIVMohzeebNrQbOSnuNHv0j0A8p", width: 1144, height: 1430, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115492003326780997040\">Seafood bar Ermitage 代々木店</a>"] },
            { photoReference: "AWCwydhU9O1ybZJOOP7eW_BkfjFvDEYHrK6Y9t1fQ78yu9qz-nf8CpEHaftLO2XkXgkLYjUpTZyMf44AXPXLS3zXDDmW87PgPiZKvFS_lq1oBiJ7sqBCjYTsgWdBcsfoybWmLrG1XLKoK2NzYMVO7xKK3R0rmiNy6_KI6qYVS0DUoI2m3otN8CUW0NCr_X9n_xMW68pe6mybwtn23PznDHTML_xM70FIRE7BwK4tVLsQerq6Gc19gjDc2J7wITiGAD2UGMWsaJaJX2atPQCLjl3wcpXz_8q4O4l1FeHbDwqYU8rsT-W_GXgfdo4LFRGPJSpuDo-7yGwD2nMBx3iSHf1Rq4XSDbRIU4fH81qtAn9Hid4iGFiK-yL0f-ujawBcpYe8S1s2iMp8zRModf02uHE6JysQy2d1Nil9Oj9pt0FEL4F0_5F1cQWzMmGTQAGJnQ", width: 3464, height: 2309, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115492003326780997040\">Seafood bar Ermitage 代々木店</a>"] },
            { photoReference: "AWCwydgkxTQSUp6paoj-MHK1aHPovfafAJmHPLZTF9TwvGBiPUUbbijpvhifpdhxpvq6aKZtegoZb6noD06tT4N_ETH8FalKXsGmZUXt2DyIxrAroaTqS9z44jvwRNdk2bdWBRxdTCyP_bCd3xNe9PtgIp99g7C5CfhiRCbILzX2pAv97Xdg0GYlz3wTnx9ZqFj_Ua7snt6cGM01j0Dl7ApNtxAfEUuoApacO-lrsmXN_S5rFf2u8bYkf5fiZuqnR8hHKU8OAxLRBKe9sKhpHwWgvBHOWeda0TEp4gGXZwDABVSi9mFIw_sqlTfctJNaMSjw9FSA-ZOoP6XlgK7W3FYX5Vs5VJuyXYppUYEmW_tSQlHgOseYqQ-Z5ZcjXKefL2Yw46xcso-w0lpKoPUUTp0RWqL_Ur6q-9AFYBO43dfY_oQ-so5L4D6Zmz-ZFFLATE9L", width: 2048, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115190039956808818467\">RIN</a>"] },
            { photoReference: "AWCwydhRFuHMZn-QZ4dPS3SQYM5PXudGz5mwHB3fNjtHO1x6YnjiWFZF4naZagJWWVd3CpRnGrfCNAieJIGb9HfKd_HrvSNopB-RVOPXQyOULU-W8kK1Ha7WTPwTW1s6KuN95ZmQlVODRpivHnMW8HVHSqYW8ZlM54dSDpbh03CSTME92uUahR1LX4kNVs-qgeVmvw72Lh8Mr7gQ9o-oekOS-mVXhInh7RLgimutt-lwpScsRA0LkW9WSNBuQhjGFYJnpwOjb2AcGgrlJgb8rfEBkK7VcJYZI-8yhYE6xJZd_voAZbapr55UyYmZ8upBVOY1rzyjjUEUmhVQYRMvtmnNRxO4MJdDTRki21IklcRJplTAC5aWPIL44WBF0WE6MoZmM2iL_GJ6Ds_GbwwgbEsOPUoT0QahYuSbT5o6AJnEdoHr0Ql68i6m9Plg01fWpmSg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110908048180597862736\">ゆあ</a>"] },
            { photoReference: "AWCwydghKkciElKgYfqlBxN83sdgFs2owMczIq11xjfsdgog3vxhBwA-xQSP4HFqlpZ-pCAeNx11z4wbe4jXz6EDcsQ6TWfDyQ9KswQWPDAHPjnGQU_J_dUcAGqKDo3YzFQm7zRtjtEL68-zdwtgTaq-wY80fpAgIdU2mDPWI_lDROHNIFcB9sj4sI6UFUzApZA4XqdF0s8kL4A77TajXlU0YO5fils8Yr1vOKxDIVIIWgAGoqgwfJBKHYzLyLjqjh21RkX2NCKDqVV-vGucGVDplz-o7lZ-2SOV1dP-Gz2SGFv_qFrUaDhjIsqwJ78bjbh0vkrCDCniJtWR8GV5F-gVm9OIl2VY4vap-17zSfRljqI3qcfnE8YtiCYBsuJ3RGoXnutKWN7ECmGsnqvpOElri73tIiv8HGIq3znt54xfxApHMQ0Wdzem_EMPG90GHTUG", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108102974789936060055\">るる</a>"] }
        ],
        summary: "신선한 연어와 독특한 메뉴를 즐길 수 있는 곳",
        updatedAt: "2026-08-16",
        highlights: ["부드러운 연어 레어 커틀릿", "톡톡 터지는 날치알의 식감"],
        tips: ["런치 메뉴로 이용하면 가성비가 좋습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "연어 레어 커틀릿", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 11:00; 화요일: 오전 11:30 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ermitage-yoyogi.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1670162610111282071", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Seafood+bar+Ermitage+Yoyogi+branch+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "피시 뱅크 도쿄": {
        photos: [],
        placeId: "ChIJi0-ensKLGGARSTP0Ul5A3uw",
        placePhotos: [
            { photoReference: "AWCwydhedjW8ujMeQGxmN_YlWunovhKdvStXOaYMNQwOUj0C1JPjg7hBLI1fUel1c4vDVXOyCV8UHEfaugUmx6MPdTh3gyoArCSHY39SN5pRnTcm-DlKy8n_7_m4nRXKEX4mWkVi_vx3ePmF4aiDWOrks-49nmP2MHNKr0aEwYiAT9-kzX5T202uJMTXBFJ6IP6fOj7lQUohoZ13SMYn0R7iytkD1Tz1fhcAG4GlPz7kOEKmy0x5pMrH26J2yCy9QfPuDGB5LeE6GUg4cSYxmJMsUPDsrC_ykqKRcgF3_lp-xk_XIgHZAhM0o5dgNdujHD0QnGUQ4xsEupjrfp8bLXCskzN85U5ZJ4Tv3eNO6RraYXFeiQ8a-EUN6kav5gbVyMI8UMh2utd7YbM5Bx-Z1K3S8OYgeveySp6WfNPRKAUrqxwCZhA", width: 1260, height: 840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100879110186447238310\">Fish Bank TOKYO</a>"] },
            { photoReference: "AWCwydjs7vu-McvopMmF7FgxDwbc1YzDbO57pxAA94S3HtBBGdLo_78HAoyW429gvrOxthYuGxwQEm4uUN761CeptbS5SsR7a8JXtUi4-vmj5GLY1V_jo8bTw_XA_HZz1vhDZtwQdHX3qXRAzTepR8xEnjbE1gLHDrvzo15NelcNWbmIFTfInWd6-qTB4pqVTla2-rZwe5Z8ilYcpzTybmX1GmINpVACe0ware0D3PdTJQRfgRK_d3vhwQOq1WV4ON4Qmz3uwZx6nnDj4p0he9Bno3ipF3hyEBqIAGAqz3exUgSgLFME4ISUdgaA5PVpUr2XHj0HjjhqMrKia3nxA7YYTRZtub3jec1NOZc7SfEo1OecDjTg7G7hGhj85UIGUOCbr0OOO_3fW1za5ZhH6yyLvvMFHZo63HLuMVGDgamhJlT_ZQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100879110186447238310\">Fish Bank TOKYO</a>"] },
            { photoReference: "AWCwydgzIWLqEvCn8PPnP2nMMVAxN8OSzwrBif6tOZvVPZohNWvvqgraekABxou197mFD7vLI1iML3pwh_QHN_3WjaqxnNcwCU2NDuwu3YZnGMpl8rGYwSB_XU8wiAAUSPHIj9XiptjAB-231p60JX0pSGzBD36ZDJKg30evSUqY25y55Hydr4KOJSOA1ahxNv3qhJDkbnKU2DWTC_OjoCSAbEgMOCBOAgHQB4I4cnF-cGYAGtuI4zdX7QteMZfnjVv4x89SffUt6Dhl9QKqrcSUE3bKv_XwaX11uCFg_brtStJpqeVkzxdTp4l13DwflHXJh_bPj74aSsr0QSb5MR0Oob5GPjat9k0ENd8mj3kmJVzIMDwLHaKxGZ8A-Vckb6lNbfDOjzZrX3am-kxoS6Sdg4rVaOQZQ4UbBZH6fFMIDod75KwcDvbEulELHBOFwuSt", width: 1620, height: 1620, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110472780343723229684\">T H</a>"] },
            { photoReference: "AWCwydiLRuJHOT7aUVgHnFphKg4N1-K85csrmZW5cIMeMCLitHwa9dF38erEKuEZN5kgCdJdRhjCt2BhcOlYMj4vTOrIgkJkepiqzWYG34DgX2o9wbmU4sPok4EVe-RHVC-UlerhBdmfIDWP24qTVL0-bxDDKo0kH-l31xE1GB7NQXRy_lyHzL0cGUosg5z6N04dZA4aKCNeZ3nJ8q-HVtXb2uglaQOpuDxzA_ux1XDbszRCd2OlJVOxGfgn4Sp1uZt6PPjgvPXzYexlQ-9hPDPJ8glxP2YPl8Vl1MqqHaZaoyZ0hfyQhjjI8qxUInSCyPV4zKQ_NQVO9jjBTovfsGJf_-90hhP4hlpa0SSc-cSE0kqFguz-6aJ-PnM7H6GQObg5FX7ObU0DDoq5ODHXQCSdRwDm_SUOaBRGwj_05xB6pkTLU51gocUKiXBl6I7vBMPE", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109099143750263759946\">pasuta</a>"] },
            { photoReference: "AWCwydjqI3vvSzAnrY7Ouekjf_of90a7xMEr1pmGj7QkZoWTHniNn4JrT9be1_dEWAmepHGkyzcjKxLA-ImB0HwAXK-vEEgcKPXqw9DlLLxGhhTCpUWM8bSmbaGowi0JqACGs1XMvhY49N7dKuBOiNbqJCrVgs0l68wX6FX4rBSxy4Osok6DC8g4qRl0Dicc-vuMkilRJ4ciZWn-z7ud31TvBWO3mNFAkO0TeEOkN9CTVW2AlofReaoa7qbyFqg8vIPCeNgXxa6WnyVearmc2PFUok17Ok5b_NT2X7SrGJQWvxcLykYeBOr6TOzuoR7hHTsMdEMAqRWptElJALlFI6yjyttrmNRm6Md5I5wgdCYssVzak60r0kn5hRxuKDe5q_Nn72mgpe1d-7gMvMzbY2XChF4iQ5XTg9yEyQQqmlyf_U0I0L6pz75fqoki2nvJ5A", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117852503109872680563\">日本グルメ・東京グルメ観光ガイド全国版・東京ドヤスポット</a>"] }
        ],
        summary: "신선한 해산물을 사용하는 고층 레스토랑",
        updatedAt: "2026-08-16",
        highlights: ["도쿄 타워 전망", "신선한 해산물", "오마르 새우 카푸치노"],
        tips: ["창가 좌석 예약 권장"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "모던 프렌치", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:00, 오후 5:30~10:30; 화요일: 오전 11:30 ~ 오후 3:00, 오후 5:30~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://fish-bank-tokyo.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17068150411643597641", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Fish+Bank+TOKYO+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 로스터리 바이 노지 커피": {
        photos: [],
        placeId: "ChIJCS0wmqaMGGAR2h4xKb_ah8c",
        placePhotos: [
            { photoReference: "AWCwydhuTNe46diBjWOuQC9UtRWvzpI1vM0I1knGE46V0JcToDXdGa3vT9Wx1iQikgAcFJn8xxHsKDqIVA2_G2AsnhbMyKYqC1HKf6dpoaybx5eV0sYIMgJj5CjB5jSuVATf704kB_jXEpyYgEdgu8dQHRaBCmV2jA2LnhgVr04rg2FeHcFMDCjAMKiFH_98t17f15GSU_eJBDUOwao-j-roWBI6_IuEoQROtC7aKGRR9W_cDUAWTucb-GRv2iOakvlLwsoih288T63iXI0epwSmaDrY5WhB4iNYmgboY_dPwl9Gi6OOjBA2W8YJxF-eG6zrpUq5l0kro7QxDlxo-fEaCAqVplCHn5wBknhjAkYfAsVYa5GmUFX2xl4nXb_D7tDNaTd16Vsn1zpbO80AbiICMCFmt4M2fER2YRPtfU4Y56Yc_LY", width: 970, height: 1456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111430735470589009366\">THE ROASTERY BY NOZY COFFEE</a>"] },
            { photoReference: "AWCwydjWwxMXvnrVqLHDmcZ7BAebvhTsJOYtKskOxqPh-5ReFt6S9QTBFc1JzltesZcTirE2UUWDlRDAg2cUfi07k4v4u1Yrz5bOxWzLzJbEMgnBqnmwU84nFzHOV9DA1uHUzKHGGtCEAKiqYroZ5iZJRKs_k6gt2OGbUJFHRgZTYclMUnQ40ijdc8_Mnpqn2UYpwq-p2Rz_c5XxrLp4LHHzIzqlryortZgS0gkm__WtV_umImybUfvjI5BPo7TLjkZB15dyK-NoD3bNNzmMVjT0V98-ojmO9sNO8_0ppG-9s5YhNmatxKoEkKkm6jiVGWEtYulAeJunJ_tFLKDnN_xIjslsNKD60sU1z1xwm1_E77HVoDEWDlWWmchTBSKbSHeThAqw7tSqft3PUbMHgb0KBFL5IireUxZblBRMpd6z_jJ5Q6MDp9fru594YsO91g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102631443959357995655\">G.H Kang</a>"] },
            { photoReference: "AWCwydggQ6ERB6U92ikmn4398tPSO4caNefS4Vr9A5b_CJUtBFyujhV7Q6koGbiP35zNrqAJjjSlDLCJLC-NLG5KmwoTshhjTtBm7SZyc8pLBgvpZ5_6rgXx5-MLTa7kF46NiuYNyaF_n27gCLre8C5yzMXTWnJjJVLcrZrzUVLLeQtSRzFTsfUozBpLNbyRJxrBLNGRgzfigkm7-T5hr0t_ZIoZpLMXsTxlbL1gB_IXknyCpK7Qegr5YeYfm8HVH94aBlIo8CXZXh5XU6YCo03XGb9cWnW8_VCpgsLAGvSJ4DP8a5xNgziwTYGqCLCv3eUuiPkEMGrn_2RObV1pL45xe9LQcQHxpzSL4PbxjLqBeAOFA2ehByOP9iJehNBpBT9ZoLOFFp_mq41ZJklGdEWfScq_F-c7mUYwMih7Qged7xkOfA", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111430735470589009366\">THE ROASTERY BY NOZY COFFEE</a>"] },
            { photoReference: "AWCwydiXjM666A4TB7ys-3FX9LJ67f3YNdOqEDIcxjxbU0Hex3V1LaslAsZpQD-6joCAA5XLxUCIgslP-EePThBW5WHCe9ommEbjN7CDxuwhUi6mJ7Uoqrhjz2ZCIaF5UGlTfofp9_WGKGURLWGN8V_eOeEmUHs9eS7SFZ7J_ba4JRKzSvEdng2hTK3MHtTwLXOyGhSMa16SIU5orUfje13xG3RL8tPkQnhAOhdY7DVUjdR_CL25LfIvTcGpyLYUT6_29d99kJtews6UZw6o2Lwqct1a6YZfslMRrSdYfmVSBZG9LGaClENRuK8mV1EpTHrpMZ7MuHlDUjKxMQGWHE0O1dx4aCuz-WwOGAmjzdv9XvXFTsU-YU-EPPAZ0kN5PtrZqgPxnWz_ojUfdY-V9KsYYXcfNWNgkP9RJHsy79XOd88-CuRSHgeOAPmg1bfLq0aP", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100640608122641338943\">麻ー子</a>"] },
            { photoReference: "AWCwydg0yNwoTzJgk2H1erKKnMSO9Lc_i-MsHaTgbQ-4IJD5MAEHPH7UAEGvpB7RzM4o04ed1pNRobzaSVy7q-b1ELw9wGNO60r29aB1P0l2Rxx7RKANEzU7d7HraQ8VNSlGbiKTaUxoyr8NjQYiRMRo1zUi-djT3Gp04CArNVbMADgMTFPabUqBpkDc9_Co8hK7H-Yg0gxyfTNrbTysFoYf4mQjHjDM5FljtPiN5U8m68JXFVKdtCnr2T5ZZo1_ys_Ecrh8S0vlbQlIs2-H0UxJcOnMZQOX-BKmp1dj1gkhNS5l3SZOuYx4z07VwqPL2exY82H49HZa-xLoC7s9hZDisBb1YBj0qJdIOnkIYYNaV_AuwbYCScYUDuHGnFcARsYavvDhxvB1unnorH8ptowy2uxbky9_MQ471fM7irVhJmpeUCHaNMR6O_8jgfy49g", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114287817211213245784\">Keisuke Watanabe</a>"] }
        ],
        summary: "높은 평점을 보유한 커피 전문점",
        updatedAt: "2026-08-16",
        highlights: ["스페셜티 커피", "직접 로스팅"],
        tips: ["커피 맛을 즐기며 여유로운 시간 보내기"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스페셜티 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tysons.jp/roastery/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14377700849968291546", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%A1%9C%EC%8A%A4%ED%84%B0%EB%A6%AC+%EB%B0%94%EC%9D%B4+%EB%85%B8%EC%A7%80+%EC%BB%A4%ED%94%BC+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "리브즈 커피 로스터스": {
        photos: [],
        placeId: "ChIJs73IqKGPGGAR8vR56OnCUD4",
        placePhotos: [
            { photoReference: "AWCwydgsYaAwgJY0f3T3xK0AqksRg7MmFKPXdVN5KLggz1bQ_xc5v3IlAp68JDMLL5w1rAY24wiV_GCc3maIeFHqTCQz7gA7RFbMEXu5i_Ikkg5aJglf9a6eRcOdqsE_hLUUFCCyhMIhQcJgcXimFwUc_ESA7IrgRgIRAwAAKoTVH-KY_8uNkhOPiOEvsgjlFTsdHLb4ZkPYwZJUv-nNZKLQiVor9fj5LkiRKOLmU-qajA8gc1csBAuGoR5FmYbe6nui1rdYBlcCZq-Dl7N_RqbhNoCUphwBRw6UdAzBjcFyhFVLwDNedXxIWFBhtGSVPyuruu7X0Kivh9_ERt8qa-YNphqGUdOH7s9yse2bSWxh_XMFZ5SuXZ9scetH9r1lEo-Z5H-VR9ZfoROovp9hjPiPJtAzgu9NaB4j3oyR6kSQqoZEZ2cRJTZtFzQ1_bGinskn", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101731466592521564242\">Leaves Coffee Roasters</a>"] },
            { photoReference: "AWCwydiWcfyYN0dnnnSrdq8hGMMPJN0OGIT_XpILeAiJ3oWdId5A9mCn5v2LPPNCqpmG1R6UZTgzwsZTn5x0ccN7uPiyA2WXO8SAbn6j3Fdkk_zSX_PObknVOGKDpv7tm5bTFpbRlWQaN4pRvs-VFydjcek0e7N7_sMC9i6b0_oR04Zyj0rGYK_nBcUj19VL9ERwBy20C3IEOFx8FhWx877z0lv4FQHTxW2GDLYDnCoIu_IKWuX9fghNgBVvsugxsBWz3rZLAvB_lsMb2W6-vXkdco5ZVLac9GVCC1c6HlLy2WapTdnHtrmKOCRvlCIkjOR6abo1tHLeqQvU6oASJLF9AjW52z0QEthyeyaa47NjumAGT-2fdIiQrU9apojDvg1UiKsp2hhzMLOWs2kZCqtG26AZyEPCu0EE0zKP_bQoowz2GXrO", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111980632734587176807\">Lynn</a>"] },
            { photoReference: "AWCwydjankfJWyMw3mohzvNXuNvUhDXZFbIA_F8ggowRS09a1zFDAG_QecHLcTGaT4VdUI0CSfRxUmFXFyBrAkUvCaz33aWCxQuToo7cUDYdRHhKWRNrD6XcxFMNQ-d3X23dCz2Q0pOW5FBFDSCXXyN5n6eR_7X8Kev0QX-QW2bKNx-hbYpLUlb9u65UgjSK-FjSNtjLQxJ85KLmwASQFbc03MM74276S2eRn9Kr4ddU6RSzYVQ4lG1gzXpebHCb0hyOGq58MjwLtzNgxIzK5tRxs_J8kgD5GX1nGj2yHM1hnWInono9axzKl5_P0v1k3AFhWN_nTi6aOvTkLqUJig9YxiJT41UQSAdQqS6Sqyqgv4kMTpZ-OPJ658am6orFtpbbdZs3FsWTY3qf1oXNbUeIaGrm5yWvtuemfZ9gTjXxnooUsg", width: 1440, height: 1260, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109181476121033362992\">Josh lai</a>"] },
            { photoReference: "AWCwydiQ4Do76xZ-oYqn6N_Sk4wrHV_OremNx0BfVncXB7MiTT_vrA_FstlvC7YSH55kqSqqEthA_xh1g4X-H7lQ5j-UW8aYx1P7MtvRAiSifQqL-S3OMr-HzPFogUFJCkWNJ79TRfKXdt9HYnR-rJHCENBjYndIPFb5-bTfHyLyZewAwbzqdUh4uLwJci40xphMwwsWgaWPBIJn3gPUXnKrAN5TG7SNVCB-y4WyJ-PbD4scuQWCc9KyCPt42y46UfHmzYNLyBj1suzLP15NrYEkbSCEFLKHgcZV4XR1iMhNY6vMYoTdjXDiM0D4ddGnitQ7ejSdA3Z5ghGyvMXBGcE4XpgUSfIeEFf943Z0ApOzAsFrtPYQFCYazkdb6k77FIb93QKvNs8gO-teA0eUtuh8DnGFVLiqTIzH4FF2GB7HyUUHdhYR", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106284844195961311994\">Kevin Kwok</a>"] },
            { photoReference: "AWCwydh54VyUlIBGnYQuikdlVSlID64sEr6VJ60YRPQFcP-X26oQbBGRMRtbxq5PB8MqMIDfNjImMGkBaUA_2AxNfcDSGk7oEmnocrKxayTDk2ymjtnGhytbwR9b6URUHmN0oxJ1_5ij6ihpElXceqCRvkUaE5tmZ3MuzX6H0jsVrp1l_KI-V-UczxiF359RxddbcDHBb3TMFv1mbSdI_HqfScvs0Azzfuv-r8OhGj5KuFD0qXtBEtKnk7L4zXSJDC4zpHOdzrSohYt6cv9aXbKKlQrd8_0GNuvQD8_v00S5SPYxulBuZvutTQ-Y9ujrZx1jZ99l7BWo_IqBKdZ18_5_B4CWz30a8uhAri6trWW15OrMmgn38w3UDuOVIds-Hd0xdnEQsvZsGYcV0VoW5fMEA-wSSAQ7_3Gs16wZ3TkzLqNDsEiK", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101614130299989486833\">m aka</a>"] }
        ],
        summary: "정성스럽게 추출한 커피와 훌륭한 서비스를 제공하는 곳",
        updatedAt: "2026-08-16",
        highlights: ["진한 커피 향", "쾌적한 실내 환경"],
        tips: ["에어컨이 시원하여 휴식하기 좋음"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 5:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://leavescoffee.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4490303138371859698", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EB%B8%8C%EC%A6%88+%EC%BB%A4%ED%94%BC+%EB%A1%9C%EC%8A%A4%ED%84%B0%EC%8A%A4+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "어바웃 라이프 커피 브루어즈": {
        photos: [],
        placeId: "ChIJXVNv51WLGGARAFLANNXRSoo",
        placePhotos: [
            { photoReference: "AWCwydiSgnlOBiIf_LUJ4_FDDorkDLiZxkfHRvKJ03zhJeA3n-ejCt8Jzbk7Gwa6_ZPpHC0UgdMupz6xv11mFz2abAE_wa0JA0A5Ifdsp4qtl3RLsWIm1njw3P4EPyL6D0nWuSkO2TSxI_hgEbRN1U6lXg8nfr0TBTrh51xenke-ijVEm-oVxV_INGl8WeyvQkvL3OUHDJCQGzTWJlXEPBD0F4jLh5n_bPZrR-Wsp_3pex7a5A8a-vHAniz_wDxUz88-cqsWq6Nxg-sGUw9Jk3hBO5pUsl6piVQeMthg9RJlHZW92ichjjyRr1Z2d8ibDO6qXxunyJjXy78TUYpnPpEOBO5Wc22Ys1lo1Co5oWVr_cVhze4b1CsQYh3WopkMX5blJNJL4_Aer0r4WjbyZzgkwWR2r17AjbId0Ue1NcCrgrA", width: 1024, height: 768, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105278072809272864819\">ABOUT LIFE COFFEE BREWERS - Specialty Coffee Stand</a>"] },
            { photoReference: "AWCwydhVSJz_ThyBL2JF6sVtjj_Wa_6-HHhGuKmtt-8grwqDNKI5_9rgpptDxQ8mhnk66rf0pi07gCuS6wrVbtSgq8kkQY8lVFL5bOgrJup7XAm_DGPdBTObCv-tasrkVNCz5FEjNtfRaYOwW3A-ttAjWwqhvpnLQJdNPXL2oD0A7EZEKSI_4AJenMBuL5kqpSxlNx52IhgiJCDxf7ZVGQoqm6t82nG7A2Iz8l5sA_w14g_G7sRzOjAJcZQoQCIMnkQgyVAEHKyPoFd8UI0NOzBrqE-SlSfbUyOfjZTbnNf-JJEV0x-jxXE9KMR6fNb_nwNpHRGL_BLo7GDEO5H9YIiwBnmYYRShCqvHcLw4FGARjE8sFUq4xfChByKxy04MK1kX8Os90dcEo808rU0QcpOYYljhhzCxPCIm-v6Jcg46vGg6PsOG4BtGn7ZCS47JLdLE", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114774190972040975087\">Norbi Whitney</a>"] },
            { photoReference: "AWCwydhzRouv8spF98ZUgVy3OMkBDzLU1lVGG5-Ftd6SEAxqj_sVNMTNrFwWPP4v1objjeLI59gyMeK1FM6fIaOHAZYNGVV4wEMbKDyZp4FYlZ0IFF1KzHlxvoeT5VZknhCLUwpXholtfnBrJ4ehjoHMAfED3os8clYvL6OTRwEw_fHgOClh523a1Z1MPYONXWEZz6Q8ZOJhmV6UYEw07WbNusElUcp7qJXRuMXYKZ7UTwmRVZi3KRQdCEivSBGuW-dW8oZqsanOdWj86XrseXwfNmuz69rOLZ5s_5AfkBqjDzvaUgm08TUadABr5UxiLjVCVJtro9cv7ZGsmHdmvltJsi-57PEJs1Y4Y7sNf3M6flqvJKtyB-xULkbAg4FGZsHBeojT-Vno8xH9BEUaXM0zlv2EPFrN3G1vxLNSba-EdpT4PA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107375524198564700142\">Niwa Ko</a>"] },
            { photoReference: "AWCwydgMTV3RCZaRcfQmuaeN7NW2ejoGxEXonprlNMx_XXJiDiRMfb3IVXJOxHjJ4sZl2GnzfywpQNT41MQD14KQz2eAd2yj8wylg1SGV-Twp6-q_TVQZaBlF2hdF1k6LH3fuXqtVNh-QIm7E56MbJiusgPPFBanPb3mEr_ikuEd8Ihna_c2J40RdP0ltDficMuUWk-8jl1rtBBvyxmrhQeV0rW9i1ctpcu3FSv2rG5BhiPfl-frRCB1RZqI7T3_fGUqqoF6OlHk-cvRjTWCbzo-UvwQOTZ-AKNa8LPKMbrXNEnZtj9riX80v8cWbow42J3UFZ5Xzq_MbdRQWNqElEwYOZ2zix7NEJZv5skCYfXn0wDASAE9FlaJ9LNQQVp260lV_NdnuEheyNByjS-V4lQKfSO1k4YnhTko9qy36fsWizRTYf7S3vCWfKqeile9O1Jf", width: 4800, height: 3763, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110272731077652510045\">Nick h</a>"] },
            { photoReference: "AWCwydj4Oe01dod2muYQl6TAQ9pIy4qQ-xM_KfMRC7pCLknQtHalqEl_beHEGaDfYyoYocZZnGz8t1gvvNPTrT-hqopFntzyLWdLYoobH1-0E_GIW0Vq--R6d4dsHHIWJKGOh7HzG2KcwBj7xaCTBvs-zD3eedmq2AKG9cSihuCurPli0AG4nKR0-HPjmfNNAThXB1uMbgoHKmwuWH5QAZsitdILJfXJqZb3CtSHXxvBpXdcTAyAAh5aZVCjgUXojriuLDiO8vIx5XhaNbBsl0c8lemqxvob2tJoBDetMskwkJHFIEB3tzW5XtDv5lKQVgx716Osv40Nctuc5odeeWOFVYh-1Uk5Maaf1snFUOjk_ZI9udCOnj-V5zSqGwNM4OMGSM5jjH7qaYobyPcJrtKYYe5tluU6jYRWXnWdvZpnccTcnGvsYONS3uqmTmXwyIg1", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114774190972040975087\">Norbi Whitney</a>"] }
        ],
        summary: "전문적인 바리스타가 제공하는 고품질 커피를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["핸드드립 싱글 오리진", "에스프레소 맛집"],
        tips: ["대부분 서서 마시거나 테이크아웃을 이용합니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스페셜티 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://onibuscoffee.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9965007839153902080", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%96%B4%EB%B0%94%EC%9B%83+%EB%9D%BC%EC%9D%B4%ED%94%84+%EC%BB%A4%ED%94%BC+%EB%B8%8C%EB%A3%A8%EC%96%B4%EC%A6%88+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "세다이 커피 앤 로스터스": {
        photos: [],
        placeId: "ChIJ1aRTMACNGGAR8W16w3Uzd00",
        placePhotos: [
            { photoReference: "AWCwydjf3Hqpm-J2nn4xSaClct2wdjJEu-iCPjEsD2348UeqS2sLXaM6fDZTQTu6f-2ZCdPDyC5qe8OZPGDmEHZvF3yyBLWGpIZ-Ok8P1Z5vzkosCwa8s3nM7mmWKtXo_ISCXdGKA9vqFDVPZGUzV8vJ8HXC7x0kjMvoQnZ8SgwMDInYTQQ2u_tJpKApZELtnkNMRkr3c2Zm7Sd0Cy_hPkpExW9a1hilZgv5-8pMwU-_K4TGIIpIeI7I4zXpDKz92M07YnZiF3qxyAdvw8zosPqlb0EdAu6s92YsJZvBts3kw_4liI89Pek69vZm2DYfybHgpnYfoP1v63JEd8ka4AH8tgOq_1qLPVsK8VTERb5dtBDOOfn4BpgZ-z0e_z2s3s3zgyk1Ydso2tGL8aNxd1NahxL3csBqpe6et5HV66eM7T0", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108586430004479201068\">Sedai Coffee &amp; Roasters</a>"] },
            { photoReference: "AWCwydhuW-u_60WIPAA8ReyyO_m1r5IwQ6AmN43ir6S4cWm64s7bWOj8ok-1-E3OnJ2sWw-aVRopSKT4YPHVtGFg_lKi9CQf3w93mHk9PzORM0RVao3DqFyCd-aO1khfYMLtEn6W3I_ADJ-i5pdIw7xiScXYL34oO1mGiS_P7YELZViDrhtLDjLIFFmnoCjFCgRmxXQB-jLP0Rq-AVKj0DQGsPTXPVbL4bFzdqLrp5tuh0cv4fw9e1zqGMxT6d1I9gqBIGVjsYxZ5K1mYjm-t5wdhrQ5fOyjTeGUNVSwRSTFkJjJ9p7WfJT_SiCacPTYdyj1kge8cz6-FWFXgeHKIgA5YPMoJ5EnwCuw6VVRmXOi-pZEMSQQh7bHia7kizHlOJrGtA0dB4bFqPQhfCRbWEIRg0VGKIGlPSlYmQpDPtuRRHc", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108586430004479201068\">Sedai Coffee &amp; Roasters</a>"] },
            { photoReference: "AWCwydgim4qv9K6ZVW280NhICCjv5n0ykfXfA_0ILdTIcYFUieaw5hoQwB3RwNPnyQuFa--ZMQYaKi9Tzx8yS2UFfM1dJb4NmsgM4uKdCPLMQHL3s59Ht76EAUlF-y5I5FR-c-x7G6BSO9VCbY4XHflT-C5dxnBmpZ1JpVdzRV6OjJqgLM67ufMJizdILy0ahvjZ89THtx1aCKr5Fc2i42zWzbOcPm_5YKh5833HL1s7u9yuV5nIQ3eqDvqgb6bk3L7Cz-Jke065LfcIUz0Ti0_ggP8piv6pQFw0z0K-My_gBw85R_KNdytGY7L10frNU487ztYZL9JgbXuzFTyPGeOmx2RbzQEJI-9mQSSUU5C1QdxkagU8tTSG4qd7gLKdly5-E8B4ydbUWVPAkWBQKe8ZgW1dbsQCOO9csAqLqaSsqE0ou5Hk7RN_2xrPMrJ__20x", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113114781262567038251\">Lazy_Dayz</a>"] },
            { photoReference: "AWCwydjUbmzts_OFoyWZ_yt5uDApMNtxNajcfKfqHY2ATxaPFyfTqHqrH1a4S3w8AHuEedm4oYB_PTAdF42ebbhqQ7IqaTf5vdvzJsd7x3MWGDao2RYS5JnB_JlhVV5vGUb6v4cucMGoWgSYdjIhjPeozrVT1wDIVoicR78vDBfQTbwBir_HAUHRzcMCXqUqNa1t-sHy83fmA5twoGKumGFKMoZoog9BW8q0qdGXuHwazS6wOF4mDsfhyjIKpbZGQzBPy0p-74hktfqlNgORGI6UsWyncMVp_uk8_nhxYK6j0z7gV520x6Haolz1BYoXLdVfJfFjOAOLoJGMjQ_dvhuljm7103SDEaTAaxm3dzNkhbWUY2DElrmj6tNUQLQ3IDOE-e2d9JVaCT5jIY3B5HvZL3FGjahvRKvXcvmMYG3mnhhiXly3E8TmY67v-d9Xfw", width: 2499, height: 3332, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117914856163006988377\">Simone Höflechner</a>"] },
            { photoReference: "AWCwydgyh4ShddlI9SaynSoo95K6zxIftwPL4HbDeVYj7W0svLrOKntp4tGSaDDOI4G7FPkgouztiF8tENtgvi4PZoIKARaQkAqtGNXSMqHIlAlZasAKPFh6sREIV6IgBurlErqNTcHo2WnFtgIj2PJh30b3xKYVPk5KJf1BHBIGaakEh76WwYG84WReubJwvgBhiVjLHkhxGBBKITWmJFzSYihqCJmhlkGSgGb-2mnCgw6tdfNBJp8VZtjGsSSVt1fW_iSOuNvr4o-lKmZuAgaFq2AybMyhsaj8GPk9cQV8RMS0Yb-Ek5F2Tixt4zY3gpM_vS3vvUtxs06COrLrKt15u_lPhv24TZVrW5ggo2QLsrwmjo0_l1U03O3vOe6LhgwtT4mWOLwtxf-RBzLFvLh1rEuWtIjZzNd2hN09_vyLmDIZ5qvnCe5xI575NYoB_UCn", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100350831104811448557\">CC</a>"] }
        ],
        summary: "바리스타의 서비스와 음료 품질이 뛰어난 곳",
        updatedAt: "2026-08-16",
        highlights: ["친절한 바리스타", "맛있는 더티 호지차 라떼"],
        tips: ["더티 호지차 라떼를 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피 및 호지차 라떼", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 9:00 ~ 오후 7:00; 화요일: 오전 9:00 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sedaicoffee.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5581986844032790001", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Sedai+Coffee+and+Roasters+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카페 리이슈": {
        photos: [],
        placeId: "ChIJfyW8OaOMGGARiYF53TCqEsM",
        placePhotos: [
            { photoReference: "AWCwydggux9ngNOEw7H6YWlrCFtvGwkz4fUgMkbdibcSvkoba1YR1dAYO3lbDzrV8RgD-TQ8tY2oZgGo701KxCjOPogpncYmJCVGvL5-z_MchXgLWJeKe0Z78PYcTw1wxzs3KE0qkZxa9kPrWWzY8YHHKWeOEAoggh-EskLEv2WoBxHPgicAHeRyhLZEJL7wxwRGzv8o6s_9vLDpDoLzGSFigBN-AuPQlGKhxu5XHvvh8aM4Tl-Tu8RfXsiZFwGcbnouex5HxcbIeBT08XNYi_XeHzJyQ2xskBeIjvUyotF5p2NWMQjX2AN-yDMpXiYEP0f8TvjbNRajzabcM2jnPBYDRREuKb8Y2s7KHvuHZ4vVFqJEz9z5sXlGGAOBd7OlxSqrHXyEmahkWxdyLtjNAZIwh7vprS7H1-7YDU09BoVVatIKAD5svjBL5b2qky1VinCK", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114063354645086391313\">Paulina D</a>"] },
            { photoReference: "AWCwydhMJ3VcErqdPqtTwdXUSX-8Vo2ah4JgHqOfZPEBxY-6gqouhPJZwjJxes9g9uFhaPVSMrcXN7Og_REHb4y-UEulDdqEBb26BACjkaP_Whk7oDLdQzoPbC44QpYrSdjP17zYq9scD8bdLq0ftg0vGm1g8fIXvokj415_ss-a_UTntHkyiWWuPmNVVyUXaQddRVuyvMgGYPqaYI5MHyWrPRnTdOBS1hmTtTrcn0befPnhcwJf1QBA14lUxOH1uQ_dZGbJMUA0zuRlGTC_Vij9WipEjypXhUG6NMxN-MxnfHA_fdK93-0Eq-QF0hKRLyhVmU-6CcBf1HMLsekvLLBsQ7UyJfQOgk2Q5gm3htUVMobNxLaukn2zu3hUlbLXjkcDCvUx_l73TnOwFS8LybVpajryKmWmsuUFiq4hbJLgjZMZwg", width: 1918, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116496998183576471247\">LATTEART CAFE REISSUE～リシュー～</a>"] },
            { photoReference: "AWCwydiVBtlAPXcFhLgVXSGhK6tYEUi2uRwjqE-BeXK8oiDWACGy7ZGyfgRh9wBOqvGbs0klN7Ru2WQBJoI73QgKdd0FbQedDyQXS95FpGh7fDFYQbqkiKYMrS9LbehO0YEBDUHBAbEI0DDPZkKYJvV1Tk8x0oHxuDuHtuJBtTMuZGPVuD-83MftB3UlatQW93fJzPC2h2CSQQhtFtWcAFjeP06bhOD7dTD0_Vi81NUmHAYD6mhB4qiNEhPaOCNHrYai4XxL55x1HHWtx2z9gYk2Y9n2VzDxz1RvIujMUuZ5-7adGOBeLIgw57VUHpuK4R4HtvVRRDDf6ArlTfCviPV9i4KI-MmFrRwB6iZsS8jXhhwkTz6suwjrPM5f0lLmeL5-Y61ra3jp5lnycdZ3slkLSQCinbEj8w7l3pd8MJ8s7oy4LW5yekwV4WgsGHG2hVPo", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118367648549097196440\">TAKA7620</a>"] },
            { photoReference: "AWCwydgaXfqgpOtyAlXS45W4K2KpisrW36QetE56T1w5jU4BoEiGthDG3DAdYLmmPzrLLYQQJhWEdayj3zIG2_plFAoLVIoQjzZlOwFtdbChT88WNYJBh8qmzuS2nl3CmRdy48DxJ89eU_cn6Jgb3QEkpX-bPhwUe7AxMq3AblIeTjCpXMFFt2K5JYfT4kDO645_o6VFbks9UkcUNLYPfS6V8vdxDMzuBjRrif5teAf3gAG9xDLFRC5JteQh0KuYMQQCebEqI4eCngkqERBKiSUagEa2jovhM5GwzGCG1XMjcfFhss1d8B3o0izMM2U8S-1B3lQfqNL5-Tlx0xLPZollDdKQnvVLJf5O3bU7uyjzHz95-wBiOsCu6YVfiFilLy_w2FKLP-V5cYIo8qCcXw-hAusvfSvPas1xeRp8_zYTJW5CGY8m0b1eXwsjdfwWQBKX", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101860911479439943695\">Millie Tan</a>"] },
            { photoReference: "AWCwydhdLQqeW5kLTxbnGtGbtvbd04xDZjKBMD9i4kmXzHnMAUeYdw91OyEb4mKyWKEHjaVmcJq8_xt-vs1RY2wqKTUrR65CNCq0DLEJ0Qbo0mnJPpKfsUa4PIGx9YAk_vI0sZQCCGBITu5VvuJiSuIaCTQF4g_YSm3vH5ytKll4atKR89gUCLFErca1mdYgxWDyYxP68oT5206Mc_mnSaDbukAADFEWp8OsmHuqMZ0CxvuDxgTiWtt3hUcuhwL08s2LZ_nLa1j7StuKZAXk6ejsZrfQf6G8ruz83KkAr7KARQrTRUSDSv_y9U-7WBPgNtKPMYVARCjhe6zFUahyVdLej_CxUuGOx-pSN33KXBNM6-qP_powirSOk6y3o37xzqBpuUwCuzSpls1Wb_I-unHvt1rL0KHQyJo8qNX3cBbGjalfQyQiXbCil6mgyj76fK1s", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118367648549097196440\">TAKA7620</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 인기 카페",
        updatedAt: "2026-08-16",
        highlights: ["귀여운 비주얼", "맛있는 디저트"],
        tips: ["8월에는 대기 없이 이용 가능"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "디저트와 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오전 10:00 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.reissue.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14056484513827619209", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=CAFE+REISSUE+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "5W 도쿄 1962 하라주쿠 시부야점": {
        photos: [],
        placeId: "ChIJXbmU8UGNGGARXX5B4fnBvZg",
        placePhotos: [
            { photoReference: "AWCwydi2B5thcpYCYyi5k2_-SqYsGNV-fGK1GZz7UetohhNPhgYeXTen0tOlJkvr9Z8OSKsAanbcg3AMrhG7__GN2ZG6lugV37H9fScMJD2kzTTCSTGK30XCg34vVGzL8mi-2eJju2JVSlo46Ngg9yciPSeAKGi1nOjONAKsMkxV0tcfVowHRy1pgXbIcctRtSkegV2PxmxflqiaEZXUaGMyCb8KU1T-SeRUzE94gmzgeydpDHSG5AceII9J15pniiC-gNfzcYE1rMxyFm49ahoEP5vBBfo6p6VS4pJnG2BLrvAbtrAV7vaHc0vz9HBZSvKszAaBFp7Ck0bQIfnsQ9oWUmF12fqnISAqSki-gRsYxoRoiNGUUt4MTTdD4_6oWj3kvZk7txxHmbiR9QY7AmJ1kmn43SI10ivCGXGK-P5kCojvtxf-LSza9ZoF5ddo1a74", width: 892, height: 1124, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107538657281032786429\">Wagyu (Halal) Steak HamBurger &amp; Ramen (Japanese food) Harajuku Shibuya Restaurant 5W-Tokyo 1962</a>"] },
            { photoReference: "AWCwydjLfwHktR72lfvzcob7gsFDgPyKNTKMSyunsApYuZ9JNRI-EszJjf5jm-5xAkVYr9P_ZXwBmYmmIRvm75lgQytNg2gpr3ht8eMDbQrGzPIEMDzIQVlOSuaG0wG-YpcU2jcPYP_FTR0ibk28w8DvpCZBDdemllfCwI4edeA47l3Fk615JOsTyvxYPp0jvr8Qp_dcKd97avSSUOBs6nHnbyiXuHJPf65_CVePGHAMKGVcjZPnwhqs1LFPnaoiz6ty0zqrNbVSZcBiaMtEMUBu6ukf9g2HEOnaTgHP9b4KR2ZY-J4m9ALkFa39jVaJem17jkii-5V-6DPSWUH2LWKXwPCq6f-SIjPCeXDr6gCiqPQIYDdRZqEwfr3SjQAOYQDwOUW0yhYPCiYrfdhKSK_yb5IEWD72kdu6V5uc7zYiPGnrd4YPFevdfFWBNDM4kwF8", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107538657281032786429\">Wagyu (Halal) Steak HamBurger &amp; Ramen (Japanese food) Harajuku Shibuya Restaurant 5W-Tokyo 1962</a>"] },
            { photoReference: "AWCwydjw71OLJNBpgd_el-NeLav7gTjqjcChRZJ5JTtCRjGxm-PN4mOVzYeqbFP2E77w2wTct6P_-O0tFv3Ol6oe-52_sK2e_5n6ox4CjHnZhJhuLqX63V6iH3kps70bz1e7_aNWgiwONa7sWMOi_UhKioGpD9G-HVr4xNylGAdoJdzMB6Ne2G14b1D96VpasgvwNrIAUdIQ0wuztSaMEqlLHVUJv6RC7mTmYeOqUcaApATC-DN1zCdfQn5_kcIO4FvXezEMEPv-zesP8wdNNRPf1bqVgT-k1mdM90TqQVn3IjxelF8O7IkLSs6dQKW8skeUJpnyqMUJ3AU9DYCIpq15gqdTUndhht8Ri8JTKD_kE5o9cTHv0hvpEeV98Q8Mj7fwX2Adwz4hF_oZOyoqr4996dWhRh7iJzBjzgl0PwEw9jLQ4gX3LU_GOtadfCO7TJVh", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112182297526987065725\">Emily</a>"] },
            { photoReference: "AWCwydgy8jjwLkHFAZK6PL7TLutUanFiCFcqN2k1TqP1-ZKQJrjnzPTP6Gu9-VU9EzLEgfK-oRitSDxkuq27OgNBhlBhBfPNGa9UVvb06uAidy0mBjepAjIWWjwKenen1iUH23wxksSPyl8kB43jIiecH7Ceu8Kl7rG2cD7ia5QxKYyjPBmh-bsGtFF7OYoEVgb_6rsH1wBKAXaA-bffqhOolu9DxnEJbkj1RHK3NJ89FcDDxVnO50tE8xfqguwn7H0uncHNUBKo1w6mAKUoNUZx-gXUGfReSMk_LpbcxtCmg9yECtd1Nu4QWDNmDijQWHurwpGN_Kxnon6lMnDKCGzJ2saKQaY2kgzzHP4aiJxAQdVm9019gqKkZZR_2XSs0l8dVenwy_f4fz50gvCiVjS3p5WMnQ85G8x2XsTUd_FUHvm8N8U6BS3SnCGsqABGrwF9", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115349527189969794690\">Beasha Adams</a>"] },
            { photoReference: "AWCwydhM6XHUWgdNUb1eVaEYF_V_7KQUS-eUxwx2mk93dzje858AVyrWOE7WMyo1QmqhQ5v6EebJ2RO-GpoDCKWMDobWT3wEA4WN2T-XLjIioSeORGWQL4A_fZtzOR75SkEH7vVX-ZDNquvugk2dQFNGH9o2vA99SlEKCSL5g4yo3NddkjId0lpTn2xIGUE861jJA1VgjKx0wwNVSIbiRzjAmg6LsDeITyNkTLjlkf_oACzIV1xYjMhbWFSWSRQX8ZbPnE16OrM0jF4jFXjfSFWHd_x0lB9nTG0_sr9DWb1x-BIQbwBbXgtNfzl0P1KzBueoEmqUO4bTfVvDD--BxoOPVatUN04lpX_V8O78ho04htFec8cDkkfDkqktaRLGU2QUUFF_sa5Fn3yVYwIE88IWY9-bEWcQX1SLEErvjC8vR4J3C26M6RkgRF_-hXqAclkb", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105932969737400239276\">Fabiola Del Duchetto</a>"] }
        ],
        summary: "라멘과 와규 덮밥이 맛있는 식당",
        updatedAt: "2026-08-16",
        highlights: ["맛있는 라멘", "와규 덮밥"],
        tips: ["카드 결제 가능"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "라멘 및 와규 덮밥", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://halal-food-wagyu.com/tokyo/harajuku/?utm_source=google-maps-hp&utm_medium=organic&utm_campaign=profile", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11006166343333543517", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Wagyu+%28Halal%29+Steak+HamBurger+%26+Ramen+%28Japanese+food%29+Harajuku+Shibuya+Restaurant+5W-Tokyo+1962+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "미야자키 푸드 쿠완네": {
        photos: [],
        placeId: "ChIJr1ghQNCMGGARoUIuxb4WCy8",
        placePhotos: [
            { photoReference: "AWCwydidnmegHnUl4fZ5Gjtm4EhWt9F8qcFU_rQLJX2cP6iMvu59AQ5B9huWhJiBDWZ2fgdG5VAavW5BBDPyz-wuWjYoUmimhkOmc6LRTVoI3shpyQF_SYRwYU4qcrdm2yqD36wG573UU5bgd4qmg3-5fYuX0xlFi49Wj0UJFSd_wqr4Q1EUButZRNQg6rbOlsWqe8X8TTeqXJ3vLiWPodXPHT_M_If7f_xS3CkjXymWEcUVi9xjCgnIA8IYC4gFs-n0TNPyQststWHlEPHfErb1bPxfQMg-DstQIVaIPh_YA-IFkfEbD02MobREm36F0Pf2LoMbL8wIssuJGJ3RR-5mL115DDWBeLQUSW_ETy3M1ukYTl9-H2l4az5kbSPMbP-P3v9j_u7oHz4MTJFnaDk5WLY_q5gDjV20RYNIlykt0Aq-Rg", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106175226635171664088\">宮崎風土 くわんね Quwanne</a>"] },
            { photoReference: "AWCwydhKCjhQD82y7T4F5t7ZhLK8NDTFR_pn-iqDlEjzVGmoKVTU14CQlW6hdUqSdM6V_y_kxVPaxAIYikl54rWaFtbUtdB1tCFiDu8VJ1w_zMw6nooP6pDKRgaND8lZAYgx28RuLYNz6eMrqtZjp-xJ581h83_fgEIu8OnCZxz4sjWXuRqkBAb-uHaCYMRNLP8Bs5ONY1WHJdmtbvfBLhq8d9Rk5SEqFDWTESTlVw5A0EFTOea6vWctkIdM9M4__cbIUNmEJbgqsw6ily0Gr6Gp32uUsACJNuI3hBZVsiNlC3k6scodpBRaGsnLd-j_cYWxqvypjLs5bfchLvhJNzIFt_OvNQLADJt3pdgxDozBTLudGYKENSb4gSkbwrpJ5-z_GzkRQceGv5C10r2zvL6lgwPNpXuZyOJL9mQVgvRoy7R0Tw", width: 3248, height: 2598, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106175226635171664088\">宮崎風土 くわんね Quwanne</a>"] },
            { photoReference: "AWCwydgej_RKY_I00jR8VmHV4wu43_l8Hvk3EZiTpuXANWGJrmNr15aPnPfihiAZdyhDnQVjd9edo32MS8Gr7r7c27dtEJuLLOzwJtgLHdsRi49gYlGm_bGMFWV1oiXcvfh2Rkgs7kTAI2DbKPEDhsDdMiEsj1EwMoeFvP-ZPmAuv8IgGh_PR3bnAOmLI5dRoEX4Pil8nd9QifOtYX47aEKzTSXO9YJ16eYOJpjRaeXHqVEQxY3NcAOS5SxHStaQhkKRpkbTugCqbJd7bH3ws92zuuf2pzrg12TwbU0JAXzHEi93eltVmN1PxtRLCIYUIELslmNr4_1uggcd8gwSJqHBfNc9HrMqH8-P-j7AdNGOXAY5VgBr7ET0gvEEYeSo8KuuUkfWWA6S2uHzvUxVA0LfKG3-AeY6OMeuyKG7jA2l-1OxP8fxbtGTPxA7vtE5Qg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104888566775661322148\">ヤッググルメ</a>"] },
            { photoReference: "AWCwydjN4j5CsIBAk1sJM95RmduroVNtoZk9uSp1HegJhKWNZKtGbga2ekeZCh2XL_spu3uOkgr4mDz9k8F8Bmp-tMXrX2W7-5hRZgBQDJNbPcfBLIvwajllON1ysY05iXv7BgZEauZ36yHIfDJIjVHspJPPBepBvAeB7pMy6wlE4zT3p2k3hugkVG_tNRn9c1QjyaLvL63ZFB3Mlk0RNvI5yN_G7HPUbBnZp8PckfW15POh-GTRw1j9vmkp5wFeFnqQ2fTFm8Xw1BgRQqN9PZ88TU_zenKZLqLXHgJXbDMWm9ozUzAhifRS9yvkI14XUs1hER8PgHnrZQ9kv6fvBqLnOPV5Ata1m_p2279YVvW8ArI4GfqrKVlgZG_DsMIny18o_sDxoGqt52B6XW11miA6zclBBzw1u2LM46BdJdW7Cx3u84r4AbtfMP6TbcS9SWSI", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100797276471625681786\">Maxclay 003</a>"] },
            { photoReference: "AWCwydghsGXo7NO7iP98DMXxrqMetwB60A1_NSGxDxRKdy7i03QWAiOoKOc2kfZzizHZFfhkjGdBeoRLyWQwKTrEkrq0PfhLqp0FZ3Mrfm-Rna1rzVSs17WEU0NaTCwhhAo3PWMhkF3Uh72C4Lpc8gANBpt3q_ToDft2nk-pesZtGArXpLcuB0z2bcd2IFddxnM0WG8n0GJgfRWP7snTcOarMxnQX1nkCVjJQ62N1TgJqTF7phTZ1w1xIQJ0c0bVPXCkF2mA2UZgMH8Xx-7s0vOa7bGopAEbd73J7tE7Ic0fPRqOtDdzv0TTjAHpyS3f7bbX6vzDFanQhV7DvvMNnqy9s43ZQHuSmAVUDd6MLBfS0r1UiNtLtND0370VRftKxcLEKlvFZh_jSl86iLjcICmSUyX0V_fNBmDwJ_Mwf63vKaz70c6SdgI2UhH846MJUKrA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104888566775661322148\">ヤッググルメ</a>"] }
        ],
        summary: "신주쿠 사ザンテラス에 위치한 미야자키 요리 맛집",
        updatedAt: "2026-08-16",
        highlights: ["미야자키 규 탄화구이", "미야자키 지토리 탄화구이"],
        tips: ["미야자키 소주 하이볼과 함께 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "미야자키 현지 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~11:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://shop.ap-holdings.jp/detail/222/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3389828153134170785", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Miyazaki+Food+Quwanne+%EB%8F%84%EC%BF%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
