import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "완바오 해산물 레스토랑": {
        photos: ["/images/dalian/info/restaurants/wanbao-seafood-restaurant-dalian.jpg"],
        placeId: "ChIJk4VaFq6KhTURm5gHcQuNBpc",
        placePhotos: [
            { photoReference: "AWCwydgBEp6QJTHsBYgjVVYg5kiPdeqtYpg3_M16TmETdQ3HA0bOarlSSTDMfa24ANb9WC_czaKe8SX5sR11LRU-j54wCZ-BHD0XHT7ajk5JuH1guJmAvsulQ9UEAaoRwYECccnxgufewSkZmOlfLVhGGqwmX48AJAMyzCup8R-7MAn_Nix5d5gkudFNYgleRRlTBwlUf42HywdtaMKeXnE8JX9vBNgBUI2PZ7Va_eqrO5ymrfUa7I0YeCIlTnmDKPalIvEiWPJYIkMouHTOCFvk_hLV07-1WyYbuByQ8h1FZNjsMiS_bOyzuZM2ksXMZtmPz-uTh_CWj-YR6yBj0aQunsbztpb-NBdmlm3pnMVB5e1pOABF8mKZXBY6zpUETRJotf9KRTs5fVjzu-MLOv-NN0UjuqNA3nOglBbkDsIou_DMBg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114451118441626480306\">Osamu Miyama</a>"] },
            { photoReference: "AWCwydjX8p85-JC15Dwz9AnudlQVkHmJq-o5O1H9VoqhxwTD9VCxSygzlr4YcDv1GMQJQ7E8eCP_PxE57Q8GxB9TbOL2CHPRMQtYjePUn2e8flkoftyXH7ghMqnELkrzgZmlQl4Tfp6a8eXaqVk0bl3jkPYRxaDu8A3nX6BP3gos5vvPB8AnjXTAIHJHCoF2GWHfX04gOzjzEk27O5ny2Zo-GZDRJ6NJqMhBe9rGB5R_muTtDu7bEai7q6AjVWjm_evFYdEFqP7o4bNyV7R74wRQsKIRKjg0TX8ewWmUVNo4pXup6lblghdiQFm-Rnsx_D1sDvB_BoRwJLuVe06kUfM3sHcgS8-PyrYJkDCLuYTH_KBeu9GNMlrc_1-zCxsxKXV8Ky1p0FX0egmv46-rZvDTPJ4NTl1f45Di9Q58aBBCO99izA", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109037706127855603344\">Su Jian Ji</a>"] },
            { photoReference: "AWCwydgD-_Qy2a_KlP8z9pc21bSaCaN0E19-p5Xh2ZdGUlBM_0JfWhjCfu44VtjP8bUMBAH_OWom7J-UamyFYxJ4hE1HVzrbgeRzInLt1KLYHFbySGW9lxLgdIK_NPiCo3SDkhlq4KSpm1BlkloV8w5H70aH-vHfqlFFYNrgiLQvNdhM3iwh-XMG_sfvfhb8Mpxbwcb24gLW7SxB-pQ6zkDasJULejVWaOlnzIwBxeqAsYqWLHoqekmoa5UY_au8OMFocX5jV2Z0hrWTEkmgAPhtuI8r-a9-78uTOGEwpHD--grE1XAdFOVvwU4yde0epz9BH3nTVkJYGtqjs-g_zQ8uEYbvdWjY7zyaNJ04PFOGkRKzHnKxa97DvAoQPOE8mMhymX_gsBb4uqzD8QEP8KBDhmTBSW9yfS7JiTE7VoyLUps6jQ", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110405217656755531513\">Bet T2</a>"] },
            { photoReference: "AWCwydjnVu5YpW0d0ZDr8tsqfz5HmUb_p8Akus9tMM3nIEHmrys2lh5dQBVkNfghTnNcUm-cL5rXnM2KuD052YTmJLy05nyqzhsyLUco0jcHeL9GFdwQYljx6Tzn0kCrbZb3-LHIgvcodZEDqAOe0o4KsTyC5YLRGDwDo2qMopHXBs62KKP7ZC8c0P_lDvA0GSbMt5g59P77FqpfcckgXUD91T4xNG4c98QYorn0JjbaM4pPaYOIyAhjGigK6Pz_4f1XdPIRWfzpUrHZCDNoVG-ESorwXro6EJU0EGsmWF_gNEzxH4ahvTdgs9LuYgo_lNQC9yvViUDlUF2FBtmC2O1LUiiilRpLJYHV2buMB9TdP77LCuJ2n05VMWTnE5DuQJx9OR9Yti4tmri2ju7cBEV2gjSzcM0ossAace7nwJNvDU9jk3Tb", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110405217656755531513\">Bet T2</a>"] },
            { photoReference: "AWCwydhmrL7uBkv_6HFRIB55Q8WNTWQDhRkWqx-RO6SwVrApjxnFo3hw1k43xxcW8K5djoP-TCocRI2L7yq4gxP5t1lSh089OxdYcu60qhBSAq54X7YBJcw8sOsYLWHDa6g8htQnlkRTaLJJpjcJ1pEqvTz8WYbxRlokDC15rrsGViyplF_1Igv14da0JpatOqT7ZbO9c1OXPBmz18bJc0LkpWdNkntZhQfSlxuE1-53J2G70lcYfDO1QkbxN1-u3aCITiKZ_Vn8PwmMl1lx21Tm7owJILqAiCOJ6Y4rXkVNAe6V_ZkXKmBXNMHzHFBkup6Id961eYCOWM8frFCZfNngnavO5-W0Cl2sJ3bM3Eo62gxRtiSGpQ55Njn-a12VZ7JwKlNdt3bvv5f8wL0jgSoFs_nBwZoJYY8Pal2K3DTMDwYlw2FmfilUUV8opKpuczA2", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113858266414304487317\">ZNSK #</a>"] }
        ],
        summary: "Wanbao Seafood Fang 기준으로 확인한 다롄 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["다롄식 해산물 요리", "평점 4.5", "다롄 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "다롄식 해산물 요리", items: [{ name: "대표 메뉴", price: "¥150~400", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10882540629867862171", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%84%EB%B0%94%EC%98%A4+%ED%95%B4%EC%82%B0%EB%AC%BC+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "핀하이러우": {
        photos: ["/images/dalian/info/restaurants/pinhailou-dalian.jpg"],
        placeId: "ChIJ19_eSy_1hTURKVi3MYoixjw",
        placePhotos: [
            { photoReference: "AWCwydifEmoL3ihbf9f5waJgFwnSBnuMdOz0kW9-_DN3t_PJaFTKxiEaz2EygeHzWEO0pZ-2hAgBdRvuFtZbnU3ATblNKRg2QamAKS9C2gegqmjP0nRgYYMadIk2GBtcwyPONdcSJYKKvV03YJrF4KAy12XPLczRvTAOKSzWsPxGn6fljIRNw0zfwf5Zp46ZGtk-yBFuKGH_abYYh8fM0o_gwsi8vojH0yxbUrD286pEYzo4rUvY9doDWWOOnDjVxIa9A4QU436Buu-em3WWbjLEdPLzxQkre0pZTzWm1R9QSRuGZDC167_2LpLdT7UdR5_LJOje1ITeFk_hesA0hcS0qbNasX-NYrUmhM5szCaRc7ZdfPRoOw17wpF-xCrWFxLZgeIygbNZbDwF8TGz9T0f0yf9slVfjLDOFRWrqLaTDRD94R2p", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108627734124358886078\">Dragon M.</a>"] },
            { photoReference: "AWCwydiJfJhIJwN9QK_6hKzuz0ihTgb3dxwgYiIij3toWV1TWwvBoK9nAzn8RybN21waBOytlo8bXcL0wDA7VA4EQ7QIGWSvm5ZgXrrKuMEJNtFruFYtreK8EeGTncO3v4CdkGB41Gw3lSNwA8tGFA27-_9ikRA3of8mnEyC_r-qZTn-aQOrSDwraVs-lGG3DtHh_E_qYGk9p2KXaqXKke5hMLlf8eDHj3vDi4YBjgH6nDTHmJbm6Ye1wRgJfm7gKrV6ukMI_fiAsPEIZVtdx9w0zihY7pEWwP2QWipBWXREu8booUDVZx0qhqq8NFXhh-rGHs5XwyXj_oRI6J5isLe-Pbjsdpm33aBohpkuoOGm9b6T3COfVCzkMjdxigd6roHusPA4UlRGhgFv12vwA44w2sU6AyUG-aPUcQAhb1_xwuc", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108627734124358886078\">Dragon M.</a>"] },
            { photoReference: "AWCwydiyeJllw8eAD1HYnyCoEqX3g5teOodg5RopMXXlr2aUzCodvMBuRix4kaHjc-lJ9aItdDpzoxIBWcKoc51z4JfpIo3U0rihtb-JO0lU8jyMn99oOm5S-W0zQDvPXdR_5O9P4qbhL198e4nKnOrk_mXLw3yyhfcqptI_WSFS9PN3AyKQUntHFWVUuonx_2gw30iv6Yb-AKl7ThvGOrDM9br_JOnHxPCWNUlm-i3OfjmeqhCcmDxZQZOFkHZVwNS-WyHn13QyLlDavVJHwuJ_l6SfaXDNAuNbXwtBa-Xugum_SCKMIxeryy5T7N5RukLlqUFaVJzVdCq60pfRCXN0YUZ6jS-TvglOm9K7TQXE08-QX05POx3urxun_SFmTKZv_66fad5G6zwXdd7nQCEdp6lSI6pFbidc31k5Ryjgeb35vKr2szkcv63m3qBcOK5S", width: 4800, height: 3195, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102603142063113027824\">Kin Hung Chan</a>"] },
            { photoReference: "AWCwydi5ZCoPHlwutZqZRmgXeUIZQUaIaNp5IKRgFBmyc0f7LK2-VBgpH98dWT40O2yYLMWiPjZL2Q1FTIdafaLW37Mi7tIKDum-_F-ysRbxWm6kdOqody8RyAnfFr2vQsMGJQFdBnElyoMJiLBUUaeqUag--slqr6BP90ak_ByFIWlnHPxz5_Carc7kOLsJFL546UMh3oeysZHfy9IX7xM15jH-BIeTkktwQ5RBmbZBLN82u4Cwc9FUb_EypAYXLXCWd1G1_ci4nnMJuuCyQFpXPfRfef75ItzVpBKhlfJPxoejkPb7aU_PjIh22BaA2a3DcHwJWDOwfIcUoCdJMvg5rtNYdDuRX3UAkj2jiP0Eyf76sf763nFAzOuP63fnkJO3isoziyOY79fjIbFkeIoTQ4HsYkGCriWTeVQNdBdba7kayZq_hIRuEgxGH4BfvnXW", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100782720580973075748\">Takao Noyori</a>"] },
            { photoReference: "AWCwydjWgA05VzB-l8cXMiF0HGgYe31CKErUQlIKJtWrubdTzRcNKi0iIlYDNco2m27lGcxrAqBS3HQ2mWEPkXz1b-bgr4rH2ZVK0YZqT9QC8MfaQmZWZtI5LU9txwLE7jbHNK0J-FKp-s0AabM2uRSfUH9HZ7dW7x_EiAvaTEmELj3io3dIhX0wRYib0aIsDCCdfSkvnlij6s3aLR7JUm7Y8_Di5E-GGbA98HkcaxrcDsrqAEebyUwgkRdxdiNbR095PknnLZifs1nFMhahUyrfkLFohjIkSarO8YI_Y3h6QfcQDXw5Ikh0mdZFZTkmuRLSJl608tPl6ci_T44dTFTmyFU-P8bcWQgy1NPU86BnAfdfD-yoD6_ZvrGBrKAUP6W09B_---7pwkGBbyf_CU279TmC_d6MGVGObRtz154rQgnHY-_ogc7YnSJTnatNkA", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100782720580973075748\">Takao Noyori</a>"] }
        ],
        summary: "Pinhailou 기준으로 확인한 다롄 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["해삼·전복·해산물 코스", "평점 5", "다롄 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해삼·전복·해산물 코스", items: [{ name: "대표 메뉴", price: "¥200~600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4379225664599316521", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%80%ED%95%98%EC%9D%B4%EB%9F%AC%EC%9A%B0+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "톈톈위강": {
        photos: ["/images/dalian/info/restaurants/tian-tian-yu-gang-dalian.jpg"],
        placeId: "ChIJqyoSQ0n1hTUR_oNhxr_WdIQ",
        placePhotos: [
            { photoReference: "AWCwydjm7jWy5HKSDdu_9hQnAkIhIndE8gZ-VaE8CD779CMnZzYAvix3qefE-UP3IokuT-KNmccC07l6egUkVm_qNbV7yAAO3pSiQrFy1BchgV0bJkGPJH71v3wRbWDqE_WKaZJqYdh4pwOHw8MP9MSHTBinyD_pDvLXsszsu6He2tBCt-oUAfOzOupEjclVP-8PQRGD6bvX9N3bN3bXgC3fjJgvFA2bZAOG6C-i9JCO5TLW89nqSxs8ROrQl0AGQ0fOFa8SpvakoZQ896Gp8zMYmbshFgJVwXqM49ddnmLCHDOuXxYS4S98QaHpEKk12B_mmVWqhcBMB_TrvUxtkzQI9PYj4cuvoTcAygEgfRo2TxWk6mRvrdLBfuWkj0hwMttB8GIvQ2TiXIRF-Dz63Vw12YN2yJIg0L8GHLy97y2fowk", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105798326119192018896\">Oleg Karpyak</a>"] },
            { photoReference: "AWCwydhxP_O2wPrTvDgkFNhZpQON1QSHEDijXnDMKexZAQMoLbSe5KDQpLP9-hVEQmyuN5DZUAvDOj8lC_Z4or363T8BZxy2jBbQFq76Dg71FAHZFjdlf5Fj3fXpLeA9YjjlOhA_WbQafSdwY7xOpJ5Nb90Wn-J8r4VUqMFJV8t6P5ewz1hirF4YW2pE2bDRMgWgqrRc2s4sqopa5seNbNhwlj9-DmM2f64Su-VV6-iUII90gXublYMyE89AQGiPP4nAx9KcNfjK6TXR1ETu03a4-9xt3huXWTh0spipVMN4xomFvxu8hX8ojYumsGzfQ59HKBwpvSfgmrQ4WSABzYG-IaFjhGuAxI3jTzgXMaNEUWI66GwvChG91MxCit1-DeJGMgOa-HXuZh6bdp73PIambGqLS4FkdQ4q3Hnod4aUr4M", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109153863484628657845\">No3だよー</a>"] },
            { photoReference: "AWCwydjb7LmL2-Jfgrh4xZ7WQvOdkBaGH0Eryasm0wK_iKgJaQvNyd_mlDhNcgv-t3zuldqAy05-IgxDe695AhjO5rg_fOHFDykym91ztLgADaw89D-OdvgtJiSWPQUEB68FX9XmGKn40pYmj4j1Yxc0Wn14I_Om72EQwiq4Aoxm9YgxLSEDI3CKf4eE77mXGZQ31MxPZLmtn0T3hHK1D-4OjDqJ78MBU6XvnkddH22euK53yEmg7qlCpYlM8xSX5hXjbN00VrLo_WQFChg01jZXCXCmKXJakfpsh_5BHV2scOOSicbo9EqQ-46CN9-A2KMKz8tGrP0405MKL-PKhyFC1EEbeYRQtj_TpCPdLB2n9LRoTqB30wP2aj2KG30Yp9uFkHhbi4lfBo1HgyovIGa04EXxY5rCmala2z4JzXi6KUu9VWM5dWDr7EnSTKknztal", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101955142740988823486\">SAORI “saorin”</a>"] },
            { photoReference: "AWCwydiXNzkUkN1qWmGeCiUjFc5mCo2ztHIfM7En5RWNbC9xsu8V3W647SQaB5iEjXPDl4AkI9264-imJXL97ID3twHZMydR70u7xMsXsHm9KVCwN-RCntJA2k8g73AoLHzt9xm47CuyzxnF6PvEpvpD7-RmKYFxE6D84ei5MsspVGsGSPvD3uipJYp3w8i3M2fyU_U3ZHugAEVlVjNmc_qcS_WNevpo2gGYJp1HSNukL8nafm0MqS9l-97s4nRIOBJyBlBD3Z--kYVjhjQT0mhIIS7NAL06GRPhe85n24vqMsuUm6MP7BP7_bhfeAr3W6YL0Rq3ZSzI_vEZ76Bu7C3uyo4-_0pgZ4K0GUBP3j7RnWliLd5UHdlqKM7rHX4E3MN4Sv6kXS9VeI9gF9GRLyUx8uwqECkZauHzW0EdYv6jCaffYidpnZNuxutVqZ_C8oVW", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115932017166074856825\">Izumi Terai</a>"] },
            { photoReference: "AWCwydgdo5jTJqJgSkpqz9zvATvX1zGB0hLKcv4sW-vHapsSTiec3aIyiUK0kh5UpdJEy3PEb3VfHMFzRsTh9s1T2luYMme9JpzPvvRra58OTpOuH7PAr_YicJM2qdkhmHeD7PW2b2DvN8GM-QPKuggAZUz4tEzs0Nfc4PIrwqmaQ60vD7Ls6m1CkVqVcoJB0DUx0V95C7CsspUxd_KocOVNWbP6vC9r__8V9UGPuaDo-uMPJX4q2nu6OSchkUK5luvVxtdyImi4IEfyI9SOU18dpaS1Mo98PQ31oqdrybigxs9fftSpQICXKiLYtDcLrwEjJJ5k1UCt4NQRDxrKO8wVmDRTwxxgDNPnX-CSHkWBX29CWUeSJW54HJKU1hcrSIEIiLBl_Vn4Y6W1eY3Jbv-Co_Ziqf9jyz-KM1U8Mfwq5xxPBGzbxJt_L5EkVL3NEw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101955142740988823486\">SAORI “saorin”</a>"] }
        ],
        summary: "Tin Tin Seafood Harbour 기준으로 확인한 다롄 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["생선·조개 해산물 요리", "평점 3.9", "다롄 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "생선·조개 해산물 요리", items: [{ name: "대표 메뉴", price: "¥120~350", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9544489629460300798", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%88%ED%86%88%EC%9C%84%EA%B0%95+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시딩 성게만두": {
        photos: ["/images/dalian/info/restaurants/xiding-sea-urchin-dumplings-dalian.jpg"],
        placeId: "ChIJqeonAun0hTURmPVZQExxL_k",
        placePhotos: [
            { photoReference: "AWCwydgpWcy8DNHNcCKmTacZrd4Y7Y6SZHZlhl4_Gh7x8Ohe-Q7to_jvGTxR_ab3GbiLjfwNnBu3cNZLcVK7GmOxfwGWe4MuYjG4uj19gLVJL0loTq70t5tnLKCJghowpkvKw87gqqMfCF9Jr-MNEx4NmTsEuLeja0Gobgh6GyQ4R5izu058sViHG4ffUP4RYN6qi-xxmp6ohsx0_6E1Aen944Y4FOaaQDXaZWl9at6XlKyphf0H559b14aF0NvtgaVgWyj70DnBoMWP_OFoqz1qu-vS9HaMh9GYXTCtkJ9FF4YOOmSlPLFzNqhhcd-aO7KKhbty7dM_-LDrLOrJKUfV7oQcupRQffYcvYW3Oy5bh6DV8dtKiOsBTecKsewSLD-XInqoOFPb7p5CaAU30axYBureV2lQ1DhqkDsvXHMol6o", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111250876994200178952\">조일권</a>"] },
            { photoReference: "AWCwydgHDzXjGAbCRJXtF7RElnptKfi5BzTKtb8mA7N10EKqJfQQmvuq6KLtHJcbrxJmjMxu55FP7V59sVrd6Iv5aRnAdnyLYncEsdWSYCCj3OwGoypW6eETH6Pxkzqfys_gdqv0xIKuO4NQNhK1QolzHB-S0K_lzAV6LYkueCanp4_rMQn2B61DCkNkFACg4C8hFRYYX2qPlp17nIYzD8dzEwkSpHEOMHirxlHnV_r1vXUOA0dFZKEE4o9nDEMlInXRVZ1Y8PLhF7b_v1Q3JbS4M2qRa7YPAVWtCDpbHoMxFnGLqsc7xtAX0xzWCe2cBJWCLIHuc0je1mFPR1BgcBhnAPoyhiIU-VNmW7EfqwsXTKxmuSfekVP-5cKJ4-FHS3W4dBedjcNIZUL4ARBN2tq8e4eLdJsGVBSoVXZVXWh-BC6WLmpI1OCq1oiCexu269k0", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108463947642912555032\">Balcr</a>"] },
            { photoReference: "AWCwydgg0lKNMI5H-X9_OHRC9YyAW6jI80qw5jq6l-4EXDDXYCABqTxwVm-Jaf-FW2Z28hWWqUNL5pZ4s2SBmntjz-X2GkmRam1lwRi0tFwgkY3orvyeC6pjX18m0ND1pDiVSGdSud4QunfSLZaP4KxM0npT40A_hllD_Qr2gsaJb_2930H0Mdn4i0i4aF_G2lWLToCH6Ztckz_9lTEA3y2XHmLePZjylMD4L5py9nZpiKWJPLwJ87sHM8JD9nB_Y8C6M0vdvLAfdrafj950ejbIq_YjLO8pvAq44S59NP0Bt2nAlwdCV-PSoJSa_w-g1PAEPWsCzUWCrTA-Klayqww4H1rSKpC1IjfMjYp98OEBb-5qEs4eVOsxYqugKUZNUhc5rCxTBOdCr2ZhArBylBVcz2K1L3vCp3vHfdc1AEpvPbSWcAUA0IvWKtg0nYY60o5V", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108463947642912555032\">Balcr</a>"] },
            { photoReference: "AWCwydgw8g5pAGkxcSwCh_Ks9EhKNp50mp73gef1HZOgKXEWkdC0BGxX2rpBMGvKh7pw9zXA74HShHlQfHaX39vQJDK6x08vd3tJv0EwB8uqwmljgWvWjIY4oayQpkHSl1U6ghlfUYOllyDoZTWb_Y0HjhuvnpcbOz7znyXaGmDynsWp7vdZyN09UCvGdjX_u_kQPfXivJrjX1XzW6EOn60SZ1NmzkPvsHOR33bzoVpNuGblKju292Ancrx7f8F5n5U-ZeSHSqOLufSzxyo9q8X9iWhJsX7se9PO29_NJhvzQfrgGQPm_F-xU41r34eSKI2Te_0FICOM_OwlH0q3XqsAGfAwHAz81iguukguhw8ASTukUbRKnGXVdhFqxorHyD0Y_mpVbP2ChB401cu4yknq_OloGYcjqKnV0ABrMYrbHEcW9QxZC-kUSs60xP5O86Z9", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116223271363429779336\">임상정</a>"] },
            { photoReference: "AWCwydiwgC2J-NbHS3srJyJ_FTPiYi0YUJUXdJgavhPsmPXX9uHndc-KgA6BMV1ON340haoXar0I0I38Bacs3n5iJ0WYTe2ztSNMXuNXMF_vY-LxdsBU1Gw9zelcWJBVF6YWLo3DJNP2XFYfRyB854f1a5aq0C2JK0SfuO3oLTF5l88NtbFTr7kGwKzLeTjY2Jv4OnQ4pX2JP1ScOJS2Jq1FvQAE-7rtRkchKJfeU49jZXJfXeWwkVlx_Kr7myMlO8KHDw58XxsdzLMJzq--MEQ50bUfDMqfbF-ILjltrC6tLK5aGohWdISRHVLq7RfSI9C63WhRjNWSJLwqL1qVlKfGfo847HCddgY6toZRl2oBm_41xi5nHdhyo1HToCHEBZWCnGUme9q1moWkv0cPdx89jGO7OX7ZpIj3PPIlo9V6B_9EyDqcm556CCCSn_tDUZlO", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101099427995242806364\">희라인</a>"] }
        ],
        summary: "Xi Ding Hai Dan Dumplings 기준으로 확인한 다롄 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["성게 만두", "평점 4.7", "다롄 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "성게 만두", items: [{ name: "대표 메뉴", price: "¥80~250", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17955694811660547480", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EB%94%A9+%EC%84%B1%EA%B2%8C%EB%A7%8C%EB%91%90+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "위양 해산물": {
        photos: ["/images/dalian/info/restaurants/yuyang-seafood-dalian.jpg"],
        placeId: "ChIJk4VaFq6KhTURm5gHcQuNBpc",
        placePhotos: [
            { photoReference: "AWCwydiIvW3Ur3wFge1GJGv65sgwpemUGaJ21MPK2-W2Bnl2y6H5aHkKqNeGJ_YrWteWSCBx3IbJayMIDU35LqO3xOQHWW7lK315lmVvbU4c-ADG7e_wJeRDIAxOy0TfPd8lr3alaFGnvNHICjWrlkfRIRaM_T7I_mP8Ld6PSIk6wrcd74rVowv5KntrW0FIPrAP9UFAVoZYldwXIAZvPPYd_QkCr6Fo8x3rMGCsHh7jECwymLvRYqDo7wxlBRlY8AnrAv3TOISR-LpOXALo4cZGV4fCZk70y_M-0fH5uZWTKX3PXBRoMANwXK7_n1PMPPwbdRfVOEt4jX0sRItJYV7MEu-fYkSXJYtHb6Ti3y8ZCZ9MOf3ATP2_zgq-UFxdPAwEu4MrG63yq5Q0PVW0lwCwjU599805nEHASxUfO132ksR_Xg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114451118441626480306\">Osamu Miyama</a>"] },
            { photoReference: "AWCwydg_1iT5vGZnKcdGsAz_MEuJMzejOMmw-mXYBPMoNBGb3vSTQgePvyaIFnv_iaMThtVqUhaF4HFgl3Qw0_taHmRahQAycWem13A5QtdQ-DRibF43GyMT9lpky5G7ynZYX0Lt4medS9Z-iCRy6ihCiW7HsHwzci0HOZ1845FE2DTAs7rPpmQmElCcMeLR6znzKwClSmTnC9i5XqFtP1BVeJM8zUks2HWKqCuDfbqVmP5j97rKah-Pr3dyxBtmIWSkQ2y6hRr0NMVUkGvuWjl8RQbXSQUt6t9aBmGan1PNCYqTrHyJT4by7RHK4WYun9PEiNC-5d46z-IoDVM3XvbrAtATz-wjdAaJGXARqm8mPrGgZGzsaB29JhVhUP6_UinRccvEyLmwGtMEXY08xxfUfpgHn7vlUcE-xMbt1-5AjSh4rA", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109037706127855603344\">Su Jian Ji</a>"] },
            { photoReference: "AWCwydhSVqeyMFQHk5exLuTvX59IelyObhJVvbsZ9kZKN5tAnfAznzhLnOUkef0GRf42l_h4XkFbp37DygeuyHwh5us8ps3Pc9MYRK_fQjivzFfWrWiwnu95mt30DN3UA9Qcjo9SirM7ULcZTLyA-gOAoRRybRpy-a4aefgvdfRaQw-vCV7xEoSdSAQwivUstjA4ExWqYRKx1r6emnddmNnTxef1zRKxOmYlNpJBbUwEyMFbDVHrOVhqdRIunCTR7nUXLCGpafWja-gvXdMwMRdcwVRA7Lic0l0APKXVopr97UKc1Cf_TpWfo5YVEfp5uQgCwpcoytNLSGBfqhoy9qVOXtsy4cXZrrFoR9dEIJ8Wb9ZbEgYMm-KIAw8bpGtXujyqURxtJfjAGKjXW6PC27do2hbbcCWGMpn_hiEu5lU2Zc3X1w", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110405217656755531513\">Bet T2</a>"] },
            { photoReference: "AWCwydjS_diybMfxmBDH9QB7F-AZSXG2dT7C17AhLamOTydsIVun58pEnmPGihTkrM6C5bZ0apQSt027_p-p207ijXFrgGyX7kZRBUdg69FEiWKYMqmdH4D1sU3MedfFbfBqbU1M78oaDCUIWFtJXTJQAPbAcx2-c3u3b26dErx3h_6bAVnH5fSLi7Wq-0fCAQaPlGnnA3NODVewemhtRQ392RpSP3NusAIdqvRp3d8S_2JLPcrYFYNdg4GsuCUnIs5OLyYrW8jt75RkWKWUHByQSpnI98QwbK16u2MJ_0D_iL1LjXM1tCSnze3bGmLH6qHUcLsy-c4q5E7Ue9UzXEIdh_GtRW65Y8LpKczfPlzbTHoTCqWiQ2aOTEQH6H87b-zNjKpC59cltmlQXHKUyKgcp8-iRKv-vioyadh2tueGqco17sYR", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110405217656755531513\">Bet T2</a>"] },
            { photoReference: "AWCwydg3VNFJ6Mk0UIdwxIsxj6cUqPZRIuAteVJK83e9NQ107_ZW3x8C0lvVvsoa50iX9EOcFklejx2Bxnr4gJ3kAgHmJiZB7Tfdjla37PfC5NY_8SNaM2Ei6QnocVvM-fo79R8Y0WVQ3lz00hXUgtG4t_4rHtqo2DxgrqxBNgacWU3fgQ-0gEmzgRqURGi5Bxy7GYo8EkLoJ1QLP7gXX8OMQOiyX5qSkt4VMAS0Ee_S2a4W6kjAhbusZZDs5t9fu_8tha-eu459qblk6zBRfC9ZnoPCckY6REou4YPzthI8kNa2b_mi3EUltORQqkTpqpK6Ajx28_-U51Cp06hjdUKb1dV_aoX6InzA6MGHWqYXJE-A-Ha3DLejTpekV0pgi7i9GEGGA-fuEBWDnC_EFS4JdwdMVbGv0TPQhAmpMlpfErIMwjLBp-BIIfgBZtJIpLwR", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113858266414304487317\">ZNSK #</a>"] }
        ],
        summary: "Qiankuli Seafood Barbecue Hot Pot Self-Service 기준으로 확인한 다롄 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["신선 해산물 요리", "평점 5", "다롄 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "신선 해산물 요리", items: [{ name: "대표 메뉴", price: "¥150~400", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9997612106829413858", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%84%EC%96%91+%ED%95%B4%EC%82%B0%EB%AC%BC+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스타벅스 리저브 다롄 중산": {
        photos: ["/images/dalian/info/restaurants/starbucks-reserve-dalian-zhongshan.jpg"],
        placeId: "ChIJo3SPO6yKhTURcessxBekuiI",
        placePhotos: [
            { photoReference: "AWCwydjFuhFQQChkyDAwn-dxw2407EmRuImLv7wYOcaee3SFAwcIPRyr66kGo1a1tl8Jf3msyUOgbh2lTp89U68qnv3iamncmoPyoxpcpf2gFrtA9tK6AgJqlkGGWgjP1RvaoyjPO7kABklvkBDvGLOPufE3FP3Hx8tqK-TfMCLQaBqnLs5j6bn0xPtnN63oY2gZE4a9mFu5ea6kNHuN-ToMeqa1HwAylb-tbCbdKB9xcy7eM9xcHxRTvT79VV4szSD70Oa8OSw90TH4-EpdFW9sw1thCZWeo3gKpZPT2g38FQDFzDUiQSg8JE8Z4vJyolYADBkNvaUuwdhq5wKvX3eBoMqUZN1GaUignf31NxP0lwRpGV6pjmAursUxtAKYB90vAkiAwC0mdiO2LMaO2kbCYVwrSm71pXXax3baT12Hq5hyEnni", width: 2048, height: 1152, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116954538300396213913\">Kazuhiko K</a>"] },
            { photoReference: "AWCwydjq9QY43uBjl6xu9osrsKl_8L02Sl1Y7J5zOv6AgY4Ofqn-xEttRzdfPjePo139wcHPJnsC5pg1u3bPJ81-gSBOuOw4SBy2hwF9-rnF9UnpMPyjzNvrOcyVmzKksIjBwijuPlm0dha-YIH8Jtudqw2rJK5RA3_rAK4AZ5pHOPsb028zi0YUTv0Rb3hnmeRP8IaTTpNdFVqa6QKQjSWoSvlcuZGeIMBwh9UVxlqCql2_cPexZRKS87vsXFlETXslNqBK18q5u4ZYGFgKDmorGAC2klNdfndR6zFmEuxNq5euZpoX8cnPMOG7UY1ZZ05S1losu0iX7azsAcCk6WY43HoqQvmQQxenpWtlOskxXAEdoLmgHsjBAROtC1o5uAPOpUmRb8m_HDaaeEaNbsZv1kydDoLFgsc7S1noG5IQI1MKomD2BES_FuD-QcWFXX4q", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110405217656755531513\">Bet T2</a>"] }
        ],
        summary: "星巴克 기준으로 확인한 다롄 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["커피·휴식", "평점 5", "다롄 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커피·휴식", items: [{ name: "대표 메뉴", price: "¥40~120", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.starbucks.com.cn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14653888268986555121", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4+%EB%A6%AC%EC%A0%80%EB%B8%8C+%EB%8B%A4%EB%A1%84+%EC%A4%91%EC%82%B0+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "만커피 다롄": {
        photos: ["/images/dalian/info/restaurants/maan-coffee-dalian.jpg"],
        placeId: "ChIJ__s1QQuLhTUR4JzvjWaG9rQ",
        placePhotos: [
            { photoReference: "AWCwydiR9nX5-qicW3xGp0TrgnjORkIzW7oOhvPHXfuNQ9pNwqJ7HZPx9CptsKw9rvFnPAqhzO5R_fHt1BY5jiZIKQCqcHmaXMhMnvwURCAEg1I4zb8Ofc_MeaBRaF2cKJCfMfs2AyzaKLTB7RZBUrfPWOPoetrgO3Qe304eIOUWIxGb1G8zRBNCvL1iyGtTlLKVXCpqpPILqMr4UP4spRY-iqVfrVu_NZ057JNPSmMp59pZK_hpc5G0AGtklxHdYBYt8T61fwHgytOwU82QO4_58znR5l_AMb_vC0XGqKkWXW_G8_xjCc-dovwH7u74CSKQ7ggyZD3R5XkaI59uLk4H1unfxtQ3UgP5DFfIY1RoJ7blqLR0COJ8GeS0XnmEAKrUXQOuuGWhNDAwtCT3ckg8KHIgfnyfB0bos6MppsglG1D_3R0", width: 4800, height: 2699, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101185814098543760675\">Roo M.</a>"] },
            { photoReference: "AWCwydjbMWpXeGGIJbytU0lhkLtd3YatnbcMmVrQJyJ-O-lELqIo9L84tOld6pzgsjPsDTglu0WzYedvM-ewJobrM8ZGSMrYq29xF_AKAoyAIgvBNKSFgBP8WzmKur_ELu3ZXneLsQy5IPYwsAEjMVBsTxdpfdOA9ki4NP7AMThh4BkRHaX8aGHlxvf5EDSvDNKos1uKj7iD4QFs-PX3WNPxUf7gf5oS44HjFfQB38frnDqbg6tU2MHyjGex2LHPVN_--SCMeUVmlXj7Bl96KBYJ5oaG-xQwMFQ09XhHMAonsxJLPHJSS0g_W0uFzCPN9UwkOmO9PLX3Et4STQxeJ2n4pN5zjhuL63F1c_zRHejMjrNfKeAZETOvN87CtphFo0a1hatj-keYgvq-HB2GOS9yN3f-ECZDlxvaeQba6nCLXwuICWyJ", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101185814098543760675\">Roo M.</a>"] },
            { photoReference: "AWCwydj_gD_ib1sia3FslcI8XIfTh6Dbh7VQrbnsomlDGjsJY2Y63jU7u7Rj8RXBv1G4taDuUwTBChd76Pq4JtbI8h8N8TyxZWTfQA10MJSJE7gkvYRjEZXj8jKzrch-0TChTAfwjX7nxwML0STEI4-vjMXjpXkd2waRAuTI7oIQqXOkbMoNG7n_xQHwi7ErVhhIgyM12YiO9iqVO6B5xoWekB6PZbp2Cweo8dhQJW74m-0RSnqbPug6dDClh7l9No2QMYP9QPXor7yR6ESdKL0bQvc0eUD9pWHoXufG4PXDTlnM8ttwCQ7zFDXws-dwIU0DZ0m1S8DC79hqJQX9IqfzPAMcSEQpaWLwNP5W747FOLMV491UttKM5xwgOBW4Gs_p8xSk-EEbn5uDU0IHmJafK9oTX6wy3eLKKVYwcg_JiyuI608q", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101185814098543760675\">Roo M.</a>"] }
        ],
        summary: "달콤한 와플과 커피로 여유로운 휴식을 즐기기 좋은 카페",
        updatedAt: "2026-07-14",
        highlights: ["바삭한 와플", "다양한 커피 메뉴"],
        tips: ["디저트와 함께 티타임을 갖기에 딱이에요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "와플·커피", items: [{ name: "대표 메뉴", price: "¥50~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13039757546123926752", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%EC%BB%A4%ED%94%BC+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "렌바흐 레스토랑 앤 바": {
        photos: ["/images/dalian/info/restaurants/lenbach-restaurant-and-bar-dalian.jpg"],
        placeId: "ChIJM-tWUIr6hTURPtFw07iouKw",
        placePhotos: [
            { photoReference: "AWCwydhQInxL21Ny7AvftjAUYqP_HrY2MnFtybuG5BPEYagqhbZml--tVRwPV0VW0qnk-T1ryOOc-DwOrA0YjZKO2bBKFvAA2aooi-tKUEEduRHEEby3tzOPCqwDkMBcC70IK6D0QzH81ZimtKdy2pz4tKIw-vO0LZ-MocYDWA4tIUQbbDleLNY0m263sC62saJ0rMxW6Gu6gPmhrRIQKzCtWPmYnDnXjFO-Mx6235dH12TrV1lLfo5CiS8vCO2Y1hE3ynUFS6XcCtDT7ZDm-9WdiRuSnvIiyfneVpRutweunWNSlORztc4bipYeBu6NTHivpYX_bMgeJ-1MvA2vnOYB7ZOMMDSeHIBpB91vwvhwMiTno_JG2yAhUISf-ZImxAaImJ9x9gTaUIE8r4iFi4VJvltQxmYXHNrsbQ5PDTGfXdfxJA", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118309614694378381331\">Jun Sakai</a>"] },
            { photoReference: "AWCwydiefKbUuWxt8BRkHiSc8KAEZW3N1LIebWwMT--MKv2IT1XR14XBQM7rozDJV26W5ExCtN9OcSrhi6VvL5VWv3nku2epwCVNP_Y17z25h91o3Scj6cndM92_Hf6kYdLIg7L_8xwQcO34HwA_P5oL1EOKWBu867H1MTv0pwu-1vKghUCAvTdUllYJee6i_TMwdDSa-Fonqv-gx9ycxPziZzwVkH_u57KhwPEQwS62-gXFmI0vb3M9PKDTFBnVorKbypERnPHDeQjVBDOVYwyCu3o2bPSdMzTP_BX_8lAjCUOAvQlPDE2zuaWWEY3EnAVNJsGaarE4oiWJrkeusfmjNnLaCH7b9oAc25DCKK-f3tyqfenzziE6jsIxfdUeb93JWA2s8T_SN03fWJ94a9bAXixizTZp3RVZDwyvYu7vD7gkkw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118063161715125031067\">Kuo-Shu Kao</a>"] },
            { photoReference: "AWCwydhuKATvkk6RVQfGEX-mGwyZw7dwUs5-Lda9MFTGjM6L8TN7cAd3CgHfYCgxh0bdkpX4XWkLRAz9MHlxNVzj8tJ-74jB-2Ab_Up3xJM3xm6SslfxyaS8_U0Id8QZbxZvFGIhHatDZgtpbfpzXFALnP_bKY228l3YxS1TmKJAozuij2ZrQVGRm_vKsvVYHzHsR54e5k2VZkFjGb4R3YdKDZZVYnf0oKnZwOECWwt4VZf98jOTwaWm4BmFAeacIqb5F1cHztWwP1s1JckvrHzbyixath-LkzfIdyuTOLbdgKSrMe1plvZ6wH3K6S3p3WEfnj36CXAxo08nQqFR2YAEvdjgkOL4ltW4ezmm2AfM0JaTTyRytuO7WY6ooiecM2A6Q8Ixq1gs_KRADRvH0XB05Ic_Wy_v7VOlH4hFHee0XKSaJQ", width: 4032, height: 1960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108895691141205458471\">菅野秀明</a>"] },
            { photoReference: "AWCwydjRb5GiJhP9tWtL7PYMxdpE2hxLVU89hJv2NJwbDyna0C_xaNDBB-4ROC6H5vLIZ3vbvM0WjIxFGC69DKchKHAMPdJddJY19ZcxCUaJ_-gPvHCZitlEEGvb7MErnfEX_C1OlNS6wcqSljC9wyx4aiA1mAbfZMnovZdE2sBbw-nahgPpSMSbAkeUb5nyiOMduoCY6tYWI40fWq-8rWZ6sYyWSNoWNjvNIZANv5mw7FkA8fXgbEQ6Gl2sn4aJw50Cl84LXMqOrkIwoh71fE8MYWEiZo8mhU_28t7yW6ZXS8lIfuFO84aylvGEhh2AiLQHwxsvDwCALu5Bwk2mxvCryw5grzvjjKobrQGpAwoV9oH13UY-1Ob-jmHkAkcuKYbYV-Pa-5dwGGVlO-RAZAF02wfMy-dpbjvNQx9EM4IqngI4kA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118063161715125031067\">Kuo-Shu Kao</a>"] },
            { photoReference: "AWCwydjXW1_13F-JRHQrWlsut_NafuLIlq78sBDpEl5ep8f8QZBe8SSMaViQ_9vRBtJgi8_2pMQLb1eaIKyfk_8SkvTG3GBwvP9gN407f8gvc8dvlCscTbhOr5Z5nelBLBSYL19eee-iarrAsKTR4JhdYxAvKYIfKcFe9sd_oM-BxuJ0XXxHFXwhe0ohNB-plRVLNlFepB8TJcdRaUQWZTvEExS9ihO3SGJoIHFSLiyTvL-03oe_KZApbIT1wMhIZWAMTXKa3AaHF1p4QalbxcXKQ6bBMXCfJOUHxgAMy73EhqAR-9lP9jJvRXUgtMuZvQj0d_awA67MI6KCz8SC09kL8owtm-maRoquQVgen7AuBz_Oz2RFuWlhnaFoRgNEduVtmTB80n1ETb0UzubfBSW01kncbqTFWMyTjy4M4PtAOX08mw", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118309614694378381331\">Jun Sakai</a>"] }
        ],
        summary: "시원한 맥주와 풍미 가득한 그릴 요리를 즐길 수 있는 곳",
        updatedAt: "2026-07-14",
        highlights: ["신선한 생맥주", "다양한 그릴 메뉴"],
        tips: ["저녁 식사와 함께 가볍게 맥주 한 잔 하기 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "맥주·그릴 요리", items: [{ name: "대표 메뉴", price: "¥120~300", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9606289425618670510", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%8C%EB%B0%94%ED%9D%90+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%95%A4+%EB%B0%94+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우노메 일식 다롄": {
        photos: ["/images/dalian/info/restaurants/unome-dalian-japanese-restaurant.jpg"],
        placeId: "ChIJr5KcbhVgjzURBbjyog9eBik",
        placePhotos: [
            { photoReference: "AWCwydg3XeTRuxRr7ibEZbu_lRBkAxVuwwur8ut29eQz6ffxw7sSadsjko1vwi4ZFXEv17sFPNjNxbOnYIu74kQNwcU0mHTQjRdUZLkRDnYuP1x63rg92tp4iUK53ddM-JkchZFFlTAjnX-Fwx0mQUGbyDugDA7x-gdmSEeV5mG0l-wje4DV6gwI2hRY_svGqvEzvpxEohxWROkLPevrP_TAS6XTEXWx0_xDjJi7QpMecQtfNneHronDoitXJdQd7sBkjNNIvoAmXYUeaAWhBjls6I9j7HgPpc5kJYSUAS8heYYUhLMzJGZuLQ9fICERz9EjrKwUzJnqz__iaW9NmEQGcg4S-4nQ24mn8JNjQw7YYRIBLZzaPhk1sXltQMasLrESdmMBGJzxN7L44ni0pbM-qJkd2Ue4CDIMOz4oXkoDW2byWo20", width: 1836, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117508555136631747959\">齋藤利夫</a>"] },
            { photoReference: "AWCwydjjg8X55NWSxbepwLfp6XEfMQyPJ32CIkFD5x7xOGJWOHUB28WWGanvW0oE9Pw-rZH6Cuazi3a376MOqxAgbhEbxg_8IL003pITI7zyYg69ULxrUI4okTuSKac7RwpE72-QeiBDxk-Fzm97wjo2B6TBFcGrP2ULvT6VGpdmur7410Zb38bJhUBcpKSjp1eH_s7Q-vdqPSvCs-n3JTeotQbm-H5D2gHrP-AsUMvctdtF1aQ2OA0b64gyUBSgnuz7UG0CCRL9C1PsOwblF3NzQ5U_f2BZSYU9zqhbhtfZ2bTy-XI0JrozkC84qXx3L41GLKJD_loY2rQdvTS0NwuNKBqV0TRaayO-GEvnX1iBzoSmLrnr4uW52I0nfLcIR8-Ij_kU3ik_LoAyULcRDx0A9gvI7bXBhK46tDjKrvJMzVOJ4XuI", width: 1836, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117508555136631747959\">齋藤利夫</a>"] },
            { photoReference: "AWCwydhuyUL-oBYj_iEFQPZWpqNcjuixL353brnkDQlLTX-XY2K1p6zCfKQBQLzpdVq2h7_29XlB6W7wvl7TlvcttdZWvcNXpxZKJ9SvuWEE6p-nJGwDr0rXyPBGyMruAXQkzMOa4Jw7XqyZlnt20XfaORvO1srxFua5xrIEgLxD6b8gw-niC6yoN8-DNWgaOOpOrbRekgmnOUlZsmcEgrpT6whtk2boa79XHZyCRnTgI07eyIp8R1_uK5HOziQ1CxvjPVhd-ternFMPTTbPI-n4xt5-akgJS0lyI5vR81VXxRCxALDCZw2xd2pq88KIm1f0nGMaullOSleSIY431X-ZuvBMiij7DWK3i5F8FeNoamFh8XDrW3xhI2RumsyUbW6kOmQON0XvyXgJ5y4ILnZKth_ge5FgoPd5k5JJZnfkphI3ngTj", width: 2272, height: 1712, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109845150559201878253\">Thomas Ford</a>"] }
        ],
        summary: "정갈하고 고급스러운 스시와 일식 코스를 맛볼 수 있는 곳",
        updatedAt: "2026-07-14",
        highlights: ["신선한 제철 스시", "품격 있는 일식 코스"],
        tips: ["특별한 날을 위해 미리 예약하는 것을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스시·일식 코스", items: [{ name: "대표 메뉴", price: "¥150~400", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2956153626666645509", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%85%B8%EB%A9%94+%EC%9D%BC%EC%8B%9D+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다디 춘빙 다롄": {
        photos: ["/images/dalian/info/restaurants/da-di-chun-bing-dalian.jpg"],
        placeId: "ChIJo97GBhD8hTURJsBp0xc3bz8",
        placePhotos: [

        ],
        summary: "바삭한 춘빙과 정갈한 동북식 반찬이 매력적인 로컬 맛집",
        updatedAt: "2026-07-14",
        highlights: ["겉바속촉 춘빙", "다양한 동북식 밑반찬"],
        tips: ["현지 분위기를 제대로 느끼고 싶을 때 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "춘빙·동북식 반찬", items: [{ name: "대표 메뉴", price: "¥60~180", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2049945496720732273", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EB%94%94+%EC%B6%98%EB%B9%99+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "첸리허 일식 다롄": {
        photos: ["/images/dalian/info/restaurants/qian-ri-he-japanese-restaurant-dalian.jpg"],
        placeId: "ChIJ1U4q7wRgjzUReYyvbIr3TAg",
        placePhotos: [

        ],
        summary: "신선한 스시를 즐길 수 있는 깔끔하고 고급스러운 일식 전문점",
        updatedAt: "2026-07-14",
        highlights: ["퀄리티 높은 제철 스시", "정갈한 플레이팅"],
        tips: ["특별한 날 방문하기 좋은 곳"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스시·일식", items: [{ name: "대표 메뉴", price: "¥120~350", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3228802721145825778", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B2%B8%EB%A6%AC%ED%97%88+%EC%9D%BC%EC%8B%9D+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다롄 중산 훠궈 레스토랑": {
        photos: ["/images/dalian/info/restaurants/dalian-hotpot-restaurant-zhongshan.jpg"],
        placeId: "ChIJL7Yovk71hTURFRbKa9lS6_U",
        placePhotos: [
            { photoReference: "AWCwydikcITqBAXtzlkUMUszQ5c2nNYy3cOwbf6482ZhtKtWWfRHSgT1OxDjO_sjjf70JUS9NN3g5p6Fn4p7DG2daw6_Omd7TvV3JdH6A-7JmLIkrtuwTAl2zgrduzDDiDxiQIB1daUmaHP0RVaxgq_RPaeIszGRfKLEcP4PphAtO_cuHiHiKYvy-saHehd4lfr6anBjxoZexMsmFjEu0zHSKYTUQZ90gO94HaOt6HdA7KVD3TV2eA27oJbpRfRmd9TLM3vYY7GMuqdH_f0CCKdN_1OMOaf-WZApr4R83nbgl5aouwSYtge_r-MA5N9FgSqeR32X8OuYqzMrrURLz5gsaWhwrWr8gQDeyV_IegdBHTNgY9m15f0ePznz8juileD8HL0t4CObnpG3xG42GuENxY3JFBl5qsE7_sVLTrUVlfY", width: 4080, height: 3060, attributions: ["Photos are copyrighted by their owners"] },
            { photoReference: "AWCwydhDe8mWA-CRK3auxvWfP7J8zqJ-9rAPcRy-9IvTyqFzX5tHDrXsMCLL-S-kPyo8M3oksz3LssR912h-YUake4yUh_IGVzHdE49NiDjXHjVB_4ruvFV9hlklrftZ_VOVc1lLKadO1iCO_zs8rtEHg7CHdAqEitfIEd5sPoKvnKZsRMp7xeVMsc0YZDBeN6NvCUGjKehNCvoFNoJlkuw6UW2dyxbL-LzdKb5OjNeDkoVz1N8Q2lWZYvF4GU1iVytRESWFTT0PZnmum6ITkTMYTjRcGfOtihDDEwt4ip_e3cfbb_4Ux8oLha68naxVC1Hu97jcNwVAOJ0AVdnrjpS5Ij1BNe1Gusc9UiIN1E2TL80QQvTZFYQ8eu7FMl_z2CanbEyeo1FAgX4IdduhOZR4WcaewpS_7EhRGXxwgXhHma4z_uf3IwaxDfl-Hn7P476O", width: 1920, height: 1080, attributions: ["Photos are copyrighted by their owners"] },
            { photoReference: "AWCwydjQj-oycVTqTn0P9kRqHXoys_cs2BEU7L6Ce2PxfWHf_TeQ0zjJkXVI_gl9-bo66Q_XaIIPpHKXc0F72r_QBi7VW3D1_72fHHBiZYUibdjQpxFX5gVYj0LsEhGhB4Ol5dbdbG126J8_mofFHOwePd1f4s3qi130XUSxYfSlVUiRNaZYo_EP6Fy6tPJUB_7_RFF70-En1_6kT1B9PYL6zs_ObabUUdNSpbr6nVT7K7oj4ujqDxtFowj28ZC2_whgns4p9tppNlbi-EibDwxlmIGvUAmpAPOoPdpdBM6X5oFl5J_FjMBgkb1pPophYGXACwaOiS1yInaZD0HzW6k1HNFMcH5FviU18QhHredt0M8xEtCwrcDI898sBepUyPvL6Lx97GL0XhqFGPbcA3kERvIHQxB08oncMqzgpXn7Xh4", width: 3712, height: 2784, attributions: ["Photos are copyrighted by their owners"] },
            { photoReference: "AWCwydj0ME_YTA5AihGekCXxKi2qd5w7Tk5aR8fK3zCCX6vw7ijGpQRcnlz3gi91QydZHWiRSxfSc30nCOiwq0fRA8IHmZtGb_ncTiUYUBmnw3Kmk2ssVsMvvWMmRJXIfktD-Rw6s07jbW9HnNkGWYILECB464A_zcISGst6fwstrMTXNyETjJrxkLpgdZhpVZStkhLUo801XyNOw3uS3JEXZco4PRrl25x-3eZQ4Ok7k2dZCSogzr1jAlUsv66m7lJTzd32yk_HzaTEbY2UMBHVYYxNwe8IFsJmztpkujdCWgaKQHD75y7ci6n4c7czIuv7CF1w7dPhsH_EW5zC12R1-6Pp4D3_LRlsjfe4k06fd_qu2pDl8DFEyf8HN_jEAiv2iE6bRKxB9gPv0MK5prEx0aT7OaQLXeN8W3DOhrox8K2qijk", width: 2784, height: 3712, attributions: ["Photos are copyrighted by their owners"] },
            { photoReference: "AWCwydj8d1KxKgHnlqQsIYh3sRDwUtzT9T6p-HytgQxHK2XrwHOlUtzn4iZRIwvZgpvPaL7oCtVQM3G3SirsaSIZojUEWOAcNKBnBasjIk8hewt-t6o9Km4XkR0lT35odUJjWbRDJ1VrdsNE59BhqrU5Cs2q2FGh9rUreNmMPy4bM_fkiCCDt1vaZFqgrq4p0zP7TRtUeZEACXlAgKqzuQ2fFC7N2zDmQb5HzSb_RIIhSs2JWhyeAozdrnr7sUt8t09UCyvExZnUxSaaiAXWtQUiViWZYwP80XhDsQLUW9m0bTj6QkZgH4C0PJ1HkkN954Ym0CTUZqvgc30rq3Oh0Bmx-NFAUfovHsftcRfrG2PZD7kivVH7UDvtDK1SUsZIyqXNNY9NCwpaMKCsDh5Od8qgAWpPxW6RmzBuyOsFSVUVJBvPhw", width: 3060, height: 4080, attributions: ["Photos are copyrighted by their owners"] }
        ],
        summary: "깊고 진한 국물 맛이 특징인 정통 훠궈 맛집",
        updatedAt: "2026-07-14",
        highlights: ["풍성한 훠궈 재료", "중독성 있는 육수"],
        tips: ["매운맛을 즐긴다면 홍탕 필수"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "훠궈", items: [{ name: "대표 메뉴", price: "¥100~300", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17720348252589135381", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EB%A1%84+%EC%A4%91%EC%82%B0+%ED%9B%A0%EA%B6%88+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "샹 팰리스 다롄": {
        photos: ["/images/dalian/info/restaurants/shang-palace-dalian.jpg"],
        placeId: "ChIJa6aCOjj1hTURGwoESEq9KQ0",
        placePhotos: [
            { photoReference: "AWCwydjH1I7UCujgNiv7qWCeHU7fN2u8TyrY-q11_gD15jgiuoSA4lMYD4Pb2njVz1_y8ntLFIon-buBq5ZwafahW2TIgQHGMWRXF991WMWMzl3x1EnbuDxqglcsJa46V9KSTtF4Bl5wEvZlkugXIB6PJ69RcNvckTL3CyY7HQt_1pAOb4sjToapLyAumimmWSkjYuxIXaF2MbWvaAj2TPj-g8bxyvyqmWzDovHD8pLLmPmtm0glWefjUAkjAsmigh735PqFreX3EXi1cIxgU03--YKhVcmozYb94k7yietGdeOPJH5QSgloilFY9jsib2kWrZXdD0kLQUXknPCJjQO95BZHK552noIKU2VWWW24sbZe9Xysyl2HwSFJqbE6E8OkZs4AR_ZOJ7x8ECDbRuhOTF7_zUD5R0btgtFu9OShPW0V2JDL4c5u4PW6b_tDwebk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118420795319827050972\">Jan w.</a>"] },
            { photoReference: "AWCwydhCeE3-_Dxmgh3pPb6_r_-G4p-AAZTaY1-thDzWPQrbGmlJGSMENFu1wvZkGLIZJwnil-Y-97hyMqB4SGvWxjSe7PqOunAeQBGm8IqCoDE9EdNtfj04XqIVSHRNAcPWUsN2s0MO6E5SDF6xSILkaZmtnbpQ-SqAxOMER_wWeDoupHqaj7hj8LR8bmvn9HCUjOQKM-gpQSnOOmDI4laqNl5mLsBQZMNReFoA7tGsCPr-K-pl2kaCz15LwGvszdlEbKHw3WryIqT8n6XYabVBAQ-gQhbZSTTeelxAa-ZK-NBDWDn4L4IYRDPs6-apwghtK1ZeE7aPj7oaSJBLmLiKq384o3W6UFxc3LvJSlgyoSbCN5Rx6xLxk2L4kxlcz5iVidfh0jccoROvACulPHeQ8M23zmcM1UKSoLMVwvux6K5HO1i9BX5GfJgxmElfYq0b", width: 4000, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103871971120607054965\">Charlie Yun 다이아몬드 국제딜러 윤영진.</a>"] },
            { photoReference: "AWCwydiE9bAr1RCbU09FbnF2xb2_WVnKsb7QGiRlYpG1Zvt64ZReBemkTdDju-cUTL9l9lHra0rsB1zpwTeBpALHX4JZFPH1Eb3NOo_b5hGCI85OY4-kJ9d9IZyyTyGL-KRS1jzijUAsiK_bMvVjg_uqT0tU9vh7JX78qF8KV2O4dhLKnB9Cxf-l5IOyiArgE2cR8_pb-FfqGGpBmgNGvAOlsxL7RsE0gwY7BV7-gWmfoYPzY-cbw5WaNgbFp3AU6ZSWvytiaJlAvSvqzTGjT73alAGgvJXPD633U8iDdVZVRYDPoUpCiAoGl4vfy-6betK-kTsLDyTnkeS_B5KQ2s4G-yhqLPjoRDpXV3aYDfgG763Jyfwr8KFjpFG1AfH7zwhIEsLLll7wXWsXf_hHtcI5FIjSMet_xLYlhW8tnSbtD-uSRzp8AsX_M0chBBg6sWaQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118420795319827050972\">Jan w.</a>"] },
            { photoReference: "AWCwydgPCrl4z-M9qVgI8iTVhAZvn9bmqEC10-Rtp9w5bIjRMKKiNl4pJNLM-XClplbFKSxmO9qH4vNF2xitznZegMa9MP-8Q-Yo9gnO-vtXHaZ8TmrjZC7BW_QdSQy7zW7FTEcIp6JxDe7XcD_Xfo-ToPLFvFmor1-3xo1MeWK57UjyfCFNN2bqSenW-Zaenl-N9FJFaDBLjrBSLgCBuvcO0N0lgVrAj8EllKme4zkEOucj9bGlk_E-VZS6MzcdykbPOkYcp0KRqLD9zgd6ziIUMvQw5ExaZcrlXvsI10nQJkt6s1cXR1k5rGHZ38bY_PyRCulm8_qPOD0ky-0mrSBNx5w9AZSdzMhwI8QCZhkDdp8Q-5nsHnOWEcA5-2D7fL3BaQM25IVeEJgTm1AjjYw6r5OPTDAOnthf4okZ4R7o6dtZR4MgAz8WvtLcmGMSeg", width: 4000, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101249795832651227213\">TS Kim</a>"] },
            { photoReference: "AWCwydhZd2415G-Ae_NAUH8sMIb9vf2b796lRv-ln1uiFzf4-OYoiOH7Sw_U1FWQFGQoKawik-d7G5rUuEMznrXVlMt1iGIVz4OqB8v34NWJAVswEpeJcyJifNqR3d3GFLOE9DXJ7HwxAAld8rLpjLxKa2-diGRXfhXGqS5UZg_mH4NBM0GBtJalEFXsBZWfIoMPu3_tSdZ5XWOYJt4Rz3tpEhvm3KXpe9hm8Nx4EFPaJ_hq5zqDf9BzBLOMUbCXG0qDC-MViEA6i4fvrGLtwlab4J07FGaRGrhTRalr_1_8ttltpiJOc73yDvJ9zQ6qgLaBrBRbVTqb4ADI0krDH0RHVr6VpTL5Dsm4u9SA1TSDb5bmzfRZbMjMJvL8GHVGqyvV3h1F9yQPc6LqM6Sg9JOR7uQK6p0qVegC1VL-pnGw5hdpdvzV2xj3YvjXiW3MlKON", width: 1848, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101249795832651227213\">TS Kim</a>"] }
        ],
        summary: "샹그릴라 호텔에서 즐기는 품격 있는 정통 중식과 딤섬 맛집",
        updatedAt: "2026-07-14",
        highlights: ["부드러운 식감의 프리미엄 딤섬", "고급스러운 분위기의 호텔 다이닝"],
        tips: ["가족 모임이나 기념일 식사 장소로 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "호텔 중식·딤섬", items: [{ name: "대표 메뉴", price: "¥200~600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:00; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.shangri-la.com/dalian/shangrila/dining/restaurants/shang-palace/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=948497323271653915", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%B9+%ED%8C%B0%EB%A6%AC%EC%8A%A4+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카페 코펜하겐 다롄": {
        photos: ["/images/dalian/info/restaurants/cafe-copenhagen-dalian.jpg"],
        placeId: "ChIJ8cIMJU_1hTURZPvhxT3VZNk",
        placePhotos: [
            { photoReference: "AWCwydh8XgMvmckHbKRgUg9NSgQCLscPh1TAC835qdHH3hSY3ZCqA3Zk1vRRHtCqrEV3sJwGc-xzV1EM2xMJ4WzLovSCLDZrqSKg8M8DJYrXueKADX5QaDOpE7iA7JzRw9GrIqRmho24qQv5SU7LDjWUKMH5Qj_cCKS5C9XUl9oMqyzHQU4cFl3bTXPIvUw2AxBPf4fZ6FGmYAOZFg7nO5ncj1rtlJagDA76ya3S_4LUpbSC8IYCwFIfNAJyruiNlze7icXaRKkhZVkwOCg7yG_gBp7a_MyrYXGZMuM3s_nWK-pUmlG_t6V_K1g9KiUesbgJ3wtX_9Rt_BbReYXV_vK4JHwW82bAHnWzGJQbeUP4_M-6e52mGPXVErpHe4IfgJnTpalTOJG3BweZLfHEDHLw8i8CQYJp8kE6KQsU1cDnmFHcey0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102465199212605957248\">Hiroshima Wiki</a>"] },
            { photoReference: "AWCwydiGz0wRPVhvao33FfHIwCqcO9zDZl9H49eDfaOMkWdvA7s4hl2iT7iSCJmqkDwwI3jxNG4Ffuj5SKXCoolxG_djtJm02Pz9-CiO5zjM4GeaSzIrZfDXdASBsn6aSblQRHOgmr-uL-RrhBkWcbacaF0OkbYlpKetNU5ewBmtAIPwOn7mPlqJDbYzD0Eh_StZm5H3xWOk1jYEUT94ogcEbUkr0z40UoqP_elZxMv1rflXhFgeykEAphKSQc0LarbkJgkrAq84Rj0jCt33yhdddi4VUZESpIW0yydSlWoBUXYpQRGEMoyYMdECGrqMBNJMTfKkln3Cun_YejKuPMpd8yyJUI4Ig-xipzcxAYKYn9nBiwC0fcJgNuSFIFuhS5FdD_-HEF3HXumaxVSFVV376BA_5VH0ctWl3Gl9ioeFKtGPhg", width: 4032, height: 1960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116547857815254920728\">Daniel Roberts</a>"] },
            { photoReference: "AWCwydgyxS_jq7zAMDO2_kfME6FaVO8r7igk28SJ0eDuaw4hFKHt7K10ffYHjH7lrALl2kyW4fGgm_19QQ5KgkMqRucmGagHjX-O3TD-Od3ISpau-Hs6XcNtykgvX0I8oJtM7ODZtRDUNGllZDetfSkT2LikvQXlafA4xiwy9VvDczE7hqG-kwXAKX0Kf_be_7RZrUIDLmKPW1CwgerX3aLeHtTgV40bwVIa6WfMHXaff2BR-cv6hzNTtCT1cOkSyYCmASuoEtXUnAVVyOPg_OOjxi-tsWJkEpetbr_felt_yCbBpLTX5CWeB30dTaKlBwggwn5AfsOIpkga1_ov70h6KwJsh0dsk9Y7fM_a2YAv0CTqvtJ69yjeiNeuzNq5S4cOuCApfMEu3v8_t52_bIsLGey4kKJmWFnIPXNVgT3opAs-c3w", width: 1960, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116547857815254920728\">Daniel Roberts</a>"] },
            { photoReference: "AWCwydgshGygp7zfy54sabR2nyfUSS7nIsvjpKXVa2H5wOnCYLA5gcRPPnxyHGYCzScxSZJrXAxmQctJdWY62Qm5frytWzVn2uRL5JXNEKHfqa3tCZZ-CPiWeQ4whMAKrPxiqJ00CFeR5YHgLhz2fod6Q77c_XAhfRUsR1jPCvtidWCuugOzv4SfAF35wcVafUBr0lS0ld0ZIe3x_4y6Gpd3FWc9Ma3-BGaDDOjRWNaUBoLtzAqYCU2pk1qE7PUcIkywaiR7u6_Bo1CeBd8d7571NW7G4qODYGIhOQvPkcVMS_RBPp90feaRiPZeaENOWc2K_L9adWM2nYAHiJTW-SG6F3aO2usJ1wnRp9sd7k-PMh-kAXsM9vvCvi0mED-AGIPJ4-9Qqd_GuUR4N3asFDfZospL9dD00HeMQpYi0gXloyYT0KG_", width: 1960, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116547857815254920728\">Daniel Roberts</a>"] },
            { photoReference: "AWCwydgA_BAxD57LCED6H3wZzzO1atC2XYmU21VfIik_EUOaeHq1xtwsg6hi58YQr9njR-aJqkBke3n_xnq5udxaRumuUEIOO7kRaNeWsothALE6Nu66DwziXwYivKSOJVzOCv_eGKLtdAJyNPArZjx4rknxdoeQCZ429B3radktekMuk9cXSS-Yzi_I-aFazbZHLmQMp9zvP0mGEbft-xKgLkyAehpHgMLm-9rSpcK0m8_7qEOFJzUCJsqyelW_Jdc28Hy3qNFCTMBJRo1Ot2Doj_LOjMVGtZp12yQwIeo53vGs9iM7B1aTULbZHrflPN03LK5tboUg2UF3GNXSzqx2ew3yqz1O4lR0XA9aS7VQ0y3N0Hk8ZPDik-utcOJnrBP2e_j0RMKA4VfTPztjox9YZQrYuqYzN8FQXIU8m8aLXlESt4M", width: 4032, height: 1960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116547857815254920728\">Daniel Roberts</a>"] }
        ],
        summary: "여유로운 브런치를 즐기기 좋은 감성 가득한 카페",
        updatedAt: "2026-07-14",
        highlights: ["다양한 메뉴의 브런치 플레이트", "분위기 좋은 인테리어와 향긋한 커피"],
        tips: ["햇살 잘 드는 창가 자리를 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커피·브런치", items: [{ name: "대표 메뉴", price: "¥50~180", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15664879865191070564", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%98+%EC%BD%94%ED%8E%9C%ED%95%98%EA%B2%90+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "블루프로그 다롄": {
        photos: ["/images/dalian/info/restaurants/blue-frog-dalian.jpg"],
        placeId: "ChIJRzo6IKqKhTURzSRy5U9wpcM",
        placePhotos: [
            { photoReference: "AWCwydiSB3FKYSPPY3KKYIabZsIRE7DNy5v7qoFZBix4qSJJ_7CTp06aUoKRZAb79wQE9qnmnp4m3RsNAUXw8czZbQyCogUNBiQktXbXZID5nPRkBKXAs37iVZb7uz4yrKnvFVzH4yTz3ze34D9WMptjaRvXrjDjAOBnW3VqNnXqJzx_NgoBXYV9ImulSok_rM2_T0gaPWNIYGU2xtyUuhS7rB76Ofn0YP--4xanjoSuidkUlCt4ARUoCZByOjgYF-j3gZxaMVWZvxBR2YnBr7KcuPrDPLBzaFHmM-mTvoZ3o_AOOSSa5O4EhCttlanafUHX7jvMUdxepou9FmtXNP65z82Zd4CDeLj947IhJ_kfMBOne8faKBb9_Sv9ZfmQTxDKcnrE62gO3L5NMI-H68KHBAcFX1cl0xkN5WG3EOfxqde3jg", width: 4618, height: 3464, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109328989740800077164\">咪眼</a>"] },
            { photoReference: "AWCwydhgE0V_uIeZ63hcfTqFvXLwEsFlLAAIpZBqU_d3orLrQfbRnLyJzMxV9sBGUMEwucUNglBZQvMngd022LYoQFlmxEYTWVBlobCvnI5DNdf0-ZodMiVYWnRl1Ysc5YNjax7TfpgG8DfZUtbG_V6-pRH0lmwDF4-MvouuMKqoD-bpMY8gUC202SySxiJVfsDFrEaSL1g3Ni2uKFApPKjfedwjatRc1TkVJxpRepVn16bTfoisDWdbwdySEe6Om-MDCfpS-2GJRJswzmkiBM0YC2llnMSd-rCzGS24vfR8ASkAskXLIO7lGdATfhlrHOUTUy-UwsrqxPd66-O0FioQWnjIbiPMQ4bWw5sM0XEO_-GRO6AgJp_LH9aATmmlP8yM06rffIDl03MnKmZddHkZJg-hQMxAcpCLATTsC7wOoCjoibNt", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112851182896144447317\">Paul Mercer</a>"] },
            { photoReference: "AWCwydirWwo04XN5BL8O_kQ8Mf1PwnX4UKUQ1ctfNo9lBg6lB_RcgJpP5GfFg5lmFpvd-w_gMqScDvOU3Nqv49TAPIbCgvYMBMs72OymwweTbl7OkxgHeutxdlM115KGDxUzxMuZyzz6YHxCJSmptHescsFKs1Dl0Xaf9pjPcs8kNLu9WdzXY8MXIkeggn43KkHTVUxzbfOWIhYtvy-kd24qonTvSI-PSrQoszr6vUWm2Hky5yoM2gEAgDOi9DfsO38QM6nW1Sl5Mi5_NRKTk-LaSx353CtbLPSZT3u3K7knisrgb4t7IC73FmdCMGIWhuikY-31tJL-5ALiMkiHXwh6dBm8-hfDpdl0j9kVlg1dxSOV4yvFWFCIXPIJAbOeSlUHDaPpUh_-sgfcQfZgLgxYKH71MqKD_G-745vl3FgsNwC0KA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103350094503368684131\">kevin wu</a>"] },
            { photoReference: "AWCwydifIjyX4HxWyfeEqohttjZXwUVLh9dG-8OcBwVi69MpOXjzUxMFzSlWtVCwEAjp7tNWmy2_A03l_hLCfL0yCb5RdJUCtG7U64KaxF6ZuuQd7LButvkVyhEA8CpEAYglLywjQ3D54mrCPhSOVWbGJ4j3csl-fi-ZSisbB3mrpl63judItfwNM1rq7Mafcuw3AQikYtL70EZ2NaBqfLhrs4_LrqmnyfTzS583HL30kLLtJ9UNjDpMH1ddfTS-Usk1Kc4mghcvFLw3KaZvCsUZRyJg-rfEmeEf5huwiiqaAYRF3hhZLhA7To0bSVCL8alFNcC8PWVKr2SQXamDEc7VSedjlKDhbuXSyxp-SHb_XQ69ib3RHbOWhog3S3lT59B1uOCHdCx93k9ktwjWiZrtUIE6FMRBfBvbxnQVhTrA8vK0iA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107708158119040520559\">Alice Honda</a>"] },
            { photoReference: "AWCwydirIhp8jg2NNoM3rIXHCGDSGm8K2vFMXARFuRIlsp5Mx2Yhi55VYr5fre-yZ9qGd0CY9KXoC-V4f6PzMJbHYZ6lh25l-2aIxHZ18IXAnwM8g0F8oDlK_n8XrjWVunPB-Edh5EC72Zgmia-7nWDNGJFtCzrTS66o9J-GIvVqrUxZWcK53B-TmwRL0PlCmcM7AkGrOWPc3bhse6M77R7vkX-E78wgrADvvWdJZXD3j20j7TomjkLJmuQmaXEunb33bxR3TznXynxJAp2h04haqPPRlgShgLPtEglgQTonszystcK4e29u3J4eJLf96BVNInIPyy7Ld3HkBIkYT7sw0ZXhwAz7EcBh0zwKiR-vIpDDo2B-W05e-TOCBzgcoB7g8l1d1nd7P35LuFNx7fK3Lbtrdq3xkLCiQxmCkzcPXwbVtu8", width: 1080, height: 1918, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117799548398037315076\">Edward Asquith</a>"] }
        ],
        summary: "육즙 가득한 수제 버거와 시원한 맥주를 즐길 수 있는 곳",
        updatedAt: "2026-07-14",
        highlights: ["두툼하고 맛있는 수제 버거", "캐주얼하게 즐기는 맥주 한 잔"],
        tips: ["친구들과 캐주얼한 저녁 식사로 딱이에요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "버거·맥주", items: [{ name: "대표 메뉴", price: "¥100~280", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.bluefrog.com.cn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14097797697007396045", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%94%EB%A3%A8%ED%94%84%EB%A1%9C%EA%B7%B8+%EB%8B%A4%EB%A1%84+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시안루 야시장": {
        photos: ["/images/dalian/info/restaurants/xian-road-night-market.jpg"],
        placeId: "ChIJlXe5EFL1hTURi3kmfoYrczw",
        placePhotos: [
            { photoReference: "AWCwydjPDCsJW3AthjiFKc2joH3a9Zbe2v4kYD2Ub5kSGgB9Cfm6zUG8RzHEL7Z9Owqc5mXGDhhhw7rny-iNeXfc1N5_9qZg82cq5zml6dDHXnVP4rSRbULlTobCQtRBwCFGtTnMYWQvhYGpWlaK_J7o-5NBL13Ih-XZNkfpAV9D5DjCsRKYbJk5HhWF567zSKLoitGL0Pfch9egU-pvfTajJQJ0pxlwgU-nsWuNdUrZavYGqx1KkZ6VPPjjrgufOsP6ePP4vEnwKB-iNnZZ_czsYLhiP5p8jTR1MjmQ3XyCnj3uXDoYeJsCn7QHAp9aY8pzYJaMuB54YXP35I1EGr5_uEb-cSG9tkdfm1XFXmUaUJ1VR5IRRF4j76I9s3OcXLHrSiiT5efGyLVbtAZU4MihYwdG4qhthTXw1-D49sKcfr6KYw", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109083084174695909872\">TONY LIU</a>"] },
            { photoReference: "AWCwydiZmzmYxS7dS_nwswjUYgQLVZpJasBaznzboFeaYCWN3dvIFI8p-DnKkbJfA0POfPfwLBkAiyelaSBq_GbaDAKOFTE_ZKZNkExumNqZIL5fe3byVD_8DuhxsecoiJRAvZeihx6eqQExN2I_u0mpTBIV32sriVahhWvmvsWk1QGaBf1LHuNjv4rUc5tFv4GnaNZRlzNTQzQg2OPrRsw3qz_hZZPAQwH7hMedCGt5uFX27gYex0NSp_PlbS1PcoGPwxldTXDMPfIZboGmG4VR10BBsUGjlNcK_k1vdXLoa7Y_N-PsjAxd8nxVR7PCQAPJgHv_0e-gmlvLQhzJ3ZZVtUAuZZRa83HnyEgzo-MYxZVNxYGrytwwz7e9ZAx8ntV2cB12IwIG9dakV78fUqsu-De_12oR8-xJz_clMJHyu9M-_PLw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103782130873937138196\">Alex Fung</a>"] }
        ],
        summary: "다양한 중국 전통 간식을 저렴한 가격에 즐길 수 있는 다롄 대표 야시장",
        updatedAt: "2026-07-23",
        highlights: ["다채로운 중국 길거리 음식 체험", "활기찬 현지 밤문화 분위기", "부담 없는 가성비 맛집 탐방"],
        tips: ["현금을 준비하거나 모바일 결제(Alipay/WeChat Pay)를 활용하세요.", "인기 있는 노점은 대기 줄이 길 수 있으니 여유 있게 방문하세요."],
        reservation: { required: false, method: "피크타임 방문 전 현지 상황 확인 권장" },
        menu: { signature: "꼬치구이, 만두, 탕후루 등 다채로운 중국식 로컬 스낵", items: [{ name: "대표 먹거리", price: "¥20~80", note: "메뉴와 가격은 현지 상황에 따라 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "현지 결제수단 확인"],
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=4704959083327294070", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=4704959083327294070", type: "guide", description: "지도에서 위치 보기" }]
    }
};

export default info;
