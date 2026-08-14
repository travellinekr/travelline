import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "흐언펜": {
        photos: ["/images/chiang-mai/info/restaurants/huen-phen-chiang-mai.jpg"],
        placeId: "ChIJQ8w_oZ462jARl7wCt952UVI",
        placePhotos: [
            { photoReference: "AWCwydh845FoVsWAIzoMJEYCbGyvT_SuZKQUmgbFDaEVzMOGip-AL7Tkaq8m3iCi_dbayA_dI--rySbOsdU6BrugbhGeWmDyQHuf_iPWH1zl8Bd5N_Asyu2ArWQLTS4fT7qneWQ_r6-RytXmtrc9UkQfWNSqzjdhtGeKEBxTKNlPgOOo8goU5I0UfeBA1CLM4arjph2TZL83_AlCqFwWMqqqffA1vXPqM9cD03FULES4L3O-2-6xnSNhvAIykoqQoNJuoPlWaU3rdrzar3fDdp2OyJRWM4V4vgXP5pm3n3GNuN0KHz-fZF7JQPzAIA4bUifNsNd31ArkJKmh9USMvqTNZBtPkJzETTRlxg0nEfxbnJBUq-u6oIvDaffczcKVymoBhSNIS87PVJcZUYNvj_jrhAJT_mH0Ac4IYnCPB4XNHr4SGU_NdDQBnNIIIBLZYQW7", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107581043106766603423\">Jaroonphan Lim</a>"] },
            { photoReference: "AWCwydhXrEmXL5eQVEpCD-rKPFCsFzNb7fknY9dmd622A-WQ0d5ZfXdQMlXYl7O5ecCD8u_DgRavRYLIe45pmJWI7JhgUL6Ecay_4dbT8Oitvj-fkp81lPzgHnI_bGaWBjoysEF4cx1BnZjVqjbN3J_gZlXrngdCK2vX1grWi6SblRkborjtsJ1E_O7f0WYpRBgSyXiG-K-nN6cj0FUs8Z1mZuhDFnP0HD66a8G3Q39ciuobkaxxRbPK7D_fwK1GXaTeEg7eJ53lTlTzbBlMXOx8GgVRKipVPdEOV_jAtMZ-xe8uOyXwVgA1FC4Jv5UdzY-GpI_B4A9_ytDqa0ijIyEWjVIyYFbQ5-gLlkD_FcAo0aDpON4hINhB6vTRCLrxRkkQqO655CD0OSvTRh_I3lZJ-h4yej4Z8MiSvwijLXrZB9QVb7uroggJKVZ71XlIuu2T", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108136998871896369249\">มิ่งขวัญ คงเจริญ</a>"] },
            { photoReference: "AWCwydijvr1CotginAvMx_3pBh0WHFGU0DHnmn_RyvpnO3Ob_Lk_DTq6fLmOFuo8yu_AEvPOen54qBwZfBdVJYfzgLzXebVDbZGmTBypdrw1EWdD3rULb0g-1Be_7vl1t-hYNlJCFEdZHGD2GXtUKC1pK3uwPzggSlvNGwNeFKdnjPVeOj7CrEtw34PSpb2XSVAJobrRYWjMYjoRAEtorcSa8bTRbH_69ESB-ZrAXTkBplb_LpWl2n13XTib85k-YT9zi1qRBnT3bZc1GDj7zRSRd5AJj1UaG_PO-uemFIpph913mIx0NP5yeE7XlwrJe0MKNx3q0Gr5F__LDcPOvtFe6gH7aLgRp27N5p924AELCK0EzIdRd_2MdWF7quvsuupOvkFLJ5-fapmDq4Dhl-PbTZGq86SMA9mpZgC19LsAlX-wDezGvUYmOcQItfYJ8Jwg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109826686610601307938\">T Toku</a>"] },
            { photoReference: "AWCwydg_jsowMUUoPWcoZuIgFeY_ZPNQGTvmh4SQZKzHe_mTTyh13IGZctqwzvK97FbM-fIOgQxyZxtQNRP3H9PjoJXt2JhZyync_6J4T4H9M8ZUTVPZzcOsytFFSiN2S87oHgPqe8cSuQm5PvhYrH2qdrwzEWpBAemdU-ds5UkELBe7PSNTWqku4-HdcM2FkIhBGpbRQrdNdespm72NyHTXDGxNN6aFTnnLC0_HPlBs77ChFH5F8wlsMmchN9pBZ24ygJKgksHKyXwfWMQHJDZTZ6F8vhwmq53gPRaq4GqagvPa2tRi_iWLBbDp8_rgdoRJGjctVSjrI7WtLg8ui24r9W6RYsoUR9_r5FUej3NOf-SxxOdwH4EQWwa4imGgjKzsyNqRQ9mpTv8x1LUJIENkS_S4CsRkolY2vJ6d60-1Fued9aR9KS_pk2VenUEfx_n3", width: 1713, height: 1284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111540558351506225625\">Nuna Dionio</a>"] },
            { photoReference: "AWCwydgS0ynUmm0_UBzKi1Brr6pW3QqgAAl938TWmi_0X5vtv_dNzvK7L0gY6NsbNHivKX7xPpXahOO_wp_Tg75-eQkIv2DoHTCziLIiNfVbJLeW9nVSLWjLRcn6b-X6FayWDZIgsWlulyJKC6GDCflx-kELMeGJLZ1k6f_kgztO-mzE2_mFPBQBsFFzdsiUfb58hbyGrn6qhKMJdlPp-Uw61j9Sg_hF4Q-YIAn4X3wyztMvBAlAvw8KOMiqLqAXAJR3VQ3RHWTtR9m3RH7Fg9mFlv4qjwxxVk-k6HuVqwlg5MN9RLzBt-D5MAt1TsURAGcHJVxsCV8-mWkGYFcrDLRIh88O126utOQtKQiKW53ZH7klioAQem42cnp5W6-miYiOQ3n97Jyq80m07I8lFAutIjzrujmK_Jpx4bVLHq_GXAKB-7vjRI85P5GRbscm_3Gt", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105629626781075788941\">David HUDGENS</a>"] }
        ],
        summary: "흐언펜 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["카오소이·북부 가정식", "평점 4", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "카오소이·북부 가정식", items: [{ name: "대표 메뉴", price: "฿80~300", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:30 ~ 오후 4:30, 오후 5:00~10:00; 화요일: 오전 8:30 ~ 오후 4:30, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/%E0%B9%80%E0%B8%AE%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B9%80%E0%B8%9E%E0%B9%87%E0%B8%8D-238150782968717/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5931652883148881047", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9D%90%EC%96%B8%ED%8E%9C+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카오소이 매싸이": {
        photos: ["/images/chiang-mai/info/restaurants/khao-soi-mae-sai-chiang-mai.jpg"],
        placeId: "ChIJqcysHow62jAR6ElsdYpG8EU",
        placePhotos: [
            { photoReference: "AWCwydhUAQD_pBUE369TBMvc8u0vWbY9QanIILIzd0nVgoRyHc68a2bXNQxNP5kmfIrG-q6RdR4_yHebhGhtcZQCezF_1qHoowXR_EiPOAz2_lYaBPn0GfVZZGg-UWQVLU2UnprvZFGaT4nY5fNDT11czLHo9ypI1UAF2iYv4xd43Hoj01ecftpsI9qy5MkAN1g8G6O39QQ_guAm9hncCZS-wIrIH2igg2tFqtmTLai9SOSBYW3IofIP7hMEUfJHsfs7uGZYRasTkfDOB3eSkoHQz9M24yV2A7IUkp4vZ1TDw2D8cD1fqcQsi6LwwbJMOCeYKa8JqgurAuiFhrGmXuFDXRrXS5WcxFStdXS79lUlrhFwi3LEIm8cOXsaKQ-J_1PtoinuXtk3RM6YBsUvtbQG44oNhZqXFFpatP0WAb-ShfvuKQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106468180702464095723\">たーれっく Taarek</a>"] },
            { photoReference: "AWCwydjQZIfTRIkF7aYNSF6XaOsFmSeXdOObOt2B8_R-dtfCEkrOoVVRTyHfecVPAFmiyGEcJMheP9r-RyX_QkeiHgcQqPP86gXYe7FY2BGQzJvw2JAWFsZNQndBrQjtVQLnLQwr6xGMKXSVVshV58gup7thMA2iFhj8wdzVfkKTvqHAeoM7JPixBvOtJ0bXmPAAvLT1OUdb6am2sO4N3DXqVMlijbslGDBsJLa2fsazFDEXAeIGnSZ4dB3wOYieWibeNf-QWI-6kTsoCMJBxjhGz7oXhHtqCqs7hLuqz05HPqI167EKk2nUhFjzOWyPRX7xzUCciwKwooUyeRe7uT3GXBOVh8wWmv3kw-Q8MGiulq9jfUcK4Fol-mRiqmQyRnfymTzGWD-qMXLeDAHBdmb4bgWSAl2__HwvUXEpDhaHibTE9a_s", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108375210996557785567\">Kittipat A</a>"] },
            { photoReference: "AWCwydhEdRMUQEptpi8EdnnZQQmKb2nTqEwnMyiMGBQKwxCJJXp1GUxJdnm9Q2rRpBEDpChsmN76wIT6_3VgojvmZN-hFKrdBW7_3bQ-FAYdniMiYKL7ZoLIaZw-Mr51IZLaHbANjQq12OWdibsAujIoPyiVpd_NP1beMvY6WWUA7K_4We_C6iYgMncESsnqPTPXzUHET1g7jgKV4COr9LVUCkNlipnWRq51SSt8VuzpJb8bhJk2R_pY9Qbr7JkxhVk_3vMvmUVMSGCzLHluDe6quR-5D_TJ14_edl8CkS3kx7AKBj_ykRcBXLnJJ0uYcJXoX6e0wIksnlEP600G31boIwpmxL-uofLwTPKa7bl67H8A-Gy_18gjuyty4V5FAeYrzqXW-nDpbOAX_XCOuXsjpX60Xfs-udthnVhZy7o1rquKrH4K_Q-xJjLP_yN-WhCu", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111906637471277008339\">Molly</a>"] },
            { photoReference: "AWCwydjd_2LqLvFJY0UBbDUoLf2LrN0o_Vg4VzPEXdk4wFFrvEtb_DWnFgxGUtpy_j2YduHkiqSUvqWR9tFeSFIhaxnISymnHYZdZlAoXrWyHLrxXCFldn07_ch54r0bj2FAIkP9-DlXW0SsfER_iEpQCmHY7DQ3iiunzFGlY0v7_zOf-nWnAkki7NpYw5ayjpNdfroIwJ_Y4JcrfMvqzYyUaCqaeem3JCS9LQwebPQGOowJEcBcaFpIxG_LcSFmCChe8W0BmDwgoUS11e8eAmwyfewCAIB3xO1AwG-SxCYzpAQ89xw9dcI0RyMAU_NElRZXsHVNOJZWTvYRZbNeoZkW4hZp1hkyUskgf12rD4Egs2td_d-Os7c2d44ACP1ks0m7n99TW_4PPVANNCKwBuyA3soSWoziCCdlaYJyTnfcgsGJ2HluLelWg2OikOi21OcZ", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112255397690976033469\">Tang Keith</a>"] },
            { photoReference: "AWCwydiPbEXL5NC5sRZ98NUwFSjrjaSQf9JwaF5KNfdBoH0AUpPl8j0-pddCYsRlmI_s1kxlDORAUqDe8Nws-3pMeDO2RBlVB5iIu9PYooBs2ukALB4-RDKz4FIoPPBCykce4NhPlRVjHLIMUJnV-Y7DouB5EVIx2gHbHCY4rwxmZePxApwLdfGKQ1lNqTlPMAiWw4wa8W_0x7DOWjamYgqi2KGY252Zw7mFI_xqBB7_0bh1c2Ace8aw9hC_dzUpTa-35jeTt0aSIViq2jdJm92z5AbHoNG25Pnxbw3HVtwl2cJdvjFNxIASvjyOrhHJLSDYMLLuHfpkPvRk3ydXorFXXawqN6xQ2ivqFMKmqYWpTRV7qzH62JwCbo_i5W5WDNRCNi1W42HuNnQvivNWqtVew5KDav3rcqJtlZamiU9iiwi-9kZeZff30EF4z-NEJsr2", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103851799977696586158\">Fifi Thai</a>"] }
        ],
        summary: "카오소이 매싸이 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["카오소이", "평점 4.5", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "카오소이", items: [{ name: "대표 메뉴", price: "฿60~180", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 4:00; 화요일: 오전 8:00 ~ 오후 4:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/khaosoimaesai", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5039605543517047272", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%98%A4%EC%86%8C%EC%9D%B4+%EB%A7%A4%EC%8B%B8%EC%9D%B4+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카오소이 쿤야이": {
        photos: ["/images/chiang-mai/info/restaurants/khao-soi-khun-yai-chiang-mai.jpg"],
        placeId: "ChIJX4UC5ZA62jARc0S5-3rUIok",
        placePhotos: [
            { photoReference: "AWCwydgccaeCLmF7rarsrKXFs6I1i-QUsInbxyYvGat2wUJ06HN4z_9R0fSgB9Y6IwmbeztMEYPtbwIgAr4xl158RdMDCwU-YmhuZBxFuAMV25a41J9ol2meBx9W9PQw2CVkTopEg12LOecYv6OYi2Lw8p-0prrqaGJPXJ2sKDHjkr0G0lMa0o3D9AYd-RbvZOTFLZZ2qs45BtM4nmz_8FtcFqX2HxBo2R6jn1xxNhtUS8ZNcX0v9tAaUNz4PVGVZhqfLIkz4pSqejipPfA3QRQ2lXvdfUvtV01ZWb0w3z_YsXT4f6xPx9eav1zT-avJgrwpjloHV5C-Pc_lEJ0DNcweMUun19-e-LU4FETEahCtlJFs01j0yd0OMAM31aRhQrvpEpGBNlrYVWUk0CpucFEvV_iBtvHk94PIQno0Z4Pl2k4yVweHXXTLmO-x1c5j_xLO", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107522967302186505150\">wankun P</a>"] },
            { photoReference: "AWCwydi4S-JvL3bzicAsDaTDXK6kqrmRPlS1ukn5oE6V8ab5kM8__P27lM20XB4Qr-h54-9s9NH4LEiwqjIWLK4lLELpse9MgpSwYJFGt0dzKyBfRdzYSRjjRZ_cCVNsXbbV4DhfFHQVT325KoJbusfHOoIA7M6hY_01Tvjd12N02zlWXb46bk_kh4_EVmTQlrTx4TxdYQtIjn6l3GKMujpcAmzWFfMPXYm1MwMwS2zOgnmcUUQgM2n2psapLf5jjzk1FTI4iTDCdjDCeA72OBWtUcXz_WAWln1-MkLr78h5u0p1V8NeHoqhJs2RCEervPealTfZis-4_h_sr-kDHYXuqbGsVHmCACNumLgGKjPWBjpbP-xybW9fi4nLwAlYCDWaGEVLoOJB3QTWLwZF59FgcTdSlQwJho6Zik4uuO37dTdQfV1f", width: 4800, height: 3568, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100084312262520778797\">Kumiko Baba</a>"] },
            { photoReference: "AWCwydjHPwjcdNKD9QonLRG91XusB9-AwSeYyLXErXrAAEwqcvaH7dwwgaE2-meYIQ7kpySKSG9aXfLT4zcqm-0vj9Ywa01dgCRDMAYMLxD3C81cdTZDtbXY-ZfWuTWrelx2a03AoRkXZGOssqhWsJ03epMQHTQy1CWHZ0cUQfQrQujLa9GhQjmF4GoMXRMekoTYJj7VRvaii4YLRn43KPMtI2KSIqJ7X6oow2TdpD-sS0CUYQ0Y7orGf1grS6J_Mk0sQrEAW8bszK8Y-x4c700_GnYzOBy3OFoB_VWbCPJwNBl7j20mp2cmCWkS31YfPJ3Sne3Ud4IzANvog3idOA3TLMF37D-Dok9fNDkRDvDI40jOIa-VgeuoizHB-fT_CkcTfbqO5kpKg61jjL9SmkiOq70to6NqLyDBPYBmN2D4980Rgl2cDNXfH616uXkLNeNN", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107173883110404283607\">Going places</a>"] },
            { photoReference: "AWCwydh6D70whX5fcah2C_naUvH4O4T5k8Us7v6REao4l19l81ajXDzf5q72DvtCsIH2pSL1X_ADogKurgFo6hZJnxYaDz_psh6YLdoHi-Spm6J5qkLj3o_PdOYQ19Bzfihh7FEiWQC39OYkiKxzFFIwObVX2dXrAUIPbjdYIZGF4ZTmOFAlinCe9jejl009Es9xCky0KY4bhpAUSVTYhSsQyoTehK92C3jsgSJ-haVhDBXeUVVOrKTKD0vDNrkUkAfuq2aenUOEfeQyuIZwLBkHAvh9bnyEOY139S21B-FuBGOKs11WJbe3SW0h0pn4MtqBE3UDrjN0RGtuNgbPpiv-W1cb6BaIhrELDM0pKkDSWMNf_B0ZyqHosNDEw_mMLjVLG4kcxy-hWiKYpGAaHciUVuA5LfgkWlTfGMaBJpLYTocoqqSRKFoJZ3hVziAiXw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102930176163152849100\">Coolmon Social Studies Studio</a>"] },
            { photoReference: "AWCwydgvhsFZ8Mu5uNrFUvH89P6Oi2sm8zNsX1grvhpNGl7cXJMlDo1wsXGcPwh5p_vyBroWuHh7-6MaWPykHyVu9_srRkr8OfBTMobfakPf8ynIaF97VeTtyN4KudkzS0iWmKtieh6GcQaHk1RPHc8FNUY7p2NObLdiKqlcxcu80jesGh4s1dMtzp5itv6HM8nlpXI1fwArLinU2SQ_l-4_O1zYs7cfzbZZZSrFRf1tgnoyQLTWdOSJJoe-HR65enf0KvZ6uxKsnbRbuD4gVmdY3XkXxMHJ5CP8gmZlE0alSGNAIaU5bF47v4d1hVhftjMF3nI3KOeXHN-GopykAHI044NhHkw59FcHHw3e1K8JUyYCH0-sCKygKouo4u6JsLSrawvBfYvt3_TCNR00uLKrgg_KTCO2Mcdd0KJiBhYsO4bSf7vsA0CEIIsc4k5P289-", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107173883110404283607\">Going places</a>"] }
        ],
        summary: "카우써이 쿤야이 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["카오소이", "평점 4.6", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "카오소이", items: [{ name: "대표 메뉴", price: "฿60~180", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 2:00; 화요일: 오전 10:00 ~ 오후 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9881694157078611059", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%98%A4%EC%86%8C%EC%9D%B4+%EC%BF%A4%EC%95%BC%EC%9D%B4+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카오소이 이슬람": {
        photos: ["/images/chiang-mai/info/restaurants/khao-soi-islam-chiang-mai.jpg"],
        placeId: "ChIJbS_S9XQ72jARcnTlrzd0GWo",
        placePhotos: [
            { photoReference: "AWCwydi7njCuex_65SCO5retO9sb2Xmob_dMBR467OxdAwWO8NzEUuGgJXRL1WCU78PQPElWzYqs5inN95jD4ZyR_4GISwhusjPdskuqXDBg-wN8a_nq_4FtjVQrhLkHfyUo1AMN5QwgaUwlqkT0NsmwiZ7hbeieHIiw-DyvnJrnOc_SU9bsZve1-jjdyu7-HVe1YP9EFbpljGZWpKjtIIcll7ZRmuzE8lY2-W6GOgndRQC7pY9QcJ9jE4N_TzUHvCWdZraKzDQi2-wgwHh1eMK8gmIj1k7fBXjRedIhAe6PxzcaNJHUwn8Bcd_A0evX0un_rcZc1cPilp10JswPyTXQnvioQVrKuqfIW50QzDOyGksQPFdg7yt7660blc3JTWvPPb1gof70FmFaDZnD3Xe1rOFRmyURMTAZIcozMYSmk7M", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107655736777354646873\">Trip Chiang Mai</a>"] },
            { photoReference: "AWCwydgZ9u7K6HkIhMQXwZuN8akufIAN2e5tvQiIcL8TIau_RR0t-QMvOB3lQ_1qXfKV6e3_3CbV-IyqSDuTKQjE-xnqGPAbskvvRMAIMx4PRalZqQzQnahaExcHpdLW41d1IRhUmiF370WF_NcAhdRq8tEHiF72WCfJho9EJ-5dEU3nwcxbvLWtWabZALcveJ9uXEgFr7nriuUT3_dEsczXga2XmQbrVk03d87y7GSLQJC6AieXdf7Y6nyS6Gu8kV59ev7N810IY9gwnxyWFFYxHNit0wEFFuT4AsH0Y0UMfQsjJ9iRGdBXf0lrYOCpjqneh_6aQ1kII_Ejg1Rnv7x5pbiLGZHzAJHYMXO9mKqYbLVpfOOR9jG-kOqRatw7CnwHwtin_jPmZrSEIVje0MYGV-lGUo4kOwjxEwZbj8d1fyUjBw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116299664191902710157\">ข้าวซอยอิสลาม</a>"] },
            { photoReference: "AWCwydj6gN1AkNoWBUK2ET9aHOCmqGOvRixLb8JNHwHTK3IPJcRqXCe7nQvNnVRoPF6vpkpA2AUvZt-eolsYf6rbo5dTba6pIZnYet7Unwr2ivA2i9LN_Qtixw6U_rsSJVGEhFH0Rip1kTcT7LoilR0b9GQ_Tr4_ooL5Oji0Iro5g2F9aW-wj_5zAK1ZTqL5jUy5hZCPz5QJFi02zim4OTik0gwzLLu4_gboAzy2C0QG2rYbWPGaljVf7Z5d02zzg2qKtjI3qEJ2I8xyLULF-dTe6t23MYZ2WxowmeoYt639NigeFYykRGYX9ZJsqTR9jVoUKJZ6FVN0qc9MKYsBVQ4j8c72U3RVSU6lI1gDtKt1oUY_1oDAXVmsNPy8HMCA0wzh8KmRKkbvo22Tj-WKazWRug6ow7OWpbf32HLdf9ipTTmX_APD0Dzza50kRffTakj2", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101881096110340307701\">Amina L</a>"] },
            { photoReference: "AWCwydg5DcFfER0i8EZNw6USTiO1SnFG1-FhO2X3499q71wTO9zvkahh4rcwceYN2r7So_tCQZJ5qG-bNZUZIU9wbw5IVxhXy2xpQaJ5NQQLRqwogmlWiObZFHEs-_quswtWJql8p4t9tq4Mhg-AG1g3rgfTDVQqhQV6uTvcsWaRy6FRd_NmFQEFwgwLBw9Z74agZadnrj2sAHNp3zSPy3cIK6Fuzf5s1006EzII3pcpFqQBbV4i-YwXWlYPfqw6jAwQKlr9oLfncurvs6RtTj0MPWGyg3U10nabKnIxApA3Iqa7uS5qWOIN5VCm3B756KDyI6XBBJfx67UyHl5qm2xUV9rkf_J8KWHxSgkJ-MzEyeUEhdD8W8_pZ-PL1IPKbxYbvYcwlMoVrK4mYId1ax0HBfCeHW4aEuy_h9ntteZv2ed_u3lvdKUjKKdoxdbl", width: 2847, height: 2847, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102126459944319375660\">Supha Kit</a>"] },
            { photoReference: "AWCwydjIsMJ75UO2t_xEFLgWcfgfur-0HOAgUx4v420hZ9lFOtXkDdLgGl2byH7oe937EZGn0-mZAyIop5eJyeasapC-e5AYo9-EGFlWUt0jf06I69hDeb90ewGLLRWE8mAx-R54UslcwjwhrzIaoCSd69VRekWBsVTwCPox-Weib5Hm9tiN8Ri8wTewi_kHxR-RxyITi2UpXKdzmBrXF3B8U5VMbyGjJujhIIc8Lv4ydqT9Et1IPCYhTmgyMPPUiQ1yDIGlpsAPomMdZmO1bPq3mRmnlphctOSg3Gpu3DTeU2OyPyFk43VjFPvQJy2_FQ5Qkew7r578VHf51kf2On53XgkHpOOXqEZafi3HoMbg2ilW309od96vtqK-UMUxTsBWadnceMwAZgDrhOLIU2ogkhHlzNJ0lqMV6xzv3qnH-Huko3Eqrh6C7YreiXBH7IOb", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111456118755815324022\">YAC</a>"] }
        ],
        summary: "Khao soi Islam Restaurant 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["카오소이·커리누들", "평점 4.4", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "카오소이·커리누들", items: [{ name: "대표 메뉴", price: "฿60~220", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 5:00; 화요일: 오전 7:30 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7645269624961201266", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%98%A4%EC%86%8C%EC%9D%B4+%EC%9D%B4%EC%8A%AC%EB%9E%8C+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "에스피 치킨": {
        photos: ["/images/chiang-mai/info/restaurants/sp-chicken-chiang-mai.jpg"],
        placeId: "ChIJO4sKZ5s62jARyP3E8ZJoyDk",
        placePhotos: [
            { photoReference: "AWCwydh7amGFPJOnRjF_SVMtGJuhVaQD_wNBwkuMkGLUC0nsjZsmizw1oHrvdXxKUL77kZ0o8MD84962VHKPBTL7FBnk04isUip3CSBqbQaJMJdsu5FkZIqM_zsNRoyaDw5OT7hE-7bbFMMBnowBCJ_iKUFFpSyQNdkqxVpbIOMAbVCQIRQDsQidLl2H1DIu5XAFGbhRv8PILExe11JJhlTMNtKCnH-NzVWgSNYUYtz6p6eQx8geC9OKPgIYgP54DQ5V_2YPZ_7hYMc7Ak-GJU_rMJzd7N0H6aBRbfWVSP6KToqh2Ww85VHO-zXz08XPTUbLRn5NpI8oa2foHvTamllUGA3lSL3HhhbLcr3PxTyWK49GejofrmOiCLs6tc8-juVL49U7cHPRGV5bSiwzKIi4iaFfoamqTh3bahXjAqS2nHIFqa0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105473303724328127448\">SP Chicken</a>"] },
            { photoReference: "AWCwydjzR75hnycu3NEYUIlmdfPBPiaVovQiEtMyhsTkVqibGPe3ekZfm5v0sfT1R4IyNEkY_3HKlMCrTejhy-DsMJfpFKV26rZUCBTQn6bMIJULWZpy3Y34p2WX1o2EMn7B52cd-k9hIow4JEGkgZtRdoFvPznvwps99axJTU8xp-hrz7YyvfIHncufyHvP2ibBsRjsCdu3SHWdVG7fvhKZHFh_OzHvzgS9_82L0X3evipE_25zBfgwbDE2DpEEH_fH2F4fzTXE7ApU2fxQqwEd0VRn-WOxqTzhBj7hr2ehgDnF7BEWEZJYe5dQmRCfeS_nq17lJdtdHxNJ9W2I64giQk15Tt-Yh_dxIMaywcEMfSRnT3b8plO9lGwddGNpC8a9_bAY-s1ulS3xMCH6sRwLum3WCN-PNTq3Q3EF76jNPOplaQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105473303724328127448\">SP Chicken</a>"] },
            { photoReference: "AWCwydgfQhU6TGDjTF7Q-2koK0g4IKXMD3mV5xYIdWQb0_dOxg9A1MAFbZOXwNPHC18sEFDQezNDfo3j4cvIaid9HsRb5ojDmbLaT6DYs5gEOZjgs3nXb4Ma8kWVMSKS5mzqhNgg4j2V0gNBAg1M-C4C4wrv27bSCzFqmZ_1weRTLiK5u7g1H37lJt3lrvkvmNJlhttAC8cl5hMowvgOSeOKLeJCJECDzE2x67caW5BZw7o4V0kdik15ND4BNMtiSfTITj3iSgvAqGfJBV4TxR45J-FwBU3gJEXi3r6A4xhH7l0mGlooG4Ukf1TxOAaDlAMtHmPgzARhs1d7EvI2GOLZglB30ZVbZbl_8yC6UYGgZT2C93JqeJvZXglAVqcFCQnSojx1EpKOoKiizPCmlyHVbcdHB_Bj1b6yJC9XAmfsyvwAdG7vjSgD3kHvQ0KBEbrY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100213591848973474897\">Mica Stacy</a>"] },
            { photoReference: "AWCwydgDnCEoYSN6L9phe4cThwaJvSv3u8NLtmqK678yZgz_ZUb2xUehixRchBT9Q40YzVLQKciBzfd6cnt3-G77WgzUj5cDu-IDThtQmqLy4oXEIAyRs9aD1IFlTAT1klN1ig1-n8XS9ac1qVkEvZcwGRiUt4pRnfexTZmVLvCke-KS9i5-HnbselatDoZJDpA7CJ16JqVLiru11J2soa5yLZe-ExFGQ31dQDLcOS_JK7MDUpIWODctCmBiiwwHEtbD-jpW6qhy4XoxJGGF-3G8dE9Sk0CJQOARAhweA-FH4b_SbpS1mQImA9sIx0V9Qef7tC_YLenzgDkxrvkh52Kwv525tj7tYydTvIwLZ3hH9T7O_6Y4V3M98TYptUNUHjrYjEOCX0LHYoaf1YO2MACzaG-2Dq373anuIOSWNbzHYBs7lrU", width: 1440, height: 810, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105473303724328127448\">SP Chicken</a>"] },
            { photoReference: "AWCwydim7JrdXc7hKJ8cyMsvjyah0BPAx8pmQ0ZDKvGwff3Pjw7Fph4nQBm7j1lE2inawYc5gTaT928Fawx7b04I_lqmvzTdsQimkdd9afSB-7X7EGA534rJcbWZKj1uG4BAV0XPiRe11UdEUte5C6UnbJM2vHDuEe_RV4j5aegadJKG4ENH2AaCt3YZVAMlPufZymcU9AesjD8KhsMagEsTgXk0yXkaAgyucrMxoyIYvf_nM_0wuo4kkR0_gBMJudlt68BhxZ2EmlaXBoPCNYr40VHunjNLNQ9X0LdrWrFK18veM6xOCzaWRiJqB7-Y5te1lP2gDwvjAZZWijZSr2ks2GsFkydhnZ-zJJlXlwkzyGEo_kmxIBPwam2g0KzY6T4RwkwkqnTPQw-zZvPZAmMhGD2dqbqNtonvKSyf1ksyHWwyLCJSuGRkFsyrJAPU7iE7", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113597887327503912708\">柳淑瓊</a>"] }
        ],
        summary: "SP Chicken 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로스트 치킨·솜땀", "평점 4.2", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로스트 치킨·솜땀", items: [{ name: "대표 메뉴", price: "฿100~350", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 5:00; 화요일: 오전 10:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4163692835834756552", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EC%8A%A4%ED%94%BC+%EC%B9%98%ED%82%A8+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "통템토": {
        photos: ["/images/chiang-mai/info/restaurants/tong-tem-toh-chiang-mai.jpg"],
        placeId: "ChIJCfx-imI62jAROS3ac08yq_U",
        placePhotos: [
            { photoReference: "AWCwydgUcOQg7nFokk0OtxxcJZPqeQJwyHgCgBiPNwu1FEc8Gn3YgUKg1Dldb_exGENUuEoFMGIV_qJ24qyCr57v5W-q2_At9aWQENpxpknOOrkuLCa1Gh2dxu8Xh9ej8rQpZC-ePRZi7J-SCyoYOVNzaVGs7myf-A6zSXUjUXr-nI-Yoth5nV7VF1VIxTsEZPJjrHbbWChNC79nE7u9l8axn74oUc3NsY7jOUeJOksMjmFKIQrzn7uwbjhq69S2rHThPbnfuhCGD_HUVTg-kLt24PHu3MJEmKmk3_bTiWDMF0I8xQBxtvufLdzcWLheqvB3LJwIkwPJgCbNOwOZeWOn2oaTvUsjxBCOi9WiYMHL0OaQn7lpg62hftF8D2ht8ubyX8I-_WbeAsfcceOCuy6t0FUwpRrmW_oOyjTB31Pc9MTXfOM-eiCDegdUj5klxw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103666467012167488262\">BW</a>"] },
            { photoReference: "AWCwydgLfF8EzBa5Pj91qdmQb0ry4Rj83uL84VcPgMYBObekRWITdMEagoU2Bzh9LrIDuvEeU5alxYhriqzJXVIY7zt6XyxuSwQC8ZORAwpcX1JpsLgTuB54BjprTCZCx1pZyp2JR6vqt_9p3jtfHDk6W0pdYYYQ4iUqbcglpmN1_cGqNXl8I8scc651ljZNVFywB7kJTIHfl4ktiqNEq4d5qcuJrkLWhOSmdLMua40hRuIdaYaHABr0eQ1Vy7Ept34yplS632MUUG28Ch2Cme2mw3ogZHGTuA9JBj2fLyiUEtRtaFaNCGj43qCkEF8-jM6CwNeKdaG3dTC6gHBRg0wHoPAPaLpNoohzX9D3M0zii0n_u3hOhBcjnFi7YcSZWFg1M5f7WTz1s65_i0v2qRWXk8yU3PyUClsfdy60gMR_yA_TjcTrWDgiej1UMVt4eTA0", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102738593939077863472\">Jay Gu</a>"] },
            { photoReference: "AWCwydgcc1dUFb7EUpuOl9uWyVmMXCme1bdrXZ_YLPYSKuAid89knp9kokVKXkO8WDxleY8kezS5ICvruZdKtBlYPhOJp-RI45YURbTxeix-_kZAHAAideFPi_XZehRKzBCGPFVwWcvuTfVXpqKsSLQOAZW9_PiLm2ggY0yKZsVmw0nwQeDOg2tpSSMFrPoR5Sb8s1t9WS2tztCoUfm13ym6M6lRGdnL-Gop7RnMKUcIzjmti68CENESG2t8y9BHIlZhWEqSJsNS3Yi4biJy2mfiyAwXh824sshXciXJBwqErJiEJxkaaTqFOmZrsMsYcriHyg0-LXyobJSLGERPqd_mWdOuhYONEJBH5gjO0CwDblEHc4oHT85vWVPu_53TJBFyMWjYP1dIQJ1xCoogp5wZ-zCNLNJevKqTEB8jQN3zZSwBLjy0faL7OrEzIa1dDO61", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115500259024352798911\">jeffery chan</a>"] },
            { photoReference: "AWCwydg1b4zK9DM9TtVR0NSYRYIPYZ5L4yEZHzOTyMT1niZiuWLTkDFjO-td-7zcQ7paxYDkcNAAKrv9VyBHICFkFzzOgav6hE8QGbqrrbAAS5xF39xYSbFwaXN2NGaX3yMyyBRfvkM1kaNgemK0suNm6oEltpzVcug-hTDp7B-cIJZHI9OGcUGtTvdBwKmFufcG1KaQNCh--LlCv85UZX2F8b9jwslD5u317JsXMwMvYKshvXReWQ3j7lGWLCWoDuMooJinnO25eqV2pWA65riom_NgsU2dLu8PcCrG8WyYovWrLiQfl56iEnDiEb0ZRNcfxFadxr5Nsjal5hJzKANaxFh0ZIoYQ84i-rwviZAp5HqmIxSN9oX6m0JSuZkkbRRb4MznxmnNu_3jr6elEM6qc43SSHpOZNldJB02LxWEDWTX-w", width: 4000, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110639945483466787412\">ต๋องเต็มโต๊ะ ซอย 13</a>"] },
            { photoReference: "AWCwydjv-O8LV4VbBNtpnqDIQll2boOLmNqMLwa4Dbd761dRbplMnm6FTUOqL-nzEP1plvcoxifnI4yndSx65VIIzTKCqeED4Bce8hjges1E64SyBzMq-maks7Nuiao2mjw5fKi9nwZVUOqXHA4CiKwVEZSJ7EKPdQcIm5rCSdGPp7v9qZ40eDKbNtYyBy02ey10qj4hkXcJK8CwkQoLTDwLkqGl8_O-cA-lP88FD2wzooLVy_P9H57E3IlaydBQKX61et8MoOi4GRSbqlpA1NeXzue0cIt2xeMZxgSYzjrpXkeS_tMx8s2aSLh4Un6vTpb_37T0WllJu_SWVvCfcjN3D7Yhr-mkB-EXrLcxxtr8ir4p_XUJfIUKe0Vv68VBRsJVAUPxO12EZVycj3kGAN5625ve3tMeQubbJXq7IWh14tUtFA05F-_LFLjSpo5s4Jef", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107317845493330302989\">Mongkon Malamai</a>"] }
        ],
        summary: "떵뗌또 치앙마이 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["북부식 구이·딥", "평점 4.2", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "북부식 구이·딥", items: [{ name: "대표 메뉴", price: "฿150~500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/TongTemToh/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17702298077137349945", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%B5%ED%85%9C%ED%86%A0+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "청도이 로스트 치킨": {
        photos: ["/images/chiang-mai/info/restaurants/cherng-doi-roast-chicken-chiang-mai.jpg"],
        placeId: "ChIJs5TfLmI62jARMIq8IHLug_c",
        placePhotos: [
            { photoReference: "AWCwydiEDV-LA73EU0uKL3l2s9lYe1tAWziZWeCD7czfoy1Dnu_XCN_bD-Q4_8IHGABc69XyxPDTedYek11N9Ta8PY_SvCg6t-SbU-K-IlIJIQCGCPXcCB38ehiQ7DYuWuNWwRi4Em1FsqExAILdbQvXIuyUSzWTXxwNyL2-OkN_5McXFkCRYCVuhfGau_RUparFzK5leQxDUUGTjcXaTzVLnWlMUBMRjTnWC4p8Vj0IeaDTZp9PciVGMS2HoIPwBxY8aWmEu4rRnuGSX3xxqRKOQe4MfUED94XDs7Qgh9fQCznFTcxCnyq6cCqNiDJhFHr_34_bU7Z2x-lz2DtUzMhYVcKOo4OSYqNNfIryfReVCIvJkh7Z341bnmccUJ8WCKix0FW229aZjX9aCvQpW-sA6LiGyF9GvwkLnGOQbCBJJhs-Jktq", width: 3968, height: 2976, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110679398886817459618\">ไก่ย่างเชิงดอย</a>"] },
            { photoReference: "AWCwydjeIsSzI-kGy_OBNTMsf_WnWNrgQjyAod-Ji8wOse85Whc2ZAKXpSAwVWziTarTge-5qBDM62OrKdGCZO87XP0duRv8tr4lFGTU506pScrALNrI_ep0IfcsubhXvWIKFvjouzt-y0nyqHbkUR0cTJTBLbviQ2uXnwq_CEYJRuyIzmwOyMWt9_NIfC9R-U9vzspw29z8zh_wHn5BOHCkg_K5zQlIw9ub5KZ5I-ItV9RivkPBnVrFs_XkHD0RHh9zT1bo8euDWToRXgnACLQmq3SYqCsA1iVOE65eLV-gecAGqEW06pM1kB2VQHuTXW3OKhhwKXhKR4SUr2Qdr0Ow6Rsgjb1F-l_uUMHMZiTiErRlnv3yV44xg7zvJFOjVymwcYgUbp8mKRScDA1tV67MuOaGJAVUAbgnajPvgH-wYRM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112139376875051210031\">Wen Hsu</a>"] },
            { photoReference: "AWCwydhI0GeCEHVib0wQaqKtCqp8JY_TOI0wjJ7zyNeRDkYOt-b_NgF-mJb9Mb9w40haVjL-RywUK6h7JXXyLSe_96rengBfdnJL0nb97MReyMZCfZA3hjqyJPzkAzmoYi6ymESIXi8tTwGHz4VvbDIq4kn6AKjiCAJoTfimu7fmm0xGP-gigAM5p93eTQNBxbqKSPfSMEwHSJya0OLPDpzDP1bIRvcbTzTkMnMByjyWE1vGjtYV3Jm-He9uvDnNyrvyiO7hg-PleIwu9Qd_v3RtPmLF1ALMClyI9WNOHrTb9wN2qnUOfHhnfItM4yMDH9t2-swSHwVIgSwyMPfA50iURWiZfeRQgnpGYeIrT9E2xhPG-UXgpfqYRPZ-idUHlIy-KgzJc1IwP1jzRWOAhXZzlyP9CoFVLKmYiuwE1gT6IoTCyomvMlTyltJixWwBqg3_", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101482323003884710626\">Byeongha Choi</a>"] },
            { photoReference: "AWCwydgGxhzgwAqlZUOmzWZ2-6qCHpRQyqubJ1M03yh9X4hZ27s8ZI2kZhn9WbhfqCkG0OTIvmVM8C_bRan_1F6-714unIZ_MYRE1j3b88MZtE-kqha7-thhCENEFfzX8ld8J-RGXFS9rQnEmLK_oWUcSBWb5JzUxhwJeEd84P85vyhbbZhJvQWj7GUdkz9rTxCcwrsHfO9YJmAuzDlaSj8FU9arfx-OItDObfGEPXkkeEJlkDNzYovmXRytaPz4Sszjtv5xw9_gup4ibbr4O1HUGD84EwrgpwsNsTQJ2E2pZq6T0Fpk5DtDfLb3TyT_hYGLnY0NgAAZsHtPn8X8PNR_Ck8M8KYTWUuceuujaj2sFXMA80IptwCyHxaCacY-17POfi6yy5Gnll_tXJvnrYZiT4Pxp1O0rhjUjXEp12EbOFfMFofOea4cy7XKSZDwemzW", width: 3072, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103091469117721311434\">iStamp</a>"] },
            { photoReference: "AWCwydij6IFB2cO-4RWFgAwc9ECGh1BA3oku8vmteKZq7ucBBoOIjqr7fFxsf8YykI0eDjU5wQittIIFgd_0q-T6sflOuLtyK-7jq4IGn9n3WnpoZTMX3SGLUM3FlZwe0qT9n9dtfzXOg13PMOmBheSxaXGucpGuVHU6FXRiSMvvcSr0LZo3e30DeldeCYfxfsmcIobW0ZhitUL2yPjJcC9NyLk-HTe9g3Jx29LJJq1EFSlN2VOqIrD4xWJE7comY4XD-ygy6gi5RyasuxSuoo6JoAfWTRLkWNPaCCQZOXqG-Da_rEOGXzLrEQdDzZFnVbed9vR9sCf96P30Nzxpy2gNNXcMP8ZSLmyPS1uq9SBssm2yCVPrqnzNOexcW7csKJpn_2MskqGTc_w5C3csoiHhIW8E6_M1wbhDUYXug9I0NuKg7Bsvwncin4-_qF3rHQ", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110741131502330066418\">김선평</a>"] }
        ],
        summary: "까이양 청더이 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로스트 치킨", "평점 4.3", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로스트 치킨", items: [{ name: "대표 메뉴", price: "฿100~350", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://l.facebook.com/l.php?u=https%3A%2F%2Ffb.me%2FKaiyangcherngdoi2&h=AT34RFLWFLDzCnBmM8boRPb5Km5TPjNG1KnFbsdPgSRCtlhs2P1YZ0aixG33gkAstj9xfGitveoeDAb4YRFmNiL69zqjlY-1d_kvTRUzwfO3-Hq5ywa5Il2AbwPWSJVWzDUc", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17835361123260205616", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B2%AD%EB%8F%84%EC%9D%B4+%EB%A1%9C%EC%8A%A4%ED%8A%B8+%EC%B9%98%ED%82%A8+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "대시 레스토랑 앤 바": {
        photos: ["/images/chiang-mai/info/restaurants/dash-restaurant-and-bar-chiang-mai.jpg"],
        placeId: "ChIJYXZDLqA62jARjhW8xmSUkjk",
        placePhotos: [
            { photoReference: "AWCwydjZMIjh_Cj_iJ2BF8MX_tWpMWmsxwIQWPz3EYMz5AOVN42_7Yn4CyjY0SGCk29Xh2TBEAUZIPG5eyX_UwGJDRGwbm9qHefnQh4vHUbCNRnREqeTjz1UVBaH1Feal6ADeC08ukvZV4eaYOvQwzw9VCePQ_bVy_LNkr4s-8uyJPMtfZD78RlKaXCirDSuAZinIA5XLRI4f85bQ21LMqzJuh0JGtGl3tD7GuU3Cz4e8obetW3wuFqVF1AOG7Q_TPh1qWHWn_7rN25JvAwaudw5aY4oelswk8LYplONx7rMkL40LSMqTmSRlSbGkIymriodmrEvpHfLcqt5kY6dgoAFoEEDTIqHHbmvRyJosj6F6X-Z2R9J0HSQCZYzwVlzFgsLwlz02jL-0NngOwKjIO7BfGvljJdHUgpZIUeiX0rQ_TkjNQ", width: 3996, height: 2664, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100436751638982513293\">John Yu</a>"] },
            { photoReference: "AWCwydhNl-MIGpnoJ3TiFHaWxQp7SOewbnp-auKAbZoVzsUq3ZRDMtoT6PWd4Vq2gwDvKVcfkiGGDy0WOPGBQTPEQnFCPnOtkBQGUScvJu86XgQFd5jmIDCaU1dko9NSQlHmGTHjbzm1A_kPyGNx0EQ6t9RXwuTULc6NKIKo4Xs7C3ae6wLv4L5L6jDelnrLVoU6u3NI6Ra2oEJM38YD9S5Sf18nOClH0ZfiTadTqXf-g1BAUFoNsLTy9dDUFPFlStYBlrqBm0qvvuDH_O_434a6r531FcycW4ergV7L1-HXHOTws6A252YHcjQbBCSOelecDxsjkC-JPI_Sg0usyiANeWzQ7VXNt-YsAaNfFfnaoHTv3zv1To3fPeWggWwtXYb8f-H_EnxEb5H4bKFfwDaVANQasdyXXpXf23wjwhMEvDEThk4Xf_YF3IIk85H766cL", width: 1589, height: 1028, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115895515658638096726\">Dash Teak House</a>"] },
            { photoReference: "AWCwydjPr37tsKjEvZrxm4CoNGJr14-KASTnq2zmoMmC0SBVCbWvmbi4HtNPsKiH22Levvv6lPknSjvnsZG9VGTuTz7Y-JrS3O65fHAD1MPNQ_c0KMqgBQ8lBeyNb023qwvL2tdBK057mXeoiBldKngo0aOHKLaPlXs_5l7iohaSc73Ji08Nshyy6GjqrAA22tlyNYddKW7XCga7Hwyf5CXeNtWZXjETh3lu2vFYDPa5tZByoKpm-STlvs7KfxDEqq4yYc4nE3IkEfyLCNKpT7ys14wsoKXm5Rvsd28kbNBAYy2chnTg9lznFABqtNiU-m_ocmxFKUkuDgT16bXAf7HPqOa1ASf_oWGv-1xE406VuJ2Vhvk6E5RhVdTfhkCiJV-vu84aqbigFq9kw1UT-K2w3xWUk4wmomPgrBJFC5Ip9CKi0wyIesoxsf13Wd9OP8o3", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114759484091763453089\">Chuan Chiang</a>"] },
            { photoReference: "AWCwydhlfPKFwEByKqxf9ffpP1nA9lOdvryCwu1EeHYx7t0_NqvtARYcLfaWk4Qr1tkDnbn6kt52_foZkjEcpW09nZ8uXR9fe5Dfg3Au-mXSXDCEEC6P_YvUs6jcPypqZfIWif5ZdxFrT5_x3YNU5yM_-agL-i1kK7T1tg4rygjUUhQuK3WKR0CoVmUdp8dWnIbn7CFPtMAZzt8nDzfZ2Ay3UeiY_xSMYFOkMyCQyPWsp6uAo3-OjOXYO29rNfnYMfjWLsRJUv58pW3Wcl9WuHk1PlVGHZy16MH1lJwejVWHtT_aLZc0D0f218Igsq0M_-Tb2mn_2stbk5rgg4tdapb_YVMIaRSCtDTJ49Flit0Ku9WYwPWkGy4MuqAhx9GlmscFJAId6-8SP1phz0lzY8V8w_mn3RrcjX_6G_BOoEixOUHKSK6_QIYpWaSmvkh8aQ", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102107525471936198024\">T greensake</a>"] },
            { photoReference: "AWCwydgD0BghKJ7fU2nkivYpdJCrR2HbW178zUI3LTCvzI5xYFvk1uauTdboT6c-ml0IKh1Ur2MXKyqzegLeHf3mJsZMqgX1_etNif98IPiCqbHptcDFmVKCoB-nL5uwUrc5k6laWRfNj4eF8b7wEeqpwjwDtA9NcWZ7uqILbjTwj1AsJVolH9YeOnarwH8sVg9USd-G8MXkTI89MOLj3ZyAQ2aDCiwddbnh8WJGM3-4AXCqBBcAV4qR8MBQ-OTQLGHE94nYu7LQsqvJ9FGYMHh-eLnnnvPeTMJqjhtf1A2AStYDtrVlWpmFksHznsfT7YIyGxchxhQjcphBDQ-15Id-muj7xroM4OYaCKNL7dUheRdfZSOXUUkBif0jBWqZsR8lmGSDYo6660RG5epVu5Mpsc_TS18b1AxHu1P8OT9QXPmQMXfmPKO8KaOdUw_ng3cV", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114759484091763453089\">Chuan Chiang</a>"] }
        ],
        summary: "Dash Teak House 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["태국 요리·칵테일", "평점 4.5", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "태국 요리·칵테일", items: [{ name: "대표 메뉴", price: "฿250~800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.dashchiangmai.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4148541367313503630", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8C%80%EC%8B%9C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%95%A4+%EB%B0%94+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 하우스 바이 진저": {
        photos: ["/images/chiang-mai/info/restaurants/the-house-by-ginger-chiang-mai.jpg"],
        placeId: "ChIJNVnFK7062jARHAtoL1m4ZYk",
        placePhotos: [
            { photoReference: "AWCwydhg_Ho8TnsimFZZ2OzK8xbT5EQeV5E-F5jpkIv-GEWwFxDYtX5mzVXOI4Sq2x9QX3I1mTPJqwYulB7ny0hTnCs_dBa-wgHJbq0x-aGuv92ofpWQhb2OnY3qrkzOKyl338xkQcfrbOwLhpJUq1efIhSqLHFTs3bPpCjEgv0yEjSmbpJAzgEVJ9czf1dv6INlsPKzElzghkBKriIA7k0ewnRUZYcTKY1w9e4UuT5neWMjQx67I749NGel8T9wbJx7RqsaHX1GJxhs0LUy9MRvVgTLDAFQcGg-1zqPl5iNNPFKUGMrMEU3yCMZdSdyBuMLCgQhh_KECK2HLPratEkC1h52tEb9ApcvD87QeTa0YLJqI3L2ZNQETpByAVqqr8id2ciLwN1phqd6uIvNdm2zjga_Gu1DW2Wlwm6QpRB97WBgTTtyjZH6UkZ9hppPAQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114470118389855306022\">Chach S.</a>"] },
            { photoReference: "AWCwydiADK0IACsaRF1bdiUjoETqCSbBYAFKU6LHiE_vmvF4e62XM3Tb-8ujOUF5XUJGFZnlwMfisPKc-V0ahBbNM5xqYEOE9v5YGNFkAdlpefN_4PzIqOw66AUoD-0UL4Bcdg7LNrzdbCAfkGFGdsaiWBk1bgw0SFBTo3GGt1MOu3FplotfB4IWEyi9ddlHou1kSZMxfrMRMcoXyktT7yN5RA88G2VNzINhzxuURVTVfkusDGIOKn4Ie6TY5FVYU1kuQU0vekfLi57VyQEiFUgdNtyXuchBvVR4vrWmpyx60eV3X9SmzjMc8eSldcF7ACwI6kIfucIsRnZUc9pWm_IShWBJP_2Ya-CKByjzQ48vDD4mpGLnn-lP6kF04qJPg8oPbS8bABrWDtWG_LRQmLACeJzYqaLon6yo4ButQlp5y-3Ga7o", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118336925766481088702\">THE HOUSE by Ginger</a>"] },
            { photoReference: "AWCwydhO8aZbqmXiAs1Ns3RV5ZhDkM5tO3rmUA3cq_j61_TqXbw7DqkMC7L5PdsjYgaJ1jAUBcPnTziaXQdqJo8N80KEoaMFILh4-QmGUbxSzNbUgam4zNEukQdLuRnpPmqWaWehR8iIw2RM9mlsFk9fk6ocJo9EyZSi_b_7QhTcyxwzk1VgKpaRR3mgKFwinBfJS97MTB1vSVc9dcyLnffbP0BjF4QhIF2Zu2X2M6fmOlozU5KSvxqpYMejkj-ABLG9oE0YBn7WZflMsaD3QdPcWLhb8KbdL-GyMSKUTvJ583_jHYDQh2csAB74ZjTzWIhnWoYKKfnAsaZDKk6ORcI2o7C_L-HqQ0a9YSDPzLJmd43NEQowxFOzrPvfyDj4TBNPpxalJG2EHfRssGFeqFjv1EWH05ErZrGbY0pTWiZuB60qcZVYBWbEA6KO93JBrbh-", width: 1206, height: 1095, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110804080261635738965\">Yair Meged</a>"] },
            { photoReference: "AWCwydiEOiEXj6mF4L5bHMxMc17svJz9_0vq8ZudjBUbfzSFL3jEPwG6e6pQOO4bs30mLKod6aEZJQCw_awN7i9aY1PNgCZ9Ttr42Z1bsPn0vg54TqLPHRjdrU6orjlUzTSyG9w1mqEgtNvMxjDz7kQ_fAaHWU_kgEFfq3F2GilHJz2LTI5qIdR69ltWtFx7-vFaRdlcoyJTohnTDIsEhOqXHHalYlhusdqgFlEb0-09iOtUCb_OzPy8RkeMTjGyvKxA2G3z0noGBD7EdqnhU2TIIFZ8pjoiQcK_0pigRD2RkP8pZMiNLhACkZ2kmERaH9mY-GCJ1X1SMouZkmfOCgpRi5x0QzQrZ_4gcyM8oJnaMXbd4IVqPanRGSi65bEmRsjNCqTdp_jhcRTWVyVgCvd53v0BaP4yE2W4ru27GYSyR9NABKelzSMSL4pTQw9jybjB", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112837818706417848447\">Muhui Chu</a>"] },
            { photoReference: "AWCwydh5xGk6Ci10QtKG13KYYIjI9vJSldiZcOxQP3vXQTZj_iZevxXjXo2S3_JcF34sczQev7JXgobftASNj3f0DnbreuKGX3bmDNCbFS7wVpgpgXsMWe_1oJfX4CSe7o51HX4Yqm8U4W0slPSGuZc0S9mWuCIgLbVumoD4dbqwKjHNYKbQNpZpDWmPOd_pBeEv9_N3IUifmtbu8XsTz62UihKH89cq2kYutX5BqUGR3oBm91DXURGu0I8nxMMAwIPRf9MdBeWLN14DTYpMYIEuqot1_nohstYcy0FWYwJn2h98vDKbXrAQLk4EMsiBNVmZd37gxmwFyJsBb_RpLJT7NJXoBoVf1yT0bMj3auAVMiYyynuGKnto_vD_yiuzkg3p3HzdAp0PCc62uNhkHFczESzCM3eEvh7FFqD5UrJppAvR-xZWKrsZoLLzeVqZ3ift", width: 4000, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113020497233270336858\">뭐하고놀지</a>"] }
        ],
        summary: "THE HOUSE by Ginger 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["태국 퓨전·칵테일", "평점 4.3", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "태국 퓨전·칵테일", items: [{ name: "대표 메뉴", price: "฿300~1000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.thehousebygingercm.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9900522049030851356", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%95%98%EC%9A%B0%EC%8A%A4+%EB%B0%94%EC%9D%B4+%EC%A7%84%EC%A0%80+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "진저 팜 키친": {
        photos: ["/images/chiang-mai/info/restaurants/ginger-farm-kitchen-chiang-mai.png"],
        placeId: "ChIJI7OL9GE62jARTIo-coWTeBw",
        placePhotos: [
            { photoReference: "AWCwydjFzmucX0o5MxXwysDfEZstqjILCX4X0ucgspQKbX8WSv3DS8zIWZkd82brHUGt_xKV0SBPclTuiKtiOoQURGShCf9BkTg3tHxSZ4hj-Or59bkb2xhn417rTVYra0YOn_YD_tLZi3iZbHJEEk_YtRctvOZPukTc04OdMkZizt7HDBVPK4sQEQUzGsY3kiYrtwKrEXpGanfxkrFxXBFIfMWnb-Ct9SPTDAeAG9TOy1EokHWovdr2S_I7JW4Mf5Y19WUr6Rjj_31lgQ2F1XH6X29XSWWtPOBJ3_t2C4qSLszyA1YG70Ini-RXHE3L13-gce7ysmb7zMPccX9wuWrG0CwykP41kL9ZAhJkRdgJmm8qTA_3KLyNl0EtRoXhw6MnKtL1Wx7K174SQNksmVzrSu4kTz421nt6PJEHYC-sAr0", width: 1811, height: 1019, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108325200298568813374\">GINGER FARM kitchen at ONENIMMAN Chiangmai</a>"] },
            { photoReference: "AWCwydgfIipj6qwFlY8UaajNgjfJe9PqX-8GKy-ekRK9wN6kDFWpwfhBiYeFwAgGmj5PEWh-ROkoBrdyO97oMZjevUu78ZEvAi28W-8Gk62NdGgF54YU9Yrkjrj79BiBOiis-dnh6KJ1XQzhivKclju1ywhfVRaNpCowR7xfzm70SzxUnUiyJJAa5JtOs04tyVs3FzWRKrgKeivQvMJmOkWxAjTKDyywtjcC6UAGNFwODFxn_v5uBNY5RYSJpxROtTYIJWyHEvSy7B80x2JlKVFLTDwZGmayZOBTeKDNMhPoRowXbLl3KQX5A-c0QIJXQ74svpf1790qmkom4JjeuFLMLvgeEjksDH6u-MFa8Sr-8ZRaI8rXO82D6yAkBQhfE4U19nxWrTJTGbMYV_5tfWdV5E7qLZttgzEZdcisYVST201c1crsLDk5T2MItIZz570Q", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103777741942038502574\">Elyssa Whyte Baker</a>"] },
            { photoReference: "AWCwydhDR6Dth3BaPZW4h4ncbUhQ2b-oWEDXM0lUaLlmBp7MfctKdGKnO87BF9OQzs4kx_ttvUPI5AN6SWhdjRkD7_Lrzo9S02bwus2g3izohmd6RXbSp-MfbNbr8iXWPZInsqNi2nSQ6vwqCzz_9dmGO_gnIu9PbzY7F_JptuOsPgNO7VtTEbQndz27uJTEPYFNPJ3pUmahLJBqhkAtsDk_uAPga8drRjwTYn_VTMV57bJzb1S_glecyQvuhxIIZqXwTmGMZKTJ1fFcTalBjpPwbKmuPCv5JeX0YGO-MJ_STJy_Z8E8rZQyoYsSEP8pukdUPB7KURGBdeAYZ_V232WKCY0f4AFJJMPEEikBA5Q6PYQJi_t9RgXdFCTU5V1aM_Elf1PsvVLRYBx06IzehidE8QIwL6RO7nKuCcOSW78na-L0FzBDhuvS0POolycMTZrv", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103794624096191039919\">kinki Yang</a>"] },
            { photoReference: "AWCwydgJI0g2Gci96BjokZv2RQYnzpt9nkF8Nrmztlv9W_YvHOtuirN-JBkrcqhFq7QNlaHG2m4a8xJS4aMd3Rg_cKO8fPdmAnUUIQ9KVvxV8NVsxjwYBAn-GyYuEvSx3wmGpMgyIzrtw9TCwOTRXJX-9GzU6J7J7mu-rV8DpBshGJFnCBpi9bgqQbkLshPYvEVrohGOWC8YjaolDTv1EvEETNtiIe_p3FtbWIzeRKRSdMaP0QxC6zeZ_naCb-a1B4L66E47Z1262qhswd3GmqmyOCouB-TeUWdef3YOuxfFZmwU4pizWHtFsOKlbKlNIH6BHwOHrfBB6zMxA0VpWNJQV5nwKvBE7tWqBOvYT_QJojBSQgRpPeuJMMc8BWkwOsA4YxDxZFSgqaSFQlznfabFtVhGshue7kjUMUz9BLwKnDC333DrCq-tMzJa_aYOUOUD", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109181942727408948793\">HsiangWen Tan</a>"] },
            { photoReference: "AWCwydib510XNKnDDq1k29Ofu_pbGKHG24wmwkeCsazHrHvlJNrcfaRvLTU2_ax0NLiXqP9O6aOgw4B9NpTrs_a3gxEkIPayYmTMLKAl0u1GJ71_tZPtrdxRSrtk4rfGOizw4McP4ZCRMsmFdpWQ3_IAsC-WDVedxr4bxdnUMjqsx62PhYNzQiz3Wos94b5NFjW90kr9w-_kn5HUhypi0CcNt-94T6MmHIey0tfNJW7j_CBqjGXaCFDgxIFFWODbfhvQ3XX1adE2iq5bhrGcJWQgNjQGe7YEUqDmiMAYj1ib5BP_McfSblZV184AX-1Csq5mhN3rjOZ-xTP-x1KWzuK_JeCNnq_lXAHXCBMGR369OFV_UA4d4hxVdXQmHrPy8uVfP5DhLo_isg_2i5TbrE0NQHuHMXUpegEvtJOhDllNd3im7w0VfkCxyls5EhFykw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105834095057255272616\">纪雪晴</a>"] }
        ],
        summary: "GINGER FARM kitchen at ONENIMMAN Chiangmai 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["태국식 팜투테이블", "평점 4.3", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "태국식 팜투테이블", items: [{ name: "대표 메뉴", price: "฿250~800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.gingerfarmkitchen.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2051551831623895628", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%84%EC%A0%80+%ED%8C%9C+%ED%82%A4%EC%B9%9C+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리버사이드 바 앤 레스토랑": {
        photos: ["/images/chiang-mai/info/restaurants/riverside-bar-and-restaurant-chiang-mai.jpg"],
        placeId: "ChIJoxE_ua862jARUQse-CO-pXc",
        placePhotos: [
            { photoReference: "AWCwydicapbhAeFeAQUzBOvL82YJgLx0QRAUFvPZ2nAWcMJgQl2pG8kFxDaUw3oteBgpL6VOkuhnMTUJWe8husIqlhQp_ew1R-0S_Zm6e90ORU9HLZMdpE0GrhNTtsz1f2CXlGJGcx2AJspWBo9jzQp1DkRqn3Nv14AybUvAH8Zo_uSWo8VW3MWo4r_DZ5BI2zOvN8dk4W6VjPLGViMCVGAOJRfkBYFLfxqTO6G8knJEKaIGWY6jjhrWJ9QrH4EtWbOPUOIERgRtbJ6eEru90j6OgBL9bY279RcIQUw0dWFgsVrmZ_YUB-0DkJ_nxlIfaL6hbIi7Cnwxsj2FjIGSAtK79UksMryfUzdV3BXkP_wJ6-ZTiMiDxn03nSmjnqrJce-nW_evYD1uWXCA7Az9iAeU1HISdSqvXAxTF0tnd7xopslCJpIO", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116149710622094459134\">Ken Hunter</a>"] },
            { photoReference: "AWCwydhkbZ324Q52DSRtP0BKwd1eSUccjawAsqeW5SlvG0AwKSw6qkKjzZTaYMSwhi7H64i8kbbh1o_SZD8OnawU5MYulepvy3uLCzrdyafr96WOc3uaerwnz-jJwXD31nhCN0Bp0Cpu0DO7LxH_3RkjXo07nnXTOrtl_GH1ks6bbCOom2he4BR_7_0vhxm8SC1gM0t2cFR82hvxqgfDAHphhEyyu1k5ResdbWOhkODo5OyLqSQvS3CKII3vjVAWNOYZN3lhjirKQr-xP5zIniQZNtOarKfvLQeV4H4DFIF9E9Hp2kNaR4DbqzilJD1VRkZjTMPLxnzkusid1AOwicS6aT6j6ncIe_IVpo4VLE1QTMNZG5-6iCReeF-U9GVlE0HJmacF8gsf6tVS9ip2BXTBPDREsAKEu1KSog4_GNy5zgN3zQ", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101958297764259120101\">เดอะ ริเวอร์ไซด์ บาร์ แอนด์ เรสเตอรองท์</a>"] },
            { photoReference: "AWCwydhoyHdWOIJi-AsCFJ_UPglqMR_S2tDaom6XByWdlQbTMcZRZ2ho7je-imNXePMNhfCEGE8yv6PUrUupKuux3DJopa16a7OEA7drNgCL3myNSxMw9mamxi0Hc81KSBxapPj5NSVuFXj0LDO4qHqluei6ai7lM5jL7M1gATcRyu7Kh8hMRPZSMg3uBpYrE01nHxgC-E7hAxFpWkk9JTicq8CCvs4WXW7QqPRUYN3gke0N_W1L75iSxdeQvweOuBYuvATzbJIAuUw6hVB16BjQPt0xnMNofaYVTEU6S1Hwnw2YkeGiAfaoabkqJYCnufHUyEXCzdYXgHOnp4YN2I2_fTbxbaacex2W4ZI9gioXWHZvU7X08B72mEw7D8I7y2M4dmgvRBC0RmOGrR09SxmqgQ51wFGaf4tGK3j-qZ9ORuZaGbcwHK-fo8NlfVQikVIq", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115211207761856316523\">Chaiyaporn Perdpring</a>"] },
            { photoReference: "AWCwydjXoNpCWmTKzo7qa7ADPsZTUMGg1ME8qXahC70LCBVJU2ixd02Y1XAZerzjg1VQFhfqgYe2WPTwa4R6vIHNcExZ1V6tEVNAWElsABnXaHsHhnXRXBGC-Vtwx1vNhLOsh_2iHd46-34VeFVw-fRzTf9_eaNP2pRF7DxD7TAfWGr63BNx8WGVx0YZUxVgi7NbX0aDFV9Po_6Mc-c2Iuw7QZXQEKETEZ7McKNM3lE6oI42dDsjMKuhXgmq49bCtRKYljJ4FKEnlOaxUlQdTL15wLvW_YzO3sLAgTfNRz-WHhAH09HDXuLF5DQREYuxF84ig1Tn-zZ7HU5BSWiV2OXb77_4R3wHj7qGy9oVV6IGq4zQAd5FLXGGo92PThRnqkBFrHSqecRcThbi-6mNcDv8Mo-5f50IFZz7Ex98qgaMxCTynMFwKr_SMceBZ2QC42nh", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102306271870617572133\">Ye Linn Aung MMR</a>"] },
            { photoReference: "AWCwydj07pRfdZoaA-MxUTD34yp5iGewHjnJnUlAPf3Pwwe_dw9Zqhn55IG4TxtLv_xMwwLbSV6-PGQeMNlyWf9KVuFUjgZJRH6gQnfJTqkblFE2ZyS8Vx8A2p-ucCblsemWf_lUYxDK2tdeTiopSUN1kdsaO-8VNRrSA607ZEAFIo5CrxS-zEZxJqT8SNAQWbgVcMvL46D3BjSoTylMIC1mr46IFXQFYQ1r-JSVTshaOB7_LCHZDUJoF3tsPOB7LVaq627NRkgZe5IfiK6nfwApkp1dvxB3wVgenZAb7C3hBAekalAnnGLhl8C0gu5g74-Tuh2rpIylfJSFfU7_XFSvelIMUs3wFqG8dVhDbnJdl-huIjvzxm5M4Im0UEXyfT461h6aX22Ti5eLM3U5fcd_wDxiFqPm7Z2fu7SXNL4YEIVzSjJGp8O_cOYkQkaRFQ", width: 1478, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116057648025434926931\">yanxin</a>"] }
        ],
        summary: "리버사이드 바 & 레스토랑 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["강변 식사·라이브 음악", "평점 4.3", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "강변 식사·라이브 음악", items: [{ name: "대표 메뉴", price: "฿250~900", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 1:00; 화요일: 오전 11:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.theriversidechiangmai.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8621506123366533969", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C+%EB%B0%94+%EC%95%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "굿뷰 바 앤 레스토랑": {
        photos: ["/images/chiang-mai/info/restaurants/good-view-bar-and-restaurant-chiang-mai.jpg"],
        placeId: "ChIJSQPqwK862jAR1leyqDMSqAk",
        placePhotos: [
            { photoReference: "AWCwydhktGgXhqDKDkdQjaSDftdVP5dPVOyZP-LjztnWsZmlABro8tgvsicues2LauqBCnI3PXaBo5AUOeIU0uR5AsRuqVgfqG_Q1UjtmALOQJnaAZ67cDeOKCyT9JwO0p0e_a7pCXHuQVCmINaVLqAsX3LuAOV-hnFScn2A7-Cqkaztmm23ZAgbtfWX0aTnph24-OC6zDdPVTSeBxhx8vyYzbT8Rx19yGKnmLY6AzcWyAtphk7ynKPh4D4jJe4R8awm_U_cLgQ1c6Eto0nNZtGW-hkAsGGt4QlLUBrg-gFeecfvNWKqKsJ8pxXqYFnsYbkoz1DlQchhRluzqdmKvCrMoZfshDk1mampnVW0GdTC8tn8P78jnlK9tBTPi9IAroqvn5yHJVGOF4bQID8UsXqdkTP18RqSmGXDy8TG_E5yEWj6g4s", width: 1567, height: 1045, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105346645200061424177\">ร้านอาหารกู๊ดวิว บาร์แอนด์เรสเตอร์รองต์</a>"] },
            { photoReference: "AWCwydgRXygtV3umRr5DXVUCNA4QL6unaFFvOjTFNA56rlJSAx4Uoh-P73qxgglB_M7m1rnuAeeLYQfAo7GS-44TLt3u73GP7OAFWs62nCSy3bHKChMej5fZH5EUZMX-1fY_XLruPiu69aDVIWoHencw5qfWnvaRwK5TEBPX8rOzbPvfQIeuN19Oj-3VbKRGIC66Ed5Gp7oGbgms793SWoyAnoqmPWRZEKJ-E1fqX6ukWQj__HVvz4xnN7tvVLV0BQHP2QJVAxUdQVgL-lp1nfh7NocMfYBEeJ0VUf90BVnRllq1dCg0bIDIFDrdKNQhx_2Oc5h6Q8GsIgFHA08WYWmfzEkYLLVP-jh1laB804S8hEz7PXxicGqplN7pX9PfxG2bgj1RxEpzPgxyNkBJQsGE8ITQmzLKWjR0ABjPa71aUyPBkbN44JT3RiohR44GUA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108570643808681539850\">Thananan Tansophontanasak</a>"] },
            { photoReference: "AWCwydiGNCZ2GBmf0AC45fYWRlNLel-BTCCFalJYIEqvuiM5mJScMdnZ7W_sVo9lo66zs4S8pJMxW6_xMjIjIJctJ_W64HCd95nsrHEwYhoAqgs27HJA_t3H3_q8yNqaIdcmRSKQnHDRiLd7vgkV3eVqQJUML0Q6c4GbkfPgSkrwgHop8R6nAtNE7QL-9JuqBnwHC0C-dLQaWOBObjqdy1PxMC-QCdsLi6VMzAdO7we-930J6h0p-oxEbgIZNbCZbiP2XEXpMGUBcaORwKJE5_vwymPPUT2w5q-0VRucm5i1Q_G-qkxzG68Zs5EE-unykBVpNog3_7f9tcr1VRdaKyu1AVYC_J-SJjvrzN309fSlV_06ztXEN09neQjnvr-91nI5Pd-ri5NLuupfOJ2IKcviDk4r9DYddLa_y3AI1Z2VA1LLCA", width: 640, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105346645200061424177\">ร้านอาหารกู๊ดวิว บาร์แอนด์เรสเตอร์รองต์</a>"] },
            { photoReference: "AWCwydg2ZvXJH2CcodjYYw4WRIT4t0gG8zslB3f3hwRv3OM46OafKU6AM1WpMoz0ez7LfL4JUGPH2HEeIOQgS-La1o1OPXrnCMboRyrBdq7xyzCa_iFrmXlBymjRPgAvvPiRwt93CnGRwULFwZ0o8Maq-qZCGOccu8uf_7WQskwBQ97YLZT809yT1uXUS7kFDnmbStEJ_PP4sTIfW6C19tDUJEAd1J90I97Am1HyfAvi9VM1_gp2fapYBAijjS0WqEjeclsAJiIeU285h7t1UCmJW54zxGLB5IaKONjAqZr7BrHotC4X46HauhmoFhml7zUeQEIxnGGhaxN-KQPQcMgEzb4x6j8cbw8b5h9HfTOgl6fbNuTTGIT63Ta2K6otTIT_7j7urGJPIZRTLGq18FmiYSMiNacnSGQYczG3XqMgzuwVKXo11lnr5fByfyFeCw", width: 4080, height: 2296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106267529304193222667\">anucha watcharapasorn</a>"] },
            { photoReference: "AWCwydi7QsYH9PwCUJWjleARzaWIgTTmMGg6In7MxNiSq2bSDd62bgMvLEYEnCiumBkhNvJNjoa4FG2GYJ3HZGoHEGJXpQMpTk9Gt18xy5bndsDkEenY640Xg6hrBpVK3TjHbM1HHl1G9QVthV1tPZ9RrltGn4mjBjnRG6G2gpYWM_y3Yggs8vNVzyDUjKeEOSnWMijC9pbN5mWWWtolYzUuq5A-qHsWAnAzhg00FIJ8W_g9B69IPcOADfaYgEStDzBBciWkCk011LMAX0PTcbPyxE84nfKuR_TImlyh_eKIeVljukr8uAX4cLqcaOPCLyC92KBeHYThr7SCFBQxCSm5QlTwHtT77HzeSRcJQg7Da5pRjWGIdCepsenB_w3Uy_3-U1oPN_DHUN-80n7Y0YDBLn_0Xecrz-JAZ3fQHo8nd4UoAgI", width: 2048, height: 1153, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105346645200061424177\">ร้านอาหารกู๊ดวิว บาร์แอนด์เรสเตอร์รองต์</a>"] }
        ],
        summary: "The Good View Bar & Restaurant 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["강변 식사·라이브 음악", "평점 4.3", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "강변 식사·라이브 음악", items: [{ name: "대표 메뉴", price: "฿250~900", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00 ~ 오전 1:00; 화요일: 오후 5:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.goodview.co.th/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=695826155511633878", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%BF%EB%B7%B0+%EB%B0%94+%EC%95%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우 카페": {
        photos: ["/images/chiang-mai/info/restaurants/woo-cafe-art-gallery-lifestyle-shop-chiang-mai.jpg"],
        placeId: "ChIJg3Dx4K862jARPa5xXBP9oxU",
        placePhotos: [
            { photoReference: "AWCwydgZroyER0lopa5f1HgSCFra3WPFznEq5iXo68y4FqayPs31A3BuTHTqptmRdSmY9wThfP6Q_D0IKoaglcEecFyphKJObIoB5IkbKhugHBvQFH29VDpQQrZ6FoLS8oqJQYuKyncW_Va26_vWBsj-Xr2KNjxUvtJGL--PJmuIY826NY4RZaRPar6w3mnIBJO6iymymCXfMtF0-PxOW-LlPxItLvJeYiG0puSiJree0pb_a-94gG8uFpK3RdPhESPodyv_Au9KPAfWzK3vCaVvKgjswxaN7FRyC8vuTtpgMKSKpvrd38RWDuy6woXS2Eh992pTecwKtnK4vVjieq2FSdhK5Zw1acmDsdK2OsMXZ5-asq-Yc4Vzrq8uqiQ4RDuisVb2TF5epca7oU8vdwfeUWjj0U-elxxXNnuWGTwwgc-VzLSCYtN9D-o5klDgaIPV", width: 3022, height: 3592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108384116707274667492\">Poon Poon Chiang Mai</a>"] },
            { photoReference: "AWCwydg5hIy8dxSSFwBEel9OIwuCNP-jeYsIHxmxsBCNDWf3QHmiC4k2J9yguOX0S4l4Y4NgcCIuaVt7K0nHCrVXMGxaoGrTqdPWjHPpTvDrDvkr29o1u04ue1N6zwo7OJ-8Fl2pax_FzMIVy-M8Hk_Iu-Pw1ffjRKRB5cyMminHsL59CU7CSc4l8ctCw-5q3H26Mu7Q4prGIzs8Qk9s18TnOZTpW0SuztzXUSfZgFHXbG6EiPHmXUVFPl9-JL8E6K9ok_5cLDxOBuHiUL1-rpQ5HPbUQFbgw-oQwmW-326MfksaQFkg32s7hLyrsfA5LzuIcxOdAFeA7NVzi-XR7mKKfzpnd_59SNcrMB38rFQywnNNdcqIelDXbTTJ-5hPdW1qoOVUxfm8XZ9d_K-9slV7PEQw2EvXSfuZ8BB9raYGOVz92g", width: 1242, height: 700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108384116707274667492\">Poon Poon Chiang Mai</a>"] },
            { photoReference: "AWCwydgY7L5kiv_Pvp6MOyqYIOOMmxMeedsGXPP8tTABqOC3hg0afwfLfZKlYQiX_icFj8olE7zAjYXpTRme4h4-S-ZWha5vcc_CNH_n0UoV0Si_cEgnmrEht5aIvq6NgU6seNPS-H_qA0EYlaqFwtMhk60BbiJUJ-2FP3ji7w9ACGcoNbY0vaK7G2HTc0HysgY7In6BueBuOq0qcTUAdKDmd_-iWZER6SvVgVpyPKJh-ziuwqLFHXvVptiwu3xLSrtRA9LJhJoJX_YSkXY92T6d4lUEsc5YDH8uMK0vPnpMcQf2nXusRfCdTZbw72yRPGMm8Gk7i21tXpluhv6MFW2I5Kd89L3E0tCvPBY2mOHR1e26ZG6v4wCErAk9CuVOY2dModAkdeYcrOOYtUg-m4L5v536qf-hOTPWdGbFgCSveaTOGd2m6hUj0Pl_uVv8m0Yf", width: 1086, height: 1448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108384116707274667492\">Poon Poon Chiang Mai</a>"] },
            { photoReference: "AWCwydiB6hAwvTpsnamgHigEmcDdorLMnE0SvK0PAo13WQXgfbTbb2ft_hk1wWWGw9pfE8SUzRWOUsm2EqN2YPYYhExa63-jgX52y0c1wFbWcNc16Vo5pZr3bGu-rozZxxDZoB51JLTDt5vxBAFIlzWuGFdM_esrMChzro5xnMRSjb1G9FpJtjefT_dD6m3m-SHZt-g7-Pfyuimvw24Bs_hvqvESgYC4y_VNWoTix0lr_IglYPuZvOD5nYXHqsoPljDbkHTpFk2f6xhPwIJumxibqeggCxoXXfJG9QRtvlJUwYnCEbo66c5bHwrjsEUBET3Lk4Bqtx90dWltLYyvDMiIrx3PySk35rYiwAETvUgzZQGyQxYiAYf0aj157NrR_1xLdHLy7kOxIDI2h44iUAr4ewWe3AWnpruk-iKOuBq_DxWol8w1", width: 4000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100984209372801607522\">Tammadii</a>"] },
            { photoReference: "AWCwydgUO7v-EMuI_R9viHMCiOOwclQfNTe26se551vCAjlUAUaLDqHwWmOVFgKvW-4XJCpaONszBRx3FswEFjSypBwEtxjniKxEmR022daY2rR5Ve0hXvFSS2BW91pwGY8ThutDJAu2ewD9cJMNQLnxeDorlKLxme3bsRs1ya1zkzI5Q9RaOooERAf31721SypRZq8e9u62r2oIZg1tCEgJOJ6_FLk5_8eXu9Jor3ewH7ySkwcw4D-_xmazpj8DXKo4l2BeSKizdNChR71OTLqAiOW-LrLDvyX2u3QathOQQ5WX9_rUGdqvOj-kBE9v-c3WODdRXHo7K6NdFZf71z3Rl5yU9z6M_X8nrZKFAjBikZLFn22tvBkOYLlYINfPcpnxbqndgU311zoTfBgOoXMvHG2Vnn-ucm5uJbE7mbFpi_zmTRP9b2GQRIx2sOtx4g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108384116707274667492\">Poon Poon Chiang Mai</a>"] }
        ],
        summary: "우카페 아트갤러리 라이프스타일샵 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["브런치·디저트", "평점 4.5", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "브런치·디저트", items: [{ name: "대표 메뉴", price: "฿180~600", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~10:00; 화요일: 오후 12:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1559368155597483581", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0+%EC%B9%B4%ED%8E%98+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그래프 카페": {
        photos: ["/images/chiang-mai/info/restaurants/graph-cafe-chiang-mai.jpg"],
        placeId: "ChIJSyvmuqI62jAR8Zm8mwo5MXQ",
        placePhotos: [
            { photoReference: "AWCwydgfnvdUq9CtWeB8gW6Ve3wqHWUKxqbO_Z4UY7gFihozoceZSxhHyI0cKMA4P2sWQZuWfwhwXTkHkQHT7-jDJFHRkqVAmuRvE_oNuDftVhAO9h3tFvf3159FkvxgdU8sqwKamS0ant3nNcppFEgmrm1qjvK3DoRs9M5XVS6110G8IlAinUFYFVpGnX9NJZQmmKxd1cy_mNGlSDLG3jHzBWDoKybgRoYl4d1AK18IGwotRBWXMx3lXTmZjCGuQOiRKaQDapvEPHkkXZ8dXyyGbX6n_WbzofpiehFB7Y_JMP2bZ3jwx0Gyv_VI8iQsKhrZPrG79JIi78mpB5-AqgJSThwSCHWg0Ep7tmJgPkDM-6dSTEnqrySpBtkyFLJ3xDuDYPAsaadVvqDUuwnNvvtrzQVueWzjXVW3vj3QLq_K-B8cwEeiPtQJmIjfXgoujw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117103645385429020374\">JIN</a>"] },
            { photoReference: "AWCwydiijMVSLh1Ql_0zAjg7cBQzEYnz2myc1ZZdPWYgaeM7IjlDUX9rAI2gsEujALvwPwKhOMWfNlQmsxYo-UjxfFfIlEwvmUIiJIbg_lctUWaPYJbhcis5_RAyVXVyLgiu4o_402Lq_iJkV5-DyUSHPV4wIXs7gAc6T5nb-ccPpEkw2-ZEyA5mY2c9ZOjRac9_sY165vbUs_9KR6kee28k4KQrSn9x5FfmuFvokOt8uPiN_FsY7i3NE7cTx4tqpMWU82ypjj9yJNIfaGnggE3qYjqyZINpdOWAIyXubzGCL3FMplJs_klmv05xL7637xYhw7W6xDByvT_VRoi5H9jZEp1nNPp7EWFxAU5to2sYZ1uhzkOwILp_95OCvbEvO71zcR93kFoNSW872OJVy3CdX17Xi5vqOi6vv7DSLjX4PKdMVU8", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118170528921940565158\">GRAPH Cafe</a>"] },
            { photoReference: "AWCwydgdACPQTdfqHE8XEoefoYXlaFVWFAprM66jQ5YNxRxVr3z-qoNo6VLMQc25k-MII1dE2Aw_g07YJuBek_JANCdyQcf7zT0rSTvIZEdNw1WwuQe9_bBG1wIFxr3Bf-T0suSktqPdEa09UTiRbbGxfKWcpnGoz-t9N-WVolvDOt4Rog3GuzPxOPJIkN5a1Ej4CcP4uWyvR5kyk5EjN0bbWL46pEZlAaTt1kBYSYXRmdariWhufuGUjqTgDj6iGrGxa5P2kmMK9REz7K6TN2dVO9Si_EY20FFck6VfIaresI4aXRGzGQ6lyipleM4DlOPiaqy1tU2HMwT5SbuDK-MtFX3WasW0cyJvxCJURhW_3XF0EaMgIoVxPV5TTLk4-0g6ro2RPtdtZd-QWDO06tXxB83o-T3fM1O_B2jXOZmLIyOVJszT5QTn_2sYIs_OP8lt", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116264867776653854574\">fugui zhu</a>"] },
            { photoReference: "AWCwydjSSqmIWFTG_VAEu4o9TCdYFyGzqMJQeDzMBlZCQzxzKuz9ySK2_ehfB4xDRcH6ZYmvnTYVS4uFkOyg60VHzv8BhVTWb8vS120RPycdZ-3fyM6BUdRYNHG-CPVoLaVyuMkQn5FY0yWQSTrhV4Y54EGtM9ho1xnP0E0780ylq8RF-UQNH9ZNlqpCaCxg6a7XS50gN8I1PBB5T6iZJ6F8f-z5EO9aPsHLfOJkvqce0LZTbANSaGtR0pIOHHynSBGGnZEHsEaW4QZYqXgGa8G1yzZ8FhlA5raPkjRS1kC_rt3aL7-A5V-UgTtpv28hHTRLgvrGGHXwzKE-FPQY3PhFV965lw1cP4ZeXUvxq3aNH_GdPxtFYO24cj48hiNZv2DIzVEiTHwX8npGEoMrY_aPJWb14vfYS_DOLqgvybYgDLZj0BVt", width: 2048, height: 1360, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118170528921940565158\">GRAPH Cafe</a>"] },
            { photoReference: "AWCwydhBtD2faHiiiJXAMsZjDMW_FzZhKYsTD71qg9FfOqVlFLV50PuF9hSowZPyJ6ZW2DzXhJlZYurMP2lM40HPetmkJrJwWJeVaPn3mwFgzlaKesl0mOOATOAiF2uRuvrFEnFOt2DcQJ5RrNC7KlaL6Z5DA09v7aGiZ63EfPRGARLUxjGnjnD9zlQoEOJjrqvk9Xg-yPRdHV9884Gir6ngwEjfagTvaEn58PZjRx8UxoqZLZwmvpaaSLPI8rBZf3DvhZcln5CoaDl1Wg9NrAFjWrsxFDjMwbETyM9ZxZDHSBm6J8fCl6TTTiMPEySGpwIw-ziUyni4ad5Jx2LnM8T6ZpDS3C3gEZ5M4ShTbjItvJD-IOtWMh1CGfHMcliRNdDIi325ZaDlpxpc8RK8H3_zflxvihDkz02A_6VVGE-ZhIbf92Xaj85qeBDZoHajiDH3", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116264867776653854574\">fugui zhu</a>"] }
        ],
        summary: "GRAPH ground 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["커피·디저트", "평점 4.7", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커피·디저트", items: [{ name: "대표 메뉴", price: "฿100~300", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.graphcoffeeco.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16590211772926660205", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%98%ED%94%84+%EC%B9%B4%ED%8E%98+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아카 아마 커피": {
        photos: ["/images/chiang-mai/info/restaurants/akha-ama-coffee-chiang-mai.jpg"],
        placeId: "ChIJkZyVmJs62jARav_dgGLEBr0",
        placePhotos: [
            { photoReference: "AWCwydgBtPARvCmWLnzPfexj6d0KqjNyr_44ow3gwAm0E4Ut6pIM1jebShOFqVdfyL5Ra5FLR1_jVuPRA5yzLvq2_L8TjVhxEf10lTEznJS_0kQn_ZSgLZynXI-T4KzduKzrbwBr3K_1mPV9HuekeVA7JG3POxdxkw43d65R3zHr0VAZFHJ8pmv8aYpqPwCzrMW35xi5dq0-qIxRy9bbvF8rWdCx-jQrzaNCQXIboocfv52KNVbw9nI45CHTqFYsh_N7FFEg2vji_awY-cDxP1UkB-0rvimsMAEHPfg1EewH5-cYwC8VOwrtCctkAr9vHfewIpyRzMW7oWyaFrNN027FA7WYj3d1Y-9OqAxc_Gz9sTwQQDP7MxCHzQeqh4hNWSCqsv0NwCRDXS4CAzcZJgzySCJckys0LLUuHSFf_6Ol0UBg_1g0", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115075384510459818612\">Seung Sun SONG (Kate SONG)</a>"] },
            { photoReference: "AWCwydhXOwuCJGZVpy5eqYAp4wYB9Y3ZuyQ4DOmsOapFdevgJSLHALSwCN1rvnJWlxtKv2HA3LTtWtTUUW_VjlIRP39MvBsJJIc0V9vFgtbYtskzR6qMsuWaCupBgeEzVq2jqUSfPHII3YPmYUO2A2ylN3AsWldkbfxuzJC_rDhYIYw5CkEp0VJUi9Ut1OIeGE0O4yCzrU4LyEQEGmDG467H5fOojXUh5qBqI4YJFhyCTlNy5q6aXa8EYCfkomFxlyl9qSj0mofOBxcxkwM2h7UjvE2L2l-KOp-BUHCkMGBEHiUIL124ctVo2taYW8LC0OGN7kCHZIC8vRZe7wSqKhenULdzW4V4yEYhGJUksVl9AyUO4pSddGqFsnBX8LnO6AfAY4EhGru95OaQgVFPSAjYtDpF7YgGEx94dop0c1Q6TmeujaKck61EMLfxEXjddA8U", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108080741718883858115\">Marta Rodriguez-Karpowicz</a>"] },
            { photoReference: "AWCwydjxekXztwoAVP5jxkKLRVQf19Uq15utuQ30vTAGpi026LIY0oRzLRm7r-9WM-gvmyBKx11WIK8IL423CGl6DPLNCcQfBmoD3OHHFwt4Vuu9UrD7xcgHX36cynncmd4x9bUC4brSmekpPY3WvuW0rcCVPArCTEafGAJha2gywQxCtqX-gFT9q3pD_R3TA1BOsXoF8VnrzUr6P-hVba650Od05y6IrKBUYnkkyMKT7kMT0fjpY2PQ3lIuINTHoNVCAqQlqOMsUOEA-vG3vzsmla6TxphnTZxTgrzWdG8l-8gwYW_8jC2Ll08ROsfXlrN6S2NdezpTw9ke1l2QM-Bp9S2L4aRtP3FCvzpwd4IiMiOZUXqNoInmP-r7HZpeBc_AMoq7vpiluoVyAw_QE1k54VrKKlo1P5Ir7q16DsWTa2E", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118401422377067304563\">Olena Tkhorovska</a>"] },
            { photoReference: "AWCwydhMzTCI0tcnVOICqJv9Kxdo1DIwQYJQhBbMR5vrJs5ooliUIkugnQIsNz8bmXixJ3lxnf_e1hU9tXOQN3zUkmfNfrc9Pgf1A7ETrgnRLuMZkayB0-DNWgfbA1Gd9wL_EIIxlyT-Ea3MmId2hQc6EPSdwthPaP2Tu40edEQs-2REo4Vcy0ShalvBrK2olycCdJLdtT9kN9k8zX8V6SboyWFWCgwrSdIXPIRlMjXdn7ZiJsaxUrtX9mQ6t_8ltmNfcvJVc3n4LbH1ZkU_RJvei0QZx40rPBPQzHdFQf7V0VCNaaHbysGTKb_F51_tKfw4_feFqI8wkINyrqSJtvb1MVYmAiJdwwQy5gbaiKPmBQGUHJD4UgbLDYNSHTmnMs2LatQXa8z2UoeIPrrmcko-xMf5Jg2xxHw-B20N0NIDqM_0HJOKq3CcT6PneeaWc2rm", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108080741718883858115\">Marta Rodriguez-Karpowicz</a>"] },
            { photoReference: "AWCwydgGYpGb4gsbLZE4SRGU8BsZJGzzeXMRMmEwtSflQM6RBvpDg1JlYXTDrUZEZikS0e2CjNgf6FvhPYvCvbWzeJgshgU7CPSyU8lE-IB6dmYuWVGUlPRJbUcPCtVx3tCGh0pHerM68_aKQL_o3q3mYW3FPx8_wV1dJbe3MiIaBgRwCVzqjweooqfwPMXzmnMUF7bdUn-yYkpqOE1aHvQ3V5IIeH0plbfdR2_oycZMYBA0T1Bwt7kExaY2pAk5UwB6L2btc3Gtcbq6_f07_c-tF1SXnqA28541LxepHCvQU9N6Tq-P1_ET7n-YbI_wEOr3w-qvTfdoG5MTVay4C3pTMT3C25SXMQiKTrg9Cjmxq59aeTk4ZkM12hhavgijY9R4AyyGVfyBw9BYfgSImtnRX1OqOsUb4uaeo4mehTptoHSLO3csNNKHzI-KvGOG43az", width: 3200, height: 2400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108054244564885335756\">surasit siangwan</a>"] }
        ],
        summary: "카페 아카 아마 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로컬 커피", "평점 4.6", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로컬 커피", items: [{ name: "대표 메뉴", price: "฿80~250", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.akhaamacoffee.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4800936117945047878", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%B9%B4+%EC%95%84%EB%A7%88+%EC%BB%A4%ED%94%BC+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리스트레토": {
        photos: ["/images/chiang-mai/info/restaurants/ristr8to-chiang-mai.jpg"],
        placeId: "ChIJIdQIQbc72jARb7Z3AF_aLSg",
        placePhotos: [
            { photoReference: "AWCwydiZDPef43BC44ImcJiPnKJX_B8s-99GyBgevLgWVRVm1HDXz7G169itcQ4rmCvRe78mZdsqhiHRM4-qOScnRwHGEZzC81WTNU70J3EoyicO1t0SaH2_fMJCwkbMvsspbJmv6HeEDh2N9bQIa_Gxoq0fNlnmc0SqcCuY8EmPGvewqmBvuf-01HZ7_bMHxSTIG1ggPshRTtdcjuAhXeHMXpQMtP0-HJ8ilyO54a9m1XKbitLtFx4RtEbsPlQWmZfg_-9LD36V8m4u7xgRK_-5Ualc_KG5kZgwOpiDPN80liFGKb4FhPch45RU14qIr7QKtz8bmq3i107cfhMOj2bViumbKjMil-fpOnYCHpnYwKRBM1IifFtU9JTaW6hb8ZpMxj0uP0o9fTf1Cbd5YVqwzUhawhxk9Jx6O7GcTRVPCM3TDxQFvxshcIx6oBbtpQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108316763947493500533\">Li</a>"] },
            { photoReference: "AWCwydjId6h5DpSg1jJs7_BmEqYpho3cTdzwCVHIDmU4HK0SqqIz-C7LplP6JsUVqLrRHVrzpWL-glDThnbVMylOup3jHsAj3iC7MZJEbJP1VpS3Bi-CzlG9ofNiqFFqeq-5FU2jjULlArC7u4JU95j4VyaxNmvoCzvYW80JZaMN32yG5KauTU2pXTVIcmvMyaqLzlQnQEeZjy58Hz23HV_QhpR_bqy5l3T2VRW_y1armxvm3yXhwkoVo-Hk757mOmpxViXo56yn-RxSyQal1nHGReHM8ZR_mkuftLEXWWLIBV0PdV83s15cJ8mnLARqluOzCE2IMdi9RyKkSV0FHvy5rIsUhzDpW5sq8D1PqWxPwSqFnqUxBuChyC23AbUjFLrmEI3-s_P8WuB1tAPF41z1dfDRscKgdo0lTntUYlqePihJhfdA6lCZ2yVbM4loUyre", width: 1793, height: 1715, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106252876933173301226\">Izzy Chiang</a>"] },
            { photoReference: "AWCwydgknrpXSlgl9_7pXTaPms2jm4UqNxpEG8qVMxXlzLK2aEJJEMw2L15bxDb7J9T5_C6LQuhq4RghKo-rpvXDy2mcG0Tlp_FTGO_HohkC5SBwd_mLioFC50wjRwwNHcxD2q5l5M_bDH0IkrMWbxis-VRl-EQJ_LyBQxrDxC50zjpFU6k5VNYl8083fwMl122onfVzxaa-kPkxL_3OENl2q8vABsrZ14Z49kJx4OT5lASgstMgBhYA0oBTug_sQ-RMDyQ_3kqHAgWk8NfVmb_MDQRBWABPf6S6OGGy46Q5kqtlQZvh_XT1dD_Znw_z1dT-5_k_6Ws7JXnoxQK51aPkzxqAM_xBB7PpAK9QbHTdiRWu_hf2EVudS51Ih10LFbIpyw-DQwCVDDqO9f181eVeqBVA2h1JCIhK6zrlLqhWzSFs5yCDTa55znC5_kvU_nH9", width: 4800, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114918774748473660449\">Julie Kim</a>"] },
            { photoReference: "AWCwydgTGRB_AJLYmwEoBgZD0MQndebb9BWFOrapCyofrlrj4dzvmYeXglZcTL1_gk2Kl_oY5W8D3PbMIGHbJKRXxBgf9tapxIqzvFyldVS4uYqJ7gzUqlFOz-8lrZx60sZRhwPMXchf_YMwUWUcl3WuWYpNKUBRKQlUtrueKKWIAfjXSDJQlHo28TyogSUHdyn-RFisEMzviI81zU8K7bTNdbXKaBEBBBQQ2DVkJvaf84qgSv0jHQ6d4CbN9znKMKegzXXYX0Zwn7ARN9r_4yvuxBHQVTxrP1qiHC251nRKsgk56Yv4_3U4Nl7jAE7sG4MqoR6846dvbgRD29PB-uAxc9AtJcu_8Xi_tgujYd-3_TqnOacHHE3ZIgSVEnPcHVesY54zsL0RtVQ7yI2T0P_4WXlDA6Y1xFkETiN7DPCIsuAhSviqYJ7H80WgFo5qCRqf", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109411704127676455952\">Pap S.</a>"] },
            { photoReference: "AWCwydh6Oyf-spapeSws7p267MBms1s-h3ZM8iKiZyhCnpjdGLHYRnAv_YVFlLmnK9tWoVEFqhC7Qa2rvSfPYfp5F7HxoA95cWBubZcxfSGc1a83bOBwTTZUsGqCWih9lzsChm2dP59ZW8pux46K3oxWQCnwiESyB3QSC0o9V8qMYat4nQJpPH-5qAWpuR2rAeTL12Jdj-hVMPI_v26v1L0higC_EEglKgEFxizmAwQW75EK7t2TphkvWBpprJIR7_QC5NOj_s9x8U4f7HRZI_YzLxEVRl84apFU_reWshHe3L8iD4y3sTQUn5hZAlZbVlTgI09FbmeoR5fg4tI_l5UWefCgysfh2_0nuP94d6vX5fDC1NxodY_X5qTG4EVrZqLsw76hb5P1fTvFNVvWx7mfcFi-l-R-49kCpQ7QcljPC-c_1FDzc_1uWnkwZ_xl0nCo", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114918774748473660449\">Julie Kim</a>"] }
        ],
        summary: "Ristr8to Original 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["라떼아트·커피", "평점 4.6", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "라떼아트·커피", items: [{ name: "대표 메뉴", price: "฿100~300", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 5:30; 화요일: 오전 7:00 ~ 오후 5:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/Ristr8to/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2895210237033690735", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%8A%A4%ED%8A%B8%EB%A0%88%ED%86%A0+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "펀 포레스트 카페": {
        photos: ["/images/chiang-mai/info/restaurants/fern-forest-cafe-chiang-mai.jpg"],
        placeId: "ChIJ2xINj5o62jARvGTpW7fWjts",
        placePhotos: [
            { photoReference: "AWCwydhnCktBXuEADCRAPZuO8x3pa5yLY4oxbntbAGIa7e56fjfWbnyVhH5qZnH0OB3k9oRaLza_lCGwR8-NfPOVvmux2v_jyRSkBZafhM1Q1CfrxfYTa1sd1Smc4M_bCqFRsFiyXStWhfiv7XuP2m6q7hx68eA5GGA2iLsslx5rtG363mHHwDj3Xoc27zeCj3JZ9rs0R1WM-gawDA1H2mdBcbTk1TwDhnTW6MdjfyhNWKH34StZOII5-XeHoWMlc1-rbEziSb4B9OQQqgqqTfVlBHtdCnABt-RXZn3P0qImu3s1xT6UEo-6xxw6xuN4C6RM1PEEheorTMEz-_RQ29RelinfYMqRNIStvO7btj2AAIwbf67neHTUBS-xeLT7Mz2q1Y2rzEIz4l9ZzPznUaklfidQ3c09ngO_zRr74F-PTa2QpA", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104990500047916293099\">เฟิร์นฟอเรสต์คาเฟ่</a>"] },
            { photoReference: "AWCwydizWmu8MAixPypfNGMGVvoSbaGuQipVsOKKUQluLPciPFdGGmXHqkCqJ_x37jEJo0XPuItFDmW0npvUNTp_wi6r0vklxq35Rit8wyEdza-hPz0WGX4wWN_xQ5zBp_z_iy6DnO1lfc0h7wU0OBxA2_qelY_OfAKnIpfxDBz3TPP53NWpj1J_rdXosFZnwC8gmpc3YFjUTv3bXw8Y25ZxNMsgr46o0MzSxeEuFzBWWpYrmrWG2rw7SqRq4hDFb1Mi4wFNsPmOKDbofMGHj4fWMPunQQWIIERP1rlITMUgXRBc5dxUNPBHYErlp_A756ZanWokSQpL8kibYDBafasJRZtS7PwW3vriIcHv_wbLzEYNoLTUGX5uqkul2U56H7Zx7Wj7QXHPrinutiylsBo3R4W5MRNUgwJ4AHNzdhbRcNx0w47zbFGQQ801Hbng5VJ7", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115500892203071663494\">Chiang Chiang</a>"] },
            { photoReference: "AWCwydhrGYpzgCFqKN_4xtge1eB1uSIVlw3vtkH6SG3Sy4mBo-g5pOPGPWEm3Q5zPILuc8RhhJuFaVBANYM6VC675vTZ6gvS3ZtiQGwG_0gJDu39l-VFU_cjm1lNr1gQ--jUxCiwChZSYiP2AE-88icxPjHtIIH21UcAjRvzjNDjFx-okC3UgDTl8iPvOltKcS7VZBFGdBEyzN1BUARgKb1J3HyUcpJuYJewJTHhslpzBS4UgS-GjhRNIE819vLgLT0EeO3Jmx5L-qP7cnNnvEBrJUQz927j52F71d_0HhOeLxFgP5yWedPTDp7Nx99r_MUg2HQNhNpdQ_4lLoqV4rxb5peyMG5a6fQ5T6ZCTs6k8k4UzyqCEnYWpuagQKm4R36Z6zbSleoLEgdhBkGVQ09Kqms1EspjxbaZzJ1ne014UBh5xg", width: 3024, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104990500047916293099\">เฟิร์นฟอเรสต์คาเฟ่</a>"] },
            { photoReference: "AWCwydiKgglsmquGpoXp0zl3ZEOTdu6mNc4ekcRwFYVbS6cKjjRJFDpBr7XPsVCnjRug-0Q64FHdBq7GdfvxklRJZ0Q4jKMNXgHzrgftOw9Xf2znpLmF_MyQMm5Lu3o3DF7qt9u2TiBzw0rCe2HIsO0gxwp5gGaiXWKmpoQodm5wd3BrdAFn5Fj4964SRGzrKuLVYgkqX6yifbxdgeaOeFmikZP7zX1cbCJ8w2N5icLScVBf8Rtga2LbUlra3CIPJxV8k1ClFeWA-1b1NqsF4XvdadaXbdzLol1QbP5M3NtyBNAXIf6rVRULoK_t32r8Bp3caheMrbedV8RcRFCYIJRp8MVcQYXV37YFGhR3Xyd_6WETo7ZXyDZHPH4MqnmHzsxXkU2MDyGtaFMA2VoTI3azxIcwYLOozUpt7JUiFEDMVbTEdnXpwqFXFyw-MsLCm6Hu", width: 4000, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112429210845326658527\">Mike Kenny</a>"] },
            { photoReference: "AWCwydiegkP9LqBFbEgVmevy0INs6BJPgbI5dyfIMsN1Xi8ezDy03ooAwE9iTjHpaliqBVnTr6ajhmAAKYG1xb-MdqNg5OM8pv8KVr7ZIDAZVfr8fm3nIXCGPJ0br2FMtY9T3oEFeuoVOKrDAglOznadXm0QsxrT1Jfo3dc0-Ckmd6OxaYnJtJmIQ5BfzH0zbdRtmX5YmmK6QqnXXI_R5cc9ege02FVCVttOa0oaQf-I15wgjko7qCkPR8Gn11dtL9Umnz9PwpGsOdCMz4JDZgOGLNJooRkv-qbZhJGvRvWQuy8QgHI1pNxWS6zE9-tlc2czJbdtfuUG0eDwhfZM-scqvgoagy9sSCF59s30Z_cb-PWPjCge8QDRroTZgXNc22HbkGHTpl3WF33WLx4nMflD3xuG8IBL79IqmrA48_7QPqd1onB_xRDzGs1UbLUl8_f2", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115640365257062244632\">miissqw</a>"] }
        ],
        summary: "펀 포레스트 카페 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["브런치·케이크", "평점 4.4", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "브런치·케이크", items: [{ name: "대표 메뉴", price: "฿150~500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://web.facebook.com/FernForestCafe/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15820818624008512700", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%80+%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8+%EC%B9%B4%ED%8E%98+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "프리버드 카페": {
        photos: ["/images/chiang-mai/info/restaurants/free-bird-cafe-chiang-mai.jpg"],
        placeId: "ChIJM62TU7062jAR2w0i76jqttM",
        placePhotos: [
            { photoReference: "AWCwydgj1oWu3TL4lEq-16qx405pMQNtB12pk2nvuL6BiMgiSUfg1xG11d76oNcupIdqdIW9pdI7xjOCaPBKL13HpUn74f3heboQSccQGL4v531ncOWqp4gpFjRsd0ICNj77C7JYaLiP5kkvDj7DU486TXPwNAr2c6MZEJM5k9dAw_hsrPP-a_b5Gfxm-6Fce8r7h5W83-t8xKIhLjCcbXi4rYoGsOn-KtSRQRXzWoHsLOmWuUaVSZOx09uYuTgdKugj43utj76O3xqrbuEm4BzDkrzcaETaVmRy8LIml6aAASsUBlaW3I3vF1_VkHMjjsKDtkhl8BjacFRMSFm6EB-WSCTKlJjH_2Mjx1E9PKPqvdKcnHK_Dhptc_xeHxPxtOzoSRH6NtkT5_FxRzfRpj1O-cfhk61XIuYKuy9-FAceCFoc3-DeyLjLJOCvDuystA", width: 3617, height: 3099, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113160357237216366844\">Free Bird Cafe CNX Donation Center and Thrift Store</a>"] },
            { photoReference: "AWCwydisqfr4QlbWuKYgU0fhAZF2s-D1jxvtd9gtwzgL72zpLw7uDFUEnO1_2uhH59y3EbCrzAnEtNMW5NjkOVXpsfFPifZzze-pXpJukC5zlaBKZIqD4KyFFMRTTTCeYePF34jkMIa-YtOIIxKj5cjHeOQebamitiacP_71vjoRFdLDAtQDNrjpRfoQwhBJu6OWUMHf8PjV0nTjsMnkQauv9M6QyMPCtdzDJi40TGF0wtbDv-ciglvvCDT8ji9GsHvymo3cmhTmWLRMZOxX5XspucXf-Zh22X0Vjff0w17_kIfkR7G_Iw-uEGnYq7AyCZFdd0n_eTiMs12jGy-glJZRazzOa5jz_e-9WAz5oCNa119NBMNv78LsDM4gEhJbAGSKhVj4atb8Jisg62w9SNlIPKFq3lZgUdJVw4Dje4WmptLZlFSdcKt9EenWIDjcIESn", width: 1477, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113160357237216366844\">Free Bird Cafe CNX Donation Center and Thrift Store</a>"] },
            { photoReference: "AWCwydihf1pmsu0-SGxuRXK564kl8xrH70XkezyEH0WVIITUAGsxvxV-TTjc6DSl5TOcYU-QGhr1rbNtbU-WN7PHuOeu7VnN39_g3qUnNrGNYS07U0dQFYoStFab2wdhwhvJ35XUs3Bb2a1zHkVMjMmVpOoIPrPjBIJEE_Xx4hj8-d9zuCQRHiPdheu4_1GSkPQSGRaLBaFfm3zkmAtlIYVHFipPDl0uvitptv2F0zLp1KzmSxzYfHD8kr8u-IYdl7w7VGMjumdQmbwrfNuIy6KQJ6M21NwFXWQTDDwMUwne8lEw6U5nCfMvqzytR5rgaY1_P5FxI58RTax_EZUvPPxaiHCMeKNduYKuRtk7nG3LKemsQCZTvEPB2y8XDPDrxEozwKoCjaEV9R3xK8hGWGza2cl_Ry4kDRcnDRHuIDdzpWDwCGuHaUO1t71_4A9TB5oP", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106708076397583931033\">Veg Girl Club</a>"] },
            { photoReference: "AWCwydh5JYvKl9ZG9ABhhpZVByGdiAl7q6_0e5a2Q5r1dRjopZW038doThk9kEyqmseCQrogI8YrxbqFw5pOjUL4129d27mgbCWzqikYKHv1TJwkKlhl3eCSZh2prFz_wVI9-Mucq4jN4tyngwZY8lTsfJ6FVjSq7Qhs_ZzSTB8V5hFUJHqCFYvWzHqaUl-zPCplRfZb3is6ghGyVzUB0vcEdTNHDzM9d_ypMWmXPQ2e5_eLsDoLxsLZtmHDiN2j24JBcroFGfbrrueSnl6K9me3fHnd4uv9KYU4ss5zqVy70yxgCpWC2p039s8RKqEAVtwZFHSz4yotM3tMElMngwUfDJGIGq2QOSCMLJnKlG9QLy33tP4Zkz1I2GFLF6BgGAuZI0QNTTZSX9LMi5haYqpkaPcUofKQJmKeDnViYkd_hu-utTIhC_2t-Q", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116814473283547870356\">Myra Lim</a>"] },
            { photoReference: "AWCwydhw2LMfXI2ZQhNCI27_v1Fd2pMkqa3ODkMWrUcU886SM6MoJXm0m6m5HFlvLKiEY5X_IQK9xfJ4sBQESQtQaJ5thWhozOl1PLMwac-iC5qKvozydGAm-z3btc15blAXF2MaIuO3eATzEKAMgud3SsyxT51wb1c7qrnJz5Uzo5EFJxC8iR0iUmidwPXMZ6yFYF4_YjcnqYhzTmeC6cw4E6ol1O02BRJPWGKHUZTLAwusP8rQUg2rVJKEx0Wh6-iOlmWqHKvrRxjZfWB6MT42WgqAanx3Usmbb3ol0XKlKd35PNapfVAQnqD_GVvRkbAsmo_zglLjsqRYGz5_sl-TfY-jkJ8JHb36UoHcV8iKLujU3dzNUXb6OYfWMMxaTJiYtrMQyL7wXeHJCPID5pcYU9KeDcBERnTkbejKkdXI7cjF-bKmV_otJwPAbiIIlHAW", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106708076397583931033\">Veg Girl Club</a>"] }
        ],
        summary: "Free Bird Cafe CNX Donation Center and Thrift Store 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["비건 브런치", "평점 4.6", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "비건 브런치", items: [{ name: "대표 메뉴", price: "฿150~450", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오전 9:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/FreeBirdCafe", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15255638799051525595", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EB%A6%AC%EB%B2%84%EB%93%9C+%EC%B9%B4%ED%8E%98+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "데이비드 키친": {
        photos: ["/images/chiang-mai/info/restaurants/david-s-kitchen-chiang-mai.jpg"],
        placeId: "ChIJJ4MeCW072jARTMW_4GZawt4",
        placePhotos: [
            { photoReference: "AWCwydjYCTDtOyLZLntGk19sPFcvDetuerAslomB2ZWKvR_ykhzvR5uuJxxWUrBHY0r5v066AciQ219XdmKT3Hp3GYzWbfRurdU0QX9sIQcuZNuLWO5CEYHg8g914Cg2KE9zVFmdOZFi4kW0KH-L2PxIzGz_cF3GhDYpFfswttY4SeyZCx0lQcYXr0AQfSDSaMQVk0lnJyoXGsU7-hE5zffZpLNRYNYIn_DEflQvYTDUveiNsVDBxQhUBBIpCWtR34BXo37yHvBJktwQ7VlQlZEdEGmJvohNaURwvGSWUMycEONpN2iBqMHtQni0sVeM-Z292M90lm7F7UN7beF_rwuEjFSGE5YrYO_-aWIG2i1R-8OiOK-jS76U-H10FgFhVowLpW42wJhidD__AiL440RXF4Fyd5TFsn89qKrwOZ2iGUZKdRA", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110013881747648947077\">David&#39;s Kitchen</a>"] },
            { photoReference: "AWCwydiOR_jfJ3P1Bh1ewiX7T2hBo69D02JEmeuCME_CwZvPmIyL9cAKHL-znTefSlrgYmGlkJonqx2pRxOJ0fCoAvvAmK23Dl9pjwiw2i9XBglpGBCCsgieckQF1M374dHRrVD_0a_xaG4JywrCP-kMEWEW7xX0bJh-JwGPH06SrPaDGl_u6o6WP3WCLaFl7ZdxNVSBTArvzjgFoeA-wmPadXMLmQuNeRa_YxlcDZtMlxRyue_Ds2X9cgkjXZ-NR8FR8vtWQZc8cZPDTI6Xs1b5dAqo7l8F6y-9YiBFnVBraHx3ku4eti6u32zbdmclI4RlDeWsH8McJfqabtxLNqvO2elC-9HBgFSLnRfGA_JXql_d7wzmiXEIkF3lNCvtt1uL_YWf6tLIdw8c1oLVfWFgT5JT83gFpYAyyjXPIBKnk5-822Rq", width: 3088, height: 2056, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110013881747648947077\">David&#39;s Kitchen</a>"] },
            { photoReference: "AWCwydgvjfM0UmgvmN-lVvdPBrU3MBCacIFTFV8upA-gPA9jcIhc-yAZmtaP-7QSil_caHWKv9ooq4oLeILfMc9bxNHFTIZyFd31ctOE-Ky_PlwtGISikg_JwzZE9clHWFaMBZUQRuy2Eyfa4UH7e2OaaiAQAn-vKayIETB4UrxjgYo0KI_t6TOjC5oZK3Ce4zeLV-BwvtUhlCitj-Yrys2tcwLNcH6hDgV_CFSwW-_6mydo78TecYDZ7AzpdHXRK_ayYHWmfkuMHuxVwhBheXHUEe-tMlM1C_hYcl_nAP2P_4Vcyzo76UxGOIel6xwKcg8QY6Omsm-IIFsD6kuJ0huytEsMmwGaRXtZNjpIUQtlf0yR7duQFqcjWKUijHe-XPDg3PQUFpia8_pep27-oHPtqBWatCRk315qLDgr8h6xmY0tFuQI", width: 3088, height: 1737, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110013881747648947077\">David&#39;s Kitchen</a>"] },
            { photoReference: "AWCwydiIh2blo-1o8tvGPWOaBH1hbT0CEeBtjYIdCK10HZ8Nm5JrYjexG52bplSnweSPXXbQ7eYvpJRoCHjKl_V3Yb-iz7G5phc6aevIejeOciZkj4Y-jaC1LYlDL6FV9bY_Uv7JiXK7iufGtdIyGIkgCml9WaWzqF09TkK5aa8gw74MORlhvhNbAvVymYWonuXeP7Fvzi3cbY15gSnPUTVMsSYeVbYBsgI4Ce17KbtsiQvq7cWcZtYn5HJGqa_W2Yk-t0HnhT26nfu8G-NljAwdWQXYNe8GRp5ZjNzpWOJ0j9i42PcvqERr3mBMpuNEOmxfgmphDP0xDrihSZPptyUBqIMk4oGudCwAnMEi97T4yFhMQxVrlUr2qp_3PTf1lIP4c1JbZ-R7UPFaWYu9rdqWts0u7k0glufLZCoTp6AcRNI", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108978671069531519165\">Misa</a>"] },
            { photoReference: "AWCwydiqWwtXoCONyEpxlAidXKDIHPS770rH039FrUBAyRvkJgKKN3LJpmMcNQSWMjVHQaLXcvSl9lqGup8B_GKIVw_PjG_svUXGPcsuA-nJvsfXxfs2Wx36mHqOM3iPfLmckl9YFVMWQypnES4Uj2zYdcVHEcejMdnUQh-Hua6qSGpFY7tfJlROZdCNc0xEEVNvSju59b_f--GHCTLjfA8Dmf912sND9OEuL7wGnA2Qec6euxZZ71_rpcu4DKROaSJwZBpVBTdbZITg0zttS4eiaCfY1otqZIJeIP9ruXO8oTl8FlWlwBU2c6_jGeTmcMPw7Jd9U0i0-7aVxWTILxsqA-H6ueUNnYSw1U7NkrcWwHWtfHEP7LlCL5-NoF_3oM5l_l0BPEv7is5di1rle3Nue-JQCApmN66HucMPOGNJz6s", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117689113552924806976\">高柏偉</a>"] }
        ],
        summary: "David's Kitchen at 909 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["파인다이닝", "평점 4.7", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "파인다이닝", items: [{ name: "대표 메뉴", price: "฿800~2500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16051491419805697356", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%B0%EC%9D%B4%EB%B9%84%EB%93%9C+%ED%82%A4%EC%B9%9C+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "옥시젠 다이닝룸": {
        photos: ["/images/chiang-mai/info/restaurants/oxygen-dining-room-chiang-mai.jpg"],
        placeId: "ChIJKylKs7c62jARu7DZZOxmg9I",
        placePhotos: [
            { photoReference: "AWCwydh4Tqq7QcNPgvoDBPKfuBtUJKVU0zGRoS7GHYU7XpOc2k1yMcAjkKCtwX64kx7QA9wjxh9DkUiE_uI8e0RByWr1id7Orl7WuZHF9sehBm7yi8YbWBb2G_ueYaU6KMLZX5C-BRoXLLpiL2AahAauyK6L5ntwnGR26qaGmXFoeki6W7f-CSYLTZEsdgDBtOOXzfDIYJcG45v3qZRy-vUSHM_3-bkVfm595p_ImNA2pXFIVyIY29HN39WG7KxaTzGwPjlzTnX-ry7l62rMAxUYQOhjHwXF4VKsaZBWxHwcDWAEufFrJ4r5fiscXLzVdV-wqm5eQTz5XHrQHZGaHD7GnMvg0o-8s8OAUw8-tx_uVLJdEdATcbk9_8q3bZQuAXtAvtikwwqZIiy5aC--8VO54wL9PyfbJ7T6AwpPRsdhE0ktbExdgkRuxtB9islSj9mB", width: 2364, height: 1774, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118066661880976097150\">Oxygen Dining Room</a>"] },
            { photoReference: "AWCwydiFn7pfnzKW0qiYOuF4Ea2fBxOC6GGFMKikC8IW0QIMSgTz5L4NUtjgdj_lFqmnyXMRsryyKBCtWixcsGFa1o1jMkfsXa3MXfioTymkvQP0rgjilyQge5MJT4hulY3Z3LWZuK6RY5jc8Ifx4YNG9aX0Ef6MgGQKXSpe-Ah8RxyCFSwn7iuaemFYEN0GqMhZjoKS0HdgiDyRMZJDRZ88vfkf116Yz2QwG0EdZQOr4etbBgSHYr3MuZGJAZ7A_CnO8Sl6sIOTKX0LESR1TashzP0cr3USBGx5ayGCiQNYnga8BEGIjpyPnmMdtQ7K5FsxvLnpki3wsJZzme_uTk3daOykfv3tMMweCT9XX8uErZKw1LFL1_kn-J1-95lhU7mQn1gitFtIwyKV8EXiynOVrh81N3SisHzAI09U5K7nMvKycs-VV-pviJzz6dBG6a9Q", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118066661880976097150\">Oxygen Dining Room</a>"] },
            { photoReference: "AWCwydipYNK8VUSfB0q9CK_B2wMNiWI_YfLTTW_AJ-zo_9REfeWF7Ih5GV1UFhYMS1kPBRJG6M5svfChPO9gldwk0cT_z44pbhWJXYNmGmBwJez_FWwfeyKBBzf3Xs05owzecYClHtyieid2UmB2Z8jcujZot5oJu2fCHoF7jS52XT4lkZpH1C6p6EIjOKeKaKxRM6MZ6wDaqI0KzIjWhYtJaOQKL9zSXUdm8aZGoUb_t82kOIik_fiSRzCv_hSQyR2gMoUJp6xPEhPWDTKFbR4rBqJLF3Ap-KpRq1pHDjoQoruWaQssb8XP7GtIM0vD5_YPyHd8CjXVtin2b-V6frvjJV309StZtNSdkcZfer_O2B1pXS1mQMK3iLh4Fy41npHlO8G6OtBEAgqFVxpImLnyiqWPBTXhzOpPuD-v2vqPFh__zYvO7sv8rbRRm-wPUayQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102670815999657293644\">Dave Ng</a>"] },
            { photoReference: "AWCwydhFDF_BTvEZjNaoD5KjYad5J5D3kvKttx7P9X5viSaDHE3PvQMNgQuuEt1mHm8bf2FSmCaYdKBG4Vmi-LuXVJAhSEbs4cq8En7b4B9QhXaUWu3-h1MAn6KhwaBcknCAgQ5M-qetl0vQkAosDP0hUn-OqvFZ-mguQM1gUbsgqvZz3_-3z8MQnGnKVNtLH2JUam2Ilm9g0B2za5Vn1ylSIwMNdXUxOAcmOGQYXroI7mUM4tzO0NbLUpE5kqAoyFna_m_bnixCR068fINurv1UufP_CRqMPPb0y6XYWmwRExFXbH_6YpjjaiH5muOMDP6l6rm2K800cOryYHdGS15CCNOPW-baupy3nC4u9aSFtdw9qb1M01Tm7K5VrlYt_FiCTQKvz5RW6Mrl7OhQlrDxtiqNxvKl4P_Zqlwdi56U_CcDUlmCB08wSmt_SOkvgQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118066661880976097150\">Oxygen Dining Room</a>"] },
            { photoReference: "AWCwydhCupiFjIJQdvrVp8i9R_iD_LrXGxpM_nm9uJoTa_pauszBD0ymVomAcysOdofDmwE2fvocwFWt3a1R2rAsXzNzDsOYRf5HAm6_nhfWVLjywsDPPWTkaE-ScRVRrYvbPFnTrLsSYQQLldp2RDu3R0U8Xj6KhUppQu6mhk59oodGFTiv2sYpashg0-yMvxGsH_nMiZALzU2prnf4ysrn_CGoJCLu5FvuYA-fG2mTe5xlIAkEEgHX4o8k31l7vJdtYnQuE6ZgrJRkd0zW0jZLCxQ6xFOwowNO1cuGXt-7E4jity6snUxQYLFfGcQCmUkBsQlzbcuyGixux8UECF_KRk4NaN3t5lAYg83zI1aOdnW3hqwS1V1o4YcmkIKWI3Ddknwj_jubv9x5v90MJ60JyDqiJ389augOikINu1f_V-bwWTAknJ6z4B3VITE-4uTJ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104884136383023740006\">Fyeisabigfoodie</a>"] }
        ],
        summary: "Oxygen Dining Room 기준으로 확인한 치앙마이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["코스 요리", "평점 4.4", "치앙마이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "코스 요리", items: [{ name: "대표 메뉴", price: "฿1200~3500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://crosschiangmairiverside.com/dine", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15169081135404265659", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A5%EC%8B%9C%EC%A0%A0+%EB%8B%A4%EC%9D%B4%EB%8B%9D%EB%A3%B8+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "단테와다": {
        photos: ["/images/chiang-mai/info/restaurants/dantewada-chiang-mai.jpg"],
        placeId: "ChIJEf2-gm8R2jARBALXYKKmJUU",
        placePhotos: [
            { photoReference: "AWCwydjwDz5N-oRQhga7QON2UC0s9TleEEron0mwgZkMP4clC2W84W4xtaYB0_RmHzouP53vcGKUZXeqLj3EAYobYkTIl2DtOLXE4s-dg5l7afjLzBJ0do1J2Nb0-epbFE1zb4ryVRWrWj9Z8lbMLhywM8g4amW82NID4OD_huqcTzhm0kzF6WCC_GVLcFWEtDYXA1E2Rb8QOZi0d4CNtyOgTtZf1yhzctiaDyjwkEsCpXxN0Fr2qUK_XCQs6ots_P0GAtlv9M7oclF-W7BKKVBVNE2Pb5Ihh88VV1SPXS9N28xJ6IqfqpeNxy2dcy21VI_8raDtaoJXnbK4p6Is66Qz5U8cvH-yzTHVu-2yKhxM9NRVqb8cIE_lISlpg67pW0Zn_rqeeCYiwoUnsETTYGHysKMBVVH0WKCnC4GqQ_5FWf5IXA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111915074902124900183\">Jirapong Jairin</a>"] },
            { photoReference: "AWCwydi7UonzgLv6ghJYuk3Y5Ea_pv79cicwqgLHUfLSrOOEabya2dprjzNFxeLMM3KaG16KtkWhtXvcHfjaO9iQmNu-YzOAAsAxsGFymJAWGeTp9SsIIxUnVICajGvYOLGKPOu24nMe36Ha4J5cg-rc__vpEmmig99_cssjKAOPwv-Cepqih5fM-cq-9UX3fjsD1MJVVS23whdKzi5wGMzjNS15x8tsGHr20KHy0q2WypToVEyqRZpDjD9SC6fF5aSDOXfcOnPyr5f6-5rHiZMXfyRK-hWOADxbf5zJDvKC7LtQ5ETe3_QBN3MwoKRj2CJbUwWkswHJlpxzuyNaYUznE8i9W4JchqkohgLqmvhuKSKcQJsTsCXtlaKQU_kLoSePRdns4n11gV8cAePtyCY2ve2k0rb_IfXIGWoV7XxBQujUd5X3", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113324584229282909297\">Oachkatzelschwoaf</a>"] },
            { photoReference: "AWCwydhs6O6zA_qaRYoUGwDbU4aPK6rgPYu1qTEOejI8kIt_nF6wUl1J0WNPNfKgSH9T-sLY5SVmDIVbkDSWroshHnK5LgOLBFmMiClrtddho_cvZRDRKdp0EetbH3if3M75cm9AhbxTY-rE260KE3JV3ZE5zUfRnyo_h5PJxewpJn3He8E6jTfifuu56S3f0ctQB3lHiRhmEGhB3ENPHiSaJgQFoR8u0Z9WUIhkcFhnc0LtBg-zPf1S-1T7UiUtts3iOTMnErQvnVgEj7FzY9kodxYHh1BLK3ntCY8S5Y8hna8o7oSJlhRHT1jVkaNNi6EpJ9YRTIoEOzFclpH-6otnMfhg53FOwxZNc5cv90mMHGZvX0_GGUtSBUcGTX946Gnb7lzojBlEnJ2_ZfKST704n31wB7KBXsk8ZFuM38jvoUk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116764191898521185384\">Sasiwan Kps</a>"] },
            { photoReference: "AWCwydiUIGG2ySabWydXqUSJmuNCzGKizYKf2nJwReilDoi5Z6q2JJ13EPpbe63721RRuadSl9q0vsMBJpG7cvVT5dWJJfYnHi8ImG0c7rI8rwy80BkVRPkE8S-V4e9k83nRrXUvWSCsygT_y0FboEIT9ZvK6Ect3N62fjQjtm_J7UDrpOzB5u4-tiph6wl8HJxRqE493lKIbFguTS0edJZo7HZMqBlFe6yQD9ba82Lsl37nFrPhl99XmETkreqUdDtnziCMWOA53rkLoKxfvwgH54oayDfnhBfuLSidF6Wf1ptXtejtUNOtV8LS4fTPVcF_rRrOHza6_ZP0o1PAjslULARSl9TGQ5afZi75bq-BGsqQBWf02s1wp1VKQBKAoLAH5J3v_eu2MMYgXu00kpx0narIMOPoPxS2TajXtZKYAg49-2vWJW5ZodqAMiNMfA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113562799266101542328\">UNIC PROPERTY MANAGEMENT</a>"] },
            { photoReference: "AWCwydgW6_G-TrvTcD9F9QRU1ryDpIm6o_0P8AgV-AruxpcLkQ3plh796Cui2hnZEuX4qvtMs8BN7r4jEawfhDQ2_70woMBoq-RFSySlzfMBpK2mfEegiMSSvVgBe295hzwkyqFzwlmuoNk3GibXR3xnhU5E6iKYufTK7VmrsZNFn4ZodDoX3Ap_9Y1nIqjNmFHmZL5idBAnt9L9AHc2ETjLngY9uUK4WxwhY8WzZvmBVJNL379c_bsLegTLaRTdueWs6jRXSOrSprZpWFm-8iri6a-zONtP1im2SPU69GeOXjZaQjo_8O2IDdzkWRXgnVEttOd2_jxP6OrQpsCwGJWWPdCXt4U_PZKpDYSYbGSw2Ub3ANhz3J7WbDGvlDU0YfH90SU-1cSXB62LpTUoCWFpBA9h0a4RsvvtI1Ea8Q73xoeBXWI", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109000717176769432348\">Johannes Bertram</a>"] }
        ],
        summary: "매림 근교 동선에서 자주 묶이는 폭포 정원형 카페·테마 공간입니다.",
        updatedAt: "2026-07-22",
        highlights: ["폭포 정원 포토스팟", "가족·커플 근교 코스에 적합", "단테와다 카페 동선"],
        tips: ["시내에서 거리가 있어 차량 이동 코스와 묶는 편이 좋습니다.", "사진 촬영 목적이면 밝은 시간대 방문이 좋습니다."],
        reservation: { required: false, method: "단체 방문은 사전 확인 권장" },
        menu: { signature: "카페·디저트·간단 식사", items: [{ name: "대표 메뉴", price: "฿100~500", note: "메뉴와 가격은 현장 기준 변동 가능" }] },
        hours: "방문 전 운영시간 확인 권장",
        waitTime: "주말·피크타임 혼잡 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/104346961421347/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Dantewada%20Chiang%20Mai&query_place_id=ChIJEf2-gm8R2jARBALXYKKmJUU", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A8%ED%85%8C%EC%99%80%EB%8B%A4%20%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "서울식당": {
        photos: [],
        placeId: "ChIJM_ceplY72jARKKUlhphQu1Y",
        placePhotos: [
            { photoReference: "AWCwydgUlaj8GVgDoTUJieexwnxJzlQMvc-ADEXLn7lCrCvz_9o_tn8Q951Xa9k1GfVaEm8DZfcyJFIQv3tO_TAG3j7YK-9IzHQh8HoxaIO2r44-uE112tLVerHzqxfKN36brVuF6qWF6cL9CoMe8cuBmJW_vH6dW8sfpo7sS9xtpn8C7j8A69AJdIxarPcyg7UFm2W21AMwPcTVghRJELi0TGR_6FZkNrAqqPFw6-QZsJcY4JRbbY8blYjtctGqAnTnEnIBBi-yF-Tzjh62-Sj6l4UpDapH5KUfbXHpczh1_Kt1CXlNFoeVv2maqZr9nxpwm59ArYjh866bWfkahNByhDhxFpFvV37Bu6kbUs2PClAfJ_TQanKp3Jnolx-rMRv4R-hIa98GQ6IWvyBzQeIrFqgj77NdC04S0iJVW-eSfBO3RV-ovA8Vp2MvaqGGND7r", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117651753207030533213\">서울식당 Seoul Restaurant</a>"] },
            { photoReference: "AWCwydiPXmkiC36E3WpRZKuHdiDRXl-v5fC6Tje6v72qGIpK33fGB7vwMWaMEvOrmJapUL6vDJ13CiOwbrbtzIb9rNpPVSlYcDKvBhQYQUcv0EXrYDwqMMbgIIoYaVYzr0rkJzrxECkxQaMP9uN_NdJC6wZRxIOSXi6Gp1_gaoF3usXCA6lY2EX141sRY_RXnqBBIiSqdD1j8VxiZl5zhV93ZaQdnay-1ZTN7fz-nO2DTQRkDQ4qiOBbQcpilKj5tbh6tnj9-7iEu_zHhCMaV3zsUZrN7wIbvGcVzJWChQnvuLZEbnKToe-IyS82ZUUoRJj8M1_DgzBB-cgLmMOYX3cAGvJ5HZigEfLY2_T03HMKYv6fTt1AC2P25EtgnGfMI6WfPuB7hXR8HlmhGkkmWfXAFjLkGAX-d-RAPzUfN11FgpNJ4g", width: 1108, height: 1477, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117651753207030533213\">서울식당 Seoul Restaurant</a>"] },
            { photoReference: "AWCwydj9BqIBo0JBpM8DcC-GbaHLPs6FqqEPtsXBgVOZccqHdpZsHcSSr6tRRh1PHzS85CA1U07qDgTFTZpxofccUrAw42cVNujmhQ6iGUEAu0tMdi_ryDSwMPk1hd294WGAsizwp0IfmDy8wGepMfFQdgPvWP2B-S9BIumsU7Hw94YpfyCk1ONqxicXjgXZ784Yb9-t1pw0IEtAU127SwKHy2dyYd4SoUNhaHBt9sFFPiojnSXreXo3hs22jqUYfZVb9YLW7MZaxip3Sk55LBtLqZnQCc4t8OrRiC6UgbQhC7Cf8BNxt0wqSyYaIqm7Lt2HbrNZqJh5LnAsKM4xH35TwW8EQdfhbJ8GNYe04RnEESzqsFOHNHSIX5XQiUKYslu_MG8fu7ZimE6Y8S3AVdltucgiJM2ZRB8QxYQJxkWS0gp4MYquEzEyXX4uijr3Z72W", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104385569289247371846\">Samaporn Ponlasen</a>"] },
            { photoReference: "AWCwydh77iYdhGOi2-rxIt8bc5H2g2-buQlbgXddF3x4trN-bEjXbsR3vZeQPVQ87wwAorMLI_QPPO6sY3vQh_4y8gFe1ymmjXh2Me-VndWbVy8uaXgg4JtGf1jnukjapoTIXVxff-6Bzs7tMHy7YAQhevV71Po2ToFqJ85Fw9AV5qXYckKASekGtoAHKSpVUwdBPhGFRwD5G6_TNWDYoti-gtg6KhFFRMmfSKf_fyg36PYoR4zDHswsNftC8Dr1wUj1AduWDX9PvFrfGotSWoy1cxTgYBgKaHUNVqP7j5XyaYD9el00nF71UDHUPcoc_i0DUNhCT3_4KNhEXiUU8C2-st5NmBH41ZBJWBSZPe7D07EBpeYgaDjDAZZ4bqReP8XYsthNCWrjFpiouO55tHprp2iGRxxiAu6yvG1bZEXz0-HYpwxXi-4Fd1mzgXApQA", width: 2809, height: 2107, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115799537754593840000\">กนิษฐา ดีปินตา</a>"] },
            { photoReference: "AWCwydgMj97KTdo2_j7oMbggC1BI2cGP2qESBuf-6Evt2Q0VyYQcLr3lSRNTFYNSOWVtUg3RtmFu6YQUfDS3nwzeXBQrnXdIld8D_K-PcvegN_9g4UiE9r_p-UNi1PK0E5rIGN7vg0mNouFkAu9lwVvo-ZQavEGUbxz0um2Fs3R3lmZHhaSed_sUV8yQ-F-b8tTT0Sh_cPUKBTSDfzs__muZsFNIfzTqPsbaqhF75VxRdJg5nVD8DSarmofkjY14SHvTZ9PWaCKZoimTFWotRlmr7prt2AxA2K2hbgYsIujM1PwXGwZSlKznS2rwpe-6jTgdzIx0Bh4RhiXNis6Yp61hSyz7vP9OkG8b1MUNODeBZ6NUcmWvYjGrUrIdTqdi2m1imcWSYq4c1uhLdYvEL4zNJimTv0txedTdCVTtSlfWrDSL_jY5t1sNmYxdkN7Mn1AK", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113939944983841831857\">Liangwei Xie</a>"] }
        ],
        summary: "맛과 가격을 모두 잡은 검증된 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["합리적인 가격", "뛰어난 음식 맛"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://web.facebook.com/Seoul.Restaurant.Langmor/?notif_id=1620460500051493&notif_t=page_user_activity&ref=notif&_rdc=1&_rdr", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6249677523922560296", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%9C%EC%9A%B8%EC%8B%9D%EB%8B%B9+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "정식당": {
        photos: [],
        placeId: "ChIJV6e0uzY72jARpgxMCDU4fJo",
        placePhotos: [
            { photoReference: "AWCwydhJbTHIzr5blPy-C0wYl3j4PYM0nDZfUwYySMae85XsJARPkA67f4FDDdnXc_ZLHhkzUjywIxtoknXMoJEE_SQf_NOf78osBdjKLYkc4wEwksQPfCrxMXRUboSwnD8w7yDfG3mllkoHoqF_wsEMzT16ykgsX45ZV-QT6ZnO1cHsPe4PN6N5qz-mewa6836EEfOfHRZYonVpBLJVyhyc24UfHJJjWuuYZ92ckbXIt6djoyO5bumhZMBqWVZjw4NWTPzC8Luau14B-9gkh7xiTCJGlbbLlrhIN8ORzdxRO3s2hS3QY8rhxhhWettANftVgt-MEMr6Nx_5yAWmMg6_SHUtnk1c1ttjqo_bSYg115UewguKPooaOEO3WEB0B1CVA5Y_RvZHuQDR8W3xSwLIbsGwweQi28qjR7J4WHsj3mcuy7hJ", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111700809689314613602\">정식당 (จอง ร้านอาหารเกาหลี)</a>"] },
            { photoReference: "AWCwydj5j-DnMIu64jgbOW6kJg0JSJJHT_mii4GzyeyIUdLJQcG_DYuZ1-qbv2s3c3pOlZ35JfMJB8VnqZT0SGidZ1fboVg1vgdXu0w_s4Rec8iZ4ajFiLe5xXFl9JCVDqKOOdNEFp93LbqiEyDm1q6D1etjh8GvRC2ZvnJcq0C1yQI8djJGcHZxFdppzA-FQ7X7nLrOrVZ9FA61x6umkTDvccSMwNhOaWBeXWzLX08WaCcoUz05Wx4x5jFQh8DNDigBBkMfl-rimb_uJRlLusNKum8CxKPYqupDbH-nm_ApTghH9Da35mf66X7_yNk0-FrA8_3DpaJLie6QmiTKeGcUGHu3Tld2krttWlhqsVdarovaENfAT0qn25dwBr4oVdnYoL17XEFMzyK4iQs4Hq1BrlEfDhy5eZBHwNl2odWoSNtKlAmf", width: 2048, height: 1535, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111700809689314613602\">정식당 (จอง ร้านอาหารเกาหลี)</a>"] },
            { photoReference: "AWCwydh0SGE9rN7KgiovL1-otrgmceHIsRwpUxr-P1diLRSAtx30EfEFg6xpuI2A1Up5pFTjiySYJVlfMH_MszAGecBPafFUAzqiyHYbWg1soeO1gpztu2LmM7rrfOU-bevLlDOjmd0HygGJh8JjofBlaoHmb73ebWjqugZMMvupkMc-P62QTqdS-6darT7SCE7pc7kAfncQIxwaVXyU9T-bggjp0oPwjTUow2etzs903nS-_IBtc1CPSepWoHlq55nZsLv3_apDDbE7MpJDeQGfBKcHVTrc2kC1l-DBrCgwsX70VQNBEnqgvW2mrI_LmlYtw4lx4WWgN4XdMeu2GNrf68F8Foj5j45td4LpTWrJLEzxOBGRriugTzxg479gvUqc2v2TX0n2zOKWLgbsxvfj2YTmnTOZn0NkDt0-yyV5CbCxB6a3jQiSK--gBaTDu0d3", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116490023535665049139\">pornsuda saosing</a>"] },
            { photoReference: "AWCwydj2bTROTUj2MSb7GrRAg4OiLBpN04rYGmp6dSGdO4lfxCQfcc84mGo8f2ZipDiVuwVrU7rd59QK4wStfHHen13tmlwaa4zqEG_dW_EvD2IZWpeZ1w_BZcNIXYFQRos_cuTfjyuoC4hzE8qZa8jkT0x7QicMC7ajGA4W2fXMAPZGoz7mAh-0COY-tO0hg7GNoPrxm2z3YpZQQuHHcuzaxW0rdlkHLTvCeXRecw9n9zpmtGJgv3y0jhzAnj8WnF_OewgI-Cr5NSjAnFZXvpLeEF1xjzcEZLBEA39Dvo4D4A5hPC9Iig899nRaKuox80dtVZK3Uih7O1lc19KlakcxoFfGTKYxA1LghBxf6xkZ61yKoYML2y9JVdU2VHEL7EnncjnDhJb6VFTIYtkOHLBesh1-vxFBIHouj0hz-ZjJoXI", width: 1080, height: 810, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111700809689314613602\">정식당 (จอง ร้านอาหารเกาหลี)</a>"] },
            { photoReference: "AWCwydg2chsQA0W6O15WwxAqUjtQuQUuX0U605cviIjwPFTD1Rkb3II4t5eMTrnSpxLL1kKpClqYMYBT6jAwmV0ijPssoYMvLAazjLIONVfqdStNQbNleHSgjsJcE3_X4c9_dPiW3Y_CvgWLaBPfLRzHIgx8DdNroo_1rFf4ZnT4JgWJLl8EveOefDhBX_nH7_iGcnnPLCpAgwcBNDJHj5x0C6Gx_f9n-znytaLhf3RfP-ibM6f-gOJxsOv0nvxywdWKgMzYMHhdfx4uhg9rFvHLqoVFa0HtfrhsySzCk7OSkX1t0NHerJvBC-hGL5IaqyQo1qstce3bmxm9SEfV9nJfGwHZk6UzML-1uawcTLGkOd_l5PMceZLxvn6oSlW0Vvr1ZFI16beRCD0YqxV3ArTJdQGAAuOtba1F_zMC9rJiDVhqNgeQjXe0c28b_s8Opw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116260296605001611498\">Blooming dy</a>"] }
        ],
        summary: "합리적인 가격과 훌륭한 분위기를 갖춘 한국 음식점입니다.",
        updatedAt: "2026-08-13",
        highlights: ["정통 한국 음식 스타일", "편안하고 좋은 분위기", "합리적인 가격"],
        tips: ["세트 메뉴를 주문해 다양하게 즐겨보세요", "주차 공간이 마련되어 있어 편리합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 9:30; 화요일: 오전 11:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11131834179376647334", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%95%EC%8B%9D%EB%8B%B9+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "혼밥": {
        photos: [],
        placeId: "ChIJwdBT8wk72jARBxdHGO9_UFs",
        placePhotos: [
            { photoReference: "AWCwydi_Ef8Yxdx2nOb89_UG_83D619owtWQny6DmEljGv4rcQ5T8nBYmd2b0gstr02xT2D7aZ9bq8VkORcL-udQOnDelmXvUPZeLPX2eFWFxMe5hJqwUTVjzIRhzkV7jvl058pCWIpqenJMpLR1vJ_oMtbNtuEckhhxdHJOv6j7HSy9ds17f6N8DcxAv_ILIcMUEhV7SStvluceyTt1fIIKAqTZmORlX3Mh2YpTQPGJR6jh8l6PQq-oar_U1PwUuAxVcRHvA9yq6fM985jKASNF3LP9AZvLkYd2PhPphMVILW_Wk2IFSILmT55bq5WbZ5W19J--03XHQg5kjnYfZ98vvloY6VAHvv8S1TNzfguum77SMw5qSZvbr1-PFZlHfeByjkI1HkGjWZyuYbTtw-2yNHINRwsj2aFpm-M3ReGK0vg", width: 960, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118262258616765288092\">혼밥</a>"] },
            { photoReference: "AWCwydg_E41lXxgoM4WoWvJj-QwYIWACOO25zo3_UyqX34S_rjHmWbDufwGT9SHUGNs_xd_KoEm4lhvTPtCG_84SHZFLdSQNEutzpK1uXm75d6lcVMpUeTH0bslN_togb3d55SGVprycHwo8oKCmRjWP0eiGWyjuH1emSXCU89XU5eKXbpAwLMWF0W5K-Hcnk2qslOhkzihOco42SnVTMx5zkEGdhl4B__84UDavw9yTlbeTCjhCxcVS7jRTgEhC75XWu_5krLajXCrYVO9PvaLG6gCpvB2uA0SUFw1gYZ-MWlIgLGtxOu8NEdIjnswR-QX5fjJWW76hgPFlJRLurgDsFPvJ7VlUaYpI1jQkCR4LdrG3l7XDucbfbj0OC2iak2qP9tcjmA__1kEsITN1eRfXfoIoKCqwvkVhdZM3znhP9o5m5tKm", width: 1080, height: 810, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118262258616765288092\">혼밥</a>"] },
            { photoReference: "AWCwydhSO5LEAreay03699zQ1qon3DyDVLXPRne2X9ShD4crFMaqOsxCecgXK4dCXQEKlyuGUSawb_OiGRdyojdYd8csFbAxyJP5tsrV4z3usm21KeIxdzYKQgfJM8ZhONAeRmXMh9_O6MSwZQ7nfe_p5PiqOHbb0y76-dsxCK5Z95GM_edhSV3Qr6JWtg-PQhwb-0mbT6duGR6RUZBJhUAO3a6lZt06g-Bz5cvQzAxvYjx7sYd_vG1QsFZ6jnaFCB9Es9Ywx9Loc_xpR9wEhScQEH9lmfvwNNYdwLBKuuc7h87g4Z3wcTIswtSGt04cAUU0GOdkV_Th5adEZqQUE9Z7oGmtSP6RzckoQrdN6kDUmW-giJ_Yuun4bIAEkLJgXH2818Mgrty595THealpocoMNaIM4jXwDH_1BYgJpBxIvnXtoTp5GnqVH_ibPgC7AMdr", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101256804841666114819\">Tassawan Panyaraksa</a>"] },
            { photoReference: "AWCwydhTPgIxLOUS4wpkppIGXE_H9x_K17O_QQ6AkHGmXE6NpD3tw4_El-cVqRNrYGahfPf5oDsUCLgxZvInZUh2N4INdmN7f7uykWqq2gnB81NkmpFyEdZRnv8v6RfgGzwkvuKflRAO6qqlyg3fWGlLCNCfiuIbzP0j7SdpKAnzNB3PT3dD7nbcjRNGgmctTm23PsUWJOoBuyMAao-mKahscKVOhXc1W_HUV3QhzCKLRRUM-LHEWTPWTf1NB2cCZ0C3CbXyLZPrHvST599emOwfKtSGKR6BMC4oOJL0u__SJsMAj2Bk2OsMagxMv469N1Z7cyfhgnAHyLdRWbZmX_gnSg3B-S036eQD4yH5snOhJwmFOHnzG_F7yQbUn6dS_pSVZYnHObO44kTsqriUIRbgizuPTeN9uuEATNcCnb6s9RA", width: 960, height: 540, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118262258616765288092\">혼밥</a>"] },
            { photoReference: "AWCwydjUURSo_K64QglZ5RSkX0rb0KtYI-ZWKsmeJl4eLMLgp6aO-d5qDA32Tr3FV5e1PqzdH82cosm9NSJaOBtpfN-H_P8I9fzM2i0N0tP_Sh9mpwWnVWvazycR2VX75VDGFZhxOufYG59pHyoJRMOnxHWqzXIuWuCMEjlMeQsgzyKl5-uLjJ0hi6BwxB550j58pCkTrAiTKTuKD8_zbuZT-RKYR2lpvw2kcutap6vGi810buj_utoDkKvh7MNm7KffhO2x1rmxe8GU5rZbJFTBrm31-WL948TAP1jTtU4C4GNEwfdInAA34pWr3N3Dw6qzy9WiWeIci-qf5Ys52sys2sQuY6Fe1v1jhBxebnsiBaA1lidan4pv8Ef28SHWExpy5sJD7WyFbdP-FF3KjnpK2qHHRcwID0T1H0W33b6u_wfebP7Lpwp_6D5yBoXCaonO", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101253231853737208141\">Nanta Non</a>"] }
        ],
        summary: "정통 한국의 맛을 경험할 수 있는 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["정통 한국의 맛", "다양한 메뉴 구성"],
        tips: ["닭발 메뉴를 추천합니다", "떡볶이도 매우 맛있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/Honbab365chiang2020/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6579899720469518087", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%BC%EB%B0%A5+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "솥집": {
        photos: [],
        placeId: "ChIJE9Kf3vg72jARPHPlj-iK7kY",
        placePhotos: [
            { photoReference: "AWCwydgAQJRoEiMAI6MCmgc1hmBnH9aiek66cT0TzvBeyuCl2N_yMsYeKb-_Wh4g9OXLrmW4dmbLQJd9bsT7YVuOzlsUw4qwEpF7igOGtNN_kKLJ7qipYTBg7OGZHy12nBWS7M-ULQWkn4seQe0--ddnCMS2ACiWJkXFW9aQA8itXunViMp7XxP8OpSzEi-meA415hoWAhgfgT1sQplVJ8gv9I2mcBC63SqtgqseenBC8XFseKEbfD2J1CrwSFoTmTaI3_ihJGCbgidY-ql4hk8fXjN31K6iAXg9fkEOt2XpL8D6PZZiO8IfSb_5D1fG--fPoPQ-cMHsAXmN4xnJSKP3cENflfcWxm38Udysv0pDIpi8mIN6D4nEO8EUQyVrrVxTX4j0o8iXdc4LCEP73FCI765cOzEKnEdnDI1CO3ft9FtcNeyhnAs8r07BqkLFJefs", width: 2870, height: 3827, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106338896654503471230\">Sotjib (솥집) - Korean Pot Rice</a>"] },
            { photoReference: "AWCwydgLOsPadM4b8Qlf8pCSup0NB7Lil6kX0uzXoR69gzXpCJy4LpkgZ_2UpHgjyxRE0BUfqF_Le8EKkoZgCHz2m5IafbJ9YRNIx2d66ReG1M47XwLbZFuXLnvZ7kbOBs6yqDiMDg23EEh0a2WAkGMiL1j7DdtMgqLfzujTG8ryIWf28X3vYNL2uB7TiA8Yf9X_QV2qtAkVjmduO1ZimLpzVNPSorYOT6ml1SZ6wwZLHywYBNlNe2pHB0u9QCqB6GNZZKUj5H71RPJMgA9mwuWQRJ3ii8Uju69DusYtrAjZD96NSfZwlpSg_STlSUUydYxxmpG3UEAjC-948LExm74euKfaftbyW3V7z83Sh45fsUi5eHt6mE5ThLi8iqXREDzPr2elAwN_tXluw6Qr1rgEf3Xk1k8S9R6emdScg_pu__XbDqvqmDQMTeelNeuoyGJC", width: 3360, height: 1890, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106338896654503471230\">Sotjib (솥집) - Korean Pot Rice</a>"] },
            { photoReference: "AWCwydhAPrrqL_ZXcn1LCodvtQ9KMVYc4EX400_LzPJ5LLW4QaA0MEcjymrpKWgoPDmhpFvnNgZqHAaqfTedVDgufDeE0bM3WP5avt6WvHub6rUH1cV1JYUoIhERhun3PO9vTtc_sUYfN-wZx1uUaPpjYAWnEeHcRgc-prRk12HDDqngEkVuvGllObSCjm7D0XfjJMjFkK5Qype0gbDCUWnY_70FNcUO8l09-lDRm5PLD0q35NA634rCyNzSKt227S86wCGNpAnuk009d58V1eXmwSs3c_JsUKgjm2OK7OqEOYo-2l7D1jMNU1i3HgfsMZt5crRIwdzm5GZOFT3ezQh5x-RqZ3wiJAPUqnUu7Lw1dge9hF1W-V0gvXHCguafu1TTztKwovZ9C57XNEvbt4nFixCNOAkr7NVaJZRYO_3YeuDdS7139w_UnJhC1ThFsHDT", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103616572627902379254\">เกรียงไกร โชคนําภา</a>"] },
            { photoReference: "AWCwydjwELfh66wALMOYUPivPTt-2zGhSHG4nCmYZt8lvWjBwLW-jA73PBL0hQONAbDNU9VGXkVDRbeGX6MUJmE3wFRxaxw8m15K5vOEFYe6bA-L_eNL4Ti2jyVsYeXu5VYvpWMZxB-Z4vbuKhYMyzUhYsvFdckIswooz_SyWPpoljoYOHBHv6m3v8w1YyrNSVv--mwDxvOKaWtILdSF_p0W9npoKCfVm8kDL8KyuxlEpPHNgGNoPLUFmDER5Fv-MusmKrr5PKR7Ii6WFiQQxTnihS8x66djgS7SppRdBwlDshnTNzmg6n90A36UQEILtE6Py_Y1gWATPqG-EGNYruo6kXAJNcKxLvwEy-xGIDl9-LlpaDNkjeOcFwEKMSYEydAeu_DcInJ2oSI3ltePihKRacR8HwnNV6ofTV4sKSlqWx19RTI2yVjYtmxlPqkuuA", width: 2282, height: 1711, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117226345958743330740\">Palmy Suphawan</a>"] },
            { photoReference: "AWCwydiFst3PJtbnHkhQ_xWXvhXDOgnh1WeTiqUAt0ubauCU4ImX0bXkkBQgYq2vZ5r6IiyIxdVsy4LMK9lo01bzRav-UBHywjFivSx4tDL0Xrx1KqB2j9HosX3XQxmivGPSMGt0V3EONXUF2HGmmvDWWNLOOr07yGoUhllf7LqOgJQrE-VOTAhzC53w8Y_spq-Ld3nuhxUsoKqGlbafVA4BwXp4L3jsKEIEGUqUi-mfct58z4tQf6xO17JsTGLBxzEkwiyFzSMkQaZv-Vy1Jw0PEa1WJiemQi-sIYGVNkRYUeHb8H8J0YRHg6C4MdoRrlOaWXcR29EqoI2M6_12uj6qco1ijjtYrid3Rf5c8Djn8p9q2ZNNiUAjP3acg7bgD8ZL0QLIeuVIcw6UeTf7xZcPP_Rcb7GQn5bNDkjGTWrGYSAhLTiT3C73vsEUvbWGtAQG", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107383499007199851717\">Rangsima Biew</a>"] }
        ],
        summary: "높은 평점과 만족도를 자랑하는 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["훌륭한 음식 맛", "친절한 직원 서비스", "좋은 레스토랑 분위기"],
        tips: ["직원이 추천하는 방식대로 음식을 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~9:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/sotjib.cnx?igsh=MTVjNzQ2eWt1am85eg==", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5111175358563316540", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%A5%EC%A7%91+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "케이팝떡볶이": {
        photos: [],
        placeId: "ChIJSdqU5EI62jARWI6KOQGq3KE",
        placePhotos: [
            { photoReference: "AWCwydhktioKflPSku08i_yl5Z6hBkmNmcweqJnvfRsrYfXU6qJcl_3GafDvBmqd7GrJ9w4bLXQNYWJEwJBDOv4lP3e7PfNlNaEYB5bFdv8io2VlpRdX1OnYqMpDuAZHG9Bj_kwUNmuiE_Lli-ovsPQB69C2pvtL3LIY3NBXwYLGION2A38ni6dVh-HhROFXD6KyCyqBBHsTHRb46nPFYRS33TQ6tJ6qWoSSzKO2913GgqInFwWUYSyCMWyN0AUB4MVM80iV0BJBF5XQ_RH17TvohyT8GJaEr2MG1U33nVRZwRY9iO0VtnNc_J3572O0O7aHN5e7hkjygwcChRxgPLwHTOe1gKX9Cw1kUaiLoYEOvQ_I2Pi0Ool-khu1u4ThbXTTS1AV4iK_KKm-zULqKaddpDVfTN1xUq_dtQphKK35gur6nw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106945982046329831641\">Zhuge Liang</a>"] },
            { photoReference: "AWCwydhOzXgd7fCMcrkQZm9mFJkB0OTSg6oaXU5DmAnig7boTjunzO_yFXXZOgo1trYI-C1acwnSBN3clOUtNucDZe0ZCGZfLV2nADzPrhVUlm4Z8t6cUVH_MEPFrebSpVbsk54hCVP_6Yt0OLehzYe-FiLrz7GOZ1Iey6JdseM_m3aO_Y7Zy6IFcatEooX8krRR7lzXgvO5DVEDtwheomuX_nLnYdhKwKWjuliv1sWbSZcXnICArKY9L5O5Ta2ZhuaaCM-QY3QK_8tmlCEwVVtqmnZsAv-u4S4Ivc61E8Rt6b6auZEpN5eVVDH-d3jgTYjuB8xJY93mF5on3uhD7wAdRF-JAU8a3vEtrSph_CGMEU_u9vI3ydcGtCftL_W5_towFg3Udxdn62C7okgZSrgUE6LBPQbFB4_czQ_53W8_hIGTi5I_zt_QGoF9mQRA0g-z", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117159978306294878339\">Apsorn Suwan</a>"] },
            { photoReference: "AWCwydj0vXYOzveXPM0YokkJjWOaZdasO1k7Oj1EA-oscn-FFtpcm6SvNUsBDwYpSjqzdP5o-nBpVU2NGh2U51Kv_nPCurgpXPrPKfWs0TXvJ-7aRcVwxioXHkLL7As17kklSyUEUyk4Xw5Ng0eTzO6CnZ-yRRTwhOWVSov8YytWz6NI0_qDbZxx7V-MiHjuv5lOwIzmZb-6kWEsODjH-ztkXBcNcFGUts0QxyCgMK-gbLLaYNpNydwlE0tTois4huJcIr7WvkcBWTrxGg041j5Ci8Xwb9C50IyhB-B4SHUeJ-oTK9NuT4k5g_w_DzGn2LkdCwGzjri-Oe4Na6APUkyT43CR68yr8nrLx0b7NQToKiXrUHtzPf0916FmC9j1ncBbs1Olfeg6_sYMmWetAc01uvTCkp1GMx9KLy2qqDRQfLEeQcE", width: 1534, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111909099666393234451\">ร้าน เคป๊อป ต๊อกป๊อกกี้</a>"] },
            { photoReference: "AWCwydghgb_GfLn-W5oBQdI_50-qKcd0pycjIIQVq-fWISk3l3Iv24b1qFullMaIxjjgrWsZ4pfT9hzPoKMaVNkDehFZvZNAxX7z_eFzEWVOUPEVLtmDrW9k3OEq9xXRbcWt461_MwsDV3hNRPzB4Y3XxxvwU0XDwnYRT9BP7qNmsYKoLoOz6sficx-3ZiAEybO_sGRnvPsm_TF_DvMEICt4qHKHQ9aCFq39898Ei9wxPLX8XBU5PR8aD8QRMoDORXiT9UTG8yD7dLCHoEm4Xplkz-XJks-pg-FllpvmmpTyutkOTD-Scuw_r66hUsXW_vA4gjnXwM1F56hiFjVQKeB90F_nw7T5clJVSIlCgSgyUED2L3zu5G4kBNxuscy02j4yMmJKx1yD-hJw9yVqBBWyKNu_4Fvzri0QtldXd0uinxyaJU-5hh69Mt0VdV8Orw", width: 1774, height: 2364, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101579823347175740639\">GG GG</a>"] },
            { photoReference: "AWCwydi5GixAGBGoaiT6bWsKkn2GBX0p4E4Ar-YO-QyyLEtlGhyG5X6_rQQV8jfPXK8IXTeZhHg_ucRUJAbq0biZBWQgGAqXO1At_vxiKO9bw8jxVdFiKRHGMoPILCaUyHpFvq9evV7GurMkviHojtLlH_tVj05cqI6JdGNE-aUxNMZAsUrj8RV-AVPoeJTLpU1nch8nKDXn5kWeHCqWPAHzF3U9FdMAhlXspLOzzOOCEYbQJQ-1GQOniQwnB3IX3AOX0xwqSTcRvfxoIZa9MBhj_8wfUNJlUAVON2pweeG3g8oP13yHKOc1yXolkBaWeii49_bITN8jdP-QFtB1yZcaM7W2NQ8gDSC7Mz--pb6IChJ_OPLR7bW-PAGVJUth665eNMHysf5Y-5W9EDfs1yU5IORhjzBWMJEAyJrif8ACUJumiRMtYRYX673IVzZnn1Ef", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102082627294011896386\">bunyanut bunkoed</a>"] }
        ],
        summary: "엄청난 맛을 자랑하는 인기 한국 식당입니다.",
        updatedAt: "2026-08-13",
        highlights: ["4.7점의 높은 평점", "1544개의 풍부한 리뷰"],
        tips: ["음식의 맛이 매우 뛰어납니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11663384057219812952", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BC%80%EC%9D%B4%ED%8C%9D%EB%96%A1%EB%B3%B6%EC%9D%B4+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오카다 이자카야": {
        photos: [],
        placeId: "ChIJ6R8D85U72jARLMdHsw3VgQ0",
        placePhotos: [
            { photoReference: "AWCwydh2uB0F1mLzrUcBdWxHNTpmZnze3DUTZnmMjs02ucb32wJ20Pp_91tvr2CuhpJOYBg1C0-0CFrODJGJrKq7k4CdpCMGBNzG_oguSCwynn_XWoDuPHNl9RRDC2H-Ft3-VXBI0re4rB1X0NWXGUXDUcaIHwcZFdFAIwEmtne2wN-MAwXE2SiosvzEKeWR2L6RZuHhhpn4hn70kh1U1bfPrP1bFc3S9oHemOK99detuY8LNho3-L9-K9VYg1b03roEC7Xeb1gdmFMK8kwmPEj2u1SGBDOgoc8DtM_OyU46JzvsBdN1vupLg0WUsTmAdi5lPFEW1Fs4TQd01IZfykxcVu6_BwS-cpjVF7mqdG3mrpjgZ3dKjGF1czm9oJtAe2UxOpOgoYvCSz0lEtpmCDXu8XTYg5UPVGOZiRabzVR23wlnkA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101520314771179097091\">Aj Pruet MFU</a>"] },
            { photoReference: "AWCwydjwSmHvxDxqzjAnEk8lZ7g1_OnhuJpm6sRAbGWyST9qYFo5H5yj0XAOSARMnOIBpJgwSRWtDQD_8nFXSl7kt0BK0dljzCrqxK5SpEMzsbUvnpPmZfVnelQvIQdkNz3W47XZzgENMRCrXDgajyKhDbDJJV8d7txH2rwRYo8eEzkPGffHOCYGciZ61-1TaZH8Z63EMHVj5lDCAwjDMvXwjkOe_iqkfPfM42dh7TJCAa-tQqEdtXw3ZtmNTcM1EA09mFwrQiQeG79waRgeZjm3QpaEXTyva2mbf3e2_ctP_0CcjEHTQLtuKzq1KRN1YCga4Pf93bHymT3jImQSTL12Haod61BtvIIsah9Fne9xo7b6LiSAt_DWNFL3S2WAUY5lF3dDIj2vGPSj5nTuHM7uh8Wf5FegX2YyQyxXH0GP6Xp2Jq_rjD3lMQ5NUo3dRA", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103200642761842379886\">Sakhon Tangteerapong</a>"] },
            { photoReference: "AWCwydiK60r__hQ8a8uhJFbs6cWaJhGlziRy-0Y7K4xczl0CvAxDiH2OIktkVWCmMV8_kYUaWAN6xU--zM4Qw8YNwA4ftpMhKTJUQlHWOQW7h8AHIfB3DupnacaZIBJyEikOpUID8rDq4e_IwAJCxk__4GXoFBksTVrIi6jgUBhST5iVMqOREBD5AwBHYykb0kNVcjZ-MRddiqPbxMhcRZ0T_u2e2PHqpc6Kpoen7ZaIzu97pDxVsVX6FkeZE8VypXokzVL1_cFqpashnpBImSW_FPmLYHbyI3eklD3OkXdPu3ldy_fxKh8wi3OrPwUsKFua_hJkAg1FCFagn1dhI5VfckWh_yNxqn-bGkFXxAfWBtSR762Qb0i9Zf8HNjhWnk1JCDSwiK_HFCdtkycw569o2rq4OTqpthLMjWzlYOjtlB5Qtd7k1WuF8ZTJer7Uun_M", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109506457519825234183\">Phornpawee T.</a>"] },
            { photoReference: "AWCwydh9gWO6h3-5xbtvmrUHQr2qmlatVyzCBVzie6PKiIFHJvyDnOJ8aeyY40uzQTdvJrVBCCD0Sv_mxM-8302lG0euxeyJKx1BlNa4kYzC8iuJU7GUzGPWAyTGu7HplLQwvdWU9iK_1jDUuuw-kqc-CKbBM5kOCRhiIq_j9niLA7J6txu9YibkAlnazky_h51r_mRdaCoZ97lRumsHzvfZCvDl8cyC4p0ngqroL6dvYBGzmZNN-aFX2h8ZfFWuX13TnVpiq8b4mWjlMRt8bL2HJmzW4I0d6m9hahTyE01I8AHkr2M9ezghLWijzPZBGjy83oMgidzypv-AdT8RXAS18OGnSCUKFedGCKQDnG5loRCpF15lMcDzf-MMQICo_ESZ_Z27wimCAd6wFX5tUb5FfJrNLkxJFMktyfYxI3WozjPRt1ULCpfwAyRqUOCMyg", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108784407968939201432\">Brendan Pan</a>"] },
            { photoReference: "AWCwydht2zJ-ad3jDXyLknYCCKkeMmNInVMp9vB78KRSqPvjRIgp4WDTSnJgj-7MG-sn47AaA3zY-aRHr1J7gjL_6M-XjYvsfcdjdVEOh6uA33ACklVtqNj4Qc8Tasx2PGUQdXyxAXTOAKaiPsmWCmMjDizFHxU6HAD8LT0FZlTTN5XMkiim926omS84JAIA_5TnFC24f-WlOfsLhrms2IqoO7c2QFA1bd8nijsfGTW09lEYVCaKxEqtM88VZLYa-KtxFoH1QzwT_zDpuRy-wvEO0HdW4eH6jz-OLqHA1emb0_UTVKAs_TRNvAjOvMeCHanfGNZ09ZKlDVdGYFL-ZH2PHUMxtKxTDBfGR5gBSVjDkV1XvmLXM_gzddppAxlU1CW3PYqPPNlIYE7FsCuLxhAjqzvET-wHEwI5jORRM1t1Ex0KTyFRP7a_GKj2aw_rxg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101294337561243703476\">Jurarat Phutharaksa</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 인기 일본식 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["맛있는 음식과 훌륭한 맥주", "빠른 음식 서빙과 친절한 서비스"],
        tips: ["가성비 좋은 품질의 음식을 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00 ~ 오전 12:00; 화요일: 오후 5:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://web.facebook.com/OkadaIzakaya/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=973293249307854636", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%B9%B4%EB%8B%A4+%EC%9D%B4%EC%9E%90%EC%B9%B4%EC%95%BC+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "우치 가스트로바": {
        photos: [],
        placeId: "ChIJ8Xz-yA072jARxnB_e8JdRNk",
        placePhotos: [
            { photoReference: "AWCwydjrEp5AXknIf1cUgj1qDTbJt-7YIs29Dd5aNpURu5NX-rfGcRD0NlzVSjfJ-R06Jd2T9JH8PcQQlQ8Py74_j-OS9qacrtpbq_2NQqCfVlZX6MyOYhg7GdoRFV86gFVznHOgmx9kCzj_OqaHoJXiT7x0rt7urNzbC9EL62OwZtMuGho4R4NSThQ-NE26KWoUO6UwY3rQMKv4BsV8RIUhUiL6XQZxZ3wiiDvpuuC6Q3I5DCSv9-Nk5r1Reykqy-QMSvWkRbXvBRT5qcqsMvIQG2b-0b6Al40yhyWd4j8ZGc_bO8_K4tRoEnV53sdYhqPL72zjcxLKbsNBSxNZSD3BGzXJLLaqrxuTUM5P3z2ll0a5IZI9Zgj56dEBg-SBKIowP6UQBnvHbq7joQB7KtOkd0cOwq1AWZgM_vqDR3ASN8pQSQ", width: 2048, height: 1366, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110406800620771510418\">Uchi Gastrobar Japanese Food &amp; Sushi</a>"] },
            { photoReference: "AWCwydiL2GmGGkR0eVJhF2xw7EUMXFiHjdOH5lBRKLzNA2txL2mmECPk_znk5D7Vmc4UP8DLJRGEOs5iXqVWkezVdmVo_Ig7ST75Pw_n-x6ccmw5gQ7lnCc2yo4eSRlChzrWXxbu6L8fGLEubdGZa03A0mPfPE86HWolQwiwgLUpEGGpoCOBv9hcvdtgh43ejuD7hOvjwnhHu3fYqORYpRzgW9k8OSdq95RAvp5byRLcLn5wyZDIzcb1qqEv4b6-RFz6so9FmPl48IOobA4xLT2o4Dl7pGpm2rfwhF7Y7-S0JuM8_BdK1igBA9BjhDVM_w3hCRM7U8W-sivaaV1drY5H-1c_52UYFfV360ngIEEv6N80j_iTYhz-IPCmHM91HDju6oBI-iLn1Sl8F9RXw5njbt2JTjCtYtpNergl5W41iIU", width: 1730, height: 1562, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110406800620771510418\">Uchi Gastrobar Japanese Food &amp; Sushi</a>"] },
            { photoReference: "AWCwydg8Bl5IpW4bxls-geqTiXX2R3r6Umb2DDpYA2zW-W70fJ3aMjURvk9_ZRfEz8DLzSAtVJfLbULuAV-GP6lut4tpqilWivBOQSHJKi_RZVVykvkCibz0AzVFpSMxPtdpm2z2V7uk1MXf4RCvDaGysJXP3SjAJULDwUoyA0HIOMqbxRbD6aJPt0cHcOrUHe8Ooj5pGLp3YmEvdaoRnxGEQZAYw2KPvWVFOnSZRSiQZFV_D-xuPpB5w2WsuEK4E9IKyEuU6b-91l3nMyPwf43Q0xDk_qy_J11KuF5FjFWwu7yB52-ciWmZwkD4ftsNdnm-BsHRbi3qgaTPwm0i_f3DX73-iiR4N0ASBisD_N7l2knGqXpCKL93mUSqKCC-gr06Z3DxifXzd152PH1YHCikK6SSlsSR1ZwBwSfqR9On4a2n5XOj4oFBB0dOG9zj9shc", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115742388558911433209\">Nid naiyee</a>"] },
            { photoReference: "AWCwydjcOwbnz0iVmB5Flwu0WakDufrKMXlqpbnqL-Bcx8ZXGtEDUXMgr3frEbFNTIVYgVQOmfKsZQvmQ-C7abpFg8yb7f-ppqSUKjnpMmOOUw1t4WrL2LzP8w37AmExZLHRHLWKgrjqn3TRvLYfkbQ6cevHH9tuAFGNmHI3aW1ZH30z4IDyaMtyW4inqiLm5EWgO0x4YCedIvHpcAURDqO3HDT6tMEGfefERAu9_ox8rusd3Y6J05n0z0p0XDKgEwyNlWOB7nWBaMB-H8f_Rbu-zqbOMU1SN-ZzDjo_QdPcOP_kN2Gm626qqwwszFZm2iQBWAeDXQvjgp2c-tg8s0R23w70nl4jfEBXl809gA8Xfxl0nFHeSsr3GckONSBNvu6xZ7O62GX0TYIG-9oJoEHiKY2uwnRII_2llmJk8S5BZ7qGcN3XtiwQH0v8MGDwXI-P", width: 2481, height: 3508, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110406800620771510418\">Uchi Gastrobar Japanese Food &amp; Sushi</a>"] },
            { photoReference: "AWCwydhnXhlL69Gcf4fVclV5GQrflIckMnAe70j_KCZI-6uqdLjQsN-Spj6zSPg37iggmoHIDxtU8xeO0qMD_oEJlCcojTGsYxsIp12wMj51RlUMT9J6QovQsnqt2TWq1fqXe_z6DEk7Kt_XJAYwPj-UEZTGjCS3E7h_kw-ewoPv_M99UyDmgsR9BTbKdGfOx52EKxvecTCzpQsZtGIDB7VrPvov8oX5KiwaHZpQPDJG0DOmRON5bhepOHwhtZK5NXNczEQDXTmN6Jqww_id1JzvemHNvlDmucR6mFVLFHu9d_tAxubOYYNwsTs-97ZBO2UqyRUEsqPUxHAgtUSI7-k3P5zbKxpsUshDXPzhwKGGRgydN2kxUOPclzVprF1nCs9ItBKE3SbmN-8-Nj0LoZ37TI_pS4e7EKp7IEKsFzST2liY0SxtmDIDPX2VDkO-yA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110181463637155747542\">Geoff Booth</a>"] }
        ],
        summary: "친절한 서비스와 높은 품질의 음식을 제공하는 곳입니다.",
        updatedAt: "2026-08-13",
        highlights: ["신선한 사시미", "맛있는 덮밥", "달콤한 가리비", "고급스러운 재료"],
        tips: ["덮밥의 간이 적절하여 식사하기 좋습니다.", "직원들이 매우 친절합니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://uchijapanese.com/chiangmai/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15655741294523674822", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EC%B9%98+%EA%B0%80%EC%8A%A4%ED%8A%B8%EB%A1%9C%EB%B0%94+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스시 우마이": {
        photos: [],
        placeId: "ChIJ3-m3AWM62jARegrIS5UXj-k",
        placePhotos: [
            { photoReference: "AWCwydiHe-FgyKSopVrpbcM6hu-3_ZQ4dmLRJfPjqpQvqltow_2lS-lgYjGR4yp6VgLSSxOCP7JP3aOrPTV1TNLnP8WSCxo1kTn2dzBB0hAAdgK29yYoDuPsNSDEfQ6ea1vIiSLEy8sFFkng-HUmIFw6hD35r_PVrhCDJGvvkrQkUiOFm3W0f06bX1Awm2Dq-tntMAjmT2CkV4ew00z5LCkvfWE71v1ysC_5Tzq8BonzzQ8ASeZs30Q9HUum4mZn2lVelo8ccJD9qH67W1xgAlWBkYFXOMYtJGfIK9q0JqJepsmepiHP6a5vJD0HuvPF9EGAL9oS91_KlBybDy-a1lQULVBrz5eRaP56FkoN2mynPsPhOoN3GcH0qsSpD_V1fk-vByoKToaQ4bDSMPkzj0igiVFpLgG44gXWa3_xZ99x-L37-Q", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109335069911637620062\">Antonio Socías Carrillo</a>"] },
            { photoReference: "AWCwydiyChP3AlR2uYpQAXF1i9c4Y9Jquy5KKZMM9IlAWZApffobIopHmAPRZBkxThBxD33fqYQ_vjpFfhgKvcV1pael1Jf3ulXvMnIowyc-alKxYB6H-v3uafvOcKlzrqBMub8AX3h1JZGrTfDs7-veqvGTDSbHK4itWQVb4f9ZOjIUZdYO79YwM4QxVXF9P412qXnRqiushbKIwYD5QiYRPcrY32ZCuBOrl6X0VxIOCEtOEtPCJPrDivHSbKnuw36FUcKN8zFfHMc7AfN_ZKvZIIlrydt2EmI5zDaaentrj1Lo5rqZKyeO53HpeeorrDzQK2acvrXfkK-rpO1NeGuvrCRjLhuMO4XjVKDrYTW9a9fTIH0sfsVuzX96Qx2MqKOAr_vOOzKSHXWaqaiiK8qUcc-lgfHsU_iXQCnUgjfHX6uBEkg5", width: 4032, height: 1960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109186335654292690828\">Kyle Lee</a>"] },
            { photoReference: "AWCwydh1Yj0Ge0ed9savIgmb5IES6_yrwSeDSJZnGAka0UUOY2H2rs0mwy83w5qKPpuRwdQilHBdYi9uCirTgjw7JHjzSXGopPBL5sM4eTx_2KPdrEcT7SgZ_MIn1JwXaCeGtsbyhqPmgkPN15NFto6ahVDXgFZmk0byYe_kmCaCEMlNOFLkUPza-J9Cgixd49BgovLlCnF-NWsDoj67ABGHHAsach5ybvLMhcN3p3t3GX8QA0jy3qFxTAZzRCgbdOwERi9oki7_nC2C10tFemQBH4kXWtO9eXY0dnX5KQ5csdaN608YU_6JL-Gt0YnuaGWLiMuRQjcMxc-PK0zTei5QxXlIc0IjwEftgCSwjl_vwn2ZJFF-bjPJ6jQiN4SPP9PoDbLQWVwTjy3wnkuN-_wCxGCyWZR0RTMlFx7X8q3WhEvnZ6444h22Ehkivai8kdWy", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104657370975964292998\">J.R.</a>"] },
            { photoReference: "AWCwydguDzhQwISTalWmbKU698steNdauNHXTkQ_skfP_2Q1nhntrXvcqk2JElUSMA31a9BFDdBjB__qBAB7_0CeQMT2L2-ANGY_O8gjwZNaN9_6H5UEyJso5Ba3SVE8a-CwVbtbXREWfQPQgUspfyCFYOi0-lmXCdwimQfonoOFxUHYqy5Y1FBZU6peQ6cUO9oZgTfw9z9SbYMXM-HDYErRGsCWv8diCXCHByNDvWlDvDCgLcqy0ZgGT1PMzFWLxqm5JDLxdoKUcpfCsFfxgfk3KDNGg_KSG4PqgrbyTi9Anj5kdQWVImn2rdIkRSaR7uGzd4-1lem9qkWofRNOGJRyd_sKfv1zsFQS_3Qh3LGj_QOVhla8bz1u2FQdpoT1ZGukSEVkvBfR1DOLYC8WMlMoq1ui7HEIPcrn3jq-MBqSTOpt_1q6ZYP9mkJMTioZD3cz", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111156008801588463670\">Jonathan De Leener</a>"] },
            { photoReference: "AWCwydg9y1sCrf6T4kBi6_WvGp9nnpSO-zqrbfeVrUqk6AmYYgPSEcw0Tlb-zS30C57H_21gKp5GHnAgSMVX0t8ttBMMxKzFev7_RL0UjRZ7b4NxfVpTP8akofzMpjGRJL8Jjy5I4CCOsZq-v0PxxVyMp9v4POKuNCDiL4C7LXXu5r9LLNjO-h-SgybIzBOKGL_CmKzDa50hhPldSYKuj0lyosnQUaVFaSekmGp6NdWSC3YHHwywX5WNXp3jcPJ2fLb7SvdmM5fBELd1FyH2UCM-4vuBuFnFSsSv9f8K0sCdvCxvQaSWvPojx-oqJ-BsYk4d42t6xZn-zoB9F9tLNkEMXs3ELitv2GKSITC58ssWVqYHEvi46B0Q-VoPGcx9hFmdtSWOQlEegmbggJRAlfLzdfrP4ml64CUYsbF6ZcCClk574z_hD2yGbaGzSF63tXbd", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103500718348318457713\">Jeney Wierman</a>"] }
        ],
        summary: "합리적인 가격에 신선한 초밥을 즐길 수 있는 치앙마이 일식 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["눈앞에서 바로 만들어주는 신선한 초밥", "합리적인 가격과 훌륭한 품질"],
        tips: ["신선한 맛을 위해 바로 조리된 초밥을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "초밥", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~9:30; 화요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16829696262495799930", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%8B%9C+%EC%9A%B0%EB%A7%88%EC%9D%B4+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "쥬베이": {
        photos: [],
        placeId: "ChIJP9W4osI72jARXRIZjFO6L9Y",
        placePhotos: [
            { photoReference: "AWCwydhvlfEqyGzLBZ-IplKN7x554FU1Gwy93N9AJmh-chZpFyE9rGx__1gudOcVpcWebot5-ngVHyv3tVLkSLr4le0kZ1S0Q_K_yMSHZJVwO3LqoNDIJ1rfHA5tBSQVEpFyzDHeaQUg0CtiLv2zucRcdHpnQk7Gsu1YPpkj_5nCM1MsCVBIvU8tUwAqEJe0Z0R4dSTYDdZj29h6AwGeuNn7I2NRP1aI9qTAUqPl1hMRAQdfuuaiNzJisxVzT1BJ_HCAnYrfPMa2_5fGpBEPnf0hf0rPvMIOBxrJOLU7e9C3eUJVrxpTxmo5GBZyDWi1hB0TX9RyQ0oXaGX3E3_9qBj9QQOuNRJygCkBhCpKp50u0-bmV5-9XHKPbTnf_sjGMBK89iotr2C70WNS38cyokV-Nfl7j-OSKeRIYwHTytrz_7CA_g", width: 1477, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106397522127695192482\">十べゑ จิวเบ ร้านอาหารญี่ปุ่น Jyubey Japanese Restaurant</a>"] },
            { photoReference: "AWCwydgp5lRhlbpUp01qoqIEdedEinIQeTyYj8mLx2GAhV3CR6COua4xWB6JoriRP03HlEUdX4z-FLj89BrCrAeKqyMgT8hm8XDdvfWIuhyBs5GfoIPzcgFNI7Z_KUuQuQ_2AGwzRg7dBD5EcVCuyqqP40hbEXYUKdJQbPokUHAhFwiaCtHHfzAAHfEifrGcWTEi5t_CSresOpffmaXZ-zfid72EmKhzCIKM5sM_6GopsN2wm5Uh85gVTZSd5ObIBUMc01JwnysUxiDLXy69-LTyX6VUdOSFm6Gci8Tz2-5CtiCjiXcsTSw6YAgb496WAFL3b1wDOTulRKUyp6qfctg4TT1UFKLk3KV36yvxusThkCNoxQE9JfdNxxoCzftfrR0l6xpSNi6_B1TKtpIYGAtGe6G4hPiDhFhq5VlvLbd52MQntjF5", width: 4480, height: 2520, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106397522127695192482\">十べゑ จิวเบ ร้านอาหารญี่ปุ่น Jyubey Japanese Restaurant</a>"] },
            { photoReference: "AWCwydiqEJzsus3fxLDl1Oro_pWpWS4k6Qq6Kh7wvYLmYmKCbBhAbcjIvhmvmO0yMMiEmpVaCZGANoOAvM85fxyiiDAG02kWGLPUNasZOqHnPv_XIT6HuQMsAszN_yjvEE4rDxQml2Hcxnel-cWGLA9-rZlZ65kjA-6yMwduEmqUfFnCddTZH6FDlHTJBzfxDETk8OEMCw6R5cTk03BsUCAa_D5Q8NSNe8WmXWolAMzrekOZ8N8e96yFK6iUoCN11C6UTndzhGo150fuyl5OV10VZQQiq-AWvKItFVTIfz5wHofmqOp44zvibBVV0O_jV73IkOtP8Y-pUsr7xzqNvxgBwjKLML9j6ng6efcJ9H1_5t4Hdv9Zx6NLmnKRMr7O7WkWt0SYfoaNhZbuI-ABjdKkaYt6jxlHsTixhcfJYFhAbvzncqGn5pWeTuEaVsTQJAIO", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104022358254780277004\">Varanya vry</a>"] },
            { photoReference: "AWCwydgBwdGeAAoUwUS0xM7Fv7IxGPks9bWItux9qu19qyVSEhEKf6xOrjoWkcNQoVyT7UpUgYJEI34_mS4hDG0wUqCOfQaOfaeD5wsZ005sSPjcaKWeMjidRAoQz3PSm5URp9sYWzag05hf9HUhGzp0nGR5ZZskNsHPp9Jz5nWeNKPYsVd53UWBlIx5ITb7IjazVEqMvIuZBFKrdStHaWxzPMzlQF3IoQWoLG5q3fDcWmDgK03gehaYV9BENd5KozI-NM7Ye9kc1u__WaGGnCAoVrz-duAeXWIz4GXN1zz4R5MfygnJk6QwLjCxn-3Xh2948hbDzRR5w3cmRk1mCtrv-_3Qu5eWxT3vYb2P3Imd3fILkpgi5GoD87W5QMmFg8bCT_G4xiGeWWWmb4JGy4rLQfrqYK3lsSXVpp9fRRxg6utN94vwG1feasmzDIG7kHz3", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114458868983006186838\">Khant Soe Naung</a>"] },
            { photoReference: "AWCwydh4wcVB-ynfPC9wG9AJXItGckYANMelj2zMBmd9WPtuZT0_X_hsjj020DWx_n-xLOifKonwJX7Py8GRi2iHO4ztcnsRG_NcvibeqapkhAwFCtjfFSsO0kUY8GqceZNgpGXYu502ciYJz9Uaql0gapSPtbUUpqvyV4dSxLpCQOtX8-6ICboh4kNOZ3iu5G-aFXo686jpOdPG1gPARgUTywNhuI4VpB2A4ZFhyvTC38pe4JvLpksDbqhV-D799XEsiDmMg9rMbxUt9KNzXAgL93ux9QLB6gKK-MfRa0i_K7REXTnz5WXQ1w2iQXcmqTGSObwFyqr8YmoWqnYGefBHgeTloNfZTKvnmX-OL4bZKhyYpSWgcH1vV1LJFeBiTnU2aw_IN3a9mVO95DbHGcWNXpGgTS-GeTa-MelJdThxQpeYzifvMCAM-Z6bFzc45A", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114458868983006186838\">Khant Soe Naung</a>"] }
        ],
        summary: "최고의 서비스를 제공하는 인기 일식 레스토랑",
        updatedAt: "2026-08-13",
        highlights: ["현지인과 여행객 모두에게 인정받는 맛", "친절하고 우수한 고객 서비스"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:30; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/jyubey/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15433759316017484381", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A5%AC%EB%B2%A0%EC%9D%B4+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "토미마키": {
        photos: [],
        placeId: "ChIJCR9HHG872jARdYJLAX62TJY",
        placePhotos: [
            { photoReference: "AWCwydjBKzoH5X_6BQchudxizf66Jl3HNFWD3trgBFtW65nxEVMBs1MiiUhaPThTz7QLq9ii2UB95EpThBsdiiBa36IdipdieeTZ32JuGFS987zObh2Et2QS2FX2Rl4hLtk395seXEidw0rhlDNdItSNw_8mc8in4srsa9TpsjIzotlHfLuVAwNM-rGfQMp91z1qwk9UTB24LRZI1ApJ5ATzX8MguIVGN8_EufFk8rqkYHl9ANF7J-KNHze7snjsGvaeFqmzWzYHLIQK5CJrTECTWSy5jWK3Q-XqawOM3ZW6BhOaxok5KZJ5o59EYK8QVzjVIPNj0xBImSXJCGGMFqJk3T2UfsXDuq1WpACydLzN7xFh1yg2J2u8M9CnNTWigMT81JRwDMNftHUni-GqXmIMdZkexanYEY1AB4YWwD7YbVw", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109040005674786640142\">Tomimaki</a>"] },
            { photoReference: "AWCwydi7Ap4IXjZpIQhRn5zxmMXAafCoxmCodBeYjwOd-DSOuCu7v64ul0fIUsjVYvvI0IyKlqSeVZQGDc_O9kOts4nqXirnFfixcnZrDYAxtw6PKNR1ihtylx89jE4cUkq6lXCppHHFOtkFkA5_QqEPsVgDyUcCRT_L6mJvI_vxdsNYZx4lJ6LG_Fyf9K9nG7kGH1BlQOsxgDkbi7ubVWWm-rkd01XP6rzPl-6XZR50OPTGMlRGplJBTyR0XBBZMO5E68_U8rvxGl3VoxZCHuq3WWBEQZ4-p7sGi2y-Ua8S0tH6UZeGeb8M2kDZMim0tq30ktPr7fWdPyzQzQ4eHuJ6_p1_t53rEN4335LRGzDmQmNsy6mWiNkxO0ICfZutcvdOwis0iQifurGls0CJZW1bL4O2uDEXtu1chAg0zL2ovldbSE4", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109040005674786640142\">Tomimaki</a>"] },
            { photoReference: "AWCwydgMbTzzBrpwrqBSiYE2O9IjZB8fnwq9mC0VMkky_oulHqyPy6rZBXowpiIhOKl8tewqejYBVhvEvhMaMM3XzjB2k9Tbag7BiQfU30odccYO8TlIDmnH0thyqYECOo-NCUfWGca9EwvvRZtiB_Ixk8bHCkST0h7lRvuVpytExpCANyYX5mmHGJerG8C4GhZlhNRKioLy53vDeFplaChqFODAH6dlnj_AgSx1Li-8yu_vJFuNROAxq9wwsuzbQXcYcjfAzFxWfTgIBQ1Qe9RQVwmCxK6NsdeaxPjFyiApE6xHkEE_pk0_cB1xLQr311dMXK7uztSMhL9t_lybhUGoqzvs4DbM6zFHX-Rbl3jsiPD5oNsUBIteu4JananxE1OqUVVczHC07kAxTkvTP2eBtzyXfrJ8UZxyHGPzk-k9eMg_Qoqop4V4hn0SChChUZSB", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111666101952313566891\">Sarawut Keng B</a>"] },
            { photoReference: "AWCwydh-koxZrEjjAG8fmXCQUaDrYOe-ZoiMm9Jk2CTb9err_CGs0JnUBm6uhmQmUfvlyIxim0CpYW1mpUrlk7jcfSsjxAGP0edZJHLwNzCGQBlzOcLkcr6mHJYsYPVyXl1_4EphOxfY_aBEN3GsWcaocdMq6YqNU7Rs4FFwj7bqAXmxi5h6psScl793pw8JuUEoQ8NrkaQ2XQZni-OTfXWNApIuaw74BkVeOwo_2uJjzL33wKVILLHrnQvbTVY5lZu7V-nJR7kZRIYssJ-4GuXA4EqAbpbzC3WpeZAaOk5kJ1YroDW2uPpogO__MYrW7ckkPvdiYL8GVYq7CR9m7g49ZCMSI5gZ_lyfi87Y_nUKbDs5Pmulbnq890TSse-bCCItUpfiL7RiVBZOwzYwPmvp3OiE_amhjbU46dht4lzcgXS-PlaQfwq6rEJGptNEbzjl", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117576902465423475852\">Hhhyu Gggybyy</a>"] },
            { photoReference: "AWCwydhC905cAtLlQAYkBXB5Di1VfDD5ZAZegeQ99SbiZibjNt3RQ01AqbnEvYg-DYbOww-VCvrvPJGMbcLTHgoRjoBt7cJvr0-Q6N6BE6KpXcOe8Y8v3VuWKkLDoLymrGS4mHH8XPdCTu48vXDdSa-ZuJ89nwLK238xPhXLLdoYhRinJBCjRXkDYhWwRrLsBKNcf0K-DqJwBY5-sIh3UDJSX4CfEXXJJ1PTNImsHAcGBVDpOJz7yHs15fAIjBBCS0gCy66y0oSn53ecETIQc4riMvT26xN7DLWOxQNzHFANPjh-VF_Anx-K85qPjp2W5U213TPS6IfCnVFYh9pLVkMrQhzyBSWVsdq4stlWhidsJYI1ex5EyUIbguhAWLjZyLl5wz6F5jZzfd0GFJ77eEnPBIWGZsPQ0kWPZZv2tiV6iZje-6T4qa-q4CuRYzB5f_AH", width: 3840, height: 2880, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102435743314825380512\">Bam Pohnkanok</a>"] }
        ],
        summary: "다양한 메뉴 구성과 합리적인 가격을 갖춘 치앙마이의 인기 일본 식당입니다.",
        updatedAt: "2026-08-13",
        highlights: ["스시, 라멘, 우동, 카츠돈 등 다양한 메뉴", "크기가 큰 새우 튀김 제공", "합리적인 가격대"],
        tips: ["카츠돈은 양파의 단맛과 간장의 조화가 좋습니다", "메뉴별로 크기 선택이 가능한 옵션이 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10830231856223060597", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%A0%EB%AF%B8%EB%A7%88%ED%82%A4+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 듀크스 핑 리버": {
        photos: [],
        placeId: "ChIJ97tOJak62jARJqFpYUqybZg",
        placePhotos: [
            { photoReference: "AWCwydgLI_GyKhqelpsfvQJnp1_0UfP3to805Ecm6OKd2PuL0SE1bo5eyowx5jb3YiDkupgNZSp_u2iBx4G4-8GZdyc_Z1bFDS8C5Xa7UsNL0sijKEWiKRjZAFnnbm4EEduKK7eBhKlYPs4-zlejiGF_D1MrOZK3oTEkZQmBrJYfSor1d6GiDOCl9ZCSlFhKfV5aeRMA3eHDqvRtEqR_MFrbWBf0aYtN3SgZCqc4XSYs3Xm3W-OH43pT19HXyD3rXzzTKMrVtEr0AOC_8e4-7w2ODE1GoNcojdfXo6FuXLLr7ePx_XEMk4IEMoWDuR66s36E1jYbkZwRL5Nvgs4m0BGzzNl7mUtsolLuvAr-4wTIMgBx07f4npjef8CZFoUcZBZbDYbyfVmNFh7h279xctzto1bJ-RlOnGo45f6QovQm6vOKKRZts4FPIhqCc8igv6vf", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110407862608956749956\">The Duke&#39;s Ping River</a>"] },
            { photoReference: "AWCwydg1fh-lctgsZAdZFddWvDt01TC_zDT-NL45iK-nHudtEnL6zFMQF_41FGFpVRG-OkQorBs20aDa2B0eJyii--A-d0TvQNFx1E7xBkTn9AU0bhOXM8rCDOezCHrfDuaN8GF5u_vjdMF_z9pv4woK4zTQLyB69lAuG26r-xo7l8GOBdvwoM7qiSWIYq7hHQIDE1MrqfbNoLIKauwyPHYdb61EUhFc9AGxLrWy7BSglz9QX_LmAnXsxG6eGfd6FjM1oZRUeU1FlYY2lIz2BJ-QVNCLs49E7lnsAUBcx3YlmPDEPsZip2rAP71i-PYIUL7VDieAnds4aXjCkYWMD1ME820DJ3edyfL5Z1S9rq9AOugL9l-8rmSItGEq6t5StdVZtxy4I_p3MpjN1KYnKc_UmRFcOx0LdGzPSgSSDxUHUPEWstJrfqQluJF03hZGC15d", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103846471613853494526\">BrooklynC</a>"] },
            { photoReference: "AWCwydh9p6EaScSS3fdj6LBquscnZlAetiV75Jc6Z082gGv4ziNs_cgpYkXAW_8_2IYQH3RVLt8iIuaYzHpBvHJUkqwZgmiqsDXIhy2g_VJq8vLZXBWWhZFa9Ikbgyb3zomeRJaXmxuTmEtSKLAse3iA4P_gOkVvky7bCPp5AJIQ-Ojek_n64YS8RB-M0HU85fIaxH53iNdbr7Z2Lt0RzfIiSLF_qdKeM3_xKHDr-VsYMhplho2YLQF1_dlOD4xok1uMqN5IomxQK1YKS9TPnzQsjwG7TxQU4j8sUXk_FRbJIcbLqBsdxBmIegfWN-t9hspBcnKpP22O4iuA2wY5TJmo4S1hv-AvxCATzlaRu5ba4S82hF9sVFsb-QkPSZolRhD5Gg_AkNXsuavVRNeTgtCQLBE4rNKbXnJDkCYDYY-R62N-JHw", width: 2000, height: 1333, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110407862608956749956\">The Duke&#39;s Ping River</a>"] },
            { photoReference: "AWCwydjt0BhSp-Io9Br3dZ3cPgDfmnplGWawAMptFU2TzQ1XUoWmTo0tIcC7J_aBeGpqG8oskpYaCgj1dB5Pi6nfxPs1C612ebk-SMEkBx5yb65l1splqCnLQCUEZCfGseSbl-EfD66t-YO2xxCafbQiQZQlAMqTmRPudVRzGOCSZhVxil74W1Ue-Y43G0c26VcZe4mQgh4TfYJ6XmgWtPNMPblAp6z7r2hRRgwkVkG85qBVtdya1rhaDAaUw0VqnfDZ4f2AQkpslgPYWi9yFWLf-HETJM7awHXLm3yvCgTgFgGhyAIwHd1TmwRqHQKWmQUCgKm3eqjyVcZ0GY47E2aKDh8fud-jK44Cef_ApHCXz2PjQCN_mf8Um33Li2amnglq5IdU0oTIaxM0Ms2pjl9rGuuuXbjpu2N4v05D_OA6TjpJq9X7sM-Chu33BqVawg", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111185423522404946086\">HIPSKULL Pomade</a>"] },
            { photoReference: "AWCwydiru2RDXSDgm3cYpzfkx7Gn-REt8gC175dDcX1_EZDGIBBDRTzEbBnHLyQplc4rtSB3dQgpwwKVP-x7N4G25u2wDnZHyFVOlE5RF90MQqRmS2tSgwtK1ssiyM4TUBskQacfnXK6inm3DT3nO5iFVEIL4Au3ZQZoPH4XaoTz0Gnzq16x7srtY4rlGhKl67cC1BWFDw7DwimhDZ8uO4HyJVyGftFrx03PM2gDf6iWmtOP2c5x9kKO2-ZF0vyLsxkYEMq_BwosB2oTYaLEbKeeGoScC1gpYdXW-w4N2-bqRL7p3y4Zrta1EV1KjCQcSbxYti1baAsCkcQ5jW_9gopvsW6aCOvy5pQgQGPHu3Rkfn41jyahh9y--sHur6-aYl2kiSJAq3eWE8nM45go-miS3EltmDMLlyekXEPN6tb6jozg2z9LH7ZK1DwRNYXYj5GV", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103846471613853494526\">BrooklynC</a>"] }
        ],
        summary: "훌륭한 맛과 넓은 메뉴 선택지를 갖춘 치앙마이 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["다양한 메뉴 구성", "친절하고 세심한 서비스", "푸짐한 음식 양"],
        tips: ["코코넛 카오소이를 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "코코넛 카오소이", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://wherestheduke.com/home/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10983631098758144294", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%93%80%ED%81%AC%EC%8A%A4+%ED%95%91+%EB%A6%AC%EB%B2%84+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 유러피언 치앙마이": {
        photos: [],
        placeId: "ChIJJezLOp872jARsENPg1YJZgs",
        placePhotos: [
            { photoReference: "AWCwydgUVZKJVi9h-odbMiEIuvWSn5IJx6ljSTBf9-YgBKVa0IPqjcTwAnfDvJFtUmL8B4aAMZ03qmfJCYQoEq_ghXJR1QkXdd5PfkPoEb0mpIeQ4_dQmeoqT5ebJrWjW560OifkoaxuV88BRALsrfWmnh4kUPI41LRdQoAiT4q-FO20zyT_piUJOGR3REVQ0KTO115SrxChW54O1Xg6HU3NJY6YzYbg_WQgIOJ480RJz1if5LV88RpiIl9kTzRrsLTV1ZlV_E6uodkx71xEC07kJHjPYrm5oNTTu6jFa3n2Zz4ZWaRoRY-vJlbRtfu4PkefxAm1eQ2iq6GbGRcoQRj87hqdqDizOHUMurdvXvGrFmfdrShBaTJeGvOobh20NkwlxDwTlKje1qjNWG7csUK-lwfnvMISzq631DRvZitASQ1IapMe", width: 1266, height: 953, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112958538960785240662\">The European Chiang Mai</a>"] },
            { photoReference: "AWCwydhm1FmtEqhmvoCncvaGMeUOGxNUkyuE7uutAXIYL7lvXbxp9hU-t8RS4CG0wOLC66N_I90OIAzTqqUGxCUxRCOyIJ7BLPdEaJeDvKtH6XB8jfey7qFdkzUa6JaJZdYi_2Kq9ms92zL9O44tOvcTc7lv76BoYKoaH8jhXdU119HX0kWEz7G9O2Id0T9yu1xava7IAlTDhDTjULVMcu4ILn54upN84Ry1SyywIBHc2Ws6kGXtczO0ZtoygvjFPm4DB4HrxwfY4yW6j5_6faOoHZvvgsO-qlWps_dw4soNEJUu2g71D1ugdC2f89GBviR6Z1XX9-FrMifffBdLSIfYNh6CIe0_WfIElpw-K6Kd2mvYlNI6ys-q2h6L93uPqh1hbSLd_f0eFjbVCIBBD4j4evJNF9lgtIoI0T7hfFEd5oDIm_zhIVivwO1fubTydw", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112958538960785240662\">The European Chiang Mai</a>"] },
            { photoReference: "AWCwydjfCNVipZnxk2oQ2aZzBWIVdwNH11ZcId6eUtGSr4cHDznYpZwev2txD_Us65Eg3pe1-rdxlH_S6QNF4vFV7OWQLe4pdSWQXv9aFbxplV1SoAxFoyG1KFUpoCKjihTHd2SY3-Y6FvBiFK-JdVnBlPKy5_NpHOEqA1gRa0Lw86ZV4O4qxSlymjyk2qXbrmj18MImnijmcKgGFtaAbfwGPJ3jIVQIBpTu_UeQFYGq4fE9DUQhjr5d3cyHCL2K5jEdnoPlKXoppP3FeDSLLrE1f9s1mZM-GqP_FBt2pMMequKAz-C0R-3JbCJQJ2CAcrhcmJLUTubBd7kEBQWgokfSqQyK4qIkv4GqevFKPxhnK7S0YmL5_5me7XPAyBgrNI-hRNFP69BSzTlK9UqKqvecvItCF8kH4jDOj6D0FvQvLfktez09DHLkhi_TivUlAr9d", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112958538960785240662\">The European Chiang Mai</a>"] },
            { photoReference: "AWCwydj7x_Zd-Cc99epRj9GBjfiXZrm0gKwQMQt2H1vI2VFIxDs5HYVsvGmn_EzgDqjJb_4NHW-ExhufOL7BJBA9uaQEjyDauyXd0_MnBLVTLmY9_-AMiP4DOSg_tMpcViFqsBhRVPYwPgSL2f8nxNOB1nDJ9XmuafqQbT70YFuBWK7BkyJ2SB6MNFoFsYq8NfN4ZV70iSznF5cpdsXrp3vcBlM8aFY6JZk5KhhB83_JDXyBGg2wpAZNvGnbNEtbsOGoX_h81LwfY-j7tjdwGecnc7Bv6PKn4y8ijdnkW3R3qu1Pr5RICrWNePCnhN0aGyokRwRlylWpHfsM0f-19nKZP8CuUhfGMCp_apw8PL3I-WejXno6a0z9iZZLbwE5vf0q64pHMXIiCi2jspIRZJiO0OPaJZlvY1HzoulqypoCb0nyuMyAiHjcFiFtsZgKM7n7", width: 1600, height: 1067, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114169835523518611984\">Leo Schuur</a>"] },
            { photoReference: "AWCwydgz3sSuupecIk-8KNcwWDaFDYw4U17p_7s0uFIQQmnTaJFaw2atxQJ13S5LhQO7hOQGreLN8FHlajwQaRoc21eN4vgp4UVGTOtAIdMrXR8SUqs6MqmIWbwHHm_Pzv7Mtu0s5zuPbL_U-Sv4tbul4N3sToBWmbCsm4laxjZd0EqBkeJy9jBjJGbN6xhnnCTxAa7Jr_ESuFk6GrqC94wggC2RiZwprjgORjthE2zxcUG5pVv4fhClrhyajmLgCpRVkgvO62NIJiN71Ugmpl2nKKpllNfVQQcWxq2dzsyV4diJPptHCRgqW1kkcBHMnkFnCvf9r-xrxRCkjRnkpSvRJXObDn_5BJUTXH8K00396NBAkcAufdcHUts7Q9vdNxrNpnIG1piQt4FwRWPyjRi1slfkauqsBibmQX9HKNws_v-35gw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111808164707537115249\">0462 ประทีป มงคลสิริรักษ์</a>"] }
        ],
        summary: "친절한 서비스와 훌륭한 맛을 자랑하는 유럽식 레스토랑입니다.",
        updatedAt: "2026-08-13",
        highlights: ["아이들을 위한 메뉴와 태국 음식의 조화", "친절한 직원과 매력적인 셰프"],
        tips: ["가족 단위 방문객에게 추천", "순환도로 외곽에 위치해 접근성이 좋음"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "유럽식 및 태국식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오전 8:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.theeuropeanchiangmai.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=821354249216541616", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%9C%A0%EB%9F%AC%ED%94%BC%EC%96%B8+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "다오 차이니즈 레스토랑": {
        photos: [],
        placeId: "ChIJaceCFwA72jAR-BydKjCMDqI",
        placePhotos: [
            { photoReference: "AWCwydiDRRwfOTrRkKMfIm504B0V7n6Hsz-4nVETyoqCssqvwsG46JMEwFNxmn4nCY7LYhJC-XojCUxBjl0yuqnY6F9yRyg2YCxqTT5efZpOV-s7n_CJaB3ByeiHFknJFFQLHhPdsmjgEBmexgf-9974xkcURKan9SlIhScp3sdsjqFtA4-xxY_W_-ZMqwV4-5x60TIf0b75O-JMlfYNyTAZBFJuBTKFjfEcjfI_g6vD0zjjfL-ILWJKfaM8ZZMFRXsTo2Wnb6ZGobZSkTz_Uiz5ipyGSitk7PiVPwetFgt4UhwhqIjGFYGtV4HGjzbHGT4k36HpmzvFh2WgNnfHBVVe9o6W6CIBLDo9P2hEM6IuUuoy6YWHwg7IaxljUlrCYmNvQn5gyP2wJVvbJj99_RErTS6rwjNC3Qd8R5cqmTkf2NCf1xcv", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105897145775486315704\">Zhong Maggie-</a>"] },
            { photoReference: "AWCwydhE00jPdT7JBqXo7wWrAWt3uRYf_9-Qsxjg95vUN0XoGa3dFaP1HbPydXOjSxMIiVr60sj_RzRMDdFEBZmHAbrjGHBnpaaGCPZj3f7IqOgL49j8x_lbW9aCDthcQ8EtWabI1e8VIsqAVjbZGcxYe3wyHrT8-F3vfYkcxRK3UF10WbM5-mBdctk23vWDSg-yBkwm4zwKuEYg9ejiEXbKy_rpJOiP1veeAOUvaIC0KpofNw-C_uLJrxnMATILSnHMbyGGCzeTWJcNfwKFLMa4TOnD9qDUWFZ0FWuYzdr5stah8r7c6A9xMEfSa71AdsiO-Ahf3qi-n7kNJrcgmDichdPEgl2dM_XKZRUA6LpDSTPXFs2iUustWUYvQ7yT-ezOZCMQPQT-OW2_w7NlFx_-arNWxtoNJ_b1yUQHDjf6558AkG4dMAUI4IPzvkmpxriq", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115431593134909500619\">Frida Chow</a>"] },
            { photoReference: "AWCwydimnWhEcvIZh7KGHBunFYDkf6WVr8tYs95tU_sipli0WNFPTad-VXgR-GHBo3ysrj--_BshvpH3AtHtoI6RdqMSCflBiRxPeSNTzQkzYIurPMRNESdJk_RkkvX0pdfcuPFw6dwimRSXGwnGL0DigFB-WvSeiEqXZpZMjk0lGi_2MV8yzFnL4lS7FnZ3gELfumwJiJvwQ_lvV1mqDxTzy9Idju2VloPJGia8qLRx6jYt14g_rhAPNUFuaRB-6nXaefRu5kfgSXbwz_ORq6LRvYn4s83k5Lb0zpjLoigjdOMS11D9yqW2AiXOQ20amMeh3fDy8OBzDnq23LzfEfPfWnzNuIv88pXnSys6JR0Q5FtF9KQgtZs2wjMt7_KR8ocnlYZbe611hrIoIkcTe7sLD1JTxSGGB0eBYsbo-WY3TX9bUQ", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112208917404793143745\">Dao Chinese Restaurant</a>"] },
            { photoReference: "AWCwydgokoBurzQ_GJa_FjYQs0iGfF-bUCiXs1n1Lf1t2V2Vg_TMy9ISsv4M0A0dOo6khHrzJdyinThWxHXkrIxgEvl5sM8JJ8ehnbmzPjZLuSo_lm7QTpxGc0jP0N6gfz68jZkU6qxkgKV_rq_vdwrkgS7mBZ1ah-8JwIndu9Vee7fV4D_fqkAXQJ9qrGIaDLZjTj-egaRALrMkIswWQn8xw4JPzo4NcCvXUK-upaq3XJmuZLu909xyngCUZdjiALr-7Q1fYxHAM6i_5PlBLZbZaK2yxZoeCsAGNSKEiQPzYWZffKFJNUPKfu42DokfeOXFVNyIgsJdOKNunvRuCxW44k0_gxh_t0DOhmW-PKTghG2w8IdPOPH5sAWZS2ynYrwEhYbGqCZFdOcy0vGqyueRjvggHWaN9rgi4ODi_kErOXtr7jRSZRMo8Uu7lhJX6Xnp", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109953704464439918348\">Victor Meng</a>"] },
            { photoReference: "AWCwydjXUJFC-2OxJwxvTcmy_Rm9lM1fu5x8zVougn2fvy7De6ZwNt4YZ-dYk6i3lFKwnHjFzMW-9eJsBYc2zKiciwvBZ07yefTC8ZqcvNZlHnfuNEC5ZfPyiiw4oW5jufo7Np6J5gmVem44LncHozirMR7m-GqpiIDxbbvBWfHGVPKAyEEYX2PtMrGPJXJC26CfJblYjudfL0RXKDNKJW5-A9VgTHO136r-HujK5r50MeE1-Wa52ruRlr5sxiStQAwosUI", width: 4096, height: 3072, attributions: ["Photos are copyrighted by their owners"] }
        ],
        summary: "훌륭한 맛과 합리적인 가격을 갖춘 정통 퓨전 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["정통적인 맛", "저렴한 가격", "친절한 서비스"],
        tips: ["정통적인 맛을 경험하고 싶을 때 방문하세요", "가성비 좋은 식사를 원할 때 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "퓨전 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/p/DAO-Chinese-Restaurant-61577918444468/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11677425022319533304", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%98%A4+%EC%B0%A8%EC%9D%B4%EB%8B%88%EC%A6%88+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "양쯔강": {
        photos: [],
        placeId: "ChIJm0_d5Ik62jAREDTt94qYx5k",
        placePhotos: [
            { photoReference: "AWCwydi942IKC9IAwknBPy6K4YDX1CWsFeNyEhZZF8XCQHnBWQ5l4GJC_Ss3DibJw4p-0OaSMx4y7IZqJtUtVWzx4EE-Fz3cP7AVWlfEQBQhqBgmXoB4rdGf7XDjJvnjKWyHsv7EBtgWRJ0J14xI6js_oEQrYmZIfLe2fn5GwL0HjCBH7GP-GF9JsKaxA3wWXXD3Ajh4n0WXakYr1dQa1QHWWB04O2mCZl2PlzvGHWvo6P4B2iS5L8uv6ej4mG7V819YCYWoguAsHjDB9TbUnNnohKQPDXv38pXkWHNJPvDgKoUzUi9qJ_Cte7a5OP2_-MuSiiICrznzBKjhTxe5F8o2DldKVO8JvP4XNmxipPtbgWXl3ozbrZxJN7lcDhnIOUyXcqjX3Nv-Alb5HPnPSnPBYErAdlNXnRGkIgJjmPZGTO7YrgwmDw2yWIckKV-AgQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101305874727796959642\">Prayuth Wongsuwan PPP</a>"] },
            { photoReference: "AWCwydiFldAf-eI7uRr9M6P74v102NgdDzqqU9woQLIOmzyF6VAQen8DHb8NR9PmmI566m-3ANc2eAiML7mcIAHGF9rW8Wd6kOndb7al7fkOqSXHhiwgXGkNLpnWnu07hqTku1brvc0xXaAxjsMgJ0O38Ko7ngqL-gmjUDLAF0G4g_dbLGJ41gXxOz1k52kFX5467tUy6rR0OpqZYXookuzPqEuh5MlgpYe7ilFWFUc5Gu2WDXO-dwqOgE6M9brFiPucfpXm0aiID6Ur2zN_OGDMKyvlfuf2d-Jv8pyTIFWCfrB_gzKBXAWSjpTNFI8EUWt5Ak7q2_v7Fuuk8F6p4vSEdMEocat6T4e-SbJnoeDMMcQqig7Bgn_OC32ZD4giDjI0GcBDlTwtHcSNeko8LfOJtWo7K_BPiDdB_4Enn9td3gJbLRxo2oCIZJcONPR2JWjY", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107651768156673225570\">TiK GadGet (TiK GadGet)</a>"] },
            { photoReference: "AWCwydg6ze1u3NFO_v_-cXy18PDweJ9YGxIJ2kofmRZ9HOgtj_hXaVUz4QjX0_8L2zCxZudLsKpogRW7p-VR4gm4RwAViTyL5zHV6pFg7L9Nch6V1lGn0yBnIECgIxHN9BL5ashlaEXuaR5h_N9Ysy22keuKnkikc0--uJ6xLmdUafP4w_kFyMKWbRtxyvStA50zrZVVvKDQDDoDwOt02j74g5PPfLwbwulsTsDuDvk-nWTvnbsReRb9tnzEZYcv46x5AopDeyIjfH3qltjGNXNsuZjVqiiB3Q6ivFNRZL6Rji6vltmkG85md8Z0qGbOB71YcwcsYacI_O84j7P_rpvaeJw_sdx9y33G5MrFwgV3hwVQgJuzvl5MUngdz8vmxTrF535KL9L-OOZRtyMu3CUDxUllzhDW_GX_6hpaVR9sLe9TxbN-jxmddxGTWxlqIQK2", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104747969452417628407\">Ajj Tularak</a>"] },
            { photoReference: "AWCwydhBVm6SZaj5reNOVdRCQ0OYBAJ1TWru3-puCsOQP8fUAxXlDTL1F5zJVxytpvsK341k0PWlsfxglgQrCp9yYxfDkPYqErG2yIL2fk7OpBwUKCKIg9QmIN1vBppjD7mAfMlVmlthEeFrSVluLt7y7QuH1BbGxyBzRJZPFmz20ebQWs2feRTgGpAlgsCbE6iFU0vtFVuupmGGEFjU_HZQ8B0KBnH2nqBtXETPzqt6Ks8ut6RP5yMbKeLJg4KrfOuZkuGgCPnaqYtChe4kfqNu0AorkYdfOPk_r2ZgT4YnCb6HuDJ_ymZcDQKFOjN23ub1lv3zbU42KErUqEZeXi8ug9fwlcnx_J6QWPCyMPoPsMNChxGf7aSIv6hs5RHJNq0HkZEGQHRBoPTY-lVns7diwfOg0DAxU0bdA7r3Nw4zmCjEPcXnQxmuPmUhCDIa3I3M", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113461565064087239831\">YOSSAWAT SATCHACHAI</a>"] },
            { photoReference: "AWCwydifLE2_3hDj0ShF00_yUcY26FjEbiuYuLJ0nwnvZ_I9qgL4Ph5Y6rgClVqXS9JXCt_lRtQjbyEhi3Yo1WfccWgF9-5apBImHnQJSgQBpDAwnmukrGx70keEl2-YljlxWdRVC5tcDgsAIDJN5zG8xdq6BTJdET5KbEDsgweeO3yEMa0RG7FrOqYAjhjEFbJQtMqqKhnJi8j0FFp2eKlmv_h1aDh2PdJArkmUxTO8_oCGX_ZXx_jk_MEf2R-8T0cWV0g3xkZ_JOdVncF9ZmdTRLYRK86Wc0IZYjML8h0A0r895irW6vIx3f2Qn_GGMcoS8wg-dMAYvGsPyTK7QfqPAKUamxoVPkBYPLE37fKRyvSPbokGXEv9QiHWMT_3yanb-ZjjAb_Kh-v9fpFiv9fzaJNZWBWyFhk9ir0BEJ30mCVdigTM86wFUJg6eJ5hf8zF", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104578094376203356686\">PhET W.</a>"] }
        ],
        summary: "맛있는 딤섬과 구운 돼지고기를 맛볼 수 있는 딤섬 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["맛있는 딤섬", "훌륭한 구운 돼지고기"],
        tips: ["딤섬과 구운 돼지고기를 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "딤섬", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~9:30; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.wongnai.com/restaurants/8089aK-yangzi-jiang", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11080993130800821264", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%96%91%EC%AF%94%EA%B0%95+%EC%B9%98%EC%95%99%EB%A7%88%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
