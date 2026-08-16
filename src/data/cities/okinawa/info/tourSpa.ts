import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "슈리성": {
        photos: ["/images/okinawa/info/tourSpa/shurijo-castle-okinawa.jpg"],
        placeId: "ChIJZ9v0bP5r5TQRi0-esrqficA",
        placePhotos: [
            { photoReference: "AWCwydhMZbPoE2agvDlad53VJfQgKW_5TT8yd1iS6D8Deq_n0l1BpUzd8JXLAQu8vb-Ae7tygzsCbd32w6IRklwZAENCYZgaWo_U1TaPncPtW51H-3NuCX2x_Dh6V4RmMLtHT9OBldXStuBI4XyZo2YO-F4vfU5e2ngevWKFnf8yVwjXcTLU7Bt--NtQbcwXgjAbA90n0EziWd42a-4xXaIxdoh6YInNlRGLa0ze9Suq7RjUvXVs5PvhfgCMBcluwLFI9T3bofHJJq2dn0IiLG4mzTlZqUncUqCzM12w9h2K-ia0hmq4VykLtFHycwl5PVXXwEy9vJnsI23eXKarC5fQefNvtgONzq3zOQrpMAFDqIwZZzqPCAXPtp4YpHQ8M9eo5S3DjAn5RBeRBPjm_q5ccI-Uq8LXxqY0pKKeXrUWieXiyllREffyCZFE3n_9nWE7", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116999157415590170885\">H W</a>"] },
            { photoReference: "AWCwydgX_WmVy_AUw7wqiHFF-x9EFdAGApSdbEjKz7cZ83ptm9_cn6y0aWtNBDZT_KG0aToFXLc8TxQEUcXx6t6cLXfqY3iGMAthUP2m256OLFt3irKZVx7L9Lz6xEieNDYXGQFeFaF4J3YXnQUh_H8i8ZwRIi0zn2B8zq7QiBfMWEnT5xWjha5vItzeuOchaZSdsmaIC5K-lQgrjhe34VL47pwQIyvmDtLPbu4d7vxA50rl873MFMZolD9-POGTkXWi_mhBM6Qp7P-iK_ZrQe01CI_6CCrT_79QuJdDmefwTUyv9-Xu89cO4rcbBjevmPWyjYzhT6yISCf2twzPS4VGUJVUFx8fPo-ORBw_brjM9esSWw-UFT1Me9mTToZzgruhZ6lLL5LsoMQl0SZzClIkhvMSN4Kpj2_NNR1Ab1SXC63PoA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112918239245186394414\">れいひろ</a>"] },
            { photoReference: "AWCwydhkhdDo81_QNrdt62utlSeRKCR3ePo3Pf5yCi_pz7ujoFOGBKqUan-Ct6u9-8F2v6RdnzpkW02KgMdrQa2mkbVaiun6LYIZzHyk96E6AiHq3DUeJiYZGiudXRFRrlwBeh-cGZegh-PFbWMBTkjOFR-LBpzSfPWmBich1NUOfXWozcslZeydzIxVUCckjq09r64N6WpOxBc20jOHy5-ZXbv9TAhP27A1KaZfDFFS4WXqy4ehvJe5dvU8RpxFHSQgA1Hp1wBKPad1nexNPTgjJOD5SzdZTIpLkF3aa99IVeITBeNCJFucyzKAL09wWjHOaoi3RzF4VUlIMNSSV6f5nq63CgdUbZta8ZKzfKaTgPbHHPPxMr7AW_214eu12tzrgDIMgQvu_sPSEXDbRt6aU5ZxXfuc-d9QoW0Sbh16snU8TAk", width: 2119, height: 1436, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105848412852252178536\">Kit Tam</a>"] },
            { photoReference: "AWCwydil822xaQ1MocizX9ZMt5Ivq-LVWBR2j5QCp6Wol8ODBZn7-si98ksYbRp01H5H_GAiN75qcNnd2s3xi6oTg07aOqWF2bIvuTINFc4NDiEYrHyb5jsWRnUU4W_VxlIDJqS6saJJTIaatpTpOEoNG7_Si3T4mOVh6vE36uZxnnF3-61pzKm_mAULR1RVa49sagzyqkDfc8t4PyJ8Ij1kR0xVoUiKNDSPPjxrBZSGr93nn8fuRQ0btnMFrPB4fzxvdLVAWbKBBOjK7H_mIl0AKV7D3aq-aTZdhay-MXyfnAJbpBlMhjIeAVj7cSUYtB3YC7Eh9NAUkAOvUB5CyTaGVd09AHSSK3Eyxj9Xw0mY4NhZcnVYvIEu76chjM7AgfUVarPuxXI_vt6mhoN77BrcxLry1wFMS6b3nEB0bRGsjW6KRw", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111445541645711793538\">KUNIHISA N.</a>"] },
            { photoReference: "AWCwydiuQnHR4mePNTFfQ3xnHv2moMMAp-rireleC1xAQEIFidyH1FSljYfbTc_hQPODuPZv0byTwMlPcqPIrwWyZ1Td9kSlGIM1-mNlo7vWs9-uKoQtU3KM-WC3a38Juzt4QAIYbblRpCVOjF7_G9cQZroR5wZfU6InkHJb3OIPitr3hPVMDr0zkzNwHU2IGgMSO21aaKI7VfEBYRCor4eWgVVmsKHJbnM78kCW6T-Ruz9IPV2T3chIzoBwhwS3E4j9go2IJXu4IXP17e_xBLRA-wVnjwEPHZ7Er3O8LN4hTiEVwWoOZfeglD40ZfDdN9m70Jr3u6MPnkHkj2QYQx1couAUmk3T69rYbGTNpTXBbGglkcC7rMiHwyUDXtf-CkgWYBvNlzI12o-GXQ-40LJcefGOi8leu0krXdpNPe9HY9KOdmfu", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110276083843058000225\">池田桂子</a>"] }
        ],
        summary: "류큐 왕국 역사를 대표하는 오키나와 핵심 문화 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["류큐 왕국 역사를 대표하는 오키나와 핵심 문화 명소입니다.", "평점 4.2", "오키나와 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:30 ~ 오후 7:00; 화요일: 오전 8:30 ~ 오후 7:00",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "3-chōme-1-2 Shurikinjōchō, Naha, Okinawa 903-0815 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://oki-park.jp/shurijo/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13873795751300976523", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%88%EB%A6%AC%EC%84%B1+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오키나와 츄라우미 수족관": {
        photos: ["/images/okinawa/info/tourSpa/okinawa-churaumi-aquarium.jpg"],
        placeId: "ChIJPZ5hUjH65DQR_p_dD3CmCOo",
        placePhotos: [
            { photoReference: "AWCwydj_dJrQSnPc2ROCPh5FroZqM1MHQIlapMw7umDzfvQfUlMlcE2kW5IlqPIjVixHfQrvEF-ha04hspgEwAGc_NNt0W9SfBCA7lcUYZmrShwzlt2vj2n3YNeNFmdCku_AksiTtfVJgzYSCULd2eKpECM6R3Yl4bS1XRpAL8frkSazC1rrc1dsGkC6PGmgsm4VxJxkWrwxa0l6S815Mzjw9ISVMeg9jeCM6zeVHtHTDq3u2hSRrKW3IvUJ6By9DWkL-Af0MbmGQKF1FaYNbapvXA3Qb6no4XBINXMxkOA_uxgHW_kBtVSd4W1OIhunuSn4h2X4swpR_VWP2GeWhHUP_ivlvqrXKzbq-XRrds7uR86OYLzEYUpRhWob-w04wtPQRXmmxIAUHhBx6fy7OSJb7mIQnN4tZt7o71YsmOvFDBDoDwalTA4frcwtPB9D4M1o", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117347362467215615955\">簡郁中（Jimmy）</a>"] },
            { photoReference: "AWCwydjMZr6ezL0IzjE9w0bBvYGBioIDioO23QbNJ0829IFF9zUOq-mfp4bw3iye8d21XKiaeTviibry9IlE1mSfSvHKu-HLwK51xbHH77soMb07yVUm-nxV00CeaYQlV96-t0WmNKqPkWGNzckJI5QPVzoP51a6Wq8sclx0TSaQIJErYK5OoYoYmlzRpqW_FntzSWZjFPwWGAKjjrEp-_zwIKXCVbJ74k5xQy6KAFZeMJU4MeD-tnwJ1V0J6O_dMUKNLWr52m_P71-u07JVMYk_T-rclcKTBgv3-FMsuEk1X66MN6a_Tx96QsBKY57DrlgkEj7TD596q8ZiZqS363ZSXB_qGGIFmdI4zdmmKoTPOycN_jMkFrYaNN85Iz83sfKFDENgwNEidkLMWtcSrHjqBbbZeEdDUwrG9azLSrzew1_rQjm4", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116701380451246033454\">竹内直子</a>"] },
            { photoReference: "AWCwydgYN9770PYCv4axdbX6DYNgPJ1dOfHXoDuJYo0T6NbkP7Rp52qSZ9rUMYDQckCLwV5bhVjtXsT-J54dvBcGHqM0uclsgBcLRQAT_9GcM4gbD8ZUQwi0hX-VT_tIPBHUSS2GVsedm8yQEBsOLP51jWqSdAm5PdspD4gi-YZRHd-XhWscJ5S8aWbiP78bZQupNxsiCs5V7WN8AYxYigf-hrDo9ebrePdAhI-88SEadWbTYLNz5_L4gHJKKzgB1ucOvxHJm14a5KFbkBpajS0_hcmQQgJCjCa5xybgf0bH69bu8lDuTFhJG7imq6rFVSnbIEJ3nAFIKA8POiK8FqrIGiRgAo9TxcRqI0LavlZaTJhRoZqI80XzznthuOoI4eBMTK5UgB8EQSC-bnEGNNPI6K1IeZ_q1J8dwREt-HLbwddY1aLM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115891423890310551998\">李修豪</a>"] },
            { photoReference: "AWCwydi7M-tZWWzYk2MgWd6G_2Xav1ZfZsDn9VArAWIZcB2n973vY4g8BIMuaFudAdAXRod5nLVgRXukgZLiaBCFJ2-Jl97ghZo2FnVPBVfcpetoRy-CpwzN5d6nK4eCWjqCVQpzQR-S4LcxvTeftUPmFQN6DcBg9UVBcREaoxF5U2Yu-kpAlKCeJBq4LoA_e4izq7rwjLRFU4TcFZb7w5B2DvNYi3POIReOZyJ4Oc86gyhXRknEAbHWuvAIPl_ticlXEE1kZtN0bzK6hI3MCszdnYHIPuJuV_2Knkb4t2ow_goQxOolRD2sYdM8_zT3mHZOFDSKleYVrJQifmzCW2pF4qAAS5Zo9mPWdu2gt2BbRYzyN12NpVHl3vk7y2ykWa4uMHQwo24YOyBFbJrwnYd3V5INypo8vwsaa5_d4XLTKRnfip56LpFzJJ_Z63ZGxSq3", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104244946698952838911\">家和</a>"] },
            { photoReference: "AWCwydj30OS3nesLfRs8TfH5pHUtD7nMJmdxhPqmVOfhgrDy2gEFRdhctXz3Lzqgla-CXnSrOELMHmwDgkCEIiVBOSoucC3gm1MzqhycSp5B71f1WezeUf42jeLIIT5clZLK7gbpA9CQR0VhpwAY42CNOrlN1ClJ7y4oZchjBLqipvdPoqrHQDMiSkJHeeVWr0UNULsoPNXd3nsdOyF8rgA4x1LcZq3LrTO2dJWoLJoI82L3NCWqJA0GVciQByB7IDXCRY3I1wPtpYpUEF5RMGNt4iJFqv7dOfrogetJ5GxyeCQ3_CCe7fcAFT1jb1USmeJPcCJN1TDZRYBMGNWW2t7WVzDWm3li3D7BFDE1SpZSdOLaW0la-0RxLFO_QX2j5b5dplKRoepJ04IWDRQJ6g5dYF6DtF1PYUEivpUgq68Xm1AFYw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106544432352753652858\">Ted Lin</a>"] }
        ],
        summary: "대형 수조와 고래상어로 유명한 북부 대표 수족관입니다.",
        updatedAt: "2026-07-13",
        highlights: ["대형 수조와 고래상어로 유명한 북부 대표 수족관입니다.", "평점 4.6", "오키나와 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:30 ~ 오후 6:30; 화요일: 오전 8:30 ~ 오후 6:30",
        duration: "2~3시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "424 Ishikawa, Motobu, Kunigami District, Okinawa 905-0206 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://churaumi.okinawa/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16863911804921552894", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%EC%B8%84%EB%9D%BC%EC%9A%B0%EB%AF%B8+%EC%88%98%EC%A1%B1%EA%B4%80+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코우리섬": {
        photos: ["/images/okinawa/info/tourSpa/kouri-island-okinawa.jpg"],
        placeId: "ChIJwcaPYjRY5DQRckPPCRBMRv4",
        placePhotos: [
            { photoReference: "AWCwydhZHQb4gS1Brz2whMspCLt5YohP3jYoJdDeHJwese1LWw7WxYmdhSjQPUHmO-_VrRKlFo12eMIxFOWLwcVivqHBX9flsn95mRMqg7qYiz13WeEvXUipZQ36XdVnH3mhty2wuJg0b6GZW7YyratO2_uGEsn1ZzwBorMUvRB3rO5D_yciiRwTFO0m79xzzoLWTcH-4z2uJtPzJgdiOnWUtf190WhYPZrqEsOqj4XhjVfiiCJVpRvWnJhwX6-g_XRAzROsLEz4v31zjnrXBaJx0nbR4gfnwuFRjsp-iVWtpa0xRJIqmfPRT3HUMahwhsW_zDRKaSJoA635GRf19eY6iRk2iqUNjG-W0K8CqOadvEqIrJyI0BTl0urPGUpTs5viTD4oH4q2AOjRuE1RGzX2NngMkvGNBNoqmB8sUhdrG8nr_FA", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106122492052733633979\">凱因斯</a>"] },
            { photoReference: "AWCwydjbzjQpYfyA26RyZd1QSzA8bQKyP-JQNF_EBrot1YW-1JFEMAyYq2vLXsft0cq4UtmwuLybfcPKvGZUkkebwXnCr92QCI1TRPlS88tMr54NWodHrLjK9Y9fteFLuKglyupzeih8F8azwOafxNWtOhjontIM2ZJxfyWJ7cUG4jnjsF_JYQ_HrCrfufBVK5s5u9ncnE6z7WE3exKRZeFohWK3SlvrmKj_xpGHC4PyHN0SjG5YrLDTLaMqNRvhuEHgFBJiplHPwc0cTEH-sQSBMnltiuqY0IlIv3tpSAyjtXhjUFNaKE30C3qTPB3-ejN7yUrmqZfqDXlSbaetqZFF0u-7RxMUoHndPWgmLYA_XKRY7jlIvCpYLexbfXyULF3DlrInRNg3E5DLbyJh36uO4iSZzUHBkTsISJvTHeJPu5I", width: 1440, height: 1439, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114476682878957249408\">takashi murakami</a>"] },
            { photoReference: "AWCwydjAgA1z3Ys-U8dVOgSTvVZaTWtS6VZrmvb1zap7hZWmKOuijgZtWkw92tyXibNzBN3q0kbrY2J2X-gM5mtX-TfEf2QoJNKEnVrbzZu7oqCIe4otbBU6DUVh6uPcqQZLrCd6JWSXOpBQcrUeDdO5ZTNn7Mkw9kLR_zPF4SaW81XYpvNpylCA4rDZn8dKbeHaczr5y54FrjOgqwoTPnrn6KxjMUsdiAnTVgMn5Wq1vIVm--TyU6wnVh29fwIL19nykkY30SQx6K0sdN3doFNJJqXlBRTUe8AdvNUPieIHcWAnllNuCgKMXdNwX3R6iLrXiRNPoZ5dApVaiZJoEIe8n4Xxk16A6JlURks96VhoWN2AQOGvQa8g1B9qxjPvBQAyr2cYSH5ksSRzWNTZ7S-jc5N3IhU-IzcTs3F8ym03WzrA2iDh_JdqsIr6DBe7leMb", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116851993770856390453\">伊藤武徳</a>"] },
            { photoReference: "AWCwydiVUyLCETUTWsk7eYZrATVqx1avjxdwHFL4yLnI-S8bM0sDtPwrVlMudS4a9dE8CSHVYDyUoVPQ66f0QypPvzZgMZmc1uprjJtP9eSRZv8VRb5t-Cx-imtGSvlAoB_95h3QzoYCY4NuYjCTgsAu5ArQx6MC1jIrVWomCupy-s2i_SBDmuKIujm4j7xJk9vQOp36HztV9B450gyuuKz0DVh3MstlXuTWGk2Vc1yC_xtqG8NerT9-1bO3XDZ9XftZICfWK5LZMSNZIzpmOD3nRkyDxe5ZlDn6aDnL5wvGoeAzWlEzMXTZIxoTtJRjVil2Z_Aem8GjeIEqGII9Na5bY74EhTW8EBYmSEVXc0nXx8ckWFBMy5OoScO8n35zmbFj--4CvSMa0p3sggHmh1Zjz2AGOSLgsXxXfcNlSLybhpMxdw", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101533117957846445025\">孫良瑜</a>"] },
            { photoReference: "AWCwydjva_jXVLvIxT9Lb0RHlKb755ucysIwW3gh_R02iSfEIT7N1COk5fuAdkUflBwwBuqNMtz77i-bnmAFXkmjEKjOEpGKYLxFLOb7E-E290cw3kums4EeZahv8hSH67-10gu35l6vhizWFg8Hp7ZWEM3CA1p4ek7pilfQCCIQDqE3Q9Odrzwoz6Skxu_xaWmkJrjFdqXEU20gOus7C2-lBMNpHL28UaJGqSiUvvocBNkjoHPpdi9TFYOmTgk9xmOXjiiVozG9mJpTlWrzKtYUQjucBuLo35wR7DTER5eMZe1dTl2dKA9Hp1ub6r3G8Ug4WCJgka8_wDNmWhGzUx6tQWjd7wz7WSQrPfSjB9U1XNV_sz6n6qYJWSU6YJmnXkVUmRlc6MFwwUtp4FIvW3eXWMxTNxQrTvwxIvru1Y5-ZPthJwnE1wqXzI-BzpzUQPeh", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101710885723322188068\">鄭靜惠</a>"] }
        ],
        summary: "드라이브와 바다 전망, 하트록 동선을 함께 즐기기 좋은 섬입니다.",
        updatedAt: "2026-07-13",
        highlights: ["드라이브와 바다 전망, 하트록 동선을 함께 즐기기 좋은 섬입니다.", "평점 4.6", "오키나와 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "반나절",
        price: "무료 구역 중심",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒905-0406 오키나와현 Kunigami District, 나키진손 고우리 고우리 섬", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18322415765771207538", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EC%9A%B0%EB%A6%AC%EC%84%AC+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "만좌모": {
        photos: ["/images/okinawa/info/tourSpa/cape-manzamo-okinawa.jpg"],
        placeId: "ChIJ-adBh3gD5TQRGFnnzG897N8",
        placePhotos: [
            { photoReference: "AWCwydi4ROYfIeDx2d-dUJu7DxNXqHBGkyKKBss5rsl_ZgHGijXPrhoJSxCzPgmmyTbw2gtI4HSe4vIGoRr0sBaEDftA926oS5Em3c_MMJ6tcn5npUtXSgUuqDWI0AkZc5CjYjVM6u5mo8yzeYdqX56g5tLdnXICszty0zxbu8HruEHBnjCjTYB3m_NSSybReSR2_nLMc51c3d8tEuho-SRdWkiAnLx4BM8AzVeOuc_1vKercI1rRDityfQ2DXmH76U5WWKKb06rjAxiwQRmpk1a76qzlVwwQtZ7d-q8ao_7E4KhoNcJDBlJn3TGvqo4cqBKYZsSa7NeV1lLw_zV3573AjqyNBVKKiH7L6LNUPuoJpHxF5m1YpRu9YMbh_Glf_zfyUl1c7fmcoLI1D4CnnA1fOZ7jnrUfIgb7SAz1WxI-VIfnoT7O3rFoLu12mCcZa5d", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107270868362351231635\">ran ran</a>"] },
            { photoReference: "AWCwydhHy8HYMlzsmnzWdNQvBYCVhG9hya-CTEVJtvKkaLIT_YwvhoUyHo2TMRpBQ7wWkEvngQwI7TbmQF5ouYp-QiOnewnGh3kdujNCzMyZW40S_x7EWjsONgRHoqX60uQCtwr-ZaN7kAn5vjoLKCQVelX-1GyYNgs4zFxtOeHZgXtKk3ACR2yiJ4Cpy-SykhgzkfKMCYpzCJjqlMaZkH13rL4_ROb8LxQDMVBp-TSBjuUISGX5sHgGVnqyYMmxlxHAOSEMtwdLfh52je3MXhP4bieQqP0mMPVI2Yv9muiDh6PZgw5HPqtsklpPu8QS9ZUlcraDrE9-7ibuuxOm-1p5Bg5EvZmMloxDZ6PkUV-xPmobilpOWF5DpVik_k6Esaf-_RNCqJ9e-M26NbLzH_KVjBbGOT18aJxDi7oUrnyW4BucDw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108745032362628831527\">jack F</a>"] },
            { photoReference: "AWCwydj0AylylkehDofbrZqWcnme8rAfl6F7ylc_gyS3oIih4B7x8YA0N_UmfW9ZfTqZ3KU4kmp4ofhCyVAkknk9t9GcFHCQfKS_DrUKnRrlkVrIeOcVl7vrERqc-sB0e51u8dgVDr3NISbK5fqZsY-aNJSiQKy3dQtLce7oAvFgNwczNmF0a-3Jil4yvWuPuNNfC-iKg-Sn1Dt31P1tMVN0jbgfRTHLcLBU9kI2A95WGd2JnAzFueD_qv5XdZ7thYfsPeehuwFxoEDQ4LIaku4-xE14zE5OHV29M2K84IEcNmL2aRizaAPu0E4ujhax7EFShNNb9flEtiEa_XMyYIj7QO5Zy5WPTJUIXlhjRLqeV_JiqEs87Bc-vgpeoXynFEzq88gz97lQgdp_ZkvpAemlyzx1h-2FOErSTg3gbsMMk6GN2l9qWZcyEcNLt75248dk", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106644090330023887395\">Da Nam</a>"] },
            { photoReference: "AWCwydg-18ieX6tgOgZRhJ9Ludl42574D67w99EVQmCwbDK6AiYY1rkBW9dLWgyI-PlSGlcG4avLa5jES8gQ0PSQkBYyBjKuGkH_mpy9pJ_gD83w0ei43d1IKS-w9BVFdX0rps3F7aA95clvsJEUKwNYo62eL6pQDvMO8CTFeuOC8myU0SVMNGXvGKD4HN463M0_0XMEYr2UXOcV0Hpw6yHGQ5DPH12KXPmHLaxKt4OqMl8ecsOTqwnaYdRgu84HpBl1mM1fs5v9Rh3_fcoVE8HfnvZbWI5nzd6ICdWISEM-Pk-HruIWtVRIFbYOGDKD6ADqrFuwdm9Rr_mE8W9rbBtxZ3RDtWoY6Gixx2LU9C1LvR3w9PSTIfPfn-Y9VlIsjNLqGLcOdWGRedztQJoD3pWvH5M4SH9SXA9JgZeoBWzmxZaL9A", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117944404812817369606\">jooyeon kim</a>"] },
            { photoReference: "AWCwydg39FbCT4nmd3vCEby2dgNnwyLtvDz9h8oiGDylfZ2HK1XJAyevzDV-7TcqknHwlBWcJfLsMd3V8UK3CwTiMENa6r914zL6A6dxHfaeksRodctyN8yNjnWm0XFsLR_ldRR9hGSr9JomSDSwthhi7Rac_mhuMVfHD0K52MS-_Fsi4KTyWd5jMi8eU75WM9F3ZMOGqVMJYo1QQPk36stmvqcLG5rGEcq612yYviB_jkJjrAr2sT5UONDRL9kOsmX8pzGJeHLxIX8Vv9gKQgZVKtjzIdnpkr1FojV-bGrTBakt6yW2B_S3ERSJNlFZFabtPc4ZJJDJOBJYzKvnl2guCDqLUhvS6qb7olSp5u02I5imAtUGSjn-P9ow-YlQOw0IEcjDO9zNiU_D1izLcmEkV5rGxenkix4LgRneq1xw3r5Rkj3X", width: 4128, height: 3096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114494797144762405575\">Toy Ojisan</a>"] }
        ],
        summary: "코끼리 모양의 절벽과 탁 트인 해안 절경을 감상할 수 있는 오키나와의 대표 명소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["코끼리 형상의 독특한 바위 절벽", "푸른 바다와 어우러진 환상적인 해안 전망"],
        tips: ["일몰 시간대에 맞춰 방문하면 더욱 아름다운 풍경을 볼 수 있어요."],
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        duration: "1시간",
        price: "입장료 현장 확인",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "일본 〒904-0411 오키나와현 Kunigami District, 온나손 온나", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.manzamo.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16135339115350022424", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%EC%A2%8C%EB%AA%A8+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오키나와 푸른동굴": {
        photos: ["/images/okinawa/info/tourSpa/blue-cave-okinawa-onna.jpg"],
        placeId: "ChIJFSBnObgb5TQRQA1ByAocZog",
        placePhotos: [
            { photoReference: "AWCwydgPjIaZsI7hB2fiTJX9XSK40sqkDnv3XA_W_ohOO-R_HmXLgNX-Q8T0lqNTxiR4CSMrEqoQazs2t6-IK9Wq7IoUmJBIWxSo8-DOCa9-hOsk9x-DQKsw1qo6TWWiWK10VWg1eBw5Ne23IvqMstwlecGrP6hN67gNZIPoPJC8_MTHNQ0P2wBBy4P8oslIdM16q2AYcHy8UbXTWr51HX3I95Vp-SkzMEi7dTOWA4QTHwPkIr91JLtj6ih6nnq4b6tP8rw0xop7MA1bUIUO6rH11DSgDIOEH0t3fBHCKIteIe9THSmr4Lm5ndbyovvhxgvx6ynYhbtAIs3IKwCARMJWMo31I3n3VzyvdJFHhJnRlnp0AxdbnG8oe4I3Wq3rh5CRHuNH649ze7SwVjcCusGFeId9wjck9JUz8ON09ninuWgxkrTQz76ifQh8NJb5zYE6", width: 2853, height: 2140, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101957147127044496320\">KOMORI DIARY (小森日記)</a>"] },
            { photoReference: "AWCwydgIlL77Zaxx3L_JNUFAPnqsWDdKTTOgBnNgPdFXbM9QUEQi9CeoVyniZn23fu5Gw4VDQ5DUxrhixYjsvLen6pAP8DXrM_Osymg5oL0zVdK6pPvhBk8xOe3rCkpw2_wsxqi5MUNiOzeZlJQ9uBq-UZDxWokGIeAYH_Kj6ee8Knjp56tSpkzc_NXDX8aLQpZKfNUPXy-KESIhmb-Zx2qN18u0bw15c1cbJa93VjSC2agqkbYacpKuyULLf63zjaEIRadijaBw4q8M343v794KNgqUS8m8PzqA7XjOUJI1r-gDYitVQZpRPF8Aoh02ZmWe8RBU3hVXuX-aPtxaO7_5fzDkNOqqaRc6ZJOmVw9J4UcIf91qVNPccmMPQnVO79MlLBWPRICrrywAZrsPdh1wgmqRi6bhKThZMNeL18YVSE2WrmE5WXDYFZsJb5NdYg", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100265009839234003944\">chen hungjui</a>"] },
            { photoReference: "AWCwydgCwUGp1PyOkxPoIlRhWfapUFp3-vv5TUNiJv9_RjobVyGuROvQJmmtm4unBV3KCnD3B3ezlMj97lxSALuOIQofObZLct57CPpluf0BbzD8NHhdGoq7eBuIUodQdTyXa5Py5EprGz9ydRjqxgqoPj_6jIPZB-okcZPhBaApBOKTeILon3WiJqGRXK3UpT3uug6OdXdd7Yprn8B3FrO4ebQJ2U-kWu7xrX-Kr9Xn6-V9IhwWF5FyWUrpXMlYO7q-oSQR7wryY6UVY7fUyJqA_y9mnBgEIE0mBZfZgUw0TWpNd83NzMwCLLIM1W_WU4nb1rRPcn74SytNGC5lTunNmzS6ffG7bjk2OzxdiXaH97FQykKBA-eqN2vP_V5hGaE_S_nzDmGMiZCdAFGX32npuXschp-pLBFXUke_YkygIvXSaFO6atYIO-2fj8zsz6lo", width: 4800, height: 4200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100642876481048919232\">•ɞ• X</a>"] },
            { photoReference: "AWCwydjMxOBzFH2zdfZ8FhyB_THO2SizEPoFDXGyWBWO3eeyo9rrVC1dmtE2Fr0x0ZZEoV8U0Hw1--IP4oNq7M7VkvWhnCZRCMXvG32aAzEMCo1CEdaElq5epO_kjVBT5w-7haEmWkNZPXzqLQsjsBTxLNdPo2GrAKIXIJ1jo7gMCFvp1Izkvv8B5L7JPYVfq6s_NMM2WmnRaul3jYEWCSYfpDizW5EoNgZigGawZyrAt5ss8jImtjSY2sF-aV51-llVRsF8gXrloK_A9WtWO9lfoz3tWHgz9mDlQXFd80SVU9nLwJkkDD9mPXB-IdPNvEeZxGISzKEeCG41ZYiR2WSFV7YGugXWzfWRCkeUEiJ1PBBJys5OlNYGUxBFP_boddiEkGSs3jhj6eWyer8pSnZK0p2zVo3fCbl8E_3D5dOw0TIkgqGGb4osEhQ3eSyWyw3I", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105203300200963312856\">kay</a>"] },
            { photoReference: "AWCwydiD2NBmPF7-_T9Z36q1wghW1_ZokQSAW4Q2eZzJB9-a2hYTy1DhQNtJa0WaaBq-MF90ypxxR_HhNODvWIT3mKF-jvzAnlmKMEEi0Ldh32Ll0yxgJfQWMqGqIS12to9U4KcjVLrxSbwGEht_e5l2yaLFa8f2VfCx1AY_Jav9VglsCwf-vKYaaEH9QBqClpT5iEq77Ibq-nUFWagJi4yPiFrks8raLPEfLnYEO6vmN-IwJkMLGL3yw21-Shq-K4qIJGeTAVoKGSFh5UZNFYwPbjStrLRKtLbIpPn5DmLl8g4vasg0HZ_MiioR5Fqx4BAlJBZm5fIbxdjHt4XepJsInpmu3RrEvsQksUPXXkxGh2E1D6iQmm0CaY1nSmduvglv9GosPeGBptEPxNRtdkvOLLqY6dDQ_aVUn44pNGRFD8YbkjyaxD2zmCvlZ09F8CY4", width: 4800, height: 4200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117608466226470459187\">Ryanne Cheng</a>"] }
        ],
        summary: "신비로운 푸른 빛이 감도는 동굴 속에서 해양 액티비티를 즐길 수 있는 스노클링 성지입니다.",
        updatedAt: "2026-07-13",
        highlights: ["에메랄드빛 바다와 신비로운 동굴 내부", "스노클링 및 스쿠버 다이빙 명소"],
        tips: ["날씨와 물때의 영향을 받으므로 사전 예약 후 방문하는 것을 추천해요."],
        hours: "방문 전 확인 권장",
        duration: "2~3시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "469-1 Maeda, Onna, Kunigami District, Okinawa 904-0417 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9828574069417643328", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%91%B8%EB%A5%B8%EB%8F%99%EA%B5%B4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미하마 아메리칸 빌리지": {
        photos: ["/images/okinawa/info/tourSpa/mihama-american-village.jpg"],
        placeId: "ChIJzZoVCAUT5TQRzIueHYt83hs",
        placePhotos: [
            { photoReference: "AWCwydjz3qDavsd8e3Kv_gnYQB62NNcdz9fLNB52AMGsg4q0fMvFLlvqr_ksvQEUd78kjtOs_Ux_L9TzyJPVUisWeg0qPfY3sHb7tXR6liEMIGo2pu1KrrmfhPLC80iKo0Xb4fUsLfLqPdZDyXRwUIdwZF1gv5AYHeLr9DNgRvR8hQnkgOIgn2RkwCAvo2z5-gETELt4XZWWI7jveQBvgNeLHB5z6PRM7IF1F2wemEwFqEk8ihppXw2N7mRyPDHIfpngeYq12brpGX18RYGZG_ecxdFOuTcc70gpFXzZl9bpoMgsWog7JYGi0t6W9kCNiSecmmRw2RHEpWKZoOAXNIpO_oWLPF1ZHGd4fU2781xUAL1ZeF6_VDCHvNR8xRrl4zAJS5lkoWlnUyinuyjxo-9wOQvw4Qh2h_drejzlvGF7JwWJOw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108346317961500934919\">Claire Lin</a>"] },
            { photoReference: "AWCwydh-wKMMAlJZRGGUlESed_B0xrTCRMXIM1cd2gw4TrTVTO15rCRAWOT9WHRfcxJ9z4EQ5yyq0leyH6EXF_jB0cX8IHFkUu_Dypa9-QJaalnn9HGi3tqv3F4achnFKmuGVDt5FAjFVvlNWKfTNIADRz9AzNjCG8TWdh83r-oOh6ALSqSFi9HKHBao6rvolkBE7imrJxjcOzJKF4xEiZqmDZXEXLxpVO-v1fTWvaPDNL4T7zw-A_cFkJZX2dfCn3StfLQj8-P0dN5LGrHWL4jO8Vl-BpUi5KOPG9FdlkfXU6U-1GZh8YPKBLsuhYG9h4gmfIUZ4J05lAccgXnV8b1cJ8_Mj7v4zyYwTfVK--oRrcKorV0j_ocTzzVIsv7fuXtUYekJ9StYsgXoFwYqU0y8opY9GYumUaHn3MKj-evdDDzSLYdm", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109125655318711557095\">leungch HENRY</a>"] },
            { photoReference: "AWCwydhRZ8MF_mFXEZfrbsrVBcEEqp_MI7br539cUSZGPSVjnxVnPHlxzUUC62vHWFQFouwerofqbkvkNDINr7jMfnT3MCXRBxaO5NpWHkt2rTIFK7Y_osubUklS-X4Ou_YcF5cRMktSjAFHoWr_YL5R3S8LMuG-xyE9sKgM-Ot3IHivK_02bALIZ5AAgbeY_AcabHgQGs8_Xzg0NxHgDzaPJKheFeOjiapJRPBkTlYdofcsfDw7GYP60JAaUBpGD8cKh3gGDFH8iVTWuX1PWyDxuY8ppr2GIQua5s_CRa3moCvt3wtB93j4NbofDCWZAusVaJ68fdk6uFvGkir43A5S56ul9WE_nyUfucg2eWeuWVygbfPX8u2xn0s9M_dLhFGdecUn8Wv_mR2tkX1GsERKcw6BC-jcKzeoxm0uQLNI0dJMSBmB", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100888928078790643434\">DaiYu Li</a>"] },
            { photoReference: "AWCwydhSCstDxUf2eVqiJACHplGX5TBva2Spr5squg-Om9oY-xy1RSVenJLBmd0GXij3NrvYzmKqF2PbBqO8glkvdVzWfCQBd3ivInGVZwnDebOhy5tgNJLFmqmUispj4i73a1fzMqLfnTTODKwQkj9nMdTMvGQJJMLMuoul7q46xJlQz7UJGoEE5s3bBKQjRp-ctDA8uFWGhehyT53F-fyW0zmSM6zcY-34VAsgDJ4flxd4D4vqF2PpojXXJvgmF2wAyIyPhdZOuQJ4NuPhh2xr3AxdexRUp6vgAc3F2JSQXqLmeawh2N663vHwaM4ugAUzFMNH61ZvOmmi-kY7lEe0OxoI8Ot5pBF1TtZM5yvQWsmM0e0WISYhz8I8uzaXJmZP7WPuio7OecLhKYRxTSM_-XSafWaKAKWB5DF-rVSoQW5Zv6WU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109182404012456722147\">wai george</a>"] },
            { photoReference: "AWCwydikQ7trYcUr2gPcUaTpWroQY4MOqIapKNhKVrV0kVJEd0pFld2KrsfDxQIJ8ap3TI3ogro70r2epXhU-qhZdixTzErKIx-goS7QKnwfXW3DvwIJY05XzIP4Of-FEUyU-yRzAA5vJclhspYfr0FImGfbxRUBSgYsv4Bi02wA0YHnLd0e5tp_Un7ATe4rCXADbOMclq-arPhOHIKwKpaUeKsGnNqkl8cyvOG-s5EkTZtGUAcSlDyKlMBSJNjFb1bEjogHiDq55TDjn5hmy3QgoAsDnDByArX74TaZjLWL0lWGFuFE3Ki7h6emSM7ohJMABD2xJbvDNSSwEl7hxLEOw82Aofe1GHdQehpVeWfiScpKHwjBJEKa9v3OrEuNpUEXS0v-0QDY3o8D_AiDSTh53f6kbIFDKsP0QwvKkSisnk1tqxX8", width: 3060, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103220753571190786633\">alex (alex)</a>"] }
        ],
        summary: "이국적인 거리 풍경과 아름다운 일몰을 즐기며 산책과 식사를 동시에 만끽할 수 있는 차탄 지역의 핫플레이스입니다.",
        updatedAt: "2026-07-23",
        highlights: ["미국식 감성의 이국적인 거리 산책", "바다를 배경으로 한 환상적인 일몰 감상", "다양한 테마의 맛집과 카페 탐방"],
        tips: ["일몰 시간에 맞춰 방문하면 인생 사진을 남기기 좋습니다.", "주변에 사진 찍기 좋은 포토존이 많으니 카메라를 준비하세요."],
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        duration: "2~3시간",
        price: "무료",
        reservation: { required: false, method: "방문 전 운영·입장 정보를 확인하세요" },
        access: { area: "일본 〒904-0115 오키나와현 Nakagami District, 자탄조 미하마", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "http://www.okinawa-americanvillage.com/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=2008179420793048012", type: "guide", description: "지도에서 위치 보기" }]
    },
    "오키나와 차탄 선셋비치": {
        photos: ["/images/okinawa/info/tourSpa/chatan-sunset-beach.jpg"],
        placeId: "ChIJwUey0A8T5TQRsIdoj2JV2Sk",
        placePhotos: [
            { photoReference: "AWCwydhQdgxqBeJml6RfguaEdhc4BuQs1osNddqWoSb2nO5mycxBSKRw-700UjB5_1lQgzLjRIhJRXOWYXwIiX7vIdkgn_Z0HjRHoG23t3l-rvkpQKa8R2qbfFU51FXt9YUIjrxTB9tfIje9PH7vae3B37G49_CIYoSLa5ZTP_iF1knVE0u4omn5eYxjgiE0cJRHl66sCHK8BIXbB8vfEUph4iHGWORRtHj8MpSsBkMSpDNZVH0crjfGzCfZqs-NMoOgP4TAO6zaJG6aHDmpXpnMQHjYBbhX5YrqsVZE-1Dn_djL2AcorCArXSzTzD2PtHQMGXux-xO5KT_4Lj9a906XdffM1quriAeMXmkHX_SLxI-v_cNrapmKJ1wGz0cp8RuLO3NRm3jfQQUOFnoOkctyx3avNx4ocXgsV_vobnnKSnbFiLL7", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106971621842062423546\">Mimi Liu</a>"] },
            { photoReference: "AWCwydgX-ZP-E2oWgIXJgEV_Ut-EnjS_jiN-YYEkkTQ8V7P9A2JtEwpEouSE1eYxSk12sW0SjbJRHGqRZyDdOaDhH95Rn3FXLR05gEDeAqh7J-hddBYytcNQ7p2bC7gdPOS0BBEjn6_NSuM7ZI_TsGQUhM-Fv4hj5AYrYtIyQGduYVUmVGzFSLXyiFxxyGIjKcCxY92zHKdxLR0gZgFPFnVuIihGszxgjtsW0-DicjNBedoIF1ikzuTHK_0Rw6W69CnXA9hLTReUtyuEItCuJ75u5EFhaz7OEnLtGc0letYLIax6cytOauKOtvEC4KEgJp5eH7P96ZwlQn42zIjg1GZs1t1P6BCewq2n5gfmMAZjz0dAPeF1lz-667ye6LqnLy8wcTp8RYIkIgAaq1LdXZcS9CQtGK7ipIe6pZz-gzOn7EdkmOTNR58rtzuJutEqIg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102528132452806764998\">오종진</a>"] },
            { photoReference: "AWCwydjDlJVGNwW7pv-RWeIWGJ1DBTv8AGHJSN_zZ-LkG_ujQUAMcHYqHvcBQPE5K_-H7HCk4ItOhEeEqK7580DrnFquoartEypCr3boMcmySq2c4xIGMlGI3xj4Oot2wI1QvO87yaxu34TDliYKb79OG3GUlZaxqebknDFr4f1hKogn8wPojdID6R_3VJDpf-1DuEFpIOVl8Oi4gc0rXr4tGkA74HsHcIi62yUc-GSyBZAdgGWVs5RSM6IyV21mD4AGFZi-CcIU5rvmrY9pOu_wBYU_AnTIjbcpxB4O4STBbo04row6Sfn4FvRJo58eqyCP6cD7p0jph7xuVKRikFRAV9-pyEg8IFFvsgjDYctEpiUQt69IE_SpDReHgKb4weo-MbVpvGbuxA687xEJ-HdcZST8JYrLg9Izv3us-PoDn61zHA", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103266804171311199033\">Alan Fung</a>"] },
            { photoReference: "AWCwydgnnqC6o0WAukiy5EfNTBJv9DYAlpTNwRWsLB0lx1TKg9wlCTviOe5qWES31ddd_OzuxRSkfhDK2qvWq9PlR7az9PMW7FlHll7K90nvxcsXurjWIwkTIFuRJr5ZOo2hlc8T_cCbImQ6z8y0dLqeMvgzYZzYcVQbUT_8LbOUtFIYl1Mxih2QnVD9W_GlU2QvzPxceY3FN-vuF-KssdUQm4-MKqrfqdY4sUXIPKYhvT8IafklsXpPGJiZR1Yg29-w-0OJX6Atkoccyc4NmUy8Vxg6_h7d_SqFnOwutbnDY6rGN6HFPHzof6FCqXLTcSFbReX3iwmZTmHIrqBy48Tz3r7Q4xvUuXY_vyi5v3E26m8XYeT0x-jJELsskvs-Te9FMXnN33nz5PRS8Ft4UPgPPxYEAnO-9JKgeAeSp75to2AsfuIbmegScG_5mYg8JDw_", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111060938062631313531\">彭華山</a>"] },
            { photoReference: "AWCwydiHymm45Lv_Q-blHJ40-vm7xWqdmPsMMEOrcafWsRuWb0NcXCVJPPZos1rbkaLJL7_I-GCeqO38CU-_3GVzctyfWktLd_uMLXa3ZREHrEtV-4bz1OS4CtSPcdlpmt4CiImgNFr-oBMaDZ9IP6Fh19NeE8IKKWesS3FZCTQd7j_Ak8gt19ACuZNEmojijlQVeW8XMHjl27y1-Kk6Z_9jI5c4nUkNegOYWgobEL3RmS0aIN0V4oyo6Sj3MXJ-JOw_uDY55QfdVec6Mytia34RoJOeiZvZC-KHVVA9HrtytdDNLznMXw4ct8Gr_OzgEs9sZ-3gtvezA638qbrLBEvdHSuCR-luslk1KsFfnUsbeF3BVBzJglakFn9qWfbAR-pHJ5lbrfFYqweFvBi6FEaAa4N99GGUoQPTRZ_GJDyciBnl6g", width: 2304, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105361231769925500222\">Taso Map</a>"] }
        ],
        summary: "아름다운 낙조와 함께 낭만적인 분위기를 만끽할 수 있는 차탄의 명소",
        updatedAt: "2026-07-23",
        highlights: ["환상적인 일몰 감상 포인트", "미하마 선셋 문로드 인근 산책 가능", "로맨틱한 데이트 코스"],
        tips: ["일몰 시간 전 미리 도착하여 자리 잡기", "주변 아메리칸 빌리지와 연계하여 방문 추천"],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 6:00",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "방문 전 운영·입장 정보를 확인하세요" },
        access: { area: "2 Mihama, Chatan, Nakagami District, Okinawa 904-0115 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://dormy-hotels.com/resort/hotels/okinawa/sunsetbeach/?utm_source=google&utm_medium=gbp&utm_campaign=gbpurl", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=3015535307302406064", type: "guide", description: "지도에서 위치 보기" }]
    },
    "비세후쿠길": {
        photos: ["/images/okinawa/info/tourSpa/bise-fukugi-tree-road.jpg"],
        placeId: "ChIJ6z_osjv65DQRNpoSOgG1iqM",
        placePhotos: [
            { photoReference: "AWCwydhvyGi3zVgwCHH28mpA_AtcL9fLCt-mEMRPQnvXt18F64ZDAE9C-8zJDepnZ4nyVSfDFeRPSHkqEdAgw5aqwxFp0pPEJmcGY09Jz-L8jLlNPTPWivoJrNun9SVm37NoB0n-4DWO3R8jBtKbkZm9-7wtITFPkCOni769aRwqXSlZxyslqx9jbSR6lI54CBmFPltTmk5EpcQN4B-cWMQlvqt-bta_AdB1VQhV69dgmjHD8XVyahBkRgIqDO6Jk1Fwd6LANOL2OJIILqnfR4lfVjc_NlcK0_PpwfgE6B6njvN4zJ8zDOhtrHHnDskaHDh5wMh_685g2jEnYpsZ92otsw3s_VwgLTmF0HjvZe2HtnTdFIdJP7JdVsnXS0lDsKSAV7WEd_mNDXCAyQnUyL_75-SYeIvF3Y45WfsKSvvoXONC9g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100365470064738094579\">平井聖馬</a>"] },
            { photoReference: "AWCwydibSzk3ryfGKEX5b8ZFRKuITRYWGM3Z0jBKU3a2cedfenIudDiiNEvAYfZp3QAH1TirjYmdcjGptHSxgkq1i4Ak8uzBULWNL26tv3K7O6iBhRa64NFg-48VGW9WTJpW0UIC9FRDYbgzIIfYFqhzitNwl6ubSKi2mVzLFwdVu9L80A_3AnveovKOXP6MysThgG4MfNYnyTJ3vxRDRjTk6Z_cpYXXQIRyWqTQRqnC8C0JzNHU4u0nNEF_zqOnGQ8fYBRPMk2_2Jfo2npWysPjZnlCE5be4p7kizmDG1g18VgVqxIdGdjAkb2MRjrMF6Wz8C2e-VLxGZECHr20NOh9-cyWfKWhda68whCIhpIB9MRVeCjYA4bttjJJp8RjMx8I6U6n-UD_44RlRY4tmToPBz8m0BlVySsn3YqSWnP0UKk", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103011695298331405557\">lui kei</a>"] },
            { photoReference: "AWCwydiKUL-_4FB4Wf_gh3jlhXZTkvQSXrzHBhqZs9O7NKaKXhsWfWOiU_qaoL4NmU8A9jsEMmfXFZStb7wz0KbH9rt09n5SaytIyIJYemEOrz4wj5hxBVhaDxN0DfD75mc8-l9PvKlW7nX2iVprXZf75kVODH3OeY0KGWtrcQX7ca9q30TTM_ZfvglJAWWsk8X4ebSk4x7YXkUU6pdGMZwLCVNYeo-Jl9uSAegHerZXUkqehfK_B_8QOuq3D1bOUuczFwfTrqo4TxE3Ps6C8IZMn7M19NIMYe4q28F5jcJt8ElWJDH2EuzHGYafsjmp9YdYqrZNdDexToWEb_ftyLrh1go-QRdxxgBHy6lPFvlhssQxll_Lv-rDS9tlT3yXzZwYkGP6LJT1ssH44RN0kMJY9fl_ZtpqidQml2asGSq36pBUH0c", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113073399677704443395\">Hayato Onishi</a>"] },
            { photoReference: "AWCwydhhQfid8roVLYqIjIGa7xM8YJeY5EnIM0A2AXdRXcpvs7zr_B4YTR4EECM9E-oR-1SFRw_GDmvBN_BSbWu9kQrEzaVVSPAFtsfVTEEfRhOyDwMIoOV9FVOr3sLZqJiKHF3CMAUXaNX5Q52GSwSq-nAlG-pldCErRAwq6ACL2vw87DxOYZBU4bVkDXyAK3lVKchcmc1REagHXOwvDpbMBytcPO4ZRjD_wMFnYToGpqx6ea4xFhU1ZlmF2IB3tSS7Nd33XX1fkbvxHcbwyvOtEbQF2sq52W5iYNNUSBknYrfa4bqu5cXGKJfgUCEm1SehO4w8T4C0dKyIlGyQrMHe7S9pJ4Sr8X3ZNAf-lDNadR-nRK61tsSrEfq-1n31HLGS0VqWFmISaALtTcLxmJ8LxQu97hdmFYeSSWVYvLCMINl8Hr4QhuDJs56k3HTsrVvR", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105402251308159986027\">海ぼうず</a>"] },
            { photoReference: "AWCwydheVKyoqSVMUzqkYFbBWcogL_cxBF82LH8KVe_h2laor3_GV-drQGN_l3sIXQV60PMKLk3oy8ANQALlbMrgLe3L-UPENnysmbMvtBU4W-_NtzdIe08JqzPHqW-wpQBHDe9MoxZMxRrGgwy_jngzfk-gwUDK7FLmxg_jPHYa0mV5j0weKuJMBDU76aG6PJ1VsopYy9jzwpWOUStXSuhW2UMGMZM5KpG6dp-CW6EKFca-9jxUPnma5zvOmpItn1reeC2o8mHMieF4L2ULofd1zmynD3zgJq2lWH3izLBE0DMBhu5RUj90JonP6m1SIrise9o8Sx5bqfShoyqJ-cb0rBLTWP4LepgxyUsI_dffr4UJsLFl2ft2QV4ex7NuynOWboSx6UNPQyTtsjz2oPZl3_9z1GuPwHYzmkXtsOJVHBzFcr5f-7WVPIPEv2k49UOe", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115230365311180554505\">K-2</a>"] }
        ],
        summary: "울창한 후쿠기 나무 사이로 펼쳐지는 아름다운 산책길",
        updatedAt: "2026-07-23",
        highlights: ["후쿠기 나무 터널이 만드는 시원한 나무 그늘", "에메랄드빛 바다와 어우러진 이국적인 풍경", "마을의 정취를 느낄 수 있는 고즈넉한 산책로"],
        tips: ["자전거를 대여하여 해안가를 따라 여유롭게 둘러보는 것을 추천합니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "방문 전 운영·입장 정보를 확인하세요" },
        access: { area: "389 Bise, Motobu, Kunigami District, Okinawa 905-0207 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://www.motobu-ka.com/tourist_info/tourist_info-post-687/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=11784430391842216502", type: "guide", description: "지도에서 위치 보기" }]
    },
    "액티브 오키나와 투어스": {
        photos: [],
        placeId: "ChIJE5uRJM6G3ioRYJbAfk4UDfM",
        placePhotos: [
            { photoReference: "AWCwydhc_VeiUPxZonUx0UA97TcC02kZ-5J2cBTpJInwC8z0eJ3Wmi9tJAWjjotZCih_w2Ib233BkXp1pcSKOdRvCy0tPJLRldtoDU00Onalj-yPb9RpP-eUGkpBoCouvq9LI-2JXsML9LxddeXsgytTD1k635kNNrRgXJl7ezmO4D0C70rBAipLer5BN9A4TAzzfj6HL2ChRGJW5WE0vOaXad554_BjA3J92lCoyodL594X68Ne7cmnBxnNs6hdjF9-zSYndhwTnMF3LarSyRCYPdyNVJIFAAVTWppN3q8ofrROUfgIb5am4X-X3fVlBLRLAeMOXg6XDt9PnJmm2afe6vgp10AqvUY_q4i3y5HWdzAzLjOPxNpO2cvJMCzojbsuqZ6Scw2ilvlhKaJ5776OAzFq4OjPNC1vvFFDG3nu7YoWqNcKKKgeOFYNfxNOPPjc", width: 1678, height: 1831, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117778465908511615532\">Lizz (lizzisgeek)</a>"] },
            { photoReference: "AWCwydht_10aO-qTQn0ufX5l5fPRdChGJWbzV1WboWwLQjt1rNyeg9NrsPsdOasjm_8Q8lxNSggYVUO1xRlkUWZdlpROX-KfXn3FCdtNbQjbrZeMGgVUCHzhfKWBcppnHtcjS7ckfgd15LIR3hZMHlLXi7Qy3zYcwd6YDaekiZVV2KlZAHqN9dlR9dnTn5Nq5UY7pZrnr9qvv1Hg_v4zifT5LtYlJbd_vC6muK2kdaedNqO0SGjc60Rnd6Zr9X30-9fTQcmMaTrPtsoYPOWc2i1JyhQQwgaysp_Yp70R5da1Y_HIsK5UeApARxs0Hm93r1qRDnTT_Lauf_4mYEhcql4OQv8x6_yER2E9V-hyzxiDIn-rMtJTeqLaGv2GkTsz72jCbpI5KRc5cAsfelMOuEq9yCt6mhd0Mo768cSnq5c459Rvow", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107372845614918921549\">Lisa Puschmann</a>"] },
            { photoReference: "AWCwydhVZHZlUyBABKpr4msNmAuA-ulBnrvSaSLtwuy9YwO9iQvOZNjEccK4S3U4AsRqG0DIv0vitJQWSeXo55aDuEl2-5V9u3AqefJUZiBqx9zFzVrzNiVb6dVNA7BBtOEQ5CcGp2he7uSRPAVBunL9UfhJypzLbl1TtqrFUIvK39hnFOc10RB6VeRMKALZrlkOG7bBt-UYZTxTQxTeer_gUMD5NQhgjJgypqjZUFuYgLCwLh1dD5QZR_AREif_DrJCRniCKBVw-uwYQYcTm8jXgX5tVu0j9pTUeSMCBiGTOM0HdS7uL1fvidH8yOkSv1JN1X1rQ3pGFg9Vwtt7sW0-qGb9BYh-Hl9OX2OBvanWBcA8LCD2sWW3ykTQOqV8JrP6KlWt-pSAe6vda4sqj5ONG4vohDJ0li6WXk5X6Gv0wXoTYGawoDnSYbCOc4UVSw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102547198561283852635\">Amira j</a>"] },
            { photoReference: "AWCwydg5Jsa1OGpnEhHEVsrR92SCju5nloHbR2-A9s3rBs8d5XhTzdfKZalVf0VMws7j7pZkfbsGCtHiwDmgPqSTagYEi_Pi1Ww237wQgfK5pXItbO0bKEIBi2JP3JhhBTc_qwTvDiTpxxvMys96QevFnbjvUY2adTMQ0ox5XxOk1KwMbcW2xqci5NXqat4BJtrQZq7VuCeq5949n4rmmyjae4LqsUfttuQ7jYn8U4b83v4IzBbr-7Umjt56l5bMvxcmwXJNQWwjDez0zV-JTUhdrPhhtQe2eHMRP-mpEJDyPaA6mIZ-DZ2QxmZM61YjceIqox904qlTCUzREF5WK2wMIxzdtQpX1CTgblH14q3sLnzWDNIfPnQidqs1g_fMfp1MWXMPt8IvXEk_s8fbI6Q9iCx-SnFWG7bgDJsKxMm0W7BEGQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109998727081231745589\">Robert Stroud</a>"] },
            { photoReference: "AWCwydipi5s264Yv2hW8oEUHodzB24yoRwFb5ZW4wtWeRy4ke-SNMZn_oHihikN4R_UCvkA5ZmUehOIXXjRZfn-sF6sWEHYB9zvc99Lt5HnzzgQmSlPydyDBfhFx7aqnIbb96Pj88aHriVdj1ecHlOEHbJtvCIqD0XtqNZGyL1Noew9Ul29PO2dNn55oqbHQ1e5yCWME7CudAc_AWTjj2Ice7LrMjGqRiUqOnUHB1-Pbr7yTKutG8DUqycsh4UuP0yc4HoYfjNOWT5x1vm-RSY-V0fFfJTgvMErKY4QT9j_26V2K8TUX_mZhCUb0lhc73oLEMGT2ChCrgAd3BfP6yS__eWZk3Tj69Iw-QmEJyolnsOlO8ODboLmR2lcelgMfYdGz0Dvel4z6z-rpjOYWE6dOHBkfKBrwRW-q7D_N8NzdqQIumCbApT8fqo8lT0PcMw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117778465908511615532\">Lizz (lizzisgeek)</a>"] }
        ],
        summary: "전문 가이드와 함께하는 특별하고 재미있는 어드벤처 투어입니다.",
        updatedAt: "2026-08-12",
        highlights: ["전문 가이드의 맞춤형 투어", "지역의 특별한 매력 체험", "맛있는 음식과 즐거운 대화"],
        tips: ["사전 예약을 통해 원하는 시간을 확보하세요", "가이드와 소통하며 투어를 즐기면 더욱 좋습니다"],
        hours: "월요일: 오전 8:00 ~ 오후 7:00; 화요일: 오전 8:00 ~ 오후 7:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "5-chōme-17-12 Ōkita, Nago, Okinawa 905-0019 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://activeokinawa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17513676853280282208", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Active+Okinawa+Tours+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "에버트레일 투어스": {
        photos: [],
        placeId: "ChIJX0fVwQkP5TQRxNJfMfzV5mI",
        placePhotos: [
            { photoReference: "AWCwydjxfM4FlkJgz8WBsfCSo9HaaQKopFwqr-zwhzNpTGQang73ogfeLcihy-bWfQ-xgwgoQndRnGONCHyTOwqz7WZc3GfufWarwfuTTw13u_pk7P8iv1B0leYtKCcj9qgYMtd6IjjLjA4dvLKFES9PhX37-YK8GL-rCmkdsDLFpxI4qQcJCP6OmUILjDvIxAMK7rngqPFAK-nZP746oKUR8CnJwel565U4VsjVTkv-o6A5Wt7HrPKxAgD4wkNPzYrSyKAXO0mFdLr5OrewC9YjTS7JXlXLeHuPZLAJP0qd10s2UfHwiefTGhhZ7O6CNplL1M5KYsiSixWMiMVrJdseqr9FbIaK40bqF6wrs5MpGOENG6ElCDwBXlgth2kKs1IbhCCdzeZfc6kRDXq9yIC-6vr44fG9kf7I96N4us-tf1qlT4xrFiZRpiZN6zt_NMUF", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103931177938810742498\">Joslyn Haeselin</a>"] },
            { photoReference: "AWCwydhBLzoeAyW9p4X6Nr96hXFL-zg4yAoHiD-QJK3YnmEiN9xd9104FHvcHBhWb-_Ej1eIhna6oNCmNcbH01IUE0835ZZTCqnry655g_IQRUdqhLGkuJ1VffkUKqV1Js-KXWPpL7EBVaoUtVTpOCTG2DoCEZSHEY9XyNseqM4DUCn1XDPKh6gWQ4pEFSQ_z784vSt0yQeBR6LeLrWfiV1_FSmFvRvS564bJ2ui_CNN_EnOFh5OYz0JD00RnEyXZ94BX5VwyFcN8G_OCif3t1hJ1ew3SL9Bvm_CvnATOG3d02Eod20mfgyh48omR9qgDvqQHqsBJ4FLAZ6uXquFJrUZE51VEc_bUUJHWSs4gLe2GjWJHizXFtQHG1PvAmGrLmVxbJ1B2v58N_yw55mXr3LLZuruXbOQ_Bsz7CLn0xmQ-DkJvnkTsVOXgnQfFbGI9Q", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117666893962032233562\">Will Geib</a>"] },
            { photoReference: "AWCwydi6Xjiytt6zGNGtYEfpKMZlzCI1nzFI1BpLPQ5kMAh4X0EnmpiCDqKybmGCjK_9sqco6L5ahe80pqzd3Un_WRjw6xkCojUR0VlTuSeAYKu9IqLVZf-R-SfQ0gxPK2_1ZkAx3MX22Gs4lM3srKcM1AfFFR_lHqunxUWR78GRwHXJMwyUUO5Kbi9t1v4ucarnCmhzXse-LMDgdhp7naQADtY4rHdZC9ROqMfb8oC5aIHrZ_cT6Zk-xHzEfqLJc0kFa-T5o2yD3hu0Lbq8lz58QrPqE-WIWlbcHcN_1gDSUbvO71KoMuF7ywsvm1VSd7PxYMRvXcs2Gp6V-2yiVLN5Fwq45jOlAh_FQ3_niJAochNYgRfa-pgIiTmFhO6b0aHe--l9e6N2WMV3t8V-xNk2VMAGBWD87bSB8z9wxKPK7FXcDmfOwf6UUM3ABF0TptCv", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110102900305205641954\">Coline S</a>"] },
            { photoReference: "AWCwydhiacQNjlBeYsCFBkn0r6Rk7X9vyrk6_MG5Z5pfmOo_vR78_vrD5w4I-Cl_MjiLkHEoaJLgU6zY5To0Re_sIUdfOB-zo3QFlZlpNRtfy8lkkrH-SKGz5qp4cOvZaL1CT9Yr68cbowFTWhPu6LBQp8MyA7vL2ArDTgdDRNpSGwQ9SIf4EWJ2UFfWBXHCKHjtKER04lIVviy3uD1DqEtetPV_Bw8HgpvtzlLf3zkLJpWwZjqPPnpG9xF8mDTBBdcu-nbP__0yNesB5xzxQqWZqhj9gDWXDFcT8G_s_i2h_C2CGatDDRmCAmdC7AVVS77sYnn_J9SE6JsoCwN3efrtdx8IG253gtC0vxRriNxGCfcL619Jgmt1pf-7JFWCscCU6KOvk304-BZbEaUmmStwOQ9u0CXXB8JkHmoB-yfqKouSTaTFg8x5hBnRpew6Ug", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108205506018934721284\">Seph</a>"] },
            { photoReference: "AWCwydgmubJPMUjPIqbmJwyQgdEB-SSTNUZBvTAQCwwPoCgVD8NYVcYx454IgxjIIl1hDyfGEVYaHNsIiLNGywS2zxB5o3tqkcqxj4j-4L4H6kqem-oEQ5fU8RyimmzWRJXj2kj19dCvXR3-QNYCSyiHVq57bUnaeJVx9gO44TKlYLt_RkEX2_50yjq4wpG4AhDbD0DQ6gHlMEPQwTo_ECv8pwHQAQkWddUS22QJ0Om7jAWpwSofy88t6pZ8WaY35-pjyPpi2vLtTukM8xEpOGmWw3If081HvoCId_kbnPYzW4hAhgMjH3cw00B8hotsPmrOQrsNuSxMXQLLl1w1P5igdgKWgPcatbPmlNs2-tQKjdCP5dk2QQqT7tl8FaK5ySxtkqHt2T28Hnksz1T6OY8D1J9Gwww9r_gEf-WO1_Li0oue93cEthAgNwXD_x9MKg3D", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103931177938810742498\">Joslyn Haeselin</a>"] }
        ],
        summary: "하이킹, 카누, 스노클링 등 다채로운 액티비티를 통해 오키나와의 숨겨진 매력을 발견하는 어드벤처 투어입니다.",
        updatedAt: "2026-08-12",
        highlights: ["정글 하이킹과 폭포 관람", "맹그로브 숲 카누 탐험", "아이오와 섬 스노클링", "해안가 자전거 라이딩"],
        tips: ["가이드의 상세한 설명을 들으며 자연의 가치를 느껴보세요", "교통편이 없는 여행자에게 최적의 선택입니다"],
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "2-chōme-11-7 Ikehara, Okinawa, 904-2141 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://evertrailtours.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7126618739497226948", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Evertrail+Tours+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "하부 아소비": {
        photos: [],
        placeId: "ChIJWVybA5wF5TQRgDatwm7WSgE",
        placePhotos: [
            { photoReference: "AWCwydg6g_yC52IpgJlpc91yrndySWB8NhfJ12djKJAGKRoLQERDn2Gdn4ghoi4fvQTazb6C5k_Ke1V7vblfIfR6V_IUBCksCGLBycWBvqNHDwaN06FReH60gzTKCjNMOLiEvVPgeI-UR4O9k9t-0pjPxSh9RrpEOynbpXPL8qNYbJp2HWChyUsYvg-otdrTezmgsrVhpvb3xNtEXsr6wHkHJ4qVusHg9QDGlg_AvtnVdOw3Iiebdf6QmQ3T8X9OtP9_-2fWVlTFB_OfDKSfQ9cmf20BnDmmmlrYfENH8MdicEE1uJFQmodGI_Pl-od1pcZUqr_dNYC0uTAYU4in-XdmmQXNlULKhi_2SRCuChkti4FbPvNoGH0fYdLSC5goE84tlMqVRCG8Opnlj2E5h7kV8ij2fgrFttmcONBlCMjSjvztLIHd", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100350594685557097660\">HABU ASOBI</a>"] },
            { photoReference: "AWCwydj3ah71AzdTovy2slYoxkbp0fX-ld-YyJP2VGKz5gL-mwxPPizSd37nI0a4v9imSs_x9b7caDY5Wg5wWDMc_Z-QbVHV2Lu8g_auhb6E6KRkRKu_LPFZM4PgocZ3YBhxReNcIULPVu90l9sF8mXdvfnmuD6pi5bM8MiclXWZUafeHvQR8t8BHh6_Nd_TI5eIOmZHXg-b061Td5y6ReMnolwW_l6LrEP_n_WYcM7BvNhCqa4n8B2VhPrJxlBtq365CpqRa1p50Ap-AYTyIXV_Aqch2n14tl3XlK35PrlMdAZyJ_iUJI7zt1KvILMSzpFJY_p5GWrnfhd7tpnr2uSFXKCAao7I7nOyaO8uS2Nv5HCpJ1qy2KLUjs9iD82T7OmhMT88y_EOQqd9wqhsXcVgJVCHCZKYvv5atsH7yh15qFh9yeOrwNZ-22F1eLnDCujt", width: 4800, height: 4200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109125289033009672703\">Hin Lee</a>"] },
            { photoReference: "AWCwydhW25Doene-6kB1gdjv01MoUO5RZVD4RABCa4lqSMFJsBktkAI7HWMUJc02R5R7eLAl3V_oyDP6Ojm4uZsg2ZVpbV-CftDtpM9rWCNBwEnV38WX70hjgGuexCPdTIPVaxnJrYV7tafsLttzwG0h4Snc0udMU-A1AVg38KbdRHqXwSLqAnPNj4CF9BbJuzppLmH4SFpEp68IBIQiko6Lz2bx5QeDsy6_MqyuWX7b2MvfNuVaeuPJrO80ZpyoGMWL7VTPxgzKWSTawxpbFjAWNw57ydYeAGZ-96OdV5aIMEGwTxxqryLyE9J7GpaCc2mBOMuTx5ufPdVYcRWFum1wyuKLoDO3g9LTrAMeshG7eJrn8WRiGO2AS50A00psXekOqva6dv1yf8Zf0DtG_XuLOZgwyy7-y6Ioy966jvTzUZ7Ar52V4RJukCGEoQUqeBtj", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114845384803414504173\">Mireya Rodriguez</a>"] },
            { photoReference: "AWCwydh3I4gqAiJuxqj56rti0YIBoIMevjwPLbmcFv6YEyCoLH_kXB7p9ywO9CLSwW4aSfDytXZylJElpqndzWzRu1aDWXdtloaBA7o_W_Q8mercNEvz-B_vLfd1xSEKOMb8s4yYLkwxiRT0mYIq5v4cB-dLFEyjLypUXA1Y-VtNt651saHiQxaK_v0h1KX_7AB1qTwkayLk50W9Vy-R0cqSYac__GItMF5KLBsKi8wtFyCGBA5X4R9XAzgZMq2jiEl0htzEInKvsTJRWSDwBYBh0zcZdC1s4Iu2dl0fTodDHThyy4nHrWvyC2duTnNBopGCBjwVk6GaDIhNVBfm-Jj6weWrDmHjKszuZ2oQ7ppnpHVlDHAXjcJgiF3uQ9lDXkbWxHBsNtF1RiEuRzRcyJDKWZ5-QB-fKfMV9CROSFMD80R-IU0JPZ1y4AEfdzG0Wg", width: 4800, height: 4200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109125289033009672703\">Hin Lee</a>"] },
            { photoReference: "AWCwydgjRkrJu5gajTaamGLnBh0Bsi-Bu0UP67Ul3_TNOWPdFpc-6uQVi8r6mYxQL-Eqd75Y4nQYuqetOMED6grngxkqda3ESHOMwsX0BuCGz2MggXbOTcMrtj8C7tg3ZRy-2jH32MwUXlelGifuHJQ2nVMTGVN8b2PC94KbDtBxtMDQzLinA0L_-Ej81CCOFSlvGs2mJ-T7fC0YalRnEtZGS7u4zp3o9Ziw5gR5tWDOetsDuwS5Hvp0PP8vZdeTNyR_68qUO6OynDJurJYI0y7BGrnPuK_d8JAvNyEIP5Q0u4_tjo4M_h2X9s7H816veoCg4PBjCQOAS1YGCSOiH8cgItKAu_4ojRRjV128R3a4sHZVh7l_VjuxoGbIQGdnQL1TjZSsAQAHW_xa8qVR_4vwNGdRBndaVqKHRu3bNFV2vXxEXMrHZIe2mO6lwrV5zQ0w", width: 4800, height: 4200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113195535481524359921\">Kangjin</a>"] }
        ],
        summary: "야간 투어와 씨 카약킹 등 다채로운 액티비티를 제공하는 최고의 어드벤처 경험입니다.",
        updatedAt: "2026-08-12",
        highlights: ["얀바루 쿠이나 및 이시카와 개구리 관찰", "야간 투어 및 씨 카약킹", "전문적인 가이드의 친절한 안내"],
        tips: ["비수기에도 투어 참여가 가능합니다", "활동 후 따뜻한 소바를 즐겨보세요"],
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "2557-1 Maeda, Onna, Kunigami District, Okinawa 904-0417 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://habu-asobi.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=93122513515394688", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=HABU+ASOBI+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오키나와 네이처 오피스": {
        photos: [],
        placeId: "ChIJEZwGId4G5TQRlTGhI_OY1rg",
        placePhotos: [
            { photoReference: "AWCwydjo-PofgzP_kxBIF1QwAe_WSiDi4AmHxJz4N-w0c03cKNkzqV8ZUJBg0Tk2wY-44NGYRYeZElIb15mKHJKhZfASaodBI4ozkCF8Xpj9nWdEvIIx61y-XJtFKqCxJ81_sflyCJNhvqaW69dbj-gkeb5Ty2VITFuNRuYFEnu36GYbApZWu1RqDlGmBlfvFcn9FYtoSUUEziiiIUWhIQNoqfDjxVT7bVON8puAD2LidAsEj55bBi9Pzzm4-N3d41O2id42nwKhMR1W7UiXCvEARrnWc1PwyTaEaF_IBnkCWbf7sQ_oeHV7R8ISw0qGwdPoirxR_21zAba2LB2DF-inm7pkgbvi9vi-RWnplxQLvouJyMENjJYWPxfmsoGScADWXN_ireStsNDS9T0jQauVD3hQW6wbgpKg2v8NQWtT4bxHdzs", width: 800, height: 533, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108373956311463562407\">沖縄ネイチャー・オフィス</a>"] },
            { photoReference: "AWCwydhxh5w257yMTQ6ZlrZ6DcCtr-h2zlg67WLRS7zPd-kSs8hRdYa8-Zq2lchM5J7rWNcCDDOmEhIaDSF-M1NGc5Al82MfKsSrAqYbgDZ9_ILjo-WPmMQQJFosTFUquNj2-D4DqODuPHySoK5bAQYFlNKxGYOIrogFJ5VD7fPWd_8ec0eEt8n2KmrjAE2_tyQ8RN_q-9PnsUHAZHq3Ez_bqAypGr6UuN1buIatZqvTsi_CnuTmt73jM7I_ls--VuF3Wz_IQWtqvd_XJDwRY-MnrREZv621YgGY0reEmzg-Jbq8cWFU05hecNPMDSjPiF5k5Bt7ai_Ug2aKYuZXH1Wd3NSd1R8KFF2MxFduAHhSg9hBo1F4eL5ZL9b5VHBC5C-77mOm1KVahn7itt3--c0AB1kHKI1vWZRh94qohtYs1Jy-Be3f4Iwtp8BRKEdHZueZ", width: 1448, height: 1086, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108373956311463562407\">沖縄ネイチャー・オフィス</a>"] },
            { photoReference: "AWCwydj6P2xcsZoBO4UYiW66aZSWwkmiTgPEAKGrwFioK1iC3-UKB5mq663Iz6IJJTOq6A_9JIYnE3POEyoPedbl5T3M_EHm3OJZN-dLl7cGu6Pp2cjP2601XkEmBIJXIwRa5aKIPE6lUXrGLX9bgcr6XCNzcVJLb4Ug0ulpqANpYMi2Jsf24TU9WIW2GLwqV3SQr2tXEBEhWPVdPAeJmni25LBFJwU5jUbB8kuUiMt8jJyVlgm4Jcps1ZqcWhgfzgmH_eMwl23YflHsTN-42Hv1cm7G6Kms8dV11ybuQjk4zI-EwwihDNZyGaVp2AA_REpC79YYLYVyTofVyZC5ZGlTGL2Yu4f7u8TuGGPHSZBOtw6AYB07PO0eh9DEGnwCnOswpMTQY-soPiI5uZ31Nfy54OI1V1PNtuT5ojQkMaRlyLo21eenYhWNoM8Muwi1q4P1", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108373956311463562407\">沖縄ネイチャー・オフィス</a>"] },
            { photoReference: "AWCwydiwnPMmecbF9vhQ8xca0WgonNWpxQOK-JKNm1ZeiBCpBaI_4d8EmZCURAo-MkZlDO9cw-EgpoH5yLu_qFzGo0unGeRAW5rcf9M5noNmzfiJoURt7KmWgwHeERyW8wwKL7R3cILz8mH5jDzPRCyDW1ZDF-MzPiFfovoJl_ZaxSEdXQC3kVT0U1IZ_UT-9CQprw8SXY5_IIID7bT7PdFQJB9mFzigggiHF4ah0z1wk_KYd6wP_9QNVU0oB5A8V5c7rSUyycMNeRInnvXLsnLHv9Am05y8td1lkUjIv4kJj-L7xf6xaHbQvyB-N44OqJN3DawdAk6WV9gdRDvTqfmzVRyaWP9pFr8Hy1CJuyCt1SMRgaTVF_ViIVoAk_uOuF0O_sysz2OFmHOXa2Z8MKK-eci4Vw1ee_IjGVqCYjCGB4yDmIvlHbZP-_sZOrdkD8OP", width: 2378, height: 1584, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114695064399749032683\">Brian Murphy</a>"] },
            { photoReference: "AWCwydhGkHhCyTueB5L5xdnfcWYLaNcni0KBua5VpbfPBKFtQPgaikzikuA906anVSlgmpwKMJhBHxfZNs1wNRcZfT9xh0oZ1FUztG2EtScjt-WDbNFwoSOML2YyvUOonjOp5fxeyxkViVfVWL3SjrO5_Lxfog1lH3aQFtiXazFAprVzOCWWqrWLHwi5gSoRkCI-Xh3Johuj0TLayJ1Hfnb36_Xig1K-aFmEuc-QYKKZwanM-zNzmlyfpjiQVBHJWHTHHoV9Nmv-nGwYXrH9XXtKKbMQUKqktFt4ajlgaE0dqDlPNb7cIrXtHwjiKH_a9G0dLsdi_xb10RBQIrvb0FE_1wVdHewApRI-75gGJa5CXal--4bLy6a4lnLUN9xI1UlkYYRu-Pyz_QPueTOBnf5_iOGHb6dGSnwaoWd2BgipCSE3VR8UBx3t-qrdtPdHtkBy", width: 800, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108373956311463562407\">沖縄ネイチャー・オフィス</a>"] }
        ],
        summary: "킨 지역의 아름다운 시골 풍경 속에서 조류와 토종 동물을 관찰하는 특별한 자연 탐험입니다.",
        updatedAt: "2026-08-12",
        highlights: ["다양한 야생 동물 및 조류 관찰", "전문 가이드의 박식하고 친절한 안내", "현지 식당 추천 및 맞춤형 서비스"],
        tips: ["나하에서 픽업 서비스를 이용하면 편리합니다", "가이드에게 현지 맛집 추천을 요청해 보세요"],
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1001-2 Kin, Kunigami District, Okinawa 904-1201 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://okinawa-nature.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13319001118037062037", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Okinawa+Nature+Office+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "지지지…수": {
        photos: [],
        placeId: "ChIJy8Yb_pJp5TQRj5wV7sMOGAU",
        placePhotos: [
            { photoReference: "AWCwydgkwqG85GBKDJ2UKi3OVi9T8UeUNUXHyKEMKUTy5KPytwfntsL7g0hh833NuWECdxnL1_YtSCozf95V3sGEZJfiPVh_xV0-TyVClqN-00zEzCvyqjadlJKejnVuo2SA2Tg8dT0hNA3OqBwdFW4PihkR0xUzVhmPbuZDA0CD9XOwbUy0JcXzM990PubQfzT-8ab6ne0uD07vGnBcSmClBZHoX5XCbuYpZojudcv-l7BoUyJsoANNdXhdFuJS9ZsnyKAoiDg_YecW8kj3sLR555yfpScj663K-hyYsIpbkNp0fmIZmC_w33bl3MSIW9ooKU7kavi3zKsOQvoNqrBV6rd0POq7Hj2mzY7ZzC3S1KXvpQKkySISdeyV3J6x-FygF_8w9_PYHFC0gtYiLsEzwaKKNCCKF-1JD3cJCRN5u6WGJ8C5", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100919885671040934619\">琉球ドライヘッドスパ&amp;フットケア zzz… すぅ〜 瀬長島ウミカジテラス店</a>"] },
            { photoReference: "AWCwydisVUwFiRX-YB9sBf23qpRlAy_jkcMBOO4OCGj4hqLY2EEQcpSdUR-z0GdAI7ePvj6nd3QX42F8PizgSUrF_zvKLDxQ3cYgPiSGJ_pNasQ169imjaKIgASeMmWTP6hOuhc5l3MkPt6ZLlCUGpCAVrFuAkncOoYoz_6VquyerYMuYS6h1YZC3fEv9VlsjNF4PzrzViyrb7QIjPSOVk5W3uJq4pUfi7zjD11K_clWDgEAXt8YviXPYq2_D5JAZikFzcWA5NMDUQfeaFe5KcjUbRh8Mq3l5P2oOuznDyVOlBxez7i8usEAaIzROGKK0LmY8cR2CUylkk7dMuiJ4lrkMEEKK3CPf2HHHUvEROeoAAP5_5-0qJMJX13L0hp0sx8EF32FUZPyQRUXOoHE-A1-IpRUQ5nt9BMdEICug16sK3529BxQk9exZOCNA1dDZx48", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116946873922724533559\">Joseph Ng</a>"] },
            { photoReference: "AWCwydg29Ex0cI96SMp8aSbpLVJ-JYPdfminLUAYc012nB4drYLOntDvtj09XYKZgLuOC4GEkhe8ioaYCFR8J0sB694u9TB2u-Ii32s6MCjAof1c0wY127UYdOi4YyOWRwU4lMYLzXr-BTShuoP8aBO8JqSsdcmWF9F7ICilA26nljIGJtDLKz5A4PY84O9rRA8x0t_oZsjM2UIXRX06j7Cq8MzfwFEZHWqGLtDR1ifOIiGAnPWk-Vk9b-qOsrH7Z9OqBrMRONp5sjT0KVluh-N4CGn4pV6G9QnidjpUGPnVRbtu6KHcYZqbPcl-d0tTMk_pZSw3bT8L7hdiIPVUEMHytAjxjoeNOp5t7mhs_ue_ed8IJ70S0uWnK94LWraSXsJNsIfE3ZeY1a5hR3UyRxmnIVQg7PphaXTJNA4CLYv_iCdKxWz7", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104922619047428759540\">sunny lu</a>"] },
            { photoReference: "AWCwydgYRcT9ELM8EK1jZETqGMOqLfwQj91OsEH_yHMGIguG4aOoGnSV2MY_nctHJLUM53-WI7Yp855adCLVIvPkB2GECQjMQBMHxdWMz3-uIVd0A9jFijhE6OGahRs3sPQ2BFvX2vuKHcOjz3DtD5O66CadzmEhf8n3wnSlinfM8x6GerxuGip_3LRZO_eb9b3oalH6iDnuTIq9b2wgejgwc_Qf_hRom3cGPB8WWyD-hB5YyQW45T8H6p4VCzz01RQ7FCvA_3myNAFySIN_DjqNqgZt_DxfJQFB2uBiAUEjAdzubP1g3NmfkzItViTbuCGyfe7FsBz48KiEWuy6IFPie3N-yIQOqyVUhSrskcl6aBMee1qUdZmfX9l2HwjBSngqTJ6XLlAL7YoLs1Hsg09H4B6h4tbyqXjMgySp1sU8ip_c0q0d", width: 2509, height: 1670, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100919885671040934619\">琉球ドライヘッドスパ&amp;フットケア zzz… すぅ〜 瀬長島ウミカジテラス店</a>"] },
            { photoReference: "AWCwydjce-wKzFq9LP6PjCgw96R9uBbuPf3ECV3PiuK62UKA5_8o6E0GbERSTbi8o1CeGD0RfncOFzXyWIXzMfTi6xhqqSRKGp6ldSMhXwQDkrj1Z-cH-HoeqboR8YmRj3ohEiL4-l-qmRPvB7yXZCMrmPTdYNKv3LWzagNpJhAbTP67T4ZQTRseBEw-gK-bHU2S6fcKeSOshe_jx07OjWPeclqzJSxGL45txK1SioYg2d7PyXp2FA7v5yOHCKJYxEW7tGIBCBLxZkGkmlBXsaL1PWejBbTSw3nitzp1LNJHyM8WLwXlcQfpT0kyNsjnluCW1wiZn6Uz4SuKoz9Mx1cALakmzSBhirJGOMOzGptPA4kTqOdwCVK9MsVnzmq8g1XYUReQVIdBJ8uGV_Ttc_9AwZmCxPB8fsFAgloRYz5dNOWgwNIh", width: 2509, height: 1670, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100919885671040934619\">琉球ドライヘッドスパ&amp;フットケア zzz… すぅ〜 瀬長島ウミカジテラス店</a>"] }
        ],
        summary: "바다 전망과 아로마 향기가 어우러진 힐링 스파",
        updatedAt: "2026-08-12",
        highlights: ["아름다운 바다 전망", "아로마 향기", "친절한 서비스"],
        tips: ["여행의 피로를 풀기 위한 드라이 헤드 스파 추천", "여행 마지막 날 방문하여 리락싱하기 좋음"],
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒901-0233 Okinawa, Tomigusuku, Senaga, １７４−６ ウミカジテラスNo.44", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://beauty.hotpepper.jp/kr/slnH000591091/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=367059604306500751", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=zzz%E2%80%A6suu+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "류큐온천": {
        photos: [],
        placeId: "ChIJJRC0-B5o5TQRlcmA9SBBztc",
        placePhotos: [
            { photoReference: "AWCwydi1CsqEZw4AyMQstLTJF1Nm_y0OjIhUQH-ug_RHz4bdYPQp3bUUqmpepMetZxm96-5OeM9_KaQ8LZkFNM_ka7h3eJOUByL3LTSuLiKlrDZha7fKVFW3y_gIFlygkMS6F2MaGJM7i-_RFJxgWlcY8fG5aL7JuI7BoX6t3SPPfirrJ8NY-BjdLKM4hwMpi5ExJGii0Ar7PH6W5XP9NPQC-tRos-58pC-A3rPiOJIm2t9Q6AdGmpfKE8TWSs_juOS6kLVPKUP3sHFeaXpMmRwyrFD6qgXBa5bQOmkA99vD8kQT2KMIJvciEUQ7m8JImPi53FpqCiJESsmJV3RDV36AoBQmLhXkNQEnXIQyp5RWc1nWlL0vhcoyUWSMZ8jl4Cuyv6BjS8leMNneZs5LbsusVg1r6uhVR5j4xR2VD15Sj1wSK2HQ", width: 608, height: 276, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104774950678207821313\">琉球温泉 龍神の湯</a>"] },
            { photoReference: "AWCwydgzwOnLd7rDbZAn2hfjrDpr7xBA2684KqHeWzkeSXlX3P3SHltgmFegAgjWrAm4ptbkkEhhP_VgcZlTCO-HMimPVjlPNkQn9FbjfUCpupefLBW5Kp0urrISvzBPJBz5-dq3e4rdgJh3pMZS5vFS08DcKAXTzIZpYRQ1tzlVzaLlKaFIr1zPeYdyNJM4HR6s9xTjH1bgWKNRXAwZTfwcWI5N5AlJV1E5mCp1gY8FWW4OPYkY-1lpPeeuJbYkVR8tGlaz7_G10gzzQliY_QnEnXbd1mjJxTzY1eb1rlSC9lzTtw4SNFBvCmWzhywtG7CrrGfi0L2MLCmI4Cgcfqzh5SAk5-zhcmKwqnueCL0y5j7rlgQxhLJGogg7jeXYMcYeHn2o6jeWbvA7mxRw7677VQ5qZSbyGDYfM5W4ZA7tasK0ZzHc", width: 1280, height: 853, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101594332965423958030\">ねこずろずぱりす</a>"] },
            { photoReference: "AWCwydiNWDDPFud7OQ2GtzjwZyA1P7gUqBUIbDwlLt_rrlemaN65iwe0U7KC7hD5ryeuWIvtE-FpqOftPZxwrvT20t3frfmmjP-RP7bI40jlxOiVBdpRDvmMvCIkLY29bUkZJYU7PNrfh513rzoz3AGuBXRndBCZjGSihWJXSilgfee0HCN6oQ0vKGUDR6XxaERIucHq61NcihaUNu-EmYEmSpoMFFlLkSw1AYerN2l-9LMrBjNDvB1FRULjsulNrAE0G53IZLAnuNtamg7rm_RsBrmH_xJJNaVLQ88n-AnEgZKlESpbw0u2i8xUb8PTmwBf67WctDVsOkMLT01KDC-VYZfr3VTKXMhtxa4Jgdq-_POGrGBCm7w2d1c7qZ0wP5Z7K5ssyWi01jAtQaTgqlUHwoQOIyP4rjpHJXeSCk1FIJD-HPxV", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104774950678207821313\">琉球温泉 龍神の湯</a>"] },
            { photoReference: "AWCwydhw0jSiagH7rqxOdkAbcwHnI_lJMWUBCfXeK0XLF5xHqAFnbdUz__k-cXbRPXS_YNI2dtcnWonZ3JlR0_E7xXZV_YFfXIB9M68IQE7_U0AFgy4WBiusgA_0cqiDe-Uuw2QGchJBc_Qq6DcjNqwZUuwXj5ycpehfR63u-QNEHr_N0-pBgdAAsHIMeifGA2oJPA_UDz8XjckPKlB1vRhuD2gy5sJTVF_Kpu9IrSl_YjHiCWaxES1qX-cJOWY-_JJmQUWSz2PB7f9wnxqDJByF_9O123OGLZkHchC2oNEInpuGus_fFbWFtmFlwIhWE9VPOR93_fPxgsKBjsOKlCE8waiuFGItV6vbhDksWSHWFgGlXjqROd1D0sbK29BELeXqO_Lk28kPL6ua9h6eiQBQY1CSED7f7dP8eVy0pXBnxRjRNw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116993789357060769288\">C C</a>"] },
            { photoReference: "AWCwydiKBb9uuAeGLHwNymldHA1AtPEAVr9lB4O0y0PWpOQleFcJmB72qlH8rpg2O47dgvohqYaDChRQdMwwvTKdDO6QdPoI9qiRSfOPz4XQPIE8xeXNO_YPBQBYhHnM_i_hM90LTCppr7LnWJEKdGSuaqxDJ6g_MrCVEy9zGAK9FF6EBGjDvXwDQqfZcvv4zPbOeOnpz4Clt_merU2WBjNBtEHiym-NHHxH_SNP1LSXepOzHsBjIMq7pnI4u2dHuP21EGOdBeApOH3YFemPPmCxq9PzJuJ_YGMqQyRLmvRApT1C9lcSOzRooZlLmExx1EHDZEVuvjpPKWJlRiTz3FAJR3o-1UKIU_ShRgF-N58yH-a2jvGm0XZIRqFAUMckQJYM54WrCP0qh6gr1VmiSW56SzcC73mE4AbwQv3GsPzcGMU", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104774950678207821313\">琉球温泉 龍神の湯</a>"] }
        ],
        summary: "편안한 휴식을 제공하는 스파 시설입니다.",
        updatedAt: "2026-08-12",
        highlights: ["편안한 분위기", "아이 동반 이용 가능"],
        tips: ["아이 무료 이용 가능 여부를 확인하세요"],
        hours: "월요일: 오전 6:00 ~ 오전 12:00; 화요일: 오전 6:00 ~ 오전 12:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "174-5 Senaga, Tomigusuku, Okinawa 901-0233 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.resorts.co.jp/senaga/ryujinhotspring", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15550438173170518421", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A5%98%ED%81%90%EC%98%A8%EC%B2%9C+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "츄라스파 나하": {
        photos: [],
        placeId: "ChIJRUzvaJZp5TQRuL9tzIK5dBY",
        placePhotos: [
            { photoReference: "AWCwydgdgU21Q89RGy2p8xyMm3vXv_0PnxwmzrPOxOIq9ajIy5KOmbY4Rr48Gxjr8DUOzYxo6LTZ0TRLjbgkrrnMy_rkohy3kK2HumMpwFety6lMQFeHMAS4MuWTQLHxlu_A7ZJMK2nXGwguHWyiwH05RQ2kaW57g2Omqzvuainr3pyWA7OhuaFREGmnpsXVLcjNDFLbyztrWhkIwf8P23YGsGMvGz7r-Ns4vOhimX_DawyhkDdugpZx5TvhpYFY_6agAXLjTLCbYQgw4laojqMbEgCym8ihjYpR9z0_AMCJWAy5jkXlEgEomtD5JgQH9ZT_kktovWwZeZ4qtAObFzvARc2oPP5t3Ql1q3hGXs4E6vqKDpZUA3pWVC05pYEfeyvnhvVAlHq2C84W1fGOpI7mEf1DrKTKyG3JPaNiMRI5iim2DQ", width: 4500, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101216537766662852205\">CHURASPA inspired by SMART ARYURVEDA ❘ ロワジール スパタワー那覇</a>"] },
            { photoReference: "AWCwydhsZLRWKahAUen1J0YlJYNwz4codsyrr1ZShTjRMjGfz5I7zbGskD3HsmNZXJGKosI_jgNiI9ys3hYChdR1Zhad3MMQEHB_neMCRUVT85AYt-t5OJRQ3Zv0AZgYU7izdDaRlp-FckU0MGN8FoKa67b6MST-B7aIPQ2d_rzdUqgxoW1K07c0-GGQk6vWlhBqwwNiUmU5oAPzm16UDf4zynPieTyFEKaluiaz9-ttGzQSCpY_ysZC_WX15oj60IaXlRjn19FJQHbqTIyM5VUFNVw6Y3Y-XmvIwhLw05L4KRw8Ff8--E8v0jEZ9JyDD4WJMdxu7lWG9wHiaeU36IfglV0S8FavhvZRnZgrRQZ358ewi9-lN8yjGfw0KupPm6SvlA9a8vacg3amkGsvFDfFWsZ3_R5A-CcXvCw0FUaMQTkclw", width: 1500, height: 1187, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101216537766662852205\">CHURASPA inspired by SMART ARYURVEDA ❘ ロワジール スパタワー那覇</a>"] },
            { photoReference: "AWCwydjS9nATTkoS-lHTHLYwggOhMkNjEyEaqv4abJDDfrre3LgZzSuIY5m_VuuVAu08XA1VmaeETSHNgsyNJUY2Uze3Ei5QYejlC_7ZShbm7FB41GIizH3lgExhs3a43FEuBq-vsTWtD65CKvYS-udxyqWfmFlFhJNLc9Jq42b88pAZUuNvnKGdWiFVEBEFPKiYIp3MRlCNK0NyIn0v1551at4171sFKTWncJ-l6_U5LmCZ2W-AY5Rq8S8nhzsg_7kc0dHxHPSGGpKs2J4KeqWtmACubPk_VFTTbyov0z4dvH0Fa9IRv6b7hGn8NNax6q2-JrnmURPkKmnMt0Yy2mSUOJyVCvg_EPG_kRhWJwHyIOO2kdaWwRnLtaUw7WjiXp2w_CNKLQRsDOvzkkwYa4HSXx8qLn29h6Y4sgBGhteDYqO4s5zseRSQXcCZ-NzNVQ", width: 4500, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101216537766662852205\">CHURASPA inspired by SMART ARYURVEDA ❘ ロワジール スパタワー那覇</a>"] },
            { photoReference: "AWCwydjMAnDyu9HMjV648MiCJBp7PVAuCwKt_hVNOlBifbaKM2s1BoYR4keBIP0MO7BbjdIXKLA_j0fAofd2c61h2i3m9CDvMaq1pFmCRkprHdMyhTWsqsTeBc0QF5VChce0yL0gu3Xs2NjcHYWZ9GmS994JRJaXdwFiyz2C2dBXUX6aZrGTaGacfwSuOHjgSy8T9ph5WUrxl5c-pttXQhF_cubemAv3BJT1AAo4b1G-n56J5UoAGdLG4BXUgRyQpnrLrRMyOZFCdjsOWqQDfdSYbRUGnqtaPyiRcDqH1zGz30JprlR7okXpEU39cl8s_HRKOx3ynfFytEhz12jJK2idLC-PvFJXrAIIuuH7a2jWD3P6f_FhMUPPSln9DgY8QHN5T_PbMj3v7endN_eTzEUVrL_xghFEoOqxf1vRjvARn6XyDeXZ", width: 2067, height: 1378, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101216537766662852205\">CHURASPA inspired by SMART ARYURVEDA ❘ ロワジール スパタワー那覇</a>"] },
            { photoReference: "AWCwydhGWtmWydSIbaDTLD0XH4eGyq5g28Qs9lkyEE1kpefMvem232aT6i0PxHpfHFwPlJ8mCiuZdo3_cmpjmQkHv-b3LA5cZGJywzm3XGnrZ03ITRftrLZcEgoU_HOR7EBnLUrADArnuGJEDjCrt85Fo3gPRSqPQ67P-tbVg37SBtoH81z1yYAQDbXflZzza9uR97eGx0uDqQWWPk7zvpbv20xPW6UQvgR_S6p3dNZk4WN1wq-mkZzdN0MME4vB9JwROI61xZGB1A5_leGu2Uwiku4wPPuc8VJi7rIPK_Pjk0fWecBcFDwFnnpyGGg-5s2s2XOxnGgozQ-yLxfS3DvgRRN-sTsLMuV4lUwLl6RYwhq5ghR2-AL457dvjTwZl40-ZEXePy1gLTPy9M0Qb7s4ZoCqf8kllc9YwoWHO1t7r8juxZBMkARjUK1McINHE2Pk", width: 4500, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101216537766662852205\">CHURASPA inspired by SMART ARYURVEDA ❘ ロワジール スパタワー那覇</a>"] }
        ],
        summary: "정성스러운 관리로 여왕처럼 대접받는 기분을 느낄 수 있는 고품격 스파입니다.",
        updatedAt: "2026-08-12",
        highlights: ["파도 소리와 함께 즐기는 릴렉싱 타임", "정성스럽고 효과적인 안티에이징 페이스리프트", "아유르베다 스타일의 전문적인 관리"],
        tips: ["스파 트리트먼트 이용 시 온천 무료 이용 가능", "전문 테라피스트의 맞춤형 관리를 경험해보세요"],
        hours: "월요일: 오후 2:30~10:30; 화요일: 오후 2:30~10:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "那覇市西３丁目２‐１ ロワジール スパタワー２階, ２階, ３丁目-２ 西 那覇市 沖縄県 900-0036 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.thedayspa.jp/location/churaspa/?utm_source=google&utm_medium=organic&utm_campaign=gbp-chura", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1618122137559482296", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=CHURASPA+inspired+by+SMART+ARYURVEDA+%E2%9D%98+%E3%83%AD%E3%83%AF%E3%82%B8%E3%83%BC%E3%83%AB+%E3%82%B9%E3%83%91%E3%82%BF%E3%83%AF%E3%83%BC%E9%82%A3%E8%A6%87+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오키나와 카리유시 리조트 엑시즈 온나": {
        photos: [],
        placeId: "ChIJaykEeQoB5TQR_4xA2GwVxj4",
        placePhotos: [
            { photoReference: "AWCwydgoDjCRlDigHNVi38lO9jLdFljdUyarczpPW-ohPYJAbmDah8PYUVKUbeV5-w2YonHfYoxi4DgVIj7S20Z03c3CkFqb95YZNXG4zvyoZoPb2UJQiFJUjPcVOYEfJF9YYNO88-T-_VYRf016dwITc_xEHqKkYv7GNUyYtbjtt-igGueAKiCRycC-QkfIs9O0nJvR1uxitcNIPYOJouXSkFx_RNPamn4et89Sp1vWkyCH_eA6lSXXcEF-vHqt96kF5r6-zxutASpZpH9Yur256f3JDTFexixBRztd_DdVgLIjtIHc7yZ9To_b35ZplzLUaG_xTy1NcIapk1W3NEizLS5TL4D0jt5XFpDgt-0yj8IE090VWO1LrFoJt5QFGu73b9SJm8RtjhyeVkcdqU5L36HSlbEUwodKlqQqG_MwKDy1jXVVII_NO35PgmIMSFq_", width: 4800, height: 3203, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114828907226409986121\">沖縄かりゆしリゾート EXES恩納</a>"] },
            { photoReference: "AWCwydhlmxqkxeoIjxtJ62WnWofbF2G8pAWDYygXVX-3k9-ms-x5JCfECS8VDSlHsqM2hGb2mu19o_ym1Ulmcr7YcFB37JGOTZLHhaQ9hrqJvuBDmYG2CLWyU-e9FGDpEwgM2IzWNdbH2w_6JRz9RGKjaGuYY6SvcdVCLit__0qb_wHwRDzbOkbs6yfSBTLhtIaZGdlV69S57Saojg89F95tGBEH3Ly0DO3MJMo83cxuSuhDfMGPvpipbFip3rCNFZ5lHp3z3Pammpv7xnNvyxFOIApVMFGbMKMZpsNILPutqHnc8CsEHsMIK6HH4gGiy3_yZo-3Y02C2xp3YpHfpi1nFf7s8b4VEDv2J7dE-h7gm0d2RZPW3F3cvDnx8wtMV6MEjyDBbp12XrZjAf4RM1RBx4Ep3sLdfC1LOLqpq8jc3SueNF8RVtAi9WV2k8Q_Aim5", width: 4800, height: 3203, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114828907226409986121\">沖縄かりゆしリゾート EXES恩納</a>"] },
            { photoReference: "AWCwydjkJ7yw2-e7eatM4q4YJacE-Y85j_f9Y4XP8vXKBtOwb_aXLkjxWMFS-Uxi-UTg9GuSAjw3MzfwG-ApZhw2e4_Rd5X9xEDgl6bY4yX7sNHE7Y6U6PgpISym_DGoJOpts89FHCy2utUXK9cdUQSMjOT2VZZS7fIfTZCDtBzKYdiQweIH1psyj3Oc1db9mMjUbuZMLWDDz_ehUcZAV8WE_Bifq7lcZvqNLAPAD5vftEWj91kkj3ts1G5VBasf42eOWGRAym5GSFJ0KONeySD8UEGsg8wZvXqlsDNYx04UAWui-7swM1tw4rq2tP3dyQbISIuiUA2IPjE-pnB9HuYK0gtYasqBVBYSp3CQTmfpg39TZoLEzr8LWy6qOjo_3CyUWX6ClR8jLkmBpSQxvDeLdf37zCfzpzkaNDWX3JfS_T2338BRqGTHmAJ-8WswqX4n", width: 4800, height: 3203, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114828907226409986121\">沖縄かりゆしリゾート EXES恩納</a>"] },
            { photoReference: "AWCwydizPH2HM9nWrkVSTEaH5KElJFVYcDddA00Uz5ex33zUlA2tjCd7wC58jwhuyifUDulTEmK_IHLKnR_OTvhx_WX0mSMPAPLPLIBT9Hqr9mSkjIoVCDEJqPOI8WZ5xH9C0rtPfHtar8rvP9jSUe0m4gWRb_R5nGSh7DGeqQzuJ2KYhrRAUIBrbHnVTKOS89zuzYqiXZh3-K4M7PdFr_KpgWTtjk-0m060aOFHeHkmufkSDeH8Ks69CdA0VCVMOw25ZBpu-43s6MUo77W30qHYQsT6hjU6fqp8lleTHkN1TmfG49zosmg_2gciyD013s1R-ukzxFL7iy5xQpLIk-phHs-0NgvA9lHuQ6IsA27hsnE3bW68tO9OW1jvzgamlJF13Mo6tXBOrxz_m8v-r-btQo63jwMWrEOHCecDVxchXbsW_kIqeuRBbzNJZI7OCA", width: 1800, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114828907226409986121\">沖縄かりゆしリゾート EXES恩納</a>"] },
            { photoReference: "AWCwydggyYjl-XXp9Hc34M4cX_JaACxLpOxm6Geeew1VeTusWIZjaAt67KNQYfkNqZ5bQma1zX6u6xvWS4ISYtoIR71Rr8LmxE8BAlueX0T6lhf7eON9XwpyQVZLghy4ATb9Ct8fdvwjt3FHZOo5Ct0NxOML9JhfPckSCeUjivhIVf_BTziYA_2er1MjtUTF_yspTVJjgqf9z1Tdvgrlzs3Swo3qDhdL_x1ydgUg7T_x8QKff0h9FkDO8k64GkMazastCrvnWVPT2r6QBBy98v2oAfl4Xad5qxjBsDAEQ46Zv1bjIO4mci7z0Zr8FzUQefjz5PdfPYOg5JaQVJqb3abqQxLGZ-d83yqg1-AfxHvlw45cv-O5umkst-Gnyh72YO7jxQKm4jMeVK5m4S9KYcbKG_d9zi1OC74QZ_L_eX499yPdqhYAVhjEDY4ZhSXjNMZC", width: 4800, height: 3194, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114828907226409986121\">沖縄かりゆしリゾート EXES恩納</a>"] }
        ],
        summary: "편안한 객실과 친절한 서비스, 편리한 발레 파킹을 갖춘 오키나와의 매력적인 호텔입니다.",
        updatedAt: "2026-08-12",
        highlights: ["넓고 청결한 객실", "친절한 직원 서비스", "편리한 발레 파킹", "인근 호텔 뷔페 이용 가능"],
        tips: ["조식 대신 인근 호텔의 런치 뷔페로 변경하여 이용하는 것을 추천합니다.", "호텔 진입로가 경사져 있으니 도보 이동 시 주의가 필요합니다."],
        hours: "방문 전 확인 권장",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒904-0401 Okinawa, Kunigami District, Onna, Nakama, ヤーシ原2592-40", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://exes-kariyushi.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4523326432969002239", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%EC%B9%B4%EB%A6%AC%EC%9C%A0%EC%8B%9C+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%97%91%EC%8B%9C%EC%A6%88+%EC%98%A8%EB%82%98+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 리츠칼튼 스파 오키나와": {
        photos: [],
        placeId: "ChIJfQQgIvYB5TQRRoK78eZBNws",
        placePhotos: [
            { photoReference: "AWCwydiLD-l4vbEQBfYRHfdwej3VvkjJqtOxTTQrk1bPEYjkanGryBFsfZBHT65JWfLfuANgHS7pawkp7eMWPlipdI8GLGCW9nxIAyYi7kMf1pXECLhGHGAnUe-LoIeykEwXKg-zcZ3d_cIceMVRYBZB9vGqdcN8uYYFoeXV9S6T4EysxJBk9NQvKC58-lZ-5Re2qBZzvtWEmkjdzW76Kp4Kbrvy-73QVjk_2pTEmwGDVHwr5S4P4akg4sOMTjc5S7BgL7iNjrBIgplokou5N3oh0NtqD36QKNveuP1B-uVfnumrHEM27nlnXqN4z0orWVZmiRe50bu53821huD8dKmXcsQ20b_T8GkchIWzkmFOM4K78A1Do9b7ectJKyM-coZ4P4SK4zmC0y5KCz5y4HjnsDz7-pkv2mwpV1BXdgHnay2x1fk", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115839721034880669766\">川野賢幸</a>"] },
            { photoReference: "AWCwydiMiaqmlx4YsjZMEv6yYsXZeerPLFg1XMT1JWPFw4_Jqe88lFJUIWZlEKKaH2YJky0_vUVcYwVRmSn3vT3vBjogDblwiNZOQmvZwLM_d8D3r6AoHNf1R6wfZGkQf92gRc1M1AKQKbFk2c6x20sQ4ATtnIPuHeLXpyUnXdH88OLGf9Erv19Ac45gGsivBTYE_01A_Yb3OgzRa7uRyyUwHUHwvxAiJ1S3SawRXCTeosr-N-2qjDwiFreCul2_4buLLX0aSdYmPY2XOvaBjdjnKzsBgjqLqonZk_W7wBRq0B2s_8FNCCAzlgW9skRgpnLryAWdfvsLofVDYS716mApcpA-xnnvNwcVAcs9ZdkVWyNyEkgDIdhRk8YDBVvq5sE8THXrYh7p4Fg3YYQvTSuBL0gDFJREgsPfkRssfh9NB2fBU9ed", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103312806998083139128\">MOMIJI</a>"] },
            { photoReference: "AWCwydi2tLSRKf3XZwde9as23APVtjKp0NUoo4-UKTbHkamJEarTCFDhBhqVLw7MfbI5woZjjmmLeYmm5j5P7cNWGzHQGlXrgphMFsiV_0G3YxuZhHuxdPzggHmwIMxcsV1JzRThJCBXPjIxPoRX-PhnDGe_bQojg2x_YlhzeEUKwfLU1uR0rRCHCO1SCuAA-zQMCCf7HKXjV3J-mTTZnEU_IegYPC04yuYOEGvtrFX4l4uELbWGyjmgRnJ9vFiDjTR9Z9wjIbcyiHeHbvPn54C5DaZAS-Q3AbUK5ra4WhCNjNSARsdgPrWOViuY8SQO2VxdkUiXoXVVDLdOAWZYpwWk6jMuTNEdVarERIqbFy533kM-Q-HJB84LHn9diICeobTQJuwBvcg1Vec2Kqm351G6GzQWMiiuRaRsb-r8VuWi1NM", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103312806998083139128\">MOMIJI</a>"] },
            { photoReference: "AWCwydhyoCSV6W8WlcKCJHgYlcqz44mCnY5FFfzm9icyJGNsh-UwYfU-FZwR1s7hUX4D4BEszX_-L14X-Sj09KPKuYhrluSABO8vGZTvW38kCzU7uNbk-AWrqFwcRcaGar7ObIf0f4WZ796-wfAgLuvK4P6vl7JMiA7g1gLUc-2L6ivgAOKX93ik7cc71U8jpKso4jji0t6vgVvDibE-B0tKCacDaei4SK-OWOGu3NtvTj0Tl4xlwxsdWshB_XQs_klE90dh-_epzBXtstO60F2kwoIvanOThbQPoJ6NEJrgEVIddbNoF7VH66NhfJp-f2cB6uw8Ryzx9Z8R4u2U4GrECtg2DWpzL-Jql_aD1RiqSlqZC_K1nSqfiwnj35G_czr7z8A-6QenZ-Ro3_QYfBrOozDH1Ly1gdxPSRcAWyIFq_uXc-Y", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111096246486180403878\">yu san</a>"] },
            { photoReference: "AWCwydiVWD7-vIU-rdaYfxO6S3P49ThbbfboOKHZfvzXYUTqA3Lpj23ueCojMDUGdlEuS_EpYtEgUY1DcFdeHHv-UMaN93aOdFP1o8LOQcziPlhLtQ6nEu7Hct0Koiw2insSw5URzT6I2jWM_RKiiSYTNqnLf-miNMSPK2px1P_flO_6ni0igYIFGqgysOd5SUrzqNpXMkhkAC_vhzU4UpLY-lJh8WOEniKv0DwQnNyfG-HCT0K89OKK1aJMliNL0qwwHLN3c5OeyQ65xpIQYWfZnofJ0JxWuovMLtw30Z89OrOthA_75b2faE6hMg4Gd9Vtmsks9fPaq_mCxAbNt9MJCbkfurGjIz6J2eDqaq0iT9XwyixuNxlyBVCCUKinX471lYhFu0yZh-Upl3_3NplTYs4ydU86mLRX89JDiPA88b9XYceY", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104815864658960728665\">Y. Kubo</a>"] }
        ],
        summary: "사우나와 암반욕을 즐길 수 있는 스파입니다.",
        updatedAt: "2026-08-12",
        highlights: ["사우나 이용 가능", "암반욕 시설 보유"],
        tips: ["사우나와 암반욕을 이용하지 않을 경우 비용이 다소 높게 느껴질 수 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1343-1 Kise, Nago, Okinawa 905-0026 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.ritzcarlton.com/jp/hotels/japan/okinawa/spa#", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=808187118290174534", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%E3%82%B6%E3%83%BB%E3%83%AA%E3%83%83%E3%83%84%E3%83%BB%E3%82%AB%E3%83%BC%E3%83%AB%E3%83%88%E3%83%B3+%E3%82%B9%E3%83%91+%E6%B2%96%E7%B8%84+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오리엔탈 호텔 오키나와 리조트 & 스파": {
        photos: [],
        placeId: "ChIJ69P9oGUB5TQRDFVUKLyOeHU",
        placePhotos: [
            { photoReference: "AWCwydgMo6iMC-c8rKRwzrYFdYDTdFeiOqGNiNAa0XpetteN19S6-cEOoiV8EFym2fhckDTnE9bFvYn1MuK_xO4ovSkS9JnQ_EFVyPpvG9OBPBLBzTXsg_g8SP4wEYulMHJCqzAjPhSdRfBIXq6sq768fCzQA4bIROWY1Hj7-vUghZLKpWHbxf2z4TIqPJQcCKV499OR5raEaaLg9qP8DnWrtfxDju0wKClS4VTTaw7daBe1yAzl5pnXiP2H7bUMbtnUXYZ-8S_aCkxSX-Z0rZ5xxXglcJtx3Rrp59Y9E_lIV4_z4Ybr5hmov-EyVXHSWwic-DOv9_SXTGAUvUHUoH_6EblqU9Lj_p8Ty4v4f6cZOxQhCz5cjFphGwluVSmmiTnDOn2div-Ku-T8d-HuPXVe6nXu1flqhcSJf-_AA8s7MfMrXA", width: 4628, height: 3085, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102389912926470121400\">オリエンタルホテル 沖縄リゾート＆スパ</a>"] },
            { photoReference: "AWCwydhfULqGvqdAwLU4kQ2F0vx9Y1pwGUJa6BT-tFOTsJAEFIaQMa6CeUmb4o_rBWK7lp0npHKI3G7rj4JfTjOPmt60gpQP8FeqQ2kMPU_tN1OuQNQzQQfEr_-yjps-0cBTdsh-e1ljv6LkGg-9aODKL03VPuIoCHCOTOz511WparIO7oomq6jLybWnEmDL3hEkkIQAR8zoXcmAQJzXc_SoUCSYvRDcjl9JVUFBRD_LjfNtVm87jjt2CBlPkHnI0aUaXJNOBh89xRErhUHq9MjhIeWCRFXUpAzB43u_39u3hc9eMK44PsHX6nL_JoTof7G7fN3uKKWtgc4LRK9KeElARsexeunn2DRGxZqEY2Dv_r4gTb2jk1fIiHYYGAyOpEsexrNN7A0E5rGPSKMUOmK0tHXDnaMnl_aUEllR9RUC1q6vwoV7", width: 4096, height: 2925, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102389912926470121400\">オリエンタルホテル 沖縄リゾート＆スパ</a>"] },
            { photoReference: "AWCwydgKhgWHBBbBlVSSDo_IWJhj4S3rhRbFzHBrYPOvIw-Io1n4t2QEwxkrkgndfEfO7x7M_3vIvFFwYIYGkxd1JiumEDUAwegkDh-Y-1kv0schLJOWyuTVkNZOlFAOVwFPPkaHrcJpmwkf6wzzYPEiVVBRW-1aXUSLg-g86zp_N5hrjxpFBmhLPVoOW-51-dNxQ3FkHQ1jejGV8OjQl24TjNSsRk8RS0NnGJ3utvGBpMJHXHg7DICWRjICRRgvd2aRRlt8d5FnzyjTZZXgCx3k1eBWYXnvvaYU2gTLUPqHdwU7p3OJ-LK--n_GfxW8LY7xgTkhetgZ7tPtfiHc5HVEXTCyK-EGwq-z1RQRo9s8qhFeQoVHbji-4uiW4BlEvAbkPlwKXA4Mz63d2bqrMp81iNgOpY_Fki_Y0H3YrOSzpOBcY2_D", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102389912926470121400\">オリエンタルホテル 沖縄リゾート＆スパ</a>"] },
            { photoReference: "AWCwydjgwd6S4kpaBBfeHzAt6JR-lo1e_lGswJ4o8S_o9cra_xoWhGVQwL82fuIPjDn8NZR0FUTjV-sOtlYd2HiNIJmPD1-BSfRFv-hM2SQ8LIj0O1ysHPvDUE1yrL6P7erEOExocEBWdumxmxEbS3grwLqzVfb_a6x3YNpa0io4kfJR8OcHbLVfaFsSErIcElRi0uWm0psApDFOTHOmt9qDnlxg75pyi_AO0QxD7puYtGOGlxXyZD8LcjITkzuo6KuLjun4lYq18TRXzC2A6zKhWnh_Qzir91mePZ6zT-Fsrp2IMigrVidZKSYpRJvXs0nJo8Q3cORl0PlhPBeTx-MCRgdSFtyOEQDIJ72M39nnkiuAl1pPgICaeIhuMqy5DkmBEYRSqkZWf7S7usa9Mb2WceIR_NvCq5IVeDdJrn6b015_Pw", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102389912926470121400\">オリエンタルホテル 沖縄リゾート＆スパ</a>"] },
            { photoReference: "AWCwydi0cKj7ZzmLB6YVw0mZFnhFT8s9SKkUlWqH7lN5hjzj6gSLPQyz-Mr_smIm4vRyaPNhaBylc7_VlWzvCyxA_U9Ceju1qbzrdOuTdNbWq7M9ZTt2aGeIWv-yijfKPKYuVkVo7c8Z8PeDvJ259saIG45Uni3cE0mVeKB5dRHoeYOlUqdHiGhpa1FuVwCyhQLGzovpw5972cLZRc8ydeO0vkcztltrZ9yi60IV3M5NS_ML_fxwcY25vuYacY-H1WBossZyXvHD-eYPkahaTFQTTPAdkz9GTUllotfleeolsrGOi7UIM1JMDXhHI97X7OzIWjL6fDUYr26vkyZwM2aQXKtNXKTlujtUclHEEvTbC5lFTpN1l-KeSP534EM120MlzbVs0f31GGGnB_eaQG3laHdJYoVFM_J6VJEMAsRdd50Smf1x", width: 4800, height: 3197, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102389912926470121400\">オリエンタルホテル 沖縄リゾート＆スパ</a>"] }
        ],
        summary: "오키나와의 독특한 호흡을 느낄 수 있는 고요하고 고급스러운 리조트 스파입니다.",
        updatedAt: "2026-08-12",
        highlights: ["평온한 분위기의 클럽 라운지", "아름다운 나이트풀"],
        tips: ["낮에는 독서하기 좋은 고요함을 즐겨보세요", "저녁에는 라운지에서 와인과 함께 여유를 만끽하세요"],
        hours: "방문 전 확인 권장",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1490-1 Kise, Nago, Okinawa 905-0026 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://okinawa.oriental-hotels.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8464672438424458508", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%A6%AC%EC%97%94%ED%83%88+%ED%98%B8%ED%85%94+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%26+%EC%8A%A4%ED%8C%8C+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "마사지 살롱 라이프 오키나와": {
        photos: [],
        placeId: "ChIJva03qqET5TQRTAja8o7FFz8",
        placePhotos: [
            { photoReference: "AWCwydj102roJlI5zQaZEN91yFmZkMJOcKeyBD0tPRsLHRyOa9dGP4pUHpbkGfHHPugb0x3KQmReCd-js-npNbWqw9WR3gSYKAb6YkVyZdUPOo-elLY78xX9qiJCjXbgWIweLGmrH-Qm4XRU2oa_QG9HxSUwJDTlKcrt0yRB9xmK18hRa8ys4r7CeBqLQL0C2uFXW8sB6pQgoR7sBJf6X28_U5sORFaNtYCdD7NJNag3vIVCelAxz48tXv7KgI_WBGfFXLpTzBgut1O6zSYsqUUm7TwkeDP3xV4_wsdpTRReBS8xq-6ojWhvXhwbaJbjsPt_mHEjxMhx4N3UQ-tuM77pifobmI6ncZaevTaeP-B4PcEbV8L3tx9h9CEF6c2ttCOvUPEY_LymUfqU6loFgSE0FbEbyD7nKCpCl3F-6YtNuOZpuZwK", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106751270116913862960\">Massage Salon Life Okinawa</a>"] },
            { photoReference: "AWCwydj01YoVW3eSPr61A55r2Yp1KDCxOvk_xAU_52RGmL1WfEJ0mvSoGeoogUObvWO_8kFZ5knoSm4V72bOWixTMGemZxkpoRmYPvcigAfOQ0D7DHiyn_6qYxvQxAqu3gi84GSJaCZfksM5v9kz9PS3b6B8wOkYPEgZV0bpFQfJUlR_6KwlByOhS7nzwc-miSV9-WKsMTUZ1gqrwNLjzKzh4c4ckSOt8VOL24qqQqEnl8QcskrHnhbAfwjLQTxq_Go_mhyH9vM33P_MT9PbYwHavtdK90M30HCEmr1t7eu-sGUZ47sSwHHtKuiSOvtJ9ynNWgq9w41AH0_ufhs1BcpJOJeJxKMnq79a5w0hK__q8q-6kP5rG0tSfvYlywb819KAu9qgRVER5TkIMtPvgRm7eYDOs8L7hM8FHUsPYPoiW0k", width: 3819, height: 2745, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106751270116913862960\">Massage Salon Life Okinawa</a>"] },
            { photoReference: "AWCwydj25chJUXn6G0gXqnFdZHSvJ2z6w5LF4TOw0SSrO2bgNgr5x_rM-xkMCZnQ4NXDJ5lyrGQ1-p3cem6sWA0KHZCnK71a9peqUHBAuHkRYZ7sOYJqI_d1Qy-ZpHXEpV_S32xl9ltuOhyBUn2D_7ww5BIZzWpqBYHiKKjkSUSlbN1zUJ0_nQNaApHajymmfF8PYV0NBffxYpiMr4zeQkrClmJ5GrUUirwQFC23aZzOfgzpkzipRMgaY2Jg5jH46Zk_cOR0ux7USsY3MjFx9DaWB1yvfA1ZkgmzVoD9P3pyiMtTRZBX85OxEZbXQTSKgFFiptNrOuaQL3qOP2uzVzoiqtdlG1bgpFLEgpqW2qVxwzh_lzPNNLdlYtgePNYskjbZytYyS1XSdePQM_BKloziT_wnlvCuefPAgLTJxO_O-dIZdA", width: 3264, height: 2235, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103925667742686421398\">A T</a>"] },
            { photoReference: "AWCwydj1G-sXFLsVuPg4LndkDHii3zvHDO06atMHdunxQhHwZ-4Wjl1u6DzpupWTLv-yvcP3z8UDWRr-EAUSb3rp3J_np-C_NnNznp_kNaKfYzzq7vit0EEEDjJxIyk45fuAukK-ISrGhD1Ig4zwso1uO0NNpM-AmWWHhU5dc5YmddhBlk1NxzWXNMzGyrfEFQ837CgkbkWU9ZAxSUB9jnvWLngwvsMCES_AVW0wKOQIgTjTpqqUtlCk7Y_muvJICeY5fQTJOPvNBqqNvgWnxYyA5Mu4gYqozNQTqHzG_i6B3ucmtRczmJAFn7EKgjD_w-agMZow4drxekMdUpXM5GF7z9Kx6jX4n2TTzO4JF5HGxSuuGKz2lb1MpJafGPOykkkEWlGSwPtLOW64ekMDupBfvNlkuhSyRw1DY1uc-QctXGzdmg", width: 1478, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106751270116913862960\">Massage Salon Life Okinawa</a>"] },
            { photoReference: "AWCwydj8kaM_VhnTIjV-cJSZFrX5pd8GAS8E1ehKUDZJvSVvKroQiTOXZQxNKM2WHrABJom1bNb9pux5fMQTO1dP6Q0xoK2ny96jahkUlplaQ-uBMZZUvEJCSK9c3U9m9ag1bq12I8nuRmHgT25dLKsYZ-YgcWWWRtTLvdVwCtLqR6dXhfEeYxqu4kZ_zReq04qrsWbJHz8yX4kV0FLqA5Xc2RGdAld3fK3FMjIvVKoMFDWSJUKpDIs9Ld54wlJhE10M0S2VcOfBiKVU6UJ35a3lm-ne-lF94xlFpfSWGlvGsqw7q1v48lw1cIyAi1WduF-99wS8ifE8HXdsfAEc7Dhys3uKUkuH7pE1Mc3oWB-iyZZzRKmJIllWrFqCEQaUZZGXtW0w2zVLElSVxkY6-PfCkM5uJet-JxdVaSVwKXY", width: 3496, height: 2626, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103925667742686421398\">A T</a>"] }
        ],
        summary: "숙련된 기술과 쾌적한 환경을 갖춘 오키나와의 추천 스파입니다.",
        updatedAt: "2026-08-12",
        highlights: ["마법 같은 마사지 기술", "합리적인 가격", "친절한 직원 서비스"],
        tips: ["예약 없이 방문해도 빠른 서비스가 가능할 수 있습니다", "종이 팬티가 제공됩니다"],
        hours: "월요일: 오전 9:30 ~ 오후 7:30; 화요일: 오전 9:30 ~ 오후 7:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "278 Sunabe, Chatan, Nakagami District, Okinawa 904-0111 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://massageokinawa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4546319566604208204", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Massage+Salon+Life+Okinawa+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "호텔 오리온 모토부 리조트 & 스파": {
        photos: [],
        placeId: "ChIJNWVrbjr65DQRxeH8EExV-bo",
        placePhotos: [
            { photoReference: "AWCwydiMuP0S604G-DEmkVrn9vO5weeb63uzSTxupEplRAbgD8mW9sCocgXPYOwACLkYgytnK2juYsWzsxGdidA5jOZF2OqHLzThKqK1Ge8poXUa9F6qCHG2E22uHE5geo2ZocLHytrnBdBuuJyuIm56sB4ynwC2_Y5CHVg1lhyLjrFBDh3nvZbj0M5Pijp4qbwamj56kpDmWRUjcHXMgTIgUjSTZRzO8jW-jsCncOeBA4piydpQyN6JdU4DPM-tG3A9RgKmRWFbeD7FSbO-CMKiprDeFQ7lvtXBF185Na67KaisWmZP4SCb12MfczA3En4S-v03fJufPiNzAu45Zls0eVWmeGG6CS4yY39mjVNKALaaW3CQHbzFFW_0HReOtnajdVSf7HJtRlXfUIh6BY8N8gv5pOlUwM7MQqNpkciW93OUYcpxN_p6x-GJFv2px7-N", width: 4800, height: 2696, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107349751071886217766\">オリオンホテル モトブ リゾート＆スパ</a>"] },
            { photoReference: "AWCwydiJWplNC7CwfbyrePyQUvNz2pN6kCqz1x9vUY3nW4v46Dmhl1Fm4tPi2AOru6pdCwC-5RmL_5BLUu7sBnR5VNQtx8wbbXTq13AJOCgmRnP7OOFEOkEvFGKEjtIFRlaWcQ5xdSmuhqS--5DcqZCboUBmiIXRUcMlLLX4dCkdqhhXMFNH1p400rkyYDgXxuS5dcjonvvPvCrc9EHF5WG4-YGLMp5o61GLCOrxPmeb6yqwIuWKB1kDbTYnMYfmsxpgKihlM0TYuGN3eD52x4KnKpLDakq_RmwfdRqktfdxSpJxZrm_NKkc5iBmddVaDLozGEY7D4HmTjvtjPmp-UZZ2FYY5k05gofzf8Plzh1I7NqSgKzfxUsA5FJ6mSw_z1U4jZk2hWuDse9kwEAdu_bBNqlJdinEVEb5IDk8qzAztkpVanNSViHpPmDEx9urH6SS", width: 4288, height: 2859, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107349751071886217766\">オリオンホテル モトブ リゾート＆スパ</a>"] },
            { photoReference: "AWCwydi0RTiSWC9v2b-tdClT_KlFbLWzd-H948qDYgcHQ1vvbMXoAl5VtCGq21NUaORfQf_hZ_6Ageg1wPLJXxpOvHtQ9mEWMy7A1lFxXIfT3xrYz_RWHgVoURFFFRKx7JbxaT158Qjqs4kYb7z7fmar4l3GqzwxLGdmmCyiJpDwnxo_qQ5-krIVkzPxe9m3dcTBDla5nU4_awO71BNrfehYLaUjGw2wMA7QmZN8HBsNr2AUf4lLigAro0ELnC7BztnOuW4FDK7USXPBu9TmkAyfvAmTpkRuXU5wNmKtw2UKDIjHlX0vFDLA0AJzdLnhHGRqYnlEipCWHn4sG6NnDdOsEVKFpQkydZKC8yh-g9eJndxJbRGrwyZi7FJge-Y8ouFe_JOVrq35QQq8UBVwyL6GiisnttmGksXPpDKjQaKCr-5DbIblyTAb_1tDmkjjplyR", width: 4582, height: 3055, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107349751071886217766\">オリオンホテル モトブ リゾート＆スパ</a>"] },
            { photoReference: "AWCwydjiIMbm-QuGil8kTFmp9FsmmjgPj2lBocjixUiR6Y8Et8rLH43UrT60gaGGOTkx1rKvhT_1CUFGE9PfAF4-1e8rjrUDTQE5hKdxzWi7uq6xcPK5vbqUPTdcPAUje7tgi17iEdQOBo-Ko7xvNwdypt3dApCqLRloMJI5fWN3k49xj4fEMLlEixcZF1AawtbA5MFe79fsYMHCdzSjq8hlcqSFVKzPIZdwnibep5WLDsnsKY8PbL-NWOtnmM3pkbJ9WPfxZSiVM3_skYL3zFq5g4aQjJivUoEk_wDOnS2RPbHocGoXipMYpmJq_-K0H2CRf3K7McNKoCWzHfYg_27DZDZE0Vj0uVqeXNNe5UF2QhQKDbW_fxcAgxnpDESCmtykpHbjeMW_H6cF4XAVeGLs1OnyURfy4LjTAyUSfiTuqsMV-z1Xy5k5oQhcpcIzPB_Z", width: 4288, height: 2859, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107349751071886217766\">オリオンホテル モトブ リゾート＆スパ</a>"] },
            { photoReference: "AWCwydhRkAs-4VaREHv1wFBatQnAlbnShBQxq3j5l6ITPf7nzKCPX3bxOE0wE0qWpn0HMfwFXWdjaF_sXynCPu2tUatnicMXDDZPgGFq0KjBVpfTgi9GVE-KMyJCiW__oYaVoS-e0fqjOcgXYUzzuheTMxg_VF4FWOeAjsxT1M3FSubFyB2Bp-KGew426kp9eKsK4KmrPV-KDMJmHJoJ6kjxdvDlDmlzkVRf2oQUktO7fvluOVTvAFrt6Cr5cgSWbqaQXw4dDPRMMVzeq8F18VvjUNkytySCGBysPGxKF6UYrKVULUOQTG1LKS5tN1GEaQovNItpTt_a4rDT3OLgZYn2_mAke4-o9TV2bDlMyMjSsKIchpR2gawjOJXVrvxfAfaA5wX8ZztSnpHS_HwZbjec7b1dc4BiIU6moDh2MgyWPOo4uvAXtp0gT8GOq8MpW48X", width: 4288, height: 2859, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107349751071886217766\">オリオンホテル モトブ リゾート＆スパ</a>"] }
        ],
        summary: "에메랄드빛 바다 전망과 대형 수영장을 갖춘 북부 최고의 휴양지입니다.",
        updatedAt: "2026-08-12",
        highlights: ["아름다운 오션뷰", "넓고 쾌적한 객실", "대형 수영장", "비세후쿠길 인근"],
        tips: ["추라우미 수족관까지 도보 7분 거리입니다.", "북부 관광 위주의 일정에 적합합니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "148番地1 Bise, Motobu, Kunigami District, Okinawa 905-0207 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.okinawaresort-orion.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13472893545446433221", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EC%98%A4%EB%A6%AC%EC%98%A8+%EB%AA%A8%ED%86%A0%EB%B6%80+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%26+%EC%8A%A4%ED%8C%8C+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "츄라유": {
        photos: [],
        placeId: "ChIJa_qmQAQT5TQRtZuDYiBza38",
        placePhotos: [
            { photoReference: "AWCwydh6sUAxCchIvLOWWp_vhcUzHc__6xj4pQSxSn9AnXZjp9mTNXy38SJaVDHsg0M-PEFjxu1JvEYwxVD_Q_To-SjWBBS_XTqVFXxkSL_DyMDkLElHV9JzAIvdBUKzDRQB7d9Ckw4xrbPKgemliSbLTtp0PoXRu2atYJszZ4Ob2-lJWHAHyWRvJ7f2S391ohuz8M8zlhSte_JjaFBP8iqHV3WB6kLEu9Wb7_sX0DnC_z-6KVw5FOph6wAuO5RHykG7h2dqEvFx3lkWU0EhnsdVEdanq5cgkqRS7j3e6p7KPbo-Oy9IFN6KTbiowRbUXER1ejE4KeYbn11_It6DpMO52vkxr8WUFx4nbw4gkvXUqF1_ZPPvHlIYkp6SfXT4rpVTRipd9sEfMa5tbtSdkz2nOtCkMZRtfzJjY50hyhfKpOB4OA", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111995366085928449331\">Terme VILLA ちゅらーゆ</a>"] },
            { photoReference: "AWCwydj34-_9s1Kzy7xZGzaUYRAy_cBfUNVTUMhJbo9RCJ33xOX5EDabjj-7rKxsPS9SaH48LBfutff0fjZfESfErX2VnO_e02SF4oknzzSTre_TcSXpCJQmidspZvjHf_H14LI5QZM5mBVfJ3TATstGn9qocN603b8GrJ8a5IIRImvB63idOBwECw1iowb-403ANI083nZdpz6AOuH8RgbcA5Rj8LP20CJHn01BdddkMog6CexdsPYe1y9XDYEsO5HbmnI-RtuRO-uhCk05FsguUfwHyMjOm59JKgqLadTky0jFUrnz-GgQBnTbiHEiCd8RdbLo9mopsWcwqPCj8-5XO4PRFCuOf2rHRFmP6Bq1bVenTm4_a9JzmQVb_zGc_ddtqa7PdImLrFPCpWRJRpQiNGsGScL4Cpld9ABZ6YH8T5jSzA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115988466762752416200\">Masaki Hiramoto</a>"] },
            { photoReference: "AWCwydimn5YPboS1sEShJ7jt9FRUxQVYovChsk4sl4gAiWDgrzuJSSdYK4PzweJ6e6VRnt_smSeDRmFvZimx6bVOdIRUXxJSKaIw6vQ7M7ZTCCJnyI9sj3ZCj-yKahD3KM36J0qAhPYAfG06hIp9BLxRjnlnf1CXp5my_rmKNNyFPl_IOEsSbiO-SRsmwsObvnYvwLxQLUNWgLq8mIe-iJmiIaSQVr2_bDBeJXPKQeztRQCLaBw7H9bWe6pIpXas79p9i7--14DWnRjyUd_tKlLBA1JwYfJ5iqMmymVNv_C9Cnd-KSjF0bbmbGkobjr-Dmyg3Fvx3UOn8cLjUmZRR4d6qe8JPpceZt0wO1qopBIHglQ8Sfry2cQsa7asjVI4ZrhfpgLJWyQWU2cj8NwpE_6fMnB9oDwu0DRWSdHPBJ8T64yVOcy96OUCwpAf2mX7gI41", width: 3835, height: 2550, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113286007982223540789\">あはごん</a>"] },
            { photoReference: "AWCwydjQhXUHhxys-eDNYuzJc9l53fDVQucd3dVduPM-oWTk5Huxo22hTPoF_t4b_PhGYKv3gxgpCZB9GgM1CvlubbTJI4RQCBBYOMzpXjkeHLbl-1CFMiaJVKGr-awZ4nABNz6Ye4rXCxp6SOB7itgTXSyPqrbpU4Iph6h4HOjSvmqyeFOUuF4nQoYMRhXhmgs82JhKsXk-czuzhzw4sMFA1dLQeNBR3TUsXERepWFJbWKN1upyg9aVzddqAOK28Ru34AsKmSK9L385p9qXNaLRiXQiK9uzwlHzN6TyKTrpop9aED0C53LweBcC0nfdgNg_xlkvudMVMnkhUPNOwrWUEoQB5aS56JVKj0ObSduZdOdNKAra9pFh0GTTGhC3UNr5mGLw68KJ4nEcTi3cNLH7D8MkrrmaBTRhZ-atyxLoNK0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102557755239000905475\">小林進之介</a>"] },
            { photoReference: "AWCwydjuXx_Wta24LFAAbeVEpcelwMvRgDSUtR4NPP14WhfDBmW8HuJBZaHXZvChq1lJN7Qo3TOzauzn6evT8kKquOz-OK4lxELM46pdvUQ5VwFJFuPYWw1dleFm2NMjyBz0Ati84ExpPYSkP0uFvVdrqiiH3In0m7IxR8Ohn_b9PbLzjg-0wXFFbOiTr-kQoRe-F3Osxn0vVe0LYRQTYPFbUOzNcFeQvat9mnLfcSwk7CrsrhNMdgNViLJTCDIBRVmwA1DajmzmzAaOmqblVLqTyCvn6PDfULUw-e5IfUDkEup61bPZS0WXKOk3kf6XUayEsfGNSZfKcuWaR6yoi7Zrhl31Jhqal2svaHt6oAvnur58RoQE4D_Dnv2zoaVc2or2yYEmA_tUGsgedF7sg4GgGIMifLSRcTczcKnvbe8B0S4pf8YH", width: 1256, height: 836, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111995366085928449331\">Terme VILLA ちゅらーゆ</a>"] }
        ],
        summary: "온천과 수영장을 갖춘 평화로운 휴식 공간입니다.",
        updatedAt: "2026-08-12",
        highlights: ["내탕 및 노천탕 완비", "가족 및 커플 이용 가능"],
        tips: ["슬리퍼를 지참하면 이동 시 편리합니다", "평일이나 공휴일이 아닌 날에는 비교적 한산합니다"],
        hours: "월요일: 오전 7:00 ~ 오후 11:00; 화요일: 오전 7:00 ~ 오후 11:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "2 Mihama, Chatan, Nakagami District, Okinawa 904-0115 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://dormy-hotels.com/spa/chula-u/?utm_source=google&utm_medium=gbp&utm_campaign=gbpurl", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9181558848253828021", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B8%84%EB%9D%BC%EC%9C%A0+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "정글리아 오키나와": {
        photos: [],
        placeId: "ChIJk4Nn0Rj55DQRspSwLGXjC18",
        placePhotos: [
            { photoReference: "AWCwydiq5_WNJTEdTEYiNklBjlBVOPp00ysrLV4yDqCq-DOfytaEjAgKGY7ymnrM_s4YbIkP3151zszJXt6bXQaycZ2Yiqa2HV-NSXO617Ynqv8bYhqJQhpu5UfmopJRhRjCgyb6uleePERNS-zWEbqusEih8DYPq6UNLxjm8shR0pJUiPej1YgUC-i-hkA-U88nBkwQ7PoFjNYASUSo3NVMy-q3Dpq84YxG1AENSz6TjBi0_6ChrKvbzx79i2g6ri9YdnLRt5jxNO1uN6i95zqvh67aNiT_BCt8v24l9FuXfjoY2aDZEIQFTKa8ypfbl8JkbU4Kmzpikmx5zeD0qk-HaSWhiEALozGim5MT9wFC70whnRt__NJQVHVIAsQdqnrr5S45gJdlS7Oi7QCqK7fLmKez_5DRNLIJViH3BdtwGgQ7djb-DKFP-ml9mM_L1A", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111798573573393927981\">K健吾</a>"] },
            { photoReference: "AWCwydgxAHXM814Fj7G3q3TkH--dH0X0MHVOREz-jLeKZeFm-Py3De_piD5trlIVH-XS-YQQOijNn9vAa9LL5ydOBBfdnKRmfnKm8zvq1M5vDxlL_51u-b48fl7Vt9vU1r5Br9Hmj88rjU0D8lrbfvEyNlE_sd8lwftJfmsUbI18F-hByh1Pvx2agu1uI4785rZjLTmfkC_8X-dAYXhL-on6rgc4LDt4aES4fW0nOMu1NUes1DZpaGn4Y2uRQ9GFAGSpUC_OhQNGXO-5RYjEyxA-Cu9Blu6g-DuBcvgx_ZAGuP4LzQVhk9bkvyPbCz7xchXY82lb6ARq8IO6AzgSDKBQjHs0a43Ik1YmmUvDD1ebAbGAy0XBtLZ2eLGdDDUNByCSA_27JWW5eFTi1tLO1qiavVQmTcjcP2TH1zfLfJPzkfzSVk3eOdDv4_WwpQ4V0Q", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103504388393252923371\">KOJIMAX 13 (KOJIMAX)</a>"] },
            { photoReference: "AWCwydiHpUQ1D0PhWWtvG7ySya35MF2LSPOoeRzLjJEOSFBLY67M4QLadDCmj09kLxj7UIBqrWKW8UU_z98glmIGGbMv0HU2z7CU5LvSmSvXJFWUAvHj7bSaR-EVWu3GJGbheQ2pr7o-krtHkG12By3AT_9Xas9VDmRkM_ZurTfsZBcRD6eJ8aYKJXY_p5fEt5Pp467gRQGK63q1IOraXuQn4plg4QUccveSs9M7tbvZLpkHL9rhVGZuWJjrx628qknW3QvLee1FiEG1j683ebJayJ5g04J_hCU9PruE8kTS6kBIV0bZHaXXedxRQi0m1MpDA9gTVXPuJ-rShAsDGAmHC9tyWeWltPLstDrVlV6JD6TMt3wcMUu1v5CLMwqlYZ7X7JwjHm7e8RaEkTu6SzOdlaDOdQ6H_02mptN9sytF7H_kdto4KZfZElDu973NCFET", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115942451231439753855\">こぎ男</a>"] },
            { photoReference: "AWCwydj0rkXbAcWhlfblubmurX92IsbLTtHAUYdeYACvNCTGoJHXjsazJx0BzYZcaxPqX70gSNTd6IIJWa-YoeUDB1j-abyLHnyCdd2ENXvPH7RKRrVcGGKK0aLvTe50YkpMxZLeIO1r6uVWYfVsA_vfXL8y_54JRsNx3DgaRt4fM5Z1Sa5P-yh01JeO-uKnPza0ceahVSbU6R5hgv7kHdSZOYb0tCk5Uqi0SKikAxeAdH6vzTYQX7dPIBG7PF2LpLvvTCw2OzFQBmvLr3Rhs7E-gYVXVI-VnMlEsEQFhOxDj3X2LVtviGzJnSnoZNUs0ENJy6QUux7PJv0Lrq1RvlwB_qpnhvL16By6mGGEBtl00MPNF7VLmW3DD2tf48wBMUQg1PgCxUL2EMcpSx20RLhqxHpbU4hhIaUZwIJeKfJYIl3Pzk2tvPpyTRX2ZmexCbqG", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102340735511753825992\">akihiro suzuki</a>"] },
            { photoReference: "AWCwydiAeFnsAMvROAzBlUO_H9FPd4KftGW9AppcqpfAEQ7ybPyzA0UoACPZB0yWPAhRPkapWiilbFd-BaOGXfY2bxbVWJXIT9jYOZ4L7ykWYOR_zy6MFkhYvuMVFtxnzS_SE210bv9MJH0YwcdakOIecLTJ5Ff-XRw44iJXdqKytK8lcfTRtELgKDU5SwkL0n8arWSQhtlEMroSi3xp9riB7Tklnd5pji3pWvZs4GR01dwT_MX0hNHT8uKhMFCaOZnrRi_mbs97TOCFAM-rYX8STG5cYaAx9jE_t5-7soN4TP_SvJn7qIhCmVBF2w_fS5hBkbYkM91OjjjCPRFzziJu2nVUgzybUQXAu9TIYNui-ChIy0OIQNjYPkAmsb5Iu5MtFk5shr4Jg1yacTGFCuD-oGaF3pSyIsY303v_MyzO21rsFnqGexpenUGHO4fV8t4-", width: 4032, height: 2688, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112891609105522545214\">* aya</a>"] }
        ],
        summary: "훌륭한 서비스와 맛있는 음식을 갖춘 인기 테마파크입니다.",
        updatedAt: "2026-08-12",
        highlights: ["친절한 직원 서비스", "맛있는 음식", "다양한 어트랙션"],
        tips: ["인기 어트랙션은 대기 시간이 길 수 있으니 미리 확인하세요", "더운 날씨에는 냉방 시설이 있는 휴게실을 이용하세요"],
        hours: "월요일: 오전 10:00 ~ 오후 5:00; 화요일: 오전 10:00 ~ 오후 5:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒905-0413 Okinawa, Kunigami District, Nakijin, Gogayama, 553番地１", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://junglia.jp/?utm_source=google&utm_medium=organic&utm_campaign=gbp", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6848817682027943090", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%95%EA%B8%80%EB%A6%AC%EC%95%84+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오키나와 어린이나라": {
        photos: [],
        placeId: "ChIJDaYAgHMS5TQRC-7ZO_2U5Is",
        placePhotos: [
            { photoReference: "AWCwydiHcp-6BApdKCeNdfJv5KKJyXw_NwSTxDnwtHVzeikr7JH_TDNJLj2pudYd6TfuYsHP2jl_QUyC5LHmfcmfD9zkoZh1I-oM1bbSVkmDahnmaRHPLekW8a3FdRIbPOE0y7Bug5rMBKpu5HnWssPlyt6eow6TpvtAv1XHs8tipTgasAAnu8zz-d9m37y6MawX9MG0hjDWWiwLKw2mYzsn0SVX2sSpe-eduN9sefT3f6PLEc8P2V3btPnLvWaaLzvt0i487vRLl6cXKrXcOYvpWY8HxNdudN7FnMd1fUylKexToOmumTNy3hxuARaLoATM0XnFbHbyVouhyLnu6GDX31v83h-jTcYLNUWsG6nFKyAOmvS83723hX4NKilfkAXpYQ-0AgJVRtPPHkX5X4E7RTyysQdXf9eV8mAhkmWiWHc", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113860467565855909692\">沖縄こどもの国</a>"] },
            { photoReference: "AWCwydjPcRBvtaJBsLWz2zAXqG6mXzgYt5wZED0AYHCVjknmmd0I0gm7tOI70tMswJ0rjp1eq4eAtGoDUveXjH4HlhthSMjeZSy9wY87aTQL6O8QDPXZFBRZq5Sw6_p15UFtcEe4hqoZokUarOOAqh29dCvpsrtVNDxxdZSob8sbj74hdQsfMgI_5KN25soIxoAFr_tt-ZLe8bNxlBx0A62SDtsWP0Ii9YwUvUKRqxsfYPaCbpO_HHOsXa6PUYrF5e9eUv0rE0oMHy7ogPARlMm-fvDfJKrsn1WdNXAoKP18EutSZa8G4j5BW9Z_0LycL42FkcsBDpnhUed5h7NU4LAR-dgSROhxewUTeFUevWYRaEapYdFB61cPS0q2mE4Ga9AZd9_1SLb23ovj-zt7yHLbyA29uREtvlub3kXz-GQ3HAMqtvZL", width: 700, height: 525, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117377762110860852590\">SPCA663 Little B</a>"] },
            { photoReference: "AWCwydgspb6JR5Z8_abrZPcBqoGWJ1BfjrWuhZN4Y-OQfvaxbaBL8QcdWvpNQSkDsC2AjqX8T8cfa1N15vpRHXqL_3hiFNCRBNxMNfdtMmyUEjV3ccPihUOgyRc93DwVrck-bdOZvK4c8PW9R9Iqv11GOnRbPJ6PJIHBI-gMKAqv_ADEI90hWMIYK9Z1g3V2fGV6WmBEUwqwc0Xak-meYmyBUl7EQO2KrbytmDuw9yNpdoKMGfBKgDMZxqiZJyVKiktI8fPrzysU-6E75COK0iwpMdoLnCidBBGbTuKO-3LjgghugQ6OXxnCvzyhT2TXXilztCJTfw_txBo3xlCHXtXIP29w7EAmr6rJha-D8xBJAT9XroK7qFOH6fVkDxUG5Mu4BKnsirQC6sUBS4u2sTBrnxtdgiDBTSUkKqSvEiSG2pQqCsLT", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101571077204211245037\">山口隆博</a>"] },
            { photoReference: "AWCwydh1ZmNgUS0kEhlGZiyUrEsMgYP8VLXQBYcQPK-d3AleGD2_wIzZCSOG564CmhcXQB7s2YuXyllSyieq1ZD3MTEip4H34OXslBqWIgX2Vgbhzk8vaI73ph8v7oNt3tr8mAGL0vShnzwKJqsznK2XESF5m_tdgvvV-hascjKNO-FxA2O5UKn-_trhUxaJephiEtl_3FaVUk7-zRlJJ8myaNfxhBgugbxXmgXGgvAx89EUkmEDUdhOtXSxrtHQo_ukROcu9uv-S1ZYBLN21E7xHF2YPphP5SmO2C2v5wk2G1RTPslG7RnWVlCqzjeJE14XoVkqatx-GJEpTv18BSy9BqOCkRgpQMW_8rrtUIfbfQQFpETxBMHMGoAEIcZdT4bs5aIx5WRkCEIpRUifNVHPpcZ-8K1Ii8pps_dNP2qd6gpOlw", width: 4398, height: 2932, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104128206499720907332\">Alex Lee</a>"] },
            { photoReference: "AWCwydiO4rG0wUsmuwaJfeSmNBCIfbdUPhkQDSPOYzs8bzYdLDFyGrlawe0RglunRKmcEuQ6MlHJGOkiWAHGvamEzALlaXxuW8LbH4GeRru-IItOdRwxvKzGfzka83coT4Tr-PrCs65STCuZLrJ14W0OhKrgxoBtoyYn6aAvwJBe26gP2LjWQDpGNsPFuiNbG4JgbaMgyYSh9un4bgLFni-nKv0UkkQvxmQsAc88DOhShjoamqTUzHr00CyC_YTkr65_qjlgVghNKuXt6q9OfpQWETIp29JetXgDoAKWpkckxfOvcvKz9RpofaQDVhzlWIe2VhghLmC2lcEPAL0VxPfLgp7C0nBOmTCsD5RKdBE5ID5fNmVnJ_LqVSbGGR7PIvavvYnr6hQqbL7Uvg7IlE7HE12a-SI5HfhwwpUvM2RR5OUekA", width: 640, height: 428, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112870766233886896245\">まな</a>"] }
        ],
        summary: "가족과 함께 즐기기 좋은 테마파크",
        updatedAt: "2026-08-12",
        highlights: ["가족 단위 방문객에게 적합", "다양한 즐길 거리"],
        tips: ["화요일은 휴무이니 방문 시 주의하세요", "주말에는 오후 9시까지 운영합니다"],
        hours: "월요일: 오전 9:30 ~ 오후 5:30; 화요일: 휴무일",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "5-chōme-7-1 Goya, Okinawa, 904-0021 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.okzm.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10080345681313787403", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%EC%96%B4%EB%A6%B0%EC%9D%B4%EB%82%98%EB%9D%BC+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "팀랩 퓨처 파크 오키나와": {
        photos: [],
        placeId: "ChIJ06l5vL1r5TQRCKjKf-MXr2o",
        placePhotos: [
            { photoReference: "AWCwydinxGvzees4SOknrvhXVvlabu5wF8f2biQU2j_8nRtFTk55joCPn7L3d3NmSpqzTBbjGvv4ONOKIMdNlVBO_IeeddbwfgbrGAuZbG6CjpOyNFJpqSbU9yzW9GT2LFgKW8nkGbtmdmTzqIXBU0RzF6glelgOueiLw_yEaOKfZ5fioOM67lCYlMcR0wSHCTL-B-ITWYHtEp2phczSnz8e8b7Hx5ohS2E-76-7GtDyfpGcgnfwxvPeRNwXgD6Td1yVOx22yZFel71iY-6lDcVi4v_Fn4PKWrjk7bSV4IWrU2WIgAlsz9aKQVEUyPEvleNbYNucEIJ30cu61M0dRjJ8zjaDpWcNsI2hjq64nrXZq56aghuIY_Y-BZphD9z1hF8faqCjDDX_rh-r-kBhDT54RzeCw-8MUo5uMi-nRqgZagvDjw", width: 2119, height: 1192, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116884446936615414016\">teamLab Future Park Okinawa チームラボ 学ぶ！未来の遊園地 沖縄</a>"] },
            { photoReference: "AWCwydg9-fFkHGQ67BYLyuOiLG_cwSYmDd-V2RgBgKJxi4Y-tIWFkal8SZAVuc6dPaN_q0gbUiI64apGR82W6YtzckjtsoKOALGo-yL5kQdaNRHFZt-prcwR0jgbVJso4WpYZ_flltjHjx7X_eqSgAGHAM7xZd5L7oqkqn-iMHbcu-pAyXtRtM5WBfYW7R7D2y_Yb4D9YoGmLc40etLy1EPCbsCu0FgBkdmtC7s_4hmtXGLclojOU5mRZIquWgTEoEntfgIkza2X5qnJ8IoyDz0Gv83bQEL-L3Dc8Td88pzdKpGLY5_o7Lbt9fsi1N9usWe1R2GXeypmN5CFVpgCmNIiaHBDEaJJjAHLi0rzJZ8SITPpM7XxEABRvkRHei6mRMXYbFEnBSkF12qWPiBXFpHGuW1K4MSlOUiGwbDX1sm7p5zBbzgFcwh7N-Ld2fRNE178", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108783658788548242214\">Sung Benson</a>"] },
            { photoReference: "AWCwydhwRrd4ydqQ8FJJe2tXDB1hZmH7XZSevU0-A1B7JvQoSe5KkOgQT-Aa4TLHYT3-_vbLsf8QHhOgTH03QN80P-Hbb2WhNy6lXLfMI0RPksPRegY-FUh3E-HctKNfSiJRcZnvxFGae7HlPIPJ1wUnpyRAmttaB3oG9WSWqx_VGN2XNZEDWytePGtUInZsWUUMveCtOwMUVB-fj9AZIZEIHLaWNNCfCwBQ2PPCc9hXxgZyD-KHvLyLYVldHNgvoHRV1NSNr6olm5lB4tUpytIBCsBu0J3fWmysJHZbFUgOCDekvzC7KXt5ljlHfcA9SVTQWlMjgTTBxjhGlI65TCyenFLZXQ9mliFj9cFUQsYjRu4l9ezrbJxuQqp9QOZy76XYl9XCguz_hbvTUwS2B2p2FUJ_vXlKA91ESJIXOQGDzZ6xZ-g6", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111067289158402711203\">やまぴょん紫</a>"] },
            { photoReference: "AWCwydiPXAaybk75jjeh1x-a11wMr59eia9zes-ln8beB6SiMmB1zkfWRovlkZDHCPwqIYkcJbVBpXTdfGhFZbG4VYE7pTPkMugsmiD88XjUvBljDfPL-6zVNJId6s-3i1ebwnf_r3qjXihZEApCKUrh7E8wG7Ad0wh8xJEvplNpg-1l9aYLDu3DgdftuHGGyr2NleugCwdHTABMUZkHidKaafclStoV9XauWwBl_hPJPr1srOmHRWRiXm4uLkvpbBpiy3_7MHl9dGlo4ViZ0Ru2qKLMewW1SEXvJ_CD5ctTNggGb5Epn6-g5rCYzMd8TLOk-iv6JD2cgTrkkMZSb3MsZZtbHt7w-2hRBC8dxOMyoTAAXIJ0WfNULNDTtVaPuhWyKwcMRPnBbUf1jYMKku5JGypJDoA0mdqRcaHWz6_ZKQV1sppZ9HqLIQeaJ-4xJA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104056633896583357831\">Misaki Shinomiya</a>"] },
            { photoReference: "AWCwydjOsaMztmh4iSwvyK598ds7GAHuVk0EuBve2QGYA3aUgh0d4_1viOeI0BfmnuBjd41fQ40sv7ae7LCYjksTgSi6j9fKmY2ByV_AuoIrhLGfh65XGiY9EVp4YiJOGY27bhgIashwD7uOzZmNpwOVxJIfvqlyMdzjX01DxXm_ipCzRAlKzElbBVtCmMrEPDn2vxom6gJW9PwQ6j35tdFPBlNRUzlY96D6MyrHF2BmlTY3rF9tmhbz6K6HPLr-m6drX2A1O9zSYzanTmG7SFRcmxLDeHaOxmsiLV6yV0gJNDqJVIH2JbaMD1xD_tz7WgOQsH4SNjpExdegsPhRgKPkeaaaXhN3Hg9U_IrcPwf4cZcXA9OydhKB4fXrr5E-9dGrjOiH32PIP-Midc4bwBitP8JAYjXPBWt75shAkF6x7MH8oUi0ELnngcKHP08AjjTG", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117764914296793410856\">ティンク</a>"] }
        ],
        summary: "합리적인 가격으로 즐길 수 있는 아름다운 전시 테마파크입니다.",
        updatedAt: "2026-08-12",
        highlights: ["아름다운 전시", "가성비 좋은 입장료"],
        tips: ["2000엔대의 저렴한 티켓 가격을 확인하세요"],
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒900-0006 Okinawa, Naha, Omoromachi, 4-chōme−1−1 3F", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.teamlab.art/jp/e/futurepark-okinawa/?utm_source=google&utm_medium=listing-owned&utm_campaign=oki-teamlab-0823", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7687389354813728776", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=teamLab+Future+Park+Okinawa+%E3%83%81%E3%83%BC%E3%83%A0%E3%83%A9%E3%83%9C+%E5%AD%A6%E3%81%B6%EF%BC%81%E6%9C%AA%E6%9D%A5%E3%81%AE%E9%81%8A%E5%9C%92%E5%9C%B0+%E6%B2%96%E7%B8%84+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "추라 야시 파크 오키나와 · 동남식물낙원": {
        photos: [],
        placeId: "ChIJ12iS29gR5TQRCznHnqmdqpc",
        placePhotos: [
            { photoReference: "AWCwydjVi9pc79Yjs6MO97kpbteuOAAzHQ82Y7AxGtKKMgnX3mITGSdIMHwL_bMJw2FIFQfYfnt8m1SFQGO4ulUvpxe7qgVNqk6B_BE9JmHPci2Rgu0latn2JKY1iA4psSdP4FdAbLxLAE15euIVQG7usKJbPiHTI2zD3k_zIset1HTjcMNlXeeEAZyuwtrqD56c_E4s-5owgUN6PdmfWnFR1Qb5PgQMVjvVrdLqodtLUUCB-ePNPxKGeO3FZQ_AQI3sxIiFXDtN3Ay4_gvfpJdPqfMy9N4uhnq4NxzcxVBtz6XQvgYWyiP3VQk9DYPnov5yBG9cAVaIhn2gWKGrgCfG87LTv2khIsN7BPFGiu8E7Kg-uDepBe2xR9-_mlNcooG-iHlsNBe54o4qvAvPtaUKvx29U01AWHSk9c0fOpfrxBk", width: 1280, height: 853, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109965728530583079667\">美らヤシパークオキナワ・東南植物楽園</a>"] },
            { photoReference: "AWCwydiipIjS7Yei9gmFQ39w3_QcTZNbR8UuKVduPt5hkSznuiC7Mz2ABfZkckGHZpuToFafsmGqdpvE0TPiuV0Dxx7yQH9tZyC1WeP6makVI_zSZwL5V6XkyUm9Rrg8kq0EO-5Cevre6Nx-un9AVH5OHmReH3ErXrdJMUqMMUYiG52B2P2NDymg0U2X2hK_1T1yGePO8fNZpmdT24LsO84wAvSBEOVsjJUtFdTt2fdY6O4WNiLbiATvpORz-DcoEKIhINZyyrPvAEV83OhYtLKKzE37pJAjQ_6PCteJAx4zJhEBD696MmRG3Yi_LJr0nKaeJjhV4u749ioyzH4daDDWoeWa1MqRIRFUFNLEQ0_RWmeThce552ZEE-ypjd-RJs3kxEkIVdPm6j_bm-_VEZ7KpyrZuLPJH65UlJp9TS2YTwtm9CDw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107546120878312062543\">이준우</a>"] },
            { photoReference: "AWCwydgMPpwvhi73sWGwy-cgpOet44LZZpIhRTAiT9oyRm_lcE24_AgZQ12iZeUaD_QeB1dwG53oGVIyGhGSqhY4wBNHnMcgOPSXHGcSbe5s7jn2_0tjU0WbLTtKin7uMWzfVzW36eUbOmLM48PPv4gSyWiAoTASf5wwaS06r35ZRitZPun4c7iLV6rooCPK19HyR52eA3xbcLt6LNquQz9ikvAzcYhjzY6S71NCLNHb4VLClgOk7wEJ5s2mVC-fROh-rfxZe0MTshxCvV25FyrcvbK5L0_U38aJce9inM5VpaRuvZ7aPJSSYVbo9rdRXJcvZ_220vx8XN_o-m8EJJuG_e4Kk9yRvOrBG5SZjQfHf8tEY1gAYmjh1Sg86c9nkAxw-FkBKcqKrsIPAqGxsgCV6aGFO1seo4g0kGZfZJiOckgkCw", width: 2120, height: 1415, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107454690358487016469\">Jordan T</a>"] },
            { photoReference: "AWCwydh4qt8uH5kfMXn3GYMfhOQwnaVL2kbauJyS8f89u6_97MNCD350BEoZL-WlWKhbeENG0yeIi1paVyVKvdUboXD3xzhyEpez0DsOJ67ffKg3hLP11l4TMuS_LWB43NcVBb4bKaBV6pqldHfYQ79cmQZy_O4Jab3fklWySNKRDXVfvWGvmIwNtjuQluve6yzDRUxbjDCJ-dUCq6ZwWg-uY31rsunk4qbqid2w2l9Bjvj9fuiUPnwH_-GwyOPM84euDxHik81Cmwr9kqy2ecuWEPVmaIRZ3ysFWI_WHqjB9R--86AMe1ozLClHoJufzepQS7GVQqZTka9L4O4vVhTwKNHSfHAXWno3sfYpw-eswjmIMQz6gr7m4kETvftGTh9wFVO6U_nZcgHB_xP3YDykv8dVi0FITWTWAPiMPy83RKvrAt0", width: 3232, height: 2424, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117479826447095718512\">みやび</a>"] },
            { photoReference: "AWCwydgUEh0tVs4HBOqyjyHVPRw7Wb-4hCNNXE7Ntez93kaoHXLpDbbvLEN8HY8L3ELi8OvL2-SMY4X1ZS6xoiZg-Ln-Gg6Emo1C9Cr4BS84MXqA-vEPy8_YRnTG1zmyWRSTKkjTS_GbOhC9yqoUSePvRjStKDZTQe7ooAMHUS9DxmZmj7jM2d_HRaRJt56Bv6rF7QiBWBNTU40CuzrUFx99FGvLcHJDvuQEzfwrVdcvFf4gmcOMpSeuR4DiDsKnTl_rCco2JSTrP1CmT8ZFHqd6Hxp4vwgdimxsiOXOV3iYnAfNJCyJpXMbOzIUId_Uz0OvSqOID6yWSbWxp2MpLq6QY8SvMlB04P0fZQ0mnnoXsutB6Ha0wKXH6hDbwwCgUiVrv7M5gQh1RFRy4e6dYW-00di4hLcNE4uid322P74u5pCjBHg", width: 2000, height: 1333, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109965728530583079667\">美らヤシパークオキナワ・東南植物楽園</a>"] }
        ],
        summary: "다양한 식물과 동물, 어린이 놀이 시설을 갖춘 가족 친화적 식물원입니다.",
        updatedAt: "2026-08-12",
        highlights: ["동남아시아 분위기의 정글 식물원", "동물과의 가까운 거리", "어린이용 놀이 시설"],
        tips: ["나하 시내에서 택시 이용 시 약 40-50분 소요", "귀가 시에는 송영 서비스를 이용하는 것이 편리함"],
        hours: "월요일: 오전 9:30 ~ 오후 9:00; 화요일: 오전 9:30 ~ 오후 9:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "2146 Chibana, Okinawa, 904-2143 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.southeast-botanical.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10928720797606820107", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B6%94%EB%9D%BC+%EC%95%BC%EC%8B%9C+%ED%8C%8C%ED%81%AC+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%C2%B7+%EB%8F%99%EB%82%A8%EC%8B%9D%EB%AC%BC%EB%82%99%EC%9B%90+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "나고 파인애플 파크": {
        photos: [],
        placeId: "ChIJpRkTRFL_5DQRaoYquVrISOQ",
        placePhotos: [
            { photoReference: "AWCwydhUGeMbt6C3Ueu0s0x2-9FvVxvo9-kHrQzSnk6AK3iQHB0mDuFMu7BgZ-slejY4mbZWWC5rZ7hkFduyIbdKg19XidGfvrLoTaIsf-PFHYOfZJWHF08zrgkWnTYcS5KvHqtuHHET9eMRHy6ck4XsdiC0A9xac205wBLoHsBAglpgSA2FghhEYOvaE8J9GC0rbiBoHpV67jcXWcRui6CQGYW7NFlf4TyitK82O6igR7YykRUwIn3g90ljkDtnCfdM8Xet8OboL8oN394PirHC3rk0hvBrW331H2FMHKsYHP7iIsMoVuw_IZtPvSVIFibAGy0f-t29P_UopcGBA54NrAf0GeTo5pInPeRF6XkWNRFYqlWUmkMELPQWdae94LgiSUrCmf86EvF_S6_HkL8jv3_hZme4BFtEMFvEUmCaO_8BgA", width: 1215, height: 909, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102288496662216954576\">ナゴパイナップルパーク</a>"] },
            { photoReference: "AWCwydiZzdbfqtGcj_P-crVLXsedIXsGkhkUgjrhwfnKuUQiPLhOfbg1JJLxyxLFTn64GetaVwOrlQTiKCWBeC4LcSwFhYwTATtvkrS_ksHdBlk5e84ee-mNcfQg3QE-BDVeW2VOrgFOYcRPX-kJZtuo73dZZhXR4fig-NIisCUYW-WD0XkjX9zMXKBDcday1heJU9gLuue-bnKG9e6lDLvImnv6Ajojm_6LwB5TmLx5uqRLshtSyHIGWscOSPDPqhXFrNYlZVoYkuQ5t355ZlBy_dVwds7njrk63v2hvuU_CQxP2RiO2gTsI151ZIEkfBYpNYzSiq0TwSyEpHndRC7JJ98W345Bl9jhADo2ThZay0PMLFVIW7MUAU515WD-Irqt2mI1pHNLEkZI-2AUX_rWZyKTh8Z_pHiWFtQ_9WAcZ4lUj7pMQxD7fb-fREWFw29E", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101034208405200653209\">Aron Hsiao</a>"] },
            { photoReference: "AWCwydiYWU9iRZn2cUeVFMnOUHXp-hOhYMVcMGqBtk2s7lOnzQjaMzwMdjlneab6jJgNfPEsmv908nLrcwa7W6Pl_oEwYWhbYQxl684KBb8zA_CHe9PXOs_tGFiNqhMn7ZMW1pAiy5pltPzRvXx32vYu8EensMcwzkLah6gJMFsfvblnbs4E8uURYeAQLnPgSqt3HYmJXKe1kgJKm-RabcLy5FGFEbCyq8tp1ptkhKK7Pq805DE1XV0l2XwDP6xAnKNyZQ0adsOkGo3t2TwnoVUZ66pAQdOT3QJUA0-uD5slF2fACx9JgaUiG5yoae95lG7VBFkF6jG8XSGqtuivrAhwIryItptxGEgu6buNgLucyY13S1zf4xcOJKOopio3SXod1E5eP7WJUHE2YuE67GIpra1DZ2bmNrTSKO0RaH3G9mk", width: 2160, height: 3840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114059073382409676445\">山ン本四郎左衛門</a>"] },
            { photoReference: "AWCwydgpYaKv63KhFOKp2Exeqiy0MYVNJXYlHisihxlGXBZsYfmCCIGtC7fcWIdIAskdIQ_0piQA2-CuXhW0_QYeWBXBAChW7ass-SrsUtr7I6tuX5SP2KySVgCTVS2iRl-GUzVusNhyOlmx66PmgwMcrtGAfMbotVMyi5V0A5hmvvMMBwRLsDN06jtdhdAiPoe3TD3CM0nKm5z9srV1nMJxkuIEi5xH_YDucqgfqmza_Ut2fxkXojALEoU_uxxtfzBu2vhJUpd0cMLk8Sr5Woq8jnikpcoKbXhjErrptBUmq5RRgtKIJTWW7Q3_sTotHKRVfXzIq84ceyKLlm_L6EhMn4MTuYYXYJ5THdA2EVLDKZe6IkcQ5-q2NYxFdWe4DJR0blMVgmmQYPKGuA5S4zZFk_ugFBBnqh8CI6CPttCAraU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100822439650826135173\">Kiyo Horimoto</a>"] },
            { photoReference: "AWCwydgvxDmaUiOFkAT-c8ps4oZmEQcYfq7KUfsFJ9ZQgS7okv_lAXFNEzxoRC2zP1dIX_FxGPVbWKv5ogQCj7cXa6m4jCdWlwfV7CWJcolk5mHE-WfpZOxriEI94Q4y6HuYNS8GtHEnQj8hEqpmZKEp23EK2-_OdQ8hHK9ZvQL-zKZejnKwpJ8x4kuTEWSpMj-G3qFG0qwiBHulq38Lmg2COZBPsJG2xau_tB1tozdTVdTfxrKPVURjIjjVKT9BB0K10cnM3NYFkTUU1uF12kAFXYM6qglzvBS-TdVsHKubmnB3NnzKU_JMEj0liyoeLzUx7MHXYqlrlVEvswJDaj_zUmB94kDz91whbZR0XtH19lIEz1oxvIvXtsF2mlvcaiqdJdTRnLLbIsS0XwEdLZTeuErtUx2PEd4fLD4RL1T7ItCXKz4H", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107317490378995647293\">Shiori Kawahara</a>"] }
        ],
        summary: "가족 단위 방문객을 위한 테마파크입니다.",
        updatedAt: "2026-08-12",
        highlights: ["테마파크 시설", "다양한 어트랙션"],
        tips: ["방문 전 운영 시간을 확인하세요"],
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1195 Biimata, Nago, Okinawa 905-0005 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.nagopine.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16449617930949920362", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EA%B3%A0+%ED%8C%8C%EC%9D%B8%EC%95%A0%ED%94%8C+%ED%8C%8C%ED%81%AC+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오키나와 마린 스포츠 스루루": {
        photos: [],
        placeId: "ChIJscxoxwr85DQRmCrtAfN4PMw",
        placePhotos: [
            { photoReference: "AWCwydgrFFTtSfj6yhWx0fRgb46WorV_IbGiscrHUFwYW2uvCeyDK0yRPql0Phc-lGRVt1qluHqt1PFhExZYNJE6gmbQOtmK6DI3P_JBmuSAGBlrCrsZTDlEHS0WsH46OH_ARk0GOmeuJYla9eYLVOXoloPebwQykhqdrlqPkmcfZGQpUHlNSGT5Ae2056AAglMNuzjaZec4HJkX0UVl1zBVtXUyUqmL6g9kXi456eDxIbykOMnbke-YaiEXTGXcSILreNH34BYnE3luJMxjXd6oYgb3BRbsqKrg3F_KRokKi_yawLZhiFqQIwRu7w3J6mVW32Ii0yj9LlS1oMMxN0_rp06TQ5WZ5oCeDQou36KI2dCSOPaEq0zpZtdQWfgts2JKyF1LFG6WOfOkxr4fM8ZFP-S_zbqUNEZOm4dsxGCvnr5E9g", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118225253544705284380\">沖縄マリンスポーツ スルル</a>"] },
            { photoReference: "AWCwydjak467CtSj2--4J78GwDFJCqiqV3gIK84zR8wpd0PjegdN8fHcrePzFETzYqLVRE0aTvgfZZ-bjpkQ21eAeCLgblmTAv3spvjN9zvG9qKGm-Fh-Fxks4i0GCvKD9F-XfpQsmNliw671Qa00-kPc9wBWZwJ6TkNxu99fCg-C7IMmHp4G5xh7B0o2ndcWrmnNrzKZ_9T4EoQrB6ZjrybbDfLaAMv22Qq5BHSkpZR02NrZBycnuekZgQc8yW_TPykwJuBe5wLfYnM6B7O-VI1XJyguoAFe9Jr7zz1aSDd_BaZX8Qw2pdCMIQEZTYmXtV43-6z4BobcXYjhYI0MOEmsMfg-mqSs9Xg7NJ9oRp_pQTru49iee5-p10HbIeKqCPVzNMaN-G9_gCYEwkUp6p0Kr6YnhXssM7HJ0c1W5FUmuAC7QsCfQl8xuh2oWEcI1CG", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118225253544705284380\">沖縄マリンスポーツ スルル</a>"] },
            { photoReference: "AWCwydgDlqIXx4kfxIps2slW6Ci6qodUH2uFEZBlo1nh3sqoB_naqUYDfaDsmOS6m-pO2BLF9nNvwB_LUcdXog30ii0M1lwa880qSIW9E3dgjXbimmQC4lcUWb0W9pHN_xEOjkRqwJaAdogDvEmXF5O9hJGWufiPyVkslNPO8EgHCoWIW0BYpgCMxxfB9xoLdB1Zka3fKVBkHcNKYVENNZArwYw1PH8BCFHPEOwnABjKxC7ovB8FlYrIUEVl8nMexAVx5CR7JoqFJ5OnQDMmmAPL_ksbvg_241C_2gsst9KcgfYKkzeZjskbQqSjSqRVVTZW57bTeLZ8ELKUrmy-EzmrmkTSb6nJyTKrd9FTHY5j605IPQFW5ugRxh-bQ0ugwFsUI54057w3dN6nyd0jEb4SGYDw_QsmT5kRNk9IPohFGJw_l7zZ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107166673627031360829\">沖縄マリンスポーツスルル</a>"] },
            { photoReference: "AWCwydigaEVVKs6-myG6ODD6E8nIBgqYhmSliA9EKjFptTuxK4aS5T1sZgRABmsSthELkE_JxDIVK7jBk3y_vrrCiWfcixFX2ex-trWKE4GQVB5VPjitI2ycgMCy5jaz3E-kUJu04oPMdzm2vwig2TKU6kGqw3a69njYPs90RXEV4FXnXIO5nQW7Fw_e79_Kkef7qfPKuHsw7Eq5bKGydAfjqiB7sdgIV8tgYyMBoh3WdubcatjHZb7XFf2aS-08XfopcUALhdWi4heOTV4gBCvwIClHDanxuGJfV38-FKO1RueyoC4rlBd4KEUWlnTU_uZbaaj22prFBYHlFcrm-xnJPx9gGrVzZXqYj1OJ0EldvX8KGEpbwrQl1ym_-CcU669tu0O1w66vqbuyOMgYQMbWz5FI8bogcd_MvFpvfkk4wS8eXw", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107166673627031360829\">沖縄マリンスポーツスルル</a>"] },
            { photoReference: "AWCwydhkXvPuONJjgGJRZZ24VP4mzNujQFm8MTSqQP1u6FopErTOFG0ozCKFVlL3hlsSd_OgQOU5x_Kxavio3A49fw7oDJqIYIdczd6oYI6PkKJ7emx10rO_SlP7F1NVrtFzdpNbP7irNh8q55r72DAvmlnNb1mArCZqn_-iBSesbj8Ymnf5XB2O9LnqO-2yrqE9nOUHIwk1MYIMH8clgXfSFPHJirjdAK-X1PpWoHm8CngxV9e5C6te0WDWl7XvKgeDewFY_fzc3834Qa0IGcxU_eF9k_tjVevwthk2qgwBA-bPNttt2xSKZ73jYVjtT6va_2BO89cVU_64o0LJEQY4yRUQGOSBOCnphk9l2lrPoZoKZIpDqyccLP9NGTpzvd7gTw3O6_qL8598MkEAOGwYyv0qq2xdD26Dgsxc4Lf1fCbWR74", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115254297712356015265\">erico S</a>"] }
        ],
        summary: "가족 단위 여행객도 안심하고 즐길 수 있는 친절한 가이드와 깨끗한 시설을 갖춘 스노클링 명소입니다.",
        updatedAt: "2026-08-12",
        highlights: ["놀라운 투명도의 세소 블루", "전문 강사의 섬세한 가이드", "아이들을 위한 맞춤형 케어"],
        tips: ["비가 올 경우를 대비한 유연한 일정 변경 서비스", "샤워 및 탈의 시설 완비"],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "2646-3 Sesoko, Motobu, Kunigami District, Okinawa 905-0227 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://sururu58.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14716770667444644504", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Okinawa+Marine+Sports+Sururu+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "알로하 다이버스": {
        photos: [],
        placeId: "ChIJq6q6PukT5TQRZ78_oDFR10c",
        placePhotos: [
            { photoReference: "AWCwydiYrk1d51jLF_f0RQJwiJ5VRSPlhgmerE9xi5KmiLAHT0daJAT01hdg_b8_sYPGHF1KeIcqHF3rkPPAhx-CgB9FixkWYbgFtScfzp_Cb3FnE-NZRo0J9yhPoXNRZKINwaphlLEIpUEyK6vVYD0YNyGeMsWr8VvwY2YvpmToNXPzUytuPh8S9hjYqdJ4UIdkyJVDxiE1nSTToauU0UAWYB1iYZVZorAe3VS1ycss6uyNnw8k3ouMbhFJWQ-S6mFnIbefbUwK-Mv58VzqDGGsgngabofFmynMxR5drtnhVOJXTEYoYaodXYpkvVVBXiKxyg2whc67Gf1O0bFyyJBlRLI7g_HyThmmrG9kxNi5KZvrPZJeaeB36C1QX6GaeXMPoEAdUU87Y5khg72kIC0Q0vSmRq2g7qAgDJF95LArzBg57g", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112296945825918935072\">Terrence Chong</a>"] },
            { photoReference: "AWCwydi3mwbbnna6ZsFdU5mfFkHoW-5gTgT2CNXfhk0JnMbJXG3vNIJZaiH39xQ98PIFFn8N47ZbDUJICFDRou6YwyxAi_FWWvhtelkqzAyBpruamwRR8ZWM4GW_iRIWPJZoQOUD9YTXH0IYrAef86m8Ut6VJAOjim41vufg2O1Ob8dEY4F6mvIzrUUlF98jHs1ZvoaMRHy40bSuOyyByVhcHuy1bu1ms3Nev_bRkMjnSapbaSZ5zbxq124yLf9guexF5PdvcjC4NPCZMc0JzZIiUtyLE7qTaWiVCalmAjS8sHgiyOXcafoWcj3K9IOyw2GbxVsEk22BKQxsTA5HumjtFtySNjHdgKjnCbtGuPT604fGd0zVgax-Is38inDlKe5uTbJJYUxVBluAw_-WChP-OzO205EoA7gyf7ridCXgt-9-8Q", width: 1416, height: 1088, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104012074466757748677\">Jan Kersting</a>"] },
            { photoReference: "AWCwydjIOrh-2jDwxT_s84u4pQJk2ugwA3cO6egoUIrX4-vFMC67PlTg2K-N0zKJ0XWFHFucYZptJjvtQjVBqya_eK7mlvtWh0U8Si5Ty6CD4IFoUEW0J4TeC-NzcNEkVl8yLQUT--Y9TSKYQpR4TEE4jr2cQocA1zS5QvrJ3yiN4fDDDWzobILAjqHwTGxSh9-MzsOnArKvaAoLSwn3yWLX1iT3AmBuzPdzJ5u2nlVohLZSFga5lNfxb7epwdv0ccAk6wPw7hrT50nYDSJKRtWl8hQ9Nhtb0WuFzH42ldFBuSvYRfILRpUcFzHDspzHrORnaM85CeigpK71AiXPSJtMykqic6WjwY1RMBFIV5R88sZeK-OKOEobqIG-DwA08r41ARv4e-g3jdUm-dmJpNJBEpr20QhY33VKJULGtX01ZNM", width: 3001, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105938074089597666219\">Aloha Divers Okinawa - Mergulho em Okinawa</a>"] },
            { photoReference: "AWCwydgvWwDRRX03NTuHJKXS86_VzqHeVQ0y2qTEoKNwv91QjLEUrp8sNV41rDtY1VHoNmibTxZWHq7IT1bHibGi0b6igoNDPykvF3qtYOx_yKf46tkGTXli4dZngD2nZRhzfonLlflC59IKS0vkUB6qFaBC4U30LxtBzAYzCZYdvPJJrFfLMOqMjEmgHWo_YX8H7ONLvvQ4V1pFPf_N4K1LAt5j7rFpmXHs59ZSK7aOfAPvgMOfFBOI-MJfkoxHsYPPgbqkANIPYgQ_GiwQJYZ3SHFbOJYAvLzD2cMTzj_DT4mWJr7tX0ec_wutR-4_aCPVXDN18iCqr2iJa6XohfZntOCJkzE8f4BFj46xjDDBQB2dRShtEQ8EfsqU3s9v2kRKU9GUsdhMATKRTniRVOpkggKsjpWM2duVROL8aQwb6MwDAs4", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105938074089597666219\">Aloha Divers Okinawa - Mergulho em Okinawa</a>"] },
            { photoReference: "AWCwydhCrEEhfZugsUQ0MVuwYIajoCZez1xEz7e__vFd93RehExcD4O1L3NoQs6_IV9gOyybJIHJMt5hrsq00IyrqH_OxIskiioRn8Latw1TxbQYekw0e8yy1ZyvZlqCk-VdJXrgeHLfM2d8Jk4ioGDtyFt0Ju9FW5_w6RzlKYXh97Lzape9vlvvQVXrI4ea5DW4vg0-038f0VjD2BN5jTqTy1P6d8XvWXSctABkmoocvAT0miZ-XF-_P-q8sxvXx-9_D5NrspJT1X8U9PzMu2y9bYgynbydC3EjDVeWjCsEMGdSOxIqksw7Ry-jVj6f7ZjZ6S3XxlFoRxQDPloa1KDo0Voy1F1z2jYdbXmyDufjLm5a37j-1cZ7iMF2PFqooSmIWu_puw2rduNelVSKvTbUVJE4llaR0667xnDI_T-OunvDYg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105938074089597666219\">Aloha Divers Okinawa - Mergulho em Okinawa</a>"] }
        ],
        summary: "숙련된 강사진과 함께하는 고품질 다이빙 투어",
        updatedAt: "2026-08-12",
        highlights: ["자연을 존중하는 전문 강사진", "친절하고 유연한 서비스", "높은 고객 만족도"],
        tips: ["전문적인 가이드와 함께 안전한 다이빙을 즐기세요", "사전 계획 시 유연한 일정 조율이 가능합니다"],
        hours: "월요일: 오후 4:00~6:00; 화요일: 오후 4:00~6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "77-1 Kaneku, Kadena, Nakagami District, Okinawa 904-0205 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.alohadiversokinawa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5176695570269454183", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Aloha+Divers+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "마린클럽 우미": {
        photos: [],
        placeId: "ChIJ4Tt643AQ5TQRaaUgqmFcWVA",
        placePhotos: [
            { photoReference: "AWCwydiF5ABYemKkDOEx_nLADZc1XEWFb6U6lzNDYMnAFRUR_-VPso3jnhPrnB7srgx2pmc9ZbAGMJ2hQIQEcrj-DXxVa6N4Gmq_ObAJaD3jbZcEYfI5jto1eS2yAM5Rqcqmi2bxiNKuLtOQYCxGvt7zpfFD7w0aXfbw_cRV_P0opxZnxGnVWChuZrmLNEdGXm-_uT3gqqUCzmsnwfcqObaueW2ajHTqlWsRjg9ruHfK4Ep5vkGlLEMyybWSE9bRploXMXC6oe_oIPwEFbdiGWOnNppb5MyWO4qoiY5W1DOnC5OWql7gCsjdpNWYsiNAZtyDWoLvciW_ZLyPyS2LJ9XJac-8olBVWe0eCxUAmu3J4oYevtdtcxnosMgERN0wwMwYrUxi8dRX76edAIIQYGP4ahE0eQ1uB24nrfn5sTrgSN3-1w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100904874560876746546\">아는별</a>"] },
            { photoReference: "AWCwydjCfJiY_NYleH9iok_3i4TEw7spCsQjUP4NycR8TkN2g3kBMDacLFYX1IQdhAeQ3UzmN49vD8aXS3pLsBxWypga4AcPdjDjXypL-CtfqzUuafKYYMGxvfHbJDCK4oNwx4BiZdBb_2igqa3eAdDu4MjmRbi09-bfdxp61DI-Hn3IOJJzlN35Px8asysNhR9Gk1t8f5UVXq3AgeQcfdSR48H_4ONhkr6Mv0AcbLwplcYFhXXYaKINH9dcnaORnrzLzqHjdwMQwJ0HjMhRt0HLyJy8O_XzDxOq19wHfIJHPIQh8OtORIU_yDriBOrLsmahr2lrPKrLWU2B0WH7Zdgg5J6I8naMtjVUAzevPyZVIcC0EaglNpOgeQL4O-ytGOcsncWTQlIc1ZsVbyBM09cf7O1gWDNJX_C6JcoeElsdtwxUgA", width: 1136, height: 640, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118067390774787419447\">マリンクラブUMI</a>"] },
            { photoReference: "AWCwydhDQr3fg5SbCQANs7lntql_3zd6JNdld6lU-7JwB2C8KoGU5zq22NhtdkjiE4lnzGPJpSvAa6smmwAqLjJryG7BA6xz9NHlXz_4PIqDOfpdiciiri5wKQThLQ331e3R_akfH3eNMr18XEvLwZiQ-kgG31_Yi5WMnVNISx6tAwNpnETXFMPlcxRxwT55af-5aKUUemhxJBo2ySvFR3jmPP_j9VpdLMJwC8V7pgjdg3CdsZ9fjgPmxDiHC6kAUeTIhgBiDB6dpb3Pka5Ra0p3cFnx7RYJ7s3eUebn5zw4mXwmJZ2Np9AQDDGdDtLg3wOmLnbh-SLlT1LusybXRPC16QbOrx-VN0-1JZN66_SRy_8GwlkhC1Mt0S1uxDfROoa-vz1eGULMstJdCudlEdpF5xqECLW3BZcnxX2JN3PMZZNFqg", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108327180432720454371\">이다슬</a>"] },
            { photoReference: "AWCwydjvRzFLBDDoAQl0O6Y5Ch-5Zx2YK_XBurSyVTuW0229SzSM_afC3GyCv-Y-coMv3XOSZu9ot0m6fEyCivFBZVR6ZHlnjDzXHyzIh3KiTauxbQMqg9j6xE0d3SDWwgVyFykLnERRRsTUgIFSTnERXsFE8JH98uJl9S-EMhKptBtr4MV5md5XUZDjps0dn_AIcCzEHid-F_YCkU8buZw3QrYQbiv7U6SXRVmDfXU7wdIVXABLM1LlkZhO-Oy-KxGwazQGYZWXLNoiomcsCrRRk2Ocj8PieuTWQ91ZaXSskH1kJcDQGkNBTM-LuiSjo2SQ9CNLznin5YHCGpG4wfYSL-WtdB2MZST9qLni_JOMxzAAU5TGTDY91yKMaOIsOmP581oGCOPLNgCS5c5mdqgD4GicT17YGlZYokRMWxvQBDBDUOBerFjAv3Mbx8eav242", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111958187611603904100\">N N</a>"] },
            { photoReference: "AWCwydh1TQrCIDvJB9wysC1GNIa4sR4LE9aEGoIHEjlaSgxvT4BwqTywoaJ8wRSwtl_KDyfRNBljaGq853X8tx3aaYYWyLDEWvMqx5Q9e0Q5SLP2B3-nu69arA9ssBjOa-Epbew_WQ9FMeddT0jkbGkA12M7OstATOsmFJejCynRVAKRzVXN8EU7o2TeuyQnTdHfcJ-A10gR8bF-_uehTa9GFfiKBySUPEkS_GyAUexu-OL0EboXelZBt2eQiNTaktkP5i8mbtd6dni707EgIX_YrnRNepUoe21lTQiCvlSqFDNP762ei_6SsThzwUXqLb8WOVCdiPIkv36JGMcEs338gS6Vr2mXDDmY50htDujvE3jJRuSstD9e2AQJBoIASR4n8sIxya_9mfakqUiIYD05HtWISf6xXJ5oDPTxXebyzLhrpkC3yvUsWKrpdEopa7XA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111700523963326866490\">이송이</a>"] }
        ],
        summary: "다양한 물고기를 관찰하며 안심하고 즐길 수 있는 스노클링 투어입니다.",
        updatedAt: "2026-08-12",
        highlights: ["4.9의 높은 평점", "다양한 물고기 관찰 가능", "친절하고 알기 쉬운 설명"],
        tips: ["날씨 상황에 따라 투어 내용이 변경될 수 있습니다"],
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "2668-1 Yamada, Onna, Kunigami District, Okinawa 904-0416 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://umi.okinawa.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5789760370497332585", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A6%B0%ED%81%B4%EB%9F%BD+%EC%9A%B0%EB%AF%B8+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "다이브 센터 오키나와 서티나이너스": {
        photos: [],
        placeId: "ChIJORv8w6AT5TQR7qWlbXcxsEw",
        placePhotos: [
            { photoReference: "AWCwydh_YmJ270mFtTlyaVTDSEmDiQa2yMtPwPVZ0AmXOmD9mrGUBF-6fzP2RajZ0C5lrOYt__oH_YT0rPUW30flvhOi4cJC3MbWmCaio2A5jCPltP9q5s9P1YaN3hJ3tzZg_1E_rN0-iThI3LIPQKhtvHPKFNZcqJ8aT9k8fuIPjZgqgb56L9CSysGL-i85CkONQGVdAEL3J5R5Fjr4_EsbhYQOUyMbBWYqjHxLQ5F4mUFQULWSUTKeM3tfDUxSWYULSQZ8crYDc3nzUqrYeMnYenXIYsbxh99hiUkjAlBV4d08Kjva9kvdfVjXub6nvOu1jLEJSO3LcjILJ6tk14WLjfKxTJzgduxgFfuBCj9IubpjQifOs-eHrZoX2UQ_iiqif9bj6bsibGwakFXeiHd8q_vBJV19fMJtoX3xlrtASUzpZD__C2p11sorWIkmFyYz", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107540360696715136543\">김주표</a>"] },
            { photoReference: "AWCwydjOaudl93wBM2fccYwv2HfwnPnBRuH_xFlsKOWvzPombn8KyyGQmxsUiqKa1relkdPSLUzoP6SpxN4GtXDG58ttSJlDXQ41PguYVOCDZm53_VAprguffB0vyVTTYXmyKsIFfUxjmhvoNYQdjccLsg3R_RZd6LC3Y39xJAkOwCXcW1Al5XllOs8qAlXX8a9a2nFFTovIihKetRDzRgFj8y3IeE_iGhTCniMaL3D_LhyyUbr7Eeera-vbqlfClbnkZDYl1i_dS4gNRhddq6SiGMdNCFB_z6gMhx3ZBuGs0e5o_BBRMjYZKZlKCO3fv8c42izdx6CTviMfVRkSIAzj3_LPy3PkPHOFPj_lkl6pgAy1mdcLCCPrfD7OLXOSrruj7Iw9jSnYJ4PtXrOcEecQdrvvMDy4Z5eFjXYp1QRzkVk", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111400885222301942504\">dive centre OKINAWA 39ers</a>"] },
            { photoReference: "AWCwydi1YfrCGSCJJJnbLWXajqg95aywM0AmBakSdlYKPYTUBM0DK6IOT6Mhtt8CzjYkhcV4KIyh7kPuPHB-45a8iMT0bHkWsY7KaDxF23UEEDhwdsnJZTN1-647VPJOf6n7C6UXWZXrVJnMHnzPmfbSZxwXF9gxP4OsaQEPz2fd97NAZ6Xu332f9cDB0d-KNIaE-upbBUQuckUiAkCcbCTprQG8UzF50GqaF6g5QykYWs2tfcTExRYt7jSykMNYahLuIHKw2LlXO66rv21fOFNC9nDrQbPC09driS9-j-LfuUAsD0MKAfNzkjqGRRpNpeqf6aBdt39Ljer7j_27QYPzEJxeiu-ETQhyKFnddB5xy9BEC9hWYnvKas6AJZMlaU3epJfpafwRri6MzZoWIrbO54yWsi2te_diDxUg06wWS5XhrbNK", width: 3648, height: 2432, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118262551674218222088\">Alan S</a>"] },
            { photoReference: "AWCwydhcLaVGhO1sToGsWLqf3CVkU7QGNXzn_vTG33GJ0fqfkccF68tX30gZUpu1fLo9DqYw7UURCFWPpw-IqfpXYGBlIeSMEYzeDcEOOqB0yPUV4aO9xEWTMi-vCsVI00zhJ-b4wyoJ6332AgWd4R0VdwhVplzoBmvYaahRwSGoRq4j74E1DTtjl4Mii0wqY-E5iD_-GeJoXcGTkoY1KDdLo0zT5yWLExgbQbaigJrtvRNbqDhbIknnop-h4cAz_rkAv-gqAGf-hfzJwvGbnInniLZy2LVqK6FZsdYM3M1c_lonA9dl8x8LrHW6Wg-feQHTrKDZqlOtvCajtwdddZ_95vdA6nz1VOT9lhh5kgHGN06rXQAJ5NJct-2JkwyXXj34rg6yJA2zBDaoxlIPKkVYq8QADnLXyHVniJhfRtMVd-TGO20", width: 4800, height: 3388, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107593146394388004073\">Franc Tan</a>"] },
            { photoReference: "AWCwyditYXiyqByZs7Kpslnz4YtOmIQ9OFJ0Fxq9VI7ZZY_32uuy6tj48kG00OLSksBCidKHzkrOyQKt5htz-OMgxcn4_r-1kJ4q__5lHaVdQmqPcUURjML7F_nthqn9OjWVYX1GJT4YRN3UKks1EwNZNn7i7XNOGJjCDWAbRmysLYS5w-iRg5s7IP4bZM_rUdSV723AmSj1x0or0BuxU0PHKDCqx-U-DEVBaucOYimiIeoxsmFEGh34rtGN9jMiPaeKnkwe9CnpXoXFC8XKktIfRuHg-eF0Pn80unyo2imtf8klCNm8ae2Cd5N-WcOvAZUxmBYDcXK-GfslivS0QP7BLopYIBAKjtQs4Xp58JZmLzqgfb0sKftNjso_GUx5-YYS1SQS3muSmYWfb0etnIaU2JY9rpezxSMaOse6D2PqHMAAgSo", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104119083478541331656\">Justin Reynen</a>"] }
        ],
        summary: "전문적인 가이드와 합리적인 서비스로 케라마 제도와 민나 섬의 아름다운 해양 생물을 만날 수 있는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["전문적이고 친절한 다이빙 팀", "합리적인 장비 대여 비용", "편리한 픽업 서비스 제공"],
        tips: ["장비 대여 시 첫날 이후 할인을 확인하세요", "WhatsApp을 통해 예약 가능 여부를 빠르게 확인할 수 있습니다"],
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "Hamagawa 185-1, 浜川 Chatan-cho, Nakagami-gun, 中頭郡 Okinawa 904-0112 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.okinawa39ers.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5525971131794040302", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Dive+Centre+Okinawa+39ers+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "레인보우 소울 오키나와 미나토가와점": {
        photos: [],
        placeId: "ChIJPUzNGTlr5TQRrSzqb0GrGSw",
        placePhotos: [
            { photoReference: "AWCwydiDlnzeLr3MAM9ILh1HahBSm7eIDiQS1DM1CzhuAwmZTTyc09yWMDV6-xK5U2pq-Fm8NxB505uKBlMKICjib_9aLH0G3Vj9Lq7H_TgeaPGR4jRacN5II7wx_v1_ylXiA_nUmLrsH1nu9vlUTobtxXjiWZBBaBbaXwrQGbhwC-W1OtmeddBysIhCGiFvP12rXRJHTFqqLxBobNKZR_mcawFuH9M4JOFOzarLiXo9P_t9XcbUMfVmu9hemwaSfPbuL-NQ457QOEE1xOyfwL-UNYnVFNvpJdC-LZ2SF2FTTaa8A9FAL7LKSWRgfTM1LYo-r-XEaJGKvc_9xLVNTrD7k26bi0OIIGHfK6F247J2fy7ImbxfbDbTaQAQIfsmjwjzJ_fRCNINMO8AAQ4DlG6zbfIheEDjInNP_9xwSJfpTQClO_ea", width: 886, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104422918135725792790\">RAiNBOW SOUL OKiNAWA｜港川ステイツサイドタウン店 シーサーキャンドル®︎ショップ</a>"] },
            { photoReference: "AWCwydhSnFYxkO1cf5PcSC475YDKmGmbmw-NpkdtFKNWIBfXntasZ7LUZQ1S0faJQNpsy9lWJ1kveooRKXzDZq9tCdkLQyVmqyIFWuAknL0rkaeRF617Gwn8jfCcMFv-MXzA5E09rt-Cm1rW84x3Or6U5UJPl4Y36kCPiaanjIlyZDUWYdOB_Lfcrujtty5SVy3Av1B1DPs0Ay3zF-5OrWDI1vTi9E_WKAABlCGnCv5OsLvvgruUWzLxuosLWYxuAda78YXtcAgECq3ijfhs90BAG_EOBo13JTR8Nrxy2T1-ku-ozEwWhNePV6wsXXZLZnGTdWSTwjY7vg8Ggl53MxGNIXJm389_rXRzTTbeR6MKDhKyCoeIpo_Ha5uArMGwYyV3xCevb-HxREnLH3eTpcLkkgzhfIpxK57uSSsStwbJ6lqMnluSP1tydLGg2rx8Dv4o", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106788066771394386782\">Yuzuki Tanaka</a>"] },
            { photoReference: "AWCwydhdJuiRgL7Uk6rla9dB79xee_JAVLIhWumlU9uIS_6Fs1S_0QMUz7FCBr8k-_14yuyxI0ZsNR5y8bF-3ppVT7Sb4eRAH6AbFIkEC7QZbieZQVKQesa2Yc5yURpfX_kB_ydahBDpDvMdHe7LvNNFq_eU_P8e7SVTXMElPdmrJb-dcEbpzdn3Rn4s8b961l_L8ZQulg3Og1sZmIt9sVT32J5_yhCwwMeQWhffsgy8Vm53xBcHmk074Wws_DFqLUeCUgtWKnFfN2SSbntT9_6G0C6ngu5sT0xs7aDJfzPzPWUunPFFFYbrar9PLOfJvE3iniIgK-RPmf2_vNuHCMq59JLGD0itK8HNLyU32lHue0u4aGqxw3lvubfdKF1U-INapiSuB_g0V9loORRs86FfUU7Bk8Hg8qb4ZEtL-1xrz9Zcf8hz", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104422918135725792790\">RAiNBOW SOUL OKiNAWA｜港川ステイツサイドタウン店 シーサーキャンドル®︎ショップ</a>"] },
            { photoReference: "AWCwydjEKZ9HVeyUxb-Qo82YtvJuT6E4tPhvRR00S1Dd9xFxZHoU9GaWYt2-YzCNAjRcoe0gepIRSLEC36Pm3I7daqtN65Q-KxZdJ5lanVcgd5eMW-xh2vze5fPqWpYg-SzT2q7-9OLV2l_lGk3DIB0jjscsouCi3lvqIsVsPh-GFtJnvit0DdpP9HFOZOSmF1DHg4Jjilf-zFM2miFJHlC2nhTYvJ6ZC_5tsFaYNZbfvH1CSy3ZgDDK91zwjgVfFBKw68u9SoW5pAWBx2d96ojwAfIgz2lpKm0wt9NW6-aU0KYpXU9K5Zx5imymU8yNw3hFoZbsIS48bHP8cB1xCyw-bTKDd0W8dGL1MGGBtQgcgveFVhwwdSL5KK7Jj24h8Gi_tU0PX2OyL1yFMfgpKZoPRhkGyQ3f7xYUDFvnLa-v_fkmUbeu", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114579988897336385010\">Ai Wendy</a>"] },
            { photoReference: "AWCwydh3B-Q8-9sXqWzXaYTQzj2-vIvTICafZb6fdNZxYEwnBKDC5-a86P2mZWh86HoSRkE_m-ymtqWsmywFxndfDMm-uWS9jRcF7UfqslXDytEEy1eM5Gj21rcwIdfBqWyF0t3nj-iZCyNmbQ5ZjiEgbaIm1vqL6awdPEma8s9nFli5VQ2f-iIlb0gwKfTbxg8fzUZDG7m4ivuYa_opmzTyLqJD9FwgjWhmlQ9jcDR5zD50XTV7iQY1qvTO05JDziNn3d7hQt13u5aGh8y5eaZwRHLZ9pKBzwYrKKA5SS66dPO3lfgvAbWT_ZEo98cXdChdgEuXJa9FQooJGq9_1ymI7htGz3Uh7QhRAKnWr6QDvSmHuSZ_162H2t8B2RDfnTynYg-bB0E7gH320hpy8H9BGlRTq36QD6ZEb2XBgs4hqHygDQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104422918135725792790\">RAiNBOW SOUL OKiNAWA｜港川ステイツサイドタウン店 シーサーキャンドル®︎ショップ</a>"] }
        ],
        summary: "아이들과 함께 즐거운 추억을 만들 수 있는 친절한 캔들 만들기 체험 공간입니다.",
        updatedAt: "2026-08-12",
        highlights: ["친절하고 상세한 설명", "세상에 하나뿐인 나만의 캔들 제작", "아이들과 함께하기 좋은 체험"],
        tips: ["손재주가 없어도 예쁜 결과물을 만들 수 있습니다", "가족과 함께 방문하여 특별한 추억을 만드세요"],
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒901-2134 Okinawa, Urasoe, Minatogawa, 2-chōme−13−１ ステイツサイドタウン 47", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://rainbowsoul.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3177759309625437357", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=RAiNBOW+SOUL+OKiNAWA+%E6%B8%AF%E5%B7%9D%E3%82%B9%E3%83%86%E3%82%A4%E3%83%84%E3%82%B5%E3%82%A4%E3%83%89%E3%82%BF%E3%82%A6%E3%83%B3%E5%BA%97+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "마이마이시샤": {
        photos: [],
        placeId: "ChIJDUmuUHH85DQRL69hR38678k",
        placePhotos: [
            { photoReference: "AWCwydgcVqgDOYb9VqgSoeESFaQ9Vfi8KvJuT7q7cIDoAqkSAFW-P6F6GttJ6BD7gZ3RSfML2bATdW0Lg6vulX6g-QKkqkoeD5PMDH24ZXpZk02HJiZs7lMVwec26slPcuYiK7DDeIW-0OAjkUCw0-hYXE12N4jhWxVxL4FIcAuw_odTpFUYGtZvV52MAyUyr9Hk3TJxcOO0ByArebQ9Ro5JhqDcA2ccPQSCmx6xdgdE4YzWcwyZVd9Nt5tivPhINNAoutMeRkAAdVYYlMFkz3gDQ9SHUYB84u0nLTkl-CZo7pU9ytJZogX9OLFe9Rm8vzLxi7sRfs-9LhZY3Ukszl6hd9OZ3Z81Nl3w_3_W0swoeP5XljmZjv4_eLPN58vNGtUINaO2XDJWPuZjOIp857CI5Y7x76DR1X_fjBbV9jTU2yvsbg", width: 1478, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118130881154750290600\">まいまいシーサー</a>"] },
            { photoReference: "AWCwydhDOj-GCU6E7eQ8HDTykTGktK9_AzHq30HoZlCtUmsT2lRm6enBrUIBUhF69a_fwAs7oVLNcP8FAojCNWdOq0o4Tf8cGE2whCt8_cItQs6PW-dyHVANrZGzg19H9nJLB5K30uul8mWke7D_Yc0CJ5ai5bh9wBvkXDXaLFAzrYclBjxKd3wtr7GeTVoHcqjs-1sQ2x4nRCZdTAN9g2pPHLmt9rjxTISPdO0U8AnCkwaXTeWHOtLwlPwLcsbyP0UnpWq_9G8ZMxl6oBxo6MyQvEmhP_MMVmWX-qqZXJNcc3-1MmdxDNFe9KokvU_q0i1r_X2OFYF-rEo66aOR8Z8SKESIUhKI_N3BHcjL-LsxLCT1CE0gzZF80cwXRaG9nRMZ6EOMSgfB9lrjvuaYDiLpseW74dWmUBkUEnVXwzjR5O-GuMw", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118130881154750290600\">まいまいシーサー</a>"] },
            { photoReference: "AWCwydgz4iYc2ZnhRoobIy6UYD2DC_Ieb4ROrb_kYVN0ZGrbpyKX91RC5EAwRBFL6SthsmvxHaIIYn9SXV8A5vRp7Lacp-sRXw6XMlL2M6d7mjwgtsitmA4SGHaalV0XEpoPhaKvKD8j5fbwR-L7JfBa7lQ_JdoBIFDBwLbEPC_u4Fy_P2dV8cUwnAIZgKagKN-wDe7klJ2-SMWQoBCVBHDQpoHNLCRkRXPed8u3Rmu6_j2OiD5D3ZZ8zJe4mwyJPa6ZAuFljg4oZ-B_djjbrRsmjIeuTnHfh4U91riJNwUPaWuLi5trKBcAbcZH6-e7y2KeGEyYMA57B4Wg2dMpBfE8QnUvgOJjNPo5YAk4pU-9mc753NrJIcWdqyXX8ZKZOw9YnD5kU7sc5JMxkbU8OEDiRRySVXRZoXHeseIT-aQ1SzU3Tw", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118130881154750290600\">まいまいシーサー</a>"] },
            { photoReference: "AWCwydh4ivQA6Iy6e8-eeWIZ9S6aQp0sa2rFBSty5hjzW_yLc6_8AtnV97cCOLEUhKutANp4uBx7Ukz5Lr2Es-Yy8bm_r9QWP_NUlvq-zI7Zb3ZxKVKJ7QX1xGUCuwW_60pPl7nBJ69syvukLh83tqR60Mwgz0ISUSQxtlVnFx_bVDMkn5sUs5ONER9OIar0wGW34b6ptkwWdMDNihFkE2OrAHnbUv361ffdlE5SPXlt78mg2W9Q9TkFrvikXRB9Np-jpsuUzYaGwKNtHPUyFaXXzUghEzOAqVkCViQ84C1DOinAGvRs4Ocl4j4HW2uctB99v5i42WbTV3qdfPS3EbeD1Cvp9BDnVy4fyH6ymqQ-x0ZItScrXUNWZmsTzlLM-t4MweVVFLXrtsRqDDqGUtrHqUPZxerL-jEFSxc1zPRmqPZdjf_vn-L9l-YNUcZCmNJg", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109479107068769213047\">ぽんすけ</a>"] },
            { photoReference: "AWCwydiJJr0D62hS1QBA_0m37q4jsvlU7K3ZuHHAEs4QFrCRpN2QP5-nFrwIbl8oeCBthaf1pHpCHeYA-7AJwUxZ-Ht9FnV7vjZC5vkUUZgX-0SPO8OVyImczoVBa_n0kgBl45KcCedYrz_MG6rNcu2dxMtkiuq-_eF6iRBtERb762Q1d6YXrezG8q1PmjH8UNbf_TS6q2_5EznwgysMtOw8yDbANQjYP7QXeimXvthH2o_qRpQoNlJdwI9npLqJgReTq7uC7wqwsCzVRX4zC-8zKc9bYldThi4AD0jWR9OnqW7bdI2jh7o2JX4jHmOYg6iKBmo0AQj8rSJC05cDkgGjjIvSUKTDgl9ObjgVU82RnXASYwOZlDnmU_hvntYred4ttik2PZTuNvp09khFbrhb8PMG34HseEFZDHl6H-psEvUCswP4", width: 1080, height: 1145, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118130881154750290600\">まいまいシーサー</a>"] }
        ],
        summary: "가족 단위 여행객에게 완벽한 시서 채색 체험 워크숍입니다.",
        updatedAt: "2026-08-12",
        highlights: ["다양한 종류의 시서 선택 가능", "바다가 보이는 테라스에서 기념사진 촬영 서비스"],
        tips: ["예약 시간보다 일찍 도착해도 친절한 응대를 받을 수 있습니다", "작업 중인 모습도 사진으로 남겨주는 서비스를 활용해 보세요"],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒905-0205 Okinawa, Kunigami District, Motobu, Yamagawa, ９６９ 誠もち店 2階", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.mymy-si-sa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14550913239390203695", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%9D%B4%EB%A7%88%EC%9D%B4%EC%8B%9C%EC%83%A4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "워크숍 츄라 씨 하우스": {
        photos: [],
        placeId: "ChIJKe9tgXBp5TQRoAmecLWBjBs",
        placePhotos: [
            { photoReference: "AWCwydiankYkQvlb2zh75UQQgLhmF8QGMd89H7GUsTiCKkJpBavYULwS2JfvWhlTA_SmsJnjY-R0AicxqftPU3v3oFIXJjCRgMp-fh-lEfq5KJsLVXlCj7nCYurdfc-RLEnlVkSWD1DULFT14MrMLh5HW_Eol3_A3PnnZLlAjTHMgR1ry_JI-LX7_bwTECLap0joy2Fc0gKmVk2JKCfkWFQagyh-2-fdRTpyaWhhJrBgrrFVwTfK3D8EhVh5eJGGb3EKVUYyPoyCC1QV3q8oyq0uxfu3aHUUq_YjCn8z-HsWn0R21UuJqvRwIQ_9gis1JwuDSLfDDQNcshjvF2YVMeYd8Qt1s5NnePwvigddFs5MYr1lmmEbsmODjcBSoJYvM2m1tMeAxEtWB8CZXLBkaPslE_bO2AWuq2_OjpbRHA3GRLxC3Rc", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106906236721481713811\">工房ちゅらうみ家</a>"] },
            { photoReference: "AWCwydhrkm_n9HEYqT3Y2trwwvFVtukMm0THLwVgyao3BpoTv_esaOFTMFjj1a4RDbac8CInIIBeMBCEcoktWbrNvhBMfD3HcLn7K_2ouqUYUqR8I_FQhax1gz7pgCjUt3C3Qbfk5ywgZzLhJqvQILEWiUmvZlt01nDAp1m9opzo2g50w-vfFfgbtBZP6Z0U_bBtlNhtOS7NSXEG4orEku07oa6__CENrmilgcCY1CE_1ob63G1UyWYYgHDeDuk3eniTiQaqXpmJuIbm2Be3GP33dIS0hPCGfK1xyTA1dBR-IZcI1RKboLOSIVV11ZCcFsHqXzD9TOWPhi_FM6V0zxFCeHGG7k-rdG0Zq6hlplQm1AEtq-d_xd-X6ELSsdfw_5X50Y7KZiFov8Wq0neuZikoDHG_FfYQskmOMK44NvI5atf9Qg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108556557709673978989\">K K</a>"] },
            { photoReference: "AWCwydgkpsLTW6hMlUwVJ2EWMZcLMc5WZBBPQRiG3FapNROAgQ6VVac0HKMb67vGf-YIVhYazM1_sWzXSt4dcivC_pxCur7rkxSJ7LUxXvymBGHhiKq9yRpZqz9tuDhzhuleZxwTTGPhAouu_s0LopKkwWWVc6IEIvjRPMcdV38BB0s80UAdxbdP9DKyWL_a869r1Yc9syb-Wk8lmjkGmTHLB8TIpYW5MdaFDkFPO0suO41K19RkdIQXFs-97hmvMvMErEDEl_3I7p51efpifrcpop7nRBxpzYRT-nrDjlXGJR1Yt-9iZPAxyzSE8vgHbddPqLPOKT7KL1Ru01MkFeXm-x5VXO4i19SMfHos4Yh1CeH1k_A0HX_taXlUtIBw1WV4ClINM3YqQ5mhpjPhb1s1vNLbjm_db6PrfODKBEyRzM8xLg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108957776666341953074\">りょうたろう侍</a>"] },
            { photoReference: "AWCwydi2YiSmZwl1tgq3_Po_pw12yQdCdphq4H8D60-p0iiOlhSDRpO8jKLlfM8qpDXrT8Vxgg29CR__wqLn_VKNzFMlp1-NRfxRE8nIsJLc-Cchd1uuPhsxyvreBqiFnHqecL9c0PqwHZf_FHzb5u97Bl98UVD6ITW-NJSowP_r1rX47Go4e0aA3fDziAtyM8qorPlc6GVWn6CzLAz3fkhOlcr2nKoANsSNQ3XB-wnX5FYjk7O6ODkvd4hyf3wAXSZY9krsC3nXF6qedAWjRHzrPrNAnl-VxvOfZB7oPEA6NtSiwn5NLQPOGG1BFHKNr9Fmyvxffvml1VJpURCYY99oBx61Ivq31qQnxiH0Qqv-ZiYF52OtSTkvpbZk2GfA4ZWb_RHLZdv_sCxtFX5VyPEDlteqbWzYCXv5baO_gOn4GZbZ8w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113547358422530602380\">木村圭吾</a>"] },
            { photoReference: "AWCwydh340dCYRfMlfcK9CQjFB0jPbc23veob2GcEozUW0hvQTxSniUlMNyn_hsw59YLbhmbCaN0g0g-52ZjAXyiPg_ZNvXKtTMmji0kth72ZI9Ppgph30Yvrs13775VJ3pHYr6HNBK22gDStSIWyM0mN54HeCeM_YUaykzJdF0RlkSEz95SoGD3gjNVj3LxPj2oNwYPzrR5-RHyeimdiL_T11wQ2n-4zTUZxaUs4qs6kqb2NkOaczZNqlawdQLraDjaZ6T1I64FgT1IiVolLsvjWzor8TAqA2v3Q3XCgR13LNj8u7FxoOQGQ4JN22pLWXqs7wQc51y3j_ad_BzomcjT2ZK7jS0LW2CpfnDzWHs_FCONgazAkXhl7zy9cFpz_aRmn3v9JVA-EEzD_XcNHtOy9hRvbhAdeV31dSRGwiO-fnppdF0h", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106906236721481713811\">工房ちゅらうみ家</a>"] }
        ],
        summary: "친절한 서비스와 함께 소중한 추억을 쌓을 수 있는 시서 만들기 체험 공간입니다.",
        updatedAt: "2026-08-12",
        highlights: ["가족 단위 체험에 최적화", "귀여운 시서 제작 가능"],
        tips: ["아이들과 함께 방문하여 특별한 기념품을 만들어보세요"],
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒900-0013 Okinawa, Naha, Makishi, 3-chōme−2−４５ 川田ビル 1F", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://churaumiya.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1985104152042015136", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Workshop+Chura+Sea+House+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "시사 도예 체험 공방 류큐가마": {
        photos: [],
        placeId: "ChIJsywY9Vr_5DQRTubEYGQ_jjw",
        placePhotos: [
            { photoReference: "AWCwydhr7qB-FrjMt9LOEpwALdHsnvetQFcCXM_YExEYBGyameFFNexgi_bBmEcQR5OErRGXaiybPUWNfaM38-KP3FRbtmNltuGuqkPk3rhDqjit34Rqk6PeHV6jSp9fbW0z_fKLVYebbCjAuVgZP8xNV481kYxO0kZOcyZz5-CR91T-tcq1LSWX1B0ZFS3BTtyiEX30MxxLhgNzVF3wQDRVdrBksO3L4Qkn1u5ZjvO1k0rX1kwCakBZG3TRAgTYQN1nMR12BzL_zALE7e54pYTA3G5BMfwkG84yQOXCSaKIUyTrFnow-A1zitdgF1HVWOu0mzTr8n3QhN8sDtyEcS782lD6VMI7qJ2ECnz0b66C3gP4ChKHvz1VRXYalGNWPSwcVrOmx1GHEo_DoxxafzL_DXv7iwq-J3XGJrYw2cuV48dvhw", width: 1452, height: 1089, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101115055832552111621\">シーサー体験 琉球窯</a>"] },
            { photoReference: "AWCwydhnaW7X-qHWVQqemOd6uaSv9qecEMyuptdLo_BoI1itfFIYk60ZqqIDr6reLLJez0EYUl-Nq5n5qWze0pnMy7uL8Oa-hzmwd3bfdlUqiNI74MQbb_2C1cZN6oaLl7cd_tbxNJZpcpa2ux1ftXKkMo23WTEWgIlZr5AXmurDCtmDIwfR3pacl4ZkOVzivQvfc82EF1Qthu7vyRyCp_eM_Il7JwPSA4JXp579PCj1D9ubpoORPm0p08hDgH83SanrtnmsWqWcWtMrTVqUTWSZHnPHVrvb-Jnm3f2mhc6gdqDovGaXn3_n9VZqH9IQ9Fld7RzNDWExVKAU1IvGeJepIC01eJjLFjM858RGjCtEIOfTShcpwuBV-y_zFmg_NRogd8oaAS3zPMa1I5pyR8iYEvZl4WbujkSWl1ingxqXeAr4BdL1", width: 1477, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101115055832552111621\">シーサー体験 琉球窯</a>"] },
            { photoReference: "AWCwydj6-aydyBteQMEnYB7LUBUAiV6D_2Ky-vy8gNY5sQ2bRl2H5qa90q0CJ5k4KVP_k4uRfQwClKvZnzxMhh_JlC9UKyZUeYUFCeGrBWTLdPBLMrsogwAAyYk84EIWD_BKZtMClIbOz3tYa572Hdvl3P8MeUrlq8M-5W7ky4SfA-R2Hg1ZJmUiJApAxuuyT2kmoakV8benGYrFjDDifGIdphCkJ-ZdfMUGRGDZVDDucC8bXaqMYaDWXODyDZ5McMcbfcIkRmC5ZEXWs50cNLzPo2Ewo07tjxF9IYeV_7eNH2W670oNvS3L4jsq7YJVcBhsACnu4lDluQ_zFAdoG9eW1hUxx8oz7VVga2BNIMLrcoSPKKW4Nuyz9ZrzXsPfEFepND8WfaAPZIzu3Od4LkQZ40Jn99zb-LOrDrTo-koecfuP-lmhRHz9IcecWSBYtQzv", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107931187413626122412\">池岡伸幸</a>"] },
            { photoReference: "AWCwydgaP5yP4aw42Dlm44zhozoLPD-yxWFPrbvVC9CEXm3CmhKyyeLrubrFffqsPSSWX7TuCbcNzDlCFhKUngx4iDC1JbFhhI77JjYhOy9LLJ7gZXIzhAOY6im6EVXnxBaBynk-yRWcfum141-xx92NY5Uo18y7FL-MMOyIujDnfEMALOo85NMFmk4brNWA7W1EkIqrz49Z88tY84lXXJ9pWPxMUSt26K-l6YJpPlV55U1zXRLDqtxHc6uBnGwOzUm_TW-TQMRW_gUmTr3SWAO3Oe1eJcBr8WlvytPaegKYBpmGv6-phDqCiR80mCQr9OMvEIIDNGHHCjrMJ1GxpoT-RIZt8t9EuCwvlYCA9qeEOmncnc51RDtnFnjT3tXqyqsTyOv0joidi8qIesHwC_qGUmdKoe5KfoNgINMft_Awjrb7BJX9lfmL6cFxDHrbbvI-", width: 4608, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110953751692870451251\">T. Suzuki</a>"] },
            { photoReference: "AWCwydhe-ILzRmzql9LOBKwEEKAsZNHxly13t2WqUaTLVcOza2gx3Oz3mySsoCRxyCTDLbU43kjxwJytkSIM_cs3WzOf00NXCoBURbJYUCjrZ9Xhm8tQvAn0HLqfERnWOTExJ8AhQkMRHWSevw2GWxaKspxqeByuyiCFLaRxCyUVAHUkwD5RdVhGB3IaGIAgC3F5fFFJiDGqDE6Hy3GDVITC7zxraaBx7ib9DEGxsL42xpXF28w6jhcadwp1ex81l8AfX7dRZMJWg0Liiz3oI_1fYTkgRiI2c1JV9Lw-cFJpBFtaTKC_dLrRlMYA5aVW1iL_9xmqSl5j2ufc9JYN9GRK29QNTscLQ_L3A4zti0RK38cT496FnmxZmVYesulUEnEbHgRjQld8G6ZpxOxQ2Vq9n4EUj9JXEQ7dTNyDbtQrss6lRBtW", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116180933441651034058\">Deep Heart</a>"] }
        ],
        summary: "시사 그림 그리기 체험을 통해 특별한 추억을 만드세요.",
        updatedAt: "2026-08-12",
        highlights: ["아이들도 몰입할 수 있는 재미있는 체험", "체험 후 해변 산책을 위한 편의 시설 제공"],
        tips: ["원활한 체험을 위해 사전 예약을 권장합니다"],
        hours: "월요일: 오전 10:00 ~ 오후 5:00; 화요일: 오전 10:00 ~ 오후 5:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "일본 〒905-0428 Okinawa, Kunigami District, Nakijin, Imadomari, ６１２−２ 1F", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://happy-okinawa.jp/ryukyu/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4363494789321385550", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Shisa+Pottery+Experience+workshop+Ryukyu+kiln+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "시사 아트 라보": {
        photos: [],
        placeId: "ChIJ8cd8JdQONCURpVnFWocv7Ws",
        placePhotos: [
            { photoReference: "AWCwydgo9Tc3fWoAOlQCdFrgKRKFQE6VLA733aiHIc7nDwre9cDwAkQQsgBKOl-aThXjc7ITm2cMhmukluogryI1Ozz65f5Qj9tV_Gx8FWTCV6BlIabAzAKp_KShe6poO1Lb5Ciljb2FZsNKXUt2RfrmiMMGYkj5kZOG9zItPC53SAcaYJmrrRNtdwp6MPsnjcFSiW9A1sEz22bUu0GGpKGbULNZTWKmf5bXBKf6xLvHU5lLGRQxpf4BRS9THJNWDH6fO41F7PVmtRxHSqZD41DCNRo4NdCtSDy9C3UDJTCKTlr1qOgK2SNsU0RcqooIolXSqr_u3azd3cvMOvxDoV_cQAH9JwGzIhmtDkVQhZ7cMqjoPIT8YO4QZ5t0qkY1KE6zykaYKksct8L-dID3pXoDGTpJzcKRBI641dO2zLNnm73jUyYCZ9IrsUZ43wAlGIZe", width: 1536, height: 1024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102926773599851411804\">Shisa Art Labo</a>"] },
            { photoReference: "AWCwydgzvX6PLMffIFS-IlAMuliTyNkbKl_jF9JrW0BSaazeZ1PpUAiV2yZWBoogncfgji9897jlhQcUvs0guiLIv5PCPOzAFiAmdw7OnzEHBlDNtTrC0R6QqhtFfcor2jpoqq4rWL8KpUWpAr1KI-mCEioFwUySa1-zzSRJROxPQyY5WxkBb0aCG_h_56tU0ioW67UCg-WoX8Ze4hbP5FdvAwitn4tAFhxtvKX0wLt_F4wOmNmSYSbdenb_bGv4q17bZBCrUSIwEF6cNb-FixMw1j12YN9CdkjZWvopgJxBpur8ril0WignFomlHH0XrkGNxlrgZwHH7m54xb35u2j4s-HQxb8RTaxOhWDjtm07V8D06sVM9e7kZxcU-n8pQEPbFxHzLFop1vUlgXz0ZB7WCsooc-UGgyLAqpJmVGbf5dMN1V_Rb4byVsxxvswPAxSl", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102926773599851411804\">Shisa Art Labo</a>"] },
            { photoReference: "AWCwydhgVr0yCFEzepP6-W8kzbHR0Bb-iQdePwrcoXFalEsC--dDw3IT4sLut43EyxWd1UxonoVU48tKGytgvgu6x4Sa6WBGvltPxt_PbjOTd1XR6-oVnx1TaSBhOMXOMx8VKIldBZI3uDw8coNkX36HXJbZaSjCmZn9BPguEq8pTDQHVREyHqUzn5gCYwVvQ06DhQmEE8WNgd9JHNYdB4e3ZrBBGWQ8pX4L1N2aoqknQqgtw_ht8JeuCztcKJJin26bH2RzDxfHXaoiIiWbabFv4F64ildsWAqXnL2IQdkPkCN-N401L3tw6Q7kavfpJCzlzjuseq2lH6k4OjV6Emkq5XVF1P15zI7I-MEX9aNKaRuyzDa8LlIO950ZGpyoutLtazjKOR76-5ROjy86p2f4xgUg_832TXf4gl5Ni4WC84WFhMAUqU_EStrgLZhW-GEw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102926773599851411804\">Shisa Art Labo</a>"] },
            { photoReference: "AWCwydhH3hyTijgqtF2mtM_3x5maDRudZI1uG9ArZq275K3blh4v-I0IzM4U7rzOgLQedugsSePOqmc8-C5wrLfo_l3VzvpMyv2Y8hEbIWIgxCT_xH_NkM5s7GK31hvZbfFuNcakfSRvyiA0Klx3PxBisruULHL4vZIbfNZNDwLshKDqMzGRAJjm9twE3zS9bUw67hbGqRs4srq_DLYMT-eyINyM5xDtP_-QbqnEpuYwI5a2t6TnMGRQorgUWNE-45csJ7ocTVvlCDIESYSFY4_rkMTw-BcD6sFocul4vCVSkAa0vngQCK3wBGyuhOrqqdHOQUfX-WV7RGT0WW4TNi0VBD7AsePlZyrVoU4VJZCz22_FG8JLOKLePDn3yOpQqFugiiUV8osKtzvSQtBjj9ibLuGgmar9EF9yBGyUD_CslDUTMTj-ICx8oqWo3Ggv7mQh", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102926773599851411804\">Shisa Art Labo</a>"] },
            { photoReference: "AWCwydjK_Qja8fOszIS72bSWf-V4jsj_pU57Z8jeqa5FHXaErh10d8JDWMGpngY4PcdsxvO9pbilXcUgPrJVBzRxLO0wn-86Uc3-D8urJEcvi94L_gkUrUJogLhgb7Bl9uKwPZBBLHNZzAda_GbLPj0gfK6ujhO4M02eoCzC0OJWGgrwiWOui_nZTHq5IjGSWSaAykbZRkvywiHXnPbxBMsSXIPVptvbK3X1zI3LxXpiGcf9eTmZbIqVFBBdUot-wX-iEhNVHWtOpBgD3XxwjLh6Jf3wCnXqFryGjhqczO0y-uGOVaSrOb-28PbMiiOC2qSQgv2bz72E3LgDHp2essYbxNMphM_F2rgRtf62vI_2YTzNlmOxGhGAQ5Ern8SaJxGDp03yPtNEn_swF1-v99iJxmUvhNkoP47j75mOXarltaOxG5Ns0xv_blZVAAkVgHN_", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102926773599851411804\">Shisa Art Labo</a>"] }
        ],
        summary: "조개껍데기를 활용한 시사 만들기 체험을 제공하는 워크숍입니다.",
        updatedAt: "2026-08-12",
        highlights: ["조개를 이용한 독특한 시사 만들기", "친절한 직원과 함께하는 즐거운 체험", "가족 여행 기념품 제작에 최적"],
        tips: ["아이와 함께 방문하여 특별한 추억을 만드세요", "완성된 작품은 집안의 세련된 장식품으로 활용 가능합니다"],
        hours: "월요일: 오후 1:00~5:00; 화요일: 휴무일",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "243-1 Katsurenhama, Uruma, Okinawa 904-2315 일본", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://shisaartlabo.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7776924389928688037", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Shisa+Art+Labo+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
