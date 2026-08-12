import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "자자탕바오": {
        photos: ["/images/shanghai/info/restaurants/jia-jia-tang-bao-shanghai.jpg"],
        placeId: "ChIJA5s-SUBwsjURFhARLaLPojs",
        placePhotos: [
            { photoReference: "AWCwydgwf4M0Glzixa8LqKKwq_r6TasGYQDsQcD793RFKY0fkYIJMja0ncBvrtrpfoPcxGuFgYFl6vytPgB1YJ-XmUOzZWBOZhpF0lZwd2-pVGlaPp1r2f4JFr2OB_RHvWe3NRDYV-HJIjVh1Mhjf5u7O_DBl-9HL2qSMMexvwBx7301-Fui7u1sTddA3X-1QtbRPrwU58xzJSx3TyUaK6OVruyFwJAPsIeSJka_czJy6TyK_uWtve50_pvNn247s3x7JnBkFRCZwBclitKZzQSTqmLjD5lZHMka65cejgyFMj-1N8AVI2xblXZqiAuGoHHv0z3l9ErgqyZHIzUsutpZb54hMt6GxlEyIsLnoaP423jQ39eVEYT4ZxhJAIaNDmcGkC-DI8eP5Jcl1UKGAHIlUsVgzW9CCOg5nsqhW1a7KU_g3tg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102154019152352260618\">Sujung Park</a>"] },
            { photoReference: "AWCwydi8C2i-p7e6CijgmOfZn7nyWRqxj2Bscnaj7iYAWyaDeLux47P6J5aBlix2iN7e9UYHw8_V2T9q-l_T5PlNIm1TG_agU656-VcvWyLaazAfPvrsFdw7k1q7QHVDSAhOnEW2wdT0AOgpImHloXqID0WlPu7h4yzbpqS4M9FEaK5ZWxIOA9FVA48ou45ZBAHVyYCUfE5LElE4PFjNOdJireidtjGI7OuyFluPCQF7mDDlCnl5aPw2aUlo1bLDzWp4mZ79NxXONUDWAF0VqNieEDHf0gbiL8yV501mg2aZRvMqc0UQNZ5VMm_GN7XiESWYBOEhXgQbNNwAMStiMBymVkYf2LFL_4S9Fly2qudm_Da4Noqc1pyDszMyHaj-HB22awBLz3ZVmeY1IKVPeqIWeotOy1tL2cADOaXTOWuQpsWb6g6rth1DvysMQIHjKiDx", width: 606, height: 986, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100921079780094932751\">Eddy</a>"] },
            { photoReference: "AWCwydiFc6S_tyl8_Q1jzGOLSBHa_3qSUg0hrSUFiBQxEmidELtthf6owfBM5cHwoRIua8mglBMd8uuT9ZPRXIbAxkfQASRt8ujEL8qPrzEeg_TBuP-MDKj4hkdhmdvZHhgwbPbTdf4Wcl1fNchdKr3PgXfBBKY_5W5_xUwZIelixENkWJ6IUPOfKPPRlgaxttKAdL5ti_mShqOlHdD33YHUiuB0c8snrtc9xr3ytaVyZG62ToBf75c623sTxRhyeiALFM6tS1a9vpsU8JB5G5SlSPjsoRca8Dqw1nkhduV16PoCAanI1MYIWGLtMTSXaQ8E-bHi1qNQllEmqwFxX8y-eroe4eWxgLCA3EfIBm0kYv-kzHAErpKASGENx6LvH_a3SIOFZhFp5Vi6c6vnJJn1xXq7ZA02J5TAIsgAoXXHSFViFPfxMW2mJz_hwkRKbwgR", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107343870786152708142\">Yoshiyasu Sugita</a>"] },
            { photoReference: "AWCwydgP_hfiS0QAztdr3L_R_6ECGiIHviQx0VVkc87tXWg4xorRkid63mf2v3vK9Vi6Gj-AlKMgw0PuB12pw-6k2BJVbZgkbdvCtq8XAtK4IOBteHs5f2APV9CHJbHFmDTZllIduEuQU3YBzzS_-bPDGic5YYPdNSwhI8x_yOXlQDQNHKYzY5ycYDwOHduwkPBEtNmTXlVAKALqt8DdYVx70YqqjE2Y_xhkUlc9xcXo07tr-nQbCZifLZAF6ZDZ1gyfglk9KILynNK1xu6kTf-cDnhZQDQnv5TbtndGTSGUc8dxxSDhAmCjf7z9xBfLImM_YZWufhO2Cyx3dS0B190RkRLU1H2t7bCfX_NV7BJGcJanbJ0iR7AUf_Sf514O_MW4v2-DQq-4LFqv-v5JBboLkKrrp2H9VZEy33WdUidn49i2hXE4hdu4Aw0eHjnal5bA", width: 1280, height: 908, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102309847875744286985\">Neoh LW</a>"] },
            { photoReference: "AWCwydieVq1OGuUHGWTc6Dz4zjE9N74oea58jxTEIsJ58n2b94wNx2fjMC9NlQdDuUFnEcrBuGK-gEc_INl52K0mMAnKOOatgVYjdHl8zbCF-t1QRgiI7gtU9zYAbXKUMk4eBXokcmDDDKYxjKoQpClgv__ZI81iiHvEgdRlZqq5HjKQt_55XprkpH32S-VTUdsK9H4y4pS3K_NG3v0y0AJ75N8YEPWJE4E1AOAV0VLJOILe5O4-vtK0oG3zQcU__8XrwQvIFaiY0Oe5jauKgaJ0qC5LouaYlJzJrR1411aGkyxOzSQpk-9M-o7bKYOOJBAcfireQIzB5uGzIy7ibSx1OsXzbNnJclCVsHDv_WsOFk3OC1KHGYu-cgHxS-Anztdjz2JP1UxZDg3vmhosJWmCwnPUdxwfnRM4GXK5DECJKNt64xHWdNQ561_bWIfAUReT", width: 4000, height: 2932, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109119588302343125181\">xDT</a>"] }
        ],
        summary: "육즙 가득한 게살 샤오롱바오의 진수를 맛볼 수 있는 곳.",
        updatedAt: "2026-07-14",
        highlights: ["게살이 듬뿍 들어간 샤오롱바오", "현지인들에게도 사랑받는 노포 맛집"],
        tips: ["피크 타임에는 웨이팅이 길 수 있으니 서두르세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "게살 샤오롱바오", items: [{ name: "대표 메뉴", price: "¥50~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 9:30; 화요일: 오전 9:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4297225289912619030", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%90%EC%9E%90%ED%83%95%EB%B0%94%EC%98%A4+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "양스 덤플링": {
        photos: ["/images/shanghai/info/restaurants/yang-s-dumpling-shanghai.jpg"],
        placeId: "ChIJ9WN9cVpwsjURkSMfOonBXYU",
        placePhotos: [
            { photoReference: "AWCwydhUokNoiR8kdFmRrSi1D0bC4g3t23mCAC1UXfPgmdSAl4OluOv4s-YQTnl8MiC3y5ytpz2Py0ujnjh_-8DWyT4-iAxa8e4xLJ8SMuShvN7HOv5gP33Z2ZjBkLB0_IaRTDH9HmvevYTSG-MMSVc2hkbbQzfuFLvfeK5TGTxma6Ll03btUvw5WBS1gEGzVWsHWuG9u_MeHSIyrA5u1A9mdl_fWt21k2H276AhN0Y2L2YIYsDD5Ufl6uKbQnKlsw6f4MJRTUvjn3VicI3kUKMUjNV9CTNpCNgpTugIToQWyIQ7E5zMD4BFDiDhGne9WWNIQWe_XmFt03Aw9bVvwxUt4u5OvcZmBbgT7wbWEhYgNIYvvKGQA9iQfnICBqVPZvETlqppH8Nxd0yqwZbxZKC3hiVe6oKnCky_kfmniuhVJAjd0nWVq4pLBoTKksTTurnM", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106350937855733023087\">arata neo</a>"] },
            { photoReference: "AWCwydg5HnQVrfCu9oM4FkoMbB9MhD5Lp7aShnCASU9MYAqlVEgAy9fJPgNzGr2Of_lgZ_JxwWGxb89Al6wMWPkvDtx_2iM0-sipRzhFI2d4aWgb7VId9U_iXqrE2jzvw2toA-M6oiGLtFEqz56qAxK1HRJtTcQc8N_NeeWs-7ZT0sl7--bxJFGJcLqVml_vhzc9HQ_ljcZ05pGrtVz3sejba8iq_gYEHsAumuSjLeN9Uj5Cx37cokFaG0tOJGOv2irpVsyegXOtE7lJrDE-48e9zerIz9GEYF2xXXmvgvg7Oid0mtBpdhOsDuAUSlqrYidSmJkYPZtHcv9ovRWa9S9qm-CsBqWJlmPLA-sXiBW1LMaQ0_BQ-Jrj3bcNr-Po4Sd1UwYDtAoxtwcVVr-QJM6b_dN1hoeRIK71quL9UMXwoI8", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107239778311000246062\">Filippo Cesare Ferrara</a>"] },
            { photoReference: "AWCwydiUmmtCs6MzLkngej8fYAY1nB__tqV4_fQ8A5ESEMpeC7HbF5HWn9k3XtolR2RMaF8jGZNgkThiIwzzoDQ48QGInDeHTegf95U5AM-e40ueE8TkJZbSle2CMmNeYeIKUy27UdKjiq1qf9ak9i_DXOlRy5RrvjeBOnyp4jFUsN7gS0KCq1oXgllchOK7hwVUpF1DStI18Nk0_XWj3qQ9vjqtlg0mDL-muPtn7WYIqeEPXGBYFubYPBANd7z0CLIMSCS0EQp9kZ-rraVkBjYb2GufZ7KkPSKaGcUND6JhhrxYVVd-sVmvUhVU6Gp-okek08JFcFuDiIiLfCPZDyiCrX6Us8xA0lw0F1T_YIPAU2wMJDDORO8J9J8vWcarawIMwfQZOcKs5_CNugjv-AdDcusaMQSYsbts7ZBICCD31hN8ZCS7Q6ZoVFyjUGuUATpF", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118444300905723839914\">John Tan</a>"] },
            { photoReference: "AWCwydhqJBbf61GJoBYvqfqO5PVeHr_i9YMga6NtZlN4S6GYLFyJ7qa1Bu0PGilPjKFDW14Ltq6ufq8Fpyq-Ab5vlo-IkPfA5lmZwIJvvKWD6boD2dPPQBm10MEFEDhSH5CyQel4LVwDrtJWtBsxlm1ZB-EUZD5yNhgM6dQ34hbbuDnhM7q2p4kLMSv4ZtMSp0btMMqmzEfob_wZgpGP49kCq_h-AtsUDyEwISAPnzPW9SCewHYtdhwsiC_RdQY_1kPk3Jz506PjZRw6Ka5mtECh2WkeRw27GGbQh02-qGHoPue_igX4ccXLUzNubXgLFZ1tLDekC9NbJs7_Ii96fooLuMAakMvBUmspIjgz5AJuXLD6c42a4uL-kcku_EcXrEMYe3IU8ny7nFEDEmkUBB0OZTzbetPl0JRDCwys3LJD40t2AjitzsBCWLxoL8zhiI6x", width: 2889, height: 3301, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102491375666484170952\">Ancey Liao (Ancey)</a>"] },
            { photoReference: "AWCwydgl_ugG6HhC8QBNf0RZx9VOWJ_Sr0htmCwrv26UQWoYbg0OE1-PUvQC4xuL0N-GPEObMeK_Kmr_fu8npUD4rU-LhIzYDMbvCBrx3CIxBuaTw5aI24EPmmgtsavqLH2NmWOcKzEUCUVVWWxTB3B9P5JaiSOO4423InLkLxtydMRjQuJ1AAcEzWtfgYJh3Kcny1QQqOdcbeJ0J2lXnByL5MxD3m62A_d48wSDYeZWUTyNn9fV8WQWHKN4b9H56dEqoV3osgavvMVcCk2ZO7Xxd-hPUplBSymi1CLH6SsjPMYF69LK5BAZ6gwZEMsyb6xiWa3-r21oe-2XIUj5W_8WKr80CU-uoz9oAgrElxHebxNHVgSdRXXrtbhCQzX2WWPr9PVp5i6L_x-uiiYvtrZPQIQqnRHLEM9jFjY0W5J8QeMzcxY", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109053996016529014115\">Lee Ying Ying</a>"] }
        ],
        summary: "바삭한 식감이 일품인 상하이 대표 길거리 간식.",
        updatedAt: "2026-07-14",
        highlights: ["겉바속촉의 정석, 상하이식 군만두", "가성비 최고의 로컬 맛집"],
        tips: ["간편하게 즐기기 좋아 테이크아웃을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "상하이식 군만두", items: [{ name: "대표 메뉴", price: "¥30~100", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.xysjg.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13736381603578334961", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%96%91%EC%8A%A4+%EB%8D%A4%ED%94%8C%EB%A7%81+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라오라오": {
        photos: ["/images/shanghai/info/restaurants/lao-lao-shanghai.jpg"],
        placeId: "ChIJv8FrepaYfDURzwd11pypR2w",
        placePhotos: [
            { photoReference: "AWCwydjQVRxaaogcCyvCqn0DoaVb3uQffrMpOCW1qRPyhJsI1A7HAM46TiHW5ZrkGt00a94fd9arj_xFvI3_UDqoN7EKXuWReeEpnSFvkJteN1UvK8LUaa7UnWznR0b0RHz1n9UberG-2nCdGabUogOXdVU4OrwLswEfSEyyhhVnoEc5lnzEyhPZKrM998IdtDZ35YX-uXE-vlw_XhVmZUFLNSGipQ8wejlyPbvOagLd07k46Gpm_UmTw4hxtgtZhPCLrLCZF4f5jWPWSba1IIi29mdOs4gHu4WujRp3edCu1HTgJHaWT2HhNG1H5nLU5NyCQWQ6FbDf0OLTaFVNNSea-gLjkuj0NEoS4BqCK0TlNF60ZTWcKIPIKcBtGpBl1Rq7B3dS5Z0ZMVGQIc5Dpo7VMsfsxPgT8dKzzeXK3Ge0Rvz6sw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111168800702369101437\">Tom Kubina</a>"] },
            { photoReference: "AWCwydgpmcqLIc6RSUb38dMFgEHdgLwvjafJihHm7QnyNv27MEUveQk4m2J-FanDQNAtppxvVC15NTj1ohVT1cfDCBaDDMbex7bnKdsIyGqKVO0joNkDm49_oOYvJam0P8Nf7e2M2e2BoHdZfy0LQ81wLAPrHXntGH7UmwSlEOMAgnWS4hWSsAUZaPam46-0-KER1DQlZtdNVw8loDF-tJs4ny5Yons1gQbnPLdl4QWknvL64N2cO4RfRjW1LudYMhEUak56j81R9LHqD_px9DXx6OSVSmDj00qO8_SoJ0zm4mNayeMTkWywgc5KryP4AN0i82mTjyF8VptXxAGdSdZsN4-LLC15bPdzpZArx6Y04FDIyw37S2rpqR3-wTNHLrJmTdYHe4AAk2Gtj-7qiAS5M7evIUcKV6PgyEEhufpWYOikgA", width: 960, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109063751858435154705\">BAE BAE</a>"] },
            { photoReference: "AWCwydhJrcITBzI_hTgYfjiE914l1V8uZg4EKG55hv1jgYSrjN2GGk_ithKqMQzMaGVs7dyKziJcPWNvc9yyoExv-UaJ-g7PQiB6s4XU6dmHc9h4C-EzZOWdl5ut7pBC1zWY27Pmwc9a0trSJEXd8Hut_STFEG61e4DJjwMM2VG5e1XM57eOdRE0C79ow3LGM5c1BX8W7nOV05H4uZcpcINwet6x1BwA5_gEiYzknklrRvWR3bf2Bt8duf5NDJ0pVu9MS6PJbnZqReyZKbiC7KjdmeMXmCW2d2l3Siy86lj-7nQ430BwTWxgl-KYUwJ0sgtqa0UFLjbvG4OS2FttH2JDDiIvvY0_5gvk2X7UKN1P9aesHmJJtG4sfwq9B-pQnlDXNncwqJ1u3TvagKGCsadKzdQA4YHj7-l_XLcPDl3Sw_orv7Zu", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107054285643351463489\">전인영</a>"] },
            { photoReference: "AWCwydjyFQmtEAJ5wHTpE2KxCvndQf1eFe8TpMyR8OeA8GeUQ_B9lMCr1dMXgUReY4OCrI5t3on4rfFk13csqqwTH4QpKqRsvCIDUtAoZtGdxJVNhIRUhNnFcRtaZ03ox8lDp0ZirKAJlY1OFGXWKmd1f65rps8vwzxBO9ZtlrIsiC57bV-rcCd-xtqwFPgTySb1xdRBEPokD3a8GBqImwlbChI8DaTSJTG-73jBhHc9f9WjxqjqtHvThXs5PqT4cZ_2tzggmrm_m1uvgg10qDNX2h2y1SFCzxjt_MOJn7sXzJFrByPm0iwAyAD3fYO9B3PmDpOyuTJdQYMw82ITs9P56LbYBvoQ464Sqn28K96WsbeytNJubwE_zg8M1hK-pSTnpM78q5wfaXRgOP7jRd0t856-t-et97pdiJD1Kdc9VRSxIw", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110328888761930789949\">duoqing</a>"] },
            { photoReference: "AWCwydhdJtNphaW4o3EcVgJ02SdofncP9oauHvpJqNoG4ZDNazQ8rU_6dlBtby9J6TJSMxLdr4-3AoDKhEC-0svk4cNhWC5nzyY2vPgyyvyN3M_sDH9-AfabZnbArOw7yaBfKJTNR2kBujQbXa3tk6T6qckvoCvRJTJfUGI30P7M2g5bBappC6zIOnI9Hh03SImd_s-cDhDif0ZAuBflr_vuwwGgeUtuIZY9ojE4i2deZV04b-zV-0pcOzT7IuTLGg8MCiFic6WnyIaxzQ7XrWUOngEFZkiFLsnRE65cQD_DPBJnwWKWKmB3Rrtlze0yz80TNQe7OOqFY7eHUgD2i8R0_5Yl_aWeEL6n1RaWaZOwW4gTMq55f1prAsJTDaXG7OQlN20qWc2b6UobVl3HWfnrRxPF1U7iRWIguqWGKsH_zJY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115828976290146707409\">Mapae</a>"] }
        ],
        summary: "정갈한 맛의 완탕과 다양한 로컬 면 요리를 즐길 수 있는 곳.",
        updatedAt: "2026-07-14",
        highlights: ["깊은 풍미를 자랑하는 완탕", "다양한 종류의 상하이식 면 요리"],
        tips: ["가족 단위 여행객에게도 추천하는 편안한 분위기입니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "완탕·로컬 면요리", items: [{ name: "대표 메뉴", price: "¥50~150", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15066822357372761270", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%98%A4%EB%9D%BC%EC%98%A4+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "푸 1088": {
        photos: ["/images/shanghai/info/restaurants/fu-1088-shanghai.jpg"],
        placeId: "ChIJeVPwc_hvsjURh8tmZJBM7vY",
        placePhotos: [
            { photoReference: "AWCwydjbjmU_Zq7cSvVh4K49MSUchPhRpeiPz25d4hc3TMXMVgZhV63zrSlt6nadSM8TnoPmtREjBnwsT7yq38WBWPLBtAH7yr8cEtVXvKUI_I_q2x4r5VBhZGaRRaaCe3kkQhIfU8heE4z6z5MItSRJtzxNqhMK-5lAOn6k6Y6HfLqXvCu5LJOYV6Wewura6LsSfjBRrmvPYEky5_gqLBn2nc6UxwqNSpfurnTjGx-_c0zGaSTHFEH34jN22WfoPfCYWVi96VbCOnKTN2J0ft_NvXdonc9KbyiEYvw_1unl3TJVE8V8Z-KYF0JidH89mOdTlGEQPcHGrFE4g85ooDUxYzvtJXcMnltcKH7SJs7Dpi9TkV9meQt8C0gR5pf4z4w5neMiDOp5ogbQiwtj4wAy1bwtgrmsxTVmAStnflxg3pm52qJWqtLXqSCLYmkgNw1q", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109281721267953043757\">减肥中的美食达人</a>"] },
            { photoReference: "AWCwydh2WTeENJP7mhPbGDAwS8h2bGtpC8MfET91TyCS7n-3VYWO41X6kiHNIvkH-WbKuI7ffEBQe06CVpRfkYXX71NkE31asfch8XmGbzSkKgLXt7nTmNuzPLAm7Iyo6mNS06kJXie9aeTS-L9xB41QFWJi_4eNpHXZSXBYG3AnWGXcmzMGafaST-UeEl8Z2pW-LfRCnoTuUVeALRgsHTt6elUVcSfgBSUlw1lDjOxpESmHjDXqLtM5f_DkGAAj4IQGNJaB3fXz20FU-aUKJWKJCTYPXof7w_kyPm60jpqmcGWLY37Iswhh_uMWLjvLSHdsMiTfJb5qapXg49IDapADUwL45AZCoR_3ABOJWlcCiGrR9JibzYOOEFSVYCw2kojUFXtk1LbDHG2YvJEOPIDtM8bbcHTGQUMpWUGoBliTPi5TJzjK7wmPeivcnc-N3A", width: 3887, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104699787931233682887\">HY Yau</a>"] },
            { photoReference: "AWCwydiHlDYhpKDz_uT6rDSB08oUDXBBUNSG-bzpPzgb6WAiQD3VsI62Npuhmt94tzMJ6Hfakq58yzOp3EaxVsH9flnjMDKsEmgqyF7zzqmTECmOrVYJlBXAB9KnDjjzyP6hTtJUu5a3Ru2sk-VC219NxAyqHUVY8YTrBBEqZZHCbbBc38QikQUP95aaESYD3oDG1ez94u_kQJKHfWPrihrd6fPdLQ7TWoezTbcH8XkS4jPSoWr6ep1IljTIdwJvgXNe5WOM_4Wh1Ey1Su7yFsRBU7V1comiYVaNRonqlh1KWbT3qV6R-TtPaPdAd6mBNZ6VG6632QP93RPbVRaVHNZ4jYWfoRdf8Auj54jTyALE4G99bO-csBOOpHusG2SnjC3XQO1jL0rbGvlYZKBlp2HGzoq3pSDf5FmnZFZqPVnfvOcQJyfX3dPOuaQXQNup4rWb", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105211426262732322786\">Ken Ba</a>"] },
            { photoReference: "AWCwydiGZapbRgF64ad6E6goRMg14IBvBgkb9abueA3mCywX0BXReldi-kTtZ45aPVKH5nimMVXzteItgoFgA3w7eEG86ugdlpeU_QNE3TvByOGRzhPBtX8kx0mxpwog3e1OaBov-Qa7xWLYNBioGFIIbrJOg40gYsB0XWdYPBuUvsKij7Z0fVn33k1MtKf6TLFQ-rwg-2GLluD_hgd7nBbKKsVFWDX8-UlIdzJrUA7kvcuHf7sl7Sesh0FJ7GtbYaAey5GHq2T461aTtIwY89u2AzEQ2fbFmBSUevgpVA4hJ4ZD0JuUX0aDLfMdjOcZTNjI8pG2RHuyMJkucFUofEWO0oewj2yF3hpsTxj4TB9AgTirLAOho2h3q5Yqo1exv7sVKbCd3r9aiyPCRxMl0gCcdrg4778_s8wGUFqb2HiPzZ1tmdy_n-AhYrtpcd3bNw", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105601531557020618480\">Wing Poon</a>"] },
            { photoReference: "AWCwydjuoyf3AzHi0vsUa4DaMmcq3qqf-zNPLYmj-W9pVsn3Ybfc09M8iOlhJGjo4mOWkGrNdn81H4xlyPzSFF5aSsQKJxLVEq7PQxcCZoZOQJF9zNSRABBCgNXyAaefhbbSQ-Q9_A76F5LKnXWnUWZ06TFLMVOPA3Y3ahBkEyvIC59Gvdw9CZX2Yg-KlzJQDDGZCEcE6G-guxi1T2-jb84E_E2eo2N6BFsjbLGkEvAZbS6jlfrPTw8PVTeArj0Jc57yuAcwY3-vO6sNZSn9M5wW9DLiQ52wcTgrIE-OCCkcAUyoqx2VqSd9zebHdu5i6UwbWk4XDHDwM9qn8XWyZkxWlAoxbzKtLFrW3LvoJ8DE4aFNV2uy-2PNL9GP_6RzuR9SvDDnc5yvMtLxtm0ll_gacIllmoshUKjzuOhpx91dMM9ok6vWIkQXuMIyvypxnTWL", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112291427739734132862\">Mike C.</a>"] }
        ],
        summary: "상하이의 정취를 품격 있게 즐기는 파인 다이닝",
        updatedAt: "2026-07-14",
        highlights: ["정갈한 상하이 전통 요리", "고급스러운 분위기"],
        tips: ["중요한 모임이나 기념일 식사로 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "상하이식 파인 다이닝", items: [{ name: "대표 메뉴", price: "¥500~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://blog.remyhouse.com/898/%E6%96%B0%E6%B4%BE%E7%B2%BE%E7%B7%BB%E6%9C%AC%E5%B9%AB%E8%8F%9C-%E7%A6%8F1088/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17793243360830868359", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8+1088+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "로스트 헤븐": {
        photos: ["/images/shanghai/info/restaurants/lost-heaven-shanghai.jpg"],
        placeId: "ChIJG6CAc2hwsjURCsVLmf-JOtk",
        placePhotos: [
            { photoReference: "AWCwydj9GGLiirprzRYArHRKXybMzAEQVbqWydOgVhZZNWBKTHptoH1SSJJo4qQtGJD12Zo4WTgRC0U1joqzj3-SpkL88fKz1rTx18yCT067SZaMcr7Gn8JxAT53nBrEnrITlDuQ3eBwtLANtDqdjnCj3bdPX91G_eM3JnzLwy1C0mW7MblkthPZD5lHcO71eqb3RSc5cPNpH2bgSPq66PbjRE7ZPIoPsjzlWG1rtda2fevUb7wcY5B63DIsCCGicpf2OtMDODCUhtGDRj9tcxcpAuNQ8ONOV1vaQPywlYDQJ11m5uD4x-egSS4Pz9XLP3onW4hKwd7SvyMQUqeq01pocg9Z3naCKzSV0x9qpyUX61WxUWsn6nQ_oFd1-C0Qrau1e-y0FlSld-P5pyq36WI0tmiJ2_jIPKMAajs4YdxJffC8TQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105327182414692223958\">C</a>"] },
            { photoReference: "AWCwydj-_OQ6vcfYWz23iJ6btQ0zmFCR_HqzBX4bHxRapD5Ecz7r3z3WKw003DXs3_Y16G0kmrztMQdqHg7O6McQceZP_peItCHUtoTuN3anb-PtzgGmLWgyRZJo_c6Z0isjQFpFE4qQBcit_ypj68pU5TEawdLNCeaJ37eJPTt_ArK93bxuX0oWlnSpyLqBgWYI5XwTfp46QuUO2xxofv3xCgTe5MF55PEuAWz3yXTJA3ppGMlKvaUgf1hpp4hjm-1LyEfwY7VZs55zelqAkxjgy4VvLCcHmLoCmF6vMOYM-GBXCZrea3vL84UXOmeYCzJQRsbYKhp5aWNFn-Glk40qKJsVnzx9b62nsXGagz6gukKeC_mq8TF4NMZmHhwh3AOJtuMM4ZDD1sq8ybI7D_PlDrG3k8r-GTWRCX68EF_uJzV3lacy", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111882882390922200255\">Thomas Fung</a>"] },
            { photoReference: "AWCwydgpuXfKYUCXeYOkcU2Q-GGo75o5Z1K7KU-sW2SyWO8Q8PkOgMTmRzTU--tgUcLnSq3Tkct6uuPJk_g8L8a8xhaDOUsOUZY2bUKE_aN3lehnxXCY8bjk4l2SblX3GdUxgH9Ruz8IrKw4mWLYXbonFC-Mx8AHKnMhCAKDUIADECqrDACoi1_6bTowxDoiHOzat_078Bg8SaST0UrtqEd5AFIIDLAcbpIz17kmNCsIRghArSX49_owIhO3ihUn3rVxkOqumH9oQLvmuuPQydLpiEOKvK-Vb5rTSqkCaJfk82g3CkdGyWx2bN7blvqBU71EBrC7FELtSkJ9t7FGJgy5MwGZsBJNJmWit4fBH992fA2Vq-DZqXR-GBQPl5_gZKdovwnQce9SDVHEtJBwvkj00UCCDx7YkUMsUkZh4Gbvx0tPJthD", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113161923207195780560\">Jordan Moss</a>"] },
            { photoReference: "AWCwydhKzyTdiydwfx7eqde6ZZ6SVSOyM_emL6yOaBUhTfloeblS03bgzmznRn852EEvwcf5Jvjg_GPOQ8tHYcguBIzPqkhNFXs8Y1Ms7bkqEjgsHOpZhGCoHkw9-MwLDcrAsSLy8I9bknpsZYM5R0lQdf1Xbm80oWTcim9xz-8zr22qZNe637VDNQ5FpitfEH4ZZvMYTqMa9h_KuxPEZZSjnodZoWXaa0cIIa_-NraJyRqSPJpjbBS2AW9xyaYQPa1sLnz4g7cZKvsvcW7kZ0IbKNZEcdUPMukhm07a5ldffkzbzcKLfKQT_Gh-5wlCzmuzdtTSaYYt-Zru6ds3oe_bFb5hoDNKYus_Y-2nh5Q728q1nnds-E73uW4hgrbRgiwcEL6gepiBSSweiEbk8TUeWLHoMl0scEor_poSJVLjmGx_4KNJ0bmaoMyIM3fQAg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108247189091388512176\">Keiko Furuya</a>"] },
            { photoReference: "AWCwydiEIGOKfODpVOkd7Xqqjqwbk9FCYY_-l9HeG8xp2N1bldI0xPgAOBxKaBrcrpkYIwpV6_2qzQG_nf9vMmsA5EmfHNwhAdacuLgAAZddVLqSF98n4Qe-5AsREqJRYsL29T5TkgRAodrXYXd1yIZJpyeNCcV2_WqQIGT6wuRAKEXvhSx0QglgtxcF8ZBTa5LiOKKPxQa2KuHB1s_LUUu9HQKxxK0unDwjj2m_7Ea_AnTtuVdBVHBghOjIURRvUMcbmBlJZjtWGYizCqIiy8VCzxQWhftUi3oNSPMGUPyBaTwVGltKEzRTJeswMNtmJahqyRKz7tlBBI2Ae7rRMzuOziFypotA1WYmHIhbkNfdooh-EO7nDgcg_LlUpnUR_XSusqjksnH_93eZAcwZbzMjJyj4965Myz2T_Dr1oflMpJs7ynpl", width: 534, height: 466, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102439631933335107422\">Alejandro (AlejOpinion)</a>"] }
        ],
        summary: "이국적인 풍미가 가득한 윈난 소수민족 요리 전문점",
        updatedAt: "2026-07-14",
        highlights: ["독특한 향신료의 조화", "분위기 있는 인테리어"],
        tips: ["향신료 맛이 강할 수 있으니 참고하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "윈난·소수민족 요리", items: [{ name: "대표 메뉴", price: "¥200~500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~10:00; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8578162423106307581", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%EC%8A%A4%ED%8A%B8+%ED%97%A4%EB%B8%90+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "딘타이펑 신천지점": {
        photos: ["/images/shanghai/info/restaurants/din-tai-fung-shanghai-xintiandi.jpg"],
        placeId: "ChIJkeYA-HFwsjURIaacV1-8ABI",
        placePhotos: [
            { photoReference: "AWCwydjs_czZWTeCseh0ITDmFAlv-bjqD6XxIvuKkAXI6cPdDJm7x-Tn7jlQzP_tqyaPoo_CCrttMpIMMr8PwN8bRo9AhJpnqrK2PSTWa4eh6Pmv72-EpwHb7Qq6ZfHVL9yu2TCQt5Vrom-Kl39OUDUEDlFfDNY-85oP-1CctK0aimcsquevTmgXodtKh-KEMbAH636PtSTanRdjGJvWO3nBA1cCvwwXE60-6GIPwCTE2THUwtBYKAVNl_mjH0eG0QxtJ9NhaVp92fcnX7Cds0I9pOLIwAcQ4-1MnkoFzutGHHx5naw4n8wtcLCuYQDfh64EfZQ-D8vHcy5S9ZFb_fxYas88JbxQKl-XuEVuKQFHsQZ_oMsEd_9c6IMaE8l9tiPyyEeVQV_H3bhekytM9MCF6XowdY7vBsO2ltb8XxM6Kp97z2K1tlOD_TgrAsZIyw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115831221869893783471\">Sina Kashani</a>"] },
            { photoReference: "AWCwydgl-VaILWQQXFNMJ9e-pOHoJOsigiYVOPyAGurIoQun28T0yMo6IWOqo_GCWngmoGQH1wFgV97YvzQ6m5KimAMbnOpdH8OqEyiCKhg6OOuAEC3V6H_RigGHFLWCptcqjrNp3ZXwLM3AUt4pncp59qOUQO0gv11fggkVqr7R0gM0u7EePdGX_F2lEtSOsrXDfgzYiAfRvFLpaL8uG9vmc6nS9FErwdBqdFLuxByXBdQUpRM-H4Co2dKHeHgDymo6n3WNSwIvdqa-uZRUP6A0ssQWZsAAEOq8i4y39B1QvfdqkXmMGK2VEp34EsSN1y5m6QWHi9tXl2hj_OIl3eQ9zm4lyqqkA5j2nsc67b3scP63_PoX7H5-Cbv4KJfQplJIrUo-0y_97YZUkDfRXpJrdqRn8B3o9DTIYCR68uOKQ7fgom1LhlJ7MEQ38YVT0g", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102530173345983262401\">교통여신</a>"] },
            { photoReference: "AWCwydiMGhG0MBgsk05rxogTDNjPTXD_Kd2BmxQ7iCTl20JXA3XJrYPuFd-vHyVIbhVJYtTL49gkyyNgVVbt7EWp59bJwwoMwqrLz8X9XonRwdkslypqHyKU_7uyLKeyuPMHFLZBhy7vIdwBk4g4HtM5p8kRyL2Cm9ONG0Pvx21PR8v0HGohzsuSs4pONKegT6JlBMplrXaTzKGDyYuTn1iJc6nAKxN281IclhamgAMeo2zFilgibyk_xBNDyfAuOKDO_36UUdvoVnn8x8ihPnSgQss6YiWLcJMPoSqfnVC4nqqCNp1kkvz-hVrVk1pAW837AqGFYEOurAZwuIHeGHl6tD0oO2vYONBXXpu69jgZyNqtAI6li63qbWDF1ykG0utdt_gFJhovE7UgyZByM8DjNVJch-K0cHf5L-2H3zSkyh_YAczwtPvnSVlr-x9yVFRL", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115831221869893783471\">Sina Kashani</a>"] },
            { photoReference: "AWCwydjLnb5UZ9XWEh1FrIPlh2jY8859lgit4LCYs86b-EpTa-w7xDDver9i39dlwHLDuHG4lVpkJQ3fLjqXIsI7cgmq2l6Af8mpqCUupo0u47F-vlqdCt2qoMDYZvc0l38iXf_jwlH5BNJQtNfwxPnW48bejYWiRgzTWCv3rH3jznnyKX3_3oGw_lFwwDcVlp_WcEv26yjhfVxvimn22LwK_OclH_mgcWyAI5ovXllmBrhfdEA2BaVl27U3fGUBqyQKwyeOZkSqetTkMLb_1IkxaH41C1PETIW5z6EZ1FF57_OYSFB7A0lkCdN5FKxTb0W8FC1Tz7Kyc-5bs1w83-x8kG2MiQwOvFJPFyFGphOzKJVwe8Ghk5cJR4HAHNCR3DWPExGgJXMktUQuEMiIXWzyqk3pP52GXtju-pSPSmWtEt037ykbbtvk_pwzqfC7Kg", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102971483467798615965\">deukgu lee</a>"] },
            { photoReference: "AWCwydj6LbAa9OEyGS3L6IkAxKbdICoEnuDwdTVKxtTznTc5K0XQwv7m8ouxqt6Q0KqqVwXT7uqug7C2c00nCE71LsO6ECbkbvTbTSW0WFU9yw1VFakdEm5zBAopanrMG4p2sjC0_24r0-LTBi6kqrBy2snpLudoy5ixH5fWSI3qtDVpcMzwbLuaEdjNlNEQDCKfCaPm-TycByLPCThJ-VoFsmrpGlTC5KhEe33jCMPNWsJEVkLqBO7vIG7lh6VH5BEU8Wdruur1fCN-Fbjq2vntAnA7mPytgrqZiVLTOQwIAGNlrEPUDKD-5wc0oUPtoD8MBtBFk9TY249bus3cOSPpBOXouSwt06tK6qlQO1HLndqZDzg_VnAb1Bh2X9pGPlswmSlukdIgoMC6qZbwtT-J_r09Fayk-uU08QaH7RX-XDNB2eMpic1rOz98LC3XrtZf", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108225960698084759525\">Helena Borges</a>"] }
        ],
        summary: "육즙 가득한 샤오롱바오를 만날 수 있는 믿고 먹는 맛집",
        updatedAt: "2026-07-14",
        highlights: ["육즙 폭발 샤오롱바오", "신천지 쇼핑 후 들르기 좋은 위치"],
        tips: ["웨이팅이 있을 수 있으니 여유 있게 방문하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "샤오롱바오·볶음밥", items: [{ name: "대표 메뉴", price: "¥100~300", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18266572968449397318", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%98%ED%83%80%EC%9D%B4%ED%8E%91+%EC%8B%A0%EC%B2%9C%EC%A7%80%EC%A0%90+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "바오뤄 레스토랑": {
        photos: ["/images/shanghai/info/restaurants/bao-luo-restaurant-shanghai.jpg"],
        placeId: "ChIJO37pUAdwsjURbF229xnnkjs",
        placePhotos: [
            { photoReference: "AWCwydgZcmrXGt5opvI8Yjb9j9SoDHRRagk4GmgL_t95J100Vq4xTWTXjBUPDZNWKmUqW_HXAfjHer8Vmt2XGV1BvBcwsbw8XvfsjvI_JCym4i6KieTkHjwQvWOONnhoPOq7lqjuEF2xz5jRIVm1CFPqCa4SLuzGKhZsObBm5NiNk6hkTohLH2mthdgEpO57IFuRc9WT3r1Wa5ixcg-Nl99akL_dZAwBpev9A5dIlb9L8Xbaeo3OXyOqO3hwPkFBB1f7KuD5e30A-LkCn29bv3aaPPueGyIoUa3OsllW8ryXtWM3HpR4OhCAF2NDwJORllgBsZ00ClUV7YyxeB_cIFSyqx6iQ_nXqacHw6jZd0CHtbz1dGsUwUsV7lbtjznVyfKo0Ya1CR7nWk-7rxsOh6f5Es6xXtR23lmwyzPdOQ4bso8yfA", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107809315792431804144\">Hans Wu</a>"] },
            { photoReference: "AWCwydgYYJGSRHElNFM9stRrilgq-h-3xQr0HcdeSQX33otW29TfZQp7VNHP07prOaV4Oi2XboCoUnDhIGBJDnd2ypLZMjSgPNwlUZDUFge3HmtbbVu0Xe25rKVhmMUqXytlgyeG66xKuKCLWR8PUwTXoYRSkFDIYV34lPvY6cLtqbdyxc8cl8w7ICKIlWpTqkbpMMamFw_0NxFRuFcYnBkB2hwh__z5wYrLnBDWqkPZADBiLfDEyrDYRKKROPm7vs_0Mox5PqulkV5XDjwSaS-_vC1y7pTE2sZj1L9IBjZqn9m7Uov27IdiRr92JZNC5DJn4p47wN3ZdfBq-fVWTpwbAM0DIRBXCo47L9_cJSYWyqELaKWo6YbcI-QUUv5zDCmW_8EmgbGFwWr8LlCfRF_LugzGOyJn1dJDimplf-cdwrgv1Q", width: 4032, height: 1960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101288992381093445134\">Annie Lau</a>"] },
            { photoReference: "AWCwydiEmvEbhUOccAT5hMdPXPE9tr3GqG_ytid7XO9Rd1grKWMvbMpnfdu-gRcQgB5DXrI8_ZavyTzu7Tp2g9aD5AhtjyMI65rW9go3qRLw69NxZkV9SbGrUNUORv_BZY0SqM49uWnwJ8MRupTauTabWxv8UTlVRE4w_o3ROKzxkcyoY9nMIeh9ri59c7kcUaOFFtHx2hNsJ-wJEefEN0cjF4-LYtnVtijIe6ZqoyvT1sT1Z4ytDkcGhwUtkHS5_iAGKDMpaDc3n_In1anEaGeg2tytXL9khorwguOQhoycfPjurFijyu2E9jG73c-0FfGtHFbHyMGspdvZonJOGD2o69HMoaLD9NVh3m2nu2AcNIAzBnOitA-aB1dR-YuCeZa5WfpDIjtl-UCcOWK5i_xQ_fTYaqZl34ze88gLSOTdMLhiTg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107809315792431804144\">Hans Wu</a>"] },
            { photoReference: "AWCwydj4ABbFn9SI7sjcGAKTXKmlw_enURBT30v0X7S9xQKlvXvUkSXWIFOJwfE4SCM_7_zeck74UuUHo2fmB6j0u2D8q3CraZY17yyxa0CbU8rRESjh8eoNYuJ9zF_j2mwWKNCJtVeqXzz0ZHyp5tXqx-LTogjVENV4lu1wTxj8m_niQKG2iz74zChEH3ztbBexhm8sq7by1HHy0D7UCVGH-4dvhzP0eaZ3DZdPStTSsxXtisRytVkxfVlotsTGz2TAgtsVA6qMbZkiW29TjhOEIvwiRLGQorcsa_UUB6n3b637BVwSHlA9aZsX5EJMeJkjAjGJBf2vYRp6gYfh6FnNYmPwW5QjUgz10z3vbUjLAQisy4JWpnLziC42dJxZ7kRnZw9OYMptbU6EvaLg8mhwp4JOomKQLKJM1SNr7DkNLuyvcg", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101306429946154408629\">e rr</a>"] },
            { photoReference: "AWCwydgWkX9gv1HjWhw7uBK7DwhuIznjM-Gb0Bse6gfTP863VOOjakEylt7_Fetw9HUhny0wsUrFf5wTEs7XNQy-V2fgyEdMx2ljq-fL7XU88mOvH0NzqwhlfeUH7yp36TdXty5yATAWoIPGplwIbe0EnWhCsph00Oc1cpQGF1IUUalJJIoizkkDEh3apPgLXqjvyuf-xMeJKE8MquoynB-TF4XPL9qx7zrK5z4Yv25c-Hea2yw_ukGHoG52YPXfKGAyBKF-q-C7utuf8hAJWMz2d9wkNRwAED4jYowVXyqFEPdCMfrjCfAnewuZ7hrSjDxWJMt14A8H8kiH-DKW0xh5SphmE03n1OxsB7ibSZJhyWsXhmaG7FM41jtm9V7Rlfu78QEzGiZPgMJ-EOS_W-eWfaXrPfrBmXfnvJlr7Li4v16LNA", width: 1593, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104210708659996857402\">José</a>"] }
        ],
        summary: "Baoluo Restaurant 기준으로 확인한 상하이 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["상하이식 로컬 요리", "평점 4", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "상하이식 로컬 요리", items: [{ name: "대표 메뉴", price: "¥100~300", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4292747493553626476", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%98%A4%EB%A4%84+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "제시 레스토랑": {
        photos: ["/images/shanghai/info/restaurants/jesse-restaurant-tianping-road-shanghai.jpg"],
        placeId: "ChIJJ4GQ1FllsjURsvfHMspEsfs",
        placePhotos: [
            { photoReference: "AWCwydieKUHNwj8mlRAbh6qvpzXHJC9pIwZjSGHg_S0QJvjgsnpnxMGbkzWZVEL34l5pQaXH1jX8JOTVGQuhh-zM-ENNZdRLf25WTvlGd4A7LEhNobvD4brrue7tom586nvKPEpQZRc2PzYo8dZKbFXLIfT96VaPKRk3UKd0QU5DjWChN8lconIYtbDupPlN-izMDzcgqr_udsZu5q9jIBgCbCAhre2Jhjoms4H0bjKWhlTZiJ6jYKPeZvnvQSoNXS_GDtyDX3RTaw-Q1Kt8B4ZPLhlmat9MBLvHku4oUGUSvBdmfYt6KgR8SD3yHdcn2luskSj7so3NtSJ57F0r9OGRxbcpe6RAvG8gVZr83H-PuHye1DIDlxlNffq1ihOZJkVqW3ThmqOFqNx0Eg76wg_5luUQcK7L7z3QouZHoW1SGapeqg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117242280977031798158\">pyororong pyongpyong (Mr. Pyo)</a>"] },
            { photoReference: "AWCwydgCyti1FPT0HyhM9X2PpHFlMn8xgykqxJ5hsBayXCJglCLkFqLL46xI-bGMC6_AnLxAxj0RNxYG6r_FAtX3A38KqhF1pYbOEvkLRWM2kuGoA9Txmd-BXld1mpgZ_U1z-oC9McJO1n-AVHFTZSQ84QhIEdXToDLmbS7Ut7aqKsiBZL9ojCrDUSD7NddxEUjd24HNRoo2D_E_bc8NLX-lODasqmQ2DrRjZxDoqh3f62WhBiIPX0ZsivsS0dhevJC9CjI2FfjIo7Kv37A2QnpBOCoJRBASHl1gxks1AVPWLhMtBEBWWFNGSJFSWyfHG7_BwBq3Jyl2eGPITL1ey1p5I7Rfa38QSyhPZuGiwXE-od5izTXbgSBlTyjxV5kRkflLA2ZIJpGqHLJo5arT6cuLL-5q2EETdLJvLloEfK8bg4XI2vnq7CvvwTVbjnKXMkbq", width: 2806, height: 3741, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106054215453269284121\">Simon Teo</a>"] },
            { photoReference: "AWCwydj1WQY-nL45NwdeW9FC50svzaR7Z9eGxz4jOkt6c1Msos1jh8p9Ri7YHTJV8cStPdLpHAjfA-LpUktidR4FWYfyB8Su84_gxSNrZi_RC1k7lSoyYKCEUy9nAS8AM4wsXSMx1fIIBP4VDbLV-ucz6ITToucpFkKGPLweL8CjoPtozxlV5-c3wvkpl2pLmXv2_KACTE7GwJQbat4bpbVP9IRo0yHIT0e0OEMSmtlgTUKMwJFPL70xarKPyDSLqGNuGvRZ49lZ4eUEcx5Pz2qgInrZUF2fWIqtg4g9f1ug6A8f00NjSJF0HxQWL1O9VNcqEbM-4I26L3-Sy-NTkr_jh0mxvZsGjKirXVvjS_8M9Cpxad9ofC9Oh47WuEuJAd_jZPP3KLQqCQZILG3qf5YJyDSKp0lu3KN7XfIrW4e5phP_1cxw79xu3-xnJuwrbLGw", width: 2540, height: 3387, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106054215453269284121\">Simon Teo</a>"] },
            { photoReference: "AWCwydhtVM-XJ82jgWJ8guXEp97hrrGoaAQtT7GI1hriX-gi4tKouCTFAAuokn9hc-gltFuhZHjFfy7NozS_ogsE70V1Mi6XQCfnNCM_XkjijjRqrC1lYwrOkkuxUTSB8Sa3Pi71gCHALUHquvCWSwYAcIq0IXQkZ5qK7tIB0CLKkHC2NCSgtzjxaUyfujhcrvkhnzwzlF88CeCWkZSjRfifLrPlxprc2ogWAU-cxx5YN7fnCM7BSB8qq1nuv0QZ7pCLZKMSdxspnLWhNm-pujXX5F2m6vNmtk0e7MdpoC6NCfsjwnQW-8ve2SxGWXdBgP9plKgr45CLa1uvfw8yIY3cELQ6DGoB2bHiZLZVmpX3Y_ey_cnjP-TqFm_kNlNO4pRWgFh519OT_Bbv2eDX1DziAU56K1PWaVVTuLve6Hr0c3wEmr_IJHyULpOQwiqcCQ", width: 3675, height: 2710, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104273519659810696266\">Layar Jaring</a>"] },
            { photoReference: "AWCwydhtEZBcma_upqo5KtTu1p0Mviss6QkiNUvv1WekZcjRTX2BgsGZyIaK1X_Gf0-sGikLalTBoG2hflfqDAGz_VqxeTY11Ii_fjYDeJtIKdyS41XmUqsY5K-Mmt8s8TintYNCdo6RZQmHcezMCSsCZz1aheqUYir5xMuX_cxLiUoa2Sil55pvkmZwvxPZ1NtVbvPmog7EiYpXWWaTMG0LnG5bmfFiEf9d-ePyKT0kXCQWAxh_SXbqKYlr3XK5ClXP9STK9EFQt4-MNxFZ39nOgKMkIsFIXLwBOE-2FhDy3R5vR_u7VaxXUkvzgLz2v4397_i1XRqsb-tD4XvkuE7p6XrdsB8gWFCl9Gg2YwyQH325eDUTYMwYNhUOGgVLaJ5R1vdiDq0aZ1vma7iCDO_hK9HChOIWxy_S9D2fCKsvcSBN0XsJxwLbFKrMG-B837Ms", width: 2446, height: 1712, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114579268410700242638\">Wit Chinthammit</a>"] }
        ],
        summary: "Jesse Restaurant 기준으로 확인한 상하이 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["홍사오러우·게요리", "평점 3.6", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "홍사오러우·게요리", items: [{ name: "대표 메뉴", price: "¥150~400", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18136352809623746482", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%9C%EC%8B%9C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "신다루 차이나 키친": {
        photos: ["/images/shanghai/info/restaurants/xindalu-china-kitchen-shanghai.jpg"],
        placeId: "ChIJa29Xpf9wsjURX2xJ1-41nps",
        placePhotos: [
            { photoReference: "AWCwydhYuEItcNcdVI_azKfnwNaGEWcy5H3baclxNUmJ8FJy0gBeTxaR5rt5-DxF80zAHzhcGcwuLPiWMo-5JAcmMgPPp6EjlE4fO7QBNbvDFHXo5k3pa-3y1Q_RCmN3TgXPoYGUpiISjjy93UTw8ncIbR2zmQPbDq6e_IVsogYIivsGylH4dkdWhzVzutPLvdk8oG8AmQrP1Lbg9ImnX0MPPEr6WndkeAMwoanRijZgInr8buZiEy4xqEokqtx9r9yhn8-4706QQ7WvpEjQfhNZzAr7ZYw3JtqM_NbFHLounabQSOgGDrCmjMhXKMgobIbeIYsspM0gCSNHMJ-_9utRVhd2x9OZuDOfYQjk58JmDiIDhOSYOkeBvPSkH6i2zbUYhQDMh65g76sO_Gq8sbflTIhwSy1GZz9SuAU9Cw9J_uMsKwo", width: 2560, height: 1711, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100699569924106624503\">yuki kanda</a>"] },
            { photoReference: "AWCwydiAFW7dQSUtNKmamt2KLZBuadB3rzg8Id5ddVDoqQtCTsbeZjWb2lswM2hiy2ql6W2GZcx9vb2W9IIVwsICieiYj_NPRZAESK7TsXXQKvOSpsgRe7Wzb4mLDBaixJdwTY5WDlznxr6X3G38WcSUH-H7I5Wfrox8PF9FpPJ_4qyVCi7Wpz6CZf6yt4F4IdpKDy49JO-yc41qnFDfc-1Qo45S57vBsB3xnfVSc90FHbs5JpFtrwTxjX9uxDn1dNqH41LK3o4cboCKuTAsjoGS1jYb_WlHNyC48aeenuq0Bflsjq1INu5OJo1saI3nqkdnzne9vWBFhD4RVpfZw-w1Ll0EOruWpeSoO60t3Acbpj-yedeqhsUhEkhw14XcjxUb0_3F6kPoTo2Wl16h9smo67zIRPSAYYZllYD2LF9vr_c", width: 4800, height: 2697, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103221064221145513277\">David Sung</a>"] },
            { photoReference: "AWCwydit1ytGVdZCusN3FuGFZ1H-8mrZIjjZ8J-1Xwig1HJXyeSbZOY_L0YrdQkOkO0BhGHvYZ7cY0XQ082puh7fSkMqL37sNnb6Xy1yTq7AudXXW8ICXLsW8BLPXvvP5WvrzCi2lrWdplUKamtd4Ate1JmlfVFxp7POySXFk6IZ-Sy45920DErM-s0j_4RmtZLCaNQJUSpRVHd27aW42cft8hJGg_rTOpy5W0G4ZhoDTSYZEJtaPsanmnPaGte8h4w5ce7PCF2TAzw2ZBltcgGCkExZ8LtQar7tvI_ASBQSo_jhfDmYgEmGGCwF8iCBeLYDGRsERiDQ05vTfdB0KHTmqfCQ-XtiPk6jUSju70gZER0RhVWCNlH3ytuDYWwoWMcnPCgOnVzAGn7q6YdTBXFe0D1dgUm5G3J_EIH830WK3n4p8546CSywETudNLKSUGg0", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114078295222554862849\">Christian Hodeige</a>"] },
            { photoReference: "AWCwydiV_LSrWCLbmSUUryDHxkB-wJVm_3OdVM_5qxhAvmu9d-bMWfhmzP7Y31MRB8GvZa3JIC8NXzsAox6h44ZiCQr4QZvOv4bFt95ayXwpgz6odQpIh1aDZ1dtRgPwc8b2bzAsf1Hebpu2UNA9QA01pULG6mClEPlhDYokDZaH85VY0sbwqIfXO1c5z8la3ZcbR2aq06Y4G-ux1OZw7abiwYAuMca7EMzqPDGkCyyxeSXodrYRX_Eg4ae9q9bKuotRdYYAxJGhIRaKZ55muRgd7UECcntqev9p9egYIKfv0_VL5AOTN5LcwAMT3n4RE1kXPSbwZzARzK898m3dL4msKG2myx_QqEu_MqdvhXurWAgfYkbEZ0s-2aXCCLdfmLfMuav2IUhZ_br-oM6g3Z0xjjxDK2w1fF9gc0WQIz6bXMZRF_D7Qkd9wnE6dwHv_33R", width: 720, height: 538, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105602163615621819091\">M4l2K T4N</a>"] },
            { photoReference: "AWCwydgwPpzt9CxGDlL8vKD7l0yQKyTNMqkJEaEXhwPw3XiI4n6DG5JIxEGCrND6WvvDxjYcMLRZkNLoVJJ9aBwpWyGzW5eFJXpJmGECPLdJzFjSM4zHF9hp5T9GMG2ALWlVK-3Ji8RKJTrBkyB5sYnPvLwriLfaz4jV2AAV0B7ReWcY8YotLIluSDwUXjjjkEyoTyAaoC1y2Zmgi37etavYN07QCqpiRbKPP_6UYa4oKS5MGZ9ONlG0krZ6jC1fxMqUNPcsOXMY2qD5RoGdh9Yy1PqPzluGBd0zloYV3Ps8R0auUftgs0pf0gHRMqSfp0_gGmxTcvKmGAMWzAAa6A3O_gyw2KOqU3FdJSb9IZX2BKI52CMxkUaWvpIbwf6fcJYzZFcuF33I9dY6KZDX-ub9e9zBBqdTqqhit0Cie4r9q2qfEwm6", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109414937276111717275\">Mike Scott</a>"] }
        ],
        summary: "Xindalu China Kitchen 기준으로 확인한 상하이 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["베이징덕·중식 코스", "평점 4.2", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베이징덕·중식 코스", items: [{ name: "대표 메뉴", price: "¥300~800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:30, 오후 5:00~10:00; 화요일: 오전 11:00 ~ 오후 2:30, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11213459422129515615", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%EB%8B%A4%EB%A3%A8+%EC%B0%A8%EC%9D%B4%EB%82%98+%ED%82%A4%EC%B9%9C+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "울트라바이올렛": {
        photos: ["/images/shanghai/info/restaurants/ultraviolet-by-paul-pairet-shanghai.jpg"],
        placeId: "ChIJF2exlVdwsjURz5hOdo-VzKg",
        placePhotos: [
            { photoReference: "AWCwydjxbvwbpwQL--ZWq0-RrW8mPbt3zDvvibqRSSI6PuMdqggapqEYkj6TBEVVS1K0Kvj17FyneZnJAT8sgN4Zzmz0ccSL8ZQw9KytO0aWaN_aQ514Lsa7FFyDRf7dLhLV1uDW2Rw4U7HLXi0w1-blkae-cldTrh1ZAwuucceG0qF1BTzPvILaTmxiqPY_vZ_Sgyy5xGP_b2kslw7wzQSC_UDcuFcIxwkqe5W9hOtXXV7CxY96dW0ywandJU4HtQpCTwVwftkpBOlUJxYUybfqxtoAGV07QqpJBMTZ7lW07vwYarL7166Op_hSGdZaNbOY5O1oKpr1cLCCvgtsR3dxDXvLpahJ9DJ1S20ovG14XNOfe7Dggu5J44pIB9JlPd2-89ZrIBgYXflXfSgVGv9_US01Uv6LlUKEGF4xH1QweW2VxA", width: 960, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113482343908983147932\">Randolfo Santos ·</a>"] },
            { photoReference: "AWCwydhf8cawjUnw5kp2V8L5FSZ-VZr3vGG0-pPsX7HXJtfgIr73rEcWypKrFyD4EPKPIFUUA1kKp_TG6JKIqJUhY8UnDk0yxczWCQxe15W2VVtnIh6PtF1e8yXhPoQcs3WhKcN1OywT2yUEYHTpT0JzZ970ATYirgQv_79hNT-G8dMMSHEJVh2WbUfJW3nDecQLR4R1f-JLEXL9oIuRe5NY_vUxqZuiywKGsCczBSIVtOyOP_WN2Wnk1lnfIXL0H1_fGEEAtnE5eDLSJ0bRDVcAtPJ_qcyRvCK3Xo9PQmXSVGdzK27aisqH28Q83Idic3FJmZKli8nui62SORJamERfdNvdQPgIusgM4r5PjNNiWOY197RxGnYE83dkPA2VzQXtbrKLMgZIbbzSwjhs8ZiN7XI6m4nalepQZ0aspiQZc_Twbw", width: 900, height: 537, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113482343908983147932\">Randolfo Santos ·</a>"] },
            { photoReference: "AWCwydhq-yxZGOnmzT1BoUy401iIPCnTx4-t2kZkiDyv27yLMwCmjqnuji3GoRSjwD7_tlA98biEB_X_LLyOTlP4w2kqj-Sg1_R-z4EyANHWYsLXhGETDydYiRZ041-fYblPdT-hk-MGNNpqfsDakKbHLJ9HUSJcP-Pm3bgZRvFyLZs4Ne3zO7G1iZ6bmCCKHzDgxP5fKWqaGRvOng_YF5PCa6IjbQd-1fIVxjsg42UWTtsUGEVc0j5xRGjQ9ml_e5XBuBvn9LnnfqgkF-nkKAxAY4QfhnhqVC6L-kQdy1kf-FBr8lTmC-MTgn_VyYaCHflHJ2ecaQsAHfqe4cFsie-7Ewb9pUauGZhqNlse-3iVmW3RL1QDhpN1IEaIDywv46z6k8KdMNtKTmFPyplM9uya6QNSQHu6slGBtjPtfj3v0Og", width: 620, height: 412, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113482343908983147932\">Randolfo Santos ·</a>"] },
            { photoReference: "AWCwydiL-jhevHSxgiT5-WZ57NtybQ8ynM6PUFoBGkwT4XsHXi-Az5VG5Evzn4p9cvGHmYHwLKw0hhglbO3T_SAKGIpGYGkB5-AdJuRh-r49cACTqgJJlGX_BUa_8R3Ld8g2Z_NGQhnAvFadV-8BRtShpB0MGM78jd--QTANTk1pWNwlLKVf8CrgCuq_faJPzkRWbGnJ8q35fPJmxvzpeA_i1wHEXsVUA2mpTcQNlgbaraySABYEpBdLWqJu9QEegjYYYIUk3KPy2cIkg-9p2OAl23o9dfc3FxoXX8a90HypsMcG1i8S_Hbo6r68Wt9DDgK1yUOuuUopTPnkRzPYzjef7RIfsCEQu_95HQVMP5vfWrkiZm-9YzCwzcNJlJJruFhQ0ypovKipTxyrZKQu8RsZkijJ4HwpJsk0sfGPXyYW3zgadw", width: 940, height: 627, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113482343908983147932\">Randolfo Santos ·</a>"] },
            { photoReference: "AWCwydjvJ8XGwUgxZc_bNDSAlrtnR2V2Nzogf9yx5xRQ1BzpFhQ4wBqidBuSkKsn4Ngk-W1_BWv-7bEhmenydbjlIH2w3PpqnLkDCLTqRd3Zmrw9CFKKAsgcMmsDuDMHPffKpQkB_Qq2ZZoHbkw9IlUIP7p6LQ2tzUFyZGHaNcoDkktp75MXcxLKeT9IYbaOxnbiUpIfJPTGeCeBkqoTYE9og_A-EsQaYDY-Ix_gBpGz256PAwCYPslji2JsrGD12jrc-s7n8LOM7LTq4a_a3sSd8dMcioBgxGzVDfq5J3YxZtbvZ7CxMzmzqF-WkxuSkb0-uc9rGenS4l0P46yvZ_C4O5Q1b8E867eZTDt54bjEpWqB0LgVJM_19oyBdHQyye1NkSeA_3otDgFQvswuUpmxwFAtA4mkMWRI2gGxYVI1YTwyIAyx", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110181463637155747542\">Geoff Booth</a>"] }
        ],
        summary: "ULTRAVIOLET BY PAUL PAIRET 기준으로 확인한 상하이 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["멀티센서리 코스", "평점 4.6", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "멀티센서리 코스", items: [{ name: "대표 메뉴", price: "¥4,000~8,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12163261137018591439", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B8%ED%8A%B8%EB%9D%BC%EB%B0%94%EC%9D%B4%EC%98%AC%EB%A0%9B+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "메르카토": {
        photos: ["/images/shanghai/info/restaurants/mercato-shanghai.jpg"],
        placeId: "ChIJvyekmVhwsjURATsh25Jn61Y",
        placePhotos: [
            { photoReference: "AWCwydgfmBQaQSHL-nCW5TKAANdvjVUq3Hj_6xBYgN9sTC7Y7MB9PtKrXGkl7cZfFSd8PRJR0dkgg8kmbEB6HLfS5pzHpzux36XYaDuxy5je1dnySFvP9Jaii-GPloAtv4HVHu4uAbwCayH_kaTzT0sTPGolON76lfsNLSZtfx3Dq62Zk5T0KYHv9L5IKwB1vPLjl36JQED3n7xrNlgVnl3uL7AI7sS7QGmLpAlwj5saI83ON3a97nFzJlNDY8XI-2ySaqEzmRQPWV4L-ggEGPuauK3oSC8ZrADxWlR6Ac4Y6LhLnt0YZh_Qqkq5MGHVDyHVCVQ_V9i_ooLMHYnhzUn46o9_g6avIzFIod8LpyDo2BUzG3c1u14eGn10Fz7p18ZgepiCLURNParIxWyjAWNDghPJyJJelqRbuqPB8sFEu2Y_Q7geRuMd1xM4rGbFgg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105165709492979106746\">공주복숭아</a>"] },
            { photoReference: "AWCwydgIrygmICQjNJwg_yEMwxBIiW1YlPZtRrZCxV9Ml7Oh8AH15-wh0rf2fBdHAG4pPfP0AxW2UUExckY4qiWwE37Q_C-CJNwGPIYbaN7a9QbVI6-Hfxp01ILvuczfxEnRy28SOzzTSGrPrCzcNyFJIKI6JXFz_-rW2WiUFVXIt45JvYjrg13kap1hFMuV7BcFp-CxI14luS4vteQPyZbuO_PBQmSY4lslwTsrxx8UONwVscy5ok8JKShEQ_qEqzBa0D9-2qnM4Mc5VQWJgjZXqDdzFFC89S1JoUzuV7wl3vBA0xkYBZPv9sKvSRy6eEjynn-osA4FyrQ3-WNoCIUkvzk9wOZTR6OVEe3i-1krrpo4AyufBf4ekCg5yAkydZcGtT5W9WFyCMV2_JBvmlSLIj9pv0nDDK2bO6TRQaYaaIbTAxQnwISFPnEo5sHox49K", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112063605139871884964\">Arwa</a>"] },
            { photoReference: "AWCwydiHSuG5kLQSBxm1AQYLnz3YEs7IPsKEtSQA_FTIoHWTzQq-PUF8hLVFmz2V-AYIBUticjvF5QbKE633m3JIjGHA0JD_ppomnggpYof1rHeAsHU4NymDrYPCDLQ0grjqKlvItzuQifUq34n6YIJkFZxvBHxj9O-xl6UPJ-O8ujKIqqyenCKB8w_bGn3x-GClK6w7l7DOZjEqRaCEz-tOWcBTiqv7z84VjDpTfkuMBxJlbVa2RjVC4V_i2Q2dZvYVMRNO1XvtJm3PZfFMqBGiZBk6t6hvAckRXvOumfR2yJnIjz8onSrZHIdKKf5nVUcTMLZW1RyrPYkFZ0tXXkeHlcjX-P7sVwSfCa4akvZg-0t5M8NnbtQHbdeeGQ6Nei9vHrpXtJi50c7jzR8TiU-D4h0yocSvETt-ieOgXKRG0cF9dnP3gfHCR3iSNxnLzA", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103709088028831705010\">Dfish Yi</a>"] },
            { photoReference: "AWCwydim9VJGwRgzcBg9LaRIM4ULuScntxkVry1p9476TzPvmYZz1pt3nA1HZgrT8zMSnMZIjZfwn4XnImOUKqOzClkG5pYBp1vLdoUIF1r5yVlxlp62QwtNZZ-HGbza5E7F-1DaNqsg9sz4RsBlq98fY3mZxp_xWEdvH-wETLeZDUtMp4qQqB_hV6zsK5jbOKchFZZqAS5LxmdG7I94quZN542j2ViJe0Jyvd-aEBcLa_FBvxPd0JfzZzX6OxcJP8Uz6JDeq42uD0iHDRjfqc0X94FcTUnrowvaIa5bQjrWq5MlJWY7-hcrEbjQwXd3PWvX-a3XRfttadQ3kQbeWPGt500Zz-uPqP_ARi2kJMXfemdWXpNtK_b0DRU3ama0hvaHV1oWIS7vJv0w1tZbkVlLcfLqWpc9omDTdEeIxO2SH1sSYYH-YCGcLTzBRDUfij_N", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107174848095439887127\">shino zion</a>"] },
            { photoReference: "AWCwydhMHcqcStbJQFQYmCqf_NctfPAYdy6yW8HaZM9RUARtDKjd_Ht99KVv6jujApDUtU3rSYjAgjMriidiSLOIAZJkRIrPaMEpFfw9n_eb4wtO8q6P1qRIxtvw5vQOMe5beA3qSP0kO3XbyagX-UXfahkVpKXqDeypPJa4tW9rYk1zv_RXiJ6JGWYkZD658RDVf4E73YUuVHRtugg4AmXuskxihr6spcGHViM_TVH-3mEE7sxBtIqkS8KcP2q8WXw0hl3Qfgx9_EwmzR9ntKQSUWp5za95S9tujMLH1vYwMqNVPSb2EVRJ-UkY9jAEAv5ux-0n0dyFbMjrgkLLZBJ5Vxyb13RL5b1DdzHLw_COPwApTROYz6ZxBX_0T71YoOUmJtgm1JHkK0go_xKdFsxgFRcMUmyn4GKF4zvIituQg0ys-M4SSvPGf38uq9GrAw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108740544214270012275\">Abdulla Alshaer</a>"] }
        ],
        summary: "Mercato 기준으로 확인한 상하이 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["피자·파스타·와이탄 전망", "평점 4.6", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "피자·파스타·와이탄 전망", items: [{ name: "대표 메뉴", price: "¥250~600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6263213587228080897", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EB%A5%B4%EC%B9%B4%ED%86%A0+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "엠 온 더 번드": {
        photos: ["/images/shanghai/info/restaurants/m-on-the-bund-shanghai.jpg"],
        placeId: "ChIJEQf8Xf9wsjUR_ZKr2OupaKA",
        placePhotos: [
            { photoReference: "AWCwydjGeTGTAAt-g_b5lMN72aujaG9L44BLUj75KgYdZdy2VoGGqRyRxgpYFM3Gi5wc_hltF8EYsh3PY2uRBgDLDA9y-EW8ujir8RhfM_SR1qwlc1Zbf6iAyjh64tmNrYJ8cOLel0C2PWdI65lEBq9lqbkZ9clCxdXYwIaA-GULJ6WHZevkqMvB5L8YS53GcCxDbjzd-tyBeI-2bFQuEbZeVmbhVInuTOEvhvkVDxe5Gina-vAm---ps1rmMf8P9SIm6GkFjcNe6sZGeJ1eOwgXlNC9hIq6-sCl2ZL1_RnhpPk4ynmxtpOA17U3MG5jFwYYrbCgXe3njfbnw-lV768_0-5w871EW8KTV-Nho_jrzTIkfs24n1Mtznl3xJ1VLBPu2DBKRC7cd5rex740q4n-4KoQsCYkFMdXYqkwf49nfUphBOUdE8FjfCZlVxovR0iA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117349409092475870619\">こうさん</a>"] },
            { photoReference: "AWCwydhqwBVpZwxczDXX9FtoThQ_MVnGLFyS01oeLCXOK-9RWWZV5_CZbkl20p_JWCdnOtN1BOdzg8sg4RaGKx6g7W6KCQ0q-s8TjVp1TH8hjXBAd2UEE_kcsBFs4nPsHSULJto6lUMm1HDZCBUGP6UhLt4cx7fYLMFti_dHF7MmQeQ0FdU1OussSd8V9n6pF1g_DL8N5s9Jb4W-w7UfSU3j5SzkuRxWZSHgROlSuG7O8sDAue5VrJDwqR50DTX2dgTtnMZDYyzLd5rxkABIpGgMGMTnvVOfrSht3S9IaLNhEZys7xO4miOC6zQuyo_I12_wO47whuMqdE2aY9erZUMNoUY1jbWU5bo2TLpd_RN-H8NRT2FjpRVFo7sbNZ11nx6dJ2hncFbEzVsEltbPEr_qbsT4OBKjRJApqO0DaE1Tr4sc5HCj", width: 3372, height: 2191, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114014430533432266990\">Savoir Aimer (Admin)</a>"] },
            { photoReference: "AWCwydj_8bPFz3EY80DT2F_iJDuJn2Yf7Lt08O4QivkvsBsFOOnx8hiFxNemWZWy7SAWfz80eIhh_-HHALhuvhqjA78EqZ5pRzRHZ0KvY97hC1vGhNhSgNwNx91jMxKvsJCFWSYH0EBfxo69nxqkuOyEl7WdVP3FcCbk2C1kM09oae3WcwNtUk6_qLMmdOs8HCaBmHiWkv26v7rB2aUHMx2mOVstNMqpNXDpEHxfh5M64L9u06lIz1Gg48219cpo-3sUdHMvVgMi138kPQ2CEq3hO5ApFK7mGsJ_y_5ngxjOPcaC3J4B0-OwTkQjhB_kMD7hYUYM5ie4g7zcVSQnNKQ7Rhun6C0a8ggT_fTtiybcRkMRB-vFFR_Gn7EWyZ9Vx8A0R_LmdD1hjcTAu2X-oEbXHdEG_A0wZkrue6Nl3qkufSBRfbQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115641686389972673413\">Jass</a>"] },
            { photoReference: "AWCwydiKTw5rj_Eo7aHlHyD11ktjwgoTO72nITjxK3Hjt4kPI5HGxXyJdoMZxrcXEv2mAoQmicRsHmQYOUuOkDxX1O1-TUjUwVUyGAhW5aENH9voGr0TgwTgl7hBT-gYFvgME_jFoCo8mjhtL5RpzXXSb1jlpkC2t8jD5W5p5hQGBOBnj3A4NqxAXQ-YpIkfpEyjM6wj6GzFqXve7Kiwf9k0v6WpGiirqNm4Kfp0ZNdr6fGsD-W03FsXPoGMqoqyAxihPnLxnXFlssZptZayp4tVd_kf5JbeZPvR_4AjIgbH4hqdzXfk0bjgNB21wluSshpc0U71ji-NG8noz9RVVMbllsaVXn0nEFXQLohjRZgsUlTXrYBwGCKzcL_VW372yJBwc2jdeS0MlgVTb_1KMzkorMaNRctVoMD1IXasQG5hjo-6lHdNksHQBgZQN5a9W5Ji", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103566530544874295472\">steven ou</a>"] },
            { photoReference: "AWCwydhcrM4syqS7KnbEPt12NEMunBYvIqIdfGWV_7w3jLv6qGzcPkYaFkIS_OL-sajjZmnhgsJtY_mdF1W41faxtMQDIeJafgxCY_Xe4Wje-E1Om4qWPTvz3SSCPr0APnZrwRIvh595wAIZX17A00xh0vAUQ0vk9O1vf8U4CJ_EsheDfJGKvq7ne_xW8LJ_j6VoJQ6qylQh1_9otWUW1QGdhJ__uZf8Q7uB2djvhNz8G1RDLkiOC8JQJARccJeHECGExAOx0OJ3J7UkY_vTPjAE2uKFXfJkqzeSk_HE0w0EQqPLaG0p5XQ29HTCcr6vWmEDMLdvAKNQN-QDmUjox-TjO_6Tr0TtXXQRzFrBrFYzPUJGRo7S-SFGlWsswB_aSXVi3Hw3ElwTqJ41PPb9Z8bOBVWLC9ZmUbpHkL-6sHiA3Nw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100329384100796983025\">Esther Visser-Jol</a>"] }
        ],
        summary: "M on the Bund 기준으로 확인한 상하이 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["와이탄 전망 다이닝", "평점 4.1", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "와이탄 전망 다이닝", items: [{ name: "대표 메뉴", price: "¥300~700", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5293621348775615191", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%A0+%EC%98%A8+%EB%8D%94+%EB%B2%88%EB%93%9C+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "에그 상하이": {
        photos: ["/images/shanghai/info/restaurants/egg-shanghai.jpg"],
        placeId: "ChIJQX9YU45xsjURj9A_IPJ9Tds",
        placePhotos: [
            { photoReference: "AWCwydh5VB0NitKar_6hcrQVOfRndmKEwue139Nu5EQdlKVRzYt60oDzv-9q0IiDCZy22u6pDy7SbhSvp68kvDbnzoWYK6QuSJFFQY6j_Yvct06leguR2h6SVJq_qfMukFIcVf2BFroCfmgevEjqUJleA9tinzmIrjvEAAPeN8guCm59AOpWFgzLUa3Yyz1xziOvnLnYJfN1kcZGgstdJD71f64RHqT9fs2mjje_eRvqxGPig2mfBQkxgeRa4weCkxOqHXkJ80XATTj9i-x5wZ_Fw47EJguLpybJLnxfSuW4FXfaHnh4ydCsGd-Ln1c9DQ9KMwCpZPJQcuqbdd9RcTJO_U1izIi90lgclUiFNQ4G3u3h-fTqlbS_qkKuzQ5Ym2r4sTkFKOC5ST_eZJWfnW5VvUj_tm98QboA1HpxzYs3fje3uM8", width: 960, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103217497483603238481\">Amber</a>"] },
            { photoReference: "AWCwydjfc-DZZPl33KGS0V6Wi7HC6JX0hmlZxlvlhTI3oKsenzNPMXL_ygSa10mUX_Ybq5lt3XHuZdrWY7GZUCe3K3tso9Nmq-o7eggca_QU6ZS-lNJmmIwB8p5yMBA_qAEGhakNGpBB0Y6DsT3F6dtW55PsrnfgB-QwD8k9LD2-mXo2OdvTmMXPi2Niuso7dDZhZYjjxxrCaM5Gnt5_h235kBZzwo2o7RAbEMzt9W0WxIw4QCvFIwh47AxmnjBOO5s9PqZ9mmjn2wJv7tO19ll88y10d1rH0fHon_4Vpd56JI6PzyBb-5scZIiBK2utlDBlnCnRQqW3JbktsTMjgbwBhfuJG2XyCwnW2dcio7X_TODrMB7VQRF_5sgJfGTXucNpWXTX3M9fcc_GmFwYFxRWQEFAfI6_qLOjwqwV7Ov8RfU_F-Lja990dm-z-T5THg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104564519622388136221\">Arwa I.</a>"] },
            { photoReference: "AWCwydgytigY9L9BywfF-KsBXHw2LTUebnQSa7mm7Bosib6p5SBuyKJn2vt3AqKNQpU9RtD8adQxUs881u84yThCKD_JuHDKeUBx2KFxdCX-PFRsH7l2Y6Lpx_VHgwv8MJTcewHcUw_6aEBJGKTLb-Qgo802_SMTEuM9A-6al2AkQoH7E38LoQmqBEbfSJb9OPft-40EwkEdeExybLge99RzkxfFc49qH6pti5HhKCclCSP8IMPk59ki5a6Q-eX5XP7mxK-MSfsMMbl8ZB2K65OTfwOaO46tbAylQ6aed2PIyHcQhatNLSze4BJIDViuImg1eYp8bo67RY83IyL_FD0TvC8P-_fGWK1H08fXAIIGFIiIt2I9M0dtrC85L0s5t2iWknEh5UqNq6VgbwSSz-hX5bxnR7dmqFSUg61a30Jn49s9xyaZlHt-EhdLanf5-JQV", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108740544214270012275\">Abdulla Alshaer</a>"] },
            { photoReference: "AWCwydjx8N0P8pYia8cyuAI28E-Klp1YHF9Kv1OXuVLlu-lUctMBLoA8sx65SvNNtwUNvF4fX1uLWddmtwydS4hcdr-_NldAVAp1VyZeKxorcoZSDSFoSAhy-meNa0rwAiQqdY5nphw8jn5Sh7tHD-RREnhhZ_Mo1tloGcY4vMit_f6fsimO69W8LO5bXsLERbTAzRmuzCv5j_aAvDis1SZGXWkE2LPMlFFyC2nbykuAcFOpdfNqTvR9VU2k5lVrfEST9Ol533t7ehNYBTdCdfEZE94DdbqAC_PZHG1ahDnJhXH9QQlyqXgRCUK0K_nVlCKj6sHfF0vysH_xdn8qm9lD4RlLg3PkOZnsV6UM7nAh59XNFvPgwGMqmrOO6fDfsXxS8NxPCJQSf57FyiDXSC37-A6ZGotdI-ctSIOp0cLJkkudw58DB_Qq4c4T3z-zkARU", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104256324931604937577\">mariaboldova</a>"] },
            { photoReference: "AWCwydjKs0rl38U4WjhJd7qyt7KH3_xbDZ7F_sNa7dGXQIWjagQw_VywV_XhTfOv5l2NNpekGavqxCQChYizeKJQodnSQ5RAOApocEDfwiKhEuzDSP41L8x9Q9v4SbeGcTVFoB51jAKbLuurvdg7u3ui3Y82jb_50awInEvh4UYvo7VEIq324Boc4oN5g3lTrsccWkvV6YRTYfWXpvs6SFZH12BHFhGbCcUJxxlZK8KpEeag3Npmdu0nNsBbxppIoHiHVuPVI3vAb5tVepgxOeJ82KUpvJUf9jcd0e8Xje-IslrJxCLXMEQkwS18S7QgYQkr5JJX3Z5RBKP7q76S_cUgfCtFCBIkfg6Le_LWnp4UFvdHSVHhtiRkWG7N91nT8fb236GcwHJDF2OgKApa3Gu1gCdaDLCs1GC7M4flWrjLL5qQAFk1I9trDg-NgFaYwy3X", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100572033924903710964\">Sina Sadri</a>"] }
        ],
        summary: "경안구에서 즐기는 여유로운 브런치와 커피 한 잔의 행복.",
        updatedAt: "2026-07-14",
        highlights: ["부드러운 에그 샌드위치", "감성적인 카페 분위기"],
        tips: ["오전 시간대에 방문하면 더욱 여유로워요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "브런치·커피", items: [{ name: "대표 메뉴", price: "¥80~200", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:30; 화요일: 오전 10:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://eggshanghai.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15802425146389549199", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EA%B7%B8+%EC%83%81%ED%95%98%EC%9D%B4+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시소 커피": {
        photos: ["/images/shanghai/info/restaurants/seesaw-coffee-shanghai.jpg"],
        placeId: "ChIJlaGrMf9vsjURW7PQlizKr1g",
        placePhotos: [
            { photoReference: "AWCwydiAyzunPS9H5FRexjOYPXj--FznKWTv_M47Yg8TYbUxiOpYALwztqVmEub5VZ305ksAQ6_Z4sMfyV4jWTovDTE1aIfiuZnILjEISF2bd2MMmPAjPPR90cNE79EqsrUQ0eGu5GAUEgSnrEOHyeaGd9fxl_8Uv0zd7vT01CFsg6IITjr9yCkjVp--5q-6araGjiqQ3YyGABhnGgjstosaXS7gFwbgk84BjXOZMwmlsSbRNd15Uo5WTrE3sLDALZ8Fgb-dkfYrCQEAt1b0IgpgYmFbcO9n2Z499lzb1eEF-x5ZxQp4UVOExypdOTlPJxFtnKLCrGD7kGnDbqIGHHp0FPrKD-Gy1ka6ewUFCncDvLLgn_NZTtN7e0PqWxIInv9TkhFRahBsAxpM8rW9h18wz3see-rycWRxvEncZHQPIsasxC7z", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114941909172501883795\">psnnnoey</a>"] },
            { photoReference: "AWCwydh5kIHafuDDJcdzscEKFpRtnhptDgkXZj8RjPmZ844dzlLMNpI05C1ha8jmfyYL38cHpCmt9jRp8kqk4lrO8DDJgWXtPjYvreC7N9ajd2qWDVyZIKv-CPDEzaZQ5TkxBQ8kIFlwDy-2Kv0fh9OOj_8raFxp1K30NRRYJDqZLtvcUYk6HnKOw11ETxslmezZ7kw_b2n_HJH-YPH_YVMSskfBqH67v3pCszsODvVGO8lLShK1n3UArBkB3nBGljBipe_Xi6XUVIIBn4_xljglA_bD3K5QiPvOX00kPMkRgqOJHRey8j1MPB4_vOGd5XU3_fKsXhK69KrNE_naTCvLXjObEtRkvx7Ep5AQ7S5pIM5UlKSPzoi3qqDPJxfwnCGyGeigk-6_nCGqQ1We4IZM68NKqGHIQew-jMX048SLy7QNOQ", width: 4640, height: 3480, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104746024467626821442\">Sangkar Singh Khuraijam</a>"] },
            { photoReference: "AWCwydjNmHdo3wCqhkpL39JXe0EPjrnEDp5PQWgPjvC2ShO5kDHfrgxhUdIn59DDZY3_1q6KQefEj5vMGR4deD5X4w2qzAFiIMZ-l-R70PbIQ4zpJymoFqebwcYJuh-OmjIYscqD1LhIahRDd6oESqAn_xmJZWhkNQjUzIeer13TgJpzT7AVvQU2yHZPuO942gtWeel7OiRU0HxrTf0NO1KuwptQvt6xyj_Dzao7sYWEMvPsUSdYWjqE6HofFRS-Bk5OyzbMfEqyvSSo11X9MnhLovYMg3VUDAX4_4d8Ls-xAuw74htzuJuhoD5KP-edouBv5x5lurBnY9bcY3LrUql2tSCYCFQtxQKq0dAyQKil7dkywckwC0SfbatOmbl7u9f_TFHOR4FPmtB12oNDZCcrlfMceVqAiZhcHU2wzIQNtzqd9yU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117066878863994406998\">Pin Wu</a>"] },
            { photoReference: "AWCwydgAmfGxcgsxkIY6T3UEZMeQ0a_VxJt0k1StK0HbVqmFc5GVxFhZqrR5LZfvy6zbeeZcWAs39eZkWHBXWKoIFg374o4dkUVJMs_7WnJH9-IBIT11VCWYJDh4gJXamtB70i0kspJFujy65Ry5xtc8IY4tRDCGJM9RxEsKLvSGETSh2cC79mAmohBqOHFB5bWy1jP1U4Di42sbhJs9COcZggvl4dnFR0xzLEH9hGztbHhR1_-KVOkto6dxp9Bh9Q1djSkInfjBkE1cfD2mLlr8WoZ5smG7s1BFIVSuXQtHBGqSrIqMXOZPiw6smX2461XbZh2lnptuBAzpvJ7dfiPzxb7-RNAvlR1OlKTQIp0uG3ZPC7s_MbGkSPFWxLP_G2yf6jO8QQOLdsAN4ZmBfGh_JDFUMzy8ufa6vM0SG6eb7IjPJw", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117919855752578803270\">Rachel S</a>"] },
            { photoReference: "AWCwydhp4_4NsnHkJQ2FCuMdtewT6oX_6ojQC97VkOq9OfPCrnIV16NaB-qLYHWmyAkar91I_tUeXhuoT2ClSYPqOlwMIs9lvNVeSw7-FUjBw3NCLWQHl3UPXbXyKGDZMLDSPIFQkIsWcXH3vR3KgahYLIU5iEy3nlfat6S2-Bd_KDdivB-sa94tYyxEhaHWk4q-bc9vCzm7vws11r8-bjBQCFHusdSl8qtoS_-BJ0qfz_s7g26OYYRpJdI5viIsMPIp_0JnxwdoEjaVLhSn61IyCycVIoZcKpDkTqPf-9csnumjemArd0yTXvGTb5aqpqVDYYtjUXGpYQtcNnozrcPuV5Cd0OPSS_0R7AyNvn750yAD0XFpLaVlIPoX0SrgO8EUccdiMxI1MvR8ecSkMRK6qaSA5WnPVzFbwcWX6vIBl4w_avw9R7fgQ5gKjRvSk_OO", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111652264804556071602\">Sheila C</a>"] }
        ],
        summary: "상하이 로컬 감성을 가득 담은 대표 스페셜티 커피 브랜드.",
        updatedAt: "2026-07-14",
        highlights: ["깔끔한 맛의 시그니처 라떼", "세련된 매장 인테리어"],
        tips: ["쇼핑몰 내 매장이 많아 접근성이 좋습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "상하이 로컬 커피", items: [{ name: "대표 메뉴", price: "¥40~120", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10043966798984232805", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EC%86%8C+%EC%BB%A4%ED%94%BC+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하카산 상하이": {
        photos: ["/images/shanghai/info/restaurants/hakkasan-shanghai.jpg"],
        placeId: "ChIJZSpH9VlwsjUR7zaGKzQLiGE",
        placePhotos: [
            { photoReference: "AWCwydjmQkIBY0P1EfVyO2AS5xS699vTautF-p3ahywZdK5VzMWug1BZd3IJKp8wYuDBPdBwOhEaj5BTXWSVVf1vGQ-MCdT8PJlJS1f9JMjZqYTL3DTTlNqq0Pr9VZaCRhef40w8KvIu8JTymSzzW0ccjPQvYvaXWfRhZ6hQD1IQbXNwsnnXC-CaFXF8pdyS5EcyuxWK9q3cL-VgX0nDlVaXLwGEdEapp2E4m_0NJlp1HE0tqBFj6UZthgst8LjwCNTrzTq2I-W7tR_uKlqH9BS9aqFpHPmr4IFD9wDE_-zM6eKORN8Xduui_jJ1UgxovytdDK5Qj_pCg-YaNZofpGbLYk3Kf0qFtUfZFBHWZx25YIpwu2WoX9-ExlxX96pwsqH5VSvMjKtKhgDv7qMIdeXlSDSUJ1J3cH_vczYi_9xq-eU1Bw", width: 800, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104035494709000067771\">Ceng Chiang</a>"] },
            { photoReference: "AWCwydj9L_X7bx4l7lsNZlOZyVL9bMS6dlZ9dlaK05syBBTQejW_fNkoPJPVk2YvQmqsb6vbDMm7b3Slj_cdTxs8LlNwNPu0Bn-FuTYcEm9vle9mf3HluEc18FlcEsDDea0wd18zHCfzFQX9E_hXE0NQYOr4Pu4WnClxKSiRT8DmnXcYetKnAoqjzUd4v7su97Oo_9QgqMUgOyXs9HYeqTMGJ6LTdBbL3UCXBJ6ek5bpUMiOqY7g1ovgjdVjMSCydkerUhy69NxXHkC7dYGU1fSmzmpSe7IG7eVpLcMQd9Jcb0kN16UClq8oW8jJDD-w-k26WH7Kzr0g3OPhXWIUwQZTJc88N6nScN8S1x2NQrxnFFBkyWz6UmGH-TfoyJ3A7DGovWRNVpVVcESe6fPGGyyg44jLTovObvCC4fVXJeV89Dh12w", width: 3264, height: 1836, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103799815337086266986\">Abbie Senn</a>"] },
            { photoReference: "AWCwydgZ8r-tRE8Nf0BZN7upq2LDChFnHGQG67UG6jaIDRMmL7yGHFXt37704vlEBgGEsZ1eM45aVgf09ZW3FXqRx2FDDTGtFJk3eE8e7ThvaLVBAJJTOSVD2lVqTqv8ZsLmWxFbRrdDSK6LDVdmjUU97TOQuJsU6yh_NpwJdS7SeZlWuKGcrZNPug1VlwxvBjM7BtlLo0O7itTK7F6AwP4R1xI-QoSesF7ed_YvYDb7MRDt66qz9CRqgel4909Bq2LwaR3fBlRWECg0D0SK4v40uX07XOFpz8_GlR-7RiZhYStuirlORiEq0E8VEV-UL6r4Fi6_ejuN2n96HKieGlk7yLBd3cj5sUPWMrDAJKkrTTt8T6VKde3x5na2ZR1-ttvX0PNalowMlgUjkEZm-99bUw100OFRUg91V4T0Ct1a1Wmy_dZG4_wh1qWWj_bo0w", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116520472038541999281\">L Chan</a>"] },
            { photoReference: "AWCwydgH43GIIYv4JrvrwwIxRMBDYtkrEKI8rheFpK_l8cuKgMW8RGfwKsHTt8vv_symemVB-kpzZOfcx3KzzO2ewb3sAY2hWw5a7IfwqAsK_q_5sUJu7G59LS3b6VNC2Et11TtO7lex8UA_f8XcGApQLB4u-mFg7PcBUC9tFdO_fbBRiH71fy0N5zJmtOwUUtfxrfqGO1-baPTWlCxv1aH-q7SjcVZ-nIIUU41NMBWQs9Wf7Tujr7gWWMAqnUq5JR9cnKtdoJe3-hireu4CcM5BXh9k3F470xse7CoKZoMIuHWzMUFVjyqO5Kz2Z-QQYctHyToKFTyZnmp0c60lNW-d6YgzRPMP9UvqeAtoiO_f-wZnKxqRzWUSaWXHlVOJvcboE9Vq1mEFQ96kyrismOc_ah0m_dSgapYHapzC-l1wvrcjR02VUYftDiQAIsi8pN4f", width: 936, height: 555, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118264204900404669320\">cristina casaldaliga</a>"] },
            { photoReference: "AWCwydhWg8KGiPC50qbYSwLglaerYnJXWOhau2fnctU4N8a0rGGuY35BbCMckBNO6njuUJi5boixVpC41paNFz5iZObLIl_JthXa-73-_vSONBJ7iP-IEkInKFZWDH_Pa9B0-zITkkJ4x5k08JPnQDMt3_TKzIdQtPtB3ID3Iqn7RYiM-eOwleTrIAYPF_GgFI0nnvzdSrI3qrdHQpPYUT-gSNFpQ9LyBXwRqEZ2AZByc65e23vZWYaLCWa4WPv7FBS6Ow6OJn1qs9MiC9mzE2Py6P7wvHNasHuVqSMo8NWAwajU9W2XiqKtebuW7M-fdcFpEmEL2WC7ifNc1ES2WSRJI3fOkDTKm53UTLAZTmW2lmmXPjzVefwwE49jeZ-6-jU5qSjzSV2z2SNti1BiKC-vbzy0u8kSnR0NdQhlqrAdaMA9S_FSj_AmH9JTyaXjJQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110175978608659141473\">유경화</a>"] }
        ],
        summary: "와이탄의 야경과 함께 즐기는 품격 있는 딤섬 다이닝.",
        updatedAt: "2026-07-14",
        highlights: ["정갈한 프리미엄 딤섬", "환상적인 와이탄 뷰"],
        tips: ["특별한 날을 위해 예약 후 방문하는 것을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "딤섬·와이탄 다이닝", items: [{ name: "대표 메뉴", price: "¥400~1,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hakkasan.com/shanghai/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7027879537208080111", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4%EC%82%B0+%EC%83%81%ED%95%98%EC%9D%B4+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
