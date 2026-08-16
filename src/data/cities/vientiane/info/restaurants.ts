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
    "비와이레스토랑": {
        photos: [],
        placeId: "ChIJKcfQYBFpJDER_ZRGyNFkiLk",
        placePhotos: [
            { photoReference: "AWCwydg4kBAW13XrFbpuJrFNNCdt4OsmiCW-YlcF7TQyOHSgu1h3EBsYnR0Sf7qUkB0uUTX9Y64nwfjdK_hN7uBPUhwqIkaSjw2w8oFzSnjSnSiba51Yj-xzKLnowoBhiYN7vc2rtO-0eEXzHySDs4kGVHfoKxx558uJoXtfIcnaIEwegusFsY1lhamJID_UxM1JeVQl2yBvyQ3ANEZZ3TjxfT9PEwEfJvcOnVE2tgtOX11wtcECONsccfONbY_72q6amYToi3CXrHAOPGyQZap76ML16U_XGxqTkwKCkDB_5EKbMQtiE8A6piKwCxkGGXIJfnLvf1pUjHZwULr5I1-VnNZGs2wipaVloFzKVPmrtU9WOo25vpkH9-RFXkNnCvRyWeK1YbKHOhOkvfBt-Whf9ykVDBBSroLlaVMedEe-JWSwEKW7X3UdfgTDlJFw6k2f", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117583748434868317071\">비와이레스토랑BYrestaurant</a>"] },
            { photoReference: "AWCwydigYxRozpVZzwrzUSvMOpBd0CItuXAw6_AiGfZp_tCkZPqYNPFHR4AG_b6Kfcpx6SigsmeH6AKNKm-23_xvzn9M-SCEnaWRqfWkSI5SWcfkd3h_NB8lGJEL1Z0PO05hRzGftYskTTUfZm3p7qm4mpt1KlpvH4hVSrlm8wfayTt7b5bditHWjU1e05ike1PW6CAaXwwNxCJon2d7DxKZhKd6-zH6CC9jV8z1IYeQuEd-cAg6if0oA5F3E7wsO6BlWX919eOOV32Q0dax1L44JoiY-86EPOl5PpsHCK6WBmVb8VCQfEni7pNaKal_GZyTLaV1sqJ8fktqhnVRJklUCHds1nytg50ydej7rfchF_BCUFUQwFBH0fwYdAaG4-OEESltuVUALx9ayyInt6jnTDUBBUE5xCPxT3TGmraCvmTmI1Mn_wjNvs84eOC4VOjR", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112129826743408582352\">รัฐพร คะชาแก้ว</a>"] },
            { photoReference: "AWCwydh9WPUnZ3dzoopo2k4iqmSiO-3Rqt7gyt0TgZdJsQoaSltBV5BH2Myl7YcoAowKpwhXx7Rx9nTykq0qKZ6CNnmKuvgRdCQqWTESF2rle4AL0tfztYxZsqvnmXDpajfk9F9qJg3CQDydNl-V4xBoyumoplZ0mGy_zmhYSqz4iK-Yey_E9s9SBCkDGaQHe9ZCEkJEFhF2KaB6y4gJTJHUzrvxKYvMtrjEnNzsO8EJ94fIvSf5fgCJp3PBnuvAOGL1IWjC9Hm25BxkTv79zfTXjsu-eNuabaF5IUU_hQ6GDJxxx-lqwtexqrYmKoqHrG7lagh_x5V91p1-EXztvm0RCkq_waeHPkjMohqPuCn3BbWp1KT0pYBvhFaSh0tw_HuC-jxGZpyXhpaau6w_93zcPjryV7hKuSke4Qmxbf_gY0kGb3YH7RQeU6vcTo4jcE2y", width: 1414, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117583748434868317071\">비와이레스토랑BYrestaurant</a>"] },
            { photoReference: "AWCwydizYXokqy1FJf3u60Uehn1h6NIDwf9zn0CZyfcl_cKyt3goG5bSWi-nEko-VYi2kSQEnGxjM0HmXguaC1fa1c7FS6SkCJt6IRQIsgjD6IMhzKiBOSuMPTN3c9x5xnmFwEQYnRD65BdG3E7TUvNBYpmoP1gZi5rIMwqF12X8Zeyyy7-ULXN2bElmvMIIJYQuYyGHu7BGgCvAdpyo9A7g8Vq-q5nhovF637aXHVwCWKec3CgvRtiJy49xa_S7BwSK6Q2ZaL2vDh1S-bJ1QPry3aM0gScObQ2Q0aIe3697BVLnx6n_s4tjBLsbfZcoFIOAxW0YxuxnEuu1RmzGXf_uajhGhRb8aSFtoiLoyWPgTonzA_uYchzCx9Pz9yXj3bUSoeoaAgnGsMadxg99KkRs4eQAD7mWhRLqUmXRhqTLoDu2WpCMhBNTVWqujv2txYOQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117464384237557408916\">채건형</a>"] },
            { photoReference: "AWCwydiE8HKIKN6Vg13_yg03x5nCdSRVayI7e4EEddOCMUf11X0qf5ft5zlJ_vd9k6RU3PdeNJIRYof6s-qPtqVjEL8XDrU9NaRdp1LZcgQJqLUexYLBJXBxPPTiDgwSXgUqPTBT7oMNJW37QzZczyP_K5Vc-LDPS4kkQMfDdwhKdvlMYl9NyLOY8KIn05LU5Riv-f8iDpEbGRSmFBlXNH_O0bIfr-rvqLkSTIT8_C6cI60zPzeNrOWsbA2mNAJIrqmeavB4wpE5Q6boIMdFiLPy3Fy5mlpDkU3bJW32gSttP2zYt-eoMuRMAhf-cGktPO6dckqLh9YrXz-FbVNPRw2ZdHKPGWzf6HDUm4_J_G_wj3azl9fmWGa83TYNMEIIqWxNR8BQOu4Eoc5z3erRnATi2ikXB3h-6Qc0EGBivO-HaW1Y7UWVTpP7qOB1Hlb-lQ", width: 1414, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117583748434868317071\">비와이레스토랑BYrestaurant</a>"] }
        ],
        summary: "높은 평점과 훌륭한 음식 맛을 자랑하는 맛집입니다.",
        updatedAt: "2026-08-15",
        highlights: ["한국 맛집 수준의 돈까스", "평균 이상의 음식 품질"],
        tips: ["메인 메뉴 외에도 넉넉한 서비스 제공"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "돈까스", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오전 10:00 ~ 오후 4:00, 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13369046346020328701", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%84%EC%99%80%EC%9D%B4%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "여행자포차 & 카페": {
        photos: [],
        placeId: "ChIJMZgxJTBpJDERBw9eMi-kRls",
        placePhotos: [
            { photoReference: "AWCwydgBcMZZWM_Ot2UauY8OQQTJ-PxrNgsmk07KvvnT_bEq_5QhGumhuzqDxd5QKSWY34DcARC5CQnOtXMzPWDK_K30LHzYLHWZoRA20rzbqxO2us-T30CuwQVNaguhyZ4IBxqHx9hpncG2iescAWoawH3Rnqa0XkqSA5K4NiV-KeSDDfZXZFxg3aGPHQXiW3JKMlwlCjK3c1MEbEuS8Hhx70ciRS1VCFdTLLN35NMUwBo6i2Kl4ic0CPRB0E-kKW2Osa7GQbFVhgIMoV7ZgE6-juthHQMVY2H1iSqReGPKJDjUBEILvj9vLIj9v9TM6zuB4dEooHhR5PNjjJjTamr9pFR4X8DySM8wCz6bnrbXuZrBW5u7Al1i_Vlq29boAX5DA7w78a7e8xVIYdDJsohfq1RYGfmOjUq1w1tWKdYC48-JaEdDCEME5_8o_ymhBd0e", width: 2080, height: 1387, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110442371011037811641\">여행자포차 &amp; 카페 traveler pocha &amp; cafe</a>"] },
            { photoReference: "AWCwydi37g7l1le-nqNnAXrAitESRuvFods3XOA0NX5LjSuFF_7eMyEJaWpVUU6r0ev3q7EcVgAF-Q5dLTw1yXpiu1vPEnob6ABorp9JNHMJkfd5huhTTzHkRAc3W7_tLK0oUha21ynwykyOV8puQuzAD2HtgiSVUQ4ZQtIpGAnUdn71_AtS0i5yR__pPtlLEE_W_WeGTOXt_R8zA9DIeZ-AW9d33AdLGTiKDRAxLKKQ-nYrrUtHyVCuJa5HXW4s9NCitqBB8GUTd5ngIl8LsIUBCIP0n73ttuvm5tey4y_dwkfW3K_8eyOWEXcVaShVsWuQOQiY63nE1ZA2sd3TkCf5QBUqz-hDm_igebd9OXNT60uSMnrjABkYQlnjX9JG1oFNiu8suW4MQuURcj1eoIO0a8_xER3Fn0nHD2vZlF4tmP6qYA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115281435780702038014\">MINJI KIM</a>"] },
            { photoReference: "AWCwydjAI3UI3AmM29PE703qzglDolSlC8ljevGBxtgg2mY0TAKTx0dsYv-YSSJGSUiUxvHobarswx3tkbVF6bsJj5PyYO5feVX3Rvvn022y547U4LV4H1mfO6q7c7WxJM5tX2DxHTg3bSYBPKAudfjNWmsuP5lSP1_eTcKn7QR3lKLeOpDETv669o_RUEMubIboqp55OjAUvAPVFt3-Ok0atG36ZUaIEXK2D-mwU5_uJipb9Qz0dqO1zzt9E4tXBVS4ajzquYiNfy7Cf3ye_UlsNFjoV3GkKRv0zFC3w_kENxE_o0OsaT40oInB0R3Dmc8Cti6hB7Z_1JvkTn9amyAObkbL30Gp0Ej3C1Kz5uMhcP0caeNXP-Jh8xsF9n2DTQlj3X-XC8k7DlOywj444_TvLL5qrVvT2bxcLT96yCxl06ETSAc0kxNA8W-yrTgvbA", width: 4160, height: 2773, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110442371011037811641\">여행자포차 &amp; 카페 traveler pocha &amp; cafe</a>"] },
            { photoReference: "AWCwydj4cb0F-gns407iRUsdHA4900RDes_V3NByiJgKMxePTaBnzJ24xALERL6VfIqsYqHlcPxxLBPJVAp6Sj0PLmhhDIZ7CfnPf7qnIq2zHo_Akmj2hG9eUFtH1Fu8uzgvk4YEwu_MQgOnTA1tAPPcc1jHQCxdbpQFZQfk6VoydpiCkNahV5eDpdP043YxR0sqQVlu8YqWqEhPlvObCHYSv1BmjI3Mj9ul9pREB6K8JaTU4Wed3c6zke96jWo5urCdQj1DZ4ht2zEJUiXfu5t6wEdLBTB1InK2pW2ixnhViCBidhH32VRYD5Pys5Vo1Mh-HVvagfYgBkpz6yaiR7MvPT7zD3-jUwNn_M3GkYxpsab3hGrohNObeTF5DndvKyUk4VOTJFxhGAQeKFbWhdcXTgw0KBNCby9wWmNuR3CYz8WRZVMC2eAfky5gmTlKG525", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103147741158230017261\">Choi환</a>"] },
            { photoReference: "AWCwydidUcSNNO0YwMitM74Ry4S5O7n8D2cvT-iPb7ISlihhFr2nM0UtqxrPdTNwCy6Duz6BVwXENPMJv3k5XMRxydJDxCAR91iRpC48biS085Ma9zUgJenX0lxEEhS9ibJXvlbXr7MAe6Jydspbv8vHZ-uwXMhTN352_yQE8wUnhCGpHI5MGeezm7i2HODQV7C4-wwKD1uH-qE5l4JiQNP0iujU0nmqfSjkUT3CdYJ3GWv80Sj3vd4K87I8Xpf0ZnbKpDK0mjubeIEnXziH9nMjtu5hjGiVIfnuwk0PGyqWYHTKi5RcLIJrAOYQqnJUzfyZl_cCTK2YwEAMQMcRXcK9wYpN2uy5LH6R6taB4FPVj8Tr0a7vWbiGG66PMs1oK9esh5Izq-6vtkTQ3t3SbFL6ynoadJQjo4iRirB5JcitdCiagf8I0D2gV6WYmMYpWg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109016837413557530205\">슈마여행sumaok</a>"] }
        ],
        summary: "높은 평점과 푸짐한 양을 자랑하는 한국 음식점입니다.",
        updatedAt: "2026-08-15",
        highlights: ["푸짐한 양과 저렴한 가격", "친절한 서비스"],
        tips: ["김치찌개도 추천합니다", "한국인 사장님이 계십니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00 ~ 오전 2:00; 화요일: 오후 5:00 ~ 오전 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6577124828436631303", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%AC%ED%96%89%EC%9E%90%ED%8F%AC%EC%B0%A8+%26+%EC%B9%B4%ED%8E%98+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "한쿡 (HanCOOK)": {
        photos: [],
        placeId: "ChIJEX-xHylnJDERDS8xufUE8Eo",
        placePhotos: [
            { photoReference: "AWCwydgm_isKld5reFHVuTUbUxOZtlaJfo9RRB-4hHs0XgHcmLjbps2CujXMf_JrH402a2f61UVxYLxS2Dg7ypkiH1UMuMLZNfg6ErHFx-hHly-j-EUkg9PBWDkZ6RxGd1_mFDrXFswGb4wZJjkl55d82hQxqoYEEKB-Ywcfr5eT0WB3ak7lvlL3i4avtRJUbF7LRbq6Ol8UGXPXVz8AbcMxPM_A3dlxlIndudLFTzWRCdQ0QvbKtopWWqq399hRhpM8sXKdz_LVHwMalKy09Q6HaCCF5rR4zRcPG6NiH6Zm6QWbbGuh8lABtPay6sXpak2h75mZ610lBRN0C-LToey7cVMhEUxuoYgL_MpYq2WK9YPjYL56wlyj91lrWfkQ4pyoumbTALldjtCvTCZ52-qX1llsik83YhIyTdRd3r2r6tZbDQ", width: 1924, height: 1443, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110516859400635109612\">Thanh Le</a>"] },
            { photoReference: "AWCwydhCwAPH27CGDZemF3TXCFlUVMZY8Q3pHeHMyZJXbMAvCv8Pqm_19k18OcKUGbFZpPMDa8OR7ehzlcCHGPWhhgU7dDfK5xt-Pf7UXEwq5FOzIWnxRaRxLBERnYvfhCm9d_4-PhCQNfyQmXiIoRpslNVdR7HE9XG_r929tAUs57XGe9CeTrvXs9NaGWvYINs6065QTTdfLuWZ_2CIA2TPfGXZQlXMYx-FZjKrFQKKzXafUESJD-ZsJ6jhdzC_-7ay6rjJgUZU0jlBkGb09s37BPhyBt_gSQCF2yT79vBKHjpgO6f_jCQU9F0GDNmDTVkBIME1OYzleKtoiUIP8JMHv5_wtWn-_n2W3Ld8O5zeeelEjKFV1yAn3H5AA7BE7H9w9m06SZ3BZkWYbWcD0nLd1XgjUp-1e6X0yU88GZgOX1tsBb69CfOywxVZqfU1Csno", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103845400284743312555\">Tony Wu</a>"] },
            { photoReference: "AWCwydhwFkw6iEHDSjfwYIeuLng-z8dDAz3hIJ82Ou1ThPBi2QtIO34Tmar-B1QV_gDZ2f2F67TTUWekuVM46wkTb1Zpl6UgSSvgE0AYZnkAbxjjkMasAcL1kjsebGai_xWyCLMOrHnvz_jkKGel0vquj0j_WWOBbeHZUODRZkEztm1ZjnecHVl3gmyCPRDZV4u2Colg7SwxiDxoZAaOGC_Y_oa5Ptixe226Z3qmSO5EzMb5037YnMOsFs9sOTFJHN_PkjdNPtqQeg-eYqGibdvlvJfwaUl1Ft_-VY2tqjQ3TMuVDRa5nP0ZkgS0r1EQBwVLI4tpehHKAUdKCq0cgsxgrDK2R5ijBd-ryknqjC-ANd2q_M3wQ1Ja1MY9eCx5bjf39ZsSdZ4FA47qhlIgcY3qH8ldu8PbzDjqrMXVWloAF9OfZ3oPBsgWXz8OAjaQHy0G", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106158524785740987191\">미네</a>"] },
            { photoReference: "AWCwydj8UXOJZozOhUlzwktvU1OXPMfnV9qtYaxpyU6NcF5PHCmBUuFhV5B11pIgUzA5F7KeETDOFQK6KaEj5gAuKFK1BLEQbpyzRLOtyrumoguprK8Vsk0niNuzwdjUEEnP-qVOsCbO6GumQ4X0Spp4Ez8ff2joifZYlia3slTcKVc9eOStvSogKNHvZaYnhwjCOF9FWeAfmo_XQ2vOUP6p5ZhNhs3KLbWrzJJ1F9my2lbVDuwzTL7VFv-2ieXhtUbbBnFgK821DsHrmQoM3T0jpWRYM3pEjvyl-XNTWMsY19HJI8FlUSVWpyOWDASmm26W8WnLyGhFf1OZh91tnXa3JeY8Pyfjn6fhUj-8C91HUYsQZpl9lRRStbRXjWCKEq-62TtOiBReRU4gy8IwrjgMfRWWwETbY0k_isAqUBeTX9C5SpGLyImBJ4ad5uwaJjhO", width: 3552, height: 2296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103944107968025624397\">서무극</a>"] },
            { photoReference: "AWCwydj3AorHhWxmytPynEP7Yn_T2qz0GRBNl2BFkhvx3pEFOCtvBIXWqSzUQKeUSood3BcqzXcY18Dg6v_Abe1zJ3f0cqoTNKFT6xQhrtmahCt9zsCl7As5IxFF4Kapmw3hdCHujy36LJvM7fs-mkKTyTjHHBHdFKpPC-cGtngXIJqfSdPDiGb1RBeB70hwZJQ_NIGUd_Kl8qFJEcxo2BvAa4vH1kdoHte9rIOjm-83zZ4tsmNCGEHMmLCoFqEz3_xaHZFBruyxjW03pRN3FUl2ClbU8LcMVZ0ZRnBEhhF2dYYQOBftG0FwlQlBSDqP2wjPTWKdp5K80qX_WnFteWn6KHIA7c0XmOztk7hftZPhb8NzgJyDpRiM_3x2Aaiy7rdNbaVXSiH41-_vtDN6rFjHLeFJY2LPniFiuBEGg-_avFzIZH0_vvszxZl82zkHeVJP", width: 2480, height: 3508, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102570944254034678987\">HanCOOK (Korean Restaurant)</a>"] }
        ],
        summary: "한국 현지의 맛과 유사한 풍미를 자랑하는 한국 음식 전문점입니다.",
        updatedAt: "2026-08-15",
        highlights: ["한국 현지의 맛과 유사한 뼈다귀 해장국", "흑미 찰밥과 훌륭한 밑반찬", "신속하고 친절한 서비스"],
        tips: ["남은 음식은 깔끔하게 포장이 가능합니다", "식사 후 근처 대형 마트 방문을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "뼈다귀 해장국, 탕수육", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5399821406637731597", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%9C%EC%BF%A1+%28HanCOOK%29+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "광화문": {
        photos: [],
        placeId: "ChIJhZuWVABnJDERA1RRWJCkx4o",
        placePhotos: [
            { photoReference: "AWCwydhmWqGa-_KrSTBFQMN-pzIrdMmloTfw76-rRKkXF2SHYcuw94BARoNNXqcxth6GfyhjvR3H6iopunfA7n1lhqX_NFhlgmIvj3kIvXTSZKqs5SFlj3_W9wt3C2Rlrm7E3acSMu-vHWhO6d6TVK9UnzrBQD4gRSZN04kogHAHd6ZA6nP6unxB4Go9TfcxOr1Lr67o4ZPIKr6xqFaVCICGJQOpC-_trmMd1Glp91I9gdwRfWMaJeTQ9K5TJwq8aVSInE0G4akQsoyU7HKecVFfDAdikEpe0R5nzqqppHXxXKy7a9tbNGTb2FAXtmdWtEYDpTwG_B3gYIHS_ALXOUUspzSqPpb0us15h8S0UYi6VrDlQVFaDVbpfl7MUH9qQoH400gLh9OJP5KEppRvLw2lffulzVy5xdorIhdVfg7Y3BCiDeRS5JJGXxvR0uyhTg", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111307118880300678731\">Duang</a>"] },
            { photoReference: "AWCwydgO24f1FVnhSjoU7MR-6gyDvtj3tFFBD93l7PtXW8J2V7TzDzPQ7jKVntu-CMjlz8EbFJL12lmSB79GwaNDzGq5eFxvpWFVwvy3guGJ-pPhL0TrCxE8ap-gH5vtLch3GwEv0tZqNUSfyoeye9dZqRl2dki-8Ujon3vbcxdAFXIgXD2EJy1xMXj7p3Z5Vwz7I8sgTZ7P5RUIouZp5liGqEeHvIdUNofAxHy3st8EHWNbBB4nfmBdYJm5fstInoD3fh6RvNDqcrbcd1fLoyRN6STMwA74hLvPAn9uWJd2nYPkz7XFjiXfYeLeExE7pIxVvDuTp6gIV59SgyCGLcuyK10WNiJXV4Be9L6SzfbNw2YZ0bRagqqNXgvqzBcDJhcdGTJr3z6f27v6rBJ6PJ06zqdKXmjo0VfcFdRlbXxbNw4dzVUY7NGg4CkOK_z2yVzl", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107923841833977983571\">손진배</a>"] },
            { photoReference: "AWCwydjf98LIgEuXhvIG_3rV2B-VYNYWHUEM879DANmDXfV3TECS9c6WowXQgxePu48nGvKm3qDP_5JY6PKbEB2lAr6A2VXC0DlgF_m5In7EbYHXruobjdEGeR3Lv5fA-1W7IOtM32XGZNxddu2Y4rXAIbVNp-DQ-_64FrV5B-NRJVeuRrOObpw5JvUoX8YK1iiVPCyB6kVg1e_UIRCpbBZsHJ_YGW3Hyvpf1bcMHvI6H_UD4lt4CEt8FSsNHMsY8ySrmZPaZ8zEGA4apWmDb9QkJvySvjiAZQlmhuPSMh0vtdY-xHXb7iJdiy-gSfHMkpAtG180XONEPU8q9mtMr3ScfZ9EW4jGXaaiI91nCsDyCM2U8ne41P4y8_o3AJs037rlncflRYcS2an2mUE9UgiamGuNWAzRcLV5KrK-bpI4_eAMKyG14JPShSOnWz7qON-T", width: 960, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111307118880300678731\">Duang</a>"] },
            { photoReference: "AWCwydhB7V8-TrwtL8RlpBbojdtb_lgmCXSzPNU8OzNWd_Lnt4-eQkLJNONuhAwO5CNRZOVBTgBy4tKYP86B2WXATsMeCSc0iFWOfEGAL937i3_7g_Xz8OFvvSqi-ASxusmTC8UaD416HsMwG_EU9Q2VLzFXj3tC4wXPMDWpQMKPC9Revj4l_9__DdfKAaJu6mSIJCKa6okIzQbKo1LzGAOgvMRUPJDaBOlde8vKwnKlGRs1PyCMFjq-6zSvlqbOfCeJR9ogIpguZq2mzak4KjaIpVNEVGOopiv7Od_Q6MitXLC7uDPLnSskHxDwkCEDDTn_1_ClRNPdw2-jjc93uvCY6RdRiR-v8Ash7GJKcZDC-xP0Frq7mkCsL3FhjpdupIRE_S9fOuLxuPVdtl1kD7x_CA1r7wuBPso7H-QzWTlj4J3T0kYMlmILzRm1ORjpXLKx", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111196370267644916638\">김가자</a>"] },
            { photoReference: "AWCwydgCDPX0CTjTrGkiSTBHin2ddau2uea40OWQ52mrqDqTvtxLOcZx_TOJa0oRXvrDqDh5bh5ooHLYwQE4deZeQdH15KBbyZLiqv0Aj_xrMRqXoLI6cqCkITWfZ65Z0brYy_Q-Jagv9ylBSFfIq6swqY-1itfy4vB5DEkcJcg5syiaBc-STEXJypwGeWVfJA_Dy3SFDLfiHFPUMjlUYG2BWXbdVilapD_mURiKTJaS6BUrf5QbxZijblDKHlhivH27oXgDDdVYSVb6n4dKyYzQucEMw5jDL617OT5kUEX9_HFsOgKJH1rg8y3R_wcn8vUB8S0uT6TK0UMCF9HYh_MjgowkIGJNxwqiAGR78Jj8TkHYFxR_HQez_yjmjvBG1gDRrCOsJl-G00Kq3yoaZ-hTWOqUpH7i-N6wv_K2kK_juaTHfU0eIqGgyxtDs-bdtCnT", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107923841833977983571\">손진배</a>"] }
        ],
        summary: "현지에서 만나는 정성 가득한 고품질 한식 맛집",
        updatedAt: "2026-08-15",
        highlights: ["한국의 맛과 가장 유사한 맛", "신선하고 좋은 식재료 사용", "혼자 방문해도 푸짐한 밑반찬"],
        tips: ["해물라면과 주먹밥의 조합을 추천합니다", "미니돈까스도 두툼한 고기 함량을 자랑합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10000142437463446531", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B4%91%ED%99%94%EB%AC%B8+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "요리 (YOREE)": {
        photos: [],
        placeId: "ChIJD_zR0BdpJDERbk56FvewBSU",
        placePhotos: [
            { photoReference: "AWCwydigq5vAeazdYy1UNuUVyMqEzo90gVubIEkntFPbUr_rgOVygWFR0LpDSEjmwl4nfgOI_9UBnB85KwXm67j6Rh7UrsOQ00T94YMrYDvxBVFC4ldP1ABd86ZqiDQVKOGb4_1dPZu3FUyW8jdqY2nme8bNKYBE7roDrR1wTINEybAJugJfSqsPHceds5CZk521bUF2KogmQcd1XkzI3PmnIDAw9KviWVe3VZ3dQkxYZmXWfj6Oh3pvXsqEsQBSZ5LrsnGBclEbIKxeWjxu8fVnIxYp2XIuxm6Ei1VagaRcRXWaszedlWv3BP3PZw4JW77R5LLOeLG-rD_kR1wF-x0eoLssCeY9VJF3xNphsX9vx9xpW8zmwZu1FKFX8eCA6oDhsAI3R0jRuBxvPaP2wKhKtT3IZgbgW7xUdiHaltF0MLqGpvd-7ejLorvt8NEMb5YS", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102585152371286052964\">YOREE</a>"] },
            { photoReference: "AWCwydgddB8lBZjnc7bqJuG7MQ1NqQ96qSNqMIzaaj9lm2j-_rrft5r4AM3h-ofX1fV978zFav8OaKABUdhAMdyVCBmXWWe_RbK9fkyfFWDSE584xP9reca2DYRyqAoJHepRCpKdiKHMawMK6A9VQTC-9Hc2o03dOiXKK1hrv1IABdyD1dWe32RE0ffoW2iTjEFwizhsxFWn2fFdULi463xwvPQbp2CsfyLIG1ym_CWPMjF0864ALi1-IJhamwwejcfXoOGyIQT7UD6ti7mtjY69zZnsqwm5QZStyyhK5gdVEkuu7zGa_vil_fMFWUan9fhidLylyObRwr7j5hEE-bHQQ4qIKXsTZHgqL33yRJATPfB5bs-dzw_pNqLd0dCBycipeL0yoPT8EMng9KxcDiTCClxJ_nR0dXebVBljyIYL_nuWqpYxKOQXpOtkhrRnhA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116451034014500548454\">Fergus</a>"] },
            { photoReference: "AWCwydgb5LHWRorCDyAd8rXtPLcefOH3RWNOhM0gtVsSzcuDaU8l1kBc-FMW-qxUEODmO0FYYKlDclEOpgBeat5fQchHc111gteqktRTM5Y0_KnB-Vcb3lYG6YyfqKs5MHiDtRbmxzATIZhnXoARO8L6h21lB6ibXa41dBkcWrykkg1Hr5sIu2irtOiHPulmkDV9PApK5ufjGnIHiyEuMonqo6iHvmnv-nU5u-2dCcE6QQA1bNfod_MNQznIZquoeeJ-0grzKvpmHNJrjIKrlxPvDw84dkGhN-s2BDkMntYIUYTi9MktY91N5Ie21WerxVlqAUcl1p7gn9E277k7hBfWhX0j1LaSEGb2GlgytxKGl3zqOYcWxoUtsnfByodzMsNr9-Iz09pJCpA5UnaT1UWcgosW9Lj415VSD8W9gvugYv_rfI7jiTOvFmRWM9iedA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116472553338988160965\">1301 taiji</a>"] },
            { photoReference: "AWCwydhUGFF-A2aQbKX5_rSRd8tELSmAnGtsnr-_dpe03GmPDn3fp3uDI631rRvK0LmahjEyuDHkXNv1sS-Cd_VAnNMS9D3sb5kJCGmLRb-FSPWFc28AylIY9Qc-05HJfQ4m2s7Rtbl0c_OgAMZIHhnaxLg-vZwl_M-E4qyVHyQmKalXmzN9W3EuGozlw8HzRauVoHjQ3cNZHDA5OSC7wIHBEAvxnzSGRQcrhUD5qMJ7OuqNSoramsgLZz8qU0lATijCfJ3Gfya0zqrjvWCdauxCPc0vMYpEIb0hCKVu0ubtQDzCzzvkNa1hN9kb_Fyj1Z6wr7y7mwKMNH5jAPxIzDtAG1ktdEf0MP8PsPmDeItUwxAi-9Q8R5S7xBXeFnostS8KPpm858aY72UYhBVweubrW9wWXF_a08RTDje8hXgAAuQ9kDttXRx7Citvooozudx1", width: 2480, height: 3508, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102585152371286052964\">YOREE</a>"] },
            { photoReference: "AWCwydhebvNpCp_wBv7F3vmc46VJwk9hpNTbhhoHTRTRkGRHSqETGB8Gr8kUaHwhW4sJ82fQwwoSzdXSolwLHo2MuGxPSquxgTkYcsJXMtr3adQNn5m2tDIZl7GoliR9Z3ArkJDHYomhxRbm1k7BhZ6PMQ7ApQFNt74cVUR6o4TWvC1ErLZ-d2wYnQ4KUlCwRCH6QIL0xbTTC3Qjn-l4cqPEkA8i0vpRKi4keDt-UULkfNGflTRhqX4TKLMKdmAzYzLfMZhUlEpUjaoRvRLTIBOaW8hIFzdCg9Na_-XZPeMl0fMqdY9mfF4tGWCThz7BXrMIPyufAM2JtNh7J3MDt9lUT4CBMhfB20h8EVVUklw8cNl9ZGIFA-XEbCImOJHNf6PWoXmLi0XV5sRq1vlu688o26wtiauuzhoOmQTYNsZYQfoYycVbpxaZMtRWBLNzCXDG", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106158524785740987191\">미네</a>"] }
        ],
        summary: "베리 우유가 특히 맛있는 한식당입니다.",
        updatedAt: "2026-08-15",
        highlights: ["맛있는 베리 우유", "비엔티안 한식 맛집"],
        tips: ["베리 우유를 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2667732929567411822", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%94%EB%A6%AC+%28YOREE%29+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "이자카야 마사": {
        photos: [],
        placeId: "ChIJdxjCGHVnJDERSJb0mFU0v0w",
        placePhotos: [
            { photoReference: "AWCwydiDlj-HqHS6BeFF2zLl9yjSpMlgczp-ykV-FAcVT-Abhf0E7awhXO6RYplRDAvXTToSYgpa-GFwfq9jqUob6GBwAFDio_Lu_EJWmN3CijZIVMA7B15QAzvhiwRDIbbQdVjkjdNU_jQnE1zdLXWilJcE88Ma9q210w242cbN2OoRuGsAmdtfemMGgt8jnxTnefWnVGREJwf0buVLoUXev1aya5yGihS0GA78PBK2W69FDCH2jJsk6G1TZ3vh8uayU-0DiPkKB1BxAT6Q6PIti0BUVpPczknlJfCyCAqx4ydQvxMc_IM-irkczRQlrnLIHNW-VAaKkP1bIvLdsoPahHsqyvSVwiQwBBAP2sMxrKbCD9UZIAb1tZ2duFUj9smf8T6NWLm2pSS9hsWTTxTMXbuq7wFWi3XxOXUzmBf7NtMJLEzN", width: 1024, height: 768, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105576099689252682460\">Izakaya Masa</a>"] },
            { photoReference: "AWCwydiUVwoN881isNMfeud4_UEMXQC29kjvpM18VN7AEDpGk4JhhQtWmxS9C4ka4eIx5Onf2Tn_cSIP5iw2YOAp9gd0xnAuu-bcl3aiH2DudKpy3FrMcZfejROPlQg8-ajaRT0CzU6tZYntfsGK1CWrRGoq6P7Krcz6tlI_2sOeZGLY_KA_kSbgmWYLo-EI3yujZ0cHq2z3oFaqKrcxRkaU4qdWSE8MJCzum4Xl_33qNr1CPaClls6GBLuj-ZNt16t5mkGJRlUD0tR-W_CYw31c0dlz-DcGeZpOj4mkrItEZOuhzPliJ3yKs8fyacSI8P1ALrCpk0vNlkRfVs_0NHyY7YdRg0YJbRr_mFst9NT4d0YHHh_Gv2YtCUx1eDEe33P3TPT2z26YM_93vA9YoNp5ywBIFZh-9C7EX6wxfmNOBoBXd_NlvXv5vt3vtII48Zj9", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117472867097139584083\">Ju Young Oh</a>"] },
            { photoReference: "AWCwydh4MzIU7qFYtkaCVt-yPrpSHJ6itXScSmxDsquAfNLqW2ItjGAN8GvH9RMQah4_nHBJQM9jj57J2vWtEJlP2VSK5CEcCdZ22FpqEXxgsX0ps8GU720o8p2BVPKltvHykLVximsFA_gVDNbUNn4t6Uni4hPfT2BXs0OnnnFQKMFWov4jMxLGOKLH9TahPW-QF-M90O5Hv530pEBd7qFWBmyaVRlxO3drJECjO8daNMXzD5hpLOphR_wPVPlv5OK3Q6Sg6JAHUc_Ae8JRsj_rhyRTMSQ-32__H6DoUFC3Wk5oJCWaUJuSIft_L-lP5oO9bgJbgQcC5PXyMLj-kz4kJhaoPQRSee-oaNac4P9iJkPCOBpK-h4RNUQk5dTYPBxx0DKAu-dFCfAbBtNa06xAUsuXRlOkO1lZ57eRTCprOfl8kVHHnFMJRqz6uqg_Lacx", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110314081699495018377\">푸르르</a>"] },
            { photoReference: "AWCwydiQ2wlUQnMGE7ll0i_hYJ0cF4pb04F19IvEN4vXRTzeoV-nrd2BI5qbsafOSQ-mytNI9YETjRW-5Yf2XsOp4-sEtNsQlqjVpRsSI2dX-egrv_d_b8GQezlBxN7lU4VK4bTiGBe_nwRRQHiF6DdxN_urD_b07MFMUB4h4t-wNcyhNwmD48l6UDoKQV0K3q7JykNTeKX1oBOfIgKdewjzW8rwDM0kcyLXUJMC8ieXqMQ1Vsp67jMaUZLE1lTMxuS3XTmf6XrO_pUqZlfiITS3O8hRnx8DJwrgJggAzXoSgqbonf7cAHifKgQ28J7P9J3fsvGR59cOU0wJS_-Xl2nCVIas2pvWyqYVKqzs_Td0X7c6_OygdewW_cxXSoydJzTFhi0euajIy_g7-1bFIpgaAtzhSkbFqLvKJmOuKKI_3xA5xaZF4jKL-ljNndX8hQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116509046085621432576\">Xaybandith Rasphone</a>"] },
            { photoReference: "AWCwydjgf_O4Bc9Hgm7wNvN6uH42VoVUBVaeXMzOCMu4FkDh1hLbUokd89tz-ep1w0w6SFe4gyr0r5dMXLcvDo8ChA-pBCzPe1I6RnlomUbw0_jGry0EBVvuPs3l3dtRDlYExe9_585pZ0qZbO3t0tPlRDxokIlH_3wk5u9cOj4qgBmishWC9I8GpWA2vBekFMOxg_e6x7T12zM-ZznzUcNYQ72N-K8gY5V3KV-RxlszuU-vlfDgVveTYTmqIP5c3hXfXxHLMSk5Q3WAAZZBVnO_wGenxSlmCwvLHt2E5acWnRGUwaiBtZEnTUVLLOflwuKkFPWRoA9TE3vobfIctjpyh0WYC69zoZbuvf4fRIAbggr0Xq464H3Dhssv4Fzr5tXzrVNkjBHI8d9-8g06MhVS9r9_CzYxQ9M_FmNVik71GlHTm3o72VfOmmFiFc_cmA", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104318536773830180937\">Pear chanunthorn</a>"] }
        ],
        summary: "맛과 가격을 모두 잡은 일식 전문점입니다.",
        updatedAt: "2026-08-15",
        highlights: ["합리적인 가격", "훌륭한 서비스"],
        tips: ["점심 식사로 추천", "꼬치 요리 추천"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:00, 오후 5:30~10:30; 화요일: 오전 11:30 ~ 오후 2:00, 오후 5:30~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/profile.php?id=100064048390390", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5530196409677289032", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%9E%90%EC%B9%B4%EC%95%BC+%EB%A7%88%EC%82%AC+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "코하루 재팬 레스토랑": {
        photos: [],
        placeId: "ChIJyencZ9BnJDERQHRbq-U_EhQ",
        placePhotos: [
            { photoReference: "AWCwydgGZajtfjCgwegl4g-b_tVJkweMFG_gmbp-zO1VoV8-5N74sI2nvzQtcFlclwVNhM7TCPT9kOiLut9YQWb0K47IJ53EiSL1IFmM7njZwdgwrWKHslIF3ZrF8S9TGzJmJp0KDH1gm0rnYWEi6HrDy8Hh21c2aLpz0ljftL7L2Gwc-H4iARKJq_0h38OCYW0EUK4180rNiEPpynuL2VAhbn6ogyiBzg325KlMV4oiASCOTsxpBT3QOIqXSnJAOFa8CRX81dcmv5Rqh5YdKqE4qS6dUD1ZuBByLlCn-0BIdiTSCs3Nv38RKtaD1ITtMeIyOdakmfKYZNYt6N6l93RmQJJYTauFqc65v_FuErvfTpOjQX7XR67WFeN_uGatFsBQoyzcVJqY4dwEZPOI5n_9GfKjeztuiIfbES1l9OvhbvG9Jg", width: 3628, height: 2720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112879590156083792067\">Eva Titer</a>"] },
            { photoReference: "AWCwydj71tdLGA8Az8o6TX9rodneQOssPq17Y76M1_zFEjLVPxXrRGn74byFDWRUFU0UTd1JooTdbXXAofH-dhMEk2L8gcyOGWTd3WuGFHAXnUzVGuEZBb2Ylq0uSyp9PUF9SSqVghEo-n1AElWLbndKEA3GJ8W6gWcpgmda69YldAvOSDV-PCXbdKpwClqY6TzQImlJ22qVc2VqYA5ZLYmGwuI-xrkg9duPqQ4RuNc-ZRU0cALobjvY5dYLWGLW_m7xWOSW5p6hEZul-8WftWCwyrdwrVzZjBJPCtBeZnywk2yhwDijDj7asddvGyfyxZYvFafo8Lhb6w4IeUVu6Qvl7_ERXYMoJB29HymmYxYABpPUZi6HRbufMqxxMDsTexgqg72xwVGacQPQSIGBWkIXBc7KXXbXH7aaka0DTrVH4FiyElUSqeSj9HiZnpLMWA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118082274010909866323\">khamsone Sysanhouth</a>"] },
            { photoReference: "AWCwydjAx6cQYv1Oy3v3yOsvpDjr89f7nhFxIivoL5fgHM_myABzjIXbKv0wMC0X8dOoItZr18Om_VRoDYEgfvVlnZgLytZmSaslLvvSyi8V5tB3kpARftWcDZhH30OeAYpXWjX7LCXfh_Cy3Gjr8RMDZ1EENr2HsENgYP4H1MzMRoo0t2p-uKaUAe4p_nTlxZzlBAUx0GZA_z3HsnWM8cYijgYPhWMXxQHLl2mWgfg4VTd07OPkw8LC300V8FGXEA0EkuZfV3Wn7wYmBeufBkKZWh-_z6d3dl4BZFUywXVuG5U8FT0BmMXA_HUwSufYrzCkj4JAR2obT7_wkIUZjwpK4RaIsoPr9fKmpwCWhMHtuT5qMKJkxf3ftRzddLiVJ-YJX4yayt2AzOhJGL9b2PzGZqB__zZgnZrwXn-bBpwjWZi4_D0VKqDGo6YJc1LF7q_r", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118272729425505911078\">Mr. Review’s</a>"] },
            { photoReference: "AWCwydgHSi2v6iN0R5TwOqhV7IIU66eJ6dMrhfuopPJQcJXauvU5jByXQckPbtuE0sGjMyihkyDHfcZ-2yuAbqLmsB3nDUq1SI5BfKGIHBkbris4tpIO3eesrgU6UIBEGpJAnd0aUF4OZbnHsmxbM9-FgjveM9LL8R9KrUeUWlJPMVWidmphhS40zZppq2NY4H4q9xE9VBvZlXv_rl5bP8RA_yYwnJpe40DEo8gcZV3DQMO6Uqoke80b1isZGoMvnUZBsLXD7T41aUnc9XK8cp9JT6ZTI2wbjMNzrJBefXBytvFS0Nhp6IfyNjwPQg90EXeNthtLgfRr4cExDqcRoCr1gxgN6qY_xacItIaNwkGFhXwW7Ka_GXjcfVyB5jdakWIYh3HfVRSSWmrYYuW7T6ohzVy2NXyixAAhvlL3nA4cqaKbcifVuUhwxVuoE8loLUbQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104087611923391176542\">I</a>"] },
            { photoReference: "AWCwydhYs0FESWCGtzTUau1u_o5GBcgUMH-r3zJ7ksg57DMgohZPnhklnomYEwBX9vWMm5ZXI1Izg62qCKfgOWNatZwL5gbi5iw0iM1zSJex9_Egg-hgnMlK1KkDsdf9-h4aPYRhNovfhiIEaoqoxFyE1tZrJDO99_ce1PaUumiLZ8QeS1V0B5kAtrfiV8fC1xgnsQgKNCXURGYNqWS9dl2i2eCJtcB7vtzrM1WKrFgvZmZPjTL1NAy2n5cCXsjL3HfDaDEbjwDSHJlsGq3Y7KNgboMGzuQlprOXlPEhdSZpulfrYbgBPR9b93XBGO_xb3pMKIpxY1L_qjBZYMuMC_sFzfLBl8WyZ360qWdIVPYMkYF3x_NALutTpLgFZWnxhIz0Wj7ArEuikLpS-l9jR2uY2dvqz67rOWIoErhEmxkxUtEZMhn4EdqGt0XANLre1jab", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118082274010909866323\">khamsone Sysanhouth</a>"] }
        ],
        summary: "현지 음식에 익숙하지 않은 분들에게 적합한 일본식 식당",
        updatedAt: "2026-08-15",
        highlights: ["현지 음식에 익숙하지 않은 여행객에게 적합", "다양한 메뉴 구성"],
        tips: ["현지 음식이 입에 맞지 않을 때 대안으로 방문하기 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1446288685994308672", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%ED%95%98%EB%A3%A8+%EC%9E%AC%ED%8C%AC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스시카 뷔페 비엔티안": {
        photos: [],
        placeId: "ChIJy9A0OetnJDEREP3UWwe_gt0",
        placePhotos: [
            { photoReference: "AWCwydgPubFzskP23dbqRJ1NL_oW-o6s4NXln528odEetjzbfqskXljJW7rcCHizzxTeJpYooG0kViArZFyv5kl2wy_pFaXmC-ArE2mUOjIKiKiWGVeooWDqhh747QqiffmW8mOVHMQTqxntGs1GGfKR70kCP7-9vT_WlvzDrmpHSDZ_lnIsykdV5P2npN2XV_XchORquFchbAFCgYEowYISLR9KCdQSrgD_kIr6YC4VJACwWeVkKOBRr2drgUvxBfvW5qcnTlnNZH5r9B00oUCezfYIo191Lq47coB9tDFxA2if5LwAVCO7Mkwf4-4pWlxbwNLVpcYZ03k6YzIhGSsa9ELXriA_XhUjMH5ad_Yy55TaMI7jwC0FXiJdtb1A80SqI9BJ3Qj6yMO1Z7UnVo3HK2YRGxYU08cHcpm_7ZD7RWP3mqsSGbnGPOzJZwX_OxSE", width: 1125, height: 750, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100493813710532021303\">SUSHIKA BUFFET Vientiane</a>"] },
            { photoReference: "AWCwydjmq45x8neLbb2ZvO7ou_kqMdRpbR5FY8zTZXATQ2xu4peDZL_JTgQ8Wbv9Uk1u8d1_UZWMPcE05FTQRAL1iHC42Vyfq3w65xNWekcw21Qq2QrPWpOx2WEnrOTIlP3EA5dAkHgQZQ2CE2Wugng_41XdNtnDN4LOECf6U1HDK_kMSK2ZMlGzyV-ZvaugafnZ4ywrys-ItJtDA6UijJlRr6svPDhX2R31TnyWk6m5Exl2o6Sng0rA1k3TtHqiryUeItJLLgXZC9T8RSN8akieIqLO8KznlQQXneUFv1YkZr7TKIgngjLWEgZ8X9V9YEmd-GKOfEF-fpmNkPf2_qbF7okN77I1UWOZNcHRqeecg0hi7nbjizD-zpOFTbINDg6OLrCss3GbzupVAoxzgS_FQ7hd_q9K2gIdJBlbfd6FXsoZbBEX2AZI1PAiIV_w5_fw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103944107968025624397\">서무극</a>"] },
            { photoReference: "AWCwydgOmUZHDBCFVM0UGxxSQRVG9kIUT3RUK1zc24UncdvmuU3j8_VhDqRcMJ6cFz3pZBMyGQdoo10C9uo397CaTyMgQQ7Z28trQK_ARlpTTfqmlLFtRU5ayxHp_eQPjE2sYh2zzhHwnSE-g9tgJrQn9GPtymHtzdSfWl9PQQ4I0el98FMVPd2XheTmBkooJAqDbGysxOKIUEW_d8AJma5-fdDvSycHjwujpnxfFVTGXbssMybXrf5uoLNDmIggXgdKjmnZXVGInNYeE_gn7j3-YdDCPJn1KdP9LziB_gt-r0_SH4s65HOFBfCgePBEwoawohwenan1vaWgmF6X4qwesCHSliKIFf_JDBzYFkNy9pifT-_SjieEGQkvGTFSKrV6czMg24uISKHgJcB22TkNFlQ30tz5yTzjmkyrWtwjxw-ZK1tOG2SHU-uC1PtUNA0E", width: 1125, height: 750, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100493813710532021303\">SUSHIKA BUFFET Vientiane</a>"] },
            { photoReference: "AWCwydiIllp8lGFKLeK6_FZxbVOSggbFcALPCFeyxd3iCaz-R2cD1WZRRX80_t--fppWckqe1CGvM9IWQo8nLEo0idSoKSp9svshIyeTKJ2rr6ZVTg3OBj5x9kQohH3Z46Ggx0MO5u4pmbIVZLiQR9pxiHMcN1x_e94AIA70DLWoBH68p0JhgIgqUsUeIC2H3QIrISpOudQ_6DMkdQoQVmOLbtpRyFuiIDi-QCx0j1qH6NXjmkNLl87-XLlV5LowX_wECKWTFiemlh5gQQTFs_3tEHOQ5ROb2WmODaT6iZnLEwbRU9WG1iiN6WFTSePg28uTZu4dkDe3CCn9_B3FRr4wu0BR5K6jScE4SlqLhquIrW5abk50eYtA9mpI3dp00jl-CfTE5IJEtrK14lJngLZbF2tRkKAgSAFDctQ9j7zSmDJrduFrjwRPN1F8nbtdH5Kj", width: 3614, height: 1792, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103944107968025624397\">서무극</a>"] },
            { photoReference: "AWCwydi7V4wtf9CYBGK18va_oHfhOeZMVWGeG42xR8m2a4aTp6pajinPzz25M6W524U353SU8YWulOC5Alat_2BhoKKqTLOiRVjzfZxXgZFT2WCL3dr0EAfyjuUC0gMsW6YOBJ0T8iiZrhEyuul1VtP7Agz2aKYDpn6fSOYUN5dDw5ydnO3Pp2fGBFjQDQ6LdHnxcUcXy144cp25o5NdGNc7qObeMX12BCRyk4g-zsLyMMeVwf8qDbl3_PCSwvwl6_hyFFbTXBXM7Xx_XprDYSJ9dXG9J5u-w6AwDzpGy_St77tn51sirQDg-oYJiGLfQNxFxF_Y8oz2JHlL0kJtW5G2el-r-O1C8XX7CNRi0kcdg6eibLO9IsV_P_S8Q4HgksGnmOYjO0YlQub27LqhRVb7WcpnVXVt1GRUWqQrHp8WX4Sw2f_o5d4gz4OwJe7FB3qA", width: 3752, height: 2454, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103944107968025624397\">서무극</a>"] }
        ],
        summary: "신선한 생선과 다양한 메뉴를 제공하는 일본식 뷔페입니다.",
        updatedAt: "2026-08-15",
        highlights: ["연어와 참치 등 신선한 생선 제공", "다양한 메뉴 구성"],
        tips: ["스테이크와 튀김류를 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 뷔페", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:30 ~ 오후 2:30, 오후 5:00~10:00; 화요일: 오전 10:30 ~ 오후 2:30, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15961530067680820496", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%8B%9C%EC%B9%B4+%EB%B7%94%ED%8E%98+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "요로코비 재팬 레스토랑": {
        photos: [],
        placeId: "ChIJNUzORs5nJDER2Vc0iHFogQE",
        placePhotos: [
            { photoReference: "AWCwydhG0KxT_92uuR_rektPPPbgp6HGcQpvt2_jK2lZHH8oSbrONifUSCpB-vQi6LR6satfj0HWYoupE6-VnrhepZzLkRpGm6-G4wmN55PYDfaWvps1g21Tp2vfPAfXC1HVYNBkxIsEnmEyFPEDirW5_zqjjZtxNWKBLNKpIGgpqWGGo2Y8OFpIry7k4GzRSyIHFVqLO3uyERPDaK-HxT-IjOVdxJIdRCM-NjYCAZYJ6IHSLJWYfA0Q5W_uJvWQ0k5sBGEDdn8gfG8N5FphJd7bBiwYvOdgkl2e2VsiD23BhmdXzFldbliXx2T6-9jcqrR9T3-go5ycgIjwC5YX9zFac7KKWhph68FbFImm6HQHAXKJOR6RR9yHIu5T14W7jQkBrxIM1B5eusQ2lLFKGP6_Wjp3hACYPx0FESqif3ZrXvX2OBGoaL_qt4l3ux4n34CH", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109024715975865036139\">MYUNGWOO OH</a>"] },
            { photoReference: "AWCwydhzIsSj3wWI57tFSjWUDXHzp5uBVax3tcGjhaPaRHns-MO5wI4KeZN68fmcSBiMyWbNiZhrLs4jH_0IhEbJJHkVJplZKLLFRPzQ0tuQR9LionLLzmpr3mMIPJc0yY3sO2oSvjD0Q9UEMMYkruSANIJoJ6JnihUpR3XQ_adyc0mhzygudbKY-MRVYpOV1LW0_1ddGNu0ZIAONAbLKxM4Ie84CFpjxTTt11idnrwOdlre4b8fnqcRxgAPWuVwN8CrzUCYTMdm64WxFSaQGyA8-gnBm7NI9xBxC6zsQn5YdrDA3-ZwMRhacbOoN9BgRs6WuX4Yr1bLLECJrwXL3e5cnJxV0fe40s5paxYfDVo6kIc_neQxPYd5RUcjhT8DHHReD4EscBP3L9PzAVI-777tTVHObBd6nVp0x6u6TTCgh4N14A", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100604912809741543966\">Seth B</a>"] },
            { photoReference: "AWCwydhmTI_8_w-iHRTsjyoipfnCuq27LcIZyLdO3wLlUvAT56psWv4RQ-lFjF1VFpBFerj31o_UeF401bPOoXWy8Tall-9bUewcoG5hVFAHBst8Qb9ggS14R6GfrANuEgmVP1FnXQUm--VpDcWE4MOi8CZL1RuugKJFSnJzNSejOQpIxwTv84sF5De8eT6pRlHNfkB2_9xcWRdw3vtlpUVtgptFhuQARfMnFHuUGyFYq67U3DyLy8WSNN1f4_LR8DCakV3kiT5Gg_9HpJVFAaUGivkKihUbJEPFDynq4r505hW8F4jyz452py_SY-tTO1NVz4CR0WPbbIT2WSsja3FJ3sy4EYOx455VCDFwbyR4bEh75tpPUOSNgKGj381DmHyR1UEwZqYVoWHMYAFOocLn-5jZRp1qrA6Rt33aiyo9O5tMss_egQiEwpVIQ2poDkoG", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109024715975865036139\">MYUNGWOO OH</a>"] },
            { photoReference: "AWCwydi2eCLPEb6krdZIEoUM4TlhJdkIbBm6GlunGbQtpvnAiyZpSWuGkYc3kv0TgxK7HXBojG4R-ycC2l0Ni6ZA8_7L4aM6LLHqKylqIVAu6hTuTAdHwZo9YGkpGOO88925eBUkwEbVkBLPndsW3nspjvulkfUhoPv59zj1D5g1geTDf0neuGSlxV8bkGakSGX0xlrNYDS395nAmLMnX5VkPZUHLFP1fxzrX0AE972Of8HkZ1gCz7QlytOSmpvujIvmMwyghW6l44PhGaqGp6HALOX8R4Cchtv1AX2KWoOOPgWGtxBI-gbNdZcIc1ETORx2GMM-TodCjvjYXnfV_UoXlxoXpZZglufUb5y3bLl_txvx2jSWifAfl8dmvCrhdOPT1PbEj5fQECKZOMcgG_zi9DwdPHrv6puxKk113S92g4GKugrgbRovTAiECGSSswz6", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104087611923391176542\">I</a>"] },
            { photoReference: "AWCwydjn9ZtXKZX-EAKf1PhZP3uxD28L_ooe6qwIC-cY-zKpq3gYeVEM6mrks6mPtT6VlDouJdpHBoT33VJYWxY9znhYHYg_mqsyhyfYmZuYi2ETTGaEqyqI-FZgu6_ArsocN45F42ckQbVJakRh-slOlm60Y9ffffS1pzBIozRUdjrBnoZSN5a3ONyz3TgwTb3PeMibLSH9SRWxGjr62zK5ObyHcmptSx43ZrpXUcC4CtAHOOAC6U-OPyTCZMFDepZpDyt_ShWVT5yxhtdoxIg-UOwO7PALLapjLEgnVgUu4rAM6kbcBTbzhmBHK9xueA057a8NkHozUqzD-a-EsJ8X5QvXISRkrjiuVZvzWvYT2VV_TwHoWTLE4I9LTsmpj3ZEadKqTcsyJ3ix3TW1xMV0dM7QPSJbImp8s62G6b_SLv9XpemraRLW6V21FE9xeNzW", width: 3722, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109024715975865036139\">MYUNGWOO OH</a>"] }
        ],
        summary: "신뢰할 수 있는 평점을 보유한 일본 요리 전문점입니다.",
        updatedAt: "2026-08-15",
        highlights: ["4.3의 높은 평점", "안정적인 맛과 품질"],
        tips: ["월요일부터 일요일까지 매일 운영됩니다", "점심과 저녁 시간대를 나누어 운영하니 방문 시 참고하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 2:00, 오후 5:00~10:00; 화요일: 오전 10:00 ~ 오후 2:00, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/Yorokobi-Japanese-Restaurant-107319368605043/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=108482702859327449", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%94%EB%A1%9C%EC%BD%94%EB%B9%84+%EC%9E%AC%ED%8C%AC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "요코하마 재팬 레스토랑": {
        photos: [],
        placeId: "ChIJI8vmB_1nJDERBSuYchALxXM",
        placePhotos: [
            { photoReference: "AWCwydg2GAbQxtWMU2efn-XKVzdHHrRJRSxLp02u_wikuXwHK-o76Mmvt943cNsbOxKKMQS5FMFhPua_LLhybsH_u1qdm6safEHG40mNGidG0cBxITzke7YAkfX2StrsY5DG-MIbHp7TFOmx1f0tbk0f0NGUNiO1aP3PJECd1sa69Cf8Bq1x5WqeTBaEz-BFtwzAAEELkIbKoKHiiL7gw371RWK6obrp-4doXlNcUngjGMRpneRXY0sLkFsAZhQY7akKeHY4OOeiq8dlwgJn5lwU8RM008bTFQBXMo4ttv9JiPGrdODPi-0fGG1EP7ueVWwbK7WBN6YF6Fc1b5cX0gFj0sOwIjcse1A6FomzhfIZXxEUyxKhKYWJCP9RObC94G8PtpqknXaUdbm4aWZbqCQoZobPbAQ_2mlBFGin3pzf_zI", width: 3848, height: 2886, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114354795062387598408\">Nguyet Anh Nguyen</a>"] },
            { photoReference: "AWCwydgAP5G7Z5DhrbvBfkwqWsDx5IWHrB3ZlNuxgEyzgiI8QeSGUC-OsFLXjzZBWdOG2YUvNOHt5w1nUt_t-QQFocqh8PTxWktPeCs7abScIeW7CZacalJYfz8RqBZHncajIcBOzQO-M-ZhEcpcTYGOybsLJAz-DonzZpknsgsORpan5dOv6G6vV_CzB5lIfG_P-hUk_LK-VlrdAKNrxR-6uror1Vi2Z-f8wjIUyWcogUKX5aaSvZtKGEjHge8n4Y1orWLm_n_UwIY3dk21TG8QH5Vh1_oVNu_-DdX8tRAj-xoEHL93rmmYxjikLPBGG4A6cok8_-bp5OOVm9xK5lBP4BTxglq3mp9WuYTentnWR4fdEKFHicuUpHmznmaAnxXDBVdogkYdbZsAonFXznqfAc8thksAd0VMHDtyyOVPA0VqwpksBqj1Uir4Gh3vc_ZA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103259689151982889128\">Yu Ki</a>"] },
            { photoReference: "AWCwydizyRhj7C_VOj8wIVE_hqS7jtkD6OX_fd64LiMvu2D15hNFpSnWJ0oEtdgpKUMK4vHpvtVlaM36a2SL3saEB_OFBuUvFMfe3Yjk8IK8R4uuOI_l10jOqdGRGu7NmmpszEQ0aR-raIwRF0TrDE-IeQvA8ryKaP2a8i_X20tWipZ0cQleocDRp1PNmJKeLfjHBIBipmTSlX_XuP6ylrpD58Led73xCF2Lghh3vDJVDKQQjhDuKKQzvOW3_JvP0QRKHjGW3sKmHEYo99tuRZyJgy9mhHkSEVmwYKP8Qqjv1rTnv_7foQejNgb8pLj_Q0MG4iLbdEdpE1GyHeRkvlQm9uaiAPjRcluCJfhRDzonBmFvWa86K4f34YaIEn-n45aMoGXi--bSbHszi8wILGXkLCX_Q_7B7CwHVC2BqkkSkkMpdK7l-4pJYv3Wc-pvm4KG", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100135193672737139599\">YOSHI JAPAN</a>"] },
            { photoReference: "AWCwydiOTpEkZDLlTQfmgO_vnKdhhDWkwI3gXEysNi4Xuhp6wj9nTFU0WR5XRUceX3sQwKoBbMqmMHAmlTaq7T5D_pFxnPqoHkGAtcL0rvIRceHyU95vroOks43hvS0tU2jHHetfGaeM7SB4RZQmcoNt9SbsTdiFnxTkeUr4IDYR59yEn3rlV1OvUqKgYACv5HJ8TSgjc4LrdDofpvqUwzp9iZ0xMrm-Sa_-LRoBmPDYgjv8gczIOWHvBWeUuZwJM_46SENQd8T7oMuFnNvSaDpwPkchsh2jhFmb4vhPbMmRr_LZaoTqpse-PVuOX-ktQ8QZZ9oq9IurH56FwbLHe8ZseaWpcocFxJXDUQsUMoHm0LgS3Z2mqwjYj4TgxLAUhOp9M6S3IhaZfFlY-cf_yW-2WpkyC-BAHgVtsqSyBe52S8w1wvyrnprUZnNpaBv7klVg", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104318536773830180937\">Pear chanunthorn</a>"] },
            { photoReference: "AWCwydgYbDYP5mfdoWGpOvGN-cfHnk2DcaBb6W4MRW2szfdL50xWLlCLiFx4PDHA6lW1vrpXVA_BWfsbXGoxmOSmcBZh1k2qHSNiayJ29Td0EF-rnWlpvWuLLT2WVweo6GQY_rzfE6uIWnyE_gEDM2ANX7XVVx6tRfgguHM-yguNRwzit3YomtgmodzaEFof6IF18vGcwKPdwX5WPigkvgNqvo6xyvNTug6f7_xLipNxmghMSiyMnMZvYrluPwg_y3ZHal6rInZFcpxaNCCO8DwyDKLkHgEEm28pWk4Gb3JNsSbQwzh9H3G6gp7rKiiqbNwOjHmPWCtnNH9KagszGoYbQDNIaww4HiAM3vKrkxzox8r8Es2hxp-HOP1-Z4Xor3sGf3pM_zECL4rMq5_waLGSkUvpdTJZVzim67R7JWZy1RrHuDVmPDcPIQS5t7dwuA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100135193672737139599\">YOSHI JAPAN</a>"] }
        ],
        summary: "라오스에서 일본 음식을 즐기고 싶을 때 방문하기 좋은 곳입니다.",
        updatedAt: "2026-08-15",
        highlights: ["일본 현지와 손색없는 요리 수준", "친절한 오너", "무료로 제공되는 쌀과 된장국"],
        tips: ["가게 안에 절에서 보호한 고양이들이 있으니 참고하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 2:00, 오후 5:30~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8342086050043669253", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%94%EC%BD%94%ED%95%98%EB%A7%88+%EC%9E%AC%ED%8C%AC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "골든 팰리스 씨푸드 레스토랑": {
        photos: [],
        placeId: "ChIJFTjoBQBnJDERaPd57js1b8w",
        placePhotos: [
            { photoReference: "AWCwydgW9wT-GW5ihXxhSMX_n18iCLzUfp9ELx9ow-jsvYyhXNaCvsc6rpGSoi_Pxf7dWFvwEh_wWYBlEidcaL81eLnhx-O1IoR_ezUNPYyu4Iei2mcWxHAAlTzS0wynRjHXFIFaKZPrtEUNt-MZPGcbFuSnV5tJ3zZNUv9ORva7LatYgJZgFzqI0Jc749gWsLF5YpaZaC2jqnWgTFdIYa09ZlslMhiDPQ_8SS22JEIuakgaw8SJy-SmN4D2Um0EtksCG39SJ-vvn1o_j1X1CzoRR_CutzwaDGnSdzmidUhELyjUhZA_a8GHDvA4OJDDLT2qNaBOAkuH6L-JKDW4WU-8--NTCy9pmdMb7vqwM41Of0jEwHL4iAWkXkuLyI3nFHKtsyItdHe_a79p5QZkHpD9-WLH-iOKfWEBlfTX0q9ojJeQMibr4-cp-Pr9yZE4Ew", width: 2048, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111999013623423685920\">Golden palace seafood Restaurant</a>"] },
            { photoReference: "AWCwydigUQSOxdChxLt1s0H5v4ZpotXAl644d00L9cQhQMiZkqN5jwfBmxt3qH2OOS9Yh92XOk5K5Mx7Zx2NnEHYGeqEhMDFcfZs4JLykyyfAHBL2AW0v7IFul4cw8bc5Due0h7obDChV4yd46OJ4fv9Gci9pVpxMbYtdNUwNZqpITu7-zDnVmcBrgqXMYAd6a0Hyxr8ANDbxMkyxnbmUVt9_La1ei1iG1z48xF5QasQf8mGS901GaYp9rvF1RZMMhwx030yZ0NiIrl4DLM4Z2MGPGMuC9veDymRAemD77u5tpARB2wRkdI8xFNFM9G19v7hgyCxFl-m5wuljvS9mHJ64-7zuPTLDRxgWamTUBFe8r98ulyP4GXhVDquGhJgnBwsEYWD6ZcAk1fqDEfaPsg-BjtuMvdwJMjO-V9rZmmowduOVHNvy58QlHB6YB6myJ2N", width: 720, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111999013623423685920\">Golden palace seafood Restaurant</a>"] },
            { photoReference: "AWCwydiNncdsqiOb2DXMXGMQ7uL3JSm2oNxzZkmjeYn1tVpv0GjSu7ztC4zQA_bTis_v3jS-JTAzMWX9pC3phOwX3EQQZvqwrldquoDKjka-14CW2QnL8HSv8S9P19-0shUQWLs9HM3ihu2BqEi4pMqR4MiG2gwygULb4ST6nrMYLcGjm9P7F_voGKy4LGOkGeSBTKcL9kyLFewHY04QCVEtoMcnh3znbJI6ENimeRPkBjhJtOe0nOaQB_MMyXUYFqJg29MHb4VcJd3rHJ5OEaBDUvFARMHsnheEX3IxcgEcZCIn81yWdgwpdvJWU-LzAtSdBibtKdsJaKc98Bbj-oGSRpqK2N8JuJma_wt1uEQcS6iS8ePqWwuyprxzEmLKz7ccbdOrfl4kGdPfmzbfGB7lrsnt5E-wSg5s8iTFGuEtgykSMJbspAZsLkcUmfl2yQ", width: 1320, height: 1980, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111999013623423685920\">Golden palace seafood Restaurant</a>"] },
            { photoReference: "AWCwydiZZzrNBAcUcSx11k6mwgnOpuCdUElLjF8tlIpXli5SprUkwlNY5jmwJ41oeX0MwwpFxCmkAPscmr3tz2IyuWMF43Bm9bivw9lg65eqRJWcab7uagPlcH_brYMIz26L0_ANOicLqTfu5oKiwaoOG6PYDRLS3cxMueecn8MYMdFXod7EhgRSyqHsdkErTRs6A29GQnEw4P3deCBHXGPQZb0gkI68CijymEFQd4U3Lw0zJJWNlspQNJd00cL7d69FkuAe0HRt1GZXOxNhTRpYzFDuT75kCZZSO5JfzEKGUsYtiLKryNqeSEkgu2e7oCe065iji9nHuKvtwPFWEOoNaW3cYKzM6gbazTEkVf45O9AK5CmLflIKAhjZ7D0ly6jZm-zz4INQ5WXIIA6_S0MisWmoXJljGz0IX2kSJbyCf8xT8KquGinp-QzZ6jJAQ4NG", width: 720, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111999013623423685920\">Golden palace seafood Restaurant</a>"] },
            { photoReference: "AWCwydgEcsiOYSxPxryJIkwbl8gk1MxXJnHuzgjoRsd7yr7JPGdyfwJbbm49DSo28artVvCtqtleN3Lp9elwAs9BdDoC2NeVVHH07rK05fDRXqk2z2B2laYeCrhzWKfBcaXYtHxY6YJVpUj6QRXVcvseNgPmelGYHSg4CgLJU7zNBiaF9uOR_mwUlrzfv7yDH2109wQ8eTlZ2rtpxVjWVk2nt6LcqqIbCiJUa2bYRO90YVS71sMOgbop9KdxpLhhqUfzEFqmuVpLKCo9k6ubOv6r0jAYrXp6O4LRPHbxeL0d-wJ8bvWiWjNrfc3yA390QHNeu7vGim5HeeYV4PINNGnQc-I99gYQisrVOjKS-yRbAwUxj0LQFP2KKNldw1rR1sEw6Ln7NlkMjclAhROYgtKdh7adNY50gGoylQkzRdWuoOC_H4svgNKqqKCSP9Rq7_d1", width: 2048, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104946504578430243904\">Anny Anny</a>"] }
        ],
        summary: "딤섬 뷔페가 유명한 정통 광둥식 및 홍콩식 요리 전문점입니다.",
        updatedAt: "2026-08-15",
        highlights: ["호텔급 수준의 고품격 요리", "실망시키지 않는 딤섬 뷔페"],
        tips: ["딤섬 뷔페를 즐기려면 방문 전 운영 시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "광둥식 및 홍콩식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 9:00 ~ 오후 2:30, 오후 5:00~9:30; 화요일: 오전 10:00 ~ 오후 2:30, 오후 5:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/share/1AXJVNqisw/?mibextid=wwXIfr", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14731051437672494952", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A8%EB%93%A0+%ED%8C%B0%EB%A6%AC%EC%8A%A4+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "3 머천츠 레스토랑": {
        photos: [],
        placeId: "ChIJnUO_m9VpJDER2UxcK9Z5Kdg",
        placePhotos: [
            { photoReference: "AWCwydjdkc8OtjLGbljmJNIp1ZQSTKHA2HFyzVyj0Ub_gTYEtA3F3deulTKrHEwZ3ljcWQYxN6x5GY1Nid8sPad-4zvJykWXtGP9sSDg5UtiycDVGVEuX4mIA-9ot662HAEj8Da5mvsvIe9AWCnO575GgdlTCkLTDPU6JXd8WaIFWdKU9SIo5lnyPRsRzCaQJJeNsXiryOnHyEPfr-GtmVDpDgWjXbD43zMuHGghKccJ8RVG8hE-TrzxaDSUeXMbbIvFt-D_l5oZJGzDa75uRrytcx02kvsgg2SHNJ0qhKvwqPVVAEVlk8r2ksn9QQxVMAf0JA76iBbLjsyLezyEEBf4_Jwppf_oCwqLBbWN_FzNnsbTjXUPBRojh_GQnIWmh2yuu59DtZBTan7xK59wq8qllt6oqx87__PfzsVVLMS7Il4", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118219580651430155201\">3 Merchants Restaurant</a>"] },
            { photoReference: "AWCwydhlOZJNgHf4PIzyTTXLnAU8f5NV9aDoX5wEbl_GeoqjJUYxt1mthjLbkkBPVQCyiKx0MmUSpZrcz2_UrLoYtI99Zg7ANxJyNpVJmx1WvTDKQxsHCCpoizNXgYTe_cz5yyyy1cJNkj8bEGGSBHB8UwesdaghJHmHB_06NXqhMAkc6EznxePzPezJAYukC6fushJ946c7EcEkIxnxEfqK46k0mXNPo_Ab3rtbVQ7KuxyuZJ3mmKTQdaERLuKxrHqxZgk6rsJeDesfx6g41iXDO-KfA4xNvXHwCZERARO2cZrZz6GjtXs_roKpQIv_KMwg-NA9c2lTbgE8i_PGknwm2xrfd4Jvcb8EQDEBt1Mqxpjt6e-OBUcDlypMjpTjBB4lGelhwQbKGQL83PYW9VEMURBxJbxBUL7fAqq7aOj4rzNrQ9k", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118219580651430155201\">3 Merchants Restaurant</a>"] },
            { photoReference: "AWCwydjnb9xHS92SKdna52xCz4a-db40BGUvFbtnLVPConj4WY6FS5EC5i6b_ZG9Ef04brSnJvsa-tMN6k4H5gY7SLRb7z3tG5aWSBOGISOnNy24H-7qY0z7LOXjmS_2gyLTv-veJ0fpERcV1H_YFgKJvI4kZ96KmoAmBv0diLUmdfukeoxziD9omsi4LeUSxttah5AINmgCvbxuXsvV6adkgfg0MQrJC7CehMtwOflI2qNjmNhD78w7I36CmmWqN3Z6R87m3qrbPsgFQd30p-BOrB5ZcegAmwmVr71SN93AuesMY_PHlN1KliS6fMWAbtTV0Js8NQpYYlJOFh3UqD9dCG8JJVJE8bLvQGWejf0LaF-73LZDJDNKVT4wvOY8eRsCU2rkLBFqAl_VEu-AIzBrKgTTWDfDsUQ5i-9JU3yrVClvYOGl9FsW9SRSSBXConH8", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112605650505163259189\">Tubista Amberber</a>"] },
            { photoReference: "AWCwydipT3mT0eWbA8fTGl1sof3uzDr98JN_mht7KJAkkPBH4pWAO9pKbZNAby0N2vh-Jf4sf220x1l7YwTFKsr9hX0_i6Yj0Ln1lBJedLeb_Xxa1gOuhKPKNGoqZX60SvNPLq2EPQpHFVhsdIzzneJYF8BveQGH5_mD95_og3fBeHxfeqlmOBneQew0ntMfBGLi6SS8D-jBoxYIRbNlYiP5BRaAaA2PkZuGg0sIhhmQ42WUGJuWh3KJVU4HmH_5oNGvi6ApZEA6jflK54veEFwpK-UmDwzrMtEXHRwiI-w33AM8OdtPF8eH44S1r8vv9vZzTDZQzykGY6PSLIv-kluzlhntAC99kf6pJaq7uP3tqd860pVNfXI9PNEWEjTLVuobyx7BG-nML8iIXpOzGOjMPhcFI0sEHXvEYCPY4bzhh43OvERx0DdHj86DZasaAsOa", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114993688341060735469\">Pier Luigi Lovisotto</a>"] },
            { photoReference: "AWCwydjv7aTz55oC6u3BCYWBPX3mnOeB1rKX9Wfe_fMR_V7qdSUl6icdi9c40Cq7IYRdySZ9z6DCqxrDCO5Wcf61C1_2wKG7wCWVUWDOfAtoUtQsfS-z-71eLvYTd9zde3XTXy6bA_ZP-jRqaoEfUN9RuOb02fZIo74yAYA2hR8g3-I_j3lKXR9tKMbuCn-smf3JYdGTNKKRUW87QgkIHWGlLsFvgqSs5TDupgtTHqBCCV6JeeqoMVwYrFWRhD3ln7KR_rs4g97mO1zjS5UE7bCOIGs7IMnniruU_VKDmTt3Y2u6Aj7jKbl83VSIyOxVnfSiZ_j-QKOyYUuiuhnTchABraoj3I4ulPN4nhmEfuylP_JMEBjSvYz3jYwwK31De4vejEFG_i36pZ5JZvqOV13I2LeFUF8XAWxX-Pta1G2mFRaiFgvABiZK3YwCrxD5JA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117914232482534186154\">anoxay philathivong</a>"] }
        ],
        summary: "훌륭한 서비스와 독창적인 요리를 합리적인 가격에 제공하는 고품격 레스토랑입니다.",
        updatedAt: "2026-08-15",
        highlights: ["정중하고 세심한 서비스", "독창적이고 풍부한 맛의 요리", "아름다운 인테리어와 여유로운 좌석"],
        tips: ["가성비가 뛰어나 런치와 디너 모두 추천합니다", "중요한 손님을 모시는 자리로 적합합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "독창적인 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 9:30; 화요일: 오전 11:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://vientiane.crowneplaza.com/3-merchants", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15576114746995002585", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=3+%EB%A8%B8%EC%B2%9C%EC%B8%A0+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "콩 뷰": {
        photos: [],
        placeId: "ChIJS2V5_lVoJDERowgX1QXZg9k",
        placePhotos: [
            { photoReference: "AWCwydguqPcsM1RxYsigdE0jRrPT_UkM72TKSWtcA9TV6k4_BlX6cTvNQP-aLolzUL4kxefp07TX7rhNr4dHLFJzDb0UtqcypGbixUaPSqV3j7oDPQo0ePjL76ZyRqg93E6lo67sQ2L2bvnvuG9iFilmSWmGImbrO_nvAHeBOCc2jO8nboc-NRlcs6qzBJ2XkidBKNpHtepCniFAVEEloDG0kb6Iv1aGdXWHpbE1OkjAv7R2TTBXOG1q0UUFcql5GCtD0rfoI_M5kqLqFJ-KfZtUaiudjEzrV_U4kq1AoH3wAwhQLK-RCl6iXMQgex4S_tD4AMJrcUXQd1oOiJrjtGI6_A98ONP5Drz1wu2s8zIZsCWKchNE4GPj307GLStwoX1YjFhrYUdKqWpf6Cryd4thV2e-wPxGWTgMlldHjKNtamAHrA", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112314291038071577048\">Kong View Restaurant&amp;karaoke</a>"] },
            { photoReference: "AWCwydhT24fizkQOHFvFuVy5Q19IcFjVsP2n9ZX68H7KHoPL2PkDGqTzzCS6mxXT0o_BFwcR-rHo_uwZuNC-Rox7mop5KvnTm1O0YBd5Zhwarfom7W-0nxbjcGWqeu7GmsWv_YTFJmRCVoeNMdlfcvYzw44wGdYGf_94tPAivl3iU6QX3K6Dawavd7SM7VHk4lmoKzChDOJnXgTWJJbhm3u8Jd5GIBiTd6DvIocIICcQcIfwaImRcEPz79ftwXkhoS2Tlh_vYggE0YckcuY4y2yLhU8r4PH8uDMVx96YOzFLo8vpDzdY-PPcRpE3ih9obWMktxaKy0AHBF3kDwjKMSf2kvU8VyzHInXxDJCp96y8_TarnprJ8CnWd_ddX09WWw-r8d2FUNblqvP9DnhKhfrYeFmOnWygotb6USNoCxlVaPEfoQk", width: 4032, height: 1960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116703407361003236018\">플로피디스켓</a>"] },
            { photoReference: "AWCwydhv2LXabrKAv4Oub6pHm59OCSGSaAGW_lKbC6QtflW9ny5_0f49DWlIVvm3JbVsAucIaNS_pGCeMKSGQ9KHmKdnlTnxl5JWy0EsYAZaz7y3DzR9APvDS-8lAaQXIe_ECTm5BlH__kKHcx6yzuaUlcZWpdOJZ7EzOgAuykGneKmJ0j0--ECAM4wxNQNyRtTgUQHH9-73QitgLaYw-j4t5fLS4PDMfhJDLCJUFU1afPBDGzHkK0HK9OBVzaeLh6T0Cpf88a2ge0K_8iFlLHDMruWktiU4s5gxN4f_eY5N6m_OGhlYx-fmF4pZmsS34Kr1GmK2ss-sdGkBvJIJAfHWPdvY4OyPS8z2zZYgnsnvu1sRMatUIk9Kr9XzaJbvSAbqnwaWI9wpgXD73sMs-yeROgxJD9lKbBiLS8nayrwsj2HXQHObTie7wr6fag_Zuupk", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113776335034892421984\">ณธีร์ธัญ ธนชาติตรัยรัตน์</a>"] },
            { photoReference: "AWCwydh_8ts1s0CxSii6qPGHNKyQUJjiy8szdWB6xScEsD0BOYeFkOrvsMJperMMcAhGWqq3D2_qEYVfDBcLbNNqlyzevj1Z9sgF1lcpL3rYHhAV2EC2KqEY4TvVLP9cFTpr_bU3hm6z7iq3EXi2Krt_eXYNP1edTptVwlht6Hstuz_hICnckoD7i_JCldFtnPem8kYS07GaSJOwwBgegDRzQM0rxrJQ5IUYHMEgvaalqIpG_Qz3uWBM51GQeKmq2c-fxg4kz4Qk116hXL6yRnKxuSLKh9RtOH_v9-HpI52mA5cMHl_VlIDsWjbnBoBWhEua833yoHpz0vLUhhQUF_edUaasneBZCjcIL5YMMZs-LJZT0VkTBS4_UyBhFb7KifOahpdn2sPn0InXmApa727MxlcIKrvWHRla80iBMeG0pzmlFgg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102124568102564733287\">P B</a>"] },
            { photoReference: "AWCwydgGC10WiigJ0M0pH9oiC9qaJteOn_O3UA-jvIxPRvZbU40K1SjHrg30B6PnDyiQU1BquLPQ4sooUFrDuUk6Ax1XsLqYCfJtlqXmanlh6vtZEz27UYl4R6sQp0-Z9LpjjhEC8iJLh8BjM6Sv9dRQ9w1TujANYGDphPfq6LHGOOSkYiZHY8KKHxvvKZsOl23-7XRFoiFufHVkl0Y8LjNhN2_k6JforFyojmVYomlA2yED-x1r4Navgr7BmG8CxG9W1Ysu2Y9OXG0rmtVEboH2_RMsW7BIqQYDqK1wurgN20xn-BNGbCYWVTrBUs1SHGNB-6M3fAieePp-qMX8vCje4tAtqNO_sS5kTH4LROiOiLpb2CynJ02h-her0TfMif3eRZ_Qy1cpJdbL_oD-3t2GnwSxde6YPBEv6WNjHpT7y09PUB6AmZfA6ANrYkNdyM8B", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113776335034892421984\">ณธีร์ธัญ ธนชาติตรัยรัตน์</a>"] }
        ],
        summary: "강변의 멋진 전망을 즐길 수 있는 해산물 전문점입니다.",
        updatedAt: "2026-08-15",
        highlights: ["강변 위치", "좋은 분위기"],
        tips: ["저녁 시간대 방문 시 조명이 어두울 수 있습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 4:30~11:30; 화요일: 오후 4:30~11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.kongview.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15673609747252578467", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%A9+%EB%B7%B0+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "엘레나 씨푸드 그릴": {
        photos: [],
        placeId: "ChIJxziDndVnJDER49FOyteY0yM",
        placePhotos: [
            { photoReference: "AWCwydgGGgjZDWAYh0uzTB3Zxb9aO8p0xefkNAbCVK-WJlRdru0P5cD6Opvg2LUBgVnaQUvGNWqYiO4sDsRTH1du8YhEkO3K17UgH_x4u3ic2MDaG1tlZBiiV9YCMnjFiCv2cXqNtbzj1QPtLL_SqlNQj7G__9Bdx_8-65Jzc6GoewM5vlSXSTQv-pcxXuntAytijduUKn0IBksAuhNCPW2v4954qmQ71ZuhImjoGplTBA0ClKmHi4Xaaq1c2hs1nI9pHwrUaZQKcmvtus7DjTgdgCwrG0o20vvK3zxOvRWsq8YfNqreSXn_tsi6YHGR9oNdQwh3VI_b0QKJoah9V2PFvOo9-IEGR7799n2k-RM5NgkKLDrlYXaHiAdMImJSwujVusJXjUV3n0p4-tMQqItnURYNapoyOuiNhurZ3FqMSki0TPs", width: 843, height: 632, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103735585992672078739\">Elena ຊີ້ນດາດໂລ หมูกระทะ Grilled and Seafood</a>"] },
            { photoReference: "AWCwydhDPkJ7gZ24m--X4ZqWFPvnxQqNU8Nc3dNLEWHMi-KSEGeqjwuCYLY6EIvRH6DxtjZK5rYqCPjgVz5EbM_QAcbtCCez2Nj4W1CwboPDKU2eXW3A2a0qrmMfto3ig0vUAqeVdhNWL5xx5st2hyfp33kPrrPQA7dvU0dZnMGGn3aUle0g9aMLXfGF9ntw_ORXYsi_MdOHZz-vu9Yn2mT5YmGKsspurcFO2bd1T40HA9NFHuZYcHChL5goL8AfwpxzPPSTLvUUPeyLQEM8cAbFpYFczMDgtmq_18ojpwCl7D0SFqm5ENMQH0tNb2s3J6HOA1AqGiJztIUQsG04joCGp_zmsfI51NEL7h95XCV_ruMkY5AWvj8iRsGK7bsW6ZpcOWeLeJHOEcywIgVXHIOyEvXmc_ZwSdEF8FMM0_TdGTT-Lg", width: 1600, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103735585992672078739\">Elena ຊີ້ນດາດໂລ หมูกระทะ Grilled and Seafood</a>"] },
            { photoReference: "AWCwydi1ja1F2cdhyt0hSFHQKgyzMXg96Khzaaavg8kjva2BN9Ytzcc1m1Y803wPm7yms3UJf7huc5-AmX2vQ9tMmGL5w28gT60jc0sJ99SUTuu1xODuoqKUuiuyCpycoI1mhzsaXvGgR796mUxV0sd5CKPXRM6gBRfKtOOmjIdO0CM5MiLCnNQjKncgdzfXcNUWY1xaFFGwMiOUMBCepZ8KRve32QUchto4bjk4NW-0clkZqMGMzXd-yt3vPhoc-b8HzDZTKQtfBAyurHUumsFImKo_ZhnXO7eD-yiAM9JGFwvgSNR_Mbk2To6LmqnF_KUsXTj8TzAdpgS-l437QOK_d2w4obwPvJD0FHddogICytgarbGY_VUdkvTHRvHyJU15avrKH4ogHb0QucQNuFL08S3zAG26WoOw_3smW_7tFY1TKG9rb10JpC1Df7dhTbFo", width: 4000, height: 2162, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103944107968025624397\">서무극</a>"] },
            { photoReference: "AWCwydg03NE8O0-1ZTFUCuF971CuykixOlr__9mBCZgmfTkLS7xwy4beosfJxb8_un24c9Hqgs4U1LYHwAZ8UkRDzk2fT_5HJ1BMyzai2CL71FIO_esufPVOWJp9oOdNiKkiQ8u9kc6pXu9rv8oioXqlKe0HWCmukiXmg4koifC_p8WrmnGAqn2V-zBzmxBtUcjLtsUJrJZpZpqFFZHnRO8hxZMkVpKTTVihyAOdKSdENFn3rQhNC_1b1Zy7f65TCOujHSk3LHijQJrvkL_Ty0mFJjaQS0g6DEzfVp61gNvWbgtkKQTTiYqfbXLVo-b7PiDGhogqAd_iDGWzXuWSz-Bs3ftsf4QQS8Pq2HnPuYHWWZSrLy6PjBmqjViNoxIpK0Fo6tyuj65HqrC6y7uUvbo30chvmRXSticbuXYcGoEhjcorMfJlJ4IavMAp0aMWcg", width: 1713, height: 1284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103658539029018491307\">Joey Tsai</a>"] },
            { photoReference: "AWCwydi2dGavBVN3mSNR1L3t6oEXTcS8m7gsUkeGSlLC8o4FwfbEzHDd6RIiEqTBYcDfau2hQ3B-owlB2usPOtGTLwlBoCcKV0B7sgspK4DdYg0-WjH2b462upBQEn6xnJWS0nkkjR1pLj83QiXEQ--lGlFjsvOf7UU3Cpvvvrn03TmIop2L0V0h1N1ahM6ECSJ5rxP23x_chfUBponP88FoRVvULTyuAMyvxcrpcDnCIU-FPr2E5n1f1lb61QIClxpVAQqpA4HSWAz6kRxmwwXcj2pdoMhzu58kBiaMB-Loy1DHW3a4KDJp7UdFLuVVlDwFZa6T9CVUOZc22T8Tognwc75Hd0T-br3BingOaqNqbo2v7fLQPG0ngZq-UYzqXkyQgT0SU_wfeVx5lBRnSKsGPQUfXbuaMYgraw6JTbSUqU6TDrLSiIzVrtD6IwieyQ", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107191537757432538645\">Ninano_juno</a>"] }
        ],
        summary: "신선한 해산물과 구이 요리를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-15",
        highlights: ["해산물 전문", "구이 요리 전문"],
        tips: ["현지인들이 즐겨 찾는 곳입니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 및 구이 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 4:00~11:00; 화요일: 오후 4:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2581575063992979939", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%98%EB%A0%88%EB%82%98+%EC%94%A8%ED%91%B8%EB%93%9C+%EA%B7%B8%EB%A6%B4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "문 더 나이트 레스토랑": {
        photos: [],
        placeId: "ChIJn88mdFhoJDERGqXfCwEEumw",
        placePhotos: [
            { photoReference: "AWCwydiXjF-mq0nV_D1_WAEcbJRcvknM8NCETTLzvxdJqMu9hlFvAFJWl88VySM0lRmuOi589De266LZJOEB9WijBGFMZw20eFvU18qJsaZ0zVh7pLE5tw7YNhf6OQtrTSNPdXESfZ9BULo8jLJKm7C7eaOek4yGq-_AZ7cMvIIqCrH8zHUO0V6cO3XZs6MbCYwXAzjJMirFLQOgokL-0T7Ot9zoI3osbd3NGBcammJNQHw4NxjAboyS6IEPnI6290J2qc5ggJhYB-ImpS2v5ZvxZdak1KLH_6InnPBUDuGQWkqtuhzJus7NdMQ6mgzAUmp22QcGGZpk8VTs397SzcSF_PYEaKh2eW5f5BSnRE_R2N1BLRPzezODCFo24TWt18C-zJJkdnzVTxjW5fGBGdEHeNbI_4jofzFjV7cPzd7LRIy4-b4", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101698799884470789557\">O. J.</a>"] },
            { photoReference: "AWCwydgCbM6-K8A1aC9Gn2ryZZXKp0R-1FVYpuH5pE2jLiubmRayyZey-DWbGlMA_Gqv0s3qUOBD5gM16R2bK1XP1AQQQl4UcsDLJvqPAt2qqlur8goeu6UQcOkEYdANHcz9o0oYzTf5UFOStn-1XW-wTT6sttm5sy3H1pqeWfTddvqbMYjbF9vck1oJia2HXHFuBFJAi3oA88s3G_E_Dh26Xtau2XWaOYcHuy0dUNNlP6kXv8LYwl7oPi1ouTQTAK5QpCePdW1H2kaVe0W-X9Reg8MHmjwjlCOLmP5tgm9WB3Db5mFXM4U7jI90A6blfeo_ytU-COhLRssa_oj9D5xaINz23wmsD9ayZLB9MlynJFEKvUKoYHQXZfkfohDFxID6rh4KunBsiBJxualXIcEz_02N1HnNw7fpOBqo7lOrraFZ4g", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101592131859282442743\">Kaisamai Narkkhittavong (Mackaiverr)</a>"] },
            { photoReference: "AWCwydiYsbeQE5oQjsHIBr8QuOpJcX1svCXLvw4V0D2kYUosOFIMECMHJ7DrfaTgphGHFFrxAZ5Vh2NnoFFtYg2Z48VZGuFS8GkI3YvgvXqYzJLP_OThQ1WHOgX_QbzVA3oJwGBAEebuUxTBLQHMG_JQ4HQTbgEj7kF0Z02VdIu2LB_qE58KNd-RtY25vu9iPEfGlWrIVP3aqFWX1-LsPEp42X5T1vgsRawn57LOkidLC3la4wz-1yolvRzbZOaUakxBXLovD4RH84-NBxja_7Z_3LQ07GAoQteUyUTulCdYZol5uJ9-e8BaitXKNle5Tw_tnoyTeDTKSne6Vk8sYJemxS1eatrh_ZK7ZrnZWfE8PRqJ2DFRCgRhXCQ31MGVo6j9y-eGNi3AKkQ6-7ZzQ8mHFmBnWgjDFu_w9IStyqtxyOadJL1s_28BRtn8KUeJLA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111625476135171309670\">john</a>"] },
            { photoReference: "AWCwydiTswJ7MLZfT-rI4ZEK7KcP6Pmg-a581jgdiVX7PnOPgS-SLrN6XY-vuuwodgOzmUpYoPI7BCJyWR_vTj68tud2NKcpVFI1iuG8pTw9l0BYB5CuvGbSrvmdUf8yT3JBhQzboAYHPzDM4KEdSjDPWW-VJS2J_B4XrGYxmnGbyyNLGxWT51rXpdrpLrwP-tbJG5sjpazdPJVR8RjzJorID4Xhur4T04picqT-UxOg7hFCkobxpUUczj0BiNsUeTGiMxFOEIAPkdC21AFdxiIDD-EBz02fFDjNtxx-NZLaRZynSWdm67iWNVrzxSDAFVyCALCo1h_qKPmM1c881oJDQ0OvyW_5ZkcKqi367MylynWM7b26fOBu3V-lp9d_UIeEiB2QGA27Y7x54_n09K7McA22w9hq7gRRc3Gi1VeTfLhGYA", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110788877217678002519\">Sunny Lim</a>"] },
            { photoReference: "AWCwydjUd-TotpvE6jpccFkPeoGeany-QhiUrV1pueeUZV8BGyQ0NcwrKQeeAw5OaLY6hP2O3pNkgGP5OvGFouwxSTCWpjbdtHf9Sgcao-hlr0FVbi-hvox-WkwqOiETaVekbD4zy9z0AUJHspp3z5dBWOEWArlY7Z3UPZHTm9FnZ_ryPAZWFOKxb_9mfCOf5z6bPX2YBgndF4iOzkuOeFGwkwuvGl1TdELBSgrBIvmaM6HHBHs-h-sk7yySCOxvg28kE-X7dVw6mQVnEJLxN60yvcvsbIMsO4PdrF42VFMpwiO_HXypqyux78bNSNrTDgmr-ZY84RxNML_NUytxKnw5x8u3ICvI57jcK-s01cSkVDgAl7w7R1klbLVfDJThJan9CLARTALOAMVDXCQ9rQA7E7cuxK7IcIXerXf9i4KQu38", width: 3723, height: 2886, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114418016227144571982\">Captain (船长)</a>"] }
        ],
        summary: "해산물을 제공하는 식당입니다.",
        updatedAt: "2026-08-15",
        highlights: ["해산물 전문", "비엔티안 인기 검색 식당"],
        tips: ["서비스가 좋습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 11:30; 화요일: 오전 11:30 ~ 오후 11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7834578904305083674", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AC%B8+%EB%8D%94+%EB%82%98%EC%9D%B4%ED%8A%B8+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "아스터 커피 하우스": {
        photos: [],
        placeId: "ChIJ6wcl57JnJDERpP7Jwk76XZQ",
        placePhotos: [
            { photoReference: "AWCwydhTzUT6sCdeLckv8r7E7ZhHZTwg9Z2BQF-HUHamjpPRHqzdpmA5uCJD-zz6eAJMuq8DWZMjQit1CBFIKQjG2V_M6jZvXGaeUzotzkOsRoE-i6ZmyrvsLtU0qJXD1Z11O2yNl0iXBUrfoSSu62Dj-SHJHXZjA3L8Z28sTkE6pwFQIzBcQRgBIJegM07t7KLD2hNu3Y4n7Fz-uegtQCuiC0kwAcHUMvKgCJsJ-QG_bF3irBlY3IPvOVWM6dyWZj7mUV25s1CdKgK6NkxcqOw1BnRRUNQW06ZQzAKJy2OxrAQhPW0HpasuVAdpFDahOU6-bpyRRSnEg7Lms5q-Su-zaLXTkIcib9UQrepn8efCuVbvqF1gk1M1V3gESJC_nvydc3ddU_SRdJnyM6E6FpJnXel3pBlkxxABbARBbi_84TGVGt7NGTn7TSQb4dD95w", width: 885, height: 1179, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105429531823812364889\">ASTER COFFEE HOUSE</a>"] },
            { photoReference: "AWCwydivNY9egR0thrfu4JTi3RZTNbhVVMxDBhOc91t1ggTyOjuPMNP0eV7bJBWDFCV50EOM-T7lYqimedLQtvMnUozmPzqVlbUR93fh6xkHVSrMfYqX1tWQLUw2ZJG3SOrwJ9OaBby5LBflE_4G40H0ij-ldZkib8Uym1Dqd_2bbJpwheA-fnHt4aBCuN9_Z3XIbk3iMmo3JL4mWrp6--5gVMB72SnNRO7HO0TO6HME9ae7knNR0vehGQPJofCFleBINXBMF7Edm9fNkx2q-kq9GPJFTaBJTjSNhbd6grEjcVFMQzyyuYAe8eVy2YSFmUUoVQR5OOev3DFT3E17eAxQgwPrT3SKdiuTbLDX-9KyEsootOJrE7I0Jpy7QdrJ6IJAMBWjBUcj11oZwWmHfpJWlvjw2mTUvBxRVeNBzynBHIoCw1H75SDVd_wYVYLzcg", width: 2688, height: 3585, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105429531823812364889\">ASTER COFFEE HOUSE</a>"] },
            { photoReference: "AWCwydgEGlJn-nKIZwEo1dzh4PW6LRYo3ktn-oltuBmobDT3wkSacp7kxkcxCnC1YYbu-1KH9knDqP7dYZL33SGoL6vGRjIv3MnZ3H7wVe8xSMB80p91q1yq-PhZuAr5UeIxH_RTRC4ASSlI9vNQz66c6LWZtQgb6Dm4wLX74kEqewhvnHLJ5oP0TCUY-FdlN-FdwZlmYutyQldmujc93cDpsaoRnxjVOTZfuacAV0Dnt8AIn-whiZm2jZctsSiA6AC9Oq_uxIYSSeIhJkSOHMawlGF1Xl79g3q4FggsvKJaZV9AobsMuzlq9mZXDx5UlLadfGCrANGhh3KFn1SRI1X9nKvEZ8jlHBuKuXqJMinAkwZroxnS9n30YQ5Y7oY5eOjANmJXzPwSB_me2V4jahYOP5p8EW8cTLrpZn1dtSdj6fnWngmvv71XnVEy0xyQ1wct", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103869529451621095851\">Orain W.</a>"] },
            { photoReference: "AWCwydgImC6IT2qWIB672aemaLEqqIM7K3oIS7TFWxip5FxjY8-_yrpr7o5G3XlKpv_CvXla5uSkuDXQok_Me2wKRkSXWlS4bktDUkvpZmJBzsg4hQvyU6CKZfwGRrQ1Kiw47Aqoky5GrfgD-LF6MKCGPQzu7LJbATYKAlB9slbg34ZSwo63dbf8YbGbKxZPVdYYRqZCuCHuJCnqP-gw-SIE3h6jWfk8FcjVMHBphs76YqJ3LHUjTeLZJDsFShO2nefAxxb8bwRw4SraIRI548HC1GdU3yQPtF-ig-H9Kd_fMYWpTD26MaiUX10sVgpv1i38ssLhH0XAHEcwlRLNJ1RUISNWQhbS9dwZdYEhvMUnET8Dar0rYVIzBdIwMMpLadICrv4QF5PVUaU4VXeXRM8y8sHM3xJolg66XDhgKJPCRdvJWx-t", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117632218049031112858\">LeeNK Nikon</a>"] },
            { photoReference: "AWCwydjODBc9YQiTk2T6lSwF2lzCYEQ8ox3awaH6P_zA6TdN60j8EOHyxD_VjJmeZakaclGTyJLGl8XEVhtEG9F6T_S9iEB4Hj_ZSq8LqdAbxRONA9hN0JNk2ir3_tpqu97ntr-2A58Mdi-LkpeHwnV8KOEIUHGf9M_QNc_nMJdoYlUqgpNOWoPY7XlU5Rfq_Z6sZwNDwh7-WZTnpTa8uQNe4q5PW33nHnlDC3SY3ojmR49xvAKjf-OCsNrCeq17CEJimc9eVV7WPTB9YCYDMG0oZOnJMrFNBp3rYL8WKQYFA-FYitI_M-Xl9fICtZ_VWKrTtWgMeIW6_kJCYPM7sn5OcCFEArN7Zn2F3yDl-odQx9c28djlNWx3YB9Ozt6YtC3YTvvyU28NXNzfVKSy4iP8mr_Dkm6mbvvk4NZXoF4sZ-JLnVXy", width: 2364, height: 1773, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100365983687761103003\">陳辰</a>"] }
        ],
        summary: "수상 경력 바리스타의 고품질 라오스 스페셜티 커피 전문점",
        updatedAt: "2026-08-15",
        highlights: ["라오스 에어로프레소 콘테스트 수상 경력 바리스타", "진하고 풍부한 풍미의 스페셜티 커피", "사원 방문 전 휴식하기 좋은 위치"],
        tips: ["화장실 이용이 제한될 수 있으니 참고하세요", "사원 근처 방문 시 들르기 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "라오스 스페셜티 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오전 8:00 ~ 오후 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10690976306629836452", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%8A%A4%ED%84%B0+%EC%BB%A4%ED%94%BC+%ED%95%98%EC%9A%B0%EC%8A%A4+%EB%B9%84%EC%97%94%ED%8B%B0%EC%95%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
