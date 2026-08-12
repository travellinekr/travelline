import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "잘란 알로 야시장": {
        photos: ["/images/kuala-lumpur/info/restaurants/jalan-alor-food-street-kuala-lumpur.jpg"],
        placeId: "ChIJWV51lvU3zDERCyHo6Gi0cQo",
        placePhotos: [
            { photoReference: "AWCwydiPCnX16DQn34AlwaEmV-2YM7Da-xIH3xz7s8rkc8BpZ_897JL7X2JlbdKWh0tO61hkNYIjwSXggoc58yHUgyL9XbhDOPxDmxAzAPPrmixy0M49MB5Vweq-qSGwjui3QBBvsgcJVVwVPBrZzAj0r7xqcNDy1cfJH4u0s_u0IcIqfdDGc4ZTGym3CpUb0QsoVpzu5lmwsm2AyiJS8mCZCUvo7UUJNjoWhad57jcZ7pq1ikWTU9v9_IdZ0THrrSKRT-G-pMeA8wYaI9n1gPM_pSQaKt414EdTEs9UfiD2RGnuOhZiWbqlSQIk-M85fItzNDLjjyOQZkzT3kcUbmK0AS5rmWPk94xAPitUJfqWi5Hbm3OhkYcyg5av1QKeOYsY2A00sKBG7H8JLQIjfBQxtY4EbVnIX3FaYydFzinZAA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103004083007417358333\">Quan Le Hong</a>"] },
            { photoReference: "AWCwydj9YuwG5FwBThAMexZUGGb26c8oaDnTVf9QkniwL6-lEvPf2qzwlfvcZjHgDN4H3LFxJIWChCm2CvCSm6XZqSj3QjNe1MG2RMFJ0OlFZU50VCV4wKQt0y_Wj7D6tdbLPSQLcLSKzM8jzVb64QhnKdGUjpD5R6O6x2MudPVDPtecpi71a5JiUZCwGLMlHkjtev7QIjUknrS0xmyYcUACr6fSAYQFNajOPK0KW_rUdsn5xuD-t-192BohflikQrYcGMlBBhcNsN37zHKVRXly1cUdigIrMyGqU_amXxZ21CMnHz6JDuhjNjxQQstJHrmSEwodM9TvzRlW5l3w9ir0Wd2rbEr7vZqRxTi4o2HRGdIS_4yN4hMf87y5XUZ1D9ebBEuy0QCaGLLjA4jLvWsjoXycZdFbHcG7d0jOD-wmZsY", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102768859835829255388\">Thomas Delaye</a>"] },
            { photoReference: "AWCwydj38MfP2MX6XNthK3ZLZ4CGYYXyU6bRmktU6TxUL_vh112HZkN0qIk71ynD8jeJdRtXJbm8hlW_O2YqYEs_nray4tLxF0sOuf9NL1n6o_cQBiYWDRbpEcR9e_VMZchzeAWUyuM6VPP0-q5VZurPTt0lvlN_w3kTQZgGeGPmeJFU_AwJDcl_TEnyYjGbWiRSu7um02RR5-6y18DSugZFIW-VKzUoyPc3u2FmoGm0wrlgzaJfeEwDc7PwOCI1oo4hkPA9ervp5wUFjRjMp9XGY-3XB7Kl37sYVTrobZzf8KjhtcUYaiJwgIEsXW2bjEQG0IQ8ZyGOTzs96ZuDOLSKPlAk5pElN0E5XflCSu2R2t-92UJ1OFrf_GFuTpCuY0hFhQytm--widj0W4tIiXXzoCbgkTnYImWjwNeDJqiTZwZ9fQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112861222927029485305\">Wiljan van Dun</a>"] },
            { photoReference: "AWCwydiRCaDoSNHe46G-FXT2D3GVwfFsfsR_hPdS41NAFkaCu3Il2pXjwr6-eKJ-8lCRUa4tgvwpVZDQ-srQJRnJDfWKS6DQPDlLav1UmWMRqP5hSwdp0sn5qiLbSpwJhZCG4ZBoDtzPMPJeL67vBdVWT0HaNk4uNN9477quglXvFNrhsVT4KBVk-rwbMPUW272h2Jc5SK-TQviiQDusKxhnMxGkk2zBUvUZ4Y4M1H4zcpe1yR1VwpvEUNYlfxq8SstQyXpuGzadmnZE8MFpR0F7aMZkdX-4DQCYr7RbFqYnffcPXLQn8RfIQHsTTKrZoseZESoOgLwfWlGa4x_OE5lghxP1rqmeT5CuYM9YglXZNsepneiO0481aoxuzCcWaauBP4YjBAg60zzdZdcVkihq9108ioaYN75oeCrsuC3JWiDNzeZc", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100731854906316113848\">Wahyu Kresna</a>"] },
            { photoReference: "AWCwydin0I6olVZNOkwOPbqEcVLx2LRtuLHNg6PADEWzuTF5RaagMe9kMFeKMlWWD8uYvL3COcyV1Kkc3Ey7qY-gOZ4Pi0XlA_EhV-xIlzwH625NuLKsOZ5qc9XAS3h5GRbnHnQXEyWT1sQWW6KiX0IPUtFi3JYFq-J6JZSNy06pLcmlJxH0Q1jkmkgrjHi5qbq3JGnZL_0EIvYqm1mjnPdaopTo2CHhg3oZvI0Ksw0JByqAZzX5yiw4JrKEdMegWfTeMv34JYZVa1-WKmWL972OUYXNZk3BzBKF67wY87yDEElwAWYIVL99gs9xqcxZlc-B1iDNjrNg0d_rRBfEsSe1CJQcsB96QP2COvAWjxr-W3Jcrw0PCUyDPMrN8YjKd7kuWHDxDAJdNJLGeVtT0DyUO6G5wo_YOV-19RdLpNmqrVhdZ_txUQFWWIvOa-UJYg", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115411662888871142488\">ivan puskaric</a>"] }
        ],
        summary: "다양한 사테와 해산물, 두리안 등 다채로운 길거리 음식을 즐길 수 있는 활기찬 야시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["사테 및 각종 해산물 요리", "두리안과 볶음요리"],
        tips: ["저녁 시간대에는 매우 붐비므로 여유 있게 방문하세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "사테·해산물·두리안·볶음요리", items: [{ name: "대표 메뉴", price: "RM10~60", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:30 ~ 오전 2:00; 화요일: 오전 10:30 ~ 오전 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5891102546099294315", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%98%EB%9E%80+%EC%95%8C%EB%A1%9C+%EC%95%BC%EC%8B%9C%EC%9E%A5+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "롯10 후통": {
        photos: ["/images/kuala-lumpur/info/restaurants/lot-10-hutong-kuala-lumpur.jpg"],
        placeId: "ChIJW9-tVyk2zDERU_D7NwNI_f4",
        placePhotos: [
            { photoReference: "AWCwydhzC-rl6auzyy22LsP1uJwmwokfJhStLoY6YHUhNH4tYCzuZUrcSWu5_37kr4PLW4X42x7iHNTrBX-ao5WQOw0h7iuZ_lDfILoLmC_q8wnzqWeOlC1D0mg_78jchKicH2FT1MhLhRZQPyodRVt3AmPrSN9SstKQfGDmYY5JNXjbygd4Mb6ydG4xo-IkWCMTuMR3ECmhaLzVEqkMohkDIgkhCxZuUUtBkRA5BDmXX4QziwA-3xGKR9pEMuouhDnv7figZrdRfRVkoaYSp4i2TyCW4iMVy53NSDP4qMNCGwCDZMXtsbkgcuJaqf6ioH5XnaosEANVrDY6NT1sx_AcBYRJFZTomdG9qe6i0CCmZ6HIwqunphU7uzbYTGUFEpPLt8ZUKge2H7MsJ-abzdXQI0dklTSevbEDlh4jK5vUP3fazfQt", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110806253733464240338\">Lot 10 Hutong Food Court</a>"] },
            { photoReference: "AWCwydgOq1g472GwnEbaou7Xd8pS5YAdZXA4C2fGcLzk6j4IQZifNjAQpKmZuosvydQu74r6wDZcFe9LzlO_omm0axyb7LI4qFVHXbJJ96eo_qQu4STurphd7G84tVyokcw7XL5nL7u_R7kDz1lYqEt0MPbDfy5dxUt3fvDvfL5TAy5e7mRtVE_TMGRZdRp4qvuZEYg_Hl-LrgnzawwlHVTsphn1KmBhepzBrMIgRz4MnIULIP5s_GP7MpQDKmcH4Su5G1lbIvToH_hsJ8Qerg_YRK28QtxT6Hjww2nqrswqUvxrcHczKmZE5dPcuLS3OVY65aqqTgZKsLAyZSJ_KJm-6ro0dnDlKOfrKsICRyZ24t-ho78l8ioYxafYtFMZXNGRBs0pp6kw0GFFBrnk7THDhhFyuKVhBrN7ojDrs0cyeaA8z609V9Ut946ZiIrS-g", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112225167575675749139\">Lollipop</a>"] },
            { photoReference: "AWCwydh_1isFaeBqWedUAhatMdGxz4zdJENmDroRbXu26nSOBPdmRzY66CBS0ArCmCQX4whEBQ4GlQafWaFPp0CzyznSc4lawbUxsWwlQS-Lq-3MnqEMqi7lW9LhhBqJvAZzHaZslYe-DQ83HGH_r3AvMPow22gOUvHquT7WUjDhOtGSyVuAACYuY5zfpEXNejfjTvz9SgV7a68Oe7a2Uvd1y4amSZzD_PYruNsGEQUJOGCeh82EcNJpHQpldMHa4XmpWSmXkEtFg16QheetdYvA_E33Gp2u62fkq2LZQVMzXuJSoLqYazOzHmJGPCOpEoY4mPkDXdIQ34I92Rogn_uXIGSB1m-DbVMhOl0BoeLE0_WI0qBES6um2aO7zzai-uEe7MMdgOfBXMc8o7Wy2c5VOoXo0-UKS0OpjdbQ7Z5IspR5SpF4wH2ZQHdo64bu7A", width: 4032, height: 2681, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112225167575675749139\">Lollipop</a>"] },
            { photoReference: "AWCwydgse-o55hNKSZIOD7aQwMvs7q37etONmmRRZ7UWgxGAPa38BedX_XMyb4ZgHOCdPwJD-lkCOvM9K2iDtUltobCuSuOnGHRdmutB3K0qOjkhb74mK5l0FH6vbBaZVCvkpS4j2TQI3xRf9aBUqJAxa_auD28OUzOXBoaszhiPDQxhANbnP4y6Ut5FFiNJ8RbHDpC-T4zRRcmjRafEuEOBHR0PjcFTqhZyGZ6ylmLoEPGR7iwXJCkVceo4va3M1azvK1JigOhTpoLHH_4QQs8GOxJGGdL0p0qohHLNbwgIJB0ClK3Xsw07JUs7mDSg1nkWiyW7d1k_SiEjmrxGP0NvmCjHWR8R3mqQaJlfkFKKGnjRfWqbcfRvKzWweUZuLQ-3_u-vZAKKTM4q2ONuwvVW8m3wi8QJycVtftKL1PrhHQOs7gXrpA2GJJ67AJ0RMY7P", width: 3887, height: 3300, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115576555226729394225\">Mauyeeyee</a>"] },
            { photoReference: "AWCwydgHhPOalTUnOd2xcwRxAISIbGRWTqNWpJM2wKN80hfSw98756HZmgCAHGVIHYqAaA_mO0cTPW_GuJAZ5uMzWk7-8Bzl6XeKHeO8GZg6Aleo8veRmHYaRR03nCxgm-EcDoWU3lY0Pa0D6QiT-xnz1R3g6Fq99GCDq2nNwLjVh4r2IqMOBVsPn9TgVgd46_7u2p6lgqwi0nfQ3EcHx64z0FMI00oaM1Vpg-4SfIc2KwKuX1k1OsGoN02kD3zeIWH509NVMm1PQbGKbwJb2JVgdDXYhsNhMT4TTFnBcc7uzDsf_X1F5FrDn0Wvfp8vbIsc5aDjsbCsxb6t4T8yx9Cmfi8CfMtRFhB9mi-1sisRzRHv17MW-_pKjY7F7_2xssIjXG-b37HfKhU0J3hC8CwS_X5XuvZq8jCS9KQDjsIscuzS9Mg4X7jcNimYSUPKIg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105917241560236240982\">Mike Yong</a>"] }
        ],
        summary: "말레이시아의 유명한 로컬 맛집들을 한곳에서 만날 수 있는 프리미엄 푸드코트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 로컬 맛집 집결", "쾌적한 식사 환경"],
        tips: ["인기 메뉴는 대기 시간이 발생할 수 있습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "유명 로컬 맛집 푸드코트", items: [{ name: "대표 메뉴", price: "RM10~40", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://lot10hutong.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18373921233402851411", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%AF10+%ED%9B%84%ED%86%B5+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "빌리지 파크 레스토랑": {
        photos: ["/images/kuala-lumpur/info/restaurants/village-park-restaurant-kuala-lumpur.jpg"],
        placeId: "ChIJIfYLMzFJzDERPG9vHZ7DqiE",
        placePhotos: [
            { photoReference: "AWCwydj5NbRkZa8Nu8WdF6sDfNLTF8P2bmDyNA4DgUQTmEBIRpKT-1SmNai5jfNDxvUQgbL9MS_nyUcNJQ4R4-2xDBo20KGc2menghrgQ7bgf00zABYudykF3F5TmiY6gkN6_hG2YiJVu3RmTYGE62heHpP8j6T9ONC4kV6FKgLWzNnUPH5-mUjVUag7Pipusuuf9c7dhM-ePgeYIo1y6u-pu7BKJfd6cd_vjjX0tGr_cKMa06f36ZWrEor_gHwIk1DN3GD0hza6zk_zqGHP_Wd3LgxlVdORbhUKSgclhEzB1TBRaVX0xZVz1_LQb__xO9xuGWT_yvBaQOrGfWhFuCQnsqM8m56QoCGevDP8EkVihp0h1yw0CCLUFmPU7eQ1p5DN-EmFYzcQuO-xhV7zAoxSR9w_EO6aNF6HAlyqOfVk1Li9kbX5", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113456002088691064546\">Tsuyoshi Takubo</a>"] },
            { photoReference: "AWCwydgWxnOIa5DXV6424BPsmjDS23ZEgzE7R2zde3xfxvYcxwkmjZ9MRoJ2CQIvCwxsz0fXFEPUQxmalxpyX3052EgfStGns6P67UIVUyVEVdHQQXTbO_SMMey9C8mZxXJpc4H88I2fXBc9DJyKypYwR2Pelu7mR3eXeBSbrvo6B7BZjljeqqSvvO_bE7GIdratyzItd7jBaOS5jmtBFreJJk-RT21Bc4g3r3pyq7EiROgDn1-bakANWIAYTTOlqi1MebseYL_iVTDf8BT2MK0x26_r3YSx0VunuiYBYxg4LmxDrWdoREWxWKTWmenPMUy9FBHh2vq6nsHNLrX71yJOZU2KeEyEJxE1A2QRf_D67ZIoYgsf8jh5MenuG7zj02zHCs7ztoKD94HELLiwzVcs3lCxH0pQXN_KZKX1TWzMRMqG_X8IApgr9GQM6EnawQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116422993218525371244\">KERVIN CHANG</a>"] },
            { photoReference: "AWCwydgs-IAM6YXqIcmSCmwEqDll5hG9qES-xsKpQsVsv0Zsnt7n58WmV4wDcrQkHtsglrD2hGhO5m7Oe2NE-Z7i5VoUondHFx7Bcs6GmEvJSD8LzL8qi5WAd_DCdvYtl7LfHJT3uFcUNrfYwKzkY5Eeqe8Hzp_5PZumxjcCfpKFJGVP0G8QiCo8MQ_HBKOdDXDcBsHsV3kxf1x2Kqd0OqN-P3-FugtX2W2HrRZ44PyDmqQMZ9hgpUQMElf05Q72S-c8EkSs9vZPVx1Das0hdwE6H_k3PjuRh-ur0V6EuLhBBgemt1386G3dngXHz37oAfWN2ZSe3ulD_GzWBcNoVf1TgZAoQDWnjhhmgP-f3l3BuErhAPAXCoNUClWLYuIlfOFYHaCWx6cj_fet5xufHCL3o0n4Fs8GfGrXXx_t5Q64JRvNjhK2", width: 1600, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106196309134746185222\">Ismail Syababun Halim</a>"] },
            { photoReference: "AWCwydjL6_-RMS-vnUlbbTE4fNmlx0eZqGf8mXgehe4o7m6LpaobPEyHlQbR-kjmvODHDflQgN5fCaXB8Nwnx8Aw4oYc6P9HiOKVclAwYFD7GZHAZtKTNtd5Koez6Rd2tA2RdBRmCHBVpWeBrw_hmbRHTd-8ICTFtUpNZVXvCVVzBgpfq_LUrQWAN9LilDVUXqGh-Y-VVE6-02URTrMU4b9Y6uzguJAqvKOZXkp2ca_q8tcaZeouVmTLAsFyFmv0rBuwC329CYAD8XBqZFvZhpI8aubbpTVH8CqRwSSAlgft9wcqC72DWrGPkZIV6TiITjTQKVVjtZGG0IR1uU0G-3g6JhNc02li_3bz-8TZRjE35BfN58VrRii04H0gL4BmzVy_qNMv8K0z7OPQSvd0BSRrs3gzqLAFrKjrg5XvmF3lFSK4ZrKUWf25fY9rX89BTw", width: 1448, height: 1086, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114781365317893811340\">Jane</a>"] },
            { photoReference: "AWCwydjQssFBcWhspOPiV54YeQU9wl4goZO05MCXODuZsKaXQR8mm_fAkVlBIkXaE1ET3jSdL9VNU7XDahMuNEJrteH7IDvbEMDexcOAJWCW9y3iAFlnehaNsrn0xDNxeK4Xz_Y-eXuNzWP6KsCMtvubwFwRLMIJCG_3R7iwfhtzSA_u2BUyD8EomFtS66k8hR8UbZWoSCOnZdiOv2BJtgGukpfl6JWpMpU6dwWrcS_8aH0rgVilc6eB0Skoq10r3TroHPET9588jzsFqNI3ZEVyho1QIPiNGaKSgzHZ8dJwFTTN6TY4YwVFwj6gsySlDsXpEb8fBU3w2m50h-ISXNjqhZ0NqjJy9B1BIJy1WxDjvacLmUJfXf5Xqnme6LZjoawItiDKrjqEbq8Jffli4hZ-DCedx_LVBtsKkl7LAOhPR6ov6_uAS8SUf6TLzdSsSEVq", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100050160985766053375\">香川県高松市のバドミントンチームネコドットコム</a>"] }
        ],
        summary: "나시르막이 유명한 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["대표 메뉴인 나시르막", "현지 분위기의 식사"],
        tips: ["피크 타임에는 대기할 수 있습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "나시르막", items: [{ name: "대표 메뉴", price: "RM10~30", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 5:30; 화요일: 오전 6:30 ~ 오후 5:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/Village-Park-Restaurant-1639483826264341/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2425966433158524732", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%8C%EB%A6%AC%EC%A7%80+%ED%8C%8C%ED%81%AC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "나시 칸다르 펠리타": {
        photos: ["/images/kuala-lumpur/info/restaurants/nasi-kandar-pelita-kuala-lumpur.jpg"],
        placeId: "ChIJU9fzNtY3zDERhISIlfr5aqE",
        placePhotos: [
            { photoReference: "AWCwydin9SB-k7ZCE2eofQbg4oshbNu6q3KA_a373l4xeIfUBaD9x4ylztMG6NnZuP1D98Ie8brlFFxhnDf2qFCuUTWwoD60MTkl-4Rh4CwYdoWb9tGu9BhcnVUrQfHfeWlP5krCyBfAcpRd7DvTMyIRnlvJiyGyikMyQPgBWfKBW0ySde7zqsyoi5dpmmlH8akWZQKbEdbJ56lJh38Tg1PCX3lc9hrOL3DYMSE55xsnDuKy8jXJs5YrGqJVX3R_5G5XduN_HadZ1GBOxHIkYXcPpf12s6xtC8XWjVD6czgYtVVkM9rEstnbLfRSmh6xaXul1WBO1CW-Fs3Ar-BduDOSJNiaVn1k2C4Ls0zG-R-GGHfFQfenJb83XdAtxmEo3kG7UCA65Z49XA7LBemY9N9SrIGSl76quL9qbsjyVq1BqXS3Mq2oNdQmXRuUEOy7pOr8", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117682242240231110777\">Brenda Charlottha</a>"] },
            { photoReference: "AWCwydgDJIXSci9P3whi85e-Gp7FmJvkHH9lKG_AKXWHSxboP53H5DJQc81Iqna4oJpYGp1idSvus5uhCzPPZ4neHWBA45eufOsjKcwBS1f-mAQURDSOSuacVA2UmK0Jamp6h60qsmPMN5s20yHLjIQOn7o5ildYQnNuCHptA4sxdnwLZjL0Gb9WQF4zZsXUa_n2lxuw61JCK2ZCCDgSPqgxfBS_Q6KjCfDI2J8xDLY8nd8aBsZ7gBeaoIfOKdPbzD2lGKw2yokbDfa-xNXWV0lmMGyrc6O8aK0qdJPHmoLcHaXPU82UVo0HuKttsxwCLLN6UNOAwiIiaM6Of6RGR6SNEKH5kNfsGZDaTNgh0r3hxgzyFrj03qM7ZwteGypkWVFSgwOzOOAiU0lsNWVKu0H16gUhg0R9m1wTR81uQhvCLkJGSKOvatnGR6k1XSCA3ikA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102587727654658143532\">Sam Adel</a>"] },
            { photoReference: "AWCwydhwbPnq53MdtnYyR7GBs8ezxo3Mk_4HiD6DCRf9usMLFeqPZS9ShF4uJ8zLRN5ym1PqszLwexM2QAuiBrWG2TMgFijyCh4B5t62qMF4a9DAQgl1aqznT7KxGfHQ6E_TnHhHEZ-zixqQRy9SUz3YPgiCQvRWs-tTSryf9dvRc8mfyOF5YQRoFA1pE0eNDmTi9ZhtF_P3uAz_GW2iuJQUzcPpsCg4AiqRk1077XL5LCZQyPVjNV2tVRJnoNhz3uV4oucYJ0QzVXAYwClRif-wUN19FtykfPmfD3ZfGCZUTtBvaadhDOvoCHg5Ugahqr4sUGFgq4lUwtEyWkQ5tXksdlocgdHTFDQwbGYvUCu-MAv34g99kQEjWy-zaSKKBKF7q3K6V-8Jg8JUmq6CwTZmXOZOlT9pjU-1YfGCTd5sZFD1Mp3m", width: 603, height: 450, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102092987698931861852\">Restoran Nasi Kandar Pelita</a>"] },
            { photoReference: "AWCwydieTxN06o3SzPi2zcmVF3uwTE35I2GvYOji_pk2DPEy3UmN4yyZJ4EAJfIiMRDQ4UUJGdaU6pft5NAg3laqK2CVP1eW35ow14ExQA6RzmrpFP5Njcyc0HGS0uVT9oMe9EIFppS0Vg_3dmtwEn_42KQz9kVx6yJo8qpAZEPNywW1KWtuUw9p0gyXZudf9VaLLg8TntN9qmWsVwefWTw9kRbSFjndZSanzhRNzRYne2Ixf-uLTdg8yrTa1cKchxu0nabRBPmvL2qkGsXbawtAvXrrTlQtKHuVSGc1J17ut3jmumb_F82N2DHFRRKLBoNz3kHofK6vT6IoPI0xerrNR75dk232b0hWuHGy5ckA4ekRkCN7AXEEbFyeVRG0K2N9_eWJL5wkvC1WC7zTg3XFCdloY23MlQSNkX5kXMnXM-rUnZP_r0hbalKKYXX5uI6C", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103489044014440470098\">The Muhtadin&#39;s</a>"] },
            { photoReference: "AWCwydhNL1YlNipgp11w0zM2Ch-6xK6hnox-RcwPa-4g0vXUoDItK_hXpAiN_HZP9MH827hIiSjq00SZlvXgdJrPeea8geR2Ef7ZDwOTPv2PxtL2RED4pCTh2hoCROhFeIDgR7rcvTITD-QhvCn4zULWT662ofE-KleTQNQ0pnp9LSTgrkhIbS-Diq97EChqQI1FObWy1oDgVR4k9NoXBRtE3XONLSof-zxIje9P_w9Rd0fCSZsxCsLb194Yd639gwwUK6a2J61yqhdQS7HWB66XBNkeHPcQK1WMi477Wra426W9VN1-wPZVBMuPDq4biyJSQpixq6WR5qzShota8ZnezWwELPMkPeGSFGs4yxAyJ74902cS57hyCtDvjYMMS4JC_seRi-J37g87YjExw3ZlDFtZGWegfSHMxu8HeT1pagTYDZMhs44voaEhRWDSoWPq", width: 1440, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115651246898785477042\">Arthur Naing Win Aung</a>"] }
        ],
        summary: "커리와 나시칸다르를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["풍미 가득한 커리", "전통적인 나시칸다르 스타일"],
        tips: ["다양한 종류의 커리를 조합해 보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "나시칸다르·커리", items: [{ name: "대표 메뉴", price: "RM10~40", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11631383842283619460", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EC%8B%9C+%EC%B9%B8%EB%8B%A4%EB%A5%B4+%ED%8E%A0%EB%A6%AC%ED%83%80+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "마담 콴 수리아 KLCC": {
        photos: ["/images/kuala-lumpur/info/restaurants/madam-kwan-s-suria-klcc.jpg"],
        placeId: "ChIJc0VyLdE3zDERvCBbqCsKi4A",
        placePhotos: [
            { photoReference: "AWCwydgeNGBT6hHXE5kt_22chz5BDJ3Af9Ed5cqoLH16b0zPuviVRCEHzFsilEe-lfKgg0pjm5r46PP7j6irVTycadlyLbV9652uqy7BQRhSgIF6JILX2JKjltbDWAfL5SQXaBXXCyrX6By3QbtPD-AgUacqxA4Ovr1yWWRe2mzEQ2N7sAKkfnvLHtIn4X5X3-t58qWHojcnpgXCHP7DtLDDs3Yk-3rYDI74tr5kt6ZmLGBpX7AYkTFdeE9xdVVuKa4L7klqUKXK9ehVHxVhq3hyqzUwLvH4Ox8bS5TXMM3rDHpWnlZZAw1OebPZS0HBYcgSJp8AufR_XgOqCukDcXEj8-qHowfbLcwiyjtVqiw1pBdBndxCLqvFm_HnqxgvrHjp8SnMgZTjgpCFuM7PwThnAHkosoREpL0KT-q5WpV5gbaAgQM", width: 960, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117342816505416775759\">Madam Kwan&#39;s Suria KLCC</a>"] },
            { photoReference: "AWCwydjn8OlpFvEM0b9JnNt7WYVlBn4LESUTHCWa8FnP1YfLnR_cO_4nnijUW9NZjie2p0SOnGT31F2o-NNH51vjMnnLgFI4l5iB_fXfnSwiOtnHS9-4G5jb3A8CMbWdbVZ244LS7d4R_ZqQnnscD06ftxwGUO9CHf0Ys_boKHk-uO6V4NZXPnPwi5VQtt5u3i_qc6HfIkdzgAEuE8rBRW1e7aknTCdhaB9ni4l-Do15YK3i0NEKXpv7ILO2VqVtUgWIy_jtsHxzzytP4-ca4AlMU5qeP0ikbRmlOmsWRAx6CvNJrqSRiK-Pg439MtjVHf3zK_WRb7kWX0s9fIMazquW4WJvvEfODaU__du20L7KAHrMDmEdUHP7QywAYXnt1ClfQxPJ5__8l21DcK-ixWLK3jaNq_yeELIyIyIydYPBvvIAO4zJkYKYyyXjlgadmqAT", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105227112617395229655\">Atrayee Basu</a>"] },
            { photoReference: "AWCwydj_MpknhzlM8SUIvzoDVv6roj5OUS8DM-JeyBuaIJFjN4-jzzJugrWjSS8ZJPXypAdVYLTfav5VjfuKQJNBIpx0Ncc0V6-NJHZnogph8eLPJGGRpK1ocSWLSF-Ad3iXEIVGps_e7eXN6lBbbIDsw0j8f-7d1WX4yyoyIrYa44t8N3_-GuOyQqcZxgOGm_B8h2az_AjtkhwbE6qVWEoD9iC7PzXUrm-SeP6E6xbFhJY2e0Ac6znNmYyR5CRymQAx59mr7VEGx3KakomIQFbssERMzDg_gB8Qp33vR5Am-8YN8MkiuWpBP-1iZzl-r5t8tQEJVhpuTZsLjbChrLwMe4XWpy8OZG5v-WBn9j4XQViRWGw5XudDIi0-GK7WZTFiJDNDJAGTax5csVj4Twu36LVy76IVnIwkytIKrkrHIag", width: 1000, height: 1000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117342816505416775759\">Madam Kwan&#39;s Suria KLCC</a>"] },
            { photoReference: "AWCwydhW_d49J8W2gRQRA7p_7sf6iA02RKNNRXhjIVL9xdke_7h6iVn-CWWHsPwzfRDvfAD7SrfI-o8NrRl_YB04TW6y0qCyEqoqzWJ6jiMSxhzYcerbTLiDXE4Kzsu_Y-TW15t4-ATkKw5WqQfRlsyaHMvmzlPp1lh6a-UKXjn2NVj5k-1fBVVhQR7vOZeVp1d8bQN0IDqZftU4dxKjVhyE8PK8S0wM21h3fq5KOawRS70kcUm_hDIslpPUu16x9VR5bRRkm74uGuC4q8Hn0aHlj5ZnlWhYlEQVBnsmusaBoYkody2bPnNy9zAYjFHnRjs5F75AbZ0xunqjU4M28S6CgnL83jAR_F2Mtj2IcgCXxqsGeedylDVepA3mK6B3ccbLE501l7OIUyHnO349l9IoW0FZtm0JDj_Hjkbua1JUSt_83QHDf30Ts87GPP-gN9TL", width: 4096, height: 1844, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101981234732686368702\">Truman T</a>"] },
            { photoReference: "AWCwydiMR7zvvOKgJbUvA4EiPam7-a93sd3WYC8EEFIFrtfAGykIhyHJcnUfOMAxCU_aqPBeD3ZcpMX0cH7T9cUomdcaRUg-cLdYtLpcry_7K6yDsmIyOIcM8PLQ1-ivMIS9MGGyuTTR8O93Ogmu0GkF9W233iyl3vZmNuSAuAo4z-IfRtlrY51Oo8VMBDr9dQw6Jg5zMCLEiuLrUcTlvjrGJZipD48LGvuy5cOdJNe8z4d7plIk-hL-p5ubrtycQCDa-GxSHz9HhQylloC0VMvT61rXVID4gt4_rkOS-Lo2YST6eJG7WKFI1uoTKvtOqdzlep7gk4y1y8vczh1VfzEesIU1rTRyQqONk2avb4fqMM2w0X3dBj_zP6n30oAUplwrrE7BpIcmik5ehPWo3IIYI4IBq4cdCvOaCxrkRA4v_OtDSWkqIMd3RrOy1OEE8TdZ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104533804232655009439\">s dsk</a>"] }
        ],
        summary: "수리아 KLCC 내 위치하여 나시르막과 차퀘이테오 등 정통 말레이 음식을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["나시르막 전문", "차퀘이테오 맛집"],
        tips: ["쇼핑몰 내에 있어 접근성이 매우 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "나시르막·차퀘이테오", items: [{ name: "대표 메뉴", price: "RM25~80", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.madamkwans.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9262508241241972924", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%8B%B4+%EC%BD%B4+%EC%88%98%EB%A6%AC%EC%95%84+KLCC+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "비잔 바 & 레스토랑": {
        photos: ["/images/kuala-lumpur/info/restaurants/bijan-bar-restaurant-kuala-lumpur.jpg"],
        placeId: "ChIJhUW7pNVJzDERrVLuwiGu_N4",
        placePhotos: [
            { photoReference: "AWCwydjvzQtPE-8MM9fCzZ41_AqKRC_Ml_HMlaTkpH9FuIQ_MaoIov08g7saBivwnoc5X3WInmdkvAvnQiJzJpDM3FnBSWt15yJFcALfAT6x9FYro5wOmXI2dazd897B1C3tY9q3ej_RARay9tW8U-keYK1wmiYiC5cIeA9HwATgFbEO6B7ICjwxcEKyBcIK3nQ6SaFYL6HeO1pNdgVvdjgoYnwCL0I2B4MMq8zhgFor4oAgaMEx91CXT7uukNLdWmQi6lAD-4DdOblGMp4242X_ktXdemKfGDFh85d4Eu24KW4kYxkt9cSpHpa6c_4K0Euk6JUmhZXLhzc4aBi1oEMRljiHQuOGfdTPsyugNojKZ9BIVmDSy5EMKgssg3U2UMf866GC028ggZyj2vHESVsh5IUAmNu7GtUtAH7XZ3RsmHA50xAD", width: 1008, height: 567, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115235369436126903794\">SPG</a>"] },
            { photoReference: "AWCwydib_NHX-w-PZRpyeADyUrEZjD-7jvivspae5d0rW8uSvO3oB4Ierf4TfvKSsJgeOni57B1xjF8xDKFt0QqPUA__mfYafc0rBkHiWafzjABKy7RYn0EsoLei4tTTKDS76gvH0tNfSJYQRkNR_iJsWCO13hdnBLZy7GOpnc0jGLT2VYPldmEXz1wSFIxuiWEnDxMPl-PGMBKyABoxqzvKSezFGM1uiRZEkE8j4SVRYSubmcWrS5YiYZUZdaVlRqlhA2Uc7Z1jMXOE7ep9s4LXuqVPLwbPJA11SebgHw5DIXHASdzNYrcUEXRHwOZnRQcuU0qWRaXFYT2xiU3SQryKM0bWUSoYj-6zXUW2S-IeBmF1QnIgRuzRaQsqp5HxQt16cAw4R3mNTMixMr1Nm_wCWRFu0YSYbBtBQzSzI8hFjN9IUWCGkfvtcFDA6Qtv0Fzv", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115790407258924281291\">Taka Hosokawa</a>"] },
            { photoReference: "AWCwydjmbfzAfkCkGRZuqm3bf1J1buTgrAKycY0cLlvYwkoJfm-TU6CxfYh1B8NwhwWyZPGRutSjJJY1Ovkv_fA3FrQC7TFLFjXglBBrjwtTs-2JZIAJLDoxcSkpyRHXktJH8EtntuRcNrBZwzwIGaVgI0yKJ7kuLOWMPsoQSj_l40P6X958BS1n7Tif-QEgmHvdyJqokX3J1ZPP5nvIfLN_Eauy5duL4npirC9544XU5MvqiI52S2zMiQnPa4MHj--Rs3dPqZ3AWNMl1SLAbkDDn6rJoce88sYfgOhed7OIrwCcuINuCHRGxgK7cVUbC6K2IkEYl0cD2K304gClwCW-UfQCcWvnX8wcnYYlWYm3XxrOlrs9koJeAJ-zebEx12dOpVcXcsx62G4dZP24hbwFEWGtGashe0i_WOvzuedxsjvdlO_rht0-kAfHg9y5M5eZ", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112497578972246043602\">Lucky Jeffrey Brown</a>"] },
            { photoReference: "AWCwydimcEucRLTymKOvmepnYR5Nzj24RMCC4zjsIr5d6PkhYJ_soHCXTI12LOH_i4GOOVK73Ewh0pyl10jcQ4Z7POF-ehuqjQ-cD40w_UQ3dThpkL7654FQHXs1a_mCGotrrhzmgwyhM-PR4_KyGTj_eV0dGfVmNR7BkVETogof5zRAuKGSFiHI1_dOCU-_hW8AMF8aT35UXg3ElUmNo3iy-bypSZrZCUaxSVFEebSXk9yj4YTpMTca5E2CFJ6_aSfbry-rfe9FZVJvMVSIbNe_lVUsBVJ4jAYgiU24c5ORZGvJBzSJKpVd0MbR9XzAojkE0ZuLPk_xsVVTe50kprE2Miky2L_XNeFyOGvaTf3ABKyBwuAF9jg2OKCIphwDu5xE08dqQ5uUS3cjb5KzaYRtV9iGPhHeDz6-ckkYmffJozqIb76bk7SrO67IRM9gqQ", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112497578972246043602\">Lucky Jeffrey Brown</a>"] },
            { photoReference: "AWCwydguzogQj2cURd7xUrNukQg6qbLE4uR13DaaFcH2XOqEHF_gmdPB098-TgrWhVUd483mnb0okLkNfaTpJx7x7aSQIls5fB3I3R19CkcvZSyykUQzy4yzFmHJwu7TAidAlWyxEIrrkQv-yQDZ6xi1azYT91Qjxq_SSRBsom_VyGHXAQqNaqOG6KslPIA-o8pveFKaPtzyocae91DdVMlnuPsd3dvXBnLCgvaB_l-nh3FBAMqPz7cTbVxnFH32fdDt6CU_unqPCuepUHnEXz0BAa0dnudegfN-YtFXb7FJpZCrE2dRNMMJvFlDUxXss25_UXXhhFaHAZn7_M262bt1decDkk-Y6Qfeo-P_AgkgBgPSis9bLSyLj5mDq-DzCMY15CBm7EM9q7wTtjc0R_uimDqobcOJBLl6gB36mhksPxC_wE_5lEanGDNFgHC8WQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115790407258924281291\">Taka Hosokawa</a>"] }
        ],
        summary: "고급스러운 분위기에서 품격 있는 말레이 전통 요리 코스를 경험할 수 있는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["말레이 전통요리 코스", "고급스러운 분위기"],
        tips: ["특별한 날을 위한 예약 방문을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "말레이 전통요리 코스", items: [{ name: "대표 메뉴", price: "RM60~180", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 4:30~11:00; 화요일: 오후 4:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.bijanrestaurant.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16067909030578639533", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%84%EC%9E%94+%EB%B0%94+%26+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "드완 1958 바이 셰프 완": {
        photos: ["/images/kuala-lumpur/info/restaurants/de-wan-1958-by-chef-wan-kuala-lumpur.jpg"],
        placeId: "ChIJTYFd_6s3zDER6OJUD9GC0TM",
        placePhotos: [
            { photoReference: "AWCwydjboosojmncAQ9qB0vZWfr_W-QZZVM5nmdDjf2gXeH3Todb6uOJqzzGwlr7TYSeAsEgcRLSBLHzts5NVXE0g_qw2cQt6t4kuP5IUsdeSrmZlauB0A_a6pDuPix_W8XMNfMGF4ZtHvRuGypVTLTROi2ZF-smcVI1X95gMkGSbMzMaKGT5ftr-C421r2ObNYhdEVadGJeFUKgltHbBGQ41j4ObzT3NRQUxYxJeR6F_zWnvo98chDny8UzbqysV5e9n0yQhU-jsSE9oqTjN-VZ43czE6Aa3YJvbh8Dpa8Zfr_QZ3fq88MBAY7l6BNZTb96RM46oPecwdsi75aRYrSTTBmQX2NgyYFz4yZDIPjvTUKJl1JiNYuIqmedBY3hXfun34SEhbbzLmRElNsCO77AFlGll5ViWCjiDZlW00ZLrCcMIA", width: 1804, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101141212342093881232\">De.Wan 1958 by Chef Wan</a>"] },
            { photoReference: "AWCwydgZRyT_c9Z10zhXq9zlmczMhbfe6qIinEIVg7lJfa51yrRaW8OWE3BKfZcRRblDKo6uVfm2inUqWw-IDoz7pADRd_Gecepi7ws2XHqrYKwNVmc96KY5NsSlDgN3nT2pZ8cVXk_D416QFb24l66JyCCA4bJRd1qb5Y21sYFB9TVSaEB8498-OmPGGN5tbrx9ETHttzRTYV4F1mIXDjuqJ92yS6b7TYkjV75ZW0vmDBBbNRnXiIZRuAQxM5-pUcYfINl3ek6grUOX3vVL8CXqk6rrcZEEZVg30kwx_VgNeteb49zCg8ToWh7FH5jEcaExPGwWX3GKlKqnEu-QA3hXiebm5PpXb2DAX_0WFdK4UIYA9OzGiPkrmYG2pemaH-UiQMpDD0Doyl_wSAp-LcwwglQGEPQwLiNtuSwOaju4kuRRDl4hIKSDPRKmFOcPi5RX", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113722027706539518235\">sue. ee</a>"] },
            { photoReference: "AWCwydjH27WKGxrcyemiA0inJhvOeMSglyWdUMsTQf4npqnP4jQDwURw5OfY_k9GwW03u3gM5yH43S60qyfJ6k7rFysnsqiL9NABvFHkFVpLWBbahvaqQ4YPGNPxrmoupLIFDLEZdwRpeSaNqJn2QD0Ip2D_iHG4g-ToPyzA18GK5p2HSMNLICf1bMLbozAasBIaIi3yDoijeSGDHwHCfNpHMTCdcQ3xWccjpBEAjGCvBPUFItVGULVXFvc7vZbWhlyaXOoJgpJjaB4CjyIXAWK1SB5Wf3ONMLd4-hs1VK5Eaft6FdDL-DgemRSvQuy3B9Qm3GtLt_ZKcvWgZTR1tXLZjJMHYfm2AHXqdTXpPh4SlEQuEvUmIxrntqdAxmDt5qQELZcwYYmmWZQMVZ7oEu5XpZVqSVf_CRgz76NTdRqMpEKHWw", width: 1242, height: 1242, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101141212342093881232\">De.Wan 1958 by Chef Wan</a>"] },
            { photoReference: "AWCwydj0MFTaOJR00g5WKk6wtB38PZWl07-Id9KlrWDbFkkUFxC-sYwoEd0HyGKLAi3eHKuiUYQVR6YJxPQHS2oHIpiEnn5sVM-w9MOtQU3AmaG_lahVm1JET2wrmHxl44YlVGD9bK8vhMArOLBmYlzSl5p-98tIpw8N0FeTeX7Fyovo3qhQLFALRVdv5dxRmUPCmUQP8Kf5kEHmtGiQZCHY3Ei4GqJniMPVuk3sFMvMhgK5rkBxVh_SX0A2_0r_uOpuBClZfhnsHrtJFYgqw1iXf0ZhtfAlgsqVddGinPU6VbK-yiSgOaaUighH_4vOAZw6_4ZRx4mJdlO27km0BXrn8-ZhQht9_GQ7drAX5PHoFokXEmqa77-e59V1ij-39X8wNIpP2oRMjKsFndXn957lkPBn99Ixve6vL6XMBeckz6TFyGv7n_WFGwktLzS7yIph", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115203662138026365873\">F F</a>"] },
            { photoReference: "AWCwydhnDWRYMfgj0w_vafRzDlsTG2ESD6eu_WW79fK_vxSTvNP8zriXSkfWpWp16XLyWhNTZEprUY1JeeMs4GCAPbQ6zvg15MgcZKUwUzhzUoPfF0c-eEizg6OInTDQLn5Lo8hkfrwDX-_wP3i2406CHi40BBYpzCLNtjwhQ7_59lzidlMCW-A2ZaPZPg9JUWG2FrlHG8vYlig4jRQ6-aZlAz9LxkPQGYDbQgvRunaV5dNdHNDrNPErdtgCwoza3COaatt_Vv8MH75dc9B41BtKvLEbxxnTT89uXuI01kyJ4mzuvZYLK9aj6urlfy0gBaRPj9hfHHleIGL5FwlgcrNjgNwx6QDBzlORpCAEBVqa8C4ys0_SelwDIj8nmfBPp0iZUT9_xiUgPoA1-2BCaBRJpv_-eDgrMHYZzmkzNExpp7JWIeNhgRQCDqpUeHACqpnf", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103349166330365104687\">Amidah Mohd</a>"] }
        ],
        summary: "셰프 완의 정체성이 담긴 프리미엄 말레이 요리를 선보이는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["고급스러운 말레이시아 전통 요리", "뱅사 쇼핑 센터 내 위치"],
        tips: ["특별한 날을 위한 예약 권장"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "프리미엄 말레이 요리", items: [{ name: "대표 메뉴", price: "RM50~180", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:30, 오후 6:00~9:30; 화요일: 오전 11:00 ~ 오후 3:30, 오후 6:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://dewan.space/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17072601940135046927", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%93%9C%EC%99%84+1958+%EB%B0%94%EC%9D%B4+%EC%85%B0%ED%94%84+%EC%99%84+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "데와칸": {
        photos: ["/images/kuala-lumpur/info/restaurants/dewakan-kuala-lumpur.jpg"],
        placeId: "ChIJD5ydgbdNzDERVeakzTjfpk8",
        placePhotos: [
            { photoReference: "AWCwydhSe6eEmb4IQeWZSaDv5l5XYplNglQbuab6tJEMNZSoBuebbtovkhkTLhLOdyO0e7HDK8uwDwkMxDWT0e173lZZDD6zbt4logFD2mcMU-uFIy4SV2LMA5ku3maguuPzxVf81UNeeR0A6qKmcKtiW6er7eL-I9aO_eO4JOw8Hs2jRG0SL8rGkjRPQHYFCoMmLk8MUOqqT8xVvtSzNbWPNP-fZ7puaFiCNOWZbjcpCmeFkpb1bCb3PGwG1jTxbtMQWLVOZOp3pzJJyqai33L9_qAZBBhHreSA4iog3APOBfzsbgeMgUfieCHUXHOwcVx5ZhgP67EXwiqcLY601CgW_oxW9PmWfASIYVMim__quDbmbVi-7c2W6jVngm--ZpfBy58IMrWFoT_Nzgg-s7eq1hyW7s8PieX_XGPZfHqAELFuhM1OwRDqsVEg9eatng", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109170667414777335355\">Kevin Longrie</a>"] },
            { photoReference: "AWCwydjEVk_nYV4lDLAYesNwyUFRy15Ne5-pFLm8dEgqPYSCIUG_gkX0ZqHPScy6FAiCT_cVz5qbC1GUUW23s1pjmownYn4yUJlGCHQf2duMWgYf9XsQjPApd1bx6ckhZ3ov7-IdIftLlj1-NZl7xUoY7Zmfy0JHwQuj_Nk13FfKgXjXAYGdRyDgYSpAdt1MpVab_n6oBgMZ2D3elK0tcrJJC3yFwxmmzVfg6yd8IhmYQrvK-ifttzFbMzBsG_h7qsDBkRcZd1ZRkck0bolnerlEEpVA2b0H9Bm940oQDY9KmI91HYZoTyMOyFzTEBRdjI4U7Xlcq50-iqpC9Ln0UtP5aeqhsfkbrALNqU4uF22Cy9Gq6kuhp6rqrL0ez0WRHT5B805uAQ9h8XOL26ZU2f5ft2Iyr7NNDky1i6fI-tmdcL0", width: 1331, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114822497314738939059\">Dewakan Restaurant</a>"] },
            { photoReference: "AWCwydhffUSjXaxHui92es7zLGDb8acq1F3dmR0EovOdyF9AjuhW9VFNvG15K2HrBgH-zkekqlx-2V-llza3m9MGE3b3bvXEZi1h9rvFWASl7miVyJ3N6WtamQL9OLMMFjbqVy5THadg4RYDK6TACR1UKf1wdJztSuIzOPC3CrCN9dxHvgKBudp-2FJIXUnMZa7z3sR0kN1-GMeaZ8wstNeAzgZDT6DZXreOt0r_yc71BpLxBawmJzDMbFUnCAj7l0EEmHe2w7SL8oZnRt16zpY906ZiHSY0ay1tHA6KJvsVfydIcQYzFZ0JZhLskYYyiuAw7lGTh7XAyeX1T7QbXqGRPeF5JASrfNA4A3KAuO3eG5pp0d1hXJ8aJjq5M4j93lhUkAc3S288tbfeHPKaf_D8NSK27FRK0v4YBPmadGpVrnVwnRPSMzMd7sw1EhX6MlRf", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107898783960125611640\">은밀한 방문객!!</a>"] },
            { photoReference: "AWCwydjTWjQs8v0y7-BZkRagxu6fu9As6ebUj5mdY5tCGh4PCuT-fqLUxzXfOXku00a6Kz1aGdSlLmnnQD_JRa3QNphx8Cj-Hpz3eVIFlLS4tlW4xjDCvH9N7RmaqeWwbPfDu2y6OfyKMyr2h_-AvBsbYmB2WQC_BvDjunq78zkdIBAKGAksQQkR1oPCpOgEHyjm5OVPaehJuoXcDAQbNZcvHECoxqevcsRf6YDuWcC_aHafXZEtxI4kxSOnfY_mOJAFOK6LuFlLoWjAyOu0IlGcakkl0HJI6cYTbdEaX7nkfq3vL3iYaLoVBUFvvdBTp4AZFmVZ7oSflf3lzzxTNrX90OMbFGiRKIjxC8gkxYjlWbyw2vt4IzsE4y5_tIAMtyPsXabNMilzPnBITqESXNmok2D_6JTmJSQJnlUw2L2n2GM5Rtltirm7goCj2mVRf1Nf", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109170667414777335355\">Kevin Longrie</a>"] },
            { photoReference: "AWCwydiUOZGpZ1M3CHpP0Argb_sKQB92ix23_XiGIF_kBJ9vKMOdartd73fD5t23REMnllxVzkANXkmGCTdg780RISLkIbuPYHfgIpmufA8wcGVK0uDTAXWXXvI4rBNfNxhuu10u_jmUpcfJlPxcANVQRgl7eG3kRThAXuXmG3Clw2mbXrPeyC8nY_whnSFRpw8YIhCiVh5enPztfw_TvFiA69pQJitQgInUjZCY-pll1TP_mfUpxpmc0xAIDv304Elc0zMTShKdl_JFv9aenGgy0rO4A2CbmdPNJkGJE49ay0QNuPSXCMNpj0iZThP0vPlWG2EvtJEpue3KWtY9BOAfYDXqElC3ztDpnXxDD_wU5Copq2GqQXbURtQ-KSAkIDoCKWLl9TawGLxjv6CWo2o4gKRgySSwG3NKcGagt_DVLuQCveEsy_OvsoljZ3v1V1zw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107898783960125611640\">은밀한 방문객!!</a>"] }
        ],
        summary: "현대적인 감각으로 재해석한 테이스팅 메뉴를 즐길 수 있는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["창의적인 테이스팅 코스", "KLCC 전망이 좋은 위치"],
        tips: ["사전 예약 필수"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "테이스팅 메뉴", items: [{ name: "대표 메뉴", price: "RM300+", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 6:00~11:30; 화요일: 오후 6:00~11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.dewakan.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5739520210191574613", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%B0%EC%99%80%EC%B9%B8+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "노부 쿠알라룸푸르": {
        photos: ["/images/kuala-lumpur/info/restaurants/nobu-kuala-lumpur.jpg"],
        placeId: "ChIJAdHiptY3zDERmUWf6TQ_V_8",
        placePhotos: [
            { photoReference: "AWCwydiBMNQeWuiV1cGqYC3e9LYu27p_0VrDLpKarVv4DHDF-H7fpVUTt7ulN9ONEllj08RhODAj_lXuEQAu26LxLIQpPnjHzsRjz_vPNgNDjcqM-PDWfbUGD5Ia68Rt_zlaa5ZeZFbRgHXluT2Mg_o9h-qj0-HHOe925FAsLGlVkgOgMl5Q3OCNkKC_YPKdDQ-0-0q6Sfp6dGe05NHP-O4TJPxXY5N3LusZCjRG5U8_oCQ6j4qRDrs3ooIfgahIuuuoYifM66bRVVBwPC3zeTj-RtweWTJvCYo-OjjK5NdGLO39va2ZBO0hmFi3hgKnXsQroRjDsfH2DvOnBu2knskyzEurjIDTHAEppXRaagF5cVoAOA4lT1nL1QwiRwR5Hh5pvDf_5VSTKV7AjQXWH8TjQA2wxZynjPdUhSiook1U375WlVMM", width: 4800, height: 3009, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115370040588294880145\">Nobu Kuala Lumpur</a>"] },
            { photoReference: "AWCwydgrAYalulF5il0BJllYY4OgxVfW0AGa1RKw2M1yFsU6dy0WrqyRRG94q0_6qZjXPYJ6KbDRW6UNzO0ZGDRlp6YOcd-gyoY38pPtiOZOXrvI6RTD5Qb7tAjAKLfwLWtg4RnU5zkGfYas4rtKsRuRbtMEQ0AZmCsm8nboff71zF4kZBqeznQ4L0B65rDAU39BeJyY50YgopeXyy8NdyLWrE4_2QxZlItQ_e8YUzwuz9XmxReaG1qEA4v-ZZISgPlfLPm8-l4nNkVO6r6-vRmTFajBUOGzxvDMJsqJscNsWS7vyyZbF3Gv8ZRx_UwVG3nsZ5Kw_4z0HkN13I0VflzKvMkg4WT_p3KMdFKptcF-uurPQyMbvBsyMeKgWu2A1Eo2x8tJ4LjK0ZFf9HbXI9ak_LHm5sGtoNkghH-Vw-iN7ApYElB4", width: 3199, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115370040588294880145\">Nobu Kuala Lumpur</a>"] },
            { photoReference: "AWCwydhu6zzuowFVIStlZNbzKsUQXYK9Md_xRVvYmxZiZFZzXviBDLjkVnMQYRbLikSOZOfzLRr6Y8hpKMWz430IaffvuByfncUHjnT979ltDEIeijSMwIPWV2jglHnqD_2Hb9SHtdBPL9I3X9unWPW5GWjS5K3WKqwyST5f_BRsjC2QoG6AcqSPXsKKR4reL507P7sO4Sm7ZsBAqljPThtH7FvlJbgtRbHdKgbJUfXNSiQ0-w1G9udA1UMOmHWBAafLrZxaK1maHWWt00O1ygXi3hcgu_jrzAo0KA5It5ad0mbLIMVf1HLhyFr36MSLmM0Co20hInJEPcGpvxWde-y0bL11-b_cI67Z2oIpOkSlkP2RCEwW7S_MswB9juPPy2HgLJnj3MuulEaDomlX1hzRnYZ6HSMewVPtsQV2GBKk0-262dplOn5efxJvIX7-lzkK", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104374193279925001478\">Phillip Lee</a>"] },
            { photoReference: "AWCwydgcse_OtspLCkE-OiSTUEv5v9aC3Rvs87hmInMMnwvrz9-ToT-OAWyPk4NGRUk39H7tIAy8CJmJV83tEtywNKI_i1o5ojO4eug35xIeeEjar72c3v97Hi6fxj2JkIgAwhQQx0Aipa9kvhPuy8f6XrnGonSIE650IoH6CC0MMwirMGMt8Rs_TCsfGKMKqxkDhnCpbvqfPfUxiYZpi6YtF4sNUFtQ8qq01ggBMLbe6-7Se_ND9IgjAsURI_h_lFvcMXKvyPgZojv7MTrz39lbtkxdborSbeHneiHKlkKwcGC6Sg9Cyu6k5zGXIcntTY5_qMEzqd8XKBt6_JEntglyweQT6GeYU53_qY5G4VC-_pq65q0l1Wi7qqrYxvEbYFv34Qjd6cbqfCO85c1MbsGoPCEHRX71y2pNQ6izc5CTZnd8Rof92n7Ocr4sXkaHx-Wd", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104374193279925001478\">Phillip Lee</a>"] },
            { photoReference: "AWCwydj9znwSudhXXWmGwx5qcPIshjRj__1uy6WHCNttouAl2zo0AhxqCiNWrYKwRVUhxs-n7YDBxgWQSfeU1yPjCTpKZZKzZcPsq56mSQOB45XNq9x54Qw44z38T0aE-hZGWd2VJYDpc9nFlsbcRNujGpnH4Hm7Syg59h_heFlpakD8xH3IQkCdChVMNYmj5y7PinrRPSSYf66a1xIX7SMKGWW_vqlhY0kB5dGrUSSfWzKjGTyWTIqXbohkWXTxH_1uZTMlPs44wz3tyTxYw0YWdKQY0yoHl0ndBDnVKrVUlhocFBoCt07SrSUvq1i7ZGosEaU1KrwHGxcWyj95mlIuJ8PEv0aAb8SS8Mxo1_cyJnWjEP2dGlNf8JCItMCwTVWjT18psAZclDTEPNFp9jeoIcsoujq6rnzKnQXjWqDjO241RMWj9YWVOri0SDIf1ye1", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108254951745405164146\">David Raynor</a>"] }
        ],
        summary: "고층에서 환상적인 전망을 즐길 수 있는 파인다이닝 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["고층 전망의 파인다이닝", "세련된 분위기"],
        tips: ["특별한 기념일에 방문하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "고층 전망 파인다이닝", items: [{ name: "대표 메뉴", price: "RM200+", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:45 ~ 오후 2:00, 오후 6:00~10:00; 화요일: 오전 11:45 ~ 오후 2:00, 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.noburestaurants.com/kuala-lumpur", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18399244299135829401", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%B8%EB%B6%80+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "마리니스 온 57": {
        photos: ["/images/kuala-lumpur/info/restaurants/marini-s-on-57-kuala-lumpur.jpg"],
        placeId: "ChIJY0pAodY3zDERpLoOdZbQ0UM",
        placePhotos: [
            { photoReference: "AWCwydhoesRgMZb3AhfATxtfbl3FPgGyTH8aKF9QgtZ5xCRCWtR0S-83-bb9nRtavE_iF7rrhgTsev3OtlWUEJI0hHNoWvobW5DiOxkyRMNDlxbGFwCk1ZX8u0CBNy7_U1gRWZukV47ifaNrBfUh-JR6IUsW-mYD2G3zsaUD0qbE2zlMhTd1_HGV_w8ySQ8kCiK63p8l0VQJzyQM609QtKc8HoNjWcVaMxoXuO4H2P2wQI-zE4N6IMp1TrhXKwQLvvcWOumGijbOKv2qz7eFa0IQyHPQz_1e7Cz9_RKjUgdr0ErnHU2TI8nrCy9h7TeA1ap_5f5uHJNxCHCF6f0MxtJEfInovsSMpiYcTizWBQqwW1Hb0drTRoCrHZlJOPvmpFWHyo4Jlo7nwgmgCrrVyR-hPIz84VEELGscTz1reoWI0eT98MCXgIk1g28PVfzxvqV-", width: 4800, height: 3794, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113139474003146076157\">Marini’s on 57</a>"] },
            { photoReference: "AWCwydh183IhfRxxdVL3e8C0TaoqmedB19mUQ87obZnqzWeJVf-fCAbaIqmQvRL8TaE8l-jpkrDp42x85tYBrBdRxER44idmKJerFDnGdAUokRsFho6UQDKTv1-eLz4HA4DXYl9BV1nX1v3jQMTovwn4-2ewEHelJI09zwHL0GVmbH_A7KvmQC66Y9QbmGnoswmdjUjh-3zAx1G9lm6W3RGVFRFh6X-LOBPqTPfDjyCowSfsr_RbladqIhfWwxUT7n9xVcYkIKpYDZWReDricDsqYIswDezHnQMoJLCz-hFMM3SqrHIbGWpi1mu9huRwerKvC_tvP6XBzwg32WOuoXK5dYo41kq6zZqZlq1jXTQd3VBlgVqeKqJ-5y6bQv70ugt46brooCruV5k5ymX9AE9XuLDoMeQKg8CufHhPmzBBqyCSdlYa", width: 799, height: 800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113139474003146076157\">Marini’s on 57</a>"] },
            { photoReference: "AWCwydiRv4BW8aBa0FtjMpysoqVGibzO6Y4BG9q5ic7AWi7nXdlN6lvBYpt18yDS_ISZ_U87v_wb2wr1wc05FCbzWsrssADxRTIqKVI1yu3N-2YvlrLdISrSYHanVZJ5RNwS3pZW2VJtgylkYxxW56vhf1vZHmZMBZFvMuwoktTJJbSqMz9QbkQoAa2Cr8BtBLU9mK6ReGU6M1bzRgma43x6W6R3O_h7BxKAr5tb9PRxdnNBeZtHRvTQAK6msIELM44CmNKooKcJk_wAqaJ35sqaCtBg_wNv2Ic7RW4UZiXTk43A0Od9F_GBlgjuQLcZ3yTnUOqpgQkugb5ogWrMIw15G-CqxjtTqwJxgX3SsBG2b0AFYY6Pug_WTbJ8IaRLdCq8I9uaVfCJ1zfVvfT2t7VFfoGnT7MAxfs6u43qTEKH-5Jsqsp9XFVlmfkkKpDLaDov", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112058377588389988050\">Gevorg Ovchyan</a>"] },
            { photoReference: "AWCwydjVw3law8nZWEYZedPxLtTc3YFUNQlMQavLd4cxCskc4xeki3MsZ0n8opUZN2jZ0EbrZRfbP6lhjcGkaHnFprmg-MZBSw4cRshhLOpvLN73F8rjHLpyNyTgj0qwAzPSqRvoiYPSzm0nxhZC5iIA61ViPUa1Hy_E_4c4GFm_KS1dDMtFwVu5wluN__UB22f2fJnZDUzBv_nPaKSekeUplyaaDVZIfprcSaVWfO3ChTZ9OkQ-dmNo52jxfgHnNmmQ92jUuo1Gq2vQix9lADqXHOSK3JkLhgzewWyw8Z33j_BboGR5ns87Z_55HPQGnVGott1J3Ix5cCk__yOzcj_PbsFci7AOFg103w-6SEooXHk5PEwljWfkoVnreIj0QxU6jL_cK_dEGldeC5FFzGlTkuy8IaETp2D355TTDMIXS2ra-DtlrSBSA8aAiAvx2-hH", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107939113515019679235\">張庭瑋</a>"] },
            { photoReference: "AWCwydhoNJP2a1cOU1j9_veKnvSffQYPmSEaiXjhLTX6IXGRuvnEe9sgKJujGFFqFEIrRHpOShoQjhn7h2a4Rn88Fe-KPBWpw7b4JI8O1OqxL3ZHGZaBghdpTjzOArpyXjs6haeo9GAIWudINNogOnOy4f0vQLwt3YZniwmDDcx3MtBYLLT6K4QpwIVUjjrnVKM_KJeEfnrbK5aps9xxlQUeRbRcjioI6Ur0uekUyArt3hIG5vokuKcrhodloPx-ZRppdhyxKx0JQJ8qGQuU4QALiT0ddELiiFlWCRo8lRRizpkiy1sYOqUqwvy9hgga1-1aASCBsbpw1xpiR06-GYUxq4gjk9RjOdQBECcSyZplmpJCs93bW1oTwCKWDqh_PQOcR_dHGRoc-XLArtNSp5IjygKm84pyeqM5S_7vqDaE9W7rVs_FsmGh2K7_pVMULS4m", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107760626874964293719\">Lai Alvin</a>"] }
        ],
        summary: "트윈타워를 한눈에 조망할 수 있는 매력적인 다이닝 공간입니다.",
        updatedAt: "2026-07-21",
        highlights: ["페트로나스 트윈타워 전망", "럭셔리한 분위기"],
        tips: ["전망 좋은 좌석을 위해 사전 예약을 권장합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "트윈타워 전망 다이닝", items: [{ name: "대표 메뉴", price: "RM120+", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 5:00 ~ 오전 2:00; 화요일: 오후 5:00 ~ 오전 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://marinisgroup.com/marinis-on-57/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4886916415301270180", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A6%AC%EB%8B%88%EC%8A%A4+%EC%98%A8+57+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "서티에잇 그랜드 하얏트": {
        photos: ["/images/kuala-lumpur/info/restaurants/thirty8-grand-hyatt-kuala-lumpur.jpg"],
        placeId: "ChIJyT76Y9Q3zDER6Nu_yBZr9R0",
        placePhotos: [
            { photoReference: "AWCwydim_I0NUaYoZJhcMexZSbcLBu6OMdt3_AWYsjhi00brOY3Ji0OBjsCZeW-GxBfsPkSFGHYnRp1MhlfuH5DXIWnluXou95cRRkOr8N0SZOnYM7X8WHl8IGhhGozv1TlwPikjM9jSLg8yWhG9I_C3OdiDE0Zf06tabJZp1lhA5-_tQN63Ijc7ZHySBx8XaCFJgC6sPdCx49xEj6YUcI1VEvxwxKSsilMS2cXrbgvb2-7TYWh-DlrbGLVHYlFcHsLTt5juiRFnC8h4DqM7CmkTnIXOGCi6MXkXPlv7u6RCLvJzqhKFbOf_c_C5gRdvLbuiD3E4P7S3DXHDPUL_IA_cW1ZAltlWAXZb0UKLqh9ixfs94z9tG5iEqMSJMmn0f2tFaBQVj4htj4hFuHAlpwjJRJMOY25pl6kN3pRsosrMF-WhvBY", width: 2304, height: 2880, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115618616455361719484\">Grand Hyatt Kuala Lumpur</a>"] },
            { photoReference: "AWCwydiBnMsC_qYsyt5WbId1pSbl0oYKJTWTAgNgGbLSWIZKV9RfmHeELvOSxVu10kG8xl3d5kmH_fWIsVknLii_5zxf31cBi91pNu58RWVsZIsWjonYqf-7Hj-gPQvnkHfU2pZdpTNibyaP6tJuuLBAd65lUSEwo6loLhqGw461-XpT_gOTardlgPyubVeeRwRNsLDyWspk2JFnoDyz_sn5U1nj6TQrwnXoX3f_kmE8lSCqeM79CogNPBbQFg3Ua7l-ebMXbrgfoRlW1Q_T8HyGPk76-t5bI1epeLQ1RR0HKy3zSZdmAF-qAIVJUnqETMwrfDJOO8Xsq7HBqbZcfjWPH53ai54rV9A4Mwg8R9cAH2AO-EQhOnbTfkp-VaVA6ZzkUGrawUbOk5FHKmraCYTkC0GZDO1hHljhYqS5JglC-SBqiQTT", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108302752286678659985\">Chester Chua</a>"] },
            { photoReference: "AWCwydgCAgO1ye7_i8eef6S1RMjKrNyYmsad_w13xPp9pAFmLjgeJ8r0pBaFiphHJoUtC2EmCk82MQC1lFCk3w-7x4-T--JwcYz8b-Vg528EsbpZcHuCdXKYeRnMwdFjkzZ5xpCyQcVrzf1KIBeQEC-yKZgiVyRzmR7fYR8PGuIGLg96nXs4jsBI5GnSsaAlDFeERaHR2rKCEJFVGgWXOkM2kJdk_IuzTsjSKbEP95pikLl9qJ0NQnqbM0QJZEfWoDC9idTS0eASLPyHcxIdsbK4SsAuE7L7qkEOG7c0M_VR_6EUD3iJie2MH7-VsRtMgHrYqVB3S-2Pt1cn4x1QNerrl34RoyeEe1bkGxt3EUWZwEpLV3gu_0f8Rx7PJcZoxnilLhGkP_7-MR5shDNKsXzOuOPsURrVD6Z3DHdXa6zDsowHmEoBhNHWt3v3SfFlpw", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103574559273997549425\">Weelong Sia</a>"] },
            { photoReference: "AWCwydi0y12GY_qODPFAEADP8FkoOmNpDh2DxOfZpWdHrps69nghRFLdyTb965KVWeM9TVv-s16BIYJXjuEL1bH2-TTaMVaWzWsblFtLGRoxadA_hwLGMs9vB5ogFqyAPFT8UDLwHs0mlSNr3ESYI4MnETnjM0xxI1nNCDcE65NriWPE7OK_cdl-hd5trRrFI9_eUaJG98duPliipNL-7t59MOuQYHU7RGh3xzO21WRZjqVdGB_81JHgJxmuHifeoFHUMQV4AQ2OGpgL0swPUSOoXLl4zLQm4MCywbXeIfxgKxBk1-iLQAxeL_Z-RcHy2fFPSaYTLFRuBS8l1cy_f6RZzYCzf0cr2mxt1gijHF4JQ3a6qti5-o6B1OLuDdNDszFjVReO520NQ4dBUWECpFyFa8RtvXfPTEASOktKMDmYBm9vWQ", width: 2879, height: 2121, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115618616455361719484\">Grand Hyatt Kuala Lumpur</a>"] },
            { photoReference: "AWCwydgpmRMQDAgDsbHChgclnTH17WDn_LdfUeC6l3gi11OgOZw2nSZvS4tJukwplUTv6gX1cnQ2dZFcJHV_IfzVKpdOTWHo1sZvhtMw0lmG1b28dfgQULR5YyySvicyoU6Ww3YrnXtQpKo0Ia1uGW_hqQ7M_EuN1yoYLavoXHRZmjbO_c5DxaVZbTqzoLRE43ptgtAFYZP8Yo1sUSzHTCNOKyxJ8buNDjitp0oKcr7U3y6ai5EBrZ60gPevzXgat3aAJMVz4KwsPFkWhT_TydrB6TCFSrIx_8UBrnQcrGVcE03PHD3xrAwDrO-oh99zn1jFvOwwJUKmZhFe4DaH3OKdYOoNG2e0Vr_INGPh62MD86odfQip95G6cAhrtTvwWOYJVlk8vqrvSL1FncxLEzXNmo-417Xs8_YutXkjHcq4wLbO9w", width: 4800, height: 3129, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115618616455361719484\">Grand Hyatt Kuala Lumpur</a>"] }
        ],
        summary: "그랜드 하얏트 호텔 내 위치하여 멋진 전망과 함께 브런치와 디너를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["환상적인 도시 전망", "다양한 메뉴의 브런치 및 디너"],
        tips: ["전망 좋은 좌석을 위해 사전 예약 권장"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "전망 브런치·디너", items: [{ name: "대표 메뉴", price: "RM100+", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오전 12:00; 화요일: 오전 6:30 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2519832852180390313", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%9C%ED%8B%B0%EC%97%90%EC%9E%87+%EA%B7%B8%EB%9E%9C%EB%93%9C+%ED%95%98%EC%96%8F%ED%8A%B8+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "윳키 레스토랑": {
        photos: ["/images/kuala-lumpur/info/restaurants/yut-kee-restaurant-kuala-lumpur.jpg"],
        placeId: "ChIJDYyGHixIzDERVtAqsZhFZws",
        placePhotos: [
            { photoReference: "AWCwydjDW6Had-NTwSt0l6TP0Rn6ZiHG4yOiWjkUhFj6XeK7DFtg5T-weOsMWwzkaBgwC8zslOTYvkZVDk1qOOIXsz_mb5jdI4J-EqkMl-K8ji2wAImqMThbK9b0OEOxi1AucQu0pyvqdkh_vTOmPAvB7KPWlDY4ooVNnI2jMciLs55nQXy_EdwAC9NwIT5pyzeyUC4EdTA9TdSy-kvFOdE_ZeDPSssbUUm7vC_djc74sxjpM28Yc8_Pyw_0NP-zuWFCCoObSx5PimTdv2NpKu7L5_fRuNvu0o1l7WwrRNcvggCMdUUvMbBmjTjA9cpTOHptdQMwd3ZqGkw363Dv52zYktZqIsRChk3gphZAlFzRicXYVFzkd4yq0YYb5HYXRtisjNQnOH-p8OED8MW6SuQC3azbT4MTxknv_UMi5NvNtmkudbA_HlxXv8BHWqIKSc_J", width: 3024, height: 3776, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102131935715064790414\">Alan Tan</a>"] },
            { photoReference: "AWCwydjOTp40CMP47vqhNEJoT_lUX0qzlEDq5qj-AiM7x18E07gSUs_AT4S73PPCUFZ9EPZ1iWVZ_jY72HGqoyHXbKp0gtpDs_O-FrrtQewRPwf0HxjXXR-1C_-iu3KJBF_00tuYBB1suOyTtwYDw37ukJLdx902g8MNSwGo_tZKX3TrxcorDhcHuhl1fDdOKDQDzuVfwzKS8QRohOO1Vfom9igkSrMdiZfrl-2tmPw6-P0KSJO26QEhJqzq9kHtejmw7ZsRlgbbls7gHAJD-iwaS1gtO1o0CV3y0ZlVld0hykPIc1EX0za7FhEk-RPQCiSzPXIYHpeq9CZRRj1wMpJtt0M-oMBgb_Ip7kxWBBf4mQVR7mkXmXujuv6KZpI2t1G71x4ix08cHWAJwq-dWGlr_1AR_bbNHavsZemt-Nlh6H9mOms", width: 4656, height: 3496, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113033003458993853856\">JC</a>"] },
            { photoReference: "AWCwydivR9ZeU2JARFTFCTaGNWo4VMeVQQXXz4faXGcovtyl8dXZ3zOJsJuHLwzzLQOi1PR1GN1HChFpOYyE-Dudfj9CbtqNXQ-wMEGQDs8JnSWtTN0Qsfe9Dz6c0rZT0aa-F8cKnJSN_1DtHZGXjJm0bb_sgWJKayugxCnZGwWwIKZdooO-LAv6U4NRqZkMRozcfEfrVQlMIHNknQkja6PKo2mLQoGCXrS9hxefK1AwennSjXJFKCMtHFOh7rxAmUhtxKJbwjS-10almzTWedFe5IOEhgvidH-sfOS-3EoJgu2Ef1wSMshB8b70sz_Kq45lSATyBcPpsl9dBpridxjTkdBrTsUCj45keK1LlFHSJgOR_Yqe-N1hvSPAzsCe3W4X2BU9qi--7qPxVx_qd12uJmSoRPikCtPFc8rbLhXc_ZyrGHs0WV69Guf9lP-Q3g", width: 1720, height: 1291, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105671346627762893311\">Vicente C</a>"] },
            { photoReference: "AWCwydh6QVs_uvbeitY4wrY_q9_10TrKJYsTkSTpW4YfxvlYIhMSy9KJwm4sYIPXV8N-qbF52SqUl9KzViAbuZrf5qrgiYbbwjhIYtDAnYBoIcqICi8e3wQUOrxsfb9Q9TdLpvgVN86Kk3G3ZJoLERevz3C7u_TC_nPVey6H_-ECXhXrd3YphaXx5H8LnDE4UAivBFzuwze_nLXIcNU1BLjyIMB95y6XbzIlz138q2WOceRD2KKjh8nLTJXKlQ-evsRml7x_iVDE94KIzU4oL97Ga0yjtfUOVDh2F2VOQ6Nx0XcX2HC1TlM74uEMzIYdes72dsDYoMmaTwXm3I0zaoNOW3OQ9aNNKSscWl0LK-4ZTqWgz87FoHhfNf1kRV8UxraF8sryIT5IyzKi_0rPwbeLET96HBth72ZFTAdZVKKAGBfkKfIRwSg77x6ukJUOtvqb", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103794340139958180817\">Andrew SooHoo</a>"] },
            { photoReference: "AWCwydiWx-IbMSr96AowZHrZpSe3EcsfpeQajmyMlhwWBPp8dEaciLzS5JcDRs7jaTc5KAFSh_-KMPDcEvaxpDBqiKEcff3xfq64CI7KR1lwsxMBdmmwNbKAgQpqgdKlG3DUFTzsbPFxMUEyRkX2VzgyoPC9zXvMJbU4Ntd8NZ63nBP_oyD-fpp-iPmaElMBf2oIi_MMfcyw-fRdWGE3UPg_qpIyCkYDy60jCAnjmlnTYCK0e9n8A4JWWTmtuqLyJlf05ehTb_U09CRVlvA7BBljNfl1IYiUhJAUb1191-FSIc_UwZe8kuLeNXNuWiu_HoK84CTu1WTbmyLdXnlKuXSdi9wr9oG-D3ur-vOOErci1LLAGwkwcYt2mtZOSpYT2B_GTaoL5h4-ylLUAVKSUh5OLiSk5ouCwgcZl9KtLXhTRYHgQrSk2ABbaxuCGi5iTQ", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111387272700665170850\">Mac Kenzie</a>"] }
        ],
        summary: "로티 바비와 치킨찹 등 전통적인 맛을 느낄 수 있는 유명한 로컬 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["대표 메뉴 로티 바비", "클래식한 치킨찹"],
        tips: ["현지 분위기를 느끼고 싶을 때 방문하기 좋음"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "로티 바비·치킨찹", items: [{ name: "대표 메뉴", price: "RM10~40", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 7:30 ~ 오후 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://yutkee.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=821701979128123478", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%B3%ED%82%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "올드 차이나 카페": {
        photos: ["/images/kuala-lumpur/info/restaurants/old-china-cafe-kuala-lumpur.jpg"],
        placeId: "ChIJaZD5nNpJzDERWecEEHzdZ2M",
        placePhotos: [
            { photoReference: "AWCwydjIh6s3zzCvFswPiWCB3WTvsPMUApF3UmTVUsR4dSKpLRT2hiQqblKPKn61Y2a9E--j4k7QBcSo5sIuBiJVmvqP-KV1rtOXMde5j2mXU9Ybwmechcy9pnZ7uxTaC3-4oGqxUNaLm3s5b2PaWzxpSbKYRDecYFLxvboR_yjXZ2qPb-Ia9MyZPkT7wVK1Bkv2xsPQ2FlVnNmaLN_sNTFj9ggDMUP2RC4r2miPKlrFRXId_EKpffqTlMlDnj4a6zeMQYTR5BD2wEpY6bLpsbpkqCDelM2x_cN6JQ1J5iKO-6MohV_sA7IOUHPwHn8ltsvVj3iBf8jVr67jYjUr9RvIVfDXN5KSU9fuDBoSQIG6u_Er-irgjUq2munePf7fVrjBdv1O1zjAM6I3SOGW-bP77ik0lh5-DZlXcDHAt9Aq6Ku_t0lM", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109819586413248259335\">wong t.k</a>"] },
            { photoReference: "AWCwydgT40eEuo9o04JISK4hIn1yVWpGV5v603X4x-GUshckP_5iCiEcgEE1PcATmGArB6iHQ4k31ZMtg0LUjHDF169TmvZME3-cCZcWmLLD7Y8NC94ueieJiuN5ck93co2p4f-GDwcTNablGlxoPdi4I3YPo1DrLaNPbdal9WHQyMjRJTDNHNYSXDy0Jtz-8WYW29yzylNimobNrJL0DsZQIwaPRPZvr44OB3Yf8YRyiLubA31fmQdSjSwsXd0E_Z938B6Rk62c0JqpASmp1D1ijLUyr7kakR8dOu305jbhNuuVC6Jut6B3COmG_71fvtHyHKlIrvagFxP6WM47kmht2x9i2WeNE9xxa3ntkfzmtG3IYlJVNOCOtPRw7KBBH3VrUcL27olbjI38tA94Up750K3kvBZlKhQK_kf6vw7lh3Van9cecGXic1POA_R6joBu", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107680018914679416636\">Ben Hsu</a>"] },
            { photoReference: "AWCwydjGovXSv5Vd4RLjVFpUftksuY-Dq-qplr2FHilCdTS4IQ5ltfsiYI1aT_-FhopxpEgGaK784v8W_LCTC1Lez_jnZ3iW38D0DBiQkR5WYcgfZ5GnjbV4IrZhmnj9BU2sZJRJbrntSk9v7pbziK98Y4Hn9mz8hU4oPKj-XXRrZr8EAXiC7pO2r496euhaiqbHZgsyifc7LrMt4pmv8Wyyb6UNlLoENRrXCt35_5o750_nxfMcv9KuZzDR8DIuUUTRtWvpIyn-hybkFznOkS9x52FDiGhGUjzsgm2VSTGJ5_5Tkr4qiO2TV8E8zygH4uKczn6jmcBvwR8ngbKVvmbf_yVGmjDJLHfPPMg6lMylayDm9wRPbEpDMTulXocdFPmNU3-qQpmkpDnj6GpMqHzoPg3IvQLO19TC980NwvyDFWpTtARM", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111630926430473815650\">Chris Lee</a>"] },
            { photoReference: "AWCwydjjhX6t-uzk7Gn0fEZJipvOXEyZUCOKlLx1SDCtUPqQAGswEeWj6uug9NwbSwfbWXW_3L6szZ99vb6vZajQabPEiJ_IxIVq_odImfZ40VHiweL9InCZlbXK4Ui5weIs-sgM3tDLo77OOJzyrZ5S5PUBOz_9gbYadaHK0VLO3Uyrtwr7M9Axy3le3HicIRZt_u1onVCFmZb4QtHt6lsktTD7OgJ6yWcJPYuF2Oq9r7VIWXdYE30J3tujiLFvf5QxIurnZc1-iueqz_lmWT7tlL-2oydPGxRYFukH10_B70YRlMmC7_MPlkiR0jxqgvHbQOsFgeYZFfE4fZSGRi6f9mnrEUcw1Np8jcyAxv21h2Y5omm992eIj0crAKBy8x1Hbh1MIe7qUyiQ8quHZoENH_36SEcdl_RwXbzmZJDTxI93nN6YNw7ZOos71bkgPyGX", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104326831137108503970\">Victor Opokin</a>"] },
            { photoReference: "AWCwydgrDsJSzPXtelhAG7VeU2IrhspywWMjslKk4MF4Ogwq78DVmhAjrx2wizKaiOjylvkFV4sHFO28uJ1Oh0CjpLu8bGzrwnYuD3eAsXyM6Ghk1mu1MskYeNsnlDc65ZJk80YgRVV-qvm_PRyHiithfShqV4eX0qUYJ7TjuVgKrGFAjZmy_9WUzt37SaZoqTM4790zkvHJv8ofLyBKuFL2EiDzH9EFMyk5euNEHL5Sw8RVZh4uJ_BS-7Mrxc_QcAnRnVe0eKFzGbtLjeXBULbzRPCjeTT3DK_lKKBnZnnVJb_SpZhRLymOBlMX8OzvRQN_UUSxA_JQjToJFbiQvS8142fRFhEsbJQGJZww0JW-kn-8APQMuL4SiYkXlpVzJJof5n6tmXAT-3uqN5P-g3BO34saQH8irLgsxq93q2g-fHuKAwnqtFSIZ-8eZq_f_zY9", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107680018914679416636\">Ben Hsu</a>"] }
        ],
        summary: "전통적인 페라나칸 요리를 맛볼 수 있는 분위기 좋은 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["정통 페라나칸 요리", "클래식한 인테리어"],
        tips: ["현지 스타일의 식사를 경험하고 싶을 때 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "페라나칸 요리", items: [{ name: "대표 메뉴", price: "RM25~80", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.oldchina.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7162937257270503257", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%AC%EB%93%9C+%EC%B0%A8%EC%9D%B4%EB%82%98+%EC%B9%B4%ED%8E%98+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "머천트 레인": {
        photos: ["/images/kuala-lumpur/info/restaurants/merchant-s-lane-kuala-lumpur.jpg"],
        placeId: "ChIJVc_niNpJzDER__xE9gsy9BI",
        placePhotos: [
            { photoReference: "AWCwydi_XDxHO4aWl_kuv-C6roXlWTNS_fCRqO2eAj2cUXqhIPXOfHqCQkBzM94Xb0_5QJtO3OZh3-yOKl2nnx2mazmCkyvieW3FHiZb5d3S1GPjzl3q7xTAL66y9ohL-Oa9wAYiNMY2d-BumPPc-j6TVRgog8Fihm2g2c6Bol5WKaFtVzIsDLwpSS8xi9YV3DQK_6UTpiUQP7M959G3KdS9gd77FlKoeCLcYEhhSY5cULRfwCBHQlQZ9tUK_Aw5XNn7CJaMf4Ocduotk_JILk-XcFFtlaTEk42aMIUnnXWitKs5oEP7nNCkYNNtrqKjToUhqszwMxIyMvla8LkQxvSLHRgDRMN_T_24BbduTcrL2x-T-_fpYzlTcs7T2zFaZM97F7reoJ5JLSvLMysB49n_8Pnp1e6Vbe4QizCkBKOowdQ", width: 1776, height: 1184, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114781051277566711944\">Merchant&#39;s Lane | Petaling Street Café</a>"] },
            { photoReference: "AWCwydhQTxqbmQII-7hxIW_KJonga0knwgIE75yPiP6iQrt6eM43ga4aayAT2f959RUiVcCMJQEKQXq9gqN0KoGZUHzAmD4kGtrhzh9pG8i_Cludr8p988nXnlKJ_VqN0gSAFPtMVli74F1eVewByYJiT38uOyrmhmT8N2l-S-A3ZzR29bsuDj0DUczPU4Ntds2ct6FyFzPOWbSebksE5M0L_dQ8n5ynM0o2enJiB7XBAMU7Fw4xQJdOQxb1OIiL7e1fYfK8kZrbt5fWZgAzTzukx23zjQHWSEwXo-MG2FcH3gQDy4gzBadcGTA7g_YrmpaJScq3oXUf27PggXJ6_IAFGsxVubI2Gg27yCFMWO0GHp3dCGxt_IYv8jjHnW4M2SN7BRPxQ_g8Da5AmLyuV1-8PviPx00EolGRNUrrs70Y4KRbhbw", width: 2448, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114781051277566711944\">Merchant&#39;s Lane | Petaling Street Café</a>"] },
            { photoReference: "AWCwydjVu9PIJgUjABf5g1xJ81D_Wu9yvyFId8etPbWk_pmGuHAFRIwXekn7a1NBMggzMOwmTBo-xB5Ls904Fjp6UJHrEl-ypVlrVDMvcD-mcYXl5SBtjrMr7il80_sok740CXkCoqeRKoXHn92cRTR0bs9d4I-b_JBKsnACx5qZBcPPunBcCtaObZigLV81K6C2ocjODtr-_INsw1tLA5Hfp7Q4Fej0MJVeuWwKz_gHRJIDNe0X7WwzfCHytBU1y689ezUeSHPl_TL4kIMBu7wwp67QiXMGh365WHZ1A4OS0htwd06h7JkjQjUWhyOFHQHAj73XVXbsA47hFzUkPRCgUfC7bzUVqfsHok5M6m3KrJqOxnA445SXQT1-08U8JWG_zoAscreYkuuTiBMWIpJK6SRskRpxdGChrNL04PXI6UlqRU_w", width: 2048, height: 1152, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114781051277566711944\">Merchant&#39;s Lane | Petaling Street Café</a>"] },
            { photoReference: "AWCwydh19pVR1Y95o3k6lHrwdQaaulWjtPF6LCf8mvbk9uJK8PlkwWWzW26QgZyBCYAIX0hZCgKUZCg5LhPbyDH8aNaKS0IrC5-mBYBs0-zmF0vQItVavgFdapzQoBnloqTTfxfl1AgImxOGiIXNv5huNQm6SO4cHmXVpELgVmqT9B1HB8J20Iq_wWaPd0c0HPvODgWDIK2Oj_mjvxBpfv3Si_OvtaRqrVlRXU9YOlZvF7NaG6SZYBVXxEaeOWRLTfphyq4uKL_yFA4iC9CUXI8X0qjypb5fW7twg_q9gSpqTnluQOFlWsvT8lFgvEM4kYllKHmJuPQsZvVogqKgv9MS3OysdDYUI_6A7TqrNmFjjn8qRLPUukfoEcKFDGy-SIKAeMLfmOFZsk6tI7nNo1OrmfRz8FIJBENuqb2EKOwkMO4nGaY8geDd0XcGvwho7A", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113282690704461192987\">Andrew Yx</a>"] },
            { photoReference: "AWCwydiAc9Yc8N1ebMIyk7nMnvf8VC0v0fFMuq2AggUCHaxWE6JIk3WuJzPAOTOpPf8XKTFpgMVEoM9QWqwOGlBWI4E2TxaYDOq-JUMMFvCAlPOPMONrPOylTeK0rdOSJoK-ZSIrQ0RPAKrVtKLdHEWYuszCBNsyhRq8uz6I2mGs1pBgyzzUrTTuSvQiRnYWNwxdYc19PIekfjYydqjaAHxWYyU6zx-stbT-OyQhBiWbcRiEz32w1QxmfDWi00hNPHC4BxyfEOokC-5H1ll_eqq2BIu2tsCRREz4Fzfis8yiDUK0u42ND-ngdC0E2EDpJBKSvWaRfje8HkKXIeyLiiwwiV-zwN4bDv_b2wuMyGrSdE9qdv_iEauVKoyuBcXB1BoK2DmjXUDf9I_wAradmTlUPONKlIowclld7H9nquqw-5d2Qw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108388357413673649345\">Almerick Chong</a>"] }
        ],
        summary: "차이나타운에서 즐길 수 있는 맛있는 브런치 전문점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["차이나타운 브런치 맛집", "높은 평점"],
        tips: ["여유로운 아침 식사를 위해 방문해 보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "차이나타운 브런치", items: [{ name: "대표 메뉴", price: "RM20~70", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://wa.me/60320221736", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1365771613957848319", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A8%B8%EC%B2%9C%ED%8A%B8+%EB%A0%88%EC%9D%B8+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "VCR 카페": {
        photos: ["/images/kuala-lumpur/info/restaurants/vcr-cafe-kuala-lumpur.jpg"],
        placeId: "ChIJPYhalddJzDERgRWIgOgOTvA",
        placePhotos: [
            { photoReference: "AWCwydhMz4L7bM768sIOw-eY64vKfS2mGxDDhTuqeV6ZWj3wYSF-zPi-GAlh8k4zu1Rqm3BAViNPJlV8cVl5mC2wVwwEq3dijb8LywzmARfhQe8kxH2M1grriS1dT5_z2N5CPQMX2BRegtEOZlRKP-RDmmgEC2EW4cDO46hKdf123CTWDqipMcLEvsaa_OIVJ4y6psX_rGJfjJMYTxUtMCYTcIQTzg2Xk-E723eNJ8EmWvS9gOTnBoXp6xzqc2XfqbuGsDaM6i14FvgIrwSv0wcwlQrCvYMzRqE2hJnLcUpuZWl21C69t06aMxsYfdbvRsj6WaUMqdFLh5k1nNw9bWgOROv3gwHH0ZPU2O2PD7HcZb4AFY_qmSS3GSBgmdANOgY8TSjzoYyufeP62hS85TmEpycuLAC0YplwC_dEyQ2g4qyskTA", width: 2068, height: 1164, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110706203895556840603\">VCR</a>"] },
            { photoReference: "AWCwydgK-6MpC8S14Kifq2XMldXABO_1vLKoH88Lzp8BWBbYWCeMWsm7n62s8JsLdkc71uOqG8NMz4oUQvyDmvC3rtB_4hvMSnuoR-aFHBwBMFx2q8LxhFfXngik9wJym7Nn5jRoohKagP8fZxbic19l6oBpQYCuo_pKsH3SRNG-WLWpMTjevmyK1W0Drf3fCPPTJgcTSbsnbPKSaXC1XY8uchudG5CqSc0hCVSJJNJbOTBm_ysSm9AQiChgJ9AJ9ApfRnG0uKg9HDJA4Zi04g3b4jBIW9Yp7YpHY7CEUwCd7XCWbZSdcTUB_JIht-d6fkfPTu7bG3alrs9U0peIedrHe4jvfcaOFGxuJXBtoKqJEpvQfY1TQboS3EHxlhB4mTUxw-vJKh1gmKiv7vaboYFzaVpPBbmm0NtsZlnsIhNtk9Y", width: 2804, height: 4430, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110706203895556840603\">VCR</a>"] },
            { photoReference: "AWCwydigThhuDkyr_ugLeLcjSrOQreBKL-wnP3WlPr5YsWP6AejW4M3LTkZEcICOPqU1brJ56H20qTGTkYWb1Neh2EWswayV-kKHylJaZmVR3KbhxGtpbaQrfQDasPRGmRCuqnA3FmVckDuzmGX6yMbomCJ43wV5dZEzKj8BhN_LLPoOehzkZqh3K5SNeHkNDvBLJaApLspWz5e7SUC6YAy2Xr6jN54-y-3pHZ7qz71Bw_2Agf47mpKvfXYs8EC-GJSoI07QqnqSEOiGgZhK6c4z_ahVhx6FvmVliMjvsNrUnWgs1kGtd4l1_5izpsQirY8sdTGO0cw18xlMptrnIN0OcjKyI6C8gjkwVmSW6vRCAbyXzMr2gvh6CInnNWv1f_TG15zWDZ3lnhsnhH7drq622qqMVCrG60ADoBcjcuqjcYKZ7oQiY7X9lXWyTaj_3B_8", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100020984491487605934\">Elena Hlynovskaya</a>"] },
            { photoReference: "AWCwydjo_4CJv3PWVoHIloDNmpc3NYQm1Hk4PQVBygoCL0i3Ybi0iew1wBst7_HGQ4ALvb0_hACBlJ6QAYpPWWQ2if5Y9hj4IN4aJyozWr21i0W4pbs2DhmOZf98T2r69KgtjTcexN_EEsosLgVcm2jfvtCicCKqWxqrIqskeeoRcJKJNQFUn_5yK0nd8hhfkS5NFJciogOTDv5Dq-05wv_m5Nlo7kYJmKxyk91hkX4OEoRNfJGpXaB8fLMtG8QfXFdtUCEkQZsxCKSuda7JoDh57U5tZWgF1yfa6m-dqUpC3GcteOAYG38UaQAriq_FFL9WSUErsJmmtpr6AZE-SbrSmTkSqq1OOF_D9NHpm6MgD1WQ4xfFuC69ev1BFLpio53yC0upsWBM6XL-cE31doLfIZMACmZXDYRp8_z2sbJZDrc8mCVEAePuzyXXzoLmWA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103028693602437393935\">Felix Martella</a>"] },
            { photoReference: "AWCwydjpuqRccy1P6OEcr5t75k-oqDBISD9YyeDobruvOku2wYhity3prp0FdYZL-GTh3we4WwEUPCfKWvNZQsr3sbQIsbb-300RZwYeNV7IIXK0_cughIPp1226njfoJiCK6XrnqaKINk3ypow4UbWKA2OfdGe8npEMSTCGXFm2gVykp2oPCXMNeHRzzUBuhTE-BB_H8WBS4Lur_veHXdOofdK-Nn7_q8TptBTVhXYeof7pnmV9akuZpv0TEVxHbBFEpjXkTGOP3B39gsHXzGdn8wvYc3fGptyA247j0X-M47Jg5CMRJjHXtHrclACotm5gpFVx2l8Cu3krgl8J4N5PcA9jC1s0wm7cM74ECJMwj4XhyLe57O5Ax8Nut8T-_FFWb6PjDOSH2bOSTcyHxrPCB3zi8sebsuTvoLT2044Dp3kjoU8jClKF3vwbOYtS", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116717710903166220696\">Shazana Zul</a>"] }
        ],
        summary: "커피와 프렌치토스트가 유명한 몽키아라의 인기 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["맛있는 프렌치토스트", "훌륭한 커피 품질"],
        tips: ["여유로운 브런치를 즐기기에 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피·프렌치토스트", items: [{ name: "대표 메뉴", price: "RM20~70", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://vcr.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6398451922394492179", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=VCR+%EC%B9%B4%ED%8E%98+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "피카 커피 로스터스": {
        photos: ["/images/kuala-lumpur/info/restaurants/feeka-coffee-roasters-kuala-lumpur.jpg"],
        placeId: "ChIJoZHXWCo2zDERg8ElLFMydz4",
        placePhotos: [
            { photoReference: "AWCwydjJqAjIbKfRNzfuDzQX5GjrrtxUZvtbdBEsFHDRZWvBq4kLQAq2WRnb0RBASo0bIqmbCFSHDBxRT7mJacGS36xzF2V1piO6dwSgapcNc9bvOiwWjaIaq_5snfk-EdaOKIEIk_4aEI-P4n43Wi1HBhkDGPqW5CvoeV7xwznxV8pyL-ADWAfie8TUO9jZ3Dz9bhU1ptZ_GqE82QKrWvQxO8eGi2NIcEeh1_k70RhG64FZ_ezaWd7vV9ThJA9KFMQwPGGmOBOhIX9y4ONyoIzHQzuIvtX66e5Ao6jJXfgHOCPmdSyCnjZkU0cfE5fChBfyZWTniS9up98hndQecJGpo6yVd7GJ6woHRrpMwaRcuK8xmKH3hDLOIagFxbA7A3TRJ1gtSKwCmzP8Hkg_JcL5OZsrH-FHYNGIkm4j7Yc7QiHx2g", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110388439892331859046\">Cherine Yap</a>"] },
            { photoReference: "AWCwydjUS3htU_UEAs-zlxnUmYdH2mnWxl81s113hKEuwNLwgV9-pmKhNZ-jbvWG_422JIRiH9R1E2ZMSc9dTq8itoICsf2eMJJmyncxhu3kPdIXT27jRgF9jBBixfT1MrkEg6KA3PU-5lKNVzcwWyQXRrwt3RCS9Ow5TysGj7peTeZwH_cpdr9SQZaS503H3IFbZNXrPGNuM4aGjREZfxBQunwf6Gg3fmhaTNlBlGaX8e4TPtiFDR3zNY0i0906lwo0R-3ACXvzSB2p03lQXHY6tV3OkQ3MAPlleNw2E6rAS6IA7cwNcRlJwxqL18Sfj0iUpNYMlQgPpiFaq_wg_1x9ZDjzxLN7RcWMoj7kGzym3EnXp23heou-6LxjouFrOOPvmTYYQ4Z3z2aPMTcSilFHjXc2y0XCNWoDE6iGxt395xdsYFnuTpnKNKtYzOJATZ5S", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116802032076084785967\">عبدالرحمـن •</a>"] },
            { photoReference: "AWCwydgnbMzUMCCIZUxsbFo52p9vjZIP9QoF78YQ5_btKa9OnGtJAiUdYSBjQtueDKX5EE9VQ3Nk-J8Op59swHL205BH39kbOlQjW5FYy4xcBPi0m5mp51NDmgCDxtuRyZzshXBMdUTwYTQp8iRHT3iqgCrIHzZvTDKOMpNnA4uG2NjcdrmTOIvX8ODenKzE9uqJPDRQEJt-rnfJ6tFvTJbcOd2X0CAjQU4MVJIUsLy0lTkmYOTtY78nEkmhe5xPcPLGKqYJWgF5_fyGKZfnOzo5ZWGIQJ7GI1ZLdsr6zMxM9vBRlxi2L3xRM1f_J6KG3cvs2PgXeSn95GTR0o0--6kcnq8ctTF60td6tHXCkoo6C04VRMiubedd0922rd4hYO4za-L1kLDca4Sk36e2jMdKiWk3OCUlQTM3pyuiJs_4XBh18g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112381559703634516100\">YY C</a>"] },
            { photoReference: "AWCwydgwgR7PP_VOQkVuI2nX9FwWpT118bTDw645pUoFTobvgjubiv6SNIJsXcbnMJaqqNlV9fMM9JN0I6tPUuNbrGVlXey9QS-PvtEzyxt7az6FlCdAYTfiq7y4CjX8pUl6ZdcL7pCcFmbOodKL84SQAfAoh81Pq8QL-Y7rwX8jzjUfBKQusTvqRez4hMHOsVJeXRpk7U8XsXESBV3_00kLP_dixw88eigtMze55s8hoHKAQ2q_44pkViZhC1ccamaIV9kK8WKJiC4BTojkv6jEy7fv7NTsxE11IF1xDy3rWh26xQRh1_eMBfOAURSda1AmP8Pr-1SeQq1HhC-f-TsKXBbfaDREszy0LQ-R_h9ahQn9ewyGES1mVFAiYCQRvzTG_fig9wP7WV_Q-LB1i_fXxIyGB7X69ADiidTs1XK7YDjpow", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107409674224854334413\">Tham</a>"] },
            { photoReference: "AWCwydhlv8T7wbuAtFTwIwaKwrekG0DF9ILoIY9pHLwfbalLxXbRxP-_cl_qYlFcW25B3coxauaQD_aac3bNYPGAjYypwbyCTLIT6SukWtbR7AP55ogU7AMWm8nV-ZWB-Gf-3CxRgPo2p_YS7QgOGriN0qK7MfEKAC58LCyGgVctodVWfij9wYyw3D3ERJtU4izfch0-l5K4e-23RmNQjuXCeqFEnTiY3BdVBzJ7yG8j8mBi2w96z4RXEt0zLxcaUm5AU1BpTXmGNCS49ro39JRAqGnPZpIFHrTuqpoKs1Lo83mnjM8WG87RP_6XT-F7JSdftR_LADMi2-ZVw0rjsvlPUCAmNi5j8n_KD6ZeueWVabmUo_OTKre0kTDu9xM8tjI1AAz07oXp7WnwRWVp3RwWryM7Ae4x5PEQ_4AyZ8aOOC4StxQOuRuw4WlaxpPm2pTX", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105860548483843335153\">Shereen</a>"] }
        ],
        summary: "부킷 빈탕에서 스페셜티 커피와 브런치를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["직접 로스팅한 스페셜티 커피", "다양한 브런치 메뉴"],
        tips: ["커피 애호가들에게 강력 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스페셜티 커피·브런치", items: [{ name: "대표 메뉴", price: "RM20~70", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4501121685384446339", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EC%B9%B4+%EC%BB%A4%ED%94%BC+%EB%A1%9C%EC%8A%A4%ED%84%B0%EC%8A%A4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "오피움 KL": {
        photos: ["/images/kuala-lumpur/info/restaurants/opium-kl-kuala-lumpur.jpg"],
        placeId: "ChIJ95ecsjyZ4jARLm3_GznbJsc",
        placePhotos: [
            { photoReference: "AWCwydh70uoU_0lBi5eUvgzlIoMVrY0qq9i1f0OPCc0B58JDo4R0nNg1EvKd_XhBKp95nhw7WaCeWyooABITngyOU-jfQAQnQnafExvKJg7nLQYEeE3XNdBnyBX5IW7zam-etj7VU_j1BI9G40wJ9aTQuno4KlU11bRbQYP9CkXR84lDXE48Vs8WR8OSJ7H4kX1mzEy18I39QDXQLqFz5A08zTFnLOoEwAGno4BY45hZ02gaac8nFxtFMy361oPC6psbHsITRFfnSDMGqKPIimOEio_JNfbZRcU1y03ultIfJA1NG4CuABEgYXKEPlMeeiyi9ZOtmPYfOEvtcY4mPRWx9tD8fTwptK_cEIbSQiH0II0rCnuuJmnz38UDgcoC-Wigp2XuBfvxqNTCQBnliZ33xfMHdwMvnQ6JF4YTDyqyqOlYnA", width: 1440, height: 810, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111373720692808065251\">Opium Bar</a>"] },
            { photoReference: "AWCwydiLVfet8yTdEV7P_7tRyj2eoYXVXy170N-koZ4zdE0ZxKDaIFfd8Z6YmkFi51qL_LFNdNV56ISzMC8cTNAIsIpR8QZLcQXxO9TG-UN_-zB3RhlLbq6MezOEJusXDkoswEM6t9Bmwjo-Xmp_expd-i5INcY-VJTuEb5jyXFgQmHKrFJgrvreuMOnV6ppDi4uLaKBR-SPXfp5p8FR-CUymAHXhOQHsQHs_MFIATjaSc_08AHzJUlLTKO6J4brtMn6fzjnhDJ_CLkMeTGa-0jjOu5DJDBlhnioyod9Sl6oV_DivZKFEyMcs6l8dyGJx_9Gj2z5cwEqaMX_qA__v1mjoPOUSAjzn6aMrbe9zJdLH9Z9GYW-lvB_cV0Hi_-i7BXa8QSPorTa9-ruzN31fKgHHZu46uhi5xaqyS7tjGle5PPVNdk24Vz-yLvBipeiSw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116644608076865704773\">Joanna Zhang</a>"] },
            { photoReference: "AWCwydgxnuT7fXMXhN0UoQwU8lmm9UdEsra1s0lT2-y85eSz-Lg9AWVnTW_ojOO-xoBKSit__wfjqVbBzNARlINTNMLK4zX_5BZDs2tKvlTMCCDsAUyPfZfd5KOw5k9FLUGHG1wSRyikVeUG-fIcbmgQkxdeFd3y6vPoYl9MQVvcTeCdBmaBRT5RnfG2Cx48dCqQd5J9Lhfw63U1tgstVsjiqZs-BN75_PkDmhovDsavRueIAgoHCwCu5MKXfTyXEz2CyiunToEmjTI6viHRy7S5mjAs3G96GacxQSIu5R3mR65gRJ76rW-1yPIcrZW35FkmKhuMRVl308WmJJYR7AEjEkEm2M4aZsNv3eJ0525qmLSFYdaI5CiOYDZN6id4WMEi203oYkp9jPSYrx7UFlHzlfA7g0pFZS9hTAXPKCsGV9_QQqtP", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111373720692808065251\">Opium Bar</a>"] },
            { photoReference: "AWCwydi7SujCinuXj-tFvY7TDkUvCGCQrmlGLvqEqWwYzMCgK4--TYg6xDBH6yuyOYM_VcN7SpW5liTuU8DCcNXrfyPsUniBaoRPvhwL5eCklAL8ZWJjlWKTX5HHRjKAUNDssxMpgJUzAnQkBCaLZ84HTLGTR9WOxlghiew8RN0hjhdR8WHzcbOhNumNNaMYpnZ1n6lGgsdsi-eElJ6kx-ovFdfcknNVzjFSFgMy0rVbfQeUSknEX_O46G9ZQ_a-KysQ5X2jLDPYNib1BOOXG4l-aMXiP0X8K-RZFieSkP1pRUQj-EaXWwwHLg2-0WqihH5PmMVBYyoD8bRRHXMt52P73gdR_IR-Wuxv_v4_vw6oqFBW3psWNWjzAmuV3SPqw6JBeka2KD3Ymo6JM2mqs-V0-KW-dZdcIQ1x-h0wcr7_eES_soPv0seEZLldbgtHEAef", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107770106144620038678\">Henryk Cheung</a>"] },
            { photoReference: "AWCwydjNqLp1CkXKImboxC3kRpqgzAwVmtE4UniIdwhEvEw31Qjro7cVEqNaTL_JI2lHF2Jb5QvMMiMiOcjJCZjb-AqRZqlK4b6I7WgoQBMvudtiDHDQUeqeBzNmCYp0qkPLrfAS3eS5hotqcmP-HzG7BrELpLGUOIC2ewUmRHaFWMasxeES3SfMylxW_6SZFaglWnIF6_lTKAROZKIK3Q4HDhw9VyvwvwtU_Gx1l3ZENcE1s-CWwrNJc5_1HaTKBhxlMrZ3DIK4IFa2h3EMgdD5jhU7L7c0aTmb6EkUzKVoq1iOEE74gUq5j6XWC1Isx96uhXGuvL4By-p3lLt0KPcgENhOrG4ZAXelGSmZjt68CntyW9tIcJ-YTaBk-DqIj6RIsl-XKuR_Nw17cK9EEJYHQkr_WEMVEG-OSeoE9f_mCemQynwn9eFT0_hLIuaFhlYM", width: 3280, height: 2464, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106245853554200918086\">Ruangyos L.</a>"] }
        ],
        summary: "부킷빈탕에서 즐길 수 있는 세련된 분위기의 퓨전 다이닝 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["감각적인 인테리어와 분위기", "다양한 퓨전 요리"],
        tips: ["특별한 저녁 식사나 데이트 장소로 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "부킷빈탕 퓨전 다이닝", items: [{ name: "대표 메뉴", price: "RM60~160", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 9:30; 화요일: 오전 6:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.lloydsinn.com/opeumbistro", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4030339530354044211", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%ED%94%BC%EC%9B%80+KL+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "사오남 베트남 퀴진": {
        photos: ["/images/kuala-lumpur/info/restaurants/sao-nam-vietnamese-cuisine-kuala-lumpur.jpg"],
        placeId: "ChIJW8ZV5Sk2zDEREyD1cIkbLVI",
        placePhotos: [
            { photoReference: "AWCwydiI7cZicKqn1_RWyPjdMk60P9ySmYsvwn4wGFmO7227fStJraKwBuNvMIO0aYULLVgIM-KSIkWpuelXy9_opR7abZpAVWyKDnUhrKvd_CkcOQgp_ZmjYLksHdvNcRr1r5tF8gFO2xXIFU6tps9Bdzvf_vwRNk2qIK5xVYe5zM_OHKR2gu2dtCC1cEY2aA2cFrJhHQ_-lNJ99kswODBDpQMHQWr46cGr2axqA1OMc9MqxA0QNZufMFdS0HKTy5R6uVf_e8Jn5WDrCy9bRbjvgHuK9p9xx3pWCv-i5eKbagJNaeu06a1ZLuXnJkDE2GrY7lmpA1gMFBo-T1zseLgOobGK3tBGbo9Rp-YNCQV-g-2BGukMMRe-Rq3woA9tJc4UAQDo3zoBYiuQmaOHR7SLvPCFpxgcPC6mzIE0IWfHpnY2UzU7", width: 836, height: 627, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110612559217384466567\">Sao Nam</a>"] },
            { photoReference: "AWCwydi6KPcVoxdCB2FXmTSsZx80hhhEyEkMtPEUQd3BW195_kfLpYpi9AEYpT_EwZBIh-oJ_4Dz8jckw9lBq3mlql9Rrdw6i8MRSf-aYeqqKlK5MSsGdhx608T0HlpvX8zzF8TTHop2iffWJTAeNGM9YM2vNzsBmnuPBtvY0eAR-8VMombaY2fO30ZOaIz-LVZAnOAco2_zq5AQ5suO7sgDSxHDPq9Pboz-TR-Xm_xGbmmb_jJou0vghajfK2ZIPyLYTsR4_hZMc08TS5sxdkOlmyiWpD-MtnXcuPbCsqG3ASHjTnKhvBAJsE0uZOiK4t2GVMHNVbqJW8xHF0lWOharDxiSrq5UctSfuuftSOYOwM4i6qlqZhkKv2B_WEjBGE2Gdz16xeAXV3tIRI2DbogLEXQhwmf5h9u0JUNregHMatwouU2fRTl0S_VWEbBhZQeK", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104300298552525872472\">C. Kheng</a>"] },
            { photoReference: "AWCwydiw9qFRb-SmaZCPzYHHCVgfmN_TWVvnYQjF2qY0UXui_usV7RZ_GtQuph4XI9YJNru7MDrrR2uaWg3Avx8HTygrVXPRKPSyTxJVNzRPSMHXDL6_xjJ70YLshRZCrTzwGBRyHYnlNQQWru-nzPSaJTsFqol-IuSQkZxJ2CXIZbMSA2au0acj-dmn7Upp460kE4Cd4kS3_SCQmQtuRW5ACYSYOIqosFLLZbgIApXt-Kw0uQt1_zm0TX2v8XV4ant0zGknYihMSkpjhxlDjdTQH2yNd_IQCqW2oXVEgycBg6-Sntk0sRk_DCiDaAdEP_qg8zR_7P0Bgjk82d9yuQuV9Ioam2fVmHke6uQQyqgvY8BM1F5ANuT8QpsqMCfEbhqWshzDOKWT7j1qX3MIpPKSnWXdWIziQMdv3aXBS6vWUmfyHCpI", width: 718, height: 405, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110612559217384466567\">Sao Nam</a>"] },
            { photoReference: "AWCwydiiMC_QOglZWjJixUmu_3ZnBNv2i_BFywDPXIXYaOVAuebt9OWmRN7O-k6urj2kThAj-Yu6IKRSjNH9zLEVzPJpHKBMZREIDzsGtbfooh5cE7bPqNu3wx3KBDpjulNmwr-9mVvffwNKQQQFi8D1xrS2cwU2mKCXp_RX4NeDCHa7EKFYaY2oVhsnXWHTu8QtEYPTSrio0ej8UvFZDYAalD5x8yUQC3KIRDQ1lnQobaYURpZSL60Alf3pCD5othiNYb8X1oW41bH2D5qDMMfVArLfX9p5XtM1pvqX46VFURO_CL8o50BZvbPWlyQK_KCZJ7pyKE5neHlK2y2OOZJRSLG2DfEepuGW2JKxul7KcSmwtIhsxJr_vDUUY-Em4uR0IK5MBGr8Q9hSiSFrmNFw4gw8ivbtD59MVK2Soy9lhD4Ut4Z3RMFEUuOIBlrOSg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116635760929461455988\">Kay Shayle</a>"] },
            { photoReference: "AWCwydhvLlmppySM88slqbXXuxPYNonNVT_uLFxA6aUPBVaSFSgQysycRpu0wd5XS9mptd_fc9A__l_Vo1CvCsrQV0hBExHpFd7Yvs5DNnhdOp_nIe8RFONCP9gSaoFRrpFISu5RochLhXvHTZURC8yrEW1H5YqEU8IOuk52wRBa6HuUxD3TKjZyxUcqy6UuaVLoNNnPqJH2KPOPWsaGmZ55cjnVT1FYl3KrxfqwY2h55iTZv2y_p7atT_8h8vV4ICwV3Vb69DqzxtAzEiP8zpJ9YjMRHOtmmH8-v6Z6fFiCb4nlJvW4LFbmhqG4Twu6exLPmrsWacJkRl3W-xFwMHbt88n0qg9xfi_ot1gDvqBLl6-1js-AoATjSvS_C1MigxCSv2S-c_l2oEYcCdZawkiHWTdkn5YIg83TIM2NOjokTNu198Q0mYjKkL2GAyNKhY5G", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104300298552525872472\">C. Kheng</a>"] }
        ],
        summary: "정통 베트남의 맛을 느낄 수 있는 쌀국수와 가정식 전문점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["깊은 맛의 쌀국수", "현지 느낌의 베트남 가정식"],
        tips: ["현지의 맛을 선호하는 분들에게 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "쌀국수·베트남 가정식", items: [{ name: "대표 메뉴", price: "RM30~100", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 12:00~2:30, 오후 6:00~10:00; 화요일: 오후 12:00~2:30, 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.saonam.com.my/saonam.com.my/contact_us.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5921419362181652499", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%98%A4%EB%82%A8+%EB%B2%A0%ED%8A%B8%EB%82%A8+%ED%80%B4%EC%A7%84+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "타마린드 스프링스": {
        photos: ["/images/kuala-lumpur/info/restaurants/tamarind-springs-kuala-lumpur.jpg"],
        placeId: "ChIJKSawWCk2zDER-npYWs3JQvg",
        placePhotos: [
            { photoReference: "AWCwydiibuQdN4YLMlEp4dlfZuO4V4W4D1PB5sJUF-zNu9b2owTWXesTc9IwUZxLC9NloN1CPWGDEQzr7Kepv46Qp-hiuJRPnNgofIVg3ERmnnnSBlT5q0O_SpIheFTns84ZNNfpNuUEv07iAprKUGc25mYvzYX1WYtvgrfdqoFKOoJdKE59J9Toamdk__HE8CxJ3tXb4GCP6N9Qh-1gtgFdITVUYfsQVcHOIclbgTIqfBvbRFxPKmV_9uhuT688fpA7_Y71Kdltq8c-_T9qVx_O0JzWtoqyNK1LNxT68t9I8rxTV4OB0mptwC3Qzv89B8Fuf6XUH2nZc2LHNwL1b7eTiXq_89AHTIWH9--gZ1sH4RVttMQHv90ppbfd4UiKUdiT-I00HVjNsM8DVpNnJAIhLW6BswY_-boHiAimSIXg7rDRSJ1Z", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108410643159275328195\">Tamarind Springs</a>"] },
            { photoReference: "AWCwydiY2kKc_Ch-GYisQbcKh3nyb96Tltw9PPLaNVqAuibeRoPumOHqeqEM0MCk6WKwWntjbbTtTxzscXcHr5LfLtKSod3VId9p_NlM9nRv2yEHJl-eA0AslMOUPA4Pv-jbeWLpknoLSL794zzzmNZotaah7mX11WvR1dTTPxvDkHokKmvo631WxNP1i_U95SQWwkVj4DEzyi4ut56Is9zuLob7EFPEotrR7f3MVRD0U0yxySd-3gzWCX6257r68QeF9E3cIiC40tkhiLs8eJju3hZQANP7IN1rxMvJ9rSIshvOjHdgMZrHUzoOXHvocOnkfTCKCJHAWllw_tWPpq7glqKhqUjXa3ZUHvBw_YQt5KgrkkiUX-o1JfZlWsa2-GPPnDOfJPALaqsqsJDtEj4qR0F6pmwcAr1ISPe39YeHuTAq2A", width: 1000, height: 667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108410643159275328195\">Tamarind Springs</a>"] },
            { photoReference: "AWCwydhaI7oi5OuJhgyTdW5JuAV0XpbZ-tGDd5ziRzLAYpltL9vREUfMumAMr-Avq-UKrf4DvlHZo00iqW8dDDkoxFdI2o5y_8Vna5boDbuRp2KNRaBshqayV7GzkSCjC6b-d0eXnlbIe_jBYklgJsja91GvB9pVkNzwOu2UmaJrtHBVsbpzscXhhK0nhLHoB0MzK7QoUtqNU0f6DzS8DHSLRVfI86HXvvnSNi3g95AeiUHOx6bDOdaFTE9K0ajfXobDkx7Aa147Wc_-2QCDqRhnHIUOYIrdigh7lr1DOe2Q28uZSqYz-l9dFsY5Hij-gv-FkwXvJc3xbA_r7bftyj7Af0uXcL3_UHzs-XjDSYGHUVXEeHReHpuSv0VP1KmM-WgiwPJMh7VzTEl1heSyjv8MarvffXlg2yBza3C_vDQRUeCXEL-FtzxPb4ScLco7zOx1", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116191610880623727572\">Mavadee Sritrailuem</a>"] },
            { photoReference: "AWCwydiwQlDiyEBZ6Kx0cin_PjSejjWcI-Xb1Wvomj8tBo9gidLd0kWKD-wTZ5OsKo2TPa--PJ7QZedBGJ7TFj2CyI3yMPkKlkXaXHfNPVDxTV1bzWV1XqLzrjJ3p4jFwRn02Pxeri9J5oHIUsigo--nVtrogSFNj9zA4rigfiwwy3jKq15XK_f5JCrRaqRZaTYQbP03Ag0OiCQfW9p7_Nv_mygLJznOiwp7yN-xnXPirxsp8T1O8FLR-hWkhFlrUy1WdyROfP8piCdb-y3tfQ_weF-Wilq_u-HRtkBKQBCy9gdAxI0qRGl64jUbIasBPGr7HOrnXIMMgAGToA25cxXngl7jtL9nYzvMGQDyeRr4651TBbDhZFZzVqSiLHZj2Sg8HcVTMzEdDwDsgdZ_QuD5JyG58L0NUUK_I2DIEJ_bjcFUgKDPaQLb3onJICOu7g", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102463755900330923394\">April Jane</a>"] },
            { photoReference: "AWCwydjyu9mpGTZCXbZUYc-mT7pZeQmMu_kzfEEnb0co8f0_zw0DTOtH49-bOsUbqwcOL6N9N2rBYpJHtxm5cD7AsMYaMNucsG6U8gz8-f2p8I4p1puxWAnuZNFedevc6JnRkJXnSLyj8gUDD92v_wQgGURNJbNajZdH3iZOvMwqqJM2lxJA96rlyaUpWHkPqbTrwjnWwdJiFVQNo6msuUSU4P7nP-v-khenqfgXcy5o0pdI6VpAbNQ7yRNDghLO2WrGbgxfON6DBbWcqs8qi7-aYUUEZmupoQLxtw2xGel6hWB9XLTC_Pw-J93kqbSmOnc8TM6gCP0lI3cHfWJR4bFyRmi2VBWkNDokstDTAojsWculU_KeSdGKQhzPkfkJOBDywZfJWj2sfMmNucTncL6I2b9ys5iX8hTaOpXgt3TneJW2MDgsZBb8hZRBECnGpQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116191610880623727572\">Mavadee Sritrailuem</a>"] }
        ],
        summary: "정글의 자연 친화적인 분위기 속에서 식사를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["정글 분위기의 다이닝 경험", "평점 4.1의 높은 만족도"],
        tips: ["자연 속 분위기를 만끽하고 싶을 때 방문하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "정글 분위기 다이닝", items: [{ name: "대표 메뉴", price: "RM100+", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 6:00~11:00; 화요일: 오후 12:00~3:00, 오후 6:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://samadhiretreats.com/tamarind-springs-kuala-lumpur/19", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17889082553690258170", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EB%A7%88%EB%A6%B0%EB%93%9C+%EC%8A%A4%ED%94%84%EB%A7%81%EC%8A%A4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "하카 레스토랑": {
        photos: ["/images/kuala-lumpur/info/restaurants/hakka-restaurant-kuala-lumpur.jpg"],
        placeId: "ChIJC6suyiw2zDERoQewP8eR84c",
        placePhotos: [
            { photoReference: "AWCwydiMILxFcTSHmQDalcQgLIB0GEQEfLuRAqKZaivruRPFeuaDpXF4XnrmeF7kJeigaYV1uGz9kU0Luii3SCG5mEmnOZC0uF6dy1ei0z2IBi67-gnAL68HVm6oGFHQQ6YOlT6G5q0_LX6kyKJeRxivFa7RTQCrcSMYx_q1ENr7w0Iaq1vHZ2eE5dXJ8HHatFs5ylfla0SOSrt7qfUgEVrRAxrBIc6VfedtHGMvnTIsn4lWCjV7DUXSBV_eWW8fDp1Z9-wCuqGNnJMygxzdiudwcoQ7SHinXaR_11tKZ5HmwMbu9-veLrwgQyksW52J-XxIVhNPsm-X5s-Alp9YTw9_vQ2i8fptIM2V0smJNYOlMgy8yjsqEwTx4PtpyRHQX8JBA03ZK0i1L5vMlsGPbhbjZIN7nQrvWD0Sw4vFgrJ3GNW-rE9I", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115681459062764554109\">NI CO (CONI)</a>"] },
            { photoReference: "AWCwydiHkxvAZOzY3GIEPhIbK5nkqM4hxHcUC5wgcajjZffskUnRn1Epnng2JnDxeoJUoNI-meLbbgehmvjWC88ReFpmuYjyxWv4124ZvPqpQtMLHOc0L9BEPzB7iT2s1Odop2hAnGwJSvG_9b4A2PVELMu8V28Tg064THTx7CuTEmW-HNPrYwLDscVZvfsrRTG5uYFiXHixz0t-PMlajYTQo_NwRq5Eg882G7pb3GWDW0AZrs18mu1ibWR6hqU_92OuZybzx_8c9kbcz2enkRpoDO-m2pz9yrptd5wAQ0IjFhLqNQeIPcRxabI9loF03QhA6lop5XFCYmsdKkA8sCSrtUTIZcy9b5lTvKDVe7xNsRxCe1VMR5vRkCg_PAwGWvxWF_jSD3MMevq7FffxcLMIZbKmSfqYZArPhSVg0faCFQ6jPJA", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108816896420548553291\">ヒロ</a>"] },
            { photoReference: "AWCwydgRGzF5q1hGk95egdc8_g-_Ya41RtuN4cNIZr3XDEwoEknS02IW-tUQs2798cfsRhCiQ83Bgb2sOO13cLFHWsf9M26OEvs6mWtaRSaS_tkH8UVCVPl1zvszEVHsj-jjti7KiV72FZRXc_qgZLVsOSEA8HrEePV5iTr0mPnbADdxWfECwyhdPXWvnD6zN8VFt9O1PiA-9_I7a_fExfP2jZzOLxbyRS6bi-bETyDQef68kJzgBl9fnuSXrrVPN9BXtDpfgErX90Qg5AmwYCZkb-K8MhS1PRl2Ke5unjVz2qLv3ejdUOiDx6BjJft2aSVu41ou1m4cyDGBjk0T9aVBI-66h5Pton8osTqdoil2Sebxy0EkGLEUB4Mv9R9g7cRXITybxCHOj7J0oeAoCMSQO7OYO_Rua1OxdLO5kwkzvbBElSh-LNsverV71WyTKT6w", width: 3145, height: 2359, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101837832310821634033\">John D’Cruz - Kajangfood</a>"] },
            { photoReference: "AWCwydin2yBudqyTSvQpjFRfpOfZRayL2GpfAh1WcB0ZmgLE4rE4I6d9MlHFOfB8idMCS3Spi4CRFGlo9QWzp6m_l7suMIO29m2MRyxkFGVZcgEHYmviW8ztlMNwB56L4XjYrwP3DncBg83JnKOy-Ig2_K3HrbmrTtvXKeW1DKv-BYqgQNF5aEyWcSADo6STR7ARenUA_-ifERkuuCMOAQoEZChcJJX_xyiMYHwiZr0EehgMZX8OZuSVXpHxzLzD3G7WzNafHvnFkytvMjufF7FVOh7r4d9Qv8I1AUtv_MREJsDL5UHHxabsMaO_CcbAHIjOfTlCvYnH4INzS4z2Gjf941Ft_xE3OwPOwjR3Oklv9E-rZ9Wxb5OL1xUExyHetDjErGYnXiRYXiZqrys22zTr1IC_SJXP-O21KYJxkJEjk4ru1mzQ3yW8426kaWHgsw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115988323065110786349\">Chee Keong Ang</a>"] },
            { photoReference: "AWCwydiUI84EL74bHv-BnTDYVRlu11RyYR39wvPYKgPkEeWKJkZkhiyse3EulzJHjGhkS_90l_ONefeP9btLTq61j1m5HTV9FiJlpxlq9OPx94WzK0r1k9NC-nakp3ySe1Hb5Hqo-a7X_nNF1BVw76OBfdZLEmUIESeOx6tj3yUS66r9jzBqo1bwKKn1B5LQXznsOyL4wlgBRBZgEf_Xd9LWJfRRiMzUH_pdkcpIJi4ZLsP4otTz5iv0_70l8JgXSnvlRud8Ro0Nyy3YZpGUvWlRCo_jzy35H_Ke8k_tv2byYBsy5Pb34otM9F8EU6d_IAzVd_XrF9ceGufl6ECdXaIxyy9-aN77k5ScCfzMG6FP_8QFdecBHQ-4NZipXqO3NlaHaiIUDrMGFvFjhnoZZx3TcXqzOuV_rmjrizCo_WtvqlI-Fd6sPiZpEM0ZkQpviHpz", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101305816513238576042\">Wayne Browning</a>"] }
        ],
        summary: "다양한 해산물과 하카 요리를 전문으로 하는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 해산물 요리", "전통적인 하카 스타일의 음식"],
        tips: ["해산물을 좋아한다면 꼭 방문해보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물·하카 요리", items: [{ name: "대표 메뉴", price: "RM40~150", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:00, 오후 5:30~10:00; 화요일: 오전 11:30 ~ 오후 2:00, 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://hakkakl.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9796333899413981089", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
