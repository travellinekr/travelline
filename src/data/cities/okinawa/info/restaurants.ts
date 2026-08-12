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
    }
};

export default info;
