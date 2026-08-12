import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "쿠알라오 레스토랑": {
        photos: ["/images/vientiane/info/restaurants/kualao-restaurant-vientiane.jpg"],
        placeId: "ChIJJads-4doJDERuIGb2Y17ZXw",
        placePhotos: [
            { photoReference: "AWCwydjAs_NM9PTn1vBjjFEjbOEgnwCnGOQMkP_4DWxTk8lc0WrKUNILd8HbRyqb3ZaMdP4TZtYoGScqwhXWhL9q5PpzZgQNjD2wIEauIMc5FFg5rBjyQ6VitCdbzfoiIcfIbdc7_NF8sA4A9LSO_1HF--MSmLyBN5MoIze7Y9vOE7dGEypdcSJtd7cXCjQYqoGXq53I-KCjdZPAsRnf7SiBf8MP4fYRYtn5MKBlkmpt3nwrX1tS8BmdzbieTi7938PWP4bSEWlzSew3HqV3EWhqIUOX2cEdk7L4LmipOdza_QoBujXBVu_1W52Sg3n8kO3i3NkeLIaNFvNL-clbtx7lDcwCTxiLVq7BreQt-9WX80ETKtQ2dRCptA1MX1Goz8SxkiZWxSpSXNHNwzxrXp5Ce0IX8Z8bKnGeYpcXqU1WuJA4e_g", width: 3600, height: 2400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108027137708162216727\">Kualao Restaurant</a>"] },
            { photoReference: "AWCwydjTlnVYgCAm8FYqzrj1WtjUwzBky5ymAhRwxODNpR-IPEevkdkDBnMgsR2DLDwB-ULXlTXlvkI7rXBK9c4cN2IegCgtHzT1WnpCzOr_TJrFP4eabi2VezcAe5RVv4zV6CsbgMg_0sOTQcMg8hm88CVQxCyVU1iA38A-DT7jrN0jxvtWNHky2p3oCWHXD7GVhx0UVTLPTqAE1NEQj8U9sdRygv3i37oi4OhSlv7Y9kCiuVmdm53rSs0RA1zNqyK5-n_2v_dS-Egr6sDU_ac_F9EaDYT9AIKiV-YyMcH8d87cBIuzvPqM8ccBEmfrTCnw5slrYodCF4o0r5xp9yckiP9ucUxBT_n0MMRvRZl2htdMLfT--YwhYp6cWi-UfPwHqjVtcko597-Q9Si6F6VdWUhhqa_OPyjYrXYFgbkX0USmJg", width: 2657, height: 1772, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108027137708162216727\">Kualao Restaurant</a>"] },
            { photoReference: "AWCwydjzAz4CMuJ_K4reaZ69hRvhoHSkUUkOYGCR-S6QlRMdYHDyOuHRKq4YGlWDLx3BKW-GjNNwnFqgHv1vEcoUXLy1q82QFm4TkkArnWHpRI-N9coFuV5honhlWMNS3Zpkb2vYHimdBQ_rMzMlhLgd3lD0D6MjUVSO5iZn13M1TeM1RCY79kGM2IYtxz9IIOJghQtAiC6_eqs063rOHQ1juJpjMpSZM7t4JMAQr4R8dx7sm8hbwtM7zPk7w7py6mzNocanr9LW0kicVSDy4NV8oreRrtIBsG7YPhy0Y2REAR0AlX3SP_YtfpLdmZxs6C6t3YwzufqnzZ560nX3Y9Nw9lz8BXHrwDYl-EnrFNDWKeHV-zVYaoAZ634FFEmi-mE0IxAxBSkFe-HOxWXJvfc7rTmm5nnZKR4x_2ttQbG-NVyIm2qlesFgT5Vlhr8Jnw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116921093753350738119\">Lalita S.</a>"] },
            { photoReference: "AWCwydhFBQSyF-w4j4vbCnNTVx7dyBwg0IdJgct85sHMo-cg1IJtZfpqlzONmObe019Eu9V9Hnq32coGFIaGXYYxwRlX3fWEN6-N5ndynFyYm99bbAQdExKsg-fLASruVqhm61V91KJ5u2apN0Lq_VcsPSjtgSrwR6kP5hL9DrSm34tAyOGRpN2VBSRwK4eVB9_oNQvIs373GN4Ao4hXstq2xusp4y1gDzgKSjgcfZnhtKMz4CFkAYH992EA_78cs5z8Jx7oICtG3xTdWj6db0p9F86pPonBFH_sTHRSd6GgsE-pK-ifExByimHsdLikJappY0Pm5TPXN0yrPQ53AvyuJx-c3ezGus6ebDN-8-gXenbBJrk-ilOLUcMyMUCrUiEvhY40gvJAs0TKp_TlZUzKpXPiZOp_a3DZt1z0jj2kxjMajZCNRxNFsM4N-IZNKwr1", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115452623205656442951\">Jiong (重口味囧)</a>"] },
            { photoReference: "AWCwydho4CmgxYqLvjEcfMsV6RK3KtTKf4p7RiA8zFn5wZJpmf3jPJT6KlGyP4ko0QgIowdUjagtLBCv6Hpdu4_0y_SOfy8bZWnOwc6XJMaJEjUto8ntF-xm-2RpVsEDZlVcfHLgy5KUwjLODLt9x4qdOvLITmLA66bs9kkKbBMOHzjpqimS3AOVPS_vTzo-1OfDQ7h-mAK_i36HngE489bXifLBLzEuUI8QOVym8IqX6a-NZjtxl_PojTTgO-J4JxcbZMw2y6rF2G3kjcmBOtIJW9YggW8qmKiGUlJ1-J6f0sLPRpfnQwOTjWnXHhrHPiAgfLrk61TojFNCblR5bWwRLkVwX58c5A10fHrMvgW7UDpPWQKTPF9BgIRrbjMjP-wKfLNJX4DgpXrGXoV7Q3Io0OWXAAPsr4vPLFJD2HjSu5Yo4dMNpsFavMHOvSAQ1w", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104015983908702612792\">Jaimy De Clerck</a>"] }
        ],
        summary: "라오 전통 코스 요리와 함께 화려한 공연을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["라오 전통 코스 요리", "전통 공연 관람"],
        tips: ["공연 시간을 미리 확인하고 방문하세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "라오 전통 코스와 공연 분위기", items: [{ name: "대표 메뉴", price: "₭150k~400k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 6:00~10:00; 화요일: 오전 11:00 ~ 오후 2:00, 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.kualaorestaurant.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8963706482522292664", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BF%A0%EC%95%8C%EB%9D%BC%EC%98%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "컵자이더": {
        photos: ["/images/vientiane/info/restaurants/khop-chai-deu-vientiane.jpg"],
        placeId: "ChIJ8TUWM4hoJDERB2qT70XTgzw",
        placePhotos: [
            { photoReference: "AWCwydgfNlSquNoqGrdihzh5BqaUyrkAVbGHq551tc4mEmFpJDZ4acRxxP5gg_IVK0h8mn-f1uwkKpWuVVYU98uqFUokqrrgWUIcgBIzwMPshNuBhz2n4bfVXQ266ZwMSyO20nSLAXjmnG_0JaH1TCPjekFCoP9Sb3CxesA_Ft-fWbGLd3zoUWR2r8xf3ZgNaSUMbdDaXlHW1uFCGDvGixVPXKQGXRTtzPI0lVyy99rAHBYeHzS369zCrJC3kp3oDlG8Ubxlh2Q140eZ-Zd1sI0QhKBwERuX3bCHSB3AUfJFSjlGgeAH0d5PuV8yCMZMMbqGURq9NGsBdSIaTo71uyUZtnfIt7K9vEShhqGQWtOavjvSLYO2Rwq6ZwuNusbDgfHzclyBB8IQ0jOq8Pbrh1w7Ei_1OTDM8EJKjGl4615mN7IDIDtI", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114388080571186301396\">Messecore Mok</a>"] },
            { photoReference: "AWCwydjCQjkbz-DLwNFV75QXxgLfByFffAA5i7PT1xvVDO_Kl1lurE3BRF3Tl0NK6YRIhLUlE66IkVRvWDdZjVjOJ4ci-HpMCUug_UbRJPpvKNbnxHyN20IDkgoLy7M21HrnHwaHiMJ7hb_nbsjW8ekECFeb0ciBtO4OtMK3aisxgKEH2G20q8hQsu9otzgf4vwGwjiKkYjVbmgP2fGE9vuwt8LQkPD-_Ad0ztZncjZZMASw4lKZYhCPjg6lVhzRbtNLluG5BiEWAQoywivcr4AH4Akx8LeeBfL1H8d5qfYYsEyhiPmKHJMMLlyRyZ4yFhUbsSB9w5JJ03kRFKvNkR3q0Fjg7BJyLra-EgWRD0hQZ3HTN7yZM5EZqUj5rmdBt0D8YTkRP2XdOTfFHHH-w4x1kVmQbOtbdKRxliPmQUpeQqn5WcOmUDqy2SRH-oCBAsdS", width: 2832, height: 4240, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100703430937084686472\">Khop Chai Deu Restaurant</a>"] },
            { photoReference: "AWCwydikzaRkZlrrnzNo36ivJqpquLxATAMaPZXMNm12djGvN7mjTNy0NEcw2-a2xlFiCAuzVgC7wDMrPy-4Q0zp83gdefPKt5Qqi6fBY_AS47yP7EVX6VCCxIo1CPaH39yXq9M4Bo5XRCF95LaaT9MsUMDNFV9BQpEoKoX6cpCB2k1oeHwZhDn3ljW_vpIXmkxQK4vwGIdvcMPH9XGtV3hlrs7eUL3XzvpceduuT9vH_Z_k7XkbFdi4ukrq90vTFYLx-4wMgaVy781Q8e7xmRrod6hsV-jS2rQ6_oR87o5EuydZ5EP3e1mHfs8jZ9Tit7A8edP4g_NVtUFRrQuhF6c49bDvSR64k8S4b72623k71zPfALmBKADThiupMoNM_EdkmqjBWQW6CiqAMVUP4MDMgY7D_SqbOO8SbvkUXwFjfab2J5GvfP3pMU97PbiaIYSE", width: 950, height: 695, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111472499737931529749\">Kate S.</a>"] },
            { photoReference: "AWCwydjk9ukkEuUwM98LFH9omxXCI54WaE1kXYe8eFScNqH9r38QTReVS0lvIl57WQfLi0S06gXVAhQpaSVSDu9YXE1y7EVJRrnafkNVLTDzNaM4zVdZCECyFhj9Q68UC3BXfu7O4YFQ4CZiZ_Nl8OlA37RjaGXe5l9mFJFQ9zpM0BfazhsjOFLeHpJcKRnH-yFua9UFJNqRdkGpiCG4nTdHAmh3g7SZcujqcyTwgrdVti1bYQGLcctUQyqfeqsJVWQsmR2ufTLruamsPeIcY3rftJhOJGp64b2IvvcVMtS4uGhtn-a-FvPPtTZO2LyQM5hQCqOdNANT125jRwsdbIgMYDbeZ6uT7I6nsb6F4Zbxv26T9tSu3hV0pnFcVVszpxs1l4TUQBkd_e9HQI-CMZJ-E7IzeyFn2uHW3r8TH3qinx19zt7xwW9Pm-dUGNDTclmg", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108092262018022326649\">Tako S</a>"] },
            { photoReference: "AWCwydj3bc2MxRTmrEnhFo-3Mz5j6VLwbvHWl2boV841yOFSJ1kiMsxrG-xu_EsYijOWgnqM1d0hT6bh1nTpJ_g1z306eSI9Icgau-hix_TpDMszzljjiVjttQJzmiNjhAX2XrzihlC8fv2euhEpALAFcCE5HIpIcOhZ4zEJ-yQJpKnMCYeFIl-OiaWPI_NYa1j6s2Ldj9y_3qI533sJQPJ7kNfmkH-cE4gVnNYM2vk3DvoCNDONG2nb8kBsZ1U-fbBEe8HVnTMXKLKl4xECR7JS081Z8z_0kKAgXWOrv9MemvzZVwTM8bPxvQynDdk8Rj2HbkRK1olsvSgQtcgWQpGd05d96w8fUkApp-4EArA-xxF3Bj6gSWAsNNBdpM2DsXAHQyUGca6FgtUw6KZ-4bKYMfSwLk6LcvsRK8xKrtTHT9FoUzxOTmpIQgkkIBCAVg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104554884830443060887\">Jefferson Gates</a>"] }
        ],
        summary: "여행자 거리의 활기찬 분위기 속에서 라오 음식과 맥주를 즐기기 좋습니다.",
        updatedAt: "2026-07-21",
        highlights: ["라오 현지 음식", "시원한 맥주"],
        tips: ["여행자 거리 근처에 있어 접근성이 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "라오 음식과 맥주, 여행자 거리 분위기", items: [{ name: "대표 메뉴", price: "₭80k~250k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:30; 화요일: 오전 10:00 ~ 오후 11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.inthira.com/restaurants.php?rid=3", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4360561161550391815", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BB%B5%EC%9E%90%EC%9D%B4%EB%8D%94+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "PVO 베트남 음식점": {
        photos: ["/images/vientiane/info/restaurants/pvo-vietnamese-food-vientiane.jpg"],
        placeId: "ChIJX2r-eoFoJDERWE2505ENwiE",
        placePhotos: [
            { photoReference: "AWCwydjvC7i-u4HcF0esM0HjUfje6GQcICmF5mOI_XZ3T0CnwrChFJphpNXkwCiTQKkyE2tuK4DpezIZYXkg_iWW1_Yk-sfDWidplbjQUjxC30Qo58IvbPyK9smxvvPQgOvW1veBeocyrGEhuqPzcB-wRTp5daEulOAEvuhNjE7OhxeACHOh0nEjfHkVeCoL6sazwd0TaVOL4VWHa560R-pmtctCD84A7qcj-ISfCHt3MNEGms-J8y38aFeO4LfJOxOsB5ncPmKtrhxIykyRCKh47VrrLmedEvrSaL6wt-gnZjV9ygzJR38twMVPdxFnNx4VSG5d2XZMlcnXMWMyGe6xnAMRIRx85LLTre8fKe_HEbzs1tQQZSK5EO0G_qNwYg7d91KY1DSuGTGRmwD0rIQpyHxW4sbifX4w21MXq-KHFN8LwIu6IbRsoAqnHiElkJ1R", width: 550, height: 367, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110215561550495703266\">PVO Vietnamese Food</a>"] },
            { photoReference: "AWCwydigLVmGJUEISzaltXnPbIdIYR6XDFbHkAd51xyN2UjM47HMdA_DHfSOa12LA_HFyq_KuQrySZH_aOJLt9JHx0gONHuY0ywAJeEkJr3XSCgwjqVAwq60vCVS4sOihgKwOq0_XLb8xx2LSNa17BmLwwZPPGRhazq-90_p22DcSk74gQl8jDmbK2UFQ2PTwNSd3z0vdUlF6ug4Tp7i8JAhzOfkv6Za6PzfzuLZipPZVFO1DDtJCMDtxeoXh1BMEFmMmdhbr86mL1rhYtFf_UjOg_96U5K4HzE0MOVgHK5t9lU3rEI8hJALuYzDHkhWawzAzvYkI_qUMG72HRkvWgJQvuxivkmnBoCkpxXZLadzHU4Hmq15l3-7jrJTqKxNQ4Sj8VfOb7Gja3DLW7Z_W56UfTZYgPoNi-RzdoxCfONoswFwz7ZKPTTd3Th-sMkg6E6S", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100423247872777143602\">Simone Stacey</a>"] },
            { photoReference: "AWCwydgJ5sZds0ma9nq9CIRFCBeltqZpV7BfWFNULFQm29Seo3gk86jJHdTRWNrIJQsvAMm4I4epxLx07FK02QOzdmwo3_-qBNUrBPVxp28YYzxPM-VITOhtj2G6lrKYhVBT9aR7-UcxLFY9XZYvNpxWExghj96xG4qc8vV2NPjF7nZbWVUG-AI4i30HoLv9Hn-CkTP0IJi6ddQwxHSaCixTYTv5rf7_8kd5On2Cz1_bMdUgOiFsGiM_vjDS2QimPe_Xm3R8YAcYLVw41ohfgLo-nhW-lq-3xZjXCbd8je84MpCnaxkKNfEEFSKmxFtCbY78B_ZR1LxP04vX3f6pBqjYvN-9Ki_iz3bU3knXjBPsJosscwLobIgI1ciimv2j7PBXHKF742Cmux2-ylckAtBTanGx81iXSeGmU5QTbyeTbLRnGw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110215561550495703266\">PVO Vietnamese Food</a>"] },
            { photoReference: "AWCwydjV5L9jSHy5HFWHLhHqbz8LdW5rEUTgFNNZ70V1BIEWu8EnRJ8mcYhUnz4JihEoDzI2bjMFAY_sUS-qDs9r2XXkiI0fU8AVkjqC6zxH0WVNb3ELMF5VaJRIQpUhJHoguE-mdFm8ujF-24Yu6EKnWetl-vq_Y9c2Ia94JZ49VNOTepgkgRWCLDNvLYLVxJwh4_PaFB8sSNu97_zBXo6RQ1uC6PPMm04uCUJJLuxLZgSYEboIyNpLKN0IXu0mi0RXoC4-qD_KVvzJGvBvQ3s-9u_IrD8SllOiN8OJnctFpl1Aj4w6tIaSLrOvvbfJ5x_IpDxkXhTYDDSzC49bEsL1VxgKw4pB0TtTFl-ogTjIU7HFSQhJn15bjmAXTx4uBl2iXvGJgGX10agIHRPPfVltInt8-t4z-lSIPlY9je6RlWKUkIRsmkdTqwWMcvqzCIs1", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112997521021072226479\">Attapon Thaphaengphan</a>"] },
            { photoReference: "AWCwydhH7U448admUITJRCVBSXdHXt_mWaeBDmkTPbCzVhOpYFKnOWNq3X0rrKPpFnhPqAEDsGhVk6Ehd_wgOi1kWKv7JdVKUY920l4Z92Rypu8ewS4QDEPX3z43W33DZbyYzpXEwQy5b-jgpyOsv22Cu6MV-bKLIqTqGvceHpPqrDbBmIlvRQieFQVFWbLqpJZh_FdATHlfimuynRUoEEExIq_mpundUBRZHQ13p8HYtJweW5OgFqVWUiSAT56oM-Q7BRPeMkvX68i-AQnVfEOBedxdi-ude_PG9Ij4apAYcch1t_6vYkMZA9FBLggvucl091wKiz5_f74Y-M95FhBw8J4b6ojHc2h_Bqh3dUvDQyeWzRTvqCrPBNtgcXhc9v0miYfUp497E0sJY4gWdLM6jKFrZmIDucr-F-6NUvbj3iSoS8pIO8I0dXOQUSqY0zD8", width: 4800, height: 3599, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111560710390698517285\">MC조은우</a>"] }
        ],
        summary: "반미와 쌀국수가 맛있는 비엔티안의 베트남 음식 전문점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["바삭한 반미 샌드위치", "깊은 맛의 쌀국수"],
        tips: ["현지 분위기를 느끼며 식사하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "반미·쌀국수", items: [{ name: "대표 메뉴", price: "₭40k~150k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 3:00; 화요일: 오전 6:00 ~ 오후 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/PVOrestaurant", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2432521668707044696", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=PVO+%EB%B2%A0%ED%8A%B8%EB%82%A8+%EC%9D%8C%EC%8B%9D%EC%A0%90+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "노이스 프루트 헤븐": {
        photos: ["/images/vientiane/info/restaurants/noy-s-fruit-heaven-vientiane.jpg"],
        placeId: "ChIJpwS2E2JoJDERlXF12wJ4ZTg",
        placePhotos: [
            { photoReference: "AWCwydg6Cmm10caQyBnsTLUKbBtgDagIvfJRa0Let_FxEyWtj0NMDKhqMq3w3RsR7K0vvmK3FD2G-gNZoby2wPHu7Jz3yfi_0F7fyAh6k15nFCrsBN8nfAXrj4HiYWvAmM2xJLdnwrgsLQ7BVE3XacV5nkfXnLvt1h-PxOO8e3CDi4LFThTJ4qbj5cTcHIhBMKo-WorJR8lUiWxOU9_LFU__rbHC0QP_T3g2KCR2au6rIzK0i-lD_AJFj8ur5jFmSPP670qQ0TiiKi2Tu2-naKgzsRmcZ-jQO6ssoTU3TpxcJRKIcQFq3Q50Znjo6BAe9cYH_G6S25361NI8N2cjDElq-PBWVHb85ADApWyructg2HPhjKe8uZDsfIcaFmEnmQwl1taq9JsqRElu-q8EboXV68vCfwD4LZZ_Ughrd_CMr3NL2gy7Prvn9cvsVSLT6x61", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107831288631086414854\">Vilasith Phonepadith</a>"] },
            { photoReference: "AWCwydi4F3TdcTrLyGRJ3aY3spOM1LXrrrm36IPkLebx5CXLV38s6xZZYGxmTEKhkcT9R5isejiVUX-PG1fzlklMnytyCLo6sN2jxbOK9GBtUCiJhXBGf6wBcesPshG12S9TbuhWFGJBZA8_bwV9zan7mShs6KhXFmHA9X6xUgHUlh5-1FHf9D1yEGK54-h_l1YVKCD1IMocH9zicqb7Hv7TfZ6HfPgXxvAS2YQdnfegc_PGKdZQRirkrnHJRZmhdmHNHn7AjWw95o6e0mh9RF1IxhlhbJMQAfCFaqZACrQXJB1T2grH54m4K123-gzs6il0MX_fADyqfqT48xRxGamnlE7B3HXJkJVTVD-YKcZjvmLmhuxisN3gF5chbmp7lut99qHuzPmbXtReoKTbriVzr2T6WS-4PRZqHkCi3VXI2fM1l3meZ33_dvoXEHhvCA", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100169311348345761867\">Noy&#39;s Fruit Heaven - Juices and Shakes</a>"] },
            { photoReference: "AWCwydiuIXPdlSie2TBB-ohE1W_G1BYP3XtGDB-n45d-Yi7VnpDbbxBZJMzZJR5lIgQG2xcqxbd2jn1NB4HiZk_B347AC__MvPnvMNNUUcvQk_IpxMWXSi70GA7CONGOyrXXF2IZtd8hVTb8O4hCCDERM0FzEkMz-3RblniQikj2GlJdEY4dCCsxod8di4i_FJCyAv0pB7xCsPJB-HVzf56rr__uqcHYt6isep1OHQY_GT8ndmF8QE0O8KWwCMrzieIlORrT6pnEjXohH6oIY6iFEDI8WawTL0xvO29g9fAuIGET9Sxn0vQvs89zJRdVtr5o6cdqgTPr4_EcKAoJXnYjvtCVfUqu7g78-F_VehB0UNDX8NGaqYD8pYnvI5PHp1bLlBRd8vlvt2qXiuHoUeOyLBaG4p4yeCshqJDgMWII3p4goMX0RYxGuTFAhzHMZTYm", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102163772188936212484\">Thank Say</a>"] },
            { photoReference: "AWCwydjrXflqm_0yHn89qiHcJAPemHY5xqWWnNta9sIjklkoPJBUCfz0a7rDQvyeRnS3cPYqCTjkOQhk9mnvaWNTfC3x-his4lj4ptOus7BlkZDYnSx4do0AfHi7G6-GASgDT9TB2m9wu3g2vvXuOfEwG-s_Vwpj5MwB4tf-KhpERdYHjxcBLDzR0QMe-f1CgV_IQhNw6Fn6WnhPFGQfErgckD_y3uu1g5CQtqUbMiPccx8yjbEEBPzwgyL-noaSzHa7w1m-lpr4Xd2hiFOItvia9wc6621uQ0b0cTDXPHJ5EldurOdJK64sCl8sw9rfGml9tdMSY-sUvL5grSrThwKrVkpEdFyuYqCU4qnSS0zKCF0AsnzNZ3NBAyxqFCVKg2hCUsUz457PaTh8KKKM67nfJZmetd8iiWUY55A1Kfu6UOpwqZUfZJsYuVbGGyp4KB_X", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103038793271643687133\">Parnn Twuns</a>"] },
            { photoReference: "AWCwydhv4wIf2Dmhilmgk2LqMzE589Cu1ZE_p0G8-u5kfq_FN-yRrvtcPxPD-_YVXOBCHSmwAtf32yUqYM8bfCV-Ku1Rvyq__Yw0Mannyo0wLrSVMt8W_hUqJoO5xIsmEIU380s_Nui2WQ7Cpzk0_B586SVYxUlG09y6jrK6agAx9TFZmrTrcxTRRh_qowmPYXgbImNSyjH26h4-YkZR6mkGKfMifapVgS3DX8o2xJ6n4AOLtTlgOnoR_n6Lj17SymO0JAISgGMEcnfGVoKPrbI8KZPXlheEeBrTFdaFUSQMIzaYpT_I5xE-7jtD37eZqviyCOgth-KYQFUvWhzoidY4wZ7uoo6VCrqFcRG6HodmHwhDA_kP7fWYFH3KEQUQPrD2xyLY06r7Y_RL_RbWi-mPWYiY6E-psoL0-XThsmwVRmulTjToJHmX6Nf38hU7eW_S", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110031600776329839354\">Alice</a>"] }
        ],
        summary: "신선한 스무디와 과일 브런치를 즐길 수 있는 건강한 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 생과일 스무디", "상큼한 과일 브런치 메뉴"],
        tips: ["아침이나 점심 식사 대용으로 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스무디와 과일 브런치", items: [{ name: "대표 메뉴", price: "₭40k~120k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 9:30; 화요일: 오전 9:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://noysfruitheaven.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4063786192438915477", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%B8%EC%9D%B4%EC%8A%A4+%ED%94%84%EB%A3%A8%ED%8A%B8+%ED%97%A4%EB%B8%90+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "조마 베이커리 카페": {
        photos: ["/images/vientiane/info/restaurants/joma-bakery-cafe-vientiane.jpg"],
        placeId: "ChIJ1RT9yoloJDER_X6-LxvI0cg",
        placePhotos: [
            { photoReference: "AWCwydjDWV8FoTEWifH86iq7iy45IlU0NGpKpGmDPL9WF3RbN-T0WSs18XnRJ9WxZMhJY3RqVpR64e-Njg5A8dHdkChPfp96BVQdiMddpfNzjXWCs6nwwAFPW5s0iOeJ4yYFDOGmv4Kc3vlqlwqmKmWqEwKZnQHszEqI0PG_X0rAKBza9vDhgLdTovgF0G2KRFXvGOJDhySdMzq2pK6yRQ2cLSP1paDhg3GajMJErub5G1-VFZ5w8cF7wlE7xDAX6eU_mVCzSpU7i4El7ngY5Xrn44kn3nR1nJYrc3vuxy5sMhQn3fZ8AuSGSHK1T4K6pgAr-zsnSJW8INFXW_CXUCld9_tKwy-oa1HjfKWdJgO9I6fQsEP9rVKzkhlwbpLoaxbe4O38oz23E-um72cPLJlL44YzgJSMqKPsXRJWcP71c0yLDw", width: 800, height: 534, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116477211920398951812\">Joma Bakery Café Nam Phou Joma Bakery &amp; Cafe ໂຈມາ ເບເກີຣີ ແລະ ຄາເຟ່</a>"] },
            { photoReference: "AWCwydhBa-Op_yCL276elduyqQsZ4PFpwhA_sK5Zdel2W2Dc7Ecz_cTCmWTbEFophTMXZezUrhX9S2btvnjTvw25M-LuEAuko_4fMpOwO5I5llEIMQIhXjw1JSp5kwrgJ3Y-mZHddb_vtBkMulsjk3PcUQNVEqYj7rToXa0cMwIH8R51UdZ7muSr8_3EvOTBgnA0KefBlTtznjXoPKTWeDF7J74aNM483mCDyEU6Rv-HlvwqQpOzshgWyyCZ45K9VPFNNkOqGrqAkdHmQ4HnPm5T9lb53Z_-lxWNMYjJOdLM0CDWonqprDrqmxUugYQei0factgYdGw8Kx4WEg8oPCCNrv74xW3HyFaVAqbh2nlyTkMKaGe131Oa8KT--wrojc1Mi5VezOB47Kv3W4wfqhzRl1tQYrLOl8BFZIZ5QRBJVoTNesB9U45ie8KqxtK-kxuG", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106776035872363795548\">Ann Sujitra</a>"] },
            { photoReference: "AWCwydhPwkUkhjsjXcbfL7APPe8Iu-khwiCi8LU1e9ZQbwXpheVMBuYtM8P04rDwnBqKqVOuGsv2P_yE56garOL8SjlkPpg67gj8bCNqco-KGrRwY694qytR7nm9iTGeFCEnCnp2bUgVqCLQlHIeR7DlXbW4uoULP2E3mSwdNK0yI4fZoKrQVurAxtktlLlkrdLceKKfyZesmavaCDZSRKMbO_cxHXGKvHlV8SGu9umvLnsqZX6AXy54Dq-6c2EdZokFaL7Zklgf8zkaFCo-4sqUUVMLpLdu0JUTVFbO0-LCAEoW9bbnBez7gOa-nJWvsdbl3upq6SqG6BHADP8NvZTnH1KVMk7HBXMU1_GfgDv2Ew8Ei6AtUEWq8h6pS-Sx8qeMIRNdXFlDoW1Xv0EKdJ3Z9kQ5hY4lWDtVyBvS6-ejRRxHOKvwPmAcK6iCgncVyQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113585418205651203939\">Aum AUMPIKA</a>"] },
            { photoReference: "AWCwydjQEDORM9d_nNz2-5D1qpkCp5rvPPO7jOTLwWHdqurqxrC4MIDH_EOc_S344JEN_5Z5dNZKcVFxQzcgWnHqqdpJ7xTD67J2uMzuYOX8UADjssT6yD5kcLaSiLIm2d0n2NaOao8HV4Bb9UgdaRU_ZU3wPGSERnt1S7_mnhYImRHTiz0RP_dgi_uFxdzKNYAeTVKNB55rapMk6div0f3PkxmAoRe3gWPdczTay1Wv0e38i72V0N8NkO7R8x1XAkBTJrY9UVodCfmnvkWthc-lmP_OBlGTXnhZW1D6EwjlwQRJETnaYgajIZ69ekwbijfzgscdjrbIEdMaj6Vt5haHX11ssYMtTe8hn5wfGXNAW6vAXg_YN6wSxvWqSiKvP7fMDebz5d8E1D5EGl0LTYM24BfITV8EQfdkpQ9lYDzNMWp-k4yLNJs-_e5OnlndHyo0", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101486372289868906898\">swathi bhat</a>"] },
            { photoReference: "AWCwydg1WM1CDu74MCuaM1AifpZRugEp_UQxR089cdWMD_feOVC7oXXoQ4CcWRcNdjbL22NygPYZNntg1fVbm22_eL-VJHQRF-yGrZ_y8lRbpFbYEUsW9Fa7HIkkTDk-mmADRQLy1Nd1KB5W7M8UgWkQI3AVDpGIhLfEGQlDvRiFCgRTEe2IOE3_m_kyjht9LenhF0mUuLw0efTo58kHdOXKSVbgAdwI4g69kNDuZ1qnxI5DVOGOQRWbilZ_c8p78kRRp33wi-AgNE72xB5q2j1LW28iNbY3M2AY_eu-FNrm8KBWFllYQrzHvNNbqDizXNZwAyZ4J4zp-Q4hkL4zJtqlhFpsQQjJ6OlGkjsDxolsRsUB5Kc63aw9omxSCM7UDdHH7N_84Dow2fS0-a0QA6dU5Y87NBO4rVMz8fTUftTHudYM0skHs50UuuWCtHiHVcnH", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103534570764272189382\">UEM</a>"] }
        ],
        summary: "신선한 베이커리와 커피, 샌드위치를 즐길 수 있는 비엔티안의 인기 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 베이커리와 샌드위치", "맛있는 커피 메뉴"],
        tips: ["여유로운 브런치를 위해 오전 방문을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피·샌드위치·베이커리", items: [{ name: "대표 메뉴", price: "₭50k~180k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 9:00; 화요일: 오전 7:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14470567096808799997", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A1%B0%EB%A7%88+%EB%B2%A0%EC%9D%B4%EC%BB%A4%EB%A6%AC+%EC%B9%B4%ED%8E%98+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "르 바네통": {
        photos: ["/images/vientiane/info/restaurants/le-banneton-vientiane.jpg"],
        placeId: "ChIJk9MF64loJDERbBE3uCqnAyc",
        placePhotos: [
            { photoReference: "AWCwydirrT2BwJc-Z4qoI1lcwglsY1euTdm-UImsyoW3079d_un6w9G1SfUSRzcR188s0hzQRWz-cagE0tN3XiIFNlhu5OHcS9CNL6E9j-yi9uvprghb_3dijsTKh6A_gvU2IYXCgAZIVefFoY3jiwD-GtjXMfFUkVHdWMdL3sRjDMB7cPswfy1y7PRxbe8kwC0lpKd4cH0EJEze0QOrHNlLqPVc6WsiJdVfkCpwNpMujlxXquwi_5p-b0le8YHJ4Sked7-vi1upvj6LMOpokjLlW2NFNkpcWw_IqMpepjAHvSc_ZP53i8xShp-ftb3u9zETd6sc9xak6s0dvXIWuTAb81o83hPnUjJkeO3Ybcw3OuXHHzdAEG_0XYiuWSkTVhpCAu-a5mHmYSMHYcminyJgqfe-2VIz3UDmgn7OTJRXT_Jqam-4f2AxM37vtqvTfqAi", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109259701519908692208\">Shigetsugu Komine</a>"] },
            { photoReference: "AWCwydgPuOXkDmohL0vYYhnahG31qYaHD-24TpnqwLcCKzHEs7HoTd1H-uNdL0gy6pS47yKgX4HxONpUZ8CudC95vnh24N5Prk0gvA1sxlmujjiUKAaGFNnz5DWn3ibSlmmp2ECWGu1hNehWTknUnNbfm4DTRLzuJLg44Uwak89C2aK-DpuroeqvxWhm3YS1zn5tK8Djm_VWUyRVeFlcVRKWDHtQkkTMbOdrG6E4vz7e4Xvq55xUAmQO9G6_qxWDnNy7-JPCPTSvlSFDiFdWfV1RZrwSretDAcEiqfC14O0A2p_LwGXhRV4hEJo3sNlpsE2jnQX8mVbC6xM2qOIWuoDcAxbpezQG1gWGahvs0QYQjkEKh5t5QRYAlCaDGa-ArL6Ka45fHkPvH5m1hFLHdMuQjCXTxhpzH8vwpKb0GoQQ2hQrCw", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115229281258676285752\">Dew White</a>"] },
            { photoReference: "AWCwydjrZBYn8Mku4ie9iv2i2YrMMMVFVBdRXYJKselSBcy1tJKh82hxaE3hb6Hsis6yDQWLMLn3y7Omr99PogdxZernXFyxlP9CNERq_25fR41XHsJptqDaH8rxiTC-yUZqyLrVOe1IC3N1dBn48_en8oJy4RhlhuvFF5TrMuMaPiyTRo89b6yPCb06rpnWAhTLdvp_UKudArAGaUKnw2n0uU_LnzRQPBgpUqRT8OPOl9-RsJLETlcedczhD1ZSd8sa0JSDuKaGz1QPCZtPYB-DFKNwb5pDALJzEIwyKDBsRNGpJi1OLMJdV9ezVz6om1hgx8MpBaNbE1YNkyOetmjAZqIbj07G9fZ9D1GpBuH6S3E6ZOiiRwkDTpdFEEGOyL0pszQVd4TgGdchbGwfdjwtTMFgr9KU2KMZaSvL41KsBBTwSD0YMFOl4ZZ5tIa_7w", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112930063529424297030\">Jodie Foster</a>"] },
            { photoReference: "AWCwydg4gGfbMlrQmbO94WBR-hh-JA8rmDtlyEkGfDwOs0lRdQy-QC3vcWPHXdhY1TCEQy8ycjPv0Rt7dF0LGyTdYWw0AV-GyuJxtLlBhwGC3oz_Getgkpv2ZV0xgQDJbPhghXOOzlUUq9__1sjIBk0205Nns3MUU9TMjUwxhvlTQQdXOff0CYCQAs55DW1HMGKftrtH8p_gaOM6hrpTevTLGUQcRmStrzWBMsE15JtCk5luozADywNX7VJeAju5vpl_yPx9yOMVv18EXTW4tHJ3dS0joeI1yPywUNMh4TPtvF8OGwN23Zgjntxyo-VSFn--y2ONuLabrJMewOzF7ADKmKqXeluJQSa8St1SXq_3Y5OMbIuIS5aGMXafh9QPRvm6hKkj6GD6ZsyoSZ2MCnNHZ681bcfH1kDlOyc5KmCj1zpI-RY", width: 1024, height: 1024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111075918248706142770\">EASY POST LAOS</a>"] },
            { photoReference: "AWCwydj7JaMBSokagIuXPb1Ka0LUBbRFOf7O1muS1s53zDgVh-QoIf-IjlJg2EPGl6r9JjcivKQYaKgpcoJFTVCB1wqLpHNsLpkcurTAro7uSKkMiKTR-8WPEeKmEovsdZp790nOSFxV6JG_fydsj5gS7Kz6K9wA6OBzPGzrloYunoOPpQYxiVCKStPM7mFxWwEsL5Cu3dHMUXSciSvF8QTqzYlNb84FaDKU7zdlM1bi3ZH48AH6cU53fUFFRqwXFbebmkMYoTceXr181TT5PYo7VV6PsmKGNQ2pMiatcSNio2BJfPzcrPCz_oBRdty2WGLnOWetqLk2pj4IR39yWdScrF2IRhLa7n3LkpmfKg0ipKMIo4unsVWQXiv2TyX4b5LTbgHsPT8b1JLCVVqpL9fYCEKKyghR63g7nWuMTDy2MGLuEkJm", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114897714709021836231\">Jasada Vataniyobol</a>"] }
        ],
        summary: "크루아상과 브런치 메뉴가 유명한 정통 스타일의 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["바삭하고 맛있는 크루아상", "다양한 브런치 메뉴"],
        tips: ["인기 있는 메뉴는 조기에 품절될 수 있으니 서두르세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "크루아상과 브런치", items: [{ name: "대표 메뉴", price: "₭60k~200k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 6:30; 화요일: 오전 7:00 ~ 오후 6:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2811274394330403180", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A5%B4+%EB%B0%94%EB%84%A4%ED%86%B5+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "라 시그니처 레스토랑": {
        photos: ["/images/vientiane/info/restaurants/la-signature-restaurant-vientiane.jpg"],
        placeId: "ChIJh_XFfABpJDERGx4xqLIbBt8",
        placePhotos: [

        ],
        summary: "비엔티안에서 즐길 수 있는 고급스러운 프렌치 다이닝 전문점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["고급스러운 프렌치 코스 요리", "홈메이드 스타일의 정성스러운 음식"],
        tips: ["특별한 기념일에 방문하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "고급 프렌치 다이닝", items: [{ name: "대표 메뉴", price: "₭250k~700k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 6:00; 화요일: 오전 11:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8134523066351823511", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC+%EC%8B%9C%EA%B7%B8%EB%8B%88%EC%B2%98+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "라드레스 드 티네": {
        photos: ["/images/vientiane/info/restaurants/l-adresse-de-tinay-vientiane.jpg"],
        placeId: "ChIJQRbqEYpoJDERb2UX3_5QNno",
        placePhotos: [
            { photoReference: "AWCwydgFa7cU1DhbNkV-akw0ZZ5wtDPipT02c9njRN7D7fgkK-9I7mgpGio-iF2Nh20SHhaZsTzgJbjFDwSVAtkOeHbGwT_1fK9Cu9vvUpav-X41E6loMCagQ-A0oNuizQqA3nO5PZk9vwtwnDfAOnqR1aLc5j8_276AFZ-_BBf-E6t3FIOLeK69tpPpvgQH9uiqHhSE2usY8kE3CMwCamClGgOhZC6b4pbOqzhs2HC8NiZ7gZj_uR55mopRTosMKVm5uwbDqSHqsjUN3ottScPm7stIwYd7Y9IPclWY6ZzWtY1FHqOzANVZejrkWYv2AOUhVZa_wYdzGfgJD4ZYIOG0CTxupEw1TsTn9ITFhtlZecDdtUHMH8gSvr8rilFwWeKVCYpk7e_BQjs03iZvVhTwPgX2ZjRrBvaU-P4_HvFkfuPekg", width: 1612, height: 1078, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101415116888934021869\">L&#39;Adresse de Tinay</a>"] },
            { photoReference: "AWCwydisPlFsHxXEFmN7mJVZs3vceicWm6pGRZoeYTJIqt211-PvaNap-7nr2abhJtFmNgVewggjWkogykMIJ5JzTwrW5Qew663Tumkn-LznekBxzgc4wDaSNXqEdjXFrD5Gc0hyqoxoiiylFbrxnd2ub33teH3rmgNzuj72yK_p0iS3314IO7D_N1ZSAFv1lzxpSGRX__Tb4ydx30FzPX5PR-KPgBNG18sXgLpnBjYo8Lp14Bax4WB_yAIoqmBVmFMlwzaqy003PSG1NZL-cWCBpHl13L3Eb-hfLXzhWm5qtDE6D9NvygMv6B98h0LO8gW7QBgQioteQ_17TsNsHIdwNGxWBOrwCyrBP4uTryVtc5srrags6sfIoucJoA11hzBeufKnvd9FxDnS_T77Pm0GK5-hhRZxr3UizkIjRMJ2ttJr3wmM", width: 3793, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109326464010102507746\">L&#39;Adresse - Cuisine by Tinay &amp; Da ລາແດຣຊ ຕີໃນ</a>"] },
            { photoReference: "AWCwydjLIODXc1tKyNxh7xWIheIMMdnUAVl3LDwpxsuoCvkv1afuvfkHL5VZ4yUuXFHawtEraBPuH-ILVkk_tQ3Bi2P1d7I8XAqzFt8FD2nOcmLKRXXkDROJ5tiid17hzyHnJuVg-iztdT_nfbuoR5g0Nub0Vy7DDk5TZhKnG7D3eILgq7uC8ZfeW3AXLYnRpw-Yd-BEUcCGzjpSdWFBr_I_iVySPk7KA_Fx0XRP407Gen66tHpE1HnffTxk6LXiabxfu0a7jAYHd4uQEKhl1cfILYmj6OCVlGP_gTarYWZOvtkHqUXwxRIm4zRpz67CkCEYkYoQjp7MUCBKWGA1GD24wENUov7PSekpb_EEZ1shRathKdYDHgMi8Ok_b9m6f-88W9ChJcuBszdeovalyCIyv65vyOIb6bEhtJQeceKGBdRPUy0", width: 2048, height: 1173, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101324625870746556273\">L&#39;Adresse - Cuisine by Tinay</a>"] },
            { photoReference: "AWCwydjRmG_qaD0zc1x-oDCuRGA3pxa2TpUu_o9gGUHra-8imP1fviXFlBHitp5q082pZehSCkSVLsvKWjwR6SRG5LnSxbdnoehtLHa89IyrNWJ_pJvlZjc-k6CPZa7wXThMUf3ho_EB_zz_222twI5_YwcBeOp-Nq-stwnUC82Mbxb7hrG93GTgPpNi7ZbzE7p1vrN-9wA0aFzhx6b_SMVJG1uBIFFfjV4DP7SmxBZUZENGfGDGrgWxsNpAG7R9X2KaEXimMry3xcxiA89EyqwXcJi7N6IwZ-0V0IkU23Sqd2UeGm6i4v_U63lCIPk3AtaffZC72OQm9AZ6Kew90eXegN4WEzmwADY8CV4tApr1EXwhtOAOTuiodaTA07OvQVTqiBGpin6iowMpQ__EXR58WI76jsyYyNoaM85k7lk0bX4", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100882821335310262360\">Laureen Egidio</a>"] },
            { photoReference: "AWCwydhBxYqLG8wtyQPWLMbYY7-33I8GJBB32En3pBvd04nmfj2eVGtQWmLuzEJCleo4uu2pmWlGZCWdkRBuYhRjKpYKcVi_ev_1dCjjvC7vcLx7RfMElWu5uFY6erAzk-8NnfTWg1y1hKVGZ--JPZ86jjUhLjkCfW6Lua0rM9QSEqhqqRRtfiqq1uxvm9Jgay4coEKiQQ_e0VM7M1bmAuYcasG1MMwDBaZb0UiwSGVutxr9lcJwPgngmy4SA1rwhkcVgXv9bR8dFFtoMbDTwuyQ4AYgpaRHbzzo79P-CuwbAQPbVd7rfvrxr14ioW4TynXxUcl3kzugFOdwXJqlY3tb58YyI6j4l01NvNSY8Hvhmrdpsek_WL2UVBgdse2Rvmo7i6m_EmlafHjM9Cd0LjsfQPVXLXpXkrlfB6ENkj-1Ym52Tf5w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108236579790415500870\">Daiki FUJISE</a>"] }
        ],
        summary: "프렌치 홈스타일 메뉴를 제공하는 아늑한 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["편안한 분위기의 프렌치 홈스타일 식사", "현지 느낌이 물씬 나는 위치"],
        tips: ["여유로운 점심 식사를 즐기기에 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "프렌치 홈스타일 메뉴", items: [{ name: "대표 메뉴", price: "₭150k~400k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8806315176964351343", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%93%9C%EB%A0%88%EC%8A%A4+%EB%93%9C+%ED%8B%B0%EB%84%A4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "타이슨 키친": {
        photos: ["/images/vientiane/info/restaurants/tyson-kitchen-vientiane.jpg"],
        placeId: "ChIJQZiQJopoJDER7zezc7hUjug",
        placePhotos: [
            { photoReference: "AWCwydhuPum0JlVrdwjhxxijEcTC_kG-cdHbnbGgWODJyoR1uRUF7-pi0RID2MnIWPvAEH8F7EaYKyo7vr2G7ju93EspTsayiaUfR6LGVwHGUsre71wL3gH_4h-XDS-TOaxyXDiiQoqJlCZ9N_VH5EYGyD3ujNNlX47ujUnBKua0mrty11IhCBYr8mvhslrScZzlBHeF-m09hZXmNKQhppUf5ssxrk9hyIJIHZiqD7OMRNjb4lFa2GHf0fdk8l26ntpoHDGICbmJ-E5mFQnzXJXBlZTZtTCxczhNsmk7f4i_HIdqvogifG3JJJvJdHfFaULt9JwxwKiMKm46Yefn8IYLIibGiPz-ooxRgGWNrrRgP7qdXK-Skx72Zy8KSaJOWTMTZZx4kIZaJDcQdX8mCWAYT5O0qlT8-fZYfPnSBkmt6MsdVw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100066946594884199961\">THEONE krub</a>"] },
            { photoReference: "AWCwydi-tcpwGRGqsp2IV-L3UuWGu3IaW1-2CWvWTpUHpIZwIInFSV5rl1PM_5J1ouFfufCGtE73S8jneIHSpn-92AfxbLDx3xh7aEzSJYGU27L46r8E2P8guLabg1tBl2vKbm9kyK7_CXhE-E0wSwXGaTRD5_-BqT2NgEf0wNIi9sRHRkWq4S9Foyn-ldmXI_VKyhI6idcvWvzxWysyG8w5JGXZo7x9FHqvuRmIL3ypIAIobSygDrjS61gzkNNiobWNdLqpJe9ZguTj03LXn0LFNuyBr_mVm6m2qPQaz109krvPf4RlVrPcV8VIoelifeSj_cW1N0E3CAEkzstaw5chOolTZvNkiLYMoA8D6Z4YvQm-EwLBxDxFWnkmoYKcvmvM5Go1dv6-LAgN3EbIPyF7bcCkj9gXKOKEBeH3ScG64gtEY2s", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115509364873408405736\">Ikuko</a>"] },
            { photoReference: "AWCwydjuWmn6ozUmKn-eAux8lfp2Wx3tv9kWgeYMLXG8pRxgV1ajuQURGUsdxctnAzuhnVYHi2Tw1z8j-hf1FvpOVJV1fudHk0FvHxWPKEfv6YKy5gK8i_yfvk2tQwzkxnXUVml6yajW20WX8H13100JCiBTb43Vfc2vVvF51s8CmYehOKCF2KHkpbQwlZ3334uRn57Db6dPWJlkzd77Ns3B6FhMzV5iSCr6m7JOfpAFLpkPyTNtnfrJuV_PYWOKBmU5dksl0Unprc_riSiA52420EcblQ_5Y60dxEUzK7yGCf3-dla629KNs0361arRidnoXHkyPoef-1I3YCro3PastYMZWlBwb5FE-mswz5DCCJFItmorN_6gc_67PmVz75_0kflzo3PYY6ZdbXZTvNxpC00KSBgDcqnxgpYMDzVh4E0lxJ40cR0r6shXSskOUg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117030473858818809470\">Thomas McCarthy</a>"] },
            { photoReference: "AWCwydgKF9772WTuUh6dCglU-huV8AJyUc-hYTlcNuKW5sZd_jjXCU8hrirWcN_Jd2b71g-8e2YBuahHYyeoE2bQzt92lY5qzsYNqWgLQpm1BGyYu276tbc0m1W2GGmqqoatswp7zUEH469VfffUQTosY_zRdu4pYyDFiI2A8OyP8NtGc10S2z02N6QaPpbmzrhaf93R1SMqlUUDqEpbYJcxcq3NXygJmwg2epcY0K89vbKn7Z5SvB71uClr9EaalBMCzZuLgobJjYnmP9e27NdaYr_CwU_JhwyCFdXmuWF2CwJsFidJIPqHlx8y_bY6WluxNoW_RgJw5SxVagkxOF1xi--EEWKB3PstgQVS2L7oVpK4eUPAaj2e6QP1LXbPWu2BAlB6glJISApQT5-9y2eY7HnWGe2Gm3B8-ZoW77JGzPlkSSBg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112243139548611363210\">Sandro Nick</a>"] },
            { photoReference: "AWCwydjADQm1ERydwGAW1KRypf1WJiJrGt3LSpKXw9DDetOo2J24uPNT5m-ycm-SMV5_uDqmXqiRQFKIcFw0qVxdEm4km7r-4YJjHmouqXQXBWHDWo18dxUDWpiEcHrpUBYDDxG_jtqduoKtqombcnkR9AWd89FDFmpgkIBVeS_zcQjpd8DPA9lckiId6OWrZxw48W6pyj-MwxHOkF8vRejt4Fks15wuOQvItnC8iVI2dYbUjrKSMtljd2-IHum1cnunY2D8UxAnyegSHadY1afUTkMfMSwcvA7J0qE25GPLLvgcKqKIKWs6iscT1PjLAm0hvkV2zAl6866BAi00f7XAIzCbNOjIpzoQgcSYYYCF4pGx2M7KGjMcOBgVN61HjzJJkfT_1pLPrn_T0fdXcXQ5fHJR0aMQZuD8aaUJrMcJxKHrwc8Veufu_1ZEmqgUhVps", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110903337015697136402\">Chungwook Yoon</a>"] }
        ],
        summary: "버거와 캐주얼한 메뉴를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["맛있는 버거", "캐주얼한 분위기"],
        tips: ["가벼운 식사를 원할 때 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "버거와 캐주얼 메뉴", items: [{ name: "대표 메뉴", price: "₭80k~250k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오후 12:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.facebook.com/tysonkitchen", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16757424414684035055", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%9D%B4%EC%8A%A8+%ED%82%A4%EC%B9%9C+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "피멘톤 비엔티안": {
        photos: ["/images/vientiane/info/restaurants/pimenton-vientiane.jpg"],
        placeId: "ChIJZY6364loJDERP0sS8Q27cG0",
        placePhotos: [
            { photoReference: "AWCwydhU6jxuU73sjj8berJCt2SwN64-W7Oh2q2jsmHtHYZN-fV5VFfomwMwf5EkcofnF2956lqV20z_gudwbzcfvj8HGRc9b15wqQ3viIs0QLV_UCzPA9TPHQKa_BADBK7n6K8DntpRvLHRb294hjUGeHwXWSg0GggQx8mnO-4ycHHWNUfHK60ujNSO7EFaLOCxWFIFqsDwtsRbf8cM3h1qm1trlUp32EjZ48JSO644kAlFo2cAh4z6z1TdLp-W-SoKwR5ncHKLDdJz7Ddu2coiQuoo4TF3B8KoCA0jIXocPI6ttWK9NERCjr2UgAt2kHDtzOztccRFDkI3uBtYhVgkC18xrc8HjZMjunS4QGCqXJ814Lehgqok00vbog7lIdjO7PuKNoKXmhfiHJqpRsRxI2yKaG2G_POaFow1-ULxgPIHP2z3P0jDrbaD3KdsrhYj", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109246767371302816913\">Yumiko</a>"] },
            { photoReference: "AWCwydhspnT_wAlaIuJvD5BaAe8GsWnWW_jkKmS2gFhE5iuU7v-mbi33-lYjGQZ90KcG9IJBEFkvKtkmVrBCNjG2LbAwMS1wZHftCaDxJAYcF04ZKjJ72LaTd6IHC6OG25tJsyNAR_vQEgYRiuVdNzwGCa9j-H_tyu-vBYhuOemiwq42YL_gQpQpL7X-vfAFpiFjr6iErToPUGiv50f1wIx8gVkH-DtxEvG1O-Dd9dG-ZSpQs22acsPHjbZiuvfqvne2T5TtnST6vyUnKrP7WsTdZM2X9qsfkQeLo-GU_Q9SkImtgOTHe24ehy245B2tLS4T4l34Z9Ex5NkLe-C9l44ah5MfzDD0MC_I2ftYcPM95blmTn9BjvCEdD-g6bVVqADxrvyOvPrWWl3LYBSVHGqOsgpoOJDYvubt-gyKB-0Wa_0UppKb", width: 3724, height: 2547, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113483236531780977645\">Easy Zap</a>"] },
            { photoReference: "AWCwydi1iD6O9q7fKlGwRi8qa98kz--_fQwrxsivYTQvLtxgQZza6sBMI3OZw-AQgtiFuFQiJDmSLE7kEjo9-vgNE1bmJ0vovDvfkaEOQE2FWgxvWy6eiL6bZ4jlIedPswGOe2PW1PKoUq7ggVXXRWU_Z8bLYvT2G6Nhc1wyFDE6bp-fM4K47IxJrEaAdjn7H1lfbqdTyw5Fhh5J2tg6n0FPcRroKZmHQRiQl45ZlESlPwUWRYAVVvDfGM6_8OydVYxHZEAyJ_HlHfPJEChkpQzoPreP1eKg3CUs9DuCMV5CZCtkuNqskMN5CDgkzEoLt9JxZWgoC9Iv1ccCy5WC4H-lpTp2yUGdhSyCS9WuMqbvg-B2UliSYdYx7CxY1ITASD2PXZ5vzkOb_NcWEypwasCifsgGZjXqhosPZOT-3KIt0-p_ogLwvlEsq7ALic3NgKaw", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107676204099035083771\">Jon Wong</a>"] },
            { photoReference: "AWCwydgFIXExnxWm8v_i64Pxv7AwjyK3LobTZfZIOv4DGOKWNl81wp5sSFZbKWpVa2e84kSxQJEoqDcVmNc4ouxAADV3qXHWit5QH53xB_LFkkKW5IZDT7Hp7DEIqHmOQbzzzP-qFSuj1eBQmn6xrAo0A686ir7l_Cqe7-_z8KVZtoeWDZVYKlOxFS38pY96R92w7bZlgfwv5FXxyqypyxt7sAXQnm2nVWEGeTzBbBQPngOM8DPMzTJmzyMr2KoLuFQx0iOvOV3gu6v6gs0V4XW63yKBDuNT6CZPeML7rgk8UFEU4my2qfeIlZK2-BjSHnMcRDSLY8MVwTXsKilzr8Zjuav_3mgwVBEjrx_9jJOcmNMinA2j4y9TGbcEnnY0ghFuXYIopRuXcc1koyztvzF4T_LL82NzPscLcSobbDjkq_YStUitNvoX5srWitXXMA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108298835451806390122\">Aek Vonghachack</a>"] },
            { photoReference: "AWCwydiYEqAwtc7djJ5Ehm6BU11g2qdStay-XEAzWY1w3jNamBoShXBIFgtbbKD5a2npRqY5uq6Z5fZ4VHo4UlL4IUNsDwz2bCcfamwKSosE0cw4LFJLGeWpA9eCeE9iSQb1rodmWk0Pxnm8RfshA4jV7E-IyAM4I2suKaoxf2gLJNz6Cb26PJUqINUwY0ouF3MdGObe9T3d3QDZLBBKF_31UUw4MjpV7RADM40lWo8cSPrx_xIr-8-5DC37O8OCJwr_-qCEepE5u1em8zSdUXIIj7R9H3cACnwqGiK_jljyzU8wKC_CXKaCgB4uVtQWUwvzHVSm1vjGFW79V8_vhjbPB5G8Syfa-Py5rXiM1iJXGjdyiGgyteX1y_ZCdFVc1lFap1d_0cuDF-gggDo2WprIPeLyBxbJJxOhdGfDTqXaUqlBwsNk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112684648252541909756\">Walter Niederbauer</a>"] }
        ],
        summary: "스테이크와 타파스를 전문으로 하는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["품격 있는 스테이크", "다양한 타파스 메뉴"],
        tips: ["특별한 저녁 식사 장소로 좋습니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스테이크와 타파스", items: [{ name: "대표 메뉴", price: "₭150k~450k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 5:00~10:00; 화요일: 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7886008616079215423", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EB%A9%98%ED%86%A4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "아이카포네 비엔티안": {
        photos: ["/images/vientiane/info/restaurants/aicapone-vientiane.jpg"],
        placeId: "ChIJPyZc9YloJDERTibFeefx-KQ",
        placePhotos: [
            { photoReference: "AWCwydjH4zu-iFYpyl_yhrJGVKfmh2uhb4YhjLGAkrArPLoWiTd8bsYAXKfAKhmcKVVXKt1VrePgw4xjC2lF_8yeRMwaXJnLdj8B2dPdxsmGRVg7hMB6grJuhgvIPp85GbTN3HwiX3rLhDkSlXtiggacagf7lj7E3cWtekB7jIornzb1CaYkcWpDgCck5RTFJG8PvGlctisXPosYqUIBooRMV4AOwldWwM4N7W5lZJnIPwr9zPwxdovhU0D7Dp6tCz0mi3AWMIqokRjqjhm8N1EWvoEEXTxMXwYGg0K2xjLVsb6AHVlxjpUg4UiRgp299kxFZMp_QGu4I1bTVcpL1v7RLIdW1jH9-VL4gBlBAZSgzOOEGQ0ql3a_DsSZGONhPkE4SgWmF9iBFfJp21rWn2mnDXQjIIRVeRQu2zp9nLBZcUWg29qP", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111208209189528843042\">Sza</a>"] },
            { photoReference: "AWCwydhE9uX1YmQ62xa0efNwLNn7HkV3sa_wBa6ENH99blxBd0m2GcHPXFfusFECCfpGqMXuo45f7wS5wPDN0ldt1_VHF74tkTUYO0vrgyAU8scvEB3WNrBqKO4MYaz5LmYrTrWBViyCYmDdbBm01S07R9av5UexT9fZSM0jbcmPiEfMle2hYx3GfMSVE6PjJXfgmVEUWQ2kappGnhzAD86txq779bpTYrmo7qPOtqrWUJA2PFsLFOkxW9t4TFT5Co_7omAduW3Gx63aVYl4Y3LW1a4jCyTIQJom3Qkf5823ChcegFZ2L-HgQaUYPVaRdJzS-GHYyrslIwVg96FpRPfz7UPwxb3v5IMv6L00IRzpdH4had1mLskAyG8xkJ8hIKJoV6xR_ennlqBCugkRH9DDpDZxO8dAM1RHGIvstGOMUdu8uici", width: 1570, height: 1570, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103536325654781158306\">AiCapone Pizza ອ້າຍກາໂປເນ ພິຊຊ່າ</a>"] },
            { photoReference: "AWCwydjNvOrcPEOxvEqlc1ZPobk7ZV4DBaFHDHjndw71f0YY3ZrX06U0Orl9xxUyTY3cuHmqobkShflEwZfJB20vZdqiAuBksmZXthpPW_PBiyncqIA4_PRkiKrbrDmGVklGfT_Tr9QVYjqpoCHYsRJqVX9KspQjwEC6wBV5C9Bw6P2KEhyw-c3iOuvdGeCtc9CWKiuGGeTIFQXpv_cyey8mFGKSzWXS-jCRW_vcUgDMhxVIVwSoKnPxiN2ZjFG-Z9zh-UNQz8INRbzVOAiNt3C0Vw8Vv6VtDFGbb0jfljl0rcaoGT3SETGXzqg7lUm5NuPMAXnKA_QgtaTcWOuRX1hSadV5w9zFwzEh3e8eLRINBeyvWMXOsNlncSYuVGOR_pwocwr5dOExr8Y6yhGpY249zuZjHxeEwB-bGK8PqiElVihihhe7", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103536325654781158306\">AiCapone Pizza ອ້າຍກາໂປເນ ພິຊຊ່າ</a>"] },
            { photoReference: "AWCwydgPnTPQFsQzdN2Rx2DQdZIjJbrwdhgYhJuy0171xx-o3wx9VKGwJOHtZ3EU2J3Tf3mBX590DYI0ZX6N-MNLCD6t8W__49Mz5UIxH7RHrQABVHtJGVRcxIJQmJnJfHzo_xifN7urJ_qx_KUTp4I4uodW_A5FUJN7L5RQGMLUCPlYoHp_SkF-H9fISwk0Jonf7nk5og-tok-rKmjHCwtLqO2m69gULcZols9rtbrvqhWPQbBccj-_4DRJR_YTjwggV2_SM7DQkqoIGJdbvvf7UMoNg7m_a-Od_F6ALhZgJKY3KjELsX7NfZq5nZN9P4oXyq96IVZv4cq2ul1ohm6y_CjtKytHJ_xqwZ1FjvL1D_xf2b9uOz6G74Mb439hMiDOvzt3-RrEvIaefWqTQnSPuofw0X2__t9-jtoB8nYw9nuiW3aVSzqnZpTHRj1RPaeQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103726671847020639115\">Seokjun Woo</a>"] },
            { photoReference: "AWCwydiPYNGnsYrhYW6jpC0uHELn2E1OKCi3AqIi0-HUbJ76Dm1Z4CsnNqYpIWmc2XBcKxj5Z1UlO5wWcMRMGG2n5O-NdDE6CEMGMHRLMP4gq3mort_0TGcp-zpfYMP_bdi-xVLHzlyB_bf4JKexmabvtnQcnrXtBmJoyAChc8bh9uf0IEgXnzzz0DFULrFCdNCNkWpX0Mni1sBqwnFshvdF_ukNnX85Z68rAqUcV0NHCYCV8kbyrKJSUP6CkEjQ_82ijtViqS9JnJSXEHh641IlmEGL8G0IS6HuSLtXCPPGxaosKMgjb8305xrepCLL9eRaRcL52zZsPQ9z7Ay31mdeyOn_mUYqlqpeAdhet2EDwnD8KG24kW1peMs8_PkRBp3Zms23T4R2u_1l-qWJ3M1zsTVmk1aTw4BfFdARnzB0oWjfSFzda7KU7gC8QpJKAIZg", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105356534154240387362\">Anel du Preez</a>"] }
        ],
        summary: "맛있는 피자와 파스타를 즐길 수 있는 비엔티안의 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 피자", "정통 파스타 요리"],
        tips: ["피자와 함께 곁들일 음료를 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "피자와 파스타", items: [{ name: "대표 메뉴", price: "₭100k~300k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11887517192927127118", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9D%B4%EC%B9%B4%ED%8F%AC%EB%84%A4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "비아비아 비엔티안": {
        photos: ["/images/vientiane/info/restaurants/via-via-vientiane.jpg"],
        placeId: "ChIJofqlhYloJDERGU6GqLiSwlY",
        placePhotos: [
            { photoReference: "AWCwydgNSMgwWp5GcnzPO3fmEVIEaYlfOha6FOTuT-f6HIvheLNlLx3tE0bmBJXa7O_hNz06SwHbNEfIN9D5aa6NNLWJeSY-Efj-7RB1jJR-5bCYbDQbUkkfXF8LTdUiLaAidEgGUg265IGzX-AmVQg5mrPaAzg0KE01ruvGODEXYOCNtOCJ3AkiNyCkoxsNjMA0H1ubzQChBeIOD0WkDbL0q1TB00B8jMafi-9W1LPvRVHD8n6olIARkcTiy_YOEshqmwhE1Rx4-3k81ylTBfU6YrzLArorDGbxVnevK-cUpOaYTD36e3JKKlLQqNsWIA2XH0xwfvqrIhWOsyc2CCw2BB13f1qHsDbcV1Z4Pj6H5IyamZPIi8FQwDti_2O-6i21qHmoh44TEfiDbUEpVaqb6T_oIZ8gKqmGsFefrUN0ARU", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103448119239960571794\">John Toner</a>"] },
            { photoReference: "AWCwydhJ_5AdrJcWmC37seh979DvGwz7JPaD53oRNzjwV8zihqvx9j6hthIX0pkW1nIYKktvzvnJ_t9CJ4fcptsrhZAsxTUSPfmC9Avfbba5ZilCjB-14TVh2W-LmFV2glAMbDWNGuAyIEduRmZvV9oF5ixRI8JaeFX0fDvWn3KfIndDSZl2u8pCOXCU1RU52pfPlyChGTtuf6448HExyRNjQi-CbZnIswv_ciVZarWBM9k3d1UQT_qzZdLbiOmadqb54wIm5Dlnt3dFe8IGqbfSnq5InvjIjv9kmHGhsWprgoZcDox8FQHBsWHeWqniELxoUYUX4ep66EHLssxUxqgODuxEHMWZ5GwwZtrcS9YKDVG0ldWeXhuPBygJz5W2Xi3uZw916W388acCnfqgU-7urpERUP-KuH4zZ2ZEuxqYhdvnVQ", width: 960, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107823078507509983469\">le bistrot de paris</a>"] },
            { photoReference: "AWCwydjbCbPqqDvSf4jnCC3bkUPstTRA2t-9dcoRI8dX2wFqw4qFZhQaPgJjuf_UlQIs7ClHITa16w7CceE3uXBLtOqM1bh6RkGQVGB49gYVBr-7uc7gPhEhcts_Smf3_aERf2b1i0H2slp5d2wmVBuZaopJe95zSvlA0SxdtPG67QsANu6DZ29x03o2xj1B8bl0pD6FRomtSjFYgp5jMJqOeVxKr-52n3aNtSG8GUxU5xwthWgOq_3fgLNyojdMmbC3JvGGuEkbYVW3Uq04aXhOFrEOJ17dYumkWWktOCUNQ__47VpZLG_xIDWne56aUvsfmAQskU3-LYh22XD1JehSFDssdE34aOzdtuFmxdrxs9nmLDBCpGJB1DZssZ3PGscQkHvolodkoCthW_RYY_1bYumyv9nCU8WnP1PbhRAA9zaQnCKmxN-6hl3qKj3kDA", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117103565632775343305\">Youngeun Koo</a>"] },
            { photoReference: "AWCwydjmo54AY50J1sWLnvQ2mM-ZIEfX6Fwq6AsoyRGkK3okudNPb60UK4ZbzEJFC58jNJfViw42G26duytg7n2oWbu_XERgN8LEY8Abstu8PjAZBV6xC4Db8ICtpxtVY72etZCW6RaC6XbRl9yDH0rEc0t_EmEyoImemUwhjC_Vr8NstkYCfizy9P-NILmx_4swuofcUR5E94XbaAM0h5OK4-33_eVprV9qBwx5z4-WNfFNlHfbMjDMlqtXbkhQbUf63C2lwCBycXK9iHOEO8P1aiPV9CLRJ7w8eSkATshIkaN-iuUvTmjyrJMGLsJskMdQZsjK30dBRQXlHLGlDhtAC_GGHf_-uwzBPjt4beeqfmsJCCgpeY6HSDX7dp0jdzOysfrSMCGY_y9s3tQroDJ6FglNy7n9waLcKsXoo6UBBLD7c3jM", width: 1440, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102602956982883718406\">오크삼촌</a>"] },
            { photoReference: "AWCwydg8O3qZ8sjvZScpEOGwFysNq9KJjzVVJiazVw11oggJxeIZgzLeui-rNeh_KfmyFzWDwrmm6mibVHr3ycjsuKjXHpE8yjq_x6dZ7fqG6BPCqsFgFq8Hb1mHv8JYwl7o9Sb0Rd9Ygtcc7DelkLW-Bzo2ax4_T2PhXKsmkzv4v-k1a65IMcEKPKMtNhJo-Xr2COLoQXHH7LNDZhx-Ejyo5WfVHzKKKY8FyrhoXnw7ZEJUyazexi_jySztfgXr8GGs9a-TfCICA5Lg9XV-3chZMhd66pk-eM10Z1QeshhmxjTvpKGMw9n_YVIkY4V0F5LI_nZOujSs1xdSDTaKrszeRJFf7kCoLvQuER6JgO4yuB8WiYN64_TN0dmucGfBeSRegCzOb5ZU3J8CfxH4nrgQ2Slfci6_BVQUoHaccUnpRao-_EzG4XfF7Mk3m-urzqN2", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117103565632775343305\">Youngeun Koo</a>"] }
        ],
        summary: "여행객들을 위한 다양한 메뉴와 피자를 제공하는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["여행자 맞춤형 메뉴", "맛있는 피자 요리"],
        tips: ["다양한 메뉴 구성을 확인해보세요"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "피자와 여행자 메뉴", items: [{ name: "대표 메뉴", price: "₭80k~250k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6251720554542681625", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%84%EC%95%84%EB%B9%84%EC%95%84+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "커먼 그라운즈 카페": {
        photos: ["/images/vientiane/info/restaurants/common-grounds-cafe-vientiane.jpg"],
        placeId: "ChIJFUh9aYpoJDERa_0IBkQHYww",
        placePhotos: [
            { photoReference: "AWCwydjF7URSz-R48ZNlV9Dgw5BWh3ctL1NVSkL8ScvZqQp6thrQX8591t1A_HRpN1itTX5E99Xk0-akf6rzXimqrdazpxTaMbR2enKvSdf52qMbAZSFHpXFFXccyfqve7ivYgdYrHQKAnAyVDe74XIoxqWlOkuAV-3ZK-XLM-PbexTkkDPpasrPIuQuT5H7wD5FAGRggPsyce8Cj8YydjteQ4-kS79HSgPkMoXTE0IXsTXIIZLQ_b6UjlvdX_zrpwP9vWAYqQnZhYjyMjCPb-daFjlZ911IFbTw8-2pEm9A9Wvry55rVn3AwhSfjkVlDnc-F-FpPSYg4cGr-z33bsf3BOFcAU4lTxiVbhZg2F7ihMfG8FbOKK2T4hw7JCP4SDzYN-f2jcBUpMHM6WpPw1kl5X0CJopMJokVE5mqzQ0OaN4", width: 720, height: 540, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107126674379371057429\">Common Grounds Cafe &amp; Bakery</a>"] },
            { photoReference: "AWCwydgmwDZXcQLpQOBDK64PYjNtaZeolXjK5gtf9pvQJ6z07r1-FsRGqqjmF26OFa7Zm3frYez2W4m7iF5w-gUGPMBsym7VZzUJVSfEx89M10HUjH4iabEAyDDLeEOUL_h4-77h7QZrq2b74YHhjU9rJGqKXQBHs0gTBXZz9nh5FYih5aL0HSrprTqxCaYytdf4TrnoTS_WN-DgEhQ7zEy-1__jwdx7C03OhuAos0n4jyd494Glg2hcIS1QvTT4UdADpRTGqtKsLzH5ZqfzFDyjdY2ZvP5SOTv1d4kVtfGUwiYRuhLk_PrcN2GhnRMULKtk8mTUQVtdD2wCRcCcuj3NiLv23Zh-SDTf_7sKCfastGT-fFDpbYy8YAuvvzgZ8IRk6VX_QMXks5AlpgWRgieW9LTYsyxeBrbo9I8oQ80vhKoB-kc", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107126674379371057429\">Common Grounds Cafe &amp; Bakery</a>"] },
            { photoReference: "AWCwydgn_UeaHCvEeuOocroDZScTNMRbyNoOxAJtIo88W4K3Pm1UKefBK0rUmrj2vxHCGRiJEtHGEZkYxWguRtOIBUgQKJ7quFjMv5Tll6essZRodqOLa0VscI-Jx5rLAmSybd_Aug6TFT0H4-03H9FCQbqYDavv_yYHqaLaFpV11VDc51Etedsdvv-8xYOgVaK6xMruXzlQd8WJfakDNhaAxsuUGfxS4_6jSN3qEab9u325kM0kVi4-S_-V-IrcrOmdAew1zR5HtzZ2-08BQLlNgCo6DgNqBjZJyo16umI087-4QP1CXwLC3wSt2nANjLVNXvKUuooboRzJtsRVullV0WcgzZ381EeDNqT5quExCQugrkbCH6WJ0HVjF5zR5qkgo9URHheScWkHef3usbush5k7QVnvEmYr_N42MszwX20vSOL-odCf0071gElE-am5", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106970807463616854050\">Tom Crowther</a>"] },
            { photoReference: "AWCwydg4LT1Yqgi_UhXfEvEL8DmY482Sye5JYpQY7K0UlZb8nEF_Bvcju-Qm_fIz6kC3Fc5TNBX96CYS19fYIzeHfqekJ-KttHO_dwVVgdrD3VFlSaZmPf6vcf4hGSiCfRHPCzi9thkEklC9w1M3vMaCe9qWeFD6b47mk1ZSgbdLN9pFX8UtX6FPTk-yTbyQcOdBv99OThhzVpxEZylxAXHihtWS9wunVIIsbQ8LCyi7N81Twp03sfvmBkx3BT18C0XSiR80MtXGFAHYDm59VtVjdBpc5YfeIMr7L0TERBDa_w5cTOtprsMvfl2bXfGPPPsAk_Vl8tFwvBexKV_XQ7e6yXHVmBBXdN1KRsPTlyytwhPLb3nkopA7fz8x4DvJnyvlqLgFRvY-gs-dzsi-17EUl3pbgdppcAt8rVVM2tgx-wBTumpAeG9Bwz5NBlFtoA", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118172681543018947141\">Joepublic125</a>"] },
            { photoReference: "AWCwydiZonlq9VnIG1qJ-8mN56mj3rS3H5CtOxA7MIsgB3eYjwnrYquif36N0z_jgms5p8Pig56-FvPo6F49SPjZpozv3nfSAkCMZxP1Ji9PVLIl_OTagebHOLGTiaKJmWSGicd13j5xKfgZSHv3qsAcFfvwHLt7IsJA5Ajz-Ski0VLW03mFR-PwipeD3_U8RpdcOXdyDp2kD1WoNWXrv9f8-MA4cuebFydSsO8MdzsSg-hm1Us5Z_QkTgvWJwdHU_QGPrG5aq2VXtNxlQqSHY1Jv2dIXLLcsKQHEaS7uaZL5OTtf-t2F_EDeQjHO6-Gz2ItdZ_YwAqylqPjFgO1_cr3erQlBfCSc2EPfNux2FdUe996wvhgbtP1ys_X9XJJsNT4_Y8c4S5IkpZp0R_Wo8tFo1rYDpM8wljgGsvLhZwajtA", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100944445547896606359\">J K</a>"] }
        ],
        summary: "비엔티안에서 커피와 브런치를 즐기기에 완벽한 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 베이커리와 커피", "여유로운 브런치 메뉴"],
        tips: ["오전 시간대에 방문하여 여유를 즐겨보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피와 브런치", items: [{ name: "대표 메뉴", price: "₭50k~180k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 8:00; 화요일: 오전 7:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.commongroundslaos.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=892565139889913195", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BB%A4%EB%A8%BC+%EA%B7%B8%EB%9D%BC%EC%9A%B4%EC%A6%88+%EC%B9%B4%ED%8E%98+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "쿵스 카페 라오": {
        photos: ["/images/vientiane/info/restaurants/kung-s-cafe-lao-vientiane.jpg"],
        placeId: "ChIJ3zGPiINoJDERQKxgFzjvlck",
        placePhotos: [
            { photoReference: "AWCwydgFe2y6o2kUaaVG1JMDVs41_h_fedKR1rNNJBFeLo2jZjjQ950-lbNEWrW-fR4AAKTtNqmxT6jDtCc5N7Y2uX8bW8f_r_36fcdKmfkt4ig3HErjWShE8379zn8OPsX8UOrf3Bb0O5y5DwbdxESzebFo6FG07nnFAoPZorRyMqYKTFEaNhG3OhmCIwcNADdBzxnFM9B2rLvlwb0t3ueWeAR-kUzN79RGjZLg1Zryi4Kqvh5MUIjMA-65UPLBdySpQ_JixDfGjf6oo7RR11BxEu7dYzEaPdOpKkysKovNOZxLtm3WFOy_3TFs4gglzvKt5PZpvzu4lqUEaSlHmmknotcXny3zpHCUd7ydL4SpcQtmFjVbEeqgAAm1Wn06OekGLk9FPd1k9cB1wvxCoD6i-wVXvLByyKH_PeOIlyVMpjoGnAlJ3fXOsawsRRpmRQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110559694039473521566\">Aibi Y.</a>"] },
            { photoReference: "AWCwydhSNQXaFKLi8OOzZ2_MDWME5C4I-StQ6rRdjzB_u6rbRJoWd3Rt_gLxYMWVzXW9h2aG-5PdxNdcfb1neUMz5HvzzqrhMQWbDCLX3FQw7glB-h1qMTDloB4Q1mRsv6vc1hlySKT9XjOMFmU7VbafdD0Jr7XdXoNpbomx7-V0EcXm1pMx6k4X7Gc9vI-RZulMmdMAinnuc6ED1EMODuM_dlGvxA6NTn1n5y9NG0e-GNDIdQoZ7jRT9xJbpng2wymsd7Iq7st73HtsZiRzo0u0uCfSf2ZGD-CybY6wh2wbuvoi8z0mBQXjM4beAw8_sGlxnmG_0Ovtr7rzEW34GPaeC1qx6PiXzZkv34_ASpOWZA9HsXiMTmkKFbg1ecCmeawCMuQJQYKjd76nXrBFEeOLTuyVme5rEmXnMVFh5RVHFFlN6fJWaxcjPQeOsXxkDg1o", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104490528094992920927\">Tianyi Lu</a>"] },
            { photoReference: "AWCwydjKTNoXAvOgDFckbMj1NUpoL_uBKTzx_NRZfdhJ_h4dkN9CodjTBcwBg6lw6CzMpTr9sg92HAbP_0wgjyLeJYF7qczvGuRsuxr3ENrSWcfZOjo4kfG1HF4cJwslmIJPmNwvtsRSnpikMKPZMmdjhvuRyMsnW4T7acGANWXlE-TDleh_gUjUR4iXA58G6yWzhlJFo1p2Ru42D8DIRUHgkXqIAs1ZIvl1465hlVxSeatJ4vf-DO2SyQjw3e-lBg_ADfy8BtAo-Fo2HautWkR481ehzQdOD9k5rYX8aqyT7sOhWqL45xES5hl2m18uwtm3pTN7YwJiG21uRfAh_rrZutUPksttBn72UE0lvi6Avbdi_pkJ2_mLHzIPpwBjpz9XXg3A9dveAwunNRJay2eCO1eHTE8h1Alp0e9LG1nG7chwKySbEO12uETL0lx5cfeF", width: 3851, height: 2887, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105453601966727331257\">Janie Lin</a>"] },
            { photoReference: "AWCwydhqlmgrSnyPMpnW_GGBQGGRreOFPjh6mIneaov96uxOlh2BDXx_OwfERco-rjtusCPRLlducRTGbDfQlYhWHyL2Md3WWK8wFuGu2OaQSk02HpYzAa-6rkpsuOaUL-66RGOrPCf2rtXA6wsNjxLgjTI1IRjWq4dQWkHI9Zbd8sp5f7qhg98aad6zQLuLg5Bh4UD4KiIUc3xbf54fO1cR_FTRpV7hQMK7lhYlmnEY68oAR-XY7cRNAt-W9DrkTTgsKJlXH17gjJfbx8dLmpc1pfNexUY9CmBsvlrDmNSgTN23JdmQa-KekLCoGdBBz8zN7-5Uq-HVJTnkNLKlusPCi0I3_PjUiUrM2f-a2x0bCiM-mtPpAnyqQ_VllJdRBoPi3SGFNrSC5FuATARqQ5ian-uKRh7jqhrWDp_GAnfEUewomlFx4JMhpmb5uLqXAjtt", width: 1920, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105856501898699095762\">john john</a>"] },
            { photoReference: "AWCwydg16IVJwku9s29QrqmneOV0GXwMsOqP9sMuEGCoNMVeFjCuIXPWddqKqGqzrR4EykRleBgpVeD8nCORrxqM1hgt8M3_BEFvQM9l-7S5yy1JuFZa9PjmMjU9jmiqO4A7YLMt35Y1OUuDk0-10bQEk3ewLAMSnSbrI5wV2iozZz7Vognm8EAd1gQdXSj2vcQksKb5wSKWC6ToMhmv8lIiLnFZSoD1F2SINmOvKeXu99UAyamxzt9lpJXwCsFj_aUz5VNYBNHxMVqPkIxCxBPZfEvyDIHL6YzfQJNlUeFGk4ltixs600Iw7STJlytXBBNPBj4E5c5arTeRcD8N-wdSFGS-ZhioPRJ8gMsmnA2z9OSKC6YBuoreIvS8SvAbk6bgeQWrlYojxuevRydFkV0DcAx2rQP2MhYEjhEGDqD936uoknGU", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111998400358203780550\">ramon 1985</a>"] }
        ],
        summary: "라오식 아침 식사와 간단한 식사를 맛볼 수 있는 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["현지 스타일의 아침 식사", "가벼운 식사 메뉴"],
        tips: ["현지 분위기를 느끼며 가볍게 한 끼 해결하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "라오식 아침·간단 식사", items: [{ name: "대표 메뉴", price: "₭40k~150k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 4:00; 화요일: 오전 7:00 ~ 오후 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14525779197342821440", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BF%B5%EC%8A%A4+%EC%B9%B4%ED%8E%98+%EB%9D%BC%EC%98%A4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "도이 카 노이": {
        photos: ["/images/vientiane/info/restaurants/doi-ka-noi-vientiane.jpg"],
        placeId: "ChIJzQHfiNFnJDERkB_RcxbyUz8",
        placePhotos: [
            { photoReference: "AWCwydjsckPkd82jfLVVwPXUbbFclz2PkNMEOytvZekQwyTM3e1tYDAZVL89PBfEizq5uKJihS73hJHEIPwp5y5YnEqJ_s9EwzsigwvxBDjp8fRnVDn7PSuEWMmOsMgcxItylIlLh_pdGr5g7t7twXGepNYYGxD6Htnl4l5odD8z9EdflZVt19XZ6_EXSz1dWuIvxEmbgcJuDA4b5X4bnsBjk4W5SZJH9gZ0NiYJHWxdhWtLVYR4nvqHOjA_UpP3X7-62KT0WRAFJk8xJkAlczg9773A_ORQ-1hOh2pROwc0bcmfQZnyyeZASCktYFHQeUe33YVxZBo8-n91NXt7iUr8U-NfE3l4fe_eMGETKFeTLk_snj6KJ6bU59TBM0apNiQeFU2OCjGIpfYt_4MjBbwBvhIhvhDUvXZqt2XfT0jUuZ_fNVyg", width: 3941, height: 2955, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113409277023159966640\">itisme12345</a>"] },
            { photoReference: "AWCwydj3voY0W8f6URNJ16WVuzK7Yk-CIgBbLmxP13QOTwQyLU55JC5yK0Ansr37psXlQ-YqaOh5irAI9TpQGY5rmzxW_VHs-sx0v_VSb2nadGvalHWEmIngoTVexXKQ37qGnPuPzAZQB7nbsKHXInWQk7tlxIaBsnnvPP-C4VwCYowQxj0gFCgV4Ove8BRQZGD91G1UgrEKxPlWUO07AxUNGBjLmCB5PFOh8zEQ6712RT2GK9a9vTr_ZqhGbWDIHkyqRlcaW3fLs-npBWYuxXqBDIjg_ZgsmTvK7cEyZGzRRUOimV0jYoJP77gmTt68KKJfo7tp7Ryuz_RPFxMI4gL1kCn84GUKzALgG-kGcP6ZKEC5qmZb5WyUBYU-NSqRIiHo38T-IlkzBxhhM8NmgLv9pgT-YXnjPs0aK7t1vfUwx6Q", width: 960, height: 640, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101304823929946608553\">Doi Ka Noi</a>"] },
            { photoReference: "AWCwydgWHLWxuQFIPtrcDGMItBMGUeO2zON6xrBV82KAqUAfuozzNJxhhbuUiQ-LEo0JJ76iVmlSwYuMW0gprYHqT0evtclesxc3QPubnoKO4cj055OTOckbnSa-FOiaJLA29qArlYt2aU4qwulu7sVi1k5gpWLKFrvKiBJVC0qdkhnzshHuTRZ0p9sbrkGatiDGwy9fxpx_-aTuK9Kr78zWTVlqIsXAz9c8rDycLrf4IlTVSpT-pOMj0sN8raACrSNfIJk6vXHt1WWG9p31a-DnKhmYdF-gYSGFAnbwcOaDs4I3DETwXBq9gvzScK039s5WnxE0PPYfHgwAFg8wtbL-z_TwZCD15fYdrWVKM_IMoAjrOPhTqsymU974Fr9_y43dJN1gBwZJpcJAwZgwbcVRS7cEVeqDmHLY23oiI9ENhF_0q0RA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109524894171711690220\">Peter Seo (BlueRanma)</a>"] },
            { photoReference: "AWCwydjLj3-LPw6wEIpcigrDkEZaW_dsk3jA03gNa9uAQ0sCtPTYzWxVMfXasbHDTb8Vcpe6YLz1rG1FWrjV0bRJJOnbuI0h106zE3IvJcrbMp_mCGXecqDehyUigcHhoWIHV7FLPGNlvx0unvMrvB3O5DNM6teflAHexrIlUYfGblMWbGK0jKtwpKoLVx3eMT8gNUV38PavhGzFyRvLijfZlL41AOeMm4xjIXOA1Jw7Zk4gUvVM6uyupo-k1doMl9AKvz1AksYnwXgKmQ_ad3UN7CukJOqSce8a0ArG_cHPQk1kcqzr3kQSJcyD-Wh36Q-oSoRL-q_VKuVXGlvuLXKgKJjO22Fc91JOn5jHWrFq8sixiLF_KjZc-oD_MW8a7k7SZgbdcbe_n31XzSBlVDjoeL9QRpWiwYLiI5XQAV17PL9Txj7H", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112552280761911676372\">sabai e</a>"] },
            { photoReference: "AWCwydidFyPtWcHtWl0Yyra3uyCRMzZMV5mi4Zlx9vxYoHMdGjTGHWVz_AmEkb0SZycYdK3N9pQdIfxx563UHxS5HcwPbUWa5lvP5KEU-Ot46qmSoX838lwQHCKsSwXei9kWHJy8KcMRfD1bEs0BIuLPbxQxWTOvEsLpqQszUsZ5VpnwxHQLxB7EAn0iqIVEaIzxFfTxpJJ_Mn2z_A0XxOL76uZQkFxaeug6WK5oa5ZZw5Los0RpOxJaDwUU_51Qg7k0w-mHxRVs8_Q_xjD1_GC9piJimAxAudljlg2ak120nixzwB12kB26oSqVxlMN_HijxugGcXIq_jS6TrP0nuoAw8nU75Use7GHr-qcvByRGEIz5MlomDHKCN-Vywd6siZLK3Gw9btW7GOqutYmrPcvj4CYeBZAER2b8UJ-shyRnjs", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106419523476836182908\">RK Santos (RK Snts)</a>"] }
        ],
        summary: "계절 재료를 활용하여 정성스럽게 만든 라오스 전통 요리를 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 계절 식재료 사용", "정통 라오스 요리 전문"],
        tips: ["현지 분위기를 느끼기에 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "계절 재료 라오 요리", items: [{ name: "대표 메뉴", price: "₭100k~300k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4563257025702731664", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%9D%B4+%EC%B9%B4+%EB%85%B8%EC%9D%B4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "탱고 펍 바 레스토랑": {
        photos: ["/images/vientiane/info/restaurants/tango-pub-bar-restaurant-vientiane.jpg"],
        placeId: "ChIJp3aYxGFoJDER0j--7mUAp7w",
        placePhotos: [
            { photoReference: "AWCwydhOeh9Sev15C3xx6-D_115B4rY-j-GCJxDwM7RwvmovQpss74StJmxhvONXWnVGDgajizHY7GAtLWUOwt6NCSs_KW1_z56nDKgEgBLTQ6Ivlq9Ecxm7bV5xF1FB-42O25R_3WUnHbDjS5TeZ9Kygh3R1xe1c80nWL_xtZ05Xlhn272q5ioFl_OY0PKkUyiiB22UaRPUDSPwoAwKa2M5m6DcUSktZZhST-NjKzGJW3wMtgX-MnE2w6VneudKRCU5TlVUuI1-mHiihRFzEF6Xvm1XZ6GMQ0NmvEc1GXEvtbUAc5CLhDPo5WC7Zl6_TaQ5z16sgXWzfugAGsx9rFtlBscFQHZCek4-XDBOWhLAEV2CFSYq_g6l5HImYznnXyZzU3ewc_RY0a6xEoMekZ_ZK_CeCUh-MBvIVWOP7RRq7mFC-yw", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115650230164934136779\">Tango Restaurant</a>"] },
            { photoReference: "AWCwydhRPfba9ItqBS3QP0G2iJ6B23nsf0y0PUeAV2lwoUwOUpa0wNLKR2_xxcgoJzcGBJvDbAw9Y0KhvNg12R5vLZ5X_3HH3RWqN51rgTTCUBAMKGya31Uk53er_izA3W0DW1HfHMv5su58pm5J5eyIqb7f1aBYe5NoNJSYIRlLmgBF4r8JV1Y0s1E6PQCMCDbUCIN2P_Rmqv2YxvdJZgmhpRpfK0e6OOxVLmiqdUtyn1FRi7_AmMPNt4McgpI1xx2cIfX3tm8NieBtb2m6jzTxgLKxnX_kLsKbGyO3xT_g1fjG8RdrrSUuFi3KUCG8xEO0_gMgnuI2gec1hbuG1PAke8Hw7MOLLys4fjeOFGgyqLpR8YST5YoVH523LNa40ZOcZg-Qh3dQnfHrZ2hUKrqeRcki0WRgAIogt8MDEAyr7jxbvhFQMbkjS1rinxP4LfGJ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110929320373485358875\">山田次郎</a>"] },
            { photoReference: "AWCwydjlcVGl0W_tZRmhIhW-B-laemn5QHEQ_vYm_ki77IhrdhsSMGyKML_E-hbDBzxMXPjpBVh_KT0e6nXcb2aTQK7K4xCUAeK3aLEO-BUlawzJfiN_lfX-Ln-Lq4CqvyQ-3qc4IBxYXeJ-L6V5VwQ_9ldgvo3bboSeb7icsgHV1XMBpJB2O7FSZBDv3pDOkHlIhfVbrV27Jzt2y5hnVMd4Jgj2-YkydkBP0VPvaWDU1Qq3U3spXglwrDdAo2-UEadZKKkQ9EG0OoAuFlFAOWhMUd9uGQCI5Zf5Bjqn0Mb-j3qGMRISFKBRu4PWuSf8X9e_thcsSJ_G1zGRzwAvlgOBC0vtcZXsbKayA3M_S4Pdvc3Tsg-gFNEa6iFr7v8PIR5TY5c4ewAHmVbYkAIJvFe3hPHOCDR9Q9ZEDsCbCUxv_5mKBA", width: 2071, height: 1483, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115650230164934136779\">Tango Restaurant</a>"] },
            { photoReference: "AWCwydj3h9BHoZURyDxA7wqtEuXfKNPhQyx7NWzN9fAxWbWtG5bx_XL43HzH-_R5In8FMV9HgkSEZXdgaQWiuKGt26uZttowmPKP-p9UjncvV1JQl2F8oHj-v6FWrTtKs8TyxQDBAQzkAEVLzJ1B9fMvl06dxoTFyV9SDZGtNDroLB_5nCFR-exmtGQRqfi8smHE9ZOZA0JAhfnRU_bYphMM9LTVyN7w6gRSb7Qr8IGdfc7jiyQd22d_12SdCpOW26tD-nh1R9PArmH0-2gxr3AnxoexO-gni3r6YYNbDTqmq6rHs6v6dRr2LljJ9_Z4KItqbAUjwT2oEeyjEB2sRO-jPhj8kry57c6jgvxDNPsw9OM72zqiiAJthzFBvdQLsIzT1A_sGwPaosCmiCuyGz1IT7xbikUq0BeC6rJjESS2bq1_h7C9z6Qcrx9Fm1tM7-SY", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103416745078141409016\">Koji</a>"] },
            { photoReference: "AWCwydhqIxIl5v2Eu4PkR7M2JpZmq9kvW2DpN2Wng3lb29umLzeuPjgby3XlkNW2ja1dDTnbTv55I2gDtOq2r9BEwn-P33mHqDF4kxP9T8xdT4jWDmstakHvIwLa1cK9q_8CVndJbDEMcTxd1Wp0eSEssCRLpY9SI9CCTdPUjLqZPYc-sfP_Ac5QWsv2DxWT94wZrrFqiDK-C39IbyYXh7IBbRYItOSvjb-MjXeOwZY1xG6MFJ5_HkeV0FhmKN7g77WFp03Yp7MnJBfz0iutY1mYpRmbB8sd9hezL_9kcgWGOIsDIvDbdB7L37gtcGEO96z_ltYgPm3N13e2jJoSyXkA-taN8k_gPKtmCCLYTrVNRvhKNLpSv7hXr4Pju7spebYhPonhYVgv0dKF1o0iy0fKkcZT94ZQ182Kmr4rNFbuKrr0nDJCOy1K-jS95yQTnfdA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110903337015697136402\">Chungwook Yoon</a>"] }
        ],
        summary: "맛있는 저녁 식사와 함께 다양한 음료를 즐길 수 있는 활기찬 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 메뉴의 저녁 식사", "즐거운 분위기의 음료 서비스"],
        tips: ["저녁 시간 방문을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "저녁 식사와 음료", items: [{ name: "대표 메뉴", price: "₭80k~250k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13593834438038274002", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%B1%EA%B3%A0+%ED%8E%8D+%EB%B0%94+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "하드락 카페 비엔티안": {
        photos: ["/images/vientiane/info/restaurants/hard-rock-cafe-vientiane.jpg"],
        placeId: "ChIJI7OXDDVmJDERH8ak0V-ep9c",
        placePhotos: [
            { photoReference: "AWCwydig7anK39byr2SAUtjWf8UWerUzdA2yqKbfuDKv5jUxDpp0uFVt5WkQoDGCpM7Vh6XgF5cwFjfOp82a2deKhpDBwKTyuOMF-8ecyHN_poRuniyE8nfoM_uL2UZzxyiC8zunbpJ560ZhDgi3Z67_yMJtRobQH7Mb5TFybkNUpGNwdZXLDD_JqRt0OLUy38RGZqaAFdDPzpGsLDB37wAmbFFYBFQfGVtTljrI9VfUtdu_sD3v3Dt1opWHFpyy9rkNVUWBii8yc2nkLNapw84-PBRS80O5PObwyXpGlKjQYd8Eya7ReiDZf536Sx_GIDmNn8unIhr0lbkL-DO_xpesWXlglbU6mF_xxN7KvIzGHImEJbkTijmANOXCd4YZmHHKBUJq19JBWKHtQ793HgRaEj_4WMmyNyC-5auTio4OrZo", width: 2122, height: 1413, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113981727746488875413\">Hard Rock Cafe Vientiane</a>"] },
            { photoReference: "AWCwydgOdGVOOI4Kht5uqeR7_QGimO-NOsRZ8dqntL2RHvrPKzfEGZ5PZtd9lXfPK4WEOp9tre-iP8gyYosIagdUPOEXvNE1gjiw0ZTeScILYZy3F1-EDVs7BkeaBM_HUQcBJy3qZSlnwznYiWoWNDUl5TTi8S3JvKlMFXygWFHo6lrAVzYHuliJm9kJdxkb8XGBOPXFRl7Mxj2_UPPezU2J0QhEbvZf67OyHsTq16CQ7OVQV-pl4lu_wEWdXWwLWVocVsnnvdPHserKPjme6XHOvKLi3zi1m8xBhBpenG8HVifK4fRs8FbzQEcKr5QEoOjtag_aAoOyRA7ulRzyeRKmdZgxlBElMbXQFpC-cR5BOS8gbZ9ohnplBaYIPCpkVcUSZJPH-qKMiVlvtopDT8vhua52Qqmi18ifJottVKXhs0ZuUaun", width: 1500, height: 1159, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113981727746488875413\">Hard Rock Cafe Vientiane</a>"] },
            { photoReference: "AWCwydgtzZhSokbpGBjStxzQdfDKgIxzSa4EkwegXiNfRqIFbRvPxXfXvhL8Y6f6Dp9LKmGQ8_vNUTPkLN-wOoMDQOPvGZ08psZEVgwydGQU13H76wH21TBMY0m3hKlKdeHKs6Fm_AIc_FrNbtyAXwu59swEodTDvDQLugtw5efG3NPVum7BFWzCDYv_CJkoDCWKlEcSKO_zZsCpLzMnEV_dyxC0AVqi1UNoQ3yOXCWpls_WZALRpUSe8_dAwfGYEekcAZfsEHuJQ9vJ3pLE-QhJnGx3jlrWp_Xf9u5lr8MW6QGEpHM8dgIi8YjXmle9-6KdTTjflL5i-Po30ZI5GdOGUNp3Rf700bhiVQGnMclAWI4zX1C6s48dLQLF6ca42g48pumR3_OtNT58XGotPIT1VsmmxTyJm7ckrF7-SatiCMu_HUEIq93eh1Ac744ojw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114960089422984681323\">Teresa Chen</a>"] },
            { photoReference: "AWCwydhDq51tywR8r0vbas1ZGVlgW0zYf4srrU0tcivVWFp6IV4H4mDwyDTLCOGtZR1ZnMz0LDBSRQnWBO77IRCUjTGkWHYVrGmYi_7Um9lUBljKnZJdhtkHqnYzKnZjTUCb5O18FiR5AZMIkfO_8rK-Ye10Xu4IbQJuMPrU7QH0dgiltVAMrUCNnecsi2wiQs9yW1pX1KnDfrle-nR9-MxwPsBsKphDOlvdlQ0YwAFcLzKXIGjeRE9m585mwqVCsFm8GpBW6CkrVBdnM_tyl4b1h71QFD5q14Ure3chQZBtpgu05U44Z27-ZQa5RrrF-Ht2BuXHyGMr9irIudlxY5B02gaf1fu6puIHHjr80XzgrPqIK3ilKtPaSwnlqgBCZ37eVODvRjXNASuDddvLENYt9jolv2nW_ZiUJwhhMEdQYqXHZHc7TrnOHPwLVELM_xyF", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106868693781056287460\">G Here</a>"] },
            { photoReference: "AWCwydjzMCHE2gD5dmm7vtJLOeEZScVMQRhB3ntcEfJk92GUEmPB64mt36wNX-RZxjvdUQlnqh6BcmdtA0ahm7Y-lL97skR7poxqIzvDBNNOcRwidOId99ONJDtnVRbcrquU-h0TvsZiHae7P_5Q-LERwMUd8of2nErWrn42gcmBN_xBao-E08fVN9J9o7L5lxFgyt_5y4XbQM63BVzSLv-4qTSzyId-ClcTsWR4eAjVjdQY2J5qJem_LYEi__BMwDrSfbMqAhMOyaYBCOgBt4uarszA7dqWwukDgHc4KRYRSlWPOIVjUyfDjFLZsCkaJKX3J3pOJ9-f0C30s2zEG16tFvQbB5ra_dU7BZFquCp4XWtH-58ytOAeI7yQX8P9iIPJdeO1LtN32t2JGqmrhAb9my_vi20MQXrOY9c-G8X9L5PiWRAmpHu1njGo1TTh6899", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102312350122934783702\">Kats Nakatsukasa</a>"] }
        ],
        summary: "라이브 음악과 함께 버거와 퀘사디아를 즐길 수 있는 활기찬 분위기의 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["버거 및 퀘사디아 맛집", "라이브 공연 분위기"],
        tips: ["저녁 시간대 라이브 공연을 확인하고 방문하세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "버거·퀘사디아·라이브 분위기", items: [{ name: "대표 메뉴", price: "₭120k~350k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://cafe.hardrock.com/vientiane/#utm_source=Google&utm_medium=Yext&utm_campaign=Listings", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15539563173641504287", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%93%9C%EB%9D%BD+%EC%B9%B4%ED%8E%98+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "카페 아마존 비엔티안": {
        photos: ["/images/vientiane/info/restaurants/cafe-amazon-vientiane-mekong.jpg"],
        placeId: "ChIJSYtuCIloJDERBuvsFv3taUM",
        placePhotos: [
            { photoReference: "AWCwydi-a2FJ8Jon7aVWf-u53CeeRkoSUlfviOuXHwIOP03NLLwALG7_uR3tGwGeIYCd3FK5ufBTeWKgBwyr_C4pNXuNxX_0X025oz6JBUBRBRm2BRgnQXTSAbOIdXHYxFwG3yWHTxunupmiAYCQnTSsfFfoe80b6rrrIjksipmyhI4LeoZ-Nf_A4-HYRz6vT3vlKjoY6vIn4dOOC92wsfgeK1KxCP_rhV6PTky0q01_iMIhjOmwnhUnirgTtBRFDrMqgKS-HZkAvBK16IVYEs_jLMeznN_FPmdDhuZ6YbCEWT8UeJIMvBg1YSzIHX3_EyMxvKtKv7n4qKG5YRNGqzwnkdeET6B-4WOtdAYDAh-J5JbX5Um1kgDT0HpDHqYyEgeyKWDVgpd_F-1RMIGYUumfyF21KXpR3l4yEzaYHbbr76w", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113949978043194298440\">sangkyo Jung</a>"] },
            { photoReference: "AWCwydiq95s6DcEP-MFnMJ2LQFvl79eYoPt9-ZxmH-0IY5vLegIVSte32uk2ovsASO1hS4Lt7Tg5ir4TxrA8pVBsLFv6d58MjuJ9bz5lpvnCSTtJIFYoer6UV_y6d4RST0kYdmTVfWbhmNJwDxM_byR6kmQ8bS209H4VLUcdREbJ8LyRCsdjW3iUwMxGf1VaLnI2ExxWU8Juug3LcDhjCxKdI4Pf3-t9zHh5aipKGJTL6i9y5ki-POa4I8mOd3ic82HXFOndqdfhPUpO5oSANEtEw5A5NCdwZ6qH6AvjOTZ2zb1Qr5rsfQntO9csnoCirYMWJYHxXNnDia3IlkLsfuXtyUNAr7SY_B15mHUM3xBfsqv1c6bb2zYNj5yjDD8m87iMzSK0fG080-MUn9Ko8jv1DwSDgF80PU9BuGiiXqWbVcQ", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107190088579333445946\">River</a>"] },
            { photoReference: "AWCwydjhoS4zjUzdsbtQa0iFwv_gzBCgGw5On-1YWtkP1PHhi24s-CqloshpQXEhqdmfdaymuElypfC82TqFT_MIJ6XlnU-bCaEW1hSgrnxFq7przk4G9dVDNu4KzTczwRvx51p1ToIeD_WByy_gVC4pGsf6iwxSe-pOWlj11n1mUFhI2FcOGU8l2FBMMvAJWj15PF3pGAuROgMNFJqvbOyz5Dhh5hI3ZG3e_aHVJeD1HepvZ0stw_nT4mv8e0Z1uPNhHUXAHCIyQufDO04-sJSxpJm3YHOokomYt7Ky6jSjE98kUAV85I_eZLbdeXTEIC9sRJUXlmfT5HckVd5hi4S47FMsOEvFwFPj0_-mokaEKbskWlhS86fO2rzybh75rDiWFC4sB18jrtauxSC-H2mYGpYdOstmhItkhuahWRGz6jnSTUvkF0vS9_4Zk5D5zefp", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117132725108591099728\">บ่าวอุดร ออนทัวร์</a>"] },
            { photoReference: "AWCwydjk8V1FVzPFEtqbJMY-OW3RoQYLFlUswwo1Q-30Dbgm9rSDNmNvOv9QwhmseL6GQGeU-N8imWYQbmc6owuZ8wl0UdPy-uOWmR5nd0lLUm8QKfyXQsFvMb1vi8mExnFTCfyJ4B2ZwSEm3wr9EsDNyla-xul8bVQR5ccpD5D8HEHsASNdFbqmYm2_Y_Y81QDIdTwLUr3BzpKQkYMuoqfCY_lx7kvxlV0C3tBTONGF2X9OhJch8Ej4rAfMTCnWtq6tohcIHfCBbU7ys9d-SNk_TIsItJMVeKy3JihkomS9iCXaLfwbwC3nZtUCA6MNtvAJekstgdfhwOlrYXP29YzDNHd8Kyv-UlXepen0DVN8TrkmENNjDmvnlogiBCdFagjnTctJNi3bCfa2n2VxidbPg8L_r-RlYl_qsZuqqU0FaETH5bodASEyvoGq6J4B-A", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117643979711472724259\">tombo gokuraku</a>"] },
            { photoReference: "AWCwydgfaQyK3bIRhwk815eX0OG1Vk-S9auFJvqPJXGsxIWgEw3I4DQWvkxq55DGzvFN2n4py-r5P0jsJTkV5SbTxIdxKj001Rabt0cZ7TJYhqwPq_NuKTNAHHajhzcyxci9kOpOsUVBnt_Ia7gRbsiLUwu3N2av6fNVgUXrEai4sT5VCgCz5yeYcnSXm5Wuk3v6H5Z_NpA4j7LZbLFb8jBwhAKyJZZ6i4FS35PiTM4sdpPs-DzT_BCAd1DiQVKxGfNP7sMvKNyXaALSlDOludkro97OZE9I8FP15oYVFa7M6IKitCgLaAnWMFJMi1DhWENvFvGnTGz6Whq1gCe6HHtlkEZwrfTodb01aTd7yz3i-djdq-d2ep7C4K3sklsBKZQUj-GLqMWLYjOIg0Xx5qo-rWnLJOIm1uTdnGu5TQQXHL95czY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101783179877751957633\">주연</a>"] }
        ],
        summary: "시원한 아이스커피를 마시며 편안하게 휴식을 취하기 좋은 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["가성비 좋은 아이스커피", "편안한 휴식 공간"],
        tips: ["더운 날씨에 갈증을 해소하기 위해 방문하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "아이스커피와 휴식", items: [{ name: "대표 메뉴", price: "₭30k~120k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 8:00; 화요일: 오전 6:30 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13319206750242268532", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%98+%EC%95%84%EB%A7%88%EC%A1%B4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "레이스 그릴 비엔티안": {
        photos: ["/images/vientiane/info/restaurants/ray-s-grille-vientiane.jpg"],
        placeId: "ChIJ1ceUy2FoJDERGKJjFQN6tkg",
        placePhotos: [
            { photoReference: "AWCwydibm0HsZTMsCbaTn_WQgGRjBcCMV1d1H684rNOquNua7dARrJyocGfWfFsJAgNwcsynk0OvqkA7EEyXBPvqMg5VFXeGfW2_XDNadSIT-x27ZhLA6N-Xj0Xl5pIc63YKfrYxYcRspTEEmRgjQfPzbdx6-vzXdV2Bmb8tIa6bCLwsX1QiCSVwlyceGt4kpOfBzrDrGs_dkGMNAlm7IhL8JienfesVDahbUHZk38eyIwQqA9A1cECH82g0ZO2V634YLv_8nhv1v4CgoOq-55jKFl69OSXYpwynjKF0JWXqHDBicKArMGC1MkrFqP_lo6YqMUx0z44jJZkwE2XXuqmVI9SD9Klh_aUVNBLGzMNU-5O4hy8VGH_DU7t_4UIOqHiduWd__Yi-36tNqYuw8mO2d4d92Vc7yIh57R0JaEuh7AcI3T-vY09WRG_TZq6WY2py", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103825063219251805299\">Czt</a>"] },
            { photoReference: "AWCwydj74FmXYu7y0L1qtVKhir_uYz4NQxGE2xic50f8K9XUDHgD7djAAFvIV0czyw26LX7g7C6UoYdmn_1ABfJOa0h4jpy_rRNCyIcnDK1XVHxOEe-bJmwafBsv3AJA1gXG19Mt2adS-WaMI4DSHSrBqrYPHy6EEFISRYHYvKPb3KOhAIEXA5ihIMO0qB1DG5hMDFR8I9Cc5c3rDNJVxYCCWlXDIgSMVJlsDMrKZUFtEe1epTVNTeJhzL8ia1AqsZ0bybdugZn4bU31TnYHtM3Wqb3XNusKTMkD_MDYzH4bIyVU8i3YzeLnabymglZkEPKGwe45Qh9reS_mg0Rhit6N9pz-Rxn-JXuct8suHU_z7PbApTs6y9z-6M4UHflTytTM3U3g-SFsLJqnPuRKB8nmDuSlv83Tw_ucigWAyk3JXiocvr4C", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113659106624504140288\">이승엽</a>"] },
            { photoReference: "AWCwydjYoJTOZvflvq6cg852mUsY03Z4NfZeL9bAR6pJnQqLtPwVJv6fMrZDfGaq45Hr_9zDglP02DoK4GB-2mGtdOBFMwdumlAH7xpceGl6Z3TkVC1F17z8NvtfqGb1jkd7-fCe6MysGD1BlKPLFBQ3KtBDwhSE9H7fp-FlV6E9GnI50hnc7kHTMDAR4QGOezqF3DB6Jg3xs7eLvHPCgWH3-Y4ZzSD0eAbIh0y7uIJ8_NnLrCABGSmL06I4p9YQ9hxwUvmouiE_hN22m9et2pTtwIfV2_vmErg9UIcwdeE0G6dX70fHRf2E0Bs3q3XcC6ewqnGTZo_iXOR6TPOePShzdrJdzBCoRpknTzO13nlA3ebzkJDMyToXmzhCAnP3BO_jjNy-8M5SqSZaMb2NoLVWQRWcEWQYDmlA1a9H5yODCS832OLDK5sAKKhaJ09clKj_", width: 1108, height: 1477, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115132785423857052324\">Yutthana Khamluechai</a>"] },
            { photoReference: "AWCwydjVUXAgWaXoKDjS2fryntGDG8cgLvF0VVjM6MxNXoFId3x4rD1fPe-OG1kzgTaTeLlt8aY7CI6QTY6cVeI6IvAU2FwmTEDAc276nPb6wiMEqpRlam8K1dbKxinmowcUm6YJg-0PxeKIHzg1b62F0AJjFIM2Qg61b0WXrtko3c5oxFQOxl1ovCa52RSzZK4tSFf5NdkCye13JH9unOUHFeq_6DIQ3Urop8OYg0v3X_SEnqtWMdDtvc_CG7DjeQ_GgCXd1JP4CQO_Vw9kj1nSotall9mNM7yqp7hd4H-mMtkLMXfATLy__6IvFApUvTLrnFO0fhASWRseTUfxvYBUEYSD13WoKK6kaYRelfgjH7j3I0NSYwS2so0x2WlnyutQwzfT27r6NQbp3tvfEcRkPQ9tCql_Mc8rf6U-NE9UK6Cd0rHwUaYB7gHpmO363jor", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117007814471086784729\">しおかわ。</a>"] },
            { photoReference: "AWCwydihj3ccEO_CVgIh_TBlXhdySen8HSzq6fRpg_tI5CCNsookuB90ZoQauWCwKJJDGMEQI-eUT4uN2RYS01WWN-0d3XfXmwCuuoeAWNSFQDQ6GAEJTQF8IUTJ3rRaopoJvEpylCjPzhqjmM4v_lPl84aRlI2JxoUdPxPp8k6NCwv6a1N0gxViuGpxCMjM7Y7mSjNJrCjrgGOG7Sj2P1BOLu-sKMtoUihDLtJtqTXV86TQmpYMkTdBp23sR4s8YU7OCXqOW5wsDbaJRYDlPfDTnQhcI1dzs6PibaBlVJvhwz32DuSCLtNFsRj__z7_OOP8pCqHzqt8VSDpvzr0SD-UcpWE2x0ZetNtT8_m06fQWFbRLSzpN3Yn9vPwHdsRQOBPgRgGwHXIKYTZuQ0b2cqQQws99EKMLApvsvOdjuiqHlGam1fs_MDmFFLhYxSYQxl3", width: 1477, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115132785423857052324\">Yutthana Khamluechai</a>"] }
        ],
        summary: "버거와 다양한 그릴 요리를 전문으로 하는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["육즙 가득한 버거", "다채로운 그릴 메뉴"],
        tips: ["저녁 시간대에는 미리 예약하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "버거와 그릴 메뉴", items: [{ name: "대표 메뉴", price: "₭80k~250k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 3:30~10:00; 화요일: 오후 3:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/raysgrilleLaopdr", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5239509370154492440", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%88%EC%9D%B4%EC%8A%A4+%EA%B7%B8%EB%A6%B4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "스티키 핑거스 비엔티안": {
        photos: ["/images/vientiane/info/restaurants/sticky-fingers-vientiane.jpg"],
        placeId: "ChIJPau6GIdoJDERkTMqswsA8f8",
        placePhotos: [
            { photoReference: "AWCwydjYvSRqEsI3SR1YsOLVH3o5UZCQ5BcOPknlQitfVK9gRSIkQtsB6e9GA0iTZ31eaW7h5F--6G496OW6Vl5BCh5Lh1eNvHbCaM_aknkjNdmJ-xRlnMg0XdHAmGwCA2O-5znhA9NNlI2NNruVjncEWC3BlZBGymGufj-fWnLPpKIUODa9Veq61fNVmc-ITqJuV-lQK5wwRl4oX1CYcoN7Y2pSsKAAeITcRcrcf5j3QHzh7YwmghwIhgg9x6C-PZmvDJObKmiO4NbUljdiBwPOpha3IzFjCBREMN7xbh5p_3hGZKG4MoRHe_WtMVXjDHH82b5VU6ZLB4LDPGKqZm7OvVKql8mdgkxvNKljtDs5NYjnzFNNfVCGuxs6qEh_KIcv7ANxXAW5jSaJGaKPR0paHcJ3P9yi0jOBjjeHZVjuAjg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115350906634159633588\">William “บุญ” Sparks</a>"] },
            { photoReference: "AWCwydiFXMCf6bUHDW6ZbBxBH64f2CQx60EgdiU-VdUf4c3bL6eefhhPgyHb6bSrRG4MAYk73vVsbIzB1Uj2unaQ0dvwB54z7rao6MqC-1dqrdsl7G4APfzED0wTXvqst6kuE-_0fCMxb-vLG2DMeb91JTW5uNzTHD7zMjIwP1Tl0KUyOAfdu9imT1pdDo9xONEHQDhM10LxkdrM4kEvk9YoyZBjnmhJeltTAg4StauzBkUF674ACsnrdWsOz3ZydTHz4cl0qWFhSquhlle5L0c-Cp7ifaZV7OcIkI2kiA3EvswpMXTHnfNcepW8gLcl2Zi1bua0bqWoS_Clf_CtD6iHXiLTjXRIokuhoOo6r_wjMFk4dwz003c3Ma_K6mUr-HYTMq6oDZUglZ9AjII6C5sW7ttJjVAQ0ND0uT1o7kgopFT8Lkk-", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112103153114880951613\">Marc “Archaeology Dude” Henshaw</a>"] },
            { photoReference: "AWCwydg19j-oDBt8B9oMPd60EdKfcfymxV1UMwbPHwaQjnsiber9oyYywwcvT7sWhSYDyNjggV-FXshvuwu0ayHI8YUh0Rpk41OV_nrHesKjKTMdXhhutnEkbZ9liIcVgvRfkDwu-JsYd_INldmX7msrzRamOpa58B7-ydKSP54bKJkXUOEYHoxeSYi0Hf9Vg5hlXnbv9JXS1ZxdY6uROnwvf160mrCHVVKEOvb8LF2X213nCsacECmD9r2DH5gYEnZOQAwENFe-ZjCMA0CmtHoiRw4GV-GJNOT2zPFwhM9X9Fz4icZKPro4raRj3tU0Gj40nc2XSm1LQyykAMgMcZ_E5KyEMn8pJszC8eknNp1ugK-7Thq-npGwy2YaZvF6QePyM-POyFMGz6rcc-UsTTtCkvB9hs0zghpomPUHgihoe3WaVqqhz5R0rn6Y9N8kpw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110903337015697136402\">Chungwook Yoon</a>"] },
            { photoReference: "AWCwydg2pvi5bQl8RuDs0RR4ULjhORWKeLBDTUwZQlRlXV10ZTfEluNPeRbFVilhZj7a4506kyzUAjeTqblEkteux4UztbjVt3N2wMztQQ3kIcI9LU5mxak5iNbv4pITH4tmXzape1XnY8P-O5rmBc2VxCUiw3qoz8qyNfsVw8lrYgOWuQl7U6jcu8O6uWmLsideiA97UqAU1WdAhektAgAEoLWeLRB2YwXHkIZV_KFsIBmXnh2S3yvroLsT3PZFM5lCMrWCgJUQPas50SKOB26yOCb1PuOKPWeD3lh0Fx_gtYaTaFetmudWZSp_3GDduN-EUdNkpgynCPWix9cl3Tba36p4QVNFx_h4JlGUBawo0tT9fAQ2_4B7lqbBMbEqB2pjq2oA2j33iIgJzDd1FHPRnrpVbw6HUyRiDlEWHbqz1vPtUIUcxkgSP78L99PFx8s-", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101172096206336406271\">Chubby Hands</a>"] },
            { photoReference: "AWCwydgX1fQtCE8K3Ldl8WAX7Sid-E8C0rT4ho7JxIlswx8e3YxEdDX7DL61hEYIeCOL5pH3dtfVvk9ONMYkb12d2ZTwcw8waChuVDmS_zJbZboSYrByFu71QIQ_gnsBOIjvj_n41ApehzDNh19ID5LjjH8LC4VTXG06Nuiw-Dmc_mQIOa4KNVptv_berrbUo0D0w7tTrjfkT8CRD0gWaAvPTw_3EBW_348s8ZsIZFKn2VRKa1BhGRNrxit9k66qkS8Rgt6V6fWJbEke9GQjFAKPjR-QGXpu_adfpfM7nHrt1yghpDpNqN6fSUkAYKjN0pAt3-Ueui2GhqWPXwfcLUW7AgSpBjfQcE7BiJM10d-AExU8bnVa3EBh3Z938goVawWRltVtuaE1SKRBL_Y23s1GMDTJ7OHGNJgO65BDjsx5AqmyYw0MviSsSB9XktsmtowS", width: 1088, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106913548638002327845\">INFLUENTIAL TRAVELLER OF THE WORLD</a>"] }
        ],
        summary: "여유로운 브런치와 서양식 식사를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["맛있는 브런치 메뉴", "분위기 좋은 서양식 요리"],
        tips: ["느긋한 아침 식사를 위해 오전 방문을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "브런치와 서양식 메뉴", items: [{ name: "대표 메뉴", price: "₭80k~250k", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18442521999309419409", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%8B%B0%ED%82%A4+%ED%95%91%EA%B1%B0%EC%8A%A4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
