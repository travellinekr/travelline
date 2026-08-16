import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "다이마루 삿포로": {
        photos: ["/images/sapporo/info/shopping/daimaru-sapporo.jpg"],
        placeId: "ChIJMZf131MpC18RQsBQf7NM92s",
        placePhotos: [
            { photoReference: "AWCwydi7Vbd09ntzEHfz5Qd0IWsKawKE-E-cuktCnwjl7NF3GWZD-DO2XCUXM9pCb5J-Et-HgBQYwtL_3sykNd3y4jB6rBKn34pfdE-U48THSHDqOOINzBIwoDIuM4kjPlVU18KGoYq-oJmveZPQ0BGu02pNfXKFfwkrsWdD8W0LhHSI2anBAOGIiVOo3AkxDAqYoKRSgNd5FX9Ip8TG-SJ964_jUnQ33wT6_-AkWnDc7Z_byPM4sSCufSbgdpk09rIy6-hgwJkCZdAaSQn2AarA6D_zjLpdYf-Uv8_5MDt3AH2hMWtVu_DrTZ3_hJx66_6lLot3C9vgpYcsEVlElxZEmXYJNfVTpR6su7NEY8EuwzckNSNoakqGqUoWRZYnTth5W0dr6YCSktB7NmnUTLhoUypFKcQVnfM1LiRkXk8c4dr81NGrXakd8-NO1z20Ug", width: 1024, height: 800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108749016504955088649\">大丸札幌店</a>"] },
            { photoReference: "AWCwydgrAnyHeYYQrzlCDWNuqPQJxenEg3f9XPG-u9Kcsa_bwPmNB1D0ojkKzse9-9quwtUxH226PXu8mPhwLu-Npx6TdLvANZKU1yGK0P6X_jusneKkL1G6kWCZiPf0RBR7js4i-I2xAXiCvBzPRu__hdgaX-LMiYGGsXbKzsuXIyPkfHLa8UBGGeETmai3BuNPxV3T-g6dF3RefXR3pLstwbRKZg8-HWurp1NFvj-BHba76jpnF-kxk5qRnlpIR5sv2qc7lnSOw5MSnNGTUKTZFQdFB3Jy3HblbvpcvvxvNOx4fSJZo9BCkP2oDLn6QwEuVbpK-51knnjyQTO6P257jDjjFdsMTuzmhhpy-vQOr-AgW82kIZdF6OlnXhxFaQMPCJtFG5xgu_Kzgd_PizV24GqNCwSzegQCWvDQ9m4sNxWIHztE", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110155196447132494428\">真駒内バルク</a>"] },
            { photoReference: "AWCwydi-x3YO1yCGMs4tWCUCnYpteXYgQKWvAyvUYMSvewGqKKm_ZhtKUs4Fk0hOsV_BCls4OCRITlK0qWODnzHEjp4IjEmZxSsAeT0Sw_E23e2cP2tqYqDQ6UlQPt0A_u-zd8sdd_U-XmckjvVcXaqhE9urqe2kbHnVVLxbkYqqCVe8whKC00O9aIx0SKgbcnmejRzWgfwB7jcN5Yk02V5kVE3T4WRqeKiYEeGqQeQv4ypcqlbC6hbqPVC0qo47V_S5W9ymr_yt1muQXfkSsmcrcYKdhZJfIuCxTbCGtrmbGAZJvA22f_T2nd8AwTX6uqcICXiS9zW4x4eX-a4foGox0UtnAIY_apNvMLIa8rv44spBolbbCX5zaXdmfDa2DMp3qUqaHubeExwDgPj1KO7juCu6tIU1PaG99ehIVJBPH5ZvK2HB", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101230982256128037867\">Mi Na</a>"] },
            { photoReference: "AWCwydg6E497Wlt2ccpHFPOVUTTMHZ3Ik1n0kht0o7WpKmP5PFh9gK3-UwdxE7BpkJQk3RnzziFMqYt3oDvh1ucQvqLRzVVLycLhtCHC3N3PkNnzRywX1JXahnJP8Rb9T_w0MWEOcLULDYySjmWBKEFyXpegOsTtC0zBO7ovb8eYdk014tIClJrc3b3LRmDaTZSrFYj-ujxnBgYrOTynbkEPoCLWX7G-PNMgfgmUjaZyBiHOcJyS1jukDisy8i5G7YZW9lW05W68WubUSpZV2tdgOn9AQv_evb119QVDSD8GZ4raUge9z80uHOtBWu1A3yNzqUrCjgfRUZ6TC0SWOqzeHpi3KCy71Z4RlLm2oZ0AmWgyRRhdH5jnjTnxnwHKKQnEG2jLGzI-7fgp22pDcdO2g8kObxWvxdYY1Co27oB7LQ5CGroZ", width: 3648, height: 2432, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110131518233259372157\">田中ひろし</a>"] },
            { photoReference: "AWCwydhLk-usQAYolM9ckar8td97JcmhfQECNMEuOr4rh3eC0eCEB_osHcxllKmHWlPEsaROIhWraMilfeU9TI22Q8_OhBWfy30taRn_AXk438CAli3afun3uSVhwafLWhPg_xfOB5n5IpfCY0EHZ6z65o6CRAHrriK6O5OaaXOz1zcpcUnZWIDw1CMPP1PWStQwnDw2yJG5mSFvAwny5vYPm2j6debDlNHyGoYPV2HA0xAZya8ZcS1evahxYbVB4ABuxB3zhQNHyI527igskIZ4FCr_jJX2DFnPUDo5fWJxT_X5RaYroZW7SL0LygB_lAZzxQBplAL_BQ07dHv9Vv8Sn1ol3zRzZnXoz_j-Ljs5nvwgo1Rx3scgXsVqbbzfU1bm6r3ZNTP88L2T0V3KZ1rYtcf3yoz1TLKuUTNwBeAUoa4qWg", width: 3248, height: 2432, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110131518233259372157\">田中ひろし</a>"] }
        ],
        summary: "명품 쇼핑부터 맛있는 디저트까지 한 번에 해결할 수 있는 백화점",
        updatedAt: "2026-07-13",
        highlights: ["다양한 명품 브랜드 입점", "퀄리티 높은 프리미엄 식품관", "선물용 디저트 쇼핑 최적"],
        tips: ["식품관 인기 디저트는 일찍 품절될 수 있으니 서두르세요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.daimaru.co.jp/sapporo/?utm_source=google_map&utm_medium=social&utm_campaign=info&utm_content=07", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7779771215124676674", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9D%B4%EB%A7%88%EB%A3%A8+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 스텔라 플레이스": {
        photos: ["/images/sapporo/info/shopping/sapporo-stellar-place.jpg"],
        placeId: "ChIJa_KH3HQpC18RuO2-tNVySg0",
        placePhotos: [
            { photoReference: "AWCwydhUTIA0CSNmRNQebUiSduH4h12tFnXbTtBQWnZMNXvMk2a9SxfqS7jsDGHN_q9r5KgX501wYZdeErUufI7MUD62wUBL2yOQlthJXiAZDbehFHqRd-vGbKHpZGA4zznm20neyzkwMKWrN1vGA0u7gZBT6OQxEhKuKST88PYQ50TfruziCFrBhRyEQ7w4c3EBVy3DumeLlCP_AKR38N9Grc7fyke4QPGlytUXeKUBBbVdubuNuuz0R3FewEHP8rZWAsDQsds-fW3iRiIVAb0mgiTZhSXvgFPsk91VVYtMtFnsl4kK7MlfaQlKxY74qrZLPhdk-6mfLRwcBPIXtx9Sdt4Hc4_CzRDsJt88xwHmrGAcSySHkwcznYTGSI0CWRz2tray1tsOulvFfQiXgbVBfT42HVmOcycBm8HnLEO0w6X6Smq8", width: 3000, height: 1955, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101613009396753261907\">ALFRED PHOTO FOUNDATION</a>"] },
            { photoReference: "AWCwydg400dkLth7JsyxG9prL2c1iaisLlCBXWpX9a1DdT0grWa169unQumEcL3jgmYt8tNKOFcGtI1p80mAQOsJfBNX6_Acnn5Si_GFq5D8MsmRXPs-4_1XzrWNozVvkEBHJTUjy4XyX-SOApsMwyd1ShgstNVNvtaK1UzBv2EHAffuFJNH9ZrNbYQ7B16BJwQVMFwZGrF1ZZ2gA8EtSbGIPNfWT2TQJWnK-T2rvNSPbfrmSbhcG_kHHvHbFy1prcvG-fWWhWQy2vZHohjSdtf3aedBoU2_0kBC24MRFZqnZVBC-ckVNgFFYbZoKMRYKVAgjb1ouMOFnXkgoHGozZxIxtuOvx6KrNCJeYip_ktRCWGLAyEHyt2M1uW3BetLJusmpWnz7mw2cQXTLAnJSLtCItX9CmRctPYsc0VgWIGV3R0gYh8", width: 1478, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110843976269450703231\">TEDDY JANG</a>"] },
            { photoReference: "AWCwydjNLXxCfoDJUOcL6efACsQEY3ctzfDfYt8DI8YsFYibNSrYfWiC83lVtX3Px8KR7J7YKQPwcxASie1pnBoadiPW3LVw8_BeFgvS61zB2xTWURa7Y21xME1s2gknt-4I_Y0EzfiQjr8dxosyVMzjjqy8aBC7M8Ul4NLCRLIZkO5Nq3DLTRwvAf3RSjEtffIyvkKGLPPLx4NyT28Xu-7D9DuQLqzos-Zai_iZfacicr5Dfl2qPqHVSudEimSCPB84G7GGc9quCQCX1tiCXGsGn9ZVlCJ_STfuEU7ux71-AMU9kqjPfz7xt301-Bz7RL2o9zwSNqjqQofu9kOuAQp88nMFZXxSd-vjbCebk-zE6tmtopWvcHLH5JRWK9CJHj3qq7ThQHFevsiyS3Wh6ZNTDB7HPU5lez3lhtRgJA", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110315410870609880683\">Claire Bear</a>"] },
            { photoReference: "AWCwydiOQc6nOsMyWu5-1lkIHiaiI9OBMEUYB2Eyu9TCipOIto2ouQtSV7bpIc4q_YfxXsfLXUmF-9fqm7DlMfcadVW2XEp3fY1zGX8gasRAqIbZCwacsiqYxTjB3L-jvwwXebG4aNs3ZcfIWBWQruSYXcPsSiQvicwO466JB1b4SPJQyUB8aTfms-XiTTPv5vtOqBdPgdAVW1zSNBZfpDjUroyk9tfjmPBJdQT-qsU9dCL3HQKEAN9aTI6D-xd9XeMifCIc3kuulXiKwllAt4klsCMemqx9u5Dt-lAvzXBqd1Vd5zYdSHggWmpRGy1ZT9rHMTUbVwUEhs75lSq-SSqj0RcVLHkzVi1Okmrl-B3XaI43p9HB79nMJzoYva9IGHVmSV_z20TlRQJ04mgzoOYbOp0El6K8WCXkQwiKYwmHINhHJA", width: 2160, height: 3840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114494034550166187438\">もとよし</a>"] },
            { photoReference: "AWCwydguvXY4Rdhf8AMo4US28mkLbmhQ_if096ABAYvsCne-A9beCai7veSo4QEr-J5vqthjgi9dOX7Ssho-zwg1WTNkwa9ddLe9z7oalf1FTgA42Net6Ej5fm1F1J1YfZzst6ucJY9LSshqFs8dvSDUCU4fshQxwRsb7IzGd_wjdVLAlk8Hsxy2xn1lEhzAjSWLXA3sJIcJJgJDBcwayaZF7O3WRu6MShbdSEoSwpoxVC2pR5M4X9s_CcwOzT4IYPweibOSzdFcnzCgvvCjZslSYGrnYaJkbHFjnoDwTQgS0WABy3snRiJXbrR_dD1muWcKYDFreEjjX0W4dv86jRCeTHBvFlXwixMIFrAXOlk5AN6tkChKBM9bBMD2HOx2I6eutyUbPrQ_UbeOUuPPWre7IMNB4DKmdFCXrRYCWm_16LvsOYR3oOfbx3T0vWXdbo5w", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114209614057580290740\">Edward Ngoo</a>"] }
        ],
        summary: "트렌디한 패션 브랜드와 맛집이 모여 있는 JR 타워 내 쇼핑몰",
        updatedAt: "2026-07-13",
        highlights: ["최신 유행 패션 아이템", "다양한 테마의 식당가", "JR 타워와 바로 연결된 편리함"],
        tips: ["쇼핑 후 JR 타워 전망대에서 삿포로 전경을 구경해 보세요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.stellarplace.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=957704132955663800", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%8A%A4%ED%85%94%EB%9D%BC+%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "에스타 삿포로": {
        photos: ["/images/sapporo/info/shopping/esta-sapporo.jpg"],
        placeId: "ChIJA_nD0nQpC18RpUdK3Yyx4qU",
        placePhotos: [
            { photoReference: "AWCwydjjLNZPdfQQfW2lxZVNV50JXoXqkvG-IZk42qUHP9HhISt2hCPiXVFK4yoQhotaqekvbT6xdFtttHhG7ZjaJQa_MfKe997bJTmgnWcCfrJAYehKSNCVZfeQ6mTXAPx64QH1wwYKgoXcuda6nzmrMkHYRKNygZ2ijPFOvA7ePY4UAEr5ZvGRyaWhpAupLZefqHfcYmFiq6wX15MDpPkJyMgd0lGmiGFlM6s5QSz0KKCvHhaVQ5yXRUC8_Da-lNTnj1585cAjkKg58MLBL58nFl03zmQpboV5uq31v-jqWIvif92XFc36sNSCBFoEklMxx_jZReBLuo-iHFq97MkIy3eBwNjbEnq6BF_qYyWBK4o-13KscYxmAlSIjCl7woTHvhcuxl5fT4Sgd3pjUlNDDi4W7emnNy6pTYigYIol7BRRUw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111027101041687434153\">ニーミ</a>"] },
            { photoReference: "AWCwydiY45t3xK3petKC4MoCGaGGTGu8inGcnLBLfW2N87b_mhDmdb_NGvzk-0rfiKN2VXyn7KSe0wp-c2RvD7u_RCjiqMaNnU7SLmCLoZYcSMvuUmvIdkxesDdCi-IJTXYcaN3yHCHCExy-G7oW8WM_k4KhQCb4TMo2pn6z5-d7H9IEkdDAIO0z4N8RksglyDMmx3TLBuDLcfdWvywOEd_CkpiQR2Gaw0N7E_JK-RjcM3Blww1P1Sr0wREY4n6Si0IXcLuVKVOuXLqP15ie76ApEc5uf3ZL19nvo7GjEgnOsYfDHvfWElsX4D4AoRqGg11l4jvCDItAjSbT6PootHhSF4S1Qj5C827qem87Ihg2q8v2mTIGxkwijFIsrFXhwcqX0uMzWnj2q00_9mAO7YvbgyuNM-kBqInAWLt8hS0hAqfHu5zu", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118190860134222267496\">ロッチNS</a>"] },
            { photoReference: "AWCwydjM6Eq98-40WCBitxX2j1TDnGh-7XSRCO_5hKYNvtaxwhY9bku9S4eYXB-8WrBpPmALhHzNzJ-iU96zp-W7kEeykNVrWXMs8CB9cQyg2SIBA6frKuCx-vk87Ulpz1WMfejXTt5ijeeoEVjQI3YH9sR5VNG27vIzLX9Vk_m46lmxrY8hlG1zJmgwdBxG1HPNVk7t1Rl0-0NA-j1GYeAd0kphuhIFA1dDFLcqujwt09T4Xv2wMjClo6cB2tGlCcEhukUPhOXGkBBwqSVIBY9l0D9-kILxlRBEru8SZyRvVwXeiAUIY2_rzuvM-U-EGbccj-rna9FWTyyabbQheRK-c3_B243x_HlmQgaGFHsxt7ERUd5Co-N5Gp-ddHKxv-ZpRgXSrlJ9XjFfQ3ptBQttGFz5061RtxgYzv_bxWLKWnAivw", width: 4007, height: 2671, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112228717848982338439\">t s</a>"] },
            { photoReference: "AWCwydhbEJSAKRbpJVYroCeeA7wAwTRuZJWgBPY6092euPLnBmsXhtGPz8IJxvPe1Tg_hVcRDl9QnBKmhG4N5B3wkVTk285H3dWn1WdstJiN08cgATMdX94MSfFMs4JJGEfik3wFaCik0Xf5h2yL6PMXqiLgVnOcStClKeOCRW4gjbduPnK0f5JKoe3oQB-lKWBgFJL7UvmJOjrMoUTnh2LKHqmkPmw-Xq_mVrH94382UaVG_bcYytMhjuUXwdQJB4u_bS-D6Hiu52DA_86AoW7eUAGxv0YegkdG_YyywkkmslvURXN4qkrlnINkvSx79YNZf5_7UashEEGyHQwpKfUs8I8ML5H-SFuQOXxnrvHhHQL2liGa2nM9tpeNFv14uTIvU5ZH3l1KyhWule5M7wWSTLLMBXkNFXVGNx5EynaPZPTNyKzn", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101613009396753261907\">ALFRED PHOTO FOUNDATION</a>"] },
            { photoReference: "AWCwydj9sJ2auOSX0kAdBw3bkqlXeKquNaf9S2NM6r55GoQ2MMiY7fQRTrrUdTd8bWXqFa8JsC2TScxlMtgo1TkBvmKBPXExwN0opanUcJMyPy9k5BczZUO7yQT3jf1vFSWK9uFRhXXG6kNiUMlhoHYQpLV5yyHznPK1EGeD_OCQ1RhBBwo-a10wE6PtkSWJt9fknlvqlRaKEML7l3M1YjywPiOKCUXz5qq_nw5Mri7Qj3e3SW75i-P9FQ3kFxmx7ANkdqzwEkFN9-vsBlzmTKlh6QHyi3hlivDoXUo81oAQFm64zADYK1LYx64mLDLUd_MS-DHHeDtzndabK9LwqJyOKML0bzVY781Qu4TGi9QzX88vrcL_ZtoEJV182XNijOAWaFum2iNwFJjyORtEx6NFKoMGpWULG6ko33NVt2jr_NAQVs0m", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101812571941349671268\">許棋翔</a>"] }
        ],
        summary: "전자제품과 식당가가 모여 있어 역 이동 중에 들르기 좋은 쇼핑 스팟",
        updatedAt: "2026-07-13",
        highlights: ["다양한 전자제품 입점", "편리한 역 동선", "알찬 구성의 식당가"],
        tips: ["역 근처라 여행 일정 중 짧게 들러 쇼핑하기 매우 편리해요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.yoshidakaban.com/shopinfo/potr/050/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8084296686827662369", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EC%8A%A4%ED%83%80+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 팩토리": {
        photos: ["/images/sapporo/info/shopping/sapporo-factory.jpg"],
        placeId: "ChIJr19pU3cpC18RmPBxL9R03GY",
        placePhotos: [
            { photoReference: "AWCwydg3AUFYlL-bN8VCaT2XRVoA3DcsdRoM40PoVJaxC6RTTGMGHF3O8rnM7hfb7HsSQFU0oUZr2fzNXPEwO0sMYmg_NhhcHkI44uSFq4MxxueKRAIdRtAhQWH0nV16kNJd0QKLEHJIFhMXtVDHXqUcnd7aXNVBkfs9TjZp8QTynhjMyeBjBwGNKslP9pR_wJW_0R5F0NxlFwqRReUiAxU8tZN76yqPnxfTABdC4KXBtOM5R6KfmaIFIB68DTDzyqxwdYnx1p9omnhRedKTa3Q_vP_WLw92_Z8d-VYzEWh5DytUzTevGzuSVx9KL0LpCi6k1vYqeEq9qr93K3YbfhgteOa1vk2XzWvMvmQd4HhexH0uD-SFv7IkASHj3K-Bp_vI75xRMPzoJ2pzcFgUq8YuKSKkCCOtYlAlyYlAQrPRLue3Zg", width: 2592, height: 1944, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112155659887094749613\">ikkan ikkan</a>"] },
            { photoReference: "AWCwydgkc6FBG3CL7pnz9ImIuHSamIQIa1JJcTOZU7JHXczFXBZq5BXMsA7Fsulp5Nw6GN6v8659WAXSfQmG1zuvpZhPwNaPYjZq744MhPhAU6WnyPLj5_jkmu8tUkCtScOja1eV_seSHNVl5FJ1leFbAv8msmclhpOjKcM9Gxx55P5QLc1oOkIcqcmYzOx7LqSZ9wxydglSXCsGGGnikgBwNAw7CXxMm_2GlWRk0WD29W95GqUcQkNvq9i7PLwK6nv0NqJcZGCL1R_FTvZcSbixjRtC7iqTzI6Qpb9yjwQab4319q2U04V36MXI5EhU23V8eJu_LXEVjNALZVTewOHWIKjz_rfoBqWlbucgDhXWxtDkc9Yn__QRENSICUYiQ6P7XL4KsrrvkS3DLAx0qEAtkUSDiVNr92Db7f1mawTSCR-zwYsVENWm9kttwMwpTaGl", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104367673449245631221\">G C</a>"] },
            { photoReference: "AWCwydjI9bmElZXI29kh0zA03DoZ-WoJZmlj1CkqokxLCASloY2sGbz3Nm3W0FzTD5RHiOIjWC-lZqkj8hWyFdncboX3gIzbCwRSXLjZv-0SP7ywpYnLTOdJjRxx6Mp6JsG1tQHP27etVjIqrrbMKn_pBxyuPSKV1KoQ5Z1Dj36Hy7fVZaOlc4ZhvoUeKt04QmFw0yoKCUX9VBMy9Cn02Ew47LyBs1dJmTKy-CAfuPww_NkFDswCjVj8yfHEMTtdmM1_QlfGx0eX2e3h0Cxt1oRDqGChFYgT7u_SPMhMeIBV7hDusglKuWkw13b3MK9u2gvaQxdJuXlZ5U4_gPU_KOhJx1zE_EKMZQj6ItXD1XZMuafg_TrQkTtA88Yg3gwS9jwzWKBmYH7nIzEFWAmRzCU8pHq8RSLWDbLysntSNecUKtO_4g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108697698753926953799\">Ma SHI</a>"] },
            { photoReference: "AWCwydiq_CCAK0AvsWw0Tc3kJCaaxtnZC0-NFb7qQxGSjpvIAcH-c711-2T5chCfTaEe76aTjiuYEv7_ZjFbVldFmLab6CNbOkYqHoxTte_VLdQectNSshPWEt3zX7X4uPqaMt-HKjw20Sg0rE9M1tdkz1g4tilNepi0nqM5djNijIMrxamloa50jDbtUrKpOKfmPt_ub6EJZrHaAl4uoBBpRtc4E4qVRZQnQ_B5n96xc4cUjOXuNwp8EoTcKw3xcxV0c1J-c02cD4oAdcTqLcO_wCUh21ezUzC6fgdGcxTyent9o9zU0ICrvg65RDcXgzPLl-gAU-cEXFGPA5NQgBQsCA_NngOH4aMHpFg0-PFSxMEuKUHj0PZMma16hAoLhacGQ2P-V2kI0Ebvm1mSzIJkBRdcv_MlXSAwF68QmL_lXmv5h8p6", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107315667358177133393\">遊輝</a>"] },
            { photoReference: "AWCwydiFw2B7Bqjk3PhUE0sq7wVVEGXWt0XzlZAZXc-xsVTeRGAOFnXgv9mQUSLX7j6ZhjPV52qbuz551CsnWmGEz7Defuf3p6nu_yB0DTfwcr3fJStk0ykaPm0nLChvySRsO4tvO6xTk_Ce5ujZuM7GsgRIEJe4UKm3LBduw1H1jKOs4Wkadjc-z2R1dHcv7idXV6EFfOJInhs10YWECMo8te9uqdcjD9athNoipvscsTyLNP-KTWz-hlFtSmnON5HyriaEJZDAmPZPbjE8Mf2XO_rju4vFz8YWTttv13EGmkDb3FERHkGQSqt5IZU-bPxaQlTGT3GbSxCtPU453iYnDOd8VGZaySAuFUPTQdGgtXw_SVGBMgKkRQJ-pCPldgJ6YUArXRCHVzf4I7fHDqoAAoYiMkmJyuwMc2yJExMPv-lZ44FR", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107574327961201181013\">望海遥</a>"] }
        ],
        summary: "쇼핑과 영화, 맥주 역사를 한곳에서 즐기는 복합 문화 공간",
        updatedAt: "2026-07-13",
        highlights: ["쇼핑몰 및 영화관", "맥주 역사 체험"],
        tips: ["넓은 실내 공간이라 날씨 상관없이 구경하기 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sapporofactory.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7411927541422878872", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%8C%A9%ED%86%A0%EB%A6%AC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다누키코지 상점가": {
        photos: ["/images/sapporo/info/shopping/tanukikoji-shopping-street-sapporo.jpg"],
        placeId: "ChIJyWjcFIMpC18RoRfh7HqDCT4",
        placePhotos: [
            { photoReference: "AWCwydich6ckM8VvCAbKG3pKYFkzuN6XiBw0keOHgclHjDhx-k1CoSEpPBsvougERR6ND6p89nrU86hjIbOjDuJ37H2uZ8_2Ik7zNgMWEtOXGHyif2chfc2TdBloEFMAvBLywStNJAbG8NDwYqnm1vtumZjh-45BlVm19Mnq2ibRcABDWN80cIVQBNZ4A20VAEmF1lsGNgBgMQwrQ5UlrcwmapEXnNRo5PIRrdI_4mUiKBXjVep48-GFitTWV9nB7kHRrR8mb1CspdG2-971JtpkXTRumm5amGqiNHMRKps7UYmORiNb4w5Sc8bj3iAxzxRv66MY_WrRVvlGONxi0B45PHYDgM4AgCcme4uF90UlQtLJf8kssSpdX3iboURgfhncdq3SqBEWVxy7aq8ZELtTfsgsWcTu2GeZrQypP74wO6E50oXaowv19NhBgVZeq_1m", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108518290633664628780\">Duh Steven</a>"] },
            { photoReference: "AWCwydjziYixz1zuA9o5c85cwKg17IgPvTL7I-Nks2INlCYjHfvycAj-K3EPBT30f7X_JWterY7dEu1xF9tobgAvDonxOydcH3lGyWlNGFaC91xZTFjlElv3tao3XlwysEGVunmVnk57BFiBWZNxZtEzox7Rse5aPgn8EUAIqWag3ajmgt9ZvcaxDC8S4YVYGXNIInE8AcXfi0w0WlqfC02-HTzAVNYuD1PosML1GeF06qMPfbBBnwKjw6cPqQ_kS2NNQPTNjvx4mkSOmM_Vmmna6AlSBX3dggR68zpe7FFsOSKisGQXZxkVwEm6GeiS5m4z1n0yl-34lxEXuA2JppfL4EoswfchL4GW7pXqRTR4b5vY3SORG5RXa7CHV_zzJS3IiYClaeKVO0S08lolQhO3RW1Hio8JYZs9fTq1snSGdep5Og", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112307907426914888185\">Newney</a>"] },
            { photoReference: "AWCwydh6cO_SFRh-LLczwufz_n8e570506KsZB_g4lygHiY1wM44EcQMZo_WsKAe32hWwURCHYCpLURLo_1znuArBBCwGCeUSzPTw8EXKlVZXGdcT8vJWDXO9xvw3cSI9-bWihm-vmsztF6f_R0tcyBzr7hIjehi0ps9VGsfoaWVJgSL5yTI6zabktMdS6FNeA1woHd4fhv3ZSOxNeVVVpjrI_QrQTLStAB0y-2l_unygO5gIH6lgKPZ9_RGVwcQAtKdpgR0hVuwF1gnl0A6O2biLqzUXYJKbbTpESckXwjMVBVmt6lR8qXZenxZ-vf18MLo-FDTw9w7ePQXj-mG-JDPnv3slJgwrDU0-nZz1PCEqhfbDpha_NpVwfslW4FZmThIdQLBhZf1YTwRnnpptqxUR5SuH62_hoHJDzJHycApA60MnA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107324603273857303409\">甜瓜面包</a>"] },
            { photoReference: "AWCwydhY03BnKxC5QpI9FZUqpR5205s-6Xa7gq1-q62ED3s74mdbjv22Vr3FjmXiwlQ9rj4Gsl82FEtBW2AEUysYM8KKmwtrLEt6vLpYxFw53v5s3sRs0msgRVz_xWTlAPQUYhuWS61a3qAwa3YtDfxX4p9aWtRyuPnb5zOs3uFUkWSj7p81nqor_eGdSPVRvySdQnav8U7CWCWLqSytFiBQDqmqJG8R4G-lk8884IwsnNa6JkDwIZaOUq7KKlGjtqL97HexXhpbLQLV8W2buaXHg9Q_5P1L3Bf-rGR6NJeec0bMONsM0wdf8DJjC5DxiarJ40cSra_ul-tTd0_5X_LXGXkhOLXEMsC8xodrXrnw-21TANdLZimom5dNBPHX6VKtX4VJotSGNG89U542naJTlv-vcg0uUlFpVi9fCb8w90Ux9erdhlyRAp89wDxjY_g-", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106281736540822467645\">暗暝魔</a>"] },
            { photoReference: "AWCwydgF1TuUubxKVmK2FON-yPBYHvNWBGaghImj4izyEfpFT17y0GkhAwK-C9G23bmU2kbgO-MLuqs9VqEJjFJ61124YwMQjL4vlokXGcCdIqWdooDe0GqofuUm5v9ZIQnywB8CA6fh4gx5rxo30H5hD7-E6ayo1bIXbQKQJcZ0ydS7oKbXWZINQ2LZS2yKBy34T7rmAuaiuU4GR8x8nS5U0RgEP18TabwV-emEXzv9nsNc9QQaKHTESKbJYrC8ZlEPqb_VoK9DSGl1-hyplF9LWddQpUtEIiDOXcbyznvAYSNSzmRx5u9MibdvfX772LagYTe9mGwdgv5fox--SqBLLrBH64sAqsnT7VFr1IpDlSBR2EME7YbOj65xvJW2L8ICfyjIKNaF9tvXdW8iOhVH7h7tWmoF4-fwBTg4RMjhHJupmSGLQGa5QeM_iPWPU-ei", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110796079617255797842\">Bruce Yang</a>"] }
        ],
        summary: "드럭스토어와 맛집이 가득한 삿포로 쇼핑의 성지",
        updatedAt: "2026-07-13",
        highlights: ["다양한 드럭스토어", "기념품 및 길거리 음식"],
        tips: ["비나 눈을 피해 길게 이어진 상점가를 산책하기 좋아요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.tanukikoji.or.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4470248669125351329", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EB%88%84%ED%82%A4%EC%BD%94%EC%A7%80+%EC%83%81%EC%A0%90%EA%B0%80+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "폴타운": {
        photos: ["/images/sapporo/info/shopping/pole-town-sapporo.jpg"],
        placeId: "ChIJXSgTX4MpC18R3Yi8aESmu6s",
        placePhotos: [
            { photoReference: "AWCwydgVDnLgF42ws4G6k5vT2jMxSZnFJdTQJkfWyHE_LwbQcz-aBSdXO35S_KEtmsRpJZUENrKzAeIja2cpkRu2NqjCBaE_Cxg3J0AkwoQMNkE-pqW1ZWCsuqQL0XmH_37zYlAbDM-g3MfewkRIdnx_AGtePdA0Ce4VTbvl5SD7eEdzqS_Cn0flyI2G9_t7Ga4j7I3832NviuNmC88AnuSQUNEoUGzVDzFrUi5P8CUe0a-wFJ4p8lQeJev-EUZfx_6zaypjtttitWG_eSkluculyFGFKIF7sZgD8C3B2wFv77NSyLPP_PfV4JJEImNAE2xxJ_YuUotFcOnNIm9jGTG79opsawZ9lGiUWh1HRya_iup3tyvXqp5ymTKUS-WX-Ec9SferNEMMcTlSDG-5BubM5rhAfN65deRDyAVomDa_DYYGAQ", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115181421822027447463\">jj jj</a>"] },
            { photoReference: "AWCwydhEBSC0e-BUGBI-0VDlIB6A0bvfzKR4n0AdNCEBWPW9zyP09mSnBI4dpaa8itgk8LghGZfiseD7S5C0ot_v_ydBR_vObdUN1fqzlngcd9KgRZj1dREoXdL76LKREbC77NDypBYyke9Z573d-oxfJXFiiRHuRbNrI6I07l5OxzrDmcu1JFKvHRcpXibEhYMcvAPICvYyTJEXaIONFppyyDHACgBnhXhQMt25JaoEsN6Kt5S3W00BVHrCSdIyvu2qO_O3_bfu7aSkZALREuRuQBcR5a8rui2PpLSnh4vA0RL83smyiuCuEvabBxarqMLSuCgmYHOAH3ReSECCCp87zwHD-w-OwUGgQqi3-LDCOzb7FDDyITTSNYOUlVZ91ZcNgoTpxnlYV8xY1GjG2TgUt23GEcbkQLtSyAQIch8K9sW94st0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106488760166167521233\">江柏樟</a>"] },
            { photoReference: "AWCwydjblKw9FClJGGJK58hY3nTxhmqylqGOybndXHXk74sfHTQYfQs-xPPPaP2c24fqpdXazVMBQwUA-V1jsPtMSybkQnYGGwor68KgiGsj2tfdTtPjBrc7RcAxuEGqFpq6JoYX_DTc_80mpRO2nVj4agWFCjCjGNeCUOjTflGXbzWwghdfed7HXOoCeRg67L4Y81P5IXEwnd3m2gqh_FpH5Ha-pSyRp3eC2rC13aMZx_8JrmB4c1kFUMfjS33kwRWTRzlrwPYq9xejC-8yGKHp2C6qf7Cv6tyj1P6zD9WjP5Bp7DFYyBmHDtUawaYV9A7eNWwpGdaX173p9H0LofCJXl2CBoBi-46p_ChptyXyPKOu2fvn5Gm1HzZAbjrsy9ZIQHmKyc9L88mN__3aUxbzS45S0_RJh7dl7kn1JdZDnaYD_A", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117597575510835766237\">Andreas Agung Kurniawan</a>"] },
            { photoReference: "AWCwydg0N4KKhaRRGgPcyzUalO68T53jdc5zDp9jrz4fzm-qwC6c8IMXpW2QjgBbflTcyH5fTPcWsfECLufatcsXNyC_A6kDSmKYnjLk5XHuAxlqyvwsQG8qgFlXyiLFnDYe2M1Xua5SdCjTMZwl_AX2xFo-yzMHbtaUZjTxNoon0m4vwsssuWR4a654ArgiLQobRSCOsLJEPc-N4WriMpcK0LeAyj_4To05BkvQpZfE3s-1K2XqRUpm7jcusTnypPwtwLaUTJ7GqLyXBJvVaTZ1vmY2XGsJPT-4OhjUO-Evrw4OU40l7L-NHIQv6USkvJIIk3d9WgFdn8UNfDJcadqDFnt3FDSbNQKr3-VN2XAJhDoYLFmrvOdXPhWR1OKgYu-jUYyKRpShm1XW8etv_if5i41rU1uRu56xXUW4SNbvoOL6PLDO0UJghK9i1gJBZmVB", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106891487114366572515\">Chen Ourway</a>"] },
            { photoReference: "AWCwydhyuQN06i4J_-SG2RAtUSvf_A4_WYByVNIoK2TAF9EyGwvBi-wOxQ-mjIWD42ioHMphGyFc4jfHETwVysApCqZ2Zv35mPntXlPZafAGelm2c_Q2xP4e0T-CIS60PKWNJ795sKYZxwTYrL_qjk-xhU62WTyBnspXs1XFLsz3ostrNkKqADQbs6n-oz6OhIhvmESwT3HFPsybLllr0kAadjI9WF66OKxUg2Xnu7Ai1kdArG63FRwEBfFjUmwrZlIW1DUuWqGaOroOSpIJqxxvWNfhTw0xOxNBvQUv5Zy1WGFcz8d1P0suVRMcjqqfXGcku3oSEezc5TURrMCtHuG3PybRkziiVHhc4lGUX369LMQ5kB11DYZpb0sEZ37aGTrFdU8wEHvR25iFs69m-NXigV-dvu5udiWnjorJoXEUVDKN1QOm", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111856480076122159864\">Johnnie Lim</a>"] }
        ],
        summary: "비나 눈을 피해 아늑하게 즐기는 지하 쇼핑 거리",
        updatedAt: "2026-07-13",
        highlights: ["패션 아이템", "아기자기한 카페"],
        tips: ["추운 날씨에 따뜻하게 이동하며 구경하기 딱이에요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.sapporo-chikagai.jp/floorguide/?floor=pole", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12374667213875742941", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%B4%ED%83%80%EC%9A%B4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오로라타운": {
        photos: ["/images/sapporo/info/shopping/aurora-town-sapporo.jpg"],
        placeId: "ChIJDUy5PZ0pC18REeyVlRZ3GTw",
        placePhotos: [
            { photoReference: "AWCwydhI1IpoAMknLQuogKAn4ga9A9phTYfOCKSJCp0iL2rf96K_yLhtytDqMJwKoKM9aJUWPIScERjZBSSNNB33gfi2Acm8wj6TyEN-05bVbAaG1vEM9-VO700rGUxGfhahn3DEwtF00kgTKq2BNBelINJXTwGavOI-KiGpTg8Lx3mb_fxlf9BIiouWdj1nIaqjKgBbtOVenT-E5VgnpS6OhjY8-ooAn51TZiBSJw040JPkN0lF_GYQFtH357seoNOum-087mkN1lGNrd-np6Sae8iLV67Fisu6vP1MeG2r22Sb0YwBt9z_GPAVJTXMGOm7MRG5qyiSadTt-4tSEq7B-7VZQ_uTH0VP1RdBWBRBaqCKaOLZY427q4Y8e07Z6jwsrT_F6tPpWw8_ThOj_TWbHjSRiLBgm5UxP1GKjjhKgApKcyG7", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116804277390174123161\">尾毛川知</a>"] },
            { photoReference: "AWCwydgCG597MFbfUiz6GtOkiE_gZzBKM9XPsv5nl5fpGlnfmMXaTOigGK3qO3ZMqVcza-4MxLRDpF1awz0JXgqtxWEhGXhD3pIVWXWcH8P38Nx-7TU23NPwX_peK6MFK8x0D2SIHPHql4bHqnJpi1uJEGpsUsVL0hv8skE0Upfw4P23VevpAxtXdgRZ9iURI8WGgixk_2HbTQjiLr6VGq627-2tTzXvp_SWKg3l0j1up6BY4wLlncH-D4UZPdpqPMI1BGgJHYDAV0TPrtGwh1vZgIEWInUl5_b_tXkjUeMJ2Bg2YAWqiDcf07UBL9LAv0_eXBM-KLCddauuBRIGEnYGnbSnG2wOXbr9kWn-6vPlxXbV1VL45m73IncobL7UZN_uB9MdftgjcfCe-tLHjMowIvBhXDqXJT9lyW0HjLrx9mLcgQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114974045102879016431\">야식</a>"] },
            { photoReference: "AWCwydhsMuGXVUSukFGeKI8_d9iNI0gobDZj0ZdD87wn98gZXfmuJxDbSGiY_VIUIgv3DwJgRGEjZJhXMjuzL7N5Ksld97m_AYBtR-yN0NuTBTdudP2guecX-zPW5JX4vWes6divSWVHh321eUl90cOvnz0OWHBkj24EUbff7Zq6esJhqbeFjm2WUjyMH0PS-FgEvjYcUldwtpVJX3KoRTKsmPwuHpLzO5-BDUlTr90Vyi3xvZ0vsgLFoZPdzDlVplsVaLrxWawpwEcO4jeLW79R0JnJtji3mxEOx8LVPgtuEDFDVUY6cFTr7WoM2d5dFGDxtR5FCFggne945mw2NwmKzJdMRpzuUUxtVvrai9TdRX9wGmyNOUjL4T7I95A2PWuzkr-9aC0RgQ6bq6JN2-J-wFFhX2a2IEP_-DKfD65l68c84g", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113492074083265258293\">Macube Mocrow</a>"] },
            { photoReference: "AWCwydinhGVaoruqK8K_uuBJVy7Lkc68rgvbyMnJxCa7LFKR1m2FZ7Wo25sNPj0_9_iugWW9yIcZvjzM18ct03gGF9RVab-X2iEsMDtWvWRjsyCAg80NKGMp_qdxqIxDTlKZ6kW9CjSvZ2n2x43MA0CR59sx32uMDA1yXcGGDbiPO7ebEHLYks1LDEg53xUqPCPIhmT03Gt5Wh5GYzpgdiGEZ9H42OW8FuVDTxsTRjlgNbBpnHj0rcWi-8GGBehvL-xaopsAs6QXvpbbCaH3iiKRC4c2WsAN9B__5dsLYRnwHoI4Xb4Pch6IJfzVPWg8bBzkIZp1NXbNokavFICulv2oQbGDVU95Muw3jWshYWvepG7hoW5F9MNtdNTi2yM1gb9RD2-BDAh_pyxnvO5QfFFCWgVjUZ2bI3trtZVS_fmSfWB-WQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109139218543262264187\">Narong Gasigapasstra</a>"] },
            { photoReference: "AWCwydg7JToypOMxAZKmj2debCbvx5lagHjxtoEfckq6GnvrwHaF29mV7fdsbLTj8gPiFWZX9oxqocgtp4wwO2mWojej8SFqfHSHKAbOPc84RvBefvxE5z7b-PaB3vvWfAH5RlUE_WtFh62SfKX9mHBzKT1loOMI33vxeFMqmDMPgC9eVlSV3-XuJARfgPHrwlfFCYq1vdpL3nyweMObJquju1w76pl9UeZdQBYmhu2DYo5Ut60jbSP1iWBQARwoomyvnZrQJXkdT6h1xf6b6-dB6z59Qq1UpTipeyrF8lOW0bEH6diKFDrxVnnVV1h53DejgFD6yNTSmR7YMzth2pPzwAkh16ALp1FXDM125DWMa4KKe6OjGoSI6UFOPWMC8M9Qj7HkPzuzvc5sJCu_Sm-sLajjhqIj38VRjYop8DpRDO45WpGu", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107673030445248363778\">preecha kratai-intr</a>"] }
        ],
        summary: "오도리역과 바로 연결되어 날씨 걱정 없이 쇼핑하기 좋은 지하 상가입니다.",
        updatedAt: "2026-07-13",
        highlights: ["오도리역 직결", "쾌적한 지하 통로"],
        tips: ["비나 눈이 오는 날 이동 경로로 활용하기 좋습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.sapporo-chikagai.jp/floorguide/?floor=aurora", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4330623455576058897", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%A1%9C%EB%9D%BC%ED%83%80%EC%9A%B4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "노르베사": {
        photos: ["/images/sapporo/info/shopping/norbesa-sapporo.jpg"],
        placeId: "ChIJTzTD_YQpC18RCyjnwiP5LoY",
        placePhotos: [
            { photoReference: "AWCwydjKXlE902Dd6V6oUWUvIhr-Rpuh3mjHZeM73dSbQJFRPWFGxtwjqnMJE6IPpjiLoB1yn5av49LZ_HzXUm23xyTCQsaAx8tt3oCpgxXDwl2uwxLs3MGz8SDlB68fudSxEMpqYpWqPBTXkskbjByMkKV_5n3AvsV68ymaRAOr2T3Ry5xd-zXyZ0Vjg8VO20r2H6Wpy82Un2ukLyLUOhO62SOYo7gJRoz1bD65UNScpLYyUVTayyaX0ON6NaGZ8eHwyBTZMdc9i1oKt6LBY0Bh7AOqbTcqbtdj6uN8KdRAgL2dkFWnDSBNNj2kJMt2iVixfa-go5BalqqaMUo1qXj5W6mgxPIWTevLpI1h7HwWTwfQBheykyQWMbEU-2oXPT67vhbOSgk5Kt0sQLTYAZAk6-utyrmbdmiMw1YFVYN7VCSS9GIMm2BJT_nnRRbf2M8X", width: 2935, height: 3254, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116563313216362290816\">Post Shine</a>"] },
            { photoReference: "AWCwydinwkgoEUzxioNs0zzpmFj5McuvdbqWef3Yk1bu9nCFviArrrlHdF_OARzKK-wLUsSVIMduqDRZQ_IU-_TB0XLcGsSSMRBoJAvBWyMD_10P-gfg9gezpLs-sjdXFwbunkkjJC99DdPFX9pV9jmJUD0WrUJAvS_BOLvCKoNQLeUacSKky0Ryxe08rji8NE8s6f40a12oKsO4Kq7KaiTLMUhF_W4ZzcakJvSfypOZ31NFwdAy1MrGqkXVI3XTIPL367hMnUW5X44eAT4KaRvE-43wkP4DMWyjYunXjHOyh0blTxhcDyY_GkW3D8qWgjhB-Rc9NgeH6DTVXtEwdwLOFMQs5plPMWu0mczg0sotqw3olubTrnWwmmdkcD_wP-AuoYTFOvCk6zomnNOFGNwo-MI5fYEHrefCtyyI2PffP31iAGNR", width: 1500, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109762607647198694526\">ノルベサ</a>"] },
            { photoReference: "AWCwydhp-KLnIgUbjnkjIozQyY6c1qk2bSIXe3Gs3-OvcdWkEu8I9pq0Y3Ajl4ZVLoak_HM-IbWlJ6Zb-T1N9s7QFUEoPudlIqy6Lqp04uXrUBAXyBMxd4TkOWRr2IG9kFqaAo6OebSupsSyJjqvBXCQoOAtkg2Am2tQA0XBRfRvxpjD7REde_VVrSI9LfYFwQUoea2ayIcpxuVv-SgbmlIJOy9KSR1Ib0PbpxR8Z-QxcV0mQak-QF4DJU_HwUk4fapZQhK5x6hMkhvuLe9Y48kU4H6tE_GM8i3Mn8agvP0jMU2qcRrAOm9XPBmPffu0trDRkmCn-vTZyklwQq7GX_3u1MQQ1Nwk53nPhEnYGan1hReGK6cVJpg3ZrlEe6U75WiCjQsbNbLmpCcNK08RxUu0Y24OBIay7brg-HOh5ECKlRE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112191961761889767656\">이계민</a>"] },
            { photoReference: "AWCwydgEHxxp375c-4YZrUMUs452UMNo5OrT_0jfOsUDMHTZ6gh0t8y9GnlG9avYPRpx_vL9E3EZmz2MZpvMQpPIIhqz209uuT1W7MxI33f7f99AVpcXs5YaFukKxJ1dmM5BiV9PXviLF-RPhW8TfhUoxvclqso7u_BcKxIfoFO5h-LQB1b4CJh6m8lIeXJmQSMmJL-BRZPPUKqlZx9hSNkamHGodM8qcEMkaWIt7BpZErTHI0d3oGq5FoTCe1AfgyDtDVOBUw0OSnfKCeTw7itLkpbA4YRPH97folbR5PgAd0GUi-ux062dMGvjnWjApt9CA6wWSU8YWg-It-nX7BhIpxrEIb5CT4nze1MFn2fme922j7VYG_UfCskUk_k4_xwjKJrTPIS7pPIyy8vrcQL9_8fO4ubN9Y8TA1YFHnCeGAEQ3fusyE5BAU0by9rzA8th", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110523405578713079212\">SangIk Lee</a>"] },
            { photoReference: "AWCwydgiP8vZyF01YECbQ8j5UOMZAryw62r3hFuNtUr-UCxCF5fzuPdB-imkd3jd5Bruq2ato0AXtlqEKIE4VIx6iyc6FZbQ3-jCAKixFEEe9nauyA0KA_yzfikuNt0ENvHcApBYN6YN7Eg6Jzu53JlhVuwlzypSwRqfO7hFZQmnCJWhw2P6V7YVd6ZJjhQaGnDfx_xf0N9MJfq43__e0qvB9zIR-IUseVqvnh5trNzyAyxaynPUhQ3U3DKH5bmEWybYJNJ4ksYaG9uYwpn6a4IDF1qa3QKNYQdhvFeqE1CtkkaEW7qLUkzRwPxtFYvvpvD6_NYzZxKE0Cjf1V_9FQJsl-2EJzWk05da4TYChgFoJJc6JN_kDsOx-K8wRD51DA0L98JAYRJcpcFd3uhmX2gZPRlonD3wKyH5CY1u_VIjm1DpwjmM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107361078193588332240\">Choco Chu</a>"] }
        ],
        summary: "대관람차와 다양한 식당, 엔터테인먼트 시설을 한곳에서 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-13",
        highlights: ["도심 속 대관람차", "다양한 맛집"],
        tips: ["쇼핑 후 관람차를 타고 삿포로 야경을 감상해 보세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.norbesa.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9668939382000134155", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%B8%EB%A5%B4%EB%B2%A0%EC%82%AC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 파르코": {
        photos: ["/images/sapporo/info/shopping/parco-sapporo.jpg"],
        placeId: "ChIJyTQqSYMpC18RC-3nJ2LhC5k",
        placePhotos: [
            { photoReference: "AWCwydgosln5Mz6qVj95b13Cdih5iri_tz_uxnZRPDYo3XdSVazmgX5QX88uLWKwABsqoOzI2FJ4sfqWEa0M6ovbTa0eeX5exsCkNWnjS11C1xnm4J6KU6D-FKuOpquI1jgRoEo5MSVmnPc1lYYkfHKZeZJLZkUl9FoLiH3qX3otGAxjGr--JufX3T2GFhCwbg4LyILPXv-8Zzp6jvBXrKcUz0EHTUrSaPP_SqF69-iYcgx0t3A5k9umzcsG2dUl3Bnyu2wbCW4VAFA4NeMWzysJqdJnkMGM4kjaNvaFvVYO64R0kW4mRlp3UfIkqhDrAs4beMRy7rHu47PspGvRitARoi8HJAuYHb15o4O_QsFOnXqD5W61DR13X53AFDKOVjOyoMWBVT3jpNH6uCGbXcLcEBVKBpOlfrJ-OOz7NqZWe3PX5kna", width: 1620, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112155659887094749613\">ikkan ikkan</a>"] },
            { photoReference: "AWCwydhMn-WK4smvvlLbsJkNaMYWFt-Tg7YSAJHFFFMuhTMIJwfoizO0ZykIyGWfMzwjM8yI4pYQrOMgHEB5ud2lFVuycvSRggUEbN7AygSnTIzvubbAmoVGI0baH_KcuTJP-PijbYWLqtTWPvW31_933PUB5WoHqC-vyV3PC8OSDC1GqOWsavWq-0pU5jmH1xE2QnvaE-_lSqpbbIEcBC9GIYRzjp-k930rOCsaZJCX1hQwVGiK-jCEHu_w8dP6Q4p1D-KDy4fe6N5zovxeUW-95r-wZMfRZhWgl5p5HNfK76EWX8jlf_qZI8D777-26OEtiUYGRqrYCqy75bceCom_qXL25ACUla8L1PsiImoUoDpvp1nsbGaxr1RN9JtdDODoIYJ0tpr1JpuKxR90Rf7T1OQfVC1Ny_ZjIfmH65ohUBl7kg", width: 689, height: 459, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106886135076937712580\">札幌PARCO</a>"] },
            { photoReference: "AWCwydjRhKFDhL5kt_BJ4GksHHTTyLP2cNvHCqQTYq911vNv9aaN8xJCnCSh8xoTS5ZLYAxhHUQs6dWZHFJ_Y9NwHh8FRw9wo_EepK1IjMiYAFIypJ5IaT8vn8R_RlKPRyTcvhmr3NYouOyH1hQAE2e0ye4pfSgVntGUsAbS7kMnAi2E0NaYSe6ETKnkrPErSXVD59S3tpz-Hq85P0N12Y4G15Y3f3WZNOi-8vt1X6-IqCeoMw72_JpZJjxdMbmaF62pauBGke9bMzojl5VjjBkwzbbvyyWcbtEwgM9qLHO8NXkULsmI16UxWwiXsQlWbGflOyaife760OJLyHrdPvKVsS1kygFI1vAus4KiM16Y3cBg5wjwPXJ0GJBMkpEudJ1cZCKwxl3VQVGlCqKkwfj-TG1fhqQZtJe_OZJiEEXDmJ5UbEHM", width: 4160, height: 2340, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114591222560757628916\">宮下良江</a>"] },
            { photoReference: "AWCwydjrbRhfWIuaZ6GmztYClHiRz4Q6KySZvcPoIkQ7v7CQHVf3yb5KF0VaWCMgBMlYm5jmjF3HVKsMP_QKgCM6DO19t-9d_2JSxeybLMV4ZHVNCuiK5orqsanu_d-NRMBXFBIwnn8YAyfH2zEDwh2yRSfUj1psMTIJrsvXtwy2JYH3hdHFnlXVfosoWlKHHTyX5fLJ1t1mfmpYpaD2wn8g_MAM3ejprjgWT2LmsBCKgyyHbCZ1-uREZqFRFuA6tK7gTaYxZviYwYhbzR-7RXQfzlhbFUgkfckL_rOftNtHCSU7atcwz446Gb_CY58PdCuCkOlBTk4fYvc8YWGoSUNyglbq0f2V0CIKfFx0WHhbpP5vJ7nUhVoRRRqnXUCES5VUp3r5tB6gq6DRuY560r8wvA1VgG4o_jMhGMfq7IsvW0ZE4w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109020397113576236587\">瑠羽</a>"] },
            { photoReference: "AWCwydj1LgDsaibLK9uFNs3dGXTROI3zB-3gN5Mpe-L-Hy_DJa9B8jYTPOPD_CBZC4KTYGAzhWWhs4UIVhU5Gz-QC_ZfQ64yzanvAlGXNRSM6JHVY9sWC4F4j-foDJrsk9OGeaBRQRBFCbC-nQbeMgsWx9QTYplgdRIPaxw_nr3CVPIgMCJY-zBNZYS4SP0X9PhsrtHXBbcD7wgjpxRRR9rizTLo1oK85gl-rWV3d-gPXh_PalgNMSzMor1_PGtQUboHNpkpqLg8ojhf9DmsE-PAzw5no60KwJCbJ2S1b-PGDCrNOrHC_TFAt2-Uf5-fnxFsX5zPCA-0uddV-HMkJxLIrbqEXEMBTfOeIEycU5sVTiTzYnxY07W8YztziQxS_iAnCHcR2Ja63lncLn30YtM03feV4R-N9hx11_KORBQlXDYGnJflXGnn-i93HKw6RawY", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113629204905514130597\">陳致良（朱利安）</a>"] }
        ],
        summary: "트렌디한 패션 브랜드와 잡화, 예쁜 카페가 모여 있는 쇼핑몰입니다.",
        updatedAt: "2026-07-13",
        highlights: ["최신 패션 아이템", "감성적인 카페"],
        tips: ["다양한 브랜드가 많아 구경하며 시간을 보내기 좋습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sapporo.parco.jp/?utm_source=mybusiness", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11028155924239346955", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%8C%8C%EB%A5%B4%EC%BD%94+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미쓰코시 삿포로": {
        photos: ["/images/sapporo/info/shopping/mitsukoshi-sapporo.jpg"],
        placeId: "ChIJLSXhMoMpC18RPFl9hwymRvQ",
        placePhotos: [
            { photoReference: "AWCwydhPRDNNQgrt5BY2UyUhcm5sxViOK8O8Ara9hwTdX5B0gcXyrJaH_Z52EJ6_S-XpcrZZAXq9DrY0W7d--_jh9vtJ64Io8UXciu1eE-DfGfpA0xQgTOOg0rqNmKPJ1IAGcohQvsSlNARGoLr7XRLcXax58MQ4l0BP2bUoz81yVTXA7AhgtWvY50MfnzzK2XpMxGdZwCmwdDnkWcPDm8-kxySx9E6qLG5CjNRhN3OPiRrLhhS3iZmaqgRZy2l4gZSWwiFyc2iNZPfobiAnNrsRmRWywke1v5yPC-cDPYRG-FpUsoF98jds22dhfs0Mv-LSryMoR98YRdFpEB0ciVxdtmJAxkawou_hM_6jPcQXKZh559T9HQQbfpsloT6EJ4XokKc5BV9xrDF_nvCcsIjdTj2_tUQ3xE0gZx7B3n8VWVw", width: 4800, height: 2699, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105531640256471762297\">吉田正一</a>"] },
            { photoReference: "AWCwydhOK8RL8m6BxroUHXObbJhFMyF7--PgM4uSvrOJLb4mjUHe-Ww_k6EwWnkmqgpm5Vaebf0OGnThHnSDpWVo1FUutrgF1Y5zHyZIjYRM9PNhk96Mn0yvZhIrXLQmxFG6oOO7qPfcYP5Im5c8q16sNzl9pxhY3m32ADkOuVZwdZ7DJFk8Iofd0SKvi1k1jJdsJf9UQcE-ZUhkOlOONTCxGonxzGtWLaEXXboWRQh0V5GWtMJsVGrtUlhg67ewKIg_2h0yt3uiIevXsI9RIdVFZ43Ut1cnhzrKZWXDm81cWjnyC_cyOSrTUqtLV6yDE0PiWKKdenYvd-q9EuLXu7Si0Sh1-gWT8LZuF3-9v1p0cwZivMZyhjeFq-NI9Lt4sfErHW3JEE7iNsluLZV5Bk-ZOxnZVmMPmPTeSS9iibH-rfY", width: 3200, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114678545194863539501\">narick boxx</a>"] },
            { photoReference: "AWCwydhdIR3fxrHIPuMMYJ-SFRSOEuW9O8xa5wltzxIXJrj87a4FS3bXMdBRiWiO2VXG-00Qx6OwdMC9rX07FlER9jcoSe0MMfThwp4cbdg6wkcWTkbJs8CiXy54uBcZfVaBNjYwptcUsYXdWGYZWB2mgyDPQ_ES3-pjQdO6Cpx3cNgMlJBM9gRe1A1Uad2mkRH-zRpedTdv-lArPxzPZnRgnB4iktsPrQGI_kK1xEw7q1UWz8DVHvmlDFvu5C_OE64w17OaivFvK1mQdR_UZ1PpbO4IOLwSJOTfTKq7dB7xnKzdeJ5sxlJbJgniaTKoONZ8OLoY4h0njhRYgqWxhqe9tBtNw5Fz3OZ1nxRfkTRaHUOizjUGZ-SpwgKM0yb7hCua-StqolSLtqptA1LWEpOiuoOz7vEaL5_BdcOk2EuKetFNzoU", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112115768312280605603\">むぅりり</a>"] },
            { photoReference: "AWCwydhiF6ly8bm4fxTZ8Gia2SfVXKOrTCis6KnzBwtnO1jFn0Yr9TtC_KoPAKmeM-3BLBF92PadZlNfnVTZ7doK3_RgReLBWA5L_vUAdj4d2D9NGCCEEgD6uf628iIIUot2-oi0EUW3dLNMvw20BYntaIUjjq32E20pgh0FnqNuSbFRguISRnk3xnW0ZPBoTAtgOQ3RW5-XGSFAXrItDLgJOlD7VfsXtMGnewgZCVlGuaBiSikjoy3fsMrotYxBAPaWRAXoy-CqNFAm0IJ5CINmfKTP5oIQr5mQdaN3zMvGJY4PC8Hx-TtTyrdGzi-K-gzzXIKIv7VU6-j6yjj5qtqlMtvgnDCxNlZsVAjUmHSNwlWW3pC2A6y47O4lMlXVEtQTDsMWB-IY6Q2A5s2gHc-dseGIMGOapDsLeBH-y3uCDaaCrQ", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115346079316158934845\">하원철(riopapa)</a>"] },
            { photoReference: "AWCwydgibvE1cG89ogYr-5a8GspMfDgSyWCWjowUMCmQ_M9BivPylHyLTQeB0CmqvCjBf8o6RWY-TiBXodKQbD-qzprTzVCw_dv__mFBboBTevo3cYR-oe6JP_putAg_SiZK5Wzv9Q9GyH90qqM8qQXq0LgKMPHyCEgAtXNzWWe-JgFJm6tctQvAptTDs6fjqSX1sbV4OBg40FIxgnQ4bV_kCo2U_MiQlWRVYWjvvuznSn-B8Tqg8YDPlh8hSd80su5CMFlNpLwQ1zOife5LZ0nr9or3EiR2yXixvw2-DZiuDt8Cz-ieQG2Dtp1gxFUTQLzMD_N1yXe_PalMp0bHxpzoTTFuj2sziquwIAkUbCBGQQTJL2NA_Lk8aZeF-rY4jGjdHoWRpW9uftxvvXGa_jHlr_7vyzT2m0nqD97PrKvVWbA", width: 3200, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114678545194863539501\">narick boxx</a>"] }
        ],
        summary: "맛있는 디저트와 패션 쇼핑을 한 번에 해결하기 좋은 곳",
        updatedAt: "2026-07-13",
        highlights: ["고퀄리티 식품관", "다양한 브랜드 의류", "선물용 디저트 천국"],
        tips: ["지하 식품관에서 홋카이도 특산품 기념품 사기 딱 좋아요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 7:00; 화요일: 오전 10:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://mitsukoshi.mistore.jp/store/sapporo/index.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17601938766367119676", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%93%B0%EC%BD%94%EC%8B%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마루이 이마이 삿포로 본점": {
        photos: ["/images/sapporo/info/shopping/marui-imai-sapporo-main-store.jpg"],
        placeId: "ChIJS3k31IIpC18RkLmN3GvWsnk",
        placePhotos: [
            { photoReference: "AWCwydhkh2T1lXCPDoz1hlMJeXRlcm3U92ffuinRbrctIc13EmRkLUtmoohokOdkxJ5FTpoPj6II4cX0eQjljnYdbUxxgPFW94yqNYlgREXF6QGZX8Fh6T5PBo6HvmAzT1_lvol54bE9F0pcqd6tO19HA-_-BnIKaIXHRDFENlLvBMo5nfl1YohCQBfq99Joshyah6SoumftUUN1n1o4bY3CeJlO3rgudlbYHCIisWbL4PERllPEdUeu3VjTptrkgSNpwgsRyiSdAdWu7ijhnBhK5DfrD6HUrKeW3ZB38tcB_G42Md_hdRrYLwT7eyBD85zOJ_dBJ3euf6zd8WDxhuY8pKjyR_wjXLRC6cB3qGLgvIsItrcD967I9qY4WqvvUHMl6tQh8NzkmSsPObuQeTEMAqQPPXUwpik2AvuO-CKlKyt01NaC", width: 4500, height: 3001, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101613009396753261907\">ALFRED PHOTO FOUNDATION</a>"] },
            { photoReference: "AWCwydi67LZT3ydZ1i20qtbsOlyp2F7zYVWpfn32tpd7q3CcvGaZcgM4KiMAujooKMCSNbymRTMV0bFj4rGXXtwhhwDgRTH6krM8OE8-oMM2Ns9BsuttSNZuU23mSFKjdAgOMb2NMFr3EvvaAPYND5-wRcre09YD3O2Oe1kqoIbNxz3y59cgnFL5FBoxNxxhUzJBjF4cs9W2r5u8UvrxuKzOpduUhgXXeEN0aeM6nu9MtHUyLItwQJJloEbDN2eAzj2iIRcjAWHUFArvOngVb2Zv9T5aCvzRo2tHRRqIWlRlLpHsAXk8D3cl5oM6xFayoqRJ-oARfyYq4jkAzjGR8408JmIegKcOBmE-vfDb2Wz0dYL-QUva0d5xS7ZYPHTeM9z-1q_wvErwyLSow7yjVzLfsFRpkfDTp_b_g70wy7E5DB5YT0Pv", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103358900853069651476\">chiu ling Chen</a>"] },
            { photoReference: "AWCwydhGzH_q7AIOVPgFx2ii5kPxhQxgaStQ8Ofq7HQGpmiVwb4QqdmUS9Idp7_xuPEySW2WiJ0AsZarQHhy8X67RgNj0SaLrQHVjHs3DMP17pTpiNIjN_sRuqEcETrQpgpYmrzJwNuoAlmwNJE3xzvNUvYNrVyXu0QRU83gBGmEX_BbYYApR1SO15OZpDLXDuD-arJkFkCC8RI_kP9vEfBwn9wh8SwKTepB8CgI2U-2wxBk42ijJ0VTCMCEo8SZqm2i0guAZP1yyO8NVABzK0zdEp86t9ArlUVDz_hrbLOPpK-dl41jV88YiuWw51He3ygKwIIIJBlMTiz1mFz-s58snYn4EM3T5Uqxi6RXpeST1EM00CuOZlAftgtOaZxFWLILz8Y19XpKn8owQr2d8jipU-IhOp8EPq1ZMFgIDoAPjmY", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117051058732298688886\">宮川恵子</a>"] },
            { photoReference: "AWCwydhpdIyk1HwgcdedRhwn6tE3IQjGA6ikbG8FFvAR-GQsF50yqa3okNtKGKDqbQtVfgVkMgnNFlcR9fBHdD5C5A3_cMsCW8oS5wu7YStydtUAy1VFxCdb046gGg189WswxvvPyDWkczFUGfCEWomSHpIA2fG21NZiIa7uLqFHBp--L4r3zrmfvlHcqRoUQTafW_T2fE64kBcYW_zIzHqcX1m0OfSv1SESTFCE7SH991P-_8QdywKWrGhY3v3Hm3sSoc-VjDows63KfcPnIp5mfoo7PZNQhZ167xTrae0ontZY1jvtGSYqUJ_Pv8C0SY8-7XT_a6Z_lar62-HQ-ttcAmtOvNbO51hcFHdJy2X8M8FE3u-l_PQKNDedDs1gdHsm6OLfOGtvhEe89jG1sGyWib-GIw6XY1qWj7mgHkyco4I-OA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104550250041334245107\">Miki Yoshida</a>"] },
            { photoReference: "AWCwydj4z1LPF9u1DCnyKZLHbVW5nfOSQzt4MwGHae6YQ8GJoBglZVv0iUszlsioZ_eSFzKOg8tFCFa8GSUcsfTbnFo11i4XLxolySc98wIO8wqOIhaXsWYjHt43Db5oIwxX6aK_V8WlqIT8AzNkLBkFvrega5nJsjedOG4GVGHRCHgBpDE6jNOpU3z2VkDgXLrAoahWXxe1Haex_wrsjFrspb1nDjPATfuWNWo-aso1SM5OpEGSz-n7iCGPNmU7tQqwt0j7UBhIAj7D_JCUruVjTW-K8JyBab1rLRPOreF-7uQ78rK60bWqxcy-ScOuEZpJ0gqpmLqrxPU6RvynaXqGjFT0C7B9dHB1j81HerTIJb-Rfpm6eTPfuV0Ks69ALmpDFYfUlNA_tfWsjanhEXy1VTec6IFBMU_f5sUbZVwl6169_w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107291264912985106768\">Alean CHANG</a>"] }
        ],
        summary: "홋카이도의 로컬 맛과 감성을 만날 수 있는 쇼핑 명소",
        updatedAt: "2026-07-13",
        highlights: ["지역 특산 식재료", "세련된 패션 아이템", "정성 가득한 선물 세트"],
        tips: ["로컬 한정 디저트 코너는 꼭 들러보세요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:30 ~ 오후 7:30; 화요일: 오전 10:30 ~ 오후 7:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.maruiimai.mistore.jp/sapporo.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8769307183193897360", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A3%A8%EC%9D%B4+%EC%9D%B4%EB%A7%88%EC%9D%B4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EB%B3%B8%EC%A0%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "도큐백화점 삿포로": {
        photos: ["/images/sapporo/info/shopping/tokyu-department-store-sapporo.jpg"],
        placeId: "ChIJz9wKu_kpC18RGDKqC9hbcUU",
        placePhotos: [
            { photoReference: "AWCwydgCsYT7wK6XJjARc33NNH4BWjMjMfvmPGoNzhbi2DzRJja406UDfT27zcrqYB2-5BcVIhRteX3vW3xcm34N1U80XDiWAWCfftG0gcmupK-xeLyGFF54dqgpmsbUEV6P2jJAYkXk21peZsfFAn_qXofOkA4KP1b4AMQmr0R2uhsvHWiP7JmBFdD02aZ001fQPowPtviyLl6jjjuaZLLm1tSw2sR5MDJXM_VtcGV0_cygYUGWCSubybuAFurVcWyf-6cXtvK-AUPQ5g_LBxuBkrOTtSVIgifXv8f0h9e1oXXyDjQQiv4In0eSoWrOdk39v3MNAbeLxstJs-JCPmEQllCPxK94zbVkik4dy83akEeQAKiPBrhU1UtA-X95cj2yhgulW8k2Y0_5SUGcKpjWTotV0d4YmzQSl3Pf_2YsYGc2Lg", width: 3088, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107346218370928646389\">さっぽろ東急百貨店</a>"] },
            { photoReference: "AWCwydi-9_2TL_YaVHzgFzW3HzNXOUqE6pA4aeeExZLoyFsEhaexduyC8LR2mPu7us4778T5URTGowOFRiW4NUbA2dHR0Ygb_w3RFKab9fUuRwDZ40ay-wcUq4m-rk9sfPkg8wndSZIjX8RhjWLWe3SKclG9zuGyeFyLyCiA41NeMHPW-L5En7ZRAqwsJlUuXc8J2UdtlyWYxOUmZop_krD1naxx5ADpKwjOWwh1Y92mg8mTLExJLqxUXtQCbEnaIugQz0vqqO9xiyI9c8PQ19cWtAYPYNiP5-pwWWdBg7-RAILpksc9-6us3uRECXlNDAgzhZU5DcQDxRErfphD7amHLMqRzyhysRUu7Ut2Nk9i3EAWflXv67d-FggumhGukob7dsc0awM0v-tk-MqPHPY7GwdZBEhbLJPOL4Raq6tmO7_CPv-xd95mwepLQHEYTRBx", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115278593701283133774\">得サブ（pontao）</a>"] },
            { photoReference: "AWCwydhpHFC12B8MupwUczD1ReXU2wFrnHvlC2auSerFqs2rmhCeyXz29m_i-K7VIFtfHfN50_hFEIPytcoPFxF68Diaa7RnrrxYQNqdBBCt7OXPhzXap5psl9B1oFDO71LdCYAgrDA_demi3jaXW9oPbWwuhLZiNT14zIc-dUAiC4zNTKmtvQKUZl3G9dD7hEuMTi90ENa3PFypSyI__6y_71lSb-njipHPJskmQd0IWATWvrPUpYGNdUHs-pg_6-xeOmIpodL50wc-zHAd2P5lrQROVDeeA65xQlQXUL2ixPTg7ukTeE5TLevI6hw7y4Kcc4dVxId62Mkw5EW6CLfR3GbskxEE3jjZ2fKyFubZnvo7oFGsF0H56LIKXVjnegiGoV7oXNXrJCaLQU8UTZYHKDIp-J4M4JnmlCCMzVH7yzE", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116656065358767817056\">大巻善朗</a>"] },
            { photoReference: "AWCwydgtvIq63Jq3CRzcRk_CEWTUslesTtAq02ajIxJbgvTixxAh-jPzFN9h-Cu4Y688HUFSlV-1Y-peILxCFApUq_GanMIv-CsVeXECdug0KH6FF95rwJ84Kmhsh1Cm1zr3CMRdZgnk6wWe8rrvjA7NoTKIGXruO16k6TzaQqtmdVfl7rT2g5R2sw6OMzmvNhvZL-f358LR3_yWR8zm_V9oCBAOqpFlEK7kGAvmGNpfzhK_25m85JrV6gQxBqNE6JXTvrhFAfqbtDF8Ukjwzb_XmzPuTYvDqZhozbBnmNUEY-f75V2VdijnCnZyU9fxcgQIC7gUQ6fWAVSNqj0ftATIKEnvqD79fYiMxzq7y7yC0gswhzVSOsXA0qLRYpCnx46YBJEsjH_llCB9KcA91NfvVcL4T3VJPY9lpj7G29JWJ3r-JHFa", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115181421822027447463\">jj jj</a>"] },
            { photoReference: "AWCwydi--DEKE4EZfAgyff0sPIHaqz8skh-VekWaJblEWQqMmNzzTo3PhUf3KCEIpI9CIeCnX3DDkZIPu06fOsQxf1dr9H3UOy60Pgxflb8IDmxYW7dWTM1N5DkzNSHDP6aZHi_RdiQXDG64fVej55MSTJjj1w0SyKPgKFsQUdpGtgcYCoJV0ZRt40WCg8QCC-uLyE3OALEAOw1muBdx_O5iycrjnk9wecOznJJSDHmY135Aea3JK49gaEUYeuU35AYTewK5VLitruCmkWXgDtmWshvUBxxysBurspqK03DenTLKxKn0lWMrLPA5bUZmbH4W7yKy8AYYFtS_CIlyns9gEI0Knc50yREH7TXFrzUXlfF8AlhxlDY5KqpBGw1cVJl3FhGgqI6axfkaIgJthz-GkPfNFJq2H775xnS-hSAHfy6Qzw", width: 3248, height: 2432, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110131518233259372157\">田中ひろし</a>"] }
        ],
        summary: "트렌디한 의류부터 실용적인 생활용품까지 알찬 백화점",
        updatedAt: "2026-07-13",
        highlights: ["다양한 라이프스타일 굿즈", "맛있는 먹거리가 가득한 식품관", "패션 아이템"],
        tips: ["여행 기념품이나 소소한 잡화 쇼핑하기 좋아요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tokyu-dept.co.jp/sapporo/index.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5003881644452098584", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%ED%81%90%EB%B0%B1%ED%99%94%EC%A0%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빅카메라 삿포로": {
        photos: ["/images/sapporo/info/shopping/bic-camera-sapporo.jpg"],
        placeId: "ChIJnYs-5HQpC18Rg-QypTLyDco",
        placePhotos: [
            { photoReference: "AWCwydg4S8WzH_OMBpqltE09K6EtMwV2jdHo8kg21cmhbJFFASz52sJNDxyiw9agjs6c7viCFPOgBUNawm8fyEMqATElizqKC2E4QuuEVkwBrM_kn_AeRUxM3zu1_H9cMtIq9Qyecs0rAO7QZliIkWeT2sZT30f2ZzYMxVi1xD9D-moCmDCoHuqhQigUF8HmEPU9Cugjjoc2oxLsprQSruPoHqeVTLkvypRWSF-IiWmSZhO4fxLe4efWdaeG0ZCM9CjZbs9gVESO5UQF0oX3uzSC2eYgBgTBSRYkNRA53B8w-WE_6j-AGM5ZzmO8allSwILulHWOD2rmSWmYEyEbblziDOe73LXRYunZd8fgJ86-eFwPXQOzakE9R2CYEBBL9AxHdXJ1ztnXTfQIWDBWIof4bX_V6_FEkczd-OJdKRiXnw3wj2Ka", width: 900, height: 760, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100249615383796725875\">ビックカメラ 札幌店</a>"] },
            { photoReference: "AWCwydg4PL_7YevwWa-7jhlmUvAdyet0K598_4393vZbxA1d2N_tYb8257C1Ec6kdWENx9VWyEEEkezyb5GMMBWyv9sxjqpveH4fADjqJMq7qY7FgdX5Htd0p8IuccZJ2CycJ4FffJ_w8Uv7RfFZTSjlfNaJCspdkh5u8NYJr2NExbhqIPi6Uqm47-Z9ny9aYCxQ9ILN1pM_gmICbZVRqeS41tM-T925TDCUu29gE1nt9sFP6BguZcnHy0dYzzR1Y6o-FzIVscM2OXgYhYk495CvHt4uz4W9ZLv-3A3AKc9Ii0LQlCAY1fP6bnn8O3xjsnG-ZBKmc_PmhH4MIrNWedV31lkxsXCmj99UhfymOiEH0bUKkk8-qDfidIdmOE1nacsjprC-9k2en1Oq7UUUTIUZC9MmIEV1pKQs_98QmzKe8bmJMYOQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102804975164920401307\">&amp; 9</a>"] },
            { photoReference: "AWCwydgE0bNjrM76c_iBYviPco43EuhJSArWON13ppzclBNWW7ZiP-RN_e45MzpOqJ_M2aZ93tB671Sa_kZ5lDs9svQGABF0Ca0YHgPGsJi9e-1oLIzO-gXcDLvi32Xh1BvtTiIlpHJRNwrbdy--5DjzVrJgDyAPHg_gmTkaaw5DpuHwFzkXQuN1BZv6CfoEGZ5nUGfMHZG3hgzqoIajkYKmN8rWBuya7twDYEOPjdp4sgrX1v__YaKJFbhEdMpU0hGG8CA-FoUyOVWQyHUA11MKFDHsFczGK42xaqvA8paTcq5P9IScDSPKZDRKGY80OgfcfXP_1Pj7hRCe5l8TalbGKog6sW5AEDnzVmn81bQl5RZmxWXmwRqixKT3Sok8bkitHOFiARcz4_fEYcrGYlrhF6T_Iz5nip3CuZxlUAhOrASsRrXaBTVJE5AaSh7nw1Wi", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108073422086280964124\">HSIANGKUEI CHAN</a>"] },
            { photoReference: "AWCwydgjYleMjYy8io3Iv3m7ZTQsJjAEskRpQ-FlLaYLnTctZDWhkp0cIRSsPMpCHiclnUT5iIkzvZSZtINwqFswtELeRUUp2wTvmzMSZaO5f3Uab6RV2kdzWSY7pQwQtBUJMqT-CtlsgdJRKlsI065cZm5zqQTm98AnpbaIo4J-HNAIRd1vIjr_NaHsFR8eejss1zlT6KXU1k2IQHYxIPvkWpCidvWDXmYbJHIQQMyVIYJcidBtGeAgp0aL_cmro6JLGv-8T28FAzbhkowsRBYZ77MQ6aZiUGzvM5rvGnjXDV2wx1-JyuI-DmS4F7pAzP-h1taSHhVhGmGqAmuCZGUCOVLw4cu_SQ78ryF2NBhMf1Btp7dSWpTRk9AIm03RIk4VKwBY-0R793rARdOeuMqqp1RTrSQ98VEjP2Vp25B7o04fZQ", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105282101018990967933\">Peter The Rock</a>"] },
            { photoReference: "AWCwydhJc6v5q_OkUEsijCcXo_f4ZgF1vksEIePRvXk2PYaQC2swcSRgXJM097q4jLIHWLbBZNzcJCFDvAk92Pbu3UaHJV2EADTKMYkgAFpz-0dzOL3LYRA3xWGFXQd1D4EmUH2Ji0YMrcj5XzK7llH_j0uHvTcxt0HPMMHrJkVAwL865zK4FuLQPLVpfn9Y1KOxtyIEKvLEv2JQeHFMXjHigM_zY-wwo8sxOEInYzyCfPn1v_4XPDzHP_q7YTD-m9vXSS5vi4r4ryoR3v5Q3vNIwlAZ8gPnVggQoqxH60sENE_odvZ4FfeQFYiyEkS1tn2tCBpNzAUC61F4HRFIuxXXkMku5ZbdVjNWBi16-LygycN6jlPADLuEF18Ojvr733kTng47dawAMQUMjdCxzI72zZ-cudZoIKkd4f9Mi7Nns4oN5AoR", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107247210114509343371\">P. Houmpawanwong</a>"] }
        ],
        summary: "가전제품과 카메라 쇼핑하기 좋은 면세 전문 매장입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 디지털 기기", "간편한 면세 혜택"],
        tips: ["여권을 꼭 챙겨가야 면세를 받을 수 있어요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14559559469692544131", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%85%EC%B9%B4%EB%A9%94%EB%9D%BC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "요도바시카메라 삿포로": {
        photos: ["/images/sapporo/info/shopping/yodobashi-camera-multimedia-sapporo.jpg"],
        placeId: "ChIJpy45uQopC18RFQIyzV5TCog",
        placePhotos: [
            { photoReference: "AWCwydhqpeqqOyHntkwnUveA0aD3JDQLBeXF1qsevZadzjuZjCtp5VsSmQ1GG8X2Xq5T1RiA8dG_frZbx3pD6bh8JPm6p-po7uLdrSzCckx3joBu1MUICwvzDi_0LbU6FfZgZxEBnBL7zIL3zpvjn7ObJrDslqp78CYOjJkaUdkO7g8JQTm780MtfjYjydkDfMjljcd8xe8uH00tGTOnQ6bFZT_aACoPUb1bmgEYcGTHnzzLWvNVPVXxMJwdZcAlY1QSwmuHDLmR5S0Ib0gYqeJYdsyNUkvdK6alXJFIn3LocL-LK-giBxo-djf3ODWWM3G55kKI5c10pZF8cFBNwqGUXHuriYpjNhHBfpdJoi6E0ORsSs7X0wCUW2EF5TYgfZZN06ySQwkz4E7CRHvqMvDndj8mj4m4g1fzZuVyNyVRdzqKfA", width: 3600, height: 2401, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101613009396753261907\">ALFRED PHOTO FOUNDATION</a>"] },
            { photoReference: "AWCwydhYm6uuurLpthjpJcNlGbrmX8UH6VsDMjsqjtVVaQDPXOCwj9nimRccJC_Ztp-B3lADW4SviaaGkppcnYPmEKxlYattOlrhEa6SA8d2Fyp4BAviquIZwK2QTsYZzpXwIH5Tr86L11JALZlLDJPQnbMFUQTeuqBYyN0W0Wx9ngWDiSQysUE0U_uUuKlDP9N2aJ8g-ThAPVbO3vNGPwD5b5nwuue_3RYlQ7JE-4K-PlEuP2eFNTNIHywFRTJjhszFp6fdRBwVk6x92DDJA1rQIgff81CQVdNmA1lOS8EI0TcF-ocxAgx-k5s8g33_aryGLQaIuIYUf3jnFdiE7ZxudO64S__DzZVdrmMVgheoy-4GKxqdKyb8UpdV0n_R2vQ0X82-mJf-_Zj6DltvGLIr72mbXfASpH_-fYKwWur3VW4C1CxyuVlytup0Rl16Zg", width: 4032, height: 2949, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116563313216362290816\">Post Shine</a>"] },
            { photoReference: "AWCwydhlig9EZue8C8QfaaDDt-M-C63Kg3TiA6fXSIiSXUyJTNvNkRNqf01_WbTSfUDhvVZWhCmsT1ZZ3rxZUzd-4TH2WLOkY7Y-t2S9fZJb_4ePzrrduas7FlptphqQWvCVXchu9l4BPOe8h9GXkj5vXxyzA_rUayycyJIZ0WQBigkJn4T-QSQoY_esaOr2C9uF9L36M13-ZeZDPVBIDnJbMnDmnfhF_SLlvVDqO6oSlR7GJawjBPE06qknxre4UaK2MCKEeus4ZdCUQ56f_vyMjzb9k9C5q8TpfdYAWFWRt2lvx8FlrDnPCbWYABg8Nlf2WiTzhR0svQG8kTxvhGSRx3UXG6N_8laCnwMMtEefJcWODgPldKLUp1XH98EXoRxvShoozP-ChfjMQ4nvu-xGR_eZnCF1ouf6IlbCTHv6i2ljPwo", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114836208937296755336\">Yuki</a>"] },
            { photoReference: "AWCwydj6U7CNf6CpKSGZSTksJF73MMgfLwxJFd7dHpPHe7v5B85LfwLfS7dljYzt5XmktzeoV3RRq-MFRV4iJBdi5MFG3y9x0ZELL-7gDmISK8AjNTNLcIPGU1I9tI_y5onqnp7IdQxIK7yg6sYCUnUA33M8F4Nv6lSh9jgj-ceZhLynfH6_quwnYkqTUSkkaIrlej_8nOK-Ezun4VSeTG3vJcT2_MNDvhvriyJ3616oMB8Y6Zho4s7oXXVYpUuipKi4-aVBlsYOU0qxV4ZRlj07fMc2AdtiCRkyuITdHNmob0F77Hamh7XGZNwNKX3Miptr1V3UE0kcCfzmsomVPcfy1w51ss8-ty_WSrfsw7kSEmb51wK4YbcgLMAR23K-teSsXANEj1wQ-gR648z-0pkz8OkfINkj6pePywTIChGdf6gIvRPS7pJKzUO9lLi03hMC", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110600846987994379956\">Photsavat Saengchuen</a>"] },
            { photoReference: "AWCwydiLzqPT2cwiuIojk6vnSWkHhf4RgjUYLE_F4URHaTvUYuLwi1nywqHMzgG0baErxKD4Muqioowdzjl4_RTX2_C-kGVgoBabiZXGp8hD1jYnulkjdLFhYpXNWTZvIsnTHiSLiCTsBnJmdi09tvKf8pqHsXNGyzguwNcmgLyPfC_yVRWyUJjIoRfduk0HEVx10XBrrAEqu1MIvv5hPrqm6CNCxihMT1rBiwlj-fYocXOhBytDt6BwJvNComg3SJ2E26Aa6jH1kphiNj6iwMP0COGVyxHNW1KDumEkkBF6zYTGB738AcuVYOkgC8DN2Tv4qrxIhmRPMBkZ5OTdNzkq4MTjFtv8kbiP5_Bg-5y8qubI69xKcAEqfaDWqV40tr-ImMxEkTWHtqmIahShnOiARqIFHUcNsxzC07Ukxrm2s4agtrP-", width: 3060, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106304838678430648678\">Velochrome</a>"] }
        ],
        summary: "게임부터 카메라까지 IT 제품이 가득한 대형 가전 매장입니다.",
        updatedAt: "2026-07-13",
        highlights: ["방대한 게임 및 주변기기 라인업", "다양한 카메라 액세서리"],
        tips: ["매장이 매우 넓으니 미리 쇼핑 리스트를 준비하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9802739205559943701", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%94%EB%8F%84%EB%B0%94%EC%8B%9C%EC%B9%B4%EB%A9%94%EB%9D%BC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "돈키호테 다누키코지": {
        photos: ["/images/sapporo/info/shopping/don-quijote-sapporo-tanukikoji.jpg"],
        placeId: "ChIJYasDYuApC18RKhUT7I_KxDY",
        placePhotos: [
            { photoReference: "AWCwydguvTnjfuAXUt6cHjBdCqX2MKbSPNCJ1t8sO-RmTFtXvTi86qW772NgqNRRwSBMogQpp7DajpIYQ9x5jdohYf2bV-GclKoMsxwbgWofTUbV0i3Txc8rZ9lTFNQ8iY_48b890JXvOwn24xu62BHdLCVVbf8Xh8Jeio8k8VlWrw--NO3gh3OQkmm3vFlVE5j6_dEqU8EoAxwxRFrPY3VlrV6v5QMci0dg2m0P4SRdYzvgcSQ_rUsxMcFdljAN_KBenSvcJd8sfDgEravIK5n0eJ5B-Sd_87NGBtSSKSSkEAdtJne2DfiJXmW-2N86GI1_nG_9egckq28xXCZSVRAW8-p5SIxvlJNBIDBccUv1aqEdiwYQhnQeDouDS90R-R3jnbZWqYTX90flxY7Moa_dKVr1mVcDtj-9eD8ZjZ7VS5tkXA", width: 1000, height: 1000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104706175064655439823\">MEGAドン・キホーテ 札幌狸小路本店</a>"] },
            { photoReference: "AWCwydiJHAd_YrCNvtJeNVkA986vi4op6GYkXtibyYlFdWrD-NZZ-a5lQwes74o3mZRFqpYaAsEvd0AXDb3WAyJ032AP6wCPmTdiASS07GkfiqWIKJ9KRLCFns72bfFSXdSnSv81cBPHVc2N6gco2_uo8Uq6gDGz86Hfc4AVV06p8z4RgHZqznDOy5MchlS4oio6W7IXE6j7iw1QTgegT72QMC4P3qd1oL-OnADNQGdXkShqsDXNvClrv-K2ftrkYr_ws8fVEeCxdWXf9slAadio7OsdpfB5J9GrhwiU1uvlHDix-46-vvuodo3E3zEzxKZlhZ5rBIBBJUzafvuSI5M8WBT1-8voXk5Lx7u5284yIuDiwtxtO2tynDF_viONvVlimErfMi0kfl-5NEQk8BuUSR5c2X88lLNyt4-PEJqu_yJuERm8xhtZHu_o2PyPyV4p", width: 3000, height: 3954, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106168807019349999077\">Woori collie tv 우리콜리tv</a>"] },
            { photoReference: "AWCwydg-r0FRTnpThmZMPPh8o6AP-XzlyBDZDInjYf74EBdIGO6S2mr7zIh-bp4hRofmb624ucJ9_9Z4jKGJz1aEL9Ku6e9-W2Ge4_g2wjRn4uepqyS8wfKOtl0_Eyf2BL05i8pMnO7v8xOHwUaYXjGhp0OT3pszxtFl-rNYV0L6GtEm5_iXz4FxAHWxUoLbj_0zbtnqhzhzBUMamM60tNPzDfucD3MS1T5i2tB_2L258TxqpOwI-HFfvUk7iGVzyXf0V3clg3pecmDRpfcLkZFMgrRkMiDEIgyUfSdxRyx13Fu2tTTOTlWsXNoFb6wAL6shoxa0_efxE-bCTQzbMjIdSkIzuH6t0wUNMx9ksC8HuyyMBnC4TWy3HI6cyudsgKO2vGva0Ta78VSKcir8K9c3AYNixKQ4hIM-NpFW9WysFymDMg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114379603073301305315\">Yen-Chiao Huang</a>"] },
            { photoReference: "AWCwydjvffdMNa5C3kwjeDnqaJYkJ9oSDSW2b71lqeZ_WhpBCc9rY06lgyTZNqbguBXZmu1dO8XDWMwDHN27QBe1PucEI_Qd_RaPVS-hIqNLGlLbeiraFbhS2D387BuW6esxrMpIYWbHcLXZdwJIDxzSy-rQfbIb-1tmJ4E-2CKy8N3L0YFopzai7577QWZVarlO75d_pP24RxO5YE8LSr_GGUn1DDVWxh5NRqQhccNXPGF7UjGVolWNLEW8ZhyvUTmoAJF_zJuqLEuHE62JyTx_gAdvEPp-EyRk0fffU9ywZaE9435lx36ZICI6pOEcd4Ltbws60ov5p5amDmuCB1Ku_DryniLVrLrtLM3WCXdcE7r7EzpELpZ7eCMAO1HuS8YdJQq5Vbv-e_q_2YG0X4Y9PjwI28l0unPo0bfXdCZG5cDtuw", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101613009396753261907\">ALFRED PHOTO FOUNDATION</a>"] },
            { photoReference: "AWCwydjCdrHRAyuV4kXnIYGaixbL7BIFUMLUvQBTJ4qLf7eftur-C_I1hDbKLcl28gqG34LfPDfFxOwSf1x2qxb-aXhAddASVNWxud5gbFEokx1GS-D4e6opnY2ve2aO-nP9LDwId0fH_B2P8WUbDswcp6zdyxeIBWEAf2O73X2mk9D1m81SDwrT87GLSpajGhnBrxkN1LAJxwy-zodESPRyptFgQDYdortbKev-P3P8BdyEVdpkyuxowqUJMKkSTYDARRLOeldg5aL9LfdKXJSAeNkJSA8Q6bp5D5Vv1UChETE0Sz3oJcj_GMNLsonz9Q-PzIWM9-lj_F6kFo_3yd0c91UiWmmjqQSzD5TyQyIDUnYixxdeni1t0hNuwahNrCLt4FaJC0TZ9f4IU2HHb4AShu6w-l30KBqq-q2JEhFLENqXVXAF", width: 2592, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108037174731044052067\">aki aki</a>"] }
        ],
        summary: "일본 기념품과 화장품을 한 번에 털 수 있는 쇼핑 필수 코스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 일본 간식 및 잡화", "가성비 좋은 코스메틱"],
        tips: ["사람이 많으니 여유로운 시간대에 방문하는 걸 추천해요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.donki.com/store/shop_detail.php?shop_id=467", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3946501892973204778", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%88%ED%82%A4%ED%98%B8%ED%85%8C+%EB%8B%A4%EB%88%84%ED%82%A4%EC%BD%94%EC%A7%80+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "니조시장": {
        photos: ["/images/sapporo/info/shopping/nijo-market-sapporo.jpg"],
        placeId: "ChIJCb2qW4IpC18R93EsGNFraJI",
        placePhotos: [
            { photoReference: "AWCwydgiTAWfxVvMTks23YPqM5TOc9G24-X1Xguk88tR5NzoQjoNQn7d3ePsy8psk0JdHk42LBSEty7hbfc_1DoMWzmQxmb2AozTzYXawKJrAu4hiy8xPfxAhQ1iSci2NxAwOKmc8oBp4QaI5bu3uOTTtQ_iBxSPsNU-Let5SDDgI0iiob4ioMwSxVOsxMRb6Iy3tYDlJsOyDl_plQiwnW1rdElZ8uISQc4d8DqWBZRcSBn-HTyOnLq1wg5DSAm4F3Tv_wjdvkL69ZrKUX8H_NZhc8lfXq2kovXlpALUxZJtkPRxGIwM9qP-htKLvsQaG0leQEK162vnBTM3udkrltJXUfj7GK8o2cF_u0PBJ-w9CuJ3WC1tqG0noVOgvPBJDIcs728Ozoz8bxpyPS7GvCkqEHNzpOHfeo0wjSy-amkBTFA0_-7YWFyLCAVhapaNBmQH", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110783115515402134895\">1977 h</a>"] },
            { photoReference: "AWCwydhgVN_QWnJ4JV0_8lyDl9cnpe1GyNANkDX8P-Y80pqZGOWEic9K5lzDpd5e4xjN-6dUiGUTsqwv9YtwWrChMCV_PW7s5DsxMzb1VxOxaMx-Ji0mrcFmTQoCUHIYI3GgPQl3hKHkzFWijwZRTnN06xOJQYP_aQ9id91wDpT6ZA2m55arSb4XuDPXXllPk0uReuHbXavqVLTy5ZNiNSw9o7ybtSl945znYXxYJIGqlrSNPfauDlhfsIgVMWSAp85P6tJsRSx75Zek8-8PnvcvACQD3hvU3hZBmtdJIcbBIp56k_vW8cNGyB8aYQR-wPNZIr2GJuW1BFfOJshCHavJYD0mcKAXkpvb5_02wRPJ0xssuj1xGlJ4T0TURBtQb1ByUXk9NOi7bfTbjFtlnp8D1dASxdVGEpTJ35FfviGfhWqYH_PmEw_UdtulVd1QLQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110783115515402134895\">1977 h</a>"] },
            { photoReference: "AWCwydh9aCzzFNyfAGCaehx7AsfO3qQFphfcXgt60hfW1PYKw3s7ix0o7KepSbj7L86j2vVLesGtgR0JOLLyfCPE13IUbfqxlmmR4-Lp-pWLjnuqurrk9mFBUxQr1Er20FvO-vX0S6rgjyK5azEMNH5q1pyccyLiIMMZfJ_W-yI4ikNLKzMleGQyKhO5l8TYjaPZZUhXzLd_OCR08ic013idcQ13uO1flUj0T5wKPG-1OJZzZRBmwwAnFRtkGNSaTj3Hs4BSjrlTkN4_3EBzCXPCDbf7dtEvO3C3a2sqC57OVhONryC69B_6gvGTWwwW1Cy2i2mr-oUmAOC2K-OzKMBHBmeACsmpCH4SSpy3GyxnUeMi0oYMEyKvKcq4FZe7CpL2IZDHAKR3g-tBmuUKrspi-erdfAospxh8xSgG3pSsaWWp3Q", width: 3264, height: 1836, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106597901812190615177\">中西充</a>"] },
            { photoReference: "AWCwydhdhBLX4s5egtDuNP53h14RdOhA4OBzaKCqwm9LzcJDMsHRFwZcMCKEQrh6-1008UlJWcaJBqKe01pAL5ngPC8kYcsOlFKXKpvH_AJWHaxnzcDjli4TSJvqO1NtLP1GAQ75ekFY0Gn-xlElw0-ABJyZDLPNR9P8sOhE7GdPAW7_rhZ78BJK6Y8_C2d672JOmqfaSaPCUjyj0r48QQ6BuKavu6qxuGUIlHurUZfP2lXUkx7KzR_EhodvSNC3-kSsmKWXImjgf_cYBq-Mrx3kEzq8Fjx16OeeKDdX0E1I_6gB8pWB_9AJCG5ywquvU2RV-JyVmk6wSDEjVgMX3xsrs8HXhMwDLYlUVGV3O1gfz_ZoXKF5lmKoNz03x1f5IQZXqxwrbXBZxTKKswgOeB0EUVO98fshb62nY_KJyMJ_UumUQ0Bu", width: 4800, height: 2526, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104245883093860452729\">Kam Cheung Man</a>"] },
            { photoReference: "AWCwydgQz6c0wRf2GCaEavjXmTnOtLJoo4zCPmIn9gIXtWH6aEkPSYDjZqMLtX8rmMaXCPCjsJuR7R4lPjq-_ymwtVAnIljOwyTA2WFfKA0SjEw7uAfLNnPJzkNXu9gfxmz81S9jv4nhRoWmokJMZa_8y1NPoXjedq-jMMs9gAqrqMES9GYSwC9cGghTY6mwa6yYqcgO6uJpNYi2YgOj3TN6nxkFvPiZsXwL1bVb-dSl5euOdWdF-FUjg8jEoX7zCz3mlxu6CsqAvd_2r66geSxLRpvPip9J0Oy-BNcJgmw4Xx5CWB5lo6UPF4AYQUCH_6gTxPRugTkgDlmWD5Hn4qt9gzmue6m_NUuq7LeAJvcpyNItPl8bwQHSJBFK-uqTj6cR8UTl91tP8gwZcQZ1lxFpScQb8XcfbPjG72MvPCxPABAKIQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110801523317908416073\">pipat lositong</a>"] }
        ],
        summary: "신선한 해산물을 바로 맛볼 수 있는 삿포로의 대표적인 수산 시장입니다.",
        updatedAt: "2026-07-13",
        highlights: ["싱싱한 카이센동", "다양한 기념품 쇼핑"],
        tips: ["아침 일찍 방문해야 가장 신선한 상태의 해산물을 즐길 수 있어요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 5:00; 화요일: 오전 7:00 ~ 오후 5:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://nijomarket.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10549800672913289719", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%88%EC%A1%B0%EC%8B%9C%EC%9E%A5+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삿포로 장외시장": {
        photos: ["/images/sapporo/info/shopping/curb-market-sapporo-central-wholesale-market.jpg"],
        placeId: "ChIJ0SAA6q0pC18Ril72znQb3eE",
        placePhotos: [
            { photoReference: "AWCwydjxzqbBBhOa1E0Zh4CPqMjD97QmRWP9lQV1V0DjCwlTm00bYEtXUHy0KY7GupswBuKwis0dURn4wsGmBLXWlM8BU3XFw7bXm7cIyiaPxdNOYTzzyVLAyRGfNVOPdmpPrj_h6-XH_q0Qt7EsFaV6QwGbU3-zM7pjKFrX53VG3kLgIGKbPoI3363UKTs4i_X0EjBmY0DnsHBWbqPFzGKllWS_CfRDSYclCF3XhLiL3zxprptVxz6e3sdBQeumOxfyUfGePz_XcuKfoQaVE1e2Oz0QnKQKCBu5G4bLLLQbNudVIFRjZotxOYwupxW3Z5zqrphZ-IVnbNH56nf4xjud-JXQFKnaZIisNXKauB5IDLs8w-g4au07ErmzJo2uRWTH5FwfoRc6m0K2JvhUqb4v8E9MEUqKsGGUYU45YMNNBHw-lA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118260352135221030591\">tapo22 tapo</a>"] },
            { photoReference: "AWCwydgYYOY7Zh5RbQYiCtICTrjB_62VWI4Eg9OUBdBfDhU8Qf06ooDvYhF-FUqjo8v6uPVNgc9MrVtGpi_AaX4aYgqenS_9EbrvJkjgWx_Fq7M-D9Xm0zUUv-EYS7JUQVM_M4QJ5CG5vyKmMNvbdub5XbcdcywG4NQ7NTnGQ6sIz9ENzrKTkLgHs0V1xNrn9jjlrfcUM92gXLYht-MXduDeVg2nyoDzepJhD0r8-fA5FLzktlo8MmPvy7p0OV9s7y92y9Rdbjrftj11vplnjiaQmx8vPXuo_G1hpYZXUrKhwoCrjmdIAYy_np-6MiBHhsuhwgTv4DmtG-czpnwE9a2ehp3Al9gsjd4S5VKKJEqY_J8ZftZu4kt0I2oz1QWURGCSiqaNPuC7OItNzDkhFtae29ee91MdBy7-9dd3TeYqgpppeQ", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102442932443354377531\">matsumoto-pota masa</a>"] },
            { photoReference: "AWCwydjuonFwdYM6FfluJF2rVLpkrN-peewmWjgSomkQGqhQMLTe2DU3BTSZGOKpM0S1Pj1Sqflc8bh1ktw25GeEiXR7elULC_KuGfWmK6Wd-_D6hggC7hMtKljBCGi9gqaHZo3gR_S7c-Ic2xA2sSzQKS_K7ybd-HHeSpQ3b6WBxmCKE2MkaqlYmgp9VbsvjfyiTEnFzymhbq7tRpa0UVosViriopJd9MkbAHGf1Qk64eNvSipygz_-GevdP9WXsjSQ7fUl478-byoOZd52VeJXKVnt1djNTSUwNwV7Y1WyB7MBbpkbNclI-mWUGFjpzYUa1Q_-scrdp_j8mVXtPNakms3m2UCyIkh6Hy4MaguhHEKd9TG8t66HkjsCA9sQmVgA1rH6a8eztHy9ZEScg0QS5_DF2Ff1O1nI1XCoTOiysA0Nzw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107839510671163148997\">ぴろし</a>"] },
            { photoReference: "AWCwydgACVlLnJEiV0N-sZfFvUrnPhoRMb9t7iYu6sqXIEa4kKtQ6fxOVQe1gh8NQu3fBxUvJSZowcLBFPX5b8Q26DUPaAlm5LZZIuUr2s7hPO-uI01TE9Y7xEkDw-akpiEt4NGPVA0PLHJFbXksuzP4gsM_0t64RjrBuNXungHJLwT9qxjmalYZ9hy7GELr3KJFKko0L5fhAZkAsps_d9POkvjSGA9Z-zOZQKwytfoi3dDWH5bb7o4lbpE48aFeYGPcGk5appZp2uo7GPKYz3s-62Ux6Mt8h-rrSEqT11cgof_93z-L99-H6EILSoUUtkr_edMp3jhV6c-wxIfcIsS2GVTXSjxR_qyDK8WYg7YNEzOlvmxaNzPNWMjWwt0xCl-eTpYG1t_qvFrfWnbwt38k8dR2ZkeOiNVYQGTHk3jdKAYLUw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107839510671163148997\">ぴろし</a>"] },
            { photoReference: "AWCwydi14m84ySJbLZb_4L0GjXCzOO126dKB6AZQRTAzM-U-G7r82eqSV7IYG8xfee4yq_UJuhLc8NIDrLXAF_KeS71b5U41CGhHbEf4sSAv0NRHrip3Ebkj4n0WT0KymADo1RIverIYvPHTG9vJjlrPyj_0HdZSY5LTZlIo4DhVCTvpk7j_UKLzSytjpDLnFDt45zeGcHZpBDhfZCbIa-MGr2UmW1Y-oec3EOTY9mo2f_REv1VTmpZxfmGwGzrfw2UsKnGvh2ZTTFcYRTFY8ia_sgIInQAh5dduzmtnNVP__OBBoywHgnzAvui25DmJfH280Opwhwh2KNVWmaUsuNQDBy3P66e1It88qv8hJ2-_Zr4cXflhBz9Uyr1KidowLHJe0ym2KsQPhBqDk-RDphnU74CSYIUPjEYXSY6E0XDyDg1T_yK2", width: 1024, height: 768, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116413501875882086764\">村上由美</a>"] }
        ],
        summary: "대게와 멜론 등 홋카이도의 제철 특산물을 제대로 만날 수 있는 곳입니다.",
        updatedAt: "2026-07-13",
        highlights: ["큼직한 게 요리", "달콤한 홋카이도 멜론"],
        tips: ["현지 분위기를 느끼며 제철 해산물을 골라 먹는 재미가 있어요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 2:30; 화요일: 오전 9:00 ~ 오후 2:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2704552363625031114", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%9E%A5%EC%99%B8%EC%8B%9C%EC%9E%A5+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아리오 삿포로": {
        photos: ["/images/sapporo/info/shopping/ario-sapporo.jpg"],
        placeId: "ChIJf8acrG4pC18RwZ2bF1j9ChA",
        placePhotos: [
            { photoReference: "AWCwydhIc3_nr1BeO72aFvVJFXNXs8O1KepqtTOv9SH0ykNgvYKSU5rjdogjMxydJeA6MG3OXezLUmLq8B5Yf1z3ZnHwacE-BWDNYsxCIaZaXkEQwRbe3OswdGTzdRu30_ISjxpuDykxVAqZqTEinbkuGHxzfsEt-s0YU0JwDDL4m0GOaoE7KcW0NLtwFLqfBosa9qgoLevPnHuyngXpAqlm5iBsZ020l_7KGkW_ZqvKTUZ1Wc7Y8qVhhwLt-kKMW5CEdDRu2ndoEIVHYugCwCJlqYD7VhiYgjwI4GvzlfKsH3OMCArIN3a0Od6JV1GmAj9SbzxacbdGPWCRZUrzqEESCZ3PXH2qRoSHd_GoXOFn3b7qA__N8K75hPtqc4toimOHCARjlzKlib7vmMJ3ieZkorpiJOo0LVKizvdM4guaZkgS834P", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115145065162192386241\">KENJI HISHIDA</a>"] },
            { photoReference: "AWCwydgxwbPHu3pqCozcf5Cco_SE1G0y7D7jdrZW_wiQEI1xX37E-_gneUL6gX-GK2yU163Opo1wSvEI9U1epXy523BIQhBh0WpYGtRURUZpV-SFJ1I9nB8J3UongtxZFM83q68hSAQheXYIZ_zfNiGD4JQn3jF6FvG6lGSr8VJC9EuhihDDpRxZQpOqXH7lRVrcsrCNMSPTs58YgT2TNdkp2GOVeuh6h5oG6YvV445kFFtFNQriUIq3bo9-lPZ2rn3StBQ84jfzInpmn1A_f4gp6_3qLRnHORKeqDickdrqOS94UNR18ZGHL_0BuJJ0n-ZXQLawGZspSAk0soCM75A1uPzgmAV9gZGAjlvVRG2K4vS11UTiLGsJD2BfXw7iSOzeDkTKz5HEsa8lN15ALhCJiOk8BPC0cqlzk9_XHlfyZwI", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106390924655550657088\">TKR</a>"] },
            { photoReference: "AWCwydiAgXGUjvjJOfdmhHP2KfMuRky_SmMCaanWzzR-BnTKS0cOJ0avxtoKqsd-m0IFX2R4EOgZzWmaLGbFdMGgTOYsQpGMo0G3NsLMfWZQIO9Lvd4crlqBFu-_QEKWzLORy6v1Pax-fxWKW_0RvyYjUEZ3LJGz3GIAV2ylrY73W3ky5rG7Gt5QLcQKPfn9XeQ-DoTI4LDZATU2AzfrTcbP7DoWHVSu_hYiEjBzaoxZzyTnBx3m0_i3N0DjiiqJZSz2QOuqaYVlAY0CoAq4nDG8nTYtO7c3qBiIF3rB7fBjPSOxn5WnbXFu0ytOlRz2pWQ2DjtvGle0pwXobtzyCpxJuX93qQycyHsXM_-9E595jsVtM7bjquqoDlpU91rka-b3mFSQ5K1orlgeHZUrncmS4oj4_E69Uu2Gx0bVvS3ZGnRSpXbU", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118173862796589750288\">369 Koujita</a>"] },
            { photoReference: "AWCwydgjQIyYjxHkEhOsNYMtxYryEzei1EqsUpI8xSgPCMO8ELKOhktpafHpFsTmtfuE0cgNRJ5y8Bd5ircZ2gE_NUOGQyC6ugmQ0RtmX7FXoQrhDbrBwCyftBg1kevnqY-5Olfmb5TF28vYBdB6hNI4uVQtS_Yew13D_QM0wCHHhRztJw9ybzXtW5OnQxqRJSKJshs0QCGemqf1BLg7Z7LpOMAfOxkJJdaNxgE_p-0cAysDfJAkfutMjtkWgPtZUlUhVaysYvP-gbqoK8d1FE8YxPhKAkEQ36FoBsy80Z1hBgj7n68gOqOG1s1jV33n2ot2VWdQOqmMQ7HQDgBE1LwUi8bPE4-sKMwMK0wOLnQBdHCxfeQHo8oI9Hc_ouYY5XF7MlWx2QqsEodK45kh7xMdaI9lD_MJku4vuetHxugLfuxEZgU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113270989928894743412\">WannaTour워너투어</a>"] },
            { photoReference: "AWCwydhNg7TnfI6NgE8VW3iuIbZlM8C4wSdkcDAUzgfJZ3fCItlVzKNv9C1yzrEyeCvuzeGC61w9CCN-ZW95GDbpiVrPmGd7VV077Uu4yFcni5aCdS4yt0F-rPU1npplQBY7RjIuRIJiJ4ivJbXWDjeXrBn8wI9ZDP9jODuYov0ZGeVv_BVE5hEuGyuxlYTuhj2oBMyC4LTemKebNW8-JAQiF1PqAcy5o0qVlbkewt9UeFXc_j7Rn-PNYmcpYEZm4RtFQyotZ8hWzNUECe74VhL9tXxYP5GKRJCRmugKlt_k0wXifERsSpth0aWLBn9aU2VD7bYj0I8GACCkvzX_icQcriJM_y-58Wu3X0NlPcfOPPVzS5R94umwP1uIXQegwVQXdG-mF5l2EHXfq6CMlT3PwFrebu9oYflYJr0C0P6CJOL1lg", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105717262801430511232\">Daphne Wee</a>"] }
        ],
        summary: "쇼핑부터 식사까지 한 번에 해결 가능한 대형 복합 쇼핑몰입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 브랜드와 마트", "편리한 푸드코트"],
        tips: ["가족 단위 여행객이 여유롭게 장보며 쉬어가기 좋습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sapporo.ario.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1156014809168977345", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%A6%AC%EC%98%A4+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미쓰이 아울렛파크 삿포로 기타히로시마": {
        photos: ["/images/sapporo/info/shopping/mitsui-outlet-park-sapporo-kitahiroshima.jpg"],
        placeId: "ChIJ834CCArVdF8RDYwUTJWGFe8",
        placePhotos: [
            { photoReference: "AWCwydipB34W0yb7p-3BT4Sgy0Ym-RepDmIRNzo0Bw6UPDp420g0_Tzg4vFBE04twC9nLk9FZljb1Xy04_b1HlT7vytDjDs2bIkPy_cYa9hlLjn1z9baDVW3QBntPZPO4re4ZNXZ6dwuH5pTDfNKeaLqcnMnUvUOfgMLy5SwiMYyI5BVo76CJ23xOBmTbGSxSt-8gmBsTnVMKZBNvGYK4myj2BHgdzitmDBBVcZ7GYjz2vvV1rN33zy5RW_rJkBiJioZQ9MVUI_jtKsDh0nV51eZ_NWCrbavl8PZWopDBMuzqscsLcDlpc3XHluEeewggXsHuwXsZR5ak8f8U6aCD53fQ6ObjzN82aS5037HNRykz7gR1jkZgIqpeqI_sWnwBFX_JTC9KQ8JbU4hDBVbVZa2ifYOvC144Aehdedg8rK5DkJyKcY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106988743811157332745\">Liao Ryo</a>"] },
            { photoReference: "AWCwydjjkkAfzcqQEQ-6aI-VAVc1nwhhfXMRXIJDGjo9SJcGaFIsOCi-vNNX5zFtyZcPSesMistMhy0kCX5zTkozVtOvBwqWjOwXgsSKFhe3jVBkQgAYFTYpMvAwcWtKV0JFr_dLCqBh0lQPjGNIvNBvRQOEHAnKJNzJ5GjQ_Y2OGc7wJ4EYGBsf1foYig8ffiy6df0iPp-o5_iPgncZres2fvU26Zie1NAfOQXZmyEsCK3mgxR1jHbfaf28JFa-KMo9H7ktoZ9D2FVtKdnmvxFTHe0SkauAVeA_W9jHVtWM-1Jkq7df8jV2mHC4E64-ySic2-4SLXOYMaqERsHS5mThZiuej5RNhlX3Xk8d1dgGSE13sV7sPw_27WrC15A9hiNRIKYy6KtuQNQechovNjMN1x1cIK10DJzgo4NSvs6XChzVhOaGaVVtGGW-DelI8w", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109463907179056603444\">david lin</a>"] },
            { photoReference: "AWCwydiibfLlwgcCv8k0_Y5sBOVHyiNHM7TVi_64H_5_fFpYfyVRmIsClt1mXSrIxWOkF9DVZb2-E2UzD4Jy3-ObrG8Re3xyG2ATk1O61GGA_rrDm95FaCuY4da302wviZ_iRJiyFv-7n_jtXL0mYdOYjZ3Oo0OOuuLvZUkk9qln8nIIStOC7D-Wht4F8sunO7g2xgjWNlAXpZ-9bqxKslKXQuTFb_uAtbkjrMm1VtosjIgB0J6kiydfoNk8aktg72dVSLJZnPfysmNR7clbaxBB1W9DtuG-co0-2md-4vdkNvBs8NZaaVY1cHRiXDz7v9OXrq2LmQZH4o_OViuIvYU6ZJkdXBDQiPv-8lZNWXWh9S2bCq68uGWKsFGaavTcohl2Gah54W1TdrF8Si_fCeszqEbzOMElfOJOWZ514wzjgxkvzw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109272743018364168458\">莉子</a>"] },
            { photoReference: "AWCwydgSB3-3fd3z1CCl_WJotmnnOw3y_SOUXwCfgKNfk9WwBVNox8t0hT1y_bHD0yLfZUAWcxB-6288macBNPBP_o5_FkDvdNVDMXJtM59OsZ-KP90zyHySQWlxePwSHDWcePb2Ah9RU454xBgZsLM45xGdHgIH2z1rmLChCx83JATWAmozpXnojmoQrHNZSpcLDfk_xeScaRWK_lNZcHmaHxaEsMzqSd43ScRLbGRgRySPPcL8__MWMR3AfXDWl1KdT17pwappz2zwByDI7xoNFdVpg2zJ-Lj2xJfJdYUVEoXJgowGblGYmoTfrcLyMYINnZDDscloB2h1Iyx76j1vnNYsh_k35pTONGC6TbNmbwC3D3wUq3Y6af4VoSg7ouFrpwgkiHz2H4ukkLmW1J1OH103sgj75qGyQGgl87LtGsKS-w", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103603526201488730586\">石川椿樹【札幌観光大使】</a>"] },
            { photoReference: "AWCwydit0wchbKIySAq5BaGCBMTupjCH2nNU78BqV1YykKwCnuq9SzCFT90C_e2VdnkEnYbfXPlWPuybfRxcCv9cROQGdeXvhfV3S6E7N-j7JoUPfSyKV6MmprxfUBxTAEsGl0Ksh5DYu_ajQuQCaYaqF4RT5bFPJEbvkL9X9nYcFBsJ7cJzWDIk_leit3H1QhWhI_xWK5X3_QEErAXollNKinnxJYrXj3MxH7k5WynrI_9qUmcLzQfPZypShB-SHjSNOzAJh0NzP199BXU_FLQgV72LtX_S4o-8-aklZdyP8yS7VXBxfO9CSVEyCYRsqIDyh4ISbrgJ34Cuz7CBquP-7Htg4diEX6KYqv50fLjpfJrInCBT2Mgbm_z81QbfnoWXYQ8mZfPc1Utvb1RQmd5snH65cOen9lvGAz7xOuq0SH5-l0oH9t59aLFmHPYD9w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114670947450789952166\">紀興</a>"] }
        ],
        summary: "Mitsui Outlet Park Sapporo-Kitahiroshima 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["브랜드 아울렛, 근교 쇼핑", "평점 4", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mitsui-shopping-park.com/mop/sapporo/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17227823925360364557", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%93%B0%EC%9D%B4+%EC%95%84%EC%9A%B8%EB%A0%9B%ED%8C%8C%ED%81%AC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EA%B8%B0%ED%83%80%ED%9E%88%EB%A1%9C%EC%8B%9C%EB%A7%88+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "치토세 아울렛몰 레라": {
        photos: ["/images/sapporo/info/shopping/rera-chitose-outlet-mall-sapporo.jpg"],
        placeId: "ChIJc7hm8IIgdV8R-eUloIBXdJI",
        placePhotos: [
            { photoReference: "AWCwydhV-4oldEZHun_Xb-Tmad-FwHhCoBYTdLb8iWqfKTfgVgyTeuYO3GFseLRlKFgIW0lFqYXkQVacpPWDQWZRXAtd2YbOZrU5eZNz53UWk7LVcopig3MtGNnDcy07vaQm0kmKYe6-NZ1yx7uOnLP3NM8EaP7Me6VUh1An6ct5LknAE3OKqe3g8u8M4ZOtEbjo1zo48mKKjuZC36JDe-6V0j4k_aOv8F0bOzZ7kegvSU55HDhTGpVafwxOKpqEfr3WRnr3vobRlfzvOAQz-3nSVyel897iaQZAZVILCKwOGNx1I8-yUWOR7Ho9I6l5fOGs0mCu1e__9aJG4bHkhU2S8DynTFuE3TKB5O2pIXfZpMdCKccUqHot7Wah6aNr6-dTWAn5GfCBOSt-hr__89YUhOjPVEOBf4ne3T6gnZP785XlUg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106865706138026099642\">Dragon MJ (MJ)</a>"] },
            { photoReference: "AWCwydi55GTxHfDTlfMWxA42rGApH-sAnX4PNdLW8ZJtOiRmCcGwL4Pe_h9Y5VQdHj5E69oEIAIZT1qKVY-RFUyhyF78DoCW40A_VmOMtTdK20nRitoRRYX5KUntINp2z8FnS-pGUvANBGYD-xWTrrwT7C7RAR6x1a1U2L8vf7H29fCzCaxRK9MP1Xj1W8OfxgS25iTh0_ZAiGwnxu89U-t19TnKo6UyvbXqaqvleB7mVrjTz7Jn1HOrIeK3ciVGS77olGwJPurB5mUbFtgvLvuUlrZS4EeSZyhANGTmmDUWWok5vDLcAkeF1fgoCCY5nHD8gYIi16o1mCwbsrzlZYv1lExu6ykLGy8APZc7HYgka0ZxwD5HoRgT2GhAPLq798U4auU7nIot-OlY1MnFe94a3An42t9tUaXXnx3qgLR9wszGBg", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117803101772648913522\">Fat300</a>"] },
            { photoReference: "AWCwydg4JyNGaX2lTG9yM2PR3xDrxNoEFD0ixSh0L60Nu6NdVQlsWWBRIMstpBevfbZU53I3ulnYNgG5XX45RjmKIt1qN5h8HNV_vBwy-fDJJy6lqrnrZuTQiJxu-8PsaL9SYSso_01mCNb9l-1IxFqswCtJG7DCM7q-HG9n2zRsfxEuV6D_fNeh3iXhXfrk4s1y05kHB1RVUJZYHtIZrW2vZcvh5x0c5UR1v9_RaxYGFAqYlVllfhYbyf9PMgnIm6SPAVRS1ahyECq58EhTOekUWGMw5KOeO0clXr8IYu9WXBtDh85fVfavRQgFUsgq1W-27W_7WS0ZuyRPPm6Wzv9GVTiYBJAOKKCSYyxM1mTSZfRGcchC9olPd1xyQx04qTea5Qa6KlFp8otLZhL3sKJDL-AXcL_LALYcbuO8IdDVkVc1qdek", width: 2592, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111851550325133199709\">B B</a>"] },
            { photoReference: "AWCwydiTrPn8ws9P3UtODX8rDavtOpLcxY-YcySpDdlh80tOflgHsfkpZKA_UalNlMDFoC6wZiu_Iq91ESCQV21wp8qNv52Ewaz48ZVCBuqiLXFq-jOM_veAvLEqLXq-SKY2DMlQ9U5sSXqr7Nr8a8c_iyTJFeIT_w_c9JD5f9Jhy3A4QJxOfxGp4GTnVii0_KeFukZ1Bf5G_OkdYAG12XzXUQvQNjN2FruELr-IPa80bp5FQiqBM8J1coaGECoefue25BzuhB6csICL77b7PDFCW4QmwncodS7Yf0WTF1AQMv-Ve8Rsl95xWFPmNPb4CEMm2A70855UQqqIKiua8UX2dOSDI2m4gvDtoBcZ7t_h0VaUq74_Vdw8XprltpuIyhP3oqGAIQXBdOxuH33Cqd2BZxar1lsi1ItoTY4AhZtefPE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108041297871659900357\">松田剛史</a>"] },
            { photoReference: "AWCwydgDndS6MbBhTq0FOEFdnspOqoNSt2t0pGM4NYMXSJH3vdjyj35VaaLy1OfPrhGkT8SLOqNq38QnAIV2JdYqXhD82drL5xCcjFOop_I1gQ9UIPQaZ2yv9Tqpy61DINzBzV_sPI2pboWZZcjZDQzTU5Ed8LRqgo7Prw-Gexgn1TxpXJ3LOswSABeaoKf5Ar6vl-Ht7QPkWv4xpqXBcGRvxzYGmcK0Of7BIeNuIjliHzTEk1pY13De0Mw7mkC5liq4kYAvAK539mYlKg3zjNDXp51WUNTi87MdLarf5l7Nw9gsi6KJATBwqAO5JnL7pykIel5Lv0YzjUUcQSx50vzhiB7lrMEbFYTSA0OWtjs8v1O44JTm05U7rcFP4lJmBSPgjn4ffHAjRJ8dMfhZtRUZ2gpPgjSWJ71NHf8fclRFCd8", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106515005895415627972\">tetsu I</a>"] }
        ],
        summary: "지토세 아울렛몰 레라 기준으로 확인한 삿포로 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["공항 근교 아울렛", "평점 3.4", "삿포로 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.outlet-rera.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10553156036790183417", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%98%ED%86%A0%EC%84%B8+%EC%95%84%EC%9A%B8%EB%A0%9B%EB%AA%B0+%EB%A0%88%EB%9D%BC+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "닝구르테라스": {
        photos: ["/images/sapporo/info/shopping/ningle-terrace.jpg"],
        placeId: "ChIJPbaM-V5Sc18RLOjzIysMtac",
        placePhotos: [
            { photoReference: "AWCwydglo5ak7nw_AyKDq-U6wOU9Lf3QnjSDY9jTsvfs8ZrzFqocT0kW7qD-V_opgKOYSu5k2t1fwEYS6SGgVI0FzN77VEWyghE4Rgsx5Pe1fnpqyS_8MpJmxDS7WnOPwo1RM2BbD9h1JxfzxwY3SQVlUXkocLY-dWdKgQpiy0PuYs5KfJEGQ1BPwmtF7byqGpovsPb41u09Jo6B_zNgApxIPT2zgJpfMAyMW9IHVEqMx5hrYL1Hjawj7lI8VjQLzo3rRyLMWI1h4xDkg7L_qd-PJHSedPNYmf6aq2NtXgrpLEAo9PJAc-s9XEBbGGcNIU-kvYkCVd9k7-nef8NuARdr8LoYNZt4FDuAGQMGlSZl-Bk3Sos5UK8sXW0HxC7RORM4lCxNVXLkaWTQwvSalbw076b0PheB--CRPqestaYwDrv3E_iG", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115402319733893663520\">eric leung</a>"] },
            { photoReference: "AWCwydhTzfBO3MA9jLtwH38a0wRqBzkK5_lKJsYoOwTuaR4lyzpZFtKofNNOeVSG2JTYUtFInAmxAFC7vHYDu8Pwy1R8LxsMmyj9NXw6zfloT-sos2TSUbfagkDNakjeEbm9hoN7dF4TXze6xNZCCcHiQkfBYmKE67x5sLyKIwhMryVpOi5YK3g7EX2eg8cEngz1GUG-ZxIDRbwPerwZAZsdMJ-UU5AqeYPzehyJyrWDtg_NsL4mgRM4mwS8f4NxSZc-QPFACG3tIaZOEoShNxiSLmsPXpPGIBGA96TjUJ0QiUJa7s0sOI6iwXTO5l7yBceXGicUqdYfFvM4Xj9U57bpxhdXtgt-JWd95dh8eSUz-E4UfkNxLHrEEBJ3Jb4yPtvmNsFbi0maxAfwnp7neBUzosMLjA5KoeIKVs_vr4g7gfQ", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108053227415609770792\">Alan</a>"] },
            { photoReference: "AWCwydgp0OpeFDGcDi_5uYSzKSDs6Nl9uLeJ536obI-k7lOnDg0lXwpZ64gOpUGd30JipgQ5xWzhuWocgoJpRDxjXtOkuAgaZcVR34wExkBHu20ysxGBPu9JbcXIz23i9xUC5bRlkxmg17nzeIyL1YHsc-72w-6-yCaEb5ooKsfbuhYnuNSjkjeTfRKm8NJV6VG76xbk81ypN42xtwiKXcUAC2rifNnaNE7LvJJWDsoaI4ivGQMAWmxyf54BPS7Elp7zRcPSYqozLCwAQLAaIJ_UGtu4kya1PwHLBjTe9OC3doLV-_eB3X1PtVwZv-bkfqMOz8EQPVOWB-S8x01RLy2Ui5D4WHxOHQhYPfubmqTV3u6lMdFcjEkw9Yo3TIXWGqIIEThgfIAyzDokCiqTNexEoFYzoFNW-m_jB5fhGbS0l4baiGm6", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101857432561345264300\">林昱婷</a>"] },
            { photoReference: "AWCwydjFwmb595ipJh0qDg6k8Rx_vnN3ULe7hLRr7203AIuxxD_j14-hA1g0c05AEV89WucD40pSxDvP70_kWTdmCCt4QLQqp73yreUskXuXlQ8LmU6vc9CbczpQoSYFzIaH0NRryHKqDhoe-y7gydlKxp0G_4XxhJtAxm8MwiGgEQj0c6_c3poBryhEGyRS-DKqdNkYNo886TKuO9lU3P_0M3A_HUGeXLo6SCUu8BPZGfloRp7hcwtjHO0wou2abQe77iz0gs-1V3XZOM8LuRay1Z0g5Ra9LZkm7rpdy6DHYus8zBHnldtQXH97npc2liv8OGDX5GQ-y-91njRX5f7SvWicU9SmMQjoWMZCZ2lVGU6Tt3LlZutp1btAOp0cF8dySvJcNGILduxJC_a3cEu4wuNPa85h4gOoIeMwUmX6cf2bT56wS1f6U05Xp0q7ow", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112332731233447147996\">FUNG MAN</a>"] },
            { photoReference: "AWCwydiSw_fTgfmEGxs4mjnDckPjQ5VTXIQEtLvx4dVDSFe8Nayg4t4Lssy7DsKVUGvo9hwkEn4UNGf5hK7k1wHnusN1Ds4k1hmz109c99gBGEd8Yxof_SW57kMfjviRd47GqxvCVYJ9BorOMCLSuj3Mq6NrJE_X7n4qcrANkSt7plUlJL7-6OayFyp0rfo7p25y0UDM3ZCM6GxLG713njJqYb48WegHpZvyfsH0TweC6YicCj5RNkE-9lzhwyUpI7gJ8FbyxfXAAEukOBPFSEDYkzCFqfsctPRpnj7hinqJi85EnJ9CwH67QvsoNYCo-Mwnbv2mBHV8_GslwAKzU4sk8i6FNKk6jVDdX6EBAdztsvgu2cy3-HipSHFdJ8sD_ECnjLZwxWUtu2nhSjM3JwVIJ1pzNbDZknBLS__4oU1d9ycVVw", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118276253825640879217\">tukasa 9657</a>"] }
        ],
        summary: "후라노 숲길 사이 펼쳐진 아기자기한 수공예품 상점가",
        updatedAt: "2026-07-23",
        highlights: ["동화 같은 통나무집 마을 풍경", "작가들의 정성이 담긴 수공예 소품", "야간 조명이 만드는 환상적인 야경"],
        tips: ["해질녘 조명과 산책 동선을 함께 잡으면 좋습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 7:45; 화요일: 오전 11:00 ~ 오후 7:45",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [{ label: "공식/지도", url: "https://www.princehotels.co.jp/shinfurano/facility/ningle_terrace/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=12084578554544908332", type: "guide", description: "지도에서 위치 보기" }]
    },
    "사카이마치도리 상점가": {
        photos: ["/images/sapporo/info/shopping/sakaimachi-dori-shopping-street.jpg"],
        placeId: "ChIJ6XWWhVrgCl8Rf9vktzxsHI0",
        placePhotos: [
            { photoReference: "AWCwydiN2UPvqlMrcY-fM2zjeUseT5TkesFH270-3x9fF2ln0V4dEC6x3iwmMHmR3nFP5wA3qgQLmemZyiyNwT2h8EJuVT1KkljCtr1Z_v0hDZnHhWztEhUwSGP5zdC5ma8sZ6V1C_Yx_TrmFpUH8AQT9JUr8xxcZq8oLlBE1psHVwUf2m2SuMB1yOSsghTf7LsoBBUgb1Y8ei2gImqu3-i91wmEHi4PWJ8d7MPN_dpqvR1tJO_gayFd6ZOWfth-sr0mDA-ZcwF2yG3eEbD8CfESMagVSCKG3hlWu4gOQmQ0NVLb5eJ6nmXlZnwr4cNeVcEYGR-UhT6RREJuLENFw6Gsrz4RaLt-FU7jfpNa44ZAxrJ4b5Jv6qJ5E7el44DCYY1KSBB392HUhtO7gfGWOrDxttuMhsLPvAJqu_9zNq9HJEc", width: 2950, height: 1962, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101414565460669767191\">小樽堺町通り商店街</a>"] },
            { photoReference: "AWCwydg-PPBcOUYtEQ7naQ5-UK87EDvWpjpoxozncMWJ44kwznxXmQQRHu3OKDv_7vD_OhgRxKZUcOJeZ41gqm-s-1cLXR1XT869EriIEDLdREtKc0hMHIVARi5Pl0mZ76fhjyZLfXPfWF83e2PrdYCwWo6eUpkHe27OKsJL7vZY5oIYhIrX1tqaGCJpxGW3CTbNaxylYUyCE_BMcP746dCyzp7zS_VvTisKKp-ni4-77sRlJ_du15qqYx3MnIUv3HnExJWNgKqftGSVNeCADk79iKIzqZYN7RAsCIyVwHpnK1UyaA_Xk36WUFdxZnA8-_o7l8V7AUA_SuRiKQQowmtX_6B4fZWtMW9CrXLarD4kYcjNhC5X_r51Y3PoOh4j8vrC2kLN1TJplz8TrkKSifirWcQosw8v6FRQd1qztby64UMG2M3F8IVtE_oew0nPhO3K", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102573401516447035012\">章宇峰</a>"] },
            { photoReference: "AWCwydjZDbhI-th2sYlYk3AttkKunm7lfR13jSQkZxphYUXxvbt4YtU4d0nHgFDwwLPGDG4L-hG-uCH6lN5kSXNJIQJDeXkr__TFHzTBm9I1NensKCAlBL2xUJW4h73LKKC-fwHV1sc3Y1DHSAOpHOCIyZH3qL5WD0Jndq_2X9OJLoD3hTpTpgBhy-3zsQaFzagga6Qtf_ykhQXnWL631KL4DVHMoL4T1JWdlWOCcDTE-XQnbrMM4DbLtLlQdzpBheqeWyy14ajugyc0gEhhV2_hnyUys0OVioF4s4_5L0RFpFhrJcbiQehePti31Z1KYH0ZopRaBt8SE6FqANr07jWWjRHSf15N6EKL_hpyH1AonhxF2ier42pLkNMap9dOAc9DQfpN73wkfQDF7SCE-aIT-rFMPC4yCoBXXHYRi_G1j7zslfixNf2--2HTXAPMDqjE", width: 3060, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103534003975600078957\">古董人</a>"] },
            { photoReference: "AWCwydhYR9r55e2_DM1Ov6VeCXb_-cjoCN8a5e7dp8Wh8xjcylS6puAlMYnrWNgCG_KExZ8Iq-LdPzfapeu1FvPd5pB7_-iezY-ydU2zU_QA3M7xYxfGFO7OhSwX_woF_vn7x0qZmhJHNhNCTiUZMJSuN1zk6a48Wk7xM6rrGXvL7kjJG9cHvG7jfPNx-htfEqdCosnSuzYhBeTf29RjV-7yoMphCZIS_EXNtesyyywVnLKmJi28kSAIFzBIOj3lySTcsDZTgPo0ZrMPhqpOkwgEjKYWd7JtazhpJO5UwMNtQku6P4gbyhbmEhlLnux_hw9_ki9qTPY15ihXOsqLK6Rwli7xmx1CeiJxmJetfbZY_HPV2kd2jf1csTzvU6eJhPL0sK72Ocaxnc2HexAw9nOjQ5W5qVrqqvlNVYmByBb_OYLyOw_6", width: 3072, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116921254879016316885\">Melody Tu</a>"] },
            { photoReference: "AWCwydjveVbQgV3qZ64y5BUrhnYYxEK1SL_WamfxdkTBOpbnIWUWlwQFUYcuA8pt-1DurVaMVADfC1F8hgVXk6P0SPrKl-HfbQrNIVkQqAqumGpoZtp5bq0tz_8CFUr_bCMrayGYc5D062csjpb2TPDWOvq0pJFxEtxT-2iyKAWyJd6JUQdLnCHyWfssw260iWP_antiFRprDrwftJcR9jfb2gulgfTRy2F8wpLr8w_5RKiItP9FbB_pHqy2edD1uKDZidK8jMKVA_8WpCvY2M0ZjKbtnwk7k5VTA28kpzJ1AfoIuYUHVors40FHkHYFxmETVDsMM2xRrJtV1QxqLpXMJJ2Rsbkg0Cdd09_GM0-INMWT8us23TgjBOBWImrmeieOOLnfirA_ayPuzeXPxC56sPd3P9Q-pvHDbfyNLDt7z6LGHlwC", width: 4032, height: 2333, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111611606156518821254\">01 ryo</a>"] }
        ],
        summary: "유리공예와 달콤한 디저트가 가득한 오타루의 대표적인 산책 코스",
        updatedAt: "2026-07-23",
        highlights: ["정교한 유리공예품 구경", "오타루 명물 디저트 맛보기", "아기자기한 기념품 쇼핑"],
        tips: ["상점별 영업시간이 달라 늦은 시간 방문 전 확인을 추천합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [{ label: "공식/지도", url: "https://otaru-sakaimachi.com/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=10168121066734803839", type: "guide", description: "지도에서 위치 보기" }]
    },
    "오타루 오르골당 본관": {
        photos: ["/images/sapporo/info/shopping/otaru-music-box-museum.jpg"],
        placeId: "ChIJB2IMXFrgCl8Rx-WS9YJOmbQ",
        placePhotos: [
            { photoReference: "AWCwydhXzzJpAo5eykiRUnv3or2sC8d4DUzQf1vAvUJfUi4-QNs5dNgqcxZefwEOnetbHlMbRq2__p5_b9ioT8vfp34hsQiLQZRjMF6yG14UV50KTM6B9Me2fRdLBt4eBT1RtY7D_saW0lNAUcQZS3A6cvJBkAcJLMBCmkzp1GelPbBWEE908WIezwgcTHywAA8-GsvFa2GgeBWNzpNTBug0mcawPQY4sOQ72PwqMJnl1RYpEdxawbM3TzXLwJzf_tBOppJrnb46TAZC06aLpL2sgSZttC0PqzbA01s5Nn2Re72RNjahtKFXOap3XIDjez7ZiJTqG2fF3NT7D0BTbiX7umyl6T22Ooea56w5ssyOIvvtZpaT_Q6wqQ0nEOqUHTXkFc2G84r-vofoP_vaIJYf710rxX1Qmkq7JtGC4DESs4Qd0BQ", width: 4224, height: 2368, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101301496992698118659\">王金發</a>"] },
            { photoReference: "AWCwydg9d-RyzLw__PdeD1Rq8K1K_cKKX7u0xOwv5f8F1lo6Y90dIaRzvx7DsAEUwLzmNHisgIuRUVPwpP2JQ2tc6Y97uo6AqyjKiqzTsn-qJ_cCyMFQprP5OeUyHsoJYgh72RBbbOXQvtelNeYfDU6WCuKIoBBNNUTVXcFs-alhd6X9b_8tD2_ac5KbATegr2UMEQkxPCWOFg0_iVe64m1T65BynkO35OfN-gtn5V2XY2nS0OI_BayjEzY0L7Audworj6cYYk5pwL_2ped_n1G3KHRGck89axbEwOI0ZukIrhEUrhli_Tkxgj-k0WEXPOxli5CPdSAUcDNZ9tBL7xGV65W_96YlmHoY5jesw3fLQuPLheEKe91LMNstIaFD06BI3odhOFlghtq45SMxxCZ8Ve4zI_Zb7orJX2qhiqy6rVCEIlcKuzj7gHbXKzpN-k-8", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106168807019349999077\">Woori collie tv 우리콜리tv</a>"] },
            { photoReference: "AWCwydh8iyT7HhZsjp1Z4SWlgeR0UO_7sXXIZE1rn2GNjpdW7atG5ZVb-c7hrwuVduebRmIgjH6kwSPSTP34xbb2xKFZ-v2HodEbpxgEdeH4XdmMVvv3lcVXRSPgC-mcVUkfjcjSykASF6e34LMjAIJ3sZQNTo_c6DJZSoGbv_hWZ9BWh7TIDBGJEvpwvGhhCa8XTFUi7xTHxtol6VltUT3G_Os6sY90AUSRt7HE6O3jAICVV_89uMDYml7c624rO-8VYdx0Ds3n7SkvsLYnr4r8mbCu48BHUJcwWeUJKtKGSqT2KtNlR9DMxfdY2dYDHj9fyxAly88ppkwR37_-D09OJMlp6HnAMPyASR31lYC11b3PRwGde2CTC67n6Zqbw6MWrQA-nF78cIXeCz2sWu_dYIgnEPtePbp_kTKbAGL7cN0", width: 3648, height: 1680, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109305157834161119845\">Toshiyuki Sakamoto</a>"] },
            { photoReference: "AWCwydhoqp1dyn-KPIyUNQcoOwYAe5cwn8HvOLe2u0lXDBNrZWcmhHgocGbEz74XLvfLj17Mi6FZCYsGFnmpRx-3nNGZcDc0Tp5Xxi9sEf2tdq5x_mYbrzcubR_YPtSFL0xYd8p-3v9eA_y_6YQzXyowTLbV1262O-ZvGQHEa73W4RNUI9jJObAtbTXMtBtlW94qS2DCe7rxy6iiSJQD1wlIA-lBtLvT6rbkcSW6o4mCc1H6rKONdqi3V85_TQf8UEMztfwQwQ3j4j5cppVz9IUJ18siDq3NuF9p6TkaRrWdk44BjEhPbJnHbAHC25vVLznWkrcC7Vwn2iYUiX6P26sRg6jZNkIySqogoh-K2EGxqsSsg6kMGg0bDYD9PiiDULb4SrtcpN5BqHNRO9EK6HxDNbmg-aY4iVz6kn3u094oEIX2Nf22", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117880935943879116142\">田舘孝太</a>"] },
            { photoReference: "AWCwydhxYeL2avV8LXeXj0tIjMtYKfWX2TjzjHeiY7m_mvzDln_aECQkIfS2F2PjgUXtD026kL6JzUXAKXX-LxYFanIeoXmuKXJQwM6vdhxvLoKo6-kO8H47PHfrdyqGgYbfT7hSucz5Yt9V0Ja7d9BRIIzWRhHxPfQXB5ZtsHoPm-018JKdZfwcB5IMLsGm4kC1KiLCMZ1yT250HBR8stJuaJvw7kJApcYu8s6PsK4YdZ4cLdpO2R-7HUwsta9nbQgMH7r0Ox4l1tn633bLKfQG49r2qyqXAks8f-lZ2xgGLcFxXVpnmn0QjN9HE-OKN-oVGnf_qJLobxBRskuhz7Yy3ymlhiS72SGfdjGA7wFdTHvBvL0W7v-hBw0iEUiEGDyOcY4be7NnknYS07raQjD9KXUDaGWSlQgDuOFLSrGV-JCekw", width: 1000, height: 667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116800144279236257456\">seongjin kwak</a>"] }
        ],
        summary: "다양한 종류의 오르골과 아기자기한 기념품을 만날 수 있는 오타루 대표 쇼핑 스팟",
        updatedAt: "2026-07-23",
        highlights: ["수만 점의 다채로운 오르골 컬렉션", "클래식하고 낭만적인 매장 분위기", "여행 추억을 간직할 특별한 기념품 쇼핑"],
        tips: ["오르골 소리를 감상하며 천천히 둘러보는 것을 추천합니다.", "오타루 산책 코스와 함께 방문하기 좋습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [{ label: "공식/지도", url: "https://www.otaru-orgel.co.jp/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=13013518922636518855", type: "guide", description: "지도에서 위치 보기" }]
    },
    "교무 슈퍼": {
        photos: [],
        placeId: "ChIJVVUpc4MpC18RH9QK-B6WKMo",
        placePhotos: [
            { photoReference: "AWCwydjGsy8-4F4g8MAN9U99d5uaLn6H8sEED8wnom2FvSRU4CbkH0vB7wAtqdMfHB7q2Rvhyu3Zx--EWKFOOK-QE1c2-YGLxBi9s8nsZZM6RXMJOlxouS7fVSklxfyKMCgqv6b6yx-tl7jx6FFtDtHoTnIHsuHdMtoLtQ-VBrMf9HVltm9XjqnFiJFELHoWf9FjYnaDgRNToahWCpLoj-DbAGHINhZTPsOAuAi1andtsm-c8mKnCIXsXB5nB9fgB6wPMX1_SNKPCOnAxktYNUEmdAvfLfFW1rDasGAarb1XaSq2axdfnp7sOmMXRgkMsdWtovtNCsw7fR_CbE7EsjJEMqbb9VWYbVyCKKoJTVoGqZ7Nvnu6UrSzjIXIz2BUuSbCQUtyCJeY8MOW4F0WupN4S5_WJMhU9t0_LyebIPiSm6be8Q", width: 1265, height: 949, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100305969735148700185\">荆心</a>"] },
            { photoReference: "AWCwydiDz35ABrtlaWeNeH1SlcLsW26_97IP0XjX7ZGzlkoucq8o5n5zlfUAlzD1dwg330kPMDR592L_htfVMQh66ThNBSOuG6eah-9GCvC4DrnB0I1uT2Er2IsyNC41xtq9xN11Ml1lm04JQbozGEv6fCQTTBQ1R8rXLaCgar9FsonDHbeAIBp4o75dSbDICsqP-3LDbGsgx7UXIt6LEtpOhqodxPcWYq5enl5sDtJvAE78HRKQGISK92pLzkzOE9O8jP9lFg87jGctirvdUydWtuy4MtoLJEgN_ah1sWS9E9lVsLAh9OHpfI6pxM--oDLIgsRtc-awzKbjtkzZUskHnPnCW3blzemoU5iUJQcHX8t3lUkOJcyxcZFikYjv9UXCZUXygghnhomf3uODvGyV0fvzCnWFAkT_kytaJGJMTmxsMe4c", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102721123606105079503\">jetour ZELDA</a>"] },
            { photoReference: "AWCwydi3tlp5evKunKMdOxWKb9je7ZZa3FApkd3SknbmKWE_MIeVRcBrqrlzsc3lmayVgyDQWm2VPXAScGXCfvOS6t0tKLnAcj54Gec73m5Fk08Wtk82UAHRLl5Hw78A_CUjrQCNk9Qdaz6bboQQQl-MhO2mezE9G-iz4Eap02aEd6oM0GLTnlUfZLGnVAvOMNyAb-9UA73KEL7zKGw6uha0ukbNDbno71Aypme39X1b7fhNbbtv0SefpasgL-72srPTaynahMr1swBLmNLxPnJkA8YjQahn8rX8nULQ3hF0TsWdcZRmwbvGVM4LDs9s3bd1TunUrXH71nMtUCftn88LHABush2zbAZUwiiJdAqWbqrl7HxeCUasdiXwCYSqE27yBcwWtSMq-XzbKSj0y1XENDL67B9JznpF6cSvYxCNUamSnyml", width: 3096, height: 4128, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104265301568933482280\">Ronald FAN</a>"] },
            { photoReference: "AWCwydjMCNwY4SPUQ14L6KFUDPwleIAM8EOBXekZD350bfMjObfVyjC6YG8cEgvbWwSbWWFFpZl6ylilVJ9kAPy9Bm8OtvPaiZCGXFe07s0TiT5Nxu0R0q_l9vtqEGistFVmes1JoGvw33heAAg7SAUUKRGlc1AiCbKPW07TA2ySv62KkuTBmkkObl2X0gjuSz3NFXSs8bq97-9mdUSn8tbjmEmLE1VdT7jR_1I8LNojDiaiJ1Q6vUOX7vVyjLEERDhtoQPWcByqnRG2z5mPmLmdCZel9uVQcnA2RwrolMK78j2sa1r1UTXLzoyDM4kBnRHmmTT1ui0c95ZoKHsTnymCJlcfes2jC1ZDGlQAx3JLhLWCFyCZOOrq9m6utoYd3MTz69-6xgRNZNm9XbMXr8PqbufdD1RdVLwBnr5P0r3V7t5zkQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111371499899554356672\">F L</a>"] },
            { photoReference: "AWCwydjjZD6nliRL7nSwALSU_mZPwTRxZQ7__hJHpHJDg32Ogky3WLOL5P4pqQ8w2MNYSkGRSCKbHOOc-iri_5j82LjeeyIgSHrdSzIKP6COkiHmmV2mMHJjmYjB0WLzyTFedwuj6m9oXtEXqLlfeHdtobnfmLpBy3t4gCImowoD_u1AMNQv6yy97J1dghuhG4qr8oFBJYkHjNqvgyw2wczkNEpAleW6GunbbyDJ7FmnqeaDXtf94dLKaD6SdtzsHmF0I8Qxu4MglbcBHaiM_frJhuzfcOEUoSCygIeGkHeZgifmZHZwcML9XYpLXt-yz1I0LqFIi6Hb9CukogxChP4oA2O8nITf_FKR_5GdlHupiLKSsP4kx4AHbB5X0hQFmX1aBDBeC4VnXaVj3dKVXus4kHPPsP2e42vuRkoLWiCAW8DwaA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104207940542524714272\">Kiwas Chen</a>"] }
        ],
        summary: "다양한 상품을 저렴하게 구매할 수 있는 곳",
        updatedAt: "2026-08-16",
        highlights: ["저렴한 가격", "빠른 계산 속도"],
        tips: ["영업시간을 미리 확인하고 방문하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.passport-net.co.jp/shop/shop.php?id=tanuki", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14567058054484513823", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Gyomu+Super+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "이온몰 삿포로 소엔점": {
        photos: [],
        placeId: "ChIJtwuhMqQpC18RvkJIfRlgj2A",
        placePhotos: [
            { photoReference: "AWCwydg81ZHnaNF1Z8OudEv1Sj6YMPMhokrJiQVNbKcZ-Xjt_t-1lYiZcm3fYXbE6pcx92Xgpd_UBf4HzzJ9QhySOvZJiSpBPccdMsWUWNuoreNMuzvUJYQ_W_KOsKFkKuGUTVmc1DNHLcP2v36zGc4sfnqIaUa_zSAC6BTgY7InJYF3j8m_GtEnrNzxDpAWl2iLmrBhVqQ9IHlVM1U0CWcBZbM5m9dvFRujYpuv-CcOSy5dLhpMC1k2-vvmsrXWdl0OsbUr741A7jbimY97-CzwR_F1ZBQSBAdlPLuAXXYV-g2NPR3nk4_sgDP9zR1u3RJIDXHdTNDqFGtNuU0gH8FE7ptJr1Sdy-FV_km-0--HHP613z0dh3gqNWA9LrPrG7fGryYTDMPNKPIJ0rNMkhrUgkJXbGftp42Pq2KdE2a25WggIA", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111842983843848276081\">トトトシュウ</a>"] },
            { photoReference: "AWCwydj88Rk7oD8hzLcc9gu-L3Kd0q5NmjuIjRc2-kmh9pxrcrvBboHno0TtX3kvOJ345GxRt6TSfQ8jUMHWaIeo9YxugS2T31B5ms1hFZRw6Uqk4gtmWA1w8lhiY2fpwhsDtXH6gMzuC-O29rwEibuVawFl8oIZEYn5VgSaF6IbikwrgVUVVCtJzw2G45XvyusQwnSC8vbCKG3mSo6IH9cUc4GioBmNUw-C3ENnaGAz2wbRHs_uX_VFW_BrBFGreS9m35lxxTJJrtASKcd-fiL8HrQJ6nHZpg1X4YZxt6BX-AuZtK159grRtZ3dHzqL0ybPYxojFTK4usY4Rr3g-_gzRNQHN30HO2kGG2vSpWjIgQVXEli5A8PWeOLNrkS4pZCwnKMqnv5yMPJMs4u2B5Zad3Lz_m1V3g3EUoCwemzrjjMrF5k", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114603396540602047078\">mochimugi</a>"] },
            { photoReference: "AWCwydioNYExXkuTHBqF9PalPL6XlJyPKMP8Q_r98tmBhytHJjCe3j2fm0WmRHtnl0HHu25CooU2DZJh_8vzHy9Fx5N23zc_i0pbtZLl8DeckZdPOUcFZhuAoO9YKJuBIv-p6uFkoSM37CDYDuKVYcjquQcoA55cxQOq21v6bsfkK56Rni0eXR0hGG4faTTvZe-az-kWVIpWNYdvQiWAsYD1Ocq0iNFO2uTXW4ejNmbWkUJZLXK_bT5bFhqzJmys4K0g63eiXR2dVC3rxi1FIA4R2qC1DaLes9T5ZW_8VbrZ6fGVOSiUDk16_IHyHgA_VPt97hgAAY4_FZK3TnhJZdi8DfZ1XJuJHfEHta_PzNBwYiHekjm6CERBOynv0SRzpZJFzZIQMuoVzaXCza2AYCN-2KtO2Mmk8uY32fWAwI452r5YdA", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101647946141308611696\">mel kn</a>"] },
            { photoReference: "AWCwydgYHwMOh9_88uUT6X04EfAnPAbmN_odI91sMJZTxCvmMJKpGwfVJ-Pz625NwwNoqBhEzBZsAPd9Zx3QnmmtxKKwFPVf2FlF3jRXcO3UzWI4STljysn4cgQMaxuSxosCD9ckf0OwEs8s3js9IDYf0yHzUZOksj65_OeUPmUCoipOu4cHF7nc6mHxVRdiPajV9KDYnRkcdDqZvLKJGE1Bz29SYvn4CfVQqGlHwEB0sZtIxRMzsPkgOu94P7JKALI0KqHC2cxiYu1S4FPNfqW0q_RofLQqYIeFRsjiYcfKBhdvKkakL2KdJwPyeJwsviNaUA1AvL4UvB6UwVsSdXMbMbLKWkrmrm-weKty5WfduamErrNoJU37GLIyjjmU0cSaFHFmY7J-4lf7jZgvVgO-Cp_ZNwBy65Lg6oNkuUNvjs4", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114685691405666606711\">ーム（Moo）</a>"] },
            { photoReference: "AWCwydgNRN2XK1bqdgIt_PxtUCymw-XFiJj9ZpleiVvkZ5Dg8Lw5vfMpBJfIdB-66GVRfc5s1YG1oX71jjk6m4-K66ZzUqsNUsvMkxpqWEhsuP7dkncMqlztugV91r1yucivPDS9QXQU54i84Wj6lxztDQuV7U_RKLm9t6NZM609K5faL-b5_vSZVn--onWnW6B9-tie1iLlLXZJBk2K4BIIINjkGJ4hRouU2GsefzKe6NctRwEJI_TOCZ5ANUjout4zGU4e5WY-KRXpyI-I0WKb2n3XTsCS-2Z6tVVWnYbpA3ocjgreKFuTbk9Ux329KwUhpTSR06I1norXL0vTu6UKgyoAE73KekWnhE4pHMxhjpwUtuneLiTB6mhSjNhEItz3LuxjmuvsR7jTdJagGSjuFEphleWgjrrLBcQrP3z4ru18Mg", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110272693579015203694\">Maxドンキー</a>"] }
        ],
        summary: "많은 리뷰를 보유한 인기 있는 슈퍼마켓입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 상품군", "긴 영업시간"],
        tips: ["오전 8시부터 밤 11시까지 운영합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.aeon-hokkaido.jp/aeon/shop/souen/?utm_source=google&utm_medium=gmb&utm_campaign=6860-aeonhokkaido_10033", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6957885611903042238", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%98%A8%EB%AA%B0+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%86%8C%EC%97%94%EC%A0%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "코프 삿포로 야마하나점": {
        photos: [],
        placeId: "ChIJ7Q18Me4rC18R_XQDfgEGF64",
        placePhotos: [
            { photoReference: "AWCwydiBRmNIwHFFKGggHel2ThMis3TBY7ZVdMWo4dZcPQx7VvqvToN5B5MCnEn3HD3w3kMgXz3jT629-e_9ut6rmR-s7qTfVtgyCE4dlgGeQ3EhkizqLt0lejmY8-67l8sn6L9XsSWzOpmCEAbj4Vg2sLiYWAuhy-uOiigS9UG9lxbdGIeyJKttM5jlQlOjs2eQaIlsKrco-TyS4IpVvoQ9L7vuo5GxQ8S103Sd6slZ-lrcYLE_JkpS1acC3NCdfWr46N2A8LSA3XnlsGo-px-UoGlEut-p5196HLOML8_wvsD_j7PSd7CYOUpPdqOY-ziay-0ZcP0BebDuUVdfGRpmh9Kl_3RIuGLWZ7m-6vM27UtXXAPzrnmDpzZL678-U4htfuyG3oZ-kOlNKcB_8Wj4pJwwFXlKe8kFkjqXFcO79YRPIo1K", width: 746, height: 411, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100002026180610022089\">TK JAPAN</a>"] },
            { photoReference: "AWCwydi3ftPM5tG-PKmuchqaCcXng2yxi_U3p8DpLXARFwKkDP7cSNQqzEdyOXBpcgN6JWM7OMRxIV1gupaHzX1HgZSHDguhwg8_vfrtjLKMUW6Xf1fe7DbRgS7tGOff8WNZKfuqhfhvFnufjyIRgNxwhuj202oNo47O4tn6IM9UXJ50I2_wPYsoddf8R-TxSlQg6A3nk8x6uwbyYu4_fxk05ZJPgW28r9xBd6c9sU_G9SvgQqUq-uT29zjVbLo2kec4wmcALXBVjOO-LgK1eESVP69upjRB4PstA_fzBvKrZ1XJ0mp2sHW2iaHJLhCCmnVTxsZjBL4qxyleDuQLxw32Jl_QbnXFLXZFuUNj75QE4WLorICCCxW4GnXVpv3vwB4gtkyg1Dlrz6D3SPS02N7UUp0EaA9lDKa-5_AeWvSeyYgI-A", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113209483240972300088\">みちのり“おとうさん”</a>"] },
            { photoReference: "AWCwydjRMvU3xElqveBIoknPXoMTjAZguXJsgedQbUjs7YK3gvqNopxcvvZRcFd7S5-0715gbg9tithT-ILvSv3VrTjekJS74IlQsn4Q-6X9uydzs3b1t39eTXpWz3KYkW-thGqVcPTxioO8kZ6z9Ar9llVBBL4-xRShJwoby944UCroc3vLrylNMU4ud2GHCgIOhnh0Dp7DQ_Jznv70QkPQ0Hq6uEfwqafwtNMUWWvBoNdraN43jvI1lNovISCWualTrTQUOYYMoAdkQ0ICH1iL2Gg68PVSAaZekwZnzM5gbasTMhUFCseoKXKbyMsKSgiydu-mgWHbZAfmX4XaKHZgjfDcl0bcr3CoF2V15AHjlwnNaDNbxgdhPGvDEy8Tk3qlh5A9WrGjiIERfkrkzlULVQZNwLTzqTdtP09_nwqwOlk5lfA7", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112258423783083099112\">go jasper</a>"] },
            { photoReference: "AWCwydhkvbVmirbFT8RkWwjgsMLRHbadJFDrTqQ_zGsIJnt2IhN7umEZ56HEUdGHoS25V1Yz2HqgAV4rzuDWwAyoricNgjwOrfkllgjJ9jcZW9RPiqAvX-Yjs7qYxVhhyNx0jlxm3wHrlO7Ls60x_jAU24YEItxHTajcCK45oeb2dt0Mk_Pxa6NWnX93yXGGShA7fUfjyuwB-rKczUiIhPOoFsD1NZimOVYNF5vG93xszB61cz4n-7hEoBO5lnP0GafVgCQ0h_5MN5UyaaA0KdUWgEY4TrhAeDn_SarVg5619-VrQGK7BwNvKEhrB3RLDUW60mtiDzzjv4VmaQUtBgGlblcdRPIT-w_eoCglJ_IG_xDm7ZTrRDSfNr9a90PgNu65hN36oHM5KwHayVQ1ZiVdZzlkIDJ3nQXCqG9R7FWqY1BNTw", width: 4640, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112236674251002605553\">Avo Peax</a>"] },
            { photoReference: "AWCwydi4ha0gjllG3OAW8kt_4DQTUVX780t-cGsV0cS2gftGiNvOugnrOj9BABynRnv32giZ4S_1Ie_BwDGmpc2RnLH6MA94CO6ND1CkrhTPiBesx34UFO7_71ekvTWvSK5bhqZWbBm-Y6VRCbUM8JCcCUt7iDH3xl8lqkHyp28CTiCY1metnF8y_jB6CHmu4cTVXfLEtABdGTniuBUrNZ1iI65un4bJQjWEbfyZLopVOQ7-DS3lpmHQKwMC_s8tMvqnInoumLxz5xMJh5BcYyaVr4cWlgZ9TZN3599HbPsSGdaTX9wcDXw-erA01u8oXoH-aXC6Vj795DBPt4PbVSvcGh4NPl7TzQuB-Nl2byQh83UvgZrkZ8xDkoCnWoQe0NHvCFBjLbeDhxGX8IZ2hljlhY3DTuMpDYjbQZ8DlJa5tXG1aw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112763229531178377827\">川野賢幸</a>"] }
        ],
        summary: "다양한 구색을 갖춘 식료품점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 상품 구성", "편리한 쇼핑 환경"],
        tips: ["셀프 계산대 이용 시 주의가 필요합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://map.sapporo.coop/store/detail/0061/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12544501890542695677", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Coop+Sapporo+Yamahana+Store+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "홋카이시장 야마하나": {
        photos: [],
        placeId: "ChIJi5pO75krC18RJz9BRbmiSKU",
        placePhotos: [
            { photoReference: "AWCwydjo37WyuLDoR5S_LyhCcCmLzEZbHPchjTJ2GydUtRM_vskyja7MoZ0NWf7Byy-EYgUk4-ExexoK7_T78h3nxBMwXhDbFWf6pP3cXWS5X_PTPglPRUNwJ4iWxqNTQ3iXo0M15zwDLXOihwkkp0nuzscLZwaWKv-773hdKaZME5dGl-cEleMpI9s6Ld_tUfOaNGydZtAWn0xgztAvux49MC9fLkItDfIpc9PM07rNHpPnZdk4DM17qBx7MP3K1ij_G3cSiD40Q_RUzGt9u_km9JA47mCmQ90HUQj2bpveZ69taUsXC_TsWKuwRmOeNvbS32La4g0P2V_YtUiV_qb9tRiUUPiTCCXAVosx5M9k0-f7nMCtYR8KNT6vJDw6sihHcvtZXKtYlxkhY4pO70825eLVy82v4Pu2HnQwg1jriOz6pA", width: 600, height: 450, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100002026180610022089\">TK JAPAN</a>"] },
            { photoReference: "AWCwydjW1RQoi5aJt12aeohln6tLkfOPscmDlKh3I8oYz9Qpk09NgDDE-fKcQsrep5_6m5mNTpMpw2e2ETlHmoV9MLNRtM_xt6HGrO0lhd_IcLAtCvw-D5Pbn_0Jw4-rR-_f9ay5wuMOkOoEVqxxg2cAksuuqAMqEyxFJkoNOxhLH6tit0I7FFbbXGYpY0YOUX-Vx-nYRlbvAJ1_zRgF1oSdKBiT7fQk3KzBXd9c3TYa9s1uKvszQCXH5blfmeG55QS5T_w1LsxlN4t9tReeQoak-ZaOzzuEdPIeE85LzXRlbonuNnmZyaW7idG5KWKwUovuGp4tx-7ztaFT6iJK8Ahn_uIm8HCqFIor0Vc_YjLUBnqCOwTentXevZbBrD_-64C_n7S6t5K2xHx6iAd1OwdzNyK0_vLbmrKgkqdpIBHSErez3_Nu", width: 4000, height: 2666, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116838723580377082706\">CASA QUEIJOS</a>"] },
            { photoReference: "AWCwydiGvwanB6PrVivCmIs1u6CW3PMIlqjXn8gnsw5XczwSp8RObSFV3Vo3sUuEGT7iD9f6MRmLK14SIWbOHa0j2MEa_kI_WfWX8a6LhBQ_SGMWeGky_LxdfxebKXejY6SqqWyS_mXOo8Sjn33Ew_Xl-DkPza7X_3tGT7zUUmSQa3v0LqyHZ8nZKVCHPzKnN7OAp3fwVOgSgiERbExl7qeXPcIWTwt7lMF5KdPXsjam0nLcUik52NixR5bhp_uB9C1ShCHx1n6RiUC2K6wHwDE1yaPsXFL6MVvice6WvdZiEqEZ6o6tlOVoZsZJSvYQ-jxirRS4MeUz9PcRMTjKQdnO-ZuqLd3GU0QG52HXU1Fo0y2ZU4nXYUrvzCnqTFikOa-ggNhRR0skdVfjlK-7MGCxTMCP8CkW4p9QY3qCHhQJIekk8wZ2", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113300915989168712811\">松丸秀司</a>"] },
            { photoReference: "AWCwydhUwQeOb8J5JFfCythYj7Njn-Tu4856mboo8zzYaEI3qJ2-P4c4fxSDzlMRezH9Ek3B104gOEUbvJvq-t5B5cc2lVdi0I-e3LkN4csmuss3VXZ8oNPnVOLGCM7IERSE5rPNa4GP1Ea0VuKguGCpAm_kGCon0De68rLWkgDu-S7KZUwYGDELEU-WIqlNIdO5J6m5_K2mr3TlQjuwRBmqLozLQHK5gCOks9GIePyIQepXdGA9-K11JJDkaBkxxKCqBHHgEEBr6sy_k8_e2KglWK1QVGeEwa3oWPUTN0tTzxZ20IZBnKsvGcxjNeMT9bvF28h8tE5Km7bwjidH77qnt2V4pfmri1tXupEUxZDtPSE6GI5VgKrHDIC0-KUQbsk1eXRt-QFZkZvJzVRcO7S-oGmKDCdUEN1XVPxdIaf-DND_Xarv", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118273748337434050469\">魁龍</a>"] },
            { photoReference: "AWCwydjejT5uH0ptGie8dB9fNf5eLw6gVLt435qNNyAB4UQjWc1HJjQZMlp4lVMPCTsBMsn4bSamxwCXv3-oiX8ECYDHfulpM9rXxv_23sQoS3rkBuoz14O-KIbQeyDFCq71mOx91v7jOBGpKVB78VYnc8HMSgtcY7K3ifxFFOoVZUz_-85ixyqKgbIJhwzUJLU0RNC7AntC6i3WMhSLu7B_XgvemTyIKNAmxAeGYIjsxPYqnGYqQBywc5wO201dH6wDWPM2vrJ-CYyvs7tSyNBuIyIQu1sJ3XEuE2Hd6G-TAM4WbQ0Ylfqe28NKiiQqgVkTnlQMNLydnaKi1Hh1zyuDaRFkV0JD1J8aQ28og0oxi0SpSLm_md3YkWxFQfdpSGsUWqxQKL0yT000QuG1Y_8JfT6Lw-2pzzmKo2OzaIGRmIs", width: 4000, height: 2667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116838723580377082706\">CASA QUEIJOS</a>"] }
        ],
        summary: "일반적인 식료품을 구매할 수 있는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["식료품 판매", "다양한 품목"],
        tips: ["신선도 확인 필수"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hokkaiichiba.co.jp/pages/79/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11909948131195830055", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Hokkaiichiba+Yamahana+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "마이바스켓 미나미2조 니시8초메점": {
        photos: [],
        placeId: "ChIJw3LbqJopC18ROZBjSoAXv-g",
        placePhotos: [
            { photoReference: "AWCwydiHkGvobXnBUddAuoPGFNgfkiHMzBji7NOF5jT0bMdEzG9RIMplcJY7fF8ZSOiEzLpLmUFrGPduLk81Taj8vNij7hR6lrFgjv2xIlNH0BMN4B8lZsv0C5OgflQsdF9eythmPt4SabCTubROLeD-K7wp1qImSg_ryOfeOwO3QAyWXb9og0C-wpsxMKW1_mGyUKM3-oL_dqKKZJ9axvtMNd8g8Xuj9AgBEWfMGbb0DOfPnJMwie7JGWw9-FRP0xENQ1yylGlccLRQVTNdVvIOoPRDEEyg6m9A_rrX6LvVwsr_yE1iUhxNznd1Tb0vmq8pKaXfTmngr0IqIvzqIORKshYHjQb1Os4uv3kYreBLuvWGg4rlGeJqavWAbwGHAzgdouab364__DEKZXTP7o6eg7vrs4Yu8KbqAeyDTio_-DB9ghnU", width: 4000, height: 2667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101613009396753261907\">ALFRED PHOTO FOUNDATION</a>"] },
            { photoReference: "AWCwydjtZHt2nf7YcRXiRvdJVkyWfsIogqMf_tnB3MEAK-8ApxPq6HMQ2LRU8WsAu4xZz9s1XZGAsNcIe4yxel6-X6UIQPLOA8J7HdPkVq3TpfkEtzFiT4R5JrUUyHzH9E16dwWuKtAflaXVM0AwlN8clUCAv9ujVfgp0NH7uNyyEqdRZriE0ZdT_55vyrJ6kf_E3Xf_9yF0TdOFoWYHLCCobSRuW9utBig0n7-WB8ecJz7snpUOEk3gNer4Cr7bFFc-2P8ydQV02_PmLmQIzfuiI82tKAcUeGCnRvRbtJH_c1WVfhO60OtNJ5c_gqgrdRpJLFf8TpGPK5CMoID83sCF28zgoWJCffBLtZonmdmtAV4nDqAF1XOaF5taZpujsNqiUFLLpOSmTp_3VLnTvNYFf2QT9QKPsvkAp6O10aXYKYxKDJHYzD0AMyf-72adbw", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116408971500409695452\">Mao-Ling Lin</a>"] },
            { photoReference: "AWCwydhL1NUcWYVteUABIIwV-yhLqGPSDI-d28E3iQdc4KpoPGYHO4gAYjyVP7kx8FbYfc5EyO2MYXk7fgYFRThIJAvPVfhFdC8QIoZID1CTENYW-C2aFby_PbsMlZSa1xwbCeJ4-MlOt2wbE4h818VI5DzJ8fdFamadJGrNpKHLe6hu-8CesPNMvKY0c55xN6u_S3cF4h6-hZg34V-jwIJsjKN_eWOHfRjj6zOZ-hikfDHBx1wfzyAyijfipoLMNLlY6HACdIwAKOppZ04lDkpA0oI-zL0EJF3Y7rG8YxvFuWj3xTAFbp7BCPP4haPUJZOK0f2qcBVFAxPSBvkh1IiN6GTD9MYhwim4ip-FzggGhOPTbqwPGribw9sOPsQPkWEIjv2uv4QAyFWiIQyEeG_z5EG0SYhmbozmRIlsrAcCyCxEMmx9WXysavWG2YTT6cgv", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105195314927409596687\">林思葵</a>"] },
            { photoReference: "AWCwydhqZGeiS_cxrr4XsmWGYA4ufRsp3NCAtbVdH66ci6Tw3y2Vg-m1ZKiKbfY4rnHsf-TPoodlejwNnngt2fM6ROwT9_QJMkw4DVh8DLOGz794r9yDKa-DLEGZ5V3UJhEX8mZmMgJU_bFVpHIHra7EWxeUw0AbDh60z5BA66ISxVc9hyDHOykazVITWNSoXS3CP5CP73coXTk-9cA-RXT6YAiy3UYsb6NRz2KVsZWGPpCRdDcI1CcQq4WQcJSUFDJjnpee_IWxk4SCSwgxvlIwkppSVOlgEaU7ttRf6N6i_XQQb50PBgLqyvHiJpHrAhdD2C_BBFg6nJH9h0OeMnLywbEQeXwHcvT5_jiwxg7cf11ePCk1Dj9_7mVfpEMy90MywDbXFTCAXHYqLnIrYc7lqkQpv5TSRG58QaeVXLqIM4RqjynK_Y9c4r-5tXr40w", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116408971500409695452\">Mao-Ling Lin</a>"] },
            { photoReference: "AWCwydiEL6t56kPIMjDB7MFcoyKtPNmAmEE0gEHkxCH3LljaS7qfRUIsyFIYfqX887xGb4-RnZ0X6wKKCk1dOrW1SSufw7JP5AsfWPlEbUaMX2iUU4j7X4cPL0uqCT-jXS9gpO9du6hRCylO0_r6TIXlA8von8qb3nc26Oz-YPFUfLn4UrvOPFk9FlmO7vEcOwLRjlniPSYNxoaU4i25hNHolWDiqDtcmkJ3vzthMwxH6pNU0gnJzFzFtqvRWe2a_SegzgYkhJIqpLAFWoI9tFE-bEeQe0gB5i85hjZlpDkqNzOO-aViD6-7msmZ9ga5OeiRyOXczvkLcFQtmZJwxm--lrEWQe-qwqOv5jfMpzQhiwYKNlgvikxlDtsa-P-wmlock9gWszNKPizGsqEj1cnttuLztJ5Dk4Q6s12QQhTlypu4cI3dfBxzdD6lKgRQew", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116408971500409695452\">Mao-Ling Lin</a>"] }
        ],
        summary: "합리적인 가격대를 갖춘 생활 밀착형 마트입니다.",
        updatedAt: "2026-08-16",
        highlights: ["가성비 좋은 가격", "숙소와의 높은 접근성"],
        tips: ["오전 시간대 방문 시 서비스에 유의하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 11:00; 화요일: 오전 7:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.aeon-hokkaido.jp/mybasket/shop/minami2nishi8/?utm_source=google&utm_medium=gmb&utm_campaign=M8-aeonhokkaido_40008", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16771149377122308153", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=My+Basket+Minami+2-jo+Nishi+8-chome+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "디너 벨": {
        photos: [],
        placeId: "ChIJxWYoxIgpC18R_7st2JpY6fo",
        placePhotos: [
            { photoReference: "AWCwydj37kf3I-DXaLQ4FzOwhe8aXyK3Y8wAA1Zj2b2sec5xLMdFMoY66VDbDctRLKHOEVXLb61eMda6CsHG5gaHBR_L8bv7P542Q3v6wlviI0BNn2XT8HK50JiDnE4RxxZZfaLx_9PHQX7XuwMP7pdSQTO5Z2TYZOomAb9LCWjlZukhdgv4uOaq9hXC4rcl9PV3SuODt3hBtqejZYw1deg2nMeiVR6JknNZxRcsLnNHnX5F0rTxAfyo4vPYJJ5gjRBij9Ouhi7wZWVSuUOUvCPErcLa6IZH5eF8oEWhgF9ZApDaYfep8syhGjdmrLmN7j2CcGNTJHkGAXF9a3bc8d1TTIOrZmezkNqhw1S5r15H_TMLH7shmr7v02VRoWotLEd8qmEfuxxa30YbRSRvtTh5jA_fWcsNtardGwdQDe6lSA", width: 4030, height: 2687, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112228717848982338439\">t s</a>"] },
            { photoReference: "AWCwydi0IgQqz9hi-YiNLbvXK1C-t9ZbQkHXeec6JTFtgepo7p33TZdqkjLutdPi0jTUoS8p0Ldel9nWjVoT1N2PZfuFEalMq6zj9ad_X58n2TMPG_kkhNm0pHQTYY8s-BJP8woeE_e79CbxHz2_ESk275PLrYxueHBQpI89YLKLOgfsonOI76PiVI0exU2LIn4Iq7_fa0hAubHtC0F5aI9r4xmxVE09DpS4wRdbJXNwGs4YVUfSp3ovQH7-XRHqbIsIgE6RoDEpMERHLTCHe96ectCbpFbTYfCgQFVQKUm67zNCgL_QykYi145-WJ7lIkGHUIYy6cPVDhfJs9ZnJgPiN-g-e5Yji73nVacW0Pmr9rDasIsWV9XnB-geHGT_6q31eI7Kn2tP-l4jEOWZJP5uZ6ofLRIwOqOfI84TbClaIVoj43X4DYYM9hnc73-uOxsk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109044499493864274432\">David</a>"] },
            { photoReference: "AWCwydh0RHFB5__5sKZo2HqnhtcMNWiBkcWqfsD-xXx3-RRGi0eX6ALYdq8Zf3k1ogc7lgtl4BJ5IcFysgdtYsP9R2A9-H4HnHMMb-Y0eRMxF_zqyjcibyE65JFagl3PQgJ_TdtSVD9G4jZoH_csAt8lUHsK3AabHE3Y0NWT132ej2F3KjevKGJ2mUtKiL-SuMybHSPMIewihy84LSHh5kAVJRwl6qUHEwnw8S93TswKsjk23uFttV9UihBzclzK8eGGLy5SK4H37XTeub8waAxIQwwHbQy4koUaMdcu6n94cmrK1SdPf5zYgnxO-Sr9iAS2FuPcrrf99DexFO-MdNdRKqdkfK_VwVPlEuiCbqVOPpXBaTcotRCJ6tYnyB6gApjnvXCgrQKyEw3ndabxlkukqODxBSSZucUtII744Rn5n4Fm8X3m", width: 2456, height: 1632, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111606343782302068387\">Dressyer Kao</a>"] },
            { photoReference: "AWCwydhellhepog3F0BPycEzD4JN52jtKVQfcr08CvdAwl0ptqWJ6p-95HyczP0BOqMh9okbK2ow7pFWBBacRyXXAUbe6UBIRuwMJFMrPZq2YbDCR4QyTAzPKDZns2cYG-EgGm059aIK71NTd9Hq3tNsUIPfG6oqvjRlDG6w6xF60__p9E72EBIGsYE4kYUwX6AzpDnP4fVIn6wJH7k8MgIYm_-nVxWxYHDIUKT9KPtIQ2g4lsDuJnLHTMgr-oxapmdeNZpPeBE_8omw2SOOoA6SHMFkx1uTKcLZNbCfstAAJv-7Booa2dJE4AfmMgCV3iEV0UkYVOMGvqx-nomC8K1KZcSAFsIx1phC5J8ghUu_y7UF48awzedOH4zrnMQnIsKeg-L7-T2yUwTjzJoOcNaMOJsEUjgeOb18ng8VyDmCaj5VtKacfIsPH6bIdbSuCOiE", width: 4080, height: 1836, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104429139031917570525\">Arnon Techathanawat</a>"] },
            { photoReference: "AWCwydiqruMgi5EiB7nTFxI3uMpDnI_1TS4O8wtgPSlTe9Fh0MgeF6qlrZJJA69ZciK8DJoOft8Xs0H8tmQ5EzplEs97Pbi84cH_C6mh3ISyrr2I0c-LF_1gEIdT9vHbrnakLAhlS3I4Td8dHb26xRGXOKuxAncnTVh2Mo_NxBqP5DSFqSqlQ5vMx6Ofqs9jtNuxBtMFUa6cAbaJTDklj1gLChMA0po12QtP7Y_goSNmkO7NQSOdCE4Gw-Z5gKXtyD_8bsiWFlUIdLfoYATFVwjgBXIPbEupkTv5uK8_y08MWEWO1CwkAbzfLtq1dZrk3EjCJnC1rbm3FhQsoyk1g4tRIvhtuFNh-ko7CmZGeic898ZAZHvx7n5vLAaBr-WooC8cHuEu0MlfR5oclBojqGzs-FvQfSkhm_nuFySvvNgPI15A7kyV", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113663828318181731104\">Khelim C</a>"] }
        ],
        summary: "도시락, 반찬, 생선회 등 다양한 식품을 판매합니다.",
        updatedAt: "2026-08-16",
        highlights: ["24시간 영업", "다양한 식품군"],
        tips: ["호텔 근처 이용객에게 편리합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.arcs-g.co.jp/group/toukou_store/shop/?id=73", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18080079601130650623", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Dinner+Bell+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "다이이치 스스키노점": {
        photos: [],
        placeId: "ChIJvWHaNecpC18R8GTqg_86Ggg",
        placePhotos: [
            { photoReference: "AWCwydiujRiy553-7Zs1GfjBmkb980RCoOAXWYaL6NaeL5tDKR44g1hNRgxM48pCBrsZEuYtBu81-RS54R8AoIMdsHOWsRPoHOcDxM6_s0Bk6QO1omViSMObI8F-Bdc7ZI0mkt-HxGHI7xMwQBkj30nmQyXtQsHNGpHSXqcIJZmfml-xgVz-NE-Zgf6L0Aonw6MIwTAxyjD1C_kVuDk6h46oKB_S9fbR5IfSa2PMqFjDUcC9CYT5Pf0qBrzsS9xRrmmG5XpQiOa3vQ1LPnMMWlMDKB6lWYkI1oiHPGqbuLc2UFIielguCuwp2u1YHDCdUcelNvqLNiAHxuaUPrw2nZZSIeTA9f3YyIMlzBzTAX3NIENszqnqQE5vLGDb0d46hfjAOym_BOhdUZs4EkYr-uK1mfA7DN13bf_r9SuI7wjowgcIbD-kcHn5Jh8oWwETj0oP", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112385624159674407873\">楊道明</a>"] },
            { photoReference: "AWCwydg-Za1HDsRkyM9BONFjiHGZtuDcHDqwMQ1J8EMHKcWZRWXVPco3ii4tK2v8ME3_NRz3V2wGGAcSE-TTf4UjalP3md8303Y1D4i-vS-QMHPvf0wBABxpnYtQvO0jM8Qa7JWTwY2gpSaBV9R8Ggoczmy_jDFW09GgrIan_m34hibIe9j0IzchAyBNIZX0xMui7oEaEhvqPJJNs9XIC1bgfZb9AzUS-CkgWX2prYSbLmIKPMuSKQ-KlbIOeolg3LFU-Rbe6x2SbWvD55AtCVKEjUJ2vcycePPI6JGQgoMjkW7Ig8HNP-uetxlYkvMuIV9Tr2iNnfLvQ8DXUcoXbSCXvjxraAAQcFAYO_peutAP8bYjVWKfEFfdXo0j2etZY-8HcqiCbWXKXj6rEEntFqBQABkzYa63cMLvofNzyNwr43R536epHvHXeadko9Yzk7YA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109510146020143228998\">이시영</a>"] },
            { photoReference: "AWCwydhoDLSFeRFVEP8A6hbS4bE42q8coXFKbDGhu5cB2J8X656nLDX7X0DFN7csSnbv2UdrzB-CuKM6ld-Gp5MtdM3CMzCQVcUdrt60NSwqFJqc7WGe0kkjn3qe1N8rpEuRrZsqPVE3dMgM7h_ytnIlqcykgB3ML5PlZ4KG4IPfFhhYdFtyHDHxichwt9pkIbnEhAZC-BxdMnZ5QaVZoChnAu3yjMRh7YpcrRqd8fP6Qn_aCT89n1SX4SM_n7cqYi3xYvvvb7FnhncjjRtpQbIRa48iDmo2RYne1wJMsUHDZVXOMwsM4NQ3gzhIAPDpBdYIKigH3uqTLzcA8sFNfFvyqUNavcNHMQZ0UfVT6IhWynYyo0m-21UoR4uzLB6y97vxLNC8DE8qSW2sPHSMfl-Q_0YihLIEZUIzIztFFLl04H2hbw", width: 980, height: 1038, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115384791921557616028\">Ryu S.</a>"] },
            { photoReference: "AWCwydjJjm3pXkQQ6ckJWkmIro4zpSpEeKrWjHissxrTK4vevmykivYmuXATSgeQg2_C0d4TK2i1Co-AZWO4BHU_ehIZzr40z2Yuy5L2d9EQ8ZSPzLrQIEAnEysKJtui8AEDG3JKevekTVRaK9H4Mm2zTK_2qzidmpodI75f5pCZW0e2rKmLxp7UQji5uf13zVxxG82sQ8ABOMHDT6dDrTT4IehYsAQHvTm8PE9UXGsB65JjJZwxM8gtsePn4Nvmba7-izHxMMb-QWkhV5qMFgvgwAuXPmwQvFK3NkL_wj1UAgoZkZTNeYFYz9wW70pN46ClhF4_Oh7zozxqDDWHO_ULl4kP1JyW7s8lm4PpRrWi2KC2BQHtV42KZAvcixKTgVP_CVQRlAqeUnM2OnIjYdiuWAdTD1v9QOzwQfTkXrqECrAxDkp5GcqB78inXO-0-w", width: 4000, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115384791921557616028\">Ryu S.</a>"] },
            { photoReference: "AWCwydglexLQ4ELt_FzJoevV7ibD8TqK7FaRyfQJKZ80tdtXBJKIviLwBP4Lb41j1KpdrtMPSShZHOaxpARmWCq-687_Lb7mmka7KZeNpEjYI0TP0IE7fhA8Aphd2zidSYGpqsS8wJycqImVc6TDcgNpGwda-rM5q0vhtwTc-Qpj80192oxIXdDS9FB9vCsmPttuxwcAOyn0o_JeZHB4tIMmRFSLn4SWBh0ONGozG_fIGYDQ1HYcQVuGmNkBINyPEN7I7Gh18ZYQ_CWDRM_Y9p3cBUeANDh2RbaHGbFM279nZa4PcfmHQA3bqkBgTuWFt4MJ4S9fJOvYr4znWr4fV1wejj9PLujbxuH0yIaRsn1AEg6-dFpvjcvvwnGqbVlIRtf2TFi-mhxmnrf7KDIZSxsAo6tkH8TbHU4W8pDUIxQ0er3UZPMlJEvcZP9hs_H3qg", width: 3923, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115384791921557616028\">Ryu S.</a>"] }
        ],
        summary: "현지 식재료를 구매할 수 있는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 품목", "접근성 좋은 위치"],
        tips: ["제철 과일 구매 시 상태를 확인하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.daiichi-d.co.jp/post_shop/ten309", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=583843970802148592", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9D%B4%EC%9D%B4%EC%B9%98+%EC%8A%A4%EC%8A%A4%ED%82%A4%EB%85%B8%EC%A0%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "맥스밸류 기쿠스이점": {
        photos: [],
        placeId: "ChIJbSdSc34pC18RL6p_shTiYlg",
        placePhotos: [
            { photoReference: "AWCwydhry3bzN6v7bE-3adKQtbYy4OypXr9-WkFedBi2RcuEl_-aHI9JSVEUHx_kI6_973AeC5hZt9WQD6mm6TKNqDVHle-QuIze0fQaYKrDkniY7ieYPdlgE2j1nn1CpzmoFAwJxpzjYjMRGyyK-qC2ZDWFhxK4XQaz0561AY14IXZkYNrp6WIWrqLDP7SJ_modU0fiKES27EJuZtfGo2PhB35lPtcPvs_HrFSbL1AKWWk0aqFs9Z0wy5c8eBVmvQBkQbzyc5jFY1xida4rHX7WI3joFcGnK4b3G4ckV9x2xivHLs_0pLNyQtHaDl7bJExmpB9iuukC2LYRGR4QrL_BOWui5gZTn43tRyJVvb_FhBp_r2nTqOWvt2sqZjORsdq__nvFDbH5XPyrKy-jSyN4eMdIpW7UI21fD5uMJOSqNUpKeg", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117722106968256310811\">Kwen0828 Suh</a>"] },
            { photoReference: "AWCwydj4VzvPSHX57KJ97B6tuWo8bPwBns7iNqfFCo3i8H8XgiloZVShLHprp9xbuvTdDQBL3s7mh9K6TLQn6rb5N4vkbjBEiLNMKCAmaxZJoe0c5xFDEYHlfu1jnHe34w7cBlcaRdQLJ2hCEaAUL8fo8Ip0VvOrp0p9DESTwFpW1UfuXzFIpiM3gy3kczFIN3r9LaNuLbbYkLMJZqbNTY-Hyw-z8xt-u3qgD9WT5DA3K6jBS-2PzlhO4xhD8OvhXUiD9sqbVBXpetyYvucivMo3NlgjUO8Pm_KqeXgb1kDUem7SZwUg9fhk2L8fDbYpNfmKQGOPC2B1JRVRRUXB8r-CbrH61xcM5V4cq-dPWKCECiG0Qecwt5d1tZtLGz61nsAmytK51tDi_3XtPZWnEE0DPpQoFzza5s5y-LHfwra6tyLN6a0", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111110585864235736339\">masanori hayashi</a>"] },
            { photoReference: "AWCwydiJV_6EFyBm9oJe82O4e7aml5j0fufWGvFf44zGfiPqOfOdlInBCjxMdV2TPVNZi9kHAXqZK6i1Cr9fx9bADr1Hoqf2yRW9nEoaNExCwCHhLHSkW9YxCsTEwWCR89K-mC-19E8GrXAnpP3E7POXC3BE215icbv4blC23CSgDZ8zjjScuocAWXlRDF2GUIrtEyH5M4t7cZx0XXiXIAEwppSjlf1Dt6ynTiYQ8m-bq80eTeWYRxsMdH9ZPO7dHDoiYxecPZP7rzbqcTXTg3mfhM2b81IHPoLFKeCmjfIu_MhAOhbme1XukW5xTOzNH_dAdRkPL8-sdgmLw3NrQn9KFQkA8wyrCL08nfUPSSrqdi3PbIHeUIRzaEL-DsGz8aFuJIkm8Uvsa8QMs6vDOfj9yukA4QOleZ5Ec0DW4aIT9CU", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118273748337434050469\">魁龍</a>"] },
            { photoReference: "AWCwydjUPJTfD_LEvH6qyylBVRw_hGhYIQSnxKX0h0LybI_c4jtgf2Jdh3h2_2aweB4_-17Tno2baRu3YluDVe6MHsVbQrIOzZMQGZZLW_zQHQE7wZ_sw4kV89bbI3iSbGBxuEjBfjS3L5tvtbIh_0fEVtcesyyByYHpJU2K3h6HUx4hQX3lASYGcS5ncshR1UQ8LUihKfBiVLaHqmDuWsCEWsuuK8LqEuCW4lgPiv6Pd6XiW64rffIFAZ_MATGapG8AjO6NC79ry3uZkqZK9yeBG9QYEPplIvjGUst3Sn3bV6BCR_SEcUKn1gb8V0XrQAfa9U2oM6w1p9S-Zm2HNuP7yjutmW-TZH8SlcY6dzLuvpFhWUXPX46iQL_YtX-hx8ay92NsFuclIjXMji7V1auUIBSY7KG4WeXBzMubtznfWgo_kg", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117722106968256310811\">Kwen0828 Suh</a>"] },
            { photoReference: "AWCwydhOHs_dWlr1rB7UWHy57WOqfWH3Af4A64kFqxaYUOm_kZJIN0-ict3gMomTNdYBP070SKvT9jpr4SxFFaUVqLuyPBzVMugwj7uOK_HSRBN-aKCvC70hxp_I7xN-DN2BYzMBemUsm9dQ0gjDL0iYDPyCdyyXaszZQ9dbhbSlBHCkvyl8WNfE5eEzzgBcI8KW-QlthI8Fuj--CDUv3VJOpgZsVyeozNIWkkKECwKJTv2kNEyMnCJ2QCXf241uuP1siLnryKryto5L1TSCGiI-FcMSfTMN0z7ucXdS99Cm_W8wVbIiCvuITfTrO1YmEvCbhAk_Ygiz9RBaOYW-sDjDhlo8NBswsUKBGJGXfkIp9ZxLLfYP9U_PP1NbevOi9AWdXqq3wH78SAE1H9p9t2VWGd7NpbIblyDp6NFNDeNj4QaRDQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103969111769309268798\">Yu Lin</a>"] }
        ],
        summary: "언제든 이용 가능한 편리한 마트입니다.",
        updatedAt: "2026-08-16",
        highlights: ["24시간 영업", "다양한 상품"],
        tips: ["늦은 시간에도 쇼핑이 가능합니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.aeon-hokkaido.jp/mv/shop/kikusui/?utm_source=google&utm_medium=gmb&utm_campaign=30490-aeonhokkaido_20032", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6368901401577237039", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=MaxValu+Kikusui+Store+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "푸드 버라이어티 스기하라": {
        photos: [],
        placeId: "ChIJrVyglMQpC18R1sOInnyuKbQ",
        placePhotos: [
            { photoReference: "AWCwydjrHE3jvhqD4x8jLOypkH1NinhFGrzoxAPK0oVNIXzKT8FmvL-U14ditznUBUy-rSAIoZJSdGUEaV4KhvpK_g23Vry5IRDN29yaq26OPG4B4iderct8vTp7__1PEPhlxYAYh31h1lgIswk8T4svKxNr2nK_6lr2fr6FEqfzCLUMmkVeUsmQ7COY5V7KEWsB_YnFotvkRaoAvwH4yiw-xUdLzxGrCMwUOCspHjWmYrVB-thbf1fXygxFhjoWRlO6wLMshGpBECr_A3rhefX_gfGwzYWP3N-lmoBSYcWZ0OH_JfC5jFnIjp7Zmqb7_7nS4ckdcfZbYOy7a8l3SU8IazO9_hox0Enugvgp8COHgQU0jzv92CIRrRJH0N7UUE7uIDPhOUBKOplGeENNhC8xk-PlNDdnkaQ4GlwTyZOI_74", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117167829093910436678\">W R</a>"] },
            { photoReference: "AWCwydj-t9TVgbfhJG6JbRCti6brWs5zXHAhe0IJFZw6scdk5JX2ngMcQcDz8XhGbA6ZUhGBf01RyjgqTckur4khA3XvNW6IMqx11Lm0jeBrbJdHvqyELljDp8CXMd3sadWp9-LhACxsUa7C-S9fYOhWuL-ZQYLOvhixRh3DvTIObl2L4dA2v4ZrvpQh50UpYyD1Ilfs6vlIZI1gh5U-1VAkpt_XCR4JeIk--sQEyBTVcMN7WG5bAqCFtC-LucCUVIl0V1F-lFJSopZInwbE3Pi_b_GQtVpmmnA7F0NNcWDWl2hAeOtYh9fUxAFhlWJRPM17Rc26yWEbhRpt5-V30M2H9zYCVZfYVktlGrXSGGAvcXz3EoR32kfT06bqCnxfPgKG65qT8SiKwiX5bkw-1E6DBzjJimJj8KFGlJNZyZLBFQHAs22o", width: 1440, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100710192915401553916\">こども課長</a>"] },
            { photoReference: "AWCwydh3OmKVQnEzTDfkCzy4fB4QIVG_ShVGWn-dSAmX0VRuGr_oPE5qgqK3bzMDsnyr-VdNzLPnFU0NsvItO58E2lMPazPjs48tg4TRfXYJqruzDiPwUaRuuBVbP4EalQWxvcZweRBwHN8eRhAVR23OV5F9zn3IO9bg2-aJE_TX-7XEnYXYzvWcT8qq2Yf0euAar_1RLeUN6YlPmCnejWm-QaXF6rIG-m4buvNuvKbNVwtGgGpXyzVxKfpcDZC8dlGD_BaCpm-uXvA0cx-AUQ1kDmeTLwmg28CDfxdlTqRf_juuuI0_i3xYhHA5czjIiHlLWRfnoeyGk4MF2D-vr5RwJmp_HrSPKCa5LyoMzSfB2nEpiLJg5MduggDHNCutY7nQWNtw6gOlB-gm6JO9qNLYgR9pObB8z4ROtoA0AeuXmu8", width: 1440, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100710192915401553916\">こども課長</a>"] },
            { photoReference: "AWCwydgEHL9WvXyPWKh10BbIpa9_gaWGAKcPXAsVzJml_GK1qZUfwO8lRPj39mzHoMXwMhAOPEmU8Ru92HQe-kCYCfdxgDNnZdss2dhpLMBxLsVBnYwmOhQsPTaD7cTTzCYPGgzC3RI6bqXlKSOD3_UfaLbYqp5qCUkVUySrRV8BHlmWFjON0-xs_Vzzs19-txOu7kyOUr1DHNnq-cX_ve_wjlb37IBNzHH1BvjYjugpnuM5X8PEiCR3HA4yAYWjbR8qzvFL9Gph3HBvJUkCosSeHh8bc0IfWiZbKpuNi2hHNb-ZA9zEJpJBeDaI1CwpY78KLfwloSXAmar3lxiKgMt3uyX6TjOi2rNweGz8Q85ULTghP1jxZdqNiUCoqtG4LUxbsREcUCwf_6OkC18gpndIdHUFf3BPIu6e4J9fvU6N9_4", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113289275166953835390\">栗山伸也</a>"] },
            { photoReference: "AWCwydh7r7Hb9OEp2grHyEPTmhQ7BzJ_UF-QComTxVMf-8r87bMTILAjv5OOC1QGFOVwzqC_y_nv_Kv6vXHGA48OWaZFl1EsM_VfQXLXOmyRCU2Fhm1SeNgcq0dH2U2sO5rPFWFG9Jq1F5zY88yjrjEKxoTqjbQJFzadea1temvIP3ZiW4lHllJzOyUmGGoy7p44seTj769VJfVsc9RREL0eTHr5NqxbLkg9Yi9EpSNmF2QOm2cLgAAO0IfwbzJ8S7MvgaKG3Zw6_5uw6cE4A6TrLsuKmhbwYjTTfNRvd84EvUkjA-nboehs1m4YoVg53KiRlfnKy4JIGVPSDyZHAufOqeLQnBIe6mgvt3gamvH_xn3WwbZ33x_5iBRvUvMNdV3df_5AfxORlk41Q5E3VRa7Nm67Qn7E4o9e5KJQ-oFc5F8jv5I", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114288561401986284917\">キャンパス</a>"] }
        ],
        summary: "시내에서 보기 힘든 다양한 브랜드 제품을 만날 수 있는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["일본 각지 명산 제품", "다양한 브랜드 구성"],
        tips: ["우연히 들러도 구경하는 재미가 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 7:00; 화요일: 오전 10:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.f-sugihara.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12982099251131106262", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Foods+Variety+Sugihara+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "JTC홋카이도점": {
        photos: [],
        placeId: "ChIJ__9P7Q4oC18RtPOp3lIKRRo",
        placePhotos: [
            { photoReference: "AWCwydjJg7Csq2yab7vuY7OEViBz15PhNBYqce2AxrqkUXuDT2ftaCA22p0odvQdICSPBHsyZxptO-oBizINY-OGiSe1uWxvHYjF_4nckw1I43qqHa9HkFR5dZ-QRF5GFX6LiOvbmplbFQlzoPLhC08NqbGGQ6jClcku3_5SkhT8eib46q4DXTc24ZQe4vcwFxFCH0wwm8YMPRoYIJbfKpAF1n7Xaevs0goOk4jXNtzRHMKFSk46wOgbKINptrrymCSFvzjt-ScDFNjpgR6RgvG6jgFD2xrWP6-OMQW27t2BYarxrxNc3fPm6ARk8aFGqqi1bx0bm18teK5_qF_V1ZIrVBCjfiaO_EL5DOpVrN9egFF_Mb86RUEcDlMas12VnjS9L6gKam0MDTrSSt99tYUqKp9kYKIcCOCgIF2QukU2cMf_dA", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111119283603937323193\">Ni Lim</a>"] },
            { photoReference: "AWCwydi2VnzQXGzuSzJf__r4slkkBpoJHkaW_U1QZKNNf8xhiy2nBX2QZNCOgdTB8eEtoV5mGtHDTW6kcnr75AelR7O0FaaU-egk7OzjC4XMZNIBhG8P-ipfNV3JmyMrXri_ws2x7rHnLhBDRyh8-eFTnAWp3QxYhRBN0HlIniDr6t-a6Nrai6lfd2dEyZd8ikcYqorsV68pjT73BYBdcAeajMsd6Ni6nx3BTUXRB3F8Twav3FXBP5yNWLwss94v2IbzQZapT58dEesHMF1P_tzqs-c6L5nMeDj1d1S4H5PWA06tZ67z8ipN9O2hNvcX1lPn8sb9a-28Ra_CG-Ez1n9V3vIqFI6hy5E3sgjM-iLs2cqDClF2FeI3dNMo90Xs8VT_flN-OEeKJeRZUHT56sIzbS4II3Y-2rRl6ieuxIUmQK-n9SWs9PX09fDtzNyPiHHv", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109139760551649443305\">Philosophizing</a>"] },
            { photoReference: "AWCwydjOO73h8a9Veg8ZU6vca9-EAwqE8TzO0aD8e5kDQ6B3xj8G4wEAyexJBHA0sL46Wo0C7d-4S6uQd_bSs2aW4vKw4ehQQIsTKgZR-clb9D4IKIEvWf8WAtcN1PYkav1iGlTjdk2hZe7b7ZYvhpijpXkopK0lS5atyhyPufEjzarAx-LlYS9MEWl-wIYN_8h0B1YzGK4ihk153LBP5dmPoc8nZATqRDPRnGBh3GVFsF1K3j_tUzwUfWs0MWcWSeLrbIe30AoazuzkazL2fFxUXs-sHFHQDOP_hwLohAZCp2G9wAnMqrayS2hYHgMesbyUnpV-CNJo42cfqe7E1V0fnnXMhocLVDFfrEmW8luXEOmp1lmaA-T75V26sKFj47VSsCccBshud5NKstVmFNd-8bGHkr0sSLrNJRWRHlAvz_jG0AYO", width: 4128, height: 2322, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101739404369472609041\">劉美麗</a>"] },
            { photoReference: "AWCwydhZppCKLVcf0_4Phjy07ULEVsmPS_zH97SAs0x8qoO1SgcgPhI0h4-Bc2YvRf_osDgK7XXZVMvXo2QH42dvhoMXlxVjgQl25JVhmoN13-vG-6fWS9fGtSewvUomA3NJUzPEH0Mr4OqCxYc9J1wCy-EXLSSsx-ZEWkSHIBXaBVC2YWzWl3NUWPZ2BJWgss8FptmEeud2E__iSAME2hBxQpJP4vvfSoXZqOLygPrQiWm9jBqIp4GoYIEOBvJpYg2zphZmO4SeHArdXv4dTOJxP2cAiiN9VVnnCUdWo1bkCoLU_MNs6qVmOdwls3kMc6zWueBxs5vqOB5KmMFw-89y5nY1TexoVvV3DXPJ_zUVVAy1P2OtnpHscwsi7C6F6RbraqFZlof8AzByWv1CM6L6Iy26INJIKVxInM1RK33TYjJSqIA", width: 3600, height: 2400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101613009396753261907\">ALFRED PHOTO FOUNDATION</a>"] },
            { photoReference: "AWCwydjm-1jZG9qu2e_68RDORj9vuzkIJfG0aTaQpcO1XIprI2q12waBtKBVuFpdM4QYmB9cpNwug3d1LGYZ01yLuEGSy2VBCO2JJnz8H6eTaJcSQZ7tmTUAV8Ci_IvVPku0YS3gCwFhZnnQ-Vq67wmqysqtZ6FKlbLNp4nWyAOJ7cUJFv5057QiioFfmfivWiTzmdZDHpFLV7Qzg_4jDAB6JnVN1Wdpw-76D-pO0TJ0QiIRHXdysuat_HGyk_hZyM61rWtPIneJEPHTmbZZVyo0YWM_8vd0DDuUi79EojZpSdGibgZQ89CspQwl6OTdpccj0O7UdeD7DsnFbytZDqsWg58UkDQuhkJXqNfeZCLIc_5STTVCKeLswiHSJrn5nIfcudV8RdRF_HCWTZLYI4n0eAIVB6j6F0smdS8Lp5ioPTRJMHH4", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115110810669026111167\">咪糖</a>"] }
        ],
        summary: "쇼핑을 즐길 수 있는 면세점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 상품군", "쇼핑 편의성"],
        tips: ["영업시간을 미리 확인하세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:30 ~ 오후 5:00; 화요일: 오전 8:30 ~ 오후 5:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.groupjtc.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1892930569418437556", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=JTC%ED%99%8B%EC%B9%B4%EC%9D%B4%EB%8F%84%EC%A0%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "다누키야 기념품점": {
        photos: [],
        placeId: "ChIJeWkVsmkpC18RfsFEr18dERc",
        placePhotos: [
            { photoReference: "AWCwydgKYmmiq1P6E9dgoO--CBVzy6gzALzg1T4GxkqkvywWyBlTs8Z9nHcuLNlpGMjvTH2UzZPcor4z4exZ2I9sZHyQZmEaJud7nSG2r-Qwyli-ri3YebLB-7CdYVaulWn0NOSP0-p6VovxSpPVHQwHyXIjTA6v3fNahEYPldPxm5xOy2yu3tqRqnEM7fZKgZOoL7l7DOAxuq3MB4j3S7sGjzwaKysScYDF1L-c8hexiQ6PM9a0F14kRUqmYnOEY6pnACyKrml8Fp_5vKabl0a3mn0ApGtWYFpir31bA1FDUhtHqsDVim2nu612skp5k5QDkajnuXxQGpUcA3MEScFe3fh76nWb__gcFvN6CotoTB-y4CfHKODVDnQGXMIDFtvGX6zFBYmI8qhrX-0NL11zU9Aop7bZiWIG79DGUTQeULy33g", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108148566948261288413\">こうめの旅行</a>"] },
            { photoReference: "AWCwydjezGC9pZOsAelUgVAN5-uz0h61E3BfuQMGT1XM0Z5ih3f97noS_3BqtRGf3FWVN34NkzyRwy2L7JsgsDrl3pHmzxrSpILOZJvK_4LnskaDzRie2WA43zRwK0HnfdjSVtDqJBJwWIa-uf9jq_y0Z5DGvJGlVVwZg-NmsL1eqG5qOItNrzWCGf-MIpwKAZ6pPCNYMT8Ju634nEPnP_pyvbU0DqUNeKjLVylYrQoYWrpPMb-ASwroToBZzV_00KM_S4b8NhkFogDd_ItpZab6_U7s-hY1Ms7Dq9jNsXBjMwbyrrVcOvuYJte8WuYkbZ2CESYKpaaSzviIoxQ6IImhAtjYEorknw3kPK8Cv7ymSyID-Kx8kBYBZZC5rkqW6whdG_gSzwi3gQt76FrTaUHE2ILMZ2xlyb4-8nJ45vNclXnukZY", width: 3816, height: 2142, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101830446053743032281\">北海道みやげ たぬきや</a>"] },
            { photoReference: "AWCwydjscoAAqF2nc4i3BdCymFYu7RR53Ftt7PQyMcCkBMHJGETLNkBoNPfwwlO50NusunGTLI8JwdiLCL1G1kJk9QwIEXxTkQ8SfsBqSqIKE8weFeiBUMoglrU4uUEGyT-3Y6HfQu0P0LXrlLWifINeNbmljdMZLVz1rSxJlU6qe2RSrGiiUfihzjiaAFdqY5RVQ8bo4HPNxooILVQh-Nfa4anYkOV5Z5GxfuAfZ75PkFeM2o2SlGg_42paU8eeCPDdQ3LT-fbwGw6f5RtllAKnRKTEO7yhWcftMBogxuVDeq6DcwYb3WOUu1skJxVAnbkzoOfmXeBiQoC6HzGO0ij5aDtgBp-vyB1fr2n1Lx_fd2fpUg-71zjuNxxKcKggdV3XIsntMVAnc4Yvf6G8ldno0YLl2Wtxc1xyq5Y7LTYh12VKAQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110844348867333243813\">Noppo 3</a>"] },
            { photoReference: "AWCwydhc3x1gY5QBn9zYyF88TUS0xDGvar5Od0352q_Lksli_1cEHQAO4Hv4UJCkFubbP0HTapUBLCXdxLvZC5odBmPgKE2aV8y9N5tUA_k4WanxvBhI3SuZw-OFYghKkrkdM5blekPMc1uI-wdYr20bCBhW6IHnJVvFQ-vMGpyWdK-4MIHETCp1KhDFtPGs4cUOgm6hwBV0h310NQmu0rmcqtt44w7dOAg_-i2NfdZpKPmNMFUnXuGBbUQgWIavgdOItQ7d9AOqtxqvJpqgCblwvp6FH5CKEeHh2AiUEp8V-7BobzUmU1ayFQyKg83wemXCbgVa5adyBrszJDxZIk4gSSuvoBB1UieaW8IjaYuaIPYAFKmQMahT9TOKMaSuQfOCmKliMT_DtOQ-sLJRI26pYc8Du1f6Gg2ovVm9X5OOcZ8guRUw", width: 1205, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112120406316886389962\">漫遊旅人</a>"] },
            { photoReference: "AWCwydjVyN-rz23m1aeP3JhCHiuqgyD9vpRzVyJ6X37VHYikE4zPp9O7XJbwnEgd5RrUNy2lG_fcrDlioJnsZMpytmqlSwP4qaGzx8O_evH1-iP55wpIlA4for2rM3Rcy2bjUrN5T0mLl7y8DLcvhRJeS2WqQ5GfPchIpmTQuRHB3BcgVeAKNeq4Ry1inObqgurEl1ozp-ghEJLAwf5W74X_hVFWy8YFTC6a0mOp16jk9pjEJ_QIfH8UJAW3sqG8FX3i3zL9un_5BxxTzOHUqfUXFpgJoNgnQICSSx-_KrCjxqmB06puFXXXatBWW8NZFKha0F7FX36nxdzHNhZ6HvJexdZeQGa4Dxk8bByh_DwChksPoOYK6tPpcd7dQ5CnT4I8pBrk2fysB9_khY5T52HJLZeAOGdjgR0bUXjLaht5AMLU_Fl3", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118116488361099667589\">にゎかー</a>"] }
        ],
        summary: "여행객을 위한 다양한 기념품 판매 및 배송 서비스 제공",
        updatedAt: "2026-08-16",
        highlights: ["다누키코지 상점가 내 위치", "편리한 배송 서비스"],
        tips: ["전화번호로 배송 기록 조회가 가능해 편리함"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 9:30; 화요일: 오전 9:30 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tanukiya.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1662142034276041086", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Tanukiya+Souvenir+Shop+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "홋카이도 도산코 플라자 삿포로점": {
        photos: [],
        placeId: "ChIJS4k20gopC18RukC0johGvPY",
        placePhotos: [
            { photoReference: "AWCwydiujMftLCTohJlKUV70LZRVI_iVVghMSYlIwpNK1QxsgE8-D4CI4td3qvrcr4Hmo1BckG5rV2SMBN-XAqdO6DYJYNNmJD8exEIgDuCvxVwEaA0ArcrgYe8ng1dcPc-d2CsZAoXt-t0ZDKG-jBDP2tJ1e61lEI_p7YM3D3PdpZS_dXawC0umgO7Z0pTsg81_7GX_2X_-YPJ6I3GxJejELQ7lcp3SGUmwfHCV5zSOclpsMGYwfZa5Nso4OT3JZnooWk_K0t98Jf01rYmaOdNaGILbJ7Uh897yFaJLVD7fSvmqctqKNusdIKfbm9A9b0G_XjAtjD8riQriMJ-SiEPLSK_lPsKTtzdxKXbjUMjmocx4o90z_CoFW1nzVxGxZhgKxeyXkHpxrmUaBpReyVgOa6ydkudc8Hm3b87-cRmR9VlFE-BUUIsVcAmG87AEzPvO", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103692353473566330530\">松坂嘉之</a>"] },
            { photoReference: "AWCwydiGye91NeJEkzauEEF-wGT7ce7o-uGdyS8IiEPZmG2dC2CckJCcIkk-zEud1GAfSxbFlXmR9ZaJzrNs4PxE7D_wkseLGBbdaUZLBSMUVerDmexsI39Es0J2ii3bKlrq_leuEVl-iHrBuHtlhu-4YAc_xGLXXlsUUGbJ2bfC8jfC9sI1_YaF5gibz6vSQiYEwQ7x90sfezDC7bocWzVK7SfDLcRbr7qZ3EZtMoZfLhiLt9hbesHD9h5wpXI7Cg_RKRGAkIbeojUtp6UXPhZko_uoYn4tusLDF_5Jd_AlfGC3tiyQW6hZpuKQzE9rzkRvreZG7uuqFix5BVMAM7a8pNm3xPR3cH9ti3qesvlQL5KYyczJSea1FLamIMlvZJFg9e8WIRsKgON4yOwRncN0eg5ZC6uQViO9dTB12z11FiYQKe5YU6KeqE55dqej3w", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107839510671163148997\">ぴろし</a>"] },
            { photoReference: "AWCwydiO4WMfTC2zbLocYoF36uj00QsrGVwzCDYwpKP-Dq4jA283UlzvY0nAnoXtdfaT4IBFwuiCa5SHjx6ti6yqicenCh2lV5BjNHho-akWAEdN4ZxYj2eeG5_jsFAEzN30JELJsXgce1C5WVVyFxh_WxhMPwF26ZaZFPdDQAtbzTBuR6cwv9jovCc27-lVt-lzvz8vzDpov3paUoMs5tJ24Gu4ajhoTSb68Oy2LzITy9vM5ZfqDj2iyjvj87jp-Bgb0d5AeTzkaq7T1QHk-0Y9M1RMKr2_1E6ZS5xx9joaGMH5PGe5TvKKG1-P3G-7T4XDI5L7OfPPX13t-V2EhhG2kOTKo6wqISAgNt_XIh_gicOl2rRpupXKGz861-aeMuY-DP02fjNxFaoZlE-a0UxY8VUes1caAohTyH8JqjExAVA5ezYMrDl7k2md-t-qr4UM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105222594286916635561\">TAMAKI</a>"] },
            { photoReference: "AWCwydiS2CkqaKT4d71qyDNLCIH6ra4yjDfHsq7vpteqthAQOSz0YkE-ZoumtTnq6CMyou6bptc8pV7HSdaAeNI5x8QAl0FbzmWktD4sofQ025T4qFSBMyPHDLjj6Hj5M-iamxa2BezC60RBBxORk-LQbda9dc-FyONolw55aAySjIYPEa_bOxcSm2mKm1xL1Vpi-FgYRpaIrJaE4L2Be6PRDd17MQE-7RFF_29rd_11J0vsqMN6MLzmpIHIreDKq-5LK0ApNwJ280LQ_0QuYcFsk2gEOrDhJ1VmhOCVMhAX6pc-t58_Bpr0eQhhQYGsE4PqzyjUM9-CqfjobHdIXtvmrc53RRhQScrbyouwF1LVx5Ab-ULFAzutwhyD36drzh6ExzlsSMHB51yLIlFSLpuHxg9x9280OfroVTM_kaVwKqFB3fmm-mLYVrfmYvBDFX2F", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111079750330182264119\">Garden Exterior</a>"] },
            { photoReference: "AWCwydgjbwO_ocIByv5wxJGY2KIIzegMnAgTgvxLw0jVwwJ13mnOK1UHyyszTr4Wz_L3ml8uPCt7tkSQHsHVlqjwVHjaTFg-8iIc1Nq5Pe5MKXUvIJ6AB_kEXx60M9rE6UZRGkSfN2QpGaQntucfXZbB7A4sRrZgW57cGwI7M2XrkxiyhG2e8OK_iHvNtI3q9RD0dxqtg3Y7XKgZh6LdOuN75eoZG4rpKyd_E2mM-SV0lcS9TuR7viniAVGoiXADdBZya_UOazKNkpvjBxegYAj9kStWjcW3-49TuMfSsI2pKVCe5IPr3tm4HogKXYsh2gGb2Nzte2mdQRrS8I2D-qD0asrGzPP8A1r3zI40gEgOjeLbQRx0n_BBHZ2HS_yjk60rfZIh4ykhw126bspQ50RMwyyDuS1ygvp3iI4Jy4s2Zp2USMLcmJadmMKNYoNqmQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117996966271017479971\">Kazuk Hiros</a>"] }
        ],
        summary: "다양한 기념품을 구매할 수 있는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["많은 리뷰 보유", "삿포로 대표 기념품점"],
        tips: ["다양한 기념품을 한곳에서 확인하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:30 ~ 오후 8:00; 화요일: 오전 8:30 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://dousanhin.jp/store/sapporo/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17779162981275549882", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%E5%8C%97%E6%B5%B7%E9%81%93%E3%81%A9%E3%81%95%E3%82%93%E3%81%93%E3%83%97%E3%83%A9%E3%82%B6+%E6%9C%AD%E5%B9%8C%E5%BA%97+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "홋카이도 시키 마르쉐 삿포로 스텔라 플레이스점": {
        photos: [],
        placeId: "ChIJe4ujm6IpC18RJ7I522Lh5H8",
        placePhotos: [
            { photoReference: "AWCwydiGrIGUssOSAcdupMrGw7Bsrf9rmnqCgscbQ1TkfA6IE_mIVGDRPf6u-5KN3u9HXDNgP7OJiZGi4UBOLgVEEgQf3gZDO3hCzXVZxcy0v7mTFHUh3yupYRMGAj3SAQOTLryauM0mccy0cJ3HOMxmr-lhL0cfcXOmeEB8OWIOYrprBbMNiFBsv6dilAw83wLJR3hUdQCtUztMOyuPv5gRO0QRLs7y1-Bjz-oVe54pX1KZQ5ruzJAu-TC_HNsLMNt6brGv9DfrfB5xl2x21783_1p5HeRumDzVOV31qcOt9E7YINI3x8xTMbhnNTGdrbnXGO9CJhAaUQJF_pjKNRqS8wFVppYEnaz3KdxDbOLjI3BN_ZVhDZA1J50NdoT-emVJe-dYIRFpaU_9gRCeDmEoXNe2-sHqgz-xpi8W8wYMxpSbMi_8", width: 3648, height: 2432, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110131518233259372157\">田中ひろし</a>"] },
            { photoReference: "AWCwydhzqLnsB-FQPDu6tgdFPmdjM-O2eqAu5ZD0OGiNlA4TrfV11CQu1ZOHQZ15HTMDp_vB832iQN_zBuq2pefrYlH-Srw4-6CRosPXq0thvXtYM9UxTRPjg2_OrtNiBANG4E13w7noQKazQRIleh9Y2s0LVLe0f5ck6sQDVqbck6EPu6vJeo05ivD64ZPxYO0WCMoBIUbwKq1uuetXRkv7SVaBr1FTzqOfHLfYvzMU5J_E52NGKQyBGxGrCllvE3px9Tqjcm9fMvQOyeuoW8MZX0WAL-Wdnjtw9Kb5cXu2wz_EOQWEceFpwXQRHkWu5_LeibdUsMysbxIL39MNQ-_-CIwxf-VCaCm3pYJ8nFzi9i_96F6ieuCSQqMBd-nHwfRuAsZcwIZX8fDexJ_5Cm5SOuDgNsLXiqCHAPjOYCS_L9CHg2_5Qyt0JRhNGfj7g3g7", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109572622455069852302\">google account</a>"] },
            { photoReference: "AWCwydieLc_ef8Bj0bseB3dCiFVy5rZAYP3it5an4CtYETqjsOCgmKTINTrRSUUCnTaUilMEu7WWGaMW8XagjX0OK3vRLKB02o4sr_4gZ1PVz56XWn9PZqxk03jaCT1sqnbD0QXthFQR3ZEsZ_rAG99yYVzjoekvw3E2Qqb8RTJWOnYdh2Sdj40jzf92-8KQpW3UxD1gZgKqdo9olMN9XzKL1FwUBiQ32orbabUDLVDrBXBLgVS5boSsf1Xgjw__yuWYSKxKFxngBlEFnIKc_Ub7zYKVSkm4Dks6HB4EWPto9qkvC2wEBSoihbcrjlnGvL4lR4s9ZuWDkmOKBwU1pPeb2fwWf5ytE86v51v0AX4ufuet6dd4f8kjiPh3z2aXANeI-Nprt3d_vODPVcx6MxHQz0NnKrJeqe4TOi5Pk9QparXPfA", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111787221804345472276\">八木賢一</a>"] },
            { photoReference: "AWCwydiiMBKK4HCR4qyYzKiIltpyFEj3aezFGOOOm_aCkimaE6bWG0gZILLTPPLnH_QuIbDiLr8yB497XAD7SJ6_WCq6vDNxr6VvrvtR7slKUJHvYWaeq8caIjI5BvpM_w2AfN9aAl-iRLLYcE-LFE9OQJ_KC0DhnrTRtdXEzDIg5LNfMxMeElh4UXaCqgOYyeLaOmdqFN4XH9jiJ6aZVD023-okxRnn1f8fRfkR0oyR81SIr7Ccdo_eUz8iK_hNRs572CJJmT2yfIXX7gn9JByaFMC5UM7B05q4KwZdvePPvd7Pz4RwtVnv4ULmjXiUugvqNwn0kA4mrGh051sDi5faif2HP8TU9nonP85kFT0gZRTsOc-CjX84fKRSFk5W38316a71hjfJ05WrsaO-9B4sya-KToEkxbA3iXuwsjbA2X81n-DA", width: 2736, height: 1824, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110131518233259372157\">田中ひろし</a>"] },
            { photoReference: "AWCwydifBHbZOSB9IsK_u9UtJ6jaa6qlqQAhzaVtBy20kpSpjqvXB1K95vgXFeF6nKV_4zx2QThkg5L_JgBCv-O8Hu2_aOGXOclGoX0d-AomrqrLGjrmTuClNOb052b9I28XAi8oRY24idZMfdp8_Bhv1HJGPxyQsX_BWK7A6bo8R9jZPLIXxo-biRDIhwE2EB2k_GzwfTvUuDOuy5x5dWrMbUmrlGouP6S5eEQoZSA5GDSZ0zlEBZhgUJm9JTRxAkSRdM-zeCGy0y8H3n0qZyoHOTT1YSND_uckUf76XJ8mRMx-0Kh0FKrb_lfULIIcxagvMEPYt6HK4cWapOt1SwVR5BdMb-4YQxshZdksZ_rPhIE7ODf-4d0uGM0LqyBXmBDe7yKW-rdF8D7eKL1GdurUmAW9S7Zcdq-XFdBZLPRM64k", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110308952558830662291\">Yuichi Yoshikawa</a>"] }
        ],
        summary: "인기 기념품과 특산물을 한곳에서 만날 수 있습니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 기념품 보유", "면세 혜택 가능"],
        tips: ["공항 대신 이곳에서 미리 구매하는 것을 추천합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 9:30; 화요일: 오전 8:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hkiosk.co.jp/hokkaido-shikimarche/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9215738552207913511", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%8B%EC%B9%B4%EC%9D%B4%EB%8F%84+%EC%8B%9C%ED%82%A4+%EB%A7%88%EB%A5%B4%EC%89%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%EC%8A%A4%ED%85%94%EB%9D%BC+%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4%EC%A0%90+%EC%82%BF%ED%8F%AC%EB%A1%9C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
