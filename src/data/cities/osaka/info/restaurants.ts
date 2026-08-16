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
    "코기 소울 우메다 오하쓰텐진점": {
        photos: [],
        placeId: "ChIJNeMmuULnAGAR_MEbJjhejFM",
        placePhotos: [
            { photoReference: "AWCwydhL6GbO78XHHouf_RP4PbZHm7WbgEAbpl2YmZp61y_I8AfAY7ha3AxlHNDwgWjqYyAzOxJBk-LbVJlhZ0scaoCr6-eDfarT72vxXH0CulrOek21ExS6U2N8mmUrGAB14_uiDP9y_Gy9oU_ywsumiMKMxFUXZZf_zSkZ1NGi_DfDR8Yf3HVRtr896vzXhJi5MvOCQIi3zyu2LBPd2v6lKAYF7s3gGdLl9ui1uyQrjQHCCvXgqkkYouH7MDi7-5FnDL8gpuYaLl3fD_7Ach-a7glM4yINyzI-gSFYrj4Q3lr34XnBSAMLCAjJs-M4KFDXTpi0MdPg-6ZYDc3eYgB8rwOU40ceYBf2zpq5r6Hrls9TXVBtZmf63Vmtmnmrn_pAVTaEoBOH9ywfFncdOA0HbWNiEWhQM7oaj1uD9pMj12jFJ1qt", width: 1992, height: 1992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105288293176273601018\">サムギョプサル×韓国料理 コギソウル 梅田お初天神店</a>"] },
            { photoReference: "AWCwydggMFqMDCFrTL_H960W1jP1wgimUImIB6hPfMYpptEttt8FytR5THHxKtJAFiMHYS5lGJXwzsb-8mDVKoR55hE4gwzrq4-K5XrRWT_sBc2ZYzg7CC_abI05tNDpB1Ak4I-6cWFhNCPJQ9UDNKRxWWtE71xhhLerErZElW-v1OIAXEouTl9Er3EfaoD6IcWDlhJVPeoDrQtZWowmYx5QP1iXXpINCczNxdgiKUHK_JzR1cI-H9Is3ZRR6jsnWlWDDQ4MNInucmYBsAITMoPsD_yacENK9sjEWMyu2DN3qQdGLPFLA-RSRCcHdV3oZMcj68JWpZfOT4gy1qDvJrwxkr0QgZjDh3out7JphBxW-te519FqSMi4-kxBk68uKMQrpteBCNM_j7c3sJIsE-SaDJW6NePgqrhIV-jkVhMNfLzMD9ou", width: 2048, height: 1297, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105288293176273601018\">サムギョプサル×韓国料理 コギソウル 梅田お初天神店</a>"] },
            { photoReference: "AWCwydj1G-XknXZHHvH9SpPbC_XAgiJV3wHeTGUidnJ28nTK1GnCjzu4HIrbRD8Lf2lpRY38LeYcMTPXkwIxhd2wI4zBNr2TEonbbN7b9XIAwCt25dhN-rYi80P-w5bkoRoc_1vlFQw7S_Tv_c_LdnUnX7vq3uoL7rAGfVMlsTfjft5AMGi-JiC22jxit2jbdvRJENA4lejoHw1RJ4zoEW5yzoxR-Yq-ij8tW4We6THbBG-YAslQAnabRlVx85G_DVo6RhsIacMvUglm1ReOIZE66885K6kxV9vPUr1uy44xiuQuGRMBfzqUAdOr1YHnUt9RSeIV1iuS35XY3qOnVFMXNSrMkJktLNWkgrUmYTXVyZvcMzzPr63M1c_Gg0Loy3tTydA8MVJelotzz44Rz1tvY-fGSeT_7vXuntS_ccmr4V-fsH95Pfy94Z2EHe8YAg", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102843158825646665314\">クラ</a>"] },
            { photoReference: "AWCwydi90hgC3YbpnUDTX6mh7pYBm9EADXI-JwVDUaLqzW34lAc3wTlRczBJLh8Iss0H2D4i3e3HJ-KICr83SUtsPh-8dZjrgt_ZrBrhRYld92Ox9Cfz2pAv4k21uJwyZ2Yps2k7ETZAsn4EBzgnpRpuDtMuT5RPF9DuL7TCyHJAYB24Qo1EVZW33mmYHmRxYSw_LvXRyWg14os2-FzdAFj4NsR-2z1GZhypc-r0q1LaFapRpAbsa2ikLJP0C1Z3iSt63i9eNCswwiIsb2P46fhpYGj6c6ceyiRS-50XwT3rZJM6hhsY_eBngmXOhWVf-P7dBDXox4Ovw6DyBve18167yFlHKBIr4lHWDNQTHvNrNe9vrtE2LwCfAmFRHhII8Z77VLsiUPWXGLjhgKLIzD11R0jHXRSL_fup56gUuYY1chjLYS1-pgJ9PrOsdBTKzaul", width: 3060, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106809171274062463859\">なおこ</a>"] },
            { photoReference: "AWCwydgR61xx3A8h7-JnnP5UH9cQyr0bdGtewbum3FzT4jsSZYWs3fG3DMhrYcr0fqt2cUDemqs_E41yJtTM62Kn2TXh7Q7fZHaslbxdBlz4hY6AIoEkmzBfpFGml2aCTYvMa-bS93lDkJnnZK_dJEa5h3PZJIWNF3WqsA_V8RTQZxSPrXEWFGxRwRd5s8B3BM5GdVVcP4wRk1lWtDg0_gf_Lu8EajL3bDxIWGRXT3xcsvrHJYNGcomNT2OuxncFdh8WDoGkTfVa8Shzx-VWU0r1cSTpObn7tx2WPGHKb0bf6P0yshnPV5MhxLzmew6wFZlI1UBXm5yOUrIIozsMepqXvyh7v3rOdSYt40SE8_b22NLFjWl02Pmzh59LXmRWzEumxfum7LbMycTA0G70iGuFiZGfcARls5JQgUuejXQHhH_qCKvuKw_8gke_GvGevtHL", width: 4102, height: 4102, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102843158825646665314\">クラ</a>"] }
        ],
        summary: "품질 좋은 삼겹살과 친절한 서비스를 제공하는 인기 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["뷔페임에도 불구하고 뛰어난 고기 품질", "친절하고 정중한 스태프의 서비스"],
        tips: ["메뉴 선택이 고민될 때 스태프에게 추천을 요청해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "삼겹살 뷔페", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://kogiseoul.owst.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6020290397138043388", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Kogi+Soul+Umeda+Ohatsu+Tenjin+Branch+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오코게 오하쓰텐진점": {
        photos: [],
        placeId: "ChIJcW93jnvnAGARS_4q2A3qxBA",
        placePhotos: [
            { photoReference: "AWCwydh2vn5LQhw_iRIR_ffCKb_ga_UzbzRzeZBt7OUV5MfuPaqJw75DmyImkqota5LCczexKuOAq8RQKKLFg-PCnk20oG4hYITq9oiuwbnnUEb3TbT4s_Xtxo1Hngmy_FbRJMDbxKrroUKb6PfWAqhFhXhlM4fHiWVV35A8xUUYRkJvzqwNxBnXOtZsd6CEocSxtlYEut3qIp-XGBCtHMzVLcylgo4qUTmNG2iO8UHt7AYuUe8y0jpLsPj3BJpTcWT6viYI14wEHh6OfVeA0N8UvyLHwsbjhC-HmBolIAMOm5cGMRDnVSqDh8aorY4TG7EoYuLnFWq1EvvIF-qoosktg_qoLCzwICb8fbFlkQ8XZtprsvpiFMgIVx2mBF1UgrzC7hMQFTTUAm50h-lhfht-ZrgnOeOteZwr-hdIxc4-mFU3Kw", width: 1536, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108289214883091932168\">OKOGEお初天神店</a>"] },
            { photoReference: "AWCwydgaM5tvc2OFOtgCtlF_1lK1oDvl0hUsCfH0PQlldr9vMtc2giayWlJ42EgRdJyiWjQKoDmOhC26-IaZoXa1AR_UovUmz9Ck1l4V1H8j-4a6PkiwV7cHILx8HwmqL9HHU2wxDImDUY06wEfJHPDuC36LZayTfhlYGbGbZjnEmT7Tz-9CniwLWzDnC4fIAu5JAH0mm6q9Flg2486Tt94ap0nCGgg9l78o937_zEF0awURKRiRE4HgHh_D-Yd27Boqm1cGQdcgUQYd6iREVbOKj6bkyN3ygS4UlSOpNZPETZ0VK9-X5W_nqtgfr0gFNcKN0hb6tLMDGL1WjaErN37gFhHoZjm0fMCpeTRpJwdsAgTNom3qayZQSp7_2V2pv3l8G8sOUDLAQDLGxOiw8wpSpYehIW81qaMS49D_qGxBMPwVl8pm", width: 3905, height: 2198, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108289214883091932168\">OKOGEお初天神店</a>"] },
            { photoReference: "AWCwydhoZx2Ww8sIFNV_HGdptf6_uesjM2Ge1NAYYKZLWduV9D1KbPRdTR-8URGXTWpmmMM-6hLaw240S3U8AbVoIdYjHYCLUMLc-94W2unM6jlZYQhCJhJG-Oi37-VQRjbpdM3X9Pm42MisyZfonAd6w0qHTJ1NclDkfXwpshNWAfrPFuAAcCzd1SBqHiY9abQElXScuX3pikykAQQGGf1kLEVlCgp594zHJsCG3j8BxIW0h5VBMVYB8uKKeKeQGm0P27Z8nnDu85xOMvYn7c3zZsOKtMXQaTSAfzSxEHh3ZDQJ-sMnx7j_1g_BCw_fscn2qCuJtmdBOmRMmrwMZGjjfJHwXms_YS88g9-P-4FgTJVz-5LPieNfukcKKrmcTZLNo0Qy5kJ3y7XiJeNF7dbymmKsMEt8I-sMdfUZv-mG8n50-Y7FXLJRYY3-cGt3XuAB", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100917979616928398900\">ちさ</a>"] },
            { photoReference: "AWCwydgK6yedYLvRJF5SHdMVhdIxue88FPWANJ2ef0fBOGSM54-TwBNrJo_pQXs6MI1pF25ExYM_cYSOt7uzh7pGvne2u7NI8kIm5BBC7kl-91_UdheEbtlCNnzZzoZSFr_Ou9C1_3WqpTroGuA80WjCP3XWusJi94Ur_VmhEFfkZC0wdE7XBi1NprqXyGLHyOjOy6Rd-OjiZRtXH4xJdtJhFRTuZqzVUcdg0alX9jg59wC0sZCd2HeQuo1gXKVDJuN-qDHvB6f7Kw31wRyld1vpqge5K02qF-0skHtvu93a0impR1BzY1jl7ImX3LC2SXy-RO6F1E-AVoOw8wr8DuBZDpBG-kBBeOWuPFdrBIIGp_o2pQecgpGMxsl2Ur06bl8cLdZT_qBHciuhvWZKSZYT7zXjk3RasDVmTvSXzddWXPq-nRH5k6fPWooy8Lv4jCCM", width: 1400, height: 1050, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107362690897870733910\">김예진</a>"] },
            { photoReference: "AWCwydh7XbwCNznVPmxEdtpre4Orjwv4TvGcp6nOTFGmpLvTvxa6MNDCov03ujwU9cpi9Cyg1jkaikQqRGAge5yQhcBVIA5vNmpIQfpc0QxzY7DHcvQp_h_0cnOzinrPkMfvUQvsSw45s2Eu7iL_47I-2W5gDhglMDeKtyzzwzsLE5FIHK6oChwZOjh0DlnjDnj0Ox22R82dcXoN2IwrpA8xgsCSV98LpUXdAikEGSJLp685jJoCE0vKIlT-qblm5iuSuD-oOCFWpd6xHDKBcp1tdC4DJs53xP906Vi9uMQV3cGGmvLbn0zeZM-7Ta24hwLM1NZ8LieNvqaMHKUVVHW0FNtzaEgly-z95izSYVTrQLym_EnPu3181sKyeHHPjSqxtCsFJTLtKhEpfilklOBVcu9DBVCykm8IuQzaUCkVySCz9Ww", width: 1283, height: 1277, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108289214883091932168\">OKOGEお初天神店</a>"] }
        ],
        summary: "6,000개 이상의 리뷰가 보증하는 검증된 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["친절한 서비스", "검증된 맛"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 5:00~11:00; 화요일: 오후 12:00~3:00, 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://okogeohatutenjinumeda.owst.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1208347945224306251", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=OKOGE+Ohatsutenjin-ten+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "단미테라스 삼겹살 런치": {
        photos: [],
        placeId: "ChIJQ4tItWLnAGARZDlMTI1I-OQ",
        placePhotos: [
            { photoReference: "AWCwydh23NJgj8xNcvq0mQ8ao6pCRUO7OnsDVUKQoC9EHmq4WIhId6CafoF1GRslU1-yFToaDfwrC7KmM4nFm0lVHHfjwYza9HUak6lSu1d3k_bpSOLVJ5jpqCoGc5VygHQBlcw8JyI-aTFtFv4ZpbaNfxAnsbpVGRAsfbUntBpd-31T9dII2_aeMfGARluS5rR6Fb2CW3-wOddFm6UgnJ2bOET4odfu0N-x39KLAUokW93VCIuLMbFJfDzE-nsEIMTlTGDF9Q7jhtb1QGF7wi1vY2hqVNcz9uvj-2OwndG3mQ4t2c0goQb8HvwNTBjeLhviBf7SziYiH3Gm8DNygftuwKFlIuSG_TB7ZrinmvH3N1i-h-rraPjlX4pY4LFjnFu8mDtw0lntfZ70ST6KDaoQ4WNtWYcKvq-bQqe66eeQQFE9b4ifCZhRSZ4gXCbDRg", width: 854, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106748800722405176296\">韓国ダイニング 心斎橋ダンミテラス</a>"] },
            { photoReference: "AWCwydjrXgU3QvVYxAuz5KRYhXVHyJDbZVOonQUyo_cG4oLrifZkjwveZgelqjhXX14kujm0KKp5CVGq1yFUo9NN0jPqAXEpGU8GpPed3ta1pVunBoRc16erEJQGI2vBXSYCK972aiFBV3f8TXjnvGWd2DT50LAkGWCUvN9DjUkJRMJLjlf1kEnPcESZfhl2t9HObFWFW6Zja3X52SY64z2o0HXxSkkG6CiNRzPg0ui1-BO1-KWx6l3ap0NJlX1Km6puwUGZVJPWl7vrVmaerqtUCT-DXGVemlY9PdrXpR32tUnf3ahbEgaJIvnHi83Lz0mmzOMfiY1wFQ3BVok1_uyLK-jn6bk75I5A6--hR3Xw77NCOQiIH6gmxwb9joD1nUNLeq0qrzEZF_iTWfpuSvrYzIgq_hGnYOvHXZsmdtrCqrhuqurV3BhD6H1p67QCBj8C", width: 1280, height: 853, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106748800722405176296\">韓国ダイニング 心斎橋ダンミテラス</a>"] },
            { photoReference: "AWCwydjg-BdkWBZH7qUbm7omLcPJRGFjeTB6tKEbTCaPinullJTOOdgBClOUiuB8bXMekn8W7_iA_wpsrVQLrwBgB9JSXmr5V1PkxUfNpVpd1W1b48MYc2TIlNtNmMdd4BkHcjRTN9Z3B9zW58FTkFUHgLc3-wwGIKJSIfMCBccW4lewhwVCb_LkL_8iP0S7DsBf8Fhx7iegs2Cq8ukX1huEI_WbQE5RgCrtmeM6cSDu2cKF4EojsI8pZPTBp0fvGWw0nhRY3DiicVtm_QfyOo_HDJ51v6VX_f6MUzUQDUonbgBAWcCr3EP1xAnAn7lp1qQmFTKCOJ_H9myn0JQekSIC75nfNYbIYX5Y32s5ORht6PuzyMYyO5h_vKXBN4rvYxH0gljdRoSVBzSi2AM483c4lblkvp0UO33fQ6bZngy6fz1aRkROpRzpt_uXK62lPQ", width: 2160, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107994249291352528182\">茶碗蒸し</a>"] },
            { photoReference: "AWCwydjX2x4rGqTgOT0kzqBX7SUrK9cQ3q_RBFkyAtAtfhk8QW85DCRe1m_eQelbAGcYMsn0r-zkv36J412Jabab5CaZXa8AHibQmyo2S1gEmNEOVlreZaPyD7UM4fWT40TEPumHx3DkS4JXe_SyDl7WIy94CDkEYM668h5exAuKCMvgD8LZyX0lIsxhuOEVaLexrYBN09bDs-0HVp8AgvRY4u2KTlaFPbc4cOqjilJDl8yDeC1Cu-aZ7KmotWgFbMfB64aLP_kQbdPJJIw0g5tVpHMA8BwablTRaKQsNxGQDj0AYl-QCc5NH_G7WckNX1y087-reRVDG0nHjoDTYhtUOVmIj7VdCUUmiLmhLBzXlodSAdMwjMcEZMTesDUBrw1Yl-VzhXPKphjBHkrnTp4Xw80qZ7_OL1WQjYNiJGhqysc7QYGwd4HD33cYdbWT_2KI", width: 854, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106748800722405176296\">韓国ダイニング 心斎橋ダンミテラス</a>"] },
            { photoReference: "AWCwydgsO2j9nXmJRMrTKElvh6qPdQMHnE_fewx_GaffPJMKpPhBfhnu2M21wJuCjUaijtf6Wl-zjZ6GMmUM5F8uHfjbfDXltYZ6MrKcue_1JbAgN9exSCkJBJepoKQs3fbvI_xhC4AdWPkFyiXoDXhtVj7c_Vm7IotRRNTU4A7WL5vg2eOvNpe2siMmFGThBHfQP7fnB_1k4RL-oHAGAnQc3qVDseI_HIjAii7cDexdSZw0mtiy2ok8YsRJBDYg0md_C0xSSNiOaU47aD_wgO5pI2xWCHyKVJ3fGwVsjU6jM9-DOZ561izykiogIUCeIi0c0OzS6hKUJNAzzpay_oU-dfMfdB2rgPvvGB3-n9r8XUKLeVBIbR7UCmZg8pPseAPcSxxJk_nXGH6YwbxYL1gyvNqGchRdTVA83c7Wpd4EjxiOPZgb9AqJEo4ERmf7VorR", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105765641484646581810\">tamiko suzue</a>"] }
        ],
        summary: "높은 평점을 자랑하는 한국 요리 전문점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["삼겹살 추천", "간장게장 및 간장새우 정식"],
        tips: ["정식 주문 시 부채 요리가 포함될 수 있습니다.", "토요일 낮 시간대에는 예약 없이 방문해도 비교적 수월하게 이용 가능합니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 4:00, 오후 5:00 ~ 오전 12:00; 화요일: 오전 11:30 ~ 오후 4:00, 오후 5:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://kapc102.gorp.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16499017006579464548", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A8%EB%AF%B8%ED%85%8C%EB%9D%BC%EC%8A%A4+%EC%82%BC%EA%B2%B9%EC%82%B4+%EB%9F%B0%EC%B9%98+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "치이사나 칸코쿠 아프로 사카신사이바시점": {
        photos: [],
        placeId: "ChIJaec-P1rnAGARRd89VZDIQlc",
        placePhotos: [
            { photoReference: "AWCwydj_mZ7uEENTADHydxCEbrApDwRfKghTGzwD6mnabE_tebYIXZdrwXt9jziFyVuSB6ysQ4APIDkLOysFvFt5HbpaL4R-zwk0xPm9AJwhQViK0c0P_BLsA9fWPtaWxJ9_LWGjDeygINkTIzOuKuOJ6Qdue9UX1AhQSvnV4PQcEtnlm6_NHyVdIzp-HBcbUK7KmufPLWETOpMCh26JuVqUdFFIdwpVOwUroojcSxR7mGmOxSXywiF4x10qcTRNcx5c9vnieciRerNxOSt0ba50d0GPEzGZSZBa2l2QvhZzoa4cUxwkZ_EXnG1oh8a3E5_d_niVqYOsjSGdaw1sSBeHpbIb44bi0G8jlxIdONCeunq99O6anVJAiuu8lmnRDvlQZYR7JNhG5OHZs4WcqOVq8Av3syX1nv6wKD9lDUUAlcVnlHoV", width: 2048, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111149236914276284325\">小さな韓国あぷろ-心斎橋難波店</a>"] },
            { photoReference: "AWCwydgw0Pwqpt-oXdLTtFgSL9crNy_844MmLgVY2mXGMRdnf3X-hYJoWUsm7a_U9LsFZ9vjgxyer2Ht7Zo09xNUs3WdVYdHjFY4NDVQafsaq1ejowBNRAQFxWU_wXx8eJ6l53-OfljspGbYzsKtzyTS0VibStg1Y_oehU4gejkINGcxYJkBxQftGJ15ixz81Q6wm41K6DB-W0BiOUmJ_tt_QGoQLDUFqQKMDExVxs7oyg-jzoQ_Qgw5X0GC1frk_1Z6Eqh-uStZRvKixeqqeWOQbcZIMP5xAFDCRndl6Y76YKaX8WfXcxHTjkG-Oxw94-Dkc2q3HbZkintml1ea9KdaYfv3fMWGsd--juJuCf2EKl9a0W1sQj0j3dazGLVyq6hWMpmV8upon8rPSanegpJ1KqlnlIXP4kfOQ_oXk0XcTrVe1QMV", width: 4176, height: 2784, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111149236914276284325\">小さな韓国あぷろ-心斎橋難波店</a>"] },
            { photoReference: "AWCwydhp1LeKTYn65kAjGqm9Eud9EwiMW_wXXiygnl5X6AteT2HSR-5uZm8vL5-Up3WjkkTnpw8z7l1TXC_K-bco1SpSV4m-ZUGXP3151HyMATIAoKhgLKwbQ27m8yczh4vmfWJZ9TL96jY2aK1wbii3Bv-xX1xHMfU0wDZfw5gNL0OHJYt5ORft5cZYS9PhGKmmI1iP_GFpKFW-SXbCaYMlj7bOHU_AaH8jpP__B-PJzwTMJzVfa0xlUMShCyGv7moeMFC4AsoQBDhWq454HPC8xDxa-qQSivGKHW3fsPCj0tIC4OsPxO_Q-qyHH-O3viVpaerepyI5RbDntNQczisddYCIjxWgW0vvZ4kWjL8znwEookUfhB7dlZpOcYOzlTjukA9F4BnU6YD81q1RvbAT0AVqlJ0cPlMcXTqseZWEr8tx_rWH", width: 2048, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111149236914276284325\">小さな韓国あぷろ-心斎橋難波店</a>"] },
            { photoReference: "AWCwydhH_Cee_v4y6KZeEf6iFIStaOtAeVxU4YRt2Sx79PsxaFBWTlmqxGeMtxJmyoGbHLfxcP-SHRCb42XA3kBHjDEUSjUQAwga_Hh9F7rR3j54A9k5cfDH1vfLmtIA4I-uy27JKM-qm86wqZq4d9RBFkVT5sX8r-ybpBUW-DpNEzbyhVYfYDvTFXcc4o5eBm7XPYF-xeOdK8iGn4HoYZkay_jngv0DfLEPJ7myxcONBKss3H22TmZNZSw8H3IJc3b-oDAmEfp8Y-uZD3Zv69e0fvUd3uwA1J1v36h-qlf7k2UwdV7GZETGU1mx_g_r6q9ZpvxAdvEqhPCLp22pWfi06LWKbYcWMhPMzku3kJ5Q-yUPOcRVS-WxAJKRm5SG_BiygBpJGN1LrK1YD60FWRdFvHul1u4xR6sUpr3_-7C3DbFPCN-Tm8XTeWpssfElPZit", width: 837, height: 778, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102153432822080146309\">ちーさん</a>"] },
            { photoReference: "AWCwydiR1U8AnvHt76NvKir6AaTHKHKKiH6n_dcTgN8A9HT-Z9yWw5HOZvxh-3fXvho0IbsTm4XJJ1JGFNdS4f6ZlUc-Gn564NzfZM85DJz7_ZGa98DnUC8n7tNu5ylfumOrdujGU2HGbm50T8vhZZ5s51PvWgLW2A9nFexsiionTKthk85JV3-j-aNuXpTqSLrQoXM_2tbW4EMViYXclo7DlrYFHunjJhT6ffw96xew7Rhh0e9nu1oOLUAhfc5v3Bt5KZKUJj1yWOmYUuEBopwT22tWz3ZcoexxdJQ6KJ-0gIFHxZ0xJOMArGW5i-vvc6sJiICuraq_9bMs4A3jCSkLi2s4cLKU2mHaEKl0T1DF6E7iEdcl9no376wiAQuRUDaavN96mKTDDUPvga5IJ7udjoIL7l0lk_sYvS-VDKXbscikOBQOPVeTGDFLjNbUJg", width: 4000, height: 2256, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110033985506909011006\">グラハム</a>"] }
        ],
        summary: "훌륭한 맛과 분위기를 갖춘 높은 평점의 한국 식당입니다.",
        updatedAt: "2026-08-16",
        highlights: ["맛있는 음식", "최고의 분위기"],
        tips: ["메뉴마다 맛이 훌륭함"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~11:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://apuro-osaka.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6287808551993597765", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Chiisanakankokuapuroo+-+Sakashinsaibashiten+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "형경": {
        photos: [],
        placeId: "ChIJdXnE8UTnAGARQEHdJyjbtcQ",
        placePhotos: [
            { photoReference: "AWCwydj5vQyGUKBJehhAmZ1IFq9UgTnZeSuyXcqms1rX_xUQ25UKrDReC8dP2gqfZ_ZgHcxEInJLwa057N_gF_L6WTVQfYbhZvtYt8Ot8rBTeJSNZNnxIQbD_Uu4dWOPUsA1PNz7N-_sBBuSo-MinvcucO_G9sjJHJQ-U9IpY__Eu7FJ_7e-IR--2eaCYk5uhNfg_mvRyYLlj_cUOoZ8-NZ7hXFgDzJT0YJKg31T87SHh66QxCLTjOTvog9mZCIVGvJk6KxRwUTt2jtVK7EbhsjsxFA6TZ9wX3fewKhpxyyi2oosEqpRFt0_bOQw56aIfHGfgpaOXjVN29Ry8wcrsDKk1jCf5HoJub9bi4MAsFSrDwYUWBN_vKdn_RHIXYehSPB-1oUabcO8n1IQ6uNatVTvI59ghB76CjcyB5_r4OcvAUfy377m", width: 1109, height: 832, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111720084107500793445\">韓国スタンド Hyeongyeon</a>"] },
            { photoReference: "AWCwydilpB3DD5M3Jk9cHpbns3DjnAcDw-e1FICGvtKCrFTDp7xH-Y2sTX1LyR-PjleMDqM_fdXPJesAkg8E9FnUnB9Y2-flHAeRIa9ZH56sjaaPFZchPXjXlich7-xC7gh_M--tun3OCktfipmYAcS0rnD-Dw6Lc6riqFIAvWoskoBdl7_53v1lub0FSov3gIpoYM-5pkmMYIWWxc7h0XVkvgCSRWFSWydi1zfvp3zs17VDmLJ6BvnFkGn77tUMvJlndE1Ww8qbDIFvmqubqj-VKYgSA1DJGpUFQmy74CJayN1F2evPhIs-XGm99zV_fwPRu2kcH1PS4J8Y4grU9X5PgS9ZfYkMy5Yo37aXzAVYxeQX44x2m12qe1NPzA6QSyzloNOoWlIQDED3q-S95k7TodPR1GJls27QTtJn9EcTF1vM9C0R", width: 765, height: 765, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111720084107500793445\">韓国スタンド Hyeongyeon</a>"] },
            { photoReference: "AWCwydgKa-4_-IZb1aO-4mRNS0G1Tcre0oQqcGn-UrxV9LQewYxiRxD7dBCUDA07vnPpsJTj2mYm1OM628vKkPcIiu01OnWBgQIPSA3jpFAv3PPmvzvwVJXjLFRjN94t-x-WxNDZrx7UoItrS0tJJIKo1X36lE0P4UvFvA5FIRpRRNchfNQGC1XBob9CCaKzCVgl_WvRA_DzryBffTmPRkVBvxgo9Qx5W8FFIe3wczw4DYQ9E8Esf-GjJKFEPaaCMFtA8-G4nGDq0h9-KNuLFlNSFibIHKge_7J7CIW0UyjtN6egyyOPdnAZwiyu9GS-p07RPLbggfydCq-D5fdBzG1SwvoxYvC9rRRvYaFU1WnP6oLZzlcryPVlMB4UQHPjNRaFsomwlj02oyA4KF2esZdiPTYqZHPh2bgsUdnjbRUa6ffxq5A4zqs8BnU-r5xvW7W7", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106593124382492866631\">うめり</a>"] },
            { photoReference: "AWCwydhChzQos7IGJBFBz3rsTzrGQkD1KUfxlwlAY-px9zNFIJAZYgNR59npu1bIwI7bAzUTroW3IHEHwBcdEFg814Hase-XVLwXl2P2aSLZUkj-nKJhYnPS3dqXg20d3hp-joZe6PA2PH7vGda-PGwTpWLjA4dk9aPu_muKS4XywZnBKJm1I3wqXGcZLyX7xxXlLXYA7__OwDoifyqX3QycO7MmhRA5M9xhV3SBKQZM2yDSVzKZY01b1ybDQfYmp4J3yE2HURa5VXzD5-hvGK_oQIJfLInN1tip1R-9KWwNkcg6O292ZzejFW2Uc4tfbekm3h8K0i4fLL8XIl_FYV4py-t5ncvHXEmpumxwfQG_0HwzZTw39w6E-9Ra_aqPPJthsNQbpA-Qm2PIWnEDeobhFcIHuRAc903_JUEmxV2lKueuncjbOoTwB4R8P2_PtQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111463065310432807273\">めー</a>"] },
            { photoReference: "AWCwydhV3uWuwO9tNOklzL7vKluC6rSjeZMONI0qHcfWFzxGk2UNBcC4lSVXYb8meaQqkkytAiR4jRUWkSgqU1wSnmjCFeAgvpz4bhwL_KnxT598bgt7FIXuc3Cn-Bqupv41eJcxk4Lcwa49pHaW3eVeWEikli471XL2qrefd3pY1lSKXLX--E7i5NVjbr12c8prWB-A8aPdQHv4XRXf15jRizOOIQeKXUDRz6HdhYxbdTplcRDObM9SHAG6qNSVT-UKh1hNJJRJIjo7cIRoFg0kTCCjQYpCmZ2WBAql4eewkm3ZBJu2HJ23S6qIxDkotxMvZ70KkyA8bFKcsuBXF0MnDnhu6I5h-1lpfql6-9KolHAvD7Kjq_dlV2ggB2KkKLOPRBLa5Lday11nUMua25HLbkdGE2HTCKxqQb00RIerUiEGFzcj2E0EfshnhjbOPGXf", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114817827503012446904\">26_0385 薗部（Sonobe）</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 검증된 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["빠른 음식 제공 속도", "정성스러운 접객", "뛰어난 음식 맛"],
        tips: ["오감 만족을 위해 다양한 메뉴를 주문해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://yoyaku.tabelog.com/yoyaku/net_booking_form/index?rcd=27135375", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14174476367732490560", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%95%EA%B2%BD+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "삼겹살 코리안 퀴진 밥 우메다": {
        photos: [],
        placeId: "ChIJ97wCngfnAGARISIbdpHXk7M",
        placePhotos: [
            { photoReference: "AWCwydhuF_v-CkrHDNxfOLQmPg5AiI6uX_sLG0AI2mT-i8bizlbEJEab23UenGfFUgSdHXO78N1I5kXpvyThsJIxx6LOTKjN4-h2rAJ-NOYpHAbcR7LGPcbUeBtwzjfX0JBINpyGb4OQuhc1mCcYKeUuS6LIY65HQt9NkhU3sWuObav9oOnQwFNqkvLgNKLaIGIwBxF0ZfwhUjSE5yfCwM743FVeKSlE_bhIp-Lo4bv0ILJtsJWPWr3OA2sAzO1bAJ9KgWQieAIoiCxYnQYNyggL47x65nUtSZq_sWxsY5ZcKKTDuoUeoncmarA7iJKq4jW0w1bQrl5zVvcqRosBiOpqjioHrudkbQuhBld2K4Ga86zxHy7DKyj5vjyFohhiPdtFKw16GPZe0cm2uIdZYnYoPnYGGHrlT374UdzI_DZ3Vl8pT1DQX0PQRDubBhnyQYPq", width: 1536, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105890356686778382108\">サムギョプサル 韓国料理 バブ 梅田店</a>"] },
            { photoReference: "AWCwydgwv4SfaLPAvRxpTzHNHiksvvMgERul0g1TR1sSyG1Od267gAo_Ne_M4vVKYJL-OMEV64kXhF12n0b7sjTHdHOQaxTFooI3oF5vrWnGm70kHhwVhd5--uyHcEoA5FXElyULZ3LB7neOswzXv9WYIj6rwk0J2V9NzaRBIMnr9PK8uzarI3J_KXnULoSyjMvUJyT2I4R94eR-cOSjZktgrZP9hfomq5NC212J_M8xKu4nkLW7Jvb0yD4ljpJK4mjySw_afALMv9kD5v216V71Fs2_px2bbSeRXC3aS_RkFhrwNTyzMG9ojJqTWKTwtriQqOvUJCrIdjqW-A02qj3tMT7hjuWe2LgUYSN8hW6KAubVXqpa-6I0Wy9zulW8Xt3-4vku3XyrvshSF6YoMQ0yv0s2i1FwenB6F0VlcIeZQYJSqQUHpa2iJWZ2A0HXRg", width: 1536, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105890356686778382108\">サムギョプサル 韓国料理 バブ 梅田店</a>"] },
            { photoReference: "AWCwydjQUSDxIuuEcc8NgEzwYynjIaZ1P-gM-lgBbH3_RSfr4rmJ6YIhh7uO21HqiPFv1lW34jkOEyO5RpnWdCuPVMmMl21REyG3X_MTw3p3DvMNDIqgAIbhfYzIvfk70je0GylBPHFu8jn5jtTQiJuTkTmBb8SR9FuhRyZhJulF6s7ljE-HBo0EpDfpAN0brC10b6D6NohmRusiNdpP-Y-kGzVXfxCieqeb6PH6JXHwU_Az67owkYhvd2WCceu-wZGLEL_0NEP3AJBNtyXzXRG5NI3RVqMipEzGK1qHC0wv4MzcHrU5u4qraSEYR_A3ATaXAiij16PqC9lBtgQtad_hBR8xFaq0xt-lG5ZpAUK3klpuYRfSftgvqWE3qrcVrJ4ReKELrsE1Z0J7lOjbmz1UXS4TOx6Ma9-VIV61JBjSU3U1DdQ1", width: 300, height: 300, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105890356686778382108\">サムギョプサル 韓国料理 バブ 梅田店</a>"] },
            { photoReference: "AWCwydiEZv7EkTRfqKbOZEWk92NnMVjZhn0vagIP7ONzbDzpj_mRsX6wXUOK2LXPxohy52kuuIsvg4icdeWpc0l6msJvr9EjHoxtH-g_ofezDIQg0h9YpQ-Nrr3XllO1vqaJxmh5pDsmwziHp14RY9R3ywhV9nG_46AxWwwjeQIkFYo6GALyHgkn5UqxvIqLsfm54PZyPrDvQ3JfncwBXQahefsLn7GGRSrs38fR2t4BcNPvc5fg_oVByD0eEFapMbz1X_yVNkmRBpGXB83wNJ-Oi092w5a5KKcxYY-2FgCItYWtei1_xad9_J6cB_BiG0pI7TOA8xexGEtBEt9rOia4b3d6ePKHM67xQpze-8xhkoULZqUkHQxqJMADYU5MEyJRuk78fi2M7jWbz8iYma30jhexwu4n3JV9QMX2ahMqqqPSPmak34GesYzOnOBcrLH3", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112044157480604807193\">Xuân Nguyễn</a>"] },
            { photoReference: "AWCwydjrv5XxwlRSEo2X9z9MF0toP6vfs85Oln1ACirF6LBcQbP8kSE2u5WxzJaqWDqfdUynV9hhfKl8O9Gaof8CbfhE4ALnc5F2nHil6qZ4-mavHF8Pc8ttAl2BH_e3g60amzlMJwYnEEEZqHBV6e7h62TCZEhO1Mkkculjecu_Z22Al-Km6XBW5c73zvqEwScjb79-k-7AE2pNSXlVxe6Qr35MUXeU_WO-dsPZLGtLgHkaSjmAdsjiGp5jDs0mYqDzJDRekUCNTRurzWz3OwwD3GkHcP-mBCMexXcWQAXWBPfvQ_Y9mOu8nf7JT-uEIBVgu45z1RWEh4WftaYVi8Lg9wk-ueUiPmt-62kT648TmlgdxrbXbJvUZV8asznur7hBNja3zxKH9yEag_5mf-R2RDIEWVSjbX7Lqik2ZaHREiqDDtDZTxnQAq1dXvD5kg", width: 1536, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105890356686778382108\">サムギョプサル 韓国料理 バブ 梅田店</a>"] }
        ],
        summary: "치킨과 치지미가 특히 인기 있는 우메다의 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["푸짐한 양의 치킨", "맛있는 치지미", "우메다 필수 코스"],
        tips: ["치킨과 치지미를 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "치킨 및 치지미", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 5:00~11:00; 화요일: 오후 12:00~3:00, 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://babumeda.owst.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12939923174117286433", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Samgyeopsal+Korean+Cuisine+Bab+Umeda+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "한국요리 한일정": {
        photos: [],
        placeId: "ChIJNa0omkznAGARI0VlM5dDpaw",
        placePhotos: [
            { photoReference: "AWCwydioTRvl9C6dDraiczGrxW22cadHddD4PS1Gu9IFlwH1moOmyiWKx5PP9Cgs2C_bmiNga5pjh2K5oGbbTIh3qEioQJrRHR5EKVVXEnfZ-D09Tn3hZcRqtQfV9t-siSZoC3lYwP83KdMyK83nKrYLI4vcsNU39byqqsRAWCalBnQetonGmqXh8bPF0DTdzgF7uh9qfB5KDkGnzsuwT6BlUSi3oyiPyxq4mSFpV-lfd6rFvU-FTXNce2IBoAQ8dyS061Hpp1zwP91zcumRNkIcIErnzFbsYIviST8As_P3-PSzXvd2r-88Of4A26rOw1u9_XrftdBYucFuftNqPENImOyVv4SpZwj1xdPLsTBLqevSjQcWDSolkE3VzEWjwGUM8ih2wUG5L0Vht5dbXVJbHERAkfJCJ0RnuI3kof8OQntMeQ", width: 1536, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105344491947520408395\">韓国料理 韓日情</a>"] },
            { photoReference: "AWCwydj6ucp_onblo1Q_R3Z63XLr-AW8wg4YGJhwv-yQOewzsRMXQff6z43ENpBmQRJea8Fx8Wf-QloV9g8A_zAf9KUAKrXop5dz0V5TmxChaTZ-yo9MXZZ0WL_hG5dhxdS-O-fmagqzf_FjbGBT_oejFSiUBYzeFJZ53ppDkpqqLL_Dyj4_5xh302mb-WNFsnHtBdTYMafuGGB7auv4k_m2V5LlZb9z3hNunHeX_W3DRRjH_qqoJvqsOCR0no-w3D0JgjRuVIdaZoL-rpCkr4fqtdB4GVC_mb84_wuVaWjhtB86duCoskr3R1pzLeVgnoc9zWdscle-vmt1fxmCeVtyQgzFytEf-nCXMdHK_gtrKb9sJCG0E9swziv6GWtYW_5pNAw4GOzbGQCk8UMyhbOcP7f7boY1YIEcR5P5GuJfW4le4nzx", width: 1536, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105344491947520408395\">韓国料理 韓日情</a>"] },
            { photoReference: "AWCwydiZCROGS1mIvBI0OQgNxqhog4ZJ9qBy0e3wI4ieZOG1JPaKTfo4W87tmHIXJkLlNL0sEmhFj1jZGyseHZo_6ZxeRDYrk44OVDI18d3f5t4IiI6l_-gSB9t3zpsWe003i4uLW9SsESyHh_mii7lIx3umjhqyv65PgWUO6HjPps3NCkol1k5dX7nRD7nTrjG15fi8MNCE_9O6g0m9QfOg1GVpp2XnL7DjUhX_HP96cMNCJA4VHdJTa5Q5XpEdX9DLtLrNf-kyOqDV6F4nOpfX917v1GGcCwajyeRZJy12I5hyyaGeBSzmR0PbZqsIlfffFCRlSEqjGqIfy3HW4XdX6ts8aXYVKmBcXyqoRQCa284xBiaswtMpjJkpNSku0ix6ADyeP85SkAvraVJPR1atA4qza9pQdNahSdedk8Qhh57RXJMdeo5Bfu4P-0UhbG7g", width: 794, height: 1123, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105344491947520408395\">韓国料理 韓日情</a>"] },
            { photoReference: "AWCwydisaXDfzh-td2-QcVA6Vpnnj7k3GalcWKBmH_OCgPMNGYajEuOYE7WQeV_7VIealgRWXfKEe4sBUztB7tz_wwpR7VyC2G1jD-Fp3FwrwUsrbJBKJlrRGFw8gSiqfHzC9gp571gsqYRPhu1VHCCHG51DUZ0sj_d5blS_Y1oTbGlq5UrzKxJPFYPs620gKWMk0IIpjhSqvMksGt0fFQ_aaLtpADnZJAWN-1_gZbL70xXIM_4aIUkTiVnyS5XPqNvga4Qmt9oUfpchSFvaPdZzLqGrkhWoSNigHQ60zGF5yuv87ZLSKzZeSto9_8Lpg3nbsQ80aQNIvmV5Gqwkh-nSZ2hY7svCE_Dqkg3AE06VLZSCTaGXDKl41uc9bxJw1xjS3WBvY-OfQjU5WqXNQDWG_2pj0CRWs93k3Ggz2wuijOTabnQSkE9i32WX5nebjA", width: 1440, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111864822320479741534\">K AIKA</a>"] },
            { photoReference: "AWCwydi6patdBk_Tq6mNGbzi7BTqKuJZdZHlVd21LD3SF0VhTFWZC8G-81x3tdsZ3TqAo9dDuCh6-5Z4anwGU6giwI9OhuFcnZ8VWTp8HY82R3Xt8rK4V7oMhwhVnAJ4_3orSRYgBj8uosAyw8RfICmUt__RD8Uxu1YlZFcOwaS62M9iYj-WSNbTTctE1_OVHfmlUYhEawBxmT-ejSJ6hTWVa8wrri_5xj_oJg20MHauUI1-j6xmJ6JJHDEHxf5uFS16bHbTL5ue4sEg3-yXEG9oxDBjfT9eYno5gn8uMnq3B6YmBX7SKzyBg1beEId0DG0KNfxbtZgeJMj_i4Jy3s7y5-yVZsumLEIxyl1wncB8u9FxTYnu_k-JmLJMenvH2QyVSuxYjOTFed1Sc1A8Eoe1DIrnVbj0zxw52xVSU7u8M4lazas5VdWeil6U4mV39I4N", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104893890267787533579\">llill</a>"] }
        ],
        summary: "도톤보리에서 만나는 깊은 맛의 한국 요리 전문점",
        updatedAt: "2026-08-16",
        highlights: ["삼겹살과 된장찌개 조합", "직원이 직접 구워주는 고기 요리", "치즈를 곁들인 갈비찜과 해물전"],
        tips: ["삼겹살 주문 시 김치와 숙주무침이 함께 제공됩니다", "남은 소스에 밥을 비벼 먹는 것을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "삼겹살 및 갈비찜", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00 ~ 오전 3:00; 화요일: 오후 5:00 ~ 오전 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://kankokuryourikannichizyounanba.owst.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12440423862362260771", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%E9%9F%93%E5%9B%BD%E6%96%99%E7%90%86+%E9%9F%93%E6%97%A5%E6%83%85+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "코리안 키친 젠 도톤보리점": {
        photos: [],
        placeId: "ChIJVYADPlTnAGARgEZW4fAA2Fs",
        placePhotos: [
            { photoReference: "AWCwydiN8vOtUTlOtDotzRY2zWSj9XDwrmPn7cN1bsGHsNdw2-pL0hz-V54q3wTBTGUKq68AqFisrdGiRVSTaK6X3hRlxTQy-MNmO91OFQ3WzMMDISIMi9s1yL-lWGaOBqaqeVZgRL-pUM3cuaT2H6ojK5iP1HSEX5_g7kKNp9RD9_hh7p2oQKnms3W3LYV0f58cbioi6sJvkTJObum83i2HXTdk4UBYL1URka5olacY_Hzwv8zRpVWhWk55mi8hSu35knv5mYaeAHCWIWLiRgr1u3LDiAcYgyA1_KNGmfzsEwtS4PP7n10e6Oep-_QDiwYX8qHOQSApnoWe7nbWn-r5mKL5PFihu6qAGEsxiEkOCzTRfaiS9vpgE84VN3pwQkiB6kT0TDzmz64wiuqXNTQfT_l69EuXIrkluIMFw7TJ9aHSEF8", width: 1478, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117991663172169187622\">善（ぜん）難波道頓堀店</a>"] },
            { photoReference: "AWCwydhUqOtK7c2iwjOwa0Z8L_F0h2yCFPEbpPRq-mcOzCHdNES6FZJ6VkFp0eMOQwfkjRhAAUkQi3UF2sfc-3s8YNBKyTzz7StqaILoS9yrFlS5YaHbdyoxaArYmwAHNARHEryPxj4VGzpunNeqyn6zkitn1G9PA9xy9W_VmHIoVA0qEb_FLoZlchVI3X5R85EHLVmFLaiuaI1eCz3WD-3iGA8RGKnhitATC_74WrvpmZn2XcV8nn4jsuKxfzqpvhzD54cqpUmHlRgUNE9zjwFhqsIlRGOwjcK6v-HhQA-PtJwIETG2OXHPbEg_c4479ZTz6qiaGFDzEj0PyOEkYHKigHAckR1tgy3UhFC9fH86u3-cVYkUnb-U9thtaILU-C4z5EaqsgvlhFfJk6obfCYYRHa7G_NWe-1eWLYfrn7t6DhYkMJ5WWdE2L7IToteccFa", width: 1702, height: 1276, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117991663172169187622\">善（ぜん）難波道頓堀店</a>"] },
            { photoReference: "AWCwydjtUY_Y3f03nxRcjV2h2I7ieYgulHL8D7dLsRbdVFpXNo2Z0GAfSczFRylyC5j0_anzeXR8dJDZo5TLlgrLVr7lSDlxtZix81jimTYExch13QGt-uO0N4fOuq7EhMG346GvfHmazADaBXLlRGHuZsvZrRCZqqj7WrIKlFLN0_l6LRtVpykoF13CjfU9IAZ94dL-ESA0K8W80tjuioIszIWdMIz-WvjT14z6BaIs14zwGjKNFx9kBK1gdjF9QZfIWStDn4yeQ7JCoGIqswypkfmR8hLEPxU6MsvKRokWBtcqYilhODncQL0oVzYgas3K-vqDxC8fsnma-z9JCtCxnI2KMUgHjj1sIH-mQesRjLd172LzeDHmp8AC41qYOKXn1wvpJW8BkjIMsz2YrTWh-H_QU6waaHHb-TL2mosK7Sdqo2m4ECQviNYAN4G8xOUP", width: 1536, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117991663172169187622\">善（ぜん）難波道頓堀店</a>"] },
            { photoReference: "AWCwydi9tJ6hueNWvbceHfklQHITcxlCyFvACBFipBIVHUv4pVxVTX10eK3Es8gtVvo7pk6JjNGSQpC-QPVTfzwdOIl3npycEMzL_Zv866HMbL0FyKwtGSFtoki75kQw1NjqlPna1Obof_6AaLbJiGhTX262x7sbwS3TjIxCprnVcez6-RTEYYO1CcI5yDjLMZGz50iQpzGdrf1Tyb4b5pyEK1p7kmI2pd4NGRMd5geP0DRptDdAL5awiVSvVKvVZ-Zl1NbmrZn-nBmS7BnwtIb3Blp8V6BypZA-gLjAjJFE-GoWrp8ckQvxgVWMD_uHJ0HRbSX_tn75jWSVFrnVntA_TdXrBCRsji_chAHBg3_wOC1_XBN2utqPGQcIO-dvjxx-owV8OuVYy1UuaLy_ymzI7-AuRw2DrOE1K1A-YJgQyu5w5Q", width: 2441, height: 1373, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117991663172169187622\">善（ぜん）難波道頓堀店</a>"] },
            { photoReference: "AWCwydhoS_mc0KWGDPb5JNpkqzuekq-s2e5qt3-AI0tUYLV4q88tGbEzR-zWUqvuVbbH6rJ0j_kpOs0_gwxskagF6F9Rfql0fn9Syd2ECWNF6U0XZRGmLYKNyEoPE6sprD3JKSH8aXhMStPfo7FqKhEhpmyR6lp5RVNgtAd22oa6XRg8RIi-v_J2F33CT1Yzb_MdtkJiSXidNbmzWrerqmhSS-OUpGkO3z-eyO-fF669h3VGyimuTO-qP_7LzKts7VxrXKBNmvKwA7DEa5dqLWOV-rbOs7C9I0p2gMi6SmWTsfzq28vp4dnRRyV7fxRq62q5dqKYBXJS62SV-ZgbEYvQ5hO-PJjzfcMdiZQheeUyOIHsGqwj_HJAbouUCAwj4rxFy467uneqqNcHaKakuVJHHs6YWGgpS_SYZXURLpfyoplMMglbCaQAyjlFemcxzIYr", width: 2351, height: 2351, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117991663172169187622\">善（ぜん）難波道頓堀店</a>"] }
        ],
        summary: "맛있는 음식과 친절한 서비스가 인상적인 도톤보리의 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["합리적인 가격", "친절한 서비스", "훌륭한 호스트"],
        tips: ["일본 방문 시 재방문 의사 100%인 곳입니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00 ~ 오전 1:00; 화요일: 오후 5:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://c081004.gorp.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6618040686993622656", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Korean+kitchen+ZEN+Dotonboriten+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "한일관": {
        photos: [],
        placeId: "ChIJAQA8chXnAGAR8ebEm9M2few",
        placePhotos: [
            { photoReference: "AWCwydib8Jb55Ddabx5_Pa91Vcs8cYE2tGHfMPVnR6faa4O-mNAEYjqbonD3tU9ls1f5UOzcRT-2fBfES7teBkTZkiS4F4hkeMMp_yMyvEYhosK_PgtBX6tKMW24x-cr6QywPn5gaya6utZ8obBm3siV1-UZIEXpIWxuqBippvkpiRTfSNHRt46C2PJz3oWGtCciZLwBW9m-nmA9ag9EdgeBoOr5u1J0qmJiE2fYUmMdjskDi-QiRpnO2-FxlIKeXIDHmzpxANF2820FEIpHxIYYGBoWFyrNjEwkn40rVuxjxLU1Se8A0fQcEDZ-XUKEz0QX4KSN-pCU4caxSxOGC9azBw4-uLyYAYYfpMzfwPfmcogvyoV_7ui3ZohJe1NMM20lNtkP133GCDPQxtWPpSLKRRvtmZI4IMthXxcIw68Rpm4ldQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115855626294891024173\">韓日館</a>"] },
            { photoReference: "AWCwydgtNYLDZzvmRvUy8LQEeZ6MiVOk9r8boB-jbPVHIu4BBNEO_VNlS8XOwrYyTrfQuMTQtEv3rYmn3nthQYzYKx0EEjpAs6nTsYS2C-finGugwGqH6zu2QigVOoF8t_9bx1AmqxYFiRwn-qJLtjK7Lbed8vUsjvXtGhVM8jDQbJicTcD2bMlHrqT3_oLo6BVNfVpl9uOq084SifrThmY6WEBdMVeSqJKiPV_6tdHPWVmKIjlxGOPAtk08BgszFT6zKjPjcNpFHkOVhuCOiOMKbGIxycXdZD9p612T4aBD-dP6lIDZAUgLM4LHCEUX2A8lX_EBcXrSFV9Xk1YmUSMYT-pDIKc_yBBdwMMginheB4BfJabT5v2Q1AFa_FoC6b4OO_SIztX-XRSPAGorADGEsEEnn-Y4Yepe0micJahQlfbA63pn3DrEnuB-HURGRcd5", width: 528, height: 358, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115855626294891024173\">韓日館</a>"] },
            { photoReference: "AWCwydhJq-DCn4GdoMEU7dhzhG_D0QvCaylX2hbx-qzfLHOSFElX-xZfLIjPeflS4ruZusimvnQlbmtnFzvTcfQ9wjQN6aYfZ66e5yQWwaS5P9bri7jiG2kyOiOs6IdtAresr6VBiWqgc7dVIrQKVaofpDfpDXzxgnlzkGztpta37B62mWmC1c794Gp_DeYW9NoP_Hy2h0srOYaPmRKcR7x1_GMI2HmKuhqOAfhGEb5JvtS_Z7RfpokoMn6Mccw1R6MEPE_2yhuAs2R0YPAvJQNTGW-tz09GbDv5T4Th1z_FOzlX_3AtmWKNRUqd-GaFKxPl0tnzuAMfmaaKMrJzMJc4-0tZHfNB9uQTzhyEK-w4Y1IvMTQlMTT99bMRgrAOYk2T8WAoZ7AvfMyzQDL1XVcZhzNLwCDkEerzqy5cp8CDYsYQrnny5RLbHuqdHn5dzA", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108021457293157073660\">57 paris</a>"] },
            { photoReference: "AWCwydg7x_g0I-CKgaiv3JwqK7LwgftFAMNnIVUZnmN_8v4N92Lu3VqHwdFjBeeVkurfTIV6ONKjboAcLHXe6lzf4wIZusJSN5EIjnmb89tEfNyo8SC_0wlir7XeOGm5VvzE06XqpvkBnLTizTcjV3tiaS_zPBjcp6hmmH1VQ3xyHHZNLLWEZK15aPt38wxRRS9PgyHk0TulO6DAw9eFVDMEfsnB9MfZAzK05eLIPDQWKHhaHuvUQHXTgjvlMDD5_B7fcdL2HgQxwANMWN385qe5duD4CIbhHUp-voP_3pDE8SroL2hTtUjkEVF2eaC9vcoEDg1uXAEJrfsFufdZvvEarE47VVV5LhMyKzEeS7DXccDneQOTUT6Dis--h4Ny4kwgEHndERCjhMZ5RVaJhzT9bPOdB42TPWIS-QN5xl8RQ3KXZj-P", width: 3240, height: 2433, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117097139739445064303\">金亮平</a>"] },
            { photoReference: "AWCwydj5E4JF-JZKzjvM_4bgDWilR8Cfi0xbrOG_dU2QBe4vmk3fuuhztMr061uyuvYw6iQYb34aHoUeXoX97aKYxq4jJv9cgviovD4Ca5ye7hlF1avcszv8OvPZGW65aOtZv6NuJIxnwNc8Dh2SCR8jClCsM_vk-5RudZQVqGnHQYzw01NSQAdGUWsiNkZCH0P75K2YeyGtATf2QB_n1boOY0I4U66c3wBFHp8u-ghzyt_BSn0oxU1QZd1nsVrZKiS9-BlKwcJFj4upCM3kJcUUGx7oJ5j9W8VPXwEvFU9QfC_hqneRUUUlDafeRHNK8N84hlVw4dFUymnoXjVs-J_GNIfA8tg4TiVvctRYduMeQ5n2ggnhIL_YqxW_jRmQRFx4vHcAF9jJ7MUatWaLijJUZbxC3YGLCna4Ah9vkqDHfbMWXiLtXBGrb6J0NR85fJvF", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110998805990342699447\">AZU</a>"] }
        ],
        summary: "정통 한식을 맛볼 수 있는 친절한 식당",
        updatedAt: "2026-08-16",
        highlights: ["정통 한식의 맛", "친절한 서비스", "시원하고 맛있는 음식"],
        tips: ["더운 여름날 에너지 충전에 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "정통 한식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오전 7:30~9:30, 오전 11:30 ~ 오후 2:30, 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://kannichikan.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17040836847519196913", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%9C%EC%9D%BC%EA%B4%80+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "요사쿠라 오마카세": {
        photos: [],
        placeId: "ChIJxyw7QTHnAGARjVZIxHDIorc",
        placePhotos: [
            { photoReference: "AWCwydjCp0Yj6CSA70cvc0U_Etp0ttynvVDp1RbxCrnOrdL40WEPVdCLf2nS7X73m819U4QNdxj_oozLJe7_ecFHX0Pw3PUv9mSXsdG4bp8UO954be-0MZ7q8My9TVc1f5zF8_P3ZMgXAX9w1k7WrI0xvJeG1MvksfaF_oA0fmK3HMDuE8r_rtOjPpe0eSVzStom-xkbxMqAbiQHya3NcoWv21AM8tcMzANdcL1ey58L72lgo0vxqr2p_YjK9FLRSV1lL9WQLESu8PhvHZISS8Kz6-MKrYdB4orDUV4FughbhJQb7YSbnMmbKlgDJZI1b6tbQmUXWyLWZP7_YjQZxzXbVtlsem2-F7erGpbjEiSwmHac9axBq-Amp12bPWCBk2kKvI7yEV7LIyC7_uvJuV6ugEq-ZVIsxJB2AFaaXKQYAjGCUVXtO9W-qdCaTnWviWEm", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113145560456597142993\">정덕호</a>"] },
            { photoReference: "AWCwydgSRPbNXcDSb-fXwQZaHU6q8B30XCVd9yZbU-ftgbgxWkP9y0gtJpeJ5sfPzxXuAXeEscUjAXCesQvAm1GU_Qws2OL0ycLNC76sME0QIKXp8OWH7vUxkXTcCrtTlNcI0fkqSjAq5uoPE89eEj6XqfuWCXA3QF3o3jqANpPbqMp-grVUKjzaDa5T09O05dgi_YRuBhTxHDIXz5dNRf6WJTCCLkLq5YcukS7YQjpRmk26ZfoIc4Morjjf4MyIXefF9R7_5DnWg9JoJPRvUSUynuVgD3M2mujbs40wqFek_t1TNXl5Z7xXryVviSEDZSFA40_o8oCBFDo07qf2stAMNcdyx0hJQV9eZ_uDt1m-kuS2nV5G8ZhGUy2Fke34d_Uv98f5vTJo7mwQ4R8T-YUOnDf5KMgEgKfsw0s9dxKX0fzKOGRosnUwbERPCptntgOT", width: 4800, height: 3599, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110327136285243480355\">JAPANESE OMAKASE RESTAURANT YOSAKURA 日本料理世桜</a>"] },
            { photoReference: "AWCwydjd59ef3a_5glU5jmHwE0TVjmbDhMWZptzGPsawWtyJtmJb3COQjD29MxGIFJn9Slgm3bXfSD7NFAGmkxj-9MybaQ9oZY2QaL3PBntzwwYTkVUlyPtN6UNq0rVc-gnkRwIf4XL7ZBYo2Z4TN0Fsw0MKnQF3GehIEDYnjj34C7KcfEBkoVRgNQ5qCQ0SPW9CgwL0oKBbPuAY5G41EkEtu6V4ZQkxq2pUQXWJzGAx2sGx_ESrDmRpgJ3SNgtwsUNP-soZxT9T9Nuyr9n1mlLdMzCJObb1sz693gSHZSKdYGbC3TVI-6ZA6a5DQbVQoB27BEcyd6kZOONbuh5QJu_h3a-59-sLaSx--SdPMcnZP7Yqh_RFn5AxHXnpqM_RBc73B3-BNQAvrDqfN-_RemDnrOeqG1rq4inMl5GGT4Vnh2_s49fGXxV5zjz5u3WxjV7E", width: 4800, height: 3614, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112092979112955580262\">Allen D Nguyen</a>"] },
            { photoReference: "AWCwydg6G5AD14cpPeM3XEuGEDyA7afcntfGt4Y3Bc7FIpIgpqyBKMFRjb5nSSYsm2GyCyOYGDsQWfncy6z1lNZnucrdfCBGH89lqI3CrVr1WEi2bo_9BRsKdHqRm5KWOrxIkwZ2i3H4iNSiKi0SXnq3JZWVYBcdAvGiNothKT7HlMzoMQEReN96zg0Qhrl78crmoHt-VqRPEm8646u7hIlH11HQcQNVG_Mcq52VQl-g1g4Td6XpHVqK2kB-kvIk3SLrgf3p6vZa9PqeOytDJV76GtpCwnFEnplJOULzmLvFkjiRTauxIZViAbReiCBeHO7ygZhDGcqqrKHoSSq98QftmfsvigaO_FHkONvBZw8aSXPs5AAB7vEGzkSPE_sGaM1Qe_E3NgBDJSVM10KsG0mdODdaCSFRfQnTdE-4CP4ILl859YQZK_7hfIO5bKiSK93S", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107175063294181898564\">Y. Lee</a>"] },
            { photoReference: "AWCwydgO0kWXSuRyArndnE26d6WceAELey2Ii73bo2KpQBdLziNF97nFdx61aW9YyOwFuY1pR4G6Rviy54Qts6A2rUXxbo4w97ijIpyuqwP9q_mpbOHY6ToLsJIl1PeEcF-8Rdr3w4TdXheaAi2SfS00mkrdStkBKMgYEJK0o-c0O7P4YomhutB3pJ66Y7XxFrDQE-F_RqYTodOMNA3AUXQ_UZ23ZKz9F5Se906claD0JYzBbdrtpWOPS77XgngMPBYEBlJTdIG_fqiQQCacSAqt2tO4B2UPclGtjKTgNKnJGZbHztnFV3O3TQHzLGRrOOdJT4XJv2SXHELbYeMlw717UC7ait4okaz07oex2Zg1IwdLhVpZaEGTbS0gEsgqLI2UcuU3FnAhfOXAnKkzkjR6yL9YzEYWRgZXNqGDERSNj9IFRB2ZN_PNXybrk4LFc2Gf", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105270600811410643545\">Albert Law</a>"] }
        ],
        summary: "높은 평점과 푸짐한 양을 자랑하는 가성비 좋은 오마카세 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["친절하고 세심한 서비스", "푸짐한 양의 코스 요리", "생일 기념 방문에 적합한 분위기"],
        tips: ["한국인 직원이 있어 이용이 편리합니다", "특별한 기념일에 방문하는 것을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "오마카세", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 6:00~10:00; 화요일: 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://yosakura.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13232359041822905997", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Japanese+Omakase+Restaurant+YOSAKURA+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스시 하야타": {
        photos: [],
        placeId: "ChIJLUIe2R3nAGARnMbeM03BUns",
        placePhotos: [
            { photoReference: "AWCwydjiqUZYGFlAjamjGb-Ia3xFSO78URe7Qpxz3RaHFJj-0vvHc036jyaPobfXm5UpPVb0yDmiKTCAYmitOEiAexsEG2RQXtLRZ35BRNX12Ppkkah72D_wD6gCF0QGgeb3TkiRG9SJQwUizjOHvV-KI8IDJ-fmopz8QEDdEgyGtThjZtcnMssCDk12IVicuQuS9_dStYpJoYOaNvO3YFEpPlffJTw10t84EKpHtQ8SqWMA2cxNFytbEOrVNMkhOy52wKgMtzkhT7QbP0f8_BTHbh7kt8NBJgzbeFnwtaLJ2DQWrcwBMp5YTwyBXloGkrIP2DkU2UNoJrcYoUgv-ptk1fcJPehUEfVfvlR0Ocs_I0i-ifqPuknz4wMAk5Q6SvEpKNNgk6IIrLtoMWgsI83bhCqg4g1-lsD9g5CiJxyCg7KyW875", width: 1478, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113606320607939544434\">鮨 はや田</a>"] },
            { photoReference: "AWCwydha9ugEf5_cH8WvjYw4_92o5NP4Z-jDvLI9uRYvctm9x_O9a7OLcWGT8nem5jkdJp-FMKF2riG8yathNsggTXdszC3lfLM-kZ35Zum7thw2kRrYM7kcscrVDE-7xCis_rgjXj1dFeHqDHFekpv7dMR85Y0G2obUcRzL_35QD2XvcEl-QtLTsrsKDA7kdCcgVAsafU7f964AdKZ2MnoVfNvN0SvCsmGfyumFwQLlXH_v0uMmfdrc2boWvRY07UWVAiZ7VIe7D_CIGgHkzeaVlZNeW-t__ap7VWQXJEXSO5sT4jwgMGJLqhqQ4ExpZJlT4kLVaiTOdpVlOs3tw6f0-Tvu5fGtgPN8DEat7QKR7-dcvw5c-5bNi-l5qCgxLARHPy2ktPKHeJO64k5wxu6oImpyh8Z4qTCLrFaGd0TnSLIV6uU", width: 3008, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113606320607939544434\">鮨 はや田</a>"] },
            { photoReference: "AWCwydgLF458dBR9cbnHKbFdanBEiDeo2IhohT1iVrTC7a4B2E87gMucjTuykw1Bd0A0dcy1fNjaPmvIoXuNfFTajscEd7FUaCQF87dhVsL2SQ_AvkwaqEGuSa5sCoiefBrXsxZKeBBdxbjLzFE1eAJm-86pj0eSpCfnVY0BWGvTL7_lP7dBWRrB7EMDURKyv-NPXUmYR0iUvw7dMCZlp5jJyg6lWVTFm6_HS-eO5h1goq4uQmBZh-QHqS_qnAV0yk_8uAlCauKs0gPKxxYlYFHOa9dSA4hoHW477IHmm8E4rBMPeUDs_Cab_1LGhIHt_s_Zty_ozYr4Z8wsZ7bcwRFH2jJtNv9EHaQnV_IvzVA1eL7FPJWzvsAW5zw86IlDhTXyDBwCdBiX0KOUpm2jk1VdxovBC8neBRrs1_OxjSStckKqckfxua_MfzVpUJhOR-0M", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102450955194030291845\">Katharine Ryans (Kate)</a>"] },
            { photoReference: "AWCwydjokfY7cb_RKY4df1IPHTpBmuFBQE2XXlqTjZ5UifVg75tqQr7QnBJQZXMHLpSmWD4lnkJkC-hN0wFVNajy9dUgmZULzLKu9Wu1qKOtdV3t8erNx8FCL7QOt2pkhjE0XU4vmRFTtNUemNFDGV5nWbznFzCCr3gAkX5itdPJGOCW4vYWoVKcbPnxgbaT-eqA5u025HSlWHZzguJcgJnI1xLuPGS0MakD68g39BikN9xOxmSSrWI0cncWarqoS4Tl82dM1u6eKLuLuEHSJLACUpTTwYTOLrTL6jHsPMXfKOMAJrw9wHCz9MBg3rLERfy1EsYM4ZPhUYSiSXeyGL0EttGMWkwCxd-ovSIWJnB_eopDedpQS3vxLWCSWh5z5VbOal1tPTPMP1_cFKRyCqQEqPn_zzq5-y_BX8_BLcsdFg3ejq1BdyJ8TSGsNIjMIObY", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109381906600834150122\">kkk_drawing</a>"] },
            { photoReference: "AWCwydhY7pHNq_YQgKpUxJ-lGVeBRzP5vBctH-X12a0jKBlQogNyBwA3ppkmIq0Dl5nW633aBSYwimCMZjLZANfpsLxJYzmoMS954eDTPkl87MQ-v7owrx0x-kifP4SloB22aUI9UoP5Kx7QvTib_x58Ad8Co6qMqVc40CoIpM-bg29JEsRF1PGxL-p_FrFv2l7oqe6NUnAJQxg-WcA1pjFD-GmUQsv_kKB6cQif0hNbe4ioiEaVAdb5078ovfQnSC-sn52Ct3aOvgF54Orza1X_fOUJHzW-mAJ8vnwn812f9-GPO6BBCiZwUWimlq2GA_W7JYyNQjrVNC9pSIzSVqzQCI1pxrDJblUOIwZoY5wH7egpL1lbrsHqVHjOj14qDAJFGV15lIrImkHds0BoLO3BzQpFYKjvP3jOMfycokiOmg_33Xrtu8P6vsoAOmkMGowG", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100008948198437686215\">Zeyad Samra</a>"] }
        ],
        summary: "신선한 재료와 샤리의 조화가 뛰어난 요도야바시의 인기 스시 맛집",
        updatedAt: "2026-08-16",
        highlights: ["신선한 재료와 샤리의 훌륭한 밸런스", "요도야바시 지역의 귀중한 스시 전문점", "빠르고 친절한 서비스"],
        tips: ["점심 시간에도 만석일 정도로 인기가 많으니 방문 시 주의가 필요합니다.", "가격대가 다소 높을 수 있으나 품질은 매우 뛰어납니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스시", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:15 ~ 오후 2:00, 오후 5:00~11:00; 화요일: 오전 11:15 ~ 오후 2:00, 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://sushihayata.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8886377552082290332", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%8B%9C+%ED%95%98%EC%95%BC%ED%83%80+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오사카 할랄 오마카세 스시 앤 와규": {
        photos: [],
        placeId: "ChIJX1p8QgDnAGARsrtCY0DVNiQ",
        placePhotos: [
            { photoReference: "AWCwydgo8WTsnMSP_nGQRmIm3x6UqnTi9aRKOSmCQm8UsSjq1CPJh0AryPWIQmJWLEYRoO-Ls1AOOtdyLU4D7bC09pQv4sC0wBWSds-YwCZIdH65sFD5YLknfEmpKJZzDOEuk-MODhX3RIWB24cGyOS_GxzeTBNfKlju0I0Gtq9mHmPe6FjpidBetSsHG4OvdHX_IdftDjaBlKOTL9EQo6bZiBuu9Oy6B6eQRW6MkHdppYdH3JER0oLsLwM-LbRxs5NHSco9w03KLZGzImNC10bjBoQw1YJMGdmgEcfYIwJm-KON9VhCuuHVcGeVCoUBhc5BwDpN7P84zGGzPBfXwVXCzfuoFFUE-lVYrmoAMvTbdskjgxEhChJPHJoeS82-2xdLC8kLPcW6W8W5geFfkaia0_MX-cO0oj4up4c0agkieRas4i6AKhLsMaa310-1lw", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113429633472020113186\">Sandip Subedi</a>"] },
            { photoReference: "AWCwydi-_ninqs05SoEdB7lynqceV0bC7ACNwObSpqQBXVh4QGEGMSHSC2dSMNVssPujsKIQWFiwvaHnPB7NtRryTnltrwqylVwikJB0awXWsng6J7vma7eUU3ODpq_SRU7dTa068_skHjjhEGh7WLhqkX8z5RJBrvc3YIX1eM0KG_ZMnwePQq3Fa25q23UOE9ZdbILoDw-nwoInxhHYWUjBfFuqzNXasa8P_EPhBd5SiRODFoIBastfAi1jwcplhcUZBUG9sN5j-OjpXLCuyMMYQMHwWYK4TvX46pjaiEAmMCZsMQtP3oOzVXdj0aj7ZOlUOVf26NVjAYAxZnfRY-8nOOpQ_8DaJhOf-HIpRhgPT76ImUpfxCzv67D1c2V5wrUkXiMupTSfCIYfW1kFOlCfKeseHyPtzSHm_yXUyxbqs1Vh7FhtF2TtOk-m-WLdpu8Y", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114836667745571863785\">Osaka Omakase Sushi &amp; Wagyu Steak Halal Dotonbori Restaurant</a>"] },
            { photoReference: "AWCwydgWsk-bMeEor8SajHasC72GIliH5xV8ORS2F7rKPmOXITJ17-LX_tV-sxyS-mWqsAqJ8cB-xOAGyYQFpmWLeiZ78WadT_EZP_IrvXULKRLDlSVX64JvwbHIz7ute33Awy5tHenCdPBejqV1pcL00hPcBBmjwx24C0r63XPjNAv25Q5M_SMuNxRZAddYIhSni7umZUpUuTqzvU6QI_-G8FKrguBvNcwCPqtpLTx4lTSYv1kefHlV9Iiq6oV2wB1Z6LTgJlFSsFGKg3KJHajQ7N1U5-tBK2UdiCMidhyh0DFrJJkVv8v_wP05804NR5DXgElFofAefJ33kJaUvvLp2uK1DXaWdVSmztvR7ktl637d_F90vEYaIRbEFMUzzqQZFBuMXzIrPqOaB0GozefxpoAUpMPOIWGYrA72Li6mA5J_mAxKdo1VSMuZBBq8RJtu", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105260509607175715863\">Djamel Adjou</a>"] },
            { photoReference: "AWCwydif5jK_uurp3yANHo2hnDtSeq824dTgqrlL-5_Du1MuDHzbynM39pgyJmU6B_x3H3zIOM17zbcWjT7repUdJMIa6BTvSrqbuUYi6g76iWqTaHM7vzjZuIme9Gk6BxBLoa09MGVvm2qw0LxhGD-pJtjkqUvFoU0z8aNZU6IomLEU23ys46lhTDWr-QeeFtJgoENi1N73AmUwy2J1WS7dZykf6aSn301K2esMI-WcYkWLpBVHAMNg3i57_JN3nch1Y-xkDy6cFmwIpGo2NGyflU5TD5wXZBoAA6exfkNL1Gj3kgT06KtMBpmCbgmfvzONZkoXMh2UTaMlFGD8qaoYZB60q4lb-5nueJYK9oMwBx9K8HF0X3QFhw1r8_Rb7NsxKflxIY-6g57T3B96vjIXk1UT0T1jK0TDrbh62jal2EkeavkFy1lrf1m8QSV9nvtX", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113798093026825963176\">Anastassiya</a>"] },
            { photoReference: "AWCwydhoq3uUNtwDYbl6lFESp3Rg4xoHqeoVZBz5bMGj_7QtMPLpjt40NH8-embTnVCo1PFf60LSEAHhDZ2b3SgC9qviknIWEcuv2wmH6SLM4eVZm7nwxAzeBC45ixafgoeharWeuBbJlErR6yV65L-5_TeOpHLx3pjRR2XasunnMTXsKaJBd4D8VLjH9i9gz-MF9yBL-8hgGOCWrYloQvLnjqkiA4qvBL9e-BuPp5TczFD805Oeol_N_7kdhIbKIwSqt3XYgoJHAGO8dIhwXq6XqmkrIFqMIPRknk8qc4OhGE3iipcFtH6rmhtZLyoZhmd_17zvklBs45jTx499AOOZ3kePja6amgIJLO00rv3RuAkzueqBb55YIxey380Qqre21_Tvvf_4Ak87p-ycHNlgfv1Ysc_PMgiQjZs7GQsaB-LRuK3wtweA6QIC8uelzw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100269307450280263870\">Michal Labaj</a>"] }
        ],
        summary: "최고의 품질을 자랑하는 오사카 스시 오마카세 맛집",
        updatedAt: "2026-08-16",
        highlights: ["정통 일본 스시와 와규", "할랄 음식점", "훌륭한 서비스와 분위기"],
        tips: ["참치, 연어, 도미 등 신선한 재료를 추천합니다", "오사카 여행 중 방문하기 좋은 곳입니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스시 오마카세", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://japan-omakase.wagyu-sushi.com/osaka/higashi-shinsaibashi/sushi/?utm_source=google-maps&utm_medium=organic", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2609507506627722162", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Osaka+Omakase+Sushi+%26+Wagyu+Steak+Halal+Dotonbori+Restaurant+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스시 구로몬수에히로": {
        photos: [],
        placeId: "ChIJky560EHnAGARnbpuJBtIsag",
        placePhotos: [
            { photoReference: "AWCwydi17eK1e9F9DJyJOev6qHLwSweMMRYZGe0tHKmwdx2aWOoXCYVakDRVjsRN3FTdFi4h9ElmR-vKT5sVFwTnfpNDO4CypXbt85VGfyacP2vo3C681IcoK5I7hPKZFJKSayQIRiqP7Lx40SJGOUguzLcreahqmhfJGbu1bZ62jtsc4_UnvYODLF2cVJSHNSaFNuRMVWM2GJ9wjwn4F4Vvr4poot7wU8y_9HIDw9sBgyFM2aQnGIK3Obp-fX0tSWhmU4gShHLJ8bO56kA9vRvB3peo7fPZi3tOIX90BX_ab-m51nICsGlo6s3l4oZR76MUOl_n1ls4sw860MLz1_LWO4E76JRsNbfiLA602_Jeo7XozR5fuJPJVS7bKcz6AZkEWHZli2PQUJvy0u_YDBAGoas9waHAepTsyQ8qHiXT2rMGD3iKHhu-gLOJkdjrzw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101880956197113059365\">ᄋᄌᄋ</a>"] },
            { photoReference: "AWCwydjzPQuM9vbDlRzFKJ1-pNJCkLOjpXIWTuCgQHZP90NXrtaBKtkrRUZ6AuzalImwOBIbjzW-o3QTy5NVIp5OqWRBYO41MmNDFtenl9Pnah7wBkOQfDwvMnaolpTcWOHIYcMDNrJVAXNNm-4WbAaNxb1jR3erJOLbzAoHB7j6myAWaBAX-JUZ_KpHHIQDePJB_6h7hHLcvofhsdztoK2a-EqO9tfrsm657UCGAsd81Mh0tpyzJ1u1j-WE0UXu0-uEY2eyOlSn0-COjcGZVL1y7zLkNPwLjKfbph4eNeYS0ZRBtQ2BUUugrn6pCla7jY2FS7K5-30dXBV-kBJMQafTlp-qEJyFZnN5WnN6PLN8BWUjoZAM_Ju6yioiCmKKnGdBErHjZuN8vcv7PNRI-GMMKb0EJM4AWoiJGEba8e3kGsRp4Edx7P2x8Gk9mlrLxns2", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108303695681527584049\">루루</a>"] },
            { photoReference: "AWCwydjctfN6e4JrCw9G2MpXNPY8I1FlEWLYnnTSMjGyF_Rt8PvbXfte8di4gevP3eYRzcuHHI0uLbVGUw3VC1s3tcen5tlrLiczkdOQc4roLlMzeNirJ5BrIc0aCsiUQ36b1b_wKEDxnoKD82ULIM35zrJnyh9psdNq1y48ORRBRVWEQ9jtZgxo5AVEbCEXMdZD4rGdHWHHF2XAqglZsZkZ_UT_UAq6hfrWLuTGIpS6FI1VBx6JPLhxpyGRYUwk6Q4VKo5E__4ZoMGzGRnYvKgdmRvLdeGl25E1QcR3i_nEAekbU3CMfvMYOWUQrUk5g66tGGtZlkyYqHJWVJgURimg2C7cNsHXxwlgqPFkfpI2xeNvTyXOdkoWpa71sf7i-M8V9svr-2uvZgjkD_uthkomvSwo2VVNHRXhaXJOl2mxOoX2gIRzsqAySBTbCbP567Ck", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117294123220736275902\">강동영</a>"] },
            { photoReference: "AWCwydi5CmtFtuNRte1P2Het6xnP5mJ2WsGg_lmiV3A42D1hLcst3rt_b56XAdYoBlM2DdcioYdht5f5y-ssC14R5O0EdbLXrGgn92qjZXfDJpAzvRPjo1gi0hAF-HnP3478VbPO5rvgnMHPHfXLZMhbf0HnG3BsDfQ-Te7InK_X2F2Qu6zftBrtZ_RCJT8wbYROA-QHRDhgtZQ8kFBUYRUD6eM95PuoFaINy_s-8etEomd5dPY1QIQxeq6szewkC3mBu1AYkLTOUozv5vCcUKthKp7cdnFPkG_Ard-mxBxJ-lLrLZg2AWdVpwsDyB5HDk-tYCxL8UyERrn8hxGxYbtseWc8jexnEwoOYmkeprdm89svEHTxznFgVLyr5h7kqgrHATqRp5yt4nwr7rNEDajtfpWmAVNM8OKNcO-ouyyiaQv3VLatbVbdlsDvqw0tM8y-", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106235015016149420864\">clauds404</a>"] },
            { photoReference: "AWCwydhuCfDSc1FyVRebsPW3IFtaBu84Nuz1WUER3Kk4LZ6Hr8JVtkpTTZQDqqT0vrmqJ5EYL9DC3GmeXPtj8IMAuWRzEPIP4cM_5tymOtRWq3xg8oGqEJxhs5JqS9n5A-Wj2JIpsKkvnNvJoZ16Y-0tnr6TFZFLGWYHP2D9-sOjXi7EjhPD45bB20wwGTGID8E5KrpobjKQExRYm1L4my61uK0_RICWHLk9mkmO51f9QKC7NQ7MFol6V9ZeaG0_rqxU3LzXge1JK3G5--5apWU-se7kwdB5dELisVUuBS_f1992JjZ7OBY-k2IYwITka-jCF8vvpP9Cwtasgno-Pk3JyhSjNUp3ZexGJ1sop5CzKejNoNBftDU3vLc6OobbRxzxujKa-QDf6uDe5JapCeNIfxT0u1zp0xWgMq2sKqMremx1x7E-GYFK4q2wl1SlEZ_B", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114605193016084812534\">Trang Vũ</a>"] }
        ],
        summary: "신선함이 남다른 초밥과 친절한 서비스를 제공하는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["신선하고 맛있는 음식", "매우 친절한 직원 서비스"],
        tips: ["우니 초밥은 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "초밥", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:30 ~ 오후 9:00; 화요일: 오전 10:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://kuromon.com/en/ebis/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12155576150662232733", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%8B%9C+%EA%B5%AC%EB%A1%9C%EB%AA%AC%EC%88%98%EC%97%90%ED%9E%88%EB%A1%9C+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스시 후쿠시마": {
        photos: [],
        placeId: "ChIJfzaNbQDnAGARrUgx-dzqWfY",
        placePhotos: [
            { photoReference: "AWCwydhhVpXILhbCm8bg7QihQd4m8puWIYwdhTEnhwB06KPn3pzHRzd_o0KdW-EwW7n5fyJLjTsTiIV5fBLeiF86_rbILjZqG2dJ8AP7yqb_nOOFKb7tbVhVjePStZtilTOWwKXCqKbQ66lqHAz298YCPqWeU6hMNH1I135nyTCVxWlJqxtj7rS3ANLT-MrDkAsO9NislL24P6DcYHpL1BhsLkU-OVf3R8pO8mGQWapq97IZcMJj7nb7kevrPctjXxr1DwYT5S559oktiX7dGqOsB1LeykcspRrW-jCoOS4YOd0BvO9csdGwLvoMul-3a6TNPoAWXs4cebCdPvU3vzokhZBzOpiBdvKc2zsvHDLmF6stBKMG4201Cj9ZMYEOCNqxF5v1A5dqDWXapeKuJbdPZtDNcQudWees5qN8oCbvz0E-25I", width: 880, height: 880, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105461031683796052392\">寿司福島</a>"] },
            { photoReference: "AWCwydiQYg9hO00CLz_5PjiRbiQEIQdTJZN0KR65sL-gBHNsuGAekDl2JJoqANy2ps8xmUOmv3VSxT6aPp7R5LWEYhtfxSfhr4zNAg65kIj9z6KOtUeq4We5dKFHYsNx1UfM0_6Dnk9bC-J3mEvo855wtV4MaMdER-xhZS_KMdonaY7u32Hv45hgzYzbMeHUv4M3rWF8P_e67CmtM0a3vgnWtOFOOxj6FgC5JG5w0HPkCcYthASwYn1cvWfLVRn0uHx0HVrcUfk1_mebt64DwIN_5uYZXtHs7A41_CK0NN02zNIBlaSXMMvi7yO3bsHQsDKABIX2-V5UpRMm0VjGL31y5H_Ly-KwLVKQ_Mpj6cGC9tXs2M-sbATk_FV0842w1sTGl-FpTNDEuOg3_MSbRZyE7U_0oMJznenl1JKzmi9AI6fCkZWKFZxXTNKCZLeK-Iem", width: 800, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105461031683796052392\">寿司福島</a>"] },
            { photoReference: "AWCwydiAFHeXUClZBSSKbW7xHFYYdvqml9zLPe9RfvfbdLdl1FMJwr4LViKldwPcH8Yfn_cJ_LmswFPkiLJVZPUUznoBHjme38Hliu-T9G1dYyQ0yVzP7H69ie2kwEm1S_531Nx5UVmT7bN9ZKTfPX7WOtXjvarvL5szGaVyovcLyU6tcPhpnpqlmacYiH1morub-3dD3EyW3N5LWoo0IziKf4vI8Wq0U6FfpWq-pF-URoYZxW7HnZcBfRY3IFwpmWGM3ICNfcFf36G5mN45knj_53oIgOR549iFCJDurD-DgQPWSLTZEsuBXkBbpvBWd4ZUm1h-0RQg66xR0ym4Dqb0qHGRgwbVnFsuKjCBs8d2d6WQmYTXrpxrCpzRQMS83Sy0RUAmtn4bUf5nLTkPMbK_hkmUva_Mc53Qax5PsA-2DO2CEvNv4PS5o_lzGnmpogt7", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108442881526602576968\">梁泳兒</a>"] },
            { photoReference: "AWCwydjitOqsNIn1HLPA8YxisGq5WX90EnCY2A1GVWTnmqmIL33M7LCNELkijkR1MHKsleAt_GDIllJymjAmujWvWl8ip_XdQTUw9hW65Ro1Flm4ctok5xfU8pKmaNjkdkYxB2JzskvTcPrBj4OTKvlJrLwcR6Bi5gAZlqwZzbgVbBbddgFxwX7r8CNt6S2hIQrWp1TrQBIyv6qxsLGWLrCoJKKIZGTy8uvyb7Cfo6XoD_4FRlVL-jG1W4C9ED4o7U7Ly1HaGtkve1pGid6XsalRDa8m5qRbumo2B92dJ22lX1pvQzI-PFRMTT3ULzzTrxaCbicV62myl09sfBFwxyLFtfTShlfh__XJWrVI8kzHe6tbpTOamM9J1YZl3EEH4yHIHxGXJFw8miCLf1DHgORIbmEhXRznCoCu7CaKwTD40bCvhlYiKAmQ63bdQBmEiVLd", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112553011386971893514\">Isae Han</a>"] },
            { photoReference: "AWCwydjoNuBTrqqCxnp0puSQcLkxwBNRtRF7qj56mNlVhaUWchzMFNeVc3EWe4KlqGG3r5Wfkx4ye1OHOgpUGJONwqDH0N7_X2hN4lzTCoRvgb8gAalg-BXEaakF-EKqzR-tMq8xlVTRX3lWnix6wlggIJDKjkpXqlhje30HT4HLnrYWllGqBwSy4RJkKXW4V-jVbitEfYzg-VixSVza5XUz_Rqt2qdzpGIiXukDhfzLRANAt7rFEqqJutXrTH-kXU_SbuyuBYJG5bEXaik39lZvOF5CcTAqA0eRF8eWoiJO-5i7yXIXBp8oxgppr5mkztQqYxGFrRlWRzGI0SzVKU13zov0QLjYS_kywVZ8hmp1vQRXUOMfPQEduPWQQM98U5xXBHjuR_9YxVhNg9IWQcUr0BzcCRfaUWBETfK4P1q6GbdGYVbn9h2wIUUjjVdILUWp", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100535641459834101482\">小云朵</a>"] }
        ],
        summary: "최고의 오마카세와 숙련된 서비스로 극찬받는 일식 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["최고 수준의 오마카세", "숙련된 셰프의 요리", "영어 소통이 가능한 친절한 서비스"],
        tips: ["오마카세 코스를 추천합니다", "예약 후 방문하는 것을 권장합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "오마카세", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:30~11:00; 화요일: 오후 5:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sushi-fukushima.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17751477641051981997", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Sushi+Fukushima+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "메이지켄": {
        photos: [],
        placeId: "ChIJAQDn0hDnAGARE_gMVfQkU7M",
        placePhotos: [
            { photoReference: "AWCwydiHicOaiGL3UKkaN0S8v_BBL01CDC_Z3JAEdkdpL0K9hSJgzGWl21pPpWE5uhJxqDCJ9nE0VcMIq8EoLrVCJl8NQDGM4sWNYRrVsQsQJ1eTb7-tN2mJU_dydK5uhobColjH5Tywhd8aM2ryn4rMlASnTrNhA42wMZiUVIRHincN0vjaYCDiYPOF5gswYNXeswgtSvVk-mMWCHFAaD7pJtz_kepgvTRVWP2sp1rZrtHfwnQvk_-Kx1LpA1NyhK9ClMR-pAXugEpr9_J4AF8uF-45YKsbje7Cc829j1csWltyGq584ylnG4VZ30ivODFTPi8mxhH7uHBObV-QEfaadv0Fum3cjWYmPF5cmb0ugvj2QwTOgRwQy1tIh6WgxSCdtZ6CqC6HJ5dy1-dbDOnxsIV5uyJUjrgzejXmdLEOzbT1s14BEmf61vWp59UoOw", width: 2656, height: 2656, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105555012876401457408\">柾岡尚宏</a>"] },
            { photoReference: "AWCwydh0vCi35_-Tz20DCXRi2JqX9Aat3dNDIb-7sOHNQ41JbUCWpfruvtczM0GP-o4ckxjWg32Hg5rrVaH8LTIN0lEhUm-nw3W4p1ntKwKokSxjQqht1-_xLD_f17rVggJmlo-ZYdJQrPdU63E4d3__2EepscB00dff3xdMV-iS95ev3Rcy5BrVIKXozO1Xsz1jEdnzbSNOO8oeWNAF1TkwRLi8HdfObqytNp4905zMdI7YNv3usGKIhWQo1fj_GT0_7OUOg16fROKuatcL6Cd6MDz8gtEwaioQYXYB4xOpFkYD-lvHJQ8DdhRcMtl8xYijX0JNFVdrt3GJhevNt_o5medWEMZLg3b6irC27qeh4-lwGO_RYfgydFeY2F2T_bcze5t-gNdRfAIg45sUCygJ4Xm5t78wSCt9BDQRfirelX1PJpwo", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101944782114230099330\">NOBU K.</a>"] },
            { photoReference: "AWCwydjP0smw2llb5D4MGcJ82Ge7A0liY0s87GIhsjKiZvgf8ljNs4KoAtQv5N8kBWq4a7PAs3Yvwvk__ygYR9aOLSA_VJWPT-yI6XeVBytZzlBZvFOnZXGlryIf0EgmpW4-GSW9lNDLTkqxYKGiqkBtJ7hPsaLlcwZL8dKfAn_Rh0jP6yukxGCdB5hKQDJkwL4moiiEBYg34GyzgR4KAa37kh2qzRLyRLl4EYjk1HK2-KzkqIrMP63b_iq8qn-kivnAkJ9mbscuFnNppDLs836UiHr-pCMjcMq66v6uXsI98V8eMXw8Xql077v0bXMN4cuGsuAi_vl7DfoR1BCmpQwBQp3CljHiZDAESdyDw0pjNFG01EtowVjM_BGsaftIpTfb3LFsOSgXlgxHQpT8IchPWo_1X8IiPieHWa84UO6Ny5VccfbtNIzkujWuoS7DZ1Di", width: 2048, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109496821231970346917\">おぴょん 堺•大阪グルメ</a>"] },
            { photoReference: "AWCwydjziHACviTlzA9pDf0A0T-MVzwh1xmd3wGvtHjiE-2dp6J1MXmfrDxEZLY_LjCHtQjw28-oTujV8spkjdLayZST0BXRX_8O64zYcGwVddEWrpM3656qvZG3rT67KxK5JGvhc0_rzayNQpGIInwmLzHekksp3FC-NBeroSaGfSqNVBuuAwG3VyC7E1pYnvZq7Ihz3keIV9YQCEjJTWPKM2WZ2ZwgKD-9j7rJG6LFk_s9OEmA8Fjs2uU-MVTQ_HFVvSqc19xhDCCHRrghCGCPR_sreOzgML5-7BUMR1uUBAIMXktdYzLxBY2r5E9rCoT6Da1_k_Ofr4iDptt68XRlgjaYAd0z8yPOYBcAEhWmqnQ4t72oZXnwPz5vRNh6cDSNs_oK2su4gSmFMx1UHL3-jFIG9FCEQvtlQ1lFVrGd-EaURVQ-iUP2AqLyYE_-sErG", width: 3798, height: 2790, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106916953953408663887\">gaaakoh</a>"] },
            { photoReference: "AWCwydiIWi5horn-AHk1ZaRE9TzphLUUzOK8VoC2tMQY4fWWs7Eq2ZJbptxr2xLWYrem_GHB0UXfchjTWs8XMMZvFf6J47idqSt-_Rg-SbJOnOZUq-p7-K_Tq9_NLw7VDqvVodq6hlXzrZvkG0wjLmTe9S5VrzIp3iswY5RW0RURO_vL6Ng7LhUzj6CSWQO2-08i-x0lxNMw0ek29YnCFIAyKrWMqWFYfqJabK1V9RDPesWtE5Eng1tRCbOV9qfsUhz7wy0O_Iry9KA73Qg-uOkMLcVBhzcisorCUl3kUG-uO5lhgVK3doWXQ9zmApKpSOIhesjW5I9f-ytYNmgIVLQCcTEBu02Hhbi8xe_W7i7ppE7G8iC2fvLf7AoqiLR1JQi44JS2xGl8JxWl7y1mCjqxzThLcgKoV4q4wWq3zOyGHrEjfPjOy0B0NRt-Gta5Tkqs", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114199601601916388066\">s “888” y</a>"] }
        ],
        summary: "오랜 역사를 가진 전통 있는 양식 레스토랑입니다.",
        updatedAt: "2026-08-16",
        highlights: ["100년 전통의 역사", "오랜 시간 사랑받아온 맛"],
        tips: ["평범한 성인이라면 스몰 사이즈 주문을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "오므라이스", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://meijiken1925.tkc.best-hp.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12921712387673618451", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EC%9D%B4%EC%A7%80%EC%BC%84+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오후켄": {
        photos: [],
        placeId: "ChIJk-lbIu3mAGARQfKs4GI0Em4",
        placePhotos: [
            { photoReference: "AWCwydgt4X-c6mW5ZD21VcoqW3Jzhbpn_ac68rRBPA6ZcQmBO_An7-kdQmpIOtS3S9SWsnDOOqqRtpa2V20tsbdadcGNlOrEfXGbaDA2K-munhi9e_K0hn2gbI3Z0Tr1LnFK9ps77WaqdFQ868SFvf3Xv_shmDVnTEBmL_TzMQXe2jUwMgq4mVpckdoGwpXuzYxzsQ5yk1MZGGdXTFsW6JN__de_D0WXA57NIpBOg-4MMf1x0bys7feOoM8EuROlThQJPnG1_rn4etqxXee3opXN4qWku6hCjzzCONdGGSyeS9UVodhEH11X34YU1EW1Livrt_JmhfxT5n11HxbrwwBczYkuY33Td0wTd_i3QDWnnYtyPpKlD4P_hLUnqxJd1Hh1xBC8e3IF_opINsaPejUxUamD-umlDbEYkp7yEhLA1B8Eig", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113441268680238163267\">P - OKa (Trip&amp;NoodleLover)</a>"] },
            { photoReference: "AWCwydiL6MKhJjd1AWT1bI09MfOvwtccovUPLBx3FKv_ETPzrfs9lipexQT5Xf_g0KWMxMvINBx9CYNkWbFwFK6q0gE7orTGCxc-9_8xdF-_KxbaPaz7VUxHvVe27SJY1cfqMWBkpWIW48X9w0Ok-l-a4eoHR8HqgCeG6ppTMJ6PAsun-0d-sCzoood2yMtlWe99ZvJuHvIcvuxMacVTiS9TcRF2UBVRRgKZaxN_tEQhU5QW0YPu-X3TPuG6Wqgb2i4nAwimAnZeLjlpnvr29HKMIa3aUx48OO_ZwaHQVQ5ns-mjsf_NVvrwdWs_Ezaw_RFOCiA-FZAm6K0rPoDLXJpTZLocsLRM0jDzYbXF92DZ0wRWrFAZ6eQYBFGp_FCpUQRX4gNzQgDHe6T1k_prtOtLAn-fu9WxEMCeqqqEnx2BIhPBbxRftGpK8hVx-9woACPA", width: 4800, height: 3599, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101064864856037668209\">aka sahara</a>"] },
            { photoReference: "AWCwydi2JCvpmsUFmyDDFuO7DUQgEEE2aBJri-5V9ZDEbLCRJDKjGwO4aLus7uhXkrUcx15P5WyTv7G-WCB7ucS9esDOOZXNwO3vR1d7CXbmIZGQlIB5RDEB9pW2GI_mQZ5M1SNdfedj9_0z80F2LxsLwT3qV_HaLPZPay8Sljx7tnCJXDrUuoAEurc9hNq1bI5Pqz2UiYKTzqeXku2XWjuDRonsZRIo4vlTMGvX6W_n-4WL9eix7bOfA6TKQqoP_WAdqyS3bktNOnhlLMDBUXCVzcAsy2wp02k8zUzB0L0TGCBUwSF4wbTkqxAQDLIUOcfCvBYtmkZqL8o5SynWSFhSxh_NidlMXgkrA7n8aFMCKrhu1Up4JA_MYyvE4RvwYCGviIuRrROW9YhHoWtdpIWm15sfmnp0lv0-VTvxLwLN8OTfa6rnArAGv8JHlSx40n19", width: 3713, height: 2846, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114378438466900521646\">kokobechan</a>"] },
            { photoReference: "AWCwydhI1T0WQ3E0Y226nJMz8otYuusucwPpoEXkKsXUEREdTEmwB6PTUEoI7PgdwR69hsSZNh_sd5y3jh4HK0P9TWXwE5Y11ph9OGLM_nrfFpTdofIgBo2Ihg5T5ill8Ebma78V29ogRNHvvI19hyhh0JXvoVqBwBE76IODt28o5iTzL9lSRl6xnI2XsDxSmhRyyPD_rI7uXIF_rKdyYz4VQGotqmom8zEkGJVloIUcXO_IbpVJ4Nx5AOsd9hWH2J8G6jSvr2CYhOjJexl2PXkPNBnJi4vOS67L9qc-LxMY9sIulcPdknOzQ8HCshwmd3RYusLPXJ-BWjFfNHiMUkuRy98S8ws7K25iOtADhIV_aIpfnAfpozcdh2thQIsZJT1UZWrwyd7Mi9DrKyM0zpoqEKKAQg-JISGTdhaoMDtcH5lMNCIFabunobbYIDwEGg", width: 3842, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100666179383434267271\">Guilty Vmax</a>"] },
            { photoReference: "AWCwydgYl0-UBp092KASd5h-XmVWxgPwVxLtLFPK-H2ATgqqnzumd3fn00z85_uYD_hznkQLoHkpKWZUp6XXfcL7QQr8vimcnzrd5JB1KDlL3RF8rdj0Px1Dg3zw-BjGlsTlMktLx_yxPYeW9LhKu9njGCTuR9aKr2VGHMJHuI7RmXRbH3vMU4ezg8sAjpH-gs_cSU9gHpd1aGaTT1mu8qQCPQt6m5lvJQDqJ7AASlCn5Jsbp-LmEWrrTvBFFvINHkl8zC-ZBiQ4ikhTuyfstneIMCKfHHKYJU__6YdUiuNbzLzTvZVctF8ddTr56cid_dIu9r2Y-8qHAoITBNfVF6lbs00Pf9DRXiwPsDkevGX8gIsBoKwzLJi1fpWRfL5B5WgfeScv_4d5FPMDVf7mDSs_gtu8jKovzWkkGAJnNfCxW28wMOhXIh6AkFuYHzQxZcrq", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103928056547624605242\">Tanosimu Doutyuu</a>"] }
        ],
        summary: "가족 단위 방문객에게 추천하는 클래식한 양식 레스토랑입니다.",
        updatedAt: "2026-08-16",
        highlights: ["추억을 불러일으키는 차분한 분위기", "햄버거와 튀김 등 다양한 양식 메뉴"],
        tips: ["어린이 동반 가족 식사 장소로 적합", "인기 메뉴는 대기 시간이 발생할 수 있음"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "클래식 양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.ron-corp.com/grillohuken", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7931459493033734721", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Oufuken+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "그릴이진칸 오사카역전제3빌딩점": {
        photos: [],
        placeId: "ChIJy0mkq-3mAGARw7vwCDVfeYg",
        placePhotos: [
            { photoReference: "AWCwydjJo7VdY4YE1EUByjvhYFa-OoUFN1VIHiGdaGUMRoeUFqNh2PtVo0T9B4Y4vmwMN7QPpkP94l55QtGlVDU9Liyco196xmZogA33uerDN37213dX_dj4HkW1cC7Yq0vkd77ygtxgIXGp0o9nWNKY67MTvu7ItfA-heHzgTnGU38KUmeloMrBQnNhVSoxGMOF9CvtciNWXOpcv0dH8bQNdz5IAegofH1X0XFNPEKZeNVUyniAPM2B5gI13JAB2UC4mYGZjm-OGX3VB6Cv8uffENmHTgPjT8jCGLhJcuzubXOA3Akpsie8prCFWtnAfc97aQRPMnMzAiVBEpc_lbLhlRj8AYywwLNmasrGbFYOE4zQHlU9_LhoEZr2dh1wOr6uyyA08QpgTIDY7_FvaeZiwcK0EM8e5SO7spJiY1GJSpH3AQ", width: 1478, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114338150121346025746\">グリル異人館 大阪駅前第3ビル</a>"] },
            { photoReference: "AWCwydjcnlJUBCTQrtrCnWjOdklGwi0mDsTSOTHk1MV4NAt_bJffI8Wm97FJWbhw_lXUyhbmu2fC9zmHVRl0r32BXvXt-4cHl7FdYyzxYSlqu5gDC9UR0vbUQ0hLYFFoafDksP8ImuXSnFFTJTYMx_9mdGUCH_uANeAsMTNDIOjMvYf6YwoDXcXgiRbSi6dsd68d7UYw_aku_FOUEHmGz8r3xGjGfe-kW5xe0qtLmDb8Q8fXXS5DdLp63IgexOrEiSXuX8LgFcJSuk8SVyhWx28Zr6W10GgNQHdTS_hSRyQZbkGRfNmnBYFlNYb1XEqlp8HbC-IbcuPy7VsIpba-Oz9uBb1x2qNl26AH4sXNLa7XVaFU0pAaC5eaq-LH2YN70O_Wq1ZdRe9BV6_q9ZfyFd9bU66PFh4-PKI47ZElmMGA-vjc7-oePxcBG-klkUCc1YE8", width: 640, height: 426, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114338150121346025746\">グリル異人館 大阪駅前第3ビル</a>"] },
            { photoReference: "AWCwydhydUA8FHfISBrAaf-QH7qJ7OWsQWRRipBhIcR61izpeLJZdRNBAD5uzngVyFgBCtnVVY14PEh754M8nTynb6tPqqOHFWjvEY85dO8ZHVsh68WudXIBtJ9Bijf9E-I9kjWNtzZW2adcp0lc5w53q9iNUm8KFbTlJAjdPUs0iBwpStrbKDBQYYsWwylOo9mZ6GKwFAFhf32BipYLuSzKPQsIIJRDae6MBhHSPtLaUCTscEzJ0BdPBaw3pfhiCbS3Q7Sx3U8WileWp296i2PyA45gLE1gspAqdsrOp4MvJCaViKqQinGhV9g9EC2yc79TXTAK3AWmOr4czMauhLp4SkYxPrdfC7LTL-uzTaJBU6ULKYz1VD3QN3WlRASVrJX8jZH2swGdvR7czvvwGEAAeu-k4kLVaue-ymDeaiErxv8JnMZuCJVv-CkzJr1etg", width: 3287, height: 2514, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100022734982732173745\">篠原正（やっこ）</a>"] },
            { photoReference: "AWCwydhOV4fykGof-fHgXQNWWqvQX9w8Ie7WsnjQrFYPX3-y1vOjuc9J8V_Xt95p845LUJ1x3h-dm3dDFeoIL1A-x7c4pKWkLxyPgXcKrFzzjW4uLpbEBPhAQq1aYD8NezovL2zoOKyTQowTppCG_-yb8I8ldteq-fUCNNpOJ-mOnGftNRqPcD8IyXgL21ll1wrZTosUFTa3UHLVE0n3I0C52O-K_ai4Rhxg7xlY7oKUJvcZZyGI6lapGpU7oNC1aOsnXHRaXMHHDRLtX5r8yys14F2Le6HrUqr6IYiUn19rl7lEwbDUSY0-rYiOkw84M6LYASU4jFZyspxR7l9zv9zUDHPTudCYONnv4qpROgUE7Ug9d3rWp2In9uZbEHwBEEYHfWhXwdPzMerFZ37zEdZkFE6SmPpUGzdVEiujHQNC8R8lquxr9Az4KkHWuKN2FA", width: 4500, height: 3378, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100496926506150999417\">booze booze</a>"] },
            { photoReference: "AWCwydhhlektxj-NJpBnl8TVjeCP7oSVcEgrFdw_OY3991Ocki2z2OTe0Vih9heL2IVrqP_KWkk_qIeYffU4gqTnFX06oh8YRQIyiPHv_4TPgtj7tS_o-lkiLT2Ywab4OhlNgY7ZRNEEVXFywQrJZLH2OX7vQuW8mNSUjj0Vi7Xw423EdwwSRMv4W3dT56G9tNoVkxfcQsytv41GHLasY9ahR5ze78YWLjcpOXjcxzmYfe1c8pPBwSX8qZjiysggRhUWTYUxArODVVJPqEfotGjZ6Maxbi-VP6NPpBfEhb9V6AxxGZtc2_7qvYBHUSU_tocxghI6-HFE_OrBqiMZuYpfagMKffjPNxrYqfGnipIojaW-DgAx_Npq3mLPqzDk6rDu3I0SWs0zpLBSNV6mdejRPp9Wb-672QtkVQFE9g1yeRTEKBPD3MePC-6qdV63eN27", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100022734982732173745\">篠原正（やっこ）</a>"] }
        ],
        summary: "우메다의 검증된 양식 맛집",
        updatedAt: "2026-08-16",
        highlights: ["우메다 지역 인기 식당", "높은 리뷰 수 보유"],
        tips: ["금요일과 토요일은 밤 11시까지 영업합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00~10:00; 화요일: 오후 12:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://grill-ijinkan.jp/grill-osaka/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9833995942728088515", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%A6%B4%EC%9D%B4%EC%A7%84%EC%B9%B8+%EC%98%A4%EC%82%AC%EC%B9%B4%EC%97%AD%EC%A0%84%EC%A0%9C3%EB%B9%8C%EB%94%A9%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "(오므라이스)홋쿄쿠세이 신사이바시 본점": {
        photos: [],
        placeId: "ChIJ-_o_KBLnAGARcIWaTpbajWI",
        placePhotos: [
            { photoReference: "AWCwydju1moqPiq-05152eRhLIzKa3SRbYyPLnTitLh8x6HGZisndjCQrmiZt9Hnir4R8YIqhFtCYuUjD_JXyka1xxu5FjGhLxnOJlRULBAzbSxQTI8Tg-q8k-wBaWWbLrvw2xk8nMJdpAyL7C1CbHQe8B2J5imCa36l2zuRhjuIuxJQYGptRcTfqOJN-F2D_ehP64hslBcEyD4J3_-ZJ1o_Kr4wlQHDWxyX_5CrkkryF4P9s7TmKBjNRcBkX8VmgnFWBhy3TtsvilHEHR4HV6eI5QQIlwheuRu4ogmAFCPdO3bWJWyKgXWLIzWTaExwHuiMTNTZXHGRGGTtPEpngEwcsaoWIN99rK2LS0MLiuOUsvXLP_r6FlFOlqanUSYII5Cn62cAFM97OoU37hqAnSZVWpK18PE2WtdAnxWR18sM3xc", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116536557209804514474\">卡琳carollin</a>"] },
            { photoReference: "AWCwydhzjI2i4sgHB_c7g_TFs-L-JBSO026Ea5E0_07yFbe9w8q03-rXbCRoZL22SuNZfllwUF6k4HoNE-c4ln5OoSsacOOpHqy-7vOkSvhoAxxLPM_BGFNvcz1KwNqOohBhE5dP-jYBbyTUsPFK2Yso5KwRtVWwYrYGGcekYCdA_sWgD1A_fT_waNJzv8qmRWh245RrJABhFuANRMemCCeBwA7cJDxsVXGrtcAtFHn2l_MCwKJbzIZV0LIerlaBTUZXwWRj19f_VRJ_ZP8SsYhSMrNNgRH8pEv_zU2-rAsgCMNtSgWWUSHHbgUBzIH_TzYWtXmTPgCoW2R9uhgIw2vekEEnbX3lh8umQ2VLy1RAwqhupp4gnatouYrevvca0L4fPl_TbPS2qrCO41_iYKxLTEDMDcA52WkMaSst_XJRvy-aPfvz", width: 1500, height: 1001, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107995012534125577930\">北極星 心斎橋本店</a>"] },
            { photoReference: "AWCwydiDLpjVQsGE46AfhNia0kGFgl7zeg4VES25fMjbTZB2qFbxlsDHLyNwZwX9AewLKDdUNvg_KLwMWCXGlvgnPTuIAdF3ah7D8fdJtztVs-ze0pctEmPwNzNiA0rIn1W_1qSAVLcO2mai8VB7L0ZE0sD-eSJuzaRex4I8hxdV83Or0zqcKEZLFrbT1WQvjWxre2PNbb_4W6fg70mHtgyXG72-H7RuWTrg_KH-9ODZX-09zdq2WgC27PSNKwxTOps7DYn2YOivnB4_fWFEzR3uO2mw8eSAXEf1wQzv4kkWSSbAUIPYZLnTxmkfjADnOgAC2WSZiD6S1nPqA2AvZRtY-cZurjL60_djlozHU-ygg9OAtrlHS1FMh_iTZdb0EPYtX6g3CIeVfHvoPNWPu2G17wXo93xkmC4_089neFz_uVsnvwJM1I08BmOqs7_DmNm1", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102359554812733016760\">한세연</a>"] },
            { photoReference: "AWCwydjjEtPYE3_3-_wBS7IJ9dFykD5YAJ4KHQ46KmVww9U21JaBKKbnppmlEZO2LYBdni5bDo11pFgIFMb_WdethyicRkqfaLNgNiK50RuPH1XnWBQYambYtzPQJDFztG_ozbY_vkDJm5nq8_JpiRJJoRiAmrxtGzu3C_QbRfM-Yk0pWh2WLv_ZBlZ-pzjn4buUrvFlgNw-UJSKpjqT5BH0rkWBVzwXj_in8yylmQ-x8G0P8NCkVvvik90uKz83xwxw5v9zoS3e4r8XBtXOCHmZjI9ohQTvlB-ZqqAC6qxvzQ50HBEcZK34YUICO87mP057wKesUXYgLzJJ7sehns3ltDh8IDHh_QV75JLolCsjKDu5cDXZdexDR2RvvB4pGQ3ImrG6AvluXizeu2vll7r3xNECQsuVDAWazFk56EWRKG9F_k0", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107995012534125577930\">北極星 心斎橋本店</a>"] },
            { photoReference: "AWCwydhc9D2i8o09RE8VzMUiUCgKBg8ISEh-ZYwBRpsQSglRYz7MzPbu6InzKXnQhYVx16JY0y0Dy2i7QOrHbqd-w7XgM1ln2CudsG_i71M4oLZjP1ePLOJDfxpTuc6PHcfRJuc4UK3I_QbALwhmLS_U6FvgmMl3-b4b5uIt-sav87hsTXahoW12SFYENaJGpC1XalA3tkoTjWKNmKBocRmNCTztQd8ziZau7uTrr73o0N7E3Zmqbl62IV8cHnL1FhQWYYKuEtcb6mT1SSVj49dXlqwJ66UuPpILHVHEG7fsKh-v7ueW0DdupTVDfg0gs-pvfOQ6VnePwE6oUBQK7WdJYR3EM6CIKU10gaz9tpo9LQ_6pcuepesP7ONyrBICCIh5AhFvIBaNqLDTaUT8TnO1T1uF1nmcGiUIMoG5RGet3319VMygS0JZokwEtJncfc7f", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116104556475670260915\">정성훈</a>"] }
        ],
        summary: "푸짐한 양과 친절함이 돋보이는 신사이바시의 검증된 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["푸짐한 음식 양", "친절한 직원 서비스", "매력적인 분위기"],
        tips: ["입구 대기 공간이 협소할 수 있으니 참고하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "치킨 오므라이스", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 9:30; 화요일: 오전 11:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hokkyokusei.online/shinsaibashi", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7101572526531839344", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%28%EC%98%A4%EB%AF%80%EB%9D%BC%EC%9D%B4%EC%8A%A4%29%ED%99%8B%EC%BF%84%EC%BF%A0%EC%84%B8%EC%9D%B4+%EC%8B%A0%EC%82%AC%EC%9D%B4%EB%B0%94%EC%8B%9C+%EB%B3%B8%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "쥬테이": {
        photos: [],
        placeId: "ChIJTSd0_CTnAGAR9S4YOWyCLvU",
        placePhotos: [
            { photoReference: "AWCwydj4XSBmVZGqIqU9oKreEcbCe1-aquj4xj7l8i1Y2GxoPCtFx4cypQdywdhFKS8rE_k2GWKE0tXHB8G7-bdtqaJwWICkyWx0MJNWo3URNUTEqfsQTeEJc901_XnlFrCx-wdtrDgOC-IgvS2N7dJFy9doT8JQJRAifTeVNFji204tMGbRuZNTFtP_T9O3ehhlsoklhRtIko-w2qmWFAguQUjGkPZpRFAm7NnyErcNzl_lqHCDhDm_0u0JS-I1vSdBepuHI-zB_9A7RfCHnID-vQ07xfigoSClCENd3OFhHWeiGFDLak5vAusovkzN1xWSYP-KIZV55Ps3rWD4oH-Y3IIfoEFiezGAYPIraIl-JLDzerYDiJSjeYPjhQw3oG1KxCN6mHycgD218Phh4wlbY6IOTN2yoL1hYiaMgDLSJqPeQmdY8BIz3cnL-sAJ", width: 2430, height: 1822, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105868688603537307169\">TINTIN呑んだ暮れ</a>"] },
            { photoReference: "AWCwydiKthS2gWVe4mLD0RrJ6E18C4fcZ2OqMssZxicoyDfbR0ZtyroJAreuFpOCxp9QDI8VD2XjucJEyjKOEeHoEEJefbhoz2OM_NKDqD5mepVBNCyndA5321OwAsdBqj6BcD2KZJOVy9vcEk21C6qrvXB_qy_hSTU4Ufj0pNZbmJe_nHP-fEF0XXUQZYa23qIumdcHX_S4u0M-KOHCw3Q4Hy7HBVxMo7vPxWc54j31pATB6vDb_Olb7yK_-Vu9ys1IrBSfVBmiK8Mpa-3BA4s4roE3HVYCDeY7R-lFaRE4RFF2ieqkOwNwTex37yxFQanOlRYzdGnW00bcMORd1mQvGQaEeMK5D65wh86aZ-CJxsd35fZT8ckwElLDsrGYeNdOXIodLw1LN9wsFZSS58wAJUiLxlwHEUfZwZDfW_Vjynb3GbY5", width: 4032, height: 1960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113262909478256205549\">内田香織</a>"] },
            { photoReference: "AWCwydgGL-d1U3rOfE-wJ5tqyyhNqKworoY0FdgnCY_20IfK_Z7ADZs-RvGd6fJes_RoJ2hWdzTSLE69UQuw8FCFCPqyfz_3m3PCLadKQeY0xf3d_cVQ_gMHceZAgLwHU63vVyTHQq_T5woNQXW37ercURypks3LjpPsnxFBN5NtXHiUTo4yGSo65XOSjJtlCKZmE1-2FfKggPnHl4_9ZHsKZr2CDmJhJwUa_iG_tAg1vyG1EMMeRPb0eyRKUXgAfba4wml4jPHBwcLr4B3fGufjhDft03s4VSLCjPrc_I-ovLXPCeqIbtGQkaTquhkgJ87UMvIj6vuE9NQAg8ZSbom1K2n8jgzrNd0_xjIuwNEwVrjN3EdVX6x7uIbFEiorhqUiIIJLnPDxtW7ArSmr5S3Kw_zJqsVtw1rtE4KmQj0Nq2HlX2P1Ij6-VQetP-cWIoGb", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103364663763125830097\">Dorami</a>"] },
            { photoReference: "AWCwydg8gsV77_eLVBap2RuMXreI_lKkF_IZYBq0znyIcU5Pg2PUmsiTZyjqmD-jAw38_Lhnes_v9Jo_0-RS3Qr-7tlIHQR4PMfXTSq2TnZl0xyYNWTwT_ZdvEDtCGuc6cQFbocYHvdoRCO_0dTMAPRGzTAC43FPGRiOhGd4s5t_GHr_phS4hfaaA8dp_XjNPXB0X7elEoxlmNNXan4uX_r_J_XMxfVZtid2P-ao1tzh-0K0T0Kgq5U0JpIhtb8Si2w0-V6cIfo-oDMrMtpSe9V_EptKWRlcpqEwly-Fu-aUz7gsXZjeENHH0XLnCeFq-bbqVNIpWawBSEZIfJq-J75eGcXCBw52SLgQA9ALdu_WztukPGPc6_fh2MbLQO8SsYYnFAUuKp7GukIY0j_NI6N9NROGgTLLhAa0Zgq4en-owEMxFXIqHwTRePkVuZY5-IXr", width: 2160, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117657984447055104286\">コウジ</a>"] },
            { photoReference: "AWCwydiHa4F6t1SKOirEicex4epsKFgAUjAlpPuLQ5Z9yx22TaqtMnE04ZbczJLCWis4nMxOaiSbiP-puAW_kYzrGI17nMHLL82lpbYJo17bWRSX3y6FARy7BssFvXtrwOFZX9klC2Rv8bd7_6Zdj9hbUH1q0djUecMKGzWVFOEs56KHyDLsuBgP8I3MnJpAY6fHB1C5BQbWq4PqiF_ppUB78LyVkLGAAUE_qSNRg89g1ZRQFEdekwlXw77dQnF1g3hjhZ3s6v6aAFqIqjLApU8OMhY2s1SUnAl-f1QFGvkuDExTeTEg4AZh_tQG573hhqmCJCJim3vuW0SHUpeJi44TJ5QdShA_dleRgNcEFh5CVipiSXNIgGvEEn2lJrc80MQsbfYFoWLkPGHH6b2uYKp4TArAZYq9jssa6m3m-rBAOqL6Ntxh5E-3l24i98Y42ZS6", width: 640, height: 481, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104355731111916114753\">悪魔の抱擁</a>"] }
        ],
        summary: "현지인들에게 사랑받는 전통 있는 양식당으로 부드러운 육질의 커틀릿과 육즙 가득한 햄버그가 일품입니다.",
        updatedAt: "2026-08-16",
        highlights: ["1935년 창업한 전통 있는 노포", "미슐랭 가이드 및 타베로그 백명점 선정", "부드러운 미에현산 돼지 로스 커틀릿"],
        tips: ["점심 메뉴는 밥과 미소시루가 포함되어 가성비가 좋습니다", "인기 메뉴인 야채볶음은 조기 품절될 수 있으니 주의하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:00, 오후 6:00~9:00; 화요일: 오전 11:30 ~ 오후 2:00, 오후 6:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://fujiya1935.com/youshokuya.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17667201789546999541", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A5%AC%ED%85%8C%EC%9D%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카우보이 센니치마에 본점": {
        photos: [],
        placeId: "ChIJU9hixRTnAGARwxypF1Gk-gw",
        placePhotos: [
            { photoReference: "AWCwydh9iBO7MYvU3osQBNWcWUXNU5HLabsRLzyGwluEbA9OHCdMokWYka5_WXajoaV1EutMkfcAxnrWRCNfPbZ9SXmY3UHnFGfysCTOqPvYnA1bgVhXA_HVPQXC1a7-B9SOqUu4T1pQurVfiwDblWZjy8dCqwOLrjUwNkgimt-wB52JSI4VPsRJJ8z_m9Ffiraz_i2tnfwatesOXd0oV7J_nzINtyNOyjDlgApqA0UOZpF78XIGaVphgWZn7sri1M36OhKrMBgob2Mq0cuWVa8ugSZWJmPBRWsbENxnpF0_idnoh-aHndN6Y5HX4OPc8vJ-NzrlXHogWGBzxXhL02xfNUbVFD8zoePRQbKN7SvkGk_ttjeGS8bGpS-GDLMcWRouiMRaAHkiXsUOTbwGtCoVvoQQE8pz9QBYGUZW5d2IuvyJiQ", width: 900, height: 746, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107029657502596268885\">かうぼーい 千日前本店</a>"] },
            { photoReference: "AWCwydjnj3PETN2yaHpU4lIqLijhYVDnzSG4Ke7onSEeS9DtV-Oi6j0h8artmwzW7YRwkM8StWMdhBOpO363tHKEo5rI_XUayBfdyxs5oKwf9WZvra5y_D9mXqzA5EGKwBJJd9XTZia2VMx6ZA3IdcbKU6j1HtAU_TwxJDCHnsdDNXhRP9kaYz8zeZnkA0KHuCzBafyRvmR7xVldt9uyqUIDWGw437orS0xgEQDYgxl-DsrJ5Gzcgy0AU8Y5wpXiWNTEgaT_tqeIRjMLRPdH5jNUGImULadI7MSIaRKULzHjJgc6dy-J25PGq3QOewGXHDqzX8yB6BUt46PFXCx7CytEa6uaT1ih3APQRLJ-UcVhldMAL3-HDp3C_Gk9rAFwgT9VqZm6tBcXrPJE_Hrqa5zGmw9zwOJEmWwEDxP5WfucSfgLL9Z3wPE0UQtUdMXn3dZf", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105733231240126950428\">sensuidiver</a>"] },
            { photoReference: "AWCwydh_cg9lzC3rmkC-SzBRZFJL8JE3Ji1kmZd65BR2NiESjlxeCe8h3u2aBOpgpmZc-EcDcI5L74IlYCrREuQx0_HQUqyZ1GOdFa5piGn6bCoyG2EVdTVsnf6F8WehosIYv1jBLM8vcqK09ENAI_ZLjxqGUf3OlxX8jQDwSPLBIzeQ8Ay4sWJ9KfF3zLZsPKbn53Jd0u8rIS6pT4cA5m60bJrPNMw0Y4fM11K3Xdl2NI6i_5FjN8kd2nBQSZu2aiGkgN3Ook9aw1JUjV9dTAsE7UlIP7FAVisZuG4Pu53sqVmEeztIN3MoNTN2qEPMFqT5qVekxde2TVtL2COI74rBWNaH-b9i3l_P6HgJH9rj7011motdyO3iDMS3-PrA0Xa6Y6EC_cZjKvVKgKzVAGz4ncv4PTx3NXfCjfFCBp8YN9L34Q3J", width: 1062, height: 708, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107029657502596268885\">かうぼーい 千日前本店</a>"] },
            { photoReference: "AWCwydgorv37iiTFIsgE8z3NZjX20DaXhCUS8h0Wqfq9rkZ7vpxXw6X7M9z1mMvAFfPhn2fL-PXo22pmOCxg8HzRTJHB5qoPM7ntC5T_fnbP_3cgkZp3KHxNb9ggPdDVJqyRnyBujt7SdYkI8SngaOB3IDpwFjUyLYV_svOcmZt25OInirU9LxnPC2BW4iyK80JxWpK8fAqvXkCHwfRE14u28U9lk5oFndEpFl9kvpbeYzIXYLXWC2V4txxblNMcbiKjC0_vaBYInNHyyjbwJ612LR0bhLogsahPoh2uIr4cikbYfDn_HTaxT-wEYjr5v9qpL59VX5VZvpOr8poGnPFqcVFOiOFhTpuIHmeDkZLJWUqoPVwEEHfn9_ifLsFdiBIEX_QX_7y2-1ofXLA6t_Pf7T2v0JS7LRDI6iX6O9M_xG9kOZtWgqnFo7yx2Ai--w", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115646844448725774155\">Sungmo Jung</a>"] },
            { photoReference: "AWCwydhdmywXmrrEBVfu7X3kwS_KmzaoWRDQ8IWtUwDczwZkyJxwoQLaAUtfF8GcBxWOPeDBvtC5Wb8SIb8WkHDWHtK-Uu3sRfPlEUVnnIcX-zS4l5pBcJgCLHC5x7y03aytAv3T4txirpmJwihmFDQtQdyLj5gncgf4k0Yti6cW4u277iMupKNSll57AR493kdaF7xPeU1uD1YZexnyZdgF4sJSyVJeJ56nA7A0Kva-wRQmbEu4cI_JYj30VzkWfOLOQDvpihPcgqAXWhYYlT0hCvOfythxEj2ZLBsfus-hX2oFIyjdGUggyKpbFfh9-SrXddezae0dCQjpEIL703V2r_hkyuHRM64sTm_uqWbmcZ6CKjdGRwIUmcGpz2f2mFNZv5OZVNYZ4r36MF7LsfHdsBIOc8-4rewcXUZ8DCZ4jfhyFDBWNh-FRtd3gZw5gTtB", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115646844448725774155\">Sungmo Jung</a>"] }
        ],
        summary: "소박한 분위기에서 즐기는 환상적인 맛의 버거와 스테이크 전문점",
        updatedAt: "2026-08-16",
        highlights: ["훌륭한 조리 상태의 버거와 스테이크", "소박하고 편안한 동네 맛집 분위기"],
        tips: ["음식 냄새가 배일 수 있으니 비싼 옷은 피하세요", "배가 고픈 상태로 방문하는 것을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "버거와 스테이크", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://steak-cowboy.gorp.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=935240540829064387", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%9A%B0%EB%B3%B4%EC%9D%B4+%EC%84%BC%EB%8B%88%EC%B9%98%EB%A7%88%EC%97%90+%EB%B3%B8%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "리쿠스이 해산물 레스토랑": {
        photos: [],
        placeId: "ChIJm_5cUgDnAGARqHylqTyI5qs",
        placePhotos: [
            { photoReference: "AWCwydh-GEQLXh9k48h2mPA4NzCsMrcCiq2whdUOoWxk3jLIOOklxjbslEjm-btjeK6L_dWARQivU-n6LbB3Woo7PEo-1pN7fp6CjLn5FWAw5Ry6zPIpB_4s7ODm6eJKy6WON1ZGnDBs_LlnSUFGSxhrVslKp5LPpLsz0zk2i1a-VKmUc9t5_wGIsnft1nbUWJBsNr6ETFUz7hk7ok_3UGd1Cfqnc8e9krGt0LttCNiYwImxNfSPYC4HXWQvpiwCABHCtid7tc0Mb-Am01m5QCeaqnb_GRjwkleCar0NFxl60Jg4S7EjNyKYixa_udhth9evgjDcii-oTBIhzDSSGhVpm3oRIN2G3UL-UPMTcRrvGqT_Yl-oWJtrX24uIv2b0gHeeRWpylO1d6OiKuzQjZRGAQshWu9Q6sApsBjIkrFafnmXvDAyh9ujvAkgXBgU3UWN", width: 1108, height: 1477, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109800469050661871729\">魚匠 陸水</a>"] },
            { photoReference: "AWCwydgDE1ofoiqa6DpNXsR73jCyiDMTUpBAfDflln3bx2lP94HZ3SbIk8eyd6t0NrgCnyDEa6uPijoIDK3u8BDNgRS17SQH0-J6wygMbAc1oPrYaKsqQJkiSCfwiiuRv04dHQeDdCgIAIClo8pT31Q4FYnPvYGhfTI_rOtBSgjlxikYPd5-r4PRW7lB5y8FYlUlh0VPbar30ZTBVZcsC1uJ9kFQTUF-bczjw2d34O2BdPjwv9DnTmfbN77AnkFIGmH3n1gxexKUf1Dx_-cw3xZmvxatc5vW-uaiI66Zg_dUFiGy4dT-nAqx5nObsXrKHnSOiU3jpJFY1H9ql9f2n7ed7HojV3uC0iBh4Fg0VMCIbdzFQqbtIAyI7zsDddmbfiU4VYyW7ZBkT7BQ3SHqJnDIJrIbwtntNWsocehLV56nulHm27c0z0_mwqmJZSDSmQcI", width: 1170, height: 634, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109800469050661871729\">魚匠 陸水</a>"] },
            { photoReference: "AWCwydi_KysDJ9RAmWXhZfsay6sC6qZwPqiHXWvfuhVn3YzJCVCBN0Qtp-vmEsgvXv7nEIOu8UDbf2YPrsB-4h4vQYbtag9yuw1NuFSGvPQFfP0E8tVSQcxrnq5oPBRCEcXT8xSC7Q6EmJrGOJnOgoasi-hPd2x7gA3qlkY-MbkBUDUHcpJ9Ab03rqQDVww4dvgUlrtISQ3y0UxdCpCN2EtcHeQltI7vHMRH-I61xNJT42ClaeRjDQwRbN_i-JzXPAayzKwM-HIYsXsFvnn_UPxT1CrrwplbK0-sgy3sATPbnNyffocUTFd-XiRiwJDJYevRCQqVRKitNB5gnZciGsWzA2zKSQMGc3kJELRVHRGJ4aroRj0sthI2TPERKX4XRKFbtp_BockeMaofxNpNsX8KJjj2xQIgG2HnbY7yPVKfwSWYFG_xzES8RcRMt4UgqGLV", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109800469050661871729\">魚匠 陸水</a>"] },
            { photoReference: "AWCwydjR3puNswuo6AqMGbFcZXG2F-oCffAIY_mhY2T-DV3ImYsB_PTsq_LahLk61F3dLhLbfbQZWZ9jfV9Qld4z_pC7QInt7kIt58djoY1ZPyz5HkmvIMV4VzL6OpjAcgt5A60eGxQIYS9SIwZIkrVsYnCSAKKs8JSRCPlDyi61I6tie6lfJy9Y7JDcjCy8gN0IN5BIJMPBnG4oCXVbgizfV6phtD6pr7lmRtdsqJ35jZwhlOforPewwIitYpnGebPw7_4suKvIWJzA-LHEJc3h5mJkXr3HaRPurSNqQk33z8QjPd5NFUN2-iFGE_2xG_ffzRGjxvzTz2IrbaE_QwNAKtUwLfgnkybQkiQwt6e0kw3GK878QbYI1e6p86kXsUbtsPTfw6-zA-IMJnzQg6RM7WCYRAhyTolK4b8sWp4mxWn136vSUNLsW6C-ouuxbQ", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112073610950526278430\">Osaka Gourmet Journey</a>"] },
            { photoReference: "AWCwydjbYMGT0vrIQXEYg3P2XJpbofXKlEDHd_31vDF1ZIqKeeI6l-JFioRjAFx790VoCZqaBJFcF2MdOTG6aYiKs1Rsgnl24-C0lvSLoKGrJMry_lN-Svo7X2FC2JRG7zCvTBuQFP2bUug5Wm0TdeXRZUuaYvwaZ-wX3xbgUDX0QQ5i2tloujptv3yHhSc1lBO-TymadfWyTlAPv0OoaoPTWLxGzdwIaC-JzZ4fZHQUrPbm2x3IkqxVvQZWEDd8AQk3Y8isjCeOnSLYwVEWISFOeiCflsSo2X7l6jLRUuv8WwxelNSQlYyjRLRhFn4MYo00ohsi1le8IRRXWLq4sC1eAHD-ny5I5y8L_s_6hYOLwSD_nIiDqhxtBSxFabyHViVS8huizcDkqTywi-E01x_voZjxKBFNWOuwtll3dgbHIy_ttoB1bvEQB-HtSCXpy-l7", width: 3468, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105751870567546677921\">もたとり</a>"] }
        ],
        summary: "최고의 신선도를 자랑하는 장어 요리 맛집",
        updatedAt: "2026-08-16",
        highlights: ["일품인 장어 요리", "신선한 해산물 재료"],
        tips: ["18시경 방문 시 비교적 여유로운 식사가 가능합니다", "음식 제공 속도를 고려하여 천천히 주문하는 것을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "장어 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 4:00~11:00; 화요일: 오후 4:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12386737619254738088", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=RIKUSUI+%E2%80%93+Seafood+Producers%E2%80%99+Restaurant+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "자우오 난바점": {
        photos: [],
        placeId: "ChIJoZwKdxrnAGARwVXWh7LlqBU",
        placePhotos: [
            { photoReference: "AWCwydgtFFJSsMjT5KdiVchSW0GZV9TefjyAgX9TAVWLLgDmAaAZZlKzvTtIBcYGN1UrvXZ-yPNgv1H_iPPSo5xOAxTY19GqHh-6ngbRC0SHFI4KWCU0Ep_1Bx0s50H4QjxNTDvnjjRVVMRUvrtEUSuzmhdfPFMeg0ziCLwroDK-Zeik7ZyD5W2DT8Uwd24v92lFsmP9gZxSxMZWDyibcgY0HtsNLEKcJiGNlH0CWkyCEXO_Dk0hDYkw32qOygYJckpNlgAvElCq3FK8jpmLsUKwnLLPM53NooTEOnBnhuJCws0-fy7YAHxVQyMA95Tfw9HPpF8lwLS5_khBIOzRM_SEfQAGVVzYNEXYA1j5a-tQ52McWhaUEB4T1wJvKXuQX4-xys7KDrPbaRJ7nWQbobE0Wg1C3j-9hDpdVC8lShhxjYS_Z-pmU7caQ5ZgSCBe2a8D", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112739198574760857998\">釣船茶屋ざうお難波本店</a>"] },
            { photoReference: "AWCwydjsHjh-Y48qpxNgaFIkgG0R1Y-gwTBop4s2VsNAzh2O749e_IIsuxkle-3FdQytSlqOkDhdndG1NOPUT7R9MF0FPGdITtnVCAnrU2BP-LPAY9KodCp7bzQebw9cNUEE64j2FU7qg8Jqf9AFD5CzTFBTjaHIiSG23BfwQCdxQPk6ihFOnjaBqTh6ruV1TwG-bFtBjYXfMdLGcDCXT7uASfpoNR82ntifCP98e7pXjRTp6DMGbNlcuVWyghA5glE-Lm_m17eGQbptwzF5K89u2axLQiPZkY8isxwfYCKOX2-Y0hO703IgPmIx4nQ2wVs9vNAGkArFQosmcppSbHuuSsZ-ls7wkf1dXZlgebeNHHYj8313Ev3C-FRJ7q0EgWts8z4WUuLfS89Ov2ZjuSE2nQIomNmznFel-rMcwTvGGS548PWDwVzcVQlnZrFH4_ip", width: 1477, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112739198574760857998\">釣船茶屋ざうお難波本店</a>"] },
            { photoReference: "AWCwydiGQS2O4n2mOnb5zDDx6JC3EK7VsggN2aj9U5FLi4M711tsIuX0PxfHpb3D6k8Pz9IVECKSQlunaKN6GDmPOu8aexzYb23SA0dJnEw3lcefbezEwsp0W1lqFMs-oLDwTvOJLSLsJ8eWXsmaImwaX5rMs_zg0CCTExtN2fxb2J-Qtfls0L0zqBYwoUn6vjtapIOJoyMnsQendqdOslMJAM71rRdN6lJsWW-dA9cEYZLeFT4Yi46DXROZjjjkoFj6W0HFlPAYqIJ0E_F3e14DQKK6NCBUmjpr88MagY_AfV8tW3diHpV05Z7fNzU71ythf8E7HTGNtVmTc7fPzn4KZ-wQIklWcy0wJGEsq4Os3iq4jFbuBhr87qiw8E9qEiGOPFqrjrmFLGAv874cPbXlx-_4uI4hwJYahZJIf1fqb9G92qzvSJlasT9wBNI8", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101534009401127717286\">Jodie Chan</a>"] },
            { photoReference: "AWCwydjR1VBNz386FsuOCU8vdxCZpzSY-U9b3Dm2gqfR0NNa1AQtRcNF_H-sau75pNVxJwnH_jefT52dtWirmGmzJ6XVrNxB5QPxyzMmk7SnUxlsx21DcVzkxmdRynqjIYKbG4d_xkQUfCuk3ma3ClAz_VFswH4HnMcf-Uam8yENGy-W74Wry4XaSlruGOIkKQvEdp3QJzx1SuJsW_8Buu6nxUwpzwzJ_JCujYIWuixiIeUkZbIerPZ4co3YTVn1wVqXojWHRH6Y8ORG9scsrF-6NgxecdZmggQ5SoxWoaht1r9i18R9Mcy2HyovfAzotE7euknzwtguAVduDHqW0WRf5FzPnB8eH0jabZUE1l3C0vm41SKxkoZhE-UM3W7ZcIpvhn95eG1VqWcKKaNYuN-UWm0s7mjo-Jpcpn8x73_d2hNsB6NC", width: 1280, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112739198574760857998\">釣船茶屋ざうお難波本店</a>"] },
            { photoReference: "AWCwydgAO2mnzqX2IS1akxz1bf2MKQ70SFEnb58hVh_kJ-jZPHODz82Ut83KiNstozryZLOwthQ_Q7JplYHGXfgowbZm3CmmH1LKBfSwz0VrAKUjP9q-hbLOzngTQBm0tuBXzjaYPxZtHDno5GfcgZgwJLwuqTegND7udSDWFFIDc-Qq-b1aceMhboZu_sKUYMrm2pG8VrD6XgwGZIzNrsrj-wsvYgcezwnfdMyTtt8p7y2VDzI_nVUjAT8nzYDU3l4PYli2T-4XKJUFkYYRsc2wO2aPdYMpEecKAIOvMT9zL5t5lmNvFG_sGIvp3ZpAX6Mwcr2syh8kx4FaceWCL7dR9JyyuxQ0PTAvSYYV_Y6CUqQfJMxCwHo3VnTmH258k-ptBhVEzMVSXZj-HUYrWo1ibBjZyD46-ljQHhZiH5Ijz6CGxLviIz4YmmoFf-5ZD_-u", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107237841218421446434\">Irwin Hau</a>"] }
        ],
        summary: "3700개 이상의 리뷰를 보유한 신뢰할 수 있는 해산물 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["높은 사용자 평점", "풍부한 방문 리뷰"],
        tips: ["주말은 점심과 저녁 영업 시간이 나뉘어 있으니 확인하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.zauo.com/shops/namba/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1560749825829787073", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%90%EC%9A%B0%EC%98%A4+%EB%82%9C%EB%B0%94%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "모리타 우니고로 오사카 별관": {
        photos: [],
        placeId: "ChIJBX6ADmbnAGARqBtetxlRvQM",
        placePhotos: [
            { photoReference: "AWCwydhDQok92gaY59dyxzltNCy9Z8Iu4OrH-ULnyowF_MdZer0h0uPPZ_RkcmMnl3pYGBeoFU84gZX7MkNs1DSi_Wrn9YJ1oaK3uYz9jRJmTnof8rr6KfBxAkFDNz7UJhC2qMFYdy3FT6G2jVwm8WRmv47_-mA1wUAcGWy-LC0X1bnCeBAcmJ4LDVByUoYpE3SCvngfgLVGMk80d_g2SBX4iSd_uXQIcvG-ZW_wbDugMWPeoMdDeR7XndU1Wc7jW9GzU3RzFwS9Z9wRLtuDyx0h4tFUiozdbjeVQVmR9tVoirTAaxA2nSf39_8fZ9UsckMZ88cLBhCXoU57CCuORL67A_aMCewXlXo4TuSt20Na-GnDxR7SRt9b--sJcGkLRBvduFp_95fb_-ayXo6qTMSho0o75EWcm8wJQiaS9cyTrQrdaLU0L-Q3QWNcQAYApg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110879378583909673687\">モリタ雲丹五郎 大阪別邸</a>"] },
            { photoReference: "AWCwydjpRqtm7VGXwN-PSg7xMMdq03MEfzIPPt3mqEZNLR_1_ShwXncrXugCdjVtDV7djm2GOxiFKd_eXmo0qMMqoETE-oVdXNkLG3EI2qzZvvIq4_A0vKsbThqxqkSo4TAosB-VOdsEiGmqsDTwZMYlBZ_jNYA57ufW0w-PHE6y2yprI6taiwVOD8qPsNEzzfVI7E3E8MRdp_VPiKid5MU21oEHIEWRK8yvQLNz9rN-_gYZlw_qMp-HemOtk-HzorWl9f84p2Py5apcmGqK5uQ53cNHY64JRXp1Ed_1PFsHerk76ofalUpM8jmGWaOQEF2xYZneEA3djBxiUU6-9Lv_KdxvQXLDwMXChESajzS3hUl3FjaNStDZ7OfcJm-8cZFtJhirNO2VYu6Xu5P5tp0Dr1sowBi7qUrKJ0dLuFt7to_QRW9Zt0mhYwdwyLXBzzwy", width: 4500, height: 3001, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110879378583909673687\">モリタ雲丹五郎 大阪別邸</a>"] },
            { photoReference: "AWCwydhotYvs-TwkxA1x-b6CLnhu8C16RrT1K78vJHIARQSX8tViniX7fNzAeNTFylvpXj_Fybi4VoObdbEcfqFvy_cKJCn4f2FkzpDSyseuvMhCN82ajkIzZ2yB5eUZk3NvAKXkxKexqgTMyBeNOgxkFaW-7bTSYdoJ2v-RkXEKUWpmh7MsPFkFuDoiVq4yCgSYT-2y1fw6DGadG463Nyd2n5TTd8P0G-kKjIgqsHL5Kd-HcQG1hhRwbnTr_Wn99M04qDxegaiKJe1n_JM8u_jHv3CwNBd3k4EAEV8a72QvcJ9RQN1MCm7O2tHOV6kS8QBVhoYE-g18D5-6jr_6PHyvagBfPVWHDI8mzvNoYz7Fa3scPGg2KdnxnWXjHqBoO3DJQHDqOyMa379goS5m9ZGFcWRbrsb5bRUWNM0yBK24J60tvlRM0ZLfDTBpcylkLNBp", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117526187552772436951\">seohyun Im</a>"] },
            { photoReference: "AWCwydgO546r8GRRIwIZw1Jca7v1r8_LRCl3fvY5OyVPfTURuA3v9PLDe7Q0oT6aaEufDSrkDlIFi8KX8-NgThkfM2p-etML71whHb1rePdE4eTIgkFbDljUQj_wgRMu_wB2heqNiDD9WKezvAWzy3rP0BmaOyHtc8pY_NGQE2msVUioUs56XLCj4C4RcWK2Ox627N9upOdntgGkgU_o8VPJx8roGIuJW4-lIjTaMk9NgY_jNiYst1SCRdBKuhPaDCjQyV1mJiD5vqpP_TZUSAURMhVTp1PlnN6mVpECVcdDt-QBI49FfVtOLkSoYRq7pDFMuLFU6ZuDvv4V07msoI0RziYSEf87mhuAgxghUbBu8_GfUFZwoipdM9-b8yGII2miYk_UphpKkPc0WfpEBQNWFF8J-tMlCGjOPBWS0aOJhKARrZIntVkHykfrhVjYLwwJ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106933288498780958689\">ali</a>"] },
            { photoReference: "AWCwydhSMljKpC3ed8AD3e4JLAEky_QXKI3hcH3XHYoAI35GfTduXeThR5XeCU30tAYyTZziXsJ6bEaxa-ctBGMQ65ktwJnL5XYg9WwAUple_R727WE9OaXQ7VyMIzx4mv6XNy_kWy0LkQpcgDO2tzdQjY93cGSZfYHXqoZOJrtwaRwBtTDREZje3t0DTdtWR3y0PN2xeDmYZDykn7mAeDH3V58VEC1k3IqYf24BhADG6ddVXEfdQNRsEQ1diGmJTdTa23qm4-qfU3LJzCCtKC-2hdLoTpBpWa7Cskg4xiln-ZIflKs9G1P9twujTgSsRYvTV7pFYgVZ2_9VyOwnx83SKNeDWrTDJoXUAYJSJ7q7Qi4VCJ4B8SF1rqraton-LAHnZDx_C8RJyC-wzQeYP7JsuSSc8-Ta8sQh2XGKGX6n7DNKwSvZXry9VZ1gdZzRAVfg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109699053111498210934\">avery</a>"] }
        ],
        summary: "성게알 전골이 인상적인 높은 평점의 해산물 전문점",
        updatedAt: "2026-08-16",
        highlights: ["기억에 남는 성게알 전골", "친절한 서비스와 아늑한 분위기"],
        tips: ["코스 요리와 잘 어울리는 음료를 곁들여 보세요", "아이와 함께 방문하기에도 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 코스 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00~2:00, 오후 6:00~10:30; 화요일: 오후 12:00~2:00, 오후 6:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://moritaunigoro.com/shops/osaka-bettei", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=269460723604528040", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Morita+Unigorou+Osaka+Bettei+%28Uni+specialty+restaurant%29+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카니요시 웨스트 난바": {
        photos: [],
        placeId: "ChIJmZ6VNRLnAGAROh3JvKJDBPs",
        placePhotos: [
            { photoReference: "AWCwydh6qSCsKRERNrmZe9QAYGJq7w9VW1hzUw_OrCmabz48kbVBNXX9pMCTK6S_3OOYKATcmbyVROeBGaBqGAcePG-3JN9oWzqne1_Qt0_hg3QkBP0C4Re1hakbqHpXcyVMrMwfRpqYYIvJomn0OXVk-DhswwaXmq-PtxEg3_zaq6pQVZPSpeJXLfhi-Wt9icFg3xSBMoWHtcPc34jKMTQ3xgzyuPEWiKrtBfi15SnxEuS3lgrzB-3xmzvdGRrBFyY64Yy98A8rivQovKs_Ql-X05J78bdwk7mpt-ZiDlif7EakO9k4ElP9Mm8p1D_e9H54t1pSpC-xEvVc8Ss7l2NC2DwXM72I9ZDtUU88FJRzGeSjhZ9sFWK_zPMJohj5_FasXx0Qc7hKQ2xtYLZG3iqsVTgFSKg8Og3G56KJFwY8mUXUzLSRkr3WnenOJFl5pfIB", width: 1477, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112426424655128506546\">かに・ふぐ専門 蟹吉WEST なんば道頓堀</a>"] },
            { photoReference: "AWCwydhTEqXiA_le35oXy1BztKRBfutzD_RWdlyDKkLvZw2OwMl_sP1tmZyQuLvOnNfaA96a9uLEV--LL10yTx-cBvAjg-ogmboQwpQ9YjQvuOyg0egO1bLH73ZOFZ1Y3b32lwntVUnTnM6C7RKoYH-jnOWN-tolXKEkaK0RLvhjA887xm-m7mp1wF6DqUrYM_6lxkEHerqRYxI4aICKuL9-Tx___aech38-1Iv2w9WsQ_10e3qDZsgJki4S4RJNpCt5fVESZu6Kuzgzo-WqhnK3phGtcSfIKz866S4tqcvevfnMZ2KiwXg_YUIOmgOyhJJlf3P8dY8T1Nhun0PFsUGcsnJAJmekPR5W0Y8c92SRKsUBBzISXpBhzU9BUnS7WfdGJ2PBF-9ZAGovl0i4w4ZgFWNFd0XHTUZ8MBykwxSL9QPCUydxHSGgG7qnmVYs69IP", width: 1536, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112426424655128506546\">かに・ふぐ専門 蟹吉WEST なんば道頓堀</a>"] },
            { photoReference: "AWCwydjBmevVd72SC8OdB1FskBfN8O3jMyVbJWmla3fOnRlbzOjFmV6oeoglYxH0gDouZO5ZhKnWdrriBgrWgHz5RggFFRslWV7dLEWx1yS5fAh7p2ovEwoiPKHDaOD7TWV-Ih2OwQXbWslkIL_9Sjne7hrcYH6V0Oj4WKSgBbOUE0dqiXUyNvpKpMxwJ6BeFmA9kngdUOZORQScRRUipysiS1JEQuzX03FJeyGE_6bWC9l_pL-OYw-qhktOtW-osVkGI1s9kNVtO5vfTd_-PQodRp7NS26pUe0S8alwyXqkbgfYCOaqnOwjYioYnR5Fd2Ba2koQ8XeAmvVhNnzhFJY2Lk-ghAby9ChbeYDMmWH6FQgGvLaTnlCXQf3xLxTtfL7kxLgJynS3tRAeHD384QS8OYH3YIVteW49oaJS60P5IWoySJ8CQgk3ZBDo4U6dWA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103354072876101628193\">Adrian Tong</a>"] },
            { photoReference: "AWCwydhOQkti6ma1WGkcxM1eoCvkHA0Ja_y5TK2kxa0uwCtfHvUTO8ZPpz8N14AdwIpixpUMS5OeWR-E6jRp0u5bkbBYb5HbsDsxHWhEeBNJTYl1b5IgB6PF2mF9VUx9IMWNv0otiDP9LKFuKbI_t9o-f3CS5TaZHD3TAy8G3W_Q5EkPpSEeN0Xff-Tvvy7Ne53rCx1JrFnFNZmkMGW0jCS2PHdqrltBUqGSzHnseBLjSVlCNb_QdT2M9KCixDXOWjE9VP-1uOYrScl4xxftTTIdkR3-Fym2S3QsGKZO01_NkABhSyNqi41sieYCxKN2xrUpsfxLeoXd0z4pivILv1Mev-ZDVUH3GhlWrCxlqGD9TQyo2b8R_jb4E2ryf39kdsntEKMlppyJNX-d0hWM0qAktKybKJEgDNQhE6Wgjnez2LWgal0", width: 900, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111630629853621848888\">カニ・河豚専門 五座ふく 道頓堀</a>"] },
            { photoReference: "AWCwydhdd--PK8laMz7_cONUsE380-xGNhQLYpTsHqUeU83PO7Qg9jGFlgdrzuNowHaxMVnneqYOrv_zI_18jsyKRDqB4shQBN9IZmcSXo9n2XXh-h4Z0W84l0tyXRFfWueLCEdnVivFM7xdYwtEQEMg3VI6ACuWYKam82yzRxTWLQz5xZOeRiZ1FjkRaz_fZzFhDLFjXc3Ju9rELuHqNyTPKwoElOAGdor-lC4eEUYdQRRrI_rnf20EWxi2ZhOPhAw9wKTxW9dn_9SOk0p81uAKbcGGR58Kj_hkzJ4lHy6aGmYYWeo08tgt93N-6qOxkd887W5JcHWiYkfMQ_WJG4_PTnbpHfqaZnn8IExnDy-Hn-boraQs35m7eGo1S7UEhHdmgHC4twRY4NacYYBvHiv-psp51UI5ds80I7QPEbccd6kAA7ngp5lvD31KZ2-EY5ov", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103354072876101628193\">Adrian Tong</a>"] }
        ],
        summary: "신선한 복어 요리를 즐길 수 있는 오사카의 명소입니다.",
        updatedAt: "2026-08-16",
        highlights: ["신선한 복어 요리", "오사카 필수 방문 코스"],
        tips: ["복어 요리를 처음 접하는 분들에게 추천합니다", "넉넉한 양으로 만족스러운 식사가 가능합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "복어 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00 ~ 오전 3:00; 화요일: 오후 12:00 ~ 오전 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://gozafukudotonbori.gorp.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18087656369657814330", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Kaniyoshi+West+Namba+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "구로몬 교라쿠": {
        photos: [],
        placeId: "ChIJbQsZC4znAGARokpLSOxYk20",
        placePhotos: [
            { photoReference: "AWCwydg0XL5OiEKq-qfKa73MgmJswqrQ6rQyel3B6qr310mU1Eej6apSKhZE7pgoeaJUssQSPAzT4m8Y17qxCgV5h96_GENJLvYUvLWfHByasYEP70s36GQ1SMPe4axIiXn5kKU24ur7hZ_5dadg1eGUZLOdTHpSrMJql6pE-oqcsbULRWRbJrfwF-xM9xFCuwEfnTrhlewFnS7_clZo53_aUDuYKXq-3d0xAnGAMumG8U_-uuZt47B-kLWkgiPbyu9q6ybqLV-GFqLQdvuavZ-EvfY50-2wnecrWn7RlVNVV0u5ChVDpgDZ3ylPD-SJaXXteqm2t2_ngcO_mA177ZPe_fngf40q5O5gQ_i8dVtzVy425Zq0aWIc_vzpJxYYrKozz1qHGDOBZuBRfFCcMkuzxqMmNd8tGo8WIalNNWvkpcs", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116196861898254528254\">黒門漁楽(黑門漁樂)</a>"] },
            { photoReference: "AWCwydjTy4prTNnpRTj5Yn7kRQYI5Eb2bhq7bKCtKQ5Buj2h96dxcY0cITmNxDIaj2RV7K-KLmz0No_f72zwH0E9y0lQcOrkGBNRhBdAPCOIgsjF8QYBf_2cNhnt4TR463yJ3vxb-8oE2VEtka_zLE7wVry4j3IrRqIO9SJaoV3NWBLqeSQCmTvHNzo1aW2TLHe-R3bKlTnsGpfN5RsvHjKV3RVJMhhozV0BZVOUDTn0KXgSP4DSrZRfqctC9_M1GwYePLKwRXx_CDJ0vH2Jd9scU8sGsirYeCJhu0IWWjSLYfLnDs1QBo87tQPgoCPjdMPOvKZC_7xcswtrhGIqFMlaJ0C4TSqN8SDyrTNpgVddC_wuJ_MrGDu5yun5HhJdJx1NveXBwSakQ4pPzcRUwN3kk1yrDLhRG7KjIvCycymYIw8e0w9n_f6LhKC2uy02zw", width: 1536, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116196861898254528254\">黒門漁楽(黑門漁樂)</a>"] },
            { photoReference: "AWCwydhGx6jf33GKH11Lg30C0IvCyMRdAiAGMa9_poXhqaXKW2x-3IU7IOQXmiwA4gVp9nwn_EB8VWipBFq5WQ1sHUn2D5qLcRtBnqsNf1vITRFKjoSJ00EeHvcGV8KS6CLdwHr1yb_Bkk2jdKmVM1SlLWF9HGW6jksJbI6xGAo-Bj8iiskddmtFTR9VotFpjuxBGb2yh55mvh5N7t3LlCZBR0gafKE3oM4Ea8jhLkkXM1jB8IV0zRlvCGRxl0PjiWrTwYAyRGxi0QQcbxjP408zFN0mr0rN1qBaZVrbCPXjc9sduCyIZditcj6cD8cSfJAF2vjJT08t8tE0rcJvbJS0WZCq7pBNX4HEjvu_FpTVIqZY6uHdBhHiGRnrOwlMaAJC5bY3y30Mfn_BEX1wm_T5fORfvFdx9h-mxNzS5KJcu9YbtgzhGYvPeSTQf5U3gw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114050591603255410535\">emily lin</a>"] },
            { photoReference: "AWCwydi6kNp7U6MYShpRiCxlE-IH-mx5kaeAmfZ1AEcSVXzqZ2A_zOTIt2ZV-mXkSTuTuzidHVyF2X6U7mBK_Qkn_Mf19gJWHZysvtNEtTJuzk4MwGnhmH7DdSvKkCggSZOTCjMFF26GUSRVwHGdz7gXtMkCX9q63laUHxlAgmOQY7poOYlcugH1jlphHpvMSwKFaUkCUvgMkHKQfomObyDraeBnT4k_zui0Ylr5dG3Om-G726gmTwWvT03UY75LlNhrgtQgkh6AZ6YdBBqIdNOoHAEvX2oBTLG8ZUIXcfF6gJwNNaIlSSkYxOHCaQxEnQLEPIMeX7TOHFf-HsCbpTc__FXeWJEhMBtsA7TdEHOZU8J8hzRjct6H5tIIOdMZG26N7u1lrJlqdLERBne_q4b9E1xpxkcLBKeq1kaDDfDYyKmGq8Y22JrOQIQxPyJt0Jfh", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107452856481301272424\">L D</a>"] },
            { photoReference: "AWCwydgpjuLsvY4X--FrbuFby8Oj_D6HEh7ubJbWf4uvKlzICektfoPPGdic10J_KO19VHHZe2VBAvPUXE4oOi_2jtAd3MsnAWZI0t54kpV-xu7bDnR8zVYDfHWD8O96kFh98jRsgQhPGoHHsBBbP9hVaN3asYdq74ZAGMz7xShUdVmx26bEVCxJk32x_zXPzIEo4snmUxUpbXMThhBSkhEWGbgVFpqpMIcYg-kkvBgI_Xarw7wMztoSbMPvqg4Sf3H1Ws6WnMwCTL6Vbxf3tB1ixLVo4-AmzJwUJJDpVLIETgAerP8I_OqZBoDmiuzgR6i8hWwMkEccpF50cKLfHYzzgaF-eV4Hgxq3dGoDkKvz1UWPHXZ7VOjNoLMzDfzwwJ-f8DGCo1NxMYizwPamdBgcle8bwbW3tjggNr67f3o_VIVG3jHeLl3fsH2OsWCpXA", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101661088949542142755\">hirohumi inoue</a>"] }
        ],
        summary: "가성비 좋은 해산물 요리를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["높은 사용자 평점", "구로몬 시장 인근 위치"],
        tips: ["점심 식사 메뉴로 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 4:00, 오후 5:30~9:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://japoncompany.business/osaka/539645-kuromon-gyoraku", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7895752343559031458", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Kuromon+Gyoraku+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "마구로야 구로긴 구로몬": {
        photos: [],
        placeId: "ChIJJQdfHULnAGARqbJpqXMmuYw",
        placePhotos: [
            { photoReference: "AWCwydjjSNj3GU_ryjMff8xl66VmCDbBl572g_BiSYBw0ym_JnAEblNxew3OXf1Z6IC3hrYQlDUlMgJdM68-q03XkUleq_myb4Xrf9Qvu1ym8NAqEtX7zY776gAvychAO0hgxt_uIfKtKZulYZLKl7JOLG5kKW0xxi07oCEZaWxdhbJ6Me0QQhhMJZkYfwu61j5KqUa8_Td3L8zK-beAxuepvVILpdPwFkCvf3tnwJm7Cc-oLNIQ6SneVt6y7Sc5z83fvV2RlXm2pI-XlWVPruhzhGOtVturd8lKOdwX9MkMhyctU5ee70pJEME3Wrc6UlhuADyIqvkNYUoDASgbljdEwpDCFa_DVOCWpAkRPcyTR9v_L43nHMhLzZxnZ2tqP78UgWophOp7cAvsIFE4uxvxi0wLZ8RbPuZ3pEW378jqC5V2wA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116329730571067471128\">まぐろや黒銀 黒門市場総本店・黒門市場２号店</a>"] },
            { photoReference: "AWCwydj7kWRjlP7Ir-qVR0TsSMcIJfnqPIO9vc981L1EgYQpuIO9vasGBgUD8beIFYbvY29WG1f-X7UqinyG2oNqEPaIifgS90wZzCiyDnkgcDV85hWab6uWnF9QOF6f9oHvfBkF2fZzR6y0kmC0RnHJVPARAknEY5BKohX4_LkT9g2-JDSwpBiBHYMNMM8GAHYjcf-XrAkqV7faolxTXJOMOd2l7AqhO5LYIfqjiOKWiQCGrsqRyvx6IrADTcCXkXrtMyw9CWV0wdL0xoaUL_z0CN8eybE215KunZh89yJ2Kdfo8Kn7NrxeLmW_PwVOCVJex-djE7bzhRk0_9tpAhstwA5WBhgP8JzdjopMUEDyqsWl2rAt6DiwH4OZTcmzD2NOqFXEDqwuDxLHEJqVaHIKE28ZAoeZ8RoFhodLv1yFSP-svH88ZRuXWFtlbbKqrvz2", width: 3336, height: 2504, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109452467701504860987\">Ake Ekkarat</a>"] },
            { photoReference: "AWCwydhAOEP_M1OjR3Fmqcmpp6Ja5f1y24OnKSPUwOnz83PRcDwXG0c-jzoaEawMkLJJ5h7WhOduFDDZj6fU_MzNEVbcnF5MxG6jQhxwBJyJOIV7Qa3u_hN4a5Jxt3PnyMKAYeH9O5lPq2Eo0Khak9J8r8S_T3uRaTFIJLiYO_LqLj0GpV_FAjunh_TkzcbZghIOIuoV54DeH-HZDkcceLw0-IicyD0dLeU1YZamkcfBcW026nlWCmXKVwY0fgdVLmNOoJs93xDoJm7e3xeKpv-Ye43Aoin7__UlJH5IFWP00Mfi2wgEg7-IHt7GuRaenVrZah_2sDPqTXj9YRcjF1SpETd-U8y6fq30OXNm5qx4uKSmZ-D8ADUCEulDd_1or5pdjxfo1UvYQm3Q5k5vrHCQNrKUAskGPE4ZyGq7RwAgp_KGXjEUZQ_tybvDes9DjQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116140091681197727942\">K YU</a>"] },
            { photoReference: "AWCwydhFfY8eeq4eRQnOLfAkweQEKio__CuMfD-DU2c1xhyA2PwdtaEyILVY-130-xtpShNAJFhKkjrEZBho7UoDQwkahJBPlcGTmhCwZOO1of6h28jai6CCfnVs7on6fPkaHsAs3etw-CqUWOG7gFIbF66hVkCmI2Tq2A8q07Nkkoe80iSRrVYercKbAmwHNBJvXUXYgUTZKYTvvClRXOtHBB2JjhYvZUePwrhEDIuM7i1DGOfnyeTvdYjVmIkvtqKTphlfD03GI0XH3vaTE5vXiHuxx9CbKKDQQewdVHZjeW9geFheIq6bSJVAN8Iyd-xFHnn-2MTqO6L4ZAeUSBaxZjsIfk6ch4u8wgCJFtptkAW_JRd2KloXKKMnU9A45qjmLwhLXKTuKR5_z-1t0xUn8-ZGZspx3Sc_HHhgWHpawIUPjfAchhNulAAmca52wl9i", width: 2896, height: 3502, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116008936023038817075\">Pum Pui</a>"] },
            { photoReference: "AWCwydi0PovCoy1anN_415OvWGrDhQ4GjCiiYY6ZXY8gIccyYHSImpWJ8eoiC1Rut7WNgyW3fJx5gUUR_OxrS7hiu6Ltxpexppgq0MOg-LQdZ-Rn1-Q1qSrSR4tdIuIILFcvAY6__uTfhYlK7WTjrDyGpWzdAbc-tDO4aBR9_qq4pXLdowFK_tujNtiQVUsNH_zXJwMxzsWNr-TnqUHZ0R__9mlTL1oHTnKNYxWyQx5TY7FZzlelTkjrABwgU4rTy6TKXEfdnNDQy8UD7u9qhP1ttEIwotDpALe3jYFFveiAZ42Frvk-npf_S5SyTGB3-OadJX0IdiNiW5UtOYh07m7XiG_EvQhH1xx_ZfiPjb0fBsDe4DEuOYkZJQZCDpCjZwbPDdYVOM_cdYkVZFBpIP-eJP2s7AccmCcpeuq_Lchxvb3Du1huOtKE0OP-Ky69cA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116959071749709489046\">T I</a>"] }
        ],
        summary: "합리적인 가격에 훌륭한 품질의 참치를 즐길 수 있는 해산물 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["가성비 좋은 참치 요리", "구로몬 시장 인근 위치"],
        tips: ["6000엔 정도의 예산으로도 충분히 만족스러운 식사가 가능합니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "참치(Maguro)", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 9:00 ~ 오후 4:30; 화요일: 오전 9:00 ~ 오후 4:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://kurogin.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10140178314206753449", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Maguroya+Kurogin+Kuromon+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "홋카이도 해물 니혼이치 후쿠시마점": {
        photos: [],
        placeId: "ChIJk5VBEGDmAGARYFAXIW3tb1M",
        placePhotos: [
            { photoReference: "AWCwydgkEUb6fyIVe6AgLmB0UBtSSwnGSbcWw2ya5QsWLJ7gMBQpNjIRwI57GEVlai6DGyyy_hPgzT363KATDEEYbHgH7y3FnC4tMWvaJV7Eji-wMIV_2r7w_JOW9ugRNmEKURHWeHwFIKDPpakTxepeObhTti-C7K00pfTvkfUO66qmLCfBlDhhK4ytg1UN0nxGSJhRblBGTAS4DOVC8nXKMLNuHvxUy6J2OPiwhAb77cJCh32Asny-ifCMyQSiyZYMRFZDZmmMyZ-6pcG9bJEj4NUWuW1c8WoxeUNW0haF4iUEOwU69e--ye59nwW1YeB4k5aCmSHLYv4NxXiclxyDlbTPlTfzpLI77OW045oWLlYDfAPHqeSHun2FktgYgDl3KDgWO86-avGy3SeBFuxoMAuJSi19ymC6fJQ3UpBmF5EUPQZ5", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112407822149177529436\">北海道海鮮 にほんいち 福島店</a>"] },
            { photoReference: "AWCwydhzaMItFFjqYRAHw02WPWTQkGHrRS4cVB65pr52HlxPdrhAz2aTrR6XyneRNtmrbGfNnOx09PgMyKFVTsZPrhzpjs1ifShw3ePU3eDovynmREQK78hIwWLXKucvNbTxVrTKA03zMVPZa3wig8JESud9zvltdChYFMsOmhAjk-YaLil4AbHSbBTlVbnaOB2B6kD2-BKwEJkoNYCuAbd4WjdtVnROX_2BAHgSodEGwXmBWpe2bNi8kSHaJNaKK_K9Cu7hIC0MCT0Wu_E4VNdiGFVQK8YTSFAMADaIxUJdKPbVNFPaej1DifRoaqJjg_ACc6eK1RZ6e7jvlHrrd_wNVbPjOUG1u_E1ll8YeXTjsWdO83tNavZRc81LGxVwDgXBrCtf-Cf_t5HJQAejRaaujZwHf2jFp5wsmoxb3by3TP7pa7Fd", width: 640, height: 360, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112407822149177529436\">北海道海鮮 にほんいち 福島店</a>"] },
            { photoReference: "AWCwydhIIlp8rCcxOTySWzklA48zkJRRL1Mj1kQn3zftLb2nUd8LhU_Sov_u4ZQJfQgjyWCkUtSjjvD4zki8Yeu8Rg7UypHgVMk1VQFuuhCLCxBHQb-dAPSA6YTmfhCHoGcTa1WpGFKz3F3eRQtdBcfnO3lqLdjAqKTJmktdj44CiIz-pVI5e56mWXUPDFN3aCM20uMOx4jk2HCWBqvizy4-RAApk5njCkm21n4eIA3K6H7LDbtgNjtuzfvioANuiw-Gp5GUB_w1OgNPM0l9d-CnHO4qKdPYZFB5REkPlaMS2jD7DMiOj0_Cb_wGYwZqydFh8ckRN4QYRlRJelWU0G4j1TqrxgoP8fo2rWc_HqWJe33YsJWmboUBOgLwj_e9_5XpzbJwAT1XYgIxHJjEnqL06jYXQEMgvfnr1WlNAK9UBXSK-oTyqgb6dTFGiariHA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104880029706005572762\">U</a>"] },
            { photoReference: "AWCwydioJvpDc3EVWECGkJb1W4tlm6msM05UYt-73O5GuP8MbG6oTGe92hTeuHZW9hRvdlA6HzkKfbF4TDQiCTqp5pFqydI-nltY2BmvvGgckjTRO8sIkIO96kJubPIKxvnuhgM-R4C1s42cT9PEIeIs_seJgzZybKPWfmgNNbNVR8PuzJ2yfONL9G5RYghv-4VPsnCAIJ7sd0DsM81j0-QagpFhMOLTejZ4GGE6w1wq3PYjAZi31VKibDOxU8J2VGKBdwPryG3Wa7Ugx1BsMWPqfDWkVSO5UZbDWZcZGNeaDeLF98r_6Zq42yvX3IdkLoUi2CWN3LEzJqdZt_UCA80HYDFVeID6wlfqV9oeffAQWOVfE-8oJZrZHtBoiTb7j3bbFE06V5jSsGgWEcCQLpasNvaERpcE_Fq6RzDfjQqCR7SDcOQQ2oAb3HWXXz4SVqev", width: 1179, height: 1191, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112922077889364857082\">ゆゆゆ</a>"] },
            { photoReference: "AWCwydhoDSuxk0jbZCK8iNuQ16rMKNKPJcZAs58OPoOtDm6_0WxV4eE4XHJH2WB4nkHrFh06PcoGTSM50tNYfR8wrCpOOk4tKM6It8VPo9Y3HkQPpOd5uMC0UEXQ5ZjmDsUhtJo-SUuzYipHT8G39vDMNonVGfKSlWTh4hicmS1d9swV-NTYkg5hab_7lwQW3BbyMMNtTTvfilVY5ovNCquj3UkxqIjcKtvb5Mu0ttyuif7ZLt3TVola6cA-G14Xx36eWrMufI31AD0Tl7gXznSeyCu8wbL-i0D2MyDvfLU9prFhgmrfkMyWZXQb-3dkH7b-G-THjE4jp9SwSwK8jpK_pvzesmOR-P-Hngv0Z3tMHazmxWctucCqPv7xhD9igntdpL2C-1VQjiigHAqyWxmQe0JWStcg8LMsClflcFncmxguYi9_q8Yb2ZuNg3ctalb7", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104880029706005572762\">U</a>"] }
        ],
        summary: "신선한 홋카이도 해산물을 즐길 수 있는 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["홋카이도식 해산물 전문", "높은 고객 만족도"],
        tips: ["맛있는 밥과 함께 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "홋카이도 해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00 ~ 오전 12:00; 화요일: 오후 5:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://shop.ni-290.co.jp/stores/8", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6012285080525295712", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%8B%EC%B9%B4%EC%9D%B4%EB%8F%84+%ED%95%B4%EB%AC%BC+%EB%8B%88%ED%98%BC%EC%9D%B4%EC%B9%98+%ED%9B%84%EC%BF%A0%EC%8B%9C%EB%A7%88%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "타이노타이 우메다점": {
        photos: [],
        placeId: "ChIJVVWJwurmAGARTsl_C-Yn4ug",
        placePhotos: [
            { photoReference: "AWCwydg41axeasCq1N6YFRtzkqT2iIYtSDZM2jZG2NjZI5MmQWaigbnRxDkaezUn44WR6KzHP8SmrbvlaRyG---xs4LvBJ7Go0ArS6UyJNU1NzCYVXMIa3tIBj6S4yMypufPqGeZqVkJOGd6ufPWMrWBLAQht0LQEc3PYvMOw84-oPXBaXXrfazLkFI67l41tQGfL_ZZptZjH5cx-knbyxQ47nCHlHbbx443K01Xn43uodJMDyrQtUQ35HZ2X1Pm5lkz9FarGXlzopmHcwEBh78FsLt8Hrjc3_nkBYc2cj9t0WHCWIWS63h1r9os0J-GgPoXNUQOfTnQjuUJLmI4COEI8GBWdiTXniP4MWIQckAKbNx1Osqt6ghxEo0R9IklpGKYvbEhr0jgT5yTCp92NHxcvUutRzvfYrS-ddxwJaLQRODZpFzYzqxKhQfixn9rgA", width: 679, height: 681, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100911562207509024026\">地魚食堂 鯛之鯛 梅田店</a>"] },
            { photoReference: "AWCwydg6TO5ClICclBQ5yu8pGWXFUQLM4wPpOEVG7AhgCf-cA_GDc-s341WIeWb7ak9Snk7tWgtQm63LxWgf29GX0PoOB2iNSOzXRk-QeiTIc3hzACF8xKookaRdg6tH0PDEWZGzl0BlSc6kGw92KzawD4nI6icsjsBRdmQGb1ErW7KCRFSF8xivZSlJfSdF9LwxYb54-vpm81r_o_yn3ZGEeaqO2TEd0rO-Rr84udUXb2wJ2g8ORTb9EgNP1EeJ6o7FXr63lmqTeq92zD1NT26QEQfGX8bj6C-a4jcnmT0PsA1gCizeJZVf214CgEOlg0xSjkMAfJ_XyZHU-DuwGO-Y8xKkCdkJfUsj8KDDopQ2IJJKFgIVi2eMAY0RRGGIDYRPKG1wWu5PCKIf83lkWEzPA2Vk_lw3mzTOZvYH_CtGU6KPj95wJczNkPATsFRJpKHn", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100911562207509024026\">地魚食堂 鯛之鯛 梅田店</a>"] },
            { photoReference: "AWCwydgxTQ81TdTRuD2WdGxpscldQWInHpWLy6isZaW2tMHfx3JvV1PCGtm3zjIRPvuKq7jl9S_dYtEUBKqYXM0q5IJrMZXhjBxodKHvC_SCYav7ATZnNWiJ6rj_BCWpDO8eYKpZIJH015w9-v0x3-nz10CGWaPR04E7NP_WqFAAz0-E_DVbfWvJ2hMXetVohLvv8To2BRnK3cfpZYWFVsuNH2FAuetrsVQIfnXA_loHKRZrhdE3r8op6rV32ut5OWTtoTmj5TPEMAuEBH8pCvS3N-sejybc51ReACD9JkhaCgC657ZwnxmibYmDm-0peylagRRghNGID0rUoB5zxv77-lgi9BgmNJU2QW2AIWGWVOD1rU4_6uycOlDTGLh9WaYofC0oVe9QqV9hocCvu2z3cF1fbTdk2Mo_YxW6-rpV0vUS717PwFU7-GsrwWOeKg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101303652681877382666\">りな</a>"] },
            { photoReference: "AWCwydgSQjlfd5EO8Ewoy4L8jvsPSW-DaFcxiR4a3jop8EdTV8z5z75RVBOaJjMYnUs7SKgapNiIolNE2qz53Xk8lR_Ed8M-4d4jUg9jRKuhNUxjBpCVLk7pJ2mNWBPRVehzscJflXGWIICqB17zyd02SaIgj3pJoJIVhIIfpiSsrwHInC2FZL6Y0WCna-QnWDZLwn5R9HYGmFykcYmI3AmNK9nTjCefmcxsIcpY98--je2pdE2w_KSpzLWarWq0L9vOVnY550j9Unu8cvR6vPMDvljX4HpA94k2psobNIkeuoSzsdMxXQGJSBvY_Q_yuvjWF-kUsPG-5xfNzrmwBQPfefqz48TdTzRn18JfQIevTcPSHAosKIbLibULpQ5PRtc2CHNZTG8lW5niy97ClfoTpPQo6eiWaPYpFO-0X71DNjkgPEwrUICHcj1fpSvhzA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103152784687699537269\">k_s</a>"] },
            { photoReference: "AWCwydg2MflQVKCqejPcOwain7Is_e9bfBr9mElqVDZ_cTyLfT0EZ45nYl-3jA0QB5WDrNB81cPKDoUaU8b-zS39ofk6yL1TfrNEQ_1kYdYOoR5QKhEi3SQjTHxLBEiBqs2OmJQesgddjBlDj8DZzc1_RItw1odhBFW-mTIO-INaTO8aPaMWBh8TTHYHWFP-LCUWMnw3bvo0vGMjNCM7CQFjC0qIBg9ocbDIv-z8B7v0LUojsWfy2G30GLxj8QfBdZxRNTTQF0CosVLSt8b7o6cQAb3KHSb2HHNYr7kIRR7wJ1_loAr9riRphToFRTXNcfIWdyW4mORpoUIui_skH0b9MI1h0wCz3nQbnSEkzp1kMUpii37DN86g3MVQvTD_ylrcI3AN6K3Z0NfU2MGoh10BO5gSc2MHKR9rAuCAXhClQ_FEdCnRsC0QeGdhdcSB_zNM", width: 900, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100911562207509024026\">地魚食堂 鯛之鯛 梅田店</a>"] }
        ],
        summary: "풍부한 해산물 요리를 제공하는 오사카의 해산물 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["신선한 해산물 요리", "오사카 위치"],
        tips: ["주말에는 점심 영업도 진행합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~11:30; 화요일: 오후 5:00~11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/tainotaiumeda", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16781019030524774734", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%9D%B4%EB%85%B8%ED%83%80%EC%9D%B4+%EC%9A%B0%EB%A9%94%EB%8B%A4%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "노트이퀄 커피": {
        photos: [],
        placeId: "ChIJW5ZxdDXnAGARP5ccFn1G-Jc",
        placePhotos: [
            { photoReference: "AWCwydhQ_eNTnpl-qB1dJvUDxqV5C2ygjxbu1ay-Z9GRfXKXs_4IdAi4ldAnbRUmSS40-IO9scX3QFqafdkffttrtj0vFl8q0gjDw0U2x44TzahYUeSTAdKePoMtIzGQR1CT9Smxcqo5FJfwGVLKV2kg4g1JqkM9DivHs5peZIisrjwrUz14Gj4V4EdZe0wGs6uL-BOpIHXsfDf1Geg2_iRFVYQ64e5g-FP1b0XHE7z_sPJkg4g-dIERwCurw9nAXR8UVPPT3sribB-Pd7dWHjs5dx7d1LFGyohSKg-8AhXv4v-Ze6Qd_CyCoq--OUbTWTZotGkJGyrlSN2jhNHXrxoHlHyg-8Gpwmc9-fL0TzYus4p8mgPSDYu_nTk9_eJv6j4uX_UjkFi9xbW_S0Z8OuXdJ7nCB-wNaVNUjyNfkIBZMOeS8UmrhybfQgsfLDexgHtm", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115579841195874683178\">NOTEQUAL COFFEE (specialty coffee roasters)</a>"] },
            { photoReference: "AWCwydjO4K24jG1lUfeK60nTGjsdVv2XEaVpNGO6YzOc___Jbo0cW11T4ZMp6bOc-xGsP3PrC42plEmvpAiCBq_ZCrzsaakKh3MP07_-7eibZ0bNAj3FzzSRWUjJlmYVbIaAg9layZma6KyzLBYEK0MuoLGtlfH_GYLikriBIoUp7Xyw8vjLk70ZJIRpifHe_jmg062dgDklIZUN-2NzeAetPjNF19yV5RyrulRfATyoyLzbxpP-HpZ3B914qcWZOUWUZ-UHYPPX_I5r124v5Wv4LI309F4n_cIIGNVkoFMM0M-D1JP1qjYJBeDa-RnBHE0zE_8gmR6otyRg5fJC2DdCeQzcsxDVoF1lFvc3CrtOyan70exb_Wg7YZXg5vmwWFo29idIIjhgM0publUbIaKbPn4PPJqmWK4ARJwUYPVIdVzBRhkg_RH8RsEGu6TQh33T", width: 1024, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115579841195874683178\">NOTEQUAL COFFEE (specialty coffee roasters)</a>"] },
            { photoReference: "AWCwydghpQSlQ7HgRr-H5fdWgALEpWy822fNawIAOUqN1kTZKaxuJuo-9AEavSA3KqG95mYwOF5mDNWHLyxdAao0TK08y0z6PanxBGWw_2Vjbm6WE8yj6cpOGDp4pS-fXpDXbbvXgtoqS-oui1fCzFDQ1Y8hU_eMHyNWUubrn8sD5NE-umKJd5MZ0XuTSTvKipQilXl3xRLbpN4mx7L-kPU531b1ylwnXYzNN1AdnzrKeTdLdUjbUS5xzabcqfx2mzFx9_QL_udhbmvWa7y0CxlU6ozGgoZxPFShZ6w8tG3rTXh2jZDLACggd5DsARn5RDihsg4I3EAzyIIaKGLglfl6LP7m3zcex5lp2AscImOBtKk1dojWeWsj2Dq6JO2EyvrkG0HjD69zDbx4ALXn0mAAbdHZg4tvcn93oRRIlEZnfgaarZz8cxbu1FiecRYzywd9", width: 3072, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102873886716845845986\">Meryle Idzerda</a>"] },
            { photoReference: "AWCwydh8Ej29NLyQTg4eojnE5GOgQsuovM3sp1nXscBA2czruFyFRNELe_NZsJrJ3i_Ry3EDuvddouTQoqra6ti2s63qSRMYyw0XyidBbVyqwEQC5W9p0dZdkk5P95yYaeW15sNAnT6O9Fetshc0se8FAqxJoUd3ELK_hVy0Um6BlimcWiwIbNa47Y5eRI775O30U9T_IdYyqk9F19e6v2jz50p3oWkI3BmK1WCex3YN4wznzxWHNSZa3GEvuk31cC8xgEVQYgQwmlUXnWiT-s73mNJbNIEXWzcbfpBjO350nJnTsZw5z59R2A056XLHBc0so-5pOXgPLc0f-muIUao07-uRGDcZ50GbuxIw2B_fD2_MRWI8tA8ylKjbZNIx5RrgDEXenJOC08_6hNVFUTXxPk5yIwGHz9XozXOHFeDTOITnuvIOeoindSYK6L2mew", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106111165173682915634\">Bobby Hartanto</a>"] },
            { photoReference: "AWCwydhKrYGyFr1-4TpMlptXSO5FXg2ta5vpQY_WpvqOMP2mstbQzyry9NyT6hbDOcoHYMqJiTRd4D_jsAi9XzeDmSxqJmxmF21AXt05ketFS_rHD5jVHMBcHFl23lpb724VIHsH64oFz15fi4auf5XNsW-DPl4jxez-vYM3pGOVX5qur94JJxbAD4YEzYZOolY7jprM2nx6T_gx4bE6ZyIJfemOxllNgc-KzK0zPOhJie8C_kl3Dtgnbk2_1sTkmpg94MeXXMLNob3Oh93DDLna6sslsqek7HhckSoftxAQgiw_uGvbK_PNvq7HhYv4pvorczTDYI00AmRsckwcbXuPxFI85VAiXzqUJN8XNm6oBS3ViqBOm0dZ_bpA_hkSd9Ezgcig_WalqEOJzzQhvWuo1quJ7xgUdD8-_BdESqtFI-qZ9fobxBU7fEGyVisOaGVS", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109043515752937696097\">Supakij Khomvilai</a>"] }
        ],
        summary: "친절한 서비스와 풍부한 커피 향을 자랑하는 로스터리 카페입니다.",
        updatedAt: "2026-08-16",
        highlights: ["원하는 원두를 직접 선택 가능", "친절하고 따뜻한 직원 서비스"],
        tips: ["커피 애호가라면 반드시 방문해야 할 곳"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스페셜티 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 7:00; 화요일: 오전 8:00 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/notequalcoffee/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10950579997007189823", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Notequal+Coffee+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "솟 커피 로스터 오사카 덴마바시": {
        photos: [],
        placeId: "ChIJyyV1iaPnAGARtnQdmpfOLdU",
        placePhotos: [
            { photoReference: "AWCwydimlqoLvxJwY0xRyvzpjZNrf287R6O3IQLu63vWCl_YZxGe0H3VE8V8Q4nCQR62GKefYZmYMjLrOfeNmPKil1J3KXRjvjFlrPH8wvLqVcAaaL6ZCPcRqwhh9JpkH8hj83wUY4RZItMXE4pblfkkz3e4mrOpx3hCvHm7Nb4BWUTkSWr7L1mydGBo52o73bqQYFrkjyaqcXsrx6I8MQcXLf5ML3yeo0PDVo7QMPPXwm3GHcKF_2_qaxWpdJ6_7e_cVTJwqxZGFgBjG4ulP2IXe_0pTJ57eeFZ866RH-2XP7A4AEZ469lsr4Ekk9b2hmOdORF_FS0Jo22fnaVBOJwSeY-I8NgrlYy51cj3go6G0V4I2KLUYKHwnZkFv7tbJBSXdJqX10phxeoA4iMOF7nMwdlbm6OxyhSKgZOewUSUHBNySbXOVfiUt1D4ojUz4g", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114563982455390110614\">Dan Yabut</a>"] },
            { photoReference: "AWCwydiLAn2lqXa4TLoHGzxsVuwfi4MzEHSkprG0grDl6Ut2dvcy2hfeXO6jI2Tece89F3PbQNf1AEKhHOP5JKfk8Fg7B5ek3T6o3_UzvLkdv24IXVjO9Cp3Zq3ZkGXi3jhFp6j7ukXCHUiCBzp0t4pr-Tzn5uSoPu5Xhq-uCsSeksCDkVpNxNeMokrEX72GjGKckx_umTfJ_fbPZsUdW2qMM4m3b5otITQoJaZxS6bGR0OF4rFMYla5Su_CgeOm38TWU25zIiYbkwH_21zaK2bL5YLttqnkLVEyU-n3qrdaAWOWxpu2S3IC8iBnSF7UPyhrWg9NIwSiy6haSWlqllBxZ0056rTscr1Tc6QZc1fO-IKc9kwBmmPAJLI7tHtqp4VgRnvPchhmA6laShxe-t7bWT4nqWCxBIQo_l9T3-K7_SQarPAv0JX4ptKd9a2w9swC", width: 4800, height: 2146, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101960377335631981243\">椎名</a>"] },
            { photoReference: "AWCwydgZD0a3BrKGo9SzdfxfXBrxXLPvyBHpwlFYuEucbAwwW7Am7nuGGmCIBaxXRgGD5aERnrtMs9jwXT72SzlbTvXan7T6EUaMUf1Dwe79MzsZshSNpwSfBX9sd6Jza5suJlBw22vGTzBsx3RoebP3GoHBPJJQTSmSEelPxYs-Yqp8iRZvkPhLRY7I99ubgE7rc_ggMuRxvFtOlUg9jj6FF5ZlNdjz2b0CE59GantSLWGBFqbT-pgDyX0KlCjebEdnevfbSD07VVQjusTMUlxW1CdCe_6jMuEEFMeFI5aBEznT3C_ZLzr4hOW3rroHyVvT605aLdppQEySU9qxDd1miNWiXfs2ckRmjnXNN-wQga1edG5vnx_lidqE2VP3TyHtcuJ66WADcSKj-Bpjx-RTKfNlxtsqze6vunq3mQdWP4o", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101072971870016756480\">SOT COFFEE ROASTER</a>"] },
            { photoReference: "AWCwydiWOUqloI6Yo0vGIqYu1oSwrl4DF0krBfwKFlj4s-CbHyqA8-8xu9sEy5ZxwkOLy-vjo6yuOeXd6u0bnZlYYNzKLTKMKJl-QmiAmROK5YVKzJ0rkfaBvrhsgTR5OMs0XaEGwBj-Abscuwtvk2r6H3SxaRShKghyLa473uFgrBKNKeE8XK0jsIvdrNy50Kf-PsDoKWLw4kVFm-8kFYAWVq4a5P8DEWCKocCx8x7W_3GAYydREf2ObVIsamHc9c-9jqlAZPrR-5Z1yXlUep3JJFr16MkwrAHHKZtjDyHeqIjkjV-uBn0osgJThe3Ou0O_37ZuI0qZSaGbyECm2RVhEp3FLJ33r5nC6cq9J_h8k4wks8duLLZ6VzqljGo5IyJdFPtivFJRpKSvaBr7UBEe7QExFzYMP2TwyHWhUY_IXTMGcf7QpqvhaNsD_i-3JfyB", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102589600265461025602\">布量拼拼</a>"] },
            { photoReference: "AWCwydjDgPkw6JU4sB23Qu0W9y6jAJMg_tWEyS5XcSoG2x5C1gF4jp7QyMfM1AEe89U0wbrLEgU6Ch-zgNnMyd9xz9FMUPXqAMNhz1Lu7mLBdJ8NVd5oUHkM4SKgPi8IuNuF0VgBNQ-WcC8oB7r4LrzsVtcMiat8vRoMTL1kaU2vpLL6zDLTrTYafPLSHRvCrzfGrrFQ_tWQol6MAr08jk94ilwhIzHkgK1F243lWmjH6X7BmgY6RcHMg3pIBKA51UL2_k_DO6VahHW92m86y5a4t-ojxX8oOej6-ap0HPr13ectnBph8x37ujhQHPDQVcT7ckiV2Le4GUTUUrpJBsTZFfZBFf1mShG_SW6KppdX8GY0r10MVyEFmLL8sAm5bMjzlnSO91Vng6-1wAgcmZHlweCzwZZ-MjFSBoycZr58oLFNvAw7SyoxEGgyvDJLwYvZ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109109905117955370998\">さぼてん</a>"] }
        ],
        summary: "바스크 치즈 케이크가 일품인 로스터리 카페",
        updatedAt: "2026-08-16",
        highlights: ["최고의 바스크 치즈 케이크", "훌륭한 커피 품질", "좋은 매장 분위기"],
        tips: ["바스크 치즈 케이크를 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "바스크 치즈 케이크", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 7:00; 화요일: 오전 8:00 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/sotcoffee.jp", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15361161054551635126", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=SOT+COFFEE+ROASTER+-+Osaka+Tenmabashi+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "멜 커피 로스터스": {
        photos: [],
        placeId: "ChIJn3HiogTnAGARILfkHrpMUGQ",
        placePhotos: [
            { photoReference: "AWCwydi0J5UTjYwmv6RlRwqsRLeXy-FZGYx9J38MDpk8jrPtMLqrDW-N1qB8_OYuLvb8HK1dQVMjlBsTHpXjvomLAt19WXqsNG09uCCVEms_tVBjcSHT02Rn2r6Z1dA6pSIKFDjEuIyQPN7h-AW2xTEVwtK1BRZ4igiFUcXvPGTQh0p7Yl9kGHrecCzqHNBCQ_-GJszOEbfVTyqvNWmTbYVYmJXTPmBUmDW4kFPnAWh8dG92NbpNIyNdzboRTUwPXyGSiFLJD1tyBRoDas2Cm9L78VAXF5imrRZMJWM-g3DT0dZY_lIfQYqa_47jVGZEkYYnsZYeW57mMMxdMLjsnbjmvHDkQSUygiNw165ErbU42HQ-q2MwpMW-KKfchf7aWiEsgYNNUkVK6w24vRm_evzBtCdvBW-gZqtCq9gDOLkWra4vpmSK", width: 2048, height: 1153, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113717211411048638777\">Mel Coffee Roasters</a>"] },
            { photoReference: "AWCwydjM6pPBTPlwK-rQX1AsoWu2CpAR9cBbmwEohsmCFUWGQvWHEQwKS87lGOyS9D-KYzc56lggL3CVnE-SCjfm_WzXBrWSv8ymqYDfCIquRfp9L4O6dPX6IbxJk74UiO1AK8bDw3abbw4861dgHQ8tntzIG4LcMC1jC7qKD3jDN3BarQlemNX6LeXRfMNZXHbkSN5T3HLFH6Qbs1AYRrc9jLfT3oAkEaLlidmVKiUfSQtjLmChDIEO3lGNbXARr-cOHhKWoPJSH81SAY9G0jMNf06enQjpndO_iLrUgh8Btj5KgFCVD2IodNn558ZveLj10bQ5xkkKiohP4COPG_KlyJYWuYeDPJVrtmDZLyvqeE3n24FFblgcjdI9lxedDKVZh3AwRbO3sxYLKJ-GQHlg_AyPNcmMv3EQPvz_46DVwrvA1qc1NPUb6xriAmmWySTv", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105583549290158346891\">Jung Kyu Park</a>"] },
            { photoReference: "AWCwydiULEcf2SXpvNpZLW-SWTg_8uZaP3A-hcPXyXzQQZr-zZHpIhZxezO4-ZfD1sPJBlSwYjy3prcQsKVlu0ewGfWEScxKUR0RT9Gdn2_0Qxvu2xWGQYWefX1Nbcac7KIpXdkIAtvGf-WxDS37uVCbHxirJINte8QA4-JHRFrA_utxtzwrX5Jdu75YGQdDqdov3HBiZFjOBVVL_UCtN6eKHYuawENMX-wqW8Zs-CcAJiKGgFD8jQxv3N4H5nmToqJQZfwR41_HUTP_qJfa9dFQgJivP3NN7znOcxd0RkiWdHVkG3gNOq4kSjot8ZT5s-xBFzND2BlId87In5pEdgAcFIuoXuZamIJaaimP0pOBBhltxcj0u_lqYoPPNfYnPV-VJW4Deef-A-j8hBr2XG4e9fRaLlB8Cgw6RicIx2ZaXm5_qw", width: 4011, height: 3022, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113717211411048638777\">Mel Coffee Roasters</a>"] },
            { photoReference: "AWCwydhNDNt8_8bMwDXZIDRtp6pR8g4TwBIMsP0P9y1Sjk5ahx11qk1xSFkmrURYbwJvlrU6ob0akn71HKWoT2vJdkPJ-AfR3syp08UGnfc7r8NpDEeruBIrVniwc5Uh9p3dFsbvcHo-gRcVWhKq0g0DwxvOUQNFVSwGO3SkWx6ENy0A_6GersBYD5dUyKMySrS2C1wx_MRbsTD8AMDhsTWWkRY1PwEh0OEahBIxqeHB-zTnDLBhcJVhshKVMFYpIetRYBTjPjF5_ym5b8TT8ZRS9uYaQRkDDZdps7VliOJHV7Dh-Utwm04exGM2Jfq1iar5tH-HzTog_TxFTNFMSxdoHYLZPullzEwOifh7K4MDC3hn1jQiiyDr_EyOak_9GK0vUcnkI3rzpVz5XCoSZotO9krqLMMmfbqZUSsTdWI2HGJVSSre", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113717211411048638777\">Mel Coffee Roasters</a>"] },
            { photoReference: "AWCwydjVZD8E5qjcjNibgLUQm_aJdrt4v78anVTYZs8XbxUpqoSPiZIRsDab6dIUgHAG-SOr08HXlKPg8NgbRWHN26bS1VPME-UpeSXP_o_Ffu9v5yyUCaLvCw9o2wAo6em47JqSwVgnB1RWKSO8vi7BE4mOQuK8hOqFe5HVQFs-CE5Ag8b0fAxiyK49iQNwcG-88OXbQ3Nemq4taH6FFtMbHK-2MFfcFD2cV5CTyGgBWMs7uVRqDO7HM75k0r50uZsbZuhf8VfIhU1gn5J5tI7W9w1GOmOMluubmEKfLlMST-vfgM-rscIjHsrxutOE38KNjd6Vo2hWQuPlDsyO7j7-l8bZ3WJuvRfrwyZ-kMlswf0sAKV8YkNbGliE5tfluVxuDhXZEKp0geq2n8RLVCN5NhuXfeFVvx_zhUsPRJWojxGWgjq8O31mzM-H7DbArR5K", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118105183741099320266\">Atthapol Noppornpitak</a>"] }
        ],
        summary: "오사카 No.1으로 불리는 분위기 좋은 스페셜티 커피 전문점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["훌륭한 커피 맛", "친절한 서비스", "아늑한 분위기"],
        tips: ["매장이 협소할 수 있으니 참고하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스페셜티 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오전 10:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://mel-coffee.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7228361764195579680", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%9C+%EC%BB%A4%ED%94%BC+%EB%A1%9C%EC%8A%A4%ED%84%B0%EC%8A%A4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "바리스타 맵 커피 로스터스": {
        photos: [],
        placeId: "ChIJ0ZEpK1nnAGARJhRGflf_wC4",
        placePhotos: [
            { photoReference: "AWCwydiC_Jm15v3rUpjUqJarmhaWuYxGFSiYLkVT8mPzKFQCwhCcMt5Bo2ZgnSsgSsmufDvSDRS8Eiwx13w2pKTF6TzTKFynvqKzZ8I-678Qf8R8VEUmXkEfbD9FbEEh2kyOgRJY1ghojK1wM-c9EBI-doHD5-lKkL7VwH0hjO8oVoxBsYyToDJBcL6aqmnP703jvtznUvR7vLfydFyp5Fgj_NjRAui1NtQZFY_L-pNhu1AfxgOgOROTnK45kvQWzkk_0fGxneXjk2L0foGraDojcWqon9zcrRcAq-i4I4N4QORoqZpdwKq2hl4NZ9ixPYfCFBRhRKW_dTuFIVEjMEe7-jR6NIbodIkvvnCPLHk0EEhtInMUTqWnSC0tK4-bEyCm-kOqmaXm5iDA01Iy68Wu6PjvoZ4y4qcTxCVIUSLw6NcvzgV8", width: 1933, height: 1933, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112614190289442321015\">Barista Map Coffee Roasters</a>"] },
            { photoReference: "AWCwydhZbcnrdi8o0LqqrO4ri8u_xMIQEej8ZFezwuQcxyei1ZWdB1HRChxfEkpeDaTM8L86CW4Z0lkPV_1cj6wk6xMbJsWtDydURFsbSBv4dh0RQosfb4_eUpoz7F84umi4Yi2rsD9j8c8Gz_iT0KTChe5LAYPNmbdZbu8dImMy058HGBcyFwbLXroXyGXTGNeNv9l32CV1MTaxfy6yDbWy83Snko4dMduVCZ7AG5FZAaEHdAew2dc24jD8f_-7iy096YD8fF_dwGgb41ejtv9QvphZtP_hJAotKJp65CKgtbIlEso8PJBhFxB8svECr-jnkbQI6qajGNtOeNvrB5CU7_6UyWFmPzE2oJUdurYlF5hDEeq9XB1pUeqk1U14ug7qK0aWKZtEBF3EvlqIfjCJQ3_xHeyNjlybS3NFSv4m5B7Ozw", width: 1125, height: 1400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112614190289442321015\">Barista Map Coffee Roasters</a>"] },
            { photoReference: "AWCwyditSShTSiIFQwPQ5ZP2zFD1F9tUfvgOsiddr9GzDKJ3eEguZvVJRZlA2EUrHip-mwgJEZEgiUNws9nrvG2Fxm0CDjmy6-rqUtxDmjbLR51dg1q79HqpCEQsDV78hhuZGGVKYt-Zq84SCfE7eufKp5cDDOV6pNCtSKjK280kKghnV8FHS5iomtHkrCllgexGtQvq4baUbAwERRMA3jnHqWNW9gAArbIEf8PUW5q7RhPDimMC098FCru0PxHwoGdNtqTMMZKf9to5tWnd1gThJ95biUdjr3jy6i_NcsNjiAoq8DmBfcJtVCnRw9UDjUtfnmrCO16Umz4HXG0cjO3I2FyGbVi0cu-GdeRY5QOWSGu7Zv2X8ubFaAag_l1vABjiRhQeqS4Mh5c40WiSAORo_xAhAQFN6iyOj5OdvML8Z3WVrGBw_PwOUqSyCStV9A", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102165951359713474708\">rayra J</a>"] },
            { photoReference: "AWCwydh18l9dS-JFvtVSoVEpgaOIb0AXiD99LEksgQMk2sqjwqkbT35TXUbAl7xp7guaxDdWIMHIZt4-C-ONEw5jD7ayKObzG-is5moRm3oHOTPtXWEkfyFsUgh5lxyHACcSmgPrsvTD8vbvRFAEekaCJDOMbCRIaiKdb7jYcttUpJsHA5cH53Rb92-qItmPe9J2fWQXkYshBzQlLKJ5fo1Tf6TEW6DsoXDU1_TMnp7JoJfV8us8hrJFHgx9ahR9TpFFZ_QZHqOXPjMg008LbobH77GgzE2ZKIydtWFdmIisTJcR8uLNchVQsDcZjsbgGhqMmGrPxG55sag4b_fcjZAL80f9vzpatCb_Wowz5Iy2wJ3vX3FR8_jyPF8FeYLOd_wrwuELY28mbqSdmGknx5wBn5D_rm6UcKpEdV2mk3lA5fMgnw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107705833309561868785\">スタバカ（SUTABAKA）</a>"] },
            { photoReference: "AWCwydjZC8v5zQZsfa9zTzrnLXN98ZqptqthpPAhGy-dr5jRPsykvelXYQxxETox_HPJ8sRdOKXDquWzhAX7up4CsZCGQMfKY_b9XBJypPZ9tM4SNt2ELLjau345KqvXlRdmAszdGHRVA93cAJa5VzRKePgdevVX0BAgmx1PGNe-b_lArihvm5wN3kXD0hEC8iZVJUuHbKNmBXzGTtwzTX3Tm_R7qT-RlbQsyND5_rlQ025f0AS8AalXFVmgsWlZTMTR-lEXIDkAqQl5m-WUql61nsi1agTqgUWBVb6Iebl5DPkNzVcYzGRZuvldoObLLL0it8X6mlDZzchEfOV_vqcn4Sti9J65z3zEp3D7PPSAQ7kN10WzACvDks6zX5flSjeKDOwXdkUMyQYYUX-yXnyl_pYsU1b9HF_tegwXOkaob6k4QUco9NAE5BOKOSC7l6wc", width: 1280, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105585017640361873036\">trinh nguyen</a>"] }
        ],
        summary: "일본 여행 중 만날 수 있는 최고의 커피와 친절한 서비스를 제공하는 카페입니다.",
        updatedAt: "2026-08-16",
        highlights: ["부드럽고 진한 홈 블렌드 커피", "친절하고 정중한 서비스"],
        tips: ["커피 애호가라면 홈 블렌드를 꼭 시도해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "홈 블렌드 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://baristamap.coffee/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3368973272518890534", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EB%A6%AC%EC%8A%A4%ED%83%80+%EB%A7%B5+%EC%BB%A4%ED%94%BC+%EB%A1%9C%EC%8A%A4%ED%84%B0%EC%8A%A4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카페 테일즈": {
        photos: [],
        placeId: "ChIJsz-mcULnAGAR1AvfjNa57gU",
        placePhotos: [
            { photoReference: "AWCwydgyiMRKfek-1c33XZglFu8Ej3YX9y8jghfm3TSQavlc8P7FZGGVPD--odheYGqVm_Pbujz_WLPSc2HnYzBaUARm_FulLxUXrp81LsLjcqAep7esbX1xL-S-dWg1-glEE8mW8mpQVgG5UmAckdwhXcShTM0G5v94KtuxRmAmpIPv5o0sszVUjv20_SnLN7Ox0JrbVTSk56dTNS6S61xe6IiOLBSiDUxGRo77ZOeKTMDyIUMfTcCNENhd_DM6PdI5_yOf1rvRWZmkuiGcwbLj3zSx4JhOuebi5ntNyQaDMQMqsKo7UGm5TJTrSTV9ojZ4y19m5hjQcUiS9gHJ8JLB0RZxcdjQ29trKQtEJWB5OKvAxBL0Ww238jG3l1_Spz6y1fncf8X1pYn3RyydjxLOQ2Cc4N_pNSo6WlXL5Ibj5ig-7z5qbXEpgZZjOQYPynx6", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116460568084678547233\">CAFETALES ( Colombian speciality coffee shop)</a>"] },
            { photoReference: "AWCwydjRFO-uirhiZ9DUnpuE3prjm7pFsChnlSY4z2sp7B7BvVG-9xv41_8R9Vq_fGXB884HKVMMKxWjw79MLXhgswdUc-dFA-SLJ_L1cu3JuSIXwNfh4Or5TvF_c1CRPd-WzHfu8ICkRhLEUvg8yu_2dM4NDVQu_OxGmYl8HVf9VZzpj8L7lLNlGKOBWf3YV0YsNiV7ymUracahA5Nb5NnxCVsiIktmce5cyRVtEHjG72hNqUUEHnEkjx5Hy9BDrG6frvLXMYrVz9fxAI-yCYGnycHEFPr4OwR8swyBSmMJxOQkZmQEoMNwwficoeznuDvO5DSrz7mlPoj-7Tn_Omyzv7buCipD-87foM2y7J4skrTXx6RWLGl5M91jBQDoj66f3dWcUfZ-pr-HXtYeZumrkNtsDGLD9Skf7xmX0G_NQFc0mA", width: 1440, height: 811, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116460568084678547233\">CAFETALES ( Colombian speciality coffee shop)</a>"] },
            { photoReference: "AWCwydifreuiTbqSD2eRAXCi3vzROPqWR_ZfxTO42wyZ89b5SBxBf3_WrrEYgiqzi95qKfiW61u5KA6o1kq5swNIgfSmIRHasn_02iZc41RQcYGUCCbvRg139JE7S7m7r0EjhHkyuBZdLRCUoryBRPLBR5_FDEiXDlwZzcRwsOxWKKecsiT0CVlKdO1qhqJQ8Nb9PTbqhA5Ym8jj_pi9qD0GlSXYi3Nmod22r94ghnp0hsZvkN6_GkOSynr7f0errK0yJzhvT-_A_Aj4kfNvM_CCCIt_IzpxIIxVpD8LfYY0vlYMNkMj9nSrRnxjZNOBy2atSXQ-qUlt4QdMSS0oTODMhkjFNG1WeEKPUXJ6Kk2d9APYKQBDPSQ0P2dXDoFuAInXArnIhWQ2aJYUGAPoNs7bewQacFKSqqihlbiALLflavLeGKZWVDffai6CTQaQkw", width: 4800, height: 3428, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104631143177207354320\">Eu rah</a>"] },
            { photoReference: "AWCwydgfOEmgDBtXFSN73oxx8Al02Z4FK7tZYmcuYvpMDgDl6WrC4aVUMUGdXDgqHdtIvHZmygdpxZ0bZdJisivEJuEJ_NOw5B9-nPLwky-sztgfW8zrB98CpGyJOLDhwSWt49DrDEH9rDbG4qjS4SvISi1gX7m6G0Rky1u_D0LmVKj7WLp8gNa2YvWJqjE-U2iXaaDpCbUGdaiLjLAUcCB8i9cBqaH4wagS9h0EHTIF-nvkkjjb9VYRbkCTOrPpVJ8_7dZgJmP8GdbJaK8Z2qsm9f3SEXOOx4fp45srPaeXHoZ9tHBtkfMGhSf589lnAtHHneqZ8OAuRC6G6Fp7At8d9J54ZjW2_kKuf-uzWFZCw-5U9D7syT3WOEG28IkP5t4ZokjALzuEEW9nODMQcGYk3WRr2HHA7nn-Ud_WC8kktuqRvMq1g8-veYhD7re6Mn2A", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111145755446941883423\">Amelia Johnson</a>"] },
            { photoReference: "AWCwydhvLkVeV1B3EvFKDgTyf_32u551gVKjGLTgOaHfSZlL4z4TLsZaVVQu1VebUbZlBa8Zv7ctVzxZvsEEZWx2BEWJQxeEBfXpJ2Le21SbVxaGuCUrZMu8JMxvEBJ7rWouO7u2VewW8pZi1gVoeEMBUULovnaF5h3gOyqNflPHfwYjKvC6z6JpLWJYUmDxjnQ161y3FcDReA2tKg5Hn80xMM17tatY9UzOaIimC2Bpoefa7T8131QAohw11U4eIC0rqlv9d0j0rGpZSxTJocdqfcR4xz290W8ngTSpqYpcntjnjt4dM_G9gPFnmCb5NLbgxOc4m9Kb5OZhAuWiwrcNSgK8lTiXDjk45-uLb7-o37POxZ3U-VbGPprDvcnl6jpUBnajn_Ys8d2WweTiMfDI-TU52PtbCROIPnM0JaDXuaRkMzItJTd2B3y72oV7tCig", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105311872404996305434\">Olga Z</a>"] }
        ],
        summary: "훌륭한 서비스와 맛있는 커피를 즐길 수 있는 아늑한 공간입니다.",
        updatedAt: "2026-08-16",
        highlights: ["친절한 직원", "아담하고 예쁜 분위기", "맛있는 커피"],
        tips: ["매장 분위기가 아늑하여 머물기 좋습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 6:00; 화요일: 오전 8:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://cafetales.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=427483345784343508", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=CAFE+TALES+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "선샤인": {
        photos: [],
        placeId: "ChIJpToQwuzmAGAR5yRA6Ki8YL0",
        placePhotos: [
            { photoReference: "AWCwydiashyQyql5_lF2f6dHaVoAtec8eOczpU-dxnHFv8D6TdxGK4N2sQPI9DZ6M6MhG9nGjdhKijMwunbzw9GUNVw8TwYb-xKs_a91RViUywxS9O14Nho9BxOZnprsZvxy9au4q7_5pepJa-2RtchYAFn5-OK7F5C4Mahf6VJbqiTw6q1uZ7qG7B2ii9b6_WlOc7MLXfATNGi4eIy_FR1_I9mSA0U4pdc46jzVYJdCXdIFYsxr2Gajtq3jlmP90LZQHzqz5aTm5jMrvzKYq1l-7M7Q6H1Tk0K-ox0caw7QlhDtAVhSAzcOESaU0Zt6DM3NYEVMar6nFY4wV-cn0shUOOGHXoqGbzsvejVmSx2Ama99MWEoyBOZTzoIcZodEeqPCyVXjOS05wchrvTqDqQeOWTELJZe2eczWshNhAop7aEaLEw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108630754643271114262\">喫茶サンシャイン</a>"] },
            { photoReference: "AWCwydjl69pT8LspcQGL874bMbRF-iezyw6two7SMRn-BtSFM3DH-KpIzNv5ercdTNI765igVY3mWCdswKKwWj2_G1v-LLmR39_IK-8JUkN4GleICs5OmwWiT4x1cEmddtStBvNL-YwjgepjBpCcV-Ky4KSxc4x5EbNPiwNBa2Q0Dh0EtqvK0hZTeURTNtUBRrLhbqjtInoBlCbtatqCfaYAdBfiPfkAmiglurw8wkgHI7SyIZ0XBKphLTQBv283TnnZK4sSzkQudrEI6QBNrjo_4vs7e0Vsd_CtkrE8F6yGlNDZfHfYq6CTgQduXMo-hNS_IAbc9S5hbqPc7dp3yoTEYwMoYJXMVO5lMOXSCbuhPh6etnsZBH6XVuqRWH07C4XtrJzJU1txWBaQff-bXxoVfkUAneybGQL6bPpTy0QtSWX6ABHf", width: 1440, height: 810, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108630754643271114262\">喫茶サンシャイン</a>"] },
            { photoReference: "AWCwydgJXDNPmBbNufDINXXpjFxIoS4hMrYVhuwO7XI-ogd3ws6Mnir1faXaba3xhKNzq_uw9AEQCimdIBJiT2aexs7k5z_18-e1ndmKnFjPVJ0Hbom7z2On2XTC5FtCKSjL2VLMQBNtmAidEFLuGQY4kUfmG083DFvNqOjyc11ngKlQFzkhpCnoCzA_umZXCVBUuKgoNFTvXDgU1_lrYQbB88J7eedDGsXM3PYcnwYtUaSz_Fpo3kLa9oBbQazc1lmXQ-Cxumbjl_1gHqesAIzQc3e_qDlzWqXaexKqD2BlyzPVilzD51KyfmoY7Z4Mfh-crWszb5WT02bKs1e84JqVRScwdpb9Y6dVGeCzbrMd1AaM-JGW477U9gmX-GI6vYWXJSakr9O4GnOPi22sUiyXFsIbMBFIvMQzekAYuRPy4MULcVKM5J7cxy0Y12PZ1zkt", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113745459677687215723\">nifu ran</a>"] },
            { photoReference: "AWCwydia8rOXyvCRd0cmbjVg87BTx651L3eDY41Z52xzYv7JB4kDbmmqoTgpsf3wMSo3jC6cnGkGMAlhYUfn_2t_vD7hXSJpyzP1A0NkiYTWkFfvbSswhoHDz4K7TWSVQPOU7RoP3IAFj9Bfkue6HhCXFWKYyZUrH9ZwAcZO5SsQyJm6ZI5ymv9V_B11x226w9OuYsDc4LNiNgdy3_jGB-MEZMfCziMa-k0JrvQXw7ujgFUQeJ8ycLSbd6tblFPiXmVzlGRYdmfBpjRC8Ur_qGZ8HNGL2hjPxS6Nskc-iXWw_l7vtaJcjxj_IoJ9Ha5298Jl8q80F5bhJrgvy-CXtP7xHKp5bKrpH0QaaHX80rm6YChYZws0OXpAJeqaEH1ARjbv_UzGv6DOSMZg9Ka1rlBMI9Xi7pVCYK6pxMLgkrKr2X79W0xcl2I8byNkAFXYelko", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115287016530384058546\">ファイヴ・スポット</a>"] },
            { photoReference: "AWCwydh9yX38uhvsMLopXw3ZtuN8VcFcNCCiCtjgdzCokVNPo8JJILpWcjh0Rl0Lfh---N--tTaTyfecLicrvw6oKlrve_k5BDposAgI03RPlz3AFioz75_jkZL38l_cSD11nfijS03vgun_nckuHCHGU6mt9yRO57iMfFWYo4piSCpxK3xzZt36PsnQNg1uAq4kabxI2eaPoPLjjR121HApDQb4WB3qQqetUaonPAyyX8oSDG6Yj-RH16so_LkZhUUHmk8679uJ7uVlD_j-TOB1uEnw0jkiIUJs-rjwD-mntLbFd1r91Urm2Jn2bb8Py4K2N3BjJXXLRD1OtW9H4f5-kwKC3ePIKlCGcC9wqi_abQvBVSJHdVCbB77lzhIpQzS_IeNgC_w9ga2el6l4kT-EYkug5hQ-lJjzxWYDEfIEkrofN5t6Fb271eAHiIumAg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116061493004355533837\">すばるうまうま</a>"] }
        ],
        summary: "추억의 맛을 선사하는 클래식한 분위기의 카페",
        updatedAt: "2026-08-16",
        highlights: ["옛 감성이 느껴지는 다방 분위기", "겉바속촉의 정석인 핫케이크", "적당한 쌉싸름함의 커피"],
        tips: ["유명한 핫케이크 세트를 주문해보세요", "샌드위치 메뉴도 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "핫케이크", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 7:30 ~ 오후 7:45; 화요일: 오전 7:30 ~ 오후 7:45",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.kissa-sunshine.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13646114304569648359", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Sunshine+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
