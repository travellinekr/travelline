import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "하버시티": {
        photos: ["/images/hong-kong/info/shopping/harbour-city-hong-kong.jpg"],
        placeId: "ChIJzXN62owABDQRMhRYGJnmKsY",
        placePhotos: [
            { photoReference: "AWCwydgzEVnyqXQkcdXSsWVdL9uqzTe6TxpYVd-gcQl5pIkaF8fQBC-W9SUwNfwyLcYXrrprQioQxwWpT4JGTn5vlWDwMQRl2xz6xoMRZvyczgT644njIlLpqpubgZ2q8Tik-bVOmycU5YbZJyzniixoW1nNnVb-yLVgbJz2fRnZgev6b07KChhMTqLNMuutSaHdB-hQd66TCuBSawAbu4VJgBKc78PF99YO2KKeWBlsHZkQ_Eotvev0v8O86Vovbpk0mm4B3wmQg8VUkZGko1FXJv2_XmMJp9yEn1S0lSjz8xNPJonIN8jsINTKygpwH9jfT9dfHGSd-AYHiQL-JcfVOA4aWD3q7YkbJAd8pW3kFuLD5ASwYa055nJW_3QEsVF5ISFjjQmLC5mC7-QahQ29MlOvHBA4hzV6dtHKMVFhDN0IXw", width: 3472, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106004049092327389013\">香香公主</a>"] },
            { photoReference: "AWCwydg5uxvMNYQAKLCrnqzrOk4wr088pWHUkKKJsDlbHkdAHfJshvs88a52KJIaxoz3sVFh0fDiGqmhmgu6_HwljszB7wUXvKYCKgU5hZYi_u52W7a-2-Wj3fufB8ZWTPlj9tI8hYYZIcaAlpyXzt9nofmFfmgP5bJ7rCj_UuQLv_3GRTM4er77vMHC9Vpzj4V0SXqs0yzGDsubI4ZdENmeq0UsG872q4RR2jkk7PXTOxDTSE534DppjrcyN7eDwpiM22TeUEhSRndEou4bwB91KDs9hPtMTjxcq-0J4LirHv2Z94TxcCB-9V-VzvRPhDpPialVZXDaBkHXuDCnF3GVrXQYWVxNDgDvlm2FiAOLeXvkN_g-O3u5i3YOSvrhCSCi3mIlSVYe1EiSnnOOFqk4t9jtDorrBiyNCPJ-r5dQXyqeQgw", width: 2083, height: 3562, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110048543106991993610\">Alvin Ho</a>"] },
            { photoReference: "AWCwydi-9RaYamJ4c6WQTAsd0k28oyKcVTWpGD56gKz1uOBBG65FUgg806JF2cW7733rOXlP68M-G6Hv0tmyhb3XPU8Ml1lDesqEiedaD3zXX5SpZhvZmTBkBYoRQ9Xa8K3_bz-jluko178kYbYUZgBmMTPOIxa2EgjPDJoKNyEA6f7LTWMiflO-DdFfq1o_Z9eMyvTcML6Yo9zpu3cO1KiLi-9Pbyfb7zLWU7WPuhHxHLiVgHcsnZglfQe5wsXVHl-RfCS7n0L41ZYinAAftlm-OYxuAngGFp5y-tHH2bdMBR6RR7sKCRkJEZVWBjSZve5X7MalRGzJ3Ep2Sb38ofRpaQG5fRykD-nKgNjj-z-nmHsOIVJ0MM3QQvOcZ24EWJJv-SMmu6tGQngqwFJyAb6ztI3NijI7kx5xrYBAUeGFaqb8CJRz", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102686751002025353945\">Tingting Man</a>"] },
            { photoReference: "AWCwydhoavOb6ysVSE4bV-9G1qvjd6VPzMb2BUoZnaYatMj6kF1G-tMhfn2rpK8wmVYH65lEVhyTqJZi-LEc2Oq1QSGntcDSlBs8VAWvBJ6EiOkoeN80-jgeSW4u47zScNwEDC4k0diA0MoNobhc2-gIvpM0ZwnF_AevPK98lm-tW3JDqql8fRzxT_mwBU4_64d9lRvcW_RueFxrSoiicCUWQJd6vB63tiuYmcj5xAMx3O8nFaUfzIb3o-YWJQCRfYX6ey6yywXgMmd3i1wndXOhntKbVWIbVt24y9DU1l_pTt3x8AJScMC5lq3MDiqbR1sLCdDb8czqeelGxjcIU-A9g-ar2FQE814lOcitE-6AwwaHx-EHqolaHFW8eSXYcKwQ3DO6sQcUuDZUFP8iB3qPgvmm4f6k2y9acKktwLvR2lFGPns", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100706011648632482654\">B Mont</a>"] },
            { photoReference: "AWCwydglhieHb076vmmJatfxijo9BnsLfkBXi8Dz6Jr-MAbfjklnZcXBBrIRIYnzvLbqYf3uG9jxneGpezD5wzJ1cCy5sR9xHy30Lj7lvKmTz8OUUQXvj-eX-FOVFKFd-0KwcPTr727LqnpVWhl7UlwqibbLZVDr7cER1d_roZDMOz7LNyL0wg1qAqyxUDqB5lNWUhrKHTC81wDInkGo_SQC-6IQAHW3d_S6U7Y_lWX8UOsB5hQGh32F3jdE6d3P93jW_riU4kxXBPNNSnDFVGcb8SSuO67PJoehu4kewYBeMV3yZXVnhQvyY21SLfMd2BGogjmNK2kO5GrQwOWlCerD49OKMBiHzEnHcnHGoJEbNKqF1O9sH7xkA7Gd8G-7flEC1xmU49qLoRee8HldV28JalLHbyKu6dGsTvbG8YR0XKx71A", width: 4128, height: 2322, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117613532151849922819\">攝行者（潮Mall派）</a>"] }
        ],
        summary: "침사추이를 대표하는 홍콩 최대 규모의 쇼핑몰입니다.",
        updatedAt: "2026-07-14",
        highlights: ["명품부터 스파 브랜드까지 입점한 방대한 매장", "쇼핑 중 즐기는 아름다운 빅토리아 하버 뷰"],
        tips: ["규모가 매우 크니 꼭 편한 신발을 신고 가세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.harbourcity.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14279479113744389170", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%B2%84%EC%8B%9C%ED%8B%B0+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "K11 뮤제아": {
        photos: ["/images/hong-kong/info/shopping/k11-musea-hong-kong.jpg"],
        placeId: "ChIJJaeB3_MBBDQRMuGmb2yQxGE",
        placePhotos: [
            { photoReference: "AWCwydhDGy2NjvlUMgqyLTmZ-TEk3MW76WO9cZQJpA8GwvnNXHyMgIrDv9o11pOOQIzDNox_ENcyPsj_mws_J56HMXwQVKoYPaS4CkN31VzZxQvUZ4mZP2_u_bYaR4ze1pKiMob6nN4YWeJCxic9UfrQkgjPUi9j5gSKdIGHqWfeRT3EYoWxAnP2qhKEWDhbIwZ9bdAkwkuF6PTJbdik7zIAkQhtIITCu594Y0jrXpOB32afe9a7k_CV7YkWNJCgQbumeHgKz5xdwLfPdQoW8A7F3oHz0Rl42kXizkdKCgI2T076D1nXPMUkavUAIx3T-XkMyUsy201N4ytnAvOqHGYi1VHoruLe6xbqPvQNIKT8zK6wt9BI6SIu0LcFFnIy3UdAyr3YTbRSG9TnLFJoGTjeOCVk-vnx0O7le8FuOZ29Ubeako8", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105676140278154991120\">Anthony Leung</a>"] },
            { photoReference: "AWCwydjjnhc50ZqS813JqeKd-HVB5-_2MxRtqdj0VQAUpC7E52RHbg7b2F4oSsgd_6eRMCapGnrE8r7lunTqbh_SfcUNlPIsXyOpgepHsdqr5lsOjKc1Ki073HMBo7gau6vElWlTAr2wPvEGTyi1XvTP1JAm3FkYTPy-zd9XOB1vyXkKrrOnaZ-U0bBJhrpAmji_uVw_CLoLKI4n9Y-6rdoXn_teO9HiHeWtqCveTMTbxCE_NZqxtzgdZ31c3ByxZ21Rzh6YXCKH5XsJQCPPydnaz0N6HLUqeDyME1GborWI6NubCXRc7BAPbcoM_3Dk8FoqW1z34vD0pvC3sRz2CGL843ouxnpxFJAkYBEDspb1H3KpLb5K4K_iDz49Z4lFGl65k12MuTNPdODSKC3u0dwoiT9su-r5_5T-Hwav-ZCfeiY1YU-S", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117482485806015696167\">K11 MUSEA</a>"] },
            { photoReference: "AWCwydipCW7LbVx8voqZt0IGnGOgUQ-fOsxksFUeWvuR1K8fCMec2jh8puA-Cs3-GTNYIFQjmXzmhvDrmyRvVi0BI0zMsKoK9hCD1JXYRH5FpBP06xtlwOqNfnbha-1Aw2247jUnwsqlcNseCp6Vn8gNdsbYNVnGUp93-w0YfdLDoFMcm60A3aqrvnZcPi2ya-WI2KgbCCDfAvDEhBSvZyMfqfTk3r4Br4GdyZIAiAX3fYEgy33ampDzeFCkN8r0N7rYdS5ONrjxKUmUODM1HM7ZG4_8XlpfLep0lmOIIwtxayXyGx_zokMb7mQWjyRD9n0qIviK8tShtfMuuKci3-UF8qtCrYybYlEFIb_qqeZIcwLSAnNbmiEPJhoGXB3Sc47E990EkxezRJ9nyu4Ctx3ZiA1aOVuTrt9BnNrHPQx8zrpiO-UhCiAKAEEZLjTilQ", width: 4080, height: 1884, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105836579422577440870\">OcP_Fact finder_Info Sharer</a>"] },
            { photoReference: "AWCwydjaS1sXAgYSkMkAzFz2g75s5wRJYHlzrbZzyCZZDoLRit_sA787DzzfnVz5mr_geSY1WcLGj2T8XvPCdXH63MKdh7h6Y9pxNYMSC6ip2BycLullK6Hp2y_KWf9DH67ldfAksRPTqGvUzFYhgk6CIyiD_DQNk_TE5I6pEwBO0SvJSUDYjJhaRE4XTrTdhVPSBQTeb8lBBTecKA1vb836wtuDZ5rY_BX9osqsZ-OJplAXVSKSbG05cZm4yE97LDBkp4evQ8JKsAdQUpPAZNwGVOzRk8RwCTtB6x0XDuL4w68v5OprbgM6BlwlcgPDmetwGFXi5-7icHIxlborNOsRtTG0BIQfRQMMp9JcrCauKdWDIWslw0Cs8Zfvcd3FBiPmAezuySsNMkjdg9R_vDd8XM1HziNzKjYkcQqGQrGR9RFGD6HE", width: 2736, height: 3648, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106506310849800803333\">Lan Chun Sin</a>"] },
            { photoReference: "AWCwydju_d54I2av7KnlBBit_9p8qNErF7L1jJo1vWGlto3MCYHjDAZps_bRs2IZQ_4Kkbvtx55w1mSbu5dg5N4c6lgFVxLa7kvwKkWWGWZAaITAJQqR8YwzByOT6T0eBB6DBBY5plDrnbR_MhByOc8jtaifnYsD5pHlpilTAgDwDhh8-SXTlcTv1kOd3WepHwlnq0TeolxATBhrZEg04gugIa_xSUN4w-gpC_NQi4gbtRVF7gBN9VHi_wFLhfYyEnm-vDUlVxWhzCk2Bn6W0mrhoFsXEonjxmnbwGbM2jNVVWSJkqSuRRV1y4IdSCeOyk1_zjYShM_yxq1Bk7Am4T7lSiaeU7vLXwSnpR9Dq343UEvbqf8W5FqK3KrfZ_idovFrP4fZbMiUGEUU4-cM8I7c_TsP9Nzo_Q3WXy7EDsuu1qs", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104409559193553809582\">Cheng Amme</a>"] }
        ],
        summary: "예술과 쇼핑이 결안된 프리미엄 아트 몰입니다.",
        updatedAt: "2026-07-14",
        highlights: ["감각적인 인테리어와 다양한 전시 공간", "트렌디한 편집숍과 힙한 맛집"],
        tips: ["쇼핑뿐만 아니라 사진 찍기 좋은 스팟이 많아 데이트 코스로 추천해요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.k11musea.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7044914512518373682", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=K11+%EB%AE%A4%EC%A0%9C%EC%95%84+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "타임스 스퀘어 홍콩": {
        photos: ["/images/hong-kong/info/shopping/times-square-hong-kong.jpg"],
        placeId: "ChIJ_bAR11AABDQRGxsNeGwaZYM",
        placePhotos: [
            { photoReference: "AWCwydg388u9w8msJ5aHXCo0r-jy8cRKBj4X9anYWarl7cUOZ1SF2A2RFjxtUuM4S8bRGv0l8Xjhd9RKAzlPzy0paNDqTwOAMtp5V9MY3ayoZBeORwV4FQIjWOz2NM_JWafiN-HUOv8VwhhBmx56qASz3yb237LidYmzMMfFqSFh_yqjo7jumLVwMLzh6CyDPX98KdV4KcLRTeOB54Cs4hqBfeYwBhIr-xzSuoMIuc6J_6zYCf93hdB-ZTEk_Q9EAZzOY5d1mh_-DykJMQPbCKlc1M1uRHKKgkFGxdLFrmGw9dvEpKz-icb4NNwcEPVeLmEudwOurFZDBNlUGgF7beOuRvtZt4blvJMXKn06UdmarZZvFyHH7C6T-IIKmXNKAD38Do0c9Sv73zBWgZ7ZPaEC4_VIx33ZLVwtJgLqe5nsXFho63X2", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111700782896342161487\">Mario de Groot</a>"] },
            { photoReference: "AWCwydgRWT_bA1_xntui_My4Is3J2zld2JV8X_LPvELUO6xNmOvBN6uTiTZvc8OUg6xKXJBU3wEov53AeOOUZJ4HHTcZFT1Ii-e9gL6zHzHRgLyAWqFezZBJqK143uN9TXpPhrnPMNbo_iVzwal5Irguhw4KaGnmWoIM-lEqsnlbDVS-smDo86xMFnRwG27fjpvDroqhemvoISSUHEliMnTiTRyDyI4vCmTKkzHvdr21Kb3MimMG0YO1910el6kOBurR9yPVWgTX7hlDY6XMeV6lsmmG2xuV9FicIVXYrCvALpDTUs-0IVAiEEl0a5qfsGan-nQZu006TEDOTbpsFtk-vRY72yY9WZ6sNXOVW0jKT7H_ks0Bgp39_mGfMz4Hih2IEA6Wrgnk6-8IjZ4Rn18IPE9Pu8cm5T1Uuq2zs25uZN90gphfz2iiWtrsn7LaAA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100003066539677107270\">Somboon R</a>"] },
            { photoReference: "AWCwydhkItL4AScbyzsfLairwiwek7Q-i3KYQ591NrT5Lly7dEmF0Vnheur0QIZysl7dtBFjiQWZHQmSpCNE-wY5Bhi1w1VHERfFbNL1bOZ7_Qo05pQQ-OsKKwTyFaj7Q_Q2xUwdWkDwwohbLSoTTggYAHCdtkI9zWFn9bWr3vDVWFIuQHZiitfTsOK0G2sGIZor8mAmbVgTKANGn8i8NfVQtC16epZkS6ze4jJO4xGt834pcQpe_GK9WSmu611RIFnT9liItLCnxJcuf2mef_2onELfdW_j4GcooxMdSXByjuR-s2kwBXdy0G1vLxXASXa9FUay_JPUC1iIz5QOtJbVlz0qLUXUepEiLkL0ypZmVNOyVPm-Bup0cw87Sku-EVsgzPd_Ie3gG0OAPdSe5DM2ZkZ0JfyWn6uf-chFGnKeA09cfw", width: 968, height: 646, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112775714841601614857\">alex lam</a>"] },
            { photoReference: "AWCwydiLWgHN33aWBkYBc11bTpqxI8m5XSw_FDO72CfawuD2g8oQb1ZPhQdzEkhXdsGRJXt5xhR5L833myyGx0jG3Repv09P_9jCn1oIz2lOwtu_qo8hlaD3smS8GPF5h45SJ33hLG-LCJmHWPFyuMzUprynJAm11Q__DSrD1WijHV2T3DbajLUdZLDLXDWImjzomMMRDV4h_0BCp37rzk0utZ2-I1Df7jAD7axLEP1l7lD4Zxscx3fDuxePO66YbwLZUsfjOgCHIGBhOlh8lgFi39E_skKKYgVFJTgs0WRXSeKDMmzqp3LH3ihi75TPFbCzje-rN0Z03FKNa4IN9_t2vNt7_FF8uCEG3Hl9sygO46N_Pb0awkPMix18yXXf3umC9N_9SFU2-DtF22JfnQwRU-3noF9E-u_QFy7POlABo_oP6W_H", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115849091720492670981\">Anita Ng</a>"] },
            { photoReference: "AWCwydg6-_fPvOILps8_R7HzH_ihiE-XnrLbdNpCIjbgbDPof0W4PfbcFewfcyXRzZjIZoSUXVqFSyZ1CPKo2h4ZfyBOM2okoNc6oxjNlxEHCraZE41_2mNlt9nBgZMNdpwWpKqQ2C0e1El15x7oz5Zt6uw8EIS965L1gsnQHM_4fFIywH5Pdpr2_LqwGw9dH7GKPnR-z5pvyZ8dmGgpmRctfrlG59Zstb5FpqGBhTz6r9D_a87VlxeIPZ5nrdC8XEGdj5cRhCE841mVqbrc-AXYacb-vDDAIQC9J2YJpMZI7GMNwunV3VsEsspZD7iZ3WXg65b7OwKDH8CxC_s3rai8CHvk5qUpe91BiPhJ1yXgqpi4ALLMzf5gYDqvc4FxegQikKbKdhhfgQPeWyy4QLB74jeFGy5Uyum-VJQa2k2VriGNPQ", width: 1600, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117613532151849922819\">攝行者（潮Mall派）</a>"] }
        ],
        summary: "코즈웨이 베이의 중심에 위치한 활기찬 쇼핑 명소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["다양한 패션 브랜드와 라이프스타일 매장", "쇼핑 후 즐길 수 있는 맛집 밀집 지역"],
        tips: ["주변에 카페와 식당이 많아 쇼핑 후 식사하기 딱 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.timessquare.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9468002844789250843", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%9E%84%EC%8A%A4+%EC%8A%A4%ED%80%98%EC%96%B4+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "IFC 몰": {
        photos: ["/images/hong-kong/info/shopping/ifc-mall-hong-kong.jpg"],
        placeId: "ChIJEULc_GIABDQRfY_ZL9npKAM",
        placePhotos: [
            { photoReference: "AWCwydg8xFd2oT4fvQyuao6V7r7tdqZpzy8DFcz8jVTvcQuJVKmtYYGDRAtmopMSgzObbncpfrwaXcHPgXeKdudU-AnejCbK0LHQ2UTxSJ5XsGf1dbQMJCjb_VnGJYypBU7qlEMQ1H8RhIL6zfKN8kEmUQ16p4TYvRAUqlucENdkC8Xf1XPztbA3zwYphEQ_39fTfuUxYxmUARKAPtqfLH52yt_oIHINxyPOvoK8Q4vE4FkdLljdSigOW_haPc2vKdG6mXBeaaDew-FkSeT-3xvK2_7wh8jkDGwCQGccjqckPVFSccoaNvf4WXGmUjOK_mmUdEsqxQY3o_ZNw-eNcotE6fY0d9aZ80P8sMQkp_IoniagPqkyO5M2DRw4entuPVBBUOZPGcQ9hJG9W6KFDLhim2pqR5ZAJt5J0VVJMnZT-YAaFw", width: 3567, height: 1713, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114890961356281185359\">Mike K.</a>"] },
            { photoReference: "AWCwydiVU51uRLxjNSH2D2BpwD5dDZM0wj6fFbJNIGwee0oZrTuhkPUoabkDZLv6Ekpi--_TzuLRHkSgqRggCOcCMVt2ukxffBeGu_xNe_Ckj322lkT0-I7P8qsz0QF-2P_qEQ9lR2jbDR1r_xJuMgnzznUdov_VyXDXNzCEe6rRD8X7g9VinF7rKmpc40J3dpm4DcKdPIYo6O0lcOrRthiT-cIxaJZXjkcqCyDn4N6PpCxMFYG4Br1xfyedtA4JNaf7JOn__vfFEfhYWmd0wsTZVn_v_jEuU2DbfHNIpy2Iw74Zt1zR922ixrrjjE0Fx0sV9A1FJ12mi9155AaBg_JvJeuLLJzD959FqE5pYeLUgaZtJX43OOq7yzq8Q_BHE3JRsB9s800SxbNct_FOZvY0ekPiuFyt4NU8Ld0RI_GGZ5GOoF45", width: 4000, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114890961356281185359\">Mike K.</a>"] },
            { photoReference: "AWCwydiUDog3K-iExZBGeQ98_ZNFRrFlTfans9ldosPa9yeATk0D1ymJPeq0Poe_3zl6HxbF6vkE1ROIljIL3bH6-J-beSQvNTV8Ri0n9AwBAWW4Pd9QapeK_0M5jH48xIw3XQNdahfxjsK5Y-J90uwcZk5zVKC8NxUqdxp6DjzPZpyZE800IO4vX4sx9IIqBjxAXVJ2Ae1McE_26BdKe-YvXJzmN611v7yzwELnnlZiovRdAAmMCrXNSmz5ua2rK4Ydf0Y1GAVaOSt_euhbzvjNoDvW5712GJ324g5eETdOr3bnuruACkqDYG8Rd1VuyaRBSovSOg__VcMz5ppIZtH2a5MnAwFSVWADFtyDoCKcB-Ng4fpL7FpnNh8m_TMuvg1c12MQ0apbw_kn_xNw01gXIYgUCUeEejlcl5WhI9XRBFPedQKn", width: 2294, height: 1938, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101718048605991776795\">Michael JD Castro</a>"] },
            { photoReference: "AWCwydiRXPvflIDGueNu5mVwW5-YxOVAT57QxsEcxTJBBl6AbDaJGpqagveOZDIDdPMW8LEyc9bz1KNpWJiq32gqnVfbfQyO5NXQwmkmoOLGBVL92tCuWzYSBqihyR5aRccCH8FOstgHByEiqFCSJepyCifYSPnZtCM6KFpHr-T67tX8RxNaA2Z_6-D7We3WouPnconokJatGluxghgroIMvhJvd6CRDi6mMLRh9VaSNAbbISLNBdzZEpAF8tDvta8n22wMcfnIjYXkW5YLnc4O0hO86TErkPR0EqU4h7SCbujeu9sxINnbjtYKqil2yrjGmbIcS6fnDevyl3n5RXB4rhP7j1faJNO473HonkVX7VfO9T6cpwq17QLtCXGDqc5lEXpxkjtrd8Y9czltTrM6xzsI8qHRj5DErB26PdibpwopVuA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117478042822054319358\">nnnon k</a>"] },
            { photoReference: "AWCwydhnYBL4UEc3KUP0iMXVq2ylaiKUZ6EArLhhpLTRPZYccrWO7hbXiT8_TdxE_UMbVMehAo_YX5uRltJowxcxkiT_ywQBPspauHbHuNVJQ1WymRq6x6pxBob2cTXwsAN1Ws2_HqTl7Duy_u2JeTP9GuFh_plM8ReoHchCsLbSjMI9K5v3Jty99WLJwn2nFWM8QgRcfgAl0sUSZjhlyxwuWt8wU7VXCrXL-VEE_ZPw4k1tmANasqd1HF70gO6QdVkFzlzQEEfd4ja6LS9CXnQpdCf0EQiqlwo3-4attHj49tJlw4hIZqo2anu64nDWz2XVKsrsTmP-cPPnUlDUXJsEhp6g1wpxs4UxZbHHteIk17vZ8vZzrQJrNNueZi8GUHs5oOwMmBowLX_qPN8rYuW3PLtvZPVAbd-cfhXOwcPtMQ4KPA", width: 2000, height: 1500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114335540729917716662\">陳大寶</a>"] }
        ],
        summary: "센트럴의 중심, 명품 쇼핑과 하버뷰를 동시에 즐기는 곳",
        updatedAt: "2026-07-14",
        highlights: ["프리미엄 브랜드 입점", "빅토리아 하버 전망"],
        tips: ["AEL 역과 바로 연결되어 이동이 정말 편해요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ifc.com.hk/en/mall/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=227688900202172285", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=IFC+%EB%AA%B0+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "퍼시픽 플레이스": {
        photos: ["/images/hong-kong/info/shopping/pacific-place-hong-kong.jpg"],
        placeId: "ChIJDVW9tmcABDQRzrlkBV5PIYc",
        placePhotos: [
            { photoReference: "AWCwydi518TA-GHHxspv80P0XvC6aOa_rwe9im7MEtFZxeNVubuZwbEwQX1Bzchbd9hwOV3F-rCh-UfhOYYolBAhWdMJZNujuBOMl_yqWIzlQOvv4mjX5SFS5hnmrg-ORQkFUImqe3GTABSIoRYsT3utMR1FnmWyDrlEWRSuonb9hV3l80o4foFVWRuZSqb-vOeqrwKxJ6moWE0L-L-gHplafqDiIsjBQAmTvKmPqewVJFUQsNLTZXOfvUfKX8Y7UdQLYA7KG1AA6GyZef2YsitfTQ-1miMIggCaDHIq22vlweu3wo1hWeP8EC1WsyzdmgApI3cTHjxwU7c8cwTGqxYSLs-wZfCBGxDiP4-o8yiUHmR1ynJOvmYAvLlx5wbxECC1e0UMiUzDdwVidHW3emrD44QD15SN54tjMmvXDubNiGexBQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115849091720492670981\">Anita Ng</a>"] },
            { photoReference: "AWCwydj5s6-bEJSDBmNzxTKUvFsRseX_Hs81Njm2FtZxkPD1IoTtVx6gvwxv_d_fepNCRZYoO2o8VA-P1VcQLM9lZSKcgnEsQniGquAwVGs6oElEQ87gWEgbjImuPFcmv0FrPnyIYon5LbibFnAyxxdnJ_GG034fO4UsPmZ07KwwoyUT3E2fe1V9JtU8pYk7q2xWZ3RSjMpJ-sBnxv4LdEzkvP3e_iha9AnnPL_S7L6Wn31iTq3nSVslmlDqlGiOz9EniA0YRi6pvgNUJibIJinoFPuDGz-bVfh2ztLPFJqu7expDvd9tJO1v9Jb2snLNVmwVqrih-PXH6v6kcET4i-BOaLIsX-8KNKsyKmjs_DHP6uqSJeBlCO9v8gbKQTmkwQP22woz5HQIL613alyFqT2D9Ek77lfPxVm9e5gSLEe77lLDpMb", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113212555029539546270\">Pacific Place 太古廣場</a>"] },
            { photoReference: "AWCwydhgl4kT1ONsH3NEA0gzQukEutW8RkG2G3RgUxdOB-tGXj9DxQSQ8f1rFWuJXERpv1TDe3m8fxdHIqqbd4RU37ScVKDA23B_nOQXYezw5KcR4aKX5lZq6HzDPCdmKVud5WDcOYAx1dZx9PIF2tRIbvKthT3f18T1XOWx8a4ekXrdbteriMkbfZOHyDRK0LoSoRJfGlPJ4IOgf354oWUo5nQtUnhcTVyB4smUxbrZ8098D2ysMsngru9IzNixd69F1L4lnOfanrCBkfO1LdbLLC8sU0skhzZxlOYhjcjoQtoWa5347X9cbW74yxRXqI2zWUIOY4hKujHLrvnCvao0eDijEiI4-S0t84t7Mgi6BSuVl7HOojpDILBSSSoNqQelJda24qmH10sb5jfVb64ZMin83AeB2_XxrScouWrihN0YCdWUDUebvHQ6n3eeNAHp", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113078375393903174343\">Yat Ching Lau</a>"] },
            { photoReference: "AWCwydjsaUjNXe_AbGEB4yjVXujuJ2ZwJisRYF73LT5nLAlw-hzg9I-m47kdKOk3jy49LpQoXC-oMIzlVegkpwxUI4kZNtH-pVQcjKxv4Yas2Eu5nBivN8Hr1HnpqgP6bg-ZfTrd_ea07dwu7XMDe5ZIIOiYI3rGXhD9AFoedWrMuphTuEt3Hrlz2JI02bR2yJWFfHoGlye7cDQtV9jzeUy7MPwpcaAsEd8Z7BnUoOcu9hqAmggfAXcXEd69kUcLoIbtQXNZoY8gYqOFqsBn-4Vs76WQF86-96tszuFoDzlZ87nsv89kwWZLmUlUsIAeuTmtv6etSgPL67Sdr-lEn2LYNYsUzlhmuSiY7IkOUr8gYrmVmDWpuUSWkeaP7yIdPErvt1y41OZboG3aJnOIEIFBJLkePcKqrIl6fPuJqg0VTARBG-w", width: 3983, height: 2240, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111253026968744883601\">E. N.</a>"] },
            { photoReference: "AWCwydhfDGeM8bjILXCTzFmtptCsqe_N7h69iRb7QhERADYoGmC7Yw2lCkwYF-6vrlouRxaEIqrNdjSE6E9WECiDfhu0CnH4IOBRtbutP4XXS3g8MCKXkeiXxq6AKWLnhN-XKw0I7E6vlSeKO0wBIJYmOcDeh4nudSa6PT-4SXSCFcjCCaPqIu17BEViyQghqxUGv01oxOFyy-RM1l1qLKjBe13IVGI60kPhi-_87ute7MUGAfY3ZMs_ZrnLlPIKbn8oH7vy1nuNCqF_p7tYJYmYfpjJTfikDi2nEo-uv6U5VIPqRy75mthLRkUJrbIY82ytO-CZ8Adci3pZyUIizbwmUy1A0FRd5MgyMQ3qXeug6vvCpV7O5MM_vQeyxnb1wZV-SoMRVu15bKpHbd0Lu5yGABxraFxIQ2XX3vbuzsED0aYrCfXO", width: 3681, height: 2694, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112056510227320408911\">kfLeoungGB</a>"] }
        ],
        summary: "애드미럴티에서 만나는 럭셔리한 쇼핑 타임",
        updatedAt: "2026-07-14",
        highlights: ["하이엔드 명품관", "쾌적하고 여유로운 분위기"],
        tips: ["쇼핑 후 근처 맛집 탐방을 추천해요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.pacificplace.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9737151134587730382", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8D%BC%EC%8B%9C%ED%94%BD+%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "랜드마크 홍콩": {
        photos: ["/images/hong-kong/info/shopping/landmark-hong-kong.jpg"],
        placeId: "ChIJldq_7mQABDQRsFVoU4u6QrA",
        placePhotos: [
            { photoReference: "AWCwydgM0KIceMGNiZgJCCYn36PeRpiyTLbQiH4LCME4XSwnWaVlJ2YdGoJzEzNzKIvRSxrbAoOYC1GtMdjz-btD7UoPvNLldQt8ECCsirg0bZeN0zHU2Z7LmlYEObNUCMy6_ajshcRVTO1V7MdQItqCVGCblMZFrk0sT2S6mflp1Eqq_5Ud7NtdSNIWnIE9PBah74DctY6MczogJRrkJ0sFH5qiEfF5WOjX1Ve3SzMEaYyZhfuvW2vH6BT4vWRnYQcTbVRmhGJAiHoMZTvdZC0nx0McgXvUSu21IM4SAZwAGaQvmnvR3dQXBrbaGien5zR1qwiI15fAQtfIS7B11IuA7DnE3haN3wci912H8dy5LEEL-wxAQbtRiJHxCmcjvhJSP1qVL9TAN42_SSae66JDQoK2WDhOibn5uopS1Aw759iMgQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115849091720492670981\">Anita Ng</a>"] },
            { photoReference: "AWCwydhqxvVeDxfmhBsqFGdTYOP4ua3JzIPhpTyUqbqH0yOCoOVyHl-7-bBlTrtyZmz0wuEpI3CP33yQ7TkQd_2PVjEFhWfMAMIHCIAvbomaVMjgFKPhjNPxa3_hI08ijOasKKKZ-X1uYtSrwq4eZUIW-VwE_w0EEwDYAiCZRQbh6WBFM9SkH_UW3APeXelF7Rbr8JvdAAGsyHcOLajbToWx9-sIkSfQutl5jRcVdXGUNSsLGlfwMBVdw0lBnWbI8Ba9jIAXEmUHmSTpnLcpsJcLTag-OzRva13dFQXOrM1ZBlx5eLG5lFmXq4kdETlYeNhzsycnEQkMaubcHwNFl4EQ6dQweaYrFTuHGWkyZr2xYMVTFN2FYMnyw5oKvDk_b99F0tTGBkqOJlmncmFdaUSa1-iNasFm9j4hmeLhyx8uHg84nIqe", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116995975104259252135\">LANDMARK</a>"] },
            { photoReference: "AWCwydgHBKHmRTN6Bn8u-J424-GKRe4wbnJa58J_awMEWGWuHHZO1hFrbiSCZ_Y1ESVBBuLSZ0ROgcXDAHZP9dklinDCXGtiKueMItpMOqaqr0Vm5Mu7OGuUpTIyQ43HiLfNLuFlXrG-mnO2toFQwa1B833H6oiok8uzOkHG18VFcOvKleGDRzXxg4wZN2KAPurs1kqxT6vbN-ej8Yr5E5YpYg0C3vA_uzm4pNhwAkBv7TAKz4eaGeL1XlQkcCRk9dLN6l5xBN7NwFKS1DfYGo2Di9b1lGP6hIDq3EnX1cOvzQpSsJNj5mQFHfdNf50j1pQ0gnBrCQjhK1NUEKg0kw0xC9AOL5Z2KQG6Hrb20grHnz4DV63CCqhte3YHnDlzh1xS_KffiqVn8AyC_BFETr3XKww5SMqq1voRt0No9Oout9nD_xB6WouNzdU_FSnGL2yC", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104100626953598855014\">姜太</a>"] },
            { photoReference: "AWCwydiF_-S9fGD0epM5-tbnHNmp37r8sNxnynvEYBz3lI4cezqCYf5rvVyVipmTWzR6AnYAgzPh8WcQuusPwPZDprL5Ktp4Mnw5z66ZItXU3UGkBsw-aZj1I5SwrRwb9XbVqOANUbVudfck6FiY-xiR9A3uXOk62HURfBx8MjlkNNTqtOy8jOVhgvdyVaBVTk6d-ELtXMufrJ-Ge3R9fl11JqVV3xZJnEVfwH2xIeFpbQvIViS-uejxMzRnlS_DoNSH_pPA-E6VhIb5jVX7dViW6EKBZyU-0dW69HTyNqCB3AgaNyjwLx4WH9huYPDxIz-WrYpuF4LWOYXDwZE3Akenll4UHeAeJeyqGvl9TDw9jQsdSWTGyI4iVXLPWs8U9WZj6f0lDQKNb-x2DDwCHHgEvmkPrleD2u5EPuKGd5-MXWKsaQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101199887753430300926\">Victor Leung</a>"] },
            { photoReference: "AWCwydiFqoAB519rh49p7S__ofP5fQuYwzvTBwB5dzDROjGPbOIjSsHJ5ULd2T8AO6A21pEAM8Zj0nD_0NXeQwvkeXBTmrqOQN-Cc5v5IybUZ2cN1V7y7iE6vCKLcvHiI2pk24qNAcH-sHGZh9tV7_aWPaOozgd7e_KD8Is5E1xob__r5CSL27S6YvsMERk3ahTv_TXfIl-bVNp48e6mGEx2Cain56dpDJlA-IOWVngs8HJ3wJt_pqQ4TiNLrPxvz5d8BqqaKO0eKBryeIRJYLPMOV-8alw4nrSBh6AQv-k6VpvJAEbucqkx_W0Rr_jgDbYHZYHZ2zgTsTMs4fGYawRO335HT0sRFi95aOna_WrGHe6gHs06pnFSLaNHeVV2eN5_pgiHz_YGjwmwLjWp6ZXX2BbT7KvoRa97yN7K4zjitg3eeQo", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117967790915755829844\">Supercat</a>"] }
        ],
        summary: "홍콩의 품격을 느낄 수 있는 프리미엄 쇼핑몰",
        updatedAt: "2026-07-14",
        highlights: ["최상급 브랜드 집결", "세련된 인테리어"],
        tips: ["근처 미드레벨 에스컬레이터와 묶어서 가기 좋아요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오전 12:00; 화요일: 오전 7:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.landmark.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12700919006700787120", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%9C%EB%93%9C%EB%A7%88%ED%81%AC+%ED%99%8D%EC%BD%A9+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리 가든스": {
        photos: ["/images/hong-kong/info/shopping/lee-gardens-hong-kong.jpg"],
        placeId: "ChIJk2eXU1EABDQRiVbtvkfMqDQ",
        placePhotos: [
            { photoReference: "AWCwydg-nSUvbCNAltAT5IHthM2nI48A0zrDGsfGfnASlfxWQwG_ETWma88l1LxjJLHdX6yfz3AonNr5CShIca8Lrcfwa0i8sXSpNn6yKRtRFoZMC8aTFCj8M1vyFfRznl1A682OYpPTT0czYHny_8iuUcSAFSv8C5cpJA_cUpkXdUona_q5rFWkA5H5Z6kEkDkg3OFYHaCVQ9LUx89i_rNL6y-e3KBOaqv4orhiVIAh4HDDidpVn7w6I9iT3DpWuXbzoF-r6G0KpKi7_oM3bMyEo3cbSMWLuzgsusCci6DWG_oAGc0Lmkx_kszFZUmOYg3ZGXBteB2tq20tkF6Y2sPhW4KoEi6-j61MeIY4JNWVURvpLyYyfjZ0GKG2OActGkqXDszKgoaQXpjri_gi4K7uXLwY5pJfw6KHK3K_iFVVXyhYTg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101125715310372556944\">Zijun Situ</a>"] },
            { photoReference: "AWCwydih09LkaUmn93bR-z0ALGM282ZmKCUzjGMbxQRWnf7UuRZEntnnW-KsVr1zN0yVThQJ6V76cGUhzhu5PfwKbSH3uJYVO-KRiBju3tzTpjveKUtcIOQAVNEAOJ7RFnAwGyLywJ7SJfwvTfHNjI06rj1xKFy9uXVJHFEABQ6t6aDTDcf2a42MGh6fKFQ2bWh1zYfiSm1xY0cuHXNp9gUFzvZ50Dpef1KH4Z-hs9y9EQ0iTDfzAtACXFKHOKV8KKLhpT6PqaLsKHSotXbPofpcvEMs2oMwLGPnJwKm4-7NdQUfuIzEbyFFt8HZqB0x_LyLLY7FPVnXwh-stY9fj9DAeq7FIEYmUJpaxRvWb5KWVR7WUMn0m-20b4d1oG_XIwOSf5bW7kCjg3aiJtbjNbC05u-tyafS1ktlnQmZ6B6g8kgRSJj6QkZ2QyXoFeVbijTE", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108222753306648686467\">Gaga Bichon</a>"] }
        ],
        summary: "Lee Garden 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["쇼핑몰", "평점 None", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3794507294577612425", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC+%EA%B0%80%EB%93%A0%EC%8A%A4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "소고 코즈웨이베이": {
        photos: ["/images/hong-kong/info/shopping/sogo-causeway-bay-hong-kong.jpg"],
        placeId: "ChIJ-ZuOlFYABDQRT4Pk8HeffpM",
        placePhotos: [
            { photoReference: "AWCwydg3fuFDjDICFw87OPANGC2ZTtBnjv2kbu4l0OmZiNXCGRlJa0RLgbCVMl1n47fBLq5QIiRyWlJslf4TIK8DLUZhkKnjIfbxoLMvrg7EAfnI9zFw381RAnbd419s35xD8QrUta2kDuZl_zUab1w5ZB9SLzb6LjLfbVHzyHQXsIwjO7tZGgXJWZ97mmAgTOxnoT3jlE99fgznBRAJ5A8_9RBqz5UvAskyBUfJpODcT2LkH7KvNWtlEW_SnT1vOyaMN7x6ASHm_1mO7BLq1GR8gslhSf1PQ0m6lmzunKql5sDHQdQUsJmLfKTvx8pIY7L4D6Gr_26QiIXuDAe-dQHcGYF2kaGAIKc7V2ptWXpgkylkGSCPWBIw96PPqIcklLPzcxGkTN5Lee9WmG4IbqN90JfHjj1L2r1coHSVch4V9-WhUQlk", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111371499899554356672\">F L</a>"] },
            { photoReference: "AWCwydizAwVqkpq88TncZlrkLNm4BnzryXwTOjRLCRtlHi4dpSC20JS5uWxLn1QRI2ta_rTyIx88rxhA3ZshV0nTia1-MYK3TgtP6ezKCkMfioLG58PQfzdsHcOklkPv4sszyODMxyVYsdttaKGqsdDVLbgk5sAzatsxsmIwK3bJZEY0_29md8ka8OeMT5bba76fbYj2HbLONvxogkdfrXKVPwVB0r_MtFMyJAtUjHshPXsm8SiGkmHqlFCVlxBVTA2V-U6AGWxIKQ4IOk9H5JInxPbb0e1C668aDlc5zX66o4pm_1iBKloWATU7DZ6iTk2TWNZZqxqHo6gD6PX56wj0DyY1q_SrpSU6SREM5evNfRNhOoROK5LHOMo-eGmEax8efXrgxaU7vpdB-Fj1zxgjCQfzUw0KCVXbGd4A4Kw4ZQwV_yvHoPj4zo6BVjCaJw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105663544637949986215\">Avid Eater</a>"] },
            { photoReference: "AWCwydip0TH0tQLazShkGo0iDp8lTs2nbSMY0Xc0y_mkE8xqmhTQp-yRhuAHnWKb6cQhz6-kZ_3CMcu7HDoQFFMYAZYrxRtkCSbQcv9U0vyQxquEist9CZc8WUFzreFzl9hOjZ74DVhWLTpHmXaFygB7KM3cuttbbGOlidmAgWOY3YqmYvLajOVmpKeEoCeaObakzXgIqM0CQKD-FmBfzMdrLDEymYFIaiUIq61Enl_tyOPGeZf3Lp2TCKKe_b2exRBnpRdjTNFbZMn9yd-92isllLR9BEUXLP2ZbhDxDGzrIH7pZFyS9p5Zm7280ZvRgkgLO_v-UYDHN8XIPWaWWHdD5J8gDOKIoQZ6X1-htUpFrHcAoHawY_47l16aGXbtdjMaSLOJaAt0Z2rLLBC2XuS5bJ1TYd4h-wlX1k8-wF5eGd0uYdav", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111371499899554356672\">F L</a>"] },
            { photoReference: "AWCwydjW8YWarSP_mqn_KXMz2RsVgbK9xDMhuLEqEy2r5TEV2MxolZgsO3EiRwQW4lzSL2NvLwtoZuCvtwJT8e6wnvFxaPuljiHZ_mbexnVf6XfLCfdScIjvMcpdQUbUhV1V-KBHqNzNcLO4UbdSncyzIxjBVnkvX3uisniQBZgyeESZ9EGQnfA0MtmdbCRTsQF24uPXPXHzbhXdvNUFmCnuuQKY_EXFz3gs6ZlQUHxRpSIXmtXJmf6ByjebaCaqGsidgt9radLymTRkXreqXTLvTVT38BBBBp53l_lw-xuEuJp6RzGATxn0I_SxtvjQylY8GGBaK3UhE9hdbJLWqw63-Qogifbslv6Gt7ij4iB--HweP8lClI4RURb4ZB4TCfas9VlnRHGG61qSIxhLl2O2m1m7NPUbnqJfxaV-MFfZEdAe7uHy", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109723094782336729793\">evelyn T</a>"] },
            { photoReference: "AWCwydiW5M4q7ZSygXTFedlnaXwd7iSmEYzuS-I-f97elVvN_28wiu2Q6B6ZAYBhmE79SX_4sSaNBOMRpgAsJpNKeyB9z8K8B28ir87STnowrqe5YG-nKtqWjP54lDjbFxeshD_0PoVrB6pyzKSyR4lCjF25e0742V3aKTiYaVg3YAbDLjjXeNmilDun6B70cbGdz51Dqc-lkJFORmzdYL80IurHXaZxTVncBsAV0bkNIjbbMd90b_DUgLaqqJ7irXahuJwHzVk_rScCKrGKhTFzVwB-VBf9uc-uSYYXG2yPqVKMhDkzmSBj8H1VqW4-AYQ9RcIeor2VsmMdbdk6slnLbact56irtNDPLNWk86jg57xJsDJkpmCGQsbankRUdxWxAjxnGT52h1EhssF7axgigQ-sd2ji-XShTZxUn3Hqzt3W7g", width: 4800, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105397393786984005360\">Jack Fadell</a>"] }
        ],
        summary: "소고 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["백화점", "평점 4", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.sogo.com.hk/cwb/en/about/location.php", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10628107508132381519", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%8C%EA%B3%A0+%EC%BD%94%EC%A6%88%EC%9B%A8%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시티게이트 아울렛": {
        photos: ["/images/hong-kong/info/shopping/citygate-outlets-hong-kong.jpg"],
        placeId: "ChIJDfpYMu_jAzQRbyrtY3tLlOA",
        placePhotos: [
            { photoReference: "AWCwydhQfjowAUYe01nXmVTzHaA2a9HOCzmdSClV7T0DzqYFWnVKZPCbmwc94cm2huaEbVT5Tlyw4LOpFZsQatmKK-HZ7cRw3tjUoUMdfM1ojhOQZeuzx9nMPYGtSpBwMZB9z7lTXGsrjdOkxyvKGvbgFjazHB7IrVsELQaViruF-JHtOYXBZTNJA8pGfbgYYId6vmdcZ1jqacYB97DIFI6Z8U35NaoVQviud5e5j75WjJu8vYH9Kt4XYV4mL6JRfNxOtsBRzMmwSeT9oP98WnJI64Hff0E9U1-q0lGOVclv-2cMrS9huKdiGSX_s9aZheUqWNp2bLOaBJAniuc4TGDH_Jth8G56hsmrFrSF23ZA_WRLktP4ah3ImN_q7952k98awTk5FOwIIaATOYTtK1MInsy_ZZS64GnjmstYzRhvHVP3jJ4w", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103273035727592470451\">homing Li</a>"] },
            { photoReference: "AWCwydjtxFE0OSwLbxCUK0jp1bdq_BRyG5uu0Olv-BWhxgQbryGex1vdobenPIjuTMwvw_l-MyglnmtsYfm63h4E-iyG-KQGgvLWOWEVdURSy3qVBw5UYW8aksTQWgoFNxLOXiq8x7aimEf1bLHR1QIsO30R-EU7a-bq-TT409esdWOAeOlGn4bEZNDSmhD60UMgZSLY7B1tYeLit_AHITRU6aDZYPKIIS0LfYAz0RI6UAYnw1P52sxkP3-SIqdLoxeDTt4t3zsy8akUoiLTaBQwAdJKqi5G96TxQF4AaJ3rogYYh6Ln1cpgZWbEEDdUcnq2_LFZvtolPjimt4tt4bsuGv50nKJ6Vu_mNKxHeCAjNQZxg1h_htLbo1AIrtJ22S3V0chRrd-2ZhU8XhJYDQh0lQb79fHujJUXAs01VNDhiI_VrnRd", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101857753022044848494\">Citygate Outlets</a>"] },
            { photoReference: "AWCwydjuifSzUfsC8QGrUL4xz4p62UCCjWaEjaTBH0gmqUC9pnOKNHC4giZZ7b6m9oF0rThKM-OGYbkMIPHMimEXBmCS8HSOLEr8Ebp5E_RTfTv4b84FZNujOKguOX7eNqkcnsbQ3vq0pybDOwgWkKnm1oUVhViipabqq4keXUZaqwoFb5dnJjGRK-d_GgUs_BkgrnXhyVFhktnOp8kFJLZwsyAfeCCEZmzpb8nEeL56R5WIybs9WK8HnwPXX8ICfSxKV4jtvu5qYodXTj_1n0VOrFe4XonbvPZbolxQkx0YExjtQmrxQaRRp8eN3h21jsr-ieNf9UQtAAfJbZk5fh9WjckjISLW5ljdaUwtZyL2jMRqUEO30M6mqDD3x1mzyDjoYOc2CCnux5i5dARl_M3DksE5xKnMqckKM6FVsecHtG_EeA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103273035727592470451\">homing Li</a>"] },
            { photoReference: "AWCwydgsfA-3Jhf9WUkgw6UDKYRXgmEovjh_t3ZUXu3Yj5XB4JYNr_qnx7kXn0nvf6I-Tty_Y5Oqli6RKqNo7tvf2Ei7zWffqVXpFMfHYBDSNa9RVZ220e5IC_9i-mamL5jvEZKv4xgzY3DnSWd24RdPDdlQB_r8Wf8XSTqIWrR_CId1YVUVgW4mIYhevpLkTZVj_-VgWO2lodbuGSYRa-xs7rWMMwEjWmEinqFgy3ujaB55wtA3vqaHdTH8nrBq3MvZF5HljwXKbVddp4InDlwRqwnoQYasfWK1bHxeWFeYKyfzg325VN_5TAIrN4E2j-j1w2-E88FI8scAkLprIV4Q-bAV3U3qsPd0kqN-iGb6mIZFrDlFko1tjCt08kMk8UwXIBk27wTQQxeCfh1966xin3V9Pe5guo_u1TL2F7amKPOpQGAU0CVQSXlMezp6XPG-", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111925425236256275810\">萬花筒天空</a>"] },
            { photoReference: "AWCwydjbDysYaRC9B-wVpCG-pDfqtFR4YbLAQ_mDsukF-fpStFaCFtSBYGKHNL58PUvPVl8wkK2CtnY1dUxgptO03b4_l5JiWOw18DtZbrXJocutS1AYcFJbIh9WLf_0zv6c7xWHiRuIlqLSY49JJNaIP3FLSCnxVGKZUJxVaJ33wIPXrRCDvoUOlu1MUjcYonvw7ZRAWoh58xGOv8dnuyu47ZAvxCN_FJLXPTNEreAjvUBpRO2FxMyckRNyP_rP7U9oKGoszDV_sRBrbrl-ok5axUlMLAS4oVxPYlqiMVmAxUlkxQbnaZruteFTb1j8bwhyG_V4EyqSGlnOIHIlWpI0_F45QnzpPyVL_R2apSIKXL-uiCuc10eCyRCCzci3RHp4ecQvOdMZnKLCz0gPM4QhRiXQ2PEODOZQ-eL_rmKJMd4Mhw", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100773918973550608579\">WONG JOSEPH</a>"] }
        ],
        summary: "Citygate Outlets 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["아울렛", "평점 4", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.citygateoutlets.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16182642354378582639", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%8B%B0%EA%B2%8C%EC%9D%B4%ED%8A%B8+%EC%95%84%EC%9A%B8%EB%A0%9B+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "몽콕 스니커즈 스트리트": {
        photos: ["/images/hong-kong/info/shopping/sneakers-street-mong-kok-hong-kong.jpg"],
        placeId: "ChIJ4YEGOMYABDQRYOvBu1VBIZI",
        placePhotos: [
            { photoReference: "AWCwydj7X73Dfz7YEpIasdm10l-wg6NNev3C-sQRyw46GzSE2s5kGtqBijKyHisP60wMOmpy5lwQf6NelFGIhOea-rmWZlju4kIijDEc0293EY7qECoEjW-TqeGiTfcUVmBwW1IV3Ev7JyD8W-BjDIZXtEV5SBhz9Cd0NBOcqGXeTsLlm4RDru7ZfFVsY-s22lCqWqJ7Zq2xa6JoQxFvhvUaB-qoOb_Dschpn61P-XMWZwK98Vvj1xk4gUIMTi1xPUMw6lV4b12GL22YA1wggsbI5aQN-gXIMk9wULVWIkEU3pa8HwTsfkXu8Vblk3RKAYZMd-4CE83bj_LKCNwCSJB6uhvV7DGN9mtVpgv_uBOk6AgWR915Ttm6fhHUYbc3CiUioCFnTUyy0gDW9Z9woRL0hSmANmKjg-UPxtgj-QndN7bTnAW_", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111159392325070703139\">Mark Sangatanan</a>"] },
            { photoReference: "AWCwydjVuiQPykgGxUAJcxKTZeDwDsOsXTnoXbi-Cw6YjLRIZQN2t9sl4L0sDT1tMzMyhe42U5KLSVA95iG4BWFsoDFJatxqrtpZLlbQaq4BhOZMmVThgjfS0q1Bzs8LZtvpmW65rCv8EqXTAFEWef1dxUbYnKQoYYVg38w9XqOl5uTheTuc0beWanc_cqPwV3yTRfgiwnwtVf9ZbsukRIK4ZQGAUFd4wr0loR8kH4LQxO0t8PgokhgY6too6nRfvo-hxDbvgCtXVScms8rVnWy22goTnpHgGx8oR2UrBpWQUvYDW_VfC40RjTwoKCzJ34fOwik5IdMk9I1oBpjU0IJyfMFcGrC3-YZMQrt_tLMQtsDmvQBo0wW7hXWIWO9zKcAacqMxwtB68IATgCh1JMKPR6W8RC_t7o-xth8F7TGuWOPKQEQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116900802599741720903\">Richard A Francisco</a>"] },
            { photoReference: "AWCwydhcSNLwUwYlfvFiUC2FOUDE7qRauiB6goPRND3Lc6B7y3Nxz_du_ULfFFYEhqtJCRYLDw-P3WHhOPlr4EvioN1igWHTlLQVL5YG-TmYbyp95egtRwbbxltP7CWehmOph1b26YFUWIvAtMgqFBGRvgwOX6sGR7_hwyS4QG-RF0345ReAoig1UcvpnDI0C-sgYnVIByhhgrDP0NVZIiOkdMVYBdq3SXOy4V-n4Bc5yl1dv_6AXc3-DwI_zObt0v01ZetdNMI7BqSJa3VBPmSCUd1PEbPL1Ld7KrR3qUGYII7MWZbNdmTXl1_fsyk9x8YWb9iG2y-SJF7x_epDC4dYcHL2Hx12tTMGriQlwpEeMxyPJhzNLAtxyGpyEDFwnNAN0mJieoyqoHMuzMjC-yiyLtp3Ahgu66s_9QvApUYtUtF0v65i", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105195314927409596687\">林思葵</a>"] },
            { photoReference: "AWCwydh53F-YQ3Z1UjJkf0MBK9kDO4XBAUzh9cvkGCRNqymYs_3sO7hn06TFJpC6k5S57LraPKl-oLQFikJ56xdmK0svyiJCZWixe6TcF88my_TP0kka2IBge0b4HNB9In27wEEhiznBdgf5ZBintBkdE3tsouacLJjYZroeN7sSg28U1i-iVjKhu3FesSfTskqOFWtf09-MS4idWrEbx8dAYRWrF6SMvCvCppT3nURWIgbzFo9cRxN5otXd2J_GcrOfSJVUvu7STVw4WsoSO8pOf88vfWBz1-C_CJ8tw7Knfkj2_6ZYbqFZM_PSR9I5H61P5ULNOmbwwTiXZSMh8_LVfbr6Yx6QbeqoMLcvUfMfwguxC9WyogDMRWml1JBbY2XYxQThswwJf0Ql1JT8L3raOIUsgR2imjeqBcs7eKZRcJ0", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115428199235188265724\">Ecnal Sellaboc</a>"] },
            { photoReference: "AWCwydgvivnfIKMEeyiFbB8lcol-b3zRv2_RLRhs-qGMDjG07TTHwJZvtvZ5OozQlSA01Cw14qBic-7no6IkLRE9XPoBKPUuDKXw-EWkqd02r6xiGwVBOAZNpSktDiRpzDHrvs4eXVAcb8fEl8s5EiZQb4QojyNJ98HFJfRTwhXslUFdppB9HNl4CTOq63jl04NvJEurPgZo8DSRk22BHqyjhRPJU_dOgRoh3LvJ-lSikdYE9Bq_obw41AVeXXSIPn9fvCKNXYRW6Bxev2HqxiesMvaa9eknRDBpjPrmfFGhdtRbh8wueNb7Q1lJHQZRQ3GeiI82l-ZUWICaDS7UcmSXZMfkgdhknvwcsoa6hkoji5kScqOixKqfxsC-GgtBh2KC_I0C1H3rjpxs3zF2G9dFbTjpmULJZIgbGxaXfeq8-vsX9A", width: 1284, height: 2778, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109607108535920894354\">Sae Lao泰旺佛店 佛牌#泰佛#泰國佛牌專門店</a>"] }
        ],
        summary: "운동화거리 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["운동화 거리", "평점 4.1", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 2:15 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.sneakers-street.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10529769240247004000", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%BD%EC%BD%95+%EC%8A%A4%EB%8B%88%EC%BB%A4%EC%A6%88+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "레이디스 마켓": {
        photos: ["/images/hong-kong/info/shopping/ladies-market-hong-kong.jpg"],
        placeId: "ChIJbYMkZMgABDQRryWJe8ooWP0",
        placePhotos: [
            { photoReference: "AWCwydjQaT_Tv9rEnShG5JFBwHepJy_V8fi-oGZDrDy6AnUpZl6B4U6z8Cs4Nct5ZlikSCosWX62inuQx7Q7UC6urWch8wPBZm05D1WAKqadq-4DJqlrE9BxzBHclQe06aXhyq9oG_D_WyafbOkBCMK-cOWAnU3Rt2ErrBSMSXit2WxFSfJIsq53ZpGtccWeWd59z7gaYSYAJMAhOAx-e4otsBUEtJsENZCfjEPD-G3A1Hns5rs5jlUNOjvdN43ZnJwcD5rM27JvnGt5WaQ9z25UPkrJQnDGWVTHLhBN-Mg5bJORvaWMVA8E_qPa9_Ps3GVOdoBJvqxOf9ha0KVAeNQjB_s0bbiYziE99LZMlo3QUyoJxZIQtct3mzVzqvF63bwiG9LNkLAGaGz8PP0gbywNM2FLNzaVCJUw8Ln90omyxSUWI-fZhTMi1Qewh4JQGZSt", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109148920354399454932\">Pawon Soimut</a>"] },
            { photoReference: "AWCwydg6Nhs6Al7ysc8SBzadqcOfQU8Fei3JHAb9Z6qdf7scTCVkTsZ7qV5mjqAH5Ga9TtfZtDJJRfwXGXUhy00CvrhRBQK52MexBMX1WYmrzC8iNXGrIoSp34tyfi6phJ5EmhYjqDwMgrz7JMFKKoMZwLyqboMDsaniajmp2GEjYpLEyE9HdMQSpD_ygVujGSACjc6om1dbqpXdy_i4GABsrO2yAg8mKox1zrScrU3q-0wHR_2Ub_eXUTTxKeFARqT6CsrnT6UNXnlf3MySeqFHEJWpaEvAfr9Gkl7lB286J5rT9E9qaV2fYxsau3TC8qOElFT5B4ZTtL1ayiW66hphd8KK_RP50cvw6gDvBDWxc37EBCeWzvsrH-ozltRr7qX8dhHE62CjYTq0qnt11-RB5QSaktx4kyUnd7YlIYWS4U4A9g", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113678571425065782784\">Jonathan T</a>"] },
            { photoReference: "AWCwydh65meD9Bih1G_B-pyMXaX3MZSBAwWxfdDYCQlnugQQFiM-SgSGSTe-PVmKLOGE4SjfQpRhQ1lIASEc1mAylov4PHu4rvPYErJbpuECq9A6BHFLaJMxVot1n67OnzjC0aeGt8fesntJH53-hgiDoiK3GHZgdjO2DRXMhm-UKd7DOxTma9-ddEtGR6ZeMhdlF5F_eZz6yNQSBE1L54XKQeJw7FhQr5cniSGdEKQOi0OjZa2wWtAP_hARF9fvSXtMKyyMop6DvIw6QlXjr59nrivqywveqVWKgyRqtpqFG1w6RYp2sAPZEcqRoUFSVV-eDU6QVmQ-9IKPPGGxGp-KSj5AwhV8ucGGA5oOUcmFyanK81KNByIBZ5HgBT7A6-DnJSRUV80dpohQMaRstN8pCjOHKTpsOhmVuhb6V4y9gm6H64cZ", width: 1350, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102897455504217420588\">Enric Martin</a>"] },
            { photoReference: "AWCwydgl5-54WFstXEoeNxFkhS7Bf23JEsJ6j1i2o8yk37JQlmgdfLR8ZCXfJ79tCGu0jwHcbaQcgFo21sTqF_zHzuAXKDRWbnLVecSDfQi_8OcJpZmAJ981FV0JOhKoafygxB3EZX2FR0JeJfQftLq_BDEvPSmxOkBQREcxvgT3z5Nykq91RKOiNfAAVnXfajV5lEI6my4ChXBdftMCDubGdTNOYaMtk9_yKlFHStqAxE-oG3JmbwZo1bUDAi48iSMvWWN5LnYx_q8jqa533ETlqAlLv8u0sKfupF0Z2vxvgbjptgvPEF_w1JA2KfHDM3CTGJe-x-MRgXO6NhynpH19AGo9SX-um6quWXJSsAlNLe7wCxnH63t7e5-8xdb3xUgNsiFxSv1bTzu8d16Z5mDFNH1gOFRXHrMazHdr_b2WaTDZGA", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100608751213011534814\">レモンタン</a>"] },
            { photoReference: "AWCwydh-vApjMts2NYWgu7CuFnIT9paOvHAbob4TYbmih-x8arW_XPT9bvM9cbhFIg0Ar1g-_QKHozuDuryUFZmxFusTNeO8ZdbLBtny7wWe3FPdvXD3M9iLWvfNpABaUDkXiQAfqOfnbi1SkDjy549QQKq-k-LTy3tGuaYsyqpkrST3ibqfNMR8rnKsmAe3RQKsvnl_mIWIOOVSn9GZy9s_D4k-fwjHCwkL0Ffw3UCwbtj7oTlRpHm9rZkHOb0mMmC0GqkKzS8oWvy5ck_EkCiVgS8VqwOYI7relZH-sJTLhr7wB2lBUUHQsd7TMDj9eLlwYG77twIGLQF-chATvgP7zw_WKkd4zhJDe-U7Um_892Y2rZZBgOcgs8Jzp1HF-1giWIyfsbj4e_1nG46F2JDNady7H6idbPyHXpPVS8IPJ2zBRQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101528616623912169831\">Jack Kuo</a>"] }
        ],
        summary: "레이디스마켓 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["야시장·시장", "평점 3.9", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 11:30; 화요일: 오전 11:00 ~ 오후 11:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.ladies-market.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18255385939667396015", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%88%EC%9D%B4%EB%94%94%EC%8A%A4+%EB%A7%88%EC%BC%93+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "템플 스트리트 야시장": {
        photos: ["/images/hong-kong/info/shopping/temple-street-night-market-hong-kong.jpg"],
        placeId: "ChIJzcAL8-oABDQRpDOEry9D3bc",
        placePhotos: [
            { photoReference: "AWCwydh1rpJ4okFAaczymghAnvgoJF879MFaCYXckfTgC5eTi6_C8gjSex_DDVXs22QtugPczL42Bt628_Q85FQxE2Gaq4VKYPKPTdmMnskBGKDRLfmc3g36w8_efBpHnezgq1MNKsPiDQfnLiltlPd91-jyqdfSgR0S-O7JvDUHCTqEiOv0IOlH_j4fuf8tsil0xCoAR6EJ1VnUi7xsMPyrV4E6Y54uMW_U70pNEeBvzXT7P2Jk8VPsdnM_u0j7lSjlsBXyIz-kMdATQSOr_3Bi3qPFgqzZNzOk4yaqe4rxd62iPnUpDYrdJW9YED6vp6qIDbM1QA4EUyaCQnWjfWGElPKQ1klCJUlEi0HswTcIMeOg9wrcQLk4Edz9ihntH4Yu6nSZHdYn_kuUxGNQXHeyY9vuGmfZwRe9aPQv-47GF9m7aw", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106004941371363797889\">Masahiro Tokuno</a>"] },
            { photoReference: "AWCwydgIUfj4II9K-wafZQ-S3E5g5X8RtI4CF8_8INh2M--U_evzyPZkeujNR_MH2z48cVXEvkONmkxCTnfohRkxucokEcC3QRp22rKyGohFLVsk6lLeWDeCDyOj6CSBf9NEHIqfzLg8xNGbTNsriaEtJxCn3WVWpkkr9_zy6IfpAzXgwH4FtS59nLZxD3Xk6jRj9FjuG_c4ZXY_CsBiplJ7zBBHQ3bY5JmrxPwwN7ynbgo2TkV2iI4bxa4JRGpA5mSYYeUq3nXQlDYI2Icf3kQHf_WA2mbVxqEQIfl3qjuo9zfp0PXWXFoHR3CA4xmI2facGqOTLcLzKJIbS1yOLxX70xt6LHHV00aZ1lRTDyPGbe9CVZexSVXocBMZp2PDZQ-KwOqXe4YcwQIo07m5HAV2Mt5KuBnLqMror6vJlD7Ck4bZcmYY557_XgEX3ERglnCN", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101437666680066345259\">Robert B</a>"] },
            { photoReference: "AWCwydiBbYijlzOiCkr5jExv1gQZ5ha7iI8NQ6_WDG_unnoNCCeTfTCJjGMPnstDwAzfip95wK7R9tgc2ugrJ8zXnd_0h2bdDTYM_JtMi24kON7FPB5DwgSLvgx8WyTs_nvHoZIKQ0Cy_fBmOKDyWdqlLp5aKLkDYzyv3GqaFr_YpsazJRt6RsNufdanqj8sNuK1TWPdXMxHIVm6iH5AceA_MvMxqPsVjSRjTOWx1EBtuTUuVvRbkGtOMY-SF_cYVas9mCCMoUz6tBgGGrzhx9-NINWIrnviCKYANNBjqoDgf2YcDjppjq8Tjylvpq0V-nefNVhvZ5Dtbs8s7t2pjZnf40hfwMWo_5CB5NRGsN5m8T1QlIAYGztLrPvObcl7bqs04yZxoWjcd5xR78cKel0FCIM9WfP2JSUHzM8WpjX9103ztSsO", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117162879547663690468\">Sauying Wong</a>"] },
            { photoReference: "AWCwydi_kcmPbU5Xq3N8KKeyjcGmhBfZuNycec0qtxknnBKx-jm0D_uz9hYbaLCopC4kbEGMG_qa9RuG1wY4RF5mddGN1fwg5OtT6n0WYe6TJzP7zWH1SKSEo6-qG86W3QFxEsI1UcE7aFMOeeBz_0HSenyRPpin_KAGvwhKz-1AyF4OnnXG4EQAbLU-spvggZMu93U5BYDXu8EpkcSis8SfycmgmgQ8voNTLGUypKWwYbjZz2KwwxUN-x4zQcJNjZk49bFqDoBYQpnxV9MMIBfdnxK7OlA4y-m3V6gQ1xvN85PYdloStiCohxyKFrIFDjwDQaVEqHK2j6IRHUxaHBuYm2SFK-JZtfqzjqVk2cFhpwamahuHXk2RMK-ed7J2PmxlTZPqB44TRTYSoNrMv2QNW58pk21dS7vZOsUm_hTyWDcojFvRpoRxwZuw08ScZcUU", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118406637915792112806\">eunmi choi</a>"] },
            { photoReference: "AWCwydiLhw6Z7zXwq8DUm5DscreBl_vXoo4n5x0nkQ39DhTxsEOJ2c7IE9_KXHTPKxCi8OjMjTf6n8vKKDigchvUwUPmO4xK5CvOXjNvCBWsGh9US5jy28-_JGGho9cZU_Bun70_2OhHkqj3lBTK_1PB1m9H3py1dFq0wqNt4AwSFXB1GjNsRj47JMJMTxX_4tLeXc2wUvYKThR06_tg11gCCW6bQU7MtKC4MUhG2fUlaGpi3l2o1reXzDrPcTfS2MqTSg2fSqPeGf9mrI-f9cUwtfmtWSYuowdb0OXzMuFkk2kH28HF5Twm0OqyKPiMz1V4jHtfqDyr-AJHuKC8cdmGxvuARZdxvMrYHp4t7mrGpmJrt-rwxzBUEPOdloSrkR3EfXIw124-K8bW01KfAqPc-YXAFpKziyD7WK0TZixfuQM", width: 4048, height: 3036, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104943539888851627712\">arpit jain</a>"] }
        ],
        summary: "템플스트리트 야시장 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["야시장", "평점 3.8", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 2:00~11:00; 화요일: 오후 2:00~11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.temple-street-night-market.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13248819550881067940", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%9C%ED%94%8C+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "캣 스트리트": {
        photos: ["/images/hong-kong/info/shopping/cat-street-hong-kong.jpg"],
        placeId: "ChIJn-4DpX4ABDQRTsFq0gAmdHQ",
        placePhotos: [
            { photoReference: "AWCwydiI6Gk42Nisz8y4joprn3pRfwALmCZIuvNUFcEHyAdUo5PBcx75vcImhCVmyKz7Sgsc9d72ZfCiT7dnpqlwGcI6Zh9I_UVOwS3P6JPYxNE5Ihy1ctUfZ8R9NDWciktMCkb-c5bgZG3h_n0e5Zjc97QegmdrW0UdgP-LhOchqlaFoTLR7Z4g_p19SCjxlHZlLx2p5GS4lK2oa_jAGYEi-5aZWsPYCR-QMzq5_R5MydhXnsgJXZRvnyu_0s4FsUcrazIRj01XHoHsFsWeMRKZIWI5KhSVwd7AN7twDhH87pVQWkT00w9pAVm4KfeuAgD8HXtmerh0k8AK4u50dlX_2EBAyxuTG0vOksDUrEdEAN9owRZZf9Y1HMGhIHJp_zipJ_oomwJgJD0ykkHkpxG1kuC-EOZBsTBLZDDFRk3IFHLKwgHO", width: 3200, height: 2120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114996975383485078548\">Nao Makemydays</a>"] },
            { photoReference: "AWCwydguaDUYJu-ZCxq8-gFjyFOz-FZNmDS3EnOlkfkZROEnRS87dbcXUcZn3iUXcC3pdlRT2Gd4-BaY7rzOTgafUK0nlJQDJhtHHPC-tU1fUHaAZ_TsnyfKiSBZ4PQF7vYfXGZ3UeqSNuWMYa7PFACcPTBv422XOjoUECKd9zD6t3bYGhi-8mhxLaNZcreev9MKVe_N87QeM99bXZT7-y_OgmKxrH9S9BRrB7SOLdPfm91__e41mGCwM5g454I3OnhpqFwRyweghBXSV8uFh2cTiTxdYLtM3y6dnR8de7T8Von64q6foKpcRwfkXBHPCJl-75X8qLqTITz8LFC5yhaEQIKzyNnSeFqW-FYzHRUxxRVPKhkcWl9MVDgWoYK9gZq5PciLqFLx7aiLmOAFpaK5oMVF-RecrWWA6hCZeVhMq2v9aJRb", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109183686594816858265\">Chi Ming Albert Wu</a>"] },
            { photoReference: "AWCwydiZbreWdxCUzAlb1JAsNlOSdr8ai6ad6OHMlEGtcyWqjDSiLTxzZqfdg4jeuJNcxV5gYTzfQF392hQM5_Zzi06xWFY91aU7zzAAqGYz4KhWILYHbxPO1HFYye54v3GPk9r8bknUll1c2O2altCuWJvqbbJ74HrB41v9oYNWU3CRxvQeE8wc2IzcVJ2_c1Qqk3kU2K-GQPRa9eAwE2_ou0ytA9-5mfSsaf0DLLDNeZ12FRoiA4rLTagDuTSJTcofG2iorczJ7jDICU3X9kYoVbxtpiNss1zewN0Fzz6Yk-2AkXNrXaH34XiW-Un-JhQVbq5FiixuWDnf2NboHPw6qM3QlIkL-csgfFcaeqRinxjuTfGnhp0-3J57Ddk5FlmwjRlkaSRYAUaPFjig_o5hZIfOzf4wqNMeMwx9VWOXDfJTwxViM6WEUbJf2W2GePbB", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112608145939415092322\">erwin hohchee goh</a>"] },
            { photoReference: "AWCwydhCTx5hI5IR_w94Z052rqBVjQCBfmQtjx1OMM8P8KbB0ksGJkQODJQZP8y46qEdEtFzyxp8e-M1kvdP5hkGAgVMfuLzcxQscnnNGSIm0KePsab2QrfwDJr7_1FzH72QxBjXLbvj6tnbvWoiZ28XYHmFiYj2I_OkPbiOswTJK3LsyTNB9GS28xkBoQzCRyDQqG7uyqUd4PAXYhKaa7i2yoBkqskBJccKjX1C2OyHE0Yv0hCzZII0MyJXmLQ_ArSGSfoPbSC-u49E23EpWcttTLywxHRUDmyNFDKN_m_vLoFRYg613quLVEvQ-T6LqAwjs1pkuiBW3QBm0iGF4ncplOsG5apXK5xNeKBNySYbsYWTQhdmHQfzGCMku6ubUCjPpm9aQQSethUBLQvu4PcAAAMpOtNgtNuelijymLeax2RGgxo", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117366228469624382942\">Reena Chettri</a>"] },
            { photoReference: "AWCwydjbO0huGf2MdiUztrWgG79ZSA-P_oek2FZZGVG8eHdFWzRQaBh2JbVJkFX0o_Ux6oCJ7wdp_vmNkdMQki_B2q7VhodHizJw2DtHkFq76_hPlNOOvBPJrKRQLBKOrm2ZfDMIzQf5c509f3F0m7shR4tnYHXeoEncDjwpZIfourF7bj3ic6W9ZSy7h9ZIbXUGr_2FN4tWtvj64hte_NiamQksLPerbrTm8YZSV2eqMI-0wY02MzC9m2VfU07W_vCZP8sVB46s82snIxqaf-L82XSV6__79Jp7cN3wLcKHHPx92eH9KFuN6XbBkL14ZagrQTrTXwQZg2ztOHwK25hJK6Hq9VI6J0E2q3BKqnmgK5cx8o2KcC_zs5e2mrkJupKtTZfVWvVO0AEUSqsuVYYBXXD6fJyBrlxFCorUXDlzfiVKWQAJBCUggXfhL1IgMtU6", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103730303698249434109\">JM</a>"] }
        ],
        summary: "빈티지 소품과 앤티크한 매력이 가득한 홍콩의 골목길",
        updatedAt: "2026-07-14",
        highlights: ["희귀한 빈티지 아이템", "아기자기한 골동품 구경"],
        tips: ["보물찾기하듯 천천히 둘러보는 재미가 있어요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.cat-street.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8391373790670143822", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BA%A3+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "PMQ": {
        photos: ["/images/hong-kong/info/shopping/pmq-hong-kong.jpg"],
        placeId: "ChIJn7jpjXsABDQRBt_E3gFvqVw",
        placePhotos: [
            { photoReference: "AWCwydiBT4yK8Mehu9XPtJQFJQ6tji1U9zWQfVa0Cy8JTWF-JdM-iWjx0AWqYYyk5g8KlgCX_ylsNtM6vOMmHSoKg_DBjAXBR3mTSFjMV7AJj5CvO-DNH2Ns6GGfGePfkuj-jvtGkjPh1KyUWTJFtbO1VSTy8I1X4GZ1kqVuAXZaOpFpagduGbOhPq-0BI3mpGKEJIIqFP8pAM78lcsohfGSnwIl_VQJ_N9kFIBkEpiYwnyVvTUL4KmWkF-Xv0_Z1wRclQByx0sMkADXTaxCleiz5jbpHQZXqn6SAsYkZhnDM9Rp_uNUggWoj0hn0PtpkNJs2JapS4wFYkmto1LGrFYj3rzrFRmn0139D1C8UyWzy0Kyd7pcSZG0h5WJARNcHexYcOz73xMRH4F1WMjGqImShdX0Gvzb-oxA0nDz2SLvHe0", width: 1440, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101674408517943990828\">Heartrich sit</a>"] },
            { photoReference: "AWCwydh4zmVaVI7Gt17RoHIgLC9XmRT-F6QFIk_3FqMsBQDOUk2pRB37IflghdG5ce6VikjiiYvGy9S05i-C9yWf8XrbTbT0mIVhyVNn3zH6cMI1Xiu-eigeK9ZaY1LR3vGh2wXsBbAtWvLoxlT-uH3iCWKK-4QAfA2je46MytBh0RKeU5H6UB3Mjinp13QfoLaATbXJIoHy7G3FsPB_JXl1XRCI_JKn-MweExCdlDxkw1qWDFYd7wIhl7yD61IGqFwSKKgScbjgr_Cshx6VvRlXwTmo5y4EINThYjLgQNl8gyjaI_RZIN21UFUhYlf3NAGDZkG_rTZhwc7ysY0pIRbV7X1vZw0Nx0R98IuOGLZGnYTB4NhhX18vpt3seDklNxhPYTYoq43REJabSr8WSd_cgIc0YJukxVlpxZuH8YDiHS3cL1c6", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114084029938666283537\">Clement</a>"] },
            { photoReference: "AWCwydjbc_qR1_AwiSEO90DkdomGFS87jn2FVyt4a491XHkgJ29OHC84skaT_X_1vLktgr-UKXai1MwCEoXDZU-OIgUJuACxyriPW6YGMwil6Co8v4kgFDR5mp3Th0laQw-yyL_7FlXd4g44B3Nc-8nt5_KJpaQI7B7_9rXAcfvBGlFk2mStoKbsrWNVr4oiBAVrJJd7U7-d_5ews8tdl3wvbd4nnU21fXga0CorZmUkN7X9kSmrHC0yXh5O2SILIQw570hmmhcrSKwl4CcAGXi6xe4iWthBgNTqWoY5fNaZAUaCCFh8JUSe1yKSIlzrnYkfWmDkT_JwPPZJb053EBbqEt1Qpgt3UgKGD2BkOok0gkiKVtBf2wVEaJeAHYOqxNGrqyxlmFnV-JW9J2yY26Z5Xx2OpNzVwLjkbnR--ezTf1fytg", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103071774985414498468\">高太</a>"] },
            { photoReference: "AWCwydgnNdtxcQ3n0RQO_Pg4crtIABpoZr-I-PURLRHhgBBCOIGhBDaF7KMOsU51CAe3PnhJbsMjKT9017yi5AL9iSm4sscX0HC_XEBeW31vPOOv-N5Jq35P-EspySa6_cnxrYWNjRpxfFcVArtG8usan69aSArMevhpcnR2C7hHnmCOCd0Da2v_699HeSvCR-SeBTVlmtvlOtSzzBoDfu7KqxanQhZunvyE2cDYdvwBwRBcMGwk2Nc-TQo4aJUeQUUxfivxthHwobRsb230_R3FwSV1yqh8aOxBFimI5YkuQaK40l0cdGs5km10brmMVdJDH1OksJxf6oMrAeB2VT5tdrUxB-z2KANpAGyBOVY_rFAg-QzvipD218FXy0ALVxTvUcacB6BsemtVHHmX4kf5Opx5KPZJ9ZrxCCU_GKHSImAnU_w", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103071774985414498468\">高太</a>"] },
            { photoReference: "AWCwydiOLkvIkddd8TLAEvzRUZOzEQ7pejyeDGj6TmFfgnahmk7nQc9Dht-LSCOyH4HhsjlWp22_vBHEmzgr_rdfGWySxCZe8Ov8mqC_lnVEKjtRr0s_COU5nFfoYmlERCsZ3LrFQ_JuqrRxRkAVmi36Esk7TkWV3hBZtdrtZ-SFFgAze53M9J1WsZvo7U4_c63nKgmern0UKS7OHlteDuQoVdr25pFm9ruS0JAwQd1bRkv_V6JyLIiPku_LE41jToJfToC7gSbp-G5kdk5m3LrDpiaWXa5SwtSyjmxGeyHGme6IrU3P5kSh9K41yKs6OUeLLYF0xjZoMbCQBJC0teLIHVED6sWP9OMFJmfzQNQSnNHWbIMQm7tKNpXsdchN-egYULTDD90asBYu0ZlRPJfpsLX2S7WorSP-DfbCPsJ33hN7gSdv", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103071774985414498468\">高太</a>"] }
        ],
        summary: "홍콩 로컬 디자이너들의 감각적인 아이템을 만날 수 있는 편집숍",
        updatedAt: "2026-07-14",
        highlights: ["유니크한 디자인 소품", "로컬 브랜드 쇼핑"],
        tips: ["디자인 전시와 함께 구경하면 더 좋아요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6676989976376565510", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=PMQ+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "타이쿤": {
        photos: ["/images/hong-kong/info/shopping/tai-kwun-hong-kong.jpg"],
        placeId: "ChIJ35fjG3sABDQRXgOsmS9N-H4",
        placePhotos: [
            { photoReference: "AWCwydhCX2Zd2V0hhjoyWchCIK_QFPtHYhdjMzOHZfQ-cWVz2yYuVp3gMRZTmyuPU0PwU72zDABoOBhtjKlxm9b4kVVOU9pSYrMkh9u_HqVyMIg3uknhswVpOHHXkbXBHiHDGbBWEVhCP1na7PioZFkMylP6reWnaEUrg9jZp60K1Rx2i14awH-M4N_40kLQVRUfyeKHxTaOC8lmK1TKnWoS0Vwx_DOZbG-LDYi6WVf6T1kTCwitVYgWuKNGwPnLVvhuoXYXxHhYyGKpv1SKYWTTujl36ADYNZ7dWBaiJ2jJO8PKzlMgouBYJDGTWN3Jy3cuDI8lXGmfrkhtf-gF8wJiTyQvDmi6K9An7Niq_mpOakmomlOI0iG-7jDSJTv7jgYuxAmVlqOx-nMdENpuFWZQaLVOwiZBgO0qKTA4aeI2vsRhLQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117977097737907180825\">Henry Man</a>"] }
        ],
        summary: "옛 경찰서를 개조해 만든 예술과 문화가 공존하는 복합 공간",
        updatedAt: "2026-07-14",
        highlights: ["감각적인 현대 미술 전시", "힙한 분위기의 산책로"],
        tips: ["주변 카페와 함께 여유로운 오후를 즐기기 좋아요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9149147509840151390", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%9D%B4%EC%BF%A4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "압리우 스트리트 플리마켓": {
        photos: ["/images/hong-kong/info/shopping/apliu-street-flea-market-hong-kong.jpg"],
        placeId: "ChIJgQZrY7MABDQRnXLJEZr5ock",
        placePhotos: [
            { photoReference: "AWCwydidSrVhdLhS4Y4ivFhP-5JxwMzNdMeS-0reFj7DjFh68YNAjXkDUa1pZgqf44t4cvQOiY1TCKXIzUDXAh3Gp8K363SIZOD6lbeTaUdk9yxm1tBhPTh1ABdQKztfIG4vJlP4YXCidy_fRZ4al2Olokj36pJ2uuMMgZpyhxrzN_QqJTsvhkIqNpxWWBiBybVpKNgRsS793RiNv2Y4RcFE5eUGbBImvluFnxareZ-bvK6YL8PsxoQt4ceCWOWdYOI4mMdI1-PIdbATVo_sasQPk1FpQMKLizcZkxWVoH3g6OafRjhmZ8ggvrlxOQ2j4SM8vG83s-G8qhLpRNUXzRy0EKMznnfwynWpAMmjZ9f6gEqTFxlEKoJqvpapIiCVeXGBStNYPQXpomnoxPPN62cFRdATXhy8q271YesdrN5jyEj67WKO", width: 2048, height: 1360, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101343395683812796233\">Rayven Lau</a>"] },
            { photoReference: "AWCwydiJ2Q7nPvv2LLQhztMyjt9IVYKjqXJZyJb6paC0WBbrZrxeitUszVbX5Y07jnq28McgQJOJE9lDIrQ1sOcIZkYNogRolIPklD61JMDhSr8JYmf5tkPXU79Jf1iCd8TbYvzX7C6uMshW9CLn3D6wL5K15W-t5jX1a2Xx4Kzj-x9Xis3cWkQZR5g7ELmy2u3Yg_QGXN4mj3kUTtcEp2OLQqqhVUePUgPckykasJJC4UvvsO4UQV6HHtQj4tE46b2K5-hKB8yHfzVLCjcrW55ZUEDdc_nA0bToawbQY1EBZDQiND5_g-c_OT_KgB_9yrrRWg0a18-ds9hSLf9FRHhnjBWKgaOCKIPr8bCQQkSWuN54ryYZiA31BWlkIfkStJdqyzONv9nlvFdYjml--tktcjhmtvKov9EPG3N-OSNTZ4YQyQ", width: 3260, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101842646762850867837\">Markus</a>"] },
            { photoReference: "AWCwydjoaN5FTUH0pXZ18kkgB_4h9rAsQDfe7A9HrSc-nR-7jNFquj47ivFogJfwmel_fHF7bPnlQ3XmLhIRHVkvQ_B1IMpXFjCR9u7iVNVCbeuW3BjTwZLuRNTQA97ikPxvmGxpPWSylHettCDgYVeYHJ4Yl3mFKORSjXshXQs-Kb_ZsqGhVP6vyjVHP3GUZKStpgBL0LJLxv1-460p7FoCLvsUF_eXUVaSxxXrrwEWpp0qKS19wUJW2feESsJPn-xnl25Q7DuwPUHaCNicvykJLNz3lcEA0dHJijR0Lpl9Y86DHQx6EEXOvBYiBwApyU9QVpNPqajTDnPfOYdVOkq3tffKW2JtW7EJywEbzZmsNtZ1KohTqxTn65Hi3qrGZ4Sth9Db8Y_N2XLWzivjxl1Gveawwk5TVSjbovH6eG3_JBWjPg", width: 1603, height: 1202, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102571243249000735643\">Jim Lee Wing</a>"] },
            { photoReference: "AWCwydhhtFUZ13P6SZUNiXEUIUtBK4pqyuVjcLIHGSm6pUznNDNPJMRI4Y3X3_DF0Ll96oNcPxUUy2jY_9N8bTXLMS9Eg-vgaARcSdklpBr67_dpmUnWrtKgyhTwZ_HQf8KYomnSGqfEqItdwJZAp0mtM65r0b8nhLjKDzhgvFBkGiPC-4_uF9PK8nRmO8YVJwECC9iI7UOJljnNSn_2PG1xzx4YQ0kLOcc5zdMhhiFCWV9VRggnV-LFNK79xopPmii0T93hpzv6aNhTE6Nn5F_itWg3ZssTqhKcl8oNdBCUf65YgkoDQxlHX0Z9OhSjBFYKJSNOjY71HMAQyCsPOww87zwBMpaWNXqHsDfjClrr8ZWyiw_cJlKkJ2ptgqdUy0wExJxVB5QRvMgFdBGWy78HKL2AqQhMzFaZOl8fF6uUPT-7-N7-", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110785616290527127097\">漂亮</a>"] },
            { photoReference: "AWCwydgcnhwppvsL8baY5Qgzcrt50FM1fvQs3gVfSHog5vbWUYstMTjsuO8FFFWHSrKgxRClcGxgECsj_-bhpub9ElGjNQx4t8nkMWCLzav7V6xjI-omCUzUMUVgS4R0Sc51DECJ-h6baCzjFv9HzhZ24C2w71fpJ7iPaYHTcGrfg16zoF3YuBNHMbh2zYOW3HcDBstmB-S1VLRzHTn6Of4bRMqg7PCGirGfu1-QIcWltTrlN9xc3dGRoT3aV_2bRuqL32DY76qmNA1tdKJrR5CmogporvscJcaz1LtIFpCthO8ZL-InISTG8ZhdbdBEHwrYQnHNo4d7CFPrx0WjjNAllpD9Xc0IruY25WRgOBng8X4B5RE-Nane0Et2FvEdHK8kFSH_wdsHIHh5LsrqGtqoRsXXCvPWZXBSgdIVCedp62rzbMM3aX_THXC4n5aFrmil", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104847705775196368256\">Bob Lee</a>"] }
        ],
        summary: "Apliu Street Flea Market 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["전자·중고 시장", "평점 4", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14529168312992625309", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%95%EB%A6%AC%EC%9A%B0+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%ED%94%8C%EB%A6%AC%EB%A7%88%EC%BC%93+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "T 갤러리아 DFS 침사추이": {
        photos: ["/images/hong-kong/info/shopping/t-galleria-by-dfs-tsim-sha-tsui-hong-kong.jpg"],
        placeId: "ChIJP1HU7PIABDQRICr1tHfBYYY",
        placePhotos: [
            { photoReference: "AWCwydjMQ_SLKd-yJgftMlMlf_OTiYOScbky7uECof8HyTZjZ9gAmLgjVwrezMpZ1Kw8cAfukZ5DOlyqIizaF5CTHYQMJ9Y2fQsOzjWr-pohmew_79ktLqpK_NcKYtmTXCHukMXFC9_pLKihVzMKEo-6GSulQm2hR0alyd27BNiGOZs4oUdBw5s3tjGWUZ73OwUXqAFJhsUshmElPeXN0TV1HYE19XhiLLgYtreoioM2JYUnc_YRRWkSXrV4MqwaRujcZJtZ6jkmf5KtSe8NbFu8Dg9JLfdbXCI94vkQ8aSL3V5eAWAQrnB8LpElKG6FSIYBuEqEQMjQ7WG-bbBPjFN5I8G__EFsTvv6jyx0J0azHNoka0TWZGm-IY5qqCxxWvz7l4WmAYoPCmDl8H-MHf2vgP6RYJSGhNQl1FLb6chaburCEtxI", width: 534, height: 300, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103349158526878853936\">DFS Hong Kong, Canton Road</a>"] },
            { photoReference: "AWCwydjui5M1XJSusilDm9X4z9q07pqACEFd_ImxAhOUmFiidHMDc9CGVpAGBjgQic3V3IvRq15KvvxV5KQ5hOeftryVtyQ_kBpqZ-QGnWhap2gz7iCytJTjXCDMmFwM_ziF808rOwQEmgTTft1ruPrIyCqOhVK_U45SnsYnqfMnuklOT24HMFPm6m9RECjInDRhcvR3V-aN5UkE7BnCCQNxxWlCo0fWNK9YV1-tpodh4w3zpg1CvzRl-OMttYKWvs4-Bh80jUgVS8hvy2CWnu_rBGpSIMqPhPTLNzo0KLqMoOSKLgHyQJAn1HZLP__BXHa7vDLggiQ3uuT_a_0NE4Sq8dOw8uvxCBR74_MSZDnZGmIL-vxDN8dPEb73DYAwlduNEfRdF0Dyg1ACTlhgd8q9MxRI50yV_CXUM-dDVz8QEf8abA", width: 2119, height: 1192, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100201861877003391410\">DFS旗下香港T廣場廣東道店：喜茶</a>"] },
            { photoReference: "AWCwydjk4h9CiY0W4ioomvrssIpQQhpXC2COQyJaM7UfHu4qk-4m-CVK_gmWUwXLmnzU0r_SlSVh-AXDfve_ftsMfRTc25eULZGjdLkmPXtE5qjUyZb3xtbNbw1hAiv1aN22HRL0NVMZKtV1W4WmR7XIw8Bu-wSjowgNBU9wdPtn4yRAgRbL7BcMGTlTQo-mGky_7okHHzao0P-VcyHA-hgVEuwUj26h2np6dBRmEtBv_S4jF2I68TG5ieROU8xwu56iTvmMhhk3pL3gHp9kBqCExWLCjgR-DGkVzOzmWT_VEmGMAEVa2M3Dj1CnN52DNVJtKflfp5pkloFLEXWUzHodU1y2Oolby-S145_cyYDikAjjIBsxhZa86BZ7Ap5ghcIGyfQp9SW5d8uRYe0UG2orCR9VsEVxdiVQpQ7L-xPlDNQ", width: 3464, height: 4618, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110548583662973962830\">LAM SAM (BBQ)</a>"] },
            { photoReference: "AWCwydjbJsVLNzxVDf5yErgtfleFw7gjzvHfx8oV8tFPNkdg0o7PBk6vEwYC_EpSenyEw3uH2szucnj29dTJUk96shfmUI_ryoKWErXouwP2BOQSxbLXQvdw8WG2oXetsf8J4qxmTavKYC9Qgewg-4ynC7idxkB8rCSco_ElYQ0YSlmX4aTqEMtGw958sj52PWrBuKcOkMOekV0v8gT9moGpCiJeNwf4C_V6zmflQ5lHPgU9jhtKtRD1-kfWJtK8nOinvvmg2-gmrI_xCw_EZRHfPxgeB18fs0Ed96py5n8R-Z1j_EMTW6UiaCSapTPurHOZZp04BbHzCLOPmj0G23YftnrguMj_FtoQSxK05LPh3E6rnw7n8efIgZ8z-xtbH-pj3geIAwEu6NhWgDp9k1ov_8CCH_Ws_riMGxWVxtfdrosJgzA", width: 4000, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114890961356281185359\">Mike K.</a>"] },
            { photoReference: "AWCwydhvRr6ElzsjdfjlcAIM9lxQ12e8kxJImizESjyo-4IBR1kV8il5E-Ha4XbBg0SZDWfEx_UxSkUyXUBG_lpDKy8NJSiCngZDKDweLjYjTVGg6pGjXBgf6TKwvU1-J19VelPU349v9GAmHyLcr_J19W04qnkN3WceRTiFutp7MaOb0sEZlvHhXJ2xQ4ib464dxQj6fRxc98bH7I3YqcrSTrnqtv8xRu-mEZNUyfbY26kgXloJmhGMVkIydwmoyGCVSx3LYNvWq_ZtkttxDQstnkp6inXu1mUh7YhSeH2Jqi9WSMDOwrBkmrbVx3MQriNeyvsb59OAoB033LXWFjUvNmin09M8HDp5hWOuw0XgkqEhzitL9pnyLCfMnH7Z_kERWQhzo9psLaeknV9VzzED_RxE9QgRbPlN-HN48b8wRBD7tFFQ", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111342322328211234150\">phakhawat arun</a>"] }
        ],
        summary: "DFS Hong Kong, Canton Road 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["면세 쇼핑", "평점 3.4", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.dfs.com/en/hong-kong/stores/dfs-hong-kong-canton-road?utm_source=google-maps&utm_medium=organic", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9683233393704512032", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=T+%EA%B0%A4%EB%9F%AC%EB%A6%AC%EC%95%84+DFS+%EC%B9%A8%EC%82%AC%EC%B6%94%EC%9D%B4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "엘리먼츠": {
        photos: ["/images/hong-kong/info/shopping/elements-hong-kong.jpg"],
        placeId: "ChIJhQYJQu4ABDQRrkT3PaPhCO4",
        placePhotos: [
            { photoReference: "AWCwydiqGt-JAsj0M35Zh1MivVzYeRrFgUkFLz6B_kwBKxCKopCmjPcE7ZmtoZihvGt_P3Ah57fxxpzKfTO29u4XWQ-ehpsZI-a-wgPUwhN8h0btwtSOmXmS8iuT6qIyqy4wShvN65sn5WrXRWXbSOo7zh_-sLXDAbbFyRTRtU7VO-VYOHQBmY46xnWhSWWDI__bNzkJzAU24xGCAqcs049BUu6PCmktSH56RXIOj1KqtkOpNj0hpBVfDndVRa57Xsfm1HeuT2tZuhuXJLMtl-Jw0U3jlr9bDNGAFDAoKKfKyyj5PjXeQTREf591LqyUv88AzIJmUmAneup4ChVput1Pr9qZY8hL6h_iLcXkDls2LCAqJNfowA-aOppwkEK8SmL7jDmOeQTAFko7QLrCyTeroP_ZIDRdIW8v_3YKwxNoTh8pz8jq", width: 1600, height: 922, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104480335925830901434\">Ronald WU</a>"] },
            { photoReference: "AWCwydg8sty3q3ojXfWuPVntbQKUfnUUTuoGsbJlsuefP_20UpYskW1bDH-bDVcStr99wdt45bj4kWAq5AW452acuW2cabqxNPAel9_oYyMpX64Q-oNZMyB02L6Z2khULGJ7XffwyY_wpLXkLX7pKgSpfb2-blGqlybtoZagq-Whu-r6A4lUC7ESPW156PL10BJE0hIHVFpXaARd7uGoO3bCY48fdmWl0H9oRSaJpHBb5r5mQ0v9s3EFNxow0NkkTq67faUHKxUwJcHjXl4_KV1qUllI2xYa7K6gHMc9RUyUXHi4G3cBiBlzZPu1CkQEX9o__fyzQdP2ABS_uaNR-3h2Jcmm8cGKUo1WaQUJxiM9vsI7LpAx-ohaw9s2DKABHp9GNjNHKpaSvV91kzySaCrwoM88RzB9nkiaJb6oM_PlWqPntHKn", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113610960189708644133\">Jing Zhu</a>"] },
            { photoReference: "AWCwydgVdS-p8syNtQ4S-GwMWVakAslKTiaAE0bS4sfAudCZEXkY_HMCuqQCeskZTKsAZH3yKZCiCzbIkQtpHFjdwWwe0LBuLOF0GDLDYQerk3_GzjNYTABH4dgdfjR5YU3nZ2jQpSFg28iHeYhHf3mGniEaGLgsSk-OSoldrLm7CQCo5USFcKZgC-7tLM6Jeqmt4FRO-_wVBX540HXu3Cc6kkVxmjbmjVqmwYbLDrW1DULeXWTUFALmJjKaLcjw0czkdrVIrYt3GxfpUowj9LY3YkxWJNCLrvqfY5fqO2PGup2Lfgxvh4ezcPYA8o1qK-P92hP3C4M2--YO3jXUj2tr6FPb_Cf3oWKFkG-DRk893514Ol7oAe-En00EnS8Sz2jQIOiKQ944nfFPcPzB82cEhfijFO5gWoagPvPbmMhjVQKVMA", width: 4000, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113610960189708644133\">Jing Zhu</a>"] },
            { photoReference: "AWCwydhXMJOIJ5O3xB5qgLLGV9U6Ri2LZdH5EYPHR3zMhyDYAf3618irgBW-THlpxqeFrrPJuNOr_3csZaSLEIx52cUA6Z2ec0F4GqGTHqjkoR4Ujw0k2nGmvHTYZoXzywhIEAl_4F9F8wW-p1DxQgoJhfxj-MAezF9o8k_n6PLAGPYYi8lEsojZP9PXQ0cRcHmPbBYi21hBN5-S40FhqqXlon0OKk5KDvvfytr-uf60ECBdyz8HtHteCI8gavMq2TNDwyckub51xhwQdsnJSTy4AhvmraHsWFQVLPK0S8fEj6Gny_T8V3BkkneNOfWrxtHENnJMK5YJ8V0r6BW6kMzyDLHKLbfVWpiFlrjnlJpC8EJoNqngGv7rsnpUpukWB9kYTYal_qlq5NXAuWhtsAphfXbjqtILRKNkMuGKZMYS_qk", width: 2048, height: 1363, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112275764841287538091\">Guillermo Suarez</a>"] },
            { photoReference: "AWCwydgI8s26O0vlpIQCnutmNhd0V8HyTmNoYUjEeGN5WacDK8gDgyyE_7xMchNRknnJG2dZ0vGniWfR21U7BeyWRr3gQ3gEUZEl18Jq6slP3YD_6aYZJdVwF_krDPoLbbkJD0pR4__mlXIUvHwc2L5WQKfMUDGHbfStV0gGopu-8-4loVXrTLXbDSttwhXnn-FeUvmXs8gWkrix4I5Chvn-SAtH8qL6jfIxC8vhTUfOdDGuSZaPHW_aPjPJkuq8wy0EIjjwlOJjtWXhIe84GGRjzZGPwZdzVzZpkcepUvBG5-Pzkgpe0kvHA0GCGevvfsCyujJE0ZzSBUjs7JXcmnbBxzlghG3BrIBLXp6sbXMnI9ddInfSGcDQ74Gz-UIHouFBUPeNHYlhLo_fkrv5guhBb5ELrw8t7WxWXfvBxq4acI4", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101012530068702583934\">Khawaja Asim Rasheed</a>"] }
        ],
        summary: "Elements 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["대형 쇼핑몰", "평점 4.1", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.elementshk.com/tch/elements/main", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17152207272076068014", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%98%EB%A6%AC%EB%A8%BC%EC%B8%A0+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "랭함 플레이스": {
        photos: ["/images/hong-kong/info/shopping/langham-place-hong-kong.jpg"],
        placeId: "ChIJSUsQeMcABDQRUladiJq44qw",
        placePhotos: [
            { photoReference: "AWCwydhZA8pd-ub8NruEJuL0gVlRA9rL7L9xIKTPCUQHnElln1GYB91t1wJ1Hio1lNQAapiPrqVstLdLykFh5hjg2Ea3JTFJbbL1EiHmTHKjWZnxkhsl_2daNWrQbE0-lDaCEsFPtiDjopEaTtT9_aseUHtnVDFIofxdq6vELKXZ76gW6TCtK-yUBVOoCXHgzou5IKyl-IwNNhU329rFjCvLm7X6qk-Gr9X9MjvWrs1af6DBJFzZOc2b1khIHVESyKBjzd6ygKisoO-UPyUzcolTrNUy2fidMnYz0qemvgIWzmLB96hNSC8aXOJdhoNZzzonR5EMG7BlPpS7EXT5bor2ei2L2NPNQeM3qpIj5ndUNswoECOKyxYoK6x2lcPy6JoCgt029F9iLNNekDwwcMqgOLT5_VkdRHfXsosfTsx2Xi_nuRU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109838190133947463478\">Goo Magic</a>"] },
            { photoReference: "AWCwydgknQLCRXQ0ToGPH-NOYcR7M7K4PB2ssF8c-cnput4oILYkgFckh9fSKSf54nL2ZdDLIpi4q8ZtA-MX4KpBEK4hQTm7RfE1cXs_AG9TS7oNLObUZlGS0c1PH1pfaps5xkuUeWFNc84mGj1QS-l4FPcmP7nnINDkoObVuagbzl1hOhVBArIU-mXjJ-cIe5S8Dgmu00J0HrA1T6N47YQQxsyARwXTAFMFLKPxrNzFOH6O3QOx2eyY3uYXI45UHMCFyFiTWM5vPqHOemaLUmpOQNqLsbPS2gtJjvPTlrWPiSkVfg5iCUN5wNSYA_uRqjx81Zhy7uCp7uOwJL-I2nrmCDRZy_O50qGW4CiRfaoonBrGgDW_iuanTAcZjl9nVACXLHllLJr3_EJI2r-YQJVprpcW4ortTFYzqhwfCXEVj1OS7xtUX8Kq1waInK3-KtiZ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117170681933678451556\">Jae Lee</a>"] },
            { photoReference: "AWCwydjY9mhmHgvxu7a7Al8UncJ07MnL_CwxXlLplWCQGoKz8RjrnwOj4kSQ-ZdQhmYgZYVo3L6zBYVHBmzlZmQmAMKgEVGVTlcFU2SWrh835ghCan6Wi0Bp1Rve9AVRmrHml6TZ4XX2HmhtdZBqbtTMN65lGQq34CZZuMUYx-Sr7Qm0yWQ9VCYVt9jy4DKfxvTmDkM_NUxRaTpLihS-BJ23mP_zgZm1Y0ESxCl9esRygZMBma7w3_NORqGy_-EKm2p6r-yklcsaTLTfoozIOuHZTuXjYhSt9z6os0PZWIyvVGwAVry8xvrgsHB-3n9NHhTw0jXYyZ5sM2RjyBDOn-bdr6DrcNfER-JHeSrk4M9a1NLKFEmfA8LkKtVt_ILmocDM_d1SL6i0N7M9JRQn8GxI42cWkeP14xf6qIPYvAAU8CbrSCJi", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105782388415299272608\">李梓金</a>"] },
            { photoReference: "AWCwydilCCFa3WGZ_EVk1y2xbcYat3U_69rsi255kuKunvrdKb0MbExg8piQfU27CIRKrMjMuqavbkaaYFp3WDLfYNdDefXwThC0IH9iBzZE80EnQnm6RfvMopZ3eUHQb-ePPVdcTVE4HbOEkonsn1gbrhJO3iV87vhRYqGtqzND16eZILBe7jvdEYFNGdag8IbBbqhOQ0blT7Eqigv08KKx7ZJrlcqiYpwzSf9_JR_sTUE4hLbx5kLVKQW0njT_IVEgXkBRXjKancTP5KNR_Iu14JdvrWG7FObiQdOP99tMQJ-XfXp60hENdKOrKKnOhMzP3-fWLrlDZtj-a5IYVwByTGLj7ah0GyEQlufKmyck5LFkOdinkCKvyH_FcMtIVeRJGvPjOHpt-2X7k7woF-QP4I-Pw7NhBfvT5fWBJN0IBZA", width: 4000, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114890961356281185359\">Mike K.</a>"] },
            { photoReference: "AWCwydhqwmNySSomby-y4uGMQ9lFFweGnxiQSsOYd228k_tph5BWCLAOgtFHQ3kejvvPhmv-hlzWBc6BbhVhXVqZ-GSvSg4h49voeyMy4483buKoXDa8EABIcI4yQ_00TYy7Fy7VU00i-GxmNJ-W0p-PecWO3sot52QHHp1ji6FY6GyNZPDvTU91NO7UNnvEZ9n3X3MBQdbWUTf0pdVSrRX8SWn-Zgwt5tnRR-ed_0wbwVIdnY9L2h2mdmFFYHYNDUxhvUwmovHLBE7JPS3fuIbQn5PJmfwZu1-tjEUrbFhI9hEeBnT9W9QQiY-dhnmxK8L9XhdM-zJO_8TfHTwygHW3fPiXVHzjUv8_WxviqQE1aBs1adaVA3GkgJfkqiHBVSdGfQujZ-pNwMJ1cu4dTl8Wu9mdzeJzJOm2b5Qcr1dJ-JlR4A", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105144353926801804040\">Cheng Betty</a>"] }
        ],
        summary: "랭함 플레이스 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["쇼핑몰", "평점 4.1", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:30 ~ 오후 10:30; 화요일: 오전 10:30 ~ 오후 10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.langhamplace.com.hk/en/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12457722493116700242", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%AD%ED%95%A8+%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "모코 몽콕": {
        photos: ["/images/hong-kong/info/shopping/moko-mong-kok-hong-kong.jpg"],
        placeId: "ChIJC_lPIskABDQRxerRNtoOV9o",
        placePhotos: [
            { photoReference: "AWCwydicyDKWihtwDVkKNopHyGGPtYeaDUT8OvMUZVJ7u4urH1_TXtooMdOP27D8xBCMfe0xGp-n2PYFvpNXT9gvEpkDEdtUmA30kD7nsDIAci7B2k7XcED3aypO19pZ5cn1CqNPhJdxzVDWOjJDkWqV_icj0Rf7yLOPxwhO-VK0dXhT0Z3D80EO3raE1bVyFPyWVVGgrrluf1MyQlrZDcJQGMg30cxwUklwhBfl9xMKGxUgUP6rOnqO0x-_Di8me_qV4WRK4ecfHsBuFBuuAYRMyDZjwi1hkT6-LAT4cjbGJs1M0DzM9QiQUsjzUMK-Gt3yXRlSgqnkgqLujrUubOZCgOb3TuHhSYlTcun8uOK_VLfAmJkHEc0CtZA1UwX_Acqd0TVOuqmNV4SQaLh4wGVvo11q4cwdWqbFg2NPXXYd5Ew", width: 4000, height: 1868, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109547730003813932361\">MS hui</a>"] },
            { photoReference: "AWCwydjSJ2J-brIvkr0zt3q7bTbe9v4R0hYzoBUHsr5TQi6KTa2zJkpsJ6vNDpYBO8pV6rJPaB55IVO2Fl5rUX6Ujw5a4YWcMK2EU9tGyR4i1SVVY685ua0v_cJrC8S84RN-WZzTdIYDFdB3Wp_DSagZasc1EpJKJ3c4q80cSb8-P8QjAqgrJsnGRxGXVvnIpzpA6aMk9tNyUL4hBbtD0mHGQPMcvUa0iI8k8NIjSz3-vGi3Z7OT5HRU2PGiOZK3b2Kjt7Iu9wrhoT9tEkQXm8Km4k48sZK9KB5nLIgsDwjHowemUDQyEpJySP7oQzmk7IV-YofVMCB-JXStKYDllLpQe6hWy6FN3lRtH5oaQ0XL-NM7tVHnMcT0io4V6secPswvLWDtaYGQ0GzvcAvBqkqutXuSdfp8X-s5bIH2Bt-aCXgNNWj90wqRZ4Y32AaQmw", width: 4080, height: 2296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115558442660722949576\">Muh Fuei</a>"] },
            { photoReference: "AWCwydiDBvvKzyv2_sY329i-mXd-3EN5Fi5OpdrJbRLuhTy8m70NCoRfbgyTnF1ZH2Ts1WY9-MYd3ruSPbiN-MPg-m0PQzJCrsSwsHVbi_4pCGDIOHLfVc5bUyWCC5e3Pt6_eYKbgVAls8GOCDZOZnvbKQZmlqULCsHW7dGp46z0zTLezDtKM6zA82m-OABBLnxFZvlz5f206iDxgFgfAsppGnKKolTi-OhWg0LKaH3bRWgAEEm_bsYGuXQCNw3kUfobsLvKWMJsJZKUu77sepotBmz1jX3X4sBx-FgS5ATiRlW_LmSc_-hU2L25RFxQMq3PxRKzbPNaR8uBwlXl36q2CIo6CWAVBCuqbNCxYoDQvzAxjuUf35AsaYlAMbNRhXA5N4pZga9jetE9oYKpcWhwwawLxOFV3JiMsl--tZADnu8njQ", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108062286244081583561\">Hugo But</a>"] },
            { photoReference: "AWCwydi6cTvX3zHOcILfJcqfi8CRp0X_iEBNH34k7Fin_CIndASEhlI-sJiuJ7KsKwqdNrKH6O3HOzOlSG-ncxV5Hvdm6X-Z0sQTp4mtQOqUWM1JtNRqboBKZKZPNJk_vpWEYFozOLORWT5nFzM2JN8FFg2idwq_Ib-kvvB0iJkEg4e_mUSbMwCwo63-yReM0nBIJ01oRbWMrY4wyXtEyBxRp-LWmJODpiYp1W9wgbHJDvXufIvoQ_1Wu-b3V2uuqnzQjxexTx5Kqmiq-fL1x7ABJn__Ous-1hkL8wD8noo7WypiiIlJ2lo0PJnM7Qt1arnHI-ApcfAHWCFlUuLrV3rh7luUMn4bvsGP6kh67gNuh0xVkJWsKjEP-TOrebjxe860LI-DNHvJxNpRA_UTsHwSvbsnqhJ8DLpoxKzitkKikX7euw", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106266137398849858546\">wai wong</a>"] },
            { photoReference: "AWCwydiAYtGe_A9WccYCQy0Qkj1Ru8UOmodypHjNxNZ586BYqPkPlcygE65vjGX2TlWwn_9bFV1xzfGLqWBjhKn6FIm6AReXyzegRBuUxptI6_8nC0UWzgAU7RT670ktKoEN2q9A8IxA-2GUHhkqveRqYJX2OaIUX2MdlrCnAKF0i_g-yOXCCojjIdrvWs3qhbDnEl0R_0vhay0QaZ-VSCgPq_sV73Dex6hJYtGToSoxE-48MgG9bfZISnsw_aKr25TwF1mH3V9Eukf4T3i0-17AF53MhjqM9k63nPJ4AqFpLjMwIh2h-nxrjGkHV7ElVbrKptZSyaMq4hH_QWAf8NnjiP9lvNMbo_Qx4VzzTwXFQ0YMoIAEP27IBwNIJbQMKFmL0OADEqZEQxUYivaxD497L0BvrrB4EYUQT0tB2iVbqbIVJ3s", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114730418837258016220\">Irene Tam</a>"] }
        ],
        summary: "Mothercare - MOKO (Mong Kok East) 기준으로 확인한 홍콩 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["쇼핑몰", "평점 4.9", "홍콩 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.mothercare.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12299141882714891977", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%EC%BD%94+%EB%AA%BD%EC%BD%95+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
