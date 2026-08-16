import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "코담 키친": {
        photos: ["/images/krabi/info/restaurants/kodam-kitchen-ao-nang-krabi.jpg"],
        placeId: "ChIJJSWrBQrAUTARg5DFe2jio2w",
        placePhotos: [
            { photoReference: "AWCwydhhEdQOlRL4uEznUsEJVaPjI-F8XHtmu05KgphQ4TbGlAp0v6xSEU7J87AeZ9e1OAeexNqVzGBwaQ22uvybYSqQhExdcU-0F09kdEHMFOYhuGvD235tpSPHq9p11WSSzIv9lhBPSTNtAv5P2QgrWWUuYUFMVOFSKkeC5aQLZAToGC3huJmjJaNJVFS-s9DzptwtcKg87S6XLKscWH96sLNY24dzaMr0f7qE8401dUvQbY2GARv9r4ktHtCT0hQHJ2Z5MRnNH3zjekHpsGygOWFrdQ_t0fgHloLOej1noU82V4iEpaF_MbcLYZeZLuFOmNpw744qabSpskDEhcMPLw2vFnNDI8ciOWJtuOIUzZHvVlbExqi9abegsFjAuk-E4N_udakuaN6iHFXbM-O-rh1Dy9oksi1C6rSaDgzcut4h3Q", width: 960, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106188544455015906242\">Kodam Kitchen branch 1</a>"] },
            { photoReference: "AWCwydhBGq8uPogCS9BnC5dLajXCEnelzIkgn8VQbKP00yQFycGGPrltgunamJi9U7kLLDGcWJ92dVYsYVEzEcBd_N7cq_vjshovrhOUCmLWzIUSHErtH2E0jHrU3LZI_7swuTP7dE7z-EU_ZE3rzc7RKBlon2R65UQqKwHkPd57U46RT8hSG02lIftvJbVpw2H0qCFh3zLO1ejB4mU3QGRWEEtpLXFdQpywUiI0grdpK3NK_oJp0pGhskU0RuP10QHY_eExP1N3YDSGUdGzgBibJVH71s4UENrN-fm9RPPmB76RpHaw6eZfE0XCt75JjS4gMx_V-EbSvxofrOeFvLQsy8ckBJzpXoAylQ52CwnSdBBwno0DOVOFNu8nj52nbJNqHqC_RDCxe1qiTcL01YdxzEMInZ2Mk4VhJfnhoCmQoexk4pYm", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106188544455015906242\">Kodam Kitchen branch 1</a>"] },
            { photoReference: "AWCwydhw9uinFyuw4dirh2sxytIW9Mirok8yf0zaDS2qBMPanOZZVle9HJTMBIf7Tbh8MzUCKxcxAO4vkn7DU8V80vFmheZ0Rl0ZiYrM3p5OooYFqCNzc_sBfmCFkn4kI5BVaVfdAK2jq5t_j2JSohz3EGsQkGm2zG75YMQaEVAHlyVFP-UhisIY-G2wurdaLCNT0D8TsTDpueseHKmMZReSRInem5hul_nAAu2DoO9kgLPsOK7XcnB8zc1u0hfmJ3uJ7gt7CFnilfubE-CL0Ss97ikMvYB5q9JiaYpjnIRvDtulo7q5JclYBjdQ_T2aw4CXJfKTdWbGfRRhcLUUeKeccEdr-Pvf_tPB-kBP9uLewEKh-WdgfB0UCSxXfRoGuovVMYFV_gWm1n66lzqQc_INI8RZYYglbMsPJP_ongY3J_EhCO5Hijm9pqBGKxIxfBad", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105872826826762907440\">wooi khuen koh</a>"] },
            { photoReference: "AWCwydgsHmbbr4X6gc13QjoUEUj7u1gafK7Hi4A6qB5ZmqAJBA19vrF2HNbXHuVlBXpowdKpIGI25hw8BkUIUrvyLaqtJURxQ-v-cV9bKNzYXK7xVAYVP0-WQqiRkZ9U0jh8Hgya_LhuXpJrupXGSwpCeUA84UMD233LYHMohan8Ha-8MyEXuislTXgiw2i3kWzyDz2vyCZK2exNGN46yQQcycg6S6-ewrsn1FD0vPChB57rctpmFYnRqevW0aJNMm0CQQLDntq93tJCUG23BhxA9LBHDr6LuEvoL5_o6_g_FJ23-4Q21XdOvv1n5j-Un7uGzdPbJIb2Xd9J3GuFZ7RvramHH5MtyjMbdJjye8Q4BNFaUh1b0LDWgnLVJxFHu5t3tnfVfzmPyzS7dpke8CrSCx-rnE7o6w5gt4C_zMycgSoVpJN4hdAewxdc6Oz4uVev", width: 2631, height: 1692, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106188544455015906242\">Kodam Kitchen branch 1</a>"] },
            { photoReference: "AWCwydhv_79xezn8y2tPOoejnUxKETho6lxk5Bkg1BksS28HIhc2Q-4RQdUxdIBSmy84m1fAfvkOTQGZXwMXIANxeQbhtPoK7SOye70tDp2GDMmgNrf1bppbkQ7071PwT8EHOafSyZrR2ml1cCbof1Af3I3IMkSA5fL9tGm3rP1w1p26PvP7cVCEpSEgBpXXIFoNo1sokFFjncWI1rGAHZ_JADdE5D1tulDC565DQ9RoaMrQBDBLsseQkJ1wdGABRcesMEaPRPMCzWsYrM4pCZxX2k8nRpHKKBGZT_uBRaS52APpFbbKi-YTCeCNCYXOvd6iXcKD_-EHsdD3daYgJbFL1gxctdOfPXDYyuy4_O8JHaseS8mUP8f79Y3VD1AJEEwWRG8nJybi6MZmpt8abrro1w35gg8QsBJJ0KvCLfOOR5D2m40oMr2A6D8JkwJeUQ", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118248683639967567111\">aparna paibhale</a>"] }
        ],
        summary: "커리와 해산물, 팟타이 등 다양한 태국 요리를 즐길 수 있는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["풍부한 커리 메뉴", "신선한 해산물 요리", "맛있는 팟타이"],
        tips: ["인기 메뉴는 미리 주문하는 것이 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커리·해산물·팟타이", items: [{ name: "대표 메뉴", price: "฿100~350", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.kodamkitchen.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7828349515681075331", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EB%8B%B4+%ED%82%A4%EC%B9%9C+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "패밀리 타이푸드 & 씨푸드": {
        photos: ["/images/krabi/info/restaurants/family-thaifood-seafood-ao-nang-krabi.jpg"],
        placeId: "ChIJiZsTTw_AUTARf9YwKE7JkKA",
        placePhotos: [
            { photoReference: "AWCwydhlNojzPIPbL4E3gvQfSA6s9oNlRkx7C8-s6xRJUN6axNrqbJwJxD5VSOGHX0IoK-7wswTaVN-7lPF1RpTw_W9oPskQEm7B9b00ymWlBNJoPXGgjrl0oFp2lKxM0Ue0Zmji10-MXrWapUJpmcxhwAR9P_tMpD2hH6gyMzz0GQ5VjaAT2ZqYwXm4KP8gKO5W8Q7DHY1K9L-5dRoz94rsBcgcZc8u4zYJ3kGosLrPT_sWJ65OSAPHixciseZ1Kc2KzEtL7uRiYIrnmJdb5lBBwYXuZiDfTRZ6OSgV1YWN_ayH7hG2wPv06PzJoavza0h8U1R1elFQooqkdrpbvrWdTChB1ZoWNhZQQDAcdbDOuEMrlfSpIsdM9I6X4OyipScBcm3VYdIUwrwOiYA-THFrqbXjczHii8Sur-RMJXt6PhnY8wDhG4jt3crEPl-c-Q", width: 1290, height: 953, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114766967755318749433\">Theresa Du Toit</a>"] },
            { photoReference: "AWCwydiFifULw-hGsNudvuZbUP6WR09xzYD8YfjHvPU3yCBkLnGvuixq-C5kzKUaXyY-V40prUXJDKpx7dGG--GWg-uSEUuEPFjHSmepkSmwRgZ4-EJ0RemtAetDogpzzcehLBxou4VUhXWuV0PxX4OZAq4uyk7A5sBlEGSR9kHMaMy4Qc-3adWeGcqe8UjfD9CnR9UkRNQcgv79NYuVSozC16axMJb_MEfINcCslqL3GLXYqIhdSNhr5gvAi4WOTsARdYN4993j-xO0UmCFYMdvjPkroMOGPS9ZWQa7dJHnaAcZFHeHj5w7sGRaEkaGQ-oLMl4SybhcrkbYhL1pCu9fwC84cQg3bMN8yM5hCLDxuAiNh5urUxMO2LNPLrYrA59LLA8F_2gaqB7XfUgdPXbXz3C4RmRgrqDAFLpgepBkDgR_ReFswj2fLefTFFJWTtbV", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105382339229249486085\">Sin Heng</a>"] },
            { photoReference: "AWCwydij0COAZJJy53WRbJzKub_-vfNdEP-3fW8COD6NSKjCSeRu1kGAt_VP9zBQ7zHeisaFcRzVDLgbGf-WkgPP0gDVsCdCmPxjSwYUN70VWRdIktDzZu0NnFroctTVGGZVl06pooepnst8Ns12Qb08q_71ATIsMh6fJ0DT3vkyIcQ-nfUE4oqQ4v3XZNEcozhroWx-HKsRko99rhAR2WGjhb1ALRakvGJh83W5zpOwmeIzJyWqY1fFo6pXCnFh0PrXmSmiNs9wyrIh-6KbHazOg7-z4WdbjFv_5wTnMlQ7BZWRZuycBSnUg4uTCY09ULh3i-VGOtWid_f7dUAma74ooFShbUex4v0LGTlF2h2yVOd8hXfsjSm9eN2NuTlBW2epHRachUHil7WPM6RT1-ANJdmdM_1k56rVdAUwpaE9J7aLMPNcu0mCyEYur5WDTMOk", width: 3536, height: 2314, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100802963435108385775\">Mr Sun</a>"] },
            { photoReference: "AWCwydjaZ2OsDB9VXDK-BkMRnHOGZx6kFNnsZ-uYRLpvYRJGRBuMn2ZulllSMUuXuDqATAQ2qygv4XI22T4Ib3EWkLH-OiSiqgdoSQU9GOhix2v7V4ok0Wh4V8mqgfLm_MNTWgLk3Gii3zP5lO0-LhabzuteLrIHbVebsULpfFsxhE5kV1PeG4OaJ9UToGcAsyWOiyDA3CDhVT-BMDnP4wk0y8XRl-npRLRDLFHwfuyiDw0L-OPZLKpUwOsHxVsonIUuQoev0otdpPbXUQuPtAtpZlfLDnCJAsZvUQHzLOR48iiZV5CzI-dgnfkPj7wMoTvp7jDHKTcNJr--UDWavOwxMk--rnQbxWwFU2MfZeVw6CqIF-rdDuW0JFd5pHd43P0dZmrShkxPzRZcN3rgF4KPYzTJmWGA1hbioF8jdnhoksmjO3vXLNeaaLHZGIQoMTAL", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116013420207752558843\">豪庭庭</a>"] },
            { photoReference: "AWCwydgCV9r0T3TYlBgMjLrZUWJvoNSRvbYgIeRv88eONuZ-alkt3WsYsxlUzY11_eYJvs46G75ZpO__jzbozxa4P0IK8TmUnZvuu9ESzq3TSlpQBdz2i_HtxOdUyIu9ACERTU57c3pAnnAmn_uLBtBrkjG_fZf3IbdhE74MWt4cYbmrbZX0k0F36_Surr5MwEleNVAREAjgrl5UqL0t787-38G0MZclCMlwCxfYp1VKQDteEWhcux3F8eyrAcasVTwq8UQTqF4S1MeaOq_uzCp8Scl59m83RNRFE2oY7RKzQmt_OkJwz_qQ85AfwfzKQflkMCRQn30PmlZt0lnOqqK7mmpRXCk80jTLZqekEZR0YRw4RRCwYzi-m2FyeawN2hK3BneWgUOclQXLYN24mu2_PNd9NtpLnSjvgoehOI13L-prdElnrVbTJehQ56fxH3Sk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112693876351867826196\">Samhita Pal</a>"] }
        ],
        summary: "태국 가정식과 신선한 해산물을 전문으로 하는 식당입니다.",
        updatedAt: "2026-07-21",
        highlights: ["정통 태국 가정식", "신선한 해산물 요리"],
        tips: ["해산물 메뉴를 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물·태국 가정식", items: [{ name: "대표 메뉴", price: "฿100~400", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11569968780233725567", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%A8%EB%B0%80%EB%A6%AC+%ED%83%80%EC%9D%B4%ED%91%B8%EB%93%9C+%26+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "래 레이 그릴": {
        photos: ["/images/krabi/info/restaurants/lae-lay-grill-krabi.jpg"],
        placeId: "ChIJe5-hMKiWUTAR7kP_7wkDO8I",
        placePhotos: [
            { photoReference: "AWCwydgbcZzgWLotitj61I5D_WUC1WW8LMirJrbiJx2ai9I37s2vyv01-TeRO5vxtB2ypdzXNw3EwhlHj5DxREgcJLIjE_OExTSdPI5s0uwo2yzhARVYXqNY4wbh05Hns4pLTIFp99lfUiF_BFydx2DBwA6jwc0igq_xPWpRZjUkS4R0bJFWhv6DBPNUOBbH7aODD-PaIcPv37KupVT4uuTIcAWsldfDOTsBR3SlFjD68TUSN1KUOHJ161RsOZQRafNakyUUsjOiV34sNm316ZzLpH58q6MY4YPznim6Fy33yAhO2yFp-bb2lR31yF4LZ3tan7WgWHBMMXEUgMOP5Rl-7kEAGOPB3lvfuIlzNyiR2qVlmrYjACso-h58QC0cVTX88aMzaDmLqMP1opv83DyASCK9h42bbzxqJ2ImMB9s5iOvCQ", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115113300845554386673\">แล เล กริล | Lae Lay Grill - ร้านอาหารอันดับ 1 ของอ่าวนาง 5 ปีซ้อน</a>"] },
            { photoReference: "AWCwydipOXvqhznHgQY2rvt9GZ-Dd7xuA6YCwKKt5x7kqIwJSE0pq12SW_iRTe4JdrNolYdK1rOpu7ZdRYGEbz0WPTpvTDNYeHwGEpqZjb6tb8JdLLicKH2jnzzSCD1Mw2hfcxnkhcRsolQcMmRliPS4g32L8ppIexxJ3jwASUjU1yteZS0tZDUQpZ1Ll2UBZRow0wbmORCM0FgFU994lORjUlIu-z1-ajCfhqaQd0o9pNnqxgzpZbVzjXeOWwrMQr9wYtQruqYVzFu5uHre7tIluZIDyxACHV-FMIRX67POtZ63IW9d6Vh41f-pUwQ-rYYFajK-Mh1RgVVdkP6JNORrzOYtjEiOteFJkWOslDaUEh85y5nf2vhKebCrEhWs0ZTaSTMV_IcrDZ8Ri0XhPL7aYvDJkHZ19p5-MdbWJ8r_qOkattWwK966OyNGrP-CFA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113417445609997935904\">Primitiva Jimenez</a>"] },
            { photoReference: "AWCwydixPSqUPxCQLjykP85O5HrAPnj0TJguVfC7kr7YeAli5U2Y8oMUpU0Sl4B1N8C00OUf4JP239kFQlxtz4PTFBxmM3DNOzFoJEk5T1NKx04bk6GKlGI3T0RoNz0bATCOqcwozA0U_DP11eee8nBezapeIR7Jtv7uT9gd7wktzBtOYm5BaalVarXbXMnn3Tddmd5z7EJUjbbD94SAL9-hcd0SKNoY5AXDzFG_418276tz7I6pgJrN9IqXavUT5yQKQN4JQLUsSQmKBYczGbnhwdGYVIkdbNIVJhW5fRLiM7unmpSo9vudJiW0pWoxgSq66PPbS0gZpCplipSJgHo7F66QEQr6mz_XzfFsd11BsR7he9N6Ailqny8nmibP6jj0YeDh2m_FEOw9mSOnmtLxLU5LOIRvHxczHJpmB0QtXEEKSsGy", width: 1162, height: 654, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115113300845554386673\">แล เล กริล | Lae Lay Grill - ร้านอาหารอันดับ 1 ของอ่าวนาง 5 ปีซ้อน</a>"] },
            { photoReference: "AWCwydioG6g22dRcP52puYezIUCjBiBoZkrFmhniVXnT6WWcsPT5O6PA7g3zVwd3LrpKsnUZx250IGmlM8Qkh1NZxnsdaQLkIVMNL0dtEUTt5U7xVukq-roz1CjaZSGmPgEwhj72VRa0Yv7D17nZ0Cvy_dYnm3ZgORTLPqgdHXIqUE-VTVweSthxwEGkyhbQth4HA96uUA5TDnXyGOVH6CsPlxpJiqo88x4fPUcdaXYYjbS3ff8V4C7UPSLLoClORrIzTmVeGsTDo-oyTlxe6gte3po77aUWTnpHA_wg8EIJH1pF7yOx5_3l5pSnsB2wo_48GwzyDmslfOlnyTdoJeVEWebHH4ImcIG0ZOW4O7OJSNwVRUDSf_SYZKCCAGoVrIH1xlFAPqU7gJ8hd5dvNGyzEKJ0N88fDB0rzCcaSs_hVYXbPyq0cokyCdUEQki8RQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113417445609997935904\">Primitiva Jimenez</a>"] },
            { photoReference: "AWCwydjewh3bWK6aBZL7TSBQEQlQQaHX9yqFhThmv4J0EAAsuASMkvyXnccaVAKou0sKNol2z7ICpCAgBDvJ_FdpohI50EOKBu9dCjomyuQSukv28QHFT0YFHBKXgn-wEXc-c5HUCKq1YnyY_37duGcZ40S-y3tttMw0M2RPEHzaluPdXx7LMJog-Q6vg1uuwK_wGq0FuPf34eiW3n6TZoF8bt5zLc7FegtNuBiejoCzt-DTQtL3puC7Ab00MOhTptj_5uusvmoA8UQnKWfRa8RQyd1lH_HNyIjV1G7qAUGpfsu0whONNZPVwvd2tslydOlWF0cH4sllTASNaCh2e96G69nWIWush-rvIQ8NRwwT98eWUdHcM7Jz6xDd2xCjrOTFOrVN8KSTxF843L3oDg2DZYvZ5SGwt3mXLcfeeCv8F5mXB9woNd_QEMS3aJl0xw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100628987079352665852\">Vishva Oralie</a>"] }
        ],
        summary: "아름다운 선셋 전망과 함께 신선한 해산물을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["환상적인 일몰 전망", "신선한 해산물 요리"],
        tips: ["일몰 시간에 맞춰 예약하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "선셋 전망 해산물", items: [{ name: "대표 메뉴", price: "฿300~900", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.laelaygrill.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13995783608200020974", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%98+%EB%A0%88%EC%9D%B4+%EA%B7%B8%EB%A6%B4+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "더 힐탑 아오낭": {
        photos: ["/images/krabi/info/restaurants/the-hilltop-ao-nang-krabi.jpg"],
        placeId: "ChIJ8c_wCe6_UTAR3zqJJx6cZjM",
        placePhotos: [
            { photoReference: "AWCwydjJ3c6mVxJnO-xEH0YuPRTYaHGiBpjeT8bWeGPNgIflKPgPDH0dw9z4LlKPbUvVYtPb30pSf2S2Vo1V5_C_Prish0XaVEiEDcbdFh2ufF5aiecCKiNVJsinUobAOA6NJFXdF0ksaYzfU-pApZEf0JmxuFcQwzlyHbZs7Ywm-0dOYNyARc0pGgsjcWd8NQOz0Ckny7CKG0mUqyhV1_67mCN1t6XNnMVvJHbQRzA-Uo-BnIjED-iP3cvubC7ZpO9RD2nNwgn2ScxWN6oK-5krzUo2CvFVZXCjLduX9MbUHE0SgaMXkpG6kSx1bgGdvPBxdjjqrtEX3rV1g-HTAlwjvsIAUmrk28cG5oYgqANgX9vZOkHM_357XYqXww-WTpqYTXjANsCX54Y49SEmdrECDAyq_DTZ-c3lvVzvMXGnB4iFopJ9hFX1KM3h8Kil5EyF", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114868287414079033220\">David Carden</a>"] },
            { photoReference: "AWCwydgxeRzmDlrhtXgBo5ejhx3qySXraGWBgBjNSTEZhJzL4ZALdP7DqbEQeRciKJTzgqG8yAkdNuyweflTcA3SYllENdHoozo_kK7kkp75SCBmPbdzWl-SV6ebQcqSszhr3qQdW-h8SKD5n00lENut70mMxLxpEfnZz559qaHb3nRskK7bYmNffxQv1pZe2W9MIBDx-vhOjHKmmMj8ylzZLNC1Am_Cr6gMhhAOJjXV2ApCzSL-4grYUtjQLg8WJDtxla8A45ANWkv0w4tCN0a8Rh8w4xhK6xfTYznRs83pUI7pKBihGFf5eHNH9DlxPBYemoBE2E44a0P0yD_7hOOiVq2MyWteqq2vW8-5Fy5fdmv7cQPIfu2_0H7zA2ZXlZgbMFdaJZvwWwNcvYtqTZkx7mKvLhhfAPacD0DQQMEjEagTGZve", width: 1875, height: 1250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100915092966604212559\">The Hilltop Ao Nang</a>"] },
            { photoReference: "AWCwydh_QEZ38FSpw8aeZHhXa65TEDoK1cUURWfWs7DlAo4GVR8sdypDjAkZfXwhs7xS1TRTFJw7KY-94uDup4CRxP31NbxoOlD8jQw_rL_82ig0YMPmIJJlxs60kCqTUdujb7dpz94wiM_mvJxGsF_VEz1S4ouaU6am7zH3VEv4xBYzcYUs_AmIj7x5DE2guMY5h9WuOUY6KLIHchVNJM99WA7qbS0D_WaDf1UARXZJJ4NXOnKr_Cda6kiQLcYg8OLzAsbc8sisK0c4jONSPhNnMPcAGrawVspkp9_PDBbeK5O8ZOvCDhCmuAqW3l4UZvflretDpyfeaFgfoc_Axje5DERfb5XEW11zaeaRQCrSyRzLku0YcFQZ7pM2BM6nc0b0R7cRnLyKB1SgKCCAi4Rc4L1Eyb-B-85H4rjrvvEVIn3jjo-AFPgz7_T5502b4H3V", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110444969669207055281\">THEVISRI SELVAMANI</a>"] },
            { photoReference: "AWCwydjUb8aGgUab2fTCx2vxYlp1gqDxVPbqtlqk7Kewh0L4mxihZ68AyIiIz1J6yXiiqQIvu3GeduZ-F8mong17hJt09Ahj568ErUiQxiCqfA2Fm6SQpp3PIHIT_MTAqsya9lMuVCZbwHToNwGvFGJIx3hzUlZ98rdvpIHDUiyFQ5Y5cQ-BSN1ekgesOhA6ZWUrMagYXF5yqt97T6wkMT2PRwfA_hLnEqrYDKlsLc8uFE7h_BLaQTG1OX4Hnvez_LmPsTHrpb9ALnMB0aZ-GIs_QwBfwOGqT1GJkUSfkS-1DAU2SQ_2w-SKszsGnopMpI0ODt1803yRASVC5ERmldvinrSyB6RMwZyTBNNIr4IBuVlCrRfWk3G_4P0nKvTnW3h9LwUavwHWbQqIyF5EJ8S-pZ6ZWrTO3gDeZ2tHLIEUvUeLVQ", width: 1290, height: 726, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100915092966604212559\">The Hilltop Ao Nang</a>"] },
            { photoReference: "AWCwydhkcvHrzQ1iD0N8h4napLsLncMQAYSn-rbRuXU9wb3asKB08G3plUB7LLbH7xoAHk5QH0mVB7wAeyUg4kW0wrFeq8EPfHtVj56OzRL1ZUEQSYPaJkIOfuO2BdFA_Q-4sS65CCl1_u5qCipdD2Z9bhMQ_XVvea_QAJT1jTt25TRINlkyNnFkejqkDuZ51ACjKEOy9xpXx8Lf0US-aR3v42wNZhSPiwiCEmrGZO2M7PAUM8HfPhI0YJRagGT0dxwtTwflOmh-2ZFyYSp_AFOU7FgyS8N10Wzq72CEjB6n1XY4CII9VMAkb44nhtSwiSBDJ7NygCCMl5ZR3FMaX_E6FoQoPd0xTbJ-A8qfT5gAOCUePE27f0Ea17GpV0HKuY5mqNKKEh7NWdPU-spnPv1NMi6fpT4FNjEs5_z4Xtfvp8jt5CeU2JTDtK7GKYZPlQ", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109052755036405216424\">micke cullgert</a>"] }
        ],
        summary: "탁 트인 전망을 자랑하는 씨푸드 전문 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["아름다운 파노라마 뷰", "다양한 씨푸드 메뉴"],
        tips: ["전망이 좋은 창가 자리를 미리 확보하세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "전망 레스토랑·씨푸드", items: [{ name: "대표 메뉴", price: "฿300~1000", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.thehilltopaonang.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3703819396885068511", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%9E%90%ED%83%91+%EC%95%84%EC%98%A4%EB%82%AD+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "카페 8.98 아오낭": {
        photos: ["/images/krabi/info/restaurants/cafe-8-98-ao-nang-krabi.jpg"],
        placeId: "ChIJa99i4wXAUTAR5rOvxZuRM-M",
        placePhotos: [
            { photoReference: "AWCwydjjDu-lJjwIkepu2Fp9HJVBXcSJEY_eQrRr3qNXQnbj5oIKNavC2KZinCd6udj8bXfojiUrAqtACFSPXJest-ni7xb7xX0ZTIOPrLUkorxnMN4XRvOSmFzysZjhZ3wBzR2_fy0t7h_I4bo_iEcN9k31TTXzkYIUDoGSGsj-llJ4DpUkUlWWgMFmNBFM_zk55KADBTQa0RpuoLiOBY-_8lhcxkzboe_sxQBB6Efwh6LTr0WTdB0uMXDZTfyz1ma2JRXXww6oNn9I24OjRG84DSW8sg2dFbR3neY_yydQRrcOKwu6ePsjFnKRZ1P5cpEAGDfA3wMfaUnUer3M4HKpNV0vCLFbcVTNfeSLV083jTa32W5L3LDLcWWnRFk-0ivSBlnyOniR4a_6a-WF5iIp3z6CydBXVFfGLuw5ryUw3TabiILk", width: 1600, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111568914268376020903\">Café 8.98 Ao Nang</a>"] },
            { photoReference: "AWCwydgSZwA_oZPHZZjj6-b3uEi7Z9OFHXSd5J2DbhViHdM7peSQNDJLwpPPNmv4_g-0JJECxZJ1-yGuQzaS1KhDs70lupxOkv83357XLKZfwf_JWLJWjLQLyWk5YtBkXHXHDpeSqSA6x5HMGRj8DOX_cXiNSSg4xkZ_IHF4glpKK-clbsM5FxEYGirYA4cCr-qY5B0q_MvUQeD1p2fpJYkS3GTklx_UtCudi579AHN4qeXfw8ljKlVA7PN6zrkUenG2Ru3pg7IDHfZU5fQURya5bYaUWXLFH_WveR7uG0RXv0qUVwTyz9TDi8H7yAeAHP-OGH47Jnel1E837JAOXaxMubOwqSDG6IrS8_F8tht8pqnTGuH8UZpPweb4QoSe8_D8nUSAOhM5aQgdKoZ9egaexHTVe0zIWhUrJL1Ud0nDMMChuF2PhTcqBZlj-ll9LA", width: 1440, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106418294884016072473\">Thijs Bakker</a>"] },
            { photoReference: "AWCwydgMh0ak8zDlvlMSFH13dLu2nASgqj4M4DmV8WvnqBkd94M_TrKHumkrgi352KYwAompkBEAr4fFmTxJT6jmuHN4DRGoIO_hzkK4P__SRTDqLSOXnQe5UXFwTmHv89-cbX-EQ2wKTVWoSC_IYTTqFkjcVsn8rl0Vj59SVAB2d37zKQuxC9Q0SBnIZltrCL7OVkYBEBCs5wW56_hn5CDUXoHUHwS0_S_RerIkpnRPCcAvQPbb5dl433YX2KctcwaL0Vu2g8G7spsshxizFv5qTFLG6CzuLz-AES0MGcbbmQOZc6tDO62tepxUUcQbDphh0aaSoCNJqJYKktFIvKOcAp3cqeG4GHuBROVrRkbzexzNoUQp6xJ601ObNQLxloOFJR0HGeM2gEG34F1q1kpRu3A6O_KYueaQFde4kpc0Yw2NHg0K", width: 1080, height: 1343, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111568914268376020903\">Café 8.98 Ao Nang</a>"] },
            { photoReference: "AWCwydhRDkxPaDlefFnPwsV_NWipbqJEx2MqRxLgiSrdl3NZ28bOyqApqSpRkKdyP3t2Sofbh1zB1BwLLh-dfNbJBJmczVr5eNITzDXMqutIaTx-2Xm8Ls_9tnvBb3Fl_Pd4gwvMuNw1mW5212orsb5D3SNJwNkR4UIDFbKg_YCv4qZZl7-2zqyfpcfjsW8BvVI9YKLRl7i9rzBgx7mRcXBApOuWco-_D6fRimllqxV8Mtar1NgmqcN1NtjhTvOXHUe3oI3gZQL_pT1SSJLyFdx-I2ZSRnUnC-5NhxMKhXVXx36ZYNscE_CHKu0XIidBY4wVouJaCeB27cdoaBTQNysr6s-petrNgnxFCRp83O2Y1vwTvn2OaUT_38SteaQY2nrDe9fBGqZF_r9Rx0_K_TrV65Jtmtg-XJDoUq_bKe5Q5Pflz8hpijQsW4VrIqkPRIUU", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108071737039050745818\">Giuseppina Del Campo</a>"] },
            { photoReference: "AWCwydiKWFVh8ts_4E3LJKcrxvdCEXkKAYVCpFqrJcQGu47fITwopQINbaoFFeqr6b0dg09f_hFShFQ9YXTYsuzTz21LTKBuqwKDI0OZ4UJ_auBgTAI6nDUEz_HgU39u4AphCKe_PK5qt-up42wZKk9tEmoeNaYXCznmK0v60F6mZ6rC3t8ZvVL-kOLWydvp-kyRcsSJoUfrBESnLF04YOtEy_u9e67DHiT_KVlzwY6rQjSHeSewjqA49OYZDdYks7ieiD_tt-k0rbi9NKNXM8tjSdYuH4B0dE_8hNcbbabsQBtNhzQ_R-npOs8XxplVgzvkmRAZIDaB3rXCrYmRrlyYzXATd8dGzIZugm_B41o4vlC7-sPqhCfpp-JD3tqf6nklf_h83mtJDfXompX5hG-0s4y9d0Hxp3Tt00RV2InYbs9eHarXZZ2EL8Gd9Gcupw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117890571819931436210\">Nora Aleyyan</a>"] }
        ],
        summary: "아오낭에서 즐길 수 있는 브런치와 커피, 건강식 전문 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 재료를 사용한 건강식 메뉴", "여유로운 분위기의 브런치 타임"],
        tips: ["아침이나 점심 식사로 방문하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "브런치·커피·건강식", items: [{ name: "대표 메뉴", price: "฿150~450", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 11:00; 화요일: 오전 7:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.cafe898.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16371589168644469734", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%98+8.98+%EC%95%84%EC%98%A4%EB%82%AD+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "카니보어 스테이크 앤 그릴": {
        photos: ["/images/krabi/info/restaurants/carnivore-steak-and-grill-ao-nang-krabi.jpg"],
        placeId: "ChIJ20jk2PW_UTARKhRRezcyzvM",
        placePhotos: [
            { photoReference: "AWCwydjTjcp34Z72otuRetBiLwTsDqSvXS1LEgZEk0o0uFUFzL_ZesdZmq1qZM6Zt4H5nq9I6HOti0af7u6LWDgX2DF7MRA_u5Y_IXrtvWNfReMMSO-VFSEjhm1W5dVCn7hMkrR7ZXILtjmulsLuRV6mkrXWnKRzWPhzM1K3rmF4M0XHzGPK6p5yeSjqgNgguq2lTV2FEVFKc18k5gJjawYJmrtECaVlDjXntq4O_ATN0RipgNTnj33RY2mW16hjaAOHGuJfLiujcZmNhgVycKqwt6PbHLA0rNJ1gg5zwCiBIloKPKgcbEkfFl_YgaMQ-LTpNsqg7Uqh4cfqARlv03tO-flDBNVwB_KJRTyDnfWTvQFhZG1qEl0mjDMsO23bAUyMmKGz2Xz-XvgYQa57kvLHdjEOu4CaNv-R-FV9W5F5bgo", width: 4800, height: 3189, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108346800118167999649\">大村聖</a>"] },
            { photoReference: "AWCwydi75GdB_ycRkD8KSE4pFDL_aUoeMn9kk_nojYNdd1QkTlmpzLRDcSXRZtF7kYGCPRcTAVfFj74LM8p9nKGmdEn2d_tQ7dtzRgTKR07OzF6S4cEogq3DA2wIk4VD7xdwrB4aAzIzDTONkOMOSGYNCHDhsS_uXVPL1bsEXreZjw210D1BS8R9YtEYCiBJZDwZYYETmU3fxpb7QxR1RYtNFhBqvjFtSJTyGIRAiPQxsumbZgDTtww73YN4Kuus22f4-W4CFpPfJFzUs3pvpmb42THfeN_gcwfDAEJH94lRA_kLmZDaAC2duNL_DKY_c_IfB7OTxJc1cHPo6mXyFEAfBlJkeE6CtUm6jH6_iLW-Z4-0TGOxjWNvScHAk4llZolUiWGY5LYwvDNxMRd4BpYd3tkdxJ-4ZN4CRWQIuQHAtMo7nO2LBOBbIYkEhNYYfo-8", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114981437397315607504\">Carnivore Steak &amp; Grill</a>"] },
            { photoReference: "AWCwydjESOy6Qbqwr2LBTNhAe0EHmRdEyOPQmhdN51PJJYdGuikWi6gtvBkr1CB7kMVWxT9SHN6497pJrhry-MPvqN300_3vsOoOO7BepxP98pEhWh1FX6iaPcZdKJ6cH1SO39PBx6RyjvsV2nddJb_XoBsBHXwNYewyAgLXr2byASWm4i6LBfaUx2Vrsr2GpHXbMh_DmD6_1Xc1gpxVnqDXFCYX7nlb4cqHLqm2iFeplWmb25RB9-NWLDPNk7aThl_bvCp4Y0fEUm9-3ngLKecmZ7ATGZx11TU_Oaau41JbE_pWNcFGyg-9En4WmPRuyepy1r-L7w9jsJgtqXaSYcabZSECFX5LUtzQ7M2-TOQ33kCZ8egsnufkscNqMpnO8ypMhEkauUKTBvgNw6u-8wwYofPZxCSEeVkuK7mvZq1fm3BthH2nUQwdOT2qRYMsKBPD", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116527450795832522257\">Karin Brand</a>"] },
            { photoReference: "AWCwydiTCgez1fGyCDScSr5AHzYqQ2p8DcK3ESbgbBdGidM71Nn1EPfQ_rgD6Q0cOUSh7wr8fC3y3AsNC9zDDwIZGZ-WCoaZDxTTOCQXZ9A28GUUhdgE9ED4MX0O-QbbkM_7fkiPw_QxePNORQy46-Ztw8FsWYoFtCyGw2rOtQCeE0V7hj3ulZYMxBom78KwISBMfDV-0eGKcWm6Ec4ePWzEyx3uUqqet4Re8vS_ALQODGRPUAao0PMstx7fMRozdUYba5D1-baSkZZHeMzUQc7W_j--6yJKflcjdS5_M7fnmaJMYz44XzvhK3rw-JMSWr2Ng8LpogHJymXmc6SdYrLIKpXL3VbyOpdfvKXDxZ3vOEbfopj8xFL31a4S1QjO93Niw4wTwdbmt4aDN9THPCVE-SydFPF_ikWfOUpmMHm1or-PEQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101083452449801382706\">Mike Botkin</a>"] },
            { photoReference: "AWCwydhlvDpuAhrF21EA1DM1ngpKyfuqgFhGJS8FaVUkOAbZ5opNLsjAKMI5wpDMaMUmW99I66FyP-YVN24vRuZR189rAhvDGtqBvma1D59w_-XhsYak9fjc1NU7hfgFkc-Mry3f-PSpKzdw4U3aza7cHhpCrH_RjnJA5GeekEQeR0CxR8wC-APl-6hMqJbf0ZOJZpqmzAhpxeKNAAM8orCUs3gm_27_4ezN6OGIcBlOyKFwfys__tekFQYUu9EUxosJF1GLyUFwIX9NTJINFLLW1wIkU6QghGo2Q2qgI8IxGGbq1tC2-OvW59A6DXbn9rnhQK7_HX6mnyVCMrpFtsTi8OARDEbH_wEDUcgrjoItRVTyQolfS2bhTe540VZ2zPoDBVjUrCc5xA2r2HVEzJPDlcn9L7gJzyXDogQPEX3oSgw0UhE6yxdBf3uyXzd83dQZ", width: 4714, height: 3540, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111963816397525369493\">manapol wattanasak</a>"] }
        ],
        summary: "스테이크와 다양한 그릴 요리를 전문으로 하는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["육즙 가득한 스테이크", "다양한 종류의 그릴 메뉴"],
        tips: ["고기 요리를 좋아한다면 꼭 방문해보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스테이크·그릴 요리", items: [{ name: "대표 메뉴", price: "฿400~1200", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 12:00~10:00; 화요일: 오후 12:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17568034410292384810", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%8B%88%EB%B3%B4%EC%96%B4+%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC+%EC%95%A4+%EA%B7%B8%EB%A6%B4+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "움베르토스 퀴진": {
        photos: ["/images/krabi/info/restaurants/umberto-s-cuisine-ao-nang-krabi.jpg"],
        placeId: "ChIJYdDeHArAUTAR8fRCi-mZrY0",
        placePhotos: [
            { photoReference: "AWCwydgcEiHN3XQa5pveY6pZu9MOfffXnOUh5zoCgzReR5OZD_9aHkeK4spWPpnmdAxfgmKhk0vgQK44bFOZCAikBck8lVcoQWB9fzRbnFpmBCMV7SeaHdpLLka2Zg5q0eTdmy3h3PCgZ_hRTohHan2zd2QL40xuuGujp38F3yOo59tNCCXRDR6oaR7NDKxuSDc_KHINMlkiUGy5PZJ-XmhLlCqIY4fA8aDdGDBH9rYwVFptWzy5Smw67YSk8RNjgjrv2UNV0L91aGItpuHZUTrLH5TFc2p2uOc9xre-nSku0WCaxfKR2-FJznmPqmEeYcCq82vdpvr_EDPBwNzpC4bn78tSd08592L31dneaBgd-ABIYIYv9sgDt_eXLCPwn08CSXKjwWJO4-Vuc_EwkzDv3l98QKe6HyyFwMloB-G5yTTVgg", width: 3827, height: 2868, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115986685891227297396\">Umberto&#39;s Cuisine</a>"] },
            { photoReference: "AWCwydiByicsruLsSQ0VF0H7n-8CU0h3h3B9Mkxj1YcZFd48seTRB8a77rc7YhoK_27soQOMqVmkRYOSloHUXV5WHnQqqGAXej_mAcS3zdw4sNyM15cAgs1QevFSshVQ5H8XsfmbAYSqn_LG65y4j2XVWs7AFF_lNFJOvJ3rJN0bkZwfKOO0ogtEf0xfMdebKFdexB7E-0xmIbj8bubcw6WeGHXUCsCQ1N-lJYnb5Hm91XVflMkQt2Obeedd-_sVc7RsmFiXbSvf6PWg7j5q7BtW9yI6iJZwe4GzvBlwyDBtp1yndVQRT7nzfo088PMIpFNyUFcDBZONDvgd5fVuw7KjZYCd7iAqSZ5AmdjTHIXV2CCdrEuhomiNO29D6XDH5Ga4QxgkjkYjBdFvfYB0UdBB-JTgoyvtIE33EHxBEZyOPUfyUaX_Fm8nv1_y9owE2w", width: 2048, height: 1367, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115986685891227297396\">Umberto&#39;s Cuisine</a>"] },
            { photoReference: "AWCwydg1YDazOLRLOLIU_6K3WrvcRJH2KOSUBqtGbMlrpKhqeGiA5cAB-BZdmAsf4Ae3HKfIfqkime2tkUcl34T2i0uh-mrs2uAsqQQ9eDNVpLOHEq7Iz1rUjARGehO9QIk1FAIxTftLVEvpvovPLDN7NSy5lonVfYhS_l-ssESPdPHx40rLEN6HsZOU8HSDRzlMJtpeChX_t9gsSz061bV4HRUydRb4sm1_neFTVtC-l7V1VC19miAFlb5ISr4l6ni0TWq7SpdujygiPvhdG2NfYYzqJM41fm30uiGq1PYHIIDdhoujv3T_Bw-2Oph88ijtPANnVb5ZP9uUYY5ozX3GF0aT4LhJZ4XeXABz2-PZEu_4YD9angJ-SxiamagunsXjFn9kUxwpTXrCMJJnJpei4C-l21P4kajJ3CVb9OCvYN3pqqIzN8XtpcW70ZimQZnt", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109047160137572654342\">Ankitt Sharma</a>"] },
            { photoReference: "AWCwydjGj6VsongVhDEGXg0D-fXJHGN7L2I965_LsjgG-kbfTaG7auZbdQkX4s3BCd9b6VZ9en_MM2ocum0Cy_TK7CN2Y_hvlVUAAp9GJMj0TCaH8OFt4Usm8tjU1bdHfEpnRc-PVHh4V-6u3Ccxq58IHDMt-V1OjHcpzmDwpg9ekOJ9ljcsW8ZwdK3ds1_mGqwOJ-ZwhzIg6X8Y8p5oIfYqeSpe2Cjfzu6_XVc7l9-F7d-z3WaKRZRXp8azWgtcIxpVikzt_rMg7xQFnIxwJxHmxCchwy9TRiCPeSye8007yx3ahxXiWM8fGMR8pF0Sg2CL6gp9q7smQ_q_Ivh6aFBeNVOK8Dy-8JKgAwkPoKqnb34mn0XvhAKTpbHbMQ1sLBMwu-DcBXxOn3pbazA0Nv4vcKRpbkAZqu8MD3GbalanAi6Y_Sh_pTZ1Ca2wiAu2YIZx", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100999025167854553239\">Francisco Alves</a>"] },
            { photoReference: "AWCwydhL4yyEzhaz80YmFQRjBoNs_Hgi3Xfpq-YytTT1eN0fEwBlH7O0SzKz3TyFkXdyaTomG7nwzRsfqXYMg8RFooMbtfCT7ZAoPluAtD-qJ1U-IzbF5XHXUhAk2h4riYjJF6AiBGX9mHZq5lAl8OC4nr4eBVYF-n6eDlW9CHYFbDidOY-8ggAp3bLPXm9HEsHwuOIt6fZFUlqqUR3ce7fzqWmH8h8VkFbzLRNQiq-LL_lxctRkDhWwoT_PXCgX4x_20f4sw_JoOZLTLCEM6hAHmUrw8fOGYl_LstnhciVVnMv3dQjBUp2d31j1Z1xrkmurxbRHUxAG43HdX2gaXL-qlK-1UupheRNXjvoyUS8m4EvlMR_vxzmBlBOkPy28r8wM1PbaXvAXEofEw7lyNlCsJPNl76IsXmKE2bOgZSQAYJeK3d5l4H73UAI40n3zhCh1", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102718015819215774457\">Chaima Goumani</a>"] }
        ],
        summary: "파스타, 피자, 와인을 전문으로 하는 맛있는 이탈리안 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 파스타와 피자", "품격 있는 와인 리스트"],
        tips: ["저녁 시간대에는 예약 후 방문하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "파스타·피자·와인", items: [{ name: "대표 메뉴", price: "฿300~900", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:30; 화요일: 오전 11:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.umbertorestaurant.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10208985158661633265", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9B%80%EB%B2%A0%EB%A5%B4%ED%86%A0%EC%8A%A4+%ED%80%B4%EC%A7%84+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "더 라스트 피셔맨": {
        photos: ["/images/krabi/info/restaurants/the-last-fisherman-ao-nang-krabi.jpg"],
        placeId: "ChIJvwJ3-Q_AUTARDd_SDrEV3O4",
        placePhotos: [
            { photoReference: "AWCwydgR0TpSKYppDQPhdB8tm2Ag1rfvQgnNG4lLaTyK45U16gAP2tF8pCGXYvFUSLeiYefDMZ8NYkL6l_fu8ceMmzr7fLjdUZ8BfPrVEH2pAbJ0fk_BAbrJgxY6ex54XxmRpCbJo_OoB10if2TbLXWUNpKXP10_zPG9Ru2AiUHs7eqTIpz2vNCEaWX2ucjz8QpssYwgdCrgQjE8oQH1oVUIoCrxi1Rli2ZppaPFA5VmbsJ6TbutL3IPZRbuYH0h8RZ8AXVCTpRLF0jDoM6lLqGdLodZzaZi4pH1vnzolKlRgL0XI-wtXJ0qwsGymmahhMBQaZIqKYltPFmVbsQiXQIIKgvCmHH7xM1fO-EmDezoLLpGZnJwWPV5MK16db_1aa5J_oFbkguyZXtLgqYnF4N-iyttHym7-6ruhEDhxpigczzmL3b-", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112504036886088119096\">The Last Fisherman Bar</a>"] },
            { photoReference: "AWCwydgaLRSW_uC8XHWZ7vq4UOQdRQTZ9Q6pb7ErheNpJMmB9N06VNFxGAywfAwkedANpSph4O-BbVcV8COrrqIdmyxdU-jCRUEgtB-D1mlwzFjy6ZeZohT-koMC7q-GOXVPNRqCrw7mTc9SObnnsKN1sQR6hALxZazMiJtyFEnZ2aukDpZb1jjhJHpJ-h1mKttIhcMqdoqBWkVBQOS_GYhQwEfQWitwb3sZ1-vuj2TJuDX28Jybz-dZcPS0OSKy7aCxHIbh1TfZDSq43vLLGWlPQShSJjhcy8QGVt2JlubgIvdHXYyRYJ8EmCJzX1yfaOrnXVt7jDbcs-ajPOmCu7cugR3ygE2I_lwmPxNcXCFpfobG6UQDILFDMAqRX19yiODgGJhVkjs64evF7vSEt3fN1Dt362q8pwmeTUsMcba-ku0", width: 1835, height: 892, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112504036886088119096\">The Last Fisherman Bar</a>"] },
            { photoReference: "AWCwydgvq283qYeccjXPOONBEzwSxMO7-4Fxc9Bd2ACIO0JZi3iIu6UZBc8J9dw8utBq93RTqdcn6PdnSmq-N4amXQFfBDSVJDFQ7GPfWExiUqnYKzN_UiAPiQx9UJe7Ty_WM3z1uIAdp64VL1JU_dVl_YcgJg4t5Bmm7TwCEjAkV61hFbWQYSI9T-NFflF-RN6xVUO57N_BOAZj1j3sFVIljLQKDtxF7ZiJ0f1ioO2GMzvZhKDgYQWX6H9gwu-qlbEtxKG8ypXfeFGc3l-kZOR00xFTGYY_I4UN0U7jCrrAiip-P3iWXiNfxpSvqHZraBJ2rekItjgT_e0zmPv7CJpMDS3i1fJBEMo_34y3MPCwD3_hDUD-hrmw4GOOlptFYsJ3CSF33lMGT1MH_YNU3WLmLuHrN4CBH4BWM5zGxg3YW6-trGWo", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112504036886088119096\">The Last Fisherman Bar</a>"] },
            { photoReference: "AWCwydgUzwfxnl7lZSrmq3YfMJ2JDsVjlV4rlolG9KzX85I8mW6sVxrJPrDgAHHQe6_i0nrP4hEe7_gxuWlhE6yGekFvqVZPRt-AMdZ0zQ7vMut0P6IEiJKRD_XfrJMz4ghQC04RlKpFrpTms3gVqGjM4i7v-MavqYWGnAkF2-m-q7zM217bCpXAdmm1zP8JI34qNTNeh6_yuhMyH2rNUho7a7kX0EW9E0lqKAtrWCjGJ9yrt1Cu8vBwbCwFYGdBE2KDRUGPVFKYfN6VExqAJ-T39p3CAcO46LA7n6scEiMtII-OZQWvt6Q_iHTQ_lpHr7HzZpXMr1xihPpipxgxROxs227Ts1Hnr2cYkUIEUcsu4NXb9Udtlh-YzW2Y4iWiWoPwT8o2N8bPCsVCOzYTsyiudFyZpxNjDspucfqBuo8uLHnNDYoKlvHrowoZGmRgcA", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116314618133590175142\">Gozza</a>"] },
            { photoReference: "AWCwydjkbYZFw34Vs96l8jQsRdgu3VVH8_E4ksfmIDZKeJI28Go60-pnKnN6A0_70OCbeabZk_UQpzfWfO5Dk3N2KTeegUYxgDtBA2P9bT2Y27V28d-6AFo6WLAK2pF5KE9LPkwNTK2AYg0w1zco1f7P0BB-IrgcGsA8yF5s7V0U3rNMWJ1tsqTemifUKAooQn-EiBbpRRCzSBVknSP67LyDmNvm9-Ai6f7H8IBOiILZSCv4HiwrTwJ6v7nwZelxkVlsSmxZ_tIxCMEWL9H7S-GJdUSgc3FJt6GWxsA2sHKR_InoWR5tOIdJnkWpYkjTkr0pU9jn3LV1wphEFFHtrqKDELhlkElDn4-X_LteLCcN2rYE1CHW91a8PAsRdZNWh3mT9YWSJh_yIR4-8uxvqpWoet_JVh9YhPaZWNJEsL73J_RDabbwdJ4brEueB7Q6oZDV", width: 1440, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113327111278896586781\">James Guibara</a>"] }
        ],
        summary: "해변에서 신선한 씨푸드를 즐길 수 있는 분위기 좋은 바입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 해산물 요리", "낭만적인 해변 식사"],
        tips: ["일몰 시간에 맞춰 방문하면 멋진 풍경을 감상할 수 있습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해변 식사·씨푸드", items: [{ name: "대표 메뉴", price: "฿200~700", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 4:00, 오후 5:30~10:00; 화요일: 오전 11:00 ~ 오후 4:00, 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://thelastfishermanbar.com/?utm_source=google&utm_medium=gmb&utm_campaign=local-seo", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17211655726105288461", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%9D%BC%EC%8A%A4%ED%8A%B8+%ED%94%BC%EC%85%94%EB%A7%A8+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "완나스 플레이스": {
        photos: ["/images/krabi/info/restaurants/wanna-s-place-ao-nang-krabi.jpg"],
        placeId: "ChIJPwW0rA_AUTAR2lPqt47apQQ",
        placePhotos: [
            { photoReference: "AWCwydgmsuThVtRcPIX3jVn9wFPEe-EfW8mxD7s4sE2Vv9jmU1Tn3Nts_Kbk5gH36MUn8jeSxbzk4bOuxqnKNrW8ieiZiXP1XrbPdsh2EC9BX0JSaP9xKXwM5o7Z0EOOKMwRE9LIzxsbqeJsK-KcMq_s4ZhADeAGwXNW91fqnBuzW-U6ezIBcmB_qO4haMZ9F4ZZKCAnEQQHcT5lMdhsM1X-0oa38uVwaqcAGKlzRt_IZjFlrSNQy83i-Zd_7fTW_k77ahd2h6d0A_zWhUJplYePnQQ6mz9OXjjyzVyJ-IlblY3CdTiRtf_DDoAKkPJVVy5UYmOrXdKc5GQjBRzpyGJ2hJtAdYFjigmlp8tCDcTSw8gHUiX0QYD1O0WZkZZMKwlWpzdWgGB8YX2I56bETiRYILsKEAmohKuWwVhsS2J4LGTt7Q", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117387074925766120793\">Wanna&#39;s Place Restaurant, Ao Nang</a>"] },
            { photoReference: "AWCwydiHW5zM8kyWLQ0crBsAPUebZCnHPBcKr10Y5GacLGkZMi6eIldwmM9Au7XU8HkqVyy2c8FTi89gAzcHOJONu_cBtrMwRNpz7o0nYpE6sEIRcKgE-KYWpVF5PU5pc9JWC9rWRbLsKRPVWU_R5UqIBgucN68SkP4vl13yp90KneUmP3-7LrLAF-zSHdxq0ecavrszq4nvVZlj-mIDf4gXvyWHDjkbUMcHSAvNivMbyXYNJcGiSrVfevNnuYQPd_IMihBBYvOpkT9tJQXm4IztfXwKY83EtF6Ibql3c2l-2gI0yxYcOatlV1ESq7DlErGK4UxFIAU28O46eyg5Y4p6K5TfWQG2Uuxn3NFtidLVC5mwD0OuB8qyuZpWlXgRJLBqGdAIVh5WGZUCQqzJrvizQuz80OE0wX7fQHzAoPX2Sxeyyg", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117387074925766120793\">Wanna&#39;s Place Restaurant, Ao Nang</a>"] },
            { photoReference: "AWCwydiwZP4GFlwNxr_K54WGtiZLsfe73fPnlvcnN9yrnoZtJOdgz_buNpoHbhNUxnHOsmxHYwEACiTMz1vWtcsGtSpaJLvtplcZjB1UW-QdFpuGO1BtwlU1ctRfG_1e4tit53osQbEurSg0e_w1q0yMWi9lj2GU-XnhyakQi0k4F2BIYUA-X3zATLyAqHHLHYszf-X35payrA7NC5VD28PcGdpDZ3xrPH6xY5k658r9m4AP73pXNaFF6wx04vsSh37tRJ9CA4_ZBg7GpAFzHQrh3WPRK_f04cfB9DM9IJDseZTlnXLFLkem-xZSIm1enRDpEcDthX-9RNz7996yqNF3mpTdUjfbSO9Gf_PZRuJW_P6JPhaqfli_m2b4_4zDTBIzRqEarAezUpY5Qh3f8VHfuZZGewJ_1Jolj_tXwE3K3imy9qS95wDG1QabtnsqVtl7", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102874911286772130487\">erwin vogels</a>"] },
            { photoReference: "AWCwydgnA5LRY0PZoi4m1i4TBnLN66BeFGSWiwfXAcmNME9nnUkK0e5OJFysEDHgkP8NVUkGVv-zS0Q6E926XIlJclL5soHmBeM6x8O5ghgh_3NgOxV7aC-80nC_kpeaj0msvZIsIKt4bHO7Croe0n_qW94HD4ly0zeLvtD6egvrinCbXaHezXueRz2Us9BOdkBpbzX0Vik0jFXemEOTu3Kc8_M-zpK6qLj6h0Ue6PcvT3UCeUlwpbxZp4yEjtvmiC_blswYbhcldlsRZ-AHSwhyOYe6rtodGz6qV4dPCmaxJ8cqMRmzLAuxM1t-CLRJdCCIkqCw-S3l4FWB5NigkbyXaS_bT9brGhB_4A2g1LrirQ6X4ArDFi1WktjDPgQ5naISBZh-mw8Y212-gTRjNc_7eb3bKFFYEwnt9u-_RkRCrIrljKR2NF6CTnS-cLY657d0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100347239865038927744\">Gaurav Prakash</a>"] },
            { photoReference: "AWCwydh3HYVc91ncmK4G0jlUTzceg5kPsSph2biKXXMelUHPWrpLO7M4gQM7u7dd0UcNFcjL6s9TZt5d4tg19ppx3UmwNpFjiijr0mMfdJqE3nD9jewlIrCOsXrbE-xICB4JrCbGxZfx-cH7UOk3e60P5WChvViE6x_2-_zUTXQfFs9dOYy_WcQTV3BCcKmwFNFeMe4ZZEcPzM0oNovYlN4FLDcgH7igfMGyHZ_Box6rLySVJtHF2YJC89RbstMSnaMLfdI3gwbBhweVcrghSj-pmanGnWZXYgPwZGckwIfpa5cvPQKRIU9Fo98zEfxI133nAaoyZuyfgw_2bDKroFCfqGB7JyR_xVfuqC0T4KCyShU7f5G0a-9ySaQkhKmnF5ps4Xko7r2IyH7g-RnplCSrdY4f4_18W6RNzvzcYK8Jnan_05tld41X8njJv-C_t0bD", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105864604579389311547\">Alex Kalin</a>"] }
        ],
        summary: "스테이크와 다양한 태국 요리를 즐길 수 있는 아오낭의 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 스테이크 메뉴", "태국 전통 음식 제공"],
        tips: ["저녁 시간대 방문을 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스테이크·태국 메뉴", items: [{ name: "대표 메뉴", price: "฿250~800", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00~11:00, 오전 11:30 ~ 오후 10:00; 화요일: 오전 7:00~11:00, 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.thelresort.com/restaurants/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=334914053814768602", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%84%EB%82%98%EC%8A%A4+%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "메이 앤 진 레스토랑": {
        photos: ["/images/krabi/info/restaurants/may-and-zin-restaurant-ao-nang-krabi.jpg"],
        placeId: "ChIJxcWzNfW_UTAR0Va0bRlauvQ",
        placePhotos: [
            { photoReference: "AWCwydhm-p39SQusLwMTkvvS9dBhzv4nBtM2hXMf7jzvzrME0_glKxmUlaRu7jEOBl3aSnwOtw4QAqCqW5_-Rz6_XdU9aBdT5R5oCs-9xMTlLlQ9P_QasvllBRwVig-vx7SpczGpepMxqY_jyOigj6hz_tKLC2CtP2MSI4sCiualFjgJggQDuWVw_Ic3OG_i_3z9AyCepmjm0MEhjVjKjrHbLXuFJFVPK27tGFCcRC5viIcWvHJ96was1KIaHw_fl-ybrThaSkTby6VbV8qCwCpoNZY_0ws4_IFC-ec2JGvEzbuY8A35Ib0OWhTjncJ9v56ldBBoJOiO55xJerm0BqDXo8Fc6a_Vayy1KkdqA8x7kL1LbmS9EiFcnrFjcAYYN-zE9WaVfqCIEdpOdB1ONUqD0PnmqMDhh5bcOatU3v1F9WU", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117370832304766672283\">Brian B</a>"] },
            { photoReference: "AWCwydjZShkQck9Nwuc7b2s75UktTvLCTMl76QWCQ7EJpKVemAGqF5VrQgoqdzxsuhDfXSjrcYtT2gKj7d0gUwUxwuNNEp5rGygp_rQykwZZ93qEwhgSuooIez48vJsyPtzDtalXy_eOGvL7BEv-5M5aUxqCOKUZokofwvhmU1L1fnKJQjY4tmElsOWXLYI5fGDizORbjPPs5coxCsUtbSW_nn-pspCtk5vZCxgQO5aMQk4l0TFR_cRpsXdI7_R18ej-TgINak2wLJJDu21IEUDiviJRFsw5ZIVx4rnRZDRpoyuPd08f4zBv7-M4RZEW8pywc6SiJp1oBgLgrFKO4AdWJlYpeP4hgUcVEpF1jnH2KJGbSE1csTzoCMGWxyPFxLX0wqS_Ik3nrujKwZobURGS2XbJk5NQ-zBaGE210yhQmp_3DqeAKDs2JAvYRbJMOWJ1", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105871775221424406848\">lily li</a>"] },
            { photoReference: "AWCwydj1apjD6P9fxycjk0Vxyp_jb1knCC35d9o8tL3T8zj8J2YSyZV-u5hhttMFANrb6305po678xI9D1VbqHZ_iBPAfDiXOlQXaX6H5HZNSIfRE2ZaAohmSt3xJE9mCoXQA-7XxGj-ejMXjYHbS1mVoh7PN7DrLlBqqGscRyzzalSOluuhr7bGcJHBBoRh_eULwa5j1bfEqTWsw0IHS6RKpt3EITLY9BRXHtVrpY03LAryujPRuNzMH9WWq_1C0efQMaDDStRfqk8cxPUheEdshiV31BjghFul19EwDLUKTkG1yN-7-geVXO51mqK0x03WmleVBvHTkAGt1OHgqZqbC8kIzK_hGVBoekhNk8gKBa28VrMrmTloKQtuijybzyUmQfFT5kbOwgaLHYht2ME61YwfVWD4BpDKrI1LXgEkdB7ycR8i", width: 2736, height: 3648, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101957774131100414103\">NJ Channel</a>"] },
            { photoReference: "AWCwydjqyJUQ4kyWecXWEGwTJ6noXI8nFzachy5_0-G9fKR5tp3UuJ7uEvzHsDq9CBIZWkoRzuHeq9AkK8FfhB7yqJNi-zVmrNSGu67l-aT4Ebwnc8SrnmpFCsb1LOPl_azjp_qxJ-Z15laV4dyYpGQzozQ8p4EGpSI-v6KTqV5HXyhaQRywqsiaW_qT1rcrZpOXzlPNgMozuubSrRXrA7yaExR2e6C-a5-rG4CWPFCeM8kd2P6kJVj52kqsNeYyw_HWQcU67mRc7j4FqqEpsN_ezsmuxx4hLUOB3crY_exFoP7XTDpUTZ5bFOtcTlo3JMIB8T1uTerh6qHs5rrEPwSc_hyEfBM4Q9TLFljWcvilsAe3b3ZegKIoDVm7EmGpNTLv513PD25m8jJhVX3tAEG3ffa6C88YOEpBQ_l_4H6sHhG-QxX5tdbSz2T6cGUykg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112953577988403020867\">Nafisa Kazi</a>"] },
            { photoReference: "AWCwydgprKHKJ_VYac3AbKMPfmd_xqu5r7giLCq6E2j2NbTHmhg9LsSlvBYJUQ7ybZInVIVXNdwzB-uC3NgqNw9lDrjogKBJwKurXXIM42tPM9_gqKa7oGydOo-IXYil06nvhtr7mmwXKMyEh-oIgO50FM7s_9kjLcnlLEpBjc0Mswlhhk9uJ671tt8eAu2q2uoxfwQVxnys6bT4HZJ6961fK9vICKx8pgGahL7wpITor7d8gNW-1xv2i7v5rQQ7JSplkD0zd_S_p6umba2d7Ym_RLe8YllSZWiRi3vqesZwW7ZcaqmtP4f3pBRg4LWBZfVCapmoxS1EVyDYr-Inn1EAhrwZMtgE10znfMSO6zQ-OJBT_m6VNKTb3q5ceuZTh8DZX01fg5Rzci6IzaKww00EnBpcV2Z9gLNCtLpUV4qXP3BhnWPBiO6Bkw8Mq-QwVvPR", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100886158548771793085\">Mukarramun</a>"] }
        ],
        summary: "가성비 좋은 저렴한 로컬 태국 음식을 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["저렴하고 맛있는 로컬 타이푸드", "높은 고객 만족도"],
        tips: ["현지 분위기를 느끼기에 좋습니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "저렴한 로컬 타이푸드", items: [{ name: "대표 메뉴", price: "฿80~250", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17634506356183815889", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EC%9D%B4+%EC%95%A4+%EC%A7%84+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "보트 누들 아오낭": {
        photos: ["/images/krabi/info/restaurants/boat-noodle-ao-nang-krabi.jpg"],
        placeId: "ChIJYdytuAbAUTARzpeeKcmRNJk",
        placePhotos: [
            { photoReference: "AWCwydhdW9mk8qMYzDDdnwEwI_VCzbkDOZvNYuUcU8QDRbdc8rhRE2GwQshyI-ojS4SG4LU6-0RfrNGuiMz6SsAFu13J1vWBCsj7BVAdwrBUJ5pDhGLPtfLhPnjslAN9YjVYDna5CWWJmFUypyBZ_S7MsCPySmHpexE1Dq5CFCQJphOizD8snQs2dfmtB7BSKIzMFzW8XfgnHUaHOjRmOreLCBui7YB9OWnt3WWd2dPyJ5nRx05HinvQhY6shHzdbu1jd7rCsdhLLB8AzwXNkONiE5E5OIYaaJI5wy_NjNI1QrsKddtEh6VOX4SqGuR3H1cu-h4Bm6xJZ5pheuDPT2ED4cn7nPQzCBvnrqCiGLZ028UiD5fPOTj-O89dJJvP3UQITGrS5Bep8XtfBwwKpD94z6KQXS5NHOQYcP4hT6PqAtPZRw", width: 3939, height: 2954, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107946018332624020774\">Boat Noodle Ao Nang &amp; Thai food</a>"] },
            { photoReference: "AWCwydhzxS11tNWdLpUTApIvW3zXK1g8Cc1Ut5rybUG3fafCLE_0wI4qh1eTP9wA-UbXRmdZ86EwxdBoOBf-qi1IBhG-Nynv20Cj1ZN1n4S-dEn145tNOgwXVtGY5-Krfy-6GqSyXJD7VNfv3eR5scSz0g2BmkJCrjySDCDPQ0ScrfR7ypKCS0vS6-woP4ATid5vKDkfR3y_Qbv5Blz8IvKuVg0SHqE0msSvDYRmduXo0mZAOkgQr22oRhgCJICdKETtgluhBNPxdaiqrrjtEPdMPHJoHnguOQ4IoOo-oF9L_ZbojXB0fKL4_DOZ_lovTiyycZCIyGI7G0x8uyXKz6BpojQ7BLC_9nHKUiL0GTsWRI5BSF2xWPnipOAUg5Hm_-wooFxONttdw5XhRVsHCA6IID7wN8PT4cBIbqDhs55aGRcftMEvXvCB4jrZi63QaNfy", width: 712, height: 580, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107946018332624020774\">Boat Noodle Ao Nang &amp; Thai food</a>"] },
            { photoReference: "AWCwydg7xCkT8KIIC9deBW1amfUgHbMF4WG8q8zddsrew9brWSTNljI30OyBBuXho52uXzqbAwBNLejmhbyUj224P3-iCkTtXNqMhqE0J1xA2nm_J4rsAzbuVwgj95OjKM1nwGN0IqnSrTlGu0GnEhk3OuWrCp012I1pvw36xne6Y5C4vy-xjOkSFEncCVyIM2dcuKwCO3GXuxepZs9L4AGGzqUz3SHYPhjdE1gs7XR0gs5Aj2Bql6V4xU1vpPDH28UPse0pqGjItxLfIetHeod9rYLXgcXn6PKrxtDrazTPcRU-0lf8tSBaBggQYswgERQ2ceqk7Vvb36_QgHpVVDaXJg7m-_bfHRyBk86aXuQVqdreVufpivZHk10S2NRgtIiYdVU69hYKfAchhs96qmGz-ydKRM3qjwWPO61RvYCzgFsKdu0DcTkYSKYBF3V6d13i", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103563092310481683036\">Chaisit Tularak (NutPhotography)</a>"] },
            { photoReference: "AWCwydiv5ATyrv_v-gk0m0MMWFXI2RJTwZOjJUj9eYIWKcsBVqmkeaAA5za8hLeihNXzKC3fxCuOM8QgkecthCnnHCVRI0JNH92pKigsEEfNhws1LMAyCMEbZrwe1pfeW-h9Q46VcJO6RMTlnBFmVu8GfMFOtustOgFC2U3UvcPTHvbuZOA3aup3TVf4Flmko0rrlzaF6Zp_uw6c49-aqNVxNFiqZv0eUDgP4uIZvIMyyIVsRmW094_T3i42w8MdOxlzONIB0b6AXbsvyY2LXxLxXT6hYqjwEp2Dz_MTd9eL5MsIg6ZJ-qAVZW-ztj8cIGrDiXWGxRIDht_YVpJFvV8AA1hXRQQNNVYc8EPiEQaiykEWOmgo-TOLxF-6ZYkbplA9b9ENYWT6qjHE-Ik11UBWDS3FdcYgjvJDHBro9gl8AuipPpyyfWscb6XujRM6yg", width: 1760, height: 1320, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109075342873882608503\">Ane Rumangkang</a>"] },
            { photoReference: "AWCwydjY9QyErlVbkIlHXnJYSBADh7qUBEyaFF4col3dgX_pKP2w7hbDC51gx2bno05hcX-d2Y-oIDBx0i4P2O-F9xw3jcD4DE_J1cusojTbcQ8wuUvE3XyVj0a1FHfNI9CrtaED8gAvxAfAaZB4usvjWQ5mtm996KScuJaTMTqLIEbQD3iyI1MN0di109eiFF2o8FCK7djyCeeQWQ1BG2FmZaoHyItvX0ycppIToNGaO5ooc1tbuMiJ6chV_lAsS_l1R_YtGThPK2D5IyaFQCy1bRuqTlZObyfrYaRIRmVda2Ey-oIfbwvk0fEeUOZkpjixi8KZrfCp1zDzrWlnnrtKHKliej98ZEl3bOEh1pa-WHpW50feMrjEaolso59E1DhL3lsJjK4TyGpPaIxQ878QpH08GMyuVIYEG4baZNuFH-a5qpjjDGr28LdV0Zx8QuMl", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103563092310481683036\">Chaisit Tularak (NutPhotography)</a>"] }
        ],
        summary: "아오낭에서 즐길 수 있는 보트누들과 로컬 국수 전문점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["현지 스타일의 진한 국물 맛", "가성비 좋은 로컬 음식"],
        tips: ["국수와 함께 곁들일 사이드 메뉴를 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "보트누들·로컬 국수", items: [{ name: "대표 메뉴", price: "฿60~200", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11039608879764641742", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%ED%8A%B8+%EB%88%84%EB%93%A4+%EC%95%84%EC%98%A4%EB%82%AD+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "고빈다스 앳 더 비치": {
        photos: ["/images/krabi/info/restaurants/govinda-s-at-the-beach-krabi.jpg"],
        placeId: "ChIJzz7mGArAUTARas_j8CLODJQ",
        placePhotos: [
            { photoReference: "AWCwydgtwRvNWKA2VsRGQ3xqLuVDyB7-w30VORfRPG4y_EHgoWriZ6DtZPHdhxc18wZI94IERyD2dKPG1IF0TnnXDsptQapcaDl5P0VrAo_YBbonrdodD_ubmOTVXPhQ01geHv3e0D6ZxqnMw-c6kOFMNhvTNHzl2LDvtmwlMwO7Kq8HeqrWqGLO0TsF04aKGihfbSx3u7_8yqyjklJraNKqyUHJz2jTOh8S0EYqRK4_O3qbcfjwVDCrziVnktb58x7rr9i_wACob-FfFXydEle8yDavLPWZ84Zk3EyAVs-mdeCZQ-wPcCnq1dVSSbR-Pl4yDpOmMZuAhqbeK1GkfVh5ftjpv35TYk9Y-CLGqcsF7-iMnV9B0pDU414n7IZJIxWBj_pBIO42pD2q2AanVhnQkeTlozpmeuHG93APSTgJFgM", width: 2000, height: 1500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117918824877459146850\">Pure Vegetarian Govinda&#39;s Restaurant</a>"] },
            { photoReference: "AWCwydjXw6Pt7tMCcv4HWZYkgfm54cuOHb0ck-93EKN6SF6ltOit6OebYLTWHW3HSwHVgRVlNI2liL1oI2UAyBC2oFk7zN83ul_hLGfIqF-5oYIVECoGbqVj6eTxuYm5umhtXxtlsnfLH66MPWk748T47EHHziqyHlXE1cD2fQs8vrWyFMIRCnpXhjALu8BUd4nq1Q_whT5LY-Xn25Wy1vz-1ZDKPyUobV-V7FRNB63-ZCj3CByuwVCBtUUKUWB_EcAfMCwXhKIg9H0W6-6DUWlgmtlsZL6EGuaGiausVnbsmTXFS7UGoQDhg_M5dQGUZkRYLMalPArQlh0B-MmH5iIoBI-yVYbOEs3b4f3vNLw9vOvIb6RHzUAhPvaWU92sZkUlPzqtXYtnK5tWhADoPzUDWi8futDTWmNNwWPy8ycA3Mk204lUi5W8_8FLjjIG56bH", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109018553450400450147\">Khatri rahul</a>"] },
            { photoReference: "AWCwydiK0pIMj4eKScR_r-7SXKa1Fd2FCV2deuya7HkVkoje1bdlPri-Y6MeL44VWPDubE1MSc2mpULLc9AYZ-5CVcLc6LCHURVxGqO5cq1ncRiejbHJrxjpzv9Ef765figGwwDPnmLaWsXKpEJvIPCG1APJ8oEfO9R610uzCD9rJEB62w8cBI7iQMK-wjjwpkEJSbMJGurVVeCuM7hOPAUTbxq8DWpth9mmXSVtEFKXWOBTt-NFsrOrsz2r3M0nUGD0cfwbHSiWDR2LfaFnPyloUzTK6Jue1pXVFw0SqNNMOtomW07fjiKCmEvLwQz_KHvR-5Ibe-YZiblgT0x-m-rx55tJ7kPMSGVe-jcTGESwcfS6COG2eowl-6u5sA_mOrZrvrass_L2GeFwsgtK71tBbbRopDtdhDktTvleoIg93ejvA8vTvDmlmqcP3fzP-ffY", width: 1200, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117918824877459146850\">Pure Vegetarian Govinda&#39;s Restaurant</a>"] },
            { photoReference: "AWCwydj8tTW16eRqzZJxmkBmCrXt0hhg6d2syRWPLuTebfGZ0GfXX7gPLiD72AUQp4_jsPdF96lFAtUpkT1upDzYi-DVopon0XiqJriX1Kp2SrA42_mtdiTi7uAppUwyokRfQkydtrrYOfuJ4G17HR2NmFwGttnPDIWIEytbOYNFQW6r3_iTFvpTAuxlHzMcbn_atiBKcle9zhOW0xhO_EJMMnAJw-0b03M3V2Xoa7qegqXPRUIMxwrAbVuXqK1S4GASHlr8MISsk6a5sM2wfi2ScgNSez_4BS-T4vhiPGdpJ1fMW14nKvdHbGpPCZxKwIq5csdVigoKIeVVhcrCSOc_17OVvuZQv2R9afQKDUMhvQFoZjJ9bIPMTgx-zDMg3HMgJlIBqnrwA7QXWOgH0IPeGmNfkapvrmxvmykaGUadwFT8tNG-Gx6xF7Fm8Ao-vA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100833917537410946371\">nachum kahalani</a>"] },
            { photoReference: "AWCwydiliOwpNR9rWp-h0Y6aMUFkWF9HEU1LBfktcdN_mryfqpLbm5PaPEHiwvnkhspluc_sGEiej8JzJ_MuE0PqVDVNebtSS11mTXFzxbRYEMMp5Lip5wTVmwFOip3aEtl6tqA3Y6-UfOnBGIVgRe-PhcuWi00O8O1cmVkDngozSKM0AE1iLViwZ6jIkRYVLS3yiGCxn_sSg4KBUcSbybxQa7ECPM_ZFZbiFdVhFc0QVPsk2_wO-5zjh2XG3VvNF8IptkFWyBsIHdEh-G5RTJ3mpxPXs_Soe9XGBYHogx4ixEDQBfW3tuunnmfhEEXLQeJmjlM3u5kkq0CDoJSx_835WywCrd_ybuFnYvXp8I9YjM5pTQ8oB3FAfjUq0OEk6JF_Dg0Ak2xr_WPymZwQSPRJ9Ouc537uwOdOfq71-E7Tat0THkoLcYpujApYsU_7Dw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118105766379723465743\">Rohit Srivastava</a>"] }
        ],
        summary: "해변 근처에서 다양한 베지테리언 메뉴를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 채식 요리 구성", "여유로운 해변 분위기"],
        tips: ["비건 옵션이 필요한 여행객에게 특히 좋습니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "베지테리언 메뉴", items: [{ name: "대표 메뉴", price: "฿150~450", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2363846960477405063", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A0%EB%B9%88%EB%8B%A4%EC%8A%A4+%EC%95%B3+%EB%8D%94+%EB%B9%84%EC%B9%98+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "바와르치 딜라이트": {
        photos: ["/images/krabi/info/restaurants/bawarchi-delight-ao-nang-krabi.png"],
        placeId: "ChIJJ4YIWw_AUTARWXWDIkMGwY0",
        placePhotos: [
            { photoReference: "AWCwydj7kXlRzVAuZdVtPzhfyiMEKq_MpLKnoqAhex-HthpeDKeyFegl1sp9Fu0HeLqz1xPK5CaU194U-UMxkjwFWzYuUR-irMv4ND3PPQWRWbYJ0hxK-jghUjo_2ydbb9Yjjq-nl7pQ8Rb--qbqxUxVuEYQG5X9FseVOrkaROtK6tPoAcfFkIozHcAIUMhCxLS11gm2GNadcs3o9HNoKuCImWya3JnFatEyZAtZJA54oK65RhSEolPip0__DC49xZ59bp9dPOOKhwkKRq17CGpgXsRqqQtNQnkuBIqmkKbpkQwA3lfD7Pfgo2OQNJGITw76lGUfXcAvQK7hyJJthxPG_Hc809Sjgt9S4_XBtDEXdYQ-5iQr7kwG2iluwHcX6p9_DGfVAPhuTQ3GYzHUH4x2jZfVNd58j2hti-KBMgF1pUcyNiY", width: 1125, height: 633, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107004895826155589196\">Bawarchi Delight Indian Restaurant</a>"] },
            { photoReference: "AWCwydiivBdAfOLbbU3-q1JNDm3ODvbluEnqo1TY9_N-Y5WGLa-KDVuCd_0xSHDQWrXS9K5Pl7iky6W2iPxajJMCz80wRVZqo1Edpm9px2fRmK3zxYpYYM7qQleJ5HlpoeJE2g14J87KmXkMTI9F3P7AMwmi5jO0fhzlYv5w2HsymZonh3tDtfx_J3oEHiwLnmD6qIyuB4YY92kd52VZIgX8YMunwN0CAOIws8TgaNqricggpi8vwzvLZkWRU-dAa1PYZFa1NmSKJNqSpD4IH4Glw9nIQyC4cPiBDwNEec8U0AGFv01zOe0AhBS7eOt44Z9WVAFwNtDBqoj9IxN9ujwHTGuC5BvkK8v4OHVGLDGo33KcoRMtqZEcxvYeeJf9O7JdjIMYMYEdDAt41gZyemmG_RGfQe0bRga2kp58xpAPZEM", width: 1599, height: 1199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107004895826155589196\">Bawarchi Delight Indian Restaurant</a>"] },
            { photoReference: "AWCwydiTyHP0mXya071t5m1s8u7wEyB1n2lxtaBTNvrwtCq5g4wMzD58EdCLPFT0dTkYRpFm_J-oM1qoYMvkWJYEZsGUkbz4QH4FkLSPHx3SatSiWWW5j_2pgwMLAwukpTYuHk-y6SrolRqMddOf0J8S2fgFDeABZHhjyVXGf9wjfqfTY-w9SPn5zvV6nIyGKzYZHwlMRdZjtgrk--A_7yxalaHOr-PreLbMlS5Rq4aqugkKpF4d0JOgzV_CeP9GHPbamhkbvo1eKJh_Lg3SN-4CHCRZz7ljA2i9MQQtFdtt5D2oSnV_YpfnP20v-7hLSSJtVgNvaTpA0yhAxS-EKTarMFcirU201xE_v9T9cvZLxhiZzoI3mD4mtM5gLUJr0dsfrYa6-2CTL8B2FxfLlR5eKapaBJpM7z_j87q1wMDeSmmz2IGW3kzESYcS6CDh0Q", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113805975037054844723\">V D</a>"] },
            { photoReference: "AWCwydiPnCjMJa9DdmDLCZtm6qNIP7pMntipKFC39JPuSOi9qcNfCdwhUi8BK_lp0-fd4dcD25fMewlz5yjfxPqQNKgQSrNGx9KgN4NDjXHbtsBifVvoCO3q6G_p0fd0tVHbz4hpsOlxEsc40UIvPQC8Cl5s5G6wbvGQ80NBQ9qhpIeaR7Yyy-k2osXl3v8vKhMxzKL5Uo4LMv2AIagVb7g9hFJ8sB2KWYvrFuKkR4p3w82izeA-Jo9J1HrE_kLh-5-rkK-leNC8vK6OOY9-sur3ycibp3xQ0NDWnSwiMFZbY8z3FP-K_Gvjd6iwe9D8P_gvG1LrEc0Ag3qzwnJGyr858aHRDKZRbFUi32xGZMzwALQYmP1WrwXsZ28fS7jubIchXlWVJ5yv209_8qtNc-J_x9CP4MlBFRc4y82FnNdXEJ-DgvS-rRbjyab2J_XFGw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104900977897706892643\">Miren Galán</a>"] },
            { photoReference: "AWCwydjB0knjZaUZ0JyHjPB8gdGeiEO4xG5kpaLASrXisSG_UG-5QF_pHoaL_cvgJQPKID2Qh4NXo37G0gNWiCd-twts5YuRMPXXqxAbsTeUaqWxIt8UXUyFHUZTzEVnMRV2s5JSR-ll9TlvMwdemz5GzreFECtO-nQm3BjDnEYMAF5TCIXI1skg0SubijYGzcNUMhMFUF8NRFL1dB9BX1IUTsktZxMJJjIhgJ7JCAkn5HZcX7t9i4LySAKgCI5PpfmzW3ckXm4tUP2dmKDAOrYXEmmclAmDnowahbykbOj-sJg1rhLpVfDqnIeC4By6Uy_pKbQxIMxUlAyAp-P8pnzprIq15DRTmdbmIerosjzyzTw1ma-_QvitbKyEd8fGkdyqAbIJU_6CKniCfV7hZagT5G-lPsD19GQmxQ1UhUuMOx57bSdS", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103872911264541260975\">Dw 65</a>"] }
        ],
        summary: "커리와 탄두리 요리를 전문으로 하는 인도 음식점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["풍미 가득한 커리 메뉴", "전통적인 탄두리 요리"],
        tips: ["인도식 향신료를 좋아하신다면 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커리·탄두리", items: [{ name: "대표 메뉴", price: "฿200~700", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:30; 화요일: 오전 11:00 ~ 오후 11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10214452315264611673", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%99%80%EB%A5%B4%EC%B9%98+%EB%94%9C%EB%9D%BC%EC%9D%B4%ED%8A%B8+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "루엔 마이 레스토랑": {
        photos: ["/images/krabi/info/restaurants/ruen-mai-restaurant-krabi-town.jpg"],
        placeId: "ChIJ5ULwEFOUUTARviM4wqjwrA8",
        placePhotos: [
            { photoReference: "AWCwydgsjLonEyWWRR4DeHg_23YRiGlM_qvQD4S5WFmxJ0-DjBPUC9mWBAQwhoGHNMWqpmxXO-O9Dwl_FF_32IKSnZpup14nHiK3aSc1J89P2dks1R_hac334O4p7SM5wwok7pEXWj9IJ_JUTfgemVHlrzXzwPPmcF6ZDKxyuOdHMuh6BYnxkwT1QSeLCMhHX81zjXsNdWocJVZq9EdUwqeU5MgZpZoV-oztnPPGJbrrhtWm-mAWcZPhQF7vrFUgjEK62Au1LNPhN6wL2wiKuQe8vY-F0L2k321dgEPPien6zZsQrJV3ID0KatX6Lhqb4TidvyFkUlujdgkDrkdFWj7c6fdXedmtcWl-EnLhU7aBMPW32sk7jpaWxHjqR6NN1IR6eWEpijp-MTogNfBqT5eS6bVJF_uDVCGFvPjceZXBX4T6mA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113375927227672243391\">TJ</a>"] },
            { photoReference: "AWCwydirBPQzxd6f8RecFC44lYueOe0k2jioBI-roWwcEUnBc7tc8Oh6kf6YcqqAZCs3C8jjDrRg_6VcAkfXWzU-urSMCoFVxApyALfy-QK6DIIl_9c-zMf4fhf1l4zXH_ahxxRrIRg4M-BVy_K1h_UIgdSlpD2cMSSHjO56x8CtOlyHxzwJMhkgFtPhW0DjgJU2L4MOJ8t3Yfb1IhY_DdvvQXtlNhZWueUxvEKkR-JU2rB0Klk-8c7YT58UmDYdUinKq7PailYUYXSKKfDFOfJY4YbWL39Sx7PXvqLVvg5YE1bKMzSzFxp3JolT8kwLybY-UHMtMNy_Pf61Nz1ZpArOchzfP-MbLh3tZw6Msxsbt5MJ9Qfen0KlEcUwn3Qi5vpwmsiHiZkP8LSFbR7E43nMXVFSBEvHc_udzF8mlDZgJejgef5xr6Vjo9CoXGam9my1", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114341938409201869403\">N pankul</a>"] },
            { photoReference: "AWCwydjfoVLxH4EELX-NHh0_E0jYRwdDSjj9RpAl0zEHS6w5bUv0kobZHEEFcEhVBNClWzxFBQaotnZuh5-Yw4RUybg2vdcm0X1v_Oo9ebUXnz5QTJAwS_uEZRiUMbNsDkvF6pNfSdQwD5pnHPSPOABh0530mBarrizsFtvDtLl2YO1UmJ1_zu7FCXCRH_l2C4ELRCdbnf4omIY-rDT-V9x0e_TCPJv8nFIyWmbi0a5wXv8-ijAKtYcKKMoOX6cpSkVnBu1H_dNTUBIpmsqEbbKXAJWjz1rloGeGg4Scn1k1JYTyhPU_U4Yg-n9fKlSVHh6x8hF6QWQYS9cup8gEK_ZY5wp8TYjWRw4k2dmDYoMEajlrOglvHOiKlG7Y8q-CcGFQAkCnbf0KppPPpBKA76asJsTdeXHocYGP6UmCKclf3V29bkr1JDRSeA2vzCVBPg", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102541750360806840301\">Nuttawan K. (cherry)</a>"] },
            { photoReference: "AWCwydjkTWQ91jX7lKZ0sCVQEGNttJCR9esvTwXHc2gHFI_ygBmaRtz0QqLA6Y_qrkmLBel8KoygimvD4ukMEEPJZpQSwFPnOgQNCuwdHv5uBjnUZUjHDvEVwpqwNp_zobngfpijyk4JbzR55vO98P99W3zxAPdfimhs9b2LMvoK4MvJK_rE4MGlmexV6KvIb5BSyO8pbAOCjMDYojrdNVNCCjCz5NXh7iL49czRIsaNR9NpyE9EcmXE9ubjFlxB0d6F_2F0edhehJQaDLvMsAGUZKOuszN2u71E3SbPpBb0a9tPVt-QReiXM83EgOke4pdUMw9iAg0mscpJ26IVKG5WRcJOIqAYJin-XHa0CCXkIAc41PmsAMMiAMS9je1DUzJ8cBejiTHlZU4Do3J8uL3Rt-eV1hbYAQlmIxYmTIKlyXJnU-KwXl41aysvAzDhxTu-", width: 3979, height: 4550, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118176227229612855159\">Julie W</a>"] },
            { photoReference: "AWCwydggUPl6WdcAIikg_ZZvMwf4oZtSQVPHIeFYZf_kdA0BFmUKDBAvUlqFyf0_ms1wyWmOAftGtJenQF108YbsNvwGE91tYKuxNfO8xV9yMKWMRrzZMKk5wkuQgsfrzh2hfkNeG2G7NWwBuvi3QOqhU0P0uxzobzp9G7Faj78f4xC0I4VelHjUHGzlOJJ8jOHKACfLFJc6i0aWfpcntXmZL4UIicwYOr2kE189h9aFXHTKhv7j5GG6wTH-oKtt5d5Ca4ebb7HkqJ9e_MHXPfwLvTEDc0DFWffo18t7PIsSbTwZxlyv6biDxJUTisxOIwYf7z8z_b06mIMvv6ZUCp1WdfNzO2vb0bLBoTuyUiL74odqsyI0otUdNsoXfU57YfLZnijuZOvxI_z2sJ8Kmjz23qXhnqfObMcXJETwXIDfEB25DXro9NSP4ObV3vv9qic4", width: 1144, height: 1430, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104301770177124736792\">Nattaporn Thanachawengsakul</a>"] }
        ],
        summary: "태국 남부 스타일의 로컬 요리와 커리를 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["정통 태국 남부식 커리", "현지 느낌 가득한 로컬 요리"],
        tips: ["태국 현지의 깊은 맛을 느끼고 싶은 분들께 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "남부식 커리·로컬 요리", items: [{ name: "대표 메뉴", price: "฿150~500", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:30 ~ 오후 3:00, 오후 5:00~9:00; 화요일: 오전 10:30 ~ 오후 3:00, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/ruenmaikrabirestuarant", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1129542214166782910", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A3%A8%EC%97%94+%EB%A7%88%EC%9D%B4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "게코 카바네": {
        photos: ["/images/krabi/info/restaurants/gecko-cabane-restaurant-krabi-town.jpg"],
        placeId: "ChIJozpAo2GUUTARABLcICH3H7I",
        placePhotos: [
            { photoReference: "AWCwydh9A-tgQuzBITtBVc7S5fii6_ETmaPx37sbMJfaoCYt4FYu3fV4VkrBiOP92SVHC2qEX-_4Ng2Pq_qTKCbknHzVUHErHC0WIZyGvLz21Xg1Hl3bKX5IS3C-hasAH0lb1uB2nuavfiE-_RLC2ypxaUnpX8s6DxHZclAkrZL7BaQmV1Pwfj0Zp53nq4GApF8AcNxuZvAB3uF_A3HgvOjKX9oLG3NOTcyhvg263Gj3nuKsYKCblMtqWw86z9nETRkHmyhqZlsr0T-TlR4Vs5RmGzX6YHDa4Z06hJpWUcGi_QwcuMqAHPF0B9hxdzuAeMTBW_gkAJ1jHmkTuznSWir5th-dqe-vd8qwf1aO2RaMPxzJOMIRQ92Q6My94Qdf0UO4WZzOFqPl2PanqEhJ3X78ZV56j7C8M0_nKylXteUyI7G6AA", width: 800, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105809374349074538529\">Gecko cabane Restaurant @krabi</a>"] },
            { photoReference: "AWCwydgYupzKHatL4dzrGkUMsfwHy86v72o0ImHnZrIolLZsNth_Wkp7x0yGgiVF7_vgadjRltW4Y0WeeRGK936dhp91CPuQPQ_yzZap7LtgyWPbZBliywg771gUI_EDUDKOuqGHSm4ey--ZvfmbrUWP1ckhlpGqe6u2baLNR2XS5Kg2J51ZWibg34uGA89aFte5nRi519yZo5NDJDXlYWv-whmu5WBHSMfnIJHpiK0YnpqqmZ33ONtHH1bHPVV2UghW9xtNvHTtHdd4IcDuE3QaiukU1fEuOx4CUsXdRv9Byz7BibKiqpM-xK71bVD8ABZphrtME4fp_35xAOUmPG8pGnzvs77nDzB43pYT_RTl2ABcpR5VYRifw7H2JCw6ZBUHAMbk-8JYoBufTtGORNH1mqsEGEzYwqM8lj3QF7y-NMQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110880311122372821663\">J쟌</a>"] },
            { photoReference: "AWCwydg8L2ZKhS3pP_vzBNBGFh_7lhrkl7DWsH9ZoR7mh5pakKNKUKPYj8VrEn7HhvglC3KzD92B2t6Xrn-TiCwvTNSMUgqnveLmqqf0EGQqDJvtZtfNgDB_r6wQhLdYQKjcXkj8sEMiUaL35rjwq_Z2t9ZANRiH0JdOHn-KXvvpqt4rmBNqAU1rPiWPc6lctU3GCXgoyeTMdP0q_MTaFTDQNMaEaENq8Ajy-b7xvE2tqyPRoIo1NlGYuYZ-yfoq1V7ndKUxrGZOYS7I6KucKrnwrqaG_wae-0I46egigD6upq5pm-WLsb2WCP0g07dR8VVJYpf_ARGb_F1NMrDbTgL8WcCkPZvAo_CI_ITOMumKgjBstx4r_BLMULGuUPTZy-HYtBD8jBqAzlt-y_z2PS7TSil_9DpoBUAz4zvarN3L87jl52gSwzRf_B6WCT7ZQPlb", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100157958684095876798\">Chan Meg</a>"] },
            { photoReference: "AWCwydi0_D-O-IxdCRFgaRuXAbquLEnb9snyNIVUg9JGddnko4Bh161-WC4rfGsVOhCwkyFHMDLcAbHegRu0qiSrXWL8jk_MV9CHPh-bYTk-xvu7Qf0c12h7vRd-nxvFbdz3nAt-QaGZsXTpulV2sMLc_NGZ2yoK5oi01_5zG6jVrBzj3t2XvqvJw-hiqozSArO1GTv9VLbx2sO1c6XT5vM4uHVlhHBwstERbmoFPPclsOGe6__hM_K7JFQZHbl5eH298oOC4VS8HPy3q7SnA1NcMxdGunwGohLIflRERRO5RSaymEOS9RB8NFYzOcUauAvforal5grPlsywBeOl01B2BRY3EPutgw0iFFEEodTzmukZbQaw7et7UB7dhn_ss1WRSNMSZIOLnaMA42044YqIHWecHR9CMO6BxwNPIJ3IBdLGNuSPWJx2euRWKSpLJ_o-", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109533006941448741285\">Daniel Starczewski</a>"] },
            { photoReference: "AWCwydjEFuDra_x7ObtvvdtVHmfgHi_-GXq3mjHzhkYKaXdTbiC6j1Sy4dciKKWHvNuWA33fbYk2FY8-CwrrP4kusz98-27eDfVeFXI8OtnTauqBMlTLyPfkH5Z0YWL-xcv199FrXALIzEnAB_b-0ifkyjy-rpkua6LMGmSnzo7V2Ctzcz9PzWZrkXHH9Qc0_00iZT99Pf4Y2EI3dJEVWvOlBiBACHLzKIYdON-m63MJ74sfwV9mHBJuTdTpL7GeIec2qhP-Xv1NXoaqUSFHaT-GM-NnwCFTU0le8t13dHvSs7hSSiz1i8E4PDgoCb-uLFA2MIPfIZaeMEZ4loIbY_lMfDA7eUq9e9_hFs1TFWn0qjPoC9MHtxRaBPDEGoyhhrBcWwnYpoSEYi6f9df6qwh1eoYkpq4ffjn0lwka9UsZ9OF1V6LSNbWPmo7fgAMM2tdi", width: 4029, height: 3022, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117021600159957040658\">Linda Cloherty</a>"] }
        ],
        summary: "커리와 프렌치 감성이 어우러진 독특한 퓨전 요리를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["커리 및 프렌치 스타일 퓨전 메뉴", "감성적인 레스토랑 분위기"],
        tips: ["특별한 퓨전 요리를 맛보고 싶을 때 방문하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커리·프렌치 감성 퓨전", items: [{ name: "대표 메뉴", price: "฿200~600", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://geckocabanerestaurant.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12835249184686477824", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B2%8C%EC%BD%94+%EC%B9%B4%EB%B0%94%EB%84%A4+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "카오통 테라스 레스토랑": {
        photos: ["/images/krabi/info/restaurants/khaothong-terrace-resort-restaurant-krabi.jpg"],
        placeId: "ChIJOfChz4G8UTAR-xfcSmu8At0",
        placePhotos: [
            { photoReference: "AWCwydhjIRxgcAo4MRSdt7cau17lH7N7zLLGwDrwYxM5OSwP4a3eg5UI3wXwNIufkvglsjdadNyjXA1MrchNppx8J9Hy-8bE5LB7NWcvy8fpl-8NVG4m1j77uEVjqUSx1z_R4dNr_WfqyClGp_D74t0MPkT1-738mA_20Ft1HwCu6l7pjSsYNHNoQqXpyig2jH_SRsriFogxkP4NWsY5il4QO9ZNG9ZPEoNGbrQVTfs0AC-tzhQ25TAbrhOFki4fEeOTWLMbZDY3XBvRTmAZoZdJpXkjiNMeUQRVFMoum5abBv615NnMsYAIqA75ScL4NP_7CaKxYeysAfWwltxqRYKqvL11EoF9m1AVuSCS3pRpI50neM6KteYiWhb1KUZvLQ5631ji2pFBqQH4ZQd5PuuPrElxrz4N71dKFbHE94hFJ0ZRNM_tAvuUNxdk_w1-5Q", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105372667258141892181\">KOKUNG biolife</a>"] },
            { photoReference: "AWCwydjuygKxI29o_jvgpHjKmbW0dm5GA0dL35OGaD-WKHs1yx99QZ1XFeLFQcPrGpFB_wV7ZxB5RIHdIa1WCZ27OI9VLrOHUs0AsQDO1XE24UBw7yNaeXJ14dJZFjtbm6V_PHr13IWX1Oer8wxhmoTuwJ0IZO2Pe345Es3Mc1oC2qK6_jZeqTynxImzT04rj-qLCPV0p6qo_l9A3QxZDCq-Ck9bmbA60-loh6uUCLKAvDfmokZlxpQ9JMiK6JqtknU76mUO4kX4U5nRWKiHxl7E8bvYMBI5H0NVRGrg3FJ0l6yol7e7G5J1bxvhL0OrmFawYBQwiQnFANHcAWey96QahG8jgk9LBT1WFZAuLxxSBgVArSUjc6D01SmWYlBWQA569W5ObDKPZavb7gwNzmu8PE0IMWhhHHjxuIfNSfNWdCCJv0c", width: 4032, height: 2269, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100466836777167172436\">Khaothong Terrace Resort&amp;Restaurant</a>"] },
            { photoReference: "AWCwydhn8FQaF-qj-LBjMnOjJ3R2rrVqsQsXO5JXAjpjtc16ism0-0McbMNmdlReySamYVOqWnnJcR4ZBySEzc2xo1Dj383WjyjoQJZfr4Mrg5hrGkGikSf42HgOJD14xoNap7l3Ql31hvQcLrZMWP0QmZzLnjBky9ihbYQT9lArjYvqltkJfZIYkXm1oP07MWvjowsK1-ca1-YZbpao3qP42Ca0lh_H_XWp07uVPRpbjISj8mBqcoOhMx3nPvzxXgpbSvrAOQsC36MpzTvyrShJo4FiMvfBBlMtXdRnJ_KO7RXazpjY0RNtOleFcAAI5iUndkBXnjWXIIcEeTzTDGjMtbeBD6367Uh_XI7raBOeI0bHxB2LjwKHzGCuwQEgySHrB0O04eVBZf5Mk-B2TUXOhYdRWvCjWgSJ4mxuGKndlvwsJwZljR5XC7gzIYcp9C3W", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100618930154468743023\">pavan Kumar</a>"] },
            { photoReference: "AWCwydiQhEY5WJaCQsydE5chvfaeKWU_yCZ8tvu-EzKcJwOBjxvwbka4hgP0_5ztPpK6iQYV63ikUIl7WDOY-_O0Cc_8TZ0JqAnD3qZxPngME0dVQlUbyaRqplvFWA9thJoFRFvPeM5GzAISGPOVmcpUx4fCM5BWmbLk7AfyijSShJ3X1nxua7T81gUcwiZxFhSuV2tXFAH6SzaLV25jKYG65VfUep491OMVpQq9vHZvLdivS1oQ35gvmb0fMR772RCO6L633_itYNdiwckv-jH-OuBVUFClGWtgZP4fxHBQicyyIdzHY296TpQu5DPqkZ16B93x6np7TehpxVSEtBfpo5qXLd8z34VB0GHeqJ5rMcrDlVrQXClzHppQl9Ot93-rA4D8azZzORGP1ECGU03M6tiXSDCdcffoFlAPVDxo2dEQPg", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110200272799150814954\">Regina Třasáková</a>"] },
            { photoReference: "AWCwydjGMsj_tU3rNe7H3INu4rCNU3H4-ssc-ZPH9X-8Bny0AcT0dRkvOMhjp94OgPdRx54kudBm9_9O_9aOC9vqIZVouomxJWrwBUOjRXybD5_eeuYdIxW3eyXbBE2RvR5Nm3xPSl662IgKKZr6MO0W5lDhZOSgtSCmWgXtm2u8jfKTfBmsmD5jY0m1BWW-2U8Awch0dKjdPjAZX6ZR6UHrPMDfXn9c8Opr4-kT3drx_gxBBX50_m1ovrOKvrduSQPZUmsaGiwLPA2sMycZCk6jIG6CLjI7Q-cBL9LYT6xgnLr2bnWflB9yo3r11YhWrrIuOxzmDDqSq3pxQAWQVQJ6gVRVPZbpYLfrxq5xzeO4kP72-mCq6uo_TdJBPNBRa4xa5mcwcIHDpqJkXrZc0vGkG-NwaYE2cHvRr3IsfJbKYLwEi9im", width: 1620, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112089414554126087681\">sawitree pliansakul</a>"] }
        ],
        summary: "아름다운 바다 전망과 함께 신선한 해산물을 즐길 수 있는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["환상적인 바다 전망", "신선한 해산물 요리"],
        tips: ["전망이 좋은 자리를 위해 미리 예약하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "바다 전망 해산물", items: [{ name: "대표 메뉴", price: "฿250~900", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10202228979747870272", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%98%A4%ED%86%B5+%ED%85%8C%EB%9D%BC%EC%8A%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "탄두리 나이츠 아오낭": {
        photos: ["/images/krabi/info/restaurants/tandoori-night-s-ao-nang-krabi.png"],
        placeId: "ChIJS8CbPA_AUTARNvDuf79zvhA",
        placePhotos: [
            { photoReference: "AWCwydjk8dzPrNsmLdFA1Z2uf4ocwHhVfIICuVvzCxyfX__QnCHlHnCuQlIMee0_XYATGrSnXd5uol7cDN3dyhBnHCm1SOt_ulaXvRIK2gW7r8_Gx3nO87YGXaepif0NiFN0HSxQCQt2llSbHeiXOnlkdxa8yYARAcwkqEDX9TDA-mFEohI52B8ZRXCNcZXoB7c01jco762yVNaQeVaIAFZCea3gBQkUGUOrKl7HAxPyvCvJPT6HQ4H1uKdoUBgwyx-lQyy54ZBKm0EUdU6MnCqCt_9KVAKeqSL2YUgW6E1tSoTfHxd7MpvkAJvI0sao-GAuyORaZBJ7JcZ2f1YgW3uHgguJHY4k5HLlFA16KOqPkdJJ41h2NGtdfJmckVMsSAjvhz1l73qIUlqoiv0lz9Y8iuPQeZPE26K6GjNQT27BSJoyzxXC", width: 1600, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104273686962905696081\">Tandoori Night&#39;s Restaurant</a>"] },
            { photoReference: "AWCwydgzVF584PJVcIi-3Hz3R_yrpPklXewtzbzRY4fs6e3KkTpzWh6bD_HexA-pzDjmm22bskAFXKT-RyjLNVhx2TP0tuY9_KM-LqTj-Db1SUoswg8eaU9ihrhPsgZqGeR0dWO3AW3YjdBgBqhlzif4SQ4qYuo5VNBtHr3Un3fl4Xi6Q1BBSFp3ehnnRtcLQ48tEPZo00rehvF9lwAMG6bceSqtWiyMdFOG8iilcM78XBAgvoTLphMaVKhuiQNi7yCWrmJJM8_IaEAP-rHM_KDQugZZHeWbACpRFOwhb58-UV1opyDDnN0_W2tPXmM8eEHZH_lrG8YdrxGbrxcefOyUy9Sz4KLxn01OAKNyM36ouhoRNvbZKAxO7o0lgJIsUY1DauuM-nP9N7uCDHEJKu5G3gLRK8tBh2AZWynLfD-51UQpTePZf-tjJcqDchMtC1ZJ", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102614263795904247512\">رائــد K</a>"] },
            { photoReference: "AWCwydgRTWtSwC_5mmcLTeLuQ1WOp4ExCiNt88XU8rKEwD9dibps_WY4MjIG3BYEbIztB54G25RMyJsMBXy4sisldoLBUm3sECrFmCgK9dxtlaRFZuoaoRTB3DfzEk7XShdlvPyPRPqABe1Z4lcvtj7FVUIVmnpBA2jdPx0Oi2pViADHoNRSd1WyLwTuHDyVJDZzpvpJaY08VzAuNkRcc_EyMejA5xebRvArshqkQN1adX_O_2NCw0vweFuEFbwiJurhcdrk50VUB4LInrDiUe6pgtKLXu14NFUCmhvzUKQbBWVHCUARhcsxhoScFZnLkndVhnRuQnJUBsQJteUtPUnIEAB8QEk15ITwAzJxHy8pYiLPNZszSruQbvKNKUODd3Pw9ezWEjufaqZCm8Uj-gWDKBeNraGBjYh47kEjLDy-FLGZBv2k", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104273686962905696081\">Tandoori Night&#39;s Restaurant</a>"] },
            { photoReference: "AWCwydiBDhaYTvklNCZz9bZ27chDf5inLoi566IUVjmn47JdBJF0OWQBcWLgtRToD2FkbgUg7fV1cW3_XpcORcpqqP1uYvziPEtse34g4KuIPeOuQpfAYvzSDMVUiomR55a-lUF-xDHxuXv8woLe3-Sk-EbSBwHFm1RmRChHIFHymH9UEcuugOho7uYbe_bJ1NN3xYgNTFdVbn8FG0eTDDjXybDSGAFHh-wMZuapCzHz-fQ-LW_TSXm-CXHBLn50Sxz0WMktlEKuePpR359RHDxoiQ-hDKqzPji03FkoakOuCwVGQaODfI-jVAJO1e-JyGKLjf164V0w3eC-Fu58jv_CopuH75HXk3vk7qCZpj6k9Ai4csqtXvDytID570clXLFiuFbOHkpnV7VLifdNSWo-EIieOE3yH50rmM5uZ8VsY9-8iEufUbC_vms9-4LImQ", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106887911232916869667\">İrem Büşra Yücealtay</a>"] },
            { photoReference: "AWCwydhokgIp3-Il1g1SFlf1bv4EJsbZNoADYoWYyjIjiJy-phbSE-xt4PJ8Ar6OdsuRGW2TV0MZjZac5MeN45NkwXEx7eXGYkyHKroqOAKEpsAS90I32Qi1oC8zLFyukuMD3r9NSxtCy2U205X-0dmfIZis_-akPISV65RwDV4OKnlOSi-IyIM6816qnaqySFZzN08bvoJYz_dFXVE3v4I7mv4WEMoYx1Nh4ZIYb2wz_dKd7eaEx6lOrGWX8axq1a3XJ4e18y08-khATmJgjf-7QC04d9C9O5ZLlOqZj9EP1BQpzNizpA-XGjSPj0upxzrcCCtBZ2TdW2pHByCSa5-TSMPnqoP4VkVjYumml38iIYfuPelixIuYBGkYGy22TcN79e8aH43b1ter8ywC8Jy8u6bEM9_ukveDSHDgSP1krkfMoDOErdk5-Zt9YtTOWtZ6", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102614263795904247512\">رائــد K</a>"] }
        ],
        summary: "다양한 종류의 탄두리와 커리를 전문으로 하는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["풍미 가득한 탄두리 요리", "깊은 맛의 인도식 커리"],
        tips: ["인기 메뉴는 미리 주문하는 것이 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "탄두리·커리", items: [{ name: "대표 메뉴", price: "฿200~700", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 12:00 ~ 오전 12:00; 화요일: 오후 12:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1206529016504184886", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%84%EB%91%90%EB%A6%AC+%EB%82%98%EC%9D%B4%EC%B8%A0+%EC%95%84%EC%98%A4%EB%82%AD+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "마사만 레스토랑 & 바": {
        photos: ["/images/krabi/info/restaurants/massaman-restaurant-bar-ao-nang-krabi.jpg"],
        placeId: "ChIJr_19ceLBUTARUARTe3GLKWs",
        placePhotos: [
            { photoReference: "AWCwydjLWjCLAkg4LWqFjV4c29O3iSZgI9mMPGE1XRYirpFWgLIQ8hpRlLmsKm9yMCfj6WUZcX4KB8CibDFOWBuUPQwXftVtfmqEmVOKfVFjDThzH2MN2422Iqr3MTzpWa9sovtJk6QtTrNULsGGdpG6rXJ4gC0r2WqqHV19lI1k-slWiznM_IsN6yFgKCUvvZG5FAO7yr-KOQF2ezhleRoIORgQFXqtGoPlRNCC6ffAN-pTgKtcTAnNWAgv4GfU4Cy5L2MRRLDZKFxQKAjjY_YV5tu59Hy_YAeD4TlDwr4YgNeKYEpVKP_iDYE01CPlJoYXDbDeTec6dkHbgUu_OxosGsKS_7B8cghMAzjUuSX7QPhmiQS7hNOxA6P0EBcDTQnJwQCrrFUavgFvVXrIKQrl-u_94VFFiXdCJ3iy6nVhengePg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100970440768610789806\">GAIA Kitchen &amp; Bar</a>"] },
            { photoReference: "AWCwydjD3elD9jIlC9VqH2mhvOCvUeYhJoK8gKqvaqVsxAvN5mWqQb_NCApVHk21HqqqvFch7t-VNXYM31SgSSeslPvvzYRONqBde6pbiaC0dbxxA7djbj83vuWXqgGWF3qIfsP2RyyWcT1WmC0GTAihWSAlEJ43ftr4rWGQ4u3Z0tmkXLhii5qCTyE4oi0gdpdJzpxHUlwK8xFc-GYGwJS0b3-QUgMklUswHCjT48raRH3zIXuPMXNNavScuHm9buGrSW0tW1ON0pZUSve0HvxWiQYGMaAYt9-VGQSMOTCOJLWywGRrO5jCLif5pY-KiWns4y6OmmOvHZshVOsd6idf4U51GA1fwCeXtASa8EANLfKKfeyFNMVKoK6XqV0IEtfonT6aqBrPnXhOu6aoEhYYiKwKA0N87sPEK2HPLl8oGW1JixWFZZ7WshJ7sWraEXma", width: 2836, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100970440768610789806\">GAIA Kitchen &amp; Bar</a>"] },
            { photoReference: "AWCwydgy97pROonoOcpOZePks-rHryAzQUES8HfHyB7tiOJUDJnIbKbYAk4lLOH09NwRdfBjROW1-xbdBQep7L6p0VJuZCuAJgve82PqgjDukswyeToaDqpvQBf0p1a3JtKYKBTTSryFJQn49i9WhvkbsK1Tq9zj9OODD7VTHni8MuTmVmJg_53sW0C7dB141GkfxFrBEZVW8UimTrJLqA1pWxMUd7alZWxvES3bd5b6wUqKsZQGXt0ULgW3U-Cannjb8aNnZ8Gqn4NBYYsLtbLheHlL3Tujv3kSFyA0HXtLrDGeMfsc3w3bAZT17rbhvdygJx_yMrF2BKpy127OuVhJkoESRpQ3WCtLH7I7VuUWA3OA_lYQm8ek9AUqmeaJ0YLDKDB79j-FPyozcYP7NNpPSWS2rcl6fH9X2L66RbW6eidqPEE-qX0LtWHY9GPzW0Iz", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104566836705224922367\">Angela Simmonds</a>"] },
            { photoReference: "AWCwydisbwJn7JrmkFtB_BiQzgj-V7gf0pVHzPUcfsY3REqlPMExL5UlEB6jezivd8hPFqNppnNwU5LhckebDy8fs9JbFk-JiTq-sCJ3L1djHvByjF5TujYhgx0AjYxdLj8-bqImwSoarzN0vIhN9KdV-MmgHTarc0TGeTueGLPi1Ml8NBQ7aWH8Xj2dN6tgmHLdjgEr8RLCF40gSCC5wuGHzrKvUF_14Hz56R6BVxcDsX0Rcz2botRaPlE1ON9bQGvW9cgMHkDmwt-TtT0HUgrYKx5_kFCm5Ye8zKE_8YHut8Ly73OZnOWy0QGX5PXPn8B4Fm4t28837ZVaMyWhP1s7CuKdkNPQl64cghQJsHn4_-Qc6r35boja6kZw2U5zoE8MTDvuAbWxXbPIAuUS6s1GYzDGyuF_7OJmg71tvr1vs5W5yrVTqFhsXQECih7IJg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103403171222588440204\">Amy H</a>"] },
            { photoReference: "AWCwydgak3RwlZ5ccAqGiDo7GXDegsOub0FX5BCrk9efiDNtDFRyVDhW_A_lVqTYXIGnxxWxyMgmf3s54gMXTREkZVQNQ6chzNUlnJXac_o9zS5QNXGSYPqNPq290F1kTShAgICG35D0d3yx4xKmNoUEXv66JPdOcT1C71FAmBDa-jfVl3xPvghfiMLejriATjm3DyFfHbXK4Z8eaj-wHpyYnjF_KRBZJgce9dlKvIso4TkWMZeF-e2N0FB2uoIsliTj4KNXG6ZlEqYM6odvcQ1HuJZI-KVeVaBf75BydVRaTMoa8eXI72Rka-rCbcDGWb_KDui1yKe_8zD_g0nfE1_e2K4NZzJk9Qn0gOU9S3b_U_WATMrK27gt-uB8z1CYb_KPj8CrVjXTJri0WhrT68nsO270YdvJ1hkcVYFtwaajWddxhefpU5kkOdyqrWGXQBS1", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114772906181736318720\">Sanja Kiselja</a>"] }
        ],
        summary: "정통 마사만 커리와 태국 요리를 즐길 수 있는 고급스러운 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["전통적인 마사만 커리", "다양한 태국식 메뉴"],
        tips: ["분위기가 좋으니 저녁 식사로 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "마사만 커리·태국 요리", items: [{ name: "대표 메뉴", price: "฿150~500", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.myfunnow.com/en/funbook/3383093273229/branch", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7721856355620029520", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%82%AC%EB%A7%8C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%26+%EB%B0%94+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "타지 팰리스 인디언 레스토랑": {
        photos: ["/images/krabi/info/restaurants/taj-palace-indian-restaurant-ao-nang-krabi.jpg"],
        placeId: "ChIJnRq0rA_AUTARGdF43EqVg4M",
        placePhotos: [
            { photoReference: "AWCwydi8jGiQgA2kn6sXn6Gc-Fj76S8gE939VbXWdPSrCZaOJFreG7Na7oVcAoE0tdZBS_eXzH_h9aXbYiYMYxGTXWIGI6d-JHIExq0yb0tsf8Npy5s1n_V_dyw6f7H9kasJOAvncoXRm4_GfKh2lOkfGRyQ5PF7mfCQieQKGnbx3CWtlMeJ2PMNTKipxaHpzD30y0BxlrQbCW1-CqrR9sKv_vrUgZtGn6KzL0nEuR1Rno21pfZ8U3dDihQ4Fa6_8SPcDOwstVUNwadzmE884xYib363K-h8BVO8UY2785_Fk8cqmrBM9nM4ivqmpqh27_fs8AhV7bJApoS5755Zpvnx_IgTLGseJxm6xk5gYbYqyeYwSO4Bh9kSyUCwR4qRuh8JKK66mowSO6tDqOkeO1qjTFH3vWM9hYor2wjz8593DKw", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117708239144410131624\">TAJ PALACE RESTAURANT AONANG, KRABI</a>"] },
            { photoReference: "AWCwydjTvR3BGUqC8CtoifnfY34Vc8nltszhjAq_f9mfrbT7kuC-bE9D_dOz2se5GyelmclJzjYgNYrEaF11hwHvEWlyMAuYmgDzzmd04kejFRuwReoZCemgFOZo5pZk5Sm0OdKKEW2pLwJmV0FPI46DjnmjRxVpip2bZ_1fbODB6Utpp6SNAr86UtQwhGtsYBEZUj5uu66hpe2LAbC8wbX-hcDPGOqLuZW_biF1tjZGCLNTG2FSr8iN4r8EfUmfLe-8bGLe_YmncgIVgB-H0AUZKIrITytu_85oPaH-fOoX5ub4BcBm73jj6esNXAS2fpExQIYmaWwAc2-LJCAfufAwjBPKYMiEJwDyLT7VILgsTWkfzlxUk7zm23o6tJc_b43B-s1S9a3QNN8OkmpjqRfYwprPKjc4a71xGfVck5IF4287oLWk", width: 1700, height: 1070, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117708239144410131624\">TAJ PALACE RESTAURANT AONANG, KRABI</a>"] },
            { photoReference: "AWCwydgY5aP_NzzEAOrEQIvYiVnwMR5AqQVAWgWcMmoSo5CEqF8CZWN-IgHqrPUnjFjHK-OppHT2YbgAxMnHvZRWzaf_jrVMboZKU6-u9LzmzAAnQEFVO-0DsbliK-3SCijafDMvXGL0S5dSrJA4pGeAdLOVXzuy8ClssmR_lNwAILmfhE424qzRVVY9db-26Y9IBllb3CehYaiolWqtTSfQtSuCPfd86AzU3hxo-2UXtnOtMVHBhDGhao5VAL6zYl9liUKck6hdXOyVOFKBZCH7FlaJ6QZKwZWwScf3paH4Fohqj371tQdrHq_QS6oBRUXetHGiRwXU8yXAQ2htHU9NLP2IxU3wImY0yMVg1Jsi7txbKri68HGKP5ZYuOEglnmpCnk12aOylF7l9mjDSYTADWT37QZ2DKvEKQuh_tEr6rx-3E_Te61djS5PGkMhOJNY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103337864095034031736\">Priya Shah</a>"] },
            { photoReference: "AWCwydiwjHo00MKvegAz60KboJuVBlslLOdoCCPVzGX9gODipSelTsABUUVKWGMO9zl0UuSEudnt_YM6QvHRBtKLpdwIDwbi_tTq3owf19poOgp2-zvW1zFg4AlNs8nSme2JgJVBWj9ei6Ks6cU4ZkBmfd0ViErakiMDoDrcjcsqFOiumNBtfi8f6nj-X3WHb2FvJibdkQB1psWNNbEJRXcBA1ADkcNajfbEnsiehpg7uFVg9I_4glDIF3kjyQ25Bsmre6fqhzG7CgNdLOy8LmzAFNPGgGKAEs5abf-8ixYR4IV6yCYIZdPnE5VgyuXdz2xiWlwq_yq4sB1yS_p1An1r_6zV63l5yBRX72l2Qwu6HOWu3Uwy29eOb0vgT1TLr-SirRU-AAtqr4OUyn6cuvogFTou3QiFmY8zpO0xFtFsbwdkyd2cUEpygT5vN5CDk-uo", width: 2944, height: 2944, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115445706909046040586\">vijay chhillar</a>"] },
            { photoReference: "AWCwydi3IjyhW_FlcXiavi2apKxyVHqRzKvJt76iY48Pp5yu8xejuGXmUA5DEitB57Lfv7Ue_M09CDJaQPPui2YPT8DsGYCFIu-DU1Q3iPz1w7qG-va6l1tLBdh2urOzp1GrHfX9Jsw5ZNO0ojSSTx_527Nuw7virEUXnIbLP_qUcXWdH_uG5jMAJ2oczxFEisozJ4dIsWy0BbCMKkJ5m-laeI2Ry8-oEB6cZgN9Xd532l2VViQbbibnn04YodATKD-cGbXwRQXS8Vu5MW608UqFzT3aIcqwB-HMXLQE7TTB8ZCnw769lljcsaIU_PPDETB1dbIBkj0Uas-vrqu0BKpJ1kmMsSy0zqRSCUciXg0h8hDDWuYGsZQqhxk86WECeHV_XonNRN-JoNeNVvghji_jNbdI7i4NvCS_LDN_XBNPBbPJ9XXv3ozzBpmC9xL9fYW5", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102352108147081853434\">Akhilesh</a>"] }
        ],
        summary: "커리, 난, 탄두리 요리를 전문으로 하는 인도 음식점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 커리와 난", "풍미 가득한 탄두리 요리"],
        tips: ["인도 전통 요리의 진수를 맛보고 싶을 때 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커리·난·탄두리", items: [{ name: "대표 메뉴", price: "฿200~700", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오전 1:00; 화요일: 오전 10:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tajpalace.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9476582189676679449", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%A7%80+%ED%8C%B0%EB%A6%AC%EC%8A%A4+%EC%9D%B8%EB%94%94%EC%96%B8+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "라일레이 패밀리 레스토랑": {
        photos: ["/images/krabi/info/restaurants/railay-family-restaurant-krabi.jpg"],
        placeId: "ChIJOU-3np7qUTARjs__NYIRdek",
        placePhotos: [
            { photoReference: "AWCwydj4TPnG_uuKZHtwrJ41n-p-nqcz0pENl5vIU3ITMVSs7bmLmgZ5O3bwdBppu1vlw7Yf-qSErURA0-bj-OgOpShVAwZoim_sAyi6v50ZwJNkpkXiy1XexeXoC56rZ_nKdWzvmlg4HUECGnsOx_ZLkTFCVpSF-axi70pEaA1mXQNbGu67GBtabuyAQzu6D8aYreVqAb8yyx2jxo5stI2wBrCWru96gXQvpDkLKAwhf1qKOK911-4E0QYtEy7VAQd3I82SvvLA4fztJzGu3HA0FLE3SCaNSCEMW4h6KPP72wa6Efc2VuYIDavY_uFJj0z7BFB7jL2sAAgl5d1paDEa4pikOQc3IkyasaZsQOcyb2kMn8neXO4rgqqaQ2_sTVSgSAjWxkSRXAr3jDrcABzxaWPZc0echZx3e2ISVo3RdscraR-9QD2IUs_1--iq9I1_", width: 3128, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111941996399252793572\">Sam Aberman</a>"] },
            { photoReference: "AWCwydgsEtYYbqrtMkbmcFC-E0DlWYAdZTHKnj3fBPuBHYaaaeyHaN0-0Y311_wN7KHFANAP6JAVDofT5ZG58OGeZ1zQwK5vXT4iFyC42qsMehRAqtdYQnJgDGTtScWuZJNFenlf6osEvBAZDvZWzoVp3wsQeLeQ8vTJbfBggFsmN9TRMr4cSzB5NsFO9bjXqKdeIFTuHj_ZkCx4J75rsdoINQqsTAEuIQ6FDh60MKMQ8bStwTNaqqnFEn07hDC1wH4u0-WyBTXS7-bbiHJcL1L9ror45Y4Z7OD5hl5VAsKnzzXqYUIhEsJx2RF2bKLORBKeAwhOommTOCFijZdMByCuB8viLCt9_Ikf1ANm7fNtu3rrJWq3OlpixM1kby91jODOLSX0YNPr6Nivjcj-e__QOHWzBWxK1zzfEtM4CcrJXWvVCQ", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101823613911178149704\">Sutatip Rungrueng</a>"] },
            { photoReference: "AWCwydhnx5D5US1FnXxZHyuwRugATQGgk50lzdzExB0vDVRxBsA8DTo09-5ZJ7uNCHSgjyahasZxzTddRob1fUPS9c3bWgWHVbyklohxgiq-_HVItxpdY2AfZ8fa6a2pGl1KcewRJewZs60A_iuZiEl278vGptSbZ2nBOeX_wlycZA2nIHUyMZq44jEwz1DULifanDrmf1f2k34xI8WCmBabF3wdYr7W032xLuKEcbmajnhZYcX-09etuuZVUFIvElJgpE4fgjOnstdbI0ie7DCAp2cF3PjGBPVt4KlvzXAVPpCNyr3NhNTukPaS6Q4W6h5FWxxj4Sml4rR37XG4rxtVou3FwV3dWnrED4utAiwYkp3dbie0nT2t3dnXrrEdO0biTfQ8H-R74dmGJp5E68Xy1oVAxr8jW87rY2na2L37IE3Y15ORqw5pra5ZY8r2tG05", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106541651750498286524\">Tzer Chyan Lim</a>"] },
            { photoReference: "AWCwydgt6v0o_i_QkRZUBVcIilUQ2Yo5h1LZnfe8hJ3KBYufsU-WTnZM8_SlMZycMyvfwzNIjPj72vx7ix2KfM8e_6c86BCflWYckW5XiTw-PpTEbL1jqVIqu1CfBPpW2yJMKkHyBrVcYLLeH9_dS5BsmvMCmB_cu_Wqmtmta-GsTo25v9ApstnaDVUbLNsMDBbPaw-wC0SI8aJ9VDQroK6ziJVlhwENdX_AghV1e_9MLCicXR_4nedsZonBndzyXVWOP1nyb1yWZc5fHyD8rhaejTm9U9PHxHtcEocO4OAQ_ij3TkEx-RWB55GSTWouFPal30_lQEds5CCBV1ltyRzwxho6kyHNsr-SwX6BAQhmaa0EqXRp5EhDpx_IjirzrnBdhZyQ41L03K12mngKL3anfMG3SrFws_U0DdjXBCBk0l3HHQUB", width: 2878, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113591747193855476741\">Anita Rosaleh</a>"] },
            { photoReference: "AWCwydhzhX2XSH2EUySc4paW6EBb4GSwwBa2iJOF-M85lRkmMDmXUIyAkB8Nxs5BpuyMDEbGZ5-6l_knRFKlX9Sen3_udlt8v5RGwy9WL4s47lggvvodsEiTPeIR96pqQuPzg4OC272PkUUSUA_C9W7n0PacSHO60d8GocpWFuQgio8wue6uCuZ9CUOugdqPsE5sBjwg3zQh__G9RGxyTY4s9zfQgcmo55j_tJymXqAT83UJQa2Dg5htsfpFYP6eg_cRgs7qV1fQ2Si5kITf8P-8VgoN-w19fxaVKQd9EBSxhiPKWDiuIdNy4iQ3oiQgaEGhPc8WJ85twWulWFrWl8Mng8zibHDMFMjCva40c6H3Xra2EkEVEB0BQ8zYphjZ66VHWbBB5UfNjUaJcIs4dleEwb4b1dfpgPtZNQXQ9VOQ1oaS2d8DkefjGWIZvyTpSg", width: 576, height: 1024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106800505176856805065\">Virgil Rector</a>"] }
        ],
        summary: "라일레이 지역의 로컬 식사를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["현지 느낌 물씬 나는 로컬 메뉴", "가족과 함께 방문하기 좋은 분위기"],
        tips: ["태국 현지의 맛을 경험하고 싶은 여행객에게 적합합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "라일레이 로컬 식사", items: [{ name: "대표 메뉴", price: "฿100~350", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16822371234061733774", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%9D%BC%EB%A0%88%EC%9D%B4+%ED%8C%A8%EB%B0%80%EB%A6%AC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "매일매일 한식당": {
        photos: [],
        placeId: "ChIJLzBRFWuVUTAR-xILIyyOLOA",
        placePhotos: [
            { photoReference: "AWCwydidKQFclhHIOvbb0tInSPKFOPXIAXh7d-yCh37b-v9p3hfbAgoFmp6GM9O7GVFqfQV1YWDJ9srxuLHGRIJfMwYAfH5-8TIUigH25Q46ZjfFUdEB4AsIB8t1E8gZpSDN_VCpVK7JQGjHTRGDaKSq5CAv4igf3edqyJIV4ace44uHg9pVd5JmcA9pmfjfGCBfd4w9HNsRjUkmCEQqD6M_bhAZv5Ywy-TtuIg3321WrwyNOh7kQXqNK-kpbOlLhbbDKjynmPgrCOdiLx1xF0OV0thYBK2zfxHP2sJSTkRIh-nXnJUK8GsQhlHdp5G3tcL6HzZ3Th92EFZWX-AkMK2r1PsMqSG3nUYoq6bGNrGqCHySG_Gi1ctHfeZNbcqIjcFFErZh9UawpuKQ5JB0H9HTV_r-i3wGYkAma34ZQ8Q1DYeqHw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100924210254512033058\">MAEIL MAEIL Korean Bistro / แมอิล แมอิล โคเรียน บิสโตร / 매일매일 한식당</a>"] },
            { photoReference: "AWCwydgTIjLe6ZB1VqFUH4xXhsbRRUWgsqcfHnhcfPlY3srQ5atfuYBbdbmcGM15QpZL6mgjEdMCnV_POnjA9XjFomPmtnHsk5lBWW2mwJfN_aIFjODK2LHHTTIrNwGU7ETETV-CHYC-OZ0awNOq7xLJGu0pOrl7yV0cbR_eVIni36Kyaa9HZ5eaHWFLszmIc8thv4EOMhjx_Bfk3Mzq9df4yI2Jrw06QChpzK2gNUH8F5aZ9Ucnjv4WL3t1bEYzp2WcWUvqQni4JybpyQjfLldZUOc4sHU_ZyL-GCFu02-F-OFTcUjwrAJNnGlxPwzcl4KGi3UWBjyEFYTUZrKob13U4ub-hwdq1gQ-GIO651OKik5m_nWHsWEsID7ZVKsnnNydbciH2A7980uwJ-v3GmtDNOphDh1RcCCuTPeaNCNt5l3P7eKX", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100924210254512033058\">MAEIL MAEIL Korean Bistro / แมอิล แมอิล โคเรียน บิสโตร / 매일매일 한식당</a>"] },
            { photoReference: "AWCwydgrrHL0K_cJQzMNR0yFt-4zb2ETmsc3CqfWuPytjvxCLYTNu-yACqYMQiyv695qxuWtzcQmq4YEptJd1EKgOFqbEC9q-x7GEvD30-nW_1yE_yqmxDTe5MNj41ldRry21vaPo8WpXgFbIhfqA8cL4DDKG7rXBQ7sy6i8M-hGAgQGJtSs2xZyvEhSjjm_ii2b_PS2i2QtIX6pl0f69J_XrSFli3EdGSC2DLBrfMtmzpKJ71fpdX5-m_K6MzMd71GO_pL1VbJOyu9PowJl_Os1UK-kr0cpEmCohJnX8AKzkM2_zlcDD9ZCIrPb_DoZL_fD_1GMWvjRVOHfWOC-gJk1o8d16A5ZLbTwWs_9zL5nEQq-iIvMkgMbM92gxsopwFO0rbkEszsPDj3H2osRGMq-qi3z4s4MANT5TPYWosyyY7aPb5_rx51PHoTyGy7s_76e", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113411904094890284530\">Agnietė Kisielytė Vinders</a>"] },
            { photoReference: "AWCwydhx5LEMnW88PEnTFAd1xJ8MLhqfDLBlXJpLLBrZpKzmZZmcdjga-s4h3tFPAEP6xEjJH4R8-RfJ7locomKRIUeml2yREYiDeRA4xFgsWkNLSg2loF_JGDWM2dkjhcpleIslj4--As8aQtxnxM2o17r667f6P5Tyx7rofLInlXSnbhWGvTNdza5u-EcGcFW8x6GXNdcv7I6CThnlQRPmscuM261lzMmOcgjEiLfO92zGLnLWoNcZS9wH5dvEbZ3YCImes-Tnyw7VenuXhcwQmCJxuj5WahBvGpQauEgqVkEbow2sGzALWMA1fH6nViCv0SVXN9_vM7IQFuxYQK4QAxcfSNIg8_IGp7TUiWKqgbwegHpg8sAP3gbKNi_9TUvuyh6Uw8otnEqkZ7EngrRs99ZZiO-PEs0nan2gEKeQZRqY3JMcQCNPWcseAN2bMHgb", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100819186129078478312\">valeras ustymenko</a>"] },
            { photoReference: "AWCwydhbCTxzQX5ZGK2GM4odGfYUugp0z5aVdTD3t6StysSARGQa1S2nVE9Z-NQwHQJoQhjuVBctxuHGRBcPrJNHIgVULCbGRXE8vsjxaMG7xK3SJK-o8w64rXfjqZu2GZWJzqsNZbL2yecHoU4PxnXtCtaqy5pCAvKp9SdO45_aQ5WrNwFXzAPi_oPao772AwU6n9TOE-Yv7cqe6DsxD-NQ8A6mggkrzenJk9eNIzG2ItMMAUDIBOCtI4Ldfcd9gEG3wuXH9xc7FQ8utIHe-zbAlNNu-tBS2RQQBBnOC1VBctIQb7oMlt3ixZdicxpab324v9lzc0A3iHKsHNMzRFw1Ap_15kblnyxC3qKXw_0pZBQFlbWHQwBU0uJuGUDwhZDj08nhO4WM4Dm96FwxfrbCVT0iL4EMJfp14msiSUMPTkZBsR2sEu-LILqong_6dA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104262962781748909931\">Lia</a>"] }
        ],
        summary: "한국의 맛을 재현한 정성스러운 한식 전문점",
        updatedAt: "2026-08-15",
        highlights: ["한국에서 먹는 듯한 정통 한식의 맛", "친절한 서비스와 합리적인 가격", "에어컨 시설 완비로 쾌적한 식사 가능"],
        tips: ["뼈 없는 닭튀김과 짜장떡볶이 조합을 추천합니다", "김치는 무료로 리필이 가능합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 8:30; 화요일: 오전 11:30 ~ 오후 8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/MAEIL-MAEIL-Korean-Bistro-104775908063473/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16153442283688760059", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%A4%EC%9D%BC%EB%A7%A4%EC%9D%BC+%ED%95%9C%EC%8B%9D%EB%8B%B9+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "난타 BBQ": {
        photos: [],
        placeId: "ChIJdda6_ee_UTAR6tjq9VlMWxE",
        placePhotos: [
            { photoReference: "AWCwydgu4qKJCqCk1ci99Puzd85uUhBPUe2DRNcazMdywb623EfjjypTiQNQ06P8wsdYqhqQnFnn7fr-8VWbm6gUt6rQx8xtV7B024kdjSuKW_VQ0BGUa17HtalNTAy4LDVm5QY1w-XTG7yj57b6VGU6WOxmJCEV9y3ASjpt88No6noDDIL49gjhNkcxKcxmN5Y1U6EhiqeQvzN1EzuLqL_xhvZgNv5xd9b3O5d_GyVTfeE_4zzMgRxYTnuPP35yhEGb7MiaqnaNI7olJMMeSq-5yWLUL_nF-ygq-nGc-jg1mnlgo2p5UTkns45CtoEKeaD_kCxRgwFbB9fDhwVg1TIpGrLiKk6HOP-6nmtAx75ytrMcHZTrSrwJ_gjtMdYMM7HF_sREesNd0-gZVwEa8tezpeuufZXVNglkTXZa6dPWjLFYi2E", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110322676779197194126\">NanTaBBQ(Krabi한식당)</a>"] },
            { photoReference: "AWCwydjhvgJtuHdSrPDQPfENIcF3_0pIMMWTqHJgNyLW_2oQ0kwGFoZrzNowAX3_x55aSo0gmfnMJU3rlbBmOKSQjwU7whSgNJwqyvUqCbSJdtKnjp_UBXXUITGVNmDs8AeuPIHDKSb3kLR4ZNZXumK94ZjKMe5oP4pjWZrh3ICKb1V19Uc_n1dVDxfMvt17tnKEdjGkJSgmh1jT-wjiIE1UuPc_gGkqiTBk7kUCy-l4gpHGOdp77TpUA5CkZCYTtlr2GPIRWTIg7KREuIZRP77x3nk4dxaWOzPbOwCf7lMEv9SjXYW1f39UUFqC-z4i2STVP56rkpfs59egfDRsn069WBLoZ_Bjl2fcuBEzma7nv2n9Rd8cdu0qBrsV1YWPed3HFU3k7IhDwiiBPxHye9q1JVn06drFSmOAZAVka06DHhLGKg", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101690558434929780155\">GaemPol Summer</a>"] },
            { photoReference: "AWCwydhDQQv4jUpgzMZoOcwplekOgxaCm_ioqV_Tc80hBaUhKlZo4TrsGKY8CXehSy9RfB-3_oxsZ4O31xby2-Thhz25fywyjjX1RW9oEgGKozTdQblbWyrpD5HVICLyUd6P-J2xf62yLy7idsMPDOAj_a9VlHqRT3gGRjNiGC7mEGoC8h42J_MD-QX12ud7ZqvC8eUAKJo4a3V6Q-ndT_K6EdxSQx03wY0WGHjyITmQrqgfUuN0KbpEWb_D9vkPKQVKEtM4WrbiVKZHg7Aaw_Q-h3VLKjOJM-xC9OqmHZH9CHGQfDxlc3aeSQ_eyAHT4al1yqatMbr1RfdcEbSMroauTl299R8Tyof6loN9YIekQ5ZaLwOjphVdZ_Aq4vWoi5zmqXPEfCaL9HeYBZ5CDt2kdTuB3QNlaW3HCjVqAL5e1wavpOtDjyAiC9USZVMo0ZtH", width: 1440, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105851329087465588514\">도윤포 (gallab)</a>"] },
            { photoReference: "AWCwydgfE6A8ltZlOE8f-vMNU88iWS4lumatVFaU4YeqAZHiqi8rGCrOEtGgWYRLWY0Bs1a2n12xgzw5ZgAck_31HGG2UtW8BilEF_MqIEQMY6-bbn4ya-3ZBogbTCxqwPjXrD-knylXpO1Ly4h0Mr63BturfVwt4fG1O5HoB-XPoAm8AtwnqkUCIW1Im18DKXV7pjEaLSbkklJpp4LhDFWYQNCJI42GLzTwzYndzdueRhW4FmWr57v9K1q3p1qFwXjpT_Pul94uBDA0EC6eLCUlYlm94IrP_yaR9nWQ67ksUeikAHmxC5FhHPnP7b0V_fksfjDkyFowel9jY3sb85sULXnavokpHmcYtz84LBCAElSXgPmbmJp8ifJuYwyrp-e9s2lATulmb8rTL3KwZOvYIpj61dN6g1aCRlZ7l6SHidgRuhr5MKeINaGZDJgwRA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104028675244124871617\">rrroy</a>"] },
            { photoReference: "AWCwydgfTzyKmqlB68HlbUZLDB1eXeBV1NyZHM7iotpZhnFzLbdpI1-iSpX8_602kcIn_4PjqX8xzOhwWnnpOwouZAGHmwvOoMXAw1zR9ZlQqtavsheqp0CV94IbT0aQtk-vm-pn45bqSnzGxWtKvAxEe2hDsLmJKuPVX-Axihl3Zd0KyGyrE6eDi7h_6FXZYEBFM4LDWOao3JpVBpmqHTQcIthB2dcarp0C59V7ADtNzq6zqrcGSguN-p7kT8Cw86VowFervADWQg4Be_DGI703LNgaoHQeAvJBNBTwA-M4HAyxcm0bzZD-I0P6RZ3Bie2UQEQ-0p_vPAyAGa-2co2bDdCtH4UY1V2Ar1fgPhlauSV9FD9xJOWMYMFz2RKpT7CMYmGROBIfUlqMwXUSa4rnmcOBQNTGXRTz0OYcGam2bzvM_qQwfVcoNn3rlMVvF41r", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101407445766532712863\">장사장님</a>"] }
        ],
        summary: "두툼한 돼지고기와 친절한 서비스가 인상적인 고기 맛집입니다.",
        updatedAt: "2026-08-15",
        highlights: ["두툼한 두께의 돼지고기", "가스 그릴 조리", "훌륭한 밑반찬"],
        tips: ["화요일은 정기 휴무일이니 방문 시 주의하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "돼지고기 구이", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/KrabiNanta?mibextid=ZbWKwL", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1250677270787053802", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%9C%ED%83%80+BBQ+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오빠 코리안 프라이드 치킨": {
        photos: [],
        placeId: "ChIJLQUyKD-_UTARY0jxKc9KFJY",
        placePhotos: [
            { photoReference: "AWCwydh2hDekS5P3O118xFnbudrqfUrqQVN5BuOuKLy89UfB5For-5UsMB96nrkLiFiYYTRiczsiCiyeTedXGmgSFtdi-Gyf9INaXLEwUtMwSRDIObAJnuaWSsArvRUS0p4cPLC1aCakrtTXk2npP59cyxcYvYa1SU7RylLTYfDPEU8eINIL9mWFi47h0YC18AAsDt-6auD4HdQb3QtDSBOkpYgwVL-6ctdgPBHUJ00nAOKG5o7xl1fDMSFrCEtc47kzgYEXkvcYoL2EWw_e9aGk2hhGQeHMWCM-rdHyIB9mdlMmkNWKwq2RPhJrO2uYW1R3XAUwnm1ICkwTImMOFh11hLllnySfen2F3HDJvPxBYWELAWt8rwvVB8XLdXcCe-gtb0HgOkO5-xPmNeSY7JD88rVUCHhTP1brfbabttTo8gepVNkSKRWz22H2wAX_fz4-", width: 720, height: 958, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104225027621929297313\">OPPA KOREAN FRIED CHICKEN &amp;HALAL FOOD AONANG โอปป้าไก่กรอบซอสเกาหลี,&amp;ฮาลาลฟู้ดส์ อ่าวนาง</a>"] },
            { photoReference: "AWCwydiJijlT1RZUgQ-wXJCP1aXqenJgFhD4dhrGZe13rhZQfsqevbRI-Teexq7BRJ3p0vgC8hlOdH5OjRtKZQ3ddJADRcXKl7iiisNG7cBObpDn1w9ZZ2Nt1CLmHkvAVoTOQpu53LkaU8cr4Ga8PU4Wcpirm8CjNVGr4LBpAaVdMbixCFNYZs9h752Dhyc8V95f5N_yuKjmqGMuU61FO01fnSLXBN4SzpeJ4tL1aIsuQDR4u5zaUrc0n0tHa_X3qcWOthYMz-EkxT6DX-QHS7-Ug_GeDrLGuJ4KXeG6TZeLP0EuwycT_n5fUNJuze2k8r14QIh5CYMnRz5Bnzeo3MBy6LevsL8xOw439Xe5P7RuqZfUfaEnU0NahWWeZRWn_yKxH95jZlDkwXWWzQmRiYRwX40Rd0FJlXd_CeEfAPbMGC9jkwy6G3UTpTz6kRJWs4ku", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104225027621929297313\">OPPA KOREAN FRIED CHICKEN &amp;HALAL FOOD AONANG โอปป้าไก่กรอบซอสเกาหลี,&amp;ฮาลาลฟู้ดส์ อ่าวนาง</a>"] },
            { photoReference: "AWCwydgS0xqF61SXc-G8dJmm-JE5MIFkClEfvW9VqjGgKvvp8VhkuPjlenxmWtzv9Tw-lDBLDvJPcjnIoXEDe0awUediXAfJPEbgin1QpEe6jQRE7ZYKJkkb-3O8Sr21SECVw2x1pGd9zEmouK87r703jMQpSz4ALpOebG1XaTNRK7O5usXTI7Z0EATxj-E-cDipJfOeMjrVFVOzWyUZC1cku6-Kjyk_CzL4PCDNCInZEep6lxoieTCttAaxkrz51P6XwO-UmnmH2nZ2gNoXPyRqkPqOCtHAdA3jTGZHT_XaqJ1bPATWnSxCs3xFFvDElWeQMO6uaFCYKRT0uk4VD7JaL9YP3k0EY-5ViymAc1DAjFYpQv9o1RQ6iNkGONrgUTk9t7RXJx_vHuRg09oshLv7V4G4Ygmh0WX3BY9SPYoniKaWrw", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104225027621929297313\">OPPA KOREAN FRIED CHICKEN &amp;HALAL FOOD AONANG โอปป้าไก่กรอบซอสเกาหลี,&amp;ฮาลาลฟู้ดส์ อ่าวนาง</a>"] },
            { photoReference: "AWCwydi3_xJeHOBVCVrgHNhspU54xCTkjz5TxJN3j7NBNva4AWHb-tpPoKAGO4AauhAUztIhJajKqv3_wCHBjYfVicYULs7sigDeHmfFPVfWDVj1ZWVAg52q-_053HMtoJ9rSOZ2ubHYoFHQpm-iSQh2mw7yheLwrFVRHZJUoV0KWKtMolwhlzhwK5ISdfIB1gcD-l0qz9PZ9MGBH3FQQo0pr3oo3UPZWRTCXZXyvTuyqThbdi3nf_q-31fYcexeznPhrqAAQ8stGkOYY1fqg_6HOAh-6ZVHQzm6i2_qjujPX1AQ454mjyQpdtvvGtLQdpALX2BO0H9WXR5FWWvG9ErfVtSXUTWj9BC6oUuRmEv0TevezvVAdNH-v5axSuxZ4FdM-jY7DjpUtGNkn9pu5KW9BeloULdsAnlpZ-HE_Xv32iJ26jrUeFyPOsVxL1qBL-1v", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104225027621929297313\">OPPA KOREAN FRIED CHICKEN &amp;HALAL FOOD AONANG โอปป้าไก่กรอบซอสเกาหลี,&amp;ฮาลาลฟู้ดส์ อ่าวนาง</a>"] },
            { photoReference: "AWCwydiMwnNT0Eb02tXBoXqTj9N0Z2tGhjhhdF-wSwi58983W89CoABrrxfslM2UyMCIHj4GdXP2uFKj9XorzuTl4pGbe3vLvjghW4gBuPi4spC2JkzE2MYnhg6fDsYyOsolQLkyvSjnfnDT_bDNFIt1eTqj72s5xz3r9ytSmd43XMO2WUhl7fYq5m6PNBG6f2_NYV8TkGcWBl5nKSI79R-rDrBZQ3I3HxIatLa0FZxJHZTTDObf6F7nX5E7eHeFVy3gI6L95rV1Hy2lHvqKfhxmYJlt5tYTMXdD79Rbd5aV9OVP_hAx0YNb24beTZo9xufAMxTAaE3zJ3i7Ojf8gkGcm6zpwWEqCPsH8b7_tbL2z3V49324UBbGIbC8T1DwoJBfJ8jdpFBBOxVJQYCr_O_i-2Krcg0_TwIGMZvpo9JYiRKlgQ0uaifEkb8VORO7kGB5", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104225027621929297313\">OPPA KOREAN FRIED CHICKEN &amp;HALAL FOOD AONANG โอปป้าไก่กรอบซอสเกาหลี,&amp;ฮาลาลฟู้ดส์ อ่าวนาง</a>"] }
        ],
        summary: "높은 평점과 뛰어난 맛을 자랑하는 한국식 치킨 맛집입니다.",
        updatedAt: "2026-08-15",
        highlights: ["뛰어난 맛과 품질", "친절한 서비스"],
        tips: ["일요일은 휴무이니 방문 시 주의하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국식 치킨", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10814350858845767779", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%B9%A0+%EC%BD%94%EB%A6%AC%EC%95%88+%ED%94%84%EB%9D%BC%EC%9D%B4%EB%93%9C+%EC%B9%98%ED%82%A8+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "대장금": {
        photos: [],
        placeId: "ChIJ1Qx7jP-_UTARo2XS4kLV8Z0",
        placePhotos: [
            { photoReference: "AWCwydilwgdYdsNoI3bLDSRWdUHMgodQ2Gn5MDkqgZID6-gfbSttWmgIj43axqeUlhJJfeC2aYJleHIFRUU4qDhFqY_wbhcCEZo1Ho6M5Qh3ZGLWJ11m1qcgqeiJ_CHwsyHI6m56qrnwlCw7NAwvemZauCksgWP0sRwAc1kl9t6b1rYCHYeQmpi2Ao5Kqfl0vU4kMrnJ1MPHXtl7yExqmPh4xz0pusqepLa3x1AfERIzA9TWjJoabORmzODwAOVmKxDUoVB425wPquOMmSq23rRkN3lVzcouRtdkBL649PRWhXYW7W7Z4EJr4t1x8oPMLy0RJC2qwGRZ7eQVFSem3FcDRD3xgxmWB3NshumxexsNzqLuIhMHo-VictuhMxnHcrg2VDOKjuKy0uJeugfSO_OZCAL2W9vZxpD4OdwrWWPY8vRgihrwen46bGuEL17QtQ", width: 2048, height: 1364, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100544294471899474794\">แดจังกึม Dae Jang Gum</a>"] },
            { photoReference: "AWCwydjBLAsLth2dvow5dWRtawfVMMre8P_mkVDuEP4WU5-YnpovgxsEVJJCxY7ZAUFKQhba1pT8-HZzKr8P8d7AhNwtM7AgS0JBekcTNv9g0sJfce1sl6_8PznNP4y2HtNaMOriUctMbMNtQq0x9hgOMQHQ8lLKE68DIKq_WlbsaIyuD1QP6MZIGid3Xzr4J8wczwkVpK-CWAsICSNnqfYIY3vOai4Vm60WBiMCIGLR2Lv2JVmZTgry8tR8PB07aHiRVK6xMMI6QrUZsmHgSrujn9veapm2_x-xYKXtj3YkSpQZQ377igdlYXV0nwfray-kY-s--cNddDGKBztS6_wmMVHZ1DmtKbKWAItuaBrWGwB5UGHjuLkw3FUkB7LIVIMNNChalE3RkEKTIDx2HdvaWxUVbRQuhICIHBMndycdYwPZ5IRogZjXa-3k-jRbpkeC", width: 2364, height: 1773, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100544294471899474794\">แดจังกึม Dae Jang Gum</a>"] },
            { photoReference: "AWCwydiQfCNMNyqGIgVeMUnu1jfsYriVAXgAZAWYCIJBqx0lRBK8H9J7yuFwGU9pRhOEZzX6cp4U0SVvlVpJQjaogQ1G1k5SGKAZOhU5uqlsTAP0IHj5aHo3ps130GwsgpY126kwBSD1enJLhPiy3ryEkY5s6VDHmG1L0tRP_ZmDN-NgUE6UKitkWh81Wt8aSFz0bfFqrEtUYjTCTOvBNxTEPREU2j9MAnjJecSJxHBVi6wQTtrSxrSSH70-daIvZD3S8s3eM2Wp2lnI1TH_8yIp7RmpoFLwt0WeS4AXJdDkR9THVmv3Dh8E8gN9vf-YWWtVN1jUm_7upsxWsToAugXa-6M4bDviJXGkGSI6LWwXuPMailcbmwUFbNP4vqqtbLLkZw4CrPYzAgjvLXfgfUwNIYpiThd0N17KVrsHG7L2j1N7WakfntKR46Den42FYU2A", width: 1080, height: 908, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100544294471899474794\">แดจังกึม Dae Jang Gum</a>"] },
            { photoReference: "AWCwydhhp6bsXRLbOtcOKwupp9xcoTj3GSXgoVWuhwspfynWv6jSCFYY0jspEz5LswHEtfb_1YQYWJ3BjNGkggupWAWqY4m7G6n9zexmErCFJZELsa_65fAZtX7ARYCVloCjHKWMAVa4zRhUyJFVRrucB6MDwXB11eI5EaLy0OBMZXhby-xXWU4UEPzIVx3QCh-v8CPJQwE0DJK-kE5pe5v_iydLqcWA7Svjz93RCuius8RibkTPclwBns17bdgJugFMy35QdJUexJj-N9_pvXhgI06t6Fsc1dTjTIzmpY81WiH9DyPngMoSsrIborW55JDgVZjby6mxiM6VShZU69-5egWnRugmUqyApsRC1Z-NnRp7OymRts_cAX4Ot_4oE7ZCojlCuhYfQ54MChGrbDO8vNZjOryeJmXBNQ2kRHNxOBcQ9ZRr3EYGdY606UfrDycN", width: 3468, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117212847139819793226\">Nungruthai Dedarun</a>"] },
            { photoReference: "AWCwydiCpxLPQU0DIxCPJBUJDK3lXjLV084zzT_4eH6qqewwEJwmvpRZ1pFLd_zPqrRhm54GqRvRB3gPrXRXWd9dMhgTIVuyB0FCLHH1t4XOhD2wHT1bcJihcrPHBrKJIF84B2gZZd-Dtq-OAaAE_J1pAHSe-qIVO4797rflQPDyu0hqEMOmdBTj9s4xxi6gBWRfu6sGMltoGTPO_a2LsHwbxqRc8FqsBanF-OAJEVlMmNDC08ZVEdy5PHmX5Lb7YVPWgYDM5XpWC-ymJ7EuLIGf1bMl4-DNITB1GW8fQ6WTkBjLPLkXRP5kJunY9aee8-CRAVNXIX2HewTawpmwZaylozC3HXOd5d8e88mLz1nw_tpy64gzyGlZT9qOTJUTIh9lmt2pMVvD6yRbiA7p7E5zbM52Of5krOa1oLnRObRAHivBLa5uMxJEGFfmgLOhiw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100544294471899474794\">แดจังกึม Dae Jang Gum</a>"] }
        ],
        summary: "고기를 무제한으로 즐길 수 있는 한국식 바비큐 전문점입니다.",
        updatedAt: "2026-08-15",
        highlights: ["한국식 바비큐 뷔페", "고기 무제한 제공"],
        tips: ["고기를 무제한으로 더 드시고 싶다면 방문을 추천합니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국식 바비큐 뷔페", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:30~10:00; 화요일: 오후 12:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11381112216591951267", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8C%80%EC%9E%A5%EA%B8%88+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "킹 BBQ": {
        photos: [],
        placeId: "ChIJ1Sm-U6CVUTARbgVldmqgtxQ",
        placePhotos: [
            { photoReference: "AWCwydhbZ_2iEhvgdJpeWbqGwDETGkvFOBBS9RBN78CVp5A5HLKOB6AO5PiuYzm6AhTrFjF-w0EZ3QKUReGCLGfBZaffhA-uukdOc4CJYhZjfHpPzzui3i8pcsRLrop-iQDiCaqQ3U0Rn-1oaIav_k5CVXrdjS3RA-x5WtDAmtihYdNAeiZcn9Y4ehomDrWShJ2VubxINkqqoBU3gZV3g5_pJhabX5QJ7F3VrHh2s0Ltz882r4Cn4sRDBi1wPjisHcntbKIWTs1OHGrMzYYXfblJcK9MEVVd85raAsZPn8X8fY8fAEOiXF0Apzv66JTOPI5NlCxoa3aFtTEgswadj82Q1f5N1RUDYdCxyKGiTmoI8RdkRXxDz1Hkz-qF5vR-buwDP6-3kC8jWjdX0iNRYUbVBRTp4JOdQ6a0ghy8sTLZ5TBaNxLBtGbNoYu7afPEkD9-", width: 890, height: 1837, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113702640813335067782\">KING BBQ ราชาปิ้งย่าง 韩式烧烤</a>"] },
            { photoReference: "AWCwydhmj_RSBsL4UIr8o3ulYGQEzoBXaAfVWt3A33rd_3dqKGX4BQrimzYfKSoIYD1yYUk_hg0xueoUb8sMO1tM7Qvb3868KK2Hi6NHARqyMvUg0UTmTMP0zM5d2PYUx6qZSFmiBbftvfDDf5Qb6fD2dGGcSHCgHfITK8qLyrCXUZ2AmBIFDgHvyEGdsjInpaGlAEF6Pr5_9RChhAbxgTuG6dr0X6m2EOuo2tgNAc299Pb2Qr0BYgDXdR7SZbOxXVUgDE1zOuD9Fo74r0H9TdQzS1LskcJCtjK41TletxAkGGtYlkqe0SL2_fWXhqPL--iJpenVRb0Xq5-C-wpLZsSKdahy7zkXWucekEINOJApESROCF73Vlr_YVOjiqIg3ZpZGbPj-cSgqpL3O_0p0HUxym8gsWXLeoWKrmI_10wL8GoMnFJiFhLOeqDWCM487Cmb", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115307898318337085385\">Wilasinee Keattiolan</a>"] },
            { photoReference: "AWCwydgSvAdlVWOKx6BWH8oqkdWTluD5N2ixAOArVKa-7KBml5SZDa5jserN0P7aw8lJxIebWOXF9VW6JudH60u-jtwACsiqT-J7a2e_15WLmxQhklMiRz7kWO6dAEbZmpdOrxXvGqY2T74xEut3tmABGiTIMCovC5b8jLIw14MrSDaIxCdh9LE6Kxt-weHl8wHb26cCTUi0k5ftiVvXKXc4JS8JrQ8peNW8ODtZunr45C8tqrjeZMrfiGX6PyQIq3xSArv3Qh3CR6KRlWjW4wk0ZGRp4lhomn3wSry6hjppP6l3MowZi0UErIfmeWxtkupIdClHynox1SsHF7gaqGHWyNlWPQW5RTbO_Q-LTXyZxyb-Ii4oEBrFHiInQ02TKoyfP1V5KxTa2vZV0OidTSGtTTU3Dt7c14mPkGr4CWQFOaFjC9lpbcjHeuuqtad-OLLX", width: 1108, height: 1477, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113702640813335067782\">KING BBQ ราชาปิ้งย่าง 韩式烧烤</a>"] },
            { photoReference: "AWCwydiEyZTOjAkPFAubEX2kDzoaCvuytNzYB1wLQbsrn73jqU7Xc5_pq1FGNg77ljHbsc5ZYI3XL4wQ5I6N8ARFypOzYGjlanrkOGyrVkLS3sfwfbADq_8dCAXOlA1ElmivLTyXR0ZChRqDuMkLZrYe1ofjXVA85stF_M6dkqxyhd-vxG3lHcA05IK0ANo7PZ5e2TGYT_Mj5TOOAnOGIv2Ce-PEzzCIdY8tpOGI-3EtiR4JwIFgOZsDBsEK54cCGQMFiwEcl0txB-V2EmkE2ttXvxice1WKEussTzcQj60dj0XaAPLOUPIKW1wRRYjplUhMSbaH1_zBcxv28ZThujUxkrP00Fk4p-I8wgQ15-vieHKdjHxHSm1R3XFhzHTQHwL95eeETSCFG20TlixWQn-KVxPHO1udjmHVrY0EVPbX2oUN-Ulz420aiejeBYFxX6eV", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114139260492584961566\">Smile More</a>"] },
            { photoReference: "AWCwydhTM5N3ucCFOve6_FY3WdrEyPyATKq9dc46a1axmBBBiIPlINynNihXsgiNOcGbFaO5N1lqyec0HHgqxbK-17AtAf5uJr0Drpvgv7gGMorfC0KH8sHJ0zSkpUeiKt0x8IkSQCaiW4PActEuUaq1nFNfj2QyStmRLjIzYTkHF1DFHR9Kr8XMSw55yxV9FrNRN3O6KzUbgxCq5WgJJYOGVwgV7lXIVJxbFTrr8A9i6PexsuBZ6S-Y3jSobvkM_-yihaX1L2EItq0MR9xBpAxkT02nnoaVf50KByWlEen17Ka8W7pUleH6qvxLr1DBkP4VrTpQcUBSSiEHk-RD1Tv9sGaYDW7chY_o-jG--nK5bhunSpaBWhkBwskvNCkhoZgjvBSo0ciAJBzlEDttLbaZptDsJiisg_PQb-3TAxrGe5Kpd5Jm4_YhoJIhuXiQbIqV", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108074427761641376987\">Giffy Chung</a>"] }
        ],
        summary: "높은 평점을 자랑하는 크라비의 바비큐 전문점입니다.",
        updatedAt: "2026-08-15",
        highlights: ["맛있는 바비큐", "친절한 서비스", "청결한 매장"],
        tips: ["바비큐 메뉴를 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "바비큐", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1492838180609918318", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%B9+BBQ+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카제 재팬": {
        photos: [],
        placeId: "ChIJX1Ue5UvBUTARgVDCFiDJE8c",
        placePhotos: [
            { photoReference: "AWCwydj-dhKSX9Gr2FPZRbSOpCwD7dOQrwvIEUztcZ2GzWzJw3Lhh7ZplXcuCp3I7Ps2Fekz0CdOQgJdLpVReeqegEPuIpDBT7-BZ-iwZTd4895mIiB3aA3XlaWPL8Ugr4bdAE8gvlEzVvHC61hvlk-kKvjfTG3sA48PYKnNYzr8_MiW1psVZt-k8quuPkxmSXUIJih62p_PhrU7O_CBbMrFv7os8RIkXS5RJHD6l1DnSZdsWY0viISt_2tL0jiwqOeHpGP7vDHFekEkub564kwLLnw_fIsbnpB8WMBD5VrVxClPhcs7F39bs5iYjQSRl1NA2SX7zd5p4NzD0AVBsDmbwnTx7LjzzMGP2t7-9Q4Dy08wVz0k_rqxiOGX4iD6FZ92tOyf0QmHs6MdrkhV6HWdK9paJnqiYDUf3ZdjWCChmu_3AtKj", width: 4800, height: 2409, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113605644314921857171\">KAZE&#39; Japanese Restaurant</a>"] },
            { photoReference: "AWCwydhG9tdR-oCYckW5O063XQftkE5LVf4kF8Kc8sSpPabGoTXWRPEZTZ3t724i91VAGmQN1bIJFqyKA3krzM7kgEBd-ICIrUDImzWoxOsh_EQV8jMlXBKtB4NJ7hY1LFUfeO6kKQddFi9bgj4PH6M05Fz7ACHibj3QLVsrE2J5rQDDtwNAfXj3MQlGxVAM_eRF0LL-t89gFtDlho1sWWscR_Dt9zTM_Spqv3_Kco2D6NsF511YLFbpIukHGmpCZWYyqaMXEIvCkpsFu_wB9ekhuAQ_0fzOmTWEGAgHKeSi2IWfAJbzkOJL1Jw2V44ETC9bbKPUy3Zmco6bTGj9rf3KfjrSq_m8ZMmGN5D44WaMy_BuGpm2R8QsjXLlZDQwQQD5UEWpq_jkPiwetcmUz79IFm2BX-Wdaqc55PJj3dAPKE-Q-g", width: 4303, height: 2869, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113605644314921857171\">KAZE&#39; Japanese Restaurant</a>"] },
            { photoReference: "AWCwydgdC6KRPzGQNh6ZFBTPvioKk9amjvc2ymczeW9wucTipbh1X75cUwu-tdLh-OeBdr8GrWPQAs7jrjT52CAJWDRS2ucVppcCUxcYK2OrGscbyKVIpggLCytCePIErE2_kGT4j8sqPylCvus6nQQSWhOuxwBu0t1OUP_049PSW7UcM4xHG_5rIfWLQhjsihC7z_QDjerxogdUMMIhyChMX_8Uuweq1utoCc3bdqFxt88EDOCFQxCEG__-tRar-KoMCyLTtPdw-4TI1tyb8bY_xq6nV2sVM6j-m2T46GeTuhqaH-Dko9Ku_BOdxTegKn4lA5Q4_mRDTdaz1pSg5jglbLt0Xn-z5_WPuNatWtBrVWqfadHQe4vOyYcT7Js1za5VYI5cXa5dGrw41mkPX7HaEDkQ6WiTueWzlqv5guy0JYCAd9UGflXCUIAwI0a-w7WB", width: 3072, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102698118667137674348\">Marzia Folli</a>"] },
            { photoReference: "AWCwydgABosMPwd8jbQa9rzctHu-Z-3eUfHhAJLbaAGEQ9vH-BuKxG-XKUDJOlUM9UeBuH3L7kd6E6pz0aucaADuBr6S91af8yYzDZvHEhFDnjAfI7s9BOalQ8R0E-j3UE5Uic5vEV-KZbbg2WeDIsxZX5YgYuzRS5VBXY6hgSuq-mUxqoVMAsZOekejd1wc9O9Rk31lGzQHHliTphNcWo3rx_O63VF5ByAM3eN_T9nOsulvDP91A9jgxfnnqp-FvuRmPPizIg0RF_gyUDQj7MtVmh6M73iem1xOVsLOTblaqWhQ4Rr8LwRzrkNLOw_ywwwzFPnGP_4UBOLIzg7E7dq70T8re4bLfVMefSPizhdQhCheekd17r2_sM8Ukqx2ViqTyc08_RLsD42sS7rU-KVI-bHlhsCfXcjkgMYLU8R7OQDPq_EOPoHjHumHGcUlzw", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113605644314921857171\">KAZE&#39; Japanese Restaurant</a>"] },
            { photoReference: "AWCwydjayDi0OssophUUeTGEyVoNu9mOfdmPyVyRVR41qJEI1qBXMeEq72dXti7fNr1jsaawzGY3HAH2hRGixi_b-md2fk_TYH8yux4ZvttyS8d_RFyFWGNT58IwycX3yX2JFH3GZmmKEPLQRN946vYzuKKUC_g6MHkRveOmI7xmzBk1K9YzSt5hVzxWr0-koh5zGtk0MRoOESh9q28YL63XlkTHw8OTAmKLUTvikE0rEUBNAS_M2dibGBXjj1PTT42zENotrKwrm6fJRO9IIAq5cQTRfvJaEeingGmnJFbpj16HRfaZ8UWyElgXrBqYOMp6sJyTsfaROPIthsdR5Jy2Ozc1CCQBDRng8NNy1fYOPg0PJs6xFfB__GHmoVISAo-yYKCCt5vxIjc9l_c6mJYTiZaMm3l7E1QxxRL27uSDyaNHOG-c_UMniTLNK4j9gw", width: 3072, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102698118667137674348\">Marzia Folli</a>"] }
        ],
        summary: "넉넉한 양과 훌륭한 맛을 자랑하는 일식 전문점입니다.",
        updatedAt: "2026-08-15",
        highlights: ["푸짐한 음식 양", "생일 축하에 적합한 분위기"],
        tips: ["음식이 남을 수 있으니 양 조절에 유의하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 9:30; 화요일: 오전 11:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://seaseekerkrabiresort.com/kaze-restaurant.php", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14345030377763131521", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%A0%9C+%EC%9E%AC%ED%8C%AC+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "키쿠즈키 재팬": {
        photos: [],
        placeId: "ChIJi-IgEJ2VUTAR1R3W1qDnhQ8",
        placePhotos: [
            { photoReference: "AWCwydiNi5dFIW10ojaXwo6gQMhfWVRsYNd9N59FTO-D7Dc3q4stDE2Gbj2Y1vRKULbs-A5dEfXw26XtrFTMW2FRaDaaYjNd0C-mUAhcXKRtFZVNlO6PtG7HCCQEVfhAVoGawIKh6uHdzXZIlo9u4JfyTcaPuS-aAy79jF225UKNEDuRASIDtFZLUxv8fJoJNIGWX33bQLRaq1Y_AXB1-5Ru4AmG4UsnDMsvVTZoog2n7tdOqh8el70jCUXAiTJsI-q2nz8eO493qCuorRLj-NEb-YWpv4K1fYU8doQrNExu7t1rOC_V7HH_dS3oPf1NhlgWFCIJYg1337pCUEuV5TQyWPe_-pWSh1XvesNzxJKXahhYqyAkG2JKN-aBho_EUBNIA5-wYIcZr_b5APJKNk5o-sAcj34O3hEeswACVMZ3R63wjYOu1LK2IYLrsIEXZA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106664754181585614563\">Kikuzuki Japanese Robatayaki &amp; Izakaya</a>"] },
            { photoReference: "AWCwydg4MfmcdipTGYveHB4AbZFaMkQpClHtHNA8taxkJnoVefICWfLAvEbUgiOPNVZKx_jVbp_ZGEj9-LN0TDN1_wpDWEixXhW90WLTHih_zEvlsmDwT9gRrRHmIG1FhJF7BxlOR1G09F3zIA7UPcDKNAprZiUJ7xloNrF1Gfc-w5QcX6xl96-ja2Vpg151dgHOsardowTG4NUDBp6zfQfXHWcPmUiZ3lYggfM7RgdaAuq_CzUPEfqd-YWFJsEYC5LAi5Rb7_kJ2Q_5GlajdPkvbFcnzotyonppYVB-jqZs5NQs9WxLEggir4VYI5kiBej6qlMCwzUh9unwduGaC1Uol5ODhIj16Lsl8I2oVUhyrGEASV83WKFah8qNrf0cxehYAKCfIzENwSDtLd6_F2e7rYSGDu1irce_YADaGSSw9tGO1yXK56icAgFq6pqDwqbB", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102103108372906415505\">Jetana Delos</a>"] },
            { photoReference: "AWCwydgbj3EE5oodbk87Rb_mHyUsMHO19Iz6UxjqnfNXuLzWOifxzbOWhly9tknAxHOHfsg2BccyD0xGhvd_wITgZIdQJgu0onhQ2u9vP5KBn_aRWtO_ZSS0woZ1hoXpifHIM20HWBAgo3PrRCq6BSU9BwZHzKv-2eQLbUMNlGrTckWmH_-yBSBr92f6dec5mSuhe9kAi6dQMhDJqNo071g8iEtyoJ_YqRiTo7PeSF1vN-90WvdcQwudzMT-FXBObHS8WqkDWyEj3U2ne8ocF2n96hjcm26tLv_QN1bHfJXxvzY6AsBJlQAGp0qKHI7u3_wLAtCIxLt-4zNORqUB-n9VEzOBYnSzQFcdmVVPoMW6cTaJyyLVkeRN0u2aI0eMYCE3lk0T2dJgPbxWGREohHgVATw2VeXxPZnDjaO0QzObweV-DxvoHIt55nN862kqZQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106664754181585614563\">Kikuzuki Japanese Robatayaki &amp; Izakaya</a>"] },
            { photoReference: "AWCwydhCw-bqG9Juh-oiTNWYMZWMIckt8RtAP4aOxCJH431iL5Dl1dvdYKy42qvo0xgLyQAE-Zcsr7tzTPIqdwUscXuIQI_w7EDaDrgspk6ihs47_46A787GUyQE1afzeT3Knt9ANXnXMsB6wwmNW3ww7CxObx-E_qVNUFhya5v0Y4EhiTvpyzFP1rjRdXS8sY4T5ck-B_2oq9OvlrdQAfkCHInyFcHyuRacIW8oSgFIx4QpJXY8uC_Wh3Q8uYn4py1BtUXeosUJ6e7N-z26ij2AlLL4b6q3q7x-gpXg5rp4Uzp36K8RYIFiq3p5zH8A8Vl_a6MS02RmYocBRlCfZMK0x5tt4y170S0J4A_DtB7LG0uybrdPg2oc0O1rDGPkErU7q9EctEgMsCJ1iJjfr-Kpe7sRRLWrvki7odDwpyuyFC1r0VGMMmZeFwTjBtus0jY-", width: 3840, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108389889474398252158\">Kelly Carmen Chan</a>"] },
            { photoReference: "AWCwydgT-KrqiDQYdUZcxFsLXodwbigBTYJ7mddJ5vjH-I5dRrIQxGPPmmMxqFjzS2mQQ9gwY0c94Tf0zJq0OkU_X51H_I4OWfBKLBDfkngdbNqN3eYOwVRkBWMZr4gMKgNjtlAzFJTASACmmMSda8QrFGrbxNVlWzc3re1mGqT6SpIoP9TRoo1yLTJbfbXIyVO6Igy8M7xZKrPCBKIf2unJLlJrE9mYXRNsmihKC78uZWE-Gye77d35yizAkvYbqSp2xo9sCKR3qSdFEHF1thv-nMsdHZ1j8TXSj_5uX0tK7EMt3IP0uZ8wLdV6PPLJXZNL_gTHitLFhTV6yksnThO2KhtgFZrwKxpulRaRi6RvAuRYRrESKztzPN1VadWAEPVGFHOnQGG6_aTmrrdOMgt8Mjn6bijkV_ITddsPTgC-9Ki5NLoH0d9a7UuuY6JZNQ", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102103108372906415505\">Jetana Delos</a>"] }
        ],
        summary: "정말 맛있는 음식을 제공하는 프리미엄 일식 전문점입니다.",
        updatedAt: "2026-08-15",
        highlights: ["고급 부티크 레스토랑", "뛰어난 맛"],
        tips: ["방문 전 영업시간 확인 필수"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오후 2:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.kikuzuki-thailand.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1118554760456576469", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A4%EC%BF%A0%EC%A6%88%ED%82%A4+%EC%9E%AC%ED%8C%AC+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "토비코 레스토랑": {
        photos: [],
        placeId: "ChIJrWTxUNiVUTARb2oM21OG4G8",
        placePhotos: [
            { photoReference: "AWCwydiS07FuEwK1nGIIr8h-tMq25Vdq_gc4SI4CV4OVJkwqPIrwW9bzD0Acu43MdBY7ytCDMQUVFhs7SZ7POngKyLHHF8iBEOobKZ-b0qN6CMdLVrLXl6ov4GpdIX9SPpn6wsFF-aq-XC8IOsCVep9bX9oLY8eKaH1jF2xXx9nmm05aq9qeDz670kmebUlZW4zsZiOGGsNtVAbomV17yxuFsDJg4uGiXTD1t5V3xP2U71mL2pEbDhiqZ4jTHFOOcBJLpT7a2I-0EVNcsnKf92WqxkdEK0VQmGjE2SB3El5SnlJp_tL27pOr3cZFTjxfA03mxrCchdrinhomRBvmCLIo6uiyn_i5TUA2bh8iGfpVnn1sjRPc5z3pOAF9z_KQ_lRpYGHsQi7rucEAcexpl0HE6ZpSXX3PLlrnkzh6qmzlIKkD0dxw", width: 999, height: 561, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105703278088838114154\">Tobikosushi Krabi</a>"] },
            { photoReference: "AWCwydg98lvXcY-GcayEvqq7p0qlqRBsfYV2h3wZSBYDxV2aDsgeThUkT4DnD4oUMwnaHfrZAyFUScf9SPvKh2kNt19l0WEJQdr3DtnYfkZTjtmyxh9lHUO2oGFlx36jm7AA51rk3zbo5GneDY4CaNtPq5IkvdMIt_kARBVtZqINnJEcjpFbK4o9Tht6GsDTgWnLZOqCYmFE9Jj0C7tlW7YvjMZiJZDyB5_BOlKtSdWe5F2fbfiOdlsWPCHfVfsPNlNrkF3rdUbJV0kFsavwi2RuX95_TCfSvmIiPsa4m6wNnqhygErzOLrOeUuBROXEFFseKGrNlfeH6eL5_QQ40p30JO418VawNp-YeCRKkQkhGiRoiVl6KsT2Xqy-J8xRd0CHvHbDiKmwmKquY7lB6kHfSr3MctYZ9nIuf-WbkVPqaaMRvR8", width: 999, height: 561, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105703278088838114154\">Tobikosushi Krabi</a>"] },
            { photoReference: "AWCwydh69GcU7-kE_Fqc0V4ppMoyeG9Kyemcn6_e21NWfwqV1r5iAAimAs8P9RB45mqb2VKVsjr0c2gG3C584jRy1ENLzLtCqYf7aHndOUSt1JKy-HJ0mdfvIAbUjtFrjmRUqP-tJFGtcNszbL00Ax2OfWrnyRwfy0g-PRTmK3v8LvYW4YGzqxZpoaZYNV6OLEmw2IrTNBaBvcamOjKSS7oe_rTAHTTvm8q9dwcU2ziX7SIWsoNpsf1MeVFsEy59i_LwHP_F0aP1NMYwdmzkzGKtMRVitUzYzxRR3CC9Oah8sQsJBL-6KdUs4onm1OUw1Jy4qx8VCw6Mb2w5qYo6TW_f52GLgeX56dddpdzppO67eTik2ojUSOeTPHkCRgb8kIjKTe0Vli1gesi_waqg6VhXEesWmyTTGIjMS_FGfLLsWy7uy9t1klG7gG5vk61UbA", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116943350420898985198\">Lek Dam</a>"] },
            { photoReference: "AWCwydjlZQQafnH0lR_Gn86snR_tozwkj_hLZ3R6oEGDmaazQ5r5D18IDif04eFgNENnXb523NJMrgSUSU_7e3V9gLSIuU_WlgXirz4HY7HQbGAXRldCFJ8DlEi8jmShfOB44m2gqPNObhCT4USvl-TeV19dtxa2qcfamnSPejTxX1u3r5r7fzK542Ct2NPOHgsN8E81-jXoYy4mRSI5jduKms4JguQws6cFK1WMWN1bh3WyaiwzLrQeDlueLAUb__oXaUxbLvfXVcEWkj-lOkqJedlWZYIgR_NmqBYUqu7erOZDYi8p9_Gz3x5yK1B-ZzJTKkXpb-iAVU8TIWFi7k39SLwPkA840ZkunRAIMFeCDJajCFehwuLl1kFBEe7ZRqFBO6RroIqa2htSfU0vjkKj4Vkw9nk9NTAw92m6PXfDb3w0ZCVLSAYBUeggBmQ35A", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102882445372753423348\">Teerapun Moola</a>"] },
            { photoReference: "AWCwydgTo95dHQkeeXANZ0pTuKv0KLpNQ4LZuHzduT-Ko88jfkF7--R0q2cTaMtvXoo7gJ_DLa-lbzqAMZlXKHvvlqhCvpoik6VBQMPrnNEULue2Mx6HSyvFVRtWhgoGrOiNI9HYlFWFrsPslrWuK5pzyX1WTH-RBjsP4RmRL7Zv_jpP7SoUeI6IlLiKgMCBbo2b_OjUY8W20miqlET3w-PZl9VjNnawMiSwUEK-GREVgctAo_w3VRSqT7lihXBzEeYEP1VCEHWJuKIDsPiIIh-bcq5wZGPOuuz3YsTOucdV6_zbafDZC7Fq6OjN37OV1Mo6CQANX_DeEdE9_PbEDkP6DlExDrs5jbRDMb83to1HM53fsZg1OEDcq65mt_q23SeN6VeCZnEPXd24ib5V6Bsx5O8lpZPlwdm1ro-Zs6cUByRzlGlT27RAjLvWqfrzHQ", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116943350420898985198\">Lek Dam</a>"] }
        ],
        summary: "장인의 손길이 느껴지는 아름다운 플레이팅과 합리적인 가격의 스시를 제공합니다.",
        updatedAt: "2026-08-15",
        highlights: ["예술적인 플레이팅과 나비 모양 당근 장식", "아보카도, 사과, 아스파라거스가 들어간 특별한 채식 롤", "합리적인 가격대의 메뉴 구성"],
        tips: ["채식 메뉴는 별도로 요청해야 합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스시", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.facebook.com/Tobikosushi.K", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8061591027708619375", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%A0%EB%B9%84%EC%BD%94+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "렉스 스시": {
        photos: [],
        placeId: "ChIJ3U2aIgDrUTARAvoOnDJx3lU",
        placePhotos: [
            { photoReference: "AWCwydhm1OK4dVrDYX-jw3DWcBq7u3Jz2AZNdEaCte34PmrZJ__ugRNdR2rxythPuON7Lf_nQY2Cv7Ok0fZpH-LdLq3IInXuX_TI128rowIxuW0BvPBcJAJEMn0TyRxU97LGww36BTlWMdL9oFchZDWLg4Fdc7PDS34px9oCfYF7Yea4sFxn4w3eOZgRb1zHrVjFb-sqMgae2Z2_K7wI_uw9F_piS93U8IIqcMtymvuU39s-Neh3pmDxf0VFGBtK7_zNqK-Hu_a22JfArSNY2IvAYQXKjIDIcCujHFUwaFijSngbXvUQBqZ7lcaFzLzS1HGxrOJuwQ8GLvmA2H1jH6qEfyQxVs1qQ-6z8-RjxH064P_Apuu9_zrzT5_PKWmEVpH2_J663gZGi4AfSsuIM6Pe80hSzDO4bCrCC26LT8irxRTDXM_5ykNtQJ_0dOkGJ8fu", width: 1536, height: 1588, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101773006686732474701\">Lek’s Sushi</a>"] },
            { photoReference: "AWCwydgSq3UlLn3Ds2hBz_nFqWaj9Ib7GKMDuKtd0qukDKlKS2SuXgDNJg37YEBIM3uPELM75jJ072ey5ipUTJHLhYEv346pBkl6WUOm0H3I5wsDRwDBal8jQsfMx3yZ8FpSmUxcTMpszyzETSVJrkSiI0y_pvjBTtC9nOEOBxSVvflxNQ2Ut9SzDM7qgMF5vbdR-XUEG8Mlp0oCXWJ2ORpo0JpVkB9ObCCN5PdpqZrjNbOvSkFAVLBPfGmVsUdOgWFytwUn3qEGwLBJG5O6ZffwMixlupGNIdILMxP2pCeKmwugTwRB3kpP0AxbnCzlpdmNXKcwVTl4_dw_qY2OPjcZG2PwArePbUu6eU5k8EyWb997Sxp_PQ2JFsxovUvHJUzz8PoGQ5kKgadDzjPLsKERSwSiIAyW95eNAsZ7gJ6BVjc4QQywiKqjU4u7Y5S-Zw", width: 960, height: 718, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101773006686732474701\">Lek’s Sushi</a>"] },
            { photoReference: "AWCwydgJzCx7J-W0YowSP85_Q6OaLrwbTSzedQg3EpbVDgGKT53iGopW96JyIg6z3qzYd2KZN22qk3dbhRJGrtDKHo_WRATeFfvyNaUFeyMirXstGMRaNLnZK2i-bUeD7QTnCYZJThEWZ-khadCzoVX47QRebaIK81bPBh0ALf910aYT4esGvg6RBq1L-uwolnfm6KihxfYGpcs-2t6QbJq3q1rxX8QI2DnBhG4i7AEf-Uqx3W9qHCAl-KReNxzj89I0hXoMiRgIuRXtzqqI7C3AQtE11x5MUXOesU52ZuRqGNZm3dyVmdGKr3-Nxta6wEwAIky7lSdPrQUyyjM3c6mtjcJRAzW5u4-UYQv7LR9CCaOWH09c-KGzfGRrKj_WPJ0y-pxq7WkEc-OZ48NVPPM3OIxCOMObkZeCRY8UEgYBf0hGtz5om99QxyXnOfs1j7Cd", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108370791907934785581\">Yasmine Kaouil</a>"] },
            { photoReference: "AWCwydgotCI-Fd40DhYkVKqjttcGYtbybmhweRhK7u4pNzkn3LWHemGLEhILPaGfGLxhEFUVJ6DY9RAAW_XgSCudD7IEsp7ydDQ3VpBK5ReiUCA4msoC83z_ZL0Eqx0rx27EYu88Wxf3iAV9pJLT2y0Gxnws-DI5DrWDO9VvaHV8j1Hz59wZgrn2wUeZKVdUReNWMhv0ktp0VjnYfaUwrH_PAtQEmM9MTDp7jwz0RHmCnf5d6_pCo7Dg3liHLSSgLHz5YBNQzjKkCpFO2y-MzppcjeVf0-wbkmbwbSUr7AIoXalq8NVQ1zmnHbcK9XNPVRWfsOxgN8i5D-cOUj-ZTruSU5rKauFxsQZQCxyJsCczdMkDL92NuoRP2Z91NJoWz3rni2jqqyk9eA8v6n3RDB-PthJBmB6jTdhJcWQMWKC6LUtpQ-4PlbUtyvfGPh2uUTTn", width: 960, height: 718, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105582831696705967214\">Meg Munijhan</a>"] },
            { photoReference: "AWCwydg3FBx3FDB4yIZySLdj_XPegq6K_AKB8LHGTimDBFYtjiiqPwNLKiG9ZL7YK3O3aKUNJ6-eesE_qicEGEk2hs7gQBAYJx9Lw1lO3L83Ti-zW8dwriGPnzZVreOsM-oCIU-QLr83AJknb3sJsjmMDvLG_SwMRdHFs2uJ3zC8-Ru1Rn67u-qddvbFG0DYFTGiFqCJwk3uhj-FGBDGkDsck8KhN2PEw8ezLiPtYuX7U6sHrgYhK7POzgFs1O0Y7VCmClQQ7KXrUvnDYx-890dEkJwKzZ6uc3Qj61vYLJ5zfliSgzHSUhX1wEX3bgVCBte7Fdk2vnQuZh92MKFNOf-v-pW3OiIeZwqAXEN_3aiIS7Qfc0_Emkhc8zUrveZX1vcym1eRDnW50gUovQGFtfBRNFIS5n76CJEnwnGrH--rOYzdvU0YHZMVLBABaDGt1w", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105396688202933597401\">Ido Bagdi</a>"] }
        ],
        summary: "높은 평점과 신선한 초밥으로 정평이 난 맛집입니다.",
        updatedAt: "2026-08-15",
        highlights: ["신선하고 아름다운 비주얼의 초밥", "친절한 서비스", "높은 고객 만족도"],
        tips: ["야외 좌석 이용 가능", "다양한 종류의 스시 추천"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스시", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 4:00 ~ 오전 12:00; 화요일: 오후 4:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/RailaySushi", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6187507400234170882", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%89%EC%8A%A4+%EC%8A%A4%EC%8B%9C+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "에이지마야 재팬": {
        photos: [],
        placeId: "ChIJ6XG9jOiVUTAR4lc8uzfjX3w",
        placePhotos: [
            { photoReference: "AWCwydj7UUw6uCKSvlIQretpxDMUg1KMRXc2PsSM6tNb0iZtHdo_VsnoxnPNmdnhNY6YZqr6FkKgf9p2pReDljsf4Z6IDChGaY7NH_fe4uihplg403LvxfjNInWSWLWrm9U1h2d0y2Roj8_lNLXA2qlikjziOhYA64gtm0TlqrFmKnrEaLPbZNbH9YzJaTLHpfApcJpD2jF1_WDxSBiXcXCpMJeOWmFu4FTcEo7a42UZfAHcs9TpXRONUEjhkuAwN_eQZBRoMWfaf0m6SWfVD6TJLir2YpKy8uEDDwTb4odRC9ke6ykYkk7sETOSH6_XLLdPTuQ3D9N4sZNM2DT9i-brJoxSMy9WrnOL--HBia0QrfILEslUBJWPD0ooXmCueiiesv2-BtWGXqQSiVy201IprFvxtyrZGPsTQKTt8NdZdTtC99QK_BgoOaOoiSYHbg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109433783918846775626\">Isaan Fine - Chef Deaw</a>"] },
            { photoReference: "AWCwydhLz-AVkBkPE1JkdN6TUnCY2r-Ta181wrPHKVCLJhZ-ru9LBnAMO61OLUFH2uoUAj1stBzW4w8pvk0p-ycACJw8tPWV-XdP5jG1WdmuASUY6EETB0nE9k2ivxKcQN5rjQOPSceMBtb_aRION18FNh2ExwaExSo0dNUchGH5vHJCcfvElB7Qb9iYYWvImGyEx8lP81HbkCgSsvvJt-ZyDuijNwW3bBqNKemUk3kRxbjtSVYdnhHKZ0k7jOP3EKdDq-e7jJ5aI_8RCcsTx0DGeV49Cm4aN_F2ksS76B6Dzt2-enYpBXD1Xnj7APQQ8mRhWGRmNJ5iXryC4gTIIp9B3Ms3xDh6wUfm6J0uAqmJ6dIUOGC9A1-897AIgJymRyqBo-hsL1O8YkW92Df8OBbKJFIkuFbkSHksDBkiyfzC1J_nLIX-FkJXpV_Hg1n6PtCB", width: 793, height: 1122, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104625304728879781382\">Eijimaya Japanese Restaurant</a>"] },
            { photoReference: "AWCwydg7dZft6tpXrX-PlltcoHMb0OsW3YUm5UosIWjQwO6G4sHT4YuFZuKm2BtfZCGa87wEAfbLTE8DIEonCX2nbS0OusFAcUqQHtM8lithrtgmMWqW_GlUiIxQZSLxtF3UB4i9M3do5WUZeQ7LwMN_kyFmdaM7q3naPC1qEfxfSniIFbICQ7yYQnOiOVWjjGri7pvQXP4n44tMW--jI7uTxIpM3sQKNnadYjUxz8_dRkClGm6QFCfKmxvtlq5qRzvCoqRLlKIKSE5jYWeNxPsfp36zoryvBb-oWykCqpQuUyOLWMgtIVItyPsPINRx6mtCZoP4iWUETCz4dhYLV-5gmHIxfJuQqs20DUgzZWld6tDb7bUp6Qtish7OUk4Vf_JS3NbbxznH4xFOOf64BNwxJ5haxOCAtGjDhW-3QSuosLjEXn1ub2oZJSB2T_pqR9ha", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104625304728879781382\">Eijimaya Japanese Restaurant</a>"] },
            { photoReference: "AWCwydhmlopaN_sI9HwqiTNLzg54QgzOF4vyrHztq9gBsiU2G5iHA-oL8-Octk2Hb3zXNAVGx5o33uMloOkGufp_5DiImkrnTl07t0r37hdLyZkaO3RWQzKO5HVVrgUERxoAfF-LDY8S_e2hAU93BQ7xMYtY5Cj5zRU7COvMIO_nRd3u5eqY6SaD1SYZ4Z6h4zuIDzMqYG90CbkRtdHjOvxirDmYmckIdpmEY3bCkYtWIjSmUd8NIZGFkJHNz7_kXdCCZg8lJ0nOk8wT_BPlW3Xz5mspLEqr7u9yv73a9H20J96JEUnF77CiLT8XDQirgR7Cuo6din3u8hzwrscVVVCwTNZI2TCC68yorQ8Arn7_rphmljKKndMDZgE3SWaJCmryENj5WjNw-WTvCEnPiRZhIUkM18IYQ8RHI2izUwIfc5WzYa1Y_ew_oqFJ-EQZLuey", width: 794, height: 1122, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104625304728879781382\">Eijimaya Japanese Restaurant</a>"] },
            { photoReference: "AWCwydi7tC5Ww7RNiijMnc9z4xUAoSQolCDwP-30Ez1S9ucv-5kAGWxEABjpFxsCoL3ljUjMjee48WluY5Un9DZhrt5xx2AsRj7DQERIhMbzjLMSBqHM0Qjg4XGDWjxRqOK5BpO6EdocjxDDdLUbDjho-TkPNbVHNdR4XkIPpJRWlX0bOih55bPF6VRjVzhte6ZesNCFTDM8qROovseOJ05qJCgDDODB3W22U_TMrWy5hOSodl_gmLM75e4tazz8RUC5NbR1kl61KFcBSD8Le7kHnVFlFyF2WO-CVuuUo8MLL9vOu7qyEgywNmnS0qJRtACBgp1HFSsTl2dVkhnhrM82q3rhQ4X-o9V8XK_HH9FqFHfcwI2tjr2S7mNIg6hEoAO5a_HMV-dzdfKwcInpi2Z7_Y-x_PWUT9zXjoIIfNsofOi1cd70kaACgkiSzoKaz0q_", width: 793, height: 1122, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104625304728879781382\">Eijimaya Japanese Restaurant</a>"] }
        ],
        summary: "합리적인 가격에 즐길 수 있는 고품질의 일본식 코스 요리 전문점입니다.",
        updatedAt: "2026-08-15",
        highlights: ["신선하고 맛있는 음식", "합리적인 가격의 7코스 요리", "훌륭한 서비스 품질"],
        tips: ["주류를 판매하지 않으니 참고하시기 바랍니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 코스 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8962131611994576866", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EC%9D%B4%EC%A7%80%EB%A7%88%EC%95%BC+%EC%9E%AC%ED%8C%AC+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "조니스 피자 아오낭": {
        photos: [],
        placeId: "ChIJoZj3HOC_UTARZcvuYnnNRWs",
        placePhotos: [
            { photoReference: "AWCwydikU6uprJ9GFLsBd8q7JPAJYy1-VDripI_ABfd60-s3KNy2dhqrsi6ZnDQlsqRfULslo6Qw5soD0DFKFQjPgRK8iSU6u_Op2Q6JxqdnaO05YuHpV7AztT5VC6D-a13Z8XLXGWCILhuZ_ytgR37EqKI4KS9ZsH5Rw4KQwWQNKU0YwHYm-xYrD2U_TX-ORtqgeXYuLRCEO0z13aV-G2L5DjnwPvAoFdOb6aIGpYEnMExFlkBjU9yw6xZMevXqnZOEqtJ2p_F8nAaTI5HEdfCZ6imRqjtVAmRhEOL_7tRk4NIAlJdQLSkTxV0sECaQStg14EIKImTK5ePmvZvQ88oH_TPpQ9-vhAH6I34grsKhCMmPzsGy1fNCIgk1djeOjr2S3yZR8Ttr7F_FZa7r5Dxi_JvSuC92m674Aih02U_qtv1fvBUm", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102792883526667807500\">Johnny&#39;s Pizza Ao Nang Ristorante Italiano</a>"] },
            { photoReference: "AWCwydghFbkNOaHSrUheoMda1xWjuHU69P5eYR10I29D0Eq4dxx3yagKjXG445BvORy3MGDZ1Z1U6gLvFmQIufvBPUkz2zN4Ki0UBLFnQHxr84aWYNx93TeTSbeKBMKLQStsLa1wEufDHM239iIzHZD8NTQRIJvc_kEdemFVQU4UBDtkCZtkwgCvqE2_-v0y_3bsNxuPgLP2nKi5O1aeJgMRUoCsfi_pDR0HcEtT6qCJS6bWBHLv1Mokb3aRuLiQrh4F0c_f98AjBhs-zb8e6cCnSdt8wRIaeWlVMG8VORv19nwtSNA1pTJuKOxlwX5b5ju_ooH_URpHwP0jI5vJOPuR35D6_yfUVl4RtDaZUaEJVD9cuZAv-0Cg26eflQMotoPyIjPAwJijmFNoEQbk9XFOjesUfr8rzR5d4jMRR9uFSAU", width: 500, height: 800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102792883526667807500\">Johnny&#39;s Pizza Ao Nang Ristorante Italiano</a>"] },
            { photoReference: "AWCwydg-CqVkn4RrFyPOw2tfglkBgn9VTPfgtzsaorcps8rOeko1YWpBndWA-ocSlE8072jd7pooIs0blyQqdz-WLjI8Blchqx1sKua1IxIpfmTZSrGWSqpD0FtLy09NzBuG-g1r9C1mCC5wJ5gOFeD_1QYOFEydaJaK5HNFcM1o8wGqIUXKPG2rjiw5L6G2xTNHnSbrfsKe3qCEbwjKinxjTBnCF2GTErjWSpUR2rhIqFnkFAr_HGNL4wX4DOMVsuyXLB-Ox_x9kTKWUivgm4Z0fyAgQej1eEb8_tFXtkFiDn90qOL2MQV4S0pSjyU6bM6wC8_Qz3kmim_uIuku44vTDKG1BEWqvvivQKBsWDmdEr8sWAp-mwmWNYIi13axjDYw74Fpq1SrmtFu1yc8_PfKC2XayDmU48fo4NqquuEjIk57VXiUN7iT3T0lOtt3VA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108001002775282962439\">lauryta castillo</a>"] },
            { photoReference: "AWCwydijU3OjO4lA1havCYLpiKb_MZVWHXfPjT5-_1v7IKS18HBqlY6UrKjhE0iLMCfHAUZGwmvCMjmw9sO54mJqEpdPJBvb8_mTGOOdSp0N9Yg0iwjQ60beu1LNJ7vqJRijht6-tfUoK1Tfsx4xvAkh6_g1cx5qqS4GCknLueph04qnRGv4HnXdnNIbA1M8B7JCTQXzZPkgSzLhEaSMgfJfynysC2GtN5OF9vvNaR3o59JAPfDnFMbNf8iEbG2BMRfUANk2rB8Z0wPAVrLkfMNl6Ik5U5GIPmy9CW8hqPUI-F72jPdabY8rPsLnu-a2wVVT_YzrWlZQJAk-pCFJ2pA5dCjDSzoMnCJwCOgkv-FGSAhCIllsGY9anBSVoB9Vf9MQa0I5eq4vyeigKSsbu_Qzfhgad0AzyVHw1t5eX2Fyl5XkiLZFzsNowQnaf9wIkuq8", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110385409285486847717\">The Dive Ao Nang</a>"] },
            { photoReference: "AWCwydjopHwdK-qZKqHhKaHv4kBd1I-NI8OZYM-GC99XUQBgG58ObexecPCIQIR30b-46YpwlHSL5lbeBhknmZ8ng5tcYe9aKgwaut3Z6R27vHFMoaX0h7yLoFW0w6wjWZueKcEM5Gw5I_j3qyZum6xYxpP9X4A0SAFh7jIXduEyPAOqiidk_q-2ZWPdfXyTsLQJVqmnDgXfI5pHBHgObUXR2hbavoq52vn2AbaCBFmCdKfPMjP2QJlhVYpiHVFvKme4Lb3kid54RaI19RJO8wrbdZ-bTi87ofAAhzA3MdRKYzRF2cHK6Igvm8s5n5QcdX4ejJ1SEjk9_VXxow2UxeBDtB4QoFf4bfuIeHrtQOQF75xCScf3t5-zMK30H7lPbVVVdcpDlZA0oiRC2DgVuIF2ZpvL7kf_cEYabmx2Nqby2stQlqApzqtfNixuj0N1m-rk", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102429904770493394447\">Adriaan Gsm</a>"] }
        ],
        summary: "아오낭의 인기 있는 이탈리안 레스토랑",
        updatedAt: "2026-08-15",
        highlights: ["훌륭한 맛과 서비스", "친절한 직원과 셰프"],
        tips: ["조니와 즐거운 대화를 나누며 식사할 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "이탈리안 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~10:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/francomocci196/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7729810256685878117", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A1%B0%EB%8B%88%EC%8A%A4+%ED%94%BC%EC%9E%90+%EC%95%84%EC%98%A4%EB%82%AD+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "우즈 앤 후즈 크라비": {
        photos: [],
        placeId: "ChIJsaRcUJiVUTAR0y0zkCnNZp0",
        placePhotos: [
            { photoReference: "AWCwydhabTjKfnunUpbR7589UjmHxVDbZPPMzRksqMm8LpFIZbi2SZsinbNhQgldzlMaWkS5NGsmgCqd1r1YnTL3uj0mOvZp_0gC9qmiK9V3YzcnF93yNkCOPMO5Ynwxh5xH7R5n_4MFgQx1v1ZCyRo-qRFSsUDTnTGOokSaJRNga0Wr183943GVhbeCxwdMsDAW2ok17QyMQiMBDmxw5KUvFhzIzPXGPVByHDsp0NkZO1kESsq22sbGpQpAiGBdHYJ0sEIz_VwmsgApV6ko43s8wPF-o0QJIp2VTs1NcoHEjxbbMUlPTnj53zbQh56HSP-vtLraql3oM4wSdRldKISsO0p7QNm3JcEQdhpnLuyGv2DgZRLWAO88jdW0KDYPC_N-_G3B29fZ9vTqOPIgCpYi6FYtvZRid68v9YIw9SPP8xJvoyI-1QDUMGgd_YemPCtp", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101529487412065386333\">Like a Wish</a>"] },
            { photoReference: "AWCwydiOHhce7SJGC-33GMpru4yCY-lmj0Im1o34S-FYOZR7m2jTxevRj30rp54V49goS3iiomQNDd9yB-Uqs-wbZUnyRrlpnjkAh8cOgBV3tEXQ2FWZtX-Qm6qjnyEe0xWw4VV3jo2jMsmGX0XOE7Th-FdZkUo3fcGlaplXLUKAgqr5uAzfZCR7FI82cdBJweHOpYW0lzAkgTh-DFpP5THQT8xUTmO5362oyZi1V9wAmWUPsxAkXTGk9ffByDcvkzWKoFXx2PkOmllDASMsjJeHOW45cBz9y6QlkoIcnki6AXIMJFTqD2kDua7_4TzQDkEniTcoqpKoug5ZGlx4gAdOevPTYxFoUs-u6_MFDF_T5OG6UHyRyshXLVhIhm9bVMBOUS4VQYa9Y7_pXbKf7ZVqBMHyBE3NsrS5K2WF8IJhLDdt5RbRVxNSwm09vgedRsCT", width: 4800, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101529487412065386333\">Like a Wish</a>"] },
            { photoReference: "AWCwydgYIZAgV4R1zC2GGcGWEk_du0HeN5eo2ldqh1EcDO9-zohWg8kOJfQHjwewUq1bjdmc1GW4WTI7gjBPrLDQd7nmKveC9b-voZnarfAPSfQE8nbex_MIQ3FSDsHO3QPoASK4O98Gi2OW3HpNkMIZ7o9MXo8CSAzx1kTcY8EoYJd1ZB50COyDd4E9jGEXqP0LUU3SO17verMeJamnapKnOQo1vo2QXHJrVfoKsfAvuoIQ6gU-h_UoMuON8KhBz6K_L1K__QHlQGgEwkOiur9-hpV9lu0Wq_FD1HnTp__T5IgpBVE0brLwBB8Wtisn87KczXowsUHilD5ydVaP8ECSosVyQZ_JNwlYeOJ6NeiAR0CWAlmwEMwujLl5LZEnuEaOIpz6BM2q_L7UMAm5uMskROZqbW3Omkz1KP4TkegIPp2EqmQIHMlFDLMZiBsZlxNr", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102266561724136041286\">Memimill</a>"] },
            { photoReference: "AWCwydiGNtHfXS40_xpVDDWHVij2qxqSgTMQeLIEp1mp010OzuKWxAdrB1YLq24Ov_HotJxDWHKWZqZUYU67JQ-Upvgwk8BT0Ooqk9vUC8efayAC7MHhO8klrpvUrEawKCyZoOaIsMmXT-Ihiuo1fCxiR23vr6el9MzpRDUm38hcxt0eSC5KdTy0T2ZOywDPBPa_HXjL1M5TwThTpHDbM2TW0wyo-SBCFstod_xo8wOFjjCow5ooQ_JgAMGTFkvXievYxXRCd3Ftq9sSyk4ns5SWIDWt9haPTtEuLk3WxyfuHhtstzLCGGl7zgnM0HtesFuVeqQZmK5vOpslqs80evakCnlQfr5bAzlagv6gvMEGn3aVXzU1u30Msb-sJ_4trS1YQjAwTmMtGJpQT3bkuYD4xws866RSzDcnZvFYFJxDUIT91HEobQnq3m6tSCdY9I3s", width: 1152, height: 648, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102424365484716588691\">Woods and Hoods Krabi</a>"] },
            { photoReference: "AWCwydg4mBG_Ih7lzYtpmATgr5X6Lau8Cs6c-bnKaMKKbH0Y74YRzjtLqUkxzlvIt_9BoAJj_XaKSPx4TMfZgtgQYh3yB6xggRYxzlGFLE977x5huWTi72jTteYa_a1Hn6cwFtssEByg41u-tyaWOceRL4dlUogPMVX9wFvIoBL6sKJH9JUSTT0Y9QWkTyYo7VK7wais1YYJh6vF5f94Vtf5fZjouTpIznjJsxgwgfhslBpDAqcjEJokogbDAYpLPVvyT8vxm3AvU6t2pOKxutkVQEorGKlmqwb5XamatF4XKXaNwfDrvcbnncw1JLf0IBxRbM63ZIyHOGORiiXgkQAK0AWmnryBjTe69yhrQk33bdyGAlwHkT2j1ENNHcCGco0C76dZQ_GczCwlYfX6jJG3yVnIgVrabJ56pnDJGqHNbGZVpILaqfUpsz4UVNqRQQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103726145516959367840\">kanlayaporn bunchuwong</a>"] }
        ],
        summary: "다양한 메뉴를 즐길 수 있는 크라비의 인기 서양식 레스토랑입니다.",
        updatedAt: "2026-08-15",
        highlights: ["높은 평점", "다양한 메뉴"],
        tips: ["육즙 가득한 소고기 요리를 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "서양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11341978289975799251", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EC%A6%88+%EC%95%A4+%ED%9B%84%EC%A6%88+%ED%81%AC%EB%9D%BC%EB%B9%84+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "라 븡 레이 씨푸드": {
        photos: [],
        placeId: "ChIJ1S9oCdDqUTARUGSKjWN-Ehk",
        placePhotos: [
            { photoReference: "AWCwydguovYx7izjnH_mjA4y7f9DQLrsB_0GdoWkuWuD__l8FTSoUtOePyunQHtBDBq3aUM80dMZknmsTdQvjCrAaB_301kbJmZXQE9Uit43dIBiYHG2uKn_OCIszY_fl16sOiUoWTb4-2WNigbvcfrvt1sYGPHmvmgKiDDJDMamRa5EIaG_4JMvy7JLUjpZ2KnAJELuRmQECpnttOH_him7huh28V3hSns202b69AZxfkbFMAFKpyj_snNEe9DE4-2wTsMbVlgNH0el_QuApgwWDNm8zVxADu7T1k0hkZPVDbgozr4oC-MG9urCgIy98aE9jWaq5wZOdnk3MhgQ-gTd57m8xV26qhBK9G2E1u96tG7ZDa_gKN1eiqDaCKI1YsHtSYC0EIhtAjkR_4FMzbowPbDNWYd6DjMNF-BSE_Gfa20", width: 1479, height: 1109, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108542619882555770425\">Ra Beung Lay Seafood Restaurant ร้านอาหารระเบียงเล ซีฟู้ด</a>"] },
            { photoReference: "AWCwydinGGRGqmczur1NYYthKvkphpJKxJOM80Lsl3CA1d0c4Kj90k9WZsXzYXBig5wf_bT8JE1UyZ7K79-aQtuxbD4y6Al8GbpaNl-fEqtVK3YZJ66fscLB5pcUGrASnxtO_Gqb4GjiEYS-g0rMjHQhU7F5NRCwnxb2EfrK3AssDGxy6al6z2v8Mm2XbT9AFp5ycis9x0IBZtUBUZ_B4cnpLkicH61Q405-I_qI-BkXGhYs1I-LA0VH5PdA97VHxtyvG2TR8HtC9ILJA3U9K62ozR2158mYH1JuRqdodJ-q056W1uDGQqO8QirKlGzIMLnIvPMB1j-nhw5Zqu5vmXOsRvh3UrUeHHSCm0GdFwZva4YYpNGJx_czZ2o6sStKkborK4SgxGImOoIMJ2TeEVZ8VVk30HTitoStYygj-KTVmZK5_DotESp2Gseo3H6tBK5q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116915254321905349746\">Meng Choon Tan</a>"] },
            { photoReference: "AWCwydgCa6zHBn8sHEQHez0DqENQ6ISMpvJMloAZ6FgayzzV8HVvsMKZR6IcW-nzd7GAKuqq5WFdCXWh1IkXph5djmkk0XqU0unHDGIeGXX1N-gZNV7PAT2MTIV7u8WbOCvrTY-myx9lNUw7OUw6XHzHy3TTE81e4f7hLfPQMvYqCRna6oHPgyLXVQC7WwsjhKvt97ByFbK1nMqxliQrWfU9uX7qExiB3FP2yaz-dUJcYoJKdh0ICWk8k6Wcmo1I7rmH_SFlw2aKxS2nBx3tkSETQJz0-Dpbfj63TTJTYcuZ-Lavvng1I1aDdiu33hUUDppx2gN53kE-1SSCjqwnGhYH6A__PsR630JQSxL3sZLTEh6nS89sEIePyxnl2JvloPxqQnWpf6icOmczDepsvMstZC7LgIPJb1PLupYj7BOB-r0hliM9JbNTVWUYBTeyhUwj", width: 1084, height: 1104, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108542619882555770425\">Ra Beung Lay Seafood Restaurant ร้านอาหารระเบียงเล ซีฟู้ด</a>"] },
            { photoReference: "AWCwydhqWmuhbxDTz7huJ6l5lmmm2Hj4WwkfzccEgFQIxgCXuIUHU_Nh5i7gPGxFJJtSKe-QfBaYVDp7vREYHj2Fn9jZTnFjBj5Gq93tvA9ytXgwJPzf1WT2Fq8obvcOTdov9Rc1xf0MWeXbz8PdXhZZdPPO8txKYdSEqvKsL5nJp_2Cj7D82lcMLu9-wJsBqoMZ2rD3TfWS7H_h9Wk35PlbtBTYZ2jl2NW7mEnpU6oFBr2g2Q6ow2eqZGP8xrs9ENWIbOX4WQLhgjhoy_dKEF-h1ZF9pEavoWNKp3Jh-E9oHuLYmi1W_gZc5_jSAa7jbQKEISk6OGdmWI3rLwNZctoOCpKB7iM5miMttWxMVNc04pLJsCHjocZNJfVc2nHS3PGzukpBF-u6eTFVs4FQYN2pft6r9qoA2ypenABwnYdSzX2FBRhe7ptmOiU-lIbEVgPh", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107217085975404691325\">Naltavuth Raioop</a>"] },
            { photoReference: "AWCwydgomjlyuJaomES6dH5uxMnR9HMqNgSUkfZHuuNMpZB5NrQ63PvbTo7pehd63fkIotQRMrLuQMEGGSYMk8ygrUZ1gATE0-pFXOq-7OD3Xj62rfd2-QbUyMpIQbCBpu0zQZKif_GITxx-WTyKh3sA3ZhfPwfbR3gq6OvskPzAFXNhgpDwOafwClgh3ra9VIFh5-Fqa_3HcAH2rKWX-W0ZBZLOPr0PsmEWNFD4g1UQCgcNGJPMJ-PqGsikWkpTE8ueOizF42QGgd2AqWAdOQu00basHkwox0HdSMBaNRZsbdLPw9J6pHO2RVHi8J2pbn2CDN2o5XNARBZApz6m9HAfRQmINwWlahlaioxQDkS_XnSIr_dnipY7Ifc5VevF6P9z75NGVLhuFZONr1-Q5E2FrCXaNw1TKCPTyCBwMv8QvzsQcjnj3uzCKchRNyyoZkN7", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104636892418933733695\">Natthaphon Choti</a>"] }
        ],
        summary: "맛있는 음식과 좋은 분위기를 갖춘 해산물 전문점입니다.",
        updatedAt: "2026-08-15",
        highlights: ["높은 평점 4.8", "풍부한 리뷰 수"],
        tips: ["메뉴마다 맛이 훌륭함", "분위기가 좋아 방문하기 좋음"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/share/1KSeQw1y3G/?mibextid=wwXIfr", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1806645366570509392", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC+%EB%B8%A1+%EB%A0%88%EC%9D%B4+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카나밤 뷰 씨푸드": {
        photos: [],
        placeId: "ChIJ1_pBCF2TUTAROCXeNo6QTjQ",
        placePhotos: [
            { photoReference: "AWCwydgpquDBAW77WyaE4qxQUxhBt0qgICbKZrOIV2bK7BYlf0ZEt8aY0IT3VLQ9IPKxuhBgUtcAK0K22P3OtCGiBYeGyBGvJf2MQv7vjjcZOdYB-ULSZ0YDFafqEL9rw4UpXJy4NQgqXcg-lhmGIdMt1cSinjErDLffXCXXwP9gqG_o-BbVWLsbveCo8P6fhJebsOoM8M4exm5S9d5PmWk7c4Ex11QW2hfFZpH3vILyd3dCdPAFoqLXa-tQmCkjS-OK62iqsngmqJXOpn8ctQqwU7iGQPfIvl7ZFL7JwKRfWSR899lhcgy_DTm2KD995IZjkHYCm8Eb5B2G8e3fHbBlwbHX-bHZwvCZLA5M-AMZGRLCuj-KIQ9zx9cJiS9QZMc4gi1J_aHRy5G_FUhdpMQs8u6iLwaAJ803bkw0t-tawOSjs1cq", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105590826438329259300\">ร้านอาหารกระชังขนาบน้ำวิวซีฟู้ด</a>"] },
            { photoReference: "AWCwydj_Y4L8ELqfc4bkgoB7xVvFzUf2wR1XhAg70CDr3xkgxMado1ldG6D__aGJma9rexHW1wzBF4Tn54YL0nqRPibu8V4du4r0RQWqsUu-O1vY4GmK_WpmGdk1I1NNs-gJChaul_5u6JdHQsEK1kcs9bKvbpUv97Sl4lmOSIC86ewqCoi-Ln8QUvlbKPYxx3INez78KLzzTeBiANGVPf0jrIJHZ7aVGnhDhbkbTE9H75E-Mt1cnj0E2gv9wYo-HAmGg2TX1jjxRwM9VZ4g2iwXngQX4R5qWXkpKgJGC0t_veHd5KI63ftSMMSd6Bl29cQu1lfpOHeHh8IV63qm13toSrOLr6HGiEhaBSuNb7dNSDy3fy9TIb6J91R7GjeB-gNFWpkfZVSCJ7QCy0l6C50chansAu6-Fy48uhD1YsR1gHq1wXBPzffXms6GB4TC9QMN", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115163707037431154790\">Nurul Asyiqin Izzati</a>"] },
            { photoReference: "AWCwydgEz9vUM5Uv3-E3i3DZ9dhxtdaVUsP8LmEQW_Sya01VjtswJfQ9gne0iQTEHlKIS9xgM0TtwjMY5PPZuVZquBYaM4eWsqlvUyDCCU3soCC102MsPW6hv8F0cvqlwzuO3OtCay_9Uj81Mo4rktDQNap0BXiSkcr3xzZsZKJyuh-v6-g5UoPDqT-QldUnhktX60M5oGgTYPgXR8rvNh2HPqejQnpOz2eLvTAGDZ7IsUHNODG5lO8nMGumytPvsuedu-QZexjsrtdZA3e7j72zQND064VE-Q47zAUyRZkyFvOpEyceRzt-siDINCz3bvvozOdGQLvV9Q4SYu9l81yGbEcug9xBBi883Ef3HYiX3ODTo-K6qp0yk0dqbuM3djZpJKiahKtvkRxEcdcQfMCVzQAsuR3UWtJn5CYmznDLNCq4elyu_BjwR5k__D_VGQ5p", width: 1496, height: 1094, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105590826438329259300\">ร้านอาหารกระชังขนาบน้ำวิวซีฟู้ด</a>"] },
            { photoReference: "AWCwydhK48G7NFG1--jd3mitGPXOchC5OkmA8LyxUpfFB6liDk9HjbOuqbKy6Fztemgw7iizmdCoP8mVS53ZbzBNvCBQbtcwpd7sDKovWio9D6xmT-yx141uS35Kg7jM768lCVodBskJ_-vLHtbDfajYuWKWhRF43pC996s8uheZfbBU1dVoOn6bjJeF1llRDUXBRMjSI7WeDebnFeSlfZqLZy2Z6lXxI9HC-AzsAAJadkm2FCbVBKhKBjp9LQCCyml-liMC9ZHmUwU9o4XLCPAoUMVSC6hRCQljuC9pLKPEQBqfSAcZ4neJwJM7_pGA--huNL1CZLxrd6aWGSc01Pj0GuU7ZQ3I4m0dsPhdiZOu2rwqpqiGc6K2EMCdOcy9Mhs56gL6SpHzhxZtmDW2OZb2dvFm-r2mqLmu2k92S6lv8vUnzWLZu-VRy9Npw7EFYg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116270004396481883978\">Nutnicha Pusri</a>"] },
            { photoReference: "AWCwydgnJKWE6_hTK-wT826jpyRhI57gsgNPBBOlDumUD0x2qyg_EY0hiIaVbgyoOSYvB3netbKzFtmtZtNtoUxnhG-UH58683XDnhh7dltjtgxmdVR7v418FEs4_pvr3BRG3DjpkmBxcSJBUy4uiAF9pPEqhNRa-khEsgTY9RYVpRDIvg9QSf0hO1T9fBT5syKrvmDmGaqah2WusFOlL92EK4mYK7nw2Spyk-5j7TxaiClkv629av5DGiDMB6joN5cbMUUSNxJZq7NmTERODMxERinw3b4iqNPXEOyi2-d51jpsRmJUd1IMjLkQtd56HsSJfOLActfaEWDUaUHeoSO__32voguypezGuReru-SJEfGDPHGgcxyiH11_lxDqZtqdAf7gnfEKFfTqdRZU3EZorrSbfC8_raRPTtWsHJDoi3KvXSVbOeE40lwOvBSt_og2", width: 1440, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109580077351574183536\">จันทิมา ศรีแสนตอ</a>"] }
        ],
        summary: "맛과 서비스 모두 훌륭한 평점 높은 해산물 맛집입니다.",
        updatedAt: "2026-08-15",
        highlights: ["높은 평점 4.7", "4,000건 이상의 방대한 리뷰", "훌륭한 서비스"],
        tips: ["맛과 서비스 모두 만족도가 높습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.kanabnamviewseafood.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3769108878635967800", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%82%98%EB%B0%A4+%EB%B7%B0+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "통 탈레이 씨푸드 뷔페": {
        photos: [],
        placeId: "ChIJ86xtrGmVUTAREilg1iSbiIU",
        placePhotos: [
            { photoReference: "AWCwydhf2B6IUCKJwhJuenFFuTdyEAmjMCsrT6Zzf5SpvI4KWbKKgiQyQfrMigsSSr72RfzKrDXOKJTMSW0-HChRPsBdNlZeNRXQOxsQDwr6EISVBKtSSgEdfI2P-MASzzLYsjNAaUeJgcAL2yhjFM7zk9s6uJVvt3QJZLVlZ2NTH3YFtRqjOcUgEUKtpYhwny2_sk4iFsVZLGuX58_ZKN2W8qcOJl7o9XMyv8lR69dEI3NfN6_k2W4AM7biRepuTCDXJd5rC7rbiqpJ7XXvVZQcGIStybrs4TfdtzOOEqT44tIVY1JDy2ATk9P5m3f5x-Xy6G9bmob-LeXZFqoMW3UtcZS3O-axM8GmTeMtq6b1PYtCc-s3mYiL780SAwjO_GZnFjKKh9UmiWy0WY21bIwYbjcfdzr0beT3OHes_aJbfG3o8nmv", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103333148624579516735\">Tong Talay Seafood Buffet</a>"] },
            { photoReference: "AWCwydiGWHGz4jbJMJ8C5G5jQPPy0-u0fhY9V4o8MvmTuJpRhvU7ko_DsAEKKuoFEGNK21I8yUN14qbdHvS-suAEwzRzl-f6lsrJFbgMO9Fs15kZMs45th4j4tUK1eeAUm1htO-U4nt9rqbK0mZNY8-Vrcdxls7YeIAgqhZKz8BU3pLW-aGZ9d0vuzHk6VzadkpmuB7d2E-XkYrmQZOzkm8dUTYfLanvTVQlaS477eH067T2h9R7gz7MIzQJJBVDdfLktqF4FUWESGyiP05t4nU3n63JlMO2vJ-DT4COntZHCZeeLpY3NHR_gkr-Xxnyupj-Ls0R-HZmRhpLleTYf4OCCPneTCEoBto3-n0B66XNDEpVcbK2cuHYlCZXMLVUZyQjXbvLqiX-s3Rmf1oFjNecjx5hCT7kAM-YwH9MkGpiDuZ8IZsZwlonJtO-cN5oiA7i", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112811737960134237334\">Aline Tran</a>"] },
            { photoReference: "AWCwydg3W-r_8WoMZoh78J0_b3rjH0jFZGCfEWcGfwzfTDPD8SxHYLZ7hMWW88JTunkQVJnro_Vm5wMby5pr5i2TtR_TKw982JH2u__-HCVOg-uydgQAd547qYnmEuq3o3fE4ronCPQXr1R-s1P6QOYVcX7RXsPmuQbKXo96rSs-N7yUh9OVNUZ7QBRDw55rOWqte-h65qarfyqinSbdD7RmE2iwIEyQkQzRUII0BBfuOvLKAqiodhCHHNRchfQ1s-5_wRrhGMcYMlfrw6qustsgMXAvyKMG80vUAYvQ00edw3U-7GH255eHwOJY6ENdbwEeOJvbAhFuKPjPOBkeYeSkAw8_up4X18XHeohCEVi37mEEdtIgosRIxAP91Ivr2tcHmksZ24Lk5og0kM3ZSCY-qiMvBuUj1r5lX4Qai2yhzT1RiII", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103333148624579516735\">Tong Talay Seafood Buffet</a>"] },
            { photoReference: "AWCwydjAnYs4Cc_F4mNKmTuLoLvT3ADY4O1a9VtB1P78GAQxrmqLe4KINlP6VW3Wy6rQzDSQsD3KtFZTfruVODYzSHV-ABZmEa-Mv8mQOKiIj-p7pMswg3xR0MIt6Nsg7sbU47ytZHQTMWauQcTJKgy_3zAtkDq5XDeUfw4yaca1XusRxefqh6tQTi1W_CIkgbWBjE-CbAqFtemYaU4NUoCF-3UXKA3FNj5ciG-il0oGRGS4CMe7LiQ9qzEtrWShk_laG4StLVcsw05AdKLfLPthW28sEtjnWap99QmouMm5J9V9ycmdwiAagjyQzq9F8iJ4xoCFwlLCqA43ANwp7L8VkW0qNa1VY4lYQASv5jqSfmgOg7Z4ehiHzYeUJus9EiRA7e1LFg7dO2H0j2rFie9DBjd2tCxq0XjLYRhIvUeeu_Y4i3ZYNYv4DUxSk6SJEosl", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113405902355382552235\">Janna Natchaya</a>"] },
            { photoReference: "AWCwydgq6syIEV4IzWLs2y2js5EaZjVlhtH_7gixrUxoUBrf4qFh35bHRTNkprLi1IxHlgrd2DYD6lln7jdYGVa0tRhk0uKnue1N7_9Hv3jqkudOALMirqUGsoHL1oT4Gv06fIYT4HtesBe9qOoFmZgb7rP1RUwKJizZGOAvXWspLPqMM2tomFFTZdu7wMfIbw-AbyHjVhEU0ssN6PzcvIkSuSv0F3l9qr_UF7ymgEN5_EgA_ET1R3J_QnV6qWZ6tcWo1o8f4yFHsSSRp-s-ygquMLr1CSopgRXunEvp2pnrTLjuJIpk1HhKu2UYxbfOxs-goPRwdAF85KIRR6af5qwGAenuB_Y-IGLIcslFbMVgPgf_2lByLequQ12gNHa_HqpKgQ1ZXsUXiHsbPTD_wHgDqaI0rok0PMH1UOHQjU4xAkQI5ghkB75nrJC238T9oyU8", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102878298214885037031\">Sununta Pisasa</a>"] }
        ],
        summary: "신선하고 깨끗한 해산물을 다양한 선택지로 즐길 수 있는 검증된 맛집입니다.",
        updatedAt: "2026-08-15",
        highlights: ["신선하고 깨끗한 해산물", "다양한 메뉴 선택지"],
        tips: ["신선한 식재료를 사용한 요리를 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 4:00~10:00; 화요일: 오후 4:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/Tongtalay.seafood", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9622111186394818834", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%B5+%ED%83%88%EB%A0%88%EC%9D%B4+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%B7%94%ED%8E%98+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "갓-레 레스토랑": {
        photos: [],
        placeId: "ChIJs6Z_2i_rUTAR16QljEAImzg",
        placePhotos: [
            { photoReference: "AWCwydj04rEOzD5-3zBxDr1nBHvycgBfZm3c1rJIumHukCvldV1ImpwhwHrQmtnf1k6Y38GfZdOFBtS-Nf0RDXq5mEAM47rEDOa-S_I4dcm8XGF73OuDwEZsxz_6TT_nk2SYijegVldrel43mpjHCSfulzXdEem5ofw6WoEgG9S0xigDOrIhqqGC-vhmk7wEUaHMBaKxjh9y6Jn_kuGk8faYOgCwbB_1FngVFzQWFUOi0UWY8mWJtGnLGjxysG0x2uMuoolgXNqz-ozVQdrOmDRDgzAy_SXRauJhCcnhfkEO7sH3zSzkuj_UGGWqeFJXtn311UYC6xKHAucoYUSWqv9fj6EarJcxpGOruQkisVAcHcWs2TZP2ZfVEuYJrAuqg9sQokiehK1z981Qpxs_1M2BF8fmL9P7V1qkn3HqZjEkql5HPg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116262118986226966404\">May NG</a>"] },
            { photoReference: "AWCwydhlm1e83dmYCuT1LYkBPF_OKJZOJsPhpzP-efvI0HmXfoq3FvNNujN4ikIG7GH8Bk_ugjI7KADWLMipa5nqVeqL1qa8kVglFtiWtNVXpKpJn2qkgz7pSQCPEETaUWz51LqEC3vCQ34J725obhM-NWi-HNvE5nthum8X8zEk02QCrXeqVNmEQcHqIUGtE527vnFUE98cxevlbWN_nXbxGBWbwqGeQIS9Ne9VIdI9ANc4JIsM13XRtcntuR8L72iw-3TZ_mJym33VlSi-ZVNxES9PIhbhJb_9pCvDWyUmoKCzHOkkI3vr-i3TW3QrjctFYFoOiCG4EEkkKzWdKLYfOZTCARXvI_wkO-qFQDQ--ezI8Ye17q_LH8EcBh5AoM--COXcpJ6MjK02t_HAnEkqiDCQawd_mkQnyNNYtXxZjLoAv0zEzd_zDQ8IKt-wV4Hf", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106832237926091698721\">Christoph T.</a>"] },
            { photoReference: "AWCwydiB44LVxYMrzYriLHnUE_CcEurxFyIPYRymPlaN1V_WLa8Tb8LPaJTaDfO0ETfoA_pCcsEBlLQMjVMMRgsp9PA5d4ZYh15TBBD6jnohGVXWaqiTcrv3vGG_aEsa52k5Hkx9CVJ0ZPL2QCXLBHz00Ra0cz9cB67yg8gxavngolemVzFBC8EPb0nKIzeNMrmp1VHq6SIO2KO5XGsxIoaoKMzqvoyIomhetwlzxzz_JIfGfCvGRBhnQM7kGOQzD8C_NxkNGivWMAjWQm6l5cBeHIFysiMEsyX82YrQAxGTV82-_1V446wNnRRsmVQ7V_d6EWs5UDQ8iV71PY_klRjuID5xvBCKGklYOyiXT0C6TQvqyJHkXpVSA0Xpk89GC16ZlHxkzyEeIZ6SX7qrzhzRQVeS_i6zGJqKkbAiqjU3S5ZH_Rm4ihTQXTUcGLonAWYF", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118200117864547743459\">I Y</a>"] },
            { photoReference: "AWCwydiC9dFMJkS3aazgGxt2o0ZNA0BhKIZiiBufWgqqthAwlSTFLmIc-okgwih_AEjM4EFA0413a5ltekELKXC3BNB1SxPk4vmEiaMj-Xvtu-zcZAPgdTzcswMePnnDexyzqMHGb4c-s7cDaWKX80AO3W4Ljop0MQ1p2x7A42RzLPFGW2wkmpbYKUzmn0fuvrpcDI98Uqin0RJJbFu5B3TcopfNa3RffUDx9oH_iz7EYMvgOkUkXfcH6RLQ_YvYKMIawI7kt7eM2qBtzjlGySo3cozcGz2yx2TLCGdJdCjovU8NogiDslyI1Xx8sIS-mRJr58F7YuE2qMbAQcmg_VOsYK7whpFCvbAN2qVsw-4RTLlCyIgVvDnYgoKXsYRrHBBq4uJcZfPE3C3ogL-EiJYCH630LV9CiIf4Bw0bSvrfoLXj91S8Q8VccKi1lq_DEObj", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108849462032702093987\">Dariusz Sobczynski</a>"] },
            { photoReference: "AWCwydj9F93RPUwDgagF4lGaxQOmO5AAJxHJtHz76pSWelzjHJCDGOChwADimPs3gudKrGOS0hQ5pTO9ymwvvO70JDaIwpBRcFwx2Uvwjsr5HKSESppkxEqmKmRlJ_7vqfKS2JeFyRRPXX4E-VR3A1fdgCrnJzHtl5fuNbcb6hZvhSm46y_fn7MvMBF16X9-4YwUDItfIrJRPaX5l0u8Q5thfucUBeBHvFGlsBOXrLWEbOe3aXkIjt8jb-Ljr2HeNVlhE7A6AJyg5ZcmiQdgIcUigUxgbNMOqGUutUGiyNev4i3DLaLSo0uBu7vLYxOyKO3lDtsrXmvEH_nSqSNziusfbF5u13QLBqASltur59BTRW-uCL2a_pniqvXpWZR0NH4qRJRMUcZhjyHh1nWvdA5m3fsmOI3qPBmf6RLqhyGSfx5egRZZHpmZpsLbz9uF9Jwu", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109949559118850509408\">Ben Van Sande</a>"] }
        ],
        summary: "환상적인 바다 전망과 함께 맛있는 음식을 즐길 수 있는 아늑한 장소입니다.",
        updatedAt: "2026-08-15",
        highlights: ["환상적인 바다 전망", "아늑하고 프라이빗한 분위기", "친절한 서비스"],
        tips: ["피쉬케이크를 꼭 드셔보세요", "크라비 방문 시 필수 코스로 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오전 10:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4078862960836322519", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%93-%EB%A0%88+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "라차 씨푸드": {
        photos: [],
        placeId: "ChIJmX8_GwiVUTARL9M-iK6nnAA",
        placePhotos: [
            { photoReference: "AWCwydg_0X7XuL3ijSZaL6cROWdk1zWPhFzGF9lfEvNpFGrgAnDb08-Hq1OMDg3M9sUSWkf_JKJqyb42tpayokxfAfY-d1tAmSXWaLPgpilUp9zMrBj0_xrCirHmDxNznEjd-EZBZ5NnPjmX2RlqqKjH5lf1Y5FpGzqCZ-1g3gcv3JcLUIwgFA0HJyqiJMy6QiGAOqlVgF384Sq6nP9662sB0ItByAoCmBbdF4j0V0GvCh0DdIvd197PfHimOIOfyoOTl-_hQabqHmMcHAD_T1XMrHmAAnxRzXpTeLWv1nwK0THaykPDea9ruLdYSbyUknLuGunqQvVOt28f9AqCZr592htgDqTPDQ23rxK9CNxB6_4SRMz-hLwlet40nmm3INb04dGixtvrAAoyzQ9Rwc44J0StJ8-tSARH4sw6B0qE2pg", width: 3120, height: 4160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113010092586177844383\">Racha Seafood</a>"] },
            { photoReference: "AWCwydiPi6bRhQGBWXsrDoNNDcKywyGXYb1QgFA6Ov-OQmVEVuh46AyE-PlFxQDupfg3wWwLt7Pa3FXDBQbZ1ZFnKh1uNmEvdNQ0Lnm7FQbJY6jesI2vF_MjE-KICTVs-d4IZQt6r56EI9KuAvgMjSG4COp9B7N2qT9DjzOpCKe9VvUxC_mY0u8D0oRj0SX1nBfJdUwGtYfSAfGEEBL7_sNXu8HmAzJBTwPwGI-Tke-KJGuKgGAw3qf-RVTUtc06iqKqg5iYq3le7A1QcJ8mf-0B7KzL6lB4Y8i98wV1qrmdqw11KAelKUPprOzAMpJ-j8lPoFD_atbVru5jRMY8zKDzVrrjUEbgx1hLiQGrQd2ibmQiPU5BsVDeNSN8jgZEpyTVDY_sMwmgyfOEtoY5Aim5BwKT9i8RLaeBnFakGSNhV3SycStvzU_VmdtLrF1AE9nS", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111009537740948330135\">Sarah Fleming</a>"] },
            { photoReference: "AWCwydhYx4KtlLRb_Z7NIKrbsHFmpCSpw-L50HD8KISQJRk8Jy3UnLCPHdC_iDfs3WSYU6YSCmFugQ2nOd_azPwfLegYx6ApTiSkiSdSVbYqlesmHbHdTFidbowyzWFRgK953tCQy0JHUGg1CtBQniwnL7z4UphpAKGOwgx50ciXeEjZMBSUVCPxBckkpdfA6My-FPWkgP3szIxIUwLFeYNp1MRtY3Xd1EznyKZRxXyQ_JljA6KQPuM-XWNiRuApbHDFbM4Lu15hhXFhQ4sypgc2UrpXsOI_mlfU7DwiDu8c2InDS3Am9LZqIuN1mP5lt2PRe1YrRvslXSJ-cYqvlvjqp1VQ8J85jcG_e30toz5BlIdPFoMkhKsj54BXMcwHKLr63aXhq_pdfimy8Smp1o29qY17nlLsgJl5Ptsz8jucA9C5R_f3", width: 3120, height: 4160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113010092586177844383\">Racha Seafood</a>"] },
            { photoReference: "AWCwydg_a8-kstMIEcCRjULUBKhkAV_AuELW2FFEJuWrOhxB6FDMilH3YmJcTfT1ENJ7oDwNaK_fX_JgVNMzIcxcc6mqatwzXxkTokC3rLHtrJUiGo65oxWz3zxrugZmWS8m3oGpF6ev_TVVUH3DFj0AiIqmrI2LNo5t6luWQWG64UVd8QRtwZoP_rqUvn02m5s9HhqoEQE0zypqwl-MVdswXAvVNRgdDR9Mf5_DHbw4WXSP299Dhd2Oi7O1rhCcorh7b7S8Y4VfHzx1qbZRK8EN_2sfiOI-IJp0IeHFH-E4MU-8khPMs5s2Q5YxwchKX992kpapG7yat4ZFIMljoYzdSuZ3aVYy6H0MJh4SmBdGAwW0NLcoUAUz-iYbh9XcREDuorLDEWLPiNn9SJe4vV17MsPXw8MNt1JLKT9hGO8D1L35x2XcrN5DSOrs8osebmYb", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111009537740948330135\">Sarah Fleming</a>"] },
            { photoReference: "AWCwydhXUqOuueGJhUn3Mw7lN9TG-fWXi7VDRqFqkTfaX7MXudFQzylmg3P1-s2NtonXb-zdZ_qKHgmmCmym-hynfBB6wIplaA0n44-yXTyHfuB_MVxPr3vgcD5oe-mj5U-WvuRcsBC-5K3BI4OqDxg-jevGct2Rd1wFXJKD6tNTQPRr2OqQE-zsL5TmQq9INCXwJtCXZ3SL56CmYO9OIHn_lBbvejTNVGb9m8IUGszi5xSmITbFd8pUQCendVlkumugZ3c0APypwHVsGoFv5a4c2x0HTrAKF99wumtxXfeyAYZD4ijHjyFxpPQ3BfxKy4mW4y-dn_NBPJCWWTOFjdoumnEOMkfG3gShyqBdo8D_XVrcnpgwksFbr8TB8a6iDcyBrGa8Qo6R4k3-k23c_ZOiGmwGSedmih9RR-nI83utC-VRsYqNrnYnOTvCycEMOA5f", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101953935710552743058\">weerasak rodmark</a>"] }
        ],
        summary: "높은 평점을 자랑하는 현지 맛집입니다.",
        updatedAt: "2026-08-15",
        highlights: ["뛰어난 맛", "친절한 서비스"],
        tips: ["แกงส้มปลากะพง(가스암 송)을 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스트리트 푸드", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=44094464418829103", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%B0%A8+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 커피 클럽 아오낭": {
        photos: [],
        placeId: "ChIJ3Rz86w7AUTARZY3r4EY3TRk",
        placePhotos: [
            { photoReference: "AWCwydjWln9s5B_MwvfUNiCHQfAHd3Hm_EEJHMi7pnkrU5_l6PBdKzGxqwb6mL8ZyIMvTyN2egXUdGa-autUF7YHLSX_BM7Tilu4-vrUaAX_QRXBdbeN2LaCziytZi7gPGI80tLIGPbtr7n3CaWQVcFIXtzn4VXtCiEpprm3DJdUPZjHGNPY6AIxG9-EmvhMKlK6ExrJtrPRAfz78YEQ-w53dfUsajkOT2A01xvpQwKEmrPftJel8mFb3gKvs6a1sxSzy1MIRN44UZJXUhKGVnhjn0SJhYOSRVesyycYLdTrqy680pcJo_9Nhu2ESksnO5oE6oquXGhvO-zzZTfZuGuiEUwPlWED0xlm7bOR6arwwHUbg8JlCkDymkULkUO_J_zLi8mMuyUJ6N8oOEHrtbvId36oEO9nvA2EhF0gYYISTc3egA", width: 1477, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110925244749169589497\">THE COFFEE CLUB - Ao Nang</a>"] },
            { photoReference: "AWCwydiU-x-kjEIzku50OFJ8AcD5DCuKtkC6Xo4NyCmvRbbD42YZcnUcnEYQCCmT1DIaD6rsXG9Hf34oFGAsRQoaNNeYIag2XIKw7g5hZBiCpM0g8phJyKmw8ohCYXOB8w3a8Cxyi2eWV6V0PwayEDAnJIxMAZzKjpdEGWBELxQ6SFxMT_Au8-gIEsrT1FHItJW7fi2FEooQ2X44-vTcHFxtes27bglkmM4L_nSlmyD-uorXXiHXol9W17JuNhSsZBpJv0UHfHxVJt7gQXwwbH56KzBebbm1qMpGmOpfaBjylQxyzzeFVsT36eKe86UR_AzI9sk_RiEy1T8EimRvYiC1JAD3cpoqzFzhgsS6IzR71957GbCbX86t49wpHMb5x5Oh36JvbPd1sbUyE4E8qfa79h3wBiUs3lyCJa0Sh9kQYmHkAinL9ovtgqETaUG4hpIH", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104751305023808510587\">Nicha Kongpan</a>"] },
            { photoReference: "AWCwydiDpDZ9fYu3ZJFBgwDutL5XuNBYilgopAPzObkKdels_lfMzatF6htEqZQpC4IqVEPkvJ4PhrQ_GXW6zwR6rV_wIUQnQTmppgmq4fsh5iCugSCPxzDmtRjYnunrYqsvYmPhLcXkbPxdhcu6OXouZ4oe_6mrLuMQTsu0sUehjkaNHNbHaw_QYrYBv-u73uqSLyBTGlI7TQAH61zftUh4cez4tHbGbHL2nptJqrPEv9kqT_u9g5cps2wPrvxXy8VvOevyBO5z89yPKeddVz3Rea-LQ-2plGKlzqLlT_75NJeAp5EuXwRn4f_5jXWtu8_qoxD5zcpBsHFufFIApW5t4oBZxx3hjlXUxLKbvc8dJvrDP8d-5My6NXf1ee16-uXeBKA8Ds26hZFBWAfjNPyex6TwhOxRWHHzVCyhq76KxEMgg3iXL7Zj-Lc3Ce4Yamgx", width: 2160, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110925244749169589497\">THE COFFEE CLUB - Ao Nang</a>"] },
            { photoReference: "AWCwydhoDgfB37wO449DHAVkaEO0k1ttLghRztMlcQErsob3noZ3IGGN85LogEx0GypFJXsss2BaFLVRpi3tx8NmXPqYVP-JPjRw1PgS5vaJnvE7Rz1k3LQWsNyMDdJ2GZzSsvfmoT16UAzSkZ-HZ9kcJpGJEaBJ0cToh_6K0261Jas3nN4a6HiM-sgsRYtLhOSppijKk89ijEWlTbDzowVWUi5zLD26hO0B32hjEc5GaKWr_xfZFwDmRUutPoRdDqmawHBSiiyMHY4SdsYV7XX54VR_IqAj4gPNvbXqTXpscb8-fzpgZsbJsseESqo5tRKJqG2hbSZ4_uiG3S_PDSQf9_rJDjEDpFyonkcn-vaGLG8ytXrQeyh4vlt12qhqH-sm1WF7q1_fl1w0HKZ7645dkSa3wvo7Giqne_N2CSTDzrHINjIXfh5et5DJ_v_LeQ", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107163676806268153838\">Misaki</a>"] },
            { photoReference: "AWCwydiooJBfEVQzmjLLZjdNipFClnHpFDdTTrAl65GGsYmO42DtdRNwU0vfejOdIlXHWV1YJugM6vrkvfoNS-QhZZVxdyjfyClZFAuaeoSM7Ed1dt3fix9HB0V9QjYoxhVdK6JNFCt_j-etaLlsG_2qlHyGtgMxhyhwLzXFrD2MjjD7D15WQeqK6MyeYmYbFnux83flsk7l8zHOrzXA5_fRQveZzI6YtO32Dc3jpjvScLP5fAR8BrdeNJZcn2qR76UKViynv31uInOr_ATC42OhMWw4bN3gCG9EFmdS-PyzANp5b35uK64jtpdVpS2wNgdi2PtyIST8--M9TWK13d-PGcGO_bogzWcMf-rJUM9gkMmv6-TwqJcTVNMOei0K37s7V9uPBYh9HHX-vScwimU1Xs998PJ48Q5AoHl-FU-Rs5eNYyWZO2NNAdDODNVhgQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114516556888516839394\">Mohammad Maki</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 검증된 카페입니다.",
        updatedAt: "2026-08-15",
        highlights: ["편안한 분위기", "친절한 서비스"],
        tips: ["직원이 고객의 주문 메뉴를 기억할 정도로 세심한 서비스를 제공합니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "카페", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 7:00 ~ 오후 9:00; 화요일: 오전 7:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.thecoffeeclub.co.th/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1823174201715690853", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%BB%A4%ED%94%BC+%ED%81%B4%EB%9F%BD+%EC%95%84%EC%98%A4%EB%82%AD+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "통이빕 통요드 브런치 & 카페": {
        photos: [],
        placeId: "ChIJQWC-5ya_UTARTOATRFWWNLA",
        placePhotos: [
            { photoReference: "AWCwydiVT8QenLhA60b4yypRl1_rJ0QLC7NmgmG1QaHTYNqs87k5nYkz1DGRiW6zhO4VHZx14BS6DDT-eHKTpCACC7Fw3NssUnioGlcSVMn530LLi64hggFqDnnqpj_KXDQAWhnA-9V2kjwd7TdSbwOQKiOrQ33BlWMYlpAHXJ5r2mCqCKU1eWfLBkFDPZ4OdRUci1nTEZ2v6Holg36bOJbGzZWJnNoTCClli7kpOUtxHz00DUWcLX5okjreWJEnPHoJcBx9uuzx-m0EOo41_CIHJnM5MKb4lv4doIEBXYYEnsnVAl6VJ8_FZqdIuQVBCkzPj-43ZqWZ88jiitEKiGOxqpb_S-xePcqk681Pq9PxbD4ZEgdU_AFhSGV1Jkhit-9DX5G4AYZmFNrdyfwVMaHPUFn19Japd_kl4l-zlhu6TmRq7w", width: 1280, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112452991126299177644\">Thongyib Thongyod Brunch &amp; Cafe</a>"] },
            { photoReference: "AWCwydi7GZoQkOEfWf2qUhYo4ULkfjKYu0H2v-9TsYM5njwIH01GCNG5EWP-PYlQOXfzLrYt_cBLHho2cWHPYyJZObt1Us6l4B3Wz8gDZVLZIuN22o1Fx8IpNDQXTjyjmaY1s-BcXuiJ5LCzS0DNSdGR6cWtVSEAXEkP9-CVgKp_OYRmq3pPF2WMkpx92NjQCB8u1FQDkl4vgankxDBfiZci0pggTrWvLhW0-K6w5CqHUZcvHdy4v1uWvZSbuXuTjd1KFsVbsB9DWLUnYQHitCadOIDrRM2UojIZZ1EMzJzMmHgmkCUJdnUx3OsSvFjBYwgCnze7kz9OiGSBWCNDoa6bSia8amza1-Btz6pu9tQJ_YzEf76fa-H7q4BTiSYHZVzvP2rAy-Ig3IS4O_QMxssIO-Ij-SNALfAYGsTYY2HfmguleDyyA4CoOQIrdYWH937L", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112452991126299177644\">Thongyib Thongyod Brunch &amp; Cafe</a>"] },
            { photoReference: "AWCwydjEQxpXzRvLWcGRntdmp--lYBIcJY90Lv9Qxs5MJKKFn7FczRyjOfcD_9qtZv64fEUWYF6Jn4ZbzrZF1nYtOo_Lg5g7hDP-jAOhD98yQ8JtB3fLIlx56ma9C6aN4dhtToiwo8jxF_mrk-k8mFZ9NNyIPbOLkmDKiraxlsRx7ZaQAZShRyn7vqoxAH0JJmWIznXA0swGe9Z5plztXgQw3vBR6m0TT_dXpCrkh11kqf_vjE1af3JCAId6gGsXqeuDDyQg9E-ZdxXc8_zk4G_fdM4LNLFBVOz5JLf8ycRXHGZLtrdBGadygn0GwyOgeIsge8CWRgZgjFpwp8K7WK_4bRh7M13gIlk-4FFR94XgMMLNucYv2vGcbWan5t0xwSQZ9v0p0vDLIlNqjJi7TCE8hv2PsxTu02wCYIAJxuBSSeTH-0Sqg3S4D0NnJBexTzgI", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116329382440712429480\">om am</a>"] },
            { photoReference: "AWCwydhVdZClPBiZoUol1ZB83GPfVYQWBX81Lor1IyjDY7mYZPS-1NVeF7_mHehBz2bWPspyYXkVOJ3uiqSOJpUM05gjkZwSZdEEXzhy0_zanE_-U8bVEkADMRgDUqYmw21lS1ZucQcm6XSobaYjgcDQ_wibgPXxnkQaX_28V-A2HgZD-7dClb_kRxjHOdV65e4hTgMlAyTzm2a7uuBNTrojDSeyx7zM4vZvUgTQLZe0axYeGengIeey6rnbHmoWAEguf-5mqr4jePQQm3cf0Pu7lG_969gAkQoW1Zrty9aabzAsJD5EIKp6B42FwwpJyL_yk8ccf67ZfjkNW6ZyRCL2pTfwQ-x_pXBgyLJh_swsJKqVF9tSczivA-miaeZ03dnAEfs0YS85jlJiQYLhjcWv1GAnQCoQPk9Dlo_5qRmcdH1mO9MbkIXEWBR9lLd7ZTlj", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112452991126299177644\">Thongyib Thongyod Brunch &amp; Cafe</a>"] },
            { photoReference: "AWCwydh2OJKJXWEao0mpla8dpkICr2uUsABqdaErsBZZ9iwL9nMGAv4m_ZsCZQU_dxOexf9HnDvgoegnvj2GQF20bB2ot2s63YiOs_qD3nJMPq_ZxYRdBk3-suVYi-0ggIpum7jQeioS3_h6cQYPo73O_zYffrUggv7w_jO7sckl8quSklMk8rYSWmPteNQUONXqhExB1yMI6BQyD4iQ4siHAVEuByyX5F4QDgH3N3_cjSEn-25xSTZaDqzRK1_VF9oGTqUhTHdMYyeYwF4aLk3T8Rp2_hZLwm3VuGzxzqVLh8ww9I8fgnMmE2JI4SpPvt6m1ZnIoFhjsTswPg5Og2PaXxmeESWUJrNRYA1DKr_kzsQRDEO13luQzF7TwLdnZmb6qiQe2iZCamMzAFdTtlbFBPWPEDwJv3NX82LpHICaGll2ujLQdG37aLcfjlCgSH4Y", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101908717785675819978\">Mc</a>"] }
        ],
        summary: "높은 평점과 친절한 서비스, 맛있는 음식으로 사랑받는 브런치 명소입니다.",
        updatedAt: "2026-08-15",
        highlights: ["훌륭한 아침 식사", "친절하고 완벽한 서비스", "매력적인 분위기"],
        tips: ["가격대가 조금 있는 편입니다", "은은한 음악과 함께 여유를 즐기기 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "브런치", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 6:00; 화요일: 오전 8:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://thongyibthongyod.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12696938542422810700", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%B5%EC%9D%B4%EB%B9%95+%ED%86%B5%EC%9A%94%EB%93%9C+%EB%B8%8C%EB%9F%B0%EC%B9%98+%26+%EC%B9%B4%ED%8E%98+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "89 카페": {
        photos: [],
        placeId: "ChIJ9XqVF5mUUTARoGvlLxr-5ks",
        placePhotos: [
            { photoReference: "AWCwydjCY27Ujw_vxjeWUXFoVtKCIyKaEDv_Xl_kcOVja7Zx8miVNZf9FzxiOObU40wsisTHAKdYE90DznykMNVnrj-4NFfH7q-N5m4kpe1SfxYCQKu5zS4ZUZcJ0_2I2H9IBzdd0T11AbbU455xmiM93LpfwO6M4cxtVdilG06Lf-tgr3nw2UeBGfB25viUEh77sVAs6-elgWs6bU1_WfYHnLLK4SRF2PUVnYveDNWsNQZkuT2HqLbkf6mkvt7czlWIJeMwwPGoiOuaR1zOiuQpG6VI9yOM5LLnbD9Lg6disfk2idDBmv9rg58s5aDPup0oa16QItfWfMKBWa9GvrLOpb3rhdhc1JvFl2yLiLGow08OHjZktNpoaCVha8GgsTB4Un6_xEuFvsKQS9YfFlRIfyiuacHztY4vWSvxoWvMpnHR_AGv", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103643312948535866062\">Alexander</a>"] },
            { photoReference: "AWCwydjXdx04jjpLOJzmmySYTHPHyJ_DWLCn5fn-t_his9eL_uwZzuD4rGlGhu69eE_XiDyfPeEqbVlCXwH3uiD3txHDQjl4_xWxqV4YwS62BR65pTt_9tDk63aT8iwqvhWzISddytXPQ5P7nPsKEU86-L6G8bWDBzRNtyoyV94P-N3fdViMu93KIk2RVEzsXTKtumJNmWxtunN4V2xXCPv1HE8rWuVzveb114RF4sfci8HxkFewHUElOuSdlEEEsmRyTWDILZEEmUKnNGedlw-eeZlWUi5r992JZzkw9tDDQP1CxoT98bCaYrublgOfKOfLt0bCWWeNUfWAkzRZIxJxVBfYyfrPIGw1Kok8npcAFZ4mrP6Tz4B22OUXwovyLBN7NCBbeWiIkTbBzE5rzVr0D7haBbrR3tE7TFKfTacOxb-kNMNC", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111816335849049755850\">89 คาเฟ่</a>"] },
            { photoReference: "AWCwydiq1rNZNGV5tfEn6PiR8aFkGO96YtueR0ocksN8TUjUdo5ZW7U5Nb9OWZv2xtytCnofq4uiamaJuhuM8yavKKQkAP-bshvgHAldCeQT3JB2wbRDTIql1c9XGoVtj6Ujuy9S7Row94OM5WHv_8ME2rZauuany20RLLSZ0J3hkihOHPSG6jP0Y89_IqL0abUOIMp0hSzqQHl5hI7Bv1W-3WffWQiUmas9hHc9_5DgE5fiNWk362CFJnQrixx4YyIZkJzrqQUj4Yz2ETEO4DzJrYz67Jvmqz2WNsFaXhiVO2akyjm2iWALAEuQasBD0-mGbeY1nNEYKAX8IdTCdWgPTiCbu2Ym_JRUwqcGBTIMNCZo9HWEnuqX5vHyHrrByAuvGE9BT_WbV4yvB8qyIPg4Q1rMycRGHNMTD6fjKGmXVKSxzazxwsNLLtkxKy62Ew", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102296340908161370634\">Danni Jay Luke Danis</a>"] },
            { photoReference: "AWCwydg9qzUikgObmH8OxH_L2YnkBAkdxVsnOBDH9Wl8VOKRhtKp6rv2SEXWaDTaB5J6LZ_nwgDM9jLu_psbdUhQY7JmR8WWixZr6bK00vbIBxHqfImxDOC4-pBMFOtQ-Bl0IGUN04Rt32ZIpIJDkrI5YrKBwlwwyEZkGP-uW4etBCDj_gHf26QymUKfPA1qiI-wplDO8r1o9Ra3Z7BW6ICHSBP0MIfgd_nfyq5kxJYtkxqMkKZpreuEgxlH0NE7zqEaTEpvO2zxCMXN9s0QIWX5yMckKQsmGS_5iXNKtFiSc1i3NJXLH-nppQ-0Z9tGhGpCEzWw0IWCCaY0wFMYnWSe4bQxai4yVV4Z48pZsOJX-60JLj1TXFNVlphcg6mXGSAmE92KOBA9NkJX_IUp21EenfEH1KPCjh7rOU9lxSH51nyHDwH2", width: 960, height: 640, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111816335849049755850\">89 คาเฟ่</a>"] },
            { photoReference: "AWCwydh853bNfKd_bUjPCxBixOxW1kCPM8rKT6f-ugKBtbhtWv4DE0zKHxVXytig8knbSxV55pV21ybUrwqG7lrAo6gDx7zkQXKtwGG-YmG3_ceWDUQtXtOvrmqsDRkN9qZ2StEnadvhO49PbNVqsRaqA2e4SObFwx_nR2DpuolO6v031KgZqyTxb1Se-QZ6zMCR5bTLLUm90m5vnQGte4bg3loJf78IDZZcCmI3Fcqll7Cn45yA_XvhT5iNKmP7g9G9mRTLveh4ORsqQplf6IKRWnx3YFg4LmcZZX628pHwUEgQSOdZLzT16sVXPCLegAudyGpxBO8tSpuo0hAMr0tAi_RWbaWIkLQlTfvoAq9PjonUZubzSSSAacgBM5R88Y1sf0xPVGvYxLkL9Ry5L7M9kXeK5UBG8e-VOFDrK1Fq8dS10b89nmbM0DK_yD7WE53M", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113562272969432080582\">Rucha Wankhede</a>"] }
        ],
        summary: "맛있는 음식과 음료를 정성껏 준비하는 크라비의 추천 카페입니다.",
        updatedAt: "2026-08-15",
        highlights: ["웨스턴 및 아시안 메뉴 제공", "다양한 음료 라인업"],
        tips: ["조용한 분위기에서 독서하기 좋습니다", "아침 식사 메뉴를 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "프렌치 토스트 및 오렌지 가노", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 7:00 ~ 오후 7:00; 화요일: 오전 7:00 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.facebook.com/89cafe", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5469338185914215328", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=89+%EC%B9%B4%ED%8E%98+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카페 레 잉구즈": {
        photos: [],
        placeId: "ChIJJ9YwOFDrUTARGyoiISnvS4M",
        placePhotos: [
            { photoReference: "AWCwydjTyYKcpRK2PT4LZDNXxUh892XLQI2WJCb0Xfa3EP1Lq2OLI2uuLY4F3WmLmcjB2yBo-hjK_-oBOqe7PU_AA_msnT5GE5xWY6wQNvNuJu04EsdDfEowzlpSa2Yfd3erlWR24_UBvZM5riANBEM0XNGjOOuK6bHsDN39DfKoqXeZYw589Ht2Vh_L6nac9XyqjIMOMO3DXCuHoIUOMf8MpP6yUzPpcLrG7QTbVRqdd1WfQxrD3zXpqEt6R58-0DXGCFfcrATP1yZlKQ3ASEWDucVZdu-RDwna7NT-abK9RLZhb5T3V-n998XMl3yk75gZMz7uxIvf8U1sPZLaG5AKW9a7jS7tNaEDkjP6FhWycL0DZV506oMKrJgaBJNyzn574JbWws0VkEGZdbaH2KW-1So2hp5WJwZjb2A0YnU5B3_BnXO4", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108666648702409588831\">Café LÉ Inguz - BEST Coffee (เลอ อิงกูซ)</a>"] },
            { photoReference: "AWCwydhdAUC-h4ccHKHWnKtjHYJjRM0Sl5Bm1m10d2n81VKFOl7tM_tXGfM4uCPBwYwi039RjhvfoTwqX17EYLX6rzJkEMvaPfylcW-01TxIQ18X9cOZbq46rnSAxYJgaejUNtDKae6JNwJZVpBEuft53iVjOvFEXysk_Sw4ybJX9z_9T0yjG7Cwwvyl0kQ_BCJCSYRnOt3yCRfJo_hUsjtley2V2QET2uzJJstcEhM1-HkRPKODLPMmsNWPeiikGW3YHWPHPvyY7TT13W5t4RO5VatZlJ4M1CFHTkFQQRb0TJjMMTxseH3REckG4-qaK6W__z7Lq3gN_RV51PenwJTWi1BB1DtVsqyXFK_K6-FujbU7KPnS12Y6CF4pumCsDCSge4q1n-eIiu48csb6BwN9C_C6hVLgsmfuKeYDoSyxCBJzKA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108666648702409588831\">Café LÉ Inguz - BEST Coffee (เลอ อิงกูซ)</a>"] },
            { photoReference: "AWCwydg31IN5ybbpyl6wjLhU-UvM5tBAaxeebwDfigdsUKptTxeNa9oI4kvnvOn-6jxrzwC_Nn-YQohVfUnwEWnhPgpVpQK_6lu8baYBfJp8KX9U0E-F8el1jinzuXFW9sVfBZNMTRRG1cpaLsQGJi3fk2fc9-TQaUvE59C8MrQGgPC1xTAMe1neowwutwXG3YC1yu3EZRsczl5iyN6wge9hdc_Kr8LJRmx0caxTdEQpBN3kdZMlOnhnal_9CtzKIHFl_spQdtt5WG8O6kam9JcsAMcWtcDag4Kx26OzygXyIzhLOF5fpRkj2TPGSZS-kbVRRJ25ZPzHu16ksaek6UhCBF0HlMHDVNQsNt4RuTDHiBt32Rx9ukKEuoN0A_vEpjDN68-vkZuXVVBPVIDuz7PoVpnJV4-IvybjHPcxlGmCuqg", width: 1278, height: 1725, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108666648702409588831\">Café LÉ Inguz - BEST Coffee (เลอ อิงกูซ)</a>"] },
            { photoReference: "AWCwydgVHsR3940M8Z5Y8JHN_jIo_h4kUssIOgDYQBp7-FQUwx2HP8MOM4ckeLPAVy_luAePE2DGN046cIBpEkolR2FFIeTuZIUAyDsaQSGTPag6WGcE8w5EGgKVBh-Cz4U3ldmoInmWesNEK1H7vQyEjwOpGBHOVO2nv_8K45SiFH5MJ2HU61XAtkviIRSgnUCvUzw_3_t-0FZdg99yvamVXlCotM9j22UETlVQqqjSGycqpl5gkYc5BUnZXaCPLqqVr2eGAtMVhgafv0CCJ2RUmPGU1yyyJzELEXgXwIfXKtxNRitdZVtIiGRoKTOOLBuvXC3M4BS-kSOxjXGccfogxwjRzO8RqGFK1HyBcDaONizuPdNf3ZMqpeazuXpKUDLpfxzEJaMajQ-Qk7UHm8fhNDOcpYcYZC-ExHdxNj8Qib0qCG1DEkSGeXi4b_1kmCGx", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103702536923438073723\">Isabel Bourke</a>"] },
            { photoReference: "AWCwydjt7Ix_ThGfXymanlF7hAR_9pNa-W_-zx3zL0u89zoH9SUL2isfpKWq2DUQnc54_TbsyC19-9KC4NZS_Om_GwAc3Ef-AY8AguLSxsDAaul-CJG_FRDpPc--u-H-I7enWewlcqx0zsr09js4iRdPQoHxyZ6EcydkFPYK9SP2je0e2xqVxKGwu51-6_S1ORKPD27JvOhTiKzBr8Kr01mMSdPvOPVaT4I5hVKX94awmWcS3rbYYRD69ExR-W9-JTP4Rkn4mG-j3OCBlXWCzVIa-OoZM9wRztae2_DamBnH1oic7mu1J0ixVD9v7nIGz1mBGDO-Tt3HNvmZ-GDRrE30Ft2UAZJb-lzcFY-fLwe8cb3S9kRqEmhQsAMyOgdv--jCv5df6_Gb79Dpn2MQ1j_-r5-JcCscO_9L7kfxOpZVKHItteNFkCMyWKDeQMSk3BXK", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100432196263014138460\">Evyatar Saar</a>"] }
        ],
        summary: "높은 평점을 자랑하는 커피 맛집입니다.",
        updatedAt: "2026-08-15",
        highlights: ["질 좋은 원두 사용", "맛있는 아이스 타이티", "친절한 직원"],
        tips: ["시원한 에어컨 시설 완비"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피 및 음료", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://web.facebook.com/Caf%C3%A9-L%C3%89-INGUZ-Specialty-Coffee-105692665473572", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9460918402150443547", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%98+%EB%A0%88+%EC%9E%89%EA%B5%AC%EC%A6%88+%EB%81%84%EB%9D%BC%EB%B9%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
