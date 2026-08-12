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
    }
};

export default info;
