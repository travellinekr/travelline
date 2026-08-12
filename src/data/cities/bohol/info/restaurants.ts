import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "호세 팡라오": {
        photos: ["/images/bohol/info/restaurants/jose-panglao-bohol.jpg"],
        placeId: "ChIJT_A3LuqtqzMRVNBJlqQ6IlE",
        placePhotos: [
            { photoReference: "AWCwydiar9z45qy4YLDh-vB4eUTicvRSEYzs_2sJf-WhyAtvshg7ebTJVNBAxt9KZvP0usocNpIEndn17P8JAzWThk0uljd9PaRLjHaDPOdWEKJcujtjafGQIXrsbZlQSU_h8nxEPDjRymFLx4I9fLNoK2EHLaWefgUihE9tZGnITin5tvFKLRCP8wKzJSrwQDf0Rk1O6EBd7NN4QLRcOO1TQBd8yxZET2Zk7GMSj0Z3Q5Dj9uj8jFXMxhnZmxeSEHWiKv4uoz4bmhronvqyxeS_o29pTrSy9-V4vFBExKXVnqvc7Ijsd1x6LNBV9QKt3bW5D27nSxx_V5Z5z9DvOMkb8t7wOs0Y8JuMEXb5KGZ3EZZvaU5OickAh7DcrBpynKL2r_-24vhqRORtpO15vqAs4QncQC5hppbojYz0hoiGW10sceBMLXv-Z3oykwsLvWlZ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100958591755267539438\">Jennefer Gemudiano</a>"] },
            { photoReference: "AWCwydi-ZyBA_jG1pXpM5VHYTr6GaJcPxwwOe7niIsQO_AyutGndETS0FmKolelVooq4h0A4VLQ408QxmbbkSAzQPNUSsslbRBCiBxszfOYDsBmogDS10cTroxz2Gr69oVQak2JtpaTbzhnV9atof9vvdYQapXhNv4upSvdmIMrBBa1mEo1Cly77WNNTyqPgN3lee7H7voz3yeEWKPnF2RINcx9SdTdS1Ep7ieLPZe4wu3ENvQV1ssBPgzKEBLW9QAJhcovGCugX1W1IIJiFQfusVr2c2aX3jsYjUBl_9TZPKz1jE2bEs2YnNxZGSmGMIVbJclGhT-bvZim0Hr2du4-3WYXE3tD5i6y-_y-9Rl4OKXESEkQwtrRzqG1KNJUAnM0j7mPbXTqrCsfd8xA-T7B5Rz02l6h6f4h7UOdnnrs58IjNGex-8WyZmxf0uwsaufHE", width: 4000, height: 1868, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103775588611517127464\">NyroEscapade</a>"] },
            { photoReference: "AWCwydjJRXcNqO3lkGHBG8FVVl1vYS85mskbtg3bVqU1yZYXSgdjrKGJpH2nvveRo26-UK4K9cHmhS6hn7AhXb1MVZq8CmuZN7Gob_V2bECLFcH3jaDejTaz39o0L4CNkCR1_E7iAW8kx5vqAp7sQY6rLihBv-KA2CH2m_DVOL2_884QmzlXXtsBw9bIjOxe18C7wbe9TadO9c2NDDOZOFh0G_Vwwj7K1y9m3-vZayihEM5d0KQC9V205DT-kqIRze2sSkAYtSIfVVWfSdo-Cpn6LqD1T4k-wImq-6WE3iCnAO87xv7JsZ4XFaWCxQqU-zv5hmouMiY1yWsKKjTehlTFT7dDbCghkUr6Tx5u1Si37zm827kwJbLiGrbfkKB-zfhBy9aVT0FNCk8jW3cEGZ8p4gn7SiS36kzFWDab6sOJoRdavAaAX1NhrDLphOWAEh-K", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111211288351589044284\">周小婷</a>"] },
            { photoReference: "AWCwydi1C7__90FXStd5UEjYudw10lestHgW-HjInoReC4vC9LkorJnlRHcSQfQk6g5GtYj-RnTzxf6v-nIYymAuvjmIEhzMndKlAiQIYS5ghzfclqiBCDrUYPVE9mHAqprGao987veGLx0ZngldbA0fao72Qr1YIBbRxHAyoxF5ALHWeOa62MCT5mkGSTEOYD9qUSf6WAu_zdvpif-TkuSbFyVOWKthDMp6p8brzHKKhsKtwm71ZvVGuNPXxbX6aSdbVTrejKXxLXAHc7dYjIIWqOGE_2BgNY37WQie2fHD__qPjBaw1UEId-0kSLVdRGxNvUIIxEQRG9qqC0OaoAObB_6ZAL8VuG79NVubMdaQ_dISVQ4uC6LgKdN6Cv0li9xgljT8YQRdh8cCTMpQ3Sr_23HEiCNs-UZQkgDR-uyTvgLwrQTaR6cTcL7lZDbPGaSa", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113178491401859717834\">Jasper</a>"] },
            { photoReference: "AWCwydgjc4L4GoC5Cwo3MhK9lCemlDtHsteA2K1_NHo1-YFER5vpE0Avnb43ALrCe7BfyxKT_U3cnZ7OoIJXIiXCMewmghdj30ByMuWmsW-AKtQ4UI1vcSWEd4mflRQ8ueT318N2MN2BE8blOFEfjpInW0-lMIgcPoIXoM7eyK8JxO55bQGUQE0O3ZTioMLXmH1JZdkjWYl6OTt-UQ6Ua6JWUBJ-lXCaTr4D_fX5J4HDPOEnfpEIhb4peSrPBDGM3IJWBqp6Z0Gsp6PQ-DVHjk-r2qcICPfO7ybrMsR16kFBjR_XofxuJ0Wt7VAx24VZU0fozdQYpHn9TR6lnpZnDyv46zfmPmAOCCuNaJBeqnjDAEOhoM1k9tX6DLN-lC4n8mUASZbFkef-P7neeTQnLVp24THFmrylQh0B-6i93a0rjCUNCgFQBMMXcvGbdQbRBccs", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117454672870583075791\">Franz Weissmueller</a>"] }
        ],
        summary: "신선한 해산물 그릴 요리와 다양한 로컬 메뉴를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["해산물 그릴 요리", "다양한 현지식 메뉴"],
        tips: ["신선한 해산물을 맛보려면 저녁 시간 방문을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 그릴과 로컬 메뉴", items: [{ name: "대표 메뉴", price: "₱300~900", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5846299744850792532", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%EC%84%B8+%ED%8C%A1%EB%9D%BC%EC%98%A4+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "차다 레스토 바": {
        photos: ["/images/bohol/info/restaurants/chada-resto-bar-panglao-bohol.jpg"],
        placeId: "ChIJd61g_d2tqzMRpNGdWKsHIwQ",
        placePhotos: [
            { photoReference: "AWCwydiMqqhALlNwQr3G4JDt2Fxdw0Ei_KLEtsyMXTqndHVaPUTR7shqU8UFl5qvfZA-VEUIu1HEjP7uexY5JKZtB1XH6zMDFXR6wcOHDT_c-M_lrlONvTj3IINnqjd9ZA7xqqdonPHzop6z2SrUS4x2GCCmC_nCSXWny778o8YEQizWdiMl8ZlZzxbLC6XMqyLml9FM2S3F7-Sxbo_6L4K-cCJSqOMT2BB1Njd0A0CR46hmQTuPvg6Ggi7N6uNf6Gf-4I8F3Dz6_BptuKSLtcD_5v7sPE1khNR8qk8R7sfEo8uuoXhnjrSCHiQ0mc6PdINklkhszZnwZYtMx77QXBbs_TUaBNs8joCwLiSA_-s6B0Bnt-7Y_qWSP7Scwt1Vih9cnOm9cwtgomVbz_-GtuBO5Yvp69eUMsf3pQMO6P-L0Pn6mQ", width: 1170, height: 1419, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116473165803033402196\">Chada Resto Bar</a>"] },
            { photoReference: "AWCwydg77ldK5mo1-t2w-v3DBFB_IZFfMjZ4G-iljZLOQ2j94P9CgUEHt3azwGVpLZo5QmoOq7bbMasRHWLhzj0ezzf3YvaaGtQF4_iPV_JFySJd6hRk71DFfz4dfK9SUA83VUlQeuZT5UUc0JUVb4Pgul0NbtXoE3oBKm03-s-2nJ9JUL71TvJJa86PQNRSBeYsReJzBgjKI7VNHR3sNvhimw0_ehYvpfo4F63BTLdcRVeCh-pcMpLZf7SVkbhOcadXW0b8TnEgFB4uTGOXNdoLNgUi5eJsj9WDsBE0Y537pKcixfZ3ALlaV-AMuMbuaw60XmZ4XC2__o40ADoBND7gJGOE6nGebq6nPLn2FCqwP_8W_9Jg0xNAWKCliGU5RCle_KUWV1TOzVGTcg_0uumjeWCDou-d83KidwfBo9pXZ2aF5g", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116473165803033402196\">Chada Resto Bar</a>"] },
            { photoReference: "AWCwydgC8r-4QxQdF-7WS0p_Xfe4vfY2aKe4F7546Rfo7-yXMapiJd_7XNHqahrJ2-Q_ZFt8M1FDTvIpTcbTxB7ejkcGyUCeGXp6vDhDQm0l1d6HVLCJztnYrH7JT7YZpPNhXpWbjOiMYuqei2aXGJZeql4fsjlDCsyfQ_IRcIWlnxfA6swjbnBv6qo6jn5rqgnBpeqL6SxaCyc9BTgRFhEaOHMQZjw-0akYImptG3uEkvzOgCkhSiJDOPW0U_J19PeE2TF_pI4G8AIJYiYaEXPbbyUo97CfqTZLnGuq5mkiiZeyJJDKyUDSs4CvGGktA3BeX0G8JBLG17HeRL8KX-VmMh6NuZVG6TqELWHfxYCCLLR_3-h9z90bumRXz-XdqcQJERnzhDnl09WX_xXKJrhmYJGdpoQ9n74Kx2zpgnDE9bvDDFulvaC3G02Df9w-2ZzQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118151041283787738645\">Aina Ainule</a>"] },
            { photoReference: "AWCwydjwzMy0kzfjC7tYQLyXdJV6CGqulZFeAyjtIBsza0BSJvcJUoFIphiyyrt8DUIvwkg1hoj98889_YwmD71FWFyoW8fDLm9-c23-N0-4AcsSQjHmkQQWLE8qu9ugy_nm-E5KGvRqmU4AxVZZdKlD5POvfrMlRjT6MtEmFYuWqlHfvbLNbKo7n_T-C-aAP35mI2LT9hUJkVZFmMEsvTFQxIi6rrLQhr8hQ0weqDMLPZQQiSYn5imcKdwbTXy-CnvS2WuvxbMfoqrJJ6qp_myEGZDj5eDxmxpezQN4vrmlTm__dWxhZeVYvehYUDFtZOsHywprRYJYvZsdqVRP4kVc9Vy74v5myr25agP4xD7FcHrGpkMZc6CG123qkA2szecQQ5p8DIN35l8JbDNch190FUbelnQQpaBsEaEDqM_6YdPJCs_n4k2hN5LelLsF3HDY", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101189838444095561641\">Grace Cortes</a>"] },
            { photoReference: "AWCwydiTPTqfXSuUfGU2swuCXH2FaZNtyWvvXxKZCnSbCYGvau63qmZ8vP7z9I6gjo5cmY9UYZ9ppJABucLsioPlUCmr_ZExpOC6I2IM2c6aD4_2_UPXAT94XtS1OL85YoSkrDh7u6hR_xKeXdmW7c0yrGAMSvVb7bONNSutMSIN53ayVtRWggh5iDe5FRxRWSBFg03ZniXTr6vR0UnKNpFVCuACPIQThKkdsjnTNQi8NPVaQkAQZ4PcxBjvSmhONLPk-eEf0TDc2ttbVSJMw2tQ70fSAsMnPzIYCHR_j_EgDKuxAKxnPFXGcYNJaOwT5d_Q5OvTBk_QE6RoDNVVgkQFSYpcr1gatejtjpqe1Mj5nnnY1wg-vhLPuXe2PUOLjHteIJe9iIRXe2H3Dq3GmOFRJNXaoclqjYX0aptwJciRajabJXJ1mv4ObHQPF6iMcWGf", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105475023413311533651\">sori</a>"] }
        ],
        summary: "현지식과 그릴 메뉴가 조화를 이루는 맛있는 레스토 바입니다.",
        updatedAt: "2026-07-21",
        highlights: ["현지식 요리", "그릴 메뉴"],
        tips: ["여유로운 분위기에서 식사를 즐기기에 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "현지식과 그릴 메뉴", items: [{ name: "대표 메뉴", price: "₱250~800", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오전 12:00; 화요일: 오전 6:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=298090432844124580", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B0%A8%EB%8B%A4+%EB%A0%88%EC%8A%A4%ED%86%A0+%EB%B0%94+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "보홀 비 팜 레스토랑": {
        photos: ["/images/bohol/info/restaurants/bohol-bee-farm-restaurant-panglao.jpg"],
        placeId: "ChIJ_____9xSqjMRIDZu57H5Pj8",
        placePhotos: [
            { photoReference: "AWCwydj0oip9Cp4NKYX8UEQabHik-DD4_7CykSWy6iFZ98qgYzHekH_UQj6xGSiSxRQMFyYa-hH8Hw3GE-0z9BarwO1m7AC5tDuxtvCcRM7BMYaSUr9Y2P0DjKup1s1_p2vUaKfcV83cSF4V6Ex3S6aYIYgOKc3Ct4t4bMu7HmrKIfZJZzGcxs9yfD1t3kA8PKzY0Bc-oTxlTkJoCEWKwNsNKje0cxIlAvsv8rl_BXgeW2flPJ0qJ-g0qoVoQ1ptRvZr2PzbXe3K2fb7Bhk2Si2TDepPEHmHCxid_gjOdaQHlhGzpWQCL9gAFdiu5K5Q2SiYH9GRhkI8FMzcM7QYbC-wprXkqxygZx21Hdi8H9Pb80kgquY_refoLw9n3op-9bOSDwikXUi6B3hHov9NVTwVT4zMWQHEJpXIgkl-6khX4PWm1g", width: 4800, height: 3193, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110985170526857403154\">Bohol Bee Farm</a>"] },
            { photoReference: "AWCwydi_m0-r-zqtWPIVzqd0JHJ3WfwHGWgCfTEuv6f6MqxX4lQPr_kWasRqODsEtw3BiSUCUUuMnc_KwGZe0ee5_65vXWOdeEgJ-zY0ZWS_nIW8p7FR4-RGgGaT9i7CRpbND3B8IkzDC9Lt9Bo9jBxVTM-yDpJVOTPIchmKAvVw0Pqjh8RqwAcsdemFKl4O7I_fqCjtTUZBGwF3wl9mkiHzBXdTh35SxGWzOYmXuVQAGb_VMTjuH050v5IAjdoWRPpUubQNpci5udl74mn1MbSHaSZ5xDabbPAfi0UdU6FpiLLWyRHzuBOEEEinzUeTbhhmGg-bwHMUvlFAoVKot9DoDhFlWbN9NYNw4BZL0yfhbtHmQ7jewSschoj4MJ4unXj-_YfsY0lcQ0yQQ79if3xCkt8wopZf197PpvRaYK9fO7g5H6Dvxekj3-Qq_0TPpQ", width: 4000, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114289585695211168507\">Cindy Rousseau</a>"] },
            { photoReference: "AWCwydg1TWRK6Kul8ug1Mcf67JE1gFBIUWnqqBZcvcEtIWodA8mLNRGa9Hy5FM6ojKKWrZhiMhpSFkW1tyopWaCuVpsaepfjurXZh74Ptm18WX8JFJbqHgarbi02HlyQIOZx4y81n_QV98WKUdoa5ttlBQia0soAaaLASiGN2liI_GvjPU163_TgU-dbV8ud3uJOwsjrRrZavyaJr07Erme_D4Nm_GGWmQnWYbAE6CjZCzD0--9eM5aA0lDeRUc-Ux696kOIIJjGQaXhULgpWNeVVxacuGf19X9taPQHiy0EfSp4dOkgAmAXQcAmYyqVkJDakwSo6wGBwfAU76-eQ2vu87YBTNgxbNU1XmprFTBe5IHsNoxAn7oMtPgqDcMlI49e_k2VIYcNKnas5W8L0UZ-QcmQQf38chrgig3YLynCZGBAAw", width: 4800, height: 3193, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110985170526857403154\">Bohol Bee Farm</a>"] },
            { photoReference: "AWCwydjOQbSS_QBreslJRAclT9s6qkNEKk2e7fOxMiWZXt_eLYRWDOwEw3i-NvJA9Ts8FA6-22UizyAOK_OZ3aaLSKx6AjnUw_RaPN2f_Z5abS1egDRgK3av9b6PmS2OykxWUZYgxvc5H1N1il4CZrxb5X_2Ns1ar8rd58Hh2NKdLMCMecXaQVnxJlAL-XHAp0hQNrSNlJwO9NxMxR8Hrcab17qKuJzgURJKlQNygLXLwz9eWx3y6g31PeoyXBEtxQAn9MQxC6iDtP0DQe2exyNH6KUyRUr-6cKJdIW1BqmoyFAM31UaXRVBCOQ4PJRqOBabhIPg-APsBPrjPjmMsz7vMY9dXl4gs57VhkOAitX2ucBweixpRieQwduFfjvG2JZUTRX7Yrix7dpzm2JLfbJNeRy8NviEaL9VPMLbpLt6mnv27n2KecSSiMO7TJI6wqCU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112026871700802455529\">M. Martínez Zugasti</a>"] },
            { photoReference: "AWCwydhXY3bMjZPKDWuDKbHTdH-45p-ueHp6sabw8nUjpD6Oud3BDpPCwI5eyghVXZm9hdLBs7L5920pbM25wB4KhbOcvDauaVM-dcep1t41gaiy2sCNPEmhj0r5qN2yECiCpyYlWFQi-sTVS3pb78_rexFIWvzey0c2F35ZSyY_x9N3QwYt5N8e7IyQr7K5I9BdThrXCZ8Wj691tiLw1WAGtdKuuvnzaQfxyBwkVteG8tcg0bPKmcOTOrIHBwtc_DIwEgUXbPaySLJSkCGrI7KiP0MqxpyPL63XQyOjYSkxMRrovxbG_j9YwkgBUIv_96Lv0j1w-V9UA_Ncwv6DUsRFaAmOhSAXUSAEzsDVGNl7u11WrJmlmVQ6ZWuqqMOR6h6R5HylHZ0T7Y7Vho1QdjJkRXjJR6DHUSepY2huOQOri5nCjYUl7AzZQaEFVioEeans", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100146314657434217894\">錢大明</a>"] }
        ],
        summary: "유기농 식사와 맛있는 아이스크림을 즐길 수 있는 보홀의 대표적인 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 유기농 재료 사용", "수제 아이스크림"],
        tips: ["리조트와 함께 방문하여 여유로운 시간을 보내보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "유기농 식사와 아이스크림", items: [{ name: "대표 메뉴", price: "₱300~900", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 9:00; 화요일: 오전 6:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://boholbeefarm.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4557354415432807968", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%ED%99%80+%EB%B9%84+%ED%8C%9C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "제라르다스 패밀리 레스토랑": {
        photos: ["/images/bohol/info/restaurants/gerarda-s-family-restaurant-tagbilaran.jpg"],
        placeId: "ChIJLxqn-k5MqjMRk05bMwJENFw",
        placePhotos: [
            { photoReference: "AWCwydhMJnm7lEFqu6catAFz1w1R1w8ArsJKtINHKbFbsLeqFSXiEWZod3ZYCkpykOamAp1ezvuiJfTM7gOjXEEIXS7YRUglwW0eqWAVmHHAWuKEsEiCF_QNVeoTCQmKLcZXhUN7s4iEOpYlLKQGL3ifCBNmZSqu8GBbXXI_b_wYgeMUfWj0IkUW8rCElQ-gjh29vqgQfTli3GGoKCcZK2G7YOsq1NrvLI3jCd2YgwEeiKBfMlRScwewjZg0I7KkQgJkxwsGnKwXHc_xU9zjlkHrTe3NbYc1VJB6Ad26AiILbviANSs6IvsO7i8lCb0nSnWAdEjEn-LdQ50v5lEI_syC3dQBMCx5mC2e3nQMKy3z9AtZHtaz1oOhjyD7sm6tsI_8xNXJqSRotHqsjFRS-irtPpO2IvcsdyEthIX0fSNMlAMXtA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111757973771341068720\">Harold Hadz</a>"] },
            { photoReference: "AWCwydiUd61iNy4iDEMefMnWin9PuIEaRMZzvuXj6M5fDRBmxlJ_RvKx_W1NNTs1CnSO3Re1DbMC6rUbyPcLXZO0Zku8ZrcPvtpoXF4_aPbPgaxXFxrQUzqe8d5vm84FSmv2rf81o_7i-f0-IFQZL8S4EWoD5nMc-mcuUPFSfXcX6tPGJzIaD0gMyDkoBkiZhSHJupTAJXVqewhGftcL_aRXTdy7zDUcd1FOj0nNG3fedeaV_PJIO1LlBKUqoKv3BhSQ50FaW2kpG_Id8JhLOzOskKabyjnVezD4oI2m4AaaS9L3RJpi9-4p1OK9jcf_02h54CDRhbk60k-J8hsR4SgLjR-TmoixbW1oEc-EfZbvQzeM7p0Q65qNw6YyRxgCK-WQa30wFsBMB8Z-WVSxKj5m64OhJrPNUNQx_HkJ7eow3EeVxA", width: 2968, height: 2968, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103072948021073000367\">foodie tarsiidae</a>"] },
            { photoReference: "AWCwydiQ5f6pF7_u_-Y6LC1u-kZvu5emSGCyBAoHiDqfx0HJr05EqejFSHS-NVlZbxRNKD4LnKDfCigHXzlR2xidS6DbH8FQMekYcwYsPduJNmO4WgUISrYr1aC-JamIpfrTUx_TwoFOBh1FjX2LoO29iXtAh12DN_IxHqZ4ZlE8Qi7QAnjQSUozVi-pi_fxEwurYsyvrKP_QwkotxZM7LgyEb-oLuRFh7URlb-YvoC4uVD52FxGAu4rYxc4RNw0igq9xserIms5uWSLzzBPNtNugXHO3dTCQM1ZmpPbIn4Jy8eApjIMRYKMTtEkzf9SBYrXoS12Vlwd75-3Az7Rvroysbo4CT7BZEXREeJZQy8QJ7I8k-jJw6qOgSujDJ11pCUwnkWoigu2ampSUUA7A9TQ4OAlYGqPEtCsglHoqtfXckGDOQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117475280701399241510\">Benjamin Carlson</a>"] },
            { photoReference: "AWCwydhT0Gh2pT3ugSjWBCOdGoh9c-V-4Ts9TfbmOLNRUThKvv0Rc8lWRBKOh8P5gYekk3NT2Qr1CyfkT_uJ-WGD15QAONPD2VM4YYD41ELj7uIFDhoscHg_rRrfI84PdgRPgdw8EvgQUCXTCA87cu9TK9zm8_8pY4-oDCZFwtAmt4uFAKWlmQallKGBaTJTOtX55RN-Plcr5rpGuFh-J5Jx3amp_dZGUrc-IZJWdGaiJN1_UXMV-GalTlWDla6E1_Fo8aIqLM0k5TWomIj6fEtnij4gUzgoZOwvLKpK10kOr07mPvdpTX-MccbifmR4U2AKMe-uovsIHrl4EgNEryYaeHFPHdZhZsCbbuI3L0UeDWarfB7DSM7vhTJ8IY98ZyhwNwVltaaiXOggVUXGOLRY2fJSiB8w8o66JLe4KnfPPl4cgfbLFBWLo_xMe7kR2fhu", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100690459766816661242\">The Traveller</a>"] },
            { photoReference: "AWCwydj-8RqpqNMch6wQRL_Hi2zEwqjULCxxPQGplexo7rH8B7IADpk5mGv7bTkmCTEkhtvWpWAHWMvsrzRXqJ_6jotrTCzHQNbY4vo9LaaYRcIgaZDP8SxK-YBnfdJ2Ap6Lu19U1dJAllabYxZFKUyfrZb453Tt7eOka1tNQg44_7S6b8SPqckZzEDE5pSovYbIqcb127RpUoboRV18cpoTLs4Y8U-vkJwcvtjvrn8daICvejybojbcrV5UvoV3sRJFa7SsEuhP0JzdqABU63lYIijS-851Xv0hIgzN2158NLOx71fn9D7WIdFcGOP-2aMfCqweOQvkJUQemAYTYfxz01DRG58vIMKyMetXAht_64Q49AsYFh0xKEb2siYl7CeO02XQJIkW4lzrlsThMy4gMfgAlDYZqYB5I0hnbXPturPX6X6zRDBA1m-dxG-jlg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100690459766816661242\">The Traveller</a>"] }
        ],
        summary: "보홀 전통 방식의 가족 메뉴를 맛볼 수 있는 따뜻한 분위기의 식당입니다.",
        updatedAt: "2026-07-21",
        highlights: ["전통적인 보홀식 요리", "가족 친화적인 분위기"],
        tips: ["현지 스타일의 풍성한 식사를 원할 때 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "보홀식 가족 메뉴", items: [{ name: "대표 메뉴", price: "₱250~800", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.facebook.com/gerardasresto", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6644010126520569491", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%9C%EB%9D%BC%EB%A5%B4%EB%8B%A4%EC%8A%A4+%ED%8C%A8%EB%B0%80%EB%A6%AC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "파약 레스토랑": {
        photos: ["/images/bohol/info/restaurants/payag-restaurant-tagbilaran-bohol.jpg"],
        placeId: "ChIJtYcg_7lNqjMRvzH44ktLHvU",
        placePhotos: [
            { photoReference: "AWCwydjIN2CRF-MqEsx-O3hoLX2-muyPVienBFFHPyYuwiVMugKBX6yZJgOY3iogqufzKJ3BXdTnaBVZs3NoLBb9lxbHViF103WaYqboc9LbNghPdNqoW9d0UZeILyOyRshavcOiajy70LJHgB7-T63QQ5Yec2v7PlfPEXmHNAlEN9_LDnjVpF7TaSGN3GavWY95nbogy9ucEv1HdzerKT2YBd48Ph9v8FUMUV-oe_AY2CmvWN2mU3OZoODj8T93_9daMX93LzZJRLXXtVXYsZQqtO1nn0F3yxOd-23IsiH6Gx6qXLTufvTGpeyeSLuwl0pmKNn1LW4MzqrEt8qBxSam6VkH_EkOy-bf062gW1pZjhlki3xYPD_UvNKKsJwCDj4smHJmBKXUZbqUPvmSACXw0lzZwSiEvSiud-pNKXg4auZwlnjthed_DtHPrjBHFCCv", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105602639983446704617\">V B</a>"] },
            { photoReference: "AWCwydggx7OsvQBSBlQppw1lOW-ofswTCGfaNt68Udx38UZxyLLHJ590UTlte_XQNQtH3wgjBHvot08rQsjjAmN_7p0IN79kNe4hIlz5P9jwf1Lwi0QrVrQF_bXM7hFXn2-YmheY9o9lymneGbL9QrvXlt7h6CYqwP_tN4c6qQOM2ZDCcx34brezFpthQER8AQUbE9cHH5sTNJWFY9roZptZKFiu7eY_SOYrIv2ps9sP6TlfQpZ_Xh3hxEVBYhP-tAjsqpLu0qzFZAzp1RyTwpYCV6NDo37DqddpdDiYBr5uurjgslX5f7CTHij3an4gsm4Vb6apOnmtfZ5mVEDXWqvdj80_mCYGTxZjmPxFC4Qy9PML7EfICwFQ6DSgzszvC9LaUYHvcj_00ZglYkrgrkhtCW_XhDYOdGZQgvudhJ-k8VM", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100043845963006242082\">360 Tour Philippines</a>"] },
            { photoReference: "AWCwydgPo8J757ST72x76FzmbMF9vuM8CsEuxy8QzE392rr_1xFp1B297NMM4ZBlCJqSf2ODcX9tia0arl83zlP8rwhrEbSBrEozUgeO6cAo7Zyjdmn8auMICpwZYY1ey2ZCR27EK0dd769wqHippPi3-nDkjUKmmoCm2DoP7YoaB8EIrUsRuZrSxoinxO-hKSWK6pXLRlF1PB4KIUufykLVMD8PMAMIVKZTF8lGUbQTiq2aSrQrSz9Y9Ds_hAHEkEFSp4P-ZaGsk7i-bV392j2L6vuR2HvQax2BWEDcxpYtPOPBIJwbqwBVvCIix27hEgTlLbRS-v91xoBbuPSAHQmERbHlKZ6Zevg_BZbZ4jIm4wyo879qHAnBRLzDHAwKVqIFHJ0yx22TK94-Uzo20zD6wkweHioE12nG97HIpnfsfEJIagvK", width: 1848, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107592906995786722959\">Meil Anthony Desales</a>"] },
            { photoReference: "AWCwydiV7FxSkH7gaEUzfhXdswfkVjNBL59OyWN9eLS78vusKGCtUSe_QIJ9bfs9eK41hu1VLdYf5EbKo_V7VZsimud4PmDG-XG-rJh-7yiELWJorzL7prazLXWr5Ojxk_B4JoVE7xHhdFgtEvbzl_m6GT2qXgSLNCApwpKgnzvMNBW6y973j-lmTq1E5ru1pQLhtNmIMW4Wwt8lJ2Phbp__F3I0MJIwBeiM5XjyBiMEixr6eZdVdaanbxpDqq_YDifA_jxbVISDMxoU7hu9abanfhH-ZVq4gZiZPU2DwOQimew2GKRmleOo2sprEiTLYXz2rSn6kjGcvhLrjLrK_gbZoEgPY8Acmg2LOLwxOfZt6hHOQT0RsJ8-rAIg-tSfD0MWCv2ji6T8NK9nJGDsltZkxx6O7wjsZY_d7l88OVBq1z31pvPh7yMqVuYPjIAaog", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112524358176106852366\">Yasmin Respecia</a>"] },
            { photoReference: "AWCwydgok7htAXF1j_qSwpAHQqNe4uockbnbw0I9e8nWZGYqBmQeWJt8_f0Ducr1pCyP85nMSoAz_-irlg2MfKcMbk4WCnFn-8BZvYptQneMjv3VLvlNgccUf788xNk3xdwBeZhzvz-ByOakeO6UAHwADHZck2bvmFXOIxu1JtMJtkpkS0vinen11XfYENdryXyp97p0pbI7hfrVhajDHcCfP9G-6OyVtrDBmP74QNYEoRXu9c5tdgP_vUKxTxHV9Qj1Q-u0QPEnV4o7UIylfEs_YEMNAlG7Vv19x6B9asoCD6Z9CmikQV1qjdwM-xKyzER2dCc9CcjRVfJhlCtEXN6ARfPyQy52c80WHzgC6ClAA-sN7ActcLH2WpRhv7HF8vfp8mtavEh-gWwzXUujAcd99JLpLUwWPkWmf8G7F6LyXsgwTgvl", width: 4028, height: 2515, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117874767156001631548\">Merle Begly</a>"] }
        ],
        summary: "치킨과 다양한 로컬 메뉴를 즐길 수 있는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["맛있는 치킨 요리", "다양한 현지식 메뉴"],
        tips: ["메인 지점을 방문하는 것이 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "치킨·로컬 메뉴", items: [{ name: "대표 메뉴", price: "₱200~700", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/pages/Payag-Restaurant-Bohol/231929530244537", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17662637577896210879", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%EC%95%BD+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "더 프론 팜": {
        photos: ["/images/bohol/info/restaurants/the-prawn-farm-bohol.jpg"],
        placeId: "ChIJOZwt9jpMqjMRreMaJtaB4pQ",
        placePhotos: [
            { photoReference: "AWCwydgzBx4FvCC6Pu3HHqasF9A6AMcBfJ7TS-AgU4Y7FraxnqKPKkGo7bs5mNVT072lk_Hu-YQJ868aiiH0dbk28ZPe1w2bifhzDuAK4HcfZgFMmKjRHo5lpASEeibZU_OondSwGg1R_8nFQfUxxLd07MxTp70TYvPw_dWO_DA1Lg_70ZBj1bU6mTnRRNQpC8fGeIFsY5A9LGrgBqs7W9Ls93Z-YKNEJ6JE5DEXLxAUuFT9KwiEI7QKKFNk_wHQ8FnPtaadX8yLaSXKy9P4UohplD8KaEkdV0ylHqKrhME_cZvBsFe5QswToP9qxVTJimpSmRAIv31--GYelo05z3sSkuM0iET987ubZSJWjtXsNpyBQ7W3nIcrqEqXfJTmOVX3iFZJ7nIbhjVx47MC8Zdo6GfaxcEgqNyvrP0Nr_RcaKLGCdnE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110961083776874468014\">Roj Ecin</a>"] },
            { photoReference: "AWCwydiTHNHLq6odPN9fbw-uZq6KXiJB8YjQi5009nrU9Xhz42CBUPaLO_skkMCkF1zehMfetqZfcvRWwiXOX07Bw4LwWLVeZd4honSeL_nhNCosLMQbX1FHz53L0dA92IdKVxzxjPQ5pbSQL7JAbnLrtM0cGWiYV8FWANtSzOrsIbFrgnpPi1VdjZ-07N4yMNfaRijvbJ2YixyMvt6YTAbZQPTwxqKEvzBDWBUkGioHOMadxcEI_9xGIKMBaA_xIRRhTZyuvj3DpIa8npGbZxo889-LwmjPAdzJr44FpdAaO0_8ykQTzDw1_HgSNGPDZ4tEvnpckh9RtYY9OdbjlexCJUYZGEdZSKwDfxRtQxVcM3_nNhcBbYg31C62u8JCb8_aVxgdIdOzomI2WflGKK_lTJi9PLe0lquVqOF5CNh4tuHIUQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110974637450589146534\">The Prawn Farm</a>"] },
            { photoReference: "AWCwydh2MPlr7Mf5BPQqeBTrKYewK095P81V982u6H6ZIWNwH6yQnBXN3U7Z9FGqaNiB8IaPR0X2o_ZbHsmbOgisj9mPKC1kb-fwPYKGQDs_B_gSgnXoqDcdlKjrOorBmTYdASTEuOQn-RaNVaUS_36_-GD-KRrJqmLM6vVwuVq40NHH1U7MVGPifBUfKOl25mpJWbkTsty5LhH1I_fKWRjWAjFeCRLp5h7malDZP4nD_6tR6lqK2S9sIytciHtzyioTUWGij_AR8hNTDkiGKPALKGAPiVnw1gJRR77tS5cvqfKJy4vuElWt-BLW6xEqE6ewyjarVItZL_5BAfDsVAPIhoKQp8UBuYkUeAsnK92gt_pDwYghvEO9NHzpo63S2pekT3Eu9_MPpFx7SEuZ4yYIaYpWnpRUDPnTe8aOdHx9CbLj80mmwVKyKUFpGAy0FtZ5", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118165465414446048875\">Elle</a>"] },
            { photoReference: "AWCwydjQLXQ8fuHrdCsLMPbX8kFnm5GrOwiA8bhovaVlqUJQYqxLZPXYKt7Km5zCIaS4t5lpKW7gqN2zj31ebwOtpFKc1qNiHDAfFfaU8cYA7j_R0-CZsJAX0wRLVoGN5QSg7_CSx7p6MH26PdrCr-Edd2vmx56v9FIMwvn5SQaoiozAL9fZNu8T6YKmRMlOOg8pakCCvH8rErr3fiTCwVoS48-Wsa921ilsf1YNcDSyQqqcXiZ5MRUoJYt-21zCCAMZRxrJIFF_Pq1NaWumZioIDSzZlIC1vs8WxMyBOkf66GGj-swAWjWQg5TPqOAwpopiJpr-OwxqqKF_zv8emrExdpkR7HyRP5Keyey-wrQXQCYtmBtsPsCHeu5-wjs74AUrW7f9AlNum0XtAmt4YpEAMLAq4OSDbL1mx-LhuPeeLItNnx66Z8AtJtAasEmAwQev", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115660422084850307635\">Yuse Lee</a>"] },
            { photoReference: "AWCwydgf4o8e9dUhFQExn_qv5ofnFuVBYoH_CeNlJwbeRB4DLrhyhbszTfjxirsgCvYJQKMETw22eJHzArwTpFr-eQJ5FEwPJUpJclWGMYHa7Nkiavj9-6XQIyABn5N-3fY-5DpCQho2YngbAtiYfuEly32F8X3DGSJxtGWjhJsd2qxP3Ar0nOy2TzaXgGzNNkgGTQT8Q1I0Yc9FujteBk-4Kofl0uTGUGyfK3J9EvdIuKr55zKY2EZQPec8HVPRFFL56dRet5JLdLvZQWVC4jBBu-x8xsS0-_y0CcNDJOhHP-0ay7dmytcLS2e2282C7mdADo89jAltbD4NyvEBhC6fzBUtn1qdgsy6aH35A8XQpfD2Jqi3ZD-ub1oBlzWtkVdJDaC1D5a4rXflS175KtTWWNFL_WLdWcB3rvkkmq4DtbMV0Ot1zCRZFu0WFB1pUQ", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118221758315582779184\">Thelma Andamon</a>"] }
        ],
        summary: "신선한 새우와 해산물 요리를 전문으로 하는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 새우 요리", "풍성한 해산물 메뉴"],
        tips: ["해산물을 좋아한다면 꼭 방문해보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "새우·해산물 요리", items: [{ name: "대표 메뉴", price: "₱300~1000", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16371806046428795472", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%94%84%EB%A1%A0+%ED%8C%9C+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "치킨 아티아티한 보홀": {
        photos: ["/images/bohol/info/restaurants/chicken-ati-atihan-bohol.jpg"],
        placeId: "ChIJ5z-4sbJNqjMROzlUkyMtgrs",
        placePhotos: [
            { photoReference: "AWCwydi9esjxQMY8emGoXfRAPCz38XOt7pg83lGpBrZn2lEsDSVCQf5L27ZiOkQ-M9rRja6zdajDndp3yJ319L8AdyEh4Y-Pa5abYUIpmhHkG9TP2CVQdGqwW1r7DRpzLj6chMXal2xU9WTw9BxwnrhPUMLpHei9G7r1LkJ-v3xxqgUuFy4SiSzHW8am3Oz0ExFs-gTgQaieBhRFFTbZ2l8E2w46El34xQZaCasAZXqTh8nyQpYNulcUMwRVYA23bYOq5kOPWd_-j9pJxjh7UllZEjB4MACoBn8KbJI5OrgqIy4-5kmbp0jdIrngrTY8XlvCjrJklq8Ak-ra7ctyiC-LYQFp1Be24C0HnqSb27z3RkS0kBJrWGILVTbO3XZlShuTcEwP31mQPMLKVZgLCkViO_z0S4TbRCV8WP67E1h51uc", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102732403199741349645\">Gideon Basonillo</a>"] },
            { photoReference: "AWCwydh3OlRHlcHaD0-Hqayk8CFcFEKj58IElB5hPKoORAFA0zwpF_Ahd5MD2ho9A_QUmeRzCNXTWDGvxOaFmdUy2Mom7M8llBPKvNVeC0E-da5Ndrf6ixbDYyZuOUox2iY4bQtt5RqfhLg977dvblpBvJL7XdoywuhtLEAfS23iad64CK5NREuTnNHqY2wWpsxHQeC94Wa3WoVVDrqANmQMmUs2Yf0o1gdshG0IA5ma50P8z2gAnW_uVk7FTKYDe7-GSIJUniDnbPbpkKpH6HgwP7UuYKE5k4ubCuH2JXjalbxBVHGPsw9fBm9iOYne6tn1VeCMoWzhhYc2ufW7pENSw2hqh18-RW64_q3_ejn4ZI__VztKmvfc1og8ubcGQ2z5BPanCGcuN7valpfFyFnOrTjdSG9o_K7ov2BgiByPKBTn4ESRimesg2VP1BrMPKqk", width: 1280, height: 853, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114042105659971330884\">Raul Phillip Gatal (Bohol&#39;s Roving Eye)</a>"] },
            { photoReference: "AWCwydglz9BbT3SJHda7UVfHVA4rb_QTZ9T6mFRY9MjIQaiWazW-9zu9eODazm49iIBjQgQsL5QfgcRABJMPa7cOFzmIAgeOe6iH5d-_8aUFEA1kXP8LulSbIczY4ak7cMRxDhb3yz3a1m3qJE-PXZ5p5zB-pJw1K5dpNwyvbPuFaxJT1whs33GBK_sLjZi6Y4gH0A7EjFVAdJzhMA7Lhcim-6Xe4raiKwuTWPRG_g7SYP13zmOaX6Nitg7NgcB-NiDPOtlOyIImxCvwVto23V47ZphaC-WpsCaHQLIvKOgy2anIt1KwrOqgi6_yP0rp62YlemkPPYkrg0g403cPn7OzC59IVYL3Xoc4xE1mWRzomA2BiJ8tFyo7_qGhWWmXk1gAn-8C0f9f7yHJTqcD098KbRZ4Tk9iEYMDugYoXMiLk2wQYl2PWvZML0ATBqz20xin", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100380628443701254678\">ray</a>"] },
            { photoReference: "AWCwydikHfLv7N8xyXQw4c3m38KMkepknCO60xAnQrn0j6DHHNAbS8RtIKBWhRpWtP-3_Ks5lm1qYTIWoN5uwwjLtfDQYzl1oteDGTiw3xssgNRE8brNZpgsXVKFYu6eURMkot4N9ukjcOrpyhXUU3ooVTiwMexO7uxegN3ECKUkY9ZOFDPBbKpci-q2xN1HR9DXoJmIxGZFss5yQ7cXIbvdGFOWOcyMTxwPW-K5Z_0UeQwo5CGR_qtKyle9Khsm7xteU_15ENM8gg2TQURKrx8-M7-65am2mUvHlJmE6_g697VWR1eFKoTHsnOiQ7WGV9WqBzSVLfvna8qAokqachjRWHVKgTD5fN6ZC0GG6VK5noGY7nswiMsbjHbiJeMndrvrHIhkIcA3MOGLpD86XRqOKGHEkknrvaXugtxQ6EabtroPmySH1kO3LSy5liJpDgF7", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108390624585108589688\">Benjamin Buynay</a>"] },
            { photoReference: "AWCwydhyaYPK6__DPktqbLnDJTkSn1kwEdvPVbIV9HAj2hXlzQfLSHYXjJYg3FDqIoQAtKjrpJTCd0QtkwB2MyGzN8DAhWkQ5BYZbhfo3zO5TsV5Fc2Ms1SIJ4F_8qFegVQcDhDV_tlskOhdxLxYsQXfNwGRRyup1LX1VTxwIOuJbL1J51kVQvtHoXB15oYcfdGQ86T4Uws-AyoLBtuRt994xZ5R7FViip1gEii7gQe_6zaGgf6dHR4jKFljXj93rBc8EJtoyBpxNfUJoCD5mRmT9rq_aw1zGJS1vxqEJZ_Roqqj-fOQtEasgVnGTl7HwDh_KaKuT5MJANlnjZt5rxwcb-VttJmC6sniKi92IgX_49IInCs6ibuUtoxeYsITTQCe42UMj3V5xAcHf2d2XVt_GETNeESvbt--wwFvD0ZFjUGybw", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101665332653175225794\">Benjamin</a>"] }
        ],
        summary: "그릴 치킨을 전문으로 하는 맛있는 치킨 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["풍미 가득한 그릴 치킨", "현지 분위기를 느낄 수 있는 식사"],
        tips: ["갓 구운 치킨의 육즙을 즐겨보세요"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "그릴 치킨", items: [{ name: "대표 메뉴", price: "₱150~600", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13511411462883785019", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%98%ED%82%A8+%EC%95%84%ED%8B%B0%EC%95%84%ED%8B%B0%ED%95%9C+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "주세페 피자리아 보홀": {
        photos: ["/images/bohol/info/restaurants/giuseppe-pizzeria-and-sicilian-roast-bohol.jpg"],
        placeId: "ChIJdWXTAL6sqzMRtWCe9aIRVho",
        placePhotos: [
            { photoReference: "AWCwydh9JkfK9-dDfQfKfDBFA8PGPGEWX4ZcKorEpVed90Gqvx73RDPz88uZPv-ODkBq2tOmllHKxFfTRwSfTGq3sF0F0nscu7MpnWjwdjALdwMROR1x_B3AeESbeNcmmpbBgJJNU6cKWMBWMqDyy3fbPW3o6TKbqgEqPxPHLS9Hw30ec2DFrCCYztffWiA1jaopPpojlqjSEpiVLTSQCCz3jpMiJ-xXP5dZ-l4HI4KTKP-0MjUaqWuwu87hnp1d_PVVDOJDLhMh6iDll0VXN5vxhPO-OoDPnZ2fS2NsnWkikjCMsv6ny-77eOvV_I2HGClvIAduITw7kNkYabatkPEwrwz6pYef69qU6K6m32trf3sic1DXiJQ37a7f3pI7EnRpRWbi1u6864yxyWJYKlT3Ncj3TtS1cakP791l1e160W2FaEf-", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117827687222370193738\">chunna he</a>"] },
            { photoReference: "AWCwydgnFSbrErxnjtWWRMnZl5oFfisvJZ6c83QKvmyZhClWXsJR096w20UinoOWj-eY78FYjRGcLoRGCYdknMK4XYrq_UDJSnOSVkyKjw6O1pwls_Wq3iXbeTq5DPLK5cuhGncFovwpHaYkBfpNVdZU2J2RIsAArNyOgW3qUMs3bNRVrtwRjSrzeF1ILIr_PEaUinPvqR9HsOxCIdd5145l4YyldbInZaq6WIt1fJbOkZadkuQtKmkmOTer5KLNVsVGF2QfXKAXmF0PeJV4n9rtfazLEtkxOgZQnnoyycrigfEhmfLs1BxDba8_BLoMx1mjZqOkdScwQcnHLYcFl77Tf5W0s88DVYJWTdupke8RV86LpFwO26bB60ExqP941luQm_1A-j8oPMe-4CPd5crpnS_rhfifCkiFOHu012vW79Y", width: 2603, height: 2561, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112483180743417179705\">Giuseppe Pizzeria &amp; Sicilian Roast Bohol</a>"] },
            { photoReference: "AWCwydj-_mtgjTUKlaZ4a6WegaRHivEvO4M3P-A36_vucmWf2WVGTQt0dt4mz88YdLVGEm2vQeVgr4r1-TA_CGHWfknEkhiklwTSJaG5jqbPyA9BFruu93og_B3Qu2ZrfO0Y47K2EEmGRzQHnOLoZTQc6m96bKKYSdVKWpypY6tSLp3gQNjZgZA3tb0GVQjdS0GxnJSKD2n8ZudtBZ6igmyaGWMjN57ytp9pAtFJdUmJwJeq5oKo2SWbj9I7_i55QTjlIPeBb1BUGGIqsr4lPUlAUy5bqie6iduKgwhc5SE-yAK3th6B3v62VDPiium1p7UgCa2nVxDF9KmFcNwcU6mdC2MuHtI-W6J5GN9inWNQMTPDHLTNYUteVaIgUSVSI3uTiiSSNWaWJdHHBqKld2X1k2ot2ejM2leEaLqGJpCp5LWulxsqfGrlumdEwuMqgX0R", width: 3016, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116424823933062766352\">Abigail Francia</a>"] },
            { photoReference: "AWCwydh6X2mzzuAGXlYhQyAHeASemSYJiJMlnoIUlWgWcT7hptxQh7JpnUI3FG1UhZOaeyk7nxkmaDzRISq2USTfBdIyBDvH6zAtv-pmR7AcK-IXBvGU_TUR-wuuI9prTg_m58_QW2Sr5qv7fjSqfs-5-fe4J9Yb91WBOVhkIj-XpDIpgKJoUmuf8M5cA18DFBJwJpn_6NB7Em8txgJ05fJWe4wIui_DbOq1Lv3wRkDHL0IMmTMKfST6-bnIxh4kqHNH9qlMRiGgigJzZnIoUnNIEiSZQnWqV-qDSY8Sa-JpXfpIQ_dAP3acu0UN7YcQcsDjZ0WY4Y0WqrVxIKofGdpkSQy_1pUvd4vwih6AESPhwgLh_EfJ3ahQBjqRI6jFJFW9VYNoZPcNMpQvZpm8coTgi6ji3d066argmiBuStMa3G5romY0wFTJizHo-q9kB55i", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112137794276644530527\">タヌキちゃん</a>"] },
            { photoReference: "AWCwydgdMKJFPXIH_Yb3j9GFDgbtN1Sn1rR39MAl89yG3HPym3VHJOk1_S1UeMlmbhoJDRWXe0iFD4RCc196pM0FdnjRlq23kbNr99GET5Nq12rbgNV-vyUh7VVG9qaAqKZycUeQzHcL8uVAdFiXGJgJEgnw_t-jtos-ECpggq_rEIBZHgJcb3qCrSJ3s6Yr6-wNDoxFZ3Mf-USJgIicTae5WZW8mbHd1-hP8Dz5_6mVgLCx8aIQYQ6hChhuxoOWdUYeA0yT8ToSxWWuOj_stEG4CFjaZtvENb7dbKlYkntW1c1UG_OlKn1vP_0tz5PkrVt9X2MIRr-WN5ZrYPcO2C8RDNSTdNm28XrgBNDdq-pSMH296q0cuA9nYLSl2UGiSCUzxamD_LPDCYbbSH2MbKEp8f0j8Dc8A8f5wZefa9luEK4u9KIoLC8LxW04_tKb3g", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112406150826550195557\">Matt Holmes</a>"] }
        ],
        summary: "피자와 파스타를 전문으로 하는 맛있는 이탈리안 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 피자", "정통 스타일의 파스타"],
        tips: ["알로나 비치 근처라 접근성이 좋습니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "피자·파스타", items: [{ name: "대표 메뉴", price: "₱400~1200", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/GiuseppeBohol", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1897723684586414261", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A3%BC%EC%84%B8%ED%8E%98+%ED%94%BC%EC%9E%90%EB%A6%AC%EC%95%84+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "토토 에 페피노": {
        photos: ["/images/bohol/info/restaurants/toto-e-peppino-bohol.jpg"],
        placeId: "ChIJmWasl_StqzMRIAl66FWjRDM",
        placePhotos: [
            { photoReference: "AWCwydjIaYZMHQQ6HQjhmGaKhYdWgwdNZRxevtANJAz2yT7GFjebIqVg7zVbwIk_-GMh-_ODuJtYMQQn_kB-jg_GKqCUdsSYXF-gwBT-9HI8zc5S7G0QY7wAbUkjD0sDfqqi-jVdeul4cycM58go7R-HnyDNxHSc_4ak7v3B_AtXUyUH5p_ARwqulm4Vf1NuWc23XIv0LsyAG4TNuoDFgzihqfsguQjWbng6vQns5QpEpl5XvXbHOH4FMpzPEhqJUJ5vsIbFLNmyiOG0QmoPamanXfp0RgGScpSHJURGychlIja4UKPZQPwLerZ3YvEH9LV-BTU7mx6aorc8PXwtEuRf6B-YbGQ3_evreIdZp5MawCG0_kWqLL8ktaVeV8-vS14AF-pI5zH06Q6pdyw1MiEbGpCwZh8LrCrlB90uLzF09VjDutQSnSPZ-TL9TAsjpeFK", width: 584, height: 438, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104753608036079586140\">Lester Japos</a>"] },
            { photoReference: "AWCwydh6W5z9bpPhgwyPjbsyL-Q7u-YOmQ_S83LkrU5CNjE52F6Si3DH9uKKPzSQzEyfppCeMY1_bG2LHaAdKCEDFkh1BU3dGRmxDVd96H9_cB1pCx1Ax-Tpn0WQG55KIf6giUDTRl9nsioYw_On5C2jWFAicl-qatSpiVCQ0jwb5tDLUiHR4t7UK_sHURQrErFnnvjhsdkzrSpF4PJ4uXqtd5ARpRP0MIgY9xpT3J2NMNIjag3VyW1f7FYgVwBRUPGThr8fVBAWyNISWbFbY_VPpUmuiKG8b-b8Oc4gBaPfxCYogW9fvPnXri9c3LpWZqIXvfZ6UNuk-4zURkC5vnbWMlK1Up1Bc16pIsAf1VF7PAzdrBpuYFxlQVMXtV5fAdRNoRWhNjthry9xHLyOgJ-vXLdheZLPnpt5uy05QlX7ngWthr2FWV_1RFAMrmSrwz1e", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118197572690584989404\">Chloé Chassin De Kergommeaux</a>"] },
            { photoReference: "AWCwydjB_sCmE2z0gkdLh2uR8HQ1RxittF_U9D0cu5FChFb8b-gM0iHb8q0QqzlSypz2ErtHSJJGadG8bHaCuwJU3KXS8dZDxkrcVwu-AOgPeGjpoI7soOoZ5wYkel_wc0PdceJpvtajzDF6gQKVmbMZypDtO6WceME8nfTKz8j3CrOLp60Qi0F0NcBHmtMbAI59z7fWJ0FX_sVNprJCbyF9MaND4FPZeymBazEe-vBO4nAHMv5jwaozC9LFEMio7fA5d1i63r3bjErdprHZyh9asd0f9ztlSYs2wufmENQxTEf2TVpOKv9L4pQxKgKrO-azaftraQBxKmuBaX6nO4ujfnVtU252VlPL7pspllax4GT5oCPduBBM3sZuPzN11xsgkSzqMfTwr-Vmmeu3ztpJ-tT8nrtioLfwnqWUVO2NfQe_RlE1CgDrHRfWMP4-6A", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107629462287982822282\">Mila Carr</a>"] },
            { photoReference: "AWCwydgVX_R0mh_RJ7fRabERc9w3MtjbxCoYMxkKUccqjSta-Doip_MAUhJ6lwbOAPbLBXPOKb_CLvc93Vfoa7b07vgalCxE79X2Y-yojBYalYiNUa2vKTRD4ClxI8CibGuQ_0uD9R9DJc_KmDbPb7AR7Iz2OTqsfoPw35SOV8tLEFii_AjAyppeAePRoeK_OaoLvDhTn-5mLrYXnjZLnCtIUYBQ7qJIKglGxU2eJr1kZ3qVQSTkGyLMMVvbEr6ke1iTB-Ekh0UqR_QeBmwwzAPwX14HIuH32pjqVkQhn7IgjMvnpxIqECxloE47X29ypkY4A-UJ4JEE1e6IaFn8jlgS4W3baRMy7Mdk3ZXknPbV6MA-mu_ekY1N4se89jbTzBDTjyHCMBxAEbQB-toLUAwhHMPhlPD-1TdtagZQNlNwyd1Ztm4pm6zdn7SP1G_bgg", width: 3000, height: 3013, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111459950535501703540\">장민준</a>"] },
            { photoReference: "AWCwydgT2enWVBedAcIMvLXr82lGOxWT93RrTyX-TZhAtrQxSLA1hSjX7OzEAmuajsigdxhlsjLtV44U42Ix7xGwH-H8Pk47DIEwZeoI3d2UK9K0HEAcpAg1ZI_Amli95P3KScdo43vwpK4zHUCWqHecSWWNUCklGl-0BEydP0iZGHiAlijYTGCsLdHnNDfXZoIht8c-qDxKwJ7_07aBag7ZesAjuYDopMQy6iIoMM-kNLVWmd49ianoBTnVTWK60uIGwReliNksC3XAayB4GjfBHPw6Pod9IV9eujB3tl00j94RhNOkg52s6BoYO9N2AQZtV4YOsFKYKj72v55cqpA1bchpHW7fsGaNPNg_M6e8DyPLrmjK2_Mos5X111i5LG07LZOcsiRRGgWcwyR5YXCkvKfVSKQrUbXyKrlVfV1s7fLpm49bKEERwOf7vksO8oaQ", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111944387372663876075\">양인화</a>"] }
        ],
        summary: "맛있는 피자와 파스타를 즐길 수 있는 보홀의 인기 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["화덕에서 구운 맛있는 피자", "다양한 종류의 파스타"],
        tips: ["인기가 많으니 미리 예약하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "피자·파스타", items: [{ name: "대표 메뉴", price: "₱400~1200", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:30; 화요일: 오전 10:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3694257183718508832", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%A0%ED%86%A0+%EC%97%90+%ED%8E%98%ED%94%BC%EB%85%B8+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "바우 보홀": {
        photos: ["/images/bohol/info/restaurants/barwoo-bohol.jpg"],
        placeId: "ChIJHSqN3pesqzMR60Zjt-RH-eY",
        placePhotos: [
            { photoReference: "AWCwydiudrKczHEM7Xi12qa7-ImkDK4YtXnvxlkQLKMilABWqgY_QzcEywPoF2Pm1Nn1a_K7v_g4SgG83qmAJULuwiQvrvqkjsgIPQH7axvNd-T3-BpP6LyAFUVjRirbfaEMRDpPF0qS8PJxVjPqQStj7vkXwefG8O2iQVzDiCB4dy2URPDpQJIoN0MppS0BCvqE72IVIK4ch8KqN4ObW9HhRUyfSLbnXiZpNPgYCAjHZ0NmQNyq14jqDlJIlj9mMg-nXCAOhBvRBcRti8miN7w4UF5eoY8bMYPXsuzkY24Ltf8Gp_DgdRvamGLyoF-DXY9tkrok5wm4w1MydJ2W6MzTaFr5r4br8qxryWF2wlWGkod2_oMzcxv5CKZJCIPp51ZFrPsqkquTs09D5n9ElyEObPtZlUgOWO2PvJfrrpeaLGIE-Q", width: 480, height: 640, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111148936337746964237\">빠우</a>"] },
            { photoReference: "AWCwydiKiltIUpyjmXbT8JBPGw-CFd6iPRB8j-UykLTLsZalcaUtLgwBcMNYJLhCsHtPhv28FPKC1gdvB_pf2PijFW0xKw2TDHXN0CE9oWyIh6rZIhaN1pTLxTfVj1AUX-Q91Gq6v_0YBbSVKsqhSDU3BdyNQjVoff10xUbjWqfKYlTEzXdfHDZfy3K50Z-ygXdbgG314McAScik1xyvQYbwZpxJAPBcK1m34plOTk8uZkIerNJrCVnAASF8h7mGD1qGeKdrnq6LthSS3PBzCDptIOX-ZyKV0HZD5OFpU4vZBKCReuMTflA8-0NTdGsxaHP3U5duySbTL2-dbf3T-8xH0b068X4Td792Sj1-VZ4dfN9bumrJVZhvwPKAS5ZfwVagJ7inhUY_rOYPH3Mtj2WmR1ESy3he9q0PLFIvtEfePq_-4mndQm0k3pO4aghsIFOU", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101422844442681857131\">Jobeth Martecio</a>"] },
            { photoReference: "AWCwydg8V0IYxaiKhDTWleil4Y5X7qZy3jrsc7vSXaAmzCLzNBDpVY-nAGdyfGbdn3SGOUIiGs3KOkpopR0PH1fEibb4PDuD_STOOJBEglhJgWeGPzLXrMJF-48ZdQiOW5aLyam9wovQzeZxVTscm-QjSbWtmy4Z7Zob2UUAINvXWhg1X4v6Q4C0-2tWVyHTyfIpitOC6NVtq6eQSIDwPREjWILC2ZOEOdUtH5TgeWCTU3oaM3tH94-HtafW_Ds494M44IM8IVs0jWS1otVELzJ9yv37z5bBRF-E6Pgvs4KR6hf88S6VPqjybwQ74vspIiZQNewZawdhqvQqEu_0l9S1GJq1NaV5FDaKBsro1mdD2I-kj0IvCPtOynDPEyEXlLoFZYyUBwzW4SN9RccplrQwQ2InfbJGD9FTHdzfo98kmw7mgYUKjE75VUCx6PpF26bI", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101485380255974593364\">Bam H. Rujira</a>"] },
            { photoReference: "AWCwydhXcmoStS1fJOMEQx1I1P4J7Risnql0ZJf4YCFmABjRw_DGNTtWBwbwdxXvBAiEDJyaCnfsI9y3Zeh_DKRVfuNq847GfkA-PqfrtEhpPZ-Al46htBKSiTc3r9na01cQ6oy7WbprPj8SQ9QNk8QVLVTjcRqUmbUQf6Nb_1AJ_4C0A4bNbfhXG3Igl_0sdUfcrbiRse6Xztx0MOkhs-NXCyVmLjP2_iB93AZCXAWfxGHiYHYEemtm6pweNtQyauCJ1syyxIMNwTc-jtbscgOa6yY7ysQfrEjRLEvkonIAu4JIarPeN1dv_bGHLCY5oAy8V2ckD7aS2cvHGvhvkLHjAS3_FW9tqaK-mB8YofVViYspbXN4NteaR_BwQ1NY6n1LSWARICTUZuOmBR0wZnQ9t8dtk31ux3tJJUh1eZLJU32N1NbtMDltu_y1bGXU0OjR", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101422844442681857131\">Jobeth Martecio</a>"] },
            { photoReference: "AWCwydghZ731lS6zYg0PgILkQSZTPMhM0Q4OmSjOYcFuVVEra-OAmqOk4UIaqcS-Qy9LYspYgWyehfZ3XaNQFrvyiqHvJfwX_4xxFwzFyglSTqpb7qKiWSwFYxKJArHyDBXMUVhr4iZAjF3c7w-qoB6RQEEKmRtctQrmG9Nzcf4Mbpt4qd48PcLFfv7KWn_sAmb-I0Zk_aFUsRQFiIJnTD7QbuJAG8x6yvDn86Xss2J8JpJjtB4Wyt4Ea7P1BHDIZuVJvlKAPsfM7Hvi4ZkleT0KGbAGMUD4G8ZUQhaniCJA4p7A6vZmKWnv_1-hy2M40xWstnEzPx6glzMM9bw_m5QyBP2U2j5L7I6laT5qjSMfIkrjUDqGE08X3htUuiRHY9av0_sP9cJJ6dc75o9LMaWHcW2yKLg34TWXRWpcKxjPuwwE72rV3ChbKvvsF2_ZmLSC", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106940770172918561647\">빽시큼</a>"] }
        ],
        summary: "창의적인 아시안 메뉴를 선보이는 독특한 분위기의 식당입니다.",
        updatedAt: "2026-07-21",
        highlights: ["독창적인 아시안 퓨전 요리", "높은 고객 만족도"],
        tips: ["메뉴가 다양하므로 인기 메뉴를 미리 확인해보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "창의적인 아시안 메뉴", items: [{ name: "대표 메뉴", price: "₱400~1200", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 12:00~2:45, 오후 5:00~9:00; 화요일: 오후 12:00~2:45, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://instagram.com/barwoo_bohol", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16643412945579230955", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%9A%B0+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "라모이 레스토랑 팡라오": {
        photos: ["/images/bohol/info/restaurants/lamoy-restaurant-panglao.jpg"],
        placeId: "ChIJ2catrJCtqzMRUV8SKM2aW-o",
        placePhotos: [
            { photoReference: "AWCwydgHb4pcR6fpENZimiyERWEk97N3j2wX8K0rGT4HoUNl50Kk7mTXy-ilgGHXqDeydLOlEjZBx_7K_lpHUaNBGNUlfZWlIOJuYZrmjSz2vVAWJ0hZwfhfVBhiqmHhABEo5eIrQn4bpig0Lau7PMVKauBUo4gQ-fxddFg7Wok57yEJhHXX4fWQLsnAjQLq-xtun6PpDeyFf25W7WSnlQ_RjB9zwphukuT5dZEsWPBbZMiGPk_OWLYPI-j2c0XMRvZyYq9KxBo5nb_aHZ6a71kKKCrJcqrwrKzcEqus2f1a02igCKvKpwdunGtwZQyAaViJri866unVdRjQiu4ZbCPDye0jOh120GRNSadRwiHtOxh8oLODbC0FWILKXtNC_Yjs8LfU_DPhDW_9jGS2-yeMcRjKxVR79-LBwI1XA6S_5ah5xg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115299805502350938987\">러브츄</a>"] },
            { photoReference: "AWCwydiaIBiM1FaFUzBq8rE4iZYmrZkTDhDmbtsczEncRPZlZzkc3V-oiPnSTb5Wb1CTvl1BpkTyB3IOXqMOM3aOHbYZm7ZH2KzVb3qNdnhahGhPVuJ7js7iZS1YQSMNlcqYX21ZOPeYbKtl4go0-MEL2jYDeH2kVeEw_D5O1CDKDbegnjcdqrwGypma3PrCq0KXXuBb5PHOsdQ5cdBG6tu8Gpkhv7Dmyf_xEWoNarL5nUd4hMW0z1WWZudcDZBzjjJcVDKO26bUNrS8SHsneBPn0iABI6T9zrtih1p5ulZsZYCOHM6jJY1AKeBGyLkzxJkqFBBZz5iGH36hu6E66MfAVNDdpDEdeHnUtie8GkvErzFLfb-GpLxqOhYeNZo48I2a_ybHCPVvfaOH8_Oxg0oPmcH-teECUuj1t5BdICpQ4pgQZ2GF_Zl2plP6VkFp3A", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100134095852042478921\">俞博萃</a>"] },
            { photoReference: "AWCwydjSBduL-1K58WomyxZ3rCf4s8wYfwbYBfIy5JzNbeeN5SyXHOQ6PGYT1koNU4A3ezcggiOP5mQLu_5aj3L6ZqxNGKQ7IagpCBgocywU3AsXSXBakoSW1prhVhtTERP2Pm3qW0EWKwKmXE6uPS0rIXzRyDO7mJxFeQCCWYH0UPDp2OxhEdOKn9AMZCx9hr5NUfeQi6IR_8mZ528MgT7PjovS0cTIggoCh03RPQnwnHF9081xGl_2th5WM_9CaGqMhYwSCb0Eu5VGjAPlujlOe4e5uG3Xd3Xpx49x18zmkMb7gHIB-YHFg-6wAbS6x3Za9Mo_s0ye8QRD9vK63qKYCKBB8sw3m1S5FllfnA7AB-hf823VjdehDezR8l017DUE_hlW1esCz8KQwtFMkJpB3xvCGkL_xbzuYza6jbUwrraaGE0wUtbGtwEWs3Dh6Nks", width: 1290, height: 1090, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108411839314403766496\">Teacher</a>"] },
            { photoReference: "AWCwydjfTDimwYBD90BZzIqz35FeMC16iIMGHYRhQfN6PGL1CURtZ_6sZZRAAbAfpDn9tWorWu2dqeAEjx75-UWWQWHoKEZn6c5PyKQL9D_w57jSeBdAhMipgmpc0zfA5PpGSRQDBlBvI-uxoqlcy9wZCXfadgfjhUykQzKRI6gJ9zcjjSO-igR2gbGreNusH74ya-iQf4SiNjfN3HwaOWMDQW3PdErj3uw5ammZ31_4U9lmAZNkSuzZ20G4dd-zFzM56rYu338UOVNaTsTrZSWuXksUCSlcwEXx12H_zl9E3BawocK4ZLYhTB_PgS9ZMB13neLnIUmKqA3S05MmtnsshSGkYHU8Ak9PSxvKd1GDrIGDzcKiNwT6r7kihK1baj3kNV8G8Pr8m_W-AJiUj5zevN1CnwjYdf-SAc-RKA-pvzBW-N4Xp4dEjBHC9VLzoo8l", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109155327947150969624\">감자</a>"] },
            { photoReference: "AWCwydhBcQs4kushiaMK1Rplgdd-hvKrLjyZYry8NrV8WgtPN1_kgbHaEGx6OYh0JWkcB8oq67RLC8AbxUmJxXMtCwJvl_H21waTCDgTJg9wp__4LxaVaob9ASCM311YG_bFOWdCp5OiAAVplti6G0nyknOyTmQIE6YdoMQvu4daeScqE5uM10dAvkyn2s_7RDkQ1ovD477W9xy0bDEaBA-9Xne4Tn2_sTwG5mzgosiActO9bT2wyFV8crZLhXyP2T7VGLa1_F6orvx_PeEq3G-1y60X908zKoloDiOWrma9IB2LTHG_ATASOI2QMviTISRtrqUT5-a3sUr5ZUznLYBCFZUnWC9Yvp2NJUkAbG2vrkoLUSqLwmpadJH89fUJOTHOFYa43LtE3LifMDhf5tH7py_RkPOWFYOO-QQMdaIJOcdr9nje1qqhy8u8gGEe8Q", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106194509042836415967\">J</a>"] }
        ],
        summary: "알로나 비치 인근에서 신선한 해산물과 로컬 메뉴를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 해산물 요리", "알로나 인근의 편리한 위치"],
        tips: ["알로나 비치 근처 여행객에게 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "알로나 인근 로컬 메뉴", items: [{ name: "대표 메뉴", price: "₱250~900", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/lamoyrestaurant/?ref=py_c", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16887261433687072593", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%AA%A8%EC%9D%B4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%8C%A1%EB%9D%BC%EC%98%A4+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "시사 비스트로 보홀": {
        photos: ["/images/bohol/info/restaurants/sisa-bistro-bohol.png"],
        placeId: "ChIJuTfs9Q6tqzMRBNcYwFdU5dI",
        placePhotos: [
            { photoReference: "AWCwydj6VhrGau-8CyWiC_Z9PHvYj8W5tEd6PziwX-RfRnmz086VTPRZLvjXSTC82aFRUxz2SolZott3SdkUxRORS70MaAThgQcDqzjGZ5KYz2pJkLGsR2lPKWWCA9d4G1bvKs83FZ5e5HCne8hlQRpQpaYE6kJVjOBH3fim2Lhp0k3xNbW8oVopGcB0wMrxTvfN_jDJKKfzWiziVM4Wk3dHQBH91ZaPby0QClluRShqK821byIox5rmdyUl0JGjPwmjWe4hv4xeMFdIxvs-3uBqCKnzvkNRjJa_SAX0hcqZrg7aUuMSO5dIdCD8FscqKTCrti0RiVSlZWY1dGww8djgXWv4EptQkqNd6_xuZS35q8tR5ZTS832RKrQYhje_mhOogD7gL9e_rzqQVnaDuJ8S2_eajWtkFezBUOUqlmHcd64", width: 4032, height: 2269, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113627706211019873538\">Sisa Bistro</a>"] },
            { photoReference: "AWCwydjYep4_lpSsRoQleRkoVaWrntO9hNZWcksSuZUY4ZzkG-9FdNfwhP1iQ65HHvwuNQzzlWHZQotL5BKizsOZS1c5oQshQvSGjRE3XRZNX9O9sBWg_IsFfqttWlPq1ofzaK1P6mWM7s4iiiPWbCcI7jdChvPayt4oh2dzsejKiyomz0E8aHQ2V9pDMlaCU1j_M7D00Do5AkCltn7C8GqPU_IjBCwfCBLzfDC-dCejRaPpEWYG17cW3BgxeesqRnv5xPm1IFmCACevC3fEvcj2e_UyOLQse-fgScuVIqmUc36ubsP47YLpQivyN3ZkkuRknz-PaZaOltFTAwffwcWsPK0vtMiY9tATpvn37MRBJLoOOa9lu3cDSS1JThSMiX20z0NtArZ5Y8KhvAaS58xwvitDiav9QHrsir7r9LxHi6DAEQ", width: 3200, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114755953302322813051\">Sisa Bistro</a>"] },
            { photoReference: "AWCwydjX_wjGEFAqfkoPt_62VQIWd1mmqwlqrCBMrBH9HbA7kPTr_W4YlWdJmNREuKBKSpvS-iD5KNe9iBHqHngr2ZkvnTgPziuAAf7hqgtsB75W3X_6TAhG4_QGnL3iIwv5cjvZA_UehR2YDeeDfWbIydPXASKYF832kgm49jxaPOHNp1Ml_9LfD_vi7BC_YiyoVDEBnxeaB1WLakEZbSi6SPNyVg6RtYlCZpzGciNUvlV-L4sSP4LhH2hCCDyt4IObhErJv-htB3q9BSrfXOZ6B3omHQYnl3WIpAjGNNN4XaL6pWZlo_y7QjpDRGaccvwpa0YE1YULj23D0D4Q-5OnR1XAQQO6k7DxYfmbBXKFZsjdAxg9PfF7raAj5KLpFuo7bLwzT1Iaye1CaAiUBmX32n0LPQRBIO83Ngq3O3OLAaI", width: 3200, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114755953302322813051\">Sisa Bistro</a>"] },
            { photoReference: "AWCwydjgXkzr-mF-52CYzvARh736DuQiTA1jWQK6iWKQlEBl_nUTRNwuXSqbqCrxOZbBxiQbFJMUSb0w3nUFK-cSZY1gJXu8uegU_Kv1Jvn-9PJOZS9GL6OQ6nIkY2Zox325LyxHr7ZKv-qCX1v5gGQe68Jwm53fUlSKCeITmmXHSM_6xsTz3VndnGiixtOJd48oltnbKqLH_LVGIoZs38HEuAP_nf5CXKLh4vHYIojy8ghsGOVt8JgCyVtTju4Koq03Yp6pqI4KUMK8hV_SGrozW6dtxc4_cJomKwmbPo0XQe0KG_MhI_YRbYfiVRvUrOvxQcYpKiKwTv3HUh_NDBTe-Nk85NM4NygEBdHYK8yr2cu3nAk9q4o_Ra6O_Q7Cz2G2yYrwaphn8NPBZuhJ9c72YUeB-EAKhqXFs7SgZYBp49drchS4aNsD_hKuI0THodzR", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115573778840288694720\">Irene Huang</a>"] },
            { photoReference: "AWCwydjQyW7j2wmm68pAH8TQ6GB_fc_71TDbjShBp_1iAFUB1_fWpwwkaJ1uVNPPSa9R-nUNTFeu0ZuCMPsvlFXbWbcPmXYhGF5MmQApNprmNVy-chW7BJZMCwu4WHRpBB8r1qHXTTH0o07JdWcIjUx6_Gqx5ZB4Tf6PBpXK28ChSFuIikGZQXewATcuU8Sl6DfzVSy8WwXcgeMoQ_tJxgreK25LYPSEapf23-ge9WbFflwWHMsdvyAMP0iSItJB24JhZkcCYddmvkCXt77xQOjeAL_FiZyRNcRkbUucH-w6NbslLBkGB4F_ULDaRnDiDewaUfoQAiQY9ShpO-86ZevFSGVcxodXM4ZrdTiQSPFiTRCfwr7D6rzjhF9L6NqUzGd4Qi7gDuLudmM6Tsmgxp9Z0dzJhDEP-DDQTXAIPsRy5E5GlRsjgxcxD25q1xsVycna", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115826181297904586687\">빙글빙글도란도란</a>"] }
        ],
        summary: "모던하게 재해석된 필리핀 전통 음식을 맛볼 수 있는 고품격 비스트로입니다.",
        updatedAt: "2026-07-21",
        highlights: ["세련된 모던 필리핀 메뉴", "높은 고객 만족도"],
        tips: ["특별한 저녁 식사를 위해 예약 후 방문하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "모던 필리핀 메뉴", items: [{ name: "대표 메뉴", price: "₱500~1500", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15196645253493348100", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EC%82%AC+%EB%B9%84%EC%8A%A4%ED%8A%B8%EB%A1%9C+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "미스트 팡라오": {
        photos: ["/images/bohol/info/restaurants/mist-panglao-bohol.jpg"],
        placeId: "ChIJPRLLsN-tqzMRWpLDDVwsweA",
        placePhotos: [
            { photoReference: "AWCwydhgmuoNtM_mvyXebgg08NqDlxoVDghNH-OMH9zSS-QsGERxTd9P7gTwPqVV9M08jWrArdm365N-CqGdUGwC-AzS56epwjvBJ5iaC1qowm1zgARzy9MXPXeAnDyPtMnw891V-LT_me-zNv2BhRMrNUwZm0_SFDzKxORKvk-aQU7Jb5KxXYHTwDHqh3mraVTxQ8Mj6uWIUp_JpgNVTDHeG7rmET55iXWSE-vt1I0VsjJhCOkRN7Afv_uObkCYHoQWHDRj1wo2ZwhIMk-tpgcceqP0CAFVmTCoFkpR4ARLNnnMZN66eF3zSvuyEuatKfLSNqsKCSjoo2N3k6_NU73YOaiJcu_hZ7UImF_ZM1noH-KQtGhjCBch8Gm35A0dGDt2tRV-0HPOLEJfZDMtXvlcJYJhY9fZLu_5mdlqoYL5zv6KzA", width: 3572, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108449438034484162103\">MIST</a>"] },
            { photoReference: "AWCwydhb0wR7XjDa3oJ0uuhoKV9SqkmQzXbUn3M4xU8muRWXEgoH9twFH5qk3GFX6ZVMrll7UHc7JfXy_eZjSDPP_PkMtKrOJ-Y6LAj0JlVCPCld-3MbF4_TC2bSF8Nwo8-O94jC2MNOggjVRmcbWmISk4voZLsRSvNNtgmYMEHAwGTep-kpl_jsfCQO4Ynvl6lz-G1geZjPZo3KfuoOfERQVTy5YpB5hWiPTLTiQR9VQ_oLyX9qZeTIaHHLglnFGkudzLOAjVNE--EgwtvergNwe-a3HPiTRr78NTr4F7tChkuIkFtekVs3P7Pv5VBAuDEjk6h-422rwvNOR4fZOhJUmBge2EgYBKRFU6XdsC1dTHnipO0KERqQBMdAGrk5H2TsNVVDdHrlpNfBhlZ9uW85b516QAyXDac1axsSYZnaG4DvBhwO", width: 3072, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108449438034484162103\">MIST</a>"] },
            { photoReference: "AWCwydj7gKQcqkONwa0VQVNaP-qbDk5MTR6fGcFL2kZTTJJyJMBaLokyzuyySi4W0LtYyNojxOi0WWiRHILICJo4UXzDGLzBd0D0x5zL-cfF7K1vO27Y15kBzNXja6VIoeaeorVSySfRWRdWbwpFii2050Yq1kNN1E9yr978_7XNFiftEywH78OZqeQhAiSCMNkTm0OVJqVOkgk_DAurYUOYTuKM5vL0Q-Z1Jni6R19iv3Xpmgka9BntN4rzOqnTwbHjR8fewvRVtOcSywkjUA4m4edrj_1eKvMCTFon1QOdJiZW36gEd4Ixy1Nu2xdd9MzsdnTFypOPZr_-EkvrQBl5iQQHhjB1bMKSR_-f0JZ4K8bU0I6c33HUC1w_vpqg6Icl1desMU424FE_AAxw5_pNc3l0w9DQSvlrYVSHbXJ7o5PzBvsKlrGKbwXaeC07x8gh", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105217839907410237858\">Jan M</a>"] },
            { photoReference: "AWCwydi11ijUs_nnJGCxUJMBagb9NkK3G5-ark09X9ahrCY_2lmbWOVXxgXIEHlcNv01AI0hBVT2BggiZ1Buob0S122JmIhmxpj4Usqo-g8bvsOuy0cDqdoAe_SvAJqdCkXTMOCc-UG-Kehpa2NVJpZ3_pDCH81NszVdHsigtASsndmVU7LzIJJiFZNtMXO_PPhIssfT2JBsUyWzDhsRGxkqYS9tC4sANBjCHAq5bLX9cBIOj455fjCIDcVSb7v0QVTEmpMxS5phV19XdqxuyTO4N6HpjSii1gYcSYuIHSTKkNOcp0mdY8EEdZBliNOeejhPb9wKUhzz1wsaQq4LGpJCr06pmh1MtEGbqnRbQo1P_8ikrERq80jDcF0c5fBkwqntR04aD2NtcvekMo_wBP_6kP2hXNMYg0n4MNobiurrOojTiEE", width: 744, height: 418, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108449438034484162103\">MIST</a>"] },
            { photoReference: "AWCwydigR02kUU4MpgCmjL2K756c7u0Dfh8nD28BIO56kXT4xB2KTAb9ZyAtaVPGvyJTSB6NHmPQ0IQLrjgwlkssNt-g3t5EjEWxJXeKjfEKgbVymcc_exgDrpiZ1DTNgCHWK_-U5hIllarwgSv2hqNAewGrWZIkjcitBjgx7T2_0QQT1lWtPofWZtJU995Vb9sOZwLBQU9pUe3st-HEsRffAFDeZONysdVmnLv3k0-yqfG6QB9yla4MBaLubJtD6NMHg1FRXUsgkGU6g3sPzHC08NSqjb3mDhsKYOSGJbvc3uJpGCO2-D7T9IHYzbfZK9Cfi9orCTgSh0Y6EX4frpZUCEpILtdFSV32MN_fMpHwlB6TlGwHT9151nIi3D4Pyizs-m5K_AwNRmakv4dMBo1nQCoix3IopWNe1TBtC-v42RzF4lxwJTRDyq1Hnx0_Jw", width: 1320, height: 1723, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108983126686632132479\">Angel Ruby</a>"] }
        ],
        summary: "브런치와 커피를 즐기기 좋은 미스트 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["맛있는 브런치 메뉴", "향긋한 커피"],
        tips: ["여유로운 아침 식사로 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "브런치와 커피", items: [{ name: "대표 메뉴", price: "₱250~800", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:30 ~ 오후 10:00; 화요일: 오전 10:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://facebook.com/mistbohol", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16195274508880548442", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%8A%A4%ED%8A%B8+%ED%8C%A1%EB%9D%BC%EC%98%A4+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "오버그로운 카페 보홀": {
        photos: ["/images/bohol/info/restaurants/overgrown-cafe-bohol.jpg"],
        placeId: "ChIJNQaM2uCtqzMRbNDX8AnT5qc",
        placePhotos: [
            { photoReference: "AWCwydijMaRqsrVeOtwvgyi-_HExbcP29iG7iUYaG75l65moIWz1VElJyFzb9lAfyWz4UIkJPjEgQhOlHko_-BqAAR4AOCBLuiBQoUUrqIUFgTx1paAbvhHWPtQ9tjEeO0ttz5snvrptcAc1WWV6AEL8IN-_SyZt6RhAxi1acIFBmyede3jW6Y3SxfO5rWXOYYv0KwujTw_tEGvRjt-nrW_g7sYBVVVbI77E5sGtHg8BCpdYSOOxqSpJl_UE7IH2f7OCuvOtbmUrJPBFvHnIFqVRYTbg2r75VKSTgpzxLnkU485aKlj2Kmoi4XMNAwpFdcUL1Jhcbn84ifD5FO5aZW2WhO-kuJrZuZEYWPQGEn4amt_tMc0VFwgg0_y3MruLGo4PD_B52PO-OJXRXVJbmNqKvwxqA03CO24Gw4FO0QeN4AxpLyrX95YkuuWvjf_Ilw", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111617838938066630023\">OVERGROWN Café &amp; Bar</a>"] },
            { photoReference: "AWCwydg5BZ4PtTDawTDUMhtEOsrE_0qxfgDCK0Gk3pxQmCun8zfyQQ9-lgbuLj27v5I3lFW7OyukdbeOh8NGZ0bfJLc5XXFPir9bmdguSIDLbBjL7JFrPoiInC4OCikN2NY1xPQONj7ukiy8YmzsfFhGdTvK21E2izBFVSG4HmQZPGVmuSXpcQhHQUNM5WaKgZ63SB436OWbvEklxgfvktBP95SkFvEUC7Az3nx_M3qMMLW8CX5VzJjKEsiiovxYsXCNFxBkwQh_7oSQ2GuGbaj4Jl78u_0go2b10tMnltA0Mqnfq2hJ3IE4UCYfj1-C1z4vDRD7pSQI5UQak86LBsDxtcJiV14-2x7ERkSRBglmjbWpsHfROm_QTN0AfpHE64gTzIih5-7_YoxIMHm8a2DOlxh15RUtvkdCrSeKUe6JylmUQFTTaSyjpN0WJ7eKrQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111617838938066630023\">OVERGROWN Café &amp; Bar</a>"] },
            { photoReference: "AWCwydio5Jp3BfEW-ekb0QRfN-ITmXO4SYTC9J2GwHlYo0I2YZ4MsB04rDvgJmd-gvmMqxmwH34PP3pimrF_Q-KStFeyeclTHzxm90Yxx61rCnR4gDohwsY7-uvIX9DmS2iBjZpNemBPhMffEXeqkA1jGjZf8zgd65RKDupOXs0dVFk_jRCDuFv12emVc4_kq1XgKWYYrTWg2EdpYDGWjCVuQhPkwfiJ145X7vopu0CZGawnBydvbpJihv-i35TenSk5OX3qkl3d2Yny7y-MFXLUqk38RkqTtk3J1aByAALeiHYnLVRzD3XFOWkWyyhHCpNR7cIECRzdDW8J0d2MpRG62pD_ENkW_Fj1ODBBdSoC4u2Em3zGsgifv_t4jxkr6070QkyPUR-Ge3ifPxz2u18vFp1uhwvqFGEyJV2WeE2vGEKLgK7qF1xtjOT1t6fWj1QA", width: 3617, height: 4106, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117314569609785786311\">Víctor Martín</a>"] },
            { photoReference: "AWCwydgc4wl-jmH4GiJBBwo_mJsyXbEDiM621N2JLBXAT_fwDUjLkBSzYReoO3Hdrtfc2-FgK0A4Ahn9QLGbpDJUBtY1YwV-gUQ9r87MEPNoyiwWT62wKhAm9yqBmS6iPszU6dMTaD2YDCBVYAoUlWIdFiuyU0UOrxNN4qqs_Rt5doz3aWbIDTNXdvDsUi9RlU-Z5T7686qhDxj28eHaIsN-ygMQVqs4VlR_-Mfye78d-iIoE3Iw87uRbgdbpxZkmzhlu6NIDhVxaGBUzO-e82d_AocyE3thSnjKowyjFBtmAIcZgskTSlApwGfoob_SG9YQVAxmlcKyvim1oNh9yfflBk8tv7Df1YFlYQbCu6aFtSEJ3B_6UG7L6MgG85mMkTtJve99IG3OyjrH-CFGzc6AuzyOLwmRI_47XKOE6wiGWaqCtsyK3B8ywnoaQ9Vs21rA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100510974794115993302\">Sergio</a>"] },
            { photoReference: "AWCwydjE91ERki0BzryKrca4cq_CC0I33REshlBiBaZtFpuEuW6VZE1_XoEXnjSFlUGeid-aBD3SKUlowz-K5a5aQOgyDiaWjw7dqaIqAJxELD9gXxW1JGJwj7hp1M4UhySnJlczaQtozUMz2j9KkMVHPh7NKjkLrYFJ34rWgc7jDNeaXUlTphGfnrWb0bh9qtsZcV2t6V6WC59Kj5iHXFg7EjiWUezfaJ2RVJp2XcI16d68wfCYTqARkg7_akR9Ybyz_J7Wr0JFxvfJhHnzwK-EtBFrtPjoctZ9_N0yIO7lCSw6-wktQOdxWCLyvzFKzso1b8iry1ucI7UZvQAHXWuZHQWqOdFl810QntRZ1emenrOOql0mZD-p_QVRJ1dGGuKtRs8S1Yz8-PlVryBzU9ZjzJ0yNEf7HnrZNUX4Zm3VZw3-bd2VsArV9wUOcSS3zw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111287632688564304907\">coco honey</a>"] }
        ],
        summary: "다양한 카페 메뉴와 디저트를 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다채로운 디저트", "훌륭한 카페 메뉴"],
        tips: ["디저트와 함께 여유를 즐겨보세요"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "카페 메뉴와 디저트", items: [{ name: "대표 메뉴", price: "₱250~800", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 10:00; 화요일: 오전 6:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=100088550370554", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12098589488626258028", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%B2%84%EA%B7%B8%EB%A1%9C%EC%9A%B4+%EC%B9%B4%ED%8E%98+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "샤카 보홀": {
        photos: ["/images/bohol/info/restaurants/shaka-bohol-panglao.jpg"],
        placeId: "ChIJf9cEEJisqzMRtTllqEy2rCY",
        placePhotos: [
            { photoReference: "AWCwydg3YHANHZzMO3Y0lxARRmyQcv5oE1p6DLc_sHdGX1ZDfD2zF5TuWn7kmr16e7vQLjX5lhmxPddNvIfDkTn77FiYXF0y_nnKvG8vnhU17UNuR1LMa2YguZfMllPl8kPkFync-D5zVljcreosT0PG0B8ix3TZzG16yKxhIv9wjioADXKHxdEtyOtYq9jRN9MzXMczpa7amYQ1hBlfZoxEJ87mAQ4m6khF3SPYONNZTYoXRQ_LJVFvjuFOyrVIDa_WWrlV8S5tBDJAdpcL1YLBLiXJ_fkWyJ0F-VMMoT7Nwmo-RnppjdtSZ3BMawul2jK5jRWJDGSdbYjWqioP3iskocJJAkzToPFt4f6cOu25Mg9F-_2sH87gPFb7JNoEuY2-jhpOYGdBXEjmrfVQ6pubVUSKEzuT7fZuyLmB6eivaKlMVtnj4RoEuQYaNvgR-9H7", width: 960, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117753095591492969944\">SHAKA - Panglao Bohol</a>"] },
            { photoReference: "AWCwydgi0FqyAuG3MKkjpDAmdmFoibMj5T4NEllZeUEV-2I9ymWotWJVhgrSw4fkdefVl9qdJMpW_a0IkQa8tPyZ4oLTTOlXCnhiVOvzhtQ5Vo0xcDOXCtmV5dJrNztv6-ZIlLKrqCvN2SdYKG-dS7vLHjuv1VC0Btd7N2ZAs2UsJG8Si-7lsBW4fXCFXh-QooKfvyqnEt_AeId9VCzdV0eNbbhj51z2C_SpJWpyE_4fBj3gVhNncfrutnlh7iqWv_dnJeYYbOB65Rv0MehQqf-JqRR3W0BJHBUk3a4cQBJ7VGFdNALGroDAdzYHzjyrAFA45g3khdWpXtFBsMYiEb8P1lQxzZuuVNcgBehcQna6COe9-BUvaKMcLUiVpsb0FJcwiD03te3KcRAk7B__bfBJWwYzibpQbfwXG26APH_Eb2NhvRYD7FKrhZvNDNBLNPtf", width: 680, height: 760, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117753095591492969944\">SHAKA - Panglao Bohol</a>"] },
            { photoReference: "AWCwydiBfTfOWV_RSCZO-7jsLtdzZcKYuxXGaR9hm-4_UTBdHOAcq1YBtvwPlIpRylsJ_cYuPlAdbUdm-ma-4-ZHO0UXxecogtcksdDP7at1STmNSZ5xpJtq2J9scC31mTme-10W0vvWau1VebpCaVm9TbTDVWDRrcepZGD1mbg4paJtPrwjZV9ZP0iT7Kzs1BB6CBbJGRF385QtE2DLRTNMR5dtGbak1HRbHSoAoGfshz1xmkIsvjZrQ9L7T3BzgoLeXteb1_9PV1zNtsd-NN9wmKpBdTx8CGtmug3Wm3V3JA2WniNtIAcU2liUfiyFMaNR1H7ZTBIOQ5liv1QpoLLpuDa5w8hF7P_srt3S3jeqW886wH6sAFI6gF3uyRy3arZC8uwHaVTQhH6B3sNKB2JuNR8hMGkZwcB14TZ6REF860mvNmx341E5X0qxHaUD6qYt", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108793317451728160107\">carlos gil</a>"] },
            { photoReference: "AWCwydh3GPFGjrkdr2sXZNED3n9T4GX_bqtGHllS9AqCqfv2W9LQaII6UD4NydVSWotFy7ab1zAzDoV6fQM7nAy2YtJ1OE2K60SCyHCwaz-oy3Qid1VVCmIVEXd7L5uWXxOkngcug88zrV-zF-l_ooPUJpKEf8EsKKlSiBIOq5RPKybdmfonVtoAm6_OZY6Tsx6ZdHh0YGYoJNgTzB09YbEIrhznKcAzaab8JB1JhqlPVJUbUg7CRT4PsGMmwEugSMZyJT77uG0zDpU_Bk-DXPIxy7-rztePnf-chvgNC16i3yuWpemGuNcG1grAQ9VuNSmCXLFU35yvPAx_ssYQr7pJzGijAjcOnbqq4g4Dju3i1qsUZgrvbl3Wa39t9-rQXKmCjnIRxd3-SgmiqVN9BmeZYgc-E-olB_lqbVyUNJm3tnaLDcXeVr9TXWTJtSwqBBwq", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117201861791622189329\">M.</a>"] },
            { photoReference: "AWCwydgkBxx6qeQNt3SAVcs8dydpcTvMpA8BySa0Xo1LG66k181SlwP2i_tkuNsG2Gg2MF6XJB9qQ5hsCw7YdY6jYJ74UJ3FouMjB8aTaDytOf5odAEuC7IIJn7vevk2oSqofykKaUoFkX84qiM9cz1ukcK9MzROfnnW5k1QUU9S5NEj-u6wGgQo3K-inhjjvtmumX-7bigIWfut35nyo3YKyJJmqr5B121BX9QhPFzW5DSpsdJGCfDZXwKyDGINqDwRQhKlvqXpfdev4kaejGTMa3_zp2Amx-KM2CUzRnVk6tLNLQtHsjJzdS982-fM4nH1uyqNxSjz5Jce2l3pAIZaJ-qFezBVoMGITLgo6w2alqMefGuiktI_91blqI_IMtm1gnaT_-HMnhNJ6rxQTFXjGMy4sjlRs7cXyONsZv6wmfevsBLE0sH9T-QH_rK1ug", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101551058581489416959\">myout h</a>"] }
        ],
        summary: "신선한 재료를 사용한 스무디볼과 건강식을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 스무디볼", "건강하고 신선한 메뉴"],
        tips: ["아침 식사나 가벼운 브런치로 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스무디볼·건강식", items: [{ name: "대표 메뉴", price: "₱250~700", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2786802709794470325", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%A4%EC%B9%B4+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "아이시스 타이 레스토랑 팡라오": {
        photos: ["/images/bohol/info/restaurants/isis-thai-restaurant-panglao-bohol.jpg"],
        placeId: "ChIJ0_7S_JisqzMRkViqxWcTqy8",
        placePhotos: [
            { photoReference: "AWCwydj-c6_9n27DIqNzIqQ-za48LOfVDOLIaUag79Lsz2c98aZ1kTSKjVswQCOfF4uB577klKu-t5MGy1PSXuKPdaYDo4ho5i7Z0skqzBvGhL6NKZAS-yJBIwcGNMYiwYkTKrj5S8Q8KUadfz4WsgOqqpkFO2PLnRVfsA_OAh5KJIo5tBd5uYmiG2bUGJsNkKH1CVNMHwsQcUPd3ljZLxCowdJG_Vl22uxIoKQnB8y077AthllEedDPaDAQnqgZd90e6Ldnb4Paee8y-f6vdZka4vUpDxgkr1glAvYOGhCGnkWawEW4Hvjs9xF3pYIilIVSzhCme-rURR2Y13ZLqklPjT47v1T-VX5r58NSgCshGzsK3Th07iCSfJeArNwAk12Iv7wKsDd5pgX900Rf4ZDXrAsK7oYI8seckgtJw5xaynKxuRkRZ8oSMgVKypeMRlY6", width: 963, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101908329164664264617\">Isis Bungalows and Thai Restaurant</a>"] },
            { photoReference: "AWCwydgyUvvDKT96jXCkw__XAJaZbe-pJ4AJQzb2wh2Ku4E0afmqqXDHHKTRCR2H_0iwVYLCdxvxJatG73mevXMUTlN3GcAmzXtWsAvuZ5jTKtNg107afMLd6Q-Czi8jt4REpCOv1EQZT6QqcKXI8y2zgqWSQhX0UDLe0nQuZQwP-AeUq8Gf6PH5phb_RreqqOxckmhjUKU9Dg227KrROfWp0c0bZbE5BbsFd4-IbwqGm6e-RVJL9tBe48dl1cNaxzcz8dHyd7Y3cwzXpBXkyblM5xMuaF0OnCo2VLIvql2FDiPEQdx4UQ1Hw15223P7-t6JFXuyUDYShd-ys6I-CRanojHnuTcfACnj3q8RFPh0c12-vlxHYY94dBI7BwReLpo_6__B88lNM82tUl0t-x1ei01nAwM_0OVd35QvFpahQtmEv4YdZ61soO630tD8uHnK", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111238642781372037635\">chi kim</a>"] },
            { photoReference: "AWCwydgSHVYMdBsRds6eMWIdH5soE3mQkdI9Had1Q6BI0gcauTR5fYrcy9uAVfNA-vZX1hQM3qIVnkYcCYQIAwAy569bFNXFuCY5aHQotsrUfW1CGZs8JqWTZ6vjhm3Z3rUqv7euJs2exjdAyaVDpPmkNGCO96VCQUQ3X5qjPjGGQPoxhRhCBj-gi_ocHBBO5w-aWGRnfLYWVzjn_8afdHzDO0J58TCxhMLk2dWuBrht7zA25RstJGvhjchCwF-P9ewmOVxfMnA4gaVSxYKoBB1HrTvFOAQDhRq8dX89OkV2KoH92f1Ql4bfIHsbEOrRk3bHc9iY_6mTJ0Ga9K0Qfe18y21hFfrphM1a506JcBrlR9_N6OwRLmziyLUjqfLEwpWYtmKL1aWp1JUwEllEK8DLsiH4YhjQj7m71AHmYE3o4_M4DQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116822979715082256020\">ベルクパパ</a>"] },
            { photoReference: "AWCwydh4FSvlOHZThLnd8quS0g0jHwtBa6z_cQPy6h15zijeps9vj0JCn3INvcBzDwsMak--9BxPjTHYkHo6lEYa9_9nak-dmjVAajbdgLkhHQYgddE39znIvrUJLHPPnGntRN9O2CQAA35kZb91BpBKDebIDa_SQkyP9lBZAAk4k7YozbjpF2-P2LXV1uLGGIhtcYFVgqpg4qQM5FzUDH2GXZUSv0GYKpN9XIn93Rz1ZMO5IcumIqoIrx3jiQP18tTJ3U4xEhq6vn9LCDW-K5xxLfgLUuAENfFJ5OV-wFUJfqzXgJ7vxsDY16Ws__zhshq85t3XqEcWKZEMH1Ornhzc6Pa-15B5GVsZOk_QUcLopLILvBSMp4tp_1FStKzS_hgb_ndfv8kgn7hgYoFvTcOE5xEd_aMsk-PEsgkb1BrgLHpFTxqaNXpuNQyVBu6Bu7Ju", width: 1079, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101908329164664264617\">Isis Bungalows and Thai Restaurant</a>"] },
            { photoReference: "AWCwydhZY_1MbvKfH7VJSST5GR3gBKD3B7eExQ0u94mJ4k3ypJKk48WQYKZIqEgQdmLPtLdpI3gCjgcAj9P3_QPvt_-pIm9g_bz7AjpFECzLv-jnoSy10lu9_-n2oGrd_6CZW2QLf2EfD46EIgDd969mLa7ZbLsZh4xDa1d1Pyr-ak7Uqg-CETl78Ko8AoJv3AA5jdJPmNKZ-evUuNN7lgdq5PbFMBFYa5_j-ySoUap0BJA4wuBwfsODEtNkiMwuu2JG40Mh7S6IqWv7__QZos5RoYLpRNOnw8TGwNXh5X8W6RwJqzXtTaFQHP0X4v1mAfGBR2tDSWRakRHVYmbhn7-IpYSA-yDiNJC0lZKAqTQnW-cF6orkeiLAd6FOZqN3R2hVJtFmQlY8TAejRcg1vAyRgZb7sjKn_8F40tplkoged3hkRvUoR6TR9XfcYD13Xg", width: 1079, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101908329164664264617\">Isis Bungalows and Thai Restaurant</a>"] }
        ],
        summary: "해변에서 맛있는 타이 커리와 식사를 즐길 수 있는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["맛있는 타이 커리", "낭만적인 해변 분위기"],
        tips: ["해변가 좌석을 예약하면 더욱 좋습니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "타이 커리와 해변 식사", items: [{ name: "대표 메뉴", price: "₱300~900", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 9:00; 화요일: 오전 8:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3434860477218969745", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9D%B4%EC%8B%9C%EC%8A%A4+%ED%83%80%EC%9D%B4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%8C%A1%EB%9D%BC%EC%98%A4+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "루나 로사 보홀": {
        photos: ["/images/bohol/info/restaurants/luna-rossa-vegetarian-italian-restaurant-bohol.jpg"],
        placeId: "ChIJD2nlnJmsqzMRdvUq2XP1rVY",
        placePhotos: [
            { photoReference: "AWCwydjV_4k7Xufd4tEVaJaZqP2rGDBTe0EaTuaB8hkUpv8zxB6VovFuCu-NRDoE8tK9yGSaGceK6N4IHvqeILn4Yf1dfSlsIMx8gDVJFcRU-OaDIcvRuntvPLXddM2O_YOx0VCw8S4efXo1g7ce2okjSakTbX4AB3Ff6legYEVjgFcXOJzlE8m8B9ZWKZtjvk4jFJDutBvWs0urTTjl8wO2hWDoax5-Qo0bKWtZckjtOiKllrMg-A3xsODqNPWUtJJjXui3PbIlc8pGRv3A1-eXcoxErSMHdWMInbBa5s4mZHgLON-9oSgKpQevWRhVy-bpl7e1Q_RpZNjjL5jFm5iJjP7XrA9U59CmtyoGWq7pQ25pAozU3_BmDRb7sOmyVluu0dGwrFX3WC0VQsqa1Wqyg6Zh_xeg2giTmeLe8Lsm9cqfrg", width: 2251, height: 1593, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106291690850198236360\">Luna Rossa Vegetarian Italian Restaurant</a>"] },
            { photoReference: "AWCwydgrV2z48z5ifsgcMDdz9DYTJezTy_4w8n7_3UKha9xTPmaqL5GRm3JJaZSVys6mVGnpANTrT7nhR36bRH550iBiCKng3cE0tSkIi6_6VAuzEqi_uvyEdzzK_tFGHlQIJgtohy7emgD7OeumTMcAf6YvX5WWbVTMRKPlsjmQVnX8pEEAP0mQ_ZoNYAVujRRtZato40K3_r3nLBd2hfhzzx9mxPTmppA3sTnUsJ9_o3wAjEykEX8hzjQoauUiJ5mDej8X169mQVQmwvEWeP3NMSJZeLauFQ4Q7QIVxRnzoaWg-a83CStRYy2GIsYvjdbcizdBYn7OUaSe8wU-bqzrTowJ7cbXjWBn-7pHOjhloBJbZr5xMgZBlSR_wBnEu20E01OKDNF1xyYoYP4uYVVlRuUgijpM8oe9nfunlQKGz_upxmQM", width: 1954, height: 1796, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106291690850198236360\">Luna Rossa Vegetarian Italian Restaurant</a>"] },
            { photoReference: "AWCwydiWK2ixeuGdm9pKiCmLlo-kZKcg3eEbqJBB3wqZtGQJ8T8dF5dU_h43EQ-50-S1jve455eC972Ab4fW5PUsrEKa7-3vG46PxYoweWO7h0QdvpwYxMXjx-D-JggEs1MljwN1L3Cype9Pvn2V7416c-9zaFxbcdhmXXQwaM_X0laEjIGxSeQGg2FO3oJxQQvjUXlLxm6i0B9GWZkIy46JFhN-CJpcF_kDMUpueFxMU7wXEXAG5wWXYAaSgP2f0YPjFJgncvnJW4zo7ezm3uGk8gA8qRm9qnTEIPBiiFSnuiOdaB3SMKAmV3Bq1h3rEPo5D1QF_pagLK27CwBDf72rqOWvSjq7HK_EOKhfWyCcJtPEsJN9Q0ncx_10enazT7Zo3PUFF9KNC4Yk0g0FQKVzkpipxs263I2Sqh-mVEFtRBhQnw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116292081461889801973\">BoholWu TV 필리핀-보홀 우실장</a>"] },
            { photoReference: "AWCwydjVgOOdX0UE8kD5i4Q3Pjbr4kGl1KWRygbmdDh4sd1C8nRvM4Q9BsCKt85urgA4eltpuN6pyrfrAYF6ixrAqrbpn72jVZ73hVx2loeCP1gHM_U2DZKZ7Swwspp9xy0FfCTgMgcx9_KR3uqBzJZBbhRRubHRkWHH8YwL1ns9xrKxN0bjt-81IhjlhbzeTHCJTVPS6eVp-KMDQR0pDBaJTlYt1Y2a3RJ4gDGb3QizDSY5AODHUHv49cz-5bduW5MlqZAB2Wr30GrjYM3Kh6Sb6zoQx7xaPwHOTtxv4mwJdCy3D90MDn6Q3OZV2tUvZhbLuETNte-T7836ibTIf4c34z7mrkT3AG4QTDHQ_Egl1ydkMCmBoPkV_nDMeOPFyCuF3SS-OdTOJj5w7HzG7OzIoqjiGv2JEMdR6FM33KsKWM2vvw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106098258036803507960\">オンオラワン</a>"] },
            { photoReference: "AWCwydhBcJKGhlsNvRkH1bzN-DxU6n4vVt10AvXx4msrF5U-8tpfoT_Q_QNkatGRI-hZFjuo6FUsFV1zpxz0XHiv-q_3hoYMLCBaYu0RcwcwI8XsGhDrJTCJYm8vgxo8LgZs-IZkr5_VSpH937H-belkkA8hxtovnt-IEhoFBuU3rG9ST_2Dl5F44FYaCY44ACy_hoir-pOzlCEhBSoVBcmujQ88BIH3oVOLpa5lCNthraPg5zo6lAO3ho9xPhJA9a0qb6-9RhuJ5-IIpHhHK1RKAegv-jKOrniwkO-ZwPeufqSMpD24BPgx1NqCE8uRHQjGsr4Eb67zFVqc69U7Upnuug-O_7p8Xc8w7w-4M3umvkUh2WpSih13ZfG-TgqPVXDee8Z_bM2_G303wFDyskpLNRQQUojRyfpXm7JkNn5p-aBiyBBD", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105010787004487697920\">Vinny Wu</a>"] }
        ],
        summary: "보홀에서 즐길 수 있는 맛있는 채식 이탈리안 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["채식 전문 이탈리안 요리", "신선한 재료 사용"],
        tips: ["채식주의자에게 강력 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "채식 이탈리안", items: [{ name: "대표 메뉴", price: "₱350~1000", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6245918136146261366", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A3%A8%EB%82%98+%EB%A1%9C%EC%82%AC+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "펄 레스토랑 리나우 비치": {
        photos: ["/images/bohol/info/restaurants/linaw-beach-resort-pearl-restaurant-panglao.jpg"],
        placeId: "ChIJH0UOn3ysqzMRQ3Nc50bk_SM",
        placePhotos: [
            { photoReference: "AWCwydjHcBpcPhpUrRLPIb7w0-r4AVFi4-JU705xwIz6DhuK7RdcUGAxiy7eSPsiHj4kN-DnW3BOmsY6vVwH-j-ECF0Ya4rcv79jpSozOoqqGxQYAr5tc-h7MpkUqQ_KOqaFwv61s3M1ln_RrWeWpHfviTBTIz9X7ycOgM6ztuYX4loRZ8umumZUd0EsEYbJ-jERat0qh7JZJGDPYIXYjCgPeuvzOzySH8Ic3t4ZIMtyl-xwHKD3KQ88ZCYdDd95IlmMpxNCraUrUnkN7WNJkMuE3T09NS0doGHPIGZ3Zb2wuozPP6gdOMZsSA7hjFHec58TYkoFqn0If62FHVW1q5UKO5FXFcLdPSjnhnbzhJnFgvnHbjN7efSev__XrBL0z6pcWNJMv8GJ_Kp3dKcVk32qAN3P7Xo6gVbGR3vlRnlfVYDTag0", width: 1600, height: 1067, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102700291370699645027\">Panglao Pearl Premiere White Sand Resort (Formerly Linaw Beach Resort)</a>"] },
            { photoReference: "AWCwydgq_KHGH9JduptZYKJcOqeoYJSXVz2CPGoXcymQ6ft41NeFHxrLH_nm0naxlPxTWG1ctlIrXwEt97bihb8FDwrMAeN1HvkspWfIhkXTEo3zw3x3rgmQFbW9nCik3mU6wTmIn8rczJdf2psievet5prx5o242puHN0kbIGb4LyajS_rNiwgbOWyXslOokNMOcMxj80kt2QEQZmmK4xhBLhAVnapihnGXa7i9BKxYIbkzQNou0emQfsbnjVU3alWbnOuZF4PyJqlURYzCIPnz3lkfNxzyQa-7vdSGk7FyKNLo_HUU5q1XS24ywmSF85IUl-ymy_s8lyypB3-EU6SRKP6_pKDipZpuZ7cTfdQqgCef_hMDgNpeU6-NcD2xoNja2YCDJwI7McXhrwEILxkCaW-4lcZtrq3Es_Augs3CQXBISA", width: 1600, height: 1067, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102700291370699645027\">Panglao Pearl Premiere White Sand Resort (Formerly Linaw Beach Resort)</a>"] },
            { photoReference: "AWCwydj9sJKQm-byEEj6eiqxYaRhdJIr5n5kj9i94Ob0QJPniP16Ra830aAVSW7A75s9thJMT77KDHupmLY5T3JkJz9A3qbg6Hhf08AHkYTEv6Yj8q5Fwt9V5HW54T2PUf47G5GD02-F-Bx1fc-urv3aNFzrBaMs5RyFwUaJZTLGERIitJZbaGU_ytib_NWGiOdfeODzPmt_DMOLH5xfT_dIyWpnllAAf7k4UNHEamC902rAAxXi3hix3hLO_pnVyH3hmKjuAUjPohJsLpN4nWacomvtmq78oxQYzx3_ri0aK2EiFod5GzYCAOr9tyOv3YqpX2TxkpiSBPfc3DhLnTFYabdTMVAQ3SC_bpO62PAV9pPavnU1mJyOn6Pq_F0m5UdsItzgOBVn4nBxILVmc3l1c2QbkSRgfkhERUeCQPQ5Fv7oog", width: 800, height: 533, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102700291370699645027\">Panglao Pearl Premiere White Sand Resort (Formerly Linaw Beach Resort)</a>"] },
            { photoReference: "AWCwydj9xgGvUtiH503JywBlZPNLq_7gx1C5gd70wdNYVEO3rzC0wQ9L13L9mDT9THwAmZ0enItCHLMnCYhluvybc0lnsVNDkVfVlc8DWV5tZdYv7NYFNi3ep9tCbWoW4eHLlfLQTqSyvCGcRFbiO_GIpU_JPx8JIMldwiXAMYpB8sBN1R_0gqj0sWN0qJPRHVWzNUPq52sBSWfYVxAgNErGgkbQwffKl1zNaLbLeJUtarkDPMjO5P_7dmBbgiWSG-RDvDtS6FzrIzSONOBLDgglBvlReLO0TivMPzoOlbWaUqq9H55pILgMlyhbQHLknB9Mi1t4Y2PBXRrYW8sEU-OdHbN0K6yYsig6ZTYN8825Eu14oMIjp51VaNvYK9zShWioMB1zpJ2rSya_lvMJfoR1LJU_yawq9SkfQPUKe6KTuNwr1g", width: 1600, height: 1067, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102700291370699645027\">Panglao Pearl Premiere White Sand Resort (Formerly Linaw Beach Resort)</a>"] },
            { photoReference: "AWCwydh37YNRg725TI5RcGDeffUKYwhLFUuaqvZgbnLc1tSRl6O5eGie4Cf_ouFGfM_C9wsc9CnjH14sIsJf35SwPKCo15icdjV4VbNTaS84g0FBPorBgZPYvh9JEBsTQwU0MFXym-NS7QlSPGrxNbfDeChQivnK2jZ-A2MHspFGRNYxhVYqLGxhJ9_IdWDj2iuFYwYRwY9HiCkBclplns5U0XfZ9cKpg3q_kfA8zX25t8swUtKt3ZyJVIiJ3kIJgYZ3PBBrG6ddkoPl1tvei5m0b5M-eRvwKEHiEDusGzV2kjPrZg2xB__yVpvf_-K7yopkJz-GnZ3W5PelusNoBBhvAldHpToCLCDZnZ2vE4i6CpUQtwge8k8A4k5tbtuXpfP9ir34maZ17LcR5HsoiaITL2-hUaTpEevTdRK1CD-p6MA8gQ", width: 1600, height: 1067, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102700291370699645027\">Panglao Pearl Premiere White Sand Resort (Formerly Linaw Beach Resort)</a>"] }
        ],
        summary: "리나우 비치의 아름다운 해변을 배경으로 식사할 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["해변 리조트 분위기", "환상적인 오션뷰"],
        tips: ["해질녘 시간에 맞춰 방문하는 것을 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해변 리조트 식사", items: [{ name: "대표 메뉴", price: "₱400~1200", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 11:00; 화요일: 오전 6:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2593479953615713091", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%84+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%A6%AC%EB%82%98%EC%9A%B0+%EB%B9%84%EC%B9%98+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "파프리카 레스토랑 보홀": {
        photos: ["/images/bohol/info/restaurants/paprika-restaurant-bohol.jpg"],
        placeId: "ChIJnR6jJLKsqzMRn77wu7P0A7o",
        placePhotos: [
            { photoReference: "AWCwydgA1ISagMIPhB0Y2EOFMU9WwtWQL-IDwJhKcPN3sdYpmrvydVd1YocpoxGSwmXN9pHoBD-6j35xZcLGJsZI4Qk6cnZWCBzDKcAYIJUaXDKnRkQRAViQB4anYH0cKhsu8l2wxueo13ET5ITlPRiLwXbP0uo-gT7eOR_4Odux4CTiXv0CuBktvixr0tsCulLnfN82P33Slv8WSeN4D8SOsRJpCYZSN_9dr5A7-dQcgZLERCm8eUkk7wXgcEqni3zQG9L0sQ7kVIUJk-QUhogrOh6EEzW3jtKvlY0OM3UxXAh0rC_8ufW3D2eAsUnLPJnjUvPGPosVM_yNDrEdkjQUkohOBxHAxLi6S9EkG4qHIihTC3SCnOe_SSUncJ06-ZLImK2LRcs0Lt62_OSnTiJPOhXZbxlc-Ety2RMc_NOaQeo35dBR", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116837372033699601925\">Paprika Restaurant</a>"] },
            { photoReference: "AWCwydg1dicHEWNQQXEcuFxdbvv8k5CS5fDiXo6YDwOqLFog0FXC47aIaLTF5TjDWiVplP-5r1H3vb_hc7bS8PRY2IowRZNSKxDAJhvydmT0aPM5msX3AZbRd7KqRXYhCYms5F3Kys9Ej-8Bh_XfT1Y_mqE7tQdEjVgSsh8CsoE4O2whjv9xWJGlKco0CoXeKxQAxFCbsXkwHFA6I9o3e7hYxYha36WzmYmLFAaeeYwSOyIAJ7rTXZUv-7uFE7oMaY2Ps0UMlXlZBCXth6udKIxKzv61bhJ-J5_j6Cemi-v482JuQKFQGgw7Mqi6waRlNOPhmKyN4xYflAY5LqPh5BoMbgsBV3Eee25F7HqK_vpWmsswtBnbDzvHmxjrBtZplGLMDy80KuadWe_tpfLPOfFv3tsxsWnLgnKeRx9GtanPSAg", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116837372033699601925\">Paprika Restaurant</a>"] },
            { photoReference: "AWCwydgijjSt6aUF-0UZn0hPjij68FSPf8puHQIusxnz12vTSuU42GalKWLdNaxPd1ttgiRBAqRB7q3wBKbu87ehjb-Yl6dw5LR_Grogo5uche-ncxw04nJ9bD8J6rvNsgaTu6Be461dgLCCuC3F4IGuokfYnd6NfjUj5m9ty3M2u0mO8Guaw7RrPpV-4sLVsdNs7oMILm8gr8TvHfdevFws2FdiblPHCIvizIED_pD-6WGnsXaTkWawisPEhJx4gOMIH1BQojVigNTTN9BikJX0TzHPJvI1oSLS2cMozMNjtrDuFttgKt3ANeqicwBO9ePXgsslrir5MitUgyDA1tbAFdIqIXRoVyjaBPqDpbrJTGdteBhR1PG-V1TOBnQetK5piSO_OJWONIxEXo09n0Z0L5uDUP7uqLBiu8x2_qHeMf-CFQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100196525233775374902\">Isabelle Molina</a>"] },
            { photoReference: "AWCwydjo4QE98boY14TWvCvaLuxcM_uUfxI2ULoxBqDBBQZ4hYkYFW81wP3ZCxELEfrz2Zj7GAF8fVBb5frL1b2xbonGRwEgpUPMxoYSDsr_xVF-lcg62UAfeMRWPTPPm7mkPQzur1aZPqzbuBwUbJTFD_n_BkAg9l7kVPLB-vD_m4TjHirdg2iYsC5LbFCy9WE4n_9pI2JJ5_LmneLh3LpicJz9LZ0W0legdu0VKdBLJA5EVRot2f_QqFi0P1pqyx6q7CD5PyRcwY0ob1nZxZjohs9CNsBlzgCKhQBiwoB-KNse7-yHqxjMYrmbH4gpc8UPt5DfNWaTvCBihsbNNRHlyxmLnBJT5MJBOOH2qWzliOX3D8oI1KAc_iNUIl21m285IWpKcbznYPrTb38ThPLhBwDhRdEowD0V7vVZnKpzBVX-c1fn_3gVN7egcSnVR4Hl", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104292493171479297037\">Mark Wilson</a>"] },
            { photoReference: "AWCwydjawusKviQlNIqwUiAtYO33UubHDa5IuaAJpdPcnAc3eqOeAMgTGab8Y6XwkJgW-FGLWe_isPMpfj0UAsf2UX-Pz4VQbB5SWWO4Ogrh3FRQD2DSuJbcLHZTKNjTHyGbsTrNAsFTdBcmT10wbmrVgwjFj31FPXIS03We0wVdv7eDoqy_1We_a-LGTn_EDJFFtRpteADOSlgFlHCZ2MLuYup4_UXu0DbVIVMlLEzP8ndiVx3-406fjyyrgbdLVTDc2rHWODoby1_JVtbNVhgp-em6esAbT_LvnbYtb0Q6f9hZFv81DElprOZLZktkIxxkz7kh0M0VOgDiQtmyTUUazJZiVBB6lntdwOSQwENPM1KsI0Fm2lXJx3gc8mOlbveAP4NNAsnq5nHcna6vIkJ2UbHPCq3Y0ckHAw0WMyJJ6iRAYrrW4d2z-SPxODBiuu86", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118197572690584989404\">Chloé Chassin De Kergommeaux</a>"] }
        ],
        summary: "아름다운 전망을 즐기며 식사할 수 있는 고급 다이닝 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["탁 트인 전망", "고급스러운 분위기"],
        tips: ["전망 좋은 좌석을 위해 미리 예약하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "전망 좋은 고급 다이닝", items: [{ name: "대표 메뉴", price: "₱600~2000", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 9:00; 화요일: 오전 7:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13403825968774168223", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%ED%94%84%EB%A6%AC%EC%B9%B4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "우베코 보홀": {
        photos: ["/images/bohol/info/restaurants/ubeco-bohol.jpg"],
        placeId: "ChIJ54L_quetqzMR_50SXYSDcLg",
        placePhotos: [
            { photoReference: "AWCwydhrIYkBRRiM5UVYf0YIoX5AAhIFRhvY17hxqlbg9EQZyMacP6_9HBODVqHPA5aaX_mBZxKYf9ekoSEusAYwuVqCE5Ky5o80zgeYDuJ9tyvgg31LFLyYMcE4r0bcFSpE_gFVBSnNNrLpn7HTsblZ6VFTeZa3KIPOGuDpMq6culsQLaWwQX1JtcDFr_5n5qbWmx5-QnEChizU0QAdg4Us_nyVMozx6j4A5xF_xSfLaSEka86JFREANQnqGQsHCF3uWKyYl-YZ3QLwNSQxueqXhKz-FLOG99gqBEMjU6CN1ah7mffpbQTvl15Jie_GmM2ljPbV_fmfVNdT7lA8gGhGLS8AsKxVChpZztZ6pXkLsutGsCEjENQPUUTvrFTfUKygv9pa7SKN2OI4Ypt7Hil28d1KwlGgFLGZH9ZoC93wVi5NY-oM", width: 4800, height: 3197, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104172305843393705737\">우베코</a>"] },
            { photoReference: "AWCwydiO3Z_8bEoSdr_QH_UedpxehJBUxVFwsXDnplJPfhskm1bQ3_UEKrFMvZCvGnBFZfcgzqPq5RuyBxzuLOhl57rwoKX_O5D09BqnvBM4oo-J4ImnkhGxW7-akOwL7itPqD9tpQqChSVA1Gj86WrESvuFIqdJXTkPjGuLA-ptCPUMzcos0hpjGkMFIFlhCthRtEOlMy8qge-SaPGiNSuWwXCKFvMxqOWTbvH1MiZwm1qd435KERIdMTg-aBPGgSmAi9JeOWTK29scV-ukyBF6OkJm7fTsocgdxGZwU-oNUBPHkRg7GwrZzbmdVpmMsbTnGtfSxQLWQ2kA2EmjhkRUnoi4N-cCzru0FCo2u8U-MYSw_S72PBjcpyZ4XDGIhxNAkg03zzmlz4fgxKF_hWiquKa3wnLYbsvZIUI9BykE1ZnzEjyx", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104172305843393705737\">우베코</a>"] },
            { photoReference: "AWCwydjaWvf0yImnpDd0AUrq95zULepFgvubSZnlkcVyB3Wuy-N37i2k-BTDQh3WHru0jjD7yiZdvYh95dKfn5O6Qtjb5zYmga7uEpKv-GAxIRXsenFz98wELvMm3Nc1vwFNi2cDZV-gX7yxUE1mE6NIZkbhT1WEOZd3pokwDMy8uxBK_ZHL4R0J9Ya-ZHvUKseCzI92v7thEDhgHqg9GwR_Y52QlnG9TI2tNu6aX7jo4BZS58ai4fDmOLymd4ECvUxwuJlmSoF2wWceIBVwN4iD-KbM2zRTf2689ACrdeSo1GWEB7H4ecDopheg6FVbkMTExPF1_3cbvsdXDOiHUDtoxvhdLZnrl_SjBBTXsvJhuDb0Tt0I_GK4ybJ-apnyxaMj6CIdXRTPs2t3zmLP1wYlFUQ0luJo8Z59PvQ1ck_qUyM1XMYCR_9Ut5agqYEKNw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117277546234901348573\">꼼장어</a>"] },
            { photoReference: "AWCwydjVr9crqj5WH4_kHFlPncmNb6wZFUTqtF_FO6yISB9jlHi1ngqgjGYn7K6ceixOqLUoC0PsH5rjLAzN5rtOwsFr3OO0fZpTomOokdcsTjEUpBULPA-p8PS8JoRpO5SgBOMV6WJ__uYkDPk1pUcVDNvGVtmPuT5tBbwvtj9BDCJarHgKSEJbpc7YZzAtGtyVuV8Pt1rYnd1Q7oShOHgbDKN9l8uF1P2fl7CZleOF6_WH0RwzEjfl6vtTVuQzBrABSvsHSwbptSwbXSUfKB31zPwTYKBBi1aNremX33NMUBiFDIlHUlEM5N3xuqYGA6atY88CB_MphldnJgVGBWiuVLf83e0bsV3jCeYLEXUBGgQstqRJbnEZI4o5zM2v4sHdIIU7I81QIJjymFzNum7FsejEyhECPPxbV840VXvXNmxnxccmTji4mA3zk4qD9g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115647770143431854675\">寒栋栋</a>"] },
            { photoReference: "AWCwydh3pB5xVunFH7NrmAnK0pQ4Lq89mYfbd3UM3_ui5vAQgKWYYKc6TFDI_989JhyIUy2TQSIguTclR1w06UTgIrhN38ibgd0ts7S5sm0CK4yS7mLfXLKF5TjV58vnUZFT9PJZ1trl45OT2T2zzqDjUvVgUQ_vBWVGwWuDQTmEVaxUp8MrClZmvubcBvCMRUXISObgbURufAYmhhNtIXdO5zkWmDN2eY1aT3JTNS_R3AttyPodlge_PC5b4_8CrVcZ3XZY-ujwaPLARQdrJlWlS4dY_hwl9gcbtVcvKBrlNSleyKomuaMYM1www1tglSNL7iYEHlKba3kZZpmuwOX3ryLmkUxTAtj0dDJf1i3gJsFMhEk3e7IX2eHT3IywKZ-A2-kuoHmbWEJxSCdxDjB8pwsOJxD1jVU_TTEsncuNAYh8AxQklarFnHilWXiETsbY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110080225766871777323\">김윤진</a>"] }
        ],
        summary: "맛있는 우베 디저트와 향긋한 커피를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["대표 메뉴 우베 디저트", "훌륭한 커피 맛"],
        tips: ["디저트 메뉴는 인기가 많으니 꼭 주문해 보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "우베 디저트와 커피", items: [{ name: "대표 메뉴", price: "₱200~700", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.ubeco-bohol.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13290267104890756607", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%B2%A0%EC%BD%94+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
