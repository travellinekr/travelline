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
    },
    "괌 프라이빗 보트 트립스": {
        photos: [],
        placeId: "ChIJJ7YT-FENH2cR96dJdcsPfFM",
        placePhotos: [
            { photoReference: "AWCwydhnGKTb3kwOjER33PXz6-Q6tC5x1fR3SCkA2-IWQWAq6nIqQj7U4qAmv-99-Q2Wm-Fghvdi2D50k_rEjIlvc8eZkh94j-RO3hwOjmCMg6nyWXatQgrgkOms3rnDz0g8gy9buH8TzBJFCqaHscRaidvb4Nv8yOFaYvPd6ndssGh3C9roK7EBssAYDWdm34Kv6x5iZGFpt7K2rCEJpwTmr_fcFDJT3o2gbpdxJ2uBuiNqxZshMdNFtSGzUjsVLkaM9iRMAH8HijI_iSGn1-vFxEsfW0sg6K2H44SLLZhDxqV6uQgYrk56X79F7RsLwmYLAaYTdPgf_iyDeA6gyxMFrKIofbdDvVk-YqiVej75yQS81BVn5lvZA0_UAd0BBCKfEQZQASTDaz-G8JIEaofkmWdb23g-5NCMqUq4iSKq9dX1wszK", width: 876, height: 426, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109037824200929140925\">Guam Private Boat Trips LLC</a>"] },
            { photoReference: "AWCwydjXQLEH989QlSLjTcfYe0IMduq3h0DKpiiEiKilNJSKCA6yMfGfqsZq3_F9bEdGWOxePNt0trgStCyPIW9UfPAKHXmR4A_fO8eW_Sm7Rn5u9lg8OOVbiw4LzBDH42qwCF8jAFVE3HN9rvVo_G1rbUY5s8KmCtukdCrZijzcjU8EwbYw844-Tj_rEqdV2DaLKrbfkkxhUtOVG9apD3X4SIx79Vu-xqRpYL0Eb32O6z_qxMOp4gmnJTlhWGohf7jV5qPO5YpCqTk0xuI4OrdhCXrwbHJolTx_jrhRSr1Tt7KetMy37nHfzHTxwRRCHqsFvZzDX_pRUcv5Cihx7uFhpiQsDBryqjzhlkPLd4nRrYVDoXL26-afFUJVBkD8h7VDoU6XwqeD_UMxtbhpMMUPfT1DUjWML19PI30S6w0m_UiPNw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115149691615309380689\">Lee 이Yu-Seon 유선</a>"] },
            { photoReference: "AWCwydgNIvlmACr7j-rqjEMXAinTUjVuPXGOkwW4CAhi11Qj3wGnMPE38kW4NtRVUkq0dnh2sB6iH9TRHTeBNmbLCPFRF6qlDD59_W1o4oX-py3ebXM3nmV-XzXMkUTWKWmKcTzguUwDWRbcCDJ0i26en6X9N2ddZr2JaSIXnixeXcE4QWljLb7T4-iVpawHJvQtXQYzMolD-zAcXbIcbAT0HggzbxgSnEHWRYme39G5AMzNjr-8ZUP3-H5kiLlfYdQ4upNTDn6LpN4BPAneRtHYcC2PVxLw2zUCUZuERw8sDgpMRDMorES2sBj25yNacRuTefI90fgaRaV4ulhILCpf3QsFPJyANoMGdydfon84oXHIqlR9EIgsHKtJHUpZ7x20jKaoZH-EUSArXSTgn_IuBPDRYS5oaZtlsVsy4AYJQZ5Nxig8_ZPQOwmfsUFKkQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117627475197839738107\">Courtney Curran</a>"] },
            { photoReference: "AWCwydiv_EQNSF7fWyJj-sJ0aWJ1c44elr35Za7dKRCKMS0jKwlnTTtIFUKFwckoDTZM42VDEE1NkGpFWuyA_E2V-8lYhmD7HCObT2C5A2nWxIPoOJq0mqAang--_gjsxCahXWl2UB5QGcczZGYCUrncpf_ZEBcFMZkf6Sq5vwgO2v48X90XEwX47rTbDzYHofBNvaa9o7Tqo5VMjT3rBtrKkeV8syARCqWt_H61FuE0H8ux6nu9JftI8pjhCQlX4LniPWDNCWN2bbvDzlGhOo9PZC7KGXCirAAqw1lT7z33wYysy2jcT7GqMbvINplVjzqM8lhb5QwRVmh5-rJRrTMl4p3P3gUAhvMpHwGqDqRy-GRMPiLfETQ_A-SJKWzhkylIcyAhanCjWlSHtitLDkbAhAOMbuUV98xSDazms0HFu8bbj7k", width: 1080, height: 1616, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105503972698541972118\">Emer Foley</a>"] },
            { photoReference: "AWCwydgL0NBbQqbVfxdnLHhdsyZsJSjyLPSiJEnaa2iKI2Dr-0fb5-_T_M1CZb9YaKx4nHmvVbX2ql2Yb7uZ_sKqX26VBoXGy_AM52CbRrESCKQDQqNfOs3zShAmzkU5qQcvuLQwkPqxNzhJygiyLkHMQg2cFvwU1GObRK7FUAp5l2eCSTIDRyGoDGmAkACa-4Wec1B4uwC368dFB_6nbYuyZS43Oj0rauYcdwE6HHSJv8sgttjJcMbxyZAsw1MC4k2NR9RJtJXnPQBxHBSiTZRZm9NcGuZkf4ekkldaZXcQzZUW1hW8c2bcbOd9hHOSth2ct5j0V2OJn5gfKRXGr9BoInd3QJki8nkZfvVnsDEH878wl8t2Y4hORvVU0tEkS-IuqWHUFu_m5880iHJJpuH3wT2bgTIRReumDPYdkh8d-kSKVQ", width: 900, height: 675, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118038966680478312564\">Travis</a>"] }
        ],
        summary: "맑은 바다와 부드러운 모래사장을 즐길 수 있는 모험",
        updatedAt: "2026-08-16",
        highlights: ["아름다운 드라이브 코스", "맑고 투명한 바다", "친절하고 전문적인 가이드"],
        tips: ["선장 겸 가이드의 안내를 따라가세요"],
        hours: "월요일: 오전 8:00 ~ 오후 7:00; 화요일: 오전 8:00 ~ 오후 7:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "366 West Chalan Canton Tasi, Malesso', 96916 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://guamprivateboattrips.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6015700568780679159", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Guam+Private+Boat+Trips+LLC+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "괌 어드벤처스 오프로드 랜치": {
        photos: [],
        placeId: "ChIJe3FgI72EH2cRLrNHULZVJlw",
        placePhotos: [
            { photoReference: "AWCwydihflYRvsSyZX1A-ds8bwirBRDPgT-_75m6dQCSd258ezTQQgoSEXPhoH4Xm4TDji4e50qKQeO83FiRPIRMdMaoSe-Xvv3Dx9r0UXwqMuww0DWSoWg80Yv1nfZ8o-OcFHB9mLk_vx1ycmBsV1TMjCa36uDMPMQ4R3K-uXL4iLm3jz3xDILGshcBl94eIGpOHzFEKivekZwlk0VcBOtK1qwISnXrStoh9_BJ82ezixZLBXsF7PvmJzAvtzUk5BHAPnjuHInsdB3ifqpzDfnyRCi_Lm1D0uh9ihHY8tW5nLvG5Vs0eUFtxVB9i-jnWA2TyasMOV5WhYDGxf067ha6O8E5rH3h_BCZP_gsDx__2nY99AAJqOiGrsk8r_VkYNBi_Qju68jUq1nvmSU2jm1P89BI1MgJfqeDM9Eu_hmd7umqlK3SuvRYa8SI4qPezJtv", width: 1024, height: 768, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109594309944861651796\">Guam Adventures Off Road &quot;Ranch&quot; at LeoPalace</a>"] },
            { photoReference: "AWCwydiSINTnJ2b4YOfEUPt_1m64w_BW0RQep8DaDszsrDba4Snb3-z7TYev4Ta662hqaMFeA6wYCFGvKUIXS650oe98DdcMt7iHUSNaCvnNzrv8U0JFKPcGxzZDO3vwiYpHiqEeCsxoJ9CaboPfrFUNRq3ot-9D0zwPyOHhn4aBV8BIHPK16sJ9VABGQYmoXxQGyVoLLk-ObDc78cNfjxm118mmwonMWN3fgdRzQ6mHClNg6f--MS5WyoGpR6oOlD73WdeTEOD22h_U0KMeitzQI5ysF787E7ZO79GWyLpzS8ouRgZlF8SBxnkZxP06OlucxfZegY6pQW5W3I9GU8IlsBrbK8kn7Ui0H_6E2MnmEk9-MUoPFPdLahnULqNByB53ZYdyf7-vgLfTdZAeuOQTY7gLxMPoprgJ73ca2xKIVTKtFKomYuvn1NbmCtFj9qSn", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109594309944861651796\">Guam Adventures Off Road &quot;Ranch&quot; at LeoPalace</a>"] },
            { photoReference: "AWCwydgNE2da9RbraSX8aAFYE1oN8GOfk8d89dQuQNty7FC8imHzhBBbj8Xb5OV6OsXsg6XZ21YGqF2I2GqMEBxRVw_ESrTeEKkJEkjP3NEoVKPiEfRIAmF7BMIkoRn5oKK9Z0OqR6-SZdJkKr2zdpKpiNGKDJ9DPLwjywEgzIDxu0MyUKmdz2LGOqeSwuqkYr_P8mSHKff6tlmz659pG5ZkfJtXtCJFQj1KA7VtAGmtY9b8lOov-BsxDaHjT2_CfHySLOWqwRtvgqgoG-B9UtKFKCi7HSnfuEhOiSB8ZM6jqPqsBM3okPnIX0fP_MEYf1Ypqc6dawqN5zPjD7O0h-lyFGxuBNsWnEh9jXMVkN63mzaftWwrtN2t7ESXmANo5ozXR6ZRhXvYUDxB0jrVYC6Uhr_NRh3Y-fVqtZgTwz3tHGL6PMr-hN4YOLepITw6w7qG", width: 1024, height: 768, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109594309944861651796\">Guam Adventures Off Road &quot;Ranch&quot; at LeoPalace</a>"] },
            { photoReference: "AWCwydjkVhbEmlu0FhO9ANyLCmbQVMczEeHVp15sWQj3wE_D5RiawjzSzql2VXbqdfH6_aCZPjOi1PsPMAMV3rJJYqKym5QHCcS_IqXQ8MhO3_KPsaxRzqRebedazTPeyHnBIn-0bAtFEjxjn1B24SMsb5v5zHJLBKSVn5FR-S-6OtTz0_CPIJEPy8kdwb6SJMBkhrpPoVU1DqCgWnKMbi7lv6nFbg1vq8S0-mZcfoS1Qic1_Z-wnSPQjxExmgUoYatGW2RhzRlrZhubXMNDI9ylI12fSd2ifB7QpLpdklvgRbYPFIxanB9U8bCVT334KQ125DRyFhO-c315o1Usu8x9od_Sqc5UtbrARZfs_oCLxZPjusqIJ3TqbKHupzwEkiAc1e_7jOyOMSYm--ehWJExwrTvpSWr177rLxNvCJaG0ZUeA-_XdqmcNR89NfNQ6w", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101049536093683317556\">石毛菊江</a>"] },
            { photoReference: "AWCwydjiUEMy-B_Qcm_q0ZO1Y1DDcNtZ-KNWgDNuJkKSHu7FXP1J4bnqqUWSSShJ3sB6xonPfHXBKv8BU7ikKNRKvkMGudKxeob6fWVQwdxWWv0vYshj8ZFzW0n8z5KDn5c0boXsuBO17XX2NTMv1-jqflyGk_Y7NZo105-pg3BgolZmwAL4uNqpCKUNkFv5QqCGdKcWBNNBniIhOwK9RBA74jb45QVds1K5VQeV4LJfjZOTPXAZBUGQRdRgdVh3UJN2X7FWaY3CCEKx6kfRu7RTwsKajRH01CyEH2gK2lWOyEMsT9GrtcVDrSSADAqgFH7VwwqH0EC29q4WW6Sv5EgyVgnqnkwYyHAOTr8Oc89slFirHR7kFjk8CKO4IIiROGzev-cFfFbo9N9gPUzLsTD0CNF-he74RHJa5CO0pQnRrPQTzafpPKQDeGhe17-wCQSh", width: 946, height: 830, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109594309944861651796\">Guam Adventures Off Road &quot;Ranch&quot; at LeoPalace</a>"] }
        ],
        summary: "가이드와 함께하는 잊지 못할 자연 탐험",
        updatedAt: "2026-08-16",
        highlights: ["친절한 가이드", "멋진 폭포 전망"],
        tips: ["예약 시 비디오 및 사진 촬영 서비스 확인"],
        hours: "월요일: 오전 8:00 ~ 오후 4:30; 화요일: 오전 8:00 ~ 오후 4:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "221 Lake View Drive, Yona, 96915 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://guamadventures.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6640088942123660078", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B4%8C+%EC%96%B4%EB%93%9C%EB%B2%A4%EC%B2%98%EC%8A%A4+%EC%98%A4%ED%94%84%EB%A1%9C%EB%93%9C+%EB%9E%9C%EC%B9%98+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "어드벤쳐 리버 크루즈": {
        photos: [],
        placeId: "ChIJ2fiYExN1H2cR5f6GDmLeIO4",
        placePhotos: [
            { photoReference: "AWCwydgxaDM6iJvHia5uYNUxEBXjIBEZY1QBXQ9RXt75sonv83S4turM-TePCLFPMr1S7NCxgr72D28hAZ4_c6V8VVgoxSQGImm7KOI4f3HDaUmmIdXE20z2AQ_-7nzRW-9K_0-YlXWcekeja8E7Cp0NdcZ8NYKC12NiZNHH_rf1y8Lqob4v6v11lvMv62RGe7s1AKvY597YRMafVYS8bW6ONGPTfh7qCq5kA3F1NEVJ4YtXGGSquUkvG0oS8cnSzwwhwfLGx4YgA5OyDM2xhUhshJW7mPipxy-4iv-E1EXgC6R_3HsYBoPmcPqBPa-_bhwko2omgpdNj_GUA40_xk708xOLM5niCpzKt2_gI2El2mD2mCDxFKAjqxTiXZ26Os9UX-hBYvM8DfX39rdW15V1ys34XR8_bbBjJDB8Hlx7llf5Hl9lhi4tgOhFFtB6KPBu", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118402876140126291211\">さとーの散策手帖 ぶらり湘南・神奈川</a>"] },
            { photoReference: "AWCwydgi_J9qhEzJEtU7r_G6kFOLFVjKTiW48Uw5UHWgjpCzAgsdJSDwe-a-lvF2LQIcwE-2PaL7_zOB2nvkSzzdHiaIS61TPOnd8W6GZQduOohhqIG0y11SdVcv3tv7EaUNxeMRzxSZ1WyECn-oUZRnQbnUFpWAe4vAWFx3RhQI4GUW_JOvJQn0JglvVXh5O1C8heH58nk_0uSnQVtcrky6vlkAA86qlglCapdKiIiIOClY56zISj6APWjQS_NqSFCjaN99zizUqVSjUqnLGo_ETdmusvqc-ZrGw5OUllCRIMAHS5uDqpk9I7nDf0UUTEdC47I7Zl3XGHLfNxdfAB7LepkAkiCF2SXQjqp0XX2pGErXVFOIxX6IJZM4TsGWHzBqCzVgCDcHb92NLpVXsJE4y6U-XPdAwuzGY8E3AxVShLZs5w", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107656192637341851424\">Cheerio</a>"] },
            { photoReference: "AWCwydh0BX2z-bdvKUi2MGOnXxFjtQ9nl9DI_2pgPqRwgcVWF2oSRLninkuiYmZF5ngNWBxblIq2UtZPFyxadb-QBf13Z4k-2nKm7EnwjhnueyKmSYTPs8MwROAWR49tyjhBQ8TInvTSFsJJSDPAPP678VpgtJHRuZglJphzr6qG9b8BBiQBnpPZnzBwhP9zJk-5iei_NYljhHawDuniMQxyjsJbaCfKkfSDYJG7zZQ3gdG-ZBOu1Oocs9wm02Ph1bCV7g3ZMBPptbtdxxhKpIW8OTrPYp2O60KaineLrk6aOm4SL9S2ljGFf62R1eC9G4X2FVG7ta4mZgEiAkE83MSWcS-lUKm601a21qrPfZs5cOf1-seMlHeFAJpEIw2H27lHJaa0whijSxrfHrEykBzAIxZ0jM0KHgOUFUutt7s59hv0-olIfq5ZmeKE4nn9I9BX", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118402876140126291211\">さとーの散策手帖 ぶらり湘南・神奈川</a>"] },
            { photoReference: "AWCwydhJEbeKQ3nBCFUYwiw9e7UABgOPdqvX0Jlnn6Bl1Jne0_MlgC4flq773l2HwhIGWf-gStJkBM5O-AbIQb_j1omj2LW0eOBdMB9gOA0pMHIAcLs5J8eCO47zkif5nfKovLIcwwdegDCSC-nsbZFyeXfqpsyYU1mi9xUEFMjYzg2nfd3Efr2KzHNUNSn-TAil37yJ-nIZqgfUSVSsfRBVKrEMe4kOpm0h7VEEHREONWXNx9XzR1Uc8-Kgvx1LePZmeLm3IdeWXQMH1RBSCeaHcvrUis3eDB41XyEtZdDzntV8uy-tJCipt2Y-MWbptyugz_2yoO2i8t5xL9rFeQO1kCTQGbYu11-PItg2PIR2ATzoiRQpPBiFA7HsV8Mc-qkmC42LK0me5Vh-6mcXwqFfmBMT525fkQx-wqHo7KNRW_eeocJJ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110068373848958648895\">Mc Yong</a>"] },
            { photoReference: "AWCwydhAIhlejn8ZBSfrJIccuNvZAMxlmWlpHpzTNqu4CMhApQcyTI1BcJBxFoPp3Z3cfkUTPjSzp16MQvmc5L7Ytxnfjpab76rMd-mxNPnGagnYXKiwvwzkFpAm8QKKX-lFDftvqkfqIJEOjS863hnwJiZy7q20TW8rV7CVmHgMJblgYorO1Q_Hk4flI0eCXSelXKaVU264KxjSAUv-K7SKRUKaYa1GLFONyPSTffpxKd4o_NNAtdnxuUH4Y9BshKbxtHOgzT8Mk1HXzc5Jq-xjZi-KziAdLOXXpdAsjNmflbKCpsgEm2LqkR8nL7xA-sZWGla9qigEva0MAZd1pJqyFJ02Tkedd4IysFiitGRc7hmlmu3np-TTJdQRJ1t1swb1Q0JJabgns2wVeM-WTWgSB1YaDYwCq13NUVU1KgD2EuHDmTn9RtvbPBWuSbi_0Q", width: 2701, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102117800560865959440\">지재경</a>"] }
        ],
        summary: "가이드와 함께하는 즐거운 정글 보트 투어",
        updatedAt: "2026-08-16",
        highlights: ["친절한 가이드", "맛있는 음식"],
        tips: ["출발 전 화장실을 미리 다녀오세요"],
        hours: "월요일: 오전 8:00 ~ 오후 4:30; 화요일: 오전 8:00 ~ 오후 4:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "8QQ6+VHR, 4, Talo'fo'fo, 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17158959093013479141", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%96%B4%EB%93%9C%EB%B2%A4%EC%B3%90+%EB%A6%AC%EB%B2%84+%ED%81%AC%EB%A3%A8%EC%A6%88+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "괌 오션 브리즈 어드벤처": {
        photos: [],
        placeId: "ChIJ30Gh-PODH2cRVO29E0rNlhw",
        placePhotos: [
            { photoReference: "AWCwydjpbKljCWRDz6uEghRYGeWbPofoHsks9CAiZOamyE2FGqmP4fT8vPyXMYk3fPh1UYqHi3fsZo0a-f-ngrlFcjgnEQ6G0s24Dgkllhm3jisiP-_Ht02Gvy_K-StA9ALZCxGrb6-8VX9uV1wWGwFLssFnfCbQVp0qB01hUP8DN5fKtV1e2lspOW-Nak9cwCs1HOCAzwVYh7jyGaS0lVkodsW6OJJtoyO3vH5cMJk_A8ct0qNt-lK2CNypPslYlCbLFzUOU6YRugM21UeHTG-O5EBv-SAPkINUSyxkl88PtbR5TAHnAsjZtoaa1pcyqALOop7OFbxIfrCrPZGL5fNvlrdDIIZAfa3KrWimo_pIqTri5UhjphwgQgGhLPy5NEJjXer-IOsOcteM5eJmR4hizKNPIokJNuqWwhp33_EZi1-krggW", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102572625325682507031\">Guam Ocean Breeze Adventure</a>"] },
            { photoReference: "AWCwydj8z2O6RkbCVdbGm8I96DcR53yh2646HelSJi16ttJu8XKo3WXWeQiX6oweoUHnDIlMt_B-F1YcHUsfCzaBN5fjnrgOJfDqwdOSmTc0RPZc8xbFApIfcNuDLVoRzd5JELbKkv1l89VVLexX4gIfovezf6JkdwtTTFRdFloIiyohhH5abf8iYQvvqboFTc675TaajgtlSWb_4SE2B7JMuMy-HhHtZDbIcv7UMS1k7ub5G5iCbWwcRPf5-gB0g_EBuXv_uujuQhEx0-BHxYC7hPxVNTFhvUtkbf7TiKWqsqgKIomBnSAu3XccEagqFHGSa1-Pjq9ezKXmuafV9aPcg9NfSuzubgnefojtynCOurveq63d03fblVnyPXV8K3ieFzsVzV7LNuYjIcTsnpCQjn_sRq4yUBwpmFqzIsdJB6PRBv9j", width: 3000, height: 3371, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116622769590795733676\">7 3</a>"] },
            { photoReference: "AWCwydjGtkTwjVTU4kE52FYT3h7WapZS_exuetGkrNnr_TN-wVxtBAsMxQkUfd5cay798ut7hU4JCBRgYd7yo3ACy2GErsN3UNLPU8sQc0qitU1ws_jwgz8_jN7I9q6u-HkTOVEWLWhaMgUtswyssLvzVShRbKJkFTAucKP--cgpkEuFMu5uNJX0szLIc1JNLZHGK3u4Ah5wjim1wBxGIHjL39Cr8hYK69ZhOw066NZGk4cbL4-hWn3rzWsiDpxAXmEUQ__coYocmxX6wGpSfjElhg2o6xdNIQpnhBtgPHnyZQzrfElW97BfHD87L3C3-eXu9CZqGFvPTtJm0HwZeNUQyVvhGbU5vNg9lnpc8V_XrC0s_sWPc6-2kzZ-2_QeMekU_RCjv3B3k6mOiY1TL7DtmkLWrmZcVsswY_n4NgWUGCApVBwJTZBufrbgPb4EtU4u", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113977381983943847961\">Ari</a>"] },
            { photoReference: "AWCwydiF-x_pmj-0Ks-vwm8ADxWmrUgNvghEDBDHtgsow36r9s_kMYdY4l72neQQfaOwkBMQt4527wkUv7c8ITinmTal91DJ2E34T1qmGv_DM2VjjH_-GDRDHr1DiYK8dzVDkswjanG-RppumALkLc8oL5cFlqD2FM4MEAYa1E1X7a89GEB5rvnEoC8c1vDOk4GMgWEhFjhb5RzmVGB4q1kDQ3BvCncBeCeZjeqR7Z8BPRlVSpfMeaUYrOizDjVo0DMAWQLEMr-KdIMN5i7V5v8QSBcUXun4Ig9YYJMTgx94mDcMlcVdK-oHDaxbze4r_tGqaQx70sjeXtPpm5EFa4Go9RIJWMuLxgvmQLhK0vOHNlvXWsbwruqiB5i4bBp4OwHVHxkjYB8GDgScdD84L4qkfMLZRrR914fcsFR7vzXfriZ1LLyTKhwwxuH3yLw7leql", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114772969860776846191\">정민주</a>"] },
            { photoReference: "AWCwydgDfP7xwrmDDTR0S4Fp2KN0Ygg1KA7E7sAGIFspc2RP9pRDIDxpNNGknEXbfcIoJ-0Z3dpVTpI0PttlQydNij1V4Nxw-qPeMx8OLv1bkmtku3r0bLwU63cJ39KhbItJWdXrMM3U4qojOSVCdp8eD3N_IXE5ZWDtbjgBBBIlSSrUqqlOdLzn5tbN59IZx23kT0lA4GrdeNu7OeM8SUULRziGfq1zpbend5rvVfjuJGJZ1J9HGHWcnNrieCNaiLCmMi974950-qLjGYVQXum6U7TopQyk29DlYqzwu-6gF-QizkvTwsQvrXyaXzDaRSRyz4kTZStINltF6kuIT6Fg3FztEQ1K015tBsFdRHminDTd00iakNHtF5FfvaLRuDZZEHFYl6vnPmNTnSAxaXrMD0jrvgzeOCn016OQbNFtvYxfJgqZ", width: 4000, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102572625325682507031\">Guam Ocean Breeze Adventure</a>"] }
        ],
        summary: "가이드와 함께하는 정글 탐험 및 버기카 주행",
        updatedAt: "2026-08-16",
        highlights: ["정글의 멋진 풍경", "스릴 넘치는 코스"],
        tips: ["가이드와 함께 2인승으로 주행 가능"],
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "Lot 10187, Dededo, 96929 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://guamoceanbreeze.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2060059597611068756", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Guam+Ocean+Breeze+Adventure+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "데바라나 스파 괌": {
        photos: [],
        placeId: "ChIJMQDB7bSDH2cR0QeCetLYbtk",
        placePhotos: [
            { photoReference: "AWCwydiA5IpGkhInRIRBxhu7roZVgY6O8zFeZq-HKfygMTlNx91wcunWbMGzmncgaDx82C2ga16u4bOjcu8XzD2QeSJUNYS_CHM6Nt19BDIeqQLhpw9XKsR2aMXYUE412m5HoSUn5xt1M6Mw0-0-K74qsOruWf4mzeAEja6O2kw_1EsPLIVoko9Z5sbW0Rd3jgfAgZLvw_JOiF11MSaBuc-Ep986TTXcNKqFcFb3PO0A44RoxfK2LVGvMKlSgQfcMpbFqWcZxoyG9tzqkiKZECjzjd9rdrzjkPNCVyEQIeFW7gPiPc-td8kXIvv90Kfztro-3CifIyoFFw2uNRg4jekpBINSrSZV5wcR34nFwu9MU3wKnaKF4B8pmFp4utox6aow4LAqLHtiybWUraTD3G4AoIhntoNrZoF_8mgnF3eleMrhVg", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113680530958787599367\">Devarana Spa Guam</a>"] },
            { photoReference: "AWCwydjoxBYAvQ13pACFcjZK7HkoCFZh4iilFqiCl1OhvBk4GEEXzQMGJFUc-AVKVbLw5CCPSLlgLyCvBL4jtNzIDsKJ8H_DW2b4UIxMF_weqFZG7ngSXZsLhIuiVqbtWiDelWdk8elexovrlDW14VXAkqN490dLLCKnLRdBCE-qfR-FvcVyon2z_yVElly92wbfYNPgsSF5zcVv9STlyNy9oeeUl4b6HOV3E44Ma_eZbnUPdK6VSxlVZVpaHAV7gu5KxjwYonFW5-WN6XWhPTxc8LDSq91BXNUxBQoCuHNNdrUEz7SAhLKw8kaCK3oxyiWS9BB0lWyq20HZYa5YMlW3_HMtDaxII5dv-pUiLvXnn8KBIG7q45t74G6usSh5A8M1byUG-OLKBihxBQLBdNL2ku16XyxcB77osz6bjPSzEbI4vj2vNm2paWVS-m6Hdm2J", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113726496907432981750\">Dave S.</a>"] },
            { photoReference: "AWCwydiqbYSmOCX-NzR1S_EZp1GwNIYrzyQt67JZn76nN1rd248boWrvs-h-3E0SCiMcK57wU6eApC2RKkGtgDlsTN2s7y2B7OEA09TbfSHBwmzjRdr4wMIqOKIVjNcMJbcNaptawXkk0jLZHaUawLS8q8MxaMTaCVcOONs-h_VSSmIuye_R3nXpuIjS24qISorY2q95MhCLnMlhvchSrorDMRJz7psZyHmwZ5ZEYODCwg3Ren-jBduqr8JWZn79lZk9st85RhLxURJ4whW8C3zivVWYiU7J_qfzj8kH7VI43NKCoGqbryNOQvPMnPZhwUMBOlIgXj0jJDyMUtgYHEW5O2kChMA_-xI0oxd975fXX_nLzYOkNB99s4StJUQwHGSMBXiqYeyVKSXcWhqmgTwzA4NH5rJKod_fYf93VKbp3Euuug", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101725904828542254749\">_ London Square</a>"] },
            { photoReference: "AWCwydgLudR0huy0pZrk_qweD3NOxiIwz-SHbMprNyCe_q2j3NoaycgcTC50XPPFm_yR79bl8IB-j53acbKm9mTxJq-LfnxLTcbDCS1RHs5H-ycDumcEV6vd3v_IEBPHdd5uXhSqqwiQalQue5R_cZccGCAeCPYH8eb90MA4xPo_DB-0kaQ9IwZF_dvDfEQO6X9g1Szl-0dTvDruZDznQ3FYEv1MrWQj1k99WJgl4LgNnWjkBM5omB9a45JozQMsZWwiGFCgarwghsdf4lMV3bwW5UIh0ZNGIPQ2kAyViByVpmLX9u80qzNoCQOBX-W0ZHWLJNCkzb2csTzDCtwnz6NaxY8jQxxEIqlPv6kUdDaPM2RGoSS1n-FGj-8UNwcxtH8W6ACJWoCvd8XKYUck-FfiAC-16kou7sBwsDugmBeT0gd_AFh72GXnt9Mvv-jty7GJ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117667230671807514176\">Marianne Muchura</a>"] },
            { photoReference: "AWCwydiheV5Oi5_q3jdAx5nsRGl7BkwQbPr5AzEHCJxmlEM--J2leKhpRnUpoC_JEvVBnwyeRYtdQtDeHyWHR8V2tO7uLWZnXs3JXhwbglhLbbADT6gfSi-ofPqGcdkpEwR833nYKec3eqb9d1Tdme6TGgyTR8i8_jIV0MhM_z6lC8-ips7C5LNhY-6ILQUX2NZJExRMJf1K9gxXtz6zywoplWWxZZ-hER0gkUQg1VElO5Az94QBIKZpZMzieLb8du6T8PFhDV9RUkPEOjlkSJFYRkGobwZDh3-7PxT92uP67NNJh5F_8w5BVweGfh-tsbX9krj8h-Yco_fj6SE8WZnuiXrQwiWXvAP-ex8AxiHA0bxeyD_4nWK3RMoQYXaKiUZ1rpVj9OnuRn7z7r6qp8tzZLxJ1osMRLRGTM9VOT0YFSXsCz3f", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103028910464515159629\">Megan Temerowski</a>"] }
        ],
        summary: "높은 평점을 보유한 괌의 프리미엄 스파",
        updatedAt: "2026-08-16",
        highlights: ["친절한 직원", "디톡스 바디 스크럽", "회복실 휴식 공간"],
        tips: ["시술 전 온도와 압력을 확인하세요"],
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1227 Pale San Vitores Rd, Tumon, 96913 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.dusit.com/dusitthani-guamresort/devarana-wellness/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15667698552178608081", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%B0%EB%B0%94%EB%9D%BC%EB%82%98+%EC%8A%A4%ED%8C%8C+%EA%B4%8C+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스파 앤 웰니스 괌": {
        photos: [],
        placeId: "ChIJZXQwM7eDH2cRf2NiMdMpz6M",
        placePhotos: [
            { photoReference: "AWCwydgTTFq7C-ahY1PqoQltM7boDDDycRxZ7iN6dHCwRogrNu5_sPvSN5SoHKQQXt0Hiz2UtbqjnBBP4R5zOclG6TIRA9SA-2aklFAfZfvLySKhbO4EINfu8aIHP1CWDPzUcCDWUeKpbU2pgS3fWh6HtYpwuebH8yArdMHU7NqhGCS219zoGMddPnHei92UuOu_hweNTXOvrWS-4EjK5ZCHFrf33SG2XbsGBYpkbu9oZbMiVL6MhEK-w4u1o9bX5U5LqpAouE7cyoM5DM3Z5yVCJgutHUoy2DcBl5ieSjvlLLr-0ofNYcUPddjf5GVBhYd3HRilohTzeJnMZZL6K012HZm7fhYW-Okllq5wcJWVyvI3GFp3ys2DDF_fWFWFwGSKAabdqk47Jm__1w4UwFgnueRiQsXEu311DHGRg546b_tFkh45", width: 851, height: 315, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115907038946433059300\">Spa &amp; Wellness Guam</a>"] },
            { photoReference: "AWCwydg_6zAY9awpJCUk5-HdvtHUIo6hJoUWBGp2xd8Xw0VP9xI74k4xlCSkkKNLUHsPVeo92tDRNEI5cvqehmtUyL_3CDrCa8ChjmY2AoyurFGhH0YtMa_8tFLoFLscFJnv5RxP0xHXYOLVHd9aZgyieIHzKOPn28aXTGGxnCvJ04val2E_UEx8hXDpLXU_mr2j6YDpf1oI-xgOKpUDPH827MTl_hUl5r1Dh4QESbCqsBOUiT8VmgvTrKqEmPx9CHLibfOE9rNcBsqRbyAHYCXFUbsEWKi2VkAIkVBSza7V_PNJxx75V_O91NQNNivpLhfDrzU_TyfTQbcSQn-c4ePFsUVeMc5BbjuQjIYwWVkcr9U8EB2Q3FCpN7OhqK8K1OrOk0FuSicZlPpyeRW112K4T14IJ2uVH01WhBy6d_RIL0spAPK8", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102042692103223666279\">richard angeles</a>"] },
            { photoReference: "AWCwydiqtYL16f2MO1O-Pq6LeFl3QPMlUKeCHFC1nXO8kDZXn4Z6OvBtAIRoeWdusuUmP0eE2YzDR1i42yhxYy0wcMywyzuO-Rn2qirSvnERi5NXS-RZCiY_QfRsCHGAOnmTSk1m9z5vOhhSF73IfMgpis5hCN9OMI3OvkxIJtH4WSIHs39MMJH8ZAQv_m8aJnuw_WwXVXjvkcHNzBFasizCvb8mbK9zE_RPhqtaEztYozYife4RiBTx01LjJKF0VIOrpZDdMr2WgLn2YsxqmKtsmtlzvFP6U77vc0_na9CnVQt9TdiH74u2Lt7OUHH6xvlIejY59hgHcFCtGfmkll6UO9bSsFKXcWWo3Q-bHHEDHEQBH3_8hzbC7AfTmPA5GLVVh1CYiusg6229AHRjL9aNTJKYXiy0Ndht40yMJj3_yPVeQU82P8osLKHWHJ2QjjfP", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117580188956871249338\">Elaine Perry</a>"] },
            { photoReference: "AWCwydizTlegZXSHHJU1QfOBWxMvrW1KdkKz17wu9VeQ0iyh8ul2wZJ4sMBiU6Y7Z0X1zdMyBCWIeHS981-0tuadrKlIjTpCPfUKxkxaHpy7N-shzsNSr2HMMiqr5dpp8lgedEKT54YudG-vNyOaGvtbhxWi2w_Jkcpbhf_KB_vmnGm9qKJYMNy7SkVVz1ByVCFk7fS23YlTMDj_2CfYJJf_A2ASmMnf9Xi8UnW6vWUfAgWX009Q0yX60reX1ohyi869pKr-X36tGal7FQ1t8Y-C94gWCWzQ-xWXo9FuTr6WEbQQYxcCI0f12pL8FJWMQO6h6Nu1uOQMjsukLOkflyvk2WUlVWBOZCw3u95v-ADXwv6mKzdQ2hNWbVH7oFzK4RTqLghMo5afzE-2Vj7p6PnJvcJeBBFpuqcLH_9rT_JCrhEV-iQ", width: 1663, height: 961, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116135935595138586680\">Josiah Duenas</a>"] },
            { photoReference: "AWCwydjhJbIYIu_QRP8tZBkYx1pJZyd9zG4hxBD9r4sMx4qeojizHnXQd_QddqlVfVFF1lflPOPWSSshMldt58T6qBC-emD_ly11R7fAXulARZSlNTFBnIv4Y0-MDYF7QY0sqC0b_w0sgvc3wevnvT6OdAuKiMeGXtFcmo4PHI11kIwU78uCZWlSmoThl-XzAj_1pw25PhU1tyCcAs-Y46Q6m12LJ6RZiSBlxj1AOj4x1rTOP_laeoM51Cv3PwkPVRbu5MsQ2y2ct4FywXmPVUxg--8eZyMg4tsW3CXazPu8pXF64g_uAUs3PRXt1yJ1NDbxdRvJjbCOGZAsnD3wcJy3-acizfcWNSWDDgjseXO-BtLMJ1RtygTjIcNsyq-g3gPkxjQKEBNu3U6u0P9iQYtzYips5Ia2Z35MRj-ZAMCimc2HdT2h948HteLQm3FaeNe4", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105066760523548876697\">yun_J</a>"] }
        ],
        summary: "딥티슈와 스포츠 마사지에 특화된 곳",
        updatedAt: "2026-08-16",
        highlights: ["맞춤형 압력 조절", "꼼꼼한 마사지", "전문적인 테크닉"],
        tips: ["강한 압력을 원하면 재닛을 추천"],
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1757 16 Suite 108, Tamuning, 96913 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.spanwellnessguam.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11803699135404729215", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Spa+%26+Wellness+Guam+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "벵텡 스파 괌": {
        photos: [],
        placeId: "ChIJQQC8_5aDH2cRq52ky_DfqLk",
        placePhotos: [
            { photoReference: "AWCwydjsyqRmRVEiOKb6YW8T6koiricPQoDojYqbjbITQnXvAynFgZ5b2l1pfDWiIhBnB-cPYO8_29flLoKfCnPxI7-Qm21uonWyK1KabMWE1j75VDQ2M_l0CRI-sk1C7IAyGerpwlLwMcJGuXq7y0bl2NcQgd3KCLuQN9Z1165Om3MYlLQnh4pia-K2TPIjcLVAa2VyzNJN2BtQnehK6dSLJVPzIHBzPV9p_jx8tbh3g0X87ZrudjrEHyk3tZLsiYwtFA1kpu5tXBeFSxntZkJAVXEs7t4cFXHb69XG3qefl-hcnWVtiN2gjno7DLsMJKgH6IeHw2hBo4zq17d5Z2DWMVAgTzz9kJ16KHgvP774NI3Kr6PZ8GN2_IGX64hJrFtMwbEbWQG5peF5_ZcUr-qgHQHThooU88FvbXzxBdvG2BWNwyGjx1qnRNURPY-MerbO", width: 1440, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106733702836759774746\">정민우</a>"] },
            { photoReference: "AWCwydiMhbhaWJpXSf3tqeXAXtACuBTjefM3JIgC1EHqS6q4ZhuvLqnb-bVEX_vsA5OQWR_JCjtaHmtgHrlooqYfZlzVxkf2MfxpkLAoHXEkKFktTvFpqirm6MWxv_Jdd7cuhbixtEeoah-UCBkXHLsXi9XAnqFIQo1I1PcA1TiYdYhKpIlOZrE8r2ZsqmkNdVt8NS_Fwr056YQcYLZSfnvURKNrSb0e9ydOaUy9HbqBgvf5R7bqf1oVsv6ViRCgx9uPWxkvWNqWGVr_KQXOYNSbMc5ijo8NfbABHKCoR9WIT5zP8ovQxke5ciAJwuibfPk-jeB_m1dDZ_X2B7W5Cd5Z_KMU4g_L80hgyN2h8biW1K10EBuaVBYhvhjW8rWh3YeI8_Mq0IZfjhaEnFLxAZ6ElZHZbYOAvyeIIrd0BC6MJBX21sjMx7iEmY6oWiiHLcc-", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107117622118655143382\">Beng Teng Spa Guam</a>"] },
            { photoReference: "AWCwydgtrAr2irxN-oYpkqmbdifcFhJpFT5--CFVHf82hZ6nXBfeoudOxtUbsl5IO7R8ektM09hHIpLTsVd-xKcr62oAksvl7TVK342QNm2R-RZ1uK4fevwn2v-tMVfebLPyDv2qdnfutWC4CQ0gqEemrSWTTe_YszZa2jJVrVImXgiSmNg6M7Qnvt_TKmZV2ZozqfE1zTBUd9aI-DnXsGfv4GeEsHTyAam5S1l3C_yMBixe8BEFtNoPn-_gY96gBH8P-w0vbJ9OH-jwxnNkITw8amYLfH3LwC9_DEfThI7nWQrmFj6d5g8ZVUNnu02Uxgpg59kKInVa3mK76Q0ftTo2oY6vl1mu9HFX30mHigCZ-wT2PZA4Ag0KXIub1vfNl9kOTZnkm4Xz67gS-A3bm8yHpFpNvSdSrbF2CayMdhZw7doeG-fgn6Gpu-OwgapWMw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112212509010263965333\">Emilie Wilson</a>"] },
            { photoReference: "AWCwydiiPUuXx4VRqKM_skM5EHB-RMSAECEoUtzKlIQzw0PbFYllQPnH9dhOLinS2SEGQE5EXCzHy04trkS-yNvQLA9Y1blzWuFlhbvIM2hazJLgt9PLAq04qA8sDcMuK6SgGIgO9zY9--G1EXHCpyeb5Wjk9ZESm0-ik-ihi0qKAEGlK0OiyF-ZRaV0XXJ-TZfZUeP0lYu7gRzCDCQSREN1LutSORxbK38hJjuRbnJTDvTHbu1a288gLSYHu2bMRRXTOOBhtWcOW9X87MCyek_sHwEDjE2EoMepgq9_tiis4sfvlFs4-VLaZ2b-J4IGB0SEvqVEnltA1QqbPnQYbatQNSieCVSxCiQlZq_uKQonBnoiVQGsyJsIX8pKUPt-wtOmGm_9XbRnhEHNrzZ5K7u1yRi4bSbRSNA3uYOckYo5O4yaF8pf5m3Ba1CUNqmY6vlP", width: 1284, height: 887, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107117622118655143382\">Beng Teng Spa Guam</a>"] },
            { photoReference: "AWCwydixOv8EO5bSpYLuz41biqUTE2htXZGnrNml3-pqFjR9NImC7lql_P3iOMdfhUBKZ8dTFYsKLZLzzbMFti_udnQTdW1vtbJhNQpT0_fgy7dUBYnqcYz6wOmA_j0XZe0SgNxEZIPqgmT022qdBlxYOf9QWcJ08J3WXQPMxECQqCY4MR3YbIsalhTjgLehVV08Jq4bGgC-xJclVYcnDzWPg9YadNrSbc--Io90AHQ1bmfV08HcSmTysGvZad6njcA2ToNahPCqRW7iQ5RJGqTkT02MU0AwgLxg-0Jd6uUSS7ja_ssfZGTb33JYEIgTWNdJ3RFGx9xwZSck3fFoJ4TuV0yby_-f-dxkebqaMUWaD9opmkNklRY-V76pF5ccVdD4zpsdNooB4z3YT7OaBnooBBNpPggQsDlrKH0SqzBkeDg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110187473279131886681\">김도연</a>"] }
        ],
        summary: "높은 평점과 만족스러운 서비스를 자랑하는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["친절한 리셉션", "적절한 마사지 압력"],
        tips: ["마사지 내내 압력을 조절해 줍니다."],
        hours: "월요일: 오전 9:00 ~ 오후 11:30; 화요일: 오전 9:00 ~ 오후 11:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "185 Gun Beach Road, Tumon, 96913 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://clients.mase.cloud/shopDetail?custId=BENGTENGSPA&compId=579854734248542208", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13378188918405766571", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Beng+Teng+Spa+Guam+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "제니스 프룩사 타이 스파 괌": {
        photos: [],
        placeId: "ChIJb9bqg_WCH2cRcMAop7x0r0Y",
        placePhotos: [
            { photoReference: "AWCwydgjmVjc-t7zzxZuuKpkJohuAWf-fY4AaG4PKTsP1uy4fIsOYCZ5MvnOhLVgwNOhpIiCJJ9hL_DFfPhJBGWVrcJIcWm0C3T5Hf2P9aCVHsbH7jR9QcfpGetFgWV_k16zx799x-W1PcZEyjPD61Y6UpTDVS7fqqbd_kE-4vvPuqahsQgThOdEqjKOrALBVslhL1youVNBkpTI_caVzKPvZhWLENRqD6eUXxoTNw_ce7O2Bg0usesoRg8ucJLaBxjYp8srbWhlg_Nmd3DuPr2o9r7jCDmBZfyh2ItVuhZR7RAHoSgVJsmqqC22hVBHhWPyUdu07VV9KfaDecy2ZCsGelCxQvbYcqm5yAwaGA4QLtfQ5-9blvB062byix8gXVrxU7qM015MN5CJ0XkACo68XoFeJV2tQF3r0vtIEcR557A9-SOl", width: 1260, height: 628, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109230848006415220790\">Jenny&#39;s Phruksa Thai Spa Guam &amp; Garden Thai Spa</a>"] },
            { photoReference: "AWCwydj5cbWPnHjwAteJZJtIC3W-J-m2Eba59niTZVr5bDyvx-aG7iVXfWSgN7uROueN2K296F42Dsw7AHKWAF5Z3MtZQd2cGGsOAFcWuU08rYsDjgi_SDXWNpv0pBWSCbyFdPP1JziTmVpZMfUoX24FBazPyD6C-iLzI8MZKF8jf62cxmGEG_cVR2TFcMZslIAbbSG2orR9SdqxorN5CxjnlYvuV8pG10iuCTHsUcl29hPcfYGLS2tm2w9vM_k1zY7d3cugWB4GjZFBvvpsyuS1v-2kN6q1K6NU4JjRSDANcbStsrqy1_C6wO38X26HtOHaDBKcwxo73JBxSHWz6RMGUpiYS8PXfKCuJBTxqvGoEwjved91qK8LGibpZnjK0s9rL3_5-FbY6r1DtZbnmDfoyaa6riZojDipwtsQqucTpoBz8Q", width: 1284, height: 963, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111144022605157436143\">Jax M</a>"] },
            { photoReference: "AWCwydiTolBQw-n3D8at2fcqhpPX0AKum9_s52zpBS-bLapthPn5JnWvNdao4faDbcWTk4AxazdfFMl-JxjqwrwyZ8c0fu_Hd53M9T-X9rw2-j-DQJn-PxdzKT01X1rtflDY51Nmka_vOD7PyXo1mGrAOozr47Z3DM3gJuEhGtbXN8vmazfjUUVyAePMG1dUya5vcmK0v-NNKpNkkTHLrMeJvbh_u37aSgSVmVGYyC89GbwPkGPkzPqXgGv1Gsq5ajjiGGrLCeQvJ2j9yE5j7okqyCVFKlyNiKISIprb2Mq82okLCpfDYIJAGY7kLMVEHuX-PeevEtDicqbh4OBOlqJWqP4E1o4fl63hhjHEksMzUlkKr_HiUx2xOWigf4WETc1G6trp66uuPrZHuzGFOraP6SJmR1aB0PY8NvvHhcgl0Oqr2Q", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106448705998109839377\">Michelle M</a>"] },
            { photoReference: "AWCwydju6TYfbVQ23U9Mx_CoMbFhCRjm2TQq5FCUftHRav8e12lwdGw76IMTUObUmdu_rLoWp6fsbsMy0iDDFKaMT2Nkyc6nFnjYMrA0vHmMQdXwfqOoJCHXek8TdRoGwaErdU8CmsUcqNQPvWOsdVSOMYkGGNtkvoVdoOf_VAtQXaMqLIf52yihSLFBbHK6HZZ-PtpKvxwwwRiXvD6YA5PrZjyTgFIomHI87CntLvE9iXgDZ5Rt-Ws71RQlZ8srnxRGCk5VZ6SPKZxgo_nyN7K1fCRCaeI-7IU_zHopt8F3TYMjPcdZ86Mf-AzG85UXY_zHqN2sTkQ1EmCVqgkjiscq_FjuhNlHl3ClacwlYbkNqMZU_PRNak-VXy3gK23J7JLlf_hQYW2mkZIWy2kRaVZ6uWj9uq5PsWiHqLRUJ2SyxmI", width: 796, height: 523, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109230848006415220790\">Jenny&#39;s Phruksa Thai Spa Guam &amp; Garden Thai Spa</a>"] },
            { photoReference: "AWCwydigiCvxz1LnYhoqjTHbqbaJiJn_K4S307C8ww7SWogxKfX9LZcXer7peOL4opHJ8bKtIzf7maQalZNoa-rMSPY816mr31ugwB9TSeoCR6LcpxOgYznVWrm7WrQ3JzEV8J_YTuhuBu-4GFoM1U9qVUaWGfO3Pcn2_mbLo69ZFCMNWXFbC5tM8iVbqrcYdC1AzCcM7hpoeJJfOPiU-Q7Pq6q24S6Yf-aIZ2Rzoouk78euPuOtpQ1I6ucpepWp41RgTnIgMfE5oOJ8JLwcY2OZDJDLSTCgEI3gzuIM2cREK4hd8Oi_0p9ViWE-AWSV7i6La1iJKYzgeEhWoN32eQp90OrlzEmDvbedTLkdQLhWxVA7Yc1ooCRoJxTI51TECoUFwqAaJQRHeiX11GOGoutF2h784k2CsOs1S1vkszAGVeM", width: 925, height: 617, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109230848006415220790\">Jenny&#39;s Phruksa Thai Spa Guam &amp; Garden Thai Spa</a>"] }
        ],
        summary: "전문적인 기술과 편안한 환경을 갖춘 마사지 전문점",
        updatedAt: "2026-08-16",
        highlights: ["전문적인 심층 마사지", "조용하고 평화로운 환경"],
        tips: ["중국어 소통 가능", "온라인 예약 권장"],
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "Oceanview Hotel & Residences, 1433 Pale San Vitores Rd, Tumon, 96913 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.phruksathaispa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5093418057186459760", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Jenny%27s+Phruksa+Thai+Spa+Guam+%26+Garden+Thai+Spa+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "아일랜드 스킨 스파": {
        photos: [],
        placeId: "ChIJdWQrhnF4H2cRVIPrDG7jeoc",
        placePhotos: [
            { photoReference: "AWCwydgZoAF9t3oVlNbPbZ1ge2-TFU0SKSPl6halP-rLcfimBD4uO7uOlPHLFM0v3SdWe68S_ONMVvH6pQ0r518O8cjFQiJDHvysXCiR-JMAlc0Oy5wM41fbcyfnNVIrrcMNlj2Ax7DU5ZzGK2uKbC6rxuThHL2DYvam3R-IajKWlqloo5H3SD9271QqBaql1xAiBe7EbGNh6WSNF4H60nMYq6WCp88o00oyXiLqwEL4lbBAgbJHq-ry9ygSrKaXgT1i3tAHI8S3LaTSMGg-f_uOro05MT1uprAqYw88OpdW1ZiAEHw5bcw1F0iCBsVw4lSKbv9RuyrhV1uOVEL-4_e1w9z0tqdb6Is4EB9g2tcWWgnnPZqd8k1r-FqnLHTAG4v7Qwvd418JN-La91yvDLXt4FHDz0g94ypZFi6RgWKz5O2iTpEi", width: 640, height: 406, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114170228376647505423\">Island Skin Spa</a>"] },
            { photoReference: "AWCwydi92DsGfruSjsT06XMOVo9m2U0gbnO2dQMw4Fs3ykgLQj2K7uF9_5LF0XiAwjGq5W5joEwByFGoHnv39yUtTD0f5Vwhikj_OrWhtrIo0C5zf0UWvDegrTiu2YtHWJBvZemWXEuv7x-Pu1yIG4gqoNtbS-ukUugHzA8rvxQXD7Sks-Skcq2wT649ttJIySz_ZXNW44M8mb7jnhkWhd5o-44hvTb9T6HEOUbDBj7SRR4XBcwA4PanIVWFM6iyF_Xx24TUGMDpGouJyhF_kKzvTflBURTkB0fMIARLkZMzDIGrNoDBTXbVl4hCBHhTsjEdANLpTtVGXMrdO7CtPC0Ldc171RBVSdCHn-nX5JVz4fR7VSizzRfQo_NONXPs8JAEDG9-OPrbRIqBHk_Bhu_sMRhZuY1BpiDZ8yZBRou3AhdlcnY", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114170228376647505423\">Island Skin Spa</a>"] },
            { photoReference: "AWCwydgzKup-KkplfqdwkL6e-PseY8BbR9HpeBbgm-x9ytM4rbTfvarfEOf4JtzOvlBBZrYK_rj5lGPdVYQmwo9yiHj--ykMjzHdeqG2iIlQJeN8MO6tQSvOzeiPdmX03uPrEGvd7ebnSjdElJbwlwvKhztdHSgHiQG_XdFiUT3avsi4llSUy9Y87_1d-vXm_v8o9CzNqYbcl1P9xhg2zbP5HSuEBtdQajJMVyzdR0VaMwS4uEKcvvMh_n8uUknGS9asLjF8rshuhqCuLggzDgcsnSCheJGWKdACE3f6zI0FK808P-KRvkuGdnzzBoX6v0LtZPTr51kcTPfZtpeXN020yCNZ1NQCPJ28I-RbaIxCRwjyXz_IgbXsgF8hQ1Cal6_r9Htz5X3kjB1E0vUfKH_gaADF6vP4HWnJl4ZpcK_9fwmXixLJ", width: 3636, height: 2749, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114170228376647505423\">Island Skin Spa</a>"] },
            { photoReference: "AWCwydh5lHLaAH6RbdMl67FLjByme-zpv70Yo9fQaR7dbNpR3YNdY9AN_HBNQHolRwZWBW9Y2966jJiRDMppyiexPAbeuNhYPTYwSgjpwZyXZVxKUmfdfh-osSelpDNLykG2572cDscv2q_mWi-r0aQ6V7Q_ZgLGnU_LLRnz_GdWLoxeCPxAdIvq_8YSwQdG0lGI8rkIap0pAfigMMu7lKT3llmb7kIJiAvsx4nX78UnS84A8K9WRlqSjdGkDwyOvESp9iN1Gfqj4_0fP1yYw9TKOKif-nZ-utmJsk17vU3JRIU6dzbY2v5wr_WGs-ghqq6u__fYZorOAlHqzi2x2BtOEfp9upQUP7Y3xmmqYudaZ_mVKVloBpqi3yW7RyKa-iRnCPJWDpD1PqAcsXThzW57Z_otyWFM6FWezuQ8QQILjIL3TbKZ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114170228376647505423\">Island Skin Spa</a>"] },
            { photoReference: "AWCwydhrZxPD6X9y0X2kPguyjyCXV0Wk2bL9Q95M3VpRaSdDg7KzDcRdYhEcEI2jF5jalVZuognYgsM-xHl_ApY0_f6eKW3AJWVgBPV3VN1Ntq5zJnQTAfb9qYmwafI_RP7PsEnF_90lF7WBN79X-DTlwi0ywE5nobujt0mpwJsnr3ZExJtNIjctn_7xjIgk63n4Ju2vbt666VPDYYbEn_P9ASpi_2zA0UyEB09jd4aBnhjgoA_ijJPLi80uLd_FWNXBAu3EWH5x5zyK2dkFfByxw4XwhGcVu7RPdbxxQMA0G8lGTopDwGDf4b228MoNn9AFF_DD-8reccpi25FzWSwrnzR_Gs60R_a5qKZqCGukhKNkm01BF3nwJhUtAXfIb9sP34qr_MUaGsivlsEIH8dLNg6GHW-T_hk7j9AfAOqex1qwmw", width: 2822, height: 3543, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114170228376647505423\">Island Skin Spa</a>"] }
        ],
        summary: "고객 만족도가 높은 스파 시설입니다.",
        updatedAt: "2026-08-16",
        highlights: ["훌륭한 서비스", "높은 평점"],
        tips: ["예약 후 방문을 권장합니다"],
        hours: "월요일: 오전 9:00 ~ 오후 7:00; 화요일: 오전 9:00 ~ 오후 7:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "285 Fahrenholt Avenue, Oka, 96913 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://islandskinspa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9762365204081640276", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Island+Skin+Spa+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "톱 케어 스파": {
        photos: [],
        placeId: "ChIJo2MpKQCDH2cRf6svyMMI33c",
        placePhotos: [
            { photoReference: "AWCwydifak4hYohvq65hMICR-9zE2Mnsv2dcDx1Qghct19LKER3qfVgseRs3rN3coq4tp1J8paWLY8YFJj9-Kl4f0iLA7ClkHXlY5dp6FJtFA_OeN7it_tL8ZjZTgoWV9sZNxdwO8Oaq11chdUssy0REp0WO1784Ld4H5FJJNLTd5CkEHTfdKMY12QyrvZ97CFzbi54sekIruHCA3Wqa5eHLrLj3AB5lcuK5wAjEsqZzTR_qCMijHADOK2wo6W84VBdFCzHab9-jq7J0uuwdWEfI84_tCos9UE7sa9OmuWPP0-4zEqZujNsSwhrav1T_extBFtJ9W3CeXERJKC5LPKBifPFX_QwYfGJ85Xe-lN3N-Dr3BsosrlRgHy9mdBXvY5bFwHW3WOCTRP_K4BDVhWNrHvHceYIiIwwOTV_fIbVDssGlVg", width: 1280, height: 1707, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114898749110369685955\">Top Care Spa</a>"] },
            { photoReference: "AWCwydjIauMdSoThgI8N2bZnShRkVESR_jdCpoBr4nerg-FjKJCrkZztB6YzpvAJkXpXyni8fdJxMHkGBKdYxiUhR3qvYuNwfvnZSfdioqW70m4LwvVJB03PfSM3C26sH97-o2JeyyYv5fvvxcsGpeuxWPiEF8PEowfjJZGaT5mH21j3gW5oNGlc9hu8DXhPVdlySKb1VdHa35Zsrbcouo2wyTWyhoiJ9VSmVl8rckka_XTwLxJtr2YbmrB1pBklD6eNUjM1mU5k4Spd0cQ2uY3Q25NemU6_3k9u8VZ37y1jM5KTKvxP9ZGn1IByG7krTtb6__Ld09iAfTcrMJ8YPmlO98bOaOC38Bx7ZJYZN7_9tmSr67Dgm8JBcQiHOcJVu8Bzq_8u7oCROZedm_Maggu5-yXdnFRfm2D-RAO0UCAubwpT1cZw", width: 1707, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114898749110369685955\">Top Care Spa</a>"] },
            { photoReference: "AWCwydjG68fOq_5VRHF_1sG86yYeb0tg2i5cc0wR9y4Ogfo_VlEB1k33GJ98N2ZcyYloxwhV-xoBL_YjK1qhUklhtG15l8ZyDjhdiGWDlbdGAkUPk98dZYifxqFJBtT7QS0SiKX_H1-DZ1zVP62emnid5VaKI7pgb3jUG99WhLlw8iPAckQzpRGwQECpasCF1dcqoEgjT6Dlz3jOSR4j-CW39TPtKhcjz-7efdKpYL_U-N8CeAmbAoz5_v6VRRCeG7EoIrOB6PlLSOcYRY4dCBXCKKGW-9eFhgsPIe3v852fMY1oIN0tkn92S-xxrNntKZvdn9SIcDFkMwfvk6q9PEmwiihPpbwgh516-AnHbG_q5mddEyGgu360nrsMRyajiiA3Qwjr8WmACNleG4p3LGqFembnXbYnrs2_N_I4wpfqp1VKuvpc28FRBMac2O2xvw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111189006574622193311\">Kaainoa Suxin</a>"] },
            { photoReference: "AWCwydirCkFY1Ay0aehGC5d7_8cMYWc1sUVCrMWMMdUooEZ-_p-tIiuMdXD9pspxRNr6YSDWqhqKPSpyRmSLu2tkZRfR3qdDTA9CEcl-fr6xKvDUmQgzy4_a22EDaWBM8J43bwQ4V1sjXJ0oyv18D-KsFLpsEYLGqeKUV70rMx4YHL2y3Pj9m5m_2qUIKeSzTV_Iretw40eCOlhiihhiFyxiecwPF0PnPhRHdsWlgNn5zzWOnfosrcDwCLBTtXup3sjkxqLqTz9vI8ipSVAnVcHXNhWvYSiaAzm-wj3Yqr0eIuARJ6CN11UgNMDKowni_LgmrT75xikT0f--_If-_IOuaEtk27qSPKAOq90XqmDp8EtQxk96sJFIleykB5G8NfOXJilHD_XMpIBJDqTqmeDBVdLCPxAvwQh065Up6kB4MPZt4L9qsffkS6-_VvEm5A0M", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111189006574622193311\">Kaainoa Suxin</a>"] },
            { photoReference: "AWCwydhTd41lTcw3xyL7mq4kEtq1_WNyTav4A8m8sX4gQIf7JyLG1z1LQq4s5GR1Lz2kP96sSb04wHY0MnaIWciQHwBPKtSXtDHlWi-39RHKvnfpvvmyrC3oila9LQ8_0_dsY8Sa4geA-O4nzUwOO-VwDUAHFAPT6HCMoSSwM7RNelQcOxeIWcUfCSJnSQu8HkvP1PxnV2eS3Z-8rkDepQUzpR5RvfFfhg-7lVAELv11HQ6iwPMCpVVAG3SkNPOYdcYQt1rzDyr25h5gj_rY54KVcl9tgxyV8WlhlhxS_RcOnN6-s5JY6DL8Xe3xOeYrh9e6yj2eskjLRkuKw5Pz9lrqOW_OQtLh6bpDqJe7EJ5STyCtqoYAe1dMTFV_QyADIYAdo-1tGAllvt_7StX6jJ5MsHxYCrkqOxO0gDN5YXYXJdmp-3pa", width: 1707, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114898749110369685955\">Top Care Spa</a>"] }
        ],
        summary: "두피가 깨끗해지는 전문적인 스파 서비스",
        updatedAt: "2026-08-16",
        highlights: ["헤드 스파", "두피 마사지"],
        tips: ["헤드 스파를 꼭 받아보세요"],
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "744 N Marine Corps Dr Ste C109, Harmon Industrial Park, 96913 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/TopCareSPAGu?mibextid=ZbWKwL", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8637632247290112895", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Top+Care+Spa+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "텐주도": {
        photos: [],
        placeId: "ChIJtZIqpY2CH2cRLynRJBjfVQg",
        placePhotos: [
            { photoReference: "AWCwydhYUMfISnlbHRvfOVO4zUEAUbz6v-PxHU2bVH_hL1JBGxlhNXwrStPCcfLxpOSzKvqSqjIlxn3hPCNMZmfePCqKQLOzmWOyPwHdBBbf6tMrhIAOCfabkyCONIwflV-21NIx8A8pg3j-pZjFpwsSoPEOqMiFYUxbgcFQpCpM__Wem2VR3rETbbxWEKjLSX9oQ3lifumpZtS1eOc3UcL9xF5sCAA0gMUd74P9RDpKsBAA-_MIvyBkMNFwSRtjN9hMXmbCDRcE-8p5RAgaRVozVO5yhjY8CO6i4fvpvKKAnBwPXNpmY3U1IcnemUCp9f8CHmXumU0IhvIWN_0-vl78sUKdx996m1om2WNV6valxGWwuL009tUZU7Hfl2k4HAOT61rkYWVsz3mMXpaJW9GEfFmHKEL_sOJRXwGk0AgxLTuGyg", width: 1706, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116537629026380868399\">Andy</a>"] },
            { photoReference: "AWCwydimLwP-Tji5qCKb3zkwaEA334H3mh6NZp1u54Nvq_JJ2OlYBUCXo26ZXAvDbLKE1syHvd_qm3i_5eBonre5TUSFfub2GnBPlfqtKjkcGszSL8puNfS_Z0SIbpjJ3crBhanYaoqeLpEq4Gykt5z57A9BxUPjYU6PyigZCbZFGfRo5bM_XFCs9mWjFMepgSIWnb06vyh2IHyBh3ysd-7gaLzbVSJxVNCHvx_87qHnKBu6x9LAA0Kpx8exSd4WpN_9gVcMKF--v4X5i3Te6jjvn27kgD_1szV5tF1ElmAlHPzx_7_RCEIJQ4cGNOfXgM7T4ryhCAPVKfcoPjQTIx_anBtdbensyKhDWhlC3cmFF4ODDLNO7ae-FZYE5sNGClGK3OARn4wzESRsLYe9U6frylmPuyVLTfKIVPEy7xPT9ePGnBY", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101727262986494673753\">괌물주먹</a>"] },
            { photoReference: "AWCwydjjCCvxFf-FKCEKUh3Kr9q1lZjxw0MLnWFuLxAEE7a2dmey_-kzfAkk3v7jp1hYjQTtPdf9lvV-oC9c8BZkvl2Cf54tfddOhZQP61aoGCBZRxjG7SvVSgOM9BE8Xs430qRo9d4dqgf2ZLRrRmwDUN95es_5Guqw69kEIusQaxIWqzg-IeYJPkHAhdwGTsdP3vvkoUrhNChClfEBE6czEWv0sQA58qvL5y2B1i11t_br9GIHh1w7mbZYWfPtVWIvK6UVkZtmqyyAvDWuWPnaXYLbxi5N08Qglc7jd0b_XQfI7rFwZNlm3ghN9m7qmQp_TNxU4uFfsSb2nY02p7V0AC0vOmZOTp9vgQqTqE9t6mUPmuQ_TPeaH7MSUodb7wnccvG7miuKex1o15Gtjb_HXcLBBBUHhPGN5pQOqy3taF_lqw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117050558873942334980\">michele lee</a>"] },
            { photoReference: "AWCwydhaUmfX27SZ_ttftgfDmrtO-q_9GXnM03Frr8yzcFp9czgYr3k_4a6t1pJAxnDmBRMhnY76jnucDy-ogAVZoMkbHtJUvRntkfaNxSMfmemXR8-4epN7gDJAGHLhDDoxYArVO5jQZucrKFLyfPmxy9MxOctDHASqyXSYDgd3EN9CTSPySNs7dWR_NHe30kcJtJNUn653XudTSGWyR1R1s3J1ProQTLT5YgA896Sm95_76YstpXSvjIBpX0ieq1-LnH_5MNmz0Pd1GQ30cJUH-jH6g3RX8KhmysLz9mDFbgKR1ql3mYH6DRYekJ1XOYBrg4h0KthT1_4mdRhRyxTAlgnDfFEVx5nIGy0aKakcFvSY8SbREWYgPH9jDmGmzY4g8wXSKayQqulkKv-Gti_bObDSvf154sYHnTHUJfmhoob_wFrt", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117050558873942334980\">michele lee</a>"] },
            { photoReference: "AWCwydiJmC39CNXmVdAlQFEamhtoeIX6DYgjAas-Wgzyt5RHE9QtKEd2H9MOubQrEtP8hn4JOQo5QFuFmyCS7qt-einJmSb6CuAW22XthdvXRuieDVUMqzQx0YJN9BKI1VdeSSe73JllDM47XIyOEMl93ZAhvBnYs4U1VWlqDnDTAEYoAaAiRgUHrSzHVHFUiBcHp-B8j_jGKFb8WJfUGocIoYubGNHg2b_DLKnq_eexhAbmqD4IfFJwDnEXvT59jb6FIY-7WmCvsw3XiZGTRpD4qjqfeEeHLuxDI-9EITnlziFlcCUEkky5THSwS74xuUqrai_PspyTlHffEMzcC5zwKg_xAOBvQapHiaQj1-uwpYGClR8dM4a8J4I0p0Qq7hIEL9E-cVL-7C0J2EGq3tNNbgnEIn42cnDloEEzt5IgPK1ic4ON", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101727262986494673753\">괌물주먹</a>"] }
        ],
        summary: "숙련된 마사지로 근육 뭉침을 효과적으로 풀어줍니다.",
        updatedAt: "2026-08-16",
        highlights: ["전문적인 마사지", "고급스러운 분위기"],
        tips: ["입구의 신발을 신고 양말을 착용하세요."],
        hours: "월요일: 오전 10:00 ~ 오전 12:00; 화요일: 오전 10:00 ~ 오전 12:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "582 Pale San Vitores Rd, Tumon, 96913 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://tenjudospa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=600631420113725743", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%90%EC%A3%BC%EB%8F%84+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "H2O 스파 괌": {
        photos: [],
        placeId: "ChIJubOY4y-DH2cRph-AC54shpM",
        placePhotos: [
            { photoReference: "AWCwydjrT54YwxjYNxxFEahfDcJFEl0PDCQt1Bfnb_YQDM8miTwgDTDmBdY_TeOWcgg1CrwgW2bHcQohndXTU-VyyuANUFXO1kWHh2mv2EPVtzjVmmOguPTrUAVlMwbMY_OoJ-upn21BpnwEm1BvNzAesFNvMbD6Y9qMJZGgdWqkJEVX05IKhMKeSR2J-9sS18uwiTVsy5hZ3kyS_99uJvlJIrqHXa__zbff98oSPWaT5VezMZFC3DsgWHScQmmJcbYAxpiYDGbXMfhzacFyYJ4JOuAZfZSdq8C7Uz6nww-3IEBhBnsy95YifW6riqDbnXPpGjnjH78FFwPKRr0e0e7lkd4OSxgm4twI2xviJcj-TL2IYAe4CGcLwKYNeETF0kHvVA8Ca2zFSqct7w5Hh8OLLZGoEqXP0saUXyjS05_OWTAVJSkY", width: 1713, height: 1284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115492725290198881836\">Nicholas</a>"] },
            { photoReference: "AWCwydhpC9iX9poaLfa3vlVHXYD21FLv7LRsWXaQV4sy7Wv-pIki3fFRVLA6PiLCBwaHr5iWKZ8ece9VqHy7dqn-QeO5Alr9zehqTeZWbAOGobGs8qyVDr0vu7hBhliwuTz5axhX6jjcHxlyzVq25TXMxKs0t_wuiwh4oL8Eoo7wpWkis8n62R2OV1oIXEmV3iwgPpcgTm4Z-28nviHunse0rutfniT37aXfm_Kz9HtP-I0z8naeYhoS_jv0JladbGPXd37UVAJNPgxr9Vbm77K3MRFj7BSM4nNod7aIie8mhD3Rj-KBNu0sOkyNbCFj2r4Fjf27FA8BzkRMysLOCdZRw20CDFK6UqqPyGvEAV1eWjwfM1G8QEEP_pf1HMYUEYYAEYmD4eiGeVGc1Ycy_OjIuXb7MU9AgZA5NRa6L7PSJtoEoaw6", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106184652709639381687\">Linda Salas</a>"] },
            { photoReference: "AWCwydjA7poO5-yDwWxvSN2V7q6a8V-Iuhrn3s4ker1orHn48CJDbD2E1E_HCpP1aoK3WCKyqWO7cnYG7OKQ3bbxW-CI22ABdBW9n_8FoU42NvvI8O_dG2Sq9-hn46UC8LvobpihCtIdpnwnbdPZZnJA_vmVkbmP0KrfyR6MbbKkgDST0uUDcqhVYFU5ygqOquNz7O9D9N5wIuxtM17TZjTZZpl61_yEkHsWszrD6etNBuUKLyfWcrhG-hBGSRLtLgN6JWOwmLbpyRcePuzQeqZG8KszVswWdqWj7Cwx2ZKun_8p_xaztL3GckVTHYEWHA58fbvBnKFGIU9J9wEfxNuz-7YiC42-02VISBG2-4L6dXVBDTU970Xs8ZxPzlkQUlWvOmxAa9JkyZA6zwFQguNaMPA_EunTZdRa4idS-UArldJ5Dw", width: 1713, height: 1284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115492725290198881836\">Nicholas</a>"] },
            { photoReference: "AWCwydgMWDqwDgDpxcxcbQ3w1htQFj8IMLi_CCoSFxLklOmFl2U-KfZC3tQny-fCAv7Zu0aTvhaB8FzPJT5LlNC83HNHM6sR2zQVPUwswZCO3dzpENQGLjLbfW7QLz63BEuxUlTqCmTbg0mX-NI9JX03O8PLxCwFeTEt2cCQmzE_Ur3Y6pSUPht5h3QdfXD1LEgS3Oh_XU7KSNZnakhey29wOKRowKRp32Q2FThWc3Y0pXPHSnB4d8aFqWcluK-38XfcoWcNaFhBs9d2ceVVUGKOAu6uOeSALgleMAA4-scs8d_boDNYJqfL9aLR_dSbmhV8BrYVf1RrpUHGapFSUvKN5FHUh3DwnLtg-VpBNBPNMq7wN1e_dCEep_FehT_VzOaX3EKKPXr_bDTojuwDY3Y54j04daiw0WB-r8EJkZKy-HNlCB2mqGRExO-RNY4pQLf9", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106852715277054489155\">Drew Vaterlaus</a>"] },
            { photoReference: "AWCwydj1KokNXd4u4a4cmIaXKOrIF14CbTiaTWvwoGbnx-HqxhbtHHA3nGNwLVpkYddI-a7DU5Pp_i2XHeUV9UGhcHeeqVtgPnszuDLiQhtGXJ_iHjxL6HFtIVHJZkCJxSJs1osRiHHFiV9efIUhR7-UXkFR9IWSqxi_r92XeYYk7rAD6nwglaKFmBsFc7JNGzdrBqyqxlTSbhWoeEPNb0y0TqT_uyEVty6xi5ly_k4cKqCfGAUEu_URrHYJ5yqBpCtE6uIRyEHWcjPqu7xxHSsU84bKw0a_tL0j2vzn4ekMlL0BSqQ71f5RNeSoIH7bihq1blSeAQPRwtL2p4RKsJEQb-rugEfdWrdIGD-Wu426-gAY1Yr1dmPCSo-aYp2wp28I02qQBTdnA8Pkp3CvHgJ1RDrvEmL_brqI7tXdy_k799U", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106184652709639381687\">Linda Salas</a>"] }
        ],
        summary: "고객 만족도가 높은 마사지 전문점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["훌륭한 마사지", "우수한 고객 서비스"],
        tips: ["예약 후 방문을 권장합니다"],
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "240 14b Aqua suite 100, 240 14B, Tamuning, 96913 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10630233027764035494", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=H2O+Spa+Guam+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "아사히 마사지": {
        photos: [],
        placeId: "ChIJodw5vpyDH2cRfnMALLhaoA8",
        placePhotos: [
            { photoReference: "AWCwydgzy6464HKPOKHbKgvhrM3k4Bl_93HJxsgFEt_-2ttVqOPAlik7kghO3YQahZkPvD478fA0cCbQpSC-4GSHxmcm2o80_dG18TZcc7dXrH7Qcy79AoeOPCdIIvQNfKUcKI0G2rhIE6mocyqzgBvSdLMvCBQhugJ68YSL3TW4OIy-ZQlGl0Nyd6to79jiy987Uh03_Hd_uhnodZLpyUzDR5EBpa9S_H7xAskTgPMm8gEpmjnoyGie2PoXiC_UMmdHNHuZkTIc0MypHAtuoiEc2TWvG1Qw137untF2qMhrYQzbiPxNFjPyF_0n7o2BjF8jirtwjw9UwqSTrZx3GcFRb1mn1I0o8R6-AT6piVjrqiMPE4NantUUPcbV5RtlLrOwfNHBLGAORuvF5umeS6jp8Od9xcxcd4I5YVUsEl2YP2PzvdBQ", width: 1125, height: 1008, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100433960676546906063\">Asahi massage</a>"] },
            { photoReference: "AWCwydjWnLhqYJvaTQYoQ2o4_KQR6mSx6yDJihAAE_HI5mO8xGjICdlLzd9JYD4GtLZydxv0pFzdWrq7iPPoZupYvD6bYEmrXWXSd3tVaAt2ER1N2GdW9P8sjXq9b-vaFT_rik4v9k33EkICzRWwTt-HXW4ITo55keIVqv38IDRK6ezglXtDkoyvtSro5HQEVAjuisgFSB92Etp5_IHl8ylavY6rTWOvJm-zupEw33NmDLg6OEwK8yE6h71_TbsM06o2Cr1rHu0eWuIAaoa_ieO_nqKTPi9pBI2t5qh1bSpSq_YMoEGbJwRJPNbGcGBgGNaFhKmr4v2NHWk8fvhQgHU9g8U4Cny1kOxU6ee4JzovQB0yJpFXIPxpGQk9QvDjzyDd7a702Mo15nAa2rq2x4bqqE80sjKBYiDs8WF1oc-aeZd9fg", width: 1122, height: 1287, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100433960676546906063\">Asahi massage</a>"] },
            { photoReference: "AWCwydjVgmhR-Tp7HpNDJJZiazgy8dEmPbQFXN42F931EyoIrNRB6TQIcxTYI32kqHt8RkQCxDOmFhA9HqmDP_q29IGi2L5NRRtt7MIcZbM7MWtrZzPPe6D2L2eRm_-l8U9OKsOiKsz9SiN3JwI78HZV1jJJfcVlmkIhE0L8kkZD85YZix1lkJA191CEP90rs2sgut-M_3TZTrkABmWWIHomO2YGYyRGJhVP7W3NGSJ6VMUjpnPPCS1hQV6vhoWkNJtD2DfpEFa24he-tG0lYfEFP6Brw_xnB-9Y5PX7wgVgduUFifmjG8DmaR6pXYTC9_BuFsOsomluwLxCFAymv-I6-dXB_mJPKtIHN6rAXZhRgbWrstGW3f-OKNIgzzWl17ceD_NKRrSKvMcBgxfTosXm4xUyke3f6Z-3u_lLNbTte9Wcgg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100433960676546906063\">Asahi massage</a>"] },
            { photoReference: "AWCwydjYZ0CcG8cWD_ib3rX85-neR4wk-5BOADkMA1FLfXw2ZcKIBXVAezsLfYuMOJdyJhODPNsdifYay7zgCMlLOjmVLU5MdrsYJILWp2gEQj1mVA5KzmLawVlau2DVzqtxhakQrhuh9BW4NLkIW0sf2HS7tq_CRhg_OxIuwsVSL06yEyNL5jJecSuNEEvbPbZa3fA8djHSsFw2_24AiM7KazgbA4Bp33ZDJiQ90a7qNQPvq2lrVTlrq9kxALat1Y7t43wBp0mlF8xIqmhFfTewVuIW2ozdRVwKFi9pXwJVke05o5-0w6KS6shWoU3PSutYUHU8Cqa5vUiopolRKvkQVt9HfWkl1ZQg30vRmeAVfthwj0aWCuag5ZOhSufIYkUuGzFocCugtW2M42WoCPEx6unpA9s7e3m9FmTFwsnznO8", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100433960676546906063\">Asahi massage</a>"] },
            { photoReference: "AWCwydhJQpRjnUUhRIY1eZovo1bf4mGuleAu2Fe2tYTTkXnM06wIpojP7oGjfoPVFfni60ND58DJlLZYLz5S9yze3j_7qutl-buqnrbFXPo8ibeh_ewDLDyyCAehWw2f6MEX2BPrmwJTRkerDl7-lZb75TIpTOp01W8Fc1KHLAdadv5iOu6zXR5nRvOwl0Rrxc70dLvbYOQGSHu584uIYUfE54sr0Tsj1UFXSjpoWyZGkGEIgBRVI4_VEnKhebdpU3eD5IhkFKCCVbwMuTIZC8jmtb3xO_sQt6a2KLjlfY9CyDm_zukIDQ6rIeXpMibAfk56nYEsne03jMIztnKdkM_ErVqwUQ2H8F0F4IMSiD9ocirkq3KEiibzTfEEG_EM3A_M5Mkax-PTcGXdkaLJkKb1QooMrTZ6FyPWwfbDJi1R-m3C0iM", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110165530928165812017\">박정은</a>"] }
        ],
        summary: "관광 후 피로 회복에 최적화된 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["부드럽고 친절한 서비스", "강력하고 시원한 지압 마사지"],
        tips: ["많이 걸은 날 마지막 일정으로 추천"],
        hours: "월요일: 오후 12:00 ~ 오전 12:30; 화요일: 오후 12:00 ~ 오전 12:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1355 Pale San Vitores Rd, Tamuning, 96913 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1125999653901333374", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Asahi+massage+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "리저네어 괌 워터파크": {
        photos: [],
        placeId: "ChIJfWK4gnJ4H2cRguIdCShpZgc",
        placePhotos: [
            { photoReference: "AWCwydhm_Mjw7WyriYI5uQDfrHyAUk4YqWYw7MeJg6zpHM6UjMEBM8F4EdhEV5cNDZbTvow4Uln1tMIbj6PG-EGLxPTZlp9QNOvjDp8s3QtOFQlZ-uEbeC52yJpIg6WhnZbSjo9RZkMY2VWInYGgGfCvEMJhD7DSGJm5Hj1AVgP4rFo-wlZYnQG1wjOvy_bfdAel7MN4zek-DS4_jTq2G6vsmuO2qVoMcwalreaz90VN3TqDtGEyee33qXeQpJzo500zISHNTxIe3TLuw8YbSqFFCpzSQiYp5JB4WYzt19hugfyDPoNGJZEcGMRQYSGVGGTAzoJwWeY7v0k9bdMo6qmz40BhCDpCPNerVWbOg3CfxK8Xb4BQH3T5XXC0DgdGDtZgwIdMqgvkteVdVMlwAWSe5tu_cVRueRrqe7DI0SyMcXxKayQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108312594310588256099\">リゾナーレグアム・ウォーターパーク</a>"] },
            { photoReference: "AWCwydg_sykUXwt2ONnXcHZwMOAPTfo9ENV7kyGFq4Loe1bet-xUpOCChzdxy3gg3VA17asv3AXJ59xlab5f98CADeXjTIcPygf7j7p2-zuWR0ULt0ImAC42YaBpyd184vP2Luf6TpSRvl8lD3Le4S7L9HIPo7LIjz_jTeKojTdt0kLhT2rpiulMAZIwrn6E-2oJaRMLL_pZnSLzsK2ouh-91DmCx5Ml89WolG9SWjfzYFbiUclEpy0Qp5hvFECyqrJmO2TA9Qx3hMV7dkj0mMlivc1E5Y55biDRsi1ueREpIQz9y85Vg7jzcW5fEY_i8Jxm58KWyzTHc4UktEg4yr8YUg5qMp5XZjynzzcH-s7bMLYDpvhdAiX5QHE4AWW8L8oh2_v5ZvT1KnYDUZFHgYtT2iA-5-SG1SiezN1DaGk", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115661788254109253573\">강필승</a>"] },
            { photoReference: "AWCwydhkjwStJ3U8C1cHN8CGeMVl0X18BoFmaEDSr40NDYYDoIqE-NV-B9hh8z7tPcndx0xvEqfTurJFsVlFZgfOqvjSPK1x2cZG4w5hsCj4X5IuOAnRFbYCXWVpN8y7XwLTud95u0ZQBDyOlzO-yMxxU9SOHIffij1EcjpVCQAck-iE7b5x1aJUgLZryVi856RTDxiuGNElyzGK9Yr0voM1Ri1AwW6abMcSDQyjpmGz2o9BbYAYEKKfRtrX3UGLHyDV4dhZzdZSu6SDDEl3LdajhRpVxhnNSUffrgOYvFenb0YBPVqE6mqLMMX4KTaesL6TTc0pQSN5MzphybucXl0Y_vFLns09TzWKdJRsOWfSEfVkp41GdAdUWqbFT-bBJgT7ZpdJLaFPzln-vWrdQ1SwUqRl3W-fb--PfT9rkJLoqGlzzg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111370976623612080192\">namyong oh</a>"] },
            { photoReference: "AWCwydinieJumd1TMIxXDkz8-cw-CZnixpiNUV_DsrIp-Uw2P44P_Meory5O39PLqDJaCfSBjsPzwJCKzfgnfTsmcA8F9ZDDZd8RBX9JrUNEIuvnfT5ij6HzQipaxAWtGGUSJosKvf55J3AFXjXOg50aIfEqZ0cztlXy3z2_b31rnkYSV2b72WBj9lKBUiTCM_mLwoXD1jGkgO9NuF2WSa18E4crS6BMCko-fm3weNxV5Jt5B-MgyuP2jlfgorf4b0c9rU3nPgmUd9DYkA9XtHHovNeVES8ZQ7RJlEWg7GN8SdMyeiCR3Vw26_CphXihAhR_5LcFG_ENyJLCOFN3ePdIixfetr08A2uj3K5tIPLAq6BkKBBq-YVEQ7GmBIi7sepIYP5lSzDHrwDWTyzvM2yPW864IoMkGk_VVXgbYCIyL8byqw", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105937416553572801814\">시골생활슬기로운</a>"] },
            { photoReference: "AWCwydj4NQBysNEuoxjkIkMlR9W3ocMTAZpvAqXVF0JfN-oXPDhJk9vb28pwUrJ-nphzux46LUpERCqjlkbk2f0dtZwod0L6oJCqUGQTtKWYuemxA9VqrkhNx7BKi2UN8mLynjj8y80thub6X8unk6awaGzYhjzUKyEj5RNurcuqbLljlK7T6YnUWdVVh9DCQQqLFAussH9KTF_eQR74jPac1lrenqAuwAwHPyJIEq1Gx0LZmJVIYnPrP8P6iMVFsfEv83P8e9EQEuwQ4PzlzNdRM4LTk5_rgkMMwamOA6rlxOsGNxTDPZtz2s1_pwokPhDehXLu8HbBRCbRwAY6lMZtYgB04lprFcSj-GTkaAKfIQB7RKPFFJE5r9Xh0bTG4KuaDzgViJYt_LElMFOW4dv3feN2cC1gyK9R2noghFrhGt3TC-oy", width: 2226, height: 1412, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108312594310588256099\">リゾナーレグアム・ウォーターパーク</a>"] }
        ],
        summary: "아이와 함께 호텔 내에서 하루 종일 즐기기 좋은 곳",
        updatedAt: "2026-08-16",
        highlights: ["충실한 워터 슬라이더", "다양한 수영장 시설"],
        tips: ["호텔 내에서 놀이와 식사를 모두 해결하세요"],
        hours: "월요일: 오전 9:30 ~ 오후 5:30; 화요일: 오전 9:30 ~ 오후 5:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "445 Gov Carlos G Camacho Rd, Apotgan, 96913 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://hoshinoresorts.com/ja/hotels/risonareguam/sp/waterpark/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=533229226562544258", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%A0%80%EB%84%A4%EC%96%B4+%EA%B4%8C+%EC%9B%8C%ED%84%B0%ED%8C%8C%ED%81%AC+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "타가다 어뮤즈먼트 파크": {
        photos: [],
        placeId: "ChIJHYXsP_WCH2cRELXOoP1qx04",
        placePhotos: [
            { photoReference: "AWCwydgCLm4u33MpyZjApUBrzYqrCgrODsGN6FJW1UPvZIK4g1eaq-PIlcYvfQnHpqKM8WSOAN9jBCYQsS9LLFxQHm5JjKS-Iys9nHDfTmv8fA-PpIhUTjzx_ltRfFcizfw_VxbMM5czscBepFl3PfdPbARNucAkklx3Lrb4Q9qT-Ys_NGxKSoD8QEOq6-obO0Z6rr9m01ilZQpfC9idYIeBSVswOFVLGZA4ssYZQ4IESoi_uLC6C-SArz4CZbGsKDh6bSv0o8BDUYpsBXPbTJNgA6cR9pPRPa2cztJPWtFaUMeaLjenZy9lRvTk200DI8hUkcKeProCIBqqSRxposgp4uhJbPj6uq34pci2pFBb0fluY57k8evOOaHut_CnqjVazsRwU2QKEt3zMRrFS3vB8zJpdvhO0dkJmArEtZgBAInzWs0", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104603695562685802436\">Keiji Kinoshita</a>"] },
            { photoReference: "AWCwydjWs98yBexxg1x6kewfUnlHrYFZtNPIKe-4Ps-CGZuwKRhAS2M-go-mL8AgIbT6Xqs2Mu_XHlJesO2xaxPDgyaYKZIwFpgjlzK21xbdVtd6fpIbRHtaIqwClY90sxamgLyDNOyNUpJ_sIf3CXkJ2CXD_bJLOE6lvWAUoeJT67qjFvtL5ut2z6Uj5MZHHz2LkJp_YE06aEwOGbFFpwaJPHzUk-zhAsaNnKXVAPV7SvTpplnK4WEcAo8XpKQdNO6tsXrLfK9VU8sWKYhKPEDUMWcbHABcuVoISfwDgUsWDHraIxg93M06aQPcta68ekWFlG3oYo7HJO8qcMFdQRr5wM1VU6aQRqFHG1-h9bfTUUgr5uosRPuVqYwC1sx9idlQbZOBfRBaIipPg3XW2nV1c0wK8KvKY2-GkQvI978elcPyNA", width: 2048, height: 1152, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111878079877990312777\">괌여행 길찾기는윤상의 로드맵</a>"] },
            { photoReference: "AWCwydh_TBiddAa0F7zyeYQrGIK7S--HIDq_EkZNnHILMhTyF0MpxOa1yxiecA1Pu219uZ3-fy7vxGLY4ZIO_6moTDgPkXy-8OwCWRTD3aBic8MBZrbPZTUfa-CINV2m9PgqYMxmhAvrJoZXPqb0J5RyBsC26G1o0d2SKBInrWbQmZHBGlrl4sHFM_AT8mmgQWhFHTho8b-e7hhw_qok1nCuaMlRQAQsMQaQGsYlArfMjuiXIYZ7LwQebPkszCYZ-s-VkH3ON1Gouge5psgU90fuJg6rPvU-nxREvZaLSUZ_M-2z3NzsehNNsbfgO2SuqSI25bisF73Ju5QWoDxiM7y6CAIhwCsv9JuREPZtfgmD6CJAhpW1T6E9v8qoon7k2ZGlH5F-MY8R1Bp04kBLMBhYGBonY8J_pLueedS6BEPqTclxMOWs", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118200357145850936437\">Taro Harapeko</a>"] },
            { photoReference: "AWCwydie71ohiJ4FdVS0JLK3xyaQwY0IK-PTfxh8KDZQJrEkRVx34jDiL2gFVpvJPi8ysmbu54q-0KEuGD2a3iJkkmCLAylOPigjBqKr7jeVzOF8-EVf6F1vwr0F8TAIi8pwJQqkJzobhswQFp7GU93y2GGedgz28muqMwlJajOocS6WyXxiGdlurCOHVdy4ZkuDFcqCsbYSyE88188EEo8UvW9mYXwrOIINW6rbgmiWpwmxyvW9R2zhRez2X9rZo_tObo7eKoZ5CYI4AbA5vFxw535q4Qo87XwR7SJ6scSTD4stY1DwUdYUY0tp6loClz7ziDp591g2sD6bBxEc7nUUaVSigT_-lFl6E1RGkfwMHUGJmr1r4SOSIr07VKDLKzAN-kjUH0tHfkavJwf2RPk8Nkh2pnMpnZ9TLgt-5IcTt1uib5FKbDtoVO33iav3B5x3", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111665249038594084521\">Diana Laska</a>"] },
            { photoReference: "AWCwydgp5IqQygSMvAtH-CPWncm9_jSF2N8D8WumiL7Ok5PCxOtAJS5cTUd-BGr-XRYDLu4iyjo-99DmNkDKtrca-gngd5VgwHJCH9wh646v0009hR9O3sTTMCNkZLz3FpQYuoBXb_5nBKnfpsOL00Htp6tE_G5fifH8iNELjROA7xWPhrttZwIXCUtQyrYBMNnwfWkNqd95ufNoUWmdAHY2jWwNh-p1t3Rmuph0Jl0EdP95rk4Lq05v4AZyhPHYU_a7oUZjc2UGDzOmZ_aW9-9T8y9OD11-V_6Pi8T6IiSOyeR3utvknGSQTm1KZbd4TrtrhE0fvepwXgKUoR9jQm-zxrTnX9UCWkUHyQsxZJbf2DiVq3xsbOaBUzGGrWNiD-dp-gkX5RgyYqdp0zoUoT0s-mE3_nvt3ZdELLbp20A9iJU8arlV", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111491522120246363274\">Shoko H. Celis</a>"] }
        ],
        summary: "다양한 놀이기구와 친절한 서비스가 특징인 곳",
        updatedAt: "2026-08-16",
        highlights: ["친절하고 세심한 직원", "외국인에게 친절한 서비스"],
        tips: ["마감 시간 전 방문 권장"],
        hours: "월요일: 오후 5:30~10:00; 화요일: 오후 5:30~10:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1425 Pale San Vitores Rd, Tumon, 96913 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/TagadaGU/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5676623492880971024", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EA%B0%80%EB%8B%A4+%EC%96%B4%EB%AE%A4%EC%A6%88%EB%A8%BC%ED%8A%B8+%ED%8C%8C%ED%81%AC+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "플레이타임 카페 괌 실내놀이터": {
        photos: [],
        placeId: "ChIJ9Ynm-1aDH2cRQREDMYhVKwY",
        placePhotos: [
            { photoReference: "AWCwydh2UkcvMkica6Dg2GqrYQ8L88NXeOfHywSH-zMfbwfj8JN0Q2_XBr4OfuLvKJ99b1GUtB6B5M6fiwGwosivtX0PM5bFx6n0U2j8wuyI2yvjv8YF4XFlshN3uzkVV9cNIJj5xd8Q1gteVsPtD_iZM1dAyps4xG2fqgNsSdLlVitc-HSUvBmtKThxlFWvagcFyQhd2KyfQzoiOAr2GfvkjO6-8dU7FYQ1cKGQ3U2kl79T1es8TtGPNoUyjOQSp3537W6mq4ZycZQxs5wGmd0mP4wUEx-o48EVdGoDlV3uuCeRh0dYV-ycL8_PZMxBE9vrDDDHgOiUj8CM3D23v2nIYTtOdPmgg5SXSYk--D1HyKccb_AoPFxUe9xRti1ijuCMUexZ813-9euNYZrllOTukqHKZVRK63TKQo_4U-7aZgvd9A", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104076905217154123512\">Jazel Gaza</a>"] },
            { photoReference: "AWCwydj5qGUUS3wcsOabCWzyhbXXi04ApmNZKeGTsBrYfmSaqOw072YEXPSt-cPiE6eYVye-3lu0-2qqfok1wa1YZh06fjN2VrbxyC-NTCrPccOYOxhFnFEcVcLVtpfHHg7MT3JFlopwl3PuR2VD1n77me7ulCQ9wGJx0Kj13MY42no2YkMLCFKWoTydP2gKXK5oYTB4k4r68O7tEVfyjl4-Tjkv_0IENHK5KRjIPBiXlRSvIPVHDJyhkSKzFmhXd4aVnlL4gqMuwOqQj6hWUVl1-_IizowFRKKsL2Y2TB9U6xuvq5YD829RWMoe5cAlQsFxtY00eKcLGTxfaTXHoTwqfBZgMvCsYkP7drKrJacnveZGTjuOALKkYh0fpYay10SgmdwjZXbi21aFGaLAdOYuV9dIjsHZTCimf3gPHs7NCMC6cVQ3NKKiQNc6i2a7VPs9", width: 2000, height: 1500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109871081308103659170\">Playtime Cafe Guam Indoor Playground</a>"] },
            { photoReference: "AWCwydhxf3tZ7RWKIZ8dV6ooPz6Tcjx5PD13QXfhLV1Y5E9xOmLoPieAaWRpfL-pfySgECQMIjO2i4xGHAxEjBC_CLIZBhWVnviLDUqs-Al8fjpmiBYkgNyS7j5VuG-SR4m_4R9pnCaj_SVCwltHloz9EsXKVppFh0C3QDNEKP06alExlPh-0yHLTfh3RQRM5hFWRQd0WiRoZlNqDbZrlyKUH76UiTQKUGKq3OzHVwLpVKuH7DqrgAfnKb5y6cKq3PJVCxoXXD-XnECOAqh4SWRod1BKw_vEdZuaAWRT4p36d_H_7KPbe0Ou5Kz9qwHeJdp7lQGzPy8lbPVQYOl72OMLJM5y24ss68OlcHVqq3Vd99lrBeuqEtXKMVAlPBDTPw6b-TJJ95YnOkr2_iI8g5c1910Y4Dz07SO7bMva0nx907J5mg", width: 2181, height: 1636, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104076905217154123512\">Jazel Gaza</a>"] },
            { photoReference: "AWCwydhOnxGbv0yGvetxQ_Oj_1_B-k1ZNY8SBD63dY4e-G4osjMdksWs9KQc2s001KVLaPOGMxVIlxT0EDC9Fh9G6t_4QeD8RqEQuK9cOb2iCnqJtaq3aS-4LQyVxwf68BBMOQZDGav-mH4a-__QheSn2W5GMhycTx2JY4v3lb0a2lSLvOOJCahBlSJCEHuNjdYgnyw_3LdtfZxu2W66SubAH1lyZVMqETDNtv6bwtdrYATW5GLZXzL_yjYa61hrz-yAIfFKXXRQL1fYD0MvhYIpcyOWkEIpusG6p05aonHTQjNwHV6I8nJYR5UBGsqKYO2U20FAuJRN7wH56MZxI1WA1QFZJoR70ZgMsAkP9Z8Spg-Upz7BfV9l3vQJ4v7wX0cAQIeuBnvLnBnq7AMAnjbxPEVgcZ6Yya36ciqzkXJNO3sb08JX", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100051324456547627187\">Meravelle Duran</a>"] },
            { photoReference: "AWCwydiIwAz7sQ4wFJOlQSsR4eLFzYGcEfBOA0UdVY3sFU1quDV_DFItd5I5kyxz_og7u6qgoJZcTeZRNPtcIXWiMC7zCIaR4vBFzd0jmJHgajSCEQmVsW5zPQjuzc_GIYsGM8QWgm4jEoYMMKKALYMwmqoSK5j7KSUErUZkYq_mHFThoVZ3DPjMCh2CcE-I-gHwGeY7Wg8CMzdhyqV-uRNnT859HFL3CtYpmcy5IV2dVqcwyST9S2WZQIFRDBew3OvfL_uhWfxGdcJ4J-OQHX0KF1re_ToUU8X3buHnQdIRF_M0pbdV7OoMrLIm_DI_zSHbRm4jUAIgBM02WK7d4oUO-AH99zWRcZ0o7Sq06P42XJgHzDzt4sIXytXypDv_jLWP4H-i-if35kOKS15ulPirheA0s62jLfRWY0YOZfQVM6GC9A", width: 2181, height: 1636, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104076905217154123512\">Jazel Gaza</a>"] }
        ],
        summary: "청결한 환경과 다양한 장난감을 갖춘 테마파크",
        updatedAt: "2026-08-16",
        highlights: ["철저한 위생 관리", "잘 관리된 놀이 시설"],
        tips: ["실내 공간이라 날씨 상관없이 방문 가능"],
        hours: "월요일: 오전 11:00 ~ 오후 6:00; 화요일: 오전 11:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "GBC 1757 Army Dr Harmon, Dededo, 96929 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.playtimecafeguam.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=444543031652323649", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Playtime+Cafe+Guam+Indoor+Playground+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "드림하이 키즈 실내놀이터": {
        photos: [],
        placeId: "ChIJD9vi0g6DH2cRdYWpyd6XDo8",
        placePhotos: [
            { photoReference: "AWCwydjTBBHJ6RBQmKuPPLnxmWrI1_6DtpsIY5lCD2-oXwT0B8PLh7kAvceUWpezmh_6Z86VDi6GgjJz5e-HotfRv9-ZNP2AchSxmoDlTC5JBPvgJmmD6UfjH6Hm44_4ZUG0O7ijml04MWYe_JP7IfNQukC-GxFUPFa_fc-FQ2Er-RPkAxzPym5ijaW27all6ECJgMTV57Iv1CUFWh-or3aSayE43AjdHq_HC5_M3s2CkcfE9uPYR9Ocg9Qs8r4-j_74CYbHKS7Zc1FpH9FKWvhgYmCCRhOUiKR6V9WA98vtZ60WTKaJZhMIC1TshD-nc8USD-qtctHdXd7RuCmmBByTkcLlh1tm7U_NEtjnTxgqWFuSLFPfhCbKwv7JnEwqLt66gPXIz3iK1nwELfFKlIsYHXQ7ub1w6pujT8uvnuXh2BBNdJAYBmqecS_sZ7KnzuXV", width: 3980, height: 2985, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110479849075627116151\">Dream High Kids Indoor Playground</a>"] },
            { photoReference: "AWCwydhMTYymETayjkETmBkRkpsGPpd3UtZvks4S4rmUOccWD1VL9bGDDUUrUKVKYAvluijXeiSq7Z2mqTDVEsxAVV_0GmQSr_88t5iMSUhEWXCzq_eDHo6jSXYhndCxEEaReFRGAxZF70VgL4WWN61rMDv_LjOrf9vOWxW9z3E2GxiQHZqkBwcU3Lnl1LX0zGAuPJE-SRxjmBXAMbFG4_KPQxVoH2PO9VmMKoHVoBTeJgYKtujX4JvvBETcKpeuYhm-0PCtTIFRZqYsud_Ne0jo69FDdqzkzr2mWLF9L5ePnbXkHj0dMMaemZimvdkml0HylCVnCbCVCs79zIa1VFUCs65_3H_Cr9H8WJOTigmZ6RZn8RJXnTq40-vEKxLKphNYmAmpRSSpMu432ddRJw78kwvR81A6vAGICETG4N7j0__p5g", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106958862597929499234\">Heaven Park</a>"] },
            { photoReference: "AWCwydi42AlVNITE-fiJNtLs9Cvm19vRlQrpOYHaKQcrz3y8rUx637E34A9C2-oY2jjYolea2XwEJHHA7ASMUZlgoSHFXFxsg_bhIwlY5EYcTUlBG8m0Fyr-rBKnJG3isNWl9SGmcMhr_QvfoyIsVf6EAY2zrFjgNNIukl-SHm4dCtSmzWd6ztoSsQzaQoJgwB7umfY0p8GCCjJX6Jyl54nKrDR9-c6kSlMZ7xU1Egqh4F99IrMjuF6Fo5pD3L6kt1kZL72ccOsTPLtz1tQyan4TYJqR0IagdSfitK6-iWS-rHjIJPMW0S39YhPzV_1tvhGrQgWwgsijvzvNhSk8ufagN9Cno-AwCUuRZJNW3PXX00m8TxtDXpLridifBUgVGsjWDIY7jHsxsadN8gzwiKhP6X06lcwO3IV6L840R_7c9sXMLWTx", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106958862597929499234\">Heaven Park</a>"] },
            { photoReference: "AWCwydjRS7zxsrtRmPnzXPSVhhlyX9aJh5iQjCiyFgvGXEMOHGdZgMPMg3PxJBDl2z-VKDNSqexhWGixmQKNMTjflQGaNEe0LPvFu0J60cbo0F8B2yKQyooBr48MqRGoydO4qleOZkIr9BYx5nYzHOoq6kon4aIVHeyi4OrZfKODUrz2SKSzTn7vGgtIWCaxRfWEa8M8ItAswuS6jEuFw_gUcWqNEkHmvIvquKUhs8I9zeM_-OqF6AoDGC0EJnQ2328sU6dQU1Orp5KZq6sdzl2vakdzRlvmOZO7_upDkLRLOyV4DoGxWQilB2vFhsRwMQ6Ifh-El6rxYoytFoZx4sCE6K98dbSJtJ5vhSfGeumv3eQWueXeKa93wwWoVJ1-wp3sZJom3YsWqnh7s2xRW-V4XRUqsz2dr7UbqIrs2ed7_6oNQee3HbZGYnGj476rYQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110479849075627116151\">Dream High Kids Indoor Playground</a>"] },
            { photoReference: "AWCwydgDLomg3BPc1aOBkAvaZWUMenEJmrl-2mgYPKMkd-nJ1HkfvuagVDxd-g8sYAKh22YEf1WFDG2b6CHxUzDhQjS5g437SCHBSWphDVt19XQIjZ7xMyerokhLKfOQrbJT0OW47MRsSSwp9snSWjQ1XHOjopjz91s2BQwxWXKj-jWIqjsCH1bRXM84dRK-R0CvFNWmQYIc1ASpLmGYorW9F-wc_kzVXVJY4vJOju1qTBown5x-aWWwHQByEY9GO6R7Jhp_BLLhoZPbWr7RUIzazW34bgPmhCkdGK8uiSOcsUM0mm1j8zeQrlHERbo3DAiSq7-zANTwDYkY1mGXI4xN7xlyI9JgM0rBx1UkltIUAUKM-Bn7TXbjE1KjBweAbTq-5oP1eEzwRdj_IeHUCXIyvfipIWh1kIyNarg7yPY3DIubtvl0eaYOdZD4P3Gvss5G", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107895945255876484114\">Kayla Cruz</a>"] }
        ],
        summary: "높은 평점과 훌륭한 고객 서비스를 제공하는 곳",
        updatedAt: "2026-08-16",
        highlights: ["친절한 사장님", "가족 및 아이들을 위한 공간"],
        tips: ["축하 행사를 위한 공간 활용 가능"],
        hours: "월요일: 오전 10:00 ~ 오후 6:30; 화요일: 오전 10:00 ~ 오후 6:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "185 Gun Beach Road, Tamuning, 96913 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/dreamhighkidsgu?igsh=bW9iZnowaWNia2ox", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10308343580219508085", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Dream+High+Kids+Indoor+Playground+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "슈퍼 아메리칸 서커스 PIC": {
        photos: [],
        placeId: "ChIJeeq6XNWDH2cRTLVADUbE7xs",
        placePhotos: [
            { photoReference: "AWCwydiQ63YVdaTyelmGDtuABGCTRrepe0o677ucXnF542o4DFm-vUgY41laaxR9EW0uaj6omgWhnvwLNJi3TnVPBoPQsDnYNNmJZUZEdDy03ZZ-plRV1aQSkh72EZ4TCBanIs5QP00GontrAI59TVgQpkgYAfiUE8ZWYUvzhS6T83UsCspDPZrO4c-XcTyasFf-o20cuoAjLYZh0474NJHQVWN30pAJNyADLhidIvKUIGf7PliULCWCiG2t9V1mqXBXuxNrwwIdCypSr0HJso6XYIoM4KFon7rSVeEfHhH0CUWPzLxsx3CWrtDwt5fP0v1OOk8DLH5ZU-iVkXpV-Vthh3w6xUfs-iLqKyx0Zfutmjw2T61zgoWA78BK1PcI14bXt5-B14JbuV6DN5YG5_tNJk_QWRMSxP8MmjmiMrJd9X487Old", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105994152483958136850\">이영석</a>"] },
            { photoReference: "AWCwydjFuXpmAvX52wbp6NMkh7yrIwUreGuB4wD6RUhGSVa5rIdwN6dQuKEaCb1SAPUDv-wUxyFin9NP50c0Xqua-j1_aKWtitF5yVXa7NQ2AnoG-VpZigOSCGXOdLj4Qx-FN04hGzGMy-E0GU_rr_OGDqhAECJ1laE5d1yIKsu1QhoBtqkDAQNtwH7mV-j0-ai_pNuSQBr94vwkWIEGkvxt5WPWVfFAYSRuQ9a0ESYHWHDmXtm_6ORiS0i5Plmo-YvU82eNWfH3li2IbKLHSKIwLOeAZqt4ud0Lqu81QTXV_n3C4MUixu4B2hvxwdzDnCyiAeo9lEcv6WK2dcmEIlIhTfdPxO7PL7quMLSOVXybuh22z5tVPNZu2cK80rwFWwfYmpQ5kjkBXrga91oX4iUvhz8mpICD5RctBmDv7p4lxIe41TZ0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106713198086181388781\">Aaron Perez</a>"] },
            { photoReference: "AWCwydgD8Tit3GQRUmL1vRr9ko2UH9TGGGobGw-X6Av1AdUCBA4xNLWfYvyDf92bmkHw7W5tnZOJ9C4UdVxOdsYwqKJz_MZ7vVtVBTD4K_VzonthxMHwl3kj94XpBUzpv22isl3tkWmezFlE-V9KFYwOsdN2bggDqUpsd-8-QI0LfO1cZbrXRiDEvSTv7Lgh0wLD12fB6Plb1K1sBcAGF5sID2r721neLf1pK6DQDx0ih8e3sQIw8cRjzZymlBIu9bFsoNmI8441Ta9_kXQshJaBXZgVtODc_xYqeF-LdqtajqIiK7_lt65_ZL4Rkisl7y0E-UEnFDQLqEIk9dLJJBgZX1YaDUZ83t1wUBKG1_CwrLuX31Qhbvw7fvsH5ya4B1AzF9rkwT3l-7ekhTX_jC97Hq1bmNQKWdNcQhp1KK0eprJpt9eT", width: 2066, height: 3672, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107198177219771418371\">K G</a>"] },
            { photoReference: "AWCwydhEiwvzNxHiB9lg88qN7zyBZfHCxaJ7ifToU_eqWCzj7zApYjlGKugPdwjBEVQ_K-aIXKEc4uW6RP5gXqkf32Hu4sRlUh8P6xz9EkVE_UCw8pwDUcYs62EngbWuhhKuLcu-AT_tpi_9G3QLyWIqwOWbRCnBvjcFB1NDKBSlCu9qc6YB7znAUx8tNSk-cXygtk0cy6Uhg7no5kENhp8FX-Y7IiheN3EB3uxGeYNSi95p1ZUEIRiOWA8lY20Obk0SPfTLFAsh4hVuu1uWwoCoUuJhkOq_1gMfj4nghzI_1gchwmXXrSRsPmprINh2943meNlmiTT5e2eyjEm5Pv5H-GJWZM1QXEQNcdF4YM69acmSm8rYfPGoHXjW7ONuj6Zqts-MRysBtHUVM30NTayqQr7GZcNA9PSyzHn0c6k6RI3SPg", width: 3472, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107637358985173682720\">kanji muraki</a>"] },
            { photoReference: "AWCwydgCqn4cdM9C-mIEArJo70BNBqebye0M8EMpKsjzFHTE00dWLFe2faWC38s1UZNkXEkjLPVtCPCLCQA1wkj4czHHVi47FuAmVzn3iI40INWq54DO7NRrcAKFur-KCklwTrLidoNvQhrNTyBlwd6dWBQVa0Ln2LQHSlYPc1nhf6xBwEbMokhMu4KPOYKmJBHWNMRE-zohlrRLcbhyasf4TDTTWsyH6wVKTBukW0bSuUqmwHNYboBc79qtnIo2C-MX4h48JIveBHMOWp6BNAkNbT8lM-MQfkpaCZ1e8xYCJgcAmcqu8XILctkKcdWyHNbP82PQoAUW8xsVQ60As8DY_FM9nEYRBxe-da5OnFmtR2UedkVjuu-cw1PkxQEKkVVyXAfWXR4CX9gqyLsQ7n9_0tSx1395G4qkbKdKxOKpd_0_4Q", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103967282647207734093\">YM H (hoom)</a>"] }
        ],
        summary: "높은 만족도를 자랑하는 최고의 저녁 활동",
        updatedAt: "2026-08-16",
        highlights: ["아이들과 관람하기 좋음", "화려한 공연 내용"],
        tips: ["사전 예약 필수", "예약 후 바우처 지참"],
        hours: "월요일: 오후 6:30~9:00; 화요일: 오후 6:30~9:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "210 Pale San Vitores Rd, Tumon, 96913 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.guamcircus.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2013043363607000396", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%88%ED%8D%BC+%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B8+%EC%84%9C%EC%BB%A4%EC%8A%A4+PIC+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스쿠버 괌 다이브숍": {
        photos: [],
        placeId: "ChIJraqjNj55H2cRS4LJxG_jHD0",
        placePhotos: [
            { photoReference: "AWCwydhOzPEbrUsnnc-WKGkufRm6qovunrj4-BUDDq_uVfEYmOM2P2DraiLRbKfB9S8YTxjUJ0Kcf5AYYPTts7unxxc4wVh2Axx76pXY-OFaUtdilDG18qMkOatFRcEf1qquUA_mkgjnHQ3mjXbq45beRffHS6FlKOe8SOvahgdf0R2pCZmiDFZPNR1cPYB98qoM6-Ij6Jeme4Ym4CvL5KSdk_FFVpSCMIeUuxOmUlY9vevLpk3CbgfE7ETWx4gislZX92M3iIERT0cWODKznHqB1c09RNVFQlNXiz8YzGs_sRVUFhAPnNWoZAc3CdewCmlBR-tEaYYzyJjsVqpt6zE8xb7WjGcXjlEPnEFeNzSpyPTCHadV1qcxaQOCC9d8q1R3PSq7vW0myuYl77bXfEXJ8Bg8AmdnjdAqIFsr60-YHEBuFLEi", width: 3072, height: 1456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117885789942132025102\">Mrs Laplaz</a>"] },
            { photoReference: "AWCwydjRqvzFRvJrtZdItaAwCJbhB2psZdGTA6pAxZNt3G9NI_M_ygcJa-nMt7YHZbH5niLl63KJFQSG_xzB_DBDEIsZ4_P1inEwdbB66gPWxwtCpWQyk-2As1P2b0H1yYdeXniqd2yHHr4TyeWkdSXh_eiLnXouUxlIn-aQ7P48X8QOMqFBiwGMzSyaqknUThYlFz66YJVQQ806VOmqOXxzmnmgm3c9f9PPRlZjNOcYNcQEsgOI8t43fOZQgo3ZODzNcwuPdZSKqvMNI5FCOJAqoubfzSOHRctZxgdVpt_BrH4TCPQAioRXETtfmDhffGXJmpsCR7r7mzdprLLCewU50Bt_LrVP8b3dBG6ufIV5KLAHDCSpKIfTA7h4M65O-p93ZNwT6FnFx0jRnv9RA1-9wmvOXLjs4X_f56F-IbZxizTc2nFvK4XuLkypAhQaVBAd", width: 3456, height: 4472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103515344095170466862\">Scuba Guam Dive Shop/ Axe Dive Club</a>"] },
            { photoReference: "AWCwydh1U0QKAydFIFqBs6y32T9ih9Eqb3MuhrRTT-quFW0J8AZKC5ZQN18rCosicFf3xeQJ-3_ShAhNOXT0x44i9yIHOxSAcjWgH1IcA_hKWZUjhq3i1eD9mtd_TNcDdSRXlfR7-tOWLp2DZkcVkA974xF5N89LufLsyoyFQkbXzq3ifHNW25wf3bS1_0y5eS8U8D7bzPPAZBgAc3eukNjp5NLF7_6YXbBR5eAlLWZo2Eohxw2qmcSm-AkCWtbVgwX3clxyvrIDbi72a1M_s8It8_ZL8nYYZxDrfl5iRDmoQoAge5RzZr5GfcFreMoafdJZBzgPqyCmJtYZMmPKM-Pl7-HV_aq_dL9pFVGu6nbdlo-1K0283SjQRs7hZ9x1SA8xRnC0jW5OvqUiYPEP204Co91GQnJxj4LeiOnBd8cjrf2f-gQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103515344095170466862\">Scuba Guam Dive Shop/ Axe Dive Club</a>"] },
            { photoReference: "AWCwydjSmvl6kjQWTPQwA2zSbSPdi1K02IsMRcXqiMpPMmYEexryQeTsBkGVTrPjCj7SnlEC_cnjeQ3dQ4peRizgNBYFg_z3KptputBH9kd03T3OqMUW685RBta3o4WFq43Gtcm0Ge_fbpFSMVvJTDDbLTiImr0pF9XpynJUwOYdDX0xUkb_bmnQIpcNqM3IqSOzJNfPWD6sHlDydodzKRCAz1aOdq6OyukXm4cCPVWbGAip4QsaLl4UNDfQyAWRiisX-hDPIupfJghmhbSg-yefSZZ4K3mjvYQ--qvHn-7cFoiVuQRhTjy5dq8EP3H75mQElNk6AxqR8hye5WI8Q_GOym_ucQHTFpOJrjmvRsRVaCpo84h_VYXiVw22pl1udOk29aLds450W57jlM2PuSHg-j6xSWKXsSZjaOw5UVe8XoxLmwnEZ79mTP2-JSh9Rg", width: 4455, height: 3341, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103515344095170466862\">Scuba Guam Dive Shop/ Axe Dive Club</a>"] },
            { photoReference: "AWCwydhf5O2AgOF1DAO9j0VGsbEoekYZLVU6FHq1NBiTAtjSDyBpplrgxlitz1WHsE_T0fAx8vYHwvPoBL8wP3eNMqh5J8E-H1GiNDMajnC5mySkoogBgBDQGAz9MYXeouox8BtY8IGaNN6kqq0nmcQz4epWJKI295-04scueAY0j34RqwjPhWf-CYHpgFw_w8T3Yn-GFErHvJT8ZoX6mFmo_RIrpb1A7LUcUfEBAbLJjhaMA1m-N9KTqIq-dIoovpScX7ID6gUkmYIKHix587-1kB8KwHKh7GSI8pmp4EDnYGaHePu8226atgG7xywY_iFWcqQmvfA8Z9O5fExbY1O0cwaUbmZqA-eu0PwnY9OBUfdAmCAVuoc7dZR0zyjv-d44f8T3BpveH_htHJAoKUjguRTECAlZXNLh3-nwx2tWM1mraVrQYGunqWAu2rfvWyGa", width: 4493, height: 3370, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103515344095170466862\">Scuba Guam Dive Shop/ Axe Dive Club</a>"] }
        ],
        summary: "전문 지식과 긍정적인 태도를 갖춘 다이빙 커뮤니티",
        updatedAt: "2026-08-16",
        highlights: ["전문적인 오픈 워터 코스 교육", "유쾌하고 친절한 강사진"],
        tips: ["강사진의 전문 지식과 인내심을 경험해보세요"],
        hours: "월요일: 오전 9:30 ~ 오후 6:00; 화요일: 휴무일",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "167 E S Marine Corps Dr, Hagåtña, 96910 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.scubaguam.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4403644604843917899", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Scuba+Guam+Dive+Shop%2F+Axe+Dive+Club+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "크리에이티브 인디드": {
        photos: [],
        placeId: "ChIJvbQmk16DH2cR6vzpYlI_wbM",
        placePhotos: [
            { photoReference: "AWCwydjW6tWW9qHqAjA_52-KInO3LL58YEFi_2eYaMyKggZcHkIhNO3pPjsu9-iahkcHLta1mieQ6J3VSZMG92MlZP1ByaeiFqXTni90xlEWij4vyv-28MaO5dcn3cUR9MvQMXnqU11Ik7pZRRMSnoDtt-67bFgixVTkOVVfiAfhkLlaaNvmZKsmgNi_SInat3s3BqTCokPSzlRfLuACSOOvv4LJIxcNH_0OToo0HxR01dOdK-V9zRLHoq4fF7mzHmQrzvQBxqmVtjxx2w0JrZhqNCiz6oj3u6VzT4pa1eEcZBN-7bX393szNnka_2VQjHj2jfZXR6co26Ey6R-kiWD0f7EmvmLMvAcsDFDt9DKjlCBb4VQ3b2z6gceZRvOHA6bGcmohEyJwf_2tLxHXPkPq7YAo45a3Sr2owX_ygENx42fkK_7eBJrXdUys4Y71isCq", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102115446162053598634\">Creative Indeed</a>"] },
            { photoReference: "AWCwydjRWHqEy1MArKbN6-krlkr4rWs05UZRr62LOq-6wkkEtSUj9fM0-k3plmSfrgKNSV5ZHzeZGPE4gmMfK5-faonmOD9d9a6J6_-igWldBo0vbElD0NXEvTYRhGqL7dAU1EoKmqGxc6PqmymJUrYJ_C90nu1ppCZLjlw8VImqCXihzLb_3h5ad2BKsgQEDyhaiDjuzKAn4Ry48xQ7VcORx7Gu1z64aNscGV3MU6LKrJMEtQLhOBQfJQMCFa3j5B9cAXmvZY9i_f6IlfIuP-UWkS8Ll2TVf7xX7jdCGHiIgVXRO8LF2kTQt42FHJ92BIjiP98B1-NLu93MasneUqe8tvi1LpEqeyOTVdBzgPE5O6lsD2BN3hccs6ri9TW2vV2K6NJ1bD5RFzSZKlL1kfEt_7wucVcyAIJJvfnPHlAb6kw0R8GntFRyEIIBIto567ae", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110291007985527463358\">Michelle Pier</a>"] },
            { photoReference: "AWCwydg8VNScq3FAtat2WXG-v6OT6TkEsVKU_5wmMkDrpcPBDg4a4oLhQIU1id_uFSs21mIvE0nPrhROr-urgNtez7XdQ8sCuFUpb6o8jLgiRfRoKiPajCa7f66IDzemi6NakNgyuzIt-d3xOmkgPaNyyRs01kAR6-D39eaCVfEMOkAXdg0AZA640qNLfze4j83ZNoFaGrw3ZnQeunjHAMMuKTkRA1rYeKc3xgWPd1kQGtyKre1pr5l5XbELF2bGrW896zlEm9G9dA7ro0klmnJG4U8OvXSoRdb-fsqIfn_tuX5I5FHALSSlGivYm6vpM29bIQFVgKjYFeab31IepKIjvjCdIVgjoGJt5CHmertxDFbYK_ZXEUs_J6lNQpvqHLZqeKTd9t6MKKA_pWLMRMAXaDrdcWpgKkBpo9zC_GQxssXTTkpGtQ1dT0drtnH4g-9r", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104838839856658623829\">Brittany Nicole Ramos</a>"] },
            { photoReference: "AWCwydh_fu-hik_EWERlyYfdmwZV9s50SS096ThupdRHP7dGputvrpj2Kq6xACecsdipkWJbMsjshjGUD7oZ5vFgVH5w0T1ip7zqxqfj2vRQzE62Nst97CKMlQSYcOOvGc0BQTyJfbonRf0mES0exdiB2p9E9HTyBqTgyraFscWCeXdhs_upeMLEv4mBvf6gatK0_9LftWbSdws8Ssigml1FwMUWhHh0z1eiPZdhfD7G1ISRhcy8lh94l7dkIWOAEGtgkzebsY-MvQf69nsi3XXqd6zNr-52oyMq_cvgNpX64az09UUXZ--WK254I3k7WooTXDqHDefr6KP1AwVgMBXI5PvtJZ-VFgv4BqGa9WN7M5Ztzu19JKwYtn12GhEkAqrl1GL7fZEDSxAfUVeV2VtHD6mMJqz7yBVt6ijsWPCL1knFITGyGa4heaoFBZl9hQ", width: 1200, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104402898298662028891\">Che Rafallo</a>"] },
            { photoReference: "AWCwydhumxdXyb_A_WlVm0IlrlzwYanyQXSjNQiQJN1_VEOMTMQwI9Dbaz54UnQqmBBwTX0H5EYm-XVGNNQRAcAPmIrAU_EUh-GWnb35jolgrjE5uA9wamjivp3XG_H0dncc94oeHAGAcYMllEBYbPbGZjXFxNSNTeAByFWfZ-NwV8T81WB1xtR6FpAL94uWN55TRMI1b6YXhG_JrC3p5Q9Lhm07kmzM_7RAB5VF4SoB81WMwfOrcA35ttlfnBW_gMtbRbrhWUoQEb-6qfuCi9JOuPNY4C2yRORPUv5oAdVNjautfyPQPa7wBELaC3wAP3GrX03NUU9OEDQZ3zdFZ8GUvrlYo9nVX2FHnwEkj5wh1V9kw-pnICn-dotXT5BxU6YgToKvvPgU6BZguG_aoc_2usyrj40Si6MwUh2b7LqbsAMbh_b0OZ6eZvM3O7h6Qg", width: 1200, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104793725965858658729\">Jen</a>"] }
        ],
        summary: "기념일이나 팀워크 모임을 위한 프라이빗 페인팅 세션을 제공합니다.",
        updatedAt: "2026-08-16",
        highlights: ["친절한 미셸의 맞춤형 서비스", "자유로운 외부 음식 및 음료 반입 가능"],
        tips: ["기념일 등 특별한 날을 위해 미리 예약하세요."],
        hours: "방문 전 확인 권장",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "Acanta Mall, 962 Pale San Vitores Rd C2, Tumon, 96913 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://creativeindeed.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12952703626373627114", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Creative+Indeed+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "노매딕 니들스": {
        photos: [],
        placeId: "ChIJ432RPjfJaKIRNX3UmDQhnVA",
        placePhotos: [
            { photoReference: "AWCwydgDaNKxPxdRvUYXD_xidhOD0GNmTXa7M4SGfacMU4dMXbAs-4HPsQzAdzLVM2Yi-fsjuN0jUuvVOHTriwInPwMMHXTfrcqkmpW1QAeUuoBZ1hvhmxX1Jm73ADaKuCRiDmRmaKhaNCg1wCz4JJllEx7-D2igntu3_oiRqvVhsn_g7vCrCNXDg_vUQxSRreZU12hjMoqQ9ziSVX-FOZxEcq_VJwAsBiglaE-NCSjIxKFj4GTJar3nnvVo7ex1_zLHLQN4pkHIdeePVD831yfarmlPmztEfUuUkRhSovy5Nsy5z3Eub4y1ues6fKTZ81-s3zmf0_GT1y4G_tKXTx0Vj6RWJhLv3lf75WxZ0ax5SeJPc-JYcBLs83gFouhFK0nbuBqn5yVUsHvFvwJMBQs6dN5pC05VYPFD0Dr_BXYv5gN4iZty", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106120016647270525313\">Nomadic Needles</a>"] },
            { photoReference: "AWCwydhiQ20lRKFUtUbvncS65zGvsuOOYmFxmEDieGuPuPDrj8r8SCwj05mlGMq51OQp6fHg1GlvUO2BY3VDX9o4_2f15mrjbs7A6GwXictxzxiEEZBVMBF4T6JE-qHLj12g_dtf7EjXz-nSRFos_mPDZgBoNlxRMWBecqtYfrNG0T0oESG8JYsiLXuDv7uZdBqAwDABvsnLhZH1HcgLCp6nGeiHKe52rHyQpy-u_pj4_qSb7VZxqL6mWDibtxem8daAViurKfK_XA1vKUluHuatcG5LFRiHgZIat3CJTkxJmMEp7BHhPdf0dsDDuaUqmoVikP3JYQn8ZGhxb2sKJYRsGLuNH0_MZVIG4GN6f_XHLH6bNpo6bBny6tBq18UNn2mBEbcwdcdEBxV28UUVEmwKswiARu4QyqJ_DVCM5vUwyYU", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106120016647270525313\">Nomadic Needles</a>"] },
            { photoReference: "AWCwydjJJ8i82O3fUxEM0fZL7h3A9v0OtidISNBxIl5GBXwUBPkJaQQbn7BLnItRrTAEqmfj6SwNHZT1I77djjZy0FtqmfdggKfgPBLPL19h4aoq9R6uHN3Nx695GkgnrA64rSMwRS4iJ4dOQgOl0o-gxlWQxk7flKa1CP4O-1sdgpaIZzld54MWSRv7TnGnecdZcp_WizD7gIz6DQWSg8BNhyVTa110BobtAeFPwdwzgAqxhbRwo_HqSOysADIltsMU6iK73IoNEzhjT105HCKTzhfk_J_pgT_fnR-1oKWmgFmtnh24ePowUx50-2CozvOaqIF-5bCiDgNettR6inHiOt68HW3ok3plta2l8WuBY0vRYjW98jxWDGFqbz1LBwsO7xcRaYYpsDZ7npUhBsXF31B8WvH0u3cGWOr6rK25dxvfxA", width: 4154, height: 2301, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106120016647270525313\">Nomadic Needles</a>"] },
            { photoReference: "AWCwydjybhVCSl8lHPrlWWDgU2xtkTcJuGaLBH2wX6ugVt9WXQB3JGtOUU2W6-l0IjS9ft1SahLSTFL6xTJF2aAN61ilh-O5DL0Wzpc7BM0Htwk1eRNlmh-WDLKXFFFQnzeZ-Ue7IDPYwgHkdXGbDvUsckU9aPle2Xqeifad2qB9YN_B1ZTLBidypeRmPHX6Nk5287XEWUzT2kBXHKmhxsJS1dBOAlVWSJpS9bcsYbwrLgGgQcBBhb8Q6ELnSYP8-o8zjI3D6Q5zBswIcVrVdp7AqMB0f1lqzBqWnwYqpClxNAbyVKgFH41eTbgif5p3q_es-ZKEQNMJ2eFM8l6OiVdN6CrmtHc-CrwI3vA72t1JLpjJO0M_567QXjl7Z-bcVK0O0Lt_q6d1a8LJbEtMmLDYIJAyFDTgOGR2KHo7z91ELeygqy80", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102944445185736074111\">Scuba Steve</a>"] },
            { photoReference: "AWCwydhmBplvkUAHNlvj_SkO9Uxa-Vat5OlTR_GNTru4JsHD7p4Sz4Cf6XYMyJC3Ao5Xp-R0Pewa93XyWePJ3zNj25xrEQGFs0F9f4w1SKsmGAtBJDTMcGLYXQXA7tC3p3pQ6HpYmI9M2fa0MNVHTLtq5WrmehcCXJZMJCPvTaZRbF6WA7RSb8d0gMhuBdhj4LIvWH1aNPBw7E_duZ-f8ts7pRg4wjkyQ1kTW8kQhbCRrsUQ4sMukh891Hdmtag6ttM83PSuL-daGF7bjak4-wT1TnX9_oKENkmNq9ktdh_WgwcK08j_1MRCNxitCC60uuYqUg-_ZbU1hUndLvXuc6m4p71xoda8m7aolgHLFkYRxGTodUBjMKh41_N-cZG1GMN4dIYWgK6XdBCW_SNPxjj9J5j1Z0gmJdu4xEsgsx6DKeIfQDI", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106120016647270525313\">Nomadic Needles</a>"] }
        ],
        summary: "높은 평점과 전문성을 자랑하는 곳",
        updatedAt: "2026-08-16",
        highlights: ["합리적인 가격", "다양한 기계 보유"],
        tips: ["직원에게 제품 문의를 해보세요"],
        hours: "월요일: 휴무일; 화요일: 오전 10:00 ~ 오후 5:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "422 W O'Brien Dr Suite 103B, Hagåtña, 96910 괌", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.nomadicneedles.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5808835604163886389", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Nomadic+Needles+%EA%B4%8C+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
