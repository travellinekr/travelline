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
    },
    "진자 코리안 바비큐": {
        photos: [],
        placeId: "ChIJ_ULk91FgjzURApgt_rhcY1Y",
        placePhotos: [
            { photoReference: "AWCwydhNEWj5nwL19zfCy08G6poLUkOmoE31xw9R6jq--KcXJMEOJrpk7JDLMHCmOkoXvidvtdl3YNBhq7rexnLEPYDXrP32SUu7Pnx7IjlZT_E0f3auaEkfmYQevtAxQe9fG1pdvv-8xe34JjZigXzRPA7ATtV7iH-b0LsM5pxbAhmE5mCuHN5XbialmghsNWOzM1IcY3tuSO9Glh7snSRcSVl_-w-FFQuPRYV3X7WC7MHD5gYLa5QRTYfbVSJrk8T5zeCEHisenS-eaHgLw0oSstt9xSVTYjv8-fkM1GqGXYaENqkEtPs8DoVkMfzoMc8iEKaVJQk2pA2Of5K03HrYfn9FhjsBy6ALQ5KPDAokiUIErpeo_vUUrTFRJZADWLgRQ7aDPaKwezBtBFoEHe5cIO0xgT-Z9pwae4NuM6qO-jWXssZ-OI2GqJNylkaLkw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105653965946796081114\">Lisa</a>"] },
            { photoReference: "AWCwydheyBdrPAPIUuVaDnTKVNi5OCPeV1aXPfYiY1Vt2Wpjv0RtoE68zvp77QE3J5awl3tYUEb8chvZXsmEJZr3bqs2IyzejH75oosbZWLlBi9C0WDnr2yxGH-kcXXmu7QzNsPae_Eb0jf8fYiAjMlmn6n-KFVG8Px87iE2jfSIl2oziHlyEqvPwgr-PHzOyspMg1pdAz8gbhizKzEFk-VQLzzXMnUmQn1CMHa7qNIRoQatx8b2d8MqdzKsFgySZM9p35VTuKUcI-fNeNq7Te6ZYHDwReSJbMBUrHRRgWo2OUslgl2F6eG2v8dZvqmQpbBQkai-yQmP-yQQyrV_qtEquFgW856UKL8txZ-8FFNKI-pvCz4DavB0Kc9LjQ8U4EU33yErs_lgXxHjIEmPGr2N5N4PX1r3q20oS0tkZyn9RoA0O5qzdxh72W0eu-yyMuxd", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105653965946796081114\">Lisa</a>"] },
            { photoReference: "AWCwydgMVJP1kpXjaDIiw1ltBefS1fZmp6d9YHCdVf8dF66waBbJtSAIvWJG7Y89ojGwpqGjllcnVv4dU3Nq0VW6ditLX4gPEaIftPIYSrm48nc5PGh-nhcDGd5BKDT95VA7on--zrIkxJe84gxzA9pMjd-EdT2M-fEtPvQ1t_td7DGoQcPz3ZMzCCEXQ3nUky6lj1XH3PVecT-BkRla9veI5SnZZQHZd7H6_W22ioLrvSpYr-Wm2tlt6QHdVWrVo_2smV58STx3IabwlLs7S9AhbTv7SVniYZGDRj_1dmOhgRqMWm_ZYiZ9mi5hnZlrbXByKnAGTs0FQhL6QOh33xM4mC3yf7fWuKrBScPm9ATWU-0v_3vqIlaDNNdAZuDqdKhYBUvrujMwgSIg7gdb6siVWvL-3sGfaz05GPuPw_v1D6EoFXSYxjYnUaj9WIYG-Q", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105653965946796081114\">Lisa</a>"] },
            { photoReference: "AWCwydgGHjoBJumD4Ty-7IWeFA2Yc8yQJxev0259ubvapDinrNB9j1BCeHSFmEiiRwCoT8sK9XjSO3Z3Vp8Gc2Gv1aZdz_Qk0ws0_jQY7XlSUBzBwn2fSN_ofuBV2E4fNE5UNfDEDRQHpvUO4Orz9Fm04jcBlmqtO7pQZxm1GT3ztwSuSzB86ZCCiNrw-cHc1kIax40YZz5Z0VXvjWUx4SO1UBg2lzVKy2tCYZQgx2u_iNmadxWC6-JNOKSJY8BLxfZmLveGnp_IGAmrv5V81cL3hKPReiY5cPIaPAq5R_n04NnPzl4XtmE_tD7_YR5HFxuowr1sCcUdcjmO9SmcIbnSmJMyF1mapN8EFGqoXj-i6VnTLQ2QL1iP5eIpyxFjBjP4kr68MKTGOETfYoC6tUiA82nA8mTdUvFOktyTqrzbQ-BQ7_Ar4I9bsiZalzclmQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105653965946796081114\">Lisa</a>"] }
        ],
        summary: "한국 음식을 전문으로 하는 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["한국 음식 중 최고라는 평가", "높은 평점"],
        tips: ["예약은 필수입니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6224921059564296194", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Jinjia+Korean+Barbecue+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "구이마 일식": {
        photos: [],
        placeId: "ChIJ-0LVA0b1hTURnUtez4gjmRo",
        placePhotos: [
            { photoReference: "AWCwydiNHD6ubJ5CR6UGrvld6XKuYEbsG42qJUU_ZgkPsGeYrtQWPJwEQahBnwO0B6s2U1DpaqVcouqOsM8NMJiUPQgao2v78mJ8iQ8XdXsO9lCwkH--1qBDU-1mf92020uEtTBX_wuQLFZ6sVaexuYAt2vjKRLXHTp3CJLV9W8KlhmXhTI1XqKO-060p93FkS8O2zJqhnfdB8BgaGVPYr2L2GYPkvbeXJfVLkmG4iWD2FNyC9yOspTn-1dQX9hFlSfMwIngaHQm6sM09AwrVXF44SrvKoyuShUh8x7TuJTEjJnIs5oBuUjq8pe-owlKILHOZsIACqfGDNAredWf3eumHYfWPAZf6daGyTuLLMb3GsQnh9B6_kawo7CLImxImnrsU0tajBolIdj8k1YDpY1fbyeItPCOHnD8SQ0R4JYrrpI", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104429389056264404375\">Noriyuki Miyao</a>"] },
            { photoReference: "AWCwydiHMMJHVXnfvd1w5wsSTHQHZv8D-REtTepCvuCz9GWJnuinBPjfgSUcEaASNJD-PM2aWPko2GQG8p5LN9ZqfKnerlV8NTU1WkEAtQ6EOIe2KRARN_pdPp4IOXUmSIpK28vCCtvmjyJuZg0WwXqnDdAuzUgjx8EsVwI5gmmjpDaQVG7x9M9s3omkJSAn6DiGmaScc2a14ogHjeDIuBHb5MkXk8mERESROMs6eAnJyW4IFBVVecTYxBfNaBatmwpk50XHnhGwA3cG-wyZyoSt1Dmi1KqFRZvaD4S-w_TtCoeEv2DiN923GxylJhIIw8cfiOsitKYHpi0-wGIUJvwRZ3Pha44cl3X7402UBccMPaahYSX3QlysvBTycLFyCVdhKUY8am5XBiUD5s1D3ERJAzEw_BMwrRnfCFdBekCcp2YUpA", width: 2620, height: 4656, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111330013222733941701\">hiro</a>"] },
            { photoReference: "AWCwydhTsMsp5LFWtC3QFmj9tnm3LSOWE5IrpYBaGf1ztFfVJZd8qq2uJB6Ry22OghD7BMFxfwiFIA3Zp0KojZ5JVoZUyeuYB3clfrZJoEvPD9sopV1ax70PNGQa9c-DkFIlCxePMoW5nWSLaFrRfZTr2HFpm0hd4_rjGu4A4Dhk4uQR17UT_oFL1jL4hHXyUdpz_NBZhQCc6q-Li019Tr0OxWbKR4MXZDfijzkD0WHu0Mpj36E0d_OrshVPz-fvQY9HI5hOeE7mNMB0X41vMidw0vLwiHTZn12qZk4kSnriSxadeyehnZZAuxsc-OCBzCdt3nqw5kEjtrFSkd0i0gD3fGc1jHsyKks3DLV8hkY6gb_9w2lFnF8b52htHO2JrMTNInyJwSSYYa0v2iJMCJvW1VuD3gFYswot64trT_xMasome4WX", width: 4656, height: 2620, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111330013222733941701\">hiro</a>"] },
            { photoReference: "AWCwydhFrduf6CKZlUmSYbqbNgZfmrpQQr6JyuIIFD7rdqk6ofSbdrkIyWrEbAb49Y-cqjwZUlrzKQmtyc_jhuKjGheL0WL0XE9T4sX4n0a4M5eejqarAJt_JgK6435IBdi2WDV15C45Rf6G9rGY5f6NTZXeKBZkwGuIaosalcx_RdKgQL8Kuu7rNck2RvQ9alPnkTJu7zCU7AJyFdO_rzen5My7xO8fE3fQVc0Vku5NL2-rITtdcopfdLeO5P_RC1fJ6e--2AHN6CniibFK706vtcg6o4zdF_9VH-IIRGAbwk0Gc0lSqQlhfROGddhQy8mR_XnusCyppvkCDKAIAp2gZ5DpCPSPe9gHrj__Uhl-1loJfPyF9bDhfDfSW4d19Bkjs6fpos5Sl0t11mhI_iMxs0aciIxdWuE1mSWMfRb7xYQ37-o7", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104429389056264404375\">Noriyuki Miyao</a>"] },
            { photoReference: "AWCwydgLvce0FPs5JZSrFPxx4UjJqFE55ZqOyzah6V99TvLXYcpnjUHN2mjbqDKvqSwFwooDAldfEOsp5AfxXdNrlI984CqiiKSN-47HuMzWyj4gyCslNbqQ6LErgQGAQxR1JmoRujF2Vj_QPjQ8YdSv8LuNPjgx-tg9sIkmPdNJKEiqPBCRB87xkHppZaerwj8fxVk58fmay6tx2twSF2HLHdGeo7LHIuFBfCWAmmEUoF12U1WMUH2AHn9QhoYrDJytnd6SATAYQfpM1q6jxEA_vnp3vopzaKcLXhbUsO1OhRxv4J6BF8Udbv7rJA8hPaPuQGHCD3LDly2flzOcoOJnpt64G_W2YZMAwm1wCNdr6ol3sX84obKQTfNW2iHINE6AV5HhZ1V2oawISXOCf1OZ3fKcscA5neB6ppVuiVVEOND6deErRH4QO6gJTZZOMA_S", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118008286456279043670\">T O</a>"] }
        ],
        summary: "직원들이 매우 친절한 일본 요리 전문점",
        updatedAt: "2026-08-16",
        highlights: ["친절한 직원", "일본식 요리"],
        tips: ["생맥주 맛을 확인해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1916602186924444573", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Guima+Japanese+Cuisine+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "시미즈 일식당": {
        photos: [],
        placeId: "ChIJid5oq6dhjzURelLoZkWykCY",
        placePhotos: [
            { photoReference: "AWCwydjS1xfyMfnZY2GsUBKr0tsi8MbvgpOFK-60rit9FGhBoJCeOdIdbXRv3fI3wXd8ZAeyTdYkFLaf8t3ojZqDFom0FjNX7OUYAbR-0jpCDBFhV7xt2YpEiO2wnLDMq9G1hAn1UPquU2y7qMP1HKkK_uKQ0YQPSDiFDzOWwYCHvqxmNC5OAGu25EOreS71CmsrASwPS5e_omiPMqBe8SZ3q3FeKWKO84ksBdLVUf1Zutn54-zo9C1y-mpjUplKFqt7_hrWzuGsfXJGKsBtnEzi_Cp3TlIO0Wiby-KKTdgfdhdJ65u_aV_JDq0Pl-wMqyZ26wrRbS9RAv2bqd14QLy9DMPsUKkjUCXkj0lkVXBB3DuKoKdyMKb9yXd5GiNUZSQaKnH2aPSs0k-O7Yfeu7vf-bjAHNwf8a2XJJ5jQ_WJvb9Q6PMt6qQA2XaS4ill2LR2", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101662618099471330004\">Hsiu-Ying Kuo</a>"] },
            { photoReference: "AWCwydjMHLV3Tp4q0E8XDf-F7XHE8C7WuBgOvU_N6g4uMny52HNvPOT4eIlMoB-EeEXHyZk2kmvh-UrMpxNQXdHMknByxGYArKCXVDXxaraDwrlWK4tUrlI3kfhKlEc5ynUY1d8VZm2pVD8m58KWjyi2B2OgWo6xnBANLJJI4I8KUkR6Na9DWDu8mJywUD7B-4qNmiGq3oVnZSkuy3P8GEJ_tjXhFTeegsruZhWTpCWoChnHGHW3m7Qq0-d0LfCdrh7oTTPdbHCTmnokeZlgdaMeP7qJn9lyv7S01obtaBGtJ32R1tJHS0sRBU-C_1zOwm_CgFCXFjaFmThReJhEas2xu4R3dxGvRCs9ci9K0tn_ipjNthCJr4Bd0felyLC41emonOuZb51axrIRh2oVWrpGXilkEhDtR9NazpAyc7BdlGjSF_j_JJAc6FkWuuTJ29tL", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101662618099471330004\">Hsiu-Ying Kuo</a>"] },
            { photoReference: "AWCwydirAaE-Iph1Jomb7Y01W9Fp11yNOy87CKuTW4i18lOKcbuGWl_ngbsovih8sLlkHWxg6cwdgjZwf2jVJd6WsQ7_hYNCHLOmod9uOLAiaaWQHcYqBIdBmylnxPsIl0Ktj6om_k1zcj4pUc0l6lEvC-6GV6_S9zmhKytTwPGTDtK2kOf0TDKu8GfmKvLDY9gcJRRermZ_gtsmQvHJyxmsj607J1iySIPDIJA7qp-wt5V7ThoXQi8Jk3AwVBj2_5gDq1n9xEajFMbGlNbRoNrmE8nG-Ca7xaRS31kc2L-R03HwQ-EoHTE6FI2T4FYyCiCOfC8B7PByZN4VL7e5j4n8T_CPHpmWlpVeOOrb9OXdtcmQ9UXgG1_lAuBEaQ_t11dXamHH0zll63pO0FFklZW9ctiAT-I1Gnzlx0wwV7nijNOQ6rFcfhuEbOuljHhoWHCy", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101662618099471330004\">Hsiu-Ying Kuo</a>"] },
            { photoReference: "AWCwydiqfKQmT78ef3dcCuLktRODWMbtBqLJBh6tlhvoYUs3ugQv-B3bh9kSkccLpuoue3Qh_Mr6-ah9tvo-le2lbdnkwvYiNNh16UoiyWRAs2zd9hbdyi2B0UdbZ8JGEltSquId5ixPOAecnN-gAGbu5vLu1xvLV8kNXsFqIGITEHAmM95qm8JFVw6kPtSZh7U_o3girpJAHozqT0me4e03v90OLm0JWjtmkgYHYrKuwJuXA7APbPlZy5CpSAME1pHR90AveXl7mExQNT3qSUAoaEwv9pbxS5RitEmg_duVPgfbVG2IM9BKMn2XDKSNnI4z7qnQHrLNnT-gYieYcv93ypHi4JYyQtTNdKPVMHIT_dZsqEdjuT8nroa6SGsOZXguy8g_4oI4CL731n3FI-6MPiqKYwkENAOHAn_53bBa4C4fr950BIBUQtMh_tFyAPBW", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101662618099471330004\">Hsiu-Ying Kuo</a>"] },
            { photoReference: "AWCwydgdB-W8h1_tRmspK-gOot28TUykHTCoLUBg-7kzNatZ1Yr6jyVshgPNANguV_joRskDk8x0XzPzui75eAy0u6n0gg0V-IUDM9HrvhvQSJIJDQ4ESk7hxWEuQDSSmNjAAHDylFI7mzY8f_mJIW625z97dEfzorVP7aegfJ_sTLkqil54nv-N7lSr__M3ZIYDpp48VlgGVjJSrpH6rjCnvR9uHvAwvysTeOl5R2FBjd84l-DJAmtlDBz5VrPw6Ul_gDAjdXYJjg982Tx_45e45JNSTTyElctVoKQXmxHGwQlE5-5zEIBT_OoqtjfSvDCrCqBfqz06YRvDoRJTsBl8Kj0ZlG3jGUsU3b-59WnJl-H0D1lg0L2hi98plnZxIhQwVfW6jQAM1-Hg9GELjnQ9Goyk3XVg7Y3MQUfNcJfG3Mhbm8wWuxfDz1jmS81m0Q", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101662618099471330004\">Hsiu-Ying Kuo</a>"] }
        ],
        summary: "정겨운 분위기에서 즐기는 정통 대만식 일본 요리",
        updatedAt: "2026-08-16",
        highlights: ["전통적인 일본 식당 인테리어", "대만식 일본 음식의 전형적인 맛"],
        tips: ["가벼운 음식을 원할 때 방문하기 좋음"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2778916981236585082", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Japanese+Restaurant+Shimizu+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "셴성 프레시 스시": {
        photos: [],
        placeId: "ChIJremP7Uj1hTURjuWxRXlOKbI",
        placePhotos: [
            { photoReference: "AWCwydhtc5zhv1wTuPw_gLAltBVf_CrJGzJtYtbF6zgPDpYiL8BlaLAS_c3sKOEtm2378Os6gCPXAgbXPLeV4RVi1Bzs1ldnU8aH3VwakKK3nF5LUodP-CqJylo7S7_qz6df4P43E6VPmiVQ4aaYun8x_n6TpgMWc4z6b2_upzKaHGGfx09Gf9kOPx9YjzSDfYxHlalpeWgDxnAp1JwWOHedBmNw9bkBbF0yfLNEiqMm2XyRgKu7vQ2CrjlWB_ck5R8KkrIcN9e70u7CukUzCDu6Q9II6BRHNhmf8uCaxWc5YX8O0kx3cW4ujmvjVzEQpwbc0FBG_DG1qSfrZhqTHd0M7Cpsvyp6VD2nwoVNZPl3EfWg7GuKRhKotnnb2kX0xCntnZWnwOt30QMEWwz3fg7T1j08H_P2pgmiY5vmM0hMN7LswccF9N-LZZwMLsu4GGVn", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117008911936461827658\">NATNAPAT YINDEE</a>"] },
            { photoReference: "AWCwydisxuwCm9IftZCkqxc1LJW-p3VzPT64Dk_wHwCjd1vRxQSju8EMXEjKQryM1NHOWl19JYbqBVQq4cchEbXj4KpsQLzqzEf91ZS3qe4TlIYGwcmABVaupwzRihYxilP5_VhqZN0DkFwiBH1GRJX3RgJxLnufx0SsHY8sTeyI4qmIIALYMPY6SZFGrfb9WHfria9ama9_SW-LXz15SDntQ-iSgPG-Pp3YwD7NgbmwS_98JkaYtbNYccwufWRCLQEWmtFGRJu-H74ZwzRqfylBmVKCqTX-9L0QBVAWJ9mCip6t2nz_4AG8ium5J0iHPTlvKOLb_y-qQ-qLpwktztar7fCpTRzeyDcFWvxiH6HupqfCdKjP-6RGy3Kk2AR5IuRABnb6UGzswFnY4ualQq0YDp-U2ocvxBDtJyWXz7BirffEB3fnK3zypnHGdhDe-xMP", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117008911936461827658\">NATNAPAT YINDEE</a>"] },
            { photoReference: "AWCwydhs1-Yv7ShNwICzLaTmkOLgktjgKZxgH8OiPjfTIq9D73_EZZQxiegfer1uGgnRbhhgByAFmIbFllDCRWGVZhJ8qfodQCAJZyHWsDjA7SOxOw1LW9hnd20AqbT7IDoZopgM9ufBFift1wrMgjAARFgl28haBifiE2JYNdVdbQKYVDnPQjTtkGzAsku_AbwxQ2AlODKiVRa9iVmnsg1bHpSoWo4yPGOvOaRxf5nJ35yp0XChIQub3NUE8buC-Nyan6KRjcuuv-3xGDqsX0TBesOCloPeF8q3INnwG0OWnVX-ImvXR-3u9xIqaclG7_vqooDG2yNjL4Trc8YeSo9LrNwpiiE65WN4POu2Is2ZEA3r1EnIGZ_Hlpc9FyDwpozY3TDC41cXE_WcR0nItfAtIgbOCGRgdV3BkFsZZA9eqOE", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106399801773478416900\">우상진</a>"] },
            { photoReference: "AWCwydjQkUQG9jR3FW-D68TCxdALGzkzpPb_auv7Fb3xGEwTsiigalG7G7fG_caXTkrW-O3hJVNSeTSDjzUrr5BWpobBpE_SosB0pUUJN4Nk0zJ87IXk2_yqG_yWIDlkd6h7trpie51JioU-AuFywnzcxrLnSILC2GTqnrNUaH-gM4od4mWUVASf4pxansRwsUCZXmLHEUR8l3MbfBG42kbWPeXG7NORPgzWmdorxsoDK9jXStumtf4OBQRVVhtvh9optrJ7iES1O39mNfjJr_2JHhyN_0VGCuKEnDmEl-A7BM_Quo5mcrQUg9RD-rmuC8lR0vgpfZua-Hsd-7dxCtTQ4vH7Xdv0LiCJMUzi8_IvDUCIhmcFhOCgIIMAoar-RB6c3oE4nM0T3S3ABom0ecqCbDoixdP10PBMe6uSvaek-K4MPWY", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106399801773478416900\">우상진</a>"] },
            { photoReference: "AWCwydi_YKq6yFdlPlqV8F3odqBYtWo77NJUwjQZPXsq85bSGmZxy8EmkVhfZ7Wr_EpNrddwjlj-aZcppt9tyYu1tXPEaxOOpc6n0RfSDNcK5UZyfyI0YBgS93kN-TMdffSKLnr_jxeF9R9xEixmz1koUXQNn-d6dSUUQg05zuw0slGtfFTPJ4eccvvubhWnocPU7tEyPWoi_ZEfjSaPIITLJCmVD7cCHuOafYRGjMUYsRaK0pIwLi_56O73OI0El39MxG6eayKcdiwdTabCAo_QaemwLCqWHEgaCPSWOb_I-euJ3SuJi9mESV9IpV4bZyjaCcxGoZw2P97h8LIDGXDZpIzijgMWCf-uZtr6YL73kchTdl2bMVZj3iR4l1j_u1j0SAHMNisR6-sKf7CYgDzCUWggWtlNWgkNqrF4oJvAcX5OtGnCikztPZG0JYLNAQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117008911936461827658\">NATNAPAT YINDEE</a>"] }
        ],
        summary: "스시밥의 품질이 뛰어나고 프아그라 스시가 유명함",
        updatedAt: "2026-08-16",
        highlights: ["프아그라 스시", "맛있는 스시밥", "마무리 우동"],
        tips: ["마무리로 우동을 주문하는 것을 추천"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "프아그라 스시", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12837878495563605390", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Xiansheng+Fresh+Sushi+Store+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "보나자 키친 이탈리안 레스토랑": {
        photos: [],
        placeId: "ChIJSyiryTn1hTURzTY1iyyF6p4",
        placePhotos: [
            { photoReference: "AWCwydhHm7i0vEnUMlJbRC3AYom_BeKTP_jsII1xgpR8FSn-JfMZwmThuAJNbjmOSpg-5sAU8Eqf-rZn4eq8w64ym40b6OJpZB7iXigWUub9-nCo8rzfB9EuVY7Jk7pmbpl_s4vymJqwxaQMHUHfNl7QaaFWBho8xXHAUuKJ6cyhYQbpEupkNRIMSYos7j0MFsrSVx3FwT6nNqxKeBUTD3XumsTCKpYi5veYtkWmCjTcBvYjQsiLF3yhLTp8fN88vUVsEu7NhJzO3_eX1BQ8ZUC_lfvf1uvum5Y-79WdxqYhUZUoEHMojJmCvzNxlu_1mknZnO5__qnOqjFzcMjUATaAy1w8xeyE5VFlrNHnWcSwwV2r9rY_zRrPbvGaLriFsg3UUtzZf7fl8ZdQddceTsAi6YjOYsw8pnAdWxvOIn5vMg9NPlVxlq_csy7IcXfWXw", width: 4000, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117705279809972519081\">Sergey Kravchenko</a>"] },
            { photoReference: "AWCwydhKBPnhXhw_ZdJ0vnGIgfxOsgIPnyt6jAvIBz3vvz07wHh-fOXfzjjjrgb1ii_19YEGmNUfhlFiSRqsM3FTeVn63CFDxXFKi_ER9lVQdbX4EgaZuG0Ro4isSwIPnAHbTFINaqlICu_gKwg1lEOIpq8iqK3Mm8cpZzxj_Kg4rxxUueAmVKxhBhmUiiEg8OVh0GhTXdkoHQOJo6rJZF-t_HSUaQaxLSNnrKHSe8CPFXqL668QU8Y2fHLLjz9PJtsUcQIZyXAMSc9hTgQ-UVJnMSoBMqag7MHI6klYY_kM_4UEqi4Cvzo-f2X_fG3FKz7wkrRA6-_jB-gcGHdFi7htHa9MdOjMKQ0Megb5e2BeFx--UibeD348cyk7Z1nHq2fkUOU8xO9EPDoe9YTlttmNhO-dziA2iXUOrbZ1cVC90zfUOkMTgAZ8dLeu6_50DSiP", width: 1848, height: 2192, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117705279809972519081\">Sergey Kravchenko</a>"] }
        ],
        summary: "맛있는 스테이크와 버섯 수프가 유명한 곳",
        updatedAt: "2026-08-16",
        highlights: ["맛있는 스테이크", "추천 메뉴 버섯 수프"],
        tips: ["버섯 수프와 스테이크를 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스테이크", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11451111428903483085", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Bonazza+Kitchen+Italy+Restaurant+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "러시안 레스토랑": {
        photos: [],
        placeId: "ChIJF4VXUVD1hTURCBE1uX8q-KU",
        placePhotos: [
            { photoReference: "AWCwydgvnBWpJGXqw2cMKSBYvwiIlorVd0DVpnuMVO5Hau4HNcD5UCFpso2FJBc8SNsD1_igYjDi0scZDwdyyQ006p3q6xmrmztgANXR9dLBRDQjRumTnvLE_va2UZLR7THMgFJ_oBHJQYDVCMDDWjO2pjboEGDyqCvRVFvXtbUmVruqFD79nsDgy_iERnBC92NdpgcEMRr47AX4XJDg8AIxKuPdescwiywrPqx6W57kMueHJj9V968aWg48n9LdQwlJaGSnsWY9GpRfGs2XWPXX0UjrzHGLfRC8k_aIcxDgndoi3VJmkV2dE5wZPsqnV2pYp_QY8tM4yblGXaJPuq0GE13QWMJt0H9qpI97hg_QgV1N-_Bwb4s_jPt1RE-PlnPblYiWxxvzUbmjz-FJe1oPVYhCjhF55mENqqlg21uzO9R72n1HqFuVVnLJ9ItwMg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109153863484628657845\">No3だよー</a>"] },
            { photoReference: "AWCwydjYFuHn12rHvXBimlPJf55RiOouvhog4tSwkbENQUohVsYv1xmp0aOlpyUI5IF-BSPHWPegEjYj8wNHzyZqq2mJE9CpxLcYxYvMPr8cNAOWEMCiMmLcQkjcFnbK4ctXqOek9pjJFU1JOURWnGcbsy5aonorO6Id-ZHLwTazMPG6LZ9nd3CIJQZmp9i8qMWTuI_wd_ip_YjxqAHaiKmQQZjzuN2685Ax--C7yzXkaJHsX5lBcvTiiAlXnu-ul7W9CRUP4IRPytti32JFVZY75DG6WM1dsxJjRFxcEv3dg8UDWCrm-YxnnLd8H5qu5aMKS6dCzGPbo8vK2BQGgy6CqRUSv7v8HiF817jzknqW8YxeIWwqitoX5nKzgPm19-ZV6MxJpgkgXIuKzG9JhrRwRPnXSihaRpkksRYAxh7EplsiLBRp70c5aEzhxC0H7g", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109153863484628657845\">No3だよー</a>"] },
            { photoReference: "AWCwydgkA5X2_fuZ9czjKQJWtM7VhJjgfdQm30kmhyQMtyl9said6y68Sd2Dcd4A44i76hiePfNUbVxaBoId2Jrn3qv6_cUBMEwDWUb6SgT61Qa1_PQ4BtI9-rlhh6LNdHfxIIuqgZrutBEjYHQaEKPOlo1ea3wV0sRPRlQOUUrr-LiDRPw3DT8_-pTeG8cisU4g9SWSmjsUxq6xrBwnppNQ4oGGyW4qsQ4sNzyNIM9LZDA8E4j8vHNwXjpy_IEn-8J36gfmigbR2oLGqfZxLz_Ferg0WJHX1HwuR5as9h6QYiZADNL0pHykx-KaE2Gj_HS6GIkX28SAxK133AZW4IrNEK6xXaeH5xykOVNl0qDDVmg4E5abshLbPN7ZBNr90QMgFT9wnUjbWEIwzJViyfphKRquwM-fyeBU0juQJamAz2xSng", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112859903189535296806\">Stas Ivanov</a>"] },
            { photoReference: "AWCwydh9L6YXyWy56xJQXgCWGUrSSyYgwCaxMeMzzv4AaBt68TmaZrER5HSJDuKVI66tM98CGas9Bh-NWBSVonHi0cWApKV7LyjedwIenfJLCb6vQe6B90tLhnAZovCLe2tJH7BjYOnOwNYBxFmNazRB_Md96KbhoDw2vfQBfjiGDPKXplzBvq3b6MCH27KbXPMy1V10EC06ChGioAXCkc7hv7m8Y0_XvwGNoNmfO27Gnq9li9Bmjs51RfKuSuYny8JUEC3xhGtTVRiBBiaH2kMEceNtWcMVGsLbAW40qkTrAYYKescF7wDBIHAIkGdBudg3ce0o9a8CcltflfBd97FbG77hAHrtHgCNv8KXYC4DEMIP7zKkJYK-4x20qTkDPOEozF9LA019cGC8Kfu6LOVIrOrZNyzDIxhnLGfYDrPFvQmtid43R2JgSbcRfu_0SJ0W", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109153863484628657845\">No3だよー</a>"] },
            { photoReference: "AWCwydhWw6DmMAnG5oRS0YGq6x4KqVmqI3S6PpY1hJmd0peEXwfW6Mh7uBaeFGiYXKd7NQVeM7yISiiAOqeh3Cdh0mZKZuM2vk1ffeFB_z6bkbNEtCZXjuo9arkQyfjXhyPlvUvpn2qD_rY6PwMdiadGbz98Mk_WcrhFpUoDCEbL-fxqnq3ZlvYkLKjwhXx3mVBLfxI_xd7cBWXXUq-l5FeeTo2K9UFQbElKgU_t_LG-2zoTo8um9pcjqDnpSoJ4SOXkFH4xUnQ2ip1affnQqWYtCExI6nwXL-TzM9Z75XV4fsu4SgOD2hkicj0hSZFGEivQMSgcEqO8qvB0M6GTMRkeMNryxfMLyGY4rj7QLydVv6t8LlvBspkVz1qXFMQol_moNMvKAnnmLqcwTt-kToyE8swl4dWRxhHgzVtbtmB1oTP7F6Co", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104068399528678505141\">Danny Wong</a>"] }
        ],
        summary: "사용자 평점 4.2점의 서양식 식당입니다.",
        updatedAt: "2026-08-16",
        highlights: ["안정적인 사용자 평점", "서양식 요리 제공"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "서양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11959355538538828040", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Russian+Restaurant+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "다핑궈 양식당": {
        photos: [],
        placeId: "ChIJQz1_5auKhTURdJ12e9AhED0",
        placePhotos: [
            { photoReference: "AWCwydgpjC2w8iNOyUQZ6CAvqmhmkRpYPaexhP5mYkVYHKG5nrqkOC0BfabchxOcOn_8iXoG1j8GNIGy_eKLS4LIu-aHtC6JwDtTiLv8oegYUjNz6pYpCiVwGL9FRj-j6Pox5iO-WEd-KxhJKEZV7ycWVAWtRr_cXPow1laSZGphQNCSYYwefLx-KaCJQOhXww-jWpt5l1nijXAtuwm53VxefjGu_3eKJojuFKXOzUj18KqnPhoq46SDoqrR9-DQ62uLsYPT9VuSr8YbdegLpzHpJOuZr7ZA3lExTqSUc0bgPxAK-YVM3XX2dOMkQFXeF-BJJh6ro_ZwsLyaB-uTwIJJeIUf0YLZJbrvvYD7VBlDGcKYXGK0UIs7Gk6lKOIPQsZK_ARIFjtX611vp8iMRBVXXsldjL4r5BEBlIO16qBwUo__Hz8mLCjvzVXA4VipC_Ma", width: 2304, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107865055081029223834\">Александр Махаев</a>"] }
        ],
        summary: "서양 요리를 전문으로 하는 식당입니다.",
        updatedAt: "2026-08-16",
        highlights: ["서양식 요리", "대련 위치"],
        tips: ["현지 방문 시 메뉴를 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "서양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4400054015249259892", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Dapingguo+Western+Restaurant+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "리웨성 어부 음식점": {
        photos: [],
        placeId: "ChIJ8X3FUi_1hTURFC--OaCQpHg",
        placePhotos: [
            { photoReference: "AWCwydj5PGMRUmAFjHSHQ2X6TJcSPmBsvbrtZpqDDotA7y8TwpXwfk-MBoS6PLH8c_b17cPDCnAPZJwX2ZA192lY8jbTYtsdZtsixLXsxN92OL8cFjFyj1zRukAsBFiDEEn2OZECQXcAgFzfkq3V3AygFCC7EIeOJIUkEq8jhfmczWgzGQ22aGgH-ZnYe6p4inBTWM3qrr-k58yAB3QMjkQiUw1N4XHAIuCLHJUiBrdwDQd8H9e8Dt83dX48fIpeMZvk5mkdnFmKe21e7mlASqEDSQnZ3FacU3rJzd6WGeu3hX2vP90zHW5TfXHa8avGWFrfXe1fsedJeSyDWccwa_LhTsugrZOTiz4mSPNPOWNlYqCQkDaM8iwAPC9KJT11PZBvyPzLu8KAsLuW6nlOXpXSKpiWOn1WP8FJtsYlX4VrEqxN_TQBad-hdJO3aC4MCGEL", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104591768975962051067\">S&amp;S</a>"] },
            { photoReference: "AWCwydgAhWzNiAAURoWZ_VxMYifriS9aRaOpPNLINY_dFqQpqYuJElxjtGX9HJSkBeDKB1wq45NqHpzyAPAphwfEFmErVAXf-5CiywURkhoIVirlmOSFSDVxnCFS_NbYD37B7eyl6yvWRSDr7loVlZwdn_3uDmZaclYM6g8iwFymFqxrsLxKD2wtuvOW3drGPiYD9YhyqX-HFEbFfQ4K4eSOpFuhLka-PIkrFvL33t_DFh6eg-NY-DOzorUjT5-LdOLNoHlBMNPNu18y6af4tzKMHgaGBA4kbSSufRpWh1zBfw3FQUfOBkeW8WxUwCfH5_Fp9nUQ8kFo8OW_W7NUbpAYUqnxUlMdzE0q-RTVgquqKtpe0gadceXmV0Nkz9P9FdV9Tyz7SMVQ-rOJbsxjevZwSp74YYY4_tq4ygyjj78r-WXjld7m2u8Nr5RELkAKBA", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104591768975962051067\">S&amp;S</a>"] },
            { photoReference: "AWCwydixYw_38v-9bh1rX9nNbdmaSy99zu1GlL4xxydBIS1D3lVgH5Jig0HA5OmKmnHCeh1AgVvoMmAwYKHSZIGEe4XjA_2vtvF-f-pZAvRxRciMX47AqixAFSf75OHbRt9ePphwCKppNpQubpMD4SImL31u8ZsGC6OM2XJ4Du10pp4Z7ts405FW-kHaJrct3GegmjDRYSo2_bA0xHuX86Ci0RuFEr4KJVJ5hwZcsl9Y4biKzjo0DCOuOdcTXkkwzitmLjrhHuqrvaele4iSc_SO8yIwuR46ADUQjEiVWy3og2Jr-naYm8B6nW20f4vn8IZ_rL_pcH7zOdXAKkjmWmU0GFQF--bx_cl9sU6YgAef5XelkzWkTUuSPZF8hPOKKsRSyHXkF8IEFwUo8AUKlz2ZY2V1t9P69ZWQltG0XAPOlx28CNWnk1suygfDIAFAKQ", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104591768975962051067\">S&amp;S</a>"] },
            { photoReference: "AWCwydgLYUhC-g3zSTvrM5T0EsmklGWcRfIN_n1rtG6brcjjUZ2CeXuQCePWnXknXVwYJiIKJyLRh23LTytLqXTN4j83F04J_R4Hh8j6KNUPolmJSmeauWuCsnqc3tLe8bH4yRpR5_o8sKxscwdngGqb0B4VBct56tmVGt9-KJmqEgBGKrZf1mqbiUdBiVF56n_ILnv5eGeVXRvZzFZ_vpzbfCasKkkKi84J9faO-2yC69j2x74AJ8qsdsxnSHEXXxLfq-GEfwvZnyxOs4tJk4RaLtzQvA3rfldQkbz2I_mhd2J4_NiH1vk1QngmMJ7hdp3d243Zpk3_g-K1iZC733KHfPPHHNviKh4wcGEXTkoS3lmMrt8ne08zx4pl2BpAcDum02pD8_P38Fie3BiF4_zD3d7QVnO5c2GkfjOBIc_K9Ewoj6fbf3E50RhC8o9BhKdF", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104591768975962051067\">S&amp;S</a>"] }
        ],
        summary: "저렴하고 신선한 해물 요리 전문점",
        updatedAt: "2026-08-16",
        highlights: ["해물조개찜", "생선탕"],
        tips: ["향신료가 적어 한국인에게 적합함"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8693232198569832212", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%9B%A8%EC%84%B1+%EC%96%B4%EB%B6%80+%EC%9D%8C%EC%8B%9D%EC%A0%90+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "정황치 해산물 바비큐": {
        photos: [],
        placeId: "ChIJ60f1EQFejzUR9DwygGcgcyw",
        placePhotos: [
            { photoReference: "AWCwydhmgAIqJqm45H1LhYDGoBJjM9YDsoct2Io_bbJGsm9rpDDlFUCNci5jLvP3oBxanGiFtTD4xoInABAuMB_6IDAyc9S5EF0QFWUJPZRYZEc7LryCzJTxJDPwd2OaeAkIM_H5iVGLcPISQYkBePq84NktRTUzel1XcwGnOqGW2QxRsdctpb0kYqyLo5KxR0oV9NK-wIod8K2rqZ2ehhck9go_vr9OEcTpuC-bFxXNhTXJMJFJmf_aoLYSq-NPzaDuFQ7kfMX37RRJVUnljWstBMLEq4wdd766Dlp9G05v6nvdQjRo5gWtEF8VR2Qap0TduM7Omiel0aFFCRWt2Z_QQs9DVAi1xzvygkPIVWM1XnZ1dEju3dD-wcVmKNQfTclS3J7ZcbQfX_VSYtVl70Hmbp_mUN0_JIJaVO1dnXO0zAF17UWrx45PZITFQ8PeVSlR", width: 4000, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101249795832651227213\">TS Kim</a>"] },
            { photoReference: "AWCwydispwzwASL_o2fHAukNzDgZ6_CRE269aPtT4Ev8jOFaon76SSIiQQeHA47XTjtZK_joxAXIGZ27CFo9gWdHvTIGlAOyZy5PEnSRVo05qrZqaJJsFgEbFoEdZusLMzTMjUBeJRp-PsItEwPgEmpCHRR9dqVXJJS9NdNkC_ykEBajT3YHdfd34TUDeC_2H7I1SmzZM1zwu4nOXvOYhzvirdtCeKYySUC0Xj4aQAxx7qneBXzUSgpaRflyZF9HQttCl4AaFFVVKHGYBtEXJVdvC90Zki0huV4ZWOtC5DuO3-XwGplDPWZGRUqUcwcvxp1UIB8aypeglpAFt5HYU02fM2JvBIsXeXh-C6u38YTk4tMvsLrqkqq6D2rO3odLoi8xFo0eB7Vgr04F9H9Q3R8VkjZPIGQwm-DrTVdzqD4RxX9jS8XpnFJZzgW73vIQ3-94", width: 4000, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101249795832651227213\">TS Kim</a>"] },
            { photoReference: "AWCwydgCbyZPF1nvHgv8o0IDvDMHNWl9325k2b4_Sr1N49TGptyseLm4GrE61WufiVWPn2FtYANFBVmfqvFSt0GejpplamsJxX2Um9QhCt4HFmxdbyHaAjT-8QDQvv3iaeOKBlpYO-itLxzd-iXqbao6CIxPziiws8xxtTwXMpUekBKjXh2UBTXsszuPG6PCSqFO44qXlzS8oZaW9aOtOZh6TMzxUgHGrdL8zol44Z4_UK_iOlJLQcu_K3iguTFDSAGQukq00Nq_kEEpnFZNZAvKTbw0xMp3eXoLg8q3EWOkXuU2QUKpuSwBrzp0HHuKlKr3e4FBZcG_tnMr7GJxYm-yryc0BsowYvK4c636Ja3gGiA0_0Wn-GzFXJu5I_gpg50FwzFrGKJV41V1u6nbumyO1f_crWZeLr3abT__fMbOqFg", width: 4160, height: 4160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104327841070741687161\">먹죽귀</a>"] },
            { photoReference: "AWCwydinr3VdhQiWG6-rOEU6BOCdyk3zzfSWqfuD_WIXIK0lilmEjx4C8cPGIUGKH1tvIiRPsQTvHm4uNtNp72Vd6kWL6Crkp0rRemDVp1GF9d30nMD0sjR_ROkPSyG-h9WbIRF8p5ulcLRGaLeoG5w5ZfIT3NBEcRylwqMxc5DeeTTysEFfdjEKHcwUj4dbh5fax12dmv7N86DO0e6Qcua6g_Fyd5rV1y9F3HUdMgWX0nIyHJUdWgLoO0RAnUn1IJqTdHMNktoVMCJZmDCjSWdO_e_eATMNcII0xKGZiDmLERj9fiTrgjn6qp4lo1v90ulZWg0SbSB1eVXeZj9kA4NJ9z5BSlPhLC8op82_y_SqshxfWNTBgD4_pdKYQO2JEwC7O1lgtj6IYy65iBmRYdQXKJO-7XR5XecB0KIm2z7FcAan4p3fBQtaKfUl9Ydg", width: 2458, height: 1782, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101249795832651227213\">TS Kim</a>"] },
            { photoReference: "AWCwydjwpeepL9docW2ysQVpmMt0MuQ4_c5_Qi_WxR0d8qzLf5JpB1gZSvC_xJbVcjBX3V9iuoTS9duoSpwIo2P_uzS4scuWWTWhE2FHUsy_ChKrGpN1VP2gdvqrhdpQgrMsVp2muOUxLDjN4q4twGajTwTeB2fPNk4h30TbAmsVk5LBQoWY94Ky-Ixxz86Wc1m_Mot3SXLw3_iP74NfeetE9etxz09UlMndQ75uz_pVhH7Q1Hx4N4VkV-JsBKFFjJYoUGspsMDpkw-x2RyOqtIZWq-0Uw4p9dTbE1Wigfv3wlb2BxysmNvSwSa19MLdAZKx61V95Wi_cviuoSclZ2CfWVzMac7cYG9uIKQ_8f10dmb-PxBnacUCKYODMHexOBHB-CxOxuIai5c_sIeUuLxcSM-IWjRIZogatU9SIC8p3l0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104327841070741687161\">먹죽귀</a>"] }
        ],
        summary: "신선한 해산물을 즉석에서 구워내는 맛집",
        updatedAt: "2026-08-16",
        highlights: ["신선한 해산물 볶음", "활기찬 분위기"],
        tips: ["갯가재 소금 후추 볶음을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 볶음", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3202939388895050996", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%95%ED%99%A9%EC%B9%98+%ED%95%B4%EC%82%B0%EB%AC%BC+%EB%B0%94%EB%B9%84%ED%81%90+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "르펑위안 만두관": {
        photos: [],
        placeId: "ChIJna80nOdkjzURdNItDklOZOk",
        placePhotos: [
            { photoReference: "AWCwydh977PzDpTsgkFR1hpHm3xRhQU7TQGsAZy7_Mt53cYjlPh4qNDgdPQ_R-cwN4nCtRrf_7L1VtvAZiMWmZiEjQ-ObzIsSoquFvX-exaqcanYTysagR_igrUtV3SDRxWbC0uWwQ0hTKfDxFiqMEoIr4ljE6tTVesocBZOgUbrUpBrFnsQPSj7O3hdEjanq_JBVThddvu13GB7NFq8-uPVc5ZwMMigP1H4IlETJTUyTDepxgzhQmU5BdoejpZKaGNjkmt_q9LJaA1eeI2ZGQyDevJvuP8L_q1IDmOq7PsGaMfnro1HACILL4vjw2LuIaum1S53Gg6ttIFIZGFdHtVcsLoVZREDAP7qQET08qHwC736dmBOamkSjpUBNToKdVbpUpIRsNvjNvtnFe6b8n8_9XnuwHl8HurmlXR0y_8hwL9aMGhdkubvRGOPIRLGJsJU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115272215041272369969\">Macgyver LIN</a>"] },
            { photoReference: "AWCwydh_uTpSWH2hz3xqAxS5b2VwJYTyWHU7A4KmvgQx1_2cMZaIk5ecLXuUIWjF9oKPHjRWS3MHsBMUDDAjL-ESrZIkLAID-QPjv0BblqFh26d8-O10AFNmBp8VNkdZOzN4PAt_hZiLS8IvJlYyheaMNZXTzCDjve9MuroSN95NgomcyVzQOV3qHztQJen2UGijwYR4fZlkVvP52KHJrWi-bIZQ3Hd27Ro1LwJCGRR8ezPVdkc0MNvhNwBM-5DxK3lxa0euEOUTH9Rr5SR3jyfqW10OsGlYCo4s3LLNgUkK1VxuSb-bKu1EiaS8nTe3bBpHivp5D9NQ16ljUZA6GBeyJbIOlWbtWc6wHjSAvJPfbHqul4j4gkjYMtD5k_p-0VaAj-N4UXQQXrQPP1kPhqEBJDlyfX2Xs-HNrB8NkQjDxhA5t9obsev6dq1Cy-lz5MzD", width: 2729, height: 1535, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115272215041272369969\">Macgyver LIN</a>"] },
            { photoReference: "AWCwydiYPFD1-C8UKoee6IB209nck6Kyz2WLR9v7eeyhlVDUPi_M2I72Fy4qF4T9906KPUKKxaRHjiYLmqzX9alUTNCefqvK_nKeGCCMCnjq_QoGOlApVyyQM-3HupTXhuxCSuBrHAc5-JeMVFBZeJEd_GMg59LSqMRCsYRzPa9nEs9p1bFxsJHQc51zqvRVaH_TPs6Gcy6jjxNa_pM3AOFMqC_U2x-xLhvMpn17-nFPCAHiA_gzGjFEfUBLjK5-EkOLihDM1ep9q_vxV9493CO9tT2UMr-OAWHVEPytpCpE0Dlp6Cp7pyNOTlU92ZzfTfPwilu1rAuEQA3d-seVFH3bLHpyAgjjlMNcIv03Xtn-8hxYrnhDSrn4LHGf6JW2eZRxJq18nKGwsnP-iSuZZyw4RwdRK8L4J0NbgdU99lXnzKUwOg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117658787654742414723\">yan</a>"] },
            { photoReference: "AWCwydjN5S7vqiANOV45NSs58qxK190VxqYFXOoAjAQNzvgIZ9PEjqPDv4sMIJJLJtY45Bfm0Tec2QUeRN6cJ41UvnzH6K-vipn-lRsKilrXNgzIXDBdtd24dYntE03aXhS0C7NlWrmTXRbC-_wqkxXp81gbjOGknprmQ3ZbUfrh2uUfivtGg1xyv1NxlEYhefFbpDkIM0sG7EZgfPZI-qJKUgcvIw7toAyOFPlhM3D1zEpsGikqAiRGfGZF5UzkvzYxAQLfYd5W6hyRsGSogbcdDGnkSkN85enzrO1RDr1eS0Q47NPF2EkqTMRQyd3nZFoU8UcadLkotzbh7OAnFLmBr65Y4gsep3_135U81fXVSmE52WPwjJXREySwE1dPRe98B0JWQ-vnvEUiowGH3Ka-D6Ms4OxaUQusaTt8dIIBRzA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117658787654742414723\">yan</a>"] },
            { photoReference: "AWCwydhp2FD5u37CTZPF-duGRDi80je8520N8J6-MeKxxOc2_b5YQjmb0JHu8M4eAnpC9wbbSRa60PFWvk_-B-TssFVMgq-fAs0jmPWnod46DEAfVHz3deZppcGj85-RNVh_RdDGHhPd-Nivm-Pwcq45aF0PNA5X9mE96141Fl8EENdU6IGQqCJdMfbFDIB_089l9yr0JF3M0c4DiyjOpwVYvJbAkju8eQH5RTQ_6PJ_xQg8LGPt0aokDUrnCJpUCLD_7S2yuQ73hvKKaqRRvKZHygEBW4OgV9xK84qEbxuaagQaBgFMhqYS9J6hmpkskakv8vwTeZT-nScoGpLipTOJE5gtaTJflIfdO1VbmkeGC5KEoUa_-JYGnMXVG63JGxj75h9HZzPpe8xFJ_DBCZ8hwXzR-tXrP-SMZv44QCg50L-8MiXw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117658787654742414723\">yan</a>"] }
        ],
        summary: "해삼 만두가 환상적인 현지 맛집",
        updatedAt: "2026-08-16",
        highlights: ["해삼 만두", "성게 만두"],
        tips: ["대기 줄이 길 수 있으니 주의하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해삼 만두", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16817652984185737844", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%E6%97%A5%E4%B8%B0%E5%9B%AD%E9%A5%BA%E5%AD%90%E9%A6%86+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "밍지 생선구이 프렌들리점": {
        photos: [],
        placeId: "ChIJMb36YU31hTURgqG859SWPog",
        placePhotos: [
            { photoReference: "AWCwydhgYCC49Hkg9GpS2bTskyztJFZQpezNI1pmaGnCfcxH0AqqlS961_4dYIV1hp54r4gHq8MYlIHaevCI-8dWTVPsfN8Ezcxr0Nsxh7a2PUHR6qUCPTvKTTjmJ2f-DUDdFOMzbF6SiQUGN-U1kYQPx2MAq_u4Lm2y0znC9h5s2DN484ZB9tjlgBWHYx7GDdfUeoHyniVOIHySmBVrkgfeIQwNX0BNR_XZ9dsaKzQCEQtSW-3tZIbo_yqeubjk42_1mdB7lC5y9NgRqtKd25MtgYAd7X9dIU-5FWV0MzIb7gVfjroiTwvhf4nC12nLZOz2KsXzRAnwI0MTzm2mPUd5HWm52EEsfue5BncGYI8ktZ4i__voAscILovlTT-rwJ3Nqa4tXoKcpChaUYE89RyqBxm156mteav3nPVgLp9reHUwK9vlRPB4atPopZh7gprN", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116278166236984294823\">이윤희</a>"] },
            { photoReference: "AWCwydig30b4ydM5jZQ9FTlZ6d-g5I_AByJLNxz7aOIFSouWqwwXL65FhdDN12qojOwkZMT7ELTlJTgWGiOMYYZuEsenq2bNfLJYruUwdWF7idymF2_iqDR6R_uMSilUb2a5uQBMJ0vd4javZhI204kp-MlabFGocjc3iPSs4kHDYzw1xtlMJjhWK5cxk1HbKz1kW3czafQuFIg8TVCpA_070dFlhsi0bIt8DAIMpQtEFE2v59De8dT-ikYTKvV4EjFHeeR0Wkl1JjhPdkU4LAkqVTYqLQTGpMLx_gMn69J8s4Vj6Cd6V43gcR-G0NX9GmEIFrTDAzgLXKrhOdSV-lIetWvgVm0mu-wCUszfpmPxs4dQBTjXjmTwbTaxkiVwumhN_gL35ei-aRKTzrZu4iQsCMl9Rtr4y5Z0LfDFaa9OseIeMlkpTVlKFAdxzpWPCwTZ", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100103000445355715297\">Grace Yang</a>"] },
            { photoReference: "AWCwydjGNyh_FVW3kau8kSp0L-TBSxjRFlHTbVi6Kts-m9WY2k6PqygeLnrmWLXUmZ-bNleChmBaeBdSxbcxTZ-YFpY1HcfzaEM5YdJ7TsaJx72MQ9pMGGE5Wbl23qGc8PJRFJD2dS17Rr7XPXkDBxTzI1G7HlkliEgDaClWPfbl5hH0YWgKgjKNfnBZAuCOtQDg5ms1zoD21XEpdXzi8Yxea_jKw5sD3dGGn4cfAEocfTmfwO-1OZmyserwTIC7Fe3VR1NuRzlBkEBOLNyBDtEHgx8MwceZuYUhvAJiIzCf7tOypo-D26zpaAuc8OJ7vQpbXCh_4NHisACo1dvEAAakhhUiUEU0bcstzW0OHkN2aBxmMOjNAHdGGx7IOIJLIsO2sqsWnqzgKiVGk_Zv0FhNb1GM_1Xpg0zp3cs48ZhLDXhc_djMjvzIXG_0Ibjy7bG1", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116278166236984294823\">이윤희</a>"] },
            { photoReference: "AWCwydjlcwgsLC6KJxvaytrj-ol_v74GckqluYB7qZXF3z4gno9QJYdcn06JMvY3MbzjX6K_y0_iF9DBg9O9CnMxMSUIrG1LePbdtfg3sDnQRkkLebHXeIpxAu3ElJfhaamMiXJFL3V4kem4nCcViCNl_1qe9ZhuzSDdKONKdwkC_fgFtrdPwaTFD6XCz28au6Ti_Qic1Ei9QzdxmVWs-qaD6U0W_YLDGf01b4s0-ChRTkZdo2EsUOq-iEZS6ta2P-kX1yEvsH7wjdIPdz0MAV_lRApHbNdjv_bs12QQnTmh9IYT_ciY_aXQLVLsJSq2GMJ8y1aRKpTUMknKu8FrERbnCx2ciSlXvPCUC2cXvvny1pLz5jcVgBc-0onvqE-ARDQiXg9N5BH8wKGdLMrbI1JSBbrB_DtbH3_XGC0Wtk2pNBSsYvdc0WweroGaRJbMQ-Zz", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116278166236984294823\">이윤희</a>"] },
            { photoReference: "AWCwydj9cM8E9ki9Y4ANeJwsE9ptbvhepir_vC2kMugYuGs8F9O1PW_wrrILct7_y6Kerx9l7CuAemT7gWJh5MYL68EB325Qy9xSn-o5DLTk0kI-3x4I5Wgsdcv9yEool0UZgEQ5ukDUMaJROJ6g8en0_iyDUzjxOpAo7rdyu1Md9P-DjnlPlkBD80kQoWU7q2JIsolo-F6v-BfnfTHq5xdmmoHc3FQp2WOFOHDKA8rei79uKoo52qwmcIuW7nEFgdDRBbL3T-Tjw9NeCjlpUQWt7WH495wDC35G4DhV4SFKGelFlEig131_PINB0n4qDug1BLE8xjUOTJZodA-PvyXERBBCNFaLjzWGdqGYNTJYLDI5_7P47heZUUK4kql9Hkt8bCc9jNAELXLFhO_DwfFsTmmwamKVRoumT7CEjz2WlqFYs0HVsZoBx_5v6MwROVnG", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106494997444629014245\">IT누리</a>"] }
        ],
        summary: "카오위가 맛있는 현지 맛집",
        updatedAt: "2026-08-16",
        highlights: ["친절한 직원", "맛있는 카오위"],
        tips: ["카오위와 쌀밥을 함께 드세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "카오위", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9817450078879392130", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Mingji+Grilled+Fish+Friendly+Branch+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "창싱리 먹자골목": {
        photos: [],
        placeId: "ChIJ0UGAFV5gjzURpMlW5oV1zok",
        placePhotos: [
            { photoReference: "AWCwydhzFbSwzWP22y7sfUJFmBqjQs1bw_rd1huqJRSOfxqy4vOZdmvoPxb47PE6Cl_W73ZZVvQ3jpDasSKcXtdQcPbIUxbFOQqeyxKf4I_Xwds0oHrBrNY6yI-g1ZbGtoIiYxkXVUe_VQzaiNWAzSQAKKn3_yF1O0xwpjDJX3A2qu7hCN_10hZX8EdLYkd0HGvj1jA0XGoN8wcDXK-WObA73pG7rg4JKDp_WV757QfwNX7qETD2_N5FV11WdGkg5w-HFQjrP82SldQu3-tbqc4vu-nKDB5otbkHqOwqZ5kFUqTeiHW9Wi_GwBTdqocI94eCLr03Ps6xXpzY-E9Qbc8jtCd6x7o3q0FB7z6-u207jJnvgKJ9I7g05RrMuHrNnUbhOfK_eDhMKNIY9vNMuLPr6sVwqYpzD7yrdbLSAI_QNOdSMeJq", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117890927941372311087\">NEO N</a>"] },
            { photoReference: "AWCwydg7W2RPzWX5nYsT651kBtnEUIjAYl1Vw-p0MVcSBeTEdXF02F86oWL8BMu5Pe1X97F9t3uOqPO5ofB-CEwyJXh0coenqwkeTGZs-m2coSoVrovKJVLATGx8TW4cd9o1zwiPg9-Paarcu2_Hifb_HCe7WEz-gmEMgZ4OZPY3Q1tMzRveY8Aw84ynQJCITEltxbwM_BEY6j2CltAAqDopbWN6_XRsmR26msl6ajnFU4Gdm7qmlFWmKH2KI8uxUMNgiQ8Px3GCeSfvSysMhIRhY53eu9AKiM1x8LrYqDpraitoTbEfh1zq29OgwqSuP5Z6tdfwYH236_zKF5dY7BthqUZT9aaJ6-4TJakEZc1Xh3_RAfyA7hoKQKsCHbhTUM4l1jAY2sbvRMos4-_tEG5iyufrRDP5cBHKwtJZtq-YRTtZ7DszYtfPsSmJb69njSYw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108823963570314434811\">Je ming 振銘</a>"] },
            { photoReference: "AWCwydhbzAPKHO_K9aajXCtxOMEG0RT3W5BE7sY5kkPWKea6ZPcgHe7OPXsQz5g5U6NOgjprLYPtPPezvHz9tENNdnOKA9HtaLarmmBlJ_9SV85MSPjgQ5pFj45MNq_nj3HnSm4gbOqWqIgoHYN0tYzpvkJh23pRFtMKzqoYT1K3YS1U5roI2vkBjU-a0r8vl-MUKpCNzgwRvDwCWaTTSneuUZqgJixhntF3yEsWget3y0-rs-sE-chSo_vdsdSFNfHvTOmsvuqI6tlgg9IiFjr5asVmJyMh62RohGYCw_heIqFpNEkoAP5dpdHn1hhp9MouNUF9_xvIy2LPqSspVWK_gzBFW6-gBKqaZkGBl-a0sFJ1EsTSPojzy02piAFppr_Lr8AT64NgESimFTqsqH6sZywqkZM4dATE4r_6khafTL-mCTg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117890927941372311087\">NEO N</a>"] },
            { photoReference: "AWCwydjQ0fs66OgMWmN-LbDYojiSxSDTCjl4q_XGRc9CNXDjthIIyAfS8apx7xAxJYhbvaTxOnHASWY2r11xfB_aGCzF1zSSK5MWwXWfuubGup7hhOASGT3lqzAMKSbN1nFIMuU4mY3ft7aVeusmCdyg71nHr8hVUHFi480digqrogS5bTJkFkkS9zPUw_s1zAAhKHWrqZDrNSLoZR1fJjA9M7pHKXvzXVrrwXCNI7d-okX_zMY7NO5Sfu6kqG2gTimaQ6IQGd95h-3ur7W2cM5RgFjuf-8TSkegGw6nx_Jaf36OKyh5Va5_9UBjYoZW6S7CUEY1ptYgOJyhFLadz_98bNlCv1kP7vZzgc7DNGdL01fn001mw7wgRVWKxDaLQcayw0BK3VC4LmO7RcSy96lRS-wcl8PCZUwol-TKPBWGCkY", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117890927941372311087\">NEO N</a>"] },
            { photoReference: "AWCwydj-N0_PJvkCK9FdmJ6CmCkHoNwzfaWSuurR28i6wTyVIvrgMVTEFhsUO0TyRWdMLaqK6s0sE01qHcKS8VVLqHLfWV5gAgIJw47DqDP_fUOcGSmPffmPEYnvXb0XtGf4lnb3xF2VnxA_852d1Eq-6SHDA_VWXrX9revJJGGq3bi7SRsXQa4Ex6azmOVSgMibQ9uG2BbemJuNZRdnA3xpHJiFlkwhVaitUmMPqqmvUXHrLqiJRPQvwq-bSvAToEdXkHTB8MctgQd13guRfOE1poSs_vifeVanym6xcLE2oVTQ5F-fynQRDItbSZb8zcBgyPsGqbdXG4pyWbzYNFEP-TDs0PVj_fVG5R2KFdlIYxAf2Az7aSDhYUY9bhOY_hVjdY_Lbv-04128ejsmCaZ6Nc_eEjQuZSmHuXt5Di-b7Xj9F6EicdZpHOItsf36Z7dd", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113370456641813294300\">gLam</a>"] }
        ],
        summary: "높은 평점을 보유한 활기찬 장소입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 가게", "활기찬 분위기"],
        tips: ["다양한 가게를 둘러보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "활기찬 분위기", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9930003446354069924", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Changxing+Li+Xiaochi+St+%EB%8B%A4%EB%A1%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
