import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "삿포로 비어가든": {
        photos: ["/images/sapporo/info/restaurants/sapporo-beer-garden-sapporo.jpg"],
        placeId: "ChIJ__9PCWwpC18RpHEvsAli2gg",
        placePhotos: [
            { photoReference: "AWCwydiJv7pyRFyQAUORGTu-AAOP3SDWQjVyMZgXwAGJFWDM1QHkEPCoO3N05QJs4QaFAZ8G3-bzqt5bdDPsHoBnt-qHpK6Ri8cf7sJFzKbZUiyV0RUbWDZFMjQFXMAP6P81yzieFRyohFgPcgO7Xnz7cwxE_6VxXS4mI2-l_MwT9UwlZKij_AOGrNUffnsO_SgUdpaxeg8j27pY_ny0lBb1jhCJxnOH1q39K2zjjD8i98rVeUyJI6mh4PKwkh_8XzhIqFbAzKYnyiQlYekn_J8t9ZpEBSGP_OXQs9D8fZr5VYDbCcdV6iUqKPkHt26r4i0aCJoo4DiQiyrtHkJB2la4Nb8qzIyYwHpVETMrqc-KWSyEkV1ByuVzofMPwtuR0pH3BmNy-DccU3q5An4ZiE8OQaPzVCl2fFF2dvm2Tht5DT7VpblXOhVCQBSs6S8Hxrei", width: 800, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102093129510683710391\">サッポロビール園</a>"] },
            { photoReference: "AWCwydi96-t78m4wb4-1MZ3_19w0YsAhmlimlnY0IErZfkcvtIWDoEQvJcjkJX1ATTMsuhXHjJyG-ikIkVh-WhQtTTBmYINuVj9TBBp-UuOzKUzeY1rpHScmGdwYf15C3kAPbyk7J_5CPPzr3TZIaR2-9a1smUPsShVS077UUQ3yCkuV1oT9PHMPc4xWUd_L6-5DEn_losG-IDiFzsfS3Tgi8i3XBfN3XaB_1qBH3MWRnQuU49fALs99LTwYWfKvl3UepsCtcTjTzqm8ZXvrrt47wKBb7F1z-wwdGnlzMKzVuVo1KasmWO9dLDHG4cL2Rp16Izw8rLNOfoD9FBpPe3Snpdry3Vh1TKx8De5dOiDkUq5m3DmZpcAyOx-eAh2386CADiDTHIZPTXZQ2-ITxnIGCX0BZiGiTDr6Lxnf21vQu04Y_jNmmyTzr_wykFJgTA", width: 800, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102093129510683710391\">サッポロビール園</a>"] },
            { photoReference: "AWCwydiqqxv074NsEZog1_TF7-aawULZw7EUEKu0hO7SwU6Xrp_ch7p4k9iZ3Yk91JP-G04eNEeH6PHxmd_Ov0X5ECKxsSzWSd9UJTTdbISqI-qy15MLat0oqdN6clpERDLJb2sKrcxnI88T-uXiLIHvM2XGk9VqJzMYAppwOrXQRohqagkuYet0qyWHURcOUSad44F1wvwoyGGjz1txUt2_dUGCLq3jgPscnbSAEiYnrBkleip3Xjkp4-In4C4DlG_5GgKzGRoU2hrzwJaX5v0n-7Tz0wkQrgaYR3q6AkaGysh5pFYz9Eczc_Sz2A-Au3o8atslcsGKUBAljRIcuoRJgtmTy58-mHu6tUGkutmRLPHKCnByhQlY6VX28PH3mua8fnCdMAnr_srAlx5MZgPkDF6Q6kxWF0i3DY7m4x4P5NhLf-aZNqstPfYaldFFOUWq", width: 4121, height: 3091, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117381968431420714770\">Megan Mcilwain</a>"] },
            { photoReference: "AWCwydiZwHj7VwLUu_KDLoweAYUtCF-uFy9FZNbrPPcGe1vPiI8Mi67uYD65c_RtyAxJ3TDgpsKVQuWfOy5VSeYoTDxFH644n1vn-yNjzqbyj1uVUgLQumyafFtLeu6IVTAPJOIipYIAJynTBqt7Z-Xm_stpZ5PdreD3YZoeinPwgvqkbRW2OHISST-mCNvOFLoLvGRutnBvDndQbTTHXSwUyB-MIWTKIfgr95lty437v-j1vngBbfUfOpa04MnBe71LcROG5yXYby4CRZSQreGNax5KN4NcniN2JiDXxo-wM2OweQOagduMzO1B-SM-sC9Dc2-xF0IoVr4UbLyecS969x7crlbi1iw9R0_6eNcNPqXnrjDc_aFxpca7hnfXIdr3cYaxRIWsJ3LuhiCFPSInOi4jjJZ_nMDBCR3hUdpAwcXIamppYgL_8Fdn41B1aw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111426757588434290269\">Seongheui Choi</a>"] },
            { photoReference: "AWCwydhCTXyaenyCP2MTiNcnlp3UFMdGGI3rXDOjTo_qOueCDO-Jyg7PwLdbLc2Wmj4f5y0l0Y_m8lfKYNzu7P_g5uhhMSo32Nj_r4SnDxuIa23QjFHZYnGwHGk66bU3J8s0rk9lsr1SjBtdiSDx565zL91IoK2dNhBwwy1d4owbks132_GyU2HiUbHbA2lqilWxSbpQZsIUc3uic0Tp9QEOeAgmzZ5GNC4v1wrbmwPF1u3ZFjG1NJYovMI1Dct2sS5vtd5HO-Ss7rGvO02ITK8iNncQvHCB8GOces7u_FCVYC_XFmBbARBfG6KGFFkyBHeKQ-Y7gGDZvXZw1aUYotvO-PRHZN0qR1FDaUt9iYcUzRyI5Vb1koodYelZHRdJsBQaLZaDxWNolqr4R03_MUoIF7FbRVwLB5nSMRvBV6kisTE0LRuSIAzTjBmLPmpSgVAs", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118079631881730648993\">しんさん</a>"] }
        ],
        summary: "삿포로 맥주원 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["징기스칸·맥주", "평점 4.2", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "징기스칸·맥주", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 9:00; 화요일: 오전 11:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sapporo-bier-garten.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=637930090976473508", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%EB%B9%84%EC%96%B4%EA%B0%80%EB%93%A0+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "징기스칸 다루마 5.5": {
        photos: ["/images/sapporo/info/restaurants/jingisukan-daruma-5-5-sapporo.jpg"],
        placeId: "ChIJVTianOApC18RJPnmoPDMkwM",
        placePhotos: [
            { photoReference: "AWCwydjEUQxhOIMAZP8qYloTJOBXhtWbWMW0X0IPesUE_CorWDUCzXqJmZYb_dq5cwcciRgHjfEXaCurIaHS7syQ_UMuSTCQqpnvhgpk8j9ccwrdiMNgonCYiz2yWFdSQOGmzdMH4O1kk63gQx0vf0d9IbsMS5-6I4wkKsUP1UTZa-Gco5uA0yMpF84Ej5F2hCBCNAQreSi7nuMe_n9cnepIoByXLTumQDaR0Px-k63hNkijYmuWguh2stEa4I0IrzCSscs8xdpGuRDohkFc5UDvM4GA-alM0TdmWsU0KrKKRDnyQ6IxTjLdedS-Qzx8a_vP4ydx1-giNPluf9Rc3h8tysYjeSCUjEnoW-zBcjRdlnToiqCaqlPtIHmsdHxsDB1_Q7ueOLz5LPhyrkPw9v0fhCrD7c5i5wxx8koVUTWfcaLT9IzxvSnwFhQiIjW-RA", width: 2500, height: 1711, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101613009396753261907\">ALFRED PHOTO FOUNDATION</a>"] },
            { photoReference: "AWCwydj13DzeNF5nZOP-0r3GnJRN60S8ZZF63tFTEQypAEyWaHxJiHYsf6S-UEhberbX28GZSFYqFS-0LNxgmroIVIJmWJWgQ25c1cQ5MPLV0JsEXMrzrvEz_ukRAv_DEnmWZYYajfXJnSMB5-Vv8NBScwccJnIv6XbfnADSVYet5LK-Foi0MHmGvGbIjLemxop-XEDORi7g07izc8NzFGA7qfNg9UWI1_c-9D10gkQgy980WbaiHnNa3kY8MaZ8OQfn50WiYTX0SjCjMOAZd0cbPoIJ0rv3moJEvtmyQem9Ms6_T0PslH6ryXtP0GUldw305O9rSSWpMW3WGAk-9WDUwA3MAQF1un0wHAQrTZa2rSUsYj7tmQZuESNOIDLwb4bF3_GzJQJv7kVMF62yTz_SnqJSpSRKO-fTKulXOMEJSZvxUgjoXaXTr_d3p6of9g", width: 3168, height: 2787, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113058416981999852752\">yutaka kawada</a>"] },
            { photoReference: "AWCwydho6rOdVCdpwYVT82m4FQEvZMgZISZW2Q7iR2oK2zqvTpr_GNU4283BVUXcnDV88e5e0BwKuVZnODfmz74RJY2Pzfwz2_D94Ys5E0NphFXQQ_HKmNvKOLaxRgEWLlpt9roRBf7nQ99N0G-8paGE_JX6FbDkKlpAST-iA2zJh8gVjYzCDgrKflv4UvC1BOWP6Ufm3WE8JUWo8JE_EGkyZUwNUDxqKH7qdK7JWTzZ1mlT_dpabpYy3EeQgUm0xjm4Fsw54BinbJNJV2Dw76dUNC_2D6RuKgMLikuwyLaalN5Ztk9yEPEEgXGU05qVKLhnduLW6TUQTqSUluUj2VOUuoYgm1MTiOPWOJC99FR8ww5M8PqGCYd-5ZVeIy-8z57yelSSTtZBjFVV2xZa6Ojo5reUZ5539Aj3V2Ha5DbTrRVUozcXlLojP2Q8GDOEO36O", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114336694951409642114\">小泉</a>"] },
            { photoReference: "AWCwydjoSOyXfm1tACFLOgp1na7EBe_8KfO94YcmYv5DhBvYkmUa6XOXBAiuhE_w1-e4e7IFPoASWH4so3EtyCecRI7cd9wys09Y0FnLmCWUBfPT5MtXde9EQiEpWZ5yJ83B708KBVujiKcWt1f8SwGfYyO8sLMD92vK8JZDi0M_U-GUfFvKi4fbBEBe-lk7wrlJejHFr7tESOxhp0L42yZ1duSIrjuxHyXzzU7QxC_Br0KfZBJ9R6BmhGD44Wo7duhR9twMRcbcRMaRT3tEKuwnW2zIhZ2SAqFzKjDhWz0PTBSl6xZLP1YCE-_FvCAkcrEkuarKalT3l-kraMeLaB3r4TtePiX6TqnLNOpJfi4IcHkr-okyErHVTm9hDWz_ab2WxGFAr750WN9pTjlKhzVjo2BfUPzDzDKtb2TjwgFgoTn67pJa51FRy1vVYVM152Hz", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100695909804129272638\">VAWS</a>"] },
            { photoReference: "AWCwydh9IA4fOO40Fwb18LVtEY5a18XGitLmHW0WSe3mMpZGj5yBdgpQ9wFjh3lrpg2MGbn55WHlVmZhPZlDxeMynYfyLgsN9LxBxYqkEbZ366PR4rqvsJ7-1h5SQW-rqt1Hh5f2dtEgrBhCZhtykW8c9rEbFDJT0ZHfduOtw9qinBlQ_NJ1Pom_Joil65lMT0ennFyYgmoBZPLH27UD0HEk5FqRQhoA5B4_5r0WR69_7Q6EZdn7EEM5Vkq2ok6T4QFzaY7pPF7sGhhBh6hhj-MYx2TmMkAPlwbvnfd-BY3-7twTQd95mbMsRBu8AEdzeTpvn0mtziZloV0_N1FMntc9BDCA_x3prhOA3WsgfIwl86kplvZ0YG5KkKTgkoRZ2matiiC2z2UoOdMb0JLBduIKezZxw7_Eo8CX91Wz06qzy7sXmGqbP9oxFSoT6fZBLqV2", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114336694951409642114\">小泉</a>"] }
        ],
        summary: "다루마 5.5점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["양고기 구이", "평점 4", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "양고기 구이", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00 ~ 오전 4:30; 화요일: 오후 5:00 ~ 오전 4:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sapporo-jingisukan.info/55ten/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=257774937553959204", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%95%EA%B8%B0%EC%8A%A4%EC%B9%B8+%EB%8B%A4%EB%A3%A8%EB%A7%88+5.5+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "징기스칸 다루마 6.4": {
        photos: ["/images/sapporo/info/restaurants/jingisukan-daruma-6-4-sapporo.jpg"],
        placeId: "ChIJI4jdNIQpC18RrgscbvMN9jc",
        placePhotos: [
            { photoReference: "AWCwydgyA6ea6UBHoaFbDLqm9F9lMMlCJr55ggsbQUsf4hYZkWcu5zMRxsUGwYZKf7getFuGW4MlEhZzKe_9PbWIVUSbjXQx6PVsDL9pDyjJ2YveZk8oihGcdFkN51XEfLRid69jQKySQXxX4byb8VljPJNGH8wuziB2Gwgg34GTmwv1ayhNRdd89pIjEnf1tjh7bkNY_1xVfXjCBtocMs7Pyy7caBFkf9rp4iz1CbHk0a7MpDHjOL4ZVblcmCLAD0pp1H7AIjBotmXTrCB-f-O8-Ne5iS71JDSTXsBN1nTixr8Pu-tu4c4JfKLo4a2qb7r1r20vSXFx3LxGptNEHWKHbWjjVlDuIJBaA67UcZDuFrLWB7PuI2_CMim9h_RuoPaA9vw0tK9xsVPnSOeDGd_XuP0jfDw73yb0elvA1k-JsKQYB_wgi7jJpsgshRDjHv0l", width: 3069, height: 2300, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116025402342592536466\">成吉思汗 だるま 6・4店</a>"] },
            { photoReference: "AWCwydjOlWr4gEj-5EZ4JmRB2fkfEMl1nuvG59QKrmzoYiFvU4Sw4Rv85-LhVBCpMGxI9ZhQv-Veyaxpw1a-Jem20VknzsqdBAqFudqs7zd82L3TtjxFSV4fNHDuD85TDTLwH5ph9Lm6ugJfUilCytGp3nG1BO5SFoflwYd2kyL9EWEtfXALCVYbcjKe0qZyyfkvv14UNRKDJCKa97sCMuz6nu-WWiJTEPs-Hhrr0WGcWTKsxRJCXv9iRzwfjK-R_ZRrUnwQiDKuvMxWOtW1DzUNAYxoP6zECJHaWCGuTgiEA2AfNo_5qTtoi_PASkoITVthHwNiHg6VAPVRJ4fFLxUC1ozJ6Q2FXKTnx-8udzXs7VswWSTaQWLeNM0-_-W67bUz0-x4uF7Oso2nGZ2k5lfV2DKTXAZC2lYMQCX1JY6_pioe_4UKCFh2nGohxkfXIr7p", width: 2016, height: 1343, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116025402342592536466\">成吉思汗 だるま 6・4店</a>"] },
            { photoReference: "AWCwydgow9rjvqFETusREIhy1-yXEXE3dTtiPbFDMqucn-iTEe-jZ6--PkhBbvT8i9NW4Euq5zSmUQro8PtzGm1lnLuRJAHXc7BV35Jvg94iJcYI-C-p7bgy8uMRJ6XYToIVOzC1MaL9hhkKVoE6Mt7vdk4Mdi-nQjYX4bFF50dR1Y1iySKLapItJnLh0moJtf16bdlXJjkeJbmGPReKpLRpgoIatw5XAQWLah6Ard1MNka0u4Mdcms0i_1MEdSePL8I0378DeBzXOuTT7XnQqfAZlqWJr1KmGY2DvxauBuPcjgSnrVnpWasXJ3kV91iAyDty6fix1YAhzRbTXocdHDu9KaeQGRP8GEk2CyoTcgcMW9XEvpt6H52yrHkEZsFbukd7CiT3HSmmcKij5frxBrX2eZT2bvFe8nYdYV-2zReZCpsCvtvpWIFxIuwAdVu3zg4", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103000950326178317053\">BGS</a>"] },
            { photoReference: "AWCwydgDtAvLH8BVxE2SWAarWemvmSUULlwIQecC1pSQ0zFlPtUgIJpVBnMYiHsVx_hZFH_aO8B9EA7g2kw5PEMGKEOqg6orwkLsmUZSlUqydGQsQ-r3uYbsHsFYh2oJx_HnUEJ-kQdDHaZDQ12yMohKnOJvtc-ACeKisbB607sS8OdL2YXdrHKKO93EGqvTomGHFhdHt2OmhcZohNbQbi_lGBSX-wsnel8TS31Hsf3daJ24Tve92IVXxEtd9Ad7BpFCp6UE9a8RBI5o_HMWt8Xy1mO9V1s3XS9_9DGR3TxwVUSEC4THMSMp4gZaE2LJ4tKAoJhKvsXdRj9vK3Zmc7xxaLJBsXZmS7M3NDgAgR5RCr9g7Lq8915quatc5OgtvzRzHUBwEF6nxrf8NtZWmk_6uGb7BLptgOrUJyyz5qdIpmKN5A9XIgkEhqv_Lhssfg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106389983298127860116\">นิว ฟอร์จูน</a>"] },
            { photoReference: "AWCwydjWdZRYCJ3vsauNr-JgAk919PxLayNWSEQG_YCBMlHKelIT5rFURKQgSUAdCkoRkleo_utRQ2_lhg0SpdnNnQcDA0GYMP2WKYBUkVPnTuQoHCxASIyFcjCgNotMdypJff00a9NeL0XF4Ilx_cdiywpC03C-15hOcLQXvUA_0M7gLPqoA_khQfdsoe1-FvMMs5Fs9feinrCncKp1ErNs2AqrsOdi91Opkh9LNHbHgSYvktW8koUZJiQKavh6bcDM2RkDUPEG35wR76CX0XFQt-bD4JjUECQj_FM5ZN0IkTO69nRHSelU8Hm5wfOf15MIqn_VrLQilG7bVKefOTGwYgT-Wop15uWHnekGvD1YRiFccwA3A3SdzohZX7HSdwchxXCN1efH3rLOKTPmorNCdpiIGZMR23KtTyVHTyWOHD6MtxC-9vz2pwJSnQQ61hIy", width: 3072, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116025402342592536466\">成吉思汗 だるま 6・4店</a>"] }
        ],
        summary: "다루마 6.4점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["양고기 구이", "평점 4.1", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "양고기 구이", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00 ~ 오전 5:00; 화요일: 오후 5:00 ~ 오전 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4032425855532403630", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%95%EA%B8%B0%EC%8A%A4%EC%B9%B8+%EB%8B%A4%EB%A3%A8%EB%A7%88+6.4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스아게 플러스": {
        photos: ["/images/sapporo/info/restaurants/suage-plus-sapporo.jpg"],
        placeId: "ChIJv0HGVIQpC18Rc2m8zsIZwJE",
        placePhotos: [
            { photoReference: "AWCwydgJhVnIJFrDqYcTVL6eRSGJ77ySaPAygZiKDfY-UYcesYnKotM8j4y4CZNqRwjk_x5cexDv6NG-dPJxtOBFAv5mrhagUg85rUquWWBDbnBjYTv4l56wHp9AoTRrg9S64IMRVgWlGuxke4UyVv2N6RKkp70ch4vVyYXgdNqPk-WvCygIJFrO2jqOlhbFrJMNCAD9wbsnuw72luf9qhx8FWl0z-ufaV5vuOlz_ycDJXwDI9TSyg531L0kNSmWtNbG0AdItdf_hixVtayRZNfBxW49lUyxcBd38kJkiFKHA6rD5AEzYC5-3-gIILhAOFVP-bHzy6pDR64MA-x27OgCZsDfqlaVfb1FaqxuKPCqvyHRkv2Ggfil2HDmQKtrzsLIZg9iIstlvCjk9WSjh9SlGlUyH_FqqJ8-wfiQp2PcanmhaAopdStktRMUOxkTDkEs", width: 2600, height: 1734, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101613009396753261907\">ALFRED PHOTO FOUNDATION</a>"] },
            { photoReference: "AWCwydhbPema1FzJidwcey_9BASGb0Xtl9XfyaoluR-7illOxhmJfPkagcKRHQTsVQNRbdOOJtqz79K1BrqYO9NmQSgYxV6a_-Qjiu0jlwG9OnwNIjCEaEaU5zwitGeDfdA_ie8O3DLtbTy3kwKMva1h9aFAP7onJ1Y2AMkh3JV3AyK4gKKamAf6PLStypEV-SY1AvDriKCtQrDfh2ahLKhQwnqIKX9ErRsn6bXRkmhNEoVuVRJbPvX0VmYvsP45tuFG8UdAyuip9XPFv_kMjfzf8I5bdRmcLW3xMc86LIXjgsLAss7rNWzLKPaBfYBLbBCtbo3LmbMmWE3DwhpXRQxJfCMdPbZj5rBpk4A-F0XFvJDlKNml9AUlSkdJfqzOUVTCn2DH2Xsd-ZR0-gzm70jCVeLG_U_nyXjDQe5fialSFo9b1xze", width: 965, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115740870365212609613\">Suage+</a>"] },
            { photoReference: "AWCwydjj7egu3rysdZRc5kH46atYkR6JGPeURgjvOstcpALQRt8D9q2WvYtxyjRZHR5fLYCW_nG4GaDvM0JZwFUzNQlBnRRpFghr0A-H0tJ0BkMSKALwGB6N0iFeA997zgVXcSvdcC8f_XLBcDL4BePNQodX6kF-AdFB7r2u2NCUzKG-KQbMpoFB4QtcE14ahlvm1wFnkusBa_ey3TFeY3V8kiP2ss5kUhyEsQiTsdKI1Q4fsmqrxvjodVt6fdS_5xu-md9R2YFfpTqKJEIuf-D8ygTNDp7VSahmjbSB6WHorSQeDAdYLVIk3Xp474yWrZc1gtMEYzygQc98RqCIqlMTLObKXK2Fm9DBhM6QmO0gxESagN8NaYJ3U3bzL6QANhVbOVIPYEz__XDpY9AlkD471uzq_FT1UQos0iijgNTxOJz9ZcfdEqo2-FP3CnjPY-qL", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103517104309585269341\">Taeyeop Kim</a>"] },
            { photoReference: "AWCwydjGI2UGmnPTtLQXOvAZpZySuWozhiluHHNdkcUOO23wZSIA7Z1rb-8bbNhHe5ZqPLtLyZ31L1qFSx-2lKMgePvvtMKM8aGLuVAXc5sj56EgRvzEF6NNP_B8m7TcbFgloYHWaRVwI2TGlp4Lb2mvgKBOKPW4MIYZmWFlP6dAOD7HPY0Yk6iIu0DkyQx8eszDAMw_pkbZg8IInXXZDF5F5O6iYroieR140JS96U6UZIEqvIYTDwwWH-tIcr8-YtXHimqwvWKaDn3ROSubM-F9TCrX5xIpG3rS3gCrDDmLiFB6rylv2RmsHst8elk14Ih8vzQqINpDfuzib4LLFnOEbxSrop-gCt6dejbtFtdvDfK85yqeX5G-YoMJ561CktdQ8RIdgy37Kf5BFrPiqyLvicUQEZWTitWqMf2WByrndwWyLZVI-GXGz670l8PIIsoB", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111599380735402088790\">Chung Chang Tsai (CasterTsai)</a>"] },
            { photoReference: "AWCwydjv2sU6-6bl5D5wloHz7S3ssrTnuVPwHkj8gg75HT7LTriURbUoFDdTnaKdN4dbssnjtIICPCD8bhE1FpSqzJhj-ZbBdiEiDjWnAOc18IpgzkyjfA9yNUnzulauo0bMisuKa63NnyOMNauYyeDRdR4sLN8AA8woTOmNA-mF3CoRkakkd0YYAFjLUYxsMfvY2aphkItfeM3WFemGI35cuMsIOYEBiDDgCtFcKnjcOmV5-4CPKSe0tiImtE4GnQI19h1eVnEtOONUc93WTmB3QwaZyXLKee5qCRdrO2Y1z8vHoffPQf7UjFhwT4ykJGKmYQ8v7zZkrl_hp87XL1KlLCfkH29THfSinKt8U9vvVopHBelw9oRCwD7mculhn9IJ9koU7BJMaCmPbW750Dl59mnMue7YNtkC9oe4QSfrYjUEU1swLheL6xK_6uQs_g", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107726382273825720021\">푸린</a>"] }
        ],
        summary: "수프카레 스아게+ 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["수프카레", "평점 4.3", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "수프카레", items: [{ name: "대표 메뉴", price: "¥1,500~2,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 8:30; 화요일: 오전 11:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.suage.info/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10502422655510800755", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%95%84%EA%B2%8C+%ED%94%8C%EB%9F%AC%EC%8A%A4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "가라쿠": {
        photos: ["/images/sapporo/info/restaurants/garaku-sapporo.jpg"],
        placeId: "ChIJQ21rhoMpC18RmzhfndITzug",
        placePhotos: [
            { photoReference: "AWCwyditZMkObtcpnlIA71c08Cn6JXVg7P5iB2xD2B-J-duE5v1qy0MjEbs6BPwhVGN_EgRntc0qCqispHHXmiopVgAZJFTEoO7i_EklrLGrdJNewIW9iNNg9b0mJnRiBuv0aVKJg4fg3sDGidOnW1BtvSAd0QUdNEQHgJHDX1PsChgShMw8o6rb2oz8qH6Z5L1e-QxBL-H7bGVPgRCpDyTMJBzWo4CBGiFIPl5Lzo5KlmdD3zAuo-YAUcq4-dqmtJblHXZ0V6pyCOgZc4sN8Rgim3rdS0vLk9V3iohSVCd6mnkVNzxlsLjR2uK37KGjjjVSuykXRtDZUkyiilHas4f13QQU2IIS4kJBrIhSBTEKo2lf5QRaktNv1YAZKFWb1pf1R3sqCOSFCJPQQJ2si4iBkBR1QHdpbHuPp93_Wd_Qg-6r6Ys", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104278864021053721796\">天使</a>"] },
            { photoReference: "AWCwydgvJfYz0F2H4RyQXoQLDoRfSj5IWPPJMjQP6pjfp0hkLoPzzC0CXdiOO79YLLOZEEVyRhsFk2CjOIOHP6FczLAaUGP30ujucu2O1mtqF2Z5AUHCBFwSXKmBRzaO23oLIiWNSZDZ_Ytw1CHQJspYiHjSwbbjy5eduNepOgVbfu2BYA-coZF_UlynlUZxVc5p2Ue-JR8eT3MQ3UE-nSEa1ct6gklxQ9pUID3KigM57v7wOnJN36srfBvEY5RLJNcNVK1p8wtfy6DmK7ThXzDgsL5PhGJSOAdxLEAHdr7PN-d2oBJXOBzPY77WjIMEgLFdmy9O9tbXjgZc6J4U2Yc0nAUU0vCoLSZ2sIvg87ml7EYi7MG_cQ2gc35wlcboVFm6m8BZb5L8BANdvG9ub4GRe7eqz1T-Sz778gOZ0uHheBk", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102161804070095002173\">スープカレーGARAKU</a>"] },
            { photoReference: "AWCwydhB0Ujwr8bV41oigNdY9R6xXS3TH_BRq0dDFjFYHFMlULzpF_L95O9aVvH-Y6ftvsILaWN6zKykCD6UxMW4CA95ZqDjT93_eAS7JCkQiRqB8sKoD2tY22TrcPMinAYvZX2CZrMGNKKqjYkzMxdEz4EVRZvMLnamKHwzscVPVVht8brSE6hfimfRA-IIlHhSulXmyCtzozCJ236dB5J9HygI3H9VTGw6F5LfNYgGVoF1U4CvS8F239HuQWnw1f0da0blk4ocjt08CLhLjPlDMV0lygnrK0946BNGaj1vJJdsAIbDn5DKMBuC3EHPmuNkOObhHnhV2rlyjpxBPnqILfRCNH-AsyFFbn8eJE2sIyJ6p61wXWdndNsXiLwl1AyJMAaopJb9Clg_bxExhTRNCoMHgfXQR8VdWWP7KN-zPHiLF-SbpnJCAJYYoSZHtj4G", width: 1179, height: 813, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102161804070095002173\">スープカレーGARAKU</a>"] },
            { photoReference: "AWCwydgybuo57aYKCBIbYrHs9-TAbKYZ-y-9HRZLMB8qlaZgTcanDOOTtMaaBj9dyOvqG4n4c95rncA60SbyEcOKnPtPYK3OnGkVbxHUX3nHwlKfHgJRLRpaPgSp9gO47KcRnF7VIHUrjPrTT5cyl6jxyOCDubY-UjCLUv1z-Gas5AggW4b6rBbOXoph9cRA9_Z5_Rfs6IfdsJ_HR5zE7t-Dnf-mj4le2fbJkWMmTlWWML0qAZhKmaHqIkA5WfUXtbAWmSsL6mPTp2cx3hXFybfKp4QuaChScPNs-mvyBYY1q8G6xdKUlbKOICl0XaZf_jECTxX1tfGb2ibQBV7lPwUXIkOVMWe1PaXMyQha5WF-WozaNUsTBAVmmaiLpQwWIyQlafCiPv4hIAgiaMwFn4LHv-8O21b9H8ccqzhlNsX4AcC3xENmF4YfyaFi69l3w6n7", width: 1206, height: 1156, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105806692430925591154\">Grace</a>"] },
            { photoReference: "AWCwydiW_u1fEWBSIouC6S0_zwbfrWKM3WL5kH2p7fOlLzdKP0dTfrApb-E1TcJtjorE2XyKfGlOYVpOn9Vy-45CWoZ9ggWVMywlD8n0pw52hw8fm-J3tL1f-t5HY2e4BpHPXRWjzi82wANVMBSPiGAijGB9I_ut_b0K8KT6yClAHKGDlumSJuSrgrIsdwA4nENCnFrSrp1R3IXvgHh5-xDAVSv8CsWcYnlS_sda-YmEKdkj0bKf_EOqYONTbYFrGbDMYF1a5oa8FdWZek_ogTkxH8a58NA5Wt_bg1vKoOW8z-99lgf6SJPdzfHDc4b5Mm_T-iXW5XpECwy1f-HEUBZAA3_76KNyfuXO5rdT6EeH24yDnec8bdDnGBy6Z_0U1-KnJl4QjnZcW3nfaEMpbFBRhdGdhFl-d42BEn5T7rh2MFZnEpeJo5Ix8A5M2N4C7KNw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111948208234978119279\">けんけんぱ</a>"] }
        ],
        summary: "스프카레 가라쿠 삿포로 본점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["수프카레", "평점 4.3", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "수프카레", items: [{ name: "대표 메뉴", price: "¥1,500~2,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:00, 오후 5:00~8:30; 화요일: 오전 11:30 ~ 오후 3:00, 오후 5:00~8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.s-garaku.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16775367457305999515", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%80%EB%9D%BC%EC%BF%A0+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "수프카레 킹": {
        photos: ["/images/sapporo/info/restaurants/soup-curry-king-sapporo.jpg"],
        placeId: "ChIJk5D2Z4MpC18RPAvy2fbPqJw",
        placePhotos: [
            { photoReference: "AWCwydj9PYlokpF6WL9GuTdrypXPXZRwWJ1xwT7DhXhSUl4s9Sil0T8eASoXFdHnwZbQHJKHBruXXxlfon0hZHgmEYgvDAnejFo9Tu1bAW9A_g1LjsKl0nFm_ep398A5SfVu8lQlxcBpw-Ij0D4e0XR6XxZTrf6ky3p8NmK-z7uCuHQ5Q_yLCRA2-Ps_4DsPzRQOJuy_pV5wpCIPmoTMYdPZFVbvDG-uSsk_pdS6FM6Jq2akMmRnzwoaFTS3-KgxESYJ9NuR4qTyf94xLuVo7mZ4BWr15VD1l0-iFemDRqIQA566GauBfJM_B0XaHFJJgm_Td1fXZDWHPsLwy_3EZKcGgdGSy-zVd2N8W_ujoUsMxYlLpIQ2PkE41D7Dh8r2yKh6ddE3aYrAAJG4DAHgDInRtVp3IPkFF1LsTeHt4ktiaPgPuurtrJ508X-mZmOVNZZ1", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114509630286219716391\">hayasta ikefukuro</a>"] },
            { photoReference: "AWCwydhjuklgDpDT0pQMjrble_J7bqj7HgHfq3g-HQf_-g_t1WB_fuSELmyBCUh63ebuPdr-alUeD-EdwFKqkgmGD-6DiXCXTYLtwn3zl7YBCEJN_9h04AlEdu8GvHGO1N83BfBOkNMKCXFHhcnms95P-SYVZAE-VJWwEdl98IompMeMXmztgadE98vl2TcFAeOZZsLrSmAivaC9zwutoh3f2KSR8pBgyoYQo-WIp9TWBTUMXG1t9YoUUpkirVu_psHVDg_yokjaQMG33s5nYIBNf9itqNroYhHEKvQEhUMXBLzCgZWYbUtg7lHVx4ngWgDo-LsC0Ii07P_bze0AnECq7JnFrh-s7rlesTHPj5u-pVpjgSwCcWHTbLPx093JdthkCYUViPPfIn3yMyBuEteEEzHR2DDnaJOZlG8FOwQoznSOyw", width: 4500, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114736386409333765055\">SOUP CURRY KING セントラル店</a>"] },
            { photoReference: "AWCwydjyN1FPp2AGszJfDZDepQjyTpDmoQ8Sp0_tECUntz8xWDY8Izw2crgIT83fIPRfncI2I8SMJVLDFHMzSu99GxnLT6IBfk5M-WEA8-QwFASXvyXoXfoFkIYMSV1qpwJejMeT1xsrb2wxWFE686ufz8k6NfJ2xrSaTc6RkcWeX9820gjII3xb_bG3afF9rjvapryQ8Sv7RjjOs85caX1OZgyyfGJLt3E6Eg1JjdXMb2XHWq3EF2uxOWtIZ8Es8zGy2qWafM9dv3Rs7lattDV3m3SmfAnxTFlENOqQmQJ_68qN0pSIfe-Xas2v_j39zbezhA-Sr7Xm-rIjouuWQPAg5qX4z3qDHqEBiuDz_T1PnAkEm_vh-cgweKqMkutm0i_g709CHdJWFyD9f_kj1YEIWMDb-FcGDlRb50t43RNQRd-KyLHLuYr7acKIl3pfR70x", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117369841249684469283\">한동대완진킴</a>"] },
            { photoReference: "AWCwydiUZvjP8nKjcoMoDFYm6_zSR-lApxanef7vAievM51mjxQISQhRgRAcw7ZkPGDfBLXOoslwAst3t7RM6uMYgz557qSgDK1UqwoB3z6L2573aFQXKOyHWyJDmMcPeKNpZYfY0Z7skU_uUSXiVVrEf9s27Pd9OtXKWK53r33XnGb0Ura6mNH2un91qBeCTtvhiJeWjMw7S9PyfnueQr2_Csc5FjIL3cQ3PpCbHxFA-3xosr_GYZciYJpBvLthRM8dTLLWS-AkVup9T565LHbCSv7QlJF8m_wu--o75KylrBThjWFLsgam6lJXu_upp41D2t5kqtUlN6i3InG0RSbkdGbwCwCNQ7ObmT226vdwDLfMx_e_t2RvcBoOKRY5KrbpgMSTmeD2AsV6YdLcL3fxv8sF8tfveefOkNiyy13Pj-6QAc1yUld5pcTR0dx7sw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115312580885167883495\">Y “Lycka” T</a>"] },
            { photoReference: "AWCwydgdGWwfiFI-UM3zTM9L_CLtx7qOsMlfgavUuUMj8l5xufC_jumzAL6E8KGEWzerjdG5ji1qajuQ0c2kRTphkFgKu9tFGDC-SJYPWxoHTNvWcz8nEf2-I6Yb55Xd1VjvTuVU6xV-_1y4-0Fb2uCSMc8NXuPlnyOoKrFoMslmGuuobrgWuyhWPVPYMAd7lmnZICno81dPuQesv8tAyDD1XP6_dHwAfSW-n2qIMYiC8bcRoxGq13a-fNAwyFPNqBrrUnGIBhV9owVlbBRZNBohu05FTlc-v--O5rcNO3AYFegfWM4Q80yGQgwCciCAAoGyvCu1RQh_pKDgdN5EvicQS747F51DIX_10IFtl_cOQ6LssWuUDzi5nLJVoj0czi1RYfvFb4S6-FsyN_UDRHugew-5W_xkWVgTZ9qfWCiJnEZpiCEDY_Gjtiqh-51eNmYh", width: 4800, height: 3599, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103079121485997846453\">SMJW</a>"] }
        ],
        summary: "수프카레 킹 센트럴점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["수프카레", "평점 4.5", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "수프카레", items: [{ name: "대표 메뉴", price: "¥1,500~2,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:30, 오후 5:30~9:30; 화요일: 오전 11:30 ~ 오후 3:30, 오후 5:30~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.soupcurry-king.shop/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11288501125129571132", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%98%ED%94%84%EC%B9%B4%EB%A0%88+%ED%82%B9+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "에비소바 이치겐 본점": {
        photos: ["/images/sapporo/info/restaurants/ebisoba-ichigen-main-shop-sapporo.jpg"],
        placeId: "ChIJz4qGso4pC18R4wEprPFt2wE",
        placePhotos: [
            { photoReference: "AWCwydg1QxuWZSvShq9iW5XocTOB_6r3Bs1iuJSWSI2-8mX1mm3IGFlua6zRnn_o8x6hwhMVV0h1CboIzUobUKAzMrxiPC294kckM3EeOayejWP_xsXPrTYYKpWC8qGBLs2YiKbpwtAHQ8gzFT0rz03Zq-DIrvg_rDwKLYVs75GQ1iaHqafYZFDfp86nVvqIzBRdA0PR87ai0GZd1H7dbY_x7fxIqzN6eZgX21aIhTIn1hSw3PU4hOGKiPg59t4imQ4kgtH7hbWWTyB1JTBB4SrXnVj02ddIqU5k7GansnvSkmEwbQDsFTmR00DgHwCUudIszmwK19RXutKrA7791Mjj7fmPkvRgvx9jFIaQxuiRGeikdvp7uVguXxSSKmnMjaTLwHK8RxJ2_BxWHt1r3ZdSGsxfxAefVWC8DGEJxFfbtnKHZ0i-SQhpgedy-Oz6h7aq", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104428321566116873779\">Ken Ken</a>"] },
            { photoReference: "AWCwydjDXwHLwmc5PBOyFDZKh_sRSI5i4hMzFB4GWw1U9AnwtOOkTdwSpk01s8UE0llwjlWSrA-LtOWf_OZXZpvmuvoG8xkhbldc4C0qF7R5jxATrOGasRnKJN4GxQHFkValK3VRw5xm-wRSIyA8Zzo16du6cv-6RkbyVQk8n7_Q_ElawBmBgE4EmvfHHHgC6-U0uOOJbmrMOmp0FN3SQxBZQ1mRrPyS6PAv-IKn_ylGbDk1VmpeVqMg1MAhP3er-N8Z-RgJ1OBzQ-ii8bMdJ8yQTMK7NkLbfxLp-svmMqJzLuDqIvR5UwGkB2ry1sNqyE7RnGHa1Cj8qbkfJCTCWbheViIWGWVFFTCySba6OVVpe-p0mDnJWsi7DLZw1h8L071kerX0cLzgQXxRv0OfhosfTPEpXzPOtLshCQYWMkTT3qJ5lPF9HVYDdv7yfkDRxgN8", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105886718099748061126\">北海道名物らー麺 えびそば 一幻 総本店</a>"] },
            { photoReference: "AWCwydiL48qi_L0GGJrrsnWOFWMt7iifdsvzClO1iLXsQEdZylD4d90lKZtEb3fheiyr5ML3QRr79YEKD-19mBR-o7TOX8jNcJ6IyWgxq0rUlhuABZO2EINr2hy852uRkTQbtpkYOxFnlmAL1ryFIuEJhdF5VE0ZQrM2ajnLITB5RCBuUbafvwuG4Sgb4KKd-kbAIiXGQ-jlwlUi3rUjn4O6BZbWEcTAJiAAfekBZoHlhINX4UwBy2bDJFMGDBrJ2KqKvloa_Ym5FM0Q4MLVXrX9O8xjcFFkZFVviOed88j3HPUQdhQT1At4CQcACdXtLeIa1RQrj1hepfFhpZelOF4iSaDZ96Q0-ivRu86x62sZ_AVYg6w0_l8qVVuVWNsoY2OYyfydeKt5dedB30WbOUbWajKwmF68drhdGQOxl8yIvTYjRNc0frBC2kaMlViGlgQ0", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102455197932485638085\">有心沒有</a>"] },
            { photoReference: "AWCwydhmqHvFM9ZNwMOtY_JgWXeAqjSgnskSaDF_XxNMQSwZ-hWYTKvlfovwVHPk_G3wLBg-Bmdt53Qk05yfcocQnDVinGEgbkmFPebOWXznrFvfXu2s1mIYt4CED5haWTq2re_HRRaI7onPyNJHK4QquP5Jre8yaD6VrYhvvuo27ObuM_19wNomT8DpFI3dtY_-YyUbr5hT4qXVDLgvtq69tQ0ksBJZXKHKiX3hiPGzMLmPF5h6Gx07nd4K-UBc_VxE5Gceg6h_ygN3b2pUEJam7mY8UTGsr2iji6Rz41IEiGQfsk-q61T4D1LAqT0El1BfujO4WHF811S4IzIFcOIk9i2EOlCkULxNOlVien0NZGT2L2BuJQzkYmiTHRHrXKsgDIXPPthakgub0Np64e_x8sodOEL3mqU8PYUnbu1XRpgDwyN6dAm7SceWOnNHfZ66", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105886718099748061126\">北海道名物らー麺 えびそば 一幻 総本店</a>"] },
            { photoReference: "AWCwydhE6-BpB-snFxwl5Y0YPriv1CKBu8iZgYbMyZeFB5JD6bEVZ_d7y9FgQ1Grmi7kXYeZaNLz6TYtz01mxTyDVaFFZjV3k3CaVzQH1YdF9YUFrXYl5JIZyqW2ry53dXQrGw0z1ryBxRlX0X3zKrjuU_6Gcg2HIxovY13MaRNF1kMgcWnyIn1zhqFauP024pJkBBLGWcgg-CEOFNom0cISUhx3XDQ9_caO0Frhi7SUo7M5tWMFEwrVgOJE0j6xYfwUF5pcuWnQpbQNchBd0VqXW_F3aFh4-Yc9gQSwoNcUoEcCvmhAtW8np7sQVXsifaPZP3HksM8l0Fp52gMp8672Cp4wzai2w_pLhUuuXqaNYjy1YbLdnCN1RwQDN8Ef07VHQ2jdWiYckNnJQYK6Y9oZcm_9s3w3T6_o1amqPfbITg9FrjL40_JMDvtz08p6eQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112476184426813958052\">Stephen P</a>"] }
        ],
        summary: "에비소바 이치겐 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["새우 라멘", "평점 4.3", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "새우 라멘", items: [{ name: "대표 메뉴", price: "¥900~1,600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 3:00; 화요일: 오전 11:00 ~ 오전 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.ebisoba.com/ig2649/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=133821498680476131", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EB%B9%84%EC%86%8C%EB%B0%94+%EC%9D%B4%EC%B9%98%EA%B2%90+%EB%B3%B8%EC%A0%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라멘 신겐 미나미6조": {
        photos: ["/images/sapporo/info/restaurants/ramen-shingen-minami-6jo-sapporo.jpg"],
        placeId: "ChIJq6qlKY8pC18RozmCF8HX7Jw",
        placePhotos: [
            { photoReference: "AWCwydgWJLCAe_HGaagBCj_h7It_TIqAgf9vc1dWLPkLP6k73K_TpiXgMkleqn-HuXsgciagKKrvGVvqTEQYqMcLTQBggbjgNLuKfgMRBMTMf2mGF5-rHfnvjh6VHltJBFnQDkeklRpMb1AT5AAqtwm40K7HazRx5R3YEjGZ_cRHgTS79LgKlH8DK_rXXXTz7G4tpt-5XmNAsffQ-FHu35kGXXlZxLCfck6Qc9IRtKVsXvhrdyzxkZNrwSgLYaL_CzGitsqySDPRAxCsKAzolVHbpyPzff6c1lzCwbcmBuJyr7vIPMEqUkJwmViLQhvaKaKhPGKKI5l2iwppX25ie6oz1trbtyxbzT8K6HIvNOWvcWQSalT3MNpU0RwzORnF89cpsbfyF54mqPmS54R6TtW46SFfrZnfC7ccI5kJ57WZhy4", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111178686163829393085\">武玄無空</a>"] },
            { photoReference: "AWCwydiHTvsP82CMi5cyb-aCVaw4hqC2z4yWf48YksWaomjw4Wl6kvD54x8atBngBFse2naQvHedwWCUQJTe0g9t6wh6e2_Ds2BuLlQjrmEun-KFUiGNCKrergTdWgKp7t4dbEGBZ61aUULo99SDCFlStd8f_dOZfscqZmA9f_2YBbLZ2K2MxsSCjGMVt5wp5K72dGFgabCyv5sNpGB1iSB_fCDoNMklNXMnQ8VGILtgvm6H7chMHc90NU-dGQI2L6F63fBsYxBd79DJU81G5wL2AaPN9stKiAOuiA209s28CRdC5SDyu3T0sI63x50zf4QEi7lj-7xNZ2hUM_Gxl4kadfp-viz1YPUhuRsoxAUyYajndJTLF5sABSoW_Nr4JtjBzGGwXHDe7fDX6FY3xO3G4dshN58yCQT9rZNmh1AJKqdnIsYMLr7uwhclBncPChVH", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111573906083560460580\">REHE</a>"] },
            { photoReference: "AWCwydjUOyPtLq5pKr09snJuGYreQMNNQIyr9PGHXJpMwYN-gAuRK8A6MSzRKHGys3oIDSYa0JjFpN_ia8Z7EadpY3tVCMtXJbY83gWmDHkgQJmqJLYso2dB0lbW4z4HeW4MGlUXvz4n1g5JWtwjCw_-xQqAMuTz7G6OAXKqWxZLmVnv1UPQKUXKSDOMmlpCzWLvl9ruVotuAtvRlUQ51eV96GrZO-e5okAneB_31w39WnVEf4DEA3gWOhZg-2z0PIUeD05aV1xpwTTTgWRG-7ZkiSP9X9r2rT0cclTMw7-IR9d3t7yACHu1skCWp0B_GVrWTBEANufNmFSrYey5f8pRjbcQwHcqFGAISdcpfAEB4YE1ccKHyFDtoe9GJeqtAyiJSnaT4OhXZD_J86B6Ce6Kbdrg3A0otJ5UoLD5gUHbRl1KDaNkZ79anQvqYh0ko47_", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116630164205876556609\">Amie</a>"] },
            { photoReference: "AWCwydj0NiHaliHVoa9-YTSn5bu6hLMq3zI5aPy2ZsYFe9T4ekmNBupX7uDyz-7xlNYIxMLv6n4VrBQMjvkjsxwBPnFgv_ZEt20kBJ7iScJDOU6X76Yv79bjcFuc4R1zXW2tZmDfbOpx1qBV7knrG3v7NS-6dRN0_5EhnkiG4NEn6XVZTpoWDO6n9FhIAoruqaaQUqZAaVODlbOY1M8YnvJsv5E8xbUldSqr7xXOLz3krQTcy5SkEdMvlOKOfb_neJ23Do4b5VmHJgu3RORqbhTH3sinuSwxAcadzn8AU_ssTrFQ-vAxD1qvW2BOht8m3w38kX6hLOyDl4mhPg1AM6uyjMz7qUKqZZ3MVOgxBwkzVlgDKptSqlBTi3yYS2fZewK9NVqP7jORHYCbOw4EgYMMd8Czkp-pkQNbYajr97tp3zdtMpzED_PyLJrU3jX_H7r6", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107174607524124457237\">김범현</a>"] },
            { photoReference: "AWCwydgVgoYpM0z1GyA2OeLC-abk267HXJdhMJYmllWQRzi4L-Z_mQS7UlBu4jpIaEmvdmaXIOeRE9l9RcDs7L9ofZmSfFdBSbByCYG8V_316e5K08eXnK20eCpqOWWGf_ujvAOJyL7nDUGmsh51DOfWqraQzPs8q4vFy-3MnXsLONe_Q_QuYcnH4SOlLkUZkC9cWbzW_BZNXiWumKp7Ef3A7tPNZXQBsqzZ9Zyhmla4xh4l-HuF_KZpkZoLJPRCzQ4pklSD7-cWnuRkfG4PT5ZduK19db9IcZyk8gG-CTb7BOzp3m2Zr8jDhN-CjbhF6bvn74M-cOWt4FBVzRiDO_dPZlgSLHZYEzVRo7Tj5D5U11zTfK8wYb_hN8dYVMSRYq2lhSMrM6H946IjwwU4jsBQ97xyuPN-ZcqIXly971a5TU8M387gsmDja6BUE9wjUQ", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102423688222872340014\">리썬쌤(리썬쌤)</a>"] }
        ],
        summary: "라멘 신겐 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["미소 라멘", "평점 4.1", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "미소 라멘", items: [{ name: "대표 메뉴", price: "¥900~1,600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 1:00; 화요일: 오전 11:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11307649988743543203", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%A9%98+%EC%8B%A0%EA%B2%90+%EB%AF%B8%EB%82%98%EB%AF%B86%EC%A1%B0+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "멘야 사이미": {
        photos: ["/images/sapporo/info/restaurants/menya-saimi-sapporo.jpg"],
        placeId: "ChIJ8QvxwkgqC18RzLwtQHUynbc",
        placePhotos: [
            { photoReference: "AWCwydh7pMIfFHOX0-Oht6xUtva-W2RhZJ31YwRk1ZjoimS4ulh7sAwLyFn-61k8JsqiIb5HchxdW8-dkxZHV4h2LQDkGZhOeoYPE_ZXNFiGkyc3B3vHMsco7YHKvdUaihEMbTmuBacAxGl6OPMiqn0CgqFot6tC5cz77pft87YjZxYOtru4ptIiZd-zZ0rjXTJym3JpxHjYN2crJO0Bl9Px9wPmMy8eF5JmFH5mjj-wp0VK1PA_TiagxfA34hQK2bx_Q1Os6yt42pezlz4s0lJJF_FG8CkGh1kzSwMEKuaMZRBarP0H6z1MqDm__foplVkagzWoG927gAO_0gETroeaoLmScWq_r0DdZcgQvk_y5BkNiiRkiVFe0YsYoYEN4hqR5eFYGzdyqzbXNeJc03RpuUh4hHdIWeoMGor_3uZvcLMVJhr-", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114644759852218657205\">鈴木賢</a>"] },
            { photoReference: "AWCwydjZDAyx4zXFtidVrOiQ0iRUPoFCHrfl12OXUg4OiyL7D9I1e7WCIOXRQmR22cWsL4QVAnMxFo5lxAcnLKUrN8k3jKXarz4qDlXfvYMTNAfnuKesUIvQ0Q8bb8RRYV2-q_FFjBaZ2zZCRh1g_wIyNeADFOxgS0CGKlGJPQq0ETrOm-Ay0IXoO82R9hP3EyWoR6s3417r07vi3ZHgAK6wrRiUfoqt2GUbaj3FctPzeY7scvkifhaVT_6ZPvgAxL-ucZHR23YeTf__WXZ4ucbcOUrUmy-eO3h1u0CL_4A_N3sr1wZNl_kBc5fZO0w4XviV-0N14PxB44ouAfinTNspd0qg2O5fcJk9_JXkvGrQg2SAcMVywGaFHUlEIETAEpOOX3-k8A88KB_aPEe_nhOb5bv-nWXXE8N55hWcII0VzIl9Qg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107282052894701564788\">Nichol Eup</a>"] },
            { photoReference: "AWCwydglHNAirdVgrFXpRXfneL6LKDCvZgwo2u2WmfhRJg53TnrG-9wSZUpYOlafxdd7yRHVS2aHXntYlv_xcwtat0MRQSrShukk0-vRI-V1yQ4J43hm8_pGy-wwuwY5UALu-gRqQHAvX2sp8I5h_NVG3xpXoi2AlJwj8WWtAKsJ6Y-3t-I6oQUS09wzwDamDufcFVrsdQYlFQWZAAwRcBcVJGDNifrwffCEAJPPjEs3Tten4vKhdm94t7sd-AzTC4SiX_A369hYsBt3cPvqWrftaCd_v32hS5gGbYCJy2THKfQEgy0TkwXUM2cMhjUTcV-UdBz46PubkU1uC3YVvg4s-JYKHzHd3ANJP-OaK4K69vq9WOPU5DF1q03SSKoCKSpTWhvy95mR9ygBuln8G3X2kxr7TN_c98T3CYdZL6F8cBQE1qhlr5BLZO5AQ2UoYA", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109676312401257741891\">k.</a>"] },
            { photoReference: "AWCwydiJCm_UgPVdpR0fJ2bYcuAbY26OMehI6hKlMxq2_SzZqy1Zm1r3s1dYUZzNY9BtVQWJTcTVQcsRXfYtbNRzaCiP8rkoi8WRjqw0PHFRv3FAsBF6YPywRZqMNZQf5rkNbkBOwftCkAXFQGPn-PAxVLxqh34-gM0uOfGwcaENonXkx7cYKvtzbL7jRMSXAMXAgw0haDxvkFHJWSvpBVIgne9j_wvHxW4UPUQm_xtKZ2AXGL9l_PhVpwF_1TCQEBiEfWzJbxIrl7hzZG3eyuYKl_mdqFfyVnMmTaNwmpqHTIy2kQXxPrfO82ZjVx__uERx6pW8sSHv6LRfN2BF-llFaVXW9fFUjUC42yR-3OnrCpUwKsdgZ-DOhmKk3rEdvu3ToipVIlN1zpKzuRacz2Cm6KLTl4p8cdH66M0oiBEo3RPtcz9lKHCbIH8n0b8unbQG", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116346392393018850064\">ういろう</a>"] },
            { photoReference: "AWCwydgLhnDPPSQK6fIWsXMdDLgY0dL35TriB4Pr3uHKjrg4QH34MtYh5dyYXZPndsPFweYRmKvb4TW0SH_wXpyO4HYrff6PBpjuJiEwru1xV6u4u2XLin2eWjEG8jGUI5lYcMRyvQzu41QBnJa_Qep2t5OQn-xLEORapt8x91zR29IPmfISan1WsI2jZkQh-uK7lC3-tPhEl8t1ak2aYP0cIKq7XfKlFbgmGFhtn5Z6N_w5A83BbmqlGIasyK8kn8fPvTUduGlBbJgqag5hxI-g586pHawpM5YPYTRl2WIQYlkid8M5OskLBCACpygZQdD0y2Y8SmdKG7saNVwSPPqjDx2uWj7HhPKZwH9GF9i7U2Vrngvz1uXTLLXVAqIVEU00cYGU195MmX_-hPNiZ1EmmuUPHmPjWYlCWgbABAzp9iXQtVgNR1FHztWPrQLdLRP7", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108790407292797682293\">Super Sung</a>"] }
        ],
        summary: "멘야 사이미 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["미소 라멘", "평점 4.2", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "미소 라멘", items: [{ name: "대표 메뉴", price: "¥900~1,600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 10:30 ~ 오후 3:15",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.menya-saimi.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13230786759453686988", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%98%EC%95%BC+%EC%82%AC%EC%9D%B4%EB%AF%B8+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스미레 삿포로 스스키노": {
        photos: ["/images/sapporo/info/restaurants/sumire-sapporo-susukino.jpg"],
        placeId: "ChIJ7eJAZIQpC18Rzy6RhCEmr4c",
        placePhotos: [
            { photoReference: "AWCwydjl6gXJOmgyu2WPBaEl9i2CnioKLl9v-aev_p2rUp0ZN4C2t1YEcu1slp5Z6Pfb9GNyA1D3nXNzi_2WAqHh3ibBFtnShOCpj8EGFo8kHuINmhf_bNyzYpTi7kuQ7w1aTqy6NqLWsWT_VWKKPVwjatC8sTMFqf29nsy_Oj6LssHf4DsnoPTo-FKDVhtOJwmSZp1fLt9aIRB7gOdSqWHLTBADX7mn4ihn4heAqbIub5NnYCX4ZJDwtkuRJBurkyM0g-Y9Lx_G5VF7c9iUAhwYSJYbLsKdh6UJyL1eES26T6hMUTAfV3bvyDvcgyFak7oYu3-ynJBgRS_93z8a4ZWDohEbmx8KxnTpvHDv2-9jW1Dw10jjc4FYPXS8PO4OaLRcJJyAUbuZ8I1GiFwOA_jiE1u5ErbdzaalzejzRNVTKU8bZElbOOOiNt01o82fIOQx", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100736737219854762879\">丸山和夫</a>"] },
            { photoReference: "AWCwydiaFjXg6QrPeDVV5PcU5S4krIAGgZGiWG5znxeUMp91UIDwm1oCh7R9eUkRzvQX4vI-8am6c_jxxVjJLoEJ5r0ZLgMZQGrME5SW11Ew9t5UG_IzLE1VOL0evI-8kGQQ3knbfauGpsBQGfkK1vcdC39TvRd9UXOY5L0p2XYCP29ZtjxKrWXm9WzwiDj5uDUbKO8liNNFGzBa6gA8JkBpghu411zLuJSVdrk0KxSKRnMHxn1i53Y4HoTPtPR9C1ibiwVQwY_80LStuzlMaOIBLUB3JpN0jFwl5cV2ge1_zKb-ppSkd8CqaBa2cYEjgJYFlQjm5vW63TSnpRmXKVzczDJEIq9h6SFOqoKtZxxu0JvOH1QXE2orGoKdbISg-6okX8859SkMmhHZgX9D_gcOArwH64PDbxHLGVZzB3DvFU_fzGao9-cGV75bJ0glbRmT", width: 960, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117849736984564617934\">すみれ すすきの店</a>"] },
            { photoReference: "AWCwydgCKnxX47vRVA3xFQXJ_OrXsRiLKAFVzGAlZAii5dB4DHfphpNTXzdHg8sp2y64B3nWSYbo1K0UmY1PpapfQH1bB3BNxjnSevFyUqjqeOvYnKyvxtzBYOK4Ve9nAdR4KJkEtJWvcDB2tkNbkPAGHalkVKf9YKAJ3fM-hmTcVq-Zn8axyrhRaVhMNcGeaP0eXLpilHGabVKaW7YptUlzrlRM3vRXqzEH1kUjsBvNcf7uGsz9RGbyzK3AHDbtwLuSQXMzt5wRvomCiJVgQau53P44FsO3v4vgcb-BpUAnMEuCwgjOqZT3TbwUEqyeRwBX2VsbD1i_PszVRgDj4wqyt_zuaiGprZMrdUwV2ngLdXeuAJ8wI-zqwwaXuL2IHhfel96S44euooA2FWRfmhywnWf9Fmlyw1BMp446h_YiYIXPVWy0bmJVCYz5amhPc8bs", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103393465990699699192\">Weyland</a>"] },
            { photoReference: "AWCwydib8YuPpRUPMpoJz0Xn5jYCm8MaXppMCGw2WUFtVrupJmIFjb_NqwC413nFoty2Y9PY61ZyOrZm_7PpCVfGGcPWPJYF9aHVFIWgvDtPnL6oU_pp_DhmEiVM2e2pzcTgRFsOdOtxsc6Di1aQzzeDlyN4c0rA_wdkDhGndL0R3OzmDeLlNUiMaBhaUr-MX-kkkw3e9eXDnDwSpddjjeakHvKPjhEWaxmhyOJd0gdNsvzrWyZvjuGblWa-COAnWI00rjzaea96gt2fx8iwnt87gvBgXaxHzuUYN2d1D3FqIldbURPU5ZC_F8ohpFB9QwI7_72G5lgoFtBikUEXY3Rv8Dnz9E2etHG2HNT80o1RFyYmnWYge9UGeFKzEJtCPC5jrhYF3geWZWUhdrmHfjM2zo2c7A6G2Flx54cbdJAb09gVp0LYvfrc64mlIvx49fEZ", width: 400, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117849736984564617934\">すみれ すすきの店</a>"] },
            { photoReference: "AWCwydgfFmvhx3n8I9W_2Zdtnq8PTp3R8yyLJVAeLd3VnKx8in0fRtfHZAw67H6107N96SKehAh9m1r7lbN4l2rEmSmriKKiI3lDIKJ8DfWwK5ApQgQFnpc8olKqmYg_Fx1V0rnxrduA4xddr9bxjfGLvmW_TO1lTcZk5zNaml3zM2wSPBamq8hdk2pAGQXvcsZA5RNIIAsCHFFmLTgeRUukl5alAcvG2wDLy8r0CRVLXsa2gAAeGCA_T0Ld_S9X8QpHPAQWNLx5_lqP38Szxv--GPi3d-c1O6HeJFQjYuPMv212j1AuIDm5-SWr8cr3XQU55oADloli1fvh1Ark7cf7rw1o5Ytvc6NVg_hYG-xM1Xn_o3KoqoE0c-BmPrTsFML8A8WrmxTML3YYxLRu44MYDtk1kGxJcDF3NmAldbeyzEQyg-EGwKr-jVr8IYo3NxZq", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100924905702317059383\">えびた</a>"] }
        ],
        summary: "스미레 미소라멘 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["미소 라멘", "평점 3.9", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "미소 라멘", items: [{ name: "대표 메뉴", price: "¥900~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.sumireya.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9777075241444519631", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EB%AF%B8%EB%A0%88+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%8A%A4%EC%8A%A4%ED%82%A4%EB%85%B8+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "케야키 스스키노": {
        photos: ["/images/sapporo/info/restaurants/keyaki-susukino-sapporo.jpg"],
        placeId: "ChIJ__8KiIYpC18Rs1kUwm-pJOE",
        placePhotos: [
            { photoReference: "AWCwydiS412BBPKw3ErqM0R5BBonSAh4nqmkZH8PT6EY_OejFNLBZRf9oT4D42rYNfYnGiJjh2YpGPYl9mR0oNh6tbiRyAPwLVXLlpxvfv2xensuCftkDD_OXfHICqR9Ck-kzvrDcVN0xvsS0fYkrpHsd0c4WXTyJ5rlXHzvGQunz0KQa9gA8dY3EZFHau-rlnQ9Ar1dYts3O95pJsNl7VX97Ea4I7-au7TUIdc48pZMn3HP4g_sN8NqdbmE6LPoE__RfmMI6RvdFNgqcsTJQcjoY6Z1JsUrym0Z7HC7BkUN0unw5a4w9pwgpel5QRSkEniGh2yopytTXTFxnsNopgrIMi8rp3kchXFnZxs9Ik_gtQ0vJlS1yUjFVLs7cZCZxW33pphdThfPoFtv4KMpdA6G620Cr0iI3ssPdnMcLsI_hbuqLndbcJJErA89bKIa29sc", width: 2300, height: 1725, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101613009396753261907\">ALFRED PHOTO FOUNDATION</a>"] },
            { photoReference: "AWCwydhN6WluRK-wsrOC3fntL-UG89UakDG_jRhHaY0AabE4kjbYRydtFMbrdNY0MKcRa7dUtslC4HYhqICH1o87kdN4th7YQhCQ8K-tgvahY3yc77TUWkdBnxwF5m76j-nOrLUwuB6kET6ax4vgn_QDh18SYBOp6LZbjPIMzKK4y0aqoGkPYaQmAZbFn-PIBQLWagZVSj2p2So3ZxtELMVh3_jOz2aoXIJUF1Z_qDMwOHcDTHU5OimUQcgBqwR9I7WiMzj_12HVHdy9ZKryymKYg9Ytb-iD6YXAjO5HYQFG4GtZhrPrXD_RZYg50wZ-1LClM3V3HjN3U-FmD7mNcb4vYO0oloUjHxsPCwlkBhT-0tIUNwRlcXurC3c9BGgfTZUBEZ_mWicc1etLWTJYrfxXPuhplmQ300RzGwvlN7W7WFqfwrc", width: 1776, height: 1184, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107120293881976410480\">정재훈</a>"] },
            { photoReference: "AWCwydhr0eyg0FwkkGkU-z3gCO7TWdQ4hWVFZ9flVfwnCgcmxhx1WCVo9s_sKqD6XL44gWzXEf9KhTA_JbrpGEpQdEfK1HJ-Whrm96bMzgYRE91JOKds8zAnFnoYmeuF3Gticc8S37lz9aBN3oIeTBvdDgNkaIGoZORIr24PN6g42YAY1dfwkPKHftgHayWc3cOmdpFRw0gCekwpto_Qaa7BHt0wZxPi7_RN90woKEiVQ05vaQz-0o5M49CwHIRS76Gryfud4YE4YLvgwlaEzL_nFsN4p1FASLLOl98AUyTilx_duBAEJSk7WB2ehdxtXlid7fgDxt0k_egpSZGAIThG-VViB2e6fd3jUIbb1ZlqSGislgY5s8VFhPifOF2DaCmKO4wMTSfH_oV2-sw04GDrv--FbZJDGhbhNRD3FXHxcGNT2G1EVFh3E0A27hAcaw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108512275460938951338\">yu occhi</a>"] },
            { photoReference: "AWCwydhkUZDL0Ks_TYCReeulnkrisgIf_u2Ffe-OEBBfpdEMWVpisSZ9O_NOy9ep7IUjrlSMrpmuOTYk6-Jow2Sm8O5nJcZVzDrV5JEg9W8G8hUhADpBTMoAIScd75ZYH2agVN2MsBz6akrYCaAZ9OaPDLOOj2Jt5wKbUrzvNH-AmSdkEQKl5Xpyn-5gkdf-N0v4ibq0YFK43WtnH4uMkFu5ECNvNpH_WQcN-6D_I_8q7dMhPDFgqeBD7ACVC1qoYDlmsKndOmWFNm8F6PxQMnP_85O31lqiR6H8npPl8TCG3E5KcWTWpRlJqNDbNGRNj7nVrKkLSsnyzmAVQ4Jj80sOvoauSLnzsKs4NyhjixYljvKUHNRFHjLF52oEDesX7pFnBFRcMDBME9S2P5yJcUTHYpCjFsloYWAU0H8WGheLU124elMTVVsrzA5-H37GRvml", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108955759155849321782\">肉球</a>"] },
            { photoReference: "AWCwydiUzJg-QCRWShDHteTZfFu7GYt79V7DeV-RzrzpzOYih1q5U-3FzusVAoaIaVH5-05t0q352HC0OxG_-Lu_yS0C6zMPdJwoRT_1JvayHi2IzARFbiOX7xPX4hOiQZSNmHBk-thdakamGyjOWfLApTc287GdbQd-FfQnFJrLxJ7H79IKjYwK_tai3gA059pzaxnh49WgFybg64OUDDGRatzyGEL-FCh8kQ30wieBAsS4JzzXyfp3W1hhckOgZJl7eePzm4Ws3bCaWRjKaMA6hwPP_-WV9n_omV3K4hpIOmPDD1fA_tS7ocqBdbr2MdUiiA_PfqNFisGaJ0Tnc4RUxJ05dwNOKZ0OX-YQ7uy4vjoJwlyeKj0-026tUE6cegAWZRkaxlFMYMfebBKqxTHU3TALTZ4R490O7H0Ncy6lJm5Gq29tgt892KvDkXmjrqMN", width: 3519, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102932754124726930864\">Takuya ODACHI</a>"] }
        ],
        summary: "케야키 스스키노 본점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["미소 라멘", "평점 3.9", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "미소 라멘", items: [{ name: "대표 메뉴", price: "¥900~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:30 ~ 오전 3:00; 화요일: 오전 10:30 ~ 오전 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.sapporo-keyaki.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16223278055157946803", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BC%80%EC%95%BC%ED%82%A4+%EC%8A%A4%EC%8A%A4%ED%82%A4%EB%85%B8+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "네무로 하나마루 JR타워": {
        photos: ["/images/sapporo/info/restaurants/nemuro-hanamaru-jr-tower-stellar-place-sapporo.jpg"],
        placeId: "ChIJo4R12HQpC18RMlI-QkjBrEc",
        placePhotos: [
            { photoReference: "AWCwydjHkR0PAYePKc_iOufE_SY0PhCd_cYTVynDIxUNxGTRApzXPBT_Kil75K3YYeSf5f3yGB86sQSpOPdyswuL5puB7fNn5Yh1BcMPSUAlWT-BSg8SMLuzJJitltveo-JLSg0rxcNWzq3P6z0p4dv1_lfNdDwRa06K6meLul6QH4OgE5b3Ul61rPeGgqhE_S7mWLAunVtCU_RGGtpJOwhpEcKzfq03I5dAYghr1HU3wqFhy0n4Kp5FHEEIR3pMi3o5SJ7C9XtHPgAfeMT2iz8nUySimSFZNHqQSjyuNLDnIKWRbtWBpBhme_tmF8cvIVNuZ0R2lqeQA8G5tO9tmetK1NUl7Ch_JbDLM8xLFEyDqGL-1vcvqBaM3l3yM9uKwl_WtjOpRxl6cxRR0WMZ1_rkt-cSrxUtkbPWWV1VNX0qoUM", width: 4800, height: 3391, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109390861890733908270\">回転寿司根室花まる JRタワーステラプレイス店</a>"] },
            { photoReference: "AWCwydhYqdClhhAPsW0YPm3nn4qhHJHHHwVtiiWf610Y8huF0jDloEnAwyuEQtdmgGRoU5uTTz2V80la3mv4PyLWYZ1yMQiq_Eo7LzzfyfzGEkEoIVMtTvWVtK74nvmRCoraeECGvk13HDYc9pZRivxo59FjaUxtx4bdXiJkFY-hBNbKRSqA7bBRXoPWqtn7_cs6Rl5Z_G-HnBf7oByaV2UOOgTivZ1dRl6q-483tl0UkzmmoA0fgbAKmgpCiT_NMDKVgBFdsrYqII9vB6jrr3DWr8V12V0ehpYGox5alcOkB6p0vaFg0s35CP7xnMa6OAJlwjT-Fct-FVzDLqH82O6BEum3T-zx0EtV81eHyqGzFjutjM4uHYLwEbC_fApb4q4jSwAWzDLtFkN7IcjsrCiUSsfeiIegDqhpS7Esc24i88CnTHK0qRgsIFMdtrO6My82", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114855428642785548010\">O-O Zero</a>"] },
            { photoReference: "AWCwydjfkYbzs6zykwUmZxmOZB0xZfLIGDQxidXmFAdA0OfOdBlGxGbPu8d9URS6exTK2psoOvxSatSwlgKX9BfKHRWolOJA9MfMMmMi-KlMENN7_EDlA4FKboQHrE6prx9PoQ_CUunL8rd6TuPE4zZsPmqg10GSZOHsbzXRBYxwZLmH4KH_isF520wErCVfPWE64hPaZrKPexrRu9KvRvqLZkHfFD6XXPBAHzdLJ4shISsPwdnBBIm4bz1vYHGP1HtnGkDimj9USH1o0yEDkWHfoIcVYDRisL7fHC2qAxxspp7_EVkqoTLnxGUo4xbqdmRkn5vyNZRG1smGfRemptfgTpEO6izu0fZNFYk4yFVPuGL1cTcHWtMplX4mtjUOuOHYWsVsGeCKhVVk7aefCY1-8Le8ay6mtVO2D4NJbqQzQX9SEg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100032785388820527349\">Akira Takahashi</a>"] },
            { photoReference: "AWCwydizdIShnaO7hMlOn6INU0fPDYo9kO-ztgGppdT4IFyQL0VIMRcKezcOGMRBzzBShUurQ-6ghofbZTylxFv_GE8cZvEA417aylJoHu-5h2tyyLujf9uSmlOVYBmIsC1zaQ52f3geosRaiA8AQ09reeUEZRPI4REs_c_Dm4iwTofd3VZE2SRkQq165Nguj-TwV-sZDC3sJ0_KS_QW1TzKR6uaYTpIomxatgIsrhDvKLIE2YqnnP4ATjTzi62Ehk31d1lPwQwNppALB9WlbqlV4wZzGF-kV604BptiBdrvSrtvaDM0L8uEINIlWLJj18-uwoZo5w84GtCLdFet0iKdIHL8VicJRTmp5o0__281R82gjJjS9DmlzKXSGbeYfqNMs3PTEdGH-d8f6dWhaRoccmhPNUrdSRVLYegHtLImEWunCy5hHLRObWuMVBhoIDq-", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114855428642785548010\">O-O Zero</a>"] },
            { photoReference: "AWCwydhejPCzcwFiSLdw1KJE_hgRG_Gyjg4J7iCBdjSCXmwSlg1-30-WMGZYIBZ1NrTHE1iu3iPvVeuaZVy5BzP2Ldk-zkMMEYcc8SOWo4DZA46RjyLNtz9dbHHX8jIInkv5fgKEAbjrRLOzIBqyQosyqaljUfzYIkBm7KBgXA2pYMYWQkiheVqJ0twDFRxUm4KvWn1GU2sLo12pD00ZHCnJrCIodARzd4CoxW3COOVon0p4Cj3h5AB0DR5CIbsqUZhNBZEbxsoCHFnPG2459MG7sf8LnjJTMYWnvaxwVw1hZyxjcwZJ4Jlh5D9Vf0S6qKdZT1Apc-1znZJr0cLHrjRraEMWBDliOUDzoy0E6gqHOgy6tl8m6OBWnEi85CxIin9po5wqxzTU6qYxlC7jAcrB9YCir2FjRYT5oQ7SPQuV5_UBM5e4xsAI8y77XM5av27Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114855428642785548010\">O-O Zero</a>"] }
        ],
        summary: "네무로 하나마루 JR타워 스텔라플레이스점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["홋카이도 스시", "평점 4.2", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "홋카이도 스시", items: [{ name: "대표 메뉴", price: "¥2,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.sushi-hanamaru.com/store/details/s03.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5164715388780302898", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%84%A4%EB%AC%B4%EB%A1%9C+%ED%95%98%EB%82%98%EB%A7%88%EB%A3%A8+JR%ED%83%80%EC%9B%8C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스시잔마이 스스키노": {
        photos: ["/images/sapporo/info/restaurants/sushi-zanmai-sapporo-susukino.jpg"],
        placeId: "ChIJ0anJaYQpC18RX_475qRwUHc",
        placePhotos: [
            { photoReference: "AWCwydhXmy99zoUl_UbQjpptqzhbZIigvfioLIP3idHo6TpXYoMlKdAI-h98OVKLHWWWlPL_zg-x1JTiywaTCT5cmTF4X4KWtHXvURYjmqo389xwCkf9ACrHEdipL5JMG89iksLdojF1rnB85xIhLUlGO-yLhAza8u-H9e-mBsSKFSl3RQGHAa5n2P9vqjPGkaTL5FgBMNFibNH-o3JpWUqpFnjSJCJ6YTjzqynN7XDGnJHDNYpWutQoyiHnO9_ylWLOBVFFXPr6sOc2wAB4esDsPie08IlUHlkkNzOqHeIdu3gPqoShhsDOFHP2PQbJvZrcyO1MJE3VCdKcbc-6oMXGytHY8pLLyOd2Y39gYapQcudexkgDltzfKfgM2ISrDA27Lnb-FBRtbUy00dLC66hlpcyCTY9K84Rp9Fjx_FJuZ5e8Lg", width: 4032, height: 2260, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112029483893964043008\">すしざんまい すすきの店</a>"] },
            { photoReference: "AWCwydj9L-P3lHyzui23d8YOJdhvlXn3zFVolu4kDyW8XnDQjt6EP8VzQHvK91vuiJp9lsRY_fDg0pdTwAPkzgLPdsCw41-Em_SkxL6VwW-8t5HTr_JB_12iK3ihhgpEXe3-hRT2d-t83NyjM39lFjDh0DYMPZvZChn1yaf9UqyNIrDjePfSOH3SLCw2xdzziTv626XSNdfhcTnHdwOV8i-03PNPmN-C6lJJRfK-DyzikDWqjcXHO7ToCqqIFAnpO66_bgKq9NyOcycdEs6ibWg5xqZhnkRFOaZzc6n_-qmHHCZAbDb6lCzUEa2wTbG-emhRa93d97vKW-kYlSHeiXv73rXmpDDgBMXwTpA_v7CTN6rwMSrhg2h5zk5L6nowFjUd-7Hft8QokxR6ECkscsGvfnRUxiarBHvq84bUfWUX85IrconnmGYAMN53V-URGXRf", width: 600, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112029483893964043008\">すしざんまい すすきの店</a>"] },
            { photoReference: "AWCwydh_8tcsKLQmF29mISjXJ67vHcg_3dRkXghIF6AZfnx5tF3KiZSDzXlFOBZPxq3aZn7llt-egMraEA8ooz9yEYwgmzdIhv6HqnNeAMJc7ayLZPaQxVMMzI1nuNpuP-rWeS9Hl48apYIYaQLb45YsZZZ_CJjEPfNd4hrjvU8MdajvD_hmI2oJWnLxYndG5zUgk-tMdGsqH4GOAcrDFGpZSv8oWBgrnbdJaLZ49tUpVcpfcH3d_yhepQ_lSVtXLm7Vxw6n-5uXxywtWBDMZYVJFXF0D3Qs7v1qautJOJBMWEkiBJBY4pO9V02GqW-fkVh4_rO-BQpvSXyow77AUC-truIUz6u1WFiYIiW7j5pcz4Y2U8zXKkfifnjSlntOEvliabYaVo9KZwUPg8TvmNTwbxLfUCmk7Gl0eNcl02-VrM96JQ", width: 2067, height: 1163, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112029483893964043008\">すしざんまい すすきの店</a>"] },
            { photoReference: "AWCwydiGcZ2QF-A4DWD9MIJld277rKw1FbRtaOV3siIczaGBBUa-Hob7xDOr0AcP4FUnDb7bSsAUzGhZXtM9_QpbrGLblt9qiOBqd-XjQdcA8_1E0a8VTD5r7uHwrAEhr-PCx-X7t2i_ao7WO4EYy1lbLVRDf243mGE_jFIQDrXQVVXY8VWHgvzOqspL4WaWl-rwsm8GqVLSzvmCKSOpRO_p2E985oESpntePXHIPuUbWQn741MTBvPGUR6_oKEckHZBPz_L9iURzRFTv45-XDhfxksQbyw6ra_VnfI0o0oMP0BxR-_Fhzh_rSdRN0D4Rsjix6iuGSRFYvfQuVmsNpC6OO9f4xsGIhDpjqBBWxj5DVEiG807fiR-HO8qdiMRybCtKuAlpLACKokjyHrg2WNACakqj3m_PCcCe0-HmsLbyvcikf-50CcVY0WWBpS-lg", width: 4032, height: 2745, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109645199538682783071\">SANGHYEON PARK (Romanticstorm)</a>"] },
            { photoReference: "AWCwydg_R9Xw87XZ6WyKntNhpzPQLcy8316FqU8dlZ8drACWnLrCF6tgEibf0pRjniyRKe7pTg03tV0-nMr29tr5n_N7TocmBsRGu7ZbXXyRCN1VyAoglYPqebVPttUs9SRjfviuh_kclPuKWiLP49aHprKmrFVMdegpuGdjCK5XwnuM1K2Ier_F_JnzM40zKj4BVdQ_dQDFbGi0wytVo0Izrgso-p8Os8LweVdjqQeD3y--9pqpxbSI3GOyypAr8clnKAhUSDz-_AmBH8_wxgkhOlFJyZRtssj9mvOmsx8Cl7fE0RGnBYB8fs5E5UPFYWZAPb_daZpLjopaV15cfsqkxH8pme0WVDxh-udcs1ZuIFtcRoug18__0tK_787jndRQ93WEKu5oxPt2_LZYVNtaJcWju8qQzCnO7G4RgnoX3iYfOrq0Ja3ak40K0YMiZSRs", width: 600, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112029483893964043008\">すしざんまい すすきの店</a>"] }
        ],
        summary: "스시잔마이 스스키노점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스시·해산물", "평점 3.7", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스시·해산물", items: [{ name: "대표 메뉴", price: "¥2,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오전 7:00; 화요일: 오전 10:00 ~ 오전 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8597495542189915743", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%8B%9C%EC%9E%94%EB%A7%88%EC%9D%B4+%EC%8A%A4%EC%8A%A4%ED%82%A4%EB%85%B8+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "토리톤 도요히라": {
        photos: ["/images/sapporo/info/restaurants/kaiten-sushi-toriton-sapporo-toyohira.jpg"],
        placeId: "ChIJEwdsoywqC18RB3OJ8AvhZQI",
        placePhotos: [
            { photoReference: "AWCwydj8rTuUifyO628o-i68IQJ5yZvMy2zfFL4_2lQJv1eLkVocyJhqUIbrjyyHhNlMjqUh4HvVo3y026or8-wkKL4fpOjOE596QdihYUkPt5VhynnPxBoF-B2BJZm8DWNcLjIgXHlHwN0URdIFSLScEMB5-MSXMrzVHQZVRY3T3MtrioDnGQwKp4JTEmb_J8ND0oFnbuMpMKEFII0namluv-hzdvLxDgFrdhHzgUZ8L-zyHjJ28WHq5P4QVEbIc614baucEwly8faPxcv29vvAVrRop1mfviTvuawmZKkd8TM1iL4koJUWjhDPKxFmpHk1luaf2BSwadHX7yCNoGQeRaptVcQxgr725RhdlWwd0iY_p3qoOTM-I6EV_fqLILF0PCuX4IlSK8jr-bvrWy8Oxza-eZNoIN-OdaGcFq2R64ozSQ", width: 2160, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116376599401137482617\">RIN 101k</a>"] },
            { photoReference: "AWCwydgnoKpWSZmBcumALDFt2m_r3h42h-uNGReiBe6VRpJhqdyCyDaQ7sDpOhE4KcsiH1r5iZgulMHscLw2kRSuvArSxsaLYE3NecjD9RgPrTEFMZhqw-l6TKGMhq72R-qdp_UnfCdWMQPkyEK9_Di_4YWx6Lxk9n739n2x-ZIFikp2Dzn9_2fcEwj-3Vu0LZruYk3DDASXFlL1hOt6_GxevrV5W0_Ll2PisB_JCoOOIIpi5_hw_iY6GuPjITPrFY5I7nKmc9RZQ61Eco7iNIwgbY8traLAfi57LwJRDsOE0S2Agg4l9JJ1-aBbyDRr1Yva0G2Id1DtRBhdQ2ViLU926tULXoTCtLuOBsvVLvm5Vh410ajpmLWnkAERbX39abSwailtWf4gIJHX_Tp1APskADf4__AOhYu9hnspqCbrRvKPUuIMlyM_IEaY0SeYkmlC", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113876012965303858574\">no Ri (りおのんのん)</a>"] },
            { photoReference: "AWCwydh3CRT5SNreqnC56Vv0sM3Ap5Exk4j2JOms4CSb6_6oyvp_HEFtdXXib35JfdhVH0hTiEwumv-WZmwZpywtdqUiMGr1zeQniJQu91QsNcK5CeMbOrlTr6__mP6bQypCwzIMXGsSY6c9WgCNJsqT38uPMgHDwcBnn6byQPb8bR7_kgJ1XNAWnrPNe3uS3GYQpRx-2AX7GaMMK0te9LB2OQwp6DFDn9wWMlPfYqvEYmq4Tw2Xazfey_r2znGGXmvkzem09vxnbLNDgguE2Ps606uQeERBXWF8pgzbPiK2xmywgmkuEF_JX9aJncR0kycZ_nyr4_zwE8rO0yPVIuinMwfEPIbQYug2vKsh3ZPKutWwM04T4Tt61JDYycsMoWFc8W-cG4hr1Kgk1uuvfDqb0dh7OXwlUiGNAm4OMAN5aPz9Oij081PPzejT2PiivJ15", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103520832491108476202\">K H</a>"] },
            { photoReference: "AWCwydgR9PMLSSphHcf5-w5B-zx71tCp7HhDDxkdbNMjqYELxYKuMlwZYeBU8IEPZOesWw8a_h7w8JMegiNCJ87pZ4uIcQ7nl62hHAGLe3ryTue_ZGXHQ7dmiiTT_uWdgWqsLk-oCrSEWFoShrqYWhlSleeqRLu7Aa2TwZyD_AnWiMYLVamCRfKwFqCqsrK9sH45lYyXeJkMFVV2A8CGuNYcCTnMIOjAgPhztCtgjQwJzX-OXkJ7bVf9174QazCBfVTAFdngLoTrESGtfHx6uS95Uir0KIRDcPqA7Up7-Ng34wFptnyYRxWdoigfaF3LrK1EwnSg5A41mQGI22YVomWJUXDQa_TepOG_QV-b_VhXbgJ23oaSXqZojJBM9ny3aBw5T04r8rsJm9ChntNVgWZAzP0VoZqCfksDfHeUkWjUyaYEKfV6NOHWvgIk231vCHb4", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103059436624163354308\">찰기남 Chalginam</a>"] },
            { photoReference: "AWCwydhosqr3j296ti7hx87d1pl8kPOyfnA4alFh6nWkGddVqEoHkwKUoUOk8lLI6JL_gw53tTWYnJq8bCzBqZwoqm0rOQr3sKPfR9d7mhuiZpUbAnG88LyzMtOVH1yvbVvNYsp4heGuzkIqSI7eeQm7rbLLCunXJNeNPhpHZ_pWqh1D-koTfkrp894x26wko2dTU6JB7CswDWfXKaWXRAoUJSNCaeHROhGtlIv-rPFYNeKb5No6i8RYti0sBkvu9b48HYV27lrOQsMt_Hbp08bn9ZNLy_djWTUqpeRM12Y3WGQXRcj5flhA1tqJlc74Bb1jpDreOPysvdArAM_sfya2bxWi4CpBcEnBYVx6lbQ4blNsWGjqdpOlCfARlxQAnle7y2AbJpj0Zzb2zuQSE0661UdPoxosWu_ukTiuPxY-HUJG_lTyjTiI1xn5ouS9jfhQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105009296658911329453\">버킷</a>"] }
        ],
        summary: "토리톤스시 토요히라점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["홋카이도 회전초밥", "평점 4.3", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "홋카이도 회전초밥", items: [{ name: "대표 메뉴", price: "¥2,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://toriton-kita1.jp/shop/toyohira/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=172791602120061703", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%A0%EB%A6%AC%ED%86%A4+%EB%8F%84%EC%9A%94%ED%9E%88%EB%9D%BC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카니혼케 삿포로역앞": {
        photos: ["/images/sapporo/info/restaurants/kani-honke-sapporo-ekimae.jpg"],
        placeId: "ChIJ6eyWv3UpC18Ry_6sUhChd5o",
        placePhotos: [
            { photoReference: "AWCwydjIpS3reP4ODUpX4BtfPijspY_xfN_fxSa6Hg50K2H20mFN8QtsjFoucKOQcewLUZxh6ed4Ownwyt4NkGapFmh4a_1ZtcXsrc0C_idmhCQwOy3-o-pW2KyVxcqy-0oDVF9-zIjwWUqr4NX3F_Da7EwG3GRMDtnqRIt0gws4brFy8ik1NOa4ymQdJFExleDjUbblLQ7ZfBISa66Cf7IdR4pOchoAyV-i85AhIIwxPow9O8yYbeFJ5uWmsCkfKK6yp1MBs_Ke-IzrVe2e5EbdTPcGEIpovTX60yp592gNltGX1x9ejWMsEFMdI19XbPdon5fk95wr0ldcRTIIQFtcFTtYdtWRfD2KAajntOBuQ5qBUtzflh1g6rD2kYiHhkxvDneoNx21kRdTRlBEooW6OOYWtrdE5KkZzd9eynB5pxPVJQSsEU_B72NupAw4Kg", width: 2500, height: 1698, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101613009396753261907\">ALFRED PHOTO FOUNDATION</a>"] },
            { photoReference: "AWCwydgxNovnVKpt8I1huMrZm74Dx5mb9HIw21Ya7rJs3UndOIiO6NsFG2Fuaqtddn_sSRmKU1pQwUgSmWf1EJSQ7IeJw99cY8GEZ8MPgP4Ousf59m7ORxzlrt6Xb4vqJmqboLRvKJVKeXS54iLhu0hj5oQX8kBNtxOMHIgs2jxqko1mBHLFpvUHtHyWfjiMrs9bP6lm4CGBF9IJkHO_TZ8wSlIj5taEK0a1ZHJdusJbNV86G8cDGk2cCzvjWe11ldljPipqO1a245APYo1FP-1q0RGEDBvVf6GdWSl6FZ9zzyWdJn08UPHYnDk3BafleTxtWu8Rnl-Hg4R3_gsfsU3j-JrQMREqOMzQol40tEUbWbE29AbYnolUgHiAKJUIbMAyjgXV2bH0m65cTbgw-VjM7h3idVHFe-b09lga04MEQ1WqVA", width: 660, height: 370, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112524425987215847167\">札幌かに本家 札幌駅前本店</a>"] },
            { photoReference: "AWCwydgQ1BLzyoIx5PZFUnit-k8CEu-wfWOrIGZvcU8gnDblV1i6ko-PxkAW44WQVkpof2yWzQTZFTuetnDpsUdiOhHpXU32fsvFUHYXKtPBWAgqXzKT3ETTKVW3GrPV6zFbdONUmKaFEy1P31MUfSDrn-sdD7r46nWkNQxuHtaCalr71AlXU4ODAiYVzCjiimzLtxg5WIaMue_JRymNvVKvHn9IlAuuTawEh7jfOi427IbR9bG25nZeloJzwXAY522fFyQ7loiRzeQObB9fTzuP5E1NiU7_h9xBjFdnRDcB3U7xPqi9PKn1ItfWGlEUt_C20q8fuAFq3BN6KGTM73HEThd3gA9ECW2qzp8WxGeDEt0h_jI7YclQzyScpU_9GehT-Qb_mafSx5gP4RBhnP2waXkvKyREYlNEcpWFRZNoJ91ewsukkeiWViVBcIcbKWiY", width: 4624, height: 2604, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117825695322493987111\">Ian Yeh</a>"] },
            { photoReference: "AWCwydj7zbNc_RnOK6pZMLHxLS54JCSqoLAsI5-lcAWLOCrFkA4ScgP0nNcvN1oX-ArzjQ5g89pZO8Slba5V5aejEey7lhQdsMMZ__QnmB14RiVgSkhARJpRogwUrKZlej657DS3MNykrFHWmVLN0yxIddwMYFwYIide-lBd7ZeNxJ8w6J9VA8Et-F5RY-6DbgpSwgz4rGJMSuiWdZ1MomBKbQ_cZflRDpItPdgNGTn0b84kFpyGfwAKGMPVrSKEyD04L89dmqjrv0IZ2PRDHUDJ1uvmFK1Nov8_D2CXAMLiUMtMDIjkZ_mO6nqiQOMIP-yDrr0aIu2gcIntLAaKz77DKXm3pyLWsYgN9GEe2OO1AA5SPJLFBmVUe7_0OpfSnKn0wiqHUM6YkUwgWsMbXr40hfWdp6Qpqk-st477T0eH0hubmnsJ", width: 1016, height: 1394, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112524425987215847167\">札幌かに本家 札幌駅前本店</a>"] },
            { photoReference: "AWCwydiEIFnnAetqUXoQygfCsn6vG8jNHnQ2mYXiuDEv0EeWWDnBP7ibfY0JudnfGBGxIO9hQdJWztbsZv0vZfkg5ZwlFN3ZZpoy6tnjcJ6fHNHiSxpBidn8kJGkgNj-QYmEFMoA48s6Oz5KGFPHa9pFi0zY6ZdnlBW280ijlCNWpXLiv3BEajBeB-xH44Pv8hJ3mF1iEfVtrhAFNTKgTGkFViswO7F2IxHgzXwxKwalxp7oDKMnOpNWM5VnXTkdyfzpTGr6YA5XPRNbzN4Z4hKVoEJN8ov7CFIOYVpWZ-5abu3K1Gx3Iy_K2IX2LBWhNGXuUsMZAIVOssf81jxwY5x-V2oJElW5_z5pQzWIMT_SyGcCIC0i6VeTb-8klcRq0xqlVntm_xPLL1KCkht1aAM2_-CNaNhJUDgT0OV1icGyDVbVGyK11H2erY7FU5XCEJWq", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104367673449245631221\">G C</a>"] }
        ],
        summary: "카니혼케 삿포로에키마에 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["게 코스", "평점 4.1", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "게 코스", items: [{ name: "대표 메뉴", price: "¥5,000~15,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11130542095548088011", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%8B%88%ED%98%BC%EC%BC%80+%EC%82%BF%ED%8F%AC%EB%A1%9C%EC%97%AD%EC%95%9E+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "효셋츠노몬": {
        photos: ["/images/sapporo/info/restaurants/hyousetsu-no-mon-sapporo.jpg"],
        placeId: "ChIJi4jaWWogdV8Rq7F6WXurN14",
        placePhotos: [
            { photoReference: "AWCwydiRChUSzlMLcs0SrMRulAs1vDLlb3qmAz1nAjhCAXnOut81uryUjQv9qXquwUbIG-NIUw8cNJ2E365jjYuwABDmvT3VPijhXhsyLI6vlaLKN1imUcmRcPTHZEgP43rhpkFo6zQfeKC1H6tQbc7ZKMIqc0q6RnxmLX-1P6q_mFrjpZedB7MuSg2a0pUxojAEkL_eZD_cnzyUXgFoF_ZJkAtnofLag2_X344E8pvi_3NKgSFLKV4YlVS129jNsU2xa0jI_dB0UqZL-UdlcWRZs4r4pZV-RXzrIzSEIr7KxbXHlo_uw6DlVqajegwFNVcRqhz5bT9LCZOt00FFZJnHkPte7IAywJwKY0VdTrGh7R4pcL3hIRyVTg2qwKqa3k6NAm7I0rFN4krSy-__9VuLqRzRKx1-egVFcIqaLePQjVZ5W8_mgjk4TWf3eYcPg_Ib", width: 2600, height: 1733, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101613009396753261907\">ALFRED PHOTO FOUNDATION</a>"] },
            { photoReference: "AWCwydgCqMSMkiA59mlAeVPxixhMyXbVE9bOBNOOGDpdeNGOexJ_x0yOJjHIuCt2MirNvSYWipC9iN-0EzToRa4JfiuK6Grly3BpUgrdGYSkPHlqiL21q001nTOhYdZTQuUVlfZjL_E_blCvwL7RLI4Izi9BpoaOGIkoBDC0jsDCpezDlhGopzPqyoBBHiWsZLTkygeLYS-UblXzx5GjVTRKxCrSfPtUZIHaXZLNbHuDjnwMt14i5sXMtToVyMThJsUDBnbKKcaP8QY5CCJka0-Dcyy22o6LIA9Kw5y9L8hTNS-qLVzEn0e6dBPkchTAsUiNXW5FXrDfcm-yqhzjnR3xU1UQKbbySkf8UGsGqHGlkfJnuIagXH76bsn5MqD8QaAHKWYNUMDJW7WbBQlCmD08Tjc80qC1HVuHY02dKdS_zu9JTtc", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105413136095959924807\">吉兒</a>"] },
            { photoReference: "AWCwydgFtR4A9iNcL-tcSyLV4Ag60kq3cHvfrDoEu4XBoENaWdTAVOiUuGi0cMKcoQIxfzW7Gwmh738GL-Ut9lPHYVD8qAIqZ2fM1p5hyhV24S8T6EUVKa3qAhK5u1M2ax4c_9C6JqmKhLgi0zHnCaQJuIOCn63DBkFSvQAFsiGvbd19XECAtTEzh_46e0wSFAf_Bk7Ng4aQPgIcicNESl9BGlY5-1WMYhuFMzDHfbdwj9oRkEqTWgR5zS0R9V68C-gJbgLDLrI9JTguZB4CNxjPvduljjMROTTClxahfosLEnVQdG2aQdU7T4TjpjInRmVG3rOjQ1tb9CJvvb6KI1_Um_rtUYrTcjuL1LATWjpLm5i8rnI6WV9eS55ZQi0mPpmPujDYUazzM7yAEpKtd_91kNRN7gCZOjFpyvMcQ6TEcpkQm8zTa6T-lTrioIIOysTD", width: 2522, height: 2186, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106399054337521651143\">Tsai Meng Kuo</a>"] },
            { photoReference: "AWCwydjzMde8PgCG6ULDuYy_eBqJovsXXaeuvGIYZykTNUDZvDEQFXBUUXHzBf0FvzoqEcSr_QrMN28V6AcaeOCur3z_AxYWj1QJEABswkel90QJjg1Y2U-5BpyxRF469wIHzxtTGRWtnDyIKHCDGmy1UCjR-DDixngFSfXIteYUxqyMqUSGMKiVRIc__aXSTQn0EBFqDULbGuK5tkuK9qoAL8qaSSKIPLw4ZwlVWuZWdzMf-pATxXraifYKo5Bw0Gv3zC3OT9kjuajQG3IiDRse4qLkCQG-ErquCmmRo0oGJPfX-_9vqRqnlMmDUO6sj0P3T9Fn4ZlmjJSsxUZU2Nfqde-Gjzn35Aaa8B9VPUaRnvlY9pVN6Vyj1tFrxwkRuFe3iA3Fw5jpvI0l2-qkPhj9vZtOx36yA9qZbgbXHt87aM3F0EZqMlc-U-ba4gVmWQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109664445999005922023\">Shinichiro Akiyama</a>"] },
            { photoReference: "AWCwydjCTjRbipuKnUb605UtCtDHk0cA_HHy5wZffdecdcV_NTorjdOMf_jpYTqwNpr8XRpknPC2BOfG-bY3t4G_s47Z3q7ytdASPe7i7QB3dgcB2uv-6ZawofEy9G3-H-Zzb7AecSNiZT2sv7MHmrJFtJUHFYavw8S8rLKNHlUCZhAf3KY1U-sLdr3MmI6WLO2KEZTOZZhn0Ft1BWF_G6lzto9o3qoD4NBAZ2DaJwgfzVE-yNjPqa3zeu_c9glRYM4lwSB1pJzuZYbtR1L36aDpMdCyjFRgnJY5HFofu0IBn2cwZBMMpwo24ZTY105wCKZcdV85IToq3KbgRRRz8tYrJvjtpbceWYzMHYfIqfE57FLoq-hN4WpfU2u3SShpWYKIlp_YIOdAV2FxV0yywTH7ZRDsehD9cFQHmmrErMYVcsFLF_5oblsmBovGLWhpVw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117928792936184237775\">Gary C</a>"] }
        ],
        summary: "효우세츠노몬(빙설의문) 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["게 샤브샤브", "평점 4.3", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "게 샤브샤브", items: [{ name: "대표 메뉴", price: "¥8,000~20,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 4:30~10:30; 화요일: 오전 11:00 ~ 오후 3:00, 오후 4:30~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.hyousetsu.co.jp/sp/index.php", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6789083509554852267", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9A%A8%EC%85%8B%EC%B8%A0%EB%85%B8%EB%AA%AC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오이소 니조시장": {
        photos: ["/images/sapporo/info/restaurants/nijo-market-oiso-sapporo.jpg"],
        placeId: "ChIJI7OWOKkpC18RsNDCudC7fqI",
        placePhotos: [
            { photoReference: "AWCwydj7TLDKBIDn4aRulQ-N4LU5GInr_iQKEMg-aGRkneTK4mnfJLbSq04F9rSSKBSOSsJujiMGcNPoGznVRlrkYeUl0Xk1ihw1NVBMDFIeFFvMznik91y_-rojjzHMtMxUTj_o6VtyPuetyf04dVgqPgM-dTaspYD4UwKWx7xZxBCvz5WTBmoZnN7zgwNiTOX9PM-mvbuGZfc6qY-ndC1MLyAGD_RpmkSpNzwoduh_Pb6xdaDj9rbnxSSlTH-_hrPTQ6Mrp-3_JaPVzjN6k4d9TVCMRhKW64F8eHgT07MxjyAfjpseUnBos5xvTehtOMzC8ULkwSYXv-xCqRydq2Hnkq1FDB_k8P2mb17BIZllTMAXtzqn-o89cRMG8Ks0_LZPVz7DigBxWNso2EddC8tBYkNr0ktpJII9HyCwH4gi0SJEvzteptPjuGi5fS9vZLwE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116416999463947161435\">miaochu miao</a>"] },
            { photoReference: "AWCwydjxXyLvsL1faetgzhEe3w2gRTMiSQUE8jd0uFuUScOSgKZFLhzMHMmKZ3YS9PAA6d4ooJ4Zscw3Mjq1MyruljFls3uhtncLUc1hv6qOqzK98Bb76u0aKVVAb74iENLOBhDIUBP-I-zcERnpSW_2e4VGlcjC9uIFuf_xcGHIsnMBlqQYR8hELbuWNkaV4ydgi3V8P8pQeeaaIq2-Ox2UBU2bjrXDpxzPicv1V1TghydlMKZzCFRavqNVRJwjLUS05jtvha0El2mTz5keXLNL6rXAqIYHrWzYQ9Z_JjDpWmQzVoGEZ-XfXuXahd_udBJzzGoLaBFDo32mgbDjywCZIiXPA1Jmx6S93Sj7PEpMvgvyx6hQNqzYqovIIaVkZfgz3LSQwzh7IePyhme4i-epDOnc_nIfji--HOoUjmwioANl1x-k2CWP5p7ckEp7xEtZ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101104049356381926029\">Liam Van</a>"] },
            { photoReference: "AWCwydjwkgJVQE2XlNFUvDk-WeYRhZjYpWpPHFwpoEi4kTWzk25_IGNzq5Ty1J1ppgBkAYo_00Ja3uk5eT2Csryiat7EQKY4Bou9-TLCLTqynJnZl5p7ZvxxrHG1SzDwORYUvOW5gSm2AnYdj5MwzcnvZPeORU7crmcl09DhhMamxnGgsFVij8eLfQ0TXpwgpUzjoglYOYdN8numaAhzQUvFvxzIEy8QYXArX6qJQTW6dPVq4ChkgZ5HfTDCC9uycmOGgEZmF8xJXv6OPiSSAzROKzJw-ReB8JUtXwifyX9M7MhfzdKXG2WAHZYMMgc6_ssB54U2LrXhrYlZ6YkfYR3cJQ2KsxG_4TJPzAb9PVumZ4p-wkBDnXlpDpf_LtnuYSeMasQ1lhjgOtjgGFISJEQrKMOQgGdPvzNMJTZZR9X3X4gKTynr9rEcZgt_YcaWng", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115979360414732309407\">A I</a>"] },
            { photoReference: "AWCwydiZP5PKXAKBq-H4DrVNwCdYd0lGQmUB3xabdQB1KICdQnpEKaspqf70BHuAjJclI8hjKrpDns9EdqCdwrBkY221VLEFGAVTiDzUMnagtx6YKFjSIKzrKiXoDbLHsnrNqa9NiWQyj02ciWHz_304DXrZ17EqDPwYr001WxYgcJil-rMFcjevS1G8uQxLVVj3B0QZjfekFn3F1AVZaFi-or_4-cG5Zr4SNdw6mFJlrSdZN6hLCQUggbrA9kkePRTlUlTnCaV0MRJTAhy9_PaExs9cI0Q4MoucZOuOcy7jFUym2z5ZEeqb0yEODa6iM99g4fjQa0-Oqxq3m7gIZPvGFxeklAqFBZMD9qHJJ6dkx9UgbZloA7Yx6R0WtsD4BFnpgg_Zdsx9Gx02eCYCuNClGCelMrV7KDgKckpYDnP-L74_6UAClfNeozVQulGgog", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100618295330470233704\">Wilson Tsang</a>"] },
            { photoReference: "AWCwydjpnkX77XGrwZh_0eG4xXBs5xSXbO_-NogymdxQjk14s2GE9QPzMx3clofh8f6Hos8RepndGTkniT7yEZfaKaWUHD6JdyySNZfbiJb4ds24cFgK8u9vo4rvbcBjCVM__Z1o9IuzHdhAeQkhoA9952HzwpLPiLI1fJ474a04bGNtNsR_ZQsQZUwy1b8la779t4LQRtQ5Lx5mS9Fufi99rlInz7E8Qa70wMPWVte1vY2sfjek371Yq5BsFXzR6cCY83p2CDnFtcIpqjYR3DPuixJGTWtRJc57Pa4N5WOm3ui7fUGKVHtXXhC9Z6fa25TpjaSNONkmHPyG59hwEPoPDBW-E6e0HHuBNx1s7j_Uo0_S8QOK3Y7WP6H47rkG2vvaxF7PkNP8j_IdKTzOrQLdqZ2mr7MNzn0NBXQpPTe_hav8x5MSmtFgcb706La1BIFG", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116496313287680240985\">m d</a>"] }
        ],
        summary: "Ohiso Nijo Market - 2nd Store 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["카이센동", "평점 4.2", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "카이센동", items: [{ name: "대표 메뉴", price: "¥2,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 3:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ohiso.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4419369595919713645", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%9D%B4%EC%86%8C+%EB%8B%88%EC%A1%B0%EC%8B%9C%EC%9E%A5+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "돈부리차야 니조시장": {
        photos: ["/images/sapporo/info/restaurants/donburi-chaya-nijo-market-sapporo.jpg"],
        placeId: "ChIJdRU6UIIpC18RjtDBXUtyk1o",
        placePhotos: [
            { photoReference: "AWCwydizY75UBZCx-OQG55rC-D69YPK3_BC4xlhecdMHK_ZOq9pzFhLJUus66yN1ETR3hA1xsLAwA1HusE8HaC37aNw4yaKRPNvRl_ajohU-GqKUBM0UAXPaycJtVoUQbQ-pVe13Y7bipdlAR7ciTDWbwVLuAfd8Z9tAG4u37MpTbJflaQgbA_dkRf2dMCu5ZD2_d2phsZWt-ngLRPTTB1NKJqD-HaWZzAXQw2un811tCUAbljukkb5z5jLTE-00m0a0lmBtRmfvBdNV8XnbmIXtcGX-Ctd8VLAb_Vfs1DUPRyGPJ8Y_eP1RdYB2TTKGiRVPXpCrdbMPRL8hv9hCvPe_Llqe824qNIiHgbI2hBWE1keEAnyrBch9pvRUedpiNjjnIweclqgI_wZew8BylwQkGbMeKZwrI46Va0wc9COlnqSfhEv0", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116238722251817269245\">どんぶり茶屋</a>"] },
            { photoReference: "AWCwydglpNvnUetWPzD07W3spaq5QsVLHRXREEeHsrVMZw57sVsQnoLfxAZVKvIfap7m_qw6sL1J8BiYzO_GqrK2gfxShnKJuyI-EXBwG-mkq6-qbIUyaQ51Dozx2J2ssu6Qj6eP-C5-FKaQDcqL-Z4gMJEnFTsag98reOiTea77J5TR8Bq9ke44fNiYjHWOuHBt63QgDnnuQUaAM0J9Tc_C-i6i8VluhtyLEvR2bwfPMjbx42TAQ0I09jNZOnNW-N7nsFCthafdRL6mnOJDlta6hQQAYzELV7pV9Se3h-2zCrNBfR4dnsL4AI-OrbRQyvRGM6nbkq5L9wX-x4ssr49jC3bZ0oz8ErELDryEMfI9r76d5JwqwIblq_9mIQcmt0wkzSUK9kdLHa4UVzSbEaf9yTt7fiTXCWXIidse3KOj6T2W0A", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116238722251817269245\">どんぶり茶屋</a>"] },
            { photoReference: "AWCwydhBvBrlmcnXUcUgvhLnVVt4EoS3iGhXvjKipOB5_Ujhf5t0PSOkQp0h9XjwKKftjNKtqIZrCoMmlp8jnLqYVUQbCtnqyJuc5CjZKWFxAtfp_37s9egoQnXSt7LLa7faXEMra6YuHYrANoC4NmiGjx-soPMXcTIhBYd96Bh0gJWeRJ8drLz3JhWaCdZdIgHVgpyX_k-D_PJXlPlVt8KfKqdnyeMZEtRuvLt9nNOgiwTfpWQtdbPG3Wxo05SPgYZCHrO40McdX5E0uh_eqbAatOg9xjy8DT9N-ZF1vOqpQx6ds7fGzmckyYjPAQ4oJaNfpRiRGYJlEmq2p4kYK6A_UHHbpULaq6BcFv_xiIdBmw5ayNPcLWORU219pqNoF4MqWpFdD9eGXd0Tls0OMiUVPj489AKUN_x5LFwzbgm6_-X7ch7ph-oxm63oFCRzC55W", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115237431501330457760\">Yamebear 007</a>"] },
            { photoReference: "AWCwydiDiZGP7KeIRgBuMA2P2IMfWA6dHYWRrAhzOw1SyEUEqwu6XT_pJdL78oZ3FOj1et9vQjw4jXuFNMDdSPh4dwH4aqEl8B9HxrK3nwh-VuyLsPBUOfkcI_muZGir4qXQ7SqyKz9IToGwfb6v5kVCowD97_8rz-kvWrsF8Jz-aj0Bkr21Ushphw97ExqunfgcAh2dobGZ38ySLx3IBInDsaQzO_afzTHTnVZ3fYAahZ14MMkDew-tTshi8c4TUc1gcnlcTqxbTfkljGRlQCIG2wwqPolUt5aKtrHXJCWBnIivZZ7XD5i1jM4rTkZ_eBcJQtHOMBFI5wBQMa8aoteYWpzerL6boXUi5_242ZOYt9iUQsJElqjmLlVI8usXMGKfcoQM_KsjNiNMv81jRAgzsF6Wwnkbp_xorw6_oJx3ZygYcOpMhig8WR2t0IfMAQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108017298885468494599\">ヤスキチ</a>"] },
            { photoReference: "AWCwydiBU9TBi-bIn1yFNg8lXg2sveFgXsFU7ujSedIYIoaeQBf6mSSUMLHLlBnnTTVElaxQ28OdXlJbIHbb9lfUUzCdBXZn6wncyGJvsT0mWJshN-ZZXpD-RvHZkDowfa8CYGxJ9MS1EoPgQDjIOkeBHj_lpSCL_lAt4Lz7G0i-AEtsm1TuexohdDKIvhclJQrbPZ0ekqsPkCsNx24o5FC2G5qkQSQZ8GrxNHBCiSRp7lAX5xrh2ac5LbRA7wFVv0YZM_IGWN4KvDD6EIOfBiD_rkbtDkE51xjm1gdVGyDb9tz_Ek7jmYj4cD-j-pAXt1mA-A48FBZt9HkJME3KM6Gg5yNFIzLF71JJJnnGymeyBu9lHHKXkJ7TYMGYwVZwpb5yomkxuS_iunPepO1VYRnD2q9l3c0G84bIu5OtW9TdTdrHSKhkhQ4I-7a-hXJFIcj1", width: 1620, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108397619845760925429\">蛀米大松</a>"] }
        ],
        summary: "돈베이 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["카이센동", "평점 4.5", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "카이센동", items: [{ name: "대표 메뉴", price: "¥2,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 8:00; 화요일: 오전 7:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.donbe.sapporo-asaichi.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13429710081302807996", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%88%EB%B6%80%EB%A6%AC%EC%B0%A8%EC%95%BC+%EB%8B%88%EC%A1%B0%EC%8B%9C%EC%9E%A5+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하치쿄": {
        photos: ["/images/sapporo/info/restaurants/hachikyo-sapporo.jpg"],
        placeId: "ChIJv57FeoQpC18RdEvZOMd7tkQ",
        placePhotos: [
            { photoReference: "AWCwydg63NLO36CaiVBKQJo63mFqgD-IxkQbGebrIdK_FanFnMNapL9jIXR700ABWWgV_ak9yiLSpKRPEe6ApwbczEatPh_vDC2ubeOoJRVmY2mAJADjDTkPfBsbr37NvRVcVGm0nc7alHpBaZpl3PXA-VOfvhzLhEHmUKFfJL5oBcvB9U6h-B0CkuXOUROg3Js97IeYzc9pSV7lrSKh3s2nFMlYHZLos3SuHrpZSdubYstybANoC2ZmiMGZmzhVY3VPdncwYvxIvQGf0IAverBS_HZ-kVHMVYRhou0SK-OkH9rXnAPOio3UytpOtw3cvmMIiFGf4Rm7a6eJRVNc2nnXySf7X0ISiiKxxQBXfxoYK1wSN_Lw3xYtJCky5QG_J17ycnU5SloLYXk-_MzREFMzU0fW5U2VokYl_rKfkpNK95TzUCA4ISqQw0cOX6Rx5BaR", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103121291324007345135\">トラ</a>"] },
            { photoReference: "AWCwydiOplso5qbNEQRY7GWDpL_gPMLObFPNulzDxj7ZerkyNeb8t8essp1a5GkNPFCV2dlSjbJMApoOM3QtPGyJaBu3xkV_AfZNUb6-qN0FEt8VdzDAsnhXb0AaYj35Dy92kVfVj_iKR0jn851nR0r6jZplOCJjtISXLQtSyWA-vsT3Qz-2DBiEAigQ8PHRw2t9YEc5iX-XJ3uMETc8Milbpl1QKsxoTZ__eigD-77hPrACWXapy8G_OzJqiFyJZ3CS_pW37JW9ZRXHignxHwASTHNSSi4UoVKkRsKKoFI2utJpyNcoQ58FpATkC44ICOm2QjJHJovz33iW1_gmySaAp0I9RLuCcL8tScxk8w5Qbp321zjzRmSS_XVmBvFhBDM7iJhx7EwhbBkIIuYR4YxXV8vzwpdu2QVQTiKJrjO-5UbreA", width: 620, height: 618, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107106407484239743335\">海味 はちきょう 本店</a>"] },
            { photoReference: "AWCwydhoZo16O6W2Xk1la0KuwB0bu3oRP0Q-wpAJQr3KEIqJx1cOylnWgpJHd-wgEpBYEqnwtsmAnIUJdODIpNeQVfoxltyjluIpVbcVbofaTWf8CLKH9Drf0jrc_APXzbncjQo_rL25vWu1O0ooJA58q6J9mF3VHEolBNC8QS9jKQM52hXl4trf7BUPGS_drHTL8wKdO-TLBc9x0qGY5BtQ0hb3ouvrAWqRyMnvCAJwlt9Do3JJXdHycb0yWbGZp4lMbXuDsJGEJPC_yRbGNHXcBC1UnWGGw316HbOxtToycyUq-zLyaU_86krG0vBYfz_Y2bYux4nBGIJfWUcChK6h-C3xx6xdMchr-NCZQ8y3vYBOP8ixJVEGcFbR-yYFVHYtf-qtcGHR8faqcTDFn6_30OZDzbUdj7x4RwSkLW2-5u6a9auUn9vp59UprnoiZQ", width: 3468, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117970325402793966482\">はなだ</a>"] },
            { photoReference: "AWCwydimWhepqFObTCMyd-pE_6Cu4j2RiRzcMBOeTz5I47qup51_re-PhO6_pz7rWXGJbOkFpkjLH62k-aW_u6_k8mEkqMRHAXQ1J0xolxWgBrNNdXyxUrGFFrlcSEqUMgXdGTK-zEJfoR_mUf-mGRr4knOlHnP_mKcg7VRY5E4Y0I2mt3TtD91YGoAs5dit1CnIWtFfVkjFeUbZe1ynhtlUzYYaopWOhVXDiJuh8Yh_WcO-Fl3kzFSKZZ5Ngrcu5Ee8BA8i1QK4YWhnCXQddQXBgH0ExBLPmlzkesrDM7w8FpUdmEsu8MbWao6g0ZML7DGRd-o-clL1xD249mV-RSulFPkGMYgU0Tc_Fjp3m0mJhF4r0Ek5lnKpaaTSekObn71ovHYgOWhOSyS3Eh5XTOPuOLDaOiro9_rR9KE7us-ylfm0ObG-JEHRQmWt5JpH3aFM", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115735985912839436250\">Flower</a>"] },
            { photoReference: "AWCwydjRJCALwB6V6Tz4QMEvDB4lKpmGI9clkvaukSEDzrEMHglvW6IE-mvsThOfr5PXFEwSur0NB33_gjgIESQZCU5xzqGaCnp1dxbDGdgqJp0yxY5FFwYMEelS_e0Nbu_sRmWjTaSJaHMf2oeL-16LoZG0CP5USDCzs8ZVk6M_gB7-zhogk9fPJmPuelGC-wR1sxVtZcEn86oE8PxQUKGOiVdDDGEDgrsWv0D0QldrMh1luL8PVTebozM6HUuQnmRoPGlWfTXeiTv7CDY5wEGEB6dFFvctOUFWdlwH-YsKFY5INJ4W_jygHASAhUpmaLNSVaAlqJ2nUbIjrjWtpqY4F5b4bLqhv9xMzldBC9_h8tseo06ZaG_zAg4v2Yf6MDtIqTAx2va8dPE7NLhH8vtlWzMrZMJdpWtZzjMpUfe8jeDePDD4-iEI8g", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106262707195389378810\">M</a>"] }
        ],
        summary: "마레 하치쿄 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["츠코메시 연어알 덮밥", "평점 4.8", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "츠코메시 연어알 덮밥", items: [{ name: "대표 메뉴", price: "¥4,000~8,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 6:00 ~ 오전 12:00; 화요일: 오후 6:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hachikyo.com/hachikyo/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6461516785649128582", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%98%EC%BF%84+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "로바타 오이소": {
        photos: ["/images/sapporo/info/restaurants/robata-ohiso-sapporo.jpg"],
        placeId: "ChIJI7OWOKkpC18RsNDCudC7fqI",
        placePhotos: [
            { photoReference: "AWCwydj7TLDKBIDn4aRulQ-N4LU5GInr_iQKEMg-aGRkneTK4mnfJLbSq04F9rSSKBSOSsJujiMGcNPoGznVRlrkYeUl0Xk1ihw1NVBMDFIeFFvMznik91y_-rojjzHMtMxUTj_o6VtyPuetyf04dVgqPgM-dTaspYD4UwKWx7xZxBCvz5WTBmoZnN7zgwNiTOX9PM-mvbuGZfc6qY-ndC1MLyAGD_RpmkSpNzwoduh_Pb6xdaDj9rbnxSSlTH-_hrPTQ6Mrp-3_JaPVzjN6k4d9TVCMRhKW64F8eHgT07MxjyAfjpseUnBos5xvTehtOMzC8ULkwSYXv-xCqRydq2Hnkq1FDB_k8P2mb17BIZllTMAXtzqn-o89cRMG8Ks0_LZPVz7DigBxWNso2EddC8tBYkNr0ktpJII9HyCwH4gi0SJEvzteptPjuGi5fS9vZLwE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116416999463947161435\">miaochu miao</a>"] },
            { photoReference: "AWCwydjxXyLvsL1faetgzhEe3w2gRTMiSQUE8jd0uFuUScOSgKZFLhzMHMmKZ3YS9PAA6d4ooJ4Zscw3Mjq1MyruljFls3uhtncLUc1hv6qOqzK98Bb76u0aKVVAb74iENLOBhDIUBP-I-zcERnpSW_2e4VGlcjC9uIFuf_xcGHIsnMBlqQYR8hELbuWNkaV4ydgi3V8P8pQeeaaIq2-Ox2UBU2bjrXDpxzPicv1V1TghydlMKZzCFRavqNVRJwjLUS05jtvha0El2mTz5keXLNL6rXAqIYHrWzYQ9Z_JjDpWmQzVoGEZ-XfXuXahd_udBJzzGoLaBFDo32mgbDjywCZIiXPA1Jmx6S93Sj7PEpMvgvyx6hQNqzYqovIIaVkZfgz3LSQwzh7IePyhme4i-epDOnc_nIfji--HOoUjmwioANl1x-k2CWP5p7ckEp7xEtZ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101104049356381926029\">Liam Van</a>"] },
            { photoReference: "AWCwydjwkgJVQE2XlNFUvDk-WeYRhZjYpWpPHFwpoEi4kTWzk25_IGNzq5Ty1J1ppgBkAYo_00Ja3uk5eT2Csryiat7EQKY4Bou9-TLCLTqynJnZl5p7ZvxxrHG1SzDwORYUvOW5gSm2AnYdj5MwzcnvZPeORU7crmcl09DhhMamxnGgsFVij8eLfQ0TXpwgpUzjoglYOYdN8numaAhzQUvFvxzIEy8QYXArX6qJQTW6dPVq4ChkgZ5HfTDCC9uycmOGgEZmF8xJXv6OPiSSAzROKzJw-ReB8JUtXwifyX9M7MhfzdKXG2WAHZYMMgc6_ssB54U2LrXhrYlZ6YkfYR3cJQ2KsxG_4TJPzAb9PVumZ4p-wkBDnXlpDpf_LtnuYSeMasQ1lhjgOtjgGFISJEQrKMOQgGdPvzNMJTZZR9X3X4gKTynr9rEcZgt_YcaWng", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115979360414732309407\">A I</a>"] },
            { photoReference: "AWCwydiZP5PKXAKBq-H4DrVNwCdYd0lGQmUB3xabdQB1KICdQnpEKaspqf70BHuAjJclI8hjKrpDns9EdqCdwrBkY221VLEFGAVTiDzUMnagtx6YKFjSIKzrKiXoDbLHsnrNqa9NiWQyj02ciWHz_304DXrZ17EqDPwYr001WxYgcJil-rMFcjevS1G8uQxLVVj3B0QZjfekFn3F1AVZaFi-or_4-cG5Zr4SNdw6mFJlrSdZN6hLCQUggbrA9kkePRTlUlTnCaV0MRJTAhy9_PaExs9cI0Q4MoucZOuOcy7jFUym2z5ZEeqb0yEODa6iM99g4fjQa0-Oqxq3m7gIZPvGFxeklAqFBZMD9qHJJ6dkx9UgbZloA7Yx6R0WtsD4BFnpgg_Zdsx9Gx02eCYCuNClGCelMrV7KDgKckpYDnP-L74_6UAClfNeozVQulGgog", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100618295330470233704\">Wilson Tsang</a>"] },
            { photoReference: "AWCwydjpnkX77XGrwZh_0eG4xXBs5xSXbO_-NogymdxQjk14s2GE9QPzMx3clofh8f6Hos8RepndGTkniT7yEZfaKaWUHD6JdyySNZfbiJb4ds24cFgK8u9vo4rvbcBjCVM__Z1o9IuzHdhAeQkhoA9952HzwpLPiLI1fJ474a04bGNtNsR_ZQsQZUwy1b8la779t4LQRtQ5Lx5mS9Fufi99rlInz7E8Qa70wMPWVte1vY2sfjek371Yq5BsFXzR6cCY83p2CDnFtcIpqjYR3DPuixJGTWtRJc57Pa4N5WOm3ui7fUGKVHtXXhC9Z6fa25TpjaSNONkmHPyG59hwEPoPDBW-E6e0HHuBNx1s7j_Uo0_S8QOK3Y7WP6H47rkG2vvaxF7PkNP8j_IdKTzOrQLdqZ2mr7MNzn0NBXQpPTe_hav8x5MSmtFgcb706La1BIFG", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116496313287680240985\">m d</a>"] }
        ],
        summary: "炉端とおでん 呼炉凪来 すすきの店 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해산물 구이", "평점 4.7", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물 구이", items: [{ name: "대표 메뉴", price: "¥4,000~8,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00 ~ 오전 12:00; 화요일: 오후 4:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://koronagirai-susukino.owst.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15216797622946947441", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EB%B0%94%ED%83%80+%EC%98%A4%EC%9D%B4%EC%86%8C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "롯카테이 삿포로 본점": {
        photos: ["/images/sapporo/info/restaurants/rokkatei-sapporo-main-store.jpg"],
        placeId: "ChIJN5rQlZ8pC18RHrY67ROV2mo",
        placePhotos: [
            { photoReference: "AWCwydhfJsqvZRSNaf0cNm3qXom1kZmddcbdS7sMI55wa2j3jvkzFeTf051ULoFQHsnehN89BBAy_sJ3Vr5ud8o3sOhNh4OodIskbWBPNMC1T5100OieljmJZKYboqh6vGi4WzYQHYPP-YAjx6eb2Ux1eATZTWt1qCX-FOQ67TEzMXNN_QWYwgviDYUEC88MuINNXTAyovCcGbkJESo0BFK9GcawrlHRrayEyh-6UXWXCzRuy1AjagkzcDXZelUcakSXerYnrBsO0TxEdo7XPF-5q2gg5EiFOHjAtRuf21G3wfna5cU4F5IMKp6NocsUE2usk9OvfgzCZQCjcxMQGiglQqQPrIg17YY9ySB00K_7PFYxf8DNySGzbt5TYe4g_Utm7WITpqeGdGv5m7oTpkxKn4znYiPIi-KbK6vXlRmiy3WS_TJq1SWcxKgLakN5bqgI", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108073422086280964124\">HSIANGKUEI CHAN</a>"] },
            { photoReference: "AWCwydho35i8ecoXyP4JloYL-avpPNiWa3IBO9tAEOynZmAc2BdhERq7LUTd76SqkT54aItSNezJrOrPgmzE2AF80HzhepQqrF59QEhg-apiWZJFcu4VUo6IWpJLvq2LPWRWcieIYFu5oDYnkx7sMFhdEqVK43wv4O2qY3VnP0gswJL5m0IJO4HSsGOzBGHcdWB7EwUUhARuF5fEFc2Ra0L0LKb5u6yEDDOeNwNFmtgVjAOcNDxpx_K8f6CWNCMtifYP2tYHn45fraFicmNcberbKyOySFWAnbiOa62lKYSaaqvtVe3sbWVU6Jxvf1F6nPfyju1hrIynM4kTmSH0LSwYiDoEIWE_FSIrGyZucb-VwulSG67vwzLkaWbeFXPJzV2q8Xbmp5VAvWaFwII586nShwnjyoUA_ydjJ8iZmPfesY1rlvP7FdFsktcpHIKtsXCP", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115300502168956080382\">Juliet Chou</a>"] },
            { photoReference: "AWCwydhojfrXGtKZKgj9Z89-_0iGVH69S9jh7faFxsiAn3bLuIjq4fqT1f-TUDK7EKTFm6PzpOAlhSUbBgsZVohcjMwDeYNnjbJXFwOYjInHvGODYOygzAksvhPvcQdS-_1iy2PuYKUo5GINDbixiNUQB2hK9HiUB5T7iZUP4PeYYuVfFl2fdvOY01dc55uil3ZHF3L-Ke2I2WPdhw1fE1fOOQ7yfkdmhx2iCkhGfheT4nUFXGRLB5Pjcfowycec7bI9mEsgauhqXEFmei1i59ZCACAnmb-231lEd7IPLDWl4lQGlS7bHty0Gr_CghnKb93pUylZCPNC5RCZ092ceSEB16fx-l_eVJUUkAF9SKFvYX7tZEPsOsrVgZvN0n2YzGf_Nln8eyOi4JcVUw4USXilfEkCNi8-hZnCwA3_Vj4HkxBC7jSDiJYkuusTQHfSoklM", width: 755, height: 768, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115887835503529636832\">ヴォル・デ・ワンワン</a>"] },
            { photoReference: "AWCwydjni5Yaa2UsULkIIZeGKWGXQnsidoQ2ZbSL6CSK-ZWB1ljc5_4mN52RZ8beEuiHp6txMBlVrKOg0I5uE7gRRwe_WmZMHhc73krRH-WUnRWRNF3_uEAEgVSsufxvCjSX_GfwD7gEnfoRRMZHQZ3ee1R7vZibpHvxYZuLjBfP26Bq3iQLFfIOcfe8KiEDLMtqE3ZPIYZ__VcIXi1i4YidI1eIx56KzS40nkQTfLmHmVQyeDXQMF-J2bSfCNwxHOMKNd_bEuFmFmnPM0NUTCfBGRY-k9oF2BwA2M5LVjwLAuGzujY2-GRknp6OxN_TTe8ExfOw0Of6hmf_ApQlfyo0KGiz5ufEWo8UQflBHxlIzN-IZwte-645O2j2VqTcldtrX79yunHR1jx-_AzCTYX3X-uZfuYFAdS2m5KbgFGQpbMYxxNwoxer87cLKoul4GB7", width: 2569, height: 3426, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102584549925276955017\">H</a>"] },
            { photoReference: "AWCwydhsIo3k3aL8-cBN_2_SOsYGDPENyPC8yPggy0zNLwxTAHWPXdMlUjCjbw9clybL6MDdYzZstdGJ2flirb-lEPJ_m0_VnUw1uiEjMrRPVLmhgvcnQ212ruqQifjo7uZClvzSLMQzsdkxP9cq8ftC7Eu_8Zk_La3mEo33fvPOuFTNTF2xlipON34TfYQDBTO5_nJy5mHE_D9PfGVpeoP7eRkCFkZP90cGu_XFMUHRyh3pflkq94zTm-hv2-_0Ze8_vLdFeBiKBXzImcQXdkCFv3fAgL6Og4XkZ06-aKF5Qh1OksEiuYpJbdTlRqPTPbSAPlcArMkTbP6LvSgWa2HW0jXQv6ZXJ-4_FciPjWNUunrp81ewJtYT2Sizo8s1wn6E7Ylgh9ceZyXdIGsh1Ng9ga5TDjS32jyb44ko68j_LGj6wKGezNDaFImNxE2qeA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104354322451291956029\">許方瑜</a>"] }
        ],
        summary: "롯카테이 삿포로 본점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["버터샌드·디저트", "평점 4.3", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "버터샌드·디저트", items: [{ name: "대표 메뉴", price: "¥700~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 5:30; 화요일: 오전 10:00 ~ 오후 5:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.rokkatei.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7699630425760249374", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%AF%EC%B9%B4%ED%85%8C%EC%9D%B4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EB%B3%B8%EC%A0%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "기타카로 삿포로 본관": {
        photos: ["/images/sapporo/info/restaurants/kitakaro-sapporo-honkan.jpg"],
        placeId: "ChIJq6qePZwpC18RtS5FF_v5uMA",
        placePhotos: [
            { photoReference: "AWCwydgqYNCPjMgguD5QALB_Ru_iYoYlnFJOUrXo6apb-NowlTRNw0VPIQ_j111IelWpdqOdgEnyhS74TE453nIsakVxJva5i5TV_sU0d0uPXHT7QaFV9gu7VS0tS_zIcgePeWuIPgmXJQxKC0zRA6UavTPrPvAW2V9PRU1-2BxCjkgUVScC-W10swdqmJhzmD7fNiikP0tEBpwr4chVJdMskXmPoYS5CEfnG6FWgtn0Uxzn2Q9Bhd4Sm4VzTfpzsMGBVbKSClpRbnGCQ3btGyhwfyyCZM86P_mPweu04FJfBDcUiK3S-MonwrXBp1dQgq6WNAQZKJtPsVAy0QPUuqLtTNBjDY4btditcAdYs61H_JpLMpLYwkp3b-U_a19QJzjlAgv_2cj1UpUmD-8mYT-kGQOwFaFsAv_sddZp4aVr3yVrMxb5", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105208937136668811810\">manul 마늘</a>"] },
            { photoReference: "AWCwydiHQ6VfwoR-QtoMH2Q5D-T9icIVMUGz4415j2cQp43ilY-GfWfwWQ43L3gzlWKaZMN7lYrSzkqw2ebGXWtMgtQZ0nrig1FjA8rb3FuqzUn2HAoYMgsSd7Qz03szE-W1_7R33twcG9T__p_lN_NJ1A9AZYng4LmwHANX4ANg4QKSNh6ORC7mvRrGIuxFmH0P0NkbgInbRkbSPs5AhtEJa3LjfhWFatUcuTfjavI2md6Nvgahe9oSn-THOkdozyPYXtoZRsfA2PaMcB8myFpGDqQ2eZPewekuPPZ1hdlFIeyKAdNlysQfVdxqdgKezL07pvPr9Nftdm-cwkJroycWLojXTz4GUJ0uDkSGeDMm0dr8iciXnOzKTsIhntYuMOMtZcEgmleRJnDIvsiycqFWl-tCdYKDNx_NT562-pT94iEwuL8atu97YxXhaXUFF1xG", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110059462887142467888\">ares chang</a>"] },
            { photoReference: "AWCwydjnpllk4_BJBBUtx8Kt9FToJ1-y865za9uh9OKqiGPWtqqAU1SYjpqJGYkU1ODZtzjRDmC0C8M2DslUXJB34Rei59wvzVNN93vyb8JXkBRMPu7YF6WR2GRC-p96E8dS7fOr-627jO_z-ThB5kcoWMgo-a4CQHHSfO1NhmcqSMGpJIkgZkG2-5vM_dVhg5kV51a8CFiK2WfmSNkZsqqC7-ckNDBPyNDGLR9kEdAnAHPhFhM5ZgmwO6WWtmuwP3fehznujFF5lZvhovp9-gO1jyRBuGhUR0dFZJtt_DVRVXVLAmOUHXQGRVKVoNEtAU02rCRYbJ-ThgIH_z66MTYL0zV7zzdemI2NwDHfXlV-VBWcfvIikTtR41Y5gwEW1QgFD0uKf4EkJj_hi3HC9JLlNcdPp76f2dOkaQnFEKn9uO7m_p-CTiZ1rALVh6tj5A", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107514968352910913953\">呂蒙</a>"] },
            { photoReference: "AWCwydjShgWVwrcEqUfRZIXieJdAjusCnvmxV1YVlB7XrtF_MVECjx7IjiiNnBhTnPwRofDC6543c3mQvb65t0Y2a8jNLQwkTPK8z-aLZ-b8c0syvFudIFkPVC1ghwME8pFY0KRi0w_f7PyPWSPas8QWAMYml8xZN4Zja6fHvnHuekVLfYjpk2fZmABtNWSkdJnFQyPFjptKULegqJNNVm3XoChP9j42C3k2lo2PsOOK7FLqeC-OXourPspM3AZa-yx8j6J_wGzVGogAR9Grswylij9WotudtSq1fgQTp6LM9cw_EmegssHQTR86uapqCqZxN9aVOakp-yKF7TELZTVAvrNXzUQKTWb5eDAGQUrE9NgKX57Qrd0v-EIXZwHwNqowzRAJrAkNYSpeLwp_A_yjY4p2oQUmJJa8MH0pjxEg6N7_f9Zuz_OxoOK9100v_407", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111008353616073149806\">パスタライ助</a>"] },
            { photoReference: "AWCwydhegRj_0bkgx5LDU27KZK8JIkY_OSLD_yUd6lKAAUYmBFtu9b4vSxtSZu1Wuit-kX7CC1G9qvbSVDYnZ5H6kreWUFBRkozf9W96TFKtcXg-x-N1nrpk41BZGY35A1tVb8HJN8is34vth66bIbcOfxhIGvMgVgntOsj-5rfNQWCjvW1Fu6YVktzu6cT_py-27D9LbcRiDX0LEMUWe8X7EAYKcJJW47YBgtOd9655sdATv8Q3vGFCZgQ_w4e0EUlupnBnwpOIoj7xHnfQQzhQW994672gE-HIpPP0D-ddWHrbTzQjcjzdxkT1oWEbe0InRd0_W-lYbH5uCES82W567SCIQ1D7DhgvI-6Muyk6X_ySj2YfeEPDSwGdwkj0J_HcrPJNhlrcIhWuheOXZdQ5a_yI0g8FA1SpX9VkqAEY6zwvgqFxGckwmh9VyqMnJksn", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110059462887142467888\">ares chang</a>"] }
        ],
        summary: "키타카로 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["슈크림·과자", "평점 4.2", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "슈크림·과자", items: [{ name: "대표 메뉴", price: "¥700~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.kitakaro.com/ext/tenpo/sapporohonkan.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13887124307819441845", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B0%ED%83%80%EC%B9%B4%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EB%B3%B8%EA%B4%80+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 밀크 빌리지": {
        photos: ["/images/sapporo/info/restaurants/sapporo-milk-village.jpg"],
        placeId: "ChIJVyLrboQpC18Ru41wd1PRWvA",
        placePhotos: [
            { photoReference: "AWCwydgW0O8lPIEp8XR1lhRpkeQbyttzI61s2KYYGWHmrGII9kMDTC8Egcu4jlFnFrkvOLhx1FCJyRAy-Kgwxn_4jwJ1s93xMqrurOSTP_BtLv_q88UL1NinAkoViMMLYFwBi6aG3wRqMjvFXWx2sHwHh2tVxExXL8FsOQZhw2pb1zw250eiJezUeTFcSHgr2H0cnxLmnKJ_p2d5dmb4sYbV7Tp1hyrkuijELgSeFqInPbpRVWANPJbSAEzkqgyIKchGYWhaSZzeveIX7xdm_Mc92nIqYcPtKok5kwAfSsayxScqReVGZEAU7zPK6BFpvmz3vqcVN14kYHkFkiqxz42cz0rzIfQTWIl6ZZZNxyEYVIkrQNzWTAav8cToC-YkP4gbWCDQJWBonW-YU4sOtkVWtQ6rx1oYMJ8KsjH_EkhOfjAnkqheprC0dfPR4JOIEA", width: 4084, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117845512658112363832\">K T</a>"] },
            { photoReference: "AWCwydhKx8_FxEU-RWJtaHtOuQS0LbCnuxyb7dsdNovzZa6M-YVEfvVg48MSHXnYJsaGI57H75e60AMyK6zhgOFx0BURrbj0eoL5GHHOYyttOskGy0xD0P2y_DK6lQEvQrZUIXn8jHaFQaA0wueQeiiAXPlfasEZt1xezcJRrpSxqkz7784LSLdGtv0iG0TW6xWSr9NbY15rOoYqo1HT6vD6ylGwjl6cLGQ4ZrGqLyYu4_w39VlnCBkKdgZgS5l-aUYgvaUD1v8m4cJke2Q0anSQAieUIn2j9F1MPw4LBRmRd999fH-8P-1jx7Z7ZFRDj_klzFau1h_cnNmMOmFABr82V-5F0uMQcdkifS2i3m7LV-95hqKFul0LQQIg6BNgdk7Djo2LN7X8p0ZK4KuH8SBoQqnL612SrxpbOP4liLHa6TzFwcQpysHXfab7Cu-x7cbp", width: 3024, height: 3693, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117845512658112363832\">K T</a>"] },
            { photoReference: "AWCwydgs68nueZl6lL23aKkdNDqxEo2g3tNukEhw-IO9OUHLSinYmFzJL0_S1KwdtZpIcFQTvA19BU8NPOdEQyjI58FdyCq5cFBTN4A9wRtZMkSAoCr34M30J5uEKDfxlSy_sYX_IWEZlyGgcn0ikpRerluqNRjF8E8Mn_ozK7Jz0EXt-ONNLeCV1EF-PZSwUh8HSRleC7_97bljMaRLelB_gEd19qUPzQ3zQ13NTgbgForC9klh_hkqui2of5vOpLxcCp8RoHCQKUt-vQSV-NMg_rlGwOp4qB2-B7MfiKMdFKCadlZwMN2shP7M9M_9PPi6WcJL3XxSvjxHHV_SJyAqQMEbu9KK8kB05NcQYCk1uZoOQv4JdcM7g9bAD1Ofkqx9GortnG-Vb2yq8fkB-2ZBihPq2l6itCMDWc92VX66SPFZHrBkNWgJTMnLw9nfut2M", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109264735443669563299\">GourmetQuest</a>"] },
            { photoReference: "AWCwydhX8DN2Dx7dCERsggZBJfT2Z8nrgYOOKu4MhLW0pXCL9JtDDr273tpBd2aVKPjgzxmjZRkOp1PaWYVFhUQqPoaxiaP0_Q_x99c7U7JsVeLX5GxBgRu3KcrB4s4FuK6nzpQ0Cw1Ywx0c2-bWmInJrDkHS7CaTSad4okT1hu71nAt8EwFSMHBAsIq3TI3c5kafdE67nLRVUsX-t0CKlPAm5PGk143DVQDNsI2RJygZUORd3n8JI3JtNPCvFepPsk28meqdKyi3Sl85RFoHWPAB7-FS8_wWmi9YEfAG2apgHxW6eeJ_gBtIGmb_VzQkL0JvZ6h4KmllgsDBIH6KCZA5n-inkSxoi4Eiqplqx-_mUL_DPUTmXSq6tsf5Cyk0wstDzJfKBNaNfynHNIvU3H2oCT0u0yuW7jboy8ez8fNXsztrGDADt1G-Ae8uzgq0QRp", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112343501672944535569\">Yuki</a>"] },
            { photoReference: "AWCwydj4OTW02bIcBpvIOnqEfnbMg5VapiR86qwXMYuGXSNYzQme1Ky4zcD2e_rPGSlFiVn-086TYjGVkf9DaK6YFet5CtA-f2FAs3-m_6URGHuiA8papk4plsh3RVyhUfx4tGOiaQOVm6pWiMYwdZOpTnDC7xC-9skIr3p20u4idwRKljbKSRPxqxkSC3CPg0BrF0f9VzYiSxKk9Jvw098KzyHcn7eblohPVvnt3vkHie2iI2f924qjywYAPX-z9BPh1mM3QivBBdsI_qWTm1P8uzJE-K_C_E323pvjRAd1ZmGI8KvEPk5XI95xR9U9eOz_xkwrqpT51vfDEAMaiHT9WSVjZxGNRX0xbs0ZDmKLqgydo_GByrW4eE2FFnxolDZaI_kmQQOLnOmwG4U4X1XZAVFUy85cCFkQeaJvL_FSkmIhEOQcPHn2LRqD2tzGbW7o", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113270304021838473581\">アッサムミルクティー</a>"] }
        ],
        summary: "Familymart Village Sapporo Shop 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["아이스크림", "평점 5", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "아이스크림", items: [{ name: "대표 메뉴", price: "¥1,000~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://store.family.co.jp/points/80366", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5697398992746811025", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%EB%B0%80%ED%81%AC+%EB%B9%8C%EB%A6%AC%EC%A7%80+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "키노토야 베이크 폴타운": {
        photos: ["/images/sapporo/info/restaurants/kinotoya-bake-pole-town-sapporo.jpg"],
        placeId: "ChIJWXy-b4MpC18RYjv5k1O5U-E",
        placePhotos: [
            { photoReference: "AWCwydjXnkFrcyFAGDcqho4SYwDs_rGJJdgPPG6krzSIMm_SKnmo5QynjKhyl5KNVKb9t9PXX9gv2kufi7UOp22nsTnedrKjz0LgWwCaBS2iMJGFL4kGzoklavUjZPJS5VFTKFBbB8daP2o7W3MPYUekzQyfTdRFXyHBDPQ97_3V5Mclpavc8ckiHCAYK7JlvoH8ju_Bw6_TaMfIAcxn2waOwXC3-YrIf9Ebn_4oEDGNKyZk9TLchG9ry_AnW2icW7bC7zlSgeEwpYrt1PVTTQZf3aYHYbCF1LFMx1ZETaREfhsXHaPPIbR8L5vC6z1AjLoYD1BeTq_JBaKdXXDosO821sdY59FRTmKeT-PjXXg9KfuUk4PQ1qc74miDNmxNdII2TNFnzBcrprygW4y9ub50DbyDLCOl35K8992H0KOvhIrnIoa0", width: 1126, height: 750, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106614886293517246414\">KINOTOYA BAKE ポールタウン店</a>"] },
            { photoReference: "AWCwydih-2bOWpkFaEG-Ttlkym1pSWrxILfWTzxi7TQPtgnRR1bqCcTuIAtulwwRDsiNI67g-6n42uUBPC0DbwdVMSM5s-BxrHX_1vtoxrYPuTNmw31uB57HreZgOSaH_WYhjLzwxAwAfXjXQCHHNPbRWBQ48Z-p_mTDXjGDGRNRbT1toqoLM3XlPwtrK2FVjQBcXojQ47zxJObcooAgK-xHV9ijB_EN_uQ_Fvt23TinWsWCfNYvhALhxGiN7a4FBTLrav7xi4fJ9ueqphB4Wdqq8soGGSTahVyPRpa65UA4I9Q0U39vGEjYUA7as248TbaejDOLScZFDBxM4PLvdYri7CjTKN0joNnbhftS4RHtWGHv1YEBcQ18qEqPoj_WJqP7weiRYp09Qkg6dtr8CpZLSF5wtVSeHUzoEf2qqE-wwzM", width: 1000, height: 1000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106614886293517246414\">KINOTOYA BAKE ポールタウン店</a>"] },
            { photoReference: "AWCwydi_GAG2s-m0riP3LNEguGY1lCPGenHyLE41WRzDPcOhevGsbtHr734qhbvK7tvSqnH3kt6ATZaGRgOUCcx1-GfprmycBXaOOJOeK7up87yztzu4XjwfMfDbdjrMArgBLiSMPoBQPbALtSq4XvXMX7njVfKKN6pNjFnxLb18S4VFcqkkYqqj-3kE5HurrdZOkogyE7KU7NSU4wqNv91NwLMspnjDoJLxVrKsOQPdaOQfq3UztCp-MjmlsbaIJhPc98cJKDgm3DkIgXkREV1OZl7USY8zigfgrXOhyNJUL8ljy39xGCiidwu7XlvsqUg5yb7y1Bp5UqD7UcziZKW8g_J5X6nhccG9fyuAYCPrUuFg7EGLFkdFF79q4aWfN1hQSBD1UES07GQalG2VMVBO79ZViuKwTZy554n_zIAkZV9XwrF2YZKq27sabcIz9Q", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112620976702489068608\">Winston Lai</a>"] },
            { photoReference: "AWCwydijwrw93YTdeluxjUg8FGMzkzsiYhZNCYtm156V2uyje9sL-oIhOSyfE7to7Dqoho8osrexkDzGbbq0xEWAkQP0T4cuUvAOBZesvs5Xn_CF-RSLTAT84HILVyCB-nqozYT3u7aeZdjUyvGAKi5dtUoEXrc_OygPy_5czhXtzb_Mu4NSUMVCdWPJ02vsrZfPQVyX2-MiDbOg86yfbyGr3kZfh2OISimONkCvZpzMGvhQk2jbcjSvbImLvF8iatTSOAkvyOjpkppWMiur4wYOIQUHjVmYX_YhlEH3tIr6FpPHqEhj6E5Jt0qsFITZn0TGPQQBO_Z2yllHGsY1eQc4JlOvLHt8N9vky3SP576IEYW_ko-9-QmPfAjwADfk-79MLkEQdWTGCii2u_4so64a6no0gHSVcx3nj9AmynENPaNcwQuvB57_mW7QJ5kSupJC", width: 1207, height: 1608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110621309288472267277\">Beh Kheng Aik</a>"] },
            { photoReference: "AWCwydgC_aMlzmnSRrwX7wyGmL6QO1tCxH9GvK0BWEzi5wvanRSPVAlQpsvBOPr1ZsNjvHFistFcc550-2LWj6rO0iIhN97MjtR0PHmev7xtZJFNCYKc4mExwIbUSZI3I6IuMllJRkbIf6BuMsyoah-qqf_nXY80xF61f7MLk5mr1eUNu7KVtzRCM0rzzykmzyMsnOuons9_r_MG23Lemw4FRvHBS3-l2HjfrywiIKeKEle4jmxGCQRrjHlxtAOQNWnbNMSDIK0IOx0RNDphc0tzy9tQpHp6wF8hDwNs6B9QZms8ooAFFBe2WKdNLAwvmYZw-LY_YQ8UUtfZy1F3h-MsJ-eBmUdT0aUFEQzYWzzJbtFwgXXl7IDBwMLSHW9zRugwpHMy0ql_xGKeTAYGNH-H4wusNVXv8HWA4RfPfvjwkxIe3f1DDlaM7_xnksE_nTCU", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116784142927271927850\">hadiza</a>"] }
        ],
        summary: "키노토야 베이크 폴타운점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["치즈타르트", "평점 4.6", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "치즈타르트", items: [{ name: "대표 메뉴", price: "¥500~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.kinotoya.com/shop_list/poultown/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16236524850216778594", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A4%EB%85%B8%ED%86%A0%EC%95%BC+%EB%B2%A0%EC%9D%B4%ED%81%AC+%ED%8F%B4%ED%83%80%EC%9A%B4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미쿠니 삿포로": {
        photos: ["/images/sapporo/info/restaurants/mikuni-sapporo.jpg"],
        placeId: "ChIJi4jaWWogdV8R6hoLAel92ps",
        placePhotos: [
            { photoReference: "AWCwydgeyAl15TxOHrQ_tED6Uqz03XIGtOWrUrmDPE-anfvkJY6erE3MjwNbUOztl8TjwXegZEM0Lfvm-sKmZncvL4WDfwp5mHjibtvRxN12WG7sdUM3ZjbWuwisPTjMLv2KHE880H6xsHJAsiOWJbtx0Ndm_oaB4kByNspFRsnBCokDn39wpZ3LaaK7iqHi82WDYtdUe3_BPRTr1Tmj706o6Ki_xo1Xx7Ixv0AjitTraQWS72745GZje6cxLNkXXeiGcP17qNsFWoqQUwprGnnWZpGCE-_eNl8gPEfsds6LSqo_UvuB8H2FK-dHgJ4DZMh7HmxdwJwvT3oRUYgSAot2FwHhrkN9yccJ7wwlaLFKYQp0d3RBSpyL13IuiO_6cPRvXEU5xcdHTpGjFKB_9PgNKEuohMZvvOGcbXkw6SIX6_IoKfRFXmE7zX2Kbf88ErQm", width: 3005, height: 2417, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102207489349007291779\">フレンチレストラン「ミクニ サッポロ」</a>"] },
            { photoReference: "AWCwydjdh7H1ZS04mLMCOw0iVELeA8mWOodm0nmGaFC4BnC6-FK0u2x3VGGVsLX_IrbHrl4tKuPzyiOz_SWIvONsFGWdPOCSVTPev4jC8v520UjbxNdFklX8hnwVIwyO0MOQ707Vuzt7JyQYCIXGrdH1o3pYfrc-FPY3qx8od9RwddjFDXKKbaOuKVaQChbyyzRcAEPEMJT4t7lWFqOlJQjze7w-7l5JYV7FOih9BUq8dqZjA552qfTatNNEbQqQY234WuaQVG-5wplaeoyBfiZgFeLiCNGE2admbEpxKSnymdFCKormjcHElxrTg18gSADt952X_c_GTQxe2MqIKxI3bzGNR2VoQI12qQde80RbCWUUbVHCgsDIc_R02P2gXIvQlQCOwc3M4nfhSRc7SICDZHpTRjNt2dViVhXdf7YebyPKQyQb2KfDjloXc7fMrbwj", width: 2756, height: 1838, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102207489349007291779\">フレンチレストラン「ミクニ サッポロ」</a>"] },
            { photoReference: "AWCwydjgz2ezvndY_B46EXLcbXDZIN23R5EjUMzzEGlYsxZ-vy1JTs-W6PzsOIVQAlsSEeFki4_7VT3dOLjd3hTF9QlFPifY-HZV-rAlEf6l81LdCJgmx_ZAu1Dzp2CLpJoyHfl5jwP6pEsX0tVN4buOJRclnTF5b66XSLmSC2qPKRsPiCOv7s8qVFh0G_mCWRRHsyrhqVWwqN2UvhTV8H7_OkWRMFg-OOKKj_tnkUWua_uZOh8tnwZXVO51ORZ_PblwaChqfrrJWioNe8Y2RcOztRenXuHTozfCJpTQNKn_Z19YxrHWvyfq77rw7N6vVVhPA2oLZIk6Pu-ZizGt08-YaOkL_bgK4lWvJobOZk8tJBoBG-h1sYX_D-gi46qRENPUnFTxnlRKrnpcTnI1Bpe2_KrAvCgd3H5GQgryO32K7UxWfLCWMF1R3WsrP0c45nm_", width: 4149, height: 4470, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113906048417758102933\">Lifevacationist</a>"] },
            { photoReference: "AWCwydh_JpsfyyoKzfjzupSu8KwXhZ8bHXYqYMJ4N8lRF4N8rJD385pfr5N_q9bGHsogzJnWvPy4N_bLCUB-hJj-hQii8STCOHeFLs9pmV8KBPJqndzMNg63d9lB5SawiXl_jA3oR7GUTBZd4SzqXO1YoAg93-hUtudQafGnhCMvf0pnLpj5ir6SN9B_LG6aLEE-mvKOYgkBaSmmbmJGD5bfyQ0AF2lC9VdnM5ezpKVKuEOqdoj2Zh8r-OohypAsosn7x4cHo1jwwl8ePbXNq9uYkDXBbyvbd43Pj0bWmckPfOOknY41tcmq_30-hLbZ3_Fam3lDtMglS1GtQLA_ZFq4Nk3TRNSTDhLYDWjzgc5jNL6pKNReEcpV9M1UZ1z7jlUINOEVs7OdoV0JyRRMdqTBtrMEX8LQxmVEnPBNO2zOsqDl92PE_NUchI-Cjk-_K9Q1", width: 4283, height: 4298, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113906048417758102933\">Lifevacationist</a>"] },
            { photoReference: "AWCwydgjIRbv3xUBOOxsa5QSFmrukfdspa1gC7RV4hySIpp2PN-IXy_Qz5VqIlsylmLl34NMc9kl8ymq-o4mBcspRzjR1DPeOina8CVN-LfS0FIH_vBULg08mtd4Fs8ScnZ6V9vtbjnUkJSApNTDPlbjO944XDPvsjAS5f8D4r10FTaT4jVuSgP9F7kS7C_1lY_Saq3P7UG4HLk1ALokGJb5z4m6XgLfM8-mg5K0PSwGWrqJGZiBVkUFy0ywBFtSMTuUu6306EFJQRPQmXhm733NQtXTj__HNCC_ZieU_TCg3_0JXCmi7V1lj6uP2NN2aHTjXTWQpIfF6yIrIG0K7kkNOQhy03qQ5fb0w6bnKSy5-d0W9A-dgz0YdNrgapqZTfPo_pasnMP6N_ABmxSMYzyeT3moQYwo9Q0FcuLHDHd-XkGQ9JgmRQ47mnoc3Vbg7Kjh", width: 3248, height: 2165, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102207489349007291779\">フレンチレストラン「ミクニ サッポロ」</a>"] }
        ],
        summary: "홋카이도의 신선한 제철 식재료를 품격 있는 코스로 즐기는 프리미엄 일식 레스토랑.",
        updatedAt: "2026-07-13",
        highlights: ["최상급 홋카이도 식재료 사용", "정갈하고 고급스러운 가이세키 스타일"],
        tips: ["스테라플레이스 내 위치해 쇼핑 후 방문하기 편리해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "홋카이도 식재료 코스", items: [{ name: "대표 메뉴", price: "¥10,000~25,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:00, 오후 5:30~9:30; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.jrhotels.co.jp/tower/restaurant/mikuni/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11230427060500110058", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%BF%A0%EB%8B%88+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "프렌치 레스토랑 방케": {
        photos: ["/images/sapporo/info/restaurants/french-restaurant-banquet-sapporo.jpg"],
        placeId: "ChIJJVNNk-wpC18RDXgocMZEVLg",
        placePhotos: [
            { photoReference: "AWCwydif1j_HEzqS7pbThoumbvI9JKSmPTESv-ID0jVMdso56yDmKeKvZb7FFTnhd3k1_TMpLj4DWF_eNa1415G4nVHWdIBTvr79uR7IBx3YF-DjMasOVpLVbrsvULaugMmjxwRvBxyYUask9J2NFTY2mG5w5XK-xhkiRnqOvDTRdhZoBd-nf1kZiAClveMyraPZ13SX6BjPkSvPQGPq2lB8547nk1sp_p9UUFh2-Opne5PzDHEvXQu_8hFUplZb8m3ZYF_sPvDGNjOzsXtDdmrgUiCZt5tJOaX7XzxMXLqVZ-tld2GfjQFv8XFeaW9uCFB05g8xUQGM7EEQtf8XekxzJfgcPRI7WPy7Xi7yfJnhhGyI5wdNl3nohDvmPaZu6uUBuysS5tUP8zdC1JRftbOtMdx9KonxCUhKyuH9pSQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106400490945114222424\">フレンチレストラン バンケット</a>"] },
            { photoReference: "AWCwydjwIgfFH6Rlx7LJjbjnbX_ge_S1MCwmYGS5hy-8LuvPyiOyXnbuVh_qG8tHxISyf1MXVe3dfnyN-BbbXL8Yq4i-glXqgXyTlTOS7_5hNPHzxi8BV5OwFboM1jXEbz24_2igIPZv3HMwANrLqK8dGXhEJWpidaD--lnZzSOYDcoWJUf7dQrvWI7pNke_Xm6GGVZEt_PcSE4uCaWX58u7n7Pz7FP9AuGsMTa3X7aT1vbaKFiD0RgGevI-IGe4PKkEHR6tnFAX9m0FPYNRNADLl73GknTX95MkXTQWLyulBXN34xhR2xsxWPTlknKVR6vcT-ad5DAwOP5gJ3qyyRE05TzW7K092asp_dk8F-3Iqpq03N2vk_rC-Ed6mjGaxlzc3POaIcyt24laAdESoUb8Wn1rdMzkd4wn5F85XAQoOCM", width: 1936, height: 1296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106400490945114222424\">フレンチレストラン バンケット</a>"] },
            { photoReference: "AWCwydg5RLhWhmmpXHzURFI-TcFGC2lGHZcB-KTzp2GKAbVtA6ivXqUEKcR5-I2nEYeIuoRRyu5SE6NN7xM1sCJfkJByF1LTt6ox36rLDvqCjdZIP1xg2T8Lealda2eMGQQZcQ6OHlcpDySceEteWkE6azE_7CCBwx2PyPsdLTbjg2fzbSiml2Kt1P3TigFK-FxO0srfcfDjETr25Ds-46CjkdPaebIXj5F-fgkOypwpJuiLLEZGTNg2LshpoMGMKr1cJ7UeJJUXxZ7a1Pba_a3nPzJ5DuUU0DlvQzy533DXtjINYk0X4wrK0un8609kkLmtZt95rFKoBV0SfhFHsqAMBodbzSjp_hz4YjbA5hYP4zntQtdoZXsJfCRdyHhFlpacPYu-FuCXNQ6PhyMjO5-FQGqdvzBZydKIKT8Lu-EYea8oG7BXP4OloWVN8NUyq0l5", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108122116694540396771\">Ihua Lee</a>"] },
            { photoReference: "AWCwydg00r9eYpjG68iaQ64bkx-rYebksiUbk7tjHGIlfEF3ElgUWPDmKEm2rgs0QPDgGCe0gTxMPMBSIOK3QrmGMgq8nu50lDuBQ8EujrHgmcKhlx7YvwSV59v15rPmB2YmmTnEKLW2_DOvbZYV3SmEr767IXkASGW-74_2cQRPxCB2DrUHI8RXNt2Cg0bwH8eCePiXuDqu0ltcofg3wLUZwOYjOYfrPuXr_drUbrOX4-6zymGU6R34DCdNlyxjlw1vzQmulnizPxEhyU_kmwKET97GFN_IqJ3yc4zoFi4OZ0wFW55tY3jJV2AAJKrjVa5GpKSEf3iBIKhXtRzzKctMEnD4dcZRh7Wd3eFXaroO5MCjiB-KALoDz9OWKLNDE-mda6HmK1C71uzjfGpvZeLHiZlZBZmtsN8nehrjA0zUgjlzeqrbSRosovjPPsidZXu6", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109958800285315079138\">Marvin Hsu</a>"] },
            { photoReference: "AWCwydiSwV65T4yKygJlNHJiku6RNh6Cuf6PhzJN8tleCawRR7PV9TZEPVhn3XcaL_wrVkjxmS-ljhiVlsappNn35TfHT_oVeafb881HTJht5OcL3EkkB0FA86beLu1FxNNjeM1hI9_1G6TSSxpHEVOz-Kg7XI277NvWSLVDV1y4fwq9TmMiMK4Dgjrtsimrlcih-wvnOKOC66q00BP_pSQ8ASECR24dZzddOVuSZhbT5_ffv6xWQ1evc_znxp8YBl6Dh4NZtB4X1-qEMAyAh6jWwHyV1fQ1QtpX9nkAw-HWY3auuEpqlZliH0Z2t-jPQsaKNMHE4l8RrpnyNiKSwSkCjuRIfLCoOObUN-aT6Fw5LiPhupsrqjzZr41Yr3MRGiZWiOiJIYYoCXqMhw0up5JuB1rAgKRn5Pv_pQURavxpWrKh55MIFWCUb4UWoDVo9A", width: 3537, height: 4331, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108275266034882780653\">mamama</a>"] }
        ],
        summary: "아카렌가 테라스에서 즐기는 로맨틱하고 세련된 프랑스 코스 요리.",
        updatedAt: "2026-07-13",
        highlights: ["분위기 있는 프렌치 코스 요리", "아카렌가 테라스의 멋진 전망"],
        tips: ["특별한 기념일이나 데이트 코스로 강력 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "코스 요리", items: [{ name: "대표 메뉴", price: "¥8,000~20,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:00; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.la-brique.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=864479889962773109", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EB%A0%8C%EC%B9%98+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%B0%A9%EC%BC%80+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "팜 투 테이블 테라": {
        photos: ["/images/sapporo/info/restaurants/farm-to-table-terra-sapporo.jpg"],
        placeId: "ChIJL3iJDygqC18RwmnglGSDZb8",
        placePhotos: [
            { photoReference: "AWCwydhj8hlSROtmAiXTeBSw9q2LhYTll05x_uHunoLE1kJeEG3yj54-6SNWp7OJch7uImq9DZJnzSHOC2JiHYiNr4Vl570bKq4Wl0rhjjTjYX67kC9hfH9VsdTqo6gZubC0essuPxZtEBVfImrf_0Y-80vtcJcuTlkwd0o_UUYdL7aOtfkbWqblXGqvl2rfJcIGZcNB6Z5myAy8pdRsAERxeDVlksO4iJIniavD3TrzN3-u-xeL1umUza5QLqlpFJLiF2bjz34-riPsL6_vh0qY8R1S_sc2woJ7S7m7TRAi6bUiiLLTFzP-TtnslAtWCJ2znqE_nQAp22tCw74PUfgnD70EcwKgOdHhVIbloNgw5mvlBXhhyQD2niWkNAhaEvgieazdR5ZXHdZ01en6YizZZ0-bRfS6qZoC2-4JcyMEpVwNzA", width: 1024, height: 685, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102755633721732116579\">Farm to Table TERRA presented by snow peak URBAN OUTDOOR</a>"] },
            { photoReference: "AWCwydh6O-a7umm6ISLmSr_D67JEiZtGhnpkOyQYVYgRdPktv_pvsqhrkbyIIJdCpbUUTdyE2N6o7qSBYZ0WoknN2cf3skY9Ju-k0Uw-4SCmlW-KL-XW9tQa9LSAHxcU3zxreqmRlLElsCa-k_5epyPmgmu8T2FmORilDsHs6ZGvZoblIqWoYcFZdOsyjWy7aHm-eHVYff80Ru0rwU81WEa4MEElwA-XcXv4lJNz-zV1CQmqkBVgHrKh-6SLkeJS0mzwo2yE18ETQjCBQquzSgLRITfb4zZbrvBjFL_PMOf7SAB8G8nDBaRqpyy8e6dSKol9lGp9gOXrZdCmnQXt3v1FFmIpM9FMvgd5x_0-45YukUVLj9SJ6LhPqHKvhPw-PMGCtgY3TrzkDyBXQLG0IkZ33bstRW2BEbx-002CL8xBE-hA8VY2_kYj0BMFRGPHacon", width: 4800, height: 3796, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101565627373659075551\">Ki Hun Kim</a>"] },
            { photoReference: "AWCwydjuAMDd2YsG5FrjDj2rnf5iuMPOFpd4DrQJG3HgwIO11Jj81wKvdju1xouP-W0s8DW1jgdD0y4zqk3NTLDNS-4y5RgkJkcxmHt2RaCcOn9UWSWsYVi9Ahr0KdKsbjOqPeWU9O77q_b7UM6kKJCCwYyTYykmt8l-A2dFv41LqOFiIKy_qUFr6Yy1ZrTHyreaGCNKwe8_Wv6U0I4_XxI9wQgDX2jqYLfX8T6QXYwJq6sBwdlTKbtfY_ew45VJRRERhPYoRzd_6AK6ZYLIPCu0L0Cgf38LnDu18wRBQiaXOpplh6fJEq9VAh5iK9dt0rjwpljGrvMnFOaNHnkH2oKFR2cmDuKrw8EiWR8ne_04IzRL7AihC1j1qgrFyPo-5VL1bRlcdaY_Wfa4uSdcQ-7W8NxQrBo56fs1Z137717e4grIoAIT", width: 480, height: 480, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102755633721732116579\">Farm to Table TERRA presented by snow peak URBAN OUTDOOR</a>"] },
            { photoReference: "AWCwydgePzlA-AEO4_s1Vz4_slbucaEUcUy_seosgtwqCPzw0jpNmUQwqyKzP4Txt8QeEv4cNfLuJe5kUEmNSKHSf5hLk4ZhsQBHx1nmF15fPPL1Oty9L0SKA41_5AnpNZ58BpyliZdQ2dnlVNzpeWWpptYGjodiraa8KPMUEODOmXa0cIiWiCu2sAL-360b3vdXx6nEiKJYA1_Lm3rr_zqp2yjnLm1TedyaNtmiOtlsC35g3FAWxIo3ZtwQVBsVaEMCPaLxdwfbT7prrR3tkURYQwA_YWE6mtG55SPkvwWcP6YXwhxpqPdVkopi29xSinwWZhBCKdT-UZZqBFyjPKWEVCaoQn6vdoRhTRM24R1SuCzOi-XeYUfczIb6yI0-0HDyZfVwmUWKDafUcLNz39C4VZqxKKXoFvB0cJ2H6jMnI9VqTqU9lzJeBADT8kv9W5SY", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117582111780340221498\">Husain Al-Mohssen</a>"] },
            { photoReference: "AWCwydiWQZZn-miNk7ih3I_WzOqmLoxSZc_0axNFI_UeGnDkO-rSH338vEOlj3gT2Rwr1dgk-SZH5CJfDMPjXiPxJrR-kAxqYzx7nDOKQ4ZyuLqTEJ1qMlLGxA8PMlboIBheAD7TXLpCYTR89gO4_Z7bwEN7xxSxbHjfLfJgQTia5sMUEq6LZKaRBzk1coQwCg7ntUwV8u9uqkUOPGNmd9kQfvX4_XmLcnF5z-lgn9oIJ3dMn0W3RnaOvsSoTPGzt5wQGHxpxu1T9ExLJ8W9I1Cv9AGXvZqkHbzzFjS-jAtD_X_aeaUDlA_1Py73A4965d_spDAIX38XH1cC5h9GU4OQfba7jbjunmpVULAQkbij-aQPQJPVWhsG3GNiDWjOhfIZmri8s9oMSvttZ34t0w2bNNcW3h9FQCL5e3QASZr1X8NgW8xU2fFSDAHNmxmw3e7-", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101565627373659075551\">Ki Hun Kim</a>"] }
        ],
        summary: "홋카이도 농장의 신선함을 식탁으로 그대로 옮겨온 건강하고 담백한 맛.",
        updatedAt: "2026-07-13",
        highlights: ["산지 직송 홋카이도 식재료", "건강을 생각한 신선한 메뉴 구성"],
        tips: ["식재료 본연의 깔끔한 맛을 선호하는 분들께 딱이에요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "홋카이도 식재료", items: [{ name: "대표 메뉴", price: "¥3,000~8,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:00, 오후 6:00~10:00; 화요일: 오전 11:30 ~ 오후 2:00, 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sapporo-terra.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13791573901909715394", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%9C+%ED%88%AC+%ED%85%8C%EC%9D%B4%EB%B8%94+%ED%85%8C%EB%9D%BC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 징기스칸 본점": {
        photos: ["/images/sapporo/info/restaurants/sapporo-genghis-khan-honten.jpg"],
        placeId: "ChIJhwg_94UpC18RF0j8TEmLd_o",
        placePhotos: [
            { photoReference: "AWCwydj7Q1sLWyms5YLxFt9SItXa7MX5jd3aAwtR4KmhAJE9u3Nh_R2ZNTDsNYY6iPEfRcgNwR4FHhm0BQGcCX4rmycxzKSVywd9eF_at0XFUuIKjmyRF1N9pLKKrU0bKXXyKSl1LfDgxNJXwucDFm4qgGv5bNOdhYgs2LsQiWqNXeOa__zQ_IJTRdiR0fhluKJcH6VEPLYUW4FJPuXwq6bxyTEZ92eO8eZw1XDmqa-ksdksg280z5GLpI0LBw34SXjRCwd3_9LcRpQl7DkHm7ZHFWgMtEq3vPyxatbbm3w89S_-gLJ7gt1cKyb6dHNe8HKtunrCw7xdcQX6hj0CgHWR5d0H4UUhaUxOqLEpDk9CwLdKGS0s_IVr9zDOKYSu8YS8WBmpunf9NurRAD3G_tH3HlBTz6-zpcWNrGLKokaNdVBt3QPnFTbTFyyfUcBAIkCc", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106324927489605783868\">さっぽろジンギスカン本店</a>"] },
            { photoReference: "AWCwydiBOeSmHEg-nF148P8XrFHBVKBX_hflaEvWRfMXC7bcM_DCyy3Q62pDVhSGYRo-s2FDC2paryqjTBuDwxK8yv4BrUqN4yKkaE8IRnMhGJ-UYa9HyrZGegRJXZpIXUI6i20560rLTLwYgCCMMAHm9Ui56aWdduMIMfX_ipG1cV4bBTfeebSdWUGU9bat7j2VYu_Q1sF0ftDDwhcfikuTZyaDQm2wCU_Jz9psd89iQdCckCm1luYHdrDoczSB43bkBECviDY3BRSogms0ROr2DywOf1L7SAWpMd8DPVwWnwzBtN3HybHj45mJXBY6QcYRQrJmrHUB_Y8dTY5jwUmcNkG0HEgtMHfOVY6oiv4DjmtZJJsyqFP5d5o4SK3mFYCSPlqCCEpDtI1GTR4JMKfraNxva-2Y9XfLZ23tVNtTU_RaIYuQi4eQHoGFmKdlqw", width: 940, height: 645, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106324927489605783868\">さっぽろジンギスカン本店</a>"] },
            { photoReference: "AWCwydjqhuLRxT9e87XFnuqQGrE-cYFdJ-lm0dk_YxO7bzRWxdUL1HCq_uvV_AsiggGONqBh5qB20B-yyufuTjOnJYJFHlp9Dx3qd70Jmu2vVX1DO2W_FmvnUdLP6C4weysVVzp4Z7Dbyy-8sEHIcEtESfBCQhY1rIm1-RlcoiuyavKmpRV_S_nqEMnzyvDkBbsn90SfjOEEEnbppE0uyfopPJuFYWIPUI590oIBOt6njTsoywbQt8W7q6knZa0Sx4-DJJIUpejrJf2mOhzv3UEWTN8tgHkY_GhEEKtkAcqQS-TCPsVTKbndJVAaFKVRoJ4OkZJMT1l8gqyy5TqIcnnwYqTVQpy7i10QLWb3CQyN_I0DLA7DGtaZAIL7T3KWjV8ov9_2-wk-xDkdI96Y6rL6RkR6599X0EQdINIpBbHYegmD3d9LLcRpkFYqBxila8i9", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103101355490070282293\">シンバりおん</a>"] },
            { photoReference: "AWCwydh_dkrpZWc9eSIRVK1nwyi1klnopS-R1Zpb3QrY2SPIHwGuFotNet1Vi1v0a_7Ng2ihvgka0H2ZboqHu4XWdckbilT5sfvwkCk7LXUeQX-pJ6JOIqbgrQTwMT7dmajK14PKAgltnJPQpIc-n3nUEqnkXnBXekDem9U-g_Dgtk_YVyw0zSjkTK6kho4BqQUMcaFUuTIJGTxzyfHVAZmb-1cvzoV1GOGpFmbObeZLQxpuQD8yAUX4e7-w3noycSTEL_elugblRpkSzGd2IEqnByd9dQ_R2lbDY-4uRwMuZhMBpsU3NNKnrO7its6yBIC5VCBcm_GB0RHyFAWGA5Z1il9ErSuzodvNZSvezqzGjbpRtfIhP3HtxB19yqXhzH5eFZqcIgmSWlwe2hWxils3RQXeH-WumtrS9oneLRR_TUcEc7ehEVm8nPALV5t1RYLN", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100134547157445087044\">Peng Wan Choo</a>"] },
            { photoReference: "AWCwydhII49avYsS2S71D2TzeCjy8f54L_EDj-cnZhaK9C_Ma83n4qldAtZ3dVjNKBUcOoNJinu8CS5u-vqj4RCTlX_5prM74Yb97Ys8GtV2V44imqcLP1Ew_EiPGwP71dMx87uKV3lvJjGdZFzizj9OngvYp24wlZmnjJ_8rW32oymZRfSygajed_VVePhN0CMlEuNzfQMvDEbO7u5docmG3RTvw6n2AuHsQliN90x2eXi_kUfwQBoS8wXp8xTrHoD0OWi70Jd3TL_QGmUJKdqJiTZkZLGkwhR6UQ4eX4p8WqfJWkv3Iz0w5E6aY7ovlD8eVbSB1uFuamC0-dDVWHUiSPRzZiejNvc26fa7q8ZdGA3P4mZl3B3JNnPBJzngnXUKfXsc-ETEiHDEayT2N6Xp1nkVRb0_MUQ8CsebTMjZwlGndVnf_9zFE5AHawS-P4Ln", width: 2300, height: 1725, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101613009396753261907\">ALFRED PHOTO FOUNDATION</a>"] }
        ],
        summary: "삿포로 징기스칸 본점 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["양고기 구이", "평점 4", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "양고기 구이", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~10:00; 화요일: 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sapporo-jingisukan.gorp.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18048047178651027479", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%A7%95%EA%B8%B0%EC%8A%A4%EC%B9%B8+%EB%B3%B8%EC%A0%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "토리마츠": {
        photos: ["/images/sapporo/info/restaurants/torimatsu-sapporo.jpg"],
        placeId: "ChIJAa-d6mG1woARm99qeKcqFfE",
        placePhotos: [
            { photoReference: "AWCwydii--GSz5IbQMJ751Cs6D9SvRs-kOHjNqTgBHjEo7832ptxF4SjbJci11hhDtF4NG6pz56zugWRSBc8SASfp72ZAn0KPfWUnq2F3nxzEQoLBcJuPNMkVJusjn40ZgZYhMrcnK_Lu8V_0GbbKlY2m21CvRiwRh8MtCtRtgp9MByV0RLBXghZSWEZ5d-aIiG50cqsiQFcEy_UC604sfGkDsRWIZMXR5lO3uNPb6t9mtw2p9YFqU646l84R8yGZrTe7dWhhgTnK35NRpfDP9JDjFsnx6k5Vu1K-YDVldkNx0OLSDGKUXrQkcoqVYYuqCQ1Zup37gx2yy5f6YT8tIjdfYmhbqMW3ZT4ykZ1qkLhEYb-FWJaFc-lNDIdFreBNTeRthUfMYXf_ksPeRTMn8o2LyAHbD8d0GT50HCjjlg3hWH7RK55dDsRL-j3G80JAQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103508805005268341811\">Jung Lee</a>"] },
            { photoReference: "AWCwydi9CWkH5xi4_RSmUYbrGFKgy64vX1bRF77FhqfHie-6fUUmvaFR-_QTLrXkmN02u743Or4ZIMleo_6uPz0OOu42b0v6CjG2Dmivwd-1wh-SjhPrYrMo2y38NhVkIa_Rwe-yT8tBgQtRwXAoYU2Qr_CqfNeVCYnc-cOjW878PP_UenHAUh76x-q7XpIRT9hjXiGffq0W_ucNV0NEzJqV-XoiR7LnTq7vHEvfBQifFL8cVVc25SG0G7mGTztVdgJxSfpsrhwz0mB0820Qj6P1MUJgYIz4nPI60FAGzLdvfsTdiBJQPIrIzTDqa64cbl2KUoVGq0Yqm-aItXTQ6jLr8x4SynpfUCbOJt91_MeP3Bz2PVRFOgdX-V762VlKm7BHmwn-lx9WeET-6_jy5hqDQ_GhbJtwD3N1HIob9Nu0TX9O8ox3DkcJGrNcD1a_tWg6", width: 1283, height: 1098, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103357247346556803249\">T M</a>"] },
            { photoReference: "AWCwydhK3KkQ_dxPeu2CE2tatsDF_ehy0qqBTCr8SioXQCYvD6lPW78Yoa8-P7P9JsiN4ba2CwsbyKFYh0Wz1aUcqeMTKL_uwyjF2FDSgqNIASGzwr1eJgIIijDksyhlgs1b7By8UxuaC0ggVZVdij02yExiQXaU7CSQHXFFRFEKXhqx3ZvqxMeMlOI8j0hXoPLRviI24OVzreg9KtknA0Puy4b-gXhd-hkbOVNxsqRajKlb5J7bRffHFLNF2xqBEyhRcQunew02Su8I-vJrHwym8mDIOZxwRI7n_Whcn1_GbvH2zmdax94UNVG3rQXXRLGeu95L9RM0cdJwfm0HcyfieyS2EVYmE9fz-Cs1qBMN0bMX3v_BsMXTR8A3UocRdbKqtU4fD69KGovCQNJWxcC5-m-mCleLoMpQAnWFQ4DVFgsvQ5NaDQQYECaMQsxmF8jA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112924311757606934120\">Shaun Liu</a>"] },
            { photoReference: "AWCwydhLmCZm8H8uE-Llleg3-XeVABqw23CFXG6o4JqTg5x_AoaFjlshisOXJq_c-HFb_oeY2hp53akh-2YEmOTJcyl8OhFJKMRPkvcoBkbqTNKSN-pctTf8xl681z5mGDyaJNw5ep-SbbN6p4rf_UJYM8qpG2SfFlAugBLHscB9brHRpNkBTq2eGXOS5QhHmoE1u3EKtzKSoRIll_qKNUyTUDsqxK7jD1uzz6mwNco_FM08YEzuMra_wisovqv6qoHTTTaCJNWb9k91kfUnz-qDmWsImRBeaynYPAcECZvZmfB3l7zyvR73IlSsJlajWHKoCa7yH31tgvnpbJ6hbLpWUoXo-LTigSAuPjGXFirnwZmxHsDPtcOOfl218BYjmb8K-Fh0YqjhdzmsWfV2vyk2WPrg-yW-tutwCCXy97sF2di8PjjPRDH-t1LvoHAj5w", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112924311757606934120\">Shaun Liu</a>"] },
            { photoReference: "AWCwydhW6duvU9_tHsadg-3R2SkcANIt3-9W5sHN6nL5SVVl_f1F2AFob9XiF2rd51J0y-zKWSeGG1xFtYg6Ta2lQxLNNvemSTvX48FZS5ZclFgmSureo8x31Ry6DcNKBkyEswQo8c3c_K2EGg7urkFfD6VLv4dd3k2ePS7TcZG9r8U8dlsJSSMADtLliHVnAAHTvVZPZ1h9UUIzsoWPngNMK37eKv32MV_9w3CcGwNPhy_RAi1XCNvj7n6hxIO3_0YZvxkiJh2Jwur8S9SDlaJY2EdeiIH6l2vRaMwaE6nV_F1UlDZmjtplTjZ1anzvXfdrmcVEeg4BY2WZ0tKFXuY5KaxH5bfX1mQI7DgMXS_EgL_EE2lvrtQp1JCfyHp1CGfMOMfKdtWqwUxL5QyEurbUCyhaBkFftjBuCxf1Se9Ac0ySao-YrEmAZzTdDSS5tScX", width: 2831, height: 3775, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113835736281715608809\">Angry Sushi</a>"] }
        ],
        summary: "토리이치 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["닭꼬치·이자카야", "평점 4.9", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "닭꼬치·이자카야", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://toriichi-sapporo.com/?utm_source=google&utm_medium=meo", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17201026048115938417", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%A0%EB%A6%AC%EB%A7%88%EC%B8%A0+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 라멘 하루카": {
        photos: ["/images/sapporo/info/restaurants/sapporo-ramen-haruka.jpg"],
        placeId: "ChIJ07FgJIQpC18RYkRNPfQgdvw",
        placePhotos: [
            { photoReference: "AWCwydgfKDgMlG7BmPWRzUdsB8INOOQLS7zRKwjaFjloMp6SMVvgMu0oZ8ugqcxNttrSewY5ERpQ8QC7NZUQlVn9fj0jFatVM1cJLEh3upa9zTCheG7502MaLxTG-zh-rEsGiL0j32Fr166oFeHUxJSXjCE15a_i1oT1naDRrP_VBQ4DblpfeGhn113thOusN-mNtSmJGOl8NVimCGcmlXrKAECRXjz8bUYmKmn6zJ5tpwth6lhcXPBwdjy44wC3YAHYzxSSP4UqycgND3MGasCAr6SkjrE8HLbERjrV-H6a5JW2CSP9Dequiy2S7SZ_wHLB6N5FEj-W2FLewjbyOL6XbEOXkkcn7nChtETePgZQFzHNM-mwCsxXhsrgS6s15LosvLFEY3TsLXR1YSeplVEm-lNGIStwUu2wTx6noEKjV_qARCPk", width: 3120, height: 4160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111982254395762195705\">札幌ラーメン悠‐はるか‐ Sapporo Ramen Haruka</a>"] },
            { photoReference: "AWCwydilQ3WvjZ8GsdkHbnNk6GVwofS4YudiUWkMXbpZEKx5BuJ5cUVa35sY8hFtaBRUigC6GBchS7eqRbAoFDM85C1TJu7_HkDMwtsibkr4Ye_-xa60g8j3SL82TELS_OMb7Yefy6RVvcN7gVzaxfCF7weXe4Ms7Dsva4Au2HvrXRVnoM-irjbkg8bhnZ9L3WzkKquIPDpaN5N_OVs0cw7VGZWb7XEYDfhQYvFByK71Nw5DiYmN1tguOS55wqfb0gxQiJaovtANvb6By3g7-O7uU3Ttq0Kr458tFHAahuRuY9t7NwVrv9b50PNRo6JIaUZtwoF8FQwf-IoQFky3Puq8xxA52GkelTB11tjGpOf90dwOXrp9wu-B7UiNmxthFpAeyUkiPvFtVJpsSfOodH1T7lV1PjO4ac4kNroCjiEyd9Srcg", width: 921, height: 518, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111982254395762195705\">札幌ラーメン悠‐はるか‐ Sapporo Ramen Haruka</a>"] },
            { photoReference: "AWCwydi2lF6syMjTkNpbmYzgWxurBXXIJpbOmlcKG23ffiWN8pBtLDvVdRB2M5VmDrgFBM3Sz7TWo61nj-2ylVUdP7CWkCsLIHr59u8MOfyQd--x6b5Jil331oeTkMYBnxdA3yAtstVTgy5zGcAkXIc7YX65-iHd5BlN2JjwTotm4LowZ7eL-2NZiuFRFLqI0dY3j2kbw2MYfRxr6w0YtdQ1nSibDE-uhm8SkmfRTrWVzb457k5eUzMFitvqUgJpl8UGOfDyv8hyIPsSrJh6I7CXONnv935hafOrVynIdZKqXv2sqoGqRqrRZ8MWRcCE5udW7BnMpBAQnEeXvSnLluYCadDdSLtuTgTBe54v_-y13VsBd9VxLUj2iOTl_D5uxyAFxj7cGqFQQUomkyERK2SyR5WOgsY01Rl-RfueYJmrKYOuN-C11cpiucNUx3Zh7-8j", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111933350878238485428\">ANDERS Leung</a>"] },
            { photoReference: "AWCwydgWAIvb5OSbXOoEasm3y9psIE83SumOQkWnwVvUyTJAartmtyGYNwFkdVvIr3QKUZi6RZ33xsQaeiBGLH2BcVgrPuuEhFnRRNHXkzoqfr46WQ70TyXdY-M0XxtyYsxmFYjyiBt_3EvFYqTzVC5TsSb6HHKeNqR_U-NmEiBHvfe8KseRRVvu_OHlPOJynXmRTQFSw32AbykRrHYx2LsxuSvTq3XWeslpy3dMZtuLdKDxohehM-gku6rJOH5THn42OKBJVKs5-bHlMSER6gSE1CQx8uCUy8IzssJiyMSUfI0l_3w1CeRlJ71xG61qPhdKpumIcneY40jYAH57Bw-6eB8OxWDix_nhJeH4nY7Hi5FbL4N_MM4azZng3dn0RBndq_qwGciXHIrpwSZ1WnA30mGzeX1ZzXfdY-CFYw-35vILUN724HOowebdj4RviQ0E", width: 3824, height: 2714, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107904512133639951509\">HSIN-HUNG CHEN</a>"] },
            { photoReference: "AWCwydgjMjNvIMokoEt1lpw1_Bm_5AMNqvUO6Cn3jyoF-28i7dY0ehWg1PThJjnmZ-lXT0suU7fJq0kSJS_3HiOZCk2M9dBKgOLqGGC-vkrX0yyP7fkGhFYuJj_lKIl3_-c_oAYS1mfkvSF4ddkNiJKRNCz0K9tOYrfBkWY6K-lYPeCFKeReQAJ1feX877mJT8fkwIhLoJrv7W4e8uCJl50gmFAMe3AoS9EvbRrziE5jFLYc3b2FGIjcQivhHYIR-5kaQs5-eMsvUOF0Ur6dDqvX2TwYEbs17HaqYU6qDJPoy8hThoXQjDpDwhEs0PkUYGAkYrqCxMlWrV15MrtOwHFQ4wv0ut2zNfJq81wzlIyNH8s71wQTxDwhxQtPEAsedebhH1PQb_aPL2kzXJKc3Lfx8ZozlYtfLHLv5Ia9uTPKXQtUMVJgtfqoDF1Uo_35RTJf", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118011870105715070310\">Pineapple</a>"] }
        ],
        summary: "라멘 하루카 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["삿포로 미소 라멘", "평점 4.8", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "삿포로 미소 라멘", items: [{ name: "대표 메뉴", price: "¥900~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~11:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.ramenharuka.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18191763978182280290", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%EB%9D%BC%EB%A9%98+%ED%95%98%EB%A3%A8%EC%B9%B4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
