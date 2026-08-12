import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "잭스 스테이크 하우스": {
        photos: ["/images/okinawa/info/restaurants/jack-s-steak-house-naha-okinawa.jpg"],
        placeId: "ChIJ22ZssJlp5TQR9_xYHgr0hFo",
        placePhotos: [
            { photoReference: "AWCwydglH_aqAKS0uaZhKR4CSHalUGDGLj7CO96Si6QiL6UIU7C_VqyQTUHgZ-I3Kn9cYontWmJ9fh22w5MprBZuCNzTYXHjQhufygl-aCa4GWj7VO7EdKZ73Yc-JHml86GQjmBC6xSXzvTRpJftYvVOUGcetHdh5MUD7ji174wnv973aBvZ9WllhRFgJiggYgQ8l4kpQAQTDqwAWGCSkH5R0lXxQ5jUQn3GjDk3OcBilhvVFNqXyZR-ound6jjE2-dcZaBdNIrXMpardJhmSndthvbu09bbF_5U4RIDUke5cKQKoWXmsf7uYooXyaMmrek_GO3LrAg84LonU-xNi8aWjU4KfhBwPKDkgqnlgOA3aYElSeNGrEGqQIFm5VBmCoVL37Ilix0-_JHBbMb3TisFghmU3KeEWPZVyNhuKuoPq1VmrI0z", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104340247318090674193\">We-Love 沖縄 (ういらぶ沖縄)</a>"] },
            { photoReference: "AWCwydiQ4ygJ7GNk_c8jbQ5NaqloLXotjilJMWImONNzu-g8DM2l8OhGrp_Rg5LaXRLS8v3-FLLP4shCX10PHQ-QxsggiJb_f-uJkM_L8dXdoZ9ZdgRgF8KtzT_NBdHv_kJG3_4XbNlEUVf0ycNBeQmjqgZFs7yorvQAJwzO2fwYlL_mUh9VBG_KDwe0w84FWygaEwa1f9OCuvRqfYKMhPSd3PwrjuFD9avdgRui9cOWlqYBlRY35Wj9qIx1FhAPa6vk_PH-wmXYYOm_pB2tTFFEK8IBhgwVievjb8ceijf9cGIoGLhBAyLAVVICnwGWMU3dEpQ-2CIZ9oD7hvs9IyA1gwcVHBbX2NZWEG5jnHnH8zlfTy7om_D9LvduyRWMFSsiL90-O4G11wVdKLcQRaYXqOQwg5taRW95rXqT98P0VBGhKw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116441953387705327582\">蔡山羊</a>"] },
            { photoReference: "AWCwydiOXQAW5OEr4o7ZqWlSVJfAfdtWp0BWMYI-vtfrhxHTxgkKj27PoSVP-Cji0Zr1lXdge7_-D1GQpk-CKtlGijRERB3Jy1wzmN5w1fnyZF1HaDlz02PT84Q86CPfMvEdBxC70WoLOq0uIVgMyswhMvDdceGkTJ6btUcBQxJcI1DHWV5hDJrxh-1_DWqYQYbnF9kFt-BtjljlMuQgLN-JmUPujHhKqz64U73YEBO_JorsLG9lzreCChieos4zxFXJJDz6xh4uGqcnL2Jf9460jAtDTVQDTmZrVBb7SSwQamNuZtmRyHguZiCV-Y12wyZDpMkFuQk7YSvi-3BkHIO3nGwlfZGHNLvymvyhu1ALbiDLw04nQXIWrL4VzE_E87rlohi4_-1l_c3uvU3D-EgKlbgQtq6TvGeReK5RxvsfGE1AS9LKyXjjro628Ub4dpJS", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103837839050437222755\">moreira</a>"] },
            { photoReference: "AWCwydjix7MM5ctTFw09RwChJfKuJzgI73hiTQHS4WsedbtvUQJeWyuaY83EW7jl8Mc661ZVcVMsgGvjcOrzGX4cs-CCiMsG3tjUpTAiIuQ08J54FZsl-DhQ8g32147E3caQzaDMMhcKhUCI3E8KINdLLGXLYHu3KbRmUcopgLmt4l7GHEPtKz_SFpRewRvzbFS9N1YZjIc9EiqYDGuaQc65S7GiGlT7nEPOW4M3a3PdVGliYWxqQZ1a0t-w6kQRTJjaeCUtt7nLbxvBT_VzNc2fINgZBICQKLqeT5oDcwj4OpRkxwTygK6HGUgIo_fQ2oGDJtNsFmPO1n7B0bFQYfDB0xSybi1dqWRA2v1gngM1gk7IQ-M9s2pHfnTExalY4hZXSh40cCIg8W_9K-GLxG50qF6Xb9JCTyRpK5HUynb8kj5nzBtvQXwdBdavcb06dAZZ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101108627103498498046\">Cheuk Lam LIE</a>"] },
            { photoReference: "AWCwydhNpEJamPyOOPUDDpdEr7xoV1GADULREi99z3-tkeDFR1-YKDvchC-sTjkkGCT6wrGDmiTlsgPHiub36UZNgtzI2vMQPHy7rHA5GuFj57BZVFjYMg2BaaoEWNs4Cr2TSwHlnonT2ufg-E80YLQY4C-lc6sKEjvIoKr31FmMrk0o8CvHDEK6__iz5DVoYWCXM6nHuG5DOjbGT89HW4xnoVDZhEsB3O-pznjmJ9GBKra4kVylkgZlTF3y865y5KTRlNDuJghT9vsNqhCSJRxKIVA8Q33tJplHnRVT5Q5reZpDo3sGA2HJP8z3rYBQyW4p5GxUSsSNwOqM60ejqm2qNzxtHo0B8xbW8X-5LCYKcO1pGLispol9inRoHr98YiSgrFNc5IxFL78PZojKmr8EvewJDplzgei7uupzYfIniS31wvxk4iwsMZRU0UTinUl4", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117770283063553974060\">weijie</a>"] }
        ],
        summary: "두툼한 고기 육즙과 레트로 감성이 가득한 클래식 스테이크 맛집",
        updatedAt: "2026-07-13",
        highlights: ["입안 가득 퍼지는 테판 스테이크의 풍미", "현지 분위기를 물씬 느낄 수 있는 빈티지한 인테리어"],
        tips: ["웨이팅이 길 수 있으니 오픈 시간이나 식사 피크 타임을 피해 방문하세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "테판 스테이크", items: [{ name: "대표 메뉴", price: "¥2,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6522606484635319543", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%AD%EC%8A%A4+%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC+%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "유난기": {
        photos: ["/images/okinawa/info/restaurants/yunangi-naha-okinawa.jpg"],
        placeId: "ChIJq6qrMnZp5TQR8Q22HwB-Pbw",
        placePhotos: [
            { photoReference: "AWCwydjUOWxxJQ6Y4YpgFRX8pvp4rEUMcVNf6lm4ppkO7gd6_lIiaHtdbOvJ0OrJrNj6mqKlipZtzRK9WTRN1a8Tq4rRvomRwQTrbWEXcND9YQ5IDCXqj0_49JxjbdTwywy50yVGJNw1LhsKRo4DvGWuZBiOz5m6Grml5gJVgDK1nMpbHgpd0BMTsfGecjcHqhDs3ETwKQgD4EFIHqXRTsMKR5bsu9lYW0QtebWU6fj4k93C1tudAV5eYqKQdfCFUUN1NV5ooKhYCXkPTzeho1U7cxFwvGL4beICbu913dgjJOg99hW1geLlZGynkKQi9XM7pwoJzZe-jLID9PIdNC991qMxJq3L_cpLWe6DXQWnhDSxJQWPYoLlngh1INl6AucOovvpFqOVxd4CPfW03YW2rkeTRki-g8LJdwO807VgbjNEUA_QqNllgCEwVCU2mJnp", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109159516769848377989\">Atsushi A_</a>"] },
            { photoReference: "AWCwydjmXC8JOpdj4ZF1FCIoWiTEq9jDvOjIEpNODytp2x4CtQUm8pCMCfNr9o14S9zg84JMIbLGg-CkkmoPs-mb7yHdP0jI9HiRVlvsdIkd6OG05hEW3Rp9smsVUNk5LcNzXrlgwgquajHHl7Ol8_G3jFrc-K1fTBMc7KFXuo7awQ9sxpEq_n6CbXWW7A4NhgfsD-b7REFkWsq-WDq7ch9-xB2t9K-qp3ItUQ0Y0wOI8NPecCXVm6rgAATTjPc8VcfJ8CkxC9jq8AJvIAVWHD22HsEURkKd79PWM9UBkMvEH0Lu2YIYy661rO2F5JKGElOR604Oa_emltZMU0BR1EAO4FdQh1i3rMEdjBVZffLFyKXuBGr3QKuLWHixybYYw2gRR7ZQ9GjPJOt5ZfZ2VK81joe22AzxRdw9mcIGb5F79K36rQ3-pFfvt67q-RNgIg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107694998529738987377\">Darky D</a>"] },
            { photoReference: "AWCwydipt9uG0bJFvn9WSBYF3vtOAcPNU5_gfQ20dNLac9NsDaDxn7_XbWtTHIfm-WKawlcIGNexAl3y5hXHGbNtyX9MUQZ__LFhxAXwgnLLUq0fFmmYN9zeQnBDroeEXcYVBpYr72r-DCbw2vpJdRSqxbnLSrkPw9eNCOYyWWIMu4zFr2timWZcoTCvRuXwxPK-ITeaPJVHfGr2o8Q1MdVm31jyufmLYZ3rhMsrSIGSHGw3nJQBN3di5xv6rfOoQqbiy_pQCqhtu3cFZwte-ZJzo3T7Lh1Dn9p_KEkyuJHuflLmTl5Eum3zImTaiO6SKMJMXuCu3GgCGTz2A8zJ2t51OkUwyPqBiugkmwc8BjTR0UP-_RQxFVTMLMBCmWVoe136BzwE6VWtQcAEIQYJ-O_M1bOO0va5ixLhP64nfK5O-XxYFf27GY5o7f7-5Zs2ju20", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100814422022827697670\">Toshi -mm</a>"] },
            { photoReference: "AWCwydhbYvgtDnX8JgJcGtCdJpYQhxpNsxm5Bk5n640s4rhdfbVOCLPYbJpiKWCKaDvmQOtdaAuH0cZLiaqnbepsm7gQJk9DndLJWI5AWnH0DMAokvOF5JntGBbLRZslNKKkUxUH-dUvvxfkx76zr-OZIRUlGc3wJeF3okVbpBG8LB2R5vjjnXcmvgzYcVDyIbsv6eAg4z2J_h_-dmI-bRHREd5pKdM-FcDo8xrK_JN653MehXGgup5lLfqmrdvLCFi0XiV-CvRnnmCwMW4kZgS61ZoMSiHjYX3JkGBeAFdWXc2mYE25S3C5o77M5zf31GEybtBjiyYVahuHYWyuAvATxDZtw0tFDEqi0mAQdhuI9_Qonfoc0Wfkopl8wEnDG7WTrN-MzJmQ77Grd_q2gBLtVGiBhfiA1YcN-Bnp2Ujt0JY5TjT7QiUhCZJHw4Wnr7fr", width: 4800, height: 4260, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109341633219602287625\">muu3</a>"] },
            { photoReference: "AWCwydiONRFSSPEpCLE35iNnezGX3R0xktbFFMpn-8YxcLRmuC4iXWZBNUy-_oDClNzn-z9_MK05MHEfXr45iQcnpsl_IvNkvoJD9BF4iW-TcOdGH3-n6mmBVELY85WiWWhr-a2EBYp-dG6qd8v6GPKzP30Cn46D_-S5GPSWtZP_MFsWSEUuvUGqscH5GScKJxNbETGu85xBQ_bYMnqdfxrRgf-CKhC7RN4FVzqwpB21F4XubX8UeMq2XJg-aGjTUIGcnndNrfmXopq_oGe4rbjMiL4n-37oI0ehuA_gI9EhTGl1_PVzmx-j8bgEOQHpmUC_B2F094BC2Q0nZXufy1bWtMjSMa2QIO8iJedzVhVpEzQaAZch_xG85_dx4o6b5cp6qWKRppjTwLR2D5aARf2hIMO5rPeP0ME565oY7INesmDtNKjuioJhu-HB59eP1A", width: 2729, height: 1535, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114956363276000773086\">盧貞羽</a>"] }
        ],
        summary: "오키나와 전통 가정식을 제대로 맛볼 수 있는 로컬 식당",
        updatedAt: "2026-07-13",
        highlights: ["입에서 녹는 부드러운 라후테", "쌉싸름하고 고소한 매력의 고야참푸루"],
        tips: ["현지인들에게도 인기 있는 곳이라 저녁 시간엔 서두르는 것이 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "라후테·고야참푸루", items: [{ name: "대표 메뉴", price: "¥2,000~4,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~10:00; 화요일: 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13564136191706926577", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%A0%EB%82%9C%EA%B8%B0+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "슈리소바": {
        photos: ["/images/okinawa/info/restaurants/shuri-soba-naha-okinawa.jpg"],
        placeId: "ChIJQQeQcf9r5TQRfq4D25cCKXI",
        placePhotos: [
            { photoReference: "AWCwydhPANK4tvurehcUkEnxginYdrN6mdc9vbsAviMCS8W2bpOlS2cz6tq2aBNXUe7D8Td50ZG_XHxCwPtj1QlAGyton3M7jRcOk0y0CHwyZOelwcHC6tuDxmtU74wDBJlwnpDBuEYdOFpyjjy1riNLsjLdQlUtbI3mmmttim0imDlMfcDYeUYxgxvcFdxwgQPvv_hT99BJMyGO7SfeWATFjipgvRHZc74MsyFLewpkFlJmYk1OoMrekhmEverZtTzaZD6JILhaAHZOO_6S7k4PAVaZYa8PEf6SE8Z3L3OifMQRG_wj1Zc3u_WwOG9kI7yUlOoOFGnqhu0aLf2jRA_mrJDWwshRiVrvr3iK3HWMq6HIJH95YhkCa5390-3GNB2wGxKnTUUX2KhepIaGguD7S147tIuzcEfDwu3CMor0WkDPmQ", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115976770922777365864\">范姜雯岑</a>"] },
            { photoReference: "AWCwydh1AWXTmYtcYOnhLTnQdE8yi7dcu01nw_gluCejFg_dkAtlrWzDJYdUtIOYOZCIfBIdBK0jIbvGbDHQM67UBg2ktN6WOUnuft4NcYJyEKD5BZdv1QUdvRQxD8Ec9ec2RLKsSSw4yHbNgX_JQAw0LYZrrnM3UfFBdCgilgD9BrUmJoNujv2QpkheEYgGZayqr2bdxkfsTSM-8dR56XE1r82q-eiht2YNW8RLH2pL-YPNIimGcQX9CAI3lFcT24WPLphx0qArT4dytps20e8u3Jaw24WgXPIYFkARVc-PA0_Qa8WMsCbzPFROedsRqJ4aB_9F_FeMpajWI0SGRhY9n_oZpf-fI-jfLLR36XhNw6Gw7fdhC5DnHXKA0B_8obvF41FB23At-Gy0OTTWDSCdrUByHc8hKm3tmpCe_aaryWuY8Q9M_clWTt_Con9_KIoL", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111404566178265362559\">Arudeon nkm3a</a>"] },
            { photoReference: "AWCwydhuSDQNPXFARLBsAMvmmH3qk5j4wk5TGurpJodaVdUJ4ux9T68vTL84iKWtWONvYaAZFKdG9Yi1mjpjg47tqLe_sM_zDfF7R6reed1ogX9v4yQFvY7hEFSxGRceiD9mRxzds-ZFdbnD-IQcMEUohL7LkfmhIuzHiU3-IAltFZ0AlO1fhzjRsVlfjm8BDLJ6reYf3sDIJmPyiWptWJ9xtwuLiWF9u3uJVsKpO_lopV6NwKU1ZJ9rKk_onidSbr3hlV8CN8REBhN_U1uYNnDXcPNOP2KFPdWP-T7a_MZNEc9NMW-lQyowybvEWl0wyWtFwPA-cpCn9VCz5x5Iyd5kNiysVfuI5jcntXLBSc83wmJHXebWHsged0HzcXigz9ctRNMo_IRxJdqm3hwGXZW4oqBRZ8VtQNP7zWBHWOvMI51q0dPq0gBX1y7xhMuQULT3", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107830375571656687280\">junya takahashi</a>"] },
            { photoReference: "AWCwydgJGoKpJOq-DyKOYzsW-7CV-0ErZ-gL4t-9cQlDzrIUaCt7Bk-hxUvdns2FL0vclVDL1s2xZZwzI2M7qma1CVQBWjNawkzd8v6-mgnGQhjim3RWcC_xv6ewY08Fs9rmurFfvN5_vIwTbzVaDlB5In9x9ONQFQIHfvoo4exBn1T_ihAGGjkw6zAcFegeBxxbHflZSUr0jhZNd5AbfPRdMhPpV6J9QRAt9upKYNGQJAdNLJpvtoQQX4yUXh8SQUDEsnyMeqZpsui5uHrAuU36m2iHeW0cxZ34Bsj38z7Et3YypbXEVVxMi_YmIXMFKrEUE0Ua09Smjm6ZMm38Qm5kXYW1xnXSfQX-u3qD5X3eb1Qgxp6JqipJZE5YiaMwmwUkHJb_ktM49K3s34XF-bF_Dfo_fOxmIK1rpQ0STU5u115cjletZWYyZXG_ZGWP-rH5", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107830375571656687280\">junya takahashi</a>"] },
            { photoReference: "AWCwydhmEtcPfO2GzBX8_7rjdRVQFsASf72n_eIwwc-vWxY_xNVtsfj_jAocKlUsz2M_Lr8gmXdl6a8_Jfl1KuKNvjJLcPAyWpfsapqq38BLjroLDpzLGWbb5qSj2rlvGMEmPFdjjH5F2UM6X6ARrlosaa5dIMAzWzsx7l8D6G1cgQHWNE8szzDTL56gFV8fVwj0QVJks5gCEC64bKdFDpzryrlh0tw0s31CbBH0BScyF2izX8LabsKvOAXreKkMlwEqRMdLNnZUVRZ7AiFj_58DgAt2I5JP9bN4nr72K0FqNzBAcQqaHn2gQSljDv89qw3WavPvJkdwtDEiO0zNqIYN8Y6fxWTJ4FQaER7rxsQnZ0s8tH6f9eM-SipanQSakuKVUkFGkbnF8AVn6xlTEF1sToilE3o4M719NNU60dhElG_SWUaCHGaOxHU_TCctTQ", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102579128704877560996\">こばずん</a>"] }
        ],
        summary: "오키나와 소바 본연의 깊은 맛을 느낄 수 있는 슈리 지역 명소",
        updatedAt: "2026-07-13",
        highlights: ["진하고 담백한 전통 육수", "쫄깃한 면발과 깔끔한 뒷맛"],
        tips: ["가벼운 점심 식사로 즐기기에 딱 좋은 메뉴입니다"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "오키나와 소바", items: [{ name: "대표 메뉴", price: "¥800~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00; 화요일: 오전 11:00 ~ 오후 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/shurisoba?igsh=bThyeDZhMzJ2cHZs", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8226109045606690430", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%88%EB%A6%AC%EC%86%8C%EB%B0%94+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하마야 소바": {
        photos: ["/images/okinawa/info/restaurants/hamaya-soba-chatan-okinawa.jpg"],
        placeId: "ChIJSU_M758T5TQRco9AYbl0Kac",
        placePhotos: [
            { photoReference: "AWCwydhFqVGR7SvmOa_0CCIb71RJt6kgzwBpshBWX1sCiSxidOE3l0bP8gLa7Vw8VdZjcx-dX69KF61E1DR7Fyxo2LHCEPdvYKKUERF8Zc3ROyMotuB_RYVPBgBheVijtc_QN5wa5onVT7DA3Y4oHstqAcDM8hiAiEno_VBbKbRmrYoIBOK9FM5nlOd7uBKgMyoW48yMpoCTiUjOw0hynlXX1DgtaLlHmA_ckTsJa4l6gWrLs9ZXGugxaxra3RI40OXO7lCRrpDPzAu1zb14LoJkQaNRDr--IJ1aLzmPN9xp_cnKPU51rmpLVlpuSHItItcswEFSyxkoGtr-1VRrK35enMpD17y7tfyO4hw8QluLKJDncMSmnYColn5VyqTGXrXQWZ7GFfKOzSOeMdfpiRKO-Vd_MtfzgoEOa2FTC2Fg3qYMZUoK", width: 4800, height: 2707, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106613263394477101937\">Roann Ts</a>"] },
            { photoReference: "AWCwydhzX9hk74_4suhxL4yrOj9slejnWSeTgZMhcN152uo6mP81aoSdIUW7jGIkPKFb9kekVtAlynaboDkA7H-qPzSebnZstNzRR65BA18DF49n4He8TlsPGraB33mCGwBFR7L8ZQHT8SgRXlOtXSpmMZ8mcBYSApFPqis2a7RcLu9qFsNQBWv_EcgEeDsm2Z_S23ZiBVQ4Uu1y60K-iFD6Qz9YgdVkNNG78yzyDw0lrynKb_8jyInZ-iEvyiDjnpnpzu6lBDWma9qAhZgcgCdrJwyODThxViWuVloXRtaZLtIaHTtwdjGVGrJRXVuj9Jju_4ln7rdUILxhmoiECQA_gI80tSTnniP5vMxVufm79UsGGcWcnPIOmyKESRL_yv5cpoKos2Bt8yb3uaR9Lr4WIiFReUloSyL-kxxZr1dsTGO03KCz02lijSWk6Of6EQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105079161801056573597\">結婚相談所ラナスマイル</a>"] },
            { photoReference: "AWCwydiIkyBTg5RljWsD5TJAgmlkOtddZTRTeC7jaRXmCzw91mncZZv7L0hMYrICq-MvxAc5uQCIKsPp_Mv_UaG5_IzVcgiX034H6Jkp1H0e2JACu_Oqy_r0qpldbfnArIjInjwITortOptY5bHD5Y6OZxC7Q0PdLLT--zigWmoZnmXiKOsSPOkRuVgAXAGS2Q8jDHuRnf2jnjc9HNeaCWZ4n-vdoryB05k2XLz8LtfOLnwQd9I9BgY90nhlMHq0pn3E51diy85UhMWbiSOIODFuzRZaPmeg8FCkdCOGDgSIshEBeghbfIu0xYcLyLfD3CWYkr81Xl4gfmLhtfq2UeaiKbVfBQCV7fz0uZX5hL3JyKjoSvME8e3H2G5QKceMm1LYgDpdQOLXk5ceW0u-cXavHw-mvF5ePDuTr0wlbGpLPxeis1c", width: 2555, height: 1917, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100255593068033778949\">欣</a>"] },
            { photoReference: "AWCwydgZavIPQQhQRdyCqPMp-3oOwOxkUlPxycNnbtjnz2oGMxEcCn058GKiGo7JDXJAsOs9rRVMI2UgKq5ld4LudQVZG_V0RBFLyEjP5qR0tm0pZI3xcw2iaVtCLMyb4We-X4BBKZ6G-HEbSjk2poRsCv_PvXf_lw4jFBhgVtRjoHIJ261YPrKwagwIz-jgs9nijZYAcO2V9WVJOlqbKNPACU5ep_sNLnUTvqs2VxNxZSueKHxnukVQr39WR1ev3Cg_UfcE5nIdAOuM_bqz3nxQ60WFk2ulTdBKt7oVLNKyx-4gjXX4gzTjF_HKQENacv91qBFLMDU8yzym1KrbJz3hCG-qeUlBfXYQZgXpWI_EUVaHI12bjA7GEin9kKIdEw1D72Hn2Irl7y1MoTe0Y7-fxb_-eUDp9apXvsP4td65QPp4GYRy9JMPlgb5swodnAEW", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114157368139093601185\">桃井森樹</a>"] },
            { photoReference: "AWCwydhvIXE_VtIxXOz86d_Go8I9tXcugLRnyb6MK3dpFaUa3KE17mjsYS8a4QQla6FY9eLcm9LzUtjDCS6tmbEoEYNbFi2p9Ox6w2NoVTFSFo9NIU25PGBUvOkkIQBH1oPOsJELVmRIs-resQmO1N4PIgKggKDev2qJzfQIdLcU0Z5iMRpJJrDSct3PlqSexzP_RmgAcjPEAmwekhnKRpspdEjuRLW_-P15pgpjO3Mn3pVMr-gUbC5ms1HuoI_ZJN2E8lgonhaOsberyLDDiS4ZvRwV0aH1l1VR0R4jEwemfqbTrNvHRAmIsB0p8IKajk9Dw_-WXrVfqRDhzXAfC4Wta9T8lSZHN-YRVmPjQM8M_b4mo7WmOuctgI6q64ZFCoTvdmbUqxv9jXTA4sOuRKPmigI8I0OHY6i1hHidjsIyxrRA_Gu6JCwbTYu2SKXmoA1G", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105079161801056573597\">結婚相談所ラナスマイル</a>"] }
        ],
        summary: "부드러운 갈비가 올라간 진한 국물의 소키소바 맛집",
        updatedAt: "2026-07-13",
        highlights: ["입안에서 녹는 부드러운 소키(돼지갈비)의 풍미", "깊고 담백한 육수와 쫄깃한 면발"],
        tips: ["점심시간에는 웨이팅이 있을 수 있으니 여유 있게 방문하세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "소키소바", items: [{ name: "대표 메뉴", price: "¥800~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 5:30; 화요일: 오전 10:00 ~ 오후 5:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hamayasoba.gorp.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12045287017928494962", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%A7%88%EC%95%BC+%EC%86%8C%EB%B0%94+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "기시모토 식당": {
        photos: ["/images/okinawa/info/restaurants/kishimoto-shokudo-motobu-okinawa.jpg"],
        placeId: "ChIJfYYxtF755DQRMQpk94q0UxY",
        placePhotos: [
            { photoReference: "AWCwydglOaNR9MNCJf17gZ2AKpJ9TYwMz7FYp3FL-_V0pXpeCXLaR_UL3inKDMI_wlLKFOK_XLwvsyEg7FGasEl8wu2cqnS5gftGHeqmD-6GifvdIaj9h3fmvmevklQiYe5oyh1rued0Mn2976HvZX1QTGtJQdxLuL8g8fif3Q2Ko9upkYsPnWszsCS0ezRjZ4dNSrRmlr7nXgPPTr30gzWihzKCJ3Murq-MxqTUlhO2rJi3O_5Q0n9FnLL4_vOL5pCPDfGtbsM3kvGDnSflk2XpxkG_IraHwKiwi5hDUsnufjcQ_FcDBuDE9yOLmuP1O9sfkDAhEouCyq5HAJl57cFQaUlRmjzq1A0QJl7LzZAo2jP7uc1BRVYctUJBACelQHGrTYx_b2d2qzWnNIz4tXtY9Py91MrzuPicjBlH4V7clhszcGMCGr2g40a0jK_bjQ", width: 4618, height: 3464, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116559335206866623374\">ぽこ</a>"] },
            { photoReference: "AWCwydj9LKXecb-Sxogur8a6_RktcHPhXqQ-qblrJjXkHsajNEIwFlPdZXkEnH0IG1i843_FYgGURrPQXatAUsGuA6M-K1v2peRJkv1Tq90PIOkxqa136fAclVaD6_UM-3f6J6jKi1mXfI6Mx9sg3itSfSdzNVjKMzfQXxhxPo3WATvB8ZXSiqpH7UOIn56uFHOhngLHaXNzS1a0a1CSaBZnWUXb5np1q8p_WgKXC8aPQp0Z6XBoVH8b4ZuoMGiyWdPsAzb5E4DvTlJ8B3QaSW_0tIG3VC3aDDXa5m788oSpzut3Pu2u4mx852hb4Gbmd2lpYclZO8BTVDCAXX-JlKW9itvw6ZzNpgO_cllOkE4o15kuTqUY6dd1oKpVtCqE7oNus4VS-CRlb7zF0hEP7PSjwkcktpuiynadklz-3CQHiCiEntvSPOaAxdOrbTuJcPBm", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109827628911666389160\">高城颯志</a>"] },
            { photoReference: "AWCwydj7aNyXOyIy0YVi5nC853J6WbecMld_sC4Z04me8N186wk6tTAGvha_-axSLinRgHnJm26vzAVNIukY78ox-8CoINl8XGYNUqgqgH9hwq1P5G5qmtCx8oUKaGVzJRAQ0qVGFYJC6IutadCAHbH6N2tKSqkziyzk54frD_jCwqmUMJgjUXIlz8m5T0C1NDI78QNN_njy915B1m_njzjvirUp20iJCDZpz6tZ-9yFjsHx3gB1mPQf8JmBZGZRvHWedo44pYrjOyPGyRjSFEczedTUOEqTWu_fZzWLns0cZLybGPP05ixSVk8Q8GqGmrjEtBT04A12dN8EugOISHNw8Mkuj0xmgacoloovvMZPc5nFFXDyZ2zDpgqj4zeT0VxrEumTeSRTHfXvCgpVpyreXunCfQA_d4CW4P1x1106rhWQVJIaa3Ts1FZHY6s8zg", width: 3554, height: 2665, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107199376885672607760\">Ryohei Abe</a>"] },
            { photoReference: "AWCwydiQSzhWuJIpwZox8dmfOc94H7VMDAEK8VPHnBVLa430c37rmrt1FqP5xQMLAKZOLSwic400Sebcv1eNKffeLOzmKAOUDtQuaLxKSTpBG53WoPy6WqrayrChBf5_h-z9h2_hXGMNO-lnoDSnX_pywRjT90OM4q_8ZmnaKRM9_Gd1WbbyOWt8UWNvG4TSFMrFflHpG_UgPIWTXX_70MGk_1PNyybQJNAxCQR2F6Q_EsGM81TAM6tPs2BZ6KXevoQMnV8EKBmbpPOXazu4Ngc2hs6SM--qX9-JwNwd-uFpe-Yi1P4B0cSX82b9OVJdJTnrM31w8tGH21Ybiz6-GmvTS8ba8YS3uIYEly-UiZJSIAcHbqDjyr-LhwJO7S6MH2qCv_HmI0vWGD5m4NHcJAk1lMqNsK-dcmNIEmOG-ah5SF5j8b_XVxKvSassKJbgXlPM", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115655322280665320100\">꼬렛츠</a>"] },
            { photoReference: "AWCwydg4VwlIYS4XA-EEOrlHQv9GUQhfnIaDqVu54rlo1lLCnuZkhivgVgTyCzGAKGYUOi8pKVTTZLTxEYYaiXwpTRTXTnxVGmxRMpg0k7qksnSWUhT7pqjvYlxqv9lmPC8KayqRR3TKflXkQzutCxQQ6reSTRM12INPso5_r7hnAP-6Aj-s1rEhwxILznZSBJyUIdOpQNKNRj71ekcLpdJJlmsqlf5QozL9IGbJ8XzLQHGWVZPUy3fwgqe6idpiaU-kjveCwPVb6OOG6d_6STqnuRVfsiIdhucs64DDl9QYtP17objpaINX5gFXbFwSejuEVLCv--Khu1AZXXqEwLTIamEeu1cCPbJy7rTWy9T-VW82ZFOcmn68fSRinkQzQlr0_6m2vC_mVweTg3WX0dV_9vmp_XtYwzsAHRdomwA6fDo8jAK3bK7ihtVlHauRkQ", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108812358198689557276\">르륵주르</a>"] }
        ],
        summary: "오랜 전통을 간직한 정통 오키나와 소바의 진수를 맛볼 수 있는 곳",
        updatedAt: "2026-07-13",
        highlights: ["전통 방식 그대로의 깊은 국물 맛", "현지 분위기가 물씬 느껴지는 노포 감성"],
        tips: ["전통적인 스타일이라 호불호가 갈릴 수 있지만 꼭 경험해 볼 만한 맛"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "전통 오키나와 소바", items: [{ name: "대표 메뉴", price: "¥800~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 5:00; 화요일: 오전 11:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1608828000850414129", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B0%EC%8B%9C%EB%AA%A8%ED%86%A0+%EC%8B%9D%EB%8B%B9+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마키시 공설시장": {
        photos: ["/images/okinawa/info/restaurants/makishi-public-market-naha-okinawa.jpg"],
        placeId: "ChIJy1Zdsr9p5TQR2ET-2o69ZKg",
        placePhotos: [
            { photoReference: "AWCwydgu6H7uTLIcXXy1RQUQVIu4pf5G0_6knHy3r1jwiNWeFe86uKCGDJeyoTyZaPxMTzZJD4xv9TGXil8plzBcRbMTkdL-8TXO83hU01W__QQd1Wi6mR8eUSy1Yxqz9pCULvkYWZ_XTHBwKOjpUhdG6ZjMHbOQ1l37M6OUpzX-h-g0Frot1g_I1o4kzyu5dNRygD4rdbvjX-V493hajnNA3Fcoi2zHbliKtGcuu8U0vdZLRla5je4VNZRm6_8GAD0GnbrOIqZXVcmgbN0cUOakD9KcWVszK8IilaHiHy6VEr4nUxHfCPramki3hrkbOKJ2aFxTW9kq5iC4cMyaSRN1Goh1aftUFFqJn98rsUyiWV7WUQYZdH39MNJdpn__L-xJwfK0vgqdOX8Y8Aw5Yjk13TAXLZCU4bBBT-SRKPGXioZIJwY3", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110776157110866434713\">粟國智光</a>"] },
            { photoReference: "AWCwydiqjMpdhNKedAVNg4zMELKUS2JpkO2fzYYIyQFULP0OoqmtuByVpcb94zNoFRcQPxu00yYnlZ2-nCq4IyYEk5mfUXY_lfE2c9aSoWY_fb8KtT0SqsTodwvv_UWq4PRamY5Ubj49UnIT8z_oJZOlZ3W9hob3qzEkganOOe3Y23PUfJdqDS2NEjPWKhNQl9k9U_H4-l-Aw2VX_R37LOY05XPPgcBG8QdZlWM8UHhmN9UIC6stx1Mnu3pqo50G9eMVl-q0uJeZlpY0JmQKUb003Xq6krUy85D8WMu1GWlvmtHt1EMJGNCt_nHCWPedtrF_c3FwzBBOPi3RS339QHnS-HvJa7fMFL6Nmdu5H09xzwq5pBpsmIB8CZmpDuqWR0SKVL4awWJteZGzX262ttN-tC5eB-TtuhMgv63dsaNbOQMsTNzmBGwbPBWDuj9ur1bz", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113193208285107557353\">Kitty cho</a>"] },
            { photoReference: "AWCwydhSC2DiYGW7igAmXii3BRwELvv18jXyJg1r7bxQnoxlVORS1QV7q4eNmzRR9D-FVbNeAObwwTWS0JOz1wQRWBFFCsFae-IJeRKlLuEx4GBJfN_JNjLeMBdgKU_jPnN5zM_lYuDtbsOgMctf0b07wTVz4NrR4TUOBLvjd5Ldp6P-Xj2BqcN3ulqlRblSJbreSi-kUKZtydP3vccQDhjAj5_NyyZge6dR3LFQi5PhDf9UuiKe7kJs7DHJtw_jqsirPIkyW4pP3IajG2JqR8ADo-gjmYX16-GMYGUdZbFN_M0R5-ygidqrzIDD5f13lyASt7MApKSkyUciAK7A55ngxNNL0nts4Ra2YMrMqL_ebiQxLknekBguYsekGC8uTZWO16PY5bZq7uW8zymFdrx2SCG8ZXVW3U6UzCJwsO401N4l5Q", width: 1920, height: 864, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112894704679854519726\">M RYU</a>"] },
            { photoReference: "AWCwydjUN028zQbTM4a3aspPomrzmyaNRrHvenp-cGfTCZfaDxX_-iVTBDlerw_bqjjOJa5188rvPr1A9K8RO1cwVE55CO4h2j84xCIGNR4SIayWsIIMWawKuEbis0vScDzxbMQTFrX8WjWZlAWvErG9cl2mQb59wmaN3mJhgjq93a309pSWXVKeubNn-bRQaROtKmQB02wQZELh1qq7USiZ05SYLR7x4VrzorR5zFhm0dzn9iJdi4AzKpAgGFSBVfrr--iwC3KrOtnc5C11taMeXIQMIWD90iiq14OYFumonLRfDEqEIOKuxO_6vdY4aM7FhDxTDjXIYjCHGPOSkXoFiw1D8IGugfhh4yGJbh1r_7vMmXPG-UhQ4_x7y3gR1OZT1oRt1oVova8QWF2Ho5mB5XB3tGMA1gMl7u5Mmhy7tdxzVA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115813966180597635366\">hiroshi</a>"] },
            { photoReference: "AWCwydhmUszPQ39iAEsC01d0V26xkQsNJRppv-EXwI6Lu4ylUNvHc_R-I29kp3eRbEgjS2s62pTsnt8xEqRKIDBeHYtzXfYUuehbBsqAx1mIZxYHe-h1NKB9sWlo2lsczn5V1VcAzJIZXiGXiizeqncl_ca_8JRfSIRf5mMB4aWsLx5NjM4Z2kJkWpcIOrcgoB9VHZeDbUb50aglVVEC1ulx2N3V1rmbuXec16kOImcbM1Mg0B2dUCdkIChT-a8yZrE_esfO4zjHTdbEKrm8jAlnIPTZyIa4P02Cv-wcIJiXHA91NS37uBO1zN1GoJrhnuaDrGr1w7-yaUI3cbMbIkSSeNhA5TKw4XW1Pk75Txsbcnai5vNmbT9Lq6BGT2TVx_NpUOPCURwLSK1kmGninHYynLl3ph-aNzTe2YyEvcxRBHU", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107135306241708098634\">Roy Cheng</a>"] }
        ],
        summary: "신선한 해산물과 다양한 오키나와 식재료를 한눈에 즐기는 활기찬 시장",
        updatedAt: "2026-07-13",
        highlights: ["싱싱한 제철 해산물을 바로 만날 수 있는 곳", "오키나와 로컬 식재료 구경하는 재미"],
        tips: ["1층에서 재료를 골라 2층 식당에서 즉석 조리해 먹는 것을 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물·오키나와 식재료", items: [{ name: "대표 메뉴", price: "¥1,000~4,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.makishi-public-market.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12134031717300061400", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%ED%82%A4%EC%8B%9C+%EA%B3%B5%EC%84%A4%EC%8B%9C%EC%9E%A5+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "포크 타마고 오니기리 본점": {
        photos: ["/images/okinawa/info/restaurants/pork-tamago-onigiri-honten-naha-okinawa.jpg"],
        placeId: "ChIJRX9edXpp5TQRRGYawVc2Jmk",
        placePhotos: [
            { photoReference: "AWCwydhz0jwcEElIwEqwBjIzAqVBGKwPPlnfnrd2HAHyWTmChg-5Z4Qs9ZPvtdy-5MP5Hs8RD6unqKj7N6ET0M_mt05V9MSoFf8VDPGjG5zAGFNokHAdSkKpTH6UxuI70JwjJuL7nGSIg_UBMInSgWlN2qSgyPEfcy6lyml5YiqdtpvFkvoZzhcuZlRdUDTLCi0QbukJ26c57cG8ZTN1-nNIubUneRm46e-oA0hEjfNtt_UaMZ9rfCYql7c4Clhst0bPYfcumKloul-ZDRScFr7KS3feYnd4_Vjdz9yLdswiQHzXNj7A5Ek1oHCvykK-w_jbcD0DnxXkrzpzUEs3Ac2S2_BAEYH5qH3LaE9rj9hN8T-s5WVGYMoOGXYu8RaxX3cKmbx6lYCtlP_yKB6Uh_Z_0iBfq21MUAcXZuDitrRk3W4R-Q", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102694051277211794866\">ポーたま 牧志市場店</a>"] },
            { photoReference: "AWCwydikzjvVuJnVQ1q73KnBg0ZxEUcTOffNiLw05KxzFNLJBip_oucLvv4-YOjHLH-4gidGCT-rf8qqeR6XtWEvkBMPfAxo6-_v4YxqVqWxsCU0m8kwrOezQnEwGfrLL2VHB9iVsLrvCBv9LnhYUDRbabQyJIP0v51JxfurQeCKAvHA0E0YAK_wz1SD3JwtVLMNknAHSj45U_GDLIDG-wbW02iyohtj4uzDqclrxNEhDvwU9Qpec9ESKUcEXUMToed1pxxrSVV-pywEOKP6URQweJjT-GLDhKxcvQxTk99EeVq4qZybFTGxUHKW1H0m8XW4QpLO0DFITIb1G2CZ7U8qepRIUGIcZjVo8cZBUg_A1lUak29jTSfx0cJytCCw3rs0Rj4X60XtH1JjYBy7BKShS6RyE-Oe4ylCLOYlVF2lD7A", width: 4000, height: 2925, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102694051277211794866\">ポーたま 牧志市場店</a>"] },
            { photoReference: "AWCwydgUHqabAT3BnK_Hk-26EenqtUI6rylOvvakD3x2XDPkceNfSWU4VEPGXvDSZzSSfeZVIF2Hath-YEamXzyW2exF06Tymk8Pni47ig62G0_EtRRiUfcrSFPlxTo4iTY65HYyYr6tJ5XePmne7o4Sug_wxAN5DILjVQ3oNZxeps3NiqDo4LOQFyLVjpDt5d3Hs6At9x90TlHeyOxKyEAmbiF1nTFD-foOe1tUn-2rPx52Bcv4sKVj1iRCIukvcrqGQmkOWQVTQlX6n8Ad5NeEqL99U-KmFkcNQlvqoDSdunNFIi6TdaMza5xPIYiIEYyarlati6FNax37ZRDxBJp4tHzRHAYb5DKh4a6eKO2ifkpXmRwOM_EyFgqIrtN3xgc_x5Mwgx3V8ZKKh6fgeAeki5QBGyEeWHUVfdzfdKmHgBy5mIBnqBQo1LdaTfvsHw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103367783393445450568\">りこ</a>"] },
            { photoReference: "AWCwydgeW0m4mi11QeA6C_DiDJ_oZ8qKZ9Tuhsw-vrAh7_tpN_eM4dxmzJuP2--ux2lV-OiLa-FCzjH8jg4CpCLGzt2iV8x8671vvW-25FhQV6Gf0YfM2fDuJ71xgr_Fh3F_P0JWcCg0FbSR7XWvN5RoJU1TXKVT5FcW6qSZRCZPr1f22j4KW1mkYIrxniI5bwu0vrwV8u3P_Ak6rllENqsmmzmvV3ZaebAGiA_27WYRz9qnD3cqtM62RAD1aDoOsJDRIwnOv2SbLxBei3SuzuulNl2MmjzCVOJRj8_K9n_WYUkBvQcZTH-7vLadgj8TGoGrKj3Vzx1pSymsrJGxLXklIw7Oyk3EScKFCF0Qn2DSZjO3i-us6pvAdfE6dhmJbA74VcSWtbW7NtztLyYUzKVdMvkt6Df4iHniCr0LyAKFdF39Cbg", width: 4192, height: 2357, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102694051277211794866\">ポーたま 牧志市場店</a>"] },
            { photoReference: "AWCwydiKvbl6Aek03nsdUoxfVygsE671djxwy8VEVByX5m_XajScZxVMc0ULslC0oadNugrGs9B9-BeecX_teZyNGjmUzfRbvXg4CT0jbpFuDoLBUdqAgl2a3xw3SdMclQrkwP3BJeBEb34vLSi2Oby2RJ0x0Yjf-R7cOvI1WwOsAKJY-iCAhh4J1D1I-XSeBMvH4FBCHLMhbfLsBXJObJZkMr7GDwTuMU5-yk60evRj4n2WROsHh4p-ktK_hTQUfLghhoCmSXeRLK6tXfmOLjngK7SvCylb-7Tfb5fucJi0Kranm4927T9jCCVUyirVXLebb2Os-ifu2xRMsJjJj5Hp6atgtNc8RO7DZk1yDRLXAm7b2x0sTBNzcLvq9RpFabYBi9cqrpVIRSnToqCQrRMwI6Rafe2TPuAWYE4ZCjsz0ZfDuHnefN2s4XyytLFoiX57", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103367783393445450568\">りこ</a>"] }
        ],
        summary: "짭조름한 스팸과 폭신한 계란이 만난 오키나와 필수 간식",
        updatedAt: "2026-07-13",
        highlights: ["두툼한 스팸과 계란의 환상적인 조화", "가성비 좋고 든든한 한 끼 식사"],
        tips: ["아침 식사 대용이나 간단한 길거리 음식으로 딱이에요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "포크타마고 오니기리", items: [{ name: "대표 메뉴", price: "¥400~1,200", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 8:00; 화요일: 오전 7:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://porktamago.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7576803173627225668", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%ED%81%AC+%ED%83%80%EB%A7%88%EA%B3%A0+%EC%98%A4%EB%8B%88%EA%B8%B0%EB%A6%AC+%EB%B3%B8%EC%A0%90+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "블루씰 마키미나토": {
        photos: ["/images/okinawa/info/restaurants/blue-seal-makiminato-okinawa.jpg"],
        placeId: "ChIJZ3ia-mJr5TQRfGvhmU73VvA",
        placePhotos: [
            { photoReference: "AWCwydgedpHFaoGN4eC50t2q884eQATyI9RaOEFMHp9-nXwVfITeYWYcVwW7lzKsfW-QgBz91TpkinBVBrunC43NKM0OFohoRoI_nzj-M34uGdVYMjTWbfHriUyHJtQjIF_CkUCyUbYt4Qs9jlrwEj9TqUCJYF_HPXdfIIA-MpNeFNZx3Axf1N7ojhDU4BTmZD9MyKAiv9sMgbne310uonKC3GqlGLro4mGj5fNktUmh6GwNPqessJvN1Noi9dzEtJRIai2GzTAS0tQn-pynIg1Rtr-j4nC2ZfY24dKNtaPdIuGF0HAXe8HS5naQo20cRZ1_N5tTs4HRocZEbJnR_so7TKggQTsPl4mFzPbjUsZ1VhttVraKS2FR0a2Wro5bQFE7My3WGNZBPl0Q5bHuXvLYLKv5glGcNumNCMhAhMLxkdScsic-O9fEAF89DJwUnTx4", width: 3600, height: 2400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112592795070220809197\">ブルーシール 牧港本店</a>"] },
            { photoReference: "AWCwydhltA5_DqnFDZOnxN7NcpI51Fwto-0qKQSl2d4rIBNjmoYZ-2ZOWl_wGPKs2DMk9VIEaBFIIblmzsIGfews8hlj0xmEMux9BG00Eiopjc5CTAQ3Rdb5n_KNKDOZ_3ggXTnvQA8dYVQ77kNLGTnLHS7ImjxBu_6_AO7vrZrR9G-p8XuEyaCzjNTKa6I8xT7hhijuhCjCm7QNVBX3ZwqX52xNi30dMBN5LPsQxZDCzvbIVIIfDZxi1p7KkaEeFhOSmzOyyXNSNTeGPgGqVwzhADtHOAtMUJtvqfanrGEhgxmcwhY1rukdcfIBF9iBk4OE5_tSvI-J-3y9ArAd5Huow0Upr_MDJb-Z1e3oqgNSDNy3V5leV7cTVcfBnenSFUgYzgb4AoU3MnP8P8qI_6ZelGjVN1nSw2uTuoVmb_1ynRhOHmmgQUoqLu9I_tqftTjE", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115103453825680201700\">H Tokimasa</a>"] },
            { photoReference: "AWCwydhGPXhMv30S7LMGOoynSCw1Wtfp1PLPRxRUBpqSn3Te2_paWmxgnibBFlA_o8c8Pxhh4sU8HqWJ_uOPz6hh06PmnlV0ARcn-lzkbTm2TG3zxVGcPLGxHk2BotcHHs7wXFUoQpXIN7tvnfnoU77bjy8ZYI5Bd53fJC31TvHyCI6mhtvsBZBwvcVanyMu2IqzZ1yXDndh2_Zblw9BMDxxS_DzLbzFO91tvMKL9Y3N3LfPGo-C4WIpwcI7IKZ2EpldAfb8PBynpQAzagmzVBPDCatCaicOl40AxtAFsGNgQpOxgSqvIZjmLEaWTxiHPGEwtNr_VCGRQg0FwTP-HjPm4u24cUbukTwPTKzgC0NhU3jrpsP2TPJ_jnua0yxW5Une3r2IwO9Wo9PTdi74wf4xRoGHgkADCt4gYzh6esFqtofmJYUlRZkkSr32XJ-kxyW-", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113737746705216871470\">FREE okinawa</a>"] },
            { photoReference: "AWCwydinSnBAEjsi6kVIOTYYHV8ifh5G6ZjCVOf9ndkFIDDANIyHaNVDbT--eomHKpNpzahuHzywNNehv5lrdLZHVOV6PQr302IFSTAllx8kYOSBkpE6tRtbqaDhz8pkaW4ny_ZbPc3pbAfTfIeq3B9wTDer3YCFeOCaevZYXJ7zS0u_min1a6xbzGOavO1pNRhbaEe8VvJmhUtneT5UDeHiE7d6KhTBlbp5zEKAcuMGNL2fILYm_qvgbhynryjaGyC_jtPN2BpFVvknJhTT6_Hz6tyfefH-guFZjJNYLlQwYFxQ8kx-OjzbG2tQ8r5y8Bi2774V4V69jvtx6H-1AzpIG2mYfOo0bRTK1j0IvBDX1y1IjNebiBQ7_8-xNOyEOP6FXl1VALWxq5r0YZGdDrTcrLpOxTwtVUPDJbKznwR8VB0ubSEukifDGUVqzJh5eaNY", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112592795070220809197\">ブルーシール 牧港本店</a>"] },
            { photoReference: "AWCwydihRUmPCDTtrVZOfdcB5PEtNAPUqWNovMjjzQcmQG5jHrDOBuYHRTjUTOaQ47s-Ex7FSmacSNKdT1tIW0cyyQAL_08x2jP6HOqDkJoUsK_KHTx5lSDzWhot3jVdPn7vtoHxtBegsD7hhE1th6HXdaAHpC7-wY1rCh025Qu3aEo0wo073wDrA8YPe3bMw1DJhMyU7iZ6WG4PRrVuothemZ6NEsZcMEz1zCEx4mO33yUvvI_YKL0YA9zFPEDIrgsFs_42WjnjFBIlWgaRFtqRfw5YowvI44nDRz4H2VI2dG7KDNobxlIbiWTPqLMdu3IDsqHomi-HbVMxIs_AUPVrlZRDUjUn2tPyAJOGAxQ5wQQV3oM9Bxk4OW30meqLYP8S8c_Pr2ZyE-05JrVJIBlegDE1LwPubDH_-A4bXmF4CjOepIBfBteyV2p8F2bjm1E0", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112857957188012262286\">Takayuki Hirasawa</a>"] }
        ],
        summary: "오키나와 여행 중 놓칠 수 없는 국민 아이스크림 맛집",
        updatedAt: "2026-07-13",
        highlights: ["다양하고 이색적인 로컬 플레이버", "더위를 식혀줄 시원한 디저트 타임"],
        tips: ["자우아이(자색고구마) 맛은 꼭 드셔보세요!"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "오키나와 아이스크림", items: [{ name: "대표 메뉴", price: "¥500~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://map.blueseal.co.jp/shop-info/?id=makiminato&utm_source=google&utm_medium=gbp", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17318301334061017980", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%94%EB%A3%A8%EC%94%B0+%EB%A7%88%ED%82%A4%EB%AF%B8%EB%82%98%ED%86%A0+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "류큐사보 아시비우나": {
        photos: ["/images/okinawa/info/restaurants/ryukyu-sabo-ashibiuna-naha-okinawa.png"],
        placeId: "ChIJmzxAFgBr5TQRcG3deDXZzWQ",
        placePhotos: [

        ],
        summary: "아름다운 고택 정원을 바라보며 즐기는 여유로운 식사",
        updatedAt: "2026-07-13",
        highlights: ["일본 전통 분위기가 물씬 풍기는 정원 뷰", "고즈넉하고 품격 있는 공간 경험"],
        tips: ["분위기가 좋아 예약 후 방문하는 것을 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "고택 정원 식사", items: [{ name: "대표 메뉴", price: "¥2,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00~11:00; 화요일: 오후 4:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ryukyukiraku.owst.jp/?utm_source=GBP&utm_medium=GBP&utm_term=GBP&utm_content=GBP&utm_campaign=GBP", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11085225814642612759", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A5%98%ED%81%90%EC%82%AC%EB%B3%B4+%EC%95%84%EC%8B%9C%EB%B9%84%EC%9A%B0%EB%82%98+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "A&W 마키미나토": {
        photos: ["/images/okinawa/info/restaurants/a-and-w-makiminato-okinawa.jpg"],
        placeId: "ChIJk5jkbZxs5TQR9YajcZ3aWXw",
        placePhotos: [
            { photoReference: "AWCwydi2jcrkINCOPHAa5zvi1UK4Ste2C-Z5whH4cNIfd4uwQrCczy2habQ8sjHc1GyIoexv1jY51O3YI_NIRT753YzIOhreHW3lQ0qRVv_lcdjoor_P2ldpAhDZch28FB3zxOZnOvw8J_ZOMaj89r5EMHdLHolclPkV_Q_dHyrRa1hw0x9cV_wkyjkNCa2NIvWvdW8HGYKp7IXiaRBuPOohopwLcDIIJzGVwKqLTIdOS3U6dvZG1SmeP6e3Xc8s0jh4A0on4fnbLT1ZQWfhrtmYe2kknstUDjJhtZsBBPfRl0iWSEHvIWWxI92ke_G7oWp0fGiUrWXKyPq0B3PQuc8QbSgZ5aHOa1tVoxV8KHAO2T4cSx5nTdBL0DIbb4XQCS-iCCnRB9VIw4PG0S0rAQ8U0kTj5HzDfWpm_nvQHZEdembiLL4HenI9QGOTWAEo4CMW", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112369806042988695798\">Lee LEE</a>"] },
            { photoReference: "AWCwydjWT89sB9PGVOnM-2qXFrDH0qkhTc6SCPyLvBce_TZfz_zA4G73JKAvOVo-uU4ivZ6BY5XNeUaz2tks5RpYN6-uG1I82sXot9594Q0aCLYddFaTbWQoFztoWp9UtVRFtSYh9OLHtPU2xp9dwUoG_WCnRX1buUp7qmZLz-Tl5n_7HNaTtaBijJaqQ8P0OAdOON6zA3MkjeDXhSmpY7rGG0VDQq444_WchMfarBwvmPEWw-yZtx71xLOlF5PZpNxES9dUEwDlka21-hwSXi3GpX7zCIk0ml8V1gHMqoKNgCsUhfp4iLS66Shd5IC8ZvyCbqcT8bpA6S1BJ0YwTEbyRiRF4XqLst4_k6NGSbQPP7PfegrOFObI1CVeK7JcdXLATHnr6A_MXQwBlElD9sQuPT3y9xEk1nzJDT4O1LnUZf5YMwt9fLbhbeq0UynMwQD5", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101626116684280109345\">A&amp;W 牧港店</a>"] },
            { photoReference: "AWCwydh3xTmf-i-AOoQS9STXgliFYciahCSzCplViRq9hvERpxCAk-uUIAPOeFzxxpTLgFJqXUzPME8qZyCyXXuJoSKtJ3OHfvw5jFqEv6bxF-vGABwmqWxeNdRppxUfRUZVnAL63Mo6k9f-8QcGNBTMN2yaEsG8LJcVH_04CT8Mb3MV2I_JzhWw9ilYW-kcJHcY0_Xh0UVvDlEp1JM407HYGi64yeQmNr_jSHKvJGOO45_15yTetOcYFLHHBPhrcxynvszjPfAFn89md3eCbT9oX375kX1rGxDpqhKdGSgsGjkFzByzZBIJi6CpUfUp_VY13OEm8uApZZlBEueZn3SMJnnAuqzhxxqAR3EnIfh0WpXojnYUJB73tUVo6WHG36UiW62Zb57UYUKQJlLgA9UGWJcJRSuhyWWAPnhHS2dQ2_SQqQjaoBH3neWd9IBK89-E", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114307847396813475536\">October</a>"] },
            { photoReference: "AWCwydjo0YoFJ_L1C4cIcFYWLrYirce97gtB79XF98PL0DD4xuj5sVq2GUgSbmRO-hDnLoOk5rPN-5tp_CcJiGPaBajs5kigMRu0tH451S5HsOsdi_gZCzqtzMxQU24wN-ng96oQ8rOeQw7IWjJCgV2EF6VqE5wBxms0T94F5ek7WVzbwqTmPs2CKte-DdhG4hmdgYA3hHprNgUpV6oHokU7iQQc7aFXZXcNiVl4abLmDjfWBmaPUy2ml9gW5HzkN8KNbeuFO3EveA-rqbhcWwqDnpT-1UFfMVAh-ekbCX7_mjm6cpMXL2p3ITR3yQoCTwXvmfdIaunGZaENJ-aTvhxo6lMVnbUKQouvGzstCHqgjd60r-n5Hv9XZVRYrufCF3YNmTEbcH-LLLS3G1JylpJ6UeF4dYuN2oMHy98yuCiaQ3a_BeIpleNnbcv3KgUoMil5", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105259073646390310539\">みん</a>"] },
            { photoReference: "AWCwydg83YPdGlEGfL8j1QghxUORkEp1hieVa0W1mua8iXqACjV4Q_wkb2zKvtzxWm0guy3ieUB7qAC32kaiJdiauAk5PMquD1i7MY3HgHeCu9w1dVSGam3bUwsNGsz1MfqGAeB1pqZVu8TdMTw5_UROF7fa2SMV0QrkC80cwWuW7Y-TbYF4nTIEsYXNFnRmqPkfLIGFawGxUDFhnmx2W-afKea_Z-i0b-9HYlyrjWQOYztpuSU7gY9LSB_2LqTaGUkO2t8GQuUYeShOex-dWZgK-bYL9rXf8zFsGDfjuNxd5JW-GIhnhyFfczblhWXMsXJpWfrFAPefpvlvEXUf5kM1cR5z-ZMnKFauJEIp-w8i834W9dx-EQbGTsuFx5sGiERXBXFSncHWu3lzwfGuoOzojSjLjngv49vriN9_tf60B18DklvgOs3eZCHWGZNklw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112710430516069326912\">崔小鳳（Tweety）</a>"] }
        ],
        summary: "A&W Makiminato 기준으로 확인한 오키나와 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["루트비어·버거", "평점 4.3", "오키나와 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "루트비어·버거", items: [{ name: "대표 메뉴", price: "¥800~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.awok.co.jp/shopsearch/makiminato/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8960433303381575413", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=A%26W+%EB%A7%88%ED%82%A4%EB%AF%B8%EB%82%98%ED%86%A0+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우후야": {
        photos: ["/images/okinawa/info/restaurants/ufuya-nago-okinawa.jpg"],
        placeId: "ChIJ8RC5uUz_5DQRdeSUOqKCVmw",
        placePhotos: [
            { photoReference: "AWCwydjYiwwhZdxyK9lOGITg204FvvCm9O9edsfV2P0Zc38cbVIVtW4neVNAr5VXA2d5BjpBUrkOON0eVqjxSQdqjwbswnFz1Qm0QScVwSIT9xLlGEWXrFxS7cO7oGjqxdvvYluTR4YdOE12RPeZxa8aZAEmbL2E5WGmzJsq4dnO-rwdmIjbUu7BpkWNU05ml3Rmjqxk5ezx3nGUDMlr0NuYliuL1tFalrbFPEzaLcnxBZeP434ncygCNr7QUgc-rGy1Z6KMGG--GxhXRlkSunFCQjT2JDM7FSlzi0OpUe2xcCJBdmAjRWh_PnfO53ZxVi7T1XCw1ImhAOJYyGaE3tnWXSmVrlTTaEddRljQkXITaXLU7xtG3ZpO5Z81ZIGGInMoa2c7-2UHjc27_MkVcvzFlLSuv8WQujzVYfS5QRxHqcaopZI", width: 1500, height: 997, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101665273486388481752\">百年古家 大家 うふやー</a>"] },
            { photoReference: "AWCwydi4RtYoSJzRD7ho4TAkhfMTLCvDujvhX6uwU4KwjPl0a3y77UxO0Ma31SdTIHELFVn0ZoBqLCe9nWzsJ2L8ZOZPYayh4PnvnaeJSO5wVdbn4LkYHFwnPeC4VuOhHNMLXbECHuG09rC2nFpqQ2AYeah0-XYl3ZAfVkY8qv5YBTLcxzUcmU_h3oGQYc0fI40TfowHPRrPAiMYipW7h31dofJq_88xK39itbxMIgzPdvsNtGBBur7ijs508PiWqNfoIdq_4C4v1gUoBTL41eb9fsBLlnUk-S4HRkEK52gaz0yEy3lHnBY-T2dJwcmAhJbH07e7Cf1nX3OrTjBMJc4x8j6xN0VI0WSWmC82n-ezu1wGx5EuYliWop1puCe1aJKJGJ6BgIcSgL56cGQX_UH7UfY6Ve_4l8-p2_lDkDN0by_t6z4Ij0UQa5yCpmTl0FY3", width: 2000, height: 1335, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101665273486388481752\">百年古家 大家 うふやー</a>"] },
            { photoReference: "AWCwydgZ3x0BT7zxarJLd6YMjCcn2sBu39KjB9VRNr9CdSi0nkcI0DNFLehkrmgYunlqq8hBlDkgKw6jrs1Sx3jpauDErL5gY9bnNhgzx_dY-a4fn39D5Vyhv6yLCIJlpY1rAls4SPWLtB0i5lvHB2GzmUwhOqL4lw9jswH1mi9cnHdzSR6GQWrrNjRACJFFAPgd_t6yP8Q7c3Q0lUmRgTl33gFGVxQ8pgGAyv11mZQ2jl-h6Dm8F_3-gYymHWA_yzxnpgQsw8peFoBrTx32O_sz4bqV6FycBf_9lC-D7KE4CiTkKXHWh4lt6WjmjgUY1LW2oSdRnSni75NY2wHaOwQavErxH0BwL1p68wEiCGSIGYb-p2h12E9vm8lGTHOt9vJii5C-DR57vnDFyY8QsWQdtjSACta_4cqYDxXMH_0wyBw9Fpgs7_MEzFn3z-vbAsnr", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116711384826168227589\">李阿哲</a>"] },
            { photoReference: "AWCwydjFk0GvQJZTG9Tadh9poMeWCoIbYviNGUTwjqE3UgI9cEunxVKYWryo7lGx_AeUwKbRKto-ExE6DmU-Vw8CuXYq38Qqku7zDTcYopiD_50UeMusXcgI0Qe-zDvOzjwj41MKo-LRu-WezTt6QCmq425cmwtWQjg-7yl_aYv2r4GGPgbhG0wOVhBvS9ZvbDbkIb8MRcI-NIlT8o4kkKAnEspWThzcx88Hbm1VsA0JiBhXoYdhGlCN1Yc_IPw8BprtzYOSo6vQpeRrPEcs1vMduULSf44LN7kp8bNxoEMR8tdRzbhvRhIKc317oNOzRByFUJ7ifzU2T2VleMba1SVLz1OVGHCSHmJWXLXC1h9FvXDxovl0wjn4hyNO08ggxDWcCOOykZJ3EIBEsIMtyZ-8raRpSQA9rrKi0qYbQMl-7UU", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101665273486388481752\">百年古家 大家 うふやー</a>"] },
            { photoReference: "AWCwydiFiuuCrsaXKk6ELZeRKw-qMIdaZN9tavNTSXQd4TWQb0FfB56iGhBGzIeiCvv2rb1nhAFQPFhp1VZJ8xg-lNVABXmbEllR51ufnJ0DCpl0bns5CjFnDCdwuWZsPNWi5i92E8Qm70zH05fVClnYaMVQTlA62pBgyy0mDd7o5THmF0a3qXk_Pm8wB6y3omVVSKv1Y2cm4TmNzkc5WTXbpcVqiy0D0L6scvyXePXJUyYtYn5N4MMQmpj65V8s67bEo-EuoihCcebtDNo_NupU5X3dbLuS0L8A4YO1pVEwEME2bnATV_QSRFrofmaSaNALvdNrcBKPYbyfl7HUzlaDkLUkjQNgXyHq9BVlXUeLUs9F6QB1XGoXg8p2q8IvzLLG5OwrZNa-IZVVg2y8YO7b8YaLJyRQQZLt7J7YhCClfRvqGvyefHmCAP9JbLh4AGzS", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107708772390813850974\">地方媽媽安啾xEagle Garage</a>"] }
        ],
        summary: "백년고가 우후야 기준으로 확인한 오키나와 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["아구 돼지·고택 식사", "평점 4.1", "오키나와 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "아구 돼지·고택 식사", items: [{ name: "대표 메뉴", price: "¥2,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:30, 오후 5:30~9:00; 화요일: 오전 11:00 ~ 오후 3:30, 오후 5:30~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ufuya.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7806570637372482677", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%ED%9B%84%EC%95%BC+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "캡틴 캥거루": {
        photos: ["/images/okinawa/info/restaurants/captain-kangaroo-okinawa.jpg"],
        placeId: "ChIJadnTJG3_5DQRR_QxSU0-iP8",
        placePhotos: [
            { photoReference: "AWCwydh-VM8h7DuWVg4gvN-VW3S1b73JnWGm90dx8hwPeDHmo0Ej1zfu6RECDeY3AX5dmR8TF8g3kdzFo5_LMHNTwn8fvcTfu06YLWUeazVTuk0KIJRzxDejEdI7WVOL4-SfrksiZWlU1el7ICa-cTGP9NjJA9lOwM80heetM0lBpZvDOw5PTDCZeuvEcN9YeWg465I8JV7ha_ZEWjLDX_x-wQmmlotMwq956QJ7tTslA0FIb_kV70EopkxCsMeGLAqA0lrRXusJ1tSA6b3Zv-pBFHu3_Fz93rhv4kHkrCJAqnyWj8jbrcivbR0vlte4tZm6dQKoPpZND8ttQHxyl_d0Y80Zbp1oGpMTfv47mMX2c1qEMeHZ1pdvDIcokaGOHiMjWnligMB4Uph52dzlvBndEvu83lNzoKF6UBFPrpvQxnXK8Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113383935077727174746\">キャプテンカンガルー本店</a>"] },
            { photoReference: "AWCwydiNzG3idszFHMWw8Ilg2Xg_GpgjGPhKu1cvcYNIpKfeIesIspA1m-vuXqb4D-l5OBC2Vkc2DwQo6HPsaMFDHxW0vHIr_znQNvLD01EW_63m7dgJAacdmX11WqoQMLBcbUJDBGRWWdZQCeuyn71UTBJ8J0kg1-zOqXj5yWh0sMSNpX9OuYwngvVWyYLoLGF4s28ygdd1TCAKc8553RwOuVY5MogqXYgRjbJ0ePIpXPRZKkqK6luf7g_mcZODfKtPsbcFRCL45mCJDzxzlEek19V7zDuT38amTifqI2XfZULXnfl6ok5TIhB-RN5JkQ_NlWWFlaYvuny8NFBTfOR4TdRUKcnqANNtyeGxGHBFvcGnLqWYGvbIrt__2nBKRjNAfs3sHTXV_5Y88rQVB7pyQ_jtPSC-i_CvSQqGUKvWFx9rY_u2gfcrWyNYYUZDa8Uc", width: 1254, height: 1254, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113383935077727174746\">キャプテンカンガルー本店</a>"] },
            { photoReference: "AWCwydj08diVJHKTmpd00nNdCz3gISr2RQk1p4Ig8yjTrElojdlvfDZaMk2GCc_keVYxQqX-XS7XP_8u_qYKzwpJF4SwNEzjYAU01JOh8cYpO_Vh76f5YdsEm1i5iVnWlqWKpTk5e2NzVTOtK_YV_CuiJlosDg6ybJIbjwM8iYiqZ56r-7dMnKN5ae1moDncckwcvxZJeNxATHtFxlRLV-poBdSxAT2MEJd9QJB_Wb9MeGOdUVvNwLGWRx5Ti1Z8MjpsPrebddc_AF8scuFuzChyNGlAb37IylE3KFMiQch3R4OVohbiok04mYkpBKG4Kc521JW4L2A07XZduVKoQbLXSgUPydPM5QzK8MH9o1Snl8bGbNdxqdX7XdVhsgJq3r0vfK1yHfcntzqDwx5eqdCs_xePvAc-HRczGydVxg-vgE_v05isJwLIXWyGq6qlozTR", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113933648082960393072\">n t</a>"] },
            { photoReference: "AWCwydjkaRNRG6OxA0hRctbKARzFiwDk3bev2vXddOmS5HV9figRTQUiZLcgI8QN3PFrkZTvcjNflhy-YAf4nAjeCGiixEfQvdVs22Cb1zV0EuIjF5cSMOZ1tYBRq1H7iff9GxKKbpBE8iu1VwFWE-GrW5rvkh1aqwomH9mAALxNRSaKlz8WUxoX9FRi4NeXnUHoK7P3M8uvCBeLHsvLlNXfDqfm9eW8y9GQdhKx8gZAG82Tl4_QK4jBzEgHpMBTPjR61Cy-Q59KDwEECV0adRcMdGlC1lkmoiYBpmPKVtDzG7n2UGBmBcGe0iYlX_rUEPEj67zJQ_kSncwKTjqL5kEZV-0wJ4y4qRsSgmwR2GMLicIrfQzazf8-bW7bGv1SO17a_Uj59aYIm0U5QIY0QaUIDvAOeC0TntpRS-W2FTFhGDlJ3MEnIElDav1HP_l4YN1v", width: 3060, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106282942283595851865\">鬼頭竜二</a>"] },
            { photoReference: "AWCwydhGBTlNFCG_FBBoTX_ewBezGnJ5DdGu6BqOrRhq8rccUMi_dlWRzilVJuAYI_to1cAQ8yhwAUnQKcjLSoW-DG85wUHQhKYNiBpnwi6Y5pCrbAkUm4RmwvYBeOwLsirWktSquD8UHAA_zAZw_q70SeKpYM02R58lP7xaDlMbi0G5HR-8X5YzOeTlyKY9AzxFRIrlwxF2E0abLd-tDqXvX8sUEd_lzzhjLLB_Aj0-fYcx_MPQhTEvOjL-8fZAmMPkKDFenCFWjbQVSX1ODojRU2f_M6O9pD-C2WjvfjxA07cKW8PFrjs8CidabEjlloNFPRIEa8r6AUaBLwfhzwlthy0LGIMbfEediVxWCW5Dufrpgf-FW-ThMCWIf_21LFMST9Lz1vnYVqutwpgTjN32uvMqKpAr8kPYGZBxByHF-ucyvPy27QbKM3DWLZHAOgMv", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107630661908365795774\">C M</a>"] }
        ],
        summary: "캡틴 캥거루 기준으로 확인한 오키나와 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["수제버거", "평점 4.3", "오키나와 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "수제버거", items: [{ name: "대표 메뉴", price: "¥1,500~3,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 4:30; 화요일: 오전 11:00 ~ 오후 4:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/captainkangaroo_okinawa/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18413035578165687367", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BA%A1%ED%8B%B4+%EC%BA%A5%EA%B1%B0%EB%A3%A8+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시사이드 드라이브인": {
        photos: ["/images/okinawa/info/restaurants/seaside-drive-in-okinawa.jpg"],
        placeId: "ChIJmd6BJ7Ia5TQRUyElE61gZe0",
        placePhotos: [
            { photoReference: "AWCwydjAnQSZXc2tD-Iz_9emGX5h9vniTDSsNJFhh5Yha3GpPqqM1wGSJGh0FksJzLSuclEW_EKsvQhwqTsNhM35oiTzDml73aOk9oCuKeUDM_iik3x1cpbe8KqSHB7tNWvyWGLyQ6QLXCTneq4TsWCUZdM1UE6Ag4E6crmbKeRltIVmjh_j3X-Of6QKD-xHksxC9CUysQcTZcqdUzPLF3VQroSr7L9_-FD4zBSvCTnR4mWfPaREG2ASuziUDbYYAg5QFwsJIAy97-LmtzTTyChKCv3Tv14z-aImetIto7nyzqrUl-OqT-2vsNLYVUaKL-BbJabMC98tXw3rBPe9OCMHeOWqJNSHBuwgCYzFjJ35RSNZK0RmIYTTBJK7RlULGZw_DltGfJkPjEudFgC51ukeYnEjVz-o4Td-lkX-zRC1ZyHijmbB5xntKpc9S5_WYCBM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109288524288301254556\">Toshiyuki Ase</a>"] },
            { photoReference: "AWCwydjuIqKHL38lr9XZcUVOAx9iyESLHbBrl2BrfTZXDCqJyZjoGiBNuMhNHaXPakojBZvkI7Qm6m8za-bvbbOsaVqsW9mZE98edkpeLkuAsjSx3O7DZWd6qUfVJXQW9k_6Wh507I_3cbRp7hwnlkSiilpe57uI42XvbLsFFw806XE76PrxIl8XlA6RCt_LA5BxQ0YhIDVSqnWtEUO1tx7lCjV6W_xrIxYw6dAUCJR5MmN4L4zi6VEpgyc1v1sFbPMBdqyE283sNzUWpd10RC6L5eUlHFB5SIG-jMPrTbiqmW1kJszQrPQhTK5nFTzgqdVX-mjlHabdKPSSqWgoa6nIAhRzcdlElyJ3XR2u116JECSm4dSQsyKfqV7GHkeZO7K4ALop6Y-w_3rKZPSOE_8jKwUBtvuOEjeUD0B8m8AVaVED8AMYva2zWaP8SKSGQqXt", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111156334808412130112\">つじみよた</a>"] },
            { photoReference: "AWCwydjqNWUHZPaJ-qWfnz49skiQPDhbBkW_xeceK8kHGR-sGQrXB5mIh_JKDqTRx6wlTGYJnaC0FOnCfD13nxn8COKRGLIbv5JbBElRib623ufyCRX1LMe17bbDsH_bDwv6Rhz6pVWk4R4oiJUzkh68TERecAQd4HcEjslR0jGMWrislgz259Nm6uzHtjUY4WjULCncJB9IQW11EENs9XFnza2URksuMTvs_9bbEcmC0RasaIc5jMgz1RrZ5qI-8VMEZj8lzkMDqgIJU6IXfSwUFwf0-gycHDMS1FT78_GKVftCrqoAWAULnDIJOIydTkHVsF019gRUBhysy1hZ4tvqxCTmFEpkXKxqGEqEeLD5gl1Hdqb090t94bnibJqqDuMMlSKiAAIuiRWjZE6WJ_oKP4b6fIHk5_Ey90F8q4XHQhzcvh6btTc06QThw1sLuAXZ", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110270157956905097010\">JinSung PARK</a>"] },
            { photoReference: "AWCwydhIgI17pGhRcm5o2nt1fmFdYnINh17lrqqborfi26gqrD5qGOXkbB2Pl9GOxKzplHiZKA5HmfXkBCiHstwRG5ljehR08f5xGzPs9L9_Pm-BBJJsnqf9l7zbyqHzYzE-drIg2-RW3yWttuhWqYGCQXauANWiIN6mUn21rbtfjx_22qhn4Wy-XFXwtczwvIb8Syxj8GOAVeEkknb8JWzQw7CmGZ3GzcrLzKKgh2AmtWfJhFiwLgEOWaTdy-9bHzKWZmguGeK6h85xJmsqkHLzMm2tZ86h-kq8k4xCjbwxpU798F8yVHJYVk9b7d8pvSBeTEU2jR-Kepw5DVrX9EXqiql7qZZCn6bVeF7bpyqqdWD0GQ15fpkWXkCwDZKIooIxVzTqzfM8ULUMlyLC59l_0pA632pn6EEmXKj1vHZ6QkaDH6HO_R-Qu3DJNi33FO9x", width: 2364, height: 1774, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113767299905118224105\">MIC</a>"] },
            { photoReference: "AWCwydi5UfqGoxo62pc-qAqviikJY6-24ht8xhpYh-MNCuFG4U5hStdWTIXRtA2_fdnpfxy221nFQYlx7q7fFed8_1CFnxlL926E_0VVLqMy-K6q4L7iT7S_e4zI_cd-J86iJPZd9_wQTesTBoVFymB7eNSoA8n_8ruMC8ct5albUrKYhKtqohoO8sVm_HCsW8USiQUubUrBs3wX1gB9SSzEjDPcedFad_IlCGteLJ4jYlKm2cULwWcBOSzqDG4FFfrdaSP8ZaRvYLneegMjxKYFxenVCUiDYVKxa20absrOweWYw860B1e4wpRU485cA4-BE2RxxdtuEIkkV1fklXVofjuZQP0QxQ3KF5yTOTmcoxTb2fp6nZ2yBehBNf5ylGQRgMWb6HRU1UtuZpRTcBwxMwaYUlY8uobkITiyksp-RSL7T-N0Gz0kXPhjF5PUv6R-", width: 3969, height: 2977, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112067691150359757265\">M Y</a>"] }
        ],
        summary: "클래식한 미국식 식사와 따뜻한 수프를 즐길 수 있는 드라이브 코스 맛집",
        updatedAt: "2026-07-13",
        highlights: ["미국식 스타일의 든든한 메뉴", "깊은 풍미의 수프"],
        tips: ["해안 도로 드라이브 중 들르기 딱 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "수프·미국식 식사", items: [{ name: "대표 메뉴", price: "¥1,000~3,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.seaside-drivein.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17106185056103506259", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EC%82%AC%EC%9D%B4%EB%93%9C+%EB%93%9C%EB%9D%BC%EC%9D%B4%EB%B8%8C%EC%9D%B8+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코우리 쉬림프": {
        photos: ["/images/okinawa/info/restaurants/kouri-shrimp-okinawa.png"],
        placeId: "ChIJcep34MxZ5DQR5VjNV0a8HWg",
        placePhotos: [
            { photoReference: "AWCwydjJO4uwJt3L1KnFV-u0AAFWXYClGBJ8x4kYC9ZstszDxArKHsgttEV8YoR69jweJdAdy5F6riG8sLuoRoPTHpC8tjz1PTxMyPuvwefjKO5bsun7JexEkkdW1ahwueQvIb4izWNHrhRcMA18StaYQoF3zssDyS6iFfBgvfvHON1yH5uu4wsDLoMU-L7bHlcsxJK9_vN8qyKGL8CwSVMvn3sfUAsQu80Y1ahd2t7FfyePxvt9QhHXJ4xs72iecKP8qreOXmnrDYnXr4hAAuxEr92KQETGm4j4YC2TQr-NSKLnl8yeAyLH8O1QDCasbh4gRuygWs82AyOvq4-6_InqEGjnrmcgWJTLfFCpsOhMqr8sEBgxciCi_wgy8FTDvrE7TV896T5wA1K6BIxNWXqr1Ts8yTKlkBEeEbze753K_Rg", width: 3024, height: 3025, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107425587719322858862\">KOURI SHRIMP</a>"] },
            { photoReference: "AWCwyditnkExsXtBf4VtLMnO2Lt6C7BFGqOKd5mHl81nZy8lOe1Efvq5ca0-YBPecrhB-vgndIn5Nz-ZXVqMZrGaPGnITX87rgDqaWiVhcht-YAxF6ACECJaa7FEJ4VSQZxNtttONSy_2dRozjBA5cS_wv5ug2KRWnIKZn_hz8vqobPcOieVs4-OfkANCnA9mFu_9xV_y6QdIENQfRtezs4OUJ0ONqUJ11nP7vM6VQBUB4vgNGDBHoSwPf9ZcosbPQvPMrpM2E3_u3fwstjYpfMaLR4Yi7E2vpg5oN0H5UKKbT3WsIZ65ilxnPCK6xWWAVsHqqYZIwGqeN1gnXA0ZTTZ2JH45vradrkJB-85xLv38l5Y8vOACL36Gq5KBybakRQbFCMvKqCRfkQAXyQ8qpD34EDQXXvGtBe6SGrYK27RjKgPO_yxt5uk-GJ31BODkQ", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111601226448488517728\">JC</a>"] },
            { photoReference: "AWCwydi5TMt4rVUKy0ltw5IdR0RDzKqwwhzoRutbVNbvb4V5_lDqxBGQqUzvMgDBbCG0L5K2mffVMQp1HalfDcVz3Cj5tmIP9HyRbFTc0A1d29tusz9DuNzROGmGf1QdFj31_Z6qetxN5KCCNT4RACWta0O0F4QtkW_qmXlyubIETn41eI5XcS06TQbJd1e0iftGUT16tgdKYVJWnPwaT6PVDegiJ0uO_GZGfoIBBajXfpnGpBVJBH2d1UCMRsXdcekyMLfZPSW9PoWPAiTYWdUxn-KhuLLL3y2wFjap_-HD5DNZlxrCTym8m14gtuxe0XQu7Ep6N9XyTH_jRpOdIg5ojfpfNcZfYx0JpGQ-5HC33GXD8p3oMDJeb_48AWMAlTRzKOM9ZtWEDA4BIbSdeGwIBm0GLSbOG06OmSwDauV3lQVBRQ", width: 3024, height: 3360, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107425587719322858862\">KOURI SHRIMP</a>"] },
            { photoReference: "AWCwydhlu4PZ2q5mXVzMEXNE8eZADp_QRcJsnLrzGgAuf4bj8EL_T_IlqzpREsXZ_yLSxn2d9UKN3ejU0KyyAIaC478YjCudrZNkAORJ6Zmt4GgGoO5s4RzB_cOq4_CW76x2Z6jsp-FU_lrLRoap4j5yts8NL-HRG-V7O8UI_oQ5z-JjiJ37q6uW_rTm9AuSvwVp8GOf9A29K4OAHwMEB6lfuZVr1CkGDws-iOvlH16B66VNfb_nmlkLDSM9J4e23UNz7HFuFX0TGJl7HZZa62EJgWKSKfYX63KtHD1I3XvXA84KwwBdg1dx9RaI3jiFOV3v7DLC8Bbsqp9WHPNVmouYIWSSfFc4ezA2ydYeBW2jlQW_0ta9Ejwf8-FzxkDxIk2sGBj25sMsE6XrWaHR8Ug4PYNTt8WPahwFlkcZIcauTmfu4w4wLxF0XkOkVe-97s-P", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102610575307522499252\">Harry Tanner</a>"] },
            { photoReference: "AWCwydjSAP5cK0nRbm9xenNniILNhcq4DPXGMAOppUzvvdGHBjd-o-oNFMxRWtCEeC7hVUaYUZVZE13IlcTKpP3muNBntFLtyhRNPwzrQ07hLnqQP2xKa_2f6X55O7ZXLbeek8UBUT7lMQgTGTSGL5IMPx6ct9Lqp4FOcangZTVqCnkRXw1Vutr2b4Pesj0twKMiSKhVY6igkjOlOD3A6AfZ78OAxp8dPQXWOMoypRTAcsjHog4k4UESvfxSuG4Ugc6riCcf3Xfar8KA6qNmBILjW4OXEuNaH5-CWf_-7FAjM_13CkwiKHq4SAuMh7SJwvkRz1x-Sw8R1wt5o0pX63rQxe9ZJhYy8yWmoum5NBfSCEUJgz1dbqD7r_75ghNdtaAZCCfVwE051kf-cYhXxdLzHZUaDasAwCF78NZeOF5WZT90MY268Lw4A3cu3Nsh1zgY", width: 1024, height: 683, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103649903797690736116\">劉家豪</a>"] }
        ],
        summary: "코우리 섬 여행의 필수 코스, 마늘 향 가득한 갈릭 쉬림프 전문점",
        updatedAt: "2026-07-13",
        highlights: ["탱글탱글한 식감의 갈릭 쉬림프", "코우리 대교 근처 명소"],
        tips: ["인기 맛집이라 웨이팅을 고려하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "갈릭 쉬림프", items: [{ name: "대표 메뉴", price: "¥1,500~3,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 4:00; 화요일: 오전 11:00 ~ 오후 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://lovesokinawa.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7502359564575922405", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EC%9A%B0%EB%A6%AC+%EC%89%AC%EB%A6%BC%ED%94%84+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하테루마 국제거리": {
        photos: ["/images/okinawa/info/restaurants/hateruma-kokusai-dori-okinawa.jpg"],
        placeId: "ChIJc9qoXXdp5TQRSLlcBllpeH8",
        placePhotos: [
            { photoReference: "AWCwydh1QqptY9nTyPkYFTzVdYdoUR-uNHdh4VsZ0mNS8F8BwNHk9-4_SHngFFld6EzVIeA4Pyy268J-DaQBxbhuW9KQr3cPSDJNHF1Bz4I9awmxMoK-5DEBLIeTwqQ0adfXDEcHygHb8hujsbkjhIzRzPjRPHZAwOukuvWZIGl0gRM5bVmIPh8Jruo6gOk4UgTjcM1diVYrXRGkgAUyLYG2UWF1oLWgRpLXou14B-kX1JHWgXE1Y5jnC3WgAaISVlvnfoVLXckWysN67v6v_nE7Rt8QaxFQ2LijRvJYVBNcRTZttm8wCqiM0tKnjrVUDHB6vuICb2T1ynfZ0BN3ouDasiW1zw0UYC0AB7RmzSGm4Mnxlejlvj6ubQDN-6Wo9WbQDnm7sXLAG61le8JXYyLSuRx-vEsPPiohQk794GJGPoQIDhw", width: 635, height: 356, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115226261641147692350\">波照間 国際通り店</a>"] },
            { photoReference: "AWCwydj5ukceI_5UDr0OO0430N3LIQFHfno9NN2pXHgt08M202MS6Pd1e85KwMwsYKbWB8TTQixbFzA0fF2dlrybIU3B8ygQ5S6ipn_92-CXLZck9ir_f7--6U3sFe0X3Q5lIK-TtpOBxE1Nz5vd5LT1FX-qmJ3-KxwkmSGPFSmm-ZHexojFGShSX7ZdXwo6oi3q6GFVSTngyff6Nuw5EkIhWU67KoYrY-XChUfjpFFFLtc87KCm7Yc6UDKNNquKvwncfiAeDrC7Z3Rw3VEMT8zy7orgf3rZ4q91QFM7waLq1fGJEva9RZyTyQNJ3Wfa06nN23wsvBwFhe6d7eFUCRkwMIs3fbWsFGeOG2sbrzM8gTs_ZPICqM1VrBCq3ghTQP9Ws0ijHD4YqsY6BHWV0ttJis4_P3VFVc1Fge6o7rtWzL88bvsObG62wh5F5B8H5kk_", width: 2000, height: 1296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115226261641147692350\">波照間 国際通り店</a>"] },
            { photoReference: "AWCwyditdmaJM6fl4PpFt7Th-dEms9aRitm-zE3rZ-pw5zh9430mVygmTFj2jlQVQ9CE_n6lFQAorWZwMw2PsDNhaJGKoHSF-ZmEg6yMzeaW4b8Vwzj76u1rH8oYIRwXR2orQsYyxumy33yvpy59oS_Jxi-TMc6-9qcCpOU9i6dVSlVwfSahKY49knlASGjBI_an-2OhfpD9hpGmJwFCSkoXKNr74hIT2Z5AQynO18OGVjQ8pPt5LL1S5gCDumliaynU7JCZ8xoDuINnO-9Z33EKaFaXCsyIE1oh18Xi4voIhu6FeSy1tb_R14K3g8l56OKrtpCu_y_EW58kox8V-ToUVMgdwqAQw_1BPkOoD5K2O87oCUEMAFkZXBZbwQbrF0l7m3jkWFUlEwCRXElHh-iuDPrXydQ0YPKUkJBkfgDTffuLfNqpE_m1HdKTeNmvGenN", width: 2984, height: 2305, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114464634914139626835\">T S</a>"] },
            { photoReference: "AWCwydjpdKCq_4gNaeHgEGOMdamHO9ygS6rYT8DaXLZHbyz2VHqGZzOn0xMcczKZeVaQOTUg2kJI93i92kGIjGbXwFl3xyt_AjqDFF7yBVQxw9KJo-Gqsa_1weHq55mbVygATUKUB9DI6apqGbsqw1vnQZFghcJUJHTMdBHpGWDjP86KY7Fo7ARFZUMw1O-PBov52PZN8VQmSXhbccHdsP6QET_uugQTnUfLpjVsH0-gWWyuSjDN8onQ7BouQRynoFyQsGh14WI0XcwQcjLhkaBuds-XBLKWAB_yV5VpntPG1cF2CarILdD5E2m3gASBXKgCF71dNJ_6di0Vvn6kYHdpead2FPHnJIhyah3x5H4ddxcElkgXdxdvCK5946wkBT1eL2JnWFMDkM6FY6exAf5zc0MGXfvujaJwNrDT-slnQB39SX_f-MzA9gp2mzl5qSQ_", width: 1560, height: 1170, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113914767626651761426\">Clio CHAU</a>"] },
            { photoReference: "AWCwydjGsvAXYoCpDm7snQAIDPt5cu542l04SdiwLRT6vfgWPfG4NTLQPF1IrLYNRgPuUu61Kvy9A2N-PB1h_8V5wZUn4EYYQ1qtCJNpYk3ulhy23vRUUjK5XnHVZ6Z3v_ZlnGVdnYCpuKTy-7iBy4JqssB6S0ERUoMx-2sY_FGtv04EnB8L0KNQ945udspAf5nA_0lt1cbMCSEUVyISIrMIhS6djsbWysRhncGpOlpC2I3r2XcHoot-0oa27-zLjF9-Rh_COmt8hnJ0r5n_F9ZlGKGQkXNI7IPXkLTaCYd5QYVwb3lRY6VQ3mzJIJt1ng2vtUR5wrxhjGmDlvnFhlnRb5ftXxgIf68PTvz_YU3WaMjZ-7Ybz3kq2xDHTDwaRUgPrgwzYKI1l6CgWoBnQ1H0gjyaWYq01WikseAgfe8JFkbhBYTVyPLvZ8mrilRAY_d6", width: 1654, height: 1154, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115226261641147692350\">波照間 国際通り店</a>"] }
        ],
        summary: "오키나와 전통 민요 라이브와 현지 요리를 동시에 즐기는 곳",
        updatedAt: "2026-07-13",
        highlights: ["생동감 넘치는 민요 라이브", "다양한 오키나와 향토 음식"],
        tips: ["현지 분위기에 흠뻑 빠지고 싶은 분들께 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "민요 라이브·오키나와 요리", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00 ~ 오전 12:00; 화요일: 오후 5:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tabelog.com/okinawa/A4701/A470101/47030592/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10216029636081029100", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%ED%85%8C%EB%A3%A8%EB%A7%88+%EA%B5%AD%EC%A0%9C%EA%B1%B0%EB%A6%AC+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "국제거리 포장마차 마을": {
        photos: ["/images/okinawa/info/restaurants/kokusai-dori-yataimura.jpg"],
        placeId: "ChIJp_frzRdp5TQRM21nQKlERjg",
        placePhotos: [
            { photoReference: "AWCwydiFTVAEwg9UNnEjGMLxT-V4EwqOAU-IGpNf09kNpCogIz_Rp-Pa94cvegr7aN4AboS1xcb-ITjiIzxI76phaMkUDiaJ36dRCH11I6jnZnK1WXYrOjTwIksnhgc9Xl4awEs7ABCLS7uFx6oV_VZNa0G8AbX40jzrAfLjBpo-Md62hekwuaD2YQ3iCP-rZ4B6Cxx_ptmfVHzM5xu6wIY0F5KyZdj7IaxpHDuVw4iaE6NsyH3APWUxKy8sTrIaWD11LdG3n5YBX4eFBfRM6dYbT1TPZJ2bz3dkdB_sCJid6MJBCfp7mo0b0rW4MCy3QLrrLxtEfOvvDUBIL3_XBnrDJF9sh8Lbeprw8wJJ4Q-tAt7BcghcJ3Ws7mr913za-e3iV7QdQnTJuCzdeXeM7dpLXLYHvhBl8E_5-DPQRXs1kd5WtJCMMtBMt4m983je-QuQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115440112633103854353\">Howard Luo</a>"] },
            { photoReference: "AWCwydhDEmydkYml5E3Z2T6jx4Mc-4x7Ov7UBNm6Q72wm10nQOYJ98NpjWQNibSisUFmqhnXLxKxk56Vk3ewYsmYO0A6gX_gvr03tK25WNw5V5i5aPomJcps8VsS6gRTz34woolu8ZqRZuUzzzsId1YwE5xUszie3Iv3M88WXO_4-vRsMIgS75cEwnJvtVY9yAgYYdwJLW996g6VyTQ7euvmDswZLbOv4qDg5BYXYpkfsCd-hLs45d2aSaIqI6TcGqDENqIk8SzxU_ijGvYeppzMlDPzqXQ4xdsHjtshDFuXETiLrDfrz0aujgc1u1befhP4meOzYP7b3diC1y9RbJuqcO-j2mZ5DST-aAbwfVWUgHEM0qXmDUFiAsY0SqUCeYP8XHtyZ94C3oiUlwafkzWGyFGjgiP4NLo0JNrMYJcXK9tFqw", width: 2305, height: 1537, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115372038856376666456\">国際通り屋台村</a>"] },
            { photoReference: "AWCwydinq2xC4u_PeUn5ZqYmohdehZPPlTbnIExoIhlFoBINuPn_zSWo-Jua31iMS2jSq2FVqqq5r_voHLJaWe2sxMtnW2QVMHAj82ErOGXZmjJjmx0hxAi3FQlGglh3sgi86UrvN7Lvb8j5EOzPJbdIuY2Ubt-M8GD--oXO7G3_OMnXsV1Beg3t-tApj7wOvueY5y-rU8bAJHc09meJ_WCPXZleql7z1p4-htpqfkFz2_uFaowJwuqesvB-2JX9j6dHTSAONerwWal_CLBp9rguQSpO9yxaH94c6Tl-fDGU4kN4bXeGx92ngpG_cFospGXRERs5az6Jl-5kcXro1q4S9en2JMZ5gb92yrRI9rBJWzq7LAQz_A5ryeKxbpNCFqFNhQk009hIHXu5l_vpwj-Ucmr4FDMQDifUBvc5AZNGFItfsIDMLHAcQTMfuomnvp3S", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112106135997119029439\">Mina</a>"] },
            { photoReference: "AWCwydhKamyNjTymXqGM_6Ur5ZD_Hfg1mza0SSd5f8tIdDF_LumDqoOdTSkwWv-jA7o9qHnYW5cCjOlOaYqqNXVWPBLtQJGY4tZL8W3wH9psc3RbLnMIHovCLXchG8L8waf2akTc57KRndhNgdVUO_Wn70t8_Io3tWeKqdSXmcsJ9YHCb8D-xfxOoGkrjHQtfqPnsE1uAEpPlyOyFH96g84AuiwCFCUKDIGWoW8YLBYu9g8tc9dQJtU7LDiqSzrBft-taUF61ChEBqxtifO0qIYep1akGamvhqjGV4TfpnRMXnEHi7aCsOzfblDcsKNc4BhJIyPEol2EQwprL5MjL0DZgStuyKvJLGyZdloXLqdRX-zvVHxBrGReO_Jz0fOlmUqbCeQPW39pGXwJvW0btYPNCFhuulxgO4sBO6LZhc2UZak", width: 1230, height: 1692, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115372038856376666456\">国際通り屋台村</a>"] },
            { photoReference: "AWCwydhAL70lG0hrJvRc_XBRMaCc0m1tkB57jwamDWAAlP70ILJxlV2C9WotHG8SJPL41e-8F1SX9Oy-NEdRBn2fBcc5zH8cnETcH52Rvsb4BXITBOTASaw8NIJZr2N5ejEJv1sGlkoz4oPg2diGctRhs5xyGT_DATve_a4jgiIjiTTTJLLFU7lNPObuCpxmZAsu7GF521-Ir8zHOQgxHiKp6JwggDnANFB9rIHUqQbDvr2YsUWtb9Uzm0Np4sZODLaRXcldwQni78Vt0o8xJF9XjLp-4IVkjM59VyIirp1NyNsg_-48RI5tIJMlDpindXLLcImRGtD2BQztr43ewLtbRoLjCF8GoEvl7Yz_yh_4Mo3MAUZPyxXOC31TvzljWv6jAEQBD9VjNLJ6fGD9O7lmUnk0Y-JwJ_o5ODAF5fW7i9RK4LSP9voubW9fDi-vSA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104334661538013673715\">Ping Chuen Poon</a>"] }
        ],
        summary: "오리온 생맥주와 다양한 현지 안주가 가득한 나하의 대표적인 야시장 명소",
        updatedAt: "2026-07-23",
        highlights: ["오키나와 스타일 이자카야 메뉴", "시원한 오리온 생맥주", "활기찬 포장마차 거리 분위기"],
        tips: ["선선한 밤공기와 함께 즐기는 시원한 맥주 한 잔을 추천합니다.", "다양한 안주를 조금씩 여러 가게에서 맛보는 재미가 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "오키나와 안주·오리온 맥주", items: [{ name: "대표 메뉴", price: "¥1,500~3,500", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00 ~ 오전 12:00; 화요일: 오후 12:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [{ label: "공식/지도", url: "https://kokusaidoori-yataimura.okinawa/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=4055004008214392115", type: "guide", description: "지도에서 위치 보기" }]
    },
    "왕WANG": {
        photos: [],
        placeId: "ChIJFSFuAB8T5TQRrrkbQ3XTOAc",
        placePhotos: [
            { photoReference: "AWCwydi1ZB3zaBxiF25uNMNLbTNE1Sq9QU3MZlqzFX19rsjU24pvpQOOlooOOXU1w90GQqD7qPk-GaS0XXzCWDB19KPpFnItM2irgVoOeSGKBvZIyYqN3UrJcJF_xNx-E-EiXAvPc3F_Y67S2tjXuwX1Rqrmx8WruMrT9sQwTKG0N63D-t0-5xLkRxE1xHd4-THAgJvrTgzfRusaBzliAjs9itth5WkLomPwjbzDr_IyQkHTtnjY0rVOfedywL5B3Tt0jhPlebfClWs088p3jJ7z1axCesxTqDX8N-dHU7mzRgyJgBXNrI5YOfNLFThmNeEL-XvUX8jF3S8MylWMBrN8H0mD25a5xtGHJJ5PWl3cTMOq8gaxRXwmBoQ9HfQIDKbPdpWsw3Rsa8W8yEun7sFpaNyX6RabDJ_WUvK9S11XTukwPA", width: 1440, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104919591940320722146\">왕ワンWANG</a>"] },
            { photoReference: "AWCwydhCDYB0LL1pgCXb6mgywFA7qv-MXXg8FF1p3_2aa0l8iGLfa58Eegcz5qkZUL0wwUANs8e3TW4Xuuifhdj3qziMgyI6dMEl-akry4VZB5wyejF627iSHiHutsik60JDH8QMKDvaATGQFs7Z6fED4lQC-ZvkehtFBN9pRtX3kAvr-KE63oJhnnhHoxzamhPKXRHs70yPdJf4rENAtZwObmvfjEuLh2JZHUcIShUgn2H2hTmQW7Gce1-Uk4hNAgKgCTufo-e0dG1wYAouJbu03W7gpQXwVrowTCGZuMv7SizjRniV3vSPI-nNbCmcEDJSRcpTuEwKlLmmpZ_06T4Tq4p5apnXPQhJKagiiVNFEjg83NVZl0qc1AIgm2AnnRVUrJHuVRYc6yxQMlFWB9IVTuoSKBmejsOy1u1cOS5646I", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104919591940320722146\">왕ワンWANG</a>"] },
            { photoReference: "AWCwydhJYYAGbO64Y6wTrop-2pmetQ8_9MRwyeZTiks8pWFBbj06oIa3KsKWwy_GEHgzcnBEDJMhJLUBUxG-8P8Tw5dlaAmtTYtI9SiSTEIw7BArFOt0-NKjtb9lMmiDTvgBcMXZcJf0UYMmEm5uNIlmzwmqUPgZiI-SNBVR7hFgaLHJ5O34SDAspQECMSd7SVLsuXaFNfisPfb9DhUwf5HJZebEofRP6JBEs2lUIdXRgeK51csvIWrL8OJaaY1qTU_o8YR8sUFXSOje9TJiAu5FMrXFBRmrZ0PFqB7GiYVc7SdZ9N4crStV31mvMxzm9WTDj9qH3buzAEyno2rceezGxzbE09VymQYUgV-Mv_VY_GISiRvAvctNXKbHqv2IingzHoV7Frxe3x7b9uYTC9RMWOGbaMjAh6mULHd7Qxa88mSBrfFuHuGev-d3kSTXVU1y", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104919591940320722146\">왕ワンWANG</a>"] },
            { photoReference: "AWCwydg_mEyeG4LOOuB7qr8lj420hC6AE59FHKeKoKiOWq9WFNaqsZv0uYDYE2Wbe9Ip0J4MY8pIVqOb7Y8MBmU__1YBY1grsEX-SaD-7gSWeUn2oumisEvdxiULVGyDaM2wf1_30IQeeF6MIC-o9N9jkQW-c6ARjcDF7xX96-SnrpX68BK3czhMttI3Izm8mVfBYJIrN2q3v7jsduu22u7nlIayoWijFx07QwamCv4Ew9kU7TZDTFfcycsAexjjOwf3cnhqB0h4Gv4xdqGWkBmiLWWCgiYdO61bMXExMCz5sST9BNjmu2_MGbJIT_diX_hZkgzQBIXzWHKicc-wLi6vMbYJA-Yqexhjhh637es55ylwVgkUoS5nmGtA7UMGCg2ORDzEF_FVAoTHAgIfvWIf9O_kmbYP1rU0l5IBxm9DD7pG1w", width: 1500, height: 1125, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110314779252313173782\">金城智史</a>"] },
            { photoReference: "AWCwydikBDpD_oIAJ5uhX0nZQ0fvx3HsDmV2XpIzuFSrtqjjgjev5dgyIgE4h9MlG049OvdZH6mcE0MkGK4c_LiMkxYt1BCFLPLTFtcUkuEFtCd81-bYXx9lFqBL2Kvdt6hh-7HelmVr6r57M_W0IOsxnlH12UdNkGyUCRzBXXTRSL5xleNQn0LAMB3hnOC5fPdLEPo2W8_LQv4wO1BqM-dgcGBKpyp67BZndkkzjcEx9tI_l8jADDdSO1sGwM0x6DiR52A7-fo7Z_N_x6WR1noq_WyxFoBpOV_Ic6RdOB4GdpeuimHLHBBMoM_puShjeHOtAlGRFmJUKoZ0lBYcAYf8-4py8UdqcD99Y2wdoSTugl0zX3enKcunKm17TQ9OVe2_zqvsYPxLNoQ6LDtyhKP_Vnqhh8_2Rx_46h05DwnFVm91CA", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104919591940320722146\">왕ワンWANG</a>"] }
        ],
        summary: "다양한 밑반찬과 두툼한 삼겹살이 일품인 현지 한식 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["훈제 향이 가득한 두툼한 삼겹살", "12가지 종류의 다양한 밑반찬", "따끈한 김치찌개"],
        tips: ["좌석이 적으므로 미리 예약하는 것을 추천합니다", "주차는 근처 코인 주차장을 이용하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "삼겹살", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 6:00 ~ 오전 12:00; 화요일: 오후 6:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/%7Bwangsangho%7D", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=520398257551817134", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%95WANG+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "홍대치킨": {
        photos: [],
        placeId: "ChIJcUnv5yBp5TQRROokqmFvtnE",
        placePhotos: [
            { photoReference: "AWCwydj6USHI6EaBn8QPurHk0fz2YXfpbHnqZp7OYR9QWJubxyROwGs5NSq-nq1GLb5blRm5n7S357dKkBfAZAOftB_l-IeKg33JVRCMy31qLBKdt21PFf5NT_nY7CF3KwMQW-V9gZlwjkvcwCMc7tkDhjTECq6c3dWLQpNHZ4cwAsemu2g_7f4UqFdN1qCdyyW9JjRxMi_GdS0awxTdZHJ5BKiA6Cxw-jUCr_-K3k_Dxjpj0lN_tRBZ4kqnH-vFM7WMEbVOrJQPg01YE8xAZUxa7-JRIIelerp2m3kP6r8jwmBq81HVeu54FnpespxEcZm4U4Bq46acqSIrWOax72cyGl2s0iW08VeW2OM8cYx1y50z0-qTc4868PJB0W7kRZNAyy2wHmZl13BRFxtfH5KaJ-UNJhA7aCkQD4rEuAOr59R909VY", width: 660, height: 370, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108285585264287803824\">ホンデチキン</a>"] },
            { photoReference: "AWCwydgfuldxxEYVveXA6SqmJZ6En4Nz7RWJcxLIw-ZPPM-tCxzraUbAYmsHAeg8s5V5EKBtVg-4hnpj7YKYiIWq1yKFXE8s3_d45Cq-Nv4JoNDsF8IyQ3JECBx6Sj7COzd242XSVALZuSXg2-SyPVa-nGqGwt49C0pWJn6g0UwrW2zgGMSLsn2jiUn_TtvHnJGzMKd0II7q4J_RkYKEtRT77LNB_dKVWjXQFpWq7jkMzqA5CsZpfglQ4MvSoW14JbMGiKAjYqlc6tP1QpVCSTFU8rl3f8x1f7jdVUV6Ab1K4maoftEFm_8HiNjW21nChTv02-mKP4WMTADoG3sElMx4QctjPyXMSlliuK9UtvpKqqIhCB_8YyRbry1SjEhDZ0iLRdTZVObMpmgIPgUfKeD7nZCFUb3ceD0Iy5Rbh48oPxGfS6QU", width: 2880, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108285585264287803824\">ホンデチキン</a>"] },
            { photoReference: "AWCwydi8Hj53Zmm0uip5SRlWzYeVa8PMTdYjEwEF9Bf8pbiUepJO-zwtrRfuwa4oCvMnwFLqulgU3gWNUJ0B2bS2lwqrwVcas8awJyEfyuDiXOVZVOXbYsKaN-8zKYcbLySa-Xxb_Rkxq7j7bUenpTrdCf8AxitM7AVCAQSk-p1-fkwsa5FwZbD9e37xVhsGsvjjOSITLCagX_CDK9FKwBU0269hsQVZ2IBWQRgW9kmzo4RsFTNVNJMhj0qtngmrDphORlrKuJl-JEqcnaqp-2xLn676ZGpCELX-54Vol0LOKZcZNulNS1EgmH70gMgQtdoZcIevvFrb3A5cId1w-Cuc8rYOMkqMZ0DSjYxKSUN30yYtt8F-dsBMcuWTCYU4UOULVl6ouQsoNgHC_YJVC1rblX9CNANq05KYRb8H09IJJa9bW-PFrhMeMzZf8tLmTWHb", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111120303796268596023\">Po Po</a>"] },
            { photoReference: "AWCwydiby4X3Nd1t5ZVb28CCLeUdVgSS0aiEPBzRProtk5_PkXoj-d0G-ybY-UommGpIN6NnobxDbertyOjpINFaxw6WmkzeBRcjtdaijVLkpDX1zh4KS-XVvTjQL66QwI5v-npxnbuhcDcKeB2KgIz3a8C_BtANqunaFeT0OftSCHuVEAxNMFefmEK86pGsQMmY6StBl-1PbVDKRxnKtv6FYM3Cch7MZbgKz4t87iEBe6qG_T4nDuqLsFoofaLrEU97z1UDyEWs8ia03fG7dRXq76vCuPBE2ajbppnBsfQndTAwmwtvEpQDxwhDZ-McLP6rmrd0lVGTXsS6Aoup8ZVNtMlRjhnfxsYUI2Elhh3YyYd0cdwGpw_PSLjVsp1LhDQWOI0hPq6oyeqbcELPcN2oq5WalBV93qEZJ_q8WouZVJYTAnAiziFDSg099wjPLibJ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105441744218923914894\">Sach Lee</a>"] },
            { photoReference: "AWCwydjj52R9W3gakOARqIOZ4gNLQtpSN96VBpkVAdcttnGAjUANHvPvSgOhYqcnGL2y75M9ycy5FMFJVwgX35L-8cssYTx0BjHM02wlHWn4G0G84akBYtPe2SAxpdlN-9wck0njqCbVX-2d4ihmjz707q_TCDzjgyPTj3ibd7lfsP2zLqTSsH1aH6cMsEki3g2-kJi1dR7rHkRBELiigPWrouGLRlpWOSKDrhy5uT6WrkaUwT2MMjkQVW8hC_GIzCN_CNDE8-9AV898pKjI69BHH3hF9Es3yZL6t93orPvQCkCTqvm9bBjfaut3NNmG-DtNV7rR_TUpAj6avJj87cY64qY--RKrZNnbgTgE6semckOIb1ij6Zpgye7H2ya8pSC4Eu6-gZhUef625TH1UBk2cRdn8_swSEOW0Urdr4YeqNaKh0C4EhGhZ4ul-gVE1w", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116012352434818462775\">Jessica Moyer</a>"] }
        ],
        summary: "높은 평점과 훌륭한 분위기를 자랑하는 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["본토의 맛을 구현한 치킨", "매력적인 매장 분위기", "높은 고객 만족도"],
        tips: ["화요일은 휴무이니 방문 시 주의하세요", "저녁 시간대에 방문하는 것을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "치킨", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/001.hongdae_chicken/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8193859037304252996", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%8D%EB%8C%80%EC%B9%98%ED%82%A8+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "URBAN DELI アーバンデリ": {
        photos: [],
        placeId: "ChIJNwLfCvoT5TQRQ8eXxOIe28c",
        placePhotos: [
            { photoReference: "AWCwydirx_A8ZPimWJlWU0sK4XHC0wmqNMgZX8wR1dn5fv1velJ-8Y-Zt3i8GEsjY0NB0nRuYKY5SBIG3Jz0cTB7N6LN319jkEc1OSwMZJqgUMuFRlI17P94aWMc5I7Amm8rmB6wDOuSyBI36MVAGwU_qFs_O-xOEeBc5FJHK8SUZVE5Mf69ASzywrtamqQYCM2he5ndwPFxXx3z3KbJPHztWYsxsP_I-VVz30riEJmzmQldn2n2vQUM-1S6FlP0wKsMuDieR2RJKPScZhr9HtuM_CQPPcJiUoXLB5E3nRWMiwYI3jjoHChA67gBdmEGPGfjmdY4TOYYBD6bHwovYt_SukNCI0PWGl_oHm3wsoL57_Q0BVNfAUAYkBWtWteCWXpuqAX90YR_xWfkmO7ACyzzbtW7nGTl2DJ4V1H550UAtlr_fiOoTziH_WRa1DIGgk20", width: 1172, height: 1560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105858743251602862833\">URBAN DELI アーバンデリ</a>"] },
            { photoReference: "AWCwydj2lddE61eI3zhwITIvEDfcPj8yqNtcC_UYAA35_CsQTjtyFpP4Vkgb8GY3RyuBphSblDZZbTixWfIyI_nJmByJk7tMHXO1EyRMkkJ2lTpqmgTcEtgn7vxqBAUo7wFJEo5yfuSLlR99iCrsCI2e4JOydirsQEy7znhhR9qbrXCt8pjypiCbnvyZcUy9LlxLcjZRr7ezIyo_UKl97075iaB9HWafcoFWZRfc5W4Pkz1VoGoLY77UExyrOTkaKsRWpgod71GaC7jdEruQBHG8xRRN4GuWLJgLGYZvPv2kXJDfCpQMtG01FGIFMG6sOyNR-owg19fW_q0O6IlhsLtrhDWmh4Iil_NaM5AeatOD4VkezOXTq0g-eFonrVuAVrsGpDW2_v0bXeiPtYW3FJCjZb36qBHomQ4fCKO2-V8J3LM2KzUe", width: 1170, height: 770, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105858743251602862833\">URBAN DELI アーバンデリ</a>"] },
            { photoReference: "AWCwydjtyCb-5jAaZtXIJySXt9U86WajjZIjYJ7ZI0KvDx2WCeCPh4UGLP8DNOJCAyHad6ueGaoo1EKbQAk7WHGZ1Ny7QhEQehG__DTr4OoO0DCp6B2icBfnp8VwfpxWgec00DwV8eiJ8Yk19VhmaWq8k2brYznrEsRaULSOdjpHGmXP61KGXE0KH6bZ4y2EvoP3GIg50a2BpzJ7yyZAveHCCZx5H4X9HSBYreopHFqmBSbQkcD05ZQzFD0uVqNXws1gjvZ-nlvAWPkaFxC8nqUdetRTlFSXIpzSca1tGtTDWCycWesS4tgtd4jpvWcOG2aoQBsLd6UoMiqVXzlgJRU-DALZmpBVT5AflgvP-c1GbRqEtgWgZfBVhm_Zz-UEygO425j2mveizO8uDMCLIrKyS1s569Dlf3NTTpeEs7tP4O4YtbYr6a6vGJVuh1Fs13bA", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112406022284088791010\">김상철</a>"] },
            { photoReference: "AWCwydhT3Y2NWVU68c9icxjypQN_olz2wM31NnftKAOgrk1dsT8v3ED5gXRQJ4CPznTyBp4P_T4HY30l0UvxTFG24gQPY16RYIGqqO65LU24c0EZSyAmDTL1FMXGkeSncFthX2oIE0jXzaJBqtlxpI7rcuZv4tymWyBBtPfvduNsHmKMZ8pqn9tCR1He3_gtXPG_IFfpn0EiNEZc27oTsPh5vZ2tJtvG8KYFNfFWsCOgpAr79Xmq2ytdPjWHr0FS1QNN7WlvCz7-4V-m_cbW9Za2F0_FGKYmHCygYfXMbbsqXHPuaMt51SQnubKI3AD8PB9qqyL-Gkf1ckAHle31wkBprOsES92_5KTMApU4ED7twoWJydS9nKkzBkgQNf7lluvsW3BhceQtyX_t6z-Ej3i6bY2AKk3S0P3HJ6kdUihxnyLUPYP-hlqsYpeoSQOxxINF", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106020326243338254507\">배주안 (sally)</a>"] },
            { photoReference: "AWCwydijdzsJjHF8Jev_bd9Ka2RFYjAzgT5XVxOEWQk02RzJ9J31tAU9VjT0o4xYekx7cSJnkzQHSuCz1Rut2e24Qg-QSYF8yr9FvOrCHeEyLFHUaUn922n1DD8kqo2IH3H6rjuLwLJhBcjRKzJS47oSXdvccivlw6XDePfF5jW8PjmjAMhB7ljWhubnuGWyoEp_5Pgwed7tHSD5UjOm4nIbqYadBrOiXQS_dAf9u1hDk3EZw6IleqItQXAVF92jr482PR_r3sxPNihHX7_BtPRsvrjjxfoq4zITfjeuLlhTXRXmoRwwg_bWmtYxPbkNxWn5yvjntNNXN8qehMdxrGNn5i7SMqXnptZZl7nKEF_61g3bYxmf1y6e5zM9mcThuOG-AIeZxdzlJpSg-y4zjGTGKE2hA9UaDMtlotOSAgK5uyKvJlLVHx0HkVyNfiu8aCFF", width: 4800, height: 3394, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105858743251602862833\">URBAN DELI アーバンデリ</a>"] }
        ],
        summary: "맛있는 음식과 친절한 서비스 그리고 활기찬 음악이 어우러진 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["맛있는 불고기", "친절한 직원", "활기찬 음악"],
        tips: ["불고기를 꼭 드셔보세요", "카운터 주문 시 대기 시간이 길 수 있으니 미리 주문하는 것이 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "불고기", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14401138192757016387", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=URBAN+DELI+%E3%82%A2%E3%83%BC%E3%83%90%E3%83%B3%E3%83%87%E3%83%AA+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "윤짱네": {
        photos: [],
        placeId: "ChIJP7C21UJt5TQRw94k6vuC114",
        placePhotos: [
            { photoReference: "AWCwydjNCC6_9U3YN_wWcONocZ_0Kt6VvuFJrHryWOuwf5WjKTOPswIVI_v1woKFL-vH5Grd1TUF1UrbnOnf0th55kPf8HL998QJd-Q4KLnJn5mz4DEqU5wmbaFx-7mkOnYbmL71x3Vg_WfV6JwYSpjuAewTxO7qUCM3P9Ss5pwl-1flhB70JEnD5SJ-QC6Q59zblVc6E-O4kYDmhbNN1sOWf8myLQ-7sNRcCYwx39o3m5n_C8V2HzEGyOhPsA_YJRakbXM9webWrgrHv0tI57TcvH2cJTWrCAyZyW2udefc5kzZJhxnkPdiNv4v639ead1lY3WripTFSoAHYZpi46cL-Z7ayfD-TenIaR9GwPNnr3Fkkx88jm2znveyW4faHp8K5C_sFt7_aRvmeG2Z6zZEx999UfzenfFRUo4kzXYHfrhKgku7", width: 1242, height: 2208, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108171348944892815829\">ゆんちゃんね 윤짱네</a>"] },
            { photoReference: "AWCwydgpytz-35UbRPukjOsIP7m68cirfn1K1fmoamc8pFqX7j6fK_FXkOBbAdEAEQwpOXr25G2cTieAzjGLCuqt8E-C2CndHQSpP1DnQ9d4uBOIlnOpBCwc9Jhv8SSQXtdlndt4PrVbZUfET7yXECYR11Xmx0Us8EGl23M7iuLztzs7gx3hxj1iOApnelR0JBVhMJl_bFeHgt3WILY_1ISQ6qiWh5ciDrr0vxVUYiBoNfnRTlStuNRPo0o5OEPxzUxjFakmi1-qDLcKF18vvYXAoXZNrW17zKxq36g7fbbDOa0W9FczJLMJUvNvd_1fStnJ4vKEGFpmNu2TfSJrxU_2nLUumEVjkUZY6eBRnzE8vzwukNGzDSmP9lcIqDbgcpj4MCBtO1ORiIq18c0BjYtghTjWHHAdILfVWqtwCxi_lPb6LflVzzJRVsP7-UY2h-Eb", width: 2479, height: 1531, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108171348944892815829\">ゆんちゃんね 윤짱네</a>"] },
            { photoReference: "AWCwydjpzM04wpwJPTn2hvNCRQbmNw-xsnMD9SUjq647j59_6ImW4U-1BY3qArWdKZdCk7EF-3N0nzhZtvIQQQeUzaNGlLMjVnJJY9L55cEJX3oUrxVapas0or69yQRZs4bR3E5NWocYNedZ-KsVkY8sM0Rz9SRbVqvmo-F8qzXiJevgkEjK20NXgPLsEIwg2t_hLPyWcjy5txFDZRLsJgF8akXdtjjoPXPXWWikuAR82XCq1ezGplQGPbAqFdKP0ZED--L6C-x-KeL3QwVJHeT2CZHwnnCLj3QCCBFZOtC4689hZzrsFIKCwnv9z3IPO_ApCPdTt-Db9Fom4Etw7icIHVmOR-G8jjWGgAov26VbSG95Vz-D4Sv6muoS5Pqq3S1yy8DOadcECeB1iVkVF-pIpd0JL9At5xuVsKP8gjsIzg3rvpq0OAsQzKBRQwCjne78", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106494921639924753434\">신동훈</a>"] },
            { photoReference: "AWCwydjYrhu-tLQXE1KJv3s5p8BHvpRLbkuKewGxECkRIW4y-NwHNRtg_E4XEtIJzxS6GSBDK0pfsDm4Txo0h4BFiFDRR_F22beuJtkL5F29SvnoPrw2QvQgUn8eUb3Wsodc9bQU950xA5CadYRfpXwiRcEbtnOtJEu7uohqqwTRpH8yz-JkQqaveSzDzQv7_mkfNWnBdKgC5PZrB4M879pj1xTt04-uM0bks6Px5jAy0drnF9hs6-12xJ8bIhfTQxEoWJcJqTNszEGjen3Pesbv0IvrZFoL_D3Q3rQ3hvutf17i_yn_PbrWbUu0gMkdL9X6X84OFKsGo-MpyJ9YzZSuu-ggmqTvzR2v9Z5JK6er4zcF9ILViCH02dMmh1ekJ4rOG8Ib0OsDEggMlFpCB-Mer3quTSVrFwdcyaZOFPxKOtxWJg-rmkQljtWwKAudoMqx", width: 1076, height: 1522, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108171348944892815829\">ゆんちゃんね 윤짱네</a>"] },
            { photoReference: "AWCwydjO41HnML_T647WSjCBF4Wu37Om5p6Cm3tgDRX3UnTvNe_3GYXBpq6qVwF6Kz-Beuf-GdC07PW4sLr-AL0les0sEiaLwzCICMu5DepNJRWv0kPl4uU8GB_lH5OiHYDW-HUPnTz_-2wDZswLzKABXaXFNSpakIhzfN4GGnV8OAB-QUAcaxhY1R8u5kksFw5zTKQzkhVuhVG1YqsvCZ64VDQ8VCq8lpnBmghPaigk9Gtv1F0W2hGhA3LmpwHyRrbd-1-jnRtkgK6lyO3LVFM8-2aFgL492HaSR7mWaLoExahax7_G0xSWpk6CK7lfBHv05Wnn90UM-CpBcuAW7OWMTljVqT1P5cMQJkO5gs-nlkANuoeqsQ_r1g2VtNG5iFEeonHPDrpxiaHA4rx2LNfNkDM-PQykjHapDn9kQVlE3RLK1zM53XWSpWTFhz0f4JR_", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112547415287847970669\">Y</a>"] }
        ],
        summary: "현지인들이 인정한 오키나와 최고의 한식 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["본토의 맛을 재현한 정통 한국 요리", "푸짐한 음식 양", "친절한 서비스"],
        tips: ["월요일과 목요일은 휴무이니 방문 시 주의하세요", "점심과 저녁 영업 시간이 다르니 확인 후 방문하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "정통 한국 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 3:00, 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/okinawa_korea_food_yunchanne?igsh=YnIwZXAzemUwOHd6", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6834074978034704067", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%A4%EC%A7%B1%EB%84%A4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "제일 순두부": {
        photos: [],
        placeId: "ChIJN21RzcgT5TQRIvAg0lj6s1Q",
        placePhotos: [
            { photoReference: "AWCwydgD4DN6-iP8uKeetEzDhr7zlP10EGUuY_n3O_kzl8ksZ5kjVhZsUaqPzBaqIF3N79PqSPQvZtWzesUKdqvC906UCCuZdudz4yJ40JbmYc0GY7Ya9D06flnOARIj1jRMhMnB715S5D0PUO2n0Z2ZlxFZRnLt_kg35abTlbwfAvEADNgF_gieALAqTXoWj1WfAA-zlUl7RCRVPa0ANULaJPms1SuuRYA-LaGQ7tYGJHgaw7fqh3TNH_LZnqSVYFbxdMfswnCoFoqnnmP8AryxHI3Aj_P_gJyuoJaOU6e7OzQOX76_yV5OWztliyB4VhUUDsUXjp3Tzmd5s1H9H2a0TG6kp7mDciqwfKNo_67ObOZrAaOLc7V6z5w91i5Gq9vDoeJQ6rX0QHAwlcMHF6hmaZ7Z_z8kpxSTjvYEKggWKmNyTpM", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109264735443669563299\">GourmetQuest</a>"] },
            { photoReference: "AWCwydieQRKnRhBbxhZCzPi8Edf7c91Eu7fYngBm2NST2HmZk2CivfgKs-6Sf8soGJhphufgyVUx2OAXnFKFUjp5SlKOCNtf_RKnA9jKXZcuv9swhh6k07Eda-iwtKT-_QLk6ab0vqHJ9UOKgO9daM37vQUmbvBJ2U-45bOyX172_a0CgcaDF4I6wNb1xVFi3VXe8IoaPcx_Xp-0gb4UhkdCCTvDtYUAPWhlC_nXcNFqxNOkgw8tcD5A-NtlGf0ameqlDlIyOkfoDhO0hsoFySTUQ36cEAwCkVTKu1z78OGaBRHbOPVS4AGCy9_xSdqhJc9haJRrpjI8GUzki3T3nA0Hu9DUuv9hRLdY0TDZJGcO1E-922KezlVGN5rDpzL_7jcCO_FYsd5JHy_RtHCbJti2uqVfwsycK_pO2OuIAB3xaAr-c8IiaQ-9IwO5eQZYFzEX", width: 942, height: 603, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100696845855573241219\">チェイル・スンドゥブ</a>"] },
            { photoReference: "AWCwydjv-sBUJtZ2GTcVD0Olq9TXEIj8d0ZDmEImOS06oETa_Z6Kq-32ODdgggoQjvIjgTTxm7rs1NwPL5R_xnk3TomxnvqbKBha2IItdNfwsAQfh5OMI57tksBJwfyB6LYCDc-DL4KEtS-26QCMFu98ll_Cj6UAE40NmKJz0XcFAQIAamVIQh2iWURWP2jBFflGEqWfiLSNL7RYuKG6o1CksCCGfIEmFhk5PNwp4qjzX0skmLkaNgHhoj1cSM1bZazBOrRVirFR70u714iAZYHweoisk9YtiUzTKdbFqL_6C9-C9nRAjIKedLKYdKxdzyc5aDFuV54ZK9pGQdJFKZE4UY7whY9TyNYyc_34HicAcj5CVlIHKKvSUWByVs_pNMiFCSVDTYBVjezDeKHpnUhux4AwuBJ_Th8ti9ylQNNfO7QgesVko6gy5jtSKThMGNvf", width: 3414, height: 2461, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112019627142769964113\">Youngsu Cha</a>"] },
            { photoReference: "AWCwydifcpVLrRwj-fzfJBZqa_Jz-ndnefpL5mh87oJRYRw_cfVPK3FmBGYes6pocUkLVHN_D4IyrOQ1U3Y21rktN7SSypDtPd8m1TVKBd-fI8253hLqjoKj16jIk1Q_S-f-zgwRkq8Orxux4RLup2xrkId-7Y71dbe0xqHQ8tD5SFJSP4DLf_fzPs8-iA9VOSOeWfcJ3sRq42AC6A7HwEPHzX9MxORiiuP0kRFHf-pmNE7xpYTwm_H1DP1bEB1B--EVStZT1Uu4omXDDcpV76vnlu99qz68TqxWdvmpMq3TGz1DXmTfwkY64IR0yS3dGksq1deQ6CPaElv2pp0LomoLUmmr9ivnbWSkTShAX-t3W9W-JXXOB0R-hSw7tbyZiTPmzIe0eeeKSGMBNUiY81b15V3MuXn5ElfXaybMQEz8RiqeI7RNnx4B97IvBnAZ8DIl", width: 2295, height: 2949, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112019627142769964113\">Youngsu Cha</a>"] },
            { photoReference: "AWCwydj8_UNa9ON3GCbLGzIl7ULCr_JHZo2UePqySWzEJmimIFWuC-D9X29ZLrI3Jo0D5cN42sS1JJ8FfcaRIKTfB4LcdkM9RTNjIVJ44vDnUlzFlIy2jwjx5nDQrTG9ARhs9Jw3OKPBUlo4TKVwsdx9-CDurUWpWZFuNrbxphr-RPgJOnMNCBy5xxRdhAFcHr9-RJaZr7m6C1Y3umQ8Mdrk3Vj1SjaGJZKWsqRKX-ju_WEUTyYZj-W4eNYwpoLXHChbktSU0kyzgMcW3EFq9KMpio3mPhW-bmwpvKnHNY7xSduRoYhnHffJYU1ulUW5PVVh9bSxPZ2Io8yxxnsWIXuT4Qzzm4tc7DIsuBOf2nN3IEnFQI9ITBTQy-mGH0sAnzE28NQnM_5Z5nhsN8m4QzsSr0BsF-JAqW9LSTS1B9w2brxKe4ImJ-uHCGVrbVSRcQ", width: 3649, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109087816940652776160\">沖縄まもる君</a>"] }
        ],
        summary: "다양한 한국 요리와 함께 노래방 이용이 가능한 즐거운 공간입니다.",
        updatedAt: "2026-08-12",
        highlights: ["맛있는 김치전과 지짐이", "노래방 이용 가능", "친절한 서비스"],
        tips: ["K팝을 즐기며 친구와 함께 방문해보세요", "다양한 메뉴가 포함된 오드불을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/cheilsundubu_newborn?igsh=cWliYXEzbzNzOXA4", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6103497179406594082", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%9C%EC%9D%BC+%EC%88%9C%EB%91%90%EB%B6%80+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "인생 술집": {
        photos: [],
        placeId: "ChIJUUxZwNxp5TQRo8SkTdmPM4I",
        placePhotos: [
            { photoReference: "AWCwydiKuPhbTp1HWd5YxIlmxyO_1zkr-SQj8l1OWk7y5XRiAnEZAKQceW6zYFTm4krWKh_-J910YXIRYrrNURvjNMR4gArwipwdyRgMDhJbDoSFvcjENUOm-5Di6f2QjkLqQaeeJZQmGb2eOlXlxdG0oZ3QA3W-jQOtUzZQnMwmGNKPuK3hEgBhigX2MZEqdNppihrUf7Ly2a228mfe8RQCRh5UX-Xz_Xz-c6VrMn5UX_qQj0AF9t4kXILFlSjEvHQnJ2tl-MXtkbu27COXmnmVZx1Nsr4O5A25vi1J3gGy0_G8J5S89JKxaYsITtk2VLOWqf8JXCRaLupTBCLzpiZKE3k4IjhiuZryVjLojTMUhJ60c9WAqrPzvvf-aMjk-UQQ-L1tLO5e8uBZ3zzH9KUc7oYz8NoD7IaHxXH44bfmayjT--CzKLk6hfsH7ws4O2kj", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104556495870975168971\">Niko Nikodem</a>"] },
            { photoReference: "AWCwydghNw4CfNKFnN9zPQ_qMkIRO635XO-ll09E0qqyPtsEG6jChDP_oCsBaY_Z4ZipWkHsFCYnsGgcUTHHeuU4CWEytKaEhJa_nzMEpKfeRk4mZEWVY_wEJsUJ52TuxtrgBdvHSC0yQ31eAqAtGe-ZMrT5Up5_swtCCBKPQN85JdIBKUoXK5rmHk80hFeJqNQJ-1tf7vZQB5_wnls5BcbnumrnEQW0otuZu9h9YCStithtqBXcDKBGMyGA-QWsfgXxHVMQDXR1FYs-z68Vjin8YE-S7gyWZdC9vRWqtpZqLGvl5dfkqIjy0pc-ZCx8jbBBoBTe-IAYih10h-c5vv060W9-gMgfD2rzAX5uh15s7wkBaM69CmF9d_WOjNNs21xFOGy-ONbL2RCDLftKmJumF1-ND-C_SAyZscsEFT4NACJWizglNQEj_K4K5mvcZcvC", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110900504751488050682\">Paolo</a>"] },
            { photoReference: "AWCwydgtP9MNx0yB9dAmrAjG8hjtUkAPV4-7ug2hf19ICukcxDI2723gE_JM0hXqBobPZrtoLkhUy9Pzoa5BTofEIEekpjgmA37Ko-9MA5f8gBsoD90tOR25mU84ZlOCBFv3bzWl-cs3X19x5HeZSqMQl3oXyWJAkSb-OtUfLEyLcaikfdWZe4GWss_lOCplAYghqlnFzEIdIfHgiBd-mVioZE0cxFPZhKNCtaAnA2DZ0EtaRWV7pQmn0y9989KqfdFFD830JYKsZS_xnfLqTU_LSMywo8Rs06Oc-90hJY5xwW5LKgzProO9ebPvgpsJEGI4n08H1JgetMsw2rwqHmavCLpwbnsdaq_e79MAaAqjgfc-JK_LpvRfEeI4L91U1-NYVRpp-UTLZyMoc0GlpWG-adweW5OcJOgn3g1lU7n4eT8zq2xQLF5QG9pX4OOjbqae", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110900504751488050682\">Paolo</a>"] },
            { photoReference: "AWCwydh3c61Cy7UF-wOopKHcaMejmxfhjID3OUj7_J7Tu7T7pIfZSkxsMPOtPkwjTbf5WHtNusca9l95XZPFyrpZtxOZRIqdY2dTeVbNOsg3toJTjwrNteHwNdlZq6ByA3tAVQ7vjaCdmTaNzwlt0Jks0jSq9MEfyl4xc2cFweDxn7GjElkcGpQOAXOMHlaWpEfhhMilFj6Xd4pUqyJHubfaM3sABdcPf0izCBIzUqm_IeObWTwyp-0m6VltBHAQL_9uiDzEk-UpAJTL4ivEVjFbu1uCWefq6I7fpPueeiUG_SzJ2R8vFKLnxViITgaVWm4BnXpidWGiD2IQFYkqH655xaNgrCC9BpELBKQiSs7C9ATgn4gPJVQPOoEWHYbMBN_ghYeaCIHFZXr6tG-2dptyj8n_LaPpK9-1-2HcNcxoDm4wu2rg6BCz2h_QMoiaq-hC", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114943390097583815023\">pong Gim</a>"] },
            { photoReference: "AWCwydj_1XbWrsrfA2BvtZb7ALQKxVgbLdIfs9SJzXEBXkXlyWoOozbt4PuZZ1XUsPVXMQW1xAjJvC-E6INDany-U9x3uO7v01PnhZaFIsNyDOheHEj53-28MqnQqd7-ZSGnD4wYI2AtEA-TjCWCuBXGLAfgeqhicyLc8NxwbAMYtbqBiFbrZ8N_TNNcP86NN7tWTPhE3lLVCt2RC6qu43KoSHkiUnwY9KUGIUKR0YdVCsg5XF0Hq2dOoIBSAuaZlNsPkbXq2jFfeA62xEzw_olL7Sg--wbWTajUf2BgqApExr0Wm4n2HvhcVGgdckDAQvoJ72PT_1jD37ez2Pakg0iZUAKKD7WHW49aXREj4tdolh7GyK7d1SnjFFWiAEhJGfwETFgDU68jPuZOGNhCJcGzlz87rzyZ7wgGkIGgrvtxQoZBir2nloK4h8YIn4tRRRi5", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114455442502464933758\">潘文欽</a>"] }
        ],
        summary: "파전부터 치킨까지 다채로운 한식을 맛볼 수 있는 식당입니다.",
        updatedAt: "2026-08-12",
        highlights: ["다양한 한식 메뉴", "다양한 소주 종류", "조용한 내부 분위기"],
        tips: ["주말에는 미리 예약하는 것을 추천합니다", "평일에는 예약 없이 방문해도 괜찮습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "다양한 한식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00 ~ 오전 6:00; 화요일: 오후 5:00 ~ 오전 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/jinseisakaba_okinawa/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9382000612216194211", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B8%EC%83%9D+%EC%88%A0%EC%A7%91+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "한국요리 토방 오키나와": {
        photos: [],
        placeId: "ChIJk33YTzoT5TQRZiOaKyc7l24",
        placePhotos: [
            { photoReference: "AWCwydgtjTJw3nQ6_bo6A-2c6NsEXbarPzRUFpznvfXvGq210gWU8FoSWyAY9xMKHH-6BGK1DYdYf08HPYFQA7Zh48i0bdFhkzAkEZHZAL5U_Lxvl7iDUZYBpIYAUFuMgYKakreSc6OoENosK0BByEgf8XwfcX5FjoxrIvvIObt_mlRkYIIGIKuHBtvGPobjPUrxOIk0byFz0p8xMuDSdNknhbOOvHeZ7lyk9-HqWiQVFnZfafj6OwyLf5zMimljpBarwIcMzCgaZduuoIzmxVG3flCQ_LgUumPqJ22CH0LeYiNv7uDTMFSztRBtZT8Um5mopK5iZcRWYlQeJvysMO0HjuaylTMdiCU7SLBdKLgz7hqoabvkv_eGtVIBp97MEN2Nvzts-M8iu7ydpaKjPgrGY1iPYDyUATCkB-zTxvNyWZJjQA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100640022216452200662\">Ra</a>"] },
            { photoReference: "AWCwydhl2mwqPdby6-xdzOM5TRWfiPptMsvGMR2r0hrnSIEcQmS1ZlyYJ_wBZpLvEo1lifcNegzO4VpQRB3rsFN5YOmhwxIjrCOdm-6rvyaGrnnWza-w14KxvPhMLrd-JEsfY7va9mZ5m8GTpC3BUw66i6dbb6rdxrpHzLgi-pMHX5fiNv-Xtn6Dt-RuenS9INaDbqg9JvcK8OgnwYnOyrbuxqWgZGboJyN03vl8lWlZMyYrHOa69g7Rwq3w7YLjEmHdFSqKzKeLGwF1QE9wwn-9CsA_-34Bpg4528dqOHLOec3WtegIr80rHMbqBgZ4G5M0dXv0RRIMWTXv0CqUDCnCr8aZwaK6uYo_gbbKw6KVjTw9zyD5UKV-2UKBfXn7DlJ_zEx4iL1WI7E5soGSxW0RnB_4BuMrWwdhVH4glgjIt4c", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109350319578976875598\">韓国料理トバン沖縄市店 アグー豚サムギョプサル</a>"] },
            { photoReference: "AWCwydhJzX8COQW03fg292-rEnf6ACy07hgB8PP3sRVHah-Ul5EMVq5JyMs2Vi6mpFcMSMaZB0l2YnBPe867iNHjfz46WDMefC7Ut0aSa4KWPrZCw2ZT01elwXg6YFCm8gAYCcjTA7YnyFReKcViSf6gCiucsk56rWTAcNEXCT9iTgqdcMZ-bX4gDRhr2Hvse9BENo0CxKZioyR72DEwRKzhPaaNATt7Cg2yCKdtR7R5P8IvuBYlRfm1QvWj2cMabdHkamghcrN61iJVLTLHa1yS7lmnv7kABUPRsmJLTCQ_EKgU0eqOcbYWbKdqe2JI-DkRVeRwoh51He_wQNLMG63-SRQgDzDn-reukhLY1llE6Mqc7I9Y5_FHGwzWL54H7Pfj_6a3ANAknjb7up3OwVDnyupUU66IgfSW7HErq29c5R7L0g", width: 1179, height: 1168, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109350319578976875598\">韓国料理トバン沖縄市店 アグー豚サムギョプサル</a>"] },
            { photoReference: "AWCwydjEpepSQqZCzJANsBQozP_gnmbhhRbRnGmoOlsoYCtFP2uzUtZdwcJyrkOjd6G7ZlC74d-fAaUswX6W1keq4Q17ivmQRE5f7EOyStaHJzhOijStt7RDTk7nkjDubixKHj4UQnB4xkZNLVnf-WbdZTwq8hC-ruse9aN_0FtvdTqZbjFJGyFUDBkALHNlDHYQSqeoYw9y7_1lMejUqg9yfpaumpd1ddMQQ_RcHtdFF5d4Wt1rAENP0AzIdh8nDdh3pCtMFqiNW26pm9L7hZ71HVIAR7xZpp3axAVpoZAlSgHz8RXbnE_13LOvaTwTvia01A7WWTYOOUR5Ipykk-BkRLUaO2E9K4VAoaLvlow7iBWBwHpW1RyxKSZI95fQSUT7hpJdBXVoDEMWxk4WqzGjHf9MWU3fG9ICbdj9NSpmrP-BHyM1", width: 4800, height: 2701, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115432441219834159707\">Anthony S</a>"] },
            { photoReference: "AWCwydhhh2kkjj4k1tFg95Z_Z06V37Ly3x8Q1S6mr30fTIBgFbBkQr4C9tnpQXf-L1Id-hbDNghM5EkhWX9p2cjQ6ORE9Kz_jphJ78uR9hSTvgTVHvTBGNgZL8SkBc4JWc8l1KxxTyg2IdEYd59Gy69aTfJvRblvlEH7UkIsTzEBqTcjsxuwT4OgsTV2RBnUYWar_r4KYBILMxiWcwhyM0Mmy9vSMv38-e8RkKbe5IW7T0zwjeeE1sXk8A6eV7prtYFGXS0on-d3Ra61vsIg-RrzJbiCJlQAlN4W5jgeM0hIMmxQcZqRF-vmuHxZEzu5QPyqgAK1mzh0cflSKztb8aOd-1N0cj9ZzcMuPjmABARpFv9Gs-DpncIsMMikzZ8-impf0oX4nbTNpUt84l5tru4_0P0K7ssuzvSmZU3jou-FfDPNrrGl", width: 1415, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109350319578976875598\">韓国料理トバン沖縄市店 アグー豚サムギョプサル</a>"] }
        ],
        summary: "맛있는 음식과 상냥한 서비스가 인상적인 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["맛있는 한국 요리", "친절한 직원", "행복한 식사 분위기"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 6:00~11:30; 화요일: 오후 6:00~11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://instagram.com/toban_in_okinawacity?igshid=YmMyMTA2M2Y=", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7968903105076667238", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%9C%EA%B5%AD%EC%9A%94%EB%A6%AC+%ED%86%A0%EB%B0%A9+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "코리아키친": {
        photos: [],
        placeId: "ChIJS70f_Y8T5TQRVUc7fzDGtvY",
        placePhotos: [
            { photoReference: "AWCwydgjd0rDc5M7_Offj9KwgAVe6fXeI_BiSLvbGlzxdwSdHIRgKCIjQ7M6P4qzXR0anFHjrwfPCE5WkwAqD6QhMqLQX_JyMqMsVRgdnptwtiR10EoZrUpD8t_8mrN-Y5Ysp2qB6cHRjr5-cCGImtO4EcQtOkhngtb2hR-HJxYLF_HeS0uttFBmyD69mUpDa1LlVnAMJk5SN0xP-dGFMHiigR_Lip_8BZRIx-BvaM7eYpqvVvbsoK1kL8QuQHNuUbyJWf88gikk11-OS-5YVAGgUHj0CaZPlIVzkUC_aIIpTZkXh9FIZDUigZMo_49m8J07fI9r36-p0OSm5l5RfJDq5NCuc6MO19u-BNSLlohGfWtA950dL93lxl7ndqnXfuaQS3nos6JK8Xsq5ibHivVYKp0_oYrNMGQOZg3gYHUth8bsLQ", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110941681914628445313\">신대성</a>"] },
            { photoReference: "AWCwydhmN20Ardtr1BCLeKe8K4eEY2_nfT-iraDpD0xM2MMzuXKjJHGRzq8nRan8iX3LlrliyFcJLGXtiTH5w1EMk3W3zIFgksk74fHFBGq1n6ABV_YZ0RWbKOl7ohxl1MWRkUXaoe1DYahjN0izkyfm8B5_oDaunBoHV9XAiYJb9dNeLwWSqo7vaM04py9PKQfj5B1qXTUQm3Ss0b-Ee1l1b2LoK4N76tKo_r1tUSdv7IvSs0fXi4FFkhILgf6yisIu4a-JdPqx2J3c2ei47oSnkSls-Za6Ihbm3LYMSH3JDxThITpI6G2QtamX_qynyGsuTcpb_3y4Uz_F2tzS6DxQ1aFgUJxDm9pDPyD_cOY82-mAdzvG2HgB0xctJkgwpR-lb83VCUz94M7doAnhRzxRxd9zSgPwdLO9sQRG69p-KzsrZNd2xMD_ZuL87vgvUSot", width: 1675, height: 962, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101945142191772061855\">DAESEONG SHIN</a>"] },
            { photoReference: "AWCwydiQwamUslzUlEZnGDeErxO4qfDatxu3qyYAOklY7_hoTEL36KTsgCdBvXmGfbkopw-O2bp9SOK73ZoTwmk72_M8h8t12bZ9hvSQEPt0kIbqTtqGrRvP_UHjwezL9NxF0Wfw3PJVKDSM4zbvjLyndRoY6FmLaKB1Rd3hc2TD-eci--ahMWulifuRavPYP6baFPdk8dW3Q2CtyeCIDS_VSRv4UXvd_-saq_JfIHVHy2XfxRD3hVUzP3wj-hxDpI8QkoiOjMR4f16bp1z3Kkeaqw0Sk9koKz2jY0igowXnoDcqnYAbf8xOiu-SRdTCU0WGpeCalzqS8rD5CnxFW9nKKKQDaIzxWxW1IaUIM8Wgb9Z_7P4Es0KrEEuWNyW3oaJQcU69c_fDMyiJ8VpLRF9Qpa9udX-tD28n-0TAF3uJ_YboRgY85aBsN7Eb5cRc-FQH", width: 3531, height: 2648, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101945142191772061855\">DAESEONG SHIN</a>"] },
            { photoReference: "AWCwydhjct8NHxA__mhQ7fMf6xqAxuUxS2ARQmC9S7B9LcefkALfzynFv8Pq2rk9WZHzmx2cNfRRTwuxrdEifNeA6SYb-QgOvVj_St6u8x8iaPEYLZCM4usUDJttzz4O-kFJ-TCpgaZvecMA6K2OlXWzNtCXaJ1HNukaJjBoMOCdlvhNssSQ9gTpMcg033R0ilP63CZNAbgj8YRu6CjPEQ-fMp-_jYWDEfYWNmi136KuWigoe_1aZNtn8s7uXF-5UsLr53_URSFr467JOSc0LCN3dd-ucQMlYcT9bw1rI8mWH8tcMB17u9byImbmj700iMLVq35wVcEVMIP4lD32BKxeHTa_aACdcgnK7XUpPbngOsMk43qLUW2ijhILmqLFotHQsVo_ZnmU1E0bqVSoT6YpG6EEPkV4XREVDstlo63SQqbTTAECuTEM2tpA-LnVzw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112076249823890872879\">Kevin T</a>"] },
            { photoReference: "AWCwydhD41XcUkIg5-Yt-8BmZw0efhE-mlkJkRAhdTEsuCeYUJYWxPZGJqpLEEIuccoeRZ3uXH_1bCyUUiocMNx8-48BE0X0xifGHDf49IDmmwDsUMg61Ol92CUZsK9UjS8iMq4yEuCmPevMuJS4eeAloO6tjsRiZJPXwZLxr6eDhqFhHOo1Rw2UajC6wTtk3gFSyYf2nCzh2OwWANjcqj0wAB0nVSoxolIzABpPfkQ2IwIfp5aXD2FhAE7Av-gF61rlq2o2YsZEXTa02gUj7oTJ4IHZ1wlj6Z6kJFvP7KL5s1Oj8noX_QxOLwI8BZPLma6kHY4kbKciqEK-0fwcht2f_7UROeE2dsVZgF1PpJDTUIjot4LbsTdnnZftOjbGThbMNegrOisvH1KFB3faDs7t5RHtqrrQ1uculq-r7SrWCRdIm9msfLeWm4QJKAHkNH0w", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101945142191772061855\">DAESEONG SHIN</a>"] }
        ],
        summary: "아이부터 어른까지 모두가 즐길 수 있는 풍미 가득한 치킨 전문점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["바삭한 옛날통닭", "맛있는 양념소스", "남녀노소 좋아하는 맛"],
        tips: ["아이와 함께 방문하기 좋습니다", "여행 중 든든한 한 끼로 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "옛날통닭", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 3:30~10:00; 화요일: 오후 3:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17777614490686932821", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EB%A6%AC%EC%95%84%ED%82%A4%EC%B9%9C+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "맛있어요 차탄점": {
        photos: [],
        placeId: "ChIJqYriv_oT5TQRvHVLR-vB5GQ",
        placePhotos: [
            { photoReference: "AWCwydgGTr91b9Wwm-4CDXCMxnV4-hH2iZ0UU6QO0D32fS7b7yDoHeI_KAw84F2b7q-yJuzcEQOmeSkRBRFDZnksBHC_c9OwukdpnlJ6YaUvRmBDf0H5zZHs_bkob_7LJ1wz_4LKkXUNhSSwPh7QSa6P3ucvxd3ORzXRopCeT7Pi2oueIdcI6_5sQ0A_DayfMvmwMSuWKOepG1nc9gvWUQO5CtnwKAO1atQihC5JTQmVOPHRhtgcOStdlfHw7a-sDu3leAW68jBFUyNDwIcTuHdfuH6ITQQdsgjdTB42rRBJep3ZdTD3YtvpFAR-hEpcPTdKY-tiQieVD1Qv3Hoj98gVE0RRhnbHgN9DWAL7ryO_ahxpSxYfWr_81QvoveQfHx8CADi7YBDY2fjsyqjii7HVJz0JXdRCxs6I03PgHHadH5YM-1Mv", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107824738311194357703\">マシソヨ 北谷店(한식당韓国家庭料理)</a>"] },
            { photoReference: "AWCwydjb9qO3Ua3UD_6MjMa11PaJO59Ta4EYDmzXO-3AvfoCg6ABUFXbWZRBaimIET9pwrrqbvULh0kj0hB6hGpQN8jlKEg3N13sJEKZTzDhfal_vSVSQelmVVcqoYEcyd8D6Omr6SIxlSbFASq-Nz1oaszzh9bjm2wcvswjuEnr-gc0d35ySPe2ewf5ArCF6vz1fNpuR5mIsWMTb5RdIGML20v9JHySt59S6urYll52AkbCi_gOrtsWzi4ol4r2wQLL3m6IEs8FHRxkGRmOpCrZjbmbib2M780_inm0uZaHR5Hz8D4xjms3X86eYzx-on5NLLh2ZT_1vInORNiHBACaNom85ZZNNErpG3H9a6vENJ9Th-Bw0il_bnLaJgZaaD8VlxFIKFzktKH1BORQbRn8ET2DaTICjQ3PTkY7ldDQt9_ioDaO", width: 2714, height: 2714, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107824738311194357703\">マシソヨ 北谷店(한식당韓国家庭料理)</a>"] },
            { photoReference: "AWCwydglyXXJcNEOxpa3eRBXAioK2YPZrZYgdsgFtuC-DkxuLrOJ8-jzLhLPfFtaUScjmEr8DVqg-d7fJ0-kpB-_48PUhqB1Xv519vwNUyyV6IeUiMerCjq7NBt52bKcCTK-YwJ7Awom2r-8XSVcgBFqd2THGXL9X-eSvAk8hm9ddaD9L54Z3-tOX-ujs87oNXy71LxHehpfdN0ODU5dJL5on8FcWaYIerIoh-yEvAOipZNG_vAz-zSpiiKmHtzW2-zuNUep7ZvZKA9F6dyvzWTcmvlCoLWxNSfwFWod6C4Wmbe1SSRkAH9v6ER6LZHn0PJ3KqBCT8HcxnQqGYORbow9fW_GqW4v_08oMR0tdF9JewoL_ljxSS2qCGPVjyiPPZKB9YOuURM_yLHvVXAJwGxv4ukK7UvUP0YwWmLHPteZANRXEfVutnEtmudky9pLgQ", width: 960, height: 675, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107824738311194357703\">マシソヨ 北谷店(한식당韓国家庭料理)</a>"] },
            { photoReference: "AWCwydgI21l4DjqlklYJQ22KtRoC9QG5r87o2rPX8uYDilzX07fMU2tzkQw6Vje3Hpl8JHHYwqXeatr8P6STsSlHCIbaes3-WHyQlNNQ49CFtXkUL6SQcDect7WI4VyL3Fsd3_LCCQMkLIHto58T7dRbY9-niSFWz36EejN8peZQVsFWbX3ujZIaG1_v7ba0Jx4GPptxSkhzzLyeUnvAPbLS6f4RVNHKL4qSlv15Zdg6qKV7NsrCpIs1KMvc-yJ85F63QW2-LurQZ7hQn5zeZ4prAYXKxJZqd0RjqBxpHYTAKvyugtOgbPJgPYzknz29r-4J_mNZnWECHAgiRXMlmriU8qMRfR0HJkQRaoFgy5MsrxINjR5kT7frsxPvTSbcFbN6lO1Qwu2V_M-3esfSjNdSH_37mZh6fPh5Y9FYEyE7J-XLdFARwV4jI9lKS3QO9U4O", width: 4636, height: 3334, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108544683523952565507\">Tomas</a>"] },
            { photoReference: "AWCwydhTdgMUzDNYO4vgiMSSvFUI-fwjOqBmKNBaQ6ZIpiyIxWwPJlzLw082BRSwEX_yUrEjyd0QEUb9tPeYRZ_1829QPJqnh68w7OYd-Ir8FKAyWsvLtb3i9FkxEfzBbNMDhRuHqd73TnIVNakOAsSYuZ6A-sIHidU4xjyvxROVNUgLkXMzKTnwEyhTt8lKOrkn5NwZfvXyDEfvek8dl1t-gcDdPZKNRLGeRxw_dsy0CoPDie2I4zl-Od2lD_xZcbHJ8l1INSx6jgv9AneUmz6KffSxIlLfldGQf4--dNsm6dCy3Zoa39V9kTTXZrLjJWGUA_2mRL0buhltWoeVVKP0vHBrCAi8r64EWnzPyPK0lAGLfFsBl0a9-IA7cOMkwYDQZ6VRtPhdjv2HL6kC50VzBo5Zawkd5nTLHwxXim9hX7DZs_Pcm2c4OAGKUozipg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100805001016226387624\">Lily OH</a>"] }
        ],
        summary: "덴장치게와 해물 치지미 등 다양한 한국 요리를 푸짐하게 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["맛있는 해물 치지미", "불맛 가득한 제육볶음", "가성비 좋은 세트 메뉴"],
        tips: ["세트 메뉴를 주문하면 더욱 저렴하고 푸짐하게 즐길 수 있습니다", "일요일은 오후 3시부터 영업하니 방문 시 참고하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 가정식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 11:00; 화요일: 오전 11:30 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7270148914740426172", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%9B%EC%9E%88%EC%96%B4%EC%9A%94+%EC%B0%A8%ED%83%84%EC%A0%90+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Bistro Luire": {
        photos: [],
        placeId: "ChIJ228-AMMQ5TQRPQWyBmKpaag",
        placePhotos: [
            { photoReference: "AWCwydjkZW0IxTIifvtmKwpXUhZM0IuwZdGWF9Qt3lp2rbTLLsJ9naaJnD1qYaw8Ss-GrKs-V6yCyPSewCqzk9GH9zG-XaaqObGvllLjtDIjRj5FuajywCbo8TloPtHaK-vtNWVIVXMNhOIhl-wvOWY-rmE6210d9-neHOFE7G_GZbqtmaq-nPkCN_C3UG4VR70ZnuPRE6uz239QtHa8FAKiQyJkMuWRO2q0LMARk-7cQr5ggH6Yt12OrhBIShFQMk0eHax2myBGuE6Tp6nKVRgdA8dLsR1pE44Th0LaIgw-nzMYuvSEBlAp8G0EgaINuh4eJsvR0JeQdBE2vIzVNe8SSB4JjRJNr2bJfknnSKcbZh7lBoCH6Z4yxsotDAHf8VMDfRsaSN5XGbqCOfMBscDVLkrlFvXy-4pN5qseBx7NDITaZRDs", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103425046180436284252\">有里田村</a>"] },
            { photoReference: "AWCwydhqYqqjOF_c2sOSHdKuE6--snXG7pI2BAvDDIbs9Mkp_IvSxk9m0Rlz68TSa7IghApAKGJTGcDDYH5rH-z-kYkbyg5qJ55bm5DX5P4iaq30YxgtRRc_GwGbJ44xBXddGhpuGukatR7H2aWc8XNK1-HoxPA9BHuSmUCwSX1RUYJiaLM898XTPiymhIW0SGeh8XvbyxNyye8xaEGnPo8RWT0AiKP3XTVjdphow6p9jLDjRUbOp0gwA8J-1RUIJUK2wWqWyYdSgriPv5RGn-phVb4ntgCWGXPUqooo0v626jQcFLtx3xbpC9OUW0rZcdqiDBl9nfL3bsP8YT70ytLpZqJD80StQrt6lAaFVn5SH4qnLVA8Vy309iteUXsEBlrYD5Ps3LRDySoiHAh4gz1x2vkTlLZmLjvlWWuYO6d8L2_O_A", width: 1872, height: 1429, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107738162444149660893\">ビストロ リュイール</a>"] },
            { photoReference: "AWCwydjSDx0jS5TIvllssysqKoShVXk6_QyN2E3UHijtOyGuTBBgfESiqUHWp5aR3f38ROCUKVMNmlM8JuDtTXntWI3f6kDYgibQdhHsErIhM68swF5wIjGZlaU7cYBsR48TwfwwEL2bAbtG0AwE8lBznpux2RadDGQSFpK_7uoc3WJb8V_iRgDoceRCpIsmnc8BAPcifOvpqdZjCoa2jlWDMGnUscJfaw9kQ-PC1unrkO4PbBLtSdOi4eAZewS60cD9atxZdmQQ9BP6MXxY39kk9ryOBeJ1GhQ0IizUpz9pQ9rsxV_6Acqb5tMnxMsuv5XRWj0Ul9dqGoyOPpWcwSqqTWS7BvTl8WxnciLTRT-M24ifcphn6rypHKlWoJkYBPD5rp-Bn28VFdzy2xxFHhUkEXWxW8ZW89xnbGBfCkuN19XNGr1aU879G7mMpEAuoe5E", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107005498324961323002\">ねおねお</a>"] },
            { photoReference: "AWCwydiUPeTRWLtceNeNX9Z17TPMHtBK6HZ6LILMeyMpvg-e9nR4CxUJ0q3DALwDCDeTvEYROunyh8mzC74qEsQ1zVVJgGOEAnl3FFSCrTb9V_CYBzbwhzCfz_jPBiohRzrT5lio2sjmr7kYG60ge-eVjToCPskvm-eu2J_7CWYfJjtIosPtiTGfTQRJ0kfPxPGTQeG43RJZ3xM32ILd7iiD-A_X15wpYc0mEmnSVvXhaARNAvj3wAgwFcEea0uOrcaTdZomeiclOWDqJSsCKHEpCJXZdvkYjxm72GQ3a5i9maff7rRGnvXXwFoziZykTTK5V8afmobD2ijb2zJ5LLIlF7am9oNqTJ76xVcizFF2bU621ZueQaD2u-_oWxDnc43NowkB9ABFpAbc9_BBke2LU3T6wtQ3Y2Dx-pNn-1ypdxbZorsigMGnHyIqrPTSF5sC", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109879305980859004297\">Erika Leonhardt</a>"] },
            { photoReference: "AWCwydh85eBtu9_FvicTXaFHrSpXaaY-dcolaYlr6dBQuqBVac0FfIssYlZz_7sDoTI_fk5Jgd6miYpEx6e2Uxw9Rk5f1I7tztIA8QRmx2rF2aediZLr7wDg0o_3mU6BRn0FImEAl2KgF4Voyk3kkV3H9ircOWoYz9L5uMYFFfeTMfCRC6A5RYQ5-qZN5eRC_AkMskr0am0gqejKTEND59OABBOCpjlv63H7xlKhnY2JDL0y09uwZDr0TrhzO8eVQUwMh-EFZvhNRjxve0RP79T1VBs1yfBNA4fNKGz7TtWxPQvwjGedbEzeKZDNZ8-IgVkkO2Yv0dkI2LZE5SV32jBikxSXC0DyZl0DQPXBhu9EIistekusO69-jYG9ob5eTGPH-AQQN7cipNCHyxzWHw5jEJTkYnYThbpechlLVUqG3A0M8A", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111062088720870400906\"># fork999</a>"] }
        ],
        summary: "마에다 곶 근처에서 즐길 수 있는 오키나와 풍미 가득한 프렌치 및 이탈리안 퓨전 요리 전문점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["오키나와 식재료를 활용한 창작 요리", "비건 코스 메뉴 제공 가능", "프랑스 및 이탈리아 스타일의 퓨전 퀴진"],
        tips: ["특별한 날을 위한 예약 시 비건 옵션 문의 가능", "캐주얼한 분위기로 어린이 동반 방문에 적합"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "오키나와 퓨전 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 6:00~10:00; 화요일: 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.bistro-luire.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12135416909410731325", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Bistro+Luire+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 칼리프 키친 오키나와 차탄": {
        photos: [],
        placeId: "ChIJB4jO2Q8T5TQRC6iM4b_JJic",
        placePhotos: [
            { photoReference: "AWCwydjpW-MreOSzqmcU1pVzXa4pWU4EqCbk0NP17DRGhnQD_i0N8zHLb88GV1ZYPkZakPD7WrTh3SOY-2RO-YtLIOxo64tifDJzCB7q267_dKR9ylgqOz8-8gjryz-s7KVGVloVzGz0D564qs-MrRjiFmoCnF1w7PQkfk21fwIBVVopi8s-s_JHOvXNd-B8Q8gIMh3PLp1T69VdnpVPR4aUiLTkOfatlCEVeAHZuKAALvijG2T54HWRyXf5y1tvZiTSY1xyOSG1bdsHVCCra3lDx3dSIkWtCskhnxWDHdd4Wk5CnbXtDXz64hRZvCWSC-qKFRL9QBmZ8I48I7j94bFXoBv5SFj74tzJzvm6_kYZP8kilwEMHaBjpR-izUcFFq5D2_NcG5g_NK74n14slfRavCtL1FCyvVjit0nRQ_orz75dbhen", width: 3500, height: 2332, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110768688825638944813\">THE CALIF KITCHEN 沖縄店</a>"] },
            { photoReference: "AWCwydgCm9EBWGC68Et2Tsn_4Odw7n5WSP0WMTChcq9gqrb2f8PrS93VH2gdB4rCzl_URoe32FC0ebOpoP2skpo4MPxfKroMWeSUh3Vfv6TiXFoIUhbpYgpfWiM4w6LiVNmZX9QaYfR1f3uocmqKpW_-uO1oBap8GGAtvo0DCZ8eDgiOGoaFem-sQMHbBrpzNykwsuq-dw7Ljk3HpNjwr8xuhguXdC40RfTl-o4Y2e4pGgVR1qNbQ5bbrfLEf2GGikcBMjeh2LLyxSwpzAiHtk5Q-eS-Fn3VJs4BSoDq9iXbJnAOiL_UU4gxm8BNBOznUYq2IyOsOEJY4CsMd3wFTEnpJYduYQ1ibB2P4x4UBVvjrEa2uTx7yUKf58EpvcxTfAs8yYIfRLSem3dB-VzxmHEPnr7wO6tybo9PW4e2h7HYMIaf7A", width: 1198, height: 1194, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110768688825638944813\">THE CALIF KITCHEN 沖縄店</a>"] },
            { photoReference: "AWCwydgZW1IrwITWiV1WySa8NKXKKBxvzQe8kEyRxUDxYqSdhtJoY4DMk2VhhrnDndFzfa_Zv8MHW-pWJd9qXYwO24a60Mbng0EI5Eoaph3BPOxHpUvwlIUv3KHt9ENehl1opPKz3wP4TnpWPl8ajRkE1TEf8HFM9FpmvVdppOVhAa8K_2a-igRYFQnRIBYTfcVvm5ijwcXGo3PQVfJKyMnBkqnBzaON4UBy87Z4YaR3AtbeZ67m5cATE_K5axAULyH93sNoZ17uy1R5ZSsQjSX0OMimVzZbrG6xF2IFqAO4EbA9U4fBNyj5zzgJ7exVNHIXY9oIm0bz6Zg7Ld747LWiBoc3e0YUq32V2iXth350WoDXZwHQKH6oyK2PyeYhPinLrhecDe_euuKt_LyY8gIZuG2ejzShNLF4Xj0CjJueUrfTV804ZI8eiDkZtsmkTTMM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104310346567161246181\">R</a>"] },
            { photoReference: "AWCwydgJ8we-Yj4CHvSXF055lV6IHb8_8FzMHbUx002t8Fmht7gdgQTJmIjIJd_UfVIZKhJmFGl4aDWQWMkEmsQWpnzvhfRd8EfeOIQVoT6WFxsiWL76h6Qu3OSg4IcibDFf_Fflv54Ujl4it8WNGmVxvMr_b7GDyxrKzpD70el7zGoK7OsSBKUrJqiYUins80wcCmYzoQ8tGnvFS-W3UzrEgnzlhq-6onGZpVGIIplf_6jjzJj1TaoNWypVhVvHAqN-yPkZK9pX1a-uHqbNGJeXzIb3P637cjvnUirk0wT6tvaCmZywmIx5eZ3arRm8o8YSN8STSVzcBoOLEO89pxKO2vu2YUFeK5FF-2wrXL0BuR5IPstZ-kL7uHR19Bz0BOOurlusIvehoKi7OrjtZYhm0JxvXpqh14_12ZL_K58dlyg0K-8", width: 2048, height: 1448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110768688825638944813\">THE CALIF KITCHEN 沖縄店</a>"] },
            { photoReference: "AWCwydjq4dnK2e87PqcXVwCP-zWNIJg9biXtxq4k0O6uCE21Fet6G_3YruvSQ0Ta3q7ZAnHIUKjSc_q-qJgetGne0ILQGcALXtgbjBuFpd_quL6HnRFzCL4uYxI1McX7-m9z09B-v7ftoRskz4Yv_fBCw9SKSxhUrTM8-Wgz1SYVTcmESJunJ_ME-BWBPj-eSTZajoidehpHBKF2c-dq_AqyAWSSRNSNk0Kt1c2_NDuQnJB9uL3kc7EaShnJhsFIztjeHXyuE-R19JGT8paN-0-5SrKcqpC8teax1XPyGbarou_77hGLAg481krdOVobc5Bj9t7DdLigr0Nfqd2UFM-1T1E03wAWuPxzCPa4-w1ENKf8JiPJIfI4PY1sVDq8oxuknnJNaUY6A5-JEMnh9eK7EJeCsnsxND16-xdocIyApeviAwzRtebKk8sKWMSkGpWl", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109911812506223507692\">城じょー</a>"] }
        ],
        summary: "신선한 재료로 만든 팬케이크와 로코모코가 일품인 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["부드러운 블루베리 프렌치 토스트", "육즙 가득한 로코모코", "바삭한 식감의 칼라마리"],
        tips: ["점심 식사나 카페 이용 시 방문하기 좋습니다.", "주차는 인근 주차장 이용 시 2시간까지 무료입니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "브런치", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://califkitchen.owst.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2821164042554222603", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%B9%BC%EB%A6%AC%ED%94%84+%ED%82%A4%EC%B9%9C+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%EC%B0%A8%ED%83%84+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카페 차하야불란": {
        photos: [],
        placeId: "ChIJe-QAmjv65DQRYlmPVk50_Pg",
        placePhotos: [
            { photoReference: "AWCwydhBz6dBck_p1a2qAe4_GvUoooE_56CjVBwtKiA3mbHMLreAXBh2pvGUklJH6fyoQd-VML0XMfYSlZ3A8p_Zbz18oLHWFZ1CbSD3eWuDRTKLvCnYeBQX6LcCwuzsNxtP-9Ry5az1eQuTPviuS_WA0AbpnuA3IcVmqoGy-CURsSIxOiVqL2ynlrJ-IZGR39bZALNUfNzgIJZ4ZfHDGtaxg2000ajRR4VlCYwALOMsfLNelbSM8IUX8TZTXxmjJ8x9-TEDS4iNh32eTxHt_QoU_4purHYwnyrSJUz2hk5sUTE2PNXCH_nD0J1cyFtXbr675AhIV-AqxGIcNQnSRjLxFXxoIzybOtkGMO-g_wlG_w5NaULrHot8sR5XKQd59Ccgio27kHJ9kgnPS5IAIvYLih1XCLs51rnH7G5hASDVt_B9swAeY4p0ojLehyJ4Fw", width: 2988, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102398127113607053290\">チャハヤブラン</a>"] },
            { photoReference: "AWCwydjAGmntQvTnscJLS85w6FVMcY2zhvltpGT5NzxCAyGfI6vo30LuKUBW845E7gFQwybBL7kufwzgCQ85eW2rm6LZt_3n0NJOEBhhSdB0h1dCAUdzIiAuR7roEYxEVI9nTXCStxqGwADd_BkD0uEY7ILWzrmrh3_rQqfXQLZR56eT2_op7SKw-qlqP7WhDKV_DmPS5aIrajJqNAZyB9HXSp2HPNQcL20Ms0mOGuk1iUzTgAeWvAcW-2sgTVmfwfcf-bRTS2OgC60-l7SFUABHNmIOJaPlMNSPnfb-8tJ4w3zDLZBHuaDgQlxeKYEwiGb1WEBA7I9aaAK6am-NDaZ_jEANC_44zT2ZcIAf9rb17d0l-stIkDkxEdqGtuWl2an5oJJEYpXRslqQ4GKmJiwRsfCptOdNvQPVbiLR3rZT-MU", width: 1228, height: 1335, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102398127113607053290\">チャハヤブラン</a>"] },
            { photoReference: "AWCwydgCfbtP5sQRAjK9TAICWHb9njNZGZzKd3DxcGB_z4eNaxPlPPhHPWXVAdDaUAceV7Q9haKEGXtPsKggMZkYNGww7umMGgLlOZuBKF4sDfkpoPEK0QezyD5vOpFfoiFqRyRFrm5oyedrNckp7nKvoL6J9ZuyattlGFqLR291QPp6uQ2aoOfpQcYw-8DhT7ZHk_d1NlYcspyOYBthAQBVWHBqsMXpIBuc7o_4dCN-aefyhmFl2A7Nw288n4b4B19uQfxA3UQ4mM3mo5tvQuy_IVL_Vvm6XuzXSFPVTD0sDaY8m88LYU2ZrFEbrCwfiUx0_HkicuftqrMJozZpEdlsBrxsXI6az2YwKbKaoYbp-WiS6fvGHoV5XPo6b4ztZSAkmrvY2gI04zCvU7td7YEUSeDBCMujD1CwviZa-jjrNQD3vq0YY-LmRcf4WQAi4g", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103554689573008436360\">youtube木暮</a>"] },
            { photoReference: "AWCwydhEhdBx0BiP2L1q_tFXEWoHZjhZsccrq8CdcldNjJRG-V8rv-N4xFvmyWw5wOhmFCEQw_sOqZY3_y84vxtH6ljXwuvxsRKzBdhfyr64m_tGXLPavSuHf933AaVl2OpFvBOPfOk9x_i7JTPr0lI9MvuslUo1ttfMLYvy-jBglG1x04OuCdyXKwYjfVBnbkbJYOlvjvlPF1l-MwDCJ8YVLhWsXOfdkphggMgMNyf-HsBlgT71aof5klh51LiNTasTbBrj0MN7bAqQ_xmvzgOldCS-igVr1CjC9qw6FLJ1CDia8fg6cPCI4jmt7DxIMu5_ug0Gjh66FQGITlhYSgqHkNaofSLagcW1AW5MpHJXWhxo1J596tdDaqWw5gJHsYpf7q2L4l7PsYYJOjG_CZaRYrRYhWaKwSJGsxA0358CdhxSmxWetC9n4eO7tHpbNeQw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116510355206946320594\">Nobby “Chara” Cha</a>"] },
            { photoReference: "AWCwydgUCPKcbCXzXWQdha4T2UVZQUny7CkEEyxdTPcFXIfwia8kGjbCYlXyLXk3J2B6A0UXMGHPv8NS5-SFEOsOOdZ_i45xN5ebbUoTNO1aIyMF_enFUPtcI9J6Ma__LRL1vWAbAPYIMBGuRy6oLsgKYOLB4xL_97ex4tv8ASq1Cyu1AmOIlzXcgvF9B6T9dPbiFctT2cwFYd35Vmis1OtFL_l2EbAQOK6i3g6-5YWAkZzwEOoISsG7bE9_vnU-dKuagCDdDu7PKO-ML88PhYpz03q3VYtMGHuIlNO5hT5D_eN-AFA9dykQzqahuJp4n5F2BDPyvdRFFWywVrzKxD2-KP_Elww8vABf0-CMTZqb9l9PeXVfQmZXAjDUNvLp22dPd9-sUCXhND7KpNAw2Rllkeej556yPjlFwtQWjmm82iYBYuDBRr3UGQbxNP4YAlhy", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104268488089906235456\">F K</a>"] }
        ],
        summary: "아름다운 해변 경치와 함께 맛있는 디저트를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["탁 트인 오션뷰", "푹신한 소금 캐러멜 팬케이크", "신선한 포키"],
        tips: ["해변 근처에 위치하여 경치가 매우 좋습니다", "팬케이크와 포키 메뉴를 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "오션뷰 디저트", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 6:00; 화요일: 오전 8:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://cafe-cahayabulan.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17941342895345719650", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%98+%EC%B0%A8%ED%95%98%EC%95%BC%EB%B6%88%EB%9E%80+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Transit Café.": {
        photos: [],
        placeId: "ChIJv11Q6Z8T5TQRqQz9YTY56fE",
        placePhotos: [
            { photoReference: "AWCwydiVy4ajpzhrYt-cj7UV3H0bEi-ya6xZCmXPo1FgtnB3OEnIvdB9Oq0Lxe2EfdNVBu6SwLjW_p0PFZS5siVbgACF1nmTdo-eGdCffYfDVlNs4ZzMPtQjAlhglcD7HFFZEoaYGW5mpoOHQ5beFqbfwV-0pazhFcqb0viQ38GKzD2jlY-41ZNnBJRPBTt0YytpQnbBHWdVtnzVh1KiTHfHRor0dZeMSW42DWoUqocCV0nbc_8JGv2XFNEg5WFUpWlwiW4HtlSNcLtGCjeSsYEkaDqjuvVh7fpqQDZlLStbkHF_BnJE2EqM3Gr5IFoLQvQI-vS7jiXOV6Zq6wB0GEujPV8X0wRoOu1MePkcILKZDTXKZPnptbMgJrQcplGe_gKYLBdfqpt0_26Td96y6UYCCtRNlMWV7SoGpZ-wXs3Pf__omdkL", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115394256513037857078\">トランジットカフェ</a>"] },
            { photoReference: "AWCwydh-nmr7j3VZLc7O-1xSO7ljmxz4_YNUmZ9Bkx8ea0Q7q9It3uODk8-G0LT04_yDPfy3a9O_yiHJd_dLCoKhqh8v0Pqg2F6S0-y8eOQ5OgiPqcBoK3wftnaCWUsI7ZR-mMhSjo7t2_KI-gTCnlAR7180LRvl79omDFr2BnJZQxqSNmp9iQ5QfkRDx0jGBm2rB_2-eYs18DjRLZSSv2JmU6W_WYJ0MG0TxH771pZ62H6AMUN2XDwuZw6NgacI-V2AcXPcERCebrSB83NFdNfYsCpWseOuX7N7MyllVjxr3SL5m1E67vJakbrLpANl9feoomTRt1v5qdyXVJ9qmPoOJxKa9c849vLSzGtJCBNX2CYC8Jbe2Jz-VHFAde7io9RTkuTAJQAoJFlmSsC-dSmH4CKecmSePdnnN9Hg_5eyoODxpdySLuGbc6sFPYN14xcp", width: 4576, height: 2574, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101803639421231527300\">Sean Kuanhsiang Chen</a>"] },
            { photoReference: "AWCwydhNgG4yOmbm2hYh1P2v73yChTDSdkS32cRdMytcXBBumsfp16bCHIDow0FEJCEtk50tQapIj0WH-B9VO8ySqA04GxdJz3P2eHJ6ZGW_lhwybE0VKW3L3cr0DrSDlHBoMoLa5p-sNxxlHapvXmBZ3sPqk3n6eHN9kDsPjDea5_2191yCUEzN62ksSYNULb5uPQtKVhLFBRTj8pFsVPYwtA3qYPLCS6GWjs4GP3wXn2fl3WZ4efH2PKJPz8nmegU6RCUh0fqAzvsPDg-zFlFfhqqfn3svINaegZsmYp252OZnBMFpLETmbdFCa_14tD266eYzFW2N0gfZMqJ195_XLHCypiJ00G6T0VbppPo2fzuqpjOH7qZQMJKPk8zIx4dD6de2tbW3noXMhDUWZa_GsVF-qcEgg3IGCkb4jvRqTi1NDgxy8xKD31Qu3V5MREd_", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115394256513037857078\">トランジットカフェ</a>"] },
            { photoReference: "AWCwydhhjVhe11CBptjsconiHz6mBUGKNpZdrQqDv3rjq9vAxrEHPiJLmWa4Ucm2_ghZ478lvneUpq7VbKm_L2MW4zqoMl8rm8GpNE-BMbwkHOXcthQMD8TWv-OmG-ISTMhdKR8AhTMiPzGHQJvxa8PwfecSnN2RmyJe_NemQVbNys6DS7iEUzMe6OBmUb6PFoCHogfCi_nqSc5-iD0xb2lGvdwHhpO6LsDEyKV8zyt7MzTnYJ6586znxelNbedF-aBFDb6N0rw3Ch8fgYASbbh1w2Ccug5D4xqJNy-irxOiA4kqfUtZ9vS3G-tc_Pj_zGL9y9AiJU6EmC0GxygZBGlsWACe_I0CKInoDIy2etPIB_s_EIve41ZKbCy-mT6AaqpRcuXE8dTQat-99uFgv1ZE7yH0P8D6xKpQyxgHO4Icih170Pm8RFQFepLY_wltVQTT", width: 1170, height: 1556, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115394256513037857078\">トランジットカフェ</a>"] },
            { photoReference: "AWCwydgYjcUNG7dvCFLx0lMGoPo5Muxuvogn2mU2uODUPIn0WM_AxAdWL8wE9qo-XQ6FOScloKfiovdobbEHfq-YI7buX2dg1i8zJrMKxWti2jd8RJf8vSJEEtvdeGb40fe1UXV8Oc6tfxvsCe8KCzmFyeUtKvA5qwzVMDWNcJcfNw-gPrsRxXrP0S1wJunqykgo0FIAGWZlFMBqySs3V-QZDIPjG5_SPdp0z7j5_XIKWw7jWEI3SxgMpF1YA_yNCCq1Is1NyLHwgXbOB-gVHuoTpSeuGQF_MiTOP2PhK0arTyQHjk47D6m70rDJxinLGQmj6iJrUYRaaKz0lkXOcKiuWblNuq8UJm7vcl8uATkLHpSc8rNhOYzvx87WE6qeHgoLRWjWLx1QqwULBoVHvwq6kM5FU-yk1eWNXkRfflu8kGyGQDQWMQFlurTV-A_raw", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114890014652340826690\">エリ（エリ）</a>"] }
        ],
        summary: "아름다운 일몰과 항공기 조망을 동시에 즐길 수 있는 특별한 뷰 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["환상적인 오션뷰", "역동적인 항공기 조망", "아름다운 일몰 감상"],
        tips: ["비행기 이착륙을 보려면 창가 자리를 추천합니다", "미군 기지 근처라 비행기 소음이 있을 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "항공기 조망 카페", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~10:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://transitcafe-okinawa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17431526738449206441", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Transit+Caf%C3%A9.+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "반타 카페 by 호시노 리조트": {
        photos: [],
        placeId: "ChIJWwtxRZkX5TQRd_jZvuds3BQ",
        placePhotos: [
            { photoReference: "AWCwydieDirLonrqN2-PMKfWRe7T5cuXSaoh72vl-NNoj3LXraiSdcYNsbIQzmFGdP5K5ENVWideUdQs4giUu60cXmNRAypsWCqCIZuTZ20gYIzYSn0nZSQxI3f5pbTR1FMj-MKoGVknxPYnN7M8rEYjJO-p2IlkGuj-_uIiGJItwAfTw12raexrE0kdOGwvxiuwFLdl9r72u-EEq5UBjfuu2ql2vdQMQsMp7vIzMwocPETlZ_veJ36rN4RisCsCNhmeuzMBiRhV5pVUbWWs9cxLNOYw2j471hqMCqlz65pdzxnxHS0MZhkVv3giesXbqLAs4SbnTQ4jweVhA8mozRgpXH4moB4BbwSr2or6wwfIf4QsY8knvUWWBEhq-tsvIt1KPrnxiEnywD-ixsYrtq6tkmgqAwJNbaxSMZHS7l_u9X-9magy", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115294636456924551848\">江口洋介</a>"] },
            { photoReference: "AWCwydgoGO0tv2O8POUq2hAtlh0oZ1vFDsmn1do6vM_PK-i3g_0lO20JLmvL8FS4R_V2sP-46JZto-0l63g_A8ZfmmflNUgGop9rki5Cya_FTsoFHLgwj8YvWY4wKEq-ot9dXm1aywAaOoMR4_N1NVP1YlXVnMl9YugYcUZpDAWZkVjE69hgmZ4hG0DlmLys_V3CyPaPYN8Zzc6-Shz6nZVUoPH8TVSTSlZx1t_6Ls0r-AiARlGFPBydHH-apsh9BYzH7trwq9mYIDE7IivodWGTz6GxB0aOD5Xu6zpNeVTo_R5DG0dNR4nTD8yXgQI4b7f62-WqQ1f4mcgIDsjgNRzMyfE9aIt0Fgwvt8UrQ6ckF96IWBuZCNgzd64BPeDgoCcaBTSz1I68Z1R32FoW7MeWXQpnJsqmNmjhfaqYGJjPSgMOrw", width: 2160, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101104354033982606229\">バンタカフェ by 星野リゾート</a>"] },
            { photoReference: "AWCwydgTnC0vIj0Eb0vZmYtMGDyVWhchcUfeqhqmpYoJgyWrqa5xYAS9q_H6YpTTlVbGU3pLRsMyJm5MbfW_aHoEh1a8VYfTxb1KBJ8OfyWJMvFl7d-J8edbdqh1kB8n1xFgLGxXUVamSDyWHw7gyayO3fbdqjJreLxtSN6yAsOih7JJYKYpto3m-hxVe5ysDJ3PJyM1tGAwpBUq73xQHIa-rs1fvFGBfAO11A49-Nsf8agcTAYA5cOtQTu7Nkk5pz716WHaW7j9katbtm9NOJzZwDAXmgNJ5QvFuGeVKolYF1sT8bDdAPyyM92v6NExCJPBvU9se-j4aRlUIoR4tLae3PyWrIT8BQnv6r2nyz1cal7XXQhzQv2fTuNR97iohBjf8hmpOiLiQyrcnnWxhFsMnO3Tf5nnLkQW-tNN6p1ZczRrbc29Y0EXtQxxTZBO2w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110999641764846542421\">Tommy NG</a>"] },
            { photoReference: "AWCwydgvCi1xOgH_fT_rBHv9VG-dLiZfs_YtstBCrJ_kKLiFx2oJ-htOpvbcdbXO0M_ySQleFcbvhtS6oHR3Tfm36T2RD2bXP5SLee56lKZwf6UV1o-GWERc1JsLBjy_idD1Aam-Ew5SGgJrthYU3IdwPq281SfoJg0iippepDh_PEoWfu_rIwB1ZrRg5yAEe1OJ3f84t787J8amh_JIi_B6UYJR1xmTR_QxALVliWxtyFd7UAdYpLyjhaBIIoU84EFjW88zk1U-HKkvqLcLeElCvw_IbyxjHcE_mLQFFO3Ww71XGJPveyxONCG3yfk2JKBQybKpelN6zrrx5dmb9sP2aAH4J8NNziCtAkyGaiTeVteakX2Pk5H00x-7Yqgvofp3et-28dDK74Jo-J29NPqRVeZuKTB0aQyUocqUN1iw5gM", width: 2206, height: 1472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101104354033982606229\">バンタカフェ by 星野リゾート</a>"] },
            { photoReference: "AWCwydi8QlCy-8g8coiGUE8_U3rw9NBhcC9JGNDGHbFlQW-K1ktBi428iwVrr6SjrhmlWy74AyIlrgoEh9WAxD6x3lNIwtHMRiXgRh0GSNQTVJ14-fVqtUzeJoo3PYIaosUoRCRLl9lVjwpVTm5YffsFAbIGF70f8zlNPyMJvdMYjO2JDTMaTm4VBVYp48-wwjl4bwcnIR7p3pLLq5dXV5249EtG1Q3LPiQQ_dA3dE1olGRJtCfkwACEOJX30SWYNQkBudD6ZWIznI4ph1wNh-pemxTKO-PIzhejPECqup7uGOVgQItiGfW1PDjuTtBCWAdAkW3a3Bwck_E_S5smCPiVlKWR7U_0pVe56zJgINvG651WlMONaKcU3gAOnKgWFzb7z1472jHXBGWdBYyOXfRPb2WvHetzJV5QHNwPUCYcZxwMSj4PoHPb4QVOALrl13Z_", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103073525126785970310\">蔡玉敏</a>"] }
        ],
        summary: "커피와 계절 디저트가 매력적인 유명 카페",
        updatedAt: "2026-08-12",
        highlights: ["맛있는 블랙 커피", "계절 디저트", "인기 있는 소다 음료"],
        tips: ["버블 소다 음료를 꼭 찍어보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피 및 디저트", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 7:00; 화요일: 오전 10:00 ~ 오후 7:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://banta-cafe.com/?utm_source=google&utm_medium=mybusiness", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1503196118230104183", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%ED%83%80+%EC%B9%B4%ED%8E%98+by+%ED%98%B8%EC%8B%9C%EB%85%B8+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "89 Coffee": {
        photos: [],
        placeId: "ChIJX9UIKo0R5TQROwlMl3vkFP8",
        placePhotos: [
            { photoReference: "AWCwydiSSy6fCIcl7_BA8vbz6xabezVLijiojqYOqlpjayv8u7801zvg_wYbMaT4E4sDsTPYdF911g_zW2gGmDwLKIUqxkSGyD1jJkT6gR4sNUnflB2gdOjoa8nTXUX16gk9BtoQ2KRP7iB9urm0JwwKA-0i8D2vrJhtCH86mqdh_9cQFEKsEbeA1RxZybUPewuKvXHD5Vd96Yw5iO0JrzhRDfnMEaoE8ez0ym_RG1cOeEJy_GCYjayAd4bmrBRIVzXHFCVsgN6lmhPPfkKOCYLmXUvNUM14VvGRQwXXJ-pUF3O3M9Seg0MrlpTMReAZW8UNPZi4TLXH4xmucvzn0BD1EIjSmIOhuDSPvDhQ0ysrFlPHgcAUINNy6HUF5MvXjX0y0BSeXIAwme-KRjrETysxNNQuW7u7IhyRZT2wUk3ZfL6qmDm2", width: 1284, height: 931, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116831139534678681343\">Ocean view cafe &quot;89 Coffee&quot;</a>"] },
            { photoReference: "AWCwydg7df2ve5LpUSXy6Lh16ETYlScSncimDHLh0GDQE8vKas4R-qcnRpFh_rU7qh6cSiT-rwb4XZ8EBz4T7GrE12pJN6uxOHXyEZ8t13dmxjT54xNdKLuxmpwEpP1oTjuRgMaIhv-khGNtWhheosEjfk417LvS6y91yloTpr_iYuIUBw79gbc5qSSMNoSmutrBM77QZPL5sAqAzXRqULbuTaFXd0ss-NLG7PBcyz00R6zbipnabQxFYi7Pkd9RRwF4SnnmrHU6c157eUIxviOHDN5bDm6yEt2_C_6su53A6q7lelK8U5Px9dXPkNzcl5FBXogtVfHTKupv-J3_r0vMoRYoHhRwUL6vgF0lFJdAhwBVyHCoiRV4XFfnJ5byg31ePpMXP5HhF3bcbW_qxZwnLw-hhjVhOgo8U7FNlpSc_ClV61tPu94yc-HA8ZhISw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108725378444585124167\">Fabi Tang</a>"] },
            { photoReference: "AWCwydjksJFqJb0d-eqGkAtTAbBi6JoMRyRQxciRfD7C3dPi4S9ijS1dSFVKszQv4ReZxG-GOqDvWDv1kovl8v-LxUtrRQUyoaWipYW2ABrs48Jghf-VqU9G2TRfd_g6figXCPqesHKEZn5KUjJvrrklCASif9NNSCA2zaEaQK4CZhNEGdqot4IJ7BEKB7KREviFGt7ysUafspQ46khYi2Q-HpIMGUg_GysYyqAtCN7ZhLGWhTL1ihMW1GsrqpCnT1bbHTLL5WAZix2DN0qdYdU6haLWxnZN6Hu4qp9VqrH_W8vb88BiSDsed6bIcS-a982gSbt2v4hCSEkwL9wcNCWa0ob24oMoJ3gtdlgiQLc6nqWTrD8Z3Q4kCP8WRYhtDZ-rtlef8aieBJjyhmCqiLM6xsFXBL3YQAlQq1cqdfwy5UXQZP0TCpg17h91GGnSMebN", width: 992, height: 1056, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116831139534678681343\">Ocean view cafe &quot;89 Coffee&quot;</a>"] },
            { photoReference: "AWCwydiY2CsRykeMeBxbSXYuCt12QxMgwT9KTcKQ8b3zsYuYpkU5U6jrsNMtlkt14hQrh15JHMZHzCQZyChiwmOkotI0OZyMC1v041x442_3Zx5c6IwgTqBnvTZEg7HIXUTOrNz3xSXfnW2uDkhOytpU8sHijPyEgLp3ahXH7iZoq00AXkR6fjdPXYaj-zRAYVGHbba09RQovZa0Kc3rGdlheue0Hjg-IMPh7jnOB5CqVPkryWgt6IG7a21rxXIrfzvQQ404sZmJRktI2vNlpKNtqgt1CxTyg3DqyW8woqsXUEoKwEb1JwkUikm9K4gcsc_PkS1PiA9HXtNqGW5xWJxEEJsa1_homsT6q26g5ZlKhrIV3FpEzRaxLmbNs-Rmfp4JP3UZBX9etouBmQDUukK8CX6CIRLPyvlw3Q-IH7jJ8szzXEtJX0khxpaTErw4sr0G", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110716739978426524046\">Linnéa</a>"] },
            { photoReference: "AWCwydgJCD8Fv04u0wjp-IlR9LK6pt80Zk05UD93UNKFgc6ytTW5Ep2j95ker9Z_hxRxKFnRt-gjERtP3QGKfu8QTNarYs8m9bTaqdoAAJ48dB1oECsMEP4HqamFYLtH5pCKbKD-l-vxU46QopAs_i5TUHSPLye7seALs4wdBehET5ai2mYQDbqB2w5rM7Es8IJQkahTg-kOKUYuVW6GHPgTQNXSTK-kTdbwrHmJfjRqmNA2xhS7-k3RlEIKi7voQKhm-7YVALbcK554hQ-56Aw8nhl9TrebGUNkL0fhddX1IMqM_wW-FTzqkFXduHXRLuzyB9t0kGLfwpXeEkA7BVnE03e_fXJlxwZwrmb2SR5t62uf4icaYoRqEI5BOkLWYE87RWFJUsDD5VtPt8-gyWlVnQfVRA8uXxgrJ2MWX8ozrCXPr1hx5cjoMX_rc6eEhGOp", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108725378444585124167\">Fabi Tang</a>"] }
        ],
        summary: "오션뷰와 맛있는 디저트를 즐길 수 있는 평점 높은 카페",
        updatedAt: "2026-08-12",
        highlights: ["환상적인 오션뷰", "최고의 아사이 볼", "친절한 직원", "귀여운 퍼그 액세서리"],
        tips: ["브라운 슈가 라떼를 추천합니다", "굿즈 셔츠 구매가 가능합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "아사이 볼", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:30 ~ 오후 3:00; 화요일: 오전 8:30 ~ 오후 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/89coffee_okinawa/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18380567198676289851", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=89+Coffee+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "日本料理 行雲 | 沖縄×日本料理": {
        photos: [],
        placeId: "ChIJm4FbFcVr5TQR8Ka8ln7Yqnc",
        placePhotos: [
            { photoReference: "AWCwydgWZeoPodz6m-M2qyxqDn0L6SnrSjwXHO42rCbwtyhhjkvHDmbkD7xmNMRKiROIsio_5GFHgFGUjONplAJQljOf8Xj2G7ogGZC-_2S4fSnW48zl8pAzxV2Quy4OOnhZl3sPWq0j-ECbaYy_cHz09QwDJk1LsUMtH5xAp5Ig0acDwL-4DuLZYAwE75c3LRlElUU-EqhMp4HnptdVqMtd3aXHITC9RjYc3GbMleTpgFqo3kT4gBBsxAP0yWZGof3hO-INzUOWy-P_Ys0qtBq2m5Zo3reiPcKweKXnCPiU6S6fv0F6aoRyeQgEz0OJFe4918pBC__LOXNkhrrrae-bRU24IHbyaQaHGN6VS40BUfmVnz4ObYQTRlKNPg2-EnSWO31d7Twe7xzTXo-VFlBc74ga6_x47Ij010z8tpT6gOb0Fw", width: 1440, height: 1085, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111291456306541856087\">日本料理 行雲 | 沖縄×日本料理</a>"] },
            { photoReference: "AWCwydjCnJQsomaOnCdYUgDuhO1Pm5Pb9Sn8Jj7lYJXzZ7njeuKrOT8C1P7_MC3GW0RVv2nEqeAGOxaazntgOhLFHGB7FTkrLfsl0wytzB8oh7cGWhKWqVEpk-725CbIRfyA3AbiqnV1HPheeSYbICQn8WnoB88mgCDM9dBw9Y7OWv3RO97LrYLOfR4A53GTQul42ArmaCb6k8T6Jp0TtJVpwgagj2RDcI-uJnhSLqlcSRZuFzixHYjeazCSeOWQfRDF1CAl0LD32z7EQCwCnpXnMFWiKHVzlu5jYcB3X2lDOdjtSNNLqWkdwGI6JBAHhYCDMFYxwX9M9XPsz6GHwUpx37LonoWbKyR6PVaniYVdAsTj9HP8ItXGQ7CueK1h8QxRfFcyWuhz-ZtWu_sBz_vfMn0gP5-6BtysU4jPmBcmVP5gH9OwAP2QjIsvJNkId9zh", width: 1440, height: 1827, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111291456306541856087\">日本料理 行雲 | 沖縄×日本料理</a>"] },
            { photoReference: "AWCwydijpEa3ijWreTzEl8L8AIyGEFAZwv_HzMxYjQWRWvFOX2sIlL8ga7uXclw_iKS9MDpJuqqFH7ai54lFRhKCwj1n_eidwcrK2ZrYffQN2opPLdckgqoQAXGfSvLXPDwWo-Uze0qJ7MgUqvWdYZfwG_n_kV6g0pHA1EYuhvyXSIHhsra3E5o1p5PfsDtMXgpZUY5A6Ztk7gDRP32e_H1laXWxW-xAdrRmgk5E_npNG_mw-yBoblIWA3cZcPDLuyWfOlLPxUYrj6x1a_bp451nHF47JLy9w_a7GY-ZryMrwSfIMLrAQNenf9386rTr8CvJsDgvlI54UinTJuLwS8oYVLBrc_r4IiOlNJT4pICotBdSPl6OFDrNqoc5ye6krekyiMVax-9h5l6usgynGpQwR-w0VydOplgXr26fiD9j836ZmPr0dIi99eyNRdK8tbFi", width: 640, height: 360, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101788347239112505944\">仲西智顕</a>"] },
            { photoReference: "AWCwydjR7SvuVFNgv2Oi9nNWr-UBI94Cweq6AS7SSmxam4SgKWLjiYJViF9oiJHfRceBjZ1HczVvY_JfjbjY8LyuKRxiuAp9Bk8r2FjHSoUllLYw3aIKCLzV2o1EuHV0hyTz7Kn3L9AwB24KDmQix6h7Psc1cixXKmuSP7jr8fd3wD8nxjKO0D5j-7apJVmC2wVb1SCLYvZ9o4aZTJTIbVMSNimRE4oqEQ_iW5WH7XFs2OA0EBt_XXfEBlxJTHvUtodyMP3J1iBZS3mEJjbciRAtDq7ynfad6X-hjLQHxKzaQ7SYJKdr2ZXBvekwCg_gbT48ea2wrhObq6F6B1eYxhwSbKu4S88aBsgv78YyPf3mOclMg_mV7fma8pZ8_snkvgXIIm_NdI5GXOaDZKiso9M9aHmfGc7SNQbGpzSf7qwdXYVIYvgB", width: 1440, height: 1086, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111291456306541856087\">日本料理 行雲 | 沖縄×日本料理</a>"] },
            { photoReference: "AWCwydhibHIPtKg1CGpdUMYsUKFswwjGmT5boZw6DjAYFigM_IbyDG9S3wu1Amf5ysMUSJU-wBqPRSZfBAFTbXTIoceb-kz-L8mrHkxIZUp-XG1EMBLoDzImoGtgTd9gatJBPvzXzrK5ScQFzkHUhGevD44FGBlCc2XEWTKrx63kKDHSwo3FF5YwZ59MNDjThXno1s-IhrxVVCRkPBIiPb41OJb5zg6oSwvkTkPmn1j6U5JZwlpeUdgas6af0-R61KB_DSA29oyDEUyx1prNNA3LuOznheIZKEo1aATClWuqKu-ezxas1btNQOEpzRUrM_d01JfyiIOLhs3Dj44-pEcPBDNT81H8QIN43ewC1LZaWtQAboyjBje2A-DwAb1d3-MT1WkpMDQH4Sv67fsW-pgZC1uhHsX11pSh8gkoO2UrGh59YRM9b8ekla1AWtCM5LkD", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110762232345120360337\">patrick lam</a>"] }
        ],
        summary: "사장님의 세심한 서비스와 정갈한 일본풍 인테리어가 돋보이는 고품격 일식 전문점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["정성스러운 일본 가이세키 요리", "차분하고 깔끔한 일본풍 인테리어", "사장님의 친절하고 세심한 서비스"],
        tips: ["카운터석 위주의 조용한 분위기입니다.", "식당 바로 옆 주차가 가능합니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본 가이세키 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/kouun.okinawa?igsh=Nmp5eGNpaTc5b2Vx&utm_source=qr", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8622942474760660720", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%E6%97%A5%E6%9C%AC%E6%96%99%E7%90%86+%E8%A1%8C%E9%9B%B2+%7C+%E6%B2%96%E7%B8%84%C3%97%E6%97%A5%E6%9C%AC%E6%96%99%E7%90%86+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Bisen": {
        photos: [],
        placeId: "ChIJrZZLCgAB5TQRXcbL1Tf4oOI",
        placePhotos: [
            { photoReference: "AWCwydja1vUySWeHYXo_XY10e_1iq0q9vAZn8adKwVUA8zZC7pMA4Cs0zIh_455AJBsDvbwn1e2Fz0dfDrgZPXjP5wR8FoiPCGpiLFWZQSS2fy3OU7mKg6626mCCZkJu4K5GBNCAFctDlb7XgHxXCpMxGbEKJfPN0dEvF1qs06FVFtcLUkxwvggteziFntocPtpdlVlSJD1DBm1ehy-upYrFeBF0C602HWkfJoC8Mn4J4S6VtclSygtuD51i-Na5s2KSIYalbYTsLBy5z4iGC0Dv3X3iMgSJ8_TRjtpeyLHQUrLxVzguU_9P2HZG8D7ZuK1rf6vZaNNItR0Hw4lmo_h4qERl5Ail4-I3xaPhgxDxdzA-_ThuDHgU2YgdQFHO7HSNOFsuBoGiUIboJDCIeF0tX8Yw7MOCuLNoaaP7vUs6lbAupg", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111924020353724814676\">美撰</a>"] },
            { photoReference: "AWCwydihXSRG7KYkesi1CbQQ_DxlXr2WvlG0sI-o40qN9ijxPGRe028LxHwWgtqfwCNfLET1GSnQFIgxdJDx6yfX_Abgb_DpB2JiMq_mBaigSX8Q3QXhQZ9h4JRqrQi7uNoaSODOd048sdPu0snW977dOX9bMxbi8NEyNcy2kRa6ZPfqN_j8461H8a2mOZ_qbMGnyUxjfJpzke1DXMdas8fLuTSv7Ekx8UQfjba96nuLN_tavUIkZYyv8-h4Z4Sh8vRYvZ27g2BSVrWBsCRbd9QjoOrvycXwieYFuN3ovHbaBBrIqNI1GEs1nn-r7ziWshoKc4xqgl5PM3KmPj2G5HoXN_9pCulKu2WhWEOpnFNh5XcWki5nRTAfqj4lqRR_pd4yjJl4vj9fzFHeF_fjh4gQ-1mXoCgEne6BaHnG_hamqjMC4MhQFquZmsJ2tU4FihrS", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113912162808101570505\">Meriç Ali Yiğit</a>"] },
            { photoReference: "AWCwydh1igQdgYHDBjxQkGqcofZLhzranicVR9sAchJpyytcIX8N17GsjthlSfJw2L3mTRNRY_njeSvt_6CVSZJ5yeP-LHtG04zL3_mhBPMKKN8VoOkS9r8C84iMgOPVTlIbxakfkW0hnlUT6Bw72KOtXORb2YE6zI1We-1hAvBBcq94Z3ymSfXQxvMporj1LVS8Af14EY_Uuy57TrHYkyC2aFXJQuJ3xbzKc5jRsGfyrg9HwF4-2vhgQC4cyOqRTPfo2A9qyOLnhrkLBKkj1KnUQquoxvJ-Ha8AaHeTKyx2H0w3NaOOJciLPdttywTEAn2SCqWqt7vKdit37Ux6LBWrS_wqYQm_clnnumG52QwxWmg6hVySb2RFXz5wDBTArX9JlL-pZ_BAdvq5OR4rEjnHSbKGTewagK2X3gP8xBZrzXtKkjT6HQUv-6KyHIy-ugpx", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111924020353724814676\">美撰</a>"] },
            { photoReference: "AWCwydjoApB9SAYYNp9ksbSAcy6oztUlKzFUo9ircJve_H3-SXjQpS1hWPTUjAyKsjcVEOYfwtY3mPq0D6FuJ_YsYMuu_G0u8bc76zIcZoZRQEhQJ3-tgL2JP3r8NEvDqTuibjR6EdP7B3iRyafDO4tsDEVOJSiTTstEMj86iz337hQIECSNOaoAoX3703Z-D0Vms4xxpZyqk2DelSCkKMnlnuHUcKPFPRubOlLf1Bc3d8BSx9rblsCAlbUYEYAMYVxkLaVxtnBYvZUb7Xk_q2rQcSl_ZlelvnZ9tJD42LYWt5UGxNqpiUhv5-PzAODcb7lOLnin-YHYhGtdF-IIVNbzqWpbpEYNBab6QoDC8qBztfs7Iz950PTOGFBViukCo1O8tU20JKePUKFZUIRA_ZZtHbxS7EG-v2clt_am42bkS-eM5iZkUp7XQ9K0wBKuQS7z", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104402624275315273623\">栄門竜樹</a>"] },
            { photoReference: "AWCwydipma05xnUNVI2_NyusAefsLNFAkPpyYzeGNGoNSg-T_5IXNKT20qmX7ilBMDyRqfT02uNwrtv5f8GwSOE9IiAfjZlDdb3Z7jcbUrR_zqgpQ2v9sXvhq6oR1k5vngrJ4G-XapVHsXyEqAQOpAH3YJXGa1cSrcn7cVaVAlCjY_Q6hleF-AGF_lMlxJb9E-6MKyycAHFh5CEFA1jLfBp1nUeO9lp8tHAlPTmaworFD5U3r9PoQUbmNOoncbCRQOZWNdwuEldtYz48iGPcrqGg11UCOe3dnSZUXeMD9Fh3h3FhD4-buTMMBMchyVlvjv4zVOtPEj7bvHsCra0LMPOP-wDNujNFvOT9iR4TZEO7kgeKh3rQLPC_RqMeaJjKcBwz204j-cnJ1dUtZuEyjG2NQa-Q7le0CmMYV0oNBJEQyiTB1P_A2ZUjXy8QmX0hliCo", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104491104883039332860\">Wendy Liu-Hayes</a>"] }
        ],
        summary: "품격 있는 분위기 속에서 최상의 품질을 자랑하는 스시 오마카세를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["정성스럽게 준비된 오마카세", "친절한 서비스", "독특한 이카스미 샤리"],
        tips: ["수요일은 휴무이니 방문 시 주의하세요", "예약 후 방문하는 것을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스시 오마카세", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 6:00~9:30; 화요일: 오후 12:00~3:00, 오후 6:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://fc03000.gorp.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16330325167539209821", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Bisen+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "히토시즈쿠": {
        photos: [],
        placeId: "ChIJZ-1HTh8T5TQR9sE_j9lyF44",
        placePhotos: [
            { photoReference: "AWCwydipe3LH3IosN6aK1qTsyDWUa0D5tsPCIHcM-2B9m8NinkKXsY_gsyGYMDuEEH-N9jrzaLUR5u-mzB0ULZrmQx_g0RozwIylHB2X4qzRJkIUd_nY4tg_-pVUNcqeBpxF2mVAuNG-LUuJS8GcPUZcgACXkX5ON5LCH5ziGK7b-w0Sh2_Jx-s3k4xxyUHBKJZLmhrfC5slPWMYO3v_HjUJPateAibdR60hc4V9sRQnPfGjLLMUrCtizEVGCiEO4z2I2zfZXZDS8dqcBs3M8USxptEDsp5YrI-cBGbvC9SaDwHsBshwmcs_9facGqTG3gQbw1tbzvIvuMB5e-OJAyRFSF4pyRrVkCYDhwBOhclHoez4i3FdD7EJBI2fWue95JBUEw6sJGqdOwF4KMQy4W9KYdRtWFZN1-5OTOvqRuTrSNM", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112031603233707631284\">あんぴん</a>"] },
            { photoReference: "AWCwydjooBDaRe3iiJrEjrLRbz0KrJNHriVUJviUssK50CTDQ1-ku60JKD4Xdjcz9c1thUup_oxvgezd81f7b3lwkBUFNwkgBcujS-G4D0DwtFi_EA4X7s_HkcfnYxBJLyAn04JHvfqFMOwJ0rjP3Etl6AqKw06yCrivWkx9p2DveqGZW2hy2oXUeVrQIQvgxigetaRszw12q3367aIJwIVwquxEbtOl8j6RskqgK8CWOPtBgSlCSYiXOhe-oVZB-3YfVvhS-ct1G5l9zp3milgXkUq2lAtYzv_XH-cwevA-nfK4OC2m3WqUG5k_LpeDei_vk5VchADeSNU1Rc2Tn7mQeM54zaXi1hfHzGlIOdzVzLbdo6XFpExyCcpC946iBkS4MKfv8C7cZwNLs8HJpvU88sdvpI73Jd0lBE83SxTxakGjw77V", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115863823278475975540\">大城貴志</a>"] },
            { photoReference: "AWCwydhLNxUL7d27cIjRAUV7cQthoBf9U9qU3n0qUC-HK4TNIsI67i834x9XDcSVJvyHrwsn3J2wRBHhckG_a4vbq7OTX0wkmnJhN2A2wvYL7HEzu_bIJcVJ6Eolu2mhw6OhaeNk3Helhsok-wbZzp3fAhgDFt9rfDh7U27kEU8HEm300VQ19cjaaXMtPMNSgnRD9kiC2u37nyzxtOaZFXlLgYtXRoMjUAKv_NM2r8DtSXHNNg4Jwvh2AWiA_gkBU8-5kMC24SHHZREl-koHnoLUGUyEMhDEz7O0Ve901Dzfe7uC5qCddcx39nusLz-2rLxBXFEd1dpikaWhakx3zXNUiTrGo-hTgRSI-rsWX0pAHQRG1uS94ZOpIn1BbKoIdrhFWGR5OvB9rggzFGPIaQT_oHz5LD1naSJN_x0CTFg-mA6b7zO7riHiTR0urQv6Yx8h", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103614101794116587983\">鈴木健介</a>"] },
            { photoReference: "AWCwydhwFKu4eWyqOa0V2jhos8voW_hIw7-TZtCXHPg6noQpMfkixEDRg8z7DjaTgIAw25RUY8WEpdc9HsBdHL5WltH49ojJ2LuZCa-RmagcvlX8whw5qkLlcchWGY8kDB79oCmjTvLfJyiUKKjmUzsGJSyZTmSTNO-AxgdxSxpdl1kLjwaFlD-SrUkwXjER3UVnpwpyqfAQQ41cbjsApI8uNuSKv9_rvvi97RUOH4HLJAmLqK35ZBaBytkZnzftyKAkZfsc8u0ixZX3n3ewiCLO5ecs4cpdoTMuOO0xZ2IMPfB3PpIjXoggG0p-pv-otXfKXG7coVKGsO9siIjycqajoO1bGBFSHONX9-qmqFIM3XT0ICKr4rLGxi356WSs23GEHh6okLtpu4R-853Vks6yfp6eB2zlHNO8Id72sL6_lqQuIsdFDxNl1xaS5G3RuQ", width: 1198, height: 931, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111546427845186028703\">GYUDON TARO</a>"] },
            { photoReference: "AWCwydjvswxvWXW5AIgvmrQNH4MGsWOAOa_cMUYxpQT5XXm50NcO_ZDJ8ID_7fkVYAQb9ixtRpmsgwEUXf64PrMzlXJZn1Zfpz4rIxy-Gep8-e-mJ5hSj-8fELRoPzFg2ICa_Aot9VogqrpIcHBazE343gw0vJWA0f0NiTTUMo_VgJrEfvypd00D_P8Sg0zZ7dR3dSSFAOiDmTEOgxfe-EGe_w_4rtNOFxAXo9fY9SCkkqNoW5y7in-wL6rRI-NziUOpDTpM5KddfNUVL81tV34iqQMUHmqP7AiW5zpyNvwgtmHSrT03NleeA3jQFfFVic-EAisGM2b4awiWM0RSnLWppYBMeBkHxKZtoMFzblfxFC-qQvwpDfscYLy-mY4FpYS6csX2ciNmgmhJDcNyAAbvFpL8sPYBwrCRWhtThd6ZzVvb6bLDsB1Q1r0fYFNX_XB2", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103614101794116587983\">鈴木健介</a>"] }
        ],
        summary: "소재의 맛을 살린 고급스러운 일본 요리를 차분한 분위기에서 경험할 수 있습니다.",
        updatedAt: "2026-08-12",
        highlights: ["계절감을 담은 가이세키 요리", "정성스럽게 준비된 일품 요리", "차분하고 고급스러운 매장 분위기"],
        tips: ["다음 요리를 기대하며 천천히 식사를 즐겨보세요", "계절마다 바뀌는 식단을 확인해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "계절 가이세키 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 1:30, 오후 6:00~9:00; 화요일: 오전 11:30 ~ 오후 1:30, 오후 6:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://aoikaze.ti-da.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10238778556586902006", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9E%88%ED%86%A0%EC%8B%9C%EC%A6%88%EC%BF%A0+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Takanoha Naha": {
        photos: [],
        placeId: "ChIJ__9r2n5p5TQRmLnuolsmt3o",
        placePhotos: [
            { photoReference: "AWCwydi0ACOwOe5xl4XwyFzgTkmIYgWXXGqxFUxk03IgU0y50wIQtNuH-JhP4mLnYr4kidt40HNUxAh0GlArA70ZiSHgj0WsbdKWy1ZHHazHLHe3g3iN2wVgAvTBhyhe7oTdHx-creD1qlqt5Re2j6EFc-GRzOnY5Ww_V7rsujFBMIf9QtN8lL46leoU3qoHF062ZWmDIGZAd-Vwc2KxItos-6l2owfhn3uLj9wuQ95mBik1P7iYrHApzApQqObfdqPXBvVyrLUrd1-Y-Mb6otJtgTJrRDwzG4QxaedfwRdv8E0QVoBVgDBCAdiD1AE9i4e8Hws2KfWsjgighi2FJymR6Qx7wfTBUEXCkZ7sE3F4MmUSJbrgTGJDRgTgiiUWgZVdM1pflPAM2DyZTKtuW-3J9z_qm_BUkOxqg7enPBNQPIra4mQL", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108113238978369413978\">日本料理 髙ノは</a>"] },
            { photoReference: "AWCwydj4HAuPkVAGc_N4B9lXJSW3d0olOzyG67P4MynGMDYDGMy60u29oqYnJtpck9AfXCo28MTuW5TEBHphC_q-Y3CLtwmQacDdgN2_zpFP9hb7lASEXMccL9gOPj7wqwcr4uJLaNaIgCtIe5Rb8AjSLSA6wGfnfGRfR_jMlSWwE4RLXQT1uU9bIxAKXSy4rYYkiRoETanSAL14EN3NbSfxgkrex62xhepZvXFA1TXjrEJrCvxZqWjOhz-vFMGuqEtKVnVGyHkxBjhg7RAegFWLva9V-0jUPQTYmu6lPOFV1jFo8_OTV7fl7R-HRyPzr46_BVZKbuArc2_b_l9981aFN2c4yb6lcec8URnk0AEkrGOmsLT_Qc8mbiUzhwsUAcjrX_Cc8MTJvN1xVc5nebEJgETmRuUEALhSa_A2jtKTLyrJFpa7Pnxntxsaorpotw", width: 1108, height: 833, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108113238978369413978\">日本料理 髙ノは</a>"] },
            { photoReference: "AWCwydiX8SfrSVyvp8gmxZK5vlceywIZxrMnHaYKExqq7Vtw1oSNUSgE4gxTyIj776YYUqV-OYG1IG-iqdSc36i5x3GaZgBSklTAunKeKzvjMScGtXthBNol-xGC_trbTr3L-glrrNRhshPl0Nbz5CHJySZ2dBIz_qWqitNqpNu50W89ZR9hUEQkhoNg3dCcMScMeUzonEbOQw3NONGbXebwv6cQNjYu-9GTCUBVsx3SMkD3_BTPgjty10JFKVqHIrIsVyqKCit2mCU-D2FAG944anj4S5xczWl3GOverR1-duXqS08QUfaGFyNjrXFAfq0QTLlK0D3SByNSvXl8mc_wmeLw6Hf84Fc4xgOMKWwZseHVUjv0ktJSXf3hTq9M_Jwz1loBoRRD3s_06qYFavNL9rel6J1iRmKSwICYYLuqohzs2FbLzAC1T_cMeRO2nQ", width: 1108, height: 832, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108113238978369413978\">日本料理 髙ノは</a>"] },
            { photoReference: "AWCwydhBzUpa2cL46ZPZK7UEnuWoI4A-FKnGKjzCrokW3QMDk4YKY6lxr5jpE8KdAoG7GTIWwBsLIim09fryeFown3BtbynIGd8KKhyqrB9Xx71w2z2htiLWH4xQbLOJ0lFipxZTo3lvoEKNeT2RtJWBVKHwy514brsDMgpfn8QrB9MhYQ4VWfklmTH4Smq-nqJj-dv31pElWQHSXabrrkfCTaUkD1pBhJvglsXmpcjX1hlxMRriTG3JM911qmIDotvLndWGIwo_679c6a973T25NiKM0z4M4wlIQtLnrjQ3FWFLl4ETzkT_uy0JWfmzB4dO7X3u7t7mR0zLgw8p7uIcstTZOHpe7Uvv3NZQeshie_zEm9AWOGLxcenRK_4XDklJmtq69BQa2mpMIbjmg-T_-M94T8LiNOpFka8YulWQyPvYFuWhzMQguJV0zwn57P2D", width: 1000, height: 667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108113238978369413978\">日本料理 髙ノは</a>"] },
            { photoReference: "AWCwydjZ7nfzpnEXG95r25Qrl3O8ChtFbTqdzt_9olIimW9dlVwdTp9j7wsX-EFxVZkCS5wg97UT24gfhnXjjvwP4ZnbNTB1UFKMitx9cflyYmSeWkGAYMag91Q4ca_SCi8hsWqCnmPt0sn_RSpJ83D8_V_4LwJc1H3WdUXTUfPzRBTutI5-SU1CSI5l04VykEb69-ic3P3ybRIjd2RL5HCN7jivur2z4KUr7uKKLAYGJwNZmTnQ8k1GxnXnLISeOrYjR0_Q1bb6H7_WCdfTTUxSUaHM51TTJq4SV0160zQ_L7ypWtFfnFnQUesmXj23FXak5ovCUebaPhz2KVkb9YPuoN49iNSSuLnCE6pFXWBpMsAy0YiAL2PtUOCs37J4TLmeAfD2oqAP6mEuxetZAcdSMculgyVq_TSngQaQQpwuTBbpxttqbMZ-JbejBBhgJA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103566917333081069786\">K -</a>"] }
        ],
        summary: "품격 있는 요리와 서비스로 데이트나 회식에 추천하는 일식 전문점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["고급스러운 일식 코스 요리", "다양한 일본술 메뉴 보유"],
        tips: ["예약 필수", "코스 구성에 따라 예산은 10,000~20,000엔 정도입니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일식 코스", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 6:00~10:00; 화요일: 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.takanoha-naha.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8842578568382691736", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Takanoha+Naha+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "류큐스시 우라오니카이": {
        photos: [],
        placeId: "ChIJJxLCWApp5TQRiu4QgQS8jeg",
        placePhotos: [
            { photoReference: "AWCwydh6ATF_SV-BSte50z-lEr9-onWMC_-rNJkalGQwbKH6SQWLkGyhEeNPqgt0Q27EL-g5ROVlSxDdvrhBL950c0WE9KFuwl24BnbMqYIko0-Qp0gvR2iFt-jFcRTIquOVhdbdmuwNR8vyWPwJMHFJ1sjpVzOkE39P6PZTOE6ClH75u4OTm_XLZX-K2K-n9SK1WKQUY997iduPwFRO_FjLjQjD_ARKfePa2iOAvmfiNe9COQrDQl04gYtQYy_xaBgtp4A4oTYZ7dZsPQAwjiPGidpR0RbdenDAd6PVYhsAccFvAP3h-s8HcDHTiGdLakIMvxtFkn4QudT2aJP59zGffc05bEiNsys4MnzMi4-znIYZ5cyKDqUGIEDSxsVXJbUBpEUm551n73NWk9oOo4VI9Fb7Rni2IYJCETajFvICOwW4s83n0q-TKE2_YF9kufyJ", width: 1477, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103329918871972232769\">琉球鮨 うらおにかい</a>"] },
            { photoReference: "AWCwydhXjA9l06PAg90MVxQoISDHomKVFfVN-263B_KvIlI-YB8hbsxbROxvl6JP2IydGbd6tLqiHLBYHf4ytcBBu2kdJiiJKjarNLfmFwCM3rHGuvlFKOf85hZ6uNnM3YuF4gJjCj95QRFbFwkrA-wVlruiE1virBegadDl6BgNDb99fg3WYtcV2274ey43H0oOLRpFK5EuIF8z56azTd0lulvoCs2sVaWu0fTIDd3QXBXPZX7AEJmIucZXFi_b9JEX5pMpUj7hPryy8TGP3gDAJvbAW1F2nOykEYYLDizeyUelTIhUPIszB20XU_92z9pRVsTD7-t0NK04pjXs0lWX6ryZgaJlnlbmuSSMwFP3P9RQ6RI4vkYJORtr5e4jU3ZxXoYhbgsXITfC-EhoF5ujrpV9Q5CR8E6qlBJq9NGY6Fnt1R63VhWgkb62vFd7qufN", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103329918871972232769\">琉球鮨 うらおにかい</a>"] },
            { photoReference: "AWCwydjN6VLRq8OiDWgojAIFrGI2_95UWiX4mgGwifbS-aoPQ8Gadu46jGl_y8phpITGA8PxqGj4mcgi63OiWEt3fXI6QNOTwB3y-tmXoTz3WTYgbpGrBbKwe7JvKtUjvEV2EGL7PtHu48Slpr48GEn1T19vIwg_cN3e5KzZM-8C0Vlg_pOrVkVvbg9xNGb-9oiVLxmHZPfr0H0aNM3se_AzduQTRC32Sa2wM4p6pOKFc3Ma2kuwKYyzrWPfeT9dmFDHpJ3WSZ8xk-PL4euBJgbAO76H_d2uriHGkx4r-_rsCkmz4f0LhghhYIJHHZzE72L4l62Xr2C4KENc-1E0ADQLwPwAZLxy4VUQYxGFZhh-CXi9xvVEuey0gVq1zS8PJRAzYWTv_WMCary3llUogjEubk9EGC370vQwlO-ZjHNeLOhXWmdv371k3lH-U7PEphEK", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116573277203666484310\">R O</a>"] },
            { photoReference: "AWCwydjl9vp_EdG9qcUmfaDMxT5FhSZHtxvyq4g5wKE-eoGCEe_oOveFxphxLd0Yk_fX1pnC_-70dT8XBpsKIpHRFpM8L7BAmNXfBWTV2pl6HmG0sdqtodE99FHaouR1uRYzqaJXnENRuv41F-JFUa9q0w99OQzK65H6aqddzXswMp0rXQ3YIoTxFrizks40MFuDPaiMzlSkXIo0RlA8PO8JXGnI5BRMZQWdmWZL7OvnmpUfOkRFVW3KnuH890yzIwC4rfPWbB2I5qbylIn8rSdIfL-mLlmG_K6Y0d_nV2QwS2iiSYrWKex_OzSzuEHLjv41Mgcbxx6XK74IgsK-az8JeQ0D4VkLdOVrRbMobXt1EPkH_z036J_xRs4Ser1S1bRagtPmQjFE2UgSHzeqyvTRfz_vnoivrf500IaKUZd3_6uENumCEFtjae6HJ4PrQgrQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105335869715756458686\">Atsushi Shikano</a>"] },
            { photoReference: "AWCwydgk8zXBWHEb0H86A1izlkaIWUOQlRC5qyhNJk_Kihwy2lW7hX8ljGKOfCqgeEnf4niCXoNfp8DOxdVUij--J_qo8DfchkFYxTDNQLn3P_Hve2c-vZ1hzvPQlcXyDwUhZxrQcs_sDp4doaFKNhLVA8ILczVB0zSsIjrAW7KjDfgWTiVwvoe2RPDTZdJXwRKKDfxeFrm-NpKOkKgUm8FicrWKTaZ1DolmTwPsSeLWrjbvN2l2NKKftca1Tdn4AVlI0cMOnVt9KPtDU90p2LdMp96LreoZUZ001c81lcM33xUv7DYKmUkh9pfsKjmTPGWc4n2vsDjtElT6qGpvpJmRnKfr_8qqEpMrK6dKRmEA1_A1tPeW9rnzdaHkXnhgE649auYks25F9qK1Q0AhhO3mOQAZNT-tUTuyUNyC51PBNS5t68QtCdVHhtKJTL_SyGhV", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115051943226943258716\">与那覇朝路</a>"] }
        ],
        summary: "정교한 요리와 세심한 서비스가 돋보이는 고품격 스시 다이닝입니다.",
        updatedAt: "2026-08-12",
        highlights: ["셰프의 라이브 퍼포먼스", "요리에 어울리는 최적의 주류 페어링", "입안에서 녹는 듯한 신선한 참치 요리"],
        tips: ["인기 있는 곳이므로 사전 예약을 권장합니다", "주류 페어링 서비스를 통해 요리의 풍미를 극대화해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스시 코스", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오후 6:00~8:00, 오후 8:30~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tablecheck.com/shops/ryukyu-uraonikai/reserve", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16757256516046745226", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A5%98%ED%81%90%EC%8A%A4%EC%8B%9C+%EC%9A%B0%EB%9D%BC%EC%98%A4%EB%8B%88%EC%B9%B4%EC%9D%B4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Nakadomari Seafood Restaurant": {
        photos: [],
        placeId: "ChIJicItN68a5TQRFHPGJ4amzYA",
        placePhotos: [
            { photoReference: "AWCwydhShuxFHi_hxIXaZf6AaK-rSv4WdGxEZlnAjLuVStB9aY03iPpZFhKGLb__IO-aNoUOr7lQWJMIBLzqPTDgcThH3djAnsL4AR90-bVIAnyrsRFwHDmZ61M7nhAfPgFTm7JqKKK06rzvoWQKvWE1IeShsHIzw8cH-wyfC7sCrkQX-_WdxqSJ9nGhQH5y0YPz2HJ1NqDTvmr7iXB3Hg9SNm2sDJwS2T5qiWBXGDCaFt8hty6sfwkks4TB5Jd3qgu7U9zRWoZLJYCYWTct75DdhDUtBUA_UrXCxMkpcNhUMWCFZ6R-1kgb5jNP2y2allPpcYJ24rw3w-oLvhGkCoijjcHBqHJa_e0a-WX7SdvDXMnWHntDefqidkeh2df7xlccvG8MvZOcK8yf6XU9oxMrEs9fqTSPH5CMvyFYSlGeSxAPKTrU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104885470361671383374\">Haitzu Lo</a>"] },
            { photoReference: "AWCwydgNwb8f0HbNvQB-e9x-XEnyakNnIE6TCFC5j5MYzcfCid7DVRMnaDFsRyFRYU-A0uY5X-s1ncAfOCmTosMzqM20a9NgAMTuc2Fzx4EVTIN340S5sq3QDue2tOqsmB_a6sOGVG2yYvP5x4WNlF5x26lIgSrKxnP-IS8QRc9z35bXo2uEaN_iOFGezy2JpRolmnqlnMT_DmQfTSArowhJD_W4k4M_WkTqvIDT4GhWUkrRLoPC1FcS4x1wB1IDB9ay7qItP-7fysq0nhYnEE5DZK1T3zWjE_-B0WY-ACVnfflfkZLNF-T5Nr64IqKUoNTVtGhZ3wMp9cRtMvk3_ctGganjUMfhXTYQcV6UBFAGUHY9QIVw3h-PaxGMYanu9-c78oq6TvO6Zp3r0vn_mVvPV85NwKKSH7xIQ74_zr9Jynt8ZzY", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103779925399079781642\">Archie Yang</a>"] },
            { photoReference: "AWCwydjuXWgeKhC_gAmMDYTILZKeocrtFX9So_RUFfxra-IpEghPSmnIcPVIuK5z-tTIoxVt6GTPupaXkIw3M-fZeQjhBJ3yoJDIaQgdTOFNkca9tcH3giM3oUDRD2apoo9T57bX6dqAUP5k9CGsCSt6swM6uNXRhrmTa6_U9RQt7Uh4mI7YdmFt7GyfSFYjn1ZW2AdZrSQUu8g1-SFdRthsPAhIRpjCtHLDaSdWMIk3W8OUEvymLswOBQkIcnOM_880SyVsopWoU-yeP3DhFHOaizarOZB5911cTtNoGUsd5PV17Nv5LjuCsZ8jojlFboAFuCh7oWSzcQvNKtBzX5mnTJdubi48DouP8ne7v71nXxnOIbY2zfYWH641EI3WOqZWrpKAIZAHT_9lf3Oyrebqe5wxzbAj-D1t9lc0MNJ51ND2uzSDEysvX0fesESg4w", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105542076967602418504\">Fion ST</a>"] },
            { photoReference: "AWCwydh1nvuZUTOfkrLDPKROphMdQp-0FjKw6bRW-_HRXiw5nC6-Q_0dkYGn3VSrIVoXsHAC74NgITiOVF0gzZFwlVVCCS7zVFuqlnzocUPjdv5Mtr3FWHSbMdSgbQtPqTNWNNTKUIE6Y8OpalZc6-ora9p3TvDp7ESAHCqSChD74V9LmAgUGl3lo7e2eCuS9wyVBioHXOGksxk8PWFJxPzevaU5AoohJSIj_cqKza3O3lMg8PTUgkW9UMi8nnNbLCxr5o1oxIMYUQSm_aPuvcdKLB9sq-0ZfOxaxOhjucKttLfnf_utjlc67E_QUiE32tDIebCHRdBuHvvKXomosv4_sr5GR2ciHlPvMUu5_dWe3cXJjY0PZIv-bXwRys3GLo6iQPhTaDUrzTolfpnMgaOlik3g2Io3qlhcyziMIq3YARpFeKqIF_Zu-z0v306lNw0i", width: 3765, height: 2254, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107504854577969389779\">CPY</a>"] },
            { photoReference: "AWCwydjLs4egejadX_pkYugRkb_aOzIGj91OcsEC-m0syR-Rryc179euVOZzBYSxMw3VI3JnGLswLxOGZxQtgYUQ_Pw_-r93W3bKgNyekNUatmiu_fRqgATzZbz_dAdd809OQuFmpq-sD1veP2jYNj12lZTlqQagCAFrw7RNs8-vLHPC4zniYLgMWjAqSkSpxg-zpy8ZcbwqX7-cwAX5ZrwKKRHHTzeLJNd2WVhO8N8STc8TTlcNriygzT_T4ji6ONeBEhqdeeNoDKXFlBJ0Vxi9flVgFwgr6PitGuZfKHoL3CaFJ7tDo2LQj4J9zft_upa9zuHXWNfabSCWuRA0VGkmwaaYNbiyOjBIPs25zTQl9YuazjWN1f5iVo4T33pNkGQSYH3npoaE7LxcC3AasQzGKkeT0-knvmrBzC4k5NU0tJppgDz8jyM-1mmFosL4w1ju", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110081375529173233303\">Sylvia Maiko</a>"] }
        ],
        summary: "친절한 서비스와 신선한 해산물을 제공하는 현지 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["신선한 사시미", "부드러운 된장 오징어", "아삭한 해포"],
        tips: ["주차 공간이 마련되어 있어 차량 방문이 편리합니다", "메뉴 변경 시에도 친절하게 응대해줍니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "사시미와 오징어 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 5:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9281257502203605780", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Nakadomari+Seafood+Restaurant+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카이센 밧텐": {
        photos: [],
        placeId: "ChIJy9ednQYT5TQRgptbpZtCHz0",
        placePhotos: [
            { photoReference: "AWCwydiORw9nqrk4Afm14BjOVvnt0Owdi_9v9_UJZ8lU0KZ7nMjPd-_gyU4P_lCoQsdvIbov289m2kQ60-vRKWqRcdg-ny5e9cWcOwI0JY0LLmohF4ftCuBXP7zWLkPISABVwbal2aQkYyb9rN586sf9_sy1SqPzm8jGVhA_twb_1xdlycC9GhFK_lAhMrot8FvEpP6FFbtcvV55b403gxm8FAXFeX2YcvmPn4FHuAmJkzB936AXn5YyuYq7cHAZE-tGdir7x9OYm37wHvFny8cyo9ahU05z59xqih8xoRRAFe7ZGVkvuznqFQx9OXHCrPUQEHsHFpaaIO-TTn7JPGd3p_oI6pBNtoemM5cGJgVeUnFsv1konEF_AKNM880MIIsnKHpc1fipYGewNIuzF07Bwx5qeDZ3ZPierGpjTlba8tWppcX4", width: 4032, height: 2269, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112301673594976125634\">海鮮 ばってん</a>"] },
            { photoReference: "AWCwydhAnPPFsVH7ToZYbFCo4CsD5TxyaP7UoepfFeV9c0BmFkGGu5EB-iBNTL6Fy6wMC6uNXjGTVsQK1mQxMzyfjqTiX9Vp7GVXrQIW4hiS4DnGQXwerqVuD2gSCc1nSC9612QALUbafKH6xjnA5Gv6EGx9DKzv8Jkrrr85LJqtzBoQzDtOzayaWipCPneaDOcbhTL0OA3DnPxRPtITGx_BCsCedcagpcsMK6wUiRRAQjQlXCBufYZjAAEphpfP_Q0J2dzAu2R9XVy_BSxF01Kz9Ca2YlnmvIvsc8YEoFfnMcPVaWDfrmgOVc4AnSaZnVO1Fk2nIbrua25hyYTZLVJF1Syr1PDecTiFx6xroUPD6b9Sxgz05leutueMlwGDZ8lKhVDjjsWeHuwWnXdb_Hvjz_GvAvJvKmAZNizJUnq-aAJrL-OWUt6VxcDgq7Y9DOSl", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112301673594976125634\">海鮮 ばってん</a>"] },
            { photoReference: "AWCwydiPiMHIncwJDORLALCiwF-J_fx6HBrQ8SR_-009Bnt7XKW9dWKCTAACCP17l36qN6V4HuDZ7AH3rXyYo11QytTNj4KgdqwqKuJhcj7HNSltugrhYD4maC4l0l-YHtbqaNA4c6B7lMlFpBLAmXEO8bGsomZuUUNTqw4lGNF4jKfbHvpJpEcEJ0p3BiKEedZH8Vfc6LMO2HPSB4anAFC28RnH8hPwjirKIsx0Pt4X4au64_zvsKphbzNEnF_POeitMZkTLxsitE45dV0UDyp15gIJuIOfUNqveUrbP7o4UDZbcS0TqiLco1dxSx-p89OMylNjOt9NPrLfCCS4UTxkmF1hjSKr_QGVYjne2i1xNMBwwHRxxcYw1L3O18rzVQZhaQp5MuGG-rgF94jQROwpkAHAJDK3x0JX9AFGBbrXAEzsb3xxTOX9eEtkOrvlmw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116240080877789159294\">YJM</a>"] },
            { photoReference: "AWCwydhqzBo5icjGQsw9Ks6uofoZuIRiXlAgIcdeVRD3Ml9D1VYo1BwoX_dla8E57iEIyRexEvYnlEIQpZE0dehTpKsNcAlAvYRt0NB3oRSPJ61OjAV0aC-aQ_ZzMT1687HVHWSDD5QwKlYGtg2bxsPRVIPGlLyGuzhv2hDhVmgB2MSG97fr7OUS3Dyr_OQRsMUkL_mRuqHofJSbR2FnqMkOVVkeTbWu2_jdzj7npa6I2qg-hXbG-Rch57SmfEXEhfMw1GWH36Ownl01hMZZse24qQZ9aHRm5N0NTKD8QP-lksPDVJFjrUl3GWVcpTKQWqtkMM6vR8Q6CO3lJasWtfrwnrjiiLHqfPLELIop7kwofqabZedc1CLuJmphTpuYVtxY3UZ4bbUh9-BupOlYnajP8s2Kp8B2HOBZ2pVCwyaDoR75ToMD8ylidQAEhKspSGeS", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116759424855059308224\">マミー</a>"] },
            { photoReference: "AWCwydjXT9gSYY50arDtycmuiVuBWVjxtn9o_wTP8pkEydXYm_hFWspMdpqlBefndQKhfxME1weRtY0xKbmWcksHWzr_edHmg4iWjRX1hNQgbIG5nIXa8AAk0vvQkPEbWMDpHRGDOP6SWey4VQ_BojkHc9UWjTHsB-j9lz2FOgTq1tjsiMp3J76c_NtXcbYxHQfWPbd6MHORQFkVUokd_vjLsatgYsof8eJS7-4gKi50EcLDvzji3qo2JCzDmsxbZMPf7wOpmeaNM1Yn_RpByx5QI5okPK0i4HfhGVlqHmfbUGg4RCGGNhQ7XTLnsDkQHlLyLpT53Z-v6xq_0_5z4Za2uM_UimllYUp5m6vmB-xlcZoO6BhFc2A_sMvu7FQYCUQtDf87SOMjDWhxqWmYKO93kecjApOeMcHJX1gp4FMTz0IT8jfTs2H9VVYdfSmyPw", width: 1477, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112950897562219412931\">符符</a>"] }
        ],
        summary: "스시와 랍스터 세트 등 푸짐하고 맛있는 해산물 요리를 제공하는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["신선한 스시", "랍스터 세트", "푸짐한 해산물 요리"],
        tips: ["스시를 주문할 때 생선 굽기 조절이 가능합니다", "활어 가격은 직원에게 별도로 문의해야 합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:00, 오후 5:00~10:00; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://kaisenbatten.gorp.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4404312196853242754", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%9D%B4%EC%84%BC+%EB%B0%A7%ED%85%90+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Payao Restaurant": {
        photos: [],
        placeId: "ChIJEzWt4ikN5TQR3xAMWNRLc_c",
        placePhotos: [
            { photoReference: "AWCwydjMrC8ezCuvtbc9OOfVXhArjfHOiNRBupTN1k4aT9YGvT-Y0e1PVWaOCIPf7BGyya-baCfVQNiU5jfd0i-_DTR0qaJ_vVqhimVWR02wBdrFVJT8EST79vkYMppMR_klFH6sAXxlJCOJDF8wXwy7IYoMok6RtzHG5HyiOm-DlBhhmRWe7pvN2Qpt1Yd4VczGi6ngGcDesqPg7e5ITeVr82Smacsxy_BlNYtJVtaEYFLUU-5phakG_hbUPpBloJbsyp8vxyuwJYVPuJt4LdIXMdP4vkBxdlDDFk82kC_geVX9zVctnEbpAhoo6lIlFYoNftGapsdYX8oRs7qijV3rFd0DcFQfrv8QUck3DptGS5cL39GN8PcDUOd8o-lLDrdfIGwPcLziMQNACw6PSRx5807qy9C1A8yN1Q8dAffMZcwvLFli", width: 4560, height: 2052, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114522964852519551355\">岡田実</a>"] },
            { photoReference: "AWCwydhcBHj42qL8I_iCWX6kCMDaE9EGj66-dr8CJHsQoG_3GnOKbuyRo14ykDGfwgE6y9FTJV2ywthyzLrDkfkxABi5KhDV3eXY939K_7F6zMVxR2ILD3u-HLcNRhPBUa-nIw8dr_rhhk9rEVjIY1SXOBs1sasxElwH_d9V8RjsPelGYVSJnfph58tcaCcbHlQ4-1dixPsUWzrFXhFRDaDNq3ap483Ad7RY1F9bHveZpmyDYblDzSiRzJjj7Bym8ft6PC-UcG-0sEneG59PB4uxJpigcwlbbafFUGz7aPLiZ2Anp-U1xhlpjBKQ4SBmy-cEllY-_6L-JJhL_we9R-g6EEBnVnUkuXNP0Ej-NQTsrpN13OlkiSJR_6CGczrSZg5wQ3GT4rQsnnC3j_R7XXOfxbXlEOlo2Z2gTYlO_7zJvJc", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107113087992835515389\">Marco Lui</a>"] },
            { photoReference: "AWCwydhRelWjqPCUHeSCx1nbL2JgUcMIhwm50HKd6FcGoG3mOxx2Wv0QUi0awj6kKaonimnyX2LtGQhwQh-mHAtGN9GV0qOE58Bdzw9ZK-qkGRf6Hr5LA36ZnLtdOkuYrXgubMxVkgZYzIXmQd41c4sD5wUR07CzoSXP8QjbOQy9Hi3HayNLUV8Of2lLboydukPcPOHJWrstbPaDVOOnyuHX0649_3K8dZGh4Z8oYDcHy4PwM2zNBH6_8yeo0XvN04Drp_20QEqiwhn58OvBJJBeiO6akzeHQwaZBCpNvntUsDCTAMRJt3LOfI1MGx6MtlNtXy2DJCcEIPGeQg5_ncNhO7oHPXmQcRl_QKadAN9aQfMWh4qCDhIpVACHy28H76H0LT5cUjJ8GAcM53iTPLEZ4zRfnbKkhjm5nW0uaq139jZr7B2eX4yodY1a29CP7Q", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113450981468838804806\">Hideki Muto (Mucyo)</a>"] },
            { photoReference: "AWCwydgZYkijLxfWdaEn4YMyZIrSaiLxxbWMQ1Oxx6TcPYiWncyajPIil0VUapx_gMZM50Ev_OWOelzrCnXsP5_dZObwAkAf1R5Gk7t-ZnE7ZdZ_QSEHfLE09DZoqgSlM8EYMRDyGVtzoioB3LLZfzYuWgZozVwat4T_nqTgTuQ-PHKvR45zP5l1CDv_RAwN57xccxh4iA6Xln9TcwhQQJRQoQA_2L8HPXzIrOLXV4PTR7Seb6zShGpc6PjugVxrY_5n68VGFBSbJMqFlUswe0KDvHVAd9DpWqf5C2Pc-DGdbW0nAuPU4Wk86MLUEetme2Z4t9jmITny-qxdELE4c5sKeqfMxA2ISdKFJO6IGU3Z9dE6IT9oSJM0WXtEycTdWTtVJ3GN2T-B_vnBe2SO2DQdYqxQqrERJMbv7wm-63zOSU08E8a8rl57WO0aRJCUoRYh", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108682637493291819424\">富夢吉</a>"] },
            { photoReference: "AWCwydh7si0B27dW4GUHJ-ZrJtdufQQxdrs_F3nagwZyF2QCw7eVfq_iJyDgJwqYzheDwHEN58rnuHe7Vae9gXG_q1lf31JWrazIe8_W9t6I0gAAEXLOPEYh-yQQGQRxrkWoxs6avv0263KrbGAZqQZr0C5mrpPqQlckT96kuK6aVFM5W0wn2BUkaz0tAyf2sJzfEP5YTUfz_uGNR4egAR3lOsbqcSnTtD7MhnfOW8NYOX_CyoIzEYHnkvswxyiR0zsZYJZYyHsw9b9HOgWpQnS9m3maBEQ8OgTA0HCR0Pck55wP0o2dpOeoFnEy9AdHscIm0z0eNxU2qYWXgDJ5dmfPVyS_0_0SBmk8HwpDo_dDx7PzbCz-muN55lE7XwcDBg5EtWkc84VuY9WYtJP_QTI2AS7WkS6vbf1-r3FUKtsfmpHRYoi3Xjr2dgrdqBXdHA", width: 960, height: 1706, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113299240211356930006\">ChiaYin Wu (Josephine)</a>"] }
        ],
        summary: "여행객들에게 추천되는 가성비 좋은 해산물 전문점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["신선한 해산물 요리", "입구의 템푸라 전문점"],
        tips: ["점심 식사 장소로 추천합니다", "가성비 좋은 식사를 즐길 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 및 템푸라", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:30 ~ 오후 6:00; 화요일: 오전 10:30 ~ 오후 5:45",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.payao-okinawa.com/restaurant.php", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17830678725072261343", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Payao+Restaurant+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "하마노야": {
        photos: [],
        placeId: "ChIJRfq8yKAa5TQRqpJVaPpJhR4",
        placePhotos: [
            { photoReference: "AWCwydh08-XEFlvuGKdEoGk1a2gy7i11qMFJD0sDmCKrVlnNr7G4NZ5t36EBGXoQugGdEGuWR7Yq8DXB3ClIAzlvUeoBmCcmqoAtOud1acodbjdbpj8kWijTdaVEu45p9NZ80ldOeNY8-2BdKjYkOwzCTxinix9Y4kU2Wdt8Sd6YHmNO5aehEyWNTtlGnQKWkCD4InmN_CRobAEMS24V7q3VIezw0MrFfAo_ThWP9qIZ5aE0NWzsEws60KyCN1a6o1svQVxixsMX0gqpaaHvUXW06vtSoJC0hBKBkAOJd_SeYdpzZyFOcGkXWdSiSWeM9XP2TIIGUgtf1SD1Th86QB4qDTKYDFFqfWnLNqjYbPYTOqopSFcH1RxwE9HXbcB5bxHWbRk8mfvWLa3-8JRTAW2WgcDILttqgw4ltvg1BPXNksdT-PxmYjcwZL5jEOmLxbdy", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113319759705145222169\">Eri Setoyama</a>"] },
            { photoReference: "AWCwydh3lVf7xmIyuswz866IsIKKbl5WFFECdGfkVa2B7zuzF8JfBWEMJ_BQwmkO5ppU8s_d3sdn3af86Y3sgZMEDkNfG9HtYJS4nthtVgNsvU6tIoPiDERoqd5BxPgAUMtrGhDOtbgKo4MFZD_BwRJJixVM7kHJLKw5nf9Ek8R7f8bcvF4mGEPStqewfrTx9_V8-9VjkkZzo8OM59AgLkIjUnndjzqLePwddvdK47BZ1wSg49cFTmtGDzY9rkmvYnxcft06Sm5-LWiJ_uAJ0nPKq28Cs8R_BUs1bbygCGm3jAVRG0GK4VQ1G-pG72pselC34fNGVp_kVGkP6yU3tlCJ5j9GOqzbBkQkmOVnH_WOytJrXQH1eiQWxs040rOv5SnjYxXR-Qez4SmBAkKkaEH3Gk2TKV1GdSog0QAj4dY_r1rCpNbvYFMrAduIQiTcjDym", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111932619992316582056\">Tanawat Rungnava</a>"] },
            { photoReference: "AWCwydjsa_1MaGenfnNUWhUwlI0XkgMhFswOC8yC-xrT0V1i6dto4NauBaL7pq7qTVjL2vDqybVlhDefWtybr0QhYd3z3Gdp__MYJzDmpnFQPXTTXEMfTrVoVmYk7UQuddRnMCL819jjXS_rTbkokgln5DAi5rAUPRhiYaVZo1lxQqDn66mCR_inTf_lf5hLnQs8rkCyfBrNaBIgSecMhjhKQKMQFN8zI5rycT7qpo36CjQoiI2Ly8sV8kXdnzGJOf7BzVYUtiEtejzb-yA6gh5KbOLQrhGTz9LWzBubJRoDFKuWw_bN9w7U2cQwx9sC0LkGWs8XcenGgzVLqoeiPhZAAI0fSwgO2I5MkrSg0abDd_glx_oMSpjh06yKw_1_gpYuTKV_SmRq3U4HrGySWMklQ18RrmDLBpDUA-XjZCnhTUieWRk2Gm5-YrAx2Bq8Qg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105278429699882924251\">Lex Liu</a>"] },
            { photoReference: "AWCwydic5xIISP1SNA0YAmiVqoTvtMjzki9l77CKWeh_wbK7lLKTWQO5Kq77bHEsSUBFEMTkLM_49bKvO6xRXuhzRIcIg9v-sDbysJp86CfVL42vkWuGCnB_3mGeFPGMNlY88gQjd0gbPXu4pwM-lUlHOPSstJeZjz_98ehRVAOqES7TUN1yWcD5C3sCnVhPN61Qzy0N3d09W8FTXot24n2US8cAzVw_EZmtUwiS3NWzaJhvN-c1mMmJ24IN3oPZ1GQio9qGHfOgLmn4hnbqGxqeddsrNZyZHEpv4WS42MY1OHKHw4Xa2XOIzu4nJs37id0Gtto6dQ2wSZ_7X0lfZD0HoU51Q9sQSxUFTMFMVcZU5xAywfgJjkTJ5faOFtrvKpu6kvBQY-1bZIKbUWpVy_QAJsCnsWEl-HYDVyU_Lajnb4utWwRAIuiEJJVR6Vsrx65f", width: 3188, height: 2638, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113168524316780889003\">ki ki</a>"] },
            { photoReference: "AWCwydg71THDktpjccOsAYwH3N1nYVt9uOpi-7gRGKs9pgYMNRoTHOUo4wDcnQFjSIA7F7BtTe_hyBJ7cJTW5TKZ9gWVU3X_wyzTAWolbsVn_NIpiszwBKonjw7MEhuibuwAKJuGxp5wqpErCwc4r-9SiuCn98ON3M8yB2C8BOMOidIPPug7I5Zs-CaeIIF_5Zl7ZKnb3YT6jHzaw3QDPKpHU46Tchdf_pxPrN1hY5jFp1RxvwJALj0d68-cyHHR1PzwMXcLTl4g8MEqHAj5iFK3PUAT-6cRalMf_rSRwC_M9XZhnFVWZSbRhJhI7Q2Hsjfyq34Q-CfVmYbNh37HMzx3ofX2ol_01NNWLkkNSyb_K76MxlXIypX3Ts5RLpYKTH48ZRcDdaLlMIej99tBm8SGQNRNXI9MIpi7ndZV_eE7ZOGrEP194U7Y-HFLFmALtg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110297479169786898899\">Jimmy Chiang</a>"] }
        ],
        summary: "신선한 구운 생선과 랍스터를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["구운 생선과 랍스터", "영어 지원 디지털 주문 시스템"],
        tips: ["여성 및 아이 동반 방문에 적합", "무료 음료 스테이션 이용 가능"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "구운 생선 및 랍스터", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.kaisen-hamanoya.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2199245332881445546", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%A7%88%EB%85%B8%EC%95%BC+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Oki Seafood Restaurant": {
        photos: [],
        placeId: "ChIJwa94C0IR5TQRyP1WPQL2Fl8",
        placePhotos: [
            { photoReference: "AWCwydgQ4t7p8G7y8iBiaGImSlHHOHq4HzEXgbwBBgADEaOz-EmADpOSgex9vFGp3peB67pRLr7ZYzIuczoVhXwrJsR8Z4_gsMBUslqUtfrrrw7eKwU9ZiSDFo6HDfC4fcW3qmzAFKXJ-zOFAzIuKZUsJe-IUpi8GRRXUYSfFDwNJ0pq2e9AfVQpQ_H-Io31dUO-eYa00wdL-vAtamD8oXi-jmPyuaZoD2ODIfF4f1_dYhbtoQ846aRnA0qCVitaCnKYt2EAi7uVzR-yoXhCnff4O3TYJaq6rlXtPxnQBhq0ktRKWAzKFD1_0mdEILXTW86EihPMKOioc4Q_hqQJJvMtNBLI8J85IIfNQd_oLICCqyf5RacrOuD1rGfpRSGLkfDrD4G_yT0GRiDD6yQap_OnsyZOnGTZ_1M2Wvu4AsQU6NBo0g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101535753249504753822\">John B Ludwig</a>"] },
            { photoReference: "AWCwydheA33FH65E8SozgO315wobDJxixBZAidsopRI3ndceONNC7HAfarzsk3TU9ZgB_XtlnOS8BB5JvaTW9t3pNMX0PYmprYqGy3fYEzYDwt46ULvFaxi8DhdwHuYMDwVGw-L_ATejkctWby42Yf5y6Zen8ryjQyTtQbD7-f_vFU7gEgsuR-97c9kDCuqks7HocQQK8ac7XEA3qxVhUB2R3SmN-UEW2FfBX94Gg9ABJ_NF7FucO1o53K6G9s7550L931z9Zohe8FFlmAfF8yGt9Bkj_Gd-tDflTKJp5utICU6f9jDIhnLJ97_SLg0zt2d54UN8kEb2Mtbg_o0WtkEZMveuymozL2q6NG4ECB-O_xw3llDFFiLYERbHIPhcDcIaZd4uMMmLZrR__RBJWLtMwVkIounzfl5MQvZwyNQoGcs4N5qiGmY1Gn28daLLvg", width: 2118, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107940654049718884674\">Shain Beecher-Van Horn</a>"] },
            { photoReference: "AWCwydhkM8GUnXlEir8HkM7-EhoVIb2KxFIYnJbLKUq0xswHi07_7ece7nINZUt3FqgWQsQ8SjtwXF2h9ov2_RndhSCIQuhWrEBvbKEH4CKyRtECrF3MVP2L1qE7PMYemcJHsQ1JqrfC3mJdWH93xwNH2uMZ_THlvFEaziPGB_7ETo9mVUGVHm5ivqARb9YjBoDEDMx4yd9mdbEmdbx5zHMQOOAwVzbuGj5WCrUfRAZUzaGlSt3QnGQtGdYfyuucyq4x3TfvVsMGLzNZH5UnMO7roo2efgjtvI2M3vCtORXdpMfGyC_kcwcjkRoajLxg7X5ko5AxWHTPPMKktAy4VCoDF0vaXY7II772tYYlpEMvB23YvxPYl7SIeCW1vzsh3-Ay4og9jOTn6QadBS2OU_-8swXwY_q4ugnb8NZ7HDUP5w5V7fCeoKkwLQbnKKsiMLWU", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105587874365153555817\">亀島誠</a>"] },
            { photoReference: "AWCwydg6C53bJ1LGzMNl2eRCJOyEg6CL4T-sFenMI5gLJaJ2uea8wnk4X0mNZUorCI_SOWqdga-mhaQkG296JA8VHileVOwxXc4-UliWKz5EQq1PPYEZ49YQnMzqCzz5Gbhad7b-LdyJtS0IlEOLezRmJumWyvVfnDn-MBeswpS2Hizu4nSxHaKXPwmn5o7LeWgkVn4lnmFuyRvrpr3C8PzsFVdSy0ZQHAE4QyUATvhSzBj6AAy6rx7399hLIQ7JrHc3lTElNq1Hq11adg75_mkElI480iKzsPW1eU6x0VF_jQNlxqcSzoHkWrXGz4geBv_y_HM60yY0yDDzvDtnVcBwNc4Ff2IPrC4wmfGfWTIhr2LF_fqh4JkHz4YPM8rNtGyJBiiw_ZbCjbq1PjURHJW5yZnXDgLpmbGcQOAHXTd8nmrioHaUfGyaDHFNi__adFwj", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112307037574903049362\">FD FM</a>"] },
            { photoReference: "AWCwydit9fuGeo504QjFlbTtSwOEGkK-VBJOAqG15fsyIAXH9Kyyi1dCJ4_vtvuRqZ8ebSPDDWImL9elWbKiaJJg1YiO7fnUBS5xG6PLZMcG98EM4LQc4KeU3XxO27d55YsQh8ISIDMTToNele5vz7mG85DNCWVuLeFordNv7QMWzVug-sUUhRCdliUC3TmNgw_NoxPTEgpy2omRGdYaKZIRkXZr9lpYlB4z3RGLgBJWP9hlsvTIBJ6hyJKW8bypdK8lFcJEnSOUP5zzZpvZYD1S2GdaAoDSJXMSa6FASJuLADuuIKz5FywQYaMlsNjAC_SrzgimAfI899RktCDcRqL6Ffah1SW4g1LZukVUq0sWtR6M-6CVFb51ew43oGpVi2CR8qfZI90SCmgYgHMAjEh30Es00JS_RTIHqGLlE-gWX2CcJAPcXB4Eaax7W-GWA4Zm", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111129315504574051068\">zono san</a>"] }
        ],
        summary: "신선한 생선 요리를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["신선한 생선", "높은 고객 만족도", "검증된 맛"],
        tips: ["월요일은 휴무이니 방문 시 주의하세요", "주차 공간이 협소할 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "신선한 생선 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오후 4:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6851934372570267080", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Oki+Seafood+Restaurant+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카이센 차야 사바니": {
        photos: [],
        placeId: "ChIJZ-5MSAQT5TQR1vei8fFR7_Q",
        placePhotos: [
            { photoReference: "AWCwydiNKUjP_GFTj6kh4j8bdwVNveorL6TrhQ0ZLXw-THGOLyjDFCS-nmfpC0oVLLvivzQXOprP1mEgjkw2_gIehr7f24JyqMUErxnkoMRr7QU8uhXzyuqO7huOmSj2EHiwW9xO9fZvwZG1CSuRbkfHpIvH15tvzkSjYZzGUU-RFN8FbmP99sHMvkj4FynF8SVwRWUCaLGQWFPSGeul20jp7e7wjwkbpwu6YQywANl94l2rLuBev1iD_NP9XacSzhnWuDiL3teXRtC38FQC5OsBAFU_Lll03s0zyNyx2CpkuLBUMABrVe0xwljvz_fIlDiy3yZnW-Ucow5yhUWqN9U-6omKebzXLZ0kaQIu7IstMjAec9fZq4DDG0RL0DEwdi_G8av_U8a4umv4jRQGSbwnAAGBKKW6k5LlnB2HPrzan2KNZc5ZrEDBIO35udF17Q", width: 4080, height: 2296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113818790783422912555\">きらきら</a>"] },
            { photoReference: "AWCwydiiW2_R2Zkm2SUrdwIGXPyerWlmuNGuZZQpaq2KC_rkhdulJQ2IDZ1mBlwAsUBbATuHUgHSmNUrjFueZdLr2t6SUOIQSbiSxCMeQoc7E9Rxa5krpb4MsYXlpm4C7QRpmHbOAJtWCNnjpv5fkjMu6w4ugm1-zasPztn7bA6Z8Dc5s2Ohs8_1TotZIiryto9sW89Ef_g6VxEoMITZleuGc1q_JkyV4hH9FeoxHF3hxorAgqSkKGsqwaPB447a_7z9OHC_61THVvst_zQHtmN9gmlc88daGloEreIOw50_wiUof7YrH6-C5YIla4H7EzAxSRt2EeBydGyAQZUDumfT3rrPhXRymUFFidoU_8RM-P8b1w8UM-9ZQIhlK1vrqNlqKfp00JwsmGrOqj402NcKvKKNaSH9XavChONrhB9dsmMfn1uUZDWUIFz6lGC5Gw", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109616745768231254435\">claver dsouza</a>"] },
            { photoReference: "AWCwydi93Mi8zFiYVSUzGHddtrxE6NrSglc49asCeoKW8l49oZskvZbts-QHpkpPYI-NQjXuud0s2c4HPJ15I2ENphFmfcb26w-Xsy4I1_jJ5CA_nJmYtkNyLYZXCABn2t6e1eSOpDYXEXbm-kXIKLqhSb2cd6nd201gR5hRhOtiZRQoDg00O-dONSdT8gLwKJKW8Xb65gPjRyPpgEB2m4wkqRQ8sGIt-TbTMZ9xPz23Fa3r76WLqyhTxG90lGdW0P4ld5_dVfJdBd4FsAAymcn47Zj8uwN6p9ZUNwGq-2Q2DeyZWvUPEER41wgpuFic8B49N3dPJKqfrA5yUuaHKaxIQYbG0dmHxSIUffMdDsRHLiPWlPdMYxPO9lYJ2lhsP2rUrmzWv9Q4ksz-gCUYje81sxBYN_dj5iDlnF9-JgI6szuZU_mXVdLlRRPQKKBlSw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105717515332800356837\">Jess</a>"] },
            { photoReference: "AWCwydio9Tegz852ID8XzX5tbpr_72-DyOBSlLtiHSTrS44n_Sc_zMXueM1CMdMYfMyT1AoHQqMKjzDNP52vwoaGZGXnEUImjrqRaCAKm6HKIahHzwSjB08QEhSZa-HCErwCJB7AQlLxPoeQkAU7RhBwEcKV6hWIdRSXitBP3fw9fS8LZdLPHvG0_41M0XP-UKApmnB_ixapX8lNwX_qv-bgNcW6yaIHDL8jHC_9fo9IGRhsz1Qk8SGTrwKSSkJ8jwXqms7FsF4rhnTA1v4Mm6XE1pVQhXAVcp7FqsIt2cyH9wCUEjricSHw4NKOstEzzVs5zDPOopHbzM45gY7yCZQcQcKdi1LTvkchFaWT-X4wDvSiSppiN8A7AfU3SWtnjZvGZk-PFmPpfjnODyR3vIuQlw-IoCyP53voGLXcMUqeqkX53Eko8MxzV8BscBgLoabo", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106383171440456701228\">Meler Yang</a>"] },
            { photoReference: "AWCwydgHjSkxgaZb49OgJZ7gFAUiZ2xCUkJIjUjJlIewbYEk1YnG5Svd4XXZOBSNZoR_QTDhaUKQKNFFSaaCgB-8f7Bo1Llt0dNmhPA0rz-pO3xsWP1Qt1qe2FOSRD5UWkxd3nsc2TwrWxFmgCFscGWClTbJRdEinAmnAKdnLuuDxixT549FBKPOYYgwD20KBXFpdtZKql5RSuqTkJWhFzfMIwuJIANmbR_7UE8FPY7s7xzLv6kKDTB-bfIhMGGu-IHP9N7zLzfZ2Yqo-o5ujyxbtJlZd-MY7PlA6LPCS4UVCnBSd6KI83t5wUY5ev8XNM9_z66EGC6YcZtFrc1_LV8dMjDjQMwwOig5ZD6odkElK42Nq5J0Sc9iN7Zz5K7CaIkukCv0s8GlLUTYTjxgGRpx8nwbfP6BuJPDmYlhafZEOFAF4GV8kL2bxhG_9v_qHA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105054549845009435292\">Travel is life</a>"] }
        ],
        summary: "신선한 재료를 사용한 맛있는 요리와 친절한 서비스가 돋보이는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["버터 생선 요리", "랍스터 요리", "영어 메뉴 제공"],
        tips: ["화요일은 휴무이니 방문 시 주의하세요", "무료 아이스티와 커피가 제공됩니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 이자카야", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 5:30~10:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17649415564271220694", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%9D%B4%EC%84%BC+%EC%B0%A8%EC%95%BC+%EC%82%AC%EB%B0%94%EB%8B%88+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Seafood House Pier 54": {
        photos: [],
        placeId: "ChIJ6RJBwhkT5TQRFVodFmowUQY",
        placePhotos: [
            { photoReference: "AWCwydgLpr1kTvW_fcZFV1jHXd9_i7Sf_FKPZwCrosqpXn_vr_w3B_cdseMAWQXULw8YbtRaWVN6wE86deqhAqTe8P9CWmw1M2YuuWEUFdJewC0lWNLNr-Y_5FImwPf6zNGN_xS2j-A0V9-Dir8nEjWtDjffNH-gfSadMBkYI8bT_Ydy_HRPuo31uxmb-aDrVwMgf3JyDfwT1Jj65ZB0X3tdFmheyHH0fNg2Kog7KnS9LsPpm-1AT4mnBX6qndD-CQh7qBnpzAhSDMRpow54ryrIBYQZBwxIvCaCI_CcN8yiVfiY3mKJi45z42j4brC1eGp_nDQQHWX3KzvQuzc3CmrTcqKOi7hpo4SZpQ5nY0cYgpNuarfajdod6PBbF72q_CDeyJUh7c4676pG5NsxmdCYyViDkxSejvQfq_p6lQEIqEQysbDV", width: 4800, height: 3202, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101769279976755037030\">シーフードハウスピア54｜SEAFOOD HOUSE PIER 54</a>"] },
            { photoReference: "AWCwydjEHznFYcFVxjQJ3hzUs0aZDo2PWWWtBvEsvApiBJ3802P8X_7XE8nOiSNDhvLiJ-hKSlzKIQVp3oRgAJdP2c3k7X8YiOkzxkO78K8nIdXZGWPRaJuPkQrB2SpVCPpSK1DavPhJE7GKItge5GFBVCRjvxUKeiGuopwbppMMNVt4NQpsBbqY5Z0coxW-PoAQrTZ2JSxUCKTjzVyGyJs2xjZM5CfBOYIOdfHGvzYF-IfVbgvKVdPhKJRDd1O-9gg2OUdEOAw9yZU8VrUQ8WSpilXe6vPK01ixAE8E7ZFUl7J0H-svPcR_L4QhJA1kAcyuxuXZB-SzIRvddiT-z-70Y0KJyew8NEQfbLXdU_3fpdSnB-asz9yLXEeHok5Dy60zwql74NtnPcUy6tAJYWkLKiOQ7ddsdGrXEywXw_2sIow", width: 1478, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101769279976755037030\">シーフードハウスピア54｜SEAFOOD HOUSE PIER 54</a>"] },
            { photoReference: "AWCwydgRCHT7F4h14ctdh4NeIsbL_ZYKzzEQFlyBtXhBNhWvb6oqBWwXqHbanba021PfoK7DUjWdWjaqGm_zxtUWIalygoYVCutMjiNlc74C3SfhGRRJQGyTJKEazi90OEQgHLTHTo9tVtXCXYuMrAdeFx2OVY0rdIZDs5uZA6JnXrxX08frKjGGXDyHxiYqzAqbatikJMSfyhEQYIhbHdLrQFcLxVbvJxmfemvqRTSWNz_8t5dIKgbhyKh6ENzT3DWwljdYjghFSwEJfPm0g98kDqXRb51rAHJ_u0DproTc0f9voHnDNuNWe_Fii7Pqklat2ZPf79AH4xyCIx2yCWbDuM65rc2Rz4ZfkrVJmJ5EaEobjgbTWZobHgGaYSg9nPvFwpeELrG11FX6JD-ReiP6LG-J_hxzFJM2CLLETtE_EJFUC_mueDyl_P2uBokAYw", width: 2688, height: 1512, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110109516008961731457\">nonoriki</a>"] },
            { photoReference: "AWCwydhFo7PS6fUJQ-gnParpKgHP24fegQt8ZgTGjA5VS4udrezfbLR3jekIQA13ub8GwtFN_OmeTQz60H61pPey7jqEpqsZ1tNpmiwOpw1MBwejjd0YO7_SWYd2zlVZ39PRhi4GxPSfse3gqTXkhtwYFc19wa6G1V3B9QAnBZ4v8dC_ll_nADCrSGPdL3-KLCPZgk5cbNXiDaG6NJ8fvsLGD3gzFzmrKiOvi-cQb5QeY-QcTtku-XDUJpZmWvIa-NOS8fCuDxrxEW6WL9KylKrWWv5_G4bw6V6r47h1zFj0HhFKDhjP4dMVmqJKnZH9fasnBNb6NuNANu-GNbW4hfHxIC5SSqYvUHdJIz-m32q2atG5D0-vpwKCZbAeVQ8vVuHpPDtmwlCSJdMiFl05TcyfrQmCSG1wEJH1CR5Joo5R00IytPTB97EwJIGG9eBHM7ao", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100640022216452200662\">Ra</a>"] },
            { photoReference: "AWCwydhS1o79hGDCtAu2YW8v_guxaBtPCOUKE2zyTEKqRJ5Ftzagv0dNdnfL9hWmEr9o7ovWN7OaHKFx3nbwrp2LdxeqgF-S1a_GsberaJUclsJovQmAJYLGdMYN23KQEdPY5j8WlphE6jdU-U4hilBqKJF-3OXB9xHnQTbqimQ5t0xaHNBQNfsMncbaZ5GrX5y4la4cT4hChXWlrBiYWjClWkCoYnZ3UUhP1MOR6PKJgEYMhbZ30XauPCyj_hRIALKTqo8ZrpcOqRBevH1ZhDusXugqY9b3wVaq7aY64yC76yxQ5F6Yq4EELj5Nxfb3G1iwd7RRRPqj9qcazO7IjER0U7lyD-OvL7tAjOF8CBtgYxSku1Ergd54j-aWPmjjM_g3iftnUmIsi4Yp2nA3Q8QNkVd1-XTlgAZ5aTbzhzEv1sOhiCKd-pz-gJVjMxK_AfNX", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104093115575383916602\">1966 ht</a>"] }
        ],
        summary: "테라스석을 갖춘 분위기 좋은 해산물 레스토랑입니다.",
        updatedAt: "2026-08-12",
        highlights: ["해변 근처의 여유로운 분위기", "테라스석 보유", "맛있는 파스타"],
        tips: ["주차 공간이 협소할 수 있으니 주의하세요", "애완동물 동반은 불가합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 및 파스타", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~9:30; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.seafoodhouse.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=455198269536819733", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Seafood+House+Pier+54+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "우민츄 식당": {
        photos: [],
        placeId: "ChIJlx1lqrQW5TQRMizVwCDCMRQ",
        placePhotos: [
            { photoReference: "AWCwydi4FEg5970DaJ00K0baiuu5J9ogcvk9kCl6gyw94eXvpbJWG5bQlt5VFsXKjFxs6qK7hL-yElnnwdY8lqiXRQmgepLCvLKcgbDZrpstrnDJirUNfw2o3a9fEYA_soDVzXuyV1_5A6dKUeLS4KXLdbS7PPv1tyaWKVtFH5fOuOWtTYbgRLd6QgbmNf_ycVjWHMlYTfuayHiK_Oq-pLx9vxT0vGq_eBz_PVgMDRMmQmRZp5knZ6EhyU1mf62-XC_Fs9Kw5zFjRAF0w0THvmdVSYAL6lO_x5KpdjfyVmKHKNGI-c_bvoOwkmWUQR_MUDqvsWw3CMXmZsjgXLC9bs215SBmuu8pD7hzC422KEVk22Pt1J6jPzh_QzzXKv8s1SX5j-fPdpDczeNoQFmCl-B4rtQFTbwdfBgDqvyjqagp2Aa3OH6WhEOa7q7JFTcsVA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106928487619891494365\">S.C</a>"] },
            { photoReference: "AWCwydiMtwTmxKU7K4boIBRrPB8bn7Cad-ZhAgXZqYMMoqeY9g_XVMWTFvX29UPVvSnTP-wRt1lN_a5mZt9YvK4dPPL9zQOW8P39MQkdmv6BAnuDL1NZQcpBNPsjRlKOOU4r1w-xoAgMeVNDghaJryKkmH2uptztb_ROBF9Gnq-HHrNUY-1mmzRMb6iturh53oQD3lNCuQ1zjom1oRyiwDg2zsFL4fzqe8IZkW02J4eHTRDQ_vUV5YLv6FMr2bmNLVSFCDn-9ywsPEu-XJKdMSELIjnmaQQd8HYeyXGvVk_oNU-HSpDECiDT4r7rqdj0UGEw1F9RgD_UQuuwVzT6S_LgiNcDD7MB_B0W1UJmw9ox-h_DlGCpOF-kj3chiKywEFLGqz_KFOC1U8bqtQ9pT0-xvGlN_oaPxcv1k2OeN9VtCHU", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112036234970958856969\">KwangBum Lee</a>"] },
            { photoReference: "AWCwydj8gexosAYJp9LHqc9_AeFqPh2BFwucMkyPWRJvC3IFgzcBPQ357e6bZN4lWssloRuVDm8qCZQpZci_TmOuDXQT_X3mqZVX3PoEmv1gsWajNwP-b8erbgwOGX8DSFp8U0nr8IdDZF2Bbh8zj41VmVVDwFtIdAgztJd6dsdY6KauwC8SHBcXU84tih8I9e4tPdcXcJNcCMMEdfP1Hvd1c5iQg5PD9aysqqqrazT8t0cKXM6GmtVEIBo7wZ_i-8tab0Ifl-shbPfPoJrutVxKRujQR3u3_uWMztn5VuP2fQeHwIWiz9L1lUXggzGyR8k2FY_qwYVloefH5bRY7H8m06v4U7NCux-hSQ0S83l7w2hwkoLp4jk679K0AKMzm2g17Gktxk-xJQfqZS-I2cJx_pmEtEwg5aho12uRYfnKWrTi_qz9SnDDpMP2edNI0g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115608748100474281435\">Andy李彥良</a>"] },
            { photoReference: "AWCwydiokxFpoQUEMkDrcGUZx68JSyo-ppOTa_y8IYdgtaomz_Q0Hj5eL6jqFmoGEE47iyl6eN2SUjIg191LzVJ2fNqMbDntyEvmvcwmT3T-1ERGvVkiqMYIv6Sy1xn1nuE6X5JxrbZxwICBVrRKbhkA2q22EmeJISnaWq0_rmD95FcEFNHOLMtZhRIoIAD2yd7PCzQ-mpL9X5tmrokVXO5uE7-nw6NR62trV-zJg1OMlXC5gHLco-DQCKmBTW69msJ1GFnkBvPPmfKb_NS_vDSM8ZTD2L_a1cpGExCUvobKKEJuNDGYWcWBk0ydSZDyQCT07bWTsDPo8axhdanN-Ny6eIV4bGt6XoQjkXANx8e1-ejiJSJyipb1giEYMAHYbxxxgDaFlJHOI7o2q4CslBgjRSRTCzQlPX8LL5NCbGAQn6EH3onoL3WNQ73y44oec_i6", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106928487619891494365\">S.C</a>"] },
            { photoReference: "AWCwydghbNLTyeR_MJcbJ4-pHhVsJC4Pdu_rK7SBx6WpThbZ6y8vSocgl--O-gwVJc_AdVkXq4-nuH7d4qCwIcVcupKaXtEm6dgF96SZTDYntbJhgHynxF2bsvhaYhRDe2h5ZxxB9bYQT7EphZAI_7czmQEAPbR9zxGusnT0NvY_Uj91-U5gr9Gb592p2V2i5vfMj-TeV4rQNBUncx0COoGbfNblBWKzuXHah9oDEJjpRzh6TvEHrmjM5RXHIIlx3mIwVBF-CEtOubKggnDD7Rdy5A8EAYp7USeHzUhMuRDY7K4xXdAFJKdLL0jki44iqBewTFDZ37bhKSy73XvfhNXk7D0_WjUf_1bs06FJNw3m07nqnntANB_fq3I8wTNB_s6VBt67iVaWBDKBRVjNDJn3IbSvgTKYfy4B1hH0X6ec_TPPEOPQrexWNf4bcYsWNtrD", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105520175234667187267\">kurovan</a>"] }
        ],
        summary: "맛과 가성비를 모두 잡은 오키나와의 해산물 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["버터 생선 요리", "마늘 소스와의 완벽한 조화"],
        tips: ["14번 메뉴를 주문해 보세요", "저렴하고 풍부한 양을 즐길 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "버터 생선 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.yomitangyokyou.com/shop.php", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1455157600547318834", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%AF%BC%EC%B8%84+%EC%8B%9D%EB%8B%B9+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "우오마루": {
        photos: [],
        placeId: "ChIJAQDAVUho5TQReRwczo4k0NI",
        placePhotos: [
            { photoReference: "AWCwydgK6sC5vreVxmiWlH_XxyOxiKesUA33Oy98JIKDdUx0pmtjm3ksWYBXmU1ZF3qGxAFP50u8auUPZmGw_B7xpKYgAq18P1MAy429pXVd3Gh3jOq7qy_kt3CQggj5l5uXAyvsk50LwVDs6pM7IXZpS1Clexit7ATjbmlg26KIgFH352dEVtTIfglqPRjhZOsNpoRStN7u3f4tceOQmVIH9AzxBiIH09OthOy1idd_Uo7ra2y6UlVPYLmd7RIek21gTN23Z2zhdVXIQPaAjTznQTU3NcI8nsYJtSCuCtyQDBQ8AwMCGZ1e5HLeJqalm1uWkgUqqOhwBZivh8VKQTfuKeyH8AqNCGcAMuPxeJX1x_5X7KGzyZZVKqCHvTi55En9Ccj7rbIf_rFw7ZESumaPbGy-_Xyl274xu0upqjb9nvw8gsQy", width: 1440, height: 810, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115806676368041881183\">魚屋直営食堂 魚まる</a>"] },
            { photoReference: "AWCwydhO2ZcMUZvoC4_ZRBCDiXZbV1O0PCS1kU6i5UpOwS-LSDIIsi9cFR9Zy8jZxbZ1IRDhqQxj5-APFLL0AGk3ywfjD2a8uqCxEFeeG1jjdnDNKUva6RLZTAlthrXP67D5geqYrJa_LdXiDNlfSe4-0bFvkmkSOXM9rA7jN4Dt15YgJQDgpsebvVEgvim15XEBx7aCcsl9w8SDrjc79aVvTJItg_WYkDBf_icN1Mn6HjxEjUHSlCrRwlbsK7TPq2vK-ZDAqQ0iv3Bac_YZLE0Xz2ZBTOoQe1E_6cfj2lIRPn0Ef9IsN7kMdeMfOW1wWgcaGKbRbGK0eOKfbCwV8IoaC7kKcYuX2L2GFzCGp0WaIGodJtxffAI1Ox6e_BYGo1R0Nau2b7-S4Bg2DHNgQ--tLXj5dqMZ21BUMBBQjDqAuIuXZYh1", width: 4160, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106548904785229370704\">Woo Kevin</a>"] },
            { photoReference: "AWCwydhHqLz3Kmb2ZxyVv9jBiS5n1GBxFFd16H73qaiwok71XV2-Umic2lGBtvv5CtdIQd0wteGBGSysLWkoDxsN0L_XkWdEf-mKh3dRrOe1wMoBb52gguUMO_1cj4wu25IPeuJPJJ9gTpd-TeoUmFDU6Eq_NhcxvweuHn5TRIwKjWRS2YWn8JIvIhZkTgsohPP1yz1ga96OO53LERfhu1MUeDMN77PFTb7I_jfeFhdutDG024XSxImiVvvYPDAQ1rL8VRqThDxIo_3znNrtVXac6Byal8S1JWPqtHbYu21PAxodPd-CNk1DNVXOpRMUekCXs24-3N5Se1dWgEG8Fj1ctmb1hP-eZdeLu0Ezkvkm7I43tLXefJkQXoIkZNfrqXYogYtwkzPiCQHIsF5oIf9j3Ct43qTAgAVsDn_pKutwblzIITCnUmdax3WCLjQ1t1RK", width: 3024, height: 3173, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117095739588851380539\">ot sh</a>"] },
            { photoReference: "AWCwydgDlaO-sX13i7KbZzKEZfjtQA1o6sUhKZq-8eMvQhAahxncMVz_oEm0d-eszfp_PLG5v_v6w6i-fMoa9JomeSJ-5hsObeSdjMautX4cHGyDnL_nhVCThdMTqK2K8zYIK8cWpqS6E8qdbt3yoT4qF981waFxAo3tnpoRwZ73mTL8_hH7yBzUbG2JqcZfbW25QAY5MjsV-sb2QbedJGKougZSLNhkdJCZeAy8WTWcf7WgQbjGIghzb5a5x8vOUo_uE5ZDKRS1eKCTjvn-tcgzMSsPTOZOFdll7QWmR39LM-z_UyBVK3O1OnWK6iJUMLLIkQovqqJ_fQlUZLvhi4sLzFt3676PdH5tS9LjZkbipfK5KIooVQ9fkjkhdk-FqZKOKpvlcBi0L_mb7pR9M7L14_f_kSAv3XK84hGFCiz0IXJ9IU1CaXT8iUw3jWNcZfmx", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105819673165377491483\">黃小虹</a>"] },
            { photoReference: "AWCwydhpni39ICEqtE9htVh-WTak6jdnP51AAVcuV3aszjsUcK9Ls6iR1yOGAhSgrQpO447Ie3MhUFAEX6rvIl_3DzbYAwkOwVcXu-qVobDUQfrcMiIi8AfB_yp_HdcRodP4WgD4m_8lh5akPg91AC99HNK72eGtCUaR-i96WBOHhMqkaSoWnIRwtlQfl7ACKTPBspW3EHhEcZ_ol2SCgaqbZKfLDMAHJY-XKUot0Blf1U_tfeZiaGnyJHjSR2mH7HI60oHYH3dOc4O_u55ex9DiJenuTOFIPJ9Q3GknaGb-00FIBHl4apGYjSU6qm_seYgdPJBaB8ucqhQ10kwwRduw-eZnZC-NRnLI9iz_Btqs68G7gBqgVQI6x2WdMTNuinlPBURP6XKFCIcBbnzoCDLAdX4GYpqakRdte5y4qi4pjS-w3dbjtSFYh81q2JbeR-c-", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103198394020301998598\">Hyeon</a>"] }
        ],
        summary: "신선한 재료와 푸짐한 양을 자랑하는 해산물 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["신선한 생선 요리", "뛰어난 가성비", "푸짐한 양"],
        tips: ["주차 공간이 협소하므로 도보 방문을 권장합니다.", "물은 셀프 서비스입니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/uomaru.naha", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15190681738882587769", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EC%98%A4%EB%A7%88%EB%A3%A8+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "創作沖縄料理 幸 KOU": {
        photos: [],
        placeId: "ChIJh_WPWtxp5TQR_5Fq2xVT6Ww",
        placePhotos: [
            { photoReference: "AWCwydiDxK0m45u1dconz0FgL5RDa0DC3C7f6COQKgzbHTk_aKsWK25d8mpIYGdVDFGqMj3umQVqna1lPsPFb3vV9HjPbGyXSzVPFJZ_RBs4sYf_ynLTIyCPlL964xG4yVV9aeTJT1HH09MrjStJAcEvhHr4vjAcMZd3KJXgjRTFB3UhLuRF5aLMs0x_oZ3cLAN26pKXzmwuZobuyH4YCeSyIGfv33_OC6BWtpXCv9cZojvc9OBu5FyMtoMyXY3VSRpCTaLWyS1nT-dgslUs9tLSaYCLXgFcEqdn2dZBSgFSJZx3qpB9RCRSH-awWG_h7CmtQ5W9F1L8g8f9MxjiiFt7gye229D6bEfj_Vdysj82WuGs-q6SQZjmHmUMXSeNfPToShcRVsWRfb0dKiO1hBZ0kTDSihnkvtZlf3C4GuX8VTHvPg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106623662188382952145\">創作沖縄料理 幸 KOU</a>"] },
            { photoReference: "AWCwydg5YmSeF1E4Wc5cQem9MOWx_nsFLVFL1X87mbK1Pd7YwQjhCKXVugemCrIY8jsK0brACUl1VVewixI4fn3Qn1nkQ1UUvopI62Fa2LBJUZxrwE5aEmMNGMv12pEeL5lasiJ2qbNQxgv0yheiRF9AvGLsBL7OMegzCYd-bSX2gSlbhjjwrCh9L3zFpuuAepz8VRTXjBsdK9qLer5SH4CpeQyzXRNZ5nIfHc3VgEri15G75_C1o8Xc07RGPsg9CO3IXLya8w_wJjjoSKA50r--LYiaHIsxSQqbM79jYgFtGFhyzJRS8V47tAdfOXvDiqGwOvEdr7AWbTr0QkXT5YfmPtTXNE5piOl6tfahPVt0k2EZreTRnN8T6KhKkyQ9p-pHistVjCk0atVC_fgId0TQ2Tre62xUYuR61I3vvrcMLTGOqA", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106623662188382952145\">創作沖縄料理 幸 KOU</a>"] },
            { photoReference: "AWCwydjAoO2fslAc4VylIQMHdXLagPaTiqr-7kxbMhtfBrYmWqsgrP7K0f5A-sOybGKJzqmVrrwR64rqKKu_ccMbTQ9fHXHVhDdhiTf51AzWv3yvdFKUqd4-9tjjbUgQ6q4vIEdgej7zsRIv8b_XKbs8CcIco5TAjd_VINkb3yq-_3kjqiGp6-NYGsbRrJIjgX6V6gjfWAT1leoO-7RJfxXCOaz84qZd4lYSKbhb5gunRHe6Gwt4FHkQPZNOoKkKldtfw8DJjq0ZCHa4NQq9xBP76tnLsXU18ymvBetgc9Icf3WTp2OUbVtlBiuNhV2p0Bz43zXGfiV3tE37DfyNSKK-lUFILTqQ3nsm1QZStdzrAdfdfg80kyqactlrJLJLzYEMkDQMxYs-cXVoBOHWbE9j-o57cOq5SA40qq_HSaEkL38", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106623662188382952145\">創作沖縄料理 幸 KOU</a>"] },
            { photoReference: "AWCwydiAnwAi-ZPyDqS0LeUHVepU0uw_cGaiSqN6C7Qzo0zNyt-QU1YptxUxL5QcLKG3cyXRLbS4tE6BQilqZCR6PONJ1pRYOJ1sE1fH_nlxS4rYXlKiN4nn64bcHReOQ6_HyfrBr7pNSWlIpEvjlE3zpkDpjooPOG9o1SrP6SPMbnpXA1BOWo7PwGBXpSDWR2twd-jwbnoLIJgSSvANp9zdBVA-dwxBC9Ia1va_nd-6dvkpbN9Rh4XfzgXcHjPH3Gtetz0Q-iBItTVHDSb0XCfOsHrP4a-qhCJfykHCLKB_U6PKOYw2IfKOLK-8AB3cKsscTCmimdDk9qDXGiiITlVXcazTIy8GyMHNEoQp3Gz40DDVuxOyApJf0BCBl81HsEKZnl7j9XRZfQplO_K2kIykDL61l8pSj2FM81pXrIiDBCbW3A", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106623662188382952145\">創作沖縄料理 幸 KOU</a>"] },
            { photoReference: "AWCwydhGKbDeI0E4omEiMHY0kQ0lHwvwzNkJhfpfCgPIPPxxPxY3l7nbTgQJf2GN0yrPYLEr4x_ZApKTbPXSPB9SC8KEh1l0DPpRPfRItFYkwwhk4d6HYQCe9pNOZTC3M6-f562j9xf0Jz4GIGrZu_azdLPGEyV0Ave0W0VycWXL7WU7nasP_6sHuHl-wlmv_34TER_Zj7iD4aCtzxNg7-O8KGUlbKEfSj48Rx9qFvVHwt9dg1Ik3n3l4ckst5ktSDaavBCx1FRL9NMSw9auMZRyNXPIbWANMsOPA9aqtyNgxBCGwz3gXCedGT3p83gohgnkfBMAeDqq96xcgKGQidnV0i4Mgx715Ll3joXFpUa89mHYCac_A7RWKsboHBriGnYwZ_FhIWUm2NpwWG-Q5zr_uwjHDCztBXogvI5_ZTTzQAuIlLt1OA0wnhaUvWZCzg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116172613522552523244\">もぐもぐ旅の乙女</a>"] }
        ],
        summary: "맛있는 요리와 친절한 서비스가 돋보이는 오키나와 퓨전 레스토랑입니다.",
        updatedAt: "2026-08-12",
        highlights: ["높은 평점과 많은 리뷰", "맛있는 요리", "친절한 서비스"],
        tips: ["음악 공연 여부는 방문 전 확인을 권장합니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "오키나와 퓨전 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://kou-okinawa.studio.site/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7847895179010413055", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%E5%89%B5%E4%BD%9C%E6%B2%96%E7%B8%84%E6%96%99%E7%90%86+%E5%B9%B8+KOU+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "waryuuokinawaryouri sarii": {
        photos: [],
        placeId: "ChIJiQPaI3hp5TQRrikkDLt3BCw",
        placePhotos: [
            { photoReference: "AWCwydizhu0y3KgjXVNS5TAg_8F_EAfyJBTBIhdHm4_kGQrDiZTWRmMXpfwsFH1jcZnkcjNda1BNBk5Is_4vb3vQ01bWCqs8XyDSeg9ySRMDDrYhxCQvth4zHHjhhRYW9PmLlaVxJOjXjleR8CWWrXOo9ZHe653YO8bNCsieW9Ujqs7yIUKx1ibXsETQpfhrrEOpwttjL5iwtthJ5HYHwpbMdIZWGl2OccqCpLjcAzZueaxWJFs-OTEekVYnME9Alywa_I46U28yoyX7B3lkgyyaJ8LRLL6dBhOUhcuxNWabwEP7bjQ1n1eDeBILSOi9g9a8chlbjuwUgDCqGY4HBjyTn9jYla9L4B6JuIbtrFZTpb_GEHZNMhES5qQ1_2yZxUG7nXJthksjZdCpwbbTghQMT65PDTRdr7cfxILUGwv3lfPCBtf6", width: 600, height: 396, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100097225362212874420\">和琉沖縄料理 さりぃ</a>"] },
            { photoReference: "AWCwydg2eJct8HgQjfBgCfQb1ept2VTK2Nmb1pjqVQ3VYPhHi1AdFysdrLiUXnHFXm3Mi_3jnC6QRkRwm-s5vJ7nNcBVs4lrnD3uUeohMvOzgnsh4MbEk2VD3-N2fAqeMV2Qh6khqb9WpC-BopNf5TtfLeQM7o2kHKUtF5awNfxqRTosEWa2QQ-VVYy9dXWS93kenWJgFWosCnMUgdEfv7lWBWT7D67bIt-_zGeNjfk2I3EvYfQ-cl-SzDDyXM1Gb-zqehcPn5DgGJr8xxNCHXvS-jJKx8XKLc8eHAYn_drAtQjcrQZMsKOwX3ovT38k-bEVDkGi2G48vByCiaIwYRW1byZsRvYUiX1T1jxIOAqqZdE2nex3OSuBwXnfiy4WwHynGH5-ML791k_oJdmwmDT0j4FPCiE_U0lb_1xA8B06Ax-7_4zv", width: 1387, height: 780, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100097225362212874420\">和琉沖縄料理 さりぃ</a>"] },
            { photoReference: "AWCwydgDsNgaD93g8zhZGZXGozipv89HjcrFAR51YLW8LDuLW8BLN4kXHB-AMQzfnyNRtHtV9rgzmUDPQWZddL0EAdv-JDYRmAJyIxrvPbARd7nmX9M6-fXGODHfph9D6dxFRIs9uaOlHayQdl1gASsxC0MjzoTZ9tMEyhP5gs6WkRYdNsaCu5VSyQR6cc2IWukCpPTOhxrPM-KPOXDb0NFq-czbJMyPTT9vsFbcus9sF-A0qZxQ2EQ4if8iG0HHjK9PDTOhHR5rcSiOLRZDD3W20tfRT6Pcc-jsDmlePCnlT5_jXHwlGFDijyCEXptxWC2LPc7gwPbvz4M2BikzaVQdRezzJmIDO-9cKFF9HaTbcXLcMfupQNPGqfrl9cGqJSBKdEFXA_xu21jetvSe6fb6b_GPTF1DDv_N-jC4DlujeVRp66HGhU9EzvGU2bD-ng", width: 3060, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100097225362212874420\">和琉沖縄料理 さりぃ</a>"] },
            { photoReference: "AWCwydgLlYJK-L1wVooayZh67BuuAcBnFZ3Mj73w14PXMYD5Ea26oYd0wPHagglr_5PrGCbYHiQzM1wCYBMc7Osi2btBX8mPcZad8jkP6TU8FLjyUugQwk3HvTzdPWbUS9GLoAkU6k7qsbm-GeIeKoHhizKMI6qb1vYOXvDsqIZAXdroyVzXgNvzKzLgC6E-H27dAgU53PDeEASw-LjulbGArBXOwchfzzN7Gn5jZx6ncaz_X-lwANnT53gtSlIu6BMNyvP6tSl4ArhtsxcGPEsTyu8Rdyimj7fff73WUCuA6djo1KOoT7yPZJYBaeEZFbm3EPSy5Mtkl_dMdMqqkXbFORc4q3IwGFn3iN8ypJtJy2SC6Ca-7knAL6Pse4cfeBdmyjATCSltSL1G_fisX5aWI1UTS6gN77sICMttgrv19xw4BPcFw3A1yBU31NZXNCCn", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102192350922550180685\">Y Imamura (YI)</a>"] },
            { photoReference: "AWCwydhnq4SXqZ9UMQcWy9CZSal6H9Azh1COk2S4IZpAfZbedoNQzxgSJX_d1_d-LrcQ2IjOBhONvoU5LB__QYeFM-BMyh9gh6aHe2_5Eezy7Z3WW9tShYfXcINH5MtRPh--n2l5j6bYFPEqVP8bO8T5gy8VH_eHD4dIW2to8mYvbxI5mj6lFD9lZp5LmqQQtX4CduoXSs7iX0We3QTJh2JkeUkQzhT7k6ILiuocPFJxSypO8rvjUz-A8_so0NxHqxOXec5-oXcYtXuY6f8oZMZE4BeFk4ENXxwE6TUpxYN0AV0S7Q-Hg-EJZmJFAVNafTlFmWrMpOrbLuezuOboFJ4wd-bRQSTJ78JLwNdDAciGEN1Zc7II93moaqlqVluIuR7lNkN_e53HaXWtFr7SPaUr80s0A5lOmXcoGetDy5iQJyrDWzBdNE9my26qWGvsStto", width: 3060, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100097225362212874420\">和琉沖縄料理 さりぃ</a>"] }
        ],
        summary: "오키나와 식재료와 정교한 기술이 빛나는 지하의 와류 창작 코스 요리 전문점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["오키나와산 참치와 파프리카 샐러드", "50도 저온 조리한 굴 요리", "아구 돼지 샤브샤브와 카라스미 소스", "오키나와산 와규 로스트"],
        tips: ["지하 1층에 위치해 있습니다", "코스 요리로 즐기기에 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "오키나와 퓨전 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 6:00~11:00; 화요일: 오후 6:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sally.foodre.jp/?utm_source=gbp&utm_medium=organic&utm_contents=website_link", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3171791682821958062", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=waryuuokinawaryouri+sarii+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Kamida": {
        photos: [],
        placeId: "ChIJ0e3y4skN5TQRu6qngvM9Lqs",
        placePhotos: [
            { photoReference: "AWCwydgsEZM6XQQiTsnLqWo9bxrNw6hib6Kg2jECYVauyUJzOCr1Udp6nY1AfF4fj8iIpQOHFwLyQ52kCC-5KgkLV0Ba2j0laZjj5AhvwmVn-pRgzMQi4hCnQd4BsCAyhbYHto9z43yd73m00zyyM8t7RKWmAHbHuoKATa_gMmZwIhCggLKRQYQdqQEPie8GFK-99o9GCtMsPWTd8j_C0T040wo_t_0o35KdiofseMrsYODbtMoNLT0UbP28UDYXLHPst3KJJj9v4VRniMxh8qM8heaZcJwQXVb6QUchiQRkW3GwkxuDIR9M-Heu-vt4ZSVG0NIgTxwiNPy11APE-E0BGqHBg94HpzO0NWzVIQRc99-4ikGfB-CZIrM5ELd58xbDg-a7OYc21td8pBTe_1t_h8nLbOx58HtVB1m3c44xwHk", width: 1920, height: 1081, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116474597714605550561\">中華かみだ</a>"] },
            { photoReference: "AWCwydjWW7Y-U6CmLzxP9yjnc-u-U5rVe-otBFU7vvVG3fSRu8a7_nAGuejGHxaCNt93CBG8HQc9mjBEFNHJfja3bq5ysx9FaUDYRvxubU7hVzEXnmWypmLmO2yw6-uo1Aw0rfsWYzs0JkyFTFgIvUY6W0QQ5hXBYdhRmAtJLV72I1bdTEmJZ49hu9XzcS5gc4HCsgf8wW0NiQPPauRB021Lw7gVkT5Or72RXGJpByPQcZvMuZkuGDPp8AhwEOORgToxDA9D7Q3HTbjohKmvCFeaz3Y9RH-zouiN0pH9GXx9u0SnSOErVemLkWoPTFiUr3GXMHNGraVvQrzAGoRRxQSbRtEETm9aUwDMRmuHXSAqJsUmledxjE1nbqsmaWIbbIkNHYdQ4G9IdZAesOm3sQeblnhCpuzt511yStyN4BzbNERxYY0", width: 1567, height: 1045, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116474597714605550561\">中華かみだ</a>"] },
            { photoReference: "AWCwydilzLFKs_AoVDsxKg0RTWpx1h2lNdDwx3Il3yWZpeM286dt0IbHv4yCXJyEenu1ThcxCsTXA_ln5s1rLBPS2AFwykoSQm-5gsaAdZnSNNLrw4iizLeh02QsiEsTanmlfHXKygB-wJSMoTuBQnYgk5SsktrdE2xiaHrnGzHLAg4vSbKNZ9Q7bTTQYK0eVQ32wrQVgJyvJ4fko2IXNSKneYhdgiMgbEiCYVYLc6CTJfLyqJ-p0GF1YXuIvJAijtmB46LaWSxOhCMNXxVtjeF5rpL01iMWxr90jm-DIXHphe7OjoWqeOeT874kO4yTem5yNyZrPMfjcb3_6OPp7XvBXjEYgk7-Sr7HxNbke8EeBUq8wv_0-dVjfdzvH6D5vhcVQIydsnQ-hwPFVOl3VA1l0Q_JKWyC29Vl6o3_vzbFbXxUmZNX494Ma_Kh8wKqPzPh", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111189178601845717848\">Cort Emason</a>"] },
            { photoReference: "AWCwydjCNRGEhl43aoNtQL1mQG_VjoMgYMir7Wp_dK0jdvpmr75iMugep-xqrH4Zfc5AHATPLfRRu8-13CjQTdOeSETNBTyOkRCIiONUMAtkomKW74oOy-BDReGpAVIgHkGyJuX_TMsZ2N0KvJf5tQ1bH26JwFZYWNtnBFB1E3qRVZCEgEkKDEMB5mJzqhKzX7x0FG2wuXMcbLEWfisp7K02thAz-CIwjJcRkmuvsVExwLh8S9ov_oGQS8kFbx29b4ofDyrDyuaXLzJEKZFKbrkcknHZ9GtUudigMxAEeUm_ezxRSaJrcwf3wM_ERWCSLTTLlh5G_4rDxYcazZcu-kgd1YdMrUMuZ6m7jGWZKQ-JpIdYxL0_wp775G3bb8SknDC8uFTyRWufd6sw5AT5EjNTNPs73E3cdnpzuKxR3lqhjZewmiC7La5BpSJGdbDxlZtP", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116964750322539498432\">TY Huang</a>"] },
            { photoReference: "AWCwydi66SueJP1T0uyq1Tt11hweK9zXvfrO-69dsBjTud76fQMI-bofbhPhYmPDFq08fLXWuIfzR248_0Q2qWDBgdg82jbDe1vPaax_rHOlCLJs-4eAmqOZb61jPqGCzchGp2XZihVFO5W_dpLx-VWwTZOXCgeQQkxyIoxcLyLSsCesyLcRA30X4nE8t9eL1fWuXl0gUk-BXjIu-qP9b3VSGog1ixLlSk1u6vTb1cVHt9lS_Q_QbEZphqSsmcjcQJNAohrj9riTdY68wtRsVuvMvzq070CdhjcNFtZIbYRqm9IbW-0BdKryYweH1IjtLTsgrqHcVaxP3cutgRtkwGgPjBlLO8Z-IzNTTCesWSmWhb0o5TPRvhF1X3v8ai2UhCdF_9o2nZbp-3KFEMurA6i9BOYcbygmOquIXa1TR9eZ4ejFFXReKpy3L-dVMEg7qYBB", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112031603233707631284\">あんぴん</a>"] }
        ],
        summary: "정중한 접객과 함께 가이세키 요리에 가까운 수준 높은 중화 코스 요리를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["독창적인 누벨 시노와 중화 코스", "가이세키 스타일의 고품격 요리", "정중하고 세심한 서비스"],
        tips: ["특별한 날을 위해 후카힐레 등을 사용한 특별 플랜을 고려해보세요", "가족 축하 모임 장소로 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "누벨 시노와 중화 코스", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 6:00~9:30; 화요일: 오전 11:30 ~ 오후 2:30, 오후 6:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.cyukakamida.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12334864545492740795", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Kamida+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Asian Food Fuuten": {
        photos: [],
        placeId: "ChIJS3e37HcS5TQRzC6azPxiSLk",
        placePhotos: [
            { photoReference: "AWCwydhfUborDXZuysurswQm13kqF6sA9r32X8uUMdpPb2qKUT8uSxCWLmUoLpAo5tO18Gba8aPL94xg0Kpn_5mmIFRlcVa6MwcVKF9oYAWLYHAkNRLiGGtK6uMD2GVU1FfV1XsnRecAfhlvJXcHMEahCBK0lLTP9nR_6lhKJgpbpXIxJe8NsSufilgBHJbHhFm73di0fmDttKaN12VI4igUETPw5OjCa4_TxXw_Fu43VnAMN3TNxqFDnJvhvc8lbuJXHzzerD5h5_LvfvfciED8HZ5UZe1Cnsb--IIyX-Dn6kqyul4osQv1PdZ-i-ituMoXYTe6x8YtEeEoab6-_zBqxdlcA_YU0Vz4FBBkuT1eRhf9wqG3p-1L5BZ5W11q_c9zq0CaZplozqLS-7KApMLjn9JcJcdn4kUc9DoyItbr_JQ7E-I1", width: 847, height: 635, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109246738013697507905\">Asian Food Fuuten</a>"] },
            { photoReference: "AWCwydgkq7vtQz-yjfjQgTSnZB3XH8msS1XHWEEB-HbKJvTNm3hdFuBkoBJmgoYbzFBKoEE8x7N4PwenXsFIp96nY6MVkIZjx9cCErM-ha8QE2algFBBwX1wYScBoRtRpE4lMgKLdoKT4VjWMQ8eznfYhNhDqNf2gKAMyCGkghmQzGM4KnXBAJ4fImrUozcGiErOSJD-WLsscRWQH-pn0DFmmtH4nNNvULqFe3UuiaZ2f7HyCv1fUHNAA3zNSlfU20Qflr8CNv6Wb5JPO4WZw9fBr_07SAmm667IZ9jnFrCKmd6XB3VNZTCMTflz1w4mLgyxxfCQxPDMhXyveyfWye4SIm0GsLJP0y3tZOXEXyBeOhiOe1pJY6pa7NuwVshIyjRXuh7__oUhlydrx5wOmS1_BGTUmZyUtMj4nOSnbVIYVTO7QVcJ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109246738013697507905\">Asian Food Fuuten</a>"] },
            { photoReference: "AWCwydif8dUMV9RJHcZcX10IHHcyBnGgNo-T2MMCRKLc5azcajBNp6S5lecrM54ERNuGgUKWAWwdW19pBu6hiBopGlNPmbB7dfz2_mmuFqRIGO78jJQm0zi9bRUUgY3XHTtPirU0qgKvsCkZ5YDV0B-14OjQFRIJxuR3_b1bT4DPxMrLzxOf0H8wbNGjmQ51OG_MKvUi2DMME6jaLYN_M_B3uEOrh4s7vDAAK_LUXPECKhtm9Szxkw2e9Y-RCrmO8kv3oojm2JNuIejkfoFJ9iJME6eigypFbGbURkPIX4468RA5iwI85s5Rs4hKwcmb0fydHnnQXiaUTT7ay2OBsnI4sVqJatMvIsqSW3bG68gU5N5v6khTXXScgEisvVFBPWRuHNkH3-rTYEfuRgIz1JKXUHJl2NAj1xfLb-0zuDkjotzD3XZFJlF9VRiWrp-Rgzqt", width: 3589, height: 4785, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100710792384957712861\">Kawaii Yudi</a>"] },
            { photoReference: "AWCwydhJLHmVFaNxmrhY21k5akpTIHSG17PCRsldMAe27F_Jj3b2eFkhZwcVYCGBZghfXR_tLMDNwcAUCsB71qMeZ8rDWHHCEWnh8xwuW75JEWwsmV1hG6DATMQ0-VN_JVVu2neEHUaM-TiG_vNyXjJsl1_sz86RpKD2nuRr5mj8wr_TefaM512YO1FheKvOPMxx9UDfrSgjJsziafhKxal3N71oARswjEwtLSRtzBoWkeus_txday9BwxGc-H-BqfZqxLsC-C4-uTBRNQ3glIZ47sSzKK_tdGY6lWne6dcuMUKNx5XrLJZxdPx746GgRDGJYP00b50h-T1aOx-fnPBfmSq3CE9iiQGWDo2PLyi9zFYlV-ou758WnJyGFXHN1Qko36S4b1JclT3PVg16AK6_PZtS5NubldbrveL4nLNB4bm81ai1FfrOOGHZNcPlObsA", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115391723200496899460\">Okinawa Essay</a>"] },
            { photoReference: "AWCwydjs50RJKXqpyiXEGNEKXof7_PJhcCsXpoL1U2-FCvebrzqXGsD_lW5JSDhHtURJSI-pbZE8g6ytJ_lvgYtr_eFFah0ltYlEzHR2fFCLUx8_IzMXfWeC-qxfZ-qYtgW34nP5wTpNJoTyovawSWkjHXjjKJyf2Gm_3drvKmUBHc3Wq_ieTes1kpQ0wyZLBRr3Z5i6iTXM5r-Cge3_Sd_Z2LOufsQhsw126wfMGKpTpUtx7dqzJr5x8modq0UYG4I_L8OA_QQebRHgaBJw3P6On1SL1_GWIzvgsPvDgn21CfxE0_KTviLLe7AAOc8Sugaa7bUn0v7ogOUCC3xPh9DlNlv6xIk9Yv56XDxjO8xoCmPZ80OK0PGaPNGemiTmKYBVlI82L33jzT0uhcwSW2YhnXaPNUQNeC7Jo6baXUu447W0kJWj", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113363990435252496093\">Serendipity</a>"] }
        ],
        summary: "신선한 재료와 친절한 서비스가 돋보이는 아시안 퓨전 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["신선한 재료 사용", "친절한 서비스", "맵기 조절 가능"],
        tips: ["맵기 단계를 선택하여 취향대로 즐기세요", "식단 제한 사항을 요청할 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "아시안 퓨전", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13351029933243772620", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Asian+Food+Fuuten+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Karen": {
        photos: [],
        placeId: "ChIJBfXuU8US5TQRFsTA2ckKPUw",
        placePhotos: [
            { photoReference: "AWCwydgKNawVfofM7PWMfw7ZUuxR0xznhbUU8eH74OMVQmpltqVzbcogW39nVWyeitOqKMgyZ0uBXd4EHDXbT593UOdWKrY4IuSB7SesBEp29ugTSUiDz8NwjjqNDUdhTNFjhIi_33TF2XLDDht-73qBEQA5S0lYSQ6XHP0krpTs7Zu9KBrqBatE_7MXjKqWnNhCTW7aJQkhRLJAINhVAYjEG6h1eyLcxqtL1519wEuI0Ub_79ijK_Gq6oyOObXxw48xjqm076JBJ-shMzLhKK5QeGVeuIiH31fDwcOWqx7OVL-paVUxWafeZzkvAumLQzwLii3b8z7bNIVNgwbddoDcu6WtgPCQ8nNRsmwFLQj6wtjwtcGACrWlLDVwCUrPq5e7oaouj7D86UHXEuz95TWHf6NCi7UnXRobbzW2a9gHgzw", width: 1479, height: 1109, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113822386841335738605\">花蓮</a>"] },
            { photoReference: "AWCwydgi7OhTixVhIigZomh0Ho_gA9nI7JOeBTQ7xx07hQmX3wJavtWZrq2y8oSnvIoLw_CKVvDU823T-RfDT6v4WN2WU4a1N4pLsK8QTctj33mG7pbChuHdSkGtawfw-3CR78L6FxDXrxo6e2Pna0rNYfxu_8KC1xE4zoGcDQGEY5b4su_ZR1MBHYrKNEowsAbazfDQocv03Nj6R6EXxITCnZQlebTwdBlw6JyK3_LEpxCfmne1CjSnxUHvtpDoZCuHXJfW5wEmcFSXg0kJLQrX0qhqb38QM7RHX1WA19vuhQcZHjrUD8u0aoVgQjbm72idvlGHPc6TCZer8XG9ZRmse9jJbxGIcRuVmTmX2jZtx3MiYsFNHrjuEQsE7xUFX0NAXEUbBZxvW-m4xxB2fDvFyomKRseXWWjqRwMvTQ6hFOyjNTpBxMkD8s6va3lqaDMl", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107323221964791037924\">Shu Doo</a>"] },
            { photoReference: "AWCwydik91oO4bN84ejNYE29ubtFKhknxVAWmAEzJO9hJGNIzXRPkoC67naDXam6TLyyOaLNpGXXj3W7YFryUWIYPNTz8_8h_YyF2_Ag6Ar3Kf4lGqJkyL45GyJz_DUscnIIkO4gFTLJeg3EtKToZW0EFDrewV5hPjku4ywf7NJHsKkJs3gsuDitLaN3tJzzJWhdYMkI37x1OmwDyk7z1Vy65vJDXDSOWCdtIJ92ineqhew-ImR2ZfjZoB6ncm7mo3I60rHR7H2kIpUhzsX_f88YYNl6wvq9gkaUhz5TZfuQaMWmPUk5zOfUWgd_xCR8RM7X5YNvoSw8mRPOW4MEJMwAbhwlaguDLP-BpXG2y8D6Whg-Rwd8LoRs_rnefblH_50zTXTqADx1eOwlC9daVP00N8FVzmpfCzl9cCYxJjBDxNs", width: 640, height: 496, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113822386841335738605\">花蓮</a>"] },
            { photoReference: "AWCwydhBqWipqs2NXHNOJ9QRCEYAb8NCTJW1Y1-j0FqKo3B_AhBQMOh1KShwpcFnLTrFaXHcjtgPuMjB8WFZ7_pM-C36xlJsyfhiMM7E9sHxY6XXx-8zflfg8BM19qlWt6044PXbGM9Wl8PrGoP6eoew2JAVsG6KkwS-a8M-kAYP8JqpSpMPV6e85gVz1zoDeU_yI-jLwUUcurrehWWs30Tkt3oQ6HnIfuy0VQTLHEmxDiw1e4R0PZBbi-pFugTqkfM-tL2cbIG9mjogue4ByvbPtYNLaLGZfz5N1EwiTaRuK1qjEmyMmDMoaSShAAGKF3UtmpOP0DAPr-TpRJfKho0owDbVmL9dA_i_UuQ5a7-g2Dt9qR80eO99paj_lZR4vKnkNVn_ofdOHsPkwBVhlhR2jaRyFdDvbV6SWAtZXTe06j5XIF3ccglcxltTCrFqiw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117853388846259428179\">Paige Rodgers</a>"] },
            { photoReference: "AWCwydglrtlRjZzWnbOgN2potZRok0pavm51MnlQC8D8aUTGN9EZq7bk7Ls9IZvTnnNFDumcPC38BbHanBtu5Na62JL6G9hFwB2ipRzUfECPajTUaVQSkSqXjhKvz0x9jVS8fWtWuUW1NCCE__59Zmy7nt87LB0GL-nWimY60ptsxT1ejEVvFinTmOFmWgOIbiVrE0kr7ByQVpw7Ghx6-XdVXSMVGO2COCWnDDkcjfU6Uq7DNPyYeRS2dMyI8PMfdyG2Zbj56WS-cbjbNdXYSGTfbZisXi_kDnZAgIutSEtZQUoxLTnHs_RleST52yojmM6gMk-Ymftq4U_Rk_MM0lW8rUSYBdpogdOGRyfiasTGQMChtFDz1P63esiR3kX8liQLTROUiCMW0seqe_lhYhATSqIxU2fpI2CTlvXHt_65XEZ7syiqwuYwYrhdaX741p0_", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108293151330073954245\">Sayaka H</a>"] }
        ],
        summary: "수제 샤오롱바오와 루로 밥이 인기 있는 대만 요리 전문점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["수제 샤오롱바오", "인기 메뉴인 루로 밥"],
        tips: ["QR 코드로 간편하게 주문 가능", "아기 의자가 구비되어 있어 아이 동반 시 편리함"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "대만 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hualian.ti-da.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5493558982519866390", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Karen+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
