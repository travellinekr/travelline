import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "사랑의 절벽": {
        photos: ["/images/guam/info/tourSpa/two-lovers-point-guam.jpg"],
        placeId: "ChIJf5l_nWuCH2cRf98e7Jr447M",
        placePhotos: [
            { photoReference: "AWCwydh8bf_XcxXyQWjW1MVcSC8ntUqCPq-XT4fQD3WjzBXqJJ8JJ22ld2smb_Vtn29J3C6goGsfMqi6tlLxViF4Go-yMOalh-0V-ct0yNMX_PueZDikK1wttUVGXjzUhKaY2pARtIqJIxKct4h3whisHrslGDWxuhtYk0XjKMv98yiqreRi5Ygchfs5R1Ag56b8stOAeTelFY7vy67B05USwUqVKUBPxLah2r6sgU1vV3qizTiDhPlMfjnpKusgVhlPlko1PgJ9tqvN-hT33tK8ldrqOflJEF7dW7InW5_WQVLYx54l2ZmU6NE0XqOOCcFUT9XVtl8MpDvINtQ6-LAuHyBLUjIhlgzROFOugXxRw3pUZRkif2grDeD3hoheFA84IfW6eve6VnPl-9FvreyZlkLSHLhVvthTMnLIKBSHrrnYgLjP", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104776032822735629864\">Sangwook Heo</a>"] },
            { photoReference: "AWCwydicqL_VXvab6mj2f8kZVqQxjx1TgcIuJcnjJ3-pWUewp6rdCxaRR2jQs1KcLMlJW28ywLHeV2ZOEn3zK55fC_ZdUYq_wIl5Lwf8AIHAd1jAXyK9vC7t9iTSo6Ixpd9Oq9tbiHRdnpM5Scvm1yQLvWUqjOSnZoducGbEsSzeiqm6UDWzTaRo-ItBEG1KuzLmuMALq88EDqkE-v39CTdvTrTU1LBPSzHXL1oFk3spbFAN1v0u46Un88uAqIh34ydDsexRwJcG-zbXhXm2b6pdak60uAS_lACoFCcERBeOBkaa89NRgyBBJEhSRdQFRTrxApCucAp1X1P0Ya3rRWojkckAmpxJF8WUYDnz6igdnoOLOiuOp_LP67lD6FjdMLXARE8AiY-uMZb3uNc1iBwML1k3w6NohJsNBWSPVYr_2h6i4g", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103743182989175029323\">Julia Planes</a>"] },
            { photoReference: "AWCwydjwxd7HfwSXO3mCOxZiliulbVmuWlQzIWnr_TmUIOF8baP9PV28Lu-dSC-bvFaVutyGWqMZ1lHkSsbu0po_dkbfdvpEkzlNvaM0F6yA-HHEDxXJgD41h7Ynn-fDABWDC7MJIBIgIM0b-JWvNEAmrtTymcKOSem1cDVeyOlB0l9sxm_PjfC4bljiSeZk32FdfcOtd-crK9E6Dpp0dID3UcokmvepFTFd36eVWdWn3Z6VZeScJPYqNHthzsHnoPOw9BtLJcnFrJ67KHnoKseLR0dvV-1FSglJF2NRSEyrj9ZibsiaRGVv1t-v_DqniTRVxLF0R2bs52U23I1_Nug8SWfz_veKiLAIEu5MDlPFea9EZHcj_WzmdPpmo8DFYMw5YGVvmQG7GJpDsi7YVt49jmQ4WD5oNDK1OL4-LqD1uqhJV02U", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108468120343309413202\">Rachel Hong</a>"] },
            { photoReference: "AWCwydhaowdfwd-5UJyFEBaCl9qi7CDYQRm7v62w4nicroRoe-qo5Ld6iOttRsQONBPlbGRu79BurG3WPYcywq1KSAT3pL2QVY7gv6Qzhu3PFJAooaO3Yap-ewWFXUre2CFFcl-4FZ8NvoXVOJlABeNdsGEyPiMHBQg_RVXNSjLS0CDfQUUwlWDz-UGKo-Sqych8tIs3uaKjhLrlUm-dfIBNMUPgAYE-Xgr1ePcMrogHChgmlX-xdG8IK70Dq-oly0o60gWIEIUY-wBZrSwz_8tBCBjbYGNAfsb7DTkBXSJUlKZBvf9RWnCkTY6hRtNFJnwyElkEWhAWUl5zFx1A5yDJWHkjWboxNNqFv5Yl_J6IxpqNfDpBCLp5yEP0z_GgVjK-sMqZq2_cUfZcc5tJjLWEm4Pe7DBcjJ8fN2vWv3xqsCQO1jM", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117793656038005784991\">Ssun Im</a>"] },
            { photoReference: "AWCwydhPUQHBgrNzhQ_yVX15U4LzA4AHiOnYitj0veKRwp9xWjMyQX7G96DleTKD6wc4Ii5XXtWbjDFOcaE_3h5b81RtHojRULfENGRN7iBGso-Hfx5sfCAE7ihdgQIJ1aCTxlOXHVpFmaR9x8n5m-UQWiSL0O-OOosRwDH3Q-H8YXmXz6j7eqqLluSK8IxLE9JoV2t2n8JQwXiX3qSAeKb4CSx5t2h7twaxCu7IGSNx7ca9EDilFjAM7AgYxEYvla2mo2Myusr7gH_bEFocjutsMmwW35fCjlxlt-7-Z6xAvlmhzXfXHdgCJaVFnuvAjqqZm7npFSJeoRGuVuJIeqsPxP7YuSqTUqBlKNx0djr7vTGiA4W7L1XNHhLSEEwtOjFsoKYmKtT4jsNCr3AycwIx-kYck9R1PMlD3Aj3suT7sKvXAss", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107129342844055656378\">YG Kim</a>"] }
        ],
        summary: "투몬 북쪽 절벽에서 바다 전망과 사진 포인트를 즐기는 괌 대표 명소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["투몬 북쪽 절벽에서 바다 전망과 사진 포인트를 즐기는 괌 대표 명소입니다.", "평점 4.3", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 7:00; 화요일: 오전 9:00 ~ 오후 7:00",
        duration: "1~2시간",
        price: "입장료 별도",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "괌 타무닝 GRM2+XXQ", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12962477496772517759", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EB%9E%91%EC%9D%98+%EC%A0%88%EB%B2%BD+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "투몬 비치": {
        photos: ["/images/guam/info/tourSpa/tumon-beach-guam.jpg"],
        placeId: "ChIJVcWtA4uCH2cR3ugEkXOfzAU",
        placePhotos: [
            { photoReference: "AWCwydjmMrFAak_N3h5JGRIiiCb2DbE2jDCvukliDY5RiRvGNgoNXalY4iMq8RAQS8pf8unDqDuDnca93Ab8njoNIp2lboBApY78psTrFc2KE0I4upFA_uvAKk3VlsZP1-O3CbZWwY4c3Q-WrIWQT2BfBoyPpykIX3wHiBIN9xYtJ7hv0iVXjqqy1-Mgzj2Nq63KKPyHvQ4l4dFqiw25aPo5LgAaQWdAd1A7B3x2mar4ZedtCT3j9kk_rif_88JWoz884XMp69l6yum7Lr0a0csfG82ye_dLzMAAv1in91xzd-FMe_dicSjd30oB-GfhYq0YIFTdNPK82rap-xnrokQ3p2AJX33JykImxisiAh5IbDXV3VZcIv__3igH0558zv2r9gBiksjLIHNCpz3zCVFxQHeax8WFgxy5gXFPbGJFd7BIcw", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101429420052179709047\">Yuna H</a>"] },
            { photoReference: "AWCwydgp3mc2bCFhdDplfx7Ex6VBtZkqMswuCzYHBp80UAc7Sbyhr76vEBkkWsKELq2Gevqj8QAn4PipBrJ2lN3GT_VYaYk9Q_a1FuuT3_ukhRneYmJFsUHAl8iEwB2WqBlOQFRtxp09xCQR9kjdOozsqWi_NQ3iO1va_prWFNvs6eMemk0PsxO6HQpSQDzZB2ztwqaO4tyCgWem9ZpQ32xBEruXAbVB3xf4mxiCs3sj6PHuPAN39GICebFVNoS6_lqgQ_phH9VbPtVNIoLalEmxrdCNnKIsd-OWFDDGuMc7377xBRWwurRhn5Say3J8fEohN5T8Rr26onS6jolx__j-r60zdbxCizgbhir0fG_l_gjOLN7E3o_9pOyp1MVmXtstKVgB7AWdvxe5E2qp4Q7j30QAk_S926_Qf1Z0aAfrlZ0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103783445153793643024\">Jay S</a>"] },
            { photoReference: "AWCwydjrSRTT8-PSMBdptMqxrxLZ18_kSGR31DtFV7VI-YOcq0_7Ykm33JbHWdFcSzLbgp4Lvf71GEOiLhCYYbhq6TXdCxe54gjaQv8TvByKWUxYb9QFki6h1BwmtcdeOjAq0Be7iSGgoO4C9A8qJJsAFrxXKifWBAg1H__wSETUVa3CWrV9VLj6-rb49J-eyp8tOxYQKDtJ3EjCp9gt8d8231SRc__jBulyR1NEmKlVe0O6IGb8zVZR0z3LnKUHD1quRjqXTTlR2o1ZhWWJ2LKVr7b-InkY-QguAJn1mZemobe6kZ_QkAKqrtOOSY8mQ12Du-fN8EqmNRZy9fbZct9XRFp6fDEFK16qTzsw334KWlC-Sw4bdEL7q9Zloaj6f_VDMYfdYOgz_pyIMUj_JwDezbPSPLXsUwaeLC_LB6KzI0ZJlg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112706353286172646347\">K Fury</a>"] },
            { photoReference: "AWCwydgDK-OkKa5CAL4CRFeHd6t2Y7NDZXsoex4uKgmkqzK360gXGEN6gWckY2Nt5y6ouaI0m1ru8INPk5Jz0Ru8bCwwd0K11IH4nAEbGfjnC6S0BGz1lti1aCyXklJ9vY5oaQROu2LumXFjunFFktx55h1ITWpr09eU_cakJDg1aKgcnBsgxtGiMhIVNS7N3aIQvWp2_3rtQbTjNTIVhImj0etYjOo6VgOedW2oohT4x7C1koV0xuk28C7Coi7C8vsmpxdKl-hmeTGu-IPqBp0KUsWcg4J6qhtcC03PDUdQGCDhA_-7X1EON1JlTvzHNQjgSvbm6EOB6B9g1bBqzbVzCQNMqcpsSgNTrlsLrKSB03sl-3h8nP62uLoM9SHF-wG5RJh_Umdi5dmcT03qpV7s18JU2sqWdR5ULRxNkZEUKaUuADw08q8Kq06r50i0sg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111108588030545465945\">Yuki</a>"] },
            { photoReference: "AWCwydjXJqjUmRjo5Ul6uOoy8Qo689X8A0746LvG-RKmgdYBL8c1nz8oZwhNsNUpkbuyP1rtX12J7IT94NKLDGjWe41ejWqEvkU4Vz4V7V4uVSAfXIw4HctEtkTPdqksNXj3xU6NMgLYnBiEMj7jHmE3PbB7Ime7YKGPj-DF7eMzqg1HK2lTnrrn1TIcA1Yb7OrLP7CP5uIzAxVPMovsLcWcNC4ZFgWZfzmB6079MO7p1t2M4hR8x3oxBMUTutD0N6bw_X-M96sj2tT4m4kHkVuoConhIw9isWxm84XTkt_dI_UIq7FV2vQmSgvxKM5MdCG32aKuojcycxVqwIDmCYTtlPWS0coCLZy0OtH7wkDcS7s0oMTbxRv_ASEilF2vSSA43MyexlnezhcBB9w0qrmpM-ikCHUvLF0va9i9kA28_TZhjw", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115932868049637922233\">joy</a>"] }
        ],
        summary: "호텔 접근성이 좋고 해변 산책, 스노클링, 선셋 감상에 적합한 중심 해변입니다.",
        updatedAt: "2026-07-14",
        highlights: ["호텔 접근성이 좋고 해변 산책, 스노클링, 선셋 감상에 적합한 중심 해변입니다.", "평점 4.6", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "반나절",
        price: "무료·액티비티 별도",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "괌 96913 타무닝 투몬 해변", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=417884184141687006", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%88%AC%EB%AA%AC+%EB%B9%84%EC%B9%98+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "피시 아이 마린 파크": {
        photos: ["/images/guam/info/tourSpa/fish-eye-marine-park-guam.jpg"],
        placeId: "ChIJy2zWP_p5H2cRndBC9TKZnDk",
        placePhotos: [
            { photoReference: "AWCwydjWJm_uDmt0Xc8nsQdVWySeqqJDhVxELtJ9FJw9USEmXB9SEftIsoUJcxDOmC9RVzdBt0mwZLRwmQd-3ErW8VdvlSMS_XuxGHJFHVswieJL_wnn3kG6x2OEZ6xYPnkyHZ0LDoTmjbQZiuYr85GROeVK3fJkHM2VC3Fba0FbmszE37ahjDleWmyE-3sYywLUq9IHnjUtDXYtN_KR3DT9f1CBqN_3cqRqo4Cjlu3_s50AbCM2ZiNNFT6gOiizFycWM1-Ixf0Yc-QWPSyu_oz1qJgkU5VKJRisBZ3Y8YoRZt-8AYg3IufSzKPtlZr3TFPJQmX9oGfMBsgXx0AKDw29EkWrh2jfPyj47X2mewEh40TcRJQVAgArUEIQFIrvKZK3ZweDlu-KFftqNi2W0gu94hwiwh17sF9Qtvi5OIN66eSEfw", width: 4800, height: 2063, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101787831006332618988\">Fish Eye Marine Park - Visitor Center</a>"] },
            { photoReference: "AWCwydh073if89QdC4-oE4eNv3ro_jpgTABJL3y58Nb2eZ_Tz30DxshajQeaDdPiZfjXMbGjSLo9XXXYwQk4T5v9svtLRo6-69H586fY5DLmYajkR9MtfRrPCKEFO0ITFNWDLD3y2RawWHjOsJsJik7r1nf0R8w1hO0TnAeqHtva8nSF9hvVPGX5H2mPw9WYb2Ad2vssXbiOZ7e7LKwOebTQ1QyV6G3BmAoYFUYifzn7gTO8Rgji_2nUukm8ivpkJWr6ZBTB9X1AO5_Oh67hRlvEHCdNzLTAMwsxoDNlgLlsCKbPkxXV20w7lOHZevR7lMs-JmmeilZrE6hTvCj2V6HpvPAz5ULni_uOTIpbWwocpVeWzG6_Njk6dXYN05KeuVGxmUjQbRt-zj9zR3GIhbL1dNPCM-sESeVt_G8rDXOPXiFH9n0", width: 4000, height: 2667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117218717005096972721\">김로또</a>"] },
            { photoReference: "AWCwydgjCaD6sY-9S2KMixFeO76gJEeSas_0efKOEG7_9Ek5rBpre2N4whsu9zUikCbeTt_-iG0o3o0NUnyXT7g1u74khi6zIPIF-Li9ldMfZ_vL002olaJkD-ZUocZaozpLXIpiS69BkE83fmzRX1KKGLuzmZOADlpQay3-Mi3hwmW1ookoA-vi1PxUDb6qsFn4geEpssYXzRPTzH5ddN5jivz4y3XA8xPL-4B6ndyJqLWHqXiCTkk8ys4L6JWf5mmUDjQzLrgED5b4x9se9W4t4aWZvYc3D0fBb5SB2KQcl6ZlB6L4Cj1BSqj7pXTqkA25DnSpLFWKVq3lRmRdpet0gGtLh1EK8VHP1V-FGXYjOEuMXcvXTZwjXABC2V8awnE-KmLo14BMYWT4ehtScbU0PCcVuDtJcg4YJWBUreLi9-WW-ZQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105937671935847113741\">Jacob McCarthy</a>"] },
            { photoReference: "AWCwydjtb0eI6JlrzcJjpmW1B5JV0RrDEs8Mo2XKEWFeOPfxTnp5ruEhMtb2pPyct5p3j6JGCAE8LambnTPdd8ZW-WwwPxGB7G8pHPFd_3GDdYYZNXA4Wg3w04qU6bODjmcrE0co-TLFEWEORMsOm-fvad2AlCpOhbVM7fHakt5YXBPRwUC6H0r29aX13aAJ37r6peCegl9GiabdIKxPMbq-83eiDLiwOHeHz-UkyxtTssIe_ZeJRQ_hjOrAf1KqZsjT9H-Ad5zzi5-UgAjPQbsBa6MH0yY95V_ZoOj_ehXlsIQnznLSNRwOmurDrJl6TGmWQz3MsS5S4_0uzb2unQTsm2R6YAGskdLaq2Q8DvqtZrG4Vy5yLG9b0MBiYjWQSqmIXOhE9BokIKLA_FJKSmO_YW01U6lEPYDOy_9Le2AmHRPcgQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101558047094224595245\">불국사</a>"] },
            { photoReference: "AWCwydhA5IOWZKM5HXE6AX1jj32y8c8LWgKYQmiAH077F1SS7y6S02FFtMNYtE8ky2FaJ2k8uP_nWoMv13Ayu-5oUSpKtsCiSRkBh4nYbFfHXwUwdS8ZrOm5R5vEKT8nCIWV1Uybo8INiX9N_8ahJ38lF5oKq0OnZEOAIDiig63lE1AvYMyWpvtOJ9h1H3X74beLYRsen7cJuLQegH53kEhQCc4mcK7edkFaRI30feCIEUiTio3Rwb8BhW2A8oH0exuXe-WVb1e1-9Mwy96Cc8Ay6wvYqPpndCONTUjlLyuD0fTin7AH6_p7zfdNd0HhmGYVETG8SclEEGBQrx8a-V0ogT-LdxAs5sTNerDhus2Lm_XMbSJVOJoat_QOuOuUwWCBvI-zB09BWAdxYUgvPlXECIT53F6iIuL0_jUs2bwpbT84EpJa", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100726440241269640264\">Jae-Koo Lee (leechelin)</a>"] }
        ],
        summary: "해중 전망대와 스노클링, 디너쇼를 결합하기 좋은 해양 액티비티 명소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["해중 전망대와 스노클링, 디너쇼를 결합하기 좋은 해양 액티비티 명소입니다.", "평점 4.2", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "2~4시간",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "818 North, Marine Corps Dr, Piti, 96915 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://fisheyeguamtours.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4151361400670965917", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EC%8B%9C+%EC%95%84%EC%9D%B4+%EB%A7%88%EB%A6%B0+%ED%8C%8C%ED%81%AC+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "밸리 오브 더 라테 어드벤처 파크": {
        photos: ["/images/guam/info/tourSpa/valley-of-the-latte-adventure-park-guam.jpg"],
        placeId: "ChIJD85WXRN1H2cRfGRh2hpZ1lA",
        placePhotos: [
            { photoReference: "AWCwydhKGydfybjfiCJRoITvGKskTnurp4IUac5wuMdsipSygTptiuueZnKPFA2XtA0LZDatS3dXOGafBewRyaqX-KaAH2WnfGNXpqrWu-dGGqc66gpKgMz9nVitpar6Fiw8TnHfcifPUq4s5tTQyO6BqyrJ48fV5vcSW4D3_mfPf_0_r-6ffOHcH11L4YnYxCDKXRmMSwE2-1wkW4QBwVZar7B_SUX8TnYvbzoZTjpoi9BGXB6lCh4_a3jzfSqqaw7AR5ODKWZvnzQ4wRIj5VgIiN_1yWm6TAIYxgZdrqW0pavXa_6XPgmdpFfScZV6gHEIvyOTJtiHUug-WVRdqMg26hXMIPD34pINErHd-bk4lfcFPZ0UrIbkvWSCKyNvlVQFh37OIBs0yiJQwDBBBMB5Fl55QUMzp7n3f2k", width: 885, height: 851, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110221160796093858831\">Valley of the Latte Adventure Park</a>"] },
            { photoReference: "AWCwydiu8eYILA0ODvQax9ZupDCmBbAPXkixaEOBK1_5NVxCKe9ryB_oJcR0FWk8A0V4Zh8pt2Y9j4rog5UkHmQc3_WpUOLfewG-iGBDhByQ6Y6CWwgGgfQjMKgYIdSJNuV7vlTphwmuuFGBGIipU-1Zv9ZKlGufZ72ohSMOnxOv9XllWe8N-b2OWaVV96NlOtoDXBcq7jCG1V2vqD3AjEo_MFrpvO4j0zQ3mt13RrQNXnM4XMnmGBR4fA5wJNnV2mR2CMxdWGqngIt_JBkAKCFIBozu626lxIpwhqYEk9KSnJcxy069lBsUTR-HKnExMET9g0t1M1GYkLz-O0JyQ6U_ghULoutnMRpYr2HHZgGqQcJLgCA3G19OEOasUSuNutnMKnmiu3lI8rOuJci9KZXz7EOg6EUNsq33_BWV0_--i-U", width: 768, height: 576, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109224222672722441352\">alex winter</a>"] },
            { photoReference: "AWCwydhDDbbAUDJ5xaUcdwfofbNq7WeW47VBGtI-28dai92UMpXy9-8E5mleho-N_UdaZPWKFiaS8lAB0cOy8Bm9wRa8QIxmW3uUVPG3dkOZmZ3N1rWj1rSbfZKOjIG4NUQYdir3GaVCmQBJ02pUQhGcbSERWjAvzgzzsm1oWTwHClfaC5w6S7dIfMZUlG7G_Bj2YV1Z1NXhEROkYCy5VRssI8FU3MAuTmj4xFk4OuLPLj8aP_kom2hK2JhApS_ZHiFWtDaZygj9b_ZRt8U0e6eFjsD39hja2w-KRPz5keBGOIuXBMwu_rpMd-9glV3Nvws6gCpCg_x2FzVr_dOhuj6w5ozDW9Eez5KxvEfyXCcEvGacSbHIBwmSCX9sLWdQtEZLerRqasTLsnLZxRY_77LhEUjcsZsG-M2GaunKnus292U", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103699670133137022738\">Ying Lin</a>"] },
            { photoReference: "AWCwydhR2cLZ8hwboZyzaCRulG2EBw_5PUTDDS5_vAAAz2d95maDpodfk86Hfsfsw-lpw1EjjU00i8wBELeU_PJ5rAxFGwg5UgR_rVXZPCSSRjVfEflH7kbRdB9SCQy6sbkfBKzRTVnZKhIQLsaO69rsRE0XXtwjHVRNLuKM0_j0ziU_hPi2slIhGEfNbx38FKbG9hLYx0wmU1H2xjkFHfDmzTnWSOo2pw3BMpPuUnY4Z3gevNYJlXrdjgQacr3wROT8-VdA_XxyvJPj7cSmKxP6NQI5NhncKKTuw4UwUQbI6aeXmbrwRImyBOx0kKGiyDsqJRV7F0BMU0RCFdCindfwDDjBX3xUxbPU4X1NOrumYcc-CO5yT1dMCuVFINFqhKnEGcprve1HTkP4wySPMgVohHGf1huFdbxKNkxnZs8BNUGk-Q", width: 550, height: 367, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109224222672722441352\">alex winter</a>"] },
            { photoReference: "AWCwydjmNC-DzpPaMvHDApRGIMqDpyFJ9ku1ZXLNZ2dC3_ZobHfTrpCOHHadsUd7Sy1PUPaVwETFLvLkIcdytVEWRaWrBPdr9Rpnn6AyeVj3Lrzi3Fh328Nnhsqy4uty2M1IHbobP-w2NnMcawR8iOAp7vzeXh1_8fua-_OyldHvr9C1-Bc7YKyBi89-ffSrFBZRjNmD4rkJj_iLN-W_2kPBnjjdQvRzzIhoOHrYWpNzdwDycL8KX6z0nX52BFHNgjrH8V0oEAhou1464TO9KY6BmtfwTUpiXKDweKD9Xy6Cu3QPszlDhaOBki9RhYVEKNd1dlByRqif3cAziAN6XOZH_T-LEtMq_HbOSLHiAX7LO9Oqdhjd0HZ3I6HteTIX2ZTZz8AIjyWiynBsBv1VS99FG70DXDHcoI8D0n7P5rjj-R0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110843693887749815571\">hirakawasusan</a>"] }
        ],
        summary: "강 보트와 차모로 문화 체험을 묶어 가족 여행에 좋은 투어 코스입니다.",
        updatedAt: "2026-07-14",
        highlights: ["강 보트와 차모로 문화 체험을 묶어 가족 여행에 좋은 투어 코스입니다.", "평점 4.7", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 휴무일; 화요일: 오전 8:30 ~ 오후 1:30",
        duration: "반나절",
        price: "투어별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "4, Talo'fo'fo, 96915 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://valleyofthelatte.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5824941139918152828", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%B8%EB%A6%AC+%EC%98%A4%EB%B8%8C+%EB%8D%94+%EB%9D%BC%ED%85%8C+%EC%96%B4%EB%93%9C%EB%B2%A4%EC%B2%98+%ED%8C%8C%ED%81%AC+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코코스 아일랜드": {
        photos: ["/images/guam/info/tourSpa/cocos-island-guam.jpg"],
        placeId: "ChIJORf8brUNH2cRZbV2WpHrWuw",
        placePhotos: [
            { photoReference: "AWCwydinoWt2_SrKEizs91dbKxqNQzu9WzDawXtj7iB8ctoI3LU1hRB8tosIXzZSnRbdS9vSMaK9ne0UKQ0f4o0dMPeEyTOWLGeypHnuZ6NamlMSgY-5wBgArRXQ-37yTonq7JGSG8o0rd4JXs48SV0UKv3JVMtiMUA4xZb3yeNb18LoXCY3sxW3xBctj9aY-5wo1CyqPhYTDRykMfnZbNCqnfafdLjwyeXbzaxE8JwRrgVrtc-OJx9TLc04ZSinlJ94Qsp1Bepm8LYC3K8ZiNlmt2l5-rLN-r0Do14b8S-7cmZSorMG2aWQPQdJ5SYsFMKyFr_EDhp1NH-Yo59cdHKEvsXFfIjkkoVbDGpb6McVScG3Fa-PP-IRzzlcjtyglUqjP_l1EOA8u9V5Ih9FgUJi7e1qr7wlT84J3_h7bfEuNphLeYiF", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106417326820657104029\">Courtney Werth</a>"] },
            { photoReference: "AWCwydjO8c1cG3fbjZbDSYthtuq3vOr05VaQBc1fLc_ReWVm8lKOBIqiCPKVTEuiIBae8HH7RwPdNnr73ySuHEykDt30X-KxKorIGOeJUbrflXiBtC_I8mNptIIjYI3QanlnqrvX1AFuQocmS5ixf1cDaFJ1W8H5YckQxVUzpx3s_qx0qkoQRBUnMIhlm17YATYAoBeTjDkRUJ8D6xQlqAPgQ-DVPTeM1wYGU2EL_6d1_TFQ9V71ya2vrTgwbyvNsMjXbQK58h11uAmJ6QQQI0GCDi_R4BLesTN9SLGJ4nB1rBgoe006Wjao5h_2DJvME2QEIK3HMCaVtGNLnD8ruMIWeFJ6pHIIzm56AtpbnxXD4b0zaOyF9DJ2T1sCGoaTw6sPHLyQd0klTYP65v294e0Tn9JQ9vh_4OtYZxlAgp_xiBRbkg", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105143384729664662588\">Y maetan</a>"] },
            { photoReference: "AWCwydjgD7Z9S1w-bVL4wrGNycHnfkQmtp6ndsKXYLVQ-7RSVhMxDHYGe34ktElOZAsTsIti6l3gHLWJ9aqiBARPYM5X5b1ZaDunGhIP3LRB_nfXhB-2sRFD82a-vkufW_680vfJkkA3aB7zVO3W4GObYUop-E7YVvNKC0Upq55KCEDP7TEkgxVgxtEmNwlRutsE6ybHBEjIxjjwzH07-zTv1PJxh7uHgPUe-mFI54czdCa083_y2xp49ZMfvoa7jYbaR0IZ3T6J8_veoXMiQrk-8gWjAD7Pj2_ratzQFJgrEPz6Tt8Fn_K_EDllw9j3lxoKsu0CNU8KRQ6LVFcz5_7TkPL9ZB7HA4Pz_oM8NJrg0WlH0K1EzZyMcULUj5KDsGdN6VCRYgc1lpm822FP8qdsQ3vyTImw8yw_x9hVvR6qH1125w", width: 1478, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118412792357221340902\">スーパーノリオ</a>"] },
            { photoReference: "AWCwydh6SzFLzoeOCZyrCnLmiuJHtHk7qO87R0lmhpyF-WCuLEBUNVi6r7Dn2avwPWEYEGbUQAHRRcTpGoAOobkX1zl3XFlXB6mslY6SfpCZKoeCseiskvi1KUiU9yai7mUn0WiEWNnJSe76VUyg5RyEjTlDNqPwcP97mkDyu5Qbd45GX4OpvIgfyshUul5FBB6Nylw0o7iNJu3vB_LY_lqctowvFYBn_RXXr3uQlCA3TBFdrGXsTTSzldw2jOH_L9jTQJYB4aSBB5EpJT1a2rjT3xkPizI9QNMZQvgpI5s7gYGQinJaqpQMBChc9Arq9ZU9FCn2FylHSSHmQdG7i5oUHBKjhVJ6bFtj6OEVhVAXEH18ruD8fyK4eAkyRQD5RuIzmfd08jwedURFNN2f3nalWLozBmY3Ba1st42DTrfm6sJ5QQg", width: 1079, height: 1562, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112339346698228036679\">Debasish Sen Gupta</a>"] },
            { photoReference: "AWCwydhSDD2UN1qMKfYDlqjSw9gcG1khuggC5QkC7ZI4nUaBnXzJmk9rVAEV9zf9I24As3VCUxiW_xu3BpQ-hH4w536OmheXC7UwZ57ZdVrsKakWLcNrjsqXWGfjipEbYQ4kB9yz85jlBMBhjDLmGYUxwNLyvfND6ZZatOTEILGoq3jvUqZ5DAh29zwkQHfl42n7vtC6LwW9TpGwQxdwPx2vl7gPrckksZ51143u6Kz9dawM1dhr4QjsJ39N7l7xxRaYkgaNKVCn66bVMdaptSQb5crH4QvVHDdNsAxYeNr-U-lUD23kuFtUgTugHVJFGCK1j2wI-yO5WP066tfPv5pOyvbONSRnwwHeqRix9i572dwvYG3YPgIjNxFlnb6C-fXHjGAlm1_FqnEyrG5DHBvVLRnoJ7MF2GKAujqd7pteNcsGemYi", width: 640, height: 480, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117676111110275387386\">ichi u- (kumazon)</a>"] }
        ],
        summary: "괌 남쪽의 작은 섬에서 해양 액티비티와 휴양을 즐기는 하루 코스입니다.",
        updatedAt: "2026-07-14",
        highlights: ["괌 남쪽의 작은 섬에서 해양 액티비티와 휴양을 즐기는 하루 코스입니다.", "평점 4", "괌 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "하루",
        price: "투어별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "괌 코코스 섬", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17031183950375466341", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EC%BD%94%EC%8A%A4+%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "에메랄드 밸리": {
        photos: ["/images/guam/info/tourSpa/emerald-valley.jpg"],
        placeId: "ChIJ-yiabw96H2cRTGJp2X5Wp-8",
        placePhotos: [
            { photoReference: "AWCwydhfxaOFL9mYPRHuiUdY_jxC2705BLERxE0vsIp1lZtX-eSCp23VKn6qCisJC42mOzXPU2RQ5Fsjcp_EMnVyjdt_yrhqQdazAhCCgDxdo_OBCCpOCIg4v8htoDBEuTkXyAhWim75YkWY2JtUOKZLAYTf4rqyNXRnrtvgxjTjgacKXyJ584idnkOjumd35cDq3rReAgAQqWDRMTXtd_S4evavGe7pD4Jq0C3zFb3iQJ6nosG8wHfDITb1f9Qn5ziASrNEG980rmm2dn6cVESZpSpc3LEkJaNdfhkNpQ8RDIotj4lsX32qgw0ZtcPVmpxT6g-4YtmK1O4x5PdTFvXU0QQ1z4cNn1BBaasNLsFVtJC8SQ56G3IfpqGAhqPytDEhrkWVndYPNu_v8DK2mtNGrUH6RLAKW8MNHQqCDUe4T1yK3Qu8xFliy8fEbJj9TQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106541145115076321610\">호야</a>"] },
            { photoReference: "AWCwydgvWTPomeeAjoBqWg12x_EizkTwNIzPWoCqy30MiUVLfRGBVQw0PVVpxOniC7zZPGTIrk7Y9quNXSHVxxg6UkL3GpNvSwKaliz7YxwMlbpaw5TrA37pnEp3CtuVGpeJqNHONbNfn09F2NZ0aw9V-TyIu5O_4xpAb_w8IEkrXngKSEeDtn-TkEw4jHPLFQyIx7qjcrbMsmDHEg-GtiHloePBTncn_zQbnryVdivrpxtHWKUNzP33iDz4u7aYE8SxV8idG2lQqT9f3_c-IdPGA1pjN-BjYzMq99AYWn7dh2EVcMwyUAXE3yJcgFL1jVcv-s3RUxc3A25kBmgglnOZqMxxf53r8-rq48h9GVAxWrqYkoGrBqJbxiK1VuCJxo_eDI_z0OV5WiW_wdo5RluDU0j_sevL-iRJ_bNh9w7Hd9Q", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104642939211244506436\">Sangchun Park</a>"] },
            { photoReference: "AWCwydhP9onjcwpHb5XFJwHrnynHFB9qBKomJsHUfqVOrI0aAOn6LT1LtqFc-MQcg_uDwDRNVVA9NclGH-u9OMcllsJzoTCZe6GFB2k3eAetQb7Pk6Z8RpelWTt_gkgN7WV4OPlOmItdNqo7NcNpy9spk0qUJa6whbqt-Hhcfpfc1pfM9D1ss71Ke_dOovgdZcmDH08F3B73M8xHbc2M9q6an5s-CZzKzN5jfcTpvLkxwnB63PRxA-4lGnJ9zdJjMfXYlWB52JtMoidx1ytTs-XkwhbkqckSQtpXITlOorOyqGoYlzWt9MsX1Z8qY6MnEt9LaCyv5gRSELsy0iEGVnJphuGd2THFolI1-C-Pg9o7-0RXpn2_LHSDBcjXmvRrX4XqHtHXbolDBuzDPI-Szt6gr9cpLe9Z1jTydBzPsg4l6Zel8--j", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116516072998347221114\">수비니</a>"] },
            { photoReference: "AWCwydhSWzjsoBIKRx0M7t3sJcuE2nv-KvHGvo4ek-zkCK2f7V2AdEwMRf1Gyw2mTUzkU_uysw5kE9CF2T6Sr3xIBuF4d0gXIdupT0JAurlcj9awf8SZGtBx7VUkRXlgCV4D5wkS6Ol6PnYsUUAyHsIH8_EI8IRQ4e_7UKuBmxVV7BSorrYHuvaINoz4Y3UdmsU4ZlFAcdO6LoA7FncaTiL7nAUwL6iQqPq2Kf2LTTb0rxTdaQtuAe36zOgymqQrgUpp0PXm0p1RFQW72nqaZZuoGLGQGFnZyAYVgt_ryDI2Us-k7cqYjGwENanHDaJpxf-_QIbcCWrPt1oRqORZ3BCr52Nt7IL2duzsrzbFRH3h8Ww7hqEG_xb6kILgnecYasyVvjjP4F0TKWNm5kZfI7mnTWdL_bZ9aeI9Usbcf1dZKq4lNQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108918763277196283670\">Jinyoung Jung</a>"] },
            { photoReference: "AWCwydit0z4G3HAMYHUs8tUYPS7beqJLuQsLOBlOgNU7Fz5Chx2f8ZPNI91kIl_RAV7LbDcoDQF4eCAVGLY_B4QOiwQYU01sgj1Q_LAzhuCbgl5Ycp6oMC0EhLzMq4SYclURpU8EH66jXWmouJwZfIsTir3wrA6vShj5rT5MBoLajGWHL_aya0PNVX3VKu_g3ztSSWDh7hKUqTlWdclj2A2YjpugRaEyM3bV5nui5qyewQo5l_aL6UpUN0Mt-aRtcNHOsqiYCzkNyemsBQuPxPEXbSXc1JRPBtIAvlW87GUJPbRLT-ZeShbYdWM92A1CDpY3gsZ-1nI78Cgf4xtcBErgVCe7Vc8aqWEl0QVk1nl8P3FrmCS5GcaipKg4ZYl43tFkJN-F4MVGCbqc0GWvPW4fEGxN3p78unnnxH7wlD3W3oU55mQRVKc_xEYf7gTwbfcH", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111593646963303025012\">신영수</a>"] }
        ],
        summary: "신비로운 에메랄드빛 수로와 푸른 숲이 어우러진 괌 남부의 인생샷 명소",
        updatedAt: "2026-07-23",
        highlights: ["에메랄드 빛깔의 투명하고 아름다운 수로 감상", "열대 우림 속에서 즐기는 평화로운 산책 코스", "SNS를 장식할 환상적인 자연 풍경과 포토존"],
        tips: ["물 색깔이 가장 선명하게 보이는 맑은 날 방문하는 것을 추천하며, 주변에 편의시설이 부족하니 미리 준비해 가세요."],
        hours: "월요일: 오전 7:00 ~ 오후 7:00; 화요일: 오전 7:00 ~ 오후 7:00",
        duration: "30분~1시간",
        price: "무료 구역 중심",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "괌 피티", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "http://jw.org/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=17268866398988886604", type: "guide", description: "지도에서 위치 보기" }]
    },
    "돌핀 크루즈": {
        photos: ["/images/guam/info/tourSpa/dolphin-cruise.jpg"],
        placeId: "ChIJJVdGP4uCH2cRd3U9sOwGQS0",
        placePhotos: [
            { photoReference: "AWCwydgkcNVcvzoSwvNFYYa9KY9USPzCuduQDHjQQAOcM52hWfrqlh-mYmOZD85Umh-FfKZpAt4WqQkT1ttJ4Zuf3LkEGVqle1C7YwaAMfNEJPOEXADwii6iX0102b6nHpS2_5BUktmsOGsP6A63XgDpT5h-qrRxZ3GKWhao0dnLSrGwKg9B4I3Y7sNP1A1RK1819IWkvfYdz7RhImMrKx4XBUoDcQ5ZCQvINNCQ24cpFdiyhV7M4qnAhMCWZmscJdLcVkMMJtX7mvZxBbV2vzX5zjVQNLH2zDpRrd8DEvCp36v3HIPh4AemspIRfz9k8vuOsD-07wkLLLFzxkCVisGL_ArqZn2hnyAOavWlLQd20Te2bmFYB5l5pG6HlCkFAyNaKt1979fHPtfg9MV0ukJhlKy07Cp8CvMdJGZ65VdbXRs-Z_0", width: 2048, height: 1366, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109696617638746903354\">Guam Sunset Cruise Dinner &amp; Dolphin Watching</a>"] },
            { photoReference: "AWCwydhV64-_tUYou2fmNmOQZoI7aedTvczlwwmWvRI6vDTe6BUT46fv7MlG6nO7hy_9tTNklVcO4Is_UFqrOGJcqDyS3HB7_a9NyuxBbrAqruKsJnqvexlvu5Fzxru0WsP_tBKqMzfGUBG_CMDVr37ZWGTvEbBcu7H0yJ5t4Dh7DBkSL9EE5MmJdpJerYFdzwgv2-KRfXMo78nwukxg6dR4ZMViXfwFVDBikGwifyOiP0huafg2KQWdw1hFSVE_CtK7PFRXnDCTFE0pdctEQJ2ityufe1h4FRoVInQUJQ-caYZ9-o9uGJ04uH1JVO7qz0b4WVcVtYyoNvgQoYckoumWDNhRLEboxkDc4zxErIpy72vz9pXXQzImahXC2dcXQK50UIFz_qegLzIInpH-ZQJzPGjG0-zN7AuHFlsxFlP2kCPajMyB", width: 2067, height: 1379, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109696617638746903354\">Guam Sunset Cruise Dinner &amp; Dolphin Watching</a>"] },
            { photoReference: "AWCwydiIjKL0OVEFAOcsd4qvpMFuLg4kgy6zUAWeKl2jg38QdeylnW_rhKPk5c5Mh3V5K-OCB__sIs-NZo9ixplYKLa3jGs-v3Jkse9eF1enq7SGruLk97foaVnNbsprV9m-E9Yp75mfLVLnzXPwAoMEAKtFoRnj_YIo5mlzYj6FrveMRlRDlSYNabpT-_pHPntQ5Xh8X4yU4533xZryO-Qe_XMHtEKgEyXPkIGWXbXUcPDFkmIscWPlxXPWPZLyWlD2FLJNLCigIZdp0Pwc05tjDe0MwVibwIKcxnmWbzpPk02tUDS4mrzgXOEti5l62aBVJKgt7PjJsu4gxJuJzE4fJl4MMi8S1nFuxsWr3AnLLvvBOkqcgAThwCzrwaxatwwQZFQFXm5QZqy1FzuKe43i84Gkirpa0imo6LiowY_Z0x1DV-a0", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107224321036289708572\">EK plus</a>"] },
            { photoReference: "AWCwydjgCytxCfaIZGWZdLUEnxm4rJdwY8TJJczxkm_BmlsSqpySicq0BhOknQjLIGXOH5L3lgv5G4CLF3BVtpnIGa5Z9ZhkZlUriKE51P6or79oG287lRagRwmL9zDhMw5EihC5OmlJr7zxmj9-C2CsIT5vHXit3Vcek1OofJHmtGAbhTnPI43eaXIWcHEaJoerdLFjUp3q5EYVkDGiCoztdEzGfrNp_3Ndn_kT4p0DE4FdqR6b3Lhgvk2u57pyEOJVSf3yJRl0afGy1n4zNxr6ZtyCreSYx5bDBzFRBsLTpsVt1ReeggZC_jexawgPo4TfIisxvGX8Yx_7oPiHCqe_Soa4kJrCnDWNEhjyngOwTMshzPJgEfkb-zKbn66zevjJfSQHTopHiWby9LU3ZQcgIPgSl71W1RVUIGmI-a524y-bAGle", width: 2784, height: 1856, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109696617638746903354\">Guam Sunset Cruise Dinner &amp; Dolphin Watching</a>"] },
            { photoReference: "AWCwydjk14W8Yyo5MLepLFS1M8brvns23ANRzYcQ4JQDjKePwzFASGoEeSMVrTeB82SDMxh51afmdZBS3p7Zs1jSWaM2YL0wGJuhlpZuMNC9ZiBlE0lt0wuBh2Burn2eBMx5LhHguED-D-lmFfriFfVS2pvLC_6QJ7xs4GGKO1h4rJvVnRmzimbVUQharuugQgh5rgaovrPOUn4Wg-b4y8-tTCOm60CfTkFPzEl8C_gtXOaIkVfIfRrJSXXOLnHNCOn4wpZbRx2DunzWXhnD8niTH5aPMgtBM1qRIbsmzDqNphma5nvL1o1btf8jBmxukSjpDwneZPBW5LqVpffOZAX6Fq6Z5gQO9la7hYOK1_PIr9cBOjk6Ak31m8Sif7bv-GRTo38foEIU9CYgswhNgavEdCC0T_ksAw90T1ejgmJvR80", width: 4800, height: 3599, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118112368301170996969\">형이</a>"] }
        ],
        summary: "야생 돌고래 관찰과 스노클링을 한 번에 즐기는 괌 필수 액티비티",
        updatedAt: "2026-07-23",
        highlights: ["자연 그대로의 야생 돌고래 가족 관찰", "맑은 바다 속을 탐험하는 스노클링 체험", "크루즈 위에서 만끽하는 여유로운 휴식"],
        tips: ["돌고래를 더 잘 보기 위해 선글라스와 선크림을 꼭 준비하세요. 멀미가 걱정된다면 탑승 전 미리 상비약을 챙기는 것이 좋습니다."],
        hours: "월요일: 오전 8:25 ~ 오후 2:30; 화요일: 오전 8:25 ~ 오후 2:30",
        duration: "2~3시간",
        price: "투어별 상이",
        reservation: { required: true, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "9M92+H7V, Hågat, 96910 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://mkt.shopping.naver.com/link/68255b2c815d2663a4632fca", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=5845362531315295302", type: "guide", description: "지도에서 위치 보기" }]
    },
    "괌 남부투어": {
        photos: ["/images/guam/info/tourSpa/guam-southern-tour.jpg"],
        placeId: "ChIJJePMKQZ4H2cRVNcAFFnj_V0",
        placePhotos: [
            { photoReference: "AWCwydjPSIROmWUHDxzvnBJE7hra03aLA5LorHECsHnjPgZHTcKAzEUPxOm6mdqZUNc34cMRh_Z_awxREsKHEreMmeT9IjUF9hn1Op08eyIdObCHii3XDxP0B3qH2I7tKkMd4Z-00DIPgJ4j-9vaRIdyC3YTycFntBmpQ_fUM85FEFCVhF77p0YsQCMEPtOEYgDFVNO4FI5X2Y_CGEwWmT6HhSLHrjrG8jHHzT3jFMp9sWoUGn7DcFaEpADswa3yWqhVGQujNNfXd6k3ixiXbc-68TkvMoQrh0xg4r0GboRAaxtaTzksZUnGZrJ15YXD5GyLDZS-aZTiBSFEOpdUP0ebESzF_I8MlO3ID_7e6QMivippQKlvwEaMMUC93hgpBFPdtk8MAt2D9fi0MXkS-Q2BAJiUUv1PaSEuEVRMLY-UHnkxmftx", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111904705163811518124\">SIF SHAHBAZ</a>"] },
            { photoReference: "AWCwydgT1xAMscnRWJn1PWjgUtVC732Nu5YdOp0afqe1r3lzfsVjU5hWu5D3caT_GPuHtyLF8w7vU9Ai8GfiRnLn3V8j3kO1CbUDF_SHvKUOsRaRVJiyX9sqgX0k8mIAw2Jfcft83VdA1SKiiu8d0Gdfx2n5ehw1zObVROI8CH1u20HhuJYThTHRnpucQFlRL-QRQHkguaMbps-Aey75JKlepHNQI6QObirbovojbhF1cJ4Pu1M2CsPeNZk4pF6x7TPMB5Z7IsM0qPKf_zgHZtzBjo5tBuGQXK9eTDhdr_Tvuwttt48d9_yS4rtSP45nMWa87NnoGAiqhxpGtwWiicIMZbQa1fnNgvVxJQZRpHG0yIjcdDuSl3jER88iLdBfJfqmzbRD407_FerGJ0OPyYMsxfncHHY_SvcYqsf_purRhsqgBA1D", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111904705163811518124\">SIF SHAHBAZ</a>"] },
            { photoReference: "AWCwydjFEaokkrrbgMiuuRrXzPp6jbso7DYZ6WPMs7wRthZDYUzDReBfYs3Im-WtSbPbOBHHuz8yy9Ua-H_lbfPUsWPGz07Tl9Jrs9rzH03MxoGIZR_n2OAyUfqxObqNniVcqPxAjp4fM3kw-bMQ8Re2DX0h35HKl6Rn6IvgTJ8PWyCOW6C26q_AV0P_i_8j2KICB0wh_2nL6tEmq44w_4zP3_xBiq7Yc9cNiSM0Bfb3eS-QhTXFJidKMy0KykP8YF3CMKtq6J_yf4yePZQ6-vAV3wbU0p-eex2kLVQ6lNhf7QzI8LbkumMIz-AC8Er9RmfX9QxTTizLwjnc93Cu-tNtaPoHvBEwUGV2sz8LBBxlV54-vUzaCBRVgFPC8Z3jKmojroHhwQ-LARlvM2onx5ZkgwGK156vGTECJyLWUdrIbeVahTER", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111904705163811518124\">SIF SHAHBAZ</a>"] },
            { photoReference: "AWCwydjYQ8FeL6tYpCFKM4QNFEfIHq7A2z2ZzcC2yG3HO1Ycq-VhW_KT2N_rpcPYAV-GFjazOvaaBkaftu0ExtNyNN9Ks6090g5BowKFhzvJm8UMmh5_moU5ttKdfv424YzuEhQFBCcaQ2XM4dIW0gJxF7ATstufuJU5nWq9pYr4DCZ2spyLwM4klVs28rqCnVgZjJcYptvIJGwlzB4hhfF1ee6A2rgQqtBGCWLl3cQZzvzmG19gi-KwlnhtF42-oGzmErlAbvUhQEzn8bmMgrUuGrmsMJC5JsvPdzPM1PIF12K5ANe9KbN_28JOURp8QXhXywIokfm4VQaJb2QFqpzZyID9Q6SUq8IMHZ0ESXhuVoL0qkhCo2iQThJQMgVmr0e0wzqNE9R6_RznudrKebcUht3jSjqqgs-_faPdj-CAq7YmHbCk", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111904705163811518124\">SIF SHAHBAZ</a>"] },
            { photoReference: "AWCwydhQbWaw3c9qxcrIpF9HQ39eknachxM3UksLbz-oLZSyl0uYwO43ulkHwjTgEm6iPVPGsLeArVF49MKPJqjuvqVbZbQnjhXH3gLzgJFw5yNw4zpCfutBxA3sCtCYg1DSDQufEFleKrRAioSvuWQukWcShQTXeHR_ZeAhqAuAqwQ9Dz6opxvdAWBhIP1hlLugOKZi-i5ue3mSpDTnqRXpY3rHtYqUjSd2t_sa-U7hku_-LzouWuSTV9LqJUh9yfCcaNY1HRoXO_iOr9ihTAMA-LZEyhtZyUG_kGUs-lh09MpKkSuE-Vg_5BxUtmv3BSDIsQs-YsUykwJ8Tvi-2PSeZ9TeSCcxvpY2CDgEfucJ9rGg1OVin-EAB_sfuhZFBJcWPgP5iYGTfvvIynaRIzDAYk47A7XUc2w_BNpP8RFQO2DABOqr", width: 960, height: 537, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106101912025866249624\">Turtle Tours Guam - Optional Tours Agency</a>"] }
        ],
        summary: "괌 남부의 주요 명소를 효율적으로 둘러보는 테마별 옵션 투어 서비스",
        updatedAt: "2026-07-23",
        highlights: ["괌 남부의 아름다운 해변과 자연 경관 감상", "해중 전망대 등 놓치기 아쉬운 핵심 스팟 방문", "여행 스타일에 맞춘 다양한 테마별 투어 프로그램"],
        tips: ["인기 있는 투어 코스는 사전 예약이 필수이며, 남부 지역의 특성상 햇빛이 강하므로 선크림과 모자를 꼭 준비하세요."],
        hours: "월요일: 오전 6:00 ~ 오후 4:00; 화요일: 오전 6:00 ~ 오후 4:00",
        duration: "4~6시간",
        price: "투어별 상이",
        reservation: { required: true, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "674A S Marine Corps Dr, Apotgan, 96913 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "http://turtletoursguam.com/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=6772819386362287956", type: "guide", description: "지도에서 위치 보기" }]
    },
    "리티디안 비치": {
        photos: ["/images/guam/info/tourSpa/ritidian-beach.jpg"],
        placeId: "ChIJFx8jiA8qIGcRDzrJtVuB2a8",
        placePhotos: [
            { photoReference: "AWCwydgz3dq4jy1tuaJ8MUFqCC1bEj3Dsv6gXwiIvEwALSkxorjpagiP0FkBDrS1a89opYJ_aTWPSCJB61QyK7x5MYhNuGdgv-LEJjsAhIJy5Mm_h9jaFJVvLGEFfbLfpwGVWg4PajGAinbLC0_nZKfO_7Yu4CiyZtntSzemha1aXy5PxpHA8raIzficDQZHYDzC9MiX2pU-JqHJlmuXMc8CMvfiB1CiiQbUUpAOn0HP3-finx19GQtleJB1OYclfjJz_w5_ugSUpdc4jeGL1M_5a7949oApJpjfyxGpZibsRINKmy-hAXmZy-PC9Wo3IwXTXwX24A0-OSFrMJhjdz39JmCgK46m-HmUwzvuV6K08_M6qmdG9UDpaNNnyQxbYAcUj_NIO7aHiCyeIZiLnUh57la2BpatM-oSiFqCgSw3lZBMIC0N", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104036303349579625647\">Cindy K</a>"] },
            { photoReference: "AWCwydhDum29rt9x9mHu19E4YEPAncz_9jPCxSZOaWHxcuPk0jHvMqR8w132kh8R_63R3-vz4Uu_wahgCw-OoMCWIJSfrP1LpmoXAqJ8WH9QjNjl0SorQGX0pyIeLeU_8C7I-jZ7MkFiV922m8TK23rxocolR5Nsc46lE08cRFf9ABoREoMkhEvcvL8gVYuuaG1SXSGsCFInFUplXVWoJqWf1JlDc7b-YsN7KcMzFCOpApEVeUCcIKah_5o_STpxKmHPawT6WMod7RdoZ7dG_XbHqfHmUHCgv8uf3NBhIyDq1Dghb2HbJjglU-WnKw5QIp9j9jg7XeDK1UMcMCa0PjIEREGITtaBPgAa3hUOgyI9CeFMIiara_oOksicXvdckuU9fMUJKTa82UzTeFm0_MOuEz_WXhCTcFaMdg5VzRbHKyPE7jlY", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106276437080618757721\">woosub Lee</a>"] },
            { photoReference: "AWCwydgIINW6ngPQ3HV448tD4Wm65jixiiLSvEO3qXjJ9j7FxM6hijeQNwInCNZ6OaMw9HErpIFePy2QCS_0kMps2Kmvg_GHxOTh6_WZf8TqvRjkedo2zL-pLpOxnyjYcu8d1YtTICMirCOXidRpIH-d6EAWBnGd2hJgKPCOg3eb3pn1z1RI9roxufe8iNOY18lsWkr1xdgnNcrRclmfFAo7sxt50up9NiYdAYFwAS3kZjlmkD2DMSPVCcdCJv5OuT_VmAOIkHoCKdc0idBIiorKnWyWNZJCscrWkuXK8EeoT66XdR6X8QeP65bGO-mSgWWYwnsyfwW1k_W0kAav_AVFtb_wph_EEpD77Gun9GPfoKiH83WNB6F-0xRQ221vWHsXM1aZRFNFhl_VdcfCWxJmQhzCPf8EYzVXAEsxie0xe4c", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106935294658749857814\">Jason Ryu</a>"] },
            { photoReference: "AWCwydirqU6QtTn4grDdRrwYkONuYg_GzW-931US8zMsV3tcMisZ4Ga2LzgxkpzoWt3MXkkajngLWMS6XWiuUgXgwUMk-Y2SYOXVfL_5hgfoAgMTp8C0wyaSijyMRSmPXnr9QEzOOFoyMO7xiU1WGZpOMeTgdxmNskisu8t3r5gX81r3SB2Kc0ptTTJkc4WsfyBkm7O5aTT5XgjIdJ4-oNMJo2uCM-E9mmTLkDvPNkML5ajdVwqHKAlsBqVWB-3iK4QLjQZG7UWRqt4qXjQZpI-YrHtEdpSzSCc5G9xDtT59SwIYfMyrTZ-e23sxEr19vSHMJHk6-jgxdd1rifEECrrwYyIL2rybFicFV5HWOAmw9SiNl85H5IOab9TC4YQXsOM74avmhSA63M15pRkreGEsvBxUT-dokliiwMBOWB6bRxhS-Y5jGBD-Fba_-ihd5y93", width: 1848, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113427893938593544390\">김미경</a>"] },
            { photoReference: "AWCwydgAVB6r7SSw_JAp3jdJAAP0UZvFb99LOnpkX0JvxXPDVqaVXVH_Jw7N-VcIYf-OqeaeA-Dl78Ckp_G0_OKtLs7s2vQX6S1qJUu61nI4c7usrYo_kp3CiyYcAX6yCZI-Ltsn-X1GDQhvg9WTBLgLEEF7Q11FX64mvj4hoC17LAguDcNlG7lKG4ReSI3-bHHsa24HOUw64vH0m2zvv_BthkU3LTglywgIc_KgsD2rRDErKsM6w2QnrbSy_SV64ntHKjlgRQuCql4TlzT-B7vA1NNkRaRNz8_VyhmYPY8VX13nLnLuMzhyGSHZ6iCxJOMe0xtAhqQJLenkwOXfVIKGBR8rWjTOHgBXr8ndQsaL-iNUZ3dOx42PUq_KZx6yOGD2fJdk_6aX6aqwlJ59UgO0jozJlEnr2fSgfFK5At36ask4pQ1bnlCxwZ52R7-aN9-9", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106720207902064238473\">Eddy H.</a>"] }
        ],
        summary: "에메랄드빛 바다와 산호초가 매력적인 괌 북부의 숨겨진 보석, 리티디안 비치",
        updatedAt: "2026-07-23",
        highlights: ["투명도가 높은 에메랄드빛 바다에서의 스노클링", "아름다운 산호초와 다양한 열대어 관찰 가능", "사람의 손길이 닿지 않은 깨끗하고 평화로운 자연 경관"],
        tips: ["국립공원 구역이므로 쓰레기 배출 금지 및 환경 보호 필수", "편의시설이 부족하므로 간단한 간식과 식수를 미리 준비하세요"],
        hours: "방문 전 확인 권장",
        duration: "2~3시간",
        price: "무료 구역 중심",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "Ritidian Beach, Yigo, 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=12671301257475471887", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=12671301257475471887", type: "guide", description: "지도에서 위치 보기" }]
    },
    "괌 별빛투어": {
        photos: ["/images/guam/info/tourSpa/guam-stargazing-tour.jpg"],
        placeId: "ChIJsRTFN2B3H2cRaQlGLFJz9iU",
        placePhotos: [
            { photoReference: "AWCwydiKF-Obw-6Kb_W-wYPKPh56_hD2gSQwDVPe45_Dk1gWQyqyq4Biwm_noTrcovPNXo79WEhHLVQYcJ6zXSoREFcetZ2tf2Rb8XIFmgb-NHaR2fusDjXTpE1twOehlo8lXsozNg3AOyPTtM9L1bJCpNUhODznv7h12olIm6w-u-ObVUC2tBlHrZwRfLo42-PKY8ca501fKCvxCTkOzouOo2MMuibnOvbekRexbWbQJXlqt34-LdmDRB1HYSR3lJgitwgWiBGAz-n19ZABNcAu2yGMwVI42wanE4OZoJ0pORIH69LpPn6OP34iCI_d22950ZCv92Zzzxrq5ltytE0QPqxod7FKQ-jdhrNAIqKY8lOwPR4irz3UyU9dJHhqxs84aOqCcbxbMhvYZlUqEfp8L6D1FZzjCd-qoJUjLITVLhmEl9jd", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106879882227226550688\">kuni</a>"] },
            { photoReference: "AWCwydiZSoRQOTz_qIr1YJOx2JAofcxANaKM4Y8ogGzcV9rkhzzzT_NZLOuXbBgp99v7yfKSxPHJj1aANSprrXIAAx7yHQClFg7nBoIOccjVfA19swOOiNb8OhoFrI--WWLwYnnpnml258tJctdst2tOPCrwXHQz3HuRDukVpDnEo4DvnlZBlC-QbURRKHNugyI_w8ZxREHXaV4DQgxNLV5E1StQ4lRHLRwS6t_GLnbECsiOL0WcSyHjhAiCRKNNeqUs92-SBTjOhAIB46LMQ7VjaP6iHskf99C1YcixY7W6rU-bSKtxXADMXw7_63t2aQJtoKvXchz2UCV6-TQW7mHtZmKaFP4zG2-TsH09sIpBRj6TzsQEX4flwWi0LLrSoCAAl96CCP9f6WWIZsE9N_9TQuaL-8XRg-XHVSo5HJJS1-ANJDUf", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104133623532550351072\">Mailie Rechirei</a>"] },
            { photoReference: "AWCwydi2hOI_oK5SuCo5oscibc30LIyK2BSxcIQvZ_Ll28xnmsQT_0c3hkJtPPS1Mzcc8hYTF6pzch6sB4PzWro0lc8gKnnSQAXcA9HPVWQBPj2g1nnCsuYrS8LFbG1T_97QBhCeZBsiIexwHHULo6_O2vsURpIWYN1udluEO6VoALIPw1J1_IhEv5yQaCr-wQL5ohLVp8FOzthrAT_eXJkTWO2E5s4fQKPoji8oTBLRwSJvKsxpAfdlyYStdfQVlzDfZHYfRVFGBD56Jw-Yx02pBG8QlytQw3lwx6hgwkV9aaXpqncX-Zfv0yTWjZu-EQWsLf3q-6QCmzTyYHde1ajZnWOFs3Lr_kXcc1Rh03ng3ZRAAbZo4QGNziPc1ga0jXSepOMkMvVUWr_YvdsnoW2QXKQQE9w8-GFQyDjKCV9wKQDm0dCbXwlSI4sDub1M1L1G", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106396239974836758953\">Zach Pickard</a>"] },
            { photoReference: "AWCwydjZLJG39IjtCB7K4TFG8AibldLjJVZqtZXRh1S0mXEk11FVxb83GTqV5HRj6Ui3UK3Roi6OwZTYUPvNEmOYSLo2o-2kFLeHgwI1VQNd_DElzxPQ45_HClFGWq20mWQC1-dGkaOcyeJSFu6s7_A9DxtWOpdAmMHCGaBNbYT8iE-EqwHWnDODIAiIrv_01xQP_Fl9R-er69eyPIeJosdsAq2gfr_xlOen2_D_rglWRaBPLEtiL-ToU8WbiUPkoErX6YW5PuiKJxOCQIGhlC9NwmhYnyd1nH3p8VmL-fCwxX3Uj8Paab1wc0f2dfJeH8aqTH8y8osDfX-ChO_OZi0zRf3DDepR0raMv4qUdfiR5flfduhpaYjN4d5iNGtHKE4fSsc8NBCSmuK5UvLlEAEufAgpvJonWGuYz_6O96vRrbw", width: 2048, height: 1530, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104639814233509739822\">Mako</a>"] },
            { photoReference: "AWCwydg4y6YuxiM2sS6vdJMdnfe7qosmxv4e_9gINbEXFdU_Wwbo_eVdYIAlvkbmqDPndwxE4ztDWpBOmu0kfFMu7mhgKM4XFlECVU3b7VuWUDXDhQ_hw_h0bmDAthLAOZGTVCtr3PzsulaWCF6ysUvk6s4lI-DUrzPVt55ntjIdzntiCuDiNzR2dD6uiUPlT5ceoqUG3FC8XsKbcJiOcY3yuLxF3eInYWYR0z2qrBrqYMf1nf36wfSZ_2PdIjD1bO8sWu45GiNzg55q1_KbE8CHXDhtxkjuDfED13s-QnIFFxdqosIWYj1SMjBWmKpuc8aUrXiJCjt8IQmBCT4WGHNvEC4fsm-5NGPADkx-lQOHjbEZcbmetm_383TGiKeifODCpMJwcGyvkXejDL5DHtCTkkSEeIwLItxZNI0wMzVJWWy1mXY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117915125493076016903\">d</a>"] }
        ],
        summary: "괌 남부의 아름다운 밤하늘과 바다 전망을 한눈에 담을 수 있는 야간 명소",
        updatedAt: "2026-07-23",
        highlights: ["쏟아지는 별빛 아래 즐기는 로맨틱한 밤하늘 감상", "잔잔한 아산 만의 파도와 어우러진 환상적인 야경", "인생 사진을 남길 수 있는 최고의 별빛 촬영 스팟"],
        tips: ["밤에는 기온이 떨어질 수 있으니 가벼운 외투를 준비하세요.", "별빛을 선명하게 담고 싶다면 삼각대를 지참하는 것을 추천합니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~2시간",
        price: "투어별 상이",
        reservation: { required: true, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "FP68+35G, 6, Maina, 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://www.nps.gov/wapa/planyourvisit/asan-bay-overlook.htm", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=2735500620441454953", type: "guide", description: "지도에서 위치 보기" }]
    },
    "이파오 비치": {
        photos: ["/images/guam/info/tourSpa/ypao-beach.jpg"],
        placeId: "ChIJhe0UeJyCH2cR1s02MnnxSlU",
        placePhotos: [
            { photoReference: "AWCwydhRvrUI0-K65MPGpEhfcpQu1vNrbf09b1zYcPakB7PIjz2hqqa7clkf76ZtspTKZVlNx9X-SFRITt5XsFxSHb_oLFK9s9kS_aKiysXJEKlGrCRkAIdFgJnNc3g0_-ye8eOXOv1DXv-j9tOkTorbhOmHZIHg6yyOCTKTcNpkLdm0ICKTLusbE0xw6KOewGn3dvxB-X5u5fGz9Ljoz4vw4NtwM160rJmadI2U6Bith9XXxyYztX-1-STSK3apTktZA1G0HZOSUMFDzgnU54T5zmiR6b1g4RRjfPEg0v2Z7d2QR0TDREnFY83dFY2Lw-SvRNyXds5DH6B7D9L4hVXDHGW3HNAhxitrYkYfq7fU5el3pHQAwqvvVjYhPm6II36osdbGGBz8VPCKjGb1AuoeIcYYqm2--OkRrQkxkKesVLYp5JFz", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117077098657953941846\">佐藤日出雄</a>"] },
            { photoReference: "AWCwydhuEnDu6q7VpQunLiU-lcjmHpW3dUTRsTPhREF8aUqP_9soG9F2BUCHyJrkMlI4yuVsdvKVhcKURvFWByF9wsve4wT8EJQusfp1Y-AeHBF1p7nEvJ81dB46ULpD0-ygLnz9QF5-deDSZNmWwnusx39FiI0RJ1Zw0hyFhkNIc3X--5c8uS7TjAxPeb_zsX8rVme_v2bDzJWHc43JhzA74J3CDqcNR8fBvmqYqkA27ASZgNwtczNHk-en9hn9tFLMQHRIlPF470PW1Miqo3qWgQ743K_nZJ5VyOcWdghxrlP6EL4FOo7EmOD5eI8SJ8xEMlbtnqO_gXK-6bYBYJ0BaiLHoPJGoSG9PLVW5FhD83Z4R4gEd_Is-y5L0GD7aqbYS4mkl5yuZH8flu8GxJBljt8ZCabXwSbz-eYls_QQGX2WLQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117464983631570678288\">sungpil Yoon</a>"] },
            { photoReference: "AWCwydgKtarhiFCGU4dsQFEWu-4pX_9QMqb3g0tlp6b8mKKYSwecXffadK6X_O-5AxGCA4CWBgPIGYF0i9qrVMYFiydAsGepYlUr56ntpzEpC4NwsHUBhMwJIP_wIlbBZAgq6xzNB6CHnge_qIWrzLme8vN9R3oBmMthAqRJ_mk7KBz5Okb_ui8ByQ8ibe1rSuViSxUAGLEg7hpVRw4Mymo8enG1c_yjQ9BozIGGUthcjoegUbsww2U2WPga5MI8Fh80c0YqMyBtDcfwaNsm-pfS36a8fN2sdVbbpltROfaybXj-y8dD1vNzLOciKUWwq8UnxxHtPvmOo6XB5SXRLjyk9L1wYH_BBJ0q0SjbleBQzhFBFSXkya75tGvMTjTHBsDZ-AzT5ViST5tFBHaL65-GMjnL9AFNo7137wRL5F9ePKuW7_jY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100509522216926399193\">FUKU</a>"] },
            { photoReference: "AWCwydjgDtZe6asfup9POj6O2_BX95a0om6WtUME-5OmguxxVwi9eL-e7a62oZ5j07F1ipc8Rj209OLLIl3XKKnx1YP91Ly0YV1Zb0SX4_7M8usXYQrzoJ-eA1KgJp7GqT33LWGP6v0RMAIlBz5BA59ipi8MfPeXcpLgzYyoA169SxjOcjENTkMn16a0vd26jITB-bfpGD99YPlcXLxWPufa0qcijLKFjAR_C2GuKS41clxXY3Cmgv6l6-_SP7dNP_WQtdox1D1dxRCGzTfSMSta-pE-ajaOYiQJE12kZGl3px9ucPqrBDABM9r5bnh8r-3VYueNJzIb4lOLJNFtKEGKeB08jIGUkpJP64HhgEZTJz6RzWRj7Sa8PLQx1jhfB5AK2rFC5kSb2bFKjr8xcxf7b7zlX9pvvxxMVzFcwlLVvxypPxww", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106441946269955654744\">H Tanaka</a>"] },
            { photoReference: "AWCwydiG8ForDJUK0mXmBPbGIXZfsHU-83qRrINbl0-m32NCtYj7Sb5n9gC30TiaVMlnyUHpNGv8zb6P3SnL3tSpbh5ZHWgyJJKSuub7w0gS4W2r4cgZa5WCDqFEbKrYaAyW_NHxVxj8HFQeBtRqYv_VaE4KndGyzFTeDht9wSV2gzeNBTVqItQndRpyLRhoL9FJfwBvsLI0LF1F3bs51m3WLUnShUdR4AgqKc8jSFvNUZgZ_wANMNE2xt6hNPVJrs44z1EBriaBqE4qunbMPaqNXTaanMY-QcGY8NemcQ40s7a-5r68xRBv5MGdABfoEJyXqdLjT-qwUZo7E8puxQxK_cg1HPK09Fy4Ffop5akU5QidDMUmoaN_3kRcNC_I0poULyh6b1hqYhzzgDmuOx0IyRirosybisVjULO9tmYI3_JgoSKNjg-yP_svqHyvFKhR", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108679323039239684352\">nn mmm</a>"] }
        ],
        summary: "알록달록한 물고기와 산호초를 가까이서 관찰할 수 있는 괌 투몬 지역의 대표적인 스노클링 포인트입니다.",
        updatedAt: "2026-07-23",
        highlights: ["다채로운 열대어와 산호초를 볼 수 있는 스노클링 성지", "파도가 잔잔하여 아이들과 함께 즐기기 좋은 안전한 해변", "투몬 시내와 인접해 접근성이 뛰어난 위치"],
        tips: ["물고기가 많은 구역을 찾으려면 산호초 근처를 천천히 유영하세요.", "스노클링 장비는 현지에서 대여하거나 미리 준비해 오시는 것을 추천합니다."],
        hours: "월요일: 오전 7:00 ~ 오후 6:00; 화요일: 오전 7:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "무료 구역 중심",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "429 Pale San Vitores Rd, Tumon, 96913 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=6145990144336252374", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=6145990144336252374", type: "guide", description: "지도에서 위치 보기" }]
    }
};

export default info;
