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
    "궁정 한식당": {
        photos: [],
        placeId: "ChIJVVTAJc43zDER6K9LGAolQ3k",
        placePhotos: [
            { photoReference: "AWCwydgeZG3JGU9Nnm9xxTNtEuqLZgnLjCQt7WPJ58gWu8B01mqXODKJPJ56JtJoyb4e_izdMhR4e03O7vwUBM-buqnquE2Js6foMjPszATpkI1zw1h0BktttPJNloRNy2R30di_KM8K9zFXh5f0bRbodpCOhm1ccdVG8KwziMHJt893NkhzMeHucOe6b_X5px5EAsLQaHh8U-ekmIvdyRAy7xpxEgko-fokhC1vY4fE22fP1F3oUU_mKGEHl5-w6_BYfJ1SgJmEfmI90W54wbiURJQ2IkevtVfZl2INk1WRGO0BRga1PUeh-QvwbzEXIA3FrT3ctkosmhf_77_Qq3mgczbmS9VX3Eps1AEwx_XYq3y1H_AnnZoYChcXK9zhvaVATobMNtjb95G0In8iNdTL9gQFSeyQbRTas3ZUliWhVibmeg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114218024043373764129\">Tuck (L)</a>"] },
            { photoReference: "AWCwydi3W1MGJKCWuHC3vg7zJt5P5W5HGL9E1uo8wnYUcmKvmjEUyv9i7kWG5bjdvvbYx0w4YUU5UoDlm3bAPlLk-AEq9eSRV6VsV-B3yyWkNdyBuLjIKbyF4QEF2h-lK-s6cx8GTIRAycbEpEMXzJm00wO1JgJDKUW5LPkmP04UrgERZxPKI2WIAlw4KKU8217WEMwOnJHFs_G_z4tz7sXflnZ3fYPE-nFSc0KHhiWy99J7MLfl2vhGPY6XJsIp5W-sOg9kvZ6_rxhprYJYvaN3HgyGH9ealfC09v6u35zH7Yqygae9GIje1fFACChgGKIdATnD7WiI_VWJJCPC8mi95Bnfd-_Lop9jwcaND2XU-uShuSoAdD1aNhkyTfo0nZHoytPqG1JzN2D1rhiKeujcKoiK4exNSUM5TU6f5Cg_Z_OJQ60V", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105123411456526582814\">Kung Jung Korean Restaurant | PNB Perdana Binjai</a>"] },
            { photoReference: "AWCwydjR8do8cBvNvGiuQh_sQRsRpEnBfX41xX0petbNyPP4jXT6eRwXM-x685Uk6mERyr7QMyaN4hgNDYiZv7IG0CpJnlBwvG6R2IyazIcQXke5fexg7bX8qgbQZV7W8RC1yswFwpO3_-3Zssz_upIWssFQNdvHevtFIY7TKnjw8QRvWbgBtXKQqIpbEfnRudSJGbGQUUeCwYb5sYLCP9XzFxs0c4AkypoT51MD-TQbZ_X0AOmmgC299JPnl_BJKQLiTBi0ZtBuRHWuBS5meMIqx_tNv9cBlftyihF8YBVxSiYX7PxS39C9YRmcA7uma_3gxDSz51vIrOtycMp70ejBHigzPW-W8ntJOFykwZ_sbt-x1kxeXqNN6EwKO9XMPQiyBpluJLScbVltdlagUcS7GjM9n8w5e3AvMc6URzCLi-Jyn-POV2fegXEouCJM7Q", width: 4284, height: 4040, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100267217487104817703\">N Marni</a>"] },
            { photoReference: "AWCwydhKT6CoEJl_V3bkOs6mCEHIK19CXeAmCKDIYC_bwUGGJcXbK7VMqsy2ZzgYdnhXgFQAlotZznvh9nnvH_FA0SbTLPey_YqkFj9HhrWvQ7lkRMGZBe1m78JKfKj7uRGyaIHnbScVhmzFOmyTXxFbjksHKT2sPZJdBTmuSPu4M9-f2zm1FedcLZK1mHLd_p4b5iKQ1umKHOda3nN5wvbNuA6H9l-IOsUb2FQM512sgH-XeXZi_rXeZIkOqpaAAQY18Z1uaAAGoKax4tz1-lY7A30XO8QCQYjdIiiTkQmD2DAEd7rh13AWKPRLW6vZLKnqJgZRAaDrVtBAsGputfBX05VWIEsRBC22gulCkATLgMzojCAMBdjpmBbN5oSqgyS0KhhRS86L_nc1fDT2zX35Jnb1QXRxRt2LCcjApinoSr1n8u9Ywb9Hq4WU62A4BubD", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112878761688680206325\">Nina</a>"] },
            { photoReference: "AWCwydiR5QuOyc3w-64KWrzx99YU0vrwcn3HLGpTGCpLxtWpeH7yKpwt0vsS5m1SoHKN3yjYk6zWP0KDure9mNrErfgELxvyM0LYtfpNTcT9M1-JXp_2JiPJRsvJeNkxtQcwT6RBwd_IzYhx7h9VM0kgiHiB9TqLFXWoCAU6LMW8wotyJlGg5KAxQpreCsJbS-ipFJN9kMZ2BneyFontYWk7bz0RaLjCl_TOItooS0A3BUvXk9jWJD1Q0y5jSn39xznxik4kwwr3PbkF6nVyyAEg2MS52qgB4UK7wGu8ibBtXkqB9w_FVQ9tPpbd-xQFtvkDTdWUTFYF5oFWT-bohGz1GWNhIobCwjQG6P2J1pG632A_OgVCklUUV-OanlvaA-J6z-mX53U7_kFAt6wlSEoI1aoKRd_FBFyPjwl6SsjMs6_-R5aAdIAI_TuhUfe_bAFE", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105905261461793675178\">Mawaddah Alias</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 검증된 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["훌륭한 음식 맛", "친절한 서비스"],
        tips: ["추천 메뉴를 주문해 보세요", "저녁 식사 장소로 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:00, 오후 5:30~9:30; 화요일: 오전 11:30 ~ 오후 2:00, 오후 5:30~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/kung_jungkorean/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8737868427316408296", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B6%81%EC%A0%95+%ED%95%9C%EC%8B%9D%EB%8B%B9+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "한모던그릴": {
        photos: [],
        placeId: "ChIJd6F-YGc3zDERkXaRHOuW_hk",
        placePhotos: [
            { photoReference: "AWCwydinvIurTGiZw_-YlE9x-HA3Neq2t88OnQiYufj9U2bJi6NP02_RtjJWxAQQLoap3JePhLP8Tos_C-Nxyi3XJUWVrRvY9IG-_1bHg06XJxNaygF415HKVG8A0lhCHqXHtB-AE5_HLw7SLa_g7QEHkOlBiBkZBuS3HNHA9iJf7Vn2Zhe7dqXs820Y1Fo8nL9bkQ0cnb7uvVMJdpiaIaTkmRH73xPUvQ44wtjci6TAXzviGm_99DJ1sYRgzEBcLKlpCvZJ1S4TlxBoKzHumT4jy8MdxfgBpEmienwDP1owghoAEJg4rC_3g0s9FnlotufJ36of84pjh3z4xbTTGCp8VaCr2iO9PN7KuWtCQhhmB_XItl0NQqR5r-rw9Q1L1ZvQhY-aA89kG3D0yEiQs2FQI-vFrVfD2WFdXUfi_5JUR6-FOqs7", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116003112542052705698\">HAN Modern Korean Grill</a>"] },
            { photoReference: "AWCwydiZe8bMpFCiBw-tmN21TzGCj8HyTb5o2wiCEOmrE6jwVqNFogEJuLirGZl-Ft440FdccfjzvpcQhBllFbs2rUcS9eTb94d77sxs1jk-0d-biolEmWOI_wasx6BTbFLjGJPq9qUC4YTVrhh9VAzcwKs0N-FwBC_VBTqzY1DnyhPwX_-MK_ue1cwprGm62bNb5BiTIwhpTn-6DqiC8Pr0aMMlBiydkoFStWfDpaBSvWpV9YCiSiT0BCsk0pWX50QyHZYkHVk9Ab2V4rtMhwyFzE3gcCdXI7BxYOI_3vUnEvZLnKOxpcpGnKA894hXNoONQLEl0ynCb3GxFmmVjAy7PiE5U8W33D9ZtboJ398KLtQkY8R4UbLyUcEdFYm62xVHyVPFKTnDTtvlTB4aFtfs4YNljepwSYW0LZijaVLTgUKoWW4I", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116003112542052705698\">HAN Modern Korean Grill</a>"] },
            { photoReference: "AWCwydh3zu9TPoguCBqJi9h5jz1EofxSe2OLceDAu8on8kTECsVlM12Tmj7_bTa2xiwZlyZpwK0iQebDB9kEnhlnCOJE5xxhg2zrPG9E4ceRehI3MMnEawQ-wVAKHgT1-yXlBWFSvmcdxWdsnEBV4J10E9AJZCDDuOoMDO3llM2WEUajoDaOnqmzwIW-fRepMXnTnqSs7tuKxEirmER7DmyCpUwQ5Zs9d79oSAzWUcxRY8CGE31hCF_Df-LRwesnpBpuhnBiYVuHVt4DH83FtmDaw4_cb9En7iN2IA4-FUsFXOV4OR2aP_xcDgvm2DkSj4g2n-UiaELIN8iLmwMNpGSfjvZt53_Qxb0X-tdDXtYYKOMHAyBngTT6GUXHOIg23UuyoFBDQg8ricnjWgJN-1N5jJokTqbwNSRdXK5Zb3xC29fY6qVszvtkk0_CQKlOPw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112060494863418109147\">Faiz Rahman</a>"] },
            { photoReference: "AWCwydj-i9e-Exc7ZwOhiYlJDPwFGA7s3TkTX7v3z_9Lz9HE5IV260W3nnFMhbxBuzAEpbN18SnrjcD6xvh8HSh4q4dvzwkHfqdzBtzKfF7TKladAUM25T7Yk04cmNPWHIgZZS_M0nSoRKwa4S16JhCH3eYDW5dFDqsG956n74eCt0-uQ2cpKhkESc6ykpJLl9Bz-VFVyzQxYxCR611Wb1pCcxn36-Pxv6QmBsk2fKqyb28OpE_mA96h9DuD_dRhrkU7pmpRPqOufvIL0Mu7QvFB7H6D-jBUnfmzxzEJvNM74AJMResW9rfBksGJ8xrUxr_LLP7e972l9xoXNeStkr84nY9z7FAc1eNJdGLegsIAVzeWwA0voptFPzUg_jVobnGLdmLJhqVFV-PwqTjyEIzZLmT_DbbmyY9HgTAa6rY0-FkzA9rVi-fNjvG2Xn24wDtp", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116915441986530332295\">Dan McGee</a>"] },
            { photoReference: "AWCwydhRW3VZ57zFgpZt-1C5oLtdMztJGwi-AmYz_Y7hgENQOxfXFrELQep_PoSrFS3gwmAYIKp4itsUCWhYEgQm_stQNJZUXVyylqOmGVV1k_KpLlKdcCdWu6OCJ2FlZ-8dwKkBAtJ9e2MG3vC63ZDlpvYU8quHr05L9LPTncRiq7FNj07xoLSOxLy7-0WH958hgDWUXXdWsDA6p7ogO-r2GP2iZnza813egmrcEvFtiDgg9brb8ZY8aKvYJ98IlkvSSSy7IcCmUGNnb4eFrKCaUzwfhyFHw6gB0IlLrPLGK0RDByahHINbDmAl4wT1bEDIDQON_zZQVHXzZYd-4o2NYgWWyyEEfmPN1YD1QTEgzuT2Jhq52j0Mnad5S2G2aeXXvVHP6J-cclku0tF66lhQlbR_rBTAiOU0cZ5cNLOCclBje_Ua_hPritkGhtq5Mg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113149760184943387372\">Gaik Lian Tan</a>"] }
        ],
        summary: "친절한 서비스와 환상적인 비빔냉면, 독보적인 김치 맛을 자랑하는 말레이시아 최고의 한국식 바비큐 전문점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["정통 한국식 구이 요리", "환상적인 비빔냉면", "최고급 개별 룸", "친절한 서비스"],
        tips: ["양념 소고기와 비빔냉면의 조합을 추천합니다", "예약이 많을 수 있으니 미리 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국식 바비큐", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~10:00; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1873100431573481105", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%9C%EB%AA%A8%EB%8D%98%EA%B7%B8%EB%A6%B4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "코코포차": {
        photos: [],
        placeId: "ChIJzdBygHc3zDER1xh2x04TVf4",
        placePhotos: [
            { photoReference: "AWCwydgjY9sKxtqWtK36z8z-yYgPZkFUylE3lbZV-DBBJvW79h8OnucxOkGLuqbHAzRstSDiH6EkQMNq30DGnXSZUIUv2f4kBgSeuobRJ2zMaGD16q_SDiCBE5ZwzTBQ1FFEBySzX08oGVPFWl_TfXW-epewa43UFfTRv6W39MAVhEen6ahybN_IALCgfmYvbS09xXRgBK3nokjXrLUteOL9rUOO0Pt4I4_-CX1iYeJ2IcBP1YU-QKE7YvOyZPB5gNQxGqnNA5Qh4zbL2ap6-8PNIHsm7LClayjOWRrOAvBSsMpv_RU-Vr1IA6cpLVE8MYTJyXa7_vN8WIydFWcOQW_MHu1pGvtY03-iTvKHVdv1KwN2ejYKsRGWAAMmqVnsDI1ByZXUALMhLIpotHMACMRaPYeVcpLdZ9mkPJaQ96uUatoKBk4H", width: 1960, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100738780118077603041\">cocopocha</a>"] },
            { photoReference: "AWCwydhUZ4GUkfHPoUMvNxQB2l9V5UOAnUHDX-7P5MzmgObYCdt8DSwVEwTgqwwqi5Y0A6fvZAYSjAZgp9-ubO4tM_LBH73c2AcYitNAW_EzzJpcc987lW3coEH5l_RkRYs3dBXcBCjsTxrdY0_RaCVljivgFaXiLgKsLbn9HJjDASHW_Hr5P1VPuL6qKj_NnET8amjB9T37Yk0tLmlIhqSCSv27EaRHwxXS8wQjdnvvhZOQVIhUuPoPpHSbQx8jpbUpcllUbtQ-uPDgAMuwsFXvsOJM0WEEzrdhS3fUn5Vn10N1RSO1AzjfYQU2gDhCo1OZtjeNYJ1_Gcktas5TbdRpIuUCbLb0xTMDf8t6k0DmgS-v_dyqnfMelardu5KfRY79owQcByIV6TZ2j29uUjt05vdKIJYPNGrSUWyJ2FvfH-kah_3h72Vuz6dkzQdSW9oI", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116100271279074590986\">Janson Liaw</a>"] },
            { photoReference: "AWCwydg6DB3_kmwi9xWYgddNut980ZhtZeE7gufv0BnQhYBuoACngCgu0G0rKOaie8rR1IT1-s9eDZOEQfXWyJdLcEl9PR1wbNHY_3xZH_4EjQgMUDOZa9mdJy1-dZvCaEmsWCtJsJzN2J7J6UdqgW55SeecGrfq-0vrEzRciTKTXu9ey6RlhyRVep3LvmWIYuozAslU2kv4xVDNEUQvfJh51ORS9Zq0h7ZgzoxnnM7lgXvqMyn0CP0agGEuRE6W8fvlkNsMQ1W0nRhUgpWioRFWnHA6LIbXJqIZqoem6qLlt2wi2hN43dNFzFAlLdOZT0ShFG7cE1Mns-7niCRqU00UkMnFywVSP-ZKn1m7_yMcEJRiERdpmFGwH2dhTdHrbloT5lNk0Wa8H-V3DRctb70AYpS5iinUO0-ifucxW3hXF6kWJgkPj8B9S4USq2nsLg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114426074241713737703\">H Trang T</a>"] },
            { photoReference: "AWCwydina2WW1_qFzDwVqxB2y3r804HhKXCgeJPWwBZk6RD093F6Mswr0Y_qMVq2CXhMIvSHR7YQLNZ-lmRAdia0p2SaIplCRNPEJiMpLMTVmDhS-Hzv5h-1magOekXeKS2keEPHIbQyjdElesfbP0TXn3iAQHdqMdiaMlQahBvfFrGZkgqxmzUx6-p1Ok5EYHWFIPRTS37k1CZxL4EQr1xC9K1W7oNRtSHjSY1dJw89gNhISlCJ2hJHHAar294-T1fivt6_m0I--jbHhrSzHi2I4qwJ3fSeC1lP6PfFGbt6FCRGc8YPECviPoCE_HJAdZJ79SnMDncAbNgrq6gSZrhqycViezeMeEJk7gcuvrXIySLLeuTXKYnr6iasdzO-T8jkB2STtu9jKtImDA5VMSPEs1e2zqxXz1pHeXYJLfesRC8pnN6-iWyK__OGK22R5g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116746312018118930739\">Alesia Sigang</a>"] },
            { photoReference: "AWCwydjaI7HhfTt4FibDsIvThMAT1KWOKJeadm7aCJPIXd-1bp0nrO1FTCqhwo6z1co_46ArdEzoIjN3D_EcYf2tKheH2oVlwHJ3laLgd_lluybnCDu5hcrV5UolBGq9NbmnMlOblkSDu2k8pYXERwznAHUvOQaFryuq2PyJYKceYYAg77I4OMlxhl6XkBKGhtXttMpZ0wkJjefcU8YDwvNTF9xYAjqrQHwXPEO1ZIS1mInH8umQ0rwB51CBdSnTuNWJ7SOQOsgJD2xzxJoSVSibIrPT_mOslN0vsppK5vAvTUzQBhzPnwpzZ8py5AcejtNRKzI6GbAWZfYvZEf08jP0NpkHs6o4jxgt3B6eOEHmnC3vS0QBL9xcIkKhe2IIIBZBbpXEqPYhmg34BQ9WoMf9p8Aq1oa77u9OjnD1xQWqreJgXh4652B-mX7N838gEw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106540962595226718099\">임영롱</a>"] }
        ],
        summary: "친절한 서비스와 훌륭한 음식 맛을 자랑하는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["친절한 직원", "뛰어난 음식 맛"],
        tips: ["재방문 의사가 높은 곳입니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 4:30 ~ 오전 4:00; 화요일: 오후 4:30 ~ 오전 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://cocopocha.shop/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18326575487728883927", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EC%BD%94%ED%8F%AC%EC%B0%A8+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "모두 TRX": {
        photos: [],
        placeId: "ChIJd2Qsz_43zDERcoTguVp2z4A",
        placePhotos: [
            { photoReference: "AWCwydj010oXMMwIjtcCk4EqkQneRhUxofK-xSM00VLB2pCxkOZiyQlXCdrauMevPEIr5Awq38qe0pOIHOuEkLMJlk1RIIFAWCe67cUtdL9oxCEjE_bAeHipyuqUnvO-gS70byzggDy7RLpef6JEtWuyy7_RIvZPRFrqcvJ5MT9ZfKaaE35JmuL3ZkJtwbgz5UlQbjvwJoEZgjMwJLMSxmwvI4NH4dhHQMKBqCIB8a5tvXUx2q7WVmybmq8rQndA5UXjZFru9vNZD-Xe5V2HA9gdBhhTVygNhMlCVwKUZkCvdPSsKg9PrwuuV1XHBXGgCJmJ5TgvM7eiazaeACL1Zn1A_vGZqIimmYxnM9OQ7oRv3iUywPMRIzCWYBMMiAHuquFUFoRgYb_ogz-Kzkcyzv65I4tpJzvmVZ3hShXdmCJZABX19lAVoDACkg5AXYSs79pa", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104142234172586712302\">MODU TRX | Samgyetang Speciality Korean Restaurant | Kuala Lumpur</a>"] },
            { photoReference: "AWCwydg5N72Q4-vXnPU3thOA71V7J0mee_GPHLIilbS96pkmrkBbni8wW7qXK7Lhj-5LQJKLAd5FYaCGhmSS36-CIduT_Hs9coVKj6J9g8gqFl_MsyaxvQbQyWJvOCKFUCN-l_8fwSsL276dQ3RNQceJfzSnmNuOf-D2TtY8j8wsst_NGh9laUWiYQImhEQcR37zxFJHX3UVzdojZEDOW-5QyvS3GSskZ4rpb_sI3pECmnE3TkVCWKJfaDDe2iEbVSYMMyrQDh9caZUB956Ufjjs5BfN1mH4xtmOx-M2oBeLHnp7Reonq-8UlBgaaIOHYnP-dl6j-IWCoAHIvKa8mX8g65xUa8Pqr4jNe79Qh1jDRJdbTnPrMY1rGhkbekARQtRKZUPNRvu8QBocB54l5TbGvBsLm3nI7oCev6ko1NV9C9RyuM_91itm5hR1OLhtE7GU", width: 527, height: 651, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104142234172586712302\">MODU TRX | Samgyetang Speciality Korean Restaurant | Kuala Lumpur</a>"] },
            { photoReference: "AWCwydgip-bNnLotUGAMlRIuVDYDTXR-u-60du7tTio3PlqQtJ_gUJhUc7obVEFQoBRFwKouxXrQfK-Y_VfM5rjC2cUMx-Wl1JBvsZh4ZjuCMFOnMIlZcqIr-dT3zduXFjt2UOsHUWSQfdQ2o_1gdTbZ5R_dYYY0RoydwuKA6FmzWeYLWUBXnJOBRnKcTKt2y4Gd4IUqzvxk8TxRTnYxaR77p40zrKshBdc9oE-YjaRMKNulc26vihCXaNM-BwgmY5s4TN-ojIUIKxxNoH0k4eYSlUs5lAZWucZcv8tMxphfQyi0rqsaYh8Hv4T9f6QM247pOwXPjw9h_jErN3MeenINMawZjebZJlaAJYk9ne2rtH0eefbWGAqaT7pYShtm7WW2d0D0TmEkIJSiOmHJnvZ3UeLoSoT_PgWjFD9YjFbi7o8OP6iE6OC7AjkkDCSLPEip", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105456758520576452692\">Chee sing Alex</a>"] },
            { photoReference: "AWCwydgqIxOUCmMM2uEZGSPCj24qP89sr6HvQHtztQAE-ZhGIQVZtNhNx28gm4K8RJer7uS13p06XdFwuTfcHniYJKYLNK_nOFS-A1u6l1icuunCvonnVi8HYbbji6Pzrwssz5KV-77TzO5NO635XgiKcPEyqYrFAFtluNO2EkfMIHAflSkM65Z_ShGg8UvIZv5MzPWgT3Xnuq6gIBRd7cMfQusbrC5CvxhPE5tLdR6SYhwPOU94Mb28w7ohTBVG-oGZqe1AA3MQx0M6stHxuedyu2eg3wVjr7yxruWRyu2_vWol-6de79wq-8bThwpWdc7yqNIHMUSGtw97Z71AdFMUtOuynA2SMuUZTVGNNvNkj2YZDPXQIsEJlEZfuVLR9ZQy1Yw56zQsC686mUWRCA3LShvmt5y5OrzeZEsYDGwC8glxpW3sJhqveIrqCToAX2rv", width: 4096, height: 3416, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102858870549991321957\">LI Leo</a>"] },
            { photoReference: "AWCwydhLOf9d5sAXeRLMdZasktSPj7sGRAg7fP7k7iaZuVYZ2ji-b18g7_eZtDkv8_J_-a8LygcdWazIVgvZLkz7W_Ho49-X9Wly6P1nbpiXooeu3FOJk7sb18IkV28z2TEFonjROd3zOSda5AGR0XoAZ0dAoCxM1fTZgZ3__K4spqB91vYDPxV8WtkJdF61KPiy1kVMXBzFjgvtoNPJH2D0l2JAGiL0PvR-d2997jP402ESHsNEOeKHdRuN6SdzsD09zW4WgbEWxmKGJaOlVD0Xm3lRiTmWYb0IAVeEQoKrZ1IjbgxOBDh4ClheyA1H0xrlgO0oF1MaiJt7reKYbxdXBJwcIjDZGnRyphaPED-a-XIvI9PZY0MYIn-5-cv4EbINDe3243FBcGuzp_T6320zl7LB1orEPnQ-P9c-uxGF71tKWfzJGAvRmG_y5EQRhq1N", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105857100801154182785\">Ted Soo</a>"] }
        ],
        summary: "쿠알라룸푸르에서 만날 수 있는 검증된 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["3만 개 이상의 방대한 리뷰", "높은 평점 4.8", "한방삼계탕 맛집"],
        tips: ["한방삼계탕을 추천합니다", "재방문 의사가 높은 곳입니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한방삼계탕", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.modu.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9281767489071514738", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%EB%91%90+TRX+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "K 프라이 어반 코리안 수리아 KLCC": {
        photos: [],
        placeId: "ChIJH4lYXSQ3zDER_ilJHplj_74",
        placePhotos: [
            { photoReference: "AWCwydivJSNDxyezLxW8jL25bdH_GIJem1IOoOmhvGeEsymu9VZOVVZlZIVPjLRBVBdHCTvBqQsXd3dqPvLsp90UKjAKgFYFW0m7unjaCB1xQMqi4UD5MHm6_dgvwtgyLg50jXg8LD-NQh5ksRYkM49pwO5arwJxQrXm5qPJeLucWSvLeD5mtRBpurp3bJGxXinFY4EhqMG8Xu4g7ItZKw3dN0pFIlLpSB2jOJInTKlgrJrcY54gUvPIpSIUOKb_CtHGWXT5bpH0svT6eF2-kT2zmXuBxUOeYaNxyf7mbQSXJrco1pvFgEvnp-W4fBsvbx7egylZ21Z8wyEQFUmP3o1Qr3Y_y-e9ythvbXVazzU9zlhUxzsLScPBhQ6i58__nSldaXeuHWbShueux5NEq9Iqj95QEDj68VGDMzSfk3vEpwZ8FhQ-", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111623468559166618884\">The Bold FILMS</a>"] },
            { photoReference: "AWCwydgtIxJTpOuG8udfd3JSvUkFn9-07EgDy11aYYAvUky5uxMiTNfhc3Chl6jAb7SRoS6DwPgpAU3cUxUcp3Q6Wws53inbRG7z8G5yzsH1G_rA0X522-el3HYrmllttuaKA59NVfPNRGpU8iyyXOecxSoYKt1HhoEAxFLy7hF1sPKbWXd07rB16iw3yiqNf2DIzH8bhv2-fg5SDB1LMP9AYue-n4Pp27QX3g7W43MY4CmGug5OG3vsl6t-g1jpC5DxhQRLxGym2fqWwGazmKGvI_y78dvdLEs_C43VMfRnxaRjSykqh6d7-cDwGNMfCgbuRgsOsixp5GoyB7k1QIhF1ja5R037AtJ4sTDDJdX2nCCn_OjRA11B7K2Kk5EqMhOwJczVoOcq6yPnzHFR6SfG6tUSgGsNzkfsfO9HaCrfin2WkAVz", width: 2496, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106750351934599709160\">Mad Nor</a>"] },
            { photoReference: "AWCwydhUdYN0YbijMWb0QZohIV5lm31TF8fNfiwp6ILnGgNUAHhb7Z8_y3fNi7B1DuuezTjuHWUf_XVszcoTyIESdT8VQk_j4R4Pd-wyAnNwsq-dpuwI3hcEg5P26BF956Mi3xETqqfz965VrOg_rQkVNoDW9fCx7rxLUx01dcbnD-_9jMQ4rjcK3R4VfUBjwQsqt5OPkPY3HxSizrnuuiMhDgrf24LTeoF53OTDIyvsF5Gw9J2QbYt_PIRVpu5KvbEVX_J0mE6PQBEWIoFPKbLNW7dxgpNbDAhDYL5n4gYBPuVyg08EG7eFLMmgS5-ffGxVtlAvqmWng7VU6Wld_AzHYDCbw88oha7lp7JKR32MasZP46Z0qXJuBw1XsFu91MWibzijHjGY3zZvyB6S-9tSEAmN4_J15l7jYjfDiu0HUijszIV09Kr65746b9IbYC6o", width: 3558, height: 2367, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112160735569577300209\">Katia B</a>"] },
            { photoReference: "AWCwydhpHq7M8FU1t-uN76oUu4iIGN8LL6w2FsiROb1rjijnH8hOJOU8eZfZIfko4K5PgiGH1USMfQQts4DQIjFGcminFxukgQ9k-XnjZsZjDupvx2YhQki3HKGlI6vCmDAdBpTmV4UN-jY_FtxwrNBDIRPmLahFThWAVKaW5P-hpzLDsuiGm-gMycbCEQiegFbfvmH1-jPn89TB__XLRVsTwQu7KWcGXpPGxexEvifqTpPrKrMcr2_yOTrkx7gFMd194H9s8rbVZr2_y49HtQCPP3JtMpnSpzFx114DLvHYUd6rrEVUOc5Elc9Iui2kWQ-EKD2vC6EXrmq7kpwdhJWGA8NSSfdByR54T_tWNnIV4k4JqhlrCXANw3r5Z9SO-6TC0Sk50gVgQiOxU2OxtsI1JFUOlUE3lmBSC9-LfkjkGn3wtzpNPNSENXRU0KGb8Far", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113530100970591609903\">mu jai kon</a>"] },
            { photoReference: "AWCwydhqrsct_PLeuQsDE9fxG075NPt1q-tDE5zMmNquin1mZ0nwGoSgYN3M5RcVnqgDSQYhFsTK525kuLU4uBkFVQ-n47PLHnYq0z9zJVdnglzoisqw0u_fQb-oeXK1JivI0OC7ZbIpMEY6ReyhWapdTQVNTQ_DFnJKQh6HtXHcopByWabggi8RMtnHDXUG0G7gJpsqzP7Q79ip_nlA_lEYxV4PjkndzalKCBgy2TWlcqyVDvylNPh_9xhzFS1b7VBwTsje1GHKPceuPRugUoRzPIl8c4zP0NEZPT5X95E-0n5IykMYEk6dYJWi77Az42Wo-yaBwzUx0erTmV9C96Dp1RO7c_JOwmELnQspQPNZphN1HsiXnOMglMtG5KUv6VukV3UJZb27_stQIS9dVI2Lipq6bV6D5JdCbmQf3iNfHt251rBgy0ah98PWhF27cKXi", width: 810, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102752124080370138792\">Ain Shafika Md Yunus</a>"] }
        ],
        summary: "최고의 서비스와 높은 평점을 자랑하는 검증된 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["4.9점의 높은 평점", "1만 개 이상의 방대한 리뷰", "친절한 직원 서비스"],
        tips: ["직원들의 서비스가 매우 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "최고의 서비스", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://kfry.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13762828495556782590", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=K+%ED%94%84%EB%9D%BC%EC%9D%B4+%EC%96%B4%EB%B0%98+%EC%BD%94%EB%A6%AC%EC%95%88+%EC%88%98%EB%A6%AC%EC%95%84+KLCC+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "야키 소울": {
        photos: [],
        placeId: "ChIJF-XFjDk3zDERs9jRd8hA5Xg",
        placePhotos: [
            { photoReference: "AWCwydj4QWoCmDMgUfiKAaKyioEGicj70XMo_595sz0hQOvMRWtj22v_UianlBDeiwPfW1AZieFqOTd6LcSr2vOU65is3X-IUN6F4GcSvEnHCc8ZXzJ9Lhvt7bLxDA369rzIBm8algXqdTo9PHTOj6Ghdg5nrJIMwEVkr3Es7nxYktb39JBzs05ux8SM4JLFROd3yoNEZsud0gx4W98Hlz5Lxj19hb51Qq-Qsi5hCYa-SesaHnU5N14Upz4UktO6plArjtRkAvgkpep9VE7UuZ_cZgk58hBH4XRmK7ch7f_l8-u88QcH0jvrLlVyFPKUYvhNkCOo4i1WPcP3t24UhoOdCsTYE204BBAJ9UEK61A3prUKpWdhMs8kbUaMk7dPobjdvjBGqOrRekY6AYHvkzFfeG6Qw0grTuLtUaORbWjdR90cVA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109800209167686030092\">Yaki Soul, KL</a>"] },
            { photoReference: "AWCwydifgz2GMIaTIm_pXlNH7UedetteFPsuwdnHY-48kxt-m4PKWmwe02GPM2gfxlzPEqMnGpHi3gHdeFnvxYbUbk3aIT5Nmbz_yoEGEpBF3Za-5PtVzmxhoM9jSTWRTN02CqkGoKqGZlu3BwRbYYMfP_W6241mQ7aQnR3JxuS9at6iWdR9rmrUUgO0FN1GuSRxy6v4DeWIRI65dH-BkE5_lT35IQYStBiokEXYZeP4HhVdJGt2p-q3MydxPleqe47yZkZk3GPS7QuiGDiFeRgeK5JldJNyKBfX99rxC9m6R_igC89yhusfgrjYnHCf3G7DivmPWDexhJWPqm7PqyLN0H6yN7iun_lrQSjt0aXgWze-WYqdLt5ZO3mUymbk98yGVBqnnQajoOHEImojMhwHfj90LVQHzct8AwVf1HAUSyY0_w", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109800209167686030092\">Yaki Soul, KL</a>"] },
            { photoReference: "AWCwydh01VoydEW9bk1law5bFL1NiwVthfCfWXOhxMgB4yyFiPMVbLrIFNJLyb3RecRwCYreTypG6itQYitI4xAx1dk25oKZ9hlNji7_SVwTlt0X7l9Fkw9Ef_sXxZNPGIqucIihFFMpkaGkLwzFnuYWGJgugNbFQnsHInFgLY95afouPAHLSNGdrufXFeux_vMs9E9E500u4-mGGbbC11Q3ZdH-EfGqqOASvbnHub11HIe-FXG1frFJMQ63oTON2VXsgkSNSr_TImJX9Ur2kPHmY4aspqXFYv9jD-E9Qxq7hvp16qxZ3cf6Ku3iU1PgENj1y6lqsaKUCjdKvIhOmRWECz11NaxmmVmZqLtyR4AHBPf3Wd25kmbxPEhkn35okZC8iyGEZPc_ua8LOH0ds6LgatA1ovNYB89KDL0Vvj8z6L4lqEyAYywcuL7biTQq4ATl", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101656602010479737346\">D TT</a>"] },
            { photoReference: "AWCwydgvi_tMJpmi2UB_4nIH2NQnPzuJR_6D2KULquAk2e20ydBKS66CDzX8CVb99b9iDMagNsxrnPB7lfKanjYl_ACEmaDQssLi-Omksvq3ToZQfnbKDWMTE2a-G6x-zBoI3Up-XeRFDwS7scvdCNIkwlLDclBxljBwxgTAlHqaa7eFJcU-jkPlk5kcwPGYlGKZMYBiVlHZOBiXurStw-io3XE0_dojAiwTRloIwGuFD57PXc87m4nDIyy7-YKOoE7PMtDn-XcJPpinrrGJCACo3YUx2b0T7NU299CiWyp8A5rlcCDcTWmmFIg8G-2te8AlaKnDIGyHVp6jik44OJ0NBT6Va6lUvhXyA5W_DS2vp_AXLoLed52NjkB3GubQZG-ceNeC0P569ElDd2CQCU_94coeOGW8-i2ESmJHhJLlKukutTbMCIJ74tyR9FY-lA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110120331201670895063\">Chai Hong</a>"] },
            { photoReference: "AWCwydjWtQU6F5rVQSmuuBu2Ybi5uxN04jayh90thp_VsO1PUltAv2liEl0aRTfeHxgoBRUfb_s7gfN6sNPM5EQI2e-grxggzauQUERTH0dhNZUavBTp6bTCnHu4c3YkGRePXTwaN3kzbSYYPGUdV1XGO4hZqQFLi2s69VsK3W1tdM4VlSif7bU6Sy13OWzYrO1Yxl4FkGlkMJJsGbGpDBlP7wCvS854e2kIAXcugRyCmok9v3CVkH3mUYJ2bPAQywBsqAaUCaqdV8GSPqdlj2NMg1YVEXsf6kmVDhxaWiyBmJk8EXSqCBmvtRVIJ65LeXckWqwL3O21_VZpPwKuFpP_mCsoL50BEvggf95gS6dHhGre86nHd1KKoNJK8TnMMAAxqJnf9vLbedrKJyuK5HgquFhSxQFiD4C5X4U6GXyqGXl626My6BEqhbziWZ8WMQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105152900312248354899\">Boba Lova</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 인기 일본식 레스토랑입니다.",
        updatedAt: "2026-08-16",
        highlights: ["아늑한 분위기", "뛰어난 음식 맛"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 4:00 ~ 오전 3:00; 화요일: 오후 4:00 ~ 오전 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://yakisoul.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8711440283965970611", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%BC%ED%82%A4+%EC%86%8C%EC%9A%B8+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스시 뮤": {
        photos: [],
        placeId: "ChIJsQDOD_U3zDER4_Egzu9utW8",
        placePhotos: [
            { photoReference: "AWCwydgZWifjRo7Cpk1g99qMQ8Lrqv25WxaOa7KzUFSdOwHDo80bpk7ESET2jyp9yOt2-QgSSHa3RwOEQLqYeRRHpu1g8efZixoag8PjsxcLGJO27t_VUittd3e33K0RaQKO7lS2zFW7M5o6XtNGlX4I25kmafPDBQii637dJvo93QxnZZIDIsgxl7_5-3W4atfz1Pf-XbUqdwJoJ8unNHEuGAKnA1Tgqo4eNE6VhJ4ibkuMOe6mpoSEJlhzmGgUhChad1_kl0zbTKoyt69WWa3rRcVarsPETKipyNevkArEkNKfihuvFJWn901CtSuwQKnuKmixmuS_Xixfw-jO8YxBI6TGetCFlcR22DYhhS8U6IRoQOO0XQ7T6CrlHYXZemXjw3rVXzrQaWMnsxc60xgzycXQeeT37gu3BQ4N8oxq4OQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102419253294857449978\">Sushi Mew KL</a>"] },
            { photoReference: "AWCwydgpGQagHR6ZqOih8Evxc4PM_YekBjgja70enaNZjefceGwnIT756I83KygPtMsgJUA_RwEbvgWJAubEgypuVqvph10fQfsBNQ_7v3VGkcP8xvsidfEn5ADvORnVjn9d9YsIDL5RJFdxsybRl28blp-iyUMc7_Q3IS63JK8D0XA7MJhEqdh0shhFK4O3yBjnX-bfBDl5TFdPUWsjMlxETFNtPj6JtfDOzelq8K2DZqq_pcSL2Myb7x6olbRQPpId17gO_WbQcvDGAv3B4MLLMVGNffrojGsM4dtdLZ6iMjebWvxWJqk224XAgdA4Rngab2oDQ_OVGVsbf6480ZGmzGFNEC7owQCp0PilK4g6mbqgIYG6rIkQlo0TBsAl5mghvycCkVdY6584x3BbKhblC7LpigPFn15mJgC2zY2KZg5v2ns", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112441840923860496058\">Ayu Button</a>"] },
            { photoReference: "AWCwydgJEQWqlwojXSUQDLlqGT2JZgHyvd8YYRBEpNoIBqujD84XPwTBU_rKv3PpBfh88WEazd9KKouj_k1Nm3iPja3x81ASEh_fkEuMh8rztfj8sg-ZtWmu4hjEmloNodLGwvLP42lalZGU5yYcWB8mYQnWLJkQlxKAfxxbZb76NzXttjsp5pXAiHXcGjhC8bGbCRWrVyLn0aj_dvjLs6MaUVWvMcZ_dFw7ObrQW7azXQ6u0ySAWTusNlIGJTa3DD9ww0CnKbZGUaLGHEXWT79CRzC5Wn-Fm_gEpbm0tv7gc36gfoZ3Ou_7r4ieQYbA8bEWxQGF_23DX-x6WA6py7Pt-U-tI3riHcyXo11oNW3zfG3C-Rl7F9WlemixptE3wzab_qZhQ7nU3eg3B0nwf7opsOApsvO2snt3I6QKWSYi598dee-K_1jmJ51JQpyoVigc", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100624242187266939014\">Emily Lee</a>"] },
            { photoReference: "AWCwydjslAKfIZEs6oIdNn_NchNHOs02tSnfX-7qLhIbuUs6GzG-AQyQGco2RfuOis5W5Wuo7umGq28wNFIN6iq43zw473egsWo9_NebUEE1X7mTVf8vFyNl52rzP0Z9WzzW8ohzD5IE9hGn0jEgGPNtDb7vUg0R45HGShaxZFmnjRwi-KF7RAgox7qIm8f7fNduUUxZd8dNFfLif0la3CEfzXzqzLuZDZ3tVAJXxfXF9Z7ROSY-gnOEYngXm6W_TWKh7WhgYHrGbbR-bn5M7OD5YytDHPR8zFSLqXx327qnwDsj8yIdmaUJ1Okae9rpnWzyp9zIrWPul6AagpdnrF8Lx1J4-35lTroEuxOVFFSNBJ0DpVvDPtOYtZVEQS78Gf1-u9GMj_q2rH7__ra3QYqsOjMhyG-RS-IKbUUEeV9_ULfPeo9FQJ22p7ZEIT4dMg", width: 1818, height: 2424, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107245612099152601410\">Ea Choon Wei</a>"] },
            { photoReference: "AWCwydhEd2X0QaqVtY3M3sYYT_3M6zvDhTEVqO1wWjeBEH1K5SYbbaZqihsDQDY6J4-CSIIzMVCwGWA3AkL6Aa4_wGnaV0vho9hgMZIPOgUDdnhlgZ7vYolfigd8QepdGQRSZskWAkWPviSeHklhppkA_pJc-RuFdstlDUL_5IAjH2oEw3JK2Q0JewpWOuPTC6TA-Y8GNzqQtxtxbCxGI_ZMmKi5a7fejBRvvaIQHPltrcdM4rWLcbeEi0TjzpSUqC4kTQa1CQyB2pR2s0dIgJZlRW5PcsV8eGdJg_1-fGZ2wgNePy7urUvTAWVMaGUoi_Elo1b6FCQolXzrRAUHf-6x8Tw-tZygBC-CSTvJv0AxpwcZBPj2yw4HTaSFMHf0g-t8Rxs3PQOpEYjsLrg8SnKHSJAj77yKYCxLORMeFouooZtROikdcmh21i2RijjX_AX7", width: 3618, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100624242187266939014\">Emily Lee</a>"] }
        ],
        summary: "다양한 구성과 균형 잡힌 맛을 자랑하는 스시 오마카세 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["신선한 제철 식재료 사용", "아름다운 플레이팅과 구성", "바삭한 옥돔 요리", "성게알 광어 핸드롤"],
        tips: ["저녁 오마카세 코스를 추천합니다", "예약 후 방문하는 것이 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스시 오마카세", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오후 12:00~3:00, 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.sushimew.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8049461885229134307", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%8B%9C+%EB%AE%A4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "UMI 재팬 레스토랑": {
        photos: [],
        placeId: "ChIJEwcouLw3zDERpRY8sdSdSs0",
        placePhotos: [
            { photoReference: "AWCwydh2GErcBOemmfsVNDq3WH-KjKvDLZgYwz2PT10Wf4yE5UMYWIlenBos4Zg6OWX3J8ZHvB3GWISaOSDbfQUij9Wcg_lyjsfXwrhV6cJNregHT8ioBWknLUbCJMDWtyiifE2opHXrW2uDyIrKHCglZrtSucvmPzMSuQzcBQTGABv4_A6H8WiDteW0ToqdjkWG8ekN11C1dQHoclRyUINCMpg_srAygNOgPEGRnNO0ORraeMSf5XxB4iWn9Lr2xDK2aCX7OT_qpoKuJw_DZ1jg-13ia0yYiSYhgoV7qww4agIkt74AD6Uvqs5IC0rfP_5bYLLQz6IQipwgCfuXx--HDn42WkmxnHO2UkHHjB3UaMtUk0oml-AZxrGjm1uYnhKMiE-vd0PkRoW_GY806XMLb_5852fDK8UkN1oymDYO08KSKMrNHm1J8mnIbvh1ZFMu", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117688032517431285848\">UMI Japanese Restaurant</a>"] },
            { photoReference: "AWCwydi3UuNbcQ2Se6XMTH5fejrKWs2BJ152mNJxXMGeHRMczVoK6kXN3kdvS4ekQHICpCZkt0O63YulKoD5ROHh6714QAFnQWelaszUhffG29xlrxLiPc9a5aEJvNt1PFsEHrh6DXZ10UMG6yLKR2gup4iYQrIu9HlVocxVM5aQ3N2AJjSpFpuCfwWRI50Fhu0iGC8A80vzQBoMG1ZoqvhhP2RvcJy29H67nbpdt-zubi0o0njwcIH_vLQlTGoI9Mhs-qNE0loAaq2LSxsV1kFjhTYSMkOiYU4lk_yW-W2-nXWCrTBi9EoaVLSm4TKsbAgmSIg5sEXQFGrw_M3N99UTqzFTn3x68aqmhEwOUhaqkX1cWWb_yyqlJt-q93XphHa374tEYwdUVsQjmwFxkB-xQIQloj75aR8Pi3Yh9RLgZsRhhaII", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117688032517431285848\">UMI Japanese Restaurant</a>"] },
            { photoReference: "AWCwydhIT0Z41MuA_IQ8T042_jZucS-XAsUptQdfvPpyL08rKdXUXazcRTzseKozrhMn_JeQHVMHMkw899_1J0hexmQUNkwhEjPaj_3NBBZPaJ9xzJai_K7huMFJuV6EpY3N_-ScWRioQ6LZpkyvkihkHC-ZF395MxgmsocZ19DZSzPMGOAAGZrqnJuQalPm5Kd5Kh_TzLaSSIATI9nXLElmr8AmWad-KhYO8oOKPG97IuPpej2DPtOjnQ__JxFMTm8-NJp78B4FfQsIuSWmDOHmHEAOiI7YhtWbf4d8klSEjcvejU4845S8MtUCRWFU2wqhMo2TiZBw_cOy92ekE7J-vtjSjnMoXa9JgETpvNh4ivWSlcJUvVqyZweWbm6I1UqctV36IpF8nZ4ilj1o4OLzxlbefoFlnNCEdQ5uL5TVWEgcFl5s6bVUeGG-0m9Bumkt", width: 2776, height: 3508, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117688032517431285848\">UMI Japanese Restaurant</a>"] },
            { photoReference: "AWCwydg3IZ9TCeJPN4Hi4ul0V53hXechD-iXKz1gggJJB4ckKYRdW7ICfU0ZlhCWJj3mWyZmDzXScVbxdj8sQ5zoKLtiD12s6ylW3QaE2fCcc6pMh4JSn0ZuR6K26s6G-TTaYAZi7SAzr_aTvthryMex56HqqJfNlnHIoHhd0Zy17tMP_fgFxS9kAcnxfi-WLLzq7YnD3irx43gKpfSo_us6HC8YjwOJ1DtMroy6mjDLUDHFl200GPGs2DtltYg11RNV9SMvUaLpfw3He_WvvMDKksibkm-ZSNB3jT4RNMHRl8zDBBmoNfx6dh40JvupUOnvn7FZdUBxEBLgFR7-T93016wovhzDlo-td70s0M6RJOVGH_ko28JN4CGz1bdkCaU6GLbkHhBS4fQW4XmDZWRKlaoXVhGLz47YG0aJTaMWrhAZz85jT7Od6_n8Dgapmw", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117688032517431285848\">UMI Japanese Restaurant</a>"] },
            { photoReference: "AWCwydgqUFBApd4dMG_32SjkyIprBWQ0GZJf7QRpLhzDWwJ8H1SkYro03C7DPM1Hb5A9Phqn6NNjs6nRkyjGhp2jS-vN2HlckNjelshczPE2GUVt-U1ohUBUJxMFLJVB7t3Q9eBLHa24GgzGO85ELgZAlcE5TQzaNjiFWmMmJ5ecymeuW6g6UWU6y_hvqaXRYMUS3EwmOfqEUQdfRUg2YCHYRYs5os7eH2hO544MSmaR7NMSySwWNo5-sv10rlEd9lWT-djq61x0AzWnZGg1ILp3BmsGmFCZuf3XVzGRm-f6MgmLtHnUHoEzvtxp5y1YR6kjwJbBm9_CovTsGhAjHxq1octJtMZhCEqEo9Y6bNDHiymP0HX4H2PjTyrLwr7SZ_e3PKMbJua3utfnKabqszVohEtjsyg-DH8wFlX0ze96YtyIX1rz", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117688032517431285848\">UMI Japanese Restaurant</a>"] }
        ],
        summary: "환상적인 전망과 함께 스시와 사케를 즐길 수 있는 고품격 일식 전문점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["52층의 환상적인 전망", "훌륭한 스시와 사케", "완벽한 서비스"],
        tips: ["일요일은 휴무이니 방문 시 참고하세요", "전망을 즐기기 좋은 저녁 시간대 방문을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "고급 일식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 6:00~11:00; 화요일: 오후 12:00~3:00, 오후 6:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.imperiallexiskl.com/dining/umi-japanese-restaurant", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14792809462883948197", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=UMI+%EC%9E%AC%ED%8C%AC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "사카나 재패니즈 다이닝": {
        photos: [],
        placeId: "ChIJ30tRp_Y3zDERIficys6EhBQ",
        placePhotos: [
            { photoReference: "AWCwydixsn7I09-KJXsVEBcq-o9wZbxjbFCCoUwuFgbbwHpoeopR5yXXCUmlgnswyPegEq6AbOy7zbqrErV_Hj7gSdCUujWBcjIPG2RDYHhUgRhOueVLAMSnf3A1rIun_WOqryvxmJ6ofTNJE09x9I-Igxa84rr9RQjKnIF0cuHz3NT0xLpE4SWLRWUlUcvq381UV8ilJJVhhLFZwcFoL4A1nAm2h1Ig3zTGtf6nOMEXGmyL8SS2n0uKm32fFbyPFv1AHXm1V83ko9RltoBbRd57wiwpMo6dgc5VhbKEMA0-EBrjJ6YibfIGf8RNQYXnsDrqZgFiIy-yFTA9PrIhwnT0lStpfX9tUIUBwaiQB2sAZ9WgjFk_DDOWeeoOE5d8WY4DlL0akW3T2HQUnnVGr0v8jJX9IybEX2XFdKq-AERTnJogAw", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116718646723715163038\">Sakana Japanese Dining</a>"] },
            { photoReference: "AWCwydiGdX09QwGbwTBErSAdj86syavHtHJNg-3UrUk1mC-YOZCQfUf3nClBIWqnsz5yo1VFRqoRpb35C15JRu6qvqTA1B58EhTGoXa95lMMGprJpcOU12mG7t21QSTVonTuXuaRdiDja5d34-maHrNvWhO33VxanM5JVjb0jSPkP7SpGAx1jsHks2cK4BjoKOdidawHPYtGNxBlmtWwkK9ayBgP6qFxghYnk05n2rWpB2OsJ28dHcIXoILdqQd-HD310KGd3TmeC1lfM448IGja-Ayds1Ozw0T5ahBt7UeFyQeQoeiW4di-8FaZdjuEkGH_70ezA4Y-ANI6-R4QOk55OtuMmRRhJIpa9lb-tmvCEKzpR_04sT4ODyhad0xeFLFCP43rSh8gP1eONJbxP1iezRYCLisPff1K8adap603M5gN_w", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116718646723715163038\">Sakana Japanese Dining</a>"] },
            { photoReference: "AWCwydgkZEXAPqQMFioowW5mY6uyeHvCLyMg1cbvDYilhzVbBxQKeeND7rIXB0zVNyvMPDhxBZdN5wRxO7Qcy9DGbl8Im_46JphNoOWpm6G9qxY4081ntXiP3r2I0xd_CBeh8kVhzUd4cLR9pZwYbVtdzL4zN4tiBaWC5LTQsb4Y22uHNCdsd4WrS9VRq8b8PjEw-hYESVKb8KfuBAUlk2sayPmX8Dllz9l747y1tqRFVEes1zEQEIfmzg9-TRJJbxaJiWhZXcTagHQbDQKK3phGwrub8KTCamxxR2-NYgoq-xg2dgABLq9cc3HOik5jbCt1_S5BOsoLQq_O9XuUiLgxdbsaiXcP35Uewz_0Kblj2jybOlnaO9iUBmr2xq4hLFt_gvB3zu7AR6JcE9DM6KbE-70QZOzhR4k3WxYdqRfPa8URoaeZJZ1upjJdxW1Xvw", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107798881379019410266\">meriem</a>"] },
            { photoReference: "AWCwydi2FjmHD84Rsbqq53iplu6tU8e50bVzb7_cT5mZw_2H23xZyzgj5EHqjhSx7J0l8JWzjlQbl4JyP_CDbD7LIrLbTQ-TK1nHebv6AIDfh2QT3vYYwwuO_hyW98BoBvJMfxE0inQ_-YXbRqPCDN3aY0tbOH9a1n425nM5-QxIRo2NTtwdahRLKim8HRspEtV7dLfqlWCUZ7PFbN7qtu-NnaRNC4hL_tHQKDgy22_jK_Wo3-AOUVdKrmLpQFOFP0tEo5ncIKitn9BAJbUj0w9WxQtcwa2tt0IqmIfmcFAoGX3YP8Ed4FXipqB4nwxBqWnjGYHVE8feiF3ZkV3nvHQlajl4_zZYULwGGSpQXrRrebbBDYhVJKGH_K9BeySBy0Roa1EEwaEYh6szootbrcBCi7xfA40jyL4l-DP2wSU2pJPmhyuOPBy_fnknXgmZcQ", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116718646723715163038\">Sakana Japanese Dining</a>"] },
            { photoReference: "AWCwydjmC57uiAiL7aqENThGWe6bwSkUWn5p0mr_xCpH8j2D5LoNDNQ4ulMbFhCspugddpPcVebPK_gx7El9F5469le2ScZianipKSZMtZ0Pq-20ztf4ZjgGs0NWlHex1BTY4tnLZQ5xST2lq-igPg43bh6iijXuonT4PMjgyVeM2xCN_SGzvK_u3GgCsH1gCvAd9gFWV5fxWaOV-5refIvt6qqAJ3UX2o6y4l5MfsIjLpnMzvfmCMm_wMIPRy3jEOfDysDU5Kku-lY4QX0rRvtq7S7ZcBOGM3wEqYS0tGrnfzBx443ziT1zKtyPfShuhWyUXmGfjS2pJDntQYoX_mp6vC7CxRp8zZhmU_0Jb2g9iKd6c9iErsJCqvWByVYD_kYjHXKHTdw5bCLAV8-5reFY12xP2jwT2PCNgxrgdqdyKGSyjZbWl0biDA9_70aUf3U_", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106286974698920709460\">Maria GypsySoul</a>"] }
        ],
        summary: "쿠알라룸푸르에서 보기 드문 정통 스시를 맛볼 수 있는 친절한 레스토랑입니다.",
        updatedAt: "2026-08-16",
        highlights: ["정통 스시 스타일", "신선한 생선", "차분한 분위기", "친절한 서비스"],
        tips: ["생일 기념 방문 시 특별한 서비스를 기대할 수 있습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "정통 스시", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://sakana.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1478452601381779489", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%B9%B4%EB%82%98+%EC%9E%AC%ED%8C%A8%EB%8B%88%EC%A6%88+%EB%8B%A4%EC%9D%B4%EB%8B%9D+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "젠제로 레스토랑 & 와인 바": {
        photos: [],
        placeId: "ChIJZXrJT9U3zDERyD1H5ruJssM",
        placePhotos: [
            { photoReference: "AWCwydidDEsUa_az9nhx3-OzVxqcvLyDXu1RvLDPA_c__CbhQYWyFnfDR3V1O3zAe2I34GtQuhNYEX_x6qQBjrbpKbWD8b3KlptLOM5NHGTOJ82IiefVl0X4SMQmVTxRVsdeTHGkPTLxZ2tX-TukZ9W4UxBnQYWs2lR-VJIlTXxUnraLhewQwgl6tWHx6KeIXvlsSOsKGn3b8VOaD_Knr8buhY3O5Pdm7aRwxvXNbhFesesVvWKJFS3k6jKmTJ7MFP3bylD9DZq7qE2GRp-UkAaiVJ3r5EaY8wKjXG1myWWyi5bZ8FCRYcUpV5_i-ie3V2MKOG6Xa03Ee6MPUSLM0oBHpJ0HWS5zr8OFPmEK6B3VfbbnCBEiT7LnTUbIRx7Ty9eVjfCTOB4N_b46BtCfvpbf9XVuKoL5-Yhf6RejhWqRNX1P4w", width: 3645, height: 4421, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117934914148352612137\">ZENZERO Restaurant &amp; Wine Bar</a>"] },
            { photoReference: "AWCwydifxrOr4jdpLg8UE0vardKseSrN-CSlUIx4bLl9_PPxljRrMd2VAW6ebsEIcABh9Fm8am5aHy4V5SxaUZTK-fzoj4GrTc8Q4MhaEK8tvMKtUIEPcxJdQyCrZtciJy-ovOlG7nSGOWxWCh2QyBZhgOQ1drxQb3wTV4ndcaQWHl2fgCO7FdCkP_8RgZ16iRSxCyQ4fTOfoT0tAtsi0DLGVUKat2soCJZOcwoK2wk_Q-Jusws4XuL3njccP_YljHcgweXOgA7BenNBlD-HEvzzB1xwJRvX3tVdVQEUTldBNd-K90WY-humIbOw-ggbu2lCHzttpmmPZMixxIfhdY-UANozJ-hBXmlCSjrUzTU4Sj8fCw41G15rz2CLnWD1mONqknldLTAPoQryYduSEs3AJ993s5GVTL400Ea3RemQRzNtsonE", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117934914148352612137\">ZENZERO Restaurant &amp; Wine Bar</a>"] },
            { photoReference: "AWCwydhr6VugRyAyj3N0Ac1Kh81K0Qv7dpiQi238XTpxD_l8Es1G0mqwdIxdWSZJlx0ivTbcksjRH4-Xq-PkvpzADg0etswB8zFnyOutkrzecrHyN49bb1lM_UzZ-sYTZGl834kIlvi3cHH5YlEcSnIPw5d4QwxNoI268VKRKqVuLevKE8yZopp9zb25mxiuJ0HrdktUEdvN8t7nIADUGd0vghHNCc-Frxs38ywdCMwpegS3R59ZecDL65gAnJpAc7u2ntlf4Vz2hnq9tzReaJE6-YqcR9hOPWttzmKcjpAG2Fvy2uFT7XmHtdGUbncpG6pH3sWoQbUJ7VlGo6Hg44rRvQVq_4RYSQ6d9UjFISp9zuso8fTNU2GY32JX3rHTsHjPYAxfUPehgdYWp49TGp1aPhj98VYNmrbs0KASCi683kYtg2XL-AShOWHyoilgLnOP", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100767826873151921816\">陳凌宇</a>"] },
            { photoReference: "AWCwydgW3xq6GDfM_sBiR612PwYMGwiMIGtTquAVoqD0OMnsejkg3e8KmGOgms24S9UUOIkJqKUscllXa3QeBald5hXj5GNWokqwz73Q9hdVBhEPxbgOrHRSGBTtOLsGhHzjCFlT--DxlTpDb77g8SBtFXByVwwSb0YvJGm48ttYBaGcyohHLfrjnhPoQmUg0ATAN7t-5G0FF0OzFugcrvXz_yMsdka46UB2Cf5LZV5jvc_0zCSvEnlpvBWi4KEr7SnHHLyJWeiTRnvV8CG2khY8EF7LYRY6PLa7Lk814MCIp2zL2w6OaXkvyt3THl0hBpVnbIH7syn0sr_uiSQH3kKlNbvcZJuuimmjt9_ujbYjBTGnknMuJ8AvEPCyfYKkvcKK3OyKjGxdh4H1WY2UIRK2dpdFX1rucmEU_uBPPLFLq_glHY6V", width: 3492, height: 4725, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117934914148352612137\">ZENZERO Restaurant &amp; Wine Bar</a>"] },
            { photoReference: "AWCwydhQpjgI9oOTPFptcWd_QtoxMZDANlP1d_jynqytHofus2n9hRdl0cuba0KGauJyx_JG1TmtLkouxxiWlhdZpwGtA5W8VWxMlH7DHwb-iy8PYEub1EmMtZ-FiDkerXAcVn4Wo8cE1HhC2oUIAgF7eaHRXt2xevBHtTPu661X6Jc8xQXC4oKxQEVeo_x_4uY6VEM-zEti9C9H5xBzmiM6QhOgKCC0cSOvI4vHS4rPxQFYSff13W4_jhkJ8LfJplcfjZ-UShz1gf_lObOM_--LwUSlHHpOapD5NAyQ-d4n6wcT_FcDscoz4Iw-8mEjY6LjxEV5-RsB8uDOXKkq4drydvWRGgQuH8_8OIIrirrfArCYhwKz7AIpJAoISpUuvqJQEIw5JUoUqZ5ryjh7rbrMOEZl1w4V0hWvgOkL4LQMwB52OJ2iMzmimwAsFsetvg", width: 1080, height: 810, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110225744170098956680\">Ersoy A.</a>"] }
        ],
        summary: "훌륭한 요리 솜씨를 자랑하는 현지인과 외국인 모두에게 인기 있는 이탈리안 레스토랑입니다.",
        updatedAt: "2026-08-16",
        highlights: ["정통 이탈리아 요리", "훌륭한 요리 솜씨", "매력적인 골목 맛집"],
        tips: ["엔젤 헤어 파스타를 꼭 주문해 보세요", "와인과 함께 즐기기에 완벽합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "이탈리아 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00 ~ 오전 12:00; 화요일: 오후 12:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.zenzerogroup.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14101484823365762504", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%A0%EC%A0%9C%EB%A1%9C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%26+%EC%99%80%EC%9D%B8+%EB%B0%94+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "TTDI 미트 포인트 스테이크하우스": {
        photos: [],
        placeId: "ChIJ08vKCypJzDER0Q6N1s5TXwM",
        placePhotos: [
            { photoReference: "AWCwydjINNLyR0sOK40faZezSp_uY5qJQPw1yZ5JLDK-2CaQV4qhPa5fRFhq6PFc2dahzmFgPjVh7o0daxWv-X886qDqJCo7i-7tpyHLp6l_nEE2qvaKif-OdVEjWrNOdnOz0d3SG3i5Nd_ZJcTaiXu-tJfNQ7elNosZk_5vXBz559pOLUDWHsT-mRnhjlLsxL9qlcAk2unzeU_DSoUDV9ykE7xUibkc5T98_o6qdc9DN-d1H1nweAs-2W_W5li7qJJXW1_LUAlwAnyFMqpfxB7V5vSLIZb5fJuWJdXJrs7oIVvbZjH0klEL2Cce2e7R77ZRvtmeDWhL4Gz-Ap_8QAPmNH0otUSt8iPOcHkDNgpkq7XllpRaiIfJtxnzQ7XwusXTwRKfbVz-9jCJ-PELHqrK0YAd47uNL9obw39r-qgGWQluqcUd", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108683628466690022180\">TTDI MEAT POINT STEAKHOUSE - حلال</a>"] },
            { photoReference: "AWCwydirggdL2zO5i6UGjJLLdpuEXhMBKlXiEUfwZEmGPPDytYG-2E8IbuiLivL0g2_Hrlw9VXs76OfikWGoVPq9Rk4G6IRlgArFWsScQohEcHloG1owVS-2utaB9OK5ZuJhqoEvpoqPNMFrCGhxRumQFbNRL4yqKTTGBGoXVxXAS7PZD7EPMDCMJz4fwH-5Lo8crYlwKA3dtSOpl0tIh_2EXWkSyw8fFjZ_LPYTAzzJGytq7ZCv6qT9-qs4HNX76ZJy69bylOlrnutO_1w4RgaGopKR3YSQbILpEL-b2nGQRF0mhcIVWl6bdweZoFRTmotgCnVEI-cYPt4xU1-sIOtGxAgUWp3b5d6_cFerboZ0VtVrLRQBGUxJkLesLeMOJTrU5Mg7UJMLs2sAZ0mvInaTfNaUxQJzU4rmkSJIi3YIHKXB6t4", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108683628466690022180\">TTDI MEAT POINT STEAKHOUSE - حلال</a>"] },
            { photoReference: "AWCwydjfBdRc3z9zVxd04-MPeG0J_LfLOaK_0TVTcMuMAoSgqn9KhYK5a_536b5wqnfzLLYZJqtLRvBQPxgUbEImI6EnQaN_VoUyL72KuGRcXiFi8ZDGcuhYAEwjFxpA4thaecW9lz3QcCzO8Ts-4uHHXKfUudI_UJBVRw-3-rN8mzs2UUJLn6-4hHctaXHBOUOaPB28ZRo-xmZyTRLF3gKCbhgQEVA4nkMPx9_DgQl9QJWHOrrjcA7yx1BPj-8c1Enow-BiD6xo2AR67sX9XTi2PZLYtr6b2P3IfW0TZkR2r9d3ho8qVPwsmsFZ5DvkVGm5OdNrBUuc8kweq3HVayLH5MtIAmYL7BT2W_5uTj1YKz6jJ9Jft9VD-37BY8rxoWQWJXEOdtpDbnj44VsO9ICwjjffSafb-Zjfx_oXB0of8rv8vUfayU03blwCXjJz5c1-", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118424639123001043241\">Huda Ariffin</a>"] },
            { photoReference: "AWCwydih2WUOabe_XRkZ8gb_2w4R0IO9qg5Sn8DwBkFHocewUhhorO_KG0FISrj7-9OR01k1AzRJThCRaDnfgZY_BzTcryxtawsD8v5oq0dRSauGfjHR2LMba2b03_PCTZ5yo4Ir5TGqn8jvcGxGzl-7iGSYvLVRCdsByAINmBJek74CZwCsYjLoel6MoLLSq96XOtTmjqsdekdykNZJbvUgJ3fPF8fEtqkXIfhk7ciMaEUWzEWvBY0lj4NnZ-Luc5Ylpe8bL7jUbOrD3DAn7-w4Kpp7rcSobClw6dmkP1MUJ7m2uEzcoaDM7RoyuYDC_uOK_J_L0UhbRwKqP2yEKMG6H1DM7UNOHos-DsirMaIOcNDM0ISfgxgBwSNbz4--Aqj_R4kISFqRr9he0Sbg8n_tJQpF8hR3yUv1IPOxp_3EtfCmQ1fCz21wQrskquiYta6D", width: 1000, height: 1003, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113085884091404968834\">jumongdongyi</a>"] },
            { photoReference: "AWCwydgzin4OfqCUcWCyo6mExoRAzhRBZsZNtcG-h4ttXNv0bsagQGCsCNk2GApgh1KT120Li03l2NN-hdCMDiFX5lO3jZ5QkjCRsbp1xV26yjBtoavbRwFaAdo6VKHmr3zw_-1RS7suaWkEWY_d4KaD3ENFEPK4tCjnjy-hKitmYrBknBMFaG9NUQKqt8I6Tuuzle0qzDo4R77AYys-c5ZwhL6Fgjq91qeN9D1ORMjw883uLMoV6UGc8PT7dCX6iKpPS6eN53_x1H1aICbMLtZngo-VuqaBJcFv6ZcAwMsZjpi26xzuCubz2_r4qPMAgfGEswKFQRCN32mzf2c-2IfJHVoqcFZZ9GvbHQzRb4KdZI-poKSKznFyqRJ6CKwK3o7SOImgIlDIvpgAL0zbXVsgghnsY0suk901HloXDInBDq6YJqUQIBGPYykDxeYZtqXg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118424639123001043241\">Huda Ariffin</a>"] }
        ],
        summary: "뛰어난 음식 맛과 친절한 서비스로 높은 만족도를 제공하는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["맛있는 음식", "친절한 서비스", "가족 친화적 환경"],
        tips: ["아이들을 위한 놀이터가 마련되어 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "서양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.ttdimeatpoint.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=243005052729233105", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=TTDI+%EB%AF%B8%ED%8A%B8+%ED%8F%AC%EC%9D%B8%ED%8A%B8+%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "포블라노 KL": {
        photos: [],
        placeId: "ChIJ5cGkA75JzDERtTRDqMKtQ1M",
        placePhotos: [
            { photoReference: "AWCwydjnDeRw9uYZXrBJ0ci-qQzaJRzWbv5qz2ikuaOIEIorqBnAHXOmCnBLFVgYG48wVDTezAdXwRWoc0neuSgLWPPc7uwqlYoNB6p6h7SNrKlrmZghUJ0CSwEXxRLyPfssNCc7NA5sq1qOt-OFM5EpdaGHoiW9JtqZNypa_aPBsNW2rNwOc2KNQMKPYTk5rKSKa2n5yhuBooQ0Vgy4F_5zEbkRlGzfa9ZJPWiYLgAv3hLQaU9au90rPgYAVN3GV5J5U35fL5b-PzWBxL4monkkLUe8m-h4xHoJGdU-9GIISVII6kXRI4hdNBuQOMloGGKYJpEBZqn5v9B-zAu3zpjERyQ_QkwoGdHdbOWoUw3G7Mxx80ZJqc_TFa-yRrbwf22rJTMuSwHsHy4_hyvGw6dPEonxJG_eo2sjAViovpLRdRz4DEHdqlnelU7dUSonrg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114578331579037841177\">Poblano Kl</a>"] },
            { photoReference: "AWCwydhNkhXtS-y0S5uM9EDeR3YYrz-Bomx3MPGO6JesYe3xj56zORpp2qznOFY2pfSFvMrBkjovkwAED8h1jPzkrLGfPtiXWURMalmq8szWllC0iBfpJ2T6xhmNPXhCWyKjQQhu8fLZaknpekyCxK-mhomCutWEpXJu1HZFr3SXsJ_27dEFrXvJB67B00VW06osNBiBBsIqIn5RoAwUP9mJ0IXIQyMlkKjBTNwyowwRd4LajQ2CStlj7TzVsQZuArondOR_GAQ-BNQHRr89rAnj4DzWAT2iAyP_CXsOQsUYR-HAyHhSFO8bH8pF49A3A4HhTSKUaNjZCyOZN38DWuf5124CSCQmriBu3h42aC4KSlOrstSgSek6mI6M_1lHMnzmPta9MViT_lfJ8ZDpo0AitVmkCZJhG9rbIqCZJijxEI8KCNH-92o_3fwL1lLCtmA6", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101721544954368455501\">Joachim Decock</a>"] },
            { photoReference: "AWCwydifpVlOMkbgVYyBUqnF0IXd8cxDLzNFJ-mFDC1faPig6_97LkycSkmKRfHfhx_pZLrmbxnxHU8XkJiFWUYFoUaL9v6EbccIO8BMmLR-DLgzuZZ_yBhqqfpNUJTEY76ZuHDK2glW7ns3FgX8-TdQwzxFkGnWAWjXqIpq9eKtDjb-WMlwuSabJIJZU3itVKjBQFwS_c8R_YRv7zSgNEqRWehxpM7QDprlMIJmcAgvVrhWFWp4rwQ2vjnf7ZtejJ09vwheEmxSUXKuEgPdmlADghftDd2pU1srn4a0QmAecoB4JjvrJ47-LtE6BE9ZFLeIIaGj4wzu1MnZ2arXjM-8JqO36dIJzXrosBz7FQgw7WB_ZyrbbU3CkE8NHcnQDsOtMogQtToxtM7FE_wIBLxAlwll4wVOF90Xp-0sFndrnllBQfzPmLgdznIUPfbjBA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114578331579037841177\">Poblano Kl</a>"] },
            { photoReference: "AWCwydiJuf_aakziHMgTN61tpz8uygpuWWJV8hPlKsz0p2SsZ-M8DprBhCrYlfKmw37IvNqTv0eRPwkdG7cl7uN2xv9VwZrYGZeMf49FzT9FHE_he9YyS88fxyHKNOS6ZoaXmy5Y_7gJshX4IIfIuIpZmEPfQhM6cDKjGe405FU94laSTsl1uMQ62O54t-psgJKQYh-Q7fbmlomhKMelXnOCEC94oQ3GrbsG1oIa4efiOBlYlhqMUnG3msIzAT8U0DVw4XgNIQ3sYFv9WdqklvcwG8hOZHcktnmZB6ww5m2sWtsUBl10pVm5t8UHSq21a16Li35HBFQ-puLnbKBypXBfmeZ4obpxoyaJzpD8t6JTUbYCqOAmjj-ZSqFXMQVrG0Tqt1ibudL9hRgKKFGt1y2me6yFPiBXHq13AS7x2_uGpP4Y0708dMzL6mQTWEl5-Q", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106841551558264484115\">William Wong</a>"] },
            { photoReference: "AWCwydifzL4f1ZmkF7pcNwpsaI1t6hMSfano3KBv81EBNJXC_URh-o-PybDsACWHy2pEhamZEQ63v2ItRktX7yHUkhs1Avnbv6D643RFEohcMvqBj7SBMTB4jkx8Wgw7Fi-h4NZZmTfEP2Qjv0HEc_uvGqUIQdSVHuXBtoaaTcjmOOWrXudoHHXhJcyFc8h5IkPEqJU48lY5JPWOzcBGyl9MNyhbgamIqtb43fuNfxBcdFi_hfNkTfnAiF9fRhc4g_7NKNlLUE290YftjddZa8Yy--Yu_TwHtiYIoIzc_jDZIRn5eRpg3_jlNnAlQ8SZ8v_qcKhbxUn2kmbp9mK61QV3FpaGVthGTvVsd3hFD8QyPo1YZNgK3Vaai9wqOuDQw9tJfge7CSKzqugAkF6snqBEiLPZlivrUUtAdYKgQgaYPLiSvJ0G4XGTFzHD6NUOLma2", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111708626872178864531\">Tylights10</a>"] }
        ],
        summary: "4,000개 이상의 리뷰가 증명하는 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["훌륭한 멕시코 음식", "높은 고객 만족도"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "멕시코 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 5:00~11:00; 화요일: 오후 12:00~3:00, 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://poblano.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5999830180145870005", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%EB%B8%94%EB%9D%BC%EB%85%B8+KL+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "홋카이도 씨푸드 KL 메인 지점": {
        photos: [],
        placeId: "ChIJY0vfARhIzDERkE5C13Vpoos",
        placePhotos: [
            { photoReference: "AWCwydiPmOc_BXYyNTBk9ZzWOl8rklKaTKthYNH4ejn19aCHKaYJ5T2QC0LsK7tcj5IiTc21Nk2Zxp90OkfXeroxfAQWxNrw5WdYAJCFSfkupZWLDbgpp3ArOsRHD5OT_WBhMwdwW4PZL35Jz-bbylyDAFbqOgO5RSNW5_KHLaERoC7-kJCAy1whfLDgf-oa_jEIpHDxnEEhU5p4B9IImuc7aIlGVdV8kJHT1Am8sl2xQDbLAStJQDnQv7OeFYVXFcmR_Cs9PnKnL2WehWjgoitS3M0_1ZgL4Od5GOguEX4tVp-x3r5D7UcML7B3gpxZanhdLPiQ3DPzz1gJNXYXFoZGksDnlDabjDmbUyE_NhaaV_TXI-naP4UupyDzqa3anK1aJ3HeYlMEB4uoGac_hOsWwpOU67CFJc3rFmaTfOk_zQ-v_MknRKPiyvem0zzMrEiq", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102091794672859288355\">JustLovetoEat</a>"] },
            { photoReference: "AWCwydg-I3kAk7SOVvWXKDzIEZKfrjz5JBm-zi6Q8HPcCx40Me_pSDsxGBegeNKKikoRBPhKPhn_ewvql5trfVB6fjM_RCjkKCSHk6OvsDML0EAAEAiDy63UhLGiMOUd8SjEWbIwDqcdO2wder175wUa03E7UUtn-qda9qFKxJr-KhwwRDNq6i6zfguSz6MpICR9M8IemD2mkvCvQLJ5USHlOuQM-urbqTGOtLsHrTOwf5zY9WteIDfUix6YNrATOiJKe0y2hmCyEEt4xy_EL0x9xuhB2R8S1LwFHxxNvkVnOadTr67g-dJVOUsCj_7xPp8ndmF6baY4fdRGN865VmWnqTf1fSnV9MDJcyEiNf39ilYw4kb-CAYxPSeZtIlc3wp04qxC_ud83kd1SFGLAVudlT4EmQsgV91poGOCOPSGeDydDmOZ", width: 4032, height: 1908, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104668672066898518847\">Taekyu Kang</a>"] },
            { photoReference: "AWCwydgFDRzehCV6nhfDCsfOiEMaV2CDQbS31OsJ7UrUMQGHQdOzofqdz9oXhjtQi5LqWGOe5K5e1HmfD9jWJ1j305kBdUFYavIlsHAUzWGEyG8d_VDyiAisFVTUJSTCPvLzw3uZN3w5NPU9mQU33FynnaAX-ylaGv6j0IIQ99ab73tKjGyGouDzYtuPNg1Fb8WTJXnvRT2lH3FUT0axxjvlTsvdZ_ErJuN_Gwj6dVDO2zk5OvfIi3hdhEq9PcCB6V-iglg4Ha9QCYtWyzGzvgr-8KSCkkI7lPLjQUtkBXVgJKwYSnsGRfzyFsAvuq2T1dCTezSJXXlemxxEllkE73bGW_wK2xbDeDBWudjiBIfDeOgKvLwhUr7LsDduy1She88X468V-ndByk09yqWRr8tOacMXAU_oSrbL4EZwd17tvKAfjarXy5KGHbXEcVypc2hu", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114787894671741171944\">andy lau</a>"] },
            { photoReference: "AWCwydgOJgGEpSlbeL58Lk6zYhEkvNu555yogEZcUVkYYexHRxBRvCV9-0fUQ3Qzh4tZsyTWi5l2U1at5T9ZcrQszypqC0t3VtCxCuveM5h5x9uWnyYHT0eDM5pmNnr7VFFpeIxTx0wf7ORsKtd4Fuw-6hD4T5r4AvOjcU_iOPaGZLKRDbMa1BpmXRzFust4KYqbddEiEy99yJKh0YO0ShcER87YO5QXBr5em2bJ8_pwzDA-uvzj7TaWW4Q3RUIeZ_fM9N2luOOdCTuycsoIJzBdk6fm6vQ6W842XPiUcqugP_LshT_Mob65rmrKQjJlwWZj_-_kY5_p3dNrowxwEgFf9gMFSlfznzZXqofAEq_zBRo8_YRtOwp2cgpxQoAevzvZSIMWxGlszOZ8HCtJPIips5bdFas1uqTv5Z8QJxKTOuevzZja6FwL4-RcJirLAg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102091794672859288355\">JustLovetoEat</a>"] },
            { photoReference: "AWCwydieiNoPoVFBsF0NjAEoXjoOulwCYwcJImD50WzVtEiEB4SAfOBZ1UQxdoYyjHnhOG4pZEh81x9ZWEsyxd1AOodD5Q3SSPto6MuDF6ADU-7C-JIQarPJ91IDutekMqmmC4NCAiHDV3shpCLW1ewfAu-MCRyRMMPukCOUihXHYl1ayHxhsTXwOxNkFiTbsjbgKdYk3iWlyO0tRd2aGPGQF1mCYiu9seAIBzHOTXxLVpVJKK5HsSjeEqOZByUxHv8x5xJWRN-aLRSMF6pkFwsTDkKkeanc8vhFMCneMj8KgpStR5-thsoyHMbfbIzZOXP81Zla_H-bdOXbdVNNjGYR1w624rsJ_bMP53AxcSr9N-0C7PdsFQBXHq4plvnEwtzeXFd1cYmMdXbkyS3ifdiM5oJnxuwuAbpCaj3HPPyqE0QrHRDtPOpddzIR07gAR7Ml", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100359065955392571112\">Cường Tạ</a>"] }
        ],
        summary: "신선한 해산물을 마카오 및 홍콩 스타일로 즐길 수 있는 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["마카오 및 홍콩 스타일의 해산물 요리", "신선한 생선 찜과 해삼 브로콜리 요리"],
        tips: ["자유석으로 운영되어 테이블 서비스가 제공되지 않을 수 있습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:30 ~ 오전 1:00; 화요일: 오후 5:30 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://linktr.ee/hokkaidoseafood", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10061720472342646416", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%8B%EC%B9%B4%EC%9D%B4%EB%8F%84+%EC%94%A8%ED%91%B8%EB%93%9C+KL+%EB%A9%94%EC%9D%B8+%EC%A7%80%EC%A0%90+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "옴박 키친 방사": {
        photos: [],
        placeId: "ChIJ9RJ3yRRJzDERVgPr_VWX3As",
        placePhotos: [
            { photoReference: "AWCwydjZamIlykmMbqizfv3A0ROmRNqWU3Win-hPDxUdVLSpb23HUTN2TMWPqu3N8G1sxb4GZsuYmeWmp4PG2kTQ2eUM0_Yp8AdQ-YPaRn6CAoxHZznMdnHOnHLk1LzvSJp-iaiIEFoppVN86HuuSZVO8teQTy-ORXCO0vQyS7BFuQxKIq9-fCQG8KITG8vsB5InwjtAd7skPS0itIFZ-h18XCWlDNTWpWWXHKQDmbippU4lMIO1MjPaEQDAM45a96r5fa8L-5y9F6VJRiTMQ5HYQkntsfvqQNKKXQl2ke0rtN7JfsMHMWBkz6yZdwpyKT3agStcX6r-C6rk5T-iHIpSo3Dpl2E40HAANr9pPoatwjlIKYfAf3pcQ3a7J4DfHTz8UspdKSXOuYcbtxbl60rmHH3j8QyW4_-jQJfKnkr-mQ4olafm", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113264495970017752364\">Ombak Kitchen Bangsar</a>"] },
            { photoReference: "AWCwydiXJaJBvhxtCHJwursh58cd-WLcItmIpsxAaQUOXwj0BpaoE6XoPQ55Ca3szwAS7e3SSoz5poTAXP9m7l0d66IRLJW6q711UXJI4W0jDMWujnnhbkeLHDmxbgR99gwaCBma3AHLb44x-9CIll2LNw-KKpDENR9y8KYSUzTzQF6tcgB7q5lYf0QoLZgkf_6YmdPS6dB2plQXmTgeYQ-vEZbEx7vRRo0sYBrevIrs_cDIuP_4SVpfL5jWnrzoNgMIVQAxso9cbReFZbT01-oB3p96E8a82mBOHm_ixdJ6GqILyDqWLaR9gk2vzbeLqq1x_4VHE7bI4gIzz1X92Y81R7rpfC2e-uxr5YUNRcIv6ru0kG43XFvl1u6aoGCsHgivvDnep9YWnBHKLv7J-pRtJgpmTMsBdAy4RO8DOnfQFHsapgA0d3VFzU-jigowJTXZ", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107358937671656897424\">Que Amin</a>"] },
            { photoReference: "AWCwydhYHQCDDa3qWr33Kr2Gmf7q7hWF09Gofa8cGuDB5_ZHZDRlwtDAtcRospYeKQ62jN4V4_qfyjMEwoslozWTk9n-Ke1MB32bjgsDbD15p5oCOi5PuacsfOiughB1AVsolw9-2-GtfNQWdS0GFSKhkf6Mgp-VF0zDCTifM1qROI1TPP8TbF1EhdnQHafQOl2JmhQCbfS_qopNSHAXQSmcYrT7Z1k10Yoc_StVMGeRccxsWXNWt_S-qumQCqFYBDA7zsjICoTJ8aD4xkF5cJnS-h9R0ZzTr6vWcIdIt9J2EVfev9C7yrKl2GnaXbl8S4m6QqR4Mlx4WulPVutk2Py9DXQ01Ay2lyX0Du4bpO5wNWgTrJQITD-xn3te8GdiTRAGnLJWmXy-VtUCZU1M02ZaxKFYA6kEbzE7Cce0eMy_tUeNQ6TI", width: 3201, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113264495970017752364\">Ombak Kitchen Bangsar</a>"] },
            { photoReference: "AWCwydgzOS5U4vSSIuyM8SsahaZSviHmoJFEGO4FTKRn_KQsCcq36JFqyxQKYOMWGBYhMq_vbEq5T5C5KRzvBsvjI0otb_ykWLnjQngr9dmAbVUFZPRKip5Andt0jK1-qkXOefAoPI2MDdL1rCET_-urVzl04ch5ZBYX4pBYtSgCjd42QnZrgiU6A-lQwy9k6YDdh4SeBsaYKFaXoMWtOIan9Iu9hVaMgaleykAanktzI5pCQv9QtlFEV2kuVfqkMPD78z7TaEaoXr55a_Nxq9i1yTn3zCNYp0P0ESw0AbiE95-eH_wu_se6Vs0NmfXqs4iKqhgHnzooZbEzm1NJ9thERq9U6jy6Sf-9r3W6oPJX2q8sQf_tp9QaduSAb-ldZIFK4wkFv4Gtux1UegqxftDiZY4a0FmaaW_I9L4N9LsftzhIlxZs48T7LFsZRLKeUjFn", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116091455988575704645\">Faizal Family</a>"] },
            { photoReference: "AWCwydiAEE9UBHiO6T8GaJrr3D1XAia2AmFOJRzuJ2q4v9V8OhrPhUOAcUh_EcGk2wAeQLfgYU5rlPtZWEfKu-YH3R64sbAMHLRqSly-cnvn-75UhE2N_B9NZiM1retoVB4Hf2eTpa_cptddarN8e4FsbJhmPPp0rNzAMuSTxnCoIUVarr4iSHkNLvTmduLw9xiwQ4jRXG9buNihULq4CPmIervk-BYy9r1A0jsm7RD2wDfWjoarW7s4_1KeTaaDcW33qZBksf_K58NOJa4JOmWLvusma9OmoDq42kvpH1U-tCZPO3-DXMdmuuCo4JWGnHN7g52XyoG6uS8gaV5KBqmmWWS8qMPEdYOy4sV2CH7R5VoVzdXMEPKcOQXeP1x5zPuX8nYzUiwf4MYaLuXTR0v1J6bfTI-v6TaZdLSW88XKFa_ddoLuyP53k0NGWCfsG1Js", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106374802653146527822\">JY KIM</a>"] }
        ],
        summary: "훌륭한 맛과 친절한 서비스가 인상적인 해산물 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["뛰어난 음식 맛", "친절한 서비스"],
        tips: ["사장님의 유쾌한 에너지를 느낄 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.ombakkitchen.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=854724424881603414", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%B4%EB%B0%95+%ED%82%A4%EC%B9%9C+%EB%B0%A9%EC%82%AC+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "아틀란티스 씨푸드 레스토랑 & 바": {
        photos: [],
        placeId: "ChIJXZNBbY03zDERD5FOOb-_y2Q",
        placePhotos: [
            { photoReference: "AWCwydgAHphObj0VK7bEv5zfq_OVawld-BWH9wKzmAwHrGNdJoMRGulWNKIzhD4u06ZuvOsvv0c_1rNsGfnuOuBmS0s_1RFxCKLoPlA7pss5dNTgCbmdkLA5Y7nMBZvHZUhfNV9ShPVHXE33HOB9aSgMaNR07fKQZ6bHFxTo92E3vhVesdhQO8aQZFQAUhKGtdDEs2XhLOj8v_Lji25ZhyPlLQsMEOjDI4-3GwYeKICShevR7urKB0UuY7fR465GYGA0flXc5ECQKAWQaLGCarrXdKnS4pdV8IL_r7p7DjsT3-gzLa9PKtI2VXTAvdp9mwSofUBS3EtysGeNxzfwUr1LzCaI3eeM-2wiGr04cfeki84Nhz4E6cqxgktReqioIEwRcIneXkBJBPLdytXNASvDS8U0vkGVsXhOe8Ca0f0wS7R6wGVH", width: 4800, height: 1416, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115363182548359389040\">Atlantis Seafood Restaurant &amp; Bar</a>"] },
            { photoReference: "AWCwydj-hoWF-upIYcWhalD69PCm-vuClxIOwmkLStMlV4Erw-rO2AqMyURhoYeoKCzdH4onghFY8D6ct6NsKWsPMpafC-npnWOmoVOcZfxSHV_1sCIs8pPvELGB3WTtCd925ie9kxXpjH7UulfgdOQOCVA0_pc5PZZ4xl2hJU6KN4yLPMBfOTF2ZxAXGmKc-gp_yhn-4RALjR4rv3HdytHiqEDAV-gQIKDmPFhPit95qgkAKeF8V5OK0_Kt1bT_p19tSUMzgri_M0VlwOA9JPvReeqSsuqtD0y1xvAKlei1_JvLeXrZFhIgEyuJVYX7bKvQDjIxXw-Vd7ddy0Hsofo8Vs0_axuiYoYQTD32gDpNAWGyqIo3PIAm9CcPGs4VT0ObusrmAQr8jxD-8V5gulluUO3LG1tLWu5Zb0hPwZDIQEYmnA3P8niAJ08yaPqasg", width: 1920, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115363182548359389040\">Atlantis Seafood Restaurant &amp; Bar</a>"] },
            { photoReference: "AWCwydgLe2kTuN46MzyQFMLHSxhleL20_oJYGrutiWBjccu3VeJBQSNidjs8tDgPYTnPgBdpcZwyZAzEpA8_Bxy5jDWfqNytdZyXMFWLGQ6bAPyc_1nWvYCyT6vuoWb7qXCMDhMxp2X6WTwzDsfQ2h5J-vCApcla57Bv0jOyHrFadpoQ0g9r22PAVVkkEHI2IlYOcau65LhTB83PZJYb_FOABo0TEgTshjRpkY7qLgEtOYIV6vsFk9rUd_Re_A-xdUAv6paDy7oTMOIg7i_MZbQw6wzIAfiYFVji-T_Ev_e3jCTqeRJaIZdVNDVMBlKIgB4bj6TAi-Pkyb6Ep_ToysFuiJjGaq5No7UgJPstXuI2sxjaS7F0SuUKWbaF3oE1zu4Oc1fhiTIeNqiWFyyeJ1WU7AvQx5q9w7gkUQXWqPVbsV7bkK-peY9HzGWoeP3aVfvN", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104170950544375513722\">AungKyawMoe Moe</a>"] },
            { photoReference: "AWCwyditme6n4rEwsxRQc8VlebosqRiOV4CyxT3eBzOKYuQu_LqXqlh1EvCIDgU5sQw2K60WrPKy_5TJ6WkyHhd-SsPPEe_Fut8bryvy6-AheGwdlz0zh4yzdtqK0P7HQEaT_OeI4-GuOHlX3lVBz8gMzhwOKqxHvSVJ8zZBVYavhPFbfh901UTulkY9KCsmfzwm5RJzF7Y7YzHeqoHjPb4MeSEuYW5as4q6MRGjXhtFlmoGDpqG-XXTN4yl2lNW2tNTVtcLBzYvHis-v9GM8lyS-TYmZUG-OOS0OSMQPwVEKI5MtYH1fUxNhhmr3YgX7ItjDPTkJRx9gXL75aJhpcnKO-cQtiqS5Er7Mryqx_rVoyxxFOJ3u4jMIxK6kMJwWmNeik4IFAe3HLhHq54Qy0fuvLqugh_gVLQS9J4j0Fy_2n5c2hH93oECu3XbJnG9NQ", width: 4032, height: 2806, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113043366471260271327\">Millie Tee</a>"] },
            { photoReference: "AWCwydj7lM5Fa62u6Pbynpp4X0pQhMbLkNbUI_sLSCivKWggknxZArRMsSVDwrR1RPEgake-uMRxx14DIqIVY-F8RBj_p0vs4_YmB0roAinXX41cOAEqTLB8dTdhnDK9A2_Tj7yayceSJ49dM7mBJoflk9dsakW3X2Ye12ZCKd17nnRyVbBkq4wdz48X9AwVCPefSJGryVVyOWDxFgAY82P274VuSDdbWrtwYPyYt2m9IINsiwOeDEXkrYFijR37qL1Afq7qIwqcrrKVnzRtrFRQsoDkCU0ruBV-Ul2d0b9Xz8raigbfZVGE2R1Ee2rKm5y1oiLkCx19f22MPBu-vNLUMSHVVY4Mvw_sz2wki5U7gwAow2YgGTFR6meaGbl4kruoHZhdVmRK4hIN1pwNx3n8mX1pn46XNOiH7VufiCBDwk3mKPZ_K3XZzdhXjBflzT9p", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102564961486351427275\">David Tai</a>"] }
        ],
        summary: "4.9점의 높은 평점을 자랑하는 인기 해산물 전문점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["높은 평점", "검색 랭킹 상위권"],
        tips: ["방문 전 영업시간 확인 권장"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오전 3:00; 화요일: 오전 11:30 ~ 오전 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/atlantis_seafoodrestaurant_bar/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7263109652086165775", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%ED%8B%80%EB%9E%80%ED%8B%B0%EC%8A%A4+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%26+%EB%B0%94+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "마리나 씨푸드": {
        photos: [],
        placeId: "ChIJETEpoT03zDER9pThuSDE2kY",
        placePhotos: [
            { photoReference: "AWCwydiVx-O42EiNEIucs_TFXWUoce8nTdQsMK0OBS92T0grQOhtIwRH6teIEsJykqVCm3PD7TnY07qOhQUstYlg9mEsNlOtk91Ja-VQ3bp7jL3fcMZpVG3ydFUAWuc7uZlYAb7byLUCBwk_6Jt6564BoyP7eOagJBFv0mQ_3jbvksRrSQhwqKIDvPxwGsNaGnAq-oCqngIGZHQvf5TPqcihL8UTt_dqPp9DSa3Mu3QcLLZSq-QL5z_plno5elzezf-LSQ94RdI899LzeUXp6xyrYfjMGT9mqUGzB1m7AWmm4g0yskfGjOUwTN2bvOEMIGkYsRKAaTNQoW8xVjm_HKRYq6YYthGBHL-1pbvl6oytG49W3SYIlgKeiAB6rh8oxnQFzPq1Y-7RZOjTYxoFkIPAK1sO9T46IzS4ZbXRSaME3hg-4w", width: 4128, height: 3096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114330679748926540965\">蒸时代 Marina Seafood Restaurant (Star Boulevard)</a>"] },
            { photoReference: "AWCwydh58VtG6KU6DMv9u3oRuOGiLJY1xSS7RKbS21bioYNyblk0fEpA4yy34PzK7nYPobyEw_7pVTmN_Nih9BU7Cg1L_h3PzJbnL5WWKWTTP04fBC5l6qWmKLjXbCh2k1UuYXss9zsVVQGyT72r7IqbPRtGrvYyWf1YybEy5Tl2g2Jwn46CeQJBirWJOXKHVI2dK1sVL-9U7Bc3oR0sG9iDjCfeVrI_ut-fbbGfDmEeW-7UrI4pVBoaUaxC7v6gjv7_wRPcH_Rs6DRWgwjj_4zZWaxNd82s-S_jZAq_ZZ_9dym9kWNf6MxqpJSfwIKNAbJ4TeFPsu7cwGZa5tHQHJeTl3X8GffQmmH0P5oh6jwiZKcMvXa-r46T1GwWhiAuCZFeN-4eGrIORLaG0ocn5POO8g-uT9Ef8k9KtbCFadHF5QicAA", width: 4128, height: 3096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114330679748926540965\">蒸时代 Marina Seafood Restaurant (Star Boulevard)</a>"] },
            { photoReference: "AWCwydhQeYTWjA1v5rTV8qi5HJwkKDLKFCLhF6HHPfNxQyZupyZ0NpFGhScEW4ORLGz3fkRWeBh8tmOswCIrJzi74nLfKa3zv3SRVmFCt705vENOYdGCuIIkSQ8_XBnjZ8yBFfGKoXETELBxO5IDmRd0V1h5lIbMwkCo4QmN_4_BiTswHcxX4-3h_1K9dars8-Vce5IG5bjy2NY8IBXAqyS_oMSii_opoZvcOmZwy5-mG7zAQ_emygaF4VnLVxKfHK4GLyfvAodDh5wrtYjcBs5jR9U3BxbCsUiGSYQhqpfTZZSGUaiz-fae1_GD5kOeAp9aOpQssr486NySaLzBoh1NUlYSDFuERLa1ktA1ZUrT-Qg74LL-7wIlGiuOBao9srkYLOQIyH8qp67-YF7MbHDV-DOL8Tx84Wt4fIg9C_WsI3PhObufSIEWOZyQrHyUPryJ", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117065307046633628601\">Lim Darren</a>"] },
            { photoReference: "AWCwydhVRHGD74E2UIDgeDQs3jlJ5W1m0i8eqSVaQnx0BP21vepiKU6xdphOryG_JwyNcHbKeGdrSPBuBpJChWWcGuKgrXzJKVwTYxzwzcNOQ0yQAJGXGFc-5tmGta8W2CLqaIh95z3CDDrwYVTgjQRCmgX581MOD-Fj4RrpAlrftL6-a0zcxSmV-OuKLv51m9CloEIT_LXQrRv7doOvEWK4iOFKaNgiR7FJ0pbTDbA02GYg2FZQvI41kyDyJzm7E1OYkTSpLpSTOnKigryY6E77FHcpEOvZiTmuG5VM5RZElRgHsYsVT5jtyo6W8ReO2KJRuEUwJb-A3qEwweiLTu4cr-Ga4_vZp4sLWHkp69-BbpmSX8SaP0f6Gk1WZRCUK-l6hZzlt_iOiFUN0uIBLJb9AWABqX0nN7nLzW-CvYWUw8Rbmjc", width: 960, height: 421, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114330679748926540965\">蒸时代 Marina Seafood Restaurant (Star Boulevard)</a>"] },
            { photoReference: "AWCwydiUKePhUoNdaSiaB7S0Iw2hpbfsjX1voQOq0rig1ZpJIBsTa1B-MJMTK4Ej4BUG03Hu4IbF0MOR6RZU_dz-V24Ar4dLposFKtW2ksu0oI8QmOPSQpMqzBXsDa1YX3j3tuPbBR9GXX1Xwbn43Y1063R5TzgIsMCuuFosh6gW6m0JKnP84QPU_suKMD8HnMpD_IJ38JXd04Da0PXIECVVU-Y4WsyC5JcHeVrCDdqcK3gvpBL77Acb34fxjDr-FtzV2Sg_9xoB1K5DCboo5gG4Y7MqYB67fq7iar0Uhd2JR-H9hkBaVgCIN9r4TnAKWTPvonxkJp0HO9IKkW9xJEG352Nn9rwjZjfpCXDqLZ_3sTAdjTrHDGS6DLS0J_cFYz88tcidpOVC9_Dflf6hgiQw2YpNgCG3xh3-w9EnbjJgo8pl84fGm9tA8N5zYQlgJcGD", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103578104911855509894\">Cassie Leng</a>"] }
        ],
        summary: "신선한 해산물과 친절한 서비스가 돋보이는 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["눈앞에서 바로 쪄주는 신선함", "달콤짭짤한 맛이 일품인 해산물"],
        tips: ["신선한 해산물을 즉석에서 즐겨보세요", "친절한 서비스를 경험할 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "신선한 해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오전 3:00; 화요일: 오전 11:00 ~ 오전 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/marinaseafoodklcc/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5105608772414444790", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A6%AC%EB%82%98+%EC%94%A8%ED%91%B8%EB%93%9C+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스팀 에라 씨푸드": {
        photos: [],
        placeId: "ChIJY3Ui6C42zDERioQ2mJSh8iQ",
        placePhotos: [
            { photoReference: "AWCwydiPOgAmayzuHi2vJr8fWSAg07fkcCGm3t4o0yCWar9xT4gp0V5F1msnTVEZYUB1xLq5YCxV2Uf4QY6kmKutetbxaeSbpNiVvuvcz3xs5-gStK9KWStV_hWzu4cPmfr2kX9ykYPrKvaHBtLY8eWnd3HLM7P3PUI86WIm5t2usGCgX1-1SmM-mPt3ftz0PA4yRtLmI4_0jMEGE-Nm1y2MVewyPyX16HubyEHwW82yi1BZ7dnUHc3hUMtb84okSAF7CSiscOZVo_kt6T7EJ61fo1qI52OPZ3xzbc6ySlZmHt3zJoUK3xjE_NWRB1tFJSvh2efPGyICESKeNhNLphZlq7i_ayeMGjpjth3xLaCw0-dPOnmqJwo_rw4P8I5kzhy4t5Zhp5RPhc5c89_ieA9zQiwLyAfYEyB5TnGaGPpjryX6bQ", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115255089573286485511\">mrkyhh6</a>"] },
            { photoReference: "AWCwydhpvSnxeOipxfxtPPasGh_vNgjIRJOg8eamvpj0iJGpPgD5ItKnxRuUlQmOnu0T_kX38k-OPVsaZewKbGFYMZaBs2BytdeZUXqOScQMf6GaxbuDfpG9zWDXfVChnbGXLnLLZRw2w3V4qQ61hQ8D_C0knaAVPFz_VwNZBD4QOD6C33nyFM4WDHbMaZuu_c4JKW_WdYArbNiflmWr11MSbj6lf6n0VvxuE3YQUJwln_k_WhclIDP5UAdN1rrYeXwRAVujjyNZed3ijbxjhXM8JIeYbj2G-1GndYI_O3NDPH-RHLGyl_ZGsA1D8N3GcY2292swpsJ2yHj-2R3tI0K-yh6h52t5n5xxiZDWQciEnLDfz9fl3G8wToa3v42Xw7VcoQULFmH9ktAIE5B5D0xxeI4cgo3fN1igQA0boZLy_EBk5y12", width: 960, height: 421, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117827616110480279854\">Steam Era Seafood Restaurant 蒸时代海鲜蒸汽火锅-Jalan Imbi</a>"] },
            { photoReference: "AWCwydivamywiFETKpxnmnP-5U6lRA0yKIH1GASFLcwJIYRUdLhbkmxJ36ECJ0TNTg2EMB3q-nH0sI3Rrn-R0j2Y0Af9FJqnVFQ_8Z4EvziryVuCfi3tsIE-UCAZ9lZuZYGu-hKsa3IFkxwIRpbvNDaeYcFpkT9e1NxVfG0hYXoQBufOOqEHt4voEXpNY8ADnKC7aRGK7hNwntGg01xnGY1G1L3XIBdyFXcSvk6S73DYnMVredwFbnbQRrI_cM5cR3kHtPn5mlF8Sqkd3O5oAJSMxhyrUevm2jPAlxZt-9LRtryPbMmwZOzNJJKU32WAuoVnnFrYXDRb22T0xgEyLClbiHUoA9U6_RJlLATV_h5VfzMwlLr8rxGITPHAmj9pwtXzfvAOuWxzc7laP4IYDT8XmWSrPVyt8j9NFDYeRNN3qsw4U9cRKP_JlZCd2lSbdgkI", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112756797828856201428\">EDWARD CKS</a>"] },
            { photoReference: "AWCwydgPVOLv-UFDdEJK-N2iJrAv_uNQDW8Psf621wzlDfGcaArTRniZS8MqB9CC2wrU6ePRvbTz_ADf0mKxAkAhTLlXKmJGvx7-INxBnB9MRxKCiPN5jN19UMt88XG0KCaviNxhclqY6wvGmUNJbETxHHEqzRB0oCQHjzvpEQagj4P1nQLLnVn9AE-w_GqFFVrwZ0L1E7GJwL38M_O4-5z9U39izzIL-0hUVdvDSFb0pHWdml0lh5r3vxoKdbqHXSTSwVUP4NsDwzNWr0oHOzYAZKv2CrhIq7X1erZ71nnpAOM5Gr4YLZGEnH5Jcm3YCfxCKPnjfrcZmGKV5RJuZ1I09WtL3Gip-ImiX23qNGtzKu4voGyjtdviimydCZCKm7xzJk1lWIuuKNYrpwp79mdAzHEyhJuz_WgybnA3jbkmfTwrv-hVMALK4ck1aUfsy4WF", width: 4182, height: 4182, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105304565266826114830\">Laderm</a>"] },
            { photoReference: "AWCwydg3Ky7ceui9WCsk7C-h_PWvFloqVlqw64iZ-p0XwVERZuRoU3itNd8lVniWcpulOCD6tELcQ5kkA-v4HL8wVmbRbQKnJr81niXYEpKOgHub0DlZ94-Ml_iZwtWGn7hk3ZoBPpVb_r62PQCL_1WUTApFEwC0DSPMwVfugHQ591xMgYGtRtB9zHN7zxMX-3XVQfQRjv-6_vo4b9136445Vy86O3ic6wpmhXnfh10kqH-Htz6JaC0Eyz2gU4Tw2jhAKiJGVdaTFQfPjroOvKA5OqMzRmweXQhhvMx-nBIGo22Dxct1l0-L6rmYumxjnFiXyqKBv4OuddVKKKfE_ThT0ebt7t5soebuePE47SBZbyTm8-8LN6u0Itll74ZX0lJW8Zvx35WC2FO-UBYEKSl5Zkme09TKqBx2VCGioJoMryhTdNhc2JuXBFw0K9q1", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103211686175532973078\">Hui Ya Ch</a>"] }
        ],
        summary: "신선한 해산물과 맛있는 죽을 즐길 수 있는 24시간 영업 식당입니다.",
        updatedAt: "2026-08-16",
        highlights: ["신선한 해산물", "친절한 서비스", "24시간 영업"],
        tips: ["오트밀 죽을 꼭 드셔보세요", "해산물 찜을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/steamerahq/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2662367989310325898", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%8C%80+%EC%97%90%EB%9D%BC+%EC%94%A8%ED%91%B8%EB%93%9C+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "리프 앤 코 카페": {
        photos: [],
        placeId: "ChIJB8FE89BJzDER8ZAIRNj0LYc",
        placePhotos: [
            { photoReference: "AWCwydhCRn57aaYg_MQaeA0A1x3jAuXwz-igqo_OgHKEkXNsBLlnVLPaej6vztTDtQ0eTLSJDUMAmwTQi0lO_ov0rTTl97gz2lqZ6q3B7bjOABzFizBUOQ3GwnsRguoZh-e94FMEBcyNNLG4OIX0BT0Ww2u16FBfCosYSok016T_2T7FRqa0HAdHOu1EAQxbjPGU7j_RUpZ8muZ6E4Wd94mfrpIvKyDVHE5ssPlRTEjTFF4lOp6LBpX3tqN4pGf0eq-XN_AIPrk7NjP9cCU3o9TVmkX-zih5WExhhrKN3gYbH5myoppkGJ3SuBIEzybp_EuoMm2UGf7yjEUClLPKxBC_hewz8eDgxYs9Zq0JYS_STybDDO_XWlVW75ekleKw8mS1WRm81aggeq3myfFN7DmKasC4FqajrhZE_0JT33ye-4pRnA", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115821823856278752753\">Caroline Chan</a>"] },
            { photoReference: "AWCwydi9gwasdZip8-tXWVA2cyWhs7CJA1hLGaxM64nEplI5i35N8BqMl_89yvvHMK7mmpQ6TQYmmvqnKAkubgF5my3ZVIv53Qhm35eEYbH2xO_LzjaBCBBJBFrY2w8gyQ4_zd4Gb4KkQMkzCZq75OOuY63jqE3YstwT6d_vrwjUyZgG31R8y0dgQYPiUQU3EBYzxmkHbyBxvKl8xrYwfKxAPQ26TPyN9J9vAG0W2iT0wcXZFeGtQMYTsJENStHtoyO2vavrfJKOo_OhffnOd4brcyiHutbVG5Mi6Kooy1d-tCiyzmYS5cS1i84617xgrwPePhYpJxtIp3xNW94zel61QnKbQQQIKjB_mccy0O5Xq1uZoURh9XLxhNFtS2SRNCMhQxWN-eL7MtPeLVYgVEY-NU0gzMYJuuEhcjnwzykUjqpidaN9f96ZHZvYlukxwgt4", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109439444033341052257\">Wei Ling</a>"] },
            { photoReference: "AWCwydhhFdtrNpqAh4FNqEIwMVBmNCWB3KJZbEk9N6cIaSMMHVhk3CJNIBXtUOVQxe8TfMAhbZFhHtZAt8c2fwCtqg9jd_yuockPAqJTkP9X3kCoENnUfJe04qE6ZG1A9X1bu88YGQl1yuIyU6kZN03s4gUBCu3zrD-J5ypl8r5_Xd8vqTIE5XgbyBQda1sKVt-v_-XsMql420lAoXjBFuBsJcyooV0-TYM3Jmxu-i3xReImBgBGJ058lsCwTkvjzCoyTnBvT9OYCpcaDECexjsJXMKu50t6je0O995F0FeT9zUvMzGYUjSsLmNXMFTfxxmCjuV6cc-FfNuUWdJR8Y_gqSo8oFWaru5h6SM2Za8p48rZm32eHFx34MTV900TAkcQFelTDJlxwCCb6cDj_n9DJ5rAR5Au5pnQrpfxBKIhptk", width: 3276, height: 3276, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108513081777379903641\">Mandy Chan</a>"] },
            { photoReference: "AWCwydjbWhFmSBOR0z1ZPKCcln462gERRMzWD0l3OENJr-4G0I5cGamDFtaMmwrJBNlqRqVpSytP_W0Vam60sdV-DTpGPegTO54ybmE5Yp3L3myrpW1i6HczSk8N_LTZ9tGZcqCnsReT-wwfJ1hJFZrmQbciT9iolkwVJcD-UCgPR87zaHdT92DXx7VjlN3FOGeUMB1Aqj_TzHxY23qsQFzfcesT4XU_3xkGDSfbqpGeKsqT54z8hHgEE_sMIvXpkDbhvG4qafTwnDv_MPbs3A6mLxDVlIAv3n11F45MRBU52hT0S_d-hlW1OrGATWy7xXrRaExBNQPZKoc84hc2qEfp4Lm1RM4ap-SVSf9HBBN8YWEiKgZdzLigqwdndSMUmhZDhGaO6msEC6CAHEPWsak1swx6-8pPVhnO5_Rw-FpGp7CVhgBoo6yw-BFutYabovMQ", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106066437990792239173\">Andrea Bottura</a>"] },
            { photoReference: "AWCwydj3DbNbIq2XpZXR_0aYgCYPR4VuHC0miiaRYqYIR_VRI3FV3QzaP4a5f7G6WshLLuwvCqBhPteolpFXrZf6so-o8qCBGlcG7mKY5XeUd5Njdz0oikcb-vQFNYtPRnQ-UBT3XNMezgDJxNrVsioeqtMMauYvLgp3eSngp9IgBYjO7t0jC9fr12HjEtj_oDghJBvUjxn-wyJfWu6ApCjj5ZHK3tmpuned-uRPUccfHXMiLgO4GyJKkGvdm5TRW4nbp7Y4rfSQ9zH5ldzpEnmoM5i2frg7PLNGktOkLFHSFAKCNqaOFQWqVYoPIfAH_Djiwf-uJ3LoIAMWiErZ-OTuRz-aAoDoNF-gm6AwvWAo_7Rnx8q7YKksEng9T4ijqnVfKyNceXaC_9x0yVV6shrdJbuFp8NFZ52LGUP40Rm1fJUFrQB8I1orcQUqIm1KNgC4", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110734226265440507347\">cokeverse wei</a>"] }
        ],
        summary: "다양한 메뉴와 편안한 분위기를 갖춘 인기 카페입니다.",
        updatedAt: "2026-08-16",
        highlights: ["친절한 직원 서비스", "다양한 메뉴 구성", "편안하고 예쁜 분위기"],
        tips: ["프라이드 치킨, 사테, 소고기 레당 추천"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "다양한 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/leafandcocafe/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9740710778763776241", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%ED%94%84+%EC%95%A4+%EC%BD%94+%EC%B9%B4%ED%8E%98+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "LOKL 커피 Co": {
        photos: [],
        placeId: "ChIJE7jFVtJJzDERgZoAEKorgIA",
        placePhotos: [
            { photoReference: "AWCwydiWfLo7so5UAbs-VokQCVyF5fJd_AeUI-Fstr8Eh0xcwzlJFUIqFgBaW4UcjmgVdGHBeKyNMmjgVgdOafDbhR8X5yLOPPFrn7W6CEJhQ-s6ofvztXK2ITiJnMTn6-8Q0-Ee_F01hihbbaypi4cxP8Bk5gh4TKR6Sg0A1P_ZoWnwGsX_jXT1MS_RGf2tQ-ptthkR9yG1QiqAS51oEoqrO9D_ITb888nkKBxaDr0_N64vtXFe0x6QJcRUfvS96ukah7RY2U6LGQBo7K7kZulpOy2T97IwpnQ_eHcYbKNdlOYfXj4pyo_NaCtYEx1DbZx0LMebzrlCtORQBY8F3v0RKZgUMdeWRIlrQ7LpZc-I9-HLkMeKOgnv_4yKqn17Jexe6tc5zrPv_TdsX-dYzXdmFjLeVartV4HotepXireK6H_-gxI", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109010739064388837694\">LOKL Coffee Co</a>"] },
            { photoReference: "AWCwydjgpnkWsA4gvs21fob0ZmiCKq3uafoZ5AEJhdp-YzlvmLQIfo8mUUFS8Rzv5ibSruIZT3PeJPC2OD8jxYKBm2u334ReiBo0pj5itijW2noDhEUEd86vLXJfnSSyNZ99SWA7JGo2BO7cJjjh2VsbO_WZIRBZ9nCPeGblejDvawBrq_OckMWCR1N2hmZcz8ua0HHVIL4EDCWx8MmrI0gW9beYEvajyuatGEEeSlK_prvQPRO_cLtHrQO-Ch6JeoH4IZKpCmdjY_nsASHXcgeQfyrqy5jOq3QeHaoLpXLN3zDBdN8mTAfeYZbZ0F-TCOUlaxHMlDj5oKRun7x9XoRB5vSs-5v9ecHGMrV08YVLZ9MQCNB6rArf86A2CmutdGgT4SwnKqnJ2Ao1W3-mmAp_bSZ_30x7CR1bym27P_4sIQGYHRvJZ8S5Y0uGIjbJqOxn", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103777280083770149138\">Ad Nugraha</a>"] },
            { photoReference: "AWCwydjr0CssthHE9PmVgp6_uw6CIaSjOE_WYoOKOVw86mO4IJFst3mqO59uZNR5qqD0wYMjaRL9PQyZQasEanzFR5VPvYOwJNb628niy7lUb84TMFkWnxi2ej9PWCaHt-w8vGNihXPU_JKqjWgW4UOyXJgvfvP3TdcA7WYhEi1QOQ99E3z6Bq0f3NVPr4NmuDeZE6kqxB8i680b7s8PWefXPPx56jgPZZQNukIH10heVoJ16RulL6gl_FQUm7EzzXe5DHdXWzj-nmDnGuK1Kavgc_T0X_ikVCc9nSTDOdWf2_Qxv1YX5cgdQ4s9ILYp9Dif7iGxTv1SIXToyZLY85ReYVkbl0rP6VrQZArDBGDh1sx57x8y1rT7Ny_C_WlbFfg49LbPAgD48hpIz_HANo8rjH8VqqjDlucm8T73XoOoAFrDPw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109010739064388837694\">LOKL Coffee Co</a>"] },
            { photoReference: "AWCwydg6LSvCBMiHRGWOqjQbHB9ExPrb57lY0GFX62lbokv8IyR9eRKy9egwr9ec7XqhoGZPuTKpaCrWwkoClh4iisZnrHBAr7rlyR3hVqw7NpoZpMXa9rvY7K81L12wkN6WA8lzN1M2I-RpOnQobclCZzenUEfTg-27vKBxoWLryEcKd1VpaRwNBk6D041kZu7F4TGtR-I-B5KRB1dGH-_t7KCE6e6yJsBlUryWzIMQ_pgjMc2YLBAHlMS8tRoUGeYQ1wWxh-8MKppmPEgnq_soUmCuKeTJTLZuZSQyaxl8Sr36reeRBs3mub8dozmmvua_sF4XxgZTF9po4ZU1-ItzwRKtTyeQB2EmaPOfMNm2WOYbWnW2lmroNJIF6FmT62jLgPTGhLcJfiHHuhUEPQjqAE51VjRZ8sYiRN6QbFOb_S2Cewb4Jdmktv93vxUou-eI", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109606786034933407608\">Betty</a>"] },
            { photoReference: "AWCwydhu2zI-FU1qFRDgCaDLbv13oBxL6VVm-_LrwmiGKd-4rZkJpfAFUR_fPr6Si8dk3NnpoKlWiBggF5fw18Q6jcSG2KUfcz91BZSSzaA_szXdgxetnmsoTf7RbQPMpU-1MJG0h_cPt5AoR-zt6gg_IZqIags-1EJUGo619KkRECsPLI83vCq9xPoK76SvK153fCs_jwFd_wIR4ZruOmOi5LDsJYVzQEV7s8Kf9Ev3W5mir8Xp9OlrMs5b5M4s1XlhibHxCjYJEgu3Llxa5obFJekE3MLs9uFibBCwEgiaYY2VT9ZvRY-6orLgqn98F7OfTwJioHeQ0F1tdIJcRZr91wNVLhQJSboIyHWA3xDxl62hvKLrL_i4-SPEskMliHF9XD5Odi9SFpPchbRS0av86XQKS4SUDW6_Z-f-y8uqb0dRcqEpyPdZJeI5AADHar5x", width: 938, height: 938, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103777280083770149138\">Ad Nugraha</a>"] }
        ],
        summary: "다양한 아침 식사 메뉴를 즐길 수 있는 분위기 좋은 카페입니다.",
        updatedAt: "2026-08-16",
        highlights: ["아름다운 카페 분위기", "다양한 아침 식사 메뉴", "전문적인 직원 서비스"],
        tips: ["잉글리시 브렉퍼스트 주문 시 양과 가격을 고려하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "아침 식사", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/loklcoffee/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9259448843286649473", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=LOKL+%EC%BB%A4%ED%94%BC+Co+%EC%BF%A0%EC%95%8C%EB%9D%BC%EB%A3%B8%ED%91%B8%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
