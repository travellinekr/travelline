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
};

export default info;
