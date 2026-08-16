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
    "식객": {
        photos: [],
        placeId: "ChIJBYq40dKTpzERqA_ch_SGk-k",
        placePhotos: [
            { photoReference: "AWCwydgv0KgZ6cAjVxrz6jsDPnZENz9oAvHgD2EVg5lxArsz5zGh7rgS9RTRtQES9LA7atWh36s6_2o6nlasKWFWDcyLuDI89zJ1ila19x601WdlZMm87d5srNMTBLVBXS67JMHt9mxqRqfT3dpKb56c9JrbUf2zS0o93_kP5vhttKdljsqw3aNFM6AJnQHHG2RPrueUl4uB4e2SfQfQX9022kYWAvydRYdl-tzwrSu6StIYEQOK-YbX00ZMnpypDsiJSjVI9FP2kU86CX6IPz8gQzrOF0iMqUZ_Qcbw1kQlKD0fAnQS6Qr9AXdWilotXHws__SHKGuCemlu9eyklajumCprzm77IpcGFmAMvmmwbjm5KpIcW2jKHjEyhexDYkBcaYGnsf4PGjPNEy-I3LpZSUWCHZgfET1ZJ01ztZ6wO-6lPlZ1m2JQ0UzsYEncAYOP", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108916833094936486704\">식객</a>"] },
            { photoReference: "AWCwydjXOeWshCXsa-4JwxTIAUOa5GLEnxV3NB3XxwblPSzJMZhC4pbyC3002XYuj2aO7zDUe6b3H4ZvuakKFkcbudjbqNDLLKDth50YOxhU07Ot9PWw_S5VgFIBYCZRYFDbhMkolpQQyOSqjcFAkYzf1usrjld4uw4TxAqZ_S9Wv4umCgPQJCe9haHgO2RBdfuN3SU-SdAYbwQdDp94afml6Hb67p7IHK8Q5FCHp-KCpee2S-DYyWqrYgntjAq3M0hCNyles9e0qvlwmSezf79YluicWWr74NtU7lGQjVWY3ZenEbU5ftOhjVkzl7inZezv-P3OrhSQciqO0GcEsSipbhosjMtqT3WSWEch93a_RQJzOsu1AXfwZDKmCWetVaYTgWDrLkUnkonjCCyiThiOORdYindttV69LalNoRVj9UpU3NYztHR5MbFVxgOCKNz2", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108916833094936486704\">식객</a>"] },
            { photoReference: "AWCwydh-ppe7MImjnmVdcT-wfRoPPoFi7S_6txpWkH0Oyxddb6aqX--rNtCO0iHkiCv6S-VmH6R7g2w9dS0vw9LGgrsu4LSGPhmYFx20uozt4BODdxHr0f0IGR3gPGrscKPHcAZwKufwL1pdnQOYuM6dxPYioN0IlNhPRWD_mg4bMh2701ylhNRsubOwYA1Ztczr_kcQ1uR3KKw63v3Jwwre9VC7RRWaOEX-uIGQylP2L5hCjQawBGiwc4jQxzXeDJQE1XB4JI7HUwVrMBX8Zqr4eMYeUpI_qtNfm3sEuaEZALk-gktsOo8L6Rsk7C_-mO5n0XOTKlB2aeZ6dndWOMyw8XGOiQdvz8Z3QW-nU1c_JVGyYLNUqEDJ0zCI8xLVSPOwN4K7G-qhdFa4kwOukWpvtm5KXJtnIDGdg1pfEWpHtKjLSG7oF_-px5ov_6wzoA", width: 2708, height: 3611, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108916833094936486704\">식객</a>"] },
            { photoReference: "AWCwydhJmjfp1jibAB2kH-lF3Rwz0WBibg8tSIOpMItikQf03E_U0WJWZx6u5MXhuACDuwZwhq3NZU77nGSKQ6stV9Qp1Gngybbjy1CWOaomg1LshH3ePfAYOeRRacN-gXpU0BeAKBftHw8HpVyd9z_lSTs0pYElQgCApsK4nZVeE13-H0onIr0AX3Wjub8iPOZ2dEErKOCLOaX-Djrt3Wu-xydXNeXGOv2_CzqIylN6Ja272MkzP5dhuy0s0aQ8Uzks_z7vU5cV_wTKuO0M4mHRRke5Y5UxyCn296n8SF6a8LZgTWkp43t9WDek7esruApEMxYv_np5zkvqiXxp1lGimtIqwGWHK2Qciabp73OC_cuWEi9coX86gIEy9YFdzCMmbvTJhRtVeiiT_xENIWsw37IuaCaGVZEQZdJuY9SfP73KftI_TP4TanIgjbwi8jvZ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115291211177751063521\">조유경 Youky</a>"] },
            { photoReference: "AWCwydj23PVeRn4SJe3Rgg69UVMxiE4SzDgBMuFUAMOFGa88LJxPGgMbVF7i1aJcCOQcVhLQE46T8puAkO6S07S6TV03W57-xUlqw4ZJcHAtKS4w9zJ8ml-ow7bpUJ-Y1uR4BUwmMUIAqm9K74lDfAyJu0JLTCQUiQE-iNvGqIClsNVHWs8Ff2gmJ9q8TdOvFt89ylvJosnJMae0PZB_Gn6AE9282W4KMxRXfnkHQ0YBrc-Kmqcyb4hahhaU_4xxDHycbLdLnurteQc67A0Y5jy6YtTrhdFbgpG-KFgr3XYKctXIQ0DYaPUnxeoSDC3ZS-zWDGcIbbBSWVGr4yPJfXojx4EKgk6WEdb4a5rFAHI98Owr9UwydHuJlthHqv23--NFzpxj2OP9czdN4LKXYSvIAbRClh7yzH9gacYIJImS_bRY7ECg1yeRq41pVCc5qg", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113871498029586152417\">허정은</a>"] }
        ],
        summary: "다양한 한식 메뉴를 깔끔하고 맛있게 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["정갈하고 맛있는 밑반찬", "바삭한 생선구이", "다양한 한식 메뉴"],
        tips: ["제육볶음과 김치찌개를 추천합니다", "생선구이의 바삭함을 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.sikgaekphuquoc.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16830944617223163816", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9D%EA%B0%9D+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "푸꾸옥 한식당 JMT": {
        photos: [],
        placeId: "ChIJ8VdcLwsfCDER9L60Asi2ANc",
        placePhotos: [
            { photoReference: "AWCwydjLtXc3PYP1xsA-lP_9YUVcmuEEXZb8TXlhQ-EszWiAbwUlLGnG9pfR8aOE7A5H3nnczZSdW1dpp11oFdmVGFdEHL_YAKOr7hC1BDIQXVV6eJBAqOiaDO1FGwZsaQGPfuVmDr2IzYyoq6G7eX0t1Umkxrgw_cq4rDDK8llGNXKEof01tyFgVqzxwDQ_h_NR_ouauSiwmyevOlMAnjLTZrMGkR_TbWewwa0vGXi1_Y0KPCxRjPpnYQ3ndDWQmBQ8KBQ1NpS2HCx7oRroG7mDgWgLV-R49Q2rO_wZtwNBnCZrlaj9ZPwIjk3ASkSXigBTqcnaPV5EHZF87c77Qo1e8jV7zykgd2dPXQ_ZoX4mpSv6sAtZcDnf2WYbBxbtHs0stFPtMWvKSBwByCLLukGYWfFpBWDRr-OX5RWYkAzg9jT7Q8rtMoMh1ve6cHOzCQxp", width: 2568, height: 1926, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105282159644071271962\">푸꾸옥 한식당 JMT (카톡아이디: jmtpq) 빈펄단지내 픽업 가능</a>"] },
            { photoReference: "AWCwydjcWFod-8KxmP_H_L_DmdefNSZN7S7b2Y5ldFocNeUqwxtMMdZhvkcWUDLX04CUidAVIla934VhOO0RzqO10SDq3HlhoyNzZ4akU9X8e0cWl7woBffW7PmjqJecgwEyHs4P2qTreBCn0_Qq0_Ev7DofiBkY2kPm9ZYVlNZFZWh3eXH6ZudOEuxlYkGYo29O8jX2N7M4t-L-dx1nZEB9qqOV6h30gc-x6TipSz4J_avIz22XsDIh82MPUh-nwi5WxxdWcVE3NTJYqfFUyWD_mNuypa4C9dbt3vSGuYta2ldcNjJHEmxeTBE5AeI9ub0ZJP_BlqrPKQgovk0C6BQnA767hU8nx_VZCrspZ1TqGtmcUrgam-yo41EfyWDhENfCI_GV42hlHKbPjTv9sRnF4dkdM0peZxVTjJc3UR-AaO6dKH3OPIsPP_FmMiwk07JN", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105282159644071271962\">푸꾸옥 한식당 JMT (카톡아이디: jmtpq) 빈펄단지내 픽업 가능</a>"] },
            { photoReference: "AWCwydiyejQwYA8uTwC-nhwoPvwYmRIxR1HPoyDu-nROtLGa6gq79lPjedKnao6d3D8y1yS3e1kWMyAnRD9b30Gpaf-tNW5kxqMaOv0bblPn1sUd5TMwI_1JdzQWros5bZE7EYvi2cCcSbnDfDOmHPs6VFS4twVMy5JfHFxGsU2lEDY4wYE5JnVFEgQ3P4HCIHFPEoagUp8zFlacsFl71Fg-0GwIePAbfSjI7_16KGGuwhtVgr-KOjejHyGgEJqqZy_IQtXa53-veq1ZZl4kBpr1Kd8mMtdGS79FYKzSZpevG50SywVx6GNC9VESvXNR0KCu7RbnYmYoJwQXVXZlURf318dxTZdrh4m1qtQr1oOMX8KcCohagL9QPCBH085VsZDTuW1M1-J4fNBugKJvqJ-ZSXMoRxFFAa0JqRfEO1KCWoomrObCTwCbV9KYSrFFTA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109716273264627600800\">Jeffrey Yeap</a>"] },
            { photoReference: "AWCwydjHVD8dl_4zmp2wjjAfbpt74mXPLZrO4b-FU4yj4rF43ayng5JcooX56FHjG7IPsdOhJBmkDas6U0p0aLXv_8uGITF_8h47lRimTrByBSIWUuFGrX3UQsoomSvlnlx4YGjpyfWyGD61n5Ykafb5eV7QiP5GOepZwpKob3X-kvIBN_W8F-ycobJzRnwzvZBMObwd8NluqG98na7MZ7dEnpOG_PHE2vIBIQIh3tYGTy-W5v0iXXdvVFCIYiKC9hLkErCxfyDRznLCXEXAz8deXMvH9k5U3NH1wBp3Pbg7GvCv33Rp2yNslTD1inALIBwJQsAvpdUAcOSKBYSpASXwm7UF5VR4wkvoHotpiqml4u36BCE2yKaHG5NmbLy9zqPr72dpgbt0Rfc6cVwfNmP8lYx8jzwwugPrkvHsWIvCC5jo-F-ue9RBZSbqEtYpFHDv", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113634936983891719910\">눌짱</a>"] },
            { photoReference: "AWCwydiLI0aS397vLeUPtkM0GF10alwM8-m2_30AVnjZTBAT_ScBCw6ont9KQGKh4GblgEKhO1mmp6TYPHJsKvRDQ5SqEzR3VeM3vXcEK10fM6XRB0v1sp6hzMOx94GH8rDUgyb58JwpIaMpCXunLueaN_p7GeuHAaKAQjyD85HhSHgpIMVWh8ZASC5eDHh6kr6nNd0Y4-xOnEuL84zAtdnnwu65wU8bOfwBT0CwAr1_Qa4FeEEZ4aevf_vu8TCSZ1NVdL12YWGZJh-P4W7KBz5MaTrN3mXDojmM2vs77RhD7iRbHynRWJThfO7KkUm8vZ_pNhIOwNmKrrCGkjp1WtNrLuSYYhxTjBLp64BaDQBUHWGLf__tGnyLERP14cZKooTgWzGIC0E8VnhCctaGUeb8CrHQ1T3C71wp50qPJsJuXuAErYtai-CC3gUjtqWs9GMh", width: 4000, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101916524371138405033\">Romanceviettv 낭만비엣 (올리브영컨설팅)</a>"] }
        ],
        summary: "합리적인 가격과 청결한 환경을 갖춘 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["무한 리필되는 다양한 밑반찬", "한국어 소통이 가능한 친절한 직원"],
        tips: ["그랜드월드 방문 시 방문을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국식 바비큐", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15492583688309620468", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%95%9C%EC%8B%9D%EB%8B%B9+JMT+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "PHU QUOC GARDEN BBQ (푸꾸옥가든 & 그늘집)": {
        photos: [],
        placeId: "ChIJpUNHHwCTpzERd8LSp7WKkjk",
        placePhotos: [
            { photoReference: "AWCwydiGT1UiDoQJkuCu-ETql4P21P2soLkl5GUQefJseiO8pgU2DyQ2QHuYW1QZ79T-cQa69Qe5lHiQqr0xn8SE1BVlFyzxtEWZWeEd0j4KNESbFBxiwQxxnsuhVD5RSaTipXDCLeEeVrB1eev0BPQD25plXkLFfb347eg_6yXeZEWruQUNATqed65nWTHU7tLLii8jrTrefymOWXiArKp8cqAUyDfXL1sG5LFHiJY5yIABJbekUX3Emkz5n7Qt9d4GYQQ8th-md44H7csdVIexKaY8qGr3KMTvwT3ChFKNlrXp_v_z8vwp0-5_b-6dbMky4qmKGdPqv3o408lBkfBXH8Q9zOO_Xp1I19GZ1n8yQxf2OxXZPIwKUqg0DZwfZJRKlNHXQGuNcyUFm_9b_xwZ92h_Eb6_uGirLLehsOM44YqsG2PkTmJEIzkFUZ4Y-pr8", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117584483174625246813\">원민수</a>"] },
            { photoReference: "AWCwydgmIQP5_Xifbf2ry3HoBFfBMOg9yROhPgfMqyxUNTO3CKwsi-tbYD0mzP9LRk5IpUoFykjn4qrlmH0f2Hgq1C-11j9adS_e3PJSUhdWwPMx6qzztttnUBIH-2ifjJaRYOy4WRB0QS12-Zbc-rol2bHzVKc7BIqqHyRGqFIVciFcyo8wvxBBiq2yjXuvtMV_zQrJP39BUlzzEFsUz6dx-ziEkur2CQW8i17zb2t2wWgfhj56VjFPCD3sfNGXup1mGp9DV_YTKRJCO3OR30L-kCq7enF1wPCrVmCf1lHImmj0iVuloxCHfh4gf9hWDygWkcc0s6J5Ks5wqUx2LvF7EuUGOrTkxRgBIPDIGm4G2llr7XKIiXR9b6csJyq2DdWPRJF88l8bLIDg3ln1OL1KnfZe-j3SmpyrAFCccyXwDnRtxMo3PbDgBmFTZvIOBGio", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107286721188844284174\">PHU QUOC GARDEN BBQ (푸꾸옥가든 &amp; 그늘집)</a>"] },
            { photoReference: "AWCwydiSJsiXr6ACcoT_XfykyPyJywYywt0YOG0LpTWxq1Qs0ThTs2E05XGnmVMocXJTeilvNFrkA2J1W8jCKqwA1VmJCI0lga_CQY6wOrPdOEZ3RO2Zd0M3BGkRokYykfWKtFBL4ijO_5BNhXTLeYafDvIvBu6M--MzE42Mtm19QuDcVl1CU6p0DBJIl7-Hh4avQCA21Nwugt1sJq4SthnZCic4lnCENMkn1D17BSLrWWsNww-wk1eVj0RcYsMIiWZR9-quTVx6QFGKj41WEEiPVXBTWUwj9DYXI1Q-WY2sYHX-1IcCw9rDCqM4oaFcCbAfrNf5jR8puBsQ5AG6KDu2PLCQRad-3i_LwcAWhZ1GLCJXHZ6KdA_nJpewk-0nsdZJNLkUu4o7lrwXLYtc7lPkqUREWNVqAs-7oRpn0e0n0U-p_diIOyoLvgd9xWw_BMUP", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111551788570999272926\">Miran Kim</a>"] },
            { photoReference: "AWCwydi2a2lxxkYwBJMuc9hymDtsCDco24om47itmoymbj0yZSvUV02hJe-mnmSy0zL76pYeac0kCerRytduqK5fhE8ZiiOPPW3RNrIT_ZFCfbmob9kmExO0E66j1yiR8a5mwn-9l4rhAJihG_vb905CMx-DhZQC3Rh4Tws_wc3fXazoIf4uF5sYck27KrZG7Bz8n4RRJ1-PIWWtpib9mNEq-SqJRdnsnWb-GJxufkvJWofV_z9OTPUNmr1CXi01S2VKCvBTufKjphbTucQnykhqz_XuOwVV7piK0Ynzdxkg4sYgaA7kNGCVSDWgV9Y0ECY7rvRViiMR1erkuMvRDZ7oE30_4MtJdNGLjzeV0cUp-VNdriMP-fbR8Oz8Bk01-nig_9NPSbuozg-ZHT1Wdb8dqlo6icrRYs-cWOoHF2ZsXSngz_wiFiuxXDV8uoMsxJ3B", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118440354308260094413\">Dong gun Lee</a>"] },
            { photoReference: "AWCwydhDkcKjIRKSH6lUL_wOducvqBWLUOkZxYzuLd5GxEC9NRLl2L5X2cUfezx8V2g7Q94eNqTLjACNfmD5GVqOy9a7o0od4Ajhp6z7OWOCmh59lb1q3lUxwM3PapQxmj15whFQH_YUyK-_day_HFEPmKq_is9Lw2w1IDCSE70LzqgSPgzR8mW9XM4q17XPbS3FZXj9mKmEgx1h2UD-fZs6rG7rjkxQsVq7GgY7opQ29okHr9tXlHz7FvcWkkyfpMFxp7io6hJuiLgtJGlwmolHeWhLpzymDETWBJJwYb71uD7oXbQPB1nae4TBKBOzlL4Bd8PiowrrycUAWsdn-zb3LTzwLs_Nc36ZUO2WRAZkJkazyk9jB8dHNlkYvrA6Vv5jtXEtjMPiE9aZgYUR287M4n2n99lvBj9GY-pHw6AasD1RMltI3Xft_fM01ydWT22K", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107002922225790159990\">김해리</a>"] }
        ],
        summary: "푸짐한 밑반찬과 맛있는 삼겹살을 즐길 수 있는 현지 한식 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["맛있는 삼겹살과 꼬들살", "푸짐한 밑반찬과 된장찌개", "친절한 서비스"],
        tips: ["카카오톡으로 미리 예약하면 좋은 자리로 안내받을 수 있습니다", "삼겹살과 함께 꼬들살을 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "묵은지 삼겹살", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4148530719570969207", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=PHU+QUOC+GARDEN+BBQ+%28%ED%91%B8%EA%BE%B8%EC%98%A5%EA%B0%80%EB%93%A0+%26+%EA%B7%B8%EB%8A%98%EC%A7%91%29+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "한식당 서기포차 SEOK2 POCHA": {
        photos: [],
        placeId: "ChIJledFIpqNpzERmahVON4ruog",
        placePhotos: [
            { photoReference: "AWCwydj_xUE16AJ5Po4ChEqpU6a61dZYD9x8N1N0hf9MKqrno2dQUGtiyyogxrHjc4IYVi6TxehKl0ZlikRrczem9RH95KcKiSoEhqfx1PNQ0PE0aqrJLgjQ7wH1GQetHtwm2gdySr5bIT7QdqOam0uHDHb1Fr_xACsQvlsgWjZnSAFl9PzRVLlSBHlTCFkUdAhP3QrGqZ0dxlkNBt9Y30KYEkY8AEhJXAtGZclPHVg0zSPOwH7sArjB_fGe7HBNfSLNNZkOiTV0gXLRkYqcmVz3ZCnK48lok9hmAY85uojoykAN16dswa1HCY7-LdNuM9dqlKQ5gtr72sLLLZ7DGNtsf3HClAi8YPshD-N5jgv3RWajabhmXhIdZK77L1UNXmZjXXsyNecGhlUFII6h5o8L1zmkR84odk02cGfJdJBWVj8jYwxmVKnGUN__uunbVFt2", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117691878158152174460\">한식당 서기포차 SEOK2 POCHA - Quán Nhậu Hàn Quốc</a>"] },
            { photoReference: "AWCwydi3DCGdS53wk83Dzi1h2G2KEsfrv2hz8DEFBYAS3Cb3vF0Sip-OOZRVMTelTsAjACO7TdamfrnVGUjcPHU1Jw-4RRqZp5TbCFu29Mx14zOmyVQZy5jx_350u26o_bKn3bCnzMtOjoBkHIMQgD42FyyBf2pelg83D1tRzPEmVaeMST-MGKyW9K_O-UbeqHtTsO1zRO_Kw_6JH7IppNBjrCfu-NgLwSr3HFdasDz3m8FHEq304s2xsCVWCNJcp3RhEdkl9wSwb8FDOkWVRflsAgRSJg-tCbOgCGrOMrj7oE5fGdF0tymPzI_-FsATUi8sIXi1Y93KTIqE8UGoT711Wleylp2Z9Ic1FYMiO2nkZfPyFGxaEfGY9dYYa4QGhaxxrdAvhRHD9QE7DMx-Ft7vMejK3l5IXZj6QPnnDhL-rRShMr6bLlNrNlQY14iwYQ", width: 1280, height: 1020, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117691878158152174460\">한식당 서기포차 SEOK2 POCHA - Quán Nhậu Hàn Quốc</a>"] },
            { photoReference: "AWCwydg-wxrrovL-phV0OTBj2hMvHElLBurudFueoSuprCP-gSgBM6oMET4Uv9ohHLjuK7xKjxfhdNSAS9oFR0kTyimHPTbrU8287jKjwNYeaOHp-Ihn5OxXGjaGC7925zps8UvFA7RRCDNLYMyKsVYRFKVOLLRa9sMJV-40nxobxa_bIPy3UPCxT17AIS6hf7tVMk40_AB5TZ6aU9DDNOCcaP6Tti1TWQJAeZET7C2BNNKfmfoCJ4Ve52p6crHDWH-RarArDTXAMqj9J5IKAM3f9uo_pbERkPV1HBFqxDLxhrel6Y-MiC9XAIcSb0jdpvUP_l1itFtjM9HiNerCuz4yoQZqoVKOWGj-3Mq5kGFcbubxI4BEF3D9ZkRDXC1erSJoUJiUTAoBq2Uwp5YZbAorxyOYvgYiPkRpq2CDak-J68ii7nf6hhzK2Baa0BQZQA", width: 2560, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117885986254985909549\">Nguyên Huỳnh</a>"] },
            { photoReference: "AWCwydjs2nHe_vy4GkVxZRSqDKoclcPJFFbNuqf-B4a1qpalQTfgqi6ZGOYopy9v0hZ53ZQuWpw7_Un6IOCGhp5e_BTEGDJG3glwf03Jjv7xsb9IEzji-0jrEheJrABjEHm5_kUdwVDDAITnoG7dSS8ZBcKrb3Nxu6CfKZijbEjOgAmAsHr3t31-1ypJafpJ9JcKZoHx7D1UIKnVT5RAHmskR__lz8rUbZuwcG_lFR_Keb8Ze2-KW2M1YrgSRcoQzfIb6oydKg5JI-P_sqHfHmkSm0f9ENVunUlKPVu9XBMVJYKH1e7dL_llE60MFt1qLmvlXFdgRXl1DyCiMecn2cb4jmrfAEbL85Irl_OV0vEhyrgUL1bbFoHPNI3qdXtiA2FN7UHUYixtF15WELXhFSRXl8uGC2kXZm5y9aEePuAdlSIOXq1sko4ndRfwdAqZjRO7", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108175456578739284331\">oanh13ta teachingmethodology2013</a>"] },
            { photoReference: "AWCwydhpuTDx9CRXkHz845GS6D7M1c5jMEVmxOTIQBTh9RRPIks8EQKldtttv-TIPzy98jckT1_asDtFeYqcAQJBaEJwN4OJQaneMj5s9q5sqCtTlFicpRedl4XmDTBKDwg3cWodyj1i7fnnP4rSSEQu-Q6LSGqtefJFPXHWJ3ki80JMy0vUSBaYHRz8Gazm2utFqwszn9vMIvaVC6_SJnGQPLeVdACNg6MYrBudJemMKp2qRRBnNkA3iToFUt2qFL3okMqfHL-4Ko77G3VtgluCGK40nsyKBVq4VIuvzYmDuR46nTqQXjD996GsN6xpGbK-ANIcd9EBrlwmBmdfvhD2RIIwLSPHe53MVqnt1RHcSca9OBdVKXeydM12LSukfq_diLh4nLzLJtGfFmcTtQ8mLbzlQPno3gBKuvRPcB5R8kFmueMkqEWjQUL_0g-G0g", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114162282732227856324\">로빈</a>"] }
        ],
        summary: "높은 평점과 재방문율을 자랑하는 푸꾸옥의 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["뛰어난 음식 맛", "무료 요거트 디저트 제공"],
        tips: ["방문 시 무료로 제공되는 요거트를 꼭 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "검증된 맛", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오전 2:00; 화요일: 오전 10:00 ~ 오전 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9852235368254253209", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%9C%EC%8B%9D%EB%8B%B9+%EC%84%9C%EA%B8%B0%ED%8F%AC%EC%B0%A8+SEOK2+POCHA+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "선셋분식 (Sunset bunsik)": {
        photos: [],
        placeId: "ChIJk-2CcACXpzERjAdWD6NvD-w",
        placePhotos: [
            { photoReference: "AWCwydh33y933UVkSYob0Ibc5WfQ8UxAIp-2riMUs4kBIH85iQUsiucKi7D3CAW0DtZiVeiSG056DRN9h_Z6rWdNFEtttLp8YjdAvQR7IO4r7niFQYpM0Swnnl0KVBqs3bDqdg-WNw7C2Uhm2vz-RDjR6Sg4dTV5aWQbhsir1f5mZJw36VXq6JDQII1pebaIm29i-DOB_FWMzKc0Vwpiry-EjsxniHSY9TfY8P4iGUfrV4S0RFibA8Ukhm7eu7ADpp8Ge8Yk2yInPohT8j7-zGylJkopC8wBmTZv5sUBL4GNIQgtv9fCj07bm2KL0AoAxhqRnndDgAZMw-tTNLJqbX_xuiMqn8-inCeRBmJhQ380bTPz2hH7k8fUBFpfnwA4dovLHt7rPdwCtvf1AZb6QF6vRzcDR5l5yn8db3pL5BdF3Cw5trg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104543052415400061602\">Sunset bunsik (선셋분식)</a>"] },
            { photoReference: "AWCwydiFwfuKhv3pHL3BZjQchwbZiOZSv9bonWRPeLk1wl_bARIViO1iwxHg9-iFrcquAsN_tPlkMAOcw2NSV_Ntx0JzNA-63UOjaEULIlBUEUy_XEAmPHHdYXM1bgF59q23YkF1d8iDhF70hsFIW3Q7avcTawyCyM6SDV5YoEDVWyFz7R6JRdSltpVZR-N0ZhfnP5czj-vy-zFNauPx9u4w8QMmxg2iJJE_XSTMHvROubsOOvaqpjCBhXiaAqjZdT54LnVhLBeZv6EOuy0i65LIakX6VRP8psfpayuPG9KT_lDHSmoTM65WRC_cD8Rvz1WlR-pREckauQrMYrxvljDx1-24PEbUTF9RKqDoj9t83g97Q0yqU9Umni-rnZU2j4ismkaIPd_k2PrJuEfmcXI9NHFo-MWd_5AsAQQ9v730NW6ELn5n", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104543052415400061602\">Sunset bunsik (선셋분식)</a>"] },
            { photoReference: "AWCwydgDRX6kwzqArFH7y7picfNjhBDj7OfnYU_FZu5AmbV2-AMZ8SAM9CjRYMUIS5yhLAprn4izclcvPB2hm9KxtgCWKueOeb6ouIvEhXWlbVgp6vQwasURFSAr2UA-9YxZeZ8Uml_7l-ndvtkSrXaMKrN19pSbomSDmfTFIqNDai4eMrbbvC4PleQYMbUWJzq2-S14kEhT5gGTzRH8eyKTpSP78aJGpzMU5hhQ6piezUHBkorkCnvq5HVa2M2wUsEeXDl04IByuaS-je7cq225OO-vxFTwqPm1saqznGjIPBgu4xjWz88NOMXco5z4gOg-mNYXHE9cVINhjs2bjHIQekxKr7J2RLSAO6eKcqjo9YpFzO90Nu__tOaiD2Go5PB6X8wHfroFmzjQGiUoVUn3EQWHAE-Lft15-oi1Fl-AzmTyIAnDtsmVhJ4fQJBdODjF", width: 1440, height: 877, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101209984262418463794\">huyền thanh</a>"] },
            { photoReference: "AWCwydi5GNIehY5mVtHisFCYQqk6lDYe07CNcVvuLEAbD-zjmAYRBZ1TYLDuhw4mL6KRazaGO9tws7ZnGTT6TL7NTfg4LEuh5A-gSWD1m2092SB5Znts12IXtKta-d1yzTCQH8Yk-I-CMxX9bt6zAARcOhwfvzIQRjF19LVmpQ_NeWcCZl5h5D16sJALLvn2StMSqkPmdhe8xOTEc1_ui2e9lZxd_Tkgk4fT0L2JvFA8TGbS637q_PzLrPliB74bFGwqghKSLA86EwDS5lSqegW_WxPfroEYKK3w89bYi3K8tMNczLV86bf0AWTQ-lL1kDTUVaBQttFZLFdvWqy1I36kQZ-vbHMWGf2o0WxsSqv4QLVxsWvmq30zAFHJNDcVh9EGxRC6PkiBBmtb_ha9gDTEyo9viwqZqPPG7QMtMvMRAgGympV6xhflk8FaQGaJEa_i", width: 3767, height: 2823, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117028709318909515311\">미미</a>"] },
            { photoReference: "AWCwydiKkALGKXTVyxwF2BICP8TnqXuPpQ5TbpmG4sRIMD7swj3XBNkYSO_OjBNPgFpNCPRwcgb7cjI9Jy-W-v5cTPnbYqAsQotxwpvV9LiWooJuS3qwIfavVLzaDcFPdtxtixxy6NJydBe5LeYXXmVCEqbQDcKFzZP3MAI29XnuTipObkiNa0nyrHGPYQWEVaQvcZ91ieXcqL06cPWiHEdjjCHBW4UCT_YM-RQWRKUOXwTk9D_ykzQWrZVXpzHEzXF5OuxXUjHzCdLCaGHahZb-MF3ZXF_SxQFXCMGd3lLIcRPmMaqW0LZ5EURlH-8E3f7eIoS43w30r1oD6GnsyuvMeZxfk9qReJMAGutKEvI79JqzfHCzqmX4HOs6M2H8nnOIlLPV5QRQzepjhEuEsgnuryvsCVslxT91pAfP_KciaQ0BCfpaYUJuY1yUxsdxVp5j", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108079891414598285475\">장윤호</a>"] }
        ],
        summary: "김밥과 떡볶이 등 분식 메뉴가 맛있는 친절한 식당입니다.",
        updatedAt: "2026-08-14",
        highlights: ["매콤하고 맛있는 떡볶이", "맛있는 김밥", "친절한 서비스"],
        tips: ["선셋 타운 관광 중 간단히 식사하기 좋습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "분식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17009937063729301388", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%A0%EC%85%8B%EB%B6%84%EC%8B%9D+%28Sunset+bunsik%29+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "바바바 재패니즈": {
        photos: [],
        placeId: "ChIJd6oRNZeNpzERpu1_i1UmoBw",
        placePhotos: [
            { photoReference: "AWCwydhq-xBdpWhQoNAW9WBvfpEaQOa68Yah5BOnDNbQxTZ2vdWzosAPLkJGwiI7Ca7cSP0e2nqFwTy8swYzQhfqw_3NuIbVZ8iPzelSYuQQWXPT16PzoY-Ef5itPU3qDP17wduemnie7PkP6o4mHFxBQXSkoldCj2NKQ4yjVCnnL7hGlx7mndkK3hkY_aNwn0aNCwtFPUX0hMLjUiQaFetyIVVPUsSzOUQdMAmj2QXfUsi7oS3kFhdxO3m2ogVj9N_n9v0UtNBeQbx9DZXE-5Wh_DKj2Ygqc2fMFGJxYGHotVZcx_gq7ciMYshaYzR6q4dtyM_oFCu0852svkNwKfNWJgVCH2HVeRJumwuXlL8q6TvzGDpbec6axrlMrG7k-43NTr122ofGKYGdTD_-Bu7HWe-NG9JZ5t95Y3lyycEIi06rcDuDbNTvDjZdQmEpNGIu", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101607942427342156431\">Bababa Japanese Phú Quốc</a>"] },
            { photoReference: "AWCwydhw0SVQmW-Czt2ckgITmTvDkuYe8JLXcM9t7XIsH29ZV17tcdQRL1gPfTsu7S1SDWy77hdkcscCIkN2LwrfurXO29szDgAd3tHbN_PzKw7bgRgCuj-4xx9URICzO35Jyc6RjxBKcmyKCWXg7wiwocRJwhmWFRIuCTDqfXg_pbL7AmUJdd4xEWUOoBl81uAFDJA1HteaFW2KOkK2F5NWPQ4RdCUYEfN3GuP2XJ_m9-ic6kEgCT66x8vwbfV2z5gMIt-4NjFz2Y-U4sFtm3dWTprnqxccdNaloBOAD1a_B9utN02JoUWL-rIMip_sL0-S7vmXbJN6-fkOvmQyC-2IWs8X3v32R6ae0XovJ5NT7h4unKJN9dtzwhdjisw2bzvuOj7Vj9anas5Rv6gWfDGCgBE23LliAZ_L2_ma5vKU-CcqKCiVB5V4IYUq8sUfd6J_", width: 4800, height: 3193, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101607942427342156431\">Bababa Japanese Phú Quốc</a>"] },
            { photoReference: "AWCwydjzWqvCMK9fihOI1R-kHu7EUbGVzZmpxQQTD88X2VMWCUsFITT1JLB14_Yt_1uQ2mZm7C_KcQbyfMZerspGXw71whu7PKxuLalXvJ9rDAUPafMoVImrCFzhcsO-RFtlJKuoUEiOsm9gEbxPeiQQTCFVvXJmdMk8r0lJlXrg0pSV0TXBMSTESc6Z5zLal1T5WP-avdyHHD7xErxuDNLbH03NrzV5TS1wMuVuPeHtPLHsDSisTzAop0R_qAUA3KjGfvlWAgfNNE5zbhIfKzXsrDsaFVDexKqscEsUY3FXr6ZWU5AKjYu6uCCqF5tUNtMNroCMzaE_NsJupHGv39gW-wM-Z8B0e7c8KFKd1ZMqrat83dREu4782N3G02LFDuiiHo81AaWxDkB2rPm0muxSG1k60kb9jatnpKtkqGbYHneXBaulMBqpzttIwTXxzg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104342552464570819214\">Thảo Ty LÊ</a>"] },
            { photoReference: "AWCwydhDikXrZAhN-eu7j8DfbQ4E-LRRbxCTSUZsxP53hDZXUtcKoI3Yh2ewcUfj3f01hhPK8VgFDtgLnJxwo3Tl4yk-GizBBsFis6jRUx7qSHodZ9GziZtokijfwmmbtIa_fHlzYAfL4g0NguRYl3fR_Zg9zo2ChONJvYMde1OxiMdTcJ4M0o5F00dgBsOpcV1tncjflQpd0BfcAgmRL4lNXJQyCCeQFEQYdBSg09VR10Y78vCgkpqULhoAiXGMYfDBLERY5a7EsGqeGOq9BUuppca-kW3Ts5IhqgtxgDVsnfGuI67FQ4mGdWifywCtQnU6DC9oguJg8ZfNtldmCKBrvM4kYBNJdNB30XMxSaqHz-erbTkbCqlYnF8FpNRz6QgNIIUMVv_x8wKfGcnjnRZOItESDwM2dvJhDUb1BnwhMdjaxubuavUdwBpQVVWNEt-I", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118258487494683561099\">Elena Poliakova</a>"] },
            { photoReference: "AWCwydhnSvkhF0FQLLAkcTIpZIsXlSQ390Zotqx4pxhTeXaVnBswyIbTrrxZ_ruOvwqPL2yuTtoeIgRfy7hh4kJT_num1g40ACE7ZqENV0Rlz7-6oMYRLDXQEZ5n2clHOwjUKVu1i0mNJZLqmJqYlqOrnNMwFsxOdkAN4O1eG1M-1IiHcaDVMizyl7AJDpKA0rb-ZADhIx4sqA7P1_LKjznJmrYP60w1FGkqdhXFSAl2cjI_-OUQNUwAJxt-OhVepwdaDHSJtRFAWTUu_9zCn1LlUK4yZlOBwAsenoeDIyjxhfRt34zn9voGxMvq2SP-ka4gScTrWULTmnBcdwWpKYgWdkuCFBlOot00je7tHhZ2XEWZmGC7xFMdpZWCyJStsHhbVvx_2L4kzTA_WHu7yTsTKl8R2OjWEN7curvnMGmTFrsgxMR_a6_kxdO_vPmfxUQO", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103008065897778601978\">Nattapon jongman</a>"] }
        ],
        summary: "현대적이고 고급스러운 분위기에서 정교한 일본 요리를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["현대적이고 아늑한 일본식 인테리어", "프라이빗하고 조용한 식사 환경"],
        tips: ["해산물 요리 대신 색다른 일본 요리를 원할 때 방문하기 좋습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~10:00; 화요일: 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://bababaphuquoc.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2062690778190179750", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EB%B0%94%EB%B0%94+%EC%9E%AC%ED%8C%A8%EB%8B%88%EC%A6%88+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스시 히로코": {
        photos: [],
        placeId: "ChIJw6oxiDCNpzERNa3t3lna4UI",
        placePhotos: [
            { photoReference: "AWCwydizwekVW06N8ZFokJ6NeSlQ1qaUXRItNX6ZHZDEEGnbAD32-pTdHTvDVX2o1UdwZ0W6WYS3ZrRD9UYKPy4MeMK1XzI6z9kS10ZmHoee5QdauUZTJ1UWCjRZoD8x9On3hRTGla4iJxmuZzx5Y3Z-xJSUSE1lJfnQJdySKGs-oYlUFJqgtkOULVX_bcz3WFN6D6ULHRHpj3FKW7uN2lfBOmE9kfim2gyINSkMqA0xV7Uy02cE5dAmStzuL2DSKBMD-FedWkn4nhB42S89FEck7CKjlPx82bjFbso8LnUTqkTlDgtVMH3uF5rZzY4Az3oIYEPvWZy5a089nH8GDjMRxuKTwHu2A6IYZDUQI_PVTGSBJH5E-sDMStpSYofPMRx6hiDT3IY67GRWTR_MRksVR3vLzrhEyjmHoSYifKKBcYx2VE1ExjSg9dFIshNWOg", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110605597993977397866\">SUSHI HIROKO PHU QUOC</a>"] },
            { photoReference: "AWCwydjMteCpOC8n4FQqR59yUrFpXvqqZtkjtozMjGnUxIIojHgTB292VZs3r82xj39JYte1z8LZSOjG9V2LpxdSLPadJKXB7qS2rP1UxWp38VQDtPOxTIFidFc9EcDZnQ9YHw3jzGE3UlcPerNWGWjZr23VAcG-V-vVly9XQFuO0wnYPNGmrrMGSGN5GeSqexHpmrFz-8XKZD4-LpYUCldAWwOMRtIAN2s1croOcekmVqPHG1Ei6D2LYZx5WET7LF8A2gj1Euu0SvTUqVDL2bHy5wOr8mb7tnZn9P8wxvp1bK_pYmC8UijzBpuUPQ3CIwdo5SxjgNrK43LaobTVWT2ymmR98qUsjA1RBECCxtyk9kVlVV54mUPp8DNdM-5T8t9VVRIlsDc1iMybTIK7F2-a-uN4-swsCV_bzjKQWoBum0ewSTukb3ONvFTMmO72yuQ8", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110605597993977397866\">SUSHI HIROKO PHU QUOC</a>"] },
            { photoReference: "AWCwydjQzQu13qpxJJmhs2aGTi2LqU9SgjXwr2ZzPQDmN3DeXIYz814ATQLF5MyQ6kWA6NgsexTFDnbp6FAT3G2prK-cuK3OjbFRpR8g6gdSWLeX-vWM2ZfRqEQgWzRytytW9iI0SEdf4jlB7kkZYXvRhoW5MSfUkciU1QmQ_53zARY_SomW_ri7vV-COrrco0O4Pz79Yo7Q5_agBNlxp_FW1w-E6KLyB0CqM66QLJPaXVbQOXLfQ7ZVDW1SEjU0pH05T-arcth1sat-IRoM_m2u7_8CsaQulat0DgpWHJxPpXTLdnCg0GkxrWP6qier8U6vSJvoqe9N7ARbP6IP1VkMuxrBF9dvYMn3uKMKhwSQh5Ii9chsBBQNX2EzOr2EPmDAVDgngRRxrAtgcU5CLwSkgzCC4XrdAQvHsfgy0sji9g9zUFjKHIEuDnot8e39uBsh", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100885280376923596601\">Phương Trinh</a>"] },
            { photoReference: "AWCwydgMssc9uoKYJxxXkH_855cKuy4cvpMGoIJtrFC77byMdPZ4D2nXYSoAwpdpZtx9fmvsAdUHTmgoKgnhxEbJV57lLRE-vxqUTWw13PCAwTdt4dKnx12DKup90u0HwWhEBHPLZ4SbTNQQv3XwWdUtKH1FDL-fcNqTZd6fE6tTM1btb6ni0XhI-2NP3VNA06N3w4_9kapW9AZqsDMt2RgHR-Afp6BqfEA5Uv4b-Ads5dh_o6RiPmq-l6fhmNgZplm2FLXNsOsnaM1XgwjQgbSZ1eT_jUTv1431Y4iE4NgWhptPlAs6XupMLLaFq-mTqBSUGa34T5UVUEfmzfbYWa48b-QJUsqZYpCnAXDeCX7epRZcalnsC6G_zKTX3N1EOK1xJpSri1Rokyjfw92CBH_7QUHpiS9eo47RED5K1yRu2CxtigoACjdWcdth8VR1NIvQ", width: 1276, height: 718, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115377372951985792586\">Thu Tran</a>"] },
            { photoReference: "AWCwydilUAp51egMc2BE5orEk8JtRX37OWlxqsm5ORMolENbx6BWP064nbNAuuIAHcZgma1ymJLVAyk5EAOPWpekpcRLctnxMU-XpzXpmdEdW9VCLQHk1PkVitNxgDlZG9kB7A0sLUn2JjlzELCpHIHKfdLoK8Ou15uGcysavxtJUgKa3yUxQKWcjLiznbG9sFUc8tINKE8kU6WBvHJpHk7HvE8RGGKBR4hIUSDBtZCQO4-EQ-77V-Yr_JscWy8bLlWI0h9SYxAlRU9Bw-LIZv3MLyPkB1YDuaIgjXt_28GzMM74VZpOYVUEq64aQdBpgocT3jMlKWJrEkmeYfbGlYobrnXUPMCxjtPUu5_VpheHd3AvJhuwZnWt9xst9wtXM-CoyqEAqydjZEzdvOmlOeODMM3bYcdvYsMzwyYkquiScRPuGAg4BLosDH9lcrUdMREn", width: 1108, height: 1477, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115093995562446014635\">Nguyen Lucie</a>"] }
        ],
        summary: "합리적인 가격에 신선한 스시와 사시미를 즐길 수 있는 아늑한 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["신선한 사시미와 스시롤", "가성비 좋은 가격", "빠른 음식 제공"],
        tips: ["해초 샐러드를 꼭 드셔보세요", "아담하고 아늑한 분위기"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스시 및 사시미", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 4:00~10:00; 화요일: 오후 4:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4819373155790204213", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%8B%9C+%ED%9E%88%EB%A1%9C%EC%BD%94+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오쿠 리젠트 푸꾸옥": {
        photos: [],
        placeId: "ChIJxVBYE1OTpzEROwpG2oU8hb4",
        placePhotos: [
            { photoReference: "AWCwydikky5mgfiIixvpHljDI6JyoXxU5Jtn5CcweVBEFZC1IzJfU0OK0Ro1zSo3vgc1DYwVkCsYSBjNFqxwvYfk_JnIUtAa_Geo1PUM1DnSmAfozQ2gEZIvEeGt_nKCNft3ZHEptccEO4agmGI12Lomn0B2TxgCYiQ9YjTq7t-evybqL3bPXrZPoRyQRQtQ4NKjt300Zs_Ud8dsvVRMZPJK7GmTQqrdpryhsX6YybVKR14FpgxHQeVMAmMJXEH2MMOguufALbb0-yY_bhy2RpEtrZeH6PK1qvK1kcqy90ygus3PyoHlPbFWXos6ySBfcUXh03CPxZMvr9WxtQQ9X_H6fW0XM3XttiJC3uF-k3ejaykhr1vGJ70eH69tXWZIWVT3V0OqKup0HgxgO2D6Eqx8DOW9pKGwPdxpY0Ft7PVhX7F1IQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104531939803561827512\">Oku - Regent Phu Quoc</a>"] },
            { photoReference: "AWCwydgldMZQ4W-R2EOYA79aDbtBgD7u77GHxqUbdeJK-DmJNpgcyTlc3_tIErbHP0NWH5ViPBKZ7Z1ONW1zATxqMR8fABWzQzhcwaQ1laBaZh5FBvxamS4mfqJg6WxtaPrKv5OcQFmbPSBP1z7d8iiNuzmDbNSIAYDzdXWg_14xy0zYQ8cLkURNpefTZuyMyjxl5yCP45c-uev0ehndsJkg4Md0NZZ5rQtzJt7Tstk8BV3YgwGObTJO_uRd7vKLDAON-ejBUGJCaDHbv5is-K_pXpc0o-qam426gAp3tuW9xONDexIoOJ2EuadYLpPVyYNqmx4xd700KtstfgrgQv6mSj_0ovlnyecxv94JmjmTcz_Le-HoyLpKT31uCtKG7hoEESHQU_c4LIOLcUcSNvIjcGManmJXColFbNIJIL7ffC3E1hhzIyX_V9WFPB_HxK30", width: 1181, height: 787, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104531939803561827512\">Oku - Regent Phu Quoc</a>"] },
            { photoReference: "AWCwydjvISYWD3RIYpR08dGuyRd1U81TnuEnak9S-QB9MugHFHgWVINopVlc-J0lOWIyBcFHNoOoNozMg0bjIErOrJowRlQ0gVVoxSt1DD0hoEM-tPRX8CsTqw-WstS0wwWgkzWRKQzlOieSFcEA6plWENBhAZ6ZQjdRGOaEzZDSOS2egkwHnZvwr2RelkeyKBE5o-H6sx5U86eV7YLVwyxRvBLS3YcAeCMzqYTD5NLzFHtg6idCOoD3WudX4yhVyG2B4JjuZOqGSYmpEGmHT8tjbhDzUUO_iZ9RmQOsAtm9GPTLNEu69Gsdmi1CNamV6ZTEWEua9O4iA5eYei5vqNk-eIMZtBR9bKKrSQ2s--_ghO2KHAkqj4nnbyW4fkK-ZyIUcwai1fDCjl9g3AsdKIeBFNcSWidC3kM2b3EP9zVZW8gwaK6wM2sPdpjhDnRjbBxK", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104531939803561827512\">Oku - Regent Phu Quoc</a>"] },
            { photoReference: "AWCwydir7aczJOhTZTICPKLNKhKY3MAhzTp6KZFGA6etSHO58P0UXj9T3Fy8quROHtd9u0GVU3iBN6eXCAN_qF3ZE1BmkQdnUcNPB8HdWxKYMQMq9IfYWSvBNPGVJ4xuPEhpxEjg8LwSZyPFIDmwWa_u3sYzLeIkTYxnXO3avRN9DpufAhEGIVVKxrw-qM4AebMIxco1UoY6xS06gb9b0Ya8ODpIcVfqVJ0v-RuFYVoa6xhRD_BtlEL4Fhgd8Vos2TbNNiHWpt3Dq4BM0mMqxvckJfczaDFweIEYVFq2ugMzAgeiW3qCI31HpSjFSMfxof8ty8qKQFUPoA-CrsZ3upTwPiIevf4hC8ve5YNx-NzlC83wwOreXOcr606c_WdoKyokacZVPusjcO1-jqoX4XytfrsE597kX1tXgqWMxUNI5LYOWh7I8WAz748_MRfcSAPm", width: 900, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104531939803561827512\">Oku - Regent Phu Quoc</a>"] },
            { photoReference: "AWCwydivwx5db-YxuvUoq1g_AOYGIUdF0FpupvEMTYF7cySaycHPsct0bK0EBwQJXWOiTM0fMpy_DL9GWiaRohWidp-cn7xllQOTNZ0lCHaZgliYINjFqWHtbEshOL_SUkiQjP-HoWBqeh8mwW1w5FhvsqLEgGatoc-30M3YjldX-WpVmrw0RoBaRqTanhTJJA704J6ZtTCucGk8MlpYn9xtdHKKE37362i3eXPoJWnZ4XmNKDAklQQbXuFU_KRtbwmrhllGsfRpVpTqydFXSsu3-Y7nxwlPXUg94_ZD8CqUDhBVMbHh-4BqtsIJndSJsNZdlHwqjBT1fC0r5zAOm_5RWF0zu-8h2rgASP_6zgWbd5hpiqyOUmxMRznxja_PP21ycSX4wKmOOJKSgN5h4Rtk7jFTWYj2YIP-X8z7vnwzEHuHorTBRrAlXZj-4rcN1HcG", width: 1181, height: 886, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104531939803561827512\">Oku - Regent Phu Quoc</a>"] }
        ],
        summary: "특별한 날을 기념하기 좋은 고품격 오마카세 레스토랑입니다.",
        updatedAt: "2026-08-14",
        highlights: ["일본과 프랑스 퓨전 요리", "응안 셰프의 정성스러운 서비스", "기념일을 위한 특별한 이벤트 제공"],
        tips: ["셰프의 식재료 상황에 따라 메뉴가 변동될 수 있습니다", "해산물 외에 와규 등 다양한 식재료를 경험할 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "퓨전 오마카세", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://phuquoc.regenthotels.com/dining/oku", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13728445584699165243", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%BF%A0+%EB%A6%AC%EC%A0%A0%ED%8A%B8+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "무조 이자카야": {
        photos: [],
        placeId: "ChIJhWAIWhaNpzERmp6sDHOp3Nk",
        placePhotos: [
            { photoReference: "AWCwydhgKvkqBjwA3u0TxWPdVIhGVDZWxKtJSolt-QPPmjpikvSZRruE_tk4RLVilCNevIzo2lra9C9FG-IquXVyaGguuaZb0LhvrS7JjGaE4fMrI3wlF1d4UFFOOagQYef8997OndtE7gLhBnGAfuie-BJeSrxxWWcqPHNeWbAKGKv3fktRkIwfRDsMudKB1abNC7NF4FzoJJQZVMtpdWjy7XNocNtaNboeBmUfQsm5CBQVcZq_JxTtxgr2CKpP0CAP7M7fEadzPCW_u_B5LOpA2Ej0eNJ5NEz-fe2mEZlCrpvtcCGdtWcu-iYzqHbmCt0LSHvPNecfRc4Oo8F7Nq58d9dj556uhhsLY05HIAI9y6S-dDKxZy1tmbiWyXKCktupFxGJS0coh3n_AouA_qKABrfMOeLmzVpnckRTDjZuvZrP65_B67_B95VBfA1J-_om", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113176917046930411058\">MUJO - Phú Quốc Izakaya</a>"] },
            { photoReference: "AWCwydhcdO87NKJqwAghfLPz95LOkfgOGhpvxPF3w1rZymuchl85I82FbipfpqK5VJoJDysGZzw1hEQRZvAcqeckcx9FfGDt29ftuPco4ZyIo6CUhwXUHhiYE-LNuZjhiVaxFGCZieyMymm533WGJSsaBejAS0PZbykvN3andgmcnEXJ2Srl4QlGigMrWX7gl2c4sZhgMhn0fCThdEcCU7iIMeV3Jf2DekCUY93sZQ3gy0BpGy5QNyAbmtM7T6CO7gHT4OOqnTGxnJVtpp_lm-dmDgz-RuMTuzhUJwvdjKVUDZNfEyXDQ9gtJz9tHsfuiREvPDM531rlUQh0BzwkAxXL5qhL_8v3Baq6oG6UeCt_bgBveKOJ3A5zfRznPMJdi6NaS17wkMdtSHq60OHCXdcwnOZUkq35H5b6HHffhg-Aqi26bJ74TYkXTD8PV2ci6I3-", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100250591357965121604\">Дарья Андреева</a>"] },
            { photoReference: "AWCwydj93bQxxm-syaDcWyuzSCVTXQRiAGj1akFlQ740AVOvJRiTF6uTpLfcT5Foglbmv4Kp5K8mIpGMDL40OHDzD6ba5E0226XOOCYQjbIqZ1AIz-iyB2pmECoTKWQpD5M5FF6IeDjwy02hv2PW6JT-4kDl7XpfjP83pyKHmk1iawiMO37NW5c8nFjGRqfohcsv9nCM5N6rp9CWU1NAQl504F_miWyUA-ME-PdX8aK2ZNZrAeihTN6tBEYLD_uHh01iDYfkMuv-f6CDedIQepD7QnOjZBTpMCT_b64WU817CNBUNbA9QyuYbjJvM4hM907LNB-mDofuV-Riyq8q8jFyPLFuMIpFHjLdLJdcXUwDGmS5Brofxt41BajetLOImvj5iq79L2NPJW2aASADxl1zzvi6ozFajG-0b5lZXpSAObFCsNa1bS3mIjdH02q0Ug", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113176917046930411058\">MUJO - Phú Quốc Izakaya</a>"] },
            { photoReference: "AWCwydi6qsecYuuX1dcQ0S1qukZELN_d5a0EECw1weuh8d8lUM_aILEf27BXxQ0DasozkQG2vN-FaSmBzfaf_7RlxYyJRCbqYQl-0M67IZx4Dc4xTDAahDlo0Dvg0ib-kS5YXnQfmNtr00H6bXHASdv8ol8v7TB4lYQdKkK9-umQTWue6o9uiOF1I_CcmCdGRKbpNAUQ5XJL2HEXdGqrGLc_wAsVxnnDx8RY-Gv4plWdK-efwJBYN37LzKpKTwccjfWF0ZQDdZGBOfVVAIXdOATqZP-nS8b70ZozQ16T_3tm3a07T5tzK6wjckzJRQ3DgtQSDf3r9CLM4fYeGduOzZp0EOuZ7xdZIHTlni6u43dO_1MuHcLINiiHqh5DvbwRy1tnPNxD_St0u63lbTOjJ5t7bDX47ITBck9g_J0jHnMTtSA47rvWDhTxqazvOyXRGkDO", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108369148121581055629\">Teddy</a>"] },
            { photoReference: "AWCwydhk6yG3duAUB4D6gtqXNrxpYB1wCVPP91OQwHNFGmuHInBtL_9QoKQbMewYQWbrixbTeF4i5W3fvivkUjuOKJ1yAKZkhOeXVqeMiCudlJiA2of1UL5iUTyhmMpFkzbEFLR4g20FiQZfeQ6GnHGipOYe3YWGJoH_XDYMKYccqAdYMaXbXADqe5UCyF94WVQYxkMO0RvV9o055mYJEqKSn4TjaNwOg4s-29FBwu-mmOnZYotB3GG8cwhSpjV-m5GZLKvVcOYuvseAkluQ5EiMiJm4qE0OUM4YzJ7y7MASlgEeOVcKwcRPQsGcPtR8E_mBMzobwn-SxkoFNTKHtrInVEf_2mPIA1K9C648kx8NWdQhPRYYJP8a-0BOpofYQhtawSyikp9r0sfqMMKvWqe2CAniH0VAqc5uRTiOSK6QdvKDP5fRdSv2Xvivn7e40g", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103518047470589824916\">XSTANcheg</a>"] }
        ],
        summary: "신선한 해산물과 뛰어난 서비스로 호평받는 푸꾸옥의 스시 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["푸꾸옥 섬 최고의 스시", "신선한 해산물", "훌륭한 서비스"],
        tips: ["Tuyen 직원의 친절한 서비스를 경험해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스시", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~11:30; 화요일: 오후 5:00~11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15698608712705679002", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AC%B4%EC%A1%B0+%EC%9D%B4%EC%9E%90%EC%B9%B4%EC%95%BC+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "사랑 스시": {
        photos: [],
        placeId: "ChIJbSpxOl6MpzERPizhnSbnTwY",
        placePhotos: [
            { photoReference: "AWCwydhIqJUz8jQnJ_bsqsd3d-PgVNjhH5B7ELIQ9nG1JBY0_m4uL_T4v1JDni0rjZwIfTn2gfAifi3thMI8RXMgtOI8UnHYmxlpkvyl2pMV1hdLH8Ybs0eyKTfZUckI1rsjhbDmTgxnIydptxLADHpUBPoLA6NQF8j06dmDodr2VkSaAkvg6xJQXInmgqhbgtE6_r1f5W0OxvLEKOHQQr-IGR0xYRcMHXWT8Sy3B4mMDkfqYw-gcAQ8MXF-li-2wq3_qwQOjskx_gxCZFOfMzZuW15oKhrs8YIHApuIMlyRju_lF9DaR7WvpeeqZi6FtPAd0BJrqQ1X0SuUuDzAdS5jZSzz7yqQQKUCrCogJvdc9boi35Qvg2GJKyk7dtrkN6b66ogubTEScjJAscZvgXNNPAiMnO0vrAvJx4OiFx5Z2QNi0Z0X", width: 2786, height: 2956, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100656117882241769937\">Love Sushi</a>"] },
            { photoReference: "AWCwydiHsBQzr-6maJ7NUWo3ppMcIYNyMWfWjTr9IznhOK_nvdCCtEpBX3c6zjzxcpVikFfg9_0cmNKTLlEJEqdZV6tICSdsQBsMbVM6wzKLbwKqJjM8OAV2u32EzQwOGFJNSCis7bENQ13aAqPjUfEFUJsqm428ZB0NreGbr5XitXllsvu8Y6A2_y6pxqj0XSGX8EH896mNXqM91DZh9pYIjx7E0ySM3Nzv3hbTfPW6ImqFqLC1xjArViCJSfg9NjM_cbSGGDp_88pDVtjOSsAiDpetRvOeJLSHeqpWyvNTzFeAR31GErpKwPoyH9W_3pgEYr_vOIw7IWg5ONO0a7JCKShSLWdcXDsZbFHA8l1uZh9F2VLocGt1RSJhx11buZ9AXc-jMF1YFCCHQjGhkPiFw0ZzhxBiu_1GcHlpdD5Kp4yi4FXiegaemTQbAkzl1Q", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116833404890125040092\">지구여행자 K Earth Traveler K</a>"] },
            { photoReference: "AWCwydjY3CxjuRJnp0ck-BA_Q_bgY5oY44j_3WfP3KttO2g6cTx34IbbOzBHZLc3yi4z_L8NjeJC8rN0sUwsIaBbemIg5iENlalEo_9C-RYbu6NzsSmtnUs2licq4V7Quj-MoMoKTduVqct0zbeckKtsYKplU0Z6PqAsKRTWN7ckirnj_TuQyuL_HkGKCCx4ZfdB_bc_5mRL8Poqa0_Y-o9APc0p67vOISeN1IslJ1aALY8Cd5slbK2VVK7Rt6a_L0wMbjtOBkrUX8UjwmmM2e63T7dpzEI8JQo9djSm0eEOsSpG9BuETn8Ve-akBmI46WVI3x5cOfyPB3f1-Ri5TrD-cGdQK_qQnh4wHMGcIqZZapUDWT9egbEkegijRM4nyI_OD7JXWLj8IKPaLDJD-ciu-KhB9H4TxEInuTLcjVj0zF4YTYMqpbbIAJANV_G9HWY1", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115853790292762530188\">Alina Fathudinova</a>"] },
            { photoReference: "AWCwydiz6zfd2lVAICMmamqf0aoMYSA2eabzjvGImT9HWHIC_CamJM3EMJdX2pGdtnViC93ZS8zf-p7sKgDwmB2B6jNLd2nCOxKRTKE-KtJlCCTJ8SbCJOT_WmDrXRU20P5YNNWD0FMUjPWtqmUkod5H7hYCgRu727U2zfQnc4VXlniGaheJxfvP119MlfeuymxIX9YbC0UU72RwWGLUA4afsrX5zAKQqurN7z2A5-W-DU6EnD-233fa6J2PRtmcouMAhRoZkeGBA2CAE6eJMNMAstgahegPMr59VFGTeUDTfkOo-Iu5NNjEp-zHR6OdXMo4bZ7zczm-tMZXTcFkyYHo-1pCBuCgdq_mYsuonGzoMEk6X-g8pabPufPjmKDV97q7D6ex07MzeHJ09a3c4CFsw_S1rNl5Cnj7HwQ9Qkfzi-OfbhE7VDojQZ497U-4J6Rb", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113258615345365706819\">Татьяна Машошина</a>"] },
            { photoReference: "AWCwydgmoMivXBpJyI1JEYXfDL25BDdE_Q9T30q5JPVt0pXhrtskFouJxWuRl1eQ02XaMuTd7npDErjCkFbxMY9F4EigFEBeuxKBWeLI7a58YzubyaHmyZr26S3Id-6W1iQks9ISHIEJKQ4XPqU7aGsF0q9IfVLNF5ONI80-Fb21S3HPxkxIjHDcPOPf9EpLIHvBW6WkNARJkIsqz7Nls-9bbXGHorc8gbYD1RVJQ8S5vbhq_cxWyBWCjz-DoylYNP-GuWAiWJBgg696MUJ8T4g2L235z5Z_V4-g2XmuENI-JjJYfd9D-FWcTq_9cEJHmaGFV13jR7VhuYzhaw8Cv-01hgoHoLt4C7DtNUIr4ivfdV3k3j99n15iVfR-BBlL42MOrz15T-yvlBWc9ZVYYwxMYxhwLa6NnjnBY00Y5bH8KwwGPAw45isl8AXmSt_Mow", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108650309346531684644\">branson veal</a>"] }
        ],
        summary: "많은 리뷰가 증명하는 높은 평점의 스시 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["일본 현지의 맛을 재현한 스시", "재방문 의사가 높은 맛"],
        tips: ["자주 방문하는 단골이 많은 곳입니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스시", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00~10:00; 화요일: 오후 12:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=454836240431262782", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EB%9E%91+%EC%8A%A4%EC%8B%9C+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카페그린 망고빙수": {
        photos: [],
        placeId: "ChIJ017u9rKNpzERuFNuG_u0HJk",
        placePhotos: [
            { photoReference: "AWCwydjfvJtbiPXT4I2YHzvXaU_TWvUoxNunZKX1qrsv8TKXf7twVZbg39wyumepLkjQ-dWkfswv9tSGLCQUnOybEZsLFqPCRHKFXFk1tUYnRrTsBeTCme1nZ3MGXk7jLNU7JXqC90cv1gsdvV_Iok3oVyuwpJdh-G73_vgyGqRjDUrtFUgYf9dsorLYLJMpKFE9hbEEiWjEa0yMBa325WfNW0RQNN2UDse-bj7L5n012N-v3vHwtb0Phs8vQDZukhD8wlt7v7oTBlRMeQzY6tLTehU1J10hLyqYboN6Ow1VxyFkfNTGTZLwEQSxqA8SuMfQ4A-f3FSPG0tuyDRJmFo3ZtOY9QfX7oMcjS79ZTsyHDjqaNl0PgZ36O_R2i2ekHV08tn1Gs9aZkL38CRm3g1K2D-P9_x7bBje7G1YZvxguxznkw", width: 1125, height: 1500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109073416934650118565\">CAFE GREEN(카페그린) DUONG DONG , 망고빙수</a>"] },
            { photoReference: "AWCwydgK5b0n9uTynMBh8pC_9oR6aJU4AJDqsh2UexwEnXqjUSQx5BMz5x10F6Hsh0-qqRO48xLwzcMpEJqfOvi94M4NCLCf7xDz_HNb6MIkD3aP0u7a0LJicOJDUxhVK-R07bWUN1QO_pfogXaGnU7r7Eaurefw1pVQ9wk9WnFiSqqgRMMZkhGhYuCJVy-24VnZbhT86-jMCPLO-UPmKGz3Xtl321DQ1C2jDPDnL7RYRlu3jyfjR8WPzAPxbxr_rsEEPpDmQVqKJP--XSdPTmU-w918U6uWeze8G8Xo0Awa3nYKwQkOvcULWOrj6HZjRO97Iha99KyHPsgP3tKCJcFPWfluqadRT-X6GCa9EgWVg1QZRC1gSBpiSdkqZRlpRgCZuUijyTLsghnZL2wKdhZM8x-uLyNF0UC4-P0928gmZL7OtaM", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109073416934650118565\">CAFE GREEN(카페그린) DUONG DONG , 망고빙수</a>"] },
            { photoReference: "AWCwydhMkIJod3zsx9oD-reOrRMmAjBS7qxlkTalD9iKautLNcEcCojtLaR8TqtdPJI9wyrXiKLeFLKTxh9szevLXQitQ8w_v8_ku7CnhWJdqIEOTTbwI_V2WorWx2SblBdHPU0oublUaqU3OST69GrzpJq9-ylKarVo-ZcfDetZhhhr3gYlzb4s8q8ulSkHRukzjA3EjQt6K9b1eX367yhoLDplXM9Lkrxg1dLoSAEttsT-Ak8v3AP8uzEq3MdiyjrAwN5xQXBhP7uHnwMCsdrXzhFf2EwFWVebqH0ofe6AsrwBrUxiPAUgmIa-P6WYspQfFswC3oQnQ08rkXHnOJ9RRHcl4T93ASNVxwgKPsxcA-F0nnmzxSISi9pWlVz5N96GSeWSe5BWL6bKGMnrY5VATkZ1AaGN9AA9Q6C2Q3U8goqeNsuiil8x7dYjfoF4fraI", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109576136468608589870\">주똘스키</a>"] },
            { photoReference: "AWCwydiYvTvU2CMkXuxWmOgj32ofzkO1v8uJAI6mUiBjQkWHyqaEVVolod7C6vX08oHjd_rvydolzDiKLFRxxnjTORXhmpHb8ijwpIsTCE1FdoAIja6KvvpK6UtSwNqsyeJt3x0UBaWduszZg_JowTNjuTarGmZcdx_vSPgjBMOvlR5O4-f_owwiw0Nc_86XlXzMmz8Vr6ASw4fG0FOaV3kgYEQObCp-nhzdh2bCgJkF6RR9yyIQA1j6qOwBlhvyPPbXtQwsBzA1CzaIp1EcJkOe8jxWhrQlyUgWiThS2z2ECVgxgxwkOju67qLS7jTTU2f6DBDYItDv6gtnc3fA1Vwp0ZaY_sjfOJMwhspWdkZzHfV-F3bvlFg6fES9rCyWpf8J53IbDt-lUkJ-F8ObAvU1vQWrMwjHYkymWkAAVCx_IjCaEGyHOOI7JpWa-2mp1Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106607613245284480394\">세뽕이(세뻥이)</a>"] },
            { photoReference: "AWCwydjm2K7VF33x9ViK1Yfa9HA60_EpciilVSLwafpjnkOwVL5FROGuKmZ1oM_2DSWTUFk-XcnEWnmG4eK8-y_o7H7STM8Y_oa0xXQjm_1Fd090X8IOKZtw9BP3zw3n53WbxaLe2wA3wqOm_R4TLrHxsUAK8VxsffUQ07739WFvj9ezNheJIN1lQkBa7QCFpeWtALn24eioU_-X_Tr4TS2_iQM1DoHkc1nQuz6GgJmu7pCSvdd6HnEuZI3jRNjFTR0jy-a7HsuVa4c3JlMAIgMijYrojd2_yMEKdoT2wdAT6fkvoNaWsVTZXh6vWm466E8cO1A9TGZdg-a2lmHHDhTQGnCxLGg0KINTU4XrXQM_YALoH-UlIzqipm6fLQBuqaixmFSt2jMRv7NMSleNrqj2E-rpRjqnaQF2wH5uSd_tRXzopER-Do3AJNamr6jD4g", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116844034775102261364\">유미유미</a>"] }
        ],
        summary: "높은 평점과 풍부한 리뷰를 자랑하는 망고 디저트 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["망고빙수", "프렌치 토스트"],
        tips: ["코코넛 밀크와 아이스크림의 조화를 즐겨보세요", "비 오는 날 방문하면 더욱 운치 있는 분위기를 느낄 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "망고빙수", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11032892177740878776", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%98%EA%B7%B8%EB%A6%B0+%EB%A7%9D%EA%B3%A0%EB%B9%99%EC%88%98+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 가든 커피": {
        photos: [],
        placeId: "ChIJjy14YRaLpzERK8EiEnT-Mg4",
        placePhotos: [
            { photoReference: "AWCwydh_oPHR7YMZnjYjoTd3QiAb7yXTrt2smkBeNzl1zJ0nbdy0VR1jOGdJp4ZbJ8hHD2RHknOIVoLHTsqyZA2JguONWQ2eqi14PybPwra68IstvljovDaqjv-hZJqsDDl4GTbm3CFV5K-dKJHhQkDtkM2Y_Ofew51NCMjMO51I_ztEVvE9U90Za4DDMhSF3Lnl21miQ6G6Y-DWnA1f0Ka0RdCV2CvS5kmRLGureaYfo7wpSY0DJJQnMP4BmpIiFESixEXFSJ5nsDEM9WtiWrj2jmkIP_AQJhZ8NQZKhcGmQnKtKFg0w2zp62aozwX-xF-jER03WIG6vuuY5jrAvoJDOmWL5BlEgmd-SSeIS7rRLBuGiSS1ffiSy9JXR2m2tobCSB4dAfwDPuY-eqMm5UGAnud_A5j0w1lPoIVAplSfz8Y", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114878032598530816704\">satbyeol Lee</a>"] },
            { photoReference: "AWCwydi2R9bCRNVRYai1IRgDAI8hnJoOx_YLTsMznX3_DflWgdyTg3z-AFf4KomOgzRyFse2_eUavv9-nvX7EZzAdWTRBzVBKz-WPaj1PDrhd7sAWjFuj1CIzzX5Hplp37qyT8ec7zak1izTsCeeT0yacgLswGQp88v32R4mCaf_lWQACy0K0kR98XEuileUKRFHXBhhkghddSc-ZLkONrqSzUFf-U6Y8QzZLhzebzsFAacVdiPzpBhj4U1JDA3woRYYonKGVc9fxmgGyRc6QxbPpob5deV5PGNHc0OC2djerv0B5-y0W-lNIyrwqrPAaIcxJWT4tbHULep07SUsZmh0hxu7Pb40cwHwLpxJvHQgwt35BWPv-QTiQ0j4Owya1wMEc468YtlnGJo9KvN9X3Tysxbz_6AhNQOlHdUDb2xF7CigxLiFT-4IurK6IyR0Lnsc", width: 1024, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113541133517836573522\">The Garden Coffee, Food &amp; Spa</a>"] },
            { photoReference: "AWCwydigpm9sF7K0lh-NeMEKWA77HTiNYFvdtK57JBNfaeNI74bPSPiptgT2srD3sWsR3zLKR1QyhAnGZVwTsa6PQlJHLu_vP6UnX2f-gXyZOpzunRQz_LNSKq2-A2YtWLCjY1GNSNPOa-c9N4vem4y-PQu19ifFhey46dWwV0C8Tz4mI_cvPw07DJVEIgaz9I54Yf4KJoHc1dH14fJKV3YV3sjASLEDAUfkd7EITXJ75V0cucRuXe-8VXuD8rq0c4jrnfZuLjKJ4xorCbfWMJmSJlPH813R-uAPu1YSp6qQckrCBTML4O1n5xJxyD_hzOUxufNmS8DOGa6-2GnG-5fwMXNrUEh2Ut10Q9OUpk-E8V7JTyoj0bHj8s6Fa1wCkHAk5xvGAK4cy9fdIGSp6U0hjhBiaKLstn-K7WZcW5Gla7Vbw82bcntGV2pjHlH7YwI9", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117943840636308195991\">Anh hai Xu</a>"] },
            { photoReference: "AWCwydjD7GlkTO1RQv4ZW1GxQjwec8F4MdNt0AEMIPrGFBFx5hFSwCTGEFVPnXNqgidRIYuEUub6VfvHr7RxNaeGJHbqBimdQD45BSVWycs_OugfgyU-F5kMS24wLwpuQKNZ1nNTHxdtmzhu6wgc36BlnUde5P9YcSWoF0AT4UBI5Uhkva6DK2pQgO4INd20vgIPqPhYiHneoYEV1PUxEyTtUmhoUqy3y7VBe9rFEem98-3rpEYUcsi8T2tt9Y_UbwiJE2sD1toqNOslVoBV3j4uWU9pKJa9hpAxFcskqzbrxD2ZNCXmk3DVo8iJZ0imwuoKzo403iamysgAQvfGBjwcKGNmqTCVBRhT3a42Ls29Cjs-MlIyrYuJAkt05F-2qhDGo6gg68nQTfFXBFdr5DwOS2Tj7NfqGel5fOiVXJ-x4x7yjlOZg6sUzBonWLoC87DY", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108702333623741770919\">Michael Komorek</a>"] },
            { photoReference: "AWCwydi1AYFnr-8P0n8y3nqweEwp3Be-mdFHA9wENUGpxEoe4F0_yLWiU2-0QVo6n1mqJoCLWi7kTXEaDXak3jybPqmXqbQ3TyK6branQDmjmf-U-J5s6uDvHcb56rLbx4WpuJdeoWPRa3wmMOb22xFlBAYCBLuz8PnK5tVC5I6c005jNoOPzK28sCGfhttIcAZvZZOCrxrhblgVAoCw6R2yqOvCuZt88nTdRKV9bZhF7Xes318big075qTQpBeswKP2aIpnyWCPfMcaGa3io2Mg6cWXua5bjstRo63V5Vnq08xtviSo7L3_3QO-fKW2EgUlZL232BWe2AEPHbf-6bZX4eehNeJUL8c2kZI3PkBB-g1aueF9wrGDYW4YgzZVPqzLx9UdehSW8cHrNiNonsSFDgJBsYP0Hdyb6khkTcS-tC1oF9VFtqINiI9CG4fxqA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116138018227786954537\">Анастасия Романычева</a>"] }
        ],
        summary: "멋진 인테리어와 친절한 서비스, 맛있는 음식과 음료를 갖춘 푸꾸옥의 힐링 명소입니다.",
        updatedAt: "2026-08-14",
        highlights: ["열대 식물로 가득한 아름다운 정원", "친절한 직원과 푸짐한 음식 양", "사진 찍기 좋은 멋진 인테리어"],
        tips: ["가게에 귀여운 고양이 두 마리가 살고 있습니다", "도심을 벗어나 여유로운 휴식을 취하기 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피와 점심 식사", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 6:30 ~ 오후 9:30; 화요일: 오전 6:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1023159839840452907", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EA%B0%80%EB%93%A0+%EC%BB%A4%ED%94%BC+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "로터스 홈 & 카페": {
        photos: [],
        placeId: "ChIJHfkAZ4WVpzERmME-KkMKRrI",
        placePhotos: [
            { photoReference: "AWCwydgeI-8c56eTz0wP_q7SAP8W-9FYlJz1W2MMfsImXwz9IweAsOmp663D8gfyU7QMgOwa-irpMsk4-WIlGqe3eD_wnohaASQK2ee8y03G58NptJCVXUJKZF8Wr_oPH7wXhGi402lA9Sa7i9ZNxOoXfmx6FOFr1CbeMlFFbFVs1AQe3UItQpw0UCrv9paBiTxwB9yiCUr_DilPPLHMelaACeuZ1og0_bButznYz7XZikKI6ogsqgAn54IuHuNH3pW8_LyCgYc51z8In-qI6jXPCjAclwWyzBfuzjU_Hhla-r8Jr2sbNWomP3cAtuAFYrBlQvgAJ57qcyOsJ1lISwtT-_DoQ_tzwHrTIjywvvcdqUPy4M66FRTAVM1cAmeBwzSzLIUgxVCwQAcvoTfVGSpZt_Ejpy6ui2yle0iHuVzkUmUxmuEU", width: 2560, height: 1708, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114417996195403101109\">Lotus Home &amp; Cafe</a>"] },
            { photoReference: "AWCwydhiBBL0XW5aM0Ja_jNr06cUyFuQFAwFN6d9IzpaNzz1CcguQyzYvvKVEIuTvIQAvCuh2YsS2HPILPYXw3dVHe_QoQp5v6U2gy5Xz7iR4sdaLx5x-ZPn3fmhRNFRftGdP1ww96wpENr_gLIscU3g_BsZk0Yjr7Qv-ZRYNdQpbjxI9kevjMRVWuPBlq_u3H8dLKCy2Ue0gV8xorPo-wp8mv1tm63Gz4oJcVkuiAx4ybXbgXMHsmPIOLb7cS7RYG3wIhuRULeXBvbWFyy735IKWQTADQm3HyYK_szUj8V-FJmThEE2TCWFgnqBDauTZpI4L1I0oXxV-JVpVfcqv6AApghFXX2QiRKTdSTfhSC-NOYYuwMfYKFkTTldNLLSaJcPxSIDPY7xS0I2x17s4kzR4RZNk-0U2IAPnjsJnCNWLNcffpZIYtHg64l5KaEPGw", width: 960, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114417996195403101109\">Lotus Home &amp; Cafe</a>"] },
            { photoReference: "AWCwydh6rTp7o1Hf4_UuOUmzWHxaAewhyq9WwGOOqqaald_kGHgDoAxwp8f4nS4lvNpIY8igXbC6P96UB1VpwBCYiBUiH9yrH22zkt8dakozy5IUVrVESx6XPg42SsvJWF3D3iqxBUUMXGRmd__jB3jxuK_JKFP4lYYC58fsI7oKpH00TTmT03nJz8ZgX0M4eGVOUvN0ZOq3SbtTH7aqUSld_HFhJv-2Bdq41d5yhrNJimrAg3cCbsXwrv9Z0mBy7-QAQFHbesaxS75l3FJy1v_BBIPTSDTpW5y5epI8EQIje9CHCCGJfPIjX-0PB-lDvmhzMzJdb3mF0MoZsaFIGnmog2E4jKD4buafnwz3ldJyLW7AMhD88JJPtCQaxL30qbsk2pKGyos6dpBVPqR9OVgI6cyaJGob5-M3BlMZ50hzQw-JEwgk", width: 1922, height: 2562, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114417996195403101109\">Lotus Home &amp; Cafe</a>"] },
            { photoReference: "AWCwydhS57nMRobyz4yin12bguxNawJ8zw5_konseqvQiCsOru9SvwjrpuornHe5bYWopd1eIyd256SaCwQLahr16EVk3IAFlnceuYvlPKZhuWLenckizyfAyoYA_wBYH5YP_JRDMzcG0A3lA0X_qOgfCRv8GZr34knGZ3B0dMihOVCBkVPrAZ2raDImFpOZOk4L0NHxHGgj164fNwQtXXM2lQDPBsw1Tf0ApDgZtEbMWztWcSVA-Oy8vkeDdF2dPsXL3olPKdGlYS8CFo-eHxQm0mYlS6Pkpgyuz2V1xjGpcgtLsVNlRsz3GdkRrmS19ESPcf3XtULkJ3R1y9ZQICcwjilslL9zitHkqwyo1vZUYF3bwMCbWB3F1hfUr7-LAxUJp0yTnlVBWVOro7ShjWgblnem-dsU8oE6kSjZ9EvmldvyjUJJl-zHEUbuXo3qZQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101946257273379730777\">Mr :蕭</a>"] },
            { photoReference: "AWCwydjvJ0K3uVGwPowlzF6lTGOjAkhLPY-7yr7TwKcw0trSZ1Oj7HSODqGiYJHcuv8YmyasD3gm724u1DAJGsNOreAqsPywebAmq6179EidMNtjkig2FDrFfLWZcGPf-q4zNKTJU6GLdGr27zam0mVdhE0lu8y-iNqLdbjy-zvACTtOBKLKoHDJ07wsyVOOwiTyaHILVarWugmXa-1LtOb3UwxdytmDIeIEFdndofD82XvRW88tz61GgvfEjHJyjfZB8eBt9cXmWZHdYXjXdSx07dDl_THjaM1kq5SxIpJE20oUjqT3iS6VhJMH_lgo0pTlVhf48SZbjondP_5h97lOvpDAq7b1AxluAfwBI-VuOR90YQhjUn1hQ0NjhyhTp7fRSpjagCSNQDm5SY2x_O5hNB717aByEubn9TrL2etqE9ArosjrI65XgM-kCHqtU4lS", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112109511999858178104\">Erik Wee</a>"] }
        ],
        summary: "친절한 서비스와 맛있는 커피를 즐길 수 있는 24시간 영업 카페입니다.",
        updatedAt: "2026-08-14",
        highlights: ["아늑한 분위기", "친절한 직원", "맛있는 커피", "24시간 영업"],
        tips: ["선셋 타운 방문 시 들르기 좋습니다", "귀여운 코스터를 만나보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.lotushomephuquoc.com/lotushomecafe", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12845966270708760984", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%ED%84%B0%EC%8A%A4+%ED%99%88+%26+%EC%B9%B4%ED%8E%98+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "안바 카페": {
        photos: [],
        placeId: "ChIJZ4DYfi6NpzERwk2Xbd77-PU",
        placePhotos: [
            { photoReference: "AWCwydhoksSwMAIZ9XfSLHNkjJGurc_OxQhDTcNtvAFgBivi9sWhbIPNfLgBWYECOLQTMK9UXqDqQD-7_ptIVt1bgQHhNvNKJC1yCzjwJqYqoMwyNdbznHa4HuSNJge2Dmd6Nayr5dTrkTIkIa27VQZd4WUPnTfHpFnNC03C0ASN0L1rPu7IltcbTn5mS1-1q53iU3Tp9LChsaR8_EB8Pq-dvDvgL-rds2kZeiJXn7yQ1w4uFgtqlwWHjXZabZgPxJ8SxV7o3pcAXDG9xJ706FLCXexL5QHKL4kg-QC3_1Vm_dESpsdDN6TiFOgEGlCPO2CDV-w9Oc2NR6qnPI4zY14mItjCXciRu8Cy5kOpu-AQfGZ946egwjd-H9vmD6ASxEyS-oRQpmE508Wl0ENvLi_6__ReFZsqRfxWRC43aGu41dzqSewA", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106857631486015352964\">Anba Cafe</a>"] },
            { photoReference: "AWCwydj9d1X6AsDiODeNwW5-84VRbBTap5JJdXlKH4zaBn-JZyu46IqDkbbxyiSumKfGf0z9BcZoDHWKtHekRifLJoE_OzXGBNsjt_GDg4ZLxQcyi8oIN90znmSGlbaoUszZDuwRkYekI32cXBe5cijna-Rzj_5P8c3x-JxLEPbnW6YSBX8Wf1i4K0cNgSF6nkz2kl0aD58SVl7Nadv9Uh_y_ypYBj22Av86X-EKS7e3CZb7vKEE4W8_bAXD-GKP1x7pVfVqJMRSqzgsX4im4gOKI3dQEe1ImDlU1Tx7KyLYa1GSi6D2zxgRjn3xKN3BaJ7F07evtLdSX-wtQqbtNqJ60sAIvhfvD6YaUp01auUAHiei41yz-8hgybcNAnl4djU1hNApFMynfLTusMyTZcFUKjsl9ZnLADCFa4O9LIaM3RnAdw", width: 4800, height: 3179, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106857631486015352964\">Anba Cafe</a>"] },
            { photoReference: "AWCwydgQUBm5IV46oahEWorKRLBwbiRqTnRYV8hBKE9HtQ4uzmYsEPwemJha8DEPhaD7G2Ro8Ah34bF9WeOG9WHe055xAIG9Bzqq9kN77Co1ca-cpLMjhUxQJN5NKBQiUV5F6LuWUJYaLBq1wqLpq6Hpit1H-hIU5ezbBv3ieXyghI76OKjKNLaifOZ8hqgQ_3-o-QyteuEJlePf9qARsigoD7GnetHkOR6c9HinCfa0x1q3G1o5IawWSWENW4YjjcArNWu0etoEUlxfEMIYWTJs1TSCiafBrlhT527r0e4jby05A-Ht2hxddtqf77BY9JhVx6ocNOAnzQ_ikyFN9UfJJGLk5CcKdkr8F64IzpXKLjx0fgqAZQXkorJkFFiM9jvUyV9NTyzHc1IEdAL3ifxKmcgDL0uMR-iWIqUZ1lYIn0BiQBv4vGbXLmeSVYmv2Vvz", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114449056663078536183\">임채환</a>"] },
            { photoReference: "AWCwydjllIXmQLPj_Sa8Esx5ZKRxIiWARkmNIDykHy8dLJVfARf6NKmBk1MfLLomGBdiBWvImc9ZsvCKu7PJH6belxA5Wwk75gbL_JvW4mN56TxLdYJ500inFh7Ya-j1Jw06fy6-z3FfzgXacSdZxLhNNgEXLgnKcRmC9shBM-MxoCeecMbOuv-mDSz1s2685CpL6Mgdc-vrWSvy26wPBMJ4-Ac3mvWEwxKJFl0-ZudBdoD9ypJ7mifkD8RUoNHP9m24VSM0Fn40Ap0twOcvRUoUePEf8Fx3TNbDkjoK5Yu8WhrnBpywsU8qdBL7im8SvfcuQsc-eGJKZTNobJAZJ5lePTP9PV4fPQXzEBkInt3U23GJXIFVjz89QZTahLDjhQKTCv08iQnkkiVfZF-jiFWOHxpS4u51YGwxxaXqv5SX_HNkbZSBKk0QTVDY06fdS7ck", width: 3024, height: 2910, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111384527723332836294\">T R</a>"] },
            { photoReference: "AWCwydgVtX76UwkP9xwo98P8u0VAdx0lzqdOp12SaQ3avTqscT7qYQLydpsUtLgglgE4j0zDmAwXGNepLLEglUUIWn6PnMrv0Kyit7cs-rKwNeNYSQ32EPzVj4oTrUOVYe1CaofnuG3j9CTZqMQ8gPslU8JMdTASNa80PR5L0qH-HsyFkCz99K74L9zBVuU74W-XITX6FjSp4eKg6ye69xn6SU9Pi3AhvMHEA4JrOHaMeVWfARJMs8YNqvuwPNyqUqJm5gg6b9VcKj9578qFRoisU71QKo_y-ANtV4hh1yg7FWxzrIkHyPrnets8yTbAg2oo-qeNfAfbiUvOKsIqgcqzaZw0LYxazraYEW7IRYmdfdsiZ36peVYbka9CV_VbUGRR80-XhLkEllAoQMdd6eHXIkx7powGUzWx77J3cdRNXkqdfwuo2J94EKNRVohhEJ11", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112094844667564611494\">SK Park</a>"] }
        ],
        summary: "높은 평점과 긍정적인 리뷰를 보유한 아침 식사 및 커피 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["맛있는 커피", "훌륭한 서비스", "아침 식사 명소"],
        tips: ["아침 식사 장소로 추천합니다", "커피 맛을 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피 및 아침 식사", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 7:30 ~ 오후 9:30; 화요일: 오전 7:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/AnBaCafe/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17724193266256530882", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%88%EB%B0%94+%EC%B9%B4%ED%8E%98+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "타라파카 카페": {
        photos: [],
        placeId: "ChIJBZASQZ6NpzERfkHFOYJvawM",
        placePhotos: [
            { photoReference: "AWCwydgiccNko6jqXbgTkyDSJYBcKCotRe9WbRkVnrWF8_qIFCMPyS7_xEz1-8MObcwPHXQxpyXcLEmQ1k6UGuaRqInB9HlwKRr8iqEv2xXPBR0GWn5KIET_i4FkN1_h0lrow-DyvIjSU-iObPiTUZFty0dZSlcarBED3IYk7syYse0uVgAJz4g04VpwX6XFe7hoWJRLXoUg40NWF4ouEBKcvMiom04wp8bYWwy-T1XK02uSSy7VKv-hr8nNWzJ3-oHrBvlG2GWxmdkvmhgMeo7_yYhxt0ygn5osgwttPas2S0H40FXp0hT8Jlprux036o2KwCCyj01hduxM6mcpA7JVqxoZTjdTVMmL6vneZI6p743MoWjoLdrw2djAb8inRSJjY_1kGLdqkewrukl6rSmfSg3yD-e-MmUEkZfkiq58J_Q", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110094574475423784166\">Tarapaca Cafe</a>"] },
            { photoReference: "AWCwydj1f-aSqSsvQdmphhvOSP8W4jdjG4Zqc6kFzYQSVD-yoCyDQwoyWgkL5H30bhTIZqLo7XmTej0-VXgbkizhoDHfhYgJXJQcrVtCu7fq82fhs-Q7o-mgW8A9ZTb8_CcmS2rgFZTGTyy0Wr-9h6rZj7birOWJUZ_7zjZLIaFT-yNgaJ2oYPbitVcAw24FWd-E5RZzHU2E_Z2hxVb8z0vQV-mQHboskBa0AOPviwkEuc5u5Q52LxSsLz6i2xG3fxRqBBTeOBeh8hY9F3Yo2J16tRh0QPJCivNp3aocXiUEtZsbaYv1TvAnLTHKxLZd_gZf3ofpRTf94b2mqglXWcuSI4L_2d3lYtsFwD83H7HNDXTW0I-6T3Bk1Jn1yOpjU4wcwVYnORMyP5Dkw3f7d_19wJ7cMFn7QeIWwgf5mbMp9LEDoc6QBwyfKFsWCfMlLaUX", width: 2838, height: 3612, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110094574475423784166\">Tarapaca Cafe</a>"] },
            { photoReference: "AWCwydjuM-ys2Mbs_36SfsGoR10k2BT4B4hPpl_eFqKgmH1lQZvq2MfkmTOq0w6Bl4ZHV6d-OZJrVh8lNCgTYZYhwlZXEkq_cnqwJ5k77Crdr-R0A1UYVHTJCplugO4hyZlubSf0d534PX92Q68lfr-WLnqfmzLM2YI2jzRowXTZNMaNzjPEH8eGNVroEuKkDYu64pMfz9gsz13RcdOUdDpnpWyADkxcICl8Lvk5fMMw5Wj5gMzoSxb6dYu4hVKYUleTyAeyohVYQpECj1EQp-mrQg4_VjL9obASlF6SE4uiT5jcUR53XI_y9Z1bR9br9MbLxRn5dJtTEGZyjYDYngrsIrHiT8tpG0fucZw-5Smi3sBFMcK93wDUvCrpYgfHulaAST6aP0ENR9uHZ3R_Y_HZumgotWkeEsntd5kTYVfdE6BisvmRVccUf-nxvPRSUOk6", width: 2579, height: 3550, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110094574475423784166\">Tarapaca Cafe</a>"] },
            { photoReference: "AWCwydh7XMNDC-UfjUNJgyW8yfvxGl09NWr-gNeiLrslcbxDglZdaroEGZvC3BPfZ1ypxz98HwbFSetjJMwZecszFwlm_b6lQiBa-QHXvqYJuIbR5eVmnm8VjqJMJiNN5X0VSbXXDk1Y95IpaeFXg1xHr12RAjwWI_je538T7sc2Ql3JTP7KzZN32XoV7LBySvUxnVs-DUoKj3NSrgpEJQ3AEGUJeO1Lhkd-h1dEoMpJ7y8LP9mLaI1iUPCSbnFUiXmRC8KuYyZN1WLlKgWLrhF9mFvGE97ah-q8HPnum2mFdUuKJNzrCR6nu5n49cpXSQEOnesNPzATnk1mrJpS4rhsCF2BY_Kz6kgwpSfmhnNzaNDkKUfN8Viz5qKv11t0xn4QDXh2E1TgOpILyH6GR2ra0z8BRMPkvIcn1_RpnHT25rOgwaLuWZ0XTAhSjnJg6w", width: 2806, height: 3563, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110094574475423784166\">Tarapaca Cafe</a>"] },
            { photoReference: "AWCwydhcBe5h73gtMUldeogwjpyB1qwkYCCMkTEuKj9xoYlKHSy8zSYXtnksnVfwxeYacC9Lm98fJUkz1MBJorj-Tw0sZ0lVS5222FR1NlPLlbfrdqQ-wzoKJKvYkHPAH8ytlxowQWKKrS7_a7tjlKpmX-ymXkFbLZkxshOcdbvFArIxn8IDT4LOpkIGGaMlkiszbeZz1RfTa7tvafA3hleK65lUAS-XuAcz4sn4NyzzjDxSv7O7jE6idxnW_CYIaP0DxU8HvGKVw3NSKqAzciZ0fhoydlO_ekKI8Oykh--QjTRNW16qSAnKzWKu6zThdz6xbhoFK1LOy6YHz6NcVrth_GhcMQQiBTYFcMBfJ1UHyHNAMJQYUoeQSrb5C7hkP-eQzLllvv_qZxQErg9D75lsY1fohpfLNi_c_cp0Uuf29YKdVf9yD9SKPkaWsxC3u9hZ", width: 2251, height: 3184, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110094574475423784166\">Tarapaca Cafe</a>"] }
        ],
        summary: "친절한 서비스와 다양한 수제 음료를 제공하는 평점 높은 카페",
        updatedAt: "2026-08-14",
        highlights: ["인스타그램 친화적인 사진 맛집", "정성이 담긴 수제 메뉴", "친절한 직원 서비스"],
        tips: ["코코넛 라떼와 망고 스무디를 추천합니다", "건강한 수제 조식을 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "수제 음료 및 조식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.tarapacacafe.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=246413209727484286", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EB%9D%BC%ED%8C%8C%EC%B9%B4+%EC%B9%B4%ED%8E%98+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "푸꿕반점": {
        photos: [],
        placeId: "ChIJ1WAbwFGTpzERNkHOSNdAvAk",
        placePhotos: [
            { photoReference: "AWCwydgyKxTcqh6Ci7T4zsJ5--V6rKmxnp9GBqxg8TWKcBBPPdFox2b1J7zSdEdmuX84Io6X9Ib5FX5Im4KxZaF45xiiE9F96DvDKsf8SRl8K_2F1ubz51rzF60SG70i0PipVrYFl55kwAMTM3OBdLDl9plzB5G54fDCPuHcM9__gYGMslGonO_z2fIPIpXSJJFpvj5H0xP0IGLSbBgrk09LOd6wTZp8OtJAgsFAmOxmmmbJS0_RECkOtNOMJ3M2f7Cf7WM_AMYOq3w8h_7DMs-ZR1d0tByo-NafR1rjSRyIL9zvgR9WMHzyy9JHJy7KN61cCH1ggDF67gCSdUZno0q5-wBuRLZK7TtTkYE4Fu6cEvPK9w9SIa16kcHB0fWumvNrEoepZjn2yDowRh7O4Sw7A2GlENy0KqwSl4utbyM81OFbRjFfI1KK3QTZtYf0Ig", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104048649344275916308\">Tokki</a>"] },
            { photoReference: "AWCwydjueU86ttQtvT5ZnwdotI5Ax4QGocdQOKrBXCsz43MwRebf_oGA8yOx-m4A4rDmUIx5YFEgpgI_HVSZAr0vLxiT8FqAuKNZpthlln6P7Tv5ejbEn32JqpKoiWOPqX9VEf5lH4lARkpKHCHiHYIBFKb28aEazGjGtMsS_OF7bVI_S7p9JX69B7UwWh4vPooRW_g3p0o4MPXR4-82E2-3W1lYxAl9tZ_xAVHc9vMhNlTzK4mlDDu3is_ISC88K-wwLoiezq87Z0v0o9TJ9jGRH-fHTZ0gp9uiAA4sGfDIRb-xZDpePBDOu6RepKcOT4CIiHvaQ6iMjqcpO7DFVCZmF_7iVrNiK_e6YkQgMski8Otm5jwy53LQ55q3vfBXFEFhool58Jfio4xxzivZu492ENxaY2QR04tI_SDtRfBZUjVxf-Zda9ABM0rqu8QV0g", width: 1125, height: 649, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105492851727152653602\">푸꿕반점-Phu Quoc KOREAN RESTAURANT</a>"] },
            { photoReference: "AWCwydiwpCU3aSOl9jksy2N4taOzIgIneAposfXk2zjSZdqLEfZ3TXrKjtubxEVhrPjieBh4XhUrXB0QpmiMvgO410pKga_uYrA4fIWi5iKl4IxxDgJf0-wHogNQj_xw2c_2gaMi-n1zM6AfNgJpqIU6CoMewuJcjdSqxk9ws_p5yrD_ea_QOtwDKrV6ws3IR-rq0rFv3Yk-63EU-ns6-bD2N7Pynns_NKYxzbijEmXKSKDIj1yhtqbdRjG_lfcuOP21u9eJF5lcC3PhSTE1m1EjFwDY4Lh22ut_QPX_Q-6ztyaOPM2TXkRY3ajPXqdgGVO2NTJa5G2pPo2Yzh7ALocks2FBe6E19hpatN-FrWk7IIV8EwCxMrC8kHAvw5ZujKkVZDgGthgnzYXKRkAbZgjZJzE1SkhTD86uHnD2H0DGleNph82mtiFoXa4bZD1mJw", width: 1125, height: 633, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105492851727152653602\">푸꿕반점-Phu Quoc KOREAN RESTAURANT</a>"] },
            { photoReference: "AWCwydiS7LikJ8w2KvCSgI65_mWLnBXXEpqAw18sgwZYCmpMDD2RJAcXjOXJs5KNAu2VG_hAf0l-GYJMj1WVxdXhuVXZNTqUNZs1-PmpuxYuPuJKu2CbmfUsRZo8S6dSf4NgYMCLo893PHxXOExycEUyJIBFrT6alOOs2gNDOl-78MX5QI2yr0gu5tKYck2MQuiKLiAzmXcRcSpPWgcDxrKXyyrf9PNH1JeMbFJjDLEpAmmMcrLTq4vf2ARyWkJEaSd6YamfREMkC4J9CajO-svhX5Bh7FRycHNLBRg1KHifWN6yMcDixLbegRLGkehZBVGsUk7YPb315USFEWzB3ptUr68hx6DvcuaNEtP481VQWyingMRHNj4FRzKnNQWDgyRLmpGOr9q0useGaheYjlQJ71BlQwNz7i6atz5ui2Lowc1kJtVZCNYIzB04s_ZWcQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102119152659179161226\">seunghyun “황금푸우” lee</a>"] },
            { photoReference: "AWCwydjiDyJWjDfemAmwf3CGmfJWQXHtUnibDqbYj72tSfU25WkBNYK7UL6GEY-WDQiPdMP4w18c87U4iRq8c2KBjiJF-ngk-aMWBDrdGwjTWpY-O8b5Znx1nNXHPqpc5WiY0TrOAZhLd-yWXtRTLtPcz0ZwVjhRB_JlDajtCqMwwxrc3tN6mSX-BtIt9On1fXDsZDqKkENJ3D5vB2-N3hZKCNmCbgsEsirmDHY5nXlebdpoBREZ_UZ_aT8VraLrkXquE_SIcjdxEFhqceU_yo83kS_wWtG8X7_OvlHBsifHkFDGGPCOh9oa4tviUGOr5voqfAmoypynnKkOkom2J7iW5WXYVMAqjj0WrYeH7o4DO3O6IqCHoYG5GaWVOqpFVCf3CbC0mIawJfjK7bvWcid36dplpZ0Vz1gxb0p_CerZnUtC-6dU7pYuOafS7ngj8yuT", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114458868983006186838\">Khant Soe Naung</a>"] }
        ],
        summary: "양도 푸짐하고 맛도 보장된 한국식 중식 전문점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["한국인 사장님의 손맛", "푸짐한 음식 양", "검증된 중식 맛", "친절한 서비스"],
        tips: ["저녁 시간대에는 조용한 분위기에서 식사가 가능합니다.", "포장하여 숙소에서 즐기기 좋습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국식 중식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 4:00~10:30; 화요일: 오전 11:00 ~ 오후 2:00, 오후 4:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=701506935346577718", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EA%BF%95%EB%B0%98%EC%A0%90+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "교동짬뽕 푸꾸옥": {
        photos: [],
        placeId: "ChIJGQxT8OaNpzERNf_1pLMuzNs",
        placePhotos: [
            { photoReference: "AWCwydhOtHbtYuHXj4zwv3RWmFLyvOE6ff3UpqENQGT1-A4VzBTAWkr-3s8rupHdFdr0H-EF38D-IzLmQNfIXys2X8MGbRrynmZFEuXJtkR4lNXpROtLTNNwZll3vEO3owmGmG1OtwHAG5o0SypzURVOgPaRZN7ziWaK1TebYOvz9PT0JCPpHqSlKQzH6xx1aJKFv-yjlX201eDbNojyqwfQRWpkYFAt7Ot-qjZ4YifyuagUGlTPAjH9-xezI9sbvBYiq5RiAXUrUZrduyvHmRY1U8mFZUAYc6XX0vg5_4qK5FfyEGAhiBG8q8VE4-WLMx5tN59Xtm1R0PaefussuExNS7eK7iEEjER7Pqes66EgRqienkj2_-xnHPcIpHB3gW1Q543bOETxOwYsodq00NYIk1D_poW0Sl5OIiEve-9_doJFtw", width: 946, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109873203485976992591\">Kyodong champong(교동짬뽕 푸꾸옥)</a>"] },
            { photoReference: "AWCwydiK27pOrAQ3vxPixFLKYHwZiq8F_dpBFJXU4kBpZoemvoO20SCa1V6_pANwra5qWgppo0FAF-9zKFbxJgHrF1lvlHkDKdRdYGQw0f1a1LRutBHInlxA5Ff-Nh2FKGHjAyvlXVi6i2IkQWKPOH9rBNq346nqnXHyfHy3GbcKxJrM0X1MFtQ6UjMOkcbMfgoYwUJDvgOTh1QZb66aQf09LnqYVyYsRLf_CvTLnYmXKcoFK1F1mIYUmZRPLkLjIVUidfBK6AIM4WZelYXSBKCqVxBDx7RUhKdQ4GNTmkmxN4HAKdFY-AoZ_D15vyUbfUiHEKk4nFh0bMA9hgrj6Hur8297hZIrAbxg3LjGq2DY9FS3zsYWXMlbyXfy90nEMAj-GMUcbS-B4ZXDDbcuAZrEFIVXm9KRsKQ7B0smPuI-F5HF3A", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104717726748699975583\">Indira Makhsutova</a>"] },
            { photoReference: "AWCwydihL6tzZJeoS1pSSMZ0_n5TNMWKd0DeZ9MND2_6GjJ5JhHkTBmUlNf13A49uGcD-E0rBNd4s7I0y9kl_iovm4n0Jposun_tNYCqTcyMKfOGryflY54Eu2P_C1I_jg06NLMw_7Hn7hHkOOcn1bGBYj9Ha377rGjnmX_IYRQrhLvw69tTGW6cv35YZONogN7NdAcYNfFtOrVlw5gg8Yp3T_c3F1LTHBs0q4PliAgAfi5CqwW4ZScjfat1IqR2dORtnmxVSeUC88Gz82XUN0BIPyo3p2tsiC5lQuNEksvnjucez0EIFaZlrE1_kg3iw8jCTxTOa3HC5Ia1KZAiR5UFh4MtDWexg0q6PY7uda6tbLICJLNY6lvLsbde5P66fG4wCQSbMYG9irrLBsezBe2m5KaGpUjgQfFiu__tgGbeteqit2ZW4vCur9HoB4G9pULM", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108093566125166109514\">최현우</a>"] },
            { photoReference: "AWCwydjUk9rzOnJIJJ7wImA3iUDGYR_jxl3q61i83l9TYM_HRqs68aCV6OHMGUvgGHBcq7s1wdUoNWRZzWakCMuPA308Sw_IEM4x3GVVVIQiSS1MuowlRUeiQLablIFPd-hPXfOGvLaLGPMjsTT-u7wx5s55t1gXEMAPBnzSGB2ek2RtHKxw_8LtUKnuOQzaVk8MaTvjag5AqUtiQFWwL8p5vrNKu_b08095QnUOBttsA2IY0nEEjWQFeSi6QaI3eQteB__E1_SKmMGsyLK9GiiOOQMqMJ5ebXZVroV_B7byPLPg0Hj-CMFTYUACnUmfVm5D3JQ2eP2-4_zVptsmwPgSE8BLrjE-IPVqv_XqnJql-8oqAL0HhZ4nIdJ956bLlk7BdS_QvW19QmKjdEUrhqS75Gi3UW4uhZjbitwiTuNHu-W7mFk4X5JGx6w8Tfx31A", width: 4025, height: 3019, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103341743890003722731\">Như Quỳnh</a>"] },
            { photoReference: "AWCwydhm6QA9lbgH-2nag4bwGUez8lDkotcwY9VQ1681o6MRt0UrBiNp-gYsTLG0N9jx_YgUthSNxnhZ6jgVLcuF2FmPpSxcKdIs-dgwjqd9iQyfaoBihHywh4unFMtKkU4tXcwAQ3sqpvjUo2Wvc-twMWQQAz3NyYSJKmQ6oW2GJKuBDv2xNcjtLHJBtgNyWbnT8iqp6aD0Q4jbHiG-24S6zHNDuZZsqS9ErIYnw_dSjElb4sM8qzhnzmLAsh1MU8lXSEFdVSi90qGid30soukVnqZR_d8Ity1Q68_ojjHiJOLtTrLXld-DtStrtm-AEK7vCV7Ezd9CTCfTHPP9NgPYbTXg_5jFnjUwYGSHt7DFMSmNoy5x7O90QbO1sBT5hMzzgrcWt6lNdZSJj7dENr88rWGL5j5oT-7DpP0QeUPBJU9XAjdTapxDzZFE2GbHWjQD", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106299000414577482072\">정주연</a>"] }
        ],
        summary: "높은 평점을 자랑하는 푸꾸옥의 인기 중식 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["퓨전 스타일의 중식 요리", "높은 사용자 평점"],
        tips: ["방문 전 정확한 위치를 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "퓨전 중식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15838085338656800565", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%90%EB%8F%99%EC%A7%AC%EB%BD%95+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "홍대포차": {
        photos: [],
        placeId: "ChIJbbhwLeOTpzERfSfsyx-jPes",
        placePhotos: [
            { photoReference: "AWCwydgA7qX5s61Nla5LOYq0X08qkvevaGreJ71LjjNB0Rq_WtF3npqv1XMU8ZSVXEaNzC3gccpyeiBKVtouIHKbMN9fMBfznAA4wdJpCwVrruRZC3Fly1-UrycOQAVxOxrL2tI1Qnt8ejylq9o91vfQkFfX9Nkfu63u1EXYE2o2UYjfPArr2AlaTZO3JPig5XvsWYf3Gnfmdu414jnGiLlnzNUSkYecHDdYVqSnnW68I0QnwxJqEjccYv50L8MD3936pZpuBU6eU4nE0ezlJe3LQYqekzn-BF8cV-_wDAOfKgLRhyPUs2iKtoDlOV86RnPfLMonmkkCfVyAiuPWTj6JXi8lRemYxFpnzQvfrV6Kke6mH5co7Qf5ZR-6EJS8R8e-WfmjT9x7XhMA5l8p2oQ_3PsKl53XKD5-lGSnV8FZKVLKi305wd9B-Vk5sEFcKPgl", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103274629606310200789\">홍대포차</a>"] },
            { photoReference: "AWCwydgbMGARwwGrw0N_XzTwGi23ABcJcPDCSqQpw5Jw6JHfzrCdsyXpLqINYmLe3AZTaAEFDVtcty-tdvtchBT6OLeBGAgmj6f8KAGMPN3_4xjmpPMjodrVAQcvv3tnRTStZtVNKwX9vt7lEpXt_FiVJ8RcW8Kg2lvrZuuB7KJRm9qQqIrEf5ocZ7hk4sCeXM2j6RVSOPi5rNbUvzsj3au54ExTJmRY4c9y6yvJzah5cJWvHz-IQWHSsEPzX3KhckF72IsMgfHGouG7C7Xr3DNvefp5p3K983I3_QNYAPqYY9l0FD3V59IS3Ffw0LdgLrDARnmFLGbryHvmK9gWSbDlFQZL0Wr8wgI6UFHnTl2w3VG8MAG7RcK-LpmJIj7hAj43RuiTWy38g9cA7CgZLw5JQi1kiqBfcyZRuNKAtXFtmRMvk9Pf", width: 3000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103274629606310200789\">홍대포차</a>"] },
            { photoReference: "AWCwydj_J1T4qudaGJ-y8ry1018iRN4SfoibazNkYIsHa1SBzp-MwjLc_HQyzQmMfYuojKENw0ueqpfVWxnVkiAsO_p_XqVPdm6S_pMatBAA0fdfB8LgjN5hAo10oUDuK1iNfJym_IhfrmoRJ6r1W_eF4CpD_T1QQkdlnZLZ4NyPz1vLRjdS1jmML8pWsb5VJ3InyjfRz6dy-JDlg9H6LBiwSD4RKn7WzWIVPCL0BuE9V6aahrlpl-omR4HzHK8asa8rBIhUZOhsAVNz4l5fcEoE618Ceqm3tWIdIJWrQswmYNF9MzClD3Dk7kVeKdTNs1FkBBCbwjdwScSzkiFYS7P0YsxO9SyrHwQ8CzmwbXhOkR8T35KFTrymB-fd2b6KqW3G-UJ5Z7cTHZUS4g-avWSXpi5RmIjjktC4BQc3IoGhCOEJq3r49_zEkeipKxcvQA", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114486292786811178725\">Hanels</a>"] },
            { photoReference: "AWCwydhIIGABq24QOdERX1TB8i1SEA_xd-IPMWw7nhFhzLQE1ENJE7DkVkRHgEYa5_yAAGSd295GqsTba6GNUTeN1Ub30DR658BKtM3QsUViBMgawfR9QmEXV4vARiJk11hChL9N2f2UEf0vFfIAn0jzsI8crPJ8VK3RAps4yF3pphg7YHJV134aW7QlxAWSM33LNc6LvdBCEFKfLwmsM889hgGNQfEtBopiQLu8N63gKCudojINNA1aNTfjQBraua6YMNtA61_IloVtAXdBgznlk4RmM3umsX4ZRxkXJyvs61_KFyGZJL4TXYi5zKxkdAV2_eIoJcZ9F-_lsdPkjkBoxTWuJZpPlrAjF62biekQ6eHSZAcrSqi14GVciC3SXjh3g6ZwFwQrm8SdIyaFkk1ssoZsES_IY4f4d0yLPUPAo5PXO4UaEw270KBGrxFn6WQs", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104682614723046198838\">우유아빠</a>"] },
            { photoReference: "AWCwydiTjOJH2E2JTD5Nzy2b6vMpLdkTRIaO-xQDpOSk7yAxGA6Jt7wnxiRgPueb3hepRbAxtUva5tQ9TG2nBfyqFVD592aabM5niKAknnm72vWUY7tayhY8Tg280p896q4SGUbqVPBJwoXg8aLm_DUTQaic3KEb0pBvSqCmHTiGRzEANtZ7hzjcxGzIlowMQ9KaA4ksyVTmRXM4fQLJKk817JTg9BAXkBvkjmM7wh2sLONp0uTPLuiyZXQkiVl3P27BgrIO9C429Pgn4P-6iL-DKI-W5aKtxOCEWtgUq4nlWNf3vI1r1DYkY4yiBGBY-l8eUd3oW-hWJ0pDSoQZQyWdMtL4yw2O4R02rd1qtDzt4DEO9l5vmJfIsq4LMjQt7l6Nbem7Le1Mx7sHesTFRzx6DFoLp9EqdN_i73Tvpqvsa_09xL4DYXsH0Abg6WSSF50d", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114486292786811178725\">Hanels</a>"] }
        ],
        summary: "푸짐한 양의 족발과 맛있는 꼬치를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["푸짐한 양의 반반족발", "맛있는 꼬치와 맥주 조합"],
        tips: ["2인분 주문 시 음식이 남을 수 있을 정도로 양이 많습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "족발 및 꼬치", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~11:30; 화요일: 오후 5:00~11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16950883929452980093", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%8D%EB%8C%80%ED%8F%AC%EC%B0%A8+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "해산물 동 똠 훈": {
        photos: [],
        placeId: "ChIJh_DUIYeNpzERDqbaRMxPgTY",
        placePhotos: [
            { photoReference: "AWCwydjELz2V472xeM9nXbET0XuCeoTLBVqtKQLfrNMVid2ok_an6sgCS61-0MQOuUuZuwXisZ_MvlfN4toJCEGJDUhhQUtt3B3TCQCY4_cG1vt5kgjLc4C3G3RXN2IKJHzYDFGSNCon91Z7Ja4qHUtpHR_CXec3YPrwpEjS_Q6HTDYmZKrAgpevzxkPok_TtKN6dFxP8TGF0_oumb771t0JaUhu01v9jy02o0aiePA3DwAsgIMUkNxMFMnj610naLCtSFd5eP7T719PYpDtdTwHLGt74HOhQCZsOXtbbc23WnRxl4_KbLRFpv_Tm0_vHY2K79ufuKKkhW3oouxx2gEs07yDp584QQjXk3UrRtMNZnPG6F0LKsmuTXpgx_LRcKGjE3LbIV3nuWuOF1MbBw2kWXKDHo9NcEf05sYUi5H17G5vSA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114945021157700759715\">Hải sản Động Tôm Hùm - Lobster Cave seafood</a>"] },
            { photoReference: "AWCwydjvSW_qNHPrre2ky6FQbSbzjf7XQr3VRbsjy_Ta5qV1sHQ1ydbRTS89-M5YQEqNYQ-_WTOp3uliNIg7GOKupreXy8l74AwUFoycuGmRc6BhV33sxkpyBxOgOwLEhpXXxsqDEEaFoboDJ5WQlQjlX4ySAWEOVniuehga6PhelttAOgaIvKx3fpMUVzZemKXfv8iQBkKE4iG6pxNByfWXTQKjY1rEvEMWPpTf7-09kzuw34K0vH2ZRC2IoIeWF0nXOL5I_GC2HLckMrae581cHJ4Xip0CEAt6idsYc1Bc7hiSnkUOG_w03O9w-JL57a3tbCi9cVvha-eK_cDcM0CFsMKnr7DyyCUxC4YaKnCBS8uFawQ-iGeQVBr8DJxZAtkfBtBQyKzpmruiDeC3bCgCg7zedqJWXsSeUvOcpPn6_C6dbn4m", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114945021157700759715\">Hải sản Động Tôm Hùm - Lobster Cave seafood</a>"] },
            { photoReference: "AWCwydh9YvebDSXf22TOknCAwKiOGg6H0xn5sI0GWYxeP_j7WBPovxQ-TuzMOKnUrT6s2dnnOVsEmHDLtLRIToY8GxiKg7aVUYv2aOnV2Hro8uDtogWzaNX-BTWEWbOooMi3RQUkXffJrmT39G2-fuqRtXKaMCWIIr2p90co3nWT6iYr4k7w9QYkOvihlrrzC6oiJx9FWD_cIkCKrfl0XuGpl5GSZtT4vOihnF3TGMqCQrCpBVVUzU5LXwkYQjlYafIWXrRODWiDzxPtrP0p7lqIhA_IOUApWNMlocUJn-uzcgxzfK9r80QhjUE4Skhy0BbRlOpjYSJWEMUPM_NRDnr6tsZudXR7IA_oYRDQfn4Kxu8VXcy0Ujps_bHmQ4yNEtU8W0eoyywwk-1JAgNeODb0XDH9wdwF-Nz7RauGQmLC9k8P_k4RK3dbRuYBYmIH5Ark", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104704820971689884182\">dahye seong</a>"] },
            { photoReference: "AWCwydhSV7ljWehrGTDzVmpHRk9Mk_278HY6vSjbtPIw7Fl88QYAI_uNHOmAT3czi6SscyRKejUswX86vNPI_A8iCpTT_kFIMNXcYGwJBLTojg2Bl41eKXzZDQwwF_Fmr7EdLrOi0ruaOwAFyOrK9jnvJ0hKLIAZZZd6YPe8AeGcuTrCIEKlnpzU3bQTTw1t6LredV07YwJ0X6irQB8aHKCuE9XHfKjSiSGXXhOtolxluVbQwqIVZa709oOt1D28XilB6VO-YZ63Of6wzjNXFGR9EaF5I2G98T0Up5pPa4FnV_srqjqtL9Z7usIwoZlXDjxlCAsshhF3SA_6NNKqLDfK65x_xeMjZbD_XHR4GSbVXEnmLWYluyVLZYRuNmHA-LXq0KRWR_VSqPvKr-Q4F1H9pPLWx4oxCyjOfaOzaqCCcIRQ8Qs", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114945021157700759715\">Hải sản Động Tôm Hùm - Lobster Cave seafood</a>"] },
            { photoReference: "AWCwydj2WWwyIDrtc0WmShlnLiKJIYMIh9ty9Y1nZ1_ZPokI4VVE2H78w3HcUHtbMW853i6HZJ8U6zYUXUJGoz21a8RwH9VGyFwzeEjDMA1EaMc10Dh3FgnoS2WONCndj4yiv35fpVOK3oGVMF82pY7lbAsj23kp6brHqSLRUTNDLQRxmyu2zYGzZp7OiLJM3I1Ok3IJHArGpzTHqw0s6gCt9GEm90ys_i7cpS8tmQ5_YLl5GkafceGLRI7WnolKRORTkKMhpEx9uhdb58q-KNDDfRToyoQcmKWIdet5eVK1l-aTDicuMMEpkdmyrHePXvqfTVajtGlwXorWr6f8C0vLxzxQcohA0Tnhwj_LLcoRm4jM5hjjaT8YdOoS2UIEJ-Km0N0YWsK_k4fRLuWWxbFlquhQyhdS8LswBA2Vsj0QPP9-5hSUqrWHuzCZwMMJXLYb", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106264772784038544228\">eunice lee</a>"] }
        ],
        summary: "방문객들이 극찬하는 맛집으로 공항 가기 전 저녁 식사로도 좋습니다.",
        updatedAt: "2026-08-14",
        highlights: ["4.8점의 높은 평점", "7,918개의 방대한 리뷰", "다양한 메뉴 구성"],
        tips: ["여러 메뉴를 주문해 다양하게 즐겨보세요", "공항 방문 전 식사 코스로 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:30; 화요일: 오전 10:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/lobstercavepq", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3927508088790885902", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%B4%EC%82%B0%EB%AC%BC+%EB%8F%99+%EB%98%A0+%ED%9B%88+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "나항 바이 해산물": {
        photos: [],
        placeId: "ChIJwcqTU08fCDERz_5NZ3MVUHE",
        placePhotos: [
            { photoReference: "AWCwydjU5sMZuch3ge5RtKpUQTxJXgMe84EUndp0e5RU5eYFxOUhw0IePanD34fCCBiKu-eZfnYEmUPS6z1t8xYp8N-EM_-olx4Kj7LwM8gPyBPA9SkZEVg3cUQ-bwxuKPgYuRyXxaOOrU3TZ7MMmAT41LuTlEHtzu7fReZ8SR-Mo8knJtP_qb4cVEKSjeBAdiuu93e15hhosy81MdJOwQ0QKipiDgLmHz_USxJVjdzX9q9gH51LsgujMlmhxEqrW1wQIgltxlcPULQ8yOkX3kQmFQupB8tMUTmrBvf0mc86PQkuuX_ylhcn1DpwKdOv8Ah5J9izKZBmQPC2lEz8ZUQFQbLYWLVX75In8WQIxbvpO35IKrsY-0Gp0u1xMp_W-g-FyFDgA9T5OGncgTXAZSkOzRxS-ZiT1IJYkWBWrYbk5blJEA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101158819029222325933\">Joonieee</a>"] },
            { photoReference: "AWCwydhdbtEOyIx3vLOzzZtcU-fVTEl8oRqlET4tlMyeNV0LxyWer16a4oTwcqtZTddz6hY1ljBqSeDsgef-BcfTWKh0sd7Re5y4hxN3VCZ5kJISXXqMGcOAQC1Gcg23yz7ZttOB5YuWuMlxLkgpyuHBQfcKEbn3jFqjOLdFq6a9cRJM13Acb8EsBZuM4xVSrKd-CY5fYw28hqnlQGyZ9d220UjNEeeQvAY8XYICqFSQoVpEWVDic_dD2qAF-IYSNpMcVLN9ZDGfESQY82Iculfl0tTI7Gr8DMi_Gpd2q7lCioRMsMKUS71Dw6p2qujwmacV2DnyGEWA3pi0yuCpqCuhP4AFKOUengg9JVSiUWgOBXez9bsgj0d2zy7wKZ6KNrY5RMxDuer2xSaa3ELRjInOSXTwY11huSIlCsLgJmEgdxV0OnKURuLXzh9wYjjbEUKD", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100058301121327643406\">JustKeepItSimple</a>"] },
            { photoReference: "AWCwydiRAIYweuprIBGM1cOCM8bRbYEQ-6u8BobL9mDzARf_EY0a6-FO1GPwCOYhLIZAMesF98Mwy-fksLRZmxurXyiVBnhKFSeqXQKONZc1MuVQvZbUzu_-t9JFtdhIizwmZrNQEnnEtMC7Wmjg5iAqDZuRcnRvHxou1lFWrv2GdIgDgxHQ-D3cY4CpNIwcfguZNuIyAkeSXu9V8TJO4a1KuWpWxgQ7IRooHfTLHVxJtL7iFl_wFBDX38NtO33ACkp8113iRWahPNRAJYaxukvAXg00oIeaVg3uqpu_eTxx7GEoxW4ziF1Uwd80vAPpYPJZs5_YfHgbnlsUkPWJch7CEiVJCl--mWYUKQJfdAp_-TfFcj3OFwrcDe0Oq3iXhyh5VoEnOYEk6PIFGJrW2Jc1UY3kfh2KucCimMq7nnS-9bLl-NPzBnDPVH5IVmr3xk8A", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100694004399504770573\">조소영</a>"] },
            { photoReference: "AWCwydhn52TNfuVUtm5IuUHWHOkHlMMvwLFxXH4w4VZdmITDrCA5wvkZjtCi_SJ6_cirHf9BL85POma_OvAQj2bI1GD_HFsNuKQSQuST6MtVGl8daiWIvmZho8j6D801F2z9qaELmmzTuaA2Y0vsXUHd60CoSAZlps0Ttu0AOqfZQ56b7hyn63aOrwZ0wIL67bemL1M5P6pkbSDvcXHf332qN9odo4XMNmxhYEpUCW7exqA_E0c71Bv6u4H5p7i4BT2Kl3_p1aGaHhf-vKJIW7klOai8UmMkx-LO7s6q1oF9uhWUH4o3QcNF5My7VjZBsB1Vj7EwsS8HyL2eZ9CePe1xOGnksDrTdvXp6ZJN7x0SYdJXGD3pmUNAl7EWS7o0ozge-CTntyQfQfawSuu5MSsCmzT10fKRK2oN9Rq-Y81cVY4cZ1-GATsbe0MUrP2QJq6O", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106264772784038544228\">eunice lee</a>"] },
            { photoReference: "AWCwydi2GSWOz11xtRD4_JFkUVoPETSuKIL9Ph8q0KWoFeU2Oe0O4ZpwwC_yHcNvW0jC0WYZQDnmR-eIVj9ZubSNWOtfpF1AW_SRDKVnPsuRKaj5XCI_6giu90Xiw2gBuWPk0giIVQ9YLfpUdO6lqO5H86CJla1fIgpHMzHnxMpCT0LeX5STZlM2hBR_Hh5mtXzRrGmBtExTu1XQ3sajBkftYdo67xl-DtWb0_3AB2qmq5FiIJri7dG60O7chFs6bB_ngPpQhmDU8KDr1yMq4azgbAtVAw94yb7KBr9JxbOsXYZwYzI9vwWfsoO8aeRa2H2claJ_bgLEIuxxy6JnbhV0g8aiusRVK2AjooX41e-ZzBrA7AytNTrMQ2EB6iAr4jeK7XEm8-Utm4GsX91kQYzq4zWkCAzjF1xAxpovndNfbGIjEpChr7rSHxzRTgw5aViz", width: 4188, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109629521073610131283\">Mirash Moossa</a>"] }
        ],
        summary: "최고의 서비스와 쇼를 동시에 경험할 수 있는 만족도 높은 해산물 레스토랑입니다.",
        updatedAt: "2026-08-14",
        highlights: ["화려한 쇼 관람 가능", "세심하고 친절한 서비스", "깔끔한 기본 세팅"],
        tips: ["쇼를 보며 식사하기에 가장 좋은 장소입니다", "직원들의 세심한 서비스를 기대할 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 및 쇼", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 1:00 ~ 오전 12:00; 화요일: 오후 1:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8165049709821296335", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%ED%95%AD+%EB%B0%94%EC%9D%B4+%ED%95%B4%EC%82%B0%EB%AC%BC+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "다오 해산물 레스토랑": {
        photos: [],
        placeId: "ChIJtePCImGLpzER70_qwXv_noQ",
        placePhotos: [
            { photoReference: "AWCwydg5VE-gkHh_76aU2DmC9m3h5MQkXQ9TzZBKRbT70dNllazUhfhrOfASTeF1NCRcDqxdOySIcV2wSZH4neJ08Syw8weJkMs1Uz28EhuklD07NaXTa5ot4eOaJd73JQ1RV9Wy6Pnm8UzcADPlMOi-PEIhUdvNUxNLN2DtXvL9HxQtAugPTyVocFiduEznV7IdH-c8HVcQropTPlIuu_nlDyxeqrqoJQ78F8PAFaqmPTei7o-We3N88uQgpGahYmkmEFxZ1ANFFz71swRAM3nObxkhi9kfVWSHVtxbz-f1PJBHlZfMJ62xDdPWlRSgFJu85NJBVToDTjPcgIVSXls7ksFqgw769WwdinQZZB6gxia-RNTPckgVOKiK7X5EiNSF_NA205ysbSvh-J7aG17cZcNebLOx07ju0j_luhZ2OyQFC_s", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116289803226123841654\">Đảo Hải Sản | Seafood Restaurant · 해산물 · Рестораны Phú Quốc</a>"] },
            { photoReference: "AWCwydgwwkFvjEkSk_huuZPThguBfT_pcxVzu4aONhcipHEQNEYDBTQCYcbEylmTJIQoZOkrUsf4cRlV4neMqh0GRUHPSGpRXPsvvRr4sCaOHb51ILEuAigbvcVkweULie9OZjHSGmEHzNzogz-pyCtfTqY8PglVQvJIzHHkkAkQtLxVxKVWwzAWggc532n3V5RY-TqNEvYJbkSufr3ggY4mDMhckYqPTuOK_CS8-5dL8F-Ry51L5wMWO2213rQxNrj-DwsviWwHHHF1KI0LAVzSGT1oLXpq6u7-pnt2RqLP_NuASCyaUqYgzrwCujVQgCxCbBiUk6bbDlwKjhQdDWF8qBUschKEmTneWlwlwTOAR_JVXAmH8xTKo9YE7aJl9PN8ZU6Lg-CKfDFjyZvSRuchRhRe6h9Q9YTZs2yGbIokWgXRYOx5", width: 2048, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116289803226123841654\">Đảo Hải Sản | Seafood Restaurant · 해산물 · Рестораны Phú Quốc</a>"] },
            { photoReference: "AWCwydj1P2wx5F1zKgl0b7j23GhW0I96JGjvoLer_clEAwMpzl33CeVO_Mm3I5KM6CtnZO1lQAuzSocETAYG6bBjZ9T0ut0Jr6oP3GWt2ffzHy_vvP54mgrlAEBgX1n-hJCtYE0DggZXytGaDhMT3rRkJ3FKACf6q6JTigU_MYAmDxhS7xdPgOYOjfk9vcEKZMc_r-xblh-LnYBNkiPYr5mDXpujDGOyPbiBQMkCHFTow5pUcH4dsMSLzsNh237oSZSlp2KoBkI_HgUpqavIV81qMBAbN-a_sOQpyqtik5FCtQx2oNK9kWatC-BHhpp5X8QYFzCh2ovCWwqpT56OzpYLVlo6_jVivuhOUhTN7M6ZcK4edgi0kZ3gZKLVvoq-AwommVNqG_NULEz0L7wk6jxiIBiC-IWq1hlgZ01KnqDz67bZbt5NXI6pl1yN8bMF7ERT", width: 2213, height: 1016, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115892174519886919620\">H H</a>"] },
            { photoReference: "AWCwydjhpUUZPFtzG2iJDtmt2_WcdUWxuWXOOZPAN5nlMT8urdDz-UeUxWKN1K3C6XGI6NEK6WoJBbWkVVi3vzD-uA90qmPzgh5QkXNy2AEQpSNNFRHzYu4RVSyHxfV24X4L3HPfaQgQQgCKx0cS0kJ6VnVaZWjbLNhnH7GpGOPb9qWIiUV2acDAKSWpoXARK_xP-HuzaWQyD8gOXbLDrBhFexka-djfLNAXOJsK3QczBeMpJg4QdH4ZpEJckGQJ2NW9fSQUAf1ycIO6SFdbjcBUU3CkDzK15NpAke__XBCYmbzG_UIehrvI2Aq24Ixi1gWxJXNrgO6HjnPlJyH5WdQ9wadzWe9uuBqG25_Qr270utyaSm3iQotSuDHHRqo0Njx6b15hECamsd2Upx3HO5y7nJs1A3SVRb_HfFkx9HpOkFsFHQQgvj8sPkZxL-2JPA", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116289803226123841654\">Đảo Hải Sản | Seafood Restaurant · 해산물 · Рестораны Phú Quốc</a>"] },
            { photoReference: "AWCwydiMuJEeGFB8Ya2T4QMAWeQG2CZuEJ7COofv6rPM475PaJF7EGIOBVgLCcVJloL_qgyfoMszUYMNiBrHUAYh_iVI026TRSOPbrhrVdDdpr9vLCIaK923g7gA5U48BLcv2oAPCsnilvnN7i3Cz92iscIaqFV1HYlGeaYosRg-1O2p4xn_ReVDoqy9RlBA230xaa7BJCFSiMpeIQ0sW-9C6fcQgCh3p4xWaDwfY_3JSgRfXtLSIVlmSdoaisIlrKapVS5ih4J7iRhxlAdGhcKwg6tvWIwPVx6oT-88mzrPQY_No_f0fI661OzhQLF1lyEZG_l1xv6bVDg1_l0JEhBdGtcZWgcrjjiPS-elEvBXnOM_dafY0ndJZE3dvfoMmCaawDFwmss59gpEbWNUECQlu6-vTL2hjovc7PU9DC6RL-LR3GjfxveBhnHglGSfNsId", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116289803226123841654\">Đảo Hải Sản | Seafood Restaurant · 해산물 · Рестораны Phú Quốc</a>"] }
        ],
        summary: "친절한 서비스와 신선한 해산물, 멋진 전망을 갖춘 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["신선한 해산물", "아름다운 석양 전망", "친절한 직원 서비스"],
        tips: ["생일 파티 등 특별한 날 방문하기 좋습니다.", "석양을 감상할 수 있는 시간대를 확인하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 4:00~10:30; 화요일: 오후 4:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://facebook.com/daohaisanphuquoc", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9556356366326190063", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%98%A4+%ED%95%B4%EC%82%B0%EB%AC%BC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "39k 씨푸드 & BBQ": {
        photos: [],
        placeId: "ChIJvxlL5uqTpzER0jJ1dzrqwZs",
        placePhotos: [
            { photoReference: "AWCwydiSx8l_1KRqD2AX-Ww_bRmPfVMIQfulRMm23aa1edDgdBp007d71NJw8Wds5YHw__ryXbrNR1KrupqUDGUPpuGmljHdOw6qHRojLTHezMmhdcwtjfGTPvYuCYcu7IxXRu0RJgvy6UhJ1JcL9MT9zHJB24v0pwwnqY7R2zB9XbBjhGIWRX8xsXYQyE_CYxGfnSXp5mwIOy46bj2KDhdXlJCPHIk80fCSvRov89J3jqFwy8cBoun_Q2E_o2m8awaroTKu-Ub2HjyAnh4IchzmfJWnCrF7gTUtz1NUgdn8-m2bwQZ1jYi2NYQ-Qx8HMrk7Wwx_fAES9nfbyZfJ9se463Hkva6Eq9_SG7S9s1MLoepKeSpGhjauoxw8fLdQjHY1UhyqBQwnxBjwhNH90a1nivOAKoqaMCApIMhAutjWcfXrog", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116069258935963186920\">39k Seafood &amp;BBQ</a>"] },
            { photoReference: "AWCwydhluCLEyFJaAbjqUd3ySqdOIO6YhtprJkRDFCm6qtf_E-35cMXyxtU8n7E5gqZ73epvcKZqI7iF7j-0QNl7h1J_1DB9t_pszkbQHBQtPNxuhuoPCZw9gQgfVkpT3gpO_b9jg9Vcu5_6as8tIzyzIgo4NTdSCV2nXg74eR4P4MrJh8daC79-3LBR1Wf4bvltuNR2XtrsceCvJKd6nxMOQy10fl0LiA7x9puK1IpLWYYBA1H_JEE_2pnUSFCgNsKYh8AmLm2T67waCRL4KuaQWuU2wvriqy2YUiyyk8HcLQulRtaU2lmtWqgjBMk0accxOlmxgdyL8hqoKUTNaUyVhwi9WJe1OwUEbg0bJ0toEXq48oJfFC5RK2icYnbiXfBfRURk6G8cfB6pcot6yXFjpuvZ9obSWS_78HZCLZXtA_RgHBbt", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116069258935963186920\">39k Seafood &amp;BBQ</a>"] },
            { photoReference: "AWCwydjvmlh6iM1le95C62RL_WyhZLub8QAxdxCV-oJvq6dTXvA8APISIKdyx18eXbRXifI__TD5rtnc1XUcUFFvcJDi24ZxzTjrYROj5xo0E4UFZTReUH4fhKM4PxTFAoNM0pRTgPJfQcAuu4gwbIF-W-wh5QLwvKpoxsqhUd7voirc111gArrQnYyLsdRzwDszBeU7gsC5Sd55lTj35wHeGLYnCoBS8kqTloie42RtrChtB3NAkEJPrbP7FDWn3Te7sox1MF7U6wrSq0yf99GL3dhewULGt9WQ9THmEHsey1urCY4vZZHEocmpbpsVqYIRNn-NYCS_lLQroXvTTc_gvs7duOJWYp3ezr4UT7yJc-FsmQb2-03xXjWVibp7espqj-mam4V17Nxxd89VRMk9_VYwqNTGUb-3TQH2SQUrJwp_eL0F7jMohnbpZ4MoAQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113874352581459597873\">parkios jay</a>"] },
            { photoReference: "AWCwydhtLmZ_riD-y5HbFp7ljB5DWDNmfpM3XtUIzGG6HzNrE7aYnSnyRG7_L2fAOzZ0uQLbFQ6RuYA7dZPrApE7LzprjcrM0q7acw6Ij1Zhg1hKalmefuGfv4CY7kVrewlUSUTrNwmx-aJ-RIUN0IHsX042qYJ37i8woEsKD3EdbkM_1i6EGA0lS9hKF5TxYCBXZ86Fx_ntbQvLzWEekFURiQqm0nBWzLvoC0Czi5VIeJnr7Km804NULy2mJ8X79gDmY9J7xpyrl3tkZSg0zdOBZF6IM3P0GbEBzJkzrjOxseS5mKz4rweQ4Pa6wea5hnW9wiJrAm_o5kACsEnmEh6lph6zbwYZZBo4A9V2VZ3MxLPGYtCL4uUSo5YtADZFzRo207zFl1NiVXrlwIJs-KGVphfXBRwaCJ4kB2vADylM7bxX7wARE_VuFNk_arSubCrR", width: 600, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107929991704525230244\">이정순</a>"] },
            { photoReference: "AWCwydjIAjQxnNBPFA4dxuDFHtxziLhywcv9oKhAh_ml4SBY5VS2ChGlBe7rNzeZKflXrC69zQ6dkKt6CfySccqziA3E0ykzGwhG5O3FU0UuB3CsOpKbFhbETnTeXRXOFnMMlF-ZO_GsCGwQTmenqd03CpqnJRPTn-UdyrmgYmiyOPVcDFx83Of1-grRrBubQYcvsQzsxukGG5TKKDqsh790kkR7P6bkivFkrA8reEWpUiPW1vJV7YVtzi40XB2CKe863GTKXD_DnlhbMZNFX6qw2qxVk4PQ10JaPVjGusNufyhLLj5RH8-zETtAyPeVrfd59w6vxYFfSeBGoGhB2294WM-QGOZcgpyq1uNaXZsm7z9iDAChsIMok9d09D2A9f8UylShNC78fer9JlZ--m4_ATB5nDM4li-jEpiIcEoRmK0HOud8smUzuD-gwl6aezSl", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105924546993765713282\">쨍하고해뜰날</a>"] }
        ],
        summary: "높은 평점과 친절한 서비스가 인상적인 해산물 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["맛있고 친절한 서비스", "볶음밥 또는 모닝글로리 서비스 제공"],
        tips: ["방문 시 서비스 메뉴 제공 여부를 확인해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 2:00 ~ 오전 12:00; 화요일: 오후 2:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=100080271716331&mibextid=ZbWKwL", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11223509283217158866", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=39k+%EC%94%A8%ED%91%B8%EB%93%9C+%26+BBQ+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "냐항센 (Sen Restaurant)": {
        photos: [],
        placeId: "ChIJ9aynZwqTpzERWnZQfpFyViY",
        placePhotos: [
            { photoReference: "AWCwydh_xwTIXcH5gXpbd5mxRqEvf7XoyjBvjcfoh3CbHKuXuC3WDYvFrMZxjfILRzEAU0PBYkl5dTlzqWQV5aXW8EsWeL1Cq2nJMqn1uIEMXC-AibnxDlg4gnRXFKnBVqReNCIB0CChfJ4jK56zWBJqFV0aduHrkaJaTVdCrLBnJp3-mes6_cLfYJ32F2r8ocde2SBeLsk2W2XbOnKr5XuOI-MmJ_Te7rUUSRqVC-wzFyzIIvugZInjo6Xr1o_Z8bL9RksSSCiLo0Viun57CyP6ZdhMjBbBTXP0NYQ0eBitxKjoYqcRGk8MTGuMUI3gm7yL1UZ38WadXvjOOVKsJvPtEMmPLk1wlEAMBbJE21KHLzAoVumJD_e84DHTBSEjQY7qeutFLn0661CysqFyB6lbtYeOSh0LtR7lc8Ickeuz_wgfC2fJ", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107806450731693818144\">냐항센 (Sen Restaurant)</a>"] },
            { photoReference: "AWCwydj7dCBqgGxFbkWTso_DJ4BaaOW-74k5ITrXmMzTTvPAE5bMIJ4hj93eY8863F7euUFAs_SW7-5XKX-QEY94biSWagV_7to0RVBRX-qExrr4xVRjHviTloUbvMWU9VvaSV-OfJ8UMV0BU3ld9xgAOn1ycu2da4ZeUf4vPgulwaP9KxbyV3n19kfQn-MJDI6FCGVJJVBBVqubBLXQ6ErTdt4ct1jpSFQTPhFyCoF0AtMM3jFZESp7jN7O-yzfrnFx6MADPrMyWFpZuGVlvTShqaoOW9wpcJaLbogIvZN-eUTPl1UyaZylBO0z04wr_FZ3yFcAWZq-xNpRclut3CUJJWGxEHLYxb9b0ChN6IGtzwfOhVyCn4VtU8j76AxYIslW36vaRLgvnBZbx0rqd-jW3vd3L7XDCWW_Fa1AFMKTtxYamRjBP_oFUyrz7-Qt5t_1", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114644465180379323968\">소현</a>"] },
            { photoReference: "AWCwydhQYqSXbb3syja_R-YeBcOZwMnuVQkUW4VDGqPj_dKgZDSzNLwqvcxNbjkqH0a-MjNlpBH1yDYO1DOiwzmNMFqwYwDZgYXvAjDeyytm4FCOM680ealqyz-brBr82xjMYplUKCiQjcqhndi_mkKpFLUWysdk1ehHhBmwxxVyxKm3DIGFCsOmkq9VjkS6GTV7bd-chyv5PdHnBgUdc8sgcxDsbBIIfvncLHNJkI--q2lbKqGeLCoSLwpnLD3c_ZF_H6kGEm9DmK9yHvvsB8CFnJGg0zm46h-HK1noaRDY5SLnEl6WlWg3JO58EhL9syegXj0vwv3kOC01o1kI-fxMpDxuvtl5mScSuAzJnCkw2-RpDFI2oXWx_Ccp7jt2DRWUIYw7Oys3TbM78l-pMei9GH1AnfsTzk_eNreGKUrmIF_35PSn", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107806450731693818144\">냐항센 (Sen Restaurant)</a>"] },
            { photoReference: "AWCwydhOHduSk8CMXkOREyoPPvq9SbRIYwZI3bGJwp8RxUIVzJb6DCFBMIu78jFdI6jALf68hOZTYsaEo6JNw4PTFDqIIQ04AYDsXu-plj56lTuN0RtMdy7RAFFdEcXNwNecKRfoB9cLCm8h8eohyWjjD5D-syuXkUHP-QEZOPp5tRUEvsuhUMO0pQ96y2-MpCObwzJzGe-aF_n2tipX5A8zof_8Wd5Vn7xqOYYRYNSCbFYpWVm2w0m1LaeMics4vfq0fHhUuwpKA3ZJgMqKX8QFaOklpbSI8o3dDsiSnUTVPW_LJhNFKsV_kuAPWKpiZH20DPhL-HsvPs9y2tk815zAi3KPqdxprVv_fDPK2zvcWJgA2mhp1FX6Ox3oVXh7DKiNUgmlEk-_USGFzL8M1naARPVK8gGAjvsMphZtYd6AulnufvuBTW-XnvngDywNX2Q3", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101318638443419355237\">diane</a>"] },
            { photoReference: "AWCwydhTPPLrElHTuxhYDuUnr_3z3jEFzntzMzG00jAPi_vuiqipgD9BZ_yy3zONIH9XzU2uc0jqE6NAFuk3Huthi8Mb985w7X_CYBPCeZkJHPUlT0nDgDdZFw0sU6rEACBSLI8NWu2rP_aK47a0YoBW9qT4vcXniiZkFLAcLeS_UZsY_QTz4alKV4Z9ANJuUH_Qywo99yIIgsm8sHjkkbBHGWDx0G9_--43rQvQhiyV3XgMTa_fG_gzhal6WAvKTvAmksnstqTsm42-D9QmQc6oXfcUZGQ7dWcUBOd0MpIXxysOq4rQ2taqeTHdg5XC3QTIyffn2yAtHxeu70XJamRm8vS3mlJfxHKoASgIwDKscDxkdiGRE7GD3n4E_xwqy_s-7St-jTfZ8xgAgRDYzyNjuTH4maUu_z4DfgOEbzef1gupjWpMyZTkUdazjGu_FmEf", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102886237426786858778\">Seungah Yang</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰가 증명하는 맛있는 씨푸드 전문점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["크고 신선한 랍스터", "쾌적하고 시원한 매장 분위기"],
        tips: ["랍스터를 좋아하신다면 꼭 방문해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "씨푸드", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 6:30 ~ 오후 9:30; 화요일: 오전 6:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sites.google.com/view/nhahangsen", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2762521390653404762", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%83%90%ED%95%AD%EC%84%BC+%28Sen+Restaurant%29+%ED%91%B8%EA%BE%B8%EC%98%A5+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
