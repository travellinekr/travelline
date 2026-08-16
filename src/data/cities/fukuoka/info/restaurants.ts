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
    "칸비 하카타": {
        photos: [],
        placeId: "ChIJ1Ss_W42RQTURE5m2J_hjdbo",
        placePhotos: [
            { photoReference: "AWCwydgKOlycMrQUMlohdfJylgLQ3gD_qtA1KwSdJRAN5WlAPBTofYPO3JSoJ99kp0EKxoglfn_8FZp8oy-8lPw7KYY7rtspZg4q-0d82LPisvk_AHwwqGUkk6EAwtZaCHZPvNru_Ozc3mFyZ4uSuKAAvGXmiq3nDj3m8Q_gXsqX42XSB-sUEOpiOzMceD4UxKPzNIbmb7_Q-AutUqmBTQpdc4peQkV9u075Hh4jDz-Kq45IYLNGLk_b5yU3IhJrP-SDql1ZXw6raj8AKRvQuyBth1wXm3d78kSp1xGvEqMZNfcCkBg2b8vWU7IJaed66mryRIDl0VCppRnJpsAejh0qOGn3xu7uHMcTYBnT6-ZlWu4oga9P5_WgRn-67izySMd4oEg9JmBjwwV7DgPbSmeD09aEm2qv9rhGHsdJ0XucwfHCcrotBSEkyOZSSghgdA", width: 1280, height: 854, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102443093251151609852\">韓美 博多</a>"] },
            { photoReference: "AWCwydiPxTp2_iuxEFAZ3PHlHIsZu-skldAFT2AOVS9sBEiyE759Pnkf3XSi2Z5RRJX55e2qbeSrRY1BtaTBacgGXG_Ejsp5cKGBMJsvmV_dxvOAMeyLgAIDque-GrEo3NhIo926QEMbdjKm31U6AULsiGGRSCT0_D4Rddmwndb1zL2JjCNVRjb3ncr5yB-IRu88rwKtponZRYgNTI3KCXeJds5mqs4y8LSPJtQ9Zc0Qot2TiSCJznPdvWkpcUgIsWMpCrOn0ZLbVo4zE9VVWQoSZMSLYXlrUkThSolj514z-mpqqifHX8lyhf4Qzbl8r0gklln41qAHMznPePgj7kupQwrebseXLOSeDF31QZPIX4AEBeJA0lBAJs7rWn2UgtX1pPmAW6Vkav0osTvbFc4tL5tbzJYpgwhZDpCdMoZIn1zhS3AuGT1HN_a0pqHLnWoq", width: 1278, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102443093251151609852\">韓美 博多</a>"] },
            { photoReference: "AWCwydi2HeGPWAjoYRqIganBKQd1T1RLIqQ9olD5xz8Sg6Dg65D-AfF2pcHSh-wXeAye54Uskhjj2xAiXf5s4fk4eXzp42aU4LuTmT0D85osMPgT5qN7NnEH-Sansh79CapUsGBP-nXxQ5iWZmRqrPiKFkOtkGC9W78fVZUqT0snp75myd353iMN17U15e9QO2C3BzwgS9U9ZZtCy79uIbj5f9CiVrbJwIlkwTLDv_PH7Ufgy2jocPbNSJX-xCd5ZaMoGQSFjtSDV4prMPSG2jJhnwr2QHTlj12WJkYuHhbJgUTIXOo6fC7ErtQzQWAzaFA_ApjXCjXhF2lfEdno5E_qXY46vJz33-45_r0rUfVjDt8MRg3oTXdAtEU2VUcil5UFmlDBmIdyZ_0jNd3-BpY5tYlzhG3HFl8J7VRSA6pf63xDG0VToXqI4maK46tjOxex", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111242809036854972985\">しみきち</a>"] },
            { photoReference: "AWCwydgkuYYnOffFVISVhL92SKlhGBozCBL6dunZL7EtXwWYycFVvLx4G2UsByYuHFsYeK2vEmn-SaNyto1-2hT3K4_wHbaXw7sFDGpKQExvRgiQqvNW141-buSl_zehZOcDcrvm9KIcdD1rADKhAgm8C26l0jFZF7U_E1TSQ2AJ0MxRTs6LcXHFmVFWzo7TvGi5fRdsBE2yuowIY-rnk9sJihkk3Z8FLhQjaMfsvzWeb5m-9JNVKedISKZiRS8be0mPTnkxb5dBioxfGt_scvxPrBICL_ZTjcR0S4ghAQyzIGxodT90foMhxqf73bUY7B19PGnvjj4Mg9rIRN15REwrLzFQGLep6HZL5c4v0Ge5e6VdLwAg2dmFYYpIRqx8Qoqd59WVUWkbs1Sb18amuFmEHJ0NQNU34G3SN9Odyqh9sTTwryCPN5iqmS-SoUnmrBCm", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103808454021983630645\">よっぴーぴな</a>"] },
            { photoReference: "AWCwydg9xXFz69NuIPktJN4w_wyMbzaOKQBSeDdFfXhpW-Qm_8KgYZeUayD_AAZRk51Y7KXPYTAfHnNtQ0OLIBlKiUiFqa72gyOjASDFF221qOm7zobFjE4P56k65inmhwg5Ktd1HBWYRO0wBkjsfoUdQ5O0oUIOmL1_uNVtveMmL9NvIi3a8njJ3qKXK1rrgQy_w3ilbWiZpHn-LTVmIMkY3b5oBl1bwgbRsq84URBYA0jdiQeatptJROyWcjnIuT0h8xwiwaVkZoEMUM7vcbxJdyTBSk7aRW98F-Ptw74SAb6AQKso96V100PIyvf9LXNDLKE-eLepGHA_8fO39BdhkmxfpfyPoVqqjQZ9xC9bSC7M4DF-1ThPs-f7c70F9ZdVXVT-TSPYDvcL0aa81bCu76UklToEDJPjoufSPMCjc0Hs2rA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100628499024806279437\">チサ</a>"] }
        ],
        summary: "맛있는 요리가 가득한 한국 음식점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["매우 맛있는 요리", "높은 사용자 평점"],
        tips: ["방문 전 영업시간을 확인하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 4:00 ~ 오전 1:00; 화요일: 오후 4:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://kanbihakata.owst.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13435754980799060243", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Kanbi+Hakata+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "한미": {
        photos: [],
        placeId: "ChIJz5pI7jGRQTURfQwOKe8jhLo",
        placePhotos: [
            { photoReference: "AWCwydgn0BkygCVB19UQicyHbXzctOqKzfc4JpQzAM6DkCz9H3trsQ-vj19XMhTl_VtEl_AjIaNm2w20f7ja0dubZwtPLXsUOXu_vZM-GaZl6g3I-zFv8bezCVG6RFgQYwc2TTfrnhkOXZjlf9SktaDeqS9s1rgwAPVdGUJ2poB1r1Nn-WP4Q270hXbSgxWzUt80hqZYhP5_O40Rue_ElOMQG2FennInp9e0TAc8u-wz6z3qeYNnJ6R6dBaZjzXyX0HIvFiSQ9_O13EnTFl4Xn46fjX0JLP-KasflnFKPvmibQcJuefT63QP9Hy6mQMBvqMzt1xLqgeyQYNGf8qxr7xuc3Dv50gRMGb8IBJIg-tp-0DYdzpLaa1snOsfoT7N6UmvXSJxlIy2D0Y_PcPcFBYMpnDGZkSf8oFkHc5Ki_ZnbHjmguxUsau8cx-Bwx2JnA", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103869367950502572693\">韓美</a>"] },
            { photoReference: "AWCwydg8PntNEJB9KMiKCbjJy0Rf2yKODG1399ZbdYfB9wpwGAvMv0BxFmGPyw4gKG1soZSXZWbFJRl6voQQwPA_jiQNNpSfkE3o8_BbFFaBKFsemU3J9O-9rAWmklReHZURW6Zqu1qnkCwlf_2YiQCT62c4o3KfUv4xid_lWdg6Fm_Fx836tEXR153wY97Ris0aritQTSsMLV9Iy5V7516JL_E-Pc8B2FaQ3gLygDVb05Si33-0NZRY7mpoHsv-Blt_x06wHHGCWVzIrvQbwHbeaKxfVuxn4yEjafP4AspF_zzo3HqDLoQ1JBkfN6NrFrB4IhYv72-r3AJjS9VvSpNWRHFNGwa2BabiWcgUqs6VAECKoxyojJtz9N2vzw8r_8gwSRZAY8qrnFb3b237vVza-o8mzalZfByQI34iUlTVwwm_YY_ZlXFWGfa7uZ4dDQ", width: 1057, height: 1057, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103869367950502572693\">韓美</a>"] },
            { photoReference: "AWCwydg1MK4sQWlEODiUJ8X0evwqkcPkYwWokSoagLsRq--42LHIy4-ZNoUICvdgiuGRYMFrNGswEOEE-vtpCZRPeO3KGFO4hZTyetKcRxfY-YykINdQJf4dujVqjhbT-hPPzeWCkwWUjNslhwHwlkUvcucQngJZrGX92B_JjCdo7O0MMU4E2LHYisrRGV1DHNTrI18uIW7Ul6RPLttt3UzuzuRr49YXYuGJKQ_K_0WuASGtPn-Bx-EuvI6x5P2-gvrqFhS5zJrZM_wLta1UIxKHDV43RCsiRU6a3bNI1-mA-3m0tgwjmdmpz1aVM1hjNyg4WNsOH2ssZZHZgr0RtCiu4ds01vyFQJftOJOlIZnV-PN8nj1rp6-c5OfdfSjgWN07J2vilmLWpd3bQfzIMQ2LyfjoTYdCaplMsmD-wgBM7mdigbCz_q24ToI5YBqZBaNu", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107509001784164975001\">AMA</a>"] },
            { photoReference: "AWCwydiKnH82lE4LGY-65gwwhRuq1LFR4P4tEN8Rbripzi_ipDPMGe46TQYU9rWqzXzzhwTh5tL5eHkI6FNQPj3YTuzz4edMTEE4kn6OucXn1FYOVw1h-eCAz4Q42kuUQaiq3jhlsPVSG0GZch1jQ1EuF5jMzu1GF65B8POO_8SYVtA5sRoRZqF_E8spcGtaTkAUCXrGa1L4PATpJBD-RAwki4yPVR7vkByJyuwHYnveR2TVl27bvXWBfjQHtOVJMgmePVjUGjSWitLso5MkqRx_q59qmWdtBnJsWPPRXLcJ8yr5jARK60KeJaYNirP8ZljQk3pJjG_obEbtrBJeJy5pANlnuDJCkzETCCxXSe7V6BG7IRLso5jyROwM-edltzNsaxx9MeX0KmFgZhC1SBWd--46zdaC8DrKKM1FL5iKCfWEKy0oXg5rj8OBZX4gu7-a", width: 4032, height: 3016, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110120444977308182268\">Forza Tourer</a>"] },
            { photoReference: "AWCwydjXxOoSQDX7RfeDxUllpZ-Q8JFQ1uyY6ynStyv98jahtVq8tOyRX0c9kPfekJtD2A_gMsYNDRHYFN3nLnZF5nccF-hNzYRbZo41UbnRE9BVcss3S5B69m2skeYd2iJbqXURRbsC5Dl9m5-4UEq35I4Gan3rPgNdQDVTjIzUXx05NJLel2MkM1GiV7W37z986ueSJxw-JwTDwIobQmrmqPK-fS2o9UtE2PBhVhci_BoNPQoKFG8_TYj8EWBIKvd4CyGhlZRu5BAOIBzfFnMAACjCh-utdrtfR4SxKIx5PQD1l09Cw6gOv8xuXQtq5rj_Zhr7fqnWkRJq5diUI5oTnYz2hPH76VnGFB7yIn4LmfascVN1xQ1HRs4g7imLQOEVITdsKCGXm-78V_8IPs5is7RdHrHCnQmbQny40RqY5UhfJI2pXy3rU5WGOh-QEpPe", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108752601406621007985\">N</a>"] }
        ],
        summary: "검색 쿼리에서 높은 순위를 기록하는 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["높은 평점", "많은 리뷰 수"],
        tips: ["영업시간을 미리 확인하고 방문하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 4:00 ~ 오전 12:00; 화요일: 오전 11:30 ~ 오후 2:30, 오후 4:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://kanbitenjin.owst.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13439906698073345149", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%E9%9F%93%E7%BE%8E+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "코리아 레스토랑 한우리": {
        photos: [],
        placeId: "ChIJcfdIyYWRQTURmQaXepGIbPE",
        placePhotos: [
            { photoReference: "AWCwydhl3B8YlhVBtBO0sdpMQcfFGgdIdunfdIy_ZB3pfIER2s_GMDqHNuUx8cOqcPYGsk9qKUlmsgljAJwYeNGUAOEfpJp2zkMd9J9Eh_7CRf_Bsw0pB_dItM4WnijtU7NDYWp6Zq0x1_hs0wZMHVZEDU9LUzvdmJ062X-LxSfSGOPwa6sdR489njxaoO4E0o7uquQ7lTS-gPQOBMptI7wq2e26Dv38Y1HKlh4vUW74lle_nd-lbyRIb5kdlTt6OH8OwRE2fsEQQrHbN0iV59x0uHLrWZVmbaLDFcyMZZaX698hSLje3A9J4TAw_WXn-DUZ1scBs73gZh3R3IVngqiL9P-eWO_Er3xiHNJJcvcDVLJo2e63FlU98KdoN1hhiKQLJz1ByDmKDsgu3GvIcxL4jheqm5XifyU0yefp5efqMY-bBWc", width: 1536, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117302714371391816048\">韓国料理ハンウリ</a>"] },
            { photoReference: "AWCwydhR0MKYQznwLADN3GhdHLC919Yu7SDJsmCRVM-yg8mpT0gWNJvacSOR4R37FKjs5g3Swog7FrCz9y2eK6oPx3-XeCo3vrKB7i4aEdJiigz-Ifz35Kb-XtpvbgqLf6V7NbUmh6MJOqDSQggDvOztOMNmlR6u48yc7obtIfyRZEi3coyItOm0ES_cDUwAANfXNvC8MMe_Os6VULcD81WMNAcBXpw-psIMrDuz9PNc3RrAa6saaTSDU6-PAD3ofAfXeZL5vHiIDNvVhVZmlJ2KkB8Fic5HV6R4XTkdxZ4CQObJsEZeeyYXcYlTVF_9K9hC9vW1KJwk5kzLvAdqjtA2TnUKgTRbnFe35mVtxfDH_aMvJHF_QVQwLLKw_neyVjpG3pUE6M2uHU0JDfNSOfJnPEAaSORqbXF4FCKzXOv_omw", width: 1555, height: 1037, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117302714371391816048\">韓国料理ハンウリ</a>"] },
            { photoReference: "AWCwyditpya3eQvaplUE857Jswmr9EKBO3crRhTip2mAVGrs0yGuNbtILkwDWvtAP7GkIGcWgLrKfrViGGbUOmx_dSXx-qfMAhN9nVSg037XerTRf-WDlS9n2EJm2eV-yRm1L9zCHN2LySwbH9bhR-wfNmkPcp1coHU3lnvYODr4WLSQLPPXSWkAlXWNJiek2eGozkcca2M_rjWGH5Ce4qzf2v5vLIxIEUBQhwR8dvkr9qEm2Rv1CtZwDtD3E99dLoENOdz_LNwcMxjTsIOHk4Pqe_wkaPKhsvMzSLI2vfQgU4KoScfUapTgbJFZWlY7tNqfPqGvSTPfsdUzBsmPvB-wN-sKgUrthQkCRVuB1CZchk3VYAmMf4zF3AN1X65ZCjvUXjm-XUt58Nt6Fvsxlg4bHK6Yr366AGmdMWKAm8rpi5wUn8UxJgycmb9blsV6BXhz", width: 1206, height: 1187, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113036103151105815088\">JK Koo</a>"] },
            { photoReference: "AWCwydjGuViPvz-iyarqDUkZdM744Ol5kYF1bN1PlfXsZd9bap688NrM6SzW_ts6TvmKQLHbHdgmUzSnGjY5VYvnSir1Mj1w0rwhboKXdEdLmf0nc7PyQCCtvc56jxVD8M88qrZNX5pfHo6GKNmh9Xfu_V_wgorGbqcit-o6Fy-axbBOFj0AhIPXJYt9uOpuepG8sC9uUBHtXcvApNMXA5nHnDAn2THndbKumgojzGg-dhdQPXTn_ufHxQxC-9nubCuBVArqmJrvjY1OAo1cKyrTMBZf7i73wTjbkEwcYqXlrqekf0p6EvBVzo2HsVjBCHAgMWQPLLTKtJLI-tB_sYLOs1eyssXOpHI-RMpBIzBbvOGs7i8PFGOGGvixnLtAdCM2NaDd6aDT9wd7YJOgnJusM7VQp9U4GZjMzdgI7nKFhB1LoDP8", width: 2479, height: 3508, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117302714371391816048\">韓国料理ハンウリ</a>"] },
            { photoReference: "AWCwydhfrWBlznY_Eqp-E7vK3vkAK1U6384odptaBeMJgQRvCKlqhEH9fQuTFx1XYvkZBBzI8Eon5ra6iIFKjud4G_fHh3UknuLGfVQIXMN23989pYZ9vJ8udyyJoQ8hxQO9euMcRCmuL2f_5D6q7LzZl9HwTctZiok9zIgnrxdz-dmJYRGrzfrm_ffOgUmEGAMS5gapWL8XsoCYOl8VCFi1-PZCA4DlY2-DwdVoLcRxpWLNB9I_2Zo1OmVEVZW3OQpScxfWbYCrhsDRUq4Nr_BiHbQoKvz2X773sNL2nkwGFoaPizRcyg6S4XxHjCoVAcBlPiXyAqKMRlnrH4eCXXjNwhQy2MkQVP35f97AyI2hT7tq31cmvJsmFzepf2NCKWslOyvHIcwplfy1DpD-_igpFeZ5degrwXRZ0Pir-mdyWK-CaXfkCQyDrr8v5leFpEq8", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114448088030383221939\">한글미음</a>"] }
        ],
        summary: "순두부찌개와 고봉밥이 유명한 곳",
        updatedAt: "2026-08-16",
        highlights: ["맛있는 순두부찌개", "푸짐한 고봉밥", "친절한 서비스"],
        tips: ["돈키호테 텐진 니시도리 근처에 위치"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "순두부찌개", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 4:00 ~ 오전 1:00; 화요일: 오후 4:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17396429619033736857", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Korea+Restaurant+Hanwoori+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "코리안 다이닝 차유": {
        photos: [],
        placeId: "ChIJ2SskgVqRQTURWmXDxYP8SMU",
        placePhotos: [
            { photoReference: "AWCwydgRTwoZLyityy3JKo0sjWLafAtXkfckBlkLcawajTBWBE9yjG7B1ynBYy4rg9rer2JJNGcBK3_XyGHYnwdW4K53QGze8ybAjJ1b1-qMqplcacT5xiy1a8Od3svqyMp8YkQkFy_gUmpdScitz48LPJaCzxq4wPOnRvg7zJNpxJNQQp2y9LJ_Z4rLz1I67_rFRv25fglu2JnZn9ZEWn23rBfUsQqipKeKcFTHlocpVNqk7hSSbeluKmvotehetCmqd3GvxHcFB3jJXIqlRx4o0Ot1LAovjDJtpqCyZ6zVeXGbB7ekQlhTDxjOhJZEDN63W2mbKO2Ax7z198mBRgCJ7uX-Bhyv9nU_dDJhpAQUOp2PxdJYjBJCZh6no_iwxhH-iG_0393Ik9hNUBZQ-1Vb0G6Al3nlfPVjIGXS5ov_YSvwZg", width: 416, height: 423, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109884938294073790022\">KOREAN DINING CHAYU</a>"] },
            { photoReference: "AWCwydgRjjpVlowzT3LWcKYA0bHXFvcZli7oPk2Jl9rapO1CI4PdLfvI9l5KL6sKBEJuPChYOaAjuVhq-wX1PYcBgt4vBBvM8AB2g4tWtLEkbajAwTFG_DyVW7BPUlqu6C7xJff9HsUnMGWj7tXo7khZMrYbblTVTTrSk425ZLuPxSQ9I_grKNykNvhdp6-ocMql49j9Z2dyMe6f5dJZzZN0zyGThj9iqcIrNy73YzBWQ9Xf1obkrCsZcqP0kj4Wtg5Pqc9Wb9n3gm3U_DnWfModdpoUIP3gWT7URu8JItyAZ56uQch4urFt9O2OfIHXwoEDm6Dwd-B_8bmKjUwb_IWWQgPN5YziWfojVcQUof1pnDmAZTDt8-I52Lvo5LwTXIBuyrDZ_VRQc5W6_rIvsifl7DQF34EIxQcF5y_i1xACH6FlYQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109884938294073790022\">KOREAN DINING CHAYU</a>"] },
            { photoReference: "AWCwydhQQ6lFHhfnhiuDrHPuzKSvE7Nm1WxVcqMzFx2eTgt7N6Taxx4o7ZHpwkak5FPVoKfQuH1x7fNybjC_xT9zXsRsgYXgdBubJmctoxuQ-5TfwZHXie-GPPRwkMTaUOGD-HTGG6IZspzeLQ6lefg5A4UJ-EE_vTpqAKiZG1P4_nvkI1k_6ku_LNOgpH2c-uhjfG1xgM__Hf0m8A_oyqOyXVvhMw8RstxZfM4VWZObbRduhNQwtJ5ErXeCUJUZd9fqMvjj6tncPKIwva-IZGML9DxgVE6ighDy5YYwlper6ITbg4pMXmTfYlFu0l2qjA_eACyRNTVFTa8hCt51gk9SE4sHyJZKF6jrNLg7KXiLwbB8wWokBTZcUWi7OuKRVhjticH7aNFGewKGOZ0xPSTtYrrXpvX2FKOu6mUSLx-yofrv_u3pa9hjo1-OyfkqNQ0P", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105420919852295045627\">Keiji Kimura</a>"] },
            { photoReference: "AWCwydgSoTFvG-OivvILRaMseH80trIxZ2c4sAb5eqofUvJDOTl8k7oJEveSQqEaB3QfXCcv5qI_IoZ6iWBks1kYUwTohWXsQvnJnxZvC1z4TZPofBOtJWOn6mMb58xJ9_MA-pY288KUTKyL7ja5J__43RFrDcUj8Np6BPE_OE_uyLQmsmzMV1Hm5MGGbVa722sNBszdGbLhMTb_xJAcye6UAqxTuMdOrueUu9dzJQSaMvZz2HqIO8SQNkVcHB97V6UNsEkcKGNcaeT8np5q_-xWQcjfMAj2Td4sC6dLeGdZ0M6xdUTGVh4ZUg-UvnE27e4znQXEHskKSRTnGd5C9rlMfVlaLFaBqjtRI1BiRDkb4okBUA0108UfbqXFLF6rMN_mTfAvJLCj_gYDj5vbr988flj2kJ_R95VYFCOkd-TZu886xQqLZYen55iaEV-exA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106225140097565556003\">長野一翔</a>"] },
            { photoReference: "AWCwydhBjw6BxMAAWW7odW7YLI0yabyXNm8-RK4_5sMAW6ZNKeV3JyJ3SohFDQJdibmz_ej2RJSEIFpFH_sKBpuxyvtiRRd5hgNvgDXSaeaJ3wo9o5IdnI-hC48LN7Ru5zrdJcYjuzy58o6qsoeLvvM1whd1mnlvaLZEFdx5yMoaND-cmTVeAOqmD3LtoERNvhqFvrvBBP847kOuVbuZHIByhT32uqCbpPDBtAYbxqkL8Zt1y2OFreiQbWU4GdrW9yQXPfhia5gL_gt-AGMP1EQNdOR6BchgxvFpInAxT1yQIi4mpyVvd4JUYZXtJARHnPut75oMbDOxsxDxVPppViagkQ3R0ARqpc0C3bKDkS4XTIkO9SiMn62V4tqSumpKv6RlSnugM7v9fXoEWboheG5eaB1_Njg16DNmIE9UYTiAWAc", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102558254616321939133\">Violet Sparks</a>"] }
        ],
        summary: "높은 평점과 긍정적인 리뷰를 보유한 맛집",
        updatedAt: "2026-08-16",
        highlights: ["친절한 서비스", "맛있는 음식"],
        tips: ["방문 전 영업시간 확인 권장"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 5:00~11:00; 화요일: 오후 12:00~3:00, 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/stories/chayu_daimyo/2804472198300243541/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14215889866683802970", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=KOREAN+DINING+CHAYU+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "무겐": {
        photos: [],
        placeId: "ChIJvwGPCQiRQTUR1ph3sTAE5xM",
        placePhotos: [
            { photoReference: "AWCwydghoAuTd7JmfdnzOUpgBbpyvUkuAUbMzaaeRSw7Sw6FgT9ozQ19HnkfOsObrPPi-dFRzk4s8EFV5fL850LvcCQZnOsk7UNql2YcO4p1WNhn76dRnLrSOIABP6cDxugh1FItxfnr-WsXZ_Pxk4KsUItfCoWIKlkJbsXKA_RFuqmHU000VDIq5nc4xzxrQwU4V-s2jZJrn3YAYwJkutG-C3DPVyvUK4hY8dqJpE-tA05FdhVaaIc4B0k_UJ6qc2ROLak3XixI3vf4xjK1JGQ17DTT12tOBccCvVouwdj-NGRnIbHsnQ-J-zdOBbQ5i73d3IGRS45bKoXhYtiDHObGvbkBgoYOOueBs2mIczCBI2YNfWhUAD3STdlPUsin2ccJ6c8CkkJEApJgRG30oBw-mMyIi5W5ImKzqoLd9KKQ-xdqYw", width: 1479, height: 1109, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117711703498186369855\">韓国料理 MUGEN</a>"] },
            { photoReference: "AWCwydiJD0lhknclouqrCnS53y8bd_fG0wkUSWBq0i5svg1IAnd0S_8vlFlSkO8CSnvPjZplRjaLVt1Ygbes6BCAYcB1j3CcmyNVRXoErlwPV7wAWbFfI5NohjY5qHscqPLeumsbedxl45MBNd9undUq96mxLlv3qIMkiyivKPh7QyRaWv7XqTFfPJqBr4rkT7eqUjVhFOLdql0pAnanMuA3co2BHOlg4S8I3ZUsG4ta9xR6IPXIginzOjf4Wwo_lZPRX4YPdrOahd4x2TowPNrjVbiIAnWG_mzti21RgIqUHZSQq350wJgVot2OUys486_QDnBkfDY8dycnongJPJ_fwfQG1lEbtZhlFVNx8KLFQIusD9MO7C9osJYSJN6FOlcQoVHNUXsLnGnsecgZw3p23lzeTNYzRuozAXC3nbO3rtSo12257BMATptQLUq6ig", width: 1567, height: 1045, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117711703498186369855\">韓国料理 MUGEN</a>"] },
            { photoReference: "AWCwydiqsWG4cqAdLdPDYzH2mZkuaSq463C687vQA5snPFdNNbVA_G3pk4-_r6nRjfGUpWsorNKuII1V7nk4Q8FsQYzmnDPGjqZo2e_W5OYJ0hl_QsPc26fGKS86bWnrBOCo85YYuV2xsvbEhgQchNlKkw4M3mu7to2vnsnXYLAQ7GczhApdR5RhDsP4PJgBg5Rlb3Di1LIj2gbepk0xBu3wMjhxFfredKXubZ7t2YqpoVPU50zsZ3IRPTfm7AOEJ3v7_z61Kh653xyFxJd2UPEyjYCQZd83n7qj_7hDXirc8HKA2lPriu4OBswW8TzhtzzLsiNhAVnlF20LkF3JNVp6q8jCruJdo3ANriv-I63S0dHnTGjXo-BvSGxLIhB-0wkLbBN6LRCw4GgWYAouC_3HKsRFbDRu-EFabaRDS6Jy-Umibg", width: 768, height: 1024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108655222572950209505\">笹木ハル</a>"] },
            { photoReference: "AWCwydjOuswfRV_7UaS6zhKgzU-kYUsY40wCwJ7SKXgAmJnruewL9eyImqwIueWRcMXTBWOjQyTh3vubAqkrba85V-5zBgVvudy3-KN9DDYkgb-YHrXimXk_uWWAOpcLTq4q4C6PpT1tiEj4gem8vhZCR27677xbIt1JMQJN7kIgjcqZDUpZJIjUwumQ6v7UAuuAPeaY2NlhxIm4A0i89kn3FUDFf3eWH2GsBTUFNTinXGprZLXuWdx2tbrHdcHucKrWq1R7VnusckmcxU8RoSjgMuzJZLcnQ0DBWR2En_QT_0tqGF7cBAXar3GFml6YSPKNjv9b31lRLQfY3_NVKnHXJtaVr_9xg2OP2ev6S3PC5SiR9CTiai3FT9gsOKt4oFR-YwOq1Z2v0bgZq25QZRwQAT4BOjT5BvmhRbGdDCImp5TDtw", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101376505530359980070\">taewon Park</a>"] },
            { photoReference: "AWCwydisgN-VVSNkQyr8bogtuPxwVBGhRo99f7VDc5ZPTwaJnojvkfi_llgZYOg6Fe-FMfbKbs7D5Z1GNyYSTLhAcFaPJ4LNEsjCuqCrlwLYtSWL3jyzArfTtP48L9XXuIZnQeRLceUE-CP8_lQgzTiLKDIJswi3BCtf28VZJGR4az3iW4Yg8o198HV8zv58Nfduqcp1tzUqSan48gVfCay-MfhPyDa-VdoyXTNGsU43KuQwzJFiLWcD2HzcLdsLdI-D7qFpk0cnea-1vGUdQdzpHplHNACQ_Qdk1AlqzIhU_8HgC3NipBaU38ZwfKkmRzuZKhCpxYeqge5gUTN-WDAu_sobdrqmgAgAgS25RMsORw5B4Tpl4VToV-8hulpfVhLene6jhexy8XYc9zDCZgVjceDQJKhEVN2KyG8UI0-4RnScxFw8stMFzOV5PJSlBw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114305919330802333455\">猫先生</a>"] }
        ],
        summary: "세리 삼겹살 코스가 유명한 한국 요리점",
        updatedAt: "2026-08-16",
        highlights: ["세리 삼겹살 코스", "친절한 서비스"],
        tips: ["아이용 식기가 구비되어 있음"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "세리 삼겹살", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:00, 오후 5:00 ~ 오전 12:00; 화요일: 오전 11:30 ~ 오후 2:00, 오후 5:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mugen1688.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1434119613523138774", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AC%B4%EA%B2%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "코리안 다이닝 리": {
        photos: [],
        placeId: "ChIJzQxvqIiRQTURD6z1VmD_M9I",
        placePhotos: [
            { photoReference: "AWCwydhbiMZ7FkOwTX4_RSi3iSr_k5_6MhN09I6Y_pvOP88sojlGui7cl9zuKivCNl_X7DAIJgbbtl8JTgUuRSwUUxtVGsVhp_Nq8rppuGELR3YH2BJS7cAiFTAmcmR6A85N37MfPOA6a1NlGgg9FeK-H9HW7UEakC41IFfK7UShajKKQB9D42FZRKd5ckJQmYXaBtUAI9YCXl4fOWrOJ0SNwGS5KJdncZKQIPaOGIgYNrl_C-CtbNl989Gtm9DiskgT_wRtwwbXcKdwIdYWW5DS_mE2SoLTehWNPEl2dbG4SYiSjTI_bl4hZZONoI_AwS7Wwu3z1R5mGSSZ9ilhrNbVHriSssQkNcelS8o0E_2zrgCtXGVA7GrqlbSzQNbATOZF1jYH74gadOFSXelk91tqSiYlC7OUDXfHi8lrycR4C8umu1kdBtys35mId2K1dw", width: 636, height: 352, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102962939495376101209\">KOREAN DINING LEE</a>"] },
            { photoReference: "AWCwydh10x1wSV07peRCHWz0X0eJE7DRrx78_-_EIK9bmYjp5Ygk6KOJ0RqmDGAeXsQmV03eThjHAw0LrkWcbUNbmRnWvTq0UKA3U6iTjeQV6xLUYmRtcw8wCenroOlNjujeMoB-gPqmho5Ez1iwH-fbMtfnriOAD6g2vQwUk9J5vmumNxpCA8iLUxcJuvWXb46H4UkP77k-uBwdXA6rtVInb6EbxLgebTGt8Z0kHcFJzU28LO-zFHp8iY4U-k0FiFuDauLv16ITi6tr9vlIz3PkqPreHV50PUoUm4HfIe8y-F_L9vmu684v3eVXMB6nAOxcsbHCDk4WN5nyDt3Xzxcr0akfUrUAAA9kJ-5vDYv5byE0Jp4MLf3DVSDIyTjhBi9v83rl4wsvNfwkNt-Z8SuSbZ3jjvCrnKqyabE4yxAZJU66Vhl7XcAckTHDQXkOhbSz", width: 632, height: 354, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102962939495376101209\">KOREAN DINING LEE</a>"] },
            { photoReference: "AWCwydgZgapS6QykoIUv949lIs4ZPTrK73CwCHjq992CZV6opUGTsozKRq30i9fy-oRxxWNvX08-TyZTd1hztqwQtC15VXEA_mbAlIGpqR7RTCXmWg8YHSUONpoxBHhBLuu80ZkeRQtK55aPz_ld2GkodaU1dlAEcbnePvb-CHH_piuW5lcxLPZC--6TZCQowuHsPBTaJnKXrkYt3HyRCzqefKGkuHbbzDPHVuz0lOItH8TR_RUc0dpJgvnpBc3JAgUb8_Hnz2t87UggivJ5_Pz8BerGorWHQArSXxMikPM0whBl6SdOkQubVLuXTajgbQsHnxTj-gIlM_NkT_5E4uLeOdtwyfvd2wRi_Js8t01k1_V7OyyjDdZ_4ncebXSTLr4X-IYRtJLW_NqWY8jSzBUmgkT_sq1_Hz1iWCX2IBMF0oUA-A3TKMRBOKYl6DGucTIO", width: 4080, height: 1840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108634501674980789276\">M Hiro</a>"] },
            { photoReference: "AWCwydgzQYJN0tp0TmBxJjWtBKGMgj-hy1FQE73Rwsyl9li_B-VyrLJRZ1hSwR7_r4H7syxNt4dZNIX62hrMm2JsmZ287KORu0O7qCxshXLOa50-kbd7wm74X_dVyz3el2oVXCUur06MbVHUex_nwTF5HjSJAUCQsWB1YDWDNyDumDYwZiOgA7RWygDv2pWXUwBUx8a2f6BHTdwOF6HwtZ-WpQTn3spAHNiiDcQKtkDQ7Vtut7GkbaDgGGZE7nH30pYazbrHk9irvxh14x02RzBS4Iw2Exxg1IIVlrG3CibRK8i3VgJ1JPZxpE7OSjTYXN7lfiLORlZmg_Csw510-fM7IWFDdfTmEpK6VGhywA1rgZ5glpxMVw4SBoL5DCdKYbEVO8i6_lvb1hi1HHhmPewfpQgB_VjGh9GSr_l3YcGQ13fiI8V3kpHPbQKa0nDMHEEO", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117440875198852567986\">Papiconext</a>"] },
            { photoReference: "AWCwydgAaQbsN7yQWtFyRSEnLkh9L0Q7uAgzwANk3Z_8jOo2rStHJOwsOrktIgsqohIOM4dVWJPP6ujsbLyN8GrFNOJliW6Ic7eV1fnLYlyy6flhjCroihX0e_UMao-Lg7BEAImCwfsk2VYY5Ijd_RATIWgmKFKjKDw8fPJsWo27ZUqVxzImaQj4p5Kh9z6BOvluBZR2-BTlrUv-G9spaMJAbXwTKP-LAm450iwyYqO1qcgLfbWmpmOhynBJSBegrWECtB2-v0PNswFHvP0g_QLS8yTf2OBA86TCfPuqHItqjAZr7B_KBJ2X2bOxMlIUTPPywtpiMrFeg3xC11F5YnfPUrSBckbxmE2SOs_0lIZkTC1Ny3Y9lcD6EfLZKlQcQ7y_ERL8VLDqBTZ7nvkiLTZmaJicTpCAsbaT7y7PxTKJUqpG3RFXBiJ8AGMusKf-6pXt", width: 1108, height: 1477, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116383834268693572008\">ナパキャットワンチャイマックス</a>"] }
        ],
        summary: "가성비 최고의 코스 요리를 제공하는 식당",
        updatedAt: "2026-08-16",
        highlights: ["뛰어난 맛", "친절한 직원"],
        tips: ["코스 요리 추천"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "코스 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~10:00; 화요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tabelog.com/fukuoka/A4001/A400106/40063196/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15146730761017994255", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Korean+Dining+Lee+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "앞으로 니시진점": {
        photos: [],
        placeId: "ChIJVyoVyKSTQTURzH-QFCXLjZg",
        placePhotos: [
            { photoReference: "AWCwydiGbENzRF9cdVyxS28EqQgwCwy8N3xNFhQ74RWKMHXLhjqMgEw4tA1jX-rWiEHHrdNqxwfDfRGVkb_8x1qtr6h95DPshAIOcJXmoMuirwsXyq27XI5Vlqo4b9WkFPik4yIwLKhbROtkQXCQzjs5XZysjj3LHDktP7oGDfjnop00HlC1vaclwNGKCh8G1Q02CXuimA_XAU8br3rd2yhnjuaemvQsOqK78u57I-vshaATIutFnB95-8xtT-H-BlqkoH62Txfl-vhsBQ7MQU2o7dZP3Yrcz1xKs3PoeDvJek24lU0EGbRkNwS6Wuh31sP2zmTI6xQEMytEau_veoPd0Btz0KxG4QJpjdQpm3V1yECiwFkEA3t0kmIndLp7mAvrqc1gQs9NmvdyqdztcCFRKmG5ixCcsQy7-_7ZSlRHGhbJ70vFt_ITLw61OJ-uUQ2m", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104190277081354747720\">小さな韓国 あぷろ西新店</a>"] },
            { photoReference: "AWCwydjhMFSejPrrMEIEwRmT2g74a0jFtpsnOaKhPx50Xv2bNDoICVdWJhgvJNGXaXoMGBWLSJFP3D1vslmq9DgxySrgSOahJvBWz5ApAA-VFnmkb-RfMLrLzQ988yUWHA5oG23hkqKZS_xR1uGvNO1vKGFyuF3t-3YM7Ov0Necc0qDnKM5AlUjMcPODOu2kBPOD-GH4LINbLgNvA4NnG8CGHbr9wXUxvUtUz4Nn4pHAYQcO738BkFY4ciNhFyVITWAXrOo0ekvyunYMydZkGjJAuBTdm6FbmahvNMQ3pvjaX7YCy2bmcHMLdyBe2L-WaHXatrXvoRrcpmw7Rbaa73taHRznHdpsG6mQWXatd9zvo67N5R28whn2TnJl-YfLPa6ElNIH9FWhOQ8c9ssRQ8oguarTdR3PMQ45jtGmurMcL3g9eT-WMdk4CAxKusUb3Y7W", width: 543, height: 679, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104190277081354747720\">小さな韓国 あぷろ西新店</a>"] },
            { photoReference: "AWCwydhfyMMAUDLgY16-1yFFd_GJcQ1Y-sWr5EyY4tPgPjotMVk-wDkzwlBEa7F0_trnU3gf2ED7ECTrKu5ZAMIuMASLVj9S05Jqx6I6sAHeaJ9JWYawWHiabnditBKHeaXQXTIg4STXUaGwdYV3sfnnTRSVsqk90HH9A4kE-RFWfvxJ9sICZW_0z4UKD9EDleOWh80gTyqwgjOeqPkwFr-mUSW_O-WdmsDHYBlg1iNI77J7-k0y96GpSJoO277t3tZLJPXzFasZ_LLhktaJCZ7voeI7Zaa6MPbjsS225ochU4lcAaT-haq0Nm-NfeAaaRLYxI82xAKz3_LPTL3yd1V11Xz2KhTDEkR_kGVCFX2do6qyToVqc_s8RCte96VSMXWldgX9mkfFljoXaSKkWjLqQOg95Y0fnI_DuK_S1q350zpSLBeQMBzfJxJcn_OdWEVd", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117327216474407964123\">M “A” A</a>"] },
            { photoReference: "AWCwydiTs2LxdOsEurHLA8J_IXbczfOAlPDSAs0KSAw91A1BHhSgCMwwlLmvQYc3nAVNFsCRLo-1oU1HqDWwil6zDRvwNikV7G-b4nKzonKTCKQ-8i7bADaZmLZTDwJFLpRYAT7EmmDm-ATnAzJiHQqxsLgo627teU0DLrrMBEWt_iFj6gVVWmPV70YP3rwHKb0hJlfXzpJQCWH1V0KekAA3rxRtXjdU6D2azgP0J4wqustd1oNFr47W5ZwN47Q4SkUlnQIiAxYgaKOAsUF59S6ETUiIRjfGAst4EolbHfa2ltvazPMoeAG-C_2S0uOMfDeI1wntgMPfwc991W5AddzWFh5S3dkKORbk9FB-QDoygaMFBrgVFiQvn3rDJJiiGZAOOXPfeZi0VTnZpuvceHCKMmRsg1EzDxaE_FK8vbrS7P22YA", width: 4100, height: 2310, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108869038364133616516\">小さな韓国 あぷろ西新店</a>"] },
            { photoReference: "AWCwydg4rZEVA4jMH3ECab0So7_5rhCyq_FLLyo5jM0-f8GvddLY9zb4BLgRGNCqOnm7gQuxP73LcDHIRQG4_sAStye9sP43YBRrfJiDnmTZZwsWQeZvbsH1XdlUilfjZ8BkbFpXFO1O5c3jWFdRQDucH0sZi7mQTzOab4qgnSyVWOpUmb_G_Z8Kbmhe2jaMg4jiyAkvFSpTfW_LgGK747lKcOWwoxX33No4YoQOi74EXmfZnrHDrfkdo9Kvn9FymHdA4BExLLm8bjhwMZGajc0QSz_o-sKtM6NVt_HSRRJNdPA1j1t4iOiK0a30sRc6NdPR8I36nrI2NvfmHsf7TWlb1xamUah1KZtbQtb15IGIE25EkNtLTh_VLLKxk3xsqaA9w-4cwIfkdWuPD8_GmXxbw7ZxnbKxDMX0BWyOyxC3D8iu2Gzb0uW4rgjGgQnKBs6d", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102407127095841663896\">紗凪</a>"] }
        ],
        summary: "다양한 메뉴와 친절한 서비스가 돋보이는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["매운 음식과 안 매운 메뉴의 조화", "무제한 음료 서비스"],
        tips: ["삼겹살과 야채를 함께 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "삼겹살과 치즈미", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://korean-apuro.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10992665625600491468", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%9E%EC%9C%BC%EB%A1%9C+%EB%8B%88%EC%8B%9C%EC%A7%84%EC%A0%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "아프로 식당": {
        photos: [],
        placeId: "ChIJ0VNph5KRQTURkg3tiWT2BME",
        placePhotos: [
            { photoReference: "AWCwydgmHQj91Ab4fMKX4lZ898q3ruv8UL9ZtT6QHLIGb_udVbo7jczPbfJ1cj4Xs1bONQkUQGNigFOjT267VeC4RcP80CJUsfwJz_O16UlqdoBe2HS1E82iH4P47KaOVS7sBeyIEwqu0BjlF2drx5XvWjWMPQ493gpc5e5JZPz81_uZ_0Gm6QbqrESi4piuND7JVBLwIPcfX3SFVmgFL1cBGFOHWipq3qdQbPOdtq-YjMlv70VFlFS3jmqt7N-M8Gu7sIuXifEtgLstUwesi2kUbsgSkBo64uKdHV9-1qBB0m9gIAS8c3dEAUXo3e2eXH7J7xSNjiKS98yYJql3MuAVj29SbSmXZUH4BYfsjUW_CXE0438ID5BKMcFzL4vcfsZxFsD-GpoC_HQZ-IdaW3BrRh_pCw58gH0gHu5V1YkpWEe1KM7jZjXeuhPjRFVXxqdz", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111755542479336450513\">Apuro Shokudō</a>"] },
            { photoReference: "AWCwydilw-M7M_OhnXqNXeGlfmnVunVTJxdxN3-sutO-jGDUL2tNHIEYKKXyaqKM4krm6Ks6v8TlSEhB6qaJIYCJRvVykxq2jICTyflRIrOclwo0-VTUicD24KRSoiNEM4kHokP_t4RkfdaDTDPRCIFKNAQhoiRXmPeRo_UQa0vmY5A9Mj95a9sXhC4YQDkYgq7h7uDsi0ccQAE0NtFazvBisLdqJVF0mAmnB65rGF-y5lZ7PRC9gSmQegejOhhYm227-nAD-2RQx94tfeo6G7X9IYYuLIwAkX7m1XlxSfpKGXQBQxkmDx_oYu2Lh578CqH4oZg4tP9oJ0newsFXLHtSGNJSOYxs5Zo-wrcSVF5IyH0qyyLMBKq276xDOW61oZXC2BY0IWKIes33wh4D3kFUFdObGXCYzTjl_J2YDuAAoY4j_g", width: 2048, height: 1366, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111755542479336450513\">Apuro Shokudō</a>"] },
            { photoReference: "AWCwydjwPUgCYU601eUVDBVhBd-MepZgajSGzwwNA9YUYrNNzFYCwx_9Hl-WL7evDD6DnSLMfxi0oQ3vPq9bzAdCaI-nkcl5l0_egYcLT75wJfo9pUjkFsLkEnAs-uqZ7pEZLFnvvLSp7EtLHFHl0a_Vm-wi5PngS3aqidD_hy8d9zWMn2i87mog95GufcQu47sbvdo070FhRMkmTHE06R5hgxiw1LzUij3iDIJ7vKmVig9pWMzsxzdXi6A-G_9YjpuoXz2gHzLfVbKsTJCLxhhcMJxH504ERPHImRKvZniIF6xFs2TCBQFKAuBr9NJLPSJ5Kof_m-okdgBZ2CEdSH-NN-Do0BT1kW3cwdTvC5I8q6hZkN0Wsq9K_t55uTsjUSxXYM39EgCqmhYOZlTMDn8kPYgEVIM0eMD1qin--n7isk0B9wTvO-TqCaHntpqB0iH7", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111755542479336450513\">Apuro Shokudō</a>"] },
            { photoReference: "AWCwydgz3hNI6ee5PYHzVcwyk2x4gdqI4h2HbVFs0dnFN4PX-yIe9Z3fyxPjs6yDZ6uGTBkfPkpxVswzBjBTyrEHePOyWMkH5pE7TJ3aQWq4vz74AhsU62iv04NEJeiPmp7aemco2wwPxC3H-5AeJEm6EKMyUm6IK4hEV0CgyrZJBzxNZdqNnuFtFyWHKU-iOTpDzTWjhxQ1x8OVzSnOJer81-th8YvFiMGAOdS1MkpKIKHtYRiOGvcqNw6TIdN18BeQHgLM_BYZbA_YeOdgqkaCa6rJcztYDI_2CMeeSvcdaXsC7dgGoGamsH9zvpyn9P-n-nMRumgK8STnasiPUHZgUeYDyp_l_Fcc4phJh8sa5iceIkUK1KlVia9AHvu3D7gnd0MxeLrQyaF2zi284Y3qGlBeJeFX-PxLg51sNGYFEBhiqVxtpJICAKMkrsOG7w", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107227708518208251978\">田中</a>"] },
            { photoReference: "AWCwydiy9sMeEg7tIJjKyr8CDcH1q6ZmsfNr2-AzQtvrW7BhVZGPzl6XF_t4N4UoNphYcTF3xyfd3fPqdulWGo6lrRIUS5IpglC8ZvkTZ06M9jJ1Uwn2KHBxkLlqGnUsUTqDKqy-Dsxd0ucimsxcIxiOlQhzfV337WyQ0zOYjJGn4wFA1YX2rZQShK_TsuHCevlIaGQYhNa7MrLRwFMjJFYqqZTZ5J5XCLHdzpPG-iFHv_qgkfNLp0-bEpYMbC0cFywpuaVBuqFP-kXyhfr-ymthsCnsH8mkBNr77uPiQ57R1w7pG4rnf85_hqWus7xNTorjrw9PHyaNZz0g5-Tnc1z5xPjflR23QJ8qAH-aNBQ9PCZUv8lrNRW_LwEwd9GJpevvwRoqjdZ1wpQfIQjRBQ9q00jrz_hh_XE1DwPKImHWLBuGDvelwPFaJBOr_ztbQK7s", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111755542479336450513\">Apuro Shokudō</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 맛집",
        updatedAt: "2026-08-16",
        highlights: ["친절한 직원", "좋은 매장 분위기"],
        tips: ["직원들이 친절하여 방문하기 좋음"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "맛있는 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/apuroshokudo_official/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13908512460898110866", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Apuro+Shokud%C5%8D+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "한국관": {
        photos: [],
        placeId: "ChIJM5vnLwCRQTURGw5O7RLp_vA",
        placePhotos: [
            { photoReference: "AWCwydjz3umFN7kmCBg74zUtTkJhEsEvYNnvs-9MZmudpWcsY5NjSxOytP_K2ZMMeVP4QF9XZLt6TVgWxVxuur5Gfrd6quknTFJecvn9MIC1xnspJrer37WRhEX8lihaWevvNeix_QOhPsA4ZOkLqnwYsKzFtuMqDSlMVNNcMd18VSV6ZGxTm0CMpj1SIg43l7hSurit0caKUCc7W1tL5spOb1Y1P-xKSnMokiFsotcZ1XnTz9potPczsxALhBviZCQc7f2IYr4wmCSMQVIDNu4LdlzJPC4MqTn2-rl7OUoP_mb-cgCDdVBZqrwiQ4gDBfd4g1exYE1HReP9ETRQeQkAVTAwfuyuCYzTOydPEPcU083fxc7I-_q95jbUsUL4y_KLSIwhiB7uKyuVPo0UsobEn4vqFOSsM9wx9bnhjdv-J5eXE8ny", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105771902829518773054\">焼肉 韓国館_炭火と佐賀牛専門店</a>"] },
            { photoReference: "AWCwydhLSitgfEbpApTC3fNFdk7Rc6mLw_k8YaeZECjrCgUCebfGkZFNNJqbAXfwfJ059FqbakTBSBF1zaxJEmU-ILnjWkW86NdmZtLxFnRGJ4YG6-A42mlPbXkWDgRwX6JmqVmJy6FhEbgHwx4ma90MhyDch1HqeBJo6LsjpN4rCrxJ0dM909JnXcd_L8kIul5tMFSA1pc0XYKyR8U1dX7W8VvC9JtdfDz5m6K-LKNIYZFj6ah4L7cbkNVQlV_0CxZBjJIZD_FfcPPuhPWN4IKpiRdkJ24tj5POmYLSKDtQJdjd6YSucyAlHJUUPU5VKbZEgZSPgrRTDw8T5373A6SfUlcFto_PCwGow1Y7EUuRaPf_OdeV89b1G77a4rx9F9lgr4rKmBW1euJEuwgzl9-3IL0TwQblbdDNNDpapYgrmXxek4SmPzGZ-Ae9A4jhiw", width: 758, height: 552, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105771902829518773054\">焼肉 韓国館_炭火と佐賀牛専門店</a>"] },
            { photoReference: "AWCwydhv4cgeQk1gkd0RceTvM1gceIyjM5_iTkwVPwn2R-xHr22NAzd8grECauIYN7iLQZWFdJylWgoI8C8reqviNpc1ixNDBS998PlA_3O7wdX6R7qXXV53uI-lCdlO2_y5IsvQ7y3AKpWIBdHEJKAliYhzTBinYnFdKyT73iuFNsxdAgenNw5j7AbQgYjuev8z4bWSieFcohX0EUhyZtfCnfv4hftZhhDlULWe5pq__KVAK6vHNAtGBNN8db_sGTwvJo-DjEkADnuR4fgkpa3pS6XBPc4_HSyO8WVce2q9P6TC-ZKiPyS_K5GNSgjZpUw9IWt123OjzxiC26s8vh_UwTQnFY0ApWmrvl81rGk82CmhAYy25st_xls_MZEW0fjD-svpICG1Pb5vU7EYtpvOG3ut3IMXkmNSO6QjO9eKHoyOYHv7t21S2Tpkcq_zaLs4", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107076754394546377792\">朱豔強Duncan</a>"] },
            { photoReference: "AWCwydhoIp7POn8pmcSuhGigQqt9ZRy51RjCdVxgFGciiVs52JzHWGaw49TTQUplQZOe46PBDyND8pCbQQ8oPCs-bI1exSrjKFrk2U41wajE-S1CX9yf68fDiogiG4K0tiYCE_sEL2QvZ1kgfbyo0swmgYuzfy05cRrTsyvkXnXRsEw5G8va9Y_cm4nXBTXX_dIzKYMbTfdFlO1DV_9y4h-8EMq8iLoT_kDS-hQHj_-sJ9J55dHY80H5n1xgwAyFFzXR-0jCQocqdKuFb1ax9uiqXUYUnqACZ-4nc9MTC7FLQsmZB3GYn-VchmVWaeNn8I-NbCuoXxc-Blazev-jjahXiCxavNLXZP5KbBSPmeFpo2SDZoEDMAIRW87gcQf243BiwQlIzkt3sECkVWyCCqN4mkP1V8ImQWqKQgaDmotvGJFqabxrmIY5uP9p9ifrMuNV", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107259940356863488892\">정하영</a>"] },
            { photoReference: "AWCwydjVrmbaK7VCYCgvCgQ1J-sqtiXJEQlvjlwg2mIsZDSlvOTagwkvspt2uGhS8gu_6IKjsuDHp0iWGw5i_72acPDN88zFr0fY3BUpY8n5iVYnWGx-wnMPySj1lszp0L4vmwppOJoLdXMaCaaPi9UdIak8G5nRpzc7Nn6gtqDS0C93pbUXKhkOeajJPqoiE_AfLIUdxp1oWzSWY-ZBhRDLR70j8R5zgnNjw-NGZPj6ytAhM30DAp7zxGt9tSA6-OU56YqcJjUsowlM6dXnXXHXQ7fne55C4ypyN5c7LyMTgZXyiFiakVdaiyqTWlJZX7v2gv3g6sfPTLOIrKbHsnlpZ_mBr2yfADcRwN1XTmdpmRQKIR0btcYA89tzgje3SV81tNmGQoC7ctkJhuaH_8q1QkgbdScntemD7qEbB2YSyYlqG7z-cDBF_zAsnZxtRRtj", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102788352301949590862\">隈部博之</a>"] }
        ],
        summary: "친절한 사장님과 맛있는 김치찌개가 특징인 곳",
        updatedAt: "2026-08-16",
        highlights: ["높은 고기 품질", "맛있는 김치찌개"],
        tips: ["김치찌개와 밥을 함께 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "고기 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00 ~ 오전 1:00; 화요일: 오후 5:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://fu-kankokukan.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17365573480687210011", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%9C%EA%B5%AD%EA%B4%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 라이블리 키친 후쿠오카 하카타": {
        photos: [],
        placeId: "ChIJfQax9dyRQTURQnKOI_ZraPw",
        placePhotos: [
            { photoReference: "AWCwyditFn_TJ9eEYAAvnaf8NVNJOzkAoujgWd6b9cmereCScXGWruMpeQMBfYjODDPSrT5MqFaXAU0PRHmjqc8mLiOjzpn9QYHsfeRxPvVEZd1CIn7TKeZ3cn0LDDrlpF-rCjLWoAQiXG9yQaFQKKfPjFEdetzhkGtVemVuCdWOTe-VjwP3UyQbc71fxkNPkJGU18VXaf9NWrD69_mjNRpWfl5rkmZDGuqliWESEhysM5tQ2l4LOk9lYIgg6zAQ39oiATv7K2Agn52a9TZ7JHxS_Sh9Fv4a-bgOw5LOKCYIq6hHzk6DWpUxDIhaYtCKt6azzBDq0LWke7yx32LzcempZvdL7KBNwM_eVyUIQJqmRkj6iFAm2Jk1k5jrkQSSHNJmNZTiX3cLK8BXc_7M4YcC7UJJ4IzNjlgdrIxom9d9GLIGAQ", width: 594, height: 446, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108042832725089195291\">ザ・ライブリーキッチン</a>"] },
            { photoReference: "AWCwydgCDGzXXqPPAWmsQOFAemPjd8Th7-UxbMjKoCEckxYFrTXP2t135u-CjFcsK7rn4oMR5ZGu87hprpTTCN0fwtrk-7Kd8Ub269-4Fbv-OLZeazkxm7RRqo-MyhIYbS8qAtznaLBQJPyVqu21ne0kAUdmFWGcMq01hnzcm9UO4gfoDqwB3hIf_HVT7R7Tjy_ybbHd7pEIMPF2-7iAiv5tWsjSgwzZF61mDu6SeGF234I3Mb1G8HaPaZPVdCTGahW9pIvuBqmVlBwtmV9Is9cXmtz0kAo_xeEAEnaPw-J7qxcJWGh9qEIoxjkuJwBnzqPqIkBkTjlKjRRAf6K9QUJ4QIt8HvXriyPJzfrH9P8Vg7k_IldmRXciSXToa3HbWhWC2mueQi0B-w1kTJfttI0_5Lyi--cMRCjhC5N2yA_1fg37NHFVT3-Ooh4QKo4-UXh9", width: 2276, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107846733311758425176\">HL liu</a>"] },
            { photoReference: "AWCwydiH_vo-wb_-Qx7DKemKVxEi570tIsdmxOupXqsfS3X7v86uDIXZuJ1trnqvlVgA1T3EbRjxoLbR-O8S2mfU0Fid4VQ21RV2mQ29WlcWTM8pJPYLKeSUYaqrsM2MDYUuguJ5SKyuwOn56a0d_BqOKMSEsz9aDPiurMddGrYkFFZrIraQBBgmCWUZ935DNW4iClY4UfPmzLyG_7NEYVGxLxy9Ow7NJn7mTJsercFueN3IUNswRuBFcf_23LiOjLh0NvkF8KFB9LmZ5U-fTRysu9rjywu4xfrXRqGOpJbrfMwgzeD8FLrE6aDW4nWzkhoqvHzUA5N7dLCe_iYUu626e_fp03LELXLT2LJVhIVf6GAsBkKsPLvHP1eQcAmexpM_As6ex_4EviFGGp1C6HgM6JSVSwi_FJ2iD4mzOrlWS6tpsQDb", width: 963, height: 963, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108042832725089195291\">ザ・ライブリーキッチン</a>"] },
            { photoReference: "AWCwydjb8auA2irp49LNWsypp0rGCckNsYcHm8DVC6ILg5pd5YbUXShNrN451yIZWorUbP_9kYISCZBfd8c7dFJEmLr5F1PTPVxt4GjwTsmNC8qsLaX3IPqCZnyq_DEezKtUbRqNK7GhSnxge6fF-XWdXGGpMfRMTYHSobnMWi6S9QFVo0p6hXy-WGWYrxCA3FhkazxtbTIx5LAMHzZP3yiHT22yHcVRcGB0ZO_v40SDB2TjtdvmWBdgRSz7ri5jwdRZnDlxu6cKY1it4MGHUWwtlXQmjMk6aipL1mcxdvSeWQYPkdswviv8Lk2FkGEgLyYVl7mAuJKWCuBGu3oVRFrqVBlSUYDuUMWhE9t3_I6Uyo6DWqRGgHUEUMmDcY-jMGhIPXyUl5luUMpM-B5oby6acCYJ2hGBfE8KcN8E39Ku-a3JhIMMbRFEtxKkm6dkfQ3C", width: 2276, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107846733311758425176\">HL liu</a>"] },
            { photoReference: "AWCwydg4mv1v-GXep7fWqwz3J2FHaJWuOW0V4kLZty-0-8P3ByPaUssPkLkj6o90legNOK-i0_AgZwhWVol3ixiBOsBG-6ss826XtGCo6eX6Rldj14pNAq5fZm9T8CxeWQ7uf32lD5pLxeAx5piQvBKpLR5msenTZTXpC6IHTLMP_dLSYs7wGMJPwhEOCgB1UswMXtRbNvpV5SwcEjMOR85FHUiGYZE7PuIP2uLr6IOmnhShYcni-bsojzSaI2Nv2HEQrEnALGyDSE5q11OASLqfQBJh8qaUjtsKvI6f9sCakyFQpYGhJMPuxOFMjchtpT5APK-G6r3vs8mZjDZz-fEctu7MyLPW9aldAMVy4owKItBqVwsATRU3f5QmML0UX0snHB91SMHzHyH7UD7robsBKuk4d_p59IZG0n-E8UrPSTF5CbFOSp1vp5ePmD6_TDwI", width: 1440, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104622540404277957627\">S T</a>"] }
        ],
        summary: "인테리어와 조명이 아름다운 식사 공간",
        updatedAt: "2026-08-16",
        highlights: ["감각적인 인테리어", "아늑한 조명과 그림"],
        tips: ["기념일에 방문하기 좋음"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "이탈리안 프렌치 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:30~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.livelyhotels.com/ja/thelivelyfukuoka/thelivelykitchen/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18187905800038412866", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%9D%BC%EC%9D%B4%EB%B8%94%EB%A6%AC+%ED%82%A4%EC%B9%9C+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "써니 사이드 FUK": {
        photos: [],
        placeId: "ChIJmZoJaRyRQTURvY__KNTBJvs",
        placePhotos: [
            { photoReference: "AWCwydiobO_I12G_hWEJuoeWGiUUoyqZCN70mW6bZeh1x5T3O9LvTfCSn509FNGYpWkgKYjtVqOI1nc9g9Y6P-4ghEmtPvg27fLMpKHeS5-b9jRMamaoVLw8eBhQcpgxOwbm9ko4fKVS0spgU6AEnpIqatQMDnWxBpRl7aRRdrCSFzO9MHxweqlqoeOniVdmWzzw_jL8wEKIywC8D2V_3QtLcmaDu0z5APYqBM1310R99uOa4ERnTuWbQZ_zXFIHQyVateNGtUnhAAes-MeHctzQwMbYvxIgRGVA8qoah7cEue3DD5q-XmDdPo-2OSD-NPZizlRxn-ojIi8knd4m6b3aNFUz7prRc2NATA8J15wPWOXJHkJXUG5crPecuJgcvdpIHip2miQ-Wrf14gF5x-iY-ZfWtbluwTak8IPlxGjXjJm5ayMdHumzdMi44jbVmoxf", width: 1365, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115694343699812444053\">Sunny Side FUK</a>"] },
            { photoReference: "AWCwydhoBJ1_zH2MnV8Rg2qApW9X_kFTlV-T__UBEMYNZCioVU90OlsACfvFIA6kno0_nHi5rRVImnzTEV9zOXF5aNHPU-XtoR_JsgUugC8YmgvIpoY5iZrlREFUptZ7EiH-c-fz4u_p9Xq2QKdrq7falMc8ujd7gWQhaxn9l0Vt185S9rgj0CUtDUy6Uc5Yvx8y8in3DloO_ecaJAm3Tv49R0PmUoZqEbTWiXQG4kPNnZ0gsSHwSGlsCd9oPdE2WzdETmt6abxU2IzHFaEFiC_2oHGcKvuCehVJOjMtUrdlWm5I1ZV9b1WS6aTJLVDmEDiFdnMHaqLJS-ONxaCnqJOAKgZTaWtVO49tsZub8uidVZYI-KsPpnIvAdQmhHJGphSXMlVj6K4PR9Fd9O6DBoeK6tyOjUfi7EyEvWKe-uFTs-B4A5V8-52cbWza6bhGLWsa", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115694343699812444053\">Sunny Side FUK</a>"] },
            { photoReference: "AWCwydh_fNlyV0bD0drDP1ZerLg_YEnxzJNXj-nAC1wFzGX8ty6XlG_EULMx3ZsEz1oVlCy2KED_vanFziIlglZ07b6utrn4ZcEobf9MLpO-6HBJeYFaKsLOqJgy0fuK8ikauFvdC31vsLahGez1jM-F7Z1kHSLJ9k5Cd0dPO41PlYM9CPchMbcWuKtkqQp8pRTYn_J6dBD1ZOWFtvGlMsSbivmlj5mivfn2EBKnsYoz0mGNM990q_Fs2wyzcnG2i5zMeS5VSUUmYbCn1tIFvGxoN4QcaqNDoLX4DetSYGShG0SJU2XM67r3f_MEi9b6y15pRA8jhqqtNkM7ur4GPzIU9Tfkxl3QB0_476YE_Jmtw029uU_qwRRBNPHuDW5fCWG6NQZZwDnSHy2oGFWhrDzzQFsjkALwajS2CSn3OlCr73pHpSuAOJ90-DJq6bm_vw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101307587568077633961\">규린 (Kyurindate)</a>"] },
            { photoReference: "AWCwydhVlBikhyHSpGdbW16ExksZO6iY7Tj_bvsLyAdj0ejbANWEeAOglX58XWNo2mzyntXxqRO3OqnQvGa1ua4jKdPtf2sNqAvx-HynZDedLx2lKuCem_k_GTgCjxsHP4RcZyoIoU64SYVL2WIlMjMdC97xL0PTe2qoSAHHiySNY57LAojOsITmAF7PPGizrJNA2kfJGib2PcThQX_X4cdQnrGWDXJ9iRxurupfrFabD1mJasZgLNsWnzqIkXwW1CBIvT1lf0_l-Al21O_o_S_DmP6OuJWlPhm0380gs0ZbXUAkG88CabS_26SkaXHG73S_Vy_RvLTMQZFvH9GjuzGfoId9-cYh6vpoty8YF_4uZGIKbgms95QmZqcpZEcEUd5pJN74U1RQBEKCQV4z0omJb5HuLgIhFXVQIKivfyhGV--wFZ7h8VQjDMXEv5TVDw", width: 1024, height: 1024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115694343699812444053\">Sunny Side FUK</a>"] },
            { photoReference: "AWCwydiXSNKA6_gMWwu1xLV_BTyVScXcv8InXoVWNWh0nlOrtl1qjFhhEJkTIMJ7qTku8k1cWRODD9omtRwvXKEF29hUOrmjDpY19SmuNP0qCfKP7Xsw8HlOjs-UDvfza0IVGsh8FjQf-L-fcyBRhFv4KBnvn_3Bg8mW7PRk9S7tyb-M8aLmZWJxgCKEHtSWjYORYMxAtZrJz11rYObsqjLt2LdsNiX_nhTT4bW6ZgZyGrOsjqjb2Du40z0-uSoKRlxICO93ISYvdb_LQXECHsZ3YGpFM3EMWrF9GoXyOxDONNqZylWvZslxNHMFW1QIwEil7Drxb4MSURCSMLnBMrhY6gYSkpbo0KgQ4KdLRkm4fwpuM4mStLl5yBm76aMqTEzxJKRYcX0XN5IKL4ts2liHlOUZyUUGRG0u40HVHcwTX7W3arn0scMPo71btTHbQsEg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110757658069401230797\">한호남</a>"] }
        ],
        summary: "부드러운 계란의 오무라이스와 육즙 가득한 함바그가 특징",
        updatedAt: "2026-08-16",
        highlights: ["촉촉한 오무라이스", "육즙 가득한 함바그", "바삭한 새우튀김"],
        tips: ["검은 소스 오무라이스를 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "오무라이스", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:00, 오후 5:30~11:00; 화요일: 오전 11:30 ~ 오후 3:00, 오후 5:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18097365269599981501", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Sunny+Side+FUK+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "올 데이 다이닝 코튼": {
        photos: [],
        placeId: "ChIJI4rGZ7eRQTUR7O75i1cTPgE",
        placePhotos: [
            { photoReference: "AWCwydhMneI7zQ2C5erac2jgeUt0uUtvXw-GZfnnsAhN9UbjKr6A7dR7t7vkgEOe7R2NP3bcxhZSDSXx4V6c_81JC6BqjkVGN0lCjqbfzXYb5ciILmKRKbPPn3WNm78NsMZdOVuVc7BvOaW8zGbyQhWGVRAJ-KikvPPKbgULZnwEJVKcLnFxjECKNl6Y_7z1PuUvlnJv7PxvRqxCVzt5Di8V9D9GxulJdCFk80roK1td3IEdmmWB1JLCLTx2GfbS0tXJoPxSbOdzNiHnB5H-iX6rTkWEzO7n3CjYKK_zsPh38oaNXiuARnQYNmCMZ8dyJuLt8OM6SItb-QHy2j7u5aRZHasq_ZBfFaDLJ8kpu-IiLyW-5nJ_D508EArGF2KMwyQFreIJ7a57ssJpbhzwavvQea9HnW6bGwlfcZhjhdI7_L5SlXw", width: 2128, height: 1418, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103102557150066422139\">ALL DAY DINING cotton.</a>"] },
            { photoReference: "AWCwydi49PCvVW4kiqdGYWVyrwGwt-0MyGc4IjqJ8xyNc0_BD7-wrnEOR7gLb0sKF_75_fmXRQAtThIE3vpXvMgoiWj8ddxcFUd2-SVIuS2ofm9pQGzxScgKFn_wtOFoGFQSC5yRxbZ0TCl9dDyVb_K6Ny5LIWEV2kREK8DXV6I18A_9QXtQHG6irwR9DdS8wNyX03iiromOSvWu_WEIkqgC_41RdW9P1adwhAX9Yh-VA9fwhfwuZxKjtMwcxVA0t8IDv4dSzxjeJE-eRltwNLGPrTZQ8qUtEW6IiZWvX5I8Na-__yHFfGTJ7R7BH4KP_w-gCE5F7MRQV_7GpZBX2nZLvhaM32EFtDIbj6ahtDwUoJDA6y_H3PjGvMECFganVMIE7m0nXB4z9gNnFqqYJi-A5u9FivhaQR9PMPdfo_aTeRQFinyGrnd3pfcjCPvGOg", width: 2160, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117224909027932621679\">オールデイダイニング コットン</a>"] },
            { photoReference: "AWCwydh_xxmKVbDs0bDTmuwPIZoF3CIB_z7gXGhcBLdoM-Uja8lDc1yGgSAVb2WvMdcIo-_AFSHcXyE7oZ3di6m9oBH9db4-gVqbTvvFFSXmNLR5DJaptluTOpGKmv5IhfHUAiO3gbaPjAAy0MIUwRAOPrgHgnuqosRLXXH1Myl6vHJf59xvxImc3bpr92TGqSL69RsykbJewYcEJaq-CaocQxrGMHioIdMlKkj74elc1J8oj8fYPiGOx7UdQ4XJPrFHgkmtxTDCJIeeHGA8AlMgSP84PoKxi9wzOIRexQjR524PAXSrsEYKOkG6lm1DG1GxHhi2EquJSLBbabtWPlAcKDfQE3mEeXqEE5MNJlt6zwamL7PsDBkSA2mvQ4IXJ7Zjt_KyuVwlnmzk56RMgvGYSHp_hgnG9V3jAZc6ig5B5CU-WTRhxq-lAAvPM-sl0BaX", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117224909027932621679\">オールデイダイニング コットン</a>"] },
            { photoReference: "AWCwydiU6ocjRSFNbRrjUExG2YxgKoSN39YXNAo2OJmddkh53F8rW23JG39oko_rAhNTfIq59x7Hclb3fdsukcuuXeFijicyYDZtBcHo55sAbs-zFM4Ih64gmCDc9Qq34s8XCQjOEo0FPXvz8dEHtbijztc65YcGfF-2jW82MlVpomKFWkZabRtet-SdOVFux96jPMaJCQJ26ycvPNp1jh90kXIcXKezXgDFQfhsiCB8v5pWSb9RUwgASdJOKcU1tMuqYzwI-A7lVesIhQRqla1mEWTrgEAcZ1vT6NpMON7OWGhsriK2O4xf94K7rYUBIf66XwFKJcoNpi5XS5JeFkvgH3h33o4f8G8leEgogZolCw0Y9AYT0j1v2a81TMCSO0twY-GVERaiWztPMPd0X9B7NpgL6kJB1n4cevS3KCyKAclEVSfktUeboany859RdyN1", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100801354677539657543\">柚巴</a>"] },
            { photoReference: "AWCwydgGxEZV2NSvA856a0hOpXgg1LbmafQMCcYiDLnLtpFwfirzdCmWH6Mdbx54kkfOB-qOBFC4XGv-WxC8uumySrTN2hcTIGe97Cxh5gXHVH9zTeHkoKtELYjEasu8jXJmODUT13zCfBGG_dtA8skmrZUzfTk7OdUtuiif0hNURJ8LQ07yetxFsm2yKw0ghuJkT1IeJdhkf4CvNFYSGH43jBJMZEgE5dLDWpz3-0K8dog0xVUQnhwvLjbxf5IfqOnnNRc6yYH2NMA0LhIdmStmyn3N27NtGvJa9GYYFjCbx-Cuqro3ayse3S7_ShkHMuRW0YOC27KiMPQkb13NYAJLjo6pTGSWboDOIMo1pDOaFTV8q-Yevpj3lV79Rplt8fUGoljgZ4hNsfKSmYFEYtCG-DGPLRa7c9QA0ihU5Uj3sOEA1b3nxXmB9nMCzGUa447b", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103261655143298695186\">Martijn van der Sluis</a>"] }
        ],
        summary: "친절한 서비스와 리프레시되는 분위기의 레스토랑",
        updatedAt: "2026-08-16",
        highlights: ["이국적인 분위기", "친절한 스태프"],
        tips: ["맛있는 요리와 함께 여유로운 식사 즐기기"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "서양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 11:00; 화요일: 오전 11:30 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.withthestyle.com/restaurant/maindining/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=89530309325483756", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%AC+%EB%8D%B0%EC%9D%B4+%EB%8B%A4%EC%9D%B4%EB%8B%9D+%EC%BD%94%ED%8A%BC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "이쿠라 하카타점": {
        photos: [],
        placeId: "ChIJ_QTFQXqRQTURvX2aemXQ24M",
        placePhotos: [
            { photoReference: "AWCwydhUU-hMGfkGBZ6bkd4BgtrstJyx-maFIylufMXWl7toKlfGdwrgbmAhI56hIzf5j4ZexDf2luUCul6ihBbYzBSoO4Wewa4nEP1y7FZH4T5EOLH_TXDOog7fBPp62a7D2OwaKtMznrqfL75wWa0PAqTliXCp_62BVkMXaI2DRpeelSD2gt5lwypZOxpnPqqkquZ_CgcIdxMS7o2AhHPkPqvdCJx_QYiS4jXUPpCWNHkDzFzHE5C1_p1y0PNl9tqem3XP6fIpEF8Elv9yK55uZV5ZOo6lEjGn2W8EuJfQGaXCpP-aaixzVyK2tMGKWTBduMN8nsP6SLQ33tj7o0mrf__NN8__BIVlBK2h0S7qJdsYxx5ipJpdOX82J2R1mZuGYROT1sveWH5fp30O81I40wJbqZMG0RwlNHrXF1PGfbfgPHs1_hb6FTXHXf8sbU-I", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106634796954428331699\">j sky</a>"] },
            { photoReference: "AWCwydgkrcY9Vh0hyh4NCjCvGF8oGpzffDZBG3CVmnBKbKZT3ZhBZp71rQjVPUR3t1c5PVsBNYleV8E9cWozijuLJeock9u3xA61H20F5wR74nukY9KunDkwhY7jrqBB4PUT77gdTR87YzS6IkGAuDYjJg14_eOa3i1YN80-PLa2ab5sowIkekY5o9zz4mIEwd36p7aLcD8-T6udRh6yE6Z50f-_Idl9icuLXhRPm_6seTA9tHegijnH-uNRWuYLM30r65aJLynEjNMEa5kC4cPpT_ldZmUTpNy2xgc4lIquunktcNictGpkOcsoJuLVkeryj9Vs6UchEdmq2e8fOAZnE_uk4liqxCDyMV4npqtAoVuUcumj3GYR0_joAhrgAXRTb8JJN-vlV0GZJPuCU5aKamqVTYNp-jrPQa1gIrxlLX4", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110596255554899458409\">いくら博多店 はんばーぐとおむらいすのお店</a>"] },
            { photoReference: "AWCwydhxCi_e0icP9uQ2aX03OHuVGHedLEGSUDkfXpAeD3e205otx8mZs4D8t0zBXPOWM0M45Gyv_m6D7jTWbQosvH0LHf_ojjM7denlKnojFs-4N6LN6WcvarJeV63XUjusGBkCWLr7YUJDhsPHNbED8kBcruWuY6_wxkpX1kk3aqK9kl-IoNRcIBQSXoAzfDqmT8SZBHGKuHYyFoXlVGqwZXVNiw62WF9ssQR6yCZ-g-n8XSclPPONLu_-Z76UV4fFr9LPFcYMi_-MYTL-rdEsoP1bMRdUyuBkIZaWt0fwiyzDMauvI3ez5jir0xlrz6fNs48QdHgV5-qHpcTf_4EYKTJtkNu36104XinPSrwVVEyLYqxwmg1ZOwCZnUtqM9_SeSUDTf54tzWi31Qduj1lF-MrhBinQjrJ7NdTnyttszawsDJeb1ZomWVrlWOhkTNC", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102214867438488445368\">陳美霞</a>"] },
            { photoReference: "AWCwydichCovnjQqMJ6Z7sE-m8xjI_axCTUFWHisKQSlET_32h_TyLeLt-t2tQRtSfq7JlVJFjHMTQuleA8nzMnPtCbshemqTuOQ5XxHjQD0mb5e_lCf3eXI8M28OYgqbGqKAxQGIG-xuob9sw0h9GCdvlH033AlfqYw5OuQHDenJlMPrnlRqPlTs7ZfKi5nXGWJ-lPSWfWQrr4V8rikdwQC9PwXG5lZNbMJ4VbzjZ5g1Tqv-aX_NdZZcgNxeaPigNiBXpwOpMBRT7y53meLdvH4c7mH_nB5EokARj1j0vkuYlN8WqSz2h-9WkfMfERKyaHCwMC4gFrFebq7gYdnYtBuizcm25XYd7x3G1Xs5FcWBHlJQZRcm0PCkbedlUmOtmr2-gyNQC2aeAX7sbAwmZKbQ4jkoI8qbNrPoDrTzYPzhSoYfuL1MrgjNxE2o9KL5g", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114468551026269359173\">박지호</a>"] },
            { photoReference: "AWCwydjFVm70hOl-jKJ-DQwV3v-ksagxOE_ceGCgGS-8KXZ9wnSNM1i_i_eKZon3sQURwEC-nvnJJVehOKOP1v9nWggmnESFZs8QxEvHd3BO6YH_LeXd8CgcgYDkz4vuB2mxoIOudwRyN-ZXxA0OvvmDFSx9HfN_YcJQlPkANtGrDf99qCd_-X9jGaxV_eKWrwNlWeOCgIsJdWJtkAWmD_U0xmLQ8NY7nLWZIOzwO_9dB7vPElZdraYxod994kGErx8iGBAL-Dd8eVSiTacHDUZA5jPu16fRtkoV_csCW3i0H06QQQIPI7WvIj7fB4U4tZ_n2FZneg6Z3WmElSdtizLXvjHHtNO7RNFq7DNKvYGf01Cii9JjX2WMB6KJUV2PJTPUniiqtR_1J8baeMkWIJjbOeHfXzus-LsIWEKvt92AyP7R0gclKnLY7E_nQ6MDNw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101307587568077633961\">규린 (Kyurindate)</a>"] }
        ],
        summary: "친절한 서비스와 뛰어난 음식 맛을 자랑하는 곳",
        updatedAt: "2026-08-16",
        highlights: ["맛있는 메인 메뉴", "친절한 직원들"],
        tips: ["치즈를 꼭 추가해서 드세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "서양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~8:30; 화요일: 오전 11:30 ~ 오후 2:30, 오후 5:00~8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/omurice_ikura_official?igsh=enNkN2VlMXN3NnRi", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9501416973135412669", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%BF%A0%EB%9D%BC+%ED%95%98%EC%B9%B4%ED%83%80%EC%A0%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "우오덴": {
        photos: [],
        placeId: "ChIJRWtUuzuRQTURz4Y11F-39kk",
        placePhotos: [
            { photoReference: "AWCwydjU6wmb-arE5jtMn0pK_aBrFuFZRefLyg2_841kZZcRsDlPHfPqiXgWfAXAF6EnuAAz5RYWCP-F8btyhVObUakKGXxUgXoq7lU4iVXNrQ-5y641LG3Ti6eJCewuAsJgPIuKJHYWXjHiKw3HFlEWqTPp0XY-wmVgd6Q8AZ5aa7sJQCQBpUIe6YjLIh5RZYLlnVf8Zl4RRhdiJFS0A6ehpOT3BHHbxkh1zxVG4Td8v01jPZA5VNrlDfTbXW-oDxhkxBOyOpge8XhXrQoUIBMzNzXj8hAJaOjqd4iqn6LnEwV6S6jyGPtLsV7f2Kp00Gitk3JLf1D61W9kwEMn8pN7vLb3t31JlyEuozMc926RS59hnkN7N4yDWNiWT9MoyWe_I9GTY8qPPx_WXRPACMyrCqJkYk0SLcfZ-MwHbo31JGSWdWHDClRg1Ispt3hZ0ggX", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117920890578440678834\">博多シーフードうお田</a>"] },
            { photoReference: "AWCwydiXSXvCuL1l3m1ZslgSV0d0MHcTUWLPgfvZCzfG9gv7F3YrJD6KEDxgkUqSRF1oEaQDItclI3_3DqvDp-DYrdV_HVpy0moxGTKo_W40OfYEhNVcbgOCroXcz5O6HOVYNAknk6ctj1HVEoBplNYpXst7c8bB6xebAvmzyHJgne3JpE0eBHOs5DbOxWm2AoYeU65Bf0EaLiktMRl9YE9VKReSKtD67zFmNwZVY1HnbBk0RlxALuDUdo8cnLqnl8GXEteo7VGnPQ7XK6bnWv4iH89NgpoUGsQ0797XlbSipNl267IajH4CwJyhvkw7jWRwVsc_DPaXkoVdWbWIaJMak1nvS7c7AxvoNOpPpP7nRkjoJzm51BsRQ8rsBCU854ybyp_SIPRhman_33JLtZok_VogJt_W_TEeoq9xnp2Zz1lO5BP-qHstmQfGbCdImw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105521036104195720628\">장교서</a>"] },
            { photoReference: "AWCwydglku1lIzOA-c9DrtKlrzkyvKtrzM6YSThuPFLG4-pxjZwESXTBQ9Ml6kxyYRxyhbxbxQtYThlaEpIbSuhKpSQfXF_9KfzQYRSGHLR7wdrt8rWSZOMJpFxr-yC5bQKzs3ye9WOiNf_Tqcc3N3b4jfKHzI8gR9iH6N0wFL8dgdjoUj0tFFY1c3nGDjMKng8RAZvBtp_yFMMSYifxQcCkMwPqfvrxI9OiXxCUUUo5JlVboIFoczKtkJxqzUtxNOzTKOqDNXtcEkRVWNjfms8j_UWw9YMIcqgSmdCy7IAQNGtvCUbt1C0HDenJDCRwGgDSdl2OfovpuF3kmKDBicS0JRG9tLxfgv62sSOO-Ow2Q6rFf8iZTxsPVAiu5Qq-XaG_jAHwdHNKwfrF180wkqIy4HjzxtN4z_muel2nR_SIzaHjsovoWkWaAcmCz_hX3qPM", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117920890578440678834\">博多シーフードうお田</a>"] },
            { photoReference: "AWCwydhvStO6tPgdEfyQmfOzt64NXR_HEWbeYs2F_1ytX4D03McCEFvB2_onyV-4ur6T-apCf_Emcqjaxr6gTG6ssl37LAv-qIjM9FPpZYFpqocuxtR5XXGGurn-hQzTfyelJqBeNofFrq1kfSNVKsHrFY9K_zSM_hrYHvlmQS9XFnOLRw893ow92pSFJ6Y2Eh3-kQiSTbtQ-Hwo-MPcDVuT-cnQasibCd9xO5Ot4t86sjqk6t0kp70DekjEZMaaFv1CAx4m7TlC3xtpgRZjuWYwqr-NswF00oWubxxT9-2qt6VNz0dh_uabkQfnjQbT-L-9f9EoqXAXIEq8QkpwaWoE_bcm-GCMsMKq6lfL4DqlYSqsw2w72g484VnN2IupTZcjBOcaZuxkIpy06PIRX-TBvSSVg5P61OXNJxetLf2CG1jDXPiyVVUl5EUNfdSz1y_s", width: 1177, height: 884, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105156955150099668431\">k m</a>"] },
            { photoReference: "AWCwydgSaj5qmsVIlcJsDLK1Y7X6xJdM5mpi0YHpN-P5KjgPxDK0DbX_ckwTGn0tIapNgGekaa4gbuXIQya7RsR4rwrjn1b5iuxIRme8CNanqBCkLG1m0k0dbDPu6YA7VCgKV_6F02Hxn8TgR-jRZAOFe7d--ZUlC_pye4mUrzRhRQuSirxnue5sXDwOMkCo2aycTpbIpcAanLzM4rOzEWpDiWHxiSvI29j2QJHojPuQQoGiE8rQ_29jI6eDJS0jme6ekfn5M8H3q_OGaP84pgS6LzxR-9y_7ln4Tzp9JcZBaR4QkINcRXubw2YDcr9azhX7k8OQk_JHsr9RlkaAFIDnDjeH0DeblazD1q3m4pXmAZJuqu6CKB6rJju1eGNwH1z8oRBPqvMTob3AE0nYroy0nx3OpAwjasS7Yml083UAwPX5OASzZd4qGSyyKJ0kBg", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115763310095171702700\">박새연</a>"] }
        ],
        summary: "강변 뷰와 고등어구이가 특징인 식당",
        updatedAt: "2026-08-16",
        highlights: ["나카스강 조망", "맛있는 고등어구이"],
        tips: ["대기 시간이 길 수 있으니 주의하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 7:00 ~ 오후 10:00; 화요일: 오전 7:00 ~ 오후 4:00, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://uoden092.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5329648831249614543", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EC%98%A4%EB%8D%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "시후도": {
        photos: [],
        placeId: "ChIJh8_VLMiRQTURBtjJnCdOdz0",
        placePhotos: [
            { photoReference: "AWCwydjNN1PWKTDku7mu80b6nlODNMUPAmn945LwX6DPa6J_TxOp7JmQzM-pGBNSMVdTtLUGffV2fHXZiFP6-Hse3YIyjZxxyPS8AQ_6m4fDEnPofbuDj3A3XIQE3RMG96npeBKOppyMT0Vw5-WPSoL-tiz7uCvQ4FmgR4cAsMolBFo_v1edYDnp1Afh2R-bkHxzC3htQqBmd4nz6Xlq8UW5sWQK9qIOPdBdqZ0X8CWi2-CSRaUjiVEfMD-x62DCPzHvGT4miL0eAE5N0kEasA20vCdP2clQeNqJwTbP-aSMrFoXBCATDGyKBJj5i3LX0Tp9UlEKLftFtKpSVgvjqq_T_1J0ZAupaCsEtreV82nE9pbhNMkGrlcjHtJvfZsQneYrYMfMGx7VoKTGPUxTM1Brn97QE1l3YzHR8zwG0gfS6vGJQQpw", width: 1000, height: 667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115230948775811321553\">しーふーど</a>"] },
            { photoReference: "AWCwydjnVINuMZ37HJ_XYZV1jYEspG1RTPIt2TyE55ibLRhcG-5JkjV_CPA9R35OSIdCnlr9aEvAa__k9GT0fZTQLFWB6aFO3BljqvUKzi0Bv15IJZlYLuLvPjsnPPb4HOJMIUGizsKWK-uhY3YdkM7N534oJ-jvPm-tB06Aq4Xz5q67tURzyiXQZd6GT4dtA7s6sUqltTYOAiICtd9G3filK8BmYRmTBuw7So-fJEpOovO9AChlHQLP4RzY5yNUTkgIfYdmyJVBeulw_GpJz-j5pEUfKhtNWOhd1gQGp3oIsV4unuVIS5amebRmTWaXSdP_6tstA-KTkq5de5rpYUFsKMOggauZykV9poZb7swupHXx5biA59lSE0cS7gmKA26Tv9e1ZSgBDkETvPnvArt3W2f55LXWCbngQnM4b2NooUnnO3GqBi9K_tbdvYEvL126", width: 660, height: 370, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115230948775811321553\">しーふーど</a>"] },
            { photoReference: "AWCwydhJsGXr0lc5YY_GYTRfmKqsA7lrLyhG6cHI2bvhoemjpeKnCqCgbfArQNOYcT8MWgAnwhyOP0xYBNX0b4PxjCZy9RsUy1Z9un1Gyg-t393viJbrl_uIelFELWC1w9F8uxxK8Lk5EGY6h_TH_yVYvH5m7dfl2twGG4h-yjfXI6h0H1mY5hsP8GNYQeMPKpEo9y7CpeARbF3WoONpBqpSsUUWRHiGVROUrOBJne5h7zMYY6eHu2-FGTkCZDXyV2hBxy7XS8FMrADMfQQOp7SrkQgOPgd8zHNwkrLcQncd-WvnrYu_YcZejXsidRqaVKmqyC7pIyQaM7_2iFEGfWvVBZ2BRKAOBDsoplDNdUtIyUUmceR1xSGF0m3FNdIl-A-btI0StyEE_PY6E83bCPAIONZKVoHdb3idhWZ6AEBkr7qWwWmBZIv0-JMZE6CCaUrS", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102716745447080210294\">서예진</a>"] },
            { photoReference: "AWCwydirAGTyca4N2myBI7Pb0kOUDaqqbl64sWj8bvJjyd0YiipOFf2XYfwcOzF-McdZFatdK81rN40jeHACmMpfrpGgUEhBC29HdMByFyJFgB4rSg-FxO_uhgQdKvRPwNN9bSaKGFcT-hifrAx7g1rtJFqbewqGOkpvKvbKhfDo5cM_cB82ILxIXcJt0eMLTE7ly4YsDsnKOZEE3x5CdiryzuExAkC9TcafftfUP-OG6ebHjnc92nOrpC4voYaKt941v8vvXj7CbbtdFzNW8-37i8QKWt5qrJPJdQiO8QSyxYe-9oy5GLV7Husp81wpihm6fH-bOYPo5PTSTZD7uocwbMilEiRx0jXz-nfgXbfKqeOMbhqGcmcLZkEFBZocvlGa0Yxn9ANvDngAY5J8LLZTgf7T6po4DWrXgx4XbCw1npS3qI8VlZEW6x17f4bYj-3K", width: 640, height: 479, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104355731111916114753\">悪魔の抱擁</a>"] },
            { photoReference: "AWCwydhnwxByILgCzs7tGh7Vp5A4Nh0OYgBCUupRE5nLykbZOnIWa8bPSVA4oVi7ghTMJWk4aU3A2RFyQwSlkM3bfQhEPPhfnxcfkXbH1U9tkuF6YoeAxc4jq_Zq-UaVyfxMk6eLv_9l7NulmA70AcBOTFP1cfnFdPr4E7y3s1nrQ7Fx2M6KlwwNa5xQayHNGeQsKiwBtnoB4u0abl4O4AZ1B3v5GS2pzyFXi63-kks14oE7ame1Ul5cF_pfvWhVIlTJQzDnon3s5y7V9OwoLWHstk8ZH2o9QAbI0uss6YjN38neGi8cxXFjBAoyDPeillRNEyUPCrtDqPlrMp60IG8veSpL3ScUfJy3a-Erg4WEjzRIR_sviM9B554RDHshmGp3q6NazH6qePgvykTuPgae6jkl_5m3QZwjf5OILBteXr4yjmTkuq3yQKoAJp2BCg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107753408027304227948\">暉寶哥哥</a>"] }
        ],
        summary: "친절한 직원과 활기찬 로컬 분위기가 특징인 곳",
        updatedAt: "2026-08-16",
        highlights: ["현지 분위기", "친절한 직원"],
        tips: ["휠체어 접근이 가능한 입구"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00 ~ 오전 12:00; 화요일: 오후 5:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://seafood.owst.jp/?utm_source=google&utm_medium=organic&utm_campaign=gbp_MSUPHONX414455", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4429094690583336966", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%9B%84%EB%8F%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "이케다 센교": {
        photos: [],
        placeId: "ChIJlevCsbmRQTUR5AUNb5437UA",
        placePhotos: [
            { photoReference: "AWCwydhmlC_ku_pwmB10ep2h5Ai9RL4siXuDR6PVngXp0jl1GbhN3Au9DjEhhWqSkmPL0eBLiDG7nwdNgFoUzFSZOr4RjTexNDV957DQq30mI0Xtfniza8THrjCVTN6RKPOEN9HcYHY9AzRRNE3REGLKxfa_J_36fnVqpO5ncXZWZ21K2iIYrTFQPfxAqi10u6ssRH0BrEGffs7sLTMHtTZhJ1QfIowbBSLhlgUVMX5hf7nGvS8OAM_HtBh_w2V4B7GzLPiAZueEHnu7GgyQUZufZn3ABC2c9Ym57Lp0MxB2ibZUaUMW7gS-Lfv5g40G8wdSyktA966k-_b5XOegacobwLJbhTdsLc28zHNp229hMNJXhAYxGgeEGaO5AKGtbf0mjXM1ZLfyuiY4vPGVMC0V2gzxdvuVnqkYamCWokkf4jnWQ5TJIJ_X04MoTkDrnR83", width: 1477, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117121374378218434718\">(鮨)池田鮮魚</a>"] },
            { photoReference: "AWCwydhntLoBZPP227azMg8Vel2tAry-NL60Eag6tqtAKChamTdW8u4g2m483PTOOxsrUsURcWVEwWX8uNo7PytjXI2P_OJ5ujfw0tHjUuMiodaEsVEz45_L3FGmAHgBcDcbAzF-L0uRfF1DPRjDsTDbXZYWF48eLojbD8iXo50QTMTWdlEpGRsBto2vF2_B9dFj0rV1wzWSXdSopg9BbqqsUl38cdP_OExORMygvc6yHCt8DIXsTTQF3-jYjvxIMk52B1gEV_-ML08RM034aIF0WFys1LdhPHr3APFmTL00jrC7smA_CpaBDTCqI3_CwKY2RSW2ZwgWwP4gXoutgd82q9Y-u11wtDLq55erwvFrPYrQxIiPz3gGi3pKoxCOh7YVH3pYpNxoqZq8bSNuoMEw9xD0P38W5Oh1BtcJAuD8ZA_dq8sIUgIKMNRzsylxixIQ", width: 1566, height: 1044, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117121374378218434718\">(鮨)池田鮮魚</a>"] },
            { photoReference: "AWCwydg8vx2b7KlcshlbPuNZKJ8z5B9jiG_z-XzzI9HxeQqZqX7hhv9U10VRqymg4zKpxRO6ZkueLeK4djkFiMr1XFggCehH4rT8vuO9n8q0yT-1yUdiplLwvS5i-CBqQFSHbi0cjvu_a0g9xDx-gi6cPO0gxPIjSz8GGSuayLW8sB2x5xvILMhvjiPFJ2Cr6-dsDFn9OvUEuGAEMPo3PSCdthttYRwxiWqpGbPDFpvEEAG4W6tnVUxO7qzvuN-Gguu3IeAT1GnS5gmevF-uwy4ISKQcntu_RDRhfufuNI3cXMt4UTYbHW7xKfoKPQHgU-Bc89eUJGdL9seipIvfJ-lqnD0GwOvegmsZk7IwkJo2TKrMKkqJWuuN1pwL6kYdQ58J5aTsb9hsr2SsVDe3SDzQItqZLDj6d90gOL4GBCh0-icszmgBgi3OnskZOfxc3g", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106462440904239489688\">アヲログ</a>"] },
            { photoReference: "AWCwydhHBHrrnGl70vO71LRQ40BsbtHMGUYTDKBE2VtyvapEVmwHu25cyOL0DgBQRrAeOoi8-KlFAd0pkSRWwkt6ifrgTtwqw8ML5MkJuTfdKO0lBhysBEZQbHAeZpqv2eTL_DBPMlaj44l_mmpzN9XSl15DkU6k85swS0n-AwDPvF0WxpNbFq7zJKX_T44Qq1RkVtGM1LsxlCkd_ZJ8InghszG3VJOVoKCAXec2rq8HaiPO10fL2WAWmhAmtV_ejvwYSWXvOzo0JIaFaY3cc9gJLWz05VhCRpHSyH1XhOR4WB_SgMAw1Z3lCnDFCfcrU90SvDxoYOZL2bbGJa_DbVfIjJm1fngN_qu5Po5_vmKHeUO9df553fe5IIvHYgf9pl6NloJJ3_CMogBtPRZ1hv0EZiGPEpdZ27la5VrbnbGm5joXVxTwqNBpaDpqX9oZfER-", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112238264699151041054\">CHO</a>"] },
            { photoReference: "AWCwydg7FVnNj-A3bOIrSocJAeZDuae90EAbznhRKJF-mGzbVBevZpowT1a6mtsxQvLsGypxcNCCmyBiwoV4YC2C90m7Nb8DIOdZZ5y0LCAS_aM9peqImTnhmBp7-u3yig17We4BJfFvvdfbkMOmKQ9XjAnLt35kCtPG_7km5aotFC6OA8xH88luZ6MDSO1FXTsjZFkp5xO8y6oSqcX7fdTvMV_UxL9g7ECu8mK5wzz3hic1BW5EZutU680TGDJHj53CIQzCFdLI2GrCYA4x18BQq_AVOmu73aSeePpNF2Ve9qxDYh_bJpvmPeQqEUfIGbdpIUKAALswLoPVksGml1cMyrLEOe7ZvvYzt4iQ_YovCF64H0MVo5cgp7OdvFS0Mww8j-Dxz7DqNQl-xr6Xc-3Z2OF3Ifj4NK6iJqA6pdg3pwN8pZe_dGDvUi0SF8yaKA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110983169068623003503\">Mj</a>"] }
        ],
        summary: "다찌석이 있는 신선한 스시 맛집",
        updatedAt: "2026-08-16",
        highlights: ["신선한 스시", "다찌 형식 좌석"],
        tips: ["밥과 국 무한리필 이용 가능"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "초밥", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 5:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오후 2:00, 오후 5:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/ikeda_sengyo_fuk?igsh=MWtjemZ3MnZ4dWJ0ZA%3D%3D&utm_source=qr", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4678456741515298276", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%BC%80%EB%8B%A4+%EC%84%BC%EA%B5%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "우미노쇼쿠도": {
        photos: [],
        placeId: "ChIJHezoso-RQTURZvJutbhyBFc",
        placePhotos: [
            { photoReference: "AWCwydiDKHCo3kjn9MfA1bmqc0FuEEZtmPWKtXfQuL9vyiow8JtLWF5Rwu9TMTLgzSAVsfO-xwY5Vem4vOsp0-lRJBUKg4KIAyxYVYYzasNAiLsSZDXoD64p2vp0oD75xvvYhGogbQwzRww-tJkyIIBbTytZ4frVq9nxXPt-HXvpwWpICpG4z_k4QI3tReoLj1eTrZEXqW9roa2uQTYl67UkyiP-oOJC0rktb0ABhGrh0tzYDseiYJ5DTGRHhbr0qPIsnTN80JJ6CySnl0VvhQ6k3W4mE9hEukoZ36CT_7doVWeYUdxzVzgD_aKzLcIsHPwGnKQWxldfDtr_6qNPTf9Jclbq_eeZYC_J4kSmLYNU54shEOVKD5bStlBpYdxQ9xoTpaVnH_gHBONJL_dK0WeQbjxkmcUDfWRA5XTt--2Bai9oNL_0GfdX11Zhs8eUpA", width: 3840, height: 2880, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111542849006215103269\">うみの食堂</a>"] },
            { photoReference: "AWCwydge-rjW44_hcBVUNXqv47DyIpZXmOBilXSjS0AyktI9xHB5DuGoBGeBM8sSprsszi3JiejWR2lNAbXhY2lBIujfAXpn-8BBoQ5pzM0wWVd4gg_pzd1MZf0FRltu-1DKLDRwfiSXxy139U36lenhhPWBl8isOSwVg_qJYuWY34uBnpdWYl4bDtA7XJzvmgXU82E4FcHRjM87HlIDOpa_wNuQs4RHYbeB-PeHq_prGsNsxDiq2HwVQhv6DuFWoHqzJo2vQIWloj-Jn4W79HfVuCfBX74aczHLkTPD5PZUmxRL7D4tmKjG97f50EwgFpwYRwstPXpD3taEVHoldA8URVVjZHRGX5gJn9qjq1u7bUsxLSLI3YXOjOWVLAkEV23ySPd-lXKZQT7yvTYQRSPBteRWZXGc472gTx2y_2XZqMv6-w", width: 2051, height: 1153, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111542849006215103269\">うみの食堂</a>"] },
            { photoReference: "AWCwydgCAzxakGqGWfH5kCbHoIqpsBUuv0RtDqtw4fpgK_yGtiRHVsBT7NiNy0Mt8_sU1ARxzUhj7NNQ0SL0iHomRttYPaYozCDSEeJDs6vPfXTHDUCxvyZR7cP1ahaEazYHjW1YmbD2SieBBT10sIgJB-gV-GeEUvQMzGUmGqdW7DkimcAy0NIrnJ59zDtvRI9PHQgO0Q9SFSkht5ksIC76A1inRDx5wrVVyVUXdYldkz-QXBwUhRmQi84pU38iozKT59jvolWtr5N6m7RlIttIRbgwPjAmUN3HxiWZrhSI_-34IDNORyzz5NaUe9IgKrDNeM31I3U3HW2oov06fS9TAb-IpqTJt5sFekiJ2EOmfNWFVR9OOXsSqbnWLe0nrizPIeg3Fn7eqH8d_lbgcx25WlA7FDxLSWwkjRelAfN_LUn7lcBFBfVe9G5dtybQbkng", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110309379614265792220\">hana Q</a>"] },
            { photoReference: "AWCwydgBxTS9vVhrihAUgbFZ2eh_9Gapsld14YJN7cNPFm7DMmkEaVePRP4UQZfbjDvGtJAF9bIhoineGBbKKGjnKQP0rF1rZRmhg4Eu1m40tUevLOPQ-MeqXTrU_UoIrbX7hRcdUDi4kpE8G7fBSDI8bi6_Q9COoAYl9_XEAOXnmHZEF88YmZKUTPvizgLpdCUmSNNh20Kw7hJIVSZjWtxeF8B7EZ_g7d8ewXevO1EJ0p2X94Da3_A_YpsMVC6w8r1sHnUYd5gCCqbwno9hZLP-EGni0TE0bTcGRpdaWmMrjyCfCCJzvybmIy8wO-bq1dYBbTGbuj1pwiENGdTP9-1Of0_ZpIi2gjQWxJSLOKB6JV13XC5JbJnWhkjsXrI-ziSQ5zyQpIVd0lhoCnRSVLZtoOFIBaNasj-Ai7VZuD8MDHvWesVho_z-NO437iTYss_i", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100073853839159336790\">ハマチ</a>"] },
            { photoReference: "AWCwyditkTlJjRj5yRbeTNhvdV5FfdHIJxDiuUIC7S9faPTafevg16ePEpCIXuuRjYeC_XCSZMcSWTNJWj3pN2UN5CuH9gIAffzo30KFNp7hAVANJa100Tv2RfiN7H2E9B9o1gk6QAsCA8hKoaxUd_mIthCyV3azft7sHRloyKA59_d8pfnCVAmVUCXtWNpWu-GwF-gQqfOL3qzhmlGA9aR9ig3Z1yOwgywKA8GRsHTZgkXvMWOBlRVjXLMWaeew-pnrADkoDa-liv8brp-goROeutg2hZ0lCHa1snnEl5DW0UmbLgEKThsu9DeSC1iD_soM8IPFupPoTGyyzxHztYPgD4jVfRNJz-wdZO9R-nShYRuySOdHBEPPoskPRK1WqxXz1t7bL1cnRW7_AAfO3NGYIep-DpFY0hCAAap83CB9y9IgXxekCCxjOlrECR8Fixs0", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110309379614265792220\">hana Q</a>"] }
        ],
        summary: "메인 메뉴와 함께 여러 반찬을 골라 먹는 일본식 가정식",
        updatedAt: "2026-08-16",
        highlights: ["메인 메뉴와 다양한 반찬 선택 가능", "부드러운 계란말이와 명란 조합"],
        tips: ["점심시간을 피해서 방문하는 것을 추천"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 가정식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://umino-shokudo.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6270262718850069094", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%AF%B8%EB%85%B8%EC%87%BC%EC%BF%A0%EB%8F%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "우미노미치": {
        photos: [],
        placeId: "ChIJBV1vFI6RQTURABGh_vH0e1o",
        placePhotos: [
            { photoReference: "AWCwydgo4p9Mt4Ja8Oggmqt2UaH2NvXfIDlstNiJCxNoCfaQDWCxICZa65PHeWxODm5qjDdUDKfZKGMXo63ZSwHPAKC1AUIzHvjJzlV_fBoVOVGishcITo2ZzzxnS4N4B37oP5dZO6uTMC8KM-YCYQAZEDz33Zvf4Z_WDeq52prr8wsdPtCmCFOQRrrMMll8IzeRV9Wkz0VrB6doNy6c3MDVVGkLRxnmw3MzSZB2xyohOKDibBWBmv_5h-QhRzUUqtgMU93dcw1tirP1KKOaTRTCvmMH0cfqGrNYgIPsy2gT42jXA6VA1ZEARrLlAnlIzmx_HyhgiymcwjNaYgKD9mhtbIDjJbsCL6U5dkcPce5bpZ4WpueGwbiZyJZJeOv7wfIuuwQsMa-Ieev24WGN7BfQZ-6wvdwU6oFRbsAAXJZYzVSLjcBJ", width: 3072, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107410148112271820028\">博多魚がし 海の路</a>"] },
            { photoReference: "AWCwydjc6cLyyzWfa5E3iEe3P64Q-Z9uwRI3txc6xGTFITIdxMWPZQR5ZIrbjsboHIM7XsPEdp_wZ4M27Bzfzhk1nq0u7EVunk4GHIajRx5g5A16KFgC3JospMN3x9aNuWMso9qtnVawCBPE9436SKA2obAgOspcUv6YNcUHAWc1n4KcXjdTDdklPndSeQIaKgO9Oiam8f1nI4KDWSvaBecAOdTyJenz8fBlsiMC1mkuNp7oJN-1Ei_eN-eoAwFKnMYmxWhWWatW2YFbp3ST68VbMBEtnU7EDsyv7tFH4RHxpmZH0YtFAs-0pEiRnnmmWu-68t8-T_zHoxDbY4flL7O0CtIC4MfisqWOM4CBtLCkA_fNXAqX0m6DoeEcbtRnCh-CYCTzo0mmSkFK559radds4N7NdHYnqnRj1i60T4wnqnvOCHH_", width: 2574, height: 3307, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107410148112271820028\">博多魚がし 海の路</a>"] },
            { photoReference: "AWCwydieKEyq1OI4uwwzG5XjShRvClqKUldRCM5reiN-xGeLkvhPmTixBZkc-_4RicmWjLLj8nbiFo0emL0AnIjpBsDL-YvD1NIxwmgCvhmfhqjvowNlwYxK66dysg2z-iBs5z6DcCw3fbjSBm-BE6PcosxWl2sz2YAJMeNrCYYwREjU0QFb-x9RwIcosJQOYJqcDSSjzg36bmx4zK7Zn-GfuJr8QHgegxUkF2uQg2sbygvzIDuK7zQEGEZNEqZ-UCYii6LtzKNR-8bBtC13Yu-uIiypoN6nsG9YM5smPkq0F07k2pSLa7ZEDPaGJ23cl-aCBsQRQeMgmYN0sJ-49sbqJV8r8Otyil9dA1SuprREpuu8Y5R0Hpok_YgiGofAq5PNqTThiv6-vCDPE5XC5kLDE1O01jCBQn9aqOOQsKeGfJE32ucLgQxubhJEfy6zaiOZ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118331460021984151711\">Joe Jollyjoe</a>"] },
            { photoReference: "AWCwydjoc-CWEtufMCa85Iq8hRcWz3aaPx13biUViJKoZG1L2h-MqukF-go6BUFF135UVMylw_YHEZNsaLBZtr8xJRC9KAQoHomEJpU2rf3lcCeK_m40PWOmb7kFw3kzEf7YI7mHDAzmVTOGMi1Bymy-rv9KvrFzvbXyvwfRdMzUBjvAtuD_-H2ah3o4veVPiajop_YCQR568c1rYDOH24wdkfVgAynhb_cNfLJRxeZbqWQmkop930wQ1O15tEhBY7KS1zRMO-9C0wlUPv-kGVoyLi3FG3KmSMufoVG7EOT2y1HxZhbtBb0dVPu_DYKXL8S9JnIwsKbKwx3wsYUHTzGeSispwk0-HBVfCmzhyTXMKuCuhO1nUkBYu313GW0UYUKuhLXR-B7Dq3yJgRHtNKNaHHG5-2WTalmU9Kr023Q3j9lqY94g", width: 599, height: 338, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107410148112271820028\">博多魚がし 海の路</a>"] },
            { photoReference: "AWCwydjj5xC-QJVkJDYihhzZVMArVrq5EWlM4bDLePFSRc5G7iB0UNC4v7y7pMRfnMi_t3PfTkhkJ93eaHcFKJklVaaF8vhDP_AAI-pMk-81znj2ZDk9VTUVFd1uB5r7nqMsSNhXpPygAxVQ_n3uIrgHzuXFUJmhYHo1DLLcwD2AcwL82l3I2uY0OblYT9cRGY9iN1BpwQbB3fFTPwTbnn5wrplW1o2or5hKIrviUFxGXQFQzZfVIq7FuAkWNhODzwtf3PKC68JdTV5b96XXNctXYCxYxoNLkVIJYDpQCk6LvycltvTgBJBbPdKrVext9RFctMBnY5tzd_pLDUudDrir4Oqg5Lgfoo2qCFgTeMkuHZPMNlTby5hlk3gudWC8yo74DM54a35UWCcHekdO0PVYsFVDFW390yYw4BEjolI7kQxuHAQtNPS7QUGmfjjmOw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100802129854131713954\">あらやん</a>"] }
        ],
        summary: "신선한 해산물을 제공하는 맛집입니다.",
        updatedAt: "2026-08-16",
        highlights: ["신선한 해산물", "높은 사용자 리뷰"],
        tips: ["방문 전 영업시간을 확인하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00 ~ 오전 12:00; 화요일: 오후 5:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://uminomichi.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6520074205745189120", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%AF%B8%EB%85%B8%EB%AF%B8%EC%B9%98+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "우오키치": {
        photos: [],
        placeId: "ChIJM7ESsI-RQTURBvDZtmcUCUg",
        placePhotos: [
            { photoReference: "AWCwydiIyWBc5y9lWAzcLtLxFm-VtstaSqDN7W4Tk3yf24B609tmmvVm4opQ06vyq1fj2v7Vot0PvXt2cxrlPihgQ1UmrrLiHpfMfXNlfpe1oOOD5zQfj_WSZL1B6wfSOAP4ZmLDvnzJ75ej6mEbtd5oc0wvnJq_JCbm3DDtyOH8bkR_asfukYEEq8lbZplpAyH8qYJ6fZZKs9nw-ofugnzdnJ8CRu2wK4t7kCcBUY2YHSAHsmYOLpn731nyWyEtkjTqB_Zq3jro4-EQYBl9PCCIQXPXHo5E1B0sSzXnQiAIOJDztR-pGCR19pvDXLHVgqweH8R5IQV2w1PqPgEcjJ72WiPVM__MXRi8Vwo_N7gC2dwZU3UL59muTLec2-TGQHbw9v9eL9N1U1mnQTtw8JHDSL6dvOYJtLyZRTFNi1o", width: 3859, height: 3858, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100990600533249348619\">博多海鮮食堂 魚吉</a>"] },
            { photoReference: "AWCwydgN1ivIiXHe4XhQqCY54Ktw8G9EY8QbzuLmQHggMe8utqpDcPY0zK-V8bL30sRKWLts5zULgEpNosBDy33DglaWD38Eql8vC2yZF9IdmWEsue931Qx8brAIZJUosFs01W_bFbARYde-mXEOJpcWH-Mn6Adrmbxx_UnYMflGyFs3q062pWzCDDGG14X8GOl4K-fI0flVOs2xgJ_9byJc7uXIhV3WO02iuWTLI8vjSTxFKDez6e8mY1Ewj6Im4uVcMCX8HH-COtifhcOmZcGrIzdbxWX_3XqeHaYJrFNg22BRwlLMoXnQ64A_QNStYT9g5atXudyEQp-sNT80Ghdeb5el20eyBIv9hK-ce6DFceuz43oRfsJhUK7MNBsrAX-HEeuVjxU_Yw0ikv1yXJtMfs_rNeccc2duYeApFLAAvwwZw_GDUqkpcWHzj5MJVg", width: 768, height: 768, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100990600533249348619\">博多海鮮食堂 魚吉</a>"] },
            { photoReference: "AWCwydhziMw5hOSSysyQHhuZ9vlw4DkqYLUEQO5vqqVUrAliXXv7b_N1T7ZoTDH8I5mU_tMhvjxiykE4yuyemGVmZNqy8M50nrjmoG_JbU1mAwlqlh-Y3e6gdixeDh14d512AnTkCFOg99Gq8DsY-ee-NCNEzyaMIIuAfCHUzzXxYTOhds3zdo-won11RzDfSFxa0_m6ceIvrZ97C_TnYXN4E0Ag_-_-l1EFi1w9F4Lsw-XKUZ0IgoRkjZRTxk8O8InzJINArdn3EpHyK83eJ6j0QeA-y-ZB25rt4YAXTwIbT26VS_rTBgQ-1js0gX1-awZLMrx0l-vmlJVc36CV1edrplXmhHkeI14D7Ls5NsFCwINz38f7EwGr0lJ8QE3UTsyKfriWW1WcNmyN48lVIx9BiQX5mvY5MrtK3irxIiBsERQEWbFTiovXarq9tnE8mduh", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112238264699151041054\">CHO</a>"] },
            { photoReference: "AWCwydi2S3lFb3MOZymsyNYoHQBxv5Dmexe3AH0gp7xNHWLvefpX2HnpJ2T6jpRVA0YyfrxwRsv1NgylyDdAbnDxQTgo_n-2dhe6LmyySC7WwyuKpMFTUEG8iHKtrVHFc7q5QeB3hKBEK7M56UcI7HE7ShNOWQlga-btKhAATdFCClk-YbFD4tqGfKOyuSyNinPyfng0v1uUU8jY6OgHGSdXsTi5y3gTC1JX4IWE3goaGuYnW5jNBuxkPixWcBHD1F48vozDbcWdUW9CFKcguc0rxkYGvyh0TIJXC_Zslh53h7WmDIujG8tkCChjjw0z4Tf_vYmH4Ek_y_e-7xufgJQphJmgKO4OBOlaFyU-2RYC8305f0-IuW2552MDfa-rSKwOd0CIAcKFCBw7o5NuQmU7SilETjBI-tW6WavHA4QAiYaayIo", width: 1125, height: 634, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100990600533249348619\">博多海鮮食堂 魚吉</a>"] },
            { photoReference: "AWCwydhmJYvvMH4YcXveGlxHSVLcT9SC5mKPraWqQV81QraqlRcQcaJyj_X-qUpmWlIhnpafkZpyCDpO9cpjCNZWebdC8jApWmEVcKiI6k4TOhvkNUILqyi81FrOqSCPRS7XzMcT6ENopAILJ5bW2dcu3i_cWVwBbW2Bj4LyhUVQQU-OJ5eGLQYIIZYkP-2b9Kp-A7K7Lj4clwdqWIHfazQuaKiuP2pZ9MVmZav7yBMuZUZfyQ02xy2E38HlqVPaMXldZAMlhOs-80GdRTCvz_ERFCtMCIPmV6aFAxV16XrMNkmqe_461O6hvLYpmUsJulzk7wELhKfxfG5W4-T0dbnB4f_9AfBITcY00m6JaUbv4MHIMEUhCFNhaToWTe7EdS7nvWKi3I7E9CflQR5pqjNm5f4ICO6SFc3P1JgbOuHo9eKLZwtnOYK2E89tcoChQw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116720571758972053066\">VLADY</a>"] }
        ],
        summary: "가성비 좋은 해산물 조식 전문점",
        updatedAt: "2026-08-16",
        highlights: ["해산물 조식 정식", "명란젓 무한리필"],
        tips: ["조식 세트는 오전 10시 30분까지 주문 가능"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 조식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 7:30~10:30, 오전 11:00 ~ 오후 10:00; 화요일: 오전 7:30~10:30, 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tabelog.com/fukuoka/A4001/A400103/40043030/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5190702481203130374", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EC%98%A4%ED%82%A4%EC%B9%98+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "마구로토 고항 쿠로다한": {
        photos: [],
        placeId: "ChIJ9Z6V8R-RQTURPpWlHgwtCX8",
        placePhotos: [
            { photoReference: "AWCwydjoKlrBp2DamJ_dfSt2eQgNBxVX_PLFaxeG-ZkDSFv5cd2gQAazfeVjtNNifp0PZYMwhRZ5G9Nla89uaoMHIZUkENvXRi9MjXqYDWheKhVKZQbFvzg1Nwf8kXeboXxH9cSqfhlWvv6NEhucQ94z6DMkSy9w3Xw1-F3tEPfB4QqT4Ie22cQ2B-I1x1T_Uvo6bgpC2XnzuWaRstXzgFYw2FH3o58cMD7KjCF6anXCO-ZGTYr4ILF0G_a9XmB4IPwuQ808O15RykyFGGGw9QCjouEuH-tnqr4tr6il79DOcdJG5O-lvAD8C3VFXdrcOIIkLe1xIn7wuolSPxKHKYn5O6yOA_6YDvj45dGgMbEFaDioVAYtu45ZNxfzr7yMBWllkwP1Y38_1ffx0prjxATix6gD99BDzkkiRGnN4AyZr5aRUqgSTe3toONzlMG_bcd3", width: 1080, height: 1619, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117835889470423257385\">マグロとご飯 黒田飯【福岡本店】</a>"] },
            { photoReference: "AWCwydiGPWD5EXxjMRPdcOToBOA5dTM5PvelUidxSjo1Sm1tu0mX8f5Gu3oIao5RkgqsmeR4T_i7hhaMxoQa19WJh_RE5nvKMG15c2tXBXCzcraPJvJxectiP-6qbVTfYlLzQpAClLDUBBX6knMIUdFMjda75I5zJFMCc4ElZ-u4CMimK5wk48JV9jH7mZPVLTobQJzzbcDPV3jguLOH4B_2ozN4E3g-EoCcV9aGCaIgu4wPCnep_7cAKWeD_JAqF9CI6Ycwch4_ZX56eQivMRXLrUSSMcWg9Xoa9fak_lMY9-qG7GY3uD1RkdoNNPoE5r8dbszjjw5TyKhMyDj15yjOr8tnBIlhS-A1U-nQuZSa3q9xoJtHdvSaIZdSYIwpdHREPdEuzPy8Ev4XENc88AEGDIyiN1Pf2ENUJYVspZLqcvo0Fg", width: 4800, height: 3203, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117835889470423257385\">マグロとご飯 黒田飯【福岡本店】</a>"] },
            { photoReference: "AWCwydih04UFnRNlwruytHQLe1JQ7lm1czxQm6pdYU8bpnP6lw4GYPzqKRRh1AUcLhSikjHZfca5Loe_xrGZD7qFUOE9LzuieX3WlMqeIKT88Q9tcCt6ciMqN1gmCetIbi_NtjNVV6PhX-pbdxNC1HQaAyXWCQWMikzGnPjdgfsGXTqd_sLa__1FtAKGziSRHztCfTCiuVnJoaTtLb3y7Ctl1qLXjEQ1YiYXNBepsxT9NegbNAsY0a31WzLtl6F9TbZFIyMXQBgwVD44lqj6IBFs3JU6YNx-5sbhp9pKlTFPo0CoxMciRf_S_mi1YB8hpCUZYOyVADVvCj7ChSdNx-rMWhzgDtWuJaxRv3WTlVDWf3ZMmBg22POw_cROxQz1nXWERjgTb37Xa4ehp8w4oia2Jg-66BTYq8w-GGQ9hjoBHuFm4FflTTuku2IsuYkQHG13", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101599254525244053159\">Richy</a>"] },
            { photoReference: "AWCwydjLr7J-tn2MR3dT9Lar0S5bEtRia5tchox8C0wAlDZj4qv5OwLLbWd3Pv5NN-bj2kCrxwEhzJsp7s2G8o6Urj7DPeINbW8qaniqWDFGNmtaZtnOKay7ASLuUnYVDgyy16fivw2VOrOsNKC5xvCdtMCykDaaZmsYw2rNR3icMHhHcjmMgb0cS0ZTfGXGBnly7ZjtRMu4Yf2HzzKNNF3vU-V8KIDqKs4OA1pmorwhAKsfQdCG-K4--oCAHXmTBSueN8rtzx2QeL6b8oRFCDBdJ3yKqexgVd8iA7-qPOYbCKdADoQ7KU6He8VFYqT4QYLcqA_WlGAn1Ue1KA3ei6r58Tvs5XCdct2Tn80dynEA7dn3J4Mt5XEdTZlXLWviPdDLA7dhz233WXhLQd8OKioHNVrSg3R30TZ8Z8AYnxBvZu8unULdHNkO_Fclf9U4Cr3c", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113287109326916664819\">K “かつ” K</a>"] },
            { photoReference: "AWCwydibdxHodS2itnGWTDWsw9Qf0VE7c7MheGkSxdFUX7_wAqEJVIF5BVfFmrNhPhkmXReDQAMZjZQjnv1UZQnNu0_1m7eJwr8stXJzEEKB1LIDqTpr59SA06zQ3ISZKTj0OZ_X5HIm85wBDhnQFdNYZcdRab85hcmoRusgU5Z-poy_O1W7V_7ty-VngFvPZ0_k6LtSGkiLULgL5dhn1RjKLvUvhabpMYAV2hKSpoahdhikG4XXhdyGbCH9Q7brLokOWGfqPx0H2qdF2VqgB9GCt-0EHCrr4X0kpru3mlZDGWw5QbZ_sqZHj6mjSv_Rn-KbbZYGBmFfrYMX0_Cdt8g4uLq51t40IfJ6RMArLNvU0ntXkNIVOYparzjmwj6Axh0HyQgmxQShX0R4NNzgfSI9AmBDJ-dVTm4OnOI18KaumRPiN9q9m_RBHirrULRosvj-", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107797238072183459067\">근당</a>"] }
        ],
        summary: "높은 평점을 보유한 참치 전문점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["맛있는 참치 요리", "높은 고객 만족도"],
        tips: ["참치 맛을 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "참치", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 8:30; 화요일: 오전 11:00 ~ 오후 8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hotpepper.jp/strJ003716044/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9153897247684269374", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EA%B5%AC%EB%A1%9C%ED%86%A0+%EA%B3%A0%ED%95%AD+%EC%BF%A0%EB%A1%9C%EB%8B%A4%ED%95%9C+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "하카타 토요이치": {
        photos: [],
        placeId: "ChIJm3cMlvGRQTURjBegg6-RAVc",
        placePhotos: [
            { photoReference: "AWCwydgGPMd_DKKPtdPgevEri5gWQZyHZjUJFP_-j7CjaMVmwyx4hIOrcpEvqdGPI8Bu8CspTiHPSeArDMLezbDH2-KyiPzlC5r2ORS5lZogyPxLdRaSiKAgDmzuq33GQN3c2QqA_T-7vXuqWxkRKKViFpHm1mF8HsMAsY_N1hhzB_VUNB3TpmaYuBjnC_WJuUHY-kJtO6MiU7THMKtS-RqXG7lCxwLSNCMJmg3jnGZraAm4KNeH0SFRArTNU7Tx-5vwU3lI2P8PiC-WOp8Ed_95VYBf-6asOo75u_1N3xwnc95meZrxOyonyh71TrlAKHT4NQoAGdNv_7rTMJ4FZcypUM-UlmyNBr7bQTxV_1L_ONMd-S8WCkeSpTGVZjtX3EVrAz45z9fRcPwSjFfc0uRPa8c9frto6K3GC3exB7OWvXSXeAezsbSKdAXldgkhzr9e", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118046975855484051890\">さかうえひとし</a>"] },
            { photoReference: "AWCwydgC_ho66T6-eElvep2fEyDKHGI1deR1CTRrGvNwAzujqH0_7xX3pUvULQXOg7RFEd2_axgeRHHwe8-eUGzHCYcpWMKkuXhu61-1GqAN0S4n_gyQWQ3hFGtfnHZd-o9R8z-qeK5dG8Ndc0w-LH6e8T1v5iNb0gVCKoT64AzOPRcmIxumgKfGWeLSm15aw_2j5B55cy79I_dtRsTbAAWZeTzh2sju1qEJeVUh-1bIXrqgOZwklJ1T3bzm83eXFKfBLpMniManB4TfyavMY_K5sg8nIl42XQbxah1lDBuapza0i_o4mpCftDxjtghxNdusoLrPD7Ru-F0fB6v-yzEkqoOCuzONtBJiFVR_gP5ktbMNBQYT5cHguZfWyvxxwsk32EEmvKtFWoM1nAnKzVGKAfy-2sPAuCpnPJvylESK5GXTVozx0SKgi3NVA-bRrCS9", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102922959593574827877\">Gosa Lee</a>"] },
            { photoReference: "AWCwydggQm_dmGXXl6vp8xxhzzhoW_AKJ0vd2kQS30_ZToP_CQpTHncE9WSGC4tN4YcekE6EDijzRd7fwZJ7MjZEYKJoGAi-OzHv5SwdU9eohSui3eOTCNWp2VWhQZQFky9tEA9-UeN5KA-_bCQNacfTAudFiZGo_g5f-PhCVPptxCZvPlzHaH6kriFBA1tjl8EQf4hEv69FnCR98m-T91gZ9qd3dQ5WJn5ItqZGgPQZgOuUpbZCpTjJPKTZAIgzNlXbF-7e-QVh51vHy3_VFa4yLznCo0wXJsK9IGfFNcBPMjBbXl5wNH94c3zchVdgzv_v73lW-Yaa6FtD0iyob6yJ2P7UT8aqvaxZqp5SJas4VYC0JLSerU2gPtY_010WBZ0A7FNE3dRSRWSj-asO8VsC6Qxbzac0RxwPuUTclZ0ALbd72w", width: 1378, height: 1083, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108352230323975446868\">博多豊一 ベイサイドプレイス博多</a>"] },
            { photoReference: "AWCwydgyHZEaG1QIY8MfqLBzHiiohPalrMMVSqMDWNAlGWLpJdU12SZ5XgM6mQ9TfXD5BQNedM30EUlmEsBdg_HppVQzvOjesLWb_prmkd2K6p2SiQxluEF41xa9IpWhq9c2ZcgBrEswviEBlfEu-2ohrpTdiZuPY34JKFHf1HEflqFBazQnKc1JhI-4HKbRWCIaZu1vVv0z2l0yh4TABCkAohDG9e-Eyj8rm61RgaE_odMZJ2HtdY6bQPK3miGc3I7k7b0crKF5tln92ujgzODbKqZVEDkN3DM-KzxROf40LHfyiRJrIh0kT_I47mdemv5O4aDU2MVqEvLe6dvY--PIkyeQNDxsOh1RukK4MqLfU704x80OcLiZhhXNCxdyK3mmBNpYY-K3C6qYB3WL2UfyAMG-1l2CCNF6YLwV9vDl8UAPTDFaw6-HiXYXtUJXu7CW", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109471463902183018640\">Hyen Jin</a>"] },
            { photoReference: "AWCwydgSrx88DMaZMBgT6LwYTzYMW8AZ65WOCAUCTlmK8W3SGo8_1LhsuFv_4fdU3Blwt4e1whq3Ip0T7saJswaTqswA-39E1TFXTnSP-_6pPeQsYOAL3CURix4WnKcVAVvePnDY-PyMxylJBWDZnByTTKOLWf14vhqa_Gs_gqWUMB5kvH5sRljebIL6sjQbSfR_dNmWwEJOujOAcXimwh_K8l_d-Pj2iHfDYLkt5jZTy7jgd-ut7utq7xRNxp8c_Ml7mBw4zPCJeRKxK99c6BzxLhMC2EaGodvEoZphsPzsDgOa6rS9jB9_AepER_YXH_KdkdWn3_f1BwRWV5YWWb2jcIq93Aj__VvOiepYLgA_kNUh1ewwHEzze2ZRQpYGHBrtRvvKSn4SWtQQFSRaGF-YVjj9zyAg0bqjSIPyS8KhSdkWewuw_l7QKvlXoq7j_Lfb", width: 4800, height: 2701, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101209228204590024672\">Traveler Cho</a>"] }
        ],
        summary: "합리적인 가격에 맛있는 초밥을 즐길 수 있는 곳",
        updatedAt: "2026-08-16",
        highlights: ["뛰어난 가성비", "맛있는 초밥"],
        tips: ["인기 메뉴는 미리 골라두는 것이 좋음"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "초밥", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.baysideplace.jp/restaurant/restaurant_toyoichi/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6269452339290052492", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4%ED%83%80+%ED%86%A0%EC%9A%94%EC%9D%B4%EC%B9%98+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "쿄가센교. 야나기바시": {
        photos: [],
        placeId: "ChIJc9UeTJiRQTURUZqZ_69UP1U",
        placePhotos: [
            { photoReference: "AWCwydjhkqFmhjqTScggzmv5QVmyh3iUXfVTYZ0EOf4a5fRYFsRyH5uckLf6o5XlOkhFfj_zSBvXEPm8b-GUuIY0a25rcFRzhkVyd5NLXqFtAbz6E3Xb4mve0jYFzf_JyPAgmE1a5bvrRPDuii31CiXqdqW7mjs9EOv3H-_EL8vaDi6BgA3Thxg4dUtc9OeDdOOKFVApt-rbBIxmMOTMM-TCFtuT-S6EYwnlBIQJ_zdaWasHnVWHjPr_DKhUu3oFClfT_CtzoiUkXuWI6bZKXJP8Basy4WE_nISp1H5X5kKXilRjnH1hEFFTPl3ZgnwKYRzR41OaioYtVzTk9tYCv0OfO8mf-rU7E1dZo5wod9ydWjqXfs0CGEUuO2cFIzigf_hTpPndxavPVywdtNnxdfBHUzy__-m-yuAc4sKJLBqGOacZ-TlrNyQUN7A8tu-aCc0M", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103709109896833839593\">B H</a>"] },
            { photoReference: "AWCwydiyq7qBTSs-BfKs3JIG0nkRrDgXnbTF6XPlHbbLcW5PnRJAeIwsLYm9vIKvmPqZoL0FsXkzy-3-P_9_Mv8HrCEBjRuL8MTXAOrqrKV3UASPFKpEN0Iu02PbR1pz4xM-mVYpouZpdhoGqBtqCdM7q5ttjgp4cItIo7jq7qlvDlMPA0OJmnJJdyXZIjvQkvPznyDfwfql9GgBROMYWtQfPtEMfBjyqSe2rl4T7eIqskf9IBjBwIfcXxrwQRsSJWuWPQ-2T-lXWK60Bk5-4Nt0Tfl7Hfs3T2LV7SAKi0aHKi3aP7EWlkOdikBJoyFd8hERYs2P0sqMUjJRAtp1qXfxE7jt6_WIgpnq2Xp-5D30nT465B0BNgyK5fTTouMAzCuLKOEMXzgh-3zVEbA4AVb8NqsrjOUQhrJ3Y_t6I2nRq49WBxriADgfODP9opiKG4iq", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106061387136457950815\">Rex Tan</a>"] },
            { photoReference: "AWCwydiw0lHM8vf3QlYMlU9c23j-UebcRI-DKTuROqMGjFKFGyX4_iSgwEvYTA6MZcSfv8pwdLsV17enzNKLjctTa4hznB81MlKfzkJaHMyLN7axyK71XCeMixEJ01hihynViX5yU3RRNJ_fy0gY3iIcpBanCuAGnZp--b1nsCxH7itG-Q03lv3e_2lVbVMJ3J3YRP22CYMLb9QvP8gP3Toqj7b__qe8P-XNLbkrSxKLC2Pqbx6lfMY3DpEzxCLfXZS7xMNEGr_IfON8qpgO7h1iRvrS277HTRpOI4uAl7r5Wu4Q4GyJQekFvHVjCDahqRBduSx3o1lP4g8Zb2gc8qz3k0DIZjyyUkLQC7NLn_7eQcTEJvSdPmOtYSodyR8TomgGFzR3zjgvFbliiQ9mgBGuJw4QL4LHPEXahspUyLodORw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108023094412059054252\">Tadao Takeuchi</a>"] },
            { photoReference: "AWCwydgG2UhksdYH2wAHgFQHKLazLXfJjxbSa4VrAVqFHOUS4eKjlEXqM84uBJOqajqDNSMN1mPMpGEMJ9pwkemVehkjZLA2bTQ_rMDDREhu7bdfV1LSDY5RNylvVpTo_jUT5mrfO4u3XV9sqLhzNuLTqbZi-8WY9pv3aiDR1a2pzEgAhxBVU3Je3ZPjm6PuSaUsD4V6jC9p_A5XxgseQYfs1UKmWI69-htlxKbcy7SgifjTCzIQgln-Tn_kc73nadrfRXd-XiLgPVwLUk_v6Lrk6j7T3Y_iDZXiAB0uYrhPY932BjPPVnnApKB104Wv-61Pevp39fUXhJmbSZ_yRAvxybTGi-vWw7ismNoHanMS4l_XuPBMzNvDWZP-6xH4QEI42X-neozzwmf9ImZUcIfl1baM4JVSa4rlLKb-KgY7_wbOig", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100178836333366849641\">DR DAVY GOH</a>"] },
            { photoReference: "AWCwydj3uQGRJKqJBOrtCJut7bVjZoUfDhq-EjyrRQMP23HaSS16nVIQwjfPTHA2DjQrL9v9S1r5SHZ8feFOcKhTWtEep2fqR085Gxr2fvcTp3IBVH60Q_skXNvSPaCavziiy38GUbMQz5Xxj3vRZXBTNij3V1TUecDAIuZRBA6gXKDrRvRpA4_X-Ak64fNgCXLQ6zTkluYRT-Uu_TQwgDj1UlBL7xGYGO96umdQzwnoaN7ntEMlyrb28-7lLAsa4c_fsqwJ4w4icVFMUqNSSzYUHjF2u0HXbCNRjTYXsr5vtkH43HOMdBsTImraxCEWySDxKgLqowJ3CEuJ3VJORkcKXh0e6nOnqwV2qQo3jyDGcuKNYU24mEHgTBtpzLZNib5rs7IyDrXzLPjtz1iP_ONXRtiTDhHEccZ0rHAjWWH5iqzp0jAxtTFKTXdJQZVb-5rs", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105015925046928910269\">Christopher Calara</a>"] }
        ],
        summary: "신선한 카이센동과 우니 이쿠라 조합이 뛰어난 곳",
        updatedAt: "2026-08-16",
        highlights: ["신선한 카이센동", "우니와 이쿠라의 조화"],
        tips: ["우니 토로 이쿠라 조합을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물 덮밥", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 3:00; 화요일: 오전 10:00 ~ 오후 3:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/koga_sengyo", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6142721531640912465", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BF%84%EA%B0%80%EC%84%BC%EA%B5%90.+%EC%95%BC%EB%82%98%EA%B8%B0%EB%B0%94%EC%8B%9C+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "블루보틀 후쿠오카 텐진점": {
        photos: [],
        placeId: "ChIJkxg5WGKRQTUR6ajIGgYhE_w",
        placePhotos: [
            { photoReference: "AWCwydjA2FyTjedYGlt0fjckiL4i0jiwwr5jXUPKlpN_2aRyzt1webHsKe6-1lacYvp26PtfeouJdd0lU6r5w4wk6IfdfFCNMQHtvZcQ8gPukE_Gt71Enw-hAIkDizuLJKrYg43jvF9nY7wLgAZa7vzbGUeeXpiO1bESvckP9J-zZwGSSxrr48vShhOJLWRsyOSI7WR-Fnrzdi7XhwLh4yiwtN9H9MUEz9JoANC7-e2p8dBgUt6KwU-njvodk2l8aEUBVBVTB1WobNRY6zoX4gyL6dhL-yWJf550sh8DaUri_lhyds_rhLuJZFCCmI3rPuRhwqapRC6gt-S5bZe-pC4vdUnaftUY6fu9VMk17p9HOsm9gkOB_XPXGc8Venuay577NwQ8Ov1CR1E8bpSb9Vw-3q_pEGvhG-Of6hjb2MsDRPsFg2e5N80wSl3XNkvNoydz", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111782445405217884808\">ブルーボトルコーヒー福岡天神カフェ</a>"] },
            { photoReference: "AWCwydg-JhRG-F5nL-om9n9yDlWeYhwbGO1HgaQ-zhDhrdwkTWgCyld8E_llKq03riooA2d-ipzQgdIfUSth_gFA_RPCIzNVArZxYFkafHYG0rOvHiT0AftHUORCXdNij73YmTWUmIwhlIuXemoVFYdEhUgSTOJ-PAKynTfcw7RgPG3dOBDyB9z_eAgITk0C1cAzlXaRhW83JzzKXfESeUD6phaJ0MzrttS7IQHbADZiz4HbEqn53kVTZbJQLOyIoOWVZP1N4SCqxnzl5gZHa-Zy0yylcwEobRvXrXTlaI5IhyY730dH0RKYzVdKYaNLSKjiBdM8z9cP-QwGvf45C0PoBFALI9WqEIOgGuEDlGjTZ5CDNHDuS8jcjLr7NfcIQp5T_zZSCoC6bBc1xn07fPgju3ijexbLJbRd5oUrcVw9_ytF-B6iro21NKRM6PzA74Yu", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116951845923189518251\">CINDY魔法ABC教室</a>"] },
            { photoReference: "AWCwydhX3ST38ka2Hwaati-W3SdBU0d_dO-q_v6L6uw5fci_A2-zh4BO3Skvh2898aPqDTa_PQ_Yt2Mm4K6eLQnm-POzjNGF1MXey3CA5dyp3QLIE-ikXTwW9_zfdXQr1x_QE2rz2HeXtsIXhtXH7Dt8HuBqgMuTZEKEt5eEFXWvn2x4kNzQ8tcXjB0j-4mNdQ5bC9AF9HMkkXOQCMgEG5LbhnI0JaTJbYJlUhIJ7PY39EaH8pnUzG9v9Gu8GhliX9fWTgDrGfDNCut3X6KfoDkqeFVhy0f_AoVgJcXRrgSbWVU8p3MzxsbcVxLQivr1pLFR_5szlBWwM0GGOLeGUdsN-fJloESLsVRASXM8YV-S-rXj7adowUMTuw04L5m0dg-P4KedOnbiX6_uNoamVTVjYNuueEcSWwaq22dAiJ1XjuGvI0KWPKC8n5BOvTXRcCYK", width: 1500, height: 1000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111782445405217884808\">ブルーボトルコーヒー福岡天神カフェ</a>"] },
            { photoReference: "AWCwydgmKmf0UgfUPq59vvijEoq3Y1otLbIJaGy4WVW8sW1lVdewtbEz-YjFrMXJi2HhcuJWNAI-J2Nb1JADKe8nWu9a1fdfUWeVuGR3IYocbdfXuIlKLSKMl8hxf_-Oy35baWuoEj5_PVkvjanIKOEFQTsCd15I5mxaJO4u3oCuWC0XySMbWl54F_xits5XWG6iaV7oLChkGTTspZ89kge0TMnNcFQJ0ZLV-9woIJN7EA0FPYBr9aTgKizuKQMljWc3kXf3U-fwBRVIID9W5BruMXRV6Y2lUcL37IWOnuTl0OCUSkpF_t2T6NGAFI9N6ANANr2dtgcs1T6UrAf-X8LHre3p0z0gT5tlm6jInUoRNwS_vgDi7WQ0lghvyI1su1RM3zNtyebwk_aWrFWs03WNeY3uEqeCFcEUDlD8N60gS0vDIw", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111782445405217884808\">ブルーボトルコーヒー福岡天神カフェ</a>"] },
            { photoReference: "AWCwydiWnlkuYQAcQU9WoFGcvHeLgoBQLLKMyoSaY0ZjerBTXurFZ9RBmRQJYU4mgwggPPJ0Rz_FA6fotYFr4uxwwy5CQVUXrCxU0iIyp373OxuoJ7buFPaL2j3ZEp0uubilb0IPhKA5HWc650dVgyFSDdJzZLO3CBASBGc4eqJz_Q73Wl5weXwYBP0lGY1WbUDnJGit7nfdASV98girDINdbtMlZGZ-7iVC8upqdUujWRsVC4sutYfaRFqEbx6hUgnPDjJx_P4mJc8ksFzRo9udBQK7HYzo5xzxPeeNL3stbpOpmc_QX13ngU0KDC9IiS_CqgDcjo3_fHJTJhTd8pDPjxxw1QQlA0Yg-uOZ1rK_htWIjAvUbmKT6lunngkeM58Yl63C3rmrLfShJnOFwyzCKBany3lS26WkOiFF4qfGDutJ_hZnB88cAwqjXdJ_t4Pl", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114603218332603727599\">Danny Lin</a>"] }
        ],
        summary: "쾌적한 분위기에서 휴식을 취하기 좋은 곳",
        updatedAt: "2026-08-16",
        highlights: ["시원한 Nola 음료", "친절한 직원"],
        tips: ["더위를 피할 때 방문하기 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "Nola", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://store.bluebottlecoffee.jp/pages/fukuoka_tenjin#utm_source=maps&utm_medium=my_business&utm_campaign=top&utm_id=C030FukuokaTenjin", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18163898032218220777", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%94%EB%A3%A8%EB%B3%B4%ED%8B%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%85%90%EC%A7%84%EC%A0%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "렉커피 텐진미나미": {
        photos: [],
        placeId: "ChIJ10_grKuRQTUR_AblIf2lRIk",
        placePhotos: [
            { photoReference: "AWCwydi-ia8zX_XMJNT7S4MVH-OuvFjK2UBXVnbpql7daf2T5dTBBLyCddWbCkv8gQMn9PRGmtQ5oGPHoJvEzIx8zmzDw_4dyLtprne9eTBo4i3NVyD5vzvPQqlVKKZwy88FR5HmYwrIqXL2IGVIjpgCTPvK7dlO5qJhTA-XwTBWmatrhL6gvXglwdm81FlHrdfwkp4Z1KvEYcnjCF_NHxWTwqwA9UYZ6_O-PvKssRccwCJ8Tl26qV3sYJFxTGJBF504ru239dpt2yhVUAj5axUHUQxOPdscG0ZKeghw1uBV72lBgFB4vMvHhMOhKoqJWztGQVuXAMqI_e1VCqQcLPctl6s5e4QEQ-YoF0kFuKpWbVtF5r3MNO-tAJZjfIzsAA_ua1MjOq9z-8JnpXXIyW952eQvXl6qc49KBJIo74tYb_WX87mK", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108606149492311115310\">REC COFFEE 天神南店</a>"] },
            { photoReference: "AWCwydh0xgqcQ-J97L2wi5Vly5eXqKXYbxCx9bWz5U96GZUDvb3gYPN8Zl9st18VJVtgCmWe6F5o0gW_vaBXdOC1L651ZR0iNjbOr4HzSiC5OTfmNA9FidYkEUgmmnlkzdoK_LgrxCgJZsjfKJ_WpjNZu5vX7jA-bNPJIdcN2STpvWaY08D1w0Ai0rVyhXG4PbuZrcV-fwjj7c_otUYzgpM1BFIyNn0QpNmzhFzLmk5BwIb7zhlSbuNYfkASpoQ5g0nDuzwb5rWNVHKWlzg4oRlIXYuuCIZ0lhGnvSNMNtDQqd-lGUmPVWumopBd6zglWCSX9Qd8XfbWEF7bhnKrWoo8Z6CvqDw3EvyIsFfC5bdegqT5_TsmRnHBfqEnm18gQwOMKE8Peq4fjb9ocpFnKPTGjXHchqCBNfKAyvZcbrkhiE28iUs0", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117182654369717165308\">Robert Sun</a>"] },
            { photoReference: "AWCwydjm7NosK9Qda3zhn5HgHsDh6HevyXKEb5P7AZHUXP_oKs1cOmuBd1-3qvJPTAUVpF37ubcb7J_zigS2WeGPJndCEUqv-rLkHp76amhuzsL2i5Lsus11plQqqiwmZ8jhchPS-hEuEkK_a-h6d5jx7zxOExxhIpJlZUiIE_xyeuqjh8JXiwv2sEdn7i5MFHheP5DpO6Yji5dOFWwO2TPwY8hhHTtPqmgr0I3E1UlIxoQ2FZDlvBRDSfzYfv6qbyU2PYWDaLMsCWoKRnht7cKGb1xceGPgoWw-78AVajJLXRjj8IG7_m7XAzThRwhjg_KO-4jpzZp38OMwi0Hct-s8VKMbcLdudCYA8qPpuGYMbK-4TB6pKEAtHeGuqRCwgPT-hJ3JTDRcMKxLpkySXlmmirUygWjZz5iZ44yRj5nmXtddzxMqu2h5Zq_VEjROK1-f", width: 2256, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116463282113946104865\">Katsuyoshi Uchiyama</a>"] },
            { photoReference: "AWCwydjUDMgndTON7fE9sOipuU6vb22BYh8ola2HpBSQ18XPK10leaWBj46-DnCRaMWrJaK_xPtBqO7jitd6pyXzZl_ZtYQP0x4SAhBBNvPRl-7iwMVhA0Ddro4ETNu3fcw06_moD475nxNl0ewcbG310RH56EqvDBjEovRI1wVcg7K_RJtKvWGrO4IndI-1SfA1bTc3W6otnMLth1HtKKOnhOQty-s2NxvW_VJ_BnGEp_x9e6Ru6cTtuu5DKNJSDcn7lx9qrM0QCwZV5NHePjiqETNjnpRw8iiRJaVz6jTqLtaOYqBKyf3AG4IL2tcOX_4D8gqr8eBDuiHcpmgkx_qmG8s6rOYfJhTcm5u5G_UqlCnrIVpG1tI5Dp89imDs1VqMjMQ12MF42K0XXYCRJmyssr6uw0BMxFIpRKDJCPfY7arnmTI2gSTn2IYlbK-dUw", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100518801162284042514\">Howard Ma</a>"] },
            { photoReference: "AWCwydiVo8G1_XqAIPGzcCcO_-kN99Gbi8S8cq1tW7j-G7-dlYGWG2DrFlEkTxIcEmVTxIbJWKYVJhlz-O-nHaqg6QCieETvBC4W11_Cq1L_9c1gLPrRjgcs1VIjnHb1z6yUqLRweaF5ZgLPz16qvTsX2qFkW8SkdTEUiaK5djcK4I1pqOzkBWx9heWZqsZJadCWUVq0YIFeUPLX60zbjm8gh_vUZTSeT7gJZvUL2hjZKWSz-kVqJLIvRa0IaZAeb8CfXy_92bhWQ5BFf8YqBnUQep-mQuW16tYv5WlfwKgWvipHK0cGUEaXHIX4x3EjFkxtxY0XBQTaLO3GLqtwlN_RIYTQ5b6bRsAWy_MdHBRW_AlClF93EHhGcZAx-V7uAFBdmwiPYoE--B09F_FEsQp9UM6KRHcEcGF5a91nxJkdu3StU5tTiimTASuO8AuKjQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117736779362636391971\">海大豹</a>"] }
        ],
        summary: "넓고 쾌적한 공간에서 맛있는 라떼와 디저트를 즐길 수 있는 곳",
        updatedAt: "2026-08-16",
        highlights: ["정교한 라떼 아트", "여유로운 좌석 공간"],
        tips: ["주말 코메다 커피가 붐빌 때 방문하기 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "라떼 아트와 디저트", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://rec-coffee.com/pages/coffee-shop-tenjinminami", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9891213188226418428", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%89%EC%BB%A4%ED%94%BC+%ED%85%90%EC%A7%84%EB%AF%B8%EB%82%98%EB%AF%B8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 로컬 커피 스탠드 후쿠오카": {
        photos: [],
        placeId: "ChIJg-5w6j2RQTURNk_WVMkDJZM",
        placePhotos: [
            { photoReference: "AWCwydgD05U_uKKL9LZf7T3Ra9_hBXscqaBYqZgLBGw3dfz97AfVpC3oZmXTGNLfe3NN7MjpaVozboaSomwk_-ke_I0mJn4RYWC1ur0ZaxFJHLO8bvnVbFtYUi2zxNcMaABOGBXMAq0HyGtFzJGb4cq0QHoTL2JheRxMxHuzq_d76N-v2dy54q5UGZmbN2r-8ggPnDMdhC5nXo4MSPDCz3LZWZZ8fZc8CDBRTDseiGd7URu4er-QDGq8KZjvYhctks2Rgay3fnnSdImN3NAXT8bpIMLZr-4Xi_CcKS-jAXzcj9g7mvf2BJAEdhs31ECDCX9lyEnRQ_HwZtsx06EpXv040wA7loFgIoibZ6e__9RI-uk8MzKLiRVp_p9TRcXfGWmxwgOYBSNQ_b9VcWPwgwotN96ldLYh6hNPBozd4UPjzkWFxA", width: 2714, height: 1528, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116408800207816127240\">THE LOCAL COFFEE STAND Fukuoka</a>"] },
            { photoReference: "AWCwydjWWhL3CzaR24lcIRbwouaD1Mg0ltjMs9f4eTpQUkZvo89eNfV-kg_SOKJUtcZo7zQiis76D0cPpmqgfxiU1tSjVhM5j1-5OW0od6wewB2XhCSypWjd4iA7Rt7R6Me1SCxq-0_2FAcq_V5WhnnRWG3a89xxNmJ_UOcFKYEvEfDdjXBLp0PLU_esyfq3tUt6yirOHA9Z_rmbPmV37Yasuzoa3SCnfNWI7LvPmpHwQBaZQYhGzFbQxf2rv9HG5cwRzkw3VqFQ7ulSihMpY2T7p27s-_1Jrid4srr0oSIrVVcgdlVRpfP7pP1gtrSJ4m_VArSJRW2XxiDQfxBeR6xlkV7_BzAn4sJqlKgzwVeQLqmBGIgmGwO2t9xdDDpK1QtLMvFE0iXSCH1cVVh8awdCfHUWKz4IFx937M4tUvUpcLAyliUlSMSHwiUE2AuPoreC", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116408800207816127240\">THE LOCAL COFFEE STAND Fukuoka</a>"] },
            { photoReference: "AWCwydhvNuMpSqYSg8UoKtqsPv2p9eg7N3MJu7mud2G0YhSA5oF6BHW4hVgBnty3K7qgz1BVkGqxAEjHo9CQ3B8ZzUT9XKqkkYjrnc0G4KvtxG-mEyx4n6QkTkp7-LxhxJwqJnYtyagc_ufhn9RRuO2QadD-yPvxDv9i39hwkSwgtQVGX-E0xpTxxApfdLr7gX0Oebk506HbaCPOSsdg8aUO8JIEg1tyOOtqA_dtm6mIt-9lyFZj6ZLsSvR6HLqDQJRVwyGAH0xm8CQWMt8CR-p6BGhbm2PgzebFApQC7ErofKnClJsATjjY-eydD4Qyn_1Oivdb46KvvPL9Fg1GgyByRXDoZBdS1SF9OI8QeaD-mDDjDmBfwYIjGL-PgJNgqdFXS3-Yodfwq1ctd1QXp7xNUSdAGC38btrGsQOcvwI2kgAmaH-y20K3H2nqzS2F-jpH", width: 1170, height: 1127, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111840680321519702909\">ハングリー・ダンプティー</a>"] },
            { photoReference: "AWCwydikjLz5YgTCGKOHW4oBncakBvAYS2yvaCCPaFTeCS9Re86PbpAONxlHEG7M4kuQQrpmHm7xF0yam_PZ5M9PJNwfDx5j9Oly2LXoI-JoLC68rTvAMFtj-ytWGnX-mE1o6TUlTJvSX7ekU-kpLBELv-Hz7xAA7UDPTdk677te62jKL6a6znRKu6bnaWHnbJZXfcBY-JGlLgOk_zgu9_D8RTh2aEOROwpyz2s8PgUOM-st9lTjGW86NhEsBEcq8vc_2qGCpT9kwH9JySbpI90MFQaDjOZr0W0X_4GEXYVzp1Yn3Bhi6ZeH7Dka8TmJhSkB--DVbL-PO8_gPuv9ElJ5THSkpp4Bf_rlOu6ov9VmnmoMVcNIyAPLFMG3yFM4SDTkWXyWqhn4BwABnvKpiKxpdk72HXQiz46B3qQBOkp2md2DMc5oo-_gmfQemzx0sFk0", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116408800207816127240\">THE LOCAL COFFEE STAND Fukuoka</a>"] },
            { photoReference: "AWCwydhGix_WnJDhKqObr7S4ZsPrJ0_CiPG0xIgADBp_-C3zXdzigumkwPXMEOtMeV43scPMpPuxMW3-bcsoB15QzaP1vf_geW1EnNdaZAhU1h4DBzEnaFrtktdsfCBDqW3RywlH0MfqAT-nd1j1Tf0iXDelcv_LBqV51VBraOHR7okCIo7fPB0nLyBJYdXWUd7aNNgSg0j_J7oEpfHldU2g27qj8hDzwTsQEQ1yheOU-7Phxix6EbRVNHA_ath1z9g8YBIe8zMRFpV7U39HqXDgDkEuw--4M4TjdQxgzY2RPZZQma80rl_NnLtMdf0JyKzynhRTwpplt7U7XC3S3UccMEDyFvgq7R07Be1M7IiE8XuydjFjCxJWHFC3PrdgY8sUC_UOneHoYtOD7bZejfzU9lFwR7Hznc1fk_tFUBib93ON9wxUJWDqZGBtSPsqfA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116387069477911611305\">周慢</a>"] }
        ],
        summary: "커피와 디저트가 조화로운 곳",
        updatedAt: "2026-08-16",
        highlights: ["높은 천장의 개방감", "세련된 인테리어"],
        tips: ["커피 원두를 직접 선택할 수 있음"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "커피 및 로스터리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/thelocalfukuoka/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10602885060960341814", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%A1%9C%EC%BB%AC+%EC%BB%A4%ED%94%BC+%EC%8A%A4%ED%83%A0%EB%93%9C+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "노이스 텐진": {
        photos: [],
        placeId: "ChIJCWYLG3CRQTURuMjJK-ARkrE",
        placePhotos: [
            { photoReference: "AWCwydjVwgJGds18s17pkZjN3XLhJcQs9OY9e63kJgPNWsnuWcLuJoDx_tBTT84v_UzeaGprU90usa_mddVl4_UpsYjiIAGvCLoBJDOsPjP_8YDkUtxLyPNR0MJeqROaKvcZByigM1J9He2lls0afAchcos5VVzF9u1azsDfSMMs5Nx6pjOqUkBYwGRLBnbv3OY1eyzZ4IyKxZolVukkEzV_-lhnvv5vDV98Gk9sWOQbkzjFAZrYJP0vJHW1izrVvZHfaQBaje29TJE4Bl4tLMqfsPJPjCNPk37iEMcs-k2yzAxSzWxDhz7dRMHBWt67eqAWHZe9wzaVCdnJfdDGh2kb0eOHxAbnmUOPYQ5hJd7eYoyhGdlP2IYr8hu2ZbwJwa9VzNIp2YZMH-e36Mcl0CjABINzphkoF2iHhugW6kvFPNdqFg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116575546266131525686\">NOOICE tenjin（ノイス天神）</a>"] },
            { photoReference: "AWCwydi31zkLr-0D62VlMlbg6buMjjwtTywH3Z3vMSqakObuNdqIiTmGiZP6L1v0jKKxGSwjpNijvt2YAFm8Zd592et46BgUwFQhh2Z3Btiby0m6WHfanrBFCmQXztdeicxqQv20_p9Yl10CTUmGuYPVa6AF0ZGbwVimrVp7V0iiao9zgye--nn3-BOM4ptr_jOECI_OGH0h2pgMabbJO_Mk8EVasFY8OkJ6RHLqCVRbogpy7HdCWjCx1EmuXSxYMLKmkFHPBT4XnnuqiSg0lsz1HwzDcVumS8BrYfS_1jUA0RpOc_xQ1PtGmlCyOiLyrRdjGiofqC0alplgH6HLY0KmbmD3iOkIAKOchFiWexzO34Ois9UwEIXvic9ArL3OA9_Byg6PIav8DZwyiIr1kj7cWKtvh-NbM9uHeE3m1ywcO7aEKSQl01M6pqC5llJrNYka", width: 3306, height: 3306, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116575546266131525686\">NOOICE tenjin（ノイス天神）</a>"] },
            { photoReference: "AWCwydh68VHMlXGHA3-Co8xF7mTXZGtJTWEnSWy8LJBMJXtbNDUYcacZM25Mkh-H9AJN_m_3GohHQfNLMFoo98ZDT23o4f5EyvBD3spigmv2I-DbEOrOkQXVmMTN9rGgpG4aNles2QoFLsKC2wC5WHhMf1n7iCveLymd4ExOb-o2jzE8i0QwtT6RdBXCPS-h4QhmotmKMMOOEGJVW_bUr7IZ9OrtWobhquqLIrwmSZ-BBegCQv_6sf8EEEKC9I8FZTC8W00r-Rf6hNBRP-nMRTCkuDuZOS-q16j88XjdMFltC2xizyfR1nCM8vcTRZqc23FVOgOg0cRXkniPUcnCGi0kOl0ncejLJBaycSnOG8hIhcRiqWFvkMyvKWCf5Rz4O68cr8WTe85DQ5nPJPMZsxPQz3FCO9omUYqeHnC6Vyu7woGzTXIxv4_nxI8GHoj0Su9N", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112353503787772753706\">Agnes G (Travelersky)</a>"] },
            { photoReference: "AWCwydgEXl8DneIMHpp8OOKU4dcaUvze5wyY67uDTJE4iJUSXQ_bw-dpOhvYZ3HfY46Q8fqWtBXYxaJQlRK9IshiPKP9tzJKtbNi9l7UuTh-LafD1F0pN-Xb6bFaW3NA8gMidGrBIxFiDXCiM1khC32YSJTCo_kHVjInICuaNspo5_Dd9jYMiiiWi5MGA6y1VC_wGTXRha5rZ7XVcSxc_qJRsmivmijRVBYvi1f-p1gNdeocx7AQQk9DR8AbqaSSviwOtM6bt-xxq8H7Jp4OrbX3SqJXx5j2bRCUlERzj8kf9MXB9h6hFO2qobQ9tYne9bCrGZWAZbXWKid74yoI1yN5muBLbOujXO4jV4cALczy6KXFV4rQOwKmW4QiAxxHu6j_4-6SB9pGU0mTSgKIDupWkPAV4V9IGftw9Z63FoI80Po", width: 1302, height: 1172, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116575546266131525686\">NOOICE tenjin（ノイス天神）</a>"] },
            { photoReference: "AWCwydgWZ4mK0OLK40sQpa9qLtSqWDGwKHqabScgzCfpkmiDU0LPc-OXBQXaDi2g2MHmiZ1Ld8CxuB5XqUNC7oFJODEarFFZwr44_I1st1oBCIORjAReBiozFCfjZZx3Sy8zHiILcl-cHMut1G47tyqomxbRmF9uQYmxq7eEU8krM0gMFeKv-UR3pFKo2CSP4GzyMoA9HH88Wu9lMRonG0DgXjlZR7NmlWvLXvF3iOrCHlZkFwJe2C7L858vhVVXF3la-IO-BgTCSsK_kss6oc_7QiU1b5eFOUbgU0B0K7x-KTv-2WdGMtXrErlyZ7dVCdti3uWaOxlfexgzNemtLdoWnoKbyGjniBk4I1UrylNgdiQoHDNtZOpb26s65FesZ9wabthv7yIFzwUcTPLC8EEBrUWxEnbBeT-WRRAzioISwM7rIs7i7YykxA13NjOEs62g", width: 1952, height: 1354, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100189780407712859608\">-艾彌-エル</a>"] }
        ],
        summary: "세련된 비주얼과 맛을 자랑하는 디저트 카페",
        updatedAt: "2026-08-16",
        highlights: ["맛있는 수플레 팬케이크", "친절한 직원 서비스"],
        tips: ["음료 주문이 필수인 원드링크 시스템"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "수플레 팬케이크", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.nooice-cafe.com/nooice-tenjin/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12795309145817991352", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=NOOICE+Tenjin+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "커넥트 커피": {
        photos: [],
        placeId: "ChIJ3Vs9rY2RQTURcvudCc-bUm4",
        placePhotos: [
            { photoReference: "AWCwydi_NqNOXJxdEuE-nKfpFnRubmGy5wviERebnb54ihFbufv3jQNxC0L9A2YGCK21aLoDY9sX77mm3p1n74dG8An54vN60fvL0qpRPzyKiMZ7So-ZELffiz-RlXzVVHCuFm_CGeOIyX-_SYBbefir6R5u5ZxaZZwlWl0w2bJcBpGzh42GaLJPS-UzsJPCP5QzKETSjNULtH6cNwbkFXyP8Eel16p-Dn4N3HOqjDI2PWlA9Vo7VAICsbiQclakBJf-o9shYXbK2MS20ux70YVRYk2fEHZ9jYbauChUAlZajMJRzVGG6aPRnRCNFheIDrgM-eYu9q7f2Pgh_iQrU9UzVFpTfYFwTlPzOgLXdW7AqJxzETG1ibdBQRUxcT9ZJ4xVbQuoKhNpT90NSrGkcNej2SaGQU4v-ECFFjkQpiT1ItO6NCD_", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104984006965383050783\">DY A</a>"] },
            { photoReference: "AWCwydjk0Yvc-G8srsciAaiLY3ql0Hte9f2bk87WWoJM0QV4whtGWM9DfpCFKSLppzjNqspWzkJt1iiGik-WC5jQlVJan9-M9Jgqe8XePAC5OB7C61xhSUKa2w9Db1gc5cjBxLfQ3dXjxYp5fRFtn3MyXSOVtoQ3XuCAQ38KKLvrXvYJXbuIQg50pk_2FifFWosRlISWhmFdiWQ8SQU6deKwemutGBweUF7tXn4mzguUvaZUg9TOETi5YZCisuR41CwZKBc11KPhCnwiceDxLujiJTZcvv3CF4oigXl9jV7Qer9ZwAie4mcBL_Bylj8puffbqzm9ui7Fd_TScUCIIeHbgdt7hjwzm-Gqw_Labogp3X6YqQu3D-NJLY9a69KIT6B8vtGEGLs6VdB-PVfpNh8BUEX6Di9AMuqCqnL-DNhJbg-p8g", width: 3984, height: 2656, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115443844165884722051\">コネクトコーヒー</a>"] },
            { photoReference: "AWCwydg4PiT74b37H1Lc7SN3X7wsxFV1udIMynBo10LUpB96wXpYFhpzFVZx7kYqLxQRfB0fx4iXy_9nY16Ez4L0sWq75eAQlDZOyVvKNtJZuPthWp7JxDbYXyGz9wqxI24Y28CXCqeOV-NF7GqDFDzFvMYwIQTKUQfrOJIU_8UTTx-MyC3B-G5Lsahngkx7XgRFSLP6wbUWolrLtjjz1ilepzyhPUMYhEQL9IpXuUxGNq8Mzk_6x-pwe6JwChYsXCsUNdnGKIINRFVQEoYepUgQkd0YLnxkMx5P2DBjaFXsS-49azz1Y8IItVo7GlboVRolh5VcKQPEkwykWkX3hT3ylb8nvcc-dvbz8qgXuF0zoTChuO85MRcBcwrNZqMg0Q3Ixzlb1EnNBHrcZg_zuxmRhLxQJqFwD1spW2lSxqjL4jTOFyyM9I06ItGqq3egxkbf", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113701607727627385941\">末松希祥</a>"] },
            { photoReference: "AWCwydi06v9jFQ0TbK_lmDWpGE7PYzWaR2iWhI3pZ8K-85kcXSQ4X8I604YbrrP6YCe7uaWqNsZEgHY0xO2g1MJTRzJrQGx3211vokYPv9SoDapEZ8e736ctUi_pVczzSuD8sqtxghSep5riuBCmP34Z6IyxrmmsDvbZr0OnfP02bPMymm7roshFFD1jt419hWtFLOxDX6hngj8LtqC1ez3VoBP7wikhJZfWxOUlyP3IiurraTh7_ymWGA3v4anH10r5aM1Bk1fmxQZH_boQmmdavDp7IfRa43B3c14L8JoR86eU1o40-_W13sA5y3GsUx4RfMy1h6kQJwcI08ywsICWfsZ9ZVIQFblrL17Z6T3CXTISDFRfqxgvFBOvVyPEfFjNhZIor9wliifCgTnNiqviZ1fnUq7oYOBYG65JINOV-1x7mFfdFHAvK7s9YjaLfA", width: 2772, height: 3696, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102768023158089177659\">Jenny tseng</a>"] },
            { photoReference: "AWCwydgFVL-YQk5Y0Ob6aSHuQygMoesxiP_Hxgczg3f6v5uIck8gTkQYAsl1Bg_J6yi881baF0qihGEzhrmbOByX8-qmnhPcPWZ1f0bLZGLz3-fQjhoL--AXz5O_JbuxMNWJQ1jujXDFhXLJbgMmKbVJvR8TWH2TXfekaIcjMmu0Fqs4NBWt475eVirpXnchNZViZvX3-m5RUmuzfkuNan4ih2l7wk3s3yGl9QrOy3_tmXPLhZZM99whBwapxtjlycw35aILu0lpH597hkc7JD3MjVM5cLIokoPrg_ayZ-qhgxrb7bi9tTYm3JlepFuQgFvzK7mFB2XFDlc4v5R_PaS15B3xtXpE6bWQp51cpORoCZ2wk7AHW1yDtEP5Ujoc616aNcA9G_WAUQoHVygSkQpxzoo7V-rBsNfeS0UbpxxONajctuiNxiabrslBkWYGH3rp", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111878718363906442825\">Noor Qodri</a>"] }
        ],
        summary: "핸드드립 커피와 디저트가 맛있는 곳",
        updatedAt: "2026-08-16",
        highlights: ["풍부한 향의 커피 원두", "맛있는 디저트"],
        tips: ["여유로운 시간을 보내기에 좋음"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "핸드드립 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 12:00~8:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://instagram.com/connectcoffee.co?igshid=YmMyMTA2M2Y=", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7949587605784230770", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BB%A4%EB%84%A5%ED%8A%B8+%EC%BB%A4%ED%94%BC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
