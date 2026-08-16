import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "이마고 쇼핑몰": {
        photos: ["/images/kota-kinabalu/info/shopping/imago-shopping-mall-kota-kinabalu.jpg"],
        placeId: "ChIJGwRDk79pOzIRjM0ywHUkgDM",
        placePhotos: [
            { photoReference: "AWCwydiqCGnTFVCoH2ZbcUb1IW1iXSQLe_l-oSpnXjP_cRhMwX5NBDdc38IH744zQB-KU1nproUbXJzW86gUAwepZji7c2mVYCnOrK9rESMjqw6DAOmevNVCEA7MHWPzn4bhxOEd2cn33dZUUr8tWeIVrEzQ2l7Pik_rZc_DNh6jdqC09eHyX0yXI-RUCxXUT2KbgK_KKoirPirAlBSZqnwjaPptKYGudLUdVmKUvaxT1tYB2dTlvU9b4dLbFtR6ei5AHkvsUujE7xUlc_aAMX9HoXx0dylSvVIx3wJ7G_dfrVQvUKQjeEAyPGKUUArC0zHeDxD_bbqyjBADLcPMlgZygTuJKQl5P9Ndkzxzjz9mwUVD58hRyNMFukMZ5T8M5h-1VhTe8cWwhwQXragJBcRQc2ax1B7uFnUsE3YWyAXZaoX2VHhk", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106891487114366572515\">Chen Ourway</a>"] },
            { photoReference: "AWCwydgFV9erZnQ3g94OmcSc77yY2XaI39slXfh6t-VwminD80DqO3q43ggxjijWdOFCOiLBdQteDX6XUj5ImU4y-Xk1gW-9hzTE9uvQ-kxky57iaH3uJqhPFxQXYnoVqprU7t8uJLpEMw-_W8triXVE-belvP3rZUI3wwXnAGTli1HI4YoPo60m0d9c2MQxFzf6LtRDBmMn-eYXJV4hE2UG35sVMZ-lc40YeLfotXgdbTVico3J4w0PHkeUnfsDybsvzpQb6CkS9GqH3DOJAbNlr3cow_udGpcTUTbTRRXW-RDbmyc880OsZWyBxfubSaUXnQ-po-PchFRj2v6tFHDq53sHK5rYL9T6g28mZ9h2JypU1JgvwSQ1SAhR-py7jzEOUowjRtS761AksT9IRaC30omIf2j-_qTKYK_9n0Mwa12QsqB5fVT4r1AAErPFi4_Z", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108011328771946927792\">HWAN</a>"] },
            { photoReference: "AWCwydheiIaREKuPU5K7QLuSzNe2udZ2s4IfSer3wZnw_UWQDG1QHlS9s3IATrY9YBdpemoVybH8LDXD_yqkUHM0o71sSDYH9BseP04jGrujSz83KXfS5fDlBp5O5WhGpgp9jLFLL_Cv_es-moKHr2c1OBxJtmAS82-fk1GbDDlJYMtyId1A7lt73a56S2GlbhM-slS8cJ6SWqS4Wl5jE5bLI-mwqNfv_XzOPzweVcH_y2W73rk-tZLo8L-p8BApVckHWFL4a1QS_Z7dFBfOPagBEnM83gYey3fw19VwOAKbtzDjJF2TxH9WjaTbjOIBfoX8mXYnE8BwFTMcZlFVcBOq-3JcWHVlGjWgW02AfFl-egBEDmMNoUtm9pKgY3VfS4BR4vgWOkPTPj_1tFl2sbrW_Bp__y1NeAoKv7fjUoeOgFI", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101874828725433430044\">James Tan</a>"] },
            { photoReference: "AWCwydg_1LAaV_gHvmvnDJbYfMSyejYZtMCpGdqBWEc1hQqeCHI30NukdWnQ1c0JjYFY1v_C6bkcZWhINQ0PTUCYYx_HDRGp2xLdcuZAfNT-gpfKt1MXh6VbVDEoC_FZotRc7ZPHo2sp3QQtK_RTfCOaSjlJOnURzGip87gnhbBRL-qstMYXF-zSkRDLzIFEmTMmaX6sSHt-nDVcx2PWaL_qLRo8onAFTwl6f5-F2XqaSTMTSpW6xslJ1GZ_Rz3UogqDWAC10wuUlhIIF5bQ58DQcPWwszACXUZcc-K0ZSBRg-g374cgqT0FFLVNBz4m0ngjowqsQ2M5IgZFcxGJDjmQNYu23bNSHA-OvoT86Z8VqjUXXWbYK1HbIqtzsY9i-EzHKmHBPYRO2kV9thXKBiIIKHhZxFWTy8bjaNTIdG6r6Aw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115346620975478958673\">TaeKwang Kim</a>"] },
            { photoReference: "AWCwydjJioGv5A8-uJr1wHqJByQkqZNz86qeFAG0cr-J82-Uh8cmISMZ1iQEycG80dBy2AhEvAg8jY6EDqtFbQzXMlI3DUMcHTHwh_oZ-N4SQpJcyFCilSgHPvmWC-Nc6LWcerdw3TaFv4bEr6FBKr0Rp4-Bs1BQ1ocA6umPdgK_9QIRcYeq2-n-2O4VSYtE4b907weF2jwwt8eVzJJU_LjtqwjlUHeHActCpcuPWOZfh9V9fEuFdB2iBaZ-D170BBdOSbHVVhILKdqrqQ9F3TCA6a6LMJ7jJvuQd6W9T3z8h7dH-JMFT_okeadMgWAkZssJhPn5njXGcYXNKtRlI1Ln3jhsQA6fWyfzLEbXB24EqaCmwJGg1siFkHF_tT_21YnCK8H0b63Ztb9iXurinusdrI9Qtkv56qGeqxwJ5fAA5ZgitOjn", width: 3990, height: 4160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100872971302979101055\">Robert Reuvekamp</a>"] }
        ],
        summary: "코타키나발루에서 가장 쾌적하고 세련된 프리미엄 쇼핑몰",
        updatedAt: "2026-07-15",
        highlights: ["글로벌 브랜드와 맛집이 모인 곳", "깔끔한 시설과 대형 마트 보유"],
        tips: ["에어컨이 시원해서 더위 피하기 좋고, 쇼핑과 식사를 한 번에 해결 가능해요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.imago.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3711006181107617164", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EB%A7%88%EA%B3%A0+%EC%87%BC%ED%95%91%EB%AA%B0+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "수리아 사바 쇼핑몰": {
        photos: ["/images/kota-kinabalu/info/shopping/suria-sabah-shopping-mall-kota-kinabalu.jpg"],
        placeId: "ChIJZzdhHIZpOzIRr_9CABl11w8",
        placePhotos: [
            { photoReference: "AWCwydiZQ1Lmku70-4_HDvjF6qQu7za6QWpkGADq-Whzv8zAj4Mft2tqfHlR7aIKrEgK2VMv0JEiPIb5xSeAbQkvt83i5tBr7GluXsiNJV1nga4cG5_lfFWilhS5sxojEvTL2rbV_rOzK-lE6VEz_TebVyemSnvczjtF8w0b0zwI6DWwFqlKgtn8v74tamxjHGKN0g1Brkj4JEaegl3t58urEaFOd1zOqRNRtqQsQ3xo087C3_z6vAge7_yly0Vkh8ovf7AseOXrqRG9Au2_OAyJB3t2HZS8Uv5ibBrGycX7dUs1_UmScgGDkSIsXZNn-3Qy4jdnIeuhHnDJ5xiuvo_xc8sCiXruFhoKdLUMUIB9h9TQiDQIglxEie9EAbNt2lnvrvCuiiJZfyeO8hN-ytMtug2G74eLd7XD-daRvOB6fL1aZ2Y", width: 4000, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104803797375371302240\">airfan96</a>"] },
            { photoReference: "AWCwydiAWb-ibh8bfSyRCwK6xK32MIn3j8IzzeuLfMZYwuCXWpYg1a-4zam7zotSTZNVN4W-mUWqUad931zO0jcatR-CJ45gRIcCw_YATX31PC830CScp0wxT0MFEfAcVOgEJ50vne59xmxYcvvADiVzSjKy7Ddqte6sd58xn-9QfC1EJRTpBgNiIzu65kCKrrr5WiV7YJuflmMKx2HKTmR5VQ5UORxr17Iom5E3dcctTwAESwLvBkClcPkMCNIp2uMQqSvtX0jia1U4ZCYiQKJUeMbvq0fgM8Tbi3IPfVQl3BfZjCz-EiNyrXSMo7SE9OGgABS6lyd4PbRcnhHESkoD35F3jjosqtaSRgz-ig_ckev5atHLpeMfFbGKhs_LjVXFoQwocND-NfMCbf3KBdGzcePpxNGYqTlKLVEOdWl2tq8fsLvt-1OHP7hLrHXcTGgK", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106392328019465112692\">Spot</a>"] },
            { photoReference: "AWCwydglxD5GPs7DynN0OT70EF9ag7YUs0xuI07X7HX5yc3CsNKke4xu9fs-FE3s7TEXw8-2qmE2h7y5nBGEhvqX6tkWDOpAp-hgkzGmg2YcD01RKr5RyrktjTpvY9dKYyQ2VqghXHClOo5XAW8XaldoB68j6ibLlVdgmTSE45N2i2vXs6A5VWTT4eBaHmc13C-nG1pXEVDE2o34Nwkot67c2OcQp-quHNkxFFPcNdrAg27hZ2jrXygWK2r7yhDuLaNuC7sAVvLxPpo_V0mI2qz5Efkv2NEHJqTrdxU8oqd1Z9YqI1_UppIyB6kiXYJPIIORBAxJ8jUeHe98zMT3V5riPBZaL0-Flbr2KIu6wWpT-rF3pPr3VXUKWoviS-r0kJJCQFm-RsulDXh2J0iYlaMwN7JBTzCsc-0X-o1LwrhrTK9nYQ", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107230004527202402942\">Chong Min Kiong</a>"] },
            { photoReference: "AWCwydgyLs33dRj2lC_S5eOxPqvAhLwtIGy_lVjQ_88p9avt6VdJumbogqt5Sevieznpn6_AV1pJwTPCs4IsObjTua-zp5RJ6drZQWNvJSJTJYGO6ymv_RMCj0Ryv2fBH0Z0UNU6Md9MrJd_vDBUJMR1_ByTaBEKB6t4xw8lMWKd9fTHeuZejxarSdPphmLGIkA2NTavxGYkzP5z8_Hgbcj2eiNuj7CjLgBtKk-cm3VRJhUJpSbHw8bZt4lPIM8N3zNnZWyrbFE9FNLMTB9DKI2xMSsQK_ME1w0IRvVkCSIA4pFjswKiQ4iHYcqGG4jwV-LW1KBFvA14hWdTvOxS1Iv8fh27JZA8689AkQcoZ658JncEyOUULNXKtyaoxOgsCSLibGqCeqouRD6z6q51v2GRPAfDHH53ClU3du_hsDTo96PrYg", width: 4618, height: 3463, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102206882455320338312\">wah Tony</a>"] },
            { photoReference: "AWCwydiM-SejrdIh-ydvAd0R3O8cuEmeeMvzTLNk7BPnzu3IvYLzVyHk02v4wx43qNxwNrXW2-4cKhuX-_XlzcgN8cMf6VPPBWhZlFCtzpk3ALPz97nByWmfDaxbKKlsKMo4aurU8otfKQo8LLa3MgInTE33WfOVQf6JtwGF6nF6MASrEQuS1ZaI6WBinVztUnF36yoX-l1bNh896oX1Xu39yeA3T1sTDlyAVFhAIsF8kbZsZhZAyhz4KasltZvcIH84-SqkxJ9KgT6iKO4sZVyT5yh0P_Y2bV76hTXejdZqFIWv7VV0Wlmi0otn3wUtZerDiPtTT56hUyRU6kXW3WEe6RKCDJXbkkOf_YGL4OR8Zol1wLJrHvSXghmOga4RT9WB0A9SiAknQgcWQW-QgE-j-rMWntUbqrzgzGYvWNWx8AZ5hZw6", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107230004527202402942\">Chong Min Kiong</a>"] }
        ],
        summary: "수리아 사바 기준으로 확인한 코타키나발루 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["브랜드, 식당, 항구 접근", "평점 4.4", "코타키나발루 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.suriasabah.com.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1141509780800733103", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%98%EB%A6%AC%EC%95%84+%EC%82%AC%EB%B0%94+%EC%87%BC%ED%95%91%EB%AA%B0+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "센터 포인트 사바": {
        photos: ["/images/kota-kinabalu/info/shopping/centre-point-sabah-kota-kinabalu.jpg"],
        placeId: "ChIJkce5cZFpOzIRjIoLqYz9yDE",
        placePhotos: [
            { photoReference: "AWCwydgd5_Di0Xwt7umb0xi3O6fvoGsHLRiHEUAbsZcpWxeLgfEkcJX8tLuFu5Xzug3wX4bsdJAg5bs7E5tEPhPqm0pPysqXGahPDsCNSr46FzlysSheD-g-9nfJQq-taOgOBeg33EofwerEJD5qvohu28Ee1XC2tieu0vklsUKUlwdSZEBkWIU1S6zs2i1FRPJ4aHswiWvq8wDW2h1-kltQz6zcFsff0m2I6HF0j3FSMPsAjift89x87CY4yOce6Y6arco6IriRvvzI_H9L6rZIEaTOefCHCgvI0-00tvY7K3nZKgQPftsfVQFHcjoFa7YmCgHFk9tvdk8mo6mmIZEvBfYaUJ9FtI2TqVi1mSGitU7gkOP-hnzjk5l0K8BtonBegwroUKDwiuDPCWyN2q2EkmLx7Wsxm6GkOLLO1bS3zSVJKhKU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112622165014196426977\">Ivan Ng</a>"] },
            { photoReference: "AWCwydga8pnPSQtEiuGTOjCVe018Z-qkSwuWM7CzVV1XqpYzSe2oYLP0bBqPCB3e_NaZE3Vs3s1zRLbVxUptHtmpAynsK-Hb6RlpV--CqGuz5BbKHIunC1G1M-CYSAiSuSkrJDZHg4I01WBmRWqXiePLdkaVaiXfdVLoKgeLT2hr8gvDW8ttA04SoibzmoGuSEbl87Z3o6CD_wyC0Y-ZelIXc3EYjCoQlUNtqtTDVh6-f9zJfwbE3PDugJce7O6fU7tuob1BVzxKjxWCdnP6UBURQ7QKZOryEFuWVUWjy6a0XF8pbYLBm-uATLRAjOE2_U9ShbsBDXNwNjcro1GBJGZE32tH63W32QI1oxtdGkSAC_2vJFffa0BukqkJ5mm_Gm39Bi_hAOB0mPbwFWzIs0BdtoTe7-68shEjSEMktkep5-Qp41aCwcB4bU6NqN--OsLt", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107230004527202402942\">Chong Min Kiong</a>"] },
            { photoReference: "AWCwydjHggpcJPUqGHYXxmZHZXgaM9lW3GLIGRyno66hQWeCeoqUHIrkuJFqDSSFyXNhaS5M231eyEFvsKPisTycWoILTVeGnPOxDDZmdD-G_mfrkKbG2F9GM2jkkTcB_oguBQXKxWVojMOFc1lk5QExgdLxdATjUC1pfRQ67lIkzbAGOELcMNHeA8L3b-MwGzlKQ7v0tyWs0IUVI_SLPheOOe4YoRB1DekddLBmy8rja_PdcDHXYW_VToe2Gao68eYqKU_MaXCvdovcbUiO0htoT_YyKKxzGuxO6m4ZyLXWQBDf4-jithOcmnPkWiP3dX9xnK7T0UE2dDvofQEEtEU7a8tEmVAJ5xEq2RGuDi9aJ_9cayBdg-aMhoNsY8I0d1ljBrs31Wz1laSMtfm3KyPu55pCgn9WuYRlJufHtvdMLFSbfQ", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106981743598641830154\">Hazman Hazman</a>"] },
            { photoReference: "AWCwydilUqDec1Vcq17snvG0Vew1qiq-JiW4drdzzFf4v-whqeuV-NugyINiefaLubMdp0GxeOTn-YSAZ7yuf_5XGi0iCxUVYV5xOcUevteM5m-BpWAVRhcf_tm2Qnn5aFUGj2bq8AwzGcpuDLC38tYJzhwWKOAOKREnHWV1GLRfaFAQgAcgkRN4w8UUCKrZS3Dsag5WsgWofzLUirAsvOSvxTGYkIjv6D1JtG-FhFLSuOfoNuMAbBkYt20Bkz-Gve_A9bQDBlwHOqlLNnLnFxRYP0qSr5Q2ZjI2NikOKu8tBvCZ2zbCMBaAb2etLxmvhRQF1ACJUkeqtGgPxDikPRwS3DWEgF9qgeoApS54bwRKUVHAi2fJUWYUTR5dUgH8ZveJoxmo7b4SoqiIwmzoseIVSbaU5hyAQiDDN0BTq-_0wm3YKAgh", width: 3264, height: 1836, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101512406948015144623\">Subra Subramanian</a>"] },
            { photoReference: "AWCwydhVSiRW8YQ78MD8-dptic5bYq75u3JO3JU4cJwAG-ttacn6p198tWrjbiK_YLDWG8DGmPZhdFZFV0bwwJhZsH92m4uyApKEqXC58n7Xo7GVlJfSkSv-dJzy-IxxwyMb0SHC9XKTp9G6GT4va_UHzwmiizmujVtXr4Sxj-lHnXLsSqXQAWX4oJ0U9fsZfRqQIe3ggg5B--W3nP3ywlncGlL-W47JE1JhyIQsDNxvKnH0sL6cj-jp5f-l0df0JhDkqGKoAJ0fzn0NTw46zd01h7Um040oP9wxfF9TpP0h_U7ruRqogTtjGWCMlQNUUmhvE1GXjZIcO5JizeokwbvOebOPC4B_FWQFy3uE_6bBB4f87X1STxAvy1Rl6awBTmj9d0QnuQ5sR7WGE6_LKF8aMgtJXV0Hy0Dis_fXUNboT6r94JtQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108745167454450505315\">RedzuanKK2027</a>"] }
        ],
        summary: "로컬 감성 가득한 알뜰 쇼핑의 성지",
        updatedAt: "2026-07-15",
        highlights: ["저렴한 로컬 상점과 다양한 식당가", "환전소가 있어 여행 경비 관리에 용이"],
        tips: ["기념품 쇼핑이나 환전 등 실속 있는 일정에 추천해요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3587395883773954700", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%BC%ED%84%B0+%ED%8F%AC%EC%9D%B8%ED%8A%B8+%EC%82%AC%EB%B0%94+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "필리피노 마켓": {
        photos: ["/images/kota-kinabalu/info/shopping/filipino-market-kota-kinabalu.jpg"],
        placeId: "ChIJl4pkGY5pOzIROCcbCzKGqZ4",
        placePhotos: [
            { photoReference: "AWCwydhxNYUafhueU-Lh7OVE7XMrzmQnR1kWsd2tffZDyTZVAZBQzVxXMtb4Mu61dqIkyYryBcUmlwvQD5PNo7yNbCwvR3ukatyhbNu8JMPeZHew2rLBUKBQ0hJzQJgOhHylrhJEQMa7UuM20AswSfZQJEiputh7rsmtyywak7TUAVdlALlLrOmu3ynWuQCVl8FbINNlY2Z7zlsTzaeINloOkpoOnXQ0qolyR4KCiYL6oPA42iv4hdBE5bhlU-E6dc8ma1fOzyUDVRPecZGgy_TfDeaqgYIhNfeioIomUADybzeQKFvs0jf2exbdwjWCMz-nyLkkPy2oBkYj6ikcJ9orXpzIenLmR4Dk9T7L7T5rVcSXy83C2AW-E19j_6Nf3bW47AtS72ckVJoaXa43UbxFEEWHxyPcO4yDjEm7kNSeOrv7Azw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107478526380438463639\">Kervin Chong</a>"] },
            { photoReference: "AWCwydgM9Bs_okUX71faaWOUokOutDfnHmyqSPEqMnHo1c07TeR8AJJvuZUpyIBxFwvC-iv8QXMgJPvz2wI4b0n4MJPBGpMEnfBNnV89q8oosNdxkCt61knZ1Y-abb-MNzODbDFp7oV7eCWQphaHnUEpQiGWNJLYSkoCdYE6p6Hb_TUWaj5eiJ5VV-AhVM94Al0MlCwZCYVFSgEsQsWJPvCQSS2kvMa8gIyanN3BaXD8q8W3WCJ-KFUcZoMB-m_dS3lxSoVsGeL03IsUI378jAT07ej2NKCgeQpmJZe8_E9qZ5EC56xnHcF5GXpQDlx_Ma_4Dq_xbzFhQ5OisFjsbEnfF67hnpouaPHbRP1ehKpnF_tgxEUvAsD5jI_pyrNmgVAvFje9kbnVe6u84vKe5XZ-q8gjaqoBxCTw8RLfLCP_uqlFfx73", width: 1440, height: 809, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102161595012617744199\">Kakjie mutiara</a>"] },
            { photoReference: "AWCwydjQvxo-TRWaXU_1xezJJmnQfUBiYMczvVsAfbVs5MW3lw-r5JU2dQN-Vb69Q0gvDf5SR-wcUetfUCh-SveGg9oilkebqOEvx1H0BZKVlvY_kzXt0UY7D08GwnBEjtWWVcUbKrNeXni2WHA0Fr9H260gz9Q0THSfe9qeWb3nRVFwbB3K3HGmAJAVRIDxlBBnmMN9ct3O4EF9F23CFY6mB8KAgcZRN0zjRA2Afc2zF439joMNS2Ur8ThAOWotBaB_tOJc37-K3pcJRoKH4T7C5CVjfboQrBCuq5pS5z7_rRmfY2JV6t-fMuRF5bGeVCaS9M2aPUVMe3Jkc6NObnqaKc2MJQ7vBTeVOmV68CmgW1eqFlznCKSfGgDHRqhSU1WYyJJXsNp7UPRsAZopFwr0pM5nGduR0YVOLHjwm1cBMPyctJvHSt8u4_vIoR0aMcej", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102208859110120141731\">E Yeo</a>"] },
            { photoReference: "AWCwydgcrrkU-o8nQ49yPZ_HW_ned2NqDKiw7aqqRqcvu9RTPC600kvrLpd5ioqSoHKptHkCs0IHqUqD1VWYdozNDgveqK7uWENKp3HNiMZUBQVMC8NWc1_ncpeSDuJKDr6wSN8-rRr-Z5fPRL9l4DrkWF0-vjsxYhGQR_85uijms6tN-IU2vfyawRkILPxQ14BDOER1ct0CPNfMmVImaN3PsYFnAGCGZL7jAJYShitrWFMDRCtU7kpif5qblo3JpN-ThhJmzl_4XJxVkdlba1DQVKQegFsX7Js3WNktYjLfgeZU_9sWqGvGcAynTTk6zjAwmIieRGHJ34LKiNROvy6x1bdwaEYeLRv3hYOusAm2aLJ0o8wvhCLXwlzejnTqzmKddoPxBFFuK-27Eqz53z8OvopVeudK2yQTX3ca5C3iWrk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106312709907928649219\">Cheng</a>"] },
            { photoReference: "AWCwydiMeZQISwnNojeRq-LTXDI3Q_dQUJcwcwd1m-itYasCbveItRssiYDKIAgzA4Demh2DlsV1Ur9pdc_PBL46UESJ17mnYQewZCmBGh87JuGxpDh4UBs2EkQfXgb8AWJ1GqqRV3tSKfKNteVWZFNWKCBtZezooR0kpD8MS_wPa_qJizKTms5S6TNloadZc-x9xK8ZbCTilMvALeGCFTf55d8e9neR8YWznnXTikcKmmDcMQyyHMRleCeA7EXP1412uJ-scrb1uJo6NThf3AOFakK_TKxA7QHVMVYc8soMqNVKiOudsKriy4E_gkKj1NomuMAdi_UEvn2zJrQqfMGbihYg3hZmjHzwDqzaQJWKuOwiv7CzfIUAw8yrxjXd68uyv-tWgEW2u4r7Y4c1MFR4OtIU38hAXFf85WyMGQ1TDjeEexry", width: 4160, height: 2340, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105850752012566827981\">keri jaga</a>"] }
        ],
        summary: "싱싱한 해산물과 반짝이는 진주 액세서리를 만날 수 있는 활기찬 야시장이에요.",
        updatedAt: "2026-07-15",
        highlights: ["신선한 해산물 요리", "다양한 디자인의 진주 제품"],
        tips: ["저녁에는 인파가 몰리니 조금 일찍 방문하는 것을 추천해요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:30; 화요일: 오전 8:00 ~ 오후 10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.instagram.com/shaandhana", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16165167725338152193", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%84%EB%A6%AC%ED%94%BC%EB%85%B8+%EB%A7%88%EC%BC%93+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "가야 스트리트 선데이 마켓": {
        photos: ["/images/kota-kinabalu/info/shopping/gaya-street-sunday-market-kota-kinabalu.jpg"],
        placeId: "ChIJtTcGh49pOzIRbVb66G8asPs",
        placePhotos: [
            { photoReference: "AWCwydjn9RgiUsu3SuWd4AeKfW618WWNnJBTcBHXSmcmlr9txrZxNkt6blPjM6tYFuyeZO63IFopkOarYRO1g2TEEKkiYolrkxfRqJRw15nxjw9i7zIgzgZmT_8lrG89YqGsyIYq3N8R-on8CdHJJOISeK_uoxFs6oHktwmlxcp_mWRENIQaBCdHd2oWIZJI1t6_0Ru99aNaK5-yoWSTi-Lhe7Ugceh34Kr31Yi07IoBWBEuaXFMBMzcnAAzqgDKFfKc4lWqLpkQXyl6RqswiUmpQtVsTqGgHbocAb_5Yicow-xtNq8WEq1ZV3J7CAmXhX2Aph23keImM2msUw3LMFWFj1cuoKFhOLxc_nRbSlIe19XaeZXGoStDUVNcbF2IAcgOpRSwxeNLpcNkLXOBjKxSr0HtcWP_DfnhHiPSAVzNUBam1E0p", width: 4096, height: 3193, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110370610011979666951\">Satay Legend Lok Kawi 1</a>"] },
            { photoReference: "AWCwydg5cuPbCbSEjnOU_kNiVENXe7JpwsJjOssUq05Yh1tdYpDgrGGEE9hL7e518AT3MycrfLclzB_A1-JroIU5B-XWJDCqLPCbhZtItP8sayR6fzyNDLZRwSmUgxJGyNzqsEQAhNJdkNlzxgf9x5znu2FzH7qNoouEZdpLK6u6IfAy2RrR-ikQQsaYoyKCb_Z2Znjc5nueAjYOijeNVtx3tiYIV8gsfDmP0ipl9pfts7J6FsQRrsWQe-DQ6L5DvX0P48NKoBN7LLHtoaea1dowT6oKKQUwoOfrFBMnqAfaTr7rIgjHI6bihaMAfXuEzdjHDrqso_a7eMMdD3r_vxFTDXNT7P3m-Bq-Jvzw8psb17WZVAFNanM_VLAusmjNkmDQEdlF8efNbtnK00kv5lI1FxgZkFhXEAN2hSmpHIzoeGWP5OCt4Uu3cWBJ8RVzXLbt", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117999027989814452002\">Kk Venus</a>"] },
            { photoReference: "AWCwydiop59h_OZqS6dx_ZW__8a9S7S3dHAX2gJjcCfRYs7hpltIiNSuWva5WrXcLoibfo1afRuikGK8PMctl9gXXzoaI_7cjklr6xlyK1SOEI1RwDuqsbiZGFFyw9_dyF8Vck9MshJh4EzwmrUOtaRqT-2XDuVUEMOFu3FdlEigTm760KyLyj3sxQSeFkLd8kB_IG-V_DpZzh_yorlpWF_nsw3NDkub2SisGdAMV4Yph7PTNM40DTzDkG0ihjPGVojxsK3WN3RlbKqaNUX2zuPnMZ7vy9xMMUCZCA4dncyFvV7HtsFgQZ8WgljoKWwyzapqwhlOpJqEX32bZRxvpVRcybjStyuu_5IzPUNbemgAUVLqgVIrNDRfBOPic6gvXWw0C5MDJCUpZ96ALghV228DtAPo9O_9GqUmdx4Jfa7QMbPy31xr", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118010340429030535468\">Wongsitiliah Atin</a>"] },
            { photoReference: "AWCwydgoUPcPgi6KjT9Ue0aq8TCc0ZPj-Xja93g0ZWb55P6lFj0LvFWZCBvDvCQyDBWfcSPthoHl0j0Dr4vw8TYAahmoI7T9z2ybNZMQs2ydoZhjRKVRryDZ9M4xTp_w8HWDur3uwDiIqNRh_EqVUUROicFSYzpaMyICLzXnCyGk6We6FSVqcjf0Bx99nHvPNSiugOsVLg9D2_EtyqmWbBKuQpw96Pzz7i_YNjAJ9X1KrZkQCmgYJZCTlkBjPmUVepNtg1BTPIYL0Gn_yxobJGBNyShf6am1ni6fVomXeC3iaNeOtTAx70b1uM1Ec8cHencQezEPcRexqx2ccEOpFE9hs5y68TOymsBSxAij57KmuGiU2b-b-PQPP-z8EZb2B3Sz_c4p1lgEDnZZJV2sqNkKqCubKZN7z_4SRI5ZXQ34kwrn88E", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112474894225026036681\">Chung Seok Han</a>"] },
            { photoReference: "AWCwydhGFw3GpdKmF4-DjxLXfmlU2QG_GakViBcqVtAoa_12SY-ktmbjwN7M-ZovPOoNKBTs3Q04cIHw6f1IGjXB7XLXlOWSutc7WibzckZeBALvGZEmWSu8aV_ONhDclbJ__1D20EGkL7N72YUjMtovvpEUotuaw0TqlxN1YWTYaYokI_WUgMdjEyHhTupOLLWol0q4Ba8IpYdyKuo5PCZPnnMnkPCkK-XzV_hTnNXybStUsyTLyCYAqLNwNsrhnZGTvRwq64czW6OqL5wcvfDyx7cjFAPKK8f_Ji3jODYTduy1L1lQUScTQ5nkbmwBBFUT77z631h4ZbNgnGWRXHJ3_UaFdTPtvio4cx_YXsCaoQHD9Tn3VgTkRioQhzgpWQGvbusfBTiGip-MtIshLFPjcjPEqUmhLFgYRbhqgavqGT4", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104309288112006389923\">또니혀니</a>"] }
        ],
        summary: "일요일 아침에만 열리는 로컬 감성 가득한 기념품 시장이에요.",
        updatedAt: "2026-07-15",
        highlights: ["아기자기한 수공예품", "다양한 현지 길거리 간식"],
        tips: ["일찍 서둘러야 예쁜 소품들을 선점할 수 있어요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 휴무일; 화요일: 휴무일",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18136024767373399661", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%80%EC%95%BC+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%EC%84%A0%EB%8D%B0%EC%9D%B4+%EB%A7%88%EC%BC%93+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카라문싱 컴플렉스": {
        photos: ["/images/kota-kinabalu/info/shopping/karamunsing-complex-kota-kinabalu.jpg"],
        placeId: "ChIJO6SXELxpOzIR7kJB8kTkcKk",
        placePhotos: [
            { photoReference: "AWCwydioLpY_mU_r6MD0LEKF0BdVyJcB__cLL27M3wwcS-PCkOlS-mC_Yl4ey1eRsDe227w6FdPFWBAVbft3rK-I6kieU17mIZCJ-q81FSlxgzzi2PYF_nz5C7wNwCpeWsiKlzAf2jRdkxMFhOVfnAi02dk9NzTTfh6LjxoaVXvMv7mKhXorsambs_6ujJ4B8wrIJgyvVQirTYdmULg94tvWuq828ZdJXytPLVShorRCJg_Jyz0p9ILEkM2zCxed4d4g75tqeKOKoI5-U9_Ewgp2ybtnn6cza9VF4t4QNAMJ1M24dWVuWSGjCoKBgBsGsu-apRFs4B3E3nBVl7v-NWSOOu4hS4BoO88vQ7WzIp7h_ojVSp72MtWzewxXTO263OuatfVczk3zUIvu_HL546_RhrjJTQ_Rdlmf3Cdjuy3rkcln4A", width: 1470, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103508833724352296889\">yati subin</a>"] },
            { photoReference: "AWCwydidd7YVn52xtw8gWoI2ENF3wJxWqBg3GvYdVuaVM3zpNA3Vwv-NbxvxkqTK-BXO68rM9DP4CuNBbP0RGHkyQ5YdKs420PgIeNEe1f1oX4AUsvfS7ySpNCrrQTTb_g0Dkx_houPJ9EGwH96PPVNP9Ms8iorbiDT5o3G2NYbNkgEV5AJYy8zOHkz07f2g_hYjGXx5jt5MOyw8kDw-HsswzCTJlqiYfe_vJ1Pe6Rour9LxFhbENaeaXCpE50_CmxrqpNxRl8nBomgsdFgrZJvW4mkRfXOO_ZqWZcupwEbs5XmI2miafxbuc3CK9QvGbXz8unuu5q5dElT8E7q7c05m6mMyl1w0TiKHTMtQR5XcOMi--GbhX6VXWjKAr5VyZtibK0nHngxpYm8l6GzSTar96cK-JC8j0SKrYlT0LB8Wd_sCIA", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117107727160032233661\">PikaMuks Gumi</a>"] },
            { photoReference: "AWCwydg4BAAHmAmjRpRBapVmenXnGxPIEqqXYTmpJI4hWUJsXGPemb6A6dHCZFiadrQ9id-oPH03LgNrgLuuhJolqGIqFUDbXbMLRitmeAKNDvouiUGiM5AwsSPgj4eFvQck_NXQSl18FLMI_5U0kAXWdSCgdmdf72XLcHSfq35w5ktFuHMJ_wSMRqllZdlIGsPpf5hFnbrc19E9QDDxHs2V5uFed76eW-GChq94OZxhR-i5FIkZTe4p1-HB4odhpEyI9egeRIEfjMDVPoQb1q1l_Vn2-0Hs9A40swqjY2GgtbPd0IBRgpyBMIjVpqDkSkAr7d9XAFjmYlgbIzFYgoGBYNsS2gAv3XKgKL3pXq8mGMYf2Lo8Zk-sIDcIhy8iCJDhtZkDnPFqeABFXbvXBNMy2wg-wGnxcbIdirzgx7vwPjCQs450", width: 3120, height: 4160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107000600631142394916\">hermione lee</a>"] },
            { photoReference: "AWCwydjU9LXXIK1TIkL8dWaVtJ3cS1bIAFhyCUhzfArLGeJBBjq1ky343TvIEGwk4wGyof2gg2_l7QhoEtL1Lo9x9RleMjFUVrs4F7eR4GTEa2oyb8udTH2Jql7swEGTsQVeVZqxM45BSiMA61lebuthn8pi2SquIgvPBKaEKln81mJzK4HewZdiflDvN4277WXpdO--0QMQvZuH6F04EcFX8OHls6sCOckESJOfiu2raEzp-ntP9dD0vs4WJK_umQs-35Pav-38zE-FEqtnx0X8cksxx2WMJg5C5E0hqjnRrNsQxyA-TwKp2Tv9Z2xhjiUI-EQff5u4sJ9HF_E7Ia6L-7eqI6snHcPhVEn-oQ75ZdYm2GPJXRbKFWODVhnzmJxEXeC4nAWlA3d88mwHamqWfGkb61G_B3ePCz9Ix0Bq3WId1A", width: 1470, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103508833724352296889\">yati subin</a>"] }
        ],
        summary: "전자제품과 생활용품을 합리적인 가격에 쇼핑할 수 있는 현지 쇼핑몰이에요.",
        updatedAt: "2026-07-15",
        highlights: ["가성비 좋은 전자 기기", "다양한 종류의 생필품"],
        tips: ["현지인들의 일상을 엿보며 실속 있게 쇼핑하기 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12209509574574686958", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%9D%BC%EB%AC%B8%EC%8B%B1+%EC%BB%B4%ED%94%8C%EB%A0%89%EC%8A%A4+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오셔너스 워터프런트 몰": {
        photos: ["/images/kota-kinabalu/info/shopping/oceanus-waterfront-mall-kota-kinabalu.jpg"],
        placeId: "ChIJl47lj5NpOzIRWdYgNk33guk",
        placePhotos: [
            { photoReference: "AWCwydh5jNFwKzfXxYBBwpwlA6ybzxX94J2mmTrn50vJe4yYSgFItOV-WM4cONdzE_-eB7B4Bb3RW3LL7j-CRqWtGncTShV-iGVnncVB3EkDbff1WtmBbe60ECXCVXfzieHKpvCNk8-zlJ34qOIyfo3XUfIKftdsMSmogbPPRi8dGoI_0NCR4TP7nt1CEQ9gIZ5frqPDvtz-SY0T1s_Kb0_HlsgzBqiRq6AKJnZMGrhXzBukSFWMGqBdi0nMjEoSxsjOntFWcbIBta_Qc7MfcumvgLTtuqmr-9dsATCNR8Wbvhc4ZsSo1omhXqrFiIPmAOejd0wiNpvCuYFyMRmlEl081PkEUgqfadwvnVmXSV331MEaCsEtb7d-Is2pJjVHaSn6BDwYEjgWzwZ9TOzsdVghveWRKveTcaKX-Abt8BwiBrjXww", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109603871100680593467\">Tai Yong Seng</a>"] },
            { photoReference: "AWCwydh4rDVmJf0bEXVsGiUOFlRWmUNw5xfV-VKWVTCo71QkcL52nBW4JVCd2Cm-br-8fA2D_6Qp4MAuvnZUKuVGnrR9Z0N6vVUmh_qLnFa6YKFOyzhaefkXOfsS8BWWB9gnCFVMj60RR-jfwQhwSbA4AuZP4_szNZWLLfPnXKm5BuoAkCzCe-Ajvp9pRxsO57PoUIci06iCFU637eQAoO8ITMnEShwky20uv6W95Aggt7Xqiu2YtAb72gWalCHTfsqb_1Su2WuE69CbKF-V9GVGZffYeV9HPSPPq9oeUcXmfmrzK-AAxb1tySrIhT_Md0YQsaEHfxs94i8u16czJ44IXdCmxewpuQXoII0o0eeajc6YzEi4Q10Qp21mhG1J1fVtMnPAtFY-8SFL6xIr0ARgWEOS97T79GUM_5FZHwsYQYvhBA", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108821097955910765361\">Mohdali73 Charie</a>"] },
            { photoReference: "AWCwydh1CCz763g5CzGms65EDqd0Skw0J5dGmsBwI3kSMVPfSDknTQ7T6XlL1_GN34zBUjCT1osIxJ32a0mJoQC2XhQa1PikBw9KmVhMZbTn0ZomHzy5a8ezUk42W4zdKUSiF89x39wIkTxdJNrhkpUG7GZ4GOyCiVupBFyqRqDL21uB-bLq1rvcRAAXYZn1e-ko7Zvrznwp9c5NrjyoFntfX3MjvrZZD5mlFyPN55XGizYTwt65d7WRZte5vNwyK-QSfh4Mv2m9cfnPVT8TGczqRvPPeUI4HURoMxdWhZByEEZTA5FvqOVEW5UbVXT-A5Jgfo5IOkSas7nnpPF-LGch1N3s4tta0CGapj1DjEK8gvntBaVlyVGmjigYskYjfOOETVtxedokZoWW2YJogHKhf6tQms6h2EINn4FY_pTS9FYx2jcq", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115424834228264075131\">周傑特</a>"] },
            { photoReference: "AWCwydiCp3JtUV_j3qcv9Gp6ahK_zn6QiZ-zRtwmNEEeVKDqkhVbmuTmR2vS9qX4wTewBM2SjODpV8t69zxAepszKddl3FDxT28aTT6hC6DC6wQ0W4AB_v6F3O0zvMxMydHgjyvDncwu6Z43FJc6hJ9hkkoZwCEkUhpfaKK3FRKsSNNJfKnALc8xJ33dqxUHqkmlhnMhMRTZEJGyFKtg1QIjbRWo5FFmNGSQwK-C64S_-Uhge8xExXCVYqORVa4_UGr-fhuohq4fbVT43nf-w6Q1hDAijX0fyamLXy4lQlfvykmlzqJVRl4pzB7bwZk2_IPacRjibAm2D3p1P1yDpNbtfcIZ0FTQVsFg9OHUG92LJRRKhgRGwVrI2BYjm8a-1_8zI--bLw3ha3p2OzDaLqWWPtPf94Ax9Q-UNjKIx8y-dJMk2g", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100393736429207275690\">tet tshung vun</a>"] },
            { photoReference: "AWCwydhQ_LJX6aZ7oy9StoLAb1JV3AY_lFcx86Z7Msa37pmwaTjHoouYdtW9PzpWzg0Zn3UIcaZ0-AG4eeBKjZUGwQoAbq6Ra7sdkn8UYW1r2_PU0-zRbZ4yaf5HRcNwUAl1F6gzib9FlYuoTVXX5QHt02bnj8pG-mLr21I3g3eK_NeTrFvxW0b3qA-rng29giJo8VR6fo_N8jVCpG9Z6hUPI5jb2JYm3jB5f5Dylcwo6sFyw0o2r0Iigj3sj7sIk0SuW2L74sNNnW8C83HpcwZNvA8pJKCzapf2vt_XXOX-_Cb5kJ_FzB1M1bDjZzqmu_0n0onk1ui5xpGos6KzHcHWXNfCAuuGE7Fgm3_zCOL-4A2qlDunSMYDEfuMy_YW_ml3g66_okvTLZo4IQ9GmY4a1Z8QrqPqbBqnwBvz7LV36qsZDpaM", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117465255648796588867\">Amir Izzuddin Bin Baharin</a>"] }
        ],
        summary: "해안 산책로를 따라 맛집과 카페를 즐기기 좋은 곳",
        updatedAt: "2026-07-15",
        highlights: ["바다 전망의 산책 코스", "다양한 식당과 카페"],
        tips: ["일몰 시간에 맞춰 방문하면 환상적인 선셋을 볼 수 있어요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16826283068802258521", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%85%94%EB%84%88%EC%8A%A4+%EC%9B%8C%ED%84%B0%ED%94%84%EB%9F%B0%ED%8A%B8+%EB%AA%B0+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "제셀톤 듀티프리": {
        photos: ["/images/kota-kinabalu/info/shopping/jesselton-duty-free-kota-kinabalu.jpg"],
        placeId: "ChIJO-wTx4dpOzIRQuGKel6uXuE",
        placePhotos: [
            { photoReference: "AWCwydiEbY67Oe2Wgy606e0LYopRYiFHonjsDA7SbJ266r04ihRCJbMA6ADd2lxBVkVAwengk04QFqwv0EjjP7vOGAxsG6npsCpGwxe2P9r70LVhQuhbw3Ql3egB83a0XBeR3FDlSD1BZNdYnDjX8ZS2YhE_0KU1jp0_IvmtPyD67my25zknFsipeBQEJUergsj8k29JzpV3VoYCMldAvQ54gJvzv784RWs7uZcECAfKfTgH8oWK1f2f9NCBT7H2ev7v0OYgqXnxYsnv-L2S52VdzKOK19lmBRfBxyYngjuz7QogJTt4yxKFH4IMcCaoeMuiwuqmFGceVmkKouqyKJ7-tIonPme2YtGMGr-E2HsoJ7rv1GqukeJWZwSjLuIksYnS84zPB6dx4e4JsRansChDjYEdeWw-YK17Luu9AczGodAHcw", width: 4096, height: 1864, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109019874684806388708\">Alice Alicia</a>"] },
            { photoReference: "AWCwydg0_K6lCSqieVFN4yC6lPcV51xdBaqc3C_xqCYzfrkrSl2l3vLsasFWPcMWMXN8c2mGWUKIZNyLJCvOOBXnBvWEoJeQNZDdQV_Dw9Q_6Uzy-wWZ4Qzf5O9EZiXQwhjm5y5F7l-BrHYU8v3YY5-FBPy_OxX7UUGD3vL6-ZRSjfTzmWO3AsrUImhVlpXP0xV41ZzqbjsKtc9QnSlPorfnFvGcLmj5-ROmfWsj41BfYNOdkEAFLZStRapPqvq9V6fLAuMYevDVPGb_Fl6NARbx3KYYcS1j2io0KekVrriTcfGPufd-Lj7UXUdo9u7cmmWzbRTUtywNfzS3gkEhK3qUj30cv32KqVn6baJ4hpg7n5KitZQhrOxdS8Qe-O4_aQ4es9xBP2REKPnrYYYzTNBIlUD9jsg9vnXvWdOho9K6xexgWuN7", width: 747, height: 498, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116521585750769308710\">Hakim Shahrom</a>"] },
            { photoReference: "AWCwydggZT7hPR5vPVlkjkE5MMHjPBKn2CmE2gF88ycT9vZ7j823A8UTQ8YTrH2rr8R6__uXkd-DWXs8e3xYm_vbaNu7HDG3vmDi8ZamtfyzqVCsRCnw1F3XAAaW7eKzeUM2VLmGvEsPvtROxkVdDBccyPNE4lP9hji5p20TpLRtu60BlEapa3rxkZg779H-Ay3S5o05Og1vWAMjzPCPBlq0QpgYKy09UIf-RbHW1lyWKui6d0o-0_aqdp_5Wh65LJ2hOuYzm6yfPM3f0k7Allje7AWAMVQz_JE3xxxNi0GW8ROLhgi-xISqYdezd2QKirpwgM98WONZVGYSd3MkuP_ruSjiurbK24MKtbKk2nu-lhLGUrsg-CH1VHr1ABm8rxPvp3uhr56NKGjb2iAIIcEk-OUb6xVTs912452ngKDxAfsejO0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109400489278667735279\">PHC</a>"] },
            { photoReference: "AWCwydj0H_x0AOIxUwtq3wVG5tz9TuLeJuOGgvwxr6YQzcixQ8_dQCZZ4ac5pLDvzup9rnQxGP0AWQ14IbxIOTRXWO21TqQELF_gXChDjM66JpLPScz0-azWZU9b1y6e51zbGh491ls09GuKzjB_5cFtt2AZZ-DpbSxdfRoFJQyxlQGKkFCbXvrx6C_925PthEYOZkwXLng5yqS2eBhtLZ_30BowBSMDMj2clzTx9ltMtu2X3lWlJeYFKt6hJw4fQJKIX3smhGg9uPWacXBEG_lCkllKy3dwVVwtFtSQOkCPnuvY6bG1lDTwOKlsgb-AsgRPx1XKXOCOJ7Jqlay7k4VxdSECt2t_7jfu4TxZkVrSemcNWF6UvhNxxAp63nEAh69rwP8jH8KzdQ63NEZqeYJ3-VQJIeK7cKtiQJJWy56xbLXPRg", width: 1800, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100764769916718640937\">James Gato</a>"] },
            { photoReference: "AWCwydh9YS56Z9ySnlUanhjHXa3elfYR8U3LJ2Qj-HGeeCsX2OfSIvbd1sYyNM6DaYhLaElxC-wd7TUUrgSVvGizg0az26oFlbBWKH8II1Iv2vAw4SlA7ydyJ7WoU-ZwUs32AWk5rCzC3RVdsFFy2dNVPdyguax-1F80W8BgbPzo_OgAy-NgZM6-VKQq4K8NkibVe4ZGrajK6osh8ZGhEmvtVNHTiDvwGELbZGffbdS4EXgZ6xa9mgUP_-BmFT2adYoCJpwvsXd5U9g6JO7ycXn0SdcJXV4T7vjqKGtEorQZ4O1raFAjj06OsSl3GArVCyWf2TEVm1RpuLAJwqAGk9BFi0wjYRotOGCsoYMjY0YYAEb1C_oCBocCq49ozdE6HZGd_98Pcpm8Oo_K9mZNiWQkkY8KOeKgbySmF0h6z7jyqCmpCH6x", width: 4000, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104803797375371302240\">airfan96</a>"] }
        ],
        summary: "주류와 화장품 등 면세 쇼핑을 즐길 수 있는 곳",
        updatedAt: "2026-07-15",
        highlights: ["저렴한 주류 및 브랜드 화장품", "다양한 기념품"],
        tips: ["귀국 전 선물용 아이템을 구매하기 좋아요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/jesseltondutyfree/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16239609027150668098", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%9C%EC%85%80%ED%86%A4+%EB%93%80%ED%8B%B0%ED%94%84%EB%A6%AC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "KK 플라자": {
        photos: ["/images/kota-kinabalu/info/shopping/kk-plaza-kota-kinabalu.jpg"],
        placeId: "ChIJM-QZTI5pOzIRjr9n0ABjWcU",
        placePhotos: [
            { photoReference: "AWCwydhUKSKM3hTEG6L7UF6x4U0NYNlyUDeP-u1OMHWTqtas6YnVvnxQyJmyMXEA_HAusDNSPXU9yER2Ew1l7B6sjr6rCcYgJkyd4iSQkLoc3dTOJnC_fEKMwoFcMFDFG5j5q8xRepwLb2Jrhu7LzlBJbFPN_-44OxzuXQ2peIg2oHPR03XIx7ZuXHCuNWRSetjnUPU55eeTmsv0dSvXhUcpvOn9UrZMkAZ3HdoSGLFzL9x8BbFB81SUFFMrHRWa7-cBWRNHOSerC4d2V8NXuBfhX7e-ypEC6SmDe-0neHP4FaRTB-SK6KyY4Q9_HlER64QzByiEPRIUSXKCd465Fe50icWlxXL9lsJhtb5Q6ibOAerHolLq3xjBJE4GrURcn0w3-uWdfRLl6srP1jvWWKuy5PJUejtXcFZOxm3khf93NJ8", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101477770751356540065\">Fries day</a>"] },
            { photoReference: "AWCwydjl02BGz_NBT_C7lYcYL3A-ISaxqVoPHUA6j2qwrljW_oT2oTTCE-W0z-LetCG7eEggsLifOUzSDJlItR4TrqTwkNpLYvDHrAqWPAvZmlvEkqSSwVVCdzkh3NxLbM9OhMEmFV2KHps3Q2slW6b6Hw1lhkL23CKWLXEdz9-_nNMCj6sM5pWmDQcLT2cWnau6LYaUEnoAXKi_1bV760Ym1uOrE3gBgc3lqVoYYp08QWuhSxN92M40Skui7zZQR0wwIu5e3rQY-0lqNrFynyDa_dI6Gej-kpF7rcEhPU-yaliqK_QKnXGsfzOAxo1OeLDgxEcqkK742kf-FN7F3T1nMD9dcPw2uWU4nePc7tsijnBy1Clc7-O4QG3Lx7rKgfDDRJySfvzG3zyvEZx1-c_zt_-Ps5lHjGJJ2PQsD5GbfXYG0Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101477770751356540065\">Fries day</a>"] },
            { photoReference: "AWCwydiWFUkR9FDHIqz9xk_kKEGPz_alwFM97ywRLMa204PahhKdXUSN9SA7rqrcZ-mRCWvqd0GYPufB51SupTIGjEjlYcvWoGl5nowKm_15rHJyF5fqnvuOvfvUtGoYEpz_cZd_Kb17byGcsKs2G-9pJQmPmeJz1N6pUSpjfQlQICP4H8g49soNdu8xpksyRDNeKf0-JHZIPBM_EDK-ikt3NThfM-lWkX2SYwZ8T6EzuKOWhq2csQwwXE6rjtnCfvo1Lpqdxb4aPUNPVO1foxsQJ3J62UuXm0_-jeYZcThQJMVMV2Kw0GoZuWv9gPhfYFIqRq5s_6KZb65YgKcSt99JOro9d-ZQXNfZvH0_sxHPDeXmRZqb3m_ZdYqKYubP-f0IcMiQ6pjFXuFENU1Klk_N2T_HEH-4pyhXcW2588KWUhQljZNI", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101477770751356540065\">Fries day</a>"] },
            { photoReference: "AWCwydiwb6DvWWWQcyGXJNJHNbtlMlMdXG3v9OA9r2bKwTDZBCZ9BfLd6IJ2Cw5ZBfv8HwDHe4JL-7UC1wQv9In8XJenLhpptf8AdJeOZMwhbPZq7raJ_SN8634cFoehiDqwG8ogu5Jqa1J-v5XtDhlqRk2yeOWcC-tWYBs5dk5TqmmUF66gOQm-iWZmW_9K7ugxrHRBwHe0gqlGYE3Bclynn_7osfaPgBJwOhW5YyMqaORbuzub47z-Khv_Og6GUXx98accqkhn89aKZ-cuQ7VZyVU7Pvvqjp6AG_Nx2bC_sMDfm55K9i2SxE0_2I54Vdh519-xO7Asi79fiySTaidMZauNDoK4eLOuTHk_SOjiQiZI4LyxWgeZ9dsckJ4Mzg0u5Qtm_GWgMWV7nw9IIjsfAjebYV9z24LiaIYtTYnAfsEjyEw", width: 2592, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116460042632279051849\">HARRIS ISMAIL</a>"] },
            { photoReference: "AWCwydh_fJAl2LWUbCKz9XivQr7_sIQETmJCsmpLPB80-cS4wZVvh1Yuq_8r7j54FhSOCwjv8avou8ur3t9K_2kvHeZCOk6JSrkh6DiVn3YndpPL-dEY2-jMjjePyFJWSynr-pIXfq9C0kG-PEhCABnuNSCnIKPvfk98rR6Ekufa0PCsUuknE9rWm4dKK1b4cdCqioBfnsnRV0rHCOzXFTTVN95PDXeorRAH6RObBXFB1kQEf0E3b-XeDA1m0uwdEfPqkISPyTB5T6cDn00W_wdmmlnBt31oOph9nV6i2-Uwo68_ln9MGmZK2ydPDxE4zovkKNTlasXFrBsl6WTlRk_z0yL75M-fzTVJ-gLQhCe1eYMhD3pZ2r0biiNPUws1e5G9AFw1S26kVlqyPqiygCpbY7TlYwNnCxM9M7__nX_pmBdUTecj", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116460042632279051849\">HARRIS ISMAIL</a>"] }
        ],
        summary: "현지 마트와 다양한 상점이 모여 있는 쇼핑 명소",
        updatedAt: "2026-07-15",
        highlights: ["로컬 식재료를 파는 마트", "다채로운 로컬 상점과 식당"],
        tips: ["기념품용 간식이나 현지 소품을 구경하기 좋습니다"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9414687933240110452", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=KK+%ED%94%8C%EB%9D%BC%EC%9E%90+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코타키나발루 핸디크래프트 마켓": {
        photos: ["/images/kota-kinabalu/info/shopping/handicraft-market-kota-kinabalu.jpg"],
        placeId: "ChIJl4pkGY5pOzIROCcbCzKGqZ4",
        placePhotos: [
            { photoReference: "AWCwydhxNYUafhueU-Lh7OVE7XMrzmQnR1kWsd2tffZDyTZVAZBQzVxXMtb4Mu61dqIkyYryBcUmlwvQD5PNo7yNbCwvR3ukatyhbNu8JMPeZHew2rLBUKBQ0hJzQJgOhHylrhJEQMa7UuM20AswSfZQJEiputh7rsmtyywak7TUAVdlALlLrOmu3ynWuQCVl8FbINNlY2Z7zlsTzaeINloOkpoOnXQ0qolyR4KCiYL6oPA42iv4hdBE5bhlU-E6dc8ma1fOzyUDVRPecZGgy_TfDeaqgYIhNfeioIomUADybzeQKFvs0jf2exbdwjWCMz-nyLkkPy2oBkYj6ikcJ9orXpzIenLmR4Dk9T7L7T5rVcSXy83C2AW-E19j_6Nf3bW47AtS72ckVJoaXa43UbxFEEWHxyPcO4yDjEm7kNSeOrv7Azw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107478526380438463639\">Kervin Chong</a>"] },
            { photoReference: "AWCwydgM9Bs_okUX71faaWOUokOutDfnHmyqSPEqMnHo1c07TeR8AJJvuZUpyIBxFwvC-iv8QXMgJPvz2wI4b0n4MJPBGpMEnfBNnV89q8oosNdxkCt61knZ1Y-abb-MNzODbDFp7oV7eCWQphaHnUEpQiGWNJLYSkoCdYE6p6Hb_TUWaj5eiJ5VV-AhVM94Al0MlCwZCYVFSgEsQsWJPvCQSS2kvMa8gIyanN3BaXD8q8W3WCJ-KFUcZoMB-m_dS3lxSoVsGeL03IsUI378jAT07ej2NKCgeQpmJZe8_E9qZ5EC56xnHcF5GXpQDlx_Ma_4Dq_xbzFhQ5OisFjsbEnfF67hnpouaPHbRP1ehKpnF_tgxEUvAsD5jI_pyrNmgVAvFje9kbnVe6u84vKe5XZ-q8gjaqoBxCTw8RLfLCP_uqlFfx73", width: 1440, height: 809, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102161595012617744199\">Kakjie mutiara</a>"] },
            { photoReference: "AWCwydjQvxo-TRWaXU_1xezJJmnQfUBiYMczvVsAfbVs5MW3lw-r5JU2dQN-Vb69Q0gvDf5SR-wcUetfUCh-SveGg9oilkebqOEvx1H0BZKVlvY_kzXt0UY7D08GwnBEjtWWVcUbKrNeXni2WHA0Fr9H260gz9Q0THSfe9qeWb3nRVFwbB3K3HGmAJAVRIDxlBBnmMN9ct3O4EF9F23CFY6mB8KAgcZRN0zjRA2Afc2zF439joMNS2Ur8ThAOWotBaB_tOJc37-K3pcJRoKH4T7C5CVjfboQrBCuq5pS5z7_rRmfY2JV6t-fMuRF5bGeVCaS9M2aPUVMe3Jkc6NObnqaKc2MJQ7vBTeVOmV68CmgW1eqFlznCKSfGgDHRqhSU1WYyJJXsNp7UPRsAZopFwr0pM5nGduR0YVOLHjwm1cBMPyctJvHSt8u4_vIoR0aMcej", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102208859110120141731\">E Yeo</a>"] },
            { photoReference: "AWCwydgcrrkU-o8nQ49yPZ_HW_ned2NqDKiw7aqqRqcvu9RTPC600kvrLpd5ioqSoHKptHkCs0IHqUqD1VWYdozNDgveqK7uWENKp3HNiMZUBQVMC8NWc1_ncpeSDuJKDr6wSN8-rRr-Z5fPRL9l4DrkWF0-vjsxYhGQR_85uijms6tN-IU2vfyawRkILPxQ14BDOER1ct0CPNfMmVImaN3PsYFnAGCGZL7jAJYShitrWFMDRCtU7kpif5qblo3JpN-ThhJmzl_4XJxVkdlba1DQVKQegFsX7Js3WNktYjLfgeZU_9sWqGvGcAynTTk6zjAwmIieRGHJ34LKiNROvy6x1bdwaEYeLRv3hYOusAm2aLJ0o8wvhCLXwlzejnTqzmKddoPxBFFuK-27Eqz53z8OvopVeudK2yQTX3ca5C3iWrk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106312709907928649219\">Cheng</a>"] },
            { photoReference: "AWCwydiMeZQISwnNojeRq-LTXDI3Q_dQUJcwcwd1m-itYasCbveItRssiYDKIAgzA4Demh2DlsV1Ur9pdc_PBL46UESJ17mnYQewZCmBGh87JuGxpDh4UBs2EkQfXgb8AWJ1GqqRV3tSKfKNteVWZFNWKCBtZezooR0kpD8MS_wPa_qJizKTms5S6TNloadZc-x9xK8ZbCTilMvALeGCFTf55d8e9neR8YWznnXTikcKmmDcMQyyHMRleCeA7EXP1412uJ-scrb1uJo6NThf3AOFakK_TKxA7QHVMVYc8soMqNVKiOudsKriy4E_gkKj1NomuMAdi_UEvn2zJrQqfMGbihYg3hZmjHzwDqzaQJWKuOwiv7CzfIUAw8yrxjXd68uyv-tWgEW2u4r7Y4c1MFR4OtIU38hAXFf85WyMGQ1TDjeEexry", width: 4160, height: 2340, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105850752012566827981\">keri jaga</a>"] }
        ],
        summary: "필리피노 마켓 기준으로 확인한 코타키나발루 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["수공예품, 진주, 사바 기념품", "평점 4", "코타키나발루 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11432816678549530424", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%95%B8%EB%94%94%ED%81%AC%EB%9E%98%ED%94%84%ED%8A%B8+%EB%A7%88%EC%BC%93+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코타키나발루 중앙시장": {
        photos: [],
        placeId: "ChIJRcXFRI5pOzIRDtkI3zWtF2U",
        placePhotos: [
            { photoReference: "AWCwydgAH1OQd7mPnzzh6GOeUab3f7aEuYAbI56d2LqvRF3Sp5ylgexbuGKRfBy0M3us3022XIgglxX_BH6Clrevnv9RX6yi5iF19y2MzlhwO0kvZ4YIyK5vBS-OUQTtbfZG4zFgYFtOrb1pNOE3Nu7EoO-YoJsif0Qpv16BFT3CvpZcerO8Ympv9GQsUpxGVhu_fANwMfYGNc1HMFggrLL71HoQx0OmxxeoFwsPvVOFUH7xyYbtifSvNJhk1Kafs6efafbT5oHbGj61Eu7gp430ykVY6a2XLhli4zcWr4pG6snEzu9lQeLS6Oj4K3xBcFACAOSsu2bJmT8VeKlm34jfj2yawAhAiSAKLU0ayLVAIp41gKBQzxr8FxNBS5Wwcw9K7_HEhvh8keg5-N5HHMDRg_HJLE2DMVlqMrwm6QRMp3fm9w", width: 4128, height: 3096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105195314927409596687\">林思葵</a>"] },
            { photoReference: "AWCwydi550u5OYnQf2G8qc9OhVxZIColWkoc7wl4we19SHg3_NfYeRLNZWNbVCg5gkmt-NIh_MhAxA-Hawt6yCe4jnT6kcGM8TDYBORSM98AR5SHO5Yl8i7oalf6sEeFkRxcn6z7AKpsL-NGLPmvadKaIqv3V5kL20x9MgHSGwVIYiMnUUSj7Aq6de54Ktz7z0OgkfNPhMhJIzkzUYwFH7nmElL2Koy8eEKHuW6aB5zbnuKzRdt5wtipQr2CuFbrbwbw_LxJsA_ukgWwEBo4CIZkQwuDOYzo8Cvgm3wrFQbxpwae6_kssTsCGILCjBLm5IgL7UFGsKKGN_ydyDK4GfnlTorLTZ-2OzwjTgOw3-ZJnmUQQhTCfzz6mztLOQkYcJy_P5mYe9BANARQwhGPbdIbrU1XzX_7IrL-s4JqdrJt_t76gX7X", width: 1080, height: 769, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113702804301697732419\">Y K Chong</a>"] },
            { photoReference: "AWCwydirzmICrBFp-tpv_yNK-YjlSE80zvg34Jx5IwflXx9WLXIcWAdCwIewMGQACtm8kBWnyBWY9g0Ez-X5EdVYXZN7kXRWWKXaqW0yLt23DIWSY9KUlXDP1EEJ2CoVcCzz_qY3b7Ab8LDPx8OphS3SxeBZPDxbkopsB4m9x_Q3URBP-l-nWoc77GvxW2EC4E0MncPgmG98dyHKZBDVCQow6Y6VovdZLO7YUCN8RewHCWoy2vTguUrzmSAkaC4hvsXSsQZO3MuHt8l-asSIQOnh0k8Mcd72GwFywBCibyYB8PPfoCRQ2yauTec-oeK4qEhHhTkDfAff0yyJJul72h1h9hnc8m8VkWZHF0cu965mNY3YKqfqizeJtMtyCs62rZRnz05ixKH9Plr80MMY77XbVX9PV86Qv2DNkF-DgFS6x1Hing", width: 3648, height: 1680, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101002962398927634707\">Swee Chin Chew</a>"] },
            { photoReference: "AWCwydgUklfkvXpjgW4lCPtbZN0lvs9eAy-mxZKhTuP4RdDsrQItlpoL3xeUFaK1NBYni9HfR_1DeGXsGFHdFwV0uQYGnzHyYfP2QE-IkiqwpKv1OHxD8JXSvCcJalu9UOapaCRtPjz5Vb9dL37kt-N0h0Nyn4xrumvW-0p44_2E3zufpb_aOOky9z7VxpOksEip9hL83O-sZMpSOIUXhOGpJMWGCtMVkq6HHCjWuPCpSDygvaPc2sLq5bqn7t6QU1Hb3fNAPF-hpaCOYBvfO62qvpdzI2Bu-kculuRYaN3Y8AL-0mk7T84pcsxtawTfLzAigRuZtGcWOZxdVqruVw5WCJ2hRcvRoJQ_VPhSI7-xwaR-D95PRDO3noqgYiWMlLJ1c5LjgKfc07C-8ahD_LjjpMjjgYHIoVj7A03nX2u4YTK4xafm", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100741856327474653608\">Kassandra 081</a>"] },
            { photoReference: "AWCwydiwgNKrC2K15-45jY53VX9yMs7EH720dfj32sBVua12ex8BbIN6kqX2QJWZkqecNnrhQ1FUZAn2yMdd7TfB03z3BS-jjwGdVTSl1eULa8LvX9nY_iw3LC8sA8-v0204H2Ls6pNUbd-4KcecT4sQLciMKUUSH1-xL-KAS8SoNCRjgzJ-a0L4fg2-rVTPMRbZEh2TK2dR4j6ddf1QHCmfc5AzmrqsJydT3hRe0GbfhISr0sWx-M9nEzl9TOOzGnGooaAupLa2OQUDx7ubiFe2vV5mxSnVxgD4XjQp8p3h_6qA4xZ1qKu3yRk1W7dwq0d__cg4m8eRmZezzEnyYodQRc3TytNsygUfMbI5MG3D5GFHRh_mVGMiKs07EyzA0nsylQrQCxQqniXz-9Q_MHct90u2o8IIYh1j27v8Zw91Uc22TSLR", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102249037466291230876\">Fathi Hafiz</a>"] }
        ],
        summary: "합리적인 가격에 신선한 해산물을 구매하고 조리까지 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["신선한 해산물", "다양한 수산물", "수공예품 판매"],
        tips: ["시장 아래층에서 해산물을 구매한 후 위층 푸드코트에서 원하는 방식으로 조리해 드세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 6:00; 화요일: 오전 6:00 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.manggathailand.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7284481369181837582", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%EC%A4%91%EC%95%99%EC%8B%9C%EC%9E%A5+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "코타키나발루 나이트 마켓": {
        photos: [],
        placeId: "ChIJAYGq-5FpOzIRHzYWRBnxJmI",
        placePhotos: [
            { photoReference: "AWCwydhvprHvXF4JjboVIgQgtBUqtcThS74e8YshChPld3cN6Ubg0etvGwIE5t46vzRakvHCV7fChqWLfz3v6Emfioh1FT8eItpgqkHf-NnjX_m4UiYtXc9stn23n5BkbPbxjLCIARJ7vglrW-SGLezNG_cVwF4PnVEQuicZ_TPjdiLFbwg8ruFt96vupUHxaW5Uh7lk5GXibY3rmv5A6tu6Nl2aWF-kukzg2va1TrE6gjOR57vyyIvZA_E6Vw88QYQqkQ5LDvmT0tgyQMIW3Ks313_UNcfb9skM37k9UlBkB4V4iiqQc4u2QZoy7uAWk5H_64EnG6VaHn7fR3DOWCxhyh7Dos0eEw_3pMXFA8c7VnxflbD3LusguoLzOCbDkoudZ17yrK4gpy95CihZCjpWIV49RvC-3uqnmMrrkgL0gOQ", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115074216255361526480\">Dmitriy Brel</a>"] },
            { photoReference: "AWCwydjgSeDmhXXyM3I0w8RGtS32jqm_ZrU0UFAflaPpSa9Hf5wJciBGOv7AwYk5rPneksOPVNSAaYy2DVvoo1VYerX5V4ma5mK8oNBbyCDJaS8_iyYZEnrrZRI3IVBIuwbbm-kNhYIyhQDg1kssFpwQlHIRq00VVkfmZ4LqDjKjVoMnebKPRtVYvCg2l5ZAxP0ouEEMAxg9B1XAjznkSdo6UgNmoadUv2tWOQK0ldt9XkVgTUlbJxM4d8Yv9Wl_41O-or6zhUAg4QFGWAb72N2C426KZuy67uMOscRlkNj9KbTTdv8wXshGU3WsaNFBJ5S70k4Q1SiwvzSFfcyvpfshtlJJhgOCOvqCiefveABXMK8yC98B822fVp0td2Ql6lmKga9eImBLsW1AhNgg88crjKmpVR5whpzZlmWOhh8_TRZE1Q", width: 1400, height: 848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102238534036183067680\">Gan Wong</a>"] },
            { photoReference: "AWCwydgOqrjqP4Eo-AW2nrTVd4Le-WGq1S8BwJgzuOQXZdsP7mzBUl0gVUC9D3iYukBXFvpxCWhC3g-3NSiTURBauXwz4_H5jwiB1D3ZPapME6tF4ndxtwbHdrIOI71WRfZaQ3XQClqanQx9qXgKvl1uOrlzR75pHrFAb2xCb0EtcZ5Sc6MciQdukMfiUFQbR7JxAABObOLS-yajBym2Rg1NJCWZVMHxWX0Ex8ogIdAzQKTvgGGLecQzyoBguF07lCPHEnGBxRa-NVLld0fekHpMCy9F-1HBb7VhoUWM3Yaisq5dlJwGW3lc04Tx_Nb_lt_Lpb2XwywKR0f_VpWlzWIuR-gOaCVxr_ECwhykfjjzYuNal4ymtPQCKuhej5gMZvHUaJ3F3695aGv2w38WP7MBOsO5EJCWj4tkGe8CVTP3eJF47A", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106747583524203285414\">김순영</a>"] },
            { photoReference: "AWCwydjMzHTbRAAr9-6bzFu1HC9r2yPrHAFFeLBoPhkeIlRRLZmpkvvE0t4otkgpqNd9RQjKXWRgasaTtNF91byAwgzszlXAluAaBR53DPll00UtNdyMoBrtE8XC6hPW9bKoU3kauANjm3nIqSUVDJMyjoR92bKyar_5SVnxhXh9VHkHnqDnZn-C4Kh0sM_HLIkX10Zu4Ao9a2-UaxcWus4p2s6vO0lZVHTPqy5Ie1RT9IC1JeNXQ21fnuJbQAP7U6S30n26b3cz-JOfSCHjiw5L4xNDnAzBpesPKu8loZh73_kWtYyWXhyFgMuwvZHZVHsYo6airkvi1VHkwsQr0tCVUWQQ0sdoK8zD4f3ZSwD9lgF0eWFrDGspPgs_WORNaPiuCJ3CCM2r8Ws_ZbUH6ZSR9v9NZlYWZoaeGtZM5ZfZ6F1B-nVP1LGqittcBbhdHTQB", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112453485323008550518\">착한마음</a>"] },
            { photoReference: "AWCwydhJeI6Gp9EsXyARjN3cb_ZP2hYav3WkSXvcyLS6jCUC29bC2gyE22405gxX60gsdl2wyeakV2Wg5WazAW2UDAbhx2Ga2_rHAOMhR1_fDEyFjtosmSIKUPcxtnXwvG3K_h1c4cqzHTFPNNFWH3tJV5lfJUg7-siWsh-1t7XXk8OQqysU7aXGamX5-dXFq3XWEm-SAG2Q5cB0MnYeuH598PgY453SfSTug7EHWgAS3_avecj2x58-VMJH_7aRlKjPqd1YSNTomv81FtXXp4EIhAxMqlQS_osQEzPF9a62D0BYP9_2oH42ZnIZIY9Wo6lV38baDudUHlqcssirw-L-KHy6C1LaTsSuuFAkke_ErLM1tLi7rabuGf761vOxXdSLIm0avkMcFefCkkheszLeQ0cQ2JR2s-InSbMRCzuohicHcw", width: 3968, height: 2976, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108640808047884432092\">RevioPickle125</a>"] }
        ],
        summary: "현지 식재료와 맛있는 현지 음식을 경험할 수 있는 시장입니다.",
        updatedAt: "2026-08-14",
        highlights: ["정통 미고랭과 나시고랭", "신선한 열대 과일"],
        tips: ["망고스틴과 망고를 추천합니다", "타랍 같은 열대 과일은 차갑게 해서 드세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 5:30~11:00; 화요일: 오후 5:30~11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7072605355650725407", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%EB%82%98%EC%9D%B4%ED%8A%B8+%EB%A7%88%EC%BC%93+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "헬로마켓": {
        photos: [],
        placeId: "ChIJw7vFnf5pOzIREj4NRseSqqc",
        placePhotos: [
            { photoReference: "AWCwydjmCSzGq17158EgSsb_WPGe14mMOb4KqLhO9i9rg37eubhBl9QOcYrmmyC_0GEs_B207dsMNI54sR6nOfODy0sfa9AcpuSBSFvL6uYPbu4dynkiK1XKG1WN4mkohigDLiw5Iu48BJKpm_YZwIJoPY0hQKh2J-AFc39Bku8PAmgZMMHW9YsdwQG9ToH2lM_9iHyHToedUdVxMlZs8C6rhZiYKnEhzuj2wHetJgalrAUAiCmhaBvhxiPh-0jGqh7jlFvqCi8RwMl6aMzQ1u7Tl6P8DLB-QK9uR_Ne-eXeiDvAL7xz3Yo9dYhsaz-dpuqsAm4P_Oe0pB_dBGSyv9uNfly0xzQvEqjL8o9sxQ8CIr_Lwx90-eGY2GGvL7N6Vy02vQgp429tQuODLLqNv5AkxJUiiwRROgbq-co6EyfQPb821w", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106680891734283936083\">Hello Market (헬로마켓)</a>"] },
            { photoReference: "AWCwydjhj_2kcwklzzBbpMFWQ312g1NxDXo8Y4rPv4DoTvSJCyk0brYZqwdXCk1faYhoAUQSgzt6gCM0pmVEjBopcxg385-mLhgFho_BXpO3yX4AvXT0oy80OrFa_qMKkJ3DOkrd92rQ4_d_p-qmnUYEl2YSxYoZPirLmKygGeLBl2l-lccrpvfVcvdShOe0yhiRR-_zdeEJ7L1SKQs9wvrBP_7IX1C61rMbIwqT_eaLiIaJuNm5EwNidBmQlFNt5hx04C7FzrhokjKzecd5-71LtGEfSbmFWOq61qGqWFSLnp-JeTgmK0Kpq8LJ9PGjG-tJEKEO-CAOug9ey8Hwf4_wQRvRsJIr7Fami4sU-4XJjrBw_ZwhehjhVlk5QHnCzqO8udlJFo58gxELloLSWSGAV7tBg7tL0xdWlFFR4ImEZlA", width: 901, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114150208877156577805\">신희자</a>"] },
            { photoReference: "AWCwydhBN9NxUJWbWWozjWOViXYE_-wc4u4VYykKg4lmyGUn_IwQRilQ4YZDSidi4gubEOoOU5WxmfaBFAhiW9WUHH9tgRI1UAhpCHpF5Cdkx_LIrf_vMftXhojC8mcLRf9vYIfLvyKET_MXIp-RQGGCCchiLIyKPEVkSvDFJllpLo9h4oTHvT01hnVbzeJ9efjuSCEKH4OIFlaqkCz3vnaOKaxSv-y9JUc6c-pi0rD8yGqUlXNXpK0rKF6E2ztOhLGyNdwI6hfvjcwWpiiRWwrP6GmJYHhmIyG3YI7js3I-quATXeml8pD8uS7o_fYpSWHRDUacwOtEKE86Tfs1pG__fOObdkWv3IOKlFWbqhFMrRKr-pSzL8RULlE6j1NWy-qYJVdEzTpYGldf129gw7QvnbmuQgUjCj4sXPt5l0tIDaKmow", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113661572819358653324\">햇살 마루</a>"] },
            { photoReference: "AWCwydgYlzqo65JP2dkRHdN9zYueR4jcB5YY7XX_H0z9DSwbwEaEJxyAnaby9fCDkkFPgJRQorRcvLA0-w_hS7gXxKfdhDm603Dr8dPbj_TBDI3aY3kL57LBmS_LRg_vyGl2lQCwmSwque1UNh88LXV_iHE4q8Ntp8xpEy7fRn3clg38HUGfcQF1jDh3BWlsIToU1O5QT1WXIBJg5xxLk2lvgiBr_fUrhRU7djUIhPb3ZDzWBPkzsvdPrqQ7fcr_VryET9_phRxkY6muk-oMZXhfD8RXVDiLi3yVk2HvrncTh_s8-cWNLPkvswgL3sfcAE7YYX0_6JAPusZmdKtu9_o4wJPNUF2TL0e-ruQXY6SK-fsPD9UBvOHQ1cPSjw8NpvfKiRj8xqhyZ7fsmQpZwhF_FOLg2vRfF4QhbeS3iGmKd8mRBC4", width: 3378, height: 4500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106680891734283936083\">Hello Market (헬로마켓)</a>"] },
            { photoReference: "AWCwydh2gCBgowPK0IY9PqyQ5BaauNmCizxedRiAzWuKBPgZGQztceLYAKKt4LFoOl0tNVmWgNVl-VbbHwYKzojGK8Xo5iV0SX93urSgGxdQBHEIApqKtAnIdtNCAiAOmQrqp7HXG2erXXqnbzuOJs_IkOGMzOwfbcIKza0ricTS_VRSLSejDhAnAUUntKONOWS4J4A1Vao7U-KKmSpV9LoEeVCzESZlDGb6zq5hHorGPbEJ5cgg8lG3h3bSAcIxZ-99S6BoSKRqlBgLbnG8yPRYFbZshlvX-2y8Q7aw_E9HDK-XwCLU5TzCWKQaLNMlrKSqXV7jQZ2iR5VPpjvPjd6z-YudwU7hFyJCgmYU-P9XcnSGqfa_ibEdjpjU8PRhZ0YXXR-1GIKjpwnEGntPik26TPR7Kfa_MAHMuoXk7Q1VVA7J47DSLzFOVwf6Ig-5iA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111961104413680958342\">HJ Kim</a>"] }
        ],
        summary: "다양한 기념품과 한국 라면 등을 편하게 구경하고 구매할 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["기념품 구매에 최적화", "깔끔하고 쾌적한 환경", "직원들의 과도한 응대가 없어 편안한 쇼핑"],
        tips: ["부채꼴이나 카야잼 같은 기념품을 찾아보세요", "신라면 등 한국 라면 종류도 다양합니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/hello_market_kk?igsh=eDJpOW11emRoOWY5&utm_source=qr", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12081630334946197010", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%AC%EB%A1%9C%EB%A7%88%EC%BC%93+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "서베이 프리미어": {
        photos: [],
        placeId: "ChIJzdqMBHBpOzIRGPf5RBjmgl0",
        placePhotos: [
            { photoReference: "AWCwydjnTkUJUeNo7onT9uGTM7S3LisHCX_vOFmkeadiPXUFKhabRRv-TjLsRwlPeElxyXUAxbCb_2F4Cs_CljO7PH3Rkh7Ug7E3aFwHqtPutiIzhiyiGS2621uGzUdUQ_dDCOYMipULsc1rfWL4V4PLHmR0DJ-4Y3XiQXCxx8XkybKgnlUGpfFkdwuD_b5nPyqqk3PWCsaQHijkGV4OlgyU377TqrqzbTFkrrYvxiek-1FC5wBHrKZUXAorEn-VTqy-hK6gErv1E1bfM4yw0hOu6t0GGrKe7v7Y0EouYz9fiGpXB8ngFVQNliWEx-_LEaqkm27p2UiYZgYrOmppMY2du5ReCG_gmhDBwRiGYyTjZhKaLq0e1WHkOEjaYIsvVASwsOG60J-bVOrPwmpOYnKU0MKiuSsWkTbeggmNKw_jfTK7fAc", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111097398661595668412\">Yukihiro Matsuzaki</a>"] },
            { photoReference: "AWCwydiI8FKJpgONNEN_ib6vTvAWSV3OZ4f5LExbwD_xtxx3iiy2zQaUdaN_XZJkJ_Ody503EAqT8LbEInpvZf3mAaHUGTX8H9Q8NQLi2v-VMTIBcbt60U9XCW8YGbKBuZ_0eOmI6gzElPK_1yI_jo-AB5kMgje7UG8jC9KA68nMdJezH-oFKUTxUYspk2Pjl3fboPktBd60wFuzlV_h1-8HSXws6p8Xub_ccqaSP3BwMUofUkErOe-81arg0cYmkx-yYGduhhgaDeNrnwa3mWYoiaybtjVzK6JKbCc7ihJasKWHEoWF566yhh0o6deerjlp65LVIZKiR7XA7LN47qt7j5BLzrFOzYWq1Nwnt2_b8CQLpAl4i-YekVIbcMT1Pjty_3LSlxr7Mjiqc0GfyjP2qyB0Xdwk_yBE-5FIBtVYwgjYCIsC", width: 1008, height: 756, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108453654567936389289\">Servay Premier</a>"] },
            { photoReference: "AWCwydhHCgDxIaspFM1F2IHn7_guDkyHEozdNL2UqK4rb9084KcswF5VBps23QDyhavODUIonrnB1-OHa8EeiXRwUMxtupZuY68qFNy8AgrjzBW3kaNVSiJOPF0Y4uLp8NVv13STlyiufgOXA0XupU9toirlHYZoqpyiOPp2nhjVg07lwRZnwFBy9kcPTs50ynYtPMWZfxVqs5HyDGbjTcdOC1bpThobXaAeAopHq3Xmb6HCEEFE_TyUYlfvUFCcDnlLAwepylnD9btuRLkzNVV9Ysb9jMI8znkUcMZR_mGsSw7LVTav97wL_BHFx9yqKuYvfyZ_4-IA3gcsFyuQoCdd8LfzuGnU2KZYgMaA7NFcjn2X4Gl34xt_siH8MMey9RNoUQ0EgAAP2X-0dUY00RdHHfAzWNpQSJgrl60t_eKhsHT9iGWb", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112451194007901213191\">lingchen Wei</a>"] },
            { photoReference: "AWCwydjGmyAP-1FK__6FOqx8-XzP_7kZ16hADTaULlXUrxzK2s8YvSPSzuwENyDqhzEzDvbnZQadZzPRIPZgMUphQ0n6GW09RmQGAYMbF7ecfQBjgDcuCqF9fyDjxU3wv7czNrIuSwfO02pvsgy7KW56JL_lciSASwUn4cQ4Qm2RDOsxVRu50b92SjBkH7Edx528XM_XEIsVz_ZN1nTiVA9-Zwik8dydRC7-N_K3E9SUq9sPj5GnEXNYLxT5YcKd0AHuXro75p5itBxOacBnDYHG8NCLHxuUDIK-hUDxr5cAVYIBNlvdyytg9flsfhG-J0dyuvHswBOshUUCmFO5Z9GeX7rRGgRaDXi-yQlgwXLzC74PWLHiX2B4NQxKA_tOGTzImUD6Gwd6I_0rb_pg_qjZnEnvD8_yM-wa89N9Qw_FrcC82kQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106324796065013111922\">Edwin Chin</a>"] },
            { photoReference: "AWCwydgHnXHSRzl6lSTPBe9JVzjtsb5Y8dDuU5xDlIYnaru1zGG2DIZYNcIRazzQqLVE9YGz3MOm1wDRhuBduU5V2YQx3ML_7_943evaKTCoRZtE20zJjJAw2cqFX4uEpbjiu3Wk-cC7FLVNzY4QN6oc5YLkTq0t530HWXw8NPYOYqQRii45Sy41nKXv1iYyxR3jw67jOY-tU4XPBHIcg1ZGfRIjmvikGhaMmHwVWgGepGOIHXGalEOCBqmAB-RbfL_uR5UzQHjn_-RsFRu4QO6JVkCNu-xJxA9SZkSs6hGpu0kDWHfQGE_kkIjHrpQ69dY4gWkLOjx5YM4Aq-0NhSlF7qdwfPmxDYgUN5UjT-C-2EO7lvit4eMN3lWoRBxnHEQz2moNIZ4btbDITtY444NvwEqfTGQMA82uXY3JC-R_D6nHLQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112451194007901213191\">lingchen Wei</a>"] }
        ],
        summary: "합리적인 가격과 편리한 시설을 갖춘 현지 마트입니다.",
        updatedAt: "2026-08-14",
        highlights: ["저렴한 제품 가격", "ATM 시설 완비"],
        tips: ["계산대 근처 ATM 이용 가능", "회원 전용 할인 혜택 확인"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/ServayPremier", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6738200984410519320", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%9C%EB%B2%A0%EC%9D%B4+%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "CCK 로컬": {
        photos: [],
        placeId: "ChIJ9QGtuGVpOzIRhzVQkyDO6Iw",
        placePhotos: [
            { photoReference: "AWCwydizWHADXndrcEEyc14AcwJ1P4C-WYySdnSU4Mxwa0Ygog7Oo3MKd_4njSnOsGeXNhwtchqBYdiXR25Kx3jRKNstXxhzI4uE-7xh8h2wd0_LJheIPehxcNRANZ0krNUFYie71uCZknVJ55MaS90CBfF0QUdxJjQElFZ4YhjuNeHdM-xXYYEfEC7M3Oy0-o1fVGNqEqVHC0CzsFuPqTgAhRw2NqKTGb1lfPWb8SLmjkIVmebb6QYwV5unESIW06q5xGDyqfUyG6Ldcx6VqnhUAaxaqcMeGtfrV2BHoExSDxpTwMX9cYbGop836OEPluqnJXTKi1X1NfBnoKkNWOhWrS1k9Q2Hes5E6jdPVzRUJ1CRYpQKntW5mPfTcT1F8raNR6s2wovkklMHwWOTLt-vViWJutnTrSFRm49r0sy0r_mbZnoB", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109019874684806388708\">Alice Alicia</a>"] },
            { photoReference: "AWCwydj4cn-VZ6oa-qugg3v8zfkze55vAWilcQPQAU2XKDKNcKu6uaXD1lKLpDbP6iyqs68hIo9NnMNzUVTxOXHFa_vE30N-975umkKImXRD3cI749bRIgPreQ6-7McJon0gT2Aa6aKcAh8Dn16kNWztzbXs2saz065m35BL82bWAUu_DFJ7J4D8mNtCxWdXfnGIauakxfOPxLpomq8PTAp54AL6w04S_LdkaOyjbqEG7fXB3LDuVwESqxxeiJR4g9v26hLrgUtm2TcrUo7Y45Sfm2ddnUqKAnOrO0yX7zH5EJDCDPmI0OcGLF2a3nb74RkG9d9YLebdhF0Vd8JXJbMaCbU2VFsQI-Apk8B7Eas0EdteJ8FForX25M6hoMSn2EbBZ8UsrACB_G284EzwxgzLz2haODtX0NyovZPW4xMjdSOPHg", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109019874684806388708\">Alice Alicia</a>"] },
            { photoReference: "AWCwydgqTLcOrBM8G4J1SptiL1HsQzQ636pakDtLa5t5_h_GIWwnKNOyW2ifOzPBISdWOPzM-JrkZbrOoUyklTNrMO1ZLRPNLtZB8k3d-mqoyYKra-aigH9_YmkoSEgd_oRvVIPJni7ZOnWKuz85zR0crNYS8ajYZtk3htSR59ZRB0BvHnoJ0AAEut2P6S9nxF1Ept-odQa0S7q6GZL35RUBvS_9HKGlI-LIHVv06jXwK-xiWVfn86imU55Td6TaRpAzfeJeIaATxuEHwIR4AyT5XpuSX34vCSx51fvPly1WqeskN5mNLRS8EViMix38eYrpH_HvLYM2oJJn2VrIMHspqdwImvWt8yWWORTvrN-nTXkbJnf6P-k4j0h0j2gIPa0Bqjg5zGMjLz5bugZA_GruB-1cwQlAcMiQjWfBORjEQiGpmw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111842380252084517260\">Diana Dieonaria</a>"] },
            { photoReference: "AWCwydjHJhHe9oZUtLqjk0zyRwSXyKvJReN5yCXKsrSR3iBrR0FtsCsJ5oR40YGckDcDzlJIag-LOviKbpg-6ljjAPWFbGwKsjmDc2w0QaBke5OzUuMWW3U1up4CKLVO0niOFG8vjJZpccguct2S32hW5iHGXaHElgD5SMchObYgajvbe0A5doNjFYIA0Q47efJSdMlvg5OpNwmYrJ6Y5qkh9AUIfxWMdnrtm-JsjZzX8Sw78huU5pxIEmLcEbSsT9qBa1-SAFjOB5nY0LzuSwDqZ6Uug2xrDkm4Bvv9_yAzAlfIrNQKFGVLSoJNOGjcmUjcbWq0AnZtzglgG5AA59ALVWfCP5lkRBAPHXvYqoEByilA8z0NIjfLloS0SZHDVXcIJNKel3MLUJmOdE6lzjZ1QrjLTcmTiehvcXrnodga_whDnKoc", width: 2736, height: 3648, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108945349339111009118\">Yin Yin</a>"] },
            { photoReference: "AWCwydiErSiWYqI5lU8Wfkn9mgMAR7zBLXl9Q6kupN8q0JZpcXYfOf7SBauGfsROR6tn-kzsOUXqzz3KI2BHlYMp1KMVRp7M9n_hlRL7tRYSLb8FK8sHwjv4WcxZPS9N9sz2a2bI3UXTWqVhIZq5PJcqwHAYgKPE-Hwr173-sPQDK8J_1OCggJZnNGULM6OxfzLB7VWrYC3eUNkLcFos_cWeBezfAxNwZnNLYC43n_5JN2r6yJGrT50_S-x7g7pxUuwkm-D_xeYLtnX70iFoGGC0MVM80BeAjFmGhyoxHkSH3Na2iQ6PSq-QV4UAedSQlWJWoQcQSJ27C-R6zTsRK_WGLOFJMK2Ip6a--ue0i4r9rXR9AK8j-Ac1kOhrrR_GOnircZoshlsjz5qznS1GMHdTWFhh634wXA__xn6RUl9QXwkzTw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109742022986056579455\">M Wayang</a>"] }
        ],
        summary: "다양한 상품을 갖춘 신뢰할 수 있는 슈퍼마켓입니다.",
        updatedAt: "2026-08-14",
        highlights: ["높은 평점", "많은 리뷰"],
        tips: ["계산대 대기 시간을 고려하여 방문하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://ccklocal.com/member", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10153591999212565895", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=CCK+%EB%A1%9C%EC%BB%AC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "린타스 슈퍼마켓": {
        photos: [],
        placeId: "ChIJDS7SKqZpOzIRD5FuOH5K1oQ",
        placePhotos: [
            { photoReference: "AWCwydgKRn5Rv2z87oLSwP2QNTUFqUcI7lLZM7BmwnJOfoDwd6kta_Lwp6Uw3n3grm89p29uFAj1f1rcIqQUDgT75pBNNSYESGbCGWWSyhBcKAiiIqja22khzLMeD5-IiqvKSTcEXG2hqGUVWAXF6wx2UvCN97XI1t1T96uiSuc_9rblcDsJueY-l0ubMDhGSCkUBwzP36BdJ_7_zinZ-KBsKGp32jHZDGlfqAcacB20WlqDKWZsU9Rw7WDQEf3YOjjnoR950pyOw5vnHLMY8SiUqHX8DXMhFKcHUslzccy-FI2cD29Zo431dsxF0FbmPhb3sqJHazIBw8DbUzXmWy0dvxAdMqsJO3XKSp9P4rqFYu-JSr6nZtsT12PtEtltwOubTxfu70eJVx3l8uLr71qtu1cte8ZRRR2_-VGGCZ-tSdLsE3JjJMck4iWHZcvqdA", width: 745, height: 379, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109059239555293391058\">Lintas Supermarket SDN BHD</a>"] },
            { photoReference: "AWCwydjX01A6XnwB6fR3Jh3iw-5i8VVg1HmH23lPGtNT3BxHTfZvj_A0D8t5OwsPf6WlOy4cmGFBj4Xa7tzVl8RSFxIxRVkzeGjmcApJaePQvqqXtr0BmMZhCgGM3truY-bdaYbdz0HfXvvdw_EsKp5ZbLjUbrYxnGax_bYPQFCZjvhXBw6q3foVPl8wKdgoPZ-bcmcBHMWnnm2iZJSEk3UrN44lz6LpNxQ_tlSWYsAzMfzjonpH2u9WVx5KHcH650ZQvacsZp5WbGDDozlpWLkYvJXe3SCPVMb0bLL08beVgM1GsR8YHtjpEuFBYxq3bRytWjAXlDJL2CO07_pmglOCYDu79q35M4oJqoqH8iSnxKfjHCL61IR3Gc_sXvI00pHfTQzMHaM8jnKHIqjrM9TA6s_JUjt0JWHiidJrcTYwGfoDnFjS", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106324796065013111922\">Edwin Chin</a>"] },
            { photoReference: "AWCwydj7IKa-qk28-JYGci2to8vpqHlgces6eRnuXfUaf7BzYs7un5wfi2nwqWt5rgnlOiWbUy9DyqIp6jeRoqMSDR2L6ppYaXe_t7De7qJSFCOrhZfstVj3jJ0C8QxrU02AHQxmh8rAiktNMdQo9a3mXS7TxNGc23t4xzZ0AwtYFDBlp9_8bq6vF65vBQ7Ots0nsazM44nunSczmgEIpb9hgg7Iekx_o3FizolknGOA4uqYHst5x57G49D7JEUxjFT_Fqk-SKnQHuSMk1SCEQr6H67lw7jh-RbUAPybUAGRtaNnmFvaRWBZe0KCulue5HGjAtR7HUhhMZpvjxncKOm6sFpw58wYxnD8TZSXge-B_RnIk-U3iggzC7UBLPft2Q0FbME6XfxfB1C8nR8L-07wv0wK44as-XwtU7y-tQ4R9qY2j708k02VGM-z6lcdrmrN", width: 1958, height: 1468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100201750806345404718\">Wong TF</a>"] },
            { photoReference: "AWCwydjRI4-QxHY-6WAxHf3ro7pl92ihZ1hVxXcnC8I4f4GrKeuP0tNTNwgRUwBtaRxGO5uI_W_U__X8bmCuGoAZVHPprHKS5Q4htNM3SpJ9hSXoSLv4CqWRb_HUBvawalXy-dpQleh1glx3K4ycu1AF6MmVtIpiXUg-TztC2-Lu4AhZ7s7Uix255rferA9BlOZhgO9u0mgVnoUrq0m5PX5GhxBaSKZaIjwKPBsazFX6-z8FwBWkh_Ceg_hpV27EhWJZSRC1lbCNObavFw7Itl41ti8FkkZCs-XjEbfSrfD28oLpPjrlL8OHVPVSGOTATxwv2hkC-hPxa6iz7oQaDyFDE0D3M_ePNMmMFj7a4ypZMqZMcURycYkzpZCYXRLhcQbE_-ZrNsQk-jEe-qQ3p_QiFS5hJTOi-JpGL9V3DdDBm3kcZA", width: 3120, height: 4160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100767775877681413488\">Sam Yong</a>"] },
            { photoReference: "AWCwydipdRGjCuaMlhk3gA03GCFLgsHRY4ophy4q5Wkr_SzgyNpfWcC1Pq7673FHKTEiJ2QXVl8hWBtu0eh4uIMXULmHXTiGqocdtS7Vo8rzYiQx7Z0M8EF4LVQ6j3MNdgAgNwGMeHs_R9_Ob7T_Svn5d5sW6CFX8wKpgaQFi1etGwh8McAqqdrtGxll6DWH1KQPkP0zUJJiO6G1Jom2xTdGLepvX_c6uGSWvv8jlAsE8nkAa2jq7haZ_Ws6xTEPEZuJjofYBNPaeFSFHjYbndW_Z5ryq8Dn6QshbbDFUflPMnQOLlVCAP_bc9manV8Bscxj2B14ELW8Paxi_fiDpHi-VOBSwCwxoggAAOYWkDs0xV55q2UfNR1KSruu3MiFzG1hxnMjaxTn6kOxbyjZ43r0b93QyVWNAqPk0TlpA9-Bqv_k0XSA", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108746824367286964631\">Chang Chi Suon Ronald</a>"] }
        ],
        summary: "많은 리뷰를 보유한 인기 슈퍼마켓입니다.",
        updatedAt: "2026-08-14",
        highlights: ["높은 검색 빈도", "많은 사용자 리뷰"],
        tips: ["상품 구매 시 유통기한을 반드시 확인하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 9:30; 화요일: 오전 9:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/ltssuperstore", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9571919963995672847", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%B0%ED%83%80%EC%8A%A4+%EC%8A%88%ED%8D%BC%EB%A7%88%EC%BC%93+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "이마트": {
        photos: [],
        placeId: "ChIJYcZsJKJpOzIR9jfVasMVNUQ",
        placePhotos: [
            { photoReference: "AWCwydjlmMkKRVKUTBxKTvLDEktD8Yys2AHWIZyknuqnd7SuU2rOV8QZn62asO0Scc5WLRoqpBtTo6p4ek4Yd-VEjjlP1nsf6zQvSQs4H1z13q-46DER-aKZ1AlNFYkve6RC7lP8tVT0HXQ9hg_rmOB3niUs-13HJI1CojyTxg55Lq4hPXY3hZ5srrXRGEML_0yB_wTaN-szWf4eJWrgb7_4RGLzbVirDV4ce2vAiQrxKsFBH1v4fVQT5CFn3vD9xDeWhBl6wsJ5329bhHwTO1PekQPYSLEh3PdFt5nTxm1z4eEysQ9ZGoMXLFlSjWq2IorDtp5ys1tpnP33LcmCQxDtUSp8-Lh2COATGAqA6MQa956Jc2bziRom-Pl8L80S8LY9W6iAmGSgJZCyopkDf2yhQ-cKUAnhaPdzxxA4O2NqrCo", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116752230452396842511\">Duncan HZ Wong</a>"] },
            { photoReference: "AWCwydjChgcypDxCfHw613zHavB-mJ4KEC5FM9UHu81XKXHbZ0F3E7AtoAshVoHM-0Nf7neN_Gm0uR0YB2QYwd6clxq6lTY60qNdczSGUGUyCKfuZ5mT169zyqXr8n0qcQXVcFmF-2SHNvsC30UxvfLQwZUH6ebe6c6B4Y3PF0ufXGNC9acRm_RLaKgezk44n9lU9eMssGMr-1KuJQbNY54zQtVP8VSbe2NmHK8NjJs0WvfpEGLALb_TymhHT5qy_8fiHXRIUuhd4mO9seNlwXfA-lkFzCB-oWjDovSCu6hYXI5kE7pdrV21gOq7KNw67of9iazk1VM3m9y2uRMdQ3gcMo2qlFi_16rYG7cYdNFdq4INooZmO9Zznt_pDWvb7EZf6FO5qZpCxYpMtiZxERuM2luies6MpzfXDRXv2cLzAYJn1sKKkBy-sqpJC5Xquwzq", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106933027422582832722\">Sharizad shamlin</a>"] },
            { photoReference: "AWCwydiUocZvn8oegjIvo8HacVt11bFl2QgccZOIHuzpkBa-EDTenf-usRM2vtAOJXkm0YxPeaSMV3wi1jAcfqoQ3iUw5DN7g3Ec-6UrE6IRQVCJfV0XmBU391wgmMBbpGn9yiQ5tIeVCFOBx-OoIV885GwOv9hVSZ3mimAk8iJb6BP0gtpvVVm2mthK6drC-X5pp5M9FHQVo_VtDn0PrQEzeHoE7Qu9yd-KXR14QKwFE9jdKMw1wgSUC14wM5zISEsJfTteXYl0OkMrcmL4MfY60rKbeySDFFUHzFQwOI2H5GudnzOqLFMS8YK8M97LAG2ug2y3sejtx6etfY8kN2WlSEDwgcZ5I0fE1V_Ra3vR-CnnPfFATzjJvJhSVV0H90JUqSKV2MnJ61DpP8Ic9lYHhKL6SAPbajcCqs6x1WdzkFc", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105653308447359840213\">loo junrong</a>"] },
            { photoReference: "AWCwydi6HNoZdxlx0h5lex4Ws35IWl9j3cs1Inm8U-y_glhtPMHLoTCMc9gfYqNTFD9qoADK-XxTzmGw6ve1JXv0op4gmKRAD_tbOeR9PSkxAr8smS48DdzZomoAlP9tqUPH2pEyxXTP4lYpSEaNkJuOpY0weVaG0zSRkYsLcn1LYleL4mGeLz5fpBFxuXXqpQMPwUQMO4gjnO0Pmz0QDonYdJVeeZ550GipBmmNisxHxYDpBYrI7wICino0vwxlzDnRLGDURjCa665dHoypihHW-u79Rc-dZc4M528m9ROUrxiLwrXVDPyxZvxgL2aEqCQHNA_PCyPGxl7El5lMqE1t-szfoJwS-WGq_LfB20fvUaa0QbgyVY3WpXY0FKw_PcM7_l8yizf0ZRFGpuoXyADjgaO3sAvNzmF0dsccHWQ_xnDXt_ig", width: 3280, height: 2464, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115998366216010865635\">Ceds B</a>"] },
            { photoReference: "AWCwydhxlLPMi-Lbw28HmwM6PH2gEYHeyN5EShKLVkqa29nYkiN_nVOYevYH1TiXRrkU3YAgHM1AaHzLkwdinEI3EoXTM5DndnQJXPCzdR6xB9nlpbnKJ9tk8Tt0Alvb3dOI0ePZ9r9adncFixc6nonUjz6c_9ea_4PomkRRrTnSsxF4v0Op2fBeh8Kgn8BbgYVKL6oy91lsTpMnlyVk5HjmyMfDzfT14iqownB4FdLYa-WftoHQL3s1JlWnuBaLebiB-2jfi9HjZhbyt7SrP8U0cVjN284Nvd_zQGM5eYSGpl4OBO2PWXAG69HfFLZShFkNES9kdf2wDPh-y6mr3UbMCXng9PCrg6YNOS7Zhe2GuAfYBzoMZpcm1Zte2YH6hA64YN4Dn-oaYYFHpgEknPnonI2Sg0eCctOsjdWuj0zPSSkF7g", width: 3280, height: 2464, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115998366216010865635\">Ceds B</a>"] }
        ],
        summary: "언제든 방문 가능한 24시간 영업 매장입니다.",
        updatedAt: "2026-08-14",
        highlights: ["24시간 연중무휴 영업", "다양한 스낵류 구비"],
        tips: ["초콜릿이나 츄잉 캔디 등 간식류 구매에 용이합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.emart.my/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4914858497399928822", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EB%A7%88%ED%8A%B8+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "써니 슈퍼마켓": {
        photos: [],
        placeId: "ChIJeWiYtcxpOzIRb-EW1IYkxZ0",
        placePhotos: [
            { photoReference: "AWCwydinmzazKjZU_2W2IvpITYm9tMpu8a4HN0KGoqptSFh-OatPrejv4l-iy7ebBtplsd-mnnRVpYG8p2k6Ok_SUYyAiSpIgVKWMpQ9kwAn6uiET-lN8l2dtVUUiuBBqmNSA1bNUOc0ComIo-buuwCOuwzty26VaoTWV3FbAsc_tKgpRa5Jf5RULFk9Y2Hi5qlwIRc9qw_vHNj0D2xJXyLkjZZuQfIOHxRta5BYvBGueHmzvh5ssj6k6RnU6W9CYX-bWd2UOctN5mEq4HCC7nTI_aQDM8tQQ-IGVrkFemqbTtX145TyWGhKyAAfPx5KflkKHHiosEP4C-tjiFslRoU85kWZ9-vr4yH3aktoJbeOliw9NGLHugWSHnnZmBgK1lLkVc3v-w67KJN4X0aUuPwdYj1Ba4eTaekSDT-oqjXqfjQNDw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114314590464763106211\">Eric Sang Hoon Hwang</a>"] },
            { photoReference: "AWCwydhqwaS2pwQmA_qbaM1b3vA3SektxySZAaDawEjYPJCcjystkzIn381hKhMl-DNlwhrx6yGtNA3tGtDtQPFyUGnk6Mj6uTqAD-UIdVBeZV3bsWFT0-Rf_BDqmLp_T2uXhAi4Ib9cfaJpJFM30siKFzsHPSaUXmTF42WwcOPVVnDe_DWR69fyWYDKWuxiEJxMs9im9D88tLZ7JdVboanDUsYDwZinJBB2wyYlISwFNawdrkLBmkcdkEzUXVxbsvK9evj4KY84fWu_t8wbcqVemy1LHgk5HEl7XAsx4SVXopLyU36aAnEOGZkRBc3EmVVcN33xLOfxKUJZP2mFPcuuNa-uUW2UpnLKCUr13K9M5jyiZtU7e3TNxARZsAZ31iUDoLZou62tbHI4Qh-t_iHlhUe-dsre0ThT07RRoxNVDO0CSjYA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114314590464763106211\">Eric Sang Hoon Hwang</a>"] },
            { photoReference: "AWCwydiPW_TIscB18xJ2z9zxxcVIP0-5lBWHPwvV4OcK470JbPE4syD5qgkG5DVXnTfoKVnILhdAUIHLC7dGRA_w2z9EeZtR5QgcVO4ryoMqQI-jcMIHIbfLbVu9Bydnm22UYlSJf1z6Fme1CmLiMiM0Ah3T7xU1fRjhVK7txRt6Y3XEf8aMBGE1SMIc2qjIpIfsNQV7KVRRHmktJR_eA8r2XXBKyI1K4KcQl4eRQ13SEsqSJKuOc9hrONQAXNW2vwOlnV47L1W7hYl0MT4grUUOVeg6Rnwn1ua4PE6ixRIw8xuqpkEnv3Kd9tAk_mZVnOhd9hIeQTeHcYypeqwMzY-l7_vfcWfaEpRzjHENilL41lN4Lcno2PgnPo8BtQGoDqxBxxjSNqc8PmpDbIneRpoIsFa3aT7y18WR2GafEUG2PDJp4tc", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114314590464763106211\">Eric Sang Hoon Hwang</a>"] },
            { photoReference: "AWCwydil-mEj4N0a26q_AbSXFS-F3ojThy2WXvbsUXY7tPUiYJg8Q9QWyXo7DamU3-_jpoE7POsCXMvUodwGpjw3VoHfXZkwBaCbwNfl3MsuVDWbddX_IVhJ5Q0GLITnHAiF-BmVcgKEkYYQMwoYRR25fe38rb6M3CF5mvMotk1bMv5ejSuG-DG7Bzc3NohHMnFxZXW2kDi6gtmfdXlObRuSt_TPg6xLvjZ1IIx3s3l_YWJWeVlC4Vy0IWl_er3TAqG7tyYHLAt_T35wzgBOcGy1VwAcis1_legNyH3H33U7jJfawNsI5mIzEMFVBdUpbDldqKwbgYOisYySdUUV0AKqYtI2a70qLJuQwFnwQsYnS8D_Q3cWf5tdwytweytWH7iEzgUPD-yxoHibKxD1HK-XSVqvIM2USxeL4BM95MKfc2UcAMQ", width: 3096, height: 4128, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104792776853103746974\">SY Hing</a>"] },
            { photoReference: "AWCwydggC_iRTjJ-wv44uOzgBaguMWWRbv7CpwoIm2pmFdyiOuR4ZlLRVNYuh-EzWxi3O7tApwWhEb37S1Ia6Xl7zhCXU5HWyGX4Uzuux4HJPgRj337_Cy3pI37f9r1fh4dtHpaYcajWPUsIEHhRYYj7jcjGG5mM_N-pM3dsYC-eEsVQD7XbKLWD2o5BqbinowDaOHdIbElaHLhbd4Kr_eTdi2irb4JqOCWAk9xTwQX2saeFsgTgNaseMvy-prd64cqBkQ7PUhvqSiM93OCdg8xcnr8uArqeI9pYpRlGUkHz7PpI36VJJo3yC4uwn-rcTY1hkOvDNX_z9hqssqDtYVocW6dKZQTrPPlJx5RpTnvEL3xH7dsXCmj57wkjYK4gt5dGIXGu5Y2Paysb3X3j_u_QQIJBrYk6LWAbLRC92H0MovLOUvA", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111611274308677774808\">Kenneth Tan</a>"] }
        ],
        summary: "매일 늦은 시간까지 운영하는 코타키나발루의 슈퍼마켓입니다.",
        updatedAt: "2026-08-14",
        highlights: ["매일 오전 9시부터 오후 10시까지 운영", "높은 고객 만족도"],
        tips: ["영업시간이 넉넉하여 늦은 시간에도 쇼핑이 가능합니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/100063566501961/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11368532995869172079", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8D%A8%EB%8B%88+%EC%8A%88%ED%8D%BC%EB%A7%88%EC%BC%93+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "원스톱 프리미엄 아울렛": {
        photos: [],
        placeId: "ChIJIzG310FpOzIR6h-qHSsdLig",
        placePhotos: [
            { photoReference: "AWCwydihG72DIfBpI6A0RJOkaUa8vf-Y5HrX3_qa1JhfwR1jQna-CPTElrf1myCn2siZ2my3b-zEBuV0RsZco9aLwgJbE0QN60NLd8dsPyd63RZT1RJk26LxZlUrks7I5zsknP_VWCBebSSlzeF_BhxhxtFuQeGQA7bk1yvwaELDStZPAG2htjjvbBwTiAoq-cLkvKk8P17b77grJTbZmPE_G4CKAOoIo2f2DwGKsf42GGKzeahS6EqgFFABhexqXDxYeeB1lSeqzEjLtKHzj102oAaL0s3E-u7a0X0MuyjsplnBJicZhattHSPkhsJFBMOJWW2E0s6ifj7PtK1Wj-5cXHBhqtKMpdSheNcqgJ_DzL8RfvTSo-46FKG_SNNH0n5zcI4kmlpNPaE2xj8MgQklmMkMTBIPd3H189g00NJUbk4", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113840598465602325925\">Joe Soui</a>"] },
            { photoReference: "AWCwydjKyPDMixo6CiZimtFTiGFCCbcYGSfD1Nz9zXUtnW4NXuZVu9D9wVNzuLrOUZCMGkXaugehnytbYdBw3wJBACie9VHdHMRNcluCDPg8f3YSS22Ygx-v0hFF2_x0uCDnAiATnkxfzwGmcWBkKyFQIRjwlK_fe-9Ql_H-7r4QN-nTL130B5UIVWJ1_SY0UVG9zwmXmBL6-FlE7qRZka9UNMv2wMRIysUJKFuzB7QQv3P5CZ94aQ9fDhWPoDdvJlWbcLdMGbkysL1dzESTRg7-1tcgNhSd3xGpKjU6U0-ZJhW-ootHW9dwq9AfKVnrIvRzQmFcMlMFVNqTM-snhNV-U5suZ2R-bPI6q-BG2YLulZCcSI-ydMy-YCV6u9r-c1JULmQW3dsZ-7mH5cv7bMDN3SlJdJ6F238SEkAkO-FaRj-rBA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113840598465602325925\">Joe Soui</a>"] },
            { photoReference: "AWCwydikRSdC8ESUMV7gJxec-2y1dNDVnvr4UbjVU3iuOw0OQhobD8U6sVVqJzkVQcqKD2hTk3bHId6_8TvdnnT5mBJz4lYCzV5pkgXUTe8fx6E6xTHrEq-lJgVqQTYpA6NPUB7ojyQW4Gh5WRTrNtVR1HWBbnZqLNOJLp3S_2UTVPBnGPKFohDDb2h8Ox2qXiqWj799O3_TvXL0MEStDmVis2W7cLZrZ0wucjJWeOMnwj10Nq4xqQNK0rDcZL_Jr8nw0xLSQePrIiSCF2RuMeW3ucZgrCvwpKErSkTvkLGWfRnEJXF15978nca7zMJ07vfPMFQ3xbgL9D1bCFnAogK8qjPH3ZV7ljxVUWSXBgVu0xs2PkyHcAIsSo1C7k64503Hpa53ALU4K3zHpBuGz_w6NEXkQpH7iL025poQWIZIf3Z6ci6LJhRHaC9EgaFBhS-T", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100658139494563963194\">Akura Cesar</a>"] },
            { photoReference: "AWCwydhj_oId9Hr1mfoblq9EeqtmRXblfDSr1m7ve_MQHNdQJ_HvetpvivnuPt606qofN3gh9pr0sZ_Yps1sKSqlgRi17rFUWLh3MQ6HxSvfYH7Y0OTmhI7CRR7-FN7xYNssdhdL9Zdy80sFFcsSNVR1dYysLA5O3aq40LQloX87Y2Zg6Wxp1PTHvBxggr5u5ynNfkRaXjIOGLfkcBvWdFjGxSXrgKQeCj-7o_HRQup5YahDCLFHK6Koddr8FFtVxRagqYX1s3pZgT666N2EMK-UrAE56UCstmMhPEHgYSbO7cCmfcvjZ5_a4zAkeL0Yz67znCDpzSjgr7w6w7XQLN8cbrf0GNSMnS5wf6SsIDIwmVCJXTlQPVk-_ZXwYdghUxrjDDELfYhDQDRBE6xc-oujql2TSerAImbE1op_tyOKu_4", width: 2368, height: 4208, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102027802401486889473\">Abbrie Kalong</a>"] },
            { photoReference: "AWCwydjWMcNu6XYqa1ZR29vLVklORaqVDGvqHPBeICHUlVVNAdtRMlo4yVPhPdXtHkPjxwNVkLfNWRqpTPj9dsB-NprdpDPBFiykudmkP3KKr4fmXaFDccCNW7sW2IVT9Zca03-wIYdbTB6fGxndfKbOHbZ1wAz6weuB1abvhH8cxKNDlACqxqIv_tqdPGjC2fkjfB5Pj1M16d7F3qwZVeoJlFO0uLaE_7q0Rn7ci0jRm55XjhRZ4Y3Yr2Jln5MiweANX-7X_IbQ3-kGd-X2gqYiD2L4L1s1kkEJR7QXhIHVVOmdYKCSM-x9aaxoOFprD4uePkCni4GRbFKXoY94bbVsTmepEV0ZnAfK-Df7-ScNJKdFyw0m4-V3BQG4LKAIz21Z2BOOfmzfQ7Fe7OzSXTh5_OUKvcApZ_npPXj9Kf3mmf9rgw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106336251292379454844\">Laici Longan</a>"] }
        ],
        summary: "다양한 가정용품을 저렴한 가격에 만나볼 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["품질 좋은 중국 가정용품", "합리적인 가격의 화장지"],
        tips: ["NINSO보다 저렴한 제품을 찾아보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:30 ~ 오후 7:30; 화요일: 오전 10:30 ~ 오후 7:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2895283681464295402", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9B%90%EC%8A%A4%ED%86%B1+%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84+%EC%95%84%EC%9A%B8%EB%A0%9B+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카다이쿠 사바 기념품": {
        photos: [],
        placeId: "ChIJVUkhIY5pOzIRKsZfkBHJlug",
        placePhotos: [
            { photoReference: "AWCwydhnvEMv2a68a39qRrhKPsQcZuGlzcWKOTV2SE1klk7Qk4mS1Dg8qQzjZ7-R6buVy67TeCzDf9e7OsznAiC1bUjN2u5b_aGBZYbplJN57E7rW-sa91J7p6rhTqrX7ftEOixhhrzjYaZXOLAWuAgTO0vSESIJ7KhqeoqZHsQjYl46bprchPrkI4glmA8bIysanHPfVG_vOQ-j8FUHWYLH1iEdJoXH87v5R_J6ASlitBo1kGP3u54RBGAuxPECNznZs5LZQOPzBH9hE234KTIcUaUPHxsVxjSZUKai1fjvueh85WUIdDOX6jn9DFM9cN7DzA8CzaXmHvI286g2FnhD1DjFwwHDqmMjoh-JbSMRndObUj8PtCBJTszBN2a1tPSdkt9BJxf0HIlIk-kKQQ-x0EB8tt-VvLpIOyO8CHQSUx_e9VGCWGp5AaLNO2YGyDrl", width: 1080, height: 810, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115590752566482096577\">Kadaiku - Sabah Souvenirs &amp; Handicrafts</a>"] },
            { photoReference: "AWCwydiwpe5zhkW1Ij9ogeWmXDZD41KG19_olkVt_Y0P2Vn0kXKr_pkbwGmpHslCY2WjT6rrG5sd1FXPu0ip5wYfH6h2Sg7_U1bnqt4za14NHjhjBnZE4C9Rl-ONDDrJftfVSCielbFe0j4kacyqngAUgq--YvHY5N1zkpbRoekgNSAZ9Fag7dlJh314AjbIjEEnFYcoW976pnN3UZ0cHik9Tg_v4_Cf2v7jSD3qukareT8DoCR7PkC9baJAMM_xsFSlFiOzwil75kOD2dW4ujljPZnQINcwZVIx54gg_zXSkKE3B2TZW8qkWxtTqnORVD1CSimYqGuBrAduQqVb1xVoA08Sbm-ufr_Gf2a3aaYPvq1Ebg3P5b8I2EDh1TvoalTAPQ4Vh3ENMkiTAtUAn7ObPYrpTYnC71L4RqvzSKfJ4HYo2Q", width: 1500, height: 1000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100829235981922874528\">Kadaiku - Sabah Souvenirs &amp; Handicrafts</a>"] },
            { photoReference: "AWCwydiamhRA2ch_UJstZiCq5iCNhqKojMbhfaGPOfS5jzMHhuK83mI9AP1IMujW8poLVyNsxlfrx_O3J9zNwvMpixvtw95kgaDO8IaF8aEzPf1p_P0qJXVrnvUS7Rcu0YhQxM7cNKpJOQcjtuQ4sJMEM1ga8toGkmhJN_iekXWtnGa6V8OXr1cxeH6QzhzjN_QsuVElltLYDx9i1vkYMesZz6oEdkfBict0PPlWZeteds8cVD2Dp9VSgijNzcT3ZMfex8C_0Hoqd4B0TjL8qLZ8-HZxWAc4YaERhi3mAsAFkZFCm_ZoiLmPQfIG5RltimNqEP0u9efJyZnHYSURExUnRQwegGABoQWC6KK7KGiigPNyJFxbkVANUDhKsiFHBCkNfgpvcNyTHAVhXGBBRYbbeZWR98AlLVeJHS1LaX5R8HvX4A", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116466029605002616172\">anita g</a>"] },
            { photoReference: "AWCwydgxhqYJgOJ4by4LkNHRVmFhpPsAYrkMb6ExfbSbl1trz831gkS0MWCYOsEW_2Ehw4vzIgirXE7JIJP3GB4MeN0zbWgHWqz09ug0bD7Tewte5f2qduxNFci1EXBXCvBYRtbmJHZzb2myWWjGccnYS6FaVuKe3PgObSccGgOn23PmuAYpS2_SWnCxpj1-7iFz3uBRBJ7pNznwtB8L5Ss217hCFxWp5ZKhvQhYjfxjNyCU63iue9OvPeqn2Lqu4btpaqPK7j5igQZ2VYZj2WT7G8teI0UeGh7mjsfP4c855g72oElZeWWFBcXpRheHrRpcJ1KLFYt0yQ9OnY3bL_kJoPOOQLXWq1D2U4wTnwodGFpqfD8UCvYP1e0qeBW2txAgVopF6vGf3kw6yberO3vmiwW5_nl7aOitmTqGgYma8_oNww4cAeYweVCss_OBaP-K", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106078021682137835576\">Mas Light</a>"] },
            { photoReference: "AWCwydiE-IOgcMi_AuvKhWzuQ78KcCp6L88xel3-lfqlo4n0gy4zybMyowE5r5WkxOJ-Yu0JbiFV2n8n8l1C3s4aHmMEZrr2orgkvW-JszLvWatTsvy4S-LjNyAiLlYATyWt_Ny9OlfzcYVTi82ErwY-MX5Q55A0jPZdCUTMRg1EVFU5qEeYIVKUyLrJ6ooTWGztZZnDkr13X5XyK79m797FRc31F4S7HV3vKb6icewGct6Iyh6LlTXtj3GJWCP6xiWQrXzBZjHe2y9xcAh8I63fUZNaFkVbXfIs0tIqrlwALM8v5dTydf-VaGlxCSVp32N1p5pKzkXyy5wAavqW4FcUpvSn2UylnxokJw7ENYHddNJ5oSzsis37v2qbvWYcYoSthc5gtbsNY8lWGvBN-M7wQ0CM4UjHcV1iNlYckNdc0aA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116466029605002616172\">anita g</a>"] }
        ],
        summary: "현지 기념품과 소스류를 구매하기 좋은 기념품 전문점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["삼발 투하우 및 파인애플 칠리 소스", "허니 켈룰루트 등 다양한 소스류", "신속한 해외 배송 서비스 제공"],
        tips: ["삼발 투하우와 같은 현지 소스류 구매를 추천합니다", "이메일을 통해 해외 배송 가능 여부를 문의할 수 있습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.kadaiku.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16759804140579702314", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%8B%A4%EC%9D%B4%EC%BF%A0+%EC%82%AC%EB%B0%94+%EA%B8%B0%EB%85%90%ED%92%88+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 보르네오 샵": {
        photos: [],
        placeId: "ChIJ61vsS49pOzIR6SfiTw7pmZ8",
        placePhotos: [
            { photoReference: "AWCwydhC4hIf0twO0p1cJI2Z_ueeRXm9YVlsRaRwTtNWgL_8WivcOhaqsZzpkKU2xYnLJ3EM61v8mmWINYKm3lJ9VXa3HwL3EfeeNIspCLBecvxw_wuoymt5gNMXDqUpSjQG13p8-06hzMBQQB0kaqajPdw65Jtx6BKqd1qZRLzbExgLzLp93dTYndjec6XKduIx96SwqcQTWCFXbSuwnu15_9eoO1yjZq6uyaNocCLCCgoKvchqflL_4jH6ssjaQuN-VR5zeS-ymS7SVm3KROzutyDbsN9FBjM-jvFpMxXj5-mSTRe9EgornWqnl_v-oNsDMjPCGVHudjfi2cuMQJ3aWJtCDb4q87MIKu4NPNuOG1Z48ogsLTL_MTESimBdQGZDCP6DlZOZZo5pi4BYEUaz8p5HgS0AeS1DKBbgn8Wsokk", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104851076950767621150\">The Borneo Shop</a>"] },
            { photoReference: "AWCwydghmTlicpQgkO-QdB1nTJ5zU_xPD7oqH_Ajvw1kLPDXY-VbtaezpJqWk7wDRyz06utht8nMiEQdy2kqYgNoqQtniW01_Z1vb2_xTb_cbUghw_BGYIXEZp5cka-YATDKTOB2uiW7uu8JVV32-Erl-LiLo1Op8JjLiQdBzjMCJJM5Q2c3vL7Pcmo_2mGG7y5B0j0Wo9x5yHFGfDzrYROB9xfPW1M9HBofRfhsUx5G5vd5jNRro_7QTawJgRSAJC6IoXB-KTYBQRAU4I7mKmCQV7hqa-LTvkuWP-VTOnqbz-J7d4NUib8kEKI5X7FCsrvc3kOnKdxSTlny6od11p68tWigSpscH8kfpbxeyg8YYqggjtFiHMLvRXrXKHvsPsLm3uzmq-u0Ljeh41FFVmGnGhWDocUaGEDMR9pjS6sEdOiNflOs", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104646068542741988030\">Dmitrii Zvorygin</a>"] },
            { photoReference: "AWCwydiJD9piSfOwudqwLKA-N4DfcCrAXtqsOubE5X7ah6aEB3SH3Ny3TGZsDu-BS-DRATJhnYhjTqlAOJWX0e2CBcF-8Q6oyoSzfKdoTLpL0LB0hfQa8QBs0QBPCs4dnsRRzLiVHArGxDTZmw_SJvm8ai6Q10RcDo1xk0Q9MEu_Y22zIw6Dxjz631vgf0YFj5f0CnsRVDNr7_SfS0dyAZmKq_bwAe3wXVbexYsCzD6bbEhBr16PhpmM2iiHDxp8hlYUaT9K8ABurkCUm72oB6u6eNLG7_D7aA30f8-CN7OKL76XAHjF4VZKepqrxdResCoAi5Expe5fPnSWPAMtkRDInPZb2gFCAZecmM2ERWkcQm9Csl8bQh1oZX87W8hKokokayEzFgRNhSQgcVJu6FQNLh6L60M7EpL__cr2KzD_eETcyudftvS6q0hM3agKcNi6", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104120561287503703850\">Bulbul_the_bird</a>"] },
            { photoReference: "AWCwydjy-VtymDINbHXdG3R7oA1K_4BvcdswdA9g1niterRUJmNBVJR48FSvWvhNCsOOBtgj1PPtC4qqfh-dlTYHj94QjP35705K66E-VF5BUv4CJRe8Ca7uHnj5CfiPZHVlp8Ysq_WPnWmNG1dvLh4Cw7qqFPQ62vSSyk7YP58Y0LRTQnDhWxCMnIWzcbTt3HOgoHZMj2DyuQdXtkH1jTB2v0VlAuBYyYe19-V1dHwcNFPg9N5DxVbSKoos_MQijtYUD6kJoAvZ8ufyUiJbr8m78z7baDlAXTmQ85v2CLEm5AZmRfQq5KkBD_vmXia2KVnD7LaZIVt9KMjw-W8G6CO_HIYlf6XQ6CuAB7MlY9QDCAbIoj9JpXJ0y7cR1qPT4a--3lWZDglVU3j75AuFr2_ITAi8djJ58l6_SZBuhiRSg-rz-w", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104646068542741988030\">Dmitrii Zvorygin</a>"] },
            { photoReference: "AWCwydjtIEBaKHwitR_VEZVaFCBS80deF35FPO71XNJktYLpf01Ou9WXe5uAFSKot5Ru663UUVEfygv7p-Ciy3iRH6bZRSVoE8vLzi8exZlnDq_0BEG6UzaFX8SW5Bso9MI9Y32KM01e5K-Yzc-QILrQQpB5rmXD5ibF0FePRpYMKvjPWnWYtahH5XDv1r_ybTqurRJEOAKptm9HZ_IVEYK4PLGT1w4DFtzBrabN6ZRMMi5yHCoBW9RExi0FHR-YvOBX1h-qK4OqB1Zpe1h6hMhitSZW4ZeMb9dsHbTEPedfpng8I-66NC5GQRWUyFvG1WkB2RF3cGf18uWFfrwtQGIGiat1HltuAePTIT3GtGnsJYmW3Pw1CYp10dM-4zXw_dtUYsXb0wG-J2WCR0QWNSNPbylJL9U_Y408h4DUlO6Ul6GpyQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104789792769165602637\">Steven Yu</a>"] }
        ],
        summary: "기념품을 구매할 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["높은 평점", "기념품 전문점"],
        tips: ["방문 전 영업 여부를 확인하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 5:30; 화요일: 오전 10:00 ~ 오후 5:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://g.page/theborneoshop", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11500479371146307561", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%B3%B4%EB%A5%B4%EB%84%A4%EC%98%A4+%EC%83%B5+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "트리 해브 골드": {
        photos: [],
        placeId: "ChIJ8ePiOABpOzIRnyNTjrJfang",
        placePhotos: [
            { photoReference: "AWCwydiN8b7uvR_nnSLSB_SHJ_f8NqOOqMcWpJ0_x99XLfHDXUBnfjBpL-uLGqJtCbULD9ChVOItj1XuhkV8A_gjXF3C8d9pFn2-dRiBxt7yPwKbjfSqKOZ9XQn1eIMLwhesKyWtFWVyEfs2uRbe-9c1IiEANvUdjf8wm5XQ7rlnd8F8fFQ0k4WVv-7UuelQVp4uJjjXV9WYQXEG7KO986Ch1qYqKJaJeQIPCez5zTx3yaEt8TDpydnOSCigYX7YiKTSOEsD29nfyciLciPWvmvBISScR58uwnkRwqvA_EO1Bk_K6BwLln7Bi6J8tZvLaMeBWeXdK_aoYS3Z0SxQ1h-rUbr7ZmV3Dd3zGuyMVNTHcubCuiyk9punWKeL3itcFm6MxhpqHcUZ8llLq-jq_helX7Ur2lQoPEHJkBx4HNCgE-0XAG3m", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112806673945904401677\">Jh K</a>"] },
            { photoReference: "AWCwydi5yWykKzSNTE932cD6sDV9cWqEdWZSCjXJ4oQYpmOSfRPNoZc4GWRCOeamb1Q_RZ8YvGse-yBVQIvZtnlykfTbVml6ivG-K0cRsjnIYt-bPPhwu-5AlBpTMmJ4JJeUPSfC3DWgjysU-tD-k6z8f_1aNaEXtMYV1qFHkgF-UtqGQ9HlMFetz_leQ6tlbsHeASqtY_xiRtoJz6a38nMDxnKhqpyAr7Iw1wmjKK8cD7iCKMo6S8AtL32VWEOaEqX9f0l-7ThvKF8LLSkO88MPXDvbj2o8Ks1aNeJ6WgTVODWlF9Ug1-Qs6nFgWBChrPtyaTjkGNWJ2tkiB-k0ML8rQZI2pqeVL4ibJnOb5o2fNg-9enQQs30Ifre6YOS2zSGz1CBGOLHPaCzaeFrJk3-NI9EJOyaTFWlF3EWwer7k9mYaBcN-AlBBoyTDzAfQJnGl", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101723073723644924079\">TREE HAVE GOLD 树上黄金 (Sabah)</a>"] },
            { photoReference: "AWCwydixVywu0rJLuaBw8qYTGji4WuJnXXv02dTB6AQeFgWUoQ2JtXeERJVyZT0S_Y0Cxlw5EhOUB7YDJv9lJe9CLm0WTbpqmBd1GUpXFBYwj9cNLH1veSJ2clEZZiC35X5dqCQw8xIrU97Hf7-_e2uXUB2o4UR0QjOoJ1hxAvEKkR_6ZyKX7VK4bXaACwMutmFDyUzCesEMt8aDrmGCOyihmMWUdvPwhcGhWXXhjwV2jZ1GlkXg1mo24qff2OlMNErm5azBeBWi9gU20PfbOvkCC5BenbzE_uWT72_OIzO3cAIiXkE2ERAvzMa-1WAPbOw6jzKUpwz8ULwHcpxA48sJwjH72FLk5J8nBqFJB7F8CyJasChEzjpnMa6kbUHLxoRMyDsi8lmpWEq_-7ONuD9pgLvmy0gEJZgUNaMyZQLscAHF89cWY4olI6J_BFiUKHYn", width: 3072, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115907510712410603605\">Jun Furukawa</a>"] },
            { photoReference: "AWCwydgfHVN_-BrtSRKeNNpevy6STJHxih24no8EJdpuq-hN3t55dbKyPCIzXMO2yRliG7FHwUDlXDjGVNyJBaoYEZ1ulsiOA2e_KqmZuJASCD-_XgAy44-IPMCD7ME8-4GBU5vBMN3oe8NEjERgLAjlQV_vu5rWN-L0aY37u9b6yD15cVxbI1B3wCp9ag3gneOSmldiYkrxF6457HzJ7JnsfRtoF9ovKZoCiiBanIhxB-ZZVCkBGJ3ABLPuBLuEV3prTPdhr8MIUNY4CnbclLwfTkR-07QzCn7w0TTyrtvJ0jLkD_aHCd4wMq8Pen4aD5nj0QPlddrSX4GhyfwfH6H36Se_E7zDdYGGDr8gNptqv2nEL7_imaT5h8Zx1K5rgi2X_Wy0j9tW6zrAwdnnAlNEG5rubmzXv78reRoRzWRgHzox3V2NzhjapiGC18--Qzao", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103436637145852508900\">Sasha</a>"] },
            { photoReference: "AWCwydjcCon2vM7X5kv0dOYvTn5y_ZxzVL66iXHICLoS9DK_j7vqsPN1zzBhDHhI-9N8jr_z_Fx2PVLX0eiO7P9Y_PnCsxEOOLrlZ0NwBYVTV4F6nQZoJ0wI3-SpIZBHDbS28EF6Rok7EmZdK1_YRoZ7RxWovb8OVoLypw7bjNN60udO6bciTqsWot2XAuNd8dlKrUiueQ5E2gpjIqDf5Zi7zXUoqrCfeBOMBB8kHA2eegC1Wa6_OT77qEQtaw0XwAH4TMeIL7H_kf27PkCcSI759b0Wn3fatz6nKraQ7ZIlON__QbaDls9gIp2TAFzU0wDRD_x7Rb51aDto1c--cX-J_eXXDkzYIeYRe_ha6QlAXsjDJCY8IzJKO339ndiP8dG85fLszOTNx_oUQLP37uCFaMHuCphF-UQ6_Cw6ztSPQ8IkxCCFjwd0F4MfQfL2fA", width: 992, height: 701, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117580867654685427971\">罗济恒</a>"] }
        ],
        summary: "다양한 두리안을 즐길 수 있는 테라스 있는 맛집",
        updatedAt: "2026-08-14",
        highlights: ["다양한 맛의 두리안", "아름다운 테라스", "친절한 서비스"],
        tips: ["테라스 좌석 이용", "다양한 두리안 종류 시식"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오전 1:00; 화요일: 오전 8:00 ~ 오전 1:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://treehavegold.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8676852852579312543", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8A%B8%EB%A6%AC+%ED%95%B4%EB%B8%8C+%EA%B3%A8%EB%93%9C+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "솔트 앤 페이퍼 스테이셔너리": {
        photos: [],
        placeId: "ChIJIbQunIVpOzIRgcVKtBs0nPc",
        placePhotos: [
            { photoReference: "AWCwydgExD4qNcl1aPtoxYnr5A1Zt8CZCXr_lG8k9gk9ueXi2UmYrxHas_Gd6s1P9hU4msKfdhnaBXkJb44B3B5zZNoSNO8FdAz1QgNzSgBwK5cYtSft0s1VUSl6dHsxxODbfwLsaatU-f610vOvgn04BkAcR4HRTZaFTHQEx_7D_eBlt9s0PHqUTIcZvL4gM2jZTnZkWJEcqcvZyl-bS5IekDlD1bmLfvrNmDPYqTN46rhLHd8M4n2g_Yax-gF7d4W09rxpbIiGQNgPUCqFmZCBjk-ZW8d2HxtZZEtT8s35YhZrxceh9LLsOIEzDuVvpMYqkQ6kvaHSX9usbef6dZl7KsuPCJTuFN90FVOEz0UhNUTNC26iOGFLFGFjrjACzcFr8Xs_RnsNtzxL620Nu93ve7KjaHAOwNQplr24oAi2sFYpdA", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107153993062007471403\">Salt x Paper Stationery &amp; Gifts</a>"] },
            { photoReference: "AWCwydiatjvf8KXjJ8t4R97KFlMWtvDg6uOKZnR6-Gx0eQgp6TrygQpJNMyO4FK9aPKNr7PiProtQX8g-r5esxKTw1BHwQoSj7eHwTzbysxOe2o76EWdNkeuVmPsMnkfofV17qvEN1gwR-QcWmgQ6cE_k7V8TPb0WoRmKE7_ffMCG65kuKohcbOO6aAIeDAncK8cG-YROW46cjd1FsL0ZIJvzJ8iuEqWerN-NntVvLJ8ABX67QzStcGJTgvbFyGmW5jR-7qSIqbiKfEm-qMntILZY1lN2tt73nC_NrUM3YlWL0i-I5qCVqJ1dwy6gdDf25j2TsEOXRjzYpF4BFNDb1Nk2Cq_pu_CyzWCKZNwEra_5BuixbljRSjLOzulqK9WeO1kRvyB1vCmFPVX6aufDoSo5XtthIBRwZhv1HBHqd_CXo4w-A", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117203203652634549205\">David “The Explorer” Hogan Jr</a>"] },
            { photoReference: "AWCwydhHN77vXW1TYXRCd0-Bjs3mmZ5fZyX8NUouxvYSm0yjvNHe27IhPM15JwGhBjRkqPa2CDe_qSsTxqFy6HOMph7I5DlXx0t2jxKMMBcKuEowQGXO07wL7ePNwEX1GRlpCj0U1Rx9RCMO9OdpkdBVJVWMXyoiH6DPy8Bj8PArNIAouzBWAYuncMFehhi_F9H97JiSltyPlNt3kSByo4jc4AJD_lzh_4Kv6-gRV8d6egE5abYwkOq58PoExR9SRERzM-8ijnVU6KNzy-UX5En4XMT-YocsQeQ98FGYK16qgIU3W4NDb3UrUUVUwsmlqtjobwxngvj2oPDfaf5-a82Tx6CIRyky5WfKEccPJB9D1kL3IUn7pccnlQQLU1Xu26lNoQloFGpDJdn50cx0Pn5WfOx07Z7IWm28G0Ea8Pe-o6bMIwPQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104950464093711576018\">茶柱タツ子</a>"] },
            { photoReference: "AWCwydhL4TZbDZm6JjCCIHUjtTKHC7sd9fPnIv9aAE8FRNz7t7I9ISYKjeeAt8WZnZSkRGaczBbf3rSCl-rKofCzOqzggGwGdiSxIPAMrpTNGGqTNlpHGVnBeYh21KrOtFE8MGFmJFT6h5h-QjFgLro62CaXcSdo3pKpQM2q-nUGNhm8ovPPffUE0nWueukll3RK2DmYKwBZzw_Ewfv1AX5Z5AHAN1LTrR4O3g3k_IIFAbfoMvE6hrwLKe5KfE-NO56xd1S5CqfdJyZOPpwe57nWsso-QfE5Y98cW9XlWttyuYXRWyurnPiQWKbij97iSmStouvKTeQV6qMcsHSp_c_l-N33tbqF6Zipe91DLBt_poyOLnq6S7O3sePUV9SVcylfQZVRzePIvwlfbru8Z6Z7n9lY-nIyrEErbO_wdH7HGhL7OG29", width: 2448, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117070577886368060197\">A M</a>"] },
            { photoReference: "AWCwydijis5-wsLDNoSOhDF2T6hwU6uQ1RrFzpV3-Q_dwaYjhPb8rJBoN337XaiTd6NmEAGFfYV4qkRkfigthrm8DZW5lH6LveqQBxiNScv_Gkbdt31gZarVAVxyWfgUMUV6QFPOJFBuZgkzTgL20t39wJWrIiKTUNnMJpBTQc_OQb21SjSkLy3tcPIMi06OP88yFIg6kzRvEAoeLCKUWhtSD7D7ldVMhqn0FbbPWi-wSwLCr2AJsyfAqp5lzb2fIOj-qlDuwj0SngandPwSHtkhoHp7i9dVHjJcu17yWiMM2S8jC3eGGKtVjHGsOMyQF5Xr8_zHeSGyA1LsxzrffuK5CkRGqIaGhbZvBgSBHAnoVtEfsb6rgjWdex5IOzupl15pHJmVx7ejWxEc7JhlaFecds2JW_j6w6mn843UApis7qGFXYw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101863290739824281156\">TROO P</a>"] }
        ],
        summary: "다양한 키체인, 배지 핀, 문구류를 합리적인 가격에 판매하는 기념품 전문점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["타오바오에 없는 독특한 디자인 상품", "다양한 키체인과 배지 핀 보유"],
        tips: ["기념품이나 개인 소장용 문구류를 찾기에 좋습니다.", "가격이 합리적이라 부담 없이 쇼핑할 수 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 5:30; 화요일: 오전 10:00 ~ 오후 5:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.saltxpaper.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17842193117328622977", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%94%ED%8A%B8+%EC%95%A4+%ED%8E%98%EC%9D%B4%ED%8D%BC+%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%94%EB%84%88%EB%A6%AC+%EC%BD%94%ED%83%80%ED%82%A4%EB%82%98%EB%B0%9C%EB%A3%A8+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
