import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "신짜오 레스토랑": {
        photos: ["/images/phu-quoc/info/restaurants/xin-chao-restaurant-phu-quoc.png"],
        placeId: "ChIJze_KNYiMpzERLa0Mfzg3-ZE",
        placePhotos: [
            { photoReference: "AWCwydgrb_bfQdnMH47MLwUAlisCF3FpRWjAO8uaXsfV6CJXCxOeyYzYyd-3ioO4gxwgLtr_u5HVEqVYMh13pIe9PY_yruRjLomgAXSBXuaNCIWYMEJuiGRoAZ7rVNQwavcEcsSSSpxSFz5N09bACtmF_xfLNE5xWS3LVA4IpxRF2B2HpQnBMuN5DyXGP9vlWZbllD9jw11lb2C4ag_SRXq20-L-pb1yDv-wSYgx7g8MbQ5fDDkpUM9XZMwwEJOlEvCDJlGnhFseFHpFQBUyNVBnL2TgrMvWh1cHZF2vbmPl7t5eVnlN45Zi0PyoT-srutydjAmmYOiFGe1S8DLZirGrv6hb25GyGT7MK_Jd1G28lHBsIGjovjuZ6Bny8NzLB4DHB7NZcP_NgB3nc7gm7jiaPPkgyFf7RL5TrXvI58ZZVFTYSjgS", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117008943859568522610\">Nhà Hàng Xin Chào Phú Quốc</a>"] },
            { photoReference: "AWCwydiuOgVhi8TcP8yIT_FHCrkbOC_B2tdtjtHPkaX2vhPstGSzyMnS7bU8XhE7OXOROUjQlIVUEw6JO6orFNBmKTjExVoEXdQGdZo8xSkAs24pKn3tXSKQDWnnH07fHslucvlXbDJSlfOX8zbEW5q1bjI1EICZZB04lZ5iN1B-oW3vsdynqfq8jBQ9IBH2w9bT6hoLyx72QJn00-T8dwHMuAnHf9XOgxp-iZ8SYeTZ4C-H5F1_JcqyJSbTpfDO6u1LpFYMrjAKO3T9584nagDAQigL3jsObM2KaMkRUoYIylyRxXXxsmwnQmF9LMfoNNd3UyFhTtm7Yi3lo_0LSBQN-hoYixdBj36wDzdB_PHcOjW9-1E8JJvcvWYEA5ebxRyNxxHLkdcBYcOXlA-_G16-3e1QxvQEeWQifLpMdd4MVRJ4hEZI97vskWFa9I1a0w", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110627971360273615676\">Rittisak .M</a>"] },
            { photoReference: "AWCwydgPJIhzVmN5S2VsV6kZH-FM-_KeD2xb437xG1wJeWwninc95fVW6a4xmEYsI50nliiWCHETZmvOmmkgoicWs5nKI9UrogR5S2KXUz9jrpQHZIhUDtSsdv-w-4YzPLfbwg9gxmqfQmZ8SDGsV_-l1aP9Yy-m6kgTiT6DCCFR797c0QfMxIamzQFO3rYpAlt9_DHQSegfQX19IBZRMkBWPgU2e4qepwAk2ZcKoKE7kF0z08eCaZted52th0mXr_ws-4jZd6A9nvJuBCll8aZa_vNYKjNrAbK9dfdaNCAmB5YjoV9WfTeaFd3n4ND6_nTbP9eSSnxisDGCJiHCw2oL6mRmm8UUEuAF-21eQ5B88x1jXs-Wmx_em20xwW4_RVoaW3Sf65Kdfivw16q9N4RqEiDi-3LTbpYE-vcSaXGT-PdkTjc", width: 720, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117008943859568522610\">Nhà Hàng Xin Chào Phú Quốc</a>"] },
            { photoReference: "AWCwydh3T_C2pD9CKrooHHHbGAiPrc37U8ja2motGoghZTzqhjnTz1GHulcwRkiHfRXZuR3oZ0iD4zUOoBvBjhD1D8CNyKAXzP9PHjhiRy6q_CXnyWPpxtnJUdWrqM8sNsFRinY5mJ8RvcPRRX27MgdGf3HdApbw-AgG93_Fut1E4JntWXjZfi_th8i0vzEGo_0Lf18dEBx-TPJ_MCJvwJvNOaDbMARzhJztQ22rI-DuGqKC0U69FgfCEmt2Esw8v3tXpfMAO1hvp7hGU4CGV3_Ftyj-NhErdtlRj7Iq514mQ0aY1Qlo_VZMimE9mLZWz5zOuNA556eMvhZJczJiOdjB9adG0HCKpyyCWQRomaeg5bc7piomaYHBoLPlHE-WF3PsUnAQjVvAB8iZ_AOcobFmLA38n3fPUXX7hT0UT3cSTTsu4G_FlC-E_k5tkrYfvefA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117538912186124653283\">성한나</a>"] },
            { photoReference: "AWCwydikRVjFWbt7ewoZj7AXhUlyyqaC74e-_2wLxXXTwHBrfppmTcbeLw6GKVdMUyvAAddmBcoV7YbAfDaY9RrmgCU7jk3pxTDdmfiF8bgtZlkQnKfJo30Ipt8z6acSoSK3D3DW6yDUusnc-KTpu1qiwKYXQFTxqjWdqdTd9X2LM3o-9VyOJ9czpOgpVxkcUbXWGlO-itmitfSauIdQWU7HsiVXOu_RY80Yf3Ej1VY8cnSKSR3UmUg5nZK3c0d2-Hiwe7l2JQv-uuVyvqx8lSKl5bFi-IOIL-iIbwdf7tHe--RLPl4m9MgXCRKFc4wMWJTeEPjGEOGOdQFFz-uchN5B0txNEJ00vWKJClkFzQrDMtnQrjn50qTP8tM0pKOYqIzHAFA_ZttaSaDEGnTMi_mttIyRghE-1XOtVCSj_lKnt2BXowfFclj_POwW2nypaTcN", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100702045511641463199\">dat tranhoang</a>"] }
        ],
        summary: "환상적인 선셋과 함께 즐기는 신선한 해산물 요리 전문점",
        updatedAt: "2026-07-15",
        highlights: ["일몰 명소로 유명한 뷰 맛집", "다양한 베트남식 해산물 메뉴"],
        tips: ["노을을 보려면 창가 자리 예약은 필수!"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "석양 해산물·베트남 요리", items: [{ name: "대표 메뉴", price: "₫200,000~600,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/nhahangxinchaophuquoc/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10518499120489737517", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%EC%A7%9C%EC%98%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 홈 피자 푸꾸옥": {
        photos: ["/images/phu-quoc/info/restaurants/the-home-pizza-phu-quoc.jpg"],
        placeId: "ChIJVRCAbGGNpzERkJ7P7jN-dls",
        placePhotos: [
            { photoReference: "AWCwydjVYnZEiQdwNtthG4WPanQlQT6K_oDmYOP1DZk_vXNi3vXsIYmZytXKH7C-wPR-Of73b67_hZxDvHM48hwnSyL8VwlWUycaf9_sYEn5O_ZeWJwUrl3g4hrMzCsLneJ3AL3Dy8MaydTLjhdmLNFCFWqPPOJ5w1dFTUobI4bPx6b3FRWpBd_bQ-vTS-2uI1V0McT9U_l-5W_EAZjg2lrU08Efi283TlAIHOIudIUqlXr2sWsWqVUu9ONoSczdWI9iB-vrZm7bxcj5mzrkU80G_59jLkVSC6_D7SDFfsIZeom5R3ZsufDoM5n-CYgxLQ9_MSmodfqQp04NgFF0WvunEWw84_qSI3EhG222TuOZ3VO3hnJQjfKW0Ef3zp_IfzU-PeNyLj-MBmYKqznozkxSIWx6kHQ4ZczbQetBaMMgrCP4dkPTMuC7rDdRM5J9_CAj", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114003074270742502921\">The Home Pizza Phu Quoc</a>"] },
            { photoReference: "AWCwydja7HOPPv79bCX2q6SuT7iFyrRP5XZLNttRrGWUgQ70OgkgGp-_bTLpGO4wEGsEAw9QC45fWRZCH106Gz1j-6cGKIL4ZhPi2mbR5K4dXtotEtZf3FLbzRpv_QSohueLB06ZrY4GyP7MM93t9447xC46_zYSGPbrZxoAx2IJGxrEW7gXSgvbDA82XhM7-YAVTexn5feHFitlTroAyzxKg-BF1m3zxozD_0wkqRN6haGDsIiQl0BdIofzIteftCgCl95LNlY0dp3yqqDUN_h6x24VUPi4yGy8LK_mDtEsfslHa1ptL2nTiGEABNodJeF0WHHbMnYfzrIKWkyKZIqe7vocoRUM7FggE45mcAHlegn4JU6dVZatNDyyWUj81i0sqRLDWSOTMW4trPt-vNKyqCoV9Apa1mw4_bsRaURAC4YRRbX2", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114003074270742502921\">The Home Pizza Phu Quoc</a>"] },
            { photoReference: "AWCwydhTUGdNaMRiYIDcaqQ931sTcKvx4E69kKz57_Vfz2lzwpzeuOBr3atg3RGq6PURg13C3vXACtRyJdxQIbAtpl_Af1s_UsbYkGKNTfaCWtfM2S2rgcweJPLBqQikY2AaDV7Kw260oIW5XCdw4iYhZ1joYDf-4tJan9Sx7qLYeLaF1eakLEpMLCMkDVixhJ_kpPRgGA-M-L6lLIpXG3-rxdC_rP03OLvvfqi46nCVHBfU3uPJj0ksHo_TAfgdI3VF3H2aZnU3pj5uQ3bpurzhzAlIKvtWxftRywZFuMYqd07fqd1-SqKzBNpEg5j1EzqP46lljc85GLB1jj6wbv9OGxdwr_AG5NdmDuRSiVwAae0GIe9rlfAp9IbnmbYWxgouj4LROflbzUsK4lS6c1sTa1ih8NJLM4TnL2ZigffmXQWDQIGxFMR53EC1RF-IAAsj", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115140796696826703573\">Vitamin K</a>"] },
            { photoReference: "AWCwydgKItI9cUJirKQKESY0UeL-6xNYz-RkT8V5_wqs05GeF90Q7mgLKtA4TgddY7no_tYRYhkNWO3Hq5pTLGEzFrVxVPclPHrV5cvY0CywswFZYM2DotHFbU7HaU6S-whHLChYOWl-ZaBp2_reBlDAOp02BrNUBc8tENmQ9UrikmO978aKw4pDuLsHH0ybiWTerGoaFEeoRknZ_SDIeJ8hynfaHVlEUscnToGFiKZKZBIReYUV_K-GPrmrqNDcPjHF5co8G3iWMOC0HgbxTqPHeZDwYvBNmrKZPp_MzVtAjwQtoMQa5MmUeqVrZ4Xa52xKQrKhprkWtfkSrHgvK1w2YwDt1O_awPu-Zv1vKTebIrErNlCQDB2IBJugAeVwSGhT4nKRlliFrTi1VZDH78aVhXklOgqn6bzMWo9D_hQEyqXBcH2y9Pa7z00YeE3ijVJg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114003074270742502921\">The Home Pizza Phu Quoc</a>"] },
            { photoReference: "AWCwydgObtPJgGvK_itnAbYXcb7dJz8qFrjTEsDLJ2x3fW8BBQ0WvmdUB0ULCawiCSumoIH8IX0NOMCeZMEFMoL3mJuCVXzO8AyMBe5he5jo7McelnPUDtigYz-ZVeQbSuHLKV4RKYwMV7e6QQGUQNy5Sc9DKcnkdWmCbCaFs40aDgx8gnGDDxf9SRs8Finz6tOQnK-kuaUb1HURN9UkB0uvscipXJNAe_cVhx9B3N9xLMTYxdzl5hyir7pltqKn2ZcOmPFMIXYSxlpsWh6c4M89QJ7g-8z8XypJ4_7RTltX7S9f_NpmsYqnMdU5NKBdeP9zr0pUU0Yz38EYT6-r_FtGGQhXxUspiPA5p-XdJ9dyIyhoY3QJBgdq7a1d4iXMZv1y1wHE4qZFqmbhey6hVCreWYyOoVPPkEeL8r3T__F60F6xeuLNf3cglPWJwiBW2Aqs", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110070535105955771673\">Home Burger The</a>"] }
        ],
        summary: "푸꾸옥 특산 재료를 활용해 색다른 맛을 선사하는 수제 피자집",
        updatedAt: "2026-07-15",
        highlights: ["현지 식재료로 만든 이색적인 토핑", "쫄깃하고 담백한 도우"],
        tips: ["가족 단위 여행객에게 추천하는 캐주얼한 공간"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "푸꾸옥 특산 재료 피자", items: [{ name: "대표 메뉴", price: "₫200,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://thehomepizza.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6590593866218315408", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%99%88+%ED%94%BC%EC%9E%90+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "분꽈이 끼엔싸이": {
        photos: ["/images/phu-quoc/info/restaurants/bun-quay-kien-xay-phu-quoc.jpg"],
        placeId: "ChIJ8S5uWyyNpzERXDIu4M9pGzI",
        placePhotos: [
            { photoReference: "AWCwydgqLac9DkQ9UvK8KPKOzBdSuyn5mW0QddZxqSJOJ2vYSQ5Vf_0g_zr35WJ76SG4zZAtRVSU6ynEljMiQ5WJ_c3GcsoKXeot6Myo4bEonyiSsDRWJcGvQO5U4wK_zTrOaNzjig3Tstko6wEazSpwVOT7ghCjHwhZ404bqbVHim6GmbY0DofqS58UGdEklbh6NYmtup7AvgqgI5KZiCXiEdf_lDciAgKh4p-LZC80aUFxmTqaHwsUlsgS7_XXkBS_BikpFkLEy6enUDvkF1boG8YrtED1-xXUQhi1O8yr261-DKNzKxLsT5PCtKQZs2p3r23sunM5Qi7fztTzWyEjBNpoofN0Lo8bLN2s5EjWMt6DC7HCIgbsrXw6l7A9-4BdByby2VC5LIqy75vYa-eUVlWArRUod8dwFDRKLNqZSWQ8wVdZCLGntlap1iP1mtoj", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109509403333209164512\">Tung Huynh</a>"] },
            { photoReference: "AWCwydh_DrfdvteuyQUdlUh8abnsjnvL9wUQKhmx3-Whj9okumKX3lqhNBdPxQ-jSliEs9FGqJeGJxWQT0Lt7xABDIbGckHlR2K_0XDXzfU9ekLkn-vHjHNFzWRO7mqiAm45o85BV0uy4XMNuDSSfyWl7WL1Vx7vdUom3ELmOYtpsHNU6lWJhH284Zt4SkLM1qrQ11FqB_u82Ldj0I72wXsQTPFKsZke2PdfLTOPlNgKOcq4_7PxG9EYKXpv3jho195NX-KNcO6fktI7lBbAn1PZRLQXiEG31VPqPNaOX8vbQuct_u1pVKSz3Z-hYtmuUvfywseMcU1J7Oor2HG-W_--rrUu776J5vaJV7lPwW_4rLGX2qdSgl96Er-NdH3tGVnCXP0xsDvtdIUgYqhfU6K50meUX6m4I8o4OeDR4ova5OzU6IyL", width: 719, height: 404, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108327943563875706397\">Bún quậy KIẾN - XÂY</a>"] },
            { photoReference: "AWCwydg__qJgjnyCoArg6LP08rqp-KlRDTctIgJPMIdPwiOxOQYDq7Q1IY51r2R_TvZvmLqXfj4kU_Tf5Avpzenm-Ct3hq37fvDDPAUf0ieqFITMGqNUZzv8PyYDcAdLpl1STpPs7x3wUL15ImdW1MuRe6GVImRSdq2D2hqa5YuS_aKKt1ri3QQfWnyY8rSHcBU5afIbxKQl1wzYqrrza2PDcAnMKuXa7Mfo5h7tnkzBa9endIxcn8oUMHKeKlvjDeEjGpkM0M2ADNZeZlAPNi2331REsWHQmdvOqStmRTncjZe9RFJz-kMe640O2EQ7KSAXUADihpG8p7ig4b6JF8tjEjKtHhH9xP_cjmpFrrnTwnOhBx2mLQSQ84bdsPaDyFOeEA8I9BJBAREds-kR65JHJImdtrY2UBLI6RqWPxFYjQJsDpHNYwK--Wn5-4gXYOq8", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103548278884733664210\">Khổng Trung Kiên</a>"] },
            { photoReference: "AWCwydh2mZvo7Mesvvs_vJSLN3Yi3LE_cYile6S6eZSCjEHe2k0wX21Zxt9GRQacusQg88P4Fhc9tuFY_jpHtxBPAvp_RvRwjjxIdTgl7h7KhczaeS1NUKUlMxpq7BED7RO1LcZBKCkZYVS5NFE9abzkMTRgSCcJHbGd-JKmGfh1jL8JFnaWNmL70xo_GoUO3hFGb6CjvPY5Quniz7us4WDAm0DGHczmz5vMqBK8LTK_mYz3BKu94DoqLryKbM0s0juR69BNrf_Dxot18BBkmurFB5b6gXf6UaBkSK_cunC4plcRjVNAEq6mQ5G0hkWspu55Up2miO00cQ2t1qbp2rrca_4QwCp76hLP4bnyisZEf83tg8VLCbu-tGaK-dDiP8SNavuhbfA57KALNSvGRo64LtPetppUdfDIWv1ZHJ-dg8qdM9ic3sL3HITsnvF5SA", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116745413457526449792\">Dr. Wittayatorn Tokeaw</a>"] },
            { photoReference: "AWCwydhrx52OnAEWJYHBhDTLFnMH5JRezX0cfrJnXmVt_k1q-NlJCBidWEmteCrOnNlcAvHRJ_Jy1uGzIk5VdzhsN0sqx5NUmJFMfbqAed0Aw6GwHfsIV_KKvZVVwEW496ddrs5GmY9h3-RG2O_c0EtrbnotYMVRDhJIlXptsDnvorbfp02BbyFTjb2YihUc_AP3ErW-7IXWhrN06W7ahQ2Svxs7cKxGY-j61tYwWudb-vIWga9t1fNsiqF1vGqVgY4FJOrduKmhT3T53iDT_Bn8lFDmTHiAO7caXgckDGtzw6USRgP50vrGeEHbL77aDBw1rPE7rZj1ExAzIMqfDF0lI7ZJA_1PY-AsbrGCpT1LSitePQLLjUATj3FBOlsujxPGfTWUFFF5nUFTgjgtfVYpG-FtFrq8rr-iTCGw1y3TdJ-xdL6UcLr0T4pk8JYoOQ", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103548278884733664210\">Khổng Trung Kiên</a>"] }
        ],
        summary: "직접 소스를 만들어 먹는 재미가 있는 푸꾸옥 로컬 국수 맛집",
        updatedAt: "2026-07-15",
        highlights: ["푸꾸옥 대표 음식 분꽈이", "신선하고 탱글탱글한 해산물"],
        tips: ["나만의 커스텀 소스를 만드는 재미를 놓치지 마세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "분꽈이·해산물 국수", items: [{ name: "대표 메뉴", price: "₫60,000~150,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 10:00; 화요일: 오전 6:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=61585595857088", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14804018114391354955", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%84%EA%BD%88%EC%9D%B4+%EB%81%BC%EC%97%94%EC%8B%B8%EC%9D%B4+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크랩 하우스 푸꾸옥": {
        photos: ["/images/phu-quoc/info/restaurants/crab-house-phu-quoc.jpg"],
        placeId: "ChIJf6ykc4iMpzER-X7O0fSCJSs",
        placePhotos: [
            { photoReference: "AWCwydh31-3555Swm05262M0K8PihjNFKpk-XNATdz1TRFGRZ0HOVy5g3QLCQqGoF-aT2KmMa_5__U3roNIGejdJx-y5J2NpvT6hVZk3cD7A_2zJ7ZIwUU0zn3AZX0lM7SuCEawATk-h-6UwK1aM9aitRdffyswdoDI6qZ4VSudFCsMkNnlavvqZ_JXKCnrJZSU-bCjBBEExBsyDlhmAKE3MlPKgrT61ZdOYbsitstueTUz8h8jGy-bQYHogYaGzYxXMfwgZltwFDcqUhLvWU_nL0QPpNO5Seph0lklqwamGoTZgvxTllb9wZlE52Lr1g46rtDhZGorFbI2AewYtcaoOzvWwg9ZdD74fl57RNm7GCpEW0Aht0popSMBTLImiWnCJx55uromiJXvSqSU65arrsPdVwriQahs15wowfGLJKqEuOQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112231413065702408209\">Chaniya M</a>"] },
            { photoReference: "AWCwydhSHd_ruwpcU9cxCxwpQqKbNFros8JQfMh0w6A7UTJKH0yE2abkudWaiVA-gtItsNb4t_sf05Msvw-zVo65WDKfRiHPDy6nIc_eBE4P_F3k_q5WcgzXdDgLHnWgM0t3UKTpDcwfleg_qUR7BO7RQG1Q2Y33BNJPv6SVyLOWA5etMgIbSTpCtmlJjg48tGmdVgjvDug73fv1Ke_Y4BP85N3plu2vaBEnDdCMS0QDkk1OzgSUZWH66xpWg4RL87fsFdmGDweaLtyxg6nChMwlwhEITfSAqxD-0uoQKrgCczBV1yl_Cl8HnXq2nBBoQTUPRe_c8A2UElItH75Hl9zyF9R6Ms_v0vxSLtTojSDH7egXfXnwc3iXg6INEM-1GijmbrIqCTu0EhOafKmtC9gOZrqbwuitA_IQUQfbHxbyKcpvDboJFMVcu1srlc-eyjZA", width: 1440, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113233418041249375340\">Si’s Crab House</a>"] },
            { photoReference: "AWCwydipiDKiVoRF9A3hGl3-lkYZovQYJeS2JonoIGy9FobcdN43n5PCGD5QW-Tx-J676_UC_jLTFeKz5iuhgQsxfJtIYCUT-LLixqzqxlTgV9dZ53PIvu4KqyvPv5o1ovQZtzy1kaz7sXgo_Tl3c4acROb561ReODxiasJIjzu96Dc7SXx5aGUOAyMmZkjnTKDYMQ6AntGswIgy4rrMvurYpJNTGH4yLbxVFLXX7o_SJ2Lrxgw3xtFL7HFqP483sxesgiM2VCR8hZLyCtWpZ4MQgKLvWgviOa6lUd-ySJn4N_LKz9AH3k9Q2k7E-AFHP3HjsswSAlNhJQ7Dzap8flx5tzq3f3WpQrgmUmXygQvsFfT4rOi8aT--nKeRSyHDt88-UiZ2VQvKk9ZFY4F3Ak64MY-y2sPAU6hdjfdPiIqpn0VtL4Ct0Q7Au9T0qLfHa0kw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115646237915821118469\">官絲羽</a>"] },
            { photoReference: "AWCwydiuO_2V9U7EVftfyTJ_GuXioxFbow7lcbRsV6GckVLt008NKTUZ8qEEr-_8ERe_uuzp_TAdqxhN9oOcYi-sjK9SuV5Bh9lchmK4EPMNTY_FyjYS9zmudkMv6hs6YtWVmRlH-mY3Zx4vwHeSFuB2j-rqsJDKWC753qsd7anYEpYoPtdxqfdvC8DIButSBYXMU51C6TJqIwHoVi9ZteUnFcvXxfXWAuggUQ9kZcaDX2lqNtBtl9sXX_crwlS29u-cKfPD8iGGdJUwLmlAod3flE6EZYhDWORjuSXqIaHkymjChYZzbsQEpQv1pWXIthCl4U_AHQTCQksjgVrZsdL5Z-MlcKQCgXNAbIR2DwRvfSQ1hHNA-2KJNkWqrMPbat8sM56BxbFgh11k33o3gncIJg2XKYLbXL6noQ5UN7dvVhl87ZqZYrOBQpE_ZZmJDIl5", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112539606613604677249\">Steve Nguyen</a>"] },
            { photoReference: "AWCwydi4R9oZH-VfQKeFSaC7pCks9Vh6vnKNCZa_A7wlPdygSJFouJlrlGLaUVIOywH-0XnPnG9qGdJU_WXy_TyJKsnVY3AsT2HhVinaHt9cEYb0DiAFiyfXPJUQA0dkd3WRMNU_7v7UCtyANsrNMj8E_psJCNFVTeccDdBAK_nWwOvlZ956PSLlWsUgNgPJi3-SW8o6H5DAx0Uf-8iDyEOHjZiFAvwcKcmugDY_k-AsTdAtkOg0rnV7NoUUECwZFrMWfpotCS3tYsWHggNRurTA8QNXNv-kjSH5fpTbPUyjt0EgZF2MiUONhdUl-z4GpuPOiirYq-SEB9QPtHrK7ykhcFetPD1RFJwOpPWrkTj06nkfXhrahXJa4_OZVxOxg7yQ6UfAHiQDc2FDAv8yKsLPXncH6RHiOR1xTYLhj93uRfcLcpYfadEqdQkcCE2_KX_2", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115398740867594850643\">阿凱</a>"] }
        ],
        summary: "신선한 게와 새우가 가득 담긴 풍성한 해산물 플래터를 즐길 수 있는 곳.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 종류의 크랩과 새우를 한 번에 맛보는 플래터", "푸짐한 양의 해산물 요리"],
        tips: ["여러 명이 방문해 플래터를 주문하면 더욱 풍성하게 즐길 수 있어요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "크랩·새우·해산물 플래터", items: [{ name: "대표 메뉴", price: "₫300,000~900,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sinhaghephuquoc.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3109035105772797689", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%9E%A9+%ED%95%98%EC%9A%B0%EC%8A%A4+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라코이 레스토랑": {
        photos: ["/images/phu-quoc/info/restaurants/ra-khoi-restaurant-phu-quoc.jpg"],
        placeId: "ChIJBywCiMCNpzERjAsQ8TiP0hU",
        placePhotos: [
            { photoReference: "AWCwydhr5ZGWPGpVeWGinemLWHdAfEItlqph_Zcgv59kAFEJuOFbstUKrQxCL4bvPTN3KFJsE7a3Sed3ooyle1yWYiwjpWDwmsffeQbHbma8XAel8PScJJ5DdWsT-jYxRzeP3RwJfGROpDyT6Z3h5osQjUFAPquQED5fgSwDrYS-oekICXZxUAtjyuhaCqao0aTUwvtl9E77sKt8R8QB-o-1L8xVO001eKJybxA1fLP0tO51KqzW0hmSaEDEWSL5Yeea1lwF_wpawVO81YMQfaUj6X3pKseiUMwXv4W5MHyT07uh4r-50T954nad0ntGbbFTlfEOhtwTxaNq_JgLEFDWAWnfXmkVCzNODpMKwhQufhFFur7Gwe386Mr-Vfh_47RtZhRmeg3i_7_l2ZVeJqJrvlOW1TT6MfbCJFF5p0Vz9hG0sJIL", width: 3468, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106345581890393579202\">Nhà hàng Ra Khơi</a>"] },
            { photoReference: "AWCwydhH5lSTpkCTga3qrgbrgLLVolVBP2_lHbk57fwuydey568CYUtXEzEfAFOGwbukWKAzxnYabWiHk0mlBje2-6JavwsWDxBsF5JaOcjZ3XPKgNO3PpSBBoibKP3s-3CDZHik2aYPg4SkEcU1mqt5gAGRvgDn0aXmO3_s6_hwbX_Bp0EyZ06qxndTmJxqchxGWI1pnP3vDKXYZlDiBMYgjUfYDwRrijHtg1NxByZpN6SNJJy54gI8rJfXYR_hFP_rWyyMOllv2VN9dzw89QLfyQ8Wp-0C2rENNFrGRv0K5LHfkycbX5xgOZQPd7p3Fu01_PIjBNqY3fJYJmBvkV2zKGkwk3qFM_fIO9h_C-Szao8d_zJxrSOyFJRrGOZt12xHEFWD2GyXyCobJJthttgdxxtv0iBUp5_S5VGMzMYgXhHRXuuOhgkTYZn4Xschug0o", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110992062900561750004\">Nắng Sáng</a>"] },
            { photoReference: "AWCwydhiHtY_ykg-rjmYMyvuBze3UTzRYpcv6lmp_874e4ZYsYecwMzZF_VOlUCR6ml_iYYIRSdle1iIivlKI0U6vjKjbHTK8PCYW81pJwT1DZD_6HC2B8n0T8w4IFOBb2QpPJfYwMBmja1TuouZ0eVCErRVJaTnOly-oTYoPloLUT52HU-rEhZbMvqHknR08vk2ZjhLJz9fanfYob4DK6xRSL_IDiFbsPHVtU2Ewcorb7pVaboYn4O6K2v6puzYNw9nZRhmNFeKVxBuFkLGylbByL5CsrzQeFMLdeFntH0AULZ2zTJ2c0IEpSRQHI1QZheQICtWrdagLqn7z_cJNLwpJaYgwD9ftnB99Vp6vEIkOHrer7oTd3SW8fqwnALIqQ07ha-Lv-mWcAfFVl8LI18yjXqVadcd9Lp0GW1kT7OJ2A4", width: 1080, height: 2400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106345581890393579202\">Nhà hàng Ra Khơi</a>"] },
            { photoReference: "AWCwydiPkIOlfVneXxyHywzfAvE4DJeqCQNjQddfTLqKgbCR12s7Ax3rBnZ2gkfEipOBQVgVlc-gr_S0lBoY1JRcwC5Vr6pjSMRvCetKXxZk9oRU6Ye8zq5rBWCJCG-FtfK1sUEOenuRgp4r0Fw4VRJ6LHmc3i6WlIsceMEPhG7ct63r5bAfp5tKWTJfp57jK4nZgIlvAnSDDmY59-brObnn3oL4JWSKrlzer6K1FDhV4WzaTeIxMmvMVWOWa4Ai6y2LJhD7BABRKw_vyhVh9wK7CozxL9XanYSxFmhlhiMLhm0IHV8CQBikioBVNUNG6ddeiLGjq1EbAhGVlDlPrF5aeNwATfnZPqhRm5K81_3ZpoBz2fO-jbv_PQV-50wETUzJ4UOv3LiNb8zlfOczk5wKp60Dyt-Rikz5Qo-c66kf87xLkIvlrSQJW3D6yi2JBdtY", width: 4032, height: 1860, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113543275335576257939\">Tran Duc Dung</a>"] },
            { photoReference: "AWCwydgkfZFqm4rDH1XqQAEeroUN0vaNCuhRA0OwO82PDwcU3Od6_n1Q8KrSDwh5WGaYhjF2hqQMnwGfnRKkO8b2iU7rwyOeq97Bw5IIwTC4-sXvIFDzJzjpU3hqkrR023s0JV_ZkbWyWos6yPXH6OyUhgdxfec6EYDYF0xUPwELpz2TUEAs52-J4lusvInWUoptgFd_5wKcDBGhXff3EDDHclsR8CsoRhyF39eJ0bABWk9ergJbXgHur2RIPj5C_O0jNjXGVU2Fkhm9Q7k3eGakkMjzkXtcjS3s2wL846wFm2CiHeTGY4lYCU63Tv3p-_yD4QFk2hHFOLnQ8Ic4rD367iFUGD-zuSp21nWGh6e824v66wtjI0DsJPVFITF70kYC8q1WoGCP81OUSihHpops1r9RVgNsBpqgyzsU-hFGKQv7FANaTQu8KO0jAbb02A", width: 4032, height: 1860, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113543275335576257939\">Tran Duc Dung</a>"] }
        ],
        summary: "현지 느낌 물씬 나는 신선한 해산물 볶음과 찜 요리를 맛볼 수 있는 식당.",
        updatedAt: "2026-07-15",
        highlights: ["로컬 스타일의 해산물 볶음", "담백하고 깔끔한 해산물 찜"],
        tips: ["현지 분위기를 느끼며 가성비 좋게 해산물을 즐기기에 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로컬 해산물 볶음·찜", items: [{ name: "대표 메뉴", price: "₫200,000~700,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1572476694631025548", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%BD%94%EC%9D%B4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "옥녹꽌": {
        photos: ["/images/phu-quoc/info/restaurants/oc-noc-quan-phu-quoc.jpg"],
        placeId: "ChIJM1ykh4eMpzER6x-ImEv9Mfs",
        placePhotos: [
            { photoReference: "AWCwydjrho1INkKQg0__Irr4ALfUxQBTyj2BehQd27MRbP9vUeTzZvp6wjWusoWKgX_ZQpPlL9JZqTuca8nWXkFf_vXkGzNfH2QRpKaDTRjuBvpIHIsdh4_8if37MnwAstu8-d6qy5DV7YlUDihxg1XHVHJqS9pFz84QPve8XMV2EC-q3i-pYXd5EIGleEpxZ45dnoejYmLEyZsBh4BJrWxY72VtWcH9V3d1YwUqLxdAWx_JsScGUMWNK9mMXP1VlwvvpvvqoAA5K0d4lg5_Jvgt5eITnGnr_NlvqgijMsbZo8L0XzI81h6hzbmOBWU-O8QLpPJnc25LMhrg1cnO_QAE2E8LT9x2L1BvwcyvwXmkXF3vO9IRRTDwa48KIRSh6hQtkxUk8B7sYP7eCQFkd79OAWYUWiudfs1QrxVbG7tM0x7UCw", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108030588981785228885\">KY Leng</a>"] },
            { photoReference: "AWCwydh0vXezTHY6ro7Zse6uvnWHc0RA1ke-5RIvFCOzUzideX9oquienPtD-KmJwf7vkoN4tRlt5MN8CiKbrIwwOpDTx8pOm4fB4FrlT4vcfkQi9W4zw4neb3lAuMqOXLPXv38cDzEpw-Vp24TB63EV1nRZ1B5quoD5N23oawbMtm2jz5-LwhOUavc2gXIEWfINAVNEXIcy5tWAg-l8khJQbpodZksvcxT8u63liJaPYbftvG-D4DaXrQLzpUQ7EmxG5fjWnPm_dcef5IJyZfwVCRd855dJlB-lcJAgVuHJe4vSF3YEKELt3jOdfkc-mbzTk1WcbuEamUbmt__Lc48qCJjMWqHsMersc8r_eiDr8QG8SV9R6QWdDsGKAaWTA2dZgPSTDeiPpFg2lPtEW4_RSrPDckDQN6IRzSXjMvYmoIHzyzA", width: 4160, height: 2080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115057539944852022070\">현요한</a>"] },
            { photoReference: "AWCwydgCNQvmgWoRygga8BgmHmjM11sGIuMmooWjvY45GoJyzrr-4iLOFXkL-9vAV28Yv2jgzyPZrEiNbYhDqF0L9AcI8MdhrmLTg46VtgvTLHP-D2mIxdarrAdN0HjbZaRTT_yh-qbtT-F75eVFuliwE4vGzztRe-MLD0vyPmg3_DuFgO58hWTGc4n9YIbaqJJ4HHgRAX28r4gVj1TKQ2OUGpK2tO1GTvOaTwX2Ey6o34VXMGI3WG-SXvN1pkzJB48poVMV7BmMr3gbi3IR4kTzYsaTsXl0hXPz680rpEnqiuxlPyku8R6vyj1NHsvocQhSHf5aozk2OipDyQeQ9uPWmCkjHon0yjAuTyOr2JhqKNAAf4xr98r36IOy2F7z-nwC3WhPK1pEsFlfXlyVpFet3B6dTBA3fFQPNm3XFIQrt6HJcQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114460253851477025978\">Iwan H</a>"] },
            { photoReference: "AWCwydgKlbXLZiTvHZu6Y5VtoWbh7bGH-zb_IH4g41T-e7Rechq7IA2SLHZaxijdzDEzoqSk_DFasaT8PKdaAg3M4G3uyCBBP82Sb-eWkedR3rhJLvEVUS4LvUb15ncxliS6c-ytD__6FaXG5t7ytWFLQLmpLdjZ_AGzffK_75GhAH14gSsnruHaUbqLA-qQ6T1JBz9OBbA8Jv2Ic5M9W0gZTjCLcKqPmAcc-bBITi4eVvFAxYZZconxLocg_x5zOPQs0Vs08b6z9z9QpDpPccPHbWX-vms0txZUnnJ6VlI3nBEz_44YFZ4bkHmSJ8qL8IUgF2eAlCJabBYmYkBrDMmHHnMOMUfKGZWcFYLjQMW-wYzB0oUXe5CopTIuHJe04cuWsOcXsXQbXA2OvTR34nELBhsD1HOryER7qB7LxRJY79RTidw", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105820036345922767208\">Xanyar Kamangar</a>"] },
            { photoReference: "AWCwydiRv4viiXVUHMVnd-0he0vQ5sowa8MuP8suEWowvXgwUHz1Cu77Y1P4oLPEWJzxWyS5dAieVdnrgbchR-1nhdZXMpdjIP7B_bjGhZoYt9zYYbyOCwysB-6l0pEj09WpCgu1U_-t6o2_B1bqACt86-ubkxzax1_Wx69XAGA4OCnuRW_XDVWTRwwAdpK3gzZrJNCRSgRh_5aSJ2ZvBz26GxGKhoy9XaNmXUxlOLmqJ89nAIhBvnJkCxHr9Tw0BgBya7M-9XH_P8NtAIktGfbek0lw5iqwH8TiteAeZczGRcIhV5RhUogVCerKTESXZ-4C7ds9naWP5tauZJ_WODGJZ04xhEdKeNNeP1k8knN3H4cbZmmT9idXbuj712HuojzxX8Lcr5bde6jkQv2caGiYGUZx2rOnUncD49wxEgfvk-wQoQ", width: 4128, height: 3096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105360394860211146576\">しましま</a>"] }
        ],
        summary: "다양한 종류의 조개와 달팽이 요리를 전문으로 하는 평점 높은 맛집.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 식감의 조개 및 달팽이 요리", "현지인들에게도 사랑받는 검증된 맛"],
        tips: ["평점이 매우 높으니 꼭 방문해 보시길 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "조개·달팽이 요리", items: [{ name: "대표 메뉴", price: "₫150,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00 ~ 오전 3:00; 화요일: 오후 4:00 ~ 오전 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14968547652963341540", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A5%EB%85%B9%EA%BD%8C+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사이거니즈 이터리": {
        photos: ["/images/phu-quoc/info/restaurants/saigonese-eatery-phu-quoc.jpg"],
        placeId: "ChIJXWMScYiMpzERFW5SXq8DfXs",
        placePhotos: [
            { photoReference: "AWCwydi5O1YNTi4j2ZryaFvF51ag61Ge4WnGWOcpBv82LN-aPO5fYBgEIJk5uiIwub5ZeYb4BgkMKAJrZDkeKptkGb7IQvG05J73ayu1-8WTb6_UKGl3ZRYzn-TnUnm0mBIGDDB8YulisnQ9nEsl8jgCA_mCZLGtNEZfhYxVGZTkX2K8VkVutrs81nH89QDGBDccikGcR8sAbauqXUOdD9vg0WtH68OVXp_pzkGSVW974sn5Xvqgka3xBWctnyEngtM7rrZCV4BqTrxMxJLWXPojsm2SrUg4vq3EkYQbg29m4a54OTLMqRH2HvwRPvDSOsYmRARf_P5f2H30uPGQh_cfhYctk2lUjAODNLU_5C6nT3gD__otk2xRBdadO0p6kck64GwJzu7aoJEJzZL4EgEtpKLcT6Br0lPPqKHuGm9XSA", width: 1142, height: 874, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110089260960568100999\">Saigonese Eatery</a>"] },
            { photoReference: "AWCwydiE0rnvTbWTPfqo5L4UQL7vdsiKJap5ApLcfojQGorrJO3JGPbeDoXWUuk3GiL3FhfKAT-Jw9Cw01wEnUwlmxqetanM7llyh5BwIi5hFOIrEQGoDK3S8IwoEbyidYjgtiHpi2urfbSPsr1D8sRp2sKSlDUHATg41DhsG1CXr7iHwdvJsaFwKVzqNyM3LddYBlBA04H2qRxi3uskcVrF1onfL2cX14mAzclucbVbDtKEMxWAawIakbU5BdLW085OJL68UzdXlK58IcEOU_JsP3ivNTQXbq7BTvIIoUy_SI8HJ3pH0XGvd-5bMm2xeAfFGUVSuJHI46yct3ygbwMXcXhFNu4v5-NgqaD9U-nAKpDRy-5xLcRqGfUAxgrBQ3gTQ_JOaMzh8KtIXNRmnWloxwMIRGguT6-m3603gdTpXlQHPWNZC1zXoIQO5Jv7Q47C", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115110366733092218254\">Minh Thu Le</a>"] },
            { photoReference: "AWCwydhnycyPbr3RP_oKLdhQm1i0Dvv9OfvZwng9iratQtEbMoXfRUp5ZeywIi-elDdQJk7dwC7HNnoThBiYaEwMqhA3wavqe_h0QhZlhPedW0pzk2v-mm9A6ZulqWl_-MsurIthnHZR1rfcpAr0Lpa10TZU3fC5ttXLKFZyc7dWo1q3NgwQaPQC7-b9QXc2fjd6mtJDdSkktS62jlkCl2xUmudEG8BcDmhP_a_b_6R2QXEKGQGe8oArxxuieBIIx9PpwIRoeuLhxub22HYk72IsQJsdwYbmgOqUqlGepn5yNGsdU7BZTBcXnEkQjmlvDHiV-jg4Zj39F_sDprJ5gWvjzKlKS5Brds5k4AHoovHbNlWyxOV23fAegRb3610i3v9DWIwsHi0F3pC_61H_Hx9bfL-UnpIl6cgi8LgOOdEL-Qwi29WEGasxk1HwnccnkkXv", width: 1535, height: 1024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110089260960568100999\">Saigonese Eatery</a>"] },
            { photoReference: "AWCwydi9AxK7P_cMvq0VPKXu_v3hliXJlVjvyJ5iLP80qR1ebTQ3FAGm8D1HLlbav0EcPu9HEiicegNk40PNWHHCI9S5hfc4DrJ6q4QbNXVCC7dYP-tbVcwprEQbs98xPEgosMSXAMpCswOhEILG0JnuJOMlomrkXxS-kTTui7gGeYdsk4a77VybGwRAIPcvPkRrtl4hu4sr72CB36X5YU5qqPmVe79CTkS1VN3yI27qRXlVOVg0_3lTC1J9qSfkVvDmfg_wqmytk5YM9PVW9FQyuVn7oDCVxfK5RkZUq3nL0TvT-MUbvaZ5qYHh68FkBlfxRGS1f8SyPoz3rM5ULs5qoO0NIrbAfP4IwQCvYEMeILWzJaDlsdY-I4ILks9s4IiudeikQrWv6DkwaJLtrA7Nm7-bWtev9ADYzDp9cb5_aC9kyxHvYvbz-ZtyZ-jGJyLv", width: 4800, height: 3614, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111172831491179135496\">taromaru yamamotoyama</a>"] },
            { photoReference: "AWCwydj5fZKkZP40xpMINyK-0Paqf8MxohMFFS52DcvE5BNA1KhGPpP_Ri-JkPMBXdxz6MQikqL3-EFR7r67eKROpxC925vGfauVx-vRpRgXHS-hWchs2ESCzWwvfygJwAMT9VVSvd2i5MjnK2cSw1JLQj36rV2daVevkp0HudOKA2Hj3BmdUujDqFekibRV-j4hEuykXJ1emaizYILajBXp2Dw0TwcvHDVezP0CC0YFUn_1IGUL1dXqWPS___NSLy8nEnMAQhailApFpWZxpqpFDSWwzHPTyFvigjgqGufZ5DwOoi_eon4X3leODQotut0FQY5yxMkyjSbWs5p43oAJyWzePiK2D6clsC2rn0zpcyiLbGPDobrERik1wld41MgESotEOxYMmMJjUPAGYwuiyjOG8XGtVF1xB-4k7ZOUcQUdY2MEdeN8vZUOFhksiA", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112564783795296156935\">Cathryn Lim</a>"] }
        ],
        summary: "베트남 로컬 맛을 세련되게 즐기는 감각적인 퓨전 브런치 맛집",
        updatedAt: "2026-07-15",
        highlights: ["베트남 퓨전 요리", "트렌디한 분위기"],
        tips: ["여유로운 오전 브런치를 즐기기에 딱 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "브런치·베트남 퓨전", items: [{ name: "대표 메뉴", price: "₫150,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.saigoneseeatery.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8898272490490588693", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%9D%B4%EA%B1%B0%EB%8B%88%EC%A6%88+%EC%9D%B4%ED%84%B0%EB%A6%AC+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "온 더 록스 망고 베이": {
        photos: ["/images/phu-quoc/info/restaurants/on-the-rocks-phu-quoc-mango-bay.jpg"],
        placeId: "ChIJt4DYpuyLpzERm18CccVtFaM",
        placePhotos: [
            { photoReference: "AWCwydhuJRTf7pdmBNXivj6I-xJSBpSoq_TSm3s0KjPDk3jbN_oLKxHMZKyf0N75PKCjPB71698YE9tllavfipuT-D_q2rdRusqC7m_ABME3t9tCIPp-Fpz6mLd30Yj6GVjrFIww6QuUOEXUCuUo3q0-C2rr2pp32pl-xZtuC-BZBY2pSYf8EMReoxbPDLHAbsTRa-YRMkz1Mnu8_oWC8jBFDF83FgZZ-P0ECYucbGfY2mHu0WLIXv0TdvJxyOVqhQLVyKnDMNFntoTloE3NUmz6e-o_WS08mVbGys1PQ_ysYnQkj79Pjt4oTHeoyao0p9YI8ojBt-Sga3duOiXXVoL22mu2-5AXSCXNByr7pOdSb3KOZJ_Sx5OGmDxHmi7AdTwDIoKD3xLjOrauV0DENL6gAYUzmMTcO15BUAhXQtQbZoyPfg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108654482402452410953\">On The Rock Restaurant</a>"] },
            { photoReference: "AWCwydg-Do4IcVMescyOYRRis26TkOo2qCigIKlEjHKOpCXZQvmEdUqv-tQT6ak_knPk6CnRn8Q_TmGjBextz-gYzH1vfUY_rlsW-bEFEcWQV0BVObx3NaF4drcZpRy_azHSUJwIsJAA3kx8XNZq7MqI8YLg7LTHDNizz_5LIxOQyo5Yunkw0QLhUi8FHYmhpsALQmdK0vbIoD--Y0zEMOu2QODeQiOGOFsax5Q4ut6EtHFZoI9lK3T8jRO2l90p6loin8ruUa3VL2BNKD7JUMBbQBn4OsG3TadaBRhcxw-UOXI7qZBF-aXbJzuqCtJw6_UfQ00tM3_-VoQTQXfDr6I_xhEEaq9ZYMI8KmEWHKOKFxNYDr115QGQJCduft_rhJZTxYS5_un1JX1F5LEDzNedYxhIN_NeRIjZUBkoQqdoFuWKddWl3OV2SW_5uEwP3FPw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113217832597081331035\">Shida Ramli</a>"] },
            { photoReference: "AWCwydjUqa4nJ-N_4g52MfoVWhEBfhCwVr9_T0RooNTe9kZZgruZqtTGmVQOFcPmnHIxtYycRiJN8p6FCd-K3n2110TJ22MFPxIH19Wi_DdYRv3YUPBZWlT0LgCVS5zHHhPxb2hIBKldKjCeYHriLN0m_554r3Pij2RBxs0mX4SQw1kJYe6NitL-tGNO92oZf6d5Ze7Ha_Pv2Qo86zvnF3yP-eLN4EiyBdkDZRJ8O700WX9MBdf525lacPZWcTQhvJna-M1V_SbfKlAlx_aiujxi4hjwPlbXpL45JDTOqrQM_do_3YQ4AmWVsSlqDZZcH7Y63Y9wS9ituK3htRqeAoXhmU7EinTZSjU_0Fa5LHS5-_yw1iwAYiSa6-qx6kuZVzwjqLOd66ovfhNavvkU58iNRK-ZnaFs4FFSDv_SpBqdYzTJlnrR", width: 3504, height: 2336, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108654482402452410953\">On The Rock Restaurant</a>"] },
            { photoReference: "AWCwydjyH2gv6QEtWdt3nV6Ow2XGoZSVJbwm61VMOWqits9ZKpU-pAoWvzobfKT7-MDD3X1GEMbJMPamaayIajXs29H6J2OtAspPgCU9SuVHXxTlZ3vTvjkHi0202oky6Yae2uaf3oxF-ajV_e_cYeZYDRH9PDsduiCc09h7wIhWnvY1RwxgmeYnhwqYPZG7XdRHAIIxJiK_Gq3hJMFeFhIOAssdSqKm0ZYVv5pr0i_9EI5eMnZSInG0ZGkJysSExfHUEClyc3BpuCszf96-bSEV-yQyBaNJ858_XMCbsj9Hchvv_53jtyVgodE_Tfc-3eivEXljI_wErCai1XQ-0A8_foAFHiP9YtbVHv7uHYNTb40aFXIMUp1etSTLkH7He3Gq_dv5-9LPkaXCMjldSW9Q4CwcE0zuWiiDQl9Cj2_D9l4mUZAeTAXwb2Btvwj8na1U", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106602861136649192867\">PHUONG LE</a>"] },
            { photoReference: "AWCwydhgWbXtz1tbJ-SSQsEvjtLf0-mT3eawS4AZW9sG3h81PEJyPNfwCyfjbhRTLTelbYOT4Q17HMmE1x8cmN8ZoQ9bKBsZA1VlkNoeJdKeUpLHzGvJqwcH13Oy52xt90kqQnFsA5JuSe5LLqm__9N7zL_1Z0HAPRydNV3Rr5J_vJOpy8EUx1Mlt2VG9rylql3jBTKM_fnh5-ZDU3x5lr9wf0V5Qym8HaA3wAfNiW-foCw-WKg7hw1bOnXY8HaAIvxGSHdNgn-JKH_0_rNY8QmsyB4WOJk90aP5BML2IAlCKghKWI8PTLVklZc4xBS47Sil-y3ATv3_xZKiDGq-MbE2sqqyA-CycKs8oObTOZ4OTnbKBbo1E8TYYIAIt7EtsGXbumyIVG_JhmNMva35vjZqdorWE6lu1jgQEX1RyPoO9yj-huyx-FW7phRVOhUF-g", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106602861136649192867\">PHUONG LE</a>"] }
        ],
        summary: "파도 소리와 함께 로맨틱한 식사를 즐길 수 있는 오션뷰 레스토랑",
        updatedAt: "2026-07-15",
        highlights: ["환상적인 바다 전망", "낭만적인 디너 분위기"],
        tips: ["일몰 시간에 맞춰 예약하면 인생샷 가능!"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "오션뷰 브런치·디너", items: [{ name: "대표 메뉴", price: "₫300,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mangobayphuquoc.com/en/dining/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11751419497465143195", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A8+%EB%8D%94+%EB%A1%9D%EC%8A%A4+%EB%A7%9D%EA%B3%A0+%EB%B2%A0%EC%9D%B4+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "추온추온 비스트로 앤 스카이바": {
        photos: ["/images/phu-quoc/info/restaurants/chuon-chuon-bistro-sky-bar-phu-quoc.jpg"],
        placeId: "ChIJsY399WOMpzER7lV4UDy_2w0",
        placePhotos: [
            { photoReference: "AWCwydgXGqpstDjN_piXcXxk-Rg5lIUnizcfaTOeMN6jf8veGZPDQcsLvrUXheyVovItzK1B5yDnbX8SGrVJxJ9wxQ2W59-Yms63gYIT0UujQO5CilD_U8Wc41IA3vAs74JkVkbx9ElzJXRm-6E6HUpbQeqv1RLjyOnt4bujNVcsPCEQvlXsg9UJjWPeZpSwfoD9jqt9SYZimoNpwMHQXqf3dfxZpmT8SskFGn2l4sIL423-4TKSZjw-frY_YupSyDcx8NyQVcbugz4p44CRoWjWB-3lP8_1Js42Yb2MxYb8iEnUlXnnD24OsstvCF8pJW2yE0S7sdgi75NnM_jt_jTD285n4O9rKHiOLLfhk-RtkUpQK7rxs2cPhpOpUIhfgQ1hi4_aWMmOkn9tifISknrnzQpw3xs2G8eFhFL9YJvyhKAbpAff08Oc3fsZ3RcrK3Lu", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108041266905622172326\">Chuồn Chuồn Bistro &amp; Bar</a>"] },
            { photoReference: "AWCwydgKFZR-9K7nCS34fsV6L7nBJ-BeRfwUZwEwocfB1buchvPA7PSAJbGXPtuR06E8HwXWn2nHK0P7gSoHsV7NyCR68iaFvzcsMT4J0xQk4KTNvMrNMgoDp48CCe_TleCsnD3FCtNc_KWr_k_rgio13PRfgjcJAz8jaEQHRz5r7f3FToUfNzG0Jw7zCHb_nyqUSBqmxZMuWDlmIpCw5vNG9RzMQQK8g_gr0fFLS_h7gFklQw8_xgS_6jgZKQFQSKG44S--fRynDnBvh-7pAHIDRSBCvrXsckDEd8s0pqGr6EbV7IECqjfVSgSieNp13Ml2fkeCf8djAVE9gqrGlUfuD6a-FnTYUU7lmC3Ldhi9BLko43fB41MJdnPoZxBBwgWTahpIrvlhMsiZz7QXEV_pnyT2R22Id0vRVCStAlX-jZiPCXL9Srg7K2uU2KbtcT9v", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108041266905622172326\">Chuồn Chuồn Bistro &amp; Bar</a>"] },
            { photoReference: "AWCwydhgvFo6Ai3OgDsKm6dSfquphpA7v42_fAaNL-Kx5XKlYE9Hj3dNmwoY6im82r5DJy1rYbulvwkvheTTMALwML7afNj_P_pg2Yyac9o2pVIuKOZDwmygfkP5gqU8h3WxfPY69FH_BBbQiAW2l4fhIDVuxaM1P6-0azDNvDBt30WZLFi0D5QKzpgAXsfOFHLvJwTT5r32vre7YAZ5VQYsU4lIHevKRVgHCw_VA1KVAVtIMRo4eqwQzk31Befxx16pyErnayo6MMg95csTrkPGOerapA1t5BCHhQrj-6pH-TzEoJbZkQ1ETSOQPn9PFwo9CJipMPL7Pg2An163jAnolwrpu-8q6WrHpk1X3qjrRojnntUwOny-89-uRbWIF69NubZG7SBIVNb00f7xW6272CmDREnD-T8Ffw6mpvp2Ao6Jo1L56ryCqDrijhgpYJ8s", width: 4800, height: 3204, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108041266905622172326\">Chuồn Chuồn Bistro &amp; Bar</a>"] },
            { photoReference: "AWCwydgFn6Wy3MHY89SrsUdWeuYkOcXMRXOQs0PaOeXjCMGnzilelm1Nv1TgVvnqzeuzG0NL50NE2bx1PKNk1L9AhQ8qUm6HWsichua0qz4vU0_Jg43NjHIjVeKt9cXg9yCXMsaGq8LcobFY0wwbG-hVvIZgQBa5SefN-7bkayUMIzhzRefenZYUiL_lYu6cMMkJkdL35BFRP819BCohtuE9zPwiMIylsX5tcBiLmNRpmjReWlnembNebQxUssacjhisF_zkscX8Ly-n_8NrKdlzxfgUvgnzxQl9U5KbSPe8DOtVoUZXdqZhmUKmpE-H6ghMWnnxmASBh7HM4zMdiYKGahVSmj-c35rUr5pZB2ipPashYirRE5DnyBZxPdVyErtCw_AYQ6-0_vd2tZh1BsNNH-VcN1vcb719Yw1ipC4OxRtqJuyaShsyaO-1fJs7AaUE", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108172258598981264867\">kt 9511</a>"] },
            { photoReference: "AWCwydgxGArtHoYxAxJ_R6HsqjYOeUF_u2owarLhrun1MzgCOCq0IrqloNgWN4fXj0KHLj61FB9evs4k3hAIyig4Q5X31xVLqpcc-mLxM_nT-3CnylVJLUHW5xD05T2296nw31-SZoDgFujX1Uue3YcGYsikCjKKXV4FOlf_nIv9dveaE0u5W82kGN27rwhI3FshNC_RapTSjZrfP4zIkX7m5OfFbAeqW4b-15xa0bagAwNfWDlCCoupPLw-Lr5Q6cHAGP9j3kTMh8jJJZTszgeiTEJEqFwmiOQF_pw-ipV-x3OBUbtC-ttjbtUL9i-BBwZVDvKHpghSKGOVk-sXXpBJG7Z9f2hA_b52mBUnC-s0_nhyIR2C-46edFmIwonQ647L57_BPE1dazluHtzkoxxEZp4glBUYV0z_to3cok5QCM1z03qZFrS63tEJcJA3Re2I", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112094844667564611494\">SK Park</a>"] }
        ],
        summary: "푸꾸옥 전경을 한눈에 담는 탁 트인 파노라마 뷰 스카이 바",
        updatedAt: "2026-07-15",
        highlights: ["멋진 시티뷰", "시원한 칵테일과 브런치"],
        tips: ["해 질 녘 노을 맛집으로 강력 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "전망 브런치·칵테일", items: [{ name: "대표 메뉴", price: "₫200,000~600,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 11:00; 화요일: 오전 7:30 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://chuonchuonbistrobar.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=998602008161703406", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B6%94%EC%98%A8%EC%B6%94%EC%98%A8+%EB%B9%84%EC%8A%A4%ED%8A%B8%EB%A1%9C+%EC%95%A4+%EC%8A%A4%EC%B9%B4%EC%9D%B4%EB%B0%94+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "붑 레스토랑": {
        photos: ["/images/phu-quoc/info/restaurants/bup-restaurant-phu-quoc.jpg"],
        placeId: "ChIJyV8yzWKMpzERWwrjNYA3xlE",
        placePhotos: [
            { photoReference: "AWCwydhZTC_Dz_fL00S07TeVBN7ahq0V5xN7dna4mfb5EkXsn5Xvk4-IKNgEBaoDh5iy28K06T7RxdUuf7t_3PEsbkFnjkY09-yarZ8u5wPpQMxgxkQEKpnR5MkOcufp19gAM9zzdPyrEji5kkqKw5qx0xljqvi3nPAhY9R7HHuSjm3m3Qxuj6ViG3bacNpCWfbR17bdwlFe23JdPlzI8iu_WdBd4qA8ioAK4fEq5UHiA7YLs1zvF0s9KK1NJ0xZLgeipHa84fIR7clPWfOv6aYxU2Njex_woVWWTfLw2aSzAZY1wOZW15Hmnhzqprncrpf-qIUpTEiYLlgi62wnExZML40G6YlNPscL3QCkc403x_JqkR6zkBu3dCalf_lEXdFNkKKZaHh760x3Vplkt0JCKaZLUSUUcGwqi0I0JRgNUI7wOcDp", width: 2560, height: 1928, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107394812043626809184\">BUP Seafood - Hải Sản BÚP Phú Quốc</a>"] },
            { photoReference: "AWCwydhgU7-uVcCCLBYZf8iHpnAMrxR44BK8ypmi1NtRLl09cg-i2ELruFHISuNSJROxT0vJON16eEJHQeGyyswRvs91hI74Nuy2eA8AEM6evHYKOcVwCgU4rB70pyHTFK_YE0t4O4-ANiuWAb4FhGCbaHm8FXc9PZKakdLaCjpAqnD8HQ8ORzV9N88zcbajcwpZxGMvo4sIgQX_Bqxv3iXVNsSzWh1-CmOsef_vIRSpWJroG4ul-7azd11WEn9ZWsH83RLMS3NY2YPoJJ_0y10oYgpj7zMHPoEKLYsUhEIRgWqTgDHMs9z2aPFx-7PLxUVKFHZ_EDrUL7IGbAh8gcKmkx0cjWvKn3Ex9q0hIrjCJoIGAoC8GSjWQp2Fh2lvizcrk8_tgadUeDplISwkskX9_xE8-eocU9lk6nqaNWDcOnLY4qUs", width: 4272, height: 2848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107394812043626809184\">BUP Seafood - Hải Sản BÚP Phú Quốc</a>"] },
            { photoReference: "AWCwydgY-C70fodYYnV7cM8A-d1QGaTWZQ_n-xZlsDoDzeuuxeBORQKl2y8VNzEONsFX7SrQW_lYS-bWf8HCn-eqoef5lL25_uinl8-2JdKPlCnBAN7gOWPxxZEya8B16-5772qYq35sAJTBNlL3rQqM156vnZJPNFH7-s3YPObozoFkM-tfjGVxqSQ8bAV19-aATXV17OvqQrCA__tke7kbb4DgE_JUPsZlr8lVx0xPJI_m7m-vQBpcBa-en1G22frCa_KaGa_bXxEbHS1wvcmLuI4Xpfk8hjZ2WkOG04gcsWANf1xujD_KEebM0UdkusvdRizCCWatFpM8XDoYqNysmWzEWKvK7yWC2lq28z0bO5B9JDDBs_rba0LLDjkQmrYssNukRPWvp170n8kOcEHi4YV_DTYBrnJ2QfCdcY6btsDNN6tCfCVDHzGC8yG4jg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101413331755854228138\">Giang Nguyen</a>"] },
            { photoReference: "AWCwydiyhpqk4qA-bt4pAcXCYPMlqVrr5aIGZaqRgwib-2aOqAwDMy3e6BjOCfOlt2wtnpdYPiKqCTzpTPh4LjnzQWQtGu2DasbYuNd18m2PiuySvd5gGmqbnhHP7GZwHsxKRm_QFGXQhRXpRud2c1PZ3sjoxFZyLvBHtd6BkRr84KR7lTRbrODjVeivrDrw2RUBO1a0YgrGEcC4QV11v-uEv1xqR8Jml1P5Adt-hia9PHyy1GO6dsG9gxgdGmIlleUtjpZqv3RQNsdNd8v8WzKzaYvRGWdxKVURFY1iJAWmTsWBy1ivJMedrjIW1sU5prkM78JinDUZuSQ7uQ5Rsp3moZxr8aNp79LlAdAclH2AQ07Ke-oOweDEY222A-1-tlm1qZGrw09P_igtR8Ak69yIXGhT_01JoG_qDVSHo-aFt2sAea0P", width: 2048, height: 1542, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107394812043626809184\">BUP Seafood - Hải Sản BÚP Phú Quốc</a>"] },
            { photoReference: "AWCwydiJWEaKmIYtjgtnqBlmuJ1NcS1Z-OJXyv9ULrmwqNDJvsDVuttTVn3qitBtG5i78Ea9dpAMdY05jaFPugcQQKWQrGxZoqmNBeU9u19DMvle9RYK6clz1t2jdJ9vX0GTHjePy5ySwtCNafbgY4zZr4dWEZmbM5n6rh4X35dSyHRwpMdmq5xLhAuZLsJUrNmgjSCiX1Nb7-MbMnGWA9cwl7-shuL2QoeuAHjF2IzQ_cfBJVftiWo96VKrso4nJd7oIkipLbPEbLYoG69XwiUptNJ6GU0PXL66_ml61WwTdWGJ1fqG6ukW0sKGoYlZR_bqp1rCXLlzjnqzFumr9QoJjUXDC3N0DLmBVFZG7uURymMpomkm_WzZTZZxAhGdux7OVfrhzCa_Ch4bi8SYa_agIKLqBkM1cVaLHJYZF8YnI6GnuKBGOlK4VgsC7kzW05hk", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114274436392773404564\">Bảo Huỳnh</a>"] }
        ],
        summary: "BUP 씨푸드 레스토랑 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["로컬 해산물·볶음밥", "평점 4.2", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로컬 해산물·볶음밥", items: [{ name: "대표 메뉴", price: "₫150,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://facebook.com/BupRestaurant", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5892458186260286043", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%91+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "선셋 비치 바 앤 레스토랑": {
        photos: ["/images/phu-quoc/info/restaurants/sunset-beach-bar-restaurant-phu-quoc.jpg"],
        placeId: "ChIJq31LD1-MpzERdIuwa2Bg2ok",
        placePhotos: [
            { photoReference: "AWCwydhoZDeYkOGib7V-R5-FV6efqRQgG6gjQq0btabJ8KBHdAoqUq9_tl2O-wPW3ncp4UeUa3kj9fjR49mXoaDkTGeVlIyCKsRrzMKpJ1aTKfLeRSTQucU6Pf6MFxwezonWHyqU0kc6LrsQepAixJfV2Oeu5KZ2uv_4KpFq0s54l5WTQmYb9pSB_ajqtuh6HT3wpPp32mfLFwNY3cOkbe82vz2wUeuAKzwZoSDsiY3HC7IpEVigOYiWpxPTnXceuKXIIoCwQLX0OwQpwnyBe6K3973JTc0JqZQn4x2EggZ4c4hEkZPefdvxLOq_gd1ynh4q3lNPIhbI6YHiu2xDMlMu4PJHPLz6ca0eV8d6CbfNVd5TAp5MghmMkE9diJw-EgBfw-_kHYKRjVWrJKTVd1Ieu2LHqGLC4rFERTJUxWUAt4FRaA", width: 1080, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114631839563161665261\">Sunset Beach Bar &amp; Restaurant</a>"] },
            { photoReference: "AWCwydiE0jEwcPCBJLoqhEdXH8Wlb4fAV5sBpJQPln69QS0MgDkiNXa4Bm5nr00AmmYbtG3IjHhMcSTOyIE3QZIfuMyi8AvuIup737luRb4lMSxe55s29rGvwJyXxNM2Bk3sWq2KoKQ_6G6Tbn9_itumOa8z5iVgwVexXga9fPfYWHf8J414xrBEMH6OyCb_HjH7SgjoMSCKpDG1RW8asCWC6Cng6K5YMCaDIJArv2ni5cg4wYnAQ4pkTLRg_HhUJyVHKvE3yc-Feba4Zg7mhcttAMaAWTWaU0DuVsLa2LYhKO7HkfsDq6PonHP8C05w9YN_wnoWeJlrTjTUP-wLIhaWuerG-rQvTRH7Iuw4bM_AQxxxQ4SxdaTCgfq8iAIFixbzEt3bCKX812TV6LtA_BRVdXTQefcjJWJDxXxqK_uZz_tCaDS49MX68_9AqSUVkk5o", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112732420410829878888\">Ricardo Glenn</a>"] },
            { photoReference: "AWCwydg1huk_oKoig0q9jnXuglW3vcSe9W2iD15pd2eTMkYHlFT2j4p7wGr6vI2yXyhmDduueA1cvKmFMzQbRPjdyt854ufApiH03ltMZrN4MSVbB9NyZgnUY0qLBNUpvr52MV8ks8He_iLRUKcYGp9CtPRX-Xih0BGEYwu4rFKm7dLaQnA1bggsai4VuxPpUYiamEIxZYQYOUxUNxnyK924jKAjJ_TIFv_9RxyTBEdDvLqwoo060nys8Ja6SywD_PNxVX7o39wClO_4xRSJmrUXRsmbrgq4vkM4jLhHIXj0YOZnHQryoj83rdmxKwDjk-SHsZMPXCD9xosN9Vb6_yLQTBdFl7G6ffIEhTHEy6rrOuWiKSWfw_plTAq1XA9eNAFjwEfKfsHtW9e_xWp8-gxGv4kDsW257H-6vseyM7DhfZXWec51eIv-lBQhNIcdgu1N", width: 2562, height: 2264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114631839563161665261\">Sunset Beach Bar &amp; Restaurant</a>"] },
            { photoReference: "AWCwydhnUke42ym3q22TDRGgUb4T_nPLQ7aOzcSyHoFf5DUK2sn6hUBL_i-IHoNUTr6l4pbcOIKcc--9fb4bL90XbLb-L7Q7da-njrSV-Vu1KR5eOC-bTo6jb7cXC6cNA4ry2lIR8VDOiKkxBq7e5CidYl5AmaUWs5M6HKzOADD-LppcBVQEiX6oOork-4X7BdCWw60kM_S9gM_opxPPERprl0KoM_Olxewk8tUS2BlwfC2pB6pzyi5Q_ZjACDlaa3w0r-44o5gGv4K5E2MJUUJOrk4wlTBR0c7UOo3VFHLRYdziAcoGpBEaoICeMdfSw3vRfZDNwPn9WKNTXMeSutXi5bzzs3E4n1m-Zo1aGEqkXlDeIwkwRdoz35-wg7pZUsXxV0rb3WL71s_5yhG-KJS3Dlpc7H9CEeW6MSBt-bgjHRoqCU08WELnF7Lw_Kj4Ng", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100304809519337961072\">あるふぁえろふぁ</a>"] },
            { photoReference: "AWCwydiAeF-mzT3GvZoW2OUvhQBeGUf7afB70sPUTKFwi5KzZ1wiv9RH3vCmr1_dO31mOmOQaWtDZ9DN1CCma33VYGuBGw4J4w491xxUVIca0Y8EERf4zgTwdJHWMgxQSw4zBrmue92tJqP17K9B5iDH0ckgqpgao1vVOYB8oVJWWLcflLKP9vJTKxa4GLXgDGg3iSEyaiMNKZE376GDzex1uaUslho_MdZACBG7I5H0Ah8Z5qzVWu-JORQcKHnCxAgbzOEdLvpUcpM7X1S3af0XLIH482SiZRNM-ctTBKd2H1xe9pR7Kcvy1rbqcvFsy0y0TEFjUDhGxrc9CgMiHXUJ8pyrdBJcIP7h5_C8KfWaILtAJkAPhlv3xkpiOdzaXGd9mQ0AXMqqYadnPk0dRnhx_-Rgu4N4_fmulX4rPY7uSmucSexN4mGB0NIL9x9SjTB6", width: 1020, height: 1020, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107058784383745690976\">Nhi Uyên</a>"] }
        ],
        summary: "선셋 비치 바 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["선셋 칵테일·그릴", "평점 4.3", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "선셋 칵테일·그릴", items: [{ name: "대표 메뉴", price: "₫200,000~600,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오전 1:00; 화요일: 오전 9:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/sunsetbeachphuquoc", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9933357895358909300", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%A0%EC%85%8B+%EB%B9%84%EC%B9%98+%EB%B0%94+%EC%95%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반미 람": {
        photos: ["/images/phu-quoc/info/restaurants/banh-mi-lam-phu-quoc.jpg"],
        placeId: "ChIJv03p9zGNpzER91ZzTZ5kWk4",
        placePhotos: [
            { photoReference: "AWCwydi0nyE3Kb1UmSnENYgscX-jodDq75HWkbFVvaDb3VQjejhH26vVmD6qdyAR42kJsvJ8AssAXdPp82M2GuEZaPaNtKvR5RZ1FlW-hJuEf8kxyAL6xQRTN53HwEPoEM1vv4XOoL8GAfX86pwGy8fgSdtSzQowDQ77En9r8v-WD02oQLfmxIKlCar3KtXz2BYXQe0ToU04THR2EkGw-40vEACTOFy1jIV1apR3Qr7tShb4W_M3qt83OaY35LphtB3S1jzfy_LbjECYp4-Dy1J0ECIWOPIbZqt6Lm4fLwa8zwS5Thca08zREj4IYCuolIrC-kXiAjMV0tACAsPf84nhAiKGo6K-xrPvs5tdIcJPMISRA9Kt30O6Qb3PDJRdGH9FG6XOYlbrzBhZNn-riSKj4XJZ40C3c-cfAtYtrPbgpKuIug", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111694267988696538857\">MX Tan</a>"] },
            { photoReference: "AWCwydh60XnWXevNpMndpuZDsp-PfDi76R2tMSfGWZXAvBll3GGISee9-oI0-npHQLPb25J2BJe-4ab8f362-fKjLVdCK0mgCXvl8WjNfNUAd1iSRMJ3dU_nEDnyo1wCXH4ZhLnb34Me2sbsN1YdnAKEIf7WoqC2363tP1r7Yt2ir3RpDuMEnPZdrr1YE-LorB2_Xd9rRNSxNGyjDC4O9oQwyRI1RZjivJwrZ51VttU8S-lWCgssEOhZbZcM5JWphrosA6ajRhBsPXaAaIrd2c0QkKwofzwTTYk1a2OXeohonLCSL7PADZWBXaEYcacppYe9oMLJm3yR2TS3Zpcoc0nOBPVsox_at4rU0Tf_S6GL3prNWcmPW7YaE2-gwxhx377-E5iEoyqyIbHVLRVMbI_H10cnGCTVzep1Exfr8T5as94", width: 3026, height: 1816, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103948579616133319405\">mackiee</a>"] },
            { photoReference: "AWCwydiLpBeH3jE56feujulqG5ZZ0nNF6Xpm_HL8itNsP9xQXjCuL6s-iElaA-oJFPFT4ssRbBQ9oCG6snylT8PsannYkR0382D9ddv0XKHOj6FDsTEvaHA15vOySkgsp_QKP_nOFzOCUgiv5hZ32mCt-z7FCVcKJqkP5RT6R_CwHZ_1MOexwwDlHTGOFwDD1YkuEEf77Rsuk01IFwwlsYHoEOoZlUHQZUNlBKM8hOS1KwrnIRUXzNiuBTmngW5T2WQsjcgpjvTuTfjor3nfUW2q0Ps7VhYKciR3AcOu-NIyDKZk_safAFOnkWmpCdiFogyluCESVrzs_HjrOTgjPkT02YdSM--GG0hGbQMfMLtpJHld7S4V-qQ1OkFgK1LM9A-iqQ3MdUKUDROHWl0o2unyZriBmhGS4BMk-J8uc7RPJhHwQ6z3", width: 2861, height: 2146, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103948579616133319405\">mackiee</a>"] },
            { photoReference: "AWCwydho5h6PIVF7EgRAIU9mrNIk-Ynr6dtUbILa9fBHEeCW1c80Ub9J526OroQp8ajdZkUi7xGEbzFKzmuLGUxrVfuPpQ2VI5UWQhloNIqnTWZoxtsxDWKnuzgNxobcZB6XLbyAdhuXjCqjkixHU70E-5qqGVB7A_0Hl6o8z6W_eKObx9XuITTQKB_wLBEM453ZV_NQd-UwnQ-nYEHOXhB87f7tYBn_oyTm8graClTa2r4dIf7ZAv8Eh6sUvcuxl_CrpPW5iV5Xqxk4KUganjt-yZKLaTqA_a4LJ14CKtuJActkNJSbxuUyMXXmQbJpY20IEUDUk9RVeAWBXZseCuKwEdqF5gRjL08BTXnCwDwKPiI86C-FsgOOAS5mNGYUp0ZV83EEyIXaCxaaBTvQbG_S9YujWDA7OFlGfCz1gneJLqcmj0sY", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111694267988696538857\">MX Tan</a>"] },
            { photoReference: "AWCwydjxves7KGIl4LgxN3qBkstNKQNqaGR07FmZQPDaGj0QN2ElP7BSA3vTQoXmCGJ4DH5ShwHQ81RrWF5k97U2vpx6Rg1dYQVS3KWhmXDc0j11UX7sXqrk0xK0GHVs-o7IJTe8zzS2NnImNJTguvCx1oIFsz9QsnrNCL1gooOGc9XfHxLduSnXDY2n4RAUZGSxuIgWvBdQXbpMH1Aj9gcjhejPkHGNVXuU_bghXB15YGm6tQIAZjND1SD15SfEYfOxA0YtyNNahPmMH17swsXhDJHv7p_P4Tm6741EFnLPZ1cPmUZdtBKoIT52diYbCTDCaap-fPwIkX4VpdAKBO86u3LG19YdYGhywuu8RI2CljMFfYRYzbe1dmNE7pxNUpZUaVAezTv1mQoYYQ7PXMTplp5wfc865kbr_nlhYONk7r4nIg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100065080091440358769\">Minh Trần</a>"] }
        ],
        summary: "Bánh Mì Tổ Kén 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["반미·베트남 샌드위치", "평점 5", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "반미·베트남 샌드위치", items: [{ name: "대표 메뉴", price: "₫30,000~80,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:30 ~ 오전 12:00; 화요일: 오후 4:30 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/banhmitoken.com.vn", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7337124299077351403", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%EB%AF%B8+%EB%9E%8C+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "가네쉬 인도 레스토랑 푸꾸옥": {
        photos: ["/images/phu-quoc/info/restaurants/ganesh-indian-restaurant-phu-quoc.jpg"],
        placeId: "ChIJvQmFImKMpzERC0uGkkhqEd4",
        placePhotos: [
            { photoReference: "AWCwydiS9id7qWiVuDNBwQBJB3uyGScZVX3I_52r3TEIyE3L_oepn89og0JDOZELoBTYY-osxVH4W5L8cn2rS0R1jd7vA3DqX1w6V8dFtqJGoDa_5Gq2dcAoqVdgnWDYZgZ01ODm4Bh4sMjSWVICh2JSyMvRCeoZKGG5muajqtMUCAJu9zyVyh6yP3CPk2s2j4625fadSXJeG8Ejpqk9GikIa7xi1ytQbuAykxlu1MsI2_fDqEyxg5Z3KfP2Qn9XZxeMeDllLSO3lTH1VrEqjBfS5_6qeIHlApSWxGW_M98eduE1JdIFrmjgtl31fzajCoLHNaikCP0ETy2Gj4tY1Hb8esn9l-ciClM_TizwoES_SHZQPRyX60cKYhKk0ZsCCj9i-jwOT2qsHegN4Qx731Cg1Th0XEpRYn6Jf-eQi0-mI5s31X7g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110163749887940820266\">Kriti Maurya</a>"] },
            { photoReference: "AWCwydhsT9XEh_8qy8ea5tjaekdacpLcHCyixF4MkGPMqDh-kiZAua_rzsSG_MYDQ_J3_b7hDzbdq05-SHyiT57-MavuLJWY-XY9tCM1Ayccea53cIiRODFIpx03MwQADGumw-7XSlYkAU_ZYf5cSEDSFd7yNY5T7Lh6XrE7903plIyvxicdlWPL-iStK_WcqM8TkLIRAYzi5MON_bnZ4LSuvRVLTcmxq4fPyWrscrPEWAxFPMBmd3PjLUKO6xSo0m_bTjmiaowGTlCnZKNOGyWSWEY4veMdUjJIKWyKrsP4DP--QQ8m-g8gFSfmAU9scusQJba4dBHW2WXEUmhHn0wwiG8H8o1NYvTOZx8ir5OQ05Wgg87N6MONhfJv8cpGptyYjH--DqO10wp9jpSQNxRRtHo_sDw2wgoL9i52VAIJ9wxOyYgi6jDotpLlIuwq_-Rx", width: 4800, height: 2215, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113435846138224656199\">Jonathan James</a>"] },
            { photoReference: "AWCwydh0Wh35UKELbpc0HIDGgeV37RRGLzx2uSONComM9xL8-lvjBkCU8G8RmWYGj_Oi9isr1fvuprTXP9ZYjIL7f2P2TI0HuIE8FiZ2hRO1DL9lxRRJU1tDGVu49XlcIYMnh9LPiUwkpJU6yNyjtBffD3VoolJ_im-ylT1xRECFDE-rG1JRC4F4yGKcDosLLvkcE4M6CO3Sd8C-1yuV-lixQHcSvXafXC5kO86cJ73-6N9Ya9d4fWkK1xKnOwBjpP522UPsSQXdTUbwU16fNlRYypePOvFj3yUt7YpzkD0ldi-rQ6BKSHfRrHWtiEC7SBHP6HopjA8VpOHG2Ot0ZnyeiZ2C3Um7O2NAfs05ab_SmtBmxaD-RKG57LKoDqOEXA5PVK_rD42DW7U8i9i3uQ3PNCGzXfDEHd5SZkP4dJ_r0ExDEIm53YAKdZa0PLkwmrih", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116833404890125040092\">지구여행자 K Earth Traveler K</a>"] },
            { photoReference: "AWCwydgwxiHKmdF2eb2kSHXdD1MQKL02JIcpKFGyvfg4OHy3lr3tZBy7hhfOtYGZtm5JQczgITQXkGrcfoKU28BTtJIMhH2e-5gXJJQpaTZfn5d8VxP8Ysoj0vd_RjSqdnsrlHyYH-8ycV-ePUsEPDJgWpxOzc0961fA4iXoOsakyeB-KK48nbk3paVoa6_Tc-CmhrDPmtSPAhpnFOURMXk02x7j8EzsYJuGdhDMBV_Vr_kePi-uPf9BoqBFuwzBJ18Y4fe3HDzB3YdJvc663f-kgnMdoUQqYIU7KXLaP18f1TCnT53RsZKGa5xdc6pd80OVGLkKmAVZHzv7wF3XEX86HhhA98E5PKWObFxLDdM5OhZCKQwhDX8T1hQc1gIrZ-lLgak-5vpZpOYek6G3oSE8Y20QRTs1PzC4bok1xshLC7dssxISpqVW1nj8aInRaw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107408836887577847009\">Sandeep Gaikwad -Sandy</a>"] },
            { photoReference: "AWCwydjtOxOXzgqcYqIpR7b4_qfCElGK8w_eIJTwgifND0rqSXS4EBf_B9Eurt6Hgyq7jhHfMlZA2U_07YgksD0YDLAa6swF0xxwgm_UHu2K9_V0v1CN4FVWCUw2YdbzXz7ccQjDbwskQrjdtRnxo0kZcIuxc5SJsG2BKAlDuE991XGZ5rxujjq2BSO3UydhsQ-fIblRPp1PW6IqnUeCfJkMRn45znuv-6crY0cOURBfunUBN8RLJ5EOzcUZjaBc7bdlQNBAD1M9f8wTkvTvtzddi-hP6dJvDnWxUbvdeZPYp-uyWA8UUuovK-DvgWc8zvHWkp5jG1r9kLphEOlYgtGEAuxq7VTxjyQELWumoGNWSK9NlDofRTxlCo61T1ym4a7qiirDL1wjVZN1sNkNS88Bj6jLrINEC6T9z_oekTTEJSlnYrvSNKkBQduuiXcyKTui", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117591204944088843638\">JUNG HO (LULABABY)</a>"] }
        ],
        summary: "가네쉬 인도 음식점 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["커리·난", "평점 4", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커리·난", items: [{ name: "대표 메뉴", price: "₫150,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16001687810952547083", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%80%EB%84%A4%EC%89%AC+%EC%9D%B8%EB%8F%84+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "윈스턴 버거 앤 비어": {
        photos: ["/images/phu-quoc/info/restaurants/winston-s-burgers-beer-phu-quoc.jpg"],
        placeId: "ChIJAYn09GCMpzERsbqhlZ7iHQ8",
        placePhotos: [
            { photoReference: "AWCwydh36zyv2UF-xhkdUathKIKxk9r9solZygBq4cpUZHedMq8ohvODC4VwHFCfOdpWgoRvdREgdzTxEfX7igJkAEcv8Olf493qpUAh09gdJR7-dkpxBr1BR-bIJaFlCRY1c471eX6SOg4LQrkQoC6gx5SB0avm80fwgaf04_RLewD4ZGdpoACyzFwVqhD5yQRzaNtB8i0ZSCTaaAI_ofXydIv8UK0sg2CRchqnpbfBPVLnZ3Z5jp17QbrxcSs8l1uX5HV-zGgTB8afVrCS_OUi04I7NTDorQUMztTEfYMUOJIUu4gEXv1IFOIOssUc023kQN3KTDvfBVa3gXQmKf-3hnC6LNBd3MbxqGpDi57W85L9bApBvNJuoWX05wOwoJu_cYTp6CuKhLUtX_nut4lUj7Voh_dE2C0l6Mp7L7PGFNfvcw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114425893742846505051\">Arkadiusz Kurnicki</a>"] },
            { photoReference: "AWCwydhxa5rWugsmnGUjEcFlgw5wEZLxnum-bgjm3FsPzoJ2Z2AhTNGoJkl0CtXAaxmF9BhTe_oD6PlzCPh_GFggQitwhVLNvGS_nwhSRIYm91FHuKqVtIpMTd0speGPfjJaKHZRtkRdZ1YKqAbj-KLWPf28-ChpAjbAUWAXuIKggUH30XSbaMJkXq7NXv1X0GOEm2dz-j6dueNs9XYNXfTeQSxSiVZ5EN-PQ5HGf1080vKQB-2R-PUlpp3MjOnJATGu9kT_VGHbpJy8qmN7rO-_LjYZGxa4BL-2mvJcvmzbMcFKh3tIrzTvutExPqMsBaqSwPjN18FlrTqtnW8eFjaVkFwwR7mQ6405x3JR_sye-oyzFfiftk3-zT5zfphbWBud4bFeO8VW2wJSeCv4K_tVPLYGTbomZEVi6B3im9ZXPTs", width: 2160, height: 2880, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112261042000629062735\">Winston&#39;s Burgers &amp; Beer</a>"] },
            { photoReference: "AWCwydi3-9fvz_Tk38verRpswJQZyoOh9sDWIz_FaQbY4QFRdcadSLsdf7msLZrrzQEZ6VSbHQyt-RhqWeBhp_l78JseaZMIAgLlighCpzRzqaFMpgM3uhwaTOC64dg8opyi6dT28iaGNKOwSfPn4lrzvf-V5EywJXdNsEBq7C-jPiqz2Un6NzY4yFhFfHjslNX_XunY_MfhGYU2rYaSbPL2e7cdS6tOTZfV4SzArhqnKO9FdqBcxAme7oXnQlDPW-WSXxOAuEGAD1MaFtXOQu43Z8n-i7wTUc1hx8UY26e6Z8UfHRey0T3Fphw4uBeiGw0g-OaCC8CwAo7-2fP4gB2aU5CWWolWMQzaE931YU-ffFdC3BUPMCn2mKn6tfJ8Gn-HFXsn5b5hSqGD6cAGBLBUFYA87r6NU0tHgx-4ur0DQKvbkPCCk7pT8VhFiFyEvA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108780991641702809518\">Benjamin Eber</a>"] },
            { photoReference: "AWCwydj3dNDA3Cb9-5qYkPH_knHPQOwQBIy7S8M5szzfPkN99qKZwJc0G52oxyLfi95cUuLtuOROKZEEbfB5FQkYx_6XXhR1_EGzWRz0fI5aP75pxqjEK_5JfzAn_1GBcumU0gvt_uK-a7jhvLzttFo77xzPHrHVY3j4-TnNtdqiIAqL_qhiXXKFvS9Gkd0jymmwcdtUO1-urvTChIDNOBE4IZUoNH56ZZlkCpxbXq9juJBafg9HvTMlXyFgHokppmmbK7MRauN71ZwWDT4pb6dzLDTsNzXnENUdXs90OpzpfHPrE7-nGBtI1Yrwj61SHcKU8PwMNc2oqdugYu4e-aajDrYy-LAgIFBAlxO5Yw-mUDfy5RlXEegmWejgMBG-xCjXKmpNqvB_Pgr3OAihFmd69v4eYjg9OgL8YG39P-wYu15GZmAqOwc7LLyn8LbYw1i9", width: 768, height: 1024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108228788646108906575\">Phu Nguyenvan</a>"] },
            { photoReference: "AWCwydg5ODYk5WGNy3oL_gsjiDgVMHPjtJeaCO9elFuVatNxfFVtyvyhRe-0R8YrLzS3thpPQ8gEORLbsk2RCoQO5vzSYDmVmsAdiEjBFyTpvRR7pBkxoF23OGJuLgECZXQXJ3rruXGQL0Fo6H7pWvNBjiEe-UzPXWlQF8lFL8w5JLAYkKSM9iuGNWYrnRXLY3biydQWIs43HHxIs1rMz_skuLqCb4OtMhGOYy9Rhy4RgLXhWAnhD6MY2K8FZe9JzK9xMi1dNTdzjOkrFWCmFz6b4fLIXh6HiBigw4cgB6nqhsFDucgrP_4bnE-JO8hT0YaWg7IjOrYf5PgLBMEe-VQS3jrVOEQtwXqG7Dv-jpBtoAHLUAMvEMulhER3YIyNBLEpR3KBOQ8WlRHQHUJixz1fxDBpV3ki9wvDlPoetHBenul7HQ", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108331174407319852244\">Dagmar Kock-Böhm</a>"] }
        ],
        summary: "윈스턴 버거 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["수제버거·맥주", "평점 4.4", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "수제버거·맥주", items: [{ name: "대표 메뉴", price: "₫150,000~350,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://facebook.com/winstonsburgers", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1089275855636642481", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%88%EC%8A%A4%ED%84%B4+%EB%B2%84%EA%B1%B0+%EC%95%A4+%EB%B9%84%EC%96%B4+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "칸리 채식 레스토랑": {
        photos: ["/images/phu-quoc/info/restaurants/khanh-ly-vegetarian-restaurant-phu-quoc.jpg"],
        placeId: "ChIJh-NscYeMpzER9zBF1Ddrbo0",
        placePhotos: [
            { photoReference: "AWCwydhOEa-KlSj-tawUy5XjGCc2EZ7H1JHHtsQ8-P75rjLURL6ipnFtYmzeoDDPfqzcuvrASNIBWIXJTSZNSSAO5mUBdsLXQ4uZJNzanimFOXJsifBNH1wcVh7K-hYQFtmb0aF1_JKA5og0ZkXaych3Z-UcWUprMqYOK7iLzmKmNr6Ftn51mTPGipIbSN51yOPvg0uinjLCjTYcJnnbO7OPoFqnaCtEvwRauFYwNhbvyS8_V9aRa93_FUHLSKPnfH1Ecswdgi-9g8UWaM_PsJypEto6YLeNS8ZCPdUN7DgnwmiO3d8FfhFb175AovSKSo0HRQ2Laiat7nZ3bcYz9p03KhyCosOR0gi_OsvgcVecUUnNiFXvvxwqHRYE9LwYmcXaD2QwUcWUJbSOCYwBAeabbDP3L2-1r_Xi_91UKfg2GIoSgpJJk7RLeqyrlZXQVw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107062280037488021960\">Kevaldeep Kaur</a>"] },
            { photoReference: "AWCwydhTO60Jy5YM-jmyvSZ3seYPzAzxU-22xsfnKAJYcwvP0jDFPC_zGwc7jVOlGgEX_sjRiQslP9Xb0vSS8vvdqqfWcAjLCmoAZppcJgRL6X0V0c_F82GjkxkCXbGBM1EO1huor0hgkmsBymBe5euoY7-O6x77XhXZpaXkc0bpkORuQPGIoBbKAlgLmsucda1A4IEmP6vx7LZ7569I9UdNM4K6cctczkWpFe6EhzGEKc5jSwJ9LnIKfe8infeD0lJlJnNS_5PUB1WPJCQF-0bNGee_qQksoxiS2-PBNzfSWjJuZu-lLiDmz2WDYmoq2ylCW4Dm3KfzqlQk_xbAEtugEUIhmBG9R0irk0R5cKrqH0mFR6v7XpDObMFHQG-K5ZHmn0Jff1VP7WBLwCZEIQB__RxINB6tW0OPzRKI376gSuYnSHTq", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101338787088379679272\">Tam Vo</a>"] },
            { photoReference: "AWCwydjZmxR5Iv3P-T-PVZcgi8hJVCcFaXJMwOhXv06yaW4A_x0DDVuicNMnndqrxjuUXkdQ-jl-rvKGOXLjIgYFdAAnnN9MkAXPslLRf4jponYOOxvmeKbiZ6Ox1p6ObAmYVmUiUrbXe_dCdesW5q64Mj1W3WLJwRg8o0ksCtRThJrAobbpJL-b7BjZN0HSd-hMEZ_vfcs9pwzQ_rtAerN_ydYYVRijgLDJr2ia43tVDA9chqwAML1Z00isS_BH83rINkN9Lrbirao6xz0cta8RM2MJivTBQNCz8_jpInXP7PGqzL4b4mgh55dYIqX5dRPM2Ih1kBfNfAahM1zLBni1mFFajhTNw7Q-2T09gBmg0KElzlFpfX0CWYYIs84_sJPqn1lEGgF-aLv5q_hhBfyCLCEQyH95fDLLSez-vSQhYccT76rxxUPA3mowK_WLBw", width: 4096, height: 1880, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111053438630830450945\">Hoang Giang NGUYEN</a>"] },
            { photoReference: "AWCwydgmV_vi04dPY8k5gKUKt-HuKXjUT3poYd3nHnNuloA158jsBjG-kDKOpg_ZJWRMH8n8oNpb-Cq0KHAg0F7DoFWmQ1kZ1KI7X0gwLX5ZfL15mbPL8ZVtdUxuu-jIWBw5GnNy9M-SEw5OEkjUSFYtfqQeUvrjyzV0CSsLsJstzfgXgl4yQgml2kYsAZCUwdgLP1eCmIl_zf3zHTBkfAHUR7f2h5NPZM8pP8V7YIYuTSKkIRhdwhOZ0ogDSrPcMFm5tmsc5WoTI2HQ6NQUvDuX99EHdfticu7JQiM0S024hnXh3tBlhXTGuKvkdPmY8nDJ5dLv_0nYWiwwxeWA09R3bprFvBB0jyMjnPqKRJlRw2dvDJ1hqmDs-iX1eu5K2aiw2KNRCtA7NKlH43_qV5ByO33ffAC63YMixIvchx3r2zhFL4B-", width: 2808, height: 3009, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110388990361655166715\">Meitalism</a>"] },
            { photoReference: "AWCwydiIvMXzAcE8mJ-PJBIVPYN6g6ibK0Gwwr-E-2XfNjVikIe7RQLkNyLYpJrR3LGp_2BQLqlQ9uGbFIlZ3fSe7EeI9Qfv_dXgZygOVJ4yf122JfVybHcJxcbCD9uGnwE3s54huUlX5iZbCLtpJMTqX1WcVy8_Cx_VVkpn6Rnj9OdbTe6qo900UJYyAMoz2n4rnMLMI234fH3h9P9osFL5AUhK3XVPiL3ymTkuAXtqEpxHYB92vgw8XOZYbXsa4sTl6VkVqeswEjlVTSFc0IAXIBrQu6nTTWgneHM5SV1cVKkeBG32lsChI1t46u0Pzs5ACXajpHqg5UGdXWR6Z21w1u-yuiiDoksmuMK3V9qVrp4yIYJaFMkpNZBMagn5OaWV8ZkHV-iG2b_VHcccuyb5FM__lW57J0MXW430yo5WofyqiLllkpBGoO-nP1jGPA", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111053438630830450945\">Hoang Giang NGUYEN</a>"] }
        ],
        summary: "카잉 리 채식식당 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["베트남 채식 뷔페", "평점 4.2", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 채식 뷔페", items: [{ name: "대표 메뉴", price: "₫50,000~150,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.foody.vn/phu-quoc/khanh-ly-quan-an-chay", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10191200894314688759", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B8%EB%A6%AC+%EC%B1%84%EC%8B%9D+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "한눙 럭셔리": {
        photos: ["/images/phu-quoc/info/restaurants/hanh-nhung-luxury-phu-quoc.jpg"],
        placeId: "ChIJP7RtuhCNpzERvL0Oo4z8-Hk",
        placePhotos: [
            { photoReference: "AWCwydgoZWPWptONk69KLxHe8is9EJkrzk6LG1iD2xZggA1wJ7vXTHkOxjsrh7jtXmdUonjLZzsSdKDS84ysPOmLkM-fW6beYVVPy0mt2-949rBZcCZaQ-IC4psUl-VTOFGNATN_rwn0OV0bBzI-cLaz2MYpfwddugXFUssR08SuiRwHHtwR_uMnj6MT4qZKWol-5gE6-OldIvcnw52pHz0M06F9PR8XEpIDQzVzcr31mjtxKPIL-wAEU08a-ucBEPavaI-H793zbo2W_8WMzJPseqPBJlQx3vT0ozRNrs_8ZQj3-K4NA-F4WLuXocRSezXaFtHSTNoVsa-wVFX5Sktmrt9cTBg868qqZ35Es98PT5hK3w5aRdIpPxtIq9m2qgXvH3XNVyNSxtjZ3OtdMgnxkPwPturY_HRe9fUoeAyn987O_bw2", width: 1500, height: 845, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101904439964824524872\">Hanh Nhung Luxury</a>"] },
            { photoReference: "AWCwydjB2YupNFD68-3UDDgRDv07HQZ--unhkVdrDYFPDaDPQ48WthCbxe6gU7NBCEW7lnR5JHMsipQ813hAzcWY_1BLLHnipFrWpYsOVQVslszy3VGc0k9WUwyrt829wyvX6TkDDltRm-3TQo9WOea0ZUbOlt8TjD4LD9uAQBANbWieG73uz1LzELW_QF0PERwi-MVZDAq6nYvB58T5W80G7lrc8yxSRB4KcQJ5URH9sbocGb2QZaSmfBxTh_3TPcBQDnmimE-DO57F5VOxdQReqGKnORtntJNNLzhX24Q88b2jzllaAEgM2gfuTjjuWnRXXFWzAdUPOl-UDdrLPdgQhQicev1RfVn6ENEXLW8VwIXuk6_u_qDxe62VP4gdb-aVKx4JiS7CjNiOSaBwvahVYEus1v3nX-HqMq2d8CzU62XW9YBB", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112070485607521421561\">Hào Lê</a>"] },
            { photoReference: "AWCwydjW71Zw2Ko0aPGZMviuaeyFxAeeGqduJD9Kx79J9BiB1jUl7BnglO_6GMwGpuJXcDHLn8sd_vSisZ6BORthXDhJIkBJprZRM21KvIz_f6q6nv8jK2D8WRCDbVEzJAgsbtnU8H25_5fT6ghsrCqwknUkvMfGUHQLs5bIlmrtFuZuTa9TKMxxBGSEqKWSZ2QyBi9f_aNNlAlWerP2sV_LrodZ1Xdbt5TrQ37D2HeT3JpI1B6UgiVj24mw31J1Vgp_8-BzDJKx3Z4LoMGYPHow5iX8gVfAuziaotfqPx-Bxa_lbRZ1EUDtQTBJaglR3tdoI9Awsi6CirnJDyWxKsm2FS5tjZNSXVEPwU07TIt6nU_3buuUfvaOHxLn4eh1RETrfT9FMQmydfHI5JQXP3BT-doD9W36CfRwKfCa1L305UE7gtvYEuCl_o-78V181Vi5", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113374131050373608057\">Tracy Phan</a>"] },
            { photoReference: "AWCwydh1p4SaxvoXEcjQBXzKym_0mArErDyzimjCLZal7_ED51sV2ilq4Odc_1zzfpSZd0rCytxx6yMRNaDbXrjWMY90VxFJcIeEu8HGelTDun7QzQGO_n6AcPjE_HyxB6lZ2IEqi84RkAMszQI_MlXJR4sRTDVZc1uXLhxt_6mHb3web8IK_2f7nnOQG-nzzKRk8sUQo-VKaEjP35WS16_P0-EdJPP_xe2o8c0NgkY596tXRk3WeCd6TB89DWDubVUUti4fQeZlaOGSWfF5EhIRgdEUS-40bG2d8K6TLtcFLyD9BoqeSucWxmAvdLyY-vqpA0KXRBkueEvsSjId1I0TJzLNiPOtUfKavH0mhnUnVUaUcMskiC_0oY83mXqrBnQXxzppqsZbuXD0TAFAaYWQa1VjZWQm4fxtRj9t2mwBJ4dBRqO0yP7hf1xs_Rms4RX9", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106660798188838914003\">Lý Lê</a>"] },
            { photoReference: "AWCwydiJnB4lJlav4_xMYwbGIs6P8_3lZaTMwDhiwQc9-IwAS7ZiI7YGaGrPFAHKpOGMvmKfpF6MIJYMmrariJH6pziZHxgmqpJ336VmiNDeOd-TTEQsW5IrZ592mAiTPdsVq7-rdV154nxlL8tNwqMxHwoaS4XJc-1dUV1MbQK3ULAy84ODpu0GNf8_K_JV5-KwWQBxiUWGBdTaQOgb1VmGgEIeuV3z2uw8UXc2hbcr-bl-CsAHBcE6iUL0viq69MoXxqqWfyFi2rGI80MdY0lYSoMPFo0iK1kGYLs220n7tAcRyYiWu0lx8KRaAvMT107YLB7rq4iRtmQNRjMZVhrovrJJlBe8Y-3P85x9FHG28BhpX0mF3gsKjemJfMls5cLOHDSfkY55RR-bL9wuVhYFgd1ESu5p3wyp8oIYv0TIeKyC6VjIewqYBTItV2gNrHGu", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113374131050373608057\">Tracy Phan</a>"] }
        ],
        summary: "Hanh Nhung Luxury 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["대형 해산물 레스토랑", "평점 4.1", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대형 해산물 레스토랑", items: [{ name: "대표 메뉴", price: "₫250,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:30; 화요일: 오전 8:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hanhnhungluxury.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8789052353774796220", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%9C%EB%88%99+%EB%9F%AD%EC%85%94%EB%A6%AC+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "송싼 레스토랑": {
        photos: ["/images/phu-quoc/info/restaurants/nha-hang-song-xanh-phu-quoc.jpg"],
        placeId: "ChIJKYkq-4eMpzERplVADi4iA5E",
        placePhotos: [
            { photoReference: "AWCwydgivXQH43t1QiIYEeTvwNEKM5ZSv8KM0OIQMzzPJRocroc3gZ-uXyQ3HGEE7UpBJQWIf9VsREfFgcuXzgrUm-DkFl-LJddh1qIi04T_5jwqK3hCAooMD_t9C5BQ_YU64xLPMSETC_iuFNwiIUco2dQkN1HA5FjXCk5Wp-muxMEVLAJ26Q55qByKiwvpHzwqrLs3eCga6Jm-CAWSpFsezUP8da7xBD9l7GfvO0loRUYbKRReZp9D8h3JLzOE5MiMPIuI7FdE7xtl6OH-ZrN514VBx3RNeWoTPBimItTpr2PsMGbK5UKG8kIqe0_2q8CRTlHBnO57UkaUM5ExqqflwuVmLRvJe3VyQLr8sKTXElEo4OuyfRA3gv-zNknm5mrkJNiBI2ttBN9cE8LuRbgVo9cOcZFmeus40vzudJ59EKiexA", width: 1278, height: 1702, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110335995397863153295\">Nhà Hàng Tre Xanh Dương Đông - Tre Xanh Duong Dong Restaurant</a>"] },
            { photoReference: "AWCwydg5y4TEv2sWHbN_DxfPC-E_vKvhoVj1xQYhdPf3fZWMOWRS9Y05nmFyl-yaN6J_voWKR5m9dx2Uhu1jyETRMBV6pSXTiEdLN1wF70VIa-1iPm6g-MCjN7ZaelsCM6fB5Sc8-vmBHFgr86xIPnkKfw5-BQlmCT-JHFApVzAUnYCLz_KSXrEqf7ngBZqa6k8OoWyw_XudOUfUKH3MqvGYZw1AIersIuivx4h7wCmPPu0o6kMmIjNuTNDZKZSWxlk4YzqtzDQXvku02evKiPOt5uvRfUtuSADpAr9qO6ca5vhAmRzqi1vjhBpeRyZxW8SXY-42KgpABMldU4RDinlI6_SnjidMFs5tJT-syk25msSFqGxRPz-hTxlDyLmpWeqFZTNcN1zEtCqycYt9x7ZroeEKI87VmL7b1YBr1vnFMsdfag", width: 1600, height: 875, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110335995397863153295\">Nhà Hàng Tre Xanh Dương Đông - Tre Xanh Duong Dong Restaurant</a>"] },
            { photoReference: "AWCwydjoSZYo-QCxcI_q6DxNy03uMwA1BkA_cJt5ZjDtuJz3_IpiqCxLHX0niTvGXuwK_rTXMYMqruw_Px2UL-Tij9kXfqrbYLfrudaGDWLbpV59ZTuPiQpGa9WNOWKjSyUsEULw5o2o8rlu7HMJ7eHioRa-CNtZfIcr6dciKreMvHtQQ7Ty8l9YEFPvnAaO0MwG-4mchlP_HbT-jeeuhneIe0lDDrHy6FE8gFjzzjVfMK78Q9d1Dae9CHBCp2y4ZzYtSzK-3AP4UxmeVW7VV3yJftzUMMaOutOXwvWkcWwMN4ew040pUoD0wF4iFFacNEmf7GzOHJhGEkoYiNjxvGlOEcs7N1-QabW3gKP9S2wx0VljnvGjcO4RRWUWEsW3ut3v1wInhCVlc4U7A-p47Odhg-8ZqoCTC4vSInrgfgXicli9QA", width: 4618, height: 3464, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103600714372182008321\">chien .nguyen chi</a>"] },
            { photoReference: "AWCwydgkgsxtU3--IFlEsnZ9D9Es7ZdTlcw9VLfiu8B5hj_J7EGk5j5khnmoHhvGN_rcB6R2VtB8aCgpHhLLMhR21rzKwgcwTvoteLnxVwDWuOMAYPwgdec39i9qToK2ymJCNE34LOJUEFHFUSd_eX8FhEaxdAJVTxTvJOnkaNRAXT1Mq9IuOjfFzF27fc8QSKbB6_0Hgf4quVGrQ-8W56AycoC_BXMGV6z1Y8YwBrk6sVeGD4gc7h2KepkEsr2MNk8lJx5mXFY4sbgNTH4Le1j0Xd3FyKbulNjtYujntN3-ClX9TNy_pEmHykF6bFYrh16qHclYPoIMaNAcLn2AzX7a1hw5BNfI-CCRKg0zOsyRZ8KfvdrgmTjIljBX2OJhRjVwovQ9_vliVbeQEIIXMB491A0Uq01yIPMEfSy8xSFfwarrp9k", width: 550, height: 367, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110335995397863153295\">Nhà Hàng Tre Xanh Dương Đông - Tre Xanh Duong Dong Restaurant</a>"] },
            { photoReference: "AWCwydjOO5T67jH0ekdSHNX4BzR3oVlNqat4Kn1JQf12N3qgnxjKN_ZBK_4rsvSBZFc4pyRi6qMbZCydMrbUOjaJc2NGFVFIayDKqYbVRAGCeEnXwLYGEPKDSu6QDCtKaGjjO2zDeq2ykL_Kl_4vG_z-Dqene9LIwlH7XllGbsj_Bl2l--d6q8ixPVA-EMOFQEJOcam6g2PlU-mUHwFZ28Bf-ID35OfDxo0V9DlyvbqSDo5qRN2dMj2e-sgGw84c7cKd0A06iPEVJVGUn5PeXaR0LbXc1yxYKkAug7T7sBQ-cZ93kjj-7WISO2mzKyH1ww1jzTYMLNAJXq3UaYObpsti9Km8YRU1RGqx2hcRp8IdvT1NQTkGD3CEmNWt8FBkAJcsUityyp7ZJxKGVeFlFfZRrM9Ug4ZNaB9E0CCTnv3zFkI1Fp9h", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103806349628469010186\">Tri Local Guide</a>"] }
        ],
        summary: "푸꾸옥 빈산 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["강변 해산물 요리", "평점 4.7", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "강변 해산물 요리", items: [{ name: "대표 메뉴", price: "₫200,000~700,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://vinhxanhpq.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3230567361521802489", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%A1%EC%8B%BC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "꽌 비엣 푸꾸옥": {
        photos: ["/images/phu-quoc/info/restaurants/quan-viet-phu-quoc.jpg"],
        placeId: "ChIJpW9hndiNpzERaocRFppy0S4",
        placePhotos: [
            { photoReference: "AWCwydjPYLLJ-I94kLmKPy6ZAPUZmgi24iTBD7N9FmOnVfmseZpnZwMGQ53FIW2v3CiraNSxuJI0TNbBUHk_thmMf6yRpH_UrVLN71VdHdQTQurpBrEHKZlZmxfRs9vfcbhJ_xsqhjwwLbcMeh8LFkCL7ey6xwULmtDbvlzqXqciTU_9SO2DfOQEQ1U5HF9dSNwTyec0hSDSMdQVjsYovjRAPxpaL29hVkQ8DQFHfp7B5SeWlaq-p2CAL7iyIEJ1xEjnXvaKTkXWMdFraH9UbhIeziWcIL0VSJLfpv79r5caEn65Vf1MZ632CuNE93dO6Br-a2WlCKBOarbdmyGLr-ErNwnT_D_zBaqKJkpfNW5n92Unf5y-TM2J_UvILD21v0AHzmN4s0my4rgUoE9En16bi8lnqNWK379PX9qiCp0Ey13DLoiOuptG8SYyGyfTsMCw", width: 2568, height: 1926, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114288681011524343606\">MR. VIET COFFEE OUTLET IN PHU QUOC</a>"] },
            { photoReference: "AWCwydiWWoPOlA-XE6TBsabxWJYa59bp7Ef716I76a1e_2n3kqmpZYhEPMlO3F1AYnekSqWlBfY3Gs8l6wQu_iYTNhu42UU1cgypk5XDjVcZx5pIsJkPV-QVEglQFVvxc5rW5ZauHJlt-VSJ7FVdg7QGEQgKxjYLjtzobIIyszrtI-ZrXxaxKAtmNDP1w5OzI3BY_bwGydd1heCbNPXJMLVxdQ0vuydOARlqOy7Kl36n4wZ5FjVT7sXg-ea0pmL9OXsTZLDzGSFSgJrJq5ITT1yvq4fmPOSFehx0XLyLjJqOXVxHzw_6kSXoKz0-cFyQJhJadAx8-teB-bCTFKyZigQ-cSAqz6c1mwF2fjOvSPWJU5FPQHz1iRXiaymS5J20nNH8QfddqEih6GREpd-Fv1LbgAr8TMr_EBEbSChh6fSKKIKGEZalFwe-aJN12Eks1Mfh", width: 1920, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114288681011524343606\">MR. VIET COFFEE OUTLET IN PHU QUOC</a>"] },
            { photoReference: "AWCwydgGN6q8qj193lM85-jOnsEW9AyGV-V5hlkfCe5ntr0oCq2m7vWb1xnvHiLPoGN2P53LhsHqLPSb18YvN-oc7xtatIQgy5bAzoRLJpLXwtLXJjUs7xqFpaoj0yrnbQyHwJ13RL1p7d93r5GyqC-SRVv1JuwGrbbU1ytqkvhb3XE8N8bDKSCzcXuuyQ422MXfgiu76cKOSVCfWJ0PDYWR6LlQ_kfaeZ-n5M2Zzmlp2H3l19ewDEww9N7j6TT0DhSv16qCsaWj20ZLXaQrmwLy-eZJMfngcIGU95xN2Kn7yC5gXkNpaDeb1355DqwhfAYkR6guZPa2ltWsYh_O20Qg9kqMxfArCU7zutyMyHnjEEYvuxwMSibuMznbK2olygcprPMDadPlN2VXCM6qQ68CjDl724tpQRB_QxKgBHqpWEAkg4giyEm4Em0MpiP_nw", width: 1920, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114288681011524343606\">MR. VIET COFFEE OUTLET IN PHU QUOC</a>"] },
            { photoReference: "AWCwydi47VCZeE3GxSoaY1YZq61hMRInZu6MjNLBsJjz7zpTNgqxN0VGD8OiCzdoRZiZUTyanLiwfaE-oGUDKKXnGZo6tNn67XVM2kJ8WcdiXCREfM8nFOtWSFp9c1HM8mA3Xegruepcj2MQyt91JTXweG63P7lnDeXXpuwEJAkvO3H_KogxwJX7yL9_-YGq4TJ-L6xncRSVVWurN3uhdc9-gJL4-s7TUTb2ISfDjGo7x9YhSw8mRUCFrzf5lO5Wucrz22Sp2Yz3Hg4K0NGdAuaw2NAWc5xBra2Aa_TRcHe3HIMjlrS27uYHB90pCnuPoMeODzVFDkdbGjngkQ9gUfB9gNltCGSO0kh7IgALN5fvpZ9v25ar1fMHnNJeuPDEfpn8Io25wJvoTuH2XTqpgH5uCJbZzW4TJwK9OOAOIzyFb---887FCijOAcbAnS5HoY1c", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117542504843747178961\">Anastasiya Khokhlova</a>"] },
            { photoReference: "AWCwydgbBOLNs0cKSccpFNVe7bKahJJ_xEoR2L7BwZIt1QmWtTLD9muFJ7b5IjLnIKQ3LVYQpZs-EwOsDfwTEsQgIiA5rCvu7UvG6efxqif6hGg12OHhduKpmCFSGdsJtYtWXknMTY7eHYlQFGUR3ovTYv5fzMD8VDpi71kr5jKJ-ZlknECS4lNwI9FGiY1Zjdq_X9wed8hC6EFnaja3Ra33U7P_PmfsEVcb61W43Z3rKGIxV6OcivKtwtZsxRqYSRSSt5N8c6ieNBYVgVbAJFAL-LL1zBBQtsCtEE4VQgFedBPAbdJqJiF9SO46OMkzgL0wASvuTpPYjvAVmap-GGTfHkitW1K8-bdZYNAm3qL8TMun5ifJESaLnv2nqLdh0BGVCPos_oRNUU88bwchmOqAZKV4pENhJ6zVpEBubfCbiN4XfXR1x3Ypn3bpXG17rrcJ", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117644820659455984053\">Fish Small</a>"] }
        ],
        summary: "MR. VIET COFFEE OUTLET IN PHU QUOC 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["로컬 가정식·해산물", "평점 5", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로컬 가정식·해산물", items: [{ name: "대표 메뉴", price: "₫100,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 2:00~10:00; 화요일: 오후 2:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mrviet.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3373603601997989738", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%BD%8C+%EB%B9%84%EC%97%A3+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "껌박 123": {
        photos: ["/images/phu-quoc/info/restaurants/com-bac-123-phu-quoc.jpg"],
        placeId: "ChIJOx04Nn2MpzERyeQ_NFofC3o",
        placePhotos: [
            { photoReference: "AWCwydhGs6-rYGZ2vCVFsXu_weUy0N1Yo0ULAeORT2WfwyUawxMd7GoJN80eLSg_bJam_9MUpC1loJFtvzXCNgTR7fmTefJNI8b1GJPZZ6uWApNi5Fdn_OT_Z8YivOlLZLwPor0JcuPPNEgU2Y77ioS82qYE4n0cgiQ6kzSxl25eY5EZCaTwsFXY_uRkJnfxc6JsoW2vn3spsTxgdw7oWSNfTGb1j73_vL-mZmdEgkuBuHyUJbnDarJ_6cQnHfhyAbtYQRA07Ex0ELhmZiqxNO0fRka31OCgAJpeN7o3CbF03z-ahrfqGH3D5730K5eYd5KX9OnAAiHNs_W8dWLtwolBrevyEzr15Pi9yYcpNllZwEslCxK2DppKeFp4lsZdu-WGXbgbU7wzGgAAVZagGkobnRPXnAla-WFxNObXDASR0PLYDyCm", width: 2048, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117351754585001328315\">Mẹ shin Ngọc</a>"] },
            { photoReference: "AWCwydireCJuQ2YS7z7mh213o5FUqXg3W2BBAU7rCfDjxJ0_uKdn73UL10e9GdU-kQE3yftBak9mtlpbOpLhgiASUcBNsU5ZjKV9H2tS60AM2h02mxGzKr6XA6ezS-QIntv-kpQCfODevtf74BMQRAxs9BDPqSxLJrP1BuP6vhIEet9E7gvnJLNWmGT0YZK-6SF5B2IcTww2Ze4wqCDoGIIbyOeZpyE5h4cJaIRbZEoLfguWxqz9DNq7bBhMQwYV5qPd_aDbp_ScJnzr6Wz9PhgnvWQulwqEh61U8zxFVjcrO0fZG9aOBgxsLrcZ6_VraM-jMXAf49wXhe-Sd1k32pl-Zk3Bh0X2tnzYKMb5QjbXV_tYlpY1-MsAIDK-4Y1Js4Y61AJ5toX7IQpCWxEfFclPT_vQcbc2hISPOHVgzL-wbGw", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117351754585001328315\">Mẹ shin Ngọc</a>"] }
        ],
        summary: "베트남 북부식 백반을 제대로 맛볼 수 있는 로컬 밥집.",
        updatedAt: "2026-07-15",
        highlights: ["정갈한 쌀밥과 다양한 로컬 반찬", "현지 느낌 물씬 나는 식사"],
        tips: ["가성비 넘치는 현지식을 찾는다면 필수."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "쌀밥·로컬 반찬", items: [{ name: "대표 메뉴", price: "₫60,000~180,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8794157169655145673", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%BB%8C%EB%B0%95+123+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "히우스 패밀리 레스토랑": {
        photos: ["/images/phu-quoc/info/restaurants/hieu-s-family-restaurant-phu-quoc.jpg"],
        placeId: "ChIJ6-9lbACLpzERFz4CNo8Qldo",
        placePhotos: [
            { photoReference: "AWCwydgACXaYMuUc5ZFCPGzDcEop2AeYwmXi-2Kg6d3RTy0VlDCRikIOOh6_m_ZPZBQji9UZF6e8PYiV0IJ3IhoIfcnA_adFN9Z3Jt8_letnZ-sEOJQsDgfezSg5ykLzl3cb3SRbx0Bnl2qZ9-eEAmlfT48l5EiPXtpTyaOKFIUPoxJcJGXEvgj93zGSAFaT-OmCt9X94VSikSMP30Pg7SRV3OWtVI7hPHD49uDdKARNcuSJCBJv7Q5xJT5IEB9HiU99384I-BqKZ9MhgbTaBsP2NE9-Kq3KPg8m1SiuN0K8qP8heEQ7BD8j3RWltvn_m--Bl7MeMYW6hW0bPWJV5kOEG5tKVMvJQJPVp2ZJqZ0E770N1LCFdD1HJFnxmrfVb7Xxbni6606WxjdfqAF_FE532OAKxNKbKCreoRhn5cHdV80PZGE6LDlVFxxUtg-HZNue", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104933439770535978275\">Wood House Family Restaurant</a>"] },
            { photoReference: "AWCwydheunIQ_taMr1rOitczqwSR71RXZIIkwooAl5Xt_-lSV9S9UsD95aKErxCyJsdPc55bhuB0EuEfExPUDgsXw3McMwCzVSP7TeicistB2whJRWyNYRaCACjlyUqmOxHp8CtqiwQOqQksuQ1i73cIkChjcXlswotNnl9rF5llCgmwVLDKiRFmhcF9Hnfs0SZIaO6RgU6Fqa4gxhMmh12SlhcUtO__DWZQgCjZ3sLgjcVnZfAQZ3H9sVHS7FiwUlLZHinIBIBhhn_o5oa3aTvDqIsZvr91F_NOAOzweIGbv5nUHV_9FJ039Ap8yLCbv1fXVqYyM3UyxOx_pSLUx-FJ8CQN9xL6XEyeTeQ8hAa88s5pv_0iqGQUup5b9CoXf619ZEtDfR2RPGXwOQBKAEqGQq_IcwuCtxJL1CcS9budRUcy3kFFeGDnoeRiuHr7BcJP", width: 3072, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104933439770535978275\">Wood House Family Restaurant</a>"] },
            { photoReference: "AWCwydgKyUahA67sL-oAe-YP32Ovya_cuwW3LkoE2gpboP6ek7s6BGjNT1QZdrX0LECroiUGs6HcSW7wTqwtu5IDHsAMVfcIKjE1MUqoD6w9oxLxYNM4rMjjMqdr0t9eN1GeYIsrSqU3Tjv40jtlvR7Esh5_Tuvjg9SHvQDDxCHT8QnRX3q5o4v9Cae9hOQRwXeDT2rzcUe5hvA2OOl8qeu09iKGvFLJ7CaqDcagVzY4G0u_o_N6jJYT128yIb-dv8F5o3S9C34AW8CV7M-Mtci8qKUd-SsT-L_B0hVi1gnj1MJc3ZBQMI12qMVvUAew9r19KpOC7vhe0t6X4w0169lofjKyiIMvvP71ou_x3x90VhjgV5oi1d4AU1GvMRwIWY3vTXJ7CaS-JaMr18R-5-pkYzEKftl2EcJJPfMEmetXbVMK-0gnQlQNjjhWcQXrag", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108295836316234425255\">Ilya Voznesensky</a>"] },
            { photoReference: "AWCwydjgTaYWveFvBZElk57RYth1IFtksoOLwZTac1-mCp1iB_UX_KT-gfQmEyBVcPhluSIUEpaAZHv6EcMYouCLUXxxaGiTCt3uc0p_J6B5NS2SpgLlIvgjeF8dURJTanICS24ZngBJYGlNYY43y5rxTdYXiyJK9sxnOzz1IR3YEz27fyKHW6VgavdQ7G40MA5zv8xDIThx8GFVmAYOzGzvOsENm8ZncxcxRpY24Sh8ZLWFAhTrqhORa0mvHUiapDDzzgsFiA6fMl834UGnUhONrH7pHXy-h4D6I7NKK7Yjhgg51l1dLI_AxYTJzuslhvKDw8SxrCYZznzm0cDk5UZUF0THtz67emqCjhdYtYwwi1hqzreFHudDkIX3SMowi3eRhGq8iLz0TARhtso8IKKJESnUeeB2gxv5rQr7rXBCbIBckG6Z2lmMmzOxauNJUQ", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111235169500346305322\">Ferran Arlandis</a>"] },
            { photoReference: "AWCwydgz468zCxZUM_JjcHRIHd0aTiFt6W9L5Pth3LAj8ULz3xzUqGFyaVAbrcmpdwPHeXD8OFs8ozOOxq0LnipsOwdSksFq8aM6eeIvVvV4WGe4kGPvb_A-7DXXSTOHRrjwGisBzQWQLtSsOLA7GYfC79FRKnFRxGtVaSV1jy8cd5vm8r46nChILLYovR1nuguQvfWO7kNByMWslhHAwF2FisPAGhQcs6x6681i_q4CrgDA8G6Vm0NufDm7Ab1ozUqqLGP2xQomxSrRYG06KNNFRif4BALa0GNYXG3FG_8lyAkftELJHPDXhB2OOmDAHKqHZ7rSq_JHdMXRd5jGojFmyzPlaBukf22UHWXGxtvAhHnzoN7PZVZkuHez8GJuSRJ2Fh7VS8UK2-XzaXvPEm24P0AQ17htQMi85ehLP4HYiSnkCw", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108124169526752423687\">Xuyên Trânthikim</a>"] }
        ],
        summary: "그랜드 월드 해변 근처에서 가족과 함께 즐기기 좋은 곳.",
        updatedAt: "2026-07-15",
        highlights: ["해변 앞 여유로운 분위기", "호불호 없는 로컬 메뉴"],
        tips: ["그랜드 월드 산책 후 방문하기 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "가족식 로컬 메뉴", items: [{ name: "대표 메뉴", price: "₫100,000~300,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/MaiHuongBeachfront/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2663947787218946479", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9E%88%EC%9A%B0%EC%8A%A4+%ED%8C%A8%EB%B0%80%EB%A6%AC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반깐 풍": {
        photos: ["/images/phu-quoc/info/restaurants/banh-canh-phung-phu-quoc.jpg"],
        placeId: "ChIJTYin0oCMpzERKNvqd3rCAoQ",
        placePhotos: [
            { photoReference: "AWCwydhSriZPW0hqW2ULw8JRkn8RT40KK-02zKOksHLO0nWmwS6IMSWlFsrLXcE9c_Tce3BOFIi9KUzIaFnq72F3YOsYfidEVXwXrkk1Rm6y1IiHCDGDgpPcFc4awJJnt5DsGdZXe-M6Y9Rs7hcXAsPdnTC_EwU5NmigmPEj_0W0_6K4GvSZrqgdtHNdLYGUyj9iK5C19QCSEle1vQuMmN3W4dZK2h-RIcW8k0C89vAKAafd5f1MjsHuUx4Dy1a68_PEL5R1kHbQb3Pi3iaWjUxuE_mcIoLN4RbMJjX6ReUKz1G2ajSa2ENVED8MeN7PUq0ZSv0cqe5XNvkxGuq-C0jmctAM8GbQlxhjBWvzvXI_KiPIhBYkgy-gP_IpSCnLBKJbcqWBsknw-RF9MfM6-a5WdSgzYT6UWMq2-QHwwfX_a1_eyg", width: 3920, height: 2204, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107510535639357708733\">Anh Tranngoc</a>"] },
            { photoReference: "AWCwydiL1gZrDgXVnv9PaQlpwX7iOgAumjLneV9h8P3vaMR5dY0swWM-EeDb9LlKSunx00F16X_718m6Htu6R4C4ybP4CtVAxq5_2xPpJQpMORIetj0ZKeGdtzThU26BKUQXOvV-vSiHwVN3Ia4oThBHaQCqjnQX0UF6kVhFwvN3xedfvfjljQtwW8mK76ngDnUf5gXlzOz1_owJO506d9pmla5-uRFOpHTTPsTvRINbgPpA0tw5hEHVtOILLF-7qTTFG9BfPP3W7EC8Sy0qqcSB_0If1CvcZZCdu7X21fLZnYJLAgbhSo578TKvV1Mybi0etqziqjGY6P5wskNBsqZyTRdzR4kMRX5sUMyeCkJv1JH6ggQYhXWJ7mhGyCLL1_NkVbhutvYszAXQxANCnzYaunWuP969uu225BZ8EXAepyStIHh7GcUB_ARnVHBrIKCn", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103737478565908304188\">Ông Epal Vlog</a>"] },
            { photoReference: "AWCwydjB9yXHXzHAV2p7DSO1e_3OpKGvDmHdDJximQyCHPeMP9911m0GzuKvpA8YHQ9JMfc_jVrI0jZM-MrWjY-sEs1JxMFa2ob-qaz3usOYplFUYMJND-uy2i0CsUcySoC-xc6sg4X5D8jT1DItdBM8XXxna9FHnfoFIqlkK9zqFV_sEvR1C8gjx_4CcXh6ne3p-pETy9FNNS1PcXxIDwGuVHh6LLmNBgwN0JzCo3qMeYF__MbGq3-oCQDcxoe1uXy7tstLbyhkDNaqzb4YZixxzJ_zf4Nvund7FROU-7tY2uOwOA7cvfBm-0qTqupwQUi_AT0_ZmpO2KGVyzW5vh_6ykp3epQDnijJhDe3tSn96KsbCsAU6lVigdHsoztOJZT67Yb5DO5XyOodhWUC3vDSq36b513KheswVWDqwOmpDbdbvuYRlrpDLMNDzneDDL7s", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107774908869595532163\">muachieu cuoithu</a>"] },
            { photoReference: "AWCwydgsrcDHvm1rXazZo0UufufwKMjecdzHs0yOILgz3CsjSsZV0jp7qKWKZUEALmN5IxlNPtKzcBQG9VFranQ1m-0qydCyup5awpGCk6KyM84YMyCIaQBrhRQAVGjr3x4VDFqdZm3vjed8NPCYYcquseEeH8MWD-WEb2HuyyArJDE9nBg9phYerGugEErh0JKMtFqgQsB7CI1yCEzSRyPCVZ2m_2wzkaxJby4jdRm6ebGvIDamxYoHjWVeOAgpSR8V1LC18icVueonX7mdkxtxMdDTDmIEP6m8nbX0TjovU3t6bfTZyJ189DmvQH-xROlS59H7uEnXd7P0KLqYV1Skd5XBhzwflqx1J_MlOOrA5oVqI6V9kRksFuR2YOSeRdpwvweLQLfAMv3qpMmMVPkpZ69WEY2zZxyPJhFzHWaF8nECva0jxQz4OM0fAnJwRAiu", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104522030821277454675\">Tham Doan Thi</a>"] },
            { photoReference: "AWCwydiqtwypgv5YQ6nWDBRN9C5b8F6iFoL_wZp0AWkY26vQgGyIA4H4jLvqYOGeCwRxODtFPtSqvwZS5InkJGauZT_QhFKYAvj110iVddfkJUcdXXYiar8EO2AUZW_X66oElzrGUuOBKNoc8uQrpUS7QQtK0GHNev3mqDVYD7-dr60C1cA2eUxcSxkxHT0xv_mkBSnYgI7HPo2WgFzCx-_LnUYKAn57cQgLYgwrhjTKPSTryWyWAg2iQ8izUY_fdUaeIHZANHyRCNw63W1peepL6jvUT4C8nPRZxGf0vgaveMWZjg06OLIJNyZhR8mauSXN-U0Q70wlBFxIIHfGq98YzV6KZ_d6rpbDVccVVuGwDgO7hvxszaPRq2UrmNAHf1VRTf7J44TCAg9qPnyiWdbIeS8dDWyLRG8WcyAkQ3sGaDg", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101785338444123069302\">Tin Nguyen Thanh</a>"] }
        ],
        summary: "야시장에서 만나는 탱글한 어묵이 가득한 반깐 국수 맛집.",
        updatedAt: "2026-07-15",
        highlights: ["진한 육수의 어묵 국수(반깐)", "야시장 분위기 만끽 가능"],
        tips: ["야시장 구경하며 간단히 먹기 딱이에요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "반깐·어묵 국수", items: [{ name: "대표 메뉴", price: "₫50,000~120,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30~9:30, 오후 4:00~9:00; 화요일: 오전 6:30~9:30, 오후 4:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5890719974049360931", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%EA%B9%90+%ED%92%8D+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라바 레스토랑": {
        photos: ["/images/phu-quoc/info/restaurants/lava-restaurant-phu-quoc.jpg"],
        placeId: "ChIJaxGXkjaTpzEROt7j9Ls_3dg",
        placePhotos: [
            { photoReference: "AWCwydj_3P53gczreJbRMPfjRhS6kHZV3nnec8pXyaxVJlZ3o7LovG9QWqy9xp0JKwL1S6JFvLEzsWlwvSphHjxuU4_rCGtF7JEin9DgfXh3F7MXCNJ9fpd9-kSsuDsOmPcUwy_7CLHRqIbwQGBfJGEfD17k5UR9OXaG0Qru0VXZZYvZDnaasw3u_ersjFJXrU-bXHDPHEYS93JRGsIfbEkYLULnV5HKaixh2A3QndqBcn4tk7_KVEtjlsPPwUp5Ds_UBcaD-XdhKUMGrHtwWC77jARa4BF6rDCqYtaBN3ff-D-3MQI5TgB0vN3F7QRngtCiIYeMqj3LKOcxKnjVUCJEgjFLEW105IQCVuojcqQq_uMgzrMFtixMsMb62MWYRTulu9wDokPpoCVKyMzDXpiEzEkhRJ2Br68AkG1UZttAiptlxg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116258794837351183332\">trang huyen</a>"] },
            { photoReference: "AWCwydiBpuDyLg8TGJQNzkoSmFH3-MwM92gynD40Q-NyUOrUonWxcewfuGyHRSsLHinNfw7KT_dUPUfMEOL2zR6lFDGSubIz0RnGCpS3svoqhWlohFTERvq48LoOwCUSA4XtgGRkBVQjN8hFQS_dM9rKYIeRx-c3363Ik8xHAXkjbcI2CFqNPF2UyJqJWUBSkYkhHJWYolO864hTrYk1m4nvU8sFooa6iYilwybZw4r1Sv-kZeMmgmZR2PKKNWwvmzyGSpPsMT2g7ZcQx9D1pB-tFjI3i3_28vdCO8udUtjtgiZfdg7ZHEx7HtfOcnYYyNuKzP4_W70vm9uirDKqLeB75fTPHxVVmXAOqdwJVZmsc5rx-aOOpSViAEhdvO_qsnJblgSCrGFToJ0nIKaRRexhvHsmga9IqaSVoX-i8j2i7CIFB74rCZwwsF8EGDAhbg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104793578587420754399\">S DK</a>"] },
            { photoReference: "AWCwydgTFRW0c6EZCAr5mh0k7tOLkq7AlD6F6tojSl2M1JJqIXxsZmeDTTjz0UbWkWBouPUzzyKQxCVg1Ct3ISOqnc920IIQrePqzwCDNH-Vbam1cgJ7-3N07Z-Yhi2r_xPeAajbthmW8SG1i-4ixD2qeYAutmkoSUpyutlmB3gZowY5l5e12CkjJihgldJCH7PweHr0aPlPDpAi-DuddjZ6rl1S_S8N0r25o5xamdEhdEDWsRCnCvXlW3Vmentj910eFltgFXsmN0_aeVIg0DJ4thPZp-qIXNrSKTqrfGH36hhoaTVrtLgTPwP6TdjuD3B-gQU8njbbYX4_YKjAkCm4ac96vmbhETV5kUyEif4gqzwDQuP7V_FwX4tOBS-c433l2n7eqfcv3no7X_Rm5elosF_w5u8brpCisVqlN5NmUMYyI96n20naB-0Q8KdyUuMz", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115747203597850148141\">YsYs</a>"] },
            { photoReference: "AWCwydjjFIblAUwlwiiyGA2AivVTgnlBtD_J-kyGFV3BMEk-KmWHbhVo-Wy49bSDQ-X1R4_koliMNt-RIkCwuFI_G65blifzByJPOgBPpLik30aNOq3besxVN3GBSQWt92K3AkaweWoSZ7x3hvEoBcNBCXnikVobzslWiATO5rmGNBOm3nk2t7cHOrRIc3AkIShTNyGH8GwyzILYJ4v9fpGdzqBxUe-i3wmELoT-eAjdILYu1S4KWQg7iLAKLXOcSx-lu2LLIfd4Ase8os7_uVCC85Am6lRkqKYlsaeD-t2qWQgS0s6jOq7dHhxe6VjQb8zFQmZSRigsVpXac44518j5hi-OA_R0Rim_UhDB4IqIvYUukCChF7sLs7SU5zlOcGQ-w_WF_94CykpbzyfS7cAktLVkJnuJLJvgP-d9pwrj35-z7mF6fsCxWbqgrG_3jVtw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102727661794567050674\">Fly Teng</a>"] },
            { photoReference: "AWCwydj0F9HJbgoB0vqA3HqYSQZWNaHFnhnXo9XF9FtIIO6bOWjJKhvmhmUNrgmeY2jGg_UQxdN7B1AUycnAV-mAKpdiWd9FDCliwTWwLgCLV6-MTkOaoN9gq0RTikOGrg0CVO7IwBwbjflforf7kca89jaUv-aVYj8y-Dv6TzMl0KVExJMfyVN92evMcCNwys7eiXW2iwsPP6nIyRLHhQB5-QUNjfX7NfuzNMNqBQAmdHbPctk8K3-O1dR8_X_24FE6i-ymS7xUMyIyWW5EEQ08xVIIMlYHj4r3PejVvm71ngDyWtvLAYq_zixm-Z49PO45K-ItP1uhOHJYzPjt_mNx_plp1gK_7AJsUC-uM6w3ljyPNrTS4zRqon9VwbPAqI6-ecTwHkQGgplkE4y_uniKYlTuHtM_Wfl5E0_1sq0cXHjacJupXEm2Bvt4sggUZw", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104493103792530378846\">Kychele</a>"] }
        ],
        summary: "인터컨티넨탈 리조트에서 즐기는 품격 있는 프리미엄 해산물 디너",
        updatedAt: "2026-07-15",
        highlights: ["신선한 프리미엄 해산물 요리", "럭셔리하고 로맨틱한 분위기"],
        tips: ["특별한 기념일이나 고급스러운 저녁 식사를 원할 때 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "프리미엄 디너·해산물", items: [{ name: "대표 메뉴", price: "₫500,000~1,200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:30~11:00; 화요일: 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15626716358545497658", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%B0%94+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "옥센 비치 바 앤 클럽": {
        photos: ["/images/phu-quoc/info/restaurants/ocsen-beach-bar-club-phu-quoc.jpg"],
        placeId: "ChIJ1aeQ29SNpzERQ6q22sUKYRc",
        placePhotos: [
            { photoReference: "AWCwydjKDyLxj74dZ5Jckwb3kileTPzeJ8s9DBdMhukZI3VheBjQegboWCH6zTzT7dpNP5zD-AmpJxe2zZJKk-ddj7NywkZyQMWnKC4XWP093klNysCQf16T5U1wke2nhlO5-LKL-JkZ5qfM8QVROcp3Bmg6b9wHwsK0ImeGnJgdONTT4fJMAskQbaA3yUduBB4GvU6AgIrx1i-WWkY9puuxmb8zdsJmggv0RKFVk3SYCH_ZAKEuQJwktIDvmN9-zHQA-4Os1WxpYmm9ZnK8DUS0BX9YhUO6FoFtXYIalSdxKtNAWAOyIvCsmipQf_4hD8ki_UZ2mKrYZthnt1aZ2HLndC_nB0hsAYjo18COPEpE39yjIdwjXxASPPmSU0U735JSuMAyR5ILoFM7nxiP1zYNHCCBmzJcDqDt2bk80kd06Rs", width: 4032, height: 2226, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112694640973468980255\">Thảo Nguyên Nguyễn Ngọc</a>"] },
            { photoReference: "AWCwydgOATGvyppbWfZstkKVRkki_VKHeqnm0Mvcx-FqOvxH31d1NLBJ4GavIKGprHqzEcJ0z5OmKBE6E1G8bFn3314k0gbea2dkycDRtF6bViB2CDXVkx_fgn1kIIzQfmFXB4TczXyx9BzKFQGmiPnhEeLDSsxuLFjR2OFxulLHPIBKuIjxn6-mPaMcjau5XKUFBSi3bm8lBmDzou6OezklN1nPMbpqEXRiRivZbHjScZdraF35iaknFh_zfEBcfTGOM2YY6hKw4M7I2V8bCuCrwKmgpSuoev7md4efeRLoNY4oywwN5OMG6qWMqK6xf7GOcN-W1ftFDVUIXNpzWTBM3wK2OMUUnL2Umcc_s2WkxrdjxCaIcKiAob3OdHGWtzMI0Uy_NlGfbrL98nnceaBh-_vODseABcLsDTBoZwopcz6VUA", width: 1440, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115996204468698082728\">OCSEN Beach Bar &amp; Club</a>"] },
            { photoReference: "AWCwydjOgC-t3sFQtmaUQco5nN8f4EPqCbt57Ii7FCYc-Rz3YlyJuesiDu9Hu62bj8xP4eJWLK2zWHet2mYltQahSZD1PvUQx79w6K-UBDW1Sn0yuN8VK9h_ECeBAymQrKl9NytrQhKVUBGMmxDfcte4CWNq2Nev0Qt0BHE8bF7BtTf5vzrWipIuTrKgWATAGE5CRnsKDZzoXcUcpuNBXYiKIgM5bGGdMkAXWjoms7AmCU9tH10ZJUkjhcFHc-4QQsw4N1Xkmo0vOjHhABo6U81fPvfCcCfaSL5NJyzlhp27d7j1bKFqepAVgjPj6kvg9-nd5zif82Ra64puQgIRrXh3LdbvlLs6aW6gmBW8Vj8YrpZRuzUxdd-MQp66IO_iV7swR5q-7N6ss244-o1gcWpRy_SA7kfKi1OBbw73lym9Dt4Slq9GrQ-91MWVMNGruA", width: 2616, height: 1112, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115996204468698082728\">OCSEN Beach Bar &amp; Club</a>"] },
            { photoReference: "AWCwydgouCQAydhaJ8XUzCgYypjRltf3um8u5ARkFNkw42gi7FwQxwN40gjgOkZlMX8Hde07cF9tWTf_tjwc6vBwGj7AKWbayLGAGnGKo_gYM9J2QSkYcyIMEYoEdOADbGBb2B2LBvzUt82UM4Uxffkb14h28ze26rKsUuyrz2RiVDVi7_6TwST6hB5uJoOTT6DJFuzMhHxKlUGXu28ZVrZLmtOL2QMIpmSFhPtZkXdceCNhEkHQnBpmtoe_7uothx7Ti_m0cDeZFEpUTa5-ZufaosKMrrHyfJOCczcY_AtprbAAKP0cfi8MPnRlowRfLbzsJa7pQnPmaB0cl2JhSx5WIS7Rl6oMHrBKomdFfs6tTHqrHbA8tDpCJrL7PhAhwHLeVVUXTM-fhjQSJ5zjBhC3uP-vkxjX6WBMO6URLW3kOAqldRlapQWJ-Y4-HUc0DRxY", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101005152873299161821\">Ella</a>"] },
            { photoReference: "AWCwydjGfvx4O5VBc2XWFCgRTmfsG1VVDSr6O5WOiY8uEfIDmRuzA84c26SB2Il9ocSpddQN1bH7iqHhaeRH9MLQjWtVcBNjZvWELg0S2Ab2y-AjsLuizZ4N_7wFQXstl8x6geuyGCBGtqkhg1J7QrUguXEubyduMiXXyKxYuDbKT1FGXQiQ6qfR42qfpGNsMOBOoj5jj0W2wtWMF0t4_4tUdta9-iTLwQ3CqCLBRNn5IqzCVYgLh7reKB-Ojj7y0HdAUxdHrJ18PS_rZ77VbEkeR1DE-Ll14mc7_6lgwWFD9rv3auhUBGzlmnNz40QKZ7VHE660wG035k8qdKOYG8bbEq6HvY0EF46_V_yu8xh7jNejx5kAYgTOSCHioaxDH5FgHP6Qdg0rUs2oYso_uUu3H7WZLCZ1SYvHQH3VnmfoX9Xc_6yoDkJ6RLA9ES3MjCsK", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112094844667564611494\">SK Park</a>"] }
        ],
        summary: "푸꾸옥의 환상적인 선셋을 감상하며 가볍게 즐기기 좋은 비치 바",
        updatedAt: "2026-07-15",
        highlights: ["인생샷을 부르는 아름다운 일몰", "가성비 좋은 스낵과 칵테일"],
        tips: ["해 질 녘 명당 자리를 잡으려면 조금 서두르는 게 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "선셋 바·스낵", items: [{ name: "대표 메뉴", price: "₫150,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00 ~ 오전 1:00; 화요일: 오후 4:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.ocsenbeachbar.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1684639580507515459", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A5%EC%84%BC+%EB%B9%84%EC%B9%98+%EB%B0%94+%EC%95%A4+%ED%81%B4%EB%9F%BD+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "로리스 비치 바": {
        photos: ["/images/phu-quoc/info/restaurants/rory-s-beach-bar-phu-quoc.jpg"],
        placeId: "ChIJYVpQmqSJpzERQ2jruG6WqKE",
        placePhotos: [
            { photoReference: "AWCwydgaHBAxzag-b6JoezgnGrRebgXQpoO58SbSF5FmIoxTD4gy0Z1rEF_4BcQ9HBQMx79nWYNlVCouQKHiDJvBL-8S1Ah0Mu7kkNWeW-Q5bUGL_lcnx8RtbpK-bPhkvq2rec47ymdkrv4cXp6jkN_HwlZgJzXyJKyNZ_ZWw1Pj_aNqpdOWeSqa92sa6yMthTlh8-yMUK8aEuyXjNOlBPmwPM7vLd_NAcKkNckW1xpZubGCIuti9JQRqJwfTDhPhMYusDEAqqRS21xDCe9okvSo15i2AduBcIE-kjVLCQa9DlguJCNgz7a9faNiF5n8_N7dZL4T0IsBJ32OGO_LnAeKNb4WpQdPq9BTjvNNZG1NzRYBWbcPNmd2m3bfpfYsWARSQI15M0AwCVIUoxicDmAnFj_14J7ex16_8YVxwlwg3Sc", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103033372022989970921\">Stéphane Harnisch</a>"] },
            { photoReference: "AWCwydjdl3GZZwWnm7sxX_vQCph9ULcqXdr0vRIULs2Tglfr4KRHXmatR7yXd1VKKqywghoWhY28txEotJCNhSzutJBEjIJkuhsr_0HO4NZd8yBtJaqBlZrX4hH4qywBnbifv2MF2JonU-otZlcfjZZqnE2bCKR_VlUx7hNoLTicmEJg-h0kLXOxHl7_gB4QwebhcTemUg3Cq3WGkL-wGUhDUAbUd9zih5HGANiqpumQC_S-hW4qsfnkGh9CrS_ib-8FrIboFlAcY-6eSTLCyvbsEnSGsUlhl9ttY_FZ0HA5uaXJQLa8xywegK55JtMjHMz0AAis6D23AVk2qhGryRFHhj-niDfIVgF1eFlZ5ISrLS_EFNKtGK1f3Y12DRLiRqbvCZ9pOJqSDuupgBYAN9wPTl-M3yDbmBLJMdB_3EAWah7ekZlTcbJjKB8PXOkVIMfZ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111764377323770943659\">תמר אלישיב</a>"] },
            { photoReference: "AWCwydgCq9iQqtmR5P8Kv2dIrgysDt0oPub8N8OHSLs0ZsoL-lefZNEflP5oGWLly8ACh4VGzeoXbQJkGdPvh6oP_QEfJCou2o6zfAyUTq2N_uJ526JhUi5-uVgFdMNdl50XKrcWDOnmzQS_PtokKRM4DMAzSFeVDli72_3nE5JWVCvM-rEulPrmDxcsVdLHXudqpq70WTfYJsOq4n4jSvD9sqK9IXwBQxUl5rN9CPkY_EQyj27CRJsbOdV6O8PDb3sP0MWZqb6kjm-AZSyRV79CiFZwZ4D6a3ZnU6sRV-GP4ccRNNyeI1c48EIGY9bqxb_jPxQl_z09--6m7TbYvWr0s1jUlUyw31IOVfCtUUGApL9kGgpUjc7CsQ6LlIMwUArob6KDJul62yi4OMXHdm8rFNScqLjqkHeA6QLtGJ4bVT7pefeGn5F_Qj97ptgIIQD5", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114965313278319275370\">Paul Gauthier</a>"] },
            { photoReference: "AWCwydi0xWUkqrhYyGSxcxN0mKxnCRHt4cazYpvn73crD7Y9KpmfoNGdbapMrK7Bii9yNDTVKp9t9I79U8I639dw2Mvz3k_cPBjWW2eu1PvZTHDHr2C4aLcDmZhKq34lzhXZ6KbijdHbmKpMEowuGBBPY8EITCHStwWURzTeI2DkneGUEDAGgo053ylA31YQ3SUS_dbGnaPzC-RWp39LXe9_O191jDgsKlpl0E_eRnfaPUxL3Scpk7jzy8wLsz_Pv-wDyGQMo_jgwhz9XxhalU3_74ZYKBdiyTROn_syiqL4MYH1cYbKL2PtIGQ1lvugVPPGdVAwgdJchKKHM5UjyYzKc-yI7gsk53GwOJzWtvozgj2daMsbRHgF4sDLq-CxhmSfQuUbXdCPc38YcAlK03tU0PR49BvBn4FqUs1eUmxjdqfDsAwWKeerH_vsZymQ7A", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117183235250009354660\">Hardy Tim</a>"] },
            { photoReference: "AWCwydhGidjTVLTsEWyUMOK6d-UEn5WzrgWRWjJK6W9-PY2Jv8VSvHfE9dy1vZ8auYZ5PX0uDvk1yBGAUSUez95mbvTUgdsEfSaEXlI4wk6Y8iQuGwOHvQhtzWhFVk17yTlZH--JnQ-LifIr2-yNvjJxLpL6IOu1-xvDB-NN9IFAPG5Gvu0auq4xABw2qZ8BtXGGKF9TnBe4MbxHUsOAa-Bxw57G6OAK107WsGkL4xmCnQZtlOnKJMvG_AUhnP3yZsg0mJgd7igS38fEfEG31fA6No_rpvdvkYq6sO78Tcx3gpLoEkqiF1idyp32bRjvyZ1FEe95m4NoLdXHA8L_FLgead_7NyAtNcP2_UQzSMZ9mto698ZYhVHR8cJlCbqveJjMF1kW9m2B7jukCUfM4OooZVW_-jR-OFbV3Kwy6dB0Vly89XTFAQsJh7_QYPnn1ZSm", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117085821910922329614\">Jakub Kot</a>"] }
        ],
        summary: "파도 소리와 함께 여유로운 분위기를 만끽할 수 있는 해변 펍",
        updatedAt: "2026-07-15",
        highlights: ["낭만적인 해변가 분위기", "다양한 펍 메뉴와 음료"],
        tips: ["해변 바로 앞이라 시원한 바닷바람을 느끼며 쉬기 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해변 바·펍 메뉴", items: [{ name: "대표 메뉴", price: "₫150,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/RorysBarPhuQuoc/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11648725838486792259", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EB%A6%AC%EC%8A%A4+%EB%B9%84%EC%B9%98+%EB%B0%94+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "푸꾸옥 야시장 해산물": {
        photos: ["/images/phu-quoc/info/restaurants/phu-quoc-night-market-seafood-restaurant.jpg"],
        placeId: "ChIJXX5dRSeNpzERADiyRNheVKk",
        placePhotos: [
            { photoReference: "AWCwydgM99qVyem3c6JoVvjBGs45P0oma2vBGaefKpxQVfl1lLXXVV1hjzRdxOV0rb4QztTdq3ryxk-6IB5kAvAXaUdJvIxQslIbPZVQS0OU13rsTuJqCot7trH2sbKMuFzf2otWovI4dCEdxOzAC3maHd7V4-a1wD4zOXELupTq6eooxDQgCad6S8u1EBYa5R2-LWkOAufxZZt9mBF-K1yxcA_Pt4A1S41OyMKRDJ5Aeqf8oNef7IGWxCbhRXGPDnJugPMQUI2bRUMuopqlOCD3Hgk5Qyn_bwpIbuuW14LZXp_XnYdCvh1eAYqorGzNwaSkOgM4TuBNbZ10A0M1gFc_tfGDU1gxyyrSE638Kr3BweOoVAi2frhPw5-Dhua9F0sqxCKpqqlgLoSzpmvKqq2vzNRLh4I2fwTSH-iJZFga31EbClY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101203207955652939487\">Andre CHEN-MING</a>"] },
            { photoReference: "AWCwydjfLVnXmPfAhznTWfKUgg097sHkNPqrKfOq4krJRrFgME58_3a-D-EhF9wYFe_pmi5b3LdTfI7K0QgHTJhBjWTOWWi4G3DBnKh3d5CD614T_a14LwR2M5qmCn3zZBkBY5TgWjD2maz6ZIu4Cnw_eczDXo_Gk7OO0qhNrpImDqpxrmhGlIK1OjycIFaw4BY7Ek6CQktwgQwAqyIGghimQV8ILrpY-U7RLXnJye6X4QNEx0vL4mUlknydESAdsBkc5e-kDNVKlSf89pZQn8_bMtrXiXzqOywR9zzHeLPWZPsQSH-bHGUpKN-GNbtB2ybwrBuHpSpuwXzeLRlwEqGxdJzT5BivFxdPXonyHsT1EG4S9lji3PQ8o0cSxKq8LbgRhEmiGqTVT-gAG6glp2vZNwZzO4z21uloAr3EcpVTz_R-rg", width: 4000, height: 1868, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114606048427606119238\">SJ Y</a>"] },
            { photoReference: "AWCwydjUA_UMzd41rQt8NeUh70mPDRz6QwFx-hTYA-ICQ2-6MgmHhVdtwkRv24SRZcTWQATvOL5na7-33tUsKvX-ZSmUefRPnCMJQx3VuIZp5hzOkXzwBvGkp6HLpg0EQhkWg4SyTGI1HENVaysBv8Rr5BBMTthKJDyJYjh8hDmYrBcoDERXgw3WRmHZIbCtT81LqpzT5tqPLhuaVenLs2ScUEhaMirZx7Uwgmh_-rl2TwqjylVfMgvYGn9hktDBwnhdVTAQF2TMsezjH66-1fYr6NeADz-dWCmpDDzAQ5MAWPXrqpKamVx-Wvb1-8oIiVrediGhmstzWVlqaVRV-XOlCAb4gP0Mrll9VBNj2VreGGmxnW1qRMoCtTU5C0ZEO2_QqfxLHMd-3qY_U-Mj3TUuPIthoxssGMlr_BeAfdsQDRF-rNVmMOOwvbNC6u5zUQ", width: 3060, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115837109765621228711\">Gregory</a>"] },
            { photoReference: "AWCwydj8RcpHXZbrEQVhGeh-kH7KvOBmG0Vo-O6SPep57s139T2N6cEb4TqreAYn3M7vWTZFG669NWz9glzPaItcJnt9pM1umBfCEmo7OdF1CNiuH-MUsi6XFDkYF9noxXtd5jSwLZyVn8iSY24VTfhkAXoAVqlkVsSwE2xWTKahAZ1bpxDJMPnrcs52COjQXVeMmvrk0zZgb3ByL0-KiWJDNlLO4TTK7bkWrEFCWYLKJx0cCKrcMuVsTp9rQfEWutay2tvtIwpwR10X2XcJ-Dt9_9-gp6MmJCZ2gBF5W2hW2X51E-W_arpG1wgBYn8NB5MknrQykU1wOyuoryHteQunfADod6tKlSs0a8_mshJ57lS_AxU9YhIHvmdM4XMYxVxqAUil5zUlcYz0s0sq0hK8YOVzBlT6QgAIeAXIaF-Y851k38C8BnZQgNge2W_UNw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102420128555973284024\">jiin</a>"] },
            { photoReference: "AWCwydjlpgH6shWFj_o7IXtwpjAduSg7TXOnnGWGrI1POpsXNMs4Q6kE4n-qyOtoXI-Lc_Q4hRaMQ4CJtLYcar-jtOTE4yitHBVV0_qLKBpw2M1fJM1MIzuESa8WWTVDIfVJFiYuyUD9mueRQ2b6K601Qv0IDL9x1lisSxm8_lAhLsfDRXt7wTR92iwabouh_N87-lcYkGbufriE4EY7cDqR0B95qvyaqCVKdvyWTr2Fupo123kR_L_iMTIC0dc2XkRAS6plsOHe0ASaMrVPteT21kvmeAl5CT0EQcGxkiiNO7pVbtWKCTWMnIgzYj2RUlkU9OeCQBuiIszy7iW_KSETigKjZ5nvq7QC4jW_4YMNf2KY_SKGXMDuqbla33Heu74L79mhmdZgLhldHG7KcEaoJw4IXuR2kJReQ79KAPCXTs4wfg4Rdrb9bof7RGzqSfFd", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118101817426204556742\">Tomáš Malý</a>"] }
        ],
        summary: "MYLA SEAFOOD 기준으로 확인한 푸꾸옥 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["구운 해산물·간식", "평점 4.9", "푸꾸옥 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "구운 해산물·간식", items: [{ name: "대표 메뉴", price: "₫100,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12760888044499323491", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EA%BE%B8%EC%98%A5+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%95%B4%EC%82%B0%EB%AC%BC+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
