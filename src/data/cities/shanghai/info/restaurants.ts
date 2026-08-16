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
    "명동본가 한식당": {
        photos: [],
        placeId: "ChIJ4ezmZ_pwsjURY7En3srF0A0",
        placePhotos: [
            { photoReference: "AWCwydjrEaTaPgVmMjoTFKgHFWZIbhrd_87zEm2Y2FESklGVdUFJ3tzBXa1HkhDYSli9Km5jcrTLy1PR_VgwUpREDnPoVQe25u9CUNoIIwBlwNcWPPxNQ-4OtaAfcPeRuAHEcAZmvTW8CQJjD4b9SQ5PH7oXJ9jSwKEZHNBC6U8ppfFNHKwPsYIcS3_8Aj-4C6hd9yHW4YgzllfsweuAhiwuGWZ9UMhF5xDZs0aLEfYRpyY3xuHV33yi6sL4FnBvs16QrqXRTB_rRnZw7G0vWbfnjvHLkJgSGV2vMJhc7iVEkPFeQdvwdFw7aFAlNiDL28hcrruTKaA7m13Q3LCI0AxZLE7J6vP35I3WnolSrp7k8eGuBzQnhZZt4zmNyJy_lDTbrwAIktgzwU7gD4iCO_XRHG-rjUJU9yb6HyBiVC3T_fEomE0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114257339072152397651\">Everett Diamond</a>"] },
            { photoReference: "AWCwydhvv4TN8HAL7P_2_-csPj0ySOTgKzccoMSfeMvR46VzAKKZ6q8ZqYniQJ9GcTeSJV-6sqFix-6RxukcPnddXZGpY9tNESl2waZeAizTPhqzaBCy0DtIodPMI4RfDV5CPBSZZpx5Shg7yn7j-T5x7-VEEbHHgKmFyhZFtmFTpBoeIEgxOcyPwVXMtnrN37QsY0pHGYfmn1dLIfgqKkBDhJAFYIm5JfXA5YOcHey3OWl40R7QncHCwyp0VEba7URRbTVSXQbfOCiublOapmrwRIsh-vhqIAmNn6cS_6rsD1wiMslhY2ADVZtUz7ak50r1Sll4CYcrsbxPcc1zvR20E-nwZzp2VOXxqxOHpNzkPkkQo12JVkTIeU3mqrDwgk9LrK_7DxGSUj8-ZCQOCHcZOK8ZXdxfvy9Jst67Omvq1HwIEQ", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106097084141434214859\">Guillem Cáceres</a>"] },
            { photoReference: "AWCwydiF8ZUEISa45yZLbcM6YB-if3WyxQ9lpttvaVIFCtmheOsW68ruMNXPGb4omCY_zfm0uyCZp2VtD-PjhrdFTGSHC7f2hsuwdikkoPlqs2IH4T_LLm0RMBIgMpl1WUFWcnyYNxxRBFFkDtlg0whUve2Zm4csRU3TPJEg_NQ4OdF0tmc37kYwUlp5YB50kHkiE4JBmCdbwr-tVFPFr5dOIzOkdNwv6NjJDy2Hss7Fx7vbMvzFq-_nSzKW_Z4oVAHQBpiY_FjTqpHHn6jqjzib2jZQ3CNUvFsVP0V441QdDHQ1PbReZGRgYIFH3RxAjFXE7wPthcgCbqexjLzHdD_tlYSYdIEhfWmvOWGD2hoZJuSg18WqWncrLX_u87u9RE5YSbo9HQpb4Qp6LdmA0kpXEwrF9eUMUOFhyK_wE_16rA5G6A", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114257339072152397651\">Everett Diamond</a>"] },
            { photoReference: "AWCwydgw2obgDQDsczqd5YbAyH12s0yAd6hPJU7l8kmhULxMdSHbIHzuNs6m4hP_Qzq4XC-6t6ORoasBwyNwoJ32V11I7EQKJrFQjK0v7u9uV_nQDX3ZIkz07iqcxEkPcAW0acWEZ5NnlIof0IEHuJWKpIYyIqsQfcYeCSl93hqvSLCTAvCepdngZNhHhuRzcD5HRUXogyscUP_B2mOTF5_pxZoSDhoYrkxxvB39MWsbWP1_fa6cczF2R23zM6CwqOX6umkX0vearesEmdrHggMgkSQFnH5gYp0jBxJRouPXaGn81QKFcD5Kgcootb5v6rYIX5PS-PEmCX3YeJf_82_bNWoA7BytmIPcEHIPRvYb9IHigySx-yfhxPYsB1ZBNqHCb58VNfANqXJpi5yQ776HfvszmK7SLG6deORToF_jVF337ug", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117393076859685917096\">Joann C</a>"] },
            { photoReference: "AWCwydghFand-sOougCQbyEK4K_fpZo1UETpdYOug3QrZJIII6XIH9mSwBs2P1Q9F3xuXKdqwxkp076s2oThKZjQXMFxUZ5vdNqmTiMLXRwt7g3vjNbOqg1rDOb5sdM3EWGdJSVuPc8TXOLMr1KWladPa2d2HIwBtSiuLeo9ydDR8AcyjwUBaHQnQBY4fw44TjaqdFmdk_sSioywSY-nRosfUvUEudhn5K_3OdNTIN0pPCu7kpsKq6PCXXHeoy7-lkM8on7YmQmqZDb4atwtuwrt_a34_ez0eAbr5JaQoClVul4nrsE9VMS9ItdPgoe6ZmY_Mf98DioMM35AKHBtZOtZihnZc9aLMx5cRLfsd_pO6_o3Si2kSjHQl392Ru4Q4X7Mqsr25AW6KWLbSQDpXQgJODiLcDbz-8kO0EHXS72-jE4", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105359846744645677237\">eric h</a>"] }
        ],
        summary: "4.8점의 높은 평점을 가진 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["높은 평점", "긍정적인 리뷰"],
        tips: ["방문 전 영업시간을 확인하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:30 ~ 오후 10:00; 화요일: 오전 10:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=995512992750088547", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Mingdong+Benjia+South+Korean+Cuisine+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "본가": {
        photos: [],
        placeId: "ChIJa4Xt7BRksjURDm1I4b_jDus",
        placePhotos: [
            { photoReference: "AWCwydiii9hZjiy_JlWoKBR1fYKb0m5aoLthTwsc7Zl4FwI0bmhto_l6tuVCfLSqI1NOkI7i0cUIM1-KJ3GSWS8hTGhQSmxNw0PXgLQ73yjlVwJhQNbItYd6HoJ7m80GVJYn2O3nSY-P4QQ9rvZuQ0vYO69st39nGmP5iT7qOSSSRuWur46UY17JBrch7HTHgw6ch3O7uht7wasCMdr5wV9RZvEOwUjIsUyglZ7Z26nXijuc30JsfXuPS4rAChVnMZ_q1D-LI02E88E--Yjy9DV4Dz2wvFZfwz4_rvHGcQG8_mLKlLwnMRwL3BpQBDl_yefRpsD60Jjgwtxk9qIF06bLKUsAIFiPWrgJBWHQh9lSdEl_a6pLbKFQCKG0xhXS5jtyyDZA6uHMr7nEftH9vScouu2qtX3_6fwif7gIRAHvf9N9hw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114330196666125428044\">Ksenia Grebneva</a>"] },
            { photoReference: "AWCwydil4prdGHkMJgXlosDHmsmArkYbZ3LFWsRFMZKnhzkwnItu_t4mw64zDPKwQ8lSVS77cvT98wAfeIVN-AfdLn1kRJrkN5_XJAetPnc-pK_1X7vVQoynW3xAxG1EGS8HwXBM9CjCMFYMLOsudtJKVRKYZR8NDLzZwqYHklC82q3ONIg2flV1hBti4W3_dlrUFiqiMKXZAlhzxvJuyWxCSXMgQkpuH4xdSQRnWlrxTBJDUrQQg6I9dhE3PEgxj4sTU6BAtmTEm3hZGCt7SpRAe-IT9g1ItI_qxpxWo1iVBEGopgJZNw5JUpLS_8_PsjZMwQz_PmZnYVK5AUk_b9lxuDbAGnKlxIWntd9Rk0O2a6COktD96_ZVXQTYVT6FjktCkfqKIck2G_jsAZuDfbMvJU3Bkil-yIpcvqz2isIBLiQdm3NC", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115208573091194693487\">Georges Pedale</a>"] },
            { photoReference: "AWCwydiS4yqwcEc59A_LlVpDwYyfeI9ed5_Vhe8Ul_NO1WhP8Fu6loioq9zCHYvpYq8DVjZJhej-mYPvtq7SrI5pcW6Na4ePMCTsb2TN4qjjwqzGRKJE8IFyyg2Rd2ieMAKCq3VE9BzwYXqaBNhXAYryPPwmvngHGU2wdgVXV0gC2Q1r2ULwb8X5k3ieQz_7ULQtLi1hPrji59xyjjLt2j_GuTPX7tjuMnssUWtva0O0sL0JpGNKf8RshBJQvxR6M4J4cdqefrroPRyaDaJu2bR3MTN3dH_BH8T96_Pv_mTa8XfhoYfRRq_bNrEj-yx_1TGRUIlWPYDlr6ErjYFZ6raRbP8-S2zsvhEIQZOpOMwduZl6zVn4Ea_s4O9CQlA1YoCPl_h_njJMDvUeMyitC8hcQ22Wy-TCbMWFMb5e0JlMoPIudw", width: 900, height: 675, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117907685045132090297\">MH The King</a>"] },
            { photoReference: "AWCwydgO2T-yuS2mBJQ5ZYVl9Bi-VTIqlFQHiR6VOIH0tvpBc44rbZ6Us5-LS990dQ-xxjKG3fU3pSPzQWP_LZ7bcWN50JpcybTJSz7SdoXyCrG7xCcr-GY0WCgjx9nQkWTnyFaYrXcXOO1e5YkE2By6-4wf07plut3zm_sbA-e19cFrU5gyKE5tKOe0t1b7P55zVA4lfjtBFJ4JnafxguY3xY5-XjNDrTmZ-Ni8us9TOxx_D5IRuYNZ0weXsnOoxIkSqDJ2t8ZaPVxfw8IgAjRGzivyb04D2A_y9VOKb9chdv5Bq2_vVZQWdtxDagoGGCPkfGTAMwJ7ZZzrieGFT1vWzGTsmMgTdAMRrL-dFCZsZLFRoy_9HQB-aI32eyRPQay_IAzDqh2dQMUCVzihf7ykPQcMFLkudHkmH9SNGb5x5-C26PO8", width: 900, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117907685045132090297\">MH The King</a>"] },
            { photoReference: "AWCwydiZXmQB2rBPO9hmebtaSi_iUt-C2sFMQ_ha1McNxZ4T3HjcGBar-nkJPCN7ge_Kmm-7tzkFYcE_VVvpKkWxJhR1J1f64hC8McVSKEpckXoXHLNy_im9i1bJgIOAJFVqoqG-5-hotfA0hsCLzgrm0mVa-aCUHqR0XbY0r223VoTnKqHunzqLBcylbSiwjWiUHZYstK8ORc3rtaSluHfeb9T2JAz7L-W1pj_QPe2-lPPKY6GaqvM0jaURQjJLaz04H4Xc_-VugB60DN9B0hnqo854w0OsECvENAJUGnhNZ6GStTxxFXI3wlzE_Lha2SlBN4y-wTZf8CY8gTWgOo9zcU3F43Xbp0rEO5R_jsyMJZudqcpobk4efMFiFdMnlJ6DENKrmVdwjJT8BinHktcaHeUKXkoCZP15UI43LvStuKaGqQ", width: 900, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117907685045132090297\">MH The King</a>"] }
        ],
        summary: "한국식 바비큐를 즐길 수 있는 인기 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["높은 사용자 평점", "검증된 바비큐 맛"],
        tips: ["방문 전 영업시간을 확인하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국식 바비큐", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:30 ~ 오후 10:00; 화요일: 오전 10:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16937725661844892942", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Ben+Jia+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "칭허구 숯불구이": {
        photos: [],
        placeId: "ChIJ8eht7hNksjUR3Vnm6Pz_Lfc",
        placePhotos: [
            { photoReference: "AWCwydhq8qqDFTCzbNOY6T_ZI0qoKNIzpxcmUCLju7-Vl0RALvHmFK7jOYqJnCv6SEgChO7uebG7qUjGKW0LF8N0MDgS0mVRR-yRlnbj1xCieEPAjqigDxHr-YM5Kga59ownm6Z-DT562N0anJoNAKXwoCyLdVqgwn3mTXBXQrSZeRDJrBtVXaNfVxbLYsq0O_PcXUelv0Uy8D2s5jl196LWnHUmwReuY-muDrB1o30q7vDZpeaFoBVmI0ExVAmgLnsAq2KRKGgHYhUNonbU-7T6HAMokA5qV-LexCUX_Itexnxn9w3qDP3Tw_uzDip421OIfldg5Tn2HLdbdBPjmRJHb5YC2opx0maIv9LV1SRSGZHGtCps20Q5QJsf8Bog6jLJr9TLUcIOS7zv6eZxkt0WGiUHdQf33ga1QvZzn-fuu2LXY6m0itjF8EiM-miMvA", width: 3023, height: 3023, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106308656899538038518\">萊夫方程式Life Eq.</a>"] },
            { photoReference: "AWCwydhl5aCHF3Ncn20hfZreko-xWEn5tIwTn3cQQFKSxrEPEoo_NeN-lvptM1326Akm7_098Ild7nGLkPjBRQtwyw6juMTZQ9YGzcMhTr1mMhpoEgr4EuCpLK1W4iqY3VFgH4xqZj1tOvbRQBLh3-nvFUKmvAugLOs40FXkktQp9tDlP11mqcdWgQyAtJhDMBWXglpNHUovR_kMVU_mTYmJgofVGaQzrvn_APMjf8LO__0h9YPy_QtOe_EtbLT1qx3I-AdczljeunrA_Z8gnnrihwDocaSCA0m8OQ7vKYeP84DLkkHimOhQUSJ5rS03R3CkJazqA4-lnqD3dR4iGpHQRLZncCDAqAGupVpobRAGpqxxSUXkneGL6K6AW-DuW40TYGhXTmpMHwo7OZ7ZfQqAXVZe84wqAepWzTLVUUbiRXNhwyJjecQW129dEBnf-xfj", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107289978391660322166\">Kwang-Soo Kim</a>"] },
            { photoReference: "AWCwydhc_7YtJH_tfnHXOobG3vc4mjAwqjPNlhJsIchJ2SVCixWsaLcWiGM9geRet6GYlt3mFObu3x0Dn17dRfXPLfwelyjxzHKtTG2fwFqEJR-RoQjukIjQtl_AIPGIVX-T-WMtoYaJoUDqODCnX8X7V5E4qYJAEi2J_Dql6XSGmti1nkcsh4FabBvLicDQbz7c2qV4Lt6Xr47meFOr-N2ZzoMVdCHE7XAvaPjsrg9vdfXfs8eOLHcChgYklX9pd9d3l1IDNPxPyZI8fJi07Us6JkhB2zz7FcxWYeaj9tLhg4QVykdgNqeMgZ5RgR5OfaVyd3QX-9jFQj7FRFywbJwWzFvfUlD2Cm_zZnXeKfGMlJGAY2BnPKd322t3_kXmBRMRcRrDVcQOxJMcIznkMcbWjeZD7FjuWh5yJIv2lUThnTDv4T1qNFcj17eTMXWvDARd", width: 2160, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106308656899538038518\">萊夫方程式Life Eq.</a>"] },
            { photoReference: "AWCwydhjqxPY32Y-yNdAiUzO0gdNoNDpObobxBcPLxf1N7bL0YufuEpnD2xBT1jRVVZs1OLR4cL-jR90Z3fSCbEShQTsgPlqQm2w89RnvOEXwGpNAKNa283y4EbmdiXMo04HE0i6u1lvkuDsvZKZxhS8HZo8RRCds5iHdSSaubnr9n5W-H3XAmuaxd0B7i48taBJRf7wtuUDX5Cc3nDg31iTaiX0MHdArRR2oNRCqW-_JdEP3CKJNbAzwoYqCiyg8Hdyt7lZyIdfpbmFu4G7P1MXCslIsTtKr514nWxw6wFV2RKxR2AG_eDDFSorjcGNRu1nLlnlsnJoiaPtwQ3LPheAw8yoedp8Wj_ORDrq9q_RZTk2N3YROvzBC3yp4uL_ZzwOl9akjg4OUc1AjlXkCJrQMYyOjzqcTS9FN8l7nmfG1WM5YBnwXglrG_ayfHOerA", width: 2160, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106308656899538038518\">萊夫方程式Life Eq.</a>"] },
            { photoReference: "AWCwydg_Ev0c9onJ8GyN3wsjJWkXWkI8qXw3fDc7RtmtAvj_UMDdbv6Ie0p3zUeCG9g4du6YrJ8SUfMO15Jx1sf8oBUkCbiscjqO07ntp7nFstIK7b7RyVqz5LKprYJAaoKaidRQkQtoOLj-9moYjh3h-Lmq7Qw8UiH2Y6e59mb4Sg84vtf2eF2Gn9FZn37q0GpxTOMZ6_ptTqugnrES3BysWQwrzqZUZdGCvkXU31cXc9zD2OJ_CkS_lZ-sDvNFshkYFiYkfDL45QM0ZvxxXgl3kuqG43P17R3gzXzA3qwcAPd9WamkzvzTZsKfz1jppFGhquWO3e7cUIjR0wZWuHbyhTfTlQf8INV8vQ_3ldaiynsQJg7otDZcIpoeMimf0yJ-M2PMTFOr73CLbnmmrsWu-TIR6iuZ2ZLxdNgQEX3EGSqv7noD", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114187871045557704407\">D “Juanito” H</a>"] }
        ],
        summary: "다수의 리뷰와 높은 평점을 가진 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["높은 평점", "검색 관련성 높음"],
        tips: ["최근 리뷰를 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:30 ~ 오후 10:00; 화요일: 오전 10:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17811173563024431581", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Qinghegu+Tanhuo+Shaorou+Restaurant+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "평양식당": {
        photos: [],
        placeId: "ChIJc8ByOqplsjURqxFHHfIs3JE",
        placePhotos: [
            { photoReference: "AWCwydht1h0fAEA5tpRH9YXQBpXc5_xq4imT55boyLY8vJH0JYJpZdeXAxennqrD_qBwebYRA-jnb7_DaUUWfy4XYxP4UWn2b2eyYUv21eSL9_eVYMbYwAc1uDW6cNwOTcAgcCqT678AuodovQOQGJca7kXxXkbrpVOjCTRtr4CjOhXDmrGN4E9WLIETJVk18u9_BYIypkaqUO48HSCdCGCruaTm_O7cUESd73rVlbEbHGR4qQFnQ_bTcCAY4c5eo1GvBOG1Y0oaeaeUFVRciQ18VcFUOD9zxr13cGh3sgMMVIXUToIH62lCZFpfg98WPzVniYTOqVy3AUngo4WSp7YUwkPrOoSSK2yW9D4X9X9lgfG6tEY0dqrxvv2QRR6tdcZnYSIBMRO2-V_Pn_UHQ72p3cu0I_555as2fSjoKL1Jbgl-Fw", width: 3468, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101799827478306203146\">すし</a>"] },
            { photoReference: "AWCwydiSGCzpAARLm7p6MRMyEvdLpQVQivos3hmhNG_BdYkANizPOGzSQlgzh41Jl8ClTwVuQiDEiFNM49tXZDQCqU9RUjI7SJG3Z8kvOSCGpPmVj8WpMlDYpK6rFzTv_giLZR3wfglK8GFlk9S7ML0rkN_4p3t9Ol_-FSW3oRHYSXN4vTR772gx8WsQ47LB86sYDKN4zwpR8ETtKhEfawSv1IRGAy2Val0mt8tUUqahYT3qTp3TQ_KSJhrlhhJ9sa4kR0Ag6OqbIwKXTUeyaiGCYYSG8m9xB0FQ03xZOOYRVGJBWEIK-B_xHdW16Z6Xl2asrgfAz7JTEqWbB_deL6ULC9vd74Mg1DGQGldqE_E8D11DmZpO5dEprfbkhtw-pIULGnySlW82pmoZqdozjrlqzcM_0CFz0mMkWUK_qoCKShfj7baAjM5QuPz2ifygspBZ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101297273827582825125\">Joonyoung Kim</a>"] },
            { photoReference: "AWCwydiVEBn1jp9_d1U07n4ZqjtfpXNR9sc22zR-zdesve2kzenkU0N8SAHulGpdbECi-Jqq-NTA4RWMAGAjVmRhgBTDqELXcNBL0H9y9e8-EXplZCQsz1DD4yij-X2CNlUFNDO9rd9JLAoTo2xGuvbfyBQrfj4Wp1i32UmfjoqKE1UYOjYF0ZfaGnZcdI-XSr2St7rG2nLzZfY027xuggrrtvnIfm9a2XTBzblymF8_UUa3iDA9NAFzt4Wjb5SlfyCxiEhGO34c10yGXb3td9HpvT3fQIGM3u3qA5YIs7L9c5R7QXMNK8krdqRZUqvKU_DgvUOnyY6G8bmvMwml7-usCujUT0jYKy05pT3HrLVXb2AUK9AI9ZtWJHPEaB0hwb6Cyv2TJGYFYcLv6MnvHNaOW62rOPKFxKYrJvxGrnj_SFc2xQdD0ZEjlHX2sLUd2g", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101297273827582825125\">Joonyoung Kim</a>"] },
            { photoReference: "AWCwydglwMaKbjHjjKx53uX6-moMu42SoH4HbPCTR1zAGmX1cRxjZ_1grljGOouNfPwMXu8on27HNyKoja9G6gXKOoO2csSKz2IG_7L1SCOUgTGT7i2yftmw8c4cfTTwmCXYKKzCF0yAU67cmlr8hzRWcwTn7cwoteKKQVin8Tilc_yifdsgYj86Y_f8yJXq1hO7sTDJe1edbIXKpC32ysPQucMQjufN7dJjdzmGcQRv9vA6roRVF00w9TRphh9BphAunXnpwbgPj3xkhx4CqqOeaAnIrLssBaFwFXBljiSO470WoN9dem7mwjg3GyHnVLb34HQPRDcoVIC42G0XLDOMeqXbxKUi4KQ8FdOPxP_SB6ovC3cPorDC9Cg-Am8mvEZY5qIovn7xrtJ0Tap8IDNQwFIrWEEIsEP8JO9D3aemuFA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108959025408836147813\">Yongsuk Sung</a>"] },
            { photoReference: "AWCwydiW_yB8aiBsNsxUAdB_dvAwLT-FdESk_nmR0RtHN07zhQo8Ss9Z6s3sNkVVmsGe3K7xveaBX-6ge0YuClhrX2kUmWIal54pSl_nfSiYM1_sEo3DZhGTZ3wKjReOAZyBQ3pjP-gX1XUCvlL40LqjMn9mCxMuPauuNmNbxzmZ0cxYFGlEpAPHs7PkqXvpV_mI0YTSNMHg_dKbQxR9Nzvc0YT_ReQF1KHM8Tn-4FLRRnrLzhX2ZA_0ExLwzq6fbk6oiR4EU4YwYtySD9GLh-Df4LtbaqBMczaoHpGr-6zK9sqg5Kqf98tTqSfQfQvs73MyObyoZiOh-bAKhajW0TxKbb0D90_8KsVVDpgOmqnDWcVJYZufdBPVGhy0bMyrZ127MwfJQfJI_MF3SmK213_LTgNHFGkZTTEWzp24BIKq29f73gJS0vPKdkqUHHDAX8ny", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101297273827582825125\">Joonyoung Kim</a>"] }
        ],
        summary: "프로 수준의 공연과 맛있는 음식을 제공하는 식당",
        updatedAt: "2026-08-16",
        highlights: ["생밴드 라이브 공연", "북한 제품 판매"],
        tips: ["코스 요리를 먼저 주문하는 것을 추천"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "라이브 공연과 일품 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10510325048760799659", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Pyongyang+Restaurant+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "프로페서 리": {
        photos: [],
        placeId: "ChIJOSE03W1wsjURHvHZVBmc-b8",
        placePhotos: [
            { photoReference: "AWCwydjCsRK_Bf2BUYnteODHcwbRMCP7ZTZnCfsVYexcWoIBRbSfggIQdtFI2VF_CP8jpg8wamTOMXJ2G1JpzNGiaot22mygvldAabGEsGXyVcSiH8E4bSU6rTHp1UvDBfCxyIVLHqpUJmzT8ntJdew4H0NEsJKnpd04HwxzG23QAPEzJmwFZpHt8Ju_4NP0gxWKiLsRdEMSih8-3bfqK2tlcClwy48kVTZdKh1J52Xjxm0fd63iBCW6k9OlzKU2NWyCB07jsBlZJ8fccSrfTwJGJ7VJA4tVUAWdFNuejt2po6Zd9hzVyCUIVyPRpP-bouM-B8lK7s9CjzrtWogVMBuzJdbzDnl7lYo1xf4MMertmuWZuNifE9TS-PP480VXNtlFECcYpSUpbjJqQgrrRHQU_kYWGGBSsJuoGSccTqovWYP1PYsHX8ryVz5rmirgsocK", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117451244276212668469\">STERDAM</a>"] },
            { photoReference: "AWCwydhmStY-FokUJmUFueGbY8iobmUZ4OZxuzMRw8pE1UkQiRl8fXovWF-FSC0McAYT23mFniTUH4qbbKSl44edipjzsSFjwAZDBcW37Ty_aJUkQqHe8i2uYH7KLnDQb1DrZFjMx0wA-R4LX59U7RUvXgOhSYdGmQSkpumTNppSokfCSeWr_CiYtddmTlw4n8jWNB1OXcqhEqVIindEmjBm7pID21NVoUNzfMQGtoJPlX46dy5vPNsSxI-iqNmxF-_m-RF5Dm1PeAPD3d5PnTgYeozKeFlR2v6k8xy5kcdsanp5Lz_kgMvEcVXdOYz5okyBrxAKbEc14eu1gKlNbsvgZvhLSVxNT10bdfkkbXRKHHvsiEar5fI-a5FkzTP9SUm0TtkM04T_yqZPbsK6i_nj0o_V3FEectydojduaLXzB5rPSWXdz2hmN3TKjvEkzoY6", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113786211044480188651\">Piter Halim</a>"] },
            { photoReference: "AWCwydjX4X1ajbYx11_YS3Th9jxgLwROsoBPkvQTXrN-dY2n0kAeouLj4B7vtyXJh5XTF1qmxJhenQclTpik86btStDOE7N-Ilr6vD-HmlQ6QwLjfCcxcnOw7l8aRvVNwvVO23rXNPALH_QXTNBgZNtxYSAZVhzjyuyOtm6Auso02XGtC8nucyM3x1clTkq0nafExPCHV-I5SNOApSOaA5R84tjEnYgbX7hK7tm22l7xTEFGDOQCd7hXNpe93tXTAKFBb3sNQGTta_rmqT9DFdAE3FKjm6nADAASNRE4EUr6ZuuY1RSlzYBJb7SXVG3VyEFRAPtZjaO_zOm5Wc9FaE_S4onQf1laTmejXBapeiPHQyIdnhAqu3_D5aylDMyHuz2rxiABA0q2NKUBPoRfm3cSBY49zA1GkbD-8P2mQ3uEBFTPKmDozDWwep0lSTpwLsPr", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117451244276212668469\">STERDAM</a>"] },
            { photoReference: "AWCwydiwvPZeK6kNM5giuHygdjS44Or4O04oCccAQFZW2xbOAKNzlyTrnzW5l4QEI_9kdPR2rqef-aeyrE8DmsO4xXfP9mkNXQnUWDHpT9rKnWE_c6-Pzyp0MJ2mEVtTq-hLqnBQJFJF3yEZPxwF3W_S-yLe9vfmpu6GJz8ZUac5uir7VV3LXKD-dZf7AWMVpReGvPAmeZAnC9Rp5O8rA6QZSnMgVzCnv02R7e3d7iurAF6Iz5-KN5bJiA2d4a_kYKFOIIzAQiByYpX_gSymWvWMZUhFco1Z9XvnNqFT9N06kKcXu41FXo8XXgkNiTMp28P6BG2kD6zlB2Z6Pdvm47_DqLiFTIMgobO2zLWtCDEyragwxx869eMdfuurJsQQZXE1dAWo96qWrgFnGTuYy-cY3uXGjlzJ6Luod9EL4TXeqFgzopCXay9htArsOeeLg3xu", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113786211044480188651\">Piter Halim</a>"] },
            { photoReference: "AWCwydhMPiEyYY_AQqQhrvYIAjHRetFhwULWd7ix5d1-YjsHZyFOqzLTQ1QCQI7L4q-U-0wg5QiDdcwGvL8VHGjZHjzHUspD0g9D1kt3L7WiSUuOkU99l_HlG3NX28iX6ceRbVfdjfc57yrr4bsS6ApIiiMMWqExHx16atl-IAf6ctyFPeSgXsibNe1W_JSO8SYaqqa0T247k9rwUD3YzhzCLBbRrAIXcu5VoR_6oyDe4I8IKRyySAI2gE8HygihJnWsImfQ0_lEHqtCdLK4gIN_NFBgx9fvo00TNh63AI4laXixNlBdSvUjyGWykmrwHnR-BT0UcHo3Xm2bc5Dwq_D-u2su7_GtJK2PMlasyHi-S_s9OUM68gK7aJ5CQIGAbT2GJXHn4oXFhk6RwTmhAcF6mhdQcF5fibm19LmxEsDwmz2Or_XteHFK8yOLJrhZvEvJ", width: 3060, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105861262670251230234\">林明宗</a>"] }
        ],
        summary: "높은 평점과 인기 메뉴를 보유한 맛집",
        updatedAt: "2026-08-16",
        highlights: ["이탈리안 앤초비 삼겹살", "베일 시그니처 김치볶음밥"],
        tips: ["대기가 길 수 있으니 일찍 방문하여 번호표를 받으세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13833259363056873758", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Professor+Lee+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "한국 수이위안왕 바비큐": {
        photos: [],
        placeId: "ChIJ3fjCkz93sjURTR5efF-NQlI",
        placePhotos: [
            { photoReference: "AWCwydiRFR9tdeySxYBIhkYFzqP_DOWGSV2-B-97GKt-0ROA37sZkjaaz0p8Zw3N_w0TaNXHZ40eY4DcPrCJXMfrri90zMFLmlnTTltWzu0O0Mxg08tg3O5AFsu5kgMh3XkEALRsfmeqkcHDqooNhQ2gmtJW0QLVlf-WsfvdFfS6ywMKiSKcLyWbv2IY9QUnf_CsPBZCaBrQ54GSGfQ773y9t59nDo7Ydtl5gU_1iEE-ZsTKacRFNdl1nUMfwEVrwDW3qONR_VmyA1MhsFMSyYHCyvIB_0reOyWXjMbC3oUtCVY4pcLSvYRzd6LvbM6ZJepfl0mOUsF9nSevYy-hJkj1EiFleWogIt6IGPxSxd9vV-eRkjcAY4YvGxl0dfbAWs3CmdjLn-hF2kBBXcHyHSAqN_d4Ebau21Cl4PBpvv86VPzKUWyPq0m1lzBDUqV2Og", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112092774782537439041\">Chrissy_Wine</a>"] },
            { photoReference: "AWCwydhV0LFgtHoOLXmdD2wh1Ya6gBmZ2Y_gOu-T0Ei26Rc9SGIIlqGma03VhhI2DX4cQqU0LI8g4ozvMylRECjNL--TgwgVa6YSVxKXXdiQd34Zrx5kmg2pxyUUMeV3miW3p_pBPSCBxcz5wlq8o66oKGhQvd1oU4yqlCeKWXVnPqM1t-GJySFOE3fN-SG8FeZ9dfE1nVHIGWwz43tA7It9fh0gSSFaPEbmQuhqqeAHw2rofc1weUo5OO8iPqOfI5UM0vryCjXYNe2jUuXIQLvP4rLBeXx5DmKaxnnJrkUU098qBAxqVyo_E0f4xDnKE6pOs7NKVI4fElAuqtdLaMSyZ6ZVfKZjudAndE_EBkQ2Sb64ckYCMwBPfr9-4e9QF6yDy0kjbocNsbhthLP3qSa_ObIbIU71u5edHzPzjhal8s6yC2Ag", width: 1440, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109775317325864881281\">Dustan D</a>"] },
            { photoReference: "AWCwydjfIt9vhEa40eHuzQslXHneLKaj-7U97TXeDJK_TpV_wPFu8RD0JHx_i9wMWoyT7GBFECK0CcBWRCrTtYkmk9WS3rOHV_O8Dz0hTey0aKg-fMWCNlEkHOTHzaj0OF8rL1r_BmB45dgkZjdFB5Dm_vwod5sELqdzT4nlThnhdX9hzzhsq_kSi_bWcYCsv8ftNQmS0nJhJSaZs4TQrDwmOURH3bzz1jk7SAMTseO8qJLulFwGE4sJxTlh4VZk8xQY5eeyykZOCSdDHFyADkaY-bcbTB9RQk8Ss2VlN14tB1wiH-sQ9evlCYCDEErke9oyQDKnF4UmZpaV2oTkrqnb6SlkPXBhlaJrIiygkm6LX8m04Ez3Osdfm1FjDpACno2g9XA_cDSZ5Js9Dvdfyk86iO8jTnLIjae2VjQQyjnT1qPD4oS9", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113374855203656430322\">中喆廣告</a>"] },
            { photoReference: "AWCwydgIrsWAOUiRLdXEeRSr2b_YhCh6w69dxULUWu_Z5DHZxf0IkHQ85AfgVC1aAyx6RH0nxbuXd1mNuglmo9cTfZqMrYnnRCZlLbkPw4p82qEUJ6KnyidO2j6X3_MJWquQQSRoVMPgqiYMXoag46rPC63YkrEoY-MeP4DwSnEvAySIObMT3C6xnGZrCd_FQwtcFBzhHz7b0FCvCl-XCanE6cRAZj11yQVNTahj_ALzoxCwbqle8vHVK8knx1MEYzV3trDa4z8nboT9tTo-9HEitKA1Y0MHPcLw9OWKUq-7PvLonugSGPwDFeEvAs8PrskU3tdiaXZIj3323mNWCj1c5JDqDKqhA7SAmMyLZwgM_nveSACPMVDB2DBU43GYobcHKB34UsIQPQeOYMHmoWxD77KpnHFYriiqBdFdJNDCdug4f8SU", width: 1440, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109775317325864881281\">Dustan D</a>"] },
            { photoReference: "AWCwydgESc5xOu2CjKq8tEzWsFEp03hynuSZayk6BDpdtQ53g8fYBzblG-iUER0R1_pAVg3HLFMJlM_s75PuRyQefT4dumMuTVCm3RyOENLYA9bKOjcywdPNg2req0ILGZZxpKX3WDOSrHEEELi93B_WBpoY5yxVjjU53SlWlTt1ROriklxsrkn979xpZqbvv_DSDvwkSL8kkLWf4QO0w32-sDyGNMvxbiJWS_9T9KJBXoJ9ZZV_fcqZTzDP6UCzRHLi_Nb_o_2CLRcq0Y8joVYwVz_84S_o3Fm_NmVpU6Fz_jPZBVJbWoNTklA94E02N8C8rynXL0_pvrP2G2jt6RFUX9DfCKkPt1MYo84qX_0L7HgclIpzltawew8JdXyc_VGYXSmeFutW3SE20VLiri9a2zW1CfNox15D79ZPrHslPoU0wp57", width: 3832, height: 2874, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110277327391096670946\">Mr.Nobody</a>"] }
        ],
        summary: "한국식 바비큐 전문점",
        updatedAt: "2026-08-16",
        highlights: ["한국식 바비큐", "현지 스타일 음식"],
        tips: ["큰길 옆 식당가 옆길로 들어간 후 컨벤션 센터 방향으로 걸어가세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국식 바비큐", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5927455500820946509", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=South+Korea+Shuiyuanwang+Barbecue+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "본가 한국요리": {
        photos: [],
        placeId: "ChIJTedqa89wsjURjApykc9K2qY",
        placePhotos: [
            { photoReference: "AWCwydh5__c4S52Vyk3Y7gM6foq-G6VHh8m9h3mP5KCsdZdKUQusoJUMVgGZkHCX9-wjUw6czXdV1Z2IULbBLssw7RdfE0mbzXwF6pBVplMyRMVTzYZcXI_GAe4fJ6O-YpEEuRq66Xw202OfMjkPfXYfwC3WN0qd66lxAgW9UdJXR4auUp7pxrMCDCxv27fO3PzwiK3yylSaZhY1loysSGYVkIgE_8NKdzAAnQ3lnPKvOgl9w1dYYcNP9NAMvEQRan7EkIWjnDDXPV2a2FT_E8ThH8J_296tij9Nerp_jSXASTy8j8ynzKHLTBVDr__N4bmQgoIGYg61d0dh7-fDpWZSMaNHZpogijx2dqf68H6zGMj5R-28qYySCSWnuUnUFlTajDuM01b6oJ9uOypdviDNTlnSh-vJjGZCfKbDlebwu-cIwCNsPLkUawfadHmvNNbp", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110977705380379017029\">Bio</a>"] },
            { photoReference: "AWCwydhN5zPxr0bu3-ixyPkR5f4y5TU42K4XmFUO_s64HJoCYsv0o28hjMQYb3KhnVepVAHOF2tIRAUYuAydR4rGrDBXfCzL4WLxv2mLp_akjtaEdh02VIhpS8hen1ve7HbXgsLvZJfA0KXIdDmW9jMVLURtFRt5WqFvP0G785VLtZTbgRWh8XScyLrrcO-K0CDZolGlZlY4TzXHIYU4a3zpKHrp-9eMBoTISWyac7KPU1TD9Ne0pb2JOPS3u-iAAlYQuoOolp58HLKpYHgpzmrjN3CI4Srakkiv_BZM83q_OTNOdlMuy57DScAdkX9u4xiY7ARpqBRApml28uBcgJrzRrk_MhEnCaLzZ9IWhG2435m3Ew6OhIc_MV6cVKn6sIlWsGJAvwrSxhoeHwBLqVygq7Lcmf-7cD3lHefD3TwPbpbUCjtD", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104893824216594920209\">Meli Dad</a>"] },
            { photoReference: "AWCwydjCt3fBadwX8FDayG-uaRQVJOBFmOArnFN0MAJ2-Z0-9_xWGqgkN49GBv0Tsn2eQ85x-PiK6dGfI32Sbmn-0Ns5maiDOJOd7c8oWcX3UVHqpJdjhTpUFp0cqR8x53SWuTiXq2RVaSy_33SCwLogFHKE_h8Yy1eBXNiQwiGH-Gx6w3RW6tvIWFDvQG9kZ60owZTrbTtweqzcq-lH3g_ni4Mvr-xMDsBC5krJZeZSJtpzZ15Y6BCiM3RhZxBdP7OJHmju5wowJKI4pTHiXdHqGCr0hqd7KrbOZE05NGi2-XT0C4Od8HGdHyH76G-FMk8gO8-1g-YzjOUUZ4TpSqjAC9-JxW8pZSvVHhkKYIy4wZTt_0ocKlhPQZRyq7KyM0_xroOWYcZ62_w_ZAffiE3eOY18EcIPPFdEgE6Oer6o6nFUovEPR9nGVSTKwqFxTCRf", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110977705380379017029\">Bio</a>"] },
            { photoReference: "AWCwydijz4DQZ266M0Ua0Kvahsf4t5otwvuO1NB5ecRmUHLd1ahAzbDtB5dc7SdVTpT6nL_p4FaGu8RbFj9vrkY9kJ9pwbgFW6Ru_UzsnDtXu3G8TuftCLtDzQOygMBBlJYCo-zfiSlKZ2DUWuzwSXMeR8OWtJYr5XW7blViVI53GZbGwEE0ofoT1b3oFapTSgQGlkRumLZYWOItsS_I7MROW3Zr2ciFAryAUtfdgtbptvDNSqI6qYWtuVPsILQ7F2LHFueT_doztNTFs2ReRmmHlBB4bJ0KrR2iAeMrpkOSKQUDVlmzoNv5fazxXfmQ4ZvHpMRV91SEBxYvTk4LnlKY_QF1B0bjY455KfYt3eYO5lp0PEwNU9k0SnXJtAZjrKN8L_dwtVIhlKaVusdYglTqgw9Ayo4bSJwfp7aDjveYZy7St8U", width: 3120, height: 4160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104893824216594920209\">Meli Dad</a>"] },
            { photoReference: "AWCwydjFalusC4m4llBbM2_rim14u-hhwmGO3-IOftJBcDsHmxp40-_xMOCCQcV0i-rHZFW80jWXK8PpaWkzI95iVmvlHZPfwuwE6B_GKwkCdxjBAL6uG9D0ywIU0v02kmwPT-Z0BbiFtVewb6g03KaJjDeA2lBrYe3gz2RQVG4o-KhaqcZVTBPvlvTnTLm7KoebPbjk9O4yxjKd1apQyui6s9oP5IYzNij33NaoRawaMlRpZNdiCYQ1ihHURBBmboROen8d0gFP-3MBJLcJ8nUz4seXFXTRAPp5vNTphl2f4qEk4mW0uu06Fx96BJQiUrO4CCQ7q1wNjdbpjB6G-L75MxM5LPrl37bUHmTko-81SEBkE5rvDiZV6WS-4Jf4BzI9ke96ClG-K9K8aEwFFK_UfCSysHDL4skAWHz7PP2z7K4EZ8He", width: 784, height: 588, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107961444030274459610\">黃敬軒</a>"] }
        ],
        summary: "합리적인 가격에 한국 음식을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["고기와 채소 요리", "다양한 디저트와 음료"],
        tips: ["바닥이 미끄러울 수 있으니 주의하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:30 ~ 오후 10:00; 화요일: 오전 10:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12023004410577816204", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%E6%9C%AC%E5%AE%B6%E9%9F%A9%E5%9B%BD%E6%96%99%E7%90%86+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "마키 하우스 스시": {
        photos: [],
        placeId: "ChIJpQOYQgJwsjURL4raAVAIKlg",
        placePhotos: [
            { photoReference: "AWCwydhRfyZM6Ii0NHXrhM2SiiVzsnfEJo_0m6355zSNYejrq1F3BaSe-LpSPVJ7UgOlL7pI-NmNpydytM_WiA8WJc8Nal_dbUGK8EHj95Y6ufjrdJGzoiEp8zJe_PUVWAw52SWwyQQWEqw9ScRbQOjN7zKYxXqXxhwHv8auOAXwwxW7bN1OTMEwCv8aSDrO6evYMHjb63lBEFYWnivdVCTp7e5SIEH7BGvRu1AnJAr_5c2_CogGFzMItqeUo4NI3cPlm52wD_FgWb6K36Fx0GICcP3CrScbFx_wHGt1qL87DrgiejV3-WNSj9X7wXl4w0pijkvsPBX1dku2u1jDzwcblLk0a4vIn4S622UFCNpOVxpoILG53jUoFc8VCp92_fP9XKUIeptGWWjHjTB4O9FVd7ER9FEAL2NYOqGL4Fd7rOo", width: 1702, height: 1276, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115467924968817447634\">Johann Tschmuck</a>"] },
            { photoReference: "AWCwydidoUG0H4tInnzYVRI6xUne1fM4T8UZzgyyKRbcTHOajTAq72WfQ905vdvsQKQ5OJK0imV6l0pIcxnRAQgPAx9A-fT-PwM_T-2W46U486BJx2y9Mq7dOLKzuFrp-cyMVc4MrZsL-kpnFmynD4zV5ycGOqsAiz_MTUWxRZ7qI2LUqEKBwri7KE1W7Na_BSc3QMxbsP4yDwfnWbk0uhQJJ-f4rB8I1orz_YIxQV1nhiJNhTCZTROcyZUbI_qAzBMAfAbndsvewDOcuyVNz9F57qrkXfciOU7-tccJApNYJ1KECMUbq-njI_trCgct1kIYHAyMa0-PX7sI13UkARhBTi5HYWCK796Qs-jTu5mHIY1k77ezjV7pSRPcsNm_Ss8VA1E82nxdNbehwj2jW-QeSJFWxLjzQvUnkHxkZ_sDPZX8AbfxbOFeWw9mh_IANw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114941909172501883795\">psnnnoey</a>"] },
            { photoReference: "AWCwydgjx_7JK4dsCBtxR8erRep88-17oA38NR3RkvqVK03qmLumzN3m9KC965-YlTKsWavdTBfcyv6huGsZiPPHNyEk3r-izNATIjlhXr7ECJy9We43G8IkwL3ZNxAapASxRNg5pcwT6wCMiU0_yDjGsaLczJN92NVNOfDqNKN_ir0x3Ovk_zwfaMJZRnA4KzDWsYpNjo1JwLuyISKzIh53yyuqDqAtG72qCzN9CpxrfP9PdDvru_fqVYH0Hh2Vrt2ZeRTD-pjj71hfCZMEfcQOJh3W8RNU73pjcG8PT5M7PEVXu_Lkh_4F8bVl8NUCk-03rULhnTXe2_E4ASlRzhLGjf1k8sM11o0wEpuI-3Ao-WXRdbRmZLpsL5jhqtj1Dx2Vga6cetNsohDBRjUVk9lae_c4TYGVFE4zNjxaRZDlKR1HMYPMJ8bjbaIpIXLW3w", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113007380341091046467\">Steve O&#39;Brien</a>"] },
            { photoReference: "AWCwydiaQqZKMR5d4f8hPtkawIJAdcwPF-I4wxLUIRoYFx0oDcwtqB_GeyYDYdyxaHMBdvSV_jfUUZ3luhU5CcvMcePi2e4OWbIa0UFl87MTTdc8THqtUe3cMQ5iDhnyycsrKSsgqob1PjjmyobWiPqQa2EyYp47cWAFxWLNV113DyjKd_7GL8qxHWabywuz_JU44tYM0bbnYSt3MHPf2t2NYj6MfMtj0N6Q7ZfmDJWDh3mWuQ5-dyYTBhJ62KLfIPIJ5hML2UZoQlFKNjkLeXKZKgfs1V9IeTmBGsD8RJ3k1DFVC6nOxiL9CWafrs_iQUsw07rlIHcuToEjDLz6XvpPOjRvBiAm-LeLe3jIRufx7odampdA7aM2sdnkQOepZ-yV8l_Xujgf7IyQcXyKo7yPYtT0no0cRqZfIE9KeHsnsBORk04", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104292490254607660414\">Matchamochi C</a>"] },
            { photoReference: "AWCwydhKwchB3pMdXwCW0WFMrCY0HiGW8rVYozAVIqGjSI4hTyoaGMJhBoFCbDNdcc_jbPQPQZvUKBwGdtljRhfMSAQv6DiqarVKR0ZaPO2xJY3UI-HRyk9WVB5DqjXzQlLKO211GA18wpqnwzVuLMT3mHHWWMRFVlNN3SbQZ6eNvJoeWvrW4uiOb9AW9MO5lI8_W4sAJQT0ZPw1d2NUoaOltqDwz_Q7eOjR3W3pt-HySLFRstTrfauqEcqcdeiEVIWLY30iQDNzV-KHt2eL-vdoPSnFi4y4xfEarCJcgZmquNM45zSxgPWr2JcIrNF_-E9kX3UN-88ryx959MLry-NLurnBuYneexiHywNw0ef-KEhppGr6DnsG_RMvHCic90VujVhK0kR-SzU6Gqsk9e157Ir_F7Upb8b1ZwVQrIrIjXCSQWUr", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104292490254607660414\">Matchamochi C</a>"] }
        ],
        summary: "스시를 전문으로 하는 일본식 식당입니다.",
        updatedAt: "2026-08-16",
        highlights: ["신선한 재료", "일본 요리"],
        tips: ["메뉴 구성을 확인하고 방문하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스시", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6352899364081011247", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Maki+House+Sushi+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "유즈": {
        photos: [],
        placeId: "ChIJ45Y8LAxlsjURkranVGPhPcE",
        placePhotos: [
            { photoReference: "AWCwydgKSAvvqk2-xi2MEXqcOgsyGq6flu3ZrZUmsZE9VjoxvA99GsvoioiMUusYgqhVrImI2Jx3FN6lwQOC01hNkSr5r1eE3-8G_Tz7TghOjjG1eonnvvie685so07R1HetWlK9rS5EdprNPsIFKaFVzebTpbkjqMoNyF5inDDZ6zqK4ckqmdHEcDmxwsdMrua-b6f2Xho5nqLxdYagWI8_YSGjogkVwm6u_dyJ0yrQNDuXmqbeSGa2BkNCN4h3qzK9iQ7Ttz0lqjYE8lsZihNSRVhRUWQ-_px8wyiovwU9c4ISWLqu1fmTedpEKsw9gU-T4tCeU-pWbyYvlAYQJl2S-DucpesVbW5V-SdET7VDi3tERaXRWWNq7UtjOPluGCnqZuzZFhkX3OoWgwnCwmzYUCdrcovz7QXDkP11wyB7riGFCg", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116028428814180454063\">Kenny Peng</a>"] },
            { photoReference: "AWCwydgAnL4dFtc-ds-hPXq8FqaW1zixTZ55LOTHMCUY90oJeiIwmX1fJahVD5fHujwoRbaDK5KK_xB_ScNXE5nXNo4lfGuyI22J-RmUOdZvFFH5pPcetLltOGMNgR6G2QTOdAIt2ow39knFrWHRGVEVggUhXRusgZF5I2XnEpBbcEJrggcqP1-YdTyRNe8bcY9fOJO01qS8pW9N-VuR69998--_AKEqo-Gc-LHyEyjvrkXWHhnsTGiHw2o4IAw84axf1p-H1Apc4VkrmR4IW9gZDiXhgT7tGprP_vyDetu37r7TidfQidZcRT0lZfjXUycE_Uh0AV1eiyCuRoPHGfpNFdxPBN3lkRzyBEoE627yZyfXypN2KFf_IP6xocoJ8-heLi44sXbzSBETbzjZH9R_3Xr0WFeAD0BA1hQA0LwXbKRaiX94C5Fr9FRjDLk414qv", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115696838656230481760\">lydia bae</a>"] },
            { photoReference: "AWCwydgyk2DSrSozUiQSyZ3qYoSRwD1rooESQLPOXEFNQtXqc11tvOB1GMrc9drMlQY3_F48XtZspNFCXmhZwrHSndgZdUGLE3zoruA3jmh27Af4jAMkrVMDPQGfWIGPROTB8erO-yT-vJlRLrIq5Arwbt_A0eiOc2hV-J7x02h4M0XYJW5lVtmUCLyKNrVjLPx1TuAchAFwS56dGvpUuvUPRGtzssoy4LKdSmPAj5pLtiESHRr4_mixnhk4EWn9W8v4RBLI7bgpla-sewxlFe44iGiE3ViP2pR7yPBIXCDOw4A_7JM-ag-sTlPLjFhjINZ0vk1PJF3Nx-WgZgqL9gzPgH570gwk9YWwSrINNFzUjl2rTIKzRt6rmoe9McHkzaDdGHpsokHTA1DXthO3q8zBrTvr_cQco7wWpFVsOosL14kUu0U", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110379052755426389811\">지윤필 (피르짱)</a>"] },
            { photoReference: "AWCwydh9T-OwSpica6GDEoF3UNIBwOsG0WK1CsBn7CGx_Lnkbws4g3Xy5Mon983URva4lTXr_OdqWhTC-merffpIPECjc9eUxHhQhrtD9qWu6LOeEVdsERgKLtccnLsMEmbOcC34HpmtRgK7_xP_WTGeK5vIVVvzZ4g0Hq_1ZoX7HP6vmNt75-a_curMYtcRXfPLlO_otidj-rDWnD99Yoq1mDPDvqyYE6-OCHTccRe5bN6W10xWz_q_7Qj1V7esr_K2qpZ_OKhf1L9JlfYL6A4MEAxkhMLNedPgDu-_F3ihqd_ViNcjspBm6H2IfvcSNbUpQz_yosmJcliXodhRguSksxDZjjp3oczEDTdaL-vZRstldRk5eBGUVw8fdZb6uEb8mmDvO7gv8uPAbK1vYQE-_5tLCAvBrLptVMRAvjXyisQjxw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110379052755426389811\">지윤필 (피르짱)</a>"] },
            { photoReference: "AWCwydjbRHxOW9QHlZPlg4c-OMP9VMhIAJ14KOvFeK7EAMSlFE4V36fTNfb2QMllfM71dPDfeEc8erDCvM7MbaI98izQj0-1FzHxnKyFz4Z8bfoTerI3E1S6oAbw-kTmR04pzxWlZPTT4QmGcwZJIDaIaPpdNSQ7J080W2hqQmCrIzFjmJNw3tU497vr09d_6hQDpCplHDHT_w7jGvMpSBkAmkSTIxyWrxebHB7OjRiS0VnjxxQPBuQGdSN4nf5FS2ALjbSyzIu9OWBFBVmqHaArytc_S-FkjKI_ZqOk1r-XA_qHV0PKkx5ILVbL2rbO8bUwNCxCKXfsI5fSVNqP4WYxZLpADSymRKaIDBoYgBb5UJNF0nkczbBVxTazX8jekKZ0NUa8sg3pMJs2yphOjJeLN3saXLrLCiItiwYqKoHC0HSGYw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105056482686420658118\">Eric Kuo</a>"] }
        ],
        summary: "높은 평점과 풍부한 음식 종류가 특징",
        updatedAt: "2026-08-16",
        highlights: ["다양한 음식 종류", "신선한 성게알과 새우"],
        tips: ["비싼 메뉴는 그만한 가치가 있음"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 1:30, 오후 5:30~10:30; 화요일: 오전 11:30 ~ 오후 1:30, 오후 5:30~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13924533439637730962", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Yuzu+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "헤이세이야 일식": {
        photos: [],
        placeId: "ChIJt8ST_EJwsjUR50dZGU5QDJc",
        placePhotos: [
            { photoReference: "AWCwydg3p6wRqEhq64w4EU1kOHK7V23FkKy2Ff5Ph1cTAv4W3LFNDTQiTXqWb4SLxIUuYdpJ8OaSC1FYkxbwYYFD035dV6Nydt5pxXmOlliZovnclEODBZnls6Mcv_DMwAoqMO7xZH3PGr_WRaow7_4I7NFA_tcYdp96R3gUtCXJCP08lNAyxnDPG9tTFMLYcYatpLXDBYycLA7jz5BRE99ESldRBA1plz_er46zwVfFy2H2oSDXa3xVvXC3WarVpZwbpst3zvRIf4RCRcSNYh8IJ1mYbgPlG2PX99t0jsqUE8Orlj54xK4QZFBeWJJLhoGCgrDBv33nEfPwkLkcStKzZkkPCvgNzf8KObO1r9HGf0biUYT6uWVqqOwnOL6yR-F8yH4pN4iSfNIF7A51M7uDJLQkkZTuvP3w-_HUBSHtQ-SVaw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110054945046881289170\">Andy Chiang</a>"] },
            { photoReference: "AWCwydjy0D7kDiq6Phwy4wD3KPAsesjy09wANtkhrVQCHwjz5mhtein9A5IK93I4C9qdyrtcTNeYp5YQ_bQ1d31S9phjleJCqOm--tnQ51iINs7jqFwB7dO0QZIAtuOxRdX3KLdy4a0OfU_m83kjyt1x9k6Re5w36FLNdvUijN3Vj1O9QrLSBsJbHmZhTC9sKHcBOiB-ZHQBx5P8ZrhPTXu76QkdnTvPY1lnzEi0fXURSJbkJyGdIyOgBsWLKKfGE3sepUqc52jJr8cvszmlpj-_yUaqWo4OR-7zTy1KJrCQ_1Qb0-3DDEyka7oj3ATL0JFTTyrdsAk6ewPSOJMnMp24hd6rWZi8fMt1w0BWpYvoCB_gOb5r5R9iNgH3I3XXHlXRg0sFsipqcQKYSZZAtQk3GArkZXStH77YYOkFNOGstR7eKA", width: 2800, height: 2100, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103217497483603238481\">Amber</a>"] },
            { photoReference: "AWCwydgLI4OlyBt4ghVKWOZs_86AIOAng5OLosfp6tlpPTxrBWY8aVMOavYlnA3QbiVcVxsefqlX5WVWu3Wt1dXXvaGwlAN16oyN5X-rx-c-nzzICdxzXZa8kHCUJDKAUVWgYKx66GkkMvYvmtz6nzjtaAFlNOoYZN5x4mydKbSmZkCBk4UkI3nrggRqKtV2dTVk0Ebfe74edOuCTgCGXBxMpdwsv4TRhNt6NNSmcJXhpqYOjFikjxww_FKzjstnFjpsGDuPSN8oXvPHizd-N6HxWgGPwXV8yTS_UE01zPYF7bRj2Vsy1DmNNL7Li05apvgn5SE-AxN4EqFiWzazwr6pdCUgvpt3lvitpU6kRNGe8WEIrWmMK0fx-qVSnIgQA-zSRZJXD0xxjQU92Oo18rzrzXkFumZ-lJk8XQ6G8UDLYZ_JkkA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105406766928590835266\">Kenzo*</a>"] },
            { photoReference: "AWCwydio8IgaDMmcXfmvqQPzPpbEC3zqZAZhAMsJVv-PLDMVi4fpSzutfd2xX_iesgIB3yCcy6twF8vrna3Epigdhi1FmAU-IWPv4ItVBdfAzRYEQusiRFx2BC5vV_XUkruFYtroWkRqsl1AXqJUhRt4-0LKvttcxkKmyqj_bL7qZqU8w6H3FVWfnmqKvHeIPmGsIrCg89AB4w8W4uVgpP86vD2zer987pogj4RTGYAzT__kN8WSO0cH4hVhSKripeULdcpYfEdv6vbq1PU7kmGZ0zisjccLouLamk3YW9Ea4w9oUmAB3ZoGysty8EYhswylRxwTCcTU6dzf4eM92bCMaT3eM82FgGXZJKzrenJX6bXdOjAPAQGyHo1uSEYAt4L7FILiRNRT7RLnEbi0m4oxg2-eao2t6RGooUdYTQneor0", width: 2100, height: 2800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103217497483603238481\">Amber</a>"] },
            { photoReference: "AWCwydhX5BEVeLISaLMKZfBcOgNfKGj3bGFg24U5WOnUvOVBtJNbqzgU3s8I-19w_N-R53we2BOE3Hl6N0mtpKtZ_q12Y75g7SP7KCIxT3Gy_8aS4fzu9-Xbndfl6eAztcxcqO_sKqNF5Bp-keN4OAfIo2DNj5G8skKOnWwO5d7BsqG1Ol7nRxxyDdTsIG-mUJcOjYpdk1NRvRIjPQnnK3SwxZiMxV5sNKeANUiJ16IFe2YCHxWYncClwnff2uFAip-tOPSWQRr_Fg_PbwYCwCVjYEkMWRJZnDVcIqVgUFRffNKCWtMzdHyF5ZrJR1O6mE51IyOveV7Hr2dTQ8g0o6xzVj5oqxE9IXTR35xM404hHJFke4oiU2o8ORQJDOK30WjQ7es6t3zQpUJcW4ypW94X9bbIQxrrBhpM_-jNHfTF3Om9E5zUIHbGxrBSNbcKIVdJ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109822361906725433727\">Now</a>"] }
        ],
        summary: "맛있는 꼬치 요리가 특징인 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["맛있는 꼬치", "신선한 재료"],
        tips: ["부담 없는 맛을 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "꼬치 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10884162695810598887", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%A4%EC%9D%B4%EC%84%B8%EC%9D%B4%EC%95%BC+%EC%9D%BC%EC%8B%9D+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 펠라스": {
        photos: [],
        placeId: "ChIJV2ZbVV9wsjURcX1MBkGPazc",
        placePhotos: [
            { photoReference: "AWCwydggQ4f4ds7oxM6JBfKffaSArqwk3ItzfHsBFT70x6LFLfts2abFzenp7aEaTzRswtcn9pW29KFuNAmA3GD8bcJsiwSwjTkuISCkYJhtplgOacBIT2j-DAw6-jXw_4gebfk3hFA2wHKTBxT_vzuv8BL9wG1AHR1AILhpXXIknFnFvJcSU0fW7tTf5G88OOtGQzI2a_APTVVdR9aXeRYcH3OqYpPS83SggluCwW_IJ6vFPUXwbeGApBclu7HOS_XajqbZoB3o86zpuVZ9GflAYaQvbEoL26P-HNMFvk81j-2H87bVYvZBcVEnZ2yg9uNx_SY65AOWu7ZCMQt1bmnhnbTZbEQJYeTgOw1kQa1eXlid_qyFZAheVxTuTe2530znw9xEO4FZhhXGiOv6TGmSVS-OPCtrlYB1goqFAMhqEpIilUNpidztI6GPOfOY1w", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103748506449483455190\">Felicia Hardis</a>"] },
            { photoReference: "AWCwydj1biKZAuEvbDXjv3ZCEIPJgEIbq0gUd8TlLaaAripcVBw1OW64UDU9mtrwqaYDK7TngdVsmasg9UYxSjQtRRfn-D7tTeINjsu5c--VvoVB10dJ-FTl6vjMjtl0FQdFxf8V1lFRYBjfk0kVkQCFQYcv_IokQ65iC0dLrKLvBTerS7KCoRVQkgV2aboqnboSq4fQzmb9ZnUATH3QX-YKFBaVaiLqJJ9H93bRb7eNxRRWqJsv7PBhe4r6z1vd5GdLrUwoELymAD98P7k6g0WqE35AU6oOD5Oiej4pxpKLMd_yCg9H8wRtWFyJsPvyy5PbiK38sIqiGkJPNwhRMl_HrhmVo6d60SrD-AZ86xUigEA5a63MtNfG2oSqKlsPj62yEMPeraOR9tOihk41l8k46S2tsmEe3WAP5lIeqxqwGy7juTAxVKkPzcT48kqdbaZQ", width: 3456, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110847347163429070130\">허남섭</a>"] },
            { photoReference: "AWCwydjPpUtyBKsQuhGvAxQW9Ljc2R_xokuJqfbTr8EUuWwhPYVP0zHBcQgXpVzCvwfHbrfOEPeolk1swr0Dxl6yrh-CqUNCAwsRKcu38Wplo9aNB7yqT6DcChnYfQE1ugnptjNQqVtxgwwIU3_YP6_mY67ALOnjtUyGwBDthnCT2hpDcgznG2vNhMecCMNdX8NXGpQvsgOlmMyuQTwXqkWpS0S1ehBdkGTBdb6rBOgERREDUWceveSz8ai0J4prZ6V73m5-TfHwJIldsL9e6CT2eLOgPa-fgE7NH5Lfmrtszy5GJxYqiZU91An1SF0eJx7RE9dXvKWx5mNZRMEJg9-WMvQO7WhdIanl6NNnCDrn2RqHJ0I7cn-4SiCiVJG5poIXwvCCJF_Oig5VNJdSnlTwGrUdVxJfKvbpK9ZFgpjdp9iIqSP9KqemlAbq_sYvwLRi", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106602326857841025728\">Efrat Madmon</a>"] },
            { photoReference: "AWCwydiiMTQH1svQxHPq4weQUMuQNjzN1dtm3KDVGRTql82EY3IFAwws2G8VslW04wPBIfMy3Vk1gKMgqsE8GhOfLVWGt2nudC99nKnpu1J7o0lUZAAMdd6xL7DJQ-NdYfssN93x5IYV9Eyy310yFP_kfzyiVRW7dysw3rqGz3KXSxH3eO5rWNek6LJUWhT4NmJQqstnAf9RkWgugZ6Q8evt9wTtl7ytLljbtu7Ft_RRTed-nqRjQLzMg-x2dWl0LArz9Qf0FqNJKW_Lnpz23BzPMb-5754u7EVeJZ1zyl08R91p1hRcMe2XojRUBf_ebKBjBov67Nr7c9zovTZkDSDkRBS1t_O9o22v4fFL8cX1EJXtkrrRC4wgKQ0DjR6D4PaESAKwiUv5kdntY1QXPIjeQ4ianEdZYMXF_QiWkb-vY6pjUVaeAZZp5NmZDhz-Qh3f", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113683929810189309281\">ольга гутор</a>"] },
            { photoReference: "AWCwydgs5DcBCnWdDmCSEFrJkssFdn0fBaN3UcjmdaFm7qur8qai9soCrKdTdIOKU8Y0XGijbnWHak2ddIesfePbpwGwgL71WyQwJJ50xrXDdQbRe3LEnNYgfDK6k3fNvMhPqXDVoE_0faFggdzZc6huwLpcC6DuBZWyB6f93oXlH08PcKjvZWvwGGC52UDKE2m-fULDIldEiTS_MONDt9L8DQMEdrR2-HSqkAadnHn7TElyjFPc-Dr9biVOJfJ2JD2aICkPGyCNnDE1u0GZEJspkenNfEoUp7nUi1AMI0w3NwB30iPgD4gR5iHGJbiPPaU2bVoQbpS49YWjL4yVzjfFzct-HI_Bp1et_Z8aoZ-qdQv90d67rRW-pkQk-Tom-A7QlHTX_1Fzrr3zjpuUHTpe3YyYRDPMWkH8MqikG-nFZLeXiH67_s0RI8FbjpTL0FNN", width: 4800, height: 2701, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108062491593810908415\">Ruben Bastias</a>"] }
        ],
        summary: "전망이 좋은 이탈리아 레스토랑",
        updatedAt: "2026-08-16",
        highlights: ["멋진 전망", "맛있는 이탈리아식 음식"],
        tips: ["전망을 위해 창가 자리를 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "이탈리아 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3993443004035399025", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=The+Fellas+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "미스터 앤 미세스 번드": {
        photos: [],
        placeId: "ChIJKyuYjFdwsjURvVe38TrKPJU",
        placePhotos: [
            { photoReference: "AWCwydiMRoF2YXd-sfnoLOua2dJhHjnwp_Ff-vK0TRIJPwrqlPM4YQKcctbu2Tk5TqsaBjM-87qUVkXj74KXCMKKHWZLN8zLb4ZTk9p719FjsA6-Gg2rAeQWtmKOVImJG9kpVNNBWRkFSzA1JNKSq9OxaheqffA2JL8RuXb1cAuZXgUKUzxumqhW33JtGC89ChSYjVa6_efF9f3_gn1PUXkLdCw-1XZqZZ3fq2f_nJQC6NfVeaYsoDJCg8VZMJYa803rKge46YQoUlZt9NUUqLY-HZG_9m6UrNfZKxZvSsIxoMY-N6_KHvhF-dU8td5vwd2w4uK2_IbTXkccJu49NAYaa19qhkro67EFb_KgkFZ2Plc30lA1yaMFPMkpE9bCovZLoUfYpr2MkfOs4JgahyEn2BY8uktFxfE6Jzf8-Bs-fajfikY", width: 1920, height: 886, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107066478003904751587\">Monica Luo</a>"] },
            { photoReference: "AWCwydilHjqQI-ut1huWYqPIAW_x7wH-aYRIxgaJJTNLJMDwdzBuKoCqV9GruHZdyz7U4Djn_dl3ibtbzISwXTR4zuxFMvKpESv0HSFG6NdNphCNm8hjKaIvxa6xK2rcWzsqKjk5RZA-xez5dOEGF9O3f_a20p75FJrztXrWnLDU3X1F0-vTTWmJZWLArf6XzQ-30ZIm8FOjS1sckKTWwIg2lDh-pEbA5ouv_retlrauP_zM-KmYYS6mJvEkP7tZtOkxAE-3Jrqv_LTDq1FC5zTF2SPmDCN97iLudziAuxlXSKOdKSPoWomSQAVkdva6F6OBsQLI9H2uKQgGRrJy1kemgvrK0WKu4AJI7S9ae9nUx7TWzrhj9YpvKSdRBWIwtCBMB-grWbtM5b3dOYXdZszobTjFQ5-inPdaqoyHYFqAXpqmG6TWKfcRfCPhD_muQw", width: 1024, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104719407618159438653\">edwp</a>"] },
            { photoReference: "AWCwydhBt3Bu-zCNyoduoKIjuTJw_5uqMWO-JK_76Aewi9lYRwlqgdE1QB0WPLGhYLd8z4HssUjj5MUGPSd3w8idOkACNtkn4UjvlUPlbAyMh67kiwMI5nOu2TaaLf74p8K6SN47zVInRBpVKbW-m9QdWv5zyhOvz7Di_6sDy0QsKn-mDwGroE1-mnQLj0jZ_EQROr0BRzDWD_xswjZ0eukeZe0nSZOIjbAyoXDaVo-JYFPVEKux52zYoVAW2tpBCprSYNYCkIg5oRprCrQvH9qzVHPidRytKGiPOec8FkcFPL5onEA9dOzdpnZHG6yEhx7_XUuTwIm5uxJ9FpzFqAmmGLoOoEIC8XwUp0xlew8D_peuerbJsrivFA-07DRbqJatLWurtXi-cypnsmHjZzTKDg_HS2wMKbwn6jRl4V-rNJves9dfr1_M-wqkKVWwu4Xe", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102781329575931231726\">cynthia angeles</a>"] },
            { photoReference: "AWCwydjWoN77Xm4E4Vc9IqzzMN0jswvvOQFjs7gcJ8VTi4ZazynPXVEhwj_VaqtrDtubsJs3cNWbQ19gpDJtZze3PqiMNPTljoaSjBlAQI73i2_jL5RufDnACRiiCvV5t0ixMNgSzw9Qnrd_DjKxbhIt6BV_fDl1q3xwr3exJzjaSBBIW-L0m8ZckkUAjX3J6Ff0iTpZoyRMShb9CigXiNVeGPu-6cqJM53gP4FGlDZE8ucz6VW5NP351_W8PxjQ68fI953ycYU2AqmavvYcIVALqIhS8-1sulm_-svZA82VNRXiWM197S-SU5iwkNNyhO0MSrau0af1p_c7o9ifKsq-Soh48JnLF1AE7F9qZrkBqe3kscjSTDxp2NMFxa3GmNKyo0cXtqx67EJ2Z-PEYMgytS9g6yBLPnKNDvgvAaBnna7NDMTCBpLIc6sAaPA4KKIt", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104793175523791666161\">Antoine S</a>"] },
            { photoReference: "AWCwydhG3LX5Ass-BUtwhAYGNRgQTOQfOMIk0hYnoYyrBhSY55pBSvMVJr0Efng4yeSmqe1Pj7ZYrYDFofbdLLwfBrYsicRicT7CqvOzEXLcCiAT-DCg6PcWn1pZmMb540s9vAIUfdQQIk4o_X7x0d6X66jHO9_a7tsgekOG16e4qehNlSXLfGyx8SzvIMuwix3sbLfy8IW3CJRxxHsAtYwOvm0RltdOQkrZ6_etFWsvaSqETYId_VhWRk0XSGgpcGQOaZ4E1Oz6XzyW4LtGQ-26ciakrHS1cHBU8b_7ltZuXw4vJPz2_qoI5Y7L61TDKEG1GPLqYaCvJIXIyamVecJTV5V340JVTk9zJ_c4g8X8-NyTcFE68t3XlT7-1jQ8dxs0bM9jupD8j4anVlnXOfDpiGM6KVQap8JDCpKX1lWhkLAZLY1m8RuJQVo42RSEIw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110722981185963009166\">Hiro</a>"] }
        ],
        summary: "높은 평점을 보유한 프리미엄 다이닝 공간입니다.",
        updatedAt: "2026-08-16",
        highlights: ["환상적인 전망", "고급스러운 분위기"],
        tips: ["전망을 즐기기 위해 창가 자리를 예약하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "서양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10753692364766140349", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Mr%26Mrs+Bund+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "센소 이탈리안 레스토랑": {
        photos: [],
        placeId: "ChIJET8FaVBlsjURRQyoCBVCJx0",
        placePhotos: [
            { photoReference: "AWCwydi706Vrti2XFsFNyi851-f37Qch36Kd6p2sTrF0fCUpSrl9PAw4CD318S75FtxTAVEDxCBD962zoe12dPJUbgNSZ5GGG4sMg3TBQuBrWqGieHUD5wYJ5EzB-hWEZ73CIlqa4boOHi9TP19mBzeIN5Qc87tTd3poMl1PcRYSBvnTpcHUhh0x49yJO5ADv_-tb90IkrBzAvHoSEJxLORQLEP9c0UTekKYAozqPb7np1O6ob8GQAnkvUx92KTdRNQum_kXL5AY8bXt61RXjRJIOJQn1bgGplm9B9Fm7LOeDC6c017QsqdSklJ--jOEsJ7bwxhI4FAAnSiNX2fxaiPn1I0HJzHZqXygt34F1KYtinArcbYvsg2DEA4WTihoVFrtvR2Svhf3_vCD45te0GU4MnUU7zwWcVsu1m_Ux7p1rbWi14zR", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115762787047624396827\">Severino Bassani</a>"] },
            { photoReference: "AWCwydjviLa8YIUVFt8eg8JizCDEEi252CpQQ2hro_ecYcvHmvngaWD95Pbwz8rKX5P0jcAsRifOANNjdYgA7YTCGACngjWtya1skUPKm2U6M1g2fjtwstO-qzebiousdoa8cKMcvrqpwgd_KmXK1abQ8GZWL3W3Zh06ewNh2hva7-EG2Ta48u_GbeByBCTN0x00cBNh7LoJYahsqc2WiH0ZO5flo37d7rpV2o6eSgMFU7HlNOli9758xjooAxzJVkrAe8Oj2Q1ioGsfdlbk_fEpBXcK9wxHwda7DZCuxlS5PfRxFjKK-WeetTrHiDMA8jNcGVfBJUszf1MQeQr_F1dyWCpJtgK37GjWZ0YWZ6dcm9ovYkgQw3JePoq9kfPx20KM6eS8DXCzmnvsz52MwPIk-xe7nP-Vs-8_gqFI3m-g7B7Td7_beDkt20EUScvpTmkI", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115762787047624396827\">Severino Bassani</a>"] },
            { photoReference: "AWCwydiP4A7ggNShL30atzmxTxFgqYMbqqj8h7qRpbfuaKE-Ib67dAGAX6k-EarJb6Z60XE9OBrDWluDhmGqe8BlKKrq83FhKOCkEZ7fg0yW4BrNhNdNuCzqwZJz_CC9pV-IqinYlA0DgexbWtD0a-HIfrzZqQwmKBaEDZAGTz-Hu0-ACYt79qUjfEludRVZ8wqKFtwxaljR5WjOakcfGeGHQYnBtexpshPR-WAfz_f9oBbD_TmhFWVox1Q8fcNAw6GdSU7AGl3VsMBUaGUFT4glYGPLIX4sRzkjtNt1_MAYzbQzNokg8D5hoV_-sUBd3SHKu2mNTUROl-_0dX3Z7jCt-PnrE3-7f0kv_QyuIxuruIWTEOkmp2eyy6l6fX7a5cQUa018bx9wW5EgWsOE3RdBZyux0qNS8peXthfKRL_EXAG9j1awc1ywEnsTlmW0SA", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115762787047624396827\">Severino Bassani</a>"] },
            { photoReference: "AWCwydiUmpq4rD3Ky2qpXTmhnSQSPfp9Yei-mKuPXOyGSppyyso-9Ptv1fd9sn04uXhYjsEEOoyS4k3GIOG7A3Sz1bZ-5ad-aIoyPkCc-IhlO3idv4lQ_UGc-xasycq-_wgBAaiFPWeSz5UIYplghYvm3eaWU2NFMC6flG_tC7gBfOvSd2ge2GXV2RBFhPqOnyhJCXkjHrl9nn4G9Nawbm8pP0d-Xoakp9wFl1h-lcG6k-fZLISpFGinF0mQomqG2pQTEcjcd0AA2vFMT0FBjtqofGfFEn6-UrPUsGQkNqJRV45avLGKyZ3nCQ62oqJc-p3Xu8TzTxJSKhYQOQp7O_Xtm_6ebspNesY250fnzMb3dQkBTM2Qm-tRDAN-Yj3-EaOvCXF9bRAR0Foj86Yvu45vg5JJSHXBoI0mu-repzVUV3nmy0XojwXBcNQ7ZATFybUz", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100989972536713016643\">Kristina Canady</a>"] },
            { photoReference: "AWCwydiZI8i0WwFIzzdqSyPPrMyG6rBMReFnH73LEvPXZj14RpNQ_Oju0r8SLdYpCKuN9XPIs1TRivhjATQkUhXGa8UyWw7Iuf95X_VP_6Mm3WWcDJwUuKRIimM6AhQftv40fSmrYnx3Y4aGnSvKuRyNy6TrEqLSoN_jtbbnba-4drPQY53JGojxmnJOl6yqCqT5JUHS-eZ2KnA3t9CmWcqhNcbdukPnVQOHqIjrMMfecC3arrK4T51YcMOaP0plRj4Vkal4K9GoiwJepx7hnG3iUEUKFc_3WbsfW46e_12e88ilpEAycxD8mYXZcp-daxbzvpEZ1hA29DDjAFt2wzH48OKM5TAtbkF7YoGAUglt70C3rloNqhFw4hOwlbF175rMOa9un1M8-hdvZ08cd5L0Q2FH1HEZMRvXHs3owen0cJ_LO1Q", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110440315553897754994\">Toni Milano</a>"] }
        ],
        summary: "주인의 친절한 환대와 정통 이탈리아 요리를 즐길 수 있는 곳",
        updatedAt: "2026-08-16",
        highlights: ["따뜻하고 친숙한 분위기", "주인의 진심 어린 환대"],
        tips: ["혼자 방문해도 편안하게 식사 가능"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "이탈리아 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2100720409298603077", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Senso+Italian+Restaurant+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "프레고": {
        photos: [],
        placeId: "ChIJYUmElV5wsjURRLHjjhdjoMg",
        placePhotos: [
            { photoReference: "AWCwydgIKPA-S3Bd-BcAubxB-DTS-bAJ9YUDde1DmJuiXn4G_rjGSQP-fjr9xyzfE6R_-Fyxs35R_JvaA8LJ539TnL0POChPpuoK0M_YjamnhfuKGSWbyNXqtDUWc3AjWZX1w2vd6NHVLkyvdUXH-GjDMQoozZcXhYzOZUdIjnDQwp8iV1fxVnMu_0dzvoUThTVL4BpheIPaPaOKhDy02_BQtyfjEOU1yI7W_Kz0T-FNwbRt8lGyV1709Ipi2EHgsci3NybEWn2DVQ23M9fww61tLiu44lnFaV0nevWujrH36e_fVKMl-0H-k6VEYxB3tPWIEKMsWCqZozvSpJD1HRIy58Mxbkxvmc8zWDSvpzRa80Mf1FcrOvaNyoepTqH3hVKOogeZOwAfEr87JpV64YxqNjZEQOg0c_mbuoaybtFU_zwszUXW9fFlOzU3kiA7aAFg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110164069979205360644\">Glenn Bartlett</a>"] },
            { photoReference: "AWCwydjNyYm4gNqM7-fM4yf9J5tXWiKEMRQA81Z0kCc4LsYuDChXrdPpeqy11WZpYruDGVVLGYa2fMaTvV0HERz8a1ByEiB5IpDr-hq8jmHH6YzkUYs6VOCuspcPoArALHaVtq9dpw_u1CCe6Hy6s6K7T5IxdsUxy2cH87Aq8aHKldm1A8RX6vr48u6kDhpaZb7U6fgefawzsrJv8T6kw_QZbCupfxxDv7_u-Fpjj0J8d2AoBJAn7rWwnwbay8jjdu-IrK6tDOD4Bik0e22zie_vqefaT5URVxs6EuRBeErh5CYa8xM2HbV21pBNXqdGujpru8QLqI9CqTMlD1QQTuM5qbz9Hve-KzjTFSgHsggI4WkLLKOmP__1v8t3nblSQM-8sIOGxMtzb4LH1-yvhnbQgpOweKed3odHO407kjtERDw", width: 3968, height: 2232, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104882589154134169493\">海豚</a>"] },
            { photoReference: "AWCwydiVmESwzQNsJQsxbIPbjMHYn-bT-_o2dgjBlYa6i_GGEe5IHq08_xkuxzOk2G4pxxzaT1fg_DHolwoYomYAfxFX610_9qWVBmj__jJLzoYmk9JN8UKjLVxKi2ihTK2JxnTYH_5OMOV23xIIaihoh8fNKio40c416yVXcFQD2B7i_0mfcAi5_ugEGX-lP-FiWEImP5vn5BSwwsNkh97DgMSCaxeGyvvJOWilIo8UbXcU6Rtkck7aNN2FmTvXuF_FTXVvDhRKT_VwL5OuXdBMu1p6kjyzKIgbzUmvro7487QWoSMBYzQlOhh8o-zoH85i1QuyCNDO2_ap8DStng4sbZvrI3BvKMdEA0HGCGDXxTIRMroZ4oGcvMYqey-7W8Db1cMrtBLEI9uZcz_Qi3QmoWHFMhriAqGO2rIR-ll5f-v_eC35b5GDGIY3oZBn1SCm", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110164069979205360644\">Glenn Bartlett</a>"] },
            { photoReference: "AWCwydikVm-6gsErdYZtmp4AfPodIYiLpAXWCw2GjoTkxXufRkGSSU2RzBZWnz3G206UteeGJOSGpF8mni_61fbp4y3CqgoeGHx8l_XUaaK-rAlRfGb7UT33piwESme7dEgHB4cGa-dF6-PWWW49hDeXc_nTk0T5HRD4HJxKE0EUqxdsogc09_CMAQJgL8ffe87CgRJPpjhjLVf17AemlK3Kt5xbXmUbEia5s1naz4eRLnlhwlHLODQ-1AK-q9iXliksG0CWzfI7yNke-UvwuniqfUnkR5RK-5YZuSsfX72A1MsCszM88u7wedD67CdnvY6k8c-KKy9iadg-GAAfKDIqDWKZUV8AqvMJW5VIwOIhCc6ttOTEh7v9IN_LPB1BZMifRDExerbolf8y5Od1XFhJNpe6Z1YgVtAXpz8uq6yi_buM3kCO", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104882589154134169493\">海豚</a>"] },
            { photoReference: "AWCwydjZHTsM4T7u1Mf0mhSxP5p0dyZHoJHzJXBuePvdOHzrJ46CtrK4yjBtqL6ZLklMteXx-9ggT1M2Cieo7z7aqSAzCVEGUBzEv2ovJe9Eruk6U--WR5xhb_9OT626ZvojxO0ZULyj0MVn7KnvYb5xF7O9ZjT9JlFH8LWlngES3kAx_5AlssW1eAo4jtOl1oG8ArC-rxCMcN5_rtYJOYJMw7hk5pNnqdDZOI5JnAdJlGh_CETjTNLRn1EbMac3Ui58Mr8AUmKdtR0MLioDz75vpq6e0c00rSwPfcOANSLcKuz6Xl0SQVIwMXHVoD1tQ4V7LHJA_LpkHZWHDrqx3C_Um_gG-heQP6lNnvqucWuMtdx6ZM9QAKzYQbzA7lBKZIW-zrq2meFfSANknJJ7Msatpp1dSjL_6a_JvXYX186n8favMTZk", width: 2160, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104882589154134169493\">海豚</a>"] }
        ],
        summary: "신선한 치즈와 피자가 특징인 곳",
        updatedAt: "2026-08-16",
        highlights: ["신선한 부라타 치즈", "훌륭한 페퍼로니 피자"],
        tips: ["친절하고 전문적인 서비스를 경험해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "이탈리아 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14456663756691976516", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Prego+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "벨라 나폴리": {
        photos: [],
        placeId: "ChIJafcpWRtwsjUR5ntap4stTuA",
        placePhotos: [
            { photoReference: "AWCwydgXgu0FObxpbHgVva28_k8m6hAfSV6DUwjje7H3UDSBRWKauBrKczIixcWWpVQD3J2IF2YBnIiuwqjaDVOoRLjkTvVfmUekf_dQOiIoM5d7OUtvdGWo94PqDkhErSRqnpXDIrXtFD1D7vqOufmIZhJFcIMn9Dl-rJ-AAoYMestDerkQAamZEjBJnA0tahaTVmDzjd2eETez_9yKdSvpKPHjlBBLAdKMYMdOxQjnvQ_wIYDiOG5gy6xwrC_tIe4LEHQ-0ZYm59G9mD5xgncR8Xai2HewC4zBg2dE1OWzSG1xvvbdezfo5gKAeqvVWsGR8SGKCn4x8i8ZggiyCOC3eRwaDMGrGbvdMZM2Wqgrr8VdcIPHFB3XKmSw3utAJACf401zsnInhH5WQYiG2z6d6G5YfdQBN_V25R-mJCoQdqVF9UAAlQqDKt8jINJAiIuB", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111468920732845870774\">Jordi López Francesch</a>"] },
            { photoReference: "AWCwydgSkI_J7x31v4t0Q06SzZk5GYIkk6x_szpzJCN_AqOYB5Kr0dNFBqIAGHNtwqZSIB6I16eRtgx8EANlI5uqpco-Eo79eLALuAC7YMdwyK684UUbmKZ8Vo5zOXqzqh059U55kbkOJa_g4vlJmt7RUdgAl107Us6UO6R2KJlgU6ruedfyAqxpNFtYv9c7yL1DxiJvz5_4PuIWHnU4Etx6JP9PIPLK-YnLXsTU1Ue2ThCDQaDeskYTXni4e0yJIdGuZVY7QYj_6QaLNnuFJKgvYA6-2g4c2O89SeIa9GSWbFHQ6Y2ZIaomxK9eP1QVh_MfyKitQqbVc6nep16aNGwprw-paSVCR0PpiNx9IiiAlYHO89eDECB72Jzm-kBVuvQk4p7G0d_CRFHDSaqwQnucZMmFRW8zpN144iMon1bXjkPNpZv7", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114033309727207473531\">W C</a>"] },
            { photoReference: "AWCwydiqc5A9j_s7g2F616DzJXI5TGwb0WHi86-kBK6tRkK4K1zs7IqQ_ulFnW7IIweIPwAmmdsFl-eNgTQDLN7cWekP8LaJJmNqbkLJjbmMfV_vStZh1S9x6hLZCc8HQ7UDZbuHqzKecXS1CSgCXNUUANr-sZWJpJsVeBlGdPVurglM6bZmoui39fAgV5TwieLLrRZ4qp9AI1J6XfKq5Z-WlIkEZXZTd2-4qDTquqD4DIW-fsHx0CdV0xvhjavn02l8GptVSrBX52MKoxwENT_SROOnH1TGtTwcIQgHynH5gDc217R94BfqJSQQePsOdwpZwpzjSVd5bG4l04aV7eog57tUGEor7zeke0kPOZtohIMRW2GeDR1HGnOO2C2wcPO1DNjrNZn5P1gZjYLo5Y9tpg4MubRSbGrwSohkasFBvQMc486VtM2_LrY7X-GQSQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103545422552869448698\">MaCherie</a>"] },
            { photoReference: "AWCwydga3iP8cuANc7dHmjQlz_sWrxuaPCnz4mReP4iRXLehDcni3YT_y3Oe9qZndBOKz0fjND2H_zsgz17-BjfmIJiO7Tj98buGHBqxg54T5MocOudvLYoUvub5u5ZaI6y08TdJDaYrA0lqDZS0pKrJVPRPY19I1s4A3D4Ydgs3gxe_K8B0lmRLBRfHhn2D4Z-6xNGltPlj85_lM1g_-kowYk4olsUMkZMbX1ZDwm9j9W450P1pscBm8tTFzSndF7YxvQwuDxGgj51eL85gXGK6KpKlMt0Kxi1r7XXCJjJcSg8MY5OksrPj_JilZGXKL7AZiitNA_kaWn6xHk_1KABuG-YbqA0WFWBJ9YEikgDJuMYzbT1xaqQu5pyZfpjWzGjEZCs_3J9pqq40bK6r8vTu8oqQc9t_iCYwjijAPC2sWSaumXSy616li5TZ7s0BilLA", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109188993420440366420\">el habaib hichem</a>"] },
            { photoReference: "AWCwydjKFrLIdDptehALFtOfkFes8_bbMvKbUB5HNXKcjKEAZ9ZX8O76_6FKe_6lwEDrVfnOFPnxa7YV8NpCniRky-78N3LW51a6wXyhyywuxJtDXRJ4GwD4oFYGrBPNZoVRYSDBM-xAFOSkko7rT-2HdJBo0i8DQrHfowkeIZA-y8VxfhxC1k_irMVjHGg9S450mfFaZ8xr-Qf4KCUJc3vAdrz8TQ8Gx5CMuFxXfgnT_W8B8YGc3yAxYvuek6rdneupZ-5DKLCp6PvBojPFtpIYkI3CyDI8awcCX9caCElJExdPp9Txca3Ofgth3RlMsS_3vfSBTmbY9hKhbqaXuEvduIt4-nvuSQOR_8iqv2S6KTRlJ7h2MIV6rlUZMwAnUWMDrfQ45CgpHM3Q5GmcxHu26a2q4fxyKfyFD9S8pdqC-UbIJSmD6c3A5bvAxzU8Xvrw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112243008763871161435\">Al D</a>"] }
        ],
        summary: "직원들이 매우 친절하고 모든 음식이 맛있다는 평을 받는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["맛있는 음식", "친절한 서비스"],
        tips: ["직원들의 세심한 응대를 경험할 수 있습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "이탈리아 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.bellanapoli-sh.com/?a=Gallery", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16162906190510717926", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Bella+Napoli+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "청룽항": {
        photos: [],
        placeId: "ChIJD3qhhllwsjURTy660jvGyAQ",
        placePhotos: [
            { photoReference: "AWCwydioBceTS9baurbp_KYbs5rcT7IBXh-EhsLEN4NrPD4seKWWAib-f5RlE1XlhMsafCKUgDnAFjhA044vwKXrHj-6Q56l00Gi96IG4Vc7CBHVl0tI4bG604uTegdstA6JjGVgWyF8Cld5hD13g13xTBj5ZiE2xGvWIBNRLLDsLfufHuKFo8IbkqBGlYOBFKWKL2dSN0HX3nV9kyhuUDeytbM92mjtOS97oCxwkc8tUsKuCP1CfyRnEukcszl3fzJyoYunm4-slYcX0a9_uBLZKhZRGC1IlWMvy8TOuL4kuepgig0yiRXP2_1Oi42_oN-wagrg5IImYO7VqyWc3rLFsqRBifLQEqRfXjnP68kNW8nhZIV1FuXTPaPg-QeAlH47RjgT7wFfL0pRG7lBt06R5mYO_kQ94rBP4MRz3cawyz2L__-3MNpYlcBhgzTnqPzE", width: 2986, height: 3725, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114199460219374819294\">Xavier Lauzeral</a>"] },
            { photoReference: "AWCwydhE3E9G7XaIgLF-HVri-gNWGatTLa4_-lGWABQsm3IBtzsfekY7vQnEnaxyJkgHPAhlC7keGld3qjKYuX6SIdqG3OhhMD1H4f3JzPDCe4ng-1pl0HUdJdRuernGn7x9cHVtS6a2oQAaPoFTLUh0rVd3I4Hdlv8sfQY1BMUoT7fM6tE9C7AxmgPdXxHYKm8G-tanWWc8Jvups2uU-xOgti8pkgvee_-llNpewXSuzW8DaPKWmLPxqyB0cWv8Q3Ranj1_jprMpovr2Ou2iTWzfKkAN9xUlrti12Vk21K-4WIICQ8oWk2nQD6txolDHaxw-43WQGlgla9cqSgQ98TnHvtgAGEzOUfNNvPMkscIvADg-4oumBX0F091pzN0ZshQsl3UGGICV__YnAjLEfJAp61lsdtmcL99s6AL3yhH0X1GrQ", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107214543203252391273\">Lana</a>"] },
            { photoReference: "AWCwydhYXhgMhczjrkdQlVJki_PAZ2MlSFjbIMsq-Dak8i-uuYiiQP5xaGHTPHbushuUMaP7llwjF5hg3wq3XvB33vFYGlP-cVzndcEfEHQNDTbEfig8Dzb6WFhUTOLF5Rgu9qhA_KAiSeziU3fNmnX5mnsnQ7bk62LRowy0OGvKUxBToyxQ1iRS8pcLBQ-cv5SM4QleEnQPcqHzgp4Bu1O0tW6RcumMxkZjV07TilUmSj1SdBtDpF-dSAyYl0-0iEOkn18iyKkJnPwkok5V_IeHtinfzDqIc1VzwtJn81l-SsgAj_RmV8uti5AvMtDZxdCYk7kkW4Y35_QtUJhSWW5XYWBVf9Gt4BDaVCpnI6PgEOpGwrYEpJCdIl9-6cob7JTbAIr7yNdp2CEj-CyrMLaHHANVIEuht95Vm9Lehx87ibXw_svpLo6lU3gVySlafzhB", width: 2806, height: 2806, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108744246692366801191\">Cecelia Chu</a>"] },
            { photoReference: "AWCwydhLa3MvD9iwAWUs2Y-w_UKMy8w4KCnWlixmAcoE590BQzpd6H9oKaGlO6d6P9LmufleScmTsIZFliwwrfQImSx_NoiOcjb7CdZVpxDf-ZE_Cxg3tjr3zy-AjC6AfEuBV9o4eaB3no8Gh54HA0OhRFLMHp5CBGNBqmlm_3s3gtH4eJJRJcfcrvZcGgFLlkhkxIqp4YuQMlK7qh05bTjNW0nHer0EpkN1WMpfuPjTn6b6_2pa6Af6_bv1r4lhqomjtl4YiLDE3nFJtDksoz_gCOw-oYDrv7am1heCSeDvdOKYpm7nCSAeRBLkGbz2r8Lxzpfrb6obErPS4QfGECafAbDVp1BNIqjJJPy6U2HVJNrOhkqMwbSlDxFIXnTwi-Sd-7u7akTdaJaRu1M28I5nzfNHnxofHI2mUP_edVOu4r-c-VP44VM6LO639mIxqQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105520069184955150930\">Kyle Zhuang</a>"] },
            { photoReference: "AWCwydhdn5iQnk-Xo4b1Yoo1BbV2v5X2H-33807qgKBXYVV128EKwNUBY-oANEMr9qC7SybWoPCeYfYmdTZoEOf6uXrRqF1Evlt_PonniFHwRZAhCSALbNAlWmjWVrBL5OL5eSvvd7pAr4LFI-LtFMHlVkUJwvW-AnN_soE-N7Qo12rZgXBpKv5Yq4ACooJGX5BXWVHvt9dQfxUfUhfXKVUYCNChdIaV4so_c_YlrG8XIMYm2cnCXHn-P_tXGkwYhDdw3GZrlZOJdnnHLQmeh0AkRe993hCKmXLY-x5aBB9_F_Y08X7gSDQY1mZe6rwQflJLBtQI4uU9P3Sp_ofH6dsfT8rCAVTcUDpRq0y5BGYTXfkwPQ9c5MXTOn8Dr1gGvLwtmeBPws6FBVOvWdRP_b9jJ17ZV6YA4aCh2Us4wg5_RQoB1YNTw0MpBBHJTJevQw", width: 3203, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113488358581057106757\">Vu Thanh Thuy</a>"] }
        ],
        summary: "다양한 해산물 메뉴를 제공하는 상하이 요리 전문점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["상하이 스타일 해산물 요리", "다양한 단품 메뉴 구성"],
        tips: ["코스 요리 외에 단품 주문 시 가격을 확인하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "상하이 해산물 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:30, 오후 5:00~10:00; 화요일: 오전 11:00 ~ 오후 2:30, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=344743331734629967", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Chenglonghang+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "미니스트리 오브 크랩": {
        photos: [],
        placeId: "ChIJi98QgeNxsjURTTNX7H88eVM",
        placePhotos: [
            { photoReference: "AWCwydi0-0GJlYk_d8Tnu645CRv_4KtgXEdf8cpLwVDO2GLJMvrOlK9haUuQSddp5XZ67e0ZJTtYQ4trasgd2rcEnFC3vcNNIKzJ-of6vQBTOyxzrQyGufDib9-jCVjJp79N_y51jQVPkhO8-v0cM4yAEav33VfDkoZf5BNysSI5nvkOYU5MTv6vQOKxCdpGSsTN4F0cnZiMI3gk6PMjUmWgWW3Nb6FIEtNWCDDk3657wrb_95hV7SgbuRxXBK6Fzbub0ovepInavvIK8y6zP4zQSsInbciSQMbKPlxIZCppFh3s4JNHBlgPLkCqSex1fqXUj3GPFkMjWZgeRMSUzITsOCb7lJSY3vpMI1NR5Wmu9J0TPSpUeMep1hILYB8mNL9sX9TjZQ5wQPt33izsKHnUloGIS64sKko7Nm5qaUjBz3g", width: 4800, height: 3179, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116713855533632881341\">Evans Fung</a>"] },
            { photoReference: "AWCwydj3ADDPKIMvIV0KwAyZ9H4_z5g9jTGt23deuY3mVKRJp6E4DNY0FLj1dW-U1vlDvn1_9cbyBhcKqaw_EHrnOCskMKp1laBK5NbTj1QYkTcFpOz2Z0B7qXZYePB6E2dJzzyDGnYBwYaIN2sY7_4IhTzbiXxcok9RUPyR-jTe4PnDleVItG-qrL64FdDfMKm6kR5wAfCWMJ_NxIYOlZ7j-WTbWq34osYwz4tD9212lMeiQw-wY1aaMl-U__1ua4dhbWHAU4J6ZvURB61hkugpvB9YVkM33jyzN7WwCynohU08I4PPsNVOooVcUkbPHKvlArGwJ2UQywZKLcaGmzvk7Vo36ne-y7inp6w3qSGlVBm_fg4hK9rDuDQ2p5AyAE3oR9a27qFIlWiGi2Y9G2Uj-azd3E4ulw3LI4arv9xCaGDPWO3W", width: 1574, height: 1054, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107544872519146298976\">Cato Y</a>"] },
            { photoReference: "AWCwydhjNQAnbVbXvgDokr9rxO92bIlL1Agh2VTWm39rbeocWdXwI1Ok_S2r8FgK--hg-Gdc1qNnyHkCMchzJ6dvIU8YqH6A4rBAoHte6oGpadiWepiBPfnugu5J0ugpBJwrx8SrzkYZBP830HoMMf5T4KRPCT5OdZzbzf5B-YEjRoOF7kbBacaq-dNHy9AF3SfzOXmf0UPIYezVxER4KWflAqJr6BL5T-0KJHWEYC4U8uaLq2n-fdmaxq7iQeMbF0oUCovoHu1qzfJv2G_hb4Q0HK2JWKaCgO9zWoVFkQiNyItdIZCopUD76l5WIZa7ghp4aZSTm74PgJQKILLdK89W4oPRAzu8f5K33BQtQFMLbj_XLkJT4CmZxhJWR3aOHJSATsitWsO-ptx8OXxq9dnjR8fvH6Q0N22BD7McjnZRrh7NAerV-VaTvVHa9WHZ77xV", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117299631473341487401\">Peter Gill</a>"] },
            { photoReference: "AWCwydhSu9M4pgW3KcufLZb0lZ7vq67HY5fa__-OvaDFmcQuAmef4WEGgGiMFzYunSrL-8kSCQ4QKG5nuEigXTfsWbXzN471YgThrXcv-0eky1BXZfJweZNd_xyHsHrCpKXzOAUDl0djPFTYz4V-w-B87lLUoV0RmFpDC_5OK-br5RgxC720DLNXYu2ApOdv-bPUtbsUb0KtFtuIwpfQWV7TCMb2YQxcQhbKsvNb1ScT8TYwJgOmVDJ1Au2Vy9he2bcr2rV2ukAKgpgr1YcMfjPJCmmMQjAWOhWxvlcb3DS4srkLgriioOmbJ5Rs7MUIgPV8d6z5od1ubPc5evsIQElCDQwrExT_ukLYB4ZMfUgYYFZYuL22S7xbqxwe4KOfkm20tCjNPUX0CSxKjkDOuxRb4ziJM-imfb4jQX1eAod2xnQXpbvnlvW4yLS12oY6OdMp", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112203889640026109217\">Transformed Foodie</a>"] },
            { photoReference: "AWCwydiHTAoDpKe4st5gjuq_gC7HBpMl6yeM2j2qCbnPEkDneT1ZZXvmQugSjko_9gjLz-qaFX4GenW9_7H3DV1E3ci8p0ZvfivAiqz2UGk2yfj4ydL4rCuOby3s_3BjECw4EF_Xiw3bzkjh_T7im0JKiitmU97qU6ysHL7x5legScDQBeuDosFZKsmWrUzU_mdJ7dfpN7_TmvyRO104ZkmlxU2vwb9mwxzMnTfroe5nDkYhLYZpKgT5iLPj6MiFUEJYj6CU-P824QYhb0aCQifhb8qeaISq7Gygt6RKFpJpVII8ilmx3snvxwy4JwiP41EXU7Hnj8f0dMnfBzpFJG84Iac9Kj1t7mFoIJpoMeYcZwzl7W1KiAqietGsdDn7T1OLczJFK2IRrmDiO2IHsS3C87LbCQXuJ-ZTKjzXjx3K1JFyFtU6E_EJXC5HmL-1lfy7", width: 2779, height: 3386, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102488097929674421946\">B Halim</a>"] }
        ],
        summary: "음식과 분위기가 매우 훌륭한 해산물 식당",
        updatedAt: "2026-08-16",
        highlights: ["신선한 생선 요리", "훌륭한 음식 맛", "매력적인 분위기"],
        tips: ["서비스 품질 개선이 필요할 수 있음"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "상하이 해산물 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6014905297453658957", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Ministry+of+Crab+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "셰자 코트야드": {
        photos: [],
        placeId: "ChIJ7b1Dv1hwsjURwoIn4HXC2Uo",
        placePhotos: [
            { photoReference: "AWCwydjMnwPlOnJN8rxMWPCrl_VMZ8OgukBXRoKL_3bYA6UH_c9XX1Ivc4L-zMNxPLubCxmIGBo5vITlzODeqa5kJiFyPX4F5C8Wqr7TEDCjTrlWHJhaOHPKutq3oC2lXHVXAJlOlTs5p6jPh80wIps2u28ToiRosTrLmEa4HK9ODXxDa1rBRnYHEPQwp6TCjC-qiPrgiP4E5dSvyaksDV8AzTwIiXDb4xYmdfMXwrDP0rRVh2yVB1cQ-p-CN26_owMjG_p0_omjiKLoRezFzSk2w6NS_5TpED6piKRWXnHwS16vbZBMt2bK72AteKFyjJJmIGWvmFt2Wzpba6d0BxUFpSzVpSaL1n22K8BHD6dHMRdqDFMA7uW22y_iaR-VtCgPe_Bz6e-6lP6d9azbFX9Q5VVY1F2QUc_vmvy9G6XvIGhN8uo", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102687916625829451991\">陳品妍（史嘉蕾）</a>"] },
            { photoReference: "AWCwydimcHyVbaQ2r-VRsXY0wL4DHLt5yBvikNL9y-I0FKUYM30243xYnnpkSonscxWpP1e9KfGjRXUgkAXntJq2fNFGfjXUNfEXV6C6suRNuI43vRno1IN9NQxkBF32pDEkFFgcIBolyXaYHTSTDzirI7pA3gelTN4LJpof8pga1t8B5tOl0RIVNb6MLwXB5_MOQxf2-egD6WLmyf5Or6PxMgC4ZmUXpZG8d6UOcR7cefz4IgTp9cdeGmCKrVqgjJcd-01qXZTh2KXs9_iQ5nYOFKaU97xcdq5Fdq3DkvRxKsck18Sv6Ksfre2AiZW0EYbv43Yl3k_nFch7HBQ_qtKaMrRkNxAhMEy5P6mwTitA7cvVc_CIIGzjDkKgg0v0unNp7BpVHm3hRH4pIhKLpCUOgeqm5AKnpitOAFzwPFeXN214bFNXXnD94TUWqXhEgAYe", width: 1477, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103603299686579427909\">Yo</a>"] },
            { photoReference: "AWCwydjthX-lFlDBWEfh4B3x3qpg8bbUb_Ffa8RvIW0YZTnOOcrkryA6Z8eQpazf1akcTjrrDqA76JCTctHoAwFHsH-Mfke69utQ0B8F6mbsNORHC4oTSlqK6D2284e_NoIvKXhT_zwmTF655cdgQQpXfwDqvOxoDKING2Oz5IHAJZxdAqtDcaCOU-NK4GdPRHW1QfKAfzFkiZGycYOsY6Y5t70sXqgZ8kVvJR6p-hcXavIl-VVp4W_-pTJSpl1lK2CZTRJ3mT_PRaU-sEP3Vb_7h3EPQEaaEKfxAfOJqs_jiU5mpaOEGGULESLb1dwEBL67a3Itq1DwAPohj1mRqvfvCCGdWqWZaaDqxGmDjwTSZhe81MLB33KnoDel0TDD26OBIr19tu9hkCMr3HHIH_B8UiLDYMhyhFVwofU_zv4kqX5czUfvOraYSkkM8t6Ddlfs", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103603299686579427909\">Yo</a>"] },
            { photoReference: "AWCwydgsahVhpSbSdzWuB_ySTaIVMFDDxvxldrv9p03c-KsJMyV91J2RV4W_i4cCoTO0kQN7fddbJ4J8-hfsQJmSM1cz1yOtc0x90X7-4jHknl8B0Y583IihRpnPc5ziMFrVZO9mFEqmpf8RBPbKKMxJ4ru8s0KZh0Gbf9n6FIzNx8lx6wNb4a6i31cYWzAb126O10h9YcNjESttpvVjpJ6AUuczekmOn1djUe5vuL_bDth_2Zg4YdDPwepoJ24nxtAPxw8vvb3-wkl85jne5vM0elmvVhxuaC2y04Elp19UffyKYEe41ZQnP15nFgE8WvdOtdCBKoliMmUY5pMcHXCskJv_gO2ndYw9kDAAyWvgSk5HluPQMDEy2c0fvok3nxmw9eiePPyc74cWHnsuZG0mIcltH-umXEKcLUmNIOyBQ3zrv-tTtxMuVUxmEhRMWM1j", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105671022630877327534\">P. Mongkolkamarat</a>"] },
            { photoReference: "AWCwydhREI6SBtmV9HKLitun3kB0EV60E0CdD6bbEvPmtXCr9pii-e2BB4b3KL1XxOORZew_AFqN0DMt_GTfifVJxRJjvGfzp9ZKul0lOhkw4UBqp2_RCoKf-H0HLoTa-gp-S-d86hOppZrfcwV__ZZKEw2MKNggoGqB6-UqA_0PduJhAsVbaD347ciwjaM1zYtBiZv3Hajmz9BSAqUj8CU8_8PbgKgAQhHhuxwTIfgJiAEl1Zsw34lpQsOIPrEIqPvPngrGnbQuNbhP-IraQyY9jA50lmGr-YlnzZ2okpQPNHj7Bim4yt6atitO8byPhAqDQxijkn1C_Bf36iRwMYEcB4PlANY4G3JLdHpKmC9Ry6Tu_AjsvmRHZJBHaaYLrJ7K39sTuD2bdmxoJ__xfqAVsQBis_Tx6pNXrVOwsmKnHvHutZYr0SkZN9LIoZocFYIZ", width: 1588, height: 1588, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104241911946587753484\">TC Huang (SuperD)</a>"] }
        ],
        summary: "게알 국수와 가재 요리가 대표적인 식당입니다.",
        updatedAt: "2026-08-16",
        highlights: ["맛있는 가재 요리", "유명한 게알 국수"],
        tips: ["대표 메뉴인 게알 국수를 주문해 보세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "게 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5393555840280527554", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Xiejia+Courtyard+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 캐너리": {
        photos: [],
        placeId: "ChIJa0dwOINlsjUR6mKjndGp9Qo",
        placePhotos: [
            { photoReference: "AWCwydi6Z0mW62VFr-hpq7B1fOhpBTNbLagrLdAuWnZzvY9vbes2TeK_N25UjAeD_IW3cYu8oH9EGtzfuWOn_RZQhDW2LlJagcX7RoWUw3JsWhQKy8-zpRFTaaQYkGboO15D5gioRYVHYjlGNUW4J-R3H1qq6aaz5FAuXToEQsyttkbwr6C-zOuvoSO-qg-wV2TN-qTcUUAa2jzAr6fon7vp20g3alupwjX73BH8DPaNTMYKMgnLVsuIsOVd0u8R3xpOBm94v_QsM32MoaEewwyqXlDfNS_s83AwH-m3ZqMLo7lvyQSFd2IjIG4WZyWCyLwz0gJ_7__lgdftdXsKr9GIe4kspJHGXJdThsBX9RvnEt99i0-6-2Xf-3HUUcFxECUv5h9m92Gts6kgtHhKHnxQ8zgAS61TjJOmFcrVyOrMDZjRoim9", width: 960, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103217497483603238481\">Amber</a>"] },
            { photoReference: "AWCwydgayUjqWtUK7-CtA4m73vSuWWptOsYnt-VJGowQ3KAetqOdwz4f-ozuRhxE8snqSbYTMzAYJSfCD_Uzgc2n_5Knt7u8rLxyG_1dHEUSZprgEnWsWAqvYo3UprBqIURQex8lmXUitLgj7orao9EctWiGpZVNaIcNr98y5gPygoR7szIczem4qSx_n4UrnEDJzFaID34g_ll6aQ7mrJ40drxrZqwc_e7DalFrbWCYGgy_M9FxdK8OyXvk6-w8TJKyy8rQHrRdneaku3JhwvhUY0CukPLwUzjXLCaxMCpUnfEczowqWzw39JbY2HB7M_XG9Wk6B1lWQ8JOgzr-BPdjfnd4VTmvn-gMinXo7aKqaJR1NSDmtQGKxav9sXulyS2NtKIk2NoHy8jAZH7Rjc7lu7st_PAee8jfjPgoX-youh5OPPRYF6Z3cw7I6t1FoQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110398857556367939690\">stephanie Z.</a>"] },
            { photoReference: "AWCwydhFu9i9x5mSrpGrGs-3p0SKNqY3qo4Px4-Dp61b7jgWduZvr4r48UknrnSvvILoRLG_zMzANDo8Bm_4sj5eKTMAAiwc7w_jBv0tJviY1oKwcxjqVf1_JYjxooVw2yn-v7ZSGzzMWKaM_QFe4BLJ0cp-pQJDbIqnNi6K6zMhB2RbgX7CCqoBQsSojBhrsXFdGqGkOEOqP1i0iq632r_E6O35cAOz2IvPq6InVFdyY2Ek4qIW91U4OuHe1lqDu9SfmrFFtG48HHOOsKV7NKG4AYVYqVkrENtN-Atlteno60Gr5jGi6OMteNVH-XopJl6efrIxE2wZiWbG3dALnloZiXp9wxn90dCNGH7kMdESZvZe18A4KVd81weCJiTx4ZMD3AxVTMMKXqHZbbzUn-_5P1eg8zbRfZh93kY63gZ1PAzVrG1oGqI7inSh9dULAg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110398857556367939690\">stephanie Z.</a>"] },
            { photoReference: "AWCwydhbHG57K3o8jY8bR6vPVqVjnQdGZNxYQLZaChmuKJLcLT0ZDRU_Sb7QN1BmWLiB3Ws5NOdLLeo-8rbzULR4hx_30CNO2AYEHhDdV0X-I7zVjkQqz6MDLYehM2t4FLPqSUVmEpuLk7hnV45iCjY0sRIXOh_CM9VHkhuG1cT0n4rIQeqGFXZxExaYsEq_s5mCYWaj2sCkFzJrv3BmYBYNZxhwG-uC201oQ2rxnUzFah1El1_xwPn60vc4HqnOccUu_FyMxlKaFEXwncMHN1XrDJL0F7mQSQqpLaTE93qOe9ktUulEafQp9o5CctPNFPrrnKlNvRILoa5yduRYhfADHtKO5G7z2u_ZULOE7NaafOqhyieBUeCeSDYNWSP6570l81HWx3Xa5ROZ4sTM77w_7iy6GGJ16tVeU3RbruCH6CPoVVfN", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104192476396422137493\">Babs Sheng</a>"] },
            { photoReference: "AWCwydg9s1nqGjuO55Rk7BJ0nRcpLbleeX4ntM2PEPoz85KG5-r8ry4j4sPYmhZLifQDAgKuUsmN4fpND8w6iMaAo6NcB802Ls-cRM2ipAgM2e3QQ-dt50tcuJZ6WiQhqD-AB4RpDIv4TX1B4s_jIeggFXwymHCQbBMU5MNvAbaf2O6tbx6FzVbnEHAMgp3zaQ-d3dCe4BPxBsUw-kGbMopvrgjvmKFw_bzMqIgs6kqHjgUBqAqxnjXQiSalm_6l9XStW3PSrLccnUbFD5yl--0_u_i49LpaO4zMqiDWRjOBfWtA3vNQKR8EqtM6-HEAN0sSifSpajuPrP4-4nu1lNQMvQQdkEVLeknFQotllH8P00_XJbvxtWvRQbE9UicZDvDtJP2N1wj_pbyQx6ss4jkhrMi09YiHvXzV0YSa4Myj3ojsJmP2l3JwRSCDcJjR9Q_b", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110398857556367939690\">stephanie Z.</a>"] }
        ],
        summary: "세련된 인테리어와 독창적인 해산물 요리를 제공합니다.",
        updatedAt: "2026-08-16",
        highlights: ["고급 호텔 라운지 같은 우아한 인테리어", "창의적이고 개성 있는 해산물 요리"],
        tips: ["저녁 시간대에는 분위기가 더욱 좋아집니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=789724027431379690", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=The+Cannery+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "천지 해산물식당": {
        photos: [],
        placeId: "ChIJ5xHVAENwsjURb91SO0JzLwQ",
        placePhotos: [
            { photoReference: "AWCwydiMNLwqGk46o3PPc2VQRyjmdPwclti5o_dis8CNMdc2-UJmxBrszRKFY7d1BvlWfPy9E2V4547gRAD4s-yT8gJnxAK0m2vGpUG-zIxatbY0zI1zZStswN4tNPWqWG3haXgT69zHydVvZ1NyWYlXYBXJh41oz8xvJ9nVHSh5OhR_7cJ2fkzZtkq15nvWQySMGz2HM1-SYF9LscARwkNLiQZNYdkLk7KdWCT_g1dbgjtltx0DWYEBkAQfigfosae6scoznJnChujP2-NXUOkqipJpbowZTr2Pcv19G4UUOcOdxZE3Ba0V6iTdNY8CnR6gEA34e1xSimZp7lERBc1GuVkLO4YK6nGMuFbqEOKTIjxQ9YmuVhOp_KgKMe0Hk_ahAHYdHaal3f926tgM_3u2SUt982B8n_uT4HdDc-6vA98GYgM", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103924699667139526270\">Wayne Ng CY</a>"] },
            { photoReference: "AWCwydgcTMNAjb5BIdd45-2OwTcOytoRLe_iVeOI28_YkHg4aOi7O8GCdR_cN8fn7fnpP5tjmKFkWVXjT2LST8m3fQBV145CiV5ISSnKJG34PXgfS_fY8RO9eNwLfYABTptFoAxWKXspCH30PTrt4TE-cjYjnhPQP3kAQX0EzcrvCsObszyc__2tP3q212DXiNVrgBXUSBZAS1GnR57uzeVoxd2MYsCgVQE4BxSwUpXrmiw6ijcqpGsysHdtCIbm00O2wxj2xf7dTEdSkTMCgvjn8-N5pKjdCyuGCDIhQA30IyTTH0jjyzkUXIj8UaZKxh30vsJ9WhkRXudbD6zTPUeGg0bo4xYLTPAuA5_TptqKGdSn0Hml1fwpQhtQZiavl-QxolRuJ9hvdAvHXlqPuNrgVMywsudbmLy_yHXrFvFIDY1XTcgEgRnSDI_J8R6R_B16", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104148297568260806428\">Melon Sprout</a>"] },
            { photoReference: "AWCwydhjq1NFYy4a9F6Nt8k8DPaJ1S065qsN0rYtnDCFe9zJOHMnfLHmK44Q3HhATTEIBb4Z0w_fnusk_L7u23cAMol6pu-kquolvgeOSyaxaPJdYxIVruKY25kLek992urEk9358_0FRv3BakLeZu7gpgDes31JBgEKx599bcDWjxIgPG9VVRaVqPJ02B2xckB0TTMQAFAwlnYQ7cuQPhGfu2oGxaXfSuavvfCuSAtC53QsNvVLddRAvcsOz6BvNdFBrDc_fWZiefDiIOzJWrEUueFPFEN_Njk91NEQ50vFAbV7bihNlwLm-DpP0VZncuoheyhd5LMOkBQ4fu1jGc-VxxAGsW_KNS975JQoWDHxJmNS19AjmGzAmIt4b2vPu3jxc62-vx7wpuocVrQ9LDQkEBA8s_cyrqOwH2GfGYmRByFoiQ", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101922604967357675476\">lawrence lee</a>"] },
            { photoReference: "AWCwydgTTNT0S6BrINDjglC0MNt4OevH4QJLH8ubVYs4JA575gdLFpMgOPCzEDZp7aKua2HnmHxKQ_7iBTb0dT5eVgg3WcroY184y0iQYqUrOr1JB1S7ZIz3EUITxVv_IAx7tVbNYNi7_4qUxHlPAWiQ9ac2bkJh64dX5p7AlgPGkt_feBk-Vxg9trJXnZtXHEOF7sXn_ZhNrjBgGd7sumaJt3OOszWcLBrrHTd2u5KFbp0rErTYYwX9z1PygIfK8H5ryJxCDhYCP6T4ht5IzP_di-iEjlKOqRk3HQryrPjTW5v_UTaJlMJcr69PFvb62KN1WTxrBoWm-7Z7_bELzXffzRY-Zm-Q_dfyvI5VlaDUukRS3NWmC8BruzE55Er39W-e5MEWbYGY0TD7TaPnfQor961286QwZzW2Uujr6ipkZ9sqtzWQ", width: 720, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104059572779571124658\">Jacky Jiao (Jacky)</a>"] },
            { photoReference: "AWCwydiCLyBTvGFSZS6IimtSbwGPKaoRvo1J2aSfA_tO64JxraeD4gaAgBO7555GmZ1uVzHyA1eLpf4ECBfU7puMozo4UDNyTpDUqGzmGj5s7Ntn7wNZtueW5QATpotpWCkionvgmWMcxnJ8eXvRiRuuHCX0uM1L8t3r7ZYPM26Uf7LSGvGfQrDdLivi9D5R6eriRRmVsUR83wYMI60eDVtArx5vdV3sRIGH3sp5IHkFpbMTXwHFZQYBxZdxV6lFhn591oGYl4EoUWDOM8aKU8Tssl5My0WIgtdDO6LozwQomHUlcHtDwyiJXiCAqUPY862Wn8iXERMPs2SaHzxaVBJ-BarKuIPSqU55PGgHmeD3uL7qsmEA0myKLst9Cihv1zgTQPTtEmfIoUlq0o8hQM-TqjPq3a7Ny8TcdeyyMXOGGtt_xg", width: 720, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104059572779571124658\">Jacky Jiao (Jacky)</a>"] }
        ],
        summary: "다양한 해산물과 생선 요리를 제공하는 식당입니다.",
        updatedAt: "2026-08-16",
        highlights: ["상하이 스타일 해산물", "신선한 생선 요리"],
        tips: ["수조의 해산물을 직접 확인하고 주문하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=301586428357434735", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Chenji+Seafood+Restaurant+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "장지 비프 누들 레스토랑": {
        photos: [],
        placeId: "ChIJHxj0hENwsjUR8bXgYFolWgc",
        placePhotos: [
            { photoReference: "AWCwydhFay-WY4McYi4gfn32GGT-ShcuB2M1yu2li0YhZbOsK8OP2FjChv0JmILWpWkN57u_LLJtXZjEbXOvl174KchoL4ZW4VUjhtqXKMJzO7UlFZu3DfEQKhTtlVBRTSk6qjQpGuUDsphXcUwECDTjet-aCuMBjssU_uK-yWikPwY1xPr9uuBNnc4t3DNKhkOb7vuLaFGChvyHnla8RJtqvOIP8x1AAS_L8psvjOYETNG3vGk0veotKy1R2m9w-0wUBIuPWpuJ6FYt-tYx2Ci8hdVVLp_cOnmnBRdm-RwCYKyD8uAEyceeJJj7T10BaZdX5y7z6jqVmyt8B0YsYN4nD8gnQfgtucLqynZpJ4KWTD7vGZjy5Z0BNLp6IWIRfyb9DwW6BqG-uMs2hprWyTwk10lhFCT6yf032gcvSyVA_oBp1ytLi6QiOatzMqvvR2k8", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116432759401654783183\">Gary Elsworth</a>"] },
            { photoReference: "AWCwydhy_m7wDIWqYjuBqkCB5dydPtlKUkBVpEnT8R6I-geZCgiJKkEUkfR7jZ95ZlT10eYdauInxNyaXCIgpmsZwJOUdnSREtn49weSzVc2Cu1M4b62qInmb443rR3ybBwBMnFx1-BEh05XnlG5JYemw3xyzqSASJu9B-FV6G2AVjbAggen2XN__gaahZMp_aX1jqZFFzioVe1bfiJKTQbVEzYBmIgJNX5vDYnVQbaA2Xa0GpEXBlfgaA-UG2Hy4nz-NUB9Dfj0fa_C77uqSzgkbEIi_n4WsvEb3-VC35nqELFrcaIhmo-MUM3zsY3zGJZgty_HmyzMOYGzBxUcG-XIHcYcrtRigwXCGu6NIEg57a-q5x80wkEMz6ImTDRtAsIfNKfzfYHJ5Cmm-CqonhcA8PpuP3jUM1XvIZjkuj4ru9jrkGU7cvJVV0YNbgAAORub", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112612382860317973362\">Kathryn Geiger</a>"] },
            { photoReference: "AWCwydjdJmpnYmpJseMLaWyS2jqvn0RvE6Y9GaqALCcPzS9NJaPleR-51VuXE2K11bNqVtrUtBZnvUACdMxS4ROuNWxy3FEuIuMufdy7v1Oiu8N9ordltUc4jbHXACQlE5AU42yvgLQUJyApnAH9xUVajenJWcPU4GdWskQ4aeUCKctJ598VKv-IOnW3wYF75vQMPOQFM5qaH63qVGvw-rXJAZgutlV6DSn6de7P0uaSAnUE6GUWNMa_aIQUt5mgAlVE4VCwFT9BhYVZkLVKZia9RtWtk-LLGB5bRIhwvaPbjAjNoDR0GZ9BQpb86_kJTugOsfbox5uFz-zA1WQjXrIPn9dDXUmdh8W6qefCmXUWwEIeSSOODU1RCRE3R8e51o1E5UCq_DM_MBzyMhBjolcvypkvOXhvjTzsV-XMhUAfdAjFX4E6_hTxQLpZSNP9Cg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116432759401654783183\">Gary Elsworth</a>"] },
            { photoReference: "AWCwydil797LI75bhQ9ISL6iu-2wuvUtVec4xmI2u0Jqz_nXoTcx7ggYV-GxtmRouzLSjFUnCAY4yayBilMKTOubGFHse841ZtxlBYim9RXfcOH2d6Pd2xmIKiDbg9EgVtQFUFWyVXkpAVGIaNzrHkR7yy2vMCryuC5Oaj3mbkXXdfbXA2_hwHMJ1FOmVz0KQXFRWfuWzvGW48KHKxuTb4A6OcUMaTC-JxSeFlV9ptuSko9G2LmtMG51s6J6nGmVRMYpsQsIUdnvjKR6Bl8ZP43YleERp-nVsNK-7Nvf5FpTv0bqhJr5wlTRsKgPEM3WUAxJHNnTxbRI64grwBc6YgJfx5Ru4w0ZWitQA-pfxVWOs3-9vsXZM5iGJ91Fl7hoMz-7tM8tHhgZolphBlLEwkrx3H0BmGfWVhPaxL9qJXEUdsKTJNFTNcUyUpcvQvbotA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112232354275760110263\">zoo</a>"] },
            { photoReference: "AWCwydj1itFrn_089KpgfNTpx-oJfxJ6VOPx3FjhlhWx2UzbYHeRNBwmdgQG-XNe7AVVlfKM23VZ3oakZuyYQ-6FpsHXTsDqjl-68t6QZPbBsVDR8w7XowoMNgwKkxBp_YCJ0AhERqf6naKkzDRhXn_9cVwirT7L6Q4xkRq5zNvxSNnkYwEhOeX9aYE_dOwoVnDo-oWYnho9B81npSxY4EUFh7X-YiqNsl35QKnIcVOkmL-Rx6LbF3YdKGKhjTEJGi6N6tztOqmRHTtkb1sX_WOzL4iKiAZBlEMrW6SIhm9q7RLOf1fPZC1thOa1ekNv2eYSXzKSuf3rEQmKoX7xyZ4A3u9G52Csn2LW_rdpSJZDgPBOPOx6dtMAQ6PHo5O5K6-Z8QTKfUSlDH699EdW3YtBFxWrjQnNMvzGotsh-vrJKZbS4l5-KdwQvRCUoxoGl_Oj", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116993841498037105169\">Den Grodetskiy</a>"] }
        ],
        summary: "친절한 서비스와 깊은 맛을 자랑하는 소고기 국수 전문점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["최고의 우육면 맛", "친절한 서비스"],
        tips: ["한국인 입맛에 잘 맞는 맛입니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "우육면", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=529776976272078321", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%A5%EC%A7%80+%EB%B9%84%ED%94%84+%EB%88%84%EB%93%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "트래디셔널 상하이 퀴진": {
        photos: [],
        placeId: "ChIJMa4ROwxwsjUR46G4qL0sMZk",
        placePhotos: [
            { photoReference: "AWCwydh9tPctaUAtbpc7bMbHqdZBIjCVUvBnQ14Al9k4qLvHQJC5Hn_ABjQPTeIpgBLQgSuhz060nyqd3DtcZbpkKER2BNTq5txkUyN7qfuqgm5UBBOM93XF8Dtx0f4FoRhNkDj-y1uSAp6CCvjmYTIzeSOaCNDrwRvQiSaaF6Fwyp3mDwGU1gWoIQznNocjeThP5kEbjp46t4S8bTfFLuOnfMKu5i9fT_wG_HnMwbyfNmbiajGym3FTtzJHVArgUsOMF5kdqpEvoOWGyG6mARgnrQpfNuTqWpOAKV1LmZdc6Mh6m6V4_bLVUB9fnpt_1V1P1na6QsGKV0mSGmIJj5KA8fqa6xX70clyHUrcDtos5hgkY59HCHyjS8YI-snYn4uP2wAY_hCSP9CUVWPj6Z6_E6Vm4vY17jbptRNTp-oK174d0S_tcgD_Mqk0pUyYXTrW", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110779809944259159952\">palatestomach</a>"] },
            { photoReference: "AWCwydgDfOD-kCEj2CTfwZMFl3GoLtVpCSvFPUq7e-toRhFxjFPE_dsAFpI7yyxIiYfQTtZG4xsC93kJR-6meelsNGkWOq2TGzELMgN7UC416rYCCqxoH7icFBrZjfQo5AgedHieOmin-bBc0KWJzuOXd054ho1tqooNc-C3B7nQjxYCAYqpqsH5Y03REcX-qf-cQSAT9UlSk0IMHGQc--OxfWbh8TYAHuQoCEvDtIlNFmUa1_xfkP2kHl3liq3OFjsepW38nHxXOgLdIliHtFa6Hdgz_4N6KHRuYjQ27JCNqfwmgSYYuYa6X6R28l9W9N_EDcTDwCSwUkWQlzPwDa8WXy4L7XWQLWxX9vf4bjRGInOP7vk6F8ezudMOtqyavg5JSosN8mMnGxDRHh4x27z0Hsm_GwtMQSVSx0HvdKsV50B0pw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109745553639958486808\">Sean He</a>"] },
            { photoReference: "AWCwydjczLat3IUvynTWwaiOznrv2YeH5HOmMAARVAMRFMb1Uyz4L2GTErEStgAVI7QajOW1J0gCOXWHtcJoyhma7gqD7eIiW10mOci3mjWjRfOQByZI6ZTM_sm6lDW-dnpfx4ysAIMRBiA3COS0JMyO--2kYmMCuUw2mjCGk-uyXYGcl6YjtM5AUaaFAzy0FvAXRTswc4eyEsy_Niq4FLLlTrymUDMujS571I_CxP5WOH8H6gcZe0EIJP-6GhOoeDh7wJBi3ZyiX5N3SgAlGOSDRuJvr2PP-Se4SupCOq9T0aIbeyAr597YA2RbaX0EV1ryCltkVimpY0SHVELlFkczDxyXNwcnl-JSswkt9fS-vZiTDbZeXjtxfac31iossCHxHKY4SNvXPMQ2omcfPgPxmNi1UpUdw2uKD8m-_-98zqU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117501088414706785522\">SK 1qaz</a>"] },
            { photoReference: "AWCwydjYG7ePoOfrzKdluvW9ADR5cD4NMPeHB2OOeg3TbMQZC7uf5T7yTN7dCR48OJ-_5pHqeNmbIvNZqUgbxK3hiuIMQ9-CwZyMczhEi1lPlIfwTxd-r2Bq_gKhSXM0r5vuZap6gSdykcPi0HwiB5QiLegyppRtSzARIxRQsAS_NO2fYP9WbQJVgEI6RCaPIqLFQZnwff9-ZCnAejPn-lbve8fOePiWvWdeoGAIoqxrYP2c2WUzn_rnjr6WVMXhS0WjgzrjMuJxeDaeeNIFgSfn-3q428nkg7Yf98WAgblGVziq_qvt5QJR5R9AfE1QWHXedQ2F-8KHZTT5WfbZQLUb8Punkcv25e_mBD3DaM0-VGGs3MKZ3oZySb9MdbnU0y8_HR4CiFbBThS6i-O83rh4j3dLAgEcZucdNmreyG1ZuXOiLxyj", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117501088414706785522\">SK 1qaz</a>"] },
            { photoReference: "AWCwydhuTJOowxyhxuEgf0HvW1ylykKN5F9aFXmhwgF_yKNMoXMYCjmvS9wscGsAPI6pK5YulGipCAg71v3yast6kf-588fwGH2_WS28i1nwr2fkskt1-veNrd5e4xCrb--DHaW9qKImuVoVaRSb_e7USDBop08iuyPWbwcfnAzjrcgZ9og_rvtkr05-69bok2Z1vrJ7JuDoRSY4_QMdKATAsbTTCoHPHz5iA_CQ6cQrcU29DNai1_QONIl7vaCjduQDMbipSiDYLKu5pCH7jvKBGhwIol-AwAr7cwF6gWGTpHC2eTy4DABgBoUbDZp-fTcCYqCCO_6Ijh7BzU_WZ8C1Lzwm6bTso0G-QM0MgErsukxGfEIgp4ys_J2rqYxUagVGSD8bSBZa5F4WzjEtFt5INw5zePPoEj3S57mpEsEZJZdxXTEooegGHE6_O_l01S-t", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111404428635281857989\">John Wong</a>"] }
        ],
        summary: "다양한 단체 수용이 가능한 맛있는 상하이 식당",
        updatedAt: "2026-08-16",
        highlights: ["돼지고기찜", "민물새우 요리"],
        tips: ["에스컬레이터를 타고 1층으로 올라가야 함"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "상하이 전통 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11038653354752909795", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Traditional+Shanghai+Cuisine+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "올드 상하이 레스토랑": {
        photos: [],
        placeId: "ChIJ6aiNQ0NwsjURCLIWJF4-pKg",
        placePhotos: [
            { photoReference: "AWCwydge7sRRdQrcPuC0HYM3gYp8eJZ8OgOZ_nDxZpkp3zDKt5kAmEAqZ9JNIdwwlgTC1wcMW0yHLIrdXW446FrtTJa2trQez0S9Nm5Fk1XK0o0SZFdPcsdryuSPldvSqU7qR4bv5cljri5q6-E4hzh8-gbyq2SuXevHBqQL8Bys8P76dplZ4eaP6A5w7j-VCojuseTQeAjXtJ0k6J35Q1SmlKNg9WX-HP63LJKIfaUPZnglW9IE8UdxCDmqVWC-G1jg5dQfjMVyCtofSO6xT_37B19iOzrKOimoyYHIIdLq-mtJ_SFDfWL6q-twuuZ6b5Yinc71R9gaAdWVN96BtOOR68vLc2rhGyF2weuBQCNuOsU8lcWSG1wOZTxBulylMk6ZJWueI_qbiP9dpdxvO1xGp5lZaXLPqNGw9QYf3MrI-aX4d3qI", width: 3879, height: 1927, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111775909013536130068\">JK-Julie Karl</a>"] },
            { photoReference: "AWCwydi4fOHOmVUVcjZKzS4Vu_RFc6SrBjQR-iXkhhAqq-xRG7dH17ro4l1sAJVsvHFQa6Wln3repRL6aj0aLuYjcmfsps4ptGTKRdvrrL45g-gh2L0sKcCR3new_f7yCJVS5vswyu-WszVrGSDK6QNtItiTXS78kXuMnbPBq7iAqERn_tsejeUfPF2erMjSJS5MYqToo63-0T4_7DdQs1v0tHJ-rzzrG1_trVsQhlN11RmLa_AO_2xpJNgqgfBz0089WHeTu8jq1-9Fn1xLUUQetmHbuKSs5dtt9Xg8Pui9sIP-BKsLCYDL-vfythMIpzFG7OD5qsEB4GoWcON0960fK5swEKFlC91V51k9NmzWPN_rHGEIz4YA3J1ZMsRweEMApmaeGtfzQk-uWH3_ojiOg527hbeXYC4fapigTmN_wYDsTLjB", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103001150362732801627\">Ivan Chow</a>"] },
            { photoReference: "AWCwydje_gsSZNZUC6cN6Dvi5ITB0fPwQtrvgJlgpvrJHxXx-hJqe4XxLsMoDc0p9J_ZxEUYd4waeiqwleloJgvcIMDuihArdu_9RbH45Q04r-DRHwzk_cIIZG0CIlUMVSXNO3I77pcl5v8ldl_UrVMelR5RUYGAsUeLmKS9nJDfICtg3y89mGGv1HBGTSxF5ecOGZ8ePQ6vcqMtqsRSGhqliQLbZShcuv0U3qY3Eyvf1A4nxPzddwJSrJczDTSgr6hbAr0RYs_FNaEVf6dDSj6Fxai7gSJy41xn466cVTwA5jvjg1JUDVMAms5tc9rjS2do916-d5QC57y-A3J1Wwy8ktH-XNU_RT8fzxdvD1m9nZveY6eOTDmbG9NckKT1S04nVf65sq4-ILbr_KVqKQoCVBBGhH_0pLyBw7sIuijRDIoSc0IAY7iFlJpilFURDJIp", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103551269118571387770\">Yulia Esterlita</a>"] },
            { photoReference: "AWCwydgtl_S7RK8_TrtFuQDMlUqkbsZ-iI3F8FMxRuH_lXV3wpSzgQNE-NzbC9ju1U-cmW6KDx3hU_hVVKa4u7anMztojYPmFacxtqjFumqo6DfMZahbb2_GeKLoILJIaBl6kbDQ5oHmpXdJ-ux2QtYfL4e2KSYjlqyhm3MRc-CCSzvny3M7c5eqrDrik131lwFzhpY_emiOQnuWjsHpa2IGwe9F7J-8dbGFMeey1geEptN-w8NbWd60a-CbQnmD-3MLtxOSjtfr1Rs3sEngYd_sk0GYeLl3VIAVTXd5Hc6lKS6jwplC6mWXH6OWEBRQi8O33VIvgaRhnMdLaTpuu4PWCS5mCkpVyaHkZCOjxt4xUPF54Lk2qerdJv_LLr1XmerTjuELKehsK4Kfw_Kmn19fr7oBnG5JjmVLF0UVHTU5sw3Ps2pE", width: 2542, height: 2291, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111775909013536130068\">JK-Julie Karl</a>"] },
            { photoReference: "AWCwydhiH6Azrde_dvTKSQfgl_mcg1NT44aiiOqEL0f_fIWupdgBLvnTiTOV-HtWAwnRnE1YMJnvRV5eeroQSPD2xlgbzbWsVHy3LuiOonR6i0HY0dRIqE_IcX_FNtT9biSwmFxc3e6OzQ4mxfKozULJt7ju0NRIdoD7irMDC4hh8XX8XMUYeleeo-FBCmRAR7peIHnNxtldMa2MvSXm9VMbTMQR_V-Lr4v_yV5Yh3rczPSYqrOoFx3rLQ0qIo58_n_9Rd0BkOf7vlvl3TmKoj66SaMkJzNhA4nEMGQWvU-QamZmIw9LtyIoUHrV8hdxrxGLmbRf5Bf6bav4ILE6-J92IgVEg4nuKeSb8nFbzytTnELYiznTnd5PiORtNn1BgRw7By0qFX964t8FH5Y0SMIxiW-a2DgnYylUFSyorUlBV8t4TA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108632981435544603233\">V Vinn</a>"] }
        ],
        summary: "옛 분위기가 느껴지는 상하이 전통 요리 레스토랑",
        updatedAt: "2026-08-16",
        highlights: ["새우 샤오롱바오", "오리고기"],
        tips: ["새우 샤오롱바오와 오리고기를 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "상하이 전통 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12151906268605755912", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Old+Shanghai+Restaurant+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카겐": {
        photos: [],
        placeId: "ChIJTVJpoa16sjURiK4M5bbk0qI",
        placePhotos: [
            { photoReference: "AWCwydhCTTH75uetJ5kfGEeyAcWC3_u1K2E-3bts2-QlzjLmJZSJEjDU7gziu783vgdg9nYplzGzhB1Ncp2zp7JHsTcRnowhVhLcpHQCzqxhFBLSOHF-FJ6p75Vxh4xN2UKlRLASXhWzlKf7DFxBXMQQjG2LpoAmkTdrhDkOShUCSzgq14mnOYL5BwJ1CKduKMznxT-02mYgsIveUCdAguAvnTNCfS72k2ZveG0-k2TVU9JV4_uWvK_9pz8J-V2d7QCaOjXbHQ4Q4f05iyCdIR8I88JEgnv8tmj4JDQCFBnjvL0F2HdLzgFJEsCQZMyBJDzqP_gC7yAgsXOKUJAGzN5HsWQoj5HIuAtEMBhbUFWHaTSlYOr9xC8w5S5NMv1of3XhVzDscbV5xHI_0eNQsTTYPkhmGi_XefNnaNB8ZQ7KJCAnlCKl", width: 678, height: 452, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106793970610641022542\">Deepak Deepak</a>"] },
            { photoReference: "AWCwydiB6PaL-hFW-pzNaOz195SfubHarTvOuxsD92n4TJS7lpkAAfL5ar7pddBuv7hg5FaIMwzAJB-TQi1sZajIRR28wJKdR6VUkSVK8br4Nwm0mpjPmjEWl_mGSYeX1y7NFW5dl1Ch7onYAfcfQmJO4hwQPPNAyUa8_Fwm_GVBXLy8G8g895_5VTo-8-KUWGPqYA-5qMeapyYx8lwC1Os5G-7w4w9v5SXcwWBTnA51hn6dnaq3Pda7Ym9icUL8mdC300RYq6RGoyiDIlqt1I2MWJZLAa7LC-H1ASwGTXRufhsU2WRHTbjvZxWt_V545Y7Gup-SzQ7zr5N-agzPmkDtJgdEyFCuhbS7mNUoVr-D-p7YjNxD754VeB0iSXtqGxZ_pwWjFBEvcR8ilxQijP3VqkVyuF6YPZ6uFQ3sVq6nNbluR8-o", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113238338162707846370\">Michal Masar</a>"] },
            { photoReference: "AWCwydgeumWY4SG5KbXYWA3wZDjG1y6P8YI_2ir1-cUwsZ1GhfiZ6am4nvI3tF59JSRILY1j7n26u39pElyALgDR6lrWlCQBSyibCaSFLzI7GfF0z1jkwtEi4fQnLO8fPAG09NoPz6c7OtFI-au99yvPuZQEm9I_xLVigFY23dYTU5gJWOGbUNQBNOxwDtVWQ_5a-BGJWFgy-I2B5CzXwNVO6pZQsu_MTiQxxUir5vtA1qisYTfMxwYEbLmC8ueR45FpYK0dRVk5se1KQ7WzQSY4Gnh_863KO02GzNdYiBSFSCS73l5kX0jFbqfc-u719NOiZHNleX6nHY0miveod9m5zEptMMUWm7NE4oIhBTthD92nd3lKQSYsX4cvTnyxPkRpJrUXH-xqM9o3BUAzw2J4r-zY0cnWC3cL1frND4Q5wgW9ZQ", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117713810409578986915\">Stephan Rohr</a>"] },
            { photoReference: "AWCwydicAy0LECRjpkNaCpCpAHGq4HWfQ8SFE9KIqynMGW1_7sEaut6iA4hfsXesh4H1kf0yQ-4WGe3mg5GBzWdvJGAxoUgwcHLb46yjwRfBpUhr9XDa8xKPWbLzbxeuo46R3uMHrXb6VBer57bI_4ugFWDZJgduOSzcmpPjLjvo9fsfM4V7353DY6np0RDnUQKvf2MTdqVMujn1hgftrvRkpdnlw6MUVDOTZ3uzdzJxzpVFdcgX7oXWqIGAweIA-n2VuKbKPd_cRyXtmHEQNp2Fg8Pi0QZSnKc4ZGF7ksrwaoxm6xDJOg7qIupazU6-QPMEas2sRbeN7DTFXn8ECDLu2Re5pbpcsQQVQq6E_LnRVRXEGDfZJBHaoqwxzV_YHfN-vXnjIKjNHDppdTL9-RSVbdHNmgIVW-eeEO3vhU-4Peahfw", width: 678, height: 452, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106793970610641022542\">Deepak Deepak</a>"] },
            { photoReference: "AWCwydiL6JyCzU-rrqnXcL8oILCZWKeqW2IMC6UXBv3JkyOH6ppbuH9pF7tc135_fXnlPkyb25VOVyYddcUv1-JF1kT87bxAK7vrFzULvh2i7AcPvu-MrTVsuwIHh3ZeFHnE3PpDVfZ997tCYGIlgnlrfBXG8M1VH1c4wvzyeSozMTziiwmJbMV3VbILhxxIR_mKeUipx6h9ROF5JiTBRprkmxPBt3as-l0GMUH-RNdvZVwP9CjHW18Dg7-1rAwyw_8fkp-TU8o6rQU6CQI-zUITN4wl3N_nBqn4U-FiXfhhKQp07TubDkJPeqbZhtuJECC2bbdkoObN7HcFcsQUi9yNdpyA7wh2j_TSej9pQ55hTkfrGruZP6oJIUrxV2X6vJkSvqJy7Y2ZwzIrCtDW4RvNYk11HZkm_odSET9EHwxpy19ouzKn", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113362503782707969343\">Peter Zang</a>"] }
        ],
        summary: "일본식 메뉴를 전문으로 하는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["일본식 요리", "현지 느낌"],
        tips: ["영업 시간을 미리 확인하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11732691453431557768", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EA%B2%90+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "첸아이 크리에이티브 스시": {
        photos: [],
        placeId: "ChIJEXIKE0NwsjURCyWCE8TLCUU",
        placePhotos: [
            { photoReference: "AWCwydiMOKZQ3JUk729YrD_LMUdsXvdYCqdu6Imd912XcfnkehB3X_CW92PyvFP2xyVoA0I8xDZQsj8fTVTM6OW30U6NhMVeRhprB_W24mhxMS-j3T0_zITx588GVJpALjMH_gi2X22AfUCQRImt9JexvD8jZdemx5gbtrKNBVJuLhGwfX9qzU4s-39VpcslMd9WweSaTarVmYZ_1wycYW-z-fSQR7epJUOapc3yJVpvv0x7MEO-G7En-63JZbTgINOjxlIbdRUruo7UCa9e2MmgiZV6rm70FDjrv4NM55P0N_KCjMm6iwfJvZq9f7P7F06pddLF6tOcB2voMk8F_CHTD0xpG_HQPDH4gfKsQXj5t7jzFzHXbfk7InVz1QZaQU_N2vkTt0myvHpr2h3smuX7LxsCyM6G7lRVhJ2QNHCVYcMxOw", width: 2048, height: 1158, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101180809061142847748\">徐睿鴻</a>"] },
            { photoReference: "AWCwydiQLQ4CO4mCvzL60kmyru50juSWfiwZ_NayeLLdtZLbF0JLkAe4ZFmwbqKQxp5qdI8uk_HO6m8KxbcGqr6JCvqvQZYPJqS0NN3qXJO-KwM6FLutlwCjZTbpgpotRhOr4g0AVai39Jhx1jxUTZ9l_1EgGVDeSHw4FcsViJjN0MRh6tCOG_qQdedqf2riJTlprfyeg77b5UGfYFPwwftjQQCX672vvN7KmIVAaBYIeE-idNJC699KPKY6p2b2ltwPhQx_pK2Yix2EcvSCqyK4xHI56IAsqK8hnS-VICh0ujcfga_vyVJinEvIgLrcHvyfPnexKY8todCOBlzwmx8pKQmtpbi3kbxOkL_slqMugSe60HV2ih-lCTNZcADdV_GAd7blmNo9zVALWvfuDgnc2S33eKZ-rINPojDty-MRQCGn9TaC", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100506291812261489050\">Tobias</a>"] },
            { photoReference: "AWCwydh3NoBj6m5BYmiyFo53AjFGTk1sF5VQ3Dml2GxiqDjzV0H6RIOA7h-KPLZ7zxspgGMhkVDuUSqKSY0Jim8u8ilXmzZ-esTnpqp7JDkmOge42kqHsUBcw4uwkEiGCeCq-5-quWuMfvFSErycIZSkkvPD6NgpyoYloLreH1UIxDnQhG6MEfan-kdvb2092kiZq8_SmE0Tw0vIom0nq585qVsf_50V4b4X0YPGtAcTAJyri2_6F1m1wjuzg0D6TfEgoHZIDO-tw3FpTIhuWdhLD9tpXAeqhKgl7sJsurQ4CCbJ3EYMvOyDCKq_K11GcXNi2z3fAoWJn_Gx0DPKmBG2CTgz844mOwpw9AHQdNbPIyf3qQtaqYlaRqu5-QMmgiTUILvhzTLhTXMztPROvPf-87kXbLGq6Si-JHzBV_3WhwIhwQ", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107953746289185288388\">Carmen Nawrath</a>"] },
            { photoReference: "AWCwydjvi1P4Pu1IBSO9BldljMgPDLbgZO69QdLy4GrLR9z1Eun1DLeqroYEUW60pLbi_I8NYyeh9XmDApb9zyLcVyyyekNmU3Pnf7SsqIRAwcSn48UDa43sHmQREWBh6iBVKa_uFJkBOA3srpZZ1-3NoxS8SllTFkTuTCyjyEA9xqf-DHCKFK1TfutkD_p2JB9TYCa70u_9nCwNS9UkaZ76TUizFgRKyCNMezBeReyxmfTOSfVxc-wda0aZ45RVjfG81zTN_wzdZpRhiUmYYv_hxPw0IM20xtby5cma8ClGU3M5SZ612KoFuUpQvik3XNTON_D-brliHioZwgzO_Lv3CPEFka0tjZjKTdD33P9M4vzz0SUex8gAyd5nFdmaURocE7B2iOMCHp5RhBv48wpY63QXDoOUTyoBYjYkBWLO5BPYOA", width: 2048, height: 1158, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101180809061142847748\">徐睿鴻</a>"] },
            { photoReference: "AWCwydgyWYPhZzXRra5ZUpSdKJx0uWrq-zdPH3xS5ML8hCRhW26H4hfwN6fy0dvGnPqiVYTqQ4_1auGHVR4o0cXOMsE0iWruo2JKeqzV5asjQiVvS8wHQufessKdL-A0e5pEUrgNkY_X_1QjYBOeMUYq6Q1PEK97uHGlG44RJBho-29o0UQqLn9x4aGugNhiOrMg-aojhGVaoLCkbfaX8Uary4nQPxSsaUxw1Y1pw9Dtdl4hEhknVyJHe4nCRPF6f41sktKcGkAzfQL6Wfmr3VTREO0pLk6gHRSRDTQeWRdkytptZ77Z48XaUWfnlP1cxybPhn27aogxLrLRYe3_Sae_Gy3Auzb6JLL3SxZh4ZAR3OTboa2dI-SjcJqWVGT_ZBgMv3LvkvBVaxLzNleFmWWrtjDAyZwmVxnLmpkCbAmlwQcHCDN1", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107953746289185288388\">Carmen Nawrath</a>"] }
        ],
        summary: "더 이상 존재하지 않는 식당입니다.",
        updatedAt: "2026-08-16",
        highlights: ["영업 중단", "정보 없음"],
        tips: ["방문 전 영업 여부를 확인하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "정보 없음", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4974731306408748299", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B2%B8%EC%95%84%EC%9D%B4+%ED%81%AC%EB%A6%AC%EC%97%90%EC%9D%B4%ED%8B%B0%EB%B8%8C+%EC%8A%A4%EC%8B%9C+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "라이라이 만두": {
        photos: [],
        placeId: "ChIJGRhnfkNwsjURGKqqL8OaDfA",
        placePhotos: [
            { photoReference: "AWCwydhw4Ba6vk2l7Gpa2OoP8BdSGZ3hCmy3dvPIonsS32DIrJJ3ctjBySQxrybuAO5_zePa9w-NilVGRde1Boc6yPBpKsEcwvpJnC69oW_eSRlYd-vUMWQl2_q9vZKZDeup56CrVNz1SBxSXoNKtedgvhif-u3AhpRgn10jdqJSAvmrqedT29sUhJDYuMZvCOe8z0-ry4tZ1tGNHBTcg6LfFkR368jGzYbadJ75lU1CVN6hYOaRgOYqbrDCO6y9xjK8LSiirZvzw7sXhQ6Usrx16ggTIZbGG9upm6_UeexbFVNJ8yJmQ2quQqUmHO60J0d1bICObsxrG20l0CkEzcDxiZ4N5_uF22txvoW-KmOrQK9bal6SbD046Qr2YAgJ9SZcAZ5WrBYHoeh1jEq0MN3XX9LZUR4cT0lAVPhsbwG8n-7En-Qa", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103335998984983373388\">Victoria</a>"] },
            { photoReference: "AWCwydjlTM0Ori4iV8VvdSPi8B7eca0MEoo6FI-5vFsoCLVfsARD5d0swbfTrS64ji5PUOXtKUfsFsugwt8JK3vkE-7JtD0c8mTRI6QcbNWXJD9f242JTTpRCG-w8MQ_GuNtqSlHPkTahDPeZRA-y1RU5YlIX9eMnSscj6jrZ3zbsb-h5mJO1qSJZAfkLbLj_7nK4_0j9qNvFbNEsDhe9PzMIDg5WXbyt4rFxeUnaGggGZ3vVyXogps42XS695KGgrHwCPk0CfR0EiVFw5Sontr4T7XVZnmBQecYbeRweAW0Eykbr3z8CaHLBRlng5lpRubMu4mAQ-Wr-m9uxrh0PTgMFuXvOwY234XYdmGnKHjMWScbhojNnzOL1ncFTUKJH8bdfKxf2vDHeMpo-sytWfGyNpNHvhtLDwpaWsu-fNPzoEwLX-BvZG0z462VBDspCUNl", width: 1122, height: 1402, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104719407618159438653\">edwp</a>"] },
            { photoReference: "AWCwydi_EMkcwb0FYWOIMToTcbKD0nX8bA2QiZXuFl_P0OfWGHdUZypnlshRy5bm40N5TtERiRpcaIfURX3OQivBE5zwOu1sWLhvswSzh6oUp96LoItqhBtx5Z6QKljt_IeBPbVVmasvpdods6t40emKoCbyEMockhpKyuaqjAFDS-n-xy4pzVyiRe51YAd2rZ5eDrtMAbGpMnbjP_MI_n7jG6l0bGZktrybRXArcJE5zfWR40idtmY0BhmqFLlgSuZvCIUf9y1-d2yRSmGHYPWQQ_g8f8nuTpH1jfzaHDFiJJMMSsco6SCkcs-n_ChgsplbsX8DS0ocGK0DcojRvqTQ7OrCRUiSn3_CbRhlxejcGCIe1aXWWgZIitxlXGISqEFp4HB3vVkJe_mvSVSjFdzeazyxDhK921Ugg758gN8kiYQ99B8Mjr_CeKBw_e7t1DOa", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107341968407866724587\">John Joh</a>"] },
            { photoReference: "AWCwydhuof5sB8pr1TIiZzytRYV2I1yeDgEm_ZbSkT2LP8T5PmLoCT05BLU8vMjh8xsojUtKSxu9agmSMsdW3pGA6EbLCW7JWUKVWpfazf4LhfEU9i__GHHXfZob3mST6mfpVY2emZXIG-81V5xVsEnEG9aGOKpa288VAP9KPNQQAwnvM9L02W5Tstx3VpNVTMQkmqFg7jNuakfuBDEsJSa0yue1tZFM6WoCs0lRMWr6nvjrl3zFbXMR7ymX27aSpJoY-3Yaw3kZwhh4gayal2E-KkGg_KPyuFymaQcgtfFV53Qdyb9GiSaASxezHmRnuX6f6XsT0y_DrZmQA_QOYvyelZFz9tMf8xM2fTCAViVH99wXbjeRpkmpknMMltt91yXIcinVT1moilu1ekCMH7-BJXox3-8YWrEShKYB23ek3zqSJYcKbrPsVgpA9ejjgb0U", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107341968407866724587\">John Joh</a>"] },
            { photoReference: "AWCwydhevpu7mcJascNWDRbSWm4Ra8dlvZSwhlW7_XUnZrZ4CNzCcEiMKkiECA7P7OQvY6O9bpTUcd-5QGPzmxrCLFHf8GE5wYMnS07qdALns8S9vRQjdZAQafdcXkzOm7GOuCxDHKV6uM3KpqHwHrPxOLwTJx3SAM3IuNdXSSDvzN3qsXFAmLP6mTA742zxVv6FSQY1n4xoP0kIbCC0sx8F6mAoMiZOhk1ocOYY2tpTZxUZQTreuvGB1-LsOSOHpUJCKmo6-Rq73WTvhnNwEVdHR7UfgiRELayTPLmT_Mm5sivEqAyWKbXsmg6ozSjZ3SFOjGUR-FUsBbLa30CgUmtO-NdIFb6ZXrIXrnT2M_20Swwthh5XlZXUC17aXNfJ6hjb4Br625QR6Xe9zs_6RokSP47RrxJN0nGe2akThc43e7HALOTl9IgBEeT9pFOLt86i", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105368583475130655235\">蔡蔡</a>"] }
        ],
        summary: "높은 평점을 기록 중인 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["맛있는 음식", "친절한 서비스"],
        tips: ["방문 전 영업시간을 확인하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "맛있는 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 9:30; 화요일: 오전 8:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17297651906908957208", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%9D%B4%EB%9D%BC%EC%9D%B4+%EB%A7%8C%EB%91%90+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "디수이둥": {
        photos: [],
        placeId: "ChIJjeHh2w5wsjUR9hQ4sr9Kv2Q",
        placePhotos: [
            { photoReference: "AWCwydg84HAGfqILPCfWxJu66y3G5vKMu4vEhSkHaTKTEI5hklVk2Bf2whn3616YGbGlJyyWuY1JWx64vfbcLUgS1RSLOsTHQ7InNhoIe-JR7yjHKe_ilaYGkJYlyduYm8gtt45WlwfGJxnecCq7Jj8fEsbrkVqXMKtrSgS8Cdyvwbvp2S6eM9qeLR-wpSdE2oJ-MvGgYyaq7qS4Yo5WV8Qx7I5eyBcSdEblHvJzT_w2VLnJHqYvKbkg6NEm4eq7hzFHMi0sVXOAyQCLTu9JWS-1KKktwNWZV2RqViEMuxA7BFNW6OeAvumGvYfYgST3hwUFVPDryLuekjDrxUp0PaX1-DstIJcuF2xXA3hYcnd2ur_qJp_KvIhY20D2mfMEbQuaP4SmTyu14WU5L0flHWH4ae4meHcc7jY5BYXolr3emxrkI7sM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104923089458198722516\">Louie Lopez</a>"] },
            { photoReference: "AWCwydgkfK_XZqwK1Q18LWIS1PWLqXZ1ziVqOxEGoJ8ZwnrGpUtOKvbpZbemjgZ_3OFhUQsmC8JA22mC3rkaNJAltf04yxm7N4pJTiLIOgW8iD_vy0UYX77ac-DriV0NBXhmInfhFkBNEh1e36BXWTKbf7IcQMR5wpyQvgu-yzGYz-vZHNG9TGIsdsOqS2RvULKhGhBgn_gb3ckW36HxV2-mupaC4DSsZe43q8WLoy4n4bE7ZMSrOno9d32RzxGu962ShUsnYG3_X1WOy9J-BZ_M0cHKRk9HrwpH6z2noheA7Z8zM16bJszX7pMoNrcCbaJs565pMy1_d9ZuMwHuXJkfFzzZ_edFgbJ3C27oakigJe3VR7kwIsRaTMX_YMn-i5_9GJzcw9fCcArx10B47ilSBNcjAiwpJSq1aXBAAzyqbFIpSj3z0iIzliG-EoZdc6oW", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114711534976559195583\">yasunari YT</a>"] },
            { photoReference: "AWCwydg_DBbCCJKwjH8HkmxJ_vpVpDvgbAxMms_OWx8PDCaTxuhc5etlPudSYdsqRffxSuXvV9A1Z4D1Z-a4BcW416OG3v5g9LGAF-o4HrKnIn3REjlrP6jaG4bcB-HDqEAc9MdZNn2xUT9lINmZ0mf8LcJVYVJKevLiNPKDHcggq6K2HvOwJwyuZPuYerFRElHL8kldXLL1CXXAupOua1l8Jy2iH0D1cZ7cHiJoiy8VPXGr5_hWLP0sMEoZnoWSAAEHPJwm06u6MYKK88qup_6j8bibg2NeYhDeIVWKafYBEjqAEUG3ZQwiGsUBm4xYn6xBq8KWpP_-97kJ2DdX4hCfHWzd-O4ogpIxpdOlncA2mP1pjZypipF1HUBUcOTt7tQBWJNaGgTBOAS507fGiHrNTXTpDr-lleb7B0cmzsHeTPg8cdoSDDCBL_epusxubA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109765357984973295333\">Lil miss dragon</a>"] },
            { photoReference: "AWCwydilSjc2wHrjPxIOtxTosP1QSu7kWWtTHVmdZ1_AIzsYa0bKR1D4EjTqxq_359lQjACu8dYJdhzlabXaXnjWBJDTS4wfv0OlGlElZIZZzKiOqZjKsavfupoFr3Af_5YOl2SbWRS9cEQV5SJHCPLl28lD68_yayJlVW-QhTJ2gb9y6Nyd1xha7kH--34yUntZuihf_WDHuWB_cSToShFpqwxAABvWRHjvy8cgD6hufUvdaKbbmdBMnuipGqCrEnTDd0PjImdfgnno0PAlP3mvP843szlPgHU4iQc7rZRdomA5FAaeSBkgpY1I4HmJz5mTtQAlCnE_A4CARRp-IQfLnEStIcPNaGjKfGR9SfEG5gcCT0l80HA-0oAVPnLli106P1IxV1ropNk4yfrT8FqosLU2eOlOs90rddqpGmBOgjcMJ78qwsa8r-h9LZoLgTQV", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114711534976559195583\">yasunari YT</a>"] },
            { photoReference: "AWCwydgnHc91ccdSgSyFpFmiORjWx5WlbnuGUDvAUlamRvdU-XzooGd6ui-4BBsZQ6eFOB54cu7RnHfQr2w7ATSaZb6fb9_I0TgN5BERu9anXLDehZGeHwBZth-CPioV3Z0jIuqNFNlssXjGVGOuUfV362Lpwf3sVWAa1wlo0TTa5i6CUK0NdQaPSomOGwscosyCOgbEePs2YPoy2doXgee7H4HC1mXtdF1D270ltRaxh-G7et5qkwRy1fr27J837fdV4wfu1Usp1ReLxstz9L_SMZKZTVvN6_lL37NQmYY4tk0j6AniL0qVl1qh1W9n--6rWT-FID18n0aSvVhoZXkrSzl9ebFBI2aW2Ww5MzHAJ04Om8w0mL9SAaXY9iOhJy71gc2AOKqkIlmXPGSQfa__H3-MiyA03FXJ7eziVbVnyUh3Q2CS", width: 2048, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108071988791754175045\">KANG Dr (Dr. Kang)</a>"] }
        ],
        summary: "음식 제공 속도가 다소 느릴 수 있습니다.",
        updatedAt: "2026-08-16",
        highlights: ["친절한 직원", "무난한 서비스"],
        tips: ["음식 대기 시간을 고려하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일반 식사", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:30 ~ 오후 10:00; 화요일: 오전 10:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7259603311533757686", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94%EC%88%98%EC%9D%B4%EB%91%A5+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카페 델 볼칸": {
        photos: [],
        placeId: "ChIJszPtCKZ6sjURezTjdVPpxVg",
        placePhotos: [
            { photoReference: "AWCwydh7pH4-ep-DtH7nmIzrWD6ors9UwJKLeCJrjzy-DsX5BC0kqzxG5m2K5kBjb4j4WtJoEjdM6W-LvhzP41chQovVxa4lI67LufIKF0L3vUD6oYJfJF-D2-C_rSDC5nF3wdzXG1pB7DAuAF59rY0sL4EEpaZpk8ahGCVBmz1SXW8RV8nIOBvs2RSqJC6GE0SX3uMctbrQLStv71m-GzsxXVRp-fL9MFOAzFFZz9qn3s49mjLCCeQcrMZL-Sfm9JfUqTwqIsMQl_TUNu58fwbc_TpVQLv-Nq4JaI_VnbzcOiBPZ6SqOlqREL1lboqKCK4sUxiKfwWAlbruTrk2aQEg1iIsYYxK89PHYYzlVOKpbgBuSSDAWhgcXaqV310TaoU2y2lE_EgFy06iUeRIJJKi6Bzs4vttU32xw_1Rn6e4jR10cro", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118265219661356440313\">Elf Loewen</a>"] },
            { photoReference: "AWCwydhP9diDfIDJfefOUCKO7K1SlasnHUqjC_lNSthmkCZrUCORs6IPoDY7pIdkhruDGLcDzxhMy-aANEz3DB_fTavIIoMc73QO9HgKnU3rWsnUj_pd4UwHkhEjKLjKiI92XQIjBMO4QHEFV9Fff1cGJjP3esE3_Dmsfwb2fEshogqrPwiuj-oAiSRa1p4tszlg6xKTd-DuegjnQ3PP4lp3p5atuUyroUgCfRT_SarY44kyyueTs5J3n43DJ8q8iyESvRdEB_bUIyyf-CEflzKd_SrBbGzuiY_gJWvGkqdMWkCGKy5cxv6WZY7wKtooQ2Kw4S6p7E_U7z2tHoK4KkBRDXbiF3z3MJX-7Hh_u54n3qiPeroXUkIUZlyL_b8IG6R45GC7kKnpIjwBlLKQYDbGHOXTCs-GORhIPDEjeyKCHE4WMA", width: 2916, height: 3560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114199460219374819294\">Xavier Lauzeral</a>"] },
            { photoReference: "AWCwydjDCpdLQ5iJPxKq36mDGRW7h5BMZ0NWRDifCEyPOvp_NxPclKaP_6lK-i5jceyzRQLDn-uqX0tLZBlLqH7kKh92PZU7ctLQzTM6OIT9LuZw7aB7yTCe89qR2OkctknJ2n7CqM9OqI75FAISLg5pnUTWn58EIYa6nnq7Or6-vDKqyrNBpOO6VbudLPwgxvhG9tCVzuMinhx6Fr1v6XFcOgmfm3pilSsegyl-DzKcaiPsopJ3Fq0a5njwOXt6qcCBuJS24LIraknlgGH8qd6I5R3hDz4-6_pOLoorfzalyVF0Y-VWK-1r4jzW13iUFBpPAlF-i9qjk-0R0WWQWGdG0lns1DohK9OAMX4uXYGJKqrCvDcMoDhgHKRUAxWwmUBDEBvGG6r6aB8emwTKtzuN78aRKAapN14mNiORtKz79MI9QrZl", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104610659850867986961\">Khue Ho</a>"] },
            { photoReference: "AWCwydhIaOBB6bHGTBW7-PAfk479NRp0QSy0NB38eETJe5Od4kAwEqroO7NtpbqNGtAHbKuRMEOwFWLtTvNKV0T8JbnDAvIDWhVBAhR45cdNGV1wr1QCNZEJs-xBjLYaFDCL84bq3SVEXY_4EJ48-KcobyNsgj7RQ-SOOaSqACj5my9GM2ucssLh_Gu3FHCLP3czfDIt9_JD7qLNvLkFGz16VevcdJdYByOyBoAC3Ku76kBR7Nc6xSOuZnlK263bnCqIA0b0WE1afDbRNib8ZvFEdsNWvO3eWmsWl1aSkcy6SNOwip9ua9BRJFSD6NDrYux7WVINEm5OmHjr239KoBLIjJ2eghWx1xxxm5Lpn_ZfClbyPpSlWgDGnZWwKddz-MbRFtPGko4MArqlxay2ll98wHuWy_jc4g4xgEforBOO13mkWYc5fUdamgwNiR6qkOan", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112021819445919883397\">Paper Pale</a>"] },
            { photoReference: "AWCwydh2OCSznMspBjehL86yF2-fw83PPQ0KrZDe8GdJenUyP7BDcGD7xOSTBkFN9idFtsM7LnGrJAzQ0G58sKQYAVuYtf6H2lpdcE7rnjbS4S5S655aveugspv3D46AZYaTkqa89ukxxwFwu3O_3qeQH4ecx6ZaZnbQyOSQuT2qARHQsXd1R_g9iysXHPEdJF7eSGEuId43rmL0vCGBsshurXvRxY-70esjh9hFCCJ5V-0yMBQtnjpMHUGNlYhvlFyP1r8ND_ZDIwhE0lPvrKuH_uL5CWTVwOdiiW0G1KoCDYpRWWf8H_s6nTZ54tSIehQBKUAMGZn5wLEiQFyQU95KiX6sIN4BK57HQRXL5gElxH037Y-Soix27f50gWf1Y92q9vDQZ2fqDCvmsL37-UlE4ljEPUrN42V9S6nFjXRAqufhXkEIK-8B8VntR-3Bu0ET", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111652264804556071602\">Sheila C</a>"] }
        ],
        summary: "핸드드립과 에스프레소 맛이 훌륭한 아담한 카페입니다.",
        updatedAt: "2026-08-16",
        highlights: ["윈난 원두 핸드드립", "야외 테라스 좌석"],
        tips: ["야외 테라스에서 사람 구경을 즐겨보세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스페셜티 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://cn.cafevolcan.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6396775390419039355", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Caf%C3%A9+del+Volc%C3%A1n+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "리줌 커피": {
        photos: [],
        placeId: "ChIJzVTsAUNwsjURtCDSBd1yme0",
        placePhotos: [
            { photoReference: "AWCwydilNLE7ngIc5O61ZUunJkuOI_Az361dqEwZdq_NYP6ZsB-Z5QWhtZzRaSpeM0WdM-EHsCl73d5-ayNtu_B-nf6W82rQyDCNJ1YWwGJOcRPnOnXcTxsVPTPfDZiXXwzOhSALirFIAAYIn5oz-cobX9-augV6HGRViq7jqokDTAeAUemP4S-g4Rn5evZgt20fOkW0JdASSVAnrHr6RVseiak-G6h0ZfwIdxYT8cxSFZJdS89H26xZJmAKZ3EYiAg1UC7UA2qVZ_Zz2oiCWDQm048nkqTmuxqJMk8iCV2Xr73s4jelDDO5e2vRMHzj9OrOE53D7j455l4b1EvdOz_ENuyai3I4Ckfom9IpOOgN_J4TnlJ-A_3CVRyvNjSbsPSrhjio3L4--BbHMEmaDj55pHL99jdc3FN_7Hw56fCsMpcgAHgVldXH72NypM6tnVtN", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116400589991567130714\">SASICHA AIUMSINTORN</a>"] },
            { photoReference: "AWCwydiU-7O5ND3pSPhmNQSkiwjCwgtTTB-98KppelwYdX-mbKI8-v0viwNNam6JerjvYOOr0Zew0bncavkNxW0Uf3wV_73pqNxEiRWV3mzn9mWp0Rb1hCLBQKzlHvHz-dDCHgWIClJXr-QynXw5KvvBuNH9VHoSGcSIt7eFTCVGNv-rqjlXqdwtTNnIU48akOLkKPOaClwPbPbLxAawiGg-Aoq_wX0_1jh-VPBpyzuxHrLJODTHep0_HszsN3Qf5WV2XG6BwGDHgTo2lJvrZDXehZUO0DyZkl1928EdVO-WvM4lsxJz8Jd2lskhFRXeBMOVSgDsjF5IgT3qo5Fq4tWfTSt-sIZhq1q9nOQMFYOXByR87g4DjPnVVZCP_VNLq1cF16XLygr50PRoZVV4Zgw4N7HvVTWjlhJcYtcm-t2guQ96pXGNtsk8TbXNYYRy2g", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107194539123479864560\">Jessa Marie Jumao-as</a>"] },
            { photoReference: "AWCwydgD5DfAQRvjQ9e83wmyptf7SQd2BxrNpERSQYejnvJuks7aeO8DUV068xOhJFvHuHVFK_X_LpnibM9VucX5pNkC9_1gAq80vArxi-GB6nikjCUi8TV1CGlAIWs99xn9O1DtzMytnDOBo-JVPo7sYlq482b2BYTp1c46kyR634ijaSQbMkcHR2FC0mNp-c3bHNxN19za_40osxzxAynEUT-feoQsO0WSEkZbixjuIvfmyeZrFV02sL509fIqEUo2ONIfS_wL2MkUcJl9xvVqpXRdyQoeI2-9BlhfHBYKPl9S_NYuuE4YkN6a0XZNCbb8cact2Zxk9BWx_EBNc54crOdU5dvQUAJ5i_wRdBOhPy3iEKqwXk--uT-GmrRr_AGGkMgjZvqbbIjlz-ix9Y-LU_cjr0HmA28_WL5QgeICNqvS7dQTSdDRCR_b7gieyT6d", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116400589991567130714\">SASICHA AIUMSINTORN</a>"] },
            { photoReference: "AWCwydgIPqDAO76Us_-yJ8JxX3eyL4CTpFj9hRY8wcuqPJTMsXcGbRbw7jsxNwj--suchzpvzGD7Zv3dzgABfuZvVz8IhvVJ9H81QXGP08QyGmdsY97GsFvJ-lh_jGVhKPFK87rE_QFVvau687GGvNK7UJ5QkWfDPflrAgiD0K4MaH3O81rNht-dywpSwJMeoWGtAzhJYPmj_cfeu5kdAqxCKYl86tWhrlLknyB-VgGzEZx4udv_NStzjWobR7g7jkYgNBdQStoXB_oeH_JEYwKbKXXMLYyUWt2CdB5zp-fz1kNcIC62_4bwFUzE1g5jZ7jvWhKtVhXra2XBuWXkNbAD4t815mRFv55-QfYxYBv_3nyk-3l38rzFTjYIxIzHHLnkiRYsi5h-h3qocUu4EZ5plwmnUUwUQ_R5yXyB4l19XF3remHTzIh1BLH0nM3fGlHK", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108968533361916320207\">Niels Roskam</a>"] },
            { photoReference: "AWCwydi7XzfPfUrcuzLX7yLioGBKshv8wMy3cvjIqeMFHuuw4XejublexHDhLcMvjljVQdNCKwJGaJPg9GjwRwPpgiFJTujCnMQWPZWt3DGYvLfJwOkH05MWAjwz3LuRhsAMp0GKnbfHl7bQo5MxffyaPsMLoO6m5JyBJ7-Ln9eZxykVv4MV6GJQ8UPYCUYueV_Czc8El1Zxop1wbeyI4CruV4frXBE4Glbh5nKosJH1Ostp2xv_TNf-0tz_irY6l1ZlvmjxMDQ9Y38AQE3yMm_Y9dljG0K0T8PsRSYulgg6RYhbiDu0gmFfzlQVwO3fuaq3evaemuDC8b0yNrulEI9muAZHLdCZrP7QFqOJaFOK_XcSRMfX6ZCh4Q2TxG5DMB5F5nOnHf6JCCZMD9bN3W69fL8UTyg79St-Rl27W-e-Lgax-wYz_NuLFwLIr9mBssue", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107194539123479864560\">Jessa Marie Jumao-as</a>"] }
        ],
        summary: "직접 로스팅한 고품질 원두를 제공하는 곳",
        updatedAt: "2026-08-16",
        highlights: ["다양한 산지의 원두", "직접 로스팅한 신선함"],
        tips: ["원두 선택 시 점원의 도움을 받으세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "직접 로스팅한 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17120841752036647092", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Resume+Coffee+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "피츠 커피": {
        photos: [],
        placeId: "ChIJg4NuwLt7sjURGLpe69POZ7o",
        placePhotos: [
            { photoReference: "AWCwydj-IVNJu-eV-1Egnt_C3aPcO_iBgdGwX9_BGCG-jkuJCOSbSZObThvG0iTc9FTBQ7iCMKUlw4CRdhFCo6kO2Zt5MBbnLjmAVoVSSSHnqtLxrr6Ifx3VwjiWPAeudY7aNB1xS8MneywMD7V2wzEIUOtcryGgU9xAkrXAk5ELgc9snwbt3wKaIePgv6SCDOUrg7yt1vq5fIji_Ka_VV5FiOGAmWIMqp5PsFDeR8nFjWajwx-vwMc4FSRsUBVCgOclU5gsIvoiyFy1ma7GLbVQWhBcJqCuHmWUsDbnxLVqWfoNujHS91FXYS-oe3GDMxwC2v0gPhaK8f7H4nIsN7jfawIjKytcsgqq9r2W5be8qe89ORHgURxx9OJlQgekCSgXQT5_F6LOF5CRgMbI03ubcC4NFKVefblFSG-kvPAiUs9vkdjqud69keq8VDI6QrHr", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105362572921753302361\">Kamonporn C</a>"] },
            { photoReference: "AWCwydiBu3gMtsl88ox-frQQ9MbSr-_olOt0KvVh1H8flPhhmZvTe6QBMxBWR-00HngTQnwKSM1q2X7btFFrESFwWvohbCzCGirOQSHmAPzrue0BobnL9LM0gc8ThrswsvHiSPzMIhTB1pGpcpDPFIrfBPdXso0CMvw-1ucXYOWLeEItJeoFt_U0PEEgpZ8fyIBDjdbA1pzRthgHZvnxm4GEvSfshHo6vls1AfabowLlRQodloNwJAqL6e7zL5oZ9kKaK3pCSSS7QVhlaFsGZDTDwqu2US5X-ekIXHSLbztyT_8wPyHj22zn3GkndxkVmoVMDEGcNl-CssFVX_P3KB6hjyKdEnY1wKpIyc0ElOF4A7cz44obnRCyYkVZXVabrFAdl-1rnhPGWiXwCdMpr1usqCr06vOTRr9BaLKt-Ams1YdWtA5WSIesolJYLgs_sw", width: 3023, height: 3023, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107959500612221553142\">Mugi Yamamoto</a>"] },
            { photoReference: "AWCwydhZe22SggltfuFadnzPXha7_WRDwCrr3o6uLwev7MWMNcgNUhMYMgeuq7TSPSunAfhXGZEWniNBkVBaLVRQM1RlwQtT93UbdcshWFAAJLjpB_8lV-GlodessRF-PaWWGUqgpYbgZs0inJbZtqqiAoaIW-OQ93H5tJfRj7a5yz5G-QfEqOOtNR60kJyc3-wBRYHmNsu8f6XFfaA5B4BkZBOxHDP7IWkFt5YrzTuEY6jgACMjHG9fRgpB9Od71PB9TLDmU9rg9VF_rurAQJtWx6GO62l3Rr5eK2DLMJK_x5tPhiBKQYnj3Sz20T6DuDLY-i_NSiAanVIFxf97l0AZI89Uoscd14srwITjvVPFp76Y4PrXIJvAUM4V1wtmtdBulWh9hluAuFz9CdaLFUOKXBqhzvl8tGeBTkOMoWAhpV9p3Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106358600827481948300\">Karla Chien</a>"] },
            { photoReference: "AWCwydhRXAPJdHqjUQDCUmDJkfmZLnVvVADMIdWUzPhcLEAUdn4umxzWkPwe-wXzx8YS7q-7LDmxXo-l20usG6BRiC3qKLRDhqclj9XWUbTkhkwDgHCCyEbwRws_B5YN9rRXxHbZe8aR61qnf4VVoIOjwNHakPGmYJh9DvU6g4iVmQeThhQK1B4mGsCluW9xX4IqOzexTbe8b1SG42NGiyHMibkSV_4ENW4edPDCKAkKKqQp1DrV9DJE6fDTbNW2IvxsJyqso0TCUcGwmkRTUi2k14DeMYxLzWbjdmufjpdpL3QFI5B3desRXnAv1ehBnfOxpOb9P5XLOCHi7_-ZecgNuCGfAP6w4ICBEVdnh0tUkvEUlkhrRKOHtXs9JZkcWmUM_S7cr-zHhs7g6Tr1lM_FQfKDZn2Kh-wSNTAef0enRFbjwgqhX4GfqZH_cTwAJm-9", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108805907607650071369\">Valeriya Serdyukova</a>"] },
            { photoReference: "AWCwydjFpfTJPFt3tLE7YkymJLkmNAhlONpMd3wNGS0Xeto_ydN5aX29ZvJtoaORzeAE96MN6-X7y8i6N7pf8LhUOV7EyAfDBFOC7PtQZ7360hTLnDrqfdogIz6Wh3lGbcNOcNEPSObEGvTKRaA4mLnvGema0Q1hmxs2mF1Nj6npoaO23n6sH88ifDMMOWOOvp6jHYNDXMehf53Z4Z4Fv-PdOq5JE3c6xZmog7Yyww-v0WQ4dINzaZ14PS4VhT-2vEzdT7wKoQWfKXoHzwLMX2bVEbzVHDF0DzYXWtahOQw4QsZ5GKB9nzjzJ0l5x_C0cgHQqn6we_GtR8ddlfGyGUx7ToEHysQ9CgfPfLnc3Ubraa5iYSgEEF_U3v6jVHaX-qMV5Rks-z2wI3DNibxMZQxRZlc9f1PlbFtA9-53yXBM9uAGyyy4GnM66crFu2sToxgD", width: 2918, height: 2918, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107959500612221553142\">Mugi Yamamoto</a>"] }
        ],
        summary: "스페셜티 커피와 훌륭한 디저트를 즐길 수 있는 곳",
        updatedAt: "2026-08-16",
        highlights: ["스페셜티 커피", "말차", "티라미수"],
        tips: ["작은 입구 안의 미니멀한 공간을 찾아보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피와 디저트", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13431931823238068760", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Peet%27s+Coffee+%E7%9A%AE%E7%88%B7%E5%92%96%E5%95%A1+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스타벅스 커피": {
        photos: [],
        placeId: "ChIJgWewoRZwsjURJ5ARdp6pvss",
        placePhotos: [
            { photoReference: "AWCwydijoecsUm5Uchs127wIwIHnOkcMig5AFpsJI2COsazNPV2N85AcimgWaxVsy4AondnzVc2WLKJJK8yljY9EssyduF7TTuaDNO3ZKnhXHfDEEqwiwhjA_Z8YOL6s6IvlNdKqrDPCRMsC_dtlvqCe4GwSQlur8mIL1JhdA0KzQ2MMs6Ey09TQakM3HIYHN3m8UYW74wUvTm-khUp0dkl2O__j2Q8vF8wQkpZRdmzkf0wevzto9AXokLZ3Hoducsj7uNhktyE_xGz-CvJJZzGPajGNNAucnOI7Al5npwoCEH7LTbvF4Fync8ZTNG1tPt9FGkL0yDgi3JCuxrC6Z9unhG_0oXXdaqE2L17_XmyShwpeFSpvlhN7ckfHI5Zm6CtX-wcJ9DYzmeA6SWwI4N1cTiHVH8ynWXmrq425w4Rxyls", width: 1920, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104210708659996857402\">José</a>"] },
            { photoReference: "AWCwydiRNr_sreaLtocqOqU45Zy-ibVDWxApgTJURS3qm01Q8iiNy-dOmjrljLkjVHWMo2y6OI2Wqk3z0vDr7Yrp9xasUfHvWNnLguJWzBLq7Gkxl2iIEnzbODNx6ucod2VMvalD0ND-C_mC0dAhik4bevNCIwKWwKmhZAUi0cUV_HAlqxCSRNWXuJRaZkpr1EDwqNNtDXsgZ376CWycnhmQKYuNgZGaPWbc8PKEgbHEFTmXU5PDCq8OXsG1bb7obmE9LRU-YYqdfTVBrxVe71qQbS_jytxOskZAAUivjoN_NgVMblao-L5-9kpPOsUa2snwWMjYAlCvMQTwqxrocXemL0zhXsIknIQBrd-NNFWZrvebpU_1QNf_60zS5x7l-oJ9Re7Wn3UJ4JZYw_TG-pjEdH5ktzfbvohp2DM8Q8JzKFqGFcTU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107573839963447055784\">C C</a>"] },
            { photoReference: "AWCwydgk13MloukRSy0AQcsDNp-MVpUaNuFFFOPKmvUQyEJEJsfVuHSm2sE_vNQ_CKK9ND7KiNTi9a8bu-kiaWnyJ3F14AyFuMIg6k8ALGFP0ULuGev19K5KHdrlZcZlFxNThC-7l0VFx-rZGPMQWiKfNbR2nw81kRDcYH96z3uoBWIoh7jrNzr43anHsh6B4SrnnDaXKtgvsGHPvfcVDcB4EY5LqGpvM1Eg7rdZOpSeN90K8Gxtdrw3r7-nLLsJkvLY2z7i8LmAVqlkFbVR6-K-1Rkw_GmeTj-e9LK7pGmxzkLOQ7qepjWtOUD_BPU6daSzNGHGmBRuNfX1I8_IXd9D0Psfm27KtF1hYtULaKPqADL2BhTKOPVGKPnu-hKSlVLlI8dqSQZfs-NWEDQaocrFGYvvoMIQHHzi-c3i2A7kw79JrY8c3tIMc2XY3EortUa7", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114936557924463953368\">T Ch</a>"] },
            { photoReference: "AWCwydgMy_6oQtvtF18VBdbP9PeE4rB1MqJF4uqxUW5Zzff3k-TZFBSmCC6EXk9h1aQDvefb0v_yw81g9jq8ptIJQqxtKK6aWKrFdJt6sUQ0JH97akOBZhjMA7gdVUGi3LFq8oCamfgT0_8j1Nd-7l1mjuaQBEBRRwOXqGjyZoocJJdPymvZxJ69aIpa2emU1W8cZAjp7iYNU_2dpPmlEHQwiQMCKcQ8ZBBk89IBPmJ8hAS6tZAoPrI-ni7oVGqn3m0uHvgFh-Yy4hl1xmZymSh5hwU5Kw42xRSMUpRnyvvYxowkO7Dkk4V0WkRMYzhw05LUVZt2Hcck1hiJaV1ZXw5Swk-_huObczviBoGv5mkMODx5jdGVIsn43wvlUWEzY4Wlt8pPcKILGxPFFT5Uac4aNcwSyTuoOyILehNCDvONIfzTzji7tRYXbbwL6YBdulWL", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100165443288225603918\">Tarn Rsu</a>"] },
            { photoReference: "AWCwydjNjSV1Q6_lIn76I7KYS1brKLXbgTBfSH_M5T1A5DEWvv1pqElchulzzxd0kfV9bGNZ-h_S3yGoGts-CBQIG33jl8t_xTAYpUbc2sXHWqSX1KzF9_NwSxM8x35Wc2rbQa4fJesSJVccQ4lxHG02ByrnJTSRHoaA4yD4wDHO8fZWPtXOWfDYikfmI_k3dhA6gu1HvRPaxsy8CgI9QQE3XpO6HaawFvjHOOsB6NaC6fBspkH0DIKc_cnZ_kFeDbVbgNJyY3s0EMJLZ8cQ2pFOKgxbhqlZednzes6YU6sIIkjV6jZ0XyBDcR2zO99RsHYqdDJJUwI6qO_09dJq88zw5NIHr62yTx3V3V4wUkQiJhQ96Gz3sJnx0W8A2cXCyAooPNjhF0BE170oUkftq1ryOCLiCagFD8SsNBEQ1qvVM3ILYaJf0w4wztQ4tksgZstz", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106344156691067365973\">Sandip Mothe</a>"] }
        ],
        summary: "세계에 몇 안 되는 스타벅스 리저브 로스터리이자 커피 공장입니다.",
        updatedAt: "2026-08-16",
        highlights: ["웅장한 건물 규모", "커피 제조 과정 관람"],
        tips: ["커피가 이동하는 구리 파이프를 관찰해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:30 ~ 오후 10:00; 화요일: 오전 8:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://roastery.starbucks.com.cn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14681358333325185063", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Starbucks+Coffee+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스타벅스 리저브 로스터리 상하이": {
        photos: [],
        placeId: "ChIJOQ8D4XRxsjUR2OWDx2nGGBw",
        placePhotos: [
            { photoReference: "AWCwydj1Wk6xJHWPXkVtmihZ4p0lC3HquJmodjtgQhoP1-e8QhcCgNsa4J2mN7Ngxlhiy9h98jtTd1GdhQebvk8w3DhpG52GOSlD7kASWs3oLtjZfd8JZ1FsfzNlHZS0C1GHuPz3v3lFEpYUzGBxRbSBhCHJrb7AkBAOBG8SadFziedJnuslE4Bc502SOhRqzVmIatWBV8bruUqLEkoR6k8Xy0EvQ1AmQYDnUV3bogrm90aOlHtxQaiJvjTw9lGesx13Zg82OKZP221L9ZhZbw5s-0L9ggaEoA4ihrpZsHwY59pf-qSajWpNsVrr3ljYODjCTwbno0eLYnysTIiXyeLyTqIxt5oDSg56d8MehDgfmWkeo1SYPaR9kbI0k7QfV7ck-uWvcRiICGSB61PB5PEPEz_EZgemNobfgGEHyElyPyieq1YhItRSlanhotNefcgp", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106146983611760773014\">M ei</a>"] },
            { photoReference: "AWCwydinUecLS4jBwsaKxW4MibnbWf-BYWBUpuLOvdu_aFMFIBSy_BGtQe7lCVRYnhC1tKiuA4Up95CFDOlGftXPLFb7clAhwDVb9HteDBy-sw3EkQXR90pxGzEwY4W3YulojNX4NMTzkCktdpTmaHoloVDKgLNh70AIfze8KzasLa0FY39GmH5AypNv_8GQk388Cr00A7LVZedeIAsiA0ycbCmImTDL6OD3g2vscIpMHwQFKwQIBSobkCIEG2h5hMpyRXO66-1zkYlONuSLCyFFecH3ZHDv2ZxJnmU2_AoaHkl8bJyIImT4EGrKPwAFXY4Q0kaiH8GATDOj_Jr59n-YduQKEblFhc9Ec6gM8DBkfWVkSAHoU7qZyJvya1gbih0poTxsf82VR_dbsRFJOEssPoj-KPrs8xdtYdIk5OtASoBxrdGJsk93rn3-Zbol6jSF", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103327208239852717686\">Dee Vibes</a>"] },
            { photoReference: "AWCwydiCl478DIBaEKrqe88fJHnpcHPFHU1irUI8r78h3F-zBUXNg1GM66BlL6uIiBfRc-A1vjb1-7XFGzkyLkWj5lAJGdPnCYB0ooKz7428Y73EinfFk_IT2QXTmDmBa-CkxNVWX0i4CqKF8cc1jX2qzgnGe6ceBNzi7-HNX5CCg-erE2bfSU7HYZXFmbBV7jyJw-TrR1RPOFvM0AGsNf7hLzySf92gaa4YFE3GH67Y4QoWL_aJi0RqKzxvVnpN6TDBac6TaUFX2p6xCs3Xu6dHOYaV4fwPYkh-jJPjnGnMA3mmGTe7Y8-nIZGxuzwyRXvt1CH-3hyMS8XUvru1rS0ATJxQiP7luglfHk4eD1W1uF1xTZF8U-ocHFfX4wUihC-UykwGirpfpU5uWsOWE0NEJtnPFFtr1w29QK6v_NDDLBX8mxlk9d7r570S2feem4sd", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110334299837742182794\">Setiadi</a>"] },
            { photoReference: "AWCwydhABUHfHKohYY1hIsEOIQdYxnKjQTJNYPX1yk12-xYIrVkW7mGxaXxCJRw6MNiDHF8TJQ-vZF0J-uZW2RuPQv0ct8X7TWaIwxutfMUlTWIqBqXjkvMP8p0k1zU7p6S0W2MQoHtRyM6YM4mu6IpUpbcw-JhEStnyH_ysJ-ypjOPqcU7v3cR3nQTCRk0TjgXQCG4MmZ-IR-4MqwXbrDlDALTv8Me9utSZzOUO9CZ16itwmPFLnn-vVsFOEFRYWbH5TVvU2DLlll28znZ5wq21yQxLEV5QcPSuiMhgSrL47LrvXR7stv_RjlEsZiNx9uPl9j3CMy3sTdAXe8EMyNRF94WDtj9jo64Y6WFRLqyPbqkZLltfOIgIO-7EAzNEakARVgRqCsdDNjJl8dc1V6wMw3MBVzKxtJAPDfYPQnYbj_A3Qbq6bCeQRx3KwKeYAlew", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104706486944055240357\">Doug Ho</a>"] },
            { photoReference: "AWCwydhHvFX6haaB43UJjAhAfg2yqHaS4QwIb3T3KeW2Q6AaqtCWKX1fcgoLzRedRyq4MbNlIEugPgIryx-t8lttSoWrs6sImyHxbZ3UHu1a74i4lTde203M9AoiSAl0Lh3MqHtEUfUGRPwHz_znMnjUdKGLtr1D7bLhpVCeytWfe6hj5xMMEjFuu0Ty72YtDKltCdIiVHO06O7qzH56yuXfYKR9APT9hypER44ERf4Tv9wUPB2obkV_SU7xoqNKbEW-WlFHIgm7XDtxbS9D8b6oJ8kL_SpzDr2xjLJra9C58VYju3FMjjGjWr5VzrNw30laH-Gmv8dvICpoDPfGOyF22k_ppmaOf63Y6g-F82GpMpZbwyqGDKuCR4G6Ajdkl-50ov6pAacqBFAHb3wGarhvwD2tCLTWxd7VGwL92KrcC7ZhjDilYqyRePWV4ocrdeve", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118043923594127033921\">Huyen</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 유명 카페입니다.",
        updatedAt: "2026-08-16",
        highlights: ["랜드마크급 위치", "친절한 서비스"],
        tips: ["추천 메뉴를 시도해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "카페", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://roastery.starbucks.com.cn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2024586190124213720", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Starbucks+Reserve+Roastery+%E6%98%9F%E5%B7%B4%E5%85%8B%E8%87%BB%E9%80%89%E4%B8%8A%E6%B5%B7%E7%83%98%E7%84%99%E5%B7%A5%E5%9D%8A+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "베이커 앤 스파이스": {
        photos: [],
        placeId: "ChIJvR-8ZVNlsjURz5OgJaUNh_8",
        placePhotos: [
            { photoReference: "AWCwydj_ZNELe-Vrjw08uJpWSobM2oEni1XNgjHaJ0Gr1L0WDQE-zCZly8xE322bDQfRnnHqpsrEf1jaehuSUC5_iJEddwYY4kYf61iIhi3lL26wVUvDQNOWb3tRZAjXgWjOUQu--oH0yvwQ-YnwkJNNgQNpfwM1YXNnQJBd00qJZm_GT3cUgFqo6cWwXURzscGHMEeT8h_J9ioJq8uaBBOHhMsKxF6Ddgk9D8SmpsutX0-uPiZNzPVdKEm0xtAHab1V9V4kXqCY3K4C72igoDcfK-z2E2kI3_GswhsTz1LmIxKDCi0z7FgFfLd84CT3uotyWc027ogXJ9EV2kiRkI7X6rqn3tsUZ3aWFTqH5H1GQA0AWyB0volGOX_8wxRLljlguMt5gH2mGwNABbtXXBhaPU7rce_VzOYbNmb6IUqJucWjhg4mUQW3THKA1AoLE651", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106340008556633168360\">Achala Dissanayake</a>"] },
            { photoReference: "AWCwydg_4CVPv0pKeg4xzOs20Qth1t_RHrVsVep5T-sjWNp0kNTrQ210wG8QD8PeAZWaLe6JnMCFLUA9IuPJboJZgwu5GB8gzpRJSbbP5i3Gxnq-Z6BmFNvsVCrLAJDNHTXC_jlskmGUryWea_7fpUXCVodLYA3zaClt6P09gY8wFreoIS8MCXa5vAO0uoSJUkSi8NnWWqfPoGgFOt7eP4a56zM9E_kQUeRUxZuqBjr5OtvZjB_hAMnsQVvl7WNbEzbGDBaJuT4qlaYCDddGYSxFxPCKmuf_BkQK74tSxpxIpb_hOvdejqEmt6ntVbFQSM05BMjypnX52D-qkdLLWRgV-BVvrPB4cRz0J9-fRg06IJGwIj03Y8y9Zq0eAiCeTGH_r_yygmxK8TqfbN6o5gKpw1i1Gf7TNXU1Wy8806B3YYWXSbSue_WZ7OoHaHFPeDsU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105629352738675277124\">雅淑</a>"] },
            { photoReference: "AWCwydgka3QxbtvnreoKMlibkBlqyJekU0_dMYHNazMEKV_Pz2Vu0WYnLjWjCDb4guxAxY_Xso5pO5xwaUTCTnENmgAHr5tvDt75FNI23hxvpX236FkJWirjlRGZLSUarcjjS-HL8Iy-1jbDGJQUnaOUVqrPpX0fuiOW0IBPcK4CdgmFulAKVqv9aBe_j6VGOinqyQ-A9lLrseuxJMczskZY9hlq-eKiV27yxer2f_qpfHUIl0Hb81wfg4X0DZz8DttsjT3qfmoPiBDvmZawNR2d2aeVJ-_LAQQUz0A3jQu7Eg__FMk4tpd8vE2dI_GRBlJtkDKAQ9C-1Q4Hpb3sTj5UOVnmM8lnw6KEsF9ZPsLjPpKVNl9BTBibYISDObH3OZ7Sxfi28lCXOtlu_LtS5znN18lbEUF6dAKkfncMrgarIdzNAtNsAXBQxPhW8SJpXw67", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117263964702852932677\">Liana Li 李燕拉</a>"] },
            { photoReference: "AWCwydgxws8LB3sIyzeSFcMco_HC09VgU7PX4AgvwN-BBFKe_4_rIGWKiVkLbj8E9LIW09g4QQ-9fkw4mXAKZ80_IRrPQbyX7DRgivOMbqUZQs2i_8PKfo1ITWQIlSGlujq2fjy0d5MCpHvGej0_QgBjT5Vg29LuAZyaToruV9FMtZ9KScjvwClCVWqB_6WRMNyMqjMskbO3xapYKJdTebH_iUKsJOjMgfC-OZHvqNFivIsmiel9slsHoNXGVGD-F19-Gj_qiwyJxMe9nW3xDhiE_prmgEMH7pUW-Ig_UO3CpUZ9nblQbRQBk3keDwsncO_NZQn-W01G0nJWeDX2cV4VNRRwDzye6Wub5nWXgeq8k5uVgxqGAN9CePSpdyc-MiRD7dr3Mj1hoCa0Xi7KkTonx116IJjmaGT1gAaT2-Dss-N9guKSSFJxluY9J98pWHR-", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105629352738675277124\">雅淑</a>"] },
            { photoReference: "AWCwydj891CHY41ZUiUVHMEiOt0U3ZzKSqt6v-WfBbgEIKEY9vpHX9Nk-NDyDe7b4fHsXTP0fCnQFh6RAiPOmUUlFZ7fSwpW6-EN-mOp2FBFfUKiVHyePWNWJ1nJIzAX3MFp4nHqBO6j0PiayhNVGEboS_MyOReWikYOtvN2YZI5_DADPjstGOqE03LvSMuZo8TVI55fLUnZ8ZTq5tpvHokdKp96_0qLKKFz1an9A3WAdDwMZRhMFVWIExrkg2eKdBvza1ecubE_oVHWwT0hAPTiGQn-0m0AAlk1SmXzK8seIAlRktbNwmTvuyBAgmxxQqZYEqhzwgq2q1dlxgMlHriHLvkxpFc2W-jXcuEO4nhoXQqDeI_-9zdiXdh7mzseLS7op8HKpjGDhA_WbKEVe0-A643QBOcTah-lr4wOIxsBWkrRPKuV4BtACT8Z7PbmOoVp", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105629352738675277124\">雅淑</a>"] }
        ],
        summary: "브런치와 디저트가 맛있는 상하이의 명소",
        updatedAt: "2026-08-16",
        highlights: ["신선한 연어 요리", "고급스러운 디저트와 커피"],
        tips: ["아침이나 브런치 식사로 추천"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "베이커리 및 브런치", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 6:00 ~ 오후 10:00; 화요일: 오전 6:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.bakerandspice.com.cn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18412700604479607759", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Baker+%26+Spice+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "메탈 핸즈 상하이점": {
        photos: [],
        placeId: "ChIJ8_NBmAtwsjUR4ap1SY1axeM",
        placePhotos: [
            { photoReference: "AWCwydgA5Zqfsj3Aw-bq-eknoFnPnQYeh5-LcI443mMDSlX41Nj5eIVoNLO6v3pQDHPmw7EYXzU-3Q67dds5WRt3XrdGQq8aLFPdZuNGSsetwIvkmnPGVQsIqgSysY4rV4UM_tSrMKxhjeTMeX6aeXbo64wFgk7tk9Mpz0jzhfD3dEpuGFCen24pfUsXIUdmzFx95Zy1QzAj2ctLd5aEGt8pE39zJri3SSNZK9fr_t6Op5pOMERDQSrDedF0bcH7XuG68xWfUOy7rrL6PbI4I_hPlFZlzYKTx4OLJqMSa59nbJ0cn7w2Q_KzlVtuZQptLQIehkVTkay4EUAGTe7H1xdedVopOrgXGJ1NxQqJ275hJ77b5EkUf60jjcvij2x9Vdd9Q8tzFG3itCOZAr9PfftBsWywcjK1aGKuyYAYsszQc-xVJQ1ixMWAnSf4o85Hhw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106169138974846761380\">Team Sauce Travels</a>"] },
            { photoReference: "AWCwydiGYV3atAdZcQS_QbbdXMpDWM2UjvYGlNZdKOwmOETezL5xanU5OJylBlrWsP2BnZh_VhiLjBD2DbVMt3BD-0O1PpRo85TcSziYLBH5Q3WmYuti5BefeIpnQfDqznkGlgi9rha8c1MBYcLZRaGHrZFyrItOmSEjJpZBGTAn5Fx_gIADOpcidpweQeBFwR2T2DDlV4AydiTj8qfgnki_9aaKF9EygwupGISSQYXNAlaxzVFClPMVqBgULOXdO4fk0Bjqa1I4KWYi3z_t7MmwblOH0Whb5jxy5DppogIJDFak87hTT34QMzHYMIIS-UF7oCtZv6rpRy1-FNpkk-GeI72JO6LYb5gATEoY8owfChLbI_5NyZ4ju1ynYGU4JUNdpXfRiD7G8GCbMqaYkMGo1eqbO2RNWDPug2qEHYRy5Rw5V_G14Y7A99LMB_5iWMO7", width: 1545, height: 1301, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105999970127459774389\">Alexis</a>"] },
            { photoReference: "AWCwydirRwRz-CWvCr3B2LK2u5ceTDyBm5MJAZEh00NEKrJJ49PpDnlPQ-aWc3IurF4MAlYD_g9xbjQ19FXoS5FNkPBx0flZue2Rj7iln39Cs6aQ6MRXqMZmt2TlS5NTs6pveTVPxrR3AURvvSjF4rkYE05UX1yuAENxcPcRj5ZA7S5tBKIPgzZGMaPWVomliK1k2RO7Kl4Q4fYgSxkioexdLMW8dCgPv33ne7ZpuNMtwC2UU1RR0ebTtLZ4bRwxrx3yDJ2dl4EI2XlVuSL6OUUZ5Pgz_bh7cGUH7BAg0p2zcpi3QbV-ubKbit9ocFu9SJ2jL6XrUR8pzk34qbq_WEbH0MFcn-CGbkWAB7dm_0q8KDtqGCC-YmLSmFY4hee5epfnb8P3HmnLi-4uRpHoUEIchvVvhSfttDZeIipCW9OpmJQJX90jgXqKW8ljvOaoOA", width: 3839, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112983252894123730984\">Chomticha S.</a>"] },
            { photoReference: "AWCwydiXoVj0C46d4SNxWRwzcPtOwLF13lqSCSZaUi8DcHL4P7RFKa91u8Z2_4kyszcf_1Zx37nqOrkxC_ypCxCn0nxixTTH-ehE1xnTRRtBsQ51fnfLvJquCr5qCP0gTI94PUEaEqHeRNe1MjKxMXKWe9Hp9ZQUv6DYVuHWnX7v7LtwCTZvL5zxlqjXQsuGX36MRuIIk1YeSw0Wl21VZ3ZGofDa0sW3sKCKlPJiUcCvhCaKssmi9Nt_rimepkDOr65kQte2aoBS78TlkrhYuN2craL72RYbbzTuP7K-L5k_8UXdbTaUqGRXSmNlhm_KlJEftrLMDLirRBt6xArt0P-kIjZvojRRT8QYQ5Ez8axvZlQ9hLomsyZDTa0Fmi8_tO9wVlY4uYUDGaJsUtfc2ZlA_e5kRVC5IBwIWkt0BaPJJJi0su1EfzQ2klwu2b19mg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111534219081168469905\">Machi Dinn</a>"] },
            { photoReference: "AWCwydiPzYuxTAT6CkBHd0WKZ64-g2lTvJ1Q6J8bdqpSSsLlPN9ScG4mrqxtpaCm39ZYxRv9fdNQeBh98sq0UtI7KLbtd6VZNrIPi8GGjEHY7PUfrwyin2rN4HTGx46yPGxbWsTWQuff6f5M05Qdb1ZH5AsRPsQVqU86IIksjEF3ysvhouc5iOU7SUWZY7fUyuKmj32hUaw3ol-0mPAWHH49zXA2wfi7g_2S_h6mm4xQucM8D4ngZUEuAMtZgTiDzCauN8yp-oIm3ZKiEAOdM6swQzGjUFmDwpdmoiVkIM9P_AXTV33KtLV8VT1Yna1UZGL-qRSdSAT5iqnifdMmXK5PW7jL9FMkD2Geg2R0UTYHMI2FDpjXgAWWWzj2RUGhsyZwfgUBnauREx5qhr9n06lC5w0ESZBuA7TYPs-QqCG8YmcgydFh0sA5FGYZpcX-B7li", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113704288720123173530\">Thomas Reeh</a>"] }
        ],
        summary: "다양한 커피 메뉴를 제공하는 카페",
        updatedAt: "2026-08-16",
        highlights: ["피스타치오 디르티", "스페셜티 커피"],
        tips: ["직원 추천 메뉴를 시도해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스페셜티 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16412623979890977505", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Mietal+Hands+Shanghai+Branch+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
