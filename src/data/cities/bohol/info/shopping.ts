import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "아일랜드 시티몰": {
        photos: ["/images/bohol/info/shopping/island-city-mall-bohol.jpg"],
        placeId: "ChIJ44g2kjBMqjMRmwRDJmVOdL8",
        placePhotos: [
            { photoReference: "AWCwydhp9xpLG5aWQhpR0VeX6K1Ki2zUpEjBWBLROted45_WoQL7K0bGh-njFJgjJFrMizjnOmoeV2OKVT9RZg-5US0Thr5RVTSc57UGgzuX1SuyvdaUWlwNgBKXD274eEP34QwgVgOExGV-I0aN4FfOWWT-mWVI8Y0dafwcFB9eDzr1NGMdEGkoGW17jOSrr7TKrmhHxRlILvKgTXOV0MHpPK8VsyYGij6COJ5uO6-tJgd2pWRALYaDlMZGbbEflBu6ifxaSvL_4atPd5d5SNz9C6nz5ar0ACk_-1gALPOSMrh_13cbF_LBra0Q6JhhQOqWhkNGWXWbHpdKOqsK25L_JVMi-37otpS0KZOQW4LIw_c2RxymjpsCFe2weZxOmyhtO_s9OPDBztYNSR9TgMknHwFtJ1ey4KQr8Hdbq_Eff01UAz6T", width: 2592, height: 1944, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114925690124649249352\">RBB</a>"] },
            { photoReference: "AWCwydiEuP4Q8oFdEtVENQ5k-mykOlOP-HTf6iJSOnYPZOhrBJ26b_rrFzGYW5DjuMRj0floCTrz_D201SGmiku7tS8sJWmXk2L4MyPUqRByhItntkcY7ggyTfmz2ZPGKJolD__LQJu0K9zL60xsc-i4EVvPd-vQE_YV7eKiwPzeRyUqzsWIGxxDeDdwcktqIp9hTAPazLJnjvcpmJbDRLJtRHU7quuYUoghtrOk1ANkdcjcp8cZH7S1vt39POglc6nQS72Yw6g-2p8F0G_e38HyLFM0aNB6J4D0_DsJg4YrDue62t0cFVxZQtNAJyp0viniEjEKoB-BOXwhDUgtmtqm5oH8zvq_RPCjaT0EReQphDAVmH-cp0Ip2sQUvxGKIgkFa2hrlOWj7e_N6TGH3MlrwfLgp-HUziQGppf-r2vTwOjD0w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111441078469591698763\">Maricar Dutarot</a>"] },
            { photoReference: "AWCwydjerayeNXtuEdmM9nOOOpbqjgiutiIBJc9vgC9fRPKdcEfLV43baDA6KZ30_0pPcpqkf62QjlHt6N_DqS8spm6UYVsExnwC7FyYYxBzJRg8e0B-2ow_zPO34aWmFzuV2SzmDw4oYFveZBTsWBgQ8w2augNPtVw3Cxp6ZS5-AwqvIGIvYkAVFklDsGIX4U6z0v7xTn-16Q5QnKcRIBjnqCZzYX7-7CekH2cVhvNginu_z6FhN7Cc8msMLfBB8cV2cxnqIlJyOqPp3jpKhqr2-qoheWPorNGJoVAGSN2qtJ46euJWZMzxaTBytvVMvvD_p_fptQ8Uy2B3Y6kcZ-0fx9aWEbXkAu8Wj9ze_42iG9QifiFoHtbXscaNYS1RqtudWZK4bjrTUBMxf9DkPn8VjHYbKIGMLSOsdLZLZ9f7wBdSLnA", width: 3120, height: 4160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105971123087400758172\">Владислав Предпенсионер</a>"] },
            { photoReference: "AWCwydi1UPM8F8ca7qxF6bVnz-ZFW6gHad_hcVyhLRdzl1n6XRwb9mV024bskTP4xeiZvxaasQkk-bKUnmFjrv1dxwmlbqSCW0Oaz9pp34_U1QseA4oS5Ware9YPNWTZn2F2PZ1_vU3eucYlS6ITjrcrqdMTSIJdxrc4FT8JzF4AQFmRtN-y0lVEiN7Sjb3cxXsYOc9rrK2OcJp0zfQ0n_UTFOZyT0tM0DJk_ArYJxC2Nu_TVYmqjPkeQIUnxwgbrIw1OfgrjKaiiTqIFWMKhg60eWl6abZNUWcLIupii7gHcjciKozTuvtgrecsf_1IG4kol246qymds1dS4GhFeuKnggq9INPlCD4OMXRhTw-E21eaHhBx8-fA2W8cigiPV8ma8uYmsw0Ui2oIqFvke6flTMuKxV_9U3azHzHT3f0z4URWCslX", width: 480, height: 320, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112455822090393181456\">Island City Mall</a>"] },
            { photoReference: "AWCwydgpL0tb9aonYvpqV0-E25jzD2ZL9cjuJXOqfKsRN78X4IpAX3WT8Of_-LqTmcxZuzb-h9xajlVlauFt553OVOknSwXDNjxyAfyB5c_e_fSkrC1B5a0f_uZI_XLecLUvBL48JKQJZM_I8arTNstH_gtKoJPgY0TDm5Dh2F3ZcVVEfWuwxblRHTtprri5uCpgjx6bJdIuCXv7-Vt0Z9YDVdOeJ8P1XG8hKDyr73roLu9Yx2-qrff7t2k-rDRvTTZg0EIwuZPoMcs0yMeiYA7iVSAuRocj_icceZx5IoZZ_nA7Qhw3GZVQvnUoDlQkVa-6eoY6pQO2wkADZqILNR_kaKUUcTXQ3AyjC-AjpP-Hmo2O9PTTWi8rszpfcMu7-cvo0O8AQbZyl6WAwGdwl_Ry3LPdwzH4724pW-JMRJ2lE1j2l9vW", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115053340951740484969\">ledao li</a>"] }
        ],
        summary: "다양한 브랜드와 편의시설을 갖춘 보홀의 대표적인 대형 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 의류 및 잡화 브랜드 입점", "대형 마트와 식당가 이용 가능"],
        tips: ["쇼핑 후 몰 내 푸드코트에서 현지 음식을 즐겨보세요."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 8:00 ~ 오후 9:00; 화요일: 오전 8:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13795737754883261595", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%EC%8B%9C%ED%8B%B0%EB%AA%B0+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "BQ 몰 타그빌라란": {
        photos: ["/images/bohol/info/shopping/bq-mall-tagbilaran-bohol.jpg"],
        placeId: "ChIJQQJGArFNqjMRPHLjWGQ50AE",
        placePhotos: [
            { photoReference: "AWCwydjDbK2kTv4ChvTCxugABHTtWeP_lxOwLAHZyS2ILHjHLBGMSnaKlwa9N3LtgXMDoTjLovzlppsHyRTY5dX1QK6piIYqF7gXPCdtE4E0DYHmptNPmMhunz_ZfCJ9xvBcLvF8Gtt9YhE57z1MlT7Huz9V-iaUiKWv8lQGMpvEt-Nmeb8yCar3WluVD5D_xIp233fl7c7e7qz6yhVpVBkSuoFJWOZi6-mKbRclvqE3raldncUdBPeMseL1jMmxf8EnsxyPhsvcBnlKjOz0ICJjDHkmxADV_VipaUa7DADUDuNnXBnXHzVQgUNrkDOC_rl9skRi8Hl8LdSjqyk5QTjJXFLnOmxDV0x6RsSXZUe8JNwERL86wiMtrMYpNLFo8sN4Zc9o5o79feYUKQey99eu4V9wTom4WCWwUSM0VrirpvnwSbol", width: 1312, height: 889, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104885448315586638129\">Greg Tsai</a>"] },
            { photoReference: "AWCwydiH-K1aDEc9QKayNaxS5dCo3vQc2WhwA_to-WtToohazebvsqp_Aksx5ulWATWuTbaAIrT4Poe7_YrexgU51DH0DFYMeg6ULFNaLwjjkFp2u9BknCzfv_hGhkBh7_P-w-K9Nmh9XgzQV4XMMU9I_Vo05C_r-Sl5F-KbQwuLEC_VO4Bs8HJ1yZ9gFl1R9ZQC7ddM8oRoPBd-yTqn4X-x8Pvv4tlWbXgVi9oNVFZ5QhNsrcQRqNBQsO5OzH2L8A4_9ejDsOJ_MJkOX4gGh4fMruP3gGSYigMnMZ5WoEuK_Qs1aua89l2WNO6D8Y_pzv74OLJYidC8I1DHl8mFcnj5e0lJMwwT57E4ttDJQfSg8XUINAVHbvpy2BvfMQ4vw5qkPGGbzRcSsLZjM6N8t8utdMl-j7cO3_09me2SB53PfE0-WQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101301370892018634283\">JPerpetualKid</a>"] },
            { photoReference: "AWCwydjl2nFF_NkjFsUS38PPNWiOPp5FuU7LMGl8Mii2fGJdXqh49FE4MXAAGqQj3aj2ZVK1-pRHuiq5t1cg9XDxDXPghpZ7fAY4A7aIRKN1-YilNtimpD6q4may8XUbRCNx1EspbuXiWNWNLbijjL5QxpRtC3ry0mZ5vaHUseP6hA1ODFAXTY3k6m_Do7RiTgFvGsGIzungx1W8NvMtCCDOuHVTKDV1elEhsEVK85USVGCJAY5X68UlTnXp8MiLwVhZVO2Psu-ZpKi1Rr20NIPkqmd1eeFt5S2FLqZqXnrPYMYVHRuw8F4St4ySlz9VQrhb1KhfXgca8MOSWKOKDZGHLN4QvWtA1fQsQbFYO36aNFkB7EmzRsZnqyvL4UJxgR8Dnm2Z8DUw--Q3Ht5TNWBxiHnCUYIcdUFoig-Vg9OZGnR1YQ", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115053340951740484969\">ledao li</a>"] },
            { photoReference: "AWCwydh9nRU_Qn_q8Ij9Tmj6J5YoaHHotSnwAz3wm-Mdf2xOccAA6upP1vnngyatD0YF0kuCbo1WvcZiW7gFC3Vfdra1_RdvG_vdZMc2ztbeOm6BxWZhxBNMKhEbFbPY2sO_VK-psYJFgoyzDl0U9QluEEVhuJZdveFQ1O8p8NR3n1oHTD0gN0rDTTmm551F_ROOwMZy6RVcKXNIpI-CSDYm9K3CoAfb0OHwp29sCHKd2yYcTW4zXZTz2mJHP_GTkjNISneDtLpRWCz8ltak0QVSZaJSSQELOXpniFZNGmVGkiac9FqUOW7Rodgd2eqBeeg-iF6zHPUOyXnna3qjN2WIVL2pK2mDIHHX7Mkpne2B-sFEpSbjWfsiBzR2O-azgCtU17MJMBwMWjeiz79kXLJELBELl_Px0m7V6OEDDFvgPd5U7Q", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115053340951740484969\">ledao li</a>"] },
            { photoReference: "AWCwydiV2gQO-7bq5ZCiCa42L5NhzakS1stg42Uj5U1i9PnWzj-XuKRWNWEgqnfTL_8OrA22O1b1A2UNQkpfRBVc8JTPppGoqKLzSo6y1j__CfuDJU9dKLEl90wddMBVfylSAeZ_eLomrDY0MxaqIyhg19YTaR8FdKMjqo0bT9XqAielHcaYBYAHkWXCFUUTfNAAxGxh7P1K4uxQGxldepdkuZ5ef-Xq1Y43kbmqGDz20unHVk0nqX6sZ99M2zsEHjO34wLwYyddn5YCz2ErFxiwFQV4fYQFNJXOXJp03Xy7hHKFQhuuMucWV2W9-B0BFxdrjIDldirHXvIThKIA0OJEoNdIwh3eOEKeY2zQgLLw4v70mVGY6cIXj3vmdW1KHKIeBKavxgTnhS6c16X8n4osDu5cQGwjmKRo6DAXJFHCNS1012kB", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101373274946341678385\">Gary Barrett</a>"] }
        ],
        summary: "현지인들이 자주 찾는 친숙한 분위기의 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 생필품 및 식료품 구매 가능", "가성비 좋은 쇼핑 아이템"],
        tips: ["마트 이용 시 현지 물가를 체감하기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 8:30 ~ 오후 8:00; 화요일: 오전 8:30 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.boholquality.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=130667492344558140", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=BQ+%EB%AA%B0+%ED%83%80%EA%B7%B8%EB%B9%8C%EB%9D%BC%EB%9E%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "알투라스 몰 타그빌라란": {
        photos: ["/images/bohol/info/shopping/alturas-mall-tagbilaran-bohol.jpg"],
        placeId: "ChIJT3scbLFNqjMRCCMYaxHq73I",
        placePhotos: [
            { photoReference: "AWCwydiVwpOEwGgL___326Z20xXchs8KAMtxCO6S_uboS-ZZurOYowZf_VgHfxLg2Vp_sLJKj99rq-yvsjIx3Z2oBWOxIVFvplnOftbK43N90hOYR6E96kPmfZBIikUiJemTk37RAQBUKxSPYDfsoqybXe9yC9YGLwjXgFZRtuyCnZLO9KaHLxqHrpnMq6JEqE3iOHkLQNTT4UdnjdQJXwhwFN12onl6Kth_MwvUYQbaP_WixYuOIyIpZDr2NtneTuqz9SscYfmXPc-3ybFjWuO3KLeUwsl5amNEHp_4l729NdKhpx0XcdiOaA33ePQskrOpz1m8Waay9FxizL41IM0UnIou3dMUI1GXCuw_wUrJSEOvUthGAnyCjAC6xRWPWmKLluORTo6Ib-FZ2YQWk1QoitESBRxSXb2IeZLzUk0Ob6PfdbvZ", width: 1024, height: 576, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103358831130395444401\">W O</a>"] },
            { photoReference: "AWCwydiB2spB7Hl2m_ksXRs9ySCOR9aOhXTfbczUYbPWINExYVq4n-o0WPF9xExZ9zUzZys_eIuATOa5OyvF0vzRZbRVavYjiYYjoqm85aLdxhkcm1kpRQRTUaTyktWatwCTr4W2Cwx_jZ15myCzkJ962VGnT0dSXTaiRhTd2MnCKgX12KH-P5zzO2nftRwsBZm2JJp0xeiMW9UwznGmIgzvI5OdcqndhYPM1UzQH8Ke2Yc39p-So1mrmPh7w1P-_ACWZijiCcI-FrTdxS1ykMRYWN7NtQK6yOpGANVXUUMFRUx3LMI9kgNba83omuxjQwCWOR5c5ixYthHGpI7uw8KDtclGOhJyT1J43QHC9W6DOGMQH33685EhFxScbPnAm_C4JPyHRXiykd5QlqGMxiNQceSePA5lvNzIqLRgv4NGc8g", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115053340951740484969\">ledao li</a>"] },
            { photoReference: "AWCwydhblL2m9GHfu5QYR1-r2tx8IPDYvfKiUFrDEgQrVNB3pfIqxaDmDLrGLZ0SNbfWjaoswKcjKLB2EJ0JBOhhwb1p_eFrsBXqqY9OnqfZQ8wxSQDwx5qExm7v3_IF-xUM8WcAMToiO3j9gxKo3kwGWy0tJHYrrazlBUDLYuuuZGLXLFUUjMtfW3TeT3mC7eiA-qlX2D0xNG0RoYpZfX4_c407BSirwKd1DBltIUsYIwuzMibBHZ4jd669DjCWkBLju36Niup-2G4Q0LSxmiBFDr4z4cB-AVyG9UubFHlRQSIYxwKjHvAKKsfTBbLyga2-qx5rI1zHouzS3-HDmwK755_9Vo_pIv05FjN_qqnjfdPqdUtD3haeaJn4KFACmG7EdKlCsr7Qx9m0FoqXS7AQxLbk5IucvJ0wTnlP5RcWI5-0kg", width: 4128, height: 2322, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113201698171484724756\">Modestas Gadliauskas</a>"] },
            { photoReference: "AWCwydjv3ScJAyKJOZ6trBe7XSvehwlrHgVFXoOOYr9ePOMMd0uFCvdNC6d_aTCyz9QPZ3YCSzpV_5hU-mrrYXYMJtxXnaulC5DfOoVICu1xUjmu4lJxaqaHwTuY-H7-2Ph2ZThT8Eo-nM6TuuDOH_Uk5SFexU5fFTUzH4pL-e6fY2BD6vzdj_rrx9APhCcnzEFTvP2zXAHQnkpiUWAqYGr0TVyFWgKtYzPDoHWdxcITbDj2kYVBNbGEwLgpKiPUoCgCm2pJObZzPbnEJhdsIIn5a_OfAXgKAAHxCh242KjsTbLyU_6do1TGsr6Jt-5nfuNlqQDHQ3yZYw8LJofsPUJbDPLIphxU52i8_tt2sHqDVQCH-zdDtsLBYbJ5IEZy6Wdm2W7Ap5T5fm4tWAEShnb-e0WLKNEJ8BR7gyUf6r-2riw9lfg", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103829484775990632994\">Gee T</a>"] },
            { photoReference: "AWCwydhGLm6hT38EXbU23-sluvi9Kar1_yMfXzjrZ3eduZ2ssoFPvd3MY1pRiHobtFew46zBQCFnV4iR3xT0iGmkXauWSSmcMouXsH_g27u2q92r5XEqsKOiN-HMC2xcWr1Zds8o2kYlUW3ze4-AuGUKceJ46ud-FUwm-F03zvPU4ZeG8vU9vnP-96OkCc_AEW455JIhh9cIl5xsaCiE3UviieCgzrtWvpJhgg-jplBae0HfLGh0DM5pZMyR0AepjETxeo0GaToCovzBKnUjgFzkcFFMMkRHi6ahCpE0Arxjlf1Fc_OnP32WBt5zLcmk8oGLPBBFXvSJlhkgPy6MnWJQP9rvTWRUDP8qahKacpmlubrCBIzGu6y75rA58nOuVu0hQ30u_xG6HQeIQ6s0GizkHQAyW4wEyVPDUhxcjW4zp3yOvBnK", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115053340951740484969\">ledao li</a>"] }
        ],
        summary: "타그빌라란 시내에 위치한 대형 쇼핑몰로 다양한 생필품과 식료품을 구매할 수 있습니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 품목의 슈퍼마켓 운영", "쇼핑과 편의시설 이용 가능"],
        tips: ["현지 기념품이나 생필품을 저렴하게 구입하기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 7:30 ~ 오후 9:00; 화요일: 오전 7:30 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7506417563216841627", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%8C%ED%88%AC%EB%9D%BC%EC%8A%A4+%EB%AA%B0+%ED%83%80%EA%B7%B8%EB%B9%8C%EB%9D%BC%EB%9E%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "팡라오 퍼블릭 마켓": {
        photos: ["/images/bohol/info/shopping/panglao-public-market-bohol.jpg"],
        placeId: "ChIJQxXa3lWsqzMRPLKk0c2fpDI",
        placePhotos: [
            { photoReference: "AWCwydjfcWHW536ApE2ZoCBZGfDZupfUHL8IbmD_YHLEnxefU5lMk03i0DwUfqmcZFq9VO6PLoqGTsaqlc7lgCAg0-hpYgDi2qgu446MKNPnap8Z1PMgc9cJNJ0UHqWkqSBsCUiVLENhFOhPCZmU3AXb6wGvR6I3xjLRQiiFjgIBETS3DkC7fbgTFAAOZChPILM1JCPVG7N8aJJRfcAyOhAuJvZOUtUv2X9cn9oXv92Voc90KN1pa_J7twdZYa-g05gQk2V90hi6UNfC4MTrlmFaV_Rwu-tdMa3pRBV__7z10ugRCueRKJh7B85P_oCAvHSVL2YifOca6y5pC2OvAXKTAxmQVP4E86D-FN27uvpk5E0wGanax3Jq9rjQvECoMAGHiXq1wUJVaeQuUmvQiRYTv1qMPaoJpG9K0wfG_q7YrOC4Zr1HXENTFR5zzEAEAA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113449047699885420492\">BongBong Gu</a>"] },
            { photoReference: "AWCwydgAdOacVm-wLZR58kWdUpVVHFdC94JcQTuemIPFJ_xtwbeVbKeWENK7eLZuavUc79yas_iF-hvnWTh8N5r6tWlOCIVDP2tXrUU2AcCnRWUkpPHI6MRdhpNYZ8H5hKdq8dQcv6ogM5GWI2y9Sq3TIeDNsfwK-0Jmpttw91e95WiW_jFMQNE2EqEP-9YSAx6MaGa6HkcDPdCytWtoRvLMgTzG3aR2SUNBf68C49HK06zZvwr7aqZIvLzZ6Xhqz_7evCLVs_dVmCM5T_Wu2AxuNmjO2KETyUyD3cRryvlv5oFZevIwPh0zRLY7ygPMxB5TWkWVnGNzEUKQi9g0Z0eLnsjJnAjpLeLG3aen5kqa9SxPRSl7Cx5HMY4765A6XKdNGglO-Pcf0yRiq2kX-vWMt8LFG2nfSxUmCj63lMbNhktCdQ", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103117048004551753573\">Bohol Touristas</a>"] },
            { photoReference: "AWCwydiNK4F1CdP83amjqPH5XECHn_CROmZ3ZQvwQnVdC6iHHOvCWVYz2DQ1QXZ1oObYeASOjWZf6IKbJ-sRyMJYmzxK8kdao5w7sk6E7qbdSrh1Gb9Hw6alILwrbXVJtxAK7Jblk8PhVTuQ040_vAJwQK86ZBZNSCYBM9QQzNitG1ELMy0_10dVx95o4AJMvsSk5P0ZDWjpO-6CWU2-FnyfDoJMVJZotymHFS7TxbVFuao_CBgZLmUCgFTg2NZGIVsKu5gbxiJr-8QQiInGAEhAc9ZIHR4EEVwRxt9Rgf9SZd97uUVPLl9Iamr7ZYY345nD3VQku60u3Ss0hqux0q1McGyxGEePMZIN7bih7qDqM1Hzh_j_1KApql5gis3GpEMILMk_vLJj9HinY3a7na9gud5V-GddLFK5wSnNeyXXmI3c3s6h", width: 3200, height: 2400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111549015198772652964\">yoje zanoria</a>"] },
            { photoReference: "AWCwydi0QCyTGWUvpLb-vmbCeXNKPhh5fTokc6_I-uz51VJX5NXuWa9z-HZCx6OL3sggVV0eL7bfjY62YDEsEslihqeUdhVCUm333na9dP8bsCGhtKW7NjZQZPwBsklYO8M2LIixobZC2peYWxEEK18NIgTFdNOABqMsdLMr55atOgkS3X4mWMa7syibrP8ozpudMlCoMOSVXUcat4ZzkLLmZ9kuKSkcYB_DGvikYLtVmzadFck3hT8ye2He6qW6vLA5YqeJfdu9MB0xxpBtxgV6jppQngKfAKrB4Wdygy7J_xm3ndsJ_JGS6EPx1QKYNclYSslPGjwo-cSOrqJRxluuNTQpPJKBL4kjnRVwkTxqu3fy0gKqoanNVzug9S8JCraFwInjCQMlZ281yCgu5Cdjo1Sznhg7VLGz8TsEDFgk8BX-TAh4", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107025189860240204617\">김도영</a>"] },
            { photoReference: "AWCwydiTAP83fVl_Edu1XoEOT7mRu1M3B_qymebGfKCjMC5hBim3Q1ybxeBczwe0JI5xgUfpUgW3mep9RbDDE5TRYklh5OPJ-Cp1newSCMUBAX6LKrnAIKIPGKafvRF0pSmKMYc8JorZWQDDG2Qnfa2v5w3a8L6QRIATGfwfQlYgPyfof76muiwFFFvP1F21jAaQ26-PQPSKzhU-uJceQtyJfuCtVYAtP4ED31B3RoYN7m-sanr7klUHP-IoqTrgwKiOtWJ8gn1uCDOFwYbXqTe_LL_txkQDCz3z2ghs7oZyw2WVJRuMjKaEy6-aJikAndwon-7ckhYlqx9BtyItAUQG6fIDWgPhbvAcZ7Fxc5T9R3NgRSnQ-NiDmCZXeKqoKvLLkq6qBhKmgTZFJGC7QLaFtFykgF9SFA6AO65Zp8l-xQnlQ_E0FHdBjJIGziLJKoi5", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115170112807850574562\">コイワカメラ（KOIWA-CAMERA）</a>"] }
        ],
        summary: "팡라오 지역의 활기찬 전통시장으로 신선한 현지 식재료를 만날 수 있습니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 과일 및 해산물 판매", "현지 분위기를 느낄 수 있는 시장"],
        tips: ["이른 아침에 방문하면 더욱 신선한 상품을 볼 수 있습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 6:30 ~ 오후 6:00; 화요일: 오전 6:30 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3649217304411288124", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%A1%EB%9D%BC%EC%98%A4+%ED%8D%BC%EB%B8%94%EB%A6%AD+%EB%A7%88%EC%BC%93+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "타그빌라란 퍼블릭 마켓": {
        photos: ["/images/bohol/info/shopping/tagbilaran-public-market-bohol.jpg"],
        placeId: "ChIJKRV_9DBMqjMRJKrhUkZgCZs",
        placePhotos: [
            { photoReference: "AWCwydjK3nBYWQe06aZ3axkOwsmSSOz8CEodTsMMzFd09wDDmvPNsOKLaau7XeTapjBT_oVlQf3Iy8PZPmGbdam2sInvPP0I1UEREcqoYMEvSqWz5hhsk9uPJE41XcWutv3d3gSNaluXPHUimBbSvdqnTs4G31CG5n3prDtGOIrBQe9WULGWF-FbYuUUHnK8577VBOsGrXYjdrWKOXdd028cEtH0WXyNuQ4mQyQO1XnRIEq-hsS8M2SL53SfLXrVpfRe7bIkodaqhZMJmKMwxsUvXLwI14nhGoL_nKpxkUS4dT9dep8YFIDoeCTyF19WCeKjk_H0crsPhOsGhe6N627m5YfaB9rNAZrW1JOghdhwURilostGZ56Mq0AcwfeDQPQDCxmCCTLXv2VFXyFgFbr8QpcYtb_rGCDkNYMklukKKaaIEsTz", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105359332542791574826\">Beth Sims</a>"] },
            { photoReference: "AWCwydjLW_RGnr86w758tE27pMy3oO-0dPbwfhbsf9y_x1QbGSRtONADxvIxT0W3T5lcQkKMBc1v79_rYbjM_KTBhKfLBSk1y_YhTKHKd88Q2kOtqj0N5s0IH1Ppu2WtOhaWZPRA4iH7hug4VdjaybiutlVGUvtcs0hdS3xX616cGpw1MHwFD-vajoW68orDKVmonTCnJQowkE0cxGMQhtFTIiZaEz2ZMl7AEVT0s-_CZOt1p46FJO5Wwpr0RWpL4wg_A4QOxULuMZKf7mEjaC0dITc53OXGMpomDRwxOxMbqj20db1OZXen7sZN8bRkKcig26j0cxkKQQXR-PNo2OSRMOkDwBCCf2M_lq17AobsaUlT7xgIab_tYyo5d0Ml7DRzGzkUmkIy06KaNsK2HEAbO3aZJAsytpuyjwtBWnoOmZJuj_hY98wxg-AgZBqUYA", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103617219728926643051\">KOREANOinBOHOL</a>"] },
            { photoReference: "AWCwydhTSfF71ZyUeb4aDrWtj1USW4a8quWx7qSa64vrh6RIzDXz0hXoNd4Flltvjv7XiL-AmWqY-wPWNloPzV8aRFE8cloMplHJ9d-UAUVMHY8W9RdrlmT4ATzoJtRuOH9fy0ghT-6e_V9qHg0agss2ufHkE2lw8oMEEctXPh2Cb1hnMFOLMuGad9eq-bS9GlqAGZygplUCcM9kdxpVtt9AF-8kIlBDKuskASqrZjiqujPN_GnwLodofrsigd3Wxl2jSpjsG-hxRBGVsqIBL3wSznwXFrF1aGOiaV9GZZNLv3phP_zwKmc1ETr60ICoZy1uZ_6g8QGavWpzB0Hcpjj1rdiMmK-Gw3ujcDmMuxJj9sMJMcP9y4JJIgAlSKgBjs_lB4jhu501RJCcS44kLNn9pjZXyBdkvJl0-kPSiavjdIrSYr6Z", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116609751698073802856\">Pak Paks</a>"] },
            { photoReference: "AWCwydj7FdB6yBM4d_RpZrkrJqBW8TIr6a0ZfDkDnGDPN0lUx4Yqxcu5NDcaT2Svb5q6YwRXjKVkWkr2yr2m2R2ZB54voo2VwwMmPO4Cbjg2UUTshZV5KB4oUxMTvnzlXsZTeRRhqCjcvz6lXOwoHJIkcFtWEOBUeRbHqw_eEn53G7-y6g_5sdiH7ypn65FOVKKRCm-zryEU_-XY-idWGn418flTqBweoGx77h5qxtcvrpwYK0TwAmx3vhPKBJ3UMcmDpZlo1ZbNg4kSo1AIgUW1ck2Av-sJpETLRG6okSv3EeH94Qkh9KdWhEduAR76e10S_NA0rAqNO1z59cSHHeHwwD44njaqHbPLpqZ2N7VM6B-gVyGMPpY8ZY2ZlhYLSqBSOrQSPLYpzMxWp9oAPvJNBoAVbiyhpZQeHEq7y5WpNImcXsZhr57IVqCVJTwRP15u", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103257393162885777211\">mehmet fatih yelin</a>"] },
            { photoReference: "AWCwydgoTIBN2l9LmCWosAZQPWiOJdg7V4EtIgjnVE97Wv4Z2aQolrPlndTI71eil70k4Rw5zPxBg-AA7mjTMP82LmtxtbmtCDQg8LxREmsapAY3DrM8ktvuLy4yK_V3oUmLBVZcWoKeELMcuX8uE3x0pXKD_gPBD-ipNaZ6LsqLuoIe98fc6NQw8C0WQTjU63ixC2JQ-DOgq7Um63KrCn_W1pgKQ1UWuES_aCEY7gMnrfNGBxlZSF_qNekJzIaNLYRSx8jT58hH-ePIueeCS53kHtLU0JYwbfPlbG58RKxXkFdeQ1TJWqPsUL2a3droVS9iUIKVqKb30kxaB7dlc_PqqePjG1Ad_ByKN3aCvKuIjt_nCIaQMWlPe2H1RrW6AAQ4YkjOlHRfWdidbSczooVkWnaetFKqjtALaKurwo3FhBd1oRW_oYn3TyjI3HR5GWXm", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103617219728926643051\">KOREANOinBOHOL</a>"] }
        ],
        summary: "보홀의 현지 분위기를 느낄 수 있는 전통 시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 열대 과일", "현지 식재료 및 생선"],
        tips: ["이른 아침에 방문하면 가장 신선한 상품을 볼 수 있습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 6:00 ~ 오후 7:00; 화요일: 오전 6:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11171566205823724068", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EA%B7%B8%EB%B9%8C%EB%9D%BC%EB%9E%80+%ED%8D%BC%EB%B8%94%EB%A6%AD+%EB%A7%88%EC%BC%93+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "알로나비치 상점가": {
        photos: ["/images/bohol/info/shopping/alona-beach-shops-panglao.jpg"],
        placeId: "ChIJLfykbIatqzMRzj7HrV3uxAM",
        placePhotos: [
            { photoReference: "AWCwydgwCzQnwRLM7k2vHhOePXnqTVBfeUSY9vDlGnnTbPmQPgW_XK-69hbQAJdHGWIBquxwHNyggnuy7cPZVPQnjjct-XsjwSWTx0hItqzrEhHl_eIGUKswwd2pNKLNRUyTx7VNiWwUN8fPifcsCEok_XolYGQBNexwi8SBzby7yWnaNgt-kjjLUQVohkTu_WACxo4Ro6naHn5zaYfMTXaoxUL5UCeZMWGEQVco1RJKVryp7fBU_UkWtV6d2cfht7t6hLVuLuZqt1hmhop6hByQ9j659fyrg_B_ZQIZDfY2CWAxu2j0FmG2OAhUHH01MirWy-b36CjVCtLL1brpdhWg1_ghSsWkvhGQaz_z8Fw7pHWCreBopjotjX-CRhJZswBVrM-0dyr-N2180He9xexEIDzf4tYtgv475xRWWw6B2gp6KMTicLKwDCdhNLgRpuDv", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117197115894424059915\">보홀코코망고BoholCocomango</a>"] },
            { photoReference: "AWCwydh0CfVlbZ07RyUFlXP3XLIG12C8gY2uC_FUmsQn3Gk8x9DlbhmgMcTk_TDFf5ET5wVlDZhDjcS9xiW4NvVCnnaaEaCFbXLT5BGG-ne-7k8NU6bmCbMRVTWPKRE-6hheMRsjR_2fINMC9kRYxl9tyjMdXEMqTbPZ8JM-lG2dPfPd3AU7kx3vmuecsFFdb2nBoqvCx0GCRKn-RjT4hSweDOdSLP0fXg9dD_DSVHxRzm4jGZx3YCHQfKzUASVKNIH6yhXRfayWuDGW8ZOnweD5A8Ibd-qVL9bgwXj4HtfcmNQLOeXo2xTqM1PLbo3BomfVFkKAQYK_U0xzujYZMJa4UDj_sqqv3n4iktJSDPw30hkc_euexB4pPV4MfH5VyO679cMASBp29DILWkllJF-rBWp4tllEh7YEISXdhkeq8SXAjhz4DRkjWi-OpOBGPQ", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117197115894424059915\">보홀코코망고BoholCocomango</a>"] },
            { photoReference: "AWCwydiemLVoCVCEKqwIe_dLmz8yc4wd5SNFk5TBSS5Q3JSvVxcXpUwGGifABvwJcWP9XM2_z9BFudHwD99Jq2isLtnJMgvYvfddvRWNdTHJ20EHF9XebRvymxU3qiqCiP6Uj7TvUnBehOjQJMF_aO4gzAdzc-gPYyF_za6uL1BMx11dH2llyyQPmTm9jh_t41IeACnBIVKBPubxgJWXaB4UifhJ_1Y0dqvVda5T3G2IZZ_bPV6jmHfXS-uNpkE1SpX5oSrJtmwSDYpuGFmmvf1VkwNA_WXWJJHg4mgopIrV_cddquh_zTYv13dgpjL_4u1nR4ru8ANwKXrOC-2z1In6S_Xx9LyadLbeV-PMQk6mGslOoXLag-MTVnUaHGxPAWcCJ11ZztKM9GNi0i_S9DwHtY48pNgOLmt0OZxp2DrPaETyFeX8YVFSW7DTQ-x2NqCr", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111018634983823586552\">Bang B</a>"] },
            { photoReference: "AWCwydg4MPAxVJDmoGfNRCC_3ikRNGnDlirUGVcL6a2lNqEXpOhG_jjptw_Vvr8XGczOCrCJcXBIpoTIpMqbRsrZZJEPXn9atRV2t1Swf4tMKBCAXDZ7597MttJXtLkQrfH13P7TqRlZKdIi2NALQatoV_MWOxMZcsbP15GbnLUBXBgEb7zzOOzVp6Uq-E117pNflmjqqHMNkQDHgHyeTXoBRkWmLgTgjcJW-fHfACmFF3qzCifoXKNOM98XFDtvma2clRUVj8fCfMJY0WcCOphRioonDCRgqZirVw_CJJfDQ08P9mCXi-4L2svU0YBqsWlR3F3MFoRrLmeaDU9B_sPzpieXicdHf8brMytA6TPUXAHyDppSfhmqVg4x_5QglQ3OyPur2e47HWdkZr6Hx73lhHdDbXolOy4gNdL_UwqLRpSFGREZTQ44SFdKkNbvrg", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117197115894424059915\">보홀코코망고BoholCocomango</a>"] },
            { photoReference: "AWCwydgOQwl_nHSI15bYc6o8dtkNAIXcyL-oQ1ZL4PaQQKitTb7ny-tETgPvCpvHUw6NnBvsJn4Y2bIE5GBVjUm7wy-IEpHhf5vBmpnMVXiMrn97Qn60zcrxsJw6ZNKoJeJMF0uluhsRVrZurhIXOvR-IwTUiGCj1xlhh1NJoH8uyedw_3b-_czmLeXVH1VV6ySWo0kSwcBJ15MP1jqxrVRB6HGU6xJoFZPn3aO5uzTTxbXpKkEzMvuuf29cq10r-TuiMU3CNs1JSZWocM6-bLh4Vc3M4otnVnNpVIDZqWGebfl4sOXCwFJB6EbfPWKVkhUyknrkfbcjvSNHFv72YLxZBMm6yOqUGq5nrcJgMnMv38pRagPNePoE4fSJSxZ0zxQOKp9HJd3gtO-NncgSspSXYWa5pUrvyriURmtXp7GWFwO714C3wEvEIPCYjpoHWsh1", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117197115894424059915\">보홀코코망고BoholCocomango</a>"] }
        ],
        summary: "다양한 기념품과 먹거리가 가득한 활기찬 거리입니다.",
        updatedAt: "2026-07-21",
        highlights: ["아기자기한 기념품 상점", "다양한 테마의 레스토랑"],
        tips: ["해변 산책 후 저녁 시간에 방문하는 것을 추천합니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://open.kakao.com/o/gbToi55f", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=271603963663957710", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%8C%EB%A1%9C%EB%82%98%EB%B9%84%EC%B9%98+%EC%83%81%EC%A0%90%EA%B0%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "모아드토 스트립 몰": {
        photos: ["/images/bohol/info/shopping/moadto-strip-mall-panglao.jpg"],
        placeId: "ChIJ8xC3F0WtqzMRY4Y9gshH6yM",
        placePhotos: [
            { photoReference: "AWCwydhdZmCgU5cv2sC2YTM4xR1e3Wn9YO1gTkh2DxUZSl1X1mKX7ePTMcTW4_doHmq8yrkmcA-HA9yQri4ROjnmTQd86P0hbrEHK5i5VV2T9PGYi1rAW3DsXKJEvRiYXlTDbqAf_XV4xPI-JsSaypJ4ECE5SKuiqvRaNQH6kZDNL0EVS9V3MtiDfRs1ypyQTgt21Q7k07yVEDQ2vfwJ-A8Fq8-3-nekr3g6WBNxU3CqTnAoI_bW6rG0GxpghkcjS2NYOOTuOsVsg_27x7Ixq8NYoS3utG26cyz9abJA3iNoTKZK8LxvNL_DVfMRb0ux3Q-DDP6vlfyWeYSSQLKddZYy4tX09BNODu3N-8dVdLVmKPF2bDWjkdefnIZlEq2JGnvugvAXwJqfDmm44_N_IeXbOmGE73opI2cJbqsIPrVMm3I_wQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116203064379340627042\">Ryan C</a>"] },
            { photoReference: "AWCwydi5n2TNZpigA_hDMs7blEEC-rxXSLJxEc0QAZw_JuwOKiZ8RQMLxjhnNW1EC3KhBJ7sGvxbhr7Pvlgq7gxE8I86XKIqehMKTczcSMjVU7FFKS_Yk79FmtJ0DFcV5XGDOJYVx0oS7sYFt4JDfdov7NniDTCVQBP1Nx14hhwVFSDPSkUhUtyLkuobqn9F3YM4f6gS_S6zV-ZkaCN5h0IxjGjN56ne-PufVnBjoSr9OFgOOhYUkaKe3FDVYmQRM2_xzt2Rcrdh1hWf80j5yPt7DNMiXPHTebo9_TW6xxacBVd6cf31DmenyP9SlrFee3eG6c4yf-39gctKBNkrflV0RJPVoz-daOroUVhak3AkBWBTucMpTe52gPUtbIP4t65U3oMAY05nYOUcfSH7q-lFpoWv8nW7J79NvS6DRIs695lqoQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116203064379340627042\">Ryan C</a>"] },
            { photoReference: "AWCwydhiP37RrGbZkx1WKwWs9GQQdnH8Z9laCcepR_mC4KBweS2pJUttnlXmEsVNq6UsNNV3W8cBd-ZKzKGagfH_-6Bq19fwzti2ESlUZuz7LvCWzwav31IsIib7RQ_V7VciQHpG9Rffsff-cbiv2fo33YSj9SfUW8HNCEuHpdynbFZJwIFGS6klDzuf_MN0kYIwLG7d_CK8HZ7f3eAFIhNxgBExh8QiwvwC7lj-WxSG4iqK_9us1tQJELYcZSW063WoBw-xoB5K6J8GDZyqPrZlmUPFaTbnGhZHcKaAuXEFEhrmU3htxUy1_QveGVEDoclGe_EEFNkNQlY2Yj54zDiQH5FWgi3qUG9UqXj4g4qkc73_lS9IL26pxuvoWAW-ZpXKULKyQ782Xy96pUGs80WeOpj3caozPX5XkZaGgG7ENXXN3g", width: 2946, height: 3928, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114212729431134405249\">Jonas Alcoriza</a>"] },
            { photoReference: "AWCwydgxqQ7DWX1bkEhpvUGJitg4-7rtkgRkHldPE6dsm6v6_TYx02fpZuyGPrbHAsP6E-mkszf8VvdunptNxer8_gSSJsMQXWpm27wD-Q5zvUEIriIqvgU5FMBfM-rdjiVXrtF7_SUD0QsLnTjs2vpu-ddoZ1c8YZd5BwsNfGfQ_KV3SMKRyfB6buXlJnuOKJgxrLLyHT3R5_jWgc-ImcuX_fPamjHtOgZSIj0WDAef737JZRguaO3GTTGvYuQv4mOIi9b6c5n87d78QP2jbXRmcQGW_wkeNmkv1Re255AJKgc-0vJWxEDUHVz5hfrCaRxOeu5RcyxZrjCycbAMo0oVKIh1XDmoxSQ2rctrkdtC76XdKmxr98cNrn0rfBs6cqhMwOAkjTruUo_8G9bd22P-ZMwDUTyIA8kGfiYrKcTeMS0Buw", width: 4000, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102935164034879533814\">Ross Lorenzo</a>"] },
            { photoReference: "AWCwydhMgJQj8Jyp0eyzF1qvwwC3MAEF8oK-uCxqHeuaWRzNi1ONfZ91r-9Uy5lLvCCu-i8enJbqOMQlxt4a3KSApwvJdf9qJvRehUSiI9cRHrbWrX9vY_jstgffLAN32brex0YZXQ7dkk8880z2n9MW6BJDOvlM09K0TuwjEC5Jf2KZd_arIfOpFPMyKfMIJ1AA7QrpWaQB6e_AVWdlIO66EFng2XKajSzRAsjjQrTD3yVFbJpOheDnBlqzafjFE7Sy93ldEK5nq2lPaa5KuuL3H9mvw1ddLye4MMOZz5yilqv7lh_GXM2wsKGJ79lhS9XGTdZq583nauCEwneB0OxAN3ubdG55fmL3CV7rxC1xUCj0DxFCl89zP2z37wGkv33wUHhu2b3CPuSlxD_ZNOO0fOWv8VJGZe6qDCH2lM9LbMejznsO", width: 4624, height: 2068, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106341198042775610983\">Scott Higley</a>"] }
        ],
        summary: "팡라오 비치 근처에서 쇼핑을 즐길 수 있는 편리한 위치의 비치 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["비치와 인접한 편리한 접근성", "다양한 상점 구성"],
        tips: ["해변 산책 후 가볍게 둘러보기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/moadtostripmall/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2588241337358583395", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%EC%95%84%EB%93%9C%ED%86%A0+%EC%8A%A4%ED%8A%B8%EB%A6%BD+%EB%AA%B0+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "보홀 쉘 뮤지엄 기념품샵": {
        photos: ["/images/bohol/info/shopping/shell-museum-bohol-souvenir-shop.jpg"],
        placeId: "ChIJeSjCfQARqzMRHJ9M7kByyeA",
        placePhotos: [
            { photoReference: "AWCwydjusnklfLqmO8XuYs0GtHPgMZaKyXAY07TVJr8gg-l0B6N9W2jinJbEoXtJViW2ZzH1SxplLvi1OlqawTv6EZoSE_nRFVMdsAmt78ymn-qnX7eb54dHlGel9Now_bsND_hxKQRmPHy6qgzSVJgpPUQg3XfMAuq1XpKjVJp6kp_ffre8Z0jVX_FVh4AIRPyLYL4sneKcag6bmIk53kjsbz6k-0QdMa9SeudMIZRompf2FYxNKopVQjFrA60L1_dJVXAiNlBX2ScCXpPW8LXt01A3wON4fDs-ksPKzBjoaXN0EiV38s8xkxJtvJCGEhNYmeqJe_dPLfF_dIZ-LPeKqbCIaH-Xn_twHmSFBDyR-hfJPnlXSjbxqdzm94aONrF3Wmm5Kq6GtG3PswA5Tpj13pRnw5RF9SALUMoP00BZYHzRFjEK", width: 3060, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115904065454740724401\">Sam Sevalla</a>"] },
            { photoReference: "AWCwydioSiSQVF8W04iSApHf4FITeFv3gmeSs0cAlwW_76PgNYFNCyVciwY7DiYrEz_UWH9l81LF-fNYeexN8DpXEbe0M6Vfx5ICuoO5TLZyY9is_bR45X4iyyw7Awz7f_ejPwQ-2f_YSGifMDoqrbcSHEmtcGHsvW_7fhTqRxsp_X27b2oqs7x0SQvGJ63j1tNqRdhN_v49GVCwekPPt2xsevqG9Y9o_DW7o-pByRHJWmmm7Ff5wflpvxRgZ7bsjFijaTr1lovaPeKwIvfZRUqQugazUcv3RiUaIXqVg4m73Sr358mEdfZr9XFU7altbYNpy0Xf4aUsE8FBhM4mNfn0QPvQq94yZeFzhLy7oxlYPDAFx9nypjQuyhSd6_IiKlDmRKWN6fnWX1yZ8WFVvztpVKoESDe3VQ1yGAcSijc16qkaTw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105884827044107258735\">Sophie Barlow</a>"] },
            { photoReference: "AWCwydjPp4sBpd9xgPOLthcln8ZBmNzsmmM734O9fOvYEeLRaLJ9kq239ooCMuldcWqrfz2hIZ_eOwdlAjfLZZFAYrebcWQM6ZsJwUUeSWPLJQFl5BcR9S53_UI6JKlgDXslNZTE774ImdQzsnDsF1wyBQ2tWAWW3GssvdTSsgK5SQiN8m1Z57Z31Pe3MxLyd8DNr9R1C9ENlAyasPr85pip9ySduXBmBfx0AegK9ZOUfF_xDXjshGSUytgB5HY4KYmEcBjUOE94EGrbedrlUZ3k8uz4pfyspF4gxnfCTcHlHAYNMm0OE6Qzics6Bn7JM8uo3Ln1tLiyRXgSV2IGkDLQpIZ3bl46RfkNszQcA5H8ImroODBRghY4DWEXa_Jk1QjCJHCXgnv2jthMxb_uq-i1ZMfwBwBQ_L0yHu2EisJjUdX9Dw", width: 3060, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115904065454740724401\">Sam Sevalla</a>"] },
            { photoReference: "AWCwydjyDlzMG_x-_ZcjY4uSv9KrmZiODbBbfkNEL3YhTf_pVpiGK3TVZwuuJKaMXSUkQWWVO8b49OJurNE_iSvjdo8KmWMND_uME3ivnK5r8GfciXH3kYtKqWQADo0bVdEnYoZYm8h0JJq2UY9YBC9ZX7dnvvPAGIA0tazoWIAT72MQsvH6KIsHji7X816AqWOlCDvqqlEZ3LYrWTVcEhu4vnWCXS1t_L-zIDIH5DSTPuhO6Tsfkc50AG_uG7n9P47Z5OFTd9rurmXAMwlyVMppo8bcG2DSI5UhOIuU_YkUdcPxBmHVkKtrD2nNZb1i1F_sBCsiyQE4Nqi4npr4gl2AjK5tEv3RJeft_oG2Ou3bUveT2OqIUnLg4wi49-Wg1vFkNpC8gQqCbOeI3-IKVdmrP-UfAgqf6HfL2mmBndoPd2awnw", width: 3060, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115904065454740724401\">Sam Sevalla</a>"] },
            { photoReference: "AWCwydhxU-QijzB67h16g-gBqgr5PUaSLWKgwCjQFmBa0wFLN6MI4fqECtGPSjbww6K19hOKOfW37UwkakBUH1kllWmeMjHtugBIKkFoZ7Rj_AuYMnr4-VzLftIaKCUCXQPzOFonYO0RfUQE6wLNd19N81loY4uUhhIBqaHEqQw1A6neg5LuTDIu1jJEyhSDCTDYWztOrF2SBZ1-6IsF6UAygghZgCMvhEgP5dw_r8-w3Ag4vq9ZPbRQT7dJgc3u_RBvqOf7RIwmOH3UaigfpVj9RcSHddVK2KbMV3PGJ2CzjBJrim1BexObgR4CgxVc25veJUo6NGmY92IZRiXluQfXTEIYPXMzhVWuZC6pr_P4ARZXrRWav2Z394vfpZ2UO7WE9iUGI2uiuMN6Xtr6BKc1uKIW2k_IEANQSRuriqKjxTuJKH9_", width: 3060, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115904065454740724401\">Sam Sevalla</a>"] }
        ],
        summary: "보홀의 특색 있는 물건들을 만날 수 있는 평점이 높은 기념품 전문점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["높은 고객 만족도", "다양한 현지 기념품 보유"],
        tips: ["여행 선물용 아이템을 찾기에 최적입니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2271632083754912668", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%ED%99%80+%EC%89%98+%EB%AE%A4%EC%A7%80%EC%97%84+%EA%B8%B0%EB%85%90%ED%92%88%EC%83%B5+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "보홀 비 팜 기념품샵": {
        photos: ["/images/bohol/info/shopping/bohol-bee-farm-souvenir-shop.jpg"],
        placeId: "ChIJ_____9xSqjMRIDZu57H5Pj8",
        placePhotos: [
            { photoReference: "AWCwydj0oip9Cp4NKYX8UEQabHik-DD4_7CykSWy6iFZ98qgYzHekH_UQj6xGSiSxRQMFyYa-hH8Hw3GE-0z9BarwO1m7AC5tDuxtvCcRM7BMYaSUr9Y2P0DjKup1s1_p2vUaKfcV83cSF4V6Ex3S6aYIYgOKc3Ct4t4bMu7HmrKIfZJZzGcxs9yfD1t3kA8PKzY0Bc-oTxlTkJoCEWKwNsNKje0cxIlAvsv8rl_BXgeW2flPJ0qJ-g0qoVoQ1ptRvZr2PzbXe3K2fb7Bhk2Si2TDepPEHmHCxid_gjOdaQHlhGzpWQCL9gAFdiu5K5Q2SiYH9GRhkI8FMzcM7QYbC-wprXkqxygZx21Hdi8H9Pb80kgquY_refoLw9n3op-9bOSDwikXUi6B3hHov9NVTwVT4zMWQHEJpXIgkl-6khX4PWm1g", width: 4800, height: 3193, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110985170526857403154\">Bohol Bee Farm</a>"] },
            { photoReference: "AWCwydi_m0-r-zqtWPIVzqd0JHJ3WfwHGWgCfTEuv6f6MqxX4lQPr_kWasRqODsEtw3BiSUCUUuMnc_KwGZe0ee5_65vXWOdeEgJ-zY0ZWS_nIW8p7FR4-RGgGaT9i7CRpbND3B8IkzDC9Lt9Bo9jBxVTM-yDpJVOTPIchmKAvVw0Pqjh8RqwAcsdemFKl4O7I_fqCjtTUZBGwF3wl9mkiHzBXdTh35SxGWzOYmXuVQAGb_VMTjuH050v5IAjdoWRPpUubQNpci5udl74mn1MbSHaSZ5xDabbPAfi0UdU6FpiLLWyRHzuBOEEEinzUeTbhhmGg-bwHMUvlFAoVKot9DoDhFlWbN9NYNw4BZL0yfhbtHmQ7jewSschoj4MJ4unXj-_YfsY0lcQ0yQQ79if3xCkt8wopZf197PpvRaYK9fO7g5H6Dvxekj3-Qq_0TPpQ", width: 4000, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114289585695211168507\">Cindy Rousseau</a>"] },
            { photoReference: "AWCwydg1TWRK6Kul8ug1Mcf67JE1gFBIUWnqqBZcvcEtIWodA8mLNRGa9Hy5FM6ojKKWrZhiMhpSFkW1tyopWaCuVpsaepfjurXZh74Ptm18WX8JFJbqHgarbi02HlyQIOZx4y81n_QV98WKUdoa5ttlBQia0soAaaLASiGN2liI_GvjPU163_TgU-dbV8ud3uJOwsjrRrZavyaJr07Erme_D4Nm_GGWmQnWYbAE6CjZCzD0--9eM5aA0lDeRUc-Ux696kOIIJjGQaXhULgpWNeVVxacuGf19X9taPQHiy0EfSp4dOkgAmAXQcAmYyqVkJDakwSo6wGBwfAU76-eQ2vu87YBTNgxbNU1XmprFTBe5IHsNoxAn7oMtPgqDcMlI49e_k2VIYcNKnas5W8L0UZ-QcmQQf38chrgig3YLynCZGBAAw", width: 4800, height: 3193, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110985170526857403154\">Bohol Bee Farm</a>"] },
            { photoReference: "AWCwydjOQbSS_QBreslJRAclT9s6qkNEKk2e7fOxMiWZXt_eLYRWDOwEw3i-NvJA9Ts8FA6-22UizyAOK_OZ3aaLSKx6AjnUw_RaPN2f_Z5abS1egDRgK3av9b6PmS2OykxWUZYgxvc5H1N1il4CZrxb5X_2Ns1ar8rd58Hh2NKdLMCMecXaQVnxJlAL-XHAp0hQNrSNlJwO9NxMxR8Hrcab17qKuJzgURJKlQNygLXLwz9eWx3y6g31PeoyXBEtxQAn9MQxC6iDtP0DQe2exyNH6KUyRUr-6cKJdIW1BqmoyFAM31UaXRVBCOQ4PJRqOBabhIPg-APsBPrjPjmMsz7vMY9dXl4gs57VhkOAitX2ucBweixpRieQwduFfjvG2JZUTRX7Yrix7dpzm2JLfbJNeRy8NviEaL9VPMLbpLt6mnv27n2KecSSiMO7TJI6wqCU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112026871700802455529\">M. Martínez Zugasti</a>"] },
            { photoReference: "AWCwydhXY3bMjZPKDWuDKbHTdH-45p-ueHp6sabw8nUjpD6Oud3BDpPCwI5eyghVXZm9hdLBs7L5920pbM25wB4KhbOcvDauaVM-dcep1t41gaiy2sCNPEmhj0r5qN2yECiCpyYlWFQi-sTVS3pb78_rexFIWvzey0c2F35ZSyY_x9N3QwYt5N8e7IyQr7K5I9BdThrXCZ8Wj691tiLw1WAGtdKuuvnzaQfxyBwkVteG8tcg0bPKmcOTOrIHBwtc_DIwEgUXbPaySLJSkCGrI7KiP0MqxpyPL63XQyOjYSkxMRrovxbG_j9YwkgBUIv_96Lv0j1w-V9UA_Ncwv6DUsRFaAmOhSAXUSAEzsDVGNl7u11WrJmlmVQ6ZWuqqMOR6h6R5HylHZ0T7Y7Vho1QdjJkRXjJR6DHUSepY2huOQOri5nCjYUl7AzZQaEFVioEeans", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100146314657434217894\">錢大明</a>"] }
        ],
        summary: "보홀 여행의 추억을 간직할 수 있는 다양한 소품과 기념품을 판매하는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 로컬 기념품", "여행객들을 위한 맞춤형 아이템"],
        tips: ["기념품 구매 시 간단한 흥정을 시도해 보세요."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11660271934230478044", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%ED%99%80+%EB%B9%84+%ED%8C%9C+%EA%B8%B0%EB%85%90%ED%92%88%EC%83%B5+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "플라자 마르셀라": {
        photos: ["/images/bohol/info/shopping/plaza-marcela-tagbilaran-bohol.jpg"],
        placeId: "ChIJs7Kzg1JMqjMRc7aqz8aL6oI",
        placePhotos: [
            { photoReference: "AWCwydjFdKeyRyinTuvNzjAkzVXLJpjych1MXnAL9jzI-XXdfAjMHTjVWZNhjge9YOAxq6hVAdDeaKQ0QMakN-Rb-RTvkFudQBePFE0Tuc3iCvwCYkkXVlh1bc94Wug7mhCB8yYrDP75GImXIPVsUwbKt-1zP3gkVhIcXj9tcrIYPc7dyO8y-N45zlLIk6eXqPSqzq_qmuOG9BjHRkr8dMfpx7PffSvbD4l34Qxp_C4k_AQ043AqsmmNpKpz_lEMdRsiPlkjHGm4ygSz21ZEQIDlY_hP-ETXqv13JF15kKmudchuL8MbD0UQV9kxBkozfaJw9FDYLL7oz1JbCxHXgmehfx0Cjna1KSn7n-4swRp1dJpQ1uQFzXWG3lGWeGIQtnPSnvEFutDewRliIXpzTFVAeAXHe0y7C--sr_IQv9p-W9c", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114372841561372021068\">Ging More</a>"] },
            { photoReference: "AWCwydjEzUUBspZhGErVtcFUILNWnmIt6DlAFYwIn4idr8Z7irCIcV5lbaegE-NRzvYRG8cqByYXN2pR9ucV7w95W52SLam5ex-VbRDXpm6nXnHVXd1BszKGuwshx7GrOcXQQEM0zzgea1a7Q3Zr0HkHB1NFYciFkuMu4a33nENNvVBVraTZqMccKRcky7c8CQyUgaBGI4rk1OTEHQXMjirUiRZSxNh-oHdBZM7HjL7A0d_tNj0sOaCk8BiznbreDufycPlphnDQAU2loV8Zxhy_SVCKw1sn9NY_MPluG1Mx7txToBq5ljagx4qztI7MZ9mAbm6I-hC9g51QFsVCuLoq9pvebzn6QP10O5w1wyq11GQCdJ9er9HEy3kN94j03kse4wjq7BT_7VEx9rD1hS_TqTo4ST_1kt-tjbvG4vk5SXSYkVXh", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115053340951740484969\">ledao li</a>"] },
            { photoReference: "AWCwydgL0AICf5Ehp9zllCOkzl9KFzcFW_h7pJp6YCDbl0JdX7KPUjwUu2yrXYmsEj0OfL_FvVXsXQ4S5xX3I_pF6pl_NQIB3bDjyiXL4kbNkJ6b_4jDysh__NplXT0jE14ztO3SNsQ9UVTJobiJKCuvRpxoGHd86taMD_bGPuM8WXj7-7vp_p75fq5Kt8GwG6WlcByZRMJg6KJ7BjxtzEOLUM1ajJGaYDUy4GskQwCbzez76lm8CuQdx7SDe_59pvsyjMPXZWBRbK8i19YqmZ-fsRhhxTTRT0L68zyTarRTJHsivkHqVdhWYz043G9rwh8gvHiWwB8v8vkpTuos_XCg9MfIAXAALsb-BjNwumvEXiX-U_SgpSNEma7W27zCtxeygKBY9M-zZRYg14qpx1N6m65S-qQRa4FxizVcS2x-ZeU", width: 1534, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105080285539785876949\">Boy Asay</a>"] },
            { photoReference: "AWCwydi_JKqHDGpJagyTsJknk_QAxWfwPL1SUi89ANPHKGR_OXnPN1-XR6CRnWRJCyjK7-1h35eEX2JsmMxiO4PHtmgCLTt8uW6D5zAvKVU0as4Bf5OCDEIeShR_TNecN8W8B-VCrYJC3Lt1aZxDp5zapfv4S4JPZfgMJKenM4qnfSfDSX-ZT-IGidNMntw5s8YMgtAlsUuWZ6kcUcuSJXVKbCPXF1xMhgwaGszZeSj8N3of1Ofo1mF56PAi174R5myUBEPvkRL01TFVeVL560EqxewBi9275tf-fP6pEe9Zor6icqeGj8qVW4lCv4aDvPhi2nIGb3kb1qTHNjI9Ve8RlTyyKsdzeOcT8uYlu59Smmcj6HFLxeiK1n1mgcRMXf4mxh1axF7fGZaMjCtfREbH_QOhDGklcvIBnDyov9Fn3MkRww", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115053340951740484969\">ledao li</a>"] },
            { photoReference: "AWCwydhatzh1BNUo7dsOn4tltwcE0OFWEmSmDlcfIZBx8NF8G8Y3XE0EPekWGa7xa4TgPeQ2KdfNbouMww13gfhNqOJKy_ZcFt3KZwv8ZE4hhZ-YXq27bvTQT86YO2rxfGPZmt8T11UPsoGNTKPVWnqGqM22DW46bhvFRClxa3dDQ8Ir3CibTEWD9ast2Tt0gT_oAuYO5dnhNR7W2d32JamvfrqB2FuyrR5RtmDnsdJ8w0tQYWsvTLsYpSS5Ohsu8Xvwd64eidO4r3bCSYYj20kgxRz7vR6ENqStlHtnXgRPvmstojzo6XEYubd5-qsZCHX-fLcLb6YyTiaO1-upq9zHblPQ_cwVPuGLbfcNgQcmHl2sVOu8lVOyyFTmZAOSCo6GQMLE-nLer5lF3DsZoDEErmNcASrzhsjlVcgWoxRnIRF82fTo", width: 2048, height: 1534, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105080285539785876949\">Boy Asay</a>"] }
        ],
        summary: "보홀 타그빌라란 시티에 위치한 쇼핑을 즐길 수 있는 몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 상점 입점", "현지 분위기를 느낄 수 있는 쇼핑 공간"],
        tips: ["쇼핑 전 운영 시간을 미리 확인하는 것이 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 8:00 ~ 오후 7:45; 화요일: 오전 8:00 ~ 오후 7:45",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9433506055484782195", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%8C%EB%9D%BC%EC%9E%90+%EB%A7%88%EB%A5%B4%EC%85%80%EB%9D%BC+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
