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
    }
};

export default info;
