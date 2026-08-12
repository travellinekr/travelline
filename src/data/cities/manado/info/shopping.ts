import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "마나도 타운 스퀘어": {
        photos: ["/images/manado/info/shopping/manado-town-square.jpg"],
        placeId: "ChIJWxtDJhp1hzIRYvjUGXYiA-o",
        placePhotos: [
            { photoReference: "AWCwydiZudTXMeGvyOGvcTtK2Ug7HamUnS8F86l0CMXN9rk8Ghg51bEtQeVY_pPnGBQlfZzE10v6l_5ZExDus-ngy8jVEsH9zGS-J4KtPomPSuha5isxfPa5cj2RleYc8CbEOKrgxzwGdMEwbxCqhyUyqXeDAsmx6q1beSYzKbyeMx0--oc_yVG4Rq8P6YbvkB1J-3YH9NRvSPfMmm0yHweYkEKIdMx05tkUC3eXHKQeHH1umm0TfBd7GEwks259UNHjMbfU832IxDHmecD_QV8etiYuUtAQU9fn2YLlsrVWDl5Ez4-ONA1iLbpWA0FBxr7A6WwkOuVMTWed6sIVcifh_cZiv07dOA93fZRO10AjZOkS7AixJZIuU10MEDsIRgXq8-6EH6awAZRjcbskgxweO7-1Ved9Mm-sDkRiEJPPhNJa3A", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104069078914134540462\">Manado Town Square</a>"] },
            { photoReference: "AWCwydhrtwJxQbgyZb8uVWZFNzzxsA9FiKPR0O_McPFhjAHrfLTw2yOIVPrCbEeGItCitPRlpjTiku28suWlewqyrt6lZev5bev_MxE_5RDTJeCw_sMqrETxfa4arFC4c0tURW9TSF1PHasJAythgFZLaY8OrmbaWzjBCV5hjSy6fD2pBBytW60qWajPtExFj80rPV-EhZQpr0sGtymfW3btVU5cvTTd7D7D6KLQxIDmX5NsGFwYtz_0DETVCOtj0ZK1eDIP4OZ8UvPMayz5BjOW5TY5bwxBQnCdOM5DvnbOOpn1mDCbkJbeJyie3hDR5dppkdsUNVdflCfEKkrcyFrJsCZyOeCGhpgrC1w2t2PPW4XgM2XPtbrarMpqp4ZVUFwSVPO8OcGN0UxMcyGog-8wgrsIhwc2IkuVZFOmPBv13rI", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100150120074257142158\">Arvia Ari Sugesti</a>"] },
            { photoReference: "AWCwydg9SxXq5zf7c1QkRfELsVHGUhwxrtCMUH11S7Eokt2M11x_qJHXn9_-snxS2aDex1Jdo56VKR8cqPZQz4nBwrW_MwSpPSQNBVKai-115cjlhGx-YtDKm_0ru_Ms6JbLuw1x0KwSn-WHvN0JSC5BIcWC0biQBYprKkDXrmNJiHOHQ_4KwdqbyL7HRFoFA5_e9sZg3BqNmyzJSWlnfH6QcdvP9-_LdehGrtesfs2YAicfO7Js_5oMQBibQlvPPm3zX53vCiopqyD6RHKMQfx9518m60_EkRBXDhcMD9wMNpMESBQLe6IKukJWLi19DdwUQShGxLJNdPlOPI-HqsC6HvLf3hnbIBYCYnD-2zVsG_JV9xUI_AkCfTjQkH-MDphPhR1YJtU2PPn_ZjLQpLTWjd6uHu5zpgnmDXBv8Oy5KWV-G1I", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118194902889772203601\">Edy Milala</a>"] },
            { photoReference: "AWCwydghOIh25jCRlw_9Bva0jn1e5bh6ioPyBgd-huSMHrvZ0BcSeWV1VooKZCDw0sNmEarbJWStN6VvAib28QnFDVoR7-CHiCZQnmfyBe1DncBT46dWuTZLlSuyFxhNpCjwLPXmdgby5XdcXx9ElzWau5gztTr2zZvF8k5728TGT3U9f31Srl9E0fM5c8YPffaZxu9UwPARVTTo0sTzTyJBhFiaLCZnWaoXzVK0eE8QP-VJQzlSrZkJK7eRRe41YcemdgtsXiFD8Wz4aJa1CxoB2qX9c4m23lh8n0mGZfkEN44euSXhpHfX9HZlp4Pu051cBWs47JvPWwvGpYUYKRVug20f69j8DEdC0yF0VhxavQEdG4PTjbP7H4YIk1nhprYWOVrgUYB123skp3utRoTJkP2STvblmk8xKZ19y7tjUvy5duhC", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107484346454623915601\">Johan</a>"] },
            { photoReference: "AWCwydikEA1ZHBagte0irKIm7dGK0g9h3O_mnwT0ZL1YTDJxxur83t3s1-JcKVP3NHcW0T4eLxvyuMHfMT9olZt6Drsk9NMhRmjrCAYzOqGQV6JvNCawYs8bNfZIsmDqftJUXDieFerHGbESm9pF-FRKUsHCpKXsb8YFhOGHC65fbE4EJZyI0qHy1ulQCeFlin1UMAFMBUVvjLevAIvGrKuyyOOCQAYwOh0YII4P9ivr_jRZCOGDkgxjmsOU7JRyyTKfYiRyf8JoNqbfjyo2v5uVX26dS1qfJtV0QJzLQ8ILmVdR2hu7PK_g9mp6Qi8Gili9qEoBIgjVYjDlT3GvTet46oSgRM64ps8ZO-JKPSxqZVbnmigfWirzzShwB0lWsbSg30RoIon2lyYx-QnF8zVnJYg5-xdvwTncwnTpw8tR1RFAuw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118194902889772203601\">Edy Milala</a>"] }
        ],
        summary: "다양한 브랜드와 상점이 모여 있는 마나도의 대표적인 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 패션 및 라이프스타일 브랜드 입점", "쾌적한 쇼핑 환경 제공"],
        tips: ["주말에는 방문객이 많으니 여유로운 시간에 방문하세요"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16862359320440141922", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%82%98%EB%8F%84+%ED%83%80%EC%9A%B4+%EC%8A%A4%ED%80%98%EC%96%B4+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "메가몰 마나도": {
        photos: ["/images/manado/info/shopping/mega-mall-manado.jpg"],
        placeId: "ChIJM0P6-BN1hzIRADcoop-bzA8",
        placePhotos: [
            { photoReference: "AWCwydhJaO_0FLXJo-hFa9kQyivTsKanS9fB3J42ClG17c6QN65ESxUL1lIzIH7-oCMAThQL6RIxs59sz1dRP-wiw4hg5ed8D9aZLcyjFyp3_Fce5QDXrPSitDwmEmav-iQoomHXj1LDkgSh2vNz1oDSfVHUHNfUlZArmvmhK8UiN8Zm909Bp9B7BSiCVpkUKHmbiuo3HVBvAnNQ3S5pn32ExUJFT3WjyGC-pNJDWElP0ZSqahE8J2XA2uo4hpio_jbs1u7MRPEURfrynHzXWE2YmWG5gnmQk_ao1D8poEHCiFgi3ay8bPi7rYSw8A_inKXesbReMavXZhnHlKBcGCPQ352q4EOKryEs_mOxHlhU5f9uUOWVxSPNb0LjIAbiGousuzsYoJYSXhKvrNqHBR55SObxF0RJL-P7LERI3gSFN9vKXR9vDJPpr_ERgDR2ZA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117376309868570339716\">Megamall Manado</a>"] },
            { photoReference: "AWCwydiqX4q_TxQfIYATAiC77q1ByVnSLBgtk-boQcP7O0x9xKMH4dV8fjUJy4UzYcV4z9U47wRYsAPnCO-n82_qpuc30-RYXU-Um5tUho4cMCTGvyjk8n0DpVeD5sB1WdzvRVmX9XcDMa5TYpOx6YgyrzHwrG2t9yqx2IItDbz4rhNRQ9e52WTgNXiXzUzqZXfJInpABKANqgGxCQLkGsS35whgmLU_gA2kcDLOAq3cPdfFhsSiHyYzsDHCH9arLIqtEE6tSGIqQ5l6eQawlDnZWN5TbiemDuJrFwfFYKJNqIIYkPH6zwOHoHyGmaa78yQaNMGxr3yWQF9ZhciN6vSsYAY6ENDXXoCCOvduUeHr0Cv0Us7jPrXsG-uNKfAOEo_DFrkPYbjH11fZaEu5KLauaMNqDAaDSDi18f0iY53XA7UkOTAvX9evOVcGs7LT2g", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117376309868570339716\">Megamall Manado</a>"] },
            { photoReference: "AWCwydheW_LuTolVfc4bb4IRHAx1Szf-zYKk-Da75OiaXLnVg3edQi3UDn9FAcdfAnj187MEF9C5wvjUuYL7W6j8OdZNUT04EkIDPVgXu1QNDE5FoNPWL76ZyvmOnXdrfhCSikbpfiJYQLi7Piv13H0AF23DeXcr1BjklJTKKWl0USOV8FPX3neG9wnHBNqZexjTgetKnjCgnn4SOqI1VuivNpQSIaC6_oMTNZ5Kjo0M0OQbJq8ovrK6_HFrOToixqRErzKYikPc3-4MU3JYRW915X6Te9FLy1V1K8f6kxMDFqxZ46NL80TMqg6i67Zz3GF_XKKvKLlRAG1R0IzFoOZmdf4jFW5dg9cf-10oZVZE3W6waizshimsWs-55bz2993nyZdIpVBhMR9Cne6aKpluIB7vVWsQLHRMO0efSq7NhWd6bmPmpiFP98kxZMJxkPih", width: 1368, height: 912, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117376309868570339716\">Megamall Manado</a>"] },
            { photoReference: "AWCwydi7XuuovXcVnEPzWHfpFKfL7U0GyC__XYbqx_kNzKrAQMpU7Spn5s_9cyiQMSl6eEwdTGdl84TYY1uHMgOl1oMbShB5NDhx7ph9zlCYT1UDmD4LR2ENFJ2VARJnWJUrruKz0c88n1_4DNju1uVYAXoIsSspNXspyuJNo9gvRFc6My9FWbwtCOV_oLcadYMWJvjloQjW93rMAyiVbDAl7FT9YY1UHlcOpudsFkoI5Zm7TYaorufyzEQkykpzKMvlLsjk41vut-6CJpvfS-ONX8Ph88AjpLvz9g4fyuQ2c4i7OcOgMqilulrCFgrJugbiEgr5CdI_jlHwHYwx05QsbW5FfUAabRKgoIcza0P3TemiNLdmqlv0EHwITDnMjmz5r7d9KtdAHfbwao9qBPUZ-pqMn6hthSIeIsMerGYO04f02dLj8GqipquDuNwlug", width: 1200, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117376309868570339716\">Megamall Manado</a>"] },
            { photoReference: "AWCwydgWXXe7jPHNcb0pmTSQYd9qESGCZz6Tfzo6D5f2E--AVZ6AUeFhW8XdNiYQH3D8BcMOm3V4jLcRPlADP1cm__hEtqyhW2ME31iJtMTZKfYiA_Y8XJngLmD1vOWc3pW3K4GwSz_NYpAsUMhCEI9vG9fQia_NrUS60tWwGCG2kYeke3ku6lYONe-_wU67K19cnTj-gzOw0R7T2_J1A2vc-UQcvWd6kRPWcLoMUTGHQLYf0S1MbVISYmza6xMUAHRWlDHI5EtvC7iomBVpWkDq_mkREfogXutR62ZrrxA8WIP5ttUkZBX71l12XOfHgZEyyHgdR0DQtjNS5VWlU9yQk2_t-khrE_hSj_3qsWxAtIXEbRyVy85SvHqV8FhjGj5nGP_70-lKbevFqseIznmdxSveo9oxDp-4Fuphq2PPRnFyuI_jASVFr14p9e-OUg", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117376309868570339716\">Megamall Manado</a>"] }
        ],
        summary: "다양한 물건을 합리적인 가격에 구매할 수 있는 쇼핑 공간입니다.",
        updatedAt: "2026-07-21",
        highlights: ["미니소 등 다양한 잡화 입점", "편리한 접근성"],
        tips: ["쇼핑 전 운영 시간을 미리 확인하는 것이 좋습니다"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.miniso.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18043453737759721181", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EA%B0%80%EB%AA%B0+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "트랜스마트 까르푸 마나도": {
        photos: ["/images/manado/info/shopping/transmart-carrefour-manado.jpg"],
        placeId: "ChIJUWa20CKhhzIRGJE6TmzPRf8",
        placePhotos: [
            { photoReference: "AWCwydiSSP2XcdMa7WI_a-heJI1PXHEfoq3PA3AnY6DO__a9pPZPGNMLWuwUuaUNR7TmbDZz0CJYoON-H72iXaE98LwNKmRy3c1yU-I58TzTn_h0lWZvcctIHIRP1iWWLwk0k8xm-BpJdP8Z0jAY21maASJRsEdJ8P3-gtvO1nT5PFc4yVyWCqDiaum8X3zK1D-N-KCDPGxZP0CuV4D5ZCqzdjc-BC9RVsw30QXyIiUziSf8aJtDD5bcMZ5tGpWv6o1u7vzG_HgNeNSG8ZqBo3bfCsD22Pg1kmnQMbyoHBcply5HamIcC_hh5-L1JhezVTYGVvz91jo2lJB_7kmTKZ0nfJZhgBGxL77BzwBbsGLk2py9KAfh8nRnn52e3JzH4Kpu5FZgCqy3qMcvrGBBol-Wz1XphAqQye9Dx8qSrz8HutXNJXQ5", width: 1892, height: 4208, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108331904049731761880\">Denih Sutardi</a>"] },
            { photoReference: "AWCwydhc1slt4xIJsygIJVACb4KL3zzs73PWQ0JSRPdvRp5oSiTqVvkemxjbSZDEQsOYLv_gGSJveOB3zv5Eae-JgMje5z0KWDSQyqAL2DQFWtUwiSgmuhcEF_XQKvIx3AuMmCjcPmoQZnykzmSjYXP0ZGO6ZEyyzXo_IAU1Vzj-DamIFuhx9ZW2U4C5skXmRLDXratBF9bRVw5o87qYYpJrm_6wGXFJTso9a4W1syH4qJ1sy_VKe8yWJGs5H1rxnbn50Tb8geTEjituwsomsG-LrmVLdhR5KwPxu9WqDxYp8EghcGxqon0unHHMFyYlJ6UzvgxsK0NkOvbAKqPsEAZHjFOwqy8psL2BR4JXOgd2d1jnv6Xtxde1x7rCYZ0dsRS8_ZkUIArgU2K34OPbLitiWfQoW5nUMYtuSs4J4Odf9MSQXXMAo-ZHry8V1rTcrd0-", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104324750244017520971\">Maryam Putri</a>"] },
            { photoReference: "AWCwydjNJJlWkt32dxwSCA5_WSSSn1D4eQgH4LU5DJyuPKIcBJUwscAXXNhvUNsYdq3uHw7Yztttn8QCORjjMGoo05t2a1wZZLA4Qx6nMKUVIyUtl0auZyGi7pNr_mfwNka3RAhrpDWZIrg2jtHQqGVAolIY0SyP6hJUDAevXP15XEFiUOG9ETSHGTdxlCpi1PPMorVgxKCct8zic3tXeANSaWis1P4-AAGvVjHkGP9r3NSiowWh-_8-0O4Ni9SfYhOvbkU1Cb_H1-nyAwK2mhQ0omqNnXaJ96ERpqZwfOCrxfQFZTc0EO4CWT6wwK-ELAfzoZaF2HkqGGkapv2vzuUboue9lNaGOIgKrXrvEAPx4rnAJLUjnPfdwiw1RjDP6gg-1nOizQ6w0KOhDECMzjdWgwLzcNueOAXgNcRusNPsuTPNxzGokdNCyTwDP9rMTg", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110336865686818783825\">Made Wijana</a>"] },
            { photoReference: "AWCwydjflDQbWBopWzd4uSpTfVs-ocNBqYu82-3pcnNTuHEPEhw2ODJX2Vfh4ImqS6EDREtAYyCWT6qVpyS6RgbjWKlvKm5vengzhC-z2e88AFqSBPiXoi-OmY3Zm2PslaC_fbZB9ADzjxUpb2ezrKkbnHJD1a7vy5ll1Ook5oMPDVG60narlgwubIooEVW56Aotn5g_FKpWOGhwMBIk4nNM9gJnqBt60T2X9QNMeoWGUj-sR3PFFahyLFM86hQHc1Wn64TEH2ZQr7lFgfBxM6DREUk7kVFk1P5GMf-oGSQe_NVYyjaE1OnAvOe9C1m5t7WKabFdsTVb8wG0jEuW4osi4rYLcBouRbhqT2GwUXrCylrcTQ79QAXyaqWXx_83Dj-FC7poWt9vcIFmkOenQsRH7GnoA7QkXmqoCiUnT8NSeBnkmQ", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108874640812604339011\">Tamba Jr</a>"] },
            { photoReference: "AWCwydjmUxFLr8pf0ZVTabS3qQjJ7d1qZo60gy7C9rJd6CrOgMNfABcMVdZPFCaS49QBaR1O4HR2nwkQX93dcQj2CnLr4Kl2CsMWHtTCBjn7XvI-oG-75t8NO1dZEzqSu1obMe1oUMRRVHhivxutzGkUP7lTozB1ffxCQ9BOscBZuV79Aa_MVx_eVlCPcw6ZEOurBA1X6Y7jrKy2xLtvwa1guRJcQ7SCLabDQjtCvCXgSl7k8mgQXdijFwSv_DjOyLCT59ztblz5Nq3JkUspnZz4SVszpSI2sGglULTCtWEUg7ClP-yQeZO1xPORX-aYKxjrSOucLK60Wwxm-WIBZ6Z4JUPA1eEsL5bs8xB_uHaNrRw4pmaVFC-hXgq97SJv9b6JOGDPIQOotyH3LjW5nbQwFQDphlXYoZnAmzQRvJWDBuL0bhPmu2tVSR3_0Ufl_iXH", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104324750244017520971\">Maryam Putri</a>"] }
        ],
        summary: "다양한 품목을 갖춘 마나도의 대표적인 대형 마트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["대규모 쇼핑 공간 제공", "다양한 식료품 및 생필품 구비"],
        tips: ["주말에는 방문객이 많으니 여유로운 시간에 방문하세요."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18394336317140537624", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8A%B8%EB%9E%9C%EC%8A%A4%EB%A7%88%ED%8A%B8+%EA%B9%8C%EB%A5%B4%ED%91%B8+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "프레시마트 바후": {
        photos: ["/images/manado/info/shopping/freshmart-bahu-manado.jpg"],
        placeId: "ChIJd3TXgR11hzIR1HsqsPIMEpo",
        placePhotos: [
            { photoReference: "AWCwydjMLb1OTYZuU444b5tmLYfmpB7_Kf7HtgkXc-fYgDLuarKuMRmWMRxaF1FnZDhzytVdGkksfElHAWezdgIe270gynSoF5LKJuC4yr93_RxfTWHFMw8nHKm-tVaEdIEaymKn3agTOp70g2nuXt0SdM4-ujXBGoffy8cRSlUENe_zBghaurBNwj4bjlq-V1EEHr8bvJbFVmMG3WR4ERP46K7gXkdyvfbYQsAi2RGdozarOGQKzB8c6-QJQ0SsPgH9-W_7AbrVY-f-BMAfqAUw1_IRCa2KCgoL7aloKDKpKagdKoEDs8G6kIMt6gZ6Lo-oX0aRoXBBrviny02tgrx7GNpNZ4WkW2p9H8w9arOfuFfBHNUTd55BqK7XlX13MG7znsWge9z4jH7FKsPpK64B_fMeNeUKEV4ZuJ5c-zi2E146bg", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116842342437012369638\">Erik Derek</a>"] },
            { photoReference: "AWCwydhIFCvnrVw8m66-gX1JVlT-9YyuOHgSAH_RPiJi6koNb2jwWDc81kL5kZJtRegzOXv-TjrK3UZ0sUA9gKT8thG0tnvGdK5VubHV7ugjfXPIowjHZo2596DsrsSLVXyeCZKUCoxxEw4IpOpWST-AevFceRXYTZ3gFWH-WqJ2sljmJENYiYSlCGYfmHytUX0edJVSChxxuAzIImoITqKQJGIyA4A8Teggi3ywhkB4jwM326yobPYDxSL3ll8f4izOZlnRCaRRGL7cDfMfuFWSc-JEfuMIbxmAEPmYm3qTz7haV8TnQw7mRF2p6etZxYbi_-RT7K4hxAV8Sftc3jrTqyR2z22MRZRWaEHRb__aiFE2fzBfWMdETj1CrJhUm6JSrhSSvqLI1LEXfls7KbSjKjzWXoNqJqkTZy24sMKaifc_lw", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114049741362022727768\">Agitha Yuliana</a>"] },
            { photoReference: "AWCwydh_b3z_qwJMiAsI9p9F8NCSSLJ_jMBFEIFurKRuLsayrGuVAZCubeTK-eXgf9iyNYoLr-ou-iIttlhBU-vhK8QL1UX3UFEvHgi1y3O0oGK3ZYTrzQVzlfsC4hGqpLZHzHkHsXNcqCArYo7yB-R5UWR2IcOwCnm3eYnUf8zzi5rdIrYhCIGpkteopQAUu4C4hIbsuLNT7qngb2AE01aWq6anRQJ10Fn_YGSLM8xhL9p_t17DiUsS8JLdbsqr8KqfVu31EVlCr58K8dJTQffiZe_hFPtJD0GO-SMBGvlQ0tkE6i86lmT1f6uw9Bvy-rlbgrk-E_S8qUIsHIUuK0XlGMD6imcDSwICezbELhHDy4ymU__8O5DjnXTDYNPB9XeijZbJFv8nOWdldHnoJrXe1S7NYGWQ3ceXJ8LTtrT9iHAikwoF", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115392208613925124705\">Ihza_Interizta</a>"] },
            { photoReference: "AWCwydiRcvgy_wI_CebQeUa3h9edmwgJyFxa3q9AdquQCeYfdF3pzm960Oxd84UVZ7mz2u2YI04XCUqCDPvdCQYdW2m8BhTd6ZFilInNuHfsv1cGblRmomld3s4UruDNyJbE6H-_MZt7BTlpNlf9OBOMOmqDFxNfhIQeaNXbYDEyGUIkxTfkV3knEfLA2LitUxN9TxJ7Mz1TgRFgq9IfdTdHp8fs6MJQ_eVBVfCqL6jwotzrW3yu7CCahD1WfiOMfK0W_7tcGzUOLV2O6Y9xiKZR_lwjMIErQVCz4dqD-0zJo5cqfhNq5VJAZDyy3MzGvluuXdM9nG4xbBtH0vkhUsDV5AtxjR7FS6Nnsb8oyflEWTjjSU1dZ-ddDenAvBQs8V1KpGDqGbqgp8zgbWY9VbAsmBk8YURIy3MNec550WpcIII", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104324124854136927842\">Arter Tenda</a>"] },
            { photoReference: "AWCwydh0Dtut5IqzgDmP7rktf6EtI6sXhpwBz_5EeS7dlcmCapgKf7CXoqLEZ49pcrdhPJ28qO6w1zdewm6I-tXN4fS9KHlrgzS_j2EvM962j_WwZQH8CaLEWnK5pG2C4u8pe5zKDEiHkI_jOm1g758yETzWlLyoM3jxgLyLSNwsSoqHqWAIh3AcGU3qcgiKEV01NjkmvH_FEm-bvom_RSKSADytIZLLDov-x1yM5zXgvhwF5jRZewZJ4Lzw3h2ldNiXN8behv6780kWhJbCGUZTOAfnVim0fk2ujJ96pyo42hYJYNNdQHIjmjVsQN51y_roE0eeGrQc1MXmtoaxLYoDOMGGe8lu-r8xmjri7F0FnnT9eUIXctYhUwkpSKIXozUqsezw6RZ64Uh3vDFm0VlCIpiR7-Zy60tAJ2wx4fqafickGJNz", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110537832007162247201\">Palen Aube</a>"] }
        ],
        summary: "바후 몰 내에 위치하여 편리하게 이용 가능한 슈퍼마켓입니다.",
        updatedAt: "2026-07-21",
        highlights: ["쇼핑몰 내 접근성 우수", "신선한 식재료 판매"],
        tips: ["몰 쇼핑과 함께 둘러보기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.freshmart.co.id/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11101950267898887124", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EB%A0%88%EC%8B%9C%EB%A7%88%ED%8A%B8+%EB%B0%94%ED%9B%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "골든 슈퍼마켓 마나도": {
        photos: ["/images/manado/info/shopping/golden-supermarket-manado.jpg"],
        placeId: "ChIJ1wdpImt1hzIRlu_mYkW5Ty0",
        placePhotos: [
            { photoReference: "AWCwydjzfwbcYCGDWnT5G9cqeNcTpBPzQQzndMvwhJnNU66n2Y65x5SuNgTXpATQFMvsBedJdZTvAzQ4W1BLA54nSAKeMrtki5j_vcCOW-nAsXW6yDDfw5NNgFjvr-gsEu_78A_ZyeQ4iB-wTB8cJylnzb0gUIscVijzJoIzMmbtqRyeIRV5sJPV8RpTrbBBhd5Lnx0NTajHZNWYFK--g0suLgvW16mz7aJZJ7TKWMPVQgY9BWHgooCMrqlMgypZJyOTA8qVN89dso5bapDlZEHSrpLG1eLsEScpaAC6wHkIu3HrNVkxwSz9NFOCyxhzc-o7NhtQtnmV_Iai4PT8XlwJJTI08ZEek3GrD7xw43FH3W2VU4_xxAA0sIh4t1UPWYpVlhYEzI6GGC1Z-uXu8xDXBqfRHqux_3V6t9IjYs3zNzOiSw", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105082584625908594099\">Leonie Piccadilly</a>"] },
            { photoReference: "AWCwydhXOiss7wp4vZEi1jpMXTXUNBAyICEGHv5dTUTQt61CmZWqX_lLR1D-D2HjqxSNq4zRSZPQgK4uaYLRC_6EaJQdCV2QEYXY2ae7NWaDj7dqM7YSR6M0DWDSRhzkKitAOaptUC3PPf3tUJxCQCFlatzXAFxGOBzAHGVX7fg_iINPlVKHskYeKucTxexjMpvMIEdlwiR_ffijf7u3-BSPZf_dtg81dwIwWrKR1_rulf_4pjDegS9Y9Ju-iLTicMynHTPoG48r2UF-WcuwbYCvCuYpeaGfSjuwPdXKV0b6yhWUrRMWhHNENctAE1wGae6fLi_17o0NDd7rbXqe0WKOen6c5_M3NH5ncJN07yRxcNRY2fhysdqVJL4oFol5ZZrz6fyIzkb_N6VbHbyVqLhollVLZ26MDyS6zQm7fB_4i4-BlQk", width: 4128, height: 3096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109106533647153118094\">Indri Pubuakeng</a>"] },
            { photoReference: "AWCwydjCygJmpMRprachRuTcPm_yxraQQUPbCpb3Oe8vuCB28Ej64hFq8fRiRifZAlHEgj3BGbDJAYgPP9sDiwiGMntjOoVw9O4g68rx_-5t-fXKAiZ1_YWYpdoE8wTUvGN-ZskxXCxG4ZXxFuLqVIj9qi7dFlAVw86Lk5Luds8gtNytahWC1up28raHv0lIzK9NM8UMQytQgApS0lQ7CPbdiZgFOlPkkfVpsR9yQ-14x2veh6oy-NpHBVppu7wlZVN_xVDM_Lz8Qj2Uh9kNKCx_yBzJSkmhrnOboT2IhmHLrxyfLLI9oFJl4cRvRG0XNYvzeaB-C3nJ7Zl_4buE1eLOhigtO9j5T9p5CqxdKPNcZCWxk-MkhPzi639hXl_uVTiCozWKdzep13029ZfEufRGyBAsxR3nweU6SbUGGIht5RjhP85M", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104564288957208273688\">Barista Buddy</a>"] },
            { photoReference: "AWCwydhIUgeyOiDb6FdXTeQVKo3_jXJEf9XGm-9Q7LcX4shTdUXC4fO5JNRiD3QykvLgL1F1nAM0q4DmlKA38eHGt_6tIeX4QcNt_TpX7yJV6t9bKx_Z7XMjhjV2wVKTqB0innERS5iErY27KhI4OFLDOl2VHWZh_kZnc9yVgy240wd3QBE2tTXgSk_0lnxxcyT0QvToQQvmwjAvkTF_PEJQnpxjJg6HLHGqwxImMIU_gL2j0xJ6fjDvTAgjEpPmuT5j3Hioz8qJzfp3cMEncerv4TZJ-JKzIMlWaP5K4vL1F6Celktf264vRgtGuvQ9vc7zZXOaSic9cLgeEd1ryNXrMY5TpuuK_QOMJP3Ziotnn7PM4PiY4W6-FbZ4_yEDAmma66YLWaoFfXBkO95_-E5WAoqGI4uv3vNTpOkV6Y2aaIz5sHJu", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115915052393569404994\">Uly Primagama</a>"] },
            { photoReference: "AWCwydjyGCSsYbhmJtMiBT-XpiMx9IbZ14BWwlD0LsA44jCnh9rJDRZiHNzv1z9MKWaa2tZ63LDXtptArjYa68XH1OmzVATNW-y28WaPGGU4wJkln2Azx0FenMAVi_OIjvjBwKuAn2SBCAOzWloN2tMieeg_pm4tt4shCFxuIX26gIjg0fqjyCrfpimKtAJ18exzTZzhjkgkgp63RvgUVI7zTntT7UAch5kfzVnMMzot3v6wdzitwdqc_SfkL1uLpECIfnPHXffRXhZT5sWW01Re_j6iFpDhxPdQr64kqGbrm7RLyQfhP8Gk0XKEYmM_RSb_2GFBnQiu2Tll00pnBVa3R-CZuauCxz05IfMfr_HLwIDOumrJ5wkOFX0sA0XlrzK6xQbWjrLUq85dAQuPsSPvQGVTKppKh_uu6b529YKZa0pTDxpq", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104161071885199153208\">indah nuria Savitri</a>"] }
        ],
        summary: "다양한 식료품과 생필품을 편리하게 구매할 수 있는 현대적인 슈퍼마켓입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 종류의 현지 및 수입 식료품 보유", "깔끔하고 쾌적한 쇼핑 환경"],
        tips: ["현지 간식이나 음료를 대량으로 구매하기 좋습니다."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3265031962530082710", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A8%EB%93%A0+%EC%8A%88%ED%8D%BC%EB%A7%88%EC%BC%93+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "베르세하티 시장": {
        photos: ["/images/manado/info/shopping/bersehati-market-manado.jpg"],
        placeId: "ChIJSw0wc111hzIRBqyEt5EG_zY",
        placePhotos: [
            { photoReference: "AWCwydjQ4QA6THTSjM4iiIsiQIy61arNNGtKkQb-ysoa0hv5MutDjoAMR-TQFncM1agkX3bHeEP5yPr4gy4R1coc7oj_hVhTbWGdyViCY42j9h8rfOUjn2Qe8TSzV8JPpQIYdUIScDJe1uIThOK8zo_8C882Hb7mB9emcm0VJOmXtQrphM0ImotYSo_t1Uh5X43W5z36p9N1bq_00DoPJAQyS0I1zKbQKKwHotGVahJMJgoiZvOexaRqvXI4T0r183XM-3hRYLohfeap4CLsf4kWK8ORgXUS3gBitnNzh1SJVVqWsQVogzZrj_0dpkAqEbh9LLH0wJOwuAkqQht8sKtexh63shWvWgivN6-p4mDtGDutOrcfI37lqs6lqGByCu1xpZo3aetnk-r7PzDwiwYZ2ryxpOBafotUbRfOxDskMvS_Vgc4", width: 1840, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117870474856524012651\">Ay Nevada</a>"] },
            { photoReference: "AWCwydh8jsB1tfJy0n7cEZsyFeUu-jJCUU1zahuPyRVL-Cg9dKbRJzkzWvQD8g5GMjLyw-VPxPcGY1iR2tOgPyzo-ZneQbLrBeFDFcBAZc7gRxO9IedkZwuUWqV36URmN7ccikRzV3i8VtAeXeVy3LuANjrFiKMT7j6Wh9pXGtfGPZbB0G8STAePC_aLcomU1y84CVpelwlJntx2BUYscLNoaAZ0HIIZaXAiH3fird356qG0r0uIMiqnvJFm7tjgHf5IswhjfcKHMW4gCvyWA13yQliTHXMmrYMfF8psDmFwwvjwZjOI6tMHUQ9EITa6lqmXYGuyTf1cs7inmzxWT-j-j41qTnm1-aIT5m35dYzumGXvJNaECVVHqhHEkC38SqYjqP0o0DlU2-LpwE_g5ZOUd2tifSXaDSOLQb0Gn833FEyB7Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114374708233000177980\">Prasetya Oetomo</a>"] },
            { photoReference: "AWCwydiqvv3j7TVBumIZX3WiThgWZSI8WeWWCeRPkpJjk3bPB39J0xDInIVH7jODfLh5lrjRqezxRUkWnbJB39gO5yGj9E9x5U1J0w7wTsVtBYcBNcI9R_3CIAggnsJYBH82vSRaglDX34MjbT-iUXQKb4MENc8ilbj_ErW825wnnwC3OenWYAeJyQevo6Z9V7_TfNbkRV2bR8Cb5bLlVhomBWwSraZJJb2NAAe7hSC9d2HHtqOrbeYUh_EbmYT00iiiJ_Q1wpaq_4kAHrYKfcg6wq90wVusk-2eASaMuJi9rFpZmBLm4iK6DrG3538Zlwe_lFeSXjliMPybqhDUU2uPEqRX1Q0MJCmiGuPwdJDmN8i2QG1kvyZpx2qLep45kjCn-A7FoEWVfhOxlKbNhBm7cwOC51AZn91EsEa3EgpDRpj2B1pyiNSX6yJcg0vwncpg", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102517291214493874045\">Wangsu</a>"] },
            { photoReference: "AWCwydh2CVkoEX-LNuIZ5oc2e9OC1MIylfjnH2Md3Y3ECAPklRyE51nS5ZgGTL6pulqxtTCQEGBLAcvBjR7LFvobieP9_TybA1tRWLofM9330H-AIQCn1FXbVr8NEad6li77qFGP4uwpxRAfzBSRAWjHlJLR_bf6ZAaYins_uaLZHoBlV-hXqaZ46lvjaK1XXlsy9yHWcsMSlbK5zY21cnPr4xqFpEO6VrPk5NGRUs22P47LaCAro0aDsKprTvv7CSZgSG9ljmabj8EgvQYUboC7iM7vnrpOL3VSRgOc2E1VFZarTGq54S_as6xzasWTagX6yVHliaH56pUnDPB4OxThx4gPsJ6ksjs_ajdF032PVs6tbuRWpXxfvQeLnP-z-NHHKjXQhHctKTcAHNYwkSFJTehjdwdg8fBNVPVDYO2A2oBF23AVHTD_e4n3-0rqry8G", width: 4080, height: 1840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106528263869628427314\">Abdul Gafur</a>"] },
            { photoReference: "AWCwydgAL-UJoN8aTuQOJ-f4oC0SmG-28M7rQO7nhMcQZgGxj2bSTSfpm8qVTIjf5URC-fl7mLQVdqAvaBkwTsKSYQetzrrNdl0ESIsA004MkLThPhihAwBJKNCWk15TZ3InKfQGcTpxpiBqj6cPFC1dt013QOv2PUIugbxzTxerqmxmbg3nMVR9PkB0W3X2ZS5qweCDRm2Kc_x5iWx_dc2ExCa99ag7vSG_HwgLnQjAhDutBVphuNCIICOhzpkeC0TYTmYRTNZRtvbfsW4M4iRSsOIAkNejtijkFUh99GMSBTFwP_88Q62wKQIF6PrabcLJGGJCanlgWBvlxDq1VVThgn_GEG9XYzcXyInlgxjiqHRHklAWKMyupUodt7LvkVcKV49H4Sll8YKKC4BOdo9a2jjY73OspSBV9jTPlBXGfz8-nNQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114374708233000177980\">Prasetya Oetomo</a>"] }
        ],
        summary: "현지의 활기찬 분위기를 느낄 수 있는 신선한 식재료 중심의 전통시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 과일과 채소를 저렴하게 구입 가능", "현지인들의 삶을 가까이서 체험할 수 있음"],
        tips: ["흥정을 통해 더 좋은 가격에 구매해보세요."],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10997835721124368779", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%EB%A5%B4%EC%84%B8%ED%95%98%ED%8B%B0+%EC%8B%9C%EC%9E%A5+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "파사르 45 마나도": {
        photos: ["/images/manado/info/shopping/pasar-45-manado.jpg"],
        placeId: "ChIJ9_djnkJ1hzIR87Tgqq07EBo",
        placePhotos: [
            { photoReference: "AWCwydiagMUjlLw1enNS6aDtVKk59VhXF5cnkLiJ22gyo6cTgKXOOlgpe1N9ouNZ7hOvnHj92c7wuF-aQH5Ew-W3MSCQ0KDUruONtwErpI27xCBm2bcVUICcJk7Qt05TkJpPsJLub_vAYaS043WTfUEI61CYSauCOyeV1J2_kWeUee-69gna6jmfoTTCsWl7dfYhvva55oHcT-y2JGRkFt48QZHXl4JiVjYds7hfYKnFWYqCF6nEnH0Ujm9B1iUH-6wLTajGieORm5oKiAfZ-Z-ez811IyQ4nGB2-uuJaTrt2t3tUB_4Aala4FzwPTsBej9idC1PSMQLX4BS55RSvbgmg4a6l7bMwugaw19yaHl387m6DQSERjKuDryE0BgVkm7M6Rly6EGgC51_wWZHGKvyyR-tGQIiAj6rOCNMFyukXnMFwWs", width: 2340, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114497059896913452256\">Manusa Biasa</a>"] },
            { photoReference: "AWCwydgeLtD8vV9RjsPvb4f6ArUaBp4mljBzXY8F-1ndT-d6UBIzV37zlm0rPwYS6o6bwK--Hwin9BipsldKU5EwftmwyDEiAJvSz_9ldWWPxLBIwuje_3u9UesrdD0lJVWxIDn4QqE2tsGzO2njYoAr3_r6r-WroElhqxIX1JT3dbwsurVjt18qZaGqnGSx0e65PZlViG9DRFmikkQ8OIt66z6NHYvUB9gLA_0DUQt6I94CChLIKuB4qDaF0hizk81EqUHVi_mQdPgXEb_lbb0bIIpN5M49m5hQMjC2LVhrx5-VAMwqhP6Udyu2yMiY2TfhKAENrx3Vl8CX5pBUiPS0ZLO0XXA0sOzhKn4Spg_xFXYIbhPS7YkvUyjQfjXhOtglWPgLA5jJUSYUTkCtXP4RX2jELN4Qv9PytIG93osNqWJjPDU", width: 4080, height: 2296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104926532250992141134\">Marcel Izaak</a>"] },
            { photoReference: "AWCwydif6M_GUA90bOwNzE3PGap9Pq2faxxrjwNM6AfP24a7bIkX9E3K1X9VPKU50whKIriCyS0alEeULE2JMLwKVqG8r9ZkGRGWIZQnw5UWsUJ4gBHohhWzUwBCkRS6hJL76cDy068FxPIVx5u21rpRRNwRfEyM02xEzAlyKQsPY_xT2Vb11NGUUKHS3DKFnV085xrFI7odFMItzrVrtZvsMEvm0q3lEyuZjV_69XxsS-6KUNx9SW9JiH7NFERQVNFNd2ddH5JC0j6nDYpnSjcGJDkpv1xTaHdCWAAEQz-Ls_kmC4KDLAe8OHAieWFZGoi5m6JBevlzQYnHE6ELdJx9p0hNXixTAx2ScS7rC9hMmZzkJuwZfLkc6PYhrhzO_3hjYpWLNRNwp42DPc1_zkeKctP0WyIrkbGvu24RwCwm52ru0g", width: 3096, height: 4128, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100583482439082101738\">Sandra Supit</a>"] },
            { photoReference: "AWCwydjkBuxOp-AbVQs6Z0PFQbgz7dze7l4OZHWD3OBFtZgeQR7TwY3zzDUUipqyCZ_JBXag6Nv1SlYecUvcTQKr7Q41A-sreagbnn8xYqonVMbR5-O19tg1dkYsgIqnO0f0cjZZnxPXp8qzM8iAjLm4L0H5cxfpTk0yZlno0rChOdNclSC2xBkK51JOv-gY5jEcDrS_PZTkrlGhhZ4PG4eBN7OW7JUrV4sMrM602LkPCehj6okwHjCKznvrwBUARQNyP29uKoEhOyEBZOGhs_cldQ_ZUHNo1Hf56nl5CUxu6E3NHJbn-pOC2KBLlaaMyOgxvG_1NJ-CytPUdAXzl_WuIOZa1iQdF7ecD3CqoF4kSxJp8B0oGHqE-DZ1g3S-0kIRb2LQ--N4Qc_V3IEDGD_ie8BuqmyoXG4aeKVh5tgkj2MxSA", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105333208732867898195\">Raja Koper Manado</a>"] },
            { photoReference: "AWCwydiCtluBNDp7ADqZVuqJtNzRrL5onfOQ5zUEDGVKbbI3SNkr23SDvnW5dRKrs8XbPWWcU7GovFqtuw5flF0WeoWNTty9yA6-_Rx5hND7PZO9XpFe8spSSZ9p1BsUZuTrhB92ZAiUCDKvQ6PBqmTqmlGvNBQuL-P2j1XmFbEgMqhPfwoJVRBjO2F3s_6AggRR-tltOhdAhfhdhdw1OIMQPNDitOibDd8FbiJbQYSmsvt2y8-BHL_P61b-rSOzNOFoudjMmL0N1nHCB-SjHqUeoNZjSGHuPKB7rx0noMUc1jLa2IySHz_zKEgXc87cU1GNELY7Szy5YcpspTKewK8lFZNZYpLrmCOH31l8L252kxennirv4WmgBNDNyLsBjmgCvvSvzlTMJOtkniAfHiCt1gCAVyrZy2nZXGy3WbyvPRjtwQ", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116759529014982095992\">Sintia T</a>"] }
        ],
        summary: "마나도 현지의 활기찬 분위기를 느낄 수 있는 대표적인 로컬 시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 신선한 식재료와 로컬 먹거리", "현지인들의 생생한 삶을 엿볼 수 있는 곳"],
        tips: ["흥정을 통해 더 저렴하게 구매해보세요"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 7:00 ~ 오후 10:00; 화요일: 오전 7:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1878066661695730931", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%EC%82%AC%EB%A5%B4+45+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "토모혼 전통시장": {
        photos: ["/images/manado/info/shopping/tomohon-traditional-market.jpg"],
        placeId: "ChIJy-6xm8RthzIRNyG3Zsb11J4",
        placePhotos: [
            { photoReference: "AWCwydhMNlV-Sl73OBZRp-Gz-PS0R5uiuwQ61e56F9FkJCqmHEJqBLLOA4LbKk1sUZbrb1VHDeO9D9IyosrCdIkFuRJa2ucWedBejJPQEiT3LYgP9e04G8_4kRr9IzSiXJY7vMY7kgsFBDR4T6ND8wW-51wQ_SVdIptw__i0ba5XJcMj82D_rh6bK9Y6-y2dsiv2QnU_cETALkLu5q7BjRdGK3M6epdc_fd3nzNGU3A_Ovsl8Bov0iQkhczghOBpAqZoQYH98Cxi7vXKJuwRo27bMuaiOhgCQ-5xkD98uJ9eft2Xhrk2lB8dqrIJwrKkuuplvXkSYs2pyw2vTDcejhKTfPIGBl9bd4tHunGUPeq669AXG-O06Bce6W7PbwdAZxQuS_Rkb8GRZ6KwG4VEu8jh41dd_wEJiwBzizXTok8cXB8iYQ", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115601488210677780151\">Zona Kuliah</a>"] },
            { photoReference: "AWCwydgG_lXcco49CMGXIotZVgZv3MCGRfKMu5aYpnGoC8Len1iv23maa7HBgdugIkna0uA5Dd8dtRtct7pEm8iHOUeM1ocQ3zS2Se_HkC1UMdng-7jArEMcxA96QwImtP44a4iLKnKSYtNePk2ctq-zy1CPUGkG05gGPZNM0j2xV_Pwjj5cJElscTuQujMCDdl-LoxJstXh30LP73yK4AT7AoCTQBXXhl1PCM_sQk4fwLrSPpmtUvoKeDKiVLmuosD2PeqArhW3FXGLyD50kfuaDgw4Je37ai1aiW4e47WMm_gjoN--soiVYViANRTQNHdf8fTjIMrUns4q7DVkwHQofzsytHPmg17vqi5gX9bpiNvr_-Pe3nYG1MH1skxPaB-qwePe0F6ErfJ9OU7W0AWOIZ-aXa0p5O1e82dJPCHCt7jD6oRXlP2ddEmnbkridZH7", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109093702361999934516\">Sy S</a>"] },
            { photoReference: "AWCwydjAGAfPhW1cuOX9tOH2dawBxsMvwnKXLuSEnrG-Xy7VFBGWx1xJt1rgqZvRQJmnwp1feciZZlAOAXvrmFibZ4swwxmvC6Awmj4-oi0mWJ5Y67HYv0fs4c9IMJ7HpzMJ8LRfCD2OP6WJXbufV7FM879q8e4jhS5V7r-UXDFD_TPBMfGB6JDkjrRXmy3XzmIlZ1aU-3Mt70320PIoBaouVAaKgIH0Q9DNaDoc7aj5ewWoLqEhmSXZatc8ycSx0v-WiZjf0b2NEw5MLsQu7WjdmaVlIwSS3kCONoErZbX2W-Q1QLazldKC1rA3r2jihKFn6P5IYNzOYPJiZX2CxexXUOqy4POAZfstclcWnqh_FS8UJ6TdoZ7Y2HAX_WAXOzQz_5iJ6cuDijzMc4O-DkTkhRvESZVN63XiNsfN3NFSC1g7izo", width: 1200, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113230099483667637361\">Henny Swadesi</a>"] },
            { photoReference: "AWCwydhjAUeNzoIup78UYXeDAPzxo8IkO16U32oaeA5dXxjrADYPstWcvSD1PyjbLuChn-3znHNCySjrxV8blxbdohrWBKy-Ezcx8qugWleLnsB4zV11etAttiTCNxBJS9lMPO7_Y0fD_HkXg0IFbX2B4JCaNLA_WTcB94PU1Q-T3h3743-tg32Lw6Y0G2eKgAlkbO_oj6QRacVePU3-e_ynOnouXHIQ7YkNJX6hSzZUTV-exZdXc-yWARndGi8tHEx317EpeancqHew_sgZool9ftJTUkE1u6lufzx2_9Ui9GpBhgFY2LCQfHLEz3jgq7KIoTJ5zlHZoWP0v4-6AYMCS8DKm64rrWBsnAL4Q-uWuqTTFxAMZ74nUQ4OvHpbWalx-S58V_A-SUiZ4ol_EJOixHg8vcXuoJQNKLgP2ONdMIw4uYQ", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114682440401782379937\">Ghaisan Julio</a>"] },
            { photoReference: "AWCwydin-uHWBmZva-0aJIPrdZ_4qLTsQJxZuzbvk1pcSftDAspkQaxF2unoYGJ5rgJPlje79P_IqfjV9bQdaABzmPZoaYsSZtd-ooN3U93f88XSHea1DmNj3MWd4948sTSAkN-QUgffx_nwDGuo2oFIhPj3bcGoYr_g4B3aqLeoaxvsNDn-4yEHfBFEyPZnVoih6UjH8ck-OVd-u2BL3NzmAgZcRi1_bBhDzpgS9IoitYDuhNrEuE_E9lCPIIlYNzo3Bv5qt1pw6b-t1kIrAUQGghRu3vwsjoz0pHACOnnSVwM7idzVIpWK6nnJWdPEPKDHAIv9WjNOiI5gIi1yNYuFnkq9f-9GeC7xvvGaPCmIMZKF1cNT_84JqfvpsS3qd6PtUnOOjYbJwQ9nWAmohiw75S_Oq0yym3ExRKX0ogRibN3BEyWskoqbJVSuHpwpwZvC", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112303811437282195107\">TAKASHI I</a>"] }
        ],
        summary: "토모혼 지역의 특색 있는 물건들을 만날 수 있는 전통 시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["지역 특산물 및 다양한 전통 제품", "현지 분위기가 가득한 시장 구경"],
        tips: ["이른 아침에 방문하면 더욱 신선한 상품을 볼 수 있습니다"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11445042785530880311", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%A0%EB%AA%A8%ED%98%BC+%EC%A0%84%ED%86%B5%EC%8B%9C%EC%9E%A5+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "IT 센터 마나도": {
        photos: ["/images/manado/info/shopping/it-center-manado.jpg"],
        placeId: "ChIJWx8u8PR1hzIR1-gWEmCrqx0",
        placePhotos: [
            { photoReference: "AWCwydjoSYIH1GN8bkoQnRNpF5xTK-B7JAP0nH2k18lBwLZfEvZo4aKOdp1Na6EDUxrZ8fae6EbWzjkCZtGpuXrpyYFMAj94YVZStsbeid6bzgmtqZC_c3HYe-3wXvhy6S3MkKU7dluYqKWwG2OYHI0S_UiWAFn-VzNS6thjWo3G8DJ-hLPck9KblV_rW7auZzf3eRoB2zjBwkEDOFn4APV5Plgbl6DI4yV56ZidLtedWan-T6MkkadGULRBm7lt6qWKQjDgqyjOeNPXVqZZrRVVkfDsCFWqftNwzfZr0MdacyrX3TVHQx1A0WRm3RoVnAiRUnTWVH_tTT3PS5YJ55C0gHI57nOFpfb18H4OUDA82ri10L2N3uMou5fFUDv1_ybCuXSQNZ0UGDobdkNiIRs-B23WHcQMlru_jxqmstPSu0JkQQ", width: 3456, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108411924984135882347\">Samuel Abraham</a>"] },
            { photoReference: "AWCwydhtz-YR6IYSfT4mdowtPw0C0VQmFeH_ZwbSqY0peL04etyDSegHtGEyFDV-V30p8gv_ANdU8GwBWDsk_9O6PwUwe-kzj2TKr84mTHmV0TF8lqYCWpiCifFQAB9OfED0iGRVkxpam6VIQpSep9j2RoqY8sR6Tk3OCOPDTwke1aidlg1HH8dmoAcktgcRUeMiS4jtlOvoJNvaqhE9Bs2Ze6w2Ww3qZO2OE7XEiz46PMl97XmJuZxEcNreLsJLew0bCCoXgVwj4JS2Vps5zYK71sCclvn1SpqcOrcbY6oTe_Wb55krEWPgziFLe5wW5vYbo4Oh-lWEJ-jLYSLuxqzMXQ6zmIvUBI5K2LSiAAxsItVoaieihlVFwadJMf79Lmh3V0W81T3PCrLKOjiIwcIGK_f-yYQcudb71aSGB8h8afC24g", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110279567604957637156\">Tomat Asrm</a>"] },
            { photoReference: "AWCwydgnF3vBx6WSSz62Z4-k5zv-KQv30lMsaoFmGvaz5y4zP-R_f9aUHDc3_cAKuVZash4YVSY1Aubibep7NFM1XPkdHvmetE6T4Ft60bM4YagJbjhX6z8tiGwls-H92G6C2FJFlUIM-NP8YyfjeYMQ_qcjHzsXE3RbiH3CxU0mBFU8ioU1V-yyZmku8XLPSxrKj0RzQe2K-yL8FEtNpbiWHxtB7Qk453aKj2TK7A7rQWc9SCj_PbuZXsS8qjoBIf9viQtrjWVHjF_pOD3G77Zft8zR0tmTw9yAFo342HYG9d6KH90e5H_vUfVa_WM07WvfpIl3bGgNDyPQo_6rJij3S9qUuhHnyVn-1vzDfDcqSsgLaDA74krMzMbviUGsGaJc5N2mPpA07VX268lG5sS3kPJRpUoQXuzcGgPvHb3vcpyVJkM", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110279567604957637156\">Tomat Asrm</a>"] },
            { photoReference: "AWCwydhSKly_kO3CEgyuDHlUVL7HkZy3dKPXEiIRTSSzYUv0Ps-_jNzIW8Hf-zrHgl9uECJRTegKyC0BYE4rUEsnR2hiPbonPnEGREftnSdij3OZpWG-2U99oRQM1Bo0UquxJiCooV7PaosfH6MpvmwFHid0cKo2royYEfLyoNN55P-W3oGVhLXPgXKvtve7_-faHLDZjHfR1RN9M3BsUy2bfW_gOXa4xqR4hbMW9jCU8hMOrsqiXSiPmidzTY01yR9-X-kqii6tSCsCWBM1xitjiLrLDQ2Njkt2GzlOQgQU6OVFwDoYlB5kbG8ZvMnAePyvSNJPEY73iDCXOKSpQc-Z28tMVN6mdEP0n0yrhK-ZUzmq8ZiyQ3ftxowxQ_SeQsUpx4eynzp3syWET3B2zcgNejknxUdneqn9LegtaNhfTPzTDvizsY7C_gzPr7OsKRcg", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102517291214493874045\">Wangsu</a>"] },
            { photoReference: "AWCwydjVsl0p34B__WayYEKnc8u8nMqtXLPYpHvcVatZm9DzxOx-ZMqeYFybuXMiLbXuCfuzSeN5tq89Q_kswsgDKkkacDqsM7pBIR9Q9Dm9h4DgB3DWf4co5uNXBXzFVoi0Rz4vjsV7okR-LhydGa5AU1aQ_MvMw4kRmsQ3a81XnxbBl5fgfyTawKy2A99T6uXqVb98FrAsJZ6h6Ch4vpBc4gln_RYl8F93juxTiyaJtcB2VIUm-IbXTO4Y_O_0dF_em6dchTQO5EHCZCZnOWnjJf3q_U3szPAZxND76g3Rv7KIlup2qbpmt3LuPQLKdzHB0mAGUYzQ-0EzArVUU933-tUPT8_udqXCg86M1SpFkQSO4njgphk7tqkWOgSGl83ZkQJCcgm8Bs5r4Kqn3CZUK2QZ25WwO5DuMRNPUxS8F9fqHD1u", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110279567604957637156\">Tomat Asrm</a>"] }
        ],
        summary: "다양한 전자제품과 IT 기기를 만나볼 수 있는 마나도의 대표적인 전자상가입니다.",
        updatedAt: "2026-07-21",
        highlights: ["최신 가전 및 IT 기기 쇼핑", "다양한 전자 부품 취급"],
        tips: ["필요한 사양을 미리 확인하고 방문하세요"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2137990877226133719", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=IT+%EC%84%BC%ED%84%B0+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "스타 스퀘어 마나도": {
        photos: ["/images/manado/info/shopping/star-square-manado.jpg"],
        placeId: "ChIJEYJBkV51hzIRBRB42dFT94M",
        placePhotos: [
            { photoReference: "AWCwydhe05CVmTugYM1KWjO70RrUkjNg-1cvhWdUw0ERhkcP97nANab1_Jx4nsjkAOh5R8E0ascRL-v-b-e00UZ34BjjCLSlx-lKSXhoS0RqkZpEfhBICxwinDAOyVUdvOhtKipuqiXXu9BJd7bepkQnjMtThrbiZuhmwK2zjKTsZP9UV5TAUTAckmQjG_OKNCyphokyjeV3Ysq2jDc5_JNrEr4FueVjElUjTvUuA5MWds_lp2hHLCD3cdW3Dne3k5BBssov2wDs7knA5jALI7q5k23TC6KP-Qc_obT1z0nSWTGH4npujKIFT8gh3id7aP3mtKbBy06kC8ll4BupfgXKpP9yoEioucYmPSqZvi-6Y50oLilA2H7s49bhiUU9tjWZM2TfEfKAJmh5OLHV8MPFj6DQ6kBYjsvgdfucAnH7Eu7m7Vlr", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108041749346386448434\">FATAN82</a>"] },
            { photoReference: "AWCwydiyL1749ZySmWquIkyMcNQBP7B8EGaQjIrNuvBG1uZdjj0RzN4er1EU2JrM9g5qTr-YJ_v-KSeUTJZ6lcCdyUZbEUAwoTUB0foYUBo-z0dVzpGQnUapVVv9D9y3BqlSeBjHB76nx-jv8HHVgmOrGwa0G7SLvy3-pPQ4Lymf7b8UYqzq96F9HxeGVJECCAqlzZAEv6Vp9qTCuEgnDY7b1xhnrowQbfoGVUllEKGJ0AtiLI9vNTQ8Hcv-5xFrEFm8l6vNcqFwXSNTbwyD6kk_ZRufztizlckYANbWcKHoBE6dJud3j3yWQkQy5vZ4ID9m3Y9roUIFpeosfON86VNDBQUKGaMymBZ0qGGZeo7u5Wa7ko0NUIjQV2Au90Ix6eJ4Vh6CsRyt6_7WxDsB1ltiTO-5aQqLbT9LegbC3H31ZVc", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116579605673149448769\">Serfi Rembet</a>"] },
            { photoReference: "AWCwydhGh7npu07tygMxkb9dzKZoWD0Kjk2EKAchG-G1RjBLIZ4RvXSUaBnSoHV9b9cH0ulYbF8LH6hYJdyI3FwZnkwN5yuPydksWXdZKcoH5jsO1-4HlRrWtMbF5k7d-jx-RfhN2xwwxZeFMBM26DnWZARehU66kVd_THBgLZmv8EmCtVv_hEJtY9gIv5U2bn1nuXFmHd_kqKrqdkDYSgnQcUNpNQnlZNM5O3PPXLxI_LebtfdAgNEHsi9aJhvGdBneBN5pl3KG01ngQ-MtEZrczNEXL4Mfvw_UyQzL-PwXXErCAFZajoZj8iuifUr6m7gNCjonU4mMi4BT_L8klah_gA3UwAPkwCxDe1VOYfxKVEncPZSJ77ByqjLytVmoegjUsJrpd-5hLr7GDNCEEru0zbuDC1qqkXhrikcGoIzwTrNs6ac", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116969891430022597309\">Adi Ahmad Samin</a>"] },
            { photoReference: "AWCwydj1Ddiu4bgX9vD_iSAUstZhb3lCd_BNTb--X2xlNxwKr4pGxzDnR-_btVs-ajXRI88eULs8guTTSnFfckHK7tF-rhvk6xSgK3x9ZxA5Yf3sEvhbTBpn8L0jknBJ6NsY5FT1TF7qtXWGMPxn2ZSMWO7zD3fvwlUr8nv-P6rFYppQ7g4A7wqzT_f4SpZtn6jY4zEZlEzTR6p0qET0_QCxJ-hD0IvhkYrcdA3QzN04F2pAP-i1qtk_0GRpa4SY973eUCJE9L5I8FH6EtN399Ln4S2KUQ2wpemM_fNPhz__DZTyF44y-pFJj7k-rgeWSkYomLByGNtXvoS5HfHERbbA9neK_MS3HRNZ7jLhnVrCNeNfrbMrYwJhhgQuhpLGxbBTMyFvAVNMzrMOs4YrOHcwZ3uXi0fs24bHctmBBPj4B4ELog", width: 3120, height: 4160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107359402033139845057\">Filipus Koessoehardiman</a>"] },
            { photoReference: "AWCwydi6ol_aM9CW3DgD34TQIEcYaClm46p-P54kjlQh9g_Q8Ggry9qqF_DOa33-mqHWX_XuDIFcYl0gUoA0GAQp9bkGt18iwb-mNDUTr2xHvdQBvG9V4TCkphhbTHsHCe6oPXRte_GJw2DqexwQxl-u90Cb4VcosQXwLBq69QA1TAOskiXaAf3ZoyiMg8pR6IrBP_vxjgggLztzrc7LiTFjqnONBwDiL6M-decc7l31JFN8OrzGDBNVMNf2Papc8xlX1slLtqpLkiiNH3nvPP3ih0vVeSClxf6LWhhyBpCYD3xM-wMxbp9bnv_AzG8Cw7TY6xKFYIyBprk256MwMeruJxAa5cGhbGMstGxo9J9tjEyAy3-LrSFKUQ9aH4Anw0rOSV8xZF5FHQhOcoTQSC_HjGkL_g-b6BLKKf5IHsQXdSS-EK3O", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105568720983811574569\">Kk Ii</a>"] }
        ],
        summary: "쇼핑과 여가를 동시에 즐길 수 있는 마나도의 인기 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 브랜드 매장 입점", "쾌적한 쇼핑 환경"],
        tips: ["주말에는 방문객이 많으니 여유 있게 방문하세요"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "http://starsquaremanado.blogspot.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9509161298977886213", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%83%80+%EC%8A%A4%ED%80%98%EC%96%B4+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "리포 플라자 카이라기": {
        photos: ["/images/manado/info/shopping/lippo-plaza-kairagi-manado.jpg"],
        placeId: "ChIJ042lop0KhzIRL8mOqo-sIQg",
        placePhotos: [
            { photoReference: "AWCwydjfvRgq6gvBbvSJSyASw8JTLp4tNO_qmLglC4eY2CMFgtlX6Jk6tHUujGgfjAJSSDfUSAFMtiPXvJel-XWLMiQ85mpfAgAJILyx0SNRNB1zq_QEU0vhHPEyucqeuFsxTdemrpv01AOgQ0mJv6RT8wW3SHVnXFDUDSR6R8ojm97SReXAo9B8dH5XTgWWW429UmgTAcF_ZUCKdUGRyKoxApMhfPxggcjfjSEeCVLJukoyutFV7yg_z7BHfkaJ1r6VLiJtNXFhjfy0u0KSXheMMvS8KuLaltE1JziJetvCXVz18sy_zf_8cqii4vxDd4aA87pJXJX3FPtqfpJCTw05gPe2BDwSA4k1GaT848hQUfVvxDCqpPzi_Hv8PCr3DdCc4KPB8ZYs4oPgRvKX1oa8V28cnKpjvFmYNzx7x2XxLmPOJ4k", width: 639, height: 480, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116637426634302537351\">Greatly Tesalonika Singal</a>"] },
            { photoReference: "AWCwydi9IdRdIxn-aNLbhYV_HH2Uyy8AOT7XNTf12VUae6PwmeE2mri_7p6RxHjs_WmfPwBDNXBoDT-_eJfDmHTCXO-NLcretYjBk-Qxb_WMOg9vDd5whlrIQ__inf6Nte7sSCYMji-IO1PdWQhKnWIVUK1X0uEQemVRg8XPF9VKj7J8-2gO5vG1AgxaNS05as_-ZCaU-XAcm8QT1DWvcbLvb7e7FP6RYUJmbm3Fs083_reoszuLM-DevxRBSnOx1t6YRWQaK2VHGTZY3QUx5J2JKD5N4ZPksGvvTtKmixlcjTZ_nG-YyMbARe7U4kZGDIL9Usv7UXziozrF936mD1_xnjhuioNPGVSCZ_QEpWf_guMsWJVoofGBIDnj8n62mchWcWXN26tYW272dXMAlCLaLS3s6kfvRHYKK25qUqmY8IIaiBSguovM7MwL5SwcFiHi", width: 2340, height: 4160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116773141568476216974\">Lippo Plaza Manado</a>"] },
            { photoReference: "AWCwydhfwpw9KBVLPqIe6YkFBN2QAYVgdDCwWDlMA28LSUOuZScfJNn54jJgWxk7YMTuAs_147chYykf4Jx8MiLp5hrFVNRJej9_I-DjeZc7zJZ4VbCPIOxuR7ZTfWIc46bLa5320XL5_rpOpXOoZGkwKkni4NbmiIx0oXkyWi9Jbckhh5RjtWL9UyexDAYl835Bh_0R2loSoDgO7rQfZ_Dam5ak11HS-XnPoBNMSRJvHhlkdC_5mninqTlr797rwDBpxjaGebxal-rFSmHYEfkpFVOez-iv7-orTfZHJnR39NEBbjjoIWSMCUMYB-TEYEnEavRqADf7elxaBRlxrpH-_xhyv3-tLDJME1DqemG6ZF2nqEidKWGRUUNzkl91UOPxSA8urgDc7MwIJ5VDRmECM_5jg0cVtyQcCjUrCiasqYjliyKpvqlhODOvHnsm5MPL", width: 2604, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116773141568476216974\">Lippo Plaza Manado</a>"] },
            { photoReference: "AWCwydigzTiwm2duNnBIKZwhzBHfXp95ZoSnOI7sgypLhvXthY6AVmdKUuKOWrfPETWD_I70ZKNDGASOSINExz0fK0D4cY7YVrh7qMuh5AfD_g1XREw_boFlsIlv3fKwFfI4sNA_CvHGuLZMTvqRQD40yLTonrH-l0O7TkchgYfsDrQIBepRQZKTVIngWUpwq_c9jq4oa0TsxmbKvyDm0FoycD9WURBcXWIpSWZdFiBzgfIRvlrbQam4koyKvL66E9XJuwv_glXypDsov2X30RV938kjd5d991KXpC8mi71Zo-Xe_9Le22yF2Rbx4mKQLnnvVD0IggRL-pjgjKsbx0tOoDVp8lNNeAJJf2LUOX8DPrlkZvscjZFk1ohzN18d61DmN3riiWTQsQw41HQmvD0UCIQxgMJ3Cuon2deO-FPydZHJZMqJ", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116055625394693991850\">Mario Rangga</a>"] },
            { photoReference: "AWCwydhcME2j3qnF32G-hwJip_yiR3ttLXBMZBSZs_3Kqcq0HeLAfkvTpuO5-1gasXHS6w4NQ43buLW_xs32eCug7CJttilaomuqAey-DTYrSN51RGxOpH_SYudESGsFe0fF_BVWqxtC2P3XQ8qbyuH8qklYeQCDrk7kyvTdQX0KMPDMk1aIBQyQw4R3m9EFfoAMTcdRqjNEOWxy_0EHXrjpyMqtfpmcii5li2cbksCMPDrgu55r3VA4qsZMvVshSwdjEGHO5rUqQgYDiuOxgNEdlfYVqPdImK21NQQMJS2VfvEmm4-ZP4MFh5SInL5NL1HAijjDZ0e0C-nlYWs90VZgMRK4yf_trPQLDeXLYMtnu9L3424Xj_y2PRGo_oV4ZSXB-f4kXMv_zodkj51bAvzdqpqZ1Z4qmIWEyR3ntQ9PeQFm9Q", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105627888562605094394\">Lucky Mangkey</a>"] }
        ],
        summary: "마나도에서 다양한 브랜드와 상점을 만날 수 있는 현대적인 쇼핑몰입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 의류 및 잡화 브랜드 입점", "쾌적한 쇼핑 환경"],
        tips: ["쇼핑 후 몰 내 푸드코트 이용을 추천합니다"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=585939159576660271", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%ED%8F%AC+%ED%94%8C%EB%9D%BC%EC%9E%90+%EC%B9%B4%EC%9D%B4%EB%9D%BC%EA%B8%B0+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "마나도 로컬 기념품샵": {
        photos: ["/images/manado/info/shopping/souvenir-shop-manado-north-sulawesi.jpg"],
        placeId: "ChIJ-d0bkDh1hzIRIDEFXCyXCLw",
        placePhotos: [
            { photoReference: "AWCwydgLtMrYGvV5vAloz1E1CQPywTyfpH7iTP2JOZX0SoRLjevwCajYNVRKVX-0zhZ_0yJ1PYou_Ue89qj_6k24ar4VdyZJOmiTIoqyGFI5oPf1_O6I31D5bX-aV52CdrK22dIstl6kW3j7ZXXrHN7-vNFFJgU1BMiWJ6swF6rqmqrBKI_7fI7TI7sQEIRGbA7MfDXZYICRnGZf9rjA-LPx6A_mJx9UuIRtiJJtQNXHFFoDN2BwTHP0_QhIucO6jkq3FDorAmf-iQ2HRryIJuQhihSwcxNQvJvisNC8BcSMPRsMCQDWCegCulsQcHopOYL67o23-OsDKbuFOuH2NNlEKlMutFHmPWF9q11Ka_M2AFMCXlBuGi41n0CUBOFSoP-9Kzh9A12LKg4GvvxfJndJASVjEWRu906IZ_X_Eo8Ok02YUH9P", width: 4800, height: 3599, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110880592348291998037\">Basuki Dwi Putranto</a>"] },
            { photoReference: "AWCwydgGf_3TSHuATHlYE-n_SSmB3j_Wn0yAGNXZpB4zVuCFy6kl-qKhSSoyp3_BVlTgpi4tm8jiOHzDL_weimOG8nw1-lvXbia4N_Ji2V2lg1C3F2KkPcd3K08Uzh41gYKxXGgzd2fqYiJHsfRbWHFlnWicqBjLM6jMCPnC3qbgA17x2-qlOjX6kkDRBh7NMUr3I3ldKPT-L9_Z-pZzCqGeQ1hUaQy9VfzdyMyuC-XxtipJqg1WeIu-_BGC59iF9Opqp1e6TuZRlmLsQv0MOWgU29xvbAz_Cwcm8wQ045Un-Mtsbn8-g6_e_BqQYRdVGq0aPjTpzgNmfh7VFgEFjxUwAeridFu-2zB4Dtvh-DfvnTbK9JVECLNY5SXCJJvdIqABGFz3fhxmC9HbIYaC1d0xh-aoVi9IRsoBKyFmukDRrquq9g", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107664467268119531433\">Armansyah</a>"] },
            { photoReference: "AWCwydg8Sw0ynQS4XvejWIssWX3ly-EkK6RrYXj_oOM9HhYCa5oT21U6xhCNzmSlVArP8Pb3z7eWjfVIByaoh_J-WlcSqxvxisGauEtpzvMBZgIU5THd0gQw6pwZLQV3-cX2n1iP1EgjfghpCP86MwUo_1_Hqj5nPtec97TkN1-RCXyABlRQo3_A0RqyEM67FFcoeBQFHtB-xp5dbOoxny38hDSyu03PaSHukNy8xxNeAlrJ3lpo_ViRal5cTNGGQWQy3bQYjebqliCBQmWlNHUTG0GgaIQCC5gLsQV9AgmT3a4-S-c-Qv_NV14f1K-vvjfPLzd1_Jol_7t74Fj91EprN2-nbAFgSfqKC1Xejl3yc95whnmr_9s0QB30wXKdUQedSxRq5MG8VKGSSQTRX1hTU8FU1bZInURwBGvD9s-HtyWRtS7tx59vKk2PbhvRcQ", width: 2304, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107135069540751338404\">kartika sari</a>"] },
            { photoReference: "AWCwydhXAfqgNfhu3T0Ye5TXCXjmSh1zF6GQvT4GYPJ6Ccmc28dJWUqVSLGB6IQhRlivBADLnF0sthlPt0eOo2rRR3Pag_kiOIdaixSc-fZvrAYMAHZ7_RSjvZIIZ9aNHeusYIaAqzEFoGdPdHKCww0sBIgojAW98k4v7S9qK05QwPnEwaKyS7L921532ZSyOmiqHtLJqLOyZizBlDuosP2C81x1HrBSZRPjBcbiz03TknAFPBwDR4Jndce-lbKhiphYp1Ee1mqmePIqt33rdI2HvrXf8a5JDejgeanuMLbL4cyoTbhkcwSmP-XfsPQ_zhond6tgNpmHjACQtjCaK33rU8APIkZOe0NR7OCuRlXG5vItlv03W5CtRGCZ6W4_u6Vo6biojZ8ylB0BdTcgR1iuid_o8a-RuHBJiK6H1LqkvWI", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108309475808465011742\">Sugeng Ramina Putra</a>"] },
            { photoReference: "AWCwydg2Oj2LrTv_YtFBgHMAjolk-Vbet04lwjpElvwpGi4Y5kxCeMwze-HbxRHY3EaatWtA_jBSphtg5qkM4g79fjQOj_gyYaQdRs6o92E_gLJ5g6wLBR9ya78XGo7VNwid4QVFT9MJwNixvTVSSVO2KfNhl5QQpYKqT9eNm3LM-9Hm4MQfHPXOOawALatCa5agPfhKqgr4_RN0oPh3V0Uw_8mN0LD_LoffevK7HNixCbgVGGXHXVW0ie6N2xhM0QOb3pIpBVxrAMEIo7MzWFSKhMOqpMYlFDEVIII4Qx2ztRawMT06tMMWvmCnBRpWnspdG0hjq8rFskW9l8ClglqIeLPz7vLtx-E7cqHOkne1WTAVJURMBp-cSx3W5ybnIgs7g-82tNZiIKkVlYbVjTSlSPlCwFNb35CipZkVeTPIR1exyhCncjSQjwVfEZ6wGQ", width: 3280, height: 2464, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114730725437970626312\">Robert Siby</a>"] }
        ],
        summary: "마나도의 특산물과 맛있는 클라퍼타르트를 구매할 수 있는 유명한 기념품 전문점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["현지 특산품 쇼핑 가능", "유명한 클라퍼타르트 디저트 판매"],
        tips: ["신선한 클라퍼타르트는 방문 즉시 구매하는 것이 좋습니다"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/kawanuapaniki", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7283093549723741407", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%82%98%EB%8F%84+%EB%A1%9C%EC%BB%AC+%EA%B8%B0%EB%85%90%ED%92%88%EC%83%B5+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "폴로 스토어 마나도 타운스퀘어": {
        photos: ["/images/manado/info/shopping/polo-store-manado-town-square.jpg"],
        placeId: "ChIJRxhkbh11hzIReNhsb0CVkGQ",
        placePhotos: [
            { photoReference: "AWCwydj6n0i073v8WVMesCJ0KyMlWLF-d-DICRyJV-dC-lM_4qy8rNKNU605VXt_ncUVqno7ougBE_Z9UtanO5TW_d12LBWrGjDLVjtEj2zhBs1epbInnze3A95IfUBOGXN0KnVA-0WVIH_hfPvneFa5i-OFZMYr0rj3iWrajAoQXRtVkdoAeMH65HXNJqtJqA2rEI86DLXW7nKGS6HOW9KS01Fo8EJTW7TwZmPUrIKWzA3hy9RWOVwdU3tZ6CPmNM-M91aq18xxzcPAex8TF0ESNAx-DULfWXm_4XyFdMEGe2K8N_YkgqrIFy1c0C2NR1BY5ZXmeOcUBPXvw2RjnRVblGo6-4XifrLihk-rxMR_GRy4QqSmmmgiy_xhwrn7ouXol7eoRac0j5nbAxZiOUD3Qzh5pgzuK0VgEvuPPZMB0eA", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116122645676714980995\">Handry Tumurang</a>"] },
            { photoReference: "AWCwydg2jt5zSQDQrn95YskRH2fG1VXeU6lZeMMfn_AgfcgvZfBLFoIQCN52EpePQzyBJ4YRwLtbyNMJ-25-Wu03m0l7Z8qZK3KpIcGO3Crl7VqDt3CXxKD5m5Wpi9FFn_KW6qBdZHX-Q_VdrYvfjGvGrNAOfa8DpbVNy-2G6ry1AtzXJtuRu9FRFkR2l_MmT3cBkQxBWbh4zCVe8lGFzwW65d4fNwpQlALc569DCyD_iSQzLzdx0ABe3oDavEhiOHGy3X8rz_qKugsHpeb7II_dQARpACZOugr9tly7zV0hXb9sVisexMKrYve5n7d4YmGK8dgkllwL-JeHyU5MeLPTlqpSRR41JVOBOCuMg0YEj5qre7bvWcNnmSnWbDEOnrz-vcbRX6Xu-Xo5Rsb6YTh0wWGN28FPWgbSytgeR9N-Ji7rIytC", width: 2322, height: 4128, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110091134924949239256\">Wara Hwang</a>"] },
            { photoReference: "AWCwydiVmfd4yctqDYkNjU_p7fzbsFaILlb9d_wpq_A2Pk4_kWF8gfg_UWNZpjMai7TqZx5N6DK6vTmlcT7DzatUbeUNbIl1-qK-kqi1hNG4YAe5DzV-i5Vj3qeBeGE9-PBJMyZAo0rtvKCVeW5c97GV_VqYLb5At4yx927OZ28ktO-CpLlHiu80Ru9DqukIs6gAMiDNmaO_QjWkDSQ-9cEHG90Aei-_qFPiQsHHPDPvkRgmqHDvH9ggaRitJnmNc5aQ4OaGA2XuFs_Z1VkTxZYMdt9D8b8bJuLLwxaM_Ut7sU7m2UjwapVoSEW7F8mX8FsymjKN-p-UTMDgDx8NRWc0LMYopoFBFwgqIlMZWS5cfo-v2n1EK0DUYmnZfxxG3mHB74NKn8qywuuP5y4-M1uRp5gxlG2Lk-U0AzBeXbglCXRuEZQ", width: 1383, height: 1729, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110091134924949239256\">Wara Hwang</a>"] },
            { photoReference: "AWCwydiCtueDLbo6ElGxKmraOuTxfF5reJ5nY-LiFSaZONoLaAr7v6MgsUy6b3XN0fSTDi7qWD1_Zk8pE__5CfQlvtXAAQxJReCsX-quHi_FUaogWyCb4i4Fs--A-avVFg57ekjpxVheguUcWDhX6TO0fj9vWkec64Tu7S76Ar1zLnlMAOLHIz9yjrZx_79DrQvTtsWhZHH9OI3WAcdY12PEhC4Q715XxhHTJdP38CnTioiKn0MXq9wfI5xlZsLd8z6aMqZSocrTJ6_D8PPUYhMKRBEC963tOZ64xlVIlVkP5GgeTpdkNzENewEqFw5MyiMRw5iiSf55gkwx4HIsMkiaBMKsem-n73OQ1NirXdbs4wnxxh8P1S4Wh4I5cWaHlDjx_zYaV-TWHo5-1B7n1zkeXjlIbIeiwF-ZvpTh6Y53XZ8s1ZE", width: 2322, height: 4128, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110091134924949239256\">Wara Hwang</a>"] },
            { photoReference: "AWCwydjPFCDzP8_FlZ83-qFEsYXyj_Rzl4m986L6yO6u9lIJbzIJGU4OQCa_zwuHMLZ1KyesFb2UI46IL5eHZnwHU-4_gLb9TosyP-l1uCz_xR6Io4GSZA5r0d0c_LiJCKA1KzSo1Zd0wqObsxact8Z3J4YbTzhkWu5u76tabKbqee9w19xPhouDYZvIClEC6YU4-8XOsz7wxdbJbbQ6FiMn37NtYo5ta7nEKCkqMtRzRkEjfx0a_cRtSZZRhBqMuOluWnxmFAN8diRHchZ01Cjzi3vnZzFiR9mrQNwt498Vo3W18j3xIkATcd0XPUt3ZvCkbYLN5oY_p1UcenzlIeHldqEfWNB7b7Duirz3t-9xGzONjBuc8emBYQl5f18qx8Cp-ygNSQqdmxtqQtSv4rZrMzKqQgdkbGFRF0bTmmtYb6dlKQ", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110673474837341772858\">Dharmadi D</a>"] }
        ],
        summary: "마나도 타운스퀘어 내에 위치한 폴로 브랜드 전문 매장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["폴로 브랜드 제품 취급", "쇼핑몰 내 편리한 접근성"],
        tips: ["쇼핑몰 주차장을 이용하면 편리합니다"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13115989376812888519", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%B4%EB%A1%9C+%EC%8A%A4%ED%86%A0%EC%96%B4+%EB%A7%88%EB%82%98%EB%8F%84+%ED%83%80%EC%9A%B4%EC%8A%A4%ED%80%98%EC%96%B4+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "하이퍼마트 마나도 타운스퀘어": {
        photos: ["/images/manado/info/shopping/hypermart-manado-town-square.jpg"],
        placeId: "ChIJT3yKdR11hzIRWkyzVp8zv4g",
        placePhotos: [
            { photoReference: "AWCwydhENL72smXX_UKDKH2bhmfQlztb3seUwWvqTTrtgW_nX8fvBIxoWrsEJavACnkw9f3gdx9sP6hpN4WaOKrwMdRx7f4ZjTTthvrVqGR5kt5mCYov0y1OfQWl7VXHZ8zWj_lJQvxXI-7GowxFwqdEn6Mbf8YNh2Pqq9_rV6LZqUV3inxMH8C4Nj0it8hafxDT1NoJTf2hwPcKw8zBX_-BojUpGI_qoKW_gNgFoJlVYMlc9tsrPvQS1htghG0x5S5zFuEd39r0qdLgEGo98-kT3Ul-uHspIXUYI-IcQ3FOs9kceirhEc9M5G2TUfGKjSCYBWZ2yKtt52RCCKWroTl2npUK0CVLovp8tbaXd5RrHqkeXe_SVbki0G8iNC31L8gRj37UvL_7QXjFh-iiZL3AFFEcvWEKKD0X_jm2A0crbxo5EuC3", width: 732, height: 437, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115306249618731895104\">BAF Geotagging</a>"] },
            { photoReference: "AWCwydh3iDxzfYYkZxu3SsaQ9M2Bhy77sC9obj97Nedjjqlc-DGRvWCs-Xq8tnjACDeiE0In0agWufPdHt165XYbmL0MyTFEMmzUxZMjzgFhdp9b0aMoYjbF5m5jTnZANXsUFV4Eb0t3Kyi45Slj2UhDsLpj5ZeqIaStoUQbYG_SqRvSa1zomA2EX42SXDHde4eMLSOvAtuhspNLUUjVfM8ABfdeiMfZmPGEKZqQSy4HPu8jqSGm1Mw-SWoH89tNLmPNKdVSohI6YExCt3ZYTyad5QrO_0Cx_ICT-lTL45BPB4XRzBV_1LYvgCYIO8DgGtqmHvv3qdt22XZ89fyQ_U0qXrKvrh0_v1mmdYO8NCaVEDXu-Q_-u1HB0nwdGBKzlKJxSSwlVgKODdkHWefqdZZ8FGd4qi0biYSzj77NxoWz4R_uhsQ", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114308421782016978136\">choirul roziqin</a>"] },
            { photoReference: "AWCwydhH8kJZzHeJN3iS1hOAEt9KJpGVB9A1dO_xkdQDqRHjcXO3OZtVsKERfqqSGv420vP1nQYqYtAxzuHZtCwcHlqPar0zTHuAg4kL1BX4PnkR-6qHEC90gyjhUBvyGmFhaplD2ouc6dELgTloa_CLO8-FX9alG0DOn7EBlMGDHHUlCQBkcazxdfEC1JCWHNNQ3AbQ50gZaTsij2IYw5B3LUFffps-lGcL5ZT5GY40QivxS0LI1NbvrAIIN8KwBTBgKA5NRzmA5c4LCabtvSEN361nDuJUnXLWOxdcx3TjL4Xgi3xH0_Seimtp4LE2btkvltSV56i12NM_5C8Cwm1poFxyUyZtrUZpBrDPjemy7poZ1U1aWgshoq9-h6TBnvTWKPpt58WQcplSeRwH0g8hEYYUzaXm2VaTkS3p6dd9IuyabqP9", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109421079521787401292\">Rido18</a>"] },
            { photoReference: "AWCwydiTiMIw98kNPyxu_rNhrdxMyjQ-XvV3gFChOGNOa91HGg9ZfUMcZvwBNEG6jp6OE4fR8aEDfTh-FphigdswTWhth3R-SNTS58iIylBvsexY-LvoUpu6DAsL12a4OffOL0OESM9FSrsCPUpPXvu76BQh7giEpzjXu24TVZRLFWMqf3BHn5_M3OM59FQ8_9XVoHSu6dTY4c2eOoZUnHyjcJYh_6k_MOInpneJzd7hVrcxlI6-PDtQvlryJJKp_02ZFxRo4641YiJmLfBa0R9Ww3t8VYEZLWhz-GV3NaYnXMc0oyFTqljQydS10yj1fl1w-rU68gYIZxM68SGEvVjZVYPBuw1Xd6IMGd1B-8yD_4yrKVkSdMmmtvILFmjo_K9iMlUX_2MTWMaSPaQUq9-h6ndIIGtfGWqQNAYVid--40AdXFXo", width: 3120, height: 4160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107359402033139845057\">Filipus Koessoehardiman</a>"] },
            { photoReference: "AWCwydgdUZ--yowxHi2RjN9HOz3zmvAFNfcTpOzN8gkS85FTNk3P_hE6njMn0t2vBK7br9IoZmX5fUrfqOv7d4UxBOGvRaPvTzcz94J6Ck3_twb29s7OigJ_erBQNqZieiJjz8eH5nOJoTLjPabR3_jUNdB7OF3nBsvJo6mBf9bUgNloozerZ6yz1Gqw0btjVQAU5MYzAnLViSQrV450caXZ6ktjNRCgGq1sKzF2mkTdXLOsH-HNkwuUyxPUjvzKBqZV1gpXusbyzyKX5Kaa3cemt7jfgcjGR2LNE53oOwUdHmDd0mfrYqUmQJeA7lgLERdWVm5zFMT4MVD1rcduJDobTkxxfMHgng3RX8qaXYLHi7I8cwNiQ1DK8BzJFM6CJD0oPFEeOz37tSrNCA85OmyQRwEwdZwsJKViU5RxpXt31wIfLQ", width: 4160, height: 2340, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112827746896909589984\">William Theo</a>"] }
        ],
        summary: "다양한 생필품과 식료품을 구매할 수 있는 대형 마트입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 품목의 대형 마트", "높은 고객 만족도"],
        tips: ["쇼핑 전 할인 품목을 확인하세요"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6359878888017450532", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%9D%B4%ED%8D%BC%EB%A7%88%ED%8A%B8+%EB%A7%88%EB%82%98%EB%8F%84+%ED%83%80%EC%9A%B4%EC%8A%A4%ED%80%98%EC%96%B4+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "인도마렛 마나도": {
        photos: ["/images/manado/info/shopping/indomaret-manado.jpg"],
        placeId: "ChIJJWrK-Rt1hzIRGGCGViUG8M8",
        placePhotos: [
            { photoReference: "AWCwydhxrnJueZqrJ_r8wD5JxevJ1TeXdOggfjbAIGSx6JxkekKGrcoG834sxtAA1kLWmtCMamdTft92tHd24qA54GV7ZqXPyeRKpECJ2PkCdLJ_R8Gz0XxZwstclqPf7ja1MgV5ob9CWI0tKGzZuwgTSomjMM5eQIj61r9vYnDF3Ea6QvRpQfxmscdYuM-LKDGKpfBpwglhsqKNRI0uBY-iInmSkmmDMpNhdwi4VLl2he8JBgJgFRpSv27sVcl_pAunmki3rDf3K9G6kGVl3Ki_uVct05IOTYHlV1CHISvwAuVuVP0Zbyk54QYkXShfTQfekKDrCtnWo9qUCtnWx3amjWb6uD09LlN3x3EGaF030gn2XfIxRafeb2yt5kAgcl1JxWtXKiVhKtDsb7t8i0s9mo0JyabVl0OmqfvFRrhVtswRzQ", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101215533760815230863\">Erry D.M</a>"] },
            { photoReference: "AWCwydiF33BMRST3iaNEgv8POMhhX34bz8tmeBewuxnEBRPo_qLEUT6y-IXRKWJPHGXuHnUkq_0h3jWN-LSuD9HT2eBAPuhaQCWCQID-ldV-rKl_Q58cZ9MPeAYiYA1m4usFBlrEV33lfdxH6vRSpCrV65v8K4l9x9swLUnQNbbymJKYc_QO8eKyDC_ip646oinphYSJZjyetR3h_Oymgb2r3ok76xfTFyLoQ174tjIrf5P_3YK9xTKF58QNZ8AlhEqN-ajEPK5_gOizOz5azH_AuvTUZtH356Qd16aNeJ03dltRsn86K_zKY6IZtKhQ2nOw08_EoS33EvHhdbCV3Y-OqxU_7mcKFixm7UBk4OQzoeLCH0v54ThWWZaShBAmIWs29F_1phhB_zHqIQrVgkp6Q4pVKV3Bjaf82WjDHEHD1Gwv0A", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112071401515239612643\">Agus Pablo</a>"] },
            { photoReference: "AWCwydgvTylAHoULE2050-NW2W5eKysqkSi6NZ17Ob1LYtM6G2ZjBgJoE8_yeBoe9nJhawo5GYh12ymLs2I0D-ivv6h0uQv16H5VBU9GEv5ehNfBc7wUe_qIaTN2UoqUddNHw_efZi4a7qQvDHtov9fpA9tiuXTg2NXEk-a_BXQPjAsJinXWmyw4Uf9SvH3E8MW3_SB9-DG2njMokr_HiruAxv9moUdx0xPn2rvaa86Pk42i9xs7R4Uww_Zw9GkEvPJVRuejARAag2CdPPUyr57PR0MRpe9t2w4nQz5NUyiy9Hme019Q1uU44EBJ3cm6RwvkRdn2gmiYoPd_JMMdeek_gkahSdEo51T3REZWndSLjv_zXnAGBv4tf4tyVC8tgUO1k2iWbnG4ufSRhqo4qPNEyrlkvBpgPUIPJHtGWztSnXxqxw", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101215533760815230863\">Erry D.M</a>"] },
            { photoReference: "AWCwydhtyeiQPFxAEcdt-7wAmDRWrtP8-t6rKGRBuvshTmyfEJEpkpU4RztNdKBhPEMezjrWJyLPQllV6Z8B_ZR3vHkGv8ZIC4BHGjPRzdz0MycYr4DCwuYgWi2uUdN6d9PheVjKhy8WduzlsiB2i1qx75jk1S250OMmKjW-VDtGlehp-XsS2W4r_yTQRLzF2P4DCeJRDdo0yBQdNByYi-KS-g7xh9RMwhKu78nXJwSU0qZ4tqXosdy6cf8mqaLo4ltuTd0oKSdefmrXb91WOrV07q1WdfDJAteCeWMQ2Wv2zPoI8ioSSAdoX9klaqR61gsF_BbX-4QvsJtQAtieHE6_Pz3_Ewll2d1MjnMF2fjoInioIcRzQdgOBTeh5ogovMkYoQf_UVGcojvbKfEOr4mQtprS0VSCNjxyQnDMLBCBncwkacsTpTtvvXrvCMjlQ0OV", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109818431918163140329\">Kakang Fashion</a>"] },
            { photoReference: "AWCwydjUJt3nh6jbSrr8Gw0SBHUJVi-ZnI6JGa6qgTAjxFNMlq7zz_ThJerlixZgY4m8Dk9rTxoSiRO1gv64ZJId1psZC-Sd20CzCQH3boiTNLPQVrqr8YolT8mvI4OnIBFqwzuow24HvcJ8q_oHpcw_w6XiYC2wyBgn0WIKcFvBWiBwPBJVgUMX6Ev98W-uOdaHtU2HGwCXD5eX4Mmq5gOdek3lkI1gKw4H-Ca4hJi7UrZb_mvOPH3Rm1nizlrW5qVxsjX64_hqaisdMM6sS2T7NntmzW033VGoDzIzIqSsATt9TcMZMZzxZzXNptxO_DYiWYMmM2TEYYBQt3w0V28yqAtyf0tIumyqs2TTxk0gNhqmEw9D3ch886aQV_1j_qp-vk0MulAJFEDci0CJWS6UHME_vfQE4cYHtOAGlTr2BfcV5R64", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101215533760815230863\">Erry D.M</a>"] }
        ],
        summary: "마나도 지역에서 편리하게 이용할 수 있는 현지 편의점입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 스낵과 음료 구비", "현지 식료품 구매 가능"],
        tips: ["여행 중 간단한 간식이나 생수를 구매하기 좋습니다"],
        taxRefund: { available: false, note: "시장·소형 상점은 택스 리펀드보다 현장 가격 확인이 중요" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장별 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6223222446191775557", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B8%EB%8F%84%EB%A7%88%EB%A0%9B+%EB%A7%88%EB%82%98%EB%8F%84+%EB%A7%88%EB%82%98%EB%8F%84+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
};

export default info;
