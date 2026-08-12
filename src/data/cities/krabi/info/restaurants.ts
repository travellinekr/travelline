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
};

export default info;
