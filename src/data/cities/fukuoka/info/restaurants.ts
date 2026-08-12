import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "이치란 본사총본점": {
        photos: ["/images/fukuoka/info/restaurants/ichiran-main-store-fukuoka.jpg"],
        placeId: "ChIJSc8jdZORQTURu6BMwxrKbGg",
        placePhotos: [
            { photoReference: "AWCwydiZoFPoxFuSyOFzE8sTSCBVwWEIgARnZ6yaTr1dw8WuNA_HIu2iCoy4QZhKRP7CupCNZg8NEkygQv91avE-ftA_zVJ6aUUnMYwVlYaT55TVur45RwcoEnPWFECVHxzvT5AvnF5gqu9IcEQRfM1vVJo8oOzwCByTRKM6zfn6HC0q5WJwZK7wAI_o-fptRs-FFEqUvlO0kcbJvSzAsAkRG6SaidHrZJHegCTPp4PTmsoq8e7CN4mRSb2ameA2dqTrc5aW_V-suMMVEt-2_4ZMncWKOx2PZk3SrAYdzVCsNI63V3p0iOvTSHcBaCIewuimo6jKqKYOXLt_PTdSTSf8g7Y4UE3Q0bXtxQWpzxYYfmjy3iR1JUZlKYwagc3hVGsRs-oDwfZs6F_mbdCvDeoCQzc08WrNG4fCFNGO8ZjjGqQeJlr36PGLOZUdE3le8g", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110073645762581158013\">Y.Maruyama</a>"] },
            { photoReference: "AWCwydi8xHph-Os3tO1FueF86YZLAtD_mhDLmvw3eSHkqe5SqG95XgPZ1YUOzdbTZHJ7kLu6llI42wPGrtEcT8EA1-dfZJuMbPRbyl2mHLnuHcqkrVko946MUssgNV7DXio-wOEu7IZjEfyOjzE-2e5b4Ietu8XrHJiA-lkx-TLpZpqHceGDMGZZ3BN5ExQijKEv08jKJA_6ijcXYJ1TNRrgsZqCDd5cqP0WRaa7tnPIf1QDfyPzpXtnXNvoDE2_1--0IgwauoQD5ICwITL_J8J8TF0us5A6UhYKbywRKpIOyU2R3ZcGlixUrIxU1MbeFA0ssVeM7eYlABc66HaRbGQNxzFWvPukZhBkaiRhRbELDwd7ImJI7xzknZIb1reCezOuHbFjZt5eA-Rsbmp9P91foWt86KxlX1K7TS6-zLIFDjS7NRtg", width: 500, height: 333, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102010121834434438087\">一蘭 本社総本店</a>"] },
            { photoReference: "AWCwydh3mIR-zaX0Ufh4Ai9TOwST3GOEa2yykfjl02B1cZ-p9VIHTEGn6EieFHR4xQr389g5Kz-aYWVhAhSe0ITcWaXH3wCOgTL6clN9rHVKU6qAMsbMz1Fpg9NYYFNFGm4NzdnC0S3kpW9ufU4QbnrRqBumI7pCJaun6vSzfE19WiOIvBR4dxmC9FFAYyvoryan2W_W1U4dyXhA8ZWBUdbkGkUd-wSaO3_BIQp8nlNW7nM1nfRGZAlOa2FlcofRy3na9UJwHFDzP0C4FbAdlvUM1wnypz1zuWk8QoIpuHvy1NnQW3corMiaJbYMX81g5_bz6EhLEP_-ZHrVg98osZNj0BI__ge9TH6WmqIQl1dyR1o8M9WIXi9RKT6v-oeSVJ8ood8x8YNG4i5PvBVin2qBoFKfri9LtfuX5DyoqjWLa01CZedFY4qbiuP5qubABudQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118043701081188519251\">박지은</a>"] },
            { photoReference: "AWCwydgguXZr_k4Uiz3IpId-6HEFvNkJbL3v3VUOf111mrEE6JJtNWz1DPpSwr-p09ohm1aqO4NcqWg3LYwmG3ZkxOz-t6kDVwp1crQmskZIFLQWoJQqawbgL3u1x-jGXKFJp4Tqxxfc9rGLRZTw3HDYbe0Iz-Zzj_mlkRL5j0cknx-znelErirSghk3AH3W232OwBFNV6GP2ybLMzGwMH02HcGfR5DMAMCkltFO0ZjbWiwqKyJ4HHNwH0Vk-Hlf4N0Qo2tIivUJa9BGryYmlys9f3sjFSeLKeHURELnFVwZ9qFRb7WxdPhoS9xghAF7JB3dXWQDL6ZvwML62hlrgRZqPCzLXHNC1Gw-AdgcN17VKFP12aLde1jxyZFXZ1yYR9a0lAlfGITG3_cFaCpmLI1cCYEm5QsGSJmlyl49eoqhWHnhO86O", width: 960, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102010121834434438087\">一蘭 本社総本店</a>"] },
            { photoReference: "AWCwydgvDHxUNEa0zpA9IjoGTiXo5KWW50VZ3WSrFUnC2ASwQsuMTm04T-ykJcFkBvkmlo8patETPJxKgYCvldrDw6CIq6v1TNVAQhoINBRGBFa7dwxS5MNAoOfWhLN04ioMjRa842YEXVVq1hXOTOfdbalcaeHc2uQ3EHChoqgx5Vo6Xq8uF_AfsUhB2-Byy1V-KOAvtBtYKDzrmG-cZevvacyui_HCmrQzJ8wwWmVARvdHhaTKPl43i85qASiC_XhV3reD6jzfO_RdgnpmuTl4-xmgFMp4VshPMYsiSYR8nej7njCZOwCelP1eu1imuD4t_P0yEGXGdqjILzr8tIFy349gUejvYRgIKkgNEdmi1kIOuVgNhfAyyreahDRUCfCLH2Pc-tOmy8nT863a7Zv9QKnMQukhaV7H1UYMLbyAYgijMPlZUnbmxH_oK7Dv4ieq", width: 1180, height: 1489, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102297779556534880637\">Ip Jason</a>"] }
        ],
        summary: "이치란 본사 총본점 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["돈코츠 라멘", "평점 4.2", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "돈코츠 라멘", items: [{ name: "대표 메뉴", price: "¥1,000~2,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ichiran.com/shop/kyushu/sohonten/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7524611293723795643", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%B9%98%EB%9E%80+%EB%B3%B8%EC%82%AC%EC%B4%9D%EB%B3%B8%EC%A0%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "신신 텐진": {
        photos: ["/images/fukuoka/info/restaurants/shin-shin-tenjin-fukuoka.jpg"],
        placeId: "ChIJaVDnv46RQTURWuJE01tjUGk",
        placePhotos: [
            { photoReference: "AWCwydi1FpvLyPaRS855eqEBpzHAv7yBE9wTg3wWVIa8nbp4dv05z-9MpKlxRdbCuj0-A50I-TmGmsPD3bR397LS5q8MMjSEEdWWLDZyIKAJxWpcRYEMfvBFZ6tIbvEyztMv0bXTc_OKrHPKwu8soA1aF4rX92feSwjyakpGn3ExDDxIMp8da_9FB4rc5aJlhyIlGuFk-CaQHFI07_vEJ_5JhvS6cVKy5O0uk4BqOlqD2_laKiVi8EO1Xc7-1fyYLkffFvwj2E5Uqag1eivCZsFFHuEMy0UZEOxsqkF9OWIezEyIHVnBo6ND81OcGBVBRTGGtZbwjEPdL-wtoNQ084qxGf5XbZDb-sEAwck2rrR9hIr3HAAhzcAvgANByQ-yUT18FlEX2HoLRGYX30oiD95Eio7U-7ZdQfoh8k9zIEwdKfbqv7My0xoln3RdnRMrPisa", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106115367668020630913\">John Chen</a>"] },
            { photoReference: "AWCwydgNBdNbaJufZi7iKaoRRPKYNeB7Mu-TjH14OdixG7jFhG-DIS7QVmDQsYdT2_2W0Pjr9CuzXA_GSC8yonA9gkt7lElhVybVG3Zwijqikfn33Aj8xLDeAovrJAMqr1loJWpYVpv50q1--pT1RXlROuZOhuWZXehMbwHmIsz1GCisW-sZbstiasrsKZcdKSKXb71K9XbQqoTA8Pmdxv3UFbPvqammA2S2mcTTpxGMFjreFzMmdU-1ndHZE9WlENet3w-bRpFu-9nUQhnn7xyLNwdb1UDdUIrFo5cvYlrxHKooRB-hh56g-iPcell5c8Jvwsee8xKd_-nUYzhl8xrDn6g84xat_caxKNIGEFdtJaCy54fjNZfmEQHAxCDOJ1fMP36vXWt_VNgee0Q7Gd0AbuLzK_2CfZ44z3SSp-PNrXna2Q", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104561624445533674232\">中村真弓</a>"] },
            { photoReference: "AWCwydgvoEnDHZwCV3CLVcYeAKNKQAHpw_vpjHKKs1uGNcOGaMYytTyRMoECl6pt5WjvsqpS7-FO4BUiZKR20afLjvc6J83xSuuees5orjChiVCdcPOqG2ibHsY6ZMb634bKqXYu9YKAEI6IsYCgNy_bEfdWKfTcQGXWPAsZbYZh-SDDQ-wE_h3W7N_CSzKnc5nCgVYqyGqgYQvUo6AX8RQKvYWMGtCzxz995Eq-QJeWte-IWCSSQR-tRmBAdyg0Mn-DVfv5WQkWlWF29ztAAUjWEljFW9QA5OmuTIoiMlNVLJcAHxBCfGYboKLrnICpLl9y7z_mtGyzYknKhe2TQjBKbXUifFSwh34H3qXezgLMx8-BIIu8CgZFprtMIqWrF8s20GilQtXNdYrhP4DVujRrIbVEbjxMfU7zD9sAA5yaEzc_c2RYvbDilMZwqtIMO3fL", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105517232736054531504\">瑪夫人Freya’s Home</a>"] },
            { photoReference: "AWCwydhog4YH3Lqmrcud_6UFOLDDO626JWM78_p_VTz-vwRbPwIaXTHsPl8g2DKVgn1wknqCUa3iAjtss8WE1Q6R26WJX8V8GM3B4KKiMlIXQdlG0Vm5ZQGlQI_C3wX7rEZtDr58pmO3AHbAv9bD-NxnQ5za7aRB9CmWCRrhvOGUDHNVnTanbGQqq6TYneU3ZR5NN3qQOv-vSqfKVnF28Wg3QiRi0gmRz0r5OQHSarH-56Ek6JJKBTTJhYmt20s1Ba0toSEFtxvN5sNWY34PWBD71dH9VEJXaPZNzPNJtZFhIqh43fH4jR4s2psArTmGKeNAypm6JpkmQ-k1tSvLovpajNhb2l7gCe77gaOdlaaYdC47X1lgOXsm_hNQ7qKnr1qNjbhY9P_fMoR5EWvrCVlW0qUXLhopiGzzmr8jTYqjmzRH37JtKFgaNe_6Xz85uiiZ", width: 768, height: 1087, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103458320462138044380\">Zacky Issy</a>"] },
            { photoReference: "AWCwydgEDJJOKzi3Z9NiosvQc20eKHxi38dee_Cdy1Iam3Ms4OHD3e46c-okmlJmaPzv3zV2aASpvkrO-EIpBJwaDs9FUdrAW7lezkP31pOVGqpw4iNIPbhUa-AJXYu2jfECD-vZ5hgaAa-XWBVLEDElS6ktlu2XRK9YuCh_SEggMeZW1_03q8MW39P2bMM8dpr5okLVW0uvVULAA8pUQmWc2fP-wWVe-WVYxAGnO9X1m1VjqA95zbjwJMRA9uhyKz86aOp1k8eFClosr7IgJhg0faR6RSrEcjsQcEYRN_YOJ1CVk_mhfiq1wiKqfCZNA3wmHO3ktNN5sN_30fc30B3Sct1k684we-ATguOGPgs4mtPwaj_4F-4nf_5O61SV9JGYBoBiaIMfA9ASVXuZGy3DDlm61j8BYGkYJGZv8a5p81jfw4cP3eg3OWsaavS3rpJ7", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105274892650673701981\">Traveller Jun</a>"] }
        ],
        summary: "신신라멘 텐진본점 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["하카타 돈코츠 라멘", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "하카타 돈코츠 라멘", items: [{ name: "대표 메뉴", price: "¥800~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 3:00; 화요일: 오전 11:00 ~ 오전 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.hakata-shinshin.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7588674618156966490", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%EC%8B%A0+%ED%85%90%EC%A7%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하카타 잇소우": {
        photos: ["/images/fukuoka/info/restaurants/hakata-issou-fukuoka.jpg"],
        placeId: "ChIJAQDdFLaRQTURIXKdwYPcIdA",
        placePhotos: [
            { photoReference: "AWCwydg3ZEt2JOBCSdc6pBK07P3etYRowjI76qjrCj5UoIAwiD9AMawMPjrmnWP6UrPumyV0Uf3GC5eSakfVghdIicj5TDvZpvwcv1PVoJWf3_Ay1HRmnIlDGCNJHUgGiVwJeC3gfLB14nh7PHPuQwS5uPSXW0-d-_ziV2OYDGmdCtNqTZUJ_JQewhpnXyEQb41EC3tu6XnDmC18u6yCZuiWdI_s3wvRSspNYz3WGZWSqTzDys6Fw9-kgP3cmZdPS3KbL2TM_lMQ6D_hX5Rk3LP4_0oh94BqIDyJZgYricW6G9hc73yMx1fMQB3177-9_KI7Ab9K_MIPZqkrXuaCkPYehX9ceybb-VuwXDV0sUvbIKYtJROIxSfH0GTsf4sgsBjpEguQ_LmG4C2sn5J6j5aNL-4Fu7YJ0V1LuLALEpcIaSsWak9d", width: 3200, height: 2128, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112562852419040202269\">博多一双 博多駅東本店</a>"] },
            { photoReference: "AWCwydiqP1zkTopuW0IW6jEZaL6EnAtMw5O0CA-PBY435Hje1RzHN8xrNg4dPwBmdRRczBueGLeUBXVlHi6nUptpqj8a-CMPjGrByOkLy2zmLT2ngEWh26mm3ha8J1lAjJ68taLKLTCwccRLB9EAWv6lPOXQOJlLz1KlZj1I275X9BPOcMyb4vRDSg8usRRpPeZ_v94JKzN6uRM9fthY9oOSjYaCxejbsu-wG2218D0k5GC7HwH_Didy3-5IDdMP3HREEu9RYi5n8rd4vQmseFQJCBLmoVWr2eWz1Or2G4sBiAID89sjAYsyLE03nCxchdJmoG6JBY-N6V2O0RsDr18XWVB62RyPAd_kO2QPWBy2hUqMtZtHMrdzyAXgn75X_VFQiigT4rnIppMWySV1YrPjEZEC3ZcJGW4pOYPo3jiGyPM", width: 1024, height: 768, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112562852419040202269\">博多一双 博多駅東本店</a>"] },
            { photoReference: "AWCwydjkAhqsvHHvUJSSYuIA-_-Suv9NXg5LCU0RFGMZ6gGmqGWreWTpfi8kR7QFYin31UGTAhtPNuEbOwOm83MCPpp5us2HNuCJumXLv8dgo8n20xvWlKGreeGiryhRY44aDtd5x1kXcitBpcSaqqjXj_FGO_3LWhJW7LEAUv552GeGDQopGhHWUQtf9wtiO30Vpw_Q6eVMieN9yqrAlyleZv6aiUGniB2kDOjw-g6IehISuRtCuLt7rj2wn6Oj2MbacgwE5WPxbTR6KPMzKGM1wrRQOLs2EfwXnvEzaPdsHLFGezeaJn8RO56NFUKoLu6qBXj_v3z7pDnGL5ACsRpE5awlADm85zJjUonZlCUy0at81KgIQj6BZiHH4iYNeN8ADxf6C_uD19RhVxzNLhi2ab_K9pBk02kdVwi0KuMQmRXU0BrmoL1jv5M3QYYumw", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110773031955142393561\">830</a>"] },
            { photoReference: "AWCwydgatnjkeNHTNKuqNOyL982e32AWm4SUW364gw7jKOeqJsZBMwNUyesJ8Fa_qK8uhu0ttCdvfmHbJsJRIhdI22DAx4iJCgQOorNAv_WbOPv8BOM3UvaaSQTFRIH0-z6dUmRPKr2i-zXYV_Rr6l0M1kdpSjakSM04M8KMptgcVt1SRBSw179Njad6ETHmJg1z1XrtGwrx9AJYA9C8eSvk8KkKG8DOIe-Nukc90IOM7hLmQps3OFyfNK-rSxRR_TaH8yVyX-8Uaef5gV2uaZtmmSPYguSD08QhgM2ISDi477Kf8ywsTlqKI7LbB1fkDEXk14Cm2YefVlfNkNSG-Jvhws5R-yuc7NuyZKRDwpvnJRhhZ_vGbf-BaSAf5g6s0IB2MviYSwuiM2vaVsCQJyeQucjCvziWJZTkUQXTQHOJjIHLu2yNn-up-fwWjI4iZQ", width: 1370, height: 1172, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110001226607292692093\">Kasidej Ratanasomboon</a>"] },
            { photoReference: "AWCwydgEwQTfhFWzA-LAxyUvKB8MDXblPosHGi-9Qa29zNPPF4b3SUSDugMJ645d61lr1NI0TFL8WdlNVzFFaVGfX_M9a_PoaLGIP0YSK4RV9zP6JwaBwzzUQntiLPtTRgiSI8x9n1kiIEjRXgRYpCRT78DLGNxDJBC32zp0P0Uyz8geKn89hUGhG_6EeIMVKpOM0gQQ7llsxUde2wVmXLsUNNrdy6p9iATRqpcnLSOo4w4Ovvk5lL5cS0RNuVOovQ8KVE_u_iL_Ch234JMK4nBTYHF88ndBR5rGC1liMhE6SnxS2w5RlVWqupBQAZttIIoWMFtNh0EBM1ovqFUI4LnsqqKDYQ_DNbqFvtI-TSgYJAHeCBU9yOqnKJFP16Pgw8_S8glSAh_eWjwulASNWY1LqcWh_25REcApe0nVPEqvPvr9Rt6r7RJZWtZzuHofuUbg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116859265219818510415\">Taka Ni</a>"] }
        ],
        summary: "하카타 잇소우 본점 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["진한 돈코츠 라멘", "평점 4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "진한 돈코츠 라멘", items: [{ name: "대표 메뉴", price: "¥800~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.hakata-issou.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14997510692567609889", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4%ED%83%80+%EC%9E%87%EC%86%8C%EC%9A%B0+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "간소 나가하마야": {
        photos: ["/images/fukuoka/info/restaurants/ganso-nagahamaya-fukuoka.jpg"],
        placeId: "ChIJffWFyyiSQTURzxSQ1YDL91I",
        placePhotos: [
            { photoReference: "AWCwydiW70fXnwAhvE1hnSLPnpS3faelKDqx8E7xbD6Pug4Vyb8hJeRBHQNsaWTiUIwC47GkSVDiKveokrzWf5TX9eIAOjr4t6BvALMotzaT1nVr6vhnHf7e8pB9YNpQ7zExCf3ljBnICsxh3dIvk16I-t5zW8ld1H4EwEiNPJeyHi_2X4hi_vjPDMc0h7eC28ikmB9WdramKde1rV1IZWuiGSMBNHxe2SBeKbae05C2AQ-JWFAjcqs-PxaYEy4E5k-7jnk4y-Uwq7mzmsydDF3NmHMQ7GPBwDjNN3osgfTZFrWHQgeao7WCTXjwkipP-TEzs9iMSUijkvUmHezM-a06-z4iDrqDeJgIcwnvJ7cTJ54yVzeBHUnahkm65cIxnWFubtnGWjOtt0RY6bO47kUf-9B3_wjEWxRvQ_zYd8QZ581WAZ8", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116913328572427497636\">元祖長浜屋台</a>"] },
            { photoReference: "AWCwydj7gKlL3g3HORz4tadxsg7f3S4KWHh_vDU2lOFEVIdXghnD2apDLiL2Pym70max9OD78BDubSLC52gYERRlJmkhwJuAQCx_XoJUUHtlh2EQBEpu8xinPRGGi2rOZGDWGDgogf92bObDND113gv29MLkeKnN_qoop5OBbSa_NUykuxpyaHlSpHi2s1-9Re5gq6nMdOsDgX_BxPPedb5iT9X0IvqSIqR_ot4mHO04T-ShzPyT4Utdt36ldWXP6H4xT5903qWeeuPm2V5Z4maievkHSnbBQG7K8pJo6_eZIgrDqz2xTcFWeKbfsfpNMe2QkGmaEvUZgZx3fJAyrnhCuB8kdg0v7V04zj7SSOLMv-IIshzNUs-EL_BsHdC3G-1PrAq-DoZQM0LiuAbPnTfdv6SYK6xRRmJrfPHco2vOVlBiP6R0tNzbNBl4UQyml3H9", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106106639666410829282\">さんあい</a>"] },
            { photoReference: "AWCwydgYqDzpAlV3E088xLNNspl7zXbMWzIR6jNQfsLwReH9JSnbCCMAkmCRBqNInq8qsFIfvAjhF1jsp4YOxwUhOBGlKUMILCFjMLMXIxcdLzaqdTyqzoX6SRbk3kK5OJWwbJKKBoDMDiB-yoSzbM26H90WW-axn5IPCQmINUEXeVgh2Zyhe1hl-Iv0npww7TH66uq3bXL2KTYHQBdLDUsq17ucR84yo6u_7YgiAKrBjHDtVikbBtL50jiXY2izhcV0iWf6niMnP8uwmv59-9bZQ71iiaUMJCoArHVNyS6CwtENfYH_edcNMlmBskhq0YpUHPTSyuu3NxBWIRgT6hMiEOztVcpqxQ-nP-RTNAMQfnxqXQ50W26KiM1Uz2A9OTwu0omIEYzryhaF0n7piNMOI1bx7btH8CU5GGFUsfF0Pq-uTpBapOlHMCITyXkUkcsE", width: 4800, height: 3682, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106306647201585118252\">てつ</a>"] },
            { photoReference: "AWCwydg0QtXHAUJnJaIMwmaENOftWKlUPaGao17tksPIOdi-kQ_G55nIIAAN_Np84QvwT3_hbCm7DCCRz08hfRj-F26RnMuo1cfb-2qgp4GkByV8XxMnDb2aownAU6atLtk2xWeKBeEgWrdYK4EGZGPiIKCvPrlqiMZe-kdYOK5SjaamRFkx3jR9c2E0RzeU5XrHYtk_fMSyEMyAH1_TwtHDNZEyH7OR8Nth3cTK0_vFP9_sdtYxv0auYfqpyiiAjTy0DZaqtQSR4iDXa7Syq08Gt5dFsbIQzD1YCtDQn54cD8EEoQtB7bthUU_sXFHYMsGsRcw6w6fexGYewPU8vUFd08rl-f8qI-rF479RWMdqtPNxyqmf10YGdPHDkx22pCW0TZ4bAjpT-Y0A_FzqDV3U1oyoMA4OSLpbE_ZKzyPSfsFf2NjxwOiiWPbkUeKZFg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108784965640370842199\">森脇誠治</a>"] },
            { photoReference: "AWCwydjLUXQrk1aAEKUb8XEEPRFCYpmNd6FgkEhHzrG36G3keF3f7gqiIkuBv5ixnT3eXhq0Qj0lotDjoyDUjs0LGsuH47co-De6axHA6Uy8KmUDQq8HtCe2dnr61ZfVnHqLif2exOY5uZkonvYbtGXpex2gdbGuHyT8d1nETIEDPZnIR6l6BwtMkx7nFO3dC-texrZU8OWRts2Q73JiF3ifuda1bq2GYtQMPmm-wukYjI54GwH2lu9R8zTfgUZsGyG9rV6c4qm63lJnCuF8hjc2by0DJt1ccEws4iyjTK1cSNb4QMSEZvqEpwz_I5lF1xE8SVdZzT1klJUkA5RiYncKYa8PhE-HOKVHypfcBWzCkpz7q7NNBugovnRfaaNj3PiEnk9UX4_KHeTTTClehwRnUylfefzLAvT2l4_Url0f6tw32PKbmY0oQfCLNmjIqH-M", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106106639666410829282\">さんあい</a>"] }
        ],
        summary: "Ganso Nagahamaya 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["나가하마 라멘", "평점 3.8", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "나가하마 라멘", items: [{ name: "대표 메뉴", price: "¥700~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.ganso-nagahamaya.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5978470784556864719", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%84%EC%86%8C+%EB%82%98%EA%B0%80%ED%95%98%EB%A7%88%EC%95%BC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "모츠나베 야마나카 아카사카": {
        photos: ["/images/fukuoka/info/restaurants/motsunabe-yamanaka-akasaka-fukuoka.jpg"],
        placeId: "ChIJ37wuWIeRQTURoaiLZQF_G6A",
        placePhotos: [
            { photoReference: "AWCwydhIPgx69QkqtQVxxrkv4O9X_zq5K4nPHbYOppZOh6HuOMJve3e-boXAqNY7WcE010dSgNHm0OMfzBdyVmXGFbRj0UrB16rERm97t0brhs4qJmwZVmBpsy1LvRWEwIMJDBJny6cAdE21aKgDYKSjYm9tFT6mCzYkAnEL_e6ZQK5TpXnj4de1mp-ytzMggZUojdOUfhJP-UTTpoBsHNil25fFCJ7_wM5q4QrtrsJ2iqrjP1-Ru3GJqQlnL50s7FI3hPQ4h6YUJ1aC6wMGIlji1nqxy_YdbuqsXpgjvOl40rsqPMtEqnKJTVJ5Ot9P6QcDgulmGXKwOMFaNjtKKIzTpBonvYM3nbJgBckcjKx3Hwwetw4hr_DDNbpyjlpOaj8zWOpj7KN18BfRhf9Vp83A_5EziaRVXUIN4FT22h-VTdRS1A", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112719473091866771536\">博多もつ鍋 やま中 赤坂店 福岡</a>"] },
            { photoReference: "AWCwydhNwOw9DS-Lv3jwP1Z1myChXDBNbdFfG3OkHGgf41Mh6Zsx64LTtaLLPszHD72yoP8NenSef9EibBTMiUFoDhxb6etq6Rjih4pgiNanZcPCUHEwnk324Q4Vtn9QrxD2I4-EUdzTNCJG6mDFpyHzvGuNWSuj1W0c1vgp2ifkVecgMaj1JISujXyjk6a4dZ6lMGwdt4ebFZW48NK2-ZuF-Ww15uZnVSLXblRdRnzkEmHKAybg8Qqfq94OPxH-MIqRok22X_D7ur0A4g44QetU3wIjgAIISAVk5J1q4D6de-UUXVseIO-F9wZTtAmEIz6BYs3uOYtP48jnCfwP7lGdj7hlhyvV6nlqvlRAWXuRl_dXBg7HYPvU2gwhUbqZq6EgyhLHbkT4Uxg3dR05Zl_4f6qTHKBWmH_w1pOMkTRrM4oYSiZ7Jjab3Hl02lmPWMit", width: 640, height: 427, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112719473091866771536\">博多もつ鍋 やま中 赤坂店 福岡</a>"] },
            { photoReference: "AWCwydiqIP-cIB8I5fQ1mX_ruCjZFzmr_M7mUCV297w70m_WV4ntG8ItJC7k9UkpSQrzU2dscOc7OZ9L7BbgCK0F4GW0Xlo13HJTkxLnzrMJqS9vOQH7ZIUnqvpJVIwxZjakbcjxEPKVvFqaq-pgWDBUCKK6yQramdQx_YAYqeOpg6Z__wKtQwEnAAqGBTyjgWh-4165Na2iDUGir41a3QKO5t5DVOS62ceOFG6VTfBx91Vb6U4pvU2ZggiJvj4Kj-XtNDTLFVClqiYWN8uZiMWv24JwhWaoOAEA7MR8zAxhQQnZAZRHa9We0ZHqwVV8NQJUWECrmJ5ap_wpcrau35wNvInLCGyRdirmVqH-HCkSiOh5fArztLVBOKTIELpx6rBVzwPSwP0YpK_a0xKJUAfDzp_6VHSgMgFsa5vi7qXH3jQXV1hQ4JieF6_ZtG03e-lb", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102530171778787491095\">Rei</a>"] },
            { photoReference: "AWCwydjicgIOGkxAo6ZsSGE-z07n8cV5xkqIOw1KYwRP8qNGhj8Ck_wbQNfjEJbNJ5yUXYCf-Rh5PM-pfFL7WgwhtF4s5gvyCdiDYBJgkFlEc0I53prpsT7_q5SmjpmSWRNG3mtCU4SXLNdjZPklM-KZXeEujz2oEV30a4xPHGKmdiSMWcwGeSvTBlFxSU1NjlB0av3eC59Fl3n3nb50vtBvK3neGezjLNHuP3iKiWsLI7azGH-l30Tl-FL4Btned6baQtKAJf-ZJ0CPYoCYzwG-h_eUUs4rv5FqWqFf3gB6_7W6ArZTpVxvrnuxHfMihi7rV8sLXNsi1sNHjbtesXEIE0ReqM7kVRgtSCyOCe5CmQ2LR5aw3DmXve63ZLfY3T7qPdRCBefHfAhKQUbdTQhMA5oS0xZeXLWnAMnpLdA5Cikf09JbUaC6FwqzDNWrPm3q", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105043409353524180527\">蔡瑤靜</a>"] },
            { photoReference: "AWCwydgJglA6DCaRD8W3Iii_RxqqIpsjrqntqpW4qqfD7S7ZHucxLk-9QqBUVOAovubVJ4Yejsf_RQVSuMtR1FzHbpKqKI9zuY9RIaMXYiKC-xICc6llQnIq0Z8dECyHZ14yiBxymgJ2uVaPZDGd2pAQJIYTsncIO8DB26YbMD3ogec-T1PKGqOTSNJZWFU3pmlwQU6kbDfplRgCGMyxn4BMOVuEUakkMEXMssqUkSjg7d3VLBWjNaM9T8z_rw3u1oAR_Eb2gvSnlQZUNVGTyYW9DE9ce2qD_WIsJPsR0Ia1oBvwTfhT8DAumrHR4ifbieYRK3Zzdk3yBNFnueKvq2b0TnttlqpRi_kk0iFqT31Va66pqJZbV-1VGWGaX3q_tl7dxgTqmJSBC087vDKt2SvWG_siEji-r-uv5w0UGaR9SEbQg-ww0s42XxMx2_e9drpy", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112378446426812530384\">Yudai K</a>"] }
        ],
        summary: "야마나카 아카사카점 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["곱창전골", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "곱창전골", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00~11:00; 화요일: 오후 4:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://motsunabe-yamanaka.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11536954514415003809", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%EC%B8%A0%EB%82%98%EB%B2%A0+%EC%95%BC%EB%A7%88%EB%82%98%EC%B9%B4+%EC%95%84%EC%B9%B4%EC%82%AC%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "모츠나베 라쿠텐치 텐진": {
        photos: ["/images/fukuoka/info/restaurants/motsunabe-rakutenchi-tenjin-fukuoka.jpg"],
        placeId: "ChIJ___8H46RQTURLusiwCoEPo0",
        placePhotos: [
            { photoReference: "AWCwydjnBLrleJSQQBgnFUGaly9F542kV_woqkw78fMKgJ9DOts9oZaAUixBRGkUWyZxMKLtHfDrrRPShk1POkFkz0S0ulviM_qM8sf_X5_ZucERHN1jFy7kCHPYNGLujG2aV8zTAFQFOE5ePfKbngfdf0K3NsLIeebQDCmG0-ua1NsPqhZTPfPT0PcPEh65uEGl_91k4xD7hPT2DBdilk2u27yUX5bZvDJ-gEjLAIDTUQo9bvetiY_-BwIX5LnSdUDR-UQZatAr40KX1qwLAG7FmVoHfFLITlk8StzQsAXwW7NG_IeNN2E3D8bmnQVAtuPFUb0cvZY716qqC6OQx19_Nl7aPpqm_viZ7CtXrSUSR4rAe9ils-3cSfDsdhCfsRWQhHwv5iCDkimWLxOxgNBgM4pnIx5UlV8nXhlKhgE_1bwZ4ZMg2tUDfqR6_xEas8i5", width: 1536, height: 1152, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104525725985382557658\">元祖 もつ鍋 楽天地 天神 本店</a>"] },
            { photoReference: "AWCwydgwLtMctE8LUWGCUvbSHXNJHvVFIUxz3_SXeOaQlwYBQU8FX7Ug1CietUxAM2ipxxana2-eKRD9mdn9cN2jVMBr7UiU6rCBgFefvjSkUseYcPcZLxZ-bTWR5A-8k0zlY83a_esqFvtmX0OMQiynb4VMo2WTWgGDeB3DHFmx5icttHYMhysNYch7I0bB-R14G-I89mk8QYnTvKHE31zpq-BFqIQEkxpDNlON4pv4WiVEbvhFSj8c5GBUZPNJYehZBiEjS0tE5eFXWj5PynzLD4BIHfhIyCAF2Qol5g7FwsOJRCAN-oManjsTzzgq1U56omhKp6fTUf7IrDylxieD_0MT-lYfZ_TfscrNJ44APQ8_0jMkaEuU0kgHzM-4gkkRda4rotWZcCvRYsZr4ZSrIQ9Jhy6xdrRiSO8ejOD7go5vP1sYsXFsZxmgd48tPGiy", width: 570, height: 380, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104525725985382557658\">元祖 もつ鍋 楽天地 天神 本店</a>"] },
            { photoReference: "AWCwydgv7gzz1zSAwZB7Nn2PP2tfm9s6USWk7NYA54wAC2gYHunS_nGdmDq_iWKV1sqZHMCUkQ95CH__TMTcsJAFHjXL9UzeQJSlHZCNAxLX76DbhmPlQ-jwbZrkjDYrbnW3YSB7p0n9SNYuTan9AHE6vWr9dnhz0tWsuwzPG4GxtQ3ifIkXcifESWUCur-wIp2aKIGHVIPcM4en3MhYU9As_kwdumsgcTc7k8KClISPQ8mC-ET6GaCmhAz6aHK2gop5_lUfZhBEVcQiuCcsOqJQM4CCbwtLd5C-enFMP3wpEPfKAL0Tfsxb8IC1sdux0urYmI3mpMh-cT1jC7ZE_aafWYWd9U0ry7uSe3YfYnzDhM1EgAFn_nF2zuJn3fS_XUZDl_z8PF4aeSPuX82VXH0NCYe_mgGv9q8UytmCXqQyi4wqC2S4dfyjUNL8qxmyMNOi", width: 700, height: 467, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104525725985382557658\">元祖 もつ鍋 楽天地 天神 本店</a>"] },
            { photoReference: "AWCwydhjrxhO8c3a5kFiEU8aTjnpnjBX_rBxFMVugasyJ58H2BKquIaIsFoEOmy0RSXNf9JUjPoLglFCHbUvsPAk8CREvyOttH5Rx0vs9DQorXqkO8pdbbHA_Z0povVudshRxl7AexBQWM0jRiYhOICiyJgMnxMz9DwbJoEy4phhI6wgeH_UrjdrnIcOWvfsrKwZoGuAIeSbj1yNsTn-2nudzCD4eyz6X6uoq9qa7pmfqFoxJ2Ymo46hB1E0s0xziAPAytISopG7IGzHNniWyQmSzDWOYpm9iDz8i1u7hyJceAIdTOne9rz_8V1GiTwjC7GXb1aB1l68_J83JLFSIxPo9x8MzOdMhsbuZCBOtVZJYAd3iY1jnEaTh8Pe7iS9seJnJqTtgIhvMOkNQvpjdjc07htTvCR-Cd7xziqwb9fU1n5LpS6btLsCfVy3edjzn5dZ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102680503370401274372\">た</a>"] },
            { photoReference: "AWCwydjv2OyqgNBznY5hvC8qiL2u0xl3bJqdyyyNTN-1ezR5onx3JFLQKMFWlnqWVltFVczqoKGOZq1n1FqUbHyt6WG_DtAgDP-_Yb8pVVyjfJngkG-HZDW70CzntL67lx_hOdqYc2D2muj_nZCE9ERvJbRLl-fZU3QF8X4i7Wdt-mmRmg6S264csG7UM46T0rK99Bp07fNxNbFrvARbTBMUvjuhdRjwS8itY5u0Sybypt6wxXSEe-rw-uovRLz-JCIeO07EjwLvjqhi8UWffIJW95y11BvWRGhBmnh0mh_73TlWkzJ5VuRy0PXf-CvHZKn8VfFo65ktHlTFEXHbLB5Bw5hrYae1uYUxo6cuUNHTR1DgA8yUF9Egp_msGjFfSi-6NkC4D21iafHRikwZ18-sO6aUSAbAJHIp-4Le3YqIi-Bh1B2fqjPlGQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104525725985382557658\">元祖 もつ鍋 楽天地 天神 本店</a>"] }
        ],
        summary: "간소 모츠나베 라쿠텐치 텐진 다이묘점 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["곱창전골", "평점 4.9", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "곱창전골", items: [{ name: "대표 메뉴", price: "¥3,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00 ~ 오전 12:00; 화요일: 오후 5:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://rakutenti.com/shop/tenjindaimyou-2/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18118223323934607011", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%EC%B8%A0%EB%82%98%EB%B2%A0+%EB%9D%BC%EC%BF%A0%ED%85%90%EC%B9%98+%ED%85%90%EC%A7%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하카타 모츠나베 오오야마 KITTE 하카타": {
        photos: ["/images/fukuoka/info/restaurants/hakata-motsunabe-ooyama-kitte-hakata-fukuoka.jpg"],
        placeId: "ChIJSeHzhsiRQTURY0hKFL0M6x0",
        placePhotos: [
            { photoReference: "AWCwydhkBak_6Fk0bJi0M0PkNXmVu3XqceRwIymU4tigg32ETeQw6In-AyL1PRctJ8eDRkwzhStcm4G-OpxyOlyLSnZ9xCipLguOIdebN-JlCVY5rckCGsu3onXPMljYadNKOk09N6cD6vPDLc1_jWO0-rY8h7uZrhs9CMLN_DAC-1uHMSBti6G4FmMQf9x9bpDqhqTiJRUjegC3csDkrNE5mZXTaXT9Wt44M77CzpNmPLSWO8YaJMAVsLuSoMVU_c6u70ajrsSJd7FEG4n_abLIvI5T4DymWcZWiFNCb16Is8cRBvYK_PypR36KmylLiDowIzl435vlDXNTBausSIVoFYC5nna-SmibhOHGqa9cdlUBTfJ3NhALPWJdW7Gh2xnY-xsM43d9uc-eKkq7CmGmNrsCCp-531Gswji3bm7q0YvZZqO5DwO1OfU0ny8R4crt", width: 900, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102071298956579550281\">博多もつ鍋 おおやま KITTE博多店</a>"] },
            { photoReference: "AWCwydjItcETGkDa3vj2fDzK6h4DpbdUs2plgKhfe88I-L2RyIRR5t63H9j6dbQzPk71SRcRTdfCkvIKlX0mONy2lfF_pdNqdlnwmhg0yMAnKjoEFeEgdnAy59F4fEcYEkwHd1pfirnPnJFBM_SxATtt8f-04S5NMqmuSRDjkGL6EjPjDyy4jdrIWbp_odInJtYElLUqLekgquuYs8iK6SRfY-K7Xr5yc0EK8-xfGsTpLEzln8Sal6ZZZSaiseFxClPU0lYjNPswIPceE82K5woTO3Drz80Z7TEjnpKR3rSmAuvdTUV2CB4esxoygPUmWOQsiC0uDknI7ItvP-sjnrF_Yl3LsqVbsF5T5B-A2ZyP0LyvX-foo78iX1FkglOp_TPRvceT9fFPM6LVLgjcXc97mDEle_jh8SOSICOEsQ6Ct4k", width: 900, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102071298956579550281\">博多もつ鍋 おおやま KITTE博多店</a>"] },
            { photoReference: "AWCwydgXRsjh3l_P-Vc-JiGdjYXATO33M_KMbYvWmBKxDpxHx4zHNhqsmKkqCu-S-NaDHyRD4150KMFJFlbn7KscC8SUJO4Ao9Jv8ZUAkxmp3CjbzNtbYR26TZLhSW_saGNW--bQ2mgtEO4EQibVsdG6HtsMlg2qULfiD90TmWa8tPJAS7jQCp4-16XNXbMw1qHhB0cds75Qg7Tj3QI2GjFnA5NlMQONBUUcQA5Ox1aqXrvLPLEv8pzxEws1TU_grZsQ93j1ZqwqrFBKkx13kqtYKsVq1aAXEaZXTvnRiRiycpWbxbYmxuiE3z-LEkMTvJk7BVlHfTse6Hut2SqMQWqoV_XprQbo5A7NJ7h6-Xgd4jRNvlxd1P9Jhc36GoTY4DRpjK63lfapDrI-bsFpoNXEcDb-_J8i86T3B4I_AmoPvaGd6NH9EV_TC3mvhvUnD61o", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112668060059703040077\">Tasuku UNO</a>"] },
            { photoReference: "AWCwydii8YB74NSj8z0JPBRimpq4_iyjy1OMvNhK8M_U5-KZXyiDFfA_G2_FxDsybFaGqRRiXrZ6_Ahdl6m8lkVKMrqPbrUHe_vINggtEZFxnU1YmoX14Buxv0ZVahz3qlDTaCsT9e5xFgVpN3RVH3TN_qS3gDT6qlFtI7x8kStKyYUgsxhjOEa3UUqx7D-4fNJuj2xbfR3tB_UT6Ea4BvBuzRuzSd2jagzQ8Kc5s42qYcZ5oLO6vx1k_yV7WKYwYSWO-T6hqOyRZxPIJI2OtRf28savVdhROyVmge65LQPpeD4rKJdhz0aDcbeo3PZ9Q-MKQ75U4DgjHqVRoob6QTlvB_Vs1BV_ocE5Zi_wXGa4btLt5zp9unQbS7xx7x0Ykv_VoL6c231O31CU6Kp81x2BYPjZVlg8ckWcoUFEiIgqDcik-YUFHUdRZWpSF52HAEON", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117328599629168546670\">Allen Liu</a>"] },
            { photoReference: "AWCwydjZM7B4gqajfLKo6eHQM5cxr8_J_j0VYK2WRqbs8xm3rqo4VxGCsSE0pbaXAN1_kO8jmVlDev2vSbLxAIkAKYuzpnw2-gd6RQQQ9MpcTOT3uCSU982jXs1YfYnFNAdett51iuBMPJR-uDawFVlh1QmgqLD5-bJQc90tetwAD790dH4ZNBCQ99aCn1b5l3BSuQWsNNMzSH-_AQRU4LCfYZ95kMqlKsUXNIEdCwEIb59Q6UUyyU1jN8jsS1qhj_C4sHZBtyAaExyDTMH08P9x1LWPg-z3DPcv8qZ14ZzQtGxjhFtttk1gjE5K1-EjK1ueKY6G8av10V1tvRVInbvewYN4ZDC4H9U8LhUbodLoQSeJP6rZkjsZTw5XOh0iSArswiK451iKn1Bmq-O2DRPlwHJmh-fsV1okZAcF3tEz3csfYYk9LptxTYaE8qUpefBN", width: 4283, height: 3737, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106021737957230249322\">H Huang</a>"] }
        ],
        summary: "하카타 모츠나베 오오야마 킷테 하카타점 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["미소 모츠나베", "평점 4.7", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "미소 모츠나베", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.motu-ooyama.com/shop/kittehakata/?utm_source=MEO", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2155830852855679075", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4%ED%83%80+%EB%AA%A8%EC%B8%A0%EB%82%98%EB%B2%A0+%EC%98%A4%EC%98%A4%EC%95%BC%EB%A7%88+KITTE+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "테츠나베 교자": {
        photos: ["/images/fukuoka/info/restaurants/tetsunabe-gyoza-fukuoka.jpg"],
        placeId: "ChIJpYsfjsCRQTURksBlCZ2Sqy8",
        placePhotos: [
            { photoReference: "AWCwydg7jie5vpp8y4CCb3j9ysPgPoBfiYdYpxamcsuBnuLVyNtnFBwx68zC2_KYKi1p6Fjdftmqrm2zHTk95nmUfRFYf8Yy5q0ehiWPI142-ezPe6uwYqK3QoOPeie1UqbuH5c_zXXaVRw2PdF71k_cXGqIK_GXX8m0OReacb___ZRLCakhHt9JBEJQHZ5vrLC1AvDA1WkQveKHHHMjdeBjQ_MnalfdXlPZw2__ia6BB7i9ljpFfuR-mKv1N0HV1WR8wEWdNV5qRokmv3E52gElNqyYv_HIZl-CkULXnjBsySxxCiz0jejl1CdrskNtyyeTQhkv_IZSmkAGBhIgwcra6ADKuvMNSQ2_lO4AJEksKMDJZ2xiLYxg_GldCtR-2y9GTn9vHdEs_FRTzQ2ELP2OzabltCgcoxGuz9RGJCgq9ERx_O0Opdhoh8BsvlQ15XX4", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118225982789363060263\">Taka M</a>"] },
            { photoReference: "AWCwydgZQMmWy9gbPJgtJED74zJBeXfzVpeszQeZnDvYzaUQcww9lrD-yA1vrVlGgoCMkgpE1byg2muyxHvuEPBHh2cJmcdMsS3Dx8It7yGYJ0z3_v1UTVzhuodwEAGPRQO2JnnjcJMLthjqkXuXry7K15IP3MKnSCnYyD3z7VhF0afZ6LuqB2-E83snrTtnumHF2AwFzr-9n5LkqU4pYj7E-WQJk28IS7lHXE3D4UYDTX1BM_bjVWqHKCA-AoR5O-Vrp5D28SXaJ_c0XUu1B4M3US9bL1p_StRLAnBo9Mhpk40LKQQndoic97L3WyiVpUJekUyZ86Vpv2Ql1cK0YvCeNu7WxUuC808Yzi8R7h0M1bunqx1A607z3QYr9BQuVkRnJ4jUXYi4bh8stEsvMfY232tFVRK20b6ONRFYtRF1zpg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102090391993450584010\">YUTAKA N</a>"] },
            { photoReference: "AWCwydhnwr7VjjQ8VzmigN6p4bB3l5dwDQkq5pES16WjHgBia_mlBx2vGRXNGGaIJWARLszC2UD7Scv_5B4YVPEBSZUXIWnrZAI9Cmg2-ILr-nWwgBpDEUtSL1WftGKR2Zar1FuVgmb0_Qtp8FHsZGsCJM94Acdrz4mqmr0m2GcrbiQy5Lr3bS5LQ0EABFFEOzx6PUd45K4kOU9mt-AzAC7MKm372NBLvUCWHH0Bs56xrH0RCUXVMzlGp5DvrHQpWOtT7S9CSJf9XcSM0zbEjYt_Bd37LJlkC6QHhI8rtFXuqCYnlC43pGhJe-UtgdwqHb8v8xEsaAhZ3l5LjfjRTk6Wf_F2Mw7ekK4vMIdubasVAwtaPJCz3howx4vW9Df6YKqLnpHBKUroT4crTOMCjsmQnXlkv_VfK9J0DgN6zE47MOCM1X3Hd6J6XAcngYtu7Tvt", width: 4000, height: 2256, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106236752612553977802\">Y H (HIDE)</a>"] },
            { photoReference: "AWCwydjcSZ0OAEUyeBClScWpC88v5UQlob1Bt1m2HQIWvXGGfsx6oIh790Kin1SM_PWLhihhukjr2agl7H9q4-Rsni2Tb_suPxubzz06673X96XB0mR9JnntTq3VklEXEKLRqDzimiJW2Z8j9LPEVfn4Uvbo0rdir5v6uBZjPD4rRfQOQjtR_IFOZfJzfm6EgubMwLAfGyabW11MeL9ZN4DS4hKkbXqu3b2esus4gWJrZvWANrSUTUpmT7mhjW3oNDiBOjgic5HgEMlLqvKVLMuqY6TrIFP2YhSim1SKaY5jL1CmAk1VbXCUz9aNWL4rYFsOYc7JwbL_oIoCElYpdM1x5g_7a3gfRR-BJFknWv5g3kJoZ9vRsxdO143iXLnvah9jbKnJGHAMXjiehdtwZAYQ6K_NRguhhtHjQqfMXfR7Q7M-g8sDUdIpRJh1pFhe_vMG", width: 1479, height: 1109, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110344913553214057850\">ガチ育児パパのリアルな子連れレポ</a>"] },
            { photoReference: "AWCwydjZFWrbvq2dqckWpAJn1SDsNiyM9UYKKOohqGol_ndrt1_N1iDky4gszluM9IRSAplNj9TGCENsVS2KCaAOHws8nDzByqOoeC2MD9HpnCzPOFMAmboYrKSWy89z5HoEouHjzTWJaNijq-6vUdheKMXejBf9fJKFMrvHFPSsH40jyLEm5_yQjOk0Mp631DWNPk02ljuIm0I69DrCQ0AoT5v393hBucgCynpIf4JA7ruBo8ykimhInOVeph_48xeNl2rDVFhO_WLz2vX6mnPO9bYVS4u3jIBK-ZhIr2Cuppz-SHb4dVaYRSqbW29SMCYswvG6Xtml_uf6LjwjcFYfpV1jqUytnswnQorxzAmMcAIW39HGN7JN7eBV2l5kbGBkWC3FjVrAjfk-yzbNeOFUgsxP5qUKdyT6K6VqzME8QFPi4n6DOqXmJvyPzBY0wzfe", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111303963456946293282\">星野晴輝</a>"] }
        ],
        summary: "테츠나베 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["철판 교자", "평점 3.9", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "철판 교자", items: [{ name: "대표 메뉴", price: "¥1,500~3,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00 ~ 오전 12:00; 화요일: 오후 5:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tetsunabe.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4836541239986668089", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%8C%EC%B8%A0%EB%82%98%EB%B2%A0+%EA%B5%90%EC%9E%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하카타 기온 테츠나베": {
        photos: ["/images/fukuoka/info/restaurants/hakata-gion-tetsunabe-fukuoka.jpg"],
        placeId: "ChIJpYsfjsCRQTURksBlCZ2Sqy8",
        placePhotos: [
            { photoReference: "AWCwydg7jie5vpp8y4CCb3j9ysPgPoBfiYdYpxamcsuBnuLVyNtnFBwx68zC2_KYKi1p6Fjdftmqrm2zHTk95nmUfRFYf8Yy5q0ehiWPI142-ezPe6uwYqK3QoOPeie1UqbuH5c_zXXaVRw2PdF71k_cXGqIK_GXX8m0OReacb___ZRLCakhHt9JBEJQHZ5vrLC1AvDA1WkQveKHHHMjdeBjQ_MnalfdXlPZw2__ia6BB7i9ljpFfuR-mKv1N0HV1WR8wEWdNV5qRokmv3E52gElNqyYv_HIZl-CkULXnjBsySxxCiz0jejl1CdrskNtyyeTQhkv_IZSmkAGBhIgwcra6ADKuvMNSQ2_lO4AJEksKMDJZ2xiLYxg_GldCtR-2y9GTn9vHdEs_FRTzQ2ELP2OzabltCgcoxGuz9RGJCgq9ERx_O0Opdhoh8BsvlQ15XX4", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118225982789363060263\">Taka M</a>"] },
            { photoReference: "AWCwydgZQMmWy9gbPJgtJED74zJBeXfzVpeszQeZnDvYzaUQcww9lrD-yA1vrVlGgoCMkgpE1byg2muyxHvuEPBHh2cJmcdMsS3Dx8It7yGYJ0z3_v1UTVzhuodwEAGPRQO2JnnjcJMLthjqkXuXry7K15IP3MKnSCnYyD3z7VhF0afZ6LuqB2-E83snrTtnumHF2AwFzr-9n5LkqU4pYj7E-WQJk28IS7lHXE3D4UYDTX1BM_bjVWqHKCA-AoR5O-Vrp5D28SXaJ_c0XUu1B4M3US9bL1p_StRLAnBo9Mhpk40LKQQndoic97L3WyiVpUJekUyZ86Vpv2Ql1cK0YvCeNu7WxUuC808Yzi8R7h0M1bunqx1A607z3QYr9BQuVkRnJ4jUXYi4bh8stEsvMfY232tFVRK20b6ONRFYtRF1zpg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102090391993450584010\">YUTAKA N</a>"] },
            { photoReference: "AWCwydhnwr7VjjQ8VzmigN6p4bB3l5dwDQkq5pES16WjHgBia_mlBx2vGRXNGGaIJWARLszC2UD7Scv_5B4YVPEBSZUXIWnrZAI9Cmg2-ILr-nWwgBpDEUtSL1WftGKR2Zar1FuVgmb0_Qtp8FHsZGsCJM94Acdrz4mqmr0m2GcrbiQy5Lr3bS5LQ0EABFFEOzx6PUd45K4kOU9mt-AzAC7MKm372NBLvUCWHH0Bs56xrH0RCUXVMzlGp5DvrHQpWOtT7S9CSJf9XcSM0zbEjYt_Bd37LJlkC6QHhI8rtFXuqCYnlC43pGhJe-UtgdwqHb8v8xEsaAhZ3l5LjfjRTk6Wf_F2Mw7ekK4vMIdubasVAwtaPJCz3howx4vW9Df6YKqLnpHBKUroT4crTOMCjsmQnXlkv_VfK9J0DgN6zE47MOCM1X3Hd6J6XAcngYtu7Tvt", width: 4000, height: 2256, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106236752612553977802\">Y H (HIDE)</a>"] },
            { photoReference: "AWCwydjcSZ0OAEUyeBClScWpC88v5UQlob1Bt1m2HQIWvXGGfsx6oIh790Kin1SM_PWLhihhukjr2agl7H9q4-Rsni2Tb_suPxubzz06673X96XB0mR9JnntTq3VklEXEKLRqDzimiJW2Z8j9LPEVfn4Uvbo0rdir5v6uBZjPD4rRfQOQjtR_IFOZfJzfm6EgubMwLAfGyabW11MeL9ZN4DS4hKkbXqu3b2esus4gWJrZvWANrSUTUpmT7mhjW3oNDiBOjgic5HgEMlLqvKVLMuqY6TrIFP2YhSim1SKaY5jL1CmAk1VbXCUz9aNWL4rYFsOYc7JwbL_oIoCElYpdM1x5g_7a3gfRR-BJFknWv5g3kJoZ9vRsxdO143iXLnvah9jbKnJGHAMXjiehdtwZAYQ6K_NRguhhtHjQqfMXfR7Q7M-g8sDUdIpRJh1pFhe_vMG", width: 1479, height: 1109, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110344913553214057850\">ガチ育児パパのリアルな子連れレポ</a>"] },
            { photoReference: "AWCwydjZFWrbvq2dqckWpAJn1SDsNiyM9UYKKOohqGol_ndrt1_N1iDky4gszluM9IRSAplNj9TGCENsVS2KCaAOHws8nDzByqOoeC2MD9HpnCzPOFMAmboYrKSWy89z5HoEouHjzTWJaNijq-6vUdheKMXejBf9fJKFMrvHFPSsH40jyLEm5_yQjOk0Mp631DWNPk02ljuIm0I69DrCQ0AoT5v393hBucgCynpIf4JA7ruBo8ykimhInOVeph_48xeNl2rDVFhO_WLz2vX6mnPO9bYVS4u3jIBK-ZhIr2Cuppz-SHb4dVaYRSqbW29SMCYswvG6Xtml_uf6LjwjcFYfpV1jqUytnswnQorxzAmMcAIW39HGN7JN7eBV2l5kbGBkWC3FjVrAjfk-yzbNeOFUgsxP5qUKdyT6K6VqzME8QFPi4n6DOqXmJvyPzBY0wzfe", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111303963456946293282\">星野晴輝</a>"] }
        ],
        summary: "하카타 기온 테츠나베 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["철판 교자", "평점 3.8", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "철판 교자", items: [{ name: "대표 메뉴", price: "¥1,500~3,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~10:30; 화요일: 오후 5:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.tetsunabe.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3435000343965319314", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4%ED%83%80+%EA%B8%B0%EC%98%A8+%ED%85%8C%EC%B8%A0%EB%82%98%EB%B2%A0+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카와야 케고": {
        photos: ["/images/fukuoka/info/restaurants/kawaya-kego-fukuoka.jpg"],
        placeId: "ChIJM_zKvSqSQTURDRNGGoSARPM",
        placePhotos: [
            { photoReference: "AWCwydh2vWFFYsMMHl7Ifo6GeM5Caiyp2lvEYjKtROgCc7sTN66CFeau8JN4opsMoU9CY4UgHhCIYhAtWK2jp5wgTlukJEXX6_oH9Kr4JoxThDmnrUwQz2fUlof1Qkt06it5wg_-vf9WajLXu6CBgNgwCN8-HJAdqPppsl8M9eZMG-UbaF75tmCxYKqhqULzaVgSA9PkU7fsS5aYd5tafrmzaS2T73L9Uc3rUVunU_GaxzkETqpUxoJUonUQS1o8cJwrFsE6hwWIdT-zJyuEQAbdtNrGRx2ergHJlYANjwzpnp5aXvxCa3zcbFdR1Q_T8FuvY552cV8zwQ3u84eECx6Yxv9Lcwi__HXLIpNqO95mRWjSH7-8ezzVcQfwMfxgwIF6Ao-WmML3_Ql6YIwtbuMVYG__iTogzTkHONKIRst_FlwjNZEH_C851kJpuGGft1n4", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108521305348803621624\">Shin Suz</a>"] },
            { photoReference: "AWCwydimVdmbsFaRM7v-iWzaRW6Nfts0UyzVPEeuKRUR4soJJxjRIh1GtQNXLXC0PNPAGWEOgK58QPdkVutY-HIca6jfuGRjwv9USCoH7BBUUUqMuAU9Ju0abCuvn6dmpqV_S8y0WaPbHs7SiMse9lBEl-_-jSyxYAVrXLOdMga8zxqVYa0z8lMnaGeiOIFFNet0_LMI4puz6QpBVrO05VQErjgWkX3o98uDq5D0554CO4kdXCdzgZydOdD9Vzt_d-bS5S6NKB7jq_A9JKNx3frTBrETk7aDw845nNFyWO4JgrwPlivSbLFzEwMyHCrsialp7Ohq7vsAqP7ZiwqdF8uhj0mnHp1g59PghhNjlySjpzjVpXVbwlCbBTqUQvE98PxjuCzg2RGM7kgw1fMcSOPAnyXYfrgDIGk0kCIyaLpbvoE0aROZU6cIYshrYiKcMA", width: 1706, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109607214686230809159\">かわ屋 警固店</a>"] },
            { photoReference: "AWCwydh4VaTokkKFmApS1raT3xGXT7Y983sAJRZTEeTDVI9SEbtOfmBdH9zklfC0ifEHh1CIZ2gvwu3ohbc-30sqScxXy9nAyM7Ei_LBgIy1Xpmw1IvOBIdzMZXwqcy3Cg9DwgLn6J4ew7uFwUreLcZhU1ZC2iJm5clhmOjBQj15CH6l_MhgDe-trDS7Fpt3J1Wcova4Kls1zLE8nG55t1_ETvNCKXgfcpwlnmMaRF1_z7Y_UZyh3SIhAH27UiVUAWeh-5iwtUiULTbBiEJIE2ANnafoK-I2Ik76JFsK25iLlCf0I5kZImMsO9FCZ-QLyXFogL6ZznNpprepZKRY4QGLrCJn9y6evu7BlTgzTmaoGouVXWk8r7xpVqtRPFlZJVcmzIFU0dyINkGRaHuxYddjxVheS6SxI0ZvbGONjlN3J6x00k9YmydYooW0EV4yzA", width: 1170, height: 659, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109607214686230809159\">かわ屋 警固店</a>"] },
            { photoReference: "AWCwydjRLp2NXMuX1dZTDXCw8vOU5MfVqAgmqijEvPfkkpceapkHe649A2wPlMbusBT5NvvBscFIIx8EhpP_YPcyUno8rpSxeyXAzM1QjkEhNvamko41d6jDSEMPokbG_Jb9VF9wExhgYc9MCEaIQ5ocRbTinaAda3U5gxy6eo-eoqOYVVPwSVX3Q8XmgvPBDYXK3is9kzxf2ZNSygHd-ZWGIlwJnktlEa-qwN2YCdc2d0znCBRJ7x1fIJABDLmRyne1c2NH0leMjPPTdSsgZymG8RG7pbxgbi0MqbjjK5zk2D2xJ5Vs7CpTSbzuxjkK8JPMMqwrcq5A05xJmfAC2CXJnXa8-WT7v20lHLbTVN2h-oUFkWkHxtlsL_q7KkKr_MMzunpMZ31LZ1bFIPmd3tkjU7h2PQLj3XOg7YTLlwP9dWDklEW9bH5sL9ujzmflMtuB", width: 3469, height: 2602, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105868688603537307169\">TINTIN呑んだ暮れ</a>"] },
            { photoReference: "AWCwydjVswQOTg67oNZJsgTzpe5_-KQ5h_DaudGLw6S89aNNnclvTvgxCWYobVTXmsZiliuVmt97A6r8g612SW1a-lHWHWuwC_KiMNfeCzlSKvTj0G1sEOuhoFO6WhuULZ0jcjbuXs2t_c7cIJwj5V2vx_ELRZDxa1_qINooIUk89v4soIEzkwQKKby61Yy9Ci2fMdfE-LnKbXpKqJxUtoroks405kgfFkek0dXveBTIGSR6DK433eWjCsEJvzYqYAT4QECb7ZriEKZyvtZuFV_9EmPWAQKGfXPuJeGRwfOQXL0JBFOBQoYImqybBRNnMnYiRXwcJ0Y42wCaqeo-jUoJlKYir8hQHmeIYVigmZjSP-IdRqKVTWzO707gf7-8YUn9WWIErsDnaZwiOYlsVS0-ct65xiIEATt94cB7q_Dt-3QeHcdbc2BFBeGESoKRmA", width: 3240, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109607214686230809159\">かわ屋 警固店</a>"] }
        ],
        summary: "바삭한 식감이 매력적인 닭껍니 꼬치 맛집",
        updatedAt: "2026-07-13",
        highlights: ["겉바속촉의 정석 닭껍질 꼬치", "기온역 인근 접근성 좋은 곳"],
        tips: ["인기가 많아 웨이팅 주의"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "닭껍질 꼬치", items: [{ name: "대표 메뉴", price: "¥2,000~4,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00 ~ 오전 1:00; 화요일: 오후 5:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tabelog.com/fukuoka/A4001/A400101/40059272/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8235473796301480163", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%99%80%EC%95%BC+%EC%BC%80%EA%B3%A0+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "야키토리 하치베이": {
        photos: ["/images/fukuoka/info/restaurants/yakitori-hachibei-fukuoka.jpg"],
        placeId: "ChIJ5dg9R4SRQTURQfMgsgnY1aw",
        placePhotos: [
            { photoReference: "AWCwydhFJFi5SaOF9cwbRTEQV_n2akOL2IUFQ_ru25lVg-1UDjFeiVf3XnddRwhxa8sub7ChKIbxb6owpcAB1pzDlUAnIQPq-T6RFt8EEifWbiE7oWkJau8PbH8jB-d2emn4TZIsXAKvqKYN-BsBlFjisp6ujAvMT02fXbM5-oryMSJYYmMDoZLcm0hdevt2cdKwN-8w1LkPqecBOByPhhAbscGwY1Tzb9XikWpYzBTKUiEVjXJbFomwC_DlqWzY89w0K3liIyYxVcr-mCrjkRdN6PKwlBFbNH62QE279Cuu63Rq_PVZms5c0QmGZ0SOdoV1L9KArlT9UPuNF1eOXahc7UmU2ib6qt48B2UnDROCwQoumHQW37lgU7NbkOPzVGXFlo-LmKzCJEG2Cx2gtanpq37lwUV-0GEtEPTYOCM6WBTDFw", width: 2000, height: 1126, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108642458350358659768\">焼とりの八兵衛 天神店</a>"] },
            { photoReference: "AWCwydgzMgHbQtsoB1czYq_5lV5BDnaEZ3EKX9gB8BjNcepFJLC_iOPWcVecSIT7plP0LXhbW3bh0zUuv7l-uditUeytE3DJuHUH-vPii_qqDVxvsA-l3JYElqZYOXhJM0tLXdJWXxFGezUyOh2ToLxsQBhG9vcrCFGjcWAvZwObqYYPJ7XgUVR_GicvEHNjTKP1xhEGPDmKDbgRBjGMgRi-GY3-ixIw2jLcr_cpdKGZ1xMjixD4D5NdE5-wXbKzjBp9rxheQV8Hi87BvD1AsKh6UekyqFeusqTPEGfNlKZjktln5IapzKOiNubt-uye_U_wOUZYxEMtczSVfe792-3Jx-_EfkMtAsc2bKOMEHUnn_-KASW8l7irufOuC8karVXgqdIC9kOCIUOVRhewHy1IfI64LJ0PCP7tDkm3Za6WGb2Lp02-S2nXP44Tfkbht8tT", width: 640, height: 380, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108642458350358659768\">焼とりの八兵衛 天神店</a>"] },
            { photoReference: "AWCwydi7Gz0Ky_MRJY6u7H-Cw7-i4liyeDxk5A45saf7egfF8eC3j6tz5e_FQiYOve_DzA1310IFUN1rppxXHFCSJ_CHvA-Yh8gqvqQlTCFy53JuHKS2m0QCf09hWxV63dBB_5dVFumBmmipu4D4DxOaoj6qOyx-rkizgw8ucZI7XSmPP_5RIAV0B266ie6TeuQks0JBf3r93xyOikczHKJphu7KbqW_e8JrBOFiAIei0-b4EBtEemM7ZQhCElSbEZs3CVBLsjQaiHmlViCwaGkA-QCaChM0PAVs3m9Rh5C1dbu1rWuYODH38s_uY13IVGCeZ0P05Ibz9YbwTLKxAnMZE1HBA2wRphV9JQhHwwSnC3L8eiYiyGwEA08tLkM8046XLmxLyMo7g6ZKM9xp__6fKou2jKNGqUBIHtniH7qF9up2kWggNsjVFxagLo3E8g", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101358047394563841183\">姫</a>"] },
            { photoReference: "AWCwydimZAX0bx-talLuwgt1FDUZM65RzyL39dE-UasV4Uqo9Ma_Qw9Mt0_2HmYXLx27JhGdKxkYkQ1Z77Sa9HSqH8SJ_B1mjG4XzzLMYTuHHjDdgD0g6ZzZamNIOeTg8nyjtFjvLMYdoRJCE8unYteEgEwgGWe8mOmsPG1PfpNWnszW_xvwtruVWyAyX24zL8GfyQsNlNrgYMxNDN8z_SaEcKFeR6guphGHVIePqWqwgursgyYd0iou0wWbixG0xJH6_LZib9klDOj_AP4tViwAbXWVt9ZR2mpbxshMhpTNPsYrzE7A7TUOByFSQgrZwxqSCUVcwGRvV9QlLuKYiELVZHVhmO3UMkyxj0zYU8vZxaUfVdzRcbhqDH3JOb8f3OjMieA4oAGZ2RcyyF6RQRjony1MyY8qZk8DeXF8l6X0S12l4zbsg3ULChs1rozoh-YB", width: 3000, height: 2902, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106474666239395765195\">to ya</a>"] },
            { photoReference: "AWCwydj2P5rYk7hNF5liyNmGCFBhKouX2y492ZbKc9FDV1wHU_h6M_OetJksC_PXPwKyHodKhcLjxzreF7D9XjDC0js0flPxl3xb_X5jgrn9hRVs1HPwcjxuaDybEkmJ4srZCtQLeVSEggta6JWIvWTZr8AlG5dS_x356wxnqWrJcdIFx2HlAP8OcjuQ2iimxXxbHr54yj8ZvGJPPTpk1Eo2gL5gmxje1vkm5rOg9xRFhv_lVLoGW3WJuI7vyP5Wu6PmgvH_jOFpx8gUt0dxqjmNrsND_WoPbOfEVtPNB2xKH02UxsJ3CdXQ8K3GpCx6BWgrlvJWVCAx3BXxCAG2cP1XrmCbUBYc1wDw7mQgJOyUPJENW4cyVYxNPELA8vQB02iBcRxuafOOVE0d4vfrs9dtj-84MUZ8SwK1_8BIuZMHTdjfMgBbso7LF-uRorpAqNBJ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111985840595883922111\">TZU CHIEN LIN</a>"] }
        ],
        summary: "하카타식 야키토리의 진수를 느낄 수 있는 곳",
        updatedAt: "2026-07-13",
        highlights: ["불향 가득한 정통 꼬치구이", "현지인 추천 고평점 맛집"],
        tips: ["시원한 생맥주와 함께 즐기기 좋음"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "하카타식 야키토리", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hachibei.com/?page_id=11634", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14103666401349552486", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%BC%ED%82%A4%ED%86%A0%EB%A6%AC+%ED%95%98%EC%B9%98%EB%B2%A0%EC%9D%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "야마나카 스시": {
        photos: ["/images/fukuoka/info/restaurants/yamanaka-sushi-fukuoka.jpg"],
        placeId: "ChIJa76vDJuRQTUREHEiKs15P34",
        placePhotos: [
            { photoReference: "AWCwydhC80JMniwi8049rTpRiAUAw_1ce7mwwE8QNXBPjDsfBhAWerSYbayppRN1MuPrqlIvHbYFZm-ogsE8LWU2L7dLgbf6HrKtt-GMzg1jeWDibH3ARV7FQYkO4nuVZah5uTRDpCTg9zsp-3cIPpKNvWaKgs9Vhd1jfIjJsJp0AeH5MZhbQih2Cg7GNX3kEpGCWe1RdLsnvtXMp-Tzb9BVq-yN4Vdt9BIRK7950DlrmVt8_pFzBICveu8z35K0qPw-S0QhnA4j7ayJU1BuxC9iwMbvAB-z2zES9kuH5Gd2B94GbD7xcooYWftR1cxYcxvJk2p0QrHFHLLHPuVJLWo9oc5FckIguIpM4IHlhWeDcXXC8wcoGhKb4Fps3Azy_kz88DBJkDd5souIQxYByQJup4JhTKoRZJKLyVoYEEYvhlE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110477559246490408109\">MICHIO KAWAMURA</a>"] },
            { photoReference: "AWCwydgjCv2AcMVIDzZ6QL3baT0WrBBMYbGXPNKEdLBIevJuMW1KNTzThLEPWrxYTR3ZQ78pBZvY0CoiwQsfYs6dOBff0JjK7A-y_I9AXNM9IeBQ4Tv-QNTQ5AItXJFJbrmK5XRP7kqw6EgEymVvv-1Iy-DvfNgjskMYiyZbRMYJ-auCehVHMEcBF_pXTuTNc8Ubt-KetPKYD0_fg-D6bh33Qih-uzsjBMQrPC8WVf1_bc-n2t6P61TFi94KGmynDd8opoh0K2le6N102erE806qfypf5fKrj3KjLvBDkoaoGvmKK9IG91EgtKCeMy3VmzssIgs2Tw_6b4fqxaAGzL-0IVEVjuUuSqRX6j-ZGU9DKBYV-jRmE8g5sCkc31AgLAK5rrYJvVmm5At3aCr8XC2qL8tDLkyaoJuRVY9LCZ-H8N3jOBjuLwo4SlngGxoyzUKL", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104928157009962156811\">김스텔라 (스텔라)</a>"] },
            { photoReference: "AWCwydgZ3UYGLOAdOQX8EvmxhaOJ4OvpMs_4XFzL6BlS8awZh0cJXgY4dNKES-KkIe6hbUCtfizaBDRQDzq-JZN43xhlQm4R6vjhUYpoMqDlzaV6-G1H5rYcrMa3x0NKIEEqTOg-XDq_AFKghLNTWegj_H32cZVqz-fPhkfHD0tbIxCFz81EYxy9O0FbPccrXIodiln8vK1yVdt7Xrx4xIjvj-67vGvyc_kDz2wpPLpCpI-_tAlBVI9CbUw29r6TiYV5b8-8RAfB9ksrqiaWAm7vpwBzVw5STyphUZLYaUtonAly0wq6SYUJ1rijmzQuCf44M05B_ixONMrZr1r-xXP8bgscItNJdxNWrcRpfl9vukBZeNzqJzcmkFiz4LK3jIOJAb0g7nRYjoopwEyslmaTEaAl-dJhWKwyE1Edo96dCCvab19w_vnhZHsUu6Qqzziw", width: 640, height: 480, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100564162072270775674\">K 365bestfood</a>"] },
            { photoReference: "AWCwydjkVipcFoBOciQ0PPpWsJ4Nqjihslm5gN29WzNDgSf796WHh3Aew_C5OkdTAdsp0tsCbpjO5hfHpQE_KG22vNauNFo1xmRnoZgY76jmWvMXvd2iGv5uHbUmrA60TYaOFWIvX21TdWJymHcTFifmIasHY3ntgv7KXThZWEcP6zEVW9kB3ouZZFCTCJ3GC7t6v8XOLdeT0h1G1iaQ4vpmfRPy6PE_4icSizMpe_ShHn0i6KsMM2OLqb2dlsi6mtuj4YZ1tt2k1WSDNYj4THrI4jzA2J53_UukLm_4yH1JP2ST-Rq_mJP6okZ0PMnB7FAB1mZV_1UjWO8mQxYn_d-9HuJq5XtEUUV_Mp2PMwJ2dMZeMS9-6EHSu6pWnQMqu5clP8RwYpNAWApNJcbmtpt_aEopNgXOmAVv66BGvDllSr6dRwB2Q3p2-MVwBhHW20Sc", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114834642686197841591\">berealyu</a>"] },
            { photoReference: "AWCwydh3IK-z_BTnJF3KMX2yML4zy4RFaHGFQ2yoobkOtmyaOEF_vsij4TnkTy03GGuANA19d8WDltF41-x53v1jVyLKul9pEXOFM_vU5WR9nJTsnCvrIGsHA07Knf43VMy8uytS5n1PwJxQCwa2bIdLXb4cHoWV0sQw_QL43K-2qvHZL8Dp_KPQUA0ISxsHSXiKyddueNXkfY1cpX7curTaFaCEW9PFp6yzo_SCk_yo-WXZK_2ZMUh_IwQPlHFJIIdU6LevzwYKrOr0TFqDRw0uY1sMHm4810GUHGPsktiTnDV2i-15XQSK6kxIDoTvVNTcI3DA2f2-cHrSc71un79ya1HlpEfoDf_rOJJX0STYxTaL7qbaTEVrbVbCLPxI-LECbxzvTHsLqUgXIqV_-7mlXLVZ4XUxhCQDefJtBeOG5KlHE8d94WsjH49ToVkuFrZB", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114834642686197841591\">berealyu</a>"] }
        ],
        summary: "신선하고 고급스러운 스시 코스 전문점",
        updatedAt: "2026-07-13",
        highlights: ["입안에서 녹는 고퀄리티 스시", "정갈하고 품격 있는 구성"],
        tips: ["특별한 식사를 위해 사전 예약 권장"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스시 코스", items: [{ name: "대표 메뉴", price: "¥5,000~15,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:00, 오후 6:00~10:00; 화요일: 오전 11:30 ~ 오후 3:00, 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.sushi-yamanaka.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9097123694393848080", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%BC%EB%A7%88%EB%82%98%EC%B9%B4+%EC%8A%A4%EC%8B%9C+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "효탄 스시": {
        photos: ["/images/fukuoka/info/restaurants/hyotan-sushi-fukuoka.jpg"],
        placeId: "ChIJp8rFoo-RQTURXgrlDgjG8ho",
        placePhotos: [
            { photoReference: "AWCwydjNZ3YDSqbKskItvJyGsPQ56VgTNipGKnzUS9eUyDkUJG6gadlMu7BCA-Ib0F0SU4P8AnE4BOJSf_KFe6y_NtbNEY50p0OJHBkTpXaS87NLf3lXPsXsvGI7reYjOBfmmKJ3eVcVWfRSouYST3lge3ToNkrMylbCO1qdxICgyIYSP6ncYKjzAeT4XstXBKxq0T9CXi5CvyVM5cBhBNfNoeNySAsj8YElIRvMB5KgMTsk0wcNhyJu5lqNnQLu5eRb2ebwkstulUxXJptR7xop6CUy9fEfVCDY7P1RIypsznmTE7IY9ySAlUy9E6fq4PsoDp98aJSEyJezIVWN6TpKv_xV3PFd8D_8hTUzJ6F289JfJ_8KXiJ-h3lMPm9V82idR9a1oGXFrGf7x4lef8Ni_aMI4hqfMjwjsAzXL_ml36rpOsY", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101255205431935546075\">Irene Wen</a>"] },
            { photoReference: "AWCwydiAzTAmh9a5zP4GleEBnT1azjQCLcK_72qmG7--GCc9lsCEBnQCIVsYYwbCBLObFSBeF3SSK-Y-BMhQCLqoNIs7BrFO7i7F6j0cHP69pOTYRd6tKESEz5cGsNhWQTDn8NPSAPCGbb9gkmWzc7lyD6ivbHcmrWBXIBK6x-OSO4puM2o8b77RkBEF3vlBi04woDPG7AcHGqbetXuvSMMAWx0bPfkzL5jR0a-NCMYhAiF2O2qARcMPrUWcyZ4-kK3iQcHvoYBwFey13BuWFBQ_D7H7iq8j1bZ-MlbkRLdViosPApnMBO0N4ViLGtp7Q33JN8nI0RkzNdRTid1Z74BSMgo5RtCBbq5iFdE8LEQO-NXA_7gYy0tisimIc_cXtVkm87ePEQ-3kvymxy6pNxr0CfjnJrrRzWsV3XqMFGXod-bRn7XHNBGfRnnOowwJjGJx", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111824312107230662418\">용용</a>"] },
            { photoReference: "AWCwydiNbvX0q9VlGmqj4bYtulovYAtxNz3Q2PB29wLwRz9cwExQH34UbY1n07NmRVNu5iwssobKFEqK0zHpImgsIBbph43izsv3QOTjPKaIagy2uIXHcHJQ0rVL31PTZv0eStUgoSWTWoScwkA2jAgsgpmXRgAQW0lqalghzYiTdOuSS_LnXR4556LVZ1ALUEdsA68vkmN7LyWZ0T0nPTN6DRvOE7FIvNQ5EERVq0b397wgIsVB1cER6qwOrAN-qxm_4ryH4x-X8HYxIuo1DKMFOJC1OHIAyOEvZQXzNFNl2NmJWB5QleiAVLQl8taTtHYcNzwIOMyHASR4wdXBcCnA6zs6uHlT3m4PecZuSgHyWE9K1-E0bEW4B8aQ4nwm3SN45M0QnF8TWkrQfG3atAaNJEQuSNZ-Fu8P9onhFX9CGfD-TuJDCohA9dlW-NwfHQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103627129640281431800\">Leo Wong</a>"] },
            { photoReference: "AWCwydg_mVtYh0qzu18HD365ZecadRjnXL6brar86dBfaJfQl53Kagh-KCBqd9ujjs6pg0KCq7mJu64Z-xWKlcGfoc12NtIpM0sdkq7OdEy2oSVsD0pGULx9CPYQNmos6zeHhC-3vTB-R2VNf6_UtcOwTC48XTrEmxcOmvi84WV1NQBPZyWpeRSIWGW2TT6DTx1ZnDdrRbqHw1pQ67nvj87fi_WFlZ5ve7wrW4fPupSrpl5MgAFKRceh5ObRe7XMWWPWUIMvTExMjyfjlwIq0QDRKvHw0scQ-Ti-eUeerxzkCqUQ4SyAUHbCzmS8ByBL0C3GVO5vit4wWnB6UsdRS1YBTk3C7QLiWUkU58jp-NM9Xzyh_asDPZSFXvheIE5LdcJgOJqKvCKVyqHbXGG2kcvkfTWPQQx7DLLnZfcGNpz7KyrE9U8uiUze00N2mQsDCBGB", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101041156356777655015\">Fay Fay</a>"] },
            { photoReference: "AWCwydinm8TcmpjDUUFGsuwo2ZzN3EAp4LuePWnRYhiAgvsF8QQ4IaUl9fqEz1egwq86wpPeAUMvAS0GPLcJ0RCiFMkoAI14EjDSXFvmwOVBvtohyDc4rhQf1YgnoNpNlErmAN_3tmMjFVEjT8W-YjsUdcuAv8o5c2u7IGmTpSultO6oDU-yztBYAjihOGTqyqwbTSq0YfWqozJVb9eI9r39s14Uj0ZbpsHofQLq40U6mp6N47PxuJSEg7nfVJNEBC4lZhzJ_DArMPIKSW3gxgdI0et5TEZ-mlGvZ-Y4zGw--5s1CHS7H5NCncew6G6uw5Y7aPMvbVXxwdDmurZ0YCeaBx5YVQw_-29kTVT2yeHoHq9ql0XW6-gO0js_BfQDmexHFwhyv_rbBeWmLeDZH6ks9uq6AO2Sj0qhNTgmbdvol-3A5F8RjHMT_t3HwKgXwDQC", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108906053066359094741\">謝明倫</a>"] }
        ],
        summary: "효탄 스시 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["가성비 스시", "평점 4.2", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "가성비 스시", items: [{ name: "대표 메뉴", price: "¥2,000~5,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~8:00; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1941832127262034526", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9A%A8%ED%83%84+%EC%8A%A4%EC%8B%9C+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "치카에": {
        photos: ["/images/fukuoka/info/restaurants/chikae-fukuoka.jpg"],
        placeId: "ChIJx7zaE4eRQTURntscDlwa6cE",
        placePhotos: [
            { photoReference: "AWCwydho0q1TluWgL_vdB00TM56grcjM5XEXC-xe-Hrg762Mf2H8rbWwkxJkl4TIHIPsMhaK2AJX4T1zfzZd0bd9UqUmgoIEAsJR86wA6SI-WBlixeRppkg-L67O3FlW6ZjQXsjvVi-Flhxgb4mqZe4FNnipxfQC_fWbTno-hqX37KS0XOWlprxofhrg-v9NwkFLwxeaAfTqtTllKbeKWb5Vd-sAXyqxDPkrXYPd0sQzqOH2AYusPY5TqqZyww6-Yfyxcz7U_FeiYGOAqwSH6UfXF3L-Qj4lPOwXIlLciWDXwaeoGPrfoB6mjMTuGBmUvHBy_IyfWxqSmzXiXa9fDMDFzxIFGR7N5HMthMv66Qb5iaqGxAOmFvT7QCpW1CajAsGoZo6cx3ZXlzFSJtL3RU3Q2PrMccbR4y_GHRJ9Yuxsfzqpl0h8rZ7yHBILIv1ywHJv", width: 2193, height: 1735, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115254914005670838177\">博多料亭 稚加榮</a>"] },
            { photoReference: "AWCwydh7ZHAJM7yfClkGUfqRHdxQCcbNEI2JLtypv5Fnmp3uJiiSfnc1m4Y1TqF9Yj5Y-ILCLpFtReheprSINhDNkiLEzkzHx1NAprhgAuBKa2cx7etZnnqVkZyx1R9nA73FlBz0dcf7_r0Vb1VNuA2n07GAvsQbJxGQgMxMSEG_mQnDpKRp0AbwzlGqt24JTquC6Jfg-oKrJBJeCt6PO8KE5R3G_YwXWoT0mhDTpgqHsu7qLRbgHHQubU5hQ2zmLq3vg0CcP7RXavqN8eTj54CU-LzKzCr_l5H8o6TOP5m2UcJZoLZTrcdQk-1Ng10gs2xU9XEPGKGHWY4AiyU93nV4ols_70NpfWoNoVDCZ52yCQ_P2Qv0Qkz9ClkL8xsrq9uYv6cmOJRgzrcJDhkNemts2njDBj_NybUcmPgOqfSaCIWaalCMBPaZbZxk975mxYkq", width: 1648, height: 1331, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115254914005670838177\">博多料亭 稚加榮</a>"] },
            { photoReference: "AWCwydjo82xUo5eSaF012MnZRIl3FmOJYk2KFxS4b2_vw3ufHjwGMp2xLxpzQkwd-s_QAh3qkFBevq0Q8fvPJ8L5A8cwxfrfAl1U3gdo10hMqzZJGv0n_tL5NlGXYF9NVWsmTp9NuJJmWmbrZ_bxODg-oUWk6hVB8j-3rxAzH5v6pY1yhgAxwVqhh5s88ey7gP4mdy9HTJ63loh-7dHaOfLXwTb5NR_jusKCltfqQeToPNTJcHjxi4wqE8Ynky5gepPAqrIFs1s3btl4GZiEm3CgTC2hkgTv9ahfP5VHBG6P2ZdqFqneGiW0bT9nqd9bWGN-2G6do_bNCKK33CKC4Zze0nJmhd453O4VWeqsnQbvwuU374HRZ3vk8GaWizhj-tlN0Mp4eh0Uz60U4n5ylSnPc2_sS1snnb2xyYksAEUEJGtskTJwedLpEgkIC5ZyvED8", width: 4000, height: 2256, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106236752612553977802\">Y H (HIDE)</a>"] },
            { photoReference: "AWCwydh9XFtBzkDgyb5peDZfi2qnfWIcpo6OB5CnBMuDlg9d9TC89_4MX_pp7otytfC7_l1f5cHaa4aE2Ju2JiXYSQrJMvawrW6JsJcmvEL9vhAOPR5TCJnRYksGBQCLXN6gBYKHePDz3pUIUqgjqZx3lQ-vaRSP2CUw_lPspl0hJtRzfF-SFpx8hYZ3LusFajKgXxQ3pVu1-MYUTNrEd8I5MF1_ZmTJopgjdN-DW3GT6eemHPHnTZ0F5h7OJ70IPOTf9uzOW5sxFjdfH_9kSnlvJk7RYBnPbJIgC9Ct7_Df0oXCFCfXDXxKVrMHBXbAPJIU_7pQYWyKgwJUFf4StTef3XrxpvuJmDx7w8L2OU3kKLTFnPpcDzlFO6gfnvJBYX3uGsbs-N0orl_ntw05zjssKpy-Ffrym4M6mzESMxeYh2ppWU3hGbsqbfO55e9ATTqU", width: 1666, height: 1249, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115254914005670838177\">博多料亭 稚加榮</a>"] },
            { photoReference: "AWCwydh53EwrtmOxk4IOxTF5nVmaPy2AFmhF5TE-SPJwf4Za51S5wJv8uiq86aAKBCplZIJVfoBpb7zQj-MJxeNDBngw_Z0En7cSxR3aPsS0QbWTrmRnCWiNPydA4DOUhKV3itKoL3qYSOMJP-AWI2KRYodrCmYcyZIebauiJJhMEu-re9f6cPbSCBALp-7sdXvaE65J3x5q7CAb-UXqQDrxm07z5RxXSDHJjflU3WYpvX6_8InFAxFbhHrH8p26N_ylz6Dm520Gi-TKvvgWt2723djWizZbZSKHT80341DkrnJGNrqv8lsqXDWTVh1JKLRRZkKf7JjFop-GNo8hi3tA7TqkAbyQl-_XzMkzuUMQRKoP13de-eXSqqeUNCO8k1ygE2UNliEMLCFDikdpL7D9k9wVJAFX378Ga2Qcvag2KuKPpEqC2v6y1LqSu_8a04xr", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106197663060053252309\">Vincent Hsu</a>"] }
        ],
        summary: "치카에 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["이케스 해산물 정식", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "이케스 해산물 정식", items: [{ name: "대표 메뉴", price: "¥2,000~8,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~10:00; 화요일: 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://chikae.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13972728301569760158", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%98%EC%B9%B4%EC%97%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "갓포 요시다": {
        photos: ["/images/fukuoka/info/restaurants/kappo-yoshida-fukuoka.jpg"],
        placeId: "ChIJC1UFAZKRQTURjVNGYl7yFps",
        placePhotos: [
            { photoReference: "AWCwydgxyUoOvPitavsa4F2jq1f3RerTKzI1mnLAVMYUcTM2BhXd5k7Jus6LaNCRfh6uH_l3Hz7SoKFMv_D_mA_ufyYzN0aWjoEHxgxsp992T65n0ZgZIafRKJhRHIC1MBm-Yeu-jjxncopBERiLGn0WbN9P3k8JebaiTOoamgyUJ0WMz7_-Yk1A_hPHxAUrd0Dt_GO8LMnWBDzmaziFCEzOm5jKAcrEM0vgOphgUIf7FFm8afhHxyFuEJmR28BbytSz1X16q8J8j_i0a5ItaIdarNVCzJepc5XwKfwybQfgtQlNVrwcgBVWrmU7G2u6D8odlNqpMV3F7QPOZEZaFIM7Xxz3tvOALH5jdkvVV3G-F-csQIT_zbMseX0FD0tnF0IGXjr_CqAYKP463NXWsWJg86vkZsVp2k7QwLAWWCYIVRTuYTnC", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105152041834126077244\">Misa Miyagawa</a>"] },
            { photoReference: "AWCwydhXNCTqbtNbUohJbdIEoWxcr-7P1Aceq7xCQGph1Xy40EFtDMJZ7KrT_17WBSMHPtTx8RQJqkPtoz0GsbdPYQnutUxygnyeSB-qGpMTu6onNrHatdmSlbnaO3SlvMv41cG4kmbcE19IvC4g3KtG3v4L1U-jOl1qK2WM80JYPXRAiuPS8eedcR4bq3vO-7qSoDpBofwSlytK3e0yII2RpyykT0yHdvmX2vgfApdUTyExDVizf7r-0oNeqWLjWZWMqS1Aq19yd-_v1BuF6UbH3q6ZQyydl-VyWKpgUJz3_6DR5KYBIF6FvUMCP5s2jmPTKiRCzOk91sX_cGaDd3RrPOlCWW2xG6mGxEJSAaZ1bKK1WNgqdpWYMxWLjxaU7k9XFeJ3wIDbYTlMGGqLce6wLswItO9emInKwIVYYHPs5MsV4k7ZuN7YDw4sqjtCoH8p", width: 4800, height: 3840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101175900038204550414\">割烹よし田 博多店屋町店</a>"] },
            { photoReference: "AWCwydimyMyIw827ZKcheGVm0QxTMtMdSgP_seqFm-jzV4jAKBOMFOtR8y07TzuxTaFs-LTdiEJnq8IXimfhVrkledbzBoC1OfIlpxCYtAJjLJvYALOFgQWbH6A9o48sGl2LPvfT23pJJZAk5j56rNAHiyVsHviNso0_HAxSVLXSWDXRLqpQOecxZFFGnts5FsUNpVHMWq4fVrdFYlb8g3djk-S3KsJQrCRMsur_wuwdrqQVJyeB9fB4zY1LGBDi4M_g6tXdZETEhAxFVcgsQoLVMMROWm_mIhh7g2Pg_HpAHoKPzozzfP-v3EcLVbi7dIaPsxB0q2XkBV_N2HEqkmzQMBQK-9ewSMD6KWPPJKdA-nu-QRFOR0G0Jt-LIzpL8AFiKgnIPkbVdhvd15z_ikuySHv3-oU6tWFbij9ZGhvT4sIJwuU", width: 1106, height: 1482, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101175900038204550414\">割烹よし田 博多店屋町店</a>"] },
            { photoReference: "AWCwydj_U3WdvVrCd9UpdMc3mMGLcWYDvK__bBgiWX6ZsVkgRTipso6doibXo-UJ6LRehToXIjKjq5KGbvUuaU6fZhu0c9i2HgI0sSIhHNb1VRo3ni-G0ynGcklvVS5HCOBtBX-in1LMxMD9NhVUBtP3ISIufIkoYqcPo2atHH2F-0u4S6nR-jo9I2fWVfaetn1LeaMLWBL71LKeb6LyC3lG9jtwDSeUNq5GrLTooIU9ztL2W_IA50udSitak0PTPgWlHSI0LSxh0zCbOwgur29-IG33zwaNXwVD2yT7aOcnevEFs_lu_iltkPLx-DfIMjN3Z3Rl6J48X6E8n6thWc0u6d_WTKQ7gkxSRjklWtlDKP8RXyK07hsrIuTCi29FBfQ6dkYqgK8Fx6CRSHEydWy9dvREjG4ORtuUbwrUItuwfEP8NMyJo8dhS14qiR-4TRMl", width: 4192, height: 3144, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103915301270882402009\">TK</a>"] },
            { photoReference: "AWCwydjMUteKRCN2e7W9j_N_GRNb49Hbsn6IlIYc4za08r8AD6mGfYIKe_7Dq5lSc94DX1sRY-VDzdkvYvZMVnMDf-PrsX9eJYPrt97pojVRn-wOIjkDHeUAUEd3Lp8kOP7_UHUyrJzwJJdih4PwPiEGqbawW3duLMMJcF1RMkzUmpdzWblocrBc9hNu5Ag3nwEY_FRpFKBwYLH_pKW_2VRLFr3wa-jy04lJ4MX9PWytk1PTZB8EPoXc-jzlNFa0vtHuECjq2nrryqSpft5fkoAoRZr2DtjmE-8Tv-2Zce8OD-1SvAGv6zlgyLFZEfRNuj8nBuu2X_jgVqktz6hcDaT0u4SqTiFgbRGAPT_lpJMiSFxO9DZIafVSlnFU-kTYO1Y7buAI_jyOjY2BLKED_3irmepV2745_Bj7kJYqFvGZhTc0Nd9c0CZdCFLFiDnbC7cj", width: 4800, height: 3840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101175900038204550414\">割烹よし田 博多店屋町店</a>"] }
        ],
        summary: "캇포 요시다 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["도미 차즈케", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "도미 차즈케", items: [{ name: "대표 메뉴", price: "¥1,500~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 1:40, 오후 5:00~9:00; 화요일: 오전 11:30 ~ 오후 1:40, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.kappo-yoshida.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11175386012556088205", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%93%ED%8F%AC+%EC%9A%94%EC%8B%9C%EB%8B%A4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하카타 하나미도리 텐진": {
        photos: ["/images/fukuoka/info/restaurants/hakata-hanamidori-tenjin-fukuoka.jpg"],
        placeId: "ChIJMbZHBYWRQTURAQ3oOmTrUeg",
        placePhotos: [
            { photoReference: "AWCwydiF2QoSGtrz3NQTytdJLV4EVzUayiES6YpclohatuyhNwCc1wUrf6VQ83vFhuHNplbVyaH2FnN94JmVcfUPZFobSOIORuvOVej57rtWNeDoZsFikb5bEX6OYjc7JqYGOCE1pIMHERZaUjsNRZMpBSOpifPuJCv-ikG5WKqUPjFxXyRyXT6CKvr3VpZV6ec8LmRPZBjMRDbcecZ5o_t5pbg6GSmV3uU9CDVApaeZ6Jvw-lf47Rr8D9QE_J_j9AjJios038ksE1wj-_s2GvGjYyLEN_TAMI3twpNGV9rvOR1xgBZ8rm_L8xf6QDCVyg-8B0FrEYADszVMtvwxaO-S3fbg1ePtK6XT8pHxNJoo6O5cN_G-McAN1svlhX7dnAJTAYovWWyObX1bA4YEeMEhqpt9I0BRDvNjETbfxkVrqAb2onU", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116646230000226702752\">水たき料亭 博多華味鳥 天神店</a>"] },
            { photoReference: "AWCwydigUkKKFepKmI5TaGr0N-MegLrVthyNKcO1zqSa0dol7fmNTvb0sAhN9EqPgEjpedN4tnxsLE7k-O5sasPWyuWZzf2G-RnxTeevBwOpDDt8_NOiA2VSZZtSuz2XQqVf_heIBtL0vQcX3wm1JNcYe2hYc13s0cG5hmMW-R2G2P-MIpFzoO83DtemAVWLBsAKReEhYWHvR2OURYUNMmLMTZqhxTeFi551ZiAH1OdDjWZK3jO7mub8BiT636yXxrdKwGNq4SGo52JhkRKZ4slU_KyFX4oVH_5zNdHbTUS3QxKeBI0Q6Hq4zuwpmlRaSYkHD1Lmgh4Js3FrsTxRDjwmX_7MCnntVNhbMrrNcA3ISjFduQ-Ad2n4MYstn9TvHYSesTCEB-XX8NzI025TSkNSrNII5CW9AYEgWvP9Egkkn9ZeBc9PHCIDJkXXOvCBCQ", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116646230000226702752\">水たき料亭 博多華味鳥 天神店</a>"] },
            { photoReference: "AWCwydiyLMJub9FW4rVNSX0qHrourbodTZ6-i_vyvDj6lhmJor7qM7Celf3Vd5y2kDQ5O5VpatBwaB7A8pVvvdNQ17UQyma7iPsaHprT49NkRE-rkgGzBT5vaAa7PJ_g_RyC0CC0z_Urjoxx1EqrO5uDCgQZuTcNwHL_qyMTrtSs_sE0B1RbtL_nWuXFRhLOioSFhUZduu7fkt4Ke6mmWwROnaQDLYNQClwfHNyh_NqWSjzgMf2PF0dVR7rII9JuIn4zvbxrEq6R1lKdBgp0lnzZzMzzF2mH8gV-Sk7Z6BYT_DNPMHdtUYvJBMmwXMRIfSdOXlKcN_u_g_ZosTjC0guO8FZ0PA99XOpYA92E_4TNJ1xpO-BAthcnuZ3S1I3dCkyeokHf_sAK5Cj0gmJDWMH9o-GpLCn3PqiSSt0FvwUawI1bsWgvH0B9LMv_7NBIzBRD", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108148293557684754972\">Sandy Y</a>"] },
            { photoReference: "AWCwydgPjjmbT2KfbPPJ9W7zILQKSUiGhZKweBowmzIwY2tdMmtNBr9TAAem1JgG9LdBBaY8n4uwljkK04wC402Hp3FDJS6dBdn3lKiLvj3O24jucaUvTeEW_Shjv-pwhjBtzNhgNw933Q_JLPSb8oZDg0zN8aKh57foVazbndQGbp7ulrG5hCIJOgSbQ6ug30_Xd9UjFDYG7DM7C6McbqlcTNMqRYUQYPesjHc9cJ3RFT9HVe08A6JI1k7K0snjg5Cf64WzRtd11iAgTPnutIUjEXVk7UrMZxsnQOAZO4ispW9rSX75ekhNw4Vdp3s6peAt6IJEFvj6NUap1O0MdygSpG6dVHSPD_-i41PQEKk6LIWcgVA67q4mrsOtZtVaXUbUcYuPtRnnWawdZejo-eQg6MxBQxnPqo0jjv7jTeztDrSmYx8Tt-QHc6u8KTo4r6-Q", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113266094942693131843\">杜WAYNE</a>"] },
            { photoReference: "AWCwydj_lEypSzlweETBNy0Nb21acikq60mvvDjrMHcAZCFvxCUSw5UxmOC-8U4JJhXXLg30pZG04NBRQMs4uNAv1UVJ1zyFGcKIxw0jgCfUk6NWMgLE575a16EQsfsyLtNhyeUG7XIUV81MH0PENlS-v-nUpPU9t2o6xNEcXMoha40Ngk_vr53f52cr4ua9XWUg8Yyz2IUHrWQxSz5tt2TfF1XdF7eT8tnQdnOcSMdOLjc6AmTjnyIrzR3hH2qOtJRlct3Ui--MeUGGDr8EVcLxlJkAIhJ2aoJikdZ6OsQ-7uOQnMkcbPeEZ4WKqXZ0wSeR74WEQ9UpujHSCCZ8o_lHI_-Fj7mH4cV_zO_CjlwQmEqwqYH-DPnbYBYhsmcf38ZuuqXxeY9yKT3o83jwjKz2FHPUz57Oy7vmhcGAQ4Eml0CPaUQ8s_io61d9-Rd5L5_E", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100969958163466071758\">Julian Chang</a>"] }
        ],
        summary: "하카타 하나미도리 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["닭 전골", "평점 4.4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "닭 전골", items: [{ name: "대표 메뉴", price: "¥3,000~7,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hanamidori.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2104184371828536642", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4%ED%83%80+%ED%95%98%EB%82%98%EB%AF%B8%EB%8F%84%EB%A6%AC+%ED%85%90%EC%A7%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미즈타키 나가노": {
        photos: ["/images/fukuoka/info/restaurants/mizutaki-nagano-fukuoka.jpg"],
        placeId: "ChIJ2-iVse2RQTURWBn-38CPmtI",
        placePhotos: [
            { photoReference: "AWCwydi76-TqlYZ1nP2IxYxKHky7YYW7EBgHPyuAkghuxUZZwppPY1njkyITze1uHVQlWRbzx49F6RdR-9GwzjQ1f2OPYC8aTfL61OdM17B1tXtNl6eyYMOqIvjBebVEyTmluhiUokht10XzvOyXwbOoJGuhtOaBmakBy6pnJHA8yX8O2027DZXvqoNrxKZDIizWk4HbrgOKTgdPPDYtp8RVfVuwfvX1DDC51Wx0xpA7SFLSSCsM5oeRkei3nHIbGqmA-1wgzKJ3GAv5VNzJF-bjS_Itx0tm0WR9Qybmv0xjfnnWbtiVjdTiTa1LOFCmLR6J2psTefb05e2ByZaN-UTP6aCoRpmc-31pqBh3bsBcCmTSG3VtuksQFMNO-rfrWfsH6u-pE20iBEU152OI-d5PXQbS2nWrOUplwJlCUk2Y5F0oBo0", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101424280610722654048\">水たき 長野</a>"] },
            { photoReference: "AWCwydhDkKllQCVp0NX_CxS_L1BC0GzD73UpHjKKXCIYU0sUm24vhaNtEwr_5lHJjI39CCqi0--hKijY9YFKvoEMn0kOGZfECYn_KYdX-3c74TLfVyDhBaVwxdA9MIA9v_pHqUi9rfj8CrpZ659LP7rnd4dy7GcxFYEFm3BCNch_OC-0urShu2pClwLiKuoMq_ydSE5AZCmjyZbgbtCTecIQqlOL2marJsl39rkT-wIUY88gSw-0AqLy1lDBj94PB27Z7Ppj53eHHx0MxsWF41cppZ_H8t6KK9onjB4TM2NVUH5D8ZpvZjQBIK46kjhfx-W-FeYIujQN6ZegST3afJ-tQd0yZieLM483l3T2z97lPrP2pjDM3SvyuscVw8qbmEJc9Oumtzpt7YsNL6oo3t8QdabsVjsHL5Zra23BP12KMHwqTg", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101424280610722654048\">水たき 長野</a>"] },
            { photoReference: "AWCwydiEUrYleQvXmHkSl2v9484j_L2tTWtpBeO2Ph_48mBJuYRnuoiLnbSPjXnGTXZaDmWIaxSRnDl6HS34aKMyRuyHhLWw-eCzOoS4H3tWDNuRFEUq3IBZC_elRAnBRgzt31jQBHFGFz8p0R39T_9Qd_bh1Bfjc8vSXxNuktjo6M5tll9ZJYQ6g4Pv8gphXA0bhTnFCTHvW48t9c3Hl3ZEQM7oxjqbI9arwstKWZeAXD180buhbe0ZD4Wkul03duM1-nj0i2LReW2bnUCOJWMJueUp2QbYMco95TnNlF_2r7if9ZdeFPyN962w2hq0OtMk-RZ4xkAM3cO9wmC5U6qblRrdY1px6wNJ4eQx5aad0Yfr1StflNTt2bTmAaq6qlWhJquHzoi4Xt_5w4FPxbMpHtt2PViT_zgnJP8cE3SbGFYoTwzLSalzyPS4_zF-z9D0", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103096497076899842488\">きよちゃん</a>"] },
            { photoReference: "AWCwydjTogOlwc9xwtjrtVWdpKgAT1wmm1P9ooL6WKYv7Wz1vsdIZEVzL5n1qNxX7idu2_6PgZOAlPv94CWpew_zviGSoJ42qSHpLrj7d2Kk5V09NVhxvBVgBJ41y4PTGV1loBX_BjBlW1z43cmZ5bHVBnVhoUfdVOqMwnUeNIeN5BUQvrMrH477hSd8GFOxGMenKGIVB6nNcnJMYPVZz7YqdPyYEf2Qhl9rM-sT_Z-K5OQIERUYl9-L-atVCfTlGHykl5I6tE91BWP-JhAQC4bppbFw1e9G7msh9-_EGM_dsVnZFwIRxlHb1Xr_mq8mlikSg-jFJf8cgO7LoAQZAciZq0dYoH8sdGPr7nLJ8lnIfBMowcZp1OYY7YGFMtrRIpBHpBcOgvgbDjkbBeuP8U3B6E8ZSovnRPyYOPcJR1J82yaM4w", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101424280610722654048\">水たき 長野</a>"] },
            { photoReference: "AWCwydhu6fxlnEM3TmQJ-63803rUje5h85fzYm_1ACWnaXyD-CpGTWmbdjVY7yPQw9XcdeGqLeli3XJkB-6Uj2BZQJhEBLFCpjHHJ9c_HOw-JR4Q-RRJ-r2pfq-A1Pb7kXPvhtm51JD_gARFPuuldhEnBGBdCEOPvFxv91lTy_7O7HEqUpkvyWdOgjAG-nlqAzvPj1NzE6lrLtL5bOHTGu93Q1yrBMn44eis1gvPBF541JnG3YUOUU_R1PjhF0WzgykXmGK5tjnwNAEy5CxkjnhIoSJTw8eLkkmPAQm3gzlz5SpLy2TBzGrqzDyJk7gBX2XIzEpZNKE8IF_CmUi8v8pirf4fcYOcPxzej_5ZZserV88psjBSAQsra40q29vcspXxgAc0DOf1Uf6Yl2_ghfJr6sfIk1n4jRzFYCsk_np_QRcZDXOD6Ry8_ngp1KxJpSpk", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109887183476501403747\">小野寺憲一</a>"] }
        ],
        summary: "미즈타키 나가노 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["닭 전골", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "닭 전골", items: [{ name: "대표 메뉴", price: "¥4,000~8,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~10:00; 화요일: 오후 12:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://mizutakinagano.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15175599952932772184", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%A6%88%ED%83%80%ED%82%A4+%EB%82%98%EA%B0%80%EB%85%B8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "요시즈카 우나기야": {
        photos: ["/images/fukuoka/info/restaurants/yoshizuka-unagiya-fukuoka.jpg"],
        placeId: "ChIJEdRrGJWRQTUR1EMJZc6h5v0",
        placePhotos: [
            { photoReference: "AWCwydgxuMSgIc6_MiWoMSjxFZlnpmHZijokH2sEooJSortZgQxpz4UtcnJ3Pid5PGyBJ1uFrjfVzaWJtass3GQVnNKneC_zmP1oFkWSx5_ZU5RLZ--lrVKdD_JiAUUI_nCPAdpwQC-5QxSGOgM_Rgwu3FNoFynVnET6Fpr5SbIn1akPAqaPRvGp-M9YHtzjI_R6n8pPbagD4UrrgoohwsZQlscGdaSZwjI9h7jdTuvDmtUdofA3lNFqSz5Wr9ytXRR-3EB-s-ALAgIkv4Zmw268pCN4frWnDuCp7Es35CZMCZt5-QZ-oAIjOVLJxqL3bCSov2mdyksKMXHG2d42U0E7akkww18pd8epkzX0OizDQr7Nh5VZL7AB_RTxR5RPZ1u6UClL71YfjqsYvp0RiXcx9_67gnLh_oJBKi29oNl9pTvbgLktg4RDjn_3vTLHUg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118003145696835242980\">rn_1604</a>"] },
            { photoReference: "AWCwydjtGGnfBFn7jaujaTrBQodPa8Ha7NRrVDtKpCxYJcaicdcJ70oBN1HHlY8acDg_vePY5nooJA_EZUcFeekiUuHrzUND0VzC6a8SxY6hMDClfN--bwbwDRYT3zM4tvrVSIP4SjuNalAb1rWoocX6YvWQusOkOQTnQ4FAeDZzxHEqhMYEIUF4p85oOmAZf-bKByeNMUWmKg2is2vE6k0msaDQoDfmQk9sSZgs2-ZJuO9ifH2c1bDlVMgWvHhGyOOUuDMlmmndtlMsZv0G7EJeivQime3hWipo2Fo1yD2_IJ_11cnqDnpYBRCz1RkTN9sN8gwF2qXrCv_GgfGHAjTo0qJ_rB1BmLKQAbALRpGWk_ZUrlpsjf7EgJW10etYx3KqY3-ALtQiriHAmkq602wm8nueMIbM3HTFDKG-JaAhW-9IX0P24hvY9naMfiF2-g", width: 4800, height: 3599, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105274892650673701981\">Traveller Jun</a>"] },
            { photoReference: "AWCwydidj5TbrsoxAOKt8sslx7fcJbEuuwB3Q4BFdkaJiqHtOm4G2IWHUi9Qa3PUrRJ6vBXX_m-mQumBdOuOFzlp1MUXvbjbIlMClv6Pbu5geMdKDrhA9kVsv8zOQWHW3cH9H6k5u9CgUnqQIg8qKDjLEPlnibEPhsbIw9kufFdJFLk-KnRl4WM3Qw6peOhfNNB16MMbb2rK4PPiD5CV3zOK1xaW-XPQ-BpuTqdiJJWaZOJ4MK-q5an2y4iVSOwMwzGD2piLfVpojvU5nWx2IbSB6zUbqiqxolvKY5L8YlnL0hpY5knmxjpI9euyH_9g1G5vMddVvBDbYMFkZt8mCq0TQ0u7cW5qsSJ20bZbXeXVipXEbpn2UMR7-rWwf_AXVqWo6UMF4KXlR8QJ1xJ5853xsGvEm85VSoJkFSBZDs85zm83UNxJQSz0hmyPx73eiRnd", width: 740, height: 481, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103497084078141259434\">博多名代 吉塚うなぎ屋</a>"] },
            { photoReference: "AWCwydhAYI43MzI-JMYFldgG9z_KfR9jgW4glWaGhcRGsx09yAWTqJAruO767Da-ahBGqIljKYWk-V9apsTnN7Y-JMbFPyJ47VWicUryoQDdSPa0nmTN2JsClNjwQsIU55cyFmVDnvkKveXhjVBuIpy4rSQzNzjFCRB_EgkdqW-A4_nLdegkP1En28YycG8XkGzdTbOwLXQvh76f7RNCXXC2fbxTVueq_3WBGYAbSej_i7jE_1S7zxw5pDOrNbeA6JhhtnpiSnyFcZJIz3iNwnT60dfrhl4a_dWPr2bDO5K5HF4Pm6OqtUotA2vs6_KtrrczW7jIeMNDs81E2XVM8aEnNDA_7BqYMaszJAgBJKfYvpGKnY3BAzztrw8LzHdd5_3Q7_f-WIK8PSbugYi1mqCOUNX0JP1bSZXlhhNHO7MIwFg", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103497084078141259434\">博多名代 吉塚うなぎ屋</a>"] },
            { photoReference: "AWCwydjZRN6Rtcu8INtx77Pk0RNb67FJ0tpxedvg9SgPTfR0HGj-40ZPqE4KxHwYEa7CGM7jcNuCdeQTGMeLx0uU5gtEi5beG3NYufwfvOEvpDeqOJFNlrf38TuY1RA3v8rEYYX0jVFOv2kLVVd0xgEorHnFC4x_7wxKXjiCyCCpRYNBszODi1dH9Zjo-woavFOVxN1h5gm2OqIK2PNnzAr6TpFUCLxMmIBxV3VMN1vFhoIhhJKUv74eJHV8qY_Qh-gL8muNSa3zOXDXyf06UhiLxT_4a9n09ggmfA04Ib1Auokg5dPbHPbYn5F8YbQ9jDjCeUOdzwEPpxw_fUrd4bWY_6FTUPceSIA7FqG9yJ-RNhTVd-7-apqVPqdvV56uSO3VLdSVNs5u75N8qv8CzmpGNxjRFaDJUdOrPDqlkw7JGWeKeUXlS2k_4vXXQ9sZJg", width: 3695, height: 2771, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105274892650673701981\">Traveller Jun</a>"] }
        ],
        summary: "요시즈카 우나기야 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["우나기 세이로무시", "평점 4.4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "우나기 세이로무시", items: [{ name: "대표 메뉴", price: "¥3,000~7,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18295488444069659604", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%94%EC%8B%9C%EC%A6%88%EC%B9%B4+%EC%9A%B0%EB%82%98%EA%B8%B0%EC%95%BC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "텐푸라 히라오 본점": {
        photos: ["/images/fukuoka/info/restaurants/tempura-hirao-main-store-fukuoka.jpg"],
        placeId: "ChIJq6qGUheQQTUR8E_T7T9tsnY",
        placePhotos: [
            { photoReference: "AWCwydgG3jaj4Rj_EzSBF-T0KCff2LeGxXqgml7Pt3NWjFMiNto8IlhHPChv6NkcR_UmuCIv2oXTBvyNzZeuWlFcm_X-cIF8rJAMcaZnEgCDRIQqJNAeMUk06qiAiGqICSMf_azKUCDkr0NKShnEVORl-GIk9yzpn4id2s_OjV20AM2MtowED9oEzBxEL7c9xYHWzdGQEv0TYp0mL8RWiZs3RYJ9YfeUZTZ3VB1n1iLCBbfLMOI5ecyciYPWHIrbnXe9FliJMQXxoOgY42kXLzZu0YOrz9r9hzlOLvwAcZZrlE2JI82SfnG8yab1_OJ2VloomPRnOK4Mvd2mcuqe1KKHAYC_uJnlsM5MKHEWxvYsj9fRM6qzPS_pDrf-xhkITRoqpTLgxKOuz_7nJ4MRgRLeih4ji14Gnhb0ExVhC3-yp6ThXCcv4iaEypuu4zAGfWHA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110794923356130822118\">ハニーワッフル</a>"] },
            { photoReference: "AWCwydhvhQ4h1Eln7TvBa4I7u_ugGvqBxKMKEPm9WltuQrw8-4OkbZj-BAUtq2OezBqUT9C5770EWm-q2OPMWqQSOJCgCou1k1JHURr7l5eYncNJKciiMjaNhXJSe1q1p6nqfVNeMb7Czslg7V_DQVG8K3xULzZP6KSDs5bmlLyFJhUydrte7LJfkJ0WcAXRcN27PraGWJqEnoCQ_hWAcI4hQa7ou9qi2Yk7Rd2IHLiQviOCkD1nlV-42fEzmxcPH3fxClBzFuczzXdE0Yz5NzET6mqm9-GCbxxt58dU6zRrVLNZqUTH2FazsNraX3H1IWRBpzOBPjwqgi7H7Lnj_LsQFbnjhchpyDrYRzsurhpZ2qnqNF70XUtdDhc5yxstoV0EqbJ_z2Y2Mg-UWZQWA9totVsrcqlYFJAEV2vTRM28Lqp1V5IAyWHKI5NCBvs-m3Pg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105801007077236272331\">雑賀平治</a>"] },
            { photoReference: "AWCwydieKb7YPBl9KY_GCkPq6lWFwM2DThUn4KdLOosynCZXNoXWGr884ghcpZchT0TP289_fo0RAu1MI-mT5zZDH5WnN7uBNtOozdX_qPv7rjW_aIZlkmb6LQT41hT_QRdL_Oiaso0wlRGR8eSP5r8yGCclOOCjY6j7KM45anxifekToN-WT2dRgKbPUT1WUNP4JkPhkizx8W2gaoVbG82TLpdXc3fRsVZvNb8DVMbHV41lkJ2MS4dfve6tb1ERTphztgYDsUm41RCOJ-gNv_nZGs-VAoUgvokPUVf79yoAeyRGoOilJeQkOkfBshBK8jjo-gbgoVf1ElgYUj5HOHvyzeuDA2Hc_6agv9_WtYHZiNhu6OJg7ff7yrTE5JCURZLaDJsSw3P_HOD_AVMD_hrx64J6xvY5rTt8rraW-dexnuZPmhZpS1Dts6ogRQYCJS0C", width: 942, height: 630, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112030660535184005178\">マリン（marin）</a>"] },
            { photoReference: "AWCwydj3wetAnzuBsJTCKeLh3rxGj9V7lu3pa1M8yo-7r06HX-_0ZiGpN74gB8I3n9i8oav8JIiAVKP49L41HIustPbbaIYuiHdjQ5nEmG0pprLs678LFLdKHonK0yiQBn5Y3FYxzhcYbXLn86qDyIdXFcEWu2-zuuzbO-i9B8dCvwieQhSVSIE86DJW4EuL-ExNKyb0Ro2Bw4dGFltKPRd2vgmx04cqKR28SF6rKMSzBPs7wlNiJ3e4B1g7miTyMt7kzUcpJ65M2oGJZf9zjNLjYdW1bfpNyQe0eVnSolDEvYOQZM1_hy_tAO9b1FeFiY_G28HoQLgcHd9t7_RMCXOUfQakJMWjpZWuGbSwlKeVPI8IwxS4sbyqqpV4pK4wAqH_vmtfy5FOEEediLF8NNnXjjpa41eS8KpOJ3GFEg7c6R9TwboyXAaMnrl7zS3zkg", width: 1440, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113511414943723322017\">M G</a>"] },
            { photoReference: "AWCwydhPIhhGvzXrsEeQ1yzUabhDPOJB8p83g4BmTxz9pgTZdANVMU3IwZNhA57N5tlgYBO78MQ9i-hkO4Ysb_vwMXOyFkUGs-hWhMGP3-bqvMf9PF3G_mjiDm0trXLyIo2l5vjq58U1SdE3_f9VysLS42QPhc06c5TbIMcdCyunfiirhGM9AextcJfdIz0aYpEZA7SAfEe4BPboDaUBByfPKkWOrL53Br3_E-k8ZwCtHC--oAGbC-vPLWanHOGxkhCM1-nT6V7qCpun-d5NjpXXPElqzBPHQ0RQ0gtcCQz6fNh2dl40EhBQU0TD2Nwnz1rBVW3RXuyXK9rdLP6S2uGQ8k7xQi6po0tMxQg4_6aT7eqHBnA25yBWxXuxdu75JnhJxCWuwmTZcmL67A351qShHJmNMORc44Us_GvrQk6ix6cesQ7kKtMOCL-2u12ikQ", width: 3472, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104792296469819060200\">ぴよ太郎</a>"] }
        ],
        summary: "텐푸라 히라오 본점 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["갓 튀긴 텐푸라 정식", "평점 4.4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "갓 튀긴 텐푸라 정식", items: [{ name: "대표 메뉴", price: "¥1,000~2,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:30 ~ 오후 8:00; 화요일: 오전 10:30 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.hirao-foods.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8553018763670409200", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%90%ED%91%B8%EB%9D%BC+%ED%9E%88%EB%9D%BC%EC%98%A4+%EB%B3%B8%EC%A0%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우동 타이라": {
        photos: ["/images/fukuoka/info/restaurants/udon-taira-fukuoka.jpg"],
        placeId: "ChIJrzUd7r6RQTURJdG7o6TxEMs",
        placePhotos: [
            { photoReference: "AWCwydh1zc_4IOl6b_vf8qrfC6t2v4u8Hi-3VNEtNqmYk28h28JKtq_nFQbL_MbDiHzYKt-uifaVClLPPd8IK0uE19epNJ-d7PnIYCPTX9lj9ANPFk4ATR9PJ0teE5Pu1keEIo0LZ5SYcvOVxDNzTbWcnsIFfXBotM39YyATPM1JpWhqqLGzPIr2sCDma2H99k-i4CcOlJlSVVxKaM5Pi_krVmOES7_mcIOCJxXllZ_mf6wuFouJ8U6jixL4aOhCCe7sD_9wGi2KYMAUSKJh1eji9Qt3KCIwIkK1yVJDGolEfrpxDWs0a-W9ZbeJcqHE4IdR-u9G-bvuc4yGg2zryKOpQz2XfTb9iXqWKdofxVaGCBNzTHPTZmJAArd41P6sUEL6Tss0NkTkylufC2lOvkyIv62sDrrCYWpjO5QRPevnHu0wigFGVHYYqqPFKVkNpLML", width: 4800, height: 3118, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104313685456290974969\">todachannel</a>"] },
            { photoReference: "AWCwydh8LBCWqTUwARzZRq5MKQi_QP6_jmy35x9VfCIC2rQGHyZtqfcrPxKKIcnPmnU3fSnZsCs3iFvBklWCRnfAwtJLwohr-X-9cFc0RT5Cfd4tO8X_u3uyoTFHQ4BpX4oUaFsjPYG741bYOxurpPNpIOtxVyx03YiVjn2sGzTAIOkAlr_GughfiC1FNo8eSIPqWVEnUpnE019y9K-oFzXWDgm3ygElWL8MkhFIW1iIsGONYUuKeUjV6p_E4U4p03OTlJ_-NKS6DejRyMbMiOuphFbvaioQbcm_SXBJtAd-hvpcLVbXDj6qXHotrI5RCKCaKLPjkPS-Z3_VsuzaCnV2irV1nr3sEpPAr8XCQCJnUHTDAfzwW0u4bjt1XnzCfWli7men8d2oFG4_UFe-t2dfYhicSapd9nCsrddJYsQXGzjhOl8", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110569263174425127333\">아가리파이터</a>"] },
            { photoReference: "AWCwydizrNBBkbYizX5WZ4uL-RwdVXeDKd7glFjPUmiRqHbRY50viqCYLx-XGFKKA1hAVw36oCRgqsg8VCBSvnsyMOYAwHWYar4KgYF__p2gQi9JPZXFMx9385SiDt02U4rSCIqjSMKfDSHi2B33If7I-4hZ_xmwpC-mt-LTBUY42dv89pdm40a-ME8Ukgdvoe8NgRVYzoQ5pzKuyNq2GWvvcUQdaBRDwX9H9QsngotIjEER5qnv7ybs6VveicNV2sD_0zZtbPQPBBUjUzmf-S3XHdOq20WQgRMFjIk0TihfrC_1FgmpwK7QwH0pNtIwk-nLUB7bMyahiFTzwmYvEqPMLHhYgQpUE2DMBvk88wZyDJOY8UZRex3Y6F6D42X-UNn0JbzpuLyFZjLlk1Ne82xQHv70g2PJAw2AehuAuj8vgt6bIiWeensTVV4WvjNNrw", width: 1179, height: 871, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103101355490070282293\">シンバりおん</a>"] },
            { photoReference: "AWCwydgaIpHWLcTCqIBhY6dzu5BPo7p-sIOFCV2odxd97oFxJKOYTJvPNncbL-oKRSa_4luVsVCp8y_XeTFWER4dya53Ax0x0lXxWuUmR-K40FUzaZYM4kVfZ4D_JIR8A-4JRv1g2Ln9AlY4JrF5GwyWn9BFmm8vVIo8mH3NJ8dkZb9-UggrMRDXnpb8if3oJTJB-AsLjmlwoard2sI85yWfBMUDYKXO-_FE7PFIzcAfqldYiUMuco1OElG8SpV9yWvAfkLsqxQklWd_7hN9ep6aRiSNVq3wBk_ZvrJpJYAKgvBoJwmboHTpdQwovqR8thPNHBDxloYVu-EldFTCTNP_64fw-QAwOKWADbkD_Wm-dxnpvHEcXpm-fN0LKeXvK7VQ0TlhQYX5WFFOZ6qSKyURo1TtPyq_-UQzIkn5hdJCztk", width: 4032, height: 2269, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111864842113246072522\">うどん 平</a>"] },
            { photoReference: "AWCwydihqxcrXnIhAuHqKEq12f0kWmIykJ_mfyJq0v3qdHk5gMzptEGGj1pi9cR6j69Secvul2XQQpy-xc4s8F6IJfQ8mGB4GE3eAaXrq5EEYlgYaLgXB4bDzg63lPz-F5tzKTzYCyaTRpCVmk9Lk4gwJ_o5F5ZkoEeLtU_rf8C4IauYBD5dAYKxpf14mhND08Dxm-x190NmELvJyo85LLlWzOYW_RS_zEG3EXeBjDBec2RqCpeGoKDIO3ZqS7oKSv3yLtxoWpA-RGmHk3Jo1CH0HReg0cKMUc0u-IE65wfg8xyOSUyuy1s1Av1rPTsT33SS2byT6JpdJPYO4YsxL4WEMQu9_vT4ApOsjS5Nzzm5jB8qCqmk7NU6N7Qy7qGerYqjc5onuL6QCBM44iB7XShE7zGIhklbjT-1WjEPkmKGkB2BB644n5QQbsIWyO-GOQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107623668249543975082\">세은애비</a>"] }
        ],
        summary: "우동 타이라 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["고보텐 우동", "평점 4.4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "고보텐 우동", items: [{ name: "대표 메뉴", price: "¥700~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00; 화요일: 오전 11:00 ~ 오후 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://en-gage.net/udontaira", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14632460878750667045", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%8F%99+%ED%83%80%EC%9D%B4%EB%9D%BC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다이치노 우동 하카타역": {
        photos: ["/images/fukuoka/info/restaurants/daichi-no-udon-hakata-station-fukuoka.jpg"],
        placeId: "ChIJAQBAd8eRQTURYeZOcgaSIGY",
        placePhotos: [
            { photoReference: "AWCwydjUfyeKsaBQDm-WAjhfOAIdxL2ijyWdzD_lSKE8idrh9Sqtq0dIp6GN_7u348AEoUl1HBdRPaWHn5tniTzhuKsMe9VKIj6TWPMhRo7hi1MSj6oQ9Pyh7dmLvDZbWt3fVQTQpe8AuspNMOK46xLpfuS61pidi--MMLBuHHa3c_q3ugQvBSaWb-aRxwZClkc_NnZRN896FH5UzVe24MME7D83FNGRYSVYymosPQX3Xq_tY3lQgMTluLHGqk7rGZM0Ex6yMPj-Zu0ArARJxwEdexavtIegiUz2LZTs9BA1PzsJppTbR1duYgm3IfHeupEvba5FnPDNDjce5p0ro86nSAmGwiVs76zlHtvGYSQFDxkXQax8lwDqTIHwlbIOF8exNRYJj0NM3nfEXb0HuKqvMK2lHAxz4JLz-t2gFTv5Bj3T80l3", width: 3264, height: 1836, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110552576470301582244\">mong Ganesi</a>"] },
            { photoReference: "AWCwydirwHXtEQysIQAJAFBeLDnazn3iGafF7cCNhkqtqBj7S9j2xBpomiFA-0f8pl-LdOgawiyKzVwKpc0GuNRDgOvT7tGzCOJI_668gtoL9lwMCinBhgmuChPNjv2fKmdYw-KNs3VvbmfcdUsd-Ya1q1rFTj2xF_pzJ0agNBGWzxqZo-7xHtvDwkXNAbukuaDxj7fHqrUqLwS_Gs4gfa3m0A4fm1PsXCICS_RwQk6K3SYQe1fxrfLLb8j8W_f-33oEzV8x00FPUqXiQzZ9sP4YYDQfRlxsVix9-yPODr0L7F9QuvWxGK4fXa7g4eG41CITzJOZF0SrQ9vHSxfPEAqE_Mak2nl3D7isOF3SCG9akBH-HLhi_GDVnwbjQWRa6C-GtewBdfTVkK6fKOx3DLciczD2YkCtVkFNAzmj43CQoRTwVg", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109323493726112328612\">村嶋智浩</a>"] },
            { photoReference: "AWCwydgY0JLk0uMdpt4gvhV0RBcFen670Tjj9YasOkYYhMPAdH049B5hJZOrv3PDy1uV6ktF6MaBwDuJ8AwPO1aV0N43VOrJxwSnmH0H17_A9yRr_rEHvY8TUZM3iWP147RqcZfXAbMqyNik2v2-BfbpBZHmQVpnAXgelaPrs8lRZN-J--qK8F3PZYSe84rxpf5n1NfMFEpvo82MZWUMYrbvuOkc9HVl96G1EDGe0HYvsNujdn-WHeXEfODfMljydNsMqnqwYuch3446MTMpj2gJkDIc8Rov8GLFGSBFvTnDIW2wcC_4daqqD1IRgvLu93iKdm3p1lmBa6ccnk5hOUvKveuqt-xe1GEbPoePcsHPFG78MMQpUfYCHYkhmmGB3H_3jR7Ks9i_fIw0wIlXF2KGw39hLNhQL-5HLDbkRub8MimOuVBpXCdCCy1RzZy2bdPn", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109004067625290976429\">melon soda</a>"] },
            { photoReference: "AWCwydiCmyTJBgINLJbLEf2c-eFm1lHBsL2J7w_eGdXS_2V1BqFEcNLwXpM2SX75Bf-2rVG7gZ_Z-jXNDDVXE1CjGzlRVfMr52KcK3WGl4lDYgmjqmNOnbXqtgHxB41bGibVR9gCu3u8Z66BAoeViud_uuOr7praoar2QK12r6z_w8avSAsusgdh2VyMpn8RXb8JNLvcU_llrzhBG2aXHdM5E-hNXqMOBMYgEkquSRt-fdahGHOUxJ5jMs3hkqUESHViZSb5GvRfuVcsoBBNq8nFDSXEZN26aKQzBZgPd8No7iG49C_nsnlc-BBg2zsEnnlRIlzrGqB4TVhj9VBju6P-VssCDnGO0ZhL950Ho9D21oQxnEmnu5Dxg2kDkPrdq68ZFLhXHhZ9ayd3DF7NRwIPeUyObS_q9qAcb_0wz7w6vWUvX-v_mfYpGPfLH8Le-RyH", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118223462815849293129\">변주영</a>"] },
            { photoReference: "AWCwydg0HMdSkUpZcy7dkUyIBoroo3IRZHKLZgum-WBZR4lhXFmdnjOi2GhkE8K3Z6r-w46VE6-Sg95nUT-Rr-77Kw1sEbTdwg3L3esM9iffbMa1uvFk70m7PqSs7cm9wZhQXXSAHke9y0DToF9kgDx7F7Z8Cktj84WQ6P-bv9pXAfAb5RQYvrZCc9U49x05JTTBEMWpxxa7FaEaJhXCSsRf86M3-xcX0j4YoJq1dB0_SLHV2loxpJaxCTbgH7EPWEzs67GLQtViTe-4fuV4SYJxqODWd2znDd7lkZh2p8shpsHJgABqtFKMt24Dk6PzaGAlaJ5fBjiZ4MIf6aA1yVsX13llVelpcxsu-ewZqBW7TTP4cs9i2w_GygE_xCAch-k-qLXcqDux2zZg8vfC4JErBcrldbANd3e78VALax8wwZip5L4Y-bk-8pKGDvnXtfqh", width: 4800, height: 2698, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111151091345034915329\">ユニオン長崎</a>"] }
        ],
        summary: "다이치노 우동 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["고보텐 우동", "평점 4.2", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "고보텐 우동", items: [{ name: "대표 메뉴", price: "¥700~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 3:30, 오후 5:00~9:00; 화요일: 오전 10:00 ~ 오후 3:30, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://daichinoudon.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7359042347508622945", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9D%B4%EC%B9%98%EB%85%B8+%EC%9A%B0%EB%8F%99+%ED%95%98%EC%B9%B4%ED%83%80%EC%97%AD+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하카타 다루마": {
        photos: ["/images/fukuoka/info/restaurants/hakata-daruma-fukuoka.jpg"],
        placeId: "ChIJq6o1-ZmRQTURHSvESDjZtE8",
        placePhotos: [
            { photoReference: "AWCwydhvRS6RSD9wILMLyOrpGkUdqIuH3sKFRbmi14v9g5sJuSL38PhFlHyVPtFeIQy-zGI7V0K7tgC32QpxG4aNdmyILPcKYBjVZZTEUYCc1Fz0uuOZj3RI-Z0Ss2e5Ax5nOCwBLTjuBUUMneReM6RF13J6zRbjTTfX_bAnI4BpgS9Pcrc7yOyc6n97V6VQ1G1MMRairz-kOOogZdUm5Sh9cOcmVx7rKi7NYHTl9mDZ9wVus154rsaQXTD46DphmLMjwTv7sIn8Ni8aiQLpuF3rwnr_yNId02TiytInBAfbXuzYQXTDCpzZmJcTGKkLaVH7aWmhlsc-HGN_wdf3mPb-ee7-JDW9XTHVb3xgM_YBJtNe9MZOB_FzLxjmncPrPdoAoryws3FbsdqzwPTDGsFl01GkRB29gz-Krsh-eZOl6xUVFVXg3Yl-Y_nAHYNZZckl", width: 1996, height: 1630, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106327720753914904617\">YーS</a>"] },
            { photoReference: "AWCwydifiiyUk_gM7vqJI1e6fn0fyfrnK3D1uLejTNjKJlvZx-5sNo4inTYgg9vYV3imHrolpTv0UiUu9xEMgY8ujdIP7gqoaHpL1Jtzsyfqi-SivHmzL7v-LGFeUiXwAqcqMOk_UcEEjqSqxlDTEg4lKpiMMzNfGUcNbRmDx5il3ahOQx4xyySj1E6I_AU_gh8UdHV5ZbwPJyzdWVDazXjY4G6RadUyeRQxNfp4GqDCcH_CoBleYjjjJYb9_bkdAnWaZbv3OLjCD9EWRmT6aTg_5qnEg8qJjbW8vdFcJwCvnpoZgYG94C_i1g40BO-v_cC8PtXjwWlKhq6zqhC-B4HNNuEO1vJyrxpgnGdtWKdoQTb_rrtpXgRM6LV69KaJnOX6tE1sXxkyzcBxDDrpPkguRWJc3d-Lw4vPnyvfRl7sR_WS4zvPnk4_7fac5stgVA", width: 660, height: 370, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112972943531954304724\">博多だるま 総本店</a>"] },
            { photoReference: "AWCwydhMgf4KN9eeb2EcXAHCkpT6iJKgRA4yB5sCRLWKPuL0zGf-FKGswn7WdQjWZT4K-jwnivLxgEKVdf9BzKn19yGNiTaOJBCo7v47lN9E9qeugYq7Qw37Co6X3O8wLY8rQM5mi7RQauRXP2cHfRL2ZxG38FzZDcugYD_8PeOURHbsDeAVL6IzFTNZykR77TgqItTJKJnvwIB3XlWQTdXSFvnAEKpn-1JVYwbDCWJWfbkMlx0Kqvv04UuJoCsep-bJdfSHwc8irpuISLXIduyMCD1yNOUQfCYsPXgVLqOE0ukmVvAEaHJJZzJdsF6-6SI9VTRy75cggcbKqwNQ_MCUCyIEZCZNyiYG8yfXYs0lGbx_gLjpLVAd8oBD-CKOU7uNNqFV9laj8BnN8GCf-_8zs7ayX8wm9NaRvfObgDEZb4X1qLCed7-2VqTnw2tm", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102063935247344931119\">max</a>"] },
            { photoReference: "AWCwydguxbAvKzJ-aD6BBJdqoapQKCTtRrnyqF_woRXdXxyrjAUrJgGP6-12ddE5zLTJnIQFJV6_rqqEsyMxNs6YfPcp7t-jwQ_udlojyUNjfxI6YTZeqs9GSS4u9niJ9_sBubonpvHm5r5kgZAB7gxFNtw6b-rXZ6KxyJqd_TYHFwYJE6rakUxt78QX4sGHdM0J-GW3L7-wwYTa7zDGXShwzHiKwMuou_01ByNKmUnFtXQpNclxc50HVl1Z5S0wG9ou-falZb8-26hppHP1MI-f5X52K_Xwo-9yk8OtOaAy_FLJOWqm40EGIPbEJaePfTcHuKkPHHugdRJ2cvWB7JlDgVWgDp8YXc7f_1XJ1_ToR12ghBiVsTppbggmsSNxmh4EhYesQQX3EoFEMDmE7bLfEUBV2nzLtSOov-BbVztzNT2-9TXv3LJe4tZXap-qkQft", width: 1200, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112972943531954304724\">博多だるま 総本店</a>"] },
            { photoReference: "AWCwydiXZoi9wlodxkScE5bYLb9zY1dGijMSeSFUSb5nciBPyWR0aYupLP-5ltSPM1lQcgLONWgniKmaPD6PvGtvaMWhtCVD_S-157ospa5yDSqUdC_qk1FafK_ePVoU1vjjNIbTuBjHutPj2H-AUH93E9BJ9TO_mbvhOlBCqZMfJmajB8noCiXKMtz9wLU7VNJ5aaG1taExUWqBJ8G-o5scnmToIzdJroOtMl_kJGQ9aUehscfIX37TOLBGRzN2hx4cuAM6oWmf8j9-meO1hsxROcKyPbDk_8Efb8tHyyxXqxN_r52BGcBJm4oOAHjo24QMFX800XMjE1Vitz9xr63ouDrZqC_ad-OGFu0gNSdmwrTqJ0oXdSc59zoTI38fBV529SmIXSevGIBNhlwUDbcBEG8EHxCBRnMimG6lzmvc3Jqa-u5kOYpxXTtSqGuKDpr6", width: 1200, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112972943531954304724\">博多だるま 総本店</a>"] }
        ],
        summary: "진한 국물 맛이 일품인 정통 돈코츠 라멘 전문점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["깊고 진한 돈코츠 육수", "현지 분위기 가득한 노포 감성"],
        tips: ["피크 타임에는 웨이팅이 있을 수 있으니 조금 서두르세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "돈코츠 라멘", items: [{ name: "대표 메뉴", price: "¥900~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 2:00; 화요일: 오전 11:00 ~ 오전 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://ra-hide.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5743454260566436637", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4%ED%83%80+%EB%8B%A4%EB%A3%A8%EB%A7%88+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "잇푸도 다이묘": {
        photos: ["/images/fukuoka/info/restaurants/ippudo-daimyo-fukuoka.jpg"],
        placeId: "ChIJp4jr2YWRQTURlukDn-hRPMc",
        placePhotos: [
            { photoReference: "AWCwydgYXODF57QPJ_4cRszS2D6XEeIF7Ghr0MTVwvIgSGPveqYyN9gAi-zQqno_QbGR8RhIsb2bNfqFPkJ9tRkfrW93k1Tv64nH4uV0DAH9n3IdENsooepli4LXIg6R6y-vnYPZgoh_AfH6LOFlVVCAdkS1M68weLG2wMtIcCmZCVAcAjkbofCYUuz22yXXRlw-LoEiwCj2UKK1D75QJ9ShAe-cWJC8MPlmtFj8TY0B0FcZOOKWJ10midkqJI1ANFgxWw2kLqLf4twkcBcGMlW9G6U8_MBvZuOYbd6kHD_W0d093SeD7Z86HrwsE0HjkPKnNWJvDHqyHBbW-GN3CriF7Xvq-KDOwkyfLVZjBoMUZ4nqwQHudil-qDGAL91jqbAALQ1lnNIBXLnoKetVudqst6B5u9R9Ypb1xAZkdrvJyluvGYJX", width: 760, height: 570, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117721702877581815324\">一風堂 大名本店</a>"] },
            { photoReference: "AWCwydgLWsYhpe30_Or_IDmE3BrRJQuQ-DBf9mrAIyam3mPueOsThs5N9kEnt-rL2gyNwn0mMCKxDweZaN8UnjavDHNF3P7k8LqjhsDMy5fEXqnSQ1yH2BB_arT4if7lNRcXAbo08ukwo4VRpxiZd8RFvUO9aWVTH7Af9BGmsGKQNQgARf4FUTdo_rjuASswwbMcHk39GHe6q8uaOfBKHO6zI5rtoEap_dFearGvyQN74SBCxbr994wYp38Q4SYnA6Gxs0E1WYYimc0w_W1tB4gmP_YdOa7onoUNuAeOrgm_hK8GYu4VN9VBvySljkGEbe4WBXbiIpXDzpaSnuvxM6W7ZmxugC6JiNJaUiUZ1tVvXnWCfMOyOJ_51y92ermS6yR0z_rtVBp6IYXvxqjTx8JLzqKnVAxr4u3_5lTVr8tlBHQ", width: 960, height: 540, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117721702877581815324\">一風堂 大名本店</a>"] },
            { photoReference: "AWCwydh8LJsAnFD63a8B2tUTimxAOzf8FAsUeP1FqslrWxice99qYx_WiXTg-XySh0AwXD9HZz12_R5okV51ALtfpUo7Xpwe9qLQipPcgznON2wKuiTZ9ADtodfP0XWxLiMF8JUN4Huie3p6bFWkPGiWQDq0ljjy_AlCTbs0Xf9jNHzSheFWNX5q1JRJKmAas3OYQ5EixGdvaZDJv8R_BvLFWxfMs__JXVSAbjV1wZnG_R4fLMCBz6IoQ4MAcYmE7N1OSY-zVbIA0Vy-34tOEL-8zlC_43La0dPtqEDpISSvuI2BqZ-XVQOu2QlcKJ4sPYDN5q6sfuldR8rFyRupH9OjkI96k56Cf6RjYqsfUSWL-Nd6gB1F5Z7qa5UJA-v88pUkOIdXTOa8n_MD0kGQ2QMZKK1Kw3QIOZsHa0TLG-B26GQgCWf-UIHtmBE9IsKI6A", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116808022242237108734\">gyooho JIN</a>"] },
            { photoReference: "AWCwydiVdfKimmqk55fv8DKOxHxInMCLcTau9egSBhGwwNVu0GU7liV1_8LfGWUhFvU9JuveTrbZJangoLa8f0rByqeA3ZWBMKU_RuQPqWKi6oZHs5F_D--53BeBgzhzVDEvB2X_4c5ZrnoaHrpuzt8fIf2j6aBxMHea17a0XnmqeRh0bEygbsg8m7L819KtYCFuu1NHenyc1sMVgcitjQAx81Fq3W4FDwzJFb21NHRVV6yDYgdPBJgKjGNCu7oRhWwWctDX7Z9WTFguj2fEK_57wcbzzWTEnBzybQj11QQRsUB6QHZbvpN480_XgSMNvRFvJF3zcrN5ax888AjOPtTENXUPTMYT0ytgPINNq-3weBCd14IxivfaYIV_RT8avYsowpQa67HA87M6OBndu15uS5cEdSnpaO9XfCHdwVPvoz6s6pRkeY6TV8kk9kLSN-q1", width: 4732, height: 3781, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103915301270882402009\">TK</a>"] },
            { photoReference: "AWCwydhCStszXajnvV9CeOX6bDCHJ1UHGwNZDPqLlJrAAYbcLkoDrHgfSvg49SKDfhPOAhcHiTyV7beACMH731mg1g3hI5IprrLNOLZArGpVmTbMEOVPCIUvfeU5G1PH83fvk6t7NIBj1EjhEn0WLTolQ1fV-RgkBDo8cY4kXPP73D7WiaggEa0oMX8YaYCYA6eOaKdpF-yP_bFuyJsSRCqtFjZQy8vspBcC35IDeqx_1cOlDZiWEtwUPOs0Vvs36nFVIap6-45zyOiZpuYg338rAQr5U8na8M8Kn1gQ2r5tjyS1EkncZphGyvgpj6o74w2FiyeXyPbTNX7s4MfL_FB5QsHek3aOydi20cI8Bes1wPUHEdX73x_oZCUhyEw9Kg7cXYUs8r5CpsUdkD1F2d1pZV46jEgKRmTby80e6LDazehKIq-WfKnm4sFeUNKguqNm", width: 576, height: 1024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104910101014848099377\">Jay Lerner</a>"] }
        ],
        summary: "전 세계적으로 유명한 돈코츠 라멘의 본고장을 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-07-13",
        highlights: ["깔끔하고 담백한 육수", "쫄깃한 면발"],
        tips: ["다이묘 거리 쇼핑 후 들르기 좋은 위치예요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "돈코츠 라멘", items: [{ name: "대표 메뉴", price: "¥900~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://stores.ippudo.com/1001?utm_source=Yext&utm_medium=Yext&utm_campaign=Listings", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14356439771692394902", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9E%87%ED%91%B8%EB%8F%84+%EB%8B%A4%EC%9D%B4%EB%AC%98+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "탄야 하카타": {
        photos: ["/images/fukuoka/info/restaurants/tanya-hakata-fukuoka.jpg"],
        placeId: "ChIJBVmI6seRQTURy3iSW_Cdebc",
        placePhotos: [
            { photoReference: "AWCwydiyVujbpqye4cHXMufsE86fSY2-6e181URI8y-KzpRo6qYdOZWKy4DdLW90MGBCm74_XjpbnqHCx-KZZwYTPoh-0nxTBPn30B7ZCCL3q3sqZ_CQxNOmRLNq53W-WB4eGAyKqyESCp4aERCVVMlvwq_dlxpj6eD5K_IQiWxfuuj5ESZrR-kALj5A-sIhadR3ooQO9mfkqaqWh68wtqbypaR_KgjrHeSKrho98SkxyDVwUeWANnhjThADyJlKx4KVSeBWzF7IMOnoB6Ya-vJWdbnbxeDgi6b2FnakkBV93vSe4hSugi8DpqTBg4erPCsUPhy_v6_foLb5EPoEV16eJB3-4AljjSB1sxered1A9yYVfGd2J3pDy5jXlqptAcqjbo1aENvCiysAEVW5tb3S19ALjiNvv-r4GiXIoHfZEOsmGMCsYTm4asVWLUsJk8OF", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108752601406621007985\">N</a>"] },
            { photoReference: "AWCwydgL7belcZvmPnDxCigfOJ9gCWCH4thlst1n93G45B69l-bM5y_YUL8IA3cgmBhaH-6NDK1rJKY5u1WZ64kXfMgslu3b5oo7C87lk8kxWWzlBQqB2wKcgW4Mxj3YZwRcwRKiRAnJWKW8AIsnSMtuWeJsQSTAU6xNy6-OZ3w6ylFtH8wjSXx_vaNcYEIcNjMqe-UFNNLulVNhazDp6BeSBI7TLvwpmZe5Xx2QgGjTVzNH3Q3Ox3XW3rloE0esiqSIFxrHEkPep4LzShSIRW3inKfvMK2frrnD-y0X6-g3dRMZPmr3Dy109jUiAJow3nU5xn-di01wohXLRsGaFCe0zabkfLqoSgdUTYhnquGAKoOiUZuMqqFOP4fHD809l0kH2tWmkxlCtJCFdEaDEuX2pVyiTos185lru2dE673LlQhuFw", width: 4000, height: 2667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112635749593648432725\">たんやHAKATA</a>"] },
            { photoReference: "AWCwydhVyResG9TcFC7rMUqlio5T226qa40uhP-pforn1whSArUTnInoribSGE2xCvsXlWD7irMixNTAaeE-Hy8VKiBpk0w92O21i3NYmhnycwAHTzN5sIRWISQIr88OcdppvsUhLjumONKql5qM76GscvzCmr4geloQbDvOSCqB1VRB92IaBHAkeDmg8QwCvKkjbImMcIsmg-p6Iu_jfHX07KM3M-GCXpIqBQSYVQKni9zDhMCCsjRcVJKbZdc-mIToH4vAg9ykTUAI5PbOKdkJLspdFgZ6QU-Sc16AvIgBF_0WzVFk8kHTz8U2fYsWymQi-q817TJq9XaLQLn-hYADMkgzT8bLorC_k9IIyeNDOqbVbxZDiJGh8KwxGn2PVR2SRwCIbzRCksHAQ0DifGKOWi1nSHnURjIWi4BPLwev387bFCf1-rLwsfDiUAeLk1ea", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116033208822644967782\">Ching-wen Hsu</a>"] },
            { photoReference: "AWCwydiyCk8dOnCR6Ahf6KWWfOiwLI2UWBSWMNQrFeXkBdol6aCCsBhz3tS9MOyiGeVDYlHDRvb21d-Tc6rzYBO--AIKp6qB3uBdXzS51KltoQZz-K9yeeY_uToRVJ6IWtj5VppIh_81E9_y3ktnSOMH5_pKD-dgGcvcwFRD8T-UAlLQRi-O5JNXggDbR0QoPMdkXnBBEWz_pBIF8oXgw7iqVbgFgHA9_iRqPx37fRY4sFAzMLW6W8U8_eGhde8uk3SBdqlv8VtjzJ8jEjqj395NTBnqGww1CIxjpHmUgO10OpOCTN1ClYM2_YHhd7AAB0HoOLKiEDeyDFDsbD9hQtkPMUTuVXs7gzsJl6bCGFO-EDaWmAtuP4rPf1dHCQfeWuMEkXY7oSNZK9imR3MjM4qG3zoJrY6EvNaTmdPsTBsxqQN0L-IBJmum30kYH-GOYm5m", width: 2028, height: 1521, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116075915231677944666\">つきまこ</a>"] },
            { photoReference: "AWCwydjJS8LrN1l8dONkLd-2UO_SE3fXa_xGx184uYY91jxnqLBTulSwRR7LnH0l3yUd2mqzY9Eibz8uphvq40CzHWVM_v2R8PG61P0iT9Bl8XY59yz5xo6kfpDeP75n5KtMLvCO1H4o2YKZwNtyVSZgglZqOGdjeSB5syG0mG2UqXTiaOITRD6v7x_--_pSEbn_4HeeRpm3LrwopfuanQMZ3JxFZJKTOfI7cbQdfUMOgX1V3Mf6IIL3FOZtZ1c8r91zL7QWxOxJa7ShiNrrpcHGB7wMNXXxqpsypsgwxkKDkr5OCDzn4K3bKJQFK3Sx2WWvkvIdprx4CXAhgMDjIJaKX7_1oNUMHZtnn8ER5eqif8YtNYSMJVrUBvJKB2P6AhxGVGLs4yIKuY9Tc6FzXQHZBhxoU67w3y6AvveLRXOm73xEf1yGh_RsXLMcZ7J88Q", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107473917856392290715\">吳蓓怡</a>"] }
        ],
        summary: "부드러운 우설을 합리적인 가격에 즐길 수 있는 맛집입니다.",
        updatedAt: "2026-07-13",
        highlights: ["입안에서 녹는 우설 구이", "든든한 우설 정식"],
        tips: ["하카타역 지하 상가에 있어 접근성이 매우 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "우설 정식", items: [{ name: "대표 메뉴", price: "¥1,500~3,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 10:00; 화요일: 오전 7:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.jrfs.co.jp/tanya", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13220771836776839371", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%84%EC%95%BC+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하카타 로바타 피시맨": {
        photos: ["/images/fukuoka/info/restaurants/hakata-robata-fishman-fukuoka.jpg"],
        placeId: "ChIJMY6uv4SRQTURE0SATIzygJg",
        placePhotos: [
            { photoReference: "AWCwydj8cE_Ees_1Em-g_ry-BTqdeR_kaRCSJuAYPy6vt3FRJHaMpNFSZbYn3QlSY6lkGmj3yNdx6K5hOxzgM8Pe1KtbV2PisO9915A5KgoFoQMzozYQ1aL00T1xeYRhYlKiRgY4cmetaq9vriIQjZmJ-ZyQPnFeEF2ktZx3YQ4nbjVpWYr0MwOzabyLdJJ3bJXXem7PdXJCNOrH2LeNemD5GGcCoVhWr1dyfcXwrrAdaZUuebnf-ZPY1nAH2E_UbVINvWaj0LD5LopLvqD5wREgtkDnY-2KY7VNxlSPkyMFcd33-6sS-Pvc05cfnwxu5_AIWQEZezKMukndEXwMx8u9gNcfshVFu0glon9sUufNqCkKiXMixPIgTxUcHPLQZ93cv4-ldjYADCitE6xCmDtzAIST6KCi_OHgmIo2Bm3N7_utHs02ePDs3pitdDAzWJfT", width: 4800, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100649737590321033951\">博多炉端 魚男 （フィッシュマン）</a>"] },
            { photoReference: "AWCwydi2A8HXk-5kGUl4tl92aIdnC1QBVICwM3EbIi6Op1iUqUQJYXVdFbzSoXA5IokQAIrqc2QrofqhAleAEf821V0V7yGgeImCfkcfljJ42n0Plr1JeNYKbv_cBbe6pvmkeZM37ynnYpPjySiuE3hOc2s__q68-4q7OBsk1RBXhKBhHxg66ehOy8PPelzspA_9mW1Lk9n5AzJFdhFCnJ-HFTOoZsDkoH_Icj-XSMmN3rzk2f1qKxUEmNjpiwZOQ0XpWvu8QLRHp_U9qx5dJreft5uAwiqnUvl5mZ4zbD40a0Zq7FBR7wfobm56d7IAeq0VSnBTsEfFIDoqrFMGipZ13NJRIFVhwR4-IA80AL4s2ZzvEWhEsh3IlEpDM3FXB0MuQBoWAinmshiYCrrl5UFsUlScH0gF9pn6ZefDdAqTtAKEU7KYS5lHzv2gNhY-RhrA", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107559582002003967303\">劉明鈞</a>"] },
            { photoReference: "AWCwydiwm54bdJFW5iOM5TzAOjqgNvHdwzAbnP2XJ6_dy3EjCNDpI9E3pG7xMcDxXpiGyi51crGiR64v3NiJM0_kY46N9tubTNMh0954IDIT_YQZGohz7UsnMtm_XTAJU2rWE-tqKuhoRSipe9dbstI3E-y_HvMj-werzqZSZkYjdH1ZYnUCKEwj4UjIg9Y9c-WabdGgLW3D95wn1HcckSODx6zfh548e9GTgzAP2GJJQLHsRO71IuplkQJ5bw7vsvGJmoXr9Z7IB28-RrSHMuv2fRpHFxL05d2ZpkQfumHA7qV0ltjJbi0W8O7SljBvOeL99fFWSdEEKNV-Rv032tI47jP-G5cB0e5xrpPVic8cGPTNGSEeqzh-XmyVoV20SlnvQkAvp5aGyOFPLZNz1QLAAyDVVHZ0iRrwh_OGKrONLen2vGRB7M8PbnJgmKY0G03x", width: 4800, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100649737590321033951\">博多炉端 魚男 （フィッシュマン）</a>"] },
            { photoReference: "AWCwydgfoPA3lGq189R6DnAxybDR7G-JK5Ibr6NHs3QmlT9wRV1XPEnA4ESpBH7TGFZiI9EcGKh_9ihN4Vya6EXuQuT4qM3ScRJdDaPQD6Oc53kH-ROGn6H0rL-q3u9OWXXHxSAWWKKT2wDJRnWisfuDnVziIBIXHQ8-dhAL-d8t1Ko2xpB5Qobwv9tPXRkMakhoE76SpgX9Jb1B1UsFNuBrwPXkQL4MdOsJxGxQHFy5Qr4W_2bjsqmUJ3rJ28QRawx5-fBFiWnCl9752n7KoKqVNf5AMkk__Aw6JjO9mD4Iz2-zmIxSeFMH5O2TcaS0xVaTN-4bYc7H0Oif_1aHPCcdoalRDPXS6MsZetSLR32-sfburBlApedaTNOBuP2-PurSatRINAyeUhMJ4HtsJNzVjnsnvb8j0GS9BuXThJG5Cp-E202wAv2CpRbkHs9dPQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109227031228079915511\">劉先耀</a>"] },
            { photoReference: "AWCwydi6QL00sItFDBTj262ViAklXoa38rvZuZz9sjmvtTYGZPp9Ivsq0nBtAgLUdSmGtgoJWcm5Rh853PO8qi18fdcUz-5UMfCoBUM6xSUthsyTFriPZfWJVq8YII09a-RPb5L6NhSQ5uO2srmj26K5B1c705pncTli_fvHWxPV_vcAVB_yepf0TQX2KteyKKrFD7kJTZon_lMz-MTpIOPV3u2Tpp1KMJb8N-pXWG5JiiqADeRkNLerbSFI5wlQLSE_jwzGg3Uzd2IAaB9L9Hn_7OLOq3_5fKRMw8U7jNQG_lY1P1V1x_2onn1Q6euoLsGUp2XzwavM22HzvWVYwetf2rMhWQwxeC2ZvZAPEtlLbkNB7oYvhEAx8Th0WktjQYY9VIwsaByK6LbyxSVMMp42VIE_Yp75V4_eaGjbq-mEPJ5M1Req45PhF8_6w2y5wg", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105950754546067987024\">杉浦咲彩</a>"] }
        ],
        summary: "하카타로바타 피쉬맨 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해산물·로바타야키", "평점 4.9", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물·로바타야키", items: [{ name: "대표 메뉴", price: "¥3,000~6,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:30, 오후 4:30~11:00; 화요일: 오전 11:00 ~ 오후 2:30, 오후 4:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tabelog.com/fukuoka/A4001/A400104/40006960/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10989049775176827923", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4%ED%83%80+%EB%A1%9C%EB%B0%94%ED%83%80+%ED%94%BC%EC%8B%9C%EB%A7%A8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "간소 하카타 멘타이주": {
        photos: ["/images/fukuoka/info/restaurants/ganso-hakata-mentaiju-fukuoka.jpg"],
        placeId: "ChIJk7fg25ORQTUR_LiBkFzRC94",
        placePhotos: [
            { photoReference: "AWCwydhEojC5a5Bc3FDRVZYvfLV0_Woq2e_gPmP7aNxshmaNd2kHVBepqHcU3SSIMARaR-vCRBWDU4JYJPRXttNDQ2exVwxs3bg-RtWTjhNeJ6xllzNZ62ruMr955R4ZuCECANmLgmCTk3RsPXMaKWWENmyPvG31GbY2khjSSIxKWnpKmW1tZKEOho3Oumxy5ClXvzZkIX7hkC9_p0p71bOQucKRYNopTeA8a--GGqls7_GGuv2ru10EV6-fMJYWIZOvdv5wwwNPfRU16U1gOODWNrOH2O6dclJw9gSjjpu8g0ul0FenFPRltDcn7uawc32QnuLyBZzfKUNTkERdiKH2xucELbirFnXXMzkjSSYw96t1K7te5Ngo5v7xk7xeEugysPEtr9999xnD5_t8Flpff6JiXYd9v5fXeWOPaWtsqbiclw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104735326290157999175\">RENREN</a>"] },
            { photoReference: "AWCwydgJ7CDg8gH4J0P7uGfna5e8FrHMsSabJtNg81h_zGtkB_lQvFQZqOl3BHi1LlR9Z651qSdpU_8P8OMuuyHbF2a4ZnxOy2iw9xEjB9Fi0Mv39h8Vz6XV0rxLto6Z9zufqJH82MVLeqBzOzvw9F_A7FS0W2yZs_XWfH2Jvk7XOrmgVaDdbJXOJp9gkDLKOcvBg4GKADm7qEMXr_qKfMC9uvlr7iJmaGGEDl4VtgL0xhOM3H5lM8JKn30rg2FIMw5EHzvMPZG7P1R_BA7rOMM7Q84Equ7EvYWkRKxP4DyYxhRur24UkUXz7aCzXC-kQx5gceQEcBrVO-bnd4XI5Hs1CM1g1tghdt_LITRgBrg5B2bAlKTV3Kx303959ZPVXsfSgCJhIKnrRi9ekaMrmYbVl3mnhrUuhLt9p0Ffz4SYMdXoR9Db", width: 2218, height: 1478, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116389474113229009984\">元祖博多めんたい重 西中洲</a>"] },
            { photoReference: "AWCwydhUq7aXzDMH_WPqzma4ZCvydCgFUbQ1aK7oaBzMMn5pUHXnAihW5uwkcS8-k0lob5o6-zv49RtXux4CkC2ySC1yJik6rH7Wl5g5tTTnHSCHze8jGqGs7JsBUSkhnRxko3DK9SFUtbRuqtkIE4go7K8cmbFzut3Bnz34d9SbYIKARgeGPjwQzvUxD41-yu9sl4ruTZVVMggFPMFRLmdua6ZiH0DpJyhXrYFMROwQvsqLmlbK8E7asMrubf3I56rR_Ilq1aySqrkPSv86fNcOeysbCaFQ9jFBlEo411A5FzmVd4qEQaYlNOoQyQhhYi6uoXbjphbu9yuY6ZcNfkwtDzfspriRN6EdtoZBDBbbqi9QYdSkk7RKH73M8C-nlzCkXE3wEYifPaliHdkSIA5XOapqYRyvajqKyDzya5oABPPKe5nVpj4QuqQHtEZtVos0", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102947501806661018294\">candy lee</a>"] },
            { photoReference: "AWCwydgTZrzZPZalqfpiB7Ucp2nT5RYkb8PPRrgGECrfqAErDyufezwlSmQHkU-EnEdnyMQAnXF8zU9nthTTOKwPcaLJVvLtyyuObhWdui2T5kSEI90dUcK7QwAGLyJLgy-taxIUPzw2CEVlRAXPUbV1I5rCL8Kb3gitOJUwPBQiDJ0dcwP0WM1N_0_OQhrCwynpXjKRz2vsEvpZw5cIDc26f8BU7qsnFNLm8oueHrpXKwcoC35c_tTexW8vJz8YgqKhMD945ZLTLF6l8LZf5fKvq2YZdV2r3IC62KITza0WHgHYBCL_xtQyurgmpkmdR76E1zEcyj-2SSkZSeNE1b0YQU1MSe2fsyRFTJu7puIhNQjfswOXylyXXh320spINwWkWiu2Pvtg-1bJqUndMls3OgQmYKL6-WRfVx8RygalJxzHUg", width: 4242, height: 2388, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116389474113229009984\">元祖博多めんたい重 西中洲</a>"] },
            { photoReference: "AWCwydgvLgGeg3oXStplBIPzyOkvztps26xwTH91PmRyJEmt1ctgWvhHN2fyKlT_Uri0JysBRqph3LzpICqYzp2FSRczlCG7jY8USZ1Axj8XtPyuU_wqFw6-9JtRtxycpT4628kndfqtwgZP04DFPMsQrLyToqy8Bzj5kd3JkVKf7n2VrywVXNZquqGkzlyjALg8PxkbVH2Gb3Lq18MfxIEjf0karNCdoCCJYiNwEwhd-whYGJW6SdK8ihV9L5J6LHrz9OMMP0G20pp1LosWuyk6UVFTa5Zl_PhcmP97oOtrwUU6wwI4Uo18bdECAMzntzyWcuE58kFX3JYFwCW9WU-i7EI2jLkops6YBUmKw6yngfKtoOYPC-jt4ImTlXGqPnRX9tXHhXKBI2k5aBCWR8M622wGta9Hk7v6IF28wqGSjodumIl_WNASh_Qw9Uym70iL", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102947501806661018294\">candy lee</a>"] }
        ],
        summary: "원조 하카타 멘타이쥬 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["멘타이주", "평점 3.9", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "멘타이주", items: [{ name: "대표 메뉴", price: "¥2,000~4,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 10:30; 화요일: 오전 7:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.mentaiju.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16000112296655436028", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%84%EC%86%8C+%ED%95%98%EC%B9%B4%ED%83%80+%EB%A9%98%ED%83%80%EC%9D%B4%EC%A3%BC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "렉 커피 야쿠인": {
        photos: ["/images/fukuoka/info/restaurants/rec-coffee-yakuin-fukuoka.jpg"],
        placeId: "ChIJ8XiufpyRQTUR2WcCqecr8zI",
        placePhotos: [
            { photoReference: "AWCwydjDcWQNsd6xotBWCsBrjD8_D9HLIU37OKOUIAR2cQJ4weoOXLOpi0Yz-q2-uW6sWmTeJLf2CqFsWC1eAcsRFwtC6glXY7736SdfvzasomXWP8iS2g6r9yKaMM6Bzg4nqkF0vWqQiX4DYQH9XtJbTpwvGWLR0XUnV8S0J4lkYyT74dcxJn1SBtprmyb2syyHwRmdfreOuz_3FSj9MC_k3MVGgwXwPC_XrRcLkmy_DdpsILrPuN2DL3lleZ-ZR8AVSFC9nuJqqefbYRKb6xgHBoTeIXLEUZ2GYyd1L4J_v-o4GXfL2NXaBliJIRqc1BYkqclF0MkqrDKMkDUspBCpFI99qiDEdQf9cHgQogWUV5rJN62EwVymQyKxNi8zS23e87K3VtBXE2v9NDIrZ4oWf44cHKSy4cYsHGhdHGOOtwGie6Q", width: 1200, height: 800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118222374499012440347\">レックコーヒー 薬院駅前店</a>"] },
            { photoReference: "AWCwydiTg4Fn_NUIL1qvZX68rqX1R2igVw4pZI3XMsQDduuO9W31DUXfMH0TFjxW5ax5JIqM1u-yWqzH23zkW6aeQZ5V89A6H5ePSH4YGGE7sz2ZOEwBYEskAmd6MNEwAxKav9ESW1A-Ph0fwXGslXwAGa5fjuQjkjsHMoxYnaRqUE2LC7rBLtMZDXXt_u-EAUgJaSvlWXZbEMeME_cAIczKw_9iHcCEgEzAC8RcLz0v0kZuXwW5XoJI-oPAZRS4mT_NFhgRZHBQ30UgF7M3rPiagUb2AS7yhco-BkH8-Zx4GBfP2dM-XLVmzf9aNCJvaOzvtAOfEMC406xvPWXICpTFVyehXddUz3g_9Kz8vFDyHoRxdi7_ML7gBy5CeE2ZtHGBK3wMJ3tjJfrTjLftRvkNp0LWhBX4RuPIHhukYidGNoMQ90YOcrBjWimaDEvXFnBa", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111122670099627208746\">최정윤</a>"] },
            { photoReference: "AWCwydj0MueWObvuS5XpRJXjEOkElFoN9fKQwtkSO9dWiLHkp31UjXEwcKi444t5XBF8GxgxgppHVjEZ-T_VpUxoHuTdYoJwXunEyKGt2dkXhAfaMQnsay-ObxJdkbqVLmJDMwA58yComRZgUXF2_U4q_0ro-Qretvstymk39spvw6PRabVIu2-EzyqtgTLBYrT14I0S1Pn08CEbL1tnYFIRfHoBhBooSxRu2tQkjxRWgRmosU6oW094EOFJaM6rveiRIad1jCb9kEzX-_-1EkW2HSUCUMej7mSFMfBqg0_-inY5Y_NHzMez_iBWIpES6qnUzpZVwZTbxcw2QHxKGdu74qWqTjEGoSjoLqf76e8uqJOzTgBVq6RBex-vTilQGfxvyjm10lg_26_nPH-9crrkzK-Pp9VJc2wINjQocZ9jh25W0u0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105330133992173668961\">John gle</a>"] },
            { photoReference: "AWCwydgEbTRP0h0vtxp5Jw_WD_v00SRRJmoyEP8ZorbRagxj4zduVpNl8c58jndiRgbBTnkVjgX9_n881MuVzhwwvLiqJztAxv4RWMBLvAa704vAwx5RA5Z2IBzc0S5_wx1CGEvTiYeE_a5HHMUTEhw8o8-8JGQqi-fjXuYUvY-xd5N_W7l3dT7xm6jG8j7BO7116TQccMy-TrK-5CDfkHx-lVnzMq2pQXetrv1xhhklO_D9KvA-YZAa9yqounqXPhAH6hJaDaE5kg6QvDSq3qrMELbX-PIsJINhP3AX3IsGT-CGcmCTpr_aU0uHRJKanPR6xneq00p0Diow1wkcLhLqYE04G2ndd6Efm-6yZAxNCSdzMbIVEy-A6A8vdjkCd3EGCn0Imk4suVlxHI0ydMSCizuvZN59qoY1LkzpR_JR4LcTWHAiGGu4Pp5Iz9_ciA59", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111230609972402418777\">Nathan Reisner</a>"] },
            { photoReference: "AWCwydhZquvHHKVD1LzuwmJw7kRF3MKKude58eFnTX8KUhTgUgqBZmYP11tLuDUmdn2F0cjvwFOrETexu9bVkScyvzofOuf5w6obAB1sB6VCm0Lhc_zJytWgFIGdlroIx0e49LJl0yXinpIKrJNguimmTR6bBQ-eSL4y9HupM0Uryn-mVCL5-8UhE8QujkQhUHU7kp2GribtYyYx-HAs7o6HaXWKuzdplG7eyjZwr3_BDh8nDTmmaevb1X4GqPdm0dYZjG0ZzMrDM2NrmK-0LjL9GxxWXhpp1uQA8Icswd76mxod9J_9uJjSzu3lQcRkzS5CbmrGm-GynxVyFZg0tydekQreyH-7hIqYBX6fYeyYO9IrVjoVaAYSDgrCSY35Y7n1u3rg3PRPqMM7fey-edGO-qSsBaqNHrlQigiTdE5cLeFWlHxxtweveow4AV0n8RTt", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111122670099627208746\">최정윤</a>"] }
        ],
        summary: "REC COFFEE Yakuin Station Shop 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스페셜티 커피", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스페셜티 커피", items: [{ name: "대표 메뉴", price: "¥700~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오전 12:00; 화요일: 오전 8:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://rec-coffee.com/pages/coffee-shop-yakuin", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3671326395210033113", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%89+%EC%BB%A4%ED%94%BC+%EC%95%BC%EC%BF%A0%EC%9D%B8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마누 커피 하루요시": {
        photos: ["/images/fukuoka/info/restaurants/manu-coffee-haruyoshi-fukuoka.jpg"],
        placeId: "ChIJfaqANpeRQTURP6prL3O80Yc",
        placePhotos: [
            { photoReference: "AWCwydiDfwXJrK4J8oXa4I3mbNWIj6zWhvaEbNh7Tmcc-GU6T0lQ7VmRESeumjWrBWGoZHwv5mky6xpNh1PxLNbNfkdZOfX5vHSZcWE2GWtlXad8mGOfOibHev6tPN0yB6a1enfY4itl2EwwPpo1lLLCk0E3WFX8ZGtBSeBJ07QaUaePtdnOdIzhnCY8RTpr7drhvFd0KoKEW-78Prj_xvu0xSAOHoK3NB04Tt9l-dIjIWcYWthgOa7YzZvwM5v0Kxf_zbw544WKkv1Gfl0vkNroUYA-hLONVGpKtSIleHBNKk6NEY8ZDLA9oP-ZUMk3S_xA-Q4B_wwmqm_fGsBn5AMIrfDTi5WJ84gM4j6ySDafyaHQBuOSjNGsN8lv7hojbVVn4YzTbVw4n8Tk9zIqM9Orne7jID3g_2P0NmxIqML_p-59Ig", width: 1500, height: 1125, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112345518672058413849\">マヌコーヒー 春吉店</a>"] },
            { photoReference: "AWCwydj2KJjthbEPZmqswDMXtSnNpDjk2DkY2c1VmIofcuXkP9MSQVcVVw6EjDh5v2ns-fo60Nvt1BUclhHdM9JJb9YxsDt35nK74SakDGikvbFIqwTtfEem3mpD3eSwR4GSKoxXrY44-NAaLgYwwM6hQyB9Kv1MsVD2YsRqV4qY6o6zDCn3nZ9SJNZQmQYDRXs2EO8f-7p_lmrPaSSdCcNScd3sccRANfXgVoFRF_qgkyiEscd14hKqHdGVm5X40cKv7QhKFHDYCKKh7buKwwZJIQxGDi1kVM1f4xNmUj-33W6-G17OQKz7wVVBiMARk-kwblrkg-yBcapt7F8vvo_eh8nCWo_3RKUBWoU_8fB1IWGOeGaRy-5P3Gbp2fMAGJ0Mrz1_MyUoIn_7uGO7TfVvVU2yKRhLGanQWHo0EeuPLPiXdBoA", width: 2951, height: 2951, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112345518672058413849\">マヌコーヒー 春吉店</a>"] },
            { photoReference: "AWCwydhwBddtYA5ZrCV2EMWC9fxWTaes69VTFqnMST_i43nfrMFAaPIb4hoQziqTGOlT0FQhxRXoutlGYDKiU4qzo_7VixMWxucpeWEqyyt_gk2FWw4snnpnLL24BwJEp9DA8-w90pmm5kwGdWh3jnHDyOeeSafpsLTkCmJNb0N0TsHaP2Vn2mNInY_BNA7ESukoBwbnwXPN7R4GM8sPduF-pAT6MMH0ka0iXeDd7IpQvg-DhOIhWtw_VrrxqRi7uv79Wa3-LUTd7RBrKlHLPVGvxAFKYkX4B5yHxO32o_p_G1t0lcsQH3uUg3iJiRWmtfudUUP6PHy9NHGseQ4wF-jaQqvmAh3T8gU0I4J83V67EAjfS7aHdS0zO73Fx2-k2P6Lxi9IYfTm4XcGkj6XQtyqTENmd5BepFef7Ml2blFeK5AuU805c0kGrurmBzco65mV", width: 3396, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109470570207699829663\">Kong H</a>"] },
            { photoReference: "AWCwydj18Urj3-Y2cb79mOuoLuToaXDJYiZP05S2gTgGah6CQVB0LS6UX_QCCg6h94oQkWVbJiTKxks-WLoLN6UGqxt3Msr_30zhsZHVLwIyP5Cb_Sxb38KIw_cCwQJfEulpVt9DekGE2kGNDWFAiaMS10iF1LI2IkXpo_BApJChvZDrmNqHuSivWcOZgs0sEkA6LJ6AMOSbtJdQ3hZV5pdtDQIkhYxSNF75rO8wsl6Ogwg1ARTWtcVRZ-lKhrzPe3tJiQw2WaGJzDH9uksS-Uk2i7tbtdYJkLkghPnkneU65LKrei1DkBe6AhnY2hkQru7RnLl5_Cb8fH5-hxvCvh8GvxIKqhsIuP5XZRiRVrc62MDSyiBbmnu4kcyp0xH8UfrHV2qWKkSjn1hLlp6cfSnapFX_0h2W-oHR_Z6raerKnBqj8sdGQz3azkhp-vkac_TP", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114566248086706277560\">Thurha Rajoo</a>"] },
            { photoReference: "AWCwydjVfSG5UQ-p06l5mLmx_sjBsaPjYyNZzb1UiIURnTRzuIAfc9YtPQE30KyCkLVDONmMLzpklHvrNiZLeIqU0j201S9rjUUu7wRgaVz1B7GRke1aQ3vt4hwiemEy3kwnFkrhqCP8viEu83dcuOFBoLPIjuBH97-HbYG9QCsEV2CBXY3vFzK8DKXlUGVaA-nbdtUFCpP0T1ZN63KxPNLNiRhiVhBypJcA-NW0ye688g10y9pFxRGR0yKu5Q5QtT7C5yH-VLt2I4zw6OjMKPvmAb1F37d72gGGfeIgPBaoM-w7dSziktPlw7ZNZ1jO0uMSgG6TO7IWO1TDLaohdrxJKmdPMbH5vYlhzRVEdwxmNCT4tSRji5PZtIZQbRQZi-6DYpnufao0H8LztEWBti5nrb2XorDW9_F4Cazx9hyU_eS55N7BSWL6RQ7_mLwfFz6w", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107237546498043672460\">Renita Sirisena</a>"] }
        ],
        summary: "후쿠오카 로컬 감성을 제대로 느낄 수 있는 커피 맛집",
        updatedAt: "2026-07-13",
        highlights: ["깊은 풍미의 로컬 원두", "힙한 카페 분위기"],
        tips: ["테이크아웃해서 근처 산책하며 즐기기 좋아요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로컬 커피", items: [{ name: "대표 메뉴", price: "¥600~1,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오전 12:00; 화요일: 오전 9:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.manucoffee.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9786810668155644479", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%88%84+%EC%BB%A4%ED%94%BC+%ED%95%98%EB%A3%A8%EC%9A%94%EC%8B%9C+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시로 커피": {
        photos: ["/images/fukuoka/info/restaurants/siro-coffee-fukuoka.jpg"],
        placeId: "ChIJq6pGZbuTQTUR1Rk2Lyjxmig",
        placePhotos: [
            { photoReference: "AWCwydgI4hw4LCpcEDchesptiWvZrBoBAN6P6V5axMmcJqGnrvV_XkQnpm1GlAD5bgBdu1Ad3Zt-o9WE9uIWCcovJmgjS37yMF_8kS5wR-MBbf8F5JZbKFI6Cs5w2LKCI_JV_I3AlOq7rfSxnQL_OwCzp3CjWtrHWUFEjaD6aRejWC0RnrO3SrITAOrMxCkgsuqNQY7XVpIcKi5qHWiEzXsxWQg4YbcDmyty2wIB8pWOhp67eDYV3CB9evon43hyNhl21hXMv0MHhNIUaM9ojYxs9N5dYTjdbU_WD4vvQu2QkYzaoMmHLUnUHy9TbrU6IkJ9PCCN9xc5AwdQiJGlkvDaKABbMrokut6kI-nhvXf0YFoOFfea_gsV5JZJm6gFjT-2o8bNLogF9vdhZSAOqvPUOouXAay_pf2X5fz81AaNPYyIyg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105148603970583927569\">솔sol</a>"] },
            { photoReference: "AWCwydj3QKxDs6D9vs4uZ0UuJRbvsqPgy45C24978qOVJiCwmjjDT-wz2NaPno_L8f9BHHJO80cWEEUfSxFT91cHOJ04jWC2sS7bzxBfVAW0muBKAs0T_0nuyQKfq4VoLMIJPR6BRQd1smiBQUKRQDbEYF0fDlSMdIvTqOYiHshSoGVlRp2p6b6NvTSr0xOXmgR9LE83QI-Xu0C_NeP_IspXOQLda0ZGKk__VimcrMVAfBhlKqgczP-8WCwoPsy9Cl5sujLgxORtPWQKExD2I1Z3uH_SnVH5XvVsV3l_k04wJ1CuLPaVna45LDWP75qMoB6mWdEI123XKZY3UHnVWHRgU-_RkRA09D-PD4jrgtJDODU-ePY_8bnq0ysBnRvNpFpXXxTlSfr-KNdw9-KbC3LG5liV6ac3asg6tL9O7eRr3pjJjg", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107222086759796764627\">haru</a>"] },
            { photoReference: "AWCwydgO2uLDXZA9XPm5uFA0nXyg5XCSUGxLQJS-OKUkouumONd8uRDnSq8Jb-OLiNTNnmgbCIa_q73zMxKj1OriUhfS6GZtl0jOdwiRuWgMj7b6jDbfX2-i5aGg_qHiLQ--eIN9H0zcS8HwbhT-T0geRj9v-M-XyDc_VA8-s9LzL2_2isbXnIFvAnjrOIvjduZSGC5sAfdxN6kP1QLNFfcWP4Z1WlRD_IyOd-p2mCf0bKbcSfYD5wH6a8vkCjjkuu-oR4Q2faRAYtegxDZ3vBelEYmwlWOceqRZh9UyGpwwPQfwnbzQgkxOdkuJAChOD94F4MVZad4-xDY9cvyPtIN5P6YnUuvS4z0hwXc5e30JrWFzAMNN2eFs1ZESKQ071XdCTVXlYZPy7-teS9XINkjwh2oGqFjOkG4NQxdTyvaMtjJ4Fs0c", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105148603970583927569\">솔sol</a>"] },
            { photoReference: "AWCwydhAKTcRzlyyNtKbUXFJywPLHHWE3FKG0B1x4pvu6Ruo7RqZbCzhhCsdWP4YT_HL3z0J3WO6GbPVV2aJxVF-5-GrNrv5kSm0RS8XeXvFvE5ZjTn2ZZWGwpQw5AlhUk1JEmNy96OKaDXugv8wihD2bobTerPmCY1no9dXK3WLTY3YesEpcWyE8J9T5jH2ig4O6e6oShiqLi6JmAhKUfLylA3tVzzaI0l7sCQEXV3tZFVDsvDq9vrMZx05YHTiPw-hZmV-GoywaogCSoz_R6xzh-5hTtQDRP7kTGcv0eXmIBYSEjGh5ywHLumFb59TjH89tNANJ4e5QyJGOi8LtKyGj2t0G1Rmj_s6JGPcABkNp92ZJM7KHMrFoaIU43inRTu4itTL2x2NwpaIil4XMdMjDmdYof-DwvkDAnU10ZO2-HTus2uG2VQlCbi6vCDipy2D", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100157215679768345984\">AYA I</a>"] },
            { photoReference: "AWCwydjKYLIkUqDT6409NYvjBtfbyz277TrFWCg2ipPxEMQvrIgxLdAfKo1IC5Vn7LHUfbFsB_e4P7MHqStPpKuATXnnk0KVpfg8wQkC09WpiejYOFfn4dhn1VLAD-vkj_drH8d9y6T_AF5XToju9EypuyDzBo4IUkX4tERzd_C_LHskccfIHMappqKlJrRW6WLPODF63Wfubkm3nX1SNuSm2HnVhEGKrsyuMUUPIZPjchdRhfXSVMWfTBNyZUlRE-TNYtyQdMZwTgEWogwJ8o3OYP0VDOG-MsusabMz5cUzOCPkSqiv6yE--h7fdXXihGGqAPWyZuQOyo8Wkj0qqaJlUQwZGQL9pa3gBpxUiReFQViAo0scN7gcLumici4Pa2K9qn_5KBHksr-t2AE50OkLAJmaL4bwImSuhX2HvzDEhiTf1eSa", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116660294392618380792\">Orionβ Rigel</a>"] }
        ],
        summary: "예쁜 인테리어와 달콤한 디저트가 매력적인 감성 카페",
        updatedAt: "2026-07-13",
        highlights: ["비주얼 끝판왕 디저트", "아늑하고 세련된 공간"],
        tips: ["인기 맛집이라 웨이팅 주의하세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "감성 카페·디저트", items: [{ name: "대표 메뉴", price: "¥700~1,800", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:30~6:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.instagram.com/siro_coffee/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2925916062823619029", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EB%A1%9C+%EC%BB%A4%ED%94%BC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빌즈 후쿠오카": {
        photos: ["/images/fukuoka/info/restaurants/bills-fukuoka.jpg"],
        placeId: "ChIJpWMDtZORQTUR8E9P0GAQ6yU",
        placePhotos: [
            { photoReference: "AWCwydiZUbGKcXfg3-IjcimxmQOjkDAjNTAk6rkJG9VZDqzuTEnQ8oKDYje4HyUzch2T5i9Ciug4DF9LI9SG9qoFcKVRHPZaSuocKmkfB7Y_XPiwgD6fcC4Pl-5eHWqbajyjX74nqxNxp04nBSXouyoLJQntB6uruuH2p2defX8N5P5aOeJer4WFJc4n8gg7-75IIl9ZtYVO_ycTwQoydY3IW26Vycc1d9tgd1NyIU7cddXPucu7bIrLqJexEy7NxHfeuiI_yu5iTzTV3p_lYa4fONGNzgouYEyyjEP90rsALP--K9y9JZ1UWHmnZRFT9EKweZ58rXa6lcscjlJ-uZjjJ_YlvpUxGS_VSmQzXuGWCfSYR4OHwUdrcX0nIO0JYJ3ye7_eN3mSF9WCWa1OGznE6VY_lMkHDOBUd-WHIiwWjsH05gE", width: 640, height: 479, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108264091562102678165\">bills 福岡</a>"] },
            { photoReference: "AWCwydiPWM9uSw3_3kMzG2pg1zC6ib91ajygA-iByc-qWcBHfX7BX26TzrJyEHuLWg1dLsYUL_8952OItvQe_QS1tOhWmfZSFtfJy7_gq8ke7PWcay6ll0lY3GyOrpuk_5kW6r8qNRcAjzNl_ohLwD9CXZ64tUDbRqVkoqAXVO--oWV2MUPZk9RBoEtZDwMr75MsEKUi3M2c3adKIADyFRQMFYoi9SmHcvzJxMBKWe7HiPMc9nxhTcV3tVAelHf3wwkKXycxdIqPz1mGlenNYFO0-wudDOJm_4W3xQLhz5h4Vr4Vh7TTEuPOvmCr7QsVEpgGlsAg7Cz0qfCvPPTpq2mtXRPtCm71DVWnFemrMj3HW5OhrxJLmGGVY2tmMcgsVyt_zPDSqZEfn38L9dwjJWoqSHHNWjIgce6hBn1D4qaXHzO7WeM", width: 1000, height: 1478, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108264091562102678165\">bills 福岡</a>"] },
            { photoReference: "AWCwydj3L583AOEJOksv6zJ-Ba9feji6t5MNZUlwIC-LuzxGNHXZGtLqVVFIi3I55VMhCLo7B2ILhau9klddiQ93b5jhD7baH_L0f7MD3KWEwQoYXrkmlYklPsHlPckt2TnTRTHMXuCGQyXWcKkszUa_N1QA7TLy7wCliKTor4RhLpUmOOgZBAynwd6rh8up-KbPi_cbKPW6kzRUZ8I14mFWdPNz27e5XJ1VdBzh6dvz8Lcc3KKlyY5MxbObL1Cf5ROfUcXHkmsC8DUvDa9egk7BRbWvwDmtHBdu8kjcH4KueAjzV3ciCTwvzL8cdN-90R6HvEzHFkJEEHkaelxFmn2iV2zIcLKX1fzPmIBjpyKLC3qlc_Gmtrnmifi6ilcaklqQe1XwjrKPqwY-UBDsFru3hEHyt5BTY7yWRs7dN61n29ud7q7AFCBHeaTJxeM3MV37", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111191437936502943544\">たる</a>"] },
            { photoReference: "AWCwydhJ4s5eUFHIdOnbMEOgUMOZGqoFSF8ySPXF3VJyb44F1NWj6V0zyMayaVqGYF0vVVFjDEU_HqKduEhyUJuZgD2JQSNryJMwQ08Ck1ryfkF3kl3Fti16C8I1bIsWgHuI9v16IEf7lmwptxCFI89IiWNnEojUidhQndCJXvu9nTdAc_eba4MW4G9zDmkTjjHbNtrR9gKZr4Jv4uhSQWHzltA5h4q786EPj9CKiR7BeSwC6mDXjuenocrPTiVYzrVM7gM3k4lQGR7cjw-oy9jm_e9vVMKK4nZjXbOors1pfaL6vPOpldQWlIJSGkLaer23aqV5XlpuuJVcRtrn8MuMrpuGbAFENTViMztBaPIFtIBJ7nZEVWZpKtWloHD_cX2UpA0vAjudOmtsBXy--lpTjdYmOFYP363GL4KABPMREwaPyclzdT8hFwuJ8nDCyGQ3", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113893756296113795682\">Kensuke Watanabe</a>"] },
            { photoReference: "AWCwydiactUHPBiL5vD5cqa6kF50ZbFHEC0G6tpGwESlArt1GezAIk-U6Kmr-uKSwseE9QB0MlopGY5MzcAs3uTNGn7SaMNlvHoBHqom95WjaysbDKg32JkYIHEpzhOaZky1YuefbJNgrnlbVvPLsZtlvFR0wb4DqB0uocwDIK2mBPblngA4RdQT2RDmqD7luTPmiqqClrOlPEucUkFYe6m6Cek4mLYC6mBqqeJewh9kGrk18Z1XzhCNGFQwmUkHdaA2fXzK_qpkJ5FHOwG6NWXi7sUrFMCQZrUX8BalT_0MnGXTql6JEeXPlPxl7j2oTbIcIVdaWiGkxoaz90i2T0ghMDW6aZHaS3455IizPA5qClO1Q79DdKZ7ViR7DTPEqTWmEqYh1wcK9R3YaPzCrnFd_uOPM1w9bqm26GtqqKerxiWsp-aP7vjgo5VKRRjMdzWy", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117319483011287198967\">夏金伶（Summer）</a>"] }
        ],
        summary: "입안에서 녹는 리코타 팬케이크로 유명한 브런치 명소",
        updatedAt: "2026-07-13",
        highlights: ["폭신한 리코타 팬케이크", "공원 뷰와 함께하는 여유"],
        tips: ["수이조 공원 나들이 코스로 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "리코타 팬케이크", items: [{ name: "대표 메뉴", price: "¥1,500~3,500", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2732295606928101360", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%8C%EC%A6%88+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
