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
};

export default info;
