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
    "Chic 한국요리 식구 Korean Restaurant": {
        photos: [],
        placeId: "ChIJ64QYtsEpC18R0Kkon3SmcZw",
        placePhotos: [
            { photoReference: "AWCwydjFNMdCxwhA9PCmEOywk-uqIOao29xjEAzo-_O3Ff5OD3o0NV1huGAmQNmpNFDOVmjM1aIer8SbRvI4a7hP9jEKcq4oHWYA58C1H4V5Q9KiXPG8P6qywQpqSi7mzABrynpJpgb5sPxPvoJwdvkIl3KIsiQL0c1_e7d0vz6NHc7-ztdzN5XvnsibIo48qG0m5-m5VtbvxTd8mi2XmMWi7Relv6yQiELtC8Ere_Y2zpG39f055epQgEoXZjiIniCTybApvYgh3tBGHmGVTevytTCyGefGfRydKiUKUMkMlxLlqi3hG2F48hE37zTFNCIGMOdnGRQQYDLrSMtUK0taLVkoCwpxYXkvJ8hEkIjs37V2GQ7S9-xgB-RiEL-Xwt6Jrin-2GebUA7blICBMpj49IR6aUqcSP2vFBDRqoaFJxY4fQF_dTtnzHI115QSpldh", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107160487720869464454\">韓国料理シック(sikgu) 한국요리 식구</a>"] },
            { photoReference: "AWCwydjWBVcp11X4IgkjMCP1_s5mN2_REu1VwLkEmdZIiHoDnBOWTP6hADf3K21IhDhOt2xeXss-qkKjWj7iTxoiwgHTaL04yRE9QVjTpYX01d7wN8ZJvWG29GhsQo6bunCIFf80gybdKQVzdo_oZ96AWMJKQRpWdg-a_BlGPFkFcUKuo0uYi5v6YzR_j726A8Jc3jBj_DpCitf9oDbpYrSsrLS7j3GiJg8NLexEBzlPvA9JesdOBCBnieWGOqP2Jzwwr0ncD8t18H9bxlsXEHB6DOs9RTWHwOq8bnOWPF3m7-R-q_K9397ruUG5x-VgMfC6yL_QPrvguQ_BDJyVOsZ4dOZf-CiAzXn6QmjBQB2dqC-e_CqEQB_NK_5CZd3E3nXebt8t08nsstTCpuxK9CfessIKLdn3J5uveaw5FnNMgr4Q7aa-1weeX9_sW_Z2XD6Y", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107160487720869464454\">韓国料理シック(sikgu) 한국요리 식구</a>"] },
            { photoReference: "AWCwydisPUGa2RvZeJvjb5LyB1ZeiCuCSJySvhbFOUSJ1tOzkLcaL_9AWB38Pyv99tFnp9krkbywgvTs-aHwaoabhFqSz8DFOGEESOIpko-Nr71-8jWh4gZJeCGUoWs1XJ_yhPnrqCYFAcRK-aoV2ldLe2fEqhrVk50_LGXG7LwDl-swYUnQYa2_FSMjKZQWTRRqQ1TWE5cXJ0eJHb7G20wZuzU8sd4OJfVIUCOcATaZqp04zE2Y8TP1iAiR9tReOYWesCaNkFgenGSIfzaFRu0Dn3ngKyeAjIIHaLPaMXgbOID8Fk3Ky3_BXt7Xv7-lAfh7YDFxV5MluGVzLMxSTl0OmBFZQRtWXzWpSeLD3ALDuNfwDi8kD-vAlgQFYtKc_KvCzp9OmBihc5Mls-LrxXzGvgHzkZQa5KpUin1DrZjQq3SH5gUinO8fe-7Zk7UL5IgB", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107160487720869464454\">韓国料理シック(sikgu) 한국요리 식구</a>"] },
            { photoReference: "AWCwydi4QNC5UWTGpsQ5mHAYxAs3cy7gX5ihscgd4Uphi01gmT0ZORd1k3OZj73O61O89rF4hCsSJ9_l003yU7kClDWiEPXTRYaQq8hw6qVcsXURCjnNXIgOgrepJ65QutDLMAo8hXNUoKBs0V_pWxEepnSqBPnUhAOzDk5apvpGIj5WN6DkRRPjjVc1DDgMyUeECQj19eg5dOdNlnWZJK0_-8Hs3oRW3-oyg8sXAjNIpJnKwP7-jratx_VeGsm_Ir3WN5qsNZKhlRQ-fyNXqySXhnh6aYWk5D6b3Mqm-LZ-GoxwNyprjKLlEKGFkvJVtOx1FkMGLS1HhcrmWDBjx4leZShSBJJTlzZ4gDK_MTua4QZt116tP7RbW8FQfRDTr4_dIDAJPWUY4l5hGTkNVJCoMbx2rWe8eg8vgowM0kR7MFtBJZc2IlnR8G4HmlJGMWk7", width: 1824, height: 1824, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107160487720869464454\">韓国料理シック(sikgu) 한국요리 식구</a>"] },
            { photoReference: "AWCwydiUognuBIPc5FKQQ6GAVyIdEy3mCgjuBCY1S-RYlzFXI1O0_ppoUtU5kGSVQEdexr6EuW9xUnyLRl0AdeKbqHA45_EP32F_1AnRt_p3YMcfSOan2TO8yo1TOWsZSPWsJ7T25_JLrU9J3bu6oXm2jz-TrFQ3c-IgtdObph6b2qTkLzBXobG65KpNjG8vb_7b4TBPeEBqQYq4tC8Nx5d41Tpf__Z-IhUHQ0K7BD22NYYQUSDlYTu95bD2pHlCuJqYGxWVQ0KCJHJKZC-1TmDgjxE32Gj6hCehuVdvrNZSr5CPzPqULMqgO735v1jvxxyGSA2hnv-wtfFMACwP5ZBHFiOTeDROIvc0x0UNvNvPjXxO-TevzmlbylRRfGO1-qXbaerOBNjmwPCgFc-ZJGsqpyJkcaQ-mIot-mVqXmwhhFH1GSK5jA0bvZcj69XMiw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117415592493328716656\">이소정</a>"] }
        ],
        summary: "높은 평점과 친절한 서비스가 특징인 한국 식당",
        updatedAt: "2026-08-16",
        highlights: ["맛있는 파김치", "맛있는 삼겹살"],
        tips: ["한국어 소통 가능"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "삼겹살", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 6:00 ~ 오전 12:00; 화요일: 오후 6:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/sikgu_korea?igsh=MWJraHRjemZtd2s4OQ==", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11272974362101721552", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Chic+%ED%95%9C%EA%B5%AD%EC%9A%94%EB%A6%AC+%EC%8B%9D%EA%B5%AC+Korean+Restaurant+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "토토리": {
        photos: [],
        placeId: "ChIJ7VU9a48pC18RUR7swySGiHU",
        placePhotos: [
            { photoReference: "AWCwydjEShZSX5Al-F40KhPIDsXm8ItVEpLALw0hfjGEPjTYJfi6dvUfbLhuF1gOwEdPz_viH42jrXS5jdg1sQS04uug4JRdBSoNG6pe9VHM1W8MGgI1d21KBzQ8G8dhwkal4pLhrDP9L04kiHBLAXhNmLcATpbTgYG-CBFWP4PnxGPbnWeyQ5K6w8G0qBCKCHVitSoWm9Ll0-rp4uM5SOsTBiLXu6hxBZUGhg7d_0C8ziL0bH7hHbh3iyHehTaiJ5fcBkutfTXKAk9kDryxOxirmJC5o4vvThmyecy_hoUkcSy2_c2o3aqU1dxDa1ZJPCiSTBydHwG3aa_ggVvAxkFHAtF016MxdUYprQk31LllPskFokQfGVK1A85aSa5kFRqe1nNXy-3zh08A_x2hm3G_Scn82H3kSYXSuWEKPPtsbytHHeCs5F0hD99B4rayQ6HP", width: 1536, height: 1533, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107869564055694461582\">ジャッキー社長</a>"] },
            { photoReference: "AWCwydjcb5VWBNSWZnJC66GhOWC_H3OpHAUUMHOvpk7YDKc2pjxWDJ5wH_-bHqTYZw7NCwV0tk-WY3hQjiFLXmKirUjRUoWgMZRH2BDPn5ckJup-3TqIQ1hoXsyqmFyKV2nJXbfik8yUJ3WDDxNiJu3gGspVnKv6kQEDTsYjgZ5vQAnxlLpajAPDPdHUblbTxWDucXc53gE3a_rgzQJIaj0dK9M1o3KMDhL5h4bJNIAHZlRONMDrL-kbu43_Fcvr4JaeKeZNg0z9blLrOsV64IjFSwJTMUUz9sVsMi9wBNN8gRDGUnoMAdDERAg2oUYm7EkkqkAKVFR6QSA1tkkSnSdYbOtWWZZl62F4mo5yUtXkI4ZfGhJaHaUNXKq8IDEzuc70oxNRK6Ng9GoGU4crrZBzcQdpqKwLA5lBSWxktCXXjtFBSPom", width: 1868, height: 1051, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112180721847756060888\">磨季</a>"] },
            { photoReference: "AWCwydhU6uFtdTqpLCTxxzL3kbixhxoOnDyJ9J5CEexLrwMuEwFsYkA8AsOVx6wYyMeEEjojwr73uqy5Y9lkgtw-VX00qAWDBshi8w7P0Gu-Nm0z4flky31sT2ejNECijREI25Y4VqEJUIcWjoHZ7GcZ4wSJ38RrIdscnqo7Y_it48-L5uMgB-bLiwlz_UckLmEx1bEJqsLRx2aQ7zsXw7YOLFXtBLIq5kKQrz8pZpd_SP_4Jm0mNC59tkY7AJ7_GofUa5km3ew7hU0dc_Bn9naopReotR2Ck_KoOFO-1GsyNZwJ8V9SwZt0hFNFNXqTGxG59IXnGPKhPL-8hAhIcA_InlqZ9X-ILD_-MNhGJLyqhMarKDRq9VUInb_dLBaa46vDAl_02GjJDVeE6mAHehzcs1Xegwy4rCl9tgNgcm33y8ZI2oG0VML7U_HzIpVuNpbR", width: 1920, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105397184191430411679\">nyam</a>"] },
            { photoReference: "AWCwydiZXpF4oLCbN1TQMKjCmleaZsr-VFkQ6MVSVLys_ercPEmkU0YXOPdPaSsegnIJwXNHIGQyfT5r9As0f_PUUG_jUs46YZC_ooNEeqN4NrhEAo46uateu7meOUTtX10FmcXbsDxc966-q2CuXeBngZX_VZ0dip90F0RCjC8-hlQxhIrfZV7agQIKG-WXK6I2ty4AXk8lBECER7tLC9-DGEWmB3jtF1iwhszWvTFKec4cF5SzDpb2TYup07eKUhdMxSxfTY0zg9QRzalFkykoBSKPvi654_UQTzw2jAnKaPB8-UF6gm50UbSb3WLudUM55zRiG1eZdqAKOLb1_WdEMTCxlmecZJrdUYKhKHyQudU0O3TAgquMNlWWZfZOyOx7GJupXRzxSw_9arTtVpXd-lXWyD2MKXURnXbXCtGTkejEtGyRHQVAmevOmce1X2N7", width: 3452, height: 3021, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108106039303893439305\">Fivestar DX (Kevin1Q6Q)</a>"] },
            { photoReference: "AWCwydhVvbjzE4ypgI8UrEWx1hyQ2HdUbHgaprY7BLzovZPH2g0h3zc0YMIVKvXDIq01_HDFWG9seueQ9YX47j6RMWmPWuvLCW53FvPgPN821H136vd9Mypw6ZpvyT7Cz8NOoi4yr5tWf_U6AnyXqT31ckjKSRXyKLwPaEujea6LfefaqzlXBen0ATuPdWPbyCouEysJMFQDbKsCPytSr7PDyjeyeELEwNB1xIRlPXJjkWAEcUXSrI2a4VJpJvT0-rLwxNK0GJJRH7S-Lnuer-a0epVx4I1HRv4bAjXYpCMSEk2PDSOXpYcADlVhjlazhjF8RIR7WBrZyE7Gj-2iT5vmdjHjbO4qyKegNOrSnQdLF845kOXH6kmiajXZnygqlGskdLMgaPHvnBvYRaoORYf71-szaDV_XWt2e5gVEjUjc9dAKHRfA2GhgryCgoDBBHtV", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118149824228656309302\">クリス栗村</a>"] }
        ],
        summary: "메뉴가 풍부하고 맛이 무난한 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 메뉴 구성", "풍부한 메뉴 선택지"],
        tips: ["메뉴가 다양하니 취향에 맞게 선택하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "다양한 한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00 ~ 오전 12:00; 화요일: 오후 12:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://yakiniku-totori.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8469166591734193745", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%A0%ED%86%A0%EB%A6%AC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "한국 요리 이자카야 – 대박키친": {
        photos: [],
        placeId: "ChIJ4ahFrh4pC18R3NJfahyko_g",
        placePhotos: [
            { photoReference: "AWCwydiZdRQFuXmrVtMqaVHJBkqNK8zGuHVegRbycULs2MwYcwy7oUrBXLbIlZyVZSWQv8HkEmkcaxbDaw4_K7SFA3Poq-ayS7eNZfytQfDkoS2Rhy3-CeB9aLPg-vlF0FjQdO0EE5EwU9lnCQs1ihhCar9zpOCvPBO7Ur9QdtoM-nPQVp1k7xBUdSHfx3Vh4NfqjdyEC6wdVc4dNDe0H6jXksZJtVDuA-6q6EK-zoQKN-X2ZVRRKujqJiC1xO8-xctHrrBhuCsfKcDs6h2UEkIUeB2Jm4V1-z_wgehM2gCxELbWPLArky32Rdwk9P2PWe9yQ40PJ6qDoJ0iQsy01sx_KvALt_XYHIGN7YEznnbN_8yvSizFRd6I5zLwDIAUSZT_OX9_Sa2QSy2FPvK756UaJzovJwPbLBv4FHlgbf9Basw7J0b6", width: 1536, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101526207328474265215\">デバクキッチン</a>"] },
            { photoReference: "AWCwydhr8kBkXkaeoSWxAepcMVxRCAn3Vx5tIYSnL4Fhez0__giBMU_CC6bHyaEz0kXzzv3Vv07bTzJoJ6JX4lXuvxv9RCQ4M7yWj5u7g_qqOzByjg7p87hyGctX-QubBv2dlo9QOardutue-FNmaxwyKNX4eLKePVTkCBSqgkrHA8Pv9PJXC04TM2UNFJ_C1k-5nO_0JIxr4bZ7QrHNjbxqK1MI_G6Mopz1Q4uIQroJRVU4IWij0mj7RgaBsr1M3yUdAVsxFeI0DUD0UnSGMM0qqjUebOyKMWNudcP6zztRmFcNPBoT76yIxpYaCtDFSskpSe7G4THgAfhxhNiKRmZDt-9OwjOrUnbxDGwVZlx-YCg_GbupDdm2mEQia_sosBShIyvgYUzwcufDhLxDnXiJ2MpIHVacPeabff5-78_DwI3Maz9PPoSoRqXCMxOdEkGp", width: 3662, height: 2566, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101526207328474265215\">デバクキッチン</a>"] },
            { photoReference: "AWCwydiyaZzetMf_uKrptvwhohcrP3V3vSCCDwc3Emj8ry6A3h5-8faBIHpWPdYcR4tCJuKrFnqc3IsyfLtMGpTQcjWisvuW4qg7qJM6NjhDfKhKxf7SDZSrLk6zateGvPukN5NM1DQmURRPTZCIPk5yXWjTsfTq2AEXcS5vya-GX_Drm2wf6TSsVm4E-XnwVws5xn8OfIAPuleVO1acU7Usd4h83PDY38SgXupr243Y-hUYELZj1hx17F_mIrSnxoRNkILW2oM-wm1cze1EEKQGCpY1qAUyuyMdG6RhoUD_3zM9x_yMs4tLhKlLURBFlDt4WplXWxsSuQo20W7qFlKEtzHOvyTbw0xEiy_Z9cNeYdoP0Gpae6Tj4AeRajNfHXQfIkUNsUklAcnhvgY1B7npqE7YRnDHb3VMePocL8OmBOx1g7oZ-jK-CxVSavC6Zg", width: 1317, height: 1317, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101526207328474265215\">デバクキッチン</a>"] },
            { photoReference: "AWCwydgDPxx90CwXgznjkbba3e_u5wuy9tQ5_BXItbYjDO2ZrOuGZ_-rmpfemBsQ_smkjjKLhpkBSOKd698djw67iWMePhbElqABiAgXkUWFjYXa4FzfTkPzI60SA_EpKT64ONtzanPxWEWQjdNaaZN2kaw8RYeBhvbSjyMQFleXS39l71fL5ck_AyMcI_aKIzg-40oT6h3XX2Vg-A9LGDRqLaFXWP3A4gkCPzRpIWQyIekgyTqJapigqLBsqfN3KdoRpU3SDxXdfMGfWGAc7bzVt5C1ZyFmez9r2C5O6mzLVforC8Ti8HxCcQkDq1TSEliPjlzjSpwzsUP400t_MWtbTJlpjfLM10eMv3OxiQZ1qIXubxc8uYK2Z2APSQDt1LHOjrUpSYhIOrKpVX0Ja2xbalbspVR7XaLQMv88x8yW1_F3_fzY4eCpUn0iESo1NWWz", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111050836695398686255\">MS CATLOVE</a>"] },
            { photoReference: "AWCwydhDQXXtFGjfmfrnoWBgfggWG7RKh6O1vWv5BpgB5-THcedd3DR_5Rxgl29xoOPK0L2uwzZPnl15zezneIi29N5i1tfAY1dyfwVDVAxs_7ZNBmjm9X7YSEf7nE5ZEMR3eBm1xwlmd5QzHoqSistdFh_u0Pp9jE87HXeWrNh6rcMwuVvP0ixraxVSSQCx1XDiRovs6QrfJRRUYztxrv4pjAbEOAoEJs0U6ry4uf_l85Ul0ipfs-rteaGEG38CrNdxiIQrB5MTefK682x1STD3cg13B2w0hjVdI5RD8h_nU_jRVnpFUxrFT54KqIXjZD-xpBIR0VJm8Uu67kCbV8DLYwln1123_waqL0K7SblHZA9Vleqb6UAETdYwekCLf_q3btPkO3Re2a-PMpWxqmI_K5wiB-Gt_471niemw5Cc11Ckfa7bLZSXtdjSdjx1VBwn", width: 2362, height: 2362, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101526207328474265215\">デバクキッチン</a>"] }
        ],
        summary: "매콤한 닭갈비가 인기 있는 곳",
        updatedAt: "2026-08-16",
        highlights: ["금연 식당", "가족 외식 적합"],
        tips: ["닭갈비를 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "닭갈비", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 2:00~10:00; 화요일: 오후 2:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17916344184560669404", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%9C%EA%B5%AD+%EC%9A%94%EB%A6%AC+%EC%9D%B4%EC%9E%90%EC%B9%B4%EC%95%BC+%E2%80%93+%EB%8C%80%EB%B0%95%ED%82%A4%EC%B9%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "만나 식당": {
        photos: [],
        placeId: "ChIJq7WxaaIpC18Rxxy4Cb4y8as",
        placePhotos: [
            { photoReference: "AWCwydiEQ0ve80gGSL2Q3y1mEo2lycGOS3h8DCmvv95Cci3D8dM2srIPoNxzuZhtb27dKzlcwXMKeOArAcEmDfrQiRIRjPkxmqDFibkyHPd8xBo_G3o0jvqgnG8oqGiCkrdx3LI4Sbb8eCx1HZnRETl3Spn-Tq7pvZaLzy-lH91qgJsA9wkwVC_0JaMjXTdgdgsf63T3sn0xNLLHX6XVjWF2jaRD4u3dnW1TCHHMZREjHfCwzvGna-gRc3fcuLv5pShQ_mA_v7QgZffszRzbrQwIdTeF55B95NwVcrUQwl4MccIDVF6yFDzyYYkodT5F2WcAZrfJwro-gIZuxeVnOfsD3UMN-UMcJ-vCcRYocbwyIC7niCCThszmMpCerhjL9mTCRPs4yJF7D4o02WuZrK11WG0KWdLWgG0k7DfBDhDkY8T04wHcYjw8cYDNsF-7gg", width: 2200, height: 1646, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101613009396753261907\">ALFRED PHOTO FOUNDATION</a>"] },
            { photoReference: "AWCwydh9-1OGnzqwdRrNZvmSRxZnVef-AUz6bRkMYJ7_Fx65L-_Vor6KVAvYNcfvN5_x3T_N3lxlzO8fwPjT-sk-RZ39N2ueXxLW_WoFejknA4pD9tc2vCxLO9Gu3pRkmOF9vZDJ79aFzotCz8U4b01AhsFx1WPNu0xLM6vIUVx6LX3-wy7HMF7IiBZbLxXydT-vW9qEaQ4QGx-bQ77s4MUkxZunCFcObjYUqfP9QJzTneeXjMVi0_H5pCvnrTT72K4qGx_hruCIYk4lxW-VrIGifcqDFAwfZ4DLTnW7KByTXJ7Pj4EV-FSEEaFl1G4FCBlDEMlpUtSjifVWNXn2gfSajNCUJ33i_b1Ptk6q3npQucvRyQv_25at9p_1pMXUeCTyGbBoZGEkFXVoCr0uRgQ5NiV163CI1tq5ttH_3gBECIvxFA", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110850115383941660475\">2nd_choi</a>"] },
            { photoReference: "AWCwydixnWgMQT_MDSxT9vq5KRlD_36R_vSZ6SLZTkCO_M3CTXjz9FRh2WRBmOHgaf2bL9OUj2LAkkK0UcYRfkJuBitXPhMw80vRzlts8hTVUQdKraeXJIVPfe2hWw3M0Qe2islM_vmDUKXTnpYZXVnkgHx2HY9Gv7bPY0AbbHuuJ3DMCxX7c2wyslh0hwk_9e5yR5P0w3t7t0GOhc6lcqtdjeKvhi_1cTLo21jQR2rmyUKbifYS5z5VLeP50t8w7TTMB1p-o5s3d35jlC5oXtADowcgtUBPN2BU7tZ73rYwMNTRa5UMRHtcfmXEIVI0219ZYEq_0sksM64JPSgskl9oKCpSRvL1Mjolvvv07wOQLkozKbFbfSmOZkXOJxf4OTF-acAloFHNYONwNe8iJZOSuKbBqVyrzN0oxQ3FgVow9D-zyD1GmtGwS5xaZe-kMkjd", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114990420700872675752\">Kino</a>"] },
            { photoReference: "AWCwydjK-N8vTwfFtP9b19-Le9-7KRKTSSvwOluT7agUh_2uMWpGsuR2Du3G480tqSxNTqZ69Cg57bETIWRs9EboTGgvXVkP3Q_bihoiVq6yBjABeO0-a5MWjJ2ja_l29nUtffxeLZYZ8va3Gl8r6a4tHJWVLAc94dyH_ZAIYkKksSCo2leDcWnEiEXxOkHRiUkh_w0ePzuWlFgCQn9x07Tv-HpdsRCz0y9Hsd6C922S-zpKkljimLNTsi9NZdKEy-iZC4u7axNmMUzJVgSvzK-cMO7KMV9HW9yscN4uodR2nVwZU8WRJ1_UQU-DWFWpJgm9NpiWBcXgRppG-je8xoPxxbHoJAOIr9r60cPBViJrrGBWScCcShPp67Tx-_2LgjMrKSkJy7bthRvv5lIFnLq5-GjWsp4gRckynNF9-kgw7Ou6kIxhivJ1hS6a9GH_Sw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100993804695911757008\">riricuri lee</a>"] },
            { photoReference: "AWCwydjQt7ZeGIaPA4aRJV7T3FjN9B6S9wYIYx8mq6ZCeaZYcYMAOP0NgDotkqp-LujnNgoD3TM8qYcXqmHCDenoVCjxuxlpPPq5HKR_DRWRX58uBZh5s5KdXa8umMdybX11-3TjnUE-qWlch-7AR37LjflselGr13ABZLe0MIqFLIk7VHXk6cDXN93DekU2Fkgr5Q9lY0CdUplc-DuHqLjpg7EKaXnbAhC75-giTMleouPNV-9dOW9OjdIQSMeghqvS68Hy8PyQGZhBwTt3rFlgObxozX7WdQToNvtoaSJqRcSRdHTeirPiO8Duk-S-ex7RyeQuSI7ibXZqr7CWMTzpU0qWa-n5G2oS3E09OSl0rFNhaG5zDEt6GXJncBtoKeDYPZRepm1uIgQfKqdA907Azw6iu-TDdIz6zDcJeLO0E6tbeg8FPpA9j3zbTJN3A_UP", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105776867061120600328\">Anisa</a>"] }
        ],
        summary: "삼겹살이 맛있는 한국 음식 전문점",
        updatedAt: "2026-08-16",
        highlights: ["정통 한국 음식의 맛", "맛있는 삼겹살"],
        tips: ["전화로 예약 후 방문 권장"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "삼겹살", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/mannasyokudo39/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12389739841661181127", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%EB%82%98+%EC%8B%9D%EB%8B%B9+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "한국주방": {
        photos: [],
        placeId: "ChIJdWlPKj0pC18R53oj8Ll1ff4",
        placePhotos: [
            { photoReference: "AWCwydjjzpRnzRjOPygs8wj84xqzNnP1uJji46Dl5j-bNtMO8m2M_BMaREQ2_cryssHS2uAXuxALNa1A1ATBKlPzEtdMeNLHwiEdU8f3BXJnxTVlODoHchBL8qq_mGD8qzmIjGEDmRbIYbhV4v04HXjpOPyGCBHUYSNCw1tC4__cBmtBdTMLxbMadZooR5-3YPzO95_XxRj6AcxiKRKEqholYhZd8uaVk9-LEOET1jO-8LM8a3ga40YiSTb8USdtSsryGYcKeUUNlNrtr6BoFSLaA0ARElN06hJMUFigqAl7PST2WoIisdWBzZh9Rbqh5Jd0Ud8Sx3cClgqE2jle1lBDuv3yDuTGxdLI49EgIjILRzH9ExLt9wCe7kKXaa1p6CvuUTVHaPipBYsu8uSI02PAZFe2IwWCoIkFtToY4S2xAtpX_w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109806416833447791443\">sunlemio2</a>"] },
            { photoReference: "AWCwydjDv-o2RohPX_YqCdA19WmJEwteHROEjIvgtA2F2gBJFWxgCz8YfdED2LWZxmQkF4b6TAI4lVbhYfIQ3IxaLN1Ga0UMLEyyZns0NfF6yFMZ5UokxTGbmrLswMgpbVkqqFNIqjDehuT3ES4jGH2TGHYXvOINCwGMrf_mphfHED0JVekobdZ9CncCymCbkn2M-2lZxuvHZ_-WhrwE2roV4MjlXaUyhDAXqeewFseaPEPdcd_88pUwYUnBCkQoXD_pL4o1uRnHnmDfbfxaMns31yQ0ook0iSpSzaUndfw_Xo8TskNytcCotm5LS-HnYaDDU9c0v3LhZdom741ugSBXYSe96frSOHeiCYzmsDH3xAIas4qQw-7dBIhrbnoxAuVLK1PV2Me8gLjFo1yoCF5BKeRY118OqNQ-yiKbGPMFj8y8zNiN", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101429651619194795304\">nkmsyt</a>"] },
            { photoReference: "AWCwydizTv7LZzMQxyOCHM8VgThC6tL7C9vX-3gSD44Lxa7xHQdWlsRaU7Zhe56BdQFLHIn9AmP8BIzwOqS0L5aK5RY2U1YEQz__DZ7hBoWnvVTUP_sSv0nbWjR9cbEmSSQmTBrr1ZyHWP03jU7lBS9lNtu6-ZX9EsHMvOGTc-rhcqF7iWL6U89nQWWu8kY_Lp4aRAmz52aIxrYHtOb3jJTSRKd3Mkupv6aea-zDeOyhCqX5_T52QEMpvbLH1ZrQ4XGfVpX3yKryHNM3hHactXtwHNU_ClN78jM9TTvhFdQ_z9f7OGFj_4vrG3h7SwKRyjYyNYNLXH6KfjYZDoXMXTDJ9ysBjAQjH4Slw6a0YYLy-BZxRzrCgNOdOCCb1pGxfPfUeo0fjcU-HCLS8Xg2FB9tNtpjR96q7-e3xqwuUn7Vs6114bGyrqyKq84-16NopQ", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114091770507727388737\">I. KUMI</a>"] },
            { photoReference: "AWCwydgav1nsQByCbUNEgv6T4nsNIwtZUpDqw-tiJSnCJE1pel9lC1hBn-zrG6HZ1YXCSdoF_tBWLUKulhHFze2omcpkQC2iFGUQm_8_BOVAt5Mf-n-q-ZOG5cUA4z_mVOH1gPRjyB3kZAZXXQQQPBUsIDFPBjF3vyplcUIKovNB18i90_nBsWgKVMnnJLLFXsqzW7KZaNrcH0mY5VPGVptp7SPE1-fyVUKmdbXAla-b8vV7Tm7ggVu2CSw4U11Ssd7BtlS2VzJ7LicjN_duOYP5DjIewYcSxYZ-as8yquygpBkHFxR3hE5BpfX-RBYUnPLlTGOb6xfvn-qQFBXu6Ls30hw3hI-7mS5Ef1SmJWY4WWTLScdcMh7gASRB9UipsZLXNPPBsPvUEfjRBpgJQZ_B7ZXfxvzbh9PF8fD2U3po784YrRQzNHATvPnAiEpzGMKl", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112949029215631851561\">柴ゆき</a>"] },
            { photoReference: "AWCwydhyn2oi9r2q1SywQ4etZ55OkyM4JfJCQuRcp0rS0FGi_vOpIFC-AHkFjemQzRcNQtQkxf7R7iu7C8duip3yofi7veROpTGDuSSfDMTnzHWgDSJJOb_0Hh-xEnmoGqqlAXow0PPL-aImU_YRE4-AQuipbId_FEQ1uPsXsNgurZQsSxHFx4nZMvhDSpfBN9Tqa0YZM420fONVXRIrU7IcLrNK7wr6PUsPB9q6Uzp8f7cVftFFYLlI2NoXk2jzK_ck1ppSo8FdhdhnmMOP4awRX7FiTKdaoeXhr_e4jjNJfLmiunTSJT6XlDS3q77opWnn7BAaVX9Rlqnl9kV_d6eahQc2OEgHLPuphOCOB41EjQvUXUwDLOU-K69waXPfaFLmbUlgnrVokp-3FC04uI-PnqF6dhd6KHvc9wJLvwxiJyUfH7hYaedhCl6v5Xuc_7A7", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117532241737718304266\">Alghazali Soaad</a>"] }
        ],
        summary: "건강하고 부드러운 맛이 특징인 곳",
        updatedAt: "2026-08-16",
        highlights: ["현지의 맛과 유사함", "신선한 야채 사용"],
        tips: ["예약 필수"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오후 12:00~2:00, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18337942699180784359", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%E9%9F%93%E5%9B%BD%E5%8E%A8%E6%88%BF+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "전주옥": {
        photos: [],
        placeId: "ChIJc2LJIAorC18RGJj86Tu7DD0",
        placePhotos: [
            { photoReference: "AWCwydjAJJm2E6jw8IP5kD0H_0Oja3gptW2kDSjXTwPy5Hg4pX8pL-XyvqWsMKIjJ5UmHRpXWTDyDw8AoMXOXlP_4Px0MffLgPwPPyk1SYy-uKx5ClIy-ZopPi5L2Svv2ZQ9iGriZ69_Og1wlLQaF5Kvhl3w0pnw4Gfb5BI2HeFfviVtlF5kpuDni2XVf8ExKyHlHwH5axGW4eMagqw6QNJ9Kun5q0QesT5EACZoVfSpI4UjLwo6fcWacA6xct-2XZ4xmzJEkFrP56PZuzYiH-gQvvkhLa56bLMgDb5rFhmYe8gOTwYS4eSUBYyfXqqy5jMYT__4vXi_7UoW1NxERLJSSsLsAeSfOYd8kuQ2bC7yCLAfEGUjLti3vuVUHD_DyHIXQt_-bItbGxm0nXOuPq1g7B0_2IV7rPAih2yucSy_UmM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114509630286219716391\">hayasta ikefukuro</a>"] },
            { photoReference: "AWCwydgKXGsqC-qHGcJfAW1Y9IA4vkT-31HxneQT-gLCfTQIEE7lg0s_XZ9J8i_clQBi7fC9igUF9VMCmAZJl309hDYvzXlrKNyji15luazuybXm3GZx5W4K9DzKUst1j7gdmFU1_7xvoQ8YIDJh0PvALbiI947fUvhxSpXjJHnpiKXYVht6sYqNU0bx38nSVRwIbKq7C6taDTYJ26jXciVLVT5mdVvrqTBJ3PrR2wEGG4e68RTz-ZM-30vHifBsr-YISASyYPJxNdPh8NBc4e0YH3aIk-pFx09dESXdV4ZGHOp08dAbxp6xo5-CPPTgEQxxKLvCBbF59xvn2Omui0wI4rwJ7Yup9frNi_Xia9jIXQOSn8lr03Iqx99V2CVtK-GRNT1RYfd4p_ADa63GXi6dHzGb9rzmC00MP8T7pDVs15Xbm2Jh", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106144227709892958877\">오창명</a>"] },
            { photoReference: "AWCwydjUvDGIb-mQibsugnEbbeC_Nz334e8Rj6ra0xTP0wOixi_VcebK408gtJ1gFHBBflWvPQc6UyE0XgQuXfdkoYlvQCEmtirlt3iV8MyaygSAL1dEBhEOLm1vqfFzN6jXoMGJxwwRKcF_bTuEKz_PFtUQ1KIO13efN-sZkWw8pL2fvhZ6STkjKdguK8e0gx-r7dVGyHv1u0pCU596RGnRin9kOXPRYdf79VNLUwvWkmFY_eW7o81sf7a-INNaRAFbQjgLFW_RhmNQK6P7rwfyYyJyyfE12ifK9u_s4h57rHOCtNjtbrMV4fiuAlmMz6eQ8mdm-AeOGOnupZ0hoQP9yNjHJysBxrpd6VHj9mYnXtDocaD51YoR42X9jW1xP2wEFqpwpEWFY9PygopIcfWStPotw5qDPCJ9GLcHWxBnxozsTdqWwY6SBIBtymACfrZF", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114522655864095024651\">이동진</a>"] },
            { photoReference: "AWCwydgx0daJMIjxFSsHXPw2IOY_iookSKNke_ESoB6OSI2qpA9t8uW6u4LgpgTJltl9_dbRYH6gFaqWqXz7-tPmc0Aw7VJhGPtnjw_uW3xhYJwxxy7-Ka5X7jnnBRkXTKYfa2Fzou_3MHq58zSNwkAVKNmdySC88AsHrDt0-JW87zq7DzW5SlZe9_glpQHj5SNWRuWYkT_4tVQnQEauAxR9vPOuPsSoAU1Kpx9YOYldlVPKimmsIbnMGte2l9wvTZqumpHYqO3pADUpMhdIZ7eKAmznRsr3a2hfWJ94GYLpBxbKzOqTIXLnHCDohQG2aYH2PQyvHUb8HP4TWYRgFLDYTcn8CQ6Uq91V-qDJ5jNPGcBVFZ9J4sDaJNsy_7MrBpFbf35FSf-4KWktaCV9F-KU9TwtR3tYwgD33-v-1nyBjBf8zSryfxTmKhAd0mlLd94T", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105371330012827154678\">gogo suika</a>"] },
            { photoReference: "AWCwydhMOeK_pzjS1Q7z7lzSdlU-ThHaH0aCedX_VBF_Co5W-k4zjXK_che4p7AwPZCJ4iwGFTCddNTek2Alq9kuSQ8mxrynTZPzslbi-6rzEIiroEWCsoniMGifTAKotTGf4etV47NR5X_w5-oaKUqZZjlwT9IgAowrFt7vWQPW3MaepPFIXqvmsq4rQzFmlLKEOHwgLSaCpI6DLikfW-igM9J0ySwaNOUNHuefryIPDoH3pgbQVgNVJlPLIVRPvqROjI5FFmrudmO7bepcGnKCGG9E1fbcnyGU_upPp79PBVP_fFD04XsWMPI-KMtNkdxRYtQVQn96wU7SfGJrOkQlUk4YR7FMLTvVQTBx1HipIq65Z1Gt_CLRP3lmid96j6W1jpevBtM9pPvKCwT6T1Sa_85hgHygmRLYZd2B-EANUqlDyAGYpNDeeOBLWEgaPA", width: 4032, height: 1728, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111081660331607866592\">最後の晩餐はたまごかけごはん</a>"] }
        ],
        summary: "다양한 반찬과 정갈한 한식 코스 요리를 제공",
        updatedAt: "2026-08-16",
        highlights: ["한국인 사장님의 친절한 서비스", "다양하고 맛있는 밑반찬"],
        tips: ["아이용 의자와 식기 제공", "다다미 좌식 공간 완비"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한식 코스 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.zensyuya.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4399096802037241880", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%84%EC%A3%BC%EC%98%A5+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "요쇼쿠 마슈테이": {
        photos: [],
        placeId: "ChIJdRjqhncpC18RyTTwEAJV8lA",
        placePhotos: [
            { photoReference: "AWCwydj0g23EM_r7pZRbDWnOBiYpiaB2SpVOxvZdzEWL-M0C0EtTTAb9j3toANkUsCX-O_vCWoli3zQfCSp-DF74Il1sHK_NNu0_zFej63S9mSX6K7RV5XAOk68qfQ933vGllBgKwv7UlMRZ3x9H_PuJ6Q7OKh0gx_6SfxnceX4NNyb4Lu35DOCImV83HbpDG3_2xZq9vtYKgdNKdFKYpjnrHr-j6GC30jJ-Jz5KmyfgVjcK5zhqOJ0gX_TE0fkHAXKnSalsPdD3qVlnlZnzWk0K1Ec08HOSfRal_U7hoNsNmeQElt_RcI3NsFLKNn3jFuHBO7iv1STlsMQQM7ZbxZL-g4JkZixAxqbx0xTYRpR1OwDfUharSjE9WI8LeA0b0lVix7gbxOUHrY4I8xHOlUjJi9iBIKFfytemZqlvnp7HPEXgL822UsDrs-r0nWfa1adZ", width: 2450, height: 1725, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101613009396753261907\">ALFRED PHOTO FOUNDATION</a>"] },
            { photoReference: "AWCwydjC693WgR51nCw5mpzK1oFu4ALMHocSXq5Ut7iq7RHJTlZyTbKCz5IcMl36lE0AXEx__LagEZHqEPrnOvHq0gn3TBeO3lwC_9sutiEIWQn2VvhHvQsMfpE0Q_F08zXT52iA8uRyc3kQwmO0BKD_4T2PQyqjC8H3Yfj-8YpnJverrIs24Bdxy5AHYNHT92JQLoKV3TwqmEwxd_WuCDWyFVq6h21tKyDQoI2seu7bOr7HnowdMCFM6_Ralh4bbed9NuWhbjAQZOz4rTFxBlNjMpwCZgZV0xLZCPDHCgG1h72wjCPi9SWfooVbjmVcvCqAeeZTTCYV-PujLRyP3E8XsiX87VMB2wzARorT82O5Os_JppZxdNS95GJwB4id1oy9NzL_s6R742thawg2rsv4NMarxhJTHSe901-qkKWwWPPzkw", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112475265505797543855\">Keigo Kanazawa</a>"] },
            { photoReference: "AWCwydh65XWvtiL_HDqAr29k_p45AosFiyMYEJ06eJvuKZe2MzoyBvJ7s4Bn8uC-H8yLK_FbPVASZz1sqkbSpOgjtu1XlKonoWslq7DvJu2SDNbX978vp1vYMQE82Vlw5n1auIGqtRUbvNl2F3-6ekI-igmm7kwIIacGB258vMdrX5NrkzA_JrUyPDzi-TnPrAP0-3DLgRfuGiIM2-yYPiCT42oudIXp0BsQp-t-pcWlvlNry4BKAfa0f4oy2iMb0o9Xt2WBmTYz5iwrcac9K3io2RMuTAr25HSkgEWNPGsj_-dW4qnZvscVUhTBkVv8q_4uyB0mAMrSb5e9o-7sVcVzyboI7UgilPHOmdZ9Ylg0tZsVyyUPApv-57eGNbVcLYI8up95en0Lhd07bKFUmXCsWcmYtmb-67GUGPPgjyxZzgCWtuE-LgjCVyw4QFHRZFO6", width: 4284, height: 4318, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106673077005505446796\">もい</a>"] },
            { photoReference: "AWCwydhVc-un2yL4rOWOS40LwDUF9H6hGxkZfxv3XQxpahEAcBKNsXAMPq7OsmSP4vp4IE2avsxQ0QiKdOV4dCWXZL3hcd7KOH5Da2KweWVUEi2vQnD-b8Xty430i44KnN-CbuI-x3dx0-PZxKeLNFGUoSG3587kmJty_xBwWLbAXN0lKBXRig4nQueymr7-tdLE07mbvXShvCeoW0Ls2TEVG2O8N2MBXhjwQ68zxhboTVNX90tuMbd3TrxQMdj8REzcmXort0mdhiY-CNphsDqyGUOKOLNdyneJoxnEjJBBPBHpLsRIjqZtybjqtVdUJN5VfcJ7xhk_EBgeM50nx0TZpqlAiiqdeCTBSDOPDsveWqwVgUCQtlBtq7jdlhmVMq0Bq_eJpJAqktCzF7CNcZ0G2k8oPyPNWIzm0ReiaXW1utjZNv1FVpx9Ouedybse9g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110856924051233993302\">xyz xyz</a>"] },
            { photoReference: "AWCwydjQtgsrgh0t4AG_r7sdPGA4Y5bB0jIr7Ihjd-SX4GtBu6KkmeAaosMiTCyVndSwLbe2CBfitHbQ8a8y7e0J-15ZHPK8IKmyNNB4qMcTU9iJI_Zx7j2qW9trqHM9RtoRAzYc-7hzVBEoSeI8ON5EV0wglUmGoopRAkrWkkQLkatlXmlNKd5Qz8KBbMFvIuN-dZ1MpunwPafxBNwD8U-DsBKZMEh_UWWL-Zz7R5bL2JDExCvprZ5xcx_dux1Cehwg7Nh5B45FtplG6dZa_rm3C5YMnPV1JvZOiRFzR-jD9NCRG55ClJHQD0HCw3L3MG7V_BAGPEkRxvqIJsbwnDtML-dkGhsjxRZIx_NTeXrnj2b0RmA6IM21LhlWvGfHESpoIaPfpv6eexh3oYePc89DzEo2MdU4_4CpETXUiNhiva95rtLW6zKC8vApBK2pbIUO", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117740215278866062596\">Minoru Yamada</a>"] }
        ],
        summary: "푸짐한 양과 맛있는 음식을 제공하는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["푸짐한 양", "맛있는 음식"],
        tips: ["주말에는 만석일 수 있으니 주의하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 6:00~9:00; 화요일: 오후 12:00~2:00, 오후 6:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5832817934760686793", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Yoshoku+Mashu-tei+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "몰리에르": {
        photos: [],
        placeId: "ChIJ14UhkcMpC18RYEwgnUQ8T10",
        placePhotos: [
            { photoReference: "AWCwydhIk5B8vjeA-Q2Z_bO194A3_OhEcDI3ASwNsbYu8_p-XXrMl9oYdpPi5sC1pgqmr-LVQlnUgJ8gshi7VLDeK2W15_OQPFHZErTePxU3fQ2X_qi_7Xit03l3GXCBgHDfRiR4ahXU6C7dnKwhBzBY0Mhm5x9zIsXwQwb-TWBWrgj_j-KA_ms6CzUsZXfW_BQk6ADLbPmGmcz6_yyKuhNORijIL3eNifuCb12FGUsb-OFDG-ZqLklxp7gbLxp0C6qmNuhQSHJXnTm8Z58LZEk_hxG4tXXXTtpXw6DuWnL7rbtQLsFZueZaKOl8RWE7a6KoXi4S0roQJ-nUmtAl7FtivZrLgeqEUskUTksVHJ-ye_JoMxl8jN840XdIk9IyO28NUlHkKhRkQUsMgCdtj8CWuMK6eKEVY6NxRx5ucJQwaNCAoMOTu8hutxG-rh_VzTQu", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101720615600344350844\">kXc</a>"] },
            { photoReference: "AWCwydgFvfd2epPmaiyyFoPe0ah2ROBg4lXBv-LrZFmOB9eCIe_2zeUFZqb6uPGpo4AfD7VWRp5-3C4Wtn79WxkZqQxc-kJYBRH9SEQqLy8Z_Z8lRq_ph-HpExU9zts5Z2VYjqU8L-cDXO6pzwnVhPXHM__nMvVh73AbwT5xz-q9xbtE5sgraiyDP3ApaA9YDiRyNo2E6f29CFpLmBwz1_PEHvPtCdu7Qg33SLfmibfJWAex-nrf48NfmmFI-gQI3KVxQviuJtIECRWkqoQuvz9UcRt9ZBidD8_BliPblwhMEZqQV76id3Z_6UbE9V54mTqd7P1McpvxVrXdBLqoCQ2DRvG-3DyCS-knbkmII_IItXHdWi4ZV8rv1n3pFWq7urUiG8Mw-eUQrCG45m3pzsROd6qWq5FyNvuB040eDNJ2BLK9CPwjB-IoIBSiTEpC7ZIc", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105171599926847415946\">Suey Leung</a>"] },
            { photoReference: "AWCwydiDJH4nXAZCKQLYxPDk-5CvqzcB_QiVTa8bwn4a7edlNXCAtbnDAMiQMoOjxyD8zpXqK0Uazw9QlYH5oNZXNDx89HYQyugNNTFDOkc68wV0qA86eDB0BKLubH7IdBE6Lyp0dJXqRLKS9uONUQ5xYyuUmaQr3GcfOiGEus8wAeGHBfutC7PX08we0ZSqrGoelXDcpOlBwqwsQIuC5ZnBoGd5JXO2gAollE8qgjdonFvJR9dKEC-NfS8bYp9oibgArYXorXNLQ70LFOGX_G1Xcwt1KMCjd5mnETVUvhfJHL-BXda-kyqelnhbjLFAuGqizluWkQFv1IxJlCnCR-PQM0xymo2Y5b7mTmzCcEEyFp3INv6VgLZP3D5dcM2LJoqa6TFBwwW_J87cV9z00O_E7jgCYx4Yfq-skW_tx_kO1TyTwiuhmcfwKkTw_DDJdJgV", width: 3869, height: 2902, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101720615600344350844\">kXc</a>"] },
            { photoReference: "AWCwydiNoXmWfF_xIlO72am7Bt8gQ1_6XJ9j1cXdRRq53o7qH6u1orolLdxuJVsQQFmMj0ZyGHRsJugWbPvQQ2l5hrE3LwJCYBzgilfLoUnla6plD8IQIrH52iCqB49zxqhHll7XkZfJJC4GUjkk7ZmOI2gNze2-tnra5Jm8Ot39g64AjTn6uzRqutodba9C31iioaJMAa_-IpjTxaieISSAsbnbCTPignGCgpCWo5jf375uouPCOCw_xJFNp0r8Gc54X2vGZEyAIMx-RmSgX6XD2XHaTY3sd5XXF5RdKpRcNUIRDt8Tn6LlIV9NM9fQwk8GwvmMY4jYWZjpoITpTMniPKd44H4aIeYEAQrApERN8-JeMrJAc1gKg0u0jy2u29x1Dx5a3tumdco-ItRZCXEHKVLaVAb_wnFvJQzowk8j9n2rYn-3GD8_srFl8DqrYkKU", width: 3866, height: 2393, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113497403507409942239\">蕭嘉麟</a>"] },
            { photoReference: "AWCwydgkqLDTJ8jRhTJdKTsY1zfXegMNT_H0uR2mNQUcOiygOF4D_LraIeuQjUcbj7M0ZGI4_RFFRpagB9TYPQLR92O0kxJ7KLYan6WLYuHAbxonZn1xudHb7kDJHsuwY-ORq1YRByVc50ZAEV0C_jid9OO97Xe5jZLaIIHy_193bAm2YHuIILpPOMLojlWf9FlJGEMxbyhoxkmNjPchz6zAG2qw6VRfNGMa19rZhNGha09G8YVnLnMRKZ238Uu6HGFpYtVLvjWIdiqyli_W0KDEVJqhC7zuTucUcU3vFBCZKY4sZ8DHypawUpBNU3Hex42ZfLNIU_Oiv67AzGWHPKl8iC2IHfDC3Qv3CHOEBPEH0PjB5bBzEXbWnO4Ol_qO8xNviwqYF8vCTDpPuf7aqIKWTkgBW0iss17onFSiwcA7-rQnDyL7RjfwbGVZA-m5BPlB", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111250182654380629133\">Isaac Ho</a>"] }
        ],
        summary: "고품격 이탈리안 프렌치 요리를 제공하는 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["높은 평점", "마루야마 공원 인근"],
        tips: ["식사 후 마루야마 공원 산책을 추천합니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "이탈리안 프렌치", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:00, 오후 5:30~9:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.sapporo-moliere.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6723659034079022176", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%B0%EB%A6%AC%EC%97%90%EB%A5%B4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "차시 삿포로 비스트로": {
        photos: [],
        placeId: "ChIJ6zr2mVwpC18RfvYlF91GD3c",
        placePhotos: [
            { photoReference: "AWCwydjTRYQvZES0_GI6mTi4MLKpscH9FKNT5cg6amCMNSIlbZqTiGXkj6QfU9P1Bci22XayLUgw6uqy4577wlcvJZoGm12BZDo9AELxNKF_2bEbPCDDMtgElNrBVf_gqupCOnUCnGkKUb2rP6hfudYZsR6hcCoHze4LXQNc-voK5vxL2jorrT6jLCZ_8km2-zRQTN2FM8qY5hGC3FzrOA7AKnzbLxNwD6LHICYUSICQ2t5tft6i0Fw29_pqBFX_Ffvrqzv1qHyXBUDMD1nPx5i63vDf1UScobaGOHfr44L_1TZKZEg2YC-QAIA0ipt2Hl14TqARquYkOZZrfo_7JcrXHPomU_6vHeaavPKfixD6p6Yc3FoD712BM4Eu12q83wyfj4awtl3E9Pfpi2IrHJ_8Q5dMtRcmTfmPpqHWRVmnM9wWi4E", width: 1280, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114917112238227725552\">Chassy 札幌｜隠れ家ビストロ&amp;バル 札幌駅前</a>"] },
            { photoReference: "AWCwydjCUxwAqwvf0UuDl_x4UijoFmEmc3fB0SmixRD0JYvAYmFMQqatHAkJxo5oyCGm6T4YAnoEzSCKW16-sjE31CdcjFN2kUcfXYmRIUrlCeR4rz8GoV7rJI8BgmOg546tvwAQ5XwJOrTBU96aHT6MBDWXSUrDdJGzjzO_yUN7BJucoS-myikDZ8ZkcUt2P2Rg0fJ0VsIAGiau-5jkHH68izYdFMyYUYCTsn4PnomSgRw5pCs5Db9DarIvyWpI5-GeyORbksm3wnw80ywdGkjyX3PlJEyokratJvjKfoIH75shxR6hwjiMUO2b5DZwWgFYt5bqGFBRhuiDeytzh98y7qmfuSIaHK2VFM0xJK7XuSjsAtXtMbwPP5l9gerOfuyhyEcEZQuHg9GdkPpqFHTQ5K3XIkniohqEc8MjZmtlWYeur2gI9eP8WtgGoB_a2zYh", width: 1280, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114917112238227725552\">Chassy 札幌｜隠れ家ビストロ&amp;バル 札幌駅前</a>"] },
            { photoReference: "AWCwydiLsyHfeBWi3TmFLi2fEVKyalGIzvtOtaRHV9YJSepKPmoxYODEeMQz0zOGqix17fiQ6CrxREAgvHQSsvXaSu-QUUGP8aFP9jdTSdsx2wPR43GD5xTT24pOlnnLuII-OT5xHzU1T53m5ddRtqt3ReSN4MGHCy7h7fKwMMNLg-z4iNQ5FS3F1cL4scWX8qu_kBqXUwxcMaPlm1nn-vFVTfQHwxkmfku7sfbSy-4tCRjlORKcTAXbmaP2f-ImzZ5pIPieoBKmSMIEmQUdPtFyaZsp3GDLHyJlxUsx3Ue3GJeA84sx0dKovV0nkwigGSaan9J2VrudR_N1I51YhZP7BrfdNVORoGp4H1qn3tS5hXn-8meUPbHs9pAs7APpWsyQL7iyJdc-gaYkRoK13nzTvgd4uukSKhNXwGZtz5S-4i7-MUMLlqzbQFnHGvvnG4Wn", width: 3076, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114917112238227725552\">Chassy 札幌｜隠れ家ビストロ&amp;バル 札幌駅前</a>"] },
            { photoReference: "AWCwydiOA_xq0LROxc4azvHqgt2o_KGuZbiHFfgfROtE2BZdIKG9N1fV5xxNGhRTH2cbqST89TmC-vrN3H9UmY0I8kGdS6Az_2aNtDLDqLXXagkcbvU38R34TN3DX9kytUCqKv84m1onQb-BZqvfrI__QWLyxNV83iPL8tB7LydjGIgpEZPWXw6O4Ej4bYvZ_uD_1PEDTERefX1JHGyexqPdjb_8TN-8anA_gxQl53B8q_a45UW-K9UKq9Eriq3KakPtIFp_u8fQnwZ5gd1ohp6qeuUovN2oCVUjebYJ78DjRlnRUNeIidcP4-3m3eSa4jFhHdWLNgjJx7LeyzW_55u-N_mwOlSJ7tzCWj5vCEuscwpIFewe12giB-JcqmR4aI2woFiWf9ZVuABp0BgUgDgKavhzefkBCDr_UbcfpqYOnH0JD00Db0bo7ggk0XNCdaE_", width: 640, height: 480, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114917112238227725552\">Chassy 札幌｜隠れ家ビストロ&amp;バル 札幌駅前</a>"] },
            { photoReference: "AWCwydiYksV9YFZSli1JP9SpKnHa85rpHG8uQh9jNcGhOmnertabWB_Wc7F6kfqIwaURubO1Q9nQG7-evs8R6ZHdBYhVxhOjAOvC5M8JFfbQ0I9Ej_q__76tsJ-rwGdZYAcuwhQWxzZ2j_4l8TjxDUsN_VxP7uqQcJ-i2Dz5iIU_-h404ptXoebqIBTzvw1QyDRnIRRvTQPLTIJd9IwQBUGqbN2EHEtPCXSdk1j3vIVJfcnt41enMy4ouB_XpAlO79fuKZGbSsWnnz0Jtd8aGu-JKd129JxU2Z7kuXWarw00cKsRk1haJIdsM-KkuPuNbq4ChFbS_-9p3r8x_133FXapHmErKXxrx3nVrttDjECG3Q5LzWRdlAiQIOYHLfl5mIO2fPIphLHQkN9FeUj8r2OGiMNXTa3dpn2xgfRJUOjZAb7WLR5dZJwtdJzklLJ42VVf", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101927837027462302128\">mi mi</a>"] }
        ],
        summary: "직원의 친절한 서비스와 맛있는 요리를 제공하는 곳",
        updatedAt: "2026-08-16",
        highlights: ["아름다운 요리 비주얼", "친절한 대면 서비스"],
        tips: ["친구와 함께 방문하기 좋음"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "이탈리안 프렌치 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오전 11:30 ~ 오후 2:00, 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/chassy.sapporo/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8579153730554164862", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Chassy+%E6%9C%AD%E5%B9%8C%EF%BD%9C%E9%9A%A0%E3%82%8C%E5%AE%B6%E3%83%93%E3%82%B9%E3%83%88%E3%83%AD%26%E3%83%90%E3%83%AB+%E6%9C%AD%E5%B9%8C%E9%A7%85%E5%89%8D+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "시하치": {
        photos: [],
        placeId: "ChIJE96cEscpC18RYtq_eo49itU",
        placePhotos: [
            { photoReference: "AWCwydgwiM52C1oWOHVs_O-NILrreG78crYk27AxCOx0W0PvwCWX292NhXqSVYDDSIJsRTmXuM3rIxKKlL60iljwyubyBluoZPNsr-nGoTdyudzlwNFRG5h504OF5Ah1BU3YxqEP_V0hT9Srr1DVsZ56yPRRno07TrQOqaZ-E67McPiba2QiIf8ovUOppSeOVcdzj_rlhgt7BA98nc_VKFFWSq9d_pJmOnXtTZ1Tit0qIGbOjMn1ZmCkVWgb1Bf-8oW1_68rMLRAvoHoWqUhKmjNmzyesxNapIUMIJseSI6RUH_VYghD17yUbv6QSBRq_p5qDk_iKKNZRA6yNIL3Z4O3F7Agcr9rObPLSUxPxcfVJrVCyiZ18oG_8dM9QP7KBNF8VlzPjuEnix3o5bf4iQPmTMvvMtFev17KdwkVqfJAYV8", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118042967273278099336\">シハチ鮮魚店狸COMICHI店</a>"] },
            { photoReference: "AWCwydhUzvhCzXl70iW_2Bu2Lfs59tQdKSKkTZXZ9B78BxhvlDgHhz_SSGeD7tLhix4xpgR3raz5sEUxF8_ILSFZQJCwCXptGfqVHCTaIfa0Y-dBMTfpfg5R5LHw3HmEyQK2Ulp7AX_cLpfj2K5Z6jJMDMp5djr35PIgz8TfkjnKYDFXIxGSAzfBSbrSKx7s180k_nH3kVZlaj1tsml1UHyADUoie5RGNFeYpGpwK7miqp2gmiM7Lar3rGX7purybZ8K2iB1fwm3rE9y6GKlLyUO7eq6UVDEzo5SaFWP7PuH2iZn9I5xEjaztWJx9e8lqUJ3HtnEtSzNe0Rn4pvx1mVcNuS2apBz0sohZPS9IKrQmBK3VWU1g5Hde4VYpo5Q5eADtjWPegm-xCEjJ4mDQRXZ2miseXO8ijAVA84CDhB-Rllt5IRv", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118042967273278099336\">シハチ鮮魚店狸COMICHI店</a>"] },
            { photoReference: "AWCwydisKkY796m7gffoMVY9RPLvknZQG_EurlGHrHmGnLsiUmwa7sLWZGhbPsdfNQB97XkkEgbIYamosSLaRaO_gSuZ5vM-4AfqVaWIanEcplb_uSkK2wOHwFcN8kaFV7ElTtlOeLYyQr0pYYBNx5PDCHZWNCdl18I2QoLwSYwDSgZ4jtouudhymjXENL6RS1F0ZASLUUC78muwX2k95zOgW4xXgwzl2dMBvi1JwwQ928GLdBv96YRZxYwE11NcQGafPantDJ27WXzobQef74n4PUf-sjvzv7kWLKAKdSmicZYqLOO0DUh7VAypnGskkvffevAtb0qx3GsHvoNeBe3oCX9sI-fErv6cQQcPIBsadiWvMKDUB3VWTcAsrB5BOFGqhNNbtSKok6_g_4_ZqkncE51iCka73xrun2sq3XBxv4mfrxA_LomDr60A3cuRlnBf", width: 1919, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101368588949643790610\">旭龍龍</a>"] },
            { photoReference: "AWCwydh66Jn4-VxReJCXBMM9D56Q4QbHrvPEAw8DYTFup5T9r9Z-xu2fDBnahZsMGuDCQXfMaoLZTcgZW4fdPMqb_b-nCkhbh8nfzQ5R7v85s0wvEccZKxlgeI_IXsE6WZ-LWcQX5dlwiB0nVsUh2vzBCF8gmVJFMWfIFBGe0M-cS2lOV0S4Lo5wRQgv7ZFh392nIp8CJPrtXZMl8mCN1L3gzNpohamGlkb0ObZLDq5-fnnTWA2BNriFn9lnvILkYPgWqgPlIb7TORXp0oAHiHgi4j2Lkc1DonCzEtT476R2xHFxg4GX6MpPmhz_xcnW9mpwKiK5I4_GjAGGrlvYPAmJmNlKv57rWQupm2xuYKmzrMa0BL4aQhsgxY0Ckm795Rf8zWijZ5tQW0vN9lxElKZQEULjgP8ULjJ3qL6WPI--JNDgeJ4zQGxpNbzWOhc1rmda", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104926355162422743245\">Momo Nico2</a>"] },
            { photoReference: "AWCwydizNp-cHx5WfwCJGj_w31Xa8OPtPQ9v1SdN8JDzlrSH45D8dAFcFRaQxwkNokzdbJTKFx-Q5yQxPonHjT-iVsSWmDN5epwOjQ7q6-gFMX2aDXMH19snl8PjgBglrhkXA1TV6qED6gxY482xi9io8gXskGcYMwrv9RLN_c3znlTn0Jp_5H7_DInlpFvGEs_NCis899tQdANB0RXzHhpvAuFuzwV6vKT5CphwLIk4YjOmZVepmsTM5CVOTaBkHQwZwDnm5WgfKmfWCwShq4NiwY6jkJoJzBUfU6Xw_GHP1LWlD_D3sKwi0tlbT-KyRl8X9oplbAg44z5WHVCQUThMHpCnUaXCp-2xrejjxVPGW0b1bL4P2o8RB0DWmq5GzSZv1rgehujqy-O93ZbP0FsgF3SrTiIn1EO4FlzN49UyRmi53WK0jR1yvvmiIE6u0ouE", width: 2272, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107385822263468995899\">U L</a>"] }
        ],
        summary: "직영 생선 가게에서 산지 직송한 고품질 사시미 제공",
        updatedAt: "2026-08-16",
        highlights: ["신선한 제철 생선", "풍부한 메뉴 구성"],
        tips: ["푸드 코트 내 위치하여 접근성이 좋음"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "고품질 사시미", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tabelog.com/hokkaido/A0101/A010102/1072346/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15387178759018764898", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%95%98%EC%B9%98+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "사무라이 시푸드": {
        photos: [],
        placeId: "ChIJZ_fWUKUpC18RZwQjei64HvU",
        placePhotos: [
            { photoReference: "AWCwydhZigKd-zvn964F5ZODHJYyykbYuEbFqClDDhzWpUZckmo-AYICUJcKdauBdWV2KwX5gUWlS8PNUqn5hxTfIWluPANAExFr_eNX8gaNml-IZSJ6EESzUfYrUT6cFrACUyuuuJNMan9jPJbd4jQqmnbG-BqHXKAu97btO1P8_K8aYwBMGu53m2Mw1I4MDcIfY4eSkITyH40BzViL5g5pvTO4Vhbfw0rUQ8azBWjEeXbP_pvVRmPlnErr5RhaWZB6MyxdZToFqCfFMh8JhFrBI2bZZdw73dfzbHzn6pls2A1nxI_JnLaGX-KvZQkoYpwahMcua7Sl-88izecLiAOM7U62e-YBYvCxliH8STX9RdXQyLQgdXqSWDglWY6P4a_CFNkArW9jipQNd8csqq7fOqpQHIVRUyY56ZEgHWT3rBDm1vjDnGtsN10LOni9Ha5U", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117637069804997601269\">SAMURAI SEAFOOD</a>"] },
            { photoReference: "AWCwydiljAdddB7IwPLX8hED29Ky9L5VyUNBZSI26-JBCuyXCTZfTfjCpMjqPuHPUnuDwOoSNKfvNTt-OzTe6zl1UHXTJackXJ4_PCf3cQryX4-pj0-2Wv331Vv4Klu25AZPp1uFoxdGBn8N1ORy7HPJc3VhtvLJu_FfZZyUROTkW0wsOjmLuz3I8crEXuvPxiCy7fJg7R7yAbGQOYgIA7EJE1JasdD-jOgQjvnV3VgyW-43dQjPFW7lGr1KojhmCV4wfSXIEEXqd42_XN_E79UO79gYKQ5t4Sh1d9SGtIrmdUYBO92kK5q3vzvPiU9hDPJOmikctjPHps2whjydJ5TUPkGeKGoPl95F4mbg6_vu1KVocExk0dbMSoUlEJPa0L_az0pgaKlpzqosaZ4_ycVTKPc31s-tyejzd9Li5kLWnbb6KVgNbsodYd7G_mL4ng", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101145403370541818802\">Maria Citrino</a>"] },
            { photoReference: "AWCwydj8BGHiQYMxuD8tXo1euoiA-vbMkKUcXVhY-DmnTljTsR95dxEt23Y8OPcQ6oz9DPnGvaG5Or-V0ljnos7GeiajkNVqyQyoE3K3FMmEVx8iD53RrxamEED1wqa0QuSZAa7pEQ1jfB6piauhydhYorIga4z9tMVjxHksGgiXkoOP2TwTdSWGaXmPrAc3j9asc3nIE2ngQJ_rcb_4sM9LG7766l1eFtuyiJSMRSYNdE8pyxD3LBmVhPbm6R6yq8Inp3H9qLVEBrDTq8yNaSTxoH3Q2A3fAXHbJtFg0G1DetgG_OWx8T1Ps5ZTl31fx3OFBn9MREjKzvbV41MD8FpUIOD4dLgRRDTk1A0rDtfwQkFNry2WJPeQOHQh90H2iyTleS54V0IO16DRwJ7axp7DW_6kT-vLOeaDf7wsHj9z1eN90dFjHW2buhuP_MitA-qe", width: 4144, height: 2768, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117637069804997601269\">SAMURAI SEAFOOD</a>"] },
            { photoReference: "AWCwydhKK6GoRFA8mJVu_sL-oO65L2xQANFDwNjvmsJb79cOH3DlhLBM7rVjmI_iNt2aq-NAN1vQhkEyYUVXCAOYFdZvSd2P6wyPCozUIo1AoZG_wUJS-vFjEUaOV1Ix0a7wVvfqx6-ZUQ0bcezGcp-szPdsfjB7cIWk5QE9IvMLE9sHDjwGDG8MvKnkd4B4s5y4M1TRUJFAkAFGyVhNtY4CiGd6OGUYuxRCi0vsY_nbjeeFzvsJ3jReEMEh2v3HXjijq4TB3ACFe2vAgysllgOEUXnNQfPTw_8gEmR1TALgVbkw2i4Wp86mR19NKp068U-wJ1OTJ6LR2dM9OxacmzbZxz4tpOYUqCl077NlJBKZefPDPNNCYbITJBNVpD2hGXcxZyndTOVOAX4QSUSxtsAzqlmwmZ_5EVhJsuWxW6DVWqwJDug0l8xSCeXWsUyHojnj", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111497231860080243965\">石原明子</a>"] },
            { photoReference: "AWCwydhvHQHfTdja55jwLwm1cwZcr4d8LGXCbOrSpiAEbrtB_t3pYy91lqxVPrx_y8Apy5vqxxBi5Vx5bIBBV7KnOSbgn6sWadY1xE5q2DZJi3441LLuZljRepR4-t8wzISD2BJW50TnDgpXLw9iSaxz1U3HOHZF1cFPaADhxnU6mVVJ0cnIOzWFXjOEVG9NTuf3lJMCAf3iLf8j0riw-GnlRciGGd4o1klzZZFYHoKh15TJhwz9CKa8qG2YtEly8vOlbCAuN-kGxTznAWGw4WWQUrdRMXcOqtod4pCc9ypmJtoWqJTQqF4CLxRB-6IUZgtyW7v8lk5AoQU_IJjX1NGfpgj45Woes7x7j7L15Jf_7rp6r4-jDwv4gVTf098arvEyXGN3jlu4IdJD51euMM3hzXbSpFalLFB9dzQPuThSWf7_atupMuzk0JJslzvyNg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110067110602803509386\">Katie Brodie</a>"] }
        ],
        summary: "높은 평점과 다양한 메뉴를 갖춘 해산물 맛집",
        updatedAt: "2026-08-16",
        highlights: ["신선한 게와 새우 요리", "미국식 현지 맛을 구현한 요리"],
        tips: ["인근 호텔 투숙 시 음료 무료 혜택 확인"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 6:00~11:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17662757298350785639", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=SAMURAI+SEAFOOD+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "삿포로 해물 덮밥 전문점 스시 돈부리": {
        photos: [],
        placeId: "ChIJgSZpeuspC18Re2lp_yEivrs",
        placePhotos: [
            { photoReference: "AWCwydgVF3Z0cQbOj2zqY1aSJ6W5sKCoWugAJmuRevaU_YytSASNk3xonBQcAIPFj-TT5yGpARE6ySDGHZ1MJpFiPQ_c9g42EUeyyzTpPKjowB4slB5fRiQnzbRTf9fa415oVVzc2sZz7XCA1J7gtZsCdFh33SqqfNpmovOLlHqnUNqEQT9GeEJivY-W3tqCwxZXgCAuPXGwu6npsL0Z1KxIF4D-4SZfftRuGhNq-zG6mg0vnnjpS5nz5_ssy_skfu6LBjPIxO1Po73qurTnr0PFpl10Nu6f5g9gUBcCL-YWth2bNdU_CKusvWSv3glQe6Jhg_ZYC3bNdrcfosRXYmCUVAA2FnZOxii0oVqVJMoG22QrIWneYLeVGxjakx38PmZzdUO33QveKEsVwbBgMK14OXHTF74uZnHhe_VNGkF4uJ1CJXpqms4Gll87y52IJO_3", width: 2507, height: 1672, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100352695998716132203\">札幌海鮮丼専門店 すしどんぶり</a>"] },
            { photoReference: "AWCwydiIgsvE-2eHsvMQzzqt5piEDccrdwfBiw32V2ofhIJX6YchIl2Zo-6wcylnSs81_Oi9I-hEYFxPUzEHjIMdRUGcQtrnZhtqoa1RgoUqEZ6fmLc-jMj4r9zgJAxZZYp9phwwpU5I2WBSid-DwKlx8Dd2KkOA9AEN2830zDmrQlKfvT1T4yhiqIrCQaAhanPqCjB68249kKpnfBpkVTbqMLk0nSdUuXauKzK2Y315TR3UtmeuK4KMNUULs9KwuWKPbaNC7duHfTEK18K036Pm8YNCQdbGMb7FNd183MBfSIdbJjyXapdQfVpFQZ5L879-pr74_9SS5EqQnbKeOXKkIbmLx801oMYA_aNqelCqcjwJfQbZIUk42lwA0AHhLMigtwWLROFi0wYSkn39g8KoG1YESiQ5C52T_UERQF8VdtYDBoVkOXm4GCaKNLhK7Z8K", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104951294653594945922\">Hakjin Lee</a>"] },
            { photoReference: "AWCwydjnFFOMYqpoMwrcole3fpqzTAuBkDq60x-R5fYWYgdKSeWgo1w6VuuMb2nGXEruRCrkL-VF7C5Re5q0WhxVo_ymZsN2m4Pz1z6qF8CDTd_M-GBrWXZSwU8mo5zT-fXgW6oZNuLuA9Ep00hy_3S1A9YVN4om9bI2dTHob3IUQU9OF1U6HLGi4SX_Ze7sZU1OPOOoMMsqPR1CEZGWtkH0TlptC0hpkwnKGBcCoI9rkICZcJl54esUUI6P8vfPbYgpIgcloeJm5kdb7uimli2dsTRWYZaBbTzOGn4t20Q9nmg8vOjcx55P-cCQH4qZF31xMCJw5XyOPda7m-twAN1SzM5m5dNTJ5qft0mJxXU1jmHWbD8W4j2Es7fG-CxHoY-7D0VgY-27_6zV59yXq9by5lZzMLCe1n-n0Vi-p0qxrk7nkK6M", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100352695998716132203\">札幌海鮮丼専門店 すしどんぶり</a>"] },
            { photoReference: "AWCwydjpYaNcpsFZpmbBjda1vUJgAg3o_9rECR5rcxUyDwtK9ni5vFT-273OxpWZZ890dtDqeZuVAPCDU6nIAsByUWFFCIHRx4su0HVbtOwjDkFVfyHmykK2Bp2KHeTzp-P7sERxp_UxdwoW0qp1-_NGOvn8r45sFp_z4OnSoach2xc7DbbR2Ij_JSpWTtqY59hE2Md7SjSrjSlc458pbsxcDx4yXdvGbFBDSLOXBXOvh-2Xcs3anciUC1v7OvHw_0dLtr6oBiY0URXaguLlFpz1KL-ulLgyn7WAiST2kBzMiY48CymO5U2wVVhJR6hkmnLybbgZbzxpVTNGXFa9h0vNlPXA5DqQLOaXs4DlXK4nilMHDN4Wy5n4n8BkDb8q0dNglfkFNxZEp-5Dj0aX5ZlVLOROeH5owlmWD2s9rG4s3-Xb0yL2fFHBAAD0ofUDSkWt", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101347937344420731042\">박기범</a>"] },
            { photoReference: "AWCwydizA3iGc1bjJ7_WYUnyyQL8QZ7dfOAhyGRf1mMklfcaA5gwpxiNxdAOHhdUNqmF9nVvyVOYs7Hu53O_8Hw5-RXlA1fD6fdIF0bMElaGHfkRE7upTeX8zN1HtOsAiIfmq3EFu1emaTJ5-ANzfcOp3Mz5V4_OFx2zeKddxn1BT-EyBNdGngtYGr9roAxMMyY40bmoZCW_F2JandcmTQ4N46w4Gc2NOzd-altn54ECMGvc3P53PMj8geR-RQfn-TOvqTGyNG-AjOWNLhZ_S2bq5XsfNK89_dnxh6HpwnTCMb3-vM5N-lM0vbDkAJfK1UIS7k9Lrpjo26S8wsmsBDKfFCFAMpVUnQzEpfoIndqELbHq7lkkEt1JQwSmg7_1yx6VSoYyiBWsdcFoQICjGuS3mWw2ecuR4Vjn5lV2ETAZrt3wUe17YyyUdCjq0OjcsoG7", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107162969312997860005\">shingo hashimoto</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 해산물 전문점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["신선한 식재료", "뛰어난 맛"],
        tips: ["오전 11시 30분 오픈 시간에 맞춰 방문하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sushidonburi.fuhdo.jp/?utm_source=google&utm_medium=meo", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13528287860081912187", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%95%B4%EB%AC%BC+%EB%8D%AE%EB%B0%A5+%EC%A0%84%EB%AC%B8%EC%A0%90+%EC%8A%A4%EC%8B%9C+%EB%8F%88%EB%B6%80%EB%A6%AC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "후지타 해산물식당": {
        photos: [],
        placeId: "ChIJDy_lk1kpC18RAx5ccWLIlQU",
        placePhotos: [
            { photoReference: "AWCwydjywtWEi92iCQtfga3m_nkCGzb8eFtoRC2fZEbekst735aX45bw3alS6er31-3jB2GMBVMx67bAIStUDqusA-4adsDwB6IWNm0gHw3SeTYTwbU89-gNd2ta-sQEdkRPyfFZE2IWJ3iILhklsAfP2vHEWIIzMVpTRCy0BW4xtRobFkHGUZ1ZDrXdwY09lVRQIKkEeqvVUw54Rpm5l2aGKMSEprOsRHDMQnsXLLYkwGX5eHKfDDJGACgntA233sFXLf-BopNcFwva6NN1k7HwYvw2ZnZJUUFN3b95aKY_ZxreNOQU9ZWGx34mkTnPkpPPtvNoCWU6arw7JzXG7T1gqxI4CT6f_SfiBW8jw7f-KWzVAFF9I4Wa_Yfq8R5wTtCNPw_spd1oHPbcpZLH72gjQVVmj9UQx7b5sC-LsWzxVwlhW4CpSTb2H8zEu99Vuuij", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104326653903569749288\">Rebecca S</a>"] },
            { photoReference: "AWCwydgByczFiQ7eRr0umIZlM-75bRviHmUOTs1jBw13IIb1hOBimAxHCW1i9WsrVFZxU89F01DIdWBOWF2CVgjQ0Qc0-mh-BUKYzzgQj9qiQLVrHK-wO9tkPaYFfpboyqCbfq0lJgVQcRFG5pW2b_cIny-mAoOLKrxuv7Bzz6J5ElUZoDYQMPMreCmoubEWVivkqfig2joTfz-nNoGtrne3322_VxMqPOmDM7bMDX1PSVttB-kwd0HrerOxRGciNZ68rBdCCv5hVC8vTTQjK4A5DDdOT2ytkwD6qgMf6v7hqvizxqSsAGF4Q56fLCAOXwnH_lpYlIWp-FaSRYK437iAukol-oJg5Qgb8IgkfgHZg94-7xCi_nC-sfF567EzTUjPsqncMr8jx-VZv8z2GIys1xpCROUTwFv_YbG1swCpsE2yw4DH", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111691507277671028114\">반달곰샘</a>"] },
            { photoReference: "AWCwydi8H5yM6ISekG_Q98jq1zSGj3EBnV9WBGdSCpEz5UTHUse9VmXYJpPl9xI7npBJsgMbX4d7va7ZrLCsFENtUZ80Lrrof5Zg07o2DILHzDNFx2Tkq0x_iJip9OvD7dz6LFRq0GGZveQH3YwOKBpykZx4lTalOCTqGcA9dcUmJvlA73gjp3aTzZMQzMKLlsOq6Yg8KvJfbE_DP6nad9Y7fpZCcd5G3ANooxIMb-PbaXXAoMmW4ay1ZKLhLYQDkhLElO_pIBwe3nwT-1I_v_I7Z5kRqBsFkR2Y7HH4i90rpGHHOVA_OJm-bREeHglCb_oGD3q2hgCJZb6FFcKjkuRUXJJmfts1KTYtHKOaQzfAMYENFk3oPQ1038KqcuNhltjPz0xzMTW9mnJNfs85nQOfWINIDnqaT7u1WFVuWx3AYj5lf8mARtj9V_2Y1_QJ7pX_", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108855366513808071136\">Thomas</a>"] },
            { photoReference: "AWCwydj_pG_2HBMZHWZ_4bzdIKXxV-_fJOD_XVCudl441BllWsmvbg910VVIDZVzq3JaOtdor5tHgW0AVcwfrwzarNMeJVh_kC6C8c11WZbCC6zXYpMj5ZTRH-o65Fu14mWMCZv9G3847F9K2sRTNtJwXxz7cGnBUoVcw7h9Wmg8EoFppfaAZMDMZLgNl17uIC0zQwXElQlEqIF_hovTbIAdEXHFRbOrjGFOJsMqudvOsZBiNc4zJuW6yxQ_Ys3qphlM6qp_w9_4KoZstJxaV4BWAcpuiJe0216XvkjdFyyBAHpzG9cdCOOvoxNrH-MYk5gJB85qH3L-noc6tgGNwG4omd4P4cTBkLwcDT1x26Sn_KYe8vLHJcOit8let5cgzGLbrJI5TayEf0CmnjGpFFIEfMunehyBR0fKbYvVZXlZI2wmJ9arG7GBU1tfx6vN5w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106082472909570506113\">Joel Tan</a>"] },
            { photoReference: "AWCwydg1mYTH1k7cBMW4grDBAkLiaiEkSX3iN60UV4lJEnkxgzMJtsyNEDSpnRAqR2OrJVFm6nMRkJSwo8A6_dRhEvOPBmZdLza_RuY_QA4WWujCdhruMWswzb7OtTl5Mr_Zo987ODMz-HSCmHsTjc4vmtBVE1bbmSa75DgurkhSODv3HNte4H7IP1xFlgZxtGmOQNCLc3iHAwJUAO7wT0OAX_KsTUlTAt0gZKnJJjFcq6kegtgqciE--CNNaoh5hEkMqE0E6tkU_lLaAbR5qqCOB_7m7I6VmSJ3Wmoi2pIY6pAJnvCpbhK8pNj39x4XgyHxLERfn-9CLd82sWnooz0fGS-Wm4LJG_54viyayynWwU3jDgg7T00gjmluPnlybnF_QZ9vQFXhbIH8XnhPwxN-emO-rkHxSWDRaE7UF-Me1w5wgdtGRBtdoImbImG9pw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113388536352375965693\">Susan Yeo</a>"] }
        ],
        summary: "높은 평점과 긍정적인 리뷰를 보유한 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["갓 조리된 신선한 맛", "완벽한 조리 상태"],
        tips: ["킹크랩의 달콤한 맛을 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "킹크랩", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 9:00 ~ 오후 3:00; 화요일: 오전 9:00 ~ 오후 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=402448066853740035", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Fujita+Seafood+Restaurant+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "다이치 카이센마루": {
        photos: [],
        placeId: "ChIJWaa4W4IpC18R-rST2hXSM-o",
        placePhotos: [
            { photoReference: "AWCwydi5SIp896ClF_cVJKW3pK3j_bDg2i5Bu8SA-cADVXCFwiRaKKubPi5QRnQ5xFiAJ3abUPtT1W9xXZ2G8NJw7rnAjSePMlGdEH0a5z_FGzRGcGIIcJQwik4xTA6GfYJeQeJc6lU38vPk9Eb8LXBJCV4uVyI9Bx2PawaXjBxAMqL6PrHsc8qJoIbVC_zsCUY3rvUdQcVNY_g-myZ9pCC3Tkuq-5LQEDmN_OphIN4Zlz1jpWAp1Q4m933kmJNX6tpLrFkYulcrff9RUEoRt0ZsFl1WQkQmV6cGK28Dyy0ohi30Mu4d4cHmKbiAg-tvs0Bm_nh_fBYIlPx549ff8pGAozctK2KctUFi0P1U7Kc0y_WgEsHQAlfNCq0uvJejhz96ETyLTp4Cq3JjPFOqEOU4ZsIM3c3YUfuD4XD97dQnudcv7fVYygqhGInHTTvOiNUB", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107906892409649494089\">T DAI</a>"] },
            { photoReference: "AWCwydjgykTFQoQyTBxwultQzsgTqnsT3_hqGu4syGH--XhMA-I-FU3ZYSgK3va_u0lLC_ZgHf5RxdRNpkrmDcRwC9xtp8shtVLxlCZqSkKkTTx7UgNXSF6_2RBinrog-ekvNWdPdTYcsLjY1o0qnRpw0VSQJshLqJWSvilWi5u_wBleoQ940lhRVUub6JVPMBUTI-55173LWz35b78srUCO85abrPd9v9b2tvn6s2s9ojC8NV3IQgO7Zyf4vg8Y-v_KUPdAJ684frxs4fEX9Halz9sj0cXENpHAIuMdh8g68R8V9LL6WGzC-iniqKTYzjvPZgvB8lXW9cixyfOv_Bxx4H0-wXcSgGIozk1sUbzwPaMnjtF8HU9PzdogMjVPgNcOoe-iizv13dS0Ek-e1vDhqMZlteP_vKD88AsT6LZ2zdMjhrjb-OJdbrYUC-5sFPQ1", width: 2228, height: 1484, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106707900790214622359\">第一海鮮丸</a>"] },
            { photoReference: "AWCwydj2F7CGXV5kZELDWDYZDG0EUKSQQXf5tmxUm1_ksWspwgUYf94cK4wDqnlIXfzBsOzimm3xB0eS_ESAs9iku6l1xJLv9gGGRijtMs3qx-m9oBN2gDPjgbcd65P9PLlWuH-Z2uVMukNcUKvGtnJNLg5Xolp2V6Fx13QdF3yf4GNljpols5pupi_opXYujgEgSHn1DCKQpu3rWzqUefVNyMCmTyViGLno8HoCR5QZajvKvaEYOAXs2KvORU9FDNeuLGumYkt4Zl2IDtEbT_v5sXEn01s4nunuG1zOfn5lVDTnOgF5QtxMkmg_H4V8r7oTlpYMIQiypykiIWpLF3E3dzg8YBiAkfAU59_vk3AsPNj6p7lYb2yD8zNW8wwVOn9TIwLqk3IwKRb4wg1Ko2BcQ3n85s4CS6nVIQxgAy9hLuiQjleTBZU9pFIY1rnBjIih", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116365767094338840336\">염민혁</a>"] },
            { photoReference: "AWCwydizLZX9MWP86a18__pLgMpH9OsifQrxKbXKAw8b-KO8n6dRszFqSel5qPKYkNAZf6gLfwC1hwYm_E7Rsw8TJrEcoIJnqfqXd8RKbceQg11tGWuS6zZyMikVQp8da_0RPqYqnJBFpbZTEVyH6X9rhBw3ey2vjGUSaHVD_RzJVBe9MH1JWWJy98w6vS2Hx8LwtmER2wtmQRiiF9iILDzyuPRXDQJ5psRLooTRePSEl9Tg4sFfyGEmOMJsmisjBMEmMG47TJ7xUw-CBNuipL58rHltmiYKw-yhWIBuAQP78Q8FO5uScwo8N68pXFPd9V2cgKXCt3GWPVYWqx7H9KnqNXcBDQ06flLn-Z-cvYhPbX_SUg-nUFUW_ZRpwDeK6MLtFqWL-36aA3AQoEjFA-cQtiL4QmKT4Qg1Waeo8iBsqJe2rPJiaAU1rcQBeyW3Qg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118071794321347011477\">김민재</a>"] },
            { photoReference: "AWCwydjrdUKVsW68IFziFHx6O8sDVHRCWpY07ZhnDNXy0DIHqtw8vht1nac23_gAoiZ0I-7n-K2leH77KQHzZebrKNJSxpwfRekJFoNAFiXKRRADcO1-zNvg77R4iZud-NLTHJHxHhxWGijaQt4rt_1PRQbhc5HKMexjV-l8zJ90Mnmc93_qjiXmeIKlsqzNLWXHIX1qys05iIqEg47IsSCp5UkShG5KPNEBcVdFnVbcTyPOCz-uLe_7vMHumnyiuoC0KA_FuUOR54momtoYj0fxUumZ_PDNKqQpH7efpSAPkFxbG9SsjRX4pdPlFi690Jpku48ZLb8emVHQEGplF--fpQ5ID1dpIgWPIxrj6BBYEbKDsFElWXIGeep39XeYIUHCL7i8SD34lqdd6M4yylE6US9rEvPC5qxXa1AAqxpeGEgD_I0vHBpiHf_0D8F9jTlD", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108177393926282249888\">Rem Ka</a>"] }
        ],
        summary: "해산물의 신선함이 특징인 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["신선한 해산물", "높은 평점"],
        tips: ["해산물의 신선도를 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 7:00 ~ 오후 2:00; 화요일: 오전 7:00 ~ 오후 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16876063219990639866", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9D%B4%EC%B9%98+%EC%B9%B4%EC%9D%B4%EC%84%BC%EB%A7%88%EB%A3%A8+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "사카나야노 다이도코로 니조시장 본점": {
        photos: [],
        placeId: "ChIJ7wioW4IpC18RpY8ZVvVXm0o",
        placePhotos: [
            { photoReference: "AWCwydguUxKLMcN9TbRv9KctxZRtmecyM2gCAAsYVgB9gBeijgCWwDxpZEmef5q1nermUJLE-NtTCcHfmoQxFz1l76c4NfIyNQtRvILz-Wx2gCJ5-37sZBRciF4PjkgKS1942RmRQNpF8p76d8A2uJtfSt3YFKjWniOy8KFEPMxqUFRipownzi_uJ2nYpmgrocEK9dGQtGWtCPS_81iGVOseLYQIedMMO3iXoQsGx-UW1MqYiJ2DkhY_P81auNrGL_0uPga8k9rSAablkLUYRtg3jugDRoishpxsiWdvdL9JEkCGeyFZ4UrESVahY1GIUDrFAyfJN6D92vqUa3J5QjocHjJ13Df522t9paVJqo2di2-mUOtC_DZmtcUFeIPPZiqATDhd_xPbXel3gRxIYKG1AotAMaXkZtOPjDKkO4W_ext6lsK3RyBePlsnBzsPzE72", width: 2600, height: 1734, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101613009396753261907\">ALFRED PHOTO FOUNDATION</a>"] },
            { photoReference: "AWCwydhDy92kXXLxbY1ZT78gbMleYwVhVmyJ-x3xQaZMhCDZ6bYuBQEfckqef4x2o7R6xipa873peZ3xKzPWm03tcEnber2yQENozECFEDiJSuZOb-b2fyDFE0Zf2-5pZNQBb6TDWW93RR6m0HUriN9YYGu7XGRQCFEh8wbL5F5wNwYoChGtp8KQ8yGlSyFfcdpNWhOaQD4aKIxFkj_2jappiSrGNKpKI44DEYszlBnxQ_YQEZquoaCJUh0PKQJP785TLalcySNm688cv19y7NxPZ96I6LvDYHtDnSnU-KcZ_27td4mMSPfJlyTLsV3Cq7Dy3Iq3MqEunEeU5zlJA7u1Ixv_d7hacImCDMxAGB8ZcQvkzm8RfVAidHps_02wexbWhbAt4V7cw0i69uI7BCsKAcaSHDzzp9QOEjoI7JJGKqM0Jz_n", width: 1566, height: 1044, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100243293032325539607\">海鮮処 魚屋の台所 二条市場本店</a>"] },
            { photoReference: "AWCwydiqUVjbljdnYsqb_HMZuLCbcm0F-5FnQ-vNBVMPPzd9ef6YPpLDcDSUqrYfN1c0FCKnJykDC3LeNarp25az5rpUXfJROd1daqjuSsXtB8D8-u9sfKFc13jD5U2AyoBbiyLSgIcCOxj07A_8MqWmN6ASmADxlg0tg8R_eKs5iej2Ui9oszBDYAK3lYvTzTYe-3dnFWseMIZRAYEgJ0GcX6sTDuVkTulqC2yW22EZLNWEKI3CN1tFcuFNUu8sdV1T6zgM6fdMBow9ZI5OO-4VaUlMZhkqfRpg2rvjn4M0ENfc0uMTdE43TlBk8B8hC0cAy8khjed8WhbqPHFcS0dQQqFzvn7DhBpTEeJV0U1JD37xUoxDJ0N6i4-9I2nd4kuATMtXlUxZLoABTjCaa7HeN2T59AOADQxw5BEP8gDKIDswhOAjg4gixD99XGlgf8RO", width: 4028, height: 2689, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117845512658112363832\">K T</a>"] },
            { photoReference: "AWCwydhgaKbv7aQpk5ZCCvcX6jXmpVfvPAz2-7-AedMImPtBW5vK7b2Ze_arzTdM4w6JcYsI2464F-g6VOJpjf7rn2UdpsXJZKS4PAe2GJIrDGJKSj8GvkowSpVcFa_2v_q5kTlFTnmkQmP0Q-AEU9NlbXZ23mlAJ0hLNvRzm8EZilQkmLUNJ77UcpKvdq59AyT90egLMkBmlHtAtIy6D97fVGPV66mLLBMwKof5u760FE-3RhhAru6TmGQB59es-AvrlFfaJWazehh60zPNpSmw3hZtEvPZlgu2JydiTcn_XgIijiFOATkLgnkoTqMkH1JgfS4d6N6wUEQ9Q38KGaaPWdPyy6_VyOnhHtS8fBlfkyXiUb94yu_VEutvOw8XZVreZDSGnnttyyLAW9lWNncaKcGVLcQrS_TxrOqwvvMVedfgX6x19saVz94lrAbSe3ms", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100445203906937993594\">Torres E.M</a>"] },
            { photoReference: "AWCwydjWXoC8mA95eY5JLKai82YUJuys_ARz_BqmeoYwqcFULZeO-i8Ds9jufIflr7Uttvt8eDfJJqPxDULIFEIbq-beX0cIbmO3zU2Nj7MajO7ToiGIf4txORV6-ZMOtG0qynNAJ00etCWCZtOw_dWaqqA_DGNNDXgJdviRUVKKyH73oJwGSnL6-SkhinkiLcquHX6OKBnkb7ZpdhbbHU7bttdfZnxqfBRgIFVhSFA5kQytvyELgG42iuXzOTcKkL-xuPz_zw7YXjCPBrTAVIgbuFRukQsq4lxUm9NY4vVLB_llWe-EES98JEomyJ_iCbpUOuHy3D3vkS4XEJ9UHHzPQAMgokiu3rrQ9YQHZzIcmpdRnpgVW1cCPslnIrpNWO6hZueCqhhVO6TL0MTlt-64GSLKhtQmgYCXX6ZfK62xoyN5Gtdh7HXuY11OzFwMdQ", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109439814506392224036\">Sky Wannabe</a>"] }
        ],
        summary: "신선한 우니를 맛볼 수 있는 해산물 전문점",
        updatedAt: "2026-08-16",
        highlights: ["신선한 우니", "시장 내 위치"],
        tips: ["아침 식사 시 가격대를 고려하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 7:00 ~ 오후 5:00; 화요일: 오전 7:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://sakanayano-daidokoro.com/index.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5375987291419938725", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%B9%B4%EB%82%98%EC%95%BC%EB%85%B8+%EB%8B%A4%EC%9D%B4%EB%8F%84%EC%BD%94%EB%A1%9C+%EB%8B%88%EC%A1%B0%EC%8B%9C%EC%9E%A5+%EB%B3%B8%EC%A0%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "우니 무라카미 삿포로점": {
        photos: [],
        placeId: "ChIJ9a9vKJ4pC18RDdPwRNvPVPo",
        placePhotos: [
            { photoReference: "AWCwydhKMOULdFDoOJutTwMHlbIOoPYPO9_R8u6PjYJsrr5kFBLDmU2rAZmxgdVOre3CK8Q9ck_tkNqhCHYc9BeBhdSafeeVU6f9pK4P1H0PixW_Sip_v4tTrPKmKReGbYCZ1L3AmWJrn7GJI-ATHqUMGuDxAvmnRfGMj-oswsfe5fMLdIIj2jhVxDu3v7pMViBIrGF1MpQxKaxAz5DKLZr-pz_S-kQi1I_ajq86XcHExu8KKO3QZv-bQTBCOFvhRuVm14Pfv2xyQ1ZkQo3QT-hNZxM77C62fliizVWqR3txObYO9DkYQorloyC-8bisVvkPWm-X8F-Renc87KipKxIoKUd-IPkC4gG6Y0ObbG0tqF9BzoQ-CdxAlSUwOGj1tWKTNRDfti_XlONRuKnPjINVvZStnFv1daOjucUmFT4g13GeiEIW", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111113937893296315885\">函館うに むらかみ 日本生命札幌ビル店</a>"] },
            { photoReference: "AWCwydjoTotfv4QhpgvWZaosuiWF3L25apd9StWYrz0smjEQj1p9ZOYH8bIXicO2booWzzo2eYOsA3vtcjh-P4_LlBFzoI2z4CqQ4KjU0U7KHMZYZNgG1ZJGrQYQu4RaBOiOJTmFNh04YhF9iJeapfdPMwAIXEwscokAbiz2BxVHynsrCYbEqTmnZUtdNU-J0h72xyRGtOB2cMXb7ck2oPQvPXsbJUqN6jjid6McMkw81JNF77RmiSttDAIqqPdXNIlIqZWlbiVtsn0P_PIBcVISvtU9IoMjcmLjnakPYLx8nFnPH09mpu6fxFHBmXNsMU-FKzjcd97mE7-Fmd9k1qd_dCkyS4csY611prgaFTcDQGlJQVG0EqSMDcHF271-Eg29PeCAp1DqCc8JZlgNsu_7thZoEXu0iLXPkQgkdIAYIdC6GUwPAdu5FZthrPK4aKda", width: 4000, height: 1868, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109680079425020229775\">NAMELESS The</a>"] },
            { photoReference: "AWCwydgZ65sNDO73Wuy3aDoMRHpiMpSmc61mAnwQgrAIaCuwl4oKw02y9aEb9FQAJ-ELZEXK7JbOVAOy6_AAr3ko0Kt5T9cnrbq3HiE8GvKMgY_XxYWmInorgMkSi_vsdsPvba-bglhAXH59V2nMtlMKz5hxQSYcu_rp82hx-2ND6pKoONVtiZR701Mn0VPTIyESi0F-7RuucYlcgI-4qbgdbrQqUoL1Z3UGz_FJskcuZrgmkS3ySFD5PC1jXlyiGpwCe7Z-Dw4ltlQQ1IvtgMzbORK4-eKH4dBF6V5g1elmYpSXcvHg7HA9yJ7q--CRcKLUzAC2BknutCN0A8qp2mizm0LdZpvapeFXgEjwjvpaxpqN35ztvkoRkIFLZXcG4dqONcoi5auH8rEJGYgFfHxEKQQy0F3i5wqDq0Boxr0L0lMrShac", width: 3036, height: 2418, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112948292583858781757\">函館うに むらかみ 日本生命札幌ビル店</a>"] },
            { photoReference: "AWCwydiQQ0eWjBZ4WYFfUQhbWBRg7UpNEsIxEvyGcZDZ2kNmh1J4iX97EJ-YDopqa6UJ7igdWWxfr4EbrKPvF63sp17ybJcFzbzR4v09vdjuxb5OT4_a0GsodczELIaxUN4AlCfh1LCfIeiv4Jm1vp_Uqr2n8YnPeudxw20Ikw-DQCsgJGLft9rQdnv-85SeNM6mrC3u0sxQ9CSAcw1edeDwuUO_GLRABqS0igkW53NPR79m_gaRyvndJ2rP1R-tDdn0szEPpNpk9oKkJmbl7-4rWZaxfs5mf8g1CiPpWQ0IDSj5YrXcwjCfP2tIm1ApSUUIUErDL7aKHDyY1MznzfbjkupQAsPihC4Lk4Z_kNnjCzPhREiP7rHRXrhyBggvPO2FonWyh4oFnbWGawOjHPpU21VP_SbpzwV3dG9Uiyj1vDftZMuBNQP8HG1UuLMHFA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106500147138896187802\">YANG GU</a>"] },
            { photoReference: "AWCwydgNDdj8_b3FpXJ_AHMgF6pj3ns1p_yV5gFb_AGIfl6dgcR6pF8WWUqsG-evia3tJXKvLFc2CZarZ2wESScH1xGydt-_XfBjnJcyR4X3IxWXswoYyeUDrnzfi583U80feqZSjYGm9KECaVw_LUMOHEKYt6yu_Lxw6B4jW2mxfSKcJTsLKVxKTIuEGJF1gj-EcJvUECansgKjy3GqjlHROj2Isth6WCjWRn0HgdrFypc0LH2a4y_gatghY2V0PN8A8LRuQ8nccDq1qrE69-lVkO-F9AwgmkYmKP9bjhaakkv6aasc-O5iYtkYvFD5hdw2Jv49HakuIWDBeSO1NKQaApKvcihWAVwXvwIniExa7wJZ1oyo49WPzRYSpJuZjOy-j5TmCNG_O44KwHZ0nUbDmXmIlnYF4D_5-VvIrRA3kCPrKvxkhdi3Ii9rh9xYZA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100847393408594137906\">yeonhwa Yoo</a>"] }
        ],
        summary: "우니동 등 해산물 요리를 제공하는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["우니동", "해산물 요리"],
        tips: ["오픈 전 방문하여 대기 시간을 줄이세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:00, 오후 5:30~9:30; 화요일: 오전 11:30 ~ 오후 2:00, 오후 5:30~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.uni-murakami.com/nissay/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18038270948187099917", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%8B%88+%EB%AC%B4%EB%9D%BC%EC%B9%B4%EB%AF%B8+%EC%82%BF%ED%8F%AC%EB%A1%9C%EC%A0%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "만텐야 덴푸라 해산물식당": {
        photos: [],
        placeId: "ChIJPezIcQApC18RkIicEd_7gWY",
        placePhotos: [
            { photoReference: "AWCwydg2aRyUdg0-VBMhXUMSPY31vuhh2ODgQIGz3rDkhuX8Ng1GAkONWmu58UX3Y3Z_q_81AYvn1o0FneSoT-REG7lpU8Fs3EoxVtV3EUZRm3e5Sv4PoPemgioiZ51NEVgkFik0_WAaK2Ji1dn_gieiffymuh1Qo1mmkoj9rqUvVNTXjwJe_ngr96khcTap5F_GnTWCHJvEzxGzgSMQkXoQd2OcuBx-ydl6ZBnL1HPJVg95DM3-hJwQY7XpqHxvarIIf2_PAxSXFl6xoAdPiQe72UgeSVYiD0iuTlU9LcEtcTbJgjnDZL28Pe-rpb-MfIsYCV1G2jalZDTwkSX3oydaSIBpNASz0w4qCDZ7oRIGmKDypqgbw_2QIsnqGZ-nzP1Vm3V26g7jiTIGaPao86z4O_7fZdMwLMnPvnER66jHRXyqRPVV", width: 2272, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109169512491851136399\">天ぷらと海鮮のまんてんや</a>"] },
            { photoReference: "AWCwydgSdgEw-fnKjkBq0kmMtD_Co03C4ddrWu5AxRdlpG0Hm9y7ftd_ICU0zgSQTGXXrEUqET0oaoJLsJgRL1KM8SRLKLv8lNmZMemphQOXOXqZ9i3dPqJo2HapmZHJrTRuIk4KU4JDUoBszxfhhFrDWp6mysqT4bEBH4ysoFBe0KopBQDqy2AvRL7fedP4BkUSOfsVdK1b5DMhTBEMeLzQAqvaJ8-Su5O2-Q_qjXj5HCJ1b2S74mArI4Ppb-yWTfqoHqzN9azteQHJYDetYcLpVII5375Lt0jVWnN5RWPxic8CB_AcvH0W0n2H0LD8kcW8a_DbjwWLwxpheo_0zDk1R7bDTeE3ukgbXa-hf67qYzlddugVb9SmLQVjr_UaP3Iqu1wBvbIjR0FS4WewERWElEdwYAlB-sgdlSNaBAwngH-q_gQ", width: 703, height: 430, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109169512491851136399\">天ぷらと海鮮のまんてんや</a>"] },
            { photoReference: "AWCwydjYKHBB9TL9GG-geDbQRppLMIC9UIvdTQQJQ04QOnKYZg3Za3auOqiF838rF_0iXp_LiLjVjX7SV32WzpmnFELDj7NXeXOxnajDawWdkssDBctp6LJdXQqIAX_0XKtiyK2kVY8pdhWCVz0wA5puDJeJaqL8qhKPEh1jt1WMLVZuNVlTrHf7AFHxW851ihGoeRNx7IEIFotfBPVGNcQEDERlR4pSX-Fi84mRoZFaPRYgmhBZ8ANAadI1w0SPCmqzn_XCChiypv16YFk1xZNs2LcKtzx5keNNo9XR_B7bZiBqxshwpSJwA3tyN8Su-ewdDskFmoj-f0x69-b6RTBteUNx5OLeDOYNkCv3IzWfc_-E_5jeu3XGnOrTkTzu_-Ow70w5EdLgM6LXoE1Z7-6GbqvuVIuBR4yYC4rwCVbnP97L1Fy7Drib1nmuetwZPb6H", width: 4800, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108731724333999907440\">祢津宏昭</a>"] },
            { photoReference: "AWCwydjZFtmhY3vLF2dZTe5fCJTKnhpjmnro_2MECL0IUq_n8skuyn7TN_Wf0LTHL9zRBdsppUMjZTYV3oukOLGoq96L39bqy_qHvn2GSEeQcT6s_jvOD0Y-86ahkigzl4ECza7mL8VG0hoxlCpiVfFeF0a7Gpe6Gcn32Ho9SSG78sP6Q10v17I3yM9TJcLbezn8lBj8JXvNV6pDi_4rMOQ4xnr5VCMpTj7zNp24L_AcDNBYTVFA28afDhC729JBj06NS_QSvpcNfNhM5eR2UOhJD5PkomUur0pdb6nEeevnzuxFaUFt9k9B-o0YFMbPOKkEnvR7ToMUNU2MbNhzb-qLs7NZwiUCppAh6V6oro3TDgEYlbKvUiQPYaFNl1GLQ_uoWp98xtwrJgMPEfRVttidAMdbWuBnmPKq4XUgmak1uhzBTvnr", width: 740, height: 555, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109169512491851136399\">天ぷらと海鮮のまんてんや</a>"] },
            { photoReference: "AWCwydipPnASYeQBOqKbp1lyi6FaU4LASxX7t7ACzqJLk7eH2y7TiT6AoZ2tgRtUrAr8pjrvwrNM8ptuX8cjyHBH8HgVxwGygE4WAnQj1PE_zShmKuxT2DVWJMp46rQEvLQuOVzXox_aEeajNSFhxc7Vn5vUWVnTrXNxdY-l4VSntw6yev3CunDMMssJ3W5ZKIaQU__bzAqzxHvBkaPHEhn8l4y20SJ9Sk1kIedO6UsvQEFj7rXeJRAjnxU5Qnh0lNy6mDDRHYGJXI3szBTDrkyTxw1VwdjERq5tKrFbA5_dNwJONLZMyUzMzjubtkIwE0Zer11bQ18xjBqGY5VN_cJpYAPMrbws1RWJsK1rE9lCLxZhdy-1QERVDgjpuM_gk3RG-XRyr2RqSpYMQg76uPNhse7OBE4jZi-qmFtlXmZCTQ5GRQVBD6zLqTcy9Xfo4Q", width: 4800, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108731724333999907440\">祢津宏昭</a>"] }
        ],
        summary: "친절한 서비스와 가성비 좋은 생선 요리가 특징",
        updatedAt: "2026-08-16",
        highlights: ["신선한 생선 조림과 튀김", "친절한 직원과 쾌적한 분위기"],
        tips: ["영어 소통이 가능하여 편리함"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sapporo-mantenya.owst.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7386461799356074128", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Mantenya+Tempura+and+Seafood+Restaurant+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "고츠보 오이스터 바": {
        photos: [],
        placeId: "ChIJ59O_G24pC18ROB4wCP0hyt0",
        placePhotos: [
            { photoReference: "AWCwydgKnymsvmlFUYxuIo5Dr9vO7VqxTWF-WJJjmU2jntJkR_ZzkT7liz1m43WfbiHOrQolsqH-l9KWnNgwo9lf257-mRXClG_FS-zv45HFguXfqiAqHysl7x5rlAAaziTkwsyGh2hApoEZCkltNt7JClo6dtvb2uc-sNqoumJcLgrhkKAtBMWHxgApDjKJF9-I-3NoPhmsxDBJYAea61F7EN6xRSQAA7jjnBZu_5jG4JWwazvIj_deX53-aj7aSXAkg-QVP3gQB3nQIPN5mbv_hJrbdoo_UdbTVMzTcTaD8_sOn-G_fCiQmxnLsM0McjcdDPpCdR5jEu5aSRh1WaTqDWNq86lvBwd8wMIjnz2tfUropi4gMaDSfuxkkMXHtIS0DBrUOcyLFszovEIkFeEuKYD6q3kGyHnWPvp2qqlog08o6T1xflW2rMLlruGwwg", width: 2300, height: 1725, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101613009396753261907\">ALFRED PHOTO FOUNDATION</a>"] },
            { photoReference: "AWCwydiwBjBD3ho8qu0QV-4Cp7hMQjFxupDPOr0LYu-2qFbxrDcM2CVGOwb17gB5kY1mAWsj_l8N1K1-qWYVfWlC5MaiSJa9eN1yMOy2FqSx4NddKOc6OCXlsshkdHRhDs5y1gu1K6gBuNgYXSPy9hh1W_ZDGjVgC_MkYiAIurDj-bVti9Ot7LhuHzZdKlidlVlgWO3bsSOFxRzCfKWDu98tuT_M0pmGzMbuhVi6mR8rBt5Gj9jHhcIT8_fgUSk1M5gJajZP3faA11zNxsompTE8KPl_VpX1sWHbxOBW3g_nL93lR1SbnFmy_DwVVWgpNkJ6v-J9hYDxf2sAZduPttZHsAR3EAzY-8s1_I2iBzYKg8R-bJ3uHXka46dydFsui_XD4f9b4YQhjL1yNLUbZFnRQ-d1JNFuCvL9P0ZpplwKTZTXPrJrNE2Q7tirGDUYqQU0", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116298962176754011988\">Eve</a>"] },
            { photoReference: "AWCwydjk1xA3UsEaUM6Oo6TGiltHwfTxj24Lbi5BjNobu1_x-dV8e6XAxYTFyMjMf_NWUfuiAj6sxGwcLPZ-3Jf8ZZ5FCORyeg8t6mwSnvLUi_ye5GPwrk5S1E6lKKzcg63yLPK1vt81vIgVmGmRYetu4u_WzUuSq17yrwOeRs_bufM7pSmP5z_nwO6AtQSb94aKxIzPaQloVNlP1B8FFR7TRpFLgFBE837K5Jbu1J1rh0E9tjTBordvkY2y--08a2vOp41mHvVCURFZsJdYjS4nM3aZcY0OJSZddWrrhhJ6c3enk1c9ey50FJKcsZBJX070hWPPq0EOdBH5ijDM0asQ3lZ6lCf-iKgzPYxqXJuuMW9G1YsohmMW33k0He8F3ydBNjFdOxHzUD3ibHhnHHMbuKtXVl7Kp4R7xAVp4MYoh-l33Gv50GN7plGLb-hNNQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116975005436487235352\">John L</a>"] },
            { photoReference: "AWCwydj96EmlEY53P6OqhI-3BPUz-Isv8tpB4zgkbBBwz8_W1-9aaFC85c9SH7BPFKokK1BXPZGsnG6srTB0iwjqDMVI7tJh4SdYheO9OoxwsqUB4_ax2KpfSKwjuHlTsXgDEy_cRHvelr28TaNtAGs_kJqb9VUrXwRGjfdYgjIq8xSKMSHvZjPReWr8_CfItnCOglY6V4yROQX36T0qRuOwXWw3ILAypmenHxRjizW-1X89JWgCBbaDEV__EVmh4BBJRJWRBQ_HoFjn1fN_UEnWv0pU9zttFJGdSl8A8852QDMSY8U0Uv3H8rdahuk7VCx9aFYSWYaJvrSR61oIbTB0vxeBRBXBiAYWqkdHKhj2h0rK1LiQXsb7-N40x-8vvovl8dWHsao0to5M_E3m6_pGxa2xNL1zeBAzeuWybgulnh8r1H7hGAPeDqMRqLNBWZ0O", width: 4032, height: 2495, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116975005436487235352\">John L</a>"] },
            { photoReference: "AWCwydhsUopDpXeZGOfkpbCAAHwb9aseuQtu2XwcUxDymKpB6Hyh4K8YV9seeQkRQP0tt9kBasGYvHY8H7RfUSfar2biwmCDjCqxGsP1FLNQcNm-lFHT7o6-hlYxCHolfZaJlA7nqGC6uyHU9ljNa_JeM1GcEtAxk59ewZUzHV9HjyyzwMDo7Asxzk1oFAX064lBnRUoY4bcmHAkEpyDLsS3rhzxUFkgBSjfRkA6CgbSGh6JqTKLv1AQhuezdeHwdu_Q3SV_sUFWUnHdoyAsETc_URxmC1UcVbPvRtHRDMerm-tBIDcc8qrjM911Zt572eAJzgJ2c9olIfZHPp4dDPSHMV_rGxCUBW4zQLwHFAQl0pHPAy1TRvJZgOYwQybi8aes0Is9R16Q2UpyR0edKLXtdIzSCFwItceCU6NlPg1PKLgT1Pf9PpdWg07qkyZLjC3C", width: 1080, height: 817, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118338844416336408686\">Google Lum</a>"] }
        ],
        summary: "최고의 굴 요리를 맛볼 수 있는 곳",
        updatedAt: "2026-08-16",
        highlights: ["신선한 굴 요리", "아늑한 분위기"],
        tips: ["저녁 시간 방문 권장"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00 ~ 오전 12:30; 화요일: 오후 5:00 ~ 오전 12:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ja-jp.facebook.com/5%E5%9D%AA-gotsubo-375930525801480/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15981623598325440056", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A0%EC%B8%A0%EB%B3%B4+%EC%98%A4%EC%9D%B4%EC%8A%A4%ED%84%B0+%EB%B0%94+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "머메이드 커피 로스터스 삿포로점": {
        photos: [],
        placeId: "ChIJMeHdZnApC18RhUmGUbAfkSk",
        placePhotos: [
            { photoReference: "AWCwydiiwa2L4g9PAVXIMTsti6-FLv3pDY4bXDT1hUbdylGfmOONvq4YtWhzFbLu-oz-mzM6WBwBdWGf7RXMwrje8wkt864-9vkC4RVoHUULpc1QyLcFNFM8sSGGBfQpbrO8TuNOIy4_aiJ0F1050O6RO-aSFZVO_n3jTvVNJL91jRV3XpaImjsbQo0UgdaZo7axS8amd5he7CH6j8BqICqa3PMdJWYv4f4LAIIoLRDqA39Wpx6E_bSD6hsTi0zwHXFLZomyFI2kH9FUd-Cv-n1LxDylj47zjitGoKOJUMhdIh3VxBmPkMb4JqcjjOGWouodTt15w3Uta0En2tC36ORoDfx3ADkUg7_GJK9rzGa-WxL6cE7J7JTLemKmsAJSHSKGiqyfMr_Dqa4G4NwpH2MoZjeRBGgy28UwH4BUPxOGBMdnJg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111593601361604297514\">Kristina Pongtepupathum</a>"] },
            { photoReference: "AWCwydjLK6nghtxDcIVzr3D-2UMhjnD5cTYyEklD6niVk8HWYky19ma1U63Pr8RgEBPUmgYHKAI213EMvuugZGTYodsEdnj-lfvqfmEc9EfArYKyvWer1lRdz6oqY7J9OEfTMzByO75zWoecGyr-3w25mA3lys9vW7W4SRDKONuKKU7XJpI2YELYVrynAhIfFnrdLvRNdd99qTnCWwTZ_ELXrJM0ozhPZTY7DpUrEUbDRiqBmkv-px_RGqDGxOnnJn7GloESbEeRmeR7EltACLn6QSiLLgIgKqoLKTjN3OXNL9KtV1npwO3ycik9gVqC3X-MyvrIjamZ9x1FAbMjZNNUZbLfCW_-V0HlKXWsGEFT9uHX2V8JmZNlUjpqBQY7Alqtr7ye6PSeqMdyV906dK9De342xBVU_j5JpZaU_XpKlaL1NlCsrzbYnhYX3V24uDVk", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116256194681884772276\">Phakphume “Gob Brangus” Saowaphak</a>"] },
            { photoReference: "AWCwydhosp6nQoMxG2G2Kb_pck5RvKcL-HMYGAHmzF4K-xRHokyaoz031J9qAv2BcQjU43BQpN4b7NqZGuUmayn2wJdaAEg6ljIocs_9F8tYmhQYABMAW9qtOfnAPnEZMM6psqKn6BVpz0pAJLmMYcBWr_ZeX6jP7W6HEQfFFCrQgdfgbnfkzA6QBjHUmy--gHA90Pow8lM2GwF2cXexEz2kMgvkYt9rQHBEMY68sy_fOfYcLwyz5Xdkkxubn9mPkGZxhJqF-c1Z1IIIsFQQm3QixDbc5opqxng0QR32vMGIG7-GCi2vCPoAgVmQ4E5tM2b_Sy3s2thcBXD0ck2sW8sxjjShul6zZcJ7vZMCQFNOkECPobQ6Ro1yUko2cuxWgqsBCtxuuad3NOfc-BUi80qi8QsaSeJk35C7NS-7f1kyydJuMhP3nUvsOFQ9biu0UIQr", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101315838168166607249\">J L</a>"] },
            { photoReference: "AWCwydg7G_F2DXc0wSTj1rxOkT_yPIYmLdc3maCAt5tHSV8VakawCempouf9yhvCADEdJb8wwBNGw6TKrb6cgrDVvNXlFst0wdWa1JVfmz06MQfHytu73eVkhQEYSAN9pNYjTTkkGUhI7W4jLhTzkRAevdV1ySmSm0hgArGBjxaN0zFyK18CZOVk7kBreb4C6HSmkWD60YFLynKgZQC1dW3UDuO9bQCnqxqBRcf5NWiAY-fHmRojX4kwTDyV_qtnl1wRI3kEUs66VDX9zYUacyktIh0LI9mYOq7ViA1SDWUb-jfP8LBSZkjD2qkvVaJQ8mYDzlY_ztwyxCJ2NlXZmO2HERbZplwm2jh2ZA_eABPBBBPcLKM7L8JOR5CMiVQpAOaXB7Lqf9TZVke15DZhdqjBizmUq40c03DHToqpC1po7tVA6qW7cXoAhxbO5qc__g", width: 3024, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111509454463146942796\">MOONSOOK (쑤기)</a>"] },
            { photoReference: "AWCwydhmFoVYqwJMDHTLVBwmp826GRys836URW0sJBIbOpZwbFrboGPTvqv4ww1LOSglJj2EuX_EadZ3lAgPcSQkCeJrjRdUK_3ExsTWCQ7DhIBu7FciLl0CxEpnyWo2KnE6m87Oy3JMkZrzi2kDZJsfBOsJtFiI0XanWMjRXtBxCCKmgCCU0ugHabtvlNYCKc3TmePVBSF-4wQuvyxg8XO1BSj6Ja6sLqRsPipKfOyVStQpIie13FCXxXL4d9UWgEuZ-olWMJP_zm2Ac0FSRiH0B5WQvhyj8RJ5glO3cJ-OSK377W4SkB5hSIWPl6iVkWUxNUu7Rrnkb8fDDr9eCfV10oEV7QIIJ6e2ppDRgKSSJPpR6u_HGp49hgj7MGRGCKKC_pevrnTAoeBd9eduD6fa-fGbk0xRgWJkKUIU5et_Mw_K20chBdXpPB9-17GtJQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115553297474837312903\">Paul Wu</a>"] }
        ],
        summary: "높은 평점과 친절한 서비스가 특징인 곳",
        updatedAt: "2026-08-16",
        highlights: ["환상적인 라떼 맛", "커피 시음 가능"],
        tips: ["테이크아웃 시 직원들의 친절한 인사"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "라떼", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 6:00; 화요일: 오전 8:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mermaid-coffee-roasters.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2995210069320550789", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A8%B8%EB%A9%94%EC%9D%B4%EB%93%9C+%EC%BB%A4%ED%94%BC+%EB%A1%9C%EC%8A%A4%ED%84%B0%EC%8A%A4+%EC%82%BF%ED%8F%AC%EB%A1%9C%EC%A0%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "고토부키 커피": {
        photos: [],
        placeId: "ChIJawgc9YIpC18RJseaorpEDA0",
        placePhotos: [
            { photoReference: "AWCwydirgT2VNTVHlHd9qKWGcIYXl_TXfcduzp9RKgFiPTv2OoEYrsMgHTCV0vJiBlBGMxguta3ithXiv40WhuuhuKUWAR3XHncHCqw8elguufe1bxC_0lnZOKDzcOZ__IjgvX5QguE7U_cHiGfFWPr4k-Um9ii_RpQqWHT2r24dH_H6UMkKrLJrGwyZu4DQCL-MnQDyb9Sa23r_rC9aU0DmZLfH4UzkI9k3wVE6M8v3pj37EoshuM2-mS-Gq0r9qzBBw2-3_dlH_6mm9kyJiLwR51LYCC0n39tQ4oJbfZX3TrdL3I3MRsozObzKZlvfYs47pTKq0xkKud-AjG8fL53yUoyrdQQq7sJ6dAxuL0m4XBarPoD0Jn9VCEHbMY2V4tqkurXpZ37zBrtPJbuly_-cxiViVP6nxrUiPoEqud49Bdbo-XwiAHHKL85XqfL1fg", width: 3072, height: 2045, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106792994395763452142\">寿珈琲</a>"] },
            { photoReference: "AWCwydhp1DevdNaKw51VgywmnsPbC5cytzjJtyyan0vd5q8nLWsrInQENV4PNSUtXzdsAfpf4CYPNdS_kIqZvBAY3rtMSk_dL8zi8_iL_cGPKMPjO1g6j581bxC7cw-UHw1XYx3Y4KS5Lg8o95gnJQAP9hIWDjT9PRdXvH6Wxi58hgiNDs3mXnH-Xr8GV6oUTVZnoGy3nuYnmPAcutnYv4mEoBrQWuveDZn3ILDOI3OweCFga9CKB_aN8saXUbtPzzo5lZK-QxXSdc2K5vJY6ont2G73r6SK145NA6eJcpeyFm0Mx-IoHIPhTAYBheR1C1GOhSFeKMQ_kVCFV8gvGxqCt_KTsW3NOlSB-1HbCODuWm-TWD5FOpZC99C7YMujYpWawE4PUwzvjtmCc8-ZBu3_jAjHw4o-5H87uHfgzY7dXs7tMa_McMnl72XXHXGSja47", width: 4800, height: 3377, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106792994395763452142\">寿珈琲</a>"] },
            { photoReference: "AWCwydj-53YG1RSuEXJu9mDf4fPe1U6EZWZ9oXFUp6RD8ChrMEbJEFoUIRsTbw5jidsGaYgnEDqlu0d_d9Of-8kaEx-7II8uMGBZOPeBxYfYStmxcQd4_MztNUwXRwUWq6M0BaC7lfHCmoIlvNtcjZB988nYexCEwOyzJbDbE-geKsiAAoTCTQF46A-PSlirZaXeHRCS7YHmLFK4eg2ldAVYdLzDayNgHposVABdexqtJB0VT6tPZZdACQ1VwpVDyVImS5HSAUplxRoI7NzaPBEwPd6zpmel1JEEgPmc0OD4SWxST7lCRZyDigcHQNRTLPiSRgi_4RtFbRbKjnO3Bc3lisA-KiX4jDEPkEkwgLri1H5goqyIKrfsttYHlOfdXv_F8CEXfWpy3Pk01m9zosaCppDXC_9r723r2K5bnLFEetlEtI6aeQu5pJq3w5k2d_gF", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112620976702489068608\">Winston Lai</a>"] },
            { photoReference: "AWCwydiEyytjsPBOZanFTlsxTYTqfegKkYyExz3ry0mYEbnr3Qgc-VExhsy9lRWFsLa1iNfmMPbLOMGG5wy2DvRWFJV4XbRUIKo5xCaSuXHXe50I10RVw_30EU9Oq3tdvjladsBF98RUwiuSQU4AVqT52wViEn5XjPf0XC5wcyxv5sqhLypR1CA7NzWg7n0rPNtoQxi0ZD64QaIvSm-sZYlTLAjMxJCKakLRz5_ZOHkv86cZynjmIi1pJocOe5umwtKqhsnfGJLjKUemsD-UmBk04ejHtKGtPtAEzNHMl3z7pxbNwhvDJXVpzGYvs9GebJiqf2WhH4YXdLXMcqOGHkvotE7VdukeYANpzlVFrdQjAWS0-hKBB2tQa8eBISoHpQVm61CC0fC_Z2O9A9rSBPrxOZqDD7Len_GF18clf8qaMXRnxKy18Ec6xMDDrOEx6paW", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118139654694590480863\">삐삐</a>"] },
            { photoReference: "AWCwydiEjrxQLeIFxbmEXDYjZZp7J4e3RwVdDp2U1_EMevrulUXCicGtKbZrSFWIoWlaWlMrlTy5wH3DVSqIpqJO_iseghBJkm6ehYI3_RBzn3IfVLA_qDmODnKBpaLzo6nn7nsI4f579I1NR6Ajpx6CQeZkUrdaqUgtqSaOjrIKgT6nxsA7CNDqGtbyCNH3v2_nGo-o4MKJM6w-SqBT_c580ejcOO4UczgGNmvAdINUV0kPehfnuYdQ-sRxmOo73Jpkcu0ZIAhGobotnH1BnrDMV-So9WvOTSksjqnfFjfn-EBIsBEvztuYr5P1RGT3oBQFcEcBLZGgjwLVm47-Fy_pZH7XRZ9wFLTCkXTPesMHHBoD0sr0SN-3wnsZrWF4aH3UOgUTahxAzPp9gkZg5GStU40g_Wcq6ItgYyqBcIGagO82NdvI_J9DEerAqC-mnCbx", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112620976702489068608\">Winston Lai</a>"] }
        ],
        summary: "다크 로스트 커피와 토스트가 맛있는 곳",
        updatedAt: "2026-08-16",
        highlights: ["다크 로스트 아이스 커피", "고르곤졸라 토스트"],
        tips: ["기본 커피 종류가 한정적이니 참고하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피와 토스트", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://kotobuki.coffee/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=940201990596249382", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Kotobuki+Coffee+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "바리스타트 커피": {
        photos: [],
        placeId: "ChIJL6ONVJspC18Rl9-QN-T7Qh4",
        placePhotos: [
            { photoReference: "AWCwydgo_s3ESb8hzaLkcAzn_KugWoqtU_mey8dORqcQ06u5MZi-LVR5R7tsmVkR_zhAaocc22xndfCGZIZgAdAYWWbLD7rr99I3XlFvtdUMTrb0DzzfkrtpgBMAfA2b9GTQUSLlALcmIjwaImk7AavJ7jKksa4PCvccmm6dKEUYxT8XC5UXdLsiisA7s8IGMv6nwIdPPyveNGi3mJwvIBpco8tAdJjcGCihBteQ0oOjB-6rQbwR4-QjHFpcgZU-c9li3bQUl-yqmsqAgk4b5-Fo_MGEtnGxoZSBIMaPx4vZzWTQyXI_e9VU4jxk4-hlgTApC0A1HJGR3y22qILzAw0Wk_uqapTNdOoIWSKOwpbY3s_3crtXXoo84D024iRysCIJXLk6zxf9hJaS9_ZFzpMuP0-QtSKqkXtejUAflOwuWhU_z3o-quf7PHNkBqWOyWGi", width: 1353, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117014920091801652760\">류성준</a>"] },
            { photoReference: "AWCwydhJpWZTiG3CL6AA3FsnA9v-E2wWQBYMwh81HikbMlwLL19qsPJalnr98eWoInkhqQoPYU3lW9ZauLKoX1lLR70aqvwpvocqJ-_vGWJxFyB8laeydSFABd_lYh1Ix9mysf29CCO1VJvs4LCs9GUCKZO6Z4R4qhsqnSk4S4VAzqppNIobvuCvwdCI8IhoKCkT1JoebWiT8YGs9ttl-EVHeRS1tSPVJi2CHLjYre8vRsDJqbhLuJsEY-CqlyrGRYvdRAXc8hsfktk4ejF0ov7iD7Ivg85avtYuVjn97b7FlwJQnGRzQG9-8VobNdYezPWnebIpKKMc_73V-Uj9QdasXBwxT0IeL_SxEZzl3EyBCSNFFujAZSs1XhtOQRtV4uBpt3NfHLEBA-KP77eGiNJWBSWrlTBjoTiVrsgAbQEF1IgdedCSBoBuMU1Wv_pgqKKS", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107456834941986649995\">K.ヒグ</a>"] },
            { photoReference: "AWCwydjjncLmTN-qE5zWFUTrCLFAIBBN8GbCjvnkRMTtrp-T6igUlTNJggvYuSTVd3zOnHt1iv-u0gsjSoMf7i_VAS6XDyKJVg6K0skUnKM2yDNlsOErB4Fg1m_dh-IinkXWUzB47uTMHp50J_Ou3kifPDD86Zk70Mw4j5xlx0PpPLBMdshYDajaiWyhNdJljzF-Ys8vU4zOAGinNFWCsErFa3miuASvNcy4sGdfFI8qwl9lPNNcZdGLkOsx9RB3koNQKZ2l62OVI79hfJL0La1MYqyEsgof5yPvzT7Df6QM2YePqtPDE3H-VuJXwITQLJhwMhWVuy3teXIEncO5bMbVHmH8E0WxgNnD0rOcRLsnZS0uyCP48NaGwUT32vnQys-wKbVMQnuCF5wJtxW8VPe2R2QZLCM3UrQz-CxpgHt5TbircKP2fY9gLolRmDVKcync", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100829284534179119642\">Grace. W</a>"] },
            { photoReference: "AWCwydiU4ljp50eTmA6P0qVq28vbFlkt-DQddG6_o-nuCrXRTdjES5NuqjxXXv1jGpu_lfcgp6zm8OAHFDuPYeMlDhK89TOX_JnVBhMUxNQXUq3QKMwYmshsuENDQzcWQGzF6Fipc2ahzkR4pLUjJZ_z89QQvwxFfHhq2GNr7hUg-ThbQRSQUFWgFb0tgluErQU85Xai9w61FOxPvE48dOmvwJVh8VBDXt5WES-qelC4C-mmrzh-yUjedISHcaFxCoive7mvmO6tm6yNBL6Se-149BApbPPolH8n_o_oyn1o6Y1wTZVbHIGTM5-jhE76MGUZ5jbyEBwVmPauIk25A2aQneB8Ktd1xdFdFN9y-eKMhGdZLHb_DD-V9Vdwsv5ku629W0OoGxn3R5nkQTsdwcUz7OhBBdjU8WeeYVvb21fXmsFllllHFyTW8JlL6dSbxHsb", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115730048946263392830\">Hitomi</a>"] },
            { photoReference: "AWCwydgkixAOVvSrN1WMGCyMZz23AuWRvKHWkj7jqmvRH-qeao4dSmsd5AUA01Q4pGZkIVbSn38qHlwu6wV_xJGHu7TkaODhQiHjJg8d1KHBl3YB0nOydRMb2zt-6QOgVuRKyy3THZVhBXcSDa8O0zDbSUZ3_OMdPgB57fDigJKJiNFBH0bzQ18crJnHzMEcYafpjRR3yqVnTmd29A-0-nrS_i4pelcQ7JPAK5CfTG93oSa3y3Z7Hx9jaw7C8AXQ9dKHeIyjPuHr0SXWikoHHYwXAcmPwRlbvyqTSg-PO0o8H-nCbqUozf74SdLLMDN36Fg_-HbZbJ5TytWLFEtqA_5gFZiIXKYCGx7kRUyH2RX0e-_qUdcDHDDxHHEr8rFfwozA1jx6NrJ706GDQnLRaLIQsgn1DT5Ib4FXSMVZwU2UKGU5SFkv-Fez_Hy86Fghuz0e", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104354322451291956029\">許方瑜</a>"] }
        ],
        summary: "맛있는 커피와 친절한 서비스를 제공하는 곳",
        updatedAt: "2026-08-16",
        highlights: ["뛰어난 커피 맛", "친절한 직원 서비스"],
        tips: ["매장 공간이 좁으니 참고하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.baristartcoffee.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2180582127204097943", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EB%A6%AC%EC%8A%A4%ED%83%80%ED%8A%B8+%EC%BB%A4%ED%94%BC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "마루미 커피 스탠드 시탓테 삿포로": {
        photos: [],
        placeId: "ChIJuYpyITApC18RAX-tP0EgOIQ",
        placePhotos: [
            { photoReference: "AWCwydiXEc_JBYdsXntkFPq2IJUXbok1frsOPHTmn7XWEXz1m8HYUFmNmB6Fz9CTom3UL_QynNJXAR-af4eGlN7qbFEZu6USVZXnBAkegQfP3-OC6WRdtYmTP9IqMG6ctrOxmn6iucUTg4UwqkPR7yL4iiWKAB2NUl25xSzVV1OwhJ-KLxzhEBdWtUChTbX3fsIkKqYWWSwDe9u7ms4m16CfBiGptrU6jhFX4l7eE18SfPJ4gvM969b0QrDhv-MrZmdCYT5MiCVPglCe1cmC9Dv0goKpdRFdtD29ZNFe_nnxPcA4stF8pN_u6cV0jigvL5kaKTI4eAYhuauJvzonja0DpmsXbnRPyfuwQgxqw-w-aKPEqM_PktPBPKUx6UjHN4Y8gtW5afCq5LaDDl4Uhc5qBBaOULE3v5JgHXPTHSKAkObU51tsym7PzW7MIxapZg", width: 4800, height: 3599, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104367673449245631221\">G C</a>"] },
            { photoReference: "AWCwydgnCkFS3xswRbGKwJzNk92qwhTwiJkyNCB0u9qQApXo_p7Cs1YvDUEVuYtYEMrWYuOoxcprVfDGFwzdm8AdRYwaoK5udUIWOVTxVC7EqMvkNnc6fvGU8McmBVzrC_qQlthIMyE32LBykmkiqWpy8iIHr5t1-f0X_n2CZIBpdkfL92t6jiL1-GSVwj9qS3znbt3M4eurmE-8iNTczYR3oEAyX58DX7_fAJ8d05g-wNlqSHtq8cnzRM1PKEeC0imLH_PrH2I0zkT6BC0ikrjWg43KCXT7CdHkni8nWgy7YfEBjPYgXSNZeSaF5MQFixOOhyAjjDR3Owd1ClOmgAzpftYj38RvMWgHMxYKnBvEkC5rynYicXZLz6Uq7Br9XhlSh4VHaQtIYfF1AEYA5Qyj7jP0QshPR2ttIPXi7_mUkrCgPjDOmp8CII85WQFThw", width: 2065, height: 2394, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104367673449245631221\">G C</a>"] },
            { photoReference: "AWCwydjUkehBQxs76wck7BmiVfHAeejxtSB6KD5hmJE8xZVvhVaKShosVgoJNc4j9_SVnyJqsu_aAW__UWx5fXijPxenB6pUKNg-b7B62PF2tzFfTdUSyX2Llh5_hPN-jf7gq0-PTOUMssWK9hW6Dgg-t1LBk6yQWVCVDJb4TBc_Y26WZJZKm6xU80rJ4RpUC2zefU4nN8haWABV43V4V6N8ScxZD775SdpK69yTIAU4sV9SRWT1l7OpWuVHqwmHFZRcOxsxo9TSLZEBuM-ge3l3PgF_M0vgL5NCNXJkT61PkZxmvXlv_N6vsnpWLVE39BiiGiCp-U14UORorgHH46eyc1cI7vsBIi6_1oeVmBw6zNoKm2kPctKx3M1ookTxPVDZN5ZC7gKMxr_gwPpO823j8qZkz2G31UQHvGM242aVTDcyEw", width: 1032, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111705652854763556859\">丸美珈琲店 Sitatte Sapporo</a>"] },
            { photoReference: "AWCwydjMmq141bXM5jPH3eygK8jdKNEXAtzHickPfCPsUVGLs7fUVifHgsH-3rsgXLVKPp_cQE6Z1I7vV6fvXTxgIVT_d04wyZP3PJxsQQcglob35Qf0zQ8fzmnLYOgetDX7w_lhk0BHnt94tfPFlshvrcyKfusGrv_7wlirBc76YSZ5-H4ydjcxJfrisGPz5yZbtGzTg-_4ald-SSL-8vdisYDd-yQz6qNAYowm_uyVU5O7ffvcJ9Lq_o5ofGGecShPhrE2h_EW-qoHv-ednp9gUgo98sX36M1ts3zzMwD8S1r3grMFCaj4WafQ8u0Ysjvrx064VHtoxcx8aAyfswrDpBFIF-5LJ4ejHFxcr2y_ylGwQnW40x1HEfVcl_9YNPOH7TkV_Gr97ECsoeFW_Kw8-ji2aHbAjjvMnrWgh0jFHobNk-yLR9Am4l4DmcJHr1Kz", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102034694324803035876\">JS</a>"] },
            { photoReference: "AWCwydin7Aoz0XkOfhG6ddib3PC8Niq7CcGE9JVIIPiayOMH2ezJZhaHgO1uxtP5Eywba-tQqH9X0OZAlQsaU7Wr8-_VN8k7xKm0tz2bioEHwBFGKhpQ9s6UnWOrImgSiA4plmnunyLVxfsGhJPprgOzOqGUNhGVzbbjWKs-96-B4u3VRgFGMWxjnTzjQN1_wn58Yt87hhTtZOiwYs1o2DRr_Nf8vw-4V2TTUnTkZ-6dku65ncHMD4lbeCK482AUj3g877NonPGN656Hx40LR3AUktogP6Jggcs7sHr4aETPiC0b0msK9-C1tXfD4uWK4OyYxpQKeuqUAD_YPpIkAvU1P2kNpDpIQZ_NO6EzRgaJuCxWHZQHrNIb8EtOXxWUevhEwMKE280S9CKHqSyUbPuuo1B7KefPsoO3VPGlR5jBSDf9bBq2_ls_yGZZF7nGOA", width: 4099, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104367673449245631221\">G C</a>"] }
        ],
        summary: "높은 평점을 기록 중인 디저트 맛집",
        updatedAt: "2026-08-16",
        highlights: ["맛있는 커피", "맛있는 아이스크림"],
        tips: ["식사 후 디저트로 방문하기를 추천"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피 및 아이스크림", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 7:30 ~ 오후 8:00; 화요일: 오전 7:30 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.marumi-coffee.com/html/page6.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9527400476315582209", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=MARUMI+COFFEE+STAND+Sitatte+Sapporo+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "풀 에스프레소 앤 워크 삿포로": {
        photos: [],
        placeId: "ChIJ9cYVXhwpC18RdRCzTHwFkII",
        placePhotos: [
            { photoReference: "AWCwydhA2J-My4XSlNtAOs4B_HX9MopRVp93S4lgkTwMRirEeVZQBwX5BDZzDB6AIFsFWjATdRT-xF6QgYYWbuKXdq0F4D-UY6fnkRAh3rUaxI5GsnB8P_4t1ZbgnaFBoG7WtdSyGIz6hd4BYcP5GnAdHth0CcwQzgrKm7DEuKei6hl2o7OX3kpRbCvkvTREyZG9l7D4PzDoYHW3iAUVn7s6mcOLVoqSGkgGsCpHlU8lY02vbOjMbnagDt1Kont0IMwZgx36vg4pLvMIuvHr3Bplc2XqHlVQx9O8LKNTnx2oZpvW6DoHkrJOaS2asBxRmklr-FLtzSklC-XE_3cXxBAQ-HRd1OgITiaW_k_j4dYqlS6VwWqr7ueRC8q84v64APGIq_fJ1P_IjXzJbHUe4OLZNkazTpT9OnexdC0EOtQQnaRJVA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103954014642060701388\">poool(プール) -Espresso&amp;Work- Sapporo</a>"] },
            { photoReference: "AWCwydjr5D3svg0jy2ShZiAbcnI4dxPh_qoSkEGwk7A38_xWQGXqrKkgeR1mhyox75w4SO1r1v13OxEMVirMRadT5SnFAgAPD930e_TRusLjF0laTH6FEoGzvfHU6B5vZvzH006F58NYRy2Vrg-xKdRcC7H2LcfcBaStDa4mgnzpk3Y4rUKFW5AcZJiZT7ygr4hc1ni0HEwJdukarvmXKM64pxnePM9IqUed3ZLrH_widg7IOTAbUl7YoohFjpQtogGn6Eq7-24Pl7RHtU2BaxkKkdSzTZ3NsF6gCxlTXItfN3S3aoZD4dwdU3u8AjKQ2EqJPGuLviP8lWGwUG6uUMd_GDyis2YN4RxFl1CgiPQuGG5Ye2gqqYaCj7M9HzUYHOgJVuV--G-hRhUQVbVKSvxCBouaBEgSccXFlOT1qTVIKlHrLMRmLirNF2rqHoIOAA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117689918675066310987\">Guy T</a>"] },
            { photoReference: "AWCwydgSoYctlFE36Az6WMJ0RyFmj-2NL92Jvp8CR75Y6Omd5ItDWPpAVu1NEwksLxhLOVHNL4gS76HwH9B9VugS1jTntkcAjgXWn5miNaYol8y7Nxgfaar2yAYmrsfMS5k59_d536cNpoh8YJ68uIEM1qAk2y4nxDPhtWDG0NE15hPJNksbHbhrn-2yDS9S0UU9d4P1VGS_pipFarikwr4fiEadl1j7hIxiQ5GbYcNivTKr86XaMscAG2CHVERmQvtbGmBerIOEAoKRuaH7pbG2WIwnWF3Aqlo1QWuEZ3aICOp0pHUiHaS_u6WRwZQ1-CORhZxe8ylfi0kk-ZnPXxn1cSCf_rQ6EpjOSVbVBGBYB53UpoDVMLzZpxrtGm4X4z15E6j92Zja6QBxnq9VR8yeUeqQmXuZO_TY3MKk_29Out3JZPQxoeYHOJqAEkaeQ6IY", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108473223585612568890\">nishi mame</a>"] },
            { photoReference: "AWCwydjEgZgmaCBB-zRDokqG_-RHz9tx6_G-kBfp8N4EW6WI05EC8RKsNz2NDSCdprs3US4E_jaEMx7SFAFU_QMaWWscr1bZFU54yKre_dO6_9KAX-6fP9Kz3cb-e4eqfQlxzf_L_eIgtnWuDPpysnoLWqqIVBW_JvaRxmuuG6vv4_F34D4R4jEcaBzl_zuoYacco-Stu3sdISS2tHGv-ZW-1iLte5nLEqAwLIM3ypwA_UalMOuJDBB5WwnrlscRCXdAZ-Y1T23RWOwEvwDP0C2Ij_5oga4Vw4fDDwQ_Khm6MMCWrWr5fCLh-XV3dQWKwiRZKVVpB-AjtLdhTkk3P2IX3jB8_WVIm3_e-S9_g8KczgAPFRMeiSnzedSPAJlof0sJkHtiQzJOvBqdJj32_sV_ZYzIR-jMDwXYpCKdKzAYh-TNwzk2-k_avpJSkvlD4viQ", width: 4800, height: 3277, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117105366947169641077\">Hik Nak</a>"] },
            { photoReference: "AWCwydjmR5VeZa_z8H0eWQPAYIE7APICnzem2o0rzrABdWsQ63UlwN64C5Kt7Te9Uy6_GzdZpMK3-PbdvrMazWBb35h4yV5qYxz7PrZs5Zb4Bna0q-ULcOqrU7KTsru4irTUvJlOrIrP8O5A24r0nKRglHhcO2GgiF5SBODqTT_YYWRRCDYzK1t2AD4yPtCJcqY541UOxZdOzoiVbdMGswG8H3YdCVNAgypUUM52Ax4SJxns6XnNcMhsSc_Baceaui3c36_YiQ7I7a_g7CNemMbkDX5ykZOQRBm9lNbIBXyF8T4w1E6sTg_o-6mMGRAKT4smi10F0e7eLaMFVAuRiR643pglCf4GHj2KxgDbjtqjbl3CBgyVu18iba2WxpbdLu7cn5nWqAa8Q3nfNvz5OY2gI0MxS_CEYQ2J5-SbWbF8qe8OwTfP-TUaGqcxxG1hE6e8", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117689918675066310987\">Guy T</a>"] }
        ],
        summary: "편안한 분위기에서 시간을 보낼 수 있는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["좋은 분위기"],
        tips: ["여유로운 시간을 보내기에 좋습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "카페", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://instagram.com/pooolpooolpoool", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9408025652997853301", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=poool%28%E3%83%97%E3%83%BC%E3%83%AB%29+-Espresso%26Work-+Sapporo+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
