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
    "바랑가이 망가 퍼블릭 마켓": {
        photos: [],
        placeId: "ChIJl5tgK_NLqjMR448SM03wcJE",
        placePhotos: [
            { photoReference: "AWCwydiA0Z0dGg8tVfCmC1oUgAaQP-Dc5jbGcw4ruH_EJY0auGVHMAn2nTiSJZacnsOxK3bAEvXbIrjLQR2xuDSztzpmg7HPd3ge1jkSFcYp3_1DpOBpnM_UBSeuMLMRXRh54BFLU9gyJSvngKn-9bVxqhLNNDyRiWcVsjjJoYu1SAsHsuGeh6IBowS5LE_C_wu70IDzp3uyO1Wzh-aFcwbLLoF4RG8Tl4w41Q_FEe9aCHFWnvJu9NuLJpYCvhKpTZKniT6o7iSQVPqlbhu1VQNygoWhhBJaacwsWCfol4Afn9DQolUN1CFoQNp8ZfE3-APwpRkZKLXD77NwMwVquKnyYioWQ9XvK9N5l_k1PnVY4ifel2OGn2qU2F5FJwnRJXwJx1S-Ug6fWle3rqMnQhI5gSTCIv7RNObE1-xUVdIVUa0N9TE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106617631020704357051\">Javier Tan</a>"] },
            { photoReference: "AWCwydifFoeWoGsvvc00s7VPDFnR3-waqiTxwJwygUFT72KjS1VG61DPfmnuaY-UMJh4xH1xu3RnsfUOUCEEg0xBdmF7M-IR6j0ggOmSVHGb08IynMg8ai9PRXVuBbaAkeH5q4SEez5PYOO5LU_UAjRch-QUMAAlkvwbrPJa193nyYB2Q8JgF6nHK1TjSY5qBSQqB-bZLP0yFGJYCg__x4DZt8IBzOJPoJ86CkQNS3wqbRIMw5D6KEDXcbNnVO7nLfDbM9-24uDNFcPa3FqfGiGZojLwzYd5pG-QNRG8stWJJHLRGccY8AaF8eb79rf4evvv4gripseaMiCAhQbOlC20kLVKsFz3katx5Rjxc9MQCjp6Bw9h-S54Zf4HU94-s9bp5dfvjLK4gwaElKCxVvfDPkjOvXN6kuBs0POtdlpmNxCprA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107608868661875486336\">Takahashi Novi</a>"] },
            { photoReference: "AWCwydj0pEq3rDOnV5bif3NLaonm2huJAACzYXrF7RzCvBsLsrWRp4va8XmGqdo-dntUWCG00-4E1qAH-iK2iWkynOZQ1NKURshG2WO1EDG8etGUIJnx56wIInJ0CcGO7zH1dOLqszNMz4qARAN5iiCuie22aCQkKrz81taLbxjpX4duba6mONueoFas2IyrA4KzDGKr-bAdilNwNv2yP3YybFREmIKBAfmWQVOQK5kJYkc0WNKwJ3GvEkhFZXueSsfobA-XKj3Q3hhT_Zby9cD7z6kJhMxbP8gQDIFlD8gLigrxtC5YsLrDmOyiNZFeThf7dNvqlcW6Ef2EEbn4ainOblNgdsh3Kp2yoNlKVuk2TGq-xL3JaCYxq8Q_mg5ed-XabCZ_u5BS-C43Q5VvWV3bWsNVWvjPgFMNQ5dqKdmwJzDdjQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106032933175604315763\">Da-eun Kim</a>"] },
            { photoReference: "AWCwydgKGs-llqlVdw2ZOq2E0NMdFqyktM8NAltIjfnDakatxj107d-63AJ9B0DHI2OYc1iDPcc9gDQ-LHl34RWNGbjxX0D8SWRl16eADNrpiTvwvsXzr1DYrlf8cXapTSvm8x6WT40V_apPLZw_jiVGHzpBXwGWor-lgqyOJtOoDS_s8OIEQsC17F7oe_dYyINMWjXrmfr6sCqEVLibWOc6rfI2LrDvmWlh9nSWhM2ZlhWIYeDrV07cxeSXkEEzhAp1gwkC4aeUJdZ6ZTaxcp438q_yf7sXgMYvDxisRY4bwKjRCqfJ5d2Dq-bB3gNxILOiWnP6aCvc6rT8svoniHfuAnQ5IUwS6DeWOlCBPgjPztIQqWYb93gDSlyksMgNktKsKthbEe7_wTJztFbL4HfSfcfI9MlypUjk-C7lr5cGudCYirX0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106032933175604315763\">Da-eun Kim</a>"] },
            { photoReference: "AWCwydgl9dVwF17tVMzd4_Vl8A0bXFut-fqT-CuM6NUrH60ZBJdp1O_ZKV33i-iiUQwi66Amondaz-TLL0zZX4SK4zwIfQ4dZ8HhEtx_splISJ25fKYOwF1SFDAJPhRaSpuWv7Mh27pBC-V3Rl1XILSL-B-6byWhwScZVdc9SJG2GhNNLx8wJBEdZisu8n3ykbTJP0b0YofuVSsA-5db7M47M9UwC1LBu0dY9rmx1_zeLNkcaifFivmB3vSInraRjy24-Qp-8mj_ujnNAZZ1uLws9IzvlgzKfLG8ieIAUcDKIsbD1DYNFJj1nDYsg-t7YdldvRJvJ8rRCRdFlUzpuRV-JsLztQq-uZbMStrRLTa0EWeAfAdboGRpj-9BW9AzBN6RqpGDGawk5mnH113XtBse-jNYiQ-mD7PwXBxXkmGiEV9JjA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106617631020704357051\">Javier Tan</a>"] }
        ],
        summary: "횡단보도 인근에 위치한 편리한 재래시장",
        updatedAt: "2026-08-13",
        highlights: ["횡단보도 바로 앞 위치", "매일 운영"],
        tips: ["노보 횡단보도를 건너면 바로 찾을 수 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 5:00 ~ 오후 10:00; 화요일: 오전 5:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10480140547251146723", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EB%9E%91%EA%B0%80%EC%9D%B4+%EB%A7%9D%EA%B0%80+%ED%8D%BC%EB%B8%94%EB%A6%AD+%EB%A7%88%EC%BC%93+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "재그나 퍼블릭 마켓": {
        photos: [],
        placeId: "ChIJnZhMBUhyqjMRaop6updcs4s",
        placePhotos: [
            { photoReference: "AWCwydhkT3w9jVbPJxEptzgrJgBnXqSkQgz1QCl8IENee1PoGyMrpHYUUwqiTyR8Ga6wRfEwo97huDtOZHrU3OMKFw0ttDVgroy-dYXVjw8SrDPtA1VZSA7Lu1PSY-Qi7v5KzxrbRwvAJhjhQnrkSKk5WOWkYo1w-6ZNmaAMy3ZTw1FVCYMrLXShJNWsPNS35CLzhlhSr_6GkxsMAcekkoAIeA0uQH0479JM8q6ZklALLirh1M9v52aoxSqB7IIbU6jt15SLEJnwp5wg7dxs3W0J3upKlmBDgcnJvohKHz9IN-MvUUJOjDksMVshC_LhJSJ88g8Bic0rHbe7N8fipQYpsa3gtuN6dj_xV35coEWBn3xsvfkGBNog0UPm9lhTeJW_-7BiYgQgW4ws0bVPBZMc6aWZL9xTvo4CG46ujPYs97Csug", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113525933030443385728\">Levi Sanchez</a>"] },
            { photoReference: "AWCwydgwBJ2yMJCbkhTR_P7C34UqfrS73v5V5e-UZZhPBJSd6raodyIvWNNgeRVOE9gvL3UCpZF6UDC8sGhpnjto_0F3cx2wsjxpsyZxT0ZuMYD-7h9eZ58LWTEpC5SNZdZoG8cwD8--CPf7VGuRQbpzWjvmgtiCgWa-HihxUpEs03GF66_0fIi8GxsQIyVn3o4-MC3d4GvkW6GVePmGRF2BSb1Cp7vBSzITogwrH5G2Cwif8-sdjJePOqNm8uFTEy4pwiteG-hTaLenSHjbkdCsZGzEO00Gdw-Fvri7kBa61sVpCca2ygjFxbtOUBja6rdssXMqXSQqCUeuN_hI2Am_M-QkT48yXp5vmfilAcubEb91s3qoqhf7fVftsLQio5d6YOSPhZ14sFZJZSKDCZbWfN9tif_ZSt0KFs2PDYE_EAXlXYdc", width: 3456, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103976265516507253603\">Milko Mario Bonelli</a>"] },
            { photoReference: "AWCwydgUvNMI8AV9UICG6mkwqc4_a5P3onKbi5m7fiHFJih3x2Pd4MIkfm4_65O2eNAzXULBtHfRqImKIy_Dpl3STYNfPw7J9pFrLEGS0aJWXvSZitXVw2Y9mn-LA5IufEIkTcse8MWH8RzssUwbF42lYAJ_6OBYmgtGZljNloMy0aXfTMUjxsaourSmyhrtyzc0JAqtSzc_fy9DU5aYk0RwkqzZQrw9ovTul5pQQIJ7I_OBzov_3CA6zeqv8aTM51c280Rd1US7HNvD0kREGM19JvkbTFdts-n4LnAe4bysA_eynYhHp-gsFqfokulcT-ZvBQXiKdLoO8AnCYFlOk5XrOya_3N3EwS17NvQ5qDmRCp4Zu9UUt6hdUWoS8s8PZ27558L_tLJMWmbh9PG0zy50XQa7tbaGWx8_wI_csf0h5iiSg", width: 1944, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103283027314982112365\">Patrick Liteanu</a>"] },
            { photoReference: "AWCwydh9RMnKpp2uFoiDHZRfuwuWMTytl6N-1WEQwTlCfJ0ojM1oG4WoFDNd9rajWylzhj4ruGCSadFkDLVvDk4WYU9Tw1MAb6_akAWGcgCmZgehRElMvy-91w-OKqNj6a2fZ_KunLDvDhB6_e9_dZ98F5PP2nAhOy-vbtQNuYQQpWDkU6QYkqSScthBu-WezvM85uIwBBuiVDG6gheNROCXdoFPq5mBdj5SoiOW8vxyl3WteppZHmlBzA6wC3MKSpbkCxe2IHtJZwLkHygKWQd7fyeNIT00xEPiTE5KMB2i9WAIHKS7HuCJfsY3qt4oJHkeB1FOjHqM0vl7IUBNkZc16Qprq_pujq4uBj7X1bZ0nAhGTyP-7ymMRiaDXPoYub6pkTFHTLXvpn6W_6PgShVCs_zfH7EX3bQ8_A6v_E7SaFwEIN70b0z6htyyau9iFen-", width: 3021, height: 3476, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105840348049779128534\">SICILIAN-AMERICAN</a>"] },
            { photoReference: "AWCwydgmvuV6Ik1LTCkc8r6u_6z8AqnzRNN8Ntwo7XbokBdYqAqwF5Ybts77jgnk80VsP2dplpqrPmHkDbt2urFGscfHQ__LHORbCrVKYVN3ryzXNfgb9h-BdpU-t27O5Fq08DERV1se4zatPRZ4oX00BAEVo0gDOlEFY9U7aBK4nP74EADX97M2MASTyMLk14fqh2NsBa92hxBGU-aWDPgLGT_gQLMA61EzpNTcIBqnzOSe1VsOs_S4DJsbiogyfgsxzzONEUSQ0J_8py0C2eEv826LX7xHNVpIrR-Fs1o4kw6X7HnaotLSAyyFqVhAyOZIX_x7xM-HZT22A1lQUt7w8NuXYsHXcHSYXQu92-zIax7lIGnOiykCdQ-cj04wbizvBXNCd2CnIgjAxc6jJKYWeyVHhS8NT2BfcBR_s1kI5Kb1iQ", width: 3968, height: 2976, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106362670802561488625\">Damiano D&#39;alessandro</a>"] }
        ],
        summary: "안정적인 평점을 보유한 인기 시장입니다.",
        updatedAt: "2026-08-13",
        highlights: ["풍부한 사용자 리뷰", "안정적인 평점"],
        tips: ["금요일부터 일요일까지는 오후 10시까지 운영합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 8:00; 화요일: 오전 6:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10066491398841600618", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%AC%EA%B7%B8%EB%82%98+%ED%8D%BC%EB%B8%94%EB%A6%AD+%EB%A7%88%EC%BC%93+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "칼라페 퍼블릭 마켓": {
        photos: [],
        placeId: "ChIJw_TSszwyqjMRN7O21Dw0dr4",
        placePhotos: [
            { photoReference: "AWCwydjtzCHcVV0YF94HosEYA7SATZ7zic6aFwZVrlRI0c62IUMH0L1p2DDW2GKG8Z389lsv8aEE3Dl8ykZ0c9eUHMwRWa_gys_fOUH2Zo84pB5Q6mmR6fnmf6D29GSfI3FM7hJfZ3oLV_tbNSqVobolBE1KkJOjdycoAyANdrdUhPLXI2_zhPtaxJVi5wQL00djrefx3erCUBXVBFcBbTnich5C8DAyrOacbmLbdpPb8JilIoxbwiI52R7shrHdHUH5ED3wqsWDxByjZRLzZXhZprFE2BPD24-HruQMMFXkd0ia4Ikknj1tskrCr9Awzh3Mhszc_Ng-BRHLtZW3hD7lf0xnADvPXjMkBZxbcHG98L_eMiD-1Oz-XvK2ZKURnxzM3lDxuvh5bJGSpjRLOSglgAiiiPXEATBVPulDEuXkgxc", width: 4128, height: 2322, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114860926700307974446\">Emen Lauros</a>"] },
            { photoReference: "AWCwydg5IG75d_NiGcUkVmJtapba4OQ4EM7-6_Yg1fKPD2RHS9k0Kz1fmCTy4QSyI2BrZbpk98JDt71GQOB8jjlpSyvmf8aQhyIew6stjIIAIKQ6fHP39tjvQd2NjaDrT5Bq-j3hGPrBbWmW_HEZPwmCeDr5p7tuNx4SdEnxXyJBz8svFT4FgoSZWwlLTIYyUg4Y3DVYuH0-snba89QtVony0hJaQ_ivNdZCtDV5h6nC62AV3s3qm4ngRYLd2M9aecryWrPacYrTWXtHNhe4rNZFruHgRQuNfthD-q0oM-Qu-WBuJfqT7p3yP_Lj2rg5ikk8CGjAri74AVQKNKLB3YwZxFpZHjf0g00m3s-AbY2UR2TuInii3WkMutu9binks19NW89msTMJr1qf2qZsn77fmgvosVcB10diGkrtkuupIiWkkgXt", width: 2160, height: 3840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114190000229818742794\">Ronald Braun</a>"] },
            { photoReference: "AWCwydhFBzVHk9YipnH03I8_3ZKCDSvfU9Lrxqy_XXoecoEC6dTO9wuPvNmclNeXcveKOxMABNNwcnb2n6aVeTSKbedWEJAN9WsCgobaidbF72rd4-MyouFEfD_v_slGT0wGzQtxMxxkGralMJhdyGnR1ZH7lcgdUI-Nis1o2iHySHzmXxZK19ANugSnomKWWyXNKZ-6-zLPmsBlslomTIFmhaGT27mXlgMm18XTvS-LhquufSeIyBGOco02WDyl2h7B25Fcszdli9DKmW9u1-TtrYalou7LBiS67r_9iLLZThDu5BSiJ5exXs8kCbvPN_q9Y06I5QqUkT5-PMXg-N2kCEH2NFjYfalMCW9mXLdUC-HM5_Rkzg-clJp-Fn0ixCLhZG1hpIY31WIeqTW9my3CKuOl1ik-QWudqD4nt1jZ44gf5hs", width: 2160, height: 3840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114190000229818742794\">Ronald Braun</a>"] },
            { photoReference: "AWCwydh8C4Bd9LZtMpHqYfONwjPWdBKzZG4vxeM2xqDaIcY5XMdNnuOS0ycEYNhzgFMv2gfM1TzCgfI87yxyRIoG3ODOKh9JSa7fYocsx52xp0FeDrdkZUUaVYNKi-TcYgPUUyLXa5mDQI8sZtH_OyK5xXZtYoi5kgZMHL8v6p-0pba1hIm6-9Sz2ha8xB6VVEecRnUqcrBDQMcIVVUlURto4XGyfIJTcgvghhl0y6lG5Qqt8dctTdOysKHwZYhnWeNLjSOlF17GO2rM5S0D-p9m1AYamc7QPwa0kIYvD1tM0BAeT_Zuw-FJ2BkOYVJyHJpggcHe5wBIUne5EgtnxibJlBOLo3QtF6Vz3vCjg_NS-IERHkaTqln79e-zQKHLtkGJ6eAonjUyWHtMudmJ6dWpu4QQqxL6195awVsxvk9inNAPBA", width: 2560, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118347286038769216149\">Reo Salubre</a>"] },
            { photoReference: "AWCwydhIBsZ7esXh9AYla_j2_Xdrxcy_hDnDXmypMmhATDw8y2FCv1W2hYxOFpnvDIBCywEJARosoaxttL8H7B2Ij05vcgim_vD0PVHGnSlSRA5txlchxbipewA-WDm_PkY1N23ODOMZNjLykrBf2G0MGzyQ1Xts16GfDFL9P8fFy0Fye1finkW9QvswxTFxxHIYtos6mFwZyQtVucxxesVkTNA5guyRGmKyjwIZUdrVOylrkYZnZD4UGz18mFztjxb1igUZJO-E0PrbzA1wKWSgjks0qwTpKATcHkYpKhGCi_D_PSX_EoncZHu_Y2GkzoLhBNF8wyRZeYG6SQL6wVH0hSSeUTvFuysKLD0_jCP9OclBMC2FD6EzqKoxZvy0zLPXGB_ltxSs_VfAr06CTKJ9bV4zSci0irXUJw8ArDokGt_Yyg", width: 1203, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115960987522782710583\">Khatt Jah (Kathy d Gypsy)</a>"] }
        ],
        summary: "많은 방문객이 찾는 인기 있는 시장입니다.",
        updatedAt: "2026-08-13",
        highlights: ["높은 평점", "많은 리뷰 수"],
        tips: ["오전 5시부터 영업을 시작합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 5:00 ~ 오후 8:00; 화요일: 오전 5:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13724214350329590583", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%BC%EB%9D%BC%ED%8E%98+%ED%8D%BC%EB%B8%94%EB%A6%AD+%EB%A7%88%EC%BC%93+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "BQ 슈퍼마켓": {
        photos: [],
        placeId: "ChIJj4z-WrBNqjMRDSbiKrpDWBg",
        placePhotos: [
            { photoReference: "AWCwydgRs8iojUQz957XyoePkSMIyj3MIEMYZF20dleUA_JpTICHdT_VtPHLk6uEFk_D5uaVgBOhaKnp2NfzF0fgHvXzmzd3rls7Oh7P-h-Lwn5Ui6FVxxJPmVgD4Y8xWDmYFKVnx7VPVN0MTXHtnA9_fWwrGlJ6zYK5xBNfrzw7CTLWDhOFjhHQE9CP_iBXM92tNhgXhrF6npBeQ_DtC8JeTYEyz7BJHF-UHJqyFxT7-VdImhdxGkpU6Rd_nXdz-eGfErtDqJsbBsNjhZD2KfPyx5FKFOcCQE9G6h96jHo4fRY36bBSG8ZVzzgyLU8fwQhPgDAugz7K3g7DRIIrxpBX34WJCmM2mv6fD7iOus67XyvHHLoNuyUWuHcgjH-SkeSvZn1yaM8dfiEW1foK4BK-pehWMesW9BlM_rw0uwokq7LRFg", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111654142021450269347\">Сельское Подворье</a>"] },
            { photoReference: "AWCwydgVrdcbCIXGTrVPlG2AbrAkY37mISdqbqliIVJoo2YoNVdlTKGL04s7JnLI5wcTV7cLSfHAwwb_ZBfxkBfFFDpXO4GXNfERexgt7AgUYDPHj5gl9bQeiVSVJUgfe9wJLqAWAxZ0TPVZPHcuQwGkwHePCeKONduqmjpYFwxdFVYjnxB1lHDHBaGIdP2xXnAYf0WCTe8G6syPLOlnYovtIlBY59hHx3mygReJsfYtxGUHUksckMqwsV39peLZBP43UgYD_26FDU7eHSEfhLXQ60vibwhZhgkuhIxX8py0J_QSsILBdCznKxVApFmKsaCHZA34kiD9DlAGcadEM09xpc4Ps7Y7CaUX4eO3mzPGAaf40a1_vDfbC2pilLskUw_WXWzKBSu5T9QFkXGR_Irjoi5PSqj9RPMxkdCGBsc6osHZyg", width: 1932, height: 2576, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102677414707136769850\">Andrew Macaambac</a>"] },
            { photoReference: "AWCwydj9qChsl5nz0AXsdQpHWjkosSl64H6Tlo08tyknB_lSD3CrjeZaf-yZ7AQragfMzoFCIXAJ0Z6R4evcY7ils9XitmSbxWGD7-HTkWZxoI1w6CeGjMhbP1eBl43in5JHNozUIgWfvmO03kBZ6weOu42hOAFJPEi6zgam4DCX9dyvpcPUubnq6WNcAlF09vDu9-b9cdjutGhnMyhYS9gLWtNw6xuc_ZFvT69jowa4OLWpIAVUeeUd32abbNbIXzdQ27ts5Ym5kDKmCIfc7w1keoDzLVyCwv6hp9gVf3INHmcYz9VTB8FCqEXHw1ebqvKoUTgv41N1C9uVy0fOnUMG9YQs_W81LyL4fBAlpLBKMevG-l1PupHPru1HCMHOvv__mNwiWmIqvrJDlz9V_9tohevtsEeB_MikPiF0q2hA_D2X4i8x", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101301370892018634283\">JPerpetualKid</a>"] },
            { photoReference: "AWCwydhMbCAzuahmI-_s-i7oyRw2qBlklLzPFj6EVlhzOUwSi8NZWxu-ZeFp-lbK7BlxcuNHgC8gb_c8zZOdkbSoeDTNLyzFEEqixCdT2qpjkll4kyL_cG4JGOtv7wPg2PiUDK4fZUK_WK7GMymc7rKrcn0AtSGxRISLqmqLyQbcutMlc7BHtxHLZYWFQxvVQglOECNMivSCX0ELwsl743YhqbBl_cLMWtqK7mKBugMqfpb6XEkMTCcJ6e70jP5LsoewwcLXLIv_5ZVTyrBa2QuwfhD_s8gP2Kta6A7vkVnsxWQVxuIvijyMWl3zZvgeRC-DFnzDlC-50IRoJ4ayygOCH1YdRU81xOJk09ibXgg4KpbwaqTGxkA4bkdgN4oVtMHJxyOuSmVd8mrsydhz9r9GHfIwdDb79BiDVg4DQg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101301370892018634283\">JPerpetualKid</a>"] },
            { photoReference: "AWCwydiY0ObDovDL0IRiMXVCTOZQkBAOGe4BzE76BPQTCdOoWGrG_4fD5fTKxQbcRuRbdxuSkKNA30M__7R3JBXQp03Ci4sMvPeWagJ1DvIa6zEEjEpApVK4Xi_gC3wnW5QJvYOIhD4O9kQIwH4f77JnV-AIc67Uz36alVYn8TJOFqtwgh84lOiUzDGwIZE52BEUgWn4eH48cHhv4FwGzUb5yiBEYnftwtVoenxRyfZyINREFZNcF2x8xXgGQunEaa0T8ICzAIc9GWznb_fzq9BcJF-LK89udtV3SLFo36UJBM_qtm4qsQ7N0GWhUWAP9v31Hp9yv2S2trwuIXr3QM6at7rudngt_KuZSwwPPiARuv_aj3p7b-H2126PGQ6L6YWRgDvWqetPYV-HwrgidMuARiuH6dg8qWkZgc6W3XvT32pmCQxG", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100370510050986913715\">bonifacio asino</a>"] }
        ],
        summary: "태그빌라란 시티의 주요 슈퍼마켓입니다.",
        updatedAt: "2026-08-13",
        highlights: ["매일 오전 8:30 ~ 오후 8:30 운영", "태그빌라란 시티 주요 위치"],
        tips: ["계산 후 영수증의 품목 수량과 가격을 반드시 확인하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:30 ~ 오후 8:30; 화요일: 오전 8:30 ~ 오후 8:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1754226521723250189", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=BQ+%EC%8A%88%ED%8D%BC%EB%A7%88%EC%BC%93+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "로나스 코너": {
        photos: [],
        placeId: "ChIJB0DBW5isqzMRoA-lFC9b92Q",
        placePhotos: [
            { photoReference: "AWCwydifqCVU4b8Agm8USScBcYH6mjBqyb73-Pvwk2bXv1yomdlgHhfGX3BVB87hGoSYg6BQV8K-JNua_k6EsqG87cE6IazlNhABHJVa1EncvT5BhtHfnMhoDpEMSQqM4KiULqbkk3MX7xpMXD5elkgk6ZL8KrNcch9L_h6qdwe385UTX7jXJLpNBSmOYaUVIX4NygyKsnEe7jnCrymvaVj5OGx9wWb-Wqw0UZF7ySXgGblhMtsm-pMhMY8mPmXQtUp4cf5QMBxFI7gHV8bFebRKsOZzFCd-RNFWmVtUFspw3XFW4082QNs7XvCUiXDixYx1404KePORa7nbyTxJ3mz5xucm33uDBFQJAOosxLH9Lk4_yu_cus6hxtH1dwi4B9I8wpNtvHQMD2hTizTtmu7PSoZWxM66tQsCaGaqOmD23lc", width: 1440, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104056203330261493545\">Franz weissmueller</a>"] },
            { photoReference: "AWCwydgLmJuGL3sxAN53Jc2pympdSL-hAjhhGjZaQBE1AqSYZdB_WgdWw35l5RWQFUN2OwHLfyljU1xQImiIj3TsfbUqCM5iC-GAi6D2w3Y2gbfDSCuckTDnSGW-9N3SInz56QEJHAmJ-HetrnbCb0_pFtGDl9UDqAKSfOzk7yZ9YJiItIttQtg2uxbzJ-SXG1hfwRLZmr-3I2QsSYpq8dtFaAfKAWpiF6VQbAc1Uy3FQVF_uzrluoHtkKQeqvAgygCjoaX0cRjgpl8J9AvZo3yYVjANxiTmJBh0imrdEekEeEAji5pQZEI_EW4ASvc1HsEfOBfhgLXxthunltDXWmvIfBFEGZx6bdRSfpNKkEtcHQltDrbdUEhAf6I299wHPVu2i8-SM4yeCUcPUcfEnI5A2iWjJcizDBA-9VC6reWZPFdi-w", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111847517084324546991\">Ko Chen-Ting</a>"] },
            { photoReference: "AWCwydgzU_pfpr7cI58E23yqJfOxXITpNigL7Zm-JgnhXLYOGX888GUtsDPC887uW0uD710wJnGNDZmhiWSrPlOs0JWmcQZzZSZ8Uk19hQJn62cqTYbayymFROy9wpA8GYQlvDIAHc5vDdIQlsJdSRK0LDpnNDovPwTNQppgB95KvAgsmJ2qWMkJ4qseLHL4haSogXM8Cn_FENiiS1T_9GJFxtz0WylJycB3ajx223dYSodkPQXTLg_bT2dOVbBEfFhbcZDF9I5aNDPqBljeG-JFcfQQFNAPTsQi6pg7V3fDzuxvkrdlqMC8yva-AULhcUFZ5urpc5R6YF22CJOJkM_j3NSeOQbUWFnQEADDrcfLxWemQNiSWVGN_JGZI65pJLzZdzjTykY5SyZmAlq56i-tDC-Qz8Uv3liA5N-Xekgoy0Y", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110888945767402209196\">pang pang</a>"] },
            { photoReference: "AWCwydi1daZJBt2uUvTyMX0hYj6ssmhJO_diQP1VW3Rusk2pI20dtd3CZW2tQtUCAuz5X7VoyXmDTwVm6JDizQIfxmhVJwWqtcihjg44tNPNTSVK3ocglC2JuCNKnAZOV5FFPj1CjxueZTa4VRgZKy95iYqOIIz95rXnH53ThBQDnHR_mbO86c4hlUQOL2aMslzjihbhLEleCkyXDh3sNRE9X_gukfOO4Qz1jfEhyb3149QE8kPfRbLED6rzaZXePd0HdfCbahjDncDelTlQIdsMLVPvz-j2ZgGpJaw43mlLgjUNAn72lAOWxWda568uMEmwxd3o2lx10d8qW4KXrp2gznvtIgFo-CCrQB0ldZ-elfReuHm05vCznOpnLlal1MZGvOEiWkXoPIyMWhf-sNzG5A_mmKoDpD12NBKQjFth0lf-fOgR2rnJNAxGbsAnoQ", width: 3056, height: 3056, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117454672870583075791\">Franz Weissmueller</a>"] },
            { photoReference: "AWCwydjYEGHxHXWmiJqCQRhHAHHZHbUXOrPYbhKhnG4F61TDnnTCRv-Xue4ilzAnqkhcKfQ5pXUfeHJLUSvR0XyuPWncL5wWo_mn40gffLJBIotidgEZ7Du8il7S4ZLNvJ8x8o-S8MRC5H4bGMKalS6Nnq4VH2gil3F2fprDGxuEdrRemlUIqBGO_tOgH65DM64gTqeFKBmsCUvZQAUpI4E2Qy6EKTDCcm8Vqjse1CnR7nAqB-vq-sTtkRQjhK0SFUz5wOmLDR7DRdIHANJ5j8cU92ng-LCBelTN_bflSntEXnBL_oNc77m_8JsqzYaCeLifby7PiKHr6TKcAGYXVElgAf1NA1TYCcd4OKmfmI47LmPDy_o9hKrSsTZ3dPbCa0_NALKw_Us4JiMgg55HH3newIcMbpCp4DF1_S1ruNOFWCLZmw", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101529102174663209134\">DODAMDAM</a>"] }
        ],
        summary: "다양한 물품을 판매하는 팡라오 지역의 슈퍼마켓입니다.",
        updatedAt: "2026-08-13",
        highlights: ["다양한 물품 구비", "친절한 직원"],
        tips: ["계산 시 가격 변동 여부를 꼭 확인하세요", "메모를 활용해 구매 목록을 관리하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 9:00; 화요일: 오전 8:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7275383980808277920", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EB%82%98%EC%8A%A4+%EC%BD%94%EB%84%88+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "픽스라이트 하드웨어 & 슈퍼마켓 팡라오": {
        photos: [],
        placeId: "ChIJIWclSg2tqzMRyVUDaaZruFE",
        placePhotos: [
            { photoReference: "AWCwydg3vTfXhDZir3NR_3avLYINKLNci9OWkx_LkXoYbzWqUL2FPNIIVqCyb8piD7kRpOqK4wKugW1_H5DvRPlYF8eO5LREPUD7xCj2GrJrbnz4n9DG4Extt3kV1KbCbwOlKKE7PdaNvWoPYXFKkof8Rb6-7CwzrVA-A3nOqa99oaO_E9DOqWC4XMHLy4L0HKbvMmJuEjjfawwSLoGRw2dVSsRZPJue_csoanw5Yb2s1Chii5UlW5yQtlPPgPw3Kf2puNWCxacx0JYkKIFpTkJR35lSie6o549M52BwbBsny1ywm3kmSBvo2VigBS63z5Zlk4eD24EOssxD30_9Y60quC9X_dZNCAJovrhE-VHjXGl2ezzsu18kjHH2cxayaTogNHWtM5GlCbM7lMg80K4_KQrNKwXuwSVFf9I6yJ9WQkwahfsA", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113969307699075072975\">Bern Biliran</a>"] },
            { photoReference: "AWCwydi5Ffg5MlZT4oGYK0n6UNNxv_AogmCcq-_vSOUe-HbSRR7K5_ESCkyvHl8yYYuwIqxWPdCXEbn0xRBuLv-Zyu7hU8J3AMCERKlqZWBK04bx4QPOBV-2ooJFnEBH2wttxwN9PMclANxyGXzLMIl_1RQuum7JrNX0qbJ2FMvy26Q0PlOx94yt2-3HeR-BH9mhebAAE2WJcF7Jn6k_Xle0IJRUA2-B4vd-j6ul6V_OMdPMUq6xrC_RyjDNlXfiFqoM4sUp6no5SnGgu0Dbqjqp-xvoxt2dulhDXYHpa8-64azHp_K1CUqLaDymS81IzTu467jxV2qqjO8spH9t9kXmzBp0JuC-_IURtZrDwkQu40opv_gjgTGkUSXNctS4z9BzAM5xdt8-sv6HYmnRbT5W8oiTrE5PPt898Sszq_oZSnY", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117125823874542564486\">Heain_ Yu</a>"] },
            { photoReference: "AWCwydiMoGmcoua2BynPGl7xgM6g7MDILV557j054Zj2m9TjErcBoWLt5Jr-fTL6hvo4A60pjy0FxHNxZPWxcyFixd7CPVSTj_NuJ6lLJWYC_UOLuN9wSYfIO1UwsXNO58jvFhBmCLp0dCURmIyD-59yy7I7QtqRtTWUNjRxfdd0Ow4EtnCNLViYZRwQq3uxs3mQenteyznX0nil770xsz0LvIRS-TK64jOkP0SpQo4dSQtRMGbM7r37JjcUzpraa-zyxTdsecKNoTkOpSz3Z4JI8GfHj6LPXmi4ayd_HZ2z83hUYCWz4gcGVzydlak-_pV_xVxXiv6G0V94msFX9__SVDXi2BPNVJ2Axp6Ra7DroYAplsnLJohffcagjtow111rb9KL7acodTIYCZ7Nf3i273iJ4foSZSSbuzb8fwryqm8WAQ", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113969307699075072975\">Bern Biliran</a>"] },
            { photoReference: "AWCwydgJ40MPXGwQRsRqOrYpr2JUmEazhYPLv3EaaKLLW8qPkZkiwWp5-si1v7NJD0_i9mIUdhfA3tHR-uYQdVV8_I7A9fBiUeAOCwKN4UWmOrOSkxKz5yocE2jk-X__vfSimihCnU2GstGj1Mka2JflKD-8RlHmZqnz9mDlyUzwJFjGrN_gtJuaGpKsUeyYJsKOIwG_C85jqJ2TFBalbY_A34iDwIrJP01mFEsZ0EKbmcjLgU1jyi-caQwiI3yk7qBPDb4OF5nW2EFZ9o2HjmAKLYEFOt_LQXIIUe3VWmqJOgmQpIb5LTsGlyAMIhzJISYr7pjEk8CusBXLGYjxbV2unrpr8ZwaOyPdmF1yLQJjzsNgTYriGSTKPdPeLsUoCl7i526gmtEwEcCWNtfY5JCa0Z1ajV3E0V-hPIWWcykrC0W3Bw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102259778860165753505\">Jin Lee</a>"] },
            { photoReference: "AWCwydgAeGLdWBEQAGQtRjwTNhZXiwLlH-4g3kZ-B0yFVltyrrYVjNCLKnVOW6JrPY2ceylvHaNEh6gxV7wHsO_OwNURJrqbTqtpaIrxt9GgNUPY00qgt7j4bCtQ-Y8w9lEG0juhrssjf9gU8-gtFWruAlppQhtucgEGoA-OG76ZLcXAAvS9RVRiiVQU6s_Ak84O17Be21mipFNf8rIrBiPjJpx-dhSWu0Sofv8vyrdnrSRgi21K3nHT2CYYJ59tV0Dl4Xa9UKPEJknIOdsmAzef7MB6u2UBARukQg-zqN_Ybn45zsSEiDBp4dqn4BQXS2p35hmIdLAuK-zt7oRgfQ-gn6CWSO24rf8V0FT16BfWw9qii2as1eY1PmI-4cvP65obmP0Rn-Yl0TZSgFSPXf5VVy2TPbFBWgjy3Nl6jPay9zc", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117125823874542564486\">Heain_ Yu</a>"] }
        ],
        summary: "식품과 공구를 한 건물에서 모두 구매할 수 있는 편리한 곳입니다.",
        updatedAt: "2026-08-13",
        highlights: ["1층 공구 및 철물 취급", "2층 식품 판매", "슈퍼마켓과 철물점 결합"],
        tips: ["소량 구매 시에는 근처 편의점을 이용하세요", "대량 구매 시 이곳을 이용하는 것이 경제적입니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 7:00; 화요일: 오전 8:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://fixritehardware.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5888574875257492937", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BD%EC%8A%A4%EB%9D%BC%EC%9D%B4%ED%8A%B8+%ED%95%98%EB%93%9C%EC%9B%A8%EC%96%B4+%26+%EC%8A%88%ED%8D%BC%EB%A7%88%EC%BC%93+%ED%8C%A1%EB%9D%BC%EC%98%A4+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "보홀 강남마트": {
        photos: [],
        placeId: "ChIJCV0eSlOtqzMRYA_16WBc7m0",
        placePhotos: [
            { photoReference: "AWCwydhzL0VAvOn8M7cKGxZE0tJHZk5nhGUTRF5eVKO8NR5AiVFZpvjh-UaWUC3hEhbs3Yqxf0kVACu7a3xQOidJPvGL3tN_3fg7FDnTPUZonSI9dTrXcFIvIlSD8-Dz3QYwXyGIKQ1z5Pq_roPXdQextjF4Qfbl-j7akkoO-9H2ngHOZ8uD5TZQybsxP-EziCzcfTr9I17W0x2J7AOF4csdL_lbfLWgyCIjt4oTa01m-NZKGc--CrnZEmwEvdKoI7M684qA1BczuzbJk0RsffE3lq0RR7qdj5tmgfS_JBn1kZ5lahpXwOGfH4E2f7w7zQQv0QYN703TAfnkaQJHUlago5yyn8xbLJjjzsm74a8tAx9DKZid1VNyaWfSY1gGo4jrBvSxbN5Rb4_2lmCza59UojZuuiAsor-cFddT3X9liNULTGj-io7tLVBGYkCmY1pH", width: 528, height: 428, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118252911036672239811\">보홀 강남마트( Gangnam Korean Mart)</a>"] },
            { photoReference: "AWCwydhLUYxsepgGn2wnceicNxZ2hzh82zNY-zAqB3sjA9GCSXUVRmG6qFDQlRJ9-Wxh-SkHX7Gz8m2H2l7pR9Kt7KkF-uJ-5UEni90B_xR3PaPtciLbadwpXeJwnNp0WPy1Wn7gR9ZIv_iwSJxlY1qIBcqtTwBI3h0dv0tZsr2QTyi7xYmJ9x2H-In_Rg7bYpJI_EcesH2w5TIyz2_4QklSEK9uxvhHM5pl0u9eB6qMwJ0qx6Sj0peayKQT7Q4d5Mg7GqXDMX2E0txsGvTmqvjhjH3Scv8e_vs2dFmX8dQmnP_JH4Rf5rzVVkd85NHC04e1v1hpkHNw55QB_lhOUPTNWLpreylHFIFI3FQP0GVKFWqFCz8hBI3lSWflbPCZsvbVvd8P6KxAz0vogEFMSTEM5er5GzBE5iDP-EUijpmShn2Lpw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105543809682493302455\">노노</a>"] },
            { photoReference: "AWCwydgbQ1UZd4PrQ8OpFbgREem5yTT7-kPrDgRAZ9X1HUEq1bT-RXddystLQKWNEuLLSI6sjyymWWr4J82DQ2EkDwCaLwtUod4kFoKq4NQeu6T3N2mPgJ_Q7bXh2sl88LCVFO4EGAecgP55h0b-uI8hXzyGiQpH3PGeuX52rQuG8O_y3oR07nOskNYbO77RZoN5cnBFwDhR4LV1erFbKJ1RH-FAr80aV_Ju0XL9En_uawdG4CgnW4PLyZgmOi_zEUPFlRXB7YQ0KCDzyUEG7M86SrRu5378t3RwZkBssuvBYdlTpdfi-yJidie9BWSzyyJu4grHkEpcabjjsM4caAsYczXEiEdhGlJAIdVTmgrNuEC_zr95qBFbX5upjoEP_bj1AB97G-8pr1mpDRWQmcvmhEIjdtcOYR0CgJ36U074Ln6oc2fI", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108454858021466966288\">Eugine Lee</a>"] },
            { photoReference: "AWCwydj4IiqqYvNIgd9it3-CxHTQP4hc9OT0ZwxEWkAURJoglr_bgh_bTZ3ARceYgtjVEq1Eapogp8hZiZck20ScTiX9MXY4qf8xNZge2Cto9xWWV4KdU6POQF82xc6qUoG_4uLuDTClWWjITHw090mw1FYAz8f2Mp0L_iO6GtZSHToh-aeDNV4l7jF_Jw4VnM4NLs5YcFyoCg1kf-aMxgHq54TFwQgATBTAf-T58p5xf920qX87z_PC2nRVXSlVcVf-xw7RrFB0J5EylfzbSGRAi3cvqsJJhjRFW7HloZdl0ZlhXRkmCr2A7uor4vqyyZT9f9WcySxrqcXXYcT6cQGPLNxXZqklJnVunWS5IwKTq9WROnMNqVAe-UBY74Wp9RMmMYlYnULVq4U3jMQs-dzFSYvqX1qzsi3jdQgNQyxp5bOGv6bc", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112949524595616323290\">SH L</a>"] },
            { photoReference: "AWCwydgSIBRfj2H_w9vBKLvMlWGE6vTtRVkg7fO4pgilofybZi_Z1EH90ahIDkWY0u5g_kuZ2WuZ6fJ9BmrvRm3sq1GSWpGMeDeUMf8q8bRwtE5zqCLXiB2QaaTlhZ097dyUhYWnhFQbvSvPWjyY-IKkRifGe2vw9tt7McWbnneOoizH8R8Pek91Fe_ueuP-nIoNZoxKp-P7m_oXgMjkN7MzPu6d9cukpTq1tt3lxxD6ij1XsxXO2uNmO0CSh6d9E7na57YceJrFKFnNB_nXkTP-vB4rVyp0zZGqrSBho11k_-24X8Z8uMJvmCg30A9CubXEsCPdWojlPtV3q8myvAyFESOAjEQD8Mc33n-whLtRXgx4GyKOsKZXNwPNbG0BsKxjFxJiCi38a6ltT4ACQvtId1g1gQxL6SuQsFsZt7cwI7NKPN1KSzAgZMPv0zRrryfw", width: 698, height: 611, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112762246108407822808\">생생</a>"] }
        ],
        summary: "한국 편의점 느낌의 매장으로 한국인 여행자에게 매우 유용합니다.",
        updatedAt: "2026-08-13",
        highlights: ["한국 편의점과 유사한 구성", "현지 물건 판매"],
        tips: ["한국 편의점 스타일의 상품을 찾는 여행자에게 추천"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오전 3:00; 화요일: 오전 8:00 ~ 오전 3:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7921370365903048544", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%ED%99%80+%EA%B0%95%EB%82%A8%EB%A7%88%ED%8A%B8+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "보홀 빅플러스마트": {
        photos: [],
        placeId: "ChIJD5F6C4mtqzMRwpFhiDK2DjM",
        placePhotos: [
            { photoReference: "AWCwydihZsnN-AqKieuxXbU6x6_34j2Mvq3zh9ut1vfgxgDTqDz8pdvMx21Aw1wuA7CyZLT0L48wWo-nQsRusGOgSySjnHOWjUvW-8sihF7YC4MlkMFW2Wp9vskAIjYIwQfma2zjBbZhU41fsgZBALNkhn4OPYhYQUnzNm_hhgpPy9vzcDI5O_ytgwJmJs7lgWL48AY0nlXSGgQchqLcfkVeNTJ2hGWCghfTil8dzDSyBefOm3lZK8Uv5nJpUbm3M_THlQLNrdlNDSpPyRHCSMFe5KFri4xA4jYXrTx9CKb5YpgAo0NTkecCHvYIO67GT6ekVyx3oN4176LejoXD-qvUh37rLFPgeLcPUcAIUhtb3bAMtKRs2FvzvR--i-yz888vQRby9ii5OH_BBA7C5ohCnK0GyXPsGgWRURY4Xw2pwWg2JA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105111129577516153051\">Jino You</a>"] },
            { photoReference: "AWCwydgik5l31MPd4tlBeVZ8XLOECPg-b5XKSp9wtHhF485sS4ENc6WzmV0oMk4S8uPRXFQwGKmkqMIo_pW_Q7Ewopxn2L2aQ_OvuXXyx3Jccm6sVsUgWXxIq2TvWn06FPDGXHMAsaymXBJXRoZLPe0Sy1saww-NBpveAsAJrq141eysff1EE84HmZs0n9hLSdLCAHwb5mA48ALF_qSg3HABSYFkFFcFzzHqR4qTy_IfPNsU5QORqq2ZzgFSugFGyozL_mlyflGvV0kEVb0QKFWQq12C2lz0c7j-6AjuhO7X_eZ1XSvo0iHm2zFrpU544x4tFmkLQ_jGbXCu_9upZwYrnuJMwaT_lXThn8hZHdQlMwmaltAfBYw6FE4zwIyQjZAaIFxNMLQj8H1ESzfQZSYjn5tXBUg26kI8puvheFt_1vDOZiEp", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100056665459446253287\">DK. KIM</a>"] },
            { photoReference: "AWCwydhcB-2IbMTqVFi7CjOuxi3PxcNynJBCPKSrbuqgOFkVX9mY4SPArGF0zPnXpMFmPLymSdhnOOSKZCykLuUqE54gla3v_JEsnYCyc_PpaVJHO-hp9dA3PNXJYnjX25nl7bfIB81b3CdWCvJJ_YhVwst6qgnIB8WPeasmrHc2pr6AymBUErhw79zoXIkN3Tzj3St2ac-G8r9OFh342L7iwpfyP-ORM-hQOYVczDo2vlP8r9kFlsWuXvC1vRkxou6-Vlx2W3XMd_gRZnYe6ePqii3W6_CLim1wwFuvLFYh2EXEN1Zm1xO3oJ5E4MxA_wahPSq9qiXDM3Vro5pEaRR6ZnOdND8YTQXTiBpsKKT1gw-1j6WBmEaFC2izf_cjqvpy0VoqoWLLfUHHy9IoEjA2cxo59y_ZobHkcoeWY23WWV0", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105111129577516153051\">Jino You</a>"] },
            { photoReference: "AWCwydjEiZGCY7zb7g6r0Am8mHTBxqXKR72f0lVrG5W7ldP6sGuMoYQnJeqMdk85sVIdAHmaXFopHF5MhZjWwcpjToJf-1XlPjeelw6FTCLK2JtwcZ0zrAVY1wZpwlq73K8FxRcKKUi2sbXjtr54B9Q9iROTJv5W5hbggdW83j9sdSnncukVAossQRAyaBniwPIB2K49R8gL9P9xyhJpRAvTnPIh0QrcATMLP56KJcedVtUHN1_e4k7G-NIrG8uC1qqvsQOtY4LQCCJv9QrChxqOKV0qjCvIff4qTVlrzp8ZCpF49n1cTl605B9c4yDzm4rZc33h_53TBdMTYbYxTPKHXZwWmZCB8S-A_AxjJfcrcbALmx71x2cYIuPd2gHW2DksbNPBFWtFKnnMXbN8resV8HDMtxwjwVoXtsPSugyy_TyhkJvE", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100056665459446253287\">DK. KIM</a>"] },
            { photoReference: "AWCwydgcjsRhDYZ8PjxmuCFIOxoMBlbMuGk0HsNmAH5TqBVSY8X8MK3Z9IFy26RXcVbbwNfgLfa3wkmxdYB1OrB2pf2tGGeZAzjn7F7byhbg1zg2Hx1iouAXDON-eD5oq8eJ3SzM7_37_dFbjoKpDuZCLjrr8WLhPLsT0950EPLOewPOz0lKm4i_SpcZ4BcoQX2Ya_t_McT4GUejziaDxQWeLwwjGAo8QY5dSnFaHaItbpg7YGuYHo3oruFxUnGMsh2VJfV5KVIpgejPfmSWZJ0m0gIVEudiAXubnDjuzZA6MGbl-sJPJjfxd2ztIKMHbn90jDS20TpjFc5AOV5V2sroI78ugUZs0133IVv0nvU0pvjthfHP3TE4S3b0io6Mz87sBi8N9zzHRAMrO1U02xxGaxSsm-Uh8cDcqHCkkNm_oL6onW8", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100056665459446253287\">DK. KIM</a>"] }
        ],
        summary: "알로나 비치 근처 몰 내에 위치한 편리한 슈퍼마켓입니다.",
        updatedAt: "2026-08-13",
        highlights: ["알로나 비치 인근 몰 위치", "늦은 시간까지 운영"],
        tips: ["계산대 근처에서 까스활명수 구매 가능"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 11:50; 화요일: 오전 9:00 ~ 오후 11:50",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/bigplusmartcebu/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3679078273760989634", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%ED%99%80+%EB%B9%85%ED%94%8C%EB%9F%AC%EC%8A%A4%EB%A7%88%ED%8A%B8+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "그린코코 보홀": {
        photos: [],
        placeId: "ChIJeVHCMOKtqzMRuXO7zTRIKvE",
        placePhotos: [
            { photoReference: "AWCwydgAyQKh-qqkVc-kPk6-IWvV8cMzjRxm38-mVA77f0VxZPP08ra2K0qmm3XLqIccN85keX3SEZu9oOksHQfV5SzIMzvNm4Qk6Kvo0onT4jY-ZR5FJ_nQQqAqtyoj4U2GtVXyME2RWTCA7853nm_MctwwhMetdpaWcyFksUrKTnAHuyAvfwt1ZyqHhxltPwXBsQAm-RzkYOa99lO14jzBEaaqGCYkbOqnzW1rYXV-re2JWrkuYRaeEAuzXY1gpFr63-t_epX4Et5O7Ka_Q4crYI6fRKcOUHBoumnVCpFX_yleICGdOqtv-Bm_dYAImuQkcVDBQFTVpc24n51yuK0khe602OeTOWDnNO7lqx0PAFWRM5DjQ0NJinyf-ideNkwBGNsiZsyvR_GYxcb3QrNSFZ8DGcRc3UpZ3sQSo12Eauc", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107081378802687374809\">김유진</a>"] },
            { photoReference: "AWCwydiWrgBbFV-BGqs4K17v1o9sdyPqTxVcoovjzgbIMXC-6ECo15NTAmGck4Q6vfMnVX_r7rSCpF87EFkhsiH0pCEwFJH1MKwP9OR6Xi7pAdALY88CcU-kI65-vYpL6RtJzBdz83tj9rtSIYPPSM7P3YiihesgxYumhUE_ZkSnaXCaXY5-gk8F2-GtmM2WKfx6jqywHc4WoxtsnnbsxNTv-3VfcTGJy5VHhFPTS98fadcLtvrW62oghBxPlCD8ftXEvRCP3agdeS7vg8_1kLan3XUedpDuwM6ijmj0uzKnJI9hAVuv9MOmKMbSRtXhguYGSlGnc666TWYiU5ToSMZ5Oxbej2jgxkRxRSIjeXDu0EfotI7f0tsnSBKK9wRrAeZ1c_so1_e5btYGrb7YoNMfEjofMhxlrJv5YyHhkxI66SO4Sv_BrlVTQaqJKcwE4OnP", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111923599803231325009\">Karen Byun</a>"] },
            { photoReference: "AWCwydjvSJr5fzs44aYHsuGYscvWK57Ypwm6qpAgpLg_7I_bJSjyAqny9HLRHEjGQaf6FBDn44SJ_5ceBsEmZNWKHIgZuHtnQQUzRc6p_QUQadeVvPWHy6gfFcHdr-eAk7l8PCAuap0lYSm9TfQmjrk95o6uBIqSLpS8D3n2mqo61itXbT-VLlBxcv3wqIrdBMX7Pw7VI9pxRjM9cRSdaFqkS1izqd7JrqmOPlgdrG8wQ182OmMFQv5WdhnYm7q_SUteD9P7m2Jux07Row6pWfFCyE_BnwrOfcmEj_XlLuMSozlhLU0DGDorbJ8fYgh4bmCj6vrVry61CnTtJqtsd3vIPu9-8Tf949DEFmtJItSTev-Ce5xMyRm-gQZClZd0b_g3IBr4Sre2UGRxbk3aknAbhsilgPYjsdZhC9b6Ow1C0jI6x_NunRRANigwt7nfTtRa", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100865842717821350683\">모래섬</a>"] },
            { photoReference: "AWCwydjgJcu9F1PZYLBabUVoe-68LtJmNnnKcWUlwyg-7aRknp14GPw_wP0F6Nxrq-aj-e2mtgOhFQlNpD9XOrDyZGMIKN4KgKvw40FvOEVeSuETJsF_1J1Hw4V4SOv0sAoriEPhwB2Ibh6wEoFCfYMQrewZJtn4C92WT5rFNiY0cpAoa5ZX0qbag02e7VQMXYQlJL8vWwzzf_KtPWQz_okNZfwO3uUTih5QOWhgb3iQw7EzQikw0Iyz3SeB_UrPLv_tW5PL-gDHERI8FMKqU-FM8rv_l5lSsizz35PP7zfNIBhXcaa9714ONlMHwR5ekfPcw3Q51hWeFkGwW2AOupZAEs0Y6RZQ5zE-QYacXvK9Zw2GUP6FPX3I3ObGESYhn8FbdzNoesEUSI5yZCrV6HNBUggZRWOAz1mgbBKu2LX7xo_k2QQFJznqE2dHtFtU00qM", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107715932941191620995\">Sound Nine</a>"] },
            { photoReference: "AWCwydjhYMKcR6cjnEalMXDsf986cyl2QfmsecBe3SmK1HFDPNfEYw1XVKsK5uV_VH9H8RDZZew7mapqMedBFPDF1lsIYHW-Jr_bv49Ppu3PB3RqFkyHr1fWoNM58dU_5whBuwJBUG6ZpwZOKY7L8o_bx-lxnNR3jm_BjppJdWfKWUOPAgMfdClQvqdMIM7kJzXvkT-xIHEXXtuMq6xESqWT5si3FBF9Die6sO8-7616LiS5CDzT1caqXyzr8uxXxjo8Dd4DjLCqwrosX3IEWVyy8qwlpa7tHEbA8xglLa9xB7xTuk_LbV0bLWLT8_jJMMDZvvPbWkK5-UPyhxP5wY6dIQQPlejZqQg1firshq_e8YGeUec-o7gI6GMnlO3DhRMQIom1bqLXfPaGjAblH4xItvISRU3kmLjCCDI5qyDpcy_SsK7HLtUQhLUnU5tMIgXh", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114388317375857439308\">이아름</a>"] }
        ],
        summary: "높은 평점을 자랑하는 품질 좋은 기념품 전문점입니다.",
        updatedAt: "2026-08-13",
        highlights: ["친절한 직원", "고급스러운 상품 퀄리티", "깔끔한 매장 환경"],
        tips: ["다양한 기념품을 한곳에서 만나보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/bohol_greencoco?igsh=NzFtcTQyaWE4em45&utm_source=qr", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17377781503789593529", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%A6%B0%EC%BD%94%EC%BD%94+%EB%B3%B4%ED%99%80+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "보르로이 수베니어": {
        photos: [],
        placeId: "ChIJ91QQsrStqzMRGSoRAiMsn6M",
        placePhotos: [
            { photoReference: "AWCwydhCli9IZRHj0n9g7nX9LpdjTTXK7lFy3GWGltgnFuoKowP-xz5gaiWt7WJDowUrDaudFBlZXve9yqnJpe8kmwExhiFRDS4IGncx4bL5hlxRsKst3L5AUxQFzchKOj3jj0zv_qluRVdJSv0WvLtCHUhfBjNt7zKPR5lgbx15nZMW-KBy_jMBMufra-uP0ZabEuoUpwQXislGAo9TRwJB5wpbJez2lEfU_Gb2l_3GXylU2ICbghrkiTRIVT5Fz3IXSSnofd3TPMTS41ALNCbFIuyXUMY6hramfU91XeHRlw7OPH8ioZfHYCRhlviVsK_vCkEqgFpq5w8Bxlqg2-Oh1cdL2KTHFEkRhhVf-U3fjbWVQ4WyHj0Cu6ufth19nojGC7sbYyjhauDmxZChRsew0Ta5fI2-ygdXk_esJYAWpuv-vN9LT3L6GA-k9OwpkQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114776403535614585555\">Rizanelle Hernandez</a>"] },
            { photoReference: "AWCwydiama9_zA1EzYXtkXfWO6Y7a8xDlC0nehGZAT2FgpHS9FMuil1Otd3OVWwjCyw3bZpMU-ZTjOZuE2dUNvlszmlZ5ga629i-KI7tlI0mEW3eJk7SEmQr2Eo9vX3CKHE-Hxt36vhYYsZFHKEpQqJE3GeA8n4u3la3n-v2sX6yohF-Dn7dVvbFTWJ92X-Clwz9VQzhnGgoecDOUE4M7Jcrjbfw-YQgkS8ESse90KWoNM6sQCKrscqbLMfd9OIfLl_QvAfO4dGPTqjPqX-DPuNVlMPzMiHumfqTS-uyWfLs8xiZjvRevvRjW7Vrk2ODtJz30ApWlB9WN8mw1TFpAh9GJYp2VjFLrC5Ta-80N8YJupIqBKpbQAo0iTC7hD1f5fq8JDku-33jieN9TO2O6OasJPNZ0M9mBAqq66qbveuVOPXnie6WB5c4YLIQncm3TAgW", width: 3060, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100516897108445216782\">Trisha Dumanat</a>"] },
            { photoReference: "AWCwydgwNkWruQzqyBlzu73HtGS2HrIstpryyDywu9QWclPXRZkxVt4NdPwGje14Rs0KPYIDdMCe79zSO5irCKAPEHUfXTeTC7zbcRM2ilDck84rDLxALaQ1s3FVg-Lnkwt9-SHAruZoOy_tEMtTDK9G_azNZgxB_dkQufpJ3DjRdoYZHDdK2IwL_cnIF8xD0tFFIzLMTHsJVEAdFo2Cneqc7TMvP_9VERZUj8TErdIfztnG84OMJz2qnaIv7DNdAiZrQQsMy5z6QDTMOWluUG-uDr8QcBsBQgks6xVnP_sRQ90ZvjhPwMqWVRDtahBlIjeMlJGOgzJcUkoGntf8B0L--uX0hsK_yrVPQD7xjw1dIY6C6Mr7teGV1-FA-WagjiNSUCtvRmfmrwADNRIEZZkAjMW4oJN7v815a3W9rpAO8K1t6F8zHOb2Nb_lXKM44dPl", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105960801557393726781\">Emma Pezou</a>"] },
            { photoReference: "AWCwydjSalGqypDvnpOYwZX0g_gxq_agC7pixcogVJRaRI527pVsBueakE_IpzsPtsjvfl_oW_Q6tR_BQbeQjzlg5bblmvYtz3-y89m2vXgL85j3Vl8C0B9Ier2Mptv0MOvczsq1M9n343dvkwDYSMp7sp3kiFR6ZtPAe20zE6i2Bu2bzeFq9FzbdAw6VsaPIqc6ICrdy5lSIhaz3UUq7nUoVsiN6MG9TE1n7lVKFQ0hHYuKPwOhbL6JeligcnMCtUfg4PGTq0jt96RGr-Zk_bu9WVgPhTzTsTgnMLfvS2381v5RtUGm7gU29aN4IEZHOgUbtzRng8iBnPenCeVCCBXrbw2k9FF4Y3AhRfCAf6HBkQTroOkALImMc6sJ7bIAWsWnSY2v4IE3WfFo0f3MaMnnmDDqXVCgVRuPHdMQw-J0FpOUqdMkfa5NCdrlU6mC2Q", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114263538576589570369\">Allen Marvin Yutuc</a>"] },
            { photoReference: "AWCwydjyvRCizbYsl_dA2YhM173aDa9bUlCBLm3-FoXMqXXnIgKRcBQOluyMG_simVFUkHn-M53IOuZC370WgBmTDPTSCBhTYOu2HeO5D8wsU_drm529-kj-Fp67sIzv6YEShkvfZm2CqluJu2yoYURvR0rAdYrF9B32yLESPn5CdxrN_5ACF44BciAiCe6YvhGpC-dxLbK3ichkuuf9lcMlixC1lg1cKVkr6m_3bpaqtBf4Hu-kQr5w1vRLzKoA2EpuzAWKeuce56mxdsjbf2Tu5J0ZMwjSn3-QfkaRERXzDY24GxsCXmjtZAP-bLY0OP0nMMUy1vzUQecwPoJE8kF9pjPXS2Q8Tgqqun2AlEkq5oj3ai57mXkJAbOIqEAh-LJynST7vxPHmPS0USXIs1LqAEUi_nkkTKG1It2IZ7bw06FTzuVjH3u0Sve3LFHWBQ", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109621098705002460737\">Kaitlyn</a>"] }
        ],
        summary: "부담 없는 가격의 다양한 기념품을 판매하는 추천 기념품점입니다.",
        updatedAt: "2026-08-13",
        highlights: ["저렴한 가격", "친절한 직원", "높은 고객 만족도"],
        tips: ["선물용 기념품 구매 시 방문을 추천합니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11790190878349404697", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%EB%A5%B4%EB%A1%9C%EC%9D%B4+%EC%88%98%EB%B2%A0%EB%8B%88%EC%96%B4+%EB%B3%B4%ED%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
