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
    "파윤 스트리트 마켓": {
        photos: [],
        placeId: "ChIJxa26WMgABDQRqxMT3zb3iag",
        placePhotos: [
            { photoReference: "AWCwydjKZVd1nGiz7pHa2GrLCaQkRO49CI1oUMpdJLksheJJySIjptvbbdgsxz5-97-vR8U62rMZ-98akIsGM2JRshT4GVaFXWfb9PYwNbusHPecnrRVGTILEzXbhZk9bPdtKwPdzKHaHPMO9Gk3VWZWZMua9wf4gp7EeedqOCrMNUqcNS9gtrdoV4aOXG8xBID3c2qk5IC8Yf33mC2fNQE8EP-A8lWTRi-lSQYoUu6XQnJauaA0AV2kKhGbjq8dlS2Y_uKMwa0gHcX5PKMONw61R3yEgNIpClVwSKYjyqfY0FeU9uzk-IZQBSXVivRdOrPGNwRwbJ95cnZsRcCb24eSi4BQSnppeU-Fu1b9-Os-3MiexVa95UOiE9FsP9fhGXHrZwChaOLJPM_Ll0RAZuCZTo4fZ49wIsM7rpEGqoIqZyooFq50", width: 4624, height: 2600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106315021985982985250\">BestRestaurant ToEat</a>"] },
            { photoReference: "AWCwydjkTwOrkMybcdwqzm8PX16fQw_mb5WwRyK4LlmrMQrviO4cRBWWJ9n4Gz8L-M7e0sgy6_JlA9y2BypzDKXvELGd8Ku_0lIJWJS7VE_t-3e1SqDDGCW8iNktogzL7xTWXsDaK8rsWThS9m2pi8PVoQKyoNxvJ_jRPFSKbb9nsNLgE3Gg_kpI6rOjjNOgTeyMeZLRiA6ahWDGGURIkZXu9vHSf6gc5I0ZVqcKHb5kbLoNqNqB8G_fvn0El9xFYv1bww_8xrt1q8e6t4OOA0fWmZPZZ3-R02J83KYyUsyt6367uhT07PL2QOoOOXPkWxqpbk1T_fLH5-AApwhkNQBtDkFS4ypBsMVp1dEtUpYRLaG8gV14h2KfQM6OGQc4EtG2b6dWNnZs-2CFT7xJIkyS_xMBZsUWgVRXZ5ruDU9QI5PKsQ", width: 4128, height: 3096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114249668837645164742\">모야모</a>"] },
            { photoReference: "AWCwydhiHWNWjmdnRYTmLTFxWcnU2kr510HpDDXfCv-2GrSsXJ3Dm9-v3Jj0LWHRQakH129bAv_ULyz2GwC2DKV9F5fjrtz3a_p5HznuIy4rNdzGRXSRmOnmaKuIMkLz50inpY5WJIKtpPI8KLI7-D6nEM5FLOCAkcmUCeKnUvelCZhdowZy3KNYraZ4j9Ot81Nqv3bLeAp69lumYLBm8TVGmsQm5B4cv6-_b_jXvv8gvVdgevuQw_QSQznyXbfOLBaSXEvR9vkdU5lnSpbsXzTnvGsj5_VVgOXZZkePW9TkDjvJjBQRQM_79iS9fXHzyf7w-hkI6jAYSXOq7azoC_Icl673eHE7Ruq9BVWbkri72SVtWsAWCc5HjkIN9m47SIO2sBfH86KxPMbcinwolwQ6hGVSutVsMRei0htm-ylBhWS1s6vC", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100826871337912683625\">Kelvin Ng</a>"] },
            { photoReference: "AWCwydjv67wLFvxjFbzObJCpLz0ReCsuvp7ifgXOsHiu8L5A8yrQmP-LyfNzDT9J2EizZVZCZSwBtvOKs99EEraxwiWgku3LMp0Tl8OgDkhljrmylrCsnvZgyEc4Yx_2mtrYQlCRncdUi6O84e8Zr5b3YM5Gyuvp81JLSyZuyp7gX4NBfU2r9KJN0IDzykpE_R7YpWyifYUsFTXVx-_yDGycVS84ixV6vrUUTqpjKsncgQsr3j8E3ACcOwxWCZk1nhVTmnUt8aV594bf5fzjFu70Fcx-LLOU_JBHRDIxNUFag73yt3E33BBMvU3LyRP202dcLbVfHMDBDSpmod0Sfm-q8PDnJhDX_5kn_OqEHtZq1URGra9NSARNjjQ_yjgCXat1hUuwuWcOuuKEaSeqcCqGn27kDWLMZQR-k3ScWnhiGJc", width: 1440, height: 810, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116101236201126215903\">Fa Yuen Street Market</a>"] },
            { photoReference: "AWCwydgeKJK1cozvho2AaFr-DUfUgBpPJtKO0VUA8ncOc_schYe38e2SY9W_lOtnxpbSTvrWJPmaEe3RZpE2DmQXHBZNEPoih4URFfrZJZ_rDMBsA-E4ZVE_NC3nRGW4CxxwRHh_SGX_ndSEK_PYk-yHbxMY8RLyJEzOo5sGfXWpDRBhoNN5grUriLVpzQign-KCaY3sjON6UWSxOo31I08XnpBkeVb_Y-yzwyLXVwUK0ScImnZraZZqOdJlVQrYe1UZXc0UG3FJJD5Qc3McGatofyONWAiywY3rGR2b4veMMtoyA9iiBBG0sEs66WV6Z30MHlZDhVHNZn2O3aTcRSPCAYK28wLlE_C7xrmDXFWg1Cznioaoscmn2sK4cZomvEo24vuJ9PmM7ql2m--Y29Dz31jBt9JiaxzPdCOH-VbrG9X52w", width: 3264, height: 1836, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110160669080500474736\">rosanna basa</a>"] }
        ],
        summary: "높은 리뷰 수를 기록하는 활기찬 시장입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 먹거리", "전통 시장의 분위기"],
        tips: ["시장 내부를 천천히 둘러보세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 12:00~11:00; 화요일: 오후 12:00~11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hongkongfuns.com/ladiesmarket", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12144509685224117163", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Fa+Yuen+Street+Market+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스탠리 마켓": {
        photos: [],
        placeId: "ChIJySEHiGyqBjQRVcZqqpxEP_k",
        placePhotos: [
            { photoReference: "AWCwydjbwTnygQaXKlzjZMx7EFlA9NuO-QGrCMXvfi3SGiYhp59FrPcf2EhN-80TRdedo7snqD9r4ESnjv6yr3OoHoT6Qu9t6fgBL6YGdAtWyBJJ9JnlqUc1wG9KQsSObtDbm3NbF12a0S9xDXDDwTBXe4EXWhGZiG9H0pH5FYF-1zmNWlg1xRftdRV428yGopOhaYLICJuoYvW3yhn2wXFXO3SCoez7TG6kPX6fP_LR3JWWcJcT-BNJmSFt6Z8ubRuQ2AiqVH2eCdf_Zg0U-GjoMESQFdw4bp_WfMu2YoRvwTaaWNE44YddA45q41svI1p5U69YgVo87J_pEcCn00JdD5SXJrv22eNbP75WX8rkpVvJdTDyC3V3PxsdHYb68lgVcM2885LnlnpYtcKBOhThq-_EdJuBGIJKRUfPY-8JaKAVHNgj5ZaFOBWkrRU5IUEL", width: 1620, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107348376823309373331\">Joseph Chan</a>"] },
            { photoReference: "AWCwydgoMCptLabdbEaFOrTwaI_dfcHJ-cPS-AxfuPKuA1U6QDgXMvH-_qzXFWhRutnUH01F2qbABy2s6nHc_-REY4QMjCKIazlP2H6OOwB0hRsa7kt0AKdWLSDzAnFQf_c3nQnr6Hdao7PLtlR5u4uldAYxFWRpbNiilDcZcPkD3hKYKPuFK1d88JV4nEurhCQCMqy1Cdxl9Sgj4pgMPfjZaqz5RSPrxdGdUyp6qBNmpCAfxV1sLtgUoUpJQgItFSRsDtP5Qwf6bnZ5T4dN2DL-TNR82AdgeAJ5DA2Ub9wQTrTeGY1wSIzbJG37HX5FOE2SHFW4FRUfgdyPb5vVmUmycGPlTWyyxNp-SXhsjbTrCXVazTEeNZ4oiGs1sm6wqE7FM7zgSG17hUvwSZTCRLgp63ImSYRpTqJZYsOwUWn08drU2TjX", width: 4000, height: 1868, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109547730003813932361\">MS hui</a>"] },
            { photoReference: "AWCwydjnT050NGRZmO4cFGgMxgHERlwfTlpU4t_NAapuUWOwIqmNp1DybekI9DCb3VdjIW42vkBIYRtOToJ-xprixQKYWqa5cy3mIyjbBJHehDJJeVxDouO5S4sKwcjwc2YumFIRfbAfxgkJLZ47H11iF_tz2HFjzBXbeJzuJ7KOrzh2SW6zXoks9Wz32gzwTJ-bKO76tXscMBo23N9LAYEdjtxjf9HNAmtJOO5OwQ24dwsYil1kgYyKpYjnkABfIIATVzv1sHDOoFZos9YaP0yzoJ3uoOnOfft8cl-ulQAfCxIZ3wpmWbWb9PMBtS0gRgWs_plSwuLO1IL2hLT593aguBW0VncLX26a-nDBcrngqZVws6FLwiG7joNfxLTbgW1kta_n_GQ6wCIrSGV06HkcmpTe8osucCfRRgO_u0mdgrI", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110494225497796488728\">Dr. Tim</a>"] },
            { photoReference: "AWCwydhposwZXFIt79kQajXZdQQZ1arhOKpFPMtVHeZ4zVS-y6vAOHxNBjOgTseBbL9p9Vhp6PLMsxRsw4nMGDtNsctxjgp43N9QIzHDknEcAllc6L0gcZG9KFm1mLrVUjsE2EehrFHIlVPpX3g3ts4dbr_SU8MBOfHhiqvnGJ_0E8O4pIn-1FlrA0PgM2azdnMCta_GtRcwn2vhMeTCCznNZWUPjaR6v7jikXTMaeEGJ8n3LVciD_95O0rVxNHF9MzmV-Bpe9tAdCZdIaOu-jaaHM9rR51cZASO1ZhTVT-yxB66-brfc6Kg8-t4hCYJyxCWWRjBtGoQR85--B5egBBEEaPUQ8SQGWL73bMPZTtEmJPQKHMXZPr79X1g1iIy86ikwq_lahOwb3mOGNZ0GGeuY10AVoExTwJ5bMrXM0s_Tys", width: 1170, height: 1520, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108682225031831410710\">Nerine Cummins</a>"] },
            { photoReference: "AWCwydjEr1Wig-qUNGLMx_t5l5zJ83j0AxHJsGizy9sstS_XSs0O7NnA9kmq5K3qNnDWNhW5J1tQo-UQO62-W86ZiTm9jErQCxxj-FmQQYNfnFY-Bh-PGvOcIkXyJX1ylUCj84eJrUCJa-vCqP3FhjXijHCS8Bng2iEsJottmKr_zCaG-J9mdFTLmMs_zyXgG2QxAox8pEc8dtEthQHZYtUTXEnhWnIRbRwHnmy4WGpr4cQ27IyyY8f5F5YDv4kZat2usRHwJ0-Km5Pl_Z9sNeTHatqxGi2GueHYq2oRdTXBkvHP_S3gw-tDL_vhOnszZxSE3lhzMwtVPCen83vMAVJREPemSQ0PIK_gLBCkvNO4XGbssouRZUNlsM5vm4mvmrb5fYeq44ePmzCvArLXLVEQ92SC7x26AtclEVuz1_2shhLJ0v0", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109007546855268709395\">Chow Park kuen</a>"] }
        ],
        summary: "높은 평점과 많은 방문객을 보유한 주요 명소입니다.",
        updatedAt: "2026-08-16",
        highlights: ["많은 리뷰 수", "높은 평점"],
        tips: ["방문 전 영업시간을 확인하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 7:00; 화요일: 오전 10:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hk-stanley-market.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17960149278641538645", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%83%A0%EB%A6%AC+%EB%A7%88%EC%BC%93+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "센트럴 마켓": {
        photos: [],
        placeId: "ChIJlf_dsXwABDQR_vHeEbY8JhA",
        placePhotos: [
            { photoReference: "AWCwydjaJD4NYI3b-aT9OYTqeX94GATyW-x-FC-AVi1PmfoY_wl0FD_YfGnYK3CxiZDvChmUCrFWj4lNqov2sck6gQ6FEvQ3XY_pHU6_ACvvgLkhtFPyt9PMGgh4WdSKGo8e7G-NxaPLA78aqJlahQiB-64doL5SLQ-pYqL3zVIpLaYnG4wJE8FWHIgtoyp31Fh0y87zkVyXOrv8OJH6If-VM9t-cEafDqU0A__5JSZDV15TqV6S7a6SbWLzOlGsJi7hKHSWvFUOVZEZlakZ46XExDEmbyLK0JElOPhLiAGPfNRdnP3F8L0gO3G0CgVAzy7EATzgIcOSThIcfcONj_uQTGx_5oDP3TI5H004M0t0nWpddKJTJVCG699azNrMhabwmGnWNky05ZKHrpNr_XJwi0P_ghB8ynrMfCR6ndLs--XuXPqDKKnw8iApv_-L_JsV", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104617581839965071986\">HsinyinChang Nancy</a>"] },
            { photoReference: "AWCwydhhO99v1D53iH8z60kDgEwODPx3uP0ckC_EMaoDzoKNGoPuW4ab-hlqFsWKWg56SA53aCo14XABEU5ZAtWsmzQnao_yOSrS8qlqAVnS1wu53XzqSLovOoOThrgfOnzIydE-iW22mj3GmS6LRahxkTO5vv5XB-hSVKDjgOpUK0MnbUDwYfJ9JzpQljMXFIgBX9hk3PtvAuQunoP7WdmnQ6BydxqEAsTxdNjYaoV_GVHJrw0fubeuUtmvisq7HCHNVUBqJiJSBoHUPkERI0IyD5HdIQLCGX7rN44xxa6ldgQ84WCMoGkxdqqD8QdApNdkvStH-pwk8Bszq3aT-tPcBw3x8f-R55MA59KU7lVhmbqGBpQ11be_g0ekMfrtzAbmX4zo3X8llcXpHXTNlvi8kIg5BgR-PHic2D6xs80It3PM21eVW0WRUDQshMe8nl1D", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111397599880202425295\">Lawrence Wang</a>"] },
            { photoReference: "AWCwydhAY8l07zxDaCnQqTefxczVeAKu8Dkso-4J54Zf5jfTnOB-pn81pkF4hDJFuOC8CHT1Yqu7OEOJJiDBc-GpVS907HWJQj2cL-bQwItYR3df0F68mavMpLD_2smVYLURGrJOkb1stg5LlwwdHIzeFn0eNqRYqfcuVwinJy5wocPeseV-tRn1v5PLA4suItdr6BPtwa5NcnXCCst_lRBGmq1QNXzrML99QE7UKHxTZu1vrP_TdWKag14AJLcg-4wh5zOeUmXIdj7QwzJhL6elKfEMIlvFKJWSElGbRdYxj-ccBRhtOHk9s8quLMdzIGHROpgjM0Ex_s0jUUe7OPutv972ZK18XCnvyt2ynVAkm379EV30EgT6c93rqVDR2nTSQvuh0S0vmg2QmJge4P6wdpN0TZP_1E0DyMd5ou4wo_QQ61c", width: 4032, height: 1908, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107967602360766574653\">Shuen Fei Yeung</a>"] },
            { photoReference: "AWCwydhKWO4OFW_0p2GPVo8OYPGVbID85r9Hnq_Kbexse_tKm9ZJWotrNh81mIDoy90J6zgVy0KCdivIFtmS2zi-T3dZjiIoaJfS19axWh0wXXXPg-MSVfxZAKVVSM1BwnE4wlCtFPxoXdKvE_tCtdGnjh9YxtffKqHcqZmU_30SLA3ftPtVVLLalJ-0ARJnerJZD9s9bh50NWd9kpSgwt6jVRxs_IJcidsYeF3WLLw6d7sGVCrGf9xZnvSHUR_CYmV5lcsDK8D-V_L37MJZzvR7RlFBBcDu4WWB1nR54riW4UshKVfmAWOePt7P6aXayhfatb1hmz8xcqCsTAtgvUV7rW7cq3Ai3sb37xUXQgKfJp60cd-8Cl_EKliCdBjQw_sbwnpcyBLjopp6abNgoiwkEurQMJQWXOgSWbm1C8bx2Q9WgEG5", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102194425455220885101\">食いしん坊小説家</a>"] },
            { photoReference: "AWCwydgwZrI-7IefCLYOa5V2rgLx0DjYNMPXbc4iucVcrGef0G25W6I_TAKdxKzEcY137lkHeYELPnk9Ofw3HcaSNDPxVaLcCOrTcsi_lvrojDPITkeLdK0th9h3EO-Nu-YFtkMeqSOzrULQbRWnf_uh1wpAOdurp1XN6DWE5Ur8gGOUaFvYsiNh-m3h_e52H9zF4lsv4S39rcbeP0-Pnc6PmEdWjuwax0Vwp4m6Y2HtTMoQTbizGAquBTrqS0uS2pcnCg2zQF75MVrNXJpEOGl-3BPKQVbIaeZmi-IZNey0hQ8QPhlay16C3CtYmibYCT7VYZGlCNMpOAA_WsL6ZHkXwiAQYxiaZWrT-6JRN6jkM9yn1XPgI52fA0yZWuxptg8FL3MLS4hhE9Y_-xMS7jdRx-ff3LDsU65DHwwM8JwdhVyXAg", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103312856265645369371\">Frederick Lau</a>"] }
        ],
        summary: "멋진 물건이 많은 인기 있는 쇼핑 장소",
        updatedAt: "2026-08-16",
        highlights: ["감각적인 분위기", "다양한 물건"],
        tips: ["여유로운 쇼핑을 위해 시간을 넉넉히 잡으세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.centralmarket.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1163684306403389950", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%BC%ED%8A%B8%EB%9F%B4+%EB%A7%88%EC%BC%93+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "보링턴 로드 마켓 푸드센터": {
        photos: [],
        placeId: "ChIJKxcIvVAABDQRMflIPMVS88Q",
        placePhotos: [
            { photoReference: "AWCwydjK9ZSpR9gL0xwLzYLhx1uEyqH62ehN-QhpxoDIw4zASQtuK0dWjhFxkHLqW_bE4-_doaRaVJYDRe9Rbu4-2ATNjUdeZ4RCPm8ITQjVJw6T9OdjQ8eAl7S1IdEsZ7UTzTVds2OlLW_WqrO4irz6E7EcJknLC5LbdQkMMHJKiB5EMbft1YCkmhbJbSmgYHeXGvBS5N-QDiAUy590Yby07DRypwtIZa8xgs48O83C56Gcy7yWhrpIUF8eJM1uNM5l9UQprTIStkYAL3fi68HLDHOLIBjjlUuYKDsSR2zg7U5HZ-2hnS4xZp5DE6gsJWc0sk6APIPxkeVmtdBSJwaby8_Ou3JGi76A2eJzACS4ZfvT2wDihx1GuP6A53739MbDWm9jVpXGzXxV-m7TGJ6V2uAIvB8cTvcfZ-PgjWBxue7mUw", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105732667335415294658\">Kim Wee Soh</a>"] },
            { photoReference: "AWCwydh8MHz6WyZmeZamGOgz7xFHzlgLDgOtewV6F6Yn9ErexV1l77a3qGa6y64wUPit1-eDA_-IRYIQTES-4B1FLUx3N2Xj-Tgu_iKeCXzO0BZl-fZStfML_zUaJfHuaX_znDhOU5ZE-ZiLxS_3E6PMfIFloBgfrIS8I5H8Wz17ddnFVe-Sac-OC1uOG6Mt3KjWImKQjOfkzZp57vdMvVH9XxwB_-dy3P9RwdpzLleRkXMUgRvrOaZLEj_UN6HeWl0j_2ClQC3NCLTPurza2WRyFjMSEbkldu8rnN279EI9dpxwG_oqDjDLj-neESPAvVkaAYgMI81ClotJ2hBrLcZL6MibQh_lcIVzXm8wybc7q7LwIjs05niv_lRFlmFUkNPVXqIN_sjOHvXqQpMUw5uJle2j00WVqV6MkheAWj7PTmU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113954163262941121028\">林育明</a>"] },
            { photoReference: "AWCwydh6irEHP42t7ekKgngBiji_RR7tzJ_jFEZRBNKimrZUEAdyH_jhM6FZVdlZXLR9WT5tJgoLmj4derCu9wsVAkQoopAD0N25UUSTPXXLcEpT63_i3j8uaReUQjdiZdl7uIT8LR9zdcEOzp5fb3_fRoZXjv3wDoCy4hFWowAjb3MUJABoGPoM_xL5s35hq_WgiIITPd83sNVVoXXDlleAeB59MRhGmWL2CBpfuddPh0vATfQ6vq9_oash5J_P1HWMZOpMCnTuO9DRFwzKnVa1hIaExy7GV9-JaI6LMpZnLtzQUJeefp0TJVGB_m0k_6TADHhpAj4t8shazDDzrbiCpobZq0pUGLKjXvsNdaVqo1an937mEm_lxth-N4ABlOSSk6iBgO2xZDj2KEeGYFi12nQUKQjXLwzn22x2_0Do0dXH4Q", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110415264317781661895\">chui ming</a>"] },
            { photoReference: "AWCwydgnAZmeomW5hTchVigTGU6-Npkd6CaaeZAwIy3LpDira8WR5-_JeceJAiq8_fIlMfGQGUk3eOwsYhSQlK_r8I0nR1kCrxwu2B3cLlPBzS37VnyAUAj_MDvcbjBC-ru2REOV-4sL_vzY4rGM4aBb-9hjpXwBanJyvAO0Mt94-hmg2uzICPznL3ZZZPayhPQA9FktH4dTFlRG4MY5WzWJWaLz--EiyniB7T4ihOmvzAwJwpU-wfJexoK1UfwwjqJpty8feK9nCsJFMgWL5qmVlEL-NiBskpKQglCLyJM3OgQLyREKladzT99S9-bneZRAj_6pHxdlFUTgLVZ-f_6yeicVcnu5XGiS3lCEZWVbdufA2SIT_XJj7oggGN-TGPL9O0c2wEDIp5ltt1lC2sqUsqJMOSaYohMO7chPO1eWl0-RhQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118156159009118797570\">Jim Chang</a>"] },
            { photoReference: "AWCwydiQx3sUZtxPN52xEurX35MC5Ue9KJ8XADcxx4L1UjLU0yLJPxbOzwTuTBL4NgqdZYCt3oEW44JHwnlXJZ2dD_yPjTGFHqGWxA0IDlParb1FqlQ9uEfNdrc3R6VUJr0rfHL8tr68jxmipY0bdPmaG0ESJ1O5tW_NDojm48ycnt2R2t29B4bqbPxARqcvPUIXKoT3o8qnIKlC-CggfNJr8eKEFJ6SFOIQtU9mc96iJ_z8zKi0Lki-AFsikziKPZEFMMmR1sWZPaQvSs-dN3oVLbebwTMZNwSyd4GjsBsrfRXvaip5_HZsGGOxto7lb-qK-0B7HAQ3s3NcUjCp8k0ToIKU41M8j28e9f0euKIPO9ewdWi-4TefKpVRPLPGvLpm6j2wFIZyf86iyCYY8Voi5Q26Ysn53cTe0cQEqMLt46AckRs", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109489502271954945702\">nadeem siddiqui</a>"] }
        ],
        summary: "현지 분위기를 느낄 수 있는 시장입니다.",
        updatedAt: "2026-08-16",
        highlights: ["신선한 식재료", "현지 분위기"],
        tips: ["양고기 카레를 드셔보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 8:00; 화요일: 오전 6:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.fehd.gov.hk/english/map/market/market_pt.html?mapID=628&type=market", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14191777857848015153", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Bowrington+Road+Market+and+Cooked+Food+Centre+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "완차이 시장": {
        photos: [],
        placeId: "ChIJY6wLVVsABDQR2ztReZmtrnY",
        placePhotos: [
            { photoReference: "AWCwydgpLGTYYAXG78ukGfCZNmW3mZ2ipL_Q-oEXHnl9dFcR5D9OVAUwUmHYZcfGWkk0ST6axz2rrGJa0gJ7ryhFKslqvwGcnBhsgwTOnBKc9knJ5Sn6N7ldsYcl-8xiRNmi7cy27gqb4BFdu7a7ch2XqACNUkS87Cv5RF7MHyxD1eTNtJCJnZDjVQ-ftjUgECEUYPj0xeVti63C6b7uuG1jrfkB1zvuK3oPDtOecxGdmvMXsoZQ_n7Msxj_GZzPYB3A6pNf5eePcM2VtoAT5aUEWEkUVw2IcGnO6SDmmXCYwj1Usu05i3KwBM3Jm4ApCva5NsYP0jNeq3ZPt9knelUwseS9AyUCEk80ai7b6V3Z_6mcK4ZKlFmWTQK7kG0f59EitZ0-vSvwbUyyXzn9wFiLVN18rp2RxSf2WeD-1h6fvoatzg", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105020856289334940634\">Wee Ee Heng (Weiyi)</a>"] },
            { photoReference: "AWCwydj2sYAYC_ocKwa9caydAYU9f21wUVjqlSh0_7f62sN4ITrD09BTOcN7fA2zNH8xxVmcda9jPOJMI3jje5zd_UNPFYQZaOoNjjDDdNma8ZnPK87fE7LpBiFptjWGeEMAfRWFCl930Vf9LC6ybGOcboWeOS05AwXew7ICtqCLRuEapTR7dWTQqBYNykWTBuJKAfmIweD3g0hoTotEujGca5k8fhiHZNngunuj0MfYPF7fES-PTfQxUPamfuuhJ3fKUzXYp_uQ14znaBG67QGwzxqUFl6w0zHhGqohXD0WfRJkFKPUnSR3qoxsjm0fKIjquuQUnE-OgrqD-PGeMT8FyxlFPlhRp-V20u_OGTKw8FmLiaHanT7EXz3sK56Dl_dlqkU-lsBCHIvEwOn0YSDielKCjtpqOs41N6XOUBe5_TUUacxs", width: 2980, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114850495448552857774\">灣仔街市</a>"] },
            { photoReference: "AWCwydiMZRhpAqiJja_1ERSitQ-qIYIkuTXAlhdAhI2WwN81LlFyWjVn9TiNbALTc1WCOQ1ZHKAKOqTXa4dSsgJ5A5KUh-TleSed2BlVboH2fHSH_h8p5AM8b2oCmZFT00ILjl36wJTSLlWC7c4WLCvSbb5u3iIYdc7PVgBNPafJUZJCB5F-MPbl6EFReMyAIbLAxkr47o8sGTufd7BLsQgls_7O31bkZnm5YxsN0h5lyTl6fk3Ip7bRTUzZVWu44yxxB9TovuPC87v6ZlNqLAV1urGiY0kfe7BlgmBvt8xsbcA65CBqlOnsh7svUa09BlZQ-fAwnbKU3hjytKKg590ekI6BrvVY1LKW_CQ46uA1SDEy6S_dDtxzu89UKsdtsC-fPcvPmXoO4gcvkjK_29LCOOf1NJgY8j4BzmjGx6jP7p1yWmd-", width: 3968, height: 2976, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109455860252704839005\">Audrey Ho</a>"] },
            { photoReference: "AWCwydgaZrQ7Gx2L3131M1hGPe3BvxBNrsGGKy-So11etC8_km_83S9LS7xOi-iya_zdiDWW3BNSvoYw--D4DoGAJ3WysRl83IjZTdFPqRWi3ltL_S2vA1erqwYp2EeC2MvqO7G5l9j7JRvFKlU_NfsDYXt3M7j8EFKhPB1NK584xzQLtlzf8mgJMBm05ECyurCUVZCcDn5BOgSggc4TDMFfybv6eAk_F76Fbvh_xHAHGbXH4glu4agu26zzXPgznAGzW30fWBjFzDK6GxWit2BgYMPL2MdWof4ME6uUt6fwwI60iiUO81ug4QnEY_oR-7VB4Z7aJkRAOxsjHaRq-bqV8dRbfAOXuk4Svu8be7ZgXETp4Flr0I7dwUD6jKoQziv3sUqCkkChMISY7zkSD5GC_fjNVqIio9JHmWRukTCRRdk", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103049106155375139847\">Daniel Leiderman-Gueller</a>"] },
            { photoReference: "AWCwydiD1OdIeP2LIeUpyPCnrDe21QEei5JQvS_cFbbupt0JMpFAkQPvl9TeEG5tSPOgzpk9yPUNvkGHmpwRtBq_VsycrufkKMhUD0QSVjoFNUEBQ0VNUX0jjV-Np5cZe9NImoYlMBTevMgwbsjOgfN_hzARDh0gBczDiIDXCiA6OUt34J7sayVUJ8xK7tSDc8yeDHzFaN8v6Zj63pw1pP_dgOhgtMy3M6M15lxB-OaQtjQ7qS6Tuaq4ExyTGdd4aqg_mnvyjs0oVFYmGhotnzWkpSDJlwLQQuKTfHm9knvDMtug0zSnGosdrzr_mMCvQFyJ3KoaWBIXqOut0ReKdELcDY6FgcHHLPvWz3UF9UgMzNfKBCn0WkBNgeXBboTTGy6j9pZeldKQmQfBKTX70-Zs_RzsWSQ2yHFJr0xSpR-5IHi3dg", width: 2699, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112963722728888684171\">Des Leung</a>"] }
        ],
        summary: "다양한 상점과 정육점이 공존하는 독특한 시장입니다.",
        updatedAt: "2026-08-16",
        highlights: ["전통적인 시장 분위기", "다양한 상점의 공존"],
        tips: ["시장 특유의 활기찬 분위기를 느껴보세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.fehd.gov.hk/english/map/market/market_pt.html?mapID=626&type=market", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8551963617100119003", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%84%EC%B0%A8%EC%9D%B4+%EC%8B%9C%EC%9E%A5+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "그레이트 푸드 홀": {
        photos: [],
        placeId: "ChIJTR2EJDQGBDQRSjvKsZbTL30",
        placePhotos: [
            { photoReference: "AWCwydhQf_8D5J1ofFjcQF-YfsG_6rmSsLD_9fzpaVf1JBM4Gyen_u81jssbT-i5REkMUKBjIdOBgeL2ti83RBwNzxB2jJqnyU87yfH5SB0XpoBorTct9rw_N9OdqTU4fgBtRkAHRF4muZ_vj5Vc_wnPNFIo9Hqz7hIzW26lIwFmhfbjhWwVV7AR0OyYvaqTuzzH03oJV7scxNBQiiCsoQ6V89paOQbc86jkNngPWEG9I9FT1oZKRZOOQ3woFZJIKDWj7AHfPyLAMTIMOskae5Szu3Hvwf-3QmnNlkxCBV21SmZEU_LeN2ojtk2X3bd25gZOxb50UwOpivQasiSPXrgbMbp1lgkmhHw4gOXhOgoMpeH5QjgAm2PwGRIZbFTWGavF5rMxWItX3IqQ9go4H8PAwF6VJNbZmnWKAEPMXR75TB5ySZo", width: 4800, height: 2701, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104881211418441267546\">norifumi iimura</a>"] },
            { photoReference: "AWCwydhOhfVCQjAqkQSOzauk3g6FG1_hJXBliohq-ZtsqFvkHB119YXTUQllymOokwuzNbBi_8AIElkJJ3PwYHSwpFXNfnXq6tDOZBmw27wF93OOkuqpFN8xV_22e_hscQPgTf9tuAujfomgHoZLOnd02o1J-ARRuafVp3XbIwXrDMWEHVhxD23ZzGX-ILB9ElG9dg_W48YnoRTHhnl1FCCDh5A5ee8PuAGAKbC4mIFoKFf3JUtm8DlvCJ6kIUgpa4HOMogkAsC97GdGzIbubuZfjBg8T_NvXr9BpDDKNneFO53YHw9JPt0SxZIQKrKuYU3u-Vthg76avy9SHCzKw480CA3zTykxls-Ks67z_NPeeNaCm6UTvg-jC0KXc7i5z7GeFwX1BME7Ugs8wAdlj4baxpr3jbp9sy-3L0O7Azzuw5BpWjaGQ1pYaQfMvka_SUH9", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112950356344892166412\">Kerry He</a>"] },
            { photoReference: "AWCwydjjs05H01qVWab3r_jck-xFDICvLmotXHo1sn0dyVPTp9l7BkTNMLByeHKR8Dk3BY8cmBOS5J9PNXIk_bEC9PLVXsOooVjcdNMdr8aUWD2z0q14BsBqqEiwGx8S2SFztkCVW6sVb9L3cG2bSBmOn2g2nfRG4TYZaL-UmCKMUki-LyNprQ_4_tw0F3lWl-Yol9hwS2gZxOSC6Xxd-uL3SLUiTgo28ZGdM4KzM0BQa98Zz902bNCk7ViNEz04GdiOHjbo8oSAdoPfndFkUy5B2OR_MuIr1WxKEYOvOLazZ7DwNd9hW30Plzkik6YMD4CVpiWttEczmBU3IsasM3sv9zmSMBHgse_vIXJs9RuU0F0QNOsG98Ajryka11kfmzFigBnVwykZbnP1T6f6PQ87xsECAwq8AeI6sME3bFIN3SNrG_VK", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118124201197135679554\">Chompunake K</a>"] },
            { photoReference: "AWCwydjlihCaIQRmyandaebdB6du0rakAu5JzK2kzXW0AsfJZ8K3PpamfUOSPH5sSTdXMuPq6vbLcFoc5tUQ2tLVgX9O22q9kUwf6LeJl5wzDXZZmHUH7oiiOj7syNrROqc5k0upvG8Pe-ORT6fJNa33_LEJ9ODiyzEFKDODCIUjwZmP_1DpbTNoFkO-nzBJ00nECJwfzHDocPWgag3XyDB2ZWiaa4eT6GmNc1s8_YTxx38-XNwCFca_YZ6G7Jm91Le6X-Di1U85-ndo_6fhpCMW1zZes0nIru6yU9U8chcXb88YR9ck8r9by_FYEd4kAT5jSaa_eYBJtf-bxlE06-2GMhgitUIbFQvH5Z9y3YEtB7OAieDg9cQ5a_SwalxTLDie3vbRu9UgP7H7sARH__7YrqtLlVC-1K8JQP8vtq5eCbcEUzEY", width: 2618, height: 3490, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109723094782336729793\">evelyn T</a>"] },
            { photoReference: "AWCwydixtWauMCtg1_QSZwGGpVjTVQjF5W9j3lScZ2XoV-u0n-Y8AqF--qnYBUPtWbOZ46-0aWOT-qZc0hVczHFBJyxBubAd3sFWGli5HxDKb5e8CCai7yk19lPn6vpdEtz3kc8VU_N2G0FFv8veaFaJowcqG-EJxArqBmlXcE_ABQJ0LYBuRGXe-pIuJf5HVDiH_GS786JxI2lUa0kFDpu-0ST8ddktGhdqRPpuz-mKetkVumDiEw8ZEeuTCUyK64fAt_t_ogTmscNkeqnc8b2VulCzJMSLriRCR2q6do9qjT1aOuGSEZmTNePW-QLacb8s6GN9U2AH7yPvvs8ZIsWUzGxIi9txPfxCCDTN_4BHeSoZlzVQF0w4UbN8IMH67Aqw6EYuHezfHXKI3Fn3BPaJyt2JR8HibBrZgqega236jHpfrw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113597006611095806103\">Glenn Oppenheim</a>"] }
        ],
        summary: "다양한 옵션과 넓은 매장을 보유한 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 상품 옵션", "넓은 매장 공간"],
        tips: ["매장 내 음악 소리에 주의하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:30 ~ 오후 10:00; 화요일: 오전 8:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.greatfoodhall.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9020661222827768650", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Great+Food+Hall+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "시티슈퍼 하버시티": {
        photos: [],
        placeId: "ChIJ9-0FrPIABDQRuhB0GVH0Nz0",
        placePhotos: [
            { photoReference: "AWCwydhPzGuqoRarUR8ZhT2uLAuK9kYbqyaU9TTzLX8MJFeUVU-iVPuDciwTHpE6b55k7MWO6Tw66Yaai0kmfy-TkrNQPzzNiIbnlDEL8hQHhDz28Hj1xD0R_MTA01kZ2fIJpucoj3aWoVX4ZwFyQBysB9WBSM6KiQ0Y-oURHXbaYx9NJewTYETrXxdUxbFPxtWN2T9Y_X_7wYx4e04Iq1-q9UqhQqa4obAeMYzqc2IMclzc8lUdwVfQEE3-WH6ooEt2C2X3NHfeQRP0AVjj4q_0RJ4ZhBQekEmQUE_AF4ePFt2Id7bqopU09nHWA8mgprhVM-JwW5yjSQyPMNbeYxDx1yQbL5EDdSSkG3jPVy_4DM0lFm0B8GGgeEXEi-cc9FzjcMeQnblalIBUO5jEhZOPaYdBzdyE3gEj6qTGF29mTIoLT0W8", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111371499899554356672\">F L</a>"] },
            { photoReference: "AWCwydg2FbrTaH09vXBASH0XV6IBjE8DbLoLQdk40YM4JkmduSUZyzpWti9-_t4yQBuCpiN4ZYEnTuI71Hld7LX-DTDP0bQt-oNBQlGiWOmqmA5xrSXjomBUUGF6KDHs2XC53h3_zqwB7Se1P6-ZNrdeXk0MF3kpbgVQ1psCq7oRwSzFOBSgLDyUmOf6OuDAIjL-ujq7Rs75Cptq_cyhaSTf7WDleX6nHpkW_EHekLQIP-O3xDcIFGiPrjmfdDO33TrPggaDiBUJ7-xC3v8dTlXlpd9mrmoqtEnzsThk0OAie7CwZdgXegeL1cM4yRbDXJzcq1MC5fhC-kWGNFe21Ilr_NcK7yx4fLqhe7HCMlU3foMVQgqYBWqDkK8S-FGkHFSJ4SDNlffTtgEmlcsI2K0YDtyBlv_Cs1SQXO9jIc8qyPOkQQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113154005056185461774\">terri blue</a>"] },
            { photoReference: "AWCwydj0yWmjq21NXZ-yExG1EJXQ7X8s9U6RnPhKDUVu57cjk_j8ETk61I5OwWScFPF6bwaJQTZusgkKsk2UdScnS3mVCiaZ5Ozto4I1YHCR8POJg802jn9VlAzPFX-UsdO_T1kJQ2D_8V-SiB6KGA7-h5idrFuL2OVn4GrGaSwgBdoWPvfi3NS8vmCmhmj49J9QBwejo--s44UAKCoFVQMi5boJBUAYoGBeqtnVHmkd0OK4eswNE_7_z-XENgb6mVsf6gMMInZ6ejs7fmjca5UbWvIvrsu5ExInSu-7hF7aR8KHttzCx2X1q8pSmY42EzWZE5uiNfypFVZ1TY5S2W4PaIfteiy32YBlmFE7KfSTOKb2ZxoLi9upAfJJzvaJbkD8CqVBVEPcYSY-UU0kMmIddQT4d6_NGxaLZBzMX56zaUrwUQc", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101275472035271119018\">Ray Liu</a>"] },
            { photoReference: "AWCwydhf07vKdBjy97KjAZbLsoTKQXI2ZpZ-0PIsb7kqUFPMAJtG0VqLhdKFQMAvBOfByhpovthZxHmEzUOsPq-ivijCjn2FnBYiw7yMTXpg0tYmeCUv24OBYP3BP6G8Q2j5Qgf15ZUKbbxwxqyTIeMrrKS6Dq4I71ez1HeytIoM3PHtJ9nX42fikqNbOI-ZKGUCnHngcOEu0aJf5s4T6ug-0jSZTBGSymO8p_KhN88wvyB8Gi2p08eb1p66AMxbJfUeguA0w2H6hkaIkcsKsEAxlRKHQxA7fuD6FznaTu5xhardMOtHjDSMRpk76F9fyQZ3XQyIgC-vab8D7tBm75fRGH-Xb4KPruy5BWQGsmTgljQ_bMa5J01yKYxRJa7fK091RF5bSsHzEKJIPeLmOS1I9ttiCEePwXRTSswy-DDCkinh-KD2", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111371499899554356672\">F L</a>"] },
            { photoReference: "AWCwydiedQT0woTU6yeDxf9EtpNqN0p-Ky4T3aM7bBU_mA1twyOpBd8Vr2G3ywJTCKvmztMaqRMjvsbgF9geWAtBzpq6UOp_3rb8iZVR3fPQ3r2_wVNeYMI5PIwlSdeYOOS2qZWMrw-v8fWIhcBe6k66pj_tAF3pR_PTzCLNgMA-D0qdF7MXY1JRwMr_UijE3HuF4RbmjeBRAcitIJks3HETeAA2CeMgL7COQSdR9rz4QEWRlknLiv0HV2hjnkXLUBOHLSDbhoWKOBbolVImALUnkvLD-xEmz2a4V9lXf-6Kw2lJM3MeTEnbkApMEFcXPiP7mS_N1NbbQ53XIcsKMQ3dTcPufv9RxEcptG-eQo28dmN9GqHbG7Vmq8Z5KALXzHAntgMMGJ_gnWxsZB5hegYX5e3of1fQbDLf8ElqHpbIJMs", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115861014529114943145\">최병은</a>"] }
        ],
        summary: "다양한 상품을 갖춘 넓은 매장",
        updatedAt: "2026-08-16",
        highlights: ["넓은 매장 면적", "하버시티 내 위치"],
        tips: ["하버시티 쇼핑 시 방문하기 좋음"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://online.citysuper.com.hk/blogs/happenings/store-locator", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4411262989189255354", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=c%21ty%E2%80%99super+Harbour+City+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "돈돈돈키": {
        photos: [],
        placeId: "ChIJV0N16PIBBDQRHO3wYFp16eo",
        placePhotos: [
            { photoReference: "AWCwydifENU3D-C96JysLP6wr77L2agj21Cceot5dW4uLL7xANiXT0_C3H5t7Pc-dBhhU24PcEK9WZJDJdWoGbRcaWA68uj8kpzEP3kART8d-YHGg3cZL2heu7EqCP0tAS21vdKorhVwAa07IE1TQs3mq_bodCavp6cWddcQ7nVnsBQ-mMNQvBnICvcsthSYaV7dt-qIKw-Fufyu0wA8QZUiOUH57LJBvf3nMbII2jbdx25ZCdNCxjWWVxS_hSB2zvFX61uyilgpmGSEu-rLtFBVRK1m_zG6m7lybnMKMg63L_1p2C7GqxOykWerrXppHrhVzHJJUIprnaMlX-w7lmkMONUxhuEamDUnxkeYVoWKHpGFoW9SWRhQEeBr-KTefrgrEvYpySzuuHzbSJtbNAUh5I9m5hogsTxSUH3a0ZsyydJYFqh5", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106312285258947358056\">DON DON DONKI Tsim Sha Tsui (Mira Place) Store</a>"] },
            { photoReference: "AWCwydiM1efoJCTaO2_X7igDafd-GKnU0Rq9o9D_SNx8_qglw9aQjYMSCw2K3s-YcYR9o1WO_s0sdxI7BsUrfh-pWKgVEXZMzNyQIgsEZv3pAmvF0H6wpMhhIhN1JIUvJsn779ZPP7gpFWg0pBoS2b4zUfnKUBlxhEZ1yGGhtTiqe1sD_2q5FROOVn1YzswPVqZiO8LT_utXCZlRtLU1nFCw3F8XAqulDqphL3lW9eVZPFzXEOEfrekWBgrQtRp-hImmZ3wtETDi1l0FWIrBrHJuh7WI2DMXoM-46bTkCKMt_aYnK2fcl_CpawWAWdVQN1-KVjCFo8RDTC_M598rzoOV2ULnAcXoMQlyXwhVhGQ_hU9BL_ak6nlwyIRm8TuG9vxzYGi7VZr8adoyeTDB3aEaY_6dmQXBPri_IpwmBse5QazIMVHtx6A1hJt05gUulQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117193515735921710343\">ahn byungil</a>"] },
            { photoReference: "AWCwydigrPHaNPvZgp9TA2sLbS7jfOp0MDtDEdGF1FWErK84GDJ3FfNoepWacOZnOseHoTTiMfafs-OY7DgrYHioVr7xRTmvCMl-1ZYVSv3FLFD2S0ysKouugPs8tTqf7YnD-StLTxlJ5TKam3YSlGGGAgGebNe2p1IRp5-8MQLh3bR55QnMq4AUE6tipbmIm3HrP0sYokOMyWQ4uZwwQ7dLGPPDl6NpG--gBp-672ACTWU-3RhXxeh9EQqMNYRT2O8LHX3gyh2Uhe5vV-B3WLH_Rm7iIPk-1lmdHOhJcz_5w5tx8utD2d1ffsfcZW10Q4xYvMKNWK1X7mFG6do4WGH0DYAlTfHWh2yA0314LQY3YOtQ-nagoHqEMpri3Y3UYHqe2dNP9XyEuTe5lf85T6hYuymitLJe5BU3z68KeBkDnVDVIGE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111371499899554356672\">F L</a>"] },
            { photoReference: "AWCwydh1WF0pMlAknNPI1XjDHQ_jaD2uRQBK4W09TdpHEA9Jj_0zX-_-kHE2EjjX_-in4RDBFmJUYud8waVmcMVTmKA-iDxTgs2x0eiV1GVfrWodpiL6Y9kDS1h349w_zBRnMFt1ZC0NEbE21qIAU4EOlbNDl6uqwuVLL59XiAV1491sKOvdwq7hqyKWjQyr10QDa5YUCuJrPrqPY7VI_2vbdBuTKyQCp7ioVKG41iCg075gmeSMgVqrr8vKUMVTwjJ4k7TS6fyokLL4L24ZfJk1UQSKNxBNPsUgGbYIvOTBqjpRjCAH3ErpUbDgUiSoXsdkMdeOLe9LEjOtTbgoLSom5ZQ30H6N4mjjH-9sx-g9Y0xCGzvpUS_wPVaips6Na0XtlKiL4F78ZcBRKWdhYHYNEjYYcwiqGAQVxf_JiOi4Srta4w", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106312285258947358056\">DON DON DONKI Tsim Sha Tsui (Mira Place) Store</a>"] },
            { photoReference: "AWCwydi8q2WlGwDCYmxfE-H7-OBZzslsJQyd3yDSLFhJnYuk0o2AClj_hcZn1ADBkyqiPb9Jj1RLUtI0nvroqrwymqRV6OaURjk6L25aRv1NhVmL8FJwsCXjCkGsRjmuqd1YpKt-SsCsyl7zu3dZ4eRDGNYnq-INR2-63EDhX4IXRQ1cXCWrblgFyOPqt87WbtYrGhxeEVAx-k8KghHLtVBNDFRgYeB0ybN9ven8okhmMUD9GydEBr9YDeGi8lIku4hKE9hxD_atHZ5J1lBAUMyxyx1dXh87a4MONwreJEcG7R5Fxsj038Eoj4-u2IRCW69KogJ4YlKyHcF2blD7KfdSz4_f9V6-a645rUnqHuPKFo_0Riq4IHx9MDIXOEdg7N8vlQLMG_TgxB8tQBO1tbK-IdBxafQxoLtqJ_szF1TjRU1qXOmZ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106312285258947358056\">DON DON DONKI Tsim Sha Tsui (Mira Place) Store</a>"] }
        ],
        summary: "24시간 운영되는 인기 있는 매장입니다.",
        updatedAt: "2026-08-16",
        highlights: ["친절한 직원", "24시간 영업"],
        tips: ["언제든 편리하게 방문 가능합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.dondondonki.com/hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16927189705482628380", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=DON+DON+DONKI+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "웰컴 슈퍼마켓": {
        photos: [],
        placeId: "ChIJk3dQL1QABDQRM77UUNtOEYQ",
        placePhotos: [
            { photoReference: "AWCwydiZLe1QAauH2xbGZpJlpbWL65aEAtl6k9udihFVuEjTNph7K1GpjStUaUA5lX3gnvGk7JZDkSMU21ZfOGRvo2rBwgD5fk-VB367EMVmmvKUUSyhKC2lMsXKuSyiUHnUo-kk2Dl-te5P1rJHXs2D5Zt6pcmNBnZ3rE7EdQ4jB6nuDCmqxuX53MWCiif2Ekl42OpH1GxamXK7HZP8sl27fRHNRO0ibc9acYAOpnrgQiNrzQOeTZx4P2C_1lEpI6PSLvviIKKKdZOgFGhIGyjCf036BbdxYOFdkSlhUIrXKCRgt0xquJ3KYqkOQmUtxcFPHOCcaoxePXMPYunDgO4mHB4RvOeIZjU2P6I04cn37jq3hrRpaKRWvrzhPWtsafw_xPncrRyx8gDaR6fCtBSEG1vSd9lwGpO9AUfTNsKdWEGWQg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115853780114203717194\">pauline wong</a>"] },
            { photoReference: "AWCwydgaHQktGhmuJiIOkEPyQzDng_FSG0s3TFspPbrrdzowVBwKN3Kupy6uz-FQ39O5tRJpBsNqWGIvjDRcxXwjTiRnyCpEz1mt_AiTs-NgvrTeZRZl_7M5NYLoJyOyFGMcuUUTQ0WG9jLE7CmS7NSfkXnLF5WrwmvknypkpBcngwHaMlUZGyiBpZBbUDMod0qjtpTKj6s_1g2zGGm5VCo_w54q23UJUeek5eKdPlLHAjXJgttBYJM3c6g8YlH_7XPlJ1MLmRnd2ycSfcuMJIXK-bzra3GyLiGtKXf5fNO2PDZ3_WDf3ZNILbBnKMmQZit6eV4V9T4L3-MpJUhWoTC7SShmM8IPgyM_Juhxlz-o2AKnGk-Eg9LC5m697Hw0G5d-3E7EgAtOSIWyt5FtFi29yOpRGVSvZjy0aRLDSLEIyIF4lQnZUXkOPj-uUwJyuQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115849091720492670981\">Anita Ng</a>"] },
            { photoReference: "AWCwydghCco1yl0WRwx3jHBZ7-3HpBHupWHPUo4wI971hON1DosL7Mg7n08rfdR8KXj19I60cQUdHwMEcbU23j5oJufrPKYdjgTDkcjAuddFJTxn879caDLHNmFiXnEl4Eb4BQhzRPHfcHazowbPT4LnY3wTzU5QAgj38NA4buUEY62F2KO4NbVvUfFl0XeOyCqIvAvioXg-tixRDuO9UKDgJNuIApqe12fwkfSwEDH91AvDDqjYFrYLKJLjn2RXuVASONJJu6z2P9LNs1J0uSEoB8JixtlT0TsBaWSVUqH0QG2wEIHjOBRmjvUD8pZKqpU7MuA3tL1ozGLueiNoLbNAvyYv0AgrQhKZ6B9EIm4ojXfii4oXLLKY0C27qye54idO0JksFXYhtew218FOFlscTonAZmzOiZWwe8PlV2C2PZeKTA", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110770191158540418869\">Edwin Fong</a>"] },
            { photoReference: "AWCwydiHlXTk9oLHXYmpbqxgXc70Tu5Q3xB4G4KmDM37ePeRal4tlo4MFT_CLAVbnWmAb7_PJmlkC3bdyft69ns3FaaTSpMtFMFUD7AsnkdGJSpC6XA_fG5lKBiWNCHBY7xGrewjBH8MAcQxrXex7Uo60JUHXgpxVDcUwtv2rA1Z41X2xy7kIOZL27Im1NibIPkslqI6L1dqeVp-rYAOCLnEsBoM6llyI0l0RSuVciNZBHFP8f-RaVm0Shd5RM5msHtOySx5dc4cP3NChrEfPn8UXhJo-QZUZXp--cuDVzGyUSMjp68gN6_-XCjSt_4O3oZYZNEkMVCY11YR7IL8Sm9yXsW1gQn5s1F4plcPIWlst_ROhvJKYgHvAPxGtEbjrfRbQdgLOU7pToxffPolLnZ7BSRnha4ECQKEx6S-RCtjNzzQVg", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112006130742133827518\">P Kan</a>"] },
            { photoReference: "AWCwydgVMd7M3FQyiEiS4wWRKU4ckXiiDoz6tlAUnS0lEd2GGkaBTqHD_qtgnKhFegwXgVt0wht3Lgh3Vv-fOF12O7Rc13z12gcwoI_LLWLhRNQYcUzvSGMZ6VQ7YMIoOYw44kQW0vJNOxtUaTpOMM_mNb_t-mudpctF3npvQoYqNNs5j4bQUrN6vGaLGjfSw120tdC_DM0r8sHE3IXoraooVDFi-y3LGure_eLZ0xTEQffOCnKtgyvEm-IVoOGM_3GB14jbHxjzT1S-ynmIQga0QkYc6XlnUyYVsAKolxOgizo5ChaF0lVxaWSw6MpyRYKxVGFFIVG9mcFo93iu6XKm23ZNj5Hb-Gl5pQoUMDSbKlDA2NgYTiIcEaPBk4z4vBaoqyo4J0hEox114_UWlvFtb5amr89_CQgVoV_e7KoWwHTU_oLTzgagdJRVRahIDuHn", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104756772711691271883\">渡辺順也</a>"] }
        ],
        summary: "편리한 운영 시간과 다양한 식료품을 갖춘 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["24시간 영업", "다양한 디저트류"],
        tips: ["떡 종류의 디저트를 시도해보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.wellcome.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9516474191471492659", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Wellcome+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "마켓 플레이스 랭함 플레이스점": {
        photos: [],
        placeId: "ChIJgcmVkccABDQRdD0GpgraNss",
        placePhotos: [
            { photoReference: "AWCwydhrZnlUh30b_Tu2eMjN8A9tPWQnbazN_LIsNBViO3-T13e5yAk0gfeBLevkAzjz5_QKLqcAvol8jU8fLkMDenC5iI6z_5WnP2kkN1ak8f4gbRBM1mpiVYx_pqb56XvpnqqAJFghZlxHTxt4ObA71EvUKrY0IKUPq-t0Gaa-AMvsocBGR2mVqP2_X5zx3vEEBE11h8OiTodlcUZD5h7jq22C31Fn1FAifdArAxXFag1MKiRYFShAZyKv0uakDOKPW71n6_5z0gClckX4Vo92x-pFsCIKrBCiJbuBzBXFayszOLR2qQzQ-vXb3VxG0EsTxZHP94K0GTnG91fexxElIN6eOsjJDbeOWSgrkZlVhWA8IGXrRYzEiBmweSoCp-xXXoWpjrNpiYbMDgo-W4cUZl5xXt1s1dzS0WaudOPRCsm0qhaB", width: 720, height: 480, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102270996346095883521\">Market Place</a>"] },
            { photoReference: "AWCwydhJJJ3SJx3PJ8x0icGXgJ8ZZPa2bVT4GSkJ6dRaJsm9T4ThpxBa7ltz1nkjkMXOjZUampipjIPZ_ryDPs4SVMydfjpYD6gxXln7BC8EiNnjP_eQxvKDK2dBhmzPI4jXr8-ndD6zRdzwNalw7UbcEA9w8CLa8wM9O5YgJUkfS0DECMCjajhhub1gPHrl-oFnh2crvuhTE8dmyD6e61QmpUMzYbgqPPjnuhVSoQiTR7odivlvAlVPQgl6C3yj7yOMVjD8ea2Q-t6hiujNvOAmEOyuHYQGWqvy0pTJ9liqJQM0RHWBoamFGdB5Wiygo3zOoEKVx5yFImUdbStwQRCwfSrnXvGWWD5RLFjfuc2NDuLikUUUNY8sBUP7KfPReV93ojtJVKRiTrz5LPf83nZ_RH60sRXs2ZxMxxeYVoQiGK39d-PZYBSfUhotnaggMQ", width: 4080, height: 2296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115558442660722949576\">Muh Fuei</a>"] },
            { photoReference: "AWCwydiZLPmMd7JABe_Fg7ciiTwtAulx1Wd-Hna7VdV2AmU0IElk51J_TZu0y1CWXwSbO0hDjO7TJEV1tmLRHcSnQakpKl8tQIFTWAOjsucgwOMz5Lswv4FngbXRMKf9dHpdIz-YpYQeGduwedofdt41vSYwudc1D8w0GsZfF-xrVUTr96wwm4z9_sjL7s_Q1Djae4poUKGNrKdOkPrqnBpsBX02xk-Y176lDNDdJcjzWwWBoHNND9_-7Wyl7-Z74DN3II3-1hXhbgjwCDn1WujEskF5rzPCVNyVR084vlaVAdxSMhU9Mxx_x8q0LIl3Iy16TGZv1h-WgIGDQ7XYpyELPxvlN3HZMkUeKC2E9-kVAoKSKWRb2cl_oOzShK7U49mO6KnsQM1XBbCk6xFqbasAuSuCP5VNmfUI86iWGlFXUygBrg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111371499899554356672\">F L</a>"] },
            { photoReference: "AWCwydgbguR1zbJZHbFYtwjfP_BpLB9LsFiHL6b2lDGP6m2M3Vxuvd4Kt-_Hv3MGKdms3iO84NTdSp7205ytnKQXlO2mC6sFjx_hrhc60HVyZkoLkeqGQNe7K_n09WOHpmXRRY-LWNAbarkrk-NjF9kET9ysTAcOGZo8d_5kwG5T6GcS6mub_ZtIqTFMI-2dTcr04gX32u_gdHiBwV5P31JOR-Uvt5DrWJVWYqrK446zuTcF_o45rq3Y5piawkde7EQxOhjyzc_19rj2hMQaWtrITJei7K0sdY1uWSnluS3hTnpGpWc18JFeuHG_3IkuP6ld_5JTayZYczLCv3gScniNx0fFA-8WW_dyloAvbH4V9LlZF4GvksfmqT1gpivEBluLnnO_Hw2AODciakh2UtUxBnQBLQ-qRggHQjKb9hpwi0TAjg", width: 4800, height: 3599, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108241653427700608542\">sri indrawati</a>"] },
            { photoReference: "AWCwydjFncind1eI8UDT1ymipBKqy1spIom_jm3G9JWWeLCaoHIJJiLDFKO_O5mjFYHtx3Vpe0bACvr-YNLRppqNJkx84Qj7XZQ_NuJgN2zjx9Nk9y1q26y8uasYkq8r83b2ANc-W5TwEPBc5GzCOIoOXFbkhepMBZn_8IFQ6G4dmOGiVJLDwBPpeV2uHPpENe_W9OPjat_NqXVMWiRLxx4iiSgoBR6JTnJWyo2m-C7j5G-nRehqrGKoiH366TJfq5QkfOSFpzKz75J2XCkL-RsBlo3PU9NVY5wUhVF2fshIiHKCDd-_CmOw2kMksCp89EFjkzpuE1skM7o4FGmj1JTcF_1Gm81iSQ_2OJr-6iBXXy_ccAVL0DIGrhi-PbFfZAnQARd9EQCFH_Q7zK-Uw7o-YiH9r3ZV3ISZ24Sv-iQ659sry2M", width: 4800, height: 3599, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108241653427700608542\">sri indrawati</a>"] }
        ],
        summary: "식료품, 간식, 음료 등 다양한 생필품을 판매합니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 식료품 및 간식", "정돈된 매장 구성"],
        tips: ["랑함 플레이스 지하 2층에서 찾을 수 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.marketplacehk.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14643130977711701364", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Market+Place+%28Langham+Place+%E6%9C%97%E8%B1%AA%E5%9D%8A%E5%BA%97%29+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "야타 슈퍼마켓 몽콕점": {
        photos: [],
        placeId: "ChIJfRcTPckABDQRYtDqSnsSIQ4",
        placePhotos: [
            { photoReference: "AWCwydgwSAcpHWxM8iLMU8TQ0qywicHTKRtDNRZdnldSQmjbNmNHczgPki0UECDHgXJ-kU09msIfixds7ltF3M2maLZ6WMFt207Juf6D7XMQDi3q4M9USjPkf-tJs8W9eH-FCu8IJz8Njs1eirWNq-hLRUCYeXe1DQpD2TmJcnrb209iXDy6FsFyH7qbNpfP6E32DZlf6Ami66YtYjOCR90obxP_O-CPsGzLYoBZLa2f-gzEcWLT3zfXEVEJ8E85NeF5GHJjHjR7IsRLMBZViZcnwiFYY0xV3uSyuwHWg3Ne49naWmzjvn_8K07PnRo-yqCPZOY54iZlVOeS0polEaQ6BijaDytWY8ZkEw3dsBEVVoUD1IbdukzBTBeLh6Hk6TFP_w2tGDsbQ9EQxXVayhFABTaKc0XXPPbi3gh5EPrbKqtKLA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113154005056185461774\">terri blue</a>"] },
            { photoReference: "AWCwydg9VvP7SPBsxlstO9vEiEykWDsdWhWmHMOgoFLm65INncQhPTLVD2z44Ia0-AMhwoHFUimpHGkSjOh0ITukc8Ol7LN865cfVJr-bSZiI3YEqhgRgGQx4wbQ_zo4VpT095UcQtBxvGUQZLdKzcO7k2HLAj5jsDVaOKMNZpoG_0nkfz-h_E7iL2f3F0ixMLqi9zCyDk4B4pZ3niRaO4wSamrCCJwbKK3JLqz4rDxDr3njXVr5zHmARQTQh5-Ppzk7qBI9Emmb9-n1OOTXJG_mk4-snL140Gi_sPopyKdJCuWNw5LcqeMXG3LEslkHc8TbksrgWJ86G1pjh25qi1pHXpO_3aW_gV3sCQPf9oBciA5OpKs8GrbidQQB6GT79SZoRbuwCT5UHJ0Qa4enn4uis4Minbz1Y4Wt1CO8Bdg5irgVNOzD", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104302534416650339983\">B</a>"] },
            { photoReference: "AWCwydgOeALjSOuzXWNRsz_P2LRf4RsMAOeRMrN8p9N1MMMP0bGQDsTU-zP0QY_gfUtAMXRONjwbXVti1HZrYxRJHB272JkCJ_vb06S9kf-KL7MH7L7OgKOdSjWuSMVAIRHIDM6fFT0npJxCZFwGOnM5GjFq9OVJyX2Cr07c5hgkkoCVIdSNk8bLe17Yp-pZlFVj7RReAwuxXbL4_mvIZCVbhHoieJx1r9l-NAw4CZIZSrBZJZPeyhSGczMqzuQ97NUo2ztAOkSRHdP5ee-PfV4btfj3fEFjNEepwHcoDQmZA8Aap8b251rtba305O6dzNGnkOffGgp8RUN1HrbleLBajet1mAVDCyBoJ_5d3QxuG5mMm5fGBcFMUKYfOnYGVtI8-7ocZAu9lBCi_-KUKzj_Tp-N0wv6PJsvb8nw5iVlKjkY22iV", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117327400452909291251\">Chan M</a>"] },
            { photoReference: "AWCwydiS6YaC9UdZk1fbjhJkmyG4Bz90bykoF-BcEfq4RYxI9zTSIJdP7qqmO_gNJ2Fd3H2MvGe4m2EZvk8ErDD_ffrdKCMNaA32a9NNbddDgvTEoVgSjBzDyifj70oU3Xftoe-cbCh0kP3OHFoE6L9rD7JmFyFtG4pn_eKBlkcz2yeNXfj6mQ2xYIoa77OE0g1XrvNxHTm45MJcFrxeCnOlk4So3MouMxl6BmgAF0L8zcYEAtL88JOcJplwXwmkyLGdAcyfxAnoWeJjLRoDTKWy8XSLPuh_gob2AJdTXUnvuNsKbpwJi5OFhPmi32kXaX7Bl5HlRBf-pLCqjAnnjoMofxzBm8R1Shf2210yVbUJR_L33wW4f-MvUJJxIO4t-YxlwOtA7JWbKQn49TKhuhMzD_s7-YczabsGQkNKeEG64GBWSX5B", width: 4608, height: 2184, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110486273629233292836\">Roger CPA</a>"] },
            { photoReference: "AWCwydhRSxq_laqJOUsIH4NsWZDIJcMFLeEDrMH7k9yKr7PwYTBoqGaxQ0X_c0BSCaW-PUWFb72EFwsxqRHTyGbvrrq8au6GBq9YLOkv27WpozMJYmIig4oprryRMjaD_uvBk7iO39b73vepmKuT-EjOJ-Pu8TJDMUuqpEuTC4kvElEN4xosEc-foNh_8tG8K21cwmJkIvScPhn3SQ68DhW4uyPxQaMvBjpGmXLPJX7Ho1BpKPQaz2kdacTKK0r6TzYWreFhqG6cuBPI_Fjr7JzD6PedJ5k_fhQ9zkPwK2nerE1zDNzo3ZQCk5_EObm4Gi1T2pE4GT5pIuK3Jw0-1ql-guPYrz3Sf-hGzd1YR3H1VKDSJ0kUU-6CgBDU06UZE7C5zxPrKHZKwzHi7uv3qSbD9JxzLJaftz0aYF0RA9PS2scTmw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104302534416650339983\">B</a>"] }
        ],
        summary: "다양한 상품을 판매하는 식료품점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["높은 리뷰 수", "몽콕 지역 위치"],
        tips: ["영업시간을 미리 확인하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:30; 화요일: 오전 10:00 ~ 오후 10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.yata.hk/tch/store/mong-kok/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1018115311509622882", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=YATA+Supermarket+%28Mong+Kok%29+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "이온 슈퍼마켓 침사추이점": {
        photos: [],
        placeId: "ChIJwZmUze0ABDQR5NHRvx8wSTc",
        placePhotos: [
            { photoReference: "AWCwydhUSWM8ONkFlhfdM1ZePpiZSMaVMoOvsWrZAImuna841jWyDrdy17qSL9-d5NcVVpcwYeshAz3Cy4H3R1drsG-poP8u91Gajq393pzqs8XrpoFjIvgftCqUwT6zS8jXbg589t5KDzEtfFdgemVCcK_mosDplS6wK08JzEatLJW5u-_RElat3qmJt6kZiW61AbRNlSaSdvtBBHqAL2CoDKjak7btwkIP3TaPZ11W1vozhnjQdo8lIjulM-f3XcvpGaETmRNc6fivaBg3qAqPjUIND5Xwi5gxTUMyz8WJB4SYoCwYif-s1zIEjHTK2hVBXqvv9ZBVbNB_G_4hMPPI4CkQWTXAEX2tZBgq8v5489Fx5nyo7p2mpRsb5cjzgxvF3N5fWDNnRDt3-b7kxkWLHnkBrws8FEGpppn7syjFzlMcuw", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107282549940669564102\">Jasper Kwong</a>"] },
            { photoReference: "AWCwydg7coVKPKgOmf5AMUJrcF-_rqDd6c42dACaYNoivSSsJmVmE9r3jPaCCGLFgxSN6jgshryIVmgZctZ4z4c0cJeCnxKD7TXXPK9-7ym513H_nuq2cgomdnGnzyHghv5kIPyKpSnTIaQJwCiwLHy1y9mdYT9_j1GKDvYfjGvzcfPPNnAtkdtHY70FLyAwUrS1KUljcDk2I95NCHwBb9IZBgb1ixszKe2YzweOJYna9hb8Uxwpk63mQvLPpegUE3hJkl3Hj9dIuFL5tDTCjrQ9N3kgSTB6k3iTyuJ6QfOzA7hR_E7NOb906udWoNmohloM4TdPuuuolnFwafHBtR23rFyMlzBMASjvNS9BZWWkXplqNuSWsk-T-edgyL0XP5kc-pEr89J3W_gr7cgtw4p9TdQed63HyWg2YlGRxd3lHUz1zLUZ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112524790602033001844\">Raymond Cheung</a>"] },
            { photoReference: "AWCwydgWgWtUzMeqG72sCyqCo7AdRxU94bQG3ZLwqXWPSj8rf6NPUTVyj9dakHzJkMJf92S88fH-CD9uUaD26uaadOe0VNWqQh4rjWbOBU_Vi0LnVcSfXByGPSG1etsTwq78VmcA9W2F8KjtTKUKO7Evf7aO9B_0H64yHrXeO2ai9prnkTPvYhA5T33w8JlKzIH9moZVOYleK-DTU-AuqfWz8OBZDukwhz7Z8YS_-U4Ft_zYm7g9ay02JyuDrSgzNwwbCPykpTALQMYWkgDLDpBYXG8KAYLEg8-VpfDYMJiaiNW5S9_JtFjsJTqpwn3_mBXlX04YN6lOEvlE4wyMxxQ9k7kwVqrFipr_Ww2UrfA_d_gpRG-uVw21m93P0RM8IgvdglRUuIzzrhbAnGzG7nLsfjaOKmaaTpdFeML3qOh7-GeXfw", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114587906190262849147\">Kimwing Chui</a>"] },
            { photoReference: "AWCwydgRMETNvh7_FH8QVcq3fKDjU83Akz9DFqrPWg3526bmw90tiipKjnomK2QPvpNaCADrvE_ckDVCLrJDt_vxVS4P0tWAa6TINXGzI4E4a67-ghatQGOxAd2YTGBZZmsaHQBTt1ECoOviTnxvr1pS6ZmOVGdo_tZvid1Wy-AVJZDS8U4_zo0RVTYzcLrUiwuUQYt_mDIbPer5A1hbQARD30FxEZh2-nwZMWa71vyQbL0P9eyC4cju-cOEiPJubPNjGeEvtGVAQfs829Ltpo5XeeOund3Qj6zBWSizvQUI4FeO0DpKZqVLm5mql1pxkddsubi0cyOislLSCDeo2uq64lhJreO2xYMKsyluVCVVvfWYSQJf2GGvHTQkHFR7XyaYcBHTu07dTAZEFDDcPZvn0WPSYcEB1TmbDUj7Yw-U7l-K4Bo", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112775714841601614857\">alex lam</a>"] },
            { photoReference: "AWCwydjIfKoC7_5C7kftDcKXiNkJNX-BXZuJuJyOSuhPHiMigRIFpYFXeHvj7xJ7cR-8k6CbW_FUkMqjXbME-y2ykqK_nTKDRaa2IeXUV43GyvDlgk3BkVM4a1yQ96DbfwEdusX08Sb35mrr6OVpR8YPrqF_uIQdwonHHBr_CVzbIqRUXo1jq0CU9zNW3_XExovWTZjhqHfsuxs2vkJyYg5-BIWGZqDWu3NkY8-8-F6ZgVaNRjwhM7dEGYpsEdYzvbUQ6Ai0lPnR25Q_Lgx31cqroI8C21tzhy6Jc59s96YgXhoxhdCq96qRSgI6zGTIjOkMf3UETaEjHrVlcluQ42juov3LqOy_LJblrPwN70p2lenqTe78qRLsjAOrGAwT2673HEnMo3pToxiGS3epqBZXyP3hKV23Q2Y6fKtltMzJRtOfRKs", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112524790602033001844\">Raymond Cheung</a>"] }
        ],
        summary: "다양한 일본 브랜드 상품을 저렴하게 판매하는 곳",
        updatedAt: "2026-08-16",
        highlights: ["다양한 일본 브랜드 상품", "저렴한 가격대의 상품"],
        tips: ["흥미로운 물건을 찾기에 좋음"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3983768258306232804", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=AEON+Supermarket+%28%E5%B0%96%E6%B2%99%E5%92%80%E5%BA%97%29+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "웰컴 킴벌리 로드점": {
        photos: [],
        placeId: "ChIJuZcKl-4ABDQRkuWUpsWyHWk",
        placePhotos: [
            { photoReference: "AWCwydh1OzYLOUBcBuGwxjI5uDvOEAbWr6-gj3wSMH-DTTtmqdxyUoE95TAWl-ZuFOyCtXSviSCWeR0MpKq8ZKN8niKKzjyj8bFYIJhpKKm5MhNraDX7l0yN4sViRY4bkMKxNqL6gn1Z5Ek-3LTcmvfgHPURcK-p9BrETfFzEeA3mW0SZ73wZxl0Y86Y2b3fJ2MBmJI1o4QPbzJMCJ_5gzQIemirYAFFAOqTHJ8LQ5uWb8N-cXnIiqRzhpVmt-BnabUINpQS8RgoGcyp_xmX3p_bSlxd2uHDMWmc5LHI9gOZ5IQm4mrLJqTpQG6xvtRoikyOD7GiqcPQ0X0hjNJc6LtmRzPExCODPWmcBaCMI-xP9EKy5NYEr1yw1gNny8d-2gn5NkQ6VESrudNFaz973k6dC3UzWx9GFWSKU-vIqPWUIMczbw", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112216973212094357804\">Rupesh Siddamshetty</a>"] },
            { photoReference: "AWCwydjnqRl_PtFXt2Qj56KRUTjJqx3pogs6JJ65UKGTKvyla0jtK6JsdC9x0YpB2JsnRbxH5h7VFvN7Lom39cRfETKfY_2zoZ9axj7W4FkPcGYSbvNSOTemT2DxxaRThS23MJ9yq8zQQqi22X1iDB9DKRo0hlAihP8SAM83jIind3BAWxD_5egLFGPzE6NC3jR8VCg27bNbs4YKY95IEPaqa9LbhrYwv2QCyeVHtY41eCrI1e_5sSfqpzgkJEsfVGoQFOCXB4wyOTw0-2buL_ictLZ8VWIve7VdKe94xqDRkwODzzcbTKGcyLF3UB4fyAIDe2mbmknCwELMVFpbLCOoJkfcKYrU3oUnMyhITMKU74YXSVaLbGAzjrWwOxImityR0TYGw3eHX2pg9u0-CQW3zXnGuMF0s2wKi5y86SAZ6p7JBH7wVUBaQxQxuccsuoBQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101643820823137654634\">FU Chen</a>"] },
            { photoReference: "AWCwydhueki8szpRkvWlT7-5ZvkeBf78TMkXljgviBZuiMeKjsToOnvolUaIq_5Dx05f8-o0ux2Ouck3Eq95Uvk6kzDPMnAnwgXRus9zkznq4iocDE13qR-Z3CMLz7oM5hWKLMrbnFPurA5dYTM1QbAz1Y9nAg2z16G7HKwxwSevcep4G9z0VIMzGQF2oBRWBARc2LKb4EfD6sOvLn02jOx9ZDc8pK4y0niyLLH9pqsyvdGfW3anR2OQ7rJjuucRnoUR4_o9xglA6TOrx_SU9Mmptqw8gH-5d2rHC0RylN7VyQEaW0suQ0yATAumQ32Jj5EIqNysz0KZwnoRJNX12nS75sm-O-HWcQgKkkY3dljBy7wbtgTFXnA4NfeX5U10IEALzp2TpwBaDrCyVjk0TmqsIqysFqnsU5UUihvqZHhmh8T0mQ", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106075668157526869974\">sharon layani</a>"] },
            { photoReference: "AWCwydiQEq7CUhfupzOmc5DQxWK80KflEggWzT-IqpL7FyWuL2pxCo-u-LA7WoSlqIUYTMJj7IXgVKqF2YoT-Fc_WKD0AhQjT7RaRscsmjwBQqPiutGsHYFRbm7xvoHFbMVoD_z2f_-Fh_J1lwemgD3fCXzetn3Ixt3uc9yM2Iod6wkgkCO9jZi1WMs8gdZjvbOig_YwM6DiY0v1ctL0NYfGFDbTF7HYE4HwlcwLIY6azaCi521Zxzc2Tz8PFIxg58X-dmHydC43cP4mD0nUUD2U_85JEc18oR4tl_P19l0uobbCxTktU_eyrG5GEIMh1beP2vFad2z2BzuPsbpH1H769ozAR_hJRMBtrDO1xE39kT1mri-XEvoiiUjAubG8NpeoDHyxUDswz68RPiviHiS9yIUWoL5AgGuvT23Q_oSb-zw", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108879597948802358300\">A. T.</a>"] },
            { photoReference: "AWCwydjSvglQ_zwmdoAqluSQrTyY8Mh3Brz55t5trpkmvEjXdIQguPM6DafOdYcJB3hT94RKMXzR7spqjIE2Be-1MT-F4oDNFtylg9_IwhG-pvoEwiq5EJvdI1AhaNZCllbjcGgQYn52uVxCcWFxzMLuLF5Ox97vADK6zJfVgI8nRz8MiPc7zZM4lWz7hH8Qfx17Fz1xMLgPmgjzi_gnP_gKBQOqWBKqAP6_1Ur0QUoG2MTsvZpUEqPNv55m92IZvKf1o-ufU18R1WN7NU9hHf2TzWWxQ9fNmN8HVu7JqZh9dHkwq-tk6ufw0KPHi8LHjAUGFNUEC8XL7sGLvPBBvemqkqa-8IEBwKXJcAdmg9xgMLje11d7htKIdd3fEUq-YkM9xfbMMHfrrxo76f3J3MZD_uMC0HoJ_PPGAOH05sqlF0ZXa_w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117048677003988780547\">홍승희</a>"] }
        ],
        summary: "다양한 식재료와 조미료를 판매하는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 조미료와 국수 코너", "바삭바삭한 쇼핑이 가능한 규모"],
        tips: ["밤에는 매우 혼잡할 수 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오전 1:00; 화요일: 오전 8:00 ~ 오전 1:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.wellcome.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7574406710280119698", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Wellcome+%28Kimberley+Road%29+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "마켓 플레이스 케인 로드점": {
        photos: [],
        placeId: "ChIJKYjGwXsABDQRCj11JZRjzyo",
        placePhotos: [
            { photoReference: "AWCwydj-3kVXemhsLqUMRDGglcfdkfiKVsEXzzRw8-dKay8L3n34B7_1FCV0Z4xntFwtY81YhuM1h9FO4q54kFrD9GDI8ZniigGVScH6qlKM81yEG3JRFEdmRMkZ_nK6AXfcZwBlsya7ZqYj_noq_GBMkMjJdAHyvdq5Oehc9nCFdOausp61r9JlW1QBDMJy-QSDtcYpYU33LEBs-uFlPMmFP6GE3Q0Vr-cWnV_kr7x7hBCgxDkVb1BX-JLHmICmp19YwqHwGDRnkBDDxJIsajOjY-yCbpKyGiwd64E3xt-hKOVSzssEqKPk83vf9f570BGh4cIpIbRi9RYqsVBMFKiluNzxzTmz9aCaICP8sXmDatZLhx_MNyEeOn7-rI8FtzGBQB106kcU6drhQfHzuv5RthTjoe-CKsYGlJCo0CEFLU36xQ6z8JUqNNNJhmKFOg", width: 3633, height: 2418, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115930843428978615248\">Market Place</a>"] },
            { photoReference: "AWCwydgjAyeufHQMAX0V5FnQSassYDNSfe3YPlMMnWl5GYEiTHkkcdl1MvgoJ5Gtv-vzAM-r_amotRq76lyxIa2Q29uk_OV3DkotkXytBth5Em0hJmbp1uiKXSLH7GmLm7d8I4pigdXtgzBwcWntdMLdHoQmXVLqUEsTXvAvYEY1Lem3FMXMxMh-rBipk2NcE2Q8QaJ09vtq2NQG6g6dat6uBMO47ZV9D77X9rW2_51lo5T7UQAxghN18hyP9p4S9SFIc5WIx-LUQtimae_0_5yIIB9mM-8QvYId1iiHDZMMyVvd256w0NYXijzZ22q9J_3ZZoseerhRSHITFyHuyMFozb6NkyW-zJ3daBv5qaGBGKSvj4x-9MkQhSt7X0qwwBKpdqNypYjJc5LfAhyhDrt1ak_VFxRf6da9rkbaWygT12IKL6fy", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114592888179182991710\">Allie C</a>"] },
            { photoReference: "AWCwydhCqzo1rwnp0kN3udQWxxD3eOAEKq2JPGMdi47PMgQveHWB5WlzicnpPgJzb8TfLT0ZkN5YewybFulo2YjXCJOux4TyP9qTa1oiN6wzZ9Um9nYd_Fbvh43LVroXi5zFfRZslrhG_movwMtuCX_XQoAwvErMPXADg8JQjBLiZmhnAfOoWPLVc0YDaRBYc_QOdnSMsuf9uEpKIb3-JY845Jk5LUh96WTA1dhypbHy0dVQtHbSUW3nVsWpyT4xZ67Izd15D5XYNe1E_NH7fQ_Jea9h87y7HUdSPWRz2rSHK6qXybaVG7SktBG5v4bqLDUFHGuvpbkIB1TttDjzV3_cUbQD03GQWpQxwyErRQwn1IsjyP2tGdBGzfLw0umhpVmC-ZHSQKWBOAmf1x6QynUSz-twsQYbWQDw2bbuTtU1ARQSwA", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113755905351863443644\">HN Mak</a>"] },
            { photoReference: "AWCwydiPqPi8rpWGtLA3tXI5UpALXmdoNZWfKnwbEGpdjXVcXtrnZITYubeA27bM2v24_03cqLZ4Fhp0S-Y-lZQC-z0EjJdFhSxBVMAEVQVtLyGZdleIL4J_znUtBeeViysZvrGpPxa6X8eEwBVnbjZ45psGacdzHvIS_JXjjnj_5rQAZ6ESjEkhgDBBpJSaoSrAbSULx5a1ASN6rED_FUguVPojZYApUnw5zAerQeYGP7-GPf50As5asV-mRC212lNFIw7KYrn4Ysq8MMJDXGGjkf9Zz9RTKKMjIPjsdQjS_v5qkOZ4McTY3xVW9La7UJg3ErhhOj9r78Wa6qQ071NdnPX1NoD5IWUUsKdp8rbkgPl9--zqBMVQsCH3_qNq_5zsB6leTgL3fp1jvVOS62VEjLn-0yzf8iRbpc_DVSIJCb4", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103004479219112521724\">NKE Global</a>"] },
            { photoReference: "AWCwydizEqQJ-KJU8NCyEiq6wMDvUGqI8ZFhfy4bFBG4fAapNo_Zs9bj_tFXMiQRdNn5361_MvZaPn5uJbdtEdAbxLb7yzriqpdfCKpHkPcJc1ot-IXKiRDbA0pnryEY0uzdrGe-pspwlFeHyOGYcI2Iqe-2SAdprA7ezCgPCQtjPowo5wO-avcaXsJKQGY0GkTjCAak7kGj3E_Fyr1CCdcgItUBkn6GLPlLU8QeRx9Y03nY5gWC6Fl_gYo1H9EWAH_JVEESvTp3-B1IdqHQIdUhW49E8vbAhDT-J0sz231LhBtfv6mqQk7ImRZEjVkNA6Lns0l6wHbHHAPJtgYU78G8qzLxCg2pluWXwLXLhBg72xzBPik4fc73oGLxhb0k62wdzn7GeR9OKGtxwtbrR-nVic9KtGVcDRpwtmqAgytqsXcruA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112363303108378898189\">Mischa Weston</a>"] }
        ],
        summary: "다양한 상품을 갖춘 슈퍼마켓입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 상품 품목", "센트럴 지역 위치"],
        tips: ["손중산기념관 근처에 위치해 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:30 ~ 오후 11:00; 화요일: 오전 7:30 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.marketplacehk.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3084793757706829066", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Market+Place+%28Caine+Road+%E5%A0%85%E9%81%93%E5%BA%97%29+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "플로렌시아 빌리지 (패션 아울렛)": {
        photos: [],
        placeId: "ChIJE1t-GJj4AzQR4pAoLrVtet8",
        placePhotos: [
            { photoReference: "AWCwydipDebxD5f1sbEqkXkmebvU4PwjXt77YTwD22ZIWN-YP0dbb1W3pHtIIODzZcYl58do4btkHMMeO-KNY16-mG3IKy4be41qIWOga6VhylHQ2Frw6twwZAjjqF6zHIkVo3a0_lmAGyguqd2MBzZpB89let4BoOnm16jzSTzW5QzoK70JB4uDORz1bY5-awKMRPXLOwYTyaFCmNCtpjBuVrc8qrquu6J8NJwEJNVGojfZ9Iv8WylRm7uZwXadS2O7jRH2615WQv1UFIkpas9IO0ak3QOLuOOw5GDNrfcs63FC9oIiOVy2TDfp3-ztb9dbwBRhLOay9FUyuCDnaxkLHLxov7HNyTQ451Iyn3ZXrtbWBtUQmp-dWI2D4v6ZuK-ZjYik8EpVyUhaZmlI8DIFk8DTQOZAUyklj8niyZ-XMbHI2Q6y", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115683814840826960433\">Peter Pan</a>"] },
            { photoReference: "AWCwydiV79-ByaNpx0CD-xr89Ee24W3LTsdLPJLaqwriTI94p_Qg72VLDEUCWnJEhDhB89huHGih5Z6b3oG5_sVe2-QovFY-9NwxWTWBTmGPIVgJLYZ7-X5eH-tp2JxwVqzDxEgTxuQV1Y5R7fzKqSbJ71QWYxVi45rh6RT4DaouBVJrdkrebD0kbd10t3TxsGVtLf6FAcgQwlChpe4fBXEdiws_IMWs3wtZ-_F57nM9bHHePXt3jvpQiwJejsBvRhVkm79mK1WnhBLzJILwVuAnBhzR3PJIkboEEHg3zDQ90z45q9Koq24d3Vosw0P0rC-M5r29KHUh8QanTcu7jtq7IR4WW3e0L32QVTPywKC8mVQMeetZum67Zpm-VEJSfLZkOMDqO_OJ8m_wKYWX5_nOO5TLc4DYcdYaf9j6-EIQuvY", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105916534922343902012\">Jeffrey Y. F. Lau</a>"] },
            { photoReference: "AWCwydhKOjw-0bC9rD7Fisp4s7u-DmGYvdTpW1iHA0HYpd0uIEgKTflv7a0rDew_fFeauvikUk9tlS_5lyVZnxVs0dblo0RZ2wraF2XxnbQDN7VaT1HX4tEz5YNrg7_uS9BWgAMyGsbDpKObaeB0i3PnNeDZQp3NlNb7RScwxtBgOqOb1DxbWosLkxIGkKE6b8cG44vtNcFQATIVYuMr5_WBPiwW8LTiFH7AzQtxTJ3jV9AbCjSIyMCtHj0-2IM-H22fV6utEZUBdJM5N2BbeUtjkdXwqm79gjXIdAO2NqEmCCTLn9gJpfgwmWNoDU_vIHftLwWR95VgLndOYr_TbsDDw-s7ZXAoqTO-vi44WJHlleN1wrb2rdDlKKK8PzVYUvm0ZS8ENrwLDUD3niFYV6GQhgUSlCseG9rV7mw8dE-R8rpz2SvW", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107338191523759030892\">YJ Kim</a>"] },
            { photoReference: "AWCwydhnKs7qlwTb1s5JtMWw-U_j7tVbdIFGoN0psdbXDBZm2si8B5Ksy1MzBbkh0vgmvZBqYGNEX-rWH9aQXjMd1MQzS0qEwOezCvnO3YOMa1-3IbtrRR8A3FwOvO8zvJxJ4oKih-uKAjkMMr_HINbZtPG2aLAMWebbkGQupNbkWfZrwEbJug1hjOyDqm1KYYOeOLxlKBIHRqrMBpIef1WAWIC48L2l6k9UX98FC2Elq7KnX0GEtkUqrX_NxHPy1TI4ZD7aPLhAdT6eoZ4AhvYza70D9Mu7LlmJApDpM_TFFpYWgu7ejbEe1zRO75YTiDxztaqolvGqfy0PkX45v4GxfoLySLnuRUrBa_xvIN7vG2Q0jOmkshSVOz5xxpQMkxD3jQTI_U67J_i_yE3dbj2cMBuSwZL-49iqpuTOlPgKNqeN8itM", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115527099944555887687\">Cody Lee</a>"] },
            { photoReference: "AWCwydikVqvD7HxhUHIQbpW4a-ZugnW8CduMwrGFICVycTbebgsbFX6gk_nviy1m_HQMD8wrKpHLO8yUMKgUYYtijY_o536FiDb0QxNWys6VbFRqiGa59VsG-_QjpxJ1M-kcUMe9Jr4mU175ySY7jOsmbeOdkuQvX7xcW04RxLVv8ddJxietNVYIfwXqKgEDn3AABUzmEmOo-gMDoPmuvIH54iavWbLowCTocK6arYgk1ts9yR0WLIxaYLjSRXHtcVL_JrYXfNbLQB4YUUhsGrk15kGowR9EPiMjg6T-1FUY28rk_-gIQiT7Jlj8eng-2s7gefrKrrbsy0gFUYTxmAkNmyoExyaGnHksfzSZHF8DJxW9ai6GFaGfW70O8Mau8p3doS4aqrcUs71okyjs-Vq2wstAD2TEJ1WDE89oGgonim0wJA", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114974918516478462565\">CY Kwan (CYKWAN88)</a>"] }
        ],
        summary: "쇼핑을 즐기기 좋은 아울렛입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 브랜드 입점", "쇼핑하기 편리한 환경"],
        tips: ["운영 시간을 미리 확인하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 7:00; 화요일: 오전 10:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.florentiavillage.com/hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16103304042547548386", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%8C%EB%A1%9C%EB%A0%8C%EC%8B%9C%EC%95%84+%EB%B9%8C%EB%A6%AC%EC%A7%80+%28%ED%8C%A8%EC%85%98+%EC%95%84%EC%9A%B8%EB%A0%9B%29+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "호라이즌 플라자": {
        photos: [],
        placeId: "ChIJ22fU1K6qBjQRCgLx0r1Y4Zo",
        placePhotos: [
            { photoReference: "AWCwydhmR67bdzVKfejvpSpV5ATmiUDFtdi7J2pjf7d5aHTxKiy5bDNNRZRhoEycBiseAngGgXF2PiO9fneRrWxgh6FhNwf0KNp0OXNA1f9l482R8GEFvDTtOojnV7fTya2sL5NoZVJGyOg2q7APYZgbRt3iMas45hvfuMcMiqc8E8NBIDhSvT56dAM2dn8mo0s9NUmjRS1G6BrBNdkKh7eoivoYhFvUUiuvBi4QjjJPYlnUbHAv3gNw9BPlcYpyxma8_6Gp1H8mFCJd8qSsTWZKJs1zP_4bgugwY5b82Oypc-luAnVi_Ak-0uJHHUQ11DHyIzdpcW-xYSe1r0nQT19EqchAAk2SUGoiB9bXSt7h_9TolNOqVeAQ2ByluhwHRPiR_GrIS3RklWyqzODny87e_HwPVic9HOD10IudOn93q-ZRdrhQ", width: 1125, height: 634, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100579116625727915456\">Horizon Plaza</a>"] },
            { photoReference: "AWCwydj8lzRl9BTFxX1WuyBfWYTSyyUE2L3JvLJYoRQKeuRPw15z51eFe5E7TVLtKwYLd8KWLElGw22W4kaSsoYzXUu1yv3tH_ZwyvGC4fieKiQzSzHIZzZssQPtEL7O7lvY9XxBtFOb6CDFm09z9zNglbqEb_mv2qzyd8LXq2lfbvLQg7zrzV0CPH4HlCSTh8JelKb2eCaA7W2GUzRiOVCNxDbhYWZKAEhegzRKzpXsQXmWcjnABJR5jmj04OMOuiNYtE3xtIUmHtk-evVVZnpst6pTedDHg99_4uowcF-ksNOC_QAsMQss1TLknmUAydXq2MlvuKbohP8WLOTMHMY17_2UijO-0Cb9zaKQ_YTlbUOTzlnOIkfYUIRxTpD3BfN22FhIw-3qSRnAhKpi2vGShrGRVTtlABYgU6RsWljJOBBhcnfc", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104409559193553809582\">Cheng Amme</a>"] },
            { photoReference: "AWCwydhyQ85pU4yfs9qqc9X4uFS1M3uw5HuPZrOoJ1-yPUDLDH1_dOcu5QPcsaNJbOOd5bNrJDpBRiD4llvbrC28_Q9hgLfj2zNj-oG_9ptuDt0GChINz_GHAS8teH166Ot8kN1jpq5NPfMhoNwnosApFvURkOZolyHVqnHHNQpKkKDUz2r6aDzzsnFBAkr58s_dVLrQrlNt7A3a5a4Y3g0mKy1yxbBGgxg1Wx5InB6Erd2nvOBseIz1FVsqSk0gIR5nMcMmuQPDL65p6Edp3svZPdIasNz0vs2LJN__Cv2FQnTF_uaYKs5BrR76XzUuhmdZtiiZvLuUSX1nw2odTGEN4Azn18w6W_wkstOLqFdcVRNWAG8hDlarpTv6NsXNYgVbnSpewDnTyN7wAsnzE2PZ0MR6lpCykAoWin6BzKkbF5c", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104409559193553809582\">Cheng Amme</a>"] },
            { photoReference: "AWCwydh_N2MjdhjOcCyOJKHNpoTp2M3il9n6lQAqS8CVHdWovTfKgqSFww01QfxaNaEkIDiluiHIxqpJ0YgLuIORh17yD4eCmQOdV_mQwBGDeFTcnLUbVd5QhEwIutwXY7MJBHpa8uC-LdOZGYIjqI5H5pWSbzxosYuMeseZM4vWSJr9FgK9NQ_r0u5aS6o0frENaKxn8h51PmMm1M834jDzOLt-fyK_fa-iq13shJ7kRs17_hIyAXZf0_Zg3Xyb52RO8TRTY_a3mUZchemimW6T8fi54tEIZoIJmiJrsBgAOXFfZ_FNkF4lwAVfD8Ol_-ZdaSf_9iWvBGpy28s0F12Otk1P1zGaojq4i0bFNVw1NF9ula2Jkh5XA2v73Uxv_eZcmM2ZrgJZV2HGerWm6CGR6dt4UiAb8kEYCMn0QYW_7UCbR54", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104409559193553809582\">Cheng Amme</a>"] },
            { photoReference: "AWCwydgrMjnOXRFczgMCcyjb8Zx8LdshwS38yr3lZvQvZQ3doDJi2TWNXAXbpWnxcIwQOpzo0AwHNCbUfw_tPE8iD5JGUD1bEDRxspen8rYJlmy_SpIB9MSQ4wABvKk3t66kJE9YiPfY7HO36zpfEoDpiOowQBEDwdjrwwgx8-QMRULUeNCvPh1oE7ajUTwmdqEvjMixgh-nZrzM826I-GmW-GlkIbvzsPb6Hhygofzj2LqN_jqULTISsBPzSvueOb6UEQfLgX7DAFYJqrx478LEvpRSgMFEAGbcbKJ66aZ3cTsSfkGbkwaEonBWR3mXBiMYK3u23HS0esGSSQBMA09QKqvwqrtnFESCdqlhKPPaXHTawYhge5ogBLtOFgr2D-bf48LxHaUc87ftUFEBS2ryR_gSM-O3O-nXCFaGEFbL-2jGDQ", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104409559193553809582\">Cheng Amme</a>"] }
        ],
        summary: "합리적인 쇼핑이 가능한 아울렛",
        updatedAt: "2026-08-16",
        highlights: ["다양한 브랜드 입점", "할인된 가격", "쇼핑의 즐거움"],
        tips: ["정기 세일 기간을 확인하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 7:00; 화요일: 오전 10:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://horizonplaza.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11160298923911873034", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=HORIZON+PLAZA+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "나이키 팩토리 아울렛": {
        photos: [],
        placeId: "ChIJV4f3sbriAzQR6Ishk0crN7I",
        placePhotos: [
            { photoReference: "AWCwydgBXMdXRNPk17WgpF5oqLgz9K2ep6OwmDIYIvOwCqiYIxF6Q_dJHjsCv9uL5Yt-nI_z8zsGyrZRGeReXQ9rke-FK2LHgGxnl0fET6giZt-g0Sg4zhvYf1YQhf82cPvOkiqoPV1v2Ra_FaDQtO7MbQO86ozwyH4LU_v1iDFQ-hZjFXNVnHUzMLE9iW7eFt6ftJwrZmotwZGKbrnMM-FFCDG6AiYuPBAIR6y-wX7T760zdJegNJvCjNqgMmHymmTTnMAP1iiFhJPO-HSTf8gD_vGLGEPd-2WwXMHz_tprc83roQ_f4NOWX4SsTrL_o_NSjLGhlZ47Qofz0wXcTzE-d6Bfch--xo5zXCV08alovBt58PSFw0orVnPA3UeEDFdx-R2Q17CPlYeg2kjkxUCfPMAvj3-5KSHOpQY6qazMFTmIOT8Z", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106994617174002114900\">Mygod Studio (Mygod)</a>"] },
            { photoReference: "AWCwydh9TgKVgIL-OKvu1_lNXWJWpU-XekAYV31ROOJQxn1-TUkenKSaAjPr67E_8meFZgXWYAyZXNHZpGz21uej0hVbT9iKhdq-U9MeOqCNaOQyeNL4ZvCGiU0G-WE62UNwLLJT0S0XbbCwbfMdXz-fZXuruSORo0B6E7jC31qa5s-TtUA0Ga2Jinwq_B5LCJc5athZpL0sZQZp5bW0vsIDnSrOYku3KrXUPTQ8RPbZBaddqHQOosKtAquFomVtjBTgja9ehi_A2yAMLX30h8dzzedhDqgJTolQESOyT0eH3czTsK5zxGcw62JctYjceTgGu0h9fBdqBD21Vt83lTgOqoPC10GCzMEl6M3BjUwVeS4z00NlsEZDmWPWQjIaMYtzbQt0fmiFPrKIQQjRiTQ4dZGAxD5jyFrs1LWupHxfiSqdNMPN", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104128831799654003288\">Yogo and Cream</a>"] },
            { photoReference: "AWCwydg8teihe8Ezf_xiVH60i37tuduJxfjNw1LAoxEr5aWqHzcQYSYFiQZu7dFEB7fj9UYfInoeI-AW1HyUP2OQezTBo4cq2qRm71PSqwMmawP3ELX_LbNtnQz2a20F5Ye_U6MdGNz_DakC1atrIt7xKtTmYEGKQ-H1YIxt28AebglVvTU5i02YvuHdfxBZe1vx5qvUjiBxv8ZC6Ae3dGFychvp4xU31UXFO45cmvChOnerPuTM65Y6vnDtroDnxFuihht6d5mB3XWInHDLKNQyus72ILfs9GWRY2BbQwrhZYWOCa-4jpN9jvSEhHLXKrlta_hwN7N2JBLykuuqaSMgRNeUO05LFS0y_gJ8g2ZCfI3H9C14vXeZKHPFK_9CYfrzec9aHgEcgRB5iYGaS2BsTMBGxdrnv5dNMhhIN8kt2ujtaRiBF83smd5WVLwgm_aS", width: 4000, height: 1868, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101469286721391103905\">Denny George</a>"] },
            { photoReference: "AWCwydgLIwWnsaeByijTDm6TmupDcCu7STzbJsNfGzflf6tQn0ex-rKsGd-3iEdeS8RNrnXfnQhAwYqODhlRLf8CsXxQ0BMBfoYrkM5W5yzcnUPKkIIWAVOjiiznyyxt0wG2EtpfdCUhAWtg36v5XwTbXsojESKRREvie7OVE9Som0SC8TI25C_UdVkH10QDmnDz7WNuT5WoO9FUi5rvJsI07vNvLy599J-Govsb3vZPa0XFS6pS-8P18TA1dIfutUys7kyGb5hM18QShunBaQ4lteIWLs38G6YXBQvQ4s1xpMQO7rNWIOhDb0Wu07cvyVFC4xpT_sJdQ1RbKyrCM_4yPmIZXG2nwXgx1PATg9T8yvgZr49ttjJ0ddVwDvus1ivY3sO4i8RhPV9bz0ElU61CAeGb-HbhzOK8uzNmGX6brNlk4Q", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105189557995353438074\">K</a>"] },
            { photoReference: "AWCwydgJTovh7WipixBNqRUvVq1TdiJDuM6bcdSR-uwuptJHhD95mPKideJrsv9WEeyjLBkwLYmZSVwSRSPAnPWCsp7fd1jrl1FD7nb7vkq7I-3ORf59NuvStecfDGP87thnqHQBZSiERZ7TXkJL-RHiXRZEHl6ymj722sMFPWwWr-4VspvlrY5eqA7V4nEh4A4lzbu4VD4O9Ney3X_xt68VuWYZ7G1SIE35QtxWfZla1LQ5gK02vHr2uABBiJHWz98HAvaXon21S6IB9uzKAKKo6PzZ-v24wY__mEJbo5X6mXkd7KXzNWOb_2_TA9OeJdeeEfkVDQMkDYIYBU_6f5urH0wUNjXApl3a3JJVy88eaK7E6P21NEwmOEOJNB4GVUXl966ofNve70lzEvNMxlU0kpH8K_Ua3RC_Ct6BRFm-lqhM5w", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109819115750844548700\">Helen Yip</a>"] }
        ],
        summary: "브랜드 제품을 저렴하게 구매할 수 있는 쇼핑 공간입니다.",
        updatedAt: "2026-08-16",
        highlights: ["브랜드 할인 상품", "다양한 쇼핑 품목"],
        tips: ["정기 세일 기간을 확인하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.nike.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12841780448881380328", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Nike+Factory+Outlet+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "프라다 플로렌시아 빌리지점": {
        photos: [],
        placeId: "ChIJByL9IZj4AzQRtZs4DftUA5M",
        placePhotos: [
            { photoReference: "AWCwydg2GgBTJqCm4STIwmky752yukr2Saz61JGp8W-WzTfBO__Gc6yf3D-Cx7S-8kAioSLiCOusW_1CcVGzHwnSRiyNLsTYTPkGO8BqJOXk-QrTfbqD2ul-rF9N50fjT5pa6Ij8uqsG09gilnmF-WliEe915hRE4CHzK5k5tDXLhWfWezkF-U7RQxcfFHMlrdBgSBDmzgnP_mGHMauOZYhebFl0P4NoRNicpjnpjvANNkwE4E8dlBsNBLTr2Pxpw4MYb7XG4haK9elUagblFHEj0Wnn5azf08FZ_pQcNlAsFTRjWgY8UZhSKk1PajlZHBYSgsVVVIGXHZYMdcGymUy8g0KJrhTHhnMzsooSyzEc-mpDnL0_U3qDC5lj3R3R_L-EJZxZlx4fnaEF2N5Y2ldoM_UqqcVKuqxgZwqAIYP3TmxSoA", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108355962837679942281\">james foo</a>"] },
            { photoReference: "AWCwydiFkA2d3jUAar32ABM9k2xt0PPrF-BIK2LB9uxrkU2tVvQNUr2dPat5W_oYYqTXuaRpG_Bsb6hwC2aPm0M7sluQZV7aSizNCQK8-YyNRHCV3RYrPRDIZMsuq4Tty2UORAv3ZubN72nmBii0jBqxNkTuvSepZ34gWK_L-F737YoU6d2LmTGd7FZZ5ELXChjya532rmEhnvV2kskrFdMgH2KaMgOfruWWtnph7DxM0zUvMowmbu88OJi1Tsr9yO0lSFQE_V3tLiZi_ReszLl5EWYi4bb-VNzpCfU0VY6kvC3IgYzp3Kc7dSXL9pf_pdmJxCSCd7dmQuWykNWK2mwfqRYnSqiZnYDQR_Vtzk-Gzl7Dwnc3moOZ8x8xIoBBq9drVhZVIeE9m91j3Cjq0j4d8l1---hPwNSGq8EK2HLdRzC_uw", width: 4800, height: 3599, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110069152858244008036\">Wusojai wong</a>"] },
            { photoReference: "AWCwydhpIm0r2AuWw6WzAhneFGCz1Nvtt7h6TjUfyfmeGQZCmuodnos9kbtmE0sSH5Rmj10DACjVJFGbh4_OwRcVAv2y56PajVUQ5oySqsZr4cREG_H5qPzbqZiAj2p-qY76YsjVldXea_D8a2mG2bF_q_PlZMAeenZfvYi-r7AA16Y5lpfpmpXTXhaZYM7iSXBrBYUFgBm0EcOhyVAH41QcRpZW-IB7YpH4tzoQxr2Xuz9V-isZxol7ZYWPX3BLSoCh_LoqGNeEMGfLhHMkNnyXvfAuN0XXMn8EMD8ydmJfSLsv3szy2D3RcwnoImnyq0HugokRu6jHfXcHisO8Mvo7dRrDkmo2_OekgXGjYL4hoHwFwQKvB_Jm8j8WjzGeL6-OqrL9I75KrMOqSemVRgOKlCzSdO0n-xQD6FTNRLbwAMI", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111875204823925141150\">Benny Chung</a>"] },
            { photoReference: "AWCwydh4N3hI4qbIn6eNsRfTOFQzDdjhaE4Sw-P9RAzrJzEZ6jgT9E6ua_s-FutblaOSZ7-0yuc34RnDQxKIufUae-7xXTjbl3ZC0ii70eurH8Zf9-qaPr_wzURl4Kr_aRPgMV53HWMmTHM-0k4CTsuqLTJVfRRVhSaKglFjmO6rEbZmdIXnxy9zpLfWqqobqnv9AYDYH50L3uh4ZtXYOD8RDHXxhnlL2y4-SeHeo3kN7yH5vaMdQwD9PP2KdZ1s36a1N_Y6DsAeA-qN41clkg5RQJpyeNT5dzVi2R-BpjoB2fipGlx9MxHGBs9Oj3iiCvlQoBBK-tGSf9nZlRg9Kj8RzKXgi0xAU57xezEWitf42T8csuQVWj60RolMjwXO_6Lgc2Doymgy3cZGcBnY-DsKjoCLS05oP7jBxHEbG6JB0u-N52_m", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111875204823925141150\">Benny Chung</a>"] },
            { photoReference: "AWCwydgc1ocKJUj-h1p7ZSV1FPN8N2uqT6z0IClHm3KTumP8fhgITHs99Zl-YVbMLYBhlbOPSYBT64sP0zEkfOjKPKNeuVsNhold97OgU36hcLGdfjNcbCDRpJttCIRQscLHRtrx7m7ySl-rYQLthXvyLaFRnXhmi87avDEJ_f1MWm8MHGMmnfW8pljMVxw1VzANWtR_u7VEWvvXfSSUAAPk7icYxOSagQSpOzwkRyrrdrm593F9hTQSp4UIyvGJsMk4xm1XzaFTWO7HPMku8XTciaia4cROh1E6x8mN3ROk_BBeID3lxLnEkbDKgGFwl1NWwTJxE1hYFq0ECXx8oONuy2xLqr7zWAE4ha2qCzTXceFwTLg6PXtwXurhqsN2Q8Iq4kQelqo8-5mJNp-n49KW4icjdL3qbSNcde5p2sesqHOhxw", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111875204823925141150\">Benny Chung</a>"] }
        ],
        summary: "조용한 분위기의 소규모 아울렛 형태 쇼핑몰입니다.",
        updatedAt: "2026-08-16",
        highlights: ["브랜드 제품 구매 가능", "조용한 쇼핑 환경"],
        tips: ["구매 전 가격표와 구성품을 반드시 확인하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 7:00; 화요일: 오전 10:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.prada.com/?utm_source=google&utm_medium=organic&utm_campaign=gmb&utm_term=SD92", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10593404185740876725", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Prada+Hong+Kong+Florentia+Village+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "ISA 럭셔리 아울렛": {
        photos: [],
        placeId: "ChIJz2BgLO0ABDQRPEglLGkEVZg",
        placePhotos: [
            { photoReference: "AWCwydgOILW7SUwx-7VI-t1yMZmzRWe1UpgPVY_9sLW02GEHd5mr1XSTdDFTRRhBZ2o6Ckhr8cxOGOsF9Y9Xv-KyQO8nLVZy81iLT7ESG4jsfzYq2aw1dnzbFlJtboEhH4VNhWF4UrwBJKFrBGPSbEgxcjSJUbTLccyqZ185EqF0_CiS9sdqaPq5iwLzT1ZYp80WkVq1E0GX6XDfObloxYB2RxRBpMBSYG2nHrsWFiCn49u_rVcfBIp7ob1FOBV40qhfmQbR94cR9osxkBs_PhEaLcW7f-H_xSJCMQOLk0lp290NGLDgKZRYWOs1MKDNe3sJD-kjMhso1-ZVTykqxl6pvRVwveEg3SMGhTayTh6aw1u63Fx5VxpbB88vMJjBSPDXolG-TRNrFcnmG7Iq3kPkHeky_io4eNo3mAA75CJVGOAYbZig", width: 2610, height: 1205, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109263563764480441501\">ISA Boutique - Outlet</a>"] },
            { photoReference: "AWCwydgkJDnKnwuj4VxOS67yiaqVVOFBcD_5uO8j-l32t6gF2otgLYFVaeSJwQvvQqOMdRopc9mZa8-csC5dNpT-tqsDECipaDShLw9jxMHjw_KA-Q6Mu4pWAZp5eydf3SOtVnT6CkNDAna67lg4hgPXFdYbEejNQ-7umZBMSFWKcb3xSBmQooriXU81bRyCA57ue1aVQ-MERv2ENlkTJ5Sazu3xYCyTY-Jnl69ENy3b5tp2W2HzSx_ooibx84wB2klnD3byLaouTJuWBoZXMvaEwm0xD7gcrYH62Ilfc48fzli_lAXjhkxQsmYPFIZnZK02zrO_yAGlag7qTK45dyEIGoOs50wlMLYdc5u7po57T_SGAQx9Xuj0oEiznf4wa3W7j8hZYCPlkP2WbmAb-M19VGB6l6OePLn8t2m7cdZYzMhCI6g", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110726585744148697934\">Wong Francis</a>"] },
            { photoReference: "AWCwydggYhjFUQpxt4q3AbzkMjZ4uNMFOo9kS5QgUiGRrv_TV6p6c5cHUUFTetoLYEPYNrjR_oCRsCtrD4Uj09U0iU2HV61J5pfiY2Nexb-v5p5B0TU4HUQcI1YbvGH4Af049e6xsZv27dQfXsEgB5uJVpbcwpMyBeFNQDIsqkDQa0yox-1Q8BKe-KjmVYjtqBd6DE56tODUR0fy6c601-QuljDS4pThuT1aEnkYGKn062ottZ6BhvbKgESEOaqMZ6-hSZ2dlcOX9z3seajulkfhWtjhdH7fPoLIhT-5qpv0eLIP1mm9D1BV4rAni7R3gg7g1ol7fXyF--dw1i_t_kWpxcc7sk-sPbDPHDXC8anrJQqhYchRM7NBu6OkqCoUhRWT_XpZ_4leWxOflv242FpPAbx04DtKy0zjSNEtQb75sEM9rX00", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114918821791545062612\">deri slyrova</a>"] },
            { photoReference: "AWCwydgebfZ4_vCOB5k2gCOD7Xfvc-m7mgV_gdZAEw9bpr4gkpHbhY0erHG9BSsF6LM1Kne6LEofpVu5HE1omKRw9qKZ3Q0m1sXQbBqAowCpw2IqgBX8ueHugIcvBr53oUaoU0y-S_rrIsVNKQU481dJjwy86KDarfqJTq7y7OXFT-Bomze20dXrLZ9yOaB_bh5enZX8Fy-cC1_KbPw167oipezGt-d0WVZPD4vbdu9UtWFRQVXfR9NZGbJAKFtJ0uRZW2RJ_A5qw6CHPK_nyoFXkf10HtZrOkzdgqvBLQqRJgibl0PrcyY766BXOJjbNwZ4_Udg3idVLN5D1y79E87zNAIg-M0DKuKBPVEtT83V06MqQFiVeTS1XwpcWXdnUyX_dg9vreHhbOPcb5079Nc_VaW_FNKXcJcNnqichYB9kb0", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114918821791545062612\">deri slyrova</a>"] },
            { photoReference: "AWCwydjqjppMR84SwPFAaWK2_UvjLEBARfhI7RWJ832eBWsB9LdtIW3o9zRoo6Cpo1olRay3XIUsj72p2T2RocAtGI_AnLv3X8SYARkCl-kWIC6oIrHK4rXlJaZTtEJswjBY5bs3RQSKGRGVn1P7tJLbTYxldiBqtlIV0vQOwe2Vnlq8qNOUM5GtnR8nTpDuIyzM6fKImoRsrY0slkcupXoicQSurtPJ6onL3uRs2jf7RGvLwXT8-wRPsUsry6W4wsL-QGGtwC9MqinUO-y51WbJiv2CFcgAnhIMpIJkPz8tf4p3GNC_30hNpu4cyqj7Aw_J_8-2NjNvu2NsJOo_jaKZgSm1ofEGv6xTz8YvUD-Gt2fuT6UtLuJL3krHLSswT3uMPQekwWghGhidV-SAi2lh27BHCmUMB5R-rLUrig5Dk2uc7O8", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114918821791545062612\">deri slyrova</a>"] }
        ],
        summary: "합리적인 가격으로 쇼핑할 수 있는 아울렛 매장입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 브랜드 입점", "할인된 가격", "쇼핑의 즐거움"],
        tips: ["방문 전 영업시간을 확인하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.isaboutique.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10976684516544170044", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=ISA+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "T 갤러리아": {
        photos: [],
        placeId: "ChIJJY9Yz1YABDQRlzB3_HouGx0",
        placePhotos: [
            { photoReference: "AWCwydg2pcByR-xlQSUy5zAhEAkdjxe7xnYQOpIZrLM7lFYIDnL-b4Oh2T03YHDJQX7KahRxrhT1JxD4oEG4OpdhiDA_1JaMHwHf4xqEQE2s9W73grTrY_ENuurx7m9Y-2P5jUFHYyHFFOYSYglPv_4a39jXLTvaSpDnX9B9Rsebwej1J4BYSyDETHA44Q6gNeflkTZk5yVPx0Bt-hOCdZ6L1AWaKpiAKWvLrUiNtPGpthXOQD0OQkStaqIR6GTICR3nIIrWm02PfX9F8r_7tC05DeAld8B8mxFkc3bBr5FyzB0HsQYp4iO7MMTI9xAlDnanjfOI0ApmL1fAH3H52Zmmy7mQdf5me93gsLTvPGC7llhZDHhsUXtzcPqDQZq6eTZ7o0RSv93YZ4RCGUuFXdwvws59oHFhDjOvJIcCnhv4e445SQ", width: 750, height: 356, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109576703211521374850\">DFS Hong Kong, Causeway Bay (Beauty)</a>"] },
            { photoReference: "AWCwydiTSG0nDYXJ4apPN38fycPrU5i9fuMm0TOsbPZ3lPFMDq6S4950VM_9o5bJiR2cdjEUDLHVNzyKjK33jidu7yDR4l2YWDmRDYLaDgFGPAJRncJRw_smQ6qOW2VpcS8TYpM0ko3tvyxPwu4-Te-j-qHcGHYCsahRpMPQazSN7H-AdBjOdvcgFbE43cNUF4dPEmLu9apTCHKdEZmCv55dFSGU5G97gFMBqhMxlEpfIYxJcOivbFat3xOjkMj0RgW2ehMbvUTcsnF2XugKV_26KN5HeZQwZcxMnWrtpFJtpZxBNm87A9LowELNFPt0l1WNIGa59I5mzape8mz7rNA072PuLo7poPN519xlWO7KMKEHxUnLKbDrWZ3eozCaKp2KflsWDVy0OvpezAn6XV6bojbfmrxDQc_xfiRaYgaR7SwmgT-EMOj8gR0nsHuhIO8w", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116387938000486442663\">心路足印Footprints of My Mind</a>"] },
            { photoReference: "AWCwydjwX1MXZ_PtjYW3IKP4pDFkmtSBb4RrFxzjQfPJaLODDp3wHMAnGMoI1SdouKLyBcaTSgsqk_8xl2I3UuwWblm6Vh9pGsUPvy6-61HZ1YyPzsn6I0RDojtfFOPR0gyUDwPZJtgpVVwaqwjnXgnqD41GmOSJhKUMCZ_F4QjXGi3K2VqxcM98mHjYoI3z4i52mPgS2sA-VgaX41HMRcOoVRfPSmJxVLWTf1ycH99aSVOLfELNejnZMgzvcP82j4xzn0UVn6Vdom44SHRQuij5XFW1jj4Mceehr2V154vOhgZIYsj_YEf8X8ypUx9lk7rBgbBGX8bqRNO2T2ah4u6o5EVVQO4ZfvXy0y5HG6lTHv81x6vnbTZa__2yyGoSMNIA8jGugP7VAC3EhLE-84E40yKSq0nW7NerG2AIHQMWoUOP7g", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109622210850760913643\">M Sanssouci</a>"] },
            { photoReference: "AWCwydgVyVxwM8hI7xptpJUB1GwaZYYYcT911e71OREO7xZedgmbBx7CcCOxKlGGHAnrSfZGQAPYhdA2hbRG3-M0Ma8CZai5jqrNlxzOkAjlPglQNf5LrfGjcIm4rEy7xX1oh1b39_obIQN48LGXoxjBA14wS5gIZ_dQrHiECp-TQfBZnz-H2IhBJ133_EHL5LBWlGy8amHPZzEPm7sGAq7t2xJn6EKzGwUfv64T29CREbxOq9TB_9qW6T31uUkdT2iMFN8xyt1B2uDe7MMn2EBzw8Scv3ktmVfA3SWLvsMc6_ljDDfQL5wHLgJUgs2o6u6YAr6fD_euqHN6mxq2hIl64yTAaiGCtYGADgjFRvwU5dHGb_jGwE9zfcWX_do-7PbYGHhk902T4Dc0mEs7i7fyXUQTYiY2-bs4WuFM25RK8F92N3yT", width: 3456, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110203124504666705288\">Alfred Fung</a>"] },
            { photoReference: "AWCwydgx4RFW9QFR7J-GaiA0u-UT4fI49snpgtlADjEDHmngwvnEBmk_XRyyigQbazddrwELZgFliXx0I6CUncpW5ONIc8-bwri3YgId2fCw-xhm6R0jIUl8AiWpctRatQ_YSXk6tpgQL-j9KkcKr_xtY5yZpEU0XYWGZ5o95mVGTz_IcieqDLzNMQICsTGeVt7OS4Yd6rlU--sI24rwux493yXoXc17ft_BEBe8qZ156iMw5CJyGgnecMnBOUao3wmDr96NFe1pz3H-lAciBriAjI_l3T05s9l1qg9w0-ORgt9l5yj_-NH_gvwLzYDcRKQ1IIf1rC5YsHox0gl4onmmwWdHNApJiHpdPQT9hKo-cgdKTZ-Fg-x9YBGcRnIaQNnCyajvxwmUHWroOVOPvTnkJoKEjL3K205yuSLVhxBxUHASy-BCEgKSGzKp_hCzLily", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112950356344892166412\">Kerry He</a>"] }
        ],
        summary: "다양한 국제 화장품 브랜드와 카페를 갖춘 쇼핑 공간",
        updatedAt: "2026-08-16",
        highlights: ["할인된 가격의 다양한 제품", "국제적인 화장품 브랜드 입점"],
        tips: ["자딘스 바자르 입구 근처 카페 이용"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 9:30; 화요일: 오전 9:30 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.dfs.com/en/hong-kong/stores/dfs-hong-kong-causeway-bay?utm_source=google-maps&utm_medium=organic", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2097321157227655319", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=T+%EA%B0%A4%EB%9F%AC%EB%A6%AC%EC%95%84+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "홍콩 공항 면세점": {
        photos: [],
        placeId: "ChIJIY2J7NziAzQRpTk1SBuNTOQ",
        placePhotos: [
            { photoReference: "AWCwydgxyElQOWxihmrf_JQLf6hBz4ymIejNc9pvhMrYNOWtVOAy6QnUeXiGGgzWWMtjWdWugYWJobpXElCsNr8cx5cbV9LKiIZ2NDor6I6zQvZbYOUYKnBFtnIQ8GSQu7Uf4i09ZB-4LPXODXLKUG06q3hJjrBnPy7_HeJgQM1A6sTVgdthrS-vq73uhaeiosfKnf3QbgVCffDK-odiSiz0vnmATYFkRVkEA0J5zuY44EZD7DLK72cszRef5egEJTKZA9BaQmnftbJ9R1dmQilN6_Vqv_-PuQAcWsEaZnnHIXcOpYPsUPslcuZ8OEZHrOcMFYoNAiqrYYKf4sHjh8ia_LpXrFnDPQhYMLU4oppHH9RMg1KfQt_g_42V7rE-0CcBe0tPw1INeq_YW1aaIAs3308DmOIbgiM-6kfva2SzMLf1IYLY", width: 4032, height: 1816, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115921220974240256070\">xxdjkid the yt gamer</a>"] },
            { photoReference: "AWCwydizJEiuolCDMaahIT0fw-Y5HvSMWUj55gFzT3lXwDs-JnEB3fxMCA1eyAg_M1CPa5mIdRVRrvknXsm1astUFmeAkpxB0wxnh1nL49QV4fH043p4_2i_jJp-QAZsrTIQth3SK56_F94hGj07IXE12CEZupn-E-hh2KX3T2dkQo_42Qp53LColArtN6U6HBBmB3ePvHO3yb_wTBSqN08U2OdWh1WXm9zuvED63lHu7BA3OZjsK2G7Ni88sBYW1ajbERwxmGEptGlKQow4SWJb4YhgitBn9Bjw5uBjnIGy2YqRcclRlzBdP9ZmKJhIr8CKEIcikN81zPwdVbIY3pRN8pP_td76wG5LM50nQkmhpstyril95mEJDnU9yIch1fEeJRnK55VKF5xrFZ-wCJrBLPLz1YSTdFZ5LaC8ZazsO2ob7bZp", width: 4032, height: 1816, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115921220974240256070\">xxdjkid the yt gamer</a>"] },
            { photoReference: "AWCwydiwqwhr13-DDE_rSP9R3ugTq3t-dswTsEn_L8DcRYq1guHIdOu0EA7Z2ugimxwyginiccs9Px-zbyQz7UON-BM67YXf8GRSvS6ZPtQuFwqlqOowGE6j3irhHZuAqSo-G3z3VtrsL44w3LFrlO8cZbjekaktSOdO8iOudixZUedrA8AFi6r5SuPRj4wKnHrFKUCUWamOl0Jlw3QvY8iiG1y6S0rt3KW4HWNMfuNDlTRyQv5kRWVoTUUm7TAsfiMExl2TK1bzCv8kvQhVn5sBq2lXv5GRJ0KW0SUmX_R4QFOx6pcbBfcUOGREVseEJt1hNxXjMbr0oSY3_HkQMReQkFIv_oJYY-TQgSmEZ6oWeMgENJMaRO-jzHzDTLrBbWYpvLw-W90FU0cpUrhwDa43FIP2oTCwy4DhcZNKFmMwWgg", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101643820823137654634\">FU Chen</a>"] },
            { photoReference: "AWCwydj8_xA46Jkf3X8FPZJXWlSLqkLdd3hWZR-O7wou-J9QVYDpmcZHn-SJn578n5zGRWDquV2DVf_mTgtQwURqEuD7SZz4RmGm0xseCaz4ZEj1yBYDjs1tby2uMsvO-koWTuqYMiMscv4_HlmpVG3-vl5oNz8b6tmjH81BbtdDb-Ni3pRP9sGatdjq7-cMPIlNeX4wnG-V9hyVccWO-gaXNqXXXEVe3S_xXZ869SIK4OVh45qfD8BR4ZHi2sCTCXcmYk4Alrx8APyZptbwi0RTYqG7dA_lEYqYZYhR77gxuLfwzrrFlNHbZQVVl3c9rWpDJaaY0JE0IDCqh0vUFPxfws_9gm5PjzGtZijHMfe-0BM7B7rUpjNk_9-ZZ42tVJVKabY38dZFd2-adkhh4W-RA8JHmZ3mQlE5NzDYP_-NHKJYKQ", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101643820823137654634\">FU Chen</a>"] },
            { photoReference: "AWCwydgCLYxJbQ6YOi9BqDgD8fpnjCjxTDghIn-EbYounHIOkGaMRQHfhaSbqGyBQhountUjGaLRN3jUZKI5e4hHTxvsATePw_q1aq4RAyu4NsKOpmTZ7a9FoKPt6IuvNGcDg5vG7sEyVQaA0IwWKZuMZ91qBR0S9jQ8pkvVsG9n2GhtkT-zq7zSrm-YT4yRhlGrLeIqmafCNGovsF4OY0Ef6JX65YTrhcWTsen60DltmuU6ideIvuMOzcn19thJsAlh09vH-RUeh5gpFeAeEh3cGFlfvl2k2__towqW44Rqsn6UL6a0dl_0O4a87MzULG_AeIvCIU9IPzSwgZZ24vjx9yLefZhzsg3ON3QnyD1eHueVNohQUW1ZXPgAOaqF3nKl4bcAreZT3zFgyFC6FjET4A_xWXS9p27uIusYZlc5pFI4-PlE7UiJgOSwbhF7WppV", width: 4000, height: 1844, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105836579422577440870\">OcP_Fact finder_Info Sharer</a>"] }
        ],
        summary: "다양한 상품을 판매하는 공항 면세점",
        updatedAt: "2026-08-16",
        highlights: ["공항 내 편리한 위치", "다양한 면세 상품"],
        tips: ["주류 면세 여부를 미리 확인하세요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 11:00; 화요일: 오전 7:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16450678687192660389", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%8D%EC%BD%A9+%EA%B3%B5%ED%95%AD+%EB%A9%B4%EC%84%B8%EC%A0%90+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "홍콩 면세점": {
        photos: [],
        placeId: "ChIJz3rwfMwBBDQR5gCZIkAAwaw",
        placePhotos: [
            { photoReference: "AWCwydiwwXvvl9wjTgn6OoVj8T0COnjnBBTBlPyCh-VjAkl4YjQC2mk1dpjgitiRwVp8zKjTLVdbV-_bC_UUjZ6-s5Kxn-bv8m4mYXDMWDwSI099ep3bcYjIDHVrcivtjhzooT8NxSK1JATjUJOIWYWcd5alF9k4o5xNyf_rG3aRzHxBjOC-32PmE90aBN8Pbw3pB2oCpBtkLkUQ0mZGn2IMqAKKIhCNykG_8WHYzSbpi-Dzg4m_YJCCCOGIHlJmT4B8J-k0R8ym3EjR9qkDeutYQtLOcVLWWeAHGs5szMSrvjKYedy4hG4Kqe07-FgRcRzFiw3AYSC3_PnGg4Cwace0L4DWUfTgLcucObqY2g6x54vP4ma4upLV0ZO9_gBa1x-6Kz5NItv-rjq7JyvWj-sEUmPQMwQc-GgC7GNwC4G4C6b0eJM", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117613532151849922819\">攝行者（潮Mall派）</a>"] },
            { photoReference: "AWCwydgED5NJUOZSCR5PDiXz00hN1BNdXks502h0b-IDUlHjLe7cW9V-EuaGGrtlFqS5svbo0Nv28u7MI6f43XXsdP4hTuQdDysjkC41weN88cWHBBqPH7jBxZ9Cmxj3Qe2tH_71oXj9fenFy8NzNsIMGtElYPxWDVBmWYJ8TCq6P5eZqrtI2rDiRZQgHGX38moDaY-QwmgPElMWwQPlauzRNFnE-qyMwFvFY0NaN-acFIhgmQJ7OXFwVQvmUOEKfvO__THrNjidxVu_n3ozkQF5_cJ_Il_JWkwjCrsZPf2UbZod533LD2MU3yE9upCDdWgkpJIl5hymEJqyHOEpee2moiU6tPRT7svOeykehe9Q8ZabCgxl5YjlwxzwfyncDBX6tYq1zLRfaJ7sMceMMZMH7fSWbx2HkTMtl0vSgx246rYH6aWp", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101627023078242466960\">yilun wang</a>"] },
            { photoReference: "AWCwydiNg7IQRexVCWKqf9mUG9Zv48Gofm4pBTlVhvcGZTFQigEIJDKRudVvmg1pP24LjDlD_MXBkQZWe-9gco5F1kuwDGbYdqQF5b29qdZ7OpX-XvYO3y41z0TfnCoDcgjm-5bU1hTpYChMMI7HvDUQsdAwRUHFZcWZupCe_D7rTO7HnTSUUQioJiPyCHNnjJF-luen2GdZbsW5R-9VabSNfUmWTkcWPYCytUHf2AvtpYgrPa3uVeDoCrXayb9vigmfTwi46e3vH4_naaRrnYpSwOUJ6nV5hyo2uwvClPzrRF8DfE8kBiQ9DgYcg_FVFgWeEmFPJFYZgGzweMR_V2zKr84ShepPN89tKSOf6EuWu4qxZsnXXVjF8l-Pmz4N4Y1FSp1hWjuW7E7nRDXowEdNSL-NCGtMaIY4Am2nd9HNnDFrFaxO", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117613532151849922819\">攝行者（潮Mall派）</a>"] },
            { photoReference: "AWCwydiVWj4KDPGyuDXAODV7r8_QiiV-olTTG5I3ZAWtMgJypAXpfCtiHyIzWOvPyN3oYz8Nud8RyxPQBPrMGPZeZCIV0qYZd4zXIheu5FbOzK4Wjzz2esRJcT-IDPHYG839gKZHBxpuIKM48Jw_4Y-wg5X-qsq8pXaAOjpobTSMD5Zh924HicFJGRLtrGBHeh6Y_XDpzgliJDOcJ7pQivYmm7ZaLT52QjyL4nKLlXFGTTBY6uKB8ylwnAUgsQn74rA0A8nxOGqzHC6BYSt-I6mN7-XH1kxFgxMG0S6uKkU66vYqOX1AfXz5IeEAz6_aeJgSFJnSyzoXObO2rgT-wxAY8s8EC2a868OIvfmijUtNcklxtkMZ8_tvmKODyaDz_N598IKNYddisB_KfBTLxZzHX0L0a_gcNUKwd3NUu-5N0MqWVA", width: 1960, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103137704606540746312\">Abc Abc</a>"] },
            { photoReference: "AWCwydg4PYg95Hz1EYFba4ssUW-hado2W3NyZYg_9QzUG4kx2QCGuUDkZ-lhEelbbYyThWY48NdxeQLhy6UuODxHRjUxkTS83eqSGWsKvWNLIqhvmQjP7a4S2QJBGkg9nMdgzdYjK14OJRM6dCgxGFAKQT6bq0VhE4uBAENTLH7cjq-JLtNbiEsPOI8V-MCrG-bQePp_RJQ15z72-cI7Ki7jXh3j6hb87Q0Wjmrb0uClrUPfn1JNAB7cAoGXQuD4RPjsoG_y7Da6cYGNayrPyDqVNNDVT7L7iK7yy_FnH8wQz4UrjJZZxm4IVfxZr1IXrtbvt-3HNvMQ4dhcRqvcwrhMjGKR8x8Qkv_W0P0rzo8VZKuhk6F4i_0H7OmE6mH61Wfm6PbNuqbunpYQZfLCsFuOKuerZmvAWD_wUuf-KW-8ktnioo0", width: 733, height: 405, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118129526953235830740\">Hong Kong Duty Free</a>"] }
        ],
        summary: "다양한 상품을 갖춘 면세 쇼핑 공간입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 브랜드 입점", "편리한 쇼핑 환경"],
        tips: ["영업시간을 미리 확인하고 방문하세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:30 ~ 오후 11:30; 화요일: 오전 6:30 ~ 오후 11:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hongkong.shopdutyfree.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12448231120487121126", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%8D%EC%BD%A9+%EB%A9%B4%EC%84%B8%EC%A0%90+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "CDF 듀티 제로": {
        photos: [],
        placeId: "ChIJf0H-u5zjAzQRYXAEPIlLRYU",
        placePhotos: [
            { photoReference: "AWCwydh234tNOryjgvko6q1qRKwlAiHa3bmP6Xkc-A-89kut_1NJ6f5WSv4s-qZqsIk6ltCwPMzE19_zoaOkoRjw9cD76MbomX2Ht6nKwxzS7LUWmh3LgMdLq7trgmeqG4HiZ5fxEH7wm0V3fo3YR0hcgMXZeFKFuf7cNMKYGPCgVyuo3LGrs2riFt9Ler7iPhBNSkFM-JHmdq8RgJngndOTfK_ctJMXU0W9bphiVc12HdY6BTwSs7a1Izhc7OzK9mZj_U8AfvH_AcaqxTiJxCPM7Vbt5r4ns8LkOu5jIeJC0Kanf1Tdwr_Z4TZF_JBPC7YnVi2nr_RByWzLNd_HecTqQ6FRCjzqcYm0m6V-p0ph5ASkuckeCYBghwcmVtmjxc2vEF1qTiy5Ji8SgunO_p-tZ_MuKcVhKyc0oibUMLOMcg7mzw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109660421891436619230\">Seung Hwan Yoon</a>"] },
            { photoReference: "AWCwydgA_QOvLgiuScG5QUp9K3WbHm0cc1Kk2elWpGFTc_VOjmtUT9HVFYKwgz5oMgwa4jLJR_80NmhV2hLl46vQ61i0u9urtMAAX6FbpDpqdOM6vrY3P3UIPZfRNgfyIca7fGtghJ2aybDIF1DsE0F_5GpRoQDWKNW1p7ZbvJuX44s4tJUEqKQFfDVXB6LD05Ku6Adn-Jlj8vUUl31tzm6jUypti16B7XTQfFnCWswz_f2IdENqohdEIxttrEP1DMNzVIS2FE1tz7UrLUpD9SQJkm1BL5CmbuABeJ3a1pnB-5HipBrjN5TUIkkWFh0qEUP6qYAMkQVqpPuZ_i4b9TgR1ZCxvLkzEShF2i6esruUjAJC_t8HtHblCOj9rKMGrdsMvZGBe0fW7aiodUbNN1CKs17xso9dNjz4E8bNlLjjDP0", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108711607753958574277\">Jean-Baptiste FOREST</a>"] },
            { photoReference: "AWCwydhOqFTGTQix-P8RxT9jv_rdzkjCGKXrtpty6785evK2MnNEb9bht6w5kBtlG6ejbGOQ0sRnQY8b03n01b6HegP2780c68mfgXm7c37t5894rymeWtPr-GMWB5zz7y230cbSwytjcZQG-7QsTt97L9cH61-jOE7H_wa7XojwNPXY5equPDFC2rFPXwh1xwE_lHhNTUgPPwujwz6IYfoFX9gq8A34YytfRqahwg6kKddy-wsJQCqxvXREx5PXRaJVOILRJsnc0n9l3Ux84Y4LfAF7EHZpNUegDizJbsv4eRzdJb5wTOWgWUZmgJKJF4Osm3D1iPoOY8cVjjPU4fAYX_d68hnFD4U1HYVbIuuesYFvCuAh0dP_MqtttfBciQ3tPjDC1twSXBpBiBdoqRWp3k38CzEnUk5IGQf8BoFP46PGmQ", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108711607753958574277\">Jean-Baptiste FOREST</a>"] },
            { photoReference: "AWCwydjIKVRWRxoyn57EJGLQbFLWCdrFYSkvr4Rvm47vK6eICpUUT3KudiXO2ErpaiY0S4JTwkIVsF5XGkv-gtOZ-ZjJoC0Y0jIXBLHAB2XziPDuc3x1upRxh0FaLjHoHQmYjmUAtKvcnHivPar-5hDmQb5ZbIM_LVW3uqu5bEYuGrqcDvKDwdN5g_ndTTb4kzlMNVJkP33_cS4a6eSs4DjRG4NTdKBLmPRV5igC2bgnd9NyUn1L5XFc1E2luUuEV72UfmxFer3uc4TpZr7-ukPVx1jHL5RliXG75cGVcS5d_0-KHuiplHWCtXYJjCY-DyxEfHzYn2BSVhSnJkwTavoEwtJIE0RYpim8nynzTlf5nTB5YrRMSm4AyXt8TMttdUi6OJ7xcHTkXYLqVkC3Rk0Mk7iRNbMgWYh891lGlQKu7WqGH4cD", width: 3036, height: 4048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105307390347995993849\">pat kia</a>"] },
            { photoReference: "AWCwydgQKZvnCvImjGCFlAxk8oZBt0mHU5Z0xWzOztfiT-X2BueK2NAGCVt_G6xvHlstJ5lkBrg8jStWOGWniVUXgYKf-iHba2Q3rxGiHD2f3gBj3Rd0dub3kBonZ9TiXJ63KtktJoQrAWB5p3sSCwDlsnUtaViQNPubLmBLhHCQjap-TY5oEpnJ1sPnhEVc2b4RnoVN5nIgVy2E0uGXfruG026rgZG8SvFU21Qg-oBAXn0dqzZKvp4TdI7tufsJTb0szTDfClqQiiSOQ8KmWz05_pWxVXFRhL0_Dy6qyM6FNxEEB-VnXBSsqluKeTYiasn80R2HyWkCiek5mvc-x-ilO7Y7_Uqkcu21GZjn4C6SsA8x4ctcLl2BLkRBMywPWuW0SsO3tm6Lla9SqEBj7zxwFWw9_3mbnRw0qz0GVy8IdJ-qPw", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108711607753958574277\">Jean-Baptiste FOREST</a>"] }
        ],
        summary: "다양한 상품을 판매하는 면세점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["공항 내 위치", "다양한 상품"],
        tips: ["영업시간을 미리 확인하세요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:30 ~ 오전 12:00; 화요일: 오전 6:30 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.dutyzero.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9603164833226977377", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=DUTY+ZERO+by+cdf+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "구룡 기념품 전문점": {
        photos: [],
        placeId: "ChIJpRmR_N0BBDQRyxvfPwt6AJ4",
        placePhotos: [
            { photoReference: "AWCwydh2hbSFXS2aFSle_oi8sZAiK0lQLir-2GXoCo5PeWDaiBfta3e00nnwJCm8bhtqYEHWoiwSvgbWEADgTcd4PiXIR81dadeCeqc8YJ__B7R5opB74SJmtC-1thLwO1bIr7h8YDRBI-L4B9YlStvYe9yJH8ScO3-Z5sLsb_z5L-4qlHqZ5AMmWp0HKl7XXQoMRtiCt7A_2NzKWhzdj8W_tKP03dU79mLwgf_72opmSjpG3UwjQlwUbJ_d4aS_CEnxM4xX36R2HQYo4FaXv9kIzeTzvhXg7RhjyfR2O7DH5UogV-OOUFDS_WXNDmV55isLfZVW-VnOHrLQZYM4snnHZdCwcWoimLcd4YCdLrdJlumVrV5R_EqpAfEM7fph7nR31XaG8CusUblN3XkOIfBwd-wfPlzmVeQkdC8xrDysfvT57D_b2aWrgoR1ThtZKQ", width: 3840, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108680554040981528079\">Crystal</a>"] },
            { photoReference: "AWCwydh3V9js7tpjbJJngJ0YHbjbeqArFMF93lOtv4hRBjL-qljVkFilJ5c27U6aBT5hpPSOtaOi_aaMgERKhEB1OD5zWacAk3XSs0fY16kbyEZyEkKcg-6plbC7IlRedTjpdC-92uMGWVvZk8NojCpWajXksmOouhMI_0WjPfD6z5yAhj-Rf8OYBmYsqd_UAgJ-zgBnLFiYzE4YNoF7_e_VMCUBIEgr9B3Wag26yN4PmhJYbz4imeKtGja8r1GLmHmojnFSMszVx4n9XYbK-AqbAfr0KLnY43BrSby3qPxUhHcXTrxINXaadeqOev1qv8kGlvprKjuwP_dVbN1So9fgh4N0x8gX89hRNyYM-xM8qIJzQzajrrAjYArb6vU03I7hGFrbMb9M1MKVfv5DRm55cwsTZTVXVfYuu8393rfI30ItnWlh7Y6H5kSoqfCY_Q", width: 1040, height: 1373, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114247089188105046604\">Kowloon Souvenir Shop 九龍紀念品專門店</a>"] },
            { photoReference: "AWCwydgIE5GWit_97PwaiZSrY0WCQfIxfNf5wdbLmysz9Z7x9olT46ZLzhgJ6nweCkxD9IdV2UW0zfGVV7MA7MZ9hAvxMSdPsWr1km2g-050FvBDX1swl7L5ORaEkCySeCJT04i7Osrw5Ih4sU4ml6N02qyBS5fbdLiCQOSD7v_x6Bz2rCpLVkOj8kExx-bdJQnrwFdExDDmAidH3v5fGmu_-DImuWC9Ejn0D53ofKdexbCr0JYGTcrJPhqFUfP3dC5n4y7A9OlT5UOCrv1Ekc4E68x2PbbTYANOtvoffkHA__U5ExhCZYdDZQQGCuDLCDPnht7gwFQ0R3YAiSebrlGYSAft1CngJ0DnqHArN4v8hHChWjF37uE_oevTSaOJpepgoY1O4RkbmeGzq2r4F47RKBA-HLOp_om6NJsZSHJmwuM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105178755471958115466\">lu dopi</a>"] },
            { photoReference: "AWCwydiqAxxMSgC5PTkIfswx11hGxpnxtJivdsP2_SWN4FRvPWlCZ_6UGdy6d5mksL7nvtyBmpO9-xXkNifJ-DLpDcd4PQZKyPc49LY9lzrOJI8A14rwyU-YwEUjqv-apX2M2nhiYqktiNWILXx069pggyLmXxMLncTPDpgUeHG4ZP_ScqTCyElZ0I1FjgFfpVeywkhlPM7UtJviqubButBdqp_R6KgCRrJ7v5qeLTiYrA2BxWxQ9oRwDlfI8TLardNlYeOJ2Dzjr_Wr4MOEHoht8U9EYvFUepr5VwTpZ8FcSk3Oj0ApTHILT5GSVU-LeFm9RIRAzOusCpiwRdAZrniRJXRFUFVoUmlO_mOC6cfNq9n_nWSHIO3gbZN9YmwQrmOmR6Aby260NTDL-X_ldeMJHnvrT7UCBWP-V86P6kAR10DCYg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113009501154896639136\">hyewon Oizumi</a>"] },
            { photoReference: "AWCwydhj5_fkBvQIreaWXO1V6dvp_lOnmA6L3kcMkgzRA-a0P1QfLHswBWfDVKdfaXLBqe-dwVsz_nsrozWKAh9NlQYpkUEyDOsuyjWDEkpiF9XCZVi8ugh7OOhHR-cYoOW4EwJCdiwfPOp9unpHF69t0A-h6XtskH21e77K27DiRLmremjCAVMVvUcJo7trxnA5zUPIgu6t30Rbdr9_X1uurliVmi-pVLy5vaVbyQAipN_Sv5RaV9TADnJoo951eD76CAV6B872J3H5i0_qPWFkHlZT0RnQTZ9EiapJ-gKiriCGjn0N3z61FO1s6bQxpoCzn4V79bnriFLxXYHxhGIC6dRCDwc5qyN1TVqqbPGaaJwxu2Q0nEaO9-6d_h26iZcQmsv81oAc25-fLIVFeqJCzNco1vKeafOKMjg7M4jrncRcuhWXqQq47wRiwszsOms4", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102700113678835863165\">林芝媃</a>"] }
        ],
        summary: "높은 평점을 보유한 홍콩 기념품 전문점",
        updatedAt: "2026-08-16",
        highlights: ["중경삼림 포토카드 등 캐릭터 굿즈", "다양한 기념품 구경 가능"],
        tips: ["찾는 굿즈가 있는지 미리 확인하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11385234046727429067", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Kowloon+Souvenir+Shop+%E4%B9%9D%E9%BE%8D%E7%B4%80%E5%BF%B5%E5%93%81%E5%B0%88%E9%96%80%E5%BA%97+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "홍콩 트램 스토어": {
        photos: [],
        placeId: "ChIJMTv5wioBBDQR7XTEukZtubc",
        placePhotos: [
            { photoReference: "AWCwydjFPqoeNSkDSQw3dJ7m3pyYoQiLJNihsHAzPed3QlP9cCehX9YtXdhoa0KrZrUmIkhB9TNoyzY54DvuCqC90IjHWKKfB4PQVsHTleT5pRdiK1CnyiljvIzte4g-ACE99O33UIJTev0xoW-8_Z1JqH8NdjqOiDv0pAAUZ1aXiMrxwTXH9NxQfpyzj72JpaCmBhWznfU824aZZgyxUbFrOK-SWrNeD051c1VqC7CQk6V4ew5fBceDBqEgKdIoPFyvXXa8193RavhZ5f18zQqKu_vGTj8Eo0wPhxWgdm78CpyXIJK3FIp4n3Ilvdf_tUjoKfsyPXQRQrH8IhdZdKaCxpwV9k7dEnNPReYLi2bw_K8oHL6UdA9UbJibtMRFs9ZVr-TRrWt_rIiupzlcoOqTU4Er-0tQfY_NBwHbQvaJDq7VsdQ", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108716533290322327726\">Happy Bird</a>"] },
            { photoReference: "AWCwydgIo-l3EP1ErmNJRz40O4W8m5gwaX1elCHOg36tvuXDAJGtQ9Bx2xxbHcd2fQw8f5M4CRwcis-DxAHoTT1kpy83Qr4LGUOrXzb3JmMy83x4NcorA0C6JsD2CysCO4tfD3Fj2s2bK8nbEkqBsDuznTAiB903rL9I2hBUITasskDQC72f8v4KXQdI6gaUTHZLLw24IatJMBz5PGWbqnjVREVyf2GNB84EGCWeiJLSk2PgyAT_kTdxvtachdaf4Aq2PJz6CBb4VfuLGHEE0YAu_a3YEFbPgUkZNZwRMWYGuDii503rJXzwULWdpMtK-nqqVjKkSr6Jxfmo9iDiLRZjZgBlQkilPIkZ5MK-6OdnsWMB9M-3cAtHX5aQ8ptyOkHwCV-s8VlIDX4yHbNQXh9DeiS8AKcBoVCYU21MN6346U7agA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116425500972126129908\">David Porter</a>"] },
            { photoReference: "AWCwydgQoEnsvD_qdkh_b1JBIeH2GMhs1jyQBjb26PrOXL1DYzXJfT2TvB7ZFxi2FdageIBegkcDyM9L2v2Oa-0FpxBf5OfbA_ANRW3yeyZZlL6d1AW1l3FXhzzk_0eYeEK-ve_UnlHweUZbJgAOnw3ytNHd_jWW0Xj6C3ypT9Cf-jusjNHXW-dCEvk79_T2k_50BZzW-UGJxgoLJjY6Fj8ut9jT8yLrL5RnYnGgfUy75dXU1FvGQbfqKd7DIO_1U7thi7_sJ0VKneQa0gvSbgMXTUYxmW0lubmhRuMCnxv1kDARB3AbWAZOYHn3lciXzcMrrDxK7HtU3qGDzMWUz6TgNUXVEv7y_V8JkUxLoKt_wxdQ5Igw8WwqXmq50ZqJjCeGbHhrGzur7EHCliVP1nirzCSb2Jq8FMNlKHFZRAO0-U5vEg", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108716533290322327726\">Happy Bird</a>"] },
            { photoReference: "AWCwydjLDwm-KgT5O27521hLSsWsYy8bmpa0JSR8ah7A8k7HX1Izkz9hFtj4Iy-3Jf0C5QobNLz36yyKk7zk0mYx09bJlwVUnbHhCegg4ehRH9zOGNivV-e8Tkxvo8UksSsllDRbuwaiYo7nTNjeigOPnZRhe2A_OsAJr-f-t_yxqDPN-g9Fy28BkR7FgbUCX0jTY4iPXW_mAbsnMFkVCd3FS0Wg-H47zFLuA5VYm5nAl2fHZr6tdzcV032C8xs92LeiQQlQO-6d9zfOespdWbeDnAJtnp3nGOoP52QZGq97fNm2eNEGpzOBenwobFHJDvZ7UkSy5WBgsu9PyAsJXJy7lWWUn9nk7n3WKWGOf7a1kARDG1-281hCWj0Qu36gzb2tqytFxBygXm6a7Ny-GDVLhYjrd_PFr-hPN982ht9Vzs7sog", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108716533290322327726\">Happy Bird</a>"] },
            { photoReference: "AWCwydiI28Fl6V6cDRg-Xbd5tlhWoIUDWuQdo-DxzWVV10gniY_YsKDLEHooDtnOqwE-dCWoZKCvEhX8EHKiYIRDm7pmZ_iNJilH5Awm2RiyN-G4viNKxuTKHEfKk3_rSISmHMo7b6wTw7six1sQeARFIz_wPL6s3lj_ML119kuenQ32w3emU59qJBVkX_aortyzWE81Bqt7WVuZLpvGRD6xOQzDCg1roZNKvSAZrq_NlP9FLabqBR2gtLmgzcUf3B_ihBnjDe8bPzXQVzjX29djZrUY235z3B1CjcEPePTu88YC1UxJK5e9bbaxutjHNtl5duCLYHiWwDuUi5QQ0nsJKWY-IqFsjTwCnov0wGkDhOqsLYpuSIsWCf6WYC1CD3uWXmOtQtliN1F0UtK-ZbQMM8b-s9rUczDTucXVJ0zx-7g", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108716533290322327726\">Happy Bird</a>"] }
        ],
        summary: "홍콩 특유의 기념품을 찾는 여행자에게 적합한 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["독특한 홍콩 잡화", "트램 관련 상품"],
        tips: ["주변 가게와 가격을 비교 후 구매하는 것을 추천합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:30 ~ 오후 8:30; 화요일: 오전 11:30 ~ 오후 8:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13238732730180859117", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Hong+Kong+Tram+Store+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "G.O.D. 굿즈 오브 디자이어": {
        photos: [],
        placeId: "ChIJER_pdHsABDQR_8YKuolDe1U",
        placePhotos: [
            { photoReference: "AWCwydiqIcquW6KLZ2qKrZLKD_wuv6GtaTyacl1wyci04thPNt1TD9KvAScpZYS3XH-jSVhhyYPlbZddRERNtIJ5BIctzwcCFqoKkvPTeJLyPbkZpViQbifDpg9OIp_dz-xSiLTQj_oOW1IaKO8mZaE803_Q8_GyQ1zSTeqEs_Ghm3CF_abbaqcaXmQWGZdFTJZQIv6RrjfjD69t23SW9wF51oPsuZ5rAE4POD2SnHRSX3Vnbq162ThDVhEDK2tZvptndhrDc-RLqaYdU2fKJTKYxEEJPzLwKA_GrhlcumzFDo-57-wKmFlhdsOdsDZdz2-sQSNE40mFvIQ6wbLNa7xdonoq8YfVCA20frenJpmxVAimpmVNVNqC5x5U4bZrpFhWu2a4OMwJXiBkVqa7lSBcQN-2z63DfFony_AdPZBPJk7_QADZ", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113095036583174612579\">G.O.D. 住好啲 Goods Of Desire</a>"] },
            { photoReference: "AWCwydhaqmOIDrdIdFVcxjFL77vJz_e5wB8zcUmNa-JmNPEM_rXIX00dEUI8V9E5MC2qVFalJsDNlNBvSwBZB-XpGKdrYb7BFNEev4igf_ibaZ_MBYO5wDxjosF7_wk6V_X30WVUbL_VMpsdJTmzuZr5uCOp2tshxT9OFKXhDMOehmqulQkJoG566vPlpkDNyrPeOwkJnZ7nY9KmWugdDeCqZtxmKGQuipJQltpDfSszhKsMc_TkdMpOISKIDuEuI4ZxTZfZobvkA7mtPcScUuu5I8vbXft2pdPaJapo6yWt8CFfMWcGpBxUDjjnDCOssH5NEz2IDhqJ-AVWNrQuITzZknDhudAla2_Iv6JC3d6oQmNg7JHs6SHFffzJiilCkDlGO5al3oLCHSFaZwpPpp5s-rjtZLwWxVcIFJcmsm8BNTFj2z4", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109802236858047916991\">MIK S</a>"] },
            { photoReference: "AWCwydjkxff36vqh1ZI4X62QHMIEMqU2kKOhG7p99WCc3yIYsgkyRnec8dSlCgmFDN1_24wyGHA-GhdXvavTL3aU1dJkueRthkRsUEA7CTMW6BYPMDjH-3g1biO_kZ51zQ4sAVESmUJpvVID1_Rq5VUe8VAnWyLvGp7GzcLWTrNUTT6VVur-ebJXA3_BWXhWmpIxEVJpf3hL8Xk8Be0zrzbkDR5tTymWLOsGulu-nxCaP2yZLqOsmoSfG1g4R2eu-QVeDs8T0vuZMhCv83GpLuZC-xVDdm2wgfgupefwYwxliUq78w2eA2a1eM3QJ07pjwnuojtpg66qrrsVa-ymlZ-ylHa5-UGBERDL8HWSGE8SUXLw59i8SKZ3EtvriVZo0F3bqeiK4U6gCwcDDbvEzTW3Ke8BupybObl4s1HhX4QYPe6ktA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113095036583174612579\">G.O.D. 住好啲 Goods Of Desire</a>"] },
            { photoReference: "AWCwydj1Z81tr2gE-No3BKcA5oPfShJtFIywmQOPw_3IYB-b6WQ8TkdXwqy1-LSXHpq12wQeVgc-poCaK6YN6Dtq0dkEmf59iOftEoGxUj4L6kP4ikQVU2KxkRK9ZkxRodkfCB6XQcBZqXFlvMl4pvcy4yXRRtVaow4rlZ53UzFzH8qgT75xdKT8Og7b27uBDVNAboNCGvicVRGEzLrwca8WuhQgsVu7OrgzsF24znDqQ2G6POqlBgPBLqP9MurYmHJ9OXXg_ejuu_bckE2HvDgpG22_hrDkJmyvg650WLiaWSlUlAZfjt3k9OvC6-d3TVD9t1izzYK1e_dxXcGn7TqWMyBibCu1KnyvwyHWSohnVEEXNG0zAqLhTVZnK7YK6S4iS6jOtDLOD73NYelzFjyw2krcZKOFTeHOhKhHVL48AdoCwYk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109322820286117738784\">Eddie Ahn</a>"] },
            { photoReference: "AWCwydhqBnU0Jc9y_0V4l4kOMelm1sH9zgsIIhD0LTPE4ZtbEH0BolDbqLj7ydvewiYni1DmZutUcSCp6ZrErca_-9boDSHC7Ft9d76vpfy-5rATDODXU3QFXjDy7Lku_wnvyD6tN4CJ0sWFnpf5oRvzpjSDkW8QQ-uDd32uk61kmH3Pgh2i35HNS2Mrh6fO0VlaygKePsiB2MVWp57T1xCC2eP510LotwWdF5Ood9I_RNjuW6zy2V4rNaCkhehpBowWgTAun_OjbzkY1VlN4RglfJXCvFoSw4WUmnTCKDTs1O_GOFKHMXmRCApbOfoMYyLdue9R6_D54hF7LYWUxc3tNnA8h2UIe_0mXConouW7u-ObTN5M5Wo_VEWS1q8YkuH3ts0fH_4T-3nJARSzH9jbSaYkUqXa5wREfVjaulHc1Ba3mQ", width: 3654, height: 1960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112911713827972438983\">靜靜</a>"] }
        ],
        summary: "문화적 요소를 반영한 의류와 소품을 판매하는 곳",
        updatedAt: "2026-08-16",
        highlights: ["세련된 디자인의 굿즈", "문화 재해석 소품"],
        tips: ["귀여운 스타일보다는 세련된 디자인 위주"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://god.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6159591174170134271", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=G.O.D.+%E4%BD%8F%E5%A5%BD%E5%95%B2+Goods+Of+Desire+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "이슈 홍콩 기념품점": {
        photos: [],
        placeId: "ChIJa-86pE8BBDQRf06ju8odk9g",
        placePhotos: [
            { photoReference: "AWCwydiiyRA_qim4NprzGX1IAJ8A4V6Qf7B7Aiz-4Pqv6LYgTYIbuvMWlzrzZhE6cZ7Yb0JZ5APfTo6oy66G0WCsxwYLZVy-26Y3AzAN658ZhOJHvnnA0SbaAia8Hz0KfgwSGSgmy7lOhoFcbUiOlKLlCkGw0BSl4UxFknfR_4tvdkTn1KEAoBkQh5FVMDPlgwTm2pNZtgDfciwW1j9InyTNzjFTQdDUeCf7NN0oIljbMlE12bExnUSUgAagy7Q9cOmVmDdSxR73On8cVC-X4KbumDrExqIxrk2ZUrboiIKUkpHGPYO0B_WtKU4hWHwv3z8KTzyVeORwFKHwUDFJK5eygaliI1fbNe3hqQAFLTHO__p5K2rkDx_l-VKSm0HEcuqxOyzquSvqjcdnUOy2UReANAqcjFVWO3GzKdkmRf1RNax69Q", width: 3468, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105515202072071946458\">Ornanong P (Orn My Way)</a>"] },
            { photoReference: "AWCwydh5QOD2MhdiSC56JQAjMiZ1U9tKK-gBNMK3rfHEIVhvxQwrLOZMB-s-UWfdjOIojXkNOIliQ_3VJMlqcW9_64gN5-pzZ-AQEokfbkXLOGi8F6o2lQwOEIeZjk6Z3UpCbvAIz_ASLOWOp0s3L7PtYBS4r9BcNpYyIhZJegP2tPppT0V8lrgxoRVUEgcqA5Rj9w5H9vtksZuarzJNillyTEV67BnJAZlIVMC3g3C3Hh6Eb21CIb-ylObYZ3IR-rXUJZVVcPpGi_tktPcAt366hSMgGHMEZJFZgDFo91iHHwEu9wUpkudXpS0YSbfUR9TWNXNYac-d-2vhx05Xii2OTwRfeQ5lTWzAwUHWJImJjTebfJ7nyzrQG4TwYBobbw8NnbAbrYW3oAHSQrsbmd4wtlhGN8z5XWeRx9CPuSeCsrcT_V5QEaxej7k_c-jWgCc9", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102876054020387546449\">張可恩</a>"] },
            { photoReference: "AWCwydi5zL2iDz9t1Hf45U8Jh8lGdvErTMJueT3EE5HEgzT0h7FDu4E4hYYrhMbxQpAg0b28yoDgDHxXLv25Yqn03UJFHnx83GC-qk280nwK7ptyeZxGprsnRaiqLWLxMA3KAVlvPy2qnlMw73m8MdJEinGrZpIFMsivYpIphJQg7efAK7FUx0yijP3zmass1Z6sqtyPnoSxnGP8jWKelEnCblp987NX0zVC6uzKFkFmAbcCwaI7p5bZtWBJhhIwgOeYRwowOrNNg-QWvNefIwNZF9k9M-s01CmMndVHfH2BirQ1hr5Z0X4eF2h2Oq20Mk6L3KNhpbWmSh-_U83szbI7g-bJGsb82lsVhBsFWoprWVelGkLKIKJTWwcbGCUg-2Ip6P1kGT5HVpjgjV3-H1V-EgTIBTa3H_gv1c9qykwivL5y58FkEytC4cuVqZotiaDV", width: 3472, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117270605787113342088\">q 114</a>"] },
            { photoReference: "AWCwydhd_sR-UIKhg8bGemSijXoe8SUGylcp12XpiTvb1EPuLwlGmh5pyIKU_uVLxgHto2QFXLZUrxDvPSDKPVo975w5RQy6rw6neEa8zoqL5LWW12ymCaYIbWlzfZYblM2NdTqk7EPSfMWisV4HynqAX0CRZHcn3TyqKFwJuBD77I_AjV2yF6VJu8Qh2oBJaojQ8KbXj7OyX8dqxpXD8R5Y5VH4a0R1Gs67y65m5CFIEdLLuIg58UGpSMLPhx1-uJYYqF4QjTVNP6pPNW4Byxw62vOcRXhTZmS7257YTW0_rizB0SxMeeLQlhfijJXyYOl-B-yQxSMcbP8rRo-b7rahKJo0c2IfbBQPofXQoRc8ot2nA9lstvBMx5N44wT6QVn1oGzyOi4yd26quZC6DaL3wOi71cCuW89XcRFxvqfGKIDbp7DK_xpwI2yEq_e1jz-D", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102876054020387546449\">張可恩</a>"] },
            { photoReference: "AWCwydjzaTOzRMdEWieyGNB9f4UiudP0TLlTfbe-xicsBhxZRRd03fvaQ8-uDOTZ-H7YnpYjvy1-aJBUYj9baFubWPj-II4k1YZYr8sXO4n6xlajP-DPwFK5oMbWGXTR26px83YWDEmq1cu4KXqzoShiGZkqznnKBcjr2XcdXxAl_2F-PrFYzqMTtZbs19KfxgdTxop9kbrTiL15TF_8-drxixrzxw7u-OVS8MMuWuUqsX-DZtOeqCjkd_DginoDEGGiP4jQ1VthmpaCIbyok4HFqHVNSOx75_SN6xW7rJWbd5fIYsyK4Qs5K6FoOuvOu42uklDHMwOGxrmjHonP9u4UpLBXuT4vL3gLQJOo5lNf-Zj2MQHbJVsfDsf3WpQ2tTk6aB36-NvXNbhjUmHHqZa6emJLlaQHlxTvXMCyhMue1Oh7bmIk0TRWgwv6rxXBn91a", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102876054020387546449\">張可恩</a>"] }
        ],
        summary: "DIY 자석과 타일 등 독특한 기념품을 판매하는 곳",
        updatedAt: "2026-08-16",
        highlights: ["직접 만드는 모자이크 타일", "MTR 역 표지판 DIY 자석"],
        tips: ["마감 시간이 빠르니 여유 있게 방문하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:30 ~ 오후 9:00; 화요일: 오전 10:30 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15605849890337541759", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=ISSUE+%E9%A6%99%E6%B8%AF%E6%89%8B%E4%BF%A1%E5%BA%97+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "베스트 기프트 홍콩": {
        photos: [],
        placeId: "ChIJ_YD3-sD5AzQR_iTUErMd71A",
        placePhotos: [
            { photoReference: "AWCwydhkrToIWlFLisb4hW02vUUduQdE74wFYa4MI-n2Yv6z7oOZNvwWYzC3FTz_mefE-G3lMnBkFHh2baNlcRGDHX_l-oPa0FjGCUH2IzfxpPfRT5JryTkhFlyqdQOV449XrMQTpuS_VH0m_iflyUc_rC_vYutImWeffuNQaPkT_o73FrTduYjUY5H7qyRlzuVSkAsLjSTyWT7hctebSyB2uDVrgsWXoaiE2RAefmapBdfKDAIxLlwx4lUrfXn8SrxBgakuym5kJa87FPQuwZ5tCT7GM4akrUPfpcBhwQLgd7OlcDUUgW7eOzMDENbQfd1yEErS1SaOEhRyojRfl9vOb2m6k9JuHleYZxmPCu3g7lscudq2RmyNEqteFIs37wt8Sl833Uv1BG5FjYq-fwDeccjHYaPTVn7Ke-yStcrFhUFkJgTHwYZPvvYKFERG4Q", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112087684686703353373\">RedSaM</a>"] },
            { photoReference: "AWCwydj57gVHGd26ucxJq5NiiH8vBMYwSQ4n3C9QPylT5q8jdhapC5R_ou6c5IXR6MvVai8hsQ-IQ7jBzwFt3a2X73ZFZol9PXnbrfPmqLvWXYW_uoNOCSoYXPE3ONo-1NpUKzjOvCXy0AVRk-WyZtZeW1uW9CfL0icKMSxIJa_uswCAWZRVFw1m3dx8U5XgSXuKZu2PBMt_m3AiIHp0qZav2wRGwxWjk-X191XLFuPJJIXA84FnMcvHNGF-GlkvwgLsOqpq0k_0rWoi7M34AMtaDyDcVMzonr078G7p9hpWO4N6-Lt7BgUvO7mUaQHPh-hRqxSPZwVhWogNNYCBojMoMPUlowtElrnihSZH79vi98nCIM4yKs9ZWDT96oEoQ6RkJXKAgWhaMWEhPRzoLFzCeMcFsfDhwoQWtVccqu1_UAqtHJE", width: 1880, height: 1253, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104318396530522474380\">Best Gift Hong Kong | bestgift.com.hk</a>"] },
            { photoReference: "AWCwydhCkG3zw4q8eqfPNJFOaYw2mRCgG8FKkiWymYkEg_ilC0exbUqc_UxETfO39vE80ZibgYdh6WfYKw0vQah1VVSWSk8-C9iq-myLEtdEfBpxKZ9-owgBphcxsdtwu4-P5zU7iQXuuF-1vaYIEozHJcE-Wi-BZ-KEMEviUkOh8wrLj15T3DQ2mMPwOtY3XvVpM_oCmE_AhVjyHERXRc8f0_mleVg7SJnX1Pz2Ns4UGJLrQ7qHFRN0opwfTjs4UjTRWhiVTmmcWYIueCrGWG9LL_HUp2-6pAJc3gtXb6O_qq1486Ck8MTG1Lj6zZy22fctqCNY9FbvR-5ZintomLTsZBEGuLFC_MuFbQ9qKmvrzD-q8xvxomzZvPE8cVJho5AhUsJ8F37jnvc6_NjmXJI7D7HqVKFhCoOsMsY1ZnegBV3qOQ", width: 590, height: 592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104318396530522474380\">Best Gift Hong Kong | bestgift.com.hk</a>"] },
            { photoReference: "AWCwydh6Kn-vnQ43blQvt5AikpUh4Cn-TwaUFXs5XbnLQkQrYsd5veOFRFlyx2M0Jx8fICJntbNk9sOhG0cqLGLbpB4EaG0kZibVdKFO-wwmVffr8FPm6T89FxbImnp5dQIYvLWGjTvGvlA_LJXD-9LTyV4LlYE1wNClaAOn0iWBP46fq0kkttcOpLflgkCosXvOky3bsO_3sg6jsD39az3fYk83gpC1qnLUaJv7PscpLOeOOEZ5F4C90IVhvqXlMGkW5z_MMIzDBW3fiy9UQyFf3JrBZchLUPeXRnjNnYo7SYP_27Hfo873OmHZ8NQdnDT4tbVkM_p_jcyKp0KXC8jxFLkOVBn9bMXPypF04_jyVrK_GxbdneMe-UZFPbPHvRtyvO9lhv-75I13GaAVT_RDrzJSnbhd5kt_9nx8PDAQP5OHmA", width: 598, height: 598, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104318396530522474380\">Best Gift Hong Kong | bestgift.com.hk</a>"] },
            { photoReference: "AWCwydjUY19keMbD2Ul0ndLozbLKcbNj8S96qM7tJ4AbuRaUditLTkWpKqx8F9tQHJdxnKQcnORFABXz_5CAhhzlIWqhfRrwkkXUOCx090Y7nk7QzeRFpfKBZItg7vQxFZQYdR0FHl2mugB0Z5-oR9rGYtXGCe-YNUXvGm_d-UkgT8mPSl8jPbH19OiC5M1fk8_fEeQ5tq69tHHidCCECOSxJcoSFcXIjT6ifG47DgyrBx8KnvaVxkU9WXaOxtI6zkYBrww-PXoJT8Ffhc8ojlKSODTzMAWHO732k8Hb37xUM6vObWLlHXavDXHPcSf4UJ5EmDqRNbJlzy35_l9aOAZBYY71cikCw5P6vaG2q-Q8HiSTsUxvgSKhWcxS1EJXe_J1TA5d77BpniOyf7iq0ldmAO_yxEPFnoyROZ7JztTyV_XT638", width: 598, height: 598, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104318396530522474380\">Best Gift Hong Kong | bestgift.com.hk</a>"] }
        ],
        summary: "높은 평점과 신속한 고객 응대를 제공하는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["훌륭한 고객 서비스", "신속한 응답"],
        tips: ["디자인 요구사항 반영 가능"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 6:30; 화요일: 오전 9:00 ~ 오후 6:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.bestgift.com.hk/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5831912697420326142", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Best+Gift+Hong+Kong+%ED%99%8D%EC%BD%A9+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
