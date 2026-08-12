import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "이치란 도톤보리": {
        photos: ["/images/osaka/info/restaurants/ichiran-dotonbori-osaka.jpg"],
        placeId: "ChIJK7TL6RTnAGARYiifaSOuOFM",
        placePhotos: [
            { photoReference: "AWCwydj-Qqwp_CBvrvVjkrAlDRgXcLfmVeZq_62vvH1cacwP1apFg39hjw8kunOM7PH8xuIsJvdd6znQwVjnp_W5GKcQPo7_gR2oXP6uybndmu2NJkIlewhQ_FCx0q06LovOlGiqTImsDZ9wH9YVfZFcrlMdQ02A7HLkKZhTgElNu69heEqCyTJM7lKOt8mSFw9V5vfPw5twpkrY4gPY0bsGa4ogFBqZFJyHB43i5HaQgJDsBXmIo7w5thVz61ZoW59Nq_1eG-noDGZ6MvY5nzUmgm8mvfFWUkA7YYNfqm73eIb69Hx13PaREmxMFf5fFsW4mEde40I_9m0fYkaKLUd7tqtiWqIqx4dg9APA7eUh7PVZTn239tvpVdQMB-kwNZimnzSWgYOA94uN5rSkq49glLhMedwFjq5FeWRvWid_i07ReJE", width: 960, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110014633042441230850\">一蘭 道頓堀店別館</a>"] },
            { photoReference: "AWCwydiEMrIeHEiypurTkY7scm2ahAu_6qkzRapG4842ouChW1D3SjuhqEHV3ZAj8T_5AcRrMTq1E8XJ61VBSQA4PBbBSBm2cYCiDTH-FE06aJxiMmxNGrBeRis_6fzpfBQH16NVV0gLuFXow1JIIowOD1JBG6ReVCbfHJISrKGAudM4huuJH8eKCutrOGXWU0sE48nhA-DfynCtXPmrkzxwIDVgeewH2kncq4Dgsgz5bU43LwUYv6ztUSAT_a-xyZE6XskprkxgccfuB1hO6D_NntsEI1MupmujkbXDWXn34P8AHcYLvc_YZ682k-W_xnndiYXNYMy6enPoTKGrIlIsf_zmL4kwUI5dwBAeWyNomHda_wEFMnx6dcQOF1WswkcPm4nTrKQ7Mg3HQBVGT5jZSN_ZYDlFAOffCRi6xy6TXvk5WW3idoyaoX-jXem6veOK", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114776617494451149912\">Joce The Great</a>"] },
            { photoReference: "AWCwydgnzvh9MO-h8HzEA0PAptcsDZZQnXm-XzB9gcDeKlEyGXM-Thbas70s4C3DsC0RDIlOOO3XVK8NcxB9nC06ZYDwim_PiLhXoTsERUld_mXhVuqF-6TSEa_71G-jufQs65FGuoXCu4S9fp5YEFzcmYb5QFIyLn8_InfQvZvAIkhykWzRRkRWLW7igf11sSKqupu9APOBJpjCA5wqo4J8S4S10cL1PmQjsyzD_swWTJ2apX7ceZYFl1A_296RBc9jVejQ2mQWgI85s3WgNIzRK6nc6gUhnFH0wlsCvBEUw3VcTJMH5u4A0WhR1UQD6xSWD0ZEoWmPmJtx_kCSnKeQ1iuypv9Rm9Cal_C2w2l3KUmcNPrh4TXIPIhxP9C_vumCWo9HtA4Lrk21yzcxQ-eNaQbc8tggW7Vnd8_-DamNpH4Ul_DF0XUTD_oRyqbN3FJH", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113917750644916024402\">. Blahh</a>"] },
            { photoReference: "AWCwydixuHeRVecazKLDkfb-lBGGUeoBzr-nqgXGrE-DzLqliy23dG2A7B2Hp-Q3s2hfcfJ0KNt4v9bndbuZoEOypmRNGKrlmwsQZ_VdwanE150izecsxPC_o6frb7ll8k90Jp3YnsLqRRVSe2JTg4HPd-xEzioOUggCFdd7L6sF4pbQLVc9xvRCY2z6GhIB-vU-LiIwpFxmqFDBPU-M4Py0qH36ybnKq1jOxoMzYrkDaYQCf0D1MMAdH3aikHsAwOFQ8VTLEjKesw5z9z12mAL_ULmooDaXn2fvvNEb78rbhCeXVfudagcF68rhFPkZaRmCOqPFHWEiPW3p2gGB6dgQU5GgMPgFOK4aeylkuEIDLmIqhczaUBDmYp1saR51yphYIFihAsjaZ4uOpdJBVuQE_gvPFAFi_STNI9HXTXTyPjilyQF6mOJLpd-XXFTScg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106133077658939412111\">Ellis O</a>"] },
            { photoReference: "AWCwydh4xvusyGIU3FYO8j_IbuqhCaMkggNFbz48GCa3FsoTiCRSHbUGyLm_Cj-lxJJZDeKQTkVbopgHlbA9mXaqvnRNVOJ_fULcALu2ue92FdIhRJsmdjEShY0qJ3TKe_DD4yz1FoEcj4jhy3tzA-oM4vsSU29XFm5lWUtn46_6dUjvccu5_bqX-8ycv3awMUMj43ZZm_V3qGxeYrpv3yhbCcKRgODYZAmFx_fb8Kc1m6r37L7zM0_lj2l4VUpKGXX8NyDdJKsaWPboxV8kWYNqMWi3s_XkSnRgrnFFc1Isa6Mki2Kq7IVFeh_vFKjjAjIFARjk6uQ1f1aO20hMijRSexvQZgiknBNtysfQBj4LlnRBoMqRqpYXssVyct1B25OqNyZ2PQARh8WJMLquEC8WRf3bYYPH2iht9pQ8zFeWNHZhNQ2NAnhl3QSGsaHG5-86", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117197392484760978404\">Time Traveler</a>"] }
        ],
        summary: "이치란 도톤보리점 별관 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["돈코츠 라멘", "평점 4.3", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "돈코츠 라멘", items: [{ name: "대표 메뉴", price: "¥1,000~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ichiran.com/shop/kinki/dotonbori-south/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5996734370962942050", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%B9%98%EB%9E%80+%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미즈노": {
        photos: ["/images/osaka/info/restaurants/mizuno-okonomiyaki-osaka.jpg"],
        placeId: "ChIJp6r1whTnAGARQi9RHXsUEtA",
        placePhotos: [
            { photoReference: "AWCwydjaB25ZzsL-bl9IY07x1zrrTGkYh32qX84euaII1qngIZGYaspc9H4X6AOQkZ3pC7aUrqwZCcqzgVtY1U52gFKHlJll7O6eL03MJQyPM5Yjscs7N4MAm7P4xADNqCELV4UbTNKf6MZtPQp-RLH2LjTj9MUmAKRyjIxtbleJC60eoa0MBaeUTbeuYNbHcBh7QlxKKH-Sdwg3ZdhDP5q4rA5ve1sUtquBnFXg6aqz7lYCnd4pjq9XKZIdoTHP_EQ0GrCQ7Lwj-yAplMY2l5p9SXMX1k5xXRRAzBUMw14Hb0dAncGmrMSrXEuh26-xrLrWeZN-lQhLLSs1ieTM8nMOVT2iRB0Iw2Az1_v3nK1iDQfL8Tc26e9yPmYCJ3jVQlClAH7gr_jRSxIdcaW28heygMPubbm3Vc4LqMlkWXXv3OyKTt6Fyw6RUtJ2N7rNEMzc", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110292599581491333916\">お好み焼 美津の</a>"] },
            { photoReference: "AWCwydhQNyBAyhFsd6FYLtv-OETAyvvOLG2EDUdoypUNAHJyz-cx2CyRZ-Z7tBwR3pC0XA572jCWgOHUlaDATRV0-EznK3-JTQplNzg288i1W16QU-57jWCRMUmsCpnMEUwBZvqAh116ni40BfMYDi6tn0QcsS2Jkw6oJ5A0bm8WEK9hWkkmGYCEyeteD4-rX0Nwr9BuMSXE_m_Y5vuBNDpSE60Q7Xg5N1Mh1BrMvNcI4QK9sS24IZjl6oZJywZ9rmJm3OY_yxuZn0ZDE2vgXZeY_3mICP7lAVn8x_qsbA89mzIB6PwI6SJom1NViUj56hCa26eL3dovWwywZIXVxJPYlt_U5n_YyQVaCiasChzr7k86rjyg_cCpnn3UKT0xs2GuQkgN2bzl8NrPbEZkHAbe3tMbZ3Fnxj41h_RPWMZaZikq_LlUuKH3VbhhbZYPb6mZ", width: 1733, height: 1153, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110292599581491333916\">お好み焼 美津の</a>"] },
            { photoReference: "AWCwydidvccYiPNl9Bd0wpMmEdx1xuMJG5JEsbWe5GWzIwcj8qyaBDaRE8XjxpT-RgdukHbFNGxAH78b0Vkp1UHEBM304zMZeFYsECeenZ6JEz0NrafI5neCTuxbzkJVIbQmC21w7qzQzvGIzsBdRij90pDVHfYa9Jvs9pfHBgFNBMKEIVrvvo0N_nWsu-pQc-r0u45pQGRn_pK0P1KEoihb41hmqoKS_Ho-Jq0hS2s0rz8noO5QfbavsHs-vofQOC1U9hWaC5vDOZdNbkPRxByHIBbdxAc68X8nUkgJrWhLSuwS2llnaL49XFj1buc5didfjYJmULyW_claXhPlkSfyFlh4t9o_wc7QNQPlg4eFjpbbIjvEK62I9HOwCm6e2l9bihdk1Q6HiJB1ElG2gWoP50V6bbEt_b4RRRQuFkTfcJVNJ7vOA7uGVK7hXlJyXg", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116765063494917948049\">タカココ</a>"] },
            { photoReference: "AWCwydiDkPu25LAU1ggcCztD8rfDXWcAKkCG-Qe3urB05C5K7FWzudTnWCFe7s7SR2qOyLwMAV-pVSD0AkYpnU80l6ni7X8mXfLz5H5yQJBiSdpFVyTG_rpauwptkOo8hksfQ-Hh1EJwcwTWAE4yFrU3TVskiSwDlqLlOFv_228qbJ3p0_O01NZyuoJvRR-eXB_f5kIh-ejL0eFPBlQweJvQpdSTJWk2qtSxf0ZhprOykHCKeBlcFESvkBP61SC6onM4-tiHBSPX5ESmK6xQ0R25yctHpl4S_xlZwJSTv7b_7HdIn5-M5Mm3Jrd5UC8W-wCAQimwpcpHk9h6slV9Jl4pv2rYDZ-bokAIznJF5zUewg4M-n3i3pRPEpCbgEmQJNMFFP9SnOVl4pwqlqEBqj8XxHsNIUwSBf8tON5iZakeOEvC1vgHJ1ErDGuaHadwpg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104852466717089958582\">ねぎログ</a>"] },
            { photoReference: "AWCwydg5KmyXNQCuz346bY92rXqfYcV2d7_s2NqJBpjVANvxhCUz0jcHeoR-4DbK_F_po_THDO1y6u4nfc18E1AYCIgsbaWKq3cJ5nVKAkUKxjXXbaxFxXbazkRV1Homs6_HzraP6q0Tnw3IEMNFWDLLX_tu9hG4OMLdQ6hcaJuBE1E_01wiY1S9e-vD2yKJ_Gsvs9_VUSXoYtApRcxHZfHjjzAqjh9xgAL_4LinaWTMVxmQ0azIdDsRyf_vBxtTuWnP7eu-69-vAvAl4PIwcdY0A8b75AajbRmNc2YrMRAAfeSfcRgju-O703BXDpTlrW7HzDpPV2dWqrEVRkFy3gh6dMZKDg35xVbuBBQmgMtIfqjukeZBmaN4WTmLIh7GLo_z4hJZSzSl_IVOZj3hOomrfaoWwJWEtkjEOgH-hLNaG4a7Z_dCSj0xeZvL00Py8kyS", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100074438116779182448\">Ákos Dányi</a>"] }
        ],
        summary: "오코노미야키 미즈노 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["야마이모야키·오코노미야키", "평점 3.8", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "야마이모야키·오코노미야키", items: [{ name: "대표 메뉴", price: "¥1,500~3,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mizuno.gorp.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14993068628475195202", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%A6%88%EB%85%B8+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "쿠시카츠 다루마 신세카이": {
        photos: ["/images/osaka/info/restaurants/kushikatsu-daruma-shinsekai-osaka.jpg"],
        placeId: "ChIJ5V4HCWDnAGARd6bIaaK91O4",
        placePhotos: [
            { photoReference: "AWCwydgcBvrtkqlRUo0wn8Ol09yqCro9KJE83Ig-PfxSh_Vkfqa-P3ijn8wH8IR8OWKL5ff0zGOyLPaOAR9Yy5zqMPU-T0aDAyvx0xVsMdroSC22fuD5-VUaFo2wbW1F19TOwIhhNiBBtvEyMOCaX1-q_ozb3a5wPKP0pqS0jLaof9HKxN5_WoZON7bPdNaFqPaV7CxLh4JPYGm2nrr3iqNKXVQyH5kJNY0za3evbLVvGKqCXs8mEm9Q2zPq3sbXwEaEKVqFiEnT4px6PXOPOplJa_cS2KqQpExzSR2N2hwK0WMfOZa5K3OMGX0I1GkaoQ1DUCm8HXo3Y4Usoy-nffSdOsvlVpDC0nzxPN7T9WXVfJmVLqCZTFP0fxtR59ia6ZEh49tIF2AdJsm0d1vuNz-pGnpx3uRnVqMRLjRxAVKnOhwfbsREDSV5dGNrX8Z2YuU-", width: 681, height: 1024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112456450695199420254\">串かつだるま 新世界総本店</a>"] },
            { photoReference: "AWCwydjECck6pJOQy9rrcjP3oyxBmrgSBcUUakML4xaaPE--5b7SRd_W2OJWySUcUrJfcRVua2D3pjlw5jfkGPd7zZCDhTCkKbwx5NrUcs_Z_x9ts-Och3LjJqYdiaYBiRXUG_7Yz2k9f5gRXjPpO50XgERvsx1UKrLD2S0wchCpqfbyKvVKyZflRgdmY6MPkrTHo4UoBDE5myTZjHTardoVu68Ql4V5E4UR9JnrZbHs3mvGfOV5bG1WKLTQN5sbEEp5FbCV00_KEHXs4HMyE_UGmKoxxJmPrSyIk6C7jxKJgeUGHqjAXsFc2YMUjoNFzmGB8ePnYuT7ZWRkafQ4BsWyJLv0Vx1S9wAVMIwg6b9x9-3NfPRzuzjHQEqjtVK9uGRaZGhZF5kiijYoLgGpsuXFz44Uv5yK9C3XMCJUDvjzOUhfIO93uWOo4fgejhelOg", width: 500, height: 499, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112456450695199420254\">串かつだるま 新世界総本店</a>"] },
            { photoReference: "AWCwydiycvbDnfFGld2g_zl-Qet4z_0CYA84gtOQWZ41h7IDd0F88aDr6MbpATBN7IoDiI_JzKcxOkvEBI4mFRh_ApdTeQqTl3Au5wC7GJanOWw-P5cwarOtN1-C_9Do9bPi8fmtNuyyaZtfC3gbCi-yN0uPFrDnaowp1_t_4iAmPImL3oOxL-7qq9vRpc6YuvF5Hi813zww3b9zVCXiQBZEeRXmud8JuCQ9wmZYivCJWr3sMiegr4ykkn2FUJu1W4YkzWoHFZHlGvfH36sgmqYmxsytWC8nee4j7CltDcvKcsXTKrBDi-Q5ZDSPc5KAO-ldOYR_WY8dGfLWrkY0PYuL47mxQUJekkZs3l1bv-hvjBBXZuXWMb55l-VHNPJgoCg1r2zBIbtyFHisee7szLpnUr4vzMoBUamqjHre1-jjPR6ccmU0eS-b3ufsN_wt8Q", width: 1994, height: 2658, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107330508874917041512\">Z O</a>"] },
            { photoReference: "AWCwydhShoz8A7_vKoqH7HzBtMZW0VN10QJmRmq4V9XsUIVqmSWX0d9e_PDe0QNKK_nlPCmzNnQJODmAvQdMyRnEt5jeIEQoPEvUdP-b6_-Ml0sa988WAWTqQG5hvYLVoMqKhknS9MD0zBHGwOG1uQV-U75bcpFvhwHlyiAPX5Y0uscp6taVKkEiteSh_usvAIRM524rahqcSjGlXVXKv4fAafRKZ2ihXhC-BDKn8Mq7XicQ7RXeLH87lDLu633pHvxf99JZhtNhJshubD6MMMbx3lUO3Iq8UjV-7M2zLb6D3LD3XLSUuTrhfUWe81UUoyxupj6_W9EV3V9Z3ZsCSDhOeVhj7FvuZ-_z3e-jxV-fPo_AyUNd_QhBh0vRAqO5aaNWxxKqCWOzvIHxMbPQCcsDaByV6QYbkNp0wctAb34rkBHttGHIcnC2p2XGLDxDSY4k", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101487479913690348144\">ta mon</a>"] },
            { photoReference: "AWCwydjCyczLRPG3jtcB_MWqrBdXRDRyY-GLHGxBJX9ddzmGUbmE7KuS7UijlTP_DUb1fjD3H_-bRifazsQsuPwWC_RKHT9PujT1lsFSi83KXZZJDFgyvIyqlLSig2sR1pGtk0O5IBi2XYa61NowAyKxo7GCRF0W9PhkdA7NCoULa7tet9tK430W_30UJ_kwDi6s0DJZh6DY4qJ6UJpsUhHmnaSzqJRaPFrGri0UrVoL3TxO9uif7ktOIZ2dv2H_ScruLjY_-co7yH660iN_AJGy7yt4Up2SA2rflEHSew8466a54F_pbkFV0A0POQwNeGuRZqfULOzsZuRuKlN0U2zD03zVt8gCb1d3-1ONfGfmYU660IA3myRN_rRv08-kebiTRtdP9s7hY9qlNmE3O5ay8H03g0R8117JmzHqsKO58sddhZltVtSqBhjyauEVfozA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108644405253942392066\">Federico Popeo</a>"] }
        ],
        summary: "쿠시카츠 다루마 신세카이 총본점 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["꼬치튀김", "평점 4.1", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "꼬치튀김", items: [{ name: "대표 메뉴", price: "¥1,500~3,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://k471500.gorp.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17209588581346616951", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BF%A0%EC%8B%9C%EC%B9%B4%EC%B8%A0+%EB%8B%A4%EB%A3%A8%EB%A7%88+%EC%8B%A0%EC%84%B8%EC%B9%B4%EC%9D%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하루코마 스시": {
        photos: ["/images/osaka/info/restaurants/harukoma-sushi-tenjinbashi-osaka.jpg"],
        placeId: "ChIJW7SUt7jmAGARQ_B9JgrRYVw",
        placePhotos: [
            { photoReference: "AWCwydgxF7cDDth-CozaeS40ZzvcvT8xt74Mbeblo_-9JE6zicFI_x5nI5NtiNWjcd-Y7DNAgk-HVvgN0gX2_ZpQWTATgdMnyUH0DPcjJ5uFY0KCv7WGzWv5MKaN8r4M3dH9JvPD0aPQ4aHJYT2PZtswWR3CkWkrxZXLVlFkXibEzj5k-fTOSlb8LN_rVig945E61UO7ywRuFIJiVVMNoJ-VGf5OPKdZmufFV8xbtYGWX3C7SmE054rP3z07maSoUxDBPW_V7iejEbY6xK4ervmb74dV_WIwBX1qNgR7ilnv5_9uaAYfeSS_bq7CvNYeFhy9eqt1UQra4OFJIjsipip-mkdCVdcwhKhIvILqlu87FWYVWB2tZfzm_peMWz4UTK49jclisNppGdvekJXa7_l2QBPVRh4Yy8C7lTYLK5qjuRUcqlYEsjM916DoGro_b8MY", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106298193933334132767\">陽</a>"] },
            { photoReference: "AWCwydgMhE8gD1o4kLiCcEyCMOqsqFVbOkFc2EapeRTpk2_Pl9PjGFoWJTR1aMoofA3LKJo7i1v69q_t872ybsgihBtoI31CivBWNEAkvmBPEjvZyyQx0QEjLokMGkXPPHnmHynPPjuDaAR6BXzCP-wdFVbHY4S_mwzXGGNzLiau_P_uU8CHtTx9Lr99vAlh0ugYaBdVLuPYfHp9vzDNDe4FrC8YYnFuPX9naFqhQ7on5JV7ikKOL1anJ6SvKEzXANXCYe54_TTo5goaJqYp7Eac9XUtkWPeyJJhk_N3S8cz6Hrzr4YExf6yy_B5m76gZnkA_9fZdSNpCafvBY2j0TsbgaClh_fg79X1O0uZed0dTeY5YyjzbKtKJOgDXAxo-wOAfnLUywKNpI5Tw_ZLMpUd7PulbNI26uD8s2mVdankd3jh2jftlnOzQkUpBEKFVHLG", width: 3416, height: 2398, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112497451124260751590\">許瑜哲（Peter）</a>"] },
            { photoReference: "AWCwydhSeAFKnj4eYDEodaf87RReK5f4s6T9KlksBW85vUYxwT-DDuB3sMjH9t4PjGsoctzMZEfKv9Bb5Wq6IwTmR9-U3LGRg-ToapKlsL6BkEMsTr3SMPiLuIxZTdRJymQn-Y51DA93JD6BH6BGNSXvLsZGT4VmcgazJRjXkPHm45ux_vKLNmxvFBd0h5ohBv_D11CKDtevxapgPTFXgGnUQgdpMHGiz6S8N8jFfQQIRfpM9ZtwYfOUeMN8-FzbqunliV0ewoG2Lr4_BRBSZUB0cuFjUrEjCYeVabhmo9QxOmEANGm34sz8JgOIAXNKpy0xd5_kUs_C9pq4rnAij5y2GX7twfeiRiLNtm0CWCa3crtvHYiMlPSodSd7u9X8XBjjLksFa3CO7j3IsF1NGlIotlc9hUWaqRRGuNCbK3NkF0rmO9engz7uQLv6ExbIiWXz", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112404675967443968294\">yac_ ymmy</a>"] },
            { photoReference: "AWCwydhm2rSRHcB6JktRNVDn2m2rsYf3WULmiV3GigB2LBhUhT0OX3KnD-60IJp1oZDuwL8i_L_8Gwj-ePl0o_UWvb-DlJn4lrL9CPLYjL-D1CRfZgjXH9Y78f263M1cmnogrXP0YnSTyPZvHI4B2OB02a5jso71pcSyCtDjTbsnBq3NdIAMwMfiLoKoyu5TY5r1a02He3XLAVGVeGfKiUTJggv2Pa9dTYvLZbionDfW3p_OtYo4WDOfaSYnXyr8JacFmab0VjpJKUS2k3jrdJ24t4GXZk7yySCNkOeqPY_DVnU6j0b7KJSsuPZdDlw_6RBSK9oqCkpvRuI5Jk4MKZMseVEsY7iuo2cLtks-vXtyGyX6ny1UtEqVZ9TqHtPiqxy1AugV9J48q-lyC2NiIKga4cQ3biKOgPBZSdVg6NogDLGqtNPYCaO84EdRC4H_D5R9", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118039950207785754043\">パラワン</a>"] },
            { photoReference: "AWCwydgSK0FLWM3pvuNzZcpJSU70hqeEMdb8prF0oFloqYGev9KjXcK9VZuMmtp1WK91aLiW4huArnIXVhPD-P3-Bt0RLtok80i3Kk8Ia9i0LV6fffzqJVapsFv7ZNl4u5V5tDWLeWnebQzBSxMyM0ntVYfIo_oMKWaS4Wbk81wbqQEhYajLcfHLub7cVSopFX89ulyuAsfm8rgs0SOQMb-sMf9f_YsUtHCiRjpcFZEeMyx96CsYpZ6CGjTJLb6FX2teCgUiRxsZYc4VmMdG-_LM3zWb5whQRsIfFnW6DI4DdkFQoDdUcr0n4SGsrwi1x89YFjvUFqBDQKK2TFrA9_SPFtCpaTyuln3fnh4hqjwDvnDHDeqFabY-BiE2klaGZ5Zu_pRG-HowPqOpBkvVTqnX9Gwva2kKnu26Zb4GGrHCSz55-RBbNLAw37Bz-J9aWjBH", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114733878675965231155\">こうたん</a>"] }
        ],
        summary: "하루코마 본점 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["가성비 스시", "평점 4.2", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "가성비 스시", items: [{ name: "대표 메뉴", price: "¥2,000~4,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/harukoma_5tenjinbashi/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6656831565755969603", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%A3%A8%EC%BD%94%EB%A7%88+%EC%8A%A4%EC%8B%9C+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "엔도 스시": {
        photos: ["/images/osaka/info/restaurants/endo-sushi-kyobashi-osaka.jpg"],
        placeId: "ChIJl1bbp-jmAGARBe46HvzrRe0",
        placePhotos: [
            { photoReference: "AWCwydhsZFbNJoYVhULlpCs24h0kxWKwgxL9ZSGf1JZpeS-4BWYYHK4FjLwOesP9GbN4FlpMP8qJkx9dXj_6ecvU0e9M0HE8QMkAExQmfneiDO0WxW-tkkaQMoHWoQNxIPOdI5rve_w93X8vN2d3jSrONZpW8BTR8K1Xrw27AtLyf6VMQZuw39HMeXH1OebWkBUexuUEmD0sB-xluKDNz6uuDVY6XYE15lZWVv1l-sx2VaBIuGRAlRKt3tx_m15DHxbHLHWQ_aEGnuKJfZjN40nod5s_hRwfU72a_D_2oTnIqrXjzdXx-7av2j5_F6hUR5j8_rEKERT1al3EDSzm82cjXDtqxHr9B-yE4-g04UE3djwuiLHpsPQ7FgzWLritahCQiGWaZeOv_jacrTV-qoDvqpjME3I1Vxf5xkPeDc4_DHo", width: 3309, height: 2368, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113887584884920323090\">林正彦</a>"] },
            { photoReference: "AWCwydhqZ-CY5QYojpfZL-UaAyIAvcdj93i7v_LgIg8w3VE3oksj5NHnZBJqzemRwgn3hJOgTVZhG2aot6fkCSD5WjxKc-oB869bviKnd9PmmSgxwiY099qAWpktWg6_iz7J1x_o3pSK9CbOQDUNHrW2eWetkC6JDhkLBKHNCl3OMqY3fdcmgNl-dMEbzqSfgIHk0lu3nJZJpd936mhVasQvJjYH7IS93UC1VHafDPBrwneKWr4TtBCt0lHtfIKOE77IqTn-Wh5X4xS_CyEZWdpGmJEjhpCtkeuB4GaJaTZ0TKbmRC2Sz7ybW1bHvH1HAkG6yczEEceu7zf2dupKuom0QYUfNTRsQ7IZiiFTsC8CWbivGJYbv7czW23jl4q8Nw3-pCNxshsP1NNBNZYNp7lE9EWh_0zJTdn7QVOqfKPEOgzSQg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107075221456415303160\">Junko Imanishi</a>"] },
            { photoReference: "AWCwydiOt1LHHZnTRXKc4KHSP2ofu1D20Hu3of4-l5ZtRZ7P7zvuFFHB_KMxvO7IED1yLmnx3w4-Il5aw-F8jseY8kV_XsxAv5unyixnlJUgSIYrUmHJa08SAtSGwfsq7_jMyw-jU9GIn8kgFzYxuQfv525KOG4b7llEwsTpvycYKsSbfS_GAhLcr-v29YqKAkVFSLIDZtkaJZoDxilDo0wZgqW3Op9kj7Zp0aOANR48jsPGSsg8xtlx_Rrof_HfEdJaIoCW2hyuZeIFkGDyat4OCGzHxVRGI_2pWcALZVuGoZkB0o4U-hvvYSOOe3lJyM9EE-GSrwDR247dcIpFB_my7_jttzMc-2jKodW2rsiphMNBxq7mAowsWqTm0OdNy06mhmTbK64n0AkC24aRDfW7UTB7yiaIwwbQIEcSXujH4rW1Gww", width: 2592, height: 1936, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106011136965461359404\">NEON</a>"] },
            { photoReference: "AWCwydgS_gdr0879ZT5calyBHREfBkcCTTEImRtTG_SNd1s2lwkqvFHgqhxkOdxjBZW7C9BM9ySUUjJV_xWv9a89rcz_vbXHsO5KcsGtQRw5waRkpIBu3FEB4E3CmDC-98FDsOvetFwD_iyAMO_BQJ_zUUb5NQKpgSE22MOhdXeMCywEb-XhyYHGiG9Kx0B4DBJ8gp0cQJH19ufoV-Xnna-KDowBMKwdyS4dLq4qotTjnqoiM1pepMaVjENDaaQRkxqqCwCVnkCP3KoIBT44KfbgVlVXAzuC2evOh-KuWIylPl5GyYcLfovIUesn54dSJrVFUvI_0rJC6OsVwDm2fGhMh9H5MFkBiXflkDWH3AnMQv2sv8gRMkSDdIxHoz-1CV2Z-Ge4nGKN-j02oVisNpRE1OkiJ0HoIv_B8frs5aVHWdmhjQ", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101581954178698495268\">mama nayuta</a>"] },
            { photoReference: "AWCwydikOSYRm1Ac3lQmeJ3dI6TGPrRm0DW3GHm7r68cY9Nk7swuGgrMyDox3da13DdYGvSkFGTuF4lvJ7NqpE4g56Afw92ng21frGPtRMtRb82BwMyWFr8-Sk9UpjMXc3PK9IcRyL1Cctgt8e96rWqtk35rtZBIn83GTIZC6IsOLsJa_ih1um3ovf8W0S7obJNwbASaTy9EnFG9i6fIf6LsRw6QfLP-QEuq6LuRLE6NzmucjNtiw9aTZ6najC5e--TUXO4PVSSSyyY9OQFBaPmzWqGV60auVX59D24uru0VsIngrVCCSlYZSQ5zIlJzrn9Hj-KLAEanBAbURIAOGNJZSE3aCUGTR_431vmqeaQfUcZv47N-K52_35TJFUy9ueOgeGqllqgPBNTMe5Tqt0nL_YZDXkYavAhmGHg59Y1_2wGH6w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114699594475979769325\">阿部遊民</a>"] }
        ],
        summary: "Endo Sushi Kyobashi branch 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["오마카세 스타일 스시", "평점 3.9", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "오마카세 스타일 스시", items: [{ name: "대표 메뉴", price: "¥2,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.endo-sushi.com/1243312435123931235812395123881235612390.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17097331028453420549", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%94%EB%8F%84+%EC%8A%A4%EC%8B%9C+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "지유켄 난바": {
        photos: ["/images/osaka/info/restaurants/jiyuken-namba-osaka.jpg"],
        placeId: "ChIJsUhGQWvnAGAR0R_XRzz1EQU",
        placePhotos: [
            { photoReference: "AWCwydi0xi1Uom71W3nwJ44B2IdtdJ3A0JqRMKf4nbeA-QiaHKW2uufusIseKvXlaZARNAeVpJHkOor78Yh6m3-EmEgmJ7vIRY50v8lSM6uk7h4Yktfn6sveyvG9x_tI6_TohoaehTqKYBCP7xwznfWKC3XiuWVfGlZ90-8s9RikfVoPQcRuB3qTFpOXehKZIy8gsJN1cvQP-o38orbAiwRf8UJqI_9hrOydI2x1jjOa6FUZvnCwL4hk_kwIVEfP3QPkwv4Qh1t-U4BSZtfnGJLcDC4UgvpSJ4U-k0v4YUwgHLILMYukOVlSwXCeBlaLf74iqfcLrsXTy51fur0z68CeusP8GHZJJHVPuJs_ZJVgpdNUuK_XA3EwTcEOXQ4WztFvqUV4pR26XrgoaAHTcqLqguIx63Xki2sJt2qTB5AWcg0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102669014798363399076\">Somang Park</a>"] },
            { photoReference: "AWCwydhr-jz_fpdKQxw_Vs2aY2vyhNbT8ksGtzuyKzK8uee4amo8bhcoLlz2k0FDwUDsNOmQbYwuXedXKt9YZDjNqj7eKfXXtvxDTegxoaq_4UA5y-K0DJr37tQ8nv5ElwUH9kYBncMh3EU8viJVCZ_RLyLjpXB672Nx7A6hU48SnOKMDgSkMLUEe2kpbxOgwG7lgiRldeyDLUXnWFR11g6PS20f4-zM8-DoalRPJaDbOdjyEEsECjLTMzSq0_9xcsah3_r62Ky1u1zwZrl4kP4mzuX_AoJFwC2PwvbwJdoMV9CP_pHLU6wsGzi_nwR0KRZ8EDhcUe5QtGPeIF1GzSjA84csR3NWNyeDbxDy2Vvyy0oy0MeQ0mIk_2nkDM92SLtVnR1WwXEed5En1zPyrqDpZyu60FoLitp757DsQgkIgtAzCg", width: 4128, height: 3096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114223851083723312610\">牧ヶ野芳男</a>"] },
            { photoReference: "AWCwydj8t6GwCNJl3ZpzUQqjMYc1uwiTku1Uj8Lcl-UAIi8lmvA9QkmF5lhgwW18WL7hMnJJ-aAESBnR1rZXS_NdGIau43GEctB4oLbfTEpz7LmPrGaa0uB2SSlE0Dz9GPpIS90R5YAkXkv8ZnYvvyYRsJqh73OCr23Pptwv93t9x7IRlaMPRnvEdRr5UXvLmJazhKrFgH5cMrFcPBzFbyR5yN1GXZiFLpp0tPbEtFNHpao2bXBR9z4NvgG_zF_POAqB8cT6e2w2e3QypQgaNxzDQ9t3n_cignAcazVyO8HhjNloiYycotjth2HbCOy2VfETQV5WzSlxoO-oap1aJKbOhrrU8s13ZFcKxmbPJdi5bQhUzfJbCJIJ4nGo1GH7eFI58aXuNasj3sh5mvm0TYa4OTO1tGnknrZR-ft59PRn5Gdh_5dGcKdnSnbrQsqs7s4c", width: 4800, height: 2881, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118343845221695905582\">HeartKirara</a>"] },
            { photoReference: "AWCwydgQHUWeSfpbu0aNH6CDClH3Q7r2NYCdys0ZGKD9CzTS4gA_VWo1aV3Ly2lKf1NtqIcyHDXaKuUGps_rHKIkVuqm7lcul08prd8IMEVcxSETeL0U0cYLqTzCrC0BcAJKArGbCQSyjqvdbIlDLcx-KLqndycaU5ZEePA-Z_xqOI0axwgzZGLKXhhv-CXj2BOKG1KP7-u6m0OrxidjF7Q0lXzUA3Y9l7edzN_Z-BRNvvLAeomleb9FDCWDM740mdYsNZRf8Ao5_nYiu9Pow38REyn3Kn6W7GkNFV53qxGJZ4q-XYGLM3kB_Mrqr63-E2hwzt4h3kvTvDwMRDpmGUKkoR5804HMT0566fMb1uunyYD4dAPyfB0F7HIFM28IGuBnUpzSyKYlFyb0X2LZcTpg7KcvGy4M-BdF12ogKp79bOsuRk0YWXUa3rodkjOy4pJ9", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111477447621791151433\">こばじゅん</a>"] },
            { photoReference: "AWCwydj9AVhjc1cIiPC_Sa3VtmY58Ju-WJvF6zPkI9BBjeWsNlkrqF074HVygH1u7odoG4hI07_BR6vLmx6HW7-RMxkUwRCl0gyAzIVE9qftlB-2IQtHJ2UT5A3M4yI3BMWAXp7Q_4idKmlKOPfDQJ4W3Yyw6_3kTcl2iXHxlBcmjp_Rv6Abw6kK-I_UyvA_BPBQFW8GXk5uD6AQjJbQMG-fFQ3YQZy0jIHb8pHpHWSNsO-Yx-D7ABzVh3koEJTnf-Kho-tPFRQPMV-dMGnfBSyirJxLuuMaNRkIs1Bt1V5Yez8_7otaExjcypPKhWhNzDRVNknaDKSrFShruEQ5HxAk4Fgkl1V2lQnUCf4KKwoKceNp0N4y_a2drRmsalYiY7W3cXkGWrRoIlDh6PbOjhxx62RuZOH_jyyP8UzrtKtvpXvwdTJqCLx6SSOSnfPM6g", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118271647123369022752\">前宗孝</a>"] }
        ],
        summary: "지유켄 난바본점 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["명물 카레", "평점 4", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "명물 카레", items: [{ name: "대표 메뉴", price: "¥1,000~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 7:35",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.jiyuken.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=365342684045844433", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%80%EC%9C%A0%EC%BC%84+%EB%82%9C%EB%B0%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "야키니쿠 M 호젠지요코초": {
        photos: ["/images/osaka/info/restaurants/yakiniku-m-hozenjiyokocho-osaka.jpg"],
        placeId: "ChIJa0f0lRTnAGARXNWOLs7nBqg",
        placePhotos: [
            { photoReference: "AWCwyditu695IWfcXLfp64LDeRXO6JhhW57WvQll-jmkkBg_QQPwnAB0yFNKntifxEO_tTnizMuUGLdJvdhcIZwX37vySkOrUdwsJQvbF5V5WoS-OnY9LlkD8LZBjAB9NtegB-WU-NBr4EW5rDRvw47x9I3fzpJ_Iv8egjmYdcQDlRZnwGxodnwUPjdADdmVtbrcnux0d1TD1U9QBMtpU0IXYudhbxpuhxT3KjZswKDvA2APBpR6xOx7UaArDdT8IEIYKjaEiAjlWo3iU979clJJJbmmxzBnKrMgBM9wr_VmOGhYrD3R_4jpi7B0s2ZyLzJd9DXv5YIi_S5b8hOCyK8qsk-FSrqbcTVLsIcwB9nNlbeuvavsxhgGRLwOaGVhKKwq7H0WEoPkcN_k-5xx-eJC-OOL2tMsyx-gYPkaKvjB0-skT9VEiYupHZzw-Ab1HSXg", width: 265, height: 265, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114551775829224254448\">松阪牛焼肉M 法善寺横丁店</a>"] },
            { photoReference: "AWCwydhyJdKZzxuSnVb8kw9iGIOmR0MExTBiFpD7DM38UsojVoJjKUfiZIAyhyuHftvPlN2s5NpcZat18K9oo8XPzIfJ2b2dix8JC5jZQqCUOQq1nzZVodKghtaym09tsuRaaiyPi25bwe41C_8c6-J3EJQsrM_akJ_vPNxwJTKa5l7Meos2ElpqUKGTh9qjYEwZAHmqeQAz6WTqd3EfYWY7FfijwQJ4b3KJGnnqP_OSds8ADdWoBk8NiIzyQrFJWuULFZ5mkWqIsQLQtDQPxcr-EKwebd7t4OPWJ5VtviaXrqQm6p9O-8pqdDi3XXJa5UAHLO_OsS_8nm2aYq_Pozze9tnmH0nUR1qm3H5CaTOZTF-pha92R0-yoxcuIY9-BvaMk9tbfwyrKSrjTIJGf_OYfy5qfm26etBcC6AipLbjNMnjrnxMdounUbKU0aUbz7tw", width: 937, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114551775829224254448\">松阪牛焼肉M 法善寺横丁店</a>"] },
            { photoReference: "AWCwydgOCGf4ij8HvchgJ0nGhbSpsUp5NZzlyX6dDhffOI43q3HfIV0LZWRshzL3QfZe2Z7WjgnGJJ0haI4c7IlOBInShSGxMtP6gFRDyV7bl4EH87whlnV_k3DDDK5cyWQ2XOGzpoxO1YN45684YhkdrQyS2fc7b5xDjb-zsmQKGeRk95n_KKYNvHb3ROCTJpGC8Fl8pOdp-feGMMKk-wAbeYDpHBOBrNS3xho8X4cT-nZvUJC4j3uaBhjavGAW1GgG8MNl9ozXNaee_I95pFVhwY_qgVdOt_Nc1y3qSGueLuA5tbQoS5XDbR5NYsWr-NXfSkwiqbDt9yqvZV4rXK9HCsOkhZ2M7Gxlq-jTLxFkTyDffYzxqVMHca4IwotStfDGaHBqx59iuTvv7ZtP_pVx6KGB6Lfm1h_N-lpJEtzJ6gG6OTwkTMF4fUQcgVyxuaAm", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103291140535705665644\">Susanne Chau</a>"] },
            { photoReference: "AWCwydjejGrv_yJFDl_gokbX_l4OTTQDSK5yJxJaYr3zLdIpjkG2z3SXanha1Zp01nGosc74lWqTm1y0YiDUyRP0NW8ZvXx1MUgS-g8lQXXVoOEE6gHHxBa-vJkVUitc2om4xLqvjUk4fNmDYBljyZwzNzTyhishlOJprsuOJ3LZPdhRty6_P2xV1OrCpRHNA7_q0Yw2BMtin5QwBFEsrlFyI4R5qs1k7afpyG8SldoRwNX2ofFvBHtS5qPr2P00VI8LVwaknN6jDkUrQWzkqjupUmuPM69NpkGMszEZB_uZdIf6ok1UADj37WDUTZDZOklwIKNDINdiN2D35hyJPhtnGDcmfB8znygDewcJwPlH7wYnlX5-rtTxleRjyZuWKf9qvXL-nIFex2jo0XukQBL-t4LybFj5un36pUPt02CUmAb2qptMNrQM8Z57lElT4g", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112212396684700439783\">Rapassorn Varadat</a>"] },
            { photoReference: "AWCwydihgJwzZNInIRIjzE_S46LUmv5Mi6JaYhmsarTHp5AP1UqqT6eaP9V14yGw3ABNzI1_pSx-7nHV0Xam34r82hZX7wcR0NR3EngpDhmBQoRrBAMLqNxJScAfERWWmj-ww1WL1tiln9ZgXbIzPYHcQ4tgCsjz_A5lPQtq9kWmzefnL0y-62Wo7QOJ9cyy6dqVxl0coFV9kFLfzQ-wEOJM3M2YDIpUB0N2n9b8a9xvtPLjTx5rd5pFioM1XSm4qdKnoFDouO5CfpMSbOpP7XQJXEexFxdRmTjAVQZXCFiy7fxVUHK2Ed1rmGuG89zdAbi36ATyX_BPreGxR4CFV_4589s6zbpSxNBRfEk7s0C_WmJJKmsgRGGGT6VdeOXhzAedqjgTa_iNXTUsKlTMdT0rs9v4UHteIet23qpJfCgd1QC3ik1kD7qy6XbnYEELuy1b", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117699808930065165848\">J Works</a>"] }
        ],
        summary: "입안에서 살살 녹는 프리미엄 마츠자카규를 제대로 즐길 수 있는 야키니쿠 전문점",
        updatedAt: "2026-07-13",
        highlights: ["최상급 마츠자카규 구이", "호젠지요초의 고즈넉한 분위기"],
        tips: ["인기가 많아 사전 예약 권장"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "와규 야키니쿠", items: [{ name: "대표 메뉴", price: "¥5,000~12,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 5:00~11:00; 화요일: 오후 12:00~3:00, 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://matsusaka-projects.com/english/shop/houzenji", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12107619520962549084", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%BC%ED%82%A4%EB%8B%88%EC%BF%A0+M+%ED%98%B8%EC%A0%A0%EC%A7%80%EC%9A%94%EC%BD%94%EC%B4%88+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아지노야 본점": {
        photos: ["/images/osaka/info/restaurants/ajinoya-honten-osaka.jpg"],
        placeId: "ChIJvRX1cBPnAGARzhcHALQCKbw",
        placePhotos: [
            { photoReference: "AWCwydjUDH9EWZVhQ7kpCf-Zn3CPdH31U8VTTUof4uZy88ynCNYu9cP_A7H1I-97Ew0G6blNTzRq2-rvVfSdhwxISbxCpqh9tn7f9S0q_Zqua5ckzG_HOGA30GzXsmx5PTzcugAyeAHi5UUNADFnLyi-iv_ejxTFfnLWAPqAaCIlfmDcqNXb152Z6wBUd8z1_rWpySywIvNtpjPiK_IO6YUqhkvGiDCH1aqFYWTpcm2U03wNerntGup8MJCUZ1-2kk6mDm2SkgYtCkqgHP8S8WJ9NwbKAnk66JaObblJPjjageJR8udpDVmDg48xAzMAPC0myplgeMY_7FQWzXUQtgozfCAb-QbGoTY5Q7FS1YHPofyhE2lVRjNxAv1iFQwB4d02Imw_rJv7eImg4Ieb8Y0pZ3VxIDiGJIYxfkPUSG3kh1c17BpU", width: 4682, height: 3380, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106959999288503960897\">アリスキャリアサービス</a>"] },
            { photoReference: "AWCwydg28AL2wEHc0QCg0tv8y8kZn-FjwbvU_hBmZwrgeAc4VZ9Fr2vA_HdjaJfdrJpnNi3t5y5igjTKVTa9j0BBGvaFDTR6ycnpFH4vRvOZYdrUhDUG752F50LUYcczf8Z_P9K0ro-zs8FQKpqx5jwvEP3hlYIBLIAtz7W-3IvPLEjpxMCEEk5563MfCJNMLszhNesfi5uN-ZK4Jvu7VVvnKRrS8pV4R-2_DAPC94SY2yUkGTvKvkpNZ_2LMoygtBcrqVDYBWSRgKJZ05HsR8U9zfnJfvOtg6RukyqxG6GutVMscCAJYgptfOGQmHhuOwduhwGsGMft3Bjxmo_CpRbeMgOBXCDb5IEgy1vdYRUmD1T4jtZsZ6oBlAaFCywIvFrOrWgtOPP360pt9ddSALrqkTlAmPC6eLFLujhfeBXBAWC314BSs1HLA6Kv4rFS4g", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113881731151290417165\">Watanabe Daiji</a>"] },
            { photoReference: "AWCwydjqMd814174choQmE53a5oxTiitzl2gEwAsgF08AK4cX4Xd7EwSnyoNRd4D58QzAaxP5AbKikk_EXiyH_z17kNiM9ZmXTsA-4HvpUd_41_omkegYpvF9_vGl0it9EM1XR8cHW8ARxrtAZ3-QXtZRHc2AUecO_fIWVGMJNwCpwOjF30_9xA43TDEiZZum5cC0isVLHuqhWOf9dOoQMgnbsarsDqwrogmDImAXMbEESj-pSXuVfR_55P0Pjn6zm47P-PYTr4sWZdfXeHSpyMSbGKhMU_nry7KF3wc0rUN2jhohTlCJh7Qo9QQaKiyk1qx7WG1QMk1_4GeNqeOU2wqMMqB8xMv2jV_jux3v8IRsWFTlM7UKm-AAQKFtVvuYFEf-Xa32pIO9SS70qgzTqg1JseZ5i2XVOezx4nkwDczOF9kiFyzFE5y3L11_Bzg_A", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107848525746956157391\">C. ONG</a>"] },
            { photoReference: "AWCwydirpdXgUUTudErlErClXkjr2f6VZjoHSYlY62lourGr3QvO8ZIm8DhoACGdhDRgVhZoXv3bqvmjqe_i7d6A5F2eEjxiRTYlNOEo2nfTvsrisjGw-YPaiuAvyHeK_HCC9005C5yKvQhZCT6A7dxSL4LNwO6PolCxveaoR76yntoDcZlDgJXflhLlpDe5nQMnyBZ33H56-KjV9JeHAoE-_hn53Yf8wZ9G2o_lXFrTAGBUcLaru-fdQWeMXmObKfvTo9Iaz89qtxIjgyh6NAPlDBIhkbJPcwaBKQqmGmEadXEwf3kxgcIJjpTiaRQ3pCUlU-zs-kkRy7MY2Ma4gmviFO0Os5G2V2upWalf9Ig40QrL3BySoKve5X-I60a7ijk1YAZXyQumkVQk9R49ojIXxAXaPDNZCqqoeoySuTYTCTx9HpfDM3wQvPq4P8gfqet8", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104207940542524714272\">Kiwas Chen</a>"] },
            { photoReference: "AWCwydjDmcRnpYI-k6rIQF-2lEa_d1R2mKbXT1d-5jo5Z-R4BK-IniqH6yh-AqnkiLAzOm_nZxfLMogznl2bkJc2CmlYTUrRFBR-JNMMk_QVwIe9kjBRKxBgHpi5LSlLvGwN3nzAJzrQKANVP813G1sKHDIXglTR3bB2EFWjy8Jg7bLAlaLCM1M23i9egIDH5lM14_phSY-m5b-lK7WyehW9SiYdkSP9oV_4hI1aemaZoqLR4Zyw6ZmoVYZaNFnhtn9ZO2a_vWkdVfE5guzKUe5s2a9k_P42bdyuBgWPs9KwSeMKnlnHfCyRSa-_XddCKSpNbHrBQTVUm0_mJXif1-cbDbrjSonKZDuoMaCgghNwj-fAlWPJ1-UeOgE_9nNt424JPB6cDstyHCFQ_l1m80dPRwxO-YXgKSf35Id9Th9v2sUUk_Cfu9gEopoQSn1vqBEd", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115885914828437268968\">がみへい</a>"] }
        ],
        summary: "오사카 여행 필수 코스, 겉바속촉 식감이 일품인 오코노미야끼 맛집",
        updatedAt: "2026-07-13",
        highlights: ["현지 느낌 가득한 맛", "풍성한 재료의 조화"],
        tips: ["웨이팅이 있을 수 있으니 오픈 시간 공략"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "오코노미야키·야키소바", items: [{ name: "대표 메뉴", price: "¥1,500~3,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ajinoya-okonomiyaki.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13558371125293422542", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%A7%80%EB%85%B8%EC%95%BC+%EB%B3%B8%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "치보 도톤보리": {
        photos: ["/images/osaka/info/restaurants/chibo-dotonbori-osaka.png"],
        placeId: "ChIJk9v34BTnAGAR8SL3pWF-3Js",
        placePhotos: [
            { photoReference: "AWCwydi9M8ekSDuRVLFZ-wJWGDqZlEqB5iU1C67RiNVARBC6yqZ_8xpSzoAOr_7AUjPyeSFJpU8JoOYGp_sgKkEzWMi9S1mf57wr-5QU01BK9mEx3SLOknAuM-HGmKCtFGDSbRZtOzOqBCpWJ5lNjuX_Wii-vPFKDeL6KlR_fWxf8zH8bJL51c0PKR4HXoEDtXvPHeklmFJGCHy-mcT3A_2MBAB5i0pQUjQOA79FAnvPluMLS9TIpd1N5guvf7xF1Yix7OFys7rdbS2wKeP06V2uzFjYFVO_ih16zcOn1NKSI2XQdcpiRe3AyCjhk-G1qB494FR0UaEIz3zwNh6Uac-gKdHHcj1ItpEDwAvkMOjki7M3LrpJDrKl1iuvFTMOwcRrFw6I6zzwqquTdKpQMgq-fGZvJt3urqQd_jfJCeJIy2iU4M-p", width: 1788, height: 1005, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100570037224372332180\">千房 道頓堀ビル店</a>"] },
            { photoReference: "AWCwydhqDzQOPsmERkaAmGFAxFbHPk8G4LEdGOfkq2rRWVpcr6Y-SBgBR0Ty9Dkjj8CMAKmNfcD_ZslukX5r4PmxPdxnGcmazeaZxHW8LDAbs7gw15avI7oliyHn0UfOLmAjgBa65Hb8mdJuXP94vL7tqpCXBTMvgOnbTp4WapsYCreHoHQ-ioYagPMIQDNiO_9D8iWBaUDrxj0df7L7V5n7eyIsTJ66QyDHVqkXo559pC1Jpr23WfkD1kSLR8CYguIyeIkEmaioYrYeymQ7VBJLTSkmglFhoPc6Aod5jErnBS-6aLpyEvJrpDFqGUA2dWcNuGKwf_vpn5oHzV1pFMwLzywPo62sutKnu5t0zeoAyE7HKouFqGVY8s--46c8kSvg2PxxxsNvPoV0Jur8dT7fHoXS9dYqGDv4gFeQvhXhSLizQhRgquSHBiro7h-wDGbt", width: 4800, height: 3198, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100570037224372332180\">千房 道頓堀ビル店</a>"] },
            { photoReference: "AWCwydgTfhBdmHiVQioshchcd-pee4P04B0cyeYj2dig4QxRXNDYE7LN9BYCr3WmUWfM4o1O2WF9_DIckRD4QsUOuUN0iwfQAXuc1GFRcCmckskgBPTWVyiMdP5OGdCukSw6xM5pgMzNrIZggWhj3Z8ctUld8P0cQXvPB4x_i295sVlhe3t7uq7IMGfra0w0RGPguSawtiBufItMJT31exIbRUJ-fO6oZwNDVkCLZeynHJji6Si-7-mLRVGyQA5VcscXHop1Co3aBJ_F1BD-eWub9nyTXjpeYhu9PP89Vz0HlOTmc6CN9rQPKCjwQY_XKmAEq8817FymSORfKhO7MNC0yUfhWRP-un4vrYr6jwK2XOY-yg9OrJuTryzvN6SdI9V6x02MI6Fw7kPGJbI2CJv6KpM38XV3-lLBR3S0Z42MYQCqnmaLcaXT9dT_1bNF5g", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100099424182565774018\">jr Kon</a>"] },
            { photoReference: "AWCwydgzGR1EoEvwwZ32KuwpTXvO64Zc2tTputmvRSrKpkF_ScbIY-txhnQerb6-JWgRV35CcM52dXJO_MfefMtzO3SvoAT9Gsmdn_HVGB7ammVhFEXw7tilIatJANS5BaYEYuE8zDgMZgfYe31AYK48GlanYrpT4eDOE6SxWygkiodoiVXgFJg_lPH12yXtEF7yWBlSreNuJGsO11DBN9TpsS7rCW2mcrCnYEiqU9SahNDkqi-qMEDnOYLHzPLYf4LxT2jBkH4gQAy6iPqL7cqXSYIqV_ZD25yDjgBYFOacDLZOe42J_yNIntSaH-chp663XzhMEKwxHq1s2RXk-d4in4MoDQ24Su71u6cmh-lhSQtBi8onWvKsuIMLDM03LNZMwBuFp55U5OXM5CxXCmE8lGTWJ1dgaT2F9r4R5uzfFiTuCW93Er1uitu_Kxe3g21C", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111490034360387266400\">EI CHOU</a>"] },
            { photoReference: "AWCwydgpd7aRgascam-YKblI4t6rbJumXO6ivGIGfCJuhs3QhkWZpdu2gK8fbpzO2UEU7KA3N1Jim39UL-JYxbOA262rmQ6thhTJv7F-b2WxIX9NfpNvPv-c1OtZLuayLc1oTDlEJfFlwciAh_YiYu3i7EtJchp7G-3nHs-bbFslcvOTpXxpyg1xGD7jgGzxdU4aVmzOQsjvXHwbojToIl_l76XzunJzXDPQhQufrpKUcOhelrnTNk1Am8Tqq419Fztu2rzHLXljaQ2n_wDZwCb-gKPjt_TWjom_TyXQDkcD61zbTvJt7Dd0GexTMQOA5lN7t83KEPg4HHr7HYq5Z-BKr7ce_YFwyLGOofnZr-r_idiJe1POJ16pIXRRIUgyT-uoBv8bwSxk1y8hQzXwDcvKiPtt8FvaKLvetU_GGIL8qr7_j5POic-E9HsZuqRiF-Q7", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112719181700998663733\">heat_drive</a>"] }
        ],
        summary: "도톤보리 중심에서 활기찬 분위기와 함께 즐기는 정통 오코노미야끼 전문점",
        updatedAt: "2026-07-13",
        highlights: ["다양한 토핑 선택 가능", "최고의 접근성"],
        tips: ["관광객이 많아 피크 타임은 혼잡할 수 있음"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "오코노미야키", items: [{ name: "대표 메뉴", price: "¥1,500~4,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://shop.chibo.com/detail/28/?utm_source=google&utm_medium=maps&utm_campaign=gbp", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11230990528616538865", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%98%EB%B3%B4+%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "와나카 난바": {
        photos: ["/images/osaka/info/restaurants/wanaka-namba-osaka.jpg"],
        placeId: "ChIJUVVjrGznAGARFpS-J5P5SEM",
        placePhotos: [
            { photoReference: "AWCwydhTgze6YnbvHZnI3LTn-6RHJeCa2axj99Qp5eofFkOxmt0mKI9GKYDzlcMWtTSdgBB2AcBuTxA1qltsNQROp236FfKAbC4E_XNoPPuDdZOsv1jdsz2TcKB88jAI8-30JDRNoRz79CUPx4hxJCZ72eCillMBVazZf6x17j5DtXqhhtFUwyoDjOlJbwzW-C-S6uVVEo0KhrYrPOzU7wIu5OXZXpnHcB75q9Zhwfu96gf7ZjPXzSNSeoS3wGzVXBuLcJz2NY5KxgFknGHpgsuvFoPaFM7kgi-80FBNh3YPEETYd5tduVqZwjr-Z_PGmcVbR5KKpQRMQ7Yp0CPRd3wFFDtuwvjVt42dWroScNDF8KcKiwHF89_cYG9j7YGM18srA7DrXh5Xc6mFehceU-7JPFRv_7gVbxSKD4OMWlfxUdnPmroQynlGZcaFowESng", width: 4061, height: 3057, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106719968976390073093\">天池たかし</a>"] },
            { photoReference: "AWCwydjoJnzNLIEmFA-zVqzvqlOecv2EEmx_GdSoF25RzA0IX1E2cqe8pVpHCpMXa1ERtLKHD-x7Sk6CoUkgjQm2IqHO82J5jOCaZmrodLsOpsa4bPhp7gmsRNY8wpcibc6f4T6uaJ0JtnAp-kRasQWbZZlAIFZkpcbo3lIxZR4zhUTyWGhHMS8wHpyhGBdxKMnGRlAlMU-_GBDnvI-CBtAGOgExKPLAzNC_dpTh5N_JBtpLp1cTulFKQMLk3G2ak788fjAEFfXtbgZe5TcrfMtXt5lXuwxFfnamswGxbhgJQms-oNppae-9j3Wr-dZOlm-TBdeSL7KZ9kFyE5LyEqlJsCjBed8Z3RTPfFXkgbrA3hC_p_nyA_8K6UaRT7SQJ3FwRzy5snAFkAsI2N5KqiMNXbISwr-vdZWdA_bDTR_1EJbU2z2ErWi6UQw9kgwA2g", width: 4800, height: 2701, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118409948915631404400\">Petr Nouza</a>"] },
            { photoReference: "AWCwydhLscOXpL4fM5RfT8O5dj0hIuFgHTF5swPPybbAL2PLo8Zj1CXKfUMntylooTYVNctQWzcZSZTaQtovl7hVAhAySQtIIbS0H9xEXFcO3lh2G5PgOiCwG_tIA2PniUo1cBK0OaemmI2xUOz8bvyrwbDgrW461SHKkk1s-UfrifMOb8pCreDiqJRyz4s9CPFEnzR0NXQuViCa2pXmAVsLTDR91f6lU_3rmpAC9rfOpTeqfCUk6mWjqpR-_Lt_D0smD8AgeOdcwZ8q2TWOMi5nmFUtQfwCcqFEanc3wvNijqMmbprUYN1KgkGPOE_jTTbsKH1mq0LNaPLtWesM-DfjePuXjboyn494ri11n_vS4uH3bCOEEi-oTzumknF_oYdTKhfA8VR39ZeXg3tb5d494PNickgw3FbQNPodblXgy1a0wrAsWmy6jxAoYee8CzJe", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108492559836151820017\">pnbsiva</a>"] },
            { photoReference: "AWCwydgHt_RYualD11aq9kZX136AdXoMfsVyI4rlK2keEq4h3C49PFJSN590Z9V6ngBarEnEwbGhYJlkNsoDjUwRgNQ-K1wZ9qnHTXZ81o5-Njt7_verAYizkImBaNMqVWtlP8s18yXbDN3DdnbWTAWUImqIEgY1R6-dHn_ZjQHX6DfceA30Z_ecN0U9u1Iqhqb6sycdf2XqLOQu4oEiR6gcwUFzpQjrI_s6gm_mY8GZzV333r8If8ojGEA4t6y9pLXlhtHXmhNWlbCIYLAMmli16xB0NnUZCKuUDAVW-S3LMVbhMayhA_qRRWCmaUKvlQkftn_ewOYhtI1ra6o9n9bY1f6IsjhW9Um_EN29U2DBeh9tzt1O4Tyzso5WfV7aiMSydFXCwd4E3mvAFwVjVF8ehCnK2eygRn7yrcchRuqhTPV2ZG7OzrDU2fdSg65lUy4I", width: 2160, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105322765166703017680\">阪神グルメサム</a>"] },
            { photoReference: "AWCwydj_qzPuh4WF19--IwEC6nvVfQKIjlauQVtPjD7TE1dvNrQ0sK5n_jPDe5PXGfVwEkHhItoe5RSiZNGmiIC9kq_M1yZdAKg3xvuWD1CyVXP7eZiKzqkqEfHN3RelQGtGaNx5CLOAhLGyNKo8p6YjFTsWcLoICtA37nmg0ZG9znDeDixN4fRM-EXFBjP4l5EUWbdx-p8IikuVwP81-4WKJYRNkR_KzNfN_WqS7PpG4yRuJbJ783Jz6ZfI4_49XKisnIxsJtfatg1uCt7uLMzixZML_8VXI3ad-J_TX3diCPnHuW9_QCfWSIEHOkh4YDfpgTqI6XuKeLUBRZXLX3lQNFkTgQ1nEuJ2P5lyCkKeSo2gAG-WmFD1Q9YcbW6iZUgtnv9d1hyljQPcDvkuqsaadWg-yokyU6PcXZJ6wnjZW3x4Sr2WjMChpZ89BJXqt8QK", width: 1280, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107906834282424111823\">chii k</a>"] }
        ],
        summary: "겉바속촉의 정석을 맛볼 수 있는 난바의 유명 타코야키 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["겉은 바삭하고 속은 촉촉한 식감", "현지인들도 즐겨 찾는 노포 분위기"],
        tips: ["갓 구워져 나왔을 때 바로 먹는 것이 가장 맛있어요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "타코야키", items: [{ name: "대표 메뉴", price: "¥600~1,200", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://takoyaki-wanaka.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4848399409286648854", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%80%EB%82%98%EC%B9%B4+%EB%82%9C%EB%B0%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크레오루 도톤보리": {
        photos: ["/images/osaka/info/restaurants/creo-ru-takoyaki-dotonbori-osaka.jpg"],
        placeId: "ChIJV6OP7RTnAGAROl1DH-qE4Ak",
        placePhotos: [
            { photoReference: "AWCwydicr6i8Ay-7OGNkVqHYahJ_NXlTFDxClwJ747h0tDz18S9QJjBO5vZAD37zMvWPOYHRhzbtbOL5QLNNjJv4JwoODJW7JlDbqIxjFZnCcLHuFA7z1zu5VxXLggn0aqWSenlj4-fSFnzlJwFEHRN68qfFdG4B9CCvbAUvcp_uUFJp2DV1l0baNqJLBd2pOQ0XpwmHQ0atrsNIhpDZd6fQ-lCBjKQ8JYyVDZPwxU9Mz99bmPhjNdDQxshGWZ2gqlc4nvt7LGqD7u2pb89sBqYW4UcgcYtazEpQxDaUTiZju04j63jXC2ngI-E-q1H8PJh3NuFdKE0Hcrl4owlPgrQoW1rbJ_nfoUtQ8dIEa8SZbMB-n0QZPgIDZcwJWrbrWE_DO2T90jRtHkQlqZMODROeucDAZ2QARAL4XoZUhpTVJE0b_XxHb6vEjmTLv1ub70H-", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104843861425569570646\">joyce tan</a>"] },
            { photoReference: "AWCwydixJK4DD91o_CZKrmfdqdtAhMyGzXyndrHo3gT7-MoT70z94XCzJzRq9fvXOM2kar9vjACuvjkxhOdWuAVhjSHfHVWBUR1TgnFOOSxnVykIfOsXDb4C3roW7j4gXLZUCOeS7BLssl5MeQ9UQRKiSOKLxJpj03noG-5xTNbm5HeGqxNpYTYco7HrzRbV6NyK0ob71H0GH_HgybHh-NIALsee1W8-CcYLKsf1-irmlW7KcdADxgHvqp9aQAhsLHjKexS3VvyP2drTuabLj6q9E76HwwGQuthbBGKruTK4R469RsbVske0D5jZvRs3L5YWN1gB9F7BpcjnQu80KDcmPYzAzG7V18vS1iQyvkUK6lz1q-6oj147Fu9IVOs620s8LKvNcitwpzYnJoICWZBwCycQNHmJ5queAavIc-pzUAUNxCEd", width: 1567, height: 1046, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110885565284153226397\">くれおーる 道頓堀店</a>"] },
            { photoReference: "AWCwydgMyPn8kGI-nkQIbkZ0IxmgbQ3MX64OMuHgEQxjQopDnIHXEw4Wl6aWheFW1c1cVBGfiElcc2Ccq1z8k4B9vxEEaml15tuEKe-O3xDcJDbmWgreJAa0hADqUciBsHhuCRtxnSQ-030C7YsRGq7biESX-yOvW4YYN4-O7AybgboBfbJpPuH7GHJVf4UCJCxRAW9cnuxF1KtjYVjKfL8WBx46j_ICTo0U4JWCvriry_sgQYNK7hngNcMFihIJ7w_WVQV4--Td-4oVL8230GB4eq-8S1bPJ2GBUrSGdIuQXqZft84AHcGf4zJh6Y3PloyWjgv4l-IsFM3pz9nbSBPJzTeJOvAo6TZmi8hqDmZWOYp0_fMpze2x-otU5MuZukdhAcpn1u2rV3WHBvoeJU4fxlFhrVWmiMN2Qt8mrMHwaeJjvBhe7IV5rHvTB-Q2SQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111105422418622782295\">박정은</a>"] },
            { photoReference: "AWCwydjPcT6IKSkLmH5aU0HG2y3989P-kI7mUdmON8iEyWIa63WRGMSbSm-nq33-vhFgZuTR4EH40arZJ5zDilmCuTY6NNdrZ1P8wqIGETR-svOYUnBIxIeRG0b_S83RwUJP8Mc0sgBtlq589ggmenmHAWYjMOsWoJosPlHgdboQOJguyOIbD4KSPCp8_S1KTY_k2zT8xEtTeCacNZnE3ObpYtJRXa1ade0YyMPxK1YfvwMQZxlqggmwXKFy-h3SRRZrZm9yj6qCAb3sbHsxbeXOHvQXpFFCahv_27gRuTNa829rPf97GX0FfBoqWcPDQtue0aq-SalrvXnX9ZRB2-K8zoDRh5w0kuf9sXVJtVCO5rVEWvIAMjX-BiQ3zY7Sle-7Bp1tICjtrN5aZCRgdu1o7uGTPzlGF7WM9yGOycuFWmrrUgBEthGhQ6mQ8zsCgS8g", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107782693403794455197\">T富子</a>"] },
            { photoReference: "AWCwydi7CO3gSDL434B2vBPrNJ_dtKEhkz__rrGtocwpU1Favcl5ZUk5TcpzCQNPsxmpwmWkdfTsSyD_roFdPDgEoGDgs6udlFf0DLwBk5tj8ARo81nPTYcBVzjm-irinAXnZXLbdEFkZPkyMwaFfto3yE49onmdk0UAavbEjuKDxuCtMSNgMhS0LZI-Ayzg8bj2Ham01819O0h1EEwG_5ikOJuLVT6izwlQHwdnx4W36-tP9jTysawwiYC0Ff4ugabSjPPF1JwIVeES7E6aCrqy49HP4mxPv9pG3ad1sOofvKwlyNCLB1ewsHFYOE0EXIcFuEUERvWfWX_8VSQPa7V6IfjStxb6Ia4zis19nDHvhdzdFnWxYM1TnOVGNfO_hfaQKxbpKXMzbVHGjguuyymCv1xGtUO_uJfSgO3aYQJEjmWfOIVTLACPJRl5TOgUkakB", width: 4718, height: 3539, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111105422418622782295\">박정은</a>"] }
        ],
        summary: "도톤보리 길거리 음식의 정수를 느낄 수 있는 타코야키와 오코노미야키 전문점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 토핑을 얹은 풍성한 맛", "도톤보리 산책 중 가볍게 즐기기 좋음"],
        tips: ["포장해서 도톤보리 강변에서 먹으면 분위기가 더 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "타코야키·오코노미야키", items: [{ name: "대표 메뉴", price: "¥800~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://creo-ru.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5890314574750646781", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A0%88%EC%98%A4%EB%A3%A8+%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카니도라쿠 도톤보리 본점": {
        photos: ["/images/osaka/info/restaurants/kani-doraku-dotonbori-honten-osaka.jpg"],
        placeId: "ChIJVVVFgBPnAGARLbCliBbVOI8",
        placePhotos: [
            { photoReference: "AWCwydiwUj9TFSAMqYUHHS72CDNH_EetZ-CC_qiS3_Qi6YpO8JeHCdsVNMIvK75eigC955hsI_TqTuR_JoJgSzM2kTrYTRXk0qIWvdLZlL4SAewRw5iyh8CHCFJokp8UzuEssFNkuSSrRF3Bu1DDBewyZ-lLQNR63Spm587VaNG_ep8qC7NJCgj7wBAz8fUoMv_Y0sMYGgY81qx-5PSbVYHS7voLTePz46r847b9a-eH61OSAzYma0yNia7BLCJLxWuEnbAVPmKNEooQvoYHb5cl8MpumMPm8gS6CfNMDfA99LMcem3phskEfvWMS0eLIBSTekk7cO1NbgaPULxxCgxOWnVKpFmvrCmCS2d2vVJrVOAEdVwJ7b5BLnAy69jfiPPeBSp0iU0gsRceY_Cy-s6U6ULT51bn14t0kV_-H6wG_2i9KOM", width: 525, height: 296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115464771275018129010\">かに道楽 道頓堀本店</a>"] },
            { photoReference: "AWCwydg1yCZpxZ2ag8RlJPj2L2WndKjlnVqo0F-Kl0dPxkd_smbKmJ_YR3E4gH_aBdSA-F2OaBLOrY9roMq5PsTEvsySKCHD1MTBzT3bfqicFGHdFibD8vbKzV9rCTrQEquCa4e_LNWVIeTfEPHVlIJriNDvGSd6bKPsBWR41Wp1drWSztYjTXVDJF3zztb5iMIIIBaqlXFoQ54mXyFO5ZLvR6XQb2zPgvNfU4BhKZ2SPr2AmXgAhiU7sASAySzjC2tDoSjdYG5oCnkekSd0NTKhQnNchFvdRfWG5WVS92ZErEfL3AAZNg5Z8Z5xKp7oOkGcDR99D5txjBzz304IhQ3Q5r0QJefcXJ4lyI11GoU_UNBJ5pD-hteRZPgBAJiliWaEbbv5QpgipiYPqNjeQDRuhbR3LjI4FS9nJNtZzZZE4STkW63CvAqk50g9-67FIWhv", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103166205208905951444\">かっぱのマック</a>"] },
            { photoReference: "AWCwydi_C_CCddf1N73FQpELI-4fiS5vjpztRI-DXLulhvMHqt78DxHuaiGkRaqKn67b4ta-GcTtBtFxquIVI2Sc3mQ2PFg9rjdMsgETo27g4Zs4SV-9P36hXnoh_1BDqhtK15BLbL9rlQ-s9wDVxnIJjHwo02AW3NNo54XM-iCP2IZ65N5g4g6anAs_hm_X5qBRTy3WHtlU0CefgdaLXdAWqYE3TlCR2wfKOBYjxM1UlCzYWl2qtyAkrdTV_rVsYYT5WFXYWKN12JcwawGu4bEjisHb1XGJGeDKujc3Cuq0nWEG03BaDny_1n8C3ZtEAZJR73luzr72eAaD_ve21tal39DVqHEdTtX5kD0jQx-jg0uzn8Az01L1j0EXkYJOLVEbAst-UT8gGET_VxEFt9cQxkXXzyPgqUKc9f89XQZ-_n1nKkfa", width: 1000, height: 1000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115464771275018129010\">かに道楽 道頓堀本店</a>"] },
            { photoReference: "AWCwydjRTXKw545sTnTFt23l_coYcZYrha3xi67d9GaEMws-dWID2tCRNLEeIrLSpENxWCdbIw3BKqCJgKZX7ulfLjZoTpktkYOmSuHmLs5I7R2kFXJnS2LJi-uyhRMig1N1bfPbaSozYzxWdp4bw2jBk6TnymBiAXcbGdeBF3rm_pUx0Utt1To9NnKgL1e9Eyg6dQ5ud3qBpDzTPuhcCPJKKk7do4nqVwSXiZyMwjWjrahm0RwfdvFtFKz3AmxkYJhF1EzN-_HLpGH2CsK0dfzxKy0vnES1n9sVz683XyArsmHyrCrLWA4GqAXq24fLF3GkoY5uH-GdReUyLvEkojet3YarZwvmZQPnUOoBR8uwk4RExTheI8SHpFSgfM38ty3xqcUW9OOu_j343FG5twH_LS0k4o4MdutwbE5jJ5ri5lCgyEFx_ano1ILsB17ej2yH", width: 824, height: 764, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105749045054221721953\">南爵訓練「早洩專業訓練、陰莖硬度強化訓練」</a>"] },
            { photoReference: "AWCwydiwMuwbWVuk7tSDUR-lbpKRBEr3kQt91LHTpgMA1CL-iPDIJQ2Dzd8X8J-FcZHb34V-9Iru5JP17tu40k9Rgr3VFq137GdfONo6-Cw_Yw8n7-fR6ubwsGon9SMy0J5OuZ1-7kKW2o9AJ68syG7CDrzZur9RMlbFGXEMdM1MLIbBVgETeX2RSiJ4eryqIrsUB1fS__K9EOoaW7gp2jeMXX8GuxwVX_wDd-ToPCQvYfQESZnKUNjUa5nYj-26ePFNdMDLa-bPYpnL1kamHd8cfLlmirdX-Cm879eMo_I0P8wS_OTRAZf35l2SNxhwdsTgtR5lfroFydMUosF4RVCsi0QoQFnCHhXtSEqJepGAm2DYR5Vu7JLYcER6Us5zMjNzi5e5RriN2152Q4Vqhh4wVzbSFYChOTFZTV6MTYDx2wTrGsn33L9HvQkmj1UwIJl1", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115530753544555676457\">L G</a>"] }
        ],
        summary: "도톤보리의 상징인 움직이는 게 간판이 반겨주는 프리미엄 게 요리 전문점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 구성의 풍성한 게 코스 요리", "입안 가득 퍼지는 게살의 달콤함"],
        tips: ["웨이팅이 길 수 있으니 미리 예약하고 방문하는 것을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "게 코스", items: [{ name: "대표 메뉴", price: "¥4,000~12,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://douraku.co.jp/kansai/honten/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10320232838878048301", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%8B%88%EB%8F%84%EB%9D%BC%EC%BF%A0+%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EB%B3%B8%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "킨류라멘 도톤보리": {
        photos: ["/images/osaka/info/restaurants/kinryu-ramen-dotonbori-osaka.jpg"],
        placeId: "ChIJs0wJ7BTnAGARb7rarouI46o",
        placePhotos: [
            { photoReference: "AWCwydg9vCw0RmlaJMTG-MJgFi_ybIjT5pXgUoL9uANgDWM7BwQTDpsIY1vA7ALNXL59ZaqBMgviFNDUUpPTU84nIP6S9YIWWPZJ9DikAYxbQCSSoqnxZHiaamBRwEUnqtrh8WVJlgUfaOiz5LRL6eKMSMZhusC7ubu8xgnWmtnWIMSBJPDUCFU1ov1ahknFqk2hP7O4zUJ0B7sC17HMKx8q-83eFvKvHH4Ii47dkP8IUvIwodUJXfVws57uHmNS5s8LflU1zhlBjLQt7Nc_THSqXnqJOYeIkZhT_p7hn77NoLeuGxxorWhIypI0OgwPgzPxUXDKNJOMBQyayKBjXgjuU0iA67bsW6jaRaiRr0hiA8pg30e1fMILSC3Mo8cLnvVD7km6iGZtdgCoYMrkAS_I_OekDmgtHpXG2W2xYr5mob_a_3_VO0K7CvaJc26PUw", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115072038975855150258\">tanner</a>"] },
            { photoReference: "AWCwydhneOFt7zqFaInGu7WXFsrF7YJZQbSKOjNCb5975kPatjhzMAeqMk7G2rHUF0F_2t5gXhJcC6KmYn-FU1rLAhlUmgWF5l9wgZge8J3wFk65AEfQ7jmJU9608t_jUNWFwcOnAj2v1h9ntg3EtKuWUzCuDaPhAI3Q67B70NGHdnKoxVlHZDWpoDmEpRT7dmEzwb76nRmlhnEA0tCUfFetHTj1OtYPhD1UZaOpYzvCuBauma8F5xCb0Ge2Qu4jY6JWfoeIFq2Oz2OAUktzZhTv3391jkcikAXVKaeqDZFOYKO--ox7KmxlKrY9onEQCpAbur6ilzq-wTTh4PoysKZRdEgRZnyRcfr3EretgcUlNy6LsyA3JWVe2xmBVLNs05Udgv2Ws5ByvWgLjCrnk8YyZH1BpLrbEK6ekfJrQ8XxG2KVyYc", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115411076389691457524\">_ Haechi</a>"] },
            { photoReference: "AWCwydiXGc_bRc5QILoC7EUqdc-yFhzuq5AsvWtOOExxahV1yGVATXq_HSw-3lFh47EeleRNVyQB4j6MnLBSCj_Ek54ri5OznMuuJ54sCDmPkU9P41nhpqaV0EQNyrnfm6QqX9T1VuKLaEevoGfJIPlaplg16eLLzEA3LY97qLDFvoeuT_hVbbU5iI-ssAUtBBb0cI-MECDxLrDWhn__jZOhP2LpTzSLodgGanE0pCNR0MGBuyXastOpnR6sFza-bF4TPGYIUKwP0Up4mhCGOR-MJPVgPfqtDL7BRWHqhxLSdmT2FGCgIFQQj0iRnLzpWP5omYFihACx0gEm7k6Nrc6myXWLJL4_Ih7ZT8stFLbkmpRHJKpB6fKif50pnHyUDFuvmwODfwMcp8vGUB-zwsbkMj4NZFUuNEjCD9ah2D_bZfAOKc5wW4FbWBVkY0ZKN1HA", width: 4800, height: 2701, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117135563761113377343\">Antonio C J</a>"] },
            { photoReference: "AWCwydgHLU3r9lVCDkUsP7Otz0vQPp4ReRSVu1OrKguYa9fbln0jKqF_QlR6Lyq9EvGEMNXD1zKK2sAJqGbLSQ4QVI8V22lwS6qSvkbN9K0ZvRL2IWUqvxaBYdBDv5HH4er-dmEe_9KigP206m_owAN9_WpN0Z_lB9c0WTyyFs6QtDV1o5oAuDSiVobVJiV2ZBe3DhkZemHXk7TUzqceVWZo1sShzm6V4lJZlDnMiXyvGf5C6AaQIS2oxq2pVPOXbPu2AHNYA4UNNPrOmKRJr9IBMMgFdfUS8BKC3-TVnesCH8I_a5T0ioq_ye4ACaxFL6C-mk8p_VVIIzysqMrnMk2aak9XrdJfU5zAFJPgaxIEBx57yC8cR4LrdlBgZ4ON3KRqeT13frOdPdaL6kTwBAsXhXyPTkkfSQVRdAoW7zUJW4NQ5J6P", width: 2304, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114414028308216026131\">Kinryu Ramen Dotonbori</a>"] },
            { photoReference: "AWCwydgR4rHTb1rl5GM7eAtiF3aUMe-7_X0b4r8CAoUKHBIh4lszeVL69t1wQnNtR1Ygex90VvmU6mWuM_PayvO45qBHjdujRz3PdiMdMTe60xTv_MLUMHNkVShFJTSr9uXztKie2eRAGB3WEQh2kSvouQPx1FlwYJrVnj9tbSQivpVhlb0sXj-f6U8UdYj6UQZFM_1WyZHDfZ4-O6ANICN62AJKewO6ITl498oSUMUF30WPb7efli8z7JVK1pf_Co5zl79adUPip5WNOl_TtPRUnMfQAebsd3bvj7hghvwJhWTaTyzuhmmkiFLJnY1g8n9s4urtCXocrzHM6c6AFLvxyOAMeRyllHMjSh-E9e7LTE2RzzKDfz-UANRArSCFYYC8H9A0D08hx2FkpF_5EELwVj6uzpHw_zmj_IEMN6FAXfSIw6eU6zmhQ5tyvLp5CQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104975353384053312392\">dk</a>"] }
        ],
        summary: "도톤보리 거리에서 언제든 부담 없이 즐길 수 있는 24시간 라멘 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["24시간 영업으로 야식 메뉴로 최고", "도톤보리의 활기찬 분위기를 느낄 수 있는 곳"],
        tips: ["취향에 따라 차슈나 부추를 추가해 풍미를 높여보세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "24시간 라멘", items: [{ name: "대표 메뉴", price: "¥800~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://kinryuramen.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12313835939676469871", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A8%EB%A5%98%EB%9D%BC%EB%A9%98+%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카무쿠라 도톤보리": {
        photos: ["/images/osaka/info/restaurants/kamukura-dotonbori-osaka.jpg"],
        placeId: "ChIJ5Z1H6hTnAGARPgWM8w032I8",
        placePhotos: [
            { photoReference: "AWCwydiyTKy9ghDCqCNPzKFn1O8jfUTELjDFpv58ViQ6rkuC_gWirm0V6QenOlmnzMhwc-ny-fBpqmCNaFbXc1Q1vhfHxILre2S4Ccv9ys9yoX4VCMwX7NDrtPvIojleXA8xIbtpSDR1FVB0iy11ST5yMkogSqInCTAOvS3CMZ6hx0agOjPSaBQWM_Wh0zeI8duiwbRgFZSzY9lFvicSghDASaBFOT6Sr9b_T4hdBXOitUq4ZKEP3080b2PXVDH0-uGsuG0RV9Su7akusl1CKvbhnahHpKtmtNtLeMAgvo-CUSnDh1t-tdf-SqORlnMKbjKwbHNiwQTxZucLIrnePZuH1Zn3qmu2XLVJL_ci1BEHNxwBfmeguEIEni2mc1VTk5vjRAnN7ipKO59wDtQXWWfOHENSnIqvX9NGrDMsaxsLqydTib1WAnXtK6N7i0oM9rWH", width: 2048, height: 1538, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103386049615131461691\">どうとんぼり神座 道頓堀本店</a>"] },
            { photoReference: "AWCwydg61H34Vl_0o2BmE3HF0Znb7DIhWj4djNM6P6wzWKJtzyj2FH3HbzpVWZCKMgT8pY-m_eERA863XeBCRlIrXiPH_t-AN2n-A0Hdbddq8C77hAwnGOxPSWP8Dv_azTDGD8hOM7jPFDMDaquG7mxmedBFke2EMKWIPNOAKbSwtUdnlIAbLr9dFnRm05RHXSMhh1U3r5YCckV_hexdzMMPXff8e5CfN_peZMPxabLSJa4wYFKJgbBVOXRKZW4Khppx4yzrX67cfR67PXZ8tBC1PniS51ujOB__1FW-8O3mMb3b7OCv5roFDU8WhI4QIG-V91s310tXTI4u_3YJs4lAfJ7CwAxA50JQkdU9QgpVuVH0jOUWwJKwFxuxT2pFquTDX8tn0fanWuAvxMw_QUeY6uJMGXozies-LSji6gwrQW-LS10kdJmyNoYh3wVC0Kl0", width: 1580, height: 888, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103386049615131461691\">どうとんぼり神座 道頓堀本店</a>"] },
            { photoReference: "AWCwydjdlUCXr-lTFxWbM5YAxA3DlCE98M9DmN88B11W10Z_uV2KE94GwBHxiL9VHnq3enlQDLR44Hq5HdWxJMVMXIPZ2fmLTzbFwUNKgRfPUSLAPOAaqK8GvpCY_VBMl0pPEEeLpLhG1WwWdWCKlfKJ5AJgLeRabs7XMhR-fsg7sW521uj8CfrrGyPBjAlCJYZZWmNrwIzKIWAeKjHBLAzKfjW5G1AAhIkalAC7uli6U3dGHgyzVYIFfCZLXFRQ2AqMAsfrFGIHFhSHVLQQxMOmgPTIome04u4ADM8-cKB2ypi8Sv2gyzbS5zeTOllHO2dJCLUt6-TyVs_VKr98puwyD9kuVcHvSrZdzBiI4LOVgNPtESdZgLPgHJi-pxCUR90MZMTP0bIyNedGC2wVmf2ogYLVhukcASV3dmFfmoumDFW4FfXoBC3kcZDqX081nFLP", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102007977698246261189\">Pattraporn Phattaya</a>"] },
            { photoReference: "AWCwydj8EBYZFuufhrShEb-cSlskX3n7YnuBkUk-K_r_Fo0D3h15hC9LQcUd6apg9jIyMBj0sbe6v5iNbwdhC9uqw21g8kFtD40-vRNcC0yWQDXjsgsU000WdSMuCQDpUZT50lpktnY0_WY50Y_onRF9HQQqhGQI8cftGmRAekyvusO3Q9bPiwlvUkAMULc7eERmi5xj7i1AaSOyYP9g8BK_7TVlO_NdXX93RFhSNz7uqayMzT9wMFJkmjjlDqx5Cb2ZtFx7ycMif69JGgY3CW175waMl0s--KCP8MiIqqBcaK1qdQb6hY5_BTSnstsTX_FLOO8EK2oSH5jiO2usxeHazGAcbzmx2Cq_3tj3g6Is622B_lQtXDALhWa5zDGQErOOp6MoaWd9Cpz1MVyxJOvS4mLDLqQmw5QbgNAMmTmy2AQ2zRgSYFFBvpRbXeIRVLNv", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101007470957968570222\">ぴーすはっぴー</a>"] },
            { photoReference: "AWCwydgabSZe4TOxJvFpT99G9z6rHsgOQwoWkNm98zHh2li3mO3QLUB6F8BPvV9m5DC9sx53Zf5MCg9OzaM34OYFZoPc6wXpCL4oAQ3Zqw_RS3rRanZKkv_C144nqkNqpviduxfcMcOnPtcEp6eNgjhafYxHjYi1ZY2o_5tjv-EEIwseZI3_pijzkMK7RuBTY6lCn406lTqntM-xm70vaA91HmTJgZ4TcVpHMEa_Gh3dJQtACsb_WVI0tEAV77jADXUY8TrPcDHINJ4BRo5KVWQV-TaZJK6-1C0XoQv2D8k40Dze8RLeK83CobcNizbwHb9knxypsgIlNjJ6ksg_uaH0BInI_qO8fYMLWGRQZ4CKMM46svg7CyScfBc2hMrkMjrd8r8nnNxEfKUadtvSQsRFTMhB-iYOsuMcJ_nXmNW5RM17f-gGbAKCZ_eVhQJUNQ", width: 3500, height: 2333, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103386049615131461691\">どうとんぼり神座 道頓堀本店</a>"] }
        ],
        summary: "자극적이지 않고 깔끔한 국물 맛이 일품인 현지인 추천 라멘집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["신선한 채소가 듬뿍 들어간 담백한 육수", "부담 없이 즐길 수 있는 깔끔한 뒷맛"],
        tips: ["배추의 아삭함을 살려 먹는 것이 포인트입니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "오이시 라멘", items: [{ name: "대표 메뉴", price: "¥900~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 11:30; 화요일: 오전 9:00 ~ 오후 11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://kamukura.co.jp/shop/7229/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15375594530048223547", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%AC%B4%EC%BF%A0%EB%9D%BC+%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리쿠로 오지상 난바": {
        photos: ["/images/osaka/info/restaurants/rikuro-ojisan-no-mise-namba-osaka.jpg"],
        placeId: "ChIJK2A0qGznAGARxPHcddHFYYA",
        placePhotos: [
            { photoReference: "AWCwydh_H6LaUzQc4WTPhFwnoy3GlUIXCVa8kcZsrKZkteprj0iw4wNuhxC4zuJyROBuExjd2oKkxTyv7sN89oYDKE5DH57KU0zrFbFbB8ZVziD314p7qemtQur_TXz72vTrXIbAhqF4tVFhrRbL8knm4tVFLAWZw3VGdulCaRudS_pYF9mqxykRyuQjixHDQnHKLT0RtWu6QIplsHoOzeDbm8LeKvgcn9q8yuvQuXzdQSwDa2aNMtXBp2qsvn2RJg_yU-BWwZjTCx1vMdRWb4uwzIWJ2ZcxS8-7d2YTlzx0ObYuHBZ4EUFs-Av9Ta4m0PHbOX34YuiiPL5sHw3kyWn2SjnWFuHljPdi4aZBLeFf3qMcv0BQdNpq6rA2v5FDfW81l3xu3mTO8QRdhYSzx_p_yy-eRVKJqxPSdB3ZCHhhRVBVImcnyysrLDot5jX8Dqg8", width: 4208, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113948364941316589395\">伊藤誠一</a>"] },
            { photoReference: "AWCwydinQuVIrLv_cJqiWIwN0BWpZ1bfSF2PCdX9Q9huVg5PmW4c4F98uk8wrKek0XLxzue5mYy7kJ5POvUVRpy0tiAXeHNemQzoepT-lpVyWprukXiKnSM0Wkhp8rW0I5Wpd3cGMc5_KS2UhTGNJU0fHIi2edmvMCqkPLHELlmbgAI20N2HJ8JClVgkqS82glCAqsuCpxWeryl1m2IdPtmMJHDUZtSjx_KT3jlFUXrvxiP5frI0KkklnCTYns5PXbDJgyK52YHCKA3YmEe_uwZr_KpmOmw6QiBn_xOnu0Hen593OHnKqRL83m1WsTS9b3h-kbpk_-UuNWmrOvDJux1ehbDOwdCMRAEdwFARmcaOJbc4arQJ0KHvzPTtuQbzJF5wS82MQmwt44lG0kvwJ0ga7IRPZAu6Cs827VMtRC_BlyhoLA", width: 1408, height: 788, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104113628034745253008\">りくろーおじさんの店 なんば本店</a>"] },
            { photoReference: "AWCwydhanJzj1Pg-y0pgeECz2zkgYqOrtbkkJLyUp8dZAcggkpzxAuxKbyo5YV1vkiHlYmJX3LOi3vNb2l66U5i_uqUH6eUrBuUqqUNcGf_o81S-ZG5ZCN0iN7rEfGdRQVTMKW4MQKTWNCSOXjL01nKHkLtyqR4ZgEbtFDCLr61Ypk_BW5Dw7PvuQnZ8S3KnhYggs8YaHsbNPVYQJrU7tmZFBzUsqTDLfGNlXfElGytWZEad7rgWxXZPQmQ033lyYHMZYtkfAvEimUMXHgW6f5Giq3A3Deqk-hifsQgKbUzbyNCVH8MGDgJQyEQ-TsbIX5qn6ABOHjugy9cQDtH6uWpbHosL6icIRS_7f_dXLwBe1cZ4BnB2P8XiSdhdu-SlD6FYEIoY9aw07rwahQ1K1AE1Mv6akBZeWE9ey3r_2Zny8HGGuusbR9n1VJkWDd1Pn32g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100061134917120025433\">Samantha Deng</a>"] },
            { photoReference: "AWCwydgYfqf8sVxgGz3oC73DDW7O5i1Jy0WUl0r2dxOxB5-A2UzvZMi1Pil-2di-OkVcEjXtHgW9TUuRVcnYMzNNaJf6i9OfjzqF3GtSBkWlqGHwYBo5pLhMUPEfWL7KRz4V0Z74elAMNFPrMlpXUSMvW8Wq0VOnRZBANNcQZ7UbyI2tXOf1SiElORbNW94lu6QNQe3L5Hs1veYtmAlsLB2vQPI9OwM4TOvXTme9TPew8q4HBDm3MBX2HfzKnKxtq5rSn0r1zruYzAQ9a4M77O3ZGcZ8Ij5ZkHh8rvxPWr13UY8-9FsVWs3g2rjWEY-nFuq2KuPFKsvPTEzCLAXqOzMte7TD1kKdcqhEOAwGqgsDRRkYsPtRx4fOMgweIkSJ8WorStzoLjr_A3-UPDD6UUPI3IygFGzB0bN6vSBrQWhVBiXvwUkhm5QX7ETVOD-5RQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108225278683903402643\">Emiliano Di Leo</a>"] },
            { photoReference: "AWCwydhzKuFFoOlaehHZJMq0nrrs8vLJbr0bU7StORwB45D0nu0TqVVvOjkLI2aDMGkOTg8_FUvUDtddu9Z1IZPd28ce1zw50D19ZX30tTH-zpXo3kypolzEpd8_Al0Qb4olPii_8JN4bwEf0rgsCqWa4e9rp8wXDwiJ5Hd6xcXL2v84Yn4pc8G3p7at5rXHoL3GlPucZjy_MHAOCbcoyaYGD6hbQKkP9AURVpTbR04HSAgObXpl58lzAysU82FI-m2bXm1rf98YznveX4EL-RfRkZq8bJLVRrcpRN0P10b2B8USTsx5iq3xUmj8CcLowhv_O2AHx0QvCJaibrnYRt-6PB_xBqJUpfgwTNlAc07lXVcNOxzqBbz1bT6i_amdM5bWgTkOw0whHQnyQ3O52WUqbQrZzenLyfahF5ZXwntdcNMzD5oLlfra6kG2BTqNAw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107408698679670342746\">ぱすた米すけ</a>"] }
        ],
        summary: "입안에서 사르르 녹는 폭신한 식감이 매력적인 오사카 대표 디저트입니다.",
        updatedAt: "2026-07-13",
        highlights: ["갓 구워져 나온 따끈하고 부드러운 치즈케이크", "오사카 여행 시 꼭 맛봐야 할 필수 간식"],
        tips: ["매장에서 갓 나왔을 때 먹어야 진정한 폭신함을 느낄 수 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "치즈케이크", items: [{ name: "대표 메뉴", price: "¥1,000~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 8:00; 화요일: 오전 9:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.rikuro.co.jp/shoplist/134.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9250892613011960260", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%BF%A0%EB%A1%9C+%EC%98%A4%EC%A7%80%EC%83%81+%EB%82%9C%EB%B0%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "551 호라이 에비스바시": {
        photos: ["/images/osaka/info/restaurants/551-horai-ebisubashi-osaka.jpg"],
        placeId: "ChIJdZFNUxPnAGARewk2xIG6bR0",
        placePhotos: [
            { photoReference: "AWCwydgehQmrxZ0IaZoXOl9yfma_g0EFwV8MgbKNiVbYN9iip1FhmHS5OS1Ip6W-WUZqleece67lNUeqFu2CK7F81rHBflYwoJPPr5r2ix4srrrmXRvFteZqffRyW27LXcHr93u9fO300_jO3s-47GaXlYrd6NrpyQwwydHKt-FqMcyNj8-Nf2dv1sOuBcuBS_emfq4KT-tvcg24bFBybBeVcPCQF8cjWHoAPXd7uuku8eibjSe4FR3xqOIrlVkK6IsFW8KeP_9mY2rvmJWD9ioHInliw_Oas5mpHVCSu8HyX9wuQVS0dQJCxD6EIh3XkmzA0I57rmOXktPi5cHWdFj02BvNZuo4stfJ3Yb_Af6mC7iPtiNaUC5X_ZIOEdtYZImhS1HCC80ZuU3-odKTm_TRLVFoyxm-0wHVthMDdB-bOU-bw8_u6zoiuEbTAOwDFsmh", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105235040510465711825\">Yang T.C.</a>"] },
            { photoReference: "AWCwydgg1NiZYC8TM3rV9vrclDH3n8mDQs8As5EO78iM1nD_gbwQKVVFQqXBBe9lhyfdc4EMMgCmVdWa5wlKUL00mhYbLts1ED-fF6k9QhCF6OrNlw-Nx-DXNY-DeGCVKSXIeBolcKoabzwc43fJnOQTwz7oaq1FjY5hum6KlPqg0rDaRxYpYLXyqmD-y1_uS2zw529YfCwNGZLtyfAJEaE_WMj-Q8ygM54P6sRyckd4qBHt6p_LaczqPuJXu8t0kswSSVet5PYotJ6nowgOpt7HWPXfvuPN6Sl0X9zqrzChhS6OzP3AXy9s9BmXxeCOf6MiY9R-OjHYAXzniiF_mlW80PiCkxVUx_x_ZiAebuQPTtBNG3cWDc9nBjXyLc6s3WTEUexwivUE3S4PcMvgmREEYf4JmvroQkQfi8fxOfFsbNhBOUBHSzHqWKE06wHYz2NX", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117831544407408907912\">2とし</a>"] },
            { photoReference: "AWCwydh05drqHV2AHyCd6oGLAh35A_GVyj9pHbtJ7-gczYMuJzaFhoz1mF3_CeOtT1iuiHxFo4yDBGGTV_1k3HTbD_ZPkeYEBjyvTerZ3zwaKI5vwRUOI7wvrfEGuw41kiiJ4L_90NEhajkViMQr-77fsq-QXjr-iTK5odQGfJJn-cLa3jEYIErBSsdbwsN-p8v6-u6RXj9_7DIM3zMhURSM1RzPhiMaNTgbAA8xTb3Pd_Ec0cnPVsqwvGqHqPYc3eRkPEyP9ug1ObMEFPncc2qdDfWAt6Z2uKxTMTlBS73D0IfJ-4SCZxUBL6i9zEBTx0E4-klbRFv0udHy-Es9sbD-D_IjTqD9oTnyGJyHciyC01j13L5o_ZTecHoXdyTo-FhjwEmD-UrZWLxLRp_fXyMJ-j1MK33oa7WqMBP5kANMs70GCQ", width: 1500, height: 1000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117761993680713335123\">551蓬莱 本店</a>"] },
            { photoReference: "AWCwydhW9rHwXCy3ti-Lkd7dypLlB0j7DfwQNSlo6Qznb8DYzn5PIJNYJPhiSv0UBjsw0r41hGHGpxhkavnRIGHQN7XdFOft-ejWYziztTsgskVlFESlokPbgu2HBLviiA2dO5Z7BvxaCp_1FMdtoE_AvE94pGQcBajF69jwVSAdDwExKHOoKEddKh_r_jhNp4WUCZdNTQ5rOtReVcjM2sa8cO8VrDJy0BdTPGoGaSm7uDdgTfW77KpfuoW4zsTxAfkgyB76qZ9xTKpbN8cnia3iiKI1S4aL-WlbvpHRK2xqMj4oz63XDDuZ-Bq4HwW-HS0oZnHKbe_pEKfjj3kCJkpKoXG5q2RJzSRrpSrc-BcofoUP5Dz6-PVMIAVY-wmLrW8ekrfF5innlw1aQYxHK3tLvhf05rnCRm-XplkBC3arAPuedW0SQBlBdB8oiXEoP4PS", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105235040510465711825\">Yang T.C.</a>"] },
            { photoReference: "AWCwydi3uNGVHmLBUSM1uMlMTfQnvD77W_AcU_h_SjJxztcwr7iIeeL2j1mQ-dqKWd6hYRaQa1AUQwuecLU7L8YM4mlle1_owWG-dDRQSk8IDE81OeYI59ZjjiFaMsLrkvYwLkO93NuFKAP-oo-dD4z4sEzOzXZ3JacfW_f4RIrjTBuVcOw0EbE-_1911_pEtaf-zKX0phxVBJlURqC406ET9mP5zMDCY4OiiC0sStfDxtsvqrEdUAjpnt3qWov30O5M26FaAItIGUN6-Blraisccwl2mppW0KXvLrnex9ZloBUbsBzt7cQkQPcDXHU_ViLtK7ceym8alej9mc8446J1eYxmvHmJWJE05vMoGrGTvwq4VJ1xyX1l8kAh3Bq3G2q_MTFXph3t52mFMK5heewiYeA-fpboxjmkt1x6kyqABgWndehsugXaQa_NKxvfkiWx", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107408698679670342746\">ぱすた米すけ</a>"] }
        ],
        summary: "오사카 여행의 필수 코스, 육즙 가득한 부타만 맛집.",
        updatedAt: "2026-07-13",
        highlights: ["따끈따끈한 부타만", "난바의 상징적인 간식"],
        tips: ["줄이 길 수 있으니 눈에 보이면 바로 구매하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "부타만", items: [{ name: "대표 메뉴", price: "¥500~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.551horai.co.jp/shop/list/13/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2120556066066794875", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=551+%ED%98%B8%EB%9D%BC%EC%9D%B4+%EC%97%90%EB%B9%84%EC%8A%A4%EB%B0%94%EC%8B%9C+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "키지 우메다": {
        photos: ["/images/osaka/info/restaurants/okonomiyaki-kiji-umeda-sky-building-osaka.jpg"],
        placeId: "ChIJcdl47IjmAGAReFfKTi2c5uc",
        placePhotos: [
            { photoReference: "AWCwydjaL16gsDnck-_LnPp1AzVKVES0maQrPgslkkXv2hy81Gc9Q50mA--QhZnc5V21P6vgWT2TD7AytyEezog3-lGEw8khiF0dkRG6Vgd26DuJl66YsR0QOK-4-61kz3tdK5qg3inXaDABmgLyioSoeLZfALXp2r1-70FiVdAYI9Ic7buwM_QUCa8nNwNDlRER5re0ANRpBvve4p85gRXVAwn1uPwzg2T7SUMns0qk1CNLEta8mGGnaU0tkTzFUkilURMkGgGaf5fbTkZnxO_ta2e9qi8PV6A2kk7MDie4Mr11hNNfRUqdjZwHVVQ1TuuXJMTJf82L4e8iimLsBnxDc0kf5vKtNnJgl6xLkF02m1NTJI3l4TudUlqNHv1MLORAdhgP-ddnaI-8D-YbvAvYhGXW3GtxjZ6IZiVmWhdfA-_eovg", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111959507712774424431\">矢田久子</a>"] },
            { photoReference: "AWCwydjmuMZaq-cGd8S1TS_2jrmaiu3ugxvExFC5Hpg2Zd_RJYz_7hc84iIvyJ62Ok5AtTEOXPiYqmizBvtQ5FRnb8NV5AGdR1SewtJ8sQfB2wkTAC6vYTsRRr_2aQNz3q3JNsowT3Jo0oCbT0V6CXx8R5bvW20I3RQZFui9J72sH44ogCP0Ad7w9eWFEygKzqyJgkFHUvzFXa0ajDD67TfwaY7ErRAUwrXhDQoJXnb1CayQKRzGwIV8SIqCMPJPCJnPzdmMaSD7xJFuJIo8eDV9dZiwmnli44TN4EqX0otWnwtVKPC0L2EZU-AMWQaE8ENUleVPHcheMFZ1AujwYN7L6_w2IsEOwL63sHa0Wk_ZYDi_lqqrISTRvHGseHkRUA8qagoDZm7LmDxplu_8QVdYbDUN8MAvheDqUPn9KsFe0Wc3-9s9c5gLfGQMmw_Nidqn", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100922309955222960672\">お好み焼 きじ</a>"] },
            { photoReference: "AWCwydhwU2aizPyFzYhuwD8Lkh6frBQynfpDqD77zPudIJO04HoFVmUOiJp6s02l85J8xtmY8VgCeQHwdvBX9pVAC1985_K7tqOX1yRnaGhhkJuwfDZp_jMHUxTvvnCZ112ra7jQknCnrlXzYX6__0bD6SJIxMIavTSC3gXyZ8-g4zetYKg7dIaTW8wh4JyNRjZkkicusj5FgYyTR-OlqHrxIjwZMC0fsYPHiGD87HIf0kHgdBa3-RSIIq96o_bHpERZMv4Yu1sRxf6FD7O07ME6QWbroFDG1yCjaHdXoB3kRN5CC7zTrlbrAm6Oy66XU5op53lEbri-z74BYO-6U-MR5N2p3aw6qBA5oNb3AGgn-VxrgVOeXdAXhywPZNtEONcVYcKV3kKnNKV2YsgtvEDInVxG2zaPUlhURAPRNODAVZRXJTnt5ZaZQ-W3qTkP3kyJ", width: 1290, height: 726, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100922309955222960672\">お好み焼 きじ</a>"] },
            { photoReference: "AWCwydjrSqvP-2O7lpgMvxN3Zt1OO_oVT-KGEv21hAtWjMDapuSlhwy4z6tMY8P5HaRgoEjo1imzb3mQV5Y8lbN6Su8nnfZ0P2HHLuoqUIo1sSJOpkDRO2JUGgOq4WMRZwd4246ay9aktmYyeymLc3Gw40-vi-nw7z2RAmeGPUytcbXJROztu2AYS-XRdPx2KiTwIbPFoEvIDSDxsBVh14X-cW9T_t1LKbgn7KeZlUBKrZ8HdsFV2XvJ3NsOVGiCqz-i21OkOWwG5Nwi5nFeF7uI3LNTgFTz2yL5uAXcfzLdDXa9UF6Mmudt5Wcajso4QxHUkOOslCV8q77WgERmi-oPEB85Y4NusdP5sXtG5wFpr2Kz5ZXxPOncD-nihO-yLRsPGJDCpjptd1JGVI2azDhy2q7enTUrpMNjr6eZzhmt0LeXh--I_wrB6UfRqXvVstV3", width: 1478, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114401847779840408674\">かぁびぃ</a>"] },
            { photoReference: "AWCwydghfAdFmsRXj12mLaeHCOyuQR1AWwwa7plbu69VtLGrv0UwKYJfHOhr2HqShHaZQMAE3qh0wR2X93_cDke90idBopTnRCt1926o3KCckhxZnf0cNkwyfgEk35QKXVScqxzXv0yEimp3eAhwM9AVI9sZULTtX9h9Ec5Gg-c7nVYSLww2XerBapltkERSvMQqAEfeRs1reaNVMQ16bu1aIk_bhw8q8HLobdQlqKNKm-P6_NZT1ZQjwOjEbLFBCJgZj4QbNjor40i7KMVVjnQ3hwSXtg6a13oXqHyr_xwehul89RU5fm1IWbVGzG59IPgN4R7usLkrEZUqyNTcJNSeyfxhetY9A8Ke8wbVPm-plB4XWJ7c9RRyFhUi4x_E57rO3QlMICrCU7eeX0fUQ8O00XBA5c-NOFfwxvMKWKrbP3DUsOndK9ebc_7h8ZDgE3Kr", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110144482415585349260\">Jamie</a>"] }
        ],
        summary: "우메다 스카이빌딩에서 즐기는 정통 오코노미야키.",
        updatedAt: "2026-07-13",
        highlights: ["현지인 추천 맛집", "풍부한 소스의 맛"],
        tips: ["피크 타임에는 웨이팅이 필수예요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "오코노미야키", items: [{ name: "대표 메뉴", price: "¥1,500~3,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 8:00; 화요일: 오전 11:30 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/okonomi_kiji_skybldg?igsh=MTd0aHlzMWh5b2F5MQ==&utm_source=qr", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16710215185814148984", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A4%EC%A7%80+%EC%9A%B0%EB%A9%94%EB%8B%A4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하지메": {
        photos: ["/images/osaka/info/restaurants/hajime-osaka.jpg"],
        placeId: "ChIJDQRP2frmAGARBw_HFaCnauI",
        placePhotos: [
            { photoReference: "AWCwydj8L6yakBHyCC1qpEz04UHKDQMm7b_N5L7gsDuT_JofRj29wN9Ws4TA1s1FaRFYxF-6GJtJoUOpdKxXViGk-0T1E9hdTyBzbDhmXcKFlqH3dO9kVqV3MNFWPn5DqJaE5gqGz57J4j02jQZDK4Ei29ryZHTpyeEOJSxDxNRjl-ZotT_5JgKP-qDDxAtGqKfqNeGY8zrTycS8T8oF94-3OW8RVeKH2WX4ebMolOvtEr9YMmJVWZo7BWAfS7eYxzcFfU0UiAIA0slmB5tH79sT1hUZeadDADFE16BZRHME83CURYBtZfacxVK-SOc96W1YcTKOUh8-wGem2uqL6q9GyiyvAI56SaWQwEQ2X344DqFUtjdns07uFrd1PkDLDSM3Chrd22JGTWT6rDX41t-n-QjlFSkaBG7TzGcE9ilwqxv7byUb", width: 2400, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118180849631701271685\">ハジメ</a>"] },
            { photoReference: "AWCwydiJ7HMrYaXQ2dR0NB2xuTyHdRStOvfuWojHEI3rJKQgt0H0zuGY-22CdTU3XiEhpKNGQ5fT6Oz9rS99DB8FUXVYn-MWyrVgopSoj-zrGLiWRbPjS4uTMzUS_bOKm6N82w4K5g4-MELH_8GWMsP02PAsMb7ODNs5jLqVt48TMQSniWEM1nG6pyQre-_P_azd3afXxi70VRRk6XYu6rDgrAT-0X4b5SuwbSqlzenz5YMrMBh_WAufNbRflWYWJEXaCSEeebzPF-jlFTzWHKn1jZBeyRL66D63w5nlRqz83pSoeZWi7GYl7UAMBe4yh08w0KcwTTqjGR8kU_YIGsBEZt35Cumq_4PRWD53MV3hliwEd9ZjdcBKI65_ZuH37vuX6YT8734HuI11UFVD3Ug7LYh1oJg1_8wCf0xhJ5Rl3hse8IXDQMeuTAJE7g43qVrw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104997918112362640669\">Tiffany Griffiths</a>"] },
            { photoReference: "AWCwydhMRKpDCGwFEqzD0vMVHtEnnb4xmyn974RTZOfoR80ES8bY54sqTNw8p9z4A5gruuOb30xURT-_qECmIRv7SlRLE6CMSCjGwjbS3YQnLuoF2kkEAXY_gbGifP6n0QPXry-oZRauwwTbCaMC49DG_M0MEjJmoyTQ8qlxuqAaWAS_vRvxyK3tdMGGA__Br2VtxYIDxijV9FPaq9LC7UcZoGzINMDOioBcI2KGjb7Hru04Q88sXdTdakKrDArLbUWt_S5B23eeEwZGkuc2ydrB-dReMN9jlKvCxJzw4Mme_KNf2wH14x0YMnc4VWxr54m2LoxC4lC_kG5V8qFFMNoY2T28lyQPmMC5_d6Ggjuxs6MTVaCEtQ3esRw5krnkUJsxX1bcPQomYhbLUHNUPaK7GbOVlWeRH1lcGbNECSuWCQ4aO_psPsBwKnAQ42cn8A", width: 3979, height: 3595, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117688704976513004828\">Makie Sonoyama</a>"] },
            { photoReference: "AWCwydgVkTbtwCiQyZm6rF4cnmGbahrtswduZSy42sP-EhDQttsVhRV6lkRZFOlSz36_b1XKQpdsIUvGCMlmLrwrXqesc91EgydCd9rfyCbYH0DLRic-JgRohq8gMAD3DydPcp5oQyWf3hvdh6vSh10EmHbD4zSZ-mpIVorpEdea6aMB0kIcWrhgeSF9wgF-Fw4roCK5VzeuJ5tLexrTuUkeElum7Igvtzv_jMz_UCWpJcZS3xitu2KBB6klv3Cd25vN6gznxMMG_ThPAopA2jI7whPVJTONHxE-wW798Ue9y9oy10noLm3DgOtK7xuJfaBucm5Nsl9ZjpYXqueVhAkfbCLXa_6MqjGFQJp6aWrRfpu7USpEea1-w1zXAAbyhl1QC0TklqgLowcx-qvcxCD5VodtzryS6t1DebmjBJAZ-UL99fbM_BSLRbR1GG_DNjCe", width: 4280, height: 4268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117688704976513004828\">Makie Sonoyama</a>"] },
            { photoReference: "AWCwydiia1OYIjKPGOG6fMOpJXfOzlwCavlGa-1X_QI-w76-QogH_v47hnonoDrecNbe4yhl-HMjr0P13x4cDqLcqNPxx1Ks4OH2DZDr6E81meQaTE07uS8e5enn3zfD07xnapEKJFeFDy_gQjsHiWw-5C9tuA4mCaVwBJ6WrQcyv864eNKnAo0uk6eE21McaIjQR8PWxLo-E-B9Hh2HklY82qPgkfCMKMwWHHcc4dhBtyVigsBBk2kE_75PErwMuCIR61SiRiKgBVxXe42Mb3BzEfTR1dlK4cKdnhRt4VJrC6LDfGdHKqRwcjnetAnKwMgP2bs-Z_wBNOiFAlzIceSV_PgbzHcXAI-WlWXQAEIXEfMxsEP-ERHpozMkUWRbcmZgq-TfnkjMRasDNwVNr2ZA5lPF6X_BHlJKH1o0KqnX9BIj30YVc7hT1fCySYlvA91i", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104997918112362640669\">Tiffany Griffiths</a>"] }
        ],
        summary: "미쉐린 스타의 정점을 경험할 수 있는 파인다이닝.",
        updatedAt: "2026-07-13",
        highlights: ["예술적인 플레이팅", "최상급 식재료"],
        tips: ["사전 예약은 필수, 특별한 날 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "미쉐린 파인다이닝", items: [{ name: "대표 메뉴", price: "¥30,000~", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4721227362907570112", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%A7%80%EB%A9%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "후지야 1935": {
        photos: ["/images/osaka/info/restaurants/fujiya-1935-osaka.jpg"],
        placeId: "ChIJTZeAZyTnAGARyWYAvB_qJf4",
        placePhotos: [
            { photoReference: "AWCwydhtTxnVZUD1Bw-eClY_eVrctrC3Z02YAtzDQEKcKCOdjMr_W44qpCqTFGVd9GI-roJGC2Bvt-iVNX3S01lzn0EcJeKzP2iQe3t4FHIGO2XLKcQllPxm2fY-8p8Rb4vvyClNpfZbzalcJ_Y8A0-kaqEqisf6RWTRjC8G6zBME5puw4g_B4YdOFz-HF31GXz1we9Xh5J1OPSmZ-X2L20USOfx3pXjXG_l5bH_sCMY3jhSOBn5gTKy3CQVlhp5A0MsHBI5r7s01ssOQt6epSP5qERnkM7-2j4MNC8HoJvfS6QeZw6FdTajvc0NTREcxGO0_Pcbu6SiOFa2sFL7-O6DK1nMKtdzvWQ5T_iiGOhqVufVWPSvHCOLR4Gv9P_nRfB2A0AEMDzYeEk97CP-R5XcvTMbAUbjoQc9HGfuNf6B1jOgHUhd90XjHi0uueUR6Q", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111900950818308863830\">小林章人</a>"] },
            { photoReference: "AWCwydjExRXHnHS_qiCCXXvW6vA7XbAGpYKw9qQDuXzJPQSAyhCDTM3WrRM9B5F-WwaOMX26xvYsAbPqYabWZMrc27OyvaNnqPcbqF-IiUpgrxcUeeqV4UFDbamsCey1EiyTlGBCmuNycBb3LzSkbNJ1gzHUYZRcX0c89TAnvgwS2ynXtXDbcGh7pkQuCUMhNc_rLzhH2lGqwTcc8fbDJY1s_QfLQgKX4bHuFhte3R-__AfTup6bHPw0jNUUTRYcjoS8wUjebaGsLYH5yftP-aimJiEVsZTjkn7rE9mLsBdodQ-as-GaM7W4e9QuODOkjzypFwbxv0f0QbdOYdly1BETGh6UbA22lhAW0fe67Ov-mb3qryUdlHFM-Y2zLP4_jTCYGQheIQG_kzDEH1qkGHU44-Oj_m2LqRdGLOz__T2idOJbYGJZtoabs9U5yrWw2bfb", width: 1206, height: 874, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100439953578387669610\">maaa kiki</a>"] },
            { photoReference: "AWCwydjONaPTIJlC4_Z7wOLcRYWeLOmKFAAkf1orydp6ZBQPfkxcBz_izb_XEN30NP94u95yqOS8VJblgnX3pccxFaqJ0dNTfV2XprwFOAakRHd5emmNquChdI9I7csiUwU8tA1i9hB_HLlKEa2DGLP7tM-Ij-gwFuuS8JedXHSie1XvGql95dnBb7br1eX6UInvk9sXreouRKc2KALqmbXZwESht1u9gSr8tvPrsOZdHgof73N2xnByJzEi_XuLLPWalb17qCAlzvmHGOQSy79WkKu_qDhAJ2A41AuVkdaIoxHmDA1W_FYDHlIdXNxoYq4rG94LaMeqKDRdm5y9y17ayOinl0ZrOegZtX8GZrIM_-vFPZndM8mp0qu9C8FLLMnPvBSfaB2cXFVoh5RogOUzpbNi1m9l7PClEx9VvWtYJVF3FNCw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101558988615099954054\">m n</a>"] },
            { photoReference: "AWCwydglmO8iAipifTCh9OQBpRFbNY8rp2axnDxv2u6kPUS6bvJnyI7iTTNIKVHQgUAIB5yXKAAwyCuNWbqH38xtKsPrbFZswuSirhBoNVpeHx3QTbwDy5479SegUfeTYWycxQ_9FblAA_LDhvyzQsCS3fA2mzfc9zyXG2DxqaaLNvlDnYmmv8utuK3PJTK4Q5dFRHDbVVLt496xtTHdaP0TdM-8T3BBPEtyICjTNKUyTU7_zEfya0_a-jeEmM6ov6YBKI0KfcT6XHD4piRpJcunkR78mrxRiBNVeZ0BT7EaFZ5c9Oe27LMPecII4c5VBoNFsMGVt0gqz7yJ1lyKm4CWH_4QGJA3zu08XcYk8sZ9nigplAs-dpRlhdgp_POhc68gx8XxLxyGvACOJhUdP7ZnAYWNQQ9imI5-xyD14FXV5K5AdEExSlk9RPBfK_Uk9Fxv", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114974677537935673262\">服部好惠</a>"] },
            { photoReference: "AWCwydhKa6cjhDbPRPJUgICR9ROuM_m_5yGnpwaKfQMIw_quUCCTeYZ-MG4AAtud8hZ1-xYe3ZBqLfp0RzhFa4Gi0ZLDE3XOWlYm4_MAju_2LbEbDEW3FrVNzWwVHwNBWyP_yBrkhhJ9qJsaSAUwxPkCypNZr9xHkzIjQ58c0OL7lvQn7QNu_mnSVvSIpxC0s52Cvmj_2ZSbwskI3O9x8nOwVDwSzXpjVtBsRtqL3dYpZfHYtAuhyB55JrRC62TXZA_KxmFXK0X1eu9qhn3TGlorm5VFqebuaWDLjGIuNTgsgf0fuH3DLWKwOL0cg6JYwm3I1T8yO0PmApSRVMQUjI_9rlxgatAM42CFA-v1QXEbJ21xleBeklxgIw0YER6mYM4yX6CH2zlqwMomHbmLC6qzJ2ky-tlqhy1gnocGGr3fr6CALgh9uRWeUy8thlFC1zCT", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111900950818308863830\">小林章人</a>"] }
        ],
        summary: "정갈한 코스 요리를 즐기기 좋은 품격 있는 다이닝",
        updatedAt: "2026-07-13",
        highlights: ["고급스러운 분위기", "정성 가득한 코스 메뉴"],
        tips: ["특별한 날 예약하고 방문하기 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "코스 다이닝", items: [{ name: "대표 메뉴", price: "¥20,000~", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~1:00, 오후 6:00~8:00; 화요일: 오후 12:00~1:00, 오후 6:00~8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://fujiya1935.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18313300881791018697", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9B%84%EC%A7%80%EC%95%BC+1935+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라 심": {
        photos: ["/images/osaka/info/restaurants/la-cime-osaka.jpg"],
        placeId: "ChIJJQbuz-HmAGARlT3utlf3bPA",
        placePhotos: [
            { photoReference: "AWCwydjJHvHxLmJaGh9UshQSgAZ6DmbHfGp4UxevjXjUBdkuLiRMoRKRDOe2PHrJVbumaPmyPZ72Ux70GegogXKm8AgzGDwtYF2qOedheKLc5tEHMegCpZE_LYi-GKTbTvDhzzzF1HPVM5xgj8pjqD_Cvk8e8mDUyMGqppFhTDNQG8lFycKlyWS-ubfFTiyrwI92p7qCGO2IL1LBu98GQ4j3HagyApl3byIvRh3OJibwvpjs5KCYUYj0KJar9FaF7aDmmFTkasIFLLrFlklYH0MaVE-FD-AMgGx2zHIf0FdF5satH3XOrY86YkbsfnDdRzikjkNS528UrvHVxqTQnPkyyy8PCy7ST1B_YtvxnY2K2y0fkNVL1gwGzN-9I4FJ6x1piKKX8zcwUWzqfKAlknGIV2BdlHQ3_o7REV5j58dJtZKpC3j5Qfwbp6x8AJHwQQ", width: 640, height: 480, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109369761071329295351\">味の奴隷さん。</a>"] },
            { photoReference: "AWCwydimENo1K4oxp6VtC6hyijp0ogWC5PhZhCqWz8XjPkvGI85tBpwoBj2e2RA_9ndubd08FMGbnaWyKs4z2rtu_umOKg-FhyZUBAl83cEbrcUl_YZLkfA_JeMkDRvorxtXB7GRf5aCaQceeGhBX3Z3LBO866LbpI4iFXZ2XhnouDej_3bgWDdh02IYCaejek_pfDh1QFVI2iFRbSMjqAt0Ga2k4T6i5RnJ0y5mtD7xq1Og9dxKH5Qo3h9Uf-hmtEnYFHmOaR1VGFFjO-YKzmqbdmOzYUMq9R389B_yuLPhHURD434oZL5_ncO7kFy13X96iIpB9rfCK7A6h7XGqz7s6MJ5nvUlzyNilwYuMz7-CMltdmTMYdPR3xxh_Vp37WQGb8TJPSaeuQQBq9yfm6FAW7w54f4ms1Pr_deb_8l6Uk8ahD5iovzzs0jCrxkbIToK", width: 2565, height: 2565, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102456625610588903411\">Alvin</a>"] },
            { photoReference: "AWCwydg2PSEuLbfgnrBnEsu4rSJo4pgOjJQXXdrU8ODY8b8-ys7w7EDshXjp0TRIxNHBQacOn_RJdgNoEBYTu2H_eACnATDsCREQ-Yh2hHVtptHRYFnfpecKFs6zaexBrs_-7bLCT4fgvbi7tHKII1B6S0zt0drbzIokAM5FxFUm-K7cxxXv9lozGb6swh8uNU3shsstjjIWa-rb7jsu71ltjXpUbko2PXRJ1LibJeWQtCcatZ3ENYRI0As3Zph5KZkMj5UeRYRG_gkGsxF686MxY1_UZsr5nsOyHpCSymdVOHgdLyHYTyyUWcrglkb5ZvFA3hCKdunzqvGsCzRJp8rsxp0FOUd3e0ySDf87KJYph7YU0ulwETbl_x-1hQZdTj2smcZwydrQGw1HCIuJIA5PRPcbRDZtNgDhADOum10xMOwgFoznL2imVJAapmUtdZGf", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102456625610588903411\">Alvin</a>"] },
            { photoReference: "AWCwydgmI8_siX8u4cYtwszEmSRTVN51aoF67OHzQTx30gK38tEFbmIFKmQrCO336rcVau1ZL_34TrjIW6g-aCu1LNd5YjBzTctf_V-vzby66MP-7cR2PdiCbMxlUaPvLLUK4cmCviUNPL818EGddkio2ecNmOQc_evtB3nBGGATmGLub8g1b4VSETWzSCXs3Bibow3lZBCsuXT2GBqS32hKhlW1CsV7jALxha3Oqoz6ykSrkbYd64L-ovz1GSgM01-ozQ8xT9nmFsQ7eHHw-NcY6OjyRbztzTD_mIfAHMYpQFw770NaayQx3sbo0Hr4MdMl56Vnfrgbdm7cVIbrzu5UL-6GqvKlzCrxsWlFcfJwdKZZqKNPpVZPk3k90XT46h2gq0-DalD-VnTjgn6nfj63EiVl2VHXUdVbTQl6tBiPTsVQgd3jyPGJ0hP4tSbx_TkU", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102456625610588903411\">Alvin</a>"] },
            { photoReference: "AWCwydidw5SKs8z0EIisnZS5i-HooNCKNTw0XUjvY-e52n5DRewxqqqo9dSnkxJyanU4KxYZK9gmDNBnFm8x4iUyT4F2kOhPNRENOTKCikt_N8n9CCxODizgEJwgnEGjmmlkicfUKtBr3ALpc_ogEqOqLryAf387l_KRAnaXgfPTx3xyuttxtb7P_V71KOCYl5dtFkykNYU3MArvJZAq0ZtDH6j0T5t13eQjzMhPT7Q4zkDkQ6oJwZWYPRyM6SumAT-QTvfpiFejGaIj08OK1KSAym9HbrD04zGbOi_pzXc33uYgIOwFkakfvrSq0FQQoA-7e1BEdFgmdyNVE8u3hxkLVDe7Ot0m5Mjw7hi8r4U3MlZNsitaMoSYxbCvgFOMQp5gNanECl3th2PASAfUNXJ7xo0bHezZ2Ye7QWBK1_chYWkjtf5P7ueDOgMhD_vj0w", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102456625610588903411\">Alvin</a>"] }
        ],
        summary: "섬세한 맛과 서비스가 매력적인 프리미엄 다이닝",
        updatedAt: "2026-07-13",
        highlights: ["프라이빗하고 차분한 공간", "완성도 높은 코스 구성"],
        tips: ["조용한 식사를 원한다면 예약 필수"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "코스 다이닝", items: [{ name: "대표 메뉴", price: "¥20,000~", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 6:00~10:00; 화요일: 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.la-cime.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17324493822690737557", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC+%EC%8B%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마쓰사카규 야키니쿠 M": {
        photos: ["/images/osaka/info/restaurants/matsusakagyu-yakiniku-m-hozenji-osaka.png"],
        placeId: "ChIJa0f0lRTnAGARXNWOLs7nBqg",
        placePhotos: [
            { photoReference: "AWCwyditu695IWfcXLfp64LDeRXO6JhhW57WvQll-jmkkBg_QQPwnAB0yFNKntifxEO_tTnizMuUGLdJvdhcIZwX37vySkOrUdwsJQvbF5V5WoS-OnY9LlkD8LZBjAB9NtegB-WU-NBr4EW5rDRvw47x9I3fzpJ_Iv8egjmYdcQDlRZnwGxodnwUPjdADdmVtbrcnux0d1TD1U9QBMtpU0IXYudhbxpuhxT3KjZswKDvA2APBpR6xOx7UaArDdT8IEIYKjaEiAjlWo3iU979clJJJbmmxzBnKrMgBM9wr_VmOGhYrD3R_4jpi7B0s2ZyLzJd9DXv5YIi_S5b8hOCyK8qsk-FSrqbcTVLsIcwB9nNlbeuvavsxhgGRLwOaGVhKKwq7H0WEoPkcN_k-5xx-eJC-OOL2tMsyx-gYPkaKvjB0-skT9VEiYupHZzw-Ab1HSXg", width: 265, height: 265, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114551775829224254448\">松阪牛焼肉M 法善寺横丁店</a>"] },
            { photoReference: "AWCwydhyJdKZzxuSnVb8kw9iGIOmR0MExTBiFpD7DM38UsojVoJjKUfiZIAyhyuHftvPlN2s5NpcZat18K9oo8XPzIfJ2b2dix8JC5jZQqCUOQq1nzZVodKghtaym09tsuRaaiyPi25bwe41C_8c6-J3EJQsrM_akJ_vPNxwJTKa5l7Meos2ElpqUKGTh9qjYEwZAHmqeQAz6WTqd3EfYWY7FfijwQJ4b3KJGnnqP_OSds8ADdWoBk8NiIzyQrFJWuULFZ5mkWqIsQLQtDQPxcr-EKwebd7t4OPWJ5VtviaXrqQm6p9O-8pqdDi3XXJa5UAHLO_OsS_8nm2aYq_Pozze9tnmH0nUR1qm3H5CaTOZTF-pha92R0-yoxcuIY9-BvaMk9tbfwyrKSrjTIJGf_OYfy5qfm26etBcC6AipLbjNMnjrnxMdounUbKU0aUbz7tw", width: 937, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114551775829224254448\">松阪牛焼肉M 法善寺横丁店</a>"] },
            { photoReference: "AWCwydgOCGf4ij8HvchgJ0nGhbSpsUp5NZzlyX6dDhffOI43q3HfIV0LZWRshzL3QfZe2Z7WjgnGJJ0haI4c7IlOBInShSGxMtP6gFRDyV7bl4EH87whlnV_k3DDDK5cyWQ2XOGzpoxO1YN45684YhkdrQyS2fc7b5xDjb-zsmQKGeRk95n_KKYNvHb3ROCTJpGC8Fl8pOdp-feGMMKk-wAbeYDpHBOBrNS3xho8X4cT-nZvUJC4j3uaBhjavGAW1GgG8MNl9ozXNaee_I95pFVhwY_qgVdOt_Nc1y3qSGueLuA5tbQoS5XDbR5NYsWr-NXfSkwiqbDt9yqvZV4rXK9HCsOkhZ2M7Gxlq-jTLxFkTyDffYzxqVMHca4IwotStfDGaHBqx59iuTvv7ZtP_pVx6KGB6Lfm1h_N-lpJEtzJ6gG6OTwkTMF4fUQcgVyxuaAm", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103291140535705665644\">Susanne Chau</a>"] },
            { photoReference: "AWCwydjejGrv_yJFDl_gokbX_l4OTTQDSK5yJxJaYr3zLdIpjkG2z3SXanha1Zp01nGosc74lWqTm1y0YiDUyRP0NW8ZvXx1MUgS-g8lQXXVoOEE6gHHxBa-vJkVUitc2om4xLqvjUk4fNmDYBljyZwzNzTyhishlOJprsuOJ3LZPdhRty6_P2xV1OrCpRHNA7_q0Yw2BMtin5QwBFEsrlFyI4R5qs1k7afpyG8SldoRwNX2ofFvBHtS5qPr2P00VI8LVwaknN6jDkUrQWzkqjupUmuPM69NpkGMszEZB_uZdIf6ok1UADj37WDUTZDZOklwIKNDINdiN2D35hyJPhtnGDcmfB8znygDewcJwPlH7wYnlX5-rtTxleRjyZuWKf9qvXL-nIFex2jo0XukQBL-t4LybFj5un36pUPt02CUmAb2qptMNrQM8Z57lElT4g", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112212396684700439783\">Rapassorn Varadat</a>"] },
            { photoReference: "AWCwydihgJwzZNInIRIjzE_S46LUmv5Mi6JaYhmsarTHp5AP1UqqT6eaP9V14yGw3ABNzI1_pSx-7nHV0Xam34r82hZX7wcR0NR3EngpDhmBQoRrBAMLqNxJScAfERWWmj-ww1WL1tiln9ZgXbIzPYHcQ4tgCsjz_A5lPQtq9kWmzefnL0y-62Wo7QOJ9cyy6dqVxl0coFV9kFLfzQ-wEOJM3M2YDIpUB0N2n9b8a9xvtPLjTx5rd5pFioM1XSm4qdKnoFDouO5CfpMSbOpP7XQJXEexFxdRmTjAVQZXCFiy7fxVUHK2Ed1rmGuG89zdAbi36ATyX_BPreGxR4CFV_4589s6zbpSxNBRfEk7s0C_WmJJKmsgRGGGT6VdeOXhzAedqjgTa_iNXTUsKlTMdT0rs9v4UHteIet23qpJfCgd1QC3ik1kD7qy6XbnYEELuy1b", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117699808930065165848\">J Works</a>"] }
        ],
        summary: "입안에서 살살 녹는 최상급 마쓰사카규를 맛볼 수 있는 곳",
        updatedAt: "2026-07-13",
        highlights: ["최고급 마쓰사카규 구이", "높은 평점이 증명하는 맛"],
        tips: ["인기가 많으니 꼭 예약하고 가세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "마쓰사카규", items: [{ name: "대표 메뉴", price: "¥8,000~20,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 5:00~11:00; 화요일: 오후 12:00~3:00, 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://matsusaka-projects.com/english/shop/houzenji-hanare", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2827550958429058892", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%93%B0%EC%82%AC%EC%B9%B4%EA%B7%9C+%EC%95%BC%ED%82%A4%EB%8B%88%EC%BF%A0+M+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "츠루통탄 소에몬초": {
        photos: ["/images/osaka/info/restaurants/tsurutontan-soemoncho-osaka.jpg"],
        placeId: "ChIJnx1PWhXnAGAR3bDSVXbMW64",
        placePhotos: [
            { photoReference: "AWCwydgqbUg5SWI_SHgr5omn_C4WnyaSnk_vWZUcv0GnIuL-k24BAXKtTN19PSyEqgEv49Kbpzu3_UH81MVa3GtyEhvVgJhAEZd3eJbjRvLWHvx1Rin7aN7IoogZjEiDXD-8ajtxyNo1Tid5eZr1YJYDUEuUUQ9Ck1AqhaDR4s4BrWA6ByZIXIAeIL3mGIv4_gjuP-V8ekzjFvJeogUAVF6CLJfYH7eFF7ST88zIXnbgKxb9uiKvFr03iqMAnPJCMKBeqGeojA9fK0xtErdySQxaKQCTYzLQWG9J5Sb5pdCE1VleL1UpuLICOd4ooA1fe2lzGv1R94rR9RoR3ApwrBg4cnTQZU5sSpPXg0Lp-EPQ3wmI0j64-Ts8UDuVFEiT9nNUP0Pl7OUkdZ2erNl_c4eme85Kxy-z0bc5cCjAw_DvrhSEUc-SdhDVuELzP5NBYgGs", width: 720, height: 480, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101858193580037625431\">麺匠の心つくし つるとんたん 宗右衛門町店</a>"] },
            { photoReference: "AWCwydj6rhtrG_An4chiX7qeYDAix4RwMeO-n90GrdGlLD6Dql29TgOzVDBuQpKSadqNuH_QsrnDbti3mtJ6wDFMByThDOB9h90qXEoRUhvT89IEk4wDk7UQFPly7EQYQL1EiJZCnTjWRYlSSCF0NblLnDsD87R6EPFIPJPnLFkc9CcOlGqyh-ZfTUZEFa_5w6cVwRbY1nPbnmR2_p46vlY-u7ND9QYTYgGrdGpjut1ElDCZ-S49RZeqzxnYz1ePS3lA5NFMNmPQfuMwr4je2Xs1cUaPKY_S2gmcpVbrnlUIsk7JYloPyRH45YJ4c637S39HJpXCTinNZrUS1nO5Ihp6dO_QCl-mTuxHQLxKNu1ehoRlxogbTUdqPgDsE2-oWCwPziZ8Y32JJvdRGhzhGz_5fqJWjy8JDhv4Sq_Tcd5hXgmt-iyFMWpNsMiZSkDKRw", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101858193580037625431\">麺匠の心つくし つるとんたん 宗右衛門町店</a>"] },
            { photoReference: "AWCwydh_ILanLBgkb0Sc1owSWsr3XT2MdIFOw76tVt56Mk3aNar6aCG7EdNrNKMZmIqA09XVrjX719ImYdKw6-AnhDFespPy86vuDIhZZKU0LMiZnOiECF5Lxj-OSSAeKTOyd4-zghCQIocuEu_iBcse6a1V8-u2dxDdewumBuwly9bqIBXWJQVCp53oZPl07WD78tUDAh-g8X9RdIv_z5-2p0HtlUQuOZ832-oZeyCfts7xkkdO8DNqAIp1BU8nSurV-fA51ODZPFp6WJsUTuqyKOJ0JpnGe2dfNTLXZUGxgScKLnyl_t3jtaa_2SiEx-744SmVwwbx_eAPErYUJCKOhNkqhtpE91EzAJx_VPfLTrZWOL25Ph_cDACDdm0HEn1-hFGt3VZM1VXLef-I9TxtYMGGwRMcGdZ9XcgaqDEXamPUVNC9aAb999cEKEV7oA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100369651511364021154\">のぶ</a>"] },
            { photoReference: "AWCwydjPp7_NZzWKzhVGSi52p9lP_95WVWcNlBhdKrG-MYnV6A3NLS2oSKUa8Y2FEata4sXqsCZsW303kJPB_L-oo_MG5uD4HsGhQIrLHXjmKv7De4EfzdJqV9wSi4CwabvjvPliFG9zdSJW9xh4d2kY1rPTfTfDPyt8N1_ycvq7aLpWvimmqTSLpf-Bcygo4e_LlrYiQ7wGdYmZxK18M2J39FMR95bE6vwfyB0ZE9nyF2W3-14FfIGHXxo53nBqhi7ahbDXxsMdvWGiYJNNcfIycWTZ1YJNsJZ0bt5WBjY2t7FYlhF9-loqz1gn0Pql_l13eHvHVEXayHBt0qFoVGCXDWXo3LgYFvCHySxwPzkHXItpyuuwQeNm_Yhrpdc6Dym5G8gXnwiZ8_FvoOqCjzhKNYv_9GulnUjj4K2WcdFPGYL7FBmWndl0PEHQknk2bQK-", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112617474262159875678\">G HOLDEM</a>"] },
            { photoReference: "AWCwydiiBhX_k_utsD5zfzuhi_AyhX6U-DG6ovZxWXvDmjELTG3fNXpiMOcpGyFjFSunHushAvEYAY4ldySYxz5RPl2FUgJCQ7OKPNPChi_NBmT4vegNd19wt9ZrRR09IvhyoWjSlU5fQsulM2vEJcQ8kdX92-Wyt6LqSmz-CapskV3pLiWTwmO0BBcDtgZs6LNT3kMFN86LtexUc6N8ap9K7ipCP0soKW_2iG3Vs5jMkNAKtlsLloLOJHH1rBZ8XkyVElzT55ldl7HCreCIozAJgURbVm2TGW-yns72UPuS5xY62T7g5UQd6xltkcamJq3Qmtl6Qfcvnc_o-xyRqRoiubM9A16az80ZBVbCsyBC5l-U9Oty856A8eaGEUN9gxXMyYpKheDNDh8tMjFojb85PmL_thnGXBZkNCvTrAhCfwdfPsh9Fp2a_fGg1RwAObws", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103514792636545083585\">mingon shin</a>"] }
        ],
        summary: "오사카 츠루통탄 소에몬쵸점 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["대형 그릇 우동", "평점 4", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "대형 그릇 우동", items: [{ name: "대표 메뉴", price: "¥1,500~3,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 6:00; 화요일: 오전 11:00 ~ 오전 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tsurutontan.co.jp/shop/soemoncho/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12563860394098208989", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B8%A0%EB%A3%A8%ED%86%B5%ED%83%84+%EC%86%8C%EC%97%90%EB%AA%AC%EC%B4%88+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "도톤보리 이마이 본점": {
        photos: ["/images/osaka/info/restaurants/dotonbori-imai-honten-osaka.jpg"],
        placeId: "ChIJBYsUkxTnAGARg1G8qmcdWf8",
        placePhotos: [
            { photoReference: "AWCwydie5BljfDXvHbLrSZp_CtZBbht69DAKc3oAffssXuX_YjsMiwDyzT5HobDDDc11mD5Gna3AlTy7N5aa6dWCDJ8ypWJ-wVVJHXlVwAZLfUP6EYXgYj1aO0L7tHuD4aIlQSFx22I3o6kgWYmgc3WPh0CdUoo0Cpbcw90Vq1OBj2K6VLIJnP2pl-UmsuymefaHlRu_tnqPLHpjKQCEewBCIu1Ya6aGk2Fv8B2yTncsEr7_aXLz_I9zVYQHSBjzVyK_0fiJ18J_RAaFIdEIaYnuihJ0PYLjLwcwDwAHNAIVp1G1GZPZSk-RCzBS0XB5SucwvZt5PdOfo8cxMyDqmyU9kenfFXCcBQ3Z3h8tAgNy55C3VLplGODDZcpqlxrqunEAv3i6ZaU_WWaZj4JL9kWyTynxmiRqI7iub0iVNXJk1wcWZaI-B3cRPaEgnUQ3tw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117748092273476614408\">Neil Chen</a>"] },
            { photoReference: "AWCwydhcN_xBuXdEar2lTk911jgMfKVUCR07UrqJjmpmRQlpDnEe_aFXFN7rQXgwbpqU7o0uR4LR8WCByG6f5VV_dhLZWVkw5JFnMozz2hEsfzmaGYgzXfjIGiVdWPRFXd7bbqhblhM8o_Uomjim4-CrrpuueHY4TmBVAcd09WgR6ZEmub8GALMrHIgh6co70G_Mku76FVmU-KObM9-LS1q0WYFUHOx1H0Fe3at0n502eCzCr-ZM916IzptwckFpu1c-NLYGfbfbIkyU0urpMN1PL2xFm256FRo4cs4igClAF8zuXBgwBki_6Tol9FPBnQW-P4VAXO6iQQjg8qYd9UY5yawXdAlserg3GfrcVGCbaNjLBcxiHUoBbUJZJSADcFSwY0E4Hvgojib4dK1gNVMj8yg_q84LlQARCFYm9oxwkj0MG_6V", width: 2592, height: 1936, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109173881886733603596\">Meri Kono</a>"] },
            { photoReference: "AWCwydgJNiRowk2UAlJBUFEkuaqEQZatFJHdWNFV4rIMYgB9GkKQeVXJuZytmimkFmEaji_8NXwI0BbaLzdKZiIQVSJxh5TFk75P6Frna_jK8bSJPxbdQD6uSay-__FmYHJOKI-ore-PVpFZ4AnNfwZBhmJO9z78uGF-7Cxs6PVLLxs1SMEqpNzRcfeZQ1SuJrh4OO-cvlwcrVC7X6bqQT7PmUfrUuX61a3KYvmwkEYsItdtmjLNiYgkievxRvKoqXUTRnsvzjj6aYs_Cfg6Jhlph67DGY8J_IAewRe_61eYCZo2zjCVjx5sDniQUynzMyrQYr4mQXU1UKjcmilwZwYAUXpdu5YTnc_nN4EvsrZ8bISZY0Z2qrBaGQX1VYJdNcrMmRliMysPgmqkf-WGP7GXM8lZSQZLbb4-fIa2AdRQFgM1hn_cS-DlWHZ-LeapZg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103778639834004784812\">包みし者</a>"] },
            { photoReference: "AWCwydgtiuECgsb84y8j6fxDX8eXrCt75U0aj9adrjUKY7fvwk0ByLaCCKOg_6L7-htyy5kK35V5OF5WZNVCL7Hg7bkTUC5NxYOtmCxZv42drgZHFNqCIKb7BAnmtYhozFYb1DMzo9Ksp-WJvFM1e0s4TzPUFiSpycWl8XwmqjzXMNFO3vfrGKfVpvxrYFnm7GBdZ3jNlFI-uMf1LHabJ8UrudeMZlh0_jEyg7DresKu0jmVTYLvtpGxcomlM_D9IYI7BhaEUACfm0Z65C5-yRzfizg_3abTv_2GY0USdPmV0_O6nKKvoA_2EiVWJSz-hv5_TIO0MYHrw-PyL7YfOO7xCcdaDbOeExuE9H0jAa-wMdQOLKGErV07lAtFts3f1mWqX1QqsFj-wNrGCyx9jy_iTy8Ofve_vMg5v9OuKFcX0fHeom9YotIqqrEYHCRR4CmX", width: 1206, height: 1099, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111431500393782351373\">くーか蔵</a>"] },
            { photoReference: "AWCwydijHin06e-C0P_y17rSuWRDGTl1cP8JhwqAVmEExFqOB9p1Npe36l7AtmJGvUg4g2TP-kqTCMcT4Bdqzxzb_YYvE7sQteAH720vC9y2_3UCnR7WzWC_LzOXYdtNfNpu3Edf8IZuAAP9m9sp0iQkB6CgboTetiOyzgVwqaTfhdDP-mPIjorBuyazYvMIDKAClHGriJiHOexXae1rrqH3V9-HixPAFoX2CuDoRZJyKsX2OJ7eyMqPbHmqSrvSoA_XLi0Icr1zAuHYWXkSHJ_XtyAIZAfkoulpeEvyzcvRwSdniApPQduG2yaXgZ-O8rGMd5Lv8PSGx0pwnnd-W_hCKIWMd_F1fjhaVKYfU7EZ7wGzjlRQAmq8pHVV6WiFvyC23m4XIe2uSY_5JYF1og-MpPVC1YMfSh77KSUYhy9arUyRrE5fJrpbGrVGGNseOLP-", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118271647123369022752\">前宗孝</a>"] }
        ],
        summary: "도톤보리 이마이 본점 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["키츠네 우동", "평점 4.3", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "키츠네 우동", items: [{ name: "대표 메뉴", price: "¥1,000~2,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 9:00; 화요일: 오전 11:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.d-imai.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18399770083682177411", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EC%9D%B4%EB%A7%88%EC%9D%B4+%EB%B3%B8%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "텐푸라 다이키치 난바": {
        photos: ["/images/osaka/info/restaurants/tempura-daikichi-namba-osaka.jpg"],
        placeId: "ChIJ88KPyW7nAGARZ7Jx1R2UXUQ",
        placePhotos: [
            { photoReference: "AWCwydjV1LaQfBDrqYq9ByvG-cDJDwmISLzaw2tdtolgNgixwJlhaxpHX70s7hGSds3ggakN9jdt4us5Cht1oi0Stv7m23MNCjBcPXMpkqvE-QVg5C9coBtJ0wGvQ2z993F8tNWCvJwAxxLhq2p7STX1QJJBiDaHFcpt5LFNZsm6F6gO16jDjyPBK8Cigpq_Hjf34697l7vzspedP2Fqzf84EMbnhHno0njEOPMEyt8kttcOJs_80V7uBw_eS6StOwI9Ro19654Ro110g8WFZNyVMTgLZAerAriY6fL7CrkfObJDXIYZTU3hlPwYBO9qkm7MChv5UUTTQwge7SXjyH8iV3tZ6ccWwLENEjYJmftlWgb8-6syryMdoLftm9xOWU2ZJ1QjQq2xrnUswlUbduqigbpgoVMUptph56kl3FjdcTd2sNPKGBnQSOxPV4gXjQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116224281249242086247\">x</a>"] },
            { photoReference: "AWCwydiNQkGFD2d4x3mjFuDvHXutNWaF9WjVy7rZuQ-0fq-x1d_clao4HD-b38iwC7TVc_zK5d0xTN6D_cGoLR5yosLSyZDz1PstZOXtrbqy7bzAqDfMSiS0npDVO3ZT_SsXCfxBjyGRKe0uX7PYd7UkdMfnZG5QeFv2eYGb8bQIi9SFqWXeQWRQdEnDDLJQ1LFRvhA-Yh6fYdwcG3Cy9mCnPgiTqlZNnFPfWa6qIBdmgZAoVpInrBhik16hNiduKesMTgdyIzepvhSJ8qnAjhAd4LI7movkJp63y_lY0FKFKrVxo-kejovpxY79s-GEPRVfS1zN7m-Jxq2sWvjwYJ2p_fB2bEUAzGw5hNJPgcrzDSYVnZScZ4uJve5nGt8iPaTsoeFQ96zeoZvKfYLTfcrr9iGym34cRs9QGSwZleZrd8GtF1Cc", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110911458822123117785\">真實感受</a>"] },
            { photoReference: "AWCwydjb79tc6c62JYRW6uinnG_CzpnlOi4MRg2J_h7ZqSL4JLRZYrSVNyK8eAw_gXMT7N6zOYwSxGiRbiFIU96sorHSmAoPcKPp2qFNnd_e0UIa2KqgKWwW9TiB8kSCTkPM6H4AC4dAOeCNr8nlsfppi2KnGjHtLIztd0rI6spli5RiXh8qvaNzWvC2FjfEUkka8N3HvJsJ9WzUg6ehTEuaDDaFD_cSrdUxmTyKnjrl8UAlZa9fTycF1sm4VHjcFweMzlgg9ofOo5_8VW9QL8N-HxORWUEmyj1jti64Jdx9r9182ATvz-7xTfFTY0RLYEK1Bmn9_Yv0KFynRDbfiho9l8AHfmBk-8RYVDFQmczJbpfgQLFLuHHAIvL_o-vendsLyrvW2BT_aWiswD9LZ96L6-sa9_EnhlywzYy8ZYLMKLzWHFFN8ud1BkJ9_tJVhuo9", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100795857454061940385\">S R (喫茶大好き)</a>"] },
            { photoReference: "AWCwydjCGU8CfkBnYH5ENb39X-WzD5HLAkVNyTSChGNYZYh4ZHda-Yf2T8LEe8UI-HQ66ft9tzBrc_TQmJY91_W7k2Hzv94mmqa-UWswmHEcYVf6dYZcVJ11NVZOiRMg9q4LmIeTE4OxlQoDPKbHRQckM9X2hTMGWx-rVFTQBnK_9rAOn4cBA1n-WrRxLjIYr-xykDtXxJsbccm-DNtEGlTNzgLFUrSIgplAnCvl0Cekgb0n3mUt1HbItQutEtPqyBuGeiy1I91PDpykK_gKI0FHPsyQoaDajOUB5kpxZePCDXmwmtfdHR2cTnaL8-9iPz2FUzr2M2trY4AmiWxsMzPeIyXNyOM9fEm3G3ToXWx70kkiEqk07PzUknjneeqgslkQE3rY3o_6r7RzYd8-Nh-2bxHg-r1uyc-FrwWU1MgORxwhdk7S6rGnHxesan8uYA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109208274728473991213\">まにまにさんぽ</a>"] },
            { photoReference: "AWCwydhsl6HN3vdxQL2sja3V0liqT9ui-BFUgSfeJ1FwhMMl-K3MHGYI_MaTKegzrogCNPNrTZyyv-FuXEO34rbdskkbgd_yq09ZGURTsYhOB-Ij188Y6WEyg_kZYgykoq4SSw-BVcE3kBKQ_rAoGw8f0RiZiY6Io-xwydxjZU_57eLgY9gT3qLilI0KWkl3E_SU9pZpOB7etWytr4JwnTEcRNCcXbPar8xZp-IMt3cvvvxuU5ibVIy3GMlDkb8YchNjl7bKw-Kjv0mVL5aVWCWRhWecbr-FIUXR1rZTvO0X_fKnlu-z4khYOaUOMdW1s007usX6-6p_knZxL-BBJRlKTiURqevJ1tz0kHdYXF-GMa8R8BM8mqJKEoZE2F48hb-NQ7ZZ-cFvrpHGXZectxcfjCovh5atpvMYO2-AWv1ztpV87CdIdxTY6YPr5jNrMWKv", width: 2093, height: 2157, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110734253435379144199\">yasunari sawai</a>"] }
        ],
        summary: "덴뿌라 다이키치 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["튀김 정식", "평점 4.2", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "튀김 정식", items: [{ name: "대표 메뉴", price: "¥1,500~4,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://t-daikichi-sakai.crayonsite.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4926256423269151335", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%90%ED%91%B8%EB%9D%BC+%EB%8B%A4%EC%9D%B4%ED%82%A4%EC%B9%98+%EB%82%9C%EB%B0%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우동보": {
        photos: ["/images/osaka/info/restaurants/udonbo-osaka.jpg"],
        placeId: "ChIJrYRtAO3mAGAR3_5o5JrJJ-A",
        placePhotos: [
            { photoReference: "AWCwydhV1OKXOC-3AAD3jds9b4WU3FNcXQYMmAn-heczT0tsEAKgD13BFjD-nB0awIMLs0R0roixxa84RrnUjBPBDU4jwlFXgWnbXKP-C89qcX9RnBs6XcUzJjTwT9KWkmf4CXTDzE4xcxJ1KwsHNFMGTAbgiW6jeBdpR73TL-o7QlMnW15wVpeM_b9WEQmlW1hQSjCI2uJm0QBY6YRFfLDpNWlXVdlZ1KMcsZSKitPvEMQ35BIqnSyg9rj27vXhN6zHF6lOg5jULebCfSAK4vzkVBH2xVF10O_fdA2efJCUjNdAKCh7LgKv8e_pMaBOSAdUaClf4DaM8IezC85s5MynlHnY0wYOLvJOEkErGTRnwWi0w4cZLIGt0aU_E1jQyEBptRdLEw0SPmB8M_AIb9rkrcZiHIvADeuyjEdUMKwmwR0BQ6wehv_0vxJU6ZHfdsbZ", width: 2018, height: 1852, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116716057532627353676\">金子洋平</a>"] },
            { photoReference: "AWCwydgivfigkWeAdOaMSwU9qnbbe3V3sD8NmDeWgJC6K-DMgHwG0_K9lAGxnOk5zD0_ib_AlexJjeTaxFBmd9R8VuBwl3qy82-wnNnsMQNW21Z5WojZTAFWoFH_DFXr3hpJNl_Ry-uLGtlyB-h68m5cw9-bp-lMTO3yoqHAJw_zmrcM_PP-OFhmnm97HLEC1jKuscRJUvvnDe3gWYxwGCQZxQP-YaBHfFhD6ZS_NmGHeuqkEESw6fcKIvxNtwdJ4WWYEe73O0PX_79cjGWis-IxqLBGL5Of8GO4EKAAirbKoycUfE6O62EHwsBLk-2zpdwwM3abA8HtjFhudZPbIB5MDmW53pwQIbgAzMO7opefsBdRlgsxgECeCMhs6uXATWwDp-CacUUvrKjl_TnvggMzCmgZr_CpjYJyJUTkB92Nvzw8BD7PnyOno4748k0P9fvb", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110040106984900311901\">Seul S</a>"] },
            { photoReference: "AWCwydgouOVYtmu0cgLHPGx6RjnQp_vT6hG4umIGi2lprICRqzVM7vQrysdyx-4aK9zxjuvQ7oajM2EbBpmCmGJhHm_OtI4tNDTU_SQJW0AlIRCXJXUh9rLTVGmTzJY-On9bGzG6nqJaWrJz8B7qahDyAogmNpPgiKeZ5OimijL4NMstJp8G41te60glHA7DnJ0i5vhAzw5IWbSCpcQXwTF4PL527enaw-49owF2S6EGpN0qTfV0bIUtwvga-4cdKiXOZkzfpjLk4hwdKIigRCyapxvsIt2IRGlU1jxwhCU7yf7YwhYyhEUbMM2DyFGfL65od4bHvn9HknqUHzdvtW7f5lgVPkbnGbK0yt3yJWk8N0NCvwI9HsXzDxFSIS7DQfOhnWgaCC7TifaRmgaDd18PXmEpzVfWu4DdRQDbuhXxg3_0LzT8HAkod1vsTIVN_1F6", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117851361741668692968\">ゴルゴダ</a>"] },
            { photoReference: "AWCwydhn23HvnWtTl-7UScFaN_Wb6AyzqLwIPbedcczlQNMAlEKVabTMncthd3gcrIXoq5sCqn4ldCCTUUzuI8PNPBNXCH-ymI2Dyii_9x53Ly2PavXgkSqkLPuT-SGMTX67UW-iYeuY_FNjYEZ_9GQZEBwQvQrhxm5fd9DQZsqqNSwiWhmUOsxtm8N_iLSAAyKBrggZ34hxTO4RhFuwn_LFVngiHJjul68JqqMUCkhFxocHR9jSKywmC-SbdXSW34GVigkdhidCUkqyBZ-ZjLbqipWKdWxv8yqC4g1OpZ7b048YWF_MJk7kH7yQvs5HIAA_ABMrn17mfLK8WcwxxuO9Of2zRHI3KTSDGk_jU36GnH_mJ61eiz1VBnRLOohoiAZ26X07IsqGDy1QCaWvx-eRXhDeyOshKWrxxKpSpj2iuxHDTyw3NQO62zZk7quVIQ", width: 3024, height: 2337, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112123872046359575388\">q19 lego</a>"] },
            { photoReference: "AWCwydjq-eDUDVhs1g10GNs0o7A_8xpJHmzS_Jqt3OaUDQbdyAXcRyfIS-30OASJ2kIJN4qq0LtAIFOPicJmtHF0a2JsDlJTsKKsopmYdZFbr8EimhDOjejLkxAAkqiXkY1ChMSnJgOgTSYMqeTs07e7ZETEHjAUwyg40m4Er22PiUZONJIVYK87jFb4Kv4gx7Lbw4VqdLgAa2wBamB3R_kQiF49BrmiGbOmJpx7Clm5Rq8UJ3AnX07tufaEJf3LykXJyx8HqK83EnFRUoAVjtwekohdCC_naR-O5r2itsXyj4R1jemDBMKt8ycq8Qen0C6ISVzV2KFltcQIhJrolR29uekrszk0Rrq4khhcco5mu2T-DkKShTSsrJOx31vAqs9zNSG2KO8KIuqQSpIeKgiqBuU60_fBF34Nn_63tPnmhSEomUlANt5qvRz_WYfRl6tk", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110468660985014136566\">M H</a>"] }
        ],
        summary: "우동보우 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["사누키 우동", "평점 4.2", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "사누키 우동", items: [{ name: "대표 메뉴", price: "¥1,000~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:30~8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.udonbo.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16152100255681806047", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%8F%99%EB%B3%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "교자오 도톤보리": {
        photos: ["/images/osaka/info/restaurants/gyozaoh-dotonbori-osaka.jpg"],
        placeId: "ChIJF0VbPRLnAGARcb1Qvy9u4gg",
        placePhotos: [
            { photoReference: "AWCwydiIsOJ-N339te6XnTAEWTSgnFdl1xbtj02x_E-SpYmrc3adpeTJnm4wjH-LFR_AnY1M8XeHvDKVD9oQec33VweV98l9S0OHCDyzKzyRJjx_kG_v52FHCwJn4j7TPi2OtwzlW0uvxUNaGbRNzdJbqw4xzT0URNCCZ3szRq_UNtTDUlefnIDEePQ2g-LwCwAd8ADCCQ54hD80w6fiu7zilKInTbEqqiGHeNk1_MZqQE7mUGIyE514E1BVEEcDbkvuJgZ1Sgz8Z6H6gncdVBUfHF15iHh3qZYjBbkkCt55bBfDdYS1ZOi4R-LjQ0arapu4et22mG8Gcg58hXOU-axMcHuCSzs3_-egpo33y8icNr4Opi9VZz_3Y7CB8v_-Qzj3mweiTp2XZqAQa7k_y-3cAAacDCdNeMbAr8WLep5YEWVLb9hr0kNuKAa86XOn3nZC", width: 2494, height: 2974, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115478195808140112314\">餃子王 道頓堀本店 GYOZAOH!</a>"] },
            { photoReference: "AWCwydgLjtczctrx3x1d3sZQXtxrXpnI7vItZR1Um81X85NCNnkucm90RzumS5Vja_cuSW7zUd8RQIjv3RCJvRADOL6JHXAMQ6ZBBT1QB0Qc6Fn8aZ5skQcX73QCXKXmpJPyWR6usMRvfsxfpEnwlpjrA5xxYU0jo72voyh_uf4SqpxxJ7SGhZ-ynW527FvsOMhHJrS0cEdxbUuKa_X9KHt5TVycqlbr8oYZZ-H3mLfVGHGncd1j4BX-VZLYBbu7Mm3FmKaRmb8q_RKaZ33ppw3-tu5lmu39aLYkXjeHBu1MSKeScad6nX4k3uW5FFzmcahvsMPHJlLodnURua2F1e2YNRxXRSkO9EcPXCOmZjJt70ZLiGDdx9AW0v_rTjFFrsmeYd6Rb3N85-jlF3kyKjCy2qa_qIvonUjUKocfXUFUKAnQRjY", width: 3344, height: 2224, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115478195808140112314\">餃子王 道頓堀本店 GYOZAOH!</a>"] },
            { photoReference: "AWCwydigUFqG71SnZI6FznAn-MG7irfbfu0IeLD-o3OMi0ceuxOqEmvEi2pVkn_KpfwW7O17txHMYjCkvd1CEAuXDPIJfBuB2Cnb-LFAeYozY9JVNp8CvW85-jrKn8A1zcN4cv--H3lqJHAEJ04Bw1_Fw0RS2vCzk8CnMGFgr3J4AYTOMa5yGNolXJ1JnbzbWi6WWPPT391_0xlQAj5Bd-Iv-aMOhKDuvCkVX01lbufTJe9-B05nBJsHtXgl1U3_OIWxDz_fAaF6XHpapqIuC7-W2bGeFK9duaFC3aMnQZwdENVz5EDh22H-_BljP6gTCv9hh9rYG4m_2J0CdvCjaJgLERRv-X3TMrpzHB_CwpBZAWEWryqpDNu1BjrXh83zfuSkLDGr2_i00Xu-KLYfUIEm1frqeXQG3pTdFQvLCUYS2wx-QXkJxNCcgA-bmqgT_3S9", width: 834, height: 921, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112635926195510257849\">gurpinder sidhu</a>"] },
            { photoReference: "AWCwydi2VW9ktjLV3rRnTLjokEbMdKHdZvNhHdgf-yug7usSb08YHz0xDuCkNzxwjTI9Iyh9p8jmPHgD9mLDQ5VzJF4LRWUOAgbdDFuHi83Lg7kcQDf5v9i5UDYrqa1IBPsKBi4ymWV97x6q-hiqY5vYj3J432cs0wqctZ4G8IAVzzmcRi3F52yB4hKn519zBlGEw_WG8g_mH9LEFSBg2KP8k8GeISvVcDq091mMZo_gyfWVYe3qK7JA-ehXRZbWsqaVbcUut66nx7sW9gxUxMK5vJeFpMn3Eksw7x_XynnnLj3XTjZp69a7iuYQUfl0NwU_g4Xt4eyk11FdajahtTxeUC3CSLCU2J2eViUxAemcShMFu6JkwrJKWn5vRQnOdkkm_ktQPUMM8MUwnsI3u2ipM4K-da1P4QCi5D1GSGdhshaZPP0JUbnywR3TGTHFXlwV", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101783705449059024692\">Biddy</a>"] },
            { photoReference: "AWCwydh3DmngxNgGEts_6bF-dy6biNcxHcPjZDuZqy4Jwl4wNSBm7lDvgz829CbSYl4XR5wMFy9o7uXJIBsSIqa8nE01V8XMIshkp0AJnbPpb29B_QRVjkiQZYbO0FcIv1RslKJPuwjzIsHJwat-SCzEpNI7zsy5HbRjMzsp5JzL1AIDI0JM0jaSEsUX-0Df6OeVxxRiHQo8DnEXnpBdM_EFsD4CIug3xx0ryj6XbuenKhLwWIaAN58liCj-Yb0IYQ0G8808ucU3IzC3eBNul4dM2D5719nzX6c_3QEZzVbvUNBZqViX8zjjPSyIZqH2b9Tp1efhrBIzxqmxdi3NhxbvQb6UQmueAjOsOXiLP7FuZOftyR4A-bUEF9UBf-lc_Gxno4gFbSVVjW9i8MIJTdsIuuDteL5GDo8VZ_1yJKY5ajZGPyRz9slnLjHdTUpC4g", width: 576, height: 1024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109229314226327885049\">Peter Boothe</a>"] }
        ],
        summary: "Gyozaoh! Dotonbori 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["교자·이자카야", "평점 4.4", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "교자·이자카야", items: [{ name: "대표 메뉴", price: "¥1,500~3,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=640195248392289649", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%90%EC%9E%90%EC%98%A4+%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "야키토리 이치마츠": {
        photos: ["/images/osaka/info/restaurants/yakitori-ichimatsu-osaka.jpg"],
        placeId: "ChIJ73kd-e3mAGAReHcWfOpdGA8",
        placePhotos: [
            { photoReference: "AWCwydjWo6XYjIk6s-nC5X91MgweAd07oKF_P8Rnlb_2EXZR9S0z7KaIBW-x87ZOiIc8PP760z-ZJ_iuePq4xLCm8GMK1MXB6rxNjdE5g8igH_T54vA-tQX66GNxEm54P5UfybHmL1khj1C8z-yc6jB3WcFaCvyuWl1fUDN9tS6j04tBJ1A77Ps2avhjn9pti8EZJKM5LzNoHUMMWTQdL4HfAWkPVSxguYAIaOO-Cm-gcC5DLPG5GgtH-yrD4cqNxhDFrbcT2XkFLUq_qCkQP-2q1eQ_I5djx-h5q9bxMj_pR5RPTxVHalghEXBeTWtjHcLiUhMpuLlJaURfi6hrdT28oK9ZHXOUuhpHY8_f9lHzUQ6_yoYooeJx6wx-HzeAiuz2WYVK2_c8Ocphf5cjsNqHAEZFQCyjF3cDuoH2GeYh73lFcwMP", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117474054965642253361\">Aさん</a>"] },
            { photoReference: "AWCwydgapwNwVwXN27KxI80-_oDrcC6Wllzg1PfDhxL8Vop3x6GYS79rqvCw9E4Dyf7g51o6tpiNOzVjQHB6ZF84bFwe1a7m_IxKukGa5xAO1qqCC6adglZzNEYtmfyby__lg1X61lXYioBR-nCGGKUi-reGi2BRWNAVhaK94ySLOreCEMHH789XP5qzYt33MTAASKzq7KupablJu7m2qfbxXupGP6ZldIfYKn-bbfD0N3HlnDVsgkeO3BVfD2zLVzwxqr1-jWTSyJCQz-XOWQOjBdJePp-xQ1PRfqdFQuKnNCWhEQZ11RfY-NNhjf_OcMirWtL-X92YOUwWU_5k4RsSUp5PJwcGg7Lmv_H1jYb3pi91gwb2LH9Tpf0qX-xSKIqRicM2r5vNtzfW5TkxKGl0GMEBy7dTwo6kffKhDZBBQ74", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113073399677704443395\">Hayato Onishi</a>"] },
            { photoReference: "AWCwydhjqsjt7419GGgcurBLTI2QeWquiLxbBrNgFyFzSHvl4knKEsmwZZvwPYGR5W3M39_t9xerKuMan6qEunBrDsnIi8gsuG9fC0sC7lNj_KZrtddef9M_WE2cacUIUa6AVoR5dzUxXerktifR1akG9PwZ-U5nKJ1kbz_Ke3vdvCCbkGmgaoULK48cYy12VLO17VxdP7XFjKXCfAq2Egee4h26zBHIB739O_HZuuCfHlNkmOdcELiY42ark8JS1gC96p0zMS2meOMBesQUJFjokfqnkKAD24F4qtvk6gnjLBkZ_4KVotIzrLlgEBbvZhzF1nG99LeMOzl8QwqmXXPPiaAXdiopUoSW6fo4QxpzJ9dOI3d4D0F2pvAFgSTk6-TPO0pNR4SN8gPnW0DeSo2dMxySTyN3u4vFJ32N3W90bRCGPDPE5aZRcn7TkrMqP21C", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109311806605537738261\">Jenny Lim</a>"] },
            { photoReference: "AWCwydjScglNrH2iHIhqhAWzbD4XwTCBQ7mSNQDDYKxrWuLgS-fn12yqEUluQfXt0SSJVky69iYj8KGrE6ueUzQUqwfMDyxYDr6HoF9XPvjHW3hI8dUn7jKkOpeHaawp9SBbntiwve_kz4nvEbJH4_wb5BSC7Z4_yvXKKhaBOzOkmyc7yJGfFY-Kk9oBfRFofOSae3JfPfbUoca_4EQn3Y0kCBq-OKNXPunkp4HO0lHq0dXQ0avxnTUUY2jU4e-tAjJQ2zj900TUaQ4ViqB6I7UzeGefaCX7DnTHJCh0GJmm0J1-jwZ4Xk1YTh65smr8wLuP-xkWKah6nCE_mjhJsSZ652uFxcW-qe6KMHvOwZNGrphzeKBUEEzCUWvEuHyg1U3WNH5y7eUupyZYMN0A2bhQWiVfRfX2ekIK_bvftQ17CZRW_gvtM1oDaM9ItBU9Bw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102462339510673063294\">Stewart Allan</a>"] },
            { photoReference: "AWCwydgZPj7-BRv0yilT4pBFej1ivk23VrEzKl8EspWZNWtzmtustEI7JheUHBaG5zX3P9uqnx57j-jC_hyR9UEKR-5ftasXA0jERR8fgKuCvqCD1iSBj6eCxYs5WisKtd4Wthx61aL11mG46u-vNyHXpc1h_gS47Z9Oe213TAQ0tKxfMvSPEcvM0Rpu5L9KrblFYLEecntt0ZzpvAa2B4UqvrrxwB0HNndqwsSOygbutM8pirlt71DeZnVHuaRDbnLprnC-xpULgv0JSuzY79qk_uCHa8aRgB67LN9l6p5GvWJHHI05bw2L8CHeCW1g19VqORW5fjMFl5bKHaJ2ho4ebe6ONNJ3kBMCbOOIRvlVlUyrYwLcA8s2r3ZQLwjY5UURlL6E2AXGN0icUnCFge-KWDffvTAV5oIo6aNoZ496OU_US1dySceC5if6cCaYn2wR", width: 3023, height: 3023, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102456625610588903411\">Alvin</a>"] }
        ],
        summary: "야키토리 이치마츠 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["닭꼬치 코스", "평점 4.4", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "닭꼬치 코스", items: [{ name: "대표 메뉴", price: "¥6,000~12,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오후 4:00~6:00, 오후 6:30~8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1087722571695552376", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%BC%ED%82%A4%ED%86%A0%EB%A6%AC+%EC%9D%B4%EC%B9%98%EB%A7%88%EC%B8%A0+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "야키토리 마쓰리": {
        photos: ["/images/osaka/info/restaurants/yakitori-matsuri-osaka.jpg"],
        placeId: "ChIJ4e4Ob-fnAGARVFF70auERnY",
        placePhotos: [
            { photoReference: "AWCwydjVSR-csMrORYNH6CaRQXaH1dufWJjOIrgf4Ma4_4m8wveRv0tylljRFHdooGmpqNp-oBJBYIagjJrzJdo41yx9-QdbrLTf4p4QuLyPEeHr5yCi2hi27OPKSP1gUF8dcXfuLyGT0n3189ix53eFF1psD77N9BbVIVlBkAmFJo_2hgv_iyOps1fq5x_pStrKBB6ofNGc1lcUEI_MR_tz7_IwM7xjusytBCMJHIo9FTK2gV2OBOClSOlEjZ9HiKLEpO0qd5O_0jAkwqxD77Df1lim5Q5A-FFJFZEAZ-KyMKUt8wqesxYdJn3_mOr4h8OkojKze2_2qtqQLTdv-mIKWr5USnBLcxjD6keU5ailP9e81Iyq3pxPbly2WVn7u8tQUz3HTo99oUH5LmD1XrYam1AkN1zQd7xAFn3VkSGOXQmKLA", width: 1616, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104043919461203694907\">大坂智也</a>"] },
            { photoReference: "AWCwydhtMDVlgDdnXq9vX8sOkQucDVHlf7GyQdFo5wq07eg7M1Mc2e4233k5mBTdOocN7-SuquT21eVdKbog7tb0MBypAwAlxYtUshrP9xpTrj8MGOaHGOqPiOGrOwLn63p_S2KeIKdXROIX4wEx6CywoACX4CiTfg_oQOjV2v06FXG3joBFrtb7BCiTS4g6t5h_KazpbRVRNP_oPk2pxd9ijBSz9rR5mnCMENBtc-N-Xv4z1ASvDiF1hBVxa50cC0q2JQFKc39TgICwMSijH2-kASvn1k7EQvmg_Bd13TsBxzdhFo_nVxIuy3GHTXfzfadguYRmPZL5FoyB0OOpBgIhySOKUxpa-x1ylO8_ngCMNGzxfpwlLHmlfsNLO3FZbd-J_DnY9QwqWbnZSP3UUqMY8MZ551ODswbsr2mATaKBqzZ05s3N5URnFQwSwaUJWbP_", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102630555044512374465\">やきとり松里</a>"] },
            { photoReference: "AWCwydjpFShdd4KFn3QJ45zwCsb39G_6dtqKFtB_AenkI4d5OHlOmORlupkz0qhWtn8sazFmuaqLoyg1T1FC12y9pa-5oLks0aTmMcY6PYfO4IEQGVe3UOGWFbi8n6UXP73489BKXYlA0c4b8LjmHbpdKc0IAZVGZETYqbFihpBnRU8W5L-f5OYym6fpT_EN4ODCvKlPotJTGix0OUH8CTFxB1BagOqOUR9Q83OMZm2Vmt2UciKkmN23kGp6gCRFu20GLQL5WB12hYLeviQ1wthIU2WkOhuyx7yq8vigJgrjbjbl8BOj-fhzkJZRexvYOsurGt_q7_9jnXs9AUnVk2KzOC7lfFJ_8G3PYPfWIBF8R8C-YRW7bU4GCqu1OgTp9w2cU6BWXC53v8PdGMf19a5jZfQZXfAT1LjybMJVvZwsLxyZx4eaulcEWdrDPJkNlnxx", width: 1440, height: 1268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102630555044512374465\">やきとり松里</a>"] },
            { photoReference: "AWCwydhdzfm7Ilfomr5M9XwVcON5ZIbI9q6YsrbDuU5C-YIvVG46iZdw1l9kYvZxHBPIOOGhr8x7iA28oDyGnJ8DF-FyeoLYNr54UbJQmdsDlU5bQF5xyjkfWLhQeWTg_OOMaS2OjYs7G2vaeVAADb-xJeUT-I-OetV_s2IQyYqVfyta7_GkYOhJCuDWlJNMDJE38Q1OrCuq0gB6S17dJg5lcE8Xcu4c4vg9rNt09R1yJKqy-lryXykIswwiCRksDpbBBy7LpzfznjYOhpZ8VNnO4mMvX5I-ORU4TYkWulafyiL4xt0T-E0c2H0KQfWfC1OF9l7EbubSPU7J6TZfRyReVm1YPMmAyvk-UmtGYOlWBPFHYF6reeaG-e0ypTOfM1zfyv6CLOSPZTxI2sZRVAblptWmpDq50piwn24qdg6-cY99ivo9LhbqugbhFvb8hw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106942454447560026745\">Jasper Rocket</a>"] },
            { photoReference: "AWCwydhXxHxVYO31de8s_96ygE_GyUAQ_x5O0DbesKHERMhqHPFHGJyy3hxFcOyUzppbZLUaz9lOJG7r7LOYTYOpKR9w1HuBdncHyukezyzupVeliTOJcR3UTBADXXAW9r25pYjdxOBQw9nI8MQIcdMLjcEewP3mEEFilJZ_faZzusjvLjhobckTkJMl69kK0ZnZnLOWLube4NhZKTJRUT9QHq7msP0YZeghjPRSLkjx0v9GrirnK7RjjpGhZlCwX9Zfce7xNAq8FuWqCrrSVZE8mufioZ1-uIzAkwxE6dYPbCUNVsz7Ybx0DNoinkJOHrZo7GzpmWVoJqp6B-DHPA6QvQ7HbNqb9O8A_TuanFzHwoQ1LAUWMub6WZih-fU-2tupcsbrzJWVg49R81gf8xmLVbbYnSic9DunkK3-jUddoQbF4Q", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106860066860878754288\">Pearline Lam</a>"] }
        ],
        summary: "육즙 가득한 닭꼬치를 맛볼 수 있는 도지마의 로컬 맛집",
        updatedAt: "2026-07-13",
        highlights: ["불향 가득한 다양한 닭꼬치 메뉴", "현지 분위기 물씬 풍기는 노포 감성"],
        tips: ["저녁 피크 타임에는 웨이팅이 있을 수 있으니 서두르세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "닭꼬치", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 6:00~10:30; 화요일: 오후 6:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tabelog.com/osaka/A2701/A270101/27119656/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8522645218334036308", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%BC%ED%82%A4%ED%86%A0%EB%A6%AC+%EB%A7%88%EC%93%B0%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "브루클린 로스팅 컴퍼니 기타하마": {
        photos: ["/images/osaka/info/restaurants/brooklyn-roasting-company-kitahama-osaka.jpg"],
        placeId: "ChIJOztrDOfmAGARGp57ZmSWnys",
        placePhotos: [
            { photoReference: "AWCwydg5gbtkqRNZu8akvsXHanvPozblnvr4ahdHvAmSII4nXXxgjlDJcTXePig9Fyw4ML8JUJGITCvmiERpedMnpY8q_4Rt-QgrXAn1up8hh0qra4y312C3g5KUqTjyohpaEIhgZPiCQN4k6nGc3foUNylO4-qHJ8b7oSd13SkHRRLOVxExQLPKZzMQnDU7J-p2svRfZacJnYkMWva4BvXA4SzhYb1BITD2C1cQHLgvcvreVGB80KcaevByXle0TRbjvm-YzzFmQEsgn36QOgvrrZKOHI68bgOwqmzGsGhxIuCvDhzMNK1UWX0gLUOVkDR1KIsgMxhG96nRoeQcEf9IIuALIrh4GpO1VUsbQq3BVecii0xElI8Vzj2mX33TE4NJq658P5-oaZs4L5cH8zsrEgO--eINiW09_mJ3MWjvyOpPDTEn", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103848841080247924106\">Brooklyn Roasting Company Kitahama</a>"] },
            { photoReference: "AWCwydg3-sDDkH7awJAoxVDEcqldkef4GpVakbbNB7GkwjbkKNoKvj2th5MZEWkCqtCvPRQfu7ENXw6XZSxrDZ1PbSokOR7ZZd09e24qFIHHXYzU0G_YIy80ICw9btV2TPsEKBtVB573aquYsto73Mu0FARO-1ZsC6aMINikBC_xoI4sEtpDOsJmjKkv89Ihj4r8b_dNEFqRvnR1FKH7elk03QljO34wt25c3QlQkN1jZhHj1whiAOV6ANL4BH7oZIGGqGUK8iJoUkgimd7FP1eSLZHXBmZKBh_R4CGg9voNwABdaHErdy7ZQE-liXguOwYLa8_6Daw2tCB9gK8F1XkNPwHNcyCDAF-G9Na6EHF6NTH6SEpaNr5qhzSrS_fiiskCf3ivSkUYy8SMEReGcGiXgu4gx5I68R4HKt0wR70HNn0g6666", width: 1280, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103848841080247924106\">Brooklyn Roasting Company Kitahama</a>"] },
            { photoReference: "AWCwydj-tk3UrdJgHwCNcJMaEreJ7qvRSUCDz3q8BEF-rXid6oG1tf0nihyYk_AUf_lHZzkonMZ1cQWHMBScq9h8gHSx9zq_hDYayvLJXCYdy7634ZG8XuZcex0d9FpqZsfPqy7Hs_s_yuEaa0NrfGwBNAE1-SjuNpi94vUHYorlhuCPyNzVoRSxPk38xivukZVQZDDQgLcB63VC_sGJSdcQkfYM6ThgsJDO5jvIkld8HVaFCLMg1Qa5pEZHMYtKVP-X091_X3Ml9V2OZdq4EKLTdoNX9Q9x2VEystNtS-CgjnkZuq_evSbnGnxupafiBY4ItWpg_cbW3UINWaONol2N1OAn5RkpE8lJ--V3QRaARG-rYHSglQVlRnPW9Om-dIpM8kh38jQ2ZDUwiyPLuNOKRGrPTYVK26uVYrH07VNbFJHxOx3YEvKyhjCND2ACo8C-", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103863475771381101953\">Seungho Choi (Hoya)</a>"] },
            { photoReference: "AWCwydgnQAuaahLMlL3SLwpd8rm-6BMkvc-FhSJCWl0oVPHzjaf7t7-KzR4uAyCZfuz_ucEJ8e_afLctsGWWwwOWBAc-bB4cLkSltXeiZErqzDdMZH1Geccg3Akuns73ZDVersaiCTqiVCbm6ksIsR_--2Rn6MenDZt_6vIzTvG7pckf50ZfYQHLb9T0xvsONCqi2CITAKCj-Osj5mxuf9wUgyR1MgTOdisJwCxUj67dC3FQbPxgub2FUYh_h_cJHJHF4MZ69rfum-RyOhh3sBH4l-o2Rg6kCJ3SLvW_ludvM5TigH5i9tuaK2stSakTlH4EY84aZhQ4OrP2rb1mWG9fobdeQl4ED5c6pgz2eBAFP2S8Yw7lsB5_Qy4fk5qwgO7oQGzexyFMEbZz3LkhTWUrLXa6n0p3bP6EbnK1ag-jPbA358_kp-CCTxrdjCpoRRdi", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117424642746221644408\">헐미키</a>"] },
            { photoReference: "AWCwydgsPufilC_z_IuCOVJvhPyPNgwNEvdEvtignxbnxg5UQlbm0KwtMwxzCzzHBwb-UXm_vjxjKSbcpbYjZI0ntaWjj29eSJZkM35T2e0s2--REZP3TmD_jy2GNmagkIkuvh5FcwAeGayw2KG9DjCic9n2aUjx7zhKD0ZzD09eCDpsrD8B33Pu8tiv8KDckTDe9MTs2Ci7rSLDRDjYv1rH8bycFYPEbjs2eM5SbXQa3qCePnyI6fvl6346aXQTARcfMhG-WUWHULYq0AMsEgVPzxn1_BhVM0oCDDa3gkB9rmEQL4mCaMD4e43xpJem2eXGS_xVAQWs_Fni-lBn21MlJPQQ25IPAcUZOoXdf0PIUko3ikAYh51cBvqcSHM4GwAE3-kidy4A0YTor_h-uac0VhUZI1KSDbZrdof2cZHMCCzmdDKFJQ1qUjg-bohsAg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112933970217227025285\">Tetu Tuji</a>"] }
        ],
        summary: "기타하마 강변 뷰와 함께 즐기는 스페셜티 커피",
        updatedAt: "2026-07-13",
        highlights: ["탁 트인 테라스 좌석", "깊은 풍미의 스페셜티 원두"],
        tips: ["날씨 좋은 날엔 테라스 자리를 선점하는 것을 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스페셜티 커피", items: [{ name: "대표 메뉴", price: "¥800~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://brooklynroasting.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3143396422888168986", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%8C%EB%A3%A8%ED%81%B4%EB%A6%B0+%EB%A1%9C%EC%8A%A4%ED%8C%85+%EC%BB%B4%ED%8D%BC%EB%8B%88+%EA%B8%B0%ED%83%80%ED%95%98%EB%A7%88+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리로 커피 로스터스": {
        photos: ["/images/osaka/info/restaurants/lilo-coffee-roasters-osaka.jpg"],
        placeId: "ChIJ1T9unxrnAGARhtQGwQaaF-I",
        placePhotos: [
            { photoReference: "AWCwydgFESaPN9aIlIutPwdPB1OkdXh2IAkTw9Sqr4fi58uTUbZk-2L8uJqq7iUWmxuRMC3DRtIFJzzULQZe2MEYIlatnBCk_S_fsCqfXcnjvEpaWdQIVlkqQQZLQT34UjvPPwYArwJjY59Jqek9nw-ZW5aFyCcv5pnCQpIwW1UeqGksuLVmEgQqPdznC_4FpfdyI18T7pGJJMLOxGH_jqSppflPHmxyzsU7gFJuAphqNAdLl5hLa6UW6j0Xph2pDzipEnO4RXeY7jLjQJ1JoqEwX-961s9oID6RxNmNC8VrRWsV3ZBXP9wLwkkbPuouZl_oZLXeMCJu232hn3qKNu-V0ielzRfilarTLdbQjRnMrfDdSdvQaIAJukRo0nywng5LYrlDm8V2vK4pgOAwDEXWjTsMilLt7LuUxGB1TN1l3f97-Jkt71AgjF-_MHk0dSxA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116849186694885612890\">LiLo Coffee Roasters</a>"] },
            { photoReference: "AWCwydh-5tDjauk4YA5BTx4MmJa7gtzjJ-n2Zqy_qzksr39j4ZbEBVQNpBc1CZC_QU0cEJiba5KoFT7CZgmgqBug2cVcU2cqZG8MrW2Fd9bW58CrcTvLsCkePyaviOlQJa_ssBJg341rCVIeJGahWa-HNcVKqc3PK_EjziCBLaoGVpGbyE3Z7nk5k5-TGWJjWnQARfVGIqgy29L33T6EpuUEDK302iRqNatWLTYqH5R643WjL5PpyCB-CexKguwdGbQVed-uwSPbwXig9JUD9vBD7J2204DY7eDD0ZjksCzcRbtx1LLXzhdpPDGqQxsoUrYAZbKzejuBNYc772n5ceaKVBA6OWYp0LRg-qi8IF8goDUwrXiOrubUDaVdmncJOtfyd44rWHQH_ubG5qnSw4WRDFOPIUhDH1Ks2JGW2LK2nNjMwrf2hyL4TI40WkZuDmR_", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104184253179666108591\">Simon Wang (大龙猫在大阪)</a>"] },
            { photoReference: "AWCwydiJ_SX1zEjZlm_e_-1eF1d7rIUifE0ARfNf1QMqBqgBkys841TcRzPwi6dOKIFGFl_ol2SksHBQgc7O11U2tKw-_f-ImdYYQCMnctn1Gi-A-tnMDhS4WXhTnwW_RXM0DuJxlsDQEf-gWBier-lbQc9eZqbXxHid_VfCOfOPg5Kcu9ujIfX5VMWmDjl5V4OumLJgNWlp2iiaqT2YkIJbR7HOZDbqGWMzod5iwzdPk5IyBMxfczrUpcczR8_2S0roHS89rnqvwWeI6w2k6uwUBrm5c4ACwmOwmTpJLKV5sudiwC_UUnmuHZL8JS91aEgzl2eH57uYjWFdhw5hb0G1bwZCNf0OndclPOtyulKQSg8p7jfa-f_gzOcWdT04zprTkBfN4S7osgqKVamJyMTY2SfJiUz5xx17x3TdnYz4zrXlYWQH", width: 2048, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116849186694885612890\">LiLo Coffee Roasters</a>"] },
            { photoReference: "AWCwydjwwRVKnEN1McfYkPgbMfI3rI23PVugmuNSo_7F6KQLQGhWzYJ34gZ_I3mKbaUGIvR9EVJbib5qiLQVY6hA1RaTD3ly-j1kWHW-oI9dsAla1vYzmyiI4IWiji_l3NUTL37A9g3M7X3hqa8DzJAoj0z7pBBWZ5WJlMEtDkYIai8VgjjfwWUBDlLpuhWVpp0Kz1aWYpRu8_l-bqeyg5i94tOE8XaoGeMlRrsFs-UOvXp1sKgO62ijLV90IVwL1V2fD0mfa0_w6enZNWW1ouR4cHaOjHJH4JTFOMT15s2zmFkUdNB0Tkfq6WzFTeLKM5IbxCtQBwTPNtNdU4VciDxKKFm2RpKun2p-a0jPmMwpdRDCKG8dQnnTXsBn9_RQUm3AoPczINBuOlKxULtWG7XqPK8kaoLduIjzoyDtyHNFvpm7iVeLIfbpoNUeZI5YaQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113105873250363101218\">なっちゃん</a>"] },
            { photoReference: "AWCwydgsALGKcHbBN_y4S1IZW77DPDDEfDnT2vXIN3NZ5Gx4CNvYzw15kSZ2R9Rsb_Utzgc1WUbfsD8aWyKNip6FKcVtsx0NMAxHnPjg9HL3YW2V4oYwJAfw3Rpeoh5rF3aJ-vdgIy6Zn2auu5qcGMjd29eo84XK-WFVvs8aPHl1UbEA2rP2nmjqa0Y8pK-xHFB12Ewh9Z24V8V8b948i6iQXUK0mquwQTs24E4Ly5d8eyU_XnldoXLpMd_AsU0S9lcMWB0YvCcg1PLm7KMPZf4ho91GGxHDAuRxqomyh0FMuVX_U5MjLU_ghQA0WkoZbjIxLxJAffxcbpZTZQxG7T4YVYZStILW7X8bkZO1ROaYJ259dl5iR-PvECA0CjlIgEcECH2wx3g1BAyleUHh8ZhTkcQQK3sNL6ZOO7Qo-aQGZt8iehcEQGk81XRCUPr6wc6m", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104184253179666108591\">Simon Wang (大龙猫在大阪)</a>"] }
        ],
        summary: "커피 마니아라면 꼭 들러야 할 신사이바시 로스터리 카페",
        updatedAt: "2026-07-13",
        highlights: ["직접 로스팅한 신선하고 깊은 맛의 커피", "힙하고 감각적인 공간 분위기"],
        tips: ["매장에서 판매하는 원두를 기념품으로 구매하기 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스페셜티 커피", items: [{ name: "대표 메뉴", price: "¥700~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://coffee.liloinveve.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16291659530834990214", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EB%A1%9C+%EC%BB%A4%ED%94%BC+%EB%A1%9C%EC%8A%A4%ED%84%B0%EC%8A%A4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
