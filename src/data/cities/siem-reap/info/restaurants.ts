import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "크메르 테이스트 레스토랑": {
        photos: ["/images/siem-reap/info/restaurants/khmer-taste-restaurant-siem-reap.jpg"],
        placeId: "ChIJM0gLl2UXEDERTs_nITfgzjU",
        placePhotos: [
            { photoReference: "AWCwydjgRQi9UygzR21Ceqf1HzMneJ9rHyXwfhFbHvOOKZpmIq0UUwpHaIzaQXZOxyi0qDiKdz1QkXUbkUezSb3MzRbaDGkLaQZwROBJhUFK4cl0dGWdHwRQgjphetY5JZ1YFuqJ2gqhlrSIAHnwbK8w0ty-Eo-ih6lLRJ94HaS8mmqnHv9dqNp3SIjuoNbu3GzqY_HIAtNsuHMmlU60U2nNmzVfLumAWeZDlBss3aWeOK4TPHa6E6Ci0kdkm09RI64Im9Iwh-l_RR3nfrY533jFyMtEY5BTeaWCS1iiDkfHL-SD3YYZ3i5g0aj8qjI3bCjAMMr9JPyFBUvtfW6IRtwo4mMe0VjIjIw7dSbZSsH0xBJCkB2TxKYKJXbtn9mGZ-Ln2nd3ec7L6oEfUO7f7zHWxbyDezF5ChyCqHJXBa3ee8FvMBW5Nsfty1oN4sABRW8D", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117442574428500604355\">Khmer Taste Restaurant</a>"] },
            { photoReference: "AWCwydgPqDyEHtwh6YSCXvdPRik70BYkXVJt_0ygIl_D1kXtr-LNpCeShu9nbqm9iFru_KYrw4DfJHkK8JmZf50Byt117zOOKPU7sRW6IQMaxRSKJhzwC_J5le5sj9YNZAwq4gMMLsOge43DKRr2bKWTmqM7KdAuyCDvjhp-wOr6hyQm_XP9csK-pfH3HeihmeRQGudlqR75awFATZcfsxSRJ5Yvb1FWeGv5juOrSTKSXTxPrwudU6Z5YFTH0w6ocRo6A7Wa8S16VUhnGyyVLgDHr0mlr79d4H4vAPnK9C1gU6opZWjA4lPNyP2P7C08ItLjyQOUojg2UsGqkJf1TkTtzcPhuTVnfQImYPKO4arBms1EjeFx70a_np-LVKcWPjDtuiMBlSO7WgPrhmPlXxdQeKaq-J93CGmD-cqohnzaiA_sW8vFxueweDRn1oh6NoQk", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103860677393352340481\">Riku Endo</a>"] },
            { photoReference: "AWCwydidCRBnibzjcitPnHHGuac8PEm_UKgedigvGXG6RfXP6bcs2BSWCJnsfamHM6d85kKfL5FxLWEijfN0ZqI8gPwFEPLkMS_OV44Dyk47JUS853QeJ0VMynb_TufcybIkaIXWcGZk7SpgU8KQOb8t02E4CGZ8gq2BNbegYRYagCEHaHKsMt_kwa_cUU7A8_EDCZZ7gkmcf9hjlVbdp9waYpBBZnAvgREaUE6Dj8vC9QZyoO3m1qrx2wwzhvfwcoqgy131724uZO9MwZ8LA0gRrb3HkSL7weDCTr29zXm4VuH563yJYD4n3ivRKyAJZnR1QdF79HeW4TLDWF_11P00H1GqMyqb3FxoCbDOyla1-gpZ4_zNaJySGXDVkLGFGIGQ89bEgqQK2b8gY5QcEPctI7FtoZwXqNMObN8FDoMMI0H77R2t", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103534536501795149997\">Liya Cheng</a>"] },
            { photoReference: "AWCwydhdctyIFY0-tufdeVB6BRfCZ2hfUtYuYAAwu236_o6si2FcrzF95UWaa84WTR7ANrnIwoBDGKCWvMGitR9OSslV6YIuak-PVzRfrvUItKhmsBE1Qa6bIPuYTSTaqK1gjOmYzhwkB1Hkr8QrSc4xngb5gSEgmDT_zQLNlYaUd_lD12RGlE1waB8L1-K5qffaQuTMzQE0ZbOwJ9cPuv7fp6_BXRmgvKmVhvUhn8-mVSRqvyAn4Pr0HfOpjGD8daWOEP-UnIjBxifg6kLAVAdXliA46tnA1tz-USS7pd0I10WX8gD3rg2OOKpKGdosc9mgotn48vQXF4n5_vo4rjtM8QOUcL9165-gZ3RzrUGqJ5hRHIUX0svXSiV2rfL3j58jkDaWEF-1sNjfsI301nKCrzjcZGe2NyLvQ_P28OcmZw0ls-MEhVGkHDDpOwV2VA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103860677393352340481\">Riku Endo</a>"] },
            { photoReference: "AWCwydivBeV7YMpr0PxPB3DaGsF8WcUVEuJ4zjMa3rYgIh1d38H60yyVmMKBlXKG4vuVF_cFH08tEij5xvGFxJbfDmeUiHRGk6eID7aybDSdCRSkTNIPLqzLaYOibMd5r8joW__5v9JbaRFkXVuDBpI0bUH37u1eXIAJGExsjES0qP8ptS3io4M5wweBlKd3KsKTMBKnwfL2sZRwDpkv62Gx4GqFaAhnyK3unKe6hEQOd5zc_KbGb9Hob0YJZV2h_oFeuobjeP0_Rwgsj-0AxQ9xgya_2NHx7mrGCb-zGKLHXrJlX13LqzLtduguHEh30uoR1HB30KF4SMmTAkoUPsi5nphp7P49Ch113MAzGVh03mcwcvWnVsbSFCb8QLWbmm9SLRkwNJ62LZ6MDffX2GHc6PKKg6MZ4OdLGjaKNsz5NtANGndrDYx1PvqYYJLRYA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102101365892083961987\">大石敏朗（ohishi77）</a>"] }
        ],
        summary: "아목, 록락, 커리 등 다양한 크메르 전통 요리를 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["대표 메뉴인 아목과 록락 제공", "다양한 종류의 커리 전문"],
        tips: ["전통적인 크메르 풍미를 느끼고 싶은 분들께 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "아목·록락·커리", items: [{ name: "대표 메뉴", price: "$5~15", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 11:00; 화요일: 오전 7:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3877282856609238862", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A9%94%EB%A5%B4+%ED%85%8C%EC%9D%B4%EC%8A%A4%ED%8A%B8+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "크메르 키친": {
        photos: ["/images/siem-reap/info/restaurants/khmer-kitchen-restaurant-siem-reap.jpg"],
        placeId: "ChIJwWW3bWUXEDERMeHgPmyN3vk",
        placePhotos: [
            { photoReference: "AWCwydhP9OQf87fQ5Oo2Cpd0nEKhkjSbr5o3QE2NWr4xYhazC5z7o-8oaqg8AFWmm0Pbty8va0kPD3qoszi5MMcj6DqZRG6W_qRpy9BbAZrVpr7Xo3sSAPuYkewyw1qXaR9TGQoZ8RL3JqOQME5xn5WzuxlaG8zpBzz8z5GMKd1c6Z603mfUgRKTSyUH1bd4Nz6tK2MqY7I7-c8J8GMZzIfZXHVXAA6Urhx3PvSvX6Gt2jTOihsboDNxSeNX7JqrfVhjYv0B6vyd05v8cisDxQMu5uotEuCO2lqPIN9DDTyruZBIYosDLntjrv1dG7aMLio9BKGICYnrXXRMLC-MnCx169OeEF9XGpkhStwqBiaCUjFH8Ehy19lFinDJXgqTcvkHLSrsDRYiD_-VM5udnx4Tpq5njbs-S37pECfp_HssH5Lf6xfm", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113135521983918485711\">Khmer Kitchen Restaurant</a>"] },
            { photoReference: "AWCwydhP1RHF4Ch_pXecBzm7jWrKKUMHU-mPW_4W-GqHJap8Tc6P-w-rJJIlpcugCuoWRWzHpvpc86HhOhdmoywktKXlxAnJ-FjwEDc9Ikk9vPpeSCYScTNKM7i1SuVIiLu77ZotPaBzGAGWgB4RPYAU32y7vgHX1GJUMp1ZbAnz8CjqdHMrhureqn4FT9NoDWCPN_zkc_nUIl5QbqE1bb1kHX_XH20lI4D_Ix8lKzUZpikT-mb82WXt8kUYT7D0NKktkjKqMBWJEYosmL6fTR2Gv3x4OYxYWBVMVp66m5VeDj0nj-UJYGKOxrFH6qv6ToMFwccD5OIC3cBmBbXlZdmMrNzpT9HO7vm6ZbWQNfKb-Fr_MZNQsNlSCPY-5MPFqXS8jskCO2As9JNgK6dns-wAzq0Js9_3nhPqB-Vg9q5flfURh-dUofUY-EtvWC-1_5PM", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105887129965194582846\">H</a>"] },
            { photoReference: "AWCwydjISFeOiJXJv5RrI7RyERDUhz5eVsa1P22QTLqdBu_wUAPq--rc4oFHZS678FTcJ8bIqq88qW7P1jZWbRd5WnxlH6mBDJ_E4gJ6djJHWL_QBag8Tx3aLUmw5x6-LUrmOR4R2z74jdXQvA3bLxvOfPKnoAQiK5F9ZIULwzfiNfDtPD_MkqYDac_OMUHPSlLVJkwtrq8YP_vbD5Z5zvja8SoNsSZkV3aY4ZHRJTxG3pqpRDBS0iAB7HHn7cdXTXAt9WIQAo0duVLrlfAWsJyNfalxaBV0DaZZZOUeSI26h0YsM6GRhZvfnivNr0UHkm9rhqb-5Tmrs5KAVktnHUjxz_zxd0pke9uixk5goFNhSqL1xgnCz7NyoIMMencWkdAK76b97BkFIA7skXUUBGxTqFrMDtbF4bqhMsOpJX5ABXmz_TwQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110476874862196863203\">horie</a>"] },
            { photoReference: "AWCwydjzugTENREAtU8jrbLWEs9EldOoNC7Tm4nlj9B25U89MMem4WDCntQ5d-eBe70UMx1xqTs6c79NLaAQulsHBSWqT0OTKh2xBmbV67LTbhl7IKPUO8w79Pebcc9zQUFPEHzSvRKvZ1_g4SfehT-vLVPLJ7xuroJpEd50iQNo9FLKswnufD6AtqEISRews2CAyuCEhMEGnA0NScpBDSKTg4MFYSq_Yf-62g8iJs0eS1MbjDvuBkygg6QidQWFilTOzUM828QVVgehujHS8XJdhC43c573pinCFYsZDDNlDVfYEKBtriHzqh9O1kW4UT0UezkXJdYPxtbtFg6dGsL-NWKXVu_uKhCwa3_nKjXtal4LRNegqM5L5rAJUBALcSMCY2u61ZXxjZZ9NTsJZRB_K4kkHXrLXbVEI3x4I55nIPeHbQU_GaTVCSO3gDg0Iwhi", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112622924074378376022\">Xukaa</a>"] },
            { photoReference: "AWCwydiQ4-u__4DF5SCeGv35UhVlQ-XJkfbvGckfkoxmVCJhJS0IpDft0fil9RZ5l5D2tnqYWT0Qk0at8tEHeSyIR5HtT28iE4OSVQ0Za1FjuUj_EiGL4MgavM5rB-EUGM1uQ6RybKt_M00rjmcv99-cuhMa7nlOLA3DIC7T08BaSursEoImlAUM_EgctpZ6p8V_P_xuTyQxWLhd2BTJ65OKtodn5COEaQANsSGKzKQnUAnNeY1fjfpJNRvBd2zsSGxFLe0soAw0r_vzypfjw7roUORLnrzjzb5AHnrjxYFxUbAGq9AnVUjLHd3zKx_gIcM7oBQUayqAp1DGY-7IDHbZ2TyQrNJuEfGE0bTc2np5IwSlWEZSeL-H5AVC6pT-42V7d2dwlLTuKIXA8NhGTsnPKPS_R-XubAhGl1d3pGI7tNV3NLEEHKZgI4fO2yLP5D7g", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117177390355876481557\">クレヨンしらちゃん</a>"] }
        ],
        summary: "정통 크메르 요리와 아목을 전문으로 하는 식당입니다.",
        updatedAt: "2026-07-21",
        highlights: ["아목 및 전통 크메르 요리 특화", "현지 느낌의 식사 가능"],
        tips: ["전통적인 맛을 선호한다면 방문해 보세요"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "아목·전통 크메르 요리", items: [{ name: "대표 메뉴", price: "$5~15", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15071755520764895158", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A9%94%EB%A5%B4+%ED%82%A4%EC%B9%9C+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "제네비브 레스토랑": {
        photos: ["/images/siem-reap/info/restaurants/genevieve-s-restaurant-siem-reap.jpg"],
        placeId: "ChIJ4YRclGUXEDERHkwzKF7FB60",
        placePhotos: [
            { photoReference: "AWCwydiln2Pz2G3uKcSqhioi0VR5O-Wi2Re1ypBoITVc9vXRiBx-kZl3SwNekKNeyVJtm5JSucMicJpC3G9OXKTmU2sLPy3Yi1wB4vHlWu7A-rO27CTB6esFlZshhjmU7mMRpbK2TUr5OMLMO0evasID3It5AaWbnDDCNsyksTyt7W5SW5IwZ2ts98IpmxmbB8KMsBXMcaTw_BNfZlKGc-ctlXcTlmoYfh2FCTRDN-Z2ADQyoGzeJf77w03mxJrRgbN1eXarvNm3T_wQzh-8_tIr-pffNIvJsHwkl1kP29buKhTbo-EOAQ6flcgz_ETQNt-ucSpFSS8Bo_5ioSIdbgiynoBhPyxQ1CXjslUbcMQhMfiKFCBBfnxjMy2W9FlaSnY8CVLou6nMVzvSEs21oZHDkrarhRRoZryWxIcSOHrZR0QeVQ", width: 450, height: 450, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103966104794252062564\">Nicolas Juralina</a>"] },
            { photoReference: "AWCwydgHFXo98rX7xti13X03azK4KT00i8zvGbJ1vuuJjBxVsjf30dnzQiK5eRNhHqbSqZrsBpaUro4RXCIBg5cX0vxyupinexLdZIc3iE0Nkf7GONCXviq4Db2RdZAUS__WPeMxAwMDzZVG0i-JM5BdmiAqWoAscllbMy_Fmm7d1yuyAlFlVAq7A8WX7oPCwnWmGbCRY1l-pJ3H1NnWYAUAj2cRWZx0SmimsCF9ja4-mCS-IfXKVpj74xp5GR7y0Gkx5C18OQF0gnG_g-WqER4kuxZd-U4QCIJGRMo4KePohef1DgeOk_NmrtX2U9A3Ok0HAUwNDotmpoKnf89UAAGJFV27uUA6k6YRu49xc9Qf8bOmUUDr3tOkjkAGVLkkn0fLJqhOiQg3fgb3ljZQZafU2h72v-ZjC0Xx31jJjvL45q0mjgg", width: 4032, height: 1960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112804576392755759260\">Luo Liegwo</a>"] },
            { photoReference: "AWCwydg5AymAjXLROCUBH3_8wSuJd-NA3PiM-Ho_BhS0K1mHpb3vt09JreTbq2KmwF3kgNsqtRIxSzer08hnkojit96Y-x4eETFm5P32IpxBoWf2M98DXSsqFfXzvfDKVmWV0TPY28fx8a8bR4w6jgx_PatEP4iJ9v1uFPFYS5rAAbZPq0tV5pmk5n4tvpl3Z3PCM-PosjfwjtC9-vWdim5JmGcNj8U8WUpLp0cW1sd57_ekluDMvECMGjhXjkk10LnGV0DvWn9QJ0mYXP7u8Nr153tJpEw8gO21e83-Fa95hjLTaiA52aCg9gvWuR8xzWBv5q4WXYy9GuSfKYteLMJAmPp0YP6V4VxwNl9O9ASJ4StWujEKTjA7AOFCA9ZsoxlqQEOl9oXjbkM4eITAxMr8sKIJku-7xFW_FJVKx3S91ajOpA", width: 550, height: 413, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103966104794252062564\">Nicolas Juralina</a>"] },
            { photoReference: "AWCwydgyoSudGMqxs4TL9G7qekDLUBFk2FRplKLxs5ucmr-Jjn69x_0lhFivbv6ds4WMwvSxa7nYOu-WzXXAj0xTcfwlFecyexZXoC-U9Y15OptAbZT3Ock_YxjdDJpwG0WE46ZInSK0_J3YPvnqtPRRXXUaBkUK5IUcCZLsRlZ2q1cu3ymh8wm9EnYNpMWBNWyiZkx4Hi6C_VxkIwuY4CpqsURdm1r_F5E7LQiU8NN697M3VEGJAUyOou26lDjnw9NcpWmwxnhet2zVWeQR7q7kzFTzxKGUovgOwjeZXT95M01upwRbzl1BBg18pzDq1b_7ryyWmJc3MwSAVZrlEBEMDLQCQ4SaKnP2FpgBdIOVLtAjC9aFbedOM9rG5Azo-QHuKdrRhfarpxn9BVkLq7C93tYTGhWrnBzIxZpUCd1eduQx0A", width: 550, height: 413, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103966104794252062564\">Nicolas Juralina</a>"] },
            { photoReference: "AWCwydjJaZigHHIbuTaDlnc_0U86Nhy8YIdB9YCQZctToGAavFBl_7a6GyNRE3hTaBhb_-6O7kQGbwuzoxuIjH2q50AA-j34cjerDnAuBIEh520Te7y7tvLd8KpHegROrmarlguOaQ3Jp0jFdzdQHgZbLRaSnppYvEua41-8BszeFYP7Hue7kkJKpOKsnMGQSDIlcm98vQMmrZNVyXpgEt2Hmm6XT6SoaFiniCj7RTzHqXlisEY9T46Y2UluQCujHRlHpxtmuAZm7P9Pyntn_2tc3R8zG56Q9UkDH2JFVq8-leruwqS2Z16A-db2rWAMVFCTVlAiM3VA79cfwyDAmeFEVfkdeIAQ_nT3OmgO8dzHOQZ70DjbVnzjhZss1JufYPZBj_fWhnJbNxSDCdu72xyOxqt8Wub1gKdoeT489GA1BP8", width: 550, height: 412, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103966104794252062564\">Nicolas Juralina</a>"] }
        ],
        summary: "크메르 가정식과 그릴 요리를 전문으로 하는 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["정통 크메르 가정식", "맛있는 그릴 요리"],
        tips: ["그릴 메뉴를 꼭 주문해보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "크메르 가정식·그릴", items: [{ name: "대표 메뉴", price: "$8~20", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/GenevievesRestaurant/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12468151101590555678", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%9C%EB%84%A4%EB%B9%84%EB%B8%8C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "포우 레스토랑 & 바": {
        photos: ["/images/siem-reap/info/restaurants/pou-restaurant-and-bar-siem-reap.jpg"],
        placeId: "ChIJhxIt7TYXEDERbNf5rzQpXmI",
        placePhotos: [
            { photoReference: "AWCwydhIYMEuWCcB7PYKw3bF0o-dDHpcKZNeDKsw-iypRcfS6KhA9QXiFXfhWPzXWiNM24-6Fk_FEMqKgeUPVoCvon08bMS8P-GOlb_IAHb4hdc_86b8Rvsy6j501u-LHlse-dAFb-SK8F5B3aSg3T1x80uuSEdT1lxsUze6yEKmiiS-twNodfPbPTexJdDind27a9-JOyKs58GPXFOZJWQOhrZnGqTdWzFQrytkQo5ypCcNLxYAOIS3U6TiCVhiaHliCaAnywrG2mxHepOxdp-xW7DbVgmLgZFAF2IQz6lx2OwtIucoWV0fduMI9uJhjXKbFb8PUN9lXZw3deD6vRLZaT9hS5eFdMkKO9hrFDVakqfFuGf2UH3-l5spCOcwOTAj3dp9iSO8LQVevNzcrmfPomH8slCGkRHYXCrh5TxpzWSTEw", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107357260118759134566\">Pou Restaurant and Bar</a>"] },
            { photoReference: "AWCwydgPJIOmo8bQm87mkulL961jKu-ByFBL7_e2TXYoaM6thr2XbkKhgBnDtwQ-T-gUie-4BawoAeRB2I7-buqQQ59A9D4COsz2noCOX70ZPbEKlEAYF7IrdukBnM-kcyvFyBFQZ0jPztj9VbGli9NBpMMOWtppUJpKTwl1mqAdcsDIvJR8fHum5xkn-TOyNigL5xjcivNr9SfM-YCH1pb5xsltOteu4x_znzMaaFnO6TJrKfMlAor-poVp-HI6wUnLHV3-BimdwQUPODvqEhBCEA7mAT_hgnJIjorJ_4qtZQC5xxIFrqOBj24iTKAcHk6u5M98tkTiYCnrxpf18F8REEqtTuIfCJUpxhpRwt98qiqEassIu6pIe8YdIRL4SWTe36etNIGqz-tZSvhLm3lGXtdNwfScLpEPW5XKLi5IYn3gow", width: 4800, height: 3607, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107357260118759134566\">Pou Restaurant and Bar</a>"] },
            { photoReference: "AWCwydhh-YZbth-WgzylznIqVsInHlBH_eK2Av7okB6v2cOoh_DEIVwlnbriEO9UyX9EB-S-i18l7SYmMb9C31lf6DmVgIGXQXyfZojqTzLONVju1N6t6wW3ag1TPSG5yBJVvIjP_8Bz524Mntn3VgJsdAAlkK1tczLRdoGkez0rX7wGXnESJcyo5ThC3iOfUuq-Y29zAOCjjyHclasjTPDCixbA5jr13DHtEJzfgAf8ZSIn1QI2p97hIplqdyaMNAbm-JrwcpxD863UlZrafqY3vFZpCXvPX2mMJduIAj3AHBXTx0T8zNDG_rjdi7JWFAuimeP0uIIAjv6dzn8utbMFIdTJe0xlpH_GdzTCSiwjGC5oXy924gJ06YkZ4L5HGOlfl8a8JbFs398esVYN4gfwpdmT_i7OEqH0b1uz9aw2TFg", width: 1280, height: 721, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107357260118759134566\">Pou Restaurant and Bar</a>"] },
            { photoReference: "AWCwydh21cFQz9bMi4TRso7fqQODa_dKxe9JIuaBPM3i47olvV9c16Kf2reqnNdiJaHdddRftfn4JX3f0YD14NNEk3cg9RUn_I9WIjANlu_-mgYQi8dq37bjKSRC41zXu5gITMth2q6Xs24KclTPExRc969zMkTZ8ZVRvbqXqm-_nc_Vqt7T8x7kjPH289-jh9LuA-NQ6AVnPw8pa6-BkH2XVqVzalMFKbN1aVTOOxhH-_Q4PNyF4KkmpYcVIFV0WZdmUAR8brNHcHzrMph_KGuBy7A7Mlt51mYnJKxqaI8HMAyyVlNT3t8LNqEirQlu2vt_NjMHpETJxKK2T1CPacpayE7DFUYcduBpGLegLMD-qjSoqobk4b9ugAaW8nrB8eWlN_Jzrg5LeCIWzhCNfJ8i5FaWMZ24CO-XgNyLDE-MCDk", width: 4800, height: 3277, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107357260118759134566\">Pou Restaurant and Bar</a>"] },
            { photoReference: "AWCwydgDSg0t_7FzdVSo9lUE0KMqVDeJdsIQJ99-pQK6hkT3AtSAWBwFwmoX2NmmzQcWRmgjSjUmq8ppRjEyCgqmdSJDJ4FwftJ_PH4zF2Lw4ZI6j5k6GpZNJ_op_nRtyW-dHKUx4DKU0fORr62XGPTx1IiEIoB2FagntVgwBkWYFEUE0dV-wr2i5Wy1rHM856VkHLh8kofdAhIAo0n5hSchQBpYEFSF45TP9QLbZICULyUmj7tIdIA86SCUgMl7Zt6_uEN-b168DIqKJpY7-HpVIl_Y19PQrIffLhjK7NnLx5Vm9_VOm_Z2w6qr7NfrkgGocVZLtORLlKn7vzllNvJTdOlPA7yfJTN6rNhG3b-i24NLb6z_AJH7v7eXSabkR8kKefhYrWnXuLnI7ybTDTbe9ZdIvns88xy3fd9H956bUddFj0M", width: 720, height: 432, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107936721504614783594\">Pou Pou</a>"] }
        ],
        summary: "창의적인 크메르 요리를 선보이는 세련된 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["창의적인 크메르 퓨전 요리", "분위기 좋은 바"],
        tips: ["특별한 저녁 식사를 위해 예약하는 것을 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "창의적인 크메르 요리", items: [{ name: "대표 메뉴", price: "$12~30", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.pourestaurant.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7088148169795164012", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8F%AC%EC%9A%B0+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%26+%EB%B0%94+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "말리스 레스토랑 씨엠립": {
        photos: ["/images/siem-reap/info/restaurants/malis-restaurant-siem-reap.jpg"],
        placeId: "ChIJW1G2anAXEDERu0nJw0rapOc",
        placePhotos: [
            { photoReference: "AWCwydhahyCCDHyG8ahFSgpfxfleJZdduDrGjo5v8iKSMACrY8CH5MyaMDkrlONFeI4zaUaxwdWUguZfjE05xRi-bZIR1wxjq_UpN1n9IgKaP5yy2WEtL0BDbiaIvPYxDp2GP8GHEVvZo7wfgvmEJWmlsosxCcvnndBVGXHf57iO4O8rvJi_4edx0soUkuKi5-B_ust3S-2LUyZvDshBKutl2kyGbl2ua5qYQO-PK0Rf7HeIBvno120iKWClw9LNPXdQxgIkPwJerFzeCl0pYJBBnB3XAZCr5S0QfqkTE1KnjV6cPbWIvDssPkpdydU4ScCXk4BJO1PQ9K5LM7r73GEaBtspSPSebHwBBdmN_S5E37uLipBuBn8iVi3KGbJfmixZ94G1t2IdDShiKJrh6o3UaCduyH-Up9IfgZ2q4MiNFgu5OGeQyAhMGvacDbYLmA", width: 2048, height: 1366, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112132360667684910710\">Malis Restaurant - Siem Reap</a>"] },
            { photoReference: "AWCwydgZuhF66ElqVbGUPriBtNsQ7I_CkEkMBf8XHtT4p5QedUgs_0FJ1pYn5M-WevfnTJjT-ZYPCCU47savdac0T0ekn2fPFdIJQv9_53RwWFD5NnS4WwRblLm-k5BMW52wI8hlUppj5WeiFShL85gBdh4Vf31wTGCL5MySFbLPNYlnMkEcgbbi2b3UFHdhH-SDU_PlBtVz3esd3cE2tT9VokR7KZiGRJB3lk7aPZFmPFl_6DRAgurrBbF7zrI32cG-psz6lThFu6c8SnyQsBkgZQMF3je1A9rBUEYDziZL2u_AM2QmAK9wsC-PMNZQ58W9QlJ6PpuUFQkeT17wIZ-Lhp8-mPL2qc92Qxbqs8lGUc7yc2l6rMj-L9lBxafQrLRzn0kgt5IT0SEVhxXPkFSRORL7pi4f2l8rlmtDBkzK2FGpIXS3R0TfNPfrLqXzZBiB", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107861591747834295581\">Michel DELAFON</a>"] },
            { photoReference: "AWCwydhf7WxNLbcCnVBiFM29Co1iycehGp9yaj230luwNx09CI5q1krl3u3S5Nc6vPl1yeXRSkKyIrACv-FuIiKI1db-eoGm4WsuSHSLgjuAOIN2ebSbADdju6Ov5lm2Z9C70W_AhknWmIgFqJhBcuEqqs1OWfDSePV8cmZKebbsncgWRuBzx1dy7Y9nWPgIQwrTEsV1yE2XY63aTUX-7rUCcQD-NDuIxkfgw1NYQ5_tcLJEhEoUKNS8yecL6TUipwIifQCHXpLgQTOIAjnvfKOsQUo9jLS7i6Lk5ec2mXs7n9Rp7Jh_qrW1ovxFbWE8OoEuZgdggt6Dit2gyy6pAzdun4B_gDRXvdTCFLZyo6ptOfe6lXG_ur9x3VC4npyxcivcRMbqYHb-YLt7yDusmXNwKR7Uk2w9CWITwCjgf5CYLcoKXo9SOdcrAr28WOeXW8Jx", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112132360667684910710\">Malis Restaurant - Siem Reap</a>"] },
            { photoReference: "AWCwydiZaY_j0EwZjwSOdGTmAaGyU2gr0QatibZFS5sdSBiHS1wJfnwI7rAUBVPIbGYy-sg_KBlSXE3cCZkUNVoVjTLR0GrEtSK0m_1FPRR98T8IAXHcXM29vyZl5xZNM9owGbWrtQP4pif9XMVfEtKxEu821KW6OYP-gPriT6wLIFennOlJ5JjSzmnHU9R4iDbsyuWTdY21XjWcXPcwwExV-XEhObkU4qBEEIQbIYF5SyP9FLO2eYPh4oB5NTnk2VW8ftvPGJR3Icum15N8NJGDrmyCjT_qFnm-Ztijlx25vdWerpj6SXszToq6e-vCpGYhY-jrf_-X3DZ0gwJha-J6MYo9YeNkQ0L-pqiUYYXPK-imMYS5g5QOUinxw3ajBFPxtSkXrVLeoHd2XYWZHKcQX9xRUCGrtf01_BCbN41LDOYHyLsp5BK6dTP2Xb55pRBP", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115069299146712811056\">Kim byeong woo</a>"] },
            { photoReference: "AWCwydiHRteGqUIzrgFUSgh0hGuSVerqGUVHSlSvfmbCIitm-lUPBqx_BEsJRCnI9Vk8rl-wBpcLiVznblgo37-0oldJwwH9VC0nBgHcU_nu3cXmVan4tcoNk1stRjKfXwjDPdgREPQ2-A1O_8maHyM354a0JPouBipzdSSbWE_Ucf2LnXsFaAb_x1ZFRxVHgSR2oh5A_vm29qJ37v_L2PwM6uxDuTjVqhkzDPUzkT-5v5nnyu5N8DeTbiMeI2gnDTHkQOFGfiEGYz6c5zylrvOLhf8Yos9-j3yXngC7chuJ8QASwfHqLYEgAXbFZwwNPlhMceg_HCPglJ1AusoihMUE8S5kT1TgdSAWukIv9dNKttavj05AYJi3ZDiq_C-qBX3LaaPa4gqMcXsjJKD-0iIklmgB4PD_8Qm7Dau07KD6GT74yQFb_v6ty2IzzFdevaHG", width: 2893, height: 3791, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107861591747834295581\">Michel DELAFON</a>"] }
        ],
        summary: "프리미엄 크메르 코스 요리를 선보이는 고급스러운 식당입니다.",
        updatedAt: "2026-07-21",
        highlights: ["정통 크메르 스타일의 프리미엄 코스", "고급스러운 분위기"],
        tips: ["특별한 기념일에 방문하는 것을 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "프리미엄 크메르 코스", items: [{ name: "대표 메뉴", price: "$20~50", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 10:30; 화요일: 오전 6:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16691706133589084603", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%90%EB%A6%AC%EC%8A%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%94%A8%EC%97%A0%EB%A6%BD+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "엠버시 크메르 가스트로노미": {
        photos: ["/images/siem-reap/info/restaurants/embassy-khmer-gastronomy-siem-reap.jpg"],
        placeId: "ChIJ454ZwXoXEDERW1FWjnkRnfQ",
        placePhotos: [
            { photoReference: "AWCwydiKsW5EM-EUNdUvFjUfjGgirSFT5tjuXoOHN64sQsueVFwsKh_H8wjW3tId3ZEnOzXXad694eVa80BW0roLTzNFaLaOS9ulK7kbNJ66U42nfTFKmbZVvTLVhs90TMst_7NMhGstc3HZduJlhxNGvqq2kc6CJH99KT-0C5C9UbTKPOSiV6TCydMWhduzQ-Jun0JeFyjoCkNv8X7L-6Mhn7fKrLSsb9oU2IBp6BRHp1hGtaxdsppPrf7zoEXzDI5HngYDUi0l5ITlWaa-JP03kR9ihpa8uo5wUpHoQJL1r571aN6mRZFYjSifl_SnSkz-fZtdzSfCNLPcwnmJODoybnu-ehjEOxZLskj6ypxDAbOuIYcbTLiApJgYPSkTzQqYcdwBtMAiZRfbw96pPNSB55ZAO1UmKQrm5sqvboU9tEU", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112188873861542995647\">Embassy by Chef Kimsan</a>"] },
            { photoReference: "AWCwydgWc7KmzX3dXrm9l92DHse8B9lMw-RMGvrccs3vOyvOoAOA8QnbWX7x_c0oUulcuRi4a206f8oRDkgIVMHRP0Yt8uNi3nna2Gl2q_cHgt4E22wzq9CRYzrbfqGVQK7V3I06Fi1pqYWnFS_2Yrn7uuBIHb-jFvv56UdGrOrswi8s1GV0gYYJS-CynzbklJg8nOMnTyUhR0J8bUVNKU-rDFZwkciM1KBeVmzMyYEgrLLPEwP7apyI6s6w-p7UfI19qiE1go9QI33EcDEDeU5uYKhjCDwC3V-UZgP80oeZeHHcTjgKGaXdRMWc6TBgO0CLPlxQe-vvHM3GhXFNjw0XnzcDC_OA8Qs_xh_Z09wG1j4-c465j9nP33oFptvrNTQsfc7X6tMcy7WMrRvcghqeq5OEiUL1hT03tMOMCzr4rt9sZHCH92qLRHyt7AlKSQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112188873861542995647\">Embassy by Chef Kimsan</a>"] },
            { photoReference: "AWCwydhpvlyYU0a5Orhvpdex936N12XkKkX-YQbJMVth5OGX7z_Le6SudR_XG2zo_9z9USZ2EVGkG63eKOC-4J9WWjFoZwoBlPedGu3h7tBmnrZ0YVvT_VaF9Lkx-puZTr9GqTtZUr8IawfTNCpOP2NsEJdjIwX1VaGhPkVxKL3JK2dd7liU075b9Emk_ZWbn1E7G2JcL9zWccQ_4muPskHabJ31mT4UzJ_h6Tqe7muQr1k3SAyu0zpEZ1XdWxEVixlIwcFp9waL9gu2g3W2WngJu1dK4r6llHnXL-ndTrtf21kLVJ6JKmO7tqW617dEtcD7D6DjwqDG1yQfrAm0OcUEK3ZGEfS6P8Ka_pq75eG1QCEOY_zfBZXyF4KPkMb2vmxo0GbbTh5E-80gqkO0WoC06nK4RRDj_5l4mavey_jd3flvlrD4FFnkTOHpU4CbTFqn", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102264098344402530337\">Fi Fio</a>"] },
            { photoReference: "AWCwydgAn3-oIE7g0EoWcHmK0HICnYVuyWAzfhZhQCrGK6a3UHeZ4fxzrXwA9I3sVzXArR4FPzCsuq14huYukFqHCPqtIE9G8o8APQmYTZ00UVMtf41B1U6S0fR8EVI9Avztk55VDDxeOAfcFGWqaDIvkgqYFgpuBd0-EdcP2ogXg5kGo-wSKLZIG0HpGHJf5d0zlIpcjqk81Vn8-pGwULs2uomCnlWXtFcgiAZ0waz-I6uHazvnNklG3elXWXJ-hTtJgUcWhP6AsxQOAuJRQasV6jhk4XGOkyXqEn0mGgmL5Y7qYc6hkIDSihcs_04no14T7mrREk-gOsGK83nFo1-tu_WliePNqj78ZeYcIr6dvbMSITxHoMAHizFSI5CXNZLQ2dCd1aJEgYn1oy4vgtKe-wmrmTABvlOVNoLgkeMmL58cu7MxQolAezESige6mvRE", width: 2959, height: 2628, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108284235923197932111\">Laura Hoffmann</a>"] },
            { photoReference: "AWCwydjWcl5oWgvw9P650U1_2pHUUu4ENFdmxRCpwMmbWadRhbakSgeUQ6GtheMPr_IIjVR_IKxGjgRUb1PoTjDTvE0FHCHsp8KcGXo72jPw8cvM-WPcg0RZN9QB5rlDzYN3vN3wVsOYTv0DvoSHFGjOqwDrrsqX6TGd8uH6KQ1Q37QoZ4_dgE-BB5xa43HS-Iv84k4JhyxAi4ZrKBB-GEz8Xa_S06g4w9oe5_LJIVqBw5AR_h43-psngjY-xSYI7YChMoBZQGtEL7VjOv3CqzEbRI3RT8jcfxHZomKkptP4GC3uVyVZ_0u4WL_tf1DmXgFz_khiCVp-tAG-cl7ceucsm8d7L1XXqSmMxed2TVdoL3_lMu_5W35uSdJvYOOKn5nxQRp7o3JV8X50BdAcpMJuuKVJp_dqr8Ob4phGMUTiBGzWwJACLYwjEw97jLYUyHwq", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112188873861542995647\">Embassy by Chef Kimsan</a>"] }
        ],
        summary: "셰프 킴산이 선보이는 수준 높은 크메르 테이스팅 메뉴를 즐길 수 있습니다.",
        updatedAt: "2026-07-21",
        highlights: ["창의적인 크메르 테이스팅 메뉴", "높은 평점의 미식 경험"],
        tips: ["예약 후 방문하는 것이 좋습니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "크메르 테이스팅 메뉴", items: [{ name: "대표 메뉴", price: "$45~90", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 6:00~11:00; 화요일: 오후 6:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.embassy-restaurant.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17626263730374725979", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%A0%EB%B2%84%EC%8B%9C+%ED%81%AC%EB%A9%94%EB%A5%B4+%EA%B0%80%EC%8A%A4%ED%8A%B8%EB%A1%9C%EB%85%B8%EB%AF%B8+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "찬레이 트리": {
        photos: ["/images/siem-reap/info/restaurants/chanrey-tree-siem-reap.jpg"],
        placeId: "ChIJZc90E3AXEDERy5mydokFV-8",
        placePhotos: [
            { photoReference: "AWCwydg0zzofgXOuOR9q4Q1u3YVEbCx0-_JSheQ6tjWkruxjtL1WaYF1hKoF2WulebKNd8MbH7BPoLspAk146c5zt1jPDqiiQPdinLuX1Fe83S77hyHljIxZ6aCQzy928WlPFDGU3yCzHJ5Frecz3QthkpCxokL6eK547vR8nxM29mgtuHKz8zybhc_uxTVEkm1fhF_lPImmHFWK3pOAh1qgpWR4RhWD8T1IGGxTXR0mFI8hGIC-DsYeSazmhCycUVt1TrG4MqKBdBqdYKP8MmdAxctBmzDuvdZvCReI-8w1Bmo6q3CWXCFzrjzR3802WdEfj0JF7lEQQBFz1qFwFMYZReI3jVyvP55GaJ1uDlglQGc223r0kSyq218SAHt2y8gMElV_mLweCJJbgHA9LLOkRsh2NZG2YoetTL6jgeUlt4yH3q7q", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102196660348329217264\">Chanrey Tree</a>"] },
            { photoReference: "AWCwydjr_BLSCNSuPlTcxjGNhlMHaSZUy_tKyDBCr9lo_KVIjZbf0Es92r5z200ZkqlM-Xvu1BFaetbo_0x8zhb9S7-Sicjh5kIbi_9RmNwVyy-gHdaEpwSXEg0Cr4MyqyErbPIa7JM6X2fL1TlDeEV91foKTQdyYairEdI2rSYx45Y3VU_zKdbLoE3FoC2o1AOwpAQYKy5Dd5je7uf7-NSXiR5pqsmJCOgGPvj0ROtncJokT383-ZzgEaB_hM4LffD5WmV_bSk26psU7LArcY6KCgvOUPZkqDGpVKc6mQnASr8FhkslRvlC0R2QPAtf2DWyh971NYR6LuHB7SnMfYxHsjn0WlR5nqgbAhYQJAbQn53uzWLVJi4RRrb24FPHG6YI3iJ1ZTwPzbDKoJkrFCUDeyAnHfXQPmeMylygPzXYtCdNJCgGIHfUSQ-qseRHYyn9", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106963602277804496826\">Mark Brinda</a>"] },
            { photoReference: "AWCwydhKxrmLSbvZ2YE5RcljLeFC3T1s_Oa_OCrD9RFCac2zciYEdkS-zaQ_4om4HpiI1VJANtJ_VQ_SDI8WBo22kB0L-xgqiJjsGisvZ0Xc27yH6_VkM3zsOW9rkt8uAq3hW4KYLKxPEiGjjrZeepBnMj8UfwttEjijdahxJDoAEIo_wRdToy79ulu4uxwExOkoEOsIQuTb13DJqU3zxiJHAgETKmpWQSFsv2_UDGHp9WDMQYBDXN0kJUSK5V0hTlCwAY2BwV9g9EryDfKKmrYKnB_ix1LT11M_5aTU9RXJwUlFPmcr8UgkG--0iqUZz2SmHQ-xICDcXgWP_-I27mNvBY2UfCrZ9dO_Oe-3Q9uLPKW249pWwR8t3Vp0GtVOMxgfHhhXM4JKRlvKwhg_1ehID5sFCpiosue3M5iuCcyKcM02Qlv4O_3g7I-o_rYTinzD", width: 2000, height: 1335, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102196660348329217264\">Chanrey Tree</a>"] },
            { photoReference: "AWCwydgpk-5GZwGNNfVGE5Y0lucZ6YY7eHsPpKHeu7mg2tM6v4EqNbKVEnGMqRfkSifDEO9jlbO1tlzTwsybEIHGeL6vdQ2mL25UamAMkocRxrzL-tnGU1-iKCH2u6YSWpRFWfug7uxuw6OKOGLQ3z1GXZtgDTWxVcBdlP1y12hWF2aQ9yXBkNN8qoOIJJRE6dyufcaqFPUCJlAnQFC61FWHxkWSezLdGIX3qoIrDSWocGAuS3MfAO0DHtaD7oPHUzqWclSBH0YhaHoNqI6lwO3-tdL9uiKsc5Yq0k_lHHcAwlecrxzb1PkX5kK-sK5P8dW-svGliFxjFzUAReRhkPufeEpzh02EXLah6pPb_zXS0PTppRTIDwIUmeSrtSss0JJQoFdd3795zSXVf7R_q-MsROHjhsCp3bhQfV8w34s5CS7aRmw526VSiOkcefSfrg", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109521140260651472283\">川井英幹</a>"] },
            { photoReference: "AWCwydjPqK9dNlclaLgXq6T8S1MnmteH7FE-KvYeBIAgHz8ZHgubBJoSQC8-l6TSfA0YvS-kHHFnKLuH454p-HgHSuu4IXqKo-75jyDrA2w-EebS6aFZLiE4mmuZim9MoxJYX_FUrFIBFmUt0__IVv-2Yh5tlmnHNNGULl4-gWkxFrax3OcU8ouLZSpmhMMHGpJ-nIxB9jPEzsLChGWatW9NNjCxdJzbEpWI3qCfziBNYDxLecDcduV9lcekFh1YPJ_E6hmfzD9MdgTAP8YnzltXz13MMi9HwrE7hBQ5cWF5IGwnQ5bkjcF38LDi8Fgbw8pw9smjoT3U_SmCsIc0rZWrW3PD6OL-aP9YczhgWlRs52egM4Ao8jwPuG_40Lj8uHmB1vbdo5D2CmRlsIiPIDZHH4JiGWrQc_sus5PWFZWb6BCTgjxvgYCnFXd03UErBQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105875660918605085645\">Pap23</a>"] }
        ],
        summary: "강변의 아름다운 전망과 함께 정통 크메르 요리를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["강변 뷰를 감상하며 식사 가능", "정통 크메르 스타일 메뉴"],
        tips: ["창가 자리를 예약하면 더욱 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "강변 크메르 요리", items: [{ name: "대표 메뉴", price: "$12~35", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:30, 오후 5:30~10:30; 화요일: 오전 11:00 ~ 오후 2:30, 오후 5:30~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.chanreytree.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17246259385998678475", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B0%AC%EB%A0%88%EC%9D%B4+%ED%8A%B8%EB%A6%AC+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "더 슈가 팜": {
        photos: ["/images/siem-reap/info/restaurants/the-sugar-palm-siem-reap.jpg"],
        placeId: "ChIJ9aDUBwsXEDERpv6kyOmDnMk",
        placePhotos: [
            { photoReference: "AWCwydggPe0LLB8Yi9lMxMr7K_uaKxFHPiFLh2PEzkIdNqx1EtyBPZCcvPB8_G6lL1ivkLT_f7fkcs2MvyWTXAylSGUbftRG7OLwTvgLZ_meCbiGZ__CT6HYaL4QCW9IebhSVLApfFZEpvI5W3loJ5DXbKzZNkucR6Eaav9D5h3iim_g_v0BlGuierFzCT3CsBSN6VpkcH2TrEYTf_yazEPHfpjcRK90O-74xG4uPcZaYrDwowrwSSNKvK_5cAkv4G7G9fyLeCt_uW75xR0n6n0GK4kuRK8I_cBJbstZIxqtzJrQn6TE0BsrQdubusfCEesm1c-i_17cMMMroe48ARsqfct3nTNzhLWe6fg5JI7_wseXOS5KT8-OTwyjeRuzyzEXRs_ec-l7lQn9FWR82jkU-IGQHyY6JCb9E39tRhPYYSfGvmh3", width: 4800, height: 2983, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104605271543602171164\">The Sugar Palm</a>"] },
            { photoReference: "AWCwydir_al8-zs_odoL4Gk7Ql2gEJlgzXVbd2vqbo4TNKHy1k5WcqbfOnAl6U6B4kP68s56YfmWsx_P4JoZvBNgYSSZ-mUzyoJBbz0TtvKGxbXHb7d8vPvBW7-_C53UIvTj-8D3HPzTmR1VASBfagpQ6RtgEStP55rSewk-WxWGA9Wwg6PBHJR2UP5HYxz21dpCzuQX-MmlmeE_2MFQPwolueB4EhhJXllID-g5o5J1AheKOd1zyngpTwmYP2_xmvO0X-77SJsoz_2aMuDUfGCKmjc9cNkMjnPLSadT7EfipkiJBNczYElQqXzIsCQap3REhHjIaVh9PBzLo21kHHQYBnTJhWj_ytuK4QUYJ3K6l-s5pKCE3KC_zeWCGEC_NWHuwe0VwgKdTCIlAe3IPdPDe4DkayCpyyKqcT46UgdK1onUkKN4WS9r1Z9oW9ATPQ1V", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100561221852931175686\">Amelka</a>"] },
            { photoReference: "AWCwydi4mjMiFjt_-SDsiiuD65nNX_8_dOS6126tDPw5XvqJ3vTIt8KGEK5ax-zhVZ4N0_PNi-HvwMjFtRKhQ7grInWuFDDJwfnnpKIvMvOlLjktzYw4AJxg4t0PBhFl9EU8bzuYXwaq7VKKt45WWo1bCODfVvHTvDAHVlyatyxiSxe5_3iHgcjYJkdfJVD9QJllcwDH_-tcKCBT-SUnFYuBXPhf79GpZr2TLjdnHDhd5RISez23TtlGlquV1TkUqZjujmlC0Xf59k4JtFAdUYIjecA3nf2wTuyzBco9K-FQ_6sk-hbHuHsdV67PNUM0Nuyy7Ey_IxAfl5VkAX5NpM9JsUw51RNjeFf_P1rO6BNF4h0YMfiWWzdpxD6h3mKy15oJaUGYyu-Jpr6Xg83RHMnsP7oYg6Ad6ECd7_Ma5_WMaaNI3w", width: 3943, height: 2754, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117078040819444211612\">Vikki Liogier</a>"] },
            { photoReference: "AWCwydgp9Fvu7fetAmdetu16jBFz1R20qarMNLP3uhFIZx5iQ2Xn4io94rRWVOKW9d6IweleAoEpFGyaSdOYLVsf9-EC_d-TVqPfYWThmg1lIPmXiw8zXfE91ALB_j_kiluLbHdXDlkw_TEqFdINPIADVRO9oDaekpypm6ZH86geKCDZ0ceqXqSHEwKAreFLommK6ke5_vGiich3ZzO-amAp1e_-t-xrCeJ3mkhdC4DWM9MZ5MrSCwLaim23iBKmfDaEJwb-8WimlGijEpEcelCpwAzytdtJxDK7f33Yxr0lx97aHvCCdrW_np8WeGvluvkYY7UUHsGMOMmb3_jFj7ucUq4h7P3DOdcgPTIWff85vrC3qDYEc9COBKqTMuMzmBarwrqwd51dRGABfB4K0aixnxcPoD4N9xpDxO0hcGmQL0_pxbtuz7yoDlPD4q7VPtC2", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100561221852931175686\">Amelka</a>"] },
            { photoReference: "AWCwydhcO9l2eHQMUI6A8wpr3rj6pvbM30SHPAZFFpcI8uH1V2slPOTAlvAYK_63FdjCIHcNY15kuDYJ2iWs_spkxBH1jiZfMV0_iHfTDfxiY5Hzq07MUi05VU4HgpJk22xNCKO-U6xZARM-HZKLvIKFTrvE6IzXq6zsIQrmT7RAcno32aVTvUX1UbU0gkACfQGVShU4KkVT6gXEBQTsA9OlSajj6nJaa3Gvel4fe5jDVJzCwqAUiz_SLkGySk--8xgAwjbFLC_dIKirJ8TbdIgQJ9BPcouzzxasWbUD1Y9oEHDxukamll2C4SQNdB5od6fHYjFsGhP556XCPQAj35ajVCsxY-NDfeZXjxjwxEoH7UQKWnbVhk_j51139mrpyM18inN2RH9D9ckxxkO-ZTXKPhwuhS1bUfAo0gNQHyIaeZuQnJkfRFJ6umO_Gzec01Mn", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101342912021846898158\">Dirk Richter</a>"] }
        ],
        summary: "치킨 아목과 크메르 커리가 유명한 맛집입니다.",
        updatedAt: "2026-07-21",
        highlights: ["대표 메뉴인 치킨 아목", "깊은 풍미의 크메르 커리"],
        tips: ["현지 식재료의 신선함을 느껴보세요."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "치킨 아목·크메르 커리", items: [{ name: "대표 메뉴", price: "$10~25", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오후 5:30~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.thesugarpalm.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14527631538107252390", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%8A%88%EA%B0%80+%ED%8C%9C+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "퀴진 왓 담낙": {
        photos: ["/images/siem-reap/info/restaurants/cuisine-wat-damnak-siem-reap.jpg"],
        placeId: "ChIJ4y9biHsXEDERVLRYgGEWEXk",
        placePhotos: [
            { photoReference: "AWCwydgsZbbpmgiTeUeNDKMJCgFaGFnJYOz9OJEKw85X2kIbWjAW78uv-AX-IwGdW-6QrLySwBJGid-Iw97Fv7oZ6kpju1je1xBGILjkBE0N1dFi9gYjChnPwOvuFPr_xK5EOwMGi1JY2UGvCIQsbVKlx7wlPQKQFIyUjv4Xvc7vh5bZsv2lnw4R56Nbf8E_tXWX4OvHPRMl0VyhVdSclhfuKyIX0mHSjBROsMmi8l3rU_Y6CJ-qCClDM_PPR24hwgcZ0kYtInTnQRQB-NW3VVvmC73Is5ABJp2CJyZETacmSwYqsiHvRap6RA3qFKsBQ7EXbfrXT8XWD0T7PthwohmlKE8MXoHd6Rvv3UthWRObcV37amdIaAej2Uk1Uw4C8C-m6veobQTMbC9P8PFcwnwOChsOfhjKvrghwwx6tHLjB0I", width: 4800, height: 2699, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111155452040000048026\">Cuisine Wat Damnak - Siem Reap</a>"] },
            { photoReference: "AWCwydiK2y0TBL-3YNaTZ6betBNO7l66a0zddgOD8tRvClksrx3sLdRROEXri0II3T8dltL3ATYOwp4sJYGcedYUnSYXSf_mxCrlmFUaM-cySv8SH6zo4F4oXgHPrtg8bsfoqgQfYmlQdU1W2p2N3TDwBGvDQfbaWyiDgFsKNPGeAxu3WmtB4wBcD4kv5ylEZyvy40o_xg1mdVkXNsdU5NwszxApS5xF7_li_y4OZF7oYIAB3QnzYuy_V7rl8_el6YInNvqApqkKLTc2y_-KD_jeP_jBm4DdJSiZ29YUd9DKzHVueI0i18nRDItQrrzuX2ywTXmYXI9AdTqEgFZ-QyD1vZ_ZbGshhFr4VR4OE95H7BnZD86m5x-otzxUriwU4DxKv6DvJ1-fNuBYrIvkIGvNjN5aUm9kVulQRGwj45qGsCviNI2IHH0X49e1fPLbe-ip", width: 2529, height: 3372, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118331547717310299837\">Guy Braverman</a>"] },
            { photoReference: "AWCwydjfhG9Ilw1qU8k0Ty4zpU6GaNOPbNfrojqM2MEY-Hby_x6bnZ4C5pXPhsDyX87PqL8JCB0kHemfPCZ0_8MdxFWx48dqcsP4IuJbvgxfEusnO__JSJSEfcOB0NjW55tLSb27Kqoxs6RTwuISl2amcnEWBf2bWstEk_S8gy18EMRP8PVNmkHg1bAQU-L9kDyfe8E5oODMjfzL0QWgiAr45--2qG-wFjd6mDx-a0zaqaQ398AK9H2FqbqRnUj5u0b8_fWrmHds-qNWUqEzNd-B40GxTRC3UJ-3npHGB9SW8A1ujxc2MEHpvS3f4V8yBVtK94yhoqKXNneu0GPULFZCiuh0vdVoPjGiCsT4Ojj3LGjjqFHvbWDV5xZ4UFLUQQPmKOiBNy931C3pGWVE5rC22kxoCHcwq_oJmf2UpeJC3fCg0cGaie3y4HPDpZzlms-B", width: 4789, height: 2951, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111477248405140513376\">Sakai Masaki</a>"] },
            { photoReference: "AWCwydgMEb0sMD2R3ICKoJ50-fC7FST_4g4lum4iBZOg632vdflr9qtUFyfg3BAmj-5pCy-uWTsO6Ar2UvQLTGups3fzkWG95HE8w0YWr_Pyj_V1q2YweYjK0rq5o1Xs3dbV9WRvVEmcf3hMDNMlfyZ2P34PU6v_DiB3wKYjdQvoeTazlygzFo2a6FR9iUSYLcHay640SRrOiDpAm04q1q2rKdUTPzIC4y4V4jzyaUsrHsQ5cyVrsltSiWJ8zRz9dtAl5XH1RPa_yAuOu-n8fVlriT8tGMleQ1vdqnmP9MzLGprq0JHCvBaRg0-AJmbgQU7ZjTeNgBtM5r7WMtg4h-LBLN6YHWZiLXxl7GshW7XFLXc6PlMvZZY58ldSTZ95gJZIHB_UxKGJBdzRtb0BmhDSOykaU7cqtmav2IgWM-O3spwCHd3Tu2s8_kEVLPX7Gg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102574978891489202603\">Christopher Chew</a>"] },
            { photoReference: "AWCwydil-Jlbj8hd9-hmeK9MVwakwrueTQlnhlsGnQ8FHcr_3_KgIBj4UWM_IWynG8gjm3aFVSAgY59AQWLrW43D4Wubcu3dlcIaKilN97yOs0olwT83dVU6nENnCnW0MH9XXLxn-KkTIQGt3Ys1IXzZuk1ZwxpHk-D1edXAm9CiKvrEXoVSGuIHK47s9SFJsdI5SiH3wocHcHqeSpvqpSOXblQae5qAQSHmZlwroJ94Bh90ZoqzYjKobAjjxp2a8ZwG4TGhqKzFRclpdIRbhW9yAWslc5jx2zjGd9WhzApNs6aXv5aTQpTQFV_4bUFOyxes8G1IaifjFFIP8Olq4kPsXWq0gOWFvc7Rb3xy3F7BHT4jxMzYULTnlXznY448smByxfcPxuynHitzssDtCkZzw7HOfDCJS3ZID2l3HiZtXFgcFuhdImtIosD7ngwHuvxh", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111630565229681630630\">Michele Formica</a>"] }
        ],
        summary: "시즌별 신선한 재료를 사용한 테이스팅 메뉴를 선보이는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["정교한 시즌 테이스팅 메뉴", "고급스러운 다이닝 경험"],
        tips: ["예약 후 방문하는 것을 권장합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "시즌 테이스팅 메뉴", items: [{ name: "대표 메뉴", price: "$35~80", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 6:00~11:00; 화요일: 오후 6:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.cuisinewatdamnak.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8723778561214297172", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%80%B4%EC%A7%84+%EC%99%93+%EB%8B%B4%EB%82%99+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "마룸": {
        photos: ["/images/siem-reap/info/restaurants/marum-siem-reap.jpg"],
        placeId: "ChIJ1bXzonQXEDERZevwiMx2Jt0",
        placePhotos: [
            { photoReference: "AWCwydh4buIgqzHaj1_YwsbCrzIfmb7MfB5o91WuId6FoyZ4hcDF4kZvjkBZ34XLdIy2y8DldTfcNXsnZn1xt4k2Xh5vHYQKQHf0oDkIFg0B_J7mqWGrO0Gb4hK2sfRSFnbYe7htVvZng8OfEkGiRY0j6pNZTUlT_X23BkeIRPOe_j-3y1viPzDD8XO9Oj7UHKusRmLtEXHIMzhXsHp8_VFSH0AWBr9tkPk85FaABSVwAFF8FN4jdL_rZEySMOda_vy9LkbP_n3OFaaYv-tQUmLdC1zsaTcoHKYq0_5l33H_KfNILpHHKlRjA883nlTXI7MUVqBZsBVxMib4AnyTTK0UxGQsQEzAvraVJ6xt3m5HhcPg56BrBgwX14KF9uWZ_XNrYYQCIwWhyKHlqy9hNxofBZk_kNXa0wt3fjMst8vvxaVFSxABnAxvohuDlaxfD4-w", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118270557823553727180\">Traveling Rramttam</a>"] },
            { photoReference: "AWCwydi5u9iCkmf6QJ4cK4rrn2-HoRK0ARBN6IpSgq3l1-bmlKOnKxiBLojJwcYKZp3NB4TN4nZsv5QXSyJ9zKV-XFqdF-JEUc-6gJhEWYuXYVMrdFGFxXUD05npQpNNcATToPkMBW-1DNnFd6SRgLBJ5cRcWuk0x4DGHPTCkIMiKXa6douS15qS0y1fanYYb2JOtEPcsIuqXoe85Zew56WG-GXrJqzWt-Bpw1TSckSFsxU50n8Q4-8LsZ7EibGxLTxoyUwHyFOwUSl4apyWRlLE1eWoCVjtq_kBUGMaPrg0dvFty3Wv2AuCJpR3ZeNcRW_9MtAPRxZtH-5WWSk3liflCWQdSBT849W8wDi3o28Y20RSLtT9ymOfOsNAfCPsxrPnc89oj-qdZs5PF1w6SSBl5I7zu9OGbI4nZ9Ag3S_IcOascDA", width: 600, height: 400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103646733707770151156\">Marum</a>"] },
            { photoReference: "AWCwydjxqvJ7tFJpWuCEEIQz8_Lp4p0hYBkoVWpHwF7-OwQMyFDqgLqW-rlAK9onE-uReuwpUKctaVl5brkyKeSoj2wVyymrO3fX2YRQpWzL-1ysdJd4vKFpV0o_phJb44oJSWgSQBW_fpbtb1ewTuSjIRn0nvV7R_TqXupqh362xdPZ6RDcYvuvxJHVHPfW1jaySW3aSEk2udafnZNtAEoEit5TSiN7XcxBMOnQ4N-kJl7oYLjeRE5znNx3g2F0YZoiznzDBOCEzd_6x5JmJ9my3WYGmMGVHecZgh9yuXI36NfoZkFr7Ey63dv_nW-VBeZe8DzowpalGrLGYEaERjAowx4P8eOPOpZrgia-c2qgPJWs_DW7JoiF6VrcvUgMCM_jaOeV0FSlyns9qdayo5in_HQqWL6pVm9EQ6QfafnK4XfJf1MkLnrSPGnJetvBzaYB", width: 1616, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115482630381093047488\">堀修平</a>"] },
            { photoReference: "AWCwydiWjPiLlJB2FAPhOHzBdKE-XF0Wf5BWMec4N44AHR1vG2w8F4A_NDydiS1AhOwVVOMZHmZe3IlFUSM4GqTms5UTX_W_TkDuh4I-qitdTPabt8Vsorz09ec_M_B463_29VRlHxofMCcu7jGhl4BIOkBRg6N_ywqLBq4AlRGzq7VAu3JUHE94K1askqfrpyCnm9jiZuS9PPAn21okP7CpK1r74JIj8LXY0PQjP4ptEMNH3Pseh0Iv-3SeTr-xQTlhPg3gL0o1mZK7f1MpNR56VXTKBPbJA1JQmaNhAJTvBI4R2Af_CWSmLl-lK6BtHzTdouVR_eVEwSYAKmad0aogeeeOXQZnCtReZcCjt7z6RV5joUCKTz6gAAKXPfEKpCJApFwp1EQCLmekla1S83tvp00D2P26spf1HVu6L6mDpGtKMZ5B", width: 625, height: 417, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103646733707770151156\">Marum</a>"] },
            { photoReference: "AWCwydjihDI2i_aLUBd8Cx4ua73noYDDbbXuDbiVqHe9tiCXEpJpCjCsMCzaBLU3CBRUe783hMjZnRzgQ9ZOWOfR-RbcfprILf_OTh1As9Hz8XnTUSyjFJ_SOTJPybk84rTQ1FGoQ_WfDDSRBNmyB3YcIvQ1X9F5_01wifxntMCKgcGQdcC5xbl9B8CFSZ4enHwykUzl8DyMHICn3xBWGlxmRYj9Ncl-am6MhK7fcLTNTjT8L5t26CVTNpHYURNySaoeONzHktlpjS8ISlvxavxNH6CHhInR77fmELdfCGGosU3G_zc2gVsz3pFVPwnvdOoXlkSe9dxw0eSZf9SiRatimnSCyi2pvfEevpp6UvWVK5n6bKlaBYtaG7F_96FexAZgctWQPBQ0c4NYBdBvIGt_AJPWCnxlUf7BjpLqhB2MObH8nBL18LVRBBRGfsPX2w", width: 1616, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115482630381093047488\">堀修平</a>"] }
        ],
        summary: "사회적 가치를 실현하는 소셜 엔터프라이즈 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["의미 있는 식사 경험", "소셜 임팩트 중심의 운영"],
        tips: ["지역 사회 공헌에 관심 있다면 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "소셜 엔터프라이즈 레스토랑", items: [{ name: "대표 메뉴", price: "$10~25", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오후 5:00~9:30; 화요일: 오후 5:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=61565832334763", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15935554952339975013", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A3%B8+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "테비스 플레이스": {
        photos: ["/images/siem-reap/info/restaurants/tevy-s-place-siem-reap.jpg"],
        placeId: "ChIJPUcFjnoXEDERGR09NgB6KYs",
        placePhotos: [
            { photoReference: "AWCwydiXzx8gDd9rrm9nHkooDxKOBHObUiIUZsBMID3bxLmpE-s2l47MOkCz2r1tiS2ozwr6M0HUVGFc5dU1OMfqNT1zTYVCFRUSRtC8TfhqSEuXDXvPQTzSH28455y8deujwvBBFJJqM69ent5B1pc01rMd6iDVyR6O-wQH4GapAQNn1LPYDwG65EHimO9v7Knd1OyB2OeQAN63QxCyTGPwWKfGEkIwv_3UWlBH10AGoyVNVBlIbkQHSSu-_33rf2Ubz12lHyxmMQTZvcDf6nuSzMWaoM0ymZMRPMVN14ZSJYLvsRVG4tHJn1hZUvmkeGM6EtaL2yeZqQ0a5s0fkia-Veq0hAe_OE-3ExXZ9vJQW4n-bpvHyP7v40jfBXGyt7pKdWWTvX_kupoSfZGz9J834fE4Xj35amSgw0q4Cx2t8P69bN0", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100987299413934934483\">Ting Hung</a>"] },
            { photoReference: "AWCwydgWZFYvnMWVxf5vzYQ9qzGjY7U93Lc1Cj-Q3SJDDc5I_r0fbolyWoFyUxwZAsjDllhMhugAiagDT-gm4o2t0Nv3Ox0d7XgQyMdUGTiuYl-SXuVUJhIJSXSFTh8qc107Z1GPDXmlN7hQ8hkDwrEJcyB9LO22FCk9rO8zequCw4U2Hi5Ni_JF3HhpXi6pMabwjX5L--l_Q1ossdNIYbQq7g1A05YMu0g1jkioQZ6ocCuQFUbX7l3DESILCZQa6_c6SFH-6AhvNza95lE1azVHmVd_cLwsGVpGFDrIxXfhM3S-q2akK7lIBBKn0TPwQmtFLWGTkswnjPrTW2X7PVcCE_rAtliNEExiIWeHI25AvcHJNr8RQioGEY0X3s9HWygxrxJKzoaBTXjbigu0Ki46PiObTJ2Ziu1OsCusURt79NQ", width: 960, height: 540, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107867265700897118686\">Tevy’s Place</a>"] },
            { photoReference: "AWCwydgahhXwInJ28FZMmpttANNcOGW1uOSWSUNw37MB7GYr0Ws237PREyT6PnSfQmCezow0qsR6Hg9zvWsIde9epcrj03XZFDVVOyMvUFz2XJbuKYe-Vwieesm0EEXjYoKyx4wMSFOW-3HIEkWmSuISy30Peano20ojq0hGAnTq3KH5bWInMIQT8pA74IZEHplDDkXnEmFIr_LGtfbCh9wkk8a2BUGJq6bpPnRocUDQo9JcD1NVarwrQF8NmZKA8dFBNLpTwScn9coijzEJv5iUclFy4mUkzPta31S4wVDvjAvri48-oWCsyv6RYAB5gquGnN7hJzDGmW9Ip42WCAT7YOauyQnzrD3_bo-o8PXRawLg4aRrjGQk30F2epyn1V-pw8cplBgyCBq5mIYhVlt-EWl17eN7DTr7YCSdTIPp1EnS_Xdp3O0FeGIR8pqxLKzP", width: 1010, height: 1311, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109728671357409241686\">andrew best</a>"] },
            { photoReference: "AWCwydjRbGOT-zO_w755ZxGF0n1-boncA3GF-B6ah0UABYKpc693wqbhiQlZsIg2bQdDplyJ6gJsuVvjGiC1qErE-__FI71QMCL6h-dAXniMc0c-a4wJPXWjf1VJisrP3oLfps649rnt3guS-61lqsZJKwDVVnynEs-RedJcrCTuz27TDlUTUmXy48eRrYwDdH5a9w6yU3bXdppZZaLKhb4Ro279j4zKqeQh5-56Ml9T9_1sFg8gMSaFl3iMysMwIk1C-R0oGULaKgRxozn7LEbgfXurjurbZUjqi2tADKo8GX0yFs64B6LOFOgPURtYVw56XmfB8K36LejhqWOCyatJIizXOZz1tbCYT5bloe6l5qjfpYPRuJKfQLRTHikh-q1WPUAKrxHwV-IQmiSx3N3HeiczHlEIL5qBaffaH7n5YZeed-vPIGSIejROmrljhoHb", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115199823808179358203\">BLS</a>"] },
            { photoReference: "AWCwydinZmsUgnY_1bGzZSjvQAwTnZ7O7Cz8PqM7XVoP21nFUJSjF3CiD9uD3x-Wg5CWabw7Az1HaEFVCqmb8Lo0w68h8_W3oYygsYfMWJu49MXtI0UisBaWUTH_g5wrpn_UmrjXm6INUykKbLoKU3HbX_JXL_4Ai-zvyqz8S9XBoxMSu0jP-lIXxztDrFa_On4VtzK0Kvm7DQNDgl8t2rxIvW86Qke0dh78SOxAOcrr2AkkuQ2EMMn_cqdGDZ7FemBaRmi2EsefGQy5B_qTiUtS8PFGgoXq2OmLofNqhrH7q_Cepem225UMEuI1ZliEp-C0yf7T2FZbQjzfSaK5JZcdemMQ1k9oLYVP63k8mPJwi97C1Z0QEp6WU9vwpZMUwuM57CSdsDOSWJgxSGxKXKSXMzUw7Ybw8jky5PL421oBwu29NyJfOxIk5FrvWXTgWPDp", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107706572275333371531\">Synne Wei</a>"] }
        ],
        summary: "록락과 커리 등 정성 가득한 홈스타일 메뉴를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 록락 메뉴", "맛있는 커리 요리"],
        tips: ["현지 스타일의 가정식을 경험하고 싶은 분들께 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "록락·커리·홈스타일 메뉴", items: [{ name: "대표 메뉴", price: "$5~15", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 9:30; 화요일: 오전 7:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/tevysplace/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10027680186645683481", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%8C%EB%B9%84%EC%8A%A4+%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "시스터 스레이 카페": {
        photos: ["/images/siem-reap/info/restaurants/sister-srey-cafe-siem-reap.jpg"],
        placeId: "ChIJHxMcS2UXEDER-C_iDS_8Mz4",
        placePhotos: [
            { photoReference: "AWCwydhNl1JALF2O-7hJiHPu2S7nnkOGmUN7MBvjZlhF3tJWC95pgTDMYjA8Aiu_De0yX24RIRj2v6YcSUFMvk44wa2ZnUeinaEwSb59jzDPxwFl0JjJXTbgG0-PiQDyHe9PJH_7txGmg4LnWqOGsswzP86io1LD-lTgTEyBi3Y8nfmMXx6QXqI6eY6ycQ7DLgSPKPWIBCVuGmzKGnWJmzKbFqeRhwN5A6diZNgXilGZuZHmu9C8_cGLeJVR-RX6wB5Se3Yt5HU5H8HkkOXRVbJ-hx_Sn0zWAGI9_qVFC7Ar-WudUiZD9I5HT1yImNoTDtStVYNYj6vnZLc17mowjEii1fZ8Umu-gAG7nQv1Duyl0ajPn5lo_uaM_jIb-TMO5di6t7HBT1neHY8GD_nQzvxJK-CNC1rtP78WeYU1890lbPHISQ", width: 3072, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107410491183508854055\">Sister Srey Cafe</a>"] },
            { photoReference: "AWCwydiGcdcDsepLO3y7USVeD4INBnPs-1H5rldTVjc0ZxU7GExWNYrsSIAElBusYfebvgNhUGOjesZrH3ioXfIqIcutQFhobua2be4lDWFFrQgGO9FGR_Tzqj1HsEN1Yush6uLEA0R4PyhNKrNwr1gSzxMlmJ261fQyFOrmVpU0fa7Ul48-b_pNwmKs5m6dxPX1MEEst5WTtvl5yPhE7Su_davt3YrgUP2FqC5bZ6ooj7LPIf-PYwLpKzarzLu2kQqixKDFVkFUHWVFjtFq2FkM1MfAYiq4sr5C6vEO1T_iix0c2dT40Y1lFJZLUYT_L7PDPh-6sWUHztBpTYp2aQG6bWqw2l9bjPl3_P-80CDTWlbvgF4H89dVl13C2wtRX3aqi1G1vaxqsWLyYG4g70FVf9OLfGjvOmJ9Z9nnz7y7-ySVzqe3gL3mb3rDySU3TP7A", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109086568003458396374\">Cam</a>"] },
            { photoReference: "AWCwydiTMILm6KSocMyeKOA4wCHYFOCGRZXoyhZeaXIJL3c1dLPd8tRGtS3JVmSjZWlGdN_YXSCGhQhNS6Ejwaom3PJyPvI2jzhnCBZismPZdxorkIlT1VEy6VrN5igVII8Z_WiMLZ2_qSLkxiTPw4vT1bBG6STm3uCw1tyGTterqpTTvva6WulwTmnOLH8Tu3NqAw8RO8wXdvoDmp2HKik9D7ss0bzc9LyIu2F7of8mThCDY3Mv0VN0mmhOjU9CSpdzJse3FmOcl1xbAons8nwF-KCBUw6NyfrCzAnxLYdOrX6Kpgi5shhW9OdawNkhx6qqF6gcCtpluGnJgnMMVO7TUruYEU2hZJZvG0hpPCkgTAeP0EJb5VIy3ia-OI1JNBoZXGXEgn-R_HM5HWxp8iz4ca20HoDMXPZnKu5PGcoz4LVHyg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107410491183508854055\">Sister Srey Cafe</a>"] },
            { photoReference: "AWCwydgHaxtP1mutSnwyhDM9FtawiB2Yhdr3HtgRNSdamy21GPy-OHC-qG_ReGJ10KteC_Y6lzLFO7Ytrqz0_oNpNCSwdgELHN-ta1IHZ_br1fqPF0JJVGmyuWj6g_yAZkCDiwux7voN_HOk5i99zlRkKeAfuBdUHfjAlPuvDPkRb3N4f8wyNS_E6uWCXGB2Mzp3t9ygU4Ej5uAJtB_Hv3N2VDOCd2wC-hkYzMbnpYvPDFiTuIpwbsILKm0WwgPZlkU2FAKF8U0KnzpAzkneY2VeUbIsYfXCeH87I2EmWJ3sVB5z74pMLV6R2NPo3ekwjPfxsZECuB8ILVdtOP4iY0Vd0R60K7l9o8aZrvJRw3EIl4LBIis1l-UzdvpIqc1qoN72uvbGD0-VeIoJnNhfSMbXPqqgxD_QRTq-g4wtUvbnZt33kAQZ6nu41RupvGOU3rYg", width: 4000, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113161198674643315541\">Visal ROEUN</a>"] },
            { photoReference: "AWCwydhJDLA2MR_KAbso3cJRBx4mRKGN60pyrfRLr3Mc1x2MBD5PsaQj9b_bVpy1Bjy5ln6Hd-kQ2vRe_V3aMqM9wWDZjwZnrvK6tPJDHu4t5x7QnSw0XijV-IHXigBEzXa5Ju9QKG3VPF3lrXOK1FEgKGrW3LCUCIul5e_9_-7zfAPiWxAHyvaF3vkJjn1zF_DNfQ2IhJSxE5KOLmlbNzPEpQduFEF4IVMuFiZkHDeDJAhsQUJECz_U5azhK-4Rw1PDtXwqw_yrlleMlXJW5YiV52_dDH0mmr1uZpClXuAqXEF466oCYf1r5XQeTYbPILrFONwmlSDPeY98TcPGQY2_zfEEA_TmJ3tgkGTrWTXiR5v-D5JMbkgyMl2KmVyGsTl64Yc1eMEBrhHPFNAWYRbmdIISsvMMEYp1x31ID6qLJT9DFdSqAaZdS3hLX5gFFvKR", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110657812016843427507\">Daniel Tserovski</a>"] }
        ],
        summary: "브런치와 커피, 상큼한 스무디를 여유롭게 즐기기 좋은 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["다양한 브런치 메뉴", "신선한 스무디와 커피"],
        tips: ["여유로운 아침 식사나 휴식을 위해 방문하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "브런치·커피·스무디", items: [{ name: "대표 메뉴", price: "$6~18", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 6:00; 화요일: 오전 7:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4482203333190365176", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EC%8A%A4%ED%84%B0+%EC%8A%A4%EB%A0%88%EC%9D%B4+%EC%B9%B4%ED%8E%98+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "풋프린트 카페": {
        photos: ["/images/siem-reap/info/restaurants/footprint-cafes-siem-reap.jpg"],
        placeId: "ChIJ5_XSkHoXEDERs_V_V4OyCC8",
        placePhotos: [
            { photoReference: "AWCwydiqIIahjiMkhWCYo2eiNRi6L92RP7ZJe5liCPVMbiaksk5ccCxQgS5ym2gEEm83PNmECkHkk2lNYcDBSEkSdZInxhnIY9V4Zd8L2pAa0MUTe-puAWG3DSlKub5Zvx3Cwfpjfn3Wb2wLCxHvpm0jBe6ixxB5qyX5l9CudegqCFdUEIgyEq6NcsdZEdwDlxvRa7JMql9kVV1yokhInoxdLQFyt--TJMy_APHSwMmPTGBVogXvJoyAYEvkAEq-y_mkuLQmKBlz9LQx8wmbRJJPPmdd_HzzU-S3mlw95B6uMroqs-ojCdpLtI-sp5yMcSw5uQ8kNHp4BvdNl0huo5Oe_ooOmWnX1odmtCoQ7y1TwdLvyUQcUvHU9frKBZLdceHsltEBHMeJk_IZv-qhFdNT-L9fqt78p9GP7W44zBS3r1TYyQMH", width: 4800, height: 3193, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117228995356998064151\">Footprint Cafes</a>"] },
            { photoReference: "AWCwydh0aMbmLF-5irD5H3DONpJGZsvifztKUel6RB3v6r8JMQBKNTv50vMTImSYUcwxWIHrlDySKinnqjvsMLx1dHf1vM3nnbZhwz9Nl21_hdTrlzyKX3xkan8zM98IBnPMdIRSxVEeVdZpsbnTwWKAtEWxUK7DoiUo7uPJCLhT4giQNAKD4M9FPQ6-wo-hJDnn6iWiEp_xFaERg-t8pgVrnLvjN9UuAj2cR3e5jq_n3cZBstb2yU2eBtoz0FnpB9nlLtm7Wp6dbap30ZthyKGn4El0qBJ6mwZJAmEUeTw_-b2mUWncihrp2reE5BbBDnu0kLmtYK--rgug9iRNE-d6h5AkXusOiCbF1UONtIrEkVbtfGy1-Wuin23x5dy1XYjww_nLC_NifYW9-Wcq7OPazjoZyVFYHlM-_RUIgd5KQ-5d13C5Qisu28OaCByQz58v", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100678240454657901677\">Polin Uch</a>"] },
            { photoReference: "AWCwydj4possyH1tML4ey9BFUz_JmEs2zcnET538Yh_aPTkEZniIkF277f2bjMc9W5Yz1Qcd27_3KC0o1DR4Nuy6auPXl68rjUA_fDGW7pgZqSwQU8Z9aKHeySG__VEY96cBkInSjIOzrBsgVlQkpsoGCYhBFKldtwJyLae-xEmhYHNBPorgatC5HyS87w-Xze0V9QPcZOIFG5_6FouOtKDMI1oJKcpzUY8grgf6PX3O6K9VUWEvHXknNtQaTaIjudBjblN70VAxOOby4KqY8yk_cRfrNBTob3aVccB4TNIGI_dv_c0V-FFULolgNuR_Ufjld9mR3WKUuGsTluz3Ze0Ypbpt3tjmsHUQCA8aV5HfwaYBu74OKwucN8PnsmI2lmhe04pegVRaEDjeYJRGzIjxEBaUEEmoTZ0CgT1JvsG5SMs", width: 2236, height: 2236, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117228995356998064151\">Footprint Cafes</a>"] },
            { photoReference: "AWCwydj_HZ2wfTj911RY2-uBmPrD9DhuZioQm7Zf6bYcCtHEAPvw-EAKyBn0lVNK_qQmhKrGMMSI41kJ0BbONR57dqOJBIBwYUwoOmqOkBMD3hokGNHXC0pJQf6RjLouhePhJcK4eLsLDZPUukswuECpChoLY_WWfG1iwhnAvMg-oMhKPqm92tGDljJCmRQuHC4wbOL_v74G3HI9uuzJCIaOExxBl4KVkxO0i95K2dg5ZIGKPAOg4Z5NYRzJcTdFwMjhYnUEBuDDlhH03kezjhZPmp89Oa07xZQvzWlhb19lXyOPmT0WHupEHMoRZ8ggVcBD5U6KWAXhiKrLfOIa0FZ77z6fKs-G5-mYBK_i0OElTOaCtOn_9diZwm3Cd6Ki-7IcHEqFE6JeAsdDHG5ynkJ0GeDKjqDPHBZtl8IoKBxwTnz5dvUH0zsG06LjcgMdoNFB", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115682774685737390659\">Mike HOB</a>"] },
            { photoReference: "AWCwydgvjwdNRMDO9gCZmQ3vOOCdP7Qfk7PXXuJ2xa0VoQkFQEPJLTPBLXWZnelaZrzviQyd74hdZrohVgznpWV33Sfy1fBcOi_Y5m4B5Rzd-4tJOKYwsn5CyuwZAfi8rJrGUhVOd-XaoNz1Fqs6EkpjJCrRx3Etnf7T3mx3FiI2w5s-OJ6-oKQfzsZXncqyJeTXafrNbVOLtf1dkkNN_UiyYXLDqDfyHhueH1fAghZnxiaAKczEGicltInDwyfD6SsL-fZqeMaZJW8-2smOR_cKaDJ2-58Rfc1m725BwQETyT5wDvQA_We1npNIsYcJmHaRPVckO-HSBhYt3FZd1z7WkjSrbGspsB2tYa8hQwH3zKZFkkK4sdHaZVC9RPBjDVA9cRz1z-53C-2keiGu-UjlwQxa43wNkEURoXkeXn7DcLGvOm1PpUE6TjUMXszDtg", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117273987700672721425\">JSRP</a>"] }
        ],
        summary: "책과 브런치를 함께 즐길 수 있는 여유로운 분위기의 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["책방 카페의 아늑한 분위기", "맛있는 브런치 메뉴"],
        tips: ["조용한 독서 시간을 원할 때 방문하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "책방 카페·브런치", items: [{ name: "대표 메뉴", price: "$6~18", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오후 8:00; 화요일: 오전 7:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://footprintcafes.org/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3389154996774761907", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%92%8B%ED%94%84%EB%A6%B0%ED%8A%B8+%EC%B9%B4%ED%8E%98+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "뉴 리프 이터리": {
        photos: ["/images/siem-reap/info/restaurants/new-leaf-eatery-siem-reap.jpg"],
        placeId: "ChIJ0eL4UmUXEDERg7ShEhJlBhs",
        placePhotos: [
            { photoReference: "AWCwydi6dWVxMnA67IHTlJYHR_SBazwG87QX4dOGuSwAWOBmGQEGURS8-cLrnU4_uJmoQ5kWWm-rKWNsZMil98qfmy16QAtypiz2JjZURI1JxW9i2160vag01Cd2y3RRqKrGAZ6bmF05IvSaIQ0dXA-Mzv1TBdeksvYsa_UphUFJA5JXiABwx-eu6kjKx7ZMS7SpqerlqyceCYBhc7OnGgPHkjwVtgFoldFUeIrnKvsGRFiOkAky4K3CpZlIBbWRgVMku2xpWDobnacLHL3ZjBY51vjWsWspKoMqo6tkFs9Ng5z80s0swVVUSCr_GbttWF-Hshlh0NeEok6Es8MMNcMzQZ9sTybAApXcuphe0HkqKf7wNJ5PwDW4VQU8jdYfksBjhqARSVyhmsrNpxLXCFxIb6txZqKMD3XUVlg4Ea35QKlpgg", width: 962, height: 644, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100763974920379499001\">New Leaf Eatery</a>"] },
            { photoReference: "AWCwydg_ektaxknws3wh3yBF4RPFdyrfThjt4Q65ZHdrYrakHu2AtLNqOMGge_QNwBgdVkGhblyEnvxYf7NGKKMdMLCyYt0bbcIIAgd46RONBpheVV_YKr144fHfTP3sKAZYGgjnKj1Ny2W-prRi0anAKldrQcYLhxq0b5cTXT52_M7aBelpAeqn20a3mlWlsEHN150g-InTdq5aPmS0H4n_YSX5sR1fRDFlE5IFcrd8Ay5aw09mwMd8Zw0VhqiWRc6a8LuakFImLa4QYe1vjOF6w-efAHKFZDeRm27zIIaZOwSb_6-C_BJDIhC4cItY6mOFo_KdYH1I8cztL8Q9a0lkzNM97IyArMwMxUHbtliBLL65JM6WRdnplyXSBfgms32DkMJcv_V-zOIwQl2zU8gRong-bRBNNe9j7MBEWxxw9YBJFI66-ivy2-KHtcBWUw", width: 2991, height: 2432, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100763974920379499001\">New Leaf Eatery</a>"] },
            { photoReference: "AWCwydjwq9fiObs0rHnbPfMuNNoZrevt2Y8EJzjTY4zNDjowQWLKMPkDW4YfN8EQRSCdGSd4xnZ9K2-vbHy7QT2Ck008SqWoT53VGhC9u7OAWMCWk8LS2TU9phCcsM_BIWnMpdGQ6zQy8bGFGH6F2--rGhoSNESzsJXvLVuGfdapuK9RuMWx5kIPI-tDI9iIVuue153WRPz-3xNruPSpOWH5GLkbNXAO0PbvgcUwVusGNDYL0Oa-oS8s2xEdWms5sy-ILSVM0v8QWWSZqHSmfFXcIH9A355zJVReg4UxcjAPI8tfCzRM91xaaNrM6uZehZRjJPHGlZR0TFOie9ptFZ-odtqCMP7JGJVAN5QBJuB3HjURWuih5RMqJHSe88sJse13OYyuNyI2hJSH1vS8FQ4uHT7GdaXETR9xyIgImQnPKnNqNb4t-aqD_pQDPtwBZg", width: 4800, height: 3101, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100763974920379499001\">New Leaf Eatery</a>"] },
            { photoReference: "AWCwydjUbFYJR9fHNsh6jWzw20sYGnZBZXFKu-PivzHpqD_I-DtD_QIplM-WXfSSktOMCxyNzEf60vL14tXvd0pwUJq_zu7iA7VorKaVM3y30CDtOHEk-j232sbH_FrXUCoWSitBY4z01mifaP_Fq9D3m7tX_TcgnwARoXgxXb751n8NCEEFBnSdwr4_0qQxu7Ovta1cSxcnq4jy5kMbZ6WrAHB5wzCYBH8t-37foW-tvY0JP5doc0tE4XDU8psdJ57O2t_UaF0V9DXC5v4uBPlwZNg7IB26tD8_1W9xSN9zR_a4XiuOGHIj32CqHM_sbx_RrGe9ZAYmNGZkqb0ZSDeSP5VOVLFmuzq2WhEhXtcsZGtyQsPgxhz3khPdq-9pxpoR5pIUqgaCoNxbXkBQkI9CjfVb9Frg7Q4TksjQgYCFsAv57s7aE6-HeDfnmzMpO8R7", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110982746883558405643\">Roni Rabinowitz</a>"] },
            { photoReference: "AWCwydhC8IsqZYLLUG90kYdBFk0kgXxx39vlaMr4S6mviVQDlfejEoRcfXlyjs5d_sHUlW4deSGFXJwyMEyM092LfZN7cIChsD9HNdhxxB8Tgt2DSowIV_TZFctMe_t9CeRIgliwxtqClu7yeh6b5z2F6ihzPE5_T3YDwrXE47I58zbwjyR8oOs015N0bwluyg9H1zyRtQ-cTsE-56P0PfpOSkC64tJJ4N-WfO0YhL4PgRUQFq6TLPgmbfxN6UZDL7R3zyZzEh13KjOaHxg1IxFDum3BtQvd07SHGHoLAFbkV4fNeHtF8sKyD0BmcAglT01ofFt5_JH0bcgbU-aOVvRViCVJz0WUveqqrp9fXsb9LNaygI7SmXENtC2vw_5wotJXfNDzG4Gok60FWZFRCMgzziQH4DKJG33SvcK5nr7wMe-dQWrkD9wLMLmDvnHl5w", width: 891, height: 725, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100763974920379499001\">New Leaf Eatery</a>"] }
        ],
        summary: "사회적 가치를 실천하는 의미 있는 레스토랑입니다.",
        updatedAt: "2026-07-21",
        highlights: ["사회적 기업 운영 레스토랑", "신선하고 건강한 식재료 사용"],
        tips: ["의미 있는 한 끼를 원하는 여행객에게 추천합니다."],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "사회적 기업 레스토랑", items: [{ name: "대표 메뉴", price: "$7~20", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 9:30; 화요일: 오전 7:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://newleafeatery.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1947355017180722307", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%89%B4+%EB%A6%AC%ED%94%84+%EC%9D%B4%ED%84%B0%EB%A6%AC+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "와일드 크리에이티브 바 & 이터리": {
        photos: ["/images/siem-reap/info/restaurants/wild-creative-bar-and-eatery-siem-reap.jpg"],
        placeId: "ChIJl-e-uq0XEDERCyIgThg6UIk",
        placePhotos: [
            { photoReference: "AWCwydiE151Xj7HtsM3PCFn5xIYo0i4ZQRKjgFmlU2BwfQax5FSvuiikpwRYlnD5b01O8ZwBIXSpq2_L6LidYOjZrHM-sXJP455dWIdn1oUHzDCoN_D7d_vPv6cyG8BvMpwFs_FPcZRfXOmbzm3LkbLkdr5atbT52Iqc8VmYZ0r68ftOBjy70IvkpSGYWr5OGLTdYr0aFb4LMKmicqqFksaNDGXZhq7KUAeok2jZPxgs5RB4xPq7KR2MNuDoIe6Gs1OwCHOcTHjowoWeRwNWlrXF4qfXfPiYTZZGDhvSdPXfUEasJMqpHGFnaQQOOBTZbpCkFo_0IfbrsVAdkpZ-wuiRUU7nvUijAcAGNPJbL4YHNIUc6X9HWKe1AWYiOPGohAxu7fnAN8HxuMVZ319x83NXtYDJjxKJyOUOQIY6u8_pc14", width: 4000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115464675800393813043\">WILD - Siem Reap</a>"] },
            { photoReference: "AWCwydipPf3LOySxDdAiS1rp_oSUuZ7rITRG6xfopqJbqAkLMoskam5bZaC0q4tPs-oAULtigIitX1cWBAlw9KziZsYSiXPwdNVw2bUgT2WlakX-qCQ1qcgJjmj2Mtr7AJ0yoo3n6A-kv4IXnByrvcqK7otK0gyF8Gg_4iQJvU6a758qo3tCGZmGl3RosZRlA1pMJ1QCFBhFDh2bLOHwY-tekz-JScow5JiwO13Qx_4Vq7GkUOhzFGCv7J9oGnGFWhtnrz2bNhKV_FnYgnf0UgzbNtiT8JNvlL_5Z74H2kzr2baUqv0USQRhgITRl-ZzEruM0234RAnm0HIrWOm6AFgvF-Ys_xP_rG_VTgKSvPMkwjdt6nvCyknp5S6qrljewtFpZvzEQr4aMbhmHjvumCLzCUrLCqXb5JObX8DhiEXyiYjWzJ5YFI1p1z-CHVpA8iPE", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115464675800393813043\">WILD - Siem Reap</a>"] },
            { photoReference: "AWCwydiuF5pwHt-v8tZXqCZC9k6hyu-3KCUcVgSfZDwTQNCvX5XZDyXoDfNk1S2rmR2YxLX2I9Qtc-Z5BJtjACRiag2zBVed3IfJbvZsOc43xo4tgn1Q8zcx3CruHhFCQ5C9Y-xKAUFfb38slLQ7nMjn4Ij6pNO-wVr2_15iBQvcLK7m8KYNbrVuSnRKkY1EY-V3ZovuyPsvHm97qaCyUgGDvU0BGGzqy24ggXtjnvcnrdvbYO8QSCflcW_8agVEV7P5qnqVfepLpPbpT9fZ8IXWa6ZVn3acOAiewubSg6PzGfA3QBgLi-D8TE4GkP7ps-YXZLSjkP2G2C1gQrKITllcMcWAK1xS-lF7PpboIr_L9oEQSzmt8twkGoCiJjSOYIaq7wZXCltukiH0dlHoDJsBVh0W4yXVVl2geV_prPus77saqUU", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115464675800393813043\">WILD - Siem Reap</a>"] },
            { photoReference: "AWCwydhLqy9oyZNh0-lYjV79yL9gLk8_BTJ1bFlE0HUPmEhKDsjEC7aiLPYTKrMjr1ZFy6co3St3irrwQFeNPnSTp8eA0MiEqJ3yn3v6bFbF-SpvuzcG5zWs611Ihryv5EA07Ai6ygYToYedIqcizNYSQ9aimsJRTwNiHdR81i4oj2etiBH7W6kDaYIKdLIoWRCdg1sG_PECb-pu8oqKRyDieA84U_5xNC9gCPoKpUms6YxkEtmSfkpfDsV07XaglYe605inmPZ5XnHo8dGqvcBffCU9TvpJpMtTgy7x6qzZ2JQ_BDpblFB8inHIQAHVY__no9hoTukC1DCbCfFdZ0Q-GIrcf8jnc3T0gD7WNHaHwLa9RVTs_eE6wUWqgJ1np0aMSaqR7lSSL6f_77rbBVXRCPw_Y4LPrYI30pokrp7cAEO_1DvJq41C7MdHALCm9tah", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108663355878041292535\">Irene Frn</a>"] },
            { photoReference: "AWCwydg8eT2AVVGYckn4gc9X8RnnsIKOnMXvBJOGcvWAkRDEVqRMMPT7XX9uQQQ9HuH5Fw7Lv9NxaBpsDFEW8RYfZ0U-LfJTE4GC1a2LGelkBEbRrcE_59qlRCm5Q16AduxI6ZavXQ3gDy8N8W72lnTVhoYj68rEnuUZUHsohKSEDEu4t9OXb5AbeDMWOvRGAyD-rrc1IXCzFOYuA_wXvgnfK_fB3XxVnQty6GAs0OZ7Z2aftuo-vGxK1GRoA61MlAIaA09T6aeVfTYSP9Jm19LwA4aHeN4uJidGivx5-Cy3RTD20xXodWN2CZO0RQ6RAo7_J5KfcP19mSCbZ8UZ6OiuzPF3bVtsnq_n-vkvH_92lRVkZafwnKdHEUqIBZOhIlX-2ZW_773SOajyI9dmf-zubtNBWhEElUHHkH7vQwmv49WgSPkZGBsQGmFFjKdetw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115464675800393813043\">WILD - Siem Reap</a>"] }
        ],
        summary: "창의적인 스프링롤과 수준 높은 칵테일을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-21",
        highlights: ["독창적인 메뉴 구성", "감각적인 칵테일"],
        tips: ["예약 후 방문하는 것을 추천합니다"],
        reservation: { required: false, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "창작 스프링롤·칵테일", items: [{ name: "대표 메뉴", price: "$8~25", note: "메뉴와 가격은 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.wild-restaurants.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9894472257397334539", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%80%EC%9D%BC%EB%93%9C+%ED%81%AC%EB%A6%AC%EC%97%90%EC%9D%B4%ED%8B%B0%EB%B8%8C+%EB%B0%94+%26+%EC%9D%B4%ED%84%B0%EB%A6%AC+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "네이버 여행 후기 검색" }
        ]
    },
    "더 레드 피아노": {
        photos: ["/images/siem-reap/info/restaurants/the-red-piano.jpg"],
        placeId: "ChIJIyEve2UXEDERmXDokRBFoPE",
        placePhotos: [
            { photoReference: "AWCwydiHFM8k6DUU08Ww3CKPQcXnruqxcWTFUcRQrN_kI3Lte0uHLB2FcLOBDcdQe5IlayjPGUWdpGWBwmAHAOdjgabl37SqEkDydOeGOMZjNTs1E0Q5hRyEmyNF_mS1eNeFa98JG2k3xlFzDaf070I_dyh9G5Vo7LaUMkBCqz_9nmrmfg3LCZUHFCA9c-w6zMu5TahowCLsKGBjGxC00qk0eRTv8Apdq7lTjcP3-bV220epLxKDhXP_SGjg1R_pLg6i9pREvPj6m4Ds3VmF7pH_9d-AGBm4VTBdglnLtcrq2MZQ3oqF4LBRfozWunh2UgUxul4Fy64QdZEKsASw33pMwKZUd9V77rP1Pg6pJTlKGi2DgLr4mQWGLTn1JwJ3GsWEHDrxHSRnN9TKsjorjMKjmUi9SneaI_OqwLpSTHhxYEmRV6jcq4roaVSDz_J3qw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105628355745797537214\">つよし</a>"] },
            { photoReference: "AWCwydh796x51fQawYcelr2e77JcryNynVtWCo-QvepvVhcAZ65_y31ZyLK0FeUTLYMBuXiEacZr9J5Z5SqX98Kg1R5-1S12NShsZzLVmZhtEXKGYDOru2Cc3Bzfhe7Mvb_qjjZ1iioD3lW6FO6Uqrs3QSAuQUG54QIhTkGbDy-KDBnv5hac5RBC6cay_nNBtXiZSiRYOMiTFrkiIiCSXxKvyev8C84fhB6NjcF5NfvKheDflpglPzkBHFMV0L41KIEcCQoSp3ByLSnBlhI-ob11uzu5HCeBDNnPCvb6WfwJVQelFUN34roRHhJ65WR63345qKbyNslqOZOFvarPe45dxaWgEdPXgWIoEk8eO9OuI2smWMVHsgxdSRngzP7gGOm6MiKOIbCqsNvUdp1Af4r4T0MXkWKEXWnOFWwTeue6oFO-8fG4LN7lq-iNVwDaqpzX", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103860677393352340481\">Riku Endo</a>"] },
            { photoReference: "AWCwydjXapQ5z-goz82g-fMIBqTIQSJi2fP-yFyxVzCbRV4uGkQM63VmffbzrfrJriJg0Nq2UwWbkFcsv1ka0qSXh9nSoymdzjmOAnlD9Qp1LFd0grEEmiJbQ8dJdi-F_4i1e2LX1N6fHmmLUkspfbGI7wjyCN6SiQ9HjwJ9oQoTLXvVkzDSyqfgD30OtI-JGnwJ6An8VMN_89Sz-fQevIx5ZECUkw9K5kJRNEZH8i5PisTIUretTWM5Z7bZyqfMqhFXWA9vGljDiTGEjTzuSg_lQepNLgkKnn4dFBvkv3SwZjhnNhSjRD2Llt2g3uNn6RilP8ljvAPaSeck8WQHzXwzhkXaVQTAS1vwWK2dixSVH26sWq7EIY0KratfIUyQBfv9sZLD5FBvzxd6XDbAHrk_7WY0nvbaaZTSZtzUrUKjt8o6UfI", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110410235960555679985\">Russell Schick</a>"] },
            { photoReference: "AWCwydhnAxQjG4onhXjfJmPWttrvkS5YO1C6_8XGx4NCs7F2xtRbXNvU2Q-PVA6YD1MjW8LdB82A1pR9kXifiR3ZSOD5JAQSveHvjwpYOwbJU04W-FrgyhombQVanbYszQs7GvbdRZ3tRhjbxgOJrvUkBTHbtMtP0a17GY7fY24XQGWMyhbRhaeuw8W9ctVVuL6CCFUz1lJhjW5WfWvK0J7Bh3itsR-D7h5-p5bayEEeqV56NFQ_aHQsPiBaUxxGX89bBav_m0LxtFkZCckDkEjS6eySGfsb8BinojXMGrz2pTtwYqCWzI1mgF-b5zQL9VREDvmtOIwoQ6d7Y3NegxztqjHN2nzy-mvzE_3R8haKUaypB7CmGZDjY_ORurADcUl4UviJAhIRUYac9JskvzRK9PbR5gm_7DJtK3e4tW6JPxl5hd_W9J3jRcRgUzvO0tF0", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103860677393352340481\">Riku Endo</a>"] },
            { photoReference: "AWCwydgbooo569R8KpybbAS30OfDSYUHg_3tWi4ma8atHZKK03rt-EgmAwmig2PBRU3md_wax5zNLo4ihzH5CjuS1HoAB-plvTmB8423klZUThE-DwucFwLeplJpZlFymS9h1YcKaQdNRHhUfNuneQJrINdnxA8VM-IDV4KxxGeGQMpDndaD9aK9u9OxColb2ys856D-NPrVd0b1xSB00bWzGGEcK9ZHo72ajQay5SDoz8nzEBx2y5ZWUCnZ5qGo7OixS9sZPYS1Vg5XTCV5FRYe-pveaTWkjx2TbwoHjuely7a2B0MqDi2InV-IdB_hbVNbRBo22Sbujt7i-NnmHy1fT-v-tkm1SVMprGIchT2eEjGQpFrzOz4M9T1CDA_iSP5hcrTb-E8WjEnTj2pBL8CT6GsyR4zi-KGT2SqCctji-Dt1B9NR1LX6RpsRfem_My6J", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103860677393352340481\">Riku Endo</a>"] }
        ],
        summary: "씨엠립의 분위기 좋은 레스토랑 더 레드 피아노",
        updatedAt: "2026-07-23",
        highlights: ["씨엠립 중심가 위치", "오후와 저녁 모두 어울리는 분위기"],
        tips: ["저녁 시간 방문 추천"],
        reservation: { required: false, method: "피크타임은 현장 대기 가능" },
        menu: { signature: "씨엠립 현지 맛집", items: [{ name: "대표 메뉴", price: "$8~25", note: "메뉴와 가격은 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=%EB%A0%88%EB%93%9C%20%ED%94%BC%EC%95%84%EB%85%B8&query_place_id=ChIJIyEve2UXEDERmXDokRBFoPE", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94%20%EB%A0%88%EB%93%9C%20%ED%94%BC%EC%95%84%EB%85%B8%20%EC%94%A8%EC%97%A0%EB%A6%BD%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "대박식당": {
        photos: [],
        placeId: "ChIJgxpRMGwXEDERRSO5FTkBRF8",
        placePhotos: [
            { photoReference: "AWCwydj8s8CoO8XvlwJtW5xrE1HHo10vVJ6fvnIfeAnQvAhnnqRyMZ14YB1zp7EXgBAc27lZb4F19yyYFbsqPziXgO2OSogwSoVfPW_d7oDHEK4LKzytirG8nGjI_69Si8R-qtyVZ6IVPgj_mM3r7ctWSrO9315C3h81qYfzSCiFDegu5ZwuU1R9WA_DaWWlC5QV6-2ih-daLq4vwfYIL0exYVZBq_l-BD4ox86Bpfq-5f_kJG-FOUYga4t9ntTrgvMp-wuxCjsAZO0IlRlF46PEb-QFih-DkV8dBbWPshiAnFyBtjJkfTgqlDGGjXSMUGkHxvR5951Ie8joWKk_tPAl4NnsmQ8uoo8lj2b-qGf7u1OtASXqG0ilznkPdfgy3RJb5piUBCwK7Eq2m0BTXXQQOHp6wPeigWl-AnNJv44rGtwlstTha__w9FA22bvEcBDz", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105933769498213649007\">DaeBak</a>"] },
            { photoReference: "AWCwydiNeAyJKRcKmVQjyAJarng_y2LaaUkYgr2URImJ08MA0iNR9InG3yqT9pRNPTe3v8SBL34_CimzGlv45Ac3wtHhRV84SZWc_jWfGZJCjfuh0R84AKBc3L_frzcItefWCGSonb2DSY2Zchbu_mPBg8A2y7U-VurRmXjSLnLWPzhY4cwax-DL5vUXaYszyAU6A0vkB7ZeHhwWslTA_bvtmdfALOMb2SbGDznLjIRa8c1wPrGhgfbRcXXg-jTXd20cpQKvHWVa2IUf4YuQlQtQIMtVuANw5bIyNkga4ek7PdgBodWErhtDuPYj4nBvIdDHHyt7A0UIBLEi1321cfSuiXDXUBPanfkmQuY5F020bdFoGgWLbV9FFovU95VQdM5i2fCUdg1v5TnDtha2VQW0fojw07YxAQ9EfKLpaDzuVR5wTA", width: 3088, height: 3088, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105933769498213649007\">DaeBak</a>"] },
            { photoReference: "AWCwydi2_C5LhxDVW6DO_R3EUG683I0HyuwS8Sak-yWdsln5NPFtXT5Y7rX13gZSnHaAHWN00pF8aakdB3DPLSFWdACZr0oMd97DvOf2o0DKHP-D5SQKXBSTgyz7-c-xNAcppVtwwqPdwsGhTY5mAfXxNJC2pNzaZa02uvsk1lB2m-QjoSBUMuFuc_fgdUTDwfsTZqgHYLRgskCuUyVVsnEiCQGP83xDMdt8UdGKSG8U8g7UxYHtXpBInh93qT3JvJtTfWloeOvJlVF2K7ytseMj_djhUPerHHrCyPjt8AzneNl8k33G0L1WPjkjnM_rdrf4G-IOaFXBfCkbBUbZfg62hHI6vR03rYJIMFbTdj0r4cO1KnTO2pD90-1XoI6mq1t4KR6Qouk5jRoLeViNp3KZ39aft6sk2c2I2BrvPCGvYMS5yALPdjYrUxHq7icJlWDa", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104176736641022241266\">J in</a>"] },
            { photoReference: "AWCwydhEZXDIuEBAzSQAaYTDFKSb4_e9az9B23hwzAOkhqUesmkD1h4Rce_W1aQZQqFtF3pI8_mIrrQS6BpClWa0PTEsZOfdyDQhPrZlU6sfdR2Dp94mHMbLFZz23WxvAV8d8PFg7TmcOoKCeJCCRW2r2zEoxlS3xaijhLqGfr4z742ulNwwOBEP735YUHeAO5Incby2EDUA34sbxKTzO5k4PtgvL66W4Wjlq5yURWEsKoF1b5jU6MH-QWAP0VlNYiOl0kk1g4us6y5GmDc8iCplgx2Dwp7K7OKZ8FmRP2zKUpq6v-nsjicON17TFSn7RcSKSajVWfzXY8-FG-uQbTfdRmdBAogSwU0N6FQkbWc-E0SvBAPRg_yivEj1Ya8svDtyWKI_31oQ7Wir8Iwv5i8omJ_zwYi6EetC43lb3JEo_GujBFmqpX_PZR0NB-2QfbZi", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106634180255116150883\">Kris Kyaw</a>"] },
            { photoReference: "AWCwydiMlIyIGI4aTGo4Voxaiygv4Q100O009y-xKhIB7FUb_IJldkbnDdSRMPuF9s_B3xCkc-Yl4yFdsJ98WfoYsCrbRA3w63-AOft3DYN9G8Ac1uoOuc96c7lNg7at5zBYT9OqlvZhBoAdDuhv9zAWfa1i-M696pvsRMH6EEgOgXtHCkSwIhWeSEg96kQbPEe1BaMKJw0HSiPn228I5pL67NX-OL5q6EjzJ0ECIY7bR4O8CkI8ttjvu1faASHXO_ARon1r0gW5tjT09NiT3AGmREWHkZHp6JCxUmokxdwxmWjAm9EUqkrVKEokewq_SJ_R7fVuh3l6mzfxHexJlCZC8nNLHCLPCSRXIa1HfNxUDVYJvYOB6xKLzvrJ8InVWOokEuD2qqkUIY1mY9ZwwhHesbVX4UtdUn_c8Ve6bXZIs8PZjItRZ8AhmOql0vXezfR-", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109953815495970406772\">Angkor Imanaga</a>"] }
        ],
        summary: "변함없는 분위기와 깊어진 맛을 느낄 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["변함없는 분위기", "발전된 맛"],
        tips: ["방문 전 영업시간을 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "변함없는 맛", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6864613076708696901", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8C%80%EB%B0%95%EC%8B%9D%EB%8B%B9+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "행복식당": {
        photos: [],
        placeId: "ChIJRdMpVQAXEDER7LSsRUJtrGU",
        placePhotos: [
            { photoReference: "AWCwydieUWwqOsBICyUwYhmm4pIa5ATysQwzOhacCVb1h9Z24yuxAne82n4FWScFvOdhEwBNmLEZa8xTdmwdhBTl3TCM5xkChvxTKssOwsWD2XBThrKUAzqGvSDZwYlv5Q7ATnDmhvexy-uGHV0xngcJ1RaOEvvVzh4nBnOe3Ezm9luwu65gWcNE7o1aXUhAXnp9iaV5tC98fb2jPTfMDZU9PIKwjgnxxIzejFkTZitU-Ydd2plv4DTko5rpKhUlsGvrR2HR6GAQ_0UIQwIZE6vCalFJ09fJoIFpd3muAk84f7O3332VURRX2BP8WzWSU0DmV_-B6g5r1zaxz0sbLnvkLZM1xszh5c4y12O3WDRvp46choeOLDu_CVETYXiCj_ZsaMn2myWna3WRqG8vw6xKjFzYveACzUMcAWCmutX0FFG5bg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111010520721707334353\">손승범</a>"] },
            { photoReference: "AWCwydhfW_K6UelN2stG7eDmTt6gmQRD5G7gsOgDMuJsnyDoSGoOS3nVuyl7TmjKfJAJSwdGvXaEbPxzhz8GdRrNrkqAFJBLatiluvllAlFD5aQc_iwkwD-6vqWjk2jep0BG_YPWZVUZpIOdf86yG-NZKOCSpSUaFcR1gTb-iDslxclE_bFBm1YrVx3idRArJO1I_Kg4eqxHSWbFVggbrey37aR6GlizIGUxmG-VgQ3FCukyoXxVIjXes2y9d_8X0T182ETbEAorBOtrtNSuAPCvkjv9OuWvCGOCywPFKXj_6Jh1IR8s2SX1nnbWH55w5i3xbZj54RP2Pap7fT0A40HsQ-jdJepg6JvMg4qhOREZAPmFIg7kwJBDVmDTymDCjFGWCTBvgX_8KA4KI1-15ayMEKZrhvxrqUshdrFL0E_YIjNnra8", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110004735411135649909\">Katarzyna Sikora</a>"] },
            { photoReference: "AWCwydgI5ksYgMBUc3K5i7nGEXE5ftbJw7VgftvpSHIEzfiMfTuAplbKsXvf4Xm0UbPBZ5EK1N8Sg8ABNpYf1IHh1Qt8L6lNxdjRO5cHAv1CfzFURt0OSxdkDLc0hZ0waEuPAZtxB7IHR6rRUT3taXr2l3UOYPHdiv0XFjshvm9EhnKQN7s20G6GhHOdX5aQ_sJQjypYX4gukMaxfRjuBw3mTC-ApvQGY3-7LTAVj42iv7f36s9jIlZ2059B5b0EIzGc4i4BkGB8Ik7pMSHo_RmnP1PI2Xcc99irZQ9NAjNqnoH8VCJ9ZzfTzg6v9xb1SKjCbioBPYY-zUWlKtPsyF79Lg7Ql81xA64rrdI3u0nl9HLFlpNWP-ql7J2CW0Fx-x93aL-D1zw94_cXQn8qkffSSH2HNeaXckaKz4N_uXlWyzVYUC8JwTeU7CAttTpmG9Yq", width: 1171, height: 1161, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117934848140057064212\">AAA AAA</a>"] },
            { photoReference: "AWCwydjMielI9p-8qxhdutAV9sVrDSSRxqsEeFW80Pi3bQY7YgvRKagbygDQd8Cfzg2f-YXygMTND7Ovz55SgTFlAa3jwiVDIOIAosHut75Q8Z0TMWDvm8FsslYGrQTRSE9fjeS2aRGMhUeLdCcOkAXW4XA2gGD0r79GbzAc_3Ua9AugfTzHi-UtDlZ32LaOyqus6JLEu6nWCaVXP8YT8WNTWC-wN5mbkI33m1_BEbSWD0izV4hwmAY-oU-IM-kcxD8fzqEs0Q7qAjye1z00WX3r24a2i90qaS0SdQTwbBcIhM2WloJtLfwgHpXUHyzcIkOLSfroWa-m2RFxU6FMpIji0qG4sLUXLtNMzWnpX_zr3cvk85nuE-yz-MtA2hIjZxDw587BVecKgrZhx2Y5QrolNtzk-yqgjElwan4ILwokGKvEwq209L2zg8LTLkDujKPO", width: 4800, height: 2701, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105437563229855165646\">정skybyc1</a>"] },
            { photoReference: "AWCwydi4jsN-xemkZpu0D54n8rb6PMqR2j0WHJzV9uGBqNw2cX9PM9Mq7Eerzfxmlk6Xdc8d97zJ_wo91nihhUzt_0zX0Ob80VOBvwV37V8hD2NaZjsuqc8lTax_s6Y12rZ-E2UlWi_kIZeQ5mWyc7emw5P_faWElEPxh9Zp_pxdZx1VJgmc0Yl_vBw3kBOyilD56gw0Uo7qr09G_uEa1uVlcGnoOsAezCHgGLcQiif0YrlrNPadjxDLt5sVHLJZt-qKPMaQXHRaj0dyJdXulGfBkDY16spElH2A-ddXokUEYzMv8uOpRRoNoa6S1LJYPJECB04qalBRycyGxVD7-m1D-R-iJjwigbDUM7z2RN1CPVPEIHzCT-H0pyRBq5kbldtydRHa5Pw8taJk-vCz_qs2Umk8nMCHf3FWUSJ2jHbOVneORQ", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109657214975727745528\">naomi Chung</a>"] }
        ],
        summary: "푸짐한 양과 훌륭한 맛을 자랑하는 한국 음식 전문점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["새콤한 맛의 맛있는 김치", "푸짐한 음식 양", "친절한 서비스"],
        tips: ["더운 오후에는 물냉면을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7326350825229169900", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%96%89%EB%B3%B5%EC%8B%9D%EB%8B%B9+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "김치 코리안 BBQ": {
        photos: [],
        placeId: "ChIJmeUJbG4XEDER_iWosPBFyy8",
        placePhotos: [
            { photoReference: "AWCwydjfNE85Yyq-WyYPlG713bwxNoFt2D4aHeNTAD0ACzUTR0IKBB81c2LLtk2eDCZO8A0ZSVUmRhmRPxizj6yn6zw2NocCfL6Ko-tt_AhpHd8ilCThluCLIwhvug7gMaGozn2sxEvdbswmcQVnSr8Cg0rX9gO8ONdL_bNrH1F1FewqDlvk4-A7nij_KVeyGkNwZ99f5QE9MnoSMhnjHcnUpDoEcIRSvASfXMSEvZ0bDyTyjRtJQz1sqkBpo_G7z9KmEyvBCDCd9UjpuXSo_NJ5FcwpcQHnXuHoa8Qb7iz_xIFfmbCMld4dX3Zbl0kv2jbmVs5g1Xj5oNJdZe9FOXMpgsFbCU9ZBtJMnnKoTegryDF0RUo4QFkYByUXhVZT7iXFEye1wabli_RYuI5NqZclIj7Ks4md4TkUfsgGaexJBPU", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114169808467060819307\">Kimchi Korean restaurant</a>"] },
            { photoReference: "AWCwydiKMNJlhadZAvMsVulpQF8V2aBbntZbjvbF_bYwuiFF20BOQZeXXwlKkjuCRmC1Xp4Lgrds0u-EplBE3abNIMkAgM8yd_9vmFjQ0hkIZ59LkHj317VsmLyb3XgK-_VvJDetQcNGZxZdYq0awkdNJbJOR79_77McbD2__Qat4MIlxFuNlUmXglXqSH-oC2wSpefe9y2IGCv9xWrrtJAXqsOXwb-5Fo7ZTmphw_UaPNiRvd-wgfkD9HX2qWx2r6AhEJHqllIMMyiWWPnLpXsiyvxBSYOhs70R1Ck6SDSID-6CXIA0Jc_sx4_8Krf2R5dHyl58fpY24BeKDjdqt0rpQptYc2_voWeyy8_xZKt2R4tnexVPPgrvK09LOv9lTkoJB_X3-X5hjx-Xe0Atafi4lRAztzJmhOyDJ7uZiqZPW_YgRVPb", width: 3468, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114169808467060819307\">Kimchi Korean restaurant</a>"] },
            { photoReference: "AWCwydinbELbGwFteMXnP6D4APbxf_iuJaX7xB5QYWBPOUTySHgVhiDsh1V--Htgv9I1YABAf8MnQp2Hf5XFVPaOnRGXI22s-q4ieZE3j_I_aJjrH3B3H_VLI-plKby0Q4coto9T0PQZ85N_9kEz-R8bUkfe97_J2ls68aw4j_j_7A8YrD_vsr1JpTig-sHLlEqFjqXfbYFBrfFncR-9gqBdV7WKFRp9orzJoua2IYVGXAh6eoC0qJT8ONkNjRsIQxNEuEKdMtjIrLcl7ra18SwR2v41jCbdeal4W8RbD0cYhAB9FoF0NMnQOgh-_h3lBxZ-ertbU89bAP3aOh0dCFv3iPtZJ-QSUMf3U13b2Co_6r5v4BrJey4spzxHjyl6zvtSNUmgICjNKUXd5FqVzqD5Cm6gNTYyM3YM8J_vW0DXSe5YeSusKDc3K_1QWo8Y1dH5", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109516161575929480689\">Siddharth Diwanji</a>"] },
            { photoReference: "AWCwydizTQnU6S6bjI8Y2ltAbO-mAXPq5OpfU5XhdLdsWi8ny053rpHaGILGkdz3xnzbXGQuDmsQ14XvKJfeBmhjIquosewffwjqqPYs_ba4VhntFOuQB1TJrf3g_pNsg24fUjU7UCZ_gYcsICpxQ_CQEAfr6h4fKi6oYkak_Wu3o9G7q_FW5kHqxRFO6zJ91B4TpoZ91isL-GQvRAyw1udpFl91k4rk-34L-BOzZwLv5NdTAuLefqsHJSjIuYWS4W95-w5sAh3CbPE-LvplVkk-XYfuroRAcr0JyGD8iTOd4iGlhvZ4cAszcea0NmjiZWjTd1pFU0LVxb_67hJRPC8bD48SiVBQFzlc-MO5hR33O0sGVyQum28tt4Bbuh-F9MvPMqTbnX70IrhEY9FnkLNnIN2260USqqcpUs5ylKaSFfnouKbyx9qY_b0QzUsbgg", width: 4800, height: 3599, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106773577802227193947\">Anita M</a>"] },
            { photoReference: "AWCwydinYcNEaONAqS_XBAC0r7sMYkS3lMa01JdhYhAcnNJOQpxpxvYTgppB8p5vQGB5rW2OQA-47phKwGcD7sBrgZV5Odjrb34iadT9G4yrP_nbgKrOyf5rO9jWBb2y8EO_Pp0b_q9HK5Br-eiQVvH-1lM1Hm4gCNUcIVpEVSN94cxWUjyzKCt7YhEX_7hjxWcqgnpN5jvmgrWuOIgedTfGI4Q3a6SeK56vhrkYYhDjFb34j3wMDLAobcBy0WCRG5DEekxZXC5SL1nVXSRxhUg7jepf-m4WWIZReBbPTvHACQBUBrtH7jtF_HTmOCqoVMYYTtV2P0vQziDcRoSexbH-A_Aq-U0HRydjM_B8UAlPXBbQcndzSYcSOrI1POpCbzH69w3aiyYPkmjhwJBvuAnIh_lJ72Q89wqrTHalzX_504vZLu4WCx7lfs8rEeOVDq-u", width: 2713, height: 3619, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108754766828214884847\">Jem</a>"] }
        ],
        summary: "맛있는 한국 음식과 꼬리곰탕을 제공하는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["합리적인 가격", "위생적인 환경", "맛있는 한국 음식"],
        tips: ["꼬리곰탕을 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3443923240113153534", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B9%80%EC%B9%98+%EC%BD%94%EB%A6%AC%EC%95%88+BBQ+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "KR 브라더스 푸드": {
        photos: [],
        placeId: "ChIJC9NnudsXEDERqvrrr86IrTc",
        placePhotos: [
            { photoReference: "AWCwydiQS5lDb3h9PwMiPdDnasNtGkMYx1f8dF46ZHx7WgxRjunTDCOmvaORCAkQqzYhATKsJLzdphBqlDz2WNCe0e60QkClRQE4hrVrT9kLhwrjlrnVKnr2jE0m-wEgcCKIP8RSG81J795vLuRvEqBEgjiYlH1cgIR-Y8I62I0uiyHZxdl-q3XCgTL_Re8BzzPU25UimmXbuO6A9hWIQRGTo9Zji-CNWhZOScppQal6mMumUJsMlUswEgvS8xwGCtzjKAfGAzGZ438xNDHs0U9Axlu-FTi38BzkX7d2RQ2hbEjyZYLe-6cZQnGWt54TwevcO7UH-Y2zZGcGaUpgK9OwWVCPvFEy49e4is0Ofe9l8Ry0JIGGO_6f1BgU1f27nUl7KGdQ-bfcOtul0a_8wS2lSoLAXmJgUYa6dmYfG2yek14hJcol6BcKQSHRafuqxQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110727320948583732415\">정승일</a>"] },
            { photoReference: "AWCwydiEdISuWzZscO9j14SceYnPJpUVNcidKvSrN500PtH69plomPq4Ggl30UcN8DQltzaDs-SNwW-e_KWANUMLwkyvYe8GwPK8glYXLWBR_BuR6kQPeb82bVNe-3iuke8J8WBgd-OFWgzmiMebPzgbsq-bpz0e_SCEn7_anjYEqTExgcGkOaZCzqeC5IytmuPE9E8H9cq1g9rXTKlP0_oq8qxWqwX3nK1emP82NX4k4WH4LlvhjDRndiIeyQXGtzvaVdMjpo12pUal5AT2BH1bzM-h9aqxughiEanMvkriqbitirXV7Ld69ALbn5WHh5Czcw3LclQ3TwcF_N-BYL87oN7pF1q8W0ja2TGjblpGJNLlZk4iMDH1aKWPu2taRiqUQwFSQi__whpgE3laII4gvktI4bK5kQVwgezqH4FMXsBV0pFb", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106819335205621368361\">Rahul R Nair</a>"] },
            { photoReference: "AWCwydj5jc_AujDQ_P8aPVUGIYzDPhUnd2EagqC1HrQKZm1qxPlmESHmYaxayLmhB8rZfL5xVPJWZnzKp5TktQQGlNclJSzN9Bno5YWzDoZnJtLtEeMlFadedwHJlxoUYuTIYDvM0foPBR718sPplZHlYWNZyY0lZXhnvRQSZ5rKCep6ChlcS0_uXKFyrjnnnYd-Xgimlh-A9gMax0HlrPk1YKxDErgl-GOgtgKUl95w9LdTVVF2ACp4yZsv3y7xdiIhz-EcHBrWR0rXZ0_E1UrrnGJ9gUzTDZuaOMruQD9Dvyrm9gisLG3NIPfGVoDg0Go8oh1RR8G_-5T-HdrWSHCJ2HfWJYrtk6ctq2n8kNp10PqJjFS__GbnqCGXXGiZnMkjUlyE03cBtZegAtjYO6WugAfexH9dGh9K6YRXS7C3ZF4YFZpsC_CE-BhU4c2G2Q", width: 1280, height: 714, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101838740339460205058\">Kr_Brothers Food(브라더스 푸드, 한식당)</a>"] },
            { photoReference: "AWCwydhw7Eo-hfeLRrsUx5jc2taO4kt_K-YhG5kR130pqnAq9_tQ1VPa--8TX-7rmhGOFpi7QV95dSHZfm4vkESVKx9iajj0cyf4brfG0ETdgMjon_VzDx7wARdIdmpgEp2-pD5v_oOL0k_sf4_T6FwkrKGQ17d9MDm6xa8tZOnhfI99N20xIb6dhP_iGlbnVUFuVMz3xKvQVDZNoIsnrwxFd9IWUmyEro7aBDWEeZm9lO2iwU7rUTknAw9gTRvKJA574iz6DrhDAa-ooiI-FP09ZV5eTnsaWTQxTn1r-CFY7OzWp7kr4nKqVJxFRkkGLqYikLWnTHEwtuMLZ6iXRTm3_BNxHjRKEyPLEZ33UuJpQ7eRKAK_r8085Zod549dNmj_7RZtdjraeIuzWN6_ziSgoMUIk-We-9K1dA07yzc-JyO5dFdZWK4ki5wBi_ET93lZ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111220808377710148497\">Ma Meow</a>"] },
            { photoReference: "AWCwydjQPCkbTasgNuTgg-KKiSJHlvirkoe9SIZ9y8OPmHlbEacNNhAl5lWWBSIwzTVCcg6yLmwnrteGppsO5z9_P6L6QqLIhPKzWqNtVufzCQnao-kkT722200Xxbu_14EbtehxWytR8nh2bu2VbKBojHTIAN2OL3mJ_UAZ1ptC-WkWkCQ69g9MX-foxUrNwqT6fOk2k-5SM5jwFmiZRsc7NmPT_ciTjktzC19OjR1TFH9AYNmeKJ9chO-jcKg0yfzLMYHv1Qs5bAgyB2T9Z0AKKj-PWoh9sNZ6ooIdxfAFByp9GXhft4vu9nefIPMk1I8KKAxuwS5b8hFZwan3RHPgUBvDJ_AaXuct2G1VRl8Yh-i0lhmdFgxVjwjn1CxkHf5B_TtDYpPV83nNuEroYZcGPsgpLtlenyZ1FY5gkzLeh4VaHNJCr7OduXcSn0ytkJ1h", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110727320948583732415\">정승일</a>"] }
        ],
        summary: "신선한 재료와 풍부한 색감의 음식, 친절한 서비스가 돋보이는 한국 음식 전문점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["전통적인 한국 풍미", "신선하고 풍부한 색감의 음식", "친절한 서비스", "청결하고 아늑한 매장"],
        tips: ["테이크아웃 및 배달 서비스 이용 가능", "가성비가 좋아 방문을 추천함"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=61557752009678", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4012013264353098410", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=KR+%EB%B8%8C%EB%9D%BC%EB%8D%94%EC%8A%A4+%ED%91%B8%EB%93%9C+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "M COOK (M 쿡)": {
        photos: [],
        placeId: "ChIJWea8CG4XEDER7h6dtsC9BtM",
        placePhotos: [
            { photoReference: "AWCwydhnD5MVnANwQE28hoEvnraJg85aeDUD7TO3SRz9slqPwwxAEU5mjRAqLuT1_t7UUjit6lGITZLRcK3Kai_OrsvOI26cSw_Kf65qv7jgtGwvnUtT3oQJSkucfQWRWHElfD8LkRyjB_JOuPOdUGleLHMpcIglWQy4i_UqguqoM8lNIJeJomNmluim8SxC9w2FinSP85Fy6Dh2rC08KPGpS8NcRQCLgYH0VkRjawfEsuSw3uulMDZtfS6TeKFmmlZYvQEA1D6w0cr5L0tIxpjT5Fp5mrHM0DVbJMjVkehbXg9yH6G-oHpriwPYyVHycQfHc_brEPYDFgIa8v07p0aj8fRt9YaEpOfNo_ft4orXUHCGzeFm9J8VSgKE6pWJrlD3NJbxjr6elEzUPf-GuG6ANc5VAavSSrsPCyjuVz76dOShTw", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112903429178443136368\">Rainbow cam</a>"] },
            { photoReference: "AWCwydgwJNNwaimJ_eHB-3jsciMVRhXTezawaPZdvgKBPFGri03KM_9TnQW0s3H51SF6iEt0yORnKKMmxI7qDrPc_WzpBV9mLF4nayS6dz30y5nSys9P31rraDywdk1VFWP1gj71FgNLwdqLuvUXiMEUaVjeLZRMajXBVg4EM7CT9Ly7yd7zVK1o5haYHq2G3own2SmTcf1XtaBZo50friJ0PmVTL8Gh0fjclQ-Jtesth3ECe9uTANHkgQ9NHM9p0W7_NmuxJ9mXVGOh97_SOv5cUzMfyPL9TKePs4yrmAGZe1EdlMJo6BInU55DFTF9BrrBmaxRIVgZnoj3iWFI8AX-Ejc5YZd92xEQm6zRjJID8usrUP9TlXFStyhET-uolHzltFZoipfrEleJh9r4uDOLb7skSf2mIuqbmfD75FkyOftFkA", width: 960, height: 540, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112212435085649773161\">M COOK (Korean Food)</a>"] },
            { photoReference: "AWCwydjFrzzpSk8JHeiZL_L19tEhhDbz5Mu7s-ndggoh3s4wSnYtYYqX3dLzqBdfDkueZtItMi72Up-LlO_uIpYYFU7iBXgr8Pgw8_u_aovTAHVKY5ThcbNQrGrmB5ms_cGztVQA1Kys9Kila4YGvny4_Dyg3XRQt9d6T8KqigV4dsilgXUOkRAO0mQCwtyYP3Q6DAY9qqIb1K1LhNpRbrihpjEWacy0de7XmRqys51KVDm0Ox78T05EeG0dTHaBKvsWUuVRql70ySZygudTHai-dzI2llNOl4eyPm1Zk2a8bbEAqDWaOMOoOmlZgxkFyxevtOY7r22HLQebpIZwX1r_hSwQ0_vWAA_zwVwalW_y84PEtRdGl3JwbN6KASXx4oLOA0mo4q4KBqAvuOfEh-HvUluvWXBhuxD4-CUtd5VTTsKWdQ", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112212435085649773161\">M COOK (Korean Food)</a>"] },
            { photoReference: "AWCwydhevDntSnkJPpe8kxbko3OKlbJ04xEC4THpNIkhycvvlOkvdYLI1ZJIQfOldFrd9Cw7nBWr5YEmBgVO0sj3Exfm8oLu0BxnGAwKKmp7owxAW5s_zHvu7sa6Z3XLMmwA_oueXGl6Z4ZtmJZ19dzLzBPbLcEB_lL6pYjf40ZGPPW9UkN2b3ETst43UAh_rC1-PGJJOFJ8iw6pTm8zwRIxAC6K9fLNR4jCapVGT8kCZ8skeab88uvRhrn0BiaEPtB8R1W2PCcwlnb_LItysJqfwHDJYLLIXpVfnF7l74Wn8JYzrT5BKcKUPHVGZtziF_5AEgNTW-rMgx0gezFy6ovx3-UTXvpKUcaugYphy0_DsWrxHkzN2rVMFjmYK7DO-n_pEuxBaw_mmR2wL8YNgHNuI5BX2wz4XU4pcd84LrKPxcn1GoemnbBNp6an24xGpKU4", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100150611815543972863\">Sara Phy</a>"] },
            { photoReference: "AWCwydjeut36CbMqi8I-jt8SbdqOU6Gq5SmuRNqSAdOrZF2N42aC-IQ2ZUHiYym0EHoW-H9bLx0Pet8SQkMg6bnj126Dz_1kcmYroyFnNbrIPs63pDpmoMnSfcfckuseVN92cZGFKTCYrh-Imd0VxEWdq-uXoOBNXKOEUQ9gamXIfW_OrsTxD7FSD2anNlA6Ed1qleUiouAzSYKZByZATdh-7MeHEUakChk89kiX7NciSXsv46uAAtywygDxU5emOxu359FWjyKFT8gPKs6GUiq2fDYMtz33eucRMf6Tdhf8Kst94OWQGJRmRCoIGd_xY3NGbBqyrGgQqsTXIV8OUnRfF1za70W3yVzhxPstYj5I_Vzqiwrs52g8A-HbbWivhSa1GN5FtLp1QucrJAQFDMkOx51mrN_mlJ96iNlgULgk-L3Bvg", width: 750, height: 1062, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112212435085649773161\">M COOK (Korean Food)</a>"] }
        ],
        summary: "재방문 의사가 높은 친절한 한국식 바비큐 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["리필 가능한 한국식 바비큐", "오리 스테이크", "윙과 면 요리"],
        tips: ["아이들을 위한 메뉴가 준비되어 있습니다", "사장님과 직원들이 매우 친절합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15206049827258179310", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=M+COOK+%28M+%EC%BF%A1%29+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "후미젠 씨엠립": {
        photos: [],
        placeId: "ChIJ7bWoECkXEDERlAQ0HH1m8Pc",
        placePhotos: [
            { photoReference: "AWCwydj7AvrL0ZfQSIsb0f7KKRKR1y3hHvG9AYstpRHRKg5HtKQ1iWh2-cfniTzmzLlvJGrtmF2LV7cSQ0J2czrhKxB4twfK49IT34p6hCZpvH9dLq4_SE1_X0KRTFGfGYczJ_oHdkuCJkUR_4pgJLgdYS--YxQi-LOhF7jL_lqQJsm6M14O8BvlWYUk32sGDoQkuI72yHbBjwcZZgj4QoyAcSzW29mMkfyUy0rCyqXYVRv3O3-4KNs4mAolUdBNE17Q9Bn4TPMO_cSCwZshwNMgCT7XCRoyK0cZ7laRv3vUXJYlwJgArXijLwEKT9O9H1lmpNNi_G1Gf1_5i5L5_V_8cHqK8LqToXRDND6zaMnOExaS3jFv8QobbTIxILvEeiDNyzZrqROw9Atl5r8YaJqqsdMTDzbfo6Kr-H5NxKEr10MoSNo", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115888584427915566824\">Fumizen Siem Reap</a>"] },
            { photoReference: "AWCwydiwgR-FuJ_d61DAb69zi6fCnDUvZiVYHjVAiRK_kPlAhuqokc80bET-SHSRQWi3vHY8DKN1V6jVpIkPT2Hv9Y1khFMdsyrH8Jp20kFtAJ9Ui9G1XmUoPZaXzbsJBs1m3SrUtf7iHoswzZk7B1VKBpJNHaWLS3O9Fo87VgJmEdPAjwEvTYCLuqWQrv2HniJqLrnbP66jIhRUg1LW4MLdkejLYK-JAC6kR9V1H6fvkGVJl43Li3Ct_2vCb6iywZoEG68lBR1HLfrdvhU7T5UWLpUudSk8Er49NHaHKxDmBzKIA_WV3yzcRh8YpokXBHdzKRyqhRrEujRiEuMlTDRGxOro7wFiFFVutmMXwg07RdG7PPs_MG2WR-ATcRDTjh2pB5GSHlZbpyquG2aloCTpCPGTzlh08-s0MyNG5YpfiLrSDw", width: 1000, height: 667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115888584427915566824\">Fumizen Siem Reap</a>"] },
            { photoReference: "AWCwydiomjm5pQcALKcu-JfGtMW4Ac-aqieQyFaa2hw4McSVexg4_4fPheKlKdSlXsnnjQVXouIf5ympxeKemKZBpGZzB1Gw9v3qLVYRS6jnGW5zlNUxaBrrvv-unZoiUm4M_7VWBqx8DW_oSaPA3HAuvCNzOiwfsQYgwe5Eet2-9YrefGakQRzW66XAoOtFA1pruircCEu5Fa8JDWNOv1VohT06fz81kV6mpLmNrTDRK4ZI6omJwAz267EJ0ORCjc2zqX_0HCjskLKVWIE3vsxsrzBq7NlXWFXYCE2oHfa8GYe5i0tCHLDW4igWty_-zihGJ2FzYAnDYakiHX5mjU10hOcKWh3KoMFh9H6abZQp6P2MDbiakCVt2Nj_i2u_-ciwGjPBfdqaglYnUBd8QBoqDv_VzJdE4zabKKNmIx2AXhJSkW0", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115888584427915566824\">Fumizen Siem Reap</a>"] },
            { photoReference: "AWCwydiGfnflQsp5sHcuhJRxAhqybr6l8YU_O4_y3e8wzGJxcy8D1xfNRQKy5x6znkA-YhP6BqCK_httZCgbJgGCaLE70mKo0S91h6a9vv03EJrFkjMqE7CRmEMAmYEdk3rkemd0CyDe07ZtUsm_efOaFlMJRCjVv_0-cz-DmgYsZAofzBG-dSmBl9PiFaxCxohq95d4RGjQu4CfRlXKlkmMKdcKU2EPsIqqBwxguakkuB73jG85suySJ4swLnwgNBWjGjhU3DKCyvktXHuosX3ycZAl8FVU819_a3zRUNPMHkGYqu0H9ErsBH1NhJVvGPFYyJtpPgRBUwOXye2BqQE9dQzmVjCteapeHPfZ8SZHtBWTyakNqZgzsc4UIoFFhtjsoVxzVH45JWJnt4igcSeKBOsnJ8ShLuqm3U4Z_owFpvK8hkToHqVeckz6BBXdfQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109953815495970406772\">Angkor Imanaga</a>"] },
            { photoReference: "AWCwydj63LyC7B3XQNYV3iiSEdtN-vQEo5kUpa3JhFTazVlPneFGEydD2T6VfKip31irLGDYB2nJlHnJedJxmMgC6_JneCQCABlVj0-0Skn_atNpWWJWfcc1fIpshAraCiTiAFAOIHT0FYap1KyR4WIHJl6Ru9HvaB1QhV6AtzeUNMjhYkoAnlwzJN1Yfd5wFOPb3M-q35rXOBYyWW_I26Y7NwvJ1U2EnEXpjYGsbguzezrwCIswcncKZLFdrP8XldJhu0ldNuf9Kq9aWudjhwBuPDHEAvfHAyDQLrOLnoU-hFIWIGYbmig5nBepMFhA3ia_6w0q0HlECA4iRW2Tv4r9DDvqGADloQmO2wUaO8mErshD4ZRo0eebw5bpYbLrVMkww6nWhWSvfgfXW-bOYvTVwkCsmQcTmZ-IJUY4Q5jdM1Mlp8b19qMKmoS14_6tnh_2", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109953815495970406772\">Angkor Imanaga</a>"] }
        ],
        summary: "가성비 좋은 스시 뷔페를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["수준 높은 일본 음식", "가성비 좋은 스시 뷔페"],
        tips: ["25달러의 합리적인 가격으로 롤과 니기리를 즐길 수 있습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스시 뷔페", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://theaviaryhotel.com/dining/fumizen/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17865892409308873876", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9B%84%EB%AF%B8%EC%A0%A0+%EC%94%A8%EC%97%A0%EB%A6%BD+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "사무라이 스시 & 라멘": {
        photos: [],
        placeId: "ChIJoRsEYfgXEDEROqhhuYORWeI",
        placePhotos: [
            { photoReference: "AWCwydhnK2MEd7m95GPITC7bnFRGkjsBPbjDCxHHA3gOugwapiUtb8wqKyp2lJuPmoqohzaaJoer7yy3z2sr61dbuJkjXuReGhY3_E850IXJqUampL5B7B5cVauMOlNuktmiPiJCwdNjfYSH12uwQtBdRkEELuE0Jc02kxSTW5tFoNJbOyWQcdPNGBAf8fnlxQR061jHrH8f9kMazwedxFTaITAvDPdH-qgqug6UxZYQcn-1nAKLNSB0CM5aG9B64cn2aIf_XXAVrz33LkKm8-OKEy-kcT6ODeEe-D9zHb2LK8X5r_-Qgk1b8lCFbSgMnxLdkBmhB6jkh7qziirVUOdQpzStY-6XbMvHmi59lAKYrME667AGgSk8sAi0bvZxkjH3fyhBn3F8tp7VE8ksVhV2If42ANzGHQG3AQgawp6BttNINmOuRQ9sZWwSIMcuWiqC", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105979927066972460913\">寿司 &amp; ラーメン&quot;侍&quot; 焼肉 焼鳥 餃子 日本食 SUSHI &amp; RAMEN &quot;SAMURAI&quot; Yakiniku Yakitori bbq dumpling Japanese food</a>"] },
            { photoReference: "AWCwydhNutZ8fdmjdj1e03l6kap3zLSibcv8n_FVLRjSV8vclLv7uTc3_Kxb9EzAo7_lksur5vCb2ORJAgXCzTA3a-4OQR3jEevVuIIrZWs8nyz2p2ewAwwRYW7pz_wSYXVS47NN_619YH4Durx-nXCsHvcSzwSWjyypEHNIiBU5BKSWav2k9DQy49zrNHw-_hbDuO1yX1qjEA4SFYJwfJyhZEJrekxMiWcPaeuWAQNC3CtjCnm5Gv3YHyVLaABcGfxSb0r4KTqUHvlJvh2WIj546dRM4xwuUOAa1BH4JNmX6wND9dJBBVNupvCHk7y4hx6qU4h1z7Fw0ruODFOJm7q7N078udMcg5_2LhXu2DxfbT5UA56hMwyfKaJ10t-2arrA_aTI9KahNwCbHeq91iyihNAFNnKX1F1vpwC3XfGRdB0F_43u8myprZD852nrEwW8", width: 540, height: 540, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105979927066972460913\">寿司 &amp; ラーメン&quot;侍&quot; 焼肉 焼鳥 餃子 日本食 SUSHI &amp; RAMEN &quot;SAMURAI&quot; Yakiniku Yakitori bbq dumpling Japanese food</a>"] },
            { photoReference: "AWCwydgmXj6c45BCTGbWYBTPFMoW8_etfgXP9-2mdU6VcnHzZpXL9TDAEtYvEBIZw3UcoZBNSbIG6JFqg6OE92ibGJQv6CJifWFhGfjVSLsq5xC8ms71F9fXAReR7qNFMU_7L63KwZ9xvW6VSnUXWwj8yECfoBigsBF5Snx_2elYUB1b9mf_yA8N9N5mrKGeX0yDdxGyAoa_zcs8hYgMhPpX1EXoJ8B7uXYp8-20Hq_CYQfpSZjDSschHULfTJbYjfniqJuiBbfPzvtyYQiAG_8WhRV-9d5wd8fnl2uMz_0QJLsJG8pb3Vlc0T0dPrFosJEia7m5yvQRp8QrikRaagtNT-3Jeag1DWESjoJ9P175bn80vEj7Ez9v_TViiHTSrR2cbMtoSZ2fyomdXL_DlPigZ03Bphfl262LT84WJFjBehu9uk34PxoNMuaWurfQ12XG", width: 4000, height: 2256, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109180839141807756988\">Yoshi S</a>"] },
            { photoReference: "AWCwydgJOvdlEFWcfDLKJIATrVnLQvPJZx67j2UZAsqVmRFEZCnIZkNBa1D3xoAGOg7gQpiyzjdCBXXjU80d-oyodJYRW_Vuyb7sSyVh2zX8IcwdT2mx0ED4kFWSxA6eg6fHPfDzxaNS-cyvfL7PGgtY0997cYxovNS1nAVvLORvt8pNp7fiCfuNJDVorgTNBZosuGYL9FS8qHqlDHCkKVmwWpHqHAPPDnh-eNMs_Ry0Pt6SJnR7t0WUQ1zuWXooqmrMm_ZYEpK5QlKY6hNLfE2nlUy0ypuhBSV_F0SxmE0VdCbNLjLn18xW1HiREXXAVy6r9euwgKVB8_j_Sc0ch6IBwX1JiFhCwKB4qkf5nlBaqyvmDzNdKMtb_Rdnd3PzBg5TD-UMxIJDgNYtYnmDQJBzM8I_sCkSwjf2rTwRnTkzx5UsGioODqr9LnmkjsPDFQ", width: 540, height: 540, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105979927066972460913\">寿司 &amp; ラーメン&quot;侍&quot; 焼肉 焼鳥 餃子 日本食 SUSHI &amp; RAMEN &quot;SAMURAI&quot; Yakiniku Yakitori bbq dumpling Japanese food</a>"] },
            { photoReference: "AWCwydj2kktKGthKijXl3DN_ez5ATNrnZEgoA9npB29zZRMRcYaknxqz9p29M2r5FyaYnPq7MVZjVwRDRbBBWsuMEOM6oX-K8TUEdrHrb2G1KPDk95T0bGd1sCTs4uNbhSfDL88pA3rBFD_MQCqA8zYQ2knhravl9UNW6a5-zWOiYL9sMxyh-vwRAsK3-1_wsLta8qYaxv9AW5reL1hWP2EHHlexozugxtH77_IJeOxVsip6Hqq0NbIYEHmHYix57inJka0J6SeTw94t0cpONAM7cxciKSkLfB-tXdTGpLtuUwrj8JF2gyvDyrAyux6tDIgyfzU4lNHDTCNlkj_hbgIFIz8fL55WNh0jSSiK7eVJChOxXvwzlUVaQbiB13-K1c-0fhvwpElmOa8KVC-P93wZZ0sl2X77H_KPYRTgZaQJkJKjUbKZEx3DS8fypflnyGWh", width: 4000, height: 2256, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109180839141807756988\">Yoshi S</a>"] }
        ],
        summary: "일본 현지 느낌의 맛과 분위기를 제공하는 시엠립의 인기 일식 레스토랑",
        updatedAt: "2026-08-14",
        highlights: ["일본 현지 느낌의 분위기", "뛰어난 음식 맛과 서비스", "합리적인 가격대"],
        tips: ["시엠립 방문 시 꼭 들러야 할 곳", "꾸준히 발전하는 맛과 품질"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 4:00~11:00; 화요일: 오전 11:00 ~ 오후 2:00, 오후 4:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://calendly.com/ytani7777/table-booking", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16310227520435890234", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EB%AC%B4%EB%9D%BC%EC%9D%B4+%EC%8A%A4%EC%8B%9C+%26+%EB%9D%BC%EB%A9%98+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 하시 재팬": {
        photos: [],
        placeId: "ChIJsRIT8G0XEDERD3iWOaUESdU",
        placePhotos: [
            { photoReference: "AWCwydjaszXKYXFpthiB5dLd4PLV3kDHRB3T6CjayuPIANoGclEzAZmjVjtyehsnHY8y7zoqhSP50bXtgE-gTkJHFU-Lf3nZNo9PmjsdWr2P-trOu938ki4a3mxNlKQamFJmGv452K7jotPaTbNavIUn4SwVZHM3cTcFCXTnw_TFLRUqMtvWvkWNFmpCyznMz8ExPwMG1L7H9L45N2MQ1pJZcVkRckyuvClRLiZSeA4UMBEUXAF8zUPUvupI3WFRgNhj8Lgwt5WIO0OgfrkJb-F6Lthfqrn3PRpZGobXcvTZia-VvS5W4hnJw7xrlnwOLiy1duj77Pm8bJ-_HFC5IE0tdT2qKFAmvoCKisDwWJEJGyAWDvPRiBAqQshjqCZwU9xje8fOnDGTLxefsVFVVnAZ6yJuhrFFfkOdKdeWUw4", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107431928200224929314\">The Hashi Japanese Restaurant</a>"] },
            { photoReference: "AWCwydiPBR1X5--YJnKsH9nXWqedrbH5ZSy_TWbj0DUzPHAZ7kERQGw9CfKs6PM2Kwjkog6EOOx6njAolJgqv8-kMJg6j3_iKiyutOOsaYdU-fBrIAGvwoCSPtAJ2BA0bEE8uTnf56L99YFVdvWJR3YLTyGWNTsJzaDYU0ZOZVfwe34_TIMyKTwGQVSjtP-zLWxixUqOt1NtxeX37XCYtbi-yyVtgETOIxzX0ZO9rHWrKxU0Ha2u1xQZmueEBJDv-2TiysrqNsevyMlvQRnowZLaZg5y6gdHdHcgwfdr9P781cGIR4RhehMHdN5wtigkG2AuJ7NkA7yHaWeWkQJTG9Z-ea6sS2Lk_8MS_4ERIMn8cYusAmew8hTV_UBvZaLGLG3vBMKzJOMzrN-My8YcaMZAsZm7f2bsSWpYZvD9Pxvn8EOug04M", width: 1493, height: 980, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107431928200224929314\">The Hashi Japanese Restaurant</a>"] },
            { photoReference: "AWCwydiXIVwgvmheJGw7VZQSSYlrUEvV9Y9dGpRfkWvM6-H7-nvY5SEUbznG2YYgLN5fcrIxdobAZqdEccr3EHzs5pewli9W3oPuOAhQdFFefPS6jbHfkuwvHJjowirlKvwNLQSkeFWC74WVuE0ruF9f2LGxKRw_aAeOZO62AHUEvslwmya-8WPCmpsMUKQQhYQ6-fycMHipOy_vcXyDKjACg3Kal24N3ZoqNamE0uyWKsy-NtEQL4afrTr_N9rDVNk23qYWLw4KQ8zrDdvLMC9tQwN_diJZ4UaAE3FId8gyNUl6SNCo_8j7n_i3glR3Idpzm6SofaUAUCyadxJ5Jr2h6boKe051QgA7Y4YH2ekuTQhnIdhzbZjuV5IriLsykv2tkhhmVnL3FGi-yDoCLDG_AnRNxrrnk7LixSFZhFxyrxKJEcw", width: 1758, height: 1000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107431928200224929314\">The Hashi Japanese Restaurant</a>"] },
            { photoReference: "AWCwydhLRpqNleTkk8rX3_oSmc-JTv7grrFFLgH9xDqjUU4NLlXGNNsHHv2uiziIb-s5HGybkN6jE4s3E61MygJELaDTGpuMmEg0MxgWvM8Sus15C_MfbYk5mpOY87AWvj7IgcNYvqIh5ZT_ROtwW8A5UplutEj_5BC1QnOzMnZHOGm584UAnLwKlhzphu_26JQGAJ2N2S01guZ79mZHswpQUXNoDEzqY_DnMLg13-4TUqsE8tksHaDxuFyx_Z3Rad0jvRacgl6zBOu1kKDwAiL0pItRb8-wCB1lgFX5kMricg0vNjXFTuMN5CxzflpMMbWq-48bs2mXlQhfyB_dbE_IWt39eIBm1AXsQk91OjE7bL-wF6eWu6eSsJ5FLZfBk_-8QSYX2MNZm_tGTOB4Tg6aIy0DIbo3iEWwuPMlP5fwkiSDzMPW-vxkE-lb370H3mCS", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102935609920606266438\">Sensei Lab</a>"] },
            { photoReference: "AWCwydghLXTdQVWAEZsvVAzt3bovTCgDWMnZEzZvNt-Kg_NSRn4NbH7T1OqZQvLpK_4xTwPPkkAqsMQtFvnX49i6CYVEwtp2Tj9btGIhpdsUWD8ac7YkVbNEemjw_zHAp1uQJjPYS1k_h98-1BCkfsb9-NY1eqsTPeOV4XWZTbSZx4s1Jj0T7FqefIybMl1odLUZkX0yWyM0PR7ThuN_kWOzvCetw30_9eQD9vww-fL5kzsKRok4YXOHtCMGDe4yCyNJ340L7i5m_hNzWBxq3ToTzC40ap8NEy96fiNGPmlc-j4ODtsC6Ta4dxmChbwEndHrPnbFiE6aY1Rgv_XAsvTECtZmZZFbwsQFzltLTk90Pw8fZxSUUzSHVa8WCPv_kQbkGFbPUGhl2aFstYOY8QF4hWTSfPj2w_fmJwTSJ56Sye5k-zhZAVsQpd_az_D3Zw", width: 3659, height: 2746, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117314474636208782399\">MARK</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰가 증명하는 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["맛있는 음식", "친절한 직원", "좋은 분위기"],
        tips: ["다양한 먹거리를 즐겨보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 6:00~11:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 6:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15368820311060805647", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%95%98%EC%8B%9C+%EC%9E%AC%ED%8C%AC+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "코네코 KH": {
        photos: [],
        placeId: "ChIJ7__n1cgXEDERgjkqOuWW77c",
        placePhotos: [
            { photoReference: "AWCwydhi9zsOi-SYCSYjBCAkvxNhRkhZWjsy_rgi2MIENZXFslaoFdlzYQs-uIQMkLZK0gaXeXju-EsNSYwqsKrak_kpnQIZw14ShdOhT6h_RUifPiQ6_JzfMJt-4h5Mv2JrHi0uUFmzloWzN69s6yFP5WCyC5_L_XiPC8jwOkcN0GaVCmwJ6JDTMZ8RQYXEviSoaQEd84NKEdiFVxEr32TryOs78pC2Jj0l34D1vwhw0HWb-hGbDrun6-5Q8P5iEtoqZJC9R2ZyysjeYp_wO95pq77LaNT3ZmZkwbLKjm796DFasu9AFKPhVytwD5pNZDuuAoHzl0goUUtGYCMQfoZWVccW3WPOzWnZLh5r3Fj9rGbwR8j6ZwxY8W2mPs4pMptV3h8rRlaY27CIZv-E93KMIPQIokZWl_qiu-iC17gTq-COQg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117357020038732923431\">Koneko KH</a>"] },
            { photoReference: "AWCwydgz9C60WApjdMgVVegREAOyepOyx_rfdlwZ7PkwnQFo0royQNiirz_JNXuCqFW29fjXXAld0GzlwCAO3accy4q4KzAFhGfhsM5Y8hmdFzDrPnc6exfIVxObihczmtYUbsvFtE5qNDU62TxvCTxLhC2F-F6FiclFjScHIKIwhyycDs9iTxf-qYt-kLC1emmXCbuSDMulX5LDp96JSyLHLp1LG5pUAZXGCnzbIm-oBj5azTDzv5TLGDW5VBwzpjTqnksyWgKyERLUIEGsQle0Nk2dUR5ICYQXbM2HVu9z9AY9NaqCTL3ILgRG3-Ur6zaURlncmu_EpCusFO_iN_bNqOdLa5gJjTyk6L-RjcE7FVOj3Y19RrzrjaHQZDI9CFNQDjn7cgrohRctbY__kx4Ai23SdBbThpDqLIjOg-j0XBOK1ZFqpaprEEs5T4IE4-9o", width: 4080, height: 3056, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105896224809760757579\">Kea Raksa</a>"] },
            { photoReference: "AWCwydgKMGZrCm7DRQFwjuUBRRUcdqueqM5T-qadEDWMDNWA6DywDezynQVUTI1LLrbn7qOi6tujCCfk_ysQDD26I-JluKxjht2kmT_SfhVT0Cq2Lm7eHygp1hjiO57_RLPhrUnZJwZGm_r0I2R5JbqcsNLM-2_JX90C_2_AER-f2VF4g42isk_bPNLeYTJzgkfqA048d2nfqWQeXmuuHpSC3Vo2bBa3kP7DQ2zMmAs39lreCmgcEl29Hh4_aWEIrCyuF-QvRqKnHzQ5V-ryQsZE_jPgoM1-qFbzuO5dJdvZ7dlDbtuGrZsMpsyBeBXqwAOfnhYqDjjZrWaLnkAYa8H-A3SS3wv8yggwGmUU1m3CAnz3aC-KXVgV0Ucr5RfP0aTeHaUdUNvFi-C5ax0oVlqChmjSu8-DX3fe4AFBzx7YHPFwc4tO", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113522557586869182390\">Makara Sokha</a>"] },
            { photoReference: "AWCwydg594KMU7LZMKq2hcHPb4UPs2VVn1vytHXumEd7wNfRT2vxGmNR_ioLRJ_2792ZfvjjbfJcfN7eS_A1PcOrcKb3lBTukOR3kwxK5qtw52opnz8ddtHwnEnUd_mzwKFV3afHMzhGjeuAA7C_JzA3sB7DG68QwLw9cCjEo9NbAn-AzrcNhTnBtPG0CEY-EjL4k23LLA4V5Mbr0elX89vRpgMJdsKiz1FBDu0676LLkrqyIRfQJA2ZvfdqZ8pTILc9p8Ml0Qxt4szpJWD5Ys9ZXBKT2rYG1DEvV2mOFLXpxYpUfgbLcY-21SqS-FPo1WQNLI32gmIlBXhcxRNh9d_ND2n3mxuwFZqnaAtYCpdhnPcga9oR5jL2e49OJjWKkdvo0pv9_8SMSm0gdJFMiaRiU14VTg6Gluw1CXpFzlKIufCiyInTFX4sRmESOuKoHxcn", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105946051851342644975\">Julia Kaczmarczyk</a>"] },
            { photoReference: "AWCwydh7IxI6oTy5dqwSM72Ad02AwvZkoFXxGgg2wR1s6_-xgbzkjSJw8T3yS1Kte-0t4k9WKh9dxFuxmzMCMwH3f5-8xPUprxhca-d7pUePVJ0fqUpi2Ht3QCJynljgpMCvYqp0RBnrOaDl8g_4rQAH1KidMyAKXlcg4W88YIta3YTtIwD4NUhvq7rAa0Z7XBXeRNlUjVdCJyInRtVIuZdH681y-m3O33uwTsSG54OEP4glgzQ4CqPmhMHxYZjCh-JFUW4MdZ5wXL-29ck13gxAB_t4pmRQEakrFP0TVZ7PgvXE1RKPHrYm1tB1Bw7dUHpHhJvjcGhPs9hX-HA-s6yaIUC4n0JYWB8hlvETsNzr_Dl4N_Y4GyDYUAwQJT0dtyeaAEbQfhGZe_R32rzgQRUlrXHxjZ7u6Mv_srzYwG9t8J-59N2_OJJNCIebWFStGMFs", width: 4080, height: 3056, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105896224809760757579\">Kea Raksa</a>"] }
        ],
        summary: "신선한 사시미와 스시, 다양한 구이 요리를 즐길 수 있으며 어린이 놀이 공간이 마련된 가족 친화적 식당입니다.",
        updatedAt: "2026-08-14",
        highlights: ["신선한 사시미와 스시", "다양한 야키모노 및 튀김 요리", "어린이 놀이 공간 완비"],
        tips: ["호리코타츠 또는 일반 식탁 중 선택 가능", "아이 동반 가족 방문 시 놀이 공간 활용 추천"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~10:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/Koneko-Kh-106974798469862", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13253978139642182018", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EB%84%A4%EC%BD%94+KH+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카몬 재팬": {
        photos: [],
        placeId: "ChIJ1a8D_9cXEDERFJLM12FcXCQ",
        placePhotos: [
            { photoReference: "AWCwydgJ9vPfTNZcT-zbGp2NoLYWLmjIoMAcdJ-o5TP-neVVd3LTsaN3snPKgaYwOiw_P5gog_dQiFsTIIuFb3vZefxVg7ESVd3qlqOLJILGC8keWAOS3pIiZbpjgz5GjU3AArMTq9emTM6fEKb8IlbYwQebwwl8gARtVB3zEoWr4XWwOUpyS6GhJs7QIvB5qdBD0itsPavxiw9BrTEHZhD0VvNxVWly6ScivddtlNO8JWo7QVr3jSGLtzDXfDwNKFawO6vydf8Y8djI0cfXwcTl2y-bb6coH4uSAJcWzZswq-luuEAS46M0GDglrIilz1Sf04KzYBO-HG3vhQg4y8YGOXfR_CldGFiMmKFI6swQstTFTlbLQUUtseDwZzbI1_bC6PMz8KM3UBPnrVdgWjpKYX7jNTG3ujZTZbHoNS9gsmGPwA", width: 4192, height: 1936, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104620488658224017508\">Kamon Japanese Dining and Cafe</a>"] },
            { photoReference: "AWCwydhXJQz7f7fZaWrpYleLlrEshb3tVdIm2wGH0Sa3WRU9DS-7XgBVIGO5bPn1LBrlDgr2jSbW5S2FUxx1j9hmMMdsofsXrsCsyKSUPkaGhht6erc1pk6avcxp9WQt5huZeHJ_VxwBYmC6_w-G834leist6BF2ql2Ps2BMG4y1b_SWu7lioqrmdkDiov8Qrx-fZPtOgpUyl6rRNGdV_cKllB5Qh7AmligXdchYwOJCUfi8sNFaMn-XlMQKjBKXkxxl1yGwu3c615heIboVp6HtoSEC5Hsmc1inSeaoBeTMMbM426pS4j3udecg4nM4yeIfKVeD7bzcBpj1ytBhSxh_7iIxui97eGjwrNaQ7iXK_IoH7WWv1Fh0wxjZyvuRgzIkf8xbDWIHgHgSTyczWGNrjUi0_r9RvtJ2388gOLNw8c8zANKa5etD-FeCfCtky2rJ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104989965079270596154\">Khem Vongreaksa</a>"] },
            { photoReference: "AWCwydiaJ399mTI7uSwqEcoDosgpwHuO7Nzb_ehQxe9s62qDy8ElSGm7PaqlViUQyPA-hu5luDxqCrJ4hrdlLkRyvDKd18NTl8axdnSPlqdPP59xuV741XccNO2F8dl4qgL1L_wMBF2SAVQnPFl3RLxjBTu08Jh7jPERnANyGVq6t5eRDbQ217D40LC9sf3lL0DdlYw-FwN0gy5zoetMyKSny6BcX9rbznyWTlEXshTcb8vA9YCrjvefWoEKKG6AbK6O5-ENeadyjhf1S4tjPzQooL7yqmOusKXL07SXj8J0fnfVqy_wRZQnsP-mK_hkcoafwYicFerZDBemdb37JK2U26UgbS-_Ts-qNVVr285iQ9XAtQr7rn0Uj9i7AAgfYtg618KtXeVE8XGbyL4GL72ljlSgyMMnNjZx5F3lxh1K8SykXXvE", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104620488658224017508\">Kamon Japanese Dining and Cafe</a>"] },
            { photoReference: "AWCwydjQPyHQ97iiPvWfFiKv5jc0Elutnpod9LNLGGR1bOSsKQLU_BQcQCE3kTT_q1T1cmhAZjFd_gwXd4y_CxITW-ADUi-dP0-cgojuthFnLrUCDhTeFM39Cj8CiN1w-01uW8XBIpMEyC66_0MG-pWkjn9qCsCkMQXTVzIDRsfFkrVAPQm2tZephIXeJKKCFPrCiY-Bsshml8uQwdSHN341UrLKGFDjfYnSht7JIAidvHWUfJfodQmKdtxqdo0LROc5tLL3lXGMyxs_YMVAHgHNpwx5AAwdWmNyRqWECYuBfRKkwnJ05cF6voPBTO2lyYIGuZkei5hviDYAkCVR8iZKnMS2vqFkwuLQykC4Tx4qCyYh-Zp1IPKdjB-LznLz2ws1JH_gUEEdYIsdTSs-Lm4fIZqNU4HBLBt4FoZc3vI9-Pu-P4tjgtAn4xXYvzOX-_uB", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108826994482618952373\">Anaïs Gnd</a>"] },
            { photoReference: "AWCwydgEFVlO23ojahsrkQMVxiD9r9977Nb8QhUp90Kr08GpwkRutyIxFsA_9VKMjVvrKfTsVRSIy_WSM_GYszWPO2UciADfZXWp7pHOsi_LIUVlZYdENRr2T4Lin3tfLfSFXREMVW0oK6miPmU1NVOl92ULbXGFvfm3nKkxVyQn0Rq6ZAEHnC1om8cJc0AlzEpwf8ATncJ36acLgC68E_haWJMrU93kY8p8sAo4F_K5ALLAGs8Kq4rejd67IOHwVIVc6TLl7QVlSm-3mYw9xuEdRW9LMHleK1cAxL7ETd2tW9vKm2FdSGDOYYGc6oN7ZqoF6A2zNoTDaBg0t5hhwNbOGUe22efXFGIIrrqtNPamdhNVFfZkXaAIJgjMkpgUi6faXtliCPDVy_-cCFJej2iQPv5hIN4lJ4fsUq3X0qyGxPKiTdT9w9nmu3HlQxY8d6-a", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104989965079270596154\">Khem Vongreaksa</a>"] }
        ],
        summary: "합리적인 가격과 친절한 서비스로 높은 만족도를 제공하는 일식 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["일본 현지의 맛을 느낄 수 있는 음식", "합리적이고 저렴한 가격", "친절한 서비스"],
        tips: ["켈리포니아롤, 카레, 튀김, 오코노미야키 등 다양한 메뉴 추천", "가족 식사 장소로 적합"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/kamonjapanesedining/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2620070658524877332", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EB%AA%AC+%EC%9E%AC%ED%8C%AC+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "펠리니 씨엠립": {
        photos: [],
        placeId: "ChIJ-yymhs4XEDER4bLbDEm6cSE",
        placePhotos: [
            { photoReference: "AWCwydgdEsICgXs3b9_f3Own9zf3innXGFqR__k_5fGyBPd13rkmq923jqcCz9PYiXjJ0ztAFIqku6D_FGyZYvzRmMlv4oB9ZvGto6SmeXPIXI88yr6w2vAMno7HnZhi83MUrEvhQOS_ISjhifdHxheuvZU8aXfqjaVhVJhk1Jrys29VikZxeZeelv6cgsODV62drEZPqaQ8uiEIust4EJhWaFt_Kj5RlEQZbJ5MGymBt4PGktd9rYrtE9R6qCkw0d4MRwbn9ZuQ3aHgQDWjSypV-b-S5aTl70h2hSpicOOoz8j_QmB_dRibdQPlSwqwHx5umBY7a5tyhHOKLH9pu5jbpXYNVVJO7oxGOyve-HqCjhkZCLUC_51fYa7wT4Hcw1XPuZcAUOVcbkvLK_sGQ1EEGGqtLJvMZBi4o98SBdlQ3RRnsw", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104685909358962598493\">Fellini Siem Reap</a>"] },
            { photoReference: "AWCwydgnGyX26zmaqLjZU1tz3KhsjdS748pBWeX6LPGy2qvsRAZEn12T1tahup_JKsroCPNODyr7-QOrWhDPFXnKyFmyggTbxpw44Vq0kqVlmedtMNQEQuNCVizO1j41DzqHa-dSiTc83mesWxELywg4BmR7RVxtm8CYvcx-IxNxTG4-S9eOaFRRKi1qzcBPQiKNI8GZ3uMa2T1LOWRSVGjTcSZbvR2_zxT-ljq7iczRF8an2Gk7REAW39PGn4W7lKh8zFZnreXRW57anarxAZYNZSbyqM9tVNxzVD94lZtB6fOEz_-1xAFg45jtYQe6-CDfJw_ffDc5vVLE_gcJOg7j_HDBRJz87twz7tUZZ9JxJXsyOiFk82qDa6IgTk7NK9JoqDWw9XuA3gIe_tmLQDV10JkCUjYRW6jMZccbVm1hUziClaYrq-UT6tQe9my-Tc9D", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104685909358962598493\">Fellini Siem Reap</a>"] },
            { photoReference: "AWCwydhbBWfLJDkrd4_AzoZID0D5IKL0-ETxc5cYlDhqTEULdzIGWah8pkj4PoIKWV0NXzYcU0LH-LpUs1zAJE56wylQxSzxSRKpwOHxD9ZpUvQAbQoesUGiCzCR9HBamMcyr2DroUzEm8OnhZu8BuovS-quMV72DkMPLToheGos3_IdOU8UoB9P4doqPq8NJfxbGZFnYk-HcI1QkjCKEpP8MODQ1aVGr0OmJeVqgORAv7NZ-138dVO3UVCUxM-9c-VnVj-I82l6qzXOu4CMkQgIxSDObMVZgsemoTsQqooD8m3p4gH2SoACKDAAX1EqQJ7U47u1f8b6Gne7Jn-YrcOTcVMibhVRJ5eeWRPQq9hKUU1l3X05AQOXl4zI7BQDisP-XXxuVppQYwoLw3nU0uXm-_EqAaKPHBn_cIlRISPhQHjWKl3iLwJHk_jFQGZA23ly", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113294204885930502671\">Srey Nich</a>"] },
            { photoReference: "AWCwydjTZ4IYfBZCwdhAVA4jVMW4RpW0ai4YgBnG2vlEdXBmM3VtR_eO27JlLxRwAnzrC-ZloZDu5ozWBPI8VsqA0CtDbKqBA7ElYyYvOau-M8tpFLmQj-WiGpdI6PLU3tshCN1T0YD2cIuZi_yU7NZQbHpUP1Tah9PsOX4_mdYrivHMRqbjQ3gvSw-SmqlORXvVaJ7McLDLNuAni1aIaO9JISb_z6QSdtcsWRjw1KEgQLQ7n5O8xfJj96_2JIXEpO6rGDXI3lW-KH8hUBgqXhlGzo6NqXdYZY_jtx1lUlxnwiJU-VWbg6cF2KhaTmQe9uSfktPR5IDZiM4QL4JKEDrz8plEpc6OaxetBpiNQ8JQ8HNJ_34rPx8vsv25a0tZRzF7rD6Fux2l6MLUojjJnysfC6Spf3M0TT11C2mBdmFpO8eVcPnw08dpVE76qIwfJw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108576685035905865162\">Jo Frei</a>"] },
            { photoReference: "AWCwydgS04utdow1rvjNpu_rIpItOFmLSFKutrXdImjzo0pNW9IPkN6BZ6CCEk2_0yly8waVtHuQWkK5yF65coubJVEeK3tCRv0f4Y97rtZnvzW8l8B1sT8BuEYqrHDa7wcTvklmHkFHoyVMfTCtIFJ5iAOp7sL4sLuXpBffUTufSJas-hE_YqCCBMSyhox-EeFSoJwBzi1iov2XYvRZ7xG_pzJBGeXlBPzM23VagDyIAz160JV7BJMas1NR8wpQMLLLnsfNYePVgXCY4LGVyu0xdcHnM-xP2S3LGrLYzBaa22AO3lgMPXFwjEmbUrrgH8kpw4erpT2ad7MQO4PT-2fhhSxbZ49mMCQKhIzHKHh3BRZ8CnuVU_qdU5VJhY3uv-ftzl1NMXz1QV6qdS2Bp3fmH9Mb3JAv5LQrTLTUVGzzwxxysD0Q6H7Jc1tBSXWVo6NR", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105940489960941334511\">Fraydi Kutner</a>"] }
        ],
        summary: "높은 평점을 자랑하는 정통 이탈리아 요리 맛집입니다.",
        updatedAt: "2026-08-14",
        highlights: ["훌륭한 이탈리아 요리", "친절한 서비스"],
        tips: ["테아라 등 친절한 직원들의 서비스를 경험해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "이탈리아 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.fellinisiemreap.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2409912098531029729", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%A0%EB%A6%AC%EB%8B%88+%EC%94%A8%EC%97%A0%EB%A6%BD+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "올드 메종 이터리": {
        photos: [],
        placeId: "ChIJxROYXQAXEDERR8diEjXpotE",
        placePhotos: [
            { photoReference: "AWCwydh6FXzyfX3mYcw3Z06mH4SSapJXHui6ugbMWnOrgmpMGUJUVB9tyAcAxfXjc76daN3u0TM9y_1CGgw1GH4vRiA7Hlv9LLxiYvEJnC5XHMcFUQOMFtRShA09euCVo0QmhQZGaJ9O0rzGlNXZcuJskg81QjRgL1WliwllZWVAovmWrQPZXgM0rPfxtsi3berPOKneAaOh8bgJNcmtuyNrbouvgKZHgZRuhDhilewPuzqiD1fm1DxeUS4jMKgkVFUxQthHKWr96pz2rZhkYqvA2ZKvQ6GIN0Y7L19OePXZzXddpuB2eSorNwGgBJ6bLfb0eMhV6dywFyH0cMikcKR-P_A5fRrZ3EOwQR4xc8rcknkcgMLuB0QC6Y6v-flXtwEZo6L4KGqUCwDxp1UKTIq6tENLWZY3HdPT-RF0E8f_NkekYh7z", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107314819143331960967\">Old Maison Eatery</a>"] },
            { photoReference: "AWCwydhcOj_HqCLVXboh3PNCdektIdc15UyXZqSdeBNYHW_LdEW4Sq0LK-4UBBtGRWGvHenbLWL29DUCuVxBKECKzp7pZD8raU19yDebq16GzVOhVFLagzcNBf1WBCewVUoS3j91NogkFhwJt3quoQFxZBXc_ilYlznsdA-QZuf2pViPcvw2ugy3x32LVn_COGiJQEuYwMKmrR9X_Y-v01WtYX9YGuvvsxn7wdG4q5sGZKDMh3M4nDvPjbenn9YYPfff4FqxNcvOAsIOrbXHSRSEiImg_tyI6_KWR4BqHSVFKlBVyrMcC-4Tkl1sXf51By-1rIKRAFJiL4v7ih0ccroET-M5dlTEp3GqPXj2pr0tmhuQLcdIMqs_I42x-0pTmx38AQzbu0fP2vIm3mPPb86fWBRoIZvARGmqP3T1XUVoTawcIbMP", width: 3410, height: 3410, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107314819143331960967\">Old Maison Eatery</a>"] },
            { photoReference: "AWCwydiEYWDKaEzR7wYKpLPf7VekdcNp1hUFIP4HuhtThYHT2BdytCxfK4vaymMhRgOt0N1UFQQ3hlx1Ic15ihV_YNbv_P0XZJmofsC_oy4Wxr1NdbIqvERSzDWV5tbjW1xTJhp9eQxvtzDy4HWVX3fGAiHEeAo3bGa2W-oD2MrfuWYpJCtTo6LWf_zp2aP6FzpMysz84vFqDo-xm7Un7N-Xjdy8Wd97hryQXyiUpY6g1GvfjFkOnXqdfG1xA-9vh-uDgcgdPPuti7jDZdAYE23KKADVeOZM_CGwvxrE41L6nCLcshw-7p0u2_swyADLi-AWcbR6xyyLnwUlZhgUi0TWlOROoeMHWtWxnVvXvBSbUH_yD_uBATCc919BPH2ESc5wsG_KOD6YwXSaxVgvQsoBBHv3Rk_ICL19aAMcdaQ5jJEeZA4tXQ06Rl34R55EOTfn", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106908941346220166041\">Koren Alfassi</a>"] },
            { photoReference: "AWCwydhGSp-81oqsvf4u5PJ1JsLU7p5OdSvpvAmMMdFkaSdGMWNaceFgWnTkCjIEy3OWv5_SKnU5oRal9VDlih8r8Up68X-XK2eA-PYEfwPDe7Owm-WG67OKQrnWmbPVFnnFOUdP1iR9tcQEgpFQYaq32R7xeqii5pNf1beZfM51dcFA2o1OYEPJScaKe3exC_5vp0h4IXCqPQispep3JDktY32eCMihRY_7UZNC-PwqE-BdChJuqdRIyy-dsC0oLTddqxxMqwZ5obRBtAlvqS9SLwZvh8ZSbvbYOd0uJpd98R2NaE1WFByZungpHMYDiHOHfx-1OA67Jnw0Ld_6WpBdt6e6St5SjhL0ao0XnrLZKQmGyO2TjJiGihxkTGD3hrSS1rsb_VczG_v8x2A3uZAYiQf97nCp04es1eQ6o88PafoFWE4", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107314819143331960967\">Old Maison Eatery</a>"] },
            { photoReference: "AWCwydh_jpdCXz6kXvnL4oONIV8W3K2cWMWeXg8g9MXF3eFBsrneXRrahMDzFPt1ANgf8enx5OVA15P_Kj2nk1mIEQ_412Qzb1oOdRjYsrsNglZZIufdEIz2F7H3DJdJQOIZpB8PIJUN_A5Wriy0t3U3bk5MSzJSfYcskURRQsYav8OWhvGsg0u6H8cPxLHjXGH0IC1ZDomUL-fJeL7XbBwwuxfKg--3A3eeeGEZJNj6V7vVgo5YjalFxNWOU_IwSHFWxsu36FrOK916HlOLfYeIQh7sOC28OAbWECQnjWODiG8qpUm_y9zHn-3xIi69Nous7D6DZrKdXfNKGWe7VWbpuSpA0tDIBXgJnNEKNROYG8BBxzbg5U0EvsMTf0kB13HiFlLwFb-zzvf29Av5qAntTEOtEfsC206ouNfEyRjNcg94ILhbS6IWrbgB2oE0hj7v", width: 3056, height: 3056, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113453848258596650621\">Nicola Morandi</a>"] }
        ],
        summary: "맛있는 음식과 친절한 서비스로 놀라운 경험을 선사하는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["뛰어난 음식 품질", "훌륭한 서비스"],
        tips: ["엘라 씨와 같은 숙련된 직원의 서비스를 경험해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "서양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 3:00~10:30; 화요일: 오후 3:00~10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.oldmaisoneatery.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15105892514305066823", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%AC%EB%93%9C+%EB%A9%94%EC%A2%85+%EC%9D%B4%ED%84%B0%EB%A6%AC+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "마마 샵 이탈리안 레스토랑": {
        photos: [],
        placeId: "ChIJNUORJXAXEDER4KVDBYGYC-U",
        placePhotos: [
            { photoReference: "AWCwydg0nXoxTGqMTmUpgBcoUIIfJErrbcxEfXrTBSW1dX2Xuo59xn0bFpoSyYHlgpw0e7HsXJZdZaXFqUAKsl1fEZ2hYDEDEExN8D78rmDIuOIlTNFRlWam29gTmbc7JUpGPOGmNDxALlW5T4fBoH6dnghDTA0_mc2RAQk37OzaAMZvhSG8gD-08oolscPkekfIPJEfza4NVss-ZfAZ3uBZSiqLjOZWVZEbwhSoDsTVMdXUytV2lLtdgvbhjY95jUGsulY4Ax_c_F-C40QneuNAf0MpYBhDwbpOF4XRBBiAlqfPoVF13Zh9PtgwNTUWxCAz523FZwliBczmwCZYzNGHYFgmiCoMjIa2Vl5B4Gv1eLG0YVtwwcB3AQKL3uuVacUX93Q_Iai5q7rb-as127LMZAN8MBBAiW2hP4aGe9wYGLD2sg", width: 900, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116917511462115930180\">쑨SOON</a>"] },
            { photoReference: "AWCwydifMhV3_m7Cf1O1sduPsyL6Iu8BVH9urrdV0Irpq7pSYVOU1t5NkeSC8V1KSLUw6-PDSwowZDkvR0skb6NA0vLozwIwLe1kUCrU_PxklRJK0WcCrzdtwh0XA8rRQaNKTgOzPUN4VZS15bJDgt_01K2VAbqxJau4awrcLnDFRsCLHH-VS9On0WD2iyGVh2UgnQ_ZyimgsvyNaQk6J87_WTOjGFjy0rOvurwBGcfkdsGoE1KMNuMDS2ooFjVQztHF-uO7heJ8Avi6VOeruP0I7IyYYZ6TK_U2l9Lmkkr8CPvuwWa-khegjE9rdKb9IGb2bhWoLA6fMrs_F2H_g90QKqqFDKALMBq1-WvwXHU5Ww2f2Nxlu8DwKffzp_pyJMtbJ7ZuHPu-MOXqfw_pVDeiWtQfKBFFzJ0vnVRmICjcHB1Qvw", width: 1600, height: 1068, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108238598820115757246\">Mamma Shop Italian Restaurant</a>"] },
            { photoReference: "AWCwydip2dZB8hz7t-Tj_geIsOr5VWFzGMefOL7FwOi2lyRdRnHUkl0BL_QYJUqM5rTq0MNOJ2KhCPUZ9ktF710Z5TpcByCmGZxd6CwqK7J_LeRVTE04mCGWHlnSWJ8eLagK-8DRQSKFrHwOpRyZgVZR6TgQzTXrHr0hCa9ryj8kQnTHj3L3WQ4qHexgvssbSlwfnY_mV3DLFQuHsc05ZZ8mEw3aOdJlqueXQIYEdEXkdIrIgHSyXK0BVI3AhTGknHpgYeZli_SZ6J459lLzCtzQ8McPHZZL5DqUZwUlDigi7SmjrbvkBXxSgUPQ2A1vFdHMk8cDjQrkFYjddvNWWq9Jkb7rD8uks8DoCx08rIEch4wWrr_XAJYZsJtboZynOzb4m5m9-e8vHN4wk4c_D-Tg_wahwKzslRaXEWt-9_5kxoyBNBaRmE2t2yr3vgZoSfNg", width: 3338, height: 2429, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108881691848111127191\">楊慧玲</a>"] },
            { photoReference: "AWCwydiTSg3pZoZZSrxYgw3a00wuegfwLOoR-c3zXt3FSF7FqbfSHR3r4PzyLkUvehYTpVkFq5fm8BjNiW9eTJo495MP2oM8nl2vIvCjQTO6_ifeYNsBoSauMJNw-HoYBN_oM-T5AJ_5caHrpXhbyCWMRlB7LMKToiNJ_iNNaOnfB4gvAqoemayPV8gslYmvGTvMjBMswtypgMkW_c4C47reSLgQoz0muzsxLM7cXw6QS3bhWbRD43oZxa60zLcVyxQHeHRjD1WNW1vG_kJtbWbCIZsfvFsrqMvSamzp0OWuSqQcQu-8nCfz9XaA_8h8mTDLL6MDcRq2u3Vfgaeg8eJuSF9IhO0C1lopRQRKHzmVV3UV5t9gtz7WPQSIL-O2aJQCDQkLOAIM6sLY6dYArvcsgVcbwAuyYLDt5EQQCo7vYSzNaUvrErzi2zbha7YT3w", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101456538642041149226\">יואב חסידים</a>"] },
            { photoReference: "AWCwydhAvsZK8X7B-4uh_A5r2IEz7Fv7z1JiNOVONS-FH1IZrFT9MBhDKiXIIgCbc8RKD5CCijoqF7efzyxg3GpoufB0VUxNhPMmVGG3jqdaJJsHyxatroMjchwp__b-BDJcFMiPtSLEPbdIIPgDKXeFJ2uJvRmMAnjfmUXB69xpwDUxhI-NQ4yfhVEEfM9nsZrpB1VgjhNxgqKPcyBN0x5FftDu3JJcuJuCi9XajX_QbtwrTDwGsTIox59qMl03U-Fd22GXwlmT-zb77IP_sFFU5Z30tPgYFk2fNqnw8Ds-mnUEP2QkPsn9aZjOmIhBmOOHE6A5zUkeC2_mz4xmgMXMt4-Pjg72Kki4dUGUvEx5CDPeKu0O5nM9qeGbF7SHJXTJrIlCj9qXy_itx8RQFslC1NV3vr9MGUvKLzPSxrKmxlPFiPiZCmnxosNEL0zhUA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114807575449717448380\">Mai Trang Nguyen</a>"] }
        ],
        summary: "캄보디아 최고의 이탈리아 음식점으로 꼽히는 숨겨진 보석 같은 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["정통 이탈리아 요리", "신선한 파스타", "친절하고 전문적인 서비스"],
        tips: ["식사 후 레몬첼로 서비스 확인", "시내 중심가 골목 위치 확인"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "이탈리아 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.facebook.com/mammashop.italian.restaurant", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16504452939335837152", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A7%88+%EC%83%B5+%EC%9D%B4%ED%83%88%EB%A6%AC%EC%95%88+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "멜레아 왓보": {
        photos: [],
        placeId: "ChIJa7kwZgAXEDER8VGSVWdB2Sc",
        placePhotos: [
            { photoReference: "AWCwydgX98aC6FmCmM_nHpO0Cun52d6iP1S-wQ9tWG9MuMl7XXeUJU684Dis3dB0xtAiLZfM3NkO4f50dh6tiMfpFFZ9gEIwePdrfwNTGr57zPZYf8pUuCVwJuAKXPYNTZxuT7iXqlFeHHLf8JKanwhm0o8Z_Yf_nTHM-BD4rqm_plVc2HmEeMlAOoCCy5q4ysWI6BAu7gfG1kx5hXTf68vMRFZjysDdnMzMa9cwTnnS9pdn6Pqne1w-7QGIC_pEDG_4ZZkwqCkTRPk9_jxJ8tMXQNHTuR8oJAygToVPqh1ipt9jtJl31KrrbIlryess9vAzvO1BncxKsVKk6V3pqFHKLu6KxTPic-UtTV5WRb5NEtKSDGqjp6aTXDyVpR2Nt4RBIuFm72tO2jOnLMldQOFKhZOx_Hn1NVP6TqUf_jVnMOEfNo9EEgsHUY9HKKfajPA1", width: 1440, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113694497739597346385\">Mealea Watbo</a>"] },
            { photoReference: "AWCwydjiABXtvYdOCvV426xjQkrUo5-GW1dxN_h47zx_o19TNTl51eNvf1-4uwSYc1NB3JHsve1BeUUzsgtQ94EyhqZlwsFTgSaB5HMs4QLjfr6Z4CR5svgR1s88cVHMioAIUaXEDg-sbDI_EJ64xySkpKDjWSnFoX2IO2awwYid_79k7RuRyzQOvFd_WJvxMDol0v8-a51y41rmHm_kCc31qcQFe2qnCH99eqDZ0vNBLf8_HaLqCt4Y0PWUhWNMPrTMP46CupdqBNPBbAGqbqWMXLo9ERw-6MChMJ7Hrij6vsFwiBsyOjfwscaLclLHq3YN2QPn1xHkSqkXU2_mO7nVn5p1rI4uyIQ4guUh1IlopQZ2rhtEM7KBViay2XI7-6VxVjSHdQN8Yr6-J-BI6vLs6ReaiSjxyTvT325JZS5GJyUec40Bh4uRU92yNNRQpFMc", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113142819541975806506\">Naimheng SINH</a>"] },
            { photoReference: "AWCwydhcCwHOHn5OV_pQvj-nMVTgUibM1I_iGmC-BXrW0TVLBY79AsctA9C3z6Dn3pYoqGCA6-VKWi7L1Dgsg3en1VDZoU9ehU02D2TpH5W49PX3KlvIH7OCoC5AekKYZ6bfqE5Z2w7uce-ft45NkynhrOAN9N4sYPcs1AenS5Kzje-FNt9fEJiyH4AwbhQT_JSLgeezAqjhrVHYKo1woPhAH69z_-RsmirHKsFB_vduyAc4b4k63ryYRbkkimm3CUvhfMPdJPWUzUIFS0OFwpANX4UV4WH4_dPsIxw6nDDIn3jPUc2SL8uixdouNFL8pgHfLXXZ7tTAmvkK5KNPd3xkHpr4z8A9YrMgGPBwHiqUiw5SNK95oXPk6vjrBMediu5_KPAWEh4pTkZnm1f7vdRnxi1nAYnHnTT9Ckp_VfctbDlaWWEt2dMvJnK7MJv2LPLp", width: 905, height: 659, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113694497739597346385\">Mealea Watbo</a>"] },
            { photoReference: "AWCwydg7f9AvjjYTamFM_4hKEg72lWN9BWcCbwcCZMrEzBe_iw2MZcD353gX_5Va1BF9yL1xdIYFyRDy9F1xQxRRlzm-9Op5cCP8mxrU6VAd6vwFRYvyk0SkoL5MuR9rhvLYhrxxYm9hx_QvfdjrTGG5VvKfqA5Ls_KHHLhIM6glyjJJp7UFIX9LBWqy8PoauSOVL0jZ6h3fFyYeOP6jmfDRWUVqePf9UKsV9y72upsJWfvM-NtsFCRtGT2l2XkiQlBKwWJr7XnD70TP4OFaCdBEI3-elB14WR4HOuXy3YFo2w3SLpecSLl_FdyxctBOcCaegr-S0f3-OQLG2Io3JlI-lslmjx-jciRERtz-2SmO_iKzSvc4DXUbY8iM9JAad5qdKIBdw2QDwp1c3f5Ww7Lg5ZVYJMMTlOQTc4X0P6HH6cleyc2pbcyqVXx0H6tbSHfI", width: 4800, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111477248405140513376\">Sakai Masaki</a>"] },
            { photoReference: "AWCwydjn0nVhKxV4yKU761SoaJGU13EboYjw4btHWxIvfQZsK7i24rygOjKyRiTiBB3VuvZm6qRdWgM-MjqRKXFemRv1Ck5koQcBMcgDxfVdg-vdcA19v8ybEDPH1-_3Zjtd1zOAlON-0K3-2MIdgvEUpIbuoM6j7D1bpLCdG_ZYRKGN1_cj5AtdTLayVRSaFD9PshItufmHMhFcPdagejYTx78wRrE2Ak3QBijlBqmvwFWpzEih4vqCgdhEZpv6avDY9JMgzT0XxKySJtKtMJY_5IV8T-N4KyUaShqh6PIPnNCbydRCNOd6z28rNnS_Ix1xWIQkB9rKxMnUj7S7oPEuM5kl8ThPn2Zmr2iaeGYuhx28fGA_2PZKlijmC8iUaWHp_fvIUJAUmITDNB-Aq3apVyroxjHm1BWtA1RtAmsfUoCLdGKnte4dnA8mBgkFbiMt", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102662797306144040784\">ហ៊ាង សុខណាន</a>"] }
        ],
        summary: "전문적이고 친절한 서비스와 함께 현지의 맛을 느낄 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["뛰어난 서비스", "아름다운 분위기", "맛있는 음식"],
        tips: ["직원의 친절한 환대를 기대할 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=61558037062916", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2871398149498491377", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%9C%EB%A0%88%EC%95%84+%EC%99%93%EB%B3%B4+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "소마하 미트 앤 칠": {
        photos: [],
        placeId: "ChIJ7U38LQQXEDEROBoM_Q6ZN6E",
        placePhotos: [
            { photoReference: "AWCwydj2Wcq1aeuPSDuhLCU8mpElnIzmhfaIyE28dC9FgwDhrS7eg4jPbRzqE12JOvFgJJX_95iXa_Kzi0RqOER5RRhlQ2Ysz0JrD4oWO_SJqNqG38wRMRoT8WWuTVCOe_xmG7dnrsLiHga_9fk8AOKnQio8Jc95w50TeC8Qo3mcd51_gOGRHGcHtcyCwvEBFIj9QPKy6Ig-QPBPZBhVxi-nZIP2fiMF5THUpPnhbmdDXF81VDnb0ojMpZg5DVn4s2gINVZZi7rYTcrvb0R8Po0seGHSFyc1K7fvpkbu_cQwGHMtWCEGtweDHbwxlKvNabmGO7MK51EgfFGXNkYUfzWqK2gkEbY0YxSwWbjhJkw8oZQoq4ljYUvqJ4R5t-SjO281eVuJT8JNOe9ghFEuAcTS_j482K1Yy9X12j4kgULmty4Oe0sxcLokpcVNc3-RctJT", width: 786, height: 1048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107715807193358805152\">Somaha Meat &amp; Chill - Steak House &amp; Wine Bar</a>"] },
            { photoReference: "AWCwydjk_2lhsT6xFoOOFtpZoop0-1muudk0eP7pGcJdb8pyC5T_aEi1wpmHnAAGr3yASKSavuGcOTdZkGxMKWyD1LEWh56C1KRBdth9oxElKW9NgQEqSmnT0fFfEnUI7kThcdaxndcQzughzlMsp3dNYntJ5mjpu5iuUKACx0jWG9iksi_IBTpDcS4bMelqZrgzmGvPMpiJE-t7SsF57VjXzXrc85-EEbk6sSbqkcgpXqvKSjGWLe2EOfe5_1pdPozYN32j5_KPKZsgMo0i-P-0xgJ_iRiQ2lvCFjTx1o76FC1AIwKEXe513AKzk_9M5hPi0I3bsZMKchuWtGQX6EY5QrWaUgTGX6smLxxEQI-E6oSh5tsIP3eOeIge-Hq0VTYqwx8AMbRiOA6kzGheTVH4iKJFvDyfKJEfEvOKZeQGX-c1JzUoJ7zOQ7QKOxEzACGq", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107715807193358805152\">Somaha Meat &amp; Chill - Steak House &amp; Wine Bar</a>"] },
            { photoReference: "AWCwydg4-h3UuBY-Hpp1XLf3B1giua0zkKBRrY0bCYSM9guefM-fMnFFhcwjhQ7Vx72O2WjwevXlk8pPd2I4rIW53VGyX77Q8M4rHp-kgbataQ4Uro-ZtreXY63Q-L78tHxMUyfHJ4gAd_wWBtvhBxcjjIJ2M2as-5llSZNuwIyvqS7rTchGbEw1tAO_ssvNBvg4qhOa0-FND7-5MgdxgZbnvAC2svXUQeIK6jckTCnG0iMwVZTvyCKpdl_hEIvKUhXHogKU6NCWysVzaRAZLZa9gOWjjRPEKC-f9QOkvemBXbcWnwbtaolAbB3ZLpgkk_tiPNmtvaO6nyJxxaQWIGumhrfhoMzx-JB3PpkulZDi3lTR0NTguz4vM0x2uLsw3CWRpFRkqbIcr6IOtZ9zPXOvpsUYdP6f_P5ym-gBhqyoDuqXwEtYtnCHGpOqRP3ieg", width: 4618, height: 3464, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106120226752198353507\">Marco</a>"] },
            { photoReference: "AWCwydjpgvHDDS7cMOtiDw8sRwuNmrKGCQOlkutIenSTDzYcqEROoJAZcKDvsW760WNqbvRI5xq4NlgwTC9sjQu6pjtc9IS9rJlyNgtRUpYhUf2oyzf8peqqITXWVNBkN5TZA94Nnd9wCLAfmnpUZmojYbBgGIEDYCUCsBDxewQj7dfCmYC-1yMn1LC6U6Cwp_9zk2pefeRAWhUj3-8RzZcFEvS3gyNq9BGOkFbE8Zm7FHrilaHhCtCkJdwq5yQJDhYyMmOSQL6Cj1fO9c5VncfVUCVfA1gwNOzS2FP9QSWqDb0S23FgAfOPw9dSnQZeCCYvkkGWVgmbju8-LnEQ6vaMl88GwLNRrUhKZiAEfAINXfgIQj58w3FtEJlQ2MgiKv2mbx5DGsSK5ntlyjsDCHVkQREcgLmM7VnBPZeIprI3dj5uCxmO2QLX-ISm4mzvd9Ct", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112015064956079170242\">Alec</a>"] },
            { photoReference: "AWCwydjQ8ngeI8qvb_O3vC0LeWzC51XVaAQvlvRcWpnZNykh66oIRi1zH-rs_RPPativYRYP29ImT9HrhWjqRfp4rYl93iRtb2VTjNSneFJS7R6aXM7sFbFIjdLdxNRZGXu2FDM9paZFPLZc8N3ZfgRCzMZBowf4Qzm9vxQisdQrTtvMiQURfsC12_rDhLwPpMzFX-NbitaUCKyGIsjTgPYG_GhY_uLoBweK9pLy-MTnKp9uy7L3NyZmJ9FDPZtPlJ4JYvRczIBB4HZqEdj7RiQIyn4rrYfewGEnjSiqdcT05UNNm5ggDouuSASP9ChzcbpEV9k7Jg7kyTy1BtRTEANcFOTm-lhsJQr1QojbXxaksdCDMSjI5U50Z-xmjYpgcfnAVjlgvdwx0K0-sR9JL-hQ84sFT3q7BqPC_ciZBWAzOMgn6f6gCJoEzFUpfwosWw", width: 3394, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107715807193358805152\">Somaha Meat &amp; Chill - Steak House &amp; Wine Bar</a>"] }
        ],
        summary: "맛있는 스테이크와 환상적인 소 볼살 요리를 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["최고의 프랑스 음식", "훌륭한 와인 리스트", "환상적인 소 볼살 요리"],
        tips: ["트러플 매시드 포테이토를 곁들인 소 볼살 요리를 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "프랑스 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://somahasiemreap.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11616922053479504440", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%8C%EB%A7%88%ED%95%98+%EB%AF%B8%ED%8A%B8+%EC%95%A4+%EC%B9%A0+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "크랩 레스토랑 (Crab Restaurant)": {
        photos: [],
        placeId: "ChIJVQWn1XsXEDERyLmk6AAAR1Q",
        placePhotos: [
            { photoReference: "AWCwydhr7Q1QALFg3n-DwX9n7MtdSN2u8fnx-b65V2GntRJTdJzZZJIdw30dylNUgpWRpx6eYkiOD2qKos4v4E4uzrx0y927wjzHGrVvTootdCTNjeJuSp7O1dYE3WZ3MRSywYu4QpPsZf_Z_nYoyy5mw6RSJ-Wlt8xUMhAxUcjNW2kkfD15PiK0EwNWcJEg5SMLGnLuYMEsPsPG3pgaDP7ocULjoSExcNx59vh4_wqvY05V9XKec5s2Y9SGkaYhJnq-bDQPQepuUY0j1gdE1Ym-kp_z_MywAA3T0Qb5gjQWAA4ZeNfe-MVgtqNeoCayWeIAAkewPMr4duhwUp3taAfSzhKHtVB-LO24FPbLVWPuGxkouRkUDA7frdFftF5KciF7mGob29JKGIuf7yT34pbnVpfDvtLGpYJHgbeex5dz7cdzqKoY", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111774021605316702056\">尤達Euda</a>"] },
            { photoReference: "AWCwydj7_5DbTpBlBQ7B6qTQC2E4p57vN8tsFjPl97uUEkbfq2iXqCApYLGRFJ9COarR0RaLywct5KY0-93cR3XI0zRokqLygq8l7Agj9sE6tIlC7Z7nGqYQ5a1azLWlYGQK8YrxyGHREw292lZQiAUd6TFBYPLrwT44GaO9ke6cUWMhM7NtfiqwQIdBCEMly3jV2K3S1lRpTJuRaVd4_VCO4xZSsTXifpJHUjssTEWvigUhv4OL8FpNDNcJ-w0G0c_Qk0jvpfsjIRJxpkL_2zaLz8xwQnA912tmuLTbmskJ4-UeW4wWn7HPSqZS7TL8eTEVrSIWgkoz-rVMUYFgmpT5BvLbxftC_unxU3F6P9wTQK_64mRdegcSwKO26Z9ozdRgzWJUNgPcv3HM3deJz5GHpMitJokXbVq2P2t8FpFkyOncZyW2CiEu2h6Ug3pNhg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101183847083177531890\">Sivansak NEY</a>"] },
            { photoReference: "AWCwydgoSQidkI3UpnpVPchsAYzEJUA9JhjMhrGcUoA7vbAD0h89ak60jc3RVM6ZNvaWYt0Jrhspuxjs8mlUUNBV118QGOhy7EHhiMjLCB12NZSwTUC4K2yI8xPCle-wq6vaLG0onvkPGUv5daD7oZousvOXbs58SeJEzr5jsiqwJ-U_RlpTMjV2LVWQwgsrkpza8J-BqJX2Kv2e0fPH3gTvSOuJxwxduNP6njSK-bObXFaGsXsh3ONuisRpLz2hm8PErVK-2oNSNIzoAoICnxBS4oL9NpwyAbsMMh5_mF6zJNEflRowmauP0VhTcwpMfpLr3oljCAyPqQ5YJmOYujvAAxh4lyiMSIh8VC1DdcbCMDcID72cuAQiMdITzYGIP8pvJiDYj7RKGPv_Yt2A2T-1MSTUZ3xg8X0DrrPqisQtVLV0zB5xl1s-__32ibnBNVnb", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109414730169564485718\">Kyrylo Sulyma</a>"] },
            { photoReference: "AWCwydgAhgycQ2nGG4UvPMCEW9ys0LYM17scqYpG-J9_9gp4_tA9xLZBZgtdb5R1zpFP5jaYabYnLqJRi25hqMFyDsa8QfC5C5GVGRfgUIjRkXnvzBnBmf2ezeGFIH6jBTPZ5eRKdxxqu0eNdLPS_HXSBOATC_NBr2gYlfyoTQ4hkiY3uE3bqgyJtwPN_eXQSJPxmP41q7UHqsnBsuVSanQo-gjtoylK0zNgf01_IhbMtIDtkStln5tXv49NraSdd_WY5uzRu5TdWeqmMPNY_1tvgjztKTfwAsfx8N5WxXM0QgH2mRlt5Gab3yw0QRmCSIGpkYvwDDhpUko0ElUv3OEvtn4dQmIuEiT-w3klVLim6rFl8Zte3xM9gYaSPHEaa06adEeeJOs9rHSGYedo7qfTHLQTsSanEiiRNwKOc7yVQcHBpcTqt9XrgeNJZJeA7PfR", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100866637801664650324\">Jennifyr Y</a>"] },
            { photoReference: "AWCwydiFDPuK27FxqyK16PrhEL2v6ciZMP767UisM3CRWpVvlN_A_4n3sRsOliarApHpvKOWyNkmlhymHZiV4ZtSS39AZzshhdkJOQtHq3oouduiQOQiYne3h4dTySOf_MEPKWl6AP4ISgJ4TktmXR4c2C2rqHREpJ3qFG7sKtfVeE3gwKKPtxJ1ah4dYls_-iempf8jaqCZLuBKRvwwXyNe3FLdJukIYfK0NPWL9AQdoLbyd5gkLlO71edZs0HYXLsgAzWCjGkU55KwECHiMg8M5UeTPoFHMoy22zfFkqzsOPTijtyFDhYx99Ua6xuLtfdSoMkMFx_fwaQcedQI9SpK0rpm9an5vrutqzmJ0ZB8CQ1YQTQGVys195pVsbAFeYlJZpJYvrEvz7GJQDGKCmIGqnBbo6Sjd-eYyeU6gp5Dukf77jtrK56uj1U0GuXoutaE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100866637801664650324\">Jennifyr Y</a>"] }
        ],
        summary: "신선한 게 요리가 일품인 가성비 좋은 해산물 전문점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["신선한 게살을 곁들인 게 요리", "합리적인 가격과 위생적인 환경"],
        tips: ["게 요리를 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "게 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 5:00~10:00; 화요일: 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/homekdam", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6072822626435512776", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%9E%A9+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%28Crab+Restaurant%29+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "프테아 (ផ្ទះផែ)": {
        photos: [],
        placeId: "ChIJ3bkNKWAXEDERw1yn84XNfC4",
        placePhotos: [
            { photoReference: "AWCwydglqir75XtU6IcEQgVoeHYs76unjWCzC4PWgF_SM2BpoqTberBzzw5CNHcWvrTSp8TXzSCp-qQ1HZnAbK6ryQeZPQSDyEWdGdyleyN9kXFvKpDGkT9PCj87fBXn5GTX1tx9gUT_KxYF8XLHE_z7lj5k7OuiTLmYnkrBEnR-2yqCP-pCf9aY24cN7tLA33iAQygrTKgPJ2RTMR63IuAzrVASPw8uvRiNOvzmZs_71CmPG47kwttsyE3WsFU4Bq-X700OzaCw-6jOwKhriL8GFBh9qgZ-vTzqoEmmvuBIOw8kWWgYjYco7459Ax2KJ7Z1fyec6KJk4bS3DWyEYZCj6FsqUYjRMby4LUP-Q1aKs8O2b7wP64bO1OUcedfeUD_IS6iK9dcK0A4DrSaofAdnD1z1ksjYX2KDeT-gEGQHxN3140Db", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100714661289676168734\">ផ្ទះផែ</a>"] },
            { photoReference: "AWCwydgNvWiX9jAJYwduCZHC9LdQmxOm9OYa-4YikhD4r6jtRWQuQsFduoW6Ti9FDwiC4ab8MUYSvuVXfOLLrteBGBgO8WydkwpNI_Pgmrl4-E8UUhOpAqCKZN7WCxsuJ8t4W6bCbWL8xmQ6SFozaeUSJIn_eZbSRKkXL3GfSXI1ru9-70TvbRM90dOu68QxDPVG2m6Yyhkfo7HIQ5ey0c2_palCeyR9X2xhSRpSe-wYmqCWPX_p3vMO3rgxDTvDsNhSBBfEdWYczF4Pz4KUv1vml7AE4Y1giGXpsM1_GjwAzMEhQhVmyfqvT-XYr9FP7QwHr1dkG0d5mXH58htpeFI9calnTqgk-PXpmESFF9ldtJ48cZoMEr3Q-bX0oHdIB6mQ4AJH25rq3OaY7fXStYl_yjwSKIEU7GprqkiuQ0pGQcvrLt8", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100714661289676168734\">ផ្ទះផែ</a>"] },
            { photoReference: "AWCwydhhWt9lf73G_ydHGMPg86QaRzvX9G8rQnilP5Om1BGSWuLWh2nitTuZWCP_bLetGo_zwbUUDa-my8aEVkHWN4U-sik20SwjHIngZlotRpzci0t0wuMSwXjGSHHkNhiH4Zo-Bxz15ENF23qqAsLqmnyiXxYq5t9cjmCHFghI4pNH-sc588XUTQEu_TIarhAf1TQQra70ap99AusHqmqwzp7hITUMDDrEEkURf3CUNRORxaC1dE8fEf4kiJqqYg93vJA6gzKKCXOPOr-SBUvQNpwi4Bq1xuPkPbgOFaPLS9uIgKpFYHFO796ymelihwyiwutYbpbBLIXhUZDUDnHhQdChhSAJjPXR-Y85ASnFhSLI2nRNXrPmzya3JJa-2oo273B8J8seAB5gWv7JlNkncu0idzOadUxNAVxeL3jNs1rrQQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100714661289676168734\">ផ្ទះផែ</a>"] },
            { photoReference: "AWCwydicoWMSsVxpbKSOeUchUVLkPJwWqTXYEPf8C2sbjxRBVmCSurMlL2Dl85qnz2JDRwRH2TTXW2XfZjHfRt1ICubIcoalXtDvdpKGOJh8VqFcQwX_St5Hxktqv_J_f3mT22GjcQA5AS97hgS1hoarSsnBSUGIuhqzaZ_NYGLxkwHWMzn1asTjKQv1flxfopIQCtE224M5A_1kXpDj32QrvTVQ_ZmDJ67_mDxpU7OhIRLKR2x-ru9MT_0MQh48oBVuGlbBp02OLQlpzK4pIOoliyYhYkzSD7UZu1DUv2Do4K-dLkPtVt8gSC9dh2rC1V-YtAfNnGHENci2ltZ3jtIQwGhA5Fo1ysX2ZsYguloRgTSyTLoZnKQbsD53WsafmUJJ0gmmUFw3DlTOI1QbJSobdbNP16j9po31bmjh1Oomb4VBbw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100714661289676168734\">ផ្ទះផែ</a>"] },
            { photoReference: "AWCwydh8_kv_G6OpMwmls-iNe1pkybmPR32vNKPQH5iEU8Gby_q0ISAScZ7W_0yRVOre-DJWKmKh3rp7NRjCRXUBwf93tEsTa5T0fz-lyW7WL8p-g2LNphyyuHas03dDuvcTQ2l-BrXSa3PT9CbnHaFa9WnzEk0_BP_FHUq8vtrhlzF-FUyR-xbgHu0_J7ebrTDT6m1uwqtVYxXVSEgWcX_uQhzQjcCmwB0Un1lLzXfHG30xpUYzRUoBToNqAa6LsI67EF0_b9NZZwPvs1XP1ptSTh8474TfAtuF-Q7-8v5YnPcBm1TPc65sRV_q-LE-14Y0vsm3LfY7vSGYxAvQQq0zmCL6Gm3bjaYf5BiNue2BrWT6T5Tn5Cfc_UbyNbwe9lWBiCMabFajeMzRDAAvvrFgDrS30xODyUfSqRRCUhZ7jO9q9VnD", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100714661289676168734\">ផ្ទះផែ</a>"] }
        ],
        summary: "현지인들에게 사랑받는 가성비 좋은 야외 식사 공간의 길거리 음식점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["저렴한 가격", "현지인 맛집", "야외 식사 가능"],
        tips: ["국도 6번 도로변 위치", "현지 분위기 만끽"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "길거리 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 2:00~11:00; 화요일: 오후 2:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/PteasPe/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3349778198058982595", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%ED%85%8C%EC%95%84+%28%E1%9E%95%E1%9F%92%E1%9E%91%E1%9F%87%E1%9E%95%E1%9F%82%29+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "봉콩 닷 씨푸드 레스토랑": {
        photos: [],
        placeId: "ChIJdfI9gWMXEDERlGWDu7FmAdo",
        placePhotos: [
            { photoReference: "AWCwydhqCpkKVmvAfWxMnkmKmZ0KDGp66GGticyfxyGymJhIhRQhBI87EW2wuIIkMDuzzUIynvO_Zoxy6o-9lHMggr7lcOgHkbszc7_JfNNxdZtZnZsigMLQSHT6hVE75d0-M_-3eLaH68zcaHCJjqJGACK6zgQtcVALl51vOkQvnmK4q8f5ZscMDJcsKIbmUqScm6kye0DJLRa621XAXWj1XyWbx2fcV-semokkF_L6WUNuuUb5G_jbXK9X2RdSNKa67p5YCm4t-v934ctUAvi0b3CG7zbFI4Vdi7QeIGBshL4RSvEHIqWayTfpvio07Qlkf04KT6xku0NabWAsNvzYmp0fal8s2RfuUl4rBkBOm1EuTzJ5Qyk9Jc2JFPBA8UEtoaO-thcsXzCGIhnBFGu0ygiIuoixvmMR3epRdTS--XYuyA", width: 1280, height: 621, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117770516813169663299\">Bongkong Dot Seafood Restaurant siemreap Riverside</a>"] },
            { photoReference: "AWCwydgC4rV75gN4r6QXLIDm_DhDY3FIQ8lCc-LyRSOTmhz_tTJ4SMpcLjepYtC7j8qzr7x1I07I8V6plqpAEVdR0zmrWhRE5E9XEqs69Tqjkh6-Q_NSB8dokmsT6AeWM1Pl0vtqiKOp3RvD3CAea-718GNLgIAR5FYUzZEw1g8tD3AhBjqeNCdPa6H1VrKkfs2r_cGxapLFaX6e6Ww1gXM2Mpj5Yfz_TVLDqmAEdsBruUKbe3TK_KMO4fU6ctHQ2-9VvpTG3uOoQ6rfLUx4zQ0WeRElDmYVvTK7jwNs5qh4Fcc37GmJ6_NW8KApiWif0xyPGRJaG5QfL2hKl96PyqZ0g5wHHqI7PRxfI2jXOmFpFzJFc9RIehZ8BJEKvVfllcjTWPms_LsvjHf_8Y96b9xZIDwwTHavjd-RMWbMyqelBNqOBs8", width: 960, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117770516813169663299\">Bongkong Dot Seafood Restaurant siemreap Riverside</a>"] },
            { photoReference: "AWCwydgCg43YgP2wlqFk6v_ZzoPGw_UM6F9vDp-mQ9xKDauJITkucgPA0bAMtQkljAdafGb79E-Nv287Oh9pls5xBHCZ5kjaGw8v7WRUjZCB_Vg2AeHfvoF6dNQ76cfLxPWDxAFxKZPW0reQed_xN-rLXi4fGJz9VVl8vy29OnrngjdIm01b8BxiGr1bG9A6Z9poDApPeX6zylNj6Jct3fVcgiuJlulVZmbpZIL44uzDxG45zvfZI6KsRGomqHFE0amLCX8Ceh7t6Gi98eFpJsdZhtczKCTe7PsFza0G1-9aMwQntlGLbi7PEG0Z32pcxSQfTfy6VWDAVAZpMVHiKNNvoB3MpfLCuDpn8W7RCIoQZVqi_Uy0ks_5_Pk14FW7pdd66dd974yOnoDLTUumaMAZzsb8Q-SLs4qoMxs07f52NOiJeWJCwx2RIdH0zsezai0w", width: 2581, height: 2281, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116027274158505051596\">Thajsko Kambodza</a>"] },
            { photoReference: "AWCwydilLrcVBOy-I6pu46HkJ1rp-_w7fovHOuKnV8kGw7pK7qeAj3h6Ia908bOYfo3avzoof5fmAeSapvNYPfXOpuSQHkP0bXh18hXJHaLuDeMMJPR1tw4-5QOh00oZa8zEMUkoD8t1Mh87Mnn-2FSOAf9eoWsucWhYMdIwd0etuQ_gh7Djgb5xwCl_wBgmBKt7aTNngmr9ZIYOLzE3N6unlLOFK75tyTPxEL322Gkm5xmKSmCBhwtRFRPiTLIzr4Eu3ooDDT5MoPHkCcUfKxorjL3cSz3TmMDEdWcbzaQN9xGM5Tf3QExbqd8HUUZ7s0HI4Iqm85jSHQZnSoY80ahopPW6zE6ZgCgr3B_6DPHLrrKvopc2F33prTbnYOMDNY_3FvACk7XcRBquDypoIc9WlecoLPtUnT0cbmRPsTTHtqbJEQ", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107281380727041823412\">Alexander</a>"] },
            { photoReference: "AWCwydijY9UyR8YA-f-CYpPgLAjrzVEUV2GFrn-Pc4LmtCMHmesR1EE5Za9YEK_k7MlwAOUYnoFkn5-PKBq99H41uj0vEyWjzjBFjaNahkrhN9mZPXymSWMg0Z9EJ5CHQw48aou0dSnBM2FhsO3A8Pzf5oz1xhqddGYJtfqKIEMbEt2iVW3HQh-sxemF8pf2KV-lngmnl8qlLhipXk68xB7mASR2Zi-56lcNkVn7kZV29qA6QhkzK3B9QQr94h6SYFCo-6d3mjQXglEJGKH7LE_UA4neuADLSKL8GpZQ4cKl29u0LFsa-32Vxwhh9l3mEsWOBgWF8jTesGDymxOu7C2Yb7rzCCEP9dxL8oBESTiTD2AvU4bma77Zkro0OxWLXO8zYBHj_V7PVZVS1ZjoN3ETCgUFx1veWOvzyOEPFfogfQYiYibe", width: 3769, height: 2827, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110156557236702336763\">Kimmy Lim</a>"] }
        ],
        summary: "맛있는 음식과 친절한 직원들이 있는 해산물 레스토랑입니다.",
        updatedAt: "2026-08-14",
        highlights: ["리버사이드 위치", "친절한 서비스"],
        tips: ["맛있는 음식과 친절한 직원"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오후 4:00~11:00; 화요일: 오후 4:00~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15708949888786195860", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B4%89%EC%BD%A9+%EB%8B%B7+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "PL 씨푸드": {
        photos: [],
        placeId: "ChIJV7lmKQAXEDERBbuT1F5_J70",
        placePhotos: [
            { photoReference: "AWCwydjpfZsRq9-AOxtasO6QLEKGhdmVnYr_u6wiHcTg8lT5H_-4l4ypHsoHnep1IPzsHJou1I2MK2bsHKvMmTJ5EbqDZy4hO0ru_JDbq64Xpnvdp9yKkQJGypI5t5J-h_2VN_fvQ17mS7iIOhspwnXoN8nurzKqKMIpBTyaM__U1lD81Fyyp5Bof-JZzm7n-OOoM7VhAqQ27xKMA4jt9SwiTzshJvoqaMJs3s9XHTyjcBgwGDMI6DlOufWTHlPJcqL2uSEmWsN4xbGW9RBuqCIPFBMEO37rbWjN8-i9lGZnYDwR6MgNWPLKXHGc86up1W7bkvf4tKmIUwSqch05GsftAYT1_1QCUawQI3p9ykOaH2-npKAZfy1JOFyQ0gG4HWRl5R0R5GCZSJkB78vhivurI0Ggf9gthsMro6n_eILve9sj57U", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116661524528334143705\">Google Official Photographer</a>"] },
            { photoReference: "AWCwydh7znx9vGtzvh29XKLY5Wd8IsaggxDDuvzzVt9UdRdDREOFlj0jYstpiQX6ymzWqVPtgPTIuiMAAyRSeMj6QjoIZjz2HtXtx4GaV3CdEgUyY8flvrInYX7Xi6sOSPsZeEe6X2qUIQD5lRYx_vQug4Ls-dlSennknrvRg5t3EQ5fOaOAi2m3x89punncK1mAW1WDctpIT1qr4IRctPiWNgIN9yNYu7fmLJ3W136-0sWOdBH19znPDPuZZ5edpwDkHXq3t-_9tBVp-V-MNGfyI7BkyvfBmFR4aw0nbo5II6UCqXDpor5ex88ybDjLlUMosbytKN8wXNbQjPqHx5WgSlT3gom-zC8gtf0Ay0NpzEsI-N_RSqMdsfr-he0l5NEKzRuk7jNDivp3OAaYaa6blNkebxDKas51q1rJF-unxglpp_UI3lwUk9zxBzwzkw", width: 829, height: 829, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106312006741089734117\">Sopheap Somoeurn</a>"] },
            { photoReference: "AWCwydhL9BjzXK9Lro_QVgGGcBpxWQ0j4u_sxzb7FpmsMg5tLe9K0bus1Bc3LBwp8RQgtxBCFftC0eNegOeOK5aOLYVKVcQ-2YYSjt8_DxjaSv9vQdZYUJ3qS8dtmqTLrQ6tP65ymj9__CHIVt4aU0i9jyVjHURY2hK1ApXsfAhaXL9GAGfW5IMPO8f6TBC8R2AMCkdM3Y3b_FzbacgHxCQpzz-n-ycQY_x0ixYYqPpX3k9icUWuT6R7EphgSlUo1hF0bZNmzuI10ZVNZxqeZs_k2FswkGw7RDRWEXoIHsg52g1rrPAcnA8mkjCopLjRnfoTb7KEaW4uswl2GleHBKI6jCOkYbewqk3gT3bXSU2TpCxm73tbBpoSYWCUWRJ-vK_cqINyqJqj2_Kwo74GYBn_tboimBJJQu6pjDowWzjM0Y5eGZ08tr1onUGLrzHJwg", width: 3618, height: 2034, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117471606663855807221\">Abdellatif Al Hammadi</a>"] },
            { photoReference: "AWCwydjIFVJ0rRNcQCrv7IH282SExZ1edwetw3KWz63EcGTRbKuNr1Y2QfiqVTlznK77Qg49mcH57uZlIFNht9-tKvGkMq9yBxnEBbFNOJFYef3TG9cZxktT50NJNWIWnqyer-TZFjPD5pEON6DddDH9DUCfE-YNO61wlFDq1tnVIHuFwqm57yyAje7mQH1xbGYb0ZH_oTF-3dqr7OvdBnQt9uZh0A04f2sk1pvjIJNdDh_rJcfPAlcFeNNUhyHEIP5op8BskpRtmS5GJN5G70hj8AUn3su0NyJ0kjaFJxx9qPFXMyVRkYk4H3OA7CbSxRUQGngyWSEcguxIyvz7eE4EAhMtYMni-idEweFt_z7iqzTQyzSep1Hp-SK9ZEWP-tfdJ7vNJ_sT0pkPlKxaqwagnZPUNOJVTBtWUxfHSLbRHQo", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116661524528334143705\">Google Official Photographer</a>"] },
            { photoReference: "AWCwydjEToirzEtgl3UjloEEdxBlNQDhW3xaxWl9vVymSp7JCSlL_IRRahVSYj7bRihsgnGkvqCY22Q6Otqd9pUMyEnFkxZ5OB45RfZpWL1OwHGyN_EdvGShKS_GAdVC1RWYHgLzr0ypq-Sij0d9s3HSwQjNRSFYR6LC_Ekk7d5eA7DTh2sWRLV16mU64QjN3B04QwHugqWxsd8y6H31WB4zNa0KotVirsCL6ebdC1S8pQxQUqDd_XvI_Q9g92Do409SVxgeaQLhu40c1GgtSXpwqnP7dFagCaoclJ6geu7l39lrQWy5e6CsyKlWRVsEsJDrAObI7K2JmHOPzyzKMn9aUWEI_hDTLxl9ScuRGAXWJX4ORjbjJ8saUK_pU1OJLsyDrigsfB_dFbuLRuNosdtg4SqERGqbcymX7PoJIzCPil3JREqjM3bFZMspzXV5NJHC", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115615562178104547493\">julie dess</a>"] }
        ],
        summary: "푸짐한 랍스터와 맛있는 생선 요리 그리고 친절한 서비스를 제공하는 해산물 전문점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["푸짐한 세 종류의 랍스터 요리", "신선한 농어 요리", "친절한 서비스"],
        tips: ["마늘과 고추를 곁들인 랍스터를 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "랍스터 및 생선 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13630002842530200325", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=PL+%EC%94%A8%ED%91%B8%EB%93%9C+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 리틀 레드 폭스 에스프레소 카페": {
        photos: [],
        placeId: "ChIJYzvCKHAXEDERAyl5l2fIH2I",
        placePhotos: [
            { photoReference: "AWCwydiHfbgVyoi2AwCWetVDNQKZG8Sf91YmUMjEgJuLmR01RNLUvELNGIe7nPqS5v9vtOX7uuR9Fo1Khq6l2UB5FDgouj3ziQYkqlQl2N5F8jtsJdljm6IEL_VQPIQOPmbf3OOEmy09skNBLZMLw8WHFRfKCk7sKA0q47iQ5M9VN9FhnsbxULKTZZEnq0V9TkF3oKBGuY-Bh0XWK8sYrHobo8uFel1bVGF8N7OS-mP4hAMKhnvhL7dYyiqnrtfREsgOLM0DhZRLeTyEaOIUPwJ_ew_hOlZH2iMlMeLZs90Mz7xdiqDPycPA463OUbVxP2GM19O94PkNmnBBqQQP88rYtrYzR4aXkbil0FrtNz-VA3Ie9kNig4mOvRUx7ZmiYh_dpywRbhJ4Z5q_mYpwGl4rzR8YhpRvXn6Y3KvXitFu-50w_w", width: 960, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103934790923551840348\">The Little Red Fox Espresso Cafe</a>"] },
            { photoReference: "AWCwydjsJPp29p3hSyMMB7U3tkOAMZIzIcYltla6a2H1x9zWSXaNTPCDeaO-uPHCld_2Cruh7-2aC4tINaUVNPKZoAf1-Ysgct-DnBsO9dG5wwQtul9oIzE-z6pbRVpyo3cEPXNzD1R7_6PHP46eyqmaB4hbO1r4SwiriW3tqsa5PkvEP4Wn8SK1J2TV3WRm954p2bK94XBdpq1NnHcNjC2IIZFuqV-ZppbnJOdh8rfEzw5UhDEHdLKbCsWOIkXuyyGyutywHfklHenhY7vQOJqHy5bmfNi36Et8tU4mSu90-VHPTc26gypUmZSkI5HiKpjuLZz7W_ox2zyR8rSZkILHWzaFcPT7357PMX5y-Q2M4idQ7qnEqxfY7WJ90xl8GUbDsHHZ9jZixQiiiWkti834m2G0QfJgsc7dVLDxhp8ye1FLPw", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103934790923551840348\">The Little Red Fox Espresso Cafe</a>"] },
            { photoReference: "AWCwydjO20ouBSVJyh83ZGRroy_TbLWR7ASL1-weMhB7F1trttWoi2SL2g4Bhz8N9B1osl1pZAcqJKCofkhUnU79D_V0rfrayVNCWT-dDApq3C3eGhngxirLAOO8EcXqQfA9FWWOeaJx7qpHQs0FbmW19iyHnI7KHWtNWm4Wt2R8rvouLayx7-zQtzVaplCxSvVf9dRVzblRLog1Z6qz7nU9I9hpzYuh_qroVpxMTDw6qegzDFnY7J39o6C84n5htKQuL_4LSZZNtFG17La3Rkk20sA3s_UU4JSSZW4axM1zHqfPT1vQropRZ6iRMWDM6YzevQ12GAvZeVq_B1CEYR5ldPb92rcZRpau9gUfcdkKELaylYJOBQYg4H3u53cXYXoWPxenUbdD8I1f-C0BCI7zMN4o84gk86vITm1pQtATvE3GkhVr_S9aF_f7IOuerQ", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109070365240598675632\">Neil Fraser</a>"] },
            { photoReference: "AWCwydizmEaGUK-ujqr2OD6psSs4UhZ8nhZbyPGPW02vKM1uTRoccdOzqkqGKs7BHF1dz8dIOClcv0IY4Fvv1FsGNDMeIR-xBUPqst9sE5x3S3tHY2jiA0mP-wu0TiFphF9JIKak4Wr8Js2nKHJvvom6rzA1g11gHN6xDpF_Ly2vN4PZwp8ahMJNiqCiaaR36K8Hr8RIRmVqGM_SBE9TaYsBZc5k5rahepS5y4GjiFUwfmtR6MRrCAQmXTUszTjnoSuK94egVT86pn6mSyE_Z6TYW_VnWI9OhC1f7yyesrA2DVWJVPfFSPxbwn1AqtalP_48_vKKLV31XBLRE7C0ST9taKddNOghWwK8gXXwxvHXmxTOZsU_iEI7LlBphCo4s3gILhZ-gtyVGfCklridVA8-5EGKYZ9HuJd7lFEu4Qffy0DeV-98oW7VWCxok3WVo0Ef", width: 3448, height: 3448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103934790923551840348\">The Little Red Fox Espresso Cafe</a>"] },
            { photoReference: "AWCwydi2XVY19-HbE7paVYcMxSuXcAvaYpF_laR2oAq8Ur-SEPpzjC7tYV1hczn5jmTMW9GtRDIJ7uRppby3IGMzXLnWplHtO0oGXCxya2KaE1SZqpIgN2Uuz5WEtklETy_i6czWudNB3SFnkzS-zvm_xwpdEu95lsVybbCw5xJQx7CDjLc53kAwF7bASYBiCJaPNjrfQN8uYtna0BRFUYK3QcH3iVMWKaTmvlyeg9GpBS9xfrIpPowWw75TWa9Yn2-ZniKmVeUOI9GAgnOVEAp3VlICOk8zWn726tvXVe_zXPhEGpKMBIVmIykmtnsXjBjbPO6UQvebqwLIG9ayx3ExHl-1jFSs0hhJQHbDPuAQy2gYRv6QHibznaGtW7NhNXW9jF5drGhaXC1-dVPMT6VGzCzD6Ag67DnNRs7e4v2Ws0qVFMJZciADv3Jyiv32d5ti", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103934790923551840348\">The Little Red Fox Espresso Cafe</a>"] }
        ],
        summary: "맛있는 비건 디저트와 훌륭한 호주산 커피를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["비건 브라우니와 쿠키", "호주산 커피", "차분한 분위기"],
        tips: ["플랫 화이트는 작은 사이즈를 추천합니다", "마감 시간 전 여유 있게 방문하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "호주식 커피 및 비건 디저트", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 7:00 ~ 오후 5:00; 화요일: 오전 7:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.thelittleredfoxespresso.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7070590287243454723", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%A6%AC%ED%8B%80+%EB%A0%88%EB%93%9C+%ED%8F%AD%EC%8A%A4+%EC%97%90%EC%8A%A4%ED%94%84%EB%A0%88%EC%86%8C+%EC%B9%B4%ED%8E%98+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "바이욘 페이스트리 스쿨": {
        photos: [],
        placeId: "ChIJQV01rW0XEDERT4hxtC7W1QE",
        placePhotos: [
            { photoReference: "AWCwydgl9u2QRNzhZ5CiWRzcvnog__AX10GRruKOrs23uwgx5xgaywulzUM_20itqpuS57OYemhfe2JsHGLTTYlkTKN6z47gGTVbjWkxVrWj7WJa7IPO7qqGsvUvmWoCe3T_QCAlzDYQHZ9Uzj7F4DdW3E4kbxSUWYLbPlYWFbnycYX5F0-3AgfrdELSyd5kf9SXqnBjTEVg21SEK77W2dMxum6Y28qyYtyodaGY6COvtJohuH3LD-8UXHx0SlW8Pc9Nm_gafSZtWEwprPX-fEzUGZw7ilR1Y5KBkcKN0gCu0a758KPYhU6gUqiuq0oItu-r1lTtqdTpr2gIbez_-7PX6Dc5CTDi5JlI4RcN3LSlbzWDxUZ1bA8S-43gAn0ef5mTx-GsNOc0P9lUByk-p-Qyj7FMBP4HjlBZHal6BAibVgSDN6FY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118246302223510518256\">Bayon Coffee Shop Siem Reap</a>"] },
            { photoReference: "AWCwydh29wRKuwnIdBPX8tLwLw3YcqaQZ3HFTk_vyzgdhKX7IInKt_8Mo7RGqiMpvcetwDpsm75DrhHolMuwn0tFZvbN0DhQo59qGyrnAlsUDsUujDlGqcrXe2Bub00Q_bhcRAe8tLnSzCY8BG6DErKE2uVMHGENn-kxYSXDxHw9kb0tp6takYIbttcObpSpeaSYm5cZiRZk-Z3nSWj889KeRRJ-kOlf1RKpjgQ84Zm5XcW19V_OZeISxEfmYaVahBKyE-74lolDCwWF-SspijZGokPAoMMoJ3qpIhtEY9J_Up_1DqUiwQZWFo-PMhs_7rCJi3T-SQwKP_kJXjer19wVQyIoLqbG3T3yq4wed_YTxRNd2_jr5ZCcLUDB-LKdcprteU4zdFtrQZ22sCEMv0vOolO16rdrn9fsninGn9DyFKL7_433GnvN8X8MspIKJixV", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115060518605047891927\">Sandra Keogh-Foy</a>"] },
            { photoReference: "AWCwydh5-1AY5oKCg0PuFGJON4LfErUT1eHiSreN9cVGSKwHYTiI5OScrpciU31jL6XCU6kNT-LquIsdFs1zIHmPT3CSle0CuwxTSo-MkxH6N86NlXjbxSLgg6sxfsR8arvY7PtJPhQOFnIZdVfytgM-HG-fpylWf-eok6nyK0Q7eGdXraUIVDZjntP82HkLiEnSXYYaY_q-Vyt6ErEphEunFkwzxVZFDE6lMhp-I_Y1XVLhqUBqBAw-NnvoOjic4YlNBK3bL9CJ3N_PBP7rKZZqvUBB0OtYjAjYlgddOyxguO7FZ0_uhxgw9A56WB8Ftbd7XFaOyLHpaw_7lpF0t0eBYs6TkJSqzc88c7GLaG7u98FZc-veMr90CZ1-vwnNtElzKoCrVUK4_2t3T3dV0S6ptTBkxrYsPutIK8-jfLro5DBRjHgQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118246302223510518256\">Bayon Coffee Shop Siem Reap</a>"] },
            { photoReference: "AWCwydixnmcM2vpqnFDGZwiHhachoNkmV5ChNof2_zZguQAMHzT1GfmKaTjxLM6uqudLVdGvs0NXsDHqa3Wr-Erkgu6ZntL1d-A6T3TrUYZxb7enOybajOgP2Bg4xX9GjhP6z5p_wr4OIo7z6esmy0kgUbocqkIIgVY7OhkO_1A1-LCPRVc4N5P4rGg3YfynTPvov2UKoyVkPUjqGdGFtCjLH0L4NqyBQuoS1GpQPdORMbfRzGA08wCwked8Fx3hmY-9Ef3muT_xYsSq54DtXEbjy4QmhQdA_CwbbaVQEZOkHGWvZth1IZqiAkGxOLq2nGrIyWJKZ4nbWdCT1SJaoWTZvRuWGH5MrDIRTLOQR4vWPHssZMKEZcYww9l0bLKAwt07-tBT9QZG4yQLzRJ8oxQmpMkgZT-hwPqpqWVeldgp58ZaAJmYr6Ohh81WyCeqsHDn", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109428890820759796255\">Micah Presser</a>"] },
            { photoReference: "AWCwydjxL9pf0Wg9Ypf6thaZCpltJqbmfmikIUjxu19OsKdiEQXsNItjTDU9U3ecKMi5GL5XA8s7BaHy-Pmo5jTsgwwbdud6A9KLgZcGoJw1e_aqIxXam8jEIjL1Mtr7JBuPl0v0ExZqqMi7MoUOZ7lIDZiwP5ZSDcic-yJ20WCz5NZsDZZ9uksfnGD4UHfmooqY6zHIMIn5MsnMkyVb9VIYq5LEKuYd-RgiXw3xD3yRxt5koH-XQ3V5k-0bqh3aujliQx8dBoBzvAeA2D0EYjJSFBszsAVI84i-5s_WjiYBXiJCizivnovjS8KOvLtlmUdWw9A6nD-k8_fYwskmtDOpuhDGbXnvsU6zVW4pp_nZ5DpHCJk_gzucC9qInN5BB3j9tjFy6fEWqATNVjbDgKklsqugyjKEVx8bQUmMwjV9_J_5hqgEJNIXa7QS60ree6GA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109428890820759796255\">Micah Presser</a>"] }
        ],
        summary: "신선한 페이스트리와 인생 요거트를 맛볼 수 있는 시엠립의 필수 방문 코스입니다.",
        updatedAt: "2026-08-14",
        highlights: ["환상적인 맛의 크루아상", "인생 최고의 그릭 요거트", "매주 바뀌는 새로운 페이스트리와 요리"],
        tips: ["초콜릿 퐁당을 꼭 드셔보세요", "아보카도 토스트와 사워도우 프렌치 토스트를 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "베이커리 및 요거트", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 7:00 ~ 오후 5:00; 화요일: 오전 7:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://bayon-ed.org/coffee-shop/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=132247260161476687", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%94%EC%9D%B4%EC%9A%98+%ED%8E%98%EC%9D%B4%EC%8A%A4%ED%8A%B8%EB%A6%AC+%EC%8A%A4%EC%BF%A8+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 빈 엠버시 로스터리 & 스페셜티 커피": {
        photos: [],
        placeId: "ChIJ91Esm2sXEDER5ZC0bzeAPgA",
        placePhotos: [
            { photoReference: "AWCwydhGwybOPmZsE820hP5LGwW0rfnv--xdduAHBuIcFiud2ktpzhmUlfMtVTanAIuUNBJulrBWS-3QgqQ9pecv4YCP3FwMMIHqIKf04AmMR1PL-tI3kAkVoMniSADYZBtRRzW5ox2j_Rhtj37Co9WR7RTs6y-o8dCLOZIZkwNHxMjzeVtLhpXdQMl0mxBSSqGP2lYLSk6L2QMysRWo09RmiHcjMNkW4eZKnmDbcvh3-K-drPN3wmhVBzMIsS6fiMlJC6_Vhz0XxCTSMbc_DVp65up0Xuni2Kp3nPJ-QZ0FfTmlVGoh84kvSL4qOyxKR_lg7HPHpJ9kMOqFG2tJ92Wi7sEpZTLBh8AU2xPDyQbQpy3CJ5-IkLwQXRoWk-72XXw5AOKY89nBS8QwzkRfr_N6kuyt188rT7RzCuNAoOIa74VfLlbE", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100583541387817409326\">The Bean Embassy Roastery &amp; Specialty Coffee</a>"] },
            { photoReference: "AWCwydgVab4nHyFCQeVkvtL1ziOpR3UGjQ4SYXWvb9H0Q4kB05uMrY4GIx7fX-_qlyhhHYCH9RZ6iTp5sunZJIF4Og521pTYcoLWJTRIhqXjcjFdXks7dPIjWITMgFPHGgKRNfP9QhnsBwIodrBh_CnclxKbfjbeySNB5bImH0CSpdB6SJ9EHk1eCqpPGnhvTrTzXDpEloKswKBdY2uLv7iZkBuCUbga1sbOqNPXSFm-QzyDbdiggfz8NA3b_ByS0qjpzrQ68FcPVMT9C7s6znScRc2TnKbrPoR-IQyYNdT0nQBQbWZ2JchdXoLMCDe7hI5QZF451nOwy-bMw6Aqsp3bQBu-58IupI_kHnXtb6uK87a2hINcD1feKeHO-0lBa9_UA1bQN3jT1Bm6BoXSHoXAUHvdkLHAG_vkwTH3zGXh6alkYusb0-9sRoxtVh2HJv6P", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107015059541238691145\">Ratha Men</a>"] },
            { photoReference: "AWCwydhAGllDfpN6LBgAEVkhMLsPjoS_l76iy6TAztDQyRwTXSCK6tkKaAJ1dZeo-9qXPkv5sAZoVxCTVtN_ZP8cDwl_X8TP2E-_yHgDS476mjJTSHhFbjPQVPo1_65YDWVQTzGrt_XMqJRya6GlvQuALNgsw2izfSjNtJY8jUwPbuBoCLGX5J2Epmx74mW-xz29Ija5ovZtkIFPtmJFtT2IpEtTmpq8gZVjNImG4sJ6MUfjb8z-aRzQ-7JolCVF3ECim1kMJK07MaJx7lVWA3C0Ma09-Gc2GjEGmmTRIYuvF38kSjm11P0GIo6bH3tg6cScmxUcnguAR3NrHnolosfDxEQKKo_X49kp8iZlwLsc1aQp2wZkdrWcav7q9VkQ45M67-efXoT46M22dXREovWuqGii1TRIdZMQP1Ux-_k802Dn0m4", width: 2560, height: 1707, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100583541387817409326\">The Bean Embassy Roastery &amp; Specialty Coffee</a>"] },
            { photoReference: "AWCwydhDAqEZndmG2MU6vU-0Vhh_kg0EQ2cXPdMjL5XWrLF6Y-gtBsj8TIB3zLEjfna57x2AXPvb0lm_I4fubSiPlvTbJ7s32uMyTM6WGK2QxYRgKgpNmHV7rxa16i2tkw8aJihQ1IajqEmnGhIgkNkvwvpOLknJNYWwXqrf6A3ZVzCmK3LJJXYbvgTL5ZMIQ5tOJcosb5GRH-c2guVE6UMRZtK1vAZOU-Xk8VS21KR9JDIEzOSpxTI3D-fSZurvKqt3elXbctxcPXtam90tN83kpLKWyRdAoHyIXdZvpjSNOFaHbmXE5lFk9pR5Y7nHvEDKFTKnrwY-lQn0k6hnTVMlitjbOWPSD2oNH15wRVjxN_Av0Mw42SdC8dfPlEUF6wfAibPBObMrXRTQkHjFXIUZ43Vs30ILpioG0IzU76Lu0XSF6WkoCbIn60Iyf70pIw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105798610994449991888\">Ruby</a>"] },
            { photoReference: "AWCwydgRKnuepsRNwgudMI16SnuJ8zVP4mG97_0XZn_mA8XuXs7rBqv9__QMsAUXelkcVCpY_ydXIk03Jg-c__kMosUYyJnO560OGXCYwMnNLqPnItbTxd3mB0oqU7ETIFi63eesASzoQogzep4CfIcDUZfaW4vQX8TxYd7VMOK43AQf-j-lwCNWFJz7cpQKrus3S-jVruhwphxkY_x5JXC9xfbxj6H64hICrN6saelZuA3_8seTPm641OPme1eEzuXBGxwqjqcUkzZa_Sti25AM31MPrKIKQt0uzE_g0jXAvlkdUPC_M3oN-RmH2mCxbu7YJVoGVFpJx5BNn79iAVpZPdMAq0jjhv8S7COIUh96oUka_zD6VkpPluXd2EplAMpzPrPILwsLFAsONEO_gPsWXZ-bMbViHC1Daex5fhSKX6H6s2CSRprLv-dWmVyKLA", width: 2720, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103853293765625758130\">Raymond L</a>"] }
        ],
        summary: "고품질 스페셜티 커피를 즐기며 휴식을 취하기 좋은 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["고품질 스페셜티 커피", "아늑하고 편안한 분위기"],
        tips: ["커피 품질이 뛰어나 커피 애호가에게 추천합니다", "음식보다는 커피와 차를 즐기기에 적합합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스페셜티 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 6:00 ~ 오후 9:00; 화요일: 오전 6:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.facebook.com/The-Bean-Embassy-112117457207961", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17592424141721829", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%B9%88+%EC%97%A0%EB%B2%84%EC%8B%9C+%EB%A1%9C%EC%8A%A4%ED%84%B0%EB%A6%AC+%26+%EC%8A%A4%ED%8E%98%EC%85%9C%ED%8B%B0+%EC%BB%A4%ED%94%BC+%EC%94%A8%EC%97%A0%EB%A6%BD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
