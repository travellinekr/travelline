import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "오도리 공원": {
        photos: ["/images/sapporo/info/tourSpa/odori-park-sapporo.jpg"],
        placeId: "ChIJKdPFSFEpC18RnuAg7TaybA4",
        placePhotos: [
            { photoReference: "AWCwydiy13OTGVuOKM9zt5X144j2Pi0DSUql22w-_KBADro1bPPm5gGBHcrgm-Qp8V79o6EQX8DD0Mqu60clds2RSvm1-4vTHTndW4fOsKL2s4QwZbmZNT9Nt_S6ic6upVr5yntNzTFR3gqiyWsEUZlOwFvu9PfVeMMjyGzAgNxGCmgdeI3M0jMQ69r25M_rFwrTx8MvQvu6GOn-arTmnBVfWF7aLJc_bXEBY7RR0Na81Xz9s3rHLl-xK4Pzf6hTfbOKjqw6QTVdjF5GaQd7qVyGWhSTIg85JxhybHpw8afYmz29ZBXkuogtxnnhUv3kbI7ivSETAK2ZcwPXLv9fn-LHFwlDl_gfJE3d38f4bYx10EtC6wdeN467JHQuNnLvlGeDuUa-DdBZPSGLJAOAnWyKONdfnWZjPqFVRGuaalnm3lTwKD_42OX5Rd5CECcU2qfQ", width: 2160, height: 2880, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118204740512002584105\">Brandon Hung</a>"] },
            { photoReference: "AWCwydiZlSrFwKGG2wjjlZZGElFm0SzSiIKURzfsSe9cLP0NQfQVk-6KuIPJiw1DWAfDkjrIzPa8rsir1AS_Jp70Rvl5l38AxJTnvn635rfzAeeIRe290kuEak_Rdq5NBgWmh2QqHVPo5wtlCJ5kE3fxEUpksvQm7LoNodQ7Dv99p2FtoFp9bLNvbWG1BbGSa_LuJnT0kNl6kPIgANI_D1R1Jsmb55t6NjmPaegZZgkpjyEqbZNl0qXkjiY3PCtZdW9_-37dzT9NktEz9kG4YzahJiKJs-VOo92-xSoGCUnBPvVwaqS1f4dPEKrXUobMHAIRz9fNQetroXTfyAVzyvC0dJlwz4IcntDsWOYgRIgTlzqTnSNBXy_Y7_zHMhnXPanqGwEYWhGS7_sq5pA7nvLLONg0OpsQPSPhslp5KpNxOArb-z5th_PxQR4pGZcs1gFH", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100626804119138292624\">Ressyanti</a>"] },
            { photoReference: "AWCwydirScCsoysrvrxe3XDhEyzIb8A9MwoE8WhhaJa2PrTTE4YNKnGaGy1J69WRe6F58EbA-47UQ7Tar_VSlud_esKSyFbrW195YmW8C_0HVNhVx89KGJmegesYrcQZNeLf102YRPRZmZdMzXDl4ApEm0pXNmjJevEDzhSdb7ldpFJZtclKxJKOeUP3s1Rc4xukxM9ll9gC_CNCm9skVf9TV_BAfaA1H4MF8e_pJBihWCg3ToKmPGdWrX4Q8OiMPIbCs66eCI5AyKIEgnYcFyJLH8HUKwzDR_NXsUW3oA2_4LPUESDsvjF1wR1LsCNnge09eej0g-NoZI2nJYZ_E45KJ8Qj8YqSllQ2Gu3LBORebsd15hQhhXuVSHaqU3HfpGZuZu2CMDqcWdAj0on0ydh4Z6zznR5czcYxP2BfBwrbGasUPhzjWo0WxEkl7umJzcD5", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103100857067533649351\">LuJin Arsene</a>"] },
            { photoReference: "AWCwydhA3FYMbKPep0pUVyU5SaJIsfIn2k1bg4ugTYfcUga12t6BobOQNcplnaTYCsYUSgxm0t_UeuMB8lSpcy7ikBGmmNYAtN6smBdSitRn9pjbNSnQbzC5j02CW7e8E7ubBLsbNf0zqzDn8U-a8M_IlLOJAIVKTG0DVPO95rcXKBpIC-3u_x7Fbm4VBk_IVS13IHthG2i5qjxc-oKpj2OpaPkCcUtJLZqSr9JRsCNGJXWtsmjX1QBomSizT8DCMG9vukyCpLoBfxO2Uzt4d7cDL70_mZbsF9TzMrm4k6fYOMpC7xYbt-Nd1sQuPNCrHV6GnpTuQaeI8Ruy163cn1yO6Wioll1r8N9jIkcmsNjmINg23E-QO2Iu03m_lln3jz80AfCK_5sFc6_P0nCXdqoFdtxYbA7ZTkDsiEqMV802vw_q-F7f", width: 3894, height: 2921, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110192953860290877064\">carl hong</a>"] },
            { photoReference: "AWCwydjGWhehuImM49p0EgCqkI1MXbHDnaaQZyVvmy9irgfRUunmVvQpTTgQCJENPu82h8t4pj7_J5-LTPp8lLW5_q2EWOama3mMZ8FQfbiRqo1fqAqFM7EjvkYns6QH5YNJl-ruVxYvmRXKPSaHZMbRlOVv2eIzA-7KPqpJPFetJOfqRXMhziGqxbh8CyzXM4I6HxeRPH-XQW3oUzrvhL2kq6MRewT4SI_Ku7ACA4AWrkjd8ZHtaEUCTpTuYcy6Aj-_vaiq3b6V40Y03maHfwWDUoISjg1DEzKKGm7CIGWfCAz4-RxWQqyJdc23TfhHQ5MqTxrnVv4wmGMvgFF9JmHCaZ4ZwAmMAbYVBCK9n7oJeixCueTExScodWEKP5tYwN4NNReNh1AP4odKZdpvz2sdPHhZfxqYsTpqmJ36Pt-J-D8Pw32vFxCfh7w90EQXzw", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117402035289348600431\">JP Travel Diary</a>"] }
        ],
        summary: "삿포로 중심을 가로지르는 대표 공원으로 계절 축제와 산책 동선이 좋습니다.",
        updatedAt: "2026-07-13",
        highlights: ["삿포로 중심을 가로지르는 대표 공원으로 계절 축제와 산책 동선이 좋습니다.", "평점 4.5", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒060-0042 北海道札幌市中央区大通西１〜１２丁目", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://odori-park.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1039401562992074910", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%8F%84%EB%A6%AC+%EA%B3%B5%EC%9B%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 TV타워": {
        photos: ["/images/sapporo/info/tourSpa/sapporo-tv-tower.jpg"],
        placeId: "ChIJjWSHX50pC18RMSAiw3gaBOI",
        placePhotos: [
            { photoReference: "AWCwydg6aTWCzc6eP1PRFXOTArIQ9V8SvDA97Lji2AbpngTsZetUS8uLpRLwK2zZo6NbgkiF13jf-v15aSK_1r9UQLCh13VjL24CpQlatRnF26HlzJb29MmyilVMJE5DAscDKeAg9jWv7or8V2fWF_hJqOYXBHMsb1oCLekUFQoHhe33S6NFOo7iAy0zEI7Ka85ZgXU0ZclPMlVLtsASaMAi88T-qV-h4q42OMlG6ByLkaATUebnFv81IIEPywkQ1wn6jA6PtcIp1MMvsxd6V2xPUX8Ycs39oZ1QbxLWB0ewFtVYQgzB05SHs_2Iqu495BDEPIM4M8kTYbj7UiHX1-XqabDCEzTxXwO5ru4MvqSY4r9GujdCekX_Q6kK1W1I7Opxzy4Bn18pNUJk21hrIJVTCtcj1hvg6-PAC4NpZJWKuPA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106319205630064691385\">彩州</a>"] },
            { photoReference: "AWCwydjCaN9YUkskdtqyjn19hIRnTPsmjSzhYI088liQ-R7itXlcvePwpxbdbvyKXkXTQ7No71TmL_FCC9o0tjhuzC7SxMMLyTMNQwai7KTyuLfof3bv15TJDIMwFr7GmE29n4xxhVu3axa_A69Ha5TkRcjIssvETaYWC601VZxy79EQkAczxhNTisSQnRLxMxH4sSvEKp3U3CaFtex4IOLtQ36bd9KAfsPpmwlUkE3-tqaUMfAXeCm8IHqS7dFGvTqV3zBEN4HkLQx0PAdSLThKV0gpxDuX72_9AoE1OhI4J4iJYFQVRUkDdszXCd4PNH8Xi8Bym_FCOWY-43k-IF5PZOSEwzWNR8tZD5qSD-3cW_DvDI8JwpqTNJOGscfyzljDEhDI4ombTUu7TimUpfWtvFBk24oRmve5VQsfXC7C2Rj05ucn9qndmvbAP2-PQdYZ", width: 1108, height: 1477, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116754272793016221960\">K. A.</a>"] },
            { photoReference: "AWCwydiiANHhsC_Rti9PbCQtf-DBTTKKWwGWMSwfTR112x0yv0vbTNu1J8ntgXlA_IwM-5qTzcebALWFTqdhdRlMqxdNmcp3vMHhAxEyel9nwGJVjBN-ybPUuKK4mYlzPYsTCQESkjtDw_6Q2XvgpY03SfX0Z7NxY5olxZqfygT0-jd73Rzv_P3p-12etwpNxt8PyWXiuNc7tXU2bPEw3R8dvfi5W4cJ1Sbq0UjLCXc-XMACYI9jYaqX8uAELtUJCvJhxRJHZkk0tCiQc1RhK6XS0N53afozv7hCEiXhyr3uKsKUMJBOqdZ5BaviGGpxFcqPMC35vIFvCc-rMOrb-KwpxINQuZdZsvNIi323w-weNq0kf-vkG63ZbjKIQnw2sGaCtQ0go9-aWI0ZVYNeIXAlO0dM9c6LlZ5Q0Y088Dfc9OuFVg", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112693035331892755838\">マーキー</a>"] },
            { photoReference: "AWCwydgJiWfpZDpgTPSRnlRF5HdC7jlthiNWI7BzPN7-bd_-sQ0B2iPOIjFti_czweknvNrbUPtBdiv2hwAysEkYj5dKpFA50cQGpQW6lFCukEYz5S4OEcAgIwjMtJEZVEb0UPRaY_tIHMxBxQKG_aaZyEGDFTVz1DRTHgREr8mM9NiV5NfBTM5Y9Wxyw4JVheJzrcaNDILc16bEvbwmuGkuC1DJt3XL53UAkZPwd0Gr5pme_Uw8mCx-NPy_9iOZYjg6Qu0S8wDZ1tDazE6BZ9Tw-IGW0Tr5foV1BMknXQxbKNgvKUQI1xAjcGcmECJnaIsY01PC1YAXiOfkMr7nduBMZRGCS3zL51XJ3d0gIvhr1-BdSNW-vp811WlvPzYcHulkbfTlMe2yuk47sti2awNjkT-SdlBgC8ksDs3mpmY-bETDNE6t", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102249685178490110124\">すこっち</a>"] },
            { photoReference: "AWCwydhyzjxhqN3_bvgmRIUiZuioIMxsccnUnVxip9NN-EuFPjVB8bqnlW2qQz6RFtXKduh5lRvfXVlHkax3WPGvmEfk8enk5hMRRlVyd-9PMNluUuK1PQvYo6azMiQqJ0tBD7DBiPoJKpgpA8lhq136dzMLJ6-ePe-JvUlo-nFrbHBQk-Cz2y1sIrtP816UB4rE679Bo1TvC0hSAnlvLw_cfQN6De1Tixm6UlUMkgy9ucprR8SafqBVY5c-aVQgZPq0O9Umv45F0PnaSv76xnmvBvEe8ztpfNmyieirkuWHVA_alqwlwFDs6X3LUEkpmXIKF2CqvsiScwoqXPka6N8dI2rXNHGnCjCTtmiva5KPAtYb1_qd1F-hFjlqRDi3tRXdASSCxnRfXgFTSsTmrsWpRB6CXONIpqqO-ULFAynsPg8", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110887029808250724722\">Sonny Chan</a>"] }
        ],
        summary: "오도리 공원과 도심을 내려다보는 삿포로 중심 전망대입니다.",
        updatedAt: "2026-07-13",
        highlights: ["오도리 공원과 도심을 내려다보는 삿포로 중심 전망대입니다.", "평점 4.1", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        duration: "1시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒060-0042 홋카이도 삿포로시 주오구 오도리니시 1 조메", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.tv-tower.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16286171258450747441", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+TV%ED%83%80%EC%9B%8C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 시계탑": {
        photos: ["/images/sapporo/info/tourSpa/sapporo-clock-tower.jpg"],
        placeId: "ChIJR3JQJ3YpC18R680ES0qomxs",
        placePhotos: [
            { photoReference: "AWCwydjPri3erawxi72WL-vYu6Zr_-jyh9SM0703IGPPYPUY9_i4YveulsFo_uLfM5um-yr4MXZl78Ft8IPu9dR5dds-1AFS2j5VDlQSoQz8NmCCV_vsEyPoheOjLT16Bi3HBk1KtTdFUv00zh8eYQHXWO8kTqymQvz8iumI4JpNAf-HZ0rPNWFkbflJqU1wkmtxqpXOac0D_jeaxmbLrRJwWLoCJfbmo_jyTLlkPn3ZBZatN8H5lIGVeeROyTL1MlzJxP1frtcTfTF73wzUyYxrvzu47pL0gi6a76WITU3dzH-Zy1pbMLxDcxhQN_QezKIufkosZHOx3badyNUV1E2ydcF4K_sVGopJWsL1w-VHqbpQFJ9twIVYDtKrMpIGXTn_bE6yPez4l9qPo0EWS0SEqBxBBzILuHJ7X7zcZNwcP5SvzQ", width: 3599, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102864143281368866264\">スペたろう</a>"] },
            { photoReference: "AWCwydgJxI3Jy83JaJZkFgw02QeEcZuZ1UHyPaQTG03I0zTtv_IYUK29MBtgUzbf-We18-kvtmmeDaCk9qHIo1t8qSW_Hiq9ta-CUI6Oobq3LrqJlq3Jhd2G7aw7D5wo169rwBB8eAGTDoNYrPu5ZnFHJ8TwzUf9UCG9EdKQDqAbk-1UgoqzmXx9ZtUlBZe4fiSVHdN_idOieZfjiLDNBxrZ9TLHCYUSnu_UeNGVRnlfHlsy4i5K64gYPop4kR05pjkDEfA_FKbKxJfErx8q72zKSM4BqDm_KkrYCgPuDvhmYUB4gr4FzSVvZEBW3zuTsv3a6_jgb8LEJUJr4aS0jJupr0WvRhxHlie2zAaY0mBJ1z7nx4_OVZpVGZ9go0txkIAUX6120pn7xmVmErZSzh5wCMQKlJ7AYnEMenAMdM_XD9_eyXUc", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108258503249467213818\">Tetsuya Yamada</a>"] },
            { photoReference: "AWCwydgCPVVaMq2cD69q7Md8G_FEfdyeBv1UHhViYvns-jrcRmbSIUEy2VqOzyfU26OdY5rEzmw6eJahKsRtrBK_6d1pZ0hPPAjb9bvj9SzpBwJbZpLIKor7pFOnSnuBGxcFkptXdutIKqld3SycGxYeaMFOMX8HCDYnpA8xL4O3k4pStqX3sk2ZJqMxTeAiP9F6myrPNm1TufnSqDt1ZhUzHxiKwUg6RdASJcDXcl6jl5vhSSd4_rDgzjXPzt-brGfFE8qLUd-h5jetGWM_Rxx16oY8bS9aMv-7a_C0FKIUCIENCeyQYj7MZMYlGcYPqawY_GgcuvNcsA4-U7IR4GTDh0CkMnFRNl2A9l0eaY6onC5PJtlzffIr-kpYO_x3FzdZRFu13F296QLpu9OLtolddEcY7mMUU34e1gzWo1x3T8CODw", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100798143012351339756\">こぐま</a>"] },
            { photoReference: "AWCwydi4UP5ot7pk98khAn3emH2cwwAZPbCotuhWlu4KfNqLtzSIn4HRxPCa1V4UtAPbsBHpXsHzymfCgFDLlaat3sTQFyNJPpsT9o7Yn_vd12rT76Gv2GGNTrbyIQualV6QwQ0TYsSKRwO_3cKHvaYvHJ9v2SKSEXkRdUK0dz1saMDo0-PjNDHvyUYnkOMYFqy5F7uJFa-ml2trzWJPP6LG3tTslL3WELHrP3hgnL5waf9UBM0agRsWh-JT6jOl0V6rwkCuBec3Ft-s8KcDlL7-phiwHkWY_Pcp5j7gv0w5SyKntYAe3VFwiWxDbZURZDnNzrnvo9115yFJFJclCWRzby2f3mmLMc8opXxbyEh2WVl6ewYdJPpz42b9WJEYeRIPnJO_pQkX1Vb3rYnVvwiBy0QNZO2ELDWUo66VerljtJk", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105856045547108725028\">愛台湾</a>"] },
            { photoReference: "AWCwydiiNwFKKLrFEdVj1D_Tcbjm_I4g2d89RWDAkf98uHI9JuXxo50_KbVsOyWS6CQmTPbmUGeEaRe2tXOVZJC83OQbRbIyR8_z4P_nyVbzhtbNm2jSxLjfvPVOMOhXYH7bwK2T_HmBTHwdQfmRkYyhl9L9djxGwmEf8PK-kryxN8YvFJoU-AYSfru01glmB7HWm8C7mcBesRkk7os0mJ1lbmzpxsUpoKMbMQqsjLmkcYDvUanjshWMnCzKvsIEWBvM9Yas63f1T_Xk8wq-yO4O6xc8Zyk7qODvpJ-j8CstzbRsH04eGTg9dBMqYcO3dGK0Kadk3CKSr36mYsAQf9iinqFbYoc1fxZtehFo39YUoJ6tzYqOqveCPuCh-Cik6LgKAbq_q-8UubnXKZ-fuFRwFzl7CEG_N-13zMpRBhXrkRbDr1GI-t1HX7P3ZA_fIpHS", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113682774129785888804\">Daisuke Kikuchi</a>"] }
        ],
        summary: "삿포로 개척기 역사를 보여주는 도심 대표 랜드마크입니다.",
        updatedAt: "2026-07-13",
        highlights: ["삿포로 개척기 역사를 보여주는 도심 대표 랜드마크입니다.", "평점 3.9", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:45 ~ 오후 5:10; 화요일: 오전 8:45 ~ 오후 5:10",
        duration: "30분~1시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒060-0001 홋카이도 삿포로시 주오구 기타 1 조니시 2 조메", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://sapporoshi-tokeidai.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1989368697453858283", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%8B%9C%EA%B3%84%ED%83%91+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "홋카이도 신궁": {
        photos: ["/images/sapporo/info/tourSpa/hokkaido-jingu-sapporo.jpg"],
        placeId: "ChIJk6jwxNwpC18RCNdmWzXijew",
        placePhotos: [
            { photoReference: "AWCwydj3s0XHlsyc0R1V0sL2hPISS-QTp77zUND4V7bzluu7t3xwcwIZh8vqfS3w5JNS_2CJbfwm0beAYeLwilPBU2DK06rtayMdqYSawDTSmRZLZQ9ZiXHjAz5f8CAun_yax1B-BgkBK4XLvEihql1t34edhvh8i22g9rv6U_4rpI1gFaTu0-EqUF6MwjCNMiUe31xlJ4F_9ppBJBdPIh0783JpMUwwd19YY1Fsfq3hB-cfH9rpnCTFUh5cgdZPNshTHWucEr9PRqRMtdpINzGaeO1XdFiY6Q5FWazH19SxCsjEHtTaRZj-ccLkkX1Hd0qH5u15R_jFux4FvNEPeLLd7PTqO3xjr_wO75CVHSPgVhnAhi7koIx90obiT50S9UC7kEvRG-pTEn_guLe3u6TGomRiuaB7c3L39MhpkwtHXLfeFpYK2ulfDNvO-qxD_Q", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104361365587501867556\">Jeffery Lin</a>"] },
            { photoReference: "AWCwydhiRTvZojuRxGGnRodxW70fpn6zb4gvTEpQt45rw_rEK3X4aa-YjRC2k8ospBbE9H-mSsFYQf0eV_w98O8JzPck2Z4uaDKbD-LbFVyLoEdVTruqfxIRS2ajgGNlpg06l9N1MFkQd8FYHGx5B2Rq0xTBTKK5h0fYak1TvLtDvA90q8AKA76uLfddE4SLxEEoLGUUBHWfS42VNXqF8IYCeRaku7NsyKkrqfS0it5roL9MfjFOHVSQx8mlZ4FYN4Dd7NNEAe2OGw1uMGS_mKaEcURoaubYXTFua20P28f7LnwXaIb29AAhWB9uq0nwR3l8yRD2QCChfBiNkUg35eCWxx4dAFT26WeF-0wAYu8HPTqd9X6nC1yrUiNkiQB8EEKE6-cEutsevb85j94UXVr6vcBAhWOQy1gYpFd3Zj_Ztx-TeA0", width: 4128, height: 3096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117388481700459515472\">みゆ</a>"] },
            { photoReference: "AWCwydjDfjTLXeWYyS2ZlM2X1axliPELRtsGY5eb6MtVVJm_A858jfHc3ysJR72x-JISlXINJ4dCEwaQbqHswocsHC7QN_EoRlozADdLGgP99QumN4-0H5BHQqO1wNQEnVrOB4Y1mo-fTeb2vKkiu7lXL_H5k9eOwLsuC5i7i3xPeyL9bmvEBKEB-ycUzncXfPtkX2wAMZWhAx1Of0kOp3-vsq3ywpHtyEAV7MVO9ZdDBu6CNZ4RM7_5BBKXYabiifhxLSgkjK60NnUqmEDce9nWCFuGZAOgn4wDPpeTnUH3weRnnsclcrXOw7QD1hfv0SnuPBq-lCfjZGGQv_SHfOhfkx9ZRaJrpKNJ2aPTWIhNf6-7vLPy9KT2dJ9wcm9kOXD36ugYARExbcUoyeQF_nPrdRBxZWUtL7ETHrgJA4GPhVOq44TPhvJquervcXpk9HMi", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101448979341732216121\">TAR TUNG</a>"] },
            { photoReference: "AWCwydgqqYLXERCfa3SWzFq-G7tNCTwO-23Nrc6ymYucTT9y1LXUuXdB9NSLemIURu4OxtqVlwjpjFZUnYEZAHWYT5fA1fME3IDaUHz3W9m-zAuq6H4JgeNVRLlqgkk5BC8zkySDbsEz6pDyfo8uZQvYKjfvJQ9BezWPdohnteWJyLWOx9XUSglJ4vw0T2IMWkjfLRyN8GKEhfntf5oBSDbf-PJ3Gn1wIPDFnvl9xXdOIrP5WZeUm72rKu7n2olgjGuSRO9ikLdcjTdxfDOAkWS5Q1pHNELadYt8ejhyhcWFZb_hGG31RzOVGYC310SX28NXqTGRn3lEZt4kJn32wnzAxz5K5F0V__p-tsR04TNeE0TvZ1rNS2RZOPeBI5-HMSb6gGsSlFJQkAAvNAtpP0SRjmWfZqsVg_3bdlZdf8qphwXcCHdyfsjeepXRPI_YGESY", width: 4800, height: 3204, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109471698635311734446\">韓介安</a>"] },
            { photoReference: "AWCwydhmSEiTi1qak_hV3b-ZdeMjUzFStcCxTKdExUmFND7gZH0rfFTsMD6BDdmd9NWhI5_QDu3HnXN8mB1CgHOr6J0SYBmWytBJB8BBDhhQ5RIqcHzMeM3B-oJXJG31IBf67Tr0z9kOuPxcF00v3762VIoplI3-Yoq-HCMRC9-odJRwvJGLHHoN4Yxr3XXRHOdyw6XHVTh73q28rT_JdOrWkAGM0_iw9ewmmoyVBH92DjrwkzSlGrzvdavY3PpUGhwQqBuHdfhv2R04_AlmFG4CTpgxZBXddNvBf3OomdzLVbMzon5PQD0MeX57_dozbPkgTwjceQNTTF10GV36mOjTU19m4NtfxfqE8cRl9jyPn7OnhBxaLUsaom81O-pK2XA18v7fUPZtWJ9t_rWiBZvDicu1LxDnlIfJj3Z19yJX_BkhYNw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110226882661059851763\">Rock Ten Lin</a>"] }
        ],
        summary: "마루야마 공원과 함께 여유롭게 산책하기 좋은 삿포로의 대표적인 신사예요.",
        updatedAt: "2026-07-13",
        highlights: ["마루야마 공원과 연결된 아름다운 산책 코스", "일본 전통 신사의 고즈넉한 분위기"],
        tips: ["공원 나들이와 함께 방문하면 더욱 좋아요."],
        hours: "월요일: 오전 6:00 ~ 오후 5:00; 화요일: 오전 6:00 ~ 오후 5:00",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "474 Miyagaoka, Chuo Ward, Sapporo, Hokkaido 064-0959 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.hokkaidojingu.or.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17045528883461805832", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%8B%EC%B9%B4%EC%9D%B4%EB%8F%84+%EC%8B%A0%EA%B6%81+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "모이와산 로프웨이": {
        photos: ["/images/sapporo/info/tourSpa/mt-moiwa-ropeway-sapporo.jpg"],
        placeId: "ChIJG4fqNwYqC18Rd5EvgpNdRQ8",
        placePhotos: [
            { photoReference: "AWCwydglb805llzIo20ckIYkCNcvFc3G8cCEii1-kzd-exxHNDFnFUXgfLZCSc5yUDwvj5buBFVUd6mtkE8HORNQk3s2wbuuDg8o2bCLjwPaJPbW6jQ2HdS46N1XZJ68TdKXx9LBQ5SrLlqJ9ikVRGuPoRuADdCYXaMEIqiqKiKOa2VJbWGO1mVH_4wLojBPUGGKwHnbMiC_0nclGwcmX6FtECtBqFYGs3ZEFd1cCguxYTHpTxxIwPYWtp6Sx3wJiy-5EfklR1VUupnMDKRXZS1QmPpeO9jDCJoTO1jeeMQznkJ2boVw3qIjczu6RQ1Un8upH7sBtuBYscA8QUEaFQKA1rem-rHPGlCxESd66Dni0kvjqsSkPRNN2JCZfg1V2K_HFuIp6RO7bZyqIqypSKj_f5b1gil_xT6Sp4DWU-_LTfVkMG9ev2u_0bNHlIF9SzZb", width: 4500, height: 2529, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110947312256913818525\">札幌もいわ山ロープウェイ 山麓駅</a>"] },
            { photoReference: "AWCwydjK7fK0wor7T_56wbG49D0aQooTsgOcGoGknT13R66DXFCOcRSH0u-M9xwvoI2VaL3SDUNdqvOrhZtulMBzK1goOpBnFR3yToZJbwpLrzpUf5yuHnw4ep5LqEuN18wDqGYQ9mOLabKAURuHEuQ6isIU-eKUyiWA2CqwCzXriPx4BjcEC4vJqbTh5uka4fsFk0JolR1vgQxlkZ3NGAPBxpWiDeulycMjG4czzQxZTX3GTrvyTZB5LiAziZjX1cHUxMCU7JDKpure7Bu6PbTb9Q5J-gr9hpAsQ3aV55RZYrjVvCzVMyxYDKHoVjTrRuFg4lrCBBzlyf-I6P41tJJ4cil4m9uDFeKgtZdMBbsITtOJJzpvRHQQGIKZeopq1qXdgjeBQewrOfFpPe5-V9fHVxxms-O36zfIpil7Dat_FgYHxgsxyn2odB8HTVW8wQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117776938669200709201\">YI FONG CHANG</a>"] },
            { photoReference: "AWCwydjYl6JKc_Wf8ZzbqMsS7FU4z_8Nii-JlbAqE8PubyBTFDelY35L1Q37ahZ4l_ZLqe9MkAR-CfF3Dtrs4bouJIfgc9qKj-A2476zKRmKYuQEbY0MJopwdvMgpwxrBdzGBQLsNLG6eu4jLvaWOuAjlK3oZeIOFVySKll3I0sUssZdlgO-0Xs1lQj72iAEV94okjtFlsrzdnwWLuiGgsxXYKepKXxqzuvvgPHWe4d0yCglkm0etGgtC9OHwwK1lbZT8xM2cFt6CvOGseRBx5DY6pBPOf4Blx8V0SvMxa7kFqDsv66-uCVQrq8tgo3pJz2gzURo-9hz8_BZw1s9uXP8cybYkOWjnXzrnzumAGnuSYdaXheBp-5yjXi4Dpe0SPsO18RYW2XEM_yuqlwaHQ52HsQhVX_vXKXJXKKR6QMwrs_8VVgGUHSWrWUcMeznNWTD", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115551263825801041788\">Ambrosia kaori</a>"] },
            { photoReference: "AWCwydhIu3AZv3qTvjugh-NgyOc56T0zGQW5Yy1WZOeAVZDQ9TjM-KsrliMHgO8Y9IC9E65DFToPeNMQbXEavtlytM8ZaaanNflMMjnK-Q9hmZwM6XNVsC1RcEwVaHDnl8XAOp0iuSmICwgqBdQQzxcTdpyKNvsQ9UFMBSjLObvwq-gKoaunVn5TrtVVbVTtsUkvJidVMoNGAdPsEDi0Ep418d0NECRu1_ZybF1gLzI7RPGb8thZARtUYym4GxqgXP9VNG4gmwOPR1eEvq_aS-NGrszYUeApbc5pw8th3lOZZdIgNi5RG9yoGtgvH8TGxr6iPgc_2SeHIMAaYtEBoeqYcJu_xCU8RWJRv1T5YV2mEZIhepeU31xKHJLOXDqZepx7yRCwMihQo_Syc-akY7JuercxesU2dit5a5_mLerP2BvNG_Dq", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106910227429854832698\">旅日記</a>"] },
            { photoReference: "AWCwydiw57OudfRQgAhFt12nkyFlX1GeJ8UxaxOyubZgAxC5HMePJQ3ndT8Yu3jM7PBS0DNk2F8axeMrNYsDkFCGw8HiievoaavTtJOJJfQJTJQNS5mL4mI1ESxzO1LMtwf_uK8QQdM1VElJ5Xr0X2pPdEEf6BSvgVmW2iAg-bHRQgGhtkLFHTQsMfs1zE6dqFQw1nQYZjA_uTrXUIzzPfmLvfzUK0hlO-5C-5LyeRCErNf7f7XUMrklMmw-r4vGRd8kmrIg6nIAFo4QV4TN235Nk7hrB7dA2xPnTC6LJ0LiWS1I_vAszVvWsDSzaZTpPXt9MAADYhpi2ad8jJ7fXOI-j53rtHFe2m6rOHs_csWckWAY7a1hKW-fqYZ5L5Ezi_0OUSNrmDjO5V5O9NqCG65PrNQVQYlXy-dIqiEqd1wegrU", width: 3000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109037733417051968973\">おかえり</a>"] }
        ],
        summary: "삿포로 시내의 환상적인 야경을 한눈에 내려다볼 수 있는 필수 코스예요.",
        updatedAt: "2026-07-13",
        highlights: ["일본 신 3대 야경으로 불리는 아름다운 풍경", "로프웨이를 타고 올라가는 특별한 경험"],
        tips: ["일몰 시간에 맞춰 방문해 매직아워를 놓치지 마세요."],
        hours: "월요일: 오전 10:30 ~ 오후 10:00; 화요일: 오전 10:30 ~ 오후 10:00",
        duration: "2~3시간",
        price: "왕복권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒005-0041 Hokkaido, Sapporo, Minami Ward, Moiwayama, 1 모이와 산초", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://mt-moiwa.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11155252751532118033", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%EC%9D%B4%EC%99%80%EC%82%B0+%EB%A1%9C%ED%94%84%EC%9B%A8%EC%9D%B4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시로이 코이비토 파크": {
        photos: ["/images/sapporo/info/tourSpa/shiroi-koibito-park-sapporo.jpg"],
        placeId: "ChIJU8vHZBIoC18RkQEK1Lg8HsI",
        placePhotos: [
            { photoReference: "AWCwydjDpEgkhjmFtAGQ3_w2VXtWwo4ACLTUmQTIhxAjWQPxMlZflLJ__7dCJYtdMQG92fdF5k3TH8du4q7B2FBVfRBAGXWCFnJpgZlDQo5C6t9vBLk2ukK4QNgrSZbgc-IikoSNnOw5HbDEfAObJtmCki21rIaJuYSarMi7CPYpe667wHpq67ReW6R5vHhvyM6glE-h2O9yuBvQvfvp6gq3flF9zpUy-TJE87Oejaq3uIdoqu3DYqhf7Mx5oj0-Aj5TrpBy_O5P6Hkzn_e_7_BgDpjgnrixcBASxNPnmYxJNi-R5r2HZCx4gMg2EqaKkRhUBUwNTiwmdgRaYpOegDxdD99O7foIk3v7dbLCqEDiRvn9rQ5AOPMADSuRC5wGoEosZqB4085pftP7zSe_drXW1vInyyan5YQ0OXx771bIXBJo2q7z", width: 4256, height: 2832, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107753572091431885757\">白い恋人パーク</a>"] },
            { photoReference: "AWCwydhO6qCBwfU06Dso2CVreC6NZ5YfpKOdsRRwB_nYtKlC5pyiqOUK7svKYlfu7mwr11hn8AfKmcrKYpW5a7s76q3k-Jry0veSGp5EElZLo_o-O7ciM9A16G6bfwF-CbTatez-m_HnwWeyLjUoMAWCSIjTOO_lcRXZudvhjljrmBQIXy9_RLqk4idA2kfoomaDJtpsFmZaaJc_X3TQy9xFr7ZJbSz-7aEbB6YAQChkBL9y-fXd0CIN_rlodO9b-eKCk36G7Y4eb83ioZ31eYcJnrqABb8Ba8A7pkS4VpAnOd_56576H3MfMn1AbcjUxf55cHlEfBVlkErHrw_qqJ0f-e6g7wIBsrsuw4GJd4wlPtvDa4rU794QfEqNp6hhrE_1kxLtjQI9vFs_3soyLdzPkc4BZKxDAyBUXzQyxhzUdi8MFZ8", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112568197624286977347\">楊淨茹</a>"] },
            { photoReference: "AWCwydhryiDooS1GXbMZ7LucIz16_eWt_apu2aFKSxVehKbbm7kteLsLN6TeF-c00Al0-7TxS9xNLiqzVcmkasno6ZrWLM-vzCPLN0CwUyoXDxe4JUzRUQ4sXQssUZW1VpCjY_FKFeNk7KMRqigooeEyfh8ZMRq4-_g2AOdO_sCm9R3VHOyF2w2T9nWJ9p1y5979McTr3jdsuCBGkGDMdPDeYsgMVxb0Svxz1zhRtswg6O08f0AEakdcARyj8gBd8ZUHDYqKDbVbmnhGc9t44Tkfw0ZZiDSUxhv5RKezqkG5OXG5USjF1l2ubyu7KctIHi7QjXeWBpkGEIvoeCJaD2QeNQs6g9h-xv2fSgJHRC_hwRj_3u36jVJLhTrME3hRD_FNM4iMwzG_DIkxI7sThCNFw9m6vlRbmAXKdHJDS0XObLM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116073129681512535003\">佐藤淳</a>"] },
            { photoReference: "AWCwydhN5QwN1iNTStDOblzEwySOkcSAXgwYOqbmt6shq0sro_UK8DOiW9dhZ00Co3MPsEw81LgYB2h0oVSC7xLMy2fCiA8Gw5meYpiMHIfRffJGjI5gM4yh-1pUhqS0xnOnk7duFp1Y8OH9a6VYtxEN5H1bw3C28LM-_muhDnUMCyHBwlwwv0D8WgFWpDP7iQmDQXg5crtDGf32lxvEtYf64RK7KympMtha8it9_Hse5Vnowy15s0ucCo68_XN5k05ry2IX6OUEtC5eRyg6BeSSUFbqFJg1koZpKZkHfB95-T5ANjRYoYvDxLeIbRb1ZxDGdOopJCNnHbfr6iufxGJBxGiH4tVzKh8yE3dUQB2IFarxZozI0OdEh7Z8RXG5qqIa_gROTH46VBRRxz4HZLpki-gYP5xRAJXSSBYosWabeKJrOQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116354912884313536334\">荒井優輝</a>"] },
            { photoReference: "AWCwydiIn6autD9alQ-EfsekCGyOB5c-GbEh_sHWrWLPQhIARhhso6PL5HIrQKjOjYeqaPXT9yqhyxGvpVWJi2Ca34SWCV62e8PhYcLAtvEKCl3oXLSjcvC4Q_kmE8LN2N9ttL2jLD9U4Icn7pjzE7y6dlLP51AsTcCLP3Fypr6OmIHELkfrM3h7w7ltF8dPxr85ymC7qtd3h31y6NCs8UXRT-GjtmRvWeesHsUVYJgqFXriwiw8WFngQ5ka_hj783H6xHU6IOzIaUEIPkme3Ui-Qkk_DUXCBEvsE8YXfXu1iWr6FJBKyQ9tmrWNvt8Dz23xr0S9ITClsRh_m3R7hrxLdJDaym4w0HvZ3CC1GF0mJl7TuV1u3qrqJMiaey7ZW6UV8AwcUsIy_QIp86kgEOmavyt-6bYhpEgKa7Qv_AIVPNrzY-4a", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110357066736788473272\">ジョンジョン</a>"] }
        ],
        summary: "홋카이도 명물 과자를 테마로 꾸며진 아기자기하고 달콤한 테마파크예요.",
        updatedAt: "2026-07-13",
        highlights: ["과자 제조 과정을 볼 수 있는 견학 프로그램", "동화 속 마을 같은 예쁜 포토존"],
        tips: ["쿠키 만들기 체험은 사전 예약이 필수예요."],
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        duration: "1~2시간",
        price: "입장·체험별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "2-chōme-11-36 Miyanosawa 2 Jō, Nishi Ward, Sapporo, Hokkaido 063-0052 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.shiroikoibitopark.jp/?utm_source=google&utm_medium=maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13987684257188413841", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EB%A1%9C%EC%9D%B4+%EC%BD%94%EC%9D%B4%EB%B9%84%ED%86%A0+%ED%8C%8C%ED%81%AC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 맥주박물관": {
        photos: ["/images/sapporo/info/tourSpa/sapporo-beer-museum.jpg"],
        placeId: "ChIJ0fYsL4QpC18Ry-fF7_rGYBM",
        placePhotos: [
            { photoReference: "AWCwydh4SG3OW-NWuHtDrC565kuTVPMteTkiuWE_0l5__A1Dh1fRSjn4t9yRuUFfgN9WMYNXXkLIUavSJ9GzIsF_XCRaLwy3e-gnNZh-RJAPhTuaD86D5xSAvtZ4F4fB4eC7tbOQUCXcJ3eNtnJOeH3gNm5SCGV2Orcu59ZCP61FIUTBqBuVUhtWEUN5k7kLN1Rk1PHEw46bwJDTIqaw5TswHOR8Av3fY3WhH7OMU0ny6YFLD63bw8Mws4zYOEJyCkGhSBPCwuzEU7-RQ-Cw-pZoMKEcTkANXIUCMTiGo2iyettC7XhjZi3R_RF8q-FxVN_4UqEmTzhZ1EvVSaVCqPVVEffKJ3iq5FQwthKBu-PlvPVrtSmhFHLFRgw71qgdJPqpswKz5qKglXZhlxuW69geZiqVA_nB7UfzSaBw6-c67GzQmQ", width: 800, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111481767422904414828\">Kim JY</a>"] },
            { photoReference: "AWCwydgOl750XDu04pokAIcqFteG7oSb1QU2sYlHob4RXjirqwVQ7Qk63Oj1CX2i1pvzGEBdB3Ip1InRdWw2l8LDfrGStJO4hVtTJOnDe_-cZ1fS1D_lzONshuxZO6zaMkpgf3dk86qgfIWozee0u7uFTM4CN8s_w9cZPrUZ9w5Lq2kfnE_4Ml0t3fSR5NT5r1LObQUQXaB8DlhqlSYmNsEEwGxlJSeBpS1yzhUuLm0vaj-tRaIPgiVpuhgd4kZBXV71QSxaFoItF0lcPyTYRjXF7DObezTxX50JwguTkur3js0mCYcZYH1lhyRkeVXsKo_SFQVuv8jDOzmSCXQxpdMrFTxJAknaWGQ9iAUke0w4g-PcgFje42Yxoc_xk9s1mF9QKV2APnpHMpcAVYHrSNlVpzC0epcJlqI0Skkwf6j5ZyFUqA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107720902406864158745\">Sei Oh</a>"] },
            { photoReference: "AWCwydhh9BkLSZ-Tbp1tab5sNa6FCSvo5sBjoI-FMilBdyeUJj8NhWbrvcJJ__YbarfJC1rHCNMFXoju6NCVgK8C4uCIFhRgwFe7TOxbjiNi4bpsNCi0YZHCFyxctxzr7tDqPrqHhVPGEuOsLqac0QZpuPIDasQlkSaseoBeJof2WeIcT1ExOTW6Cr4ibdg9iT4TmUWtJ0Heoe-e_A2lsXt9ziZuQVjUdyX_k6SGQVlYp4W09DimzqOsdX-SkDPYfmRQj3v-Lf5CYZwQKw1pYKILSMCoQYGOOpS7KWFNdWGIEEa9lf_UgHblTqGQ95XtxmnT05_9H3mbWj8uD3OpgYWzfzzvbN6c78_uHXygkJrh_09hIJ7ubEVVJDof8jXYz2N6Aoq1ClFt2nXCPNYxOG5m2Cru-Zn9RMll4dAvbqiWSRwdZKkf", width: 4160, height: 2768, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116732638160806997071\">陳小東</a>"] },
            { photoReference: "AWCwydhtrVh4ArGwmbG5s52LIdYR5bXwa7E8NmR3S38GJfgHO4UKIuNIp57Fvm79tQMzY1fWRgePAh8OmSrCogPspJin1WEsa9ObARbB7zwSCIV2WpXygkvwYxPAyLlXDwaVy91O7jSAEHrCN9HXzIhrun3IU1YQxyf2Rfxt-NNTCYbK6gCoIcxn7Zhb7ZjyQX108dAi8PE1HcpcmB22Bv-hd1Dtd3_Cw2qGJhACSt_y-tMXx8tsx_OI62jWHCo37UPosot-VYhaKLk7-ecdqgdEG01SKlqKlMsIHG1ZbLUTjpQko2VoxLwRDrJDuFB2oGWu4hSF3Q2JfD-cn2J0gVx2bhdYlfc1lm3rkJz3Lr33XLQchrSGPt_i2076_Pu0oQMz2c_lQhI8zOROHnc__cx2uaHJlP_aJ811Y7eQ06250XzCbsvvzc2C2aP3iGIAC5NV", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111645868226341218727\">Alvin Leow</a>"] },
            { photoReference: "AWCwydgqtKf12aOiOScrVu5SE1-qEwEMfpbjEokh8BBVJTx9vgzuwS56Uf3xsioCx0KfCYVti1FZAv8yeVrl1yN1rUPXWCKMSFlWr8wYD1GrBz26STYX-ftJkeiBsuJyYE49fgxoGhT10BPvviWKKKdV1ToJARo_cTviU9vtTx09EiXBz3zTf72O2SaqwFEvMdlmpQeV-qZYweeY0KdN4LWCQ-W9UFIUdGi_RLN8PBYUyrkIZ04y3WaZept8UuLSiJTUMEeEweXT-sbRAryeo4nk7d5vdoHgjkMAEzytkHS1bVWkee9vI5J6wcXspiQZ3rw66p-qbLum_v02X4d6AFG0BvlnEJ_bkPGiaHXX2C0rM02GCNOwFHTy44Qs1NgGuVwtZiJmZ1w_w4ue7tTtZdQZwE_1V--1SkzXvrVkW0Zv0vyiLBz9", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104063381326581991513\">Ocean</a>"] }
        ],
        summary: "삿포로 맥주 역사와 시음 동선을 함께 즐길 수 있는 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["삿포로 맥주 역사와 시음 동선을 함께 즐길 수 있는 명소입니다.", "평점 4.3", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 11:00 ~ 오후 5:30; 화요일: 오전 11:00 ~ 오후 5:30",
        duration: "1~2시간",
        price: "투어·시음별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "9-chōme-1-1 Kita 7 Jōhigashi, Higashi Ward, Sapporo, Hokkaido 065-8633 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.sapporobeer.jp/brewery/s_museum/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1396334665551701963", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%EB%A7%A5%EC%A3%BC%EB%B0%95%EB%AC%BC%EA%B4%80+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "모에레누마 공원": {
        photos: ["/images/sapporo/info/tourSpa/moerenuma-park-sapporo.jpg"],
        placeId: "ChIJo24_lq8vC18RcfiqGApcx1s",
        placePhotos: [
            { photoReference: "AWCwydjrvu1bIPIOk6VlDiYnw72yxsudqmsig6j9GgcECCmBL4WlPt3U72dwVozaPanwUDezy0pzbZ2O8abm2hA51auOBAf1ChygU50Y4jPXfxpRIiMIc3ufNtpkAke2tCg9Sz4ie_mTd81LDTiey4GUeTtQwdolxprEXeRf7V7B6pKC629JHQXi18RiCx5H6fkfvtrAw_DwzQDwJuuC8SEwhHA2p9eYx81gk_8xVK_gCvEPeWkLxF_ZRJPMiHbUuKkNEVWvGc0fcq6Mogzx5ytj3kxbWOUn4-iP3z8R5qxGLo9MhyrKE8vr_lmmYtPJmVvexJPH3XrpgdOKTdaV7ifBwEwSOWXp-uQnkauPm9Q1QDKT7UR8GfwwwaLi709QnPIN8B_0j7PhqkGeB3smXEPCXeYD36dodq0AaluamvrJmt_k74DBc7hZZUho3C0BOeOM", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108567464368793822204\">Hyo-Seok KO</a>"] },
            { photoReference: "AWCwydjHflPGyX74RNGBgnl-ASqYx0d-pxzhMf0ZX0-NA4qafITVtlT38bV3UgSbb46VvOoX8cXusXNWobzqrI0h7CN3T_nQdAIUOsdatuQjMgLgGyiiBhpDc3WoBIkfNY_gJfhaoOq4NMoF7A7P9tQxLX42lqtDkLjAIfhM6Vr8pEGa_RpDI_lFkd2BLaBJtqfSrphbp5kwjmjn4HKtp46-77VYMRcXYCdMv44KeM-kk6W3VdwBtgsa_G9J4YRHVySEzs3EGCUmzLSLiuLXmSI_r7Dya3O5XViSgY72I34XvAVzFBIuTc34EaZa2yvPiPfS1V2GkE-rUNinw3pnERyuM22zHSOyt_f3vk8rDQy6WhNb-Kf4STtQ29eUgWtMYXsfrwnf6UvI1CmHmylTrjfQl2ugajZMF-vsw-U2S1tcRMo", width: 4128, height: 3096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109598559587561824209\">綾toshi</a>"] },
            { photoReference: "AWCwydjEGqqCBrusZUsEsvefX-jXeNZ9z68hcBei_3LHXbhcP1vNaM922OALuRK53uHe0R_OA_k5rT7TRXWX2ykgAXH-0To3sZ6l6Xwa_sI827upyW5YEtxVt9pGQzCT_PxlPsQhpj-r1ZlKdEuSqhPfkmkhf5sn6wDrCvMsP4v4IQfG47Z_MM9Zuq19Drl_lVBa-83bJ2LE6FQmALR_8sFUOx3f5HR9lu9FMrkAaeO7ZS__y_Scn1veMt2J9qGudixseSwis_mH0JN4zeBf7XDwKb53ri6gfb7ygTr9xJk_5hP898eJJn5wOA_Hst9XEtD5q4r7BD3JrP5zcgx7JHSm-HvNrXjrZRmM-tLOhuwflExzqbEIcdSDP5u0-Zl0RNIsRCtv8BpNRRrjCA6CCD1v9AmNnfYPUNLKKqzeJrrG57--AQyO", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112417052670659673658\">藤田佳宏</a>"] },
            { photoReference: "AWCwydj7A_l7-uJdAdtbSoVJBxv5CPHhb6Ot6AEwWlj-6135B2tMxWnrgw7sjuse4zW8gqPHNeeIY3K3IOzJAzY0TK6MTd9v342DUzMiGqSKWNXTcsz4k3SM5Iil4KvhcQtOHytE6hBvxLsjQR-iO6aN-mQt4XgrBy80rgaNYT3wCRoYqNah8vUB4zC-AEwpdyNHV_qLw0SmMH-gNEh1beLUEx1mEL54ChG5YNBNBhq4aPOOnBFMHnrsRMLO5PO5ydlycAd3hijPscog3HG7Jgj0FawzQ0GLPtufY2kbD3p3zA0J1lANG_XY8mopkP9i1-X-AqSQiWp03ntKolYr5QgeuBHqwC-5WzQSWUFhBHsm0lQ7lJae4Vyybqt4vICYsrlm4yHxuGwJ1dNIROoD_QjafL6J5yITjCEdcgb79aaDMxkyGQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112176801597717745028\">Victor D. Lee</a>"] },
            { photoReference: "AWCwydiwMra9p1CFZthL3iBFqU885oawwinw3sCDHGhBirnLpRKLj9qQgiO3XZtqp_csF9QNA7SJnu2eri9CyxNixCcMj9qDzVW0U8mUvHr3TViNcUP3hkc4ymamLh4grD9HBXGrSOwyrzKJ-OpEDmgT78PAhccITfX6o7UjArKSnEluaZZB-FX-rrAKLam1U5vhxBUSPYcDhWCXwt6ugXZDneB8RNqEb9f2ukZkyEKOuRHr7-kwMVGF5WBGBbCWr7XSZJkxQSQqPkGyYMVllL2zaHdTbMZMggLDIs9rt5ShI4t4J0KiPCcFN3ZjQzMBs1WaT8bgwJUZs0vXl4TYEr1wLNnFS5C0MVyw5XxtRIUkSMDtTSoxBm9h9OIXIW_DdZkcOEQidYRaW4es43XwHTsgsSzATIAxNbgmplNpdoDGsZCv9zX2Ju6HXnvXyEwTNRIP", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101448979341732216121\">TAR TUNG</a>"] }
        ],
        summary: "이사무 노구치가 설계한 넓은 예술 공원으로 사진 동선이 좋습니다.",
        updatedAt: "2026-07-13",
        highlights: ["이사무 노구치가 설계한 넓은 예술 공원으로 사진 동선이 좋습니다.", "평점 4.4", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 7:00 ~ 오후 10:00; 화요일: 오전 7:00 ~ 오후 10:00",
        duration: "2~3시간",
        price: "무료 구역 중심",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1-1 Moerenumakōen, Higashi Ward, Sapporo, Hokkaido 007-0011 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://moerenumapark.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6613355776250148977", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%EC%97%90%EB%A0%88%EB%88%84%EB%A7%88+%EA%B3%B5%EC%9B%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "조잔케이 온천": {
        photos: ["/images/sapporo/info/tourSpa/jozankei-onsen-sapporo.jpg"],
        placeId: "ChIJcSObAyPSCl8RCQJvls9kVVU",
        placePhotos: [
            { photoReference: "AWCwydhyHs4OmTV4uyhtCvZG9S9MgJjPZSvR3tCdyYV4V33fdK7jXKpaQKVHLnB0pNNvLZW9DujqKdoyCc5ku9VCn3oKxnj8-qizLPaDD1-LXP_hA13c8e6j0zSruU2xPWcVPIiDy66EKyc5bxBJXvrmwjDCTihrccuPJvq__4w4IVPVHpT_kSxG3G5Sab4igB2sDUyV3JkiQM1rmCK69efyNo4FhFVaJDR8fnWGRvVtAH6cp3tKi-cek50_fN0pR7Q7pBrpRnGVjcn7fOlHcUr8Ru26RZPn62mb7pqWCYV1HSJ1QZMu739lmP8_0Bd4OthF6hP0K8opk3gQKRB82H0jrTD_8p0WbS8fINHU1BKyUk1PDTY-XQ-eTHL8b9ZCSghOaAqGFk5mG1HPTb3DOoYkvD6dW2lDp-4xAx8TZp8Y7iU5fQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103043234662999453486\">北海道観光</a>"] },
            { photoReference: "AWCwydg2n1yLiHO3icAXLbx-D4CsqrE2frJ-shiWa6GGv6UAk9PqloDh2IEh3Fc5wh2_Cs0CevCx1ObFp2CBNWjwfl0j-cbsAxxReEYLmzXeeBt1D_I3dUNUQs1FmHtOGb41xg_q1b1AXOnp4Slq_KkB5o4BbzW6HmLHPr0Mw2q7eCZC3HXMzkpVlTwpH1_pvaLjnnrctbUbQ2u2sVaUz9hZdcn5ZzXFGfzsiJCXP1A71DtQCgRl1PERIsDv9-lLaoL9Ivsd_hCnL-etEBySvZE1YUJbKzKkLeiRReJUL9x62Zeus7OTvTlJiUr91JD49-qaOoo_Xk766CRe8bOIlOPv5Qfu3fY41R2_Zhdd16y4UrBy_h4-nI4ryf549oWeUcAWPTGX0CgOzWuYASD8r82CrFNIpzHVcb5yhpj-edTLrR4wQFte", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100976341256355686847\">こやさん（コヤさん）</a>"] },
            { photoReference: "AWCwydiZoV6GRdWHHRdGmjHoagN_YrviCcPSEoeNzOJVLF_4RgbJZVjGLICuQfEQBVF2l0-oOIziWYaDF2dP2d_ary2kJOT7vDB3vgzNzSk49H5P1nSg1toes6Xwr_iLxpGZhoak-IHFxW9w6e4wIp9XteqnUhHhxB7myA0o0eyCjIzs-AvKt03qB5Owbl_pY3qfhoI58UUu8PjDvUM9ssV1cawDa6wbDZrziDB7pnDQgWpbgV-znleYOfb3Rkb9eoKUywginwoc3NdCqEWBstMi5qdKl_yCAYqo96WxUEFd9jim96p6-G4TNEGAWpUEV9ZC17PURz78-LkLM1GMvvnstnpErcFCjcq5tJMZddxqSZ6EwtN3GpdDm1N8oHf4MHrtt6oGWRnVSdcCDPwFv0FFR5wUEHKo2h8fS9ikL0e-Wk4", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100413502138820886038\">おみ</a>"] },
            { photoReference: "AWCwydj4AEGz8K2IWf2egqekHHlVf_6l1EhYjLssUwUCNthTmjXx1Y6We-XlYwokjDqbVR6V3HehCLBnXPDE5kw3KrsMl5ykkyj2anLrY7P4iIvUT6otOWoVaoc1CthFUa2jt5mbEYMB3YOkWgWA7yBver-oi9tSdMV7vhKjwRhBY5FuBug42PDN_2bz1cU9OZ36YDMfhLHMxE8HAk5yOlbU-pxCU3Kef0eGM-MPoOJlX2uzO_2Ry8mhfspP_CraFRYaxETLZOM8zrhFmuZp3-iLSLF1T6a8qJZzCrqdH0KA9nENWUWilYsKjTG4D7lcgB8g9c-XhHSDv4l0QnLxNJeVIc0F-GPK6hAY9BG4AqgwX2YmouB6eLBrJlyr0zeklQw-eS353ozO7RUjOoVSdntN31Meitex30nKOM2Irc9pdqYEBg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103043234662999453486\">北海道観光</a>"] },
            { photoReference: "AWCwydjubUsVLgmdS7ZZmBRe35Nm1af33xgtVAzhQ1fkxDZ09ADP6nEILyEPp_hY5OY5cIpZtlSFL0kilS1D3mb1kYvyczPehkdcHBm264tJfYai4y1CK-P67VCI_fGNeKYRBgxoNLj2FRtTT26X3GwBhB8s45EJEI6Qzftc7GWMAFw4b4iyuxbFrdj38wsUCk9HAP-aQ_EYNkdlOy7GbEvvNyKb1DPKqS0H-1g0sMZTYsKR8yZMteLe57jsGHoSMiL11EnT2xeUa-LwDcjxxX5y1QwFbBKEJVU1vtc9AUVPaKfCxVFzMiIKrgZGONwxYqtoc0vk_f7RGH34Rvg2Sf96-nA3mvNFAeBz7xMLnz9_acIjML13nwmp1ewH6z57gVOMs740vOYLXH5jEY2aiuRj0_4s_uh1hyRCiKvZpvt-1arr7-M0", width: 2083, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103043234662999453486\">北海道観光</a>"] }
        ],
        summary: "삿포로 근교 온천 마을로 당일치기 휴식 코스로 좋습니다.",
        updatedAt: "2026-07-13",
        highlights: ["삿포로 근교 온천 마을로 당일치기 휴식 코스로 좋습니다.", "평점 None", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "반나절",
        price: "시설별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Jozankei Onsen, Minami Ward, Sapporo, Hokkaido, 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6148931708989145609", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A1%B0%EC%9E%94%EC%BC%80%EC%9D%B4+%EC%98%A8%EC%B2%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "홋카이도 개척촌": {
        photos: ["/images/sapporo/info/tourSpa/historical-village-of-hokkaido-sapporo.png"],
        placeId: "ChIJgeMaZessC18RlqucqXBeoKo",
        placePhotos: [
            { photoReference: "AWCwydg8tz-lBA5BfnY20yxZoqJsUGuBACP8x8i8fjJLkwmw9-CqE555gTvmo6Gwiw3dpGWDp4tqybdDBUgl3sVWLa4_yBF1mvOuT5sFOhKOrfV56hSpeyttqU4u2AfQTdGKAbrVwtd1couJsyOSsKpijJ-oKENM7w2aVl6OgqQseAYt4D67uD23SitkG44yC2b9Xvw7OoTkSf69OgvHXOl9MW3WDdLekvf4eqErDhLV4SjZCgBLtlwhSEN-RMouV8IznwGOjXjIBGp-441z1FULOyBJhVzTvqVwBW_IbN4kDoHMQJu2strkGsAZ1FfOJkgbSqw0B4EW2sVYP4AphNtvYPK1X6tR0TvaTzH8deAm9qyYS1ZtI1bvPhXEScilm4mk3Ke5YqH7BI4G-u4N0-FRsbWio2oTY2CzkmFIkY9ywjLUzuYst71AX5YTwuYHNzXj", width: 1948, height: 1096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118252593047081732037\">野外博物館 北海道開拓の村</a>"] },
            { photoReference: "AWCwydgTZ91eZnCG2zfqiWQpqQNjSL-jx1NnMlnUXygYpmEDbxwbk-FM7gnwsoT3Nu4OTOZS1efaUtuDENmKKBKoMttkzhkysu2jd4C_UPo6LeVj0K6ehr1HtIhgauS6awZ7Bsh7jsl5jwjOh71lt9GiyGNOV6lleAf0L0Nrbth6_fYU3JeigNbbkCRfV9EGQBCXFfhmFN2ZvywINa18HKpRN7RfWhYVwujWWjStUOgXnlYO_YB7iY_wUoELIQ5XXnQ5tdsu1SPjUHoVDwb1U_XZEIYCJ04XS6f48ssTbApDjnoEyaoxdFkekYTPwDqzZbsfhM4r1hkquZrNIeb9DJSrM-WMJwLmXZg4by7GjbiANTItketluzUCON4dTnlRDRBH8RlyVgpiDJ964ni00fnqmY0YHD-F3BWPs5Ifd9c92b8mlpSz", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107238563071384837922\">y S</a>"] },
            { photoReference: "AWCwydjzm2Su7sDTmzJ3fF6jpCdX8DStWCrUpUfefw8-KRzAm6-KtqDZUlqtzBI4v6BHihRc_SnERDvXGmvcKjrr6qgp9Ozu6Tc34fCiSZTzWt2flkMOJ6AZYLLPkAkfaHPAZfcM3ezzR66Z7VKRjbP95xRkEdnJkm3RVbV2cncz6j02Owv1v6LpeJhMwa6t4cj45lH30hE-jJNsahb9lgo9epYZapzrn6Lu8jblf-mmtkvXkr-ph6WHR8BZFlgPoe5ZBSmWi8XODNGkvieUNBZB96DRRplPaFbCmQ4668GuRMWejagoZz_4NoGIZjG03yXe-ElhO8VU936NBLCc-3h3f9jXowoLuQX246l-YNA2j0Ke3l0U3QjLbRgSD7FYIuEMlOtHj2ChG3kAG06ZdXd2yz8OvK4-c6ObMmG1jT17Pug", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102422058059480572674\">Alexi</a>"] },
            { photoReference: "AWCwydhHZRF5MR42nHE7dCXn4-OvTiLkofyvbU6vMRLRF4Xbddx6ByXqef9xOJwoQS6k6XKspxaUzAxn9NqP6y110XFx-C9oHz5XBtSqS-zRGjFal7cSF88769qRhv7kRJTFNzK34Eh5j-kSOStM-keCx5pNhK8mWaDkjnOJ_DawYyp_kjeNqOMPQ1wB8UeWpGvT6Mg6mGNF42HFfexYZQe-U9jQzgf9_tDACHUyjGBsie6mEcy8xKhxomywsyeex40Q5QGrzOlU3woanWpzUmWCaw37u3mvnZuEKODrla7-Dym2KSu4FUHzB4j1emoK-iB4nPHaznLEH6W0--_oSyJGg6UvSGU44diD68gBi0-UYRE6iiiPjvg3etGVH_yYbuMLUf2NS-JzdFKnVt50m-5_JQmx90a3Y8vsARBo2ART2wlMp5w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100367787558053016299\">Yoshiyuki Ogawa</a>"] },
            { photoReference: "AWCwydgNwOZ0BIq0eJy-WD5SsVnowQCmZHl_TZxoVgG5lfOeLwnTHWNocCur0iIoQyjCe8AkAl-rl-6PxuhRnFd304crbnVIqqfYRJV8lyCUpdpw555Qeo_yz2u36Sq3x8jYh_maQ8jlFFnPlrDnOh-NsTutGqze-od5ro9ZYzHN3Q02_PCD0VK9-5HlHjzNS4Aw_JmV7y0iAuAn9HM231HVA-WYXHAOmn2snwaFrdPuBc0249-K2dVRzN6jKCWslVdGcFJzxxlJfsh0zHx61P8TXYDqQtqunHoubfurN0pGfojPo7Y_94fXobjJWbLgEFYwT_giw9ljKoad82g_CJPSEso4PqBugknVc7JfWdNkJvlSLZo6_ta7O5uSR6Da8pXzuqE3aGpKerRr_5Fj-I1xpFvs7OGr0Xx9Y_Jn9QkreVkyusiC", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116532822995374026217\">hiro I</a>"] }
        ],
        summary: "홋카이도 개척 시대 건축과 생활상을 볼 수 있는 야외 박물관입니다.",
        updatedAt: "2026-07-13",
        highlights: ["홋카이도 개척 시대 건축과 생활상을 볼 수 있는 야외 박물관입니다.", "평점 4.4", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 4:30; 화요일: 오전 9:00 ~ 오후 4:30",
        duration: "2~3시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Konopporo-50-1 Atsubetsuchō, Atsubetsu Ward, Sapporo, Hokkaido 004-0006 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.kaitaku.or.jp/?utm_source=GBP&utm_medium=GBP&utm_term=GBP&utm_content=GBP&utm_campaign=GBP", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12294930820696419222", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%8B%EC%B9%B4%EC%9D%B4%EB%8F%84+%EA%B0%9C%EC%B2%99%EC%B4%8C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오타루 운하": {
        photos: ["/images/sapporo/info/tourSpa/otaru-canal.jpg"],
        placeId: "ChIJ0UxVV2ThCl8RIZdpda0H7gQ",
        placePhotos: [
            { photoReference: "AWCwydjM2OkJQU75-Qz2H5pGKftCQ4HB2J3-RDejpF-_vo3TcTI51TRSsgIbbkuhhrEnI2dDe0rzk6rvr0cboZUu_1Q8nV3IsLMQDae9X7QBOm-qnl_7utrC1WMHmC6C_fdvsw7i_Oqo56blDrHg_FHh89TKgF2hBMTjLRE_p2q57uqKChimeMFjGC4Q6tFVCEuUfMO00tJZSy3OB1zfjNFUbktDlcINpIa8Bd9wPZIpqZnmtzExgrHyXiPms0iM6JbbpqVgKzouuQyMekoWQ5G8H0mpwZyj0pHaNA1BShP0n1huv_6nht0dHCn78LXjfOIe1d0hlVvHvHXDGI0XvrKMyib349yo4aW1aQjo70lHx7qPwXxCMtEnTBNo_k78KldoY4C04jlWpGt7rmybmC3gtskk7A3MJkjSBIpWys0mFm2pteFf", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110192953860290877064\">carl hong</a>"] },
            { photoReference: "AWCwydiaIqJW3VYkQvsLYdyZeCd-PuEcc9AO-F41Wfr3hCvy3MxVYzLLpFF32m2vs_E8aE2UmTvX1cTOnevOKFQz9GJ3LOn3Nc9IKWnK9Wf4ZHB0uDH4tmaTRTECxHAhWTt4w-49iUwH2xBiSom42dv7RKu_PP2oP1GPkXrasVH84kzEHZEXCYG9itCFkqI3pMF1a0vLuaw-q7Ippk0FwpmKtPbYVpXxp5lC19rf4DJSXXJJSHfn_3ZUpP440uaGjh261CN70XRjGlOQSa9USSioGOykJMiusgyci_u80xOcDJQ9iFpKRuhW7ZMam_qTrgK8eNcW8rIMpUYfWZS9UVZUyMN3LOoMZaHAGsSPxGEM3Njhi2mG_BsGQ5VdyWIsF26YSaZBIMxMspMeHf8yvm8iO7r2Lgd6ZzMLdHxeOqxXF59kYw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103452881863473505479\">葉湛勁</a>"] },
            { photoReference: "AWCwydjlUJOHZVPgXMXLzhXm33_LGLzEfpcbpF9aCg_AKBrX1sS7iODuZDsuqseKs4hwwnSTbRZb6h1v5I4KxPO3YRyqSCrPfOW1-uW3SOvujkPMyxxcDaTKqLqEtZ12mptGdJWMwAHNMz1yh27kVwHqMNEtVg6-QjHDHXS6Ni-M3K9LLTlvetCCta_Qo-f607ZVPu5OwZ3fw5Um4Rz24DwKIeg06zHlhCkuXE0-G2L-Zrm60LrCT8VdvOJ0StuPXGB7WzdatYwD4fsaKyYO0psQeL6TPj5aaGdieWxUr17DfCELVthBnGExDBQsDA5xx0xe8izOnxXDmRJ8xvOOQLiqUVXNeZqKyyVmm7I2aAp1_T201sGPgLcH18puKr3S12NF_Hz8y-5lQZr8v4vWC_AP9IT6jALMn52pbIveBIRQYsxXOZBX", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110192953860290877064\">carl hong</a>"] },
            { photoReference: "AWCwydgBYovqLLkdwACcvOIX-sIdu2sWajd3fl3Z5EdNhmGPUzxfxIHGEygAlves8_Sk3aY6kUJX-48KyQn4x8HD0UWqZ2h0RD8zKa0k2NDwPQnmUJBh_BE6m5UwkKWYskk3CNtbxtgMbXtx_hsa3BAJu9OqpR_ToZcZ-h6p2M0xpml27O8KvRPHG4S0-To1H23PgoKw5dBdUyuEl1OP_4G2-MLaieTz5zEGOXbATzU4q_g1WT1sP3_ksK6p6Gpym_bouVPkLZwp9CW7ZkbFmqnsG5_Smk0Vmd4LVozbTvhPYCVXNDADrnnP8l2efOGGY_FiXRNOtgLrSATbA9zBq1AfZbdhI2YX9X4md9SGDAL2I4Npe8jwtLZoz5UHisEbERjFbtpcL4x2Sn83G8fzCGq-o_oJI_d9UzrkWbhNfZlh0k_ScnvKyb8tgOIBc8GEFAq3", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103386717895921645029\">令.</a>"] },
            { photoReference: "AWCwydjg3ec3-paRDSE5Y4gkg6dw6Fn4mr3bvi52WEkeye4I3kDUdmvU9U5PlfzIKrLPzLIXaXLKZeH2WhZrwm3wUI_Chw7D7codVLLwm2lYKjEa7fucVaHYC5hkRZUMFyzpWXY2vHiD-wHvoVtw2mUcG-8nCySedYNjeNBoBf3ijRrXUlc7hZDSdOw9LQBXeWcxKsik1gOBY2jLMGlKpNd15qKXGognUEj14afABJIZq-WYrdiG-6rAWczqfCG93LluF4_SwTQfmLrfAQ9eshj7xqpsoAvLGTJjM4XDb8yhb1v908DN6j9N2otyKQtuLaQJAr5dcdT3o-PvdnDsOJpljZ586G0wRndG7tMCye0v8WU46XBaYbkNlo2CzkItE4X7IUfjFDVI-sXK43rr79A9MVUyRtLSyst9R2QWuLH8ws68FjFrJYN2s6kkeBUsfg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104187896205003657251\">Choi Seongmin</a>"] }
        ],
        summary: "낭만적인 야경과 옛 항구 도시의 정취를 느낄 수 있는 산책 코스",
        updatedAt: "2026-07-23",
        highlights: ["가스등이 켜지는 환상적인 야경", "역사적인 붉은 벽돌 창고군", "운하를 따라 이어지는 로맨틱한 산책로"],
        tips: ["해질녘과 야경 시간대 방문을 추천합니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "방문 전 운영·입장 정보를 확인하세요" },
        access: { area: "5 Minatomachi, Otaru, Hokkaido 047-0007 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://www.city.otaru.lg.jp/docs/2020100900367/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=355229862189438753", type: "guide", description: "지도에서 위치 보기" }]
    },
    "비에이 후라노 투어": {
        photos: ["/images/sapporo/info/tourSpa/biei-furano-tour.jpg"],
        placeId: "ChIJdzcW1F2zDF8Rkm1ghwLPbbc",
        placePhotos: [
            { photoReference: "AWCwydidFrsC0mUM-LLD2zqBmPrr3Gh21V-DkKc6E_TPV4ueRA4BfSSxpAp7IZgmY-JyCo9rNyBC5_PpRn8GED7du-A5_QFLwfIh4AkZosqrbpmptCnohFjHxLnwqYcQZJ_7a0hEPsN0WWTIv1ca0K5RZtO7hgQOCfDylXAxRSdCJrXFenH6_D4sljqozSYxto7iNNWd6P8-AMxQXivxYyy_psJxYnDRiRJUBBcZnayzK3vx_rSS_gq7tftQ54LXKnZb3lzfbilYlI6o76VQRoDkSuiv0u6N-UxQzzW08Tw-5BpeMLdayCbmkMt2q-OlhZMxoS0MnRVQ1R7zr0QTfA42EAuYsMKG9Oo6c1Urn3xzoBxXG53QkeyKmJQq5Gr2Jg094WiucTESg8KyEeGkUbDeWZe23nk2GbuXEehCq74p4UM", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107160577709923375773\">t yamasita</a>"] },
            { photoReference: "AWCwydhji5O1kRbPIYRQnxt86XzF7Kf0H6nlseqymVT6IlIIjJsCcWpvTO0khq8FIeiwdrZBMpvAgfhc98VYp41mdclygEmVEzeGS-WRSXjEs5aicw-KcDuIIuv1Zp3NAVdbTkeE-JCCpZoTz9_iFwlyb5n7UQ4ulqwsc-lrCd7VI6zQY70vBWRHSCROLaxQSTDcx0xOd9Y21fQuZsbD_zEcilfrf86o6rB3ugA4ZqV2BGAD7rb7xNkokXF6Tlqd1fEdYJs_D_LzsZue6NLAv65odNsc9WbnF2h4SkvBMQqcdjag9yCNJTlYOvUA575ArIDzZz6vxTLlNifhpiMLDoMnknnVEK2HO2xUGlwEXMcjrXnNp7Hn20VtyL8ov7UaOXojWy73XYjC-IIKjQ-HoJXsfaF2pTs5EwymYH2suDEDXp2CwQBF", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114590532810383530473\">仙波二郎</a>"] },
            { photoReference: "AWCwydhMjkl6R-vfjLQaSF3W6VS2f-Ioz5QHLh2GrLxJ2UiSHvK-NQqfsxeC4YRDPeAYG2zf2M9MXgfapsQ97B8qEToBWOxxk5Qk0Y8YoaHxEmU9iqX5TABWQEkFS0ol1jeyMSkcG26p-5WBgQZVZnbtjkWD4gVC7-_Afklf9tYWVB18fQizxVHE7JenqBiWAKYColEfOQ2Xc-CjZNK8aiV9U_7C5js8NhG74AS_YuEOpYS-zIBuayjTVlBwZHT-37IGAzIejp0GsWRjKtkdNjfTe-TCZ0sWFRYr6soVhbRa8tUOFiikRQsMD42vhutJYGk_n5_LfMX04CyMtQGKvUWu6eRqdwTlLM1nQ0hipfm7JXy3NS153JmTRRxAZyD8vmPvAv_SOuvoCvdT8kJcWBgIViBqulVSN-xnfz_mpuxDZTB4sb8", width: 3734, height: 2426, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109269841539171542806\">ラズライト</a>"] },
            { photoReference: "AWCwydiliUEtja4V7ZP6DbH0VJRP74YJVurv-vk2UHdvWfZC5mzCjH5KzXdnFKGjqiilxfi2bzj-cDdz-haXoQ8T568BHCW2D4ggSdp71Ou0QzgHinxUlFqCgW_KuAV0Rz9mh9VfN3s7crQYEoJTPUywItUqcfCW--1jRLOakgnkwoIMusqeUTzlhp5EZo9w1eTdqXUPoTlAvxU6wo4q5iIc_cnT65igrL0meMz94nSP8J1DKsQ0SNqIo58cqy8os-6lluFSEM-1cjsPhETZAgPJU1J5Bw98uUeFZ0Nul8yRXeYmoCn4lB3WAydD-lREfAopGFSnpdFc4sg9jSe1V3fa7RkPEK-CJo7xwU9m4KjWsZBssTELkg_G2K2HacEuA3gDBe70pWAxDmcUtmvYo3uY0B6TuKSkwo9IfZathIXG4uM", width: 4032, height: 2645, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104947587647771471793\">陳耀隆</a>"] },
            { photoReference: "AWCwydibXiKcfE-06P2f16UBFOIpbWigq_eWS3QD9x7XIKiCRGJgBgZV7gF38I3Yi-V8o-gaaMqfpTpIoQMNsPIhWjjw-Fc-YQozZUsWmIX8Rapf5sBtf84fGYoGi9GQQ-PpgKG1lbF_Yc11AFDtIEHoqeN-KSLr6WbLhVXwDjtbMsJL_E_mBR9KTJaXntdodvBMpwMQKIFz_Lt-GQZbHXujGw-u4KNhvW6OV1XA8XdNNxFrLIZfwtiLkSaW42yR8kqFLOU_2K72Y_dyZ2ypSc0ZeaqnE38gLBRQw8kDV1YqFsDJ5feWa9ocaDJSYfRXJyLoIYsoOjXOuSoLobYlaS4jNYJzwPVD4_Eb5btpdl2iFqFdQpuX4B1eI0R3Dt8I9gMCZnE8h4EF_oujHnwVNP44oaAZeIcxMLnP1GPRqKEv240lFlBl", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102450211961933486172\">李太閒</a>"] }
        ],
        summary: "패치워크 로드라 불리는 아름다운 언덕과 나무들이 펼쳐진 비에이의 상징적인 산책로",
        updatedAt: "2026-07-23",
        highlights: ["계절마다 변하는 다채로운 꽃밭과 농작물 풍경", "세븐다운의 나무, 켄과 메리의 나무 등 유명 포토존", "끝없이 펼쳐지는 완만한 구릉지의 파노라마 뷰"],
        tips: ["렌터카나 일일투어로 동선을 묶으면 이동 부담을 줄일 수 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "하루",
        price: "상품별 상이",
        reservation: { required: true, method: "방문 전 운영·입장 정보를 확인하세요" },
        access: { area: "北海道上川郡美瑛町大久保協生, Asahi, Biei, Kamikawa District, Hokkaido 071-0216 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=15789700945580453148", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=15789700945580453148", type: "guide", description: "지도에서 위치 보기" }]
    },
    "청의 호수": {
        photos: ["/images/sapporo/info/tourSpa/blue-pond-biei.jpg"],
        placeId: "ChIJbyoi3mLMDF8RnndLnx8YzQQ",
        placePhotos: [
            { photoReference: "AWCwydgmdPJYA68EuU0iCZXJxMO5MimTtTqEv4FNhzlx8TVqtFfj2mP8Y7fJz8y8KBdcDUY8gmBY3JbwLIfaVOLK2En_VYM3EY9TKfANYeqdagqHX_hM0Ye1QbjePjbmrZYVzhdpfdDFXugzWqwZrgLJRZjHoYlpN-SffqNi9gkgSZa_NDtS3ExHbf2lzTdSXZLpSZAW6l39Qp5QFzKPGIIi6Vkn0_1OC2Lc3fY8kxHAIaEPP-FChnQoiVpC5Ib_LgzA2wXw0pQvdJotwQckTSq-h_gRWPncY5OZFLPRF5bs2JnlOzfI8vbyqP0HBYwqN3sb9DeucTLeWDSgzLBnzotyuba-rxhKqogtFb8Vf6yzKmbun9hpO0gME94wQZg67IPXLI8wtW7mdlhT71p6RlExfa_1e_d-op0ncM7mUYPfRnm03HTKM4JdPjMwyJAN-X9-", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116597369251996587244\">Richa Jain</a>"] },
            { photoReference: "AWCwydh922espASR1-MeZlIcS3HJqWRWCVftU5qY9d2WcjfQXmmhs44LS-LkAcTjff9ZaKpofBNKv_kzZvmBaOG_QT2xk_D6-w93Qynu7WPchqDL1HVZXGX4PfoRSYKZMhYakLTdo_m7b5bd-psRxPZthI4Yb9BAoiXUxCe3cyWAcRaxEgDTFo79uzyrlzwCKsA0nAU-X3nvuXtraJBRWSfQ5JbC6IGwsvNE7IAyMNcBc2VWO2HjWJiGCqOg9NCSsIx2tvplAKKw7OOjhQsyZyqbvulqQOM9m5dTPnAUh1Bf0AJd42jOKJr8ELr0_gLzdUmZ-0U4XsM4aUsmZLId-MHBiBDhMM3IqmKn-F18DK4jlyZ455HBr-ZiBL1PF9efJa59iJmyT-Hukd1XbmItXFEdnVFT8n7tORwyYqag2mjt1GPAmA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107160577709923375773\">t yamasita</a>"] },
            { photoReference: "AWCwydgvk8M4faNp7avAzicisqQ1sOJuD33dFJGzvhai3Uxk0oxk7PXMywCk1Mnd0sc0A9lt5cj95SSUw5nz2P6YfyPFl3_ur-hQoVAxYrhwxGaqOLc57kJqMfF9PBc464atp037bB82idhDmlI-x7fvvvoLFXp2BhMoHydU8Z18zew8H_PpMR-BMzFQ2mfYYZbMlMOO8oTiRm0GX8oKA4G98lmsImx_8lBu9s7nO4BucOYbz3jkARCjdX5W4ppgSk-K1sQr37XT8ar8OrztL6W6d_ZPsbQlpA8QKd4AmfpCTxfP8hH9rYpdQRK_8pVw3b6xd698SQ-Hpn4eU2CemdW_1ceF-WOg_QayXYTgiC9kTnJ3yVY0dsYT_rr9-AOQWcGt4JhIHrXUEQCrjC7d7YNG8AxMXPk_74QxIMI9ZJAk1YXgaswrF22NfOa56vZvBrhb", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109872716737400708113\">王姿辰</a>"] },
            { photoReference: "AWCwydj6xXTkp7SGT0ca_VaTx2Uc8tnvyJEpHrJefypWOHfKi3S9IjrauuONaDFmo6HM5TrDgsKks_AkHNuXRaka-PyG4GqdcO8SwfcPL1jNYgjIxypexkvqsiMuAy2diBVY_vDdP76j2UAkUhUmTuOQDtj_iSaoMmKmwHIc7TbH4pzkmMNBn6gZ4KTKpiG8kDoahEdVCwrOsNK95qraSy5YnWqlSRWTiqZmyipx7kgLc2veIcQ0jGSEVevtQUeFqJ42E76JuzWiSsG-1vqBWUUnfMm5HjS5AxZOdJpdmCwmCxEALtnHtFJarr3igUULbTnXusV5vieGjy7HZx50RRPZ7c0ZCAPSMo0S1TjrHzmdJxGW4NHTKtKkyO6tfppzfN1wrQRP4cMLBNNIh7yCYdGzQ-ZtdEIYnqDgIm7QA4RPWdog8gW1LSUCbJjujaeDYkzZ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104782447854753633730\">陳柏諺</a>"] },
            { photoReference: "AWCwydgC7bOI6BXt9f7mi6RD41yynvhxpXRLnaIExKTshcsU6PxG3-MWivfabH3qeU89RKydlfcBZTX6MQN7Sb2QNZv3FKHTKJLohMhgbp0t22XdKuzqBdpfLbgBZfh0FNgMkESZUqGlIJWmZuhU-ggO0t2mCAJpA7TJEejMgb75nsbf0cfFop_9QCpMwFwQX8jDS5lsARlaYPLWRkTHLzZZarDQZsFCmTKtjtrdthuzIZESMpFZUF1Yu4gF0mXzhjjAnSmauNuX7WjNsz_a0MkuKP8nbX8pA3SWodjf3b8PFfC3bYlektNwO1vf-UInncxFBoSfJ_-USyHMTTZqmmfJw0tRCApXpYNf2kI_VKFV_39UFWY9SCmVSsIGtL99EX5SbUPxtMfJhhK-17Hof9z2tjbJvjMDzQV4Yx56nVIkxAoJNfa1fwGTgEpJS4oCE30T", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103583760056272089166\">クーパーG</a>"] }
        ],
        summary: "신비로운 푸른 빛을 띠는 비에이의 대표적인 자연 경관",
        updatedAt: "2026-07-23",
        highlights: ["에메랄드빛 투명한 호수 물빛", "물속에 잠긴 신비로운 자작나무 군락", "사계절 변화하는 아름다운 풍경"],
        tips: ["날씨와 계절에 따라 물빛이 달라져 맑은 날 방문을 추천합니다."],
        hours: "월요일: 오전 7:00 ~ 오후 7:00; 화요일: 오전 7:00 ~ 오후 7:00",
        duration: "1시간",
        price: "무료",
        reservation: { required: false, method: "방문 전 운영·입장 정보를 확인하세요" },
        access: { area: "일본 〒071-0235 홋카이도 Kamikawa District, 비에이조 시로가네", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://www.biei-hokkaido.jp/ja/sightseeing/shirogane-blue-pond/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=345959270472972190", type: "guide", description: "지도에서 위치 보기" }]
    },
    "이모션 삿포로": {
        photos: [],
        placeId: "ChIJ25VewAEpC18RoKUMvJrPyUA",
        placePhotos: [
            { photoReference: "AWCwydilDdCaxN9gX0D8R7nm5KzYeQXJARRaf6EvXJcUaXWQx1ei3EaOlKlffqweXqqnkhKtJaBj27Iz1P-ib7cHIj7CSc603LwW2xy5dvBsAL0yBrrh3ABjoBcPy-LpVKj8rZaiGQTqx6Bz6R3OAxVKvJgQa5ruLEffGSXw13BUN-nMePm3kXLUKKHitaVhsomOxXEFCN9KA0MwK0SLzJ5EXpg_OeLl1JX7LP5uzZyODuc8ss7pMq6fMuOaIsbGWUZG2inEULN1Pmv7TM5T6eqeQX-bbKXATBI94OzeDnMI6eWZIt-E5YWfJThJUDZWxThpvUpgdZV9mY29cFt9st_0qj4tHyF2tevTJ-PGFJ5RXy9U0e9eNZVvHLf66-FaA7L_1olpLn54unsKy4EcQHOZEo8M397ikxzYu9aPlGhnQy8Izg", width: 4200, height: 2362, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112797477519146795459\">E-Motion Sapporo</a>"] },
            { photoReference: "AWCwydilarMvl0oTiwGZwQRO1FHRyAwlHTVgVq1HsI2at1lPveMidwLBxtblE8I0Vc1MKZos_uDMls8h6rFlb6rwkx-KI8jUyPZ4y0-l-1o64ubgZ2RJx71ImYGGTlXAphGGX0w1pEv2vRrwwJSnKSleP9X9H8pQCGnU0SiL_Vuqf9A1AWueOSIDFIpVFPbMWlk7WQh9az0NUFeS72WfH-MfZswPuoUCPYDLSc3X1cG0hw_Ui9H-tzW0GJTr7wWtLQh4hLplEiANBbzJRZzrJcrYj4GwwG4HUxAjODaZa8aj8Q3V81Xp4BHgKw20M-Zj9fHRY-nIFWB4-Q8rdbWs7EDjZPJhLGwX_XUl-zzQL-WB8GIcfasmzXtoFGkOX_TuHMo7Dbb7wwN5FypUVY7Ig5eSVkqJf0AZIbpFuzNwy3R-uUL9lPvzwryu3yy2isxMgJ23", width: 2016, height: 1134, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112797477519146795459\">E-Motion Sapporo</a>"] },
            { photoReference: "AWCwydgK14sLrGud5_kA7j9YrslJChg-B_aBeEcDOMJq-EgaNYDK5zIgk7SRVFZUYO4NhP7yCrQ6S7OK7Q3g6nkhWRUBlQ050fwZceWpHVTHCmAmEu98vGluPG3-b-62hS7y6I5MAoFrHXTu3wCTRps2UeE8ZIVyzxotLZjqYznLC8-TTZm7Kq4yZ_9n643w-HZmRhZ8tXHqqedoyfUPs6xXqlug7tXgJy61oSiTSaqnFu3Tc5vhAaovl3grDYxndYQxrSwfWNhUg1yFWg2bVHqBe00IuUIb9T0oTUQybhXm1SZiuWxYo1hVjwHf2_wceYuAKOjO3jZxV-JqdT6U5hhI__fwe6n4-uhTh9yvVZP2AY8tVm_o1A2skkwCGUSR-WD9G3p_eUURYdHVkiX1WZTNjkYbbiYsEM_rpKjjcsvPIODNr1QZ", width: 1000, height: 750, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112797477519146795459\">E-Motion Sapporo</a>"] },
            { photoReference: "AWCwydjEFyZ1-7ES2mR6vfkYh6qEdNMC4m7yIWfTCVloMPtXM_Ujwvhvfu_14MT1WIumYw6628VwLZmwoszFHjPTBv96hykEs-MSlRo_BszHvGUxQ2q6OjU8nM7mOBehVmEwML8fwdKmNb5BIvk7hTTej8C6wA_dBiiqScINOCkcfkbM9BiVP7pi_SBZxBy0765zkNZJIWpD4Uml4kg45HxfdacxXZyX4rc7F8bxxoo37svb3RNM-15jNOOZhntfO69B7siidKIhTQNsmV9zoNauIFwBPoBItQ0EE6N1DzYZUnVarLkbzq9dvRwqhFyvmP1q-tyHMZKZar4kDKncv9elAKLG7MvAUafEvk1AC6FuH-nub288RI4QbjodRWgNJE4O3z8cPf2vWG9wStSq9eGCWSWVc7S_OEwlOoGtYS-PVhSJXJrN", width: 1440, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112797477519146795459\">E-Motion Sapporo</a>"] },
            { photoReference: "AWCwydgwehOJbALTRZD4L4HA7jPLxXja_ouZk5iNc4xbILNG_b9MAQDCEnPirA5sNiqOIawehQzMdbktwgAeHoL0f3ErUTRi3ZqAdvSfHQ21e_ZcgfzhAIM4PpZGVtLrl4kjF9Hhp_mF7ZKxg5YX5QyA48Of0vmhE0gb125DvSnaTbQsiEdcHSOOz0z58pGHmsgUJhuL52BqcIJu69gieM1jGtMV3uLBZBNnT_IpxI50TWk1BVqxgjpXQ7AXDkJCYLsHpiwUhdGYpo-Fslx2ZAJm0ByxKPQk1m9mnBS7njLh0miPUdXFFPr_iRud7B8_ed3lJjUPojZBsSnvXPR0y5UM8FwZDl1X2a3_9rU08EctO7YZ0MqFtN_ck8nhYkDc_LkoPVVQIDEqayowI6H0r2KO5Qp7fsU2Ov697mvED58dmoWYOw", width: 4800, height: 3159, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112797477519146795459\">E-Motion Sapporo</a>"] }
        ],
        summary: "친절한 서비스와 합리적인 가격의 자전거 대여점",
        updatedAt: "2026-08-16",
        highlights: ["훌륭한 자전거 상태", "친절한 고객 서비스"],
        tips: ["현금 결제를 권장합니다"],
        hours: "월요일: 휴무일; 화요일: 오전 10:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒060-0062 Hokkaido, Sapporo, Chuo Ward, Minami 2 Jōnishi, 7-chōme−8−２ 1F", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.e-motion.group/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4668490752233088416", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=E-Motion+Sapporo+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스카이 리조트 스파 풀라우 불란": {
        photos: [],
        placeId: "ChIJ24w9wnQpC18RvF9obaMMMD4",
        placePhotos: [
            { photoReference: "AWCwydhRCRU4KXeDrQFb3EWr7PVZZmRLoS0bzZdHf_O0y8jW2bKmqy2EOzciXl8ECcmN3J60ihIynwnhnYdtyYzRYsZ9EOcjQIb84gKnKJ6TJl-FNueJJjuBRlZg8U9xRvpjZUlO3HiB3IsXJfSmrkpLbdpmO9u4OZbbm-lCTrFWx-Lyd-GeobEbo57mKOipHC1pChDbeNTtiCU99i68P6V1Ek5jK-Tj6gmRDUHmPTasDVXXm2SowA2B_KFUL3XEPEukypMnCUDT9IJ_ihF2Hryp0nfWflXosGKxkH33wkRO_hi-R-L3kI3ILt9M0Wqvcgc_yMesvs0-cdpEaxLd3aOVWVgTGteLfrD-mE0JpJpdh_0wDjnK9q8umdO5I0Xzzgq1ewjFO1LRYng2xVsYMPKyCEQkDeFuQoL51fAab-Snd30CEQ", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103895845534035233262\">スカイリゾートスパ「プラウブラン」／JRタワーホテル日航札幌</a>"] },
            { photoReference: "AWCwydhIhF_NycYBsyifjZRBVL9pN8zz05g4x6rxay0eDib1dBsZVi1rpsaEovQzD9DTDLx90smkz2VPc5cMNvp3kdUfwjlW1mRyidUJIQ6Dkcj-o6WLQAjUeOwYvVq7Rz40DiOrJ4QkwRJ0zWFNzWLgkfjc2pW5atmcryvqFS69VAdfbW5G9MZXAvkeFPAvYqwFSl4UhFfSeMmAJhZUO72cAwJYikJkmT8E0skErNNubxMoIQHrgAdpHwHB5R2YTRtWjETeiXjvYSM0Pd3lCx9sMyS-qhh8YwJ7wJV6cPlynpi6aS8oH8n82ikc3-3iQP_2pyYYIH_JRxUSuPeDqiI9gdp3x2En1NGxblXIHq18q5sTPA_qBzply00-P8f58iSKt4_p84YdnTjj_qgau-QHw4zTzhSMFqBEyhE51u-Jdto", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108708981522491688842\">James Tanaka</a>"] },
            { photoReference: "AWCwydgp38iQvKXAC22yA4oZTPR4K-UN4y8zsqKgSOa9MnBJcrHkIgSQwc3TozNwyy0zMv8RIRGEFUasSMQUsrRF7ymHPSr9F1I7XVwknGwcwiQvfkHn_ztLWh-6wsm4repU7ipDTDsQajkzaVq4uV_Nm0ys72RdZ9Y6uCW8arMQrCd0nb0V1FF57l43uzb2Rzl2Z0wkV2bh1rjxoiKe7J28bfBHoakdJ9-Z0pHFaJA_rm6Q0tcuz9sZFOp9NNWPD44fddhxnBvE2bAM6RxcMJnRO4177O3FRhKNREQ_lM6Sy69onMbZ2tiyICDGDUBdVWnlazzod4y_FDAk5bEBmVViRSyzyoUrahxar5kea_j3ccR0WnX7UScfUgSZdCO65OEyg6RcRZ0Kepdk1BM_OKkXh4yzxd4TIFLqdIPcu8cEQkj-UA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103895845534035233262\">スカイリゾートスパ「プラウブラン」／JRタワーホテル日航札幌</a>"] },
            { photoReference: "AWCwydi5P7xPtkiauM6t-_8UtQ2VJHeMlDeVgQhDA-GvYyGE25wfCadhrCcac7xJ_S1QZyiPsPAvXKMJTedeEAMRfSbSwyJ42ts9_3fWlSSbMst1YdhN1ldeTDskXOIySGQ8wGllXqUV4Lj1h99Jjagmt60zWMIuowUenIkwMIYW2CpUdysBC_-yDfu4XdEw7HaYw1jQelQzF2A16QBAVzUUnKUqp0gguyyDIvyfV-zDTv5URVuhGMVo_-KAhy7MWA3jf9dV3wWePX3-jVJXxifd8976D2QBq-xalbwUdmCKGaOsK_Mqw80r0hXTJVOqcdN8WX-SvPLOlm3Hp_IecHVR3sxnPEBJTpYJUe_-szNIUbOPrITV9Tr7_sLdwSag3BY8BMsATcGOCIHy3YoLsrWnJ8cWqIkBckERVDV2TIaM8ASPyfA", width: 1200, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103895845534035233262\">スカイリゾートスパ「プラウブラン」／JRタワーホテル日航札幌</a>"] },
            { photoReference: "AWCwydim7f58oADEh_VmoMpVG7khhNfDf2IzBHtwiltxGh5qTvv8BkCMBHsmDNeF0RLocu5PmEeV2KhmEkq0I1FrQRno3QaeW2FW52j22IG5Q-G4lYlWMPzd37iHu5Hl9HlVVxfmAbDyCXvcSnXfQ1yZjLd9evlGOu03JEeAf2tsRKJ5DTTkqyjVULVZF4W0EcaFU0fqyhcJCE_jNndkln2xaZfyn2RsgNvg_awl74RrOiW4JOLFEmkKZ7uHg9WrS7sdF7sKu6gE0mYKGE6ZnsTAFC7eTVivF6OPlHa0JozZeZWdT4L_IRgqHts7tRFW06TVRYspuf2_D-NKCKsGSPhkBufE_aSSzamNH1NIKFmHLH9XSAnjgvwx87sJcteifETod3pCAp8O7wAaArjLCYoib95i5xRZYEcovElZQ0lFt7Tx1u9o", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115847758208771709696\">nagoya spa</a>"] }
        ],
        summary: "고층 뷰와 맛있는 음식을 함께 즐기는 스파",
        updatedAt: "2026-08-16",
        highlights: ["22층의 멋진 전망", "카페의 맛있는 훈제 연어와 음료"],
        tips: ["평일 낮 시간대를 이용하면 더 여유로움"],
        hours: "월요일: 오후 12:00~10:30; 화요일: 오후 12:00~10:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒060-0005 Hokkaido, Sapporo, Chuo Ward, Kita 5 Jōnishi, 2-chōme−5番地 JRタワーホテル日航札幌 22F", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.jrhotels.co.jp/tower/spa/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4481095525288402876", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Sky+Resort+Spa+Pulau+Bulan+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스스키노 천연온천 도카쿄": {
        photos: [],
        placeId: "ChIJDyeEt4cpC18R3KbNqPJ-k-g",
        placePhotos: [
            { photoReference: "AWCwydhMCSGuzBoMQ-KucFdCdL3r8Csa5YsWjl6VnhGLeszsML3XXyzznaefiuYnSzwBUT3BeRcroTxZDLr_X4mX1dHGAOi3IDl_NFKyrFBtnA7Y-lm6CNxNdzwISUlhrfsS8dn1TNDOCwVgFc3GHvY5LTO5XDtC3lsH3qY_YLD_BBatBPSss9A1VnpkyGcee8ISaiItwW1Ppe2PA3OJEa0e8yz1P4ppRSGkyF4SBjBcbsEHG6KnTliuKsQFENFLo3WMKMy2btCctE8bxUzgonJSRNdiwUtE8u4Rvh27WokeJlAonqNcfUgM0YZzAKdYZzMNXmVQnrn_0oDWsURjBYn_dTWGtAJ6JyvF9466TNI-yOD3jgs2UGtXIKCwzi1cSAhjxB_AUZimueduAD1YlmUUPZOyG0IfspEPIOJ0p-om2gRI8w", width: 2508, height: 1672, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106470257024370996009\">すすきの天然温泉 湯香郷</a>"] },
            { photoReference: "AWCwydipZ70af5F7YfJDwdxZzqJMUOKj0shw3Mo_wpIFhue1ZjftjG73yZ3Ojd_ICBGg1MX5v2zI1EmKHig9q_BVZa7vxXNX03P2c8TbkBYFGrK36TIfzPkxs-bhPtElG8EIS_Kcekb_4JvugOt3rIBuhGPZVkXl5oGXGZJwlNDD4VcaNVc1wVoujlrhJnOkQSZAF97WTAShVROgHyzjHwjirLL_ZTx9xPj45ms3wuIsWHhSr_REfSVkn293n2_YJopzN5OnrT6mO1-c9aMn4_jn1QhrMQf7Yz9wQOmsYBvjkMeaiceExJ-YT3shz9cwH4aEbMRc-MkBweUM6T0vyWQDcGCjflMxpr9A1U5fJeMNoXcurFRkz_zecK72DPRPdwX_saJ3R45LBVbfZN5YXHC6vySei_EHXBoBwm21Q7rjkFAVDA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113073399677704443395\">Hayato Onishi</a>"] },
            { photoReference: "AWCwydhJcNrB5mXSr3ynDYbIKs_er_tZbzKb58_SQPKpfv83AqptvzT1AivFf9RU1vDer9klVPqawMcoU0POqNr63lGd5uvAtTU9ribd1YwQaMloFfuo2pezLEiai2QCd5QlylHK6zOaxzOZPls388PvuAZJbE6lxgb4kl3lo6zNNIQTYWGZwnIN-8mB2ILA-57CiUv5EdNPE3QGdSWcQgGQJVQXaLTfahtqKACot3xKTDiLhDtBj1pjYuB3B-XvHLe-7E_kIzeHSEMD3sGeOfTtn2s9-SxVTU2IO5QrtlD5xaUEtoefTd7zhQS33xmHzo6ps520DC4pNy54KYzt9MfWCS5TEheZFeCQR9u6WIIHsgA39C9qnAceSnfUMDx6vrdpqjw-ljfML7ntk6HpZzza3byUOVgHjkCSWNC007Qfi_NWrUmLKaRHRXV0pOAfVlt6", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106470257024370996009\">すすきの天然温泉 湯香郷</a>"] },
            { photoReference: "AWCwydglaql3TiPRru7jGn05GQYfAA3whIcdyUk4yddfh8BbSFyQwWENPIZat_NgyYB5sEtB-1tscZXu3B-Iz_p-_rnCCGn2bBEME7xw39bfRRTOk9PoAS3-gRrmGOg-it50YRNpjNedbhz2LMdp1280-I1evarZ5EG5kXIPfhCMQQewNFch8Eib3r8BvlVwQJur_zXUAToRgYKqMmm07C2nQprPH2br-zhMwqLYKwYcczXOjVIJXCvxxfcIoSuMzOIeHZsEmMpfmU0aTqm9GF8li8KMnOATXz1lOaKlBr3teNRBXr-hV9YkiBlNuawr4ReO7heE5HSfByDOHoyjAGQ531P54BbZ-SRjhF9R3a0zJYQXUnsWr06prDpRqssibNh_QDblZM7E7W9KbCcqpO1-zPjSFL15ZAGUczHam4ShZi9AJ_-9", width: 2508, height: 1672, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106470257024370996009\">すすきの天然温泉 湯香郷</a>"] },
            { photoReference: "AWCwydiybjEOFVWhsoAoa4SlxxymiT4SPZI_iDLux_SEtm0ypVq-PnaWJ1Coe2dJzcjvLMZXD4hwk20CSoOvudj0fDU6dGa2M7opRssoiNxWVUMqpCRF8wv2xn-K-4JBTWSc018MZOpS33fd4020qBq2ynyI4oURFKCmX8-whIQwIwxW1-2eD6Q0M7C2Y3MvK884v_qyiz4p_ugDu2PX_Vg7hiugb0hvKS_5EDDABqxbhpz6X3LdHgAitVmVGVFncFKVKmArJMX-F9DYeyYjEX1EQ-znlIjlz1LfI__1c9_goc3XCOaeR_HOy0BX3WcJK5aAvqHaTJDssPyQTUBoFyQI5ZexDKcOpzrUlotJC3gab9Ty6A-gHNGcKGsO9kwttyGSlfswBwHkQ_a6vBq5xMaseYRN_hqLqvThPY59ccN2-wVjuQ", width: 3861, height: 2574, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106470257024370996009\">すすきの天然温泉 湯香郷</a>"] }
        ],
        summary: "많은 방문객이 찾는 삿포로의 스파입니다.",
        updatedAt: "2026-08-16",
        highlights: ["높은 사용자 평점", "많은 리뷰 수"],
        tips: ["방문 전 운영 시간을 확인하세요."],
        hours: "월요일: 오전 10:00 ~ 오전 12:00; 화요일: 오전 10:00 ~ 오전 12:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒064-8533 Hokkaido, Sapporo, Chuo Ward, Minami 7 Jōnishi, 3-chōme−４２５ ジャスマックプラザ", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.toukakyo.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16758878219054982876", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Susukino+Tennen+Onsen+Toukakyou+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "릴랙세이션 스파 알파": {
        photos: [],
        placeId: "ChIJdRrKLZwsC18Re16HEaH222I",
        placePhotos: [
            { photoReference: "AWCwydjtIm2cKpk92sPNNt3nB-uI5K9YBA46L_za7bklcditiqLzIhaJaykDWZJQ1PCdzDmT90EIUqF2Q9u3G388re4ueEhFWvquhtmWlViaHcIhgfnVS2Qp9Mf_JKJzB5l1v8kvtOtuJGf9deuwSftNetw7AkxXrK374GeWOuxuYkSww3_x86f9Bb4E9ZKwZBFdUduEKn6SKHX0AGpLPy9GQaVpu9qjobrvlrypFtv55wejomwjtlKfqo7Nbqgw022enwPdcNyZrrx9XtupxTYDApcMKaHLLPBjh-rrOSRpslr_Dkp5-fW1W4dtjgvyRuKTIX8NKIOgw03cj5iRInzRBy9VpHvPiEjzr09RcI5swzjxD-lllCpuUR5rR-M1vvRbEf7ONBWC8QuL3sE8SMgtljvONNqFv5Zk1e3lmhB38nEIhPU", width: 4288, height: 2848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106004248897188279906\">リラクゼーション スパ・アルパ</a>"] },
            { photoReference: "AWCwydgowU6hhhlbiabCZxR7QHOtK8rAFOyZeX9ULfRvxGd40VHjAXwePPZBFpU45-O58EbvA2y0MxDNkNkBIZLFt1AIr-COxq97x3DiexfJIGME-3P0ZSzP3UHLqn7fiuJ2_XM56m9YShYoaJgUznM-DJLXHJTmbhyN596LojUtN5dEsTODYeTc1WiliDoDmoPrFO3miG3XQf0Vv_SvA_5NZ5cVLIlg4L4sUsks2zjBKczDeHR0IjbLu-QGyjfGU_7VKt8IbKuBG63i8e0Gw8llSmPYRyE0I4DsFVDail-dYjmfow_whIq0_udlPSP_l_Yoi_jY6AB3gWXAZ5UGzkPeAZaqYSmzWK4Iodh8gnR2Z4JNd7rnt-XffDH2Pd_TSTbXSgTqov290JRsvAeuCU1q2xJYyfgcHu82VFU9udKUiQQ-HLmw6M5UPRswoZThNqyz", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105741488756344889209\">mitsuru umeda</a>"] },
            { photoReference: "AWCwydhrAUuBoQYl9P8bIJYDuVAEg6hXRry5LfmX_Xw50W6Zvre66--QxaBFoXV8tjEW47gVqzRWUg-LYNTxdY1qIkF6ItkAV6aW2487j-agrZQgLd3i7NAc2iRBJhZ0jEh54F2Xa7AZCHa0-4OKofvdPUniq2duAtgYuylbntB6XA-w8kMnO7ZbFOCFJc1gWusj-MxfWZgEP8gZ7DSxA2wAJnOLAxyfyMG_mlrW5BbaUHL-zEjUXuTdhcGgIZTcfeek5i33bCCWD9-RbICbz5gu6SSi_gc50cXrivu9A6jiStFgjn14h4aNDYUGhZ6qkyu3O_egdhBdQlqRBZTl0PoQqwtkaLrbfFSk1RGPGmZJES8PO2QGDcAWIxQS-V7X3Fna_0OR7c5nyzuyHK2UeAZRAjPXv47HgiNRe3vEWRHOIRPZoSk", width: 2837, height: 1888, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106004248897188279906\">リラクゼーション スパ・アルパ</a>"] },
            { photoReference: "AWCwydjd52Y872jb9MqG13efYQiCQasyH-tutMkjxVbwCP4nbpyV-ozNvq0t5efMW5BoRIBPFOjCrViVXR3pJOEEkyIJvpG35L3Xg98Hk_txNv2sdVMO3dNqlc_TX9PgSL-CQ5tFp3tJySLGM-8AlfxQdi5vv56WRIc6bKuyLA7_7agrJ3kVIu-3qKPbh2rf1B20YQ0ZMwMBpHXyGIXKJDtmlCrX3aSc54mKJXp9zPOBC7AeUJrt7sHby2LoGjnaeL8pxxANwyU7wJqRA8ebBs3WZacioLaxN3yqgUVH5cxYyG9cuvtRmkHIrFYdtmeGfoKK3tsNUPaog0QlFaUAsToMVDS8Yhs55Y1zsHJMEf8lyxtsro10KjI_NpWjEZWWie-Qmzc-uoSHa7PV2uc18knBsJZvNa0A7XamO7EOjAHi8-TbVQ", width: 2837, height: 1888, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106004248897188279906\">リラクゼーション スパ・アルパ</a>"] },
            { photoReference: "AWCwydjg6q6pQ0EI0a4KInEcQXR7aUKBKSm36FoJPBk4dB5I-qjXuBIfkiAZKKOCiqgu1014h8CMSZJo7c-GpNED4Ri-l9wh71LW0BEeakA3SxxNLAAtjVLAutes_RELNtkTWTG8GrGce3muo352j0fldrRdfFT_KKCSYkKk8mwFhbZfBFBIwgmCGTSsD7NZX2CIf1IINZrSzm8cILu8QkCIPApWnNw_W3zxAxcO_X6KT_oamldGQ5BMdlNEdrCJoPEIQ7v3CWHYmLK_PBkjwR_EyAAGCdrI4RBBfL_cAKxdGSQ1Y9p8gLxx8gLBLEwQ-AdKXLTDN3_5mf0cpcQuaW3gYz72H9dJqC_H_JbXrfnXqtyrZ50EklB_AZnM7K40pMrcmD5zuNvomVb98c_XubxUuXhAKZ_JyHLXA8UrFxGJsSTQVHQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116980943161756571188\">まる</a>"] }
        ],
        summary: "여유로운 분위기에서 분사 욕조를 즐길 수 있습니다.",
        updatedAt: "2026-08-16",
        highlights: ["분사 욕조", "스파와 식사 세트"],
        tips: ["선물용 티켓 구매 시 미리 문의하세요."],
        hours: "월요일: 오후 12:00 ~ 오전 12:00; 화요일: 오후 12:00 ~ 오전 12:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒004-0052 Hokkaido, Sapporo, Atsubetsu Ward, Atsubetsuchūō 2 Jō, 5-chōme−5−２５ ホテルエミシア札幌地下 1階", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.hotel-emisia.com/sapporo/spa/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7123558407260823163", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%E3%83%AA%E3%83%A9%E3%82%AF%E3%82%BC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3+%E3%82%B9%E3%83%91%E3%83%BB%E3%82%A2%E3%83%AB%E3%83%91+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "호노카 (24시간 찜질방": {
        photos: [],
        placeId: "ChIJXQ-JYdIqC18RNUxpD-Fbd6k",
        placePhotos: [
            { photoReference: "AWCwydjD1WvpHd-6aMisdQQbF0RquOSiO6im8SJXKeQa0rZ8bCUkwp7D4Fa4TH4jb1_8kEsKYpHMqsdXfOBMtQE5BrgHqJ11mrCVwP09zhdsKqcTqOqXmmPEZbnrKZ2J5gC-agZVAWt6oEzcJgBJAnM_EALpeFcXo0p_pFne6FZn_1Lrr3x2EoTnd82S4j3ldLcsHefTynE1Sv0d2-vhK3luTfVJIQ2enLja3hpxFQRgCONsVXUt8SVP0xaV0EXS0HIePZCLJ2B6urtxQS7seaYUuqYq5T-NIb4Oc0Jqmb7hXXwqYjuS6bQimAVdEDOVvRwGPCZ15cpU3Nbz8u-eh2ZqGD5D5mfJhB82UIeoQl4-AxW9jCFY8lN2Ee5MZkohYJMbKWo-96AyiP1oL5bukdlpU2N14y6-rk8cHQmReRDQyDRq6d4AGQfciBQO7twd6gG4", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105290749783851419629\">S S</a>"] },
            { photoReference: "AWCwydjem5qyk4T0JgJ7zTIF68YTCLyLdqza9k_Fg8e8OvZslXlsZk3z8PosE8ivBFSanWpu5dk4kJ6dFy7t5w8avER3loJyRngaTk50DVZTPh_D4Dy6ysVSj2-SCHhaO3trA1-z8Ah-XtwWJ4meg0FyrgDZ8Epm6Is2wPywEtcBK3ETEFIpOMkE8q0WAjmzfmTkvxTx5KC6FvTCnFjxwAjQAgwzVTVOOlnnXNEoL0GXzKAK89vfvSHH16-WT8-24gpRGUeZTRaTOAGghsiejdCKlZvhNXoTDNcYeBOf-lbL6aFSRqL4O6M7TXGYk4AQEsHLpLusEev9sbpGA1uWB8ezPYbr-6XxsLXknfFZ9SFZaJAg0vNLdVIV7DhDQ3AxQdVgWEsz6AJA1ToFYAQCNF9tDNndGekM6i7jsOsdr1IPwoBWrA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101236029911271244976\">night windy</a>"] },
            { photoReference: "AWCwydjXAdriPSwisCbDaia8BMaSEgPFXC4UGMXu2JstdEenutwdH2F69ke5gdWO1mnyp-4qsvuwOGusvuBpmUIR-jg6tqPCjOGowAvdPmV_GJ1Wld8l-Njoc5FL7VT4vjNfdgXYYzKKkIWrrpPt2EDh2G4YREPYEtP4zzKad_kQguu27FO6rf7es1DSP38OCYpLLWpiIFfDCdW6N88Fm_oHtiwl6-Y7jOBuu-fi18A0BeyhPrEzPqnNH25BQ1myPHTCICH-BSZwydP7M-LxKYwaiMkx4UaFEMhwbVnDj3U56pvKP0Idgn0bgXShvA9OlFzK6cGouEnjWt5N5RKF5y31B1oeHqJLzeKVJCJ_FEtKA2AGmmz5xhPyqyoS_-Gz46_i2Ei5T5J2HeaOiCuj9lyLEHgjcWfPkzqpF9s1M0MRta-tSds0", width: 1080, height: 810, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107549539559600849954\">つばさ</a>"] },
            { photoReference: "AWCwydjvb-fEaDxFu9yksOTNowfj3Ei9LJZPWDXkIe9fPtklaobdogYQ7wZelVetSZsB7JzBT8Nzt0ktaXwnErDXUnjV9nPoLw04el4YazZ5F7xPeX9f5CXKK2t9AaT7m5_635qNeKoIoAic3Dti0AwT52dmpTW6RfrUH6_H62equaoVSxW6j-np4jLZ65wDGlo3NPttAMiDN0RFJaNp0YcPZzDS7RxcLuRS0jU7F8kzHJIagrig0XnODCqafXzLuSx-8wsWr6FSOqQ-yuXqWKyeDNJ0S6Gy65fDiaMffGORzzJgNd4F845NmTxqKdVqQFC5nEQWWrGkRrLLLRSbKc9Odi8H1HK-1o8pXIe7R8aP01ofJN32cFx7dezxA65f8igQUdF_rw5y4OiFEEt--o4fHzgubvQJAwho55XMxZG37i3vieSPrPbcZK-YNxeqwtCl", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105290749783851419629\">S S</a>"] },
            { photoReference: "AWCwydhGfMs2uwe3Euk75bmkU9qtQH9YDGqFX3FCEzls0N0e1-qbveH_xbNkMTubpPKiGDf0s0Od0Sf0PDvvzgKeBlcVoTRbLafoBAhzekj9CBZJpFA420RjkeD4NIPLQJzvL5GpBsP_warv7NqbZpHecKUPzKAAsCaZHyxwWgcIIaLt1qNqffZcymyayth-0yzSlPF9rzEg4LJvPhy-S2QoM6CHToilL9XBeABJ7bJCRZfQqmya9vXvsgvw1wfztDkDVhdr7N6F9QqiX6s5oV9On9k8C_ja1TyxV6sG_qx2wo09wj4_SFPRN_Hn0yJI0vMqKJD00YjJXcmRzE8hLTivCIDoIkGMoIJTlSuJ-rNuphjXk5z3HOYCjazSwbsLrhUbsT-NQF_aMjWskwVS38dSnPrmMrKDWDa20JEYaMWDe0fWhA", width: 2500, height: 1666, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101613009396753261907\">ALFRED PHOTO FOUNDATION</a>"] }
        ],
        summary: "많은 이용객이 찾는 삿포로의 스파입니다.",
        updatedAt: "2026-08-16",
        highlights: ["24시간 영업", "높은 사용자 평점"],
        tips: ["24시간 운영되므로 언제든 방문 가능합니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "3-chōme-2-26 Kiyota 2 Jō, Kiyota Ward, Sapporo, Hokkaido 004-0842 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.yudokoro-honoka.jp/kiyota", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12211329936822717493", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%EB%85%B8%EC%B9%B4+%2824%EC%8B%9C%EA%B0%84+%EC%B0%9C%EC%A7%88%EB%B0%A9+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "센추리온 사우나 레스트 앤 스테이 삿포로": {
        photos: [],
        placeId: "ChIJeVUK8mkpC18R5yhINOsgKZI",
        placePhotos: [
            { photoReference: "AWCwydiv_gxH_uRnEY6FK6_HzjCoA7ue8nccWFDuiUo5JhzhtCzAEttm6WWel7XKZoC0bBhEcPq0RKiBCDsXVbRAyFi0rdHBzzof035TCK1VobECax5Zap46kQppfpqyG9xD-3H2P43kH2Gr_GIlqD8T3ZUR5uR9PMezZG00Fxk-WPEGLFPdZCKXHUuu5P7hBtJCzJl7VGbp096_zoq-qx1K-LcxBiw3CwzduocycP7JB_laIik36HVt8qfTkei9F5OaeDbIxULdosBLyQg3waHzw9oCqwpysR5vPLMqUW31IUbk0oTzdiXyraqfuli2dbDrkFw2grRPoTPitDEiZl_oJCErZxYvl2cUYp8P40PpPzGqIUMlYPCem2-qhqCWGB5iwzQqLOzzKC7v7bIiDAJRZlyB6ZmGfvdzHg_BBwAA4FEaBiRPtzdBrKuZ3hlFKme_", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101058320423536842237\">ザ・センチュリオンサウナ レスト＆ステイ札幌</a>"] },
            { photoReference: "AWCwydgO4uRDpbNcoPACdcQcgn60o0mOjS0c7_njYNzI7lDzgDTDsFpw4k9LdDd23BrZ7FicgzVjlhqkxTfFdTtH5JgYz42wli92b5zJcGZPtQeo7c7jDkWxhwhAqIo0XykG9P6_VGE-jfHJW-L5SSTFzyFK2fL-8rdhtuSp2iXYUtBH4VDk2O3GeKxiAgWNmNY268ikSg2BNCzup-AIaWtXV2GFxNnI4yLWqpvOXu2RFrP9yfftFOAN0I7aqIw-UNi9CtFLCzPr713AbQz5_36jiYmAWzog5OqMB6mUVNhhAqAlfwEZ4XIoc_-PoAbn-u2sivuHHN5Me4-XQHjN0LcGrg4rB8_ezh-HZY66sfkpuDI7HZhwo9TnUN11tBenAfh6OblHh2W2YXyDcxCwiml9jrYZZAB2nzdsJpm6jYHNlYj952MTEOCFGVlA2fAM4a1t", width: 589, height: 393, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101058320423536842237\">ザ・センチュリオンサウナ レスト＆ステイ札幌</a>"] },
            { photoReference: "AWCwydjAlGxBzFa26oaLb0KAjMMgKvVSYO0bb-zcWKC0frwSgPwk7T1XIHr9kmI4NufN9ZNRe4ZoQeCBJB3qtg9miv9JGvXU3Z4nsQSnH9xy2zXMEjgg9w4fS1Zd1TfRsM9LkvpuTKHKcingdQIa16qlqOzeUr2yY4i0dCV0qiRpeyFvYkACbZv1TpiXYk_Zbm_GgtwoaOgnwhm2ZfVQoApj7sFRDZQ37_wEn09KTJXCL2y4oTQ9rW0TGUy5hoNyo1ICy-REf28aWoAdpEGF6pGLBmD7XfnsT4gtzpONU4SriVBBUg3DSNmB5VMObMzwA5d6qq3S2mhP1ecIB-duRTKoqhuuVsT59IK4U8MsBd4-w0PCVADHB5YW-Tywgoro_7nWv-wxt3M8UnJGEhfxp7MzYAf0SDJxCWZruP1UsYH_TzYRygPay346dAysbjjmpw", width: 1567, height: 1045, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101058320423536842237\">ザ・センチュリオンサウナ レスト＆ステイ札幌</a>"] },
            { photoReference: "AWCwydiqCeO5K7Arq1WKBdqPDlVjFVw-dufVlZ53WWUZfSFgezPxoyEJxLOIGagXYfxrPVP91xM7hAxDWhSjuUarO_Jcyv1i2gU0IaXsLA9NU8ysOa2W9N00uVnJGZILPE_XIWbOGIfPtOPmY8zdaMow31q6xf0cYvwmxntkRr1usseFB2lImQFgqlmJjmQLvD2-A1z0CkLfDcCJcV5JWQAq9OcrZfwrKfvzdIJ26GIvbD-Vas9ow5dEbwJOvXLtWCfjAtXH3maELvsc8v4c1064_HxnCriTtLb2Zmn4aK0rMrYQwlXcALus7v_w6N9nuLks2HnBfdO-WSyfdaIqY2JLv6dICfD819FItr0ZypaB-uJE35qY7o5f5dz1e6BVgXjpUNkx_o_BA6qPg_iC2TQNUyHsrq6wIYNaiSUoTgxxbDJj-4NT", width: 1000, height: 825, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101058320423536842237\">ザ・センチュリオンサウナ レスト＆ステイ札幌</a>"] },
            { photoReference: "AWCwydj7Uq3vjKr0eeEyKZ6iNMzSHW_GBI0DRcOjEzHPYjZGdG3ECY3YeTmjadGw5QSPbfwoqWQiMc6ZXbQeuAs2LdOLD3yzNJVdzDJYJoO5LEQowwfi_I6IcHWFEB6esVreUjivdIYgazUpALKEvK8qTsPHHbCo-mQytRTifNps9WcaNRuwhsKG82nmr6abUwEFtKhD35P5SKq7rKj5J-P2U21kpvE0kXFN8PyBtM0D6qzfjzFA4KruluTNs8PP3c1XWUcmzUGmHRBSE2P52xBjcEUSJANu00PIv5wSPPoeg0TXRxkTlqlxCsOweXgwJS8TLDqTfjL585y_-UOAcKAuqSmJiFYGOBmg7L1xworyVto7tgdkGbicFe4s0uR58BO34OxZvDkqSqTsKCyQLJt9UfvJvcvqstQybC2l2PrvKo1pUQ", width: 1000, height: 825, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101058320423536842237\">ザ・センチュリオンサウナ レスト＆ステイ札幌</a>"] }
        ],
        summary: "사우나와 헬스장을 이용할 수 있는 시설입니다.",
        updatedAt: "2026-08-16",
        highlights: ["대욕장", "사우나", "헬스장"],
        tips: ["8층에 접수처가 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒064-0804 Hokkaido, Sapporo, Chuo Ward, Minami 4 Jōnishi, 6-chōme−４ 旭観光New Gateビル", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.centurion-hotel.com/sapporo/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10531985398149163239", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=The+Centurion+Sauna+Rest+%26+Stay+Sapporo+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "니코 레프레": {
        photos: [],
        placeId: "ChIJ1e2CnoMpC18RtYCdfxhe_yM",
        placePhotos: [
            { photoReference: "AWCwydh4cVmw-mhY1I9IA6lDtqH83UOXlj2puL6bG9cAIOwh9tNayzLnFDzoZmpJ8HfP8F2zw1c4gQvycOE2vrUtvuDihFUywwbm4xllJ2YFwnSmlkph2ZYU5lR0rF1pZyoAtwcsWlN2UT1sA_zMMrPeaZ1DJVF_dH8MTYuXS8DFLl7OnW6dV7lQVnuUa304aJnUMPRNT_345Cd_c4Auyw2aa43sDL9vmLMwXKQPxPy2am0idpZOW2xTob_xiYpn_kX50enMN_mji9SzGumGA_G0jbVsv54so7OutGvmfvjsZBpgMBRGkCWubCfrQ5NS_G3amxyKk0y5lKupgjHzVt-i1c67NYVbs3qrMEsJTFUfJwbrssJ7vN5VDL2jnM5ht4nwfEjal5NvUb-Ip1uQrTZ8CSXoC4Sutj3WPT9pWA3f1uxTXOmxPHWER7IouhxY_IzV", width: 1568, height: 1006, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109515984372269519716\">ニコーリフレ</a>"] },
            { photoReference: "AWCwydhjgA4jh5ltk6iDHa3ak_Y3vlSpwUFNXrvZ9b97O5i-nOC_z-C4_gf9hixFGguDtgcTOYLguHurTWhJ99qfTZu2xRoAviMc5ASRFOTR29Qh3-Nzi8cgaPLch7auIFRyHakPVpaSOBqcDI5Ah9Xtps0KZBh9NtMLcFco_u1-dACkBJgGM90PxZKXNBbuC0OGRNBFULbY0r1TapfKU2X6vOzgzbB96JYJ4Cv34xlNjLviwU50JcP0o6KqvWK90igLgSfFK52gh5GWkymshl0FnsI0iQAHmsEENLV6BzIYCBNvA0I2RgYdI9kl7RQ_9qAKDu5V_--QDKjTqIDwRAF6_4Sckb1sUbLhW8OSj9-9p1CbXsh_sfk6gNRxZY4RWvUpNzVtEtjMqeQ7M6Yw2u3b52SMxp29J-IFPjLKQzaQoSDdjfbN", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107523063035761839395\">横山雄一</a>"] },
            { photoReference: "AWCwydgBI2nlQzcFNrIKcn-rAPY0ljZphmHAurQhcd3p9lQ753Ja4IXOygF8WKP-y2Et7rrgzrf33-GfXLrJTd4qDHv8UCfYp2wuDHkkOLZGm8D-mfXd_tiKRkTV3JO7aaVMCrCSBfOn3CQKW0OdtUGKRbl_5OrE1clGfpuwORxVO0XJI5290ma1HGlccVpaLZdYvkXI7Vp49fo5ZJkslJIhbsXiEo9seCpVmdSbdNg7O1Ec7f2pHdC8eRwVRoSxK1SD7FscLe168Sfkl_0DleCfwvu27uEw07_FbWQp3h8VHHxXtAyk1MN_ZaT7sDaQY-5jIM0-Ny9YQwX1nYlm1zfi0WMWQgzU-BvroPyPnUiVsIuvKSZE74IJPf0dhboCFvXKMtwT6q4Vk9O5Y_C5s3GrIu4fhMIQ5WbnRCu5-XOpxuo", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111213656744225701683\">Yoshi W</a>"] },
            { photoReference: "AWCwydiYbuoNbyCKIyQiSvhZRN3JAGZlHofAnBrUCXgTd4-jVyxd8ixqXLQzldZBARaCQ6zjxe6aqGPodrhfwCyLFleRTVZZFuZog3IJ_r6x74wRDwzQu5-wdat2LgIqEP2D7sWBdC_m_YZikuTp4aqFpi_SkEoqkE3w6wPTk5bbBpubHukgy0d53RWbhT7JMG0a170qNHn5Q8JFANxHu7NV0i6zAYdQWRA1GyhiC84g3BkF1kPSlIi2zam6tvIGwAW25LDhrezzlvYGUee-bvpQdnTm6aw0jy2VC4Fr1Us2KhF0U1HRk7rtqj3dfI6Mkx8-3Ka3S5QeraGynBm4ru_OePFCc2T4V77EAwrk2GS4lvuw2NdZZMTerAsS_5PDQi5rhv41sMfZci-ToNIyJHa-QShWWFnLowPOnx8JAzPdENTOMA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116363089267642036586\">H Y</a>"] },
            { photoReference: "AWCwydhTGMwYT8Umh7myvh2dSd0KQQkbpMcoNuHZZHtUYyVc7V4dsAKuctqczzM_3r9knfwYE4Q0y3rMxyvYKWbnycMzPXfNW4n37nAQXrE9uc021UpZFhxpR6luQZSQoYG8nJoHYuaKHxTMnJUedE7zTxnGBnv08zDEqajdt-_EhOxUGPuq7cT_pixnVc9uVocRDWW-GWhfOsu6C9zRFi-yBqEFehUP_Jsa8Yl0LHGH6Dz3-vr4lHmeGcEDRh3c4CkCt_Rinm3xN0kn5unPRqERPJg_ugK-eWziGTnmlY9brt1QtdTjIHT_JU35bHjc8X4rzuXdfR1_oxm6Z6_NWtALYSbm__5-C8uioU1E-CaqQQNHRR-JO2UxybQgCRHEHQSyrN9rv6J3tae5AiLboQwOyodxC5-8NaC8e6Io-mVyM_SbqjqJ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114781669508122828101\">うえ</a>"] }
        ],
        summary: "사우나와 목욕 시설이 잘 갖춰진 곳",
        updatedAt: "2026-08-16",
        highlights: ["드라이 사우나", "미스트 사우나"],
        tips: ["숙박보다는 사우나 시설 이용을 추천"],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒060-0063 Hokkaido, Sapporo, Chuo Ward, Minami 3 Jōnishi, 2-chōme−１４ ニコービル 4F", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.nikoh.info/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2593895369701949621", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%88%EC%BD%94+%EB%A0%88%ED%94%84%EB%A0%88+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "타이 마사지 차오": {
        photos: [],
        placeId: "ChIJz8h3qpopC18Ra75K8mJPq7Q",
        placePhotos: [
            { photoReference: "AWCwydhq385bZLg9Tw-66b_phbmpi0kdvh0Nk2DOeWE0bSoJXmRusCE-GKd8xHtjwTz2HzHHaq4Vb5ABGduGkavSdyHkl9dcKnYCOrFW34XPj3ozdRcxnX8HWR9nx4_Z_cQtfQpin4HoPwbKUAzMHXOEXL8OYWy_uo05t1e2Gt7UZDgI6cuGqzICpUL6luLtJtBX4wtZDpvSpmMutmQ5iCPfOE7I7GNkqyc5tF4EPUoN7SPa1QQ2p_0Vhv0Yvv5Yk5ek369PEbe-umqK9O_FrF910EhOqJCaAyXR09FP1eiZo9XaSEJVyfMjVvB2XhrRJ8Q1ENGm8mCihwx2yZdhkde6uslS7jZX_6JQy-rRaiL_heHh7pIkaLf9PAWAxpIPzOxyYLEIqQfhy1k7sPtM7RzvqIeKoAoMYrUsFKzpXx_x6ELXcs58", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117673703162856905998\">Joe Kwok</a>"] },
            { photoReference: "AWCwydjV-tVlTjQ3aQJh_QviDcvh8xo_xvA5JUc0MubLugLSiMV2Qa7AUcV5iFrCul6wB80DIp40N1W2Y66Y5kMI4aKfDPnYe1bWaNNQ5Gq4qVpg_aNHc3um58f6ncHNjH8MZHirqYkwAi4F73eCPiOP4ZtMJ0rMV_6TdamVCNuukXLZ3vLvXSq9RIn0Vm5haBkqXuQjmeFPUc3TMElk8rodMg7dlrQ-bkeBXNtUd3sjlaINw0L2xko9I0vW0OafsIJO-_YUScup-OnqInUGxnONHV_h2iNaU2xhpvOycucgzUEuOBUjpf9P4lNoRNOPOgL_qWkZf_V__RkOqY_svyy7b6kAtZo9rWckfu3ZX9HtMnUemFdTJEGL5_jRsFZ_u4D2P2gHvHaZV__navAlFk_NGvalwEnzOFBP-7fDd_U-2Spp9Xg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103372366846878741875\">Entschuldigung</a>"] },
            { photoReference: "AWCwydgnP0KJgAY25xdw8Ji6FpXXrv9vVkh7VDa94COrGhl52ZfdTvexBOJPD0YroB85FRFFJ2ltYVyufd08H91f_AUiR07VaMcP2TTE4ocZvpyC5V2Pxp4TeTJok6Frc9OBe8U1fXKRMxxI6xGG3COH55KSIAuxn4Xiar0KwByQKRVYb8snSfZMK74tBFi1vGR-ZxkcFCQljub80hH7pj1ABhT60uoiQp7uWIj7wzSSArdOGOh2eH2vs_WFgNp3g6lnsHKM7dKagvSkt09Q8tLhdTlGAAZNRCd9Vn-CnuHGmZgGz-mKXYLC0QpOjFPIZQ0vSWqSzKtLd7CRXTVVDpSxefCnfyzHmmBI9x6yUZG-Th-EtahUNRhXAc7Yw8dmZK8ttaEkkozH1hsNC3UUCqTyIidCi8l1D5UB1-jaFxaD3ewH8yn6", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117673703162856905998\">Joe Kwok</a>"] },
            { photoReference: "AWCwydh_-M8G0v-xG1emS2yHNeCZatrXwbOjH6O_g_lNrONRG6YUKalvRRpLK3psG2mVEalKSzsJo20AA7qUhtwHkXV4T0v1J5pJayQ8ZKa9_-CG42D3h8KoXUrtwIeQ_68TsMn7o6K2gd-Blb0fFU7df14TMLqF8k8nmjvrYNjeUD5JHsBShnGgpV1ovgRE1k-737LeqDGSuFOqhk3uCHn_eC9waSfrMwgv69NirUIGQXlEiLJB1SfO9afAtrpEJ3zsiXZiZWMbIxEji8tlqz6bL0VmZu3njhSoEN9hvQHuFgtbtIaOhs--O7vASLNmJnuxsQUioswHt1FlUp12VOKaOXOjhqn9ughA9O-HEeYQyPNpQDGtvtgcP4TdQ0X5Gk-MPZqtzx7ReyrG-CQFfcfUcKY4NIRYyXHzq2-6xWvR3DRI0NVU", width: 3468, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101991263289349556564\">楽</a>"] },
            { photoReference: "AWCwydjYYZYNc1q_nn2-GRdXLfFXS0vpJjLPYOmY1zpXrhS-ulaJKD9Qq51lszE8U7WCAfCc0mSdzvPCCNKnWRWxmzFD6Kk4u76m3dKdXERwZy-LsRBCDWw6SUvzuusWySt84HUZNzUVq1ysYJp17lD0hCymq2wxEsLzk7bnYnfKNk10nRH8Ay8ByXHUEea6v4_NVwoxdvPIxiSvZFxv2orDqEMef-PzoKoSsbXwkjtywXMHE1qlwcgX1m-IUvf49oD6pzhMwfAyQwuHSca4UXXcy-rh71Yy-zx1e7J5t1hi7CWl3MHQ8HnLu9lSNF1fHLo3GxHfmRdd44BWgEauLEkXOVRz5z_NoSZOcF57gi5Q4uIWAA091jtieKAknQgOi6skKokPqnwBH3U-u4hAuzk7Ey98Ll3cKjKX9IKCU6MxBgw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107920439120077770035\">星野鉄郎</a>"] }
        ],
        summary: "높은 평점을 자랑하는 실력 있는 타이 마사지 샵",
        updatedAt: "2026-08-16",
        highlights: ["태국 현지 수준의 마사지 실력", "친절한 서비스와 독특한 분위기"],
        tips: ["여행 중 피로를 풀기에 최적의 장소"],
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "8-chōme-6-4 Minami 2 Jōnishi, Chuo Ward, Sapporo, Hokkaido 060-0062 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://sapporo-cha-o.com/english-menu/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13018586434234924651", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=thai+massage+CHA-O+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "플루메리아 가든 스파": {
        photos: [],
        placeId: "ChIJ7X241YQpC18R7H648APZM58",
        placePhotos: [
            { photoReference: "AWCwydgwx4fwXUQiaFtn7QvOw42_jREbDFZNpAlwA8l6Yn4oFXSHaZ_pS-Zqz3pW-GoD01mHc-pqKxKXjuEXYgW_LGnJW1IykWRXIAYXf_DnqCq4DfBg1Nt54zhT9PboQE_gpzQ8nk_UguEBrKx-7cFV0olnzO1iE051C_XcL2liQyKiba4YMcU59QlCGQqovyh8l5SLwZY2EDaGm5PwSYAR3xBwnMQ3eX6wMQm-A_h6ag_bSBIMBROdHREjFel85KxF6xUx_tyGBkE47b9B8cHcINq1GtC1qQwBrh1IWYFGMaxNK3OS0u7NYiyrohr4Zt-aRdLUNNtk1NKVjdpAed0YPYH2WAS4EQerULfsTaF1rPvNjfvdziftH2H8-HzUm88zYhivgXKALcsJivI50kZk-FlvC6HrXvrcccQZG_GSnVdWktWUkYVr3Qoeivg-AQ", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110679228427307966397\">Plumeria Garden Spa プルメリアガーデンスパ｜タイ古式/アロマ/ヘッド/足つぼ/整体｜札幌大通</a>"] },
            { photoReference: "AWCwydiiaNI-M38MJnkm1X1kPysbhi5_WIZHmdC1uBCSzGoTqDyFcblc4dejU6Dbv4EM_ULjs7quPcj6Yq9-gebuxnZWsJ6HWUO4upce2mvLHqOMQqGSl3vD40UF0g0SgfN11Yb4tWNi6FugNz9nJk7HkcDlvSXGdRGp3LmA2eSBareekq2NDcL5Ex73X3KItC3veK7OlJtvHsZrGbzdo9nXoIbaqJ6NoCAhCWNxLZ4OaaQrq7Dbl-vMEe0QxocN_ZPZiUDkoMo_maknSoIFtHNkE6dR0nhdbEM0wIfLK3Nj6C90taUw67aXe9dXUcPpLrsXrdRnUSP00zrmgpAW1nTbJRGXFGXfZeOySUQckjbAVtQh-wEPxfXh7dUsBJSb9pYt_GejeCjJfmS_TaqtXELO670Olcs18pgP4-aUctEiSaOhCw", width: 960, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105293776616989686568\">Antares Star</a>"] },
            { photoReference: "AWCwydhdg4zBVx8ptfnmXTaXgiKW7_6GC9U07vxi-0YC210Vo1uFsudeEpcs7ja7vOwRn7PaFezyzTxuCEmc83OzKgnQTMAdoQPcIfSGjCBWBCZYKkJmxpGppH46GxaTZwX3WgiETXeutO7ciszu-cTqzC09Crc7s23M0fFsYJJBCrC2LvPovG84ZaXH-78Gd1c-kAA0xWk6ZE_Bcck26ZUYcGVHI5tXNXkdA8Kql5pMOaThGCYq2JkaLTqNg0LgQnuLGVZpuYq0AK0NFWVX-TnXh3mHXVEjtIc8WeLaWmAIeepZQRWPKFUg-EzY-XX7_U6AN1mEgkaxrdANHz0-W0en3CjBUMk3uz2J66ZdAhbWYpmANiCSPlrG6LH1HO1ul4ATGoTrF_ReT40qD9gplq_9EcXyP2j47WdBI5ZQCyBtHbbpXV8V", width: 1280, height: 853, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113664781217400475112\">山旅グルメブロガーサロン</a>"] },
            { photoReference: "AWCwydgHt33jmumnbidqwuBkzI3tnzcYEowrH41UUyxjEG7KFGGQ2K2xYEqjs1VLkRXemQ24lHdPZwJr0FIADb26517c_hqM36vHB2rCY9hpX0kBCYUnoRfli5gAL_1LF6s4LZLoXHeFFZc8bpYygCL20Vmi6MZdUCa0899_Tmwc-iQUcEi0EsuNiRt1fVWYhzUKeqqLrNzOp9zwRXVNUcwSRKS_FXf8tIYFd_oLAZNpgITRFkn8Rf8qojb0iA47s5nI5xXzwEx6MBBQ3nsaZPDdgKlENzFu0N6L6Otdh2ah6A2tdjv86AtRv7awVer2Pf4ZuXdvaR2QM-4n-zDA56gjoVNNW3GZIUNCQGYnVo8BfG7Fj-Iff6Ca40FMFJ5-qmPBQr1aEGhsHrGqcrVjgoqJu5YHCNquNgaIL2qGGd1tvO7pahdi", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101810044927976884179\">Shasta</a>"] },
            { photoReference: "AWCwydheUbuyv6gXzD9XPuWrtuJr_C8M5xivd974CXeD7DrxlpZ8VS7B56woRcav5w2jA8FAH_2E9saa5rfREn5Kh3lhltXnRM4xH1dtVhwpTUhdrL_AFJEWDSwHB_sIlWeu3VQzGz38DVVc3J8n-YEAgmC46xd2Xr71vo3q0sDhqoLdtLeVtxcw07bezU5jSEkbtty6NG70Kk-GSTOGRiX3unPqidq_OKxjfQdUtg8yaEuFrj04KKpCx6oP2_1UnCXrUsE4UvW3hQGzEexNvJqkHum9YtUYZFEC4BLBMbyMl4spVfAIPLrCYI7XF53_H6N5wArAsYEHrDED9gtgvAc5aPlLfqg24vmqs2Z6CnwSl_sjqUv4yYPRo8HLBhhCh-KK4T4B4NqtOfrh3Rp0f7XFkWok0OTS_MdOSZ5NyogDsQ2Hze6x2xZqc6sf2T_j2Q", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105006924953344632151\">hiroki</a>"] }
        ],
        summary: "개인별 맞춤 압력 조절로 깊은 휴식을 제공합니다.",
        updatedAt: "2026-08-16",
        highlights: ["숙련된 태국 마사지 기술", "개인 맞춤형 압력 조절"],
        tips: ["원하는 압력 강도를 미리 말씀하세요."],
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒060-0042 Hokkaido, Sapporo, Chuo Ward, Ōdōrinishi, 6-chōme−６−１０ ミナミ石油札幌大通ビル ２階", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://plumerialifeco5.wixsite.com/plumeriagardenspa", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11471751286789537516", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Plumeria+Garden+Spa+%E3%83%97%E3%83%AB%E3%83%A1%E3%83%AA%E3%82%A2%E3%82%AC%E3%83%BC%E3%83%87%E3%83%B3%E3%82%B9%E3%83%91+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "판타지 키즈 리조트 신삿포로": {
        photos: [],
        placeId: "ChIJv3vOIZ4sC18RswipNILvWOU",
        placePhotos: [
            { photoReference: "AWCwydgqKEmJYTBQr_izwjCq-KdZRgrdY7p7eQLDVNtZHgf4W8xhHld99nH7AEMsUBR8xGHjgL8y8gfOUb7VVWlYwphRhGazsdn6duL3tzNycSc2G6mZ1w4B0RpyA8YQZ0Sn0hIz5XPt6ar1cGstUjCgnYi31Gu2CfKX2dpii0ChKLoQueT0MUVZwqadcHctPnIawuMrGvcMRc657GZRduudt_JqUFkmy_CQIkkKIl26MYA2qyaB5z4unEzhAPy1yvo-uekIHXmAexbNrwqDDcJIuEO12SeyfCcpOI_qk5-ySo8tK5kgkze1ycj2DlnOKT5tlfkxCjDwxcpQ8oZFNJkMs-9kP28ozFze4vAX_dy39SN9RWJElOH69T1wcepVJMl_NHkqbFxs3RZ1YGLs9V4XVPxT-YvZXcIBV0lVIrbOCzgJmD0fqVoyGdnGphrbGQ", width: 1589, height: 893, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113254447325552415123\">ファンタジーキッズリゾート サンピアザ 新さっぽろ店</a>"] },
            { photoReference: "AWCwydjxcQPhhebYY9K__OXk26yKKrA6W3NgdkgtcKa5-3ei9sl942wepDBrebuHP5ZpofaZSQ9OgS2swjzUg5CHlk5Kv081ZjK9ze8MpfiZFspY1vWD8H9V0ZCVk8t0YA-VChaTjGtXJMyAAVfITgYUBX4fIVKwG5AhSpweoBp1jnBRnZwcakhwBHpoL1obRRtocvaBhyfXPKl15SeRQGlwwRz8XHdFgV_fnbArN2kY2-SheiwNhpwxb_vEEIPlKapvBMohdikWw_70s8KeQarEFqGciMxx94trOY5XzoLiC7NIEfwYj5Pua3cnuoGpKGj7EaQyZjmYG0tkkob-4QgLhD5lXBeoNcvI9n5QKADTI7OHP01R-nH1tAeYup4r05YcakPGDyWrVlelLcTXIhv44AZX5x-HismUMEsuQGOtXEvp4w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113214049548033219759\">いわ</a>"] },
            { photoReference: "AWCwydg9IAtOGbR9bxi0NXkvHgZGsXSxn161ptLjcat-Cy2ICjr_wL2xwCSgT4Di-YRiN45V9xi-C7uMWy-qq3rDAOVbDIadcV189E-8kXqlzOB_Y4RxAWxW5ZVuqINEv0qvB81kop3M5UIql4sihfhrWD9yb-0YQEzFxyxzO3cDwO3BEnkNsjdSUshiSOUVlMNGMB_uUilSAUUXMARki2uME5hQiG9P-tkj9AuKvycRJX4WFuJ-AUzM51gOFT-XYlKZNbaSndGk2jSSIZ0ULMWdvqv4lGExWYuRpb5W_HHVa9aGx88fhq8O90Pnfzo8WFheTaSpR_Kf3tDM1jQcdSe73OXJlPF3p2yPTv4bbTpfsynunBt1fE4ut41LNiprhpw_XF-cAW8jKL1BfC-E0necjJNNGyIce2s4eVQ3NXy0mRTBA7cQga4CdvkrsnP1gPv7", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113254447325552415123\">ファンタジーキッズリゾート サンピアザ 新さっぽろ店</a>"] },
            { photoReference: "AWCwydiG8zrRbouOXmm4z5noi27Gn4lVQxvQBwmLIIWj5oVPyxuUTJQVOSBH4ytv-aUBW8RZgMh9oHMiee-yWol_YNBGw4is-gh_qmjSLszf8AT2wi9N2n8rg_n1SItK14hYX_6hSUYUwzYN7Q54zbsOnENLL0m9b8k7TU7Zn4zN3Tomj9shIniUEN9sLA_bnzFOh0THHLwv7hGiWG2Arv-hxL5E2SFA9hKKSy5cly60SFN5VExVeWo137pp8BKhpDIWRfVgN7rmm2TyDQzVApRYwDWthHaHRRMF6imXY8sDLEhSDHch_RisF2oT0iBgHHisFplxZ9kZg3JBFolrb61jsZLTnFOWcHpaJdiU_4SAUD5fkA64YYTFUj-W5UvuEs6R0LT9XWUmTjpGgUdUgXmpHr3IyE1cVuCpviaoWQ6rzt3O3Uqw", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116302974693533632294\">yuma fuu</a>"] },
            { photoReference: "AWCwydjTd5g0UHnFvMGYiz_ekRlh4YPtwARF5OqgA0mZItJTi3FXT2Ktu1n-87Il5yYnvWmv6tmhJzvxfMnjBEoBl8my-MMkXD8-ifOFfLPzKt5rKdJ_j8q8HdUPKdyVbsz58coGAad141UbieiVTBtHgIcqblgSvxlY68Xosw_h709qTmIp8HIrN0jKBtSkvo433OK0WtmJr96OoJkbmeqt2IcfPjmd_fJhDHwceWbUEgT_0ygSGdRPc_amJ6w_u-N5ynhMNkuplVt6du6QEZSIHI5MPT1kkLYcLSbvjJGLPI7gWt5DO_TebV1Ke38RwTir2TsONOUhctVOZp1Tvq3CvXqvEfGBafuCF6AQyKsOHtE6JZzx7jbvOQKA8UXQ91s4q1F_tQlfYI9vla5UzdOz0kRBj1iP-ub9qCdw32h4TNk6vW_mYdec1MN9wpcuKLhj", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113254447325552415123\">ファンタジーキッズリゾート サンピアザ 新さっぽろ店</a>"] }
        ],
        summary: "다양한 놀이 시설을 갖춘 가족 친화적 공간입니다.",
        updatedAt: "2026-08-16",
        highlights: ["연령 불문 다양한 놀이 도구", "아이들이 놀기에 충분한 넓이"],
        tips: ["평일에 방문하면 혼잡을 피할 수 있습니다.", "정기 쿠폰을 활용하면 가성비가 좋습니다."],
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒004-0052 Hokkaido, Sapporo, Atsubetsu Ward, Atsubetsuchūō 2 Jō, 5-chōme−7−２ サンピアザ 1F/2F", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://fantasyresort.jp/gbp_coupon/?utm_source=google&utm_medium=referral&utm_campaign=google_bp_campaign", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16526222175144315059", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Fantasy+Kids+Resort+Shin+Sapporo+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "페어리 퐁텐": {
        photos: [],
        placeId: "ChIJU_N0yhwlC18Rn23e_ZRwcEM",
        placePhotos: [
            { photoReference: "AWCwydih3qWJiqa9g5SFk-KcoVP9epK3EHvdNkwreMMeMh0N9Ofy32CVlEK5KEtcEql0CgrvxVDu5axHTOlp4ylv9LrBoVtdsNSsR26MaaEwz1vVgF7yJWNO2eUBkYwyrt1jBWuRH3C45rt0gTli2UgNtNJipnYACSkNowIUPyw_aDSKeuivW_Hy5UyRmuRiuTFdlgFrFcnRxzrzq27vcK47br6YiSAQHzJ7VDenInkAu0Hg4SdC2s_HGDdOS0UpIrZBSwZssT8WNYjp_0Rn3chB87KdOTG8r5UcVv4Rx8cw2Gz05fCGCpFqKW7zMG02Iu-RHoti026NIZzZHH-KqAiPBXvD7kZfeDqEOPtxpKU1l8mOA4NwhdTGV-8Sq3emQLvrwaVHU7FnZ52L8iePpEIgi2FzjsmIds9cdiUdS3jm6EODvEHj", width: 2448, height: 1787, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105246684608118001518\">シャトレーゼ ガトーキングダム札幌 フェアリー・フォンテーヌ（プール＆温泉）</a>"] },
            { photoReference: "AWCwydgUQdgpeSNafyMGTPmEWvL--iPUuGKqN2b3e20pj-ossi8qG0wH3loI8zBAR7cOnygieZqAmxWHOGjz1owCI1BWxYivL39ELgMEVMiDCyOCV2vcLZfQ5UVsaM4EEF1HCmGn1kFsXHc01CNdDE_IdA99nDZfhu8q7bNOf3H4tfs-qefXdScOhRNrtnK267xkoFRjx4TgrlixbSYy48i8sWoOi5UWluc0BQe89Ax8HGp9f496NVGlkC1qN0TAHZHtN3gLJi-2W8nIESqmBoJHXMo9F7zvU0LsYWM1rQL5TaZe9dKrngjikF89jRkjgDsvkPn2oN8AozNIZ7-J6u15HHZkTRoW_4rDIQoLOR0qiHk_kWp2ZDw5nce2czO0vil0RF-iQnbg-zjbEqwm_I66ViHS_rQr4-1Zb-BDnio0Wsl48Q", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110660976388852841998\">とらまる</a>"] },
            { photoReference: "AWCwydjoXpHPg39e-LNw_EgbJ1EZuMbyIZbTgpDnPpCjYG-5s8Oz9yK1jMZrnwXSGeaF52Vs35qdIJgZsDV4U2tt8F1fgrYiBz0ppKcuyu5BPCyxN6rXL7Xs5dRtgKG-N05ekW-0hm1hyeV1zQRCsX77tj6k3lVwSz2gG00bW_mS8VULwGIp0F81i7ZAC4a7nP_sB-EoV0zMikjsCLEff_DGNGd0o__ddUj-e6T1Yc61sXwNxVQaa1FR3JsfuCyWgr5B2sKOJKGqGzEQ4V9On5sblpUvJKUN22fPzIerC8yEI31ZBQ_lWZLxsjB6gBn9w0DPTn9zctInZrEdQLxdqQRgDJBNVJfX9P4JvLSFrZKM54dO6quruJVFi-62Nj9UAo8OSCep2nYaaG8cqvQecVXmDEnkH7s37hqeUkhsRTZ6BI38QZe2jAF3TWdKTPnURyDT", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104450018536790553946\">ああ</a>"] },
            { photoReference: "AWCwydgvgdDWrr8c6oZLld7ZAbcnjME0Pm7zAUaXh5DuBfc8Q7L_IZQAHCErLixi-QlSe8NvLuozvf7QS7jJ1JYYWbVvaRXY4tpM_kUiQHvZENLnFguQKeOCNugcKzYZw_t3OuyhvEbl8PXYc8IBSlVrlkvw2L-7ysHg8_aKY7XZ4ZhdZGENgIcIikqXUe_drrYOIw0t8HfdYG2esjYfOeGU8d22HPtWLBsB1cl23CXbnuSz2ospKui4VQwgxkFH77U4fKO4NVZZK0wVZMPO7_tvypSEkig-IycKVHXPdMwfK1ZaeaBFQuxHkuX5IiS4NMaBJu0pRlBoIaPThl0aQWJ2p_qf84PS459HeAVYfrmVr3WqM3VDagkvobMKBuf81aGasBG9Axa_peWC-bMa19zPTKYic1QEeN8BcDsIdeeGITTS73cS", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105246684608118001518\">シャトレーゼ ガトーキングダム札幌 フェアリー・フォンテーヌ（プール＆温泉）</a>"] },
            { photoReference: "AWCwyditQYO8-jPGVImvNjlWZGf6Ui_MYgW5mcu106lxtVXOswZrnwgqg2ZFfRzKGPAPNaWnLzAglTJS3bn5rrcqUAEbSWsA4GTXI89_PN_JutUowsXfo_IWnqOxiGE_KdzlspbqI29NtfxywY26Wdnl45pKj-2cjP50rAK_lpHvR58angL9LoNLlyB5CzFs07SA-rbvDGRJaNwKutnmwILVjm6cBqjt6Lyx6JMBpoDe-vQLHl8aaX6fVH-hT2c8MB2D4d8Ng3SA_5Zs0OxLOuS9vxfMV4J3rW0ppze08blBWUi-G4b2BDFDQb61QJMx5K9L1aTBHApgECX1JDtIDOupMCug54M3vkmwNJYtxYg-zzmpAGoTyoCfvnU4QsoiXi9igz4V458G4tBNLinv4Smy7X_EDFSTrk87fFMBn3DZFivNBgys", width: 828, height: 625, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112179802346957187588\">Ritsuko</a>"] }
        ],
        summary: "온천 시설과 아이들이 놀기 좋은 수영장이 있습니다.",
        updatedAt: "2026-08-16",
        highlights: ["온천 시설", "수영장"],
        tips: ["아이들과 함께 방문하기 좋습니다."],
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒002-8043 Hokkaido, Sapporo, Kita Ward, Higashibarato, Shinoro−１３２ シャトレーゼ ガトーキングダム サッポロ内", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://sapporo.gateauxkingdom.com/pool-spa", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4859507783149448607", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Fairy+Fontaine+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "대관람차 노리아 삿포로 스스키노": {
        photos: [],
        placeId: "ChIJ0wrk_YQpC18Rcl244gc20Cw",
        placePhotos: [
            { photoReference: "AWCwydh8JrI3IcXHYhPvrHe8qHccQH2p8BrDx2LzNOoaPF5SKphcrDEWJYFQSyMkEQTepZmsufSSc9AD6Ai1RopDV4xJ-fmkd_brZ0b0X6z3EdPb9v7NbYZkg5KpYguzDfU8b0REWhUJCv7zVOAhaCQnxBBULcQSi8jWXunYy1wodBpdORoh0dvNw-IS36t0uoAX5vBDY8ycP93rn5N44cNsEj-5GEv-Wj1kgyHgOSKF6G_reg47gzNNZiwI-oRYZmWT7dZ9amVRnDEyhxqSSgzOqJWQ3v4dfaEFCwfNrvQmgKyyi_-KjSLRBmEd_HqBNuQ6SN-GR0u4v2MULFvvlUA9im6tK0V0HTA5LA7FUuP4_HgoCmCYRLLT7KwdRGxsyB-oakIOLp7ojrp6iy3tg4UFWtyj86uyw7WlUU__Mh4a6fOACuysKqfpZIQiyCK9ZWF4", width: 759, height: 533, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113587287340806244644\">大観覧車 nORIA 札幌すすきの</a>"] },
            { photoReference: "AWCwydj_F59K8I50-6XfTj_oXrWgaZ06g85MczDQOzl6Wm3h9eKJ_Q0go4A7BFZnbz4vkWkJFyxHUeM6mYgGyQ51Mabh8VIO3umKTMG6iDiJ9nWcq9oXmReeKEIj2lmQ27Gzud6sar01Ir9skYnnoMkyYCv27drko6N0hwYMRJCv9UgDx28Uc4McdjH-wZKqfVz7wO5KZbFCVL7B7OiJywMW0IMQKKjtKehfR_ufLFN3lJu66ihSSD0gbCt8ZkJ5VxRfYdfQKxtsBcrLGZR7ocyk9dOpUDozOVzBApH2vIbh_gFhlij7ZorGc2OiqrG6QZLpQBG_1kIINAD3FSA9Jp-R9KooFo5bQMDK42Ft-NDP9hIlbGvpFbWv8hPVbWbtId5lAkUlQi4CY0iC9ZQPxKfr-8t8YoVYIQBDDy1l0qdFkzv82waaZZpT0lQjVgaMpw", width: 1080, height: 973, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113587287340806244644\">大観覧車 nORIA 札幌すすきの</a>"] },
            { photoReference: "AWCwydgnkNkOVcTbfNLo3gMvHTMVERR5E3QOBwWgHddUmN2i-PxPMqQVIDHvmDoypITy5gB6wLFxNy1hLXzXQcR7VPuKJK777IsdEBV3eWZq72ln4vy7_1J7m7gOPVFSklCD283vOpnSla6zMGF0jlRHuMtjVwo0OzRqCoMu4qUITInOVta9pGhWaWM1WHSaTwqR_YdDxf-8_513YDaIoZ6ENXoQQlr7QVKhtjrkoalT930Wanc9sMbsnm10akwva6V-vZjGFAA3Cl7IjaaYJWL0jJpQMvpHPQ-hb4v-EiYTFJOlRaHy26RipdiaVnV4jRgaEZAWuOeEgCDcStCPSeQLEPi8YzfAML_xaq2SrnrcND3Z6ZhfPZwyvq5eO04DE6P-TGfH27niVc1YDaqdqX4kH3GMXJxdnJm_tx3rL1CjZrq_A84", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117346791088613186145\">Naho-kira</a>"] },
            { photoReference: "AWCwydi5E97FQn3V41pwln_CVwf7ViOvuiHpllqBuxyvyx3pKO2d0LMnh8hiv-h7RC0_8gnvqrjxP1WgGVAxG25Uc4osF10yzSDAwjbjPJ37zyZ4Q1NxupfqRHIyuwkA6wHKEpF8WY3hwf2T4JDabf8dZ5Xy1geU5FnnoSMoXoSe7OsNYksMNmcriLjkwyB0FsKYEqBpzIA8Yz-wIpRyn3NPKMdE0Cm2IXRXajBUHCIm1fb6BXq1WCjvvOFEmEcJ35hMMbxFZklb5EnWvqd-2dl0_zEFlv9s1TAMjD83Ri1u876HCfxCx7Vm-BDCsNGdSioE4kQy040bF4FCgihaLS6EENZOPkAFnCyyqBQkC7WKgzJx-hLUUX8wt3wgJt7n4jQ-uJ9vDyRx06TuUHVUGZVvYUdyX5l1chutz80-bzveW1erug7aV3ldcGSvGTxKyl3a", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118287941794536847168\">太田流雲</a>"] },
            { photoReference: "AWCwydius_cb2JozyahvZaamnm-kD7XiX1PBdOi6h2KS7S6BMoxMfbA5KH9s5zc7shz5859KAlO74sRaxmlxi4PlQtl4TgSMzehdGUVQ4p4xaadc4ASR_BqvlaWGBAH4PGZGAeUPuOLeqYISsO_zOLzTriaU3MrBs71hxRqENU_4A0FB2EIF0ramnUuF7eBcJFRKdqGpvXtjkhgYXDd35hBTzD7PVfgztTXXhLc1Z1YMeXLsG1ggT_fAc9z3nwjiUeT3223qGy6V_osKN6MIVtPmILdVYUumtGxP6_XsI5sEnj83VMuUqjog1xfg_svBoZhYS5l-Kv9-qEH7XcJrp5jBJCFuOzz7aP3ZciOKh3ZgLwFwaU2Bj8k3Z4GWn-9R88e3LfQCddA30xlJbcwAvETSE2yWlYDYgrXh753lbRaFHVGXfCRC", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109259570376812902738\">鄭周南</a>"] }
        ],
        summary: "관람차를 타고 낮과 밤의 도시 풍경을 즐길 수 있습니다.",
        updatedAt: "2026-08-16",
        highlights: ["도시 전경 감상", "색다른 관람차 경험"],
        tips: ["2바퀴 탑승을 추천합니다."],
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "5-chōme-1-1 Minami 3 Jōnishi, Chuo Ward, Sapporo, Hokkaido 060-0063 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.norbesa.jp/noria/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3229140340321049970", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8C%80%EA%B4%80%EB%9E%8C%EC%B0%A8+%EB%85%B8%EB%A6%AC%EC%95%84+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%8A%A4%EC%8A%A4%ED%82%A4%EB%85%B8+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "SUP 가이드 S.U.H 스탠드업 홋카이도": {
        photos: [],
        placeId: "ChIJ-xPo_PXTCl8RbbSZkWIOfTU",
        placePhotos: [
            { photoReference: "AWCwydjpfuhmAuKlMwhsYYoJnZ5I16A9a4Gkjs0S100gORR-NKj6VDfHsTkihfdQgPTjmjArPHR0gpGgl-9CA02mHX_jccUlVsVgWXSqxwu8E2K9jDmWdj93obELkZTGMV-iW5DbhEMJ_IB4OYq2n6TQdl0_quJBC473XZA6LJXjzoz1TEN5X74zepCH3jvV2opipTZvJDGEwfyzAuO6d1sxGjeXgK6ASxk7MSNsnA1TT29eN_fE8ncJL5FFgF3sxuCkrgmvc9dBDvn0mXAB1bq-IxwFnjVVWVpCuJO-oEgFh-Hl5PN1oKoAEPELFQJaafOGoeed737dKSGsFQRKZJfEOL4F2dUYJbkNYx1dOH5Igj4zE-byv-c1rbCLVQEerOWpgX63OqnKWw8FW8_r4FpOVTg_ntHYNSwuA4jNkZ2F8W9VzQQQ", width: 1920, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117306978997444531752\">SUP Guide S.U.H | Stand Up Hokkaido</a>"] },
            { photoReference: "AWCwydjqL7DpFyj3C4Tfei-5tYrdXGRdVfJAVjVhpF2HYVRe3JW4ouuJX7RIHDkYxRMGP5HO0FmfrPbeaR5ZKG4z3CfhsdfTw6aYa4JQR7bEkD_i7rOC4zrqPrHiGoJO-SL26n77cqRzZS8lsVCWQYXME4siBb4MVO2ShJDFb7IQbVXKulmHuahFlVkIXAEgTpKsA4QtLFwYOeCJNdMPSoXlCBIUrEwwCRZGeT9PuxZfvfMSUQtwbnsrlPOu9U0EHsMRVI3MuGDxoUNARJs9URVc2JrrcTSecEPP3Yqm8_wbC65dwqsOFuye1tdav4SzruoHQdq_c-UvCSTCbTo_i9NVNxhPATZ0zFoAxQtwOOyvU5APMZ74hXo-HVHwoI8vQjdNYdaBIzdeJoTI0_z9vPtQAtKZa2jH_S1wvQ-VUNXkqjpIibfhGhWeTcAARUREs0DC", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110054222204730229652\">miho h.</a>"] },
            { photoReference: "AWCwydhhqKIXRz9M6gEaby0Jq-bdXbDOtpkTq43n5eQyUGG5D_slyi8_NzVLKDtO-K8O3l1a935LhcW9nJG_NwbWAWF7i5mn1K6qrZX0JFCYZF4c5y_mX6IPVLK0dNx9aNq1-Uk8zuHnrbFuyu4HSNvrxxyCOv1vXKIjECfnzXUkSQyLzPtrF42dtEsbMyfp8KHbiLun0YK4PKKZitoUG9nzGuIUbpmN-LfcBWEbaxUsBK7JV9zVea_GXBryBITbHWGj1i9-Y36hNT_3A09V2I_hOv9XpDEQM0sQ1Ckry2X070xg2aB9vxrGw3wNKW6ylVq3_hsUU17dNte2vDmpkSUqQb_BHfAFBdO3F2_AnpfMkY2Fm6KZolOFuIlLZqDyK7NRvURJ7URIY2Es6OrGheoBGHwquDZL5vqurMp5_1LigY9iq9CvRSq5LnifJnNoDZVk", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110054222204730229652\">miho h.</a>"] },
            { photoReference: "AWCwydhbojqxqvUblu42O7Br6vaKEBBjj2fsRBEIE6WXuafggVb1Xc5NkSovvAl-PhnAAqWcDTvn8vTX7exSQG1ijSrKYMDlNPhye4Al_5M5CyHVWIScv4fw6o1r8k7E53jSi-tNuwnwDvC5FPp01Rg4XMknsY1uFebN0cVDG8ZHNyJU4d_oHvGEs9jRKzUWf6bugTCyxs03heSynLZkPs3DqOLnH_R-WEQI4DmBb6TMsv3nWb7H5_blUteGk383PhV52Q71fNqBk-8xXdU4QnvCCfN41QmbHK3h6igLV-jjXmdYDi8XCg9QIfbc-v2vBO2xY0MRuQp11eifGZrPR5cdf4uCClVYWZgLI4gHxfKE2ZpflYYCPaKFFeVWXc2BV95FI_0ryA5qB7_Hblb7vYNwfvf2UbTXik9unJFwFQeDwN3nx58", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109906277696269746720\">花芽会</a>"] },
            { photoReference: "AWCwydi-HXqbZYatT33o04TdGFKlJJOZ1ICHzdRTc1sWzLBhD_LdcZcV-8GMd9GMFoFcfV90MaHXGgCALwxWFvnWDZGRrReXJPabUZ4E0bzuH3uD5fcpbAbRpZUuLmjK9xKeco5PWiAxF4FojJYdE7VJYZuA5X2_6ulzyCXPhzpQD4mYzJe5nAE3F1r7FAwqXDf8z39phyYKPyHbbsaYsN2BA2kMWIj0C6l7jqkgMlOcpsGanj8UAgm3Rw5x16SnZx4uAUaA4giAHHFcCOpuUDRR3eMKlnLL3yfa050d07Vhv8720GP-A3f2asME7xEDFXdrzW0DFKuilTNwHwRg3sUJkuLM4DQ1s5SvIh2hAn2KaVS4TjleiId7OEtHy0pmd0TT3jCAPUjMS7gWTw2xeVU8A9mvqAKPswuInsYdT-PJH_aFotHP", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104391532285801127195\">장혜연</a>"] }
        ],
        summary: "초보자도 쉽게 즐길 수 있는 SUP 및 카약 체험",
        updatedAt: "2026-08-16",
        highlights: ["전문 가이드 동행", "초보자 맞춤형 프로그램"],
        tips: ["가이드의 안내를 따라 안전하게 즐기세요"],
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "11-chōme-15-6 Fujino 4 Jō, Minami Ward, Sapporo, Hokkaido 061-2284 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://suhsup.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3854252672611365997", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=SUP+Guide+S.U.H+%7C+Stand+Up+Hokkaido+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "노아소비 베이스 프리루프슬리프": {
        photos: [],
        placeId: "ChIJXX6UGrzVCl8RqJ45pwSSbW8",
        placePhotos: [
            { photoReference: "AWCwydgoJ1Hl5GGEcfb-fAPORPGr7zFg0bZ1KBL8S8Hn1MVpDw33OcrKLFRGD5wMbiO9x_m70upuUUA-E_RXvS222ujAFx1GmrRrRlK3uuYhIpWnPa-mlbncpd-yA0-XtvxgCD4rkAuF8oJBmaz70b0AKeV0K88-bxfHa3vG4WtybnMmoyzXIPuIF57lBfsEGtRJWs9n4huKIVqxzGoh584HPU1lTPts8m8eMonnspk6AEZTL0iJeOxDi5qI8R8hn84ylbJJuVAfOaBVteWczs9ljrvhY70RPK9wigHai3i5_2QDs7uQS_aRG7XLGdNIbLN0CKLTv-vb2AkImif8xsSQtiG97SbaRxg1lQoFGFZWSPAzkNdQ5Ytz_sP9M9frVv_S4F6G71PrQXRkiLhVCnS6cnqDOkM8M3P3yNPZL9AFvqSmWXQ", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117553429710745130490\">野あそびベース フリルフスリフ (Friluftsliv)</a>"] },
            { photoReference: "AWCwydhgoA5SHR6n816tREBIYc2IU_yTDF4amJ5Upp8jQDlXPDmDyUnTOICPihiwRNoPZGB6BnS0VjJBmwAnkL25cQfeep57gwTw3C_IJm6lp0WSLPbY7BuzdajaR85m-au9hrSOjHkAAwS2M3WW6PmiCCF40VIPDcotP0tQUOo2JDOCcbBa_5bjW1hLuuwGRc8XZWwADJ7Benl8ONVcZbl01ZPFDvXQmFhosLSnh1CUq8ecXbvFkskDx9jD7t7AQjge_8YB0qLWnNpgkZzwpc_WyD-crrmLSJKu8YqLK-k7JNrwEXffe-0gvPvr45lefoR9Tspc_NQTFbyzPiU2XkyvxT7FsLcPz0qUjSO7LoJ5AEO5r0KnYWYDGD-5okicwmEt83GSAd6L1PdZn2nL443irtzgAS7VhVp0UNc1CjreHy1_lry-", width: 1478, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117553429710745130490\">野あそびベース フリルフスリフ (Friluftsliv)</a>"] },
            { photoReference: "AWCwydiHkh91aHxge4ShGN-oZEw3xcGlQEPjVPAg9xSBl850c1t_0Vk9c5YtG8K4I_et83rOyUOR15Q5HdOYhm-1QcMiDF_LwljPe5R4YAzBKoaM4Q1Bns82J_BkduhWbwpDpK_2WCFEQPC0d4Y7oMTo_2qcKp3OqMiX42ZyTSDgxdcYa6DrmE2NP_p-bK4xablm1-dqHdnp3w-3CtueD1vfWTIXcb9VTOkMgGFR4enL_CGdFkoM6iFu_k9wNQxiF2QCcU7Kr-eJ3artJoZzfmJL59Q_ZUTDzpTWmSkjAzvI90g282doqKYOsSZMh-B1nb0cMH4wUpDeLMGpamLYbzHc0OAnIpJtXBy1gVVjsp75ZpM17vbAE-3FVZE22aiLxnavceh-4FZWwmDWdJ0kDuNtDoqVYrfqkEl9vnXlZRmzt6vkrw", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117553429710745130490\">野あそびベース フリルフスリフ (Friluftsliv)</a>"] },
            { photoReference: "AWCwydi9BUJDsGJeWyI1LL0Cj51Mw4DYh52-15pmsO7eT49udXWO02cuc2AM_cSB64nqbjLaUV4ympbVMEcha8AmB2QydL6TT-7nUSFzcvFT-FVw3Vp0G50JuaOPf9ukjMNB_6Za3SHunShknrVCoh1tqt6GEkC5vCWlEpORDWwErCrLzxEvk-7WbFI31SRjCUJgCmV52wv2ZwbdZQfIv38SarvjnIGO5uIpFKqUoTcnjRzCxf7eLt5qOMFWjGp1v6n6G0C0GMM4Q8OuNabPP-i9IxzBEXs5cG_d1I289sQZuS8fGE0e99nNH-sUU7awE0x7HP65sIcxRVS-Gdm9qG2YxBBxolZwTT3_6npkNyCjm9bAjH1TAJcKn9YZ4uKXuMq8oC3E5n1N1AV3gBilC1vcLq0fFINTcTcyWfmXA4U9AQOt-tpS", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117553429710745130490\">野あそびベース フリルフスリフ (Friluftsliv)</a>"] },
            { photoReference: "AWCwydh-D6LfmwYvbMVJA8E7epC4L4rP1DKCxDu8nVK8h8oQw7erYuwpd5oqjYYJ3TPOfzZbDEsB4tTYwrnH094inPxwlOOuNF9dzXriRauF4-naUEKVEH7ARGGcLHBdR1hRW9_2ANgsxbA1acKcLpWALkqfT77yvN7OwLEvgc439VXKuZm4dFNRcsyxOBN-KukgXCUDNWeU2EwWDs5A7gemFVsLQX_zQHYnmZV4uI9NMD0iTBplnOtpzmHjUygbs4uS7MZa1NVgD3xGJRHhhqeaafTiR7uNZCbI62jDZyjOOFGo4cBdiXb-V2otZMtUk17VMqvuo4GGWDfbgazqmlCHIgfgDYPdi7HXgxZfSJuaH6tinBd6fBO0f0PqW1LVgoxWEOjHbk9Vw2e6ZY0Or60bo96ddHeyJuoXuMWlVtoOxg6DFW8hFjaVlT62q4iMRizh", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101964124429057267658\">Wayne Tai</a>"] }
        ],
        summary: "SUP와 카약 등 다양한 수상 스포츠 가능",
        updatedAt: "2026-08-16",
        highlights: ["아름다운 계곡 경관", "마시멜로 BBQ 서비스"],
        tips: ["맑은 날 방문 시 SUP 즐기기 좋음"],
        hours: "월요일: 오전 8:00 ~ 오후 9:30; 화요일: 오전 8:00 ~ 오후 9:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒061-2303 Hokkaido, Sapporo, Minami Ward, Jōzankeionsennishi, 4-chōme−３７１ 心の里 埜ノてらす内", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.friluftsliv.website/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8029234259354558120", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%E9%87%8E%E3%81%82%E3%81%9D%E3%81%B3%E3%83%99%E3%83%BC%E3%82%B9+%E3%83%95%E3%83%AA%E3%83%AB%E3%83%95%E3%82%B9%E3%83%AA%E3%83%95+%28Friluftsliv%29+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "와도 스튜디오 삿포로": {
        photos: [],
        placeId: "ChIJibDk9a4pC18RLcBeTuTzgsw",
        placePhotos: [
            { photoReference: "AWCwydgzOD_4mVQpFNARn3ESApXuPc1yHhbXtxbXjo9ciWHSweRhtaJtnkLus8dJIy3RwyzT7Ry6yicbLRY4dWfbpGWxJnNuiJMb0YccNrFNuiKuYwNCUSnAEjAByB1Y_89z3NzuQMuWIdAXP-CpYcZuhGV2duZMI9r97eiWRP6knaIqxLG3CWfy2Ql-VcOA9aEwOqQ4y97nJ3n0OhrxZaV23bkGtlY6awLfoa6xM-xb9wpfxlLlT_LWzt3pOf7439K6fPmTcioaubIxkNi4gqv2_tTjiU-mxL8A-gtY6l5hwnVZ-NDKHsFkJdNWG4hzDsS0ls-rwl1QA-EITbKuBxjjgamCkZ31BdX6PyuVamNNMfIZcwA4pF12EpR_k10tlnwjzFZjYxv6PR_TXjnUKyS4gKY8heZZt1sKzMoHh0elTSlCGVCL0FuiYF-0EqP8dg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111431981995283240766\">Wynnona Yoshimura</a>"] },
            { photoReference: "AWCwydjc3VihF3WjaR_xhwPM73JlMVPwrP9JMENZW5Ix4Uzp_GOgVCuC2jghwBQ20uzCtt1zQ9HBRU9KbsdMkekUEuXdlQujG7qvFX7KvUl2wmAbMgZf2wK-XCAkDTK3d_uZtphcO5hbiqqcEgfJ8pRiOLUFb0J06EJx8aPAUP2Qa1Ggn4JLoTZIJdYPs7_0zlR-83MAo44IJycPFAJm0BTw0Yh3eN-HUV6bW4jEVoPi1eeTFTPr7FSGZXsv0OFM2lT8CG43cdXOuHqr_ZcsSniVWIF9NOCBHQBWI3F2umBY-O_tn5A5230jRpMiwVjJ04avlLeGx-_X0DsSfid_RYdZX1dQJvoEHIoUnImR7a26O91fiagPAr22FSuuVEOZ23pNVC_vWxjDarTaG_m6IhzMQWAQL9IykJR2ydr0K85aLyBNxlBhlFYhPPXsSEDnIURe", width: 1290, height: 1117, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111507275844663301807\">Aram Min</a>"] },
            { photoReference: "AWCwydhyLIFuTOlq2C_cowxWVGjV5yLSGQqz86KX6YIG-wTI0gK9D8Q4GM_azqibcaeesWRW4tm8F_S0WxkjV5DCjwuSVaUWV_P3Zd7pS_6PmrQyWjSSQC-vQ-U9sgm2Seb4YgnnX6esJLWR8Q8nEac4kbk3FxbKIMaPZ67CrA0eQF_qgtDj7HTahYe58P6GjZoYMfl8NBlCcr0DdgN41j_-JfAqQ3axZV1-hsSPIgpcn0aFxLalO6X783qF87S3bT3sthgSYh9UYaUhk4TIYcHp63_mnv7vsihGaYpcMACMg6_N-5hWqBBDHEMQFsEmeEkKMm56ShaiOGDNc0p0IBRocxz6miqefYh4WX7BnIuXRl_NZKWqJ8S-B4ROvIj6L0O0y-LGP70Bps3EAEeZIJGuIPAFsqQrjNi75L6ORqSQJ_RIq3rtz_67AdUHwza60A", width: 3510, height: 4680, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114708967975249005835\">和do Studio Sapporo</a>"] },
            { photoReference: "AWCwydgrjn-_ivQFcLKQj_Xe3s0jkxu6iR1bE4CYNEbKC2QjcLBR5OOODw_OwwxkbgmoX617vH2m0yk4nACFwUdTnBRBJsfOE6Mc2Iv7K6fDyv_aklpJ9YBEI-7pIROM4iwPgAJE-yrM7FZN1i1K_d2rQm_4IrasyuLPLaWDDnz2PjRyjrESUQmrclmBP8d2h6j_nj1tqGAY_7gweJPhiywieLWG7MgvLisWh3R9_1zJuTWy_ZRWSChvyagErS_auZOuakzQUdS7JFSZeWWTVtAp2urJ_2BlDKOLUjdw64lXxKS-XVEFc7GP1INTwW3BuC8kCd73N1wgV-cq29IXltO4KirFx4-GrOC4rKMY4c91SmhBP6tUvFz3auLG2EMInVFI-rPaW8nn9lET0lEtbggYBwoD0tqvA6KzCFcmAVJX3kBkwz0yUyJuYSQnzOv_Qmng", width: 4800, height: 3204, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114708967975249005835\">和do Studio Sapporo</a>"] },
            { photoReference: "AWCwyditKT3ByaW0LFUiGR9qE7wWq0S1VhNU5l2yxbqaJyy5BMpdRV2Z4roFhTNYtmZh_-p9sJkxIhraVTKg5gEYvHxIT1VPtw9KpXUr9rNkFsHex48_OF5-SxfZPxNMAs8CMdK5FAQZAx_pFiodgo1rcD5Nto-n6R_kshUS4PUkiWOcdD5MNh1IDdy20shwOtde5dMAJf_9LfvJokbrEfngX78Pto3kcJJIOFs5YsAFTahIXrZ6SY3wwRsFDi7pmZnwIoSpGoaEMh0ZQ1TjI0OBT9xPkL-kLoEkrCtcx2jNTzD2UoFJ-kQot-rFfcydgtaRCFklbIg1er6PxJvetrpILergXST0G_mkAmew9lcKEwGJZnzfW4bDqO0_-vcyL32bcu5IkmMzgvIW5ODiw7dmR3okJ3ZBKKhB0JwO-9Xf6Vxg7hWkpS0aY_SOUNfgN6iF", width: 4800, height: 3204, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114708967975249005835\">和do Studio Sapporo</a>"] }
        ],
        summary: "직접 음식을 만들거나 소품을 제작하는 특별한 경험",
        updatedAt: "2026-08-16",
        highlights: ["초밥 만들기 체험", "젓가락 제작 체험"],
        tips: ["인내심 있는 강사의 지도"],
        hours: "방문 전 확인 권장",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒060-0063 Hokkaido, Sapporo, Chuo Ward, Minami 3 Jōnishi, 9-chōme−９９８ ＩＣハイデンス", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://wadostudiosapporo-1.jimdosite.com/?fbclid=PAdGRleAN-jfFleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafNO7u3fD328EcuIB4k8gqRJmggH6evIeUf9NTm254h2WTvbcW7RXbV97byYA_aem_NMvu4YFdxL3DiQ4O8aHeCw", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14736609092602609709", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%E5%92%8Cdo+Studio+Sapporo+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "파네 플러스 파네": {
        photos: [],
        placeId: "ChIJ8_mIFvIqC18RH3qSUQL3glI",
        placePhotos: [
            { photoReference: "AWCwydgeSKNFu2_iHSaWBTzK-pJCCFy0QvD8zBpF9exb3S_6vsH5DFMyLbP0iIbIz66CcxERB0rFZGiEsXGnj9rgBDbXhlL_N30jiXAKnzNJrznNXYw0x4OsDYlfa50R0WazPhudQfVEb_ZhJ4Mt0boZExLDKvtH8FSmjbh_vWsquYTioFrb3tl-OrXa0dACcm3a_cXpWWuX-GEwtikD6_LVKJuE3ogs_O0NQI4MKIn5pSzp7poMzbHErz0dR5TmbwoNu7PvOvSf5YiY_RL9Y_-qigYbj6swrn6qQMcaUKm9W5nBygYTB3Cfrke7ShG1mo46REVTq1JOc_oL9aE2tFuDf7b5QPtfTJD_RKplRsvNnfnBL_Ge0JD6bTRWo7pxOJRJlLNrGQ4fcYNJpyVIPFUFGRdtFzUWyk1ORysjGzzodjlgEg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101156708502916318681\">Pane+Pane パーネ パーネ</a>"] },
            { photoReference: "AWCwydj2j0zxyuCLeRouguOgRrz3uuC5j45gqOhr6h5mlnGiu6viyX2g6wySfbfTgWqAJfkkyuqL7yxPmawn1xbeVWUCsxl5-iVpCXlaNJ7xD-8d-URAGkqiNLX3c6HcQ0rYfrhddX3ODRSU6CklOwI5Kut1fJzCZsQQWSxVy6U47L9F3wuBkMLoyOhs8CaYsTHOMRx__uYI1nqvNoZ5rxD9w5DvDHTQLCj04wNqzai2zpRl2F4dX2ROIlg_YvI_KqGW25XugUG6AyAftWs7sGuTmdE6iJBRpXO1jQfims_A-4AeADab_ZxKtduBcOVr9gVyBxOYCH5rLCGv4I54S4zizqI3lqLpnESFvroXYZTcGrLBtM2jxLNQwcvHwXCRwR1KAWaVPQttS44pMqAzXg38Nl7eJGAIWCKo2DpyMstcTsLGUySup6ep0P6FKcfAig", width: 2364, height: 1774, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111082215171403130115\">Sweety</a>"] },
            { photoReference: "AWCwydjIartJV9Vl1clwGgEG0zINf0bSr6b47ECNYlbcx3j987PWHoaSjqcZYxaDtdbhe1UL0eTUG0PwH5zx-hUwIs1s7HJb2pSq5ooCQPa2G1FobmFCHK2WTpV4OldA3EuZRDZMHmnIr-d9zI3z2dWE1F-wwI9IJOTytwDEc2PrJj_7BRhMg5jhxvAwNquiVzM289omtWWJbOom8NnDu4Yt2wuP7Mh2O_lzf4_naF4fBDJndezBCAJTSlt72oD01_aY8POAZO8kxKptoQlEcqF1iXJLXOMLprsqX7sGTfMnLha7kA0QnFvIxgo0gk5GDG-Q0eEcO06741z_8yoWSd5vFSWcT20b5220_btc4BFIS6lAVD5yy0XNCNJeGavbBbJlO2g9oJGXWHfw0Y8I70IcLxDCSUZdJnnMCoPsUvLQHvwa2-uNQ7OhS9JBySiAcKaA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100865833953071197679\">さとうえみ</a>"] },
            { photoReference: "AWCwydhwbrccwZqzveR_kqJK_POTBnZt7-YVdR4Q7I5PljHTU6bOchtMB7sZmmr0sxY3egkcLHR8ri4S7E8VT15oKL1WC_Q1rqyv7EH3nianAhB_tLaaiS6uVHodtIKQau67GJ2Zz9wrzsgpE1e4X3cuaRLPFynYQf4xCn_c09oIKzHmKt4AswlTamoKHTxhlO_4RIUMt7umfr3f_l6pIqyWbGBBiLeuZTOjd2Flh068EzFmHzGPJdav1XcYTqHOdmhds90Md36pJODCBW6jb0a5pdana4gVPQ2F-4hyRYUOib44t_T_SGPrRh6YjUyUxgTE-7qVcTUDxF-gaLsSut5KubHMVDd39s_IDNmQ54uK2ExE5UGupTtlMYHxm6c8LpZqzyIFwYiRlCUruRaAbmfO5wdZwsz7QUYVpea5kMPBJkQ43dI", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101156708502916318681\">Pane+Pane パーネ パーネ</a>"] },
            { photoReference: "AWCwydjsiMn9rZ_8JDmx_dEHDaz9dbw_cogTEVWXFk0yDBqmSMGnfpURRbnLvfTn9_7QIHSRfGewceEOJs1_nCAcGQFK0CyPbtgT22lTrQlT1D8PHBvZW6ZkkI0ARzE0q3eHV3RRFiC3RKK-_V7YtD5zSHQOnlV7N_HcMXCTbhFAIV6oeXjuK7VPMByyhNcfLKbPNjZViUWiP3JllOwcfi8vvihK6tVCobyv-HECrRlA8q5y9NAsZnljFsi7gMIPbNHoBbkUsoF_F2Ko-NG3WOnjCe9xdFsHssj63zXWAK9d_8YvthJmaUdnanypMBfw2rGA7Iwkjt4dLGjf5otr1jTZQ6SIkiqwz7JvjEeBz9YR-bLXl_Qfpxb3DFsh3pVqSutDRdA0jEhJvmwtyJkALB0PqsJlyEtYC_JKSKXoMr-WkjdYe4_y", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101156708502916318681\">Pane+Pane パーネ パーネ</a>"] }
        ],
        summary: "초보자도 쉽게 따라 할 수 있는 베이킹 클래스",
        updatedAt: "2026-08-16",
        highlights: ["명확하고 쉬운 설명", "친절한 강사님"],
        tips: ["직접 만든 소금빵 시식 가능"],
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "4-chōme-6-45 Fukuzumi 2 Jō, Toyohira Ward, Sapporo, Hokkaido 062-0042 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/fukupane?igsh=MWJpaGtpOXU5NHRkYg%3D%3D&utm_source=qr", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5945586047413025311", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Pane%2BPane+%E3%83%91%E3%83%BC%E3%83%8D+%E3%83%91%E3%83%BC%E3%83%8D+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "하나 사이클 클럽": {
        photos: [],
        placeId: "ChIJwbEfc1IpC18RAqAgRZxu5HM",
        placePhotos: [
            { photoReference: "AWCwydgL23we8si3kaMzjaI8dhb-wu4OTPqS9jyEwgY2WupTZGAanS_wf0N3U7kKmh2uUWq2rfnIgE_bdwI5HQns2lKtKOLHxXDpBAF0kauZEY4Twk_4pW5ZGYeBmv4J8Xn-vAjE3aw0n51v8985_a6HdgdNXyIyU_yzv0hg1rFleh06ccIDPe-o9yKZYs-Bimrm41y_T8sHf1fXpsSl_PDME85YBkavjXjBmyq3KMwb-uKr6hMCDbdqJXJAfgNE5r1x9gwCt-pBiLqIPXBIU2_PHmkQjw2X-mjOJAo4MpY_GUarhXWrcVUk1t0rSxF__3NOyLLt9giXeX9zbOZnEThFTqQxjUhombvRkFaHrgAZgWuZSMRXwyeL7M5Ayq5rnZeFyxscForkZY47gHv5Uadtz4yfYybSOpIAJ4_OcgTdi0d0EbrP", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113743658819222516228\">HANA CYCLE CLUB (花サイクルクラブ)</a>"] },
            { photoReference: "AWCwydj2IJ3MdfSYa4c6iFRf_H0tZUbjNuopTEcW5uqQBe-cCsrInI2Y7C-PHR6MJjMGI_EGE1PWWScbvx5IPJL44m_WatUahwnQuw-FB6IzDHrvksA3bPdH5EbUV66awhKH5-G4IKHh1KFH2s03ENAk6cgD_hgxcbGXgphNmWgEDOM47HO7F2-BCQ7YBVXtsNV7gUdSQ8myxLXMQ0jCOSZ4ZmPaewWZ6D-YS_Cm21OJgng78q0__fLkGe7dvoSBCZla-XqcUGNBPsXm41f73WsXX9tmfF4atEUmGhIVCxv92bFP0YV6NTD8Fu_HKzU3XhHpJ5KIhZBXxMI9LWMud19JP-5PmFIASaHoSY-RCx69ApxdoERfoCXdY53rcAQzfkayiU92VrIGme4_1M8Wbqntsys7mPuNXNdHjzzEywjpYGtuM86J", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113743658819222516228\">HANA CYCLE CLUB (花サイクルクラブ)</a>"] },
            { photoReference: "AWCwydif4dhabclnX6zyWG2mD0Z4N7OyMQcRTB6IDqP0s0JScd49t9RrDf0MPIpK-Kpk0GMNd8MYzbLJjhkwpjOZAVE_N24kTGsY8aTW-8vO5Bwbo34SvvJxPx3WfUlkxr9di_ifW3rbDT3zz8HfV7jHYpoThHtVb_IFQz8PfNyohbOECvEC-ErgBwgTzu0HSWFs5vqCSkDZYNAsRSdneFB0iYjUajjeFLgNLIolfdCdr90o-lxY8euvMNXgDlS-RFskj5DJRD86S8TzL3bqMPWAQBqxwvRMj1vlHBbBRqok_ZMOZxjhNHsigOB-xn8esaQPzHp-KpA6KeVqewOU3XYV2DbBCg_2BpB9iWhR5PaA5Tkkf6xjXvhTg1lQis2mPHccLi7Zxxg_dHLsOU4acgCmLZyVoAQXhFZvkVDfQzw_5r53zA", width: 3130, height: 2348, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106119980068160007515\">kaori takahashi</a>"] },
            { photoReference: "AWCwydgbr2yCCoD4I0QI12lJjTMRFgexh5EMqFE4lQDEiFdQlwArVG3OD7wCPAGN72A5iWPzntb44Hmx5_hSAu66tco40wNgzKP0IB-0QejE2QhQbaRjHEFjE8Qr10sI-ycK1sZ7bf4Km738XfcpQJ0CRnbYhJfiPT4n8xCGOsKQ5oP6tjfFzZjCu28QgErmMwgPMDkNre_bkHss-_uxH-Mwfi9J2j6zlp03KrjJNF2u4mxHNg33noTirhn19eAROsS-ZWa_35unZl9B4Nglst9afIpNdJFmGWBaH0mggS5-NuQ7ZHURzio3I8Kxt4llAdQ-VnjDoGavh6kpN7cjydOe7seS8ZkiGHobQhwtEQCqPzelSODlSh_EsheBZBfx96uRj1NTmRMdL6ITFCXtHOS5d6rj9q1dymxaim298RlEJ8M", width: 3444, height: 2583, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106119980068160007515\">kaori takahashi</a>"] },
            { photoReference: "AWCwydgtI4TjRU1jhViUaO4hdEQOeQvpZ9tCdIWUGCrLLPfrQjyJzlPwo3z52IwbN2VYPzIHZPL3IldTZuAMbyAMmigWSJQtaD-PwxoaDu3-G330mvbu9_5VEco6D4bT97OKCQLzAPFC-fqQYvi-NwsphTTb7eMerql2mwKBLGaREBA-BYZAYduZ3LtlnqTMWWkQ8zwOieDc2AXXXEOqWxwrLuAsu-xTozzk-2016jsgZiK111YtR0dWqigD0etaT0nHNbcYGV6xks5CUk3GE4L5G1UtHCfzYbf9yJkS-JNhcRNpGHES3CEGQoLtZXEWVNr_ZwxdeMvIaEe2C66K-IZaWpUgSQbxLnTH9rbw4Hf012AWw_Lhb4OaljiHGWnZYJlTPT3oJKMquXsOrqEEJUG-_2KEdCkhW9WJ2c6p0Z3m_s6AJg", width: 1024, height: 768, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106119980068160007515\">kaori takahashi</a>"] }
        ],
        summary: "친절한 서비스와 우수한 품질의 자전거 대여",
        updatedAt: "2026-08-16",
        highlights: ["합리적인 가격", "훌륭한 자전거 품질", "친절한 직원", "수하물 보관 가능"],
        tips: ["장기 대여 시 유용함"],
        hours: "방문 전 확인 권장",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒064-0808 Hokkaido, Sapporo, Chuo Ward, Minami 8 Jōnishi, 2-chōme−５−７４ 3F", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.hana-cycleclub.jp/menu/rental/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8350921226505461762", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%82%98+%EC%82%AC%EC%9D%B4%ED%81%B4+%ED%81%B4%EB%9F%BD+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "삿포로 관광버스": {
        photos: [],
        placeId: "ChIJWzLu6Q_VdF8RNxnX8Hty_W8",
        placePhotos: [
            { photoReference: "AWCwydgT6_pxBHpC7LE92_RxVn6iCGESCU532-4vaoebUa4V8lgHdn-esZ7bYUHbFKu4tqtHj3WUO-IUsJnASodxKi2W2LsJtChdeMCRsFq8ddhgERp4AWe-m2Wl4X96tW62MUa6JLCvkdgwlfDIorb4cGP7CNVBar_-VP6DAW_jiLMhpwJRVpcrMnBocBAvgG63duwur9f00F9htHsE24EaMJ28GmNaFgkcBRJ8yaEKkTMInwmJGSlmD5ehFJQSsI_aFZlH0WTlrUSUqkHUTD8idZLKAThieaoTwbKBz_zoNwSFF7YDYKm8pIBLxjeb1V0EGkvUM7JhCGRg-fxTrqnvMS7qlYmp6LehkwxCizUzDiJhZg8qI-q57ftnFjrqAgYiGziq-0rcEQJRjmZNOpQXaLKOwH4PcHpMeJtufhDVUo2_ew", width: 1200, height: 800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117818191628352294728\">札幌観光バス</a>"] },
            { photoReference: "AWCwydh3IFEZ7HSibU0-Wf3KeedwnUn4xpO4o0dYSlWU-JHbHgX7Ih0NR0-_1f1YCc4JtK0VeggHNPaLGpREJaknIJkPNi_SlM8jQFOJ5fg60MTYHHEmkrVJwoDEk49bReDdzzryutxRTJol1gMs0A4zJ8Bt__93V6MS6SSzl3a-XLLgdiWjE9jVYLqwxykyQDwR-Wsjt99SmAjy6JrH35RlRx2gK-E15OVxgPN_0YcacLUAddJtUbef5KbsSYHtUTssTOrNH6mu9opr6ljfIwZN58Y79e1WKg6MoHgJBC1Y1Xw0Js6dKffqdx1dZ39XAXUHepgxSqPD2-WKAx_RyFEEwM9n63XyikAu64idTnEwu-Xeo4OhRXogf0rktI0ikdR-SZLerEJ6Q93cTAwYQz4jgL7xdlkfbetpMQ9ZoZRny7w", width: 1200, height: 800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117818191628352294728\">札幌観光バス</a>"] },
            { photoReference: "AWCwydiLbetHfFd9BtbHvRYlAyCSp_F7PAmEpBgFkrr9ovGWBYVSP5svvVoqrdwQUV01KQIYqpw7XnomHouA9ySbIlVEAqSxcxzW1OG3UKDrGrltG20ElRv_LF3ABX8lI9Xq-Fb5KOjOsGUxkw_iFs-DPg0LOB1jVJ0xZL1EP8VT4_oBM7QZXNrlbg6vIcmtfPRyhQosA4e4cnAWGNlj2Gu3mlNsiiSjaBWMYeeU8CXnqWBIKntZSDn7E7cHEZEGgEcA41xm58uYdV2TRTRmFvpWcpQCUWnH8H1AwvKJPg2Ixd3h8JLi27qCu3cFptu__7KxbdGtixkozT41_noI_kcF5y1wEvQXq__-7pvp50Z7lGbrZnhwtfFJbit9jbcTM00e7z3IPL_z-HOg45cTniV5OqmnP3QeHU1up0TUDOXgUuyvYPvE", width: 1200, height: 800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117818191628352294728\">札幌観光バス</a>"] },
            { photoReference: "AWCwydiMNMlMrhq_EKwaunANY8lx6kHHPodYVC2P4MOzEv3eHSuAR9OnzyMglO1Gmdd-g8CpksBo8x3QcLvHHMml5qAGwPNTcDkbqEJeyzSEWMo79_GF-GCqioq8s_ThpfF8Ms6GqXcDJ5aDcjtqOvhapxVpc4oJQBIIQd5kVikktpq125ftNsvqOuTdLTlOrqXIog6kSXeIJH5X5PiJiwRyADBqRqo5NCURlamjKYRSipFgoEF3917kXDN-GYU8c--i71RSsoQ1PR4hq6xxCXLSaIPF5c3XNZI8i3fMJoDjOIy4NxEDJnDTS_FPs0GjxonDoD47pdwaTn21Qd3vgfIU1y6cCtKXiFjsXTGpc_aA8QrVF8Y-gHLe7uWdmb95kVhjfayG5LWU56F39EVch_UJWykZSCyJ8vhFkEpmcKq_Ddo", width: 1200, height: 800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117818191628352294728\">札幌観光バス</a>"] },
            { photoReference: "AWCwydhSzx4hAz0FpeW3XCv6Y0_ZXIrogVChC00JKpwd-3oexcasDJGBe7GOKCnt1Gfxfk7gBA6x4dN6gRcJFuXKZN7T8kRakPEDNhftuZX_kk_ZfVGzVE_pe9OrB_oY0TeZ_R2evoAXrK1Ide9l8XSjWBWLkp9Y6cnrxqZhP8vPgdZw3Ud7CacWEGuOf76dn_v5fwugXLjj0V9f8GtOOsvD6wd0LdeH5zB8C_Bu_aY4kkG7TSAhAxPJCPYNUV8C203QBJm07Nlir4mKyg2zXdH3-EqFqZH31AST3Bfo1K2SjRhWIFDVaD6fkI1-ALOaAfvBtrMHp327g72RpDEhm3XoBWx0fqC4YsPt1Dewvy7XWFFKQVJmWRJNqVS8gn-YdVpn5QPc3dkcA7Yo5wiSTwc5EuEAbWN6H_zlkBjaGi3bOYZJafLz", width: 4000, height: 1844, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102210483929722990755\">r w</a>"] }
        ],
        summary: "다양한 액티비티를 즐길 수 있는 체험 시설",
        updatedAt: "2026-08-16",
        highlights: ["스릴 넘치는 활동", "도심 속 어드벤처"],
        tips: ["운영 시간을 미리 확인하세요"],
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "9-chōme-1-1 Utsukushigaoka 1 Jō, Kiyota Ward, Sapporo, Hokkaido 004-0811 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.sakkan.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8069731983964969271", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%EA%B4%80%EA%B4%91%EB%B2%84%EC%8A%A4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "키즈랜드 트라이얼 아쓰베쓰점": {
        photos: [],
        placeId: "ChIJMajq-X4sC18RXKtZe2sl0J8",
        placePhotos: [
            { photoReference: "AWCwydgnzsOjaOT7kPBf0LignLWmy1h9pCmn3X45BIiNqfzfiuGdcY_H_l72GxGFGu1TCp5jfxkAPAhEhZ7h4pvD7gfwBBIa6zvy376dcUstpukbXi2ef3-SdH5UBGkQs0yqUud59mmIJ1QM0qkUw34NaanEjNSSVpuNfA0QjFZoNxQAMNdiUhUg3cCJ80YFzTiKYGk9hLArFJ4Qn2mIvYTmxBxQJKA3I6_y1ogkNyYVyXdaL-KnU3ue5r5KRMlYRih_3KJsL6Vfn9mZoTGsB8rn0kzMqxC8mB5EamE3ahG09v4VIY_234j5MG9tGB9p5u1IugLu_qG1xgohh95Eiw8XDlWK2YjLFbEG9nNgSiaqIz2lpGBz3EaJvp24PIxRIsSxgfNb9JsHV3vE54F4XPfnMrsKGmPjSH6RqeaiXaspjMk0zg", width: 756, height: 568, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105763769780197286944\">キッズランドUS 札幌厚別店</a>"] },
            { photoReference: "AWCwydgsTkwFBa8VDoIamjq_HagJSG5ZoH8r6MGMYAQdYdvw3kk8GAXHAy4oZ--tTZSli8VCwXfwphHE6orQbbsytQ-QmMimoADr8N5QbQXHFUJLlFA3G3-wsyA4NnReNJuqFtZRpJSArJrryJVrHAdtaMhW0OiNxHwg37gdWgUKE37-GBpZmvclDpY50HyYRkwq4TUojlzQSMNs-oY9Ie4TUG9xuljJIhFvNcq9HrPCmWsFILqlX4fX5RW9eYdjGNIRcZlNZ1yISu4YtGHFtdzBQcM626TM-cbiZWyoFXsI5rRKYwBRbW7dj-g2On4zK-A5FXRB3LdGVmhAi8ZTWPnwnd7nnExiQlLSlcTYqhKL8La7xCGGy5wunrS26J42_FXQCgJoIKUYJw73CY0kp8K_MhH4R4ZLCbW3M19fo27MFf9_vaI78E1sCrfqJcJfPXRK", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106761320953223676593\">JIN KUDO (JAY)</a>"] },
            { photoReference: "AWCwydi14_DOqcUclKVWTxuAgTWBrK0IOwSwtZawIKkJ2tsEPewmphSOrIqNqnNPHn89UeavkViHoGu7TVId6MPtE-_UsGR3HrQYuSMV2oyrFVEPrtfe6ZE3yD_jUsK1YkqteGcf6al4yXgfL2ma-uzbdAMV9tZtl0c1im_ayBYO93eJAgZUiAT83b5FpYAY9rEPQfA-ReuMlvP1G5R8Qc67MAAyGkvOFkFZPZfkLgJqh7RtI4C6NGRoDtW7gVavTULhZ64HvcZJz0AiFFPP5pnrVoODzmIMdjNJbxEJFLo5JWTdu4r2-PHDkFnum66QJgFO0jfRRcAyDoUrzb-_13KhK2X1XKdl-A8uHN7G4baZ59dgir4Mxh7aMVNIrOhj6DdOMTil1gDJuZsHgQcTcby2SdeY6K5NNwVEGpxg2BteDeNUnbG1aTyJJ7BQYnUwxGXN", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106761320953223676593\">JIN KUDO (JAY)</a>"] },
            { photoReference: "AWCwydgkbVHlZOQs4D-QZRIuV0DkHJ0ZQJiHoab3RCUVah0hAVc3uigaHMt5Kdj7LTpsx-qYLOZ8hTtVxRfJvY7sJ_MtAXKZ9iEt6BN_uYIw542oHDdAjzAflTh1YG5XljeuVb9zbadmx3mUkM73YSWvbaYKQUVSbE9syMei_z2UkcLNcxe5Wsb3_1VxEWj_2g4i_I1Wdn-9h3MgKKQHuBsckeRM0wJk0As1ElZTuBKOWS29x2LQzNnKqK2L2TuWggktkLZU2b5cXfi3xz_OFwFDhvf4My4aHL4oBLHw92yAof--184JVj6l7EhpDKMe5NoUgwBRXQJBMM855aWt-V9-HMDqtxVXecn0pO6aiBRaSY6td3idqDDZ-b_RWeH4S13ar-_DW-T4_nF5-wxgFBn53wQLPJ4mEVdwwzA3JDY0_oRFBPg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115656464020572143224\">momo taro</a>"] },
            { photoReference: "AWCwydhT1QgKltyYYskPrNC6kLE-FlkxyDgnXm_apDi5LeqHtvHJoUJugSxyRjQxqzvIvDTTDtrsPldVv3QQmSythpBg-NcUPaMfr1kpCPQ70GtJY5p628pYndpL3MZBXXjwXwNigR4bjtXA_vIM9XZuFnRxtVbcJmDorNO8qdDzz7U4rHLtagCBGwgPeKcIIPFjz5G6_lxTIgE3X7zYFc2geJ15lWOTj345gL42NmzRF-KsAFuV_KGD1qXyc1MuFd1aQBQiBWLN1XKqPxLhWp9K16s3QM6WuxDFKeJyFeHO_Zq0XkgoPcDA1b1PnLzhBXEvEDGC0N2ivYqZGhwnWz60D0rt04YuwlIIGcHE5l2CZcFttPHFLGqx2LkqYBAEvVmMmf3hlX3h7sekuF0HFQxOXpbgjmVE7syn3713STPfSIxH_1d_", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115656464020572143224\">momo taro</a>"] }
        ],
        summary: "다양한 즐길 거리가 있는 테마파크",
        updatedAt: "2026-08-16",
        highlights: ["친절한 직원 서비스", "다양한 체험 시설"],
        tips: ["운영 시간을 미리 확인하세요"],
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒004-0064 Hokkaido, Sapporo, Atsubetsu Ward, Atsubetsu Nishi 4 Jō, 2-chōme−8−8番7号 2F", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://kidslandus.com/shop/sapporo-atsubetsu/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11515745390747560796", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A4%EC%A6%88%EB%9E%9C%EB%93%9C+%ED%8A%B8%EB%9D%BC%EC%9D%B4%EC%96%BC+%EC%95%84%EC%93%B0%EB%B2%A0%EC%93%B0%EC%A0%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오쿠라야마 점프 경기장": {
        photos: [],
        placeId: "ChIJS_BC3ibWCl8RtUD2j0sowTA",
        placePhotos: [
            { photoReference: "AWCwydjfXFjYdXde01OQB3sNGUYVJxFXueCb8pSRVA_O-ZtlMnCOofYjeR9h_Jvp9JO9gNfSHtc0ZRPTuv7Qt5H776o6lqzB7oQVv_PM7IK5YEpSqvoLxfa0wScd8xJJJa9tVvx5j9kQQuOa7gGj2C6Uh51e3-HdLhg8k-mBRp86HcJ3kJUgGTNfLtX8DEiBVn5OK6hbMFpnb7ffxJcjFLgn5n6smxEu4iUfENpyz15nyB0y-7L3AjgVY4uwzWWv2N_BmfgWY9Dp7mYkdTKCKhOfPPgKq9q2FCzvetSh15K5eGFhtuM5_5hW0oxWJHW9wgyfzC3Hs_qtlgnNURsf9w4Q_-qJ8zPxn0TRb-rk4e5sgC8J7z8i6kN9ef9jCPYwPbCJLqKx6QXCYldQZqHtjXi9o9BByZQxyv9JMGeEgB7wBSyeVA", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114588262802192391463\">大倉山ジャンプ競技場</a>"] },
            { photoReference: "AWCwydi6igYvSS78xszry_szYNfNVDFJaexzuHbbDAFIckPbokGSmNsN0Kqk2dNqKsI9uMqypsqY1f43q-JtEdBfIANGEBHiKkKZuAK0-CnDzEVGyTSIlkofsWVw-vWBOIGUdM1Nif5DiuI7FPzfqZAHHxiwDdcPGFHRhzWIsnlgnfcqkc109J4U_c1ZwBwIdOSvcP5DkdTjSSSxD1YOK-BwitbEXX5G2tgjN0jJEH-RBCazmsF-gLgb57W0NY2DCHc9uqv5KSWj9CfLGsQFs2cbcLDKYUsBVN9k9miZr23mIj7HZef_fk4r9wFfENu9OwAQ64eLWbjcYOT70j8r_D5VwIdWFhT7jTclAly-wwGYGp5BXbUGiN-1Z2ugFoDmLiSe_L5fnQYPhgb4TxC_cIkkgXrNit9ohNidXTqPeWty_NMhfk1_", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109165535766903645735\">Naoki Chiba</a>"] },
            { photoReference: "AWCwydiz4ukHwSVhopgMnGaTBWvlfT6SJ9Z0q5Pqlfw3_RXCsr4lW9GR91SXeMLXQcNSJn435njzPFLyr2CqrCR5IeDlrJhnnD833QmCSw6r1iVdL_ayVlWoJiPDI2Jp_NZbvs_i6_mV3oddCflHtbPn1Z3YV6vF9gZz7rW4HOsh2ov9vD3R0fgoDI9Ub875jjp4JnoKXr_W4Lget_u1USc0d03yanRnvWB3VMwK5OfbJ98zJtKi6xr6CdGZa2kybQye4My_5oy7RIaxX5dm1SwJCt5XsA2pOglMZDh__nj5zfOELso6XJP53LNze84q-o7j_GQcf7ouEpGCgOnX2O3ytcXO5JoHbXEuP6ksFrZ7qNXhNJaw0VVcwg0i79JG0-0EsosAOAXX2I-cCXXTFhaYyb4hf89RDZSCqGD80j5mrAZ95g", width: 3152, height: 3379, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111714837881013014350\">kazu</a>"] },
            { photoReference: "AWCwydhUvdIAB2AldSZxMoe8rrmu_omeNxHzRazLUuLw3dS_w9gR2RUTBrxH1KgOSrFVoMIDwCufpa6Hmh4S6YjcZSBmBEJ1hLe7KxX7_kH3c_OL7qRmaG4IYWXq_z7J0WbexBQt37g_xf6PA6jSUerLDtzYBKsvIN-CfKCqFk-BIOHza4L8NBxi0XFO-mjyygGTjA38R5SvmtjGk-5_sNlMTa45U9ZfyJSDepRxEPBvcwPsAikF0jrklWG5tK9rf5DPM14T0f8_oOJ_cKGPVCjue5FKsQ9Zkf18EWAwH0aVOH8yvqomiaH_ImZmAYui0T5XXWYp9dFvQa40FIFe2MEaDHP3g7AuspICyWNgmROPTl3QmqwKQkP06UR6SUY3eUCe6mgB60g3ZWX3sAqZC3lMYH4KcdduyFSD-2lcm1f3xuCs7g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109272743018364168458\">莉子</a>"] },
            { photoReference: "AWCwydg2LTBVCDXdLpAV6wjSIpNYAi-L8O9DdOeKtnOTv7-jMDv2OyG1q9BOtZ5J6a88mQZR-IfrlL5_fBNEtw8BSPbi-K0BUkO-U6Cwkg_OvNtytH4jRrezpIvXArMG7Tfku8MHnFfpRZ4_8rSmabWCrcy3tV85tLEBMLMiHR3NrN5QN6KpKRucs7IrVwD_XxEiOJ8cP_-S-Ohjap4Vf7kZaPCXJ8FTyNOjVo-R1BijHgmphXVtpNe33fFnKEh1CjGhWpUQT-2VgwvrjNSp5S1jHoeaSYCbmKjz22lbwc8jRwHjA6-WsDJu-uD2iP7Z-RsXLb3XoKtttMaO03xuRF_XHlQgaPuaRlTtK1EyT4obbjZIkZN_t8Qo2K0Po5fixs5HdIt0kW_S6fd5Ui9t0yfi0_KnjCdwc1IjWWT9mN8ZDpgKRw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115544521591548629581\">KJM</a>"] }
        ],
        summary: "다양한 즐길 거리가 있는 테마파크",
        updatedAt: "2026-08-16",
        highlights: ["다양한 놀이기구", "시내 접근성"],
        tips: ["운영 시간을 미리 확인하세요."],
        hours: "월요일: 오전 8:30 ~ 오후 8:30; 화요일: 오전 8:30 ~ 오후 8:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1274 Miyanomori, Chuo Ward, Sapporo, Hokkaido 064-0958 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://okurayama-jump.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3513133489328636085", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%BF%A0%EB%9D%BC%EC%95%BC%EB%A7%88+%EC%A0%90%ED%94%84+%EA%B2%BD%EA%B8%B0%EC%9E%A5+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "AT 카약스": {
        photos: [],
        placeId: "ChIJ9eSavxorC18R0nxuK9LeVdw",
        placePhotos: [
            { photoReference: "AWCwydg9Wzs2hE7_X-DdYQUswa1vMrVLcJOj7I47lZOWOKeM9H310Wgr9pHmc4YrcTQy10ee8ubV1HY5w16Vuzsv_c7-8fPTcMjXJFPfAd2rtkg4VD5913xbvf3eegqax3ME4QgmJoosfl_G5LPzSz1iUhSERZvLEhUxDvymjEzPq7K_sH9yeRoxvUgEPbwS-hXYQyInzXaC-rRwFWYhPe1Ng7N3VW1przODTgDaQeWwa1l8nMEyaqZN4sNkNsn_WlZtSUNKfyaAbBZLz5hbyLBrhCJmQBii9pJxRwGXi6wPYCgTPqSmrw6sKAuKUqiUjDT644C1Q_P88kU_pH-ZahDEX0FapixZ8QFgnFD3QWYDYGZhPoojgZLOzdPbVqkIVjf3iyHk-V1AZ_IfY9vrAkxbM5Kv0SPK421Y3eveCndp0tA_LHwn", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108041966445839635859\">AT KAYAKS (エーティーカヤックス)</a>"] },
            { photoReference: "AWCwydijyATkqLt7BfLSNhSCtegVDg6Xi2ZOs63MYwsuSM8vQsDhar-F0bwZ8olM1f6EbUtb8AhpzfjMbkmZDGSOfdWSBNI9lE60s-oPnrnmz6hcqndwSntElqqOdwLlk3DrVt4zWGN75m798itL84yobep1BVECFMuiGfHwhiK2-gAR-fQgbcKHt9gReUfqF4CfUQYLgy_yhMOdZtfoLzPYoU3SqDDvnlAqZ3bLu2AQ7UFAW6-e3V8W_ZFNi1twjvWdY_LtzG-U7f5E1PajkEGKY4twrTNv4pdSQo891YqxiFITV_AjmFp7_4G2I04vS6AFO4cDUrpBaTU2lyIawjOVDJn2FLEcNBS1LyHqQNmOTMiuc6UPWfAOzL6i18VlaUV736dYUMCw7udxcpl2YIiaq9Z3Ksi-3ZQMjB_6AfS0L-etfgNt", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103094967158123095342\">Marcel Lam</a>"] },
            { photoReference: "AWCwydh5yLKL1Aew8GYYbyolHFezChRVF5fpG-5b8MZB5BIMlZj_0RMIFc6BOwOzm4jks1d_kIJswC0EApcN3mfObtKwj86Ru9L_Gs5miPa1zIPQybHOGM-0ygjFzsGsO1FV3PdGKlOEpHZMF02o-d85ngrzGoB19t92EM6R8REgMKfTsR2DhEc-pWh50q9QgB9yMzM5veE8h24Q1oThai0a4onNUEdpfTnAdvn3TSZ5QFaF_fbZrGYHCM6wpoHU_QwFtQg8odS07s5jgwUjhDAPI0G8BVDOO2P3z_ViQ3qMtal2p_k6E5IWHWSeuveB2EURKJekPQXEbBKyeXTtsg8hHYeT6R10f7O9W2-4oYnlsxUeQs64qBEamiv70dTqCfRmF4MNd_xfS80XWRPApDztaD6RSJDivX_VqSkc4FB6GWGUvBNy", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116277400920462183672\">フーシャ</a>"] },
            { photoReference: "AWCwydiGNbWEUIQpZsbZgCh54Qzmdpw506hSMqAJ7A8DXUxDxgOefy8u-iRzz4gZ-sURqN553NgGVUIWr6PD0f05klBFdyVI287Exx0gIW70iXLakbPhR5vqcgi4gklS7p9TpLJEoRBMj9fSgKbIWTwXA4CH-b-MKarZBlT5MV5eCl9nOMTq15wvZtBiaJgxEAGMMTIZR3wjRQJi_FUY2BASns-PmAOiI-9Ovmb3kg0xsxVuhBO0Ehe92m9npKQAPL0zlKoKRLm-k06SpXQrnwih-R-IgMvZX6g5y6aChEmq_kop-MUsk4yNCIEKGVg1Dtef9UMYG0WYUMY_nAc2hRfHSlZjKobT5Oqd79YycmTaK0s614bk_jQRoxIqq9vaPRnRzDzWY_1H1WNU-ExZwGBOyJHaGnOZZptQrkvqWtUFF6g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108271917746785857321\">鈴木佳子</a>"] },
            { photoReference: "AWCwydgcofd207ySGx_uFyL_Z03Y2kle5mXhW_FCSWwG8wI6yPCVcU1Rpn1_2HIDwCgNduI_pEPZ30ZXBKY7JB5dCfDI4mA2TN6Kd749Ze2iu0QKY07rHN_omR7UCJai_rz-iKjjTqXyaohLY3U4ZaGofdcWUKu7lQRD6ye8xTV_bvept3zarTe9sbhNoYK_Pn6xlyS4Ys-8LWT5QAuMrGMrWLlbKMs7a1cUuiWdu0AUXHsk2KXyRtXs4m-wh_krdwd8RgoGAdVrTDJuHMKQfWCn_y_NPSAzYlezao0VdYnXmIpdjO5_mdEICIdBmCfixbxVbi3qqvYzF0gLQmuh7uVST88Pqrw1u9UqkhZ8dF1OScapC7RmwwYVLGjXV1hY1GP-MLznb7hL4ymFA-838NpvjXaZDqmpn6_J18ORiCIwfL63_On1", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101834426903307656172\">高垣美穂</a>"] }
        ],
        summary: "바다 경치가 아름다운 카약 투어",
        updatedAt: "2026-08-16",
        highlights: ["환상적인 바다 경치", "가이드 동반 체험"],
        tips: ["초보자도 쉽게 즐길 수 있음"],
        hours: "방문 전 확인 권장",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "5-chōme-14-4 Atsubetsuminami, Atsubetsu Ward, Sapporo, Hokkaido 004-0022 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.atkayaks.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15876841055617711314", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=AT+%EC%B9%B4%EC%95%BD%EC%8A%A4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "크래프트 공방": {
        photos: [],
        placeId: "ChIJ17ZZYUIrdV8RGKxBWZlsbPQ",
        placePhotos: [
            { photoReference: "AWCwydgzLLHy7VJgproQDHcOB_w6iluc-wZv3lBhNCyvfi8ImAvOFdaWtJZRTkb4zEjKUfrAA1mOe_jbRDYZLPNqeBkjk2PDOCwX7E6bZfRIOT8Ci7VBgZBj5XPSIi5eBbi_E-sYzpkHaBB5SN1rHXDgEn3r_FXV4OYbMNUiYhulF-ao_sWnHQxj0moq3E_GK9VOEMbKNdbVR29NRcH32G1DzKrK8HJKbzszLsTDkDeH2300vMfWbVM_LJ_jbDbzNoHhp9DwOFPw7qfgQJkoFIKxgP21QhPzjsHtcL8188WlWhf2TZCRV7Ts2dbnk1V-NMpUbpn1_v-eVxWkzFAlX_eRZEJ2nSJq-35ltULYyGQXEWVW00WMwuCBf-a2U_Uz3l9teli7Aypr5x3Im-cIudXMVPtDMw03H5GSX5DiRXY83oQ", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116921254879016316885\">Melody Tu</a>"] },
            { photoReference: "AWCwydifvX9C6F8OmC7f8J0oyZc7huXkG-DGoxFf6sz6oHxwpYPKS6yHqqzPMuvJjryF1JEBG8z-GIU1P_BpDBGtE6g-1hRy6Wn2WycXfsrD1yFhOS7SqmQpeRbYs130w5UBEh-1BMyJPFpiDbf8li8RuLyf61hR6rg95h84ewsjH--TzFvWvKA4jMCKesORbGwd4OiLFjpAjkQWJrPRbU3Q9gnVTdGbz359ydUWC3C-RVWbo09fJH8WdYXE5sbgwGYdxH37UpHPk8voBv1v_xwOjsIy0TQkxETrpwN245D83EN7kXtjH3D9lmd1G7XQ-MVWf5HOZThF23iFCoNXx_9ku8Zze_bRCa4GqZDS-wvaMsb5WwybIhN_nZ0fUhBNHJIL2RvuKK6F-K30KErN_llgJEnz_RHgIeqofDPUu2NXMW9rBg", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116921254879016316885\">Melody Tu</a>"] },
            { photoReference: "AWCwydinzDcK6-5COfvyvHWiEUNBhEyqoeHXYVdKvM7UQlAJEiXM1nyuUOLxKazfSiIZMkK70VHw3txg6mCcIrp4K0sd7tD5krQorG5JK0KDjDHfMPj2iFP6Y5SpkaeU-wqLr7p4yglec_Xs4uVcwkLG8-UjE9WQS_8Y5BY8Pgf-02oxfRRAzXB4LjQTtOU2THf8ueWcOigUxslIoAB1XGcGe_s_yf_aOASuoJjBluPUFapkmSYHOMgy487I59qF6DRwB0gJQhpUi33VJAKhco5LKWUvrAHQXY2g52DefqjHOQe5lZRSbZok3UltNxh2cJkVkg-_MjZJykkFg_zpdyEOr8BqY2toBXyPeONI8yKR0eKEFspPQ575_lyB6FMAVEo7WNdnpDTePLKv4jxicMQYwTDE470fLfibgSwVDQfy2RLILd_EMTAKTqvsMN9pONBw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103592875627449487272\">K. Jiyapong</a>"] },
            { photoReference: "AWCwydhtGeL0Ra-iGV2WlFmGBUJXjbt3pmpQSoIkbKHwVYBgzkVqj9J0IKVUYI1V0V4_xv9apgvHTkSLZcmnI7U8l9LlOqWcQBZM6NpVoRaiHgnjmq-7AWdQA8UnBIVty58602JN1HyZWEoWmoX2_aF6F95cX_Nn_CRwxLwqB5wY8lwpYHFJBKsVpzni-RoZgk0jsEF8NBnZV8fALvfLBRj91LN9xbZvL3jCzVaxYK4LTPFlO3avQUfpe4zFMwvP_bP_SaabxXWTFWS-JtAx27jI_em083DZeybtFzJ4qFKrqAlY0VSbGhecdTpYykkLXOb85XnLHr02LzBpcIzEAcdGod9Mk5AwFOwg4fFgqulWE0przszvVtlvxe7aahnG9U5G02sG2DWdlUu38FahubTyONkTqgfF5EoAdqV84uIi_lOiKZM", width: 4158, height: 2339, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116048544107778136800\">I CHUAN HO</a>"] },
            { photoReference: "AWCwydgJUV-V877cjxMN6O7J8ATyDUjI_DYfyeySNNd162nPlws4gXz8PIUCI56ON7Xsg58SCpylXh4LeYH_iZeuHyIQiQfuf-PejAlVBT2CqBaO2N6tYqm-YOAZldI3CXTrFqmq_9V7nvjKKB-Ej7TeROtIhhobbxKnSV2Q4R0b1CsPhhmmaXyxJGEgMOPzGTTuMtVvV6e0IQ3FIeBTIEFzdY5XxRKflazIVo7ffhPL4PsFsz1mSB9DUxxiKfBczH_20M54fFXW1f2ER2apdR4SXKZakK1kDTgnOz1Ydwon_lk4p3fIW5G1hPrqCMrfjlg8eCWbSTgIMiQKbdom153kiJP7HwGl6bEVOlpevxpsm2iul28k3c8rTj1U3xCzigGHMYF3G3JXXLG4c7Cq_dMKwEt7-xHP4wTcbMdyOo-ItTKNnkmWSBvFu87g_aH-aA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107311351512111386366\">Chie N</a>"] }
        ],
        summary: "어른과 아이 모두 즐거운 시간을 보낼 수 있는 곳",
        updatedAt: "2026-08-16",
        highlights: ["재미있는 체험", "기념이 되는 시간"],
        tips: ["사계절 내내 방문하기 좋음"],
        hours: "월요일: 오전 9:45 ~ 오후 5:30; 화요일: 오전 9:45 ~ 오후 5:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "2-chōme-72 Geijutsunomori, Minami Ward, Sapporo, Hokkaido 005-0864 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://artpark.or.jp/shisetsu/craft-kobo/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17612571648622439448", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%9E%98%ED%94%84%ED%8A%B8+%EA%B3%B5%EB%B0%A9+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "고보 스미스 게이오 플라자 삿포로": {
        photos: [],
        placeId: "ChIJh8QpveIpC18R3mgwcQ7wJM4",
        placePhotos: [
            { photoReference: "AWCwydhtexi3pLOgGs8mttEuj2jBPR1p2gp4LreyQ7jIPU1fOB7mLccL15VWpnXRBltvg_dso2XKierBaBRidwPBx0O4mnFqfZL-kdyCOpT-KX8vl8t14-ByGhtPCpLczZOL_RAhSeyi7LKL8oPruYCeMGSROXR8MRJ9L9XHD7hVyiwoJpDDn27f8zHGLv2iJrNtLl-6LYWbvhzrHYJvUgyXSv0QK9aTBw63QHUKl-4qVHy5Ce6EPqtDoflrkbRPcGATlUBhKeg7Lrrn6mWP9V8954U_3TOlkXgR_ajEFPgA71ZnykDkGXQVltyvW46CSt4zZIN4H7hA5rcfJzKsCg11AiCAlothKtF8NG-TaZ6g8__d_8pgBJA-wKVzwTHIy1YEVjcQhZ8ZXO4q9nwbaLodLi8pFRMcdB0fshYUPJyq6JSiein4", width: 3840, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106603190506545247192\">工房Smith京王プラザホテル札幌店</a>"] },
            { photoReference: "AWCwydiZb6LAifFX-CDldS3KwtC-ks7Bvo0A7hNT0uH8q7KBV6fCUgYEjNPXk_eY8_39IGM9zzqnfAnlUjt0KF6jvn7gHMHJPqzy0drql2bhBKeOOtKsuLvY1OSIRYJXBp7uV3YoEChlWamI8jbZHOHNsJioVhsmFIxoQ9lgKpEzrHcyvdgfURgc_92kmRcBb3HmjmooJbECt3FUuGcN28xXUGPbCjdAx4NprGPWjG2KBTFij62tn0vdGtkQ64uv7p8lx3y2oEYx3o2U_ZHwonMrlzadMEJ5oRbrigA5utLfRQmKOSgAtlZiInON0RTJUw0RFyRdxUkNnfc4WeAx-un56b1R1JDEPzq3g7AcFTCTGmEpJwdGsESGD-S8Hy6oncew0SoXvqvzU0piV8FbwwvC68jiomA3bHtaXnsM3RzIw-FHv2ZxBwQBcSyjH7LVft1d", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106603190506545247192\">工房Smith京王プラザホテル札幌店</a>"] },
            { photoReference: "AWCwydjRpi2wWAsLIUYFdKKjdueHvXPvxqooTfAAn55k-UH7wbrprr3E8-b0NqhB1P6HRG-XCPBjzLpgRE6g-KXpXqmPcmTJE-MP18e_aQugrUMOfTp8G7oBPYDHwYBfuy8INRz7lAASgDM00PlhO2zLkdMYRl4C_A6MblUJmWtTVXElBBGNb1HkFTVHQOv6kQ0ZyYGzqwBgPyLPRHlqq-B-8vmk1TnwEQRGF7awaspvL3WDjnJ_8_S9lXkJXG6c_rsF4l-ZrpghyenFbuCeOeEVGrSGKJJk8QUqXGvIu_1Db5JUHFN0MFXu9QroAGvlPEZDDR7wQdWGaRtWtFHyfkp3q1cdi3n-vJif3UW2RZoxbHHcRhQLvqngdvg0ZaxmEni79FcdNhAHR6Nb0LKJqCznvGSdiaiyHyWLpZPDHLXCuwxJmo35lzt37o1icDGhnCuc", width: 2467, height: 3700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106603190506545247192\">工房Smith京王プラザホテル札幌店</a>"] },
            { photoReference: "AWCwydg8Kl0Hm0Ql8JT-zPAlMncQdC4q16hUnPKmjXqFDGZiPYf8j7qHijpmQGupmHwgv738lTP6QuMANpEJjxNRPuG4n2HLQHNM_GwUZje8d6gZMu6B0NJxuqLq-KvUYOdt1xOAvMDJIJi7jo77Nn-lNz4MSxRY9yEghcl9TnzsGCSMpAYsrLk1vNegXnOBE5b5oRl5b_iHcGBBPTO4G5zvtcAMCgXZygB3Z3p2zqhSk3Yi-OHIEbTYpOO9oUwxFWBSwDZx-i2GYMO3rFD_9_lFr3qJJTL81uhQuhp8CX4KPAM_29uMzT9qBNlTrakaKmc7-MiMzuvfAXEjmqe-XxDzAyfVGkhy3eLh-wrC2LorXdC3uCSg44HsjJtQ9jOCYAJhstpYD4Db3j_Jtpd9mx5gP9gvrZdz-OsudIdkeXmDvPHHMru0sizz_vqCKAQkb-nz", width: 2467, height: 3700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106603190506545247192\">工房Smith京王プラザホテル札幌店</a>"] },
            { photoReference: "AWCwydggZUUzFjoyFIR6-YV1pTSgHlQEJ1juF44lKeGb6eaGr2VD8_Jyu2cDiNth8q5ZmB5GgK2IjZUfKt-I4YI5dz2ANVa3Qo90uMCHgyuZecaB2DlzmaR3uLl_Yka6L7PubPcQeBr8BHTeU5ekg3IV2Ca8h08Kx_nBM1F9WQggrqJZsnus92ER-tTZyMuyYMNdW2LtEU2t15GFCOU3uwzMPU0IXgTddf-EgSInq-FYfC1xHmiB27Pw8_4V_26wI-w01H_ekqvLZMzgz8utipgojn2XtAEBPF6KfuAKqLwhomKeXNiUYY01nQjQtTEC40KTzxIWt-yRjVpQ_jHaz2j-d4k4af6nRmY8F7N-jCEInFpuGd-OPEyCug5nApYNOI8fzdKtY_zlW1pfRTzMl_Do7rMD0tuJbtArdSA8WNmThOJBEbD6", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106603190506545247192\">工房Smith京王プラザホテル札幌店</a>"] }
        ],
        summary: "높은 평점을 기록 중인 인기 체험 공간입니다.",
        updatedAt: "2026-08-16",
        highlights: ["높은 사용자 만족도", "시내 접근성 용이"],
        tips: ["사전 예약 후 방문을 권장합니다."],
        hours: "월요일: 오전 9:00 ~ 오후 7:00; 화요일: 오전 9:00 ~ 오후 7:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒060-0005 Hokkaido, Sapporo, Chuo Ward, Kita 5 Jōnishi, 7-chōme−２−１ Keio Plaza Hotel Sapporo, １F", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://sapporo-smith.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14854261415793944798", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A0%EB%B3%B4+%EC%8A%A4%EB%AF%B8%EC%8A%A4+%EA%B2%8C%EC%9D%B4%EC%98%A4+%ED%94%8C%EB%9D%BC%EC%9E%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
