import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "디몰 보라카이": {
        photos: ["/images/boracay/info/shopping/d-mall-boracay.jpg"],
        placeId: "ChIJmckuWZs9pTMRuczV42NVusI",
        placePhotos: [
            { photoReference: "AWCwydjol1k_IM_os5n2bl9o3954wsduZgjKiwaK3kbXl_OZJQzVaeZKETBoEQBoRlyNE_C8I-li1BNvmNPPhRT2A9xmi6k9uguzusr7Zw-GSD1nU93YweBElj5_W6Qpda6e8sGgBL9_V6Oj_yO5h5Bo7jT5W8fUUEETmt7wBbr_PP9AaQOKzGyB869JiQG0y5ZYZCwmXrLMutChJrzljHKLm86ZmY_x5e9yG1Tjc5gk9zHJJpw7B_6bs2V9MnvE4uLsgnfCXhiT_qHeDFb_8uqLb6FgN-uW6oRaGURk0UY53b35G8VkJ3G4CL4AHMT4_psgcuJGj_9LyPMFKf7Br_ooIVpqJR6BJPBdz6fQp7FLtUdOWCV2FsXosC8XQXxO1mNNbIOnn9DUn409ALGSBFWZ8vLX8OScy-5dwd5KPWdQ7p-E9is", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101722329636660888898\">Waleed Bokubar</a>"] },
            { photoReference: "AWCwydjIRWr81M7LXzpdfbadsyC2Vx8Fzwmx-jpKMcVampzOKhsYk1Ckl6U6uimlZ6gflhVDYdZ98ipm0WDvdrSuHiiUQyZsb-WHKoGbtWtji8YtE6TIdiv-uW2eb2ByIA2HXxcMlJ_n8OVbYy_xwrVPX8BIxd3pKDqb63MBm2fM0ellJYx7v6EppLwnUHuURKTjPqxXwqVROiXqMbzfmwlqyetYFFDGYwN9GClIbQwfZniE_RHoWW691r9Cp6nVTPszgWWCZ9JrhdGnf1Sci_efePJAmZehx2bFO7fYzHTp3KTJO7K-E2pLncooJD2wBd4HMfYvuDbsHFIhsJIC6b6PTCrapWS90zXYkgRf6vTNVxDXVvQKBeJZBp5r37GIUiMbO7n7zMnCLAKhn2DKqtIEVFBmXhjGk5Exyw-oBekz372DTWDY", width: 827, height: 450, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101941292599452459776\">Glenn Bermejo</a>"] },
            { photoReference: "AWCwydjiOrvi5KdM6rB7odu4MFJtwnHJ53ctb0kniZdSY-__iapo4bvbdTQByOBr4YuCHkZ3Tdsevxv8Tl66XuL7Bew1Xgmkq0EY7zBhanwTZ4yWDr6KcfKDo5pdNAnRt8FDxZAe3LXsbWtyd__lfiuYlu4aZZJ3iXumUgIuatrcVaR6jAdAjzbCvPhX_Us_-FVuO2RgSq_b5tVJN4eB-voy435AnVhBzF1F_TJ8aobt-pe5J-_N7WmXtmLBFuZ7le-NYXn44KX7-kmFXu_rn9bTxDGc2JKKjRpK9bn61yd_89AYKTDqfyG442G-LrGzmvRvRK63A1rEAO0E-zyOuav3zIjNoTFS8AyxaZMFDsrfHxVNhX4idlbRxo3XsSQPE_ARvmgjykY_4_hUjCxU3Gj00zLMB9jmD8eMUGmH07vWl5mT6unn", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112472526181562957219\">Michael Wiles</a>"] },
            { photoReference: "AWCwydhGwkNyKKOi4L5tigk-Iu6IohYh8pq7X123pHAX-AoQyb1OOzk0_j3y8D0beC43Swrb_H5VsDkihmYzqWEe1II74HcxPqIJ86qrBoebOjyQjpvaBJGQ_8E8_Ig774ZprcughHhACWcfDbjaBLe4SnVERkYOC1-NjUn7dhZWuklRvGbZj5doi-suOpiIJv-k3zHRRhmHhqBc6Y_GxHDv2-KICMBoInfb8GCxDL-wOkBp6-NeFEtU9LFcsMh9vtuayLDMLQiAS78xCyErKIhB3JMRwOxi4bEF-g1gjATbNGKgBFNnH-1f_7iXczUDZkWAv2YMDNrWVzkjgHWrA25DPCPrU1QzsTq4Sc85KM4JAVEknynmPjU6l60WO6DWRWG5_Svgt8T0zWkSSK1fm50AvKBLcaIgQ1j4nRB5pjBeSa0woA", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105719953289775842940\">Josh Llabore</a>"] },
            { photoReference: "AWCwydiBlVucZJaGjQ_3rwC0-f_H9S4PRu4UkJwv1QeCeori9Dl2XfSaRXSO-wSzZ0vwXvah1CDCCfTHvOufW53dFvtLNK8JcT6zeRDZw7wsX1Xvrd5rCh8AcI9kzvNFXYANQy9m8O32D_1-EcDPZuBBcF8bmMuZjFz5ef0bjf3AzD9gbpKlbqlXM4sTVlXoTpSbchZVEZqTSr6VdYwS1nRsANrvxqFrtzWksyvNnw5WDzAfm1xtZVWYuiKAv-f72fS4rQKukg_DADmHHQ5lda0TkJ09ujlzn8jZpoP7pA63ndXJ6Wly9SqGKNuPCvIxYMUoFCJFYIG4pNS6bTWV5ICpECTG7o72NoTlM7Jd8dhgt7d1piVce1BxGW4nCKdqz9q2eIG3i2rXhtsWF3j6qXJfjVa8Rv9o6DPFVH2yr47w2SCAgmTX", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102842598504033903552\">Pretty</a>"] }
        ],
        summary: "보라카이 쇼핑의 중심이자 기념품 쇼핑의 성지",
        updatedAt: "2026-07-15",
        highlights: ["다양한 브랜드와 기념품점이 밀집된 핫플레이스", "맛집과 카페가 모여 있어 식사와 쇼핑을 한 번에 해결 가능"],
        tips: ["인기 있는 기념품은 품절될 수 있으니 여행 초기에 방문하는 것을 추천해요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14031621476538764473", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94%EB%AA%B0+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시티몰 보라카이": {
        photos: ["/images/boracay/info/shopping/citymall-boracay.jpg"],
        placeId: "ChIJe3dYumw8pTMRA00vm-ZLo3A",
        placePhotos: [
            { photoReference: "AWCwydhp1yDvRpapmQFO6fHBBVtifg4TE0OwZFv-ClSWFhXlcVVQx8hd5FdTOt7dSaFYS2QmBVcmLzlN-X-q-VRbLhIQqWlW2kkm5CbfqcMNNwdFKHe9cwTQp3ZPuBQ2NUp0aVIKqUYTZnpaVKXKcQiCPBADEWcIvxZd956Qej36VPJslMKUOU-WVs4PzQU-ng0fOnCl1D3Vk9gTyAFJq7gn0AcsHtz5iYYqaDNUow2HlxJJT3zc-hnXTtNWQrw9NoNIVfGCbDEnxlSV5zMd-duBd3v4WgDM31R9MJ-UYlHIF_vUyU4yly2dMIimrbvzhGGNlnJ381adB9sZ1qryKSl5Ye5vLJjK-UeLMgCvt8NY_zCzmcwD6slyHyEHliKrIf9muqYd6J5GTFHwbNU6F2xfDzIoYEYvcZ4cfxU81blhFSc", width: 959, height: 719, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118011829925797757406\">Alberto Nicolis</a>"] },
            { photoReference: "AWCwydjzkKJVeS9yq-3vBIuv3i8FoJbm1NgUH_4ID7Ye43HXkHIKSJ9EQ530yY9mgOBj5EmTA8E4Mh7rcmTbuqrxGm1O3nUDTmKbvom1DORksTWUOg25DzjDu8qKdOCXAEwiUIypBS-9ZVEkepX61tQzNOeYYcLFSVqmln8DU0mzQrOAkTb3FXaPrK1bmgSanPcUhTW_c2RRCU9YkHsUAJK1kXzXbbWiaGsyUbgkDuOAH1_J9KeRDX3SpmkuBAhRbZlbhxDjKyEzkY-lQHmwOmc-cZ382wbvj4nOI8WyJ7OfXTtnSTmG7n_tsiSufnE0auuiG-G_vr5RmZmqWuMqA_q93OWRMep9DIu4KyQTEHbDMZTje9xoS42dltYsBs9_LSYZ1XsZAaWEZKBLw4BwXGzriFIbq2513uBM8LRhx8xzK4eK0A", width: 4128, height: 2322, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100664982361236341672\">Mr. shadoW</a>"] },
            { photoReference: "AWCwydg5d6wSHOKfGVwNnTrU_pnlw8sg47AxVcVcbv8VkyQ5tyo_XBonQ6KNZ8MQ4pgfAPuhAxYFOm4zNVtAnYBdcfUVVoXwQ6qc81OjSKdF5Qb1oeuS8AQuqRnYb9wsGla-KjElcfL49cT7XN28rFlfP1l4loKcWtR_ep1O7JZflSLliPTUUeD-TavgXweuWSs_CGbwVcFSraXV0XSHZroZS9QFNP_Zg2dUxI_ylODF-Z1tVYv5ktvGtFzkBAfzsyAZfknWGr_idmDHVSZalXEkhV5D0gHafSM3rFhlF2p_G9Qybt0TL8tKbzi4CGei3KP4J0sc1cGn3UVmM1coOgMd_tCKL3o2N_Wjg2SaCSqg9WYU4d7u6FQDN284FGeI7l_2OyL95IS2P0cjttdq6iGug5QVe1dSmNJhNLawEjgEdJJK78A7", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105919855909997256778\">葉謹榮</a>"] },
            { photoReference: "AWCwydjhHR2RHvOviLYcm0oL2N-xjSlBEr07bR3VK_lsSBhjWbvA1686WCzlZWT7B6zdL3pA7O_TeMfj0MPYbRa1NlHmzA1FaAiFYDcNPGTG4Bp-EXyBoU_yzbb2yFesI4ff6oyhIf-LSxgqJCqd0YEkYHo7iRpwJj68_hhgXG9BeYC8b-1LHhN7J6zBLhxqccswj4YdIVzj4phaDfc7P5nDUJfyeyyA3HZQmB07C58eJ0V--nc9pQgERBfXl3K5LL0vE3yJUIMYut-2Xz7fMnHfJ7Jb0CjtWmeQ9cNle6KcIuNTa1f2W6br1KO8d9WVv5UoDnGJ2hgl-m7N45OI-yCmmA6aD2mdXS2Rr5sJLNJeSKUMf5OVKW4rjzOYYogSlxrLDfAf4cTUc380AEqrB7UO_U3B-OnSHomk0JC1aDE_L2lu_Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118442287111544255921\">Melon Musk</a>"] },
            { photoReference: "AWCwydhyKCwSK-hO0Apy1DHF60fks8QxYMyyQ0Xu6i5ksFtUeLH2OmMDG-hrwg3_oXGHCasOrt0VybTUXYqnQXSActl-1rW36VE2FCfUn_96oGkJYYQ9vT8LO5Yc9ntZN3tmP55UDEJBciE00KceuxnYfwsPjq3NCso45l6zToogBtshjGXm1r7bbQxyUCJ-g8hX_N_cODz1YKB8Cc95Kw3YdSPEkUl_G2uRXP81BWixBPSa0ZjdWGanBOYDdupAZgDAzWh1S-CZ1MWLeb2u7gO5fjga9y94zZDJ-Bl7Xh_2gjLgQRUT3Zra3RucmQiP_N9PM7iBrUkmmbvMJ_4e2dxJcwKWcCXZVoEohnty3DhpDgvlO5ONezHbcr5F9X920UEzxmCJXID0TRSjzBkcgfDIRethyygq9uuo2GVZHWPLF4E5MA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116260311456272665062\">Giacomo</a>"] }
        ],
        summary: "쾌적하고 현대적인 분위기에서 즐기는 쇼핑 공간",
        updatedAt: "2026-07-15",
        highlights: ["깔끔한 시설과 다양한 편의시설을 갖춘 쇼핑몰", "현지 느낌을 느끼며 여유롭게 둘러보기 좋은 곳"],
        tips: ["에어컨이 시원해 더위를 피하며 쉬어가기 딱 좋아요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 8:00; 화요일: 오전 9:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8116414407269895427", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%8B%B0%EB%AA%B0+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이몰 보라카이": {
        photos: ["/images/boracay/info/shopping/e-mall-boracay.jpg"],
        placeId: "ChIJW8_AcJ89pTMRvqzBdyRW28g",
        placePhotos: [
            { photoReference: "AWCwydgNEfnWGQyCAv0st-bwsLzyAjkrm1LVJDDsltVWIQfGetFJ6waVKyTIpLc31rEENgTVMq6-n3I3XKF5aqF16VDG5_79dFvN6MF0-tUGYrV6kVYVyr4VU3xE40FOg6_SNkchvD8ScbD6QM5ZWJUos8XqjD6dz3xNMRe4PFR6afkifE_dnBSwFN3yPOdWe9vEpzUgYJvDsHKl9u_4m6nQVFaKmY_9noRD3f4ihI2TI9SXIxvLmjl53UO8b7Z4PH2tL6hmLzfCk2wp4Fgrwu3jQwH6zXnDkobBCIbHjv4RJTwI2zYboeI2rWOLPLNwnxtQtuIkx40pBMon2LVf0kl44xF9BjTYPQblM3lxDbCS3x4eJt1NodYl6mq4DxJYkxlPapV7gfJaKoGhgYAzBFFVxK7zTOyY0lSoU-yVW4Ym5t0drcnr", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114241249613526318128\">HANA LEE</a>"] },
            { photoReference: "AWCwydg1v17LOxysthZl6_2TKTIgWM-y9NAb1Y8De1zM4PbnCFaVzcRPEXxSe-wh2LEgPq0QS0PJZHsh7Jq5RZK0xkItqTUEpO6FqS_ZzIgmt5SAoKFGaszRyuT79T7-Gv8HYjI0GS4-9fv8_KVzm_UJuqhzgMz5SImZqDRmJu_BQTeeMGOMqGz8QXOUeBJlpN7G41PkhPNmkmQL2VpcEChouO1Hz9Gr_LRL1-ztZUgeOY6halOpNlU-XzLrHVZ65PcC-6rhaXbXq1FyEmvEZiIDfWBUPjhYLnR5N2hkZ7DlYwtNjDwXmXhacB6hxurD59zUEu7ZeS3wk7miRzhZ0Y0IhFlsmwDGBDCMbli5vBZ7_xLqboPMJ-PHRPcpFhKULU6NeirYrzL-JvNGG5kR-W9-FYH5ejGteNfgX5l_1fc8YfE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114412546484650203012\">즐거운여행</a>"] },
            { photoReference: "AWCwydjBjAFgWEBE6gtL7w7HsAX2YMzVBUfnt3f1TX5SubhlWRTDcb-4_t6NT8aqK5ezGwmqxublR3UVlZsKT_OgWWsOAT4KWl65hDef3J9636ZYWmVyiAnj7Kr7qT-O-WTaSz7johhpN0HMfHRgkhQIRi_6zxBP4AL2FTNJh6StdDP89ng847ZuaBRQNOrZNF2F4p0w-Nn0lTczP4ODwiSQ3LXuDUh7NTXffW7WI1IFqbCwv6HUHZdXt353sV9wMBcWzKhpY2XDlMDKt8j9ctOelhFVirJizgD7DjK-NU9tax-arF_c78ND6A0Says4aU1OxmTGIZX3BG4K0tv4-vBOzNo0zc_9Thad5XV0nZvGxR7hhN_8JWOSoN6la89IWoamigPW6peH7uM6aMuNk7J3LlH-KHeDMIWkUTCPjoPFZkmc2O4", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105690988953404106592\">中谷よしふみ（ramen4423）</a>"] },
            { photoReference: "AWCwydjAifIjfmv2epmpilDh1nLIxds1qKUaSgpfUkIypI5noqyLwgIiptk9lbMNd3JEkmbHuGyXXfEAVtkKLSZaLISngD971qBMBSdvBHODm_0WfNaABS5a5gvfSxFNr4SYUojzwA2nH00_shOSfMC-jrForfh2cUIfnJAGfUuAFaqjfWmqxSg4OeLPCq9Nn9MN9ZN7ZJx78bb-3NB-IfNTquawT3_geVnRefCYGl2nkVi8e2N5eEdjO9lIR5A2CwdYJHbnQRD8Mvg7fBTjZMaKlVeM9YicDE6OnHj47PzacIIxtMj46DCJHGJZuU3wYN3flk-QY8kqCb87OYoT8EwqjFhDF2bmJ2gvaJTp5h4cTA8uabAvdVVtNLr-FBjK3NplnJ90-3Rq55MfqL4b0GMX5D6rq5cVF_-f1-Xrdc0CI1Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105690988953404106592\">中谷よしふみ（ramen4423）</a>"] },
            { photoReference: "AWCwydgdAZ4P9ryCqYiBWz5GQkbboo30rNvzBTqv8jkGJaF5EJsqFIcnmclIgfCJpoGOVMgdHMacflDSVrmt2LG6_RLr61tFHFfosD7lr9Mj1kv2-m6xXJTUqOHzZhMnRMK9r71SiYdBXXvqJR0839y37ZEniXDd5q1r-ptjaEiFuoacfa77P6R3Z3a0JT-IJZ2qOHOY7v_BjwSmTeco9AL1GJj3dWAw7Kfp-4UvfMABAdbpoziqTnntEmKggqBfQ-4NmEWI-gexijaJxfc-nYMxN_9XjCd5PqILUVO1HIHFKc4zxMUbClPKO5UVN0n_lew4xRDcyvfjnWXRVMlqTytdaLOFMDQnGlxCze1NfTI5wlzJiW_xRAJvwUNVIBbmptR04BnzZVhts_ywzB1dHzCTHVM7mh53NOATkY3PYECCsEmErg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116962843606745312914\">Jericho Saddul</a>"] }
        ],
        summary: "현지 분위기를 느끼며 가볍게 둘러보기 좋은 곳",
        updatedAt: "2026-07-15",
        highlights: ["로컬 기념품과 생필품을 부담 없는 가격에 구매 가능", "부담 없이 산책하듯 들르기 좋은 규모"],
        tips: ["규모가 크지 않으니 필요한 물건 리스트를 미리 챙겨가면 좋아요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14473256542113213630", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EB%AA%B0+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "버짓마트 스테이션2": {
        photos: ["/images/boracay/info/shopping/budget-mart-boracay-station-2.jpg"],
        placeId: "ChIJjeyYtyI8pTMRLxBfFIr4bhE",
        placePhotos: [
            { photoReference: "AWCwydgkwwgMPzx5xoFwE8Vazxd8-AUtXdcyWpzUGV0WNRArmJmazmKzCkQm-kOvT9RR2YyakwFyk6eISH2_YI4AXGVSh4EptyqcIOhqXlD7vxkjSH4V1cYeaSZTB9IkHafF5KA4AtHSXANkTFJ_R5jwjSq4eJVf4lBL_jDNzWJcjiEQMW4SnDy_nv9K3EiJnjgJZ02GlhTFI66z0SZyLhLbg6or108kkciJHpqOaoHB1W46JFvBOVKefOiGa8dMaGz0ofqYuQBVsIMhrk1KshoqN27p7ye7FZDhqD09FzZw2f7sdUL1lyqb7QIxQNec3LkhhadhgNub7_8BzU2M17rwMudsZtMzqDPugCUwQBK0zAmW3rbyoW9HrtYbmVBOGTB7HuflaXE1dJB2-PApvfdPOCddvOwY3HX4OtrZTqw6zXC4BA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111062099378205448044\">Younghoon Yang</a>"] },
            { photoReference: "AWCwydh3pX9fffXqEf396K4AMxtii7bwIvPCKk1mFI6GrMP7ebQSao7rjCPy2vsACh-PWw-XwTbAJ0TjqWhLu19_ztKa_1sSfG22SUCkCEAedy-hk2KNpkCe9x85TikrL2sS5ojaLZ2STuIiDeQIByYBVjOsIEU9gEFLjxBls577qewCJafIyKB6VpOP11IgRooCpatDIawUprl4ZLgop2QTYXbs0P08IpLfUfKS0onmUgwbnYx246I_rTtPtc7zd0KD4segRDLPpltxZyhRAObuKZasEJ7UG9uLL8qsoEZy169hnjF4KmObX5OcgAQXTI8LMN9-1_7YhNj8Dt6TkH59YlqA6lxPyAfUm0UAOJvn4CVchDmLn28B5yrAg9bn9yJyrX0okT5m-qXAa1sQfoptNIe3KdWqXVKv0rgUSoNxjrwCEQ", width: 3022, height: 4030, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112184137416141536477\">ALDRIN CORTEZ</a>"] },
            { photoReference: "AWCwydg8ib8F5E_xZWnKTzIJrYmlbQ0UtG_Bnvb5nw_OmiSmXIoyxX19UynLfMoyNjAu1Yl9zOXXSRpeZc-RZc5teWgsy4h_86E-A3tdvPRV8IUiRYNDWXaqS8o2UmNCa-2BWDXGRyefSNhFx1q5Xkv0HpWdZWde5gWQnhikEnvFdxtYIUK-SzF-zBuA4KGv2Q7l4qSl_pWQ-S7QIVyuFz1s_PF_q9EAdLr7yi4decNHOFTBd5r2EOiEoKiUOr9inMiGcNChWSLYvTECUYIGH7Ey4cnxlDdTVwDMYgyKjKaQg012HfDUknvui9dcCKTmqK-H1N9qf25_Ix9Mofw9czlZEF2oVMgmrBFCJKTWJ-7GxD2QmOlsmad8ot_g14Zvk92xgBzBD0abBdAQF8lDO1Pb4fdqTTSSahyiqHI6nEpPQ9DT4cB0KSAPJrda0CVTog", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116816757717293290862\">Jaybee</a>"] },
            { photoReference: "AWCwydgpUJACybq8Ke4Dllrp-l2odXX0D4mg-3YNNnAQQUBXE3N9HjsdrmurHbKbTbf13oaoLroBjpmJMySHxGP4FmVVLZWfeF_DnTFNgAEXH6jZdeoD951l5D3V3juTt5VVw9bOu892A91GdN8JYG9XamBVvE0vm0A8HfMK-BoP9irRcQiU8Fg3mFJZ0VqHzLlW3J50B5N7OwfSewecSpT0sYmoj0hZGCmSM-0Mvqbk-6FTD5KAgCA2JsGlBZLcfhibm7maSQG3ieG-6m5b-8H-ZPrQbGPPlikrecSL4lZbBG5BsgNlAWsiexxU3uPgvD7n11cg1JW63PzkG5yi-dC0jK6hL_M9FGAE8fpbyNykYTAIHil5RSNatSkZfBBUBWnLvd5CKc-cePx0KWYMSYSc5-rnqVA0OJ5kmGNHaRWfoCB-GIE", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112351692014404489570\">용용</a>"] },
            { photoReference: "AWCwydiEpJEbu844AacYy8whQLSChzQDfZBzIa2eUePVUchiJZNpUMHGX1wedtj2R5-bhqwsPOdrCg3QrwecNY5X6OiQBPYntTsS87soIcQIiUtg_7dnB0FboNXLblNuCa6Q-05UXfck7X-V9HasxBkmrHcgnv37YJiJzjVJoYeaePLf0Du-8y6qXWhahdjnU36ZQLj46Um6Q2ywGaBTkVe8PcVBKeXP1C_OLo6DhgMZiIBtlYItK0fDzi72-aZ0aTbAeF1NpXh93Glche9TEqrjn5IqCFCOw0eYvQJUWcsEmmKSsJvd85o1qDWilZ5g7lRHZ2U-MtzuJ-dZ_TsL8rwepGM7sV4td4OX5YD7xbEeFLEYBc9k2UZqMJbLMLk67FNagVRmEYI_gRyDpRPLuPVhtKotnIDDldikWw0gKnn9RMkj2rZM", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109939786902612589470\">蔡孟修</a>"] }
        ],
        summary: "스테이션 2 중심가에서 간편하게 이용하기 좋은 로컬 마트입니다.",
        updatedAt: "2026-07-15",
        highlights: ["간식 및 음료 쇼핑", "스테이션 2 접근성 좋음"],
        tips: ["현지 물가를 경험하며 가볍게 들르기 좋아요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오전 12:00; 화요일: 오전 8:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1256214618013896751", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%84%EC%A7%93%EB%A7%88%ED%8A%B8+%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%982+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크래프츠 오브 보라카이": {
        photos: ["/images/boracay/info/shopping/crafts-of-boracay-supermarket-department-store.jpg"],
        placeId: "ChIJzZrhTCI8pTMRcQd6FW4tEo0",
        placePhotos: [
            { photoReference: "AWCwydinN9KsQmwLMsm8BhTYYKjc0wtKXwVjBwUyOND14DWRk4vewQrjmP2J19kb0V5wnX-02xCQZcN8mtvtABxkFV4HY6QjMKboE4biJpswbUgUtCPIv_tC6YPzpJFUUR0f50cJ1i8xBX-NJK_658BrA9Lq-VuoKja047LWVy94rhEdqQzO3eAEuvgw2QCa_aiYngyAtgimlT_RN1zMtL7FMvzJ7Gz23wY9NHrmxZLJQXqLpI300gniU21td3Rg-ng2vdw6K7pJkXOFjdTbhvsNeCKJ2tGUKxrHkr1taq2UatldKGS9vZwsXVD796G_b9FpiEx2o8K3T7fAqQLCSdwSFZVdiFCL9d9B33HvJzhA2dHQ9P0yIWgQPFahPuZoxDC0Z1j6JJ7k-Qv6lR6A_7J094umI38wwAC7LovByBcQNPnqSg", width: 4128, height: 3104, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102111365196511472342\">Crafts of Boracay Supermarket Department Store</a>"] },
            { photoReference: "AWCwydglSzNwP3yUGHRWUpvPLGXnZNDmO0guMTtMI808S105BR97rEP2Rznl68bnH5yCM5qI3da-DsOrzsmy134C3udi63v-4fxSpbSFepeuVcQqqJFrWZu7SeUeoGqwY2nOxEKCi4JeOqMxu9yX6GIJ-A5VTP48PuD9ml51hoOzniYU83fVEiX8c1qPsdurShgy5f6mmQop7nnH57wplPwnqN7PlA9vW1qCQeeGuqfamK_lFm04Wx2-gULxiwY-53e0xCilKRGwJGopBLucwr0Po1uHMav6jjzZ-T_ielprbKWoi3ljqZwZRVjKWfbfUKawipGhQQoQRieCs4ublHe2zzYZvO5NQ5Id0qb2J3XvGx3jSEN6nUffRTrOzmDOJmWm8UmDiwqO7efpD3SZlbJbywg7BFzyzbrtl6A0JDEoqSl2wg", width: 2048, height: 1357, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112669915196243127793\">Aaron Fang</a>"] },
            { photoReference: "AWCwydjjAVVDUvJO2TArVoU29uQneamRCmGrc7QL0dop0xqy-MMLpno3r4GbvKqBayQv1YNGR0M6H50iizqrpk3OGnD2JFJn6-UzqcZa5fO_aEsg0UAaId_kJ5grYZNukJnPpzHUd2wbASNdKT2jY54DdJK9ah_V3Mya8f2helf-MERbMVniC1auOCLNDbIzkzmyYbJv9M1BqiUqneeHff6wtrjyYcIB6EllRE4rWSInos7q42GYZ04yKj1Im1Y0TGtDIWHHmYFpqwaHrQDIVMMh7rWKXfuq2psUlD0ImrsZADvtaP55r6VxzHCEOPktjMmvGvdN_iP0UMPMJBG6MWzmH3mLDklVRRfT1CZdn32Z_3MA2YhUUU7dg4cYox-tQeDhBAzuJ7ArlCcJJ8CuA_5it0KUBQw0q9hYS4fdTguRYurBkwgV", width: 4800, height: 1711, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102111365196511472342\">Crafts of Boracay Supermarket Department Store</a>"] },
            { photoReference: "AWCwydix8Vy7Y2DgngT9rPeGhsKkdrMpUPIPLnbYJFvgQSW6c0Zy8hPSkxy-8-xaUyR0bwzbmPcYvoY5XDME2AerlBUZ-EmtxsEkB3bCx-zm8Hu501-uxTqq1Q5SdrL2LeCI9JedmpTfsebbGrXDtXnAyb64YRRSrBhYwno6pEtTSeBr920CNMZmwPrfLo1_nFh5sfdwqxNmTg1u9QwBPHt3BASLdDdYi2WsXAoEmEkUDI8Nx0mt6ce36G9FO6RYmw8w-u7v7S7EKRcSO_7T5xGivY2UrXHr7bUf3FGIqfbsrV2U7q-HLYr9Tnro_6k11SMFrK_RKuTQjhEiRPFa1jI1Y92PMTJBdjf3gWvOILMnqXDdmKjq5_xhlgTQTYNnoRQNZ8LSsMUWohWUeqSQbFX4QK-faFj3mj69ewIcc2Kmq-nqQzuC", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102111365196511472342\">Crafts of Boracay Supermarket Department Store</a>"] },
            { photoReference: "AWCwydik1QuX1DQ9D7BI3QUvanhqp-ocGJFeyNpyBMIttWD42lGSGruSoGcp-j9SK7LjtVjAGTihq2n7r8kA1lqhF_t_A2r7DmqLCpV3pT2x_TYnHEavt-ygKrUM2ZjlFioOk7JNF3yfGpMJhoUGglpIrkafMCi_2ADpEUYMznScBkakMxL6TfjS-8RQwAPwjADnBf_V3OSbvghj6tgbQJxWiBb8vbbw5F_DoWBPl5F8xt_WpVeSzIa6NcwW1IIlbyH7sKCT5EtuHwoT74to2gT63oxVVy_BsLuYxD0OXS2PF-1rA61gXbKySahsAZ66HUJ_rzl8FUtT3LTPjGiNIAqNDXXc6KPP_bjnXR_KNbHXho0AuKHcrnmNrUtbQEObGrdzYrOMk-VzfipnXylCLSv2vkMKnIfJRd8mrPgF31fSXmdrFz8s", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102111365196511472342\">Crafts of Boracay Supermarket Department Store</a>"] }
        ],
        summary: "보라카이의 다양한 기념품과 생필품을 한 번에 둘러보기 좋습니다.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 기념품 종류", "대형 마트 스타일"],
        tips: ["기념품 쇼핑 리스트를 채울 때 들르기 딱이에요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10165237259758602097", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%9E%98%ED%94%84%EC%B8%A0+%EC%98%A4%EB%B8%8C+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "디니위드 비치 로드 숍": {
        photos: ["/images/boracay/info/shopping/diniwid-beach-road-shops-boracay.jpg"],
        placeId: "ChIJiUxzkRI8pTMRVkfLZEJ2WZ0",
        placePhotos: [
            { photoReference: "AWCwydguzuR2bH4RAVS6558AEFsiqmcFA3kB0ci0xOtZPeaPaKlqqYBbdNoWC8KtOUXhRqwo648B6ggYgP9mBwUuUwm8wtQ2YrkeOtX-Nuu2w6mbKnWprR72j4CpLSvB7JmCPeziXb_hq7_-DRHOSK2_zqEtee1Q9qlPZJoQFX3Ip6ALqOxSynW7KIdh1QwAgS-ko1uW2tGfoDf1F0QP1j4GbwhHoEIh1qdAcel2OR565tQebGYvZY67O7AIWXi-6nDdOmjsU-Jbh2ahKOr0SrjJMhAttlW3ClNUJWcpgTG7fbpNG1BAvMxEikun2yd8HTmBuFpVFIUje3M2aE7rbxDK2lRVP7Fgyi9KAF_UdNgi8aKOwnunGbNg-x9nnr8Q9B2VcEnqDU6IRZKrP8GGniS4iligpQgAQVl9kb2tg9421VQNLA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117165319028470441536\">Robert&#39;o</a>"] },
            { photoReference: "AWCwydhvGIkBCezDHkb7flWZKZvHwVkYdAKn4asuGljq4iXq2rn9DpbNhmIAO8COWmPRzv0ZTH3HVKawN7cUWmgTVLH2b7bj8Ecwl3BV5pLjgXBDwEuyiqPTQaIWt4yf3r2s7bQW3x8HLVrbQUoxEfbYNQGE9rlmnPubvpnt8Pk2RLnuXjoKQ2GyLOrj634-9SD7YznFXJfs5YQd0anYNksLjjWrrgcesitOkKAcXdMCcghS8BPu1evdF9oy--Pv2q9HVyjrWPFlBhacsrEXcGbRYSAEJvu4HaTLrsF6OgNYTeNTPxyATXtN77r4gv0FBUdT9P0oXrZXTGkla5QsOegE9oaJxoEVrjBSf0QCVAX2JH48_hLYN1WShMkiOKhIDaYrD64DmrOPyhvS79IMoKGwIJC2yVMy1QfCgtuwVjJs-Jw", width: 4640, height: 2610, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100262447565941596237\">Leszek Kozłowski</a>"] },
            { photoReference: "AWCwydgo_yNh9QjaU1vMTWQkwhoABAGE-3aHL6XMsbZH4lAnYzNUgnrAtCxAzrg1sH_lgVi4KxqLh6XkAI8yCQTyHZ_5q5TSszUk-0q_4Y4WygoLtTrMNLROwVY8sTRiLK9DiukLzGYDKjbSaWY_nEHG4cRShilt5AyTucZk3U92PN9FRFxYXWeHOhf452bbW724Hmw9J5XKukIXcnBM9YhHxDu-ZIQB40ckT-Re_3Be2xx5fQtknpOo1zMqQmuIngZ_3Y_z0cyDggPIslkaMDfmKMna95swIzlFR5oCcKaJFa6_0Yw1TqXRQkU87wZlFPhiSOnLCm609u_I6kFZ8NaYcvamh14vpIghGC7r1-t1cFuSkICtLA_t1knX_njGsDr7zK4kUCBlFInHWZiTV8p8qmNu69LRcrAEKGinSFg9VPhEqlwS", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103261782733063449017\">Capelli Giardinaggio</a>"] },
            { photoReference: "AWCwydh7KAJVNb1zamZcxVxWX0KkrppQ2m6qpx9yxiP3NUw0LLvmrlBMhsOxkEJkQafiy7q8joZ55bJMrbpwUzHR6-gDr6mkq-pxsMqE7rCMfhOLV7Zz2XPLB4VqmO7kWTNtLv7iyMqWLloMFtvWEZWpIpEA6PvdVmOZdGjId_EvVOB8qshr_nKC0dmtCsx_fO-WAQj7uQPUcJFG7mxBMcJr6NrB0-qSEBwUkqTFDJLv7oj2UjKeHK0Zh_rGgBIC_uiF7FBrGT0bdrcTOzD5Hth_QfZdDXa6niF4KYlQCii8a33qtL6VIPMMzJkMbb5Vs0uLW8d4yiqRzKgaSdvutUYRRM7oy62WUtszyxatBhyesAhWfiNBMx1JxY0nsdbrR6cglyp2kgIy14L_HpWtUX2s9ZHmyypCoBq3Q_EbAVZ8jRdlcA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114267441294260596782\">Georgi Georgiev</a>"] },
            { photoReference: "AWCwydjjqKDA1AU6y4165Cerp5qgKmK47YLZcgXwerQ2ZP9pkFvmUKt8f38rf06_h6A3i5rb1bh-lW7KMhqDM1VoXYC-aT3eohGmcvQYeI_4-qsNmVngfaLfiponRvl76r4pipZs4qxLMOZcVhN-yA1I-Q2S9dUJLyeV1ojTFRwl6CQF8fkGR92zkrhv3zb8X2mS3bp110HqzKxcxrmNeVT2pNfaqt2zAo79xw4twau96tW8Z5nVxb4ewspLgFUQMERBhXYJwoGpJ3b8Tsbtd2cTSUYkBepStVYy_sF6iWbI2J_7sbwhvZ7mHJKfChj5jyaNPxZ8LnamYn-BfQ59_lsaafr5skKetauWWvyk4C0OLRNOJnX3Rc1OyhRyaDSNhFTfEYnesClsxxzju4a4yXZilzEdrkm7ehmm5qeBNqc0lgiCrg", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117546954529687730452\">Saiful Azuan Saquian</a>"] }
        ],
        summary: "보라카이의 아름다운 진주 제품을 만날 수 있는 곳입니다.",
        updatedAt: "2026-07-15",
        highlights: ["고퀄리티 진주 제품", "믿고 사는 기념품"],
        tips: ["소중한 사람을 위한 특별한 선물용으로 추천해요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.pickapearl.co/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13004924386994584146", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94%EB%8B%88%EC%9C%84%EB%93%9C+%EB%B9%84%EC%B9%98+%EB%A1%9C%EB%93%9C+%EC%88%8D+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스테이션2 기념품 숍": {
        photos: ["/images/boracay/info/shopping/station-2-souvenir-shops-boracay.jpg"],
        placeId: "ChIJSeAZtJc9pTMR4Y6m1ajC-8M",
        placePhotos: [
            { photoReference: "AWCwydjTxbirF5i7-ZxtET7JYsewyub4mwVVb3BbPuNPgy62pjnaE65V3wMJl3FoPmRaoWj7aLroMeB5pMQ7mlS6RpR8Oakuuyn0UjeRgAMTQY2O8wjeZT4DvicsqiokQ7I1j94yPzHcRKTVPi_Bg7y7xr3QsKQH1TKZ6mmWFuNWAHaVmVN16G_LpW4nJ_qDGdy3Bl5eSs6RAdTmTlTQlY-8uYlzvGBD91BwsuSsOTehbtJqbpaHA7C93nnjR_yzpDWXB8qAUmNaWoIqUp88YUziMeRSjCjvQeZH2UelYtGxOMe-ScJDfkpp_u_GtoT5n6nIwnRZE0fKPUZQzpWNx5GPqUqc_6OpENZlZmJ9BECiozdNASEOzJz8iWgAwp5JFTcvNIo2TkSFjSxsZfeC1nnnxpd2nrlg17ssAj10opBvV01tGZaSPt8Mn_R7o7Z4Wwal", width: 2100, height: 2877, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107641118937651317189\">kang kang</a>"] },
            { photoReference: "AWCwydglSttfHiW6wHrm7NJ5FwQHaNQjWFJZ3KEm7Q84o2nB5W6Exueqn8EwZADADN1EDgRfh8z9W5IGobzetJUx4PmImvD88Q1MPhCMHVkDjIqcCxg4KiJ0pkL7ZYrsu642D5JDjlOGbFfAfrMYmnClS6RYTqRAkGSnR2JT94rCqvEltlDpOaGWipWorh2rHEfOZsKgbPJji-q8bOA7b4dqRANhg__fhd7yn6RIYyZuNEGoNAl_H6OZ_HtVqwier_NbvCA_aIpEA_kRGGuXapDsVHD9Z6fJDaJg0ncV7InEyJwZoj2HrdhQTq5VYzWkFbmWJBPHwYi9XWPv0Da-koRIz4soNoaykQoLFN-yQrFT78WbhKDH3VAUHqgE68l7Y5XM1mh95t8XW4Hyrp8drHy37tGR7GnUl0C8lDjWq3UIZ3U93ZdwxPml5nYzXPkxQ0Kw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115120431897403163111\">SOUVENEA Boracay Souvenir Shop</a>"] },
            { photoReference: "AWCwydjTPWayBcvTkL4ELZOqppY8kng4kXC9X2PljtkKbZQSjyf86sm01eJ1XGhYo6ddm8or-Rg1zvWpJzkXOJohF4GXPqHyFFCV_LACqxMCi_R2lNxPY9D6gNPhBe3zNA9mWB24zOZpUoeQ6tfnFP7CqkcS5hVClQiG_PaC7wV44Cs-yGGkTgJy7w4ncVUyPQ_nteM5AcwC-G8rxUsYi7JA5tY8Ey4G6tG0fYo8IIjKnJjU77pve-SVA3KUGq04CAMtASHBGDzv-Qfiq62xGqOCdmVNxDR_POMOfPQHpseoYcV6JFKkWUGGf3i54Dierj7zIDDQrU2JDcUt7ymUrqN5vifk_KAk6k3vDtdm2pD17AsgrUUlTLzOI9fLsTdimnLamrv9JMmMtQyq6LfDyakA7bY0p5G2Gp2NK8AQvddUB27SCemBVxiv3o7fCaNfSu43", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115120431897403163111\">SOUVENEA Boracay Souvenir Shop</a>"] },
            { photoReference: "AWCwydgkY6VdFisUGvFmWTNraz1flfWAZnd0MoEG5vQH15bk4L1TxTYSjtmocl9hYxzgLSrCQMEEqvANiQMkVkj1e1b3FwGdTUv1WMiDHj1q_w_7qyzm-RMY_ghyKOyYfjS-hBjbRmf0MTHFSS8Hw9ittQ0pmj6ppqwhiOZ77N1QwxX4-fOJ0XIUV5E1CPB7U-rS2C-a5su46XW5Q6h4qVUdLYj4zV1rKc-JnrG-g_z-_XdioqGfaLVSLQ-hMIU7JaYDb13rX5_buaAbbZNI_-gs8-jsk-9-wW5REVjPo1pnJZLB8EsKEyB_iwdvf9rkQ5s0JKXcSH_2Gjfvad3RH2YE7sWslGgj8hYeZrA0wq5WpdTT11K5RnwHhNt0RYIoQM_d3fbfgTb_AkPT6QQqtrQTX--QKCKVH62cZ_n8flsI9OqYeSwhOOxUtny-W07qq8Wd", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102407660023700035193\">Sunset Crane</a>"] },
            { photoReference: "AWCwydi15R7zu8WxflbCqTR88A-dMYZEAxqCpCh0a2aujmVSfF8V1uMx9hK3kl2FgfzZD7cANuKJ9n778Krt5moLuoAhZWJE9WaOoJdrfmYifNxjt7NrOF5DhsiLOpUBlhEMj69Pc0u-waimv02jw7z2tWlUueIZF1BnMHvvVslTyViqKCz1WDGqbn8WOzRXUbznilrl1xclynvgSMdFdif1CI6k57zrc-etr0O9ZNG35B9N_kCSVdyPP0YHLXOCwC7UmrGLdFv2WV1cpNukuHDNUctWekcHu3lmOH0QhjO2tMECL1TLM4u1qhwFEArt1Ma-WJ9KiXNqa-038tGuAHuo-D0SulSlI1Z6EokhIp1dxwFnArgAElJO2ZLfzznIgHXzdOgZYyVGShihdSEPcA972RSpFKZNEsRfLRGkKqsH_fKY2TB9NGyZ5GyMORh_c52X", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115120431897403163111\">SOUVENEA Boracay Souvenir Shop</a>"] }
        ],
        summary: "스테이션 2 중심가에서 가볍게 들르기 좋은 알찬 기념품 숍입니다.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 종류의 소품과 기념품", "스테이션 2 내 뛰어난 접근성"],
        tips: ["바(Bar) 근처라 위치 찾기가 매우 쉬워요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1875867756651895083", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%982+%EA%B8%B0%EB%85%90%ED%92%88+%EC%88%8D+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "탈리파파 부키드": {
        photos: ["/images/boracay/info/shopping/talipapa-bukid-boracay.jpg"],
        placeId: "ChIJP-k9ISc8pTMRWTX9kR00IbI",
        placePhotos: [
            { photoReference: "AWCwydiEbxTBz-YLnQ7-bTw1U12XgZVXWgarBta_gOtMgX7WVF4lUoqT7VBrsSc9HvtSOs9bgqKgbIZiOCfmdk0yDWKjZmMPu1rTnhtZN05CvidDKGdQs9at6P7vmup2LmrbD3_Dwa8MR4i3PWxR5oBbhkvqg72HdztrmbIHlz-yzCpWH75O8u23heMFMWRgjl8VGx2FgewQnkNCSYUqP4devQ8dv1lMF8hCv7LdWHF4J5KTFI6cCWLyylfU-GIF5VK3h7BPJRoZW7RSKMaGtgd7x5RbwrNVgLDrTz-7mkNplHR1AIT6CvrvYrMF3-SydXhEKT79m_yepqPXE0xGvM-ggtdiMzBPbCqrsgN9uEETpu79qPigfzlo_g8CrKL08UQlAC18fHspMKI86Km2TpiVOv7q5VHGcAY59aHu7He15AE", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104267416841303825627\">Jay Zee</a>"] },
            { photoReference: "AWCwydiL_bDRXAleI5vrchRd-Cl6j10RQgLSd_MmPs-WGiKTs11fJ-imW951KxuWoCcsPWB_xocB8e22ycmc9_iQwiU3SCIEvW1ellc0Uz2-_QT2arx2g_egK46nYsnBKE4WxG3AbICrwPC7lPvSv3uIk3LjOKvpO6pqNzxwgKhfnn6IklrP9FjiGT2kPud8j6qdn-4gYxIxHRuLdi8LDdfqwF4vqKDkoDIMdT75gLJHqnLgjYoFozTqXZpJSYBq7cug1a-yfido2fGj9JNQlOVZ8sUYn4p74mQVVRGh6DRH3HtIVe45JIelbD9m-X7URWR6wyislJvTCc82nximobdn8-KjJelaXP9jLOVnHZVlCCWz49cZ3TGLoOdGxVZNNxgeX25na9Pcnq8u_Ila57BE6hkE_fD4xLfbR5W6RdKWdQUV1Ctwz6_FcK4OyX5toelL", width: 4080, height: 1884, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106636934571483520358\">Nick Treglowm</a>"] },
            { photoReference: "AWCwydjmydBmutWk1RGndVKlE8bMplW7iNUbEULvkfXeStJKRGiR9rB8WIdNckAVZ0RrFp3CVrLOkk3CcP8gVYcWOKlwX0mu72uEC1lKOKu1xJXLsEX721sk_eGKdMdGyzxNZvdKnfymWgdsRP1gV4P4CVvjb5NDFHM0kGy-TDAJnTtEDkDhSxJKulfngEhORCArkiy07y3szZpUtisVoya1gU9R87OmHgqTDkMTWxQgHJhXW40N5_LBk3ybyAKIZMdolRXC78CpFECSMqVjbIlPSKiI3Jm2wZPOrN9o6VsqFDCMhxIXYkpWGOb6zMvuh2AWEsuV2D57GmdC8wqwjOH8KP4vPWE38CFcc_pan882P0dzRHMK00jV3uauHtkl5wBDy8eWXNEyALc62h6A4QVRkRjGMZMPceH3V_mvlxoy3ZI", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101722329636660888898\">Waleed Bokubar</a>"] },
            { photoReference: "AWCwydh3FghNKStXjEXTZP-d8kiZaGgrbK4Tlv--u4LYCFHF8UMRKWxf-Zas_bVpyvVWLb9lf--Yg6z_8AKkPNc1r9ltHfUo0cz8-sixPz7E4adfB6fj0pmLQLF3-0004UH23qpqYdsBkVPpSJKPJa9d5EXmbj4wVlIU_4G3l80j_e_jRel1SMpTron_iv9FdzCsoxjqhxa_0_M2iU9erVeibzvKqSWcSDMAOM4-6bOCM3i8gJmZNWuIK7ZqLPRXeS3K_Lb9qAX2ruRRG7VgVgTxAXLeXsIbswwA33XVsLkYYQ3YA1HW4SzBarVeoazXC_udnVXFcE-77LUHfv6K7idY31ShxGZooGOlEtPGlgPTvPn28gtb4t4HvQ3Gqf9demf0FEUOuiFQ_Gq3aRPrAvL9t6AMfBaaVTokR1HCKKm0ffWbUg", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103427717260438002522\">Dru Looks</a>"] },
            { photoReference: "AWCwydgn2iBp1Dqn18o8U5_RNxAVoMNP0YRyl_APiOv1nUDhKDlUMzX2OXdzmskclVcMkP1VKafeHOra4Ldsfxq3Gwq1z8RCcIvMra4gBY00qPunxB55owlteb1dTBNIPVXtCovsex7LLtyMxj50vNIfpN28zYEFfD_FoKvIErFjpVF0HE4kse1EtMS_OBjHHA78zfg9OxN_LJfQJB391vnZx2ygXUAr1OBAlKBqB7NQ-sqMnpxaR81j3-qzslllaQBo-0T3PLYeYYxf2ixln7Cp3lNTyny_WR82IBpKolUY6sJdP_9iDWM1LZVX9NRQu3LAWPPTC0oGJp-idFx-3OdW72ZQRLr1v-TuKy49dO_BBQYUNR7SESz9HBy8zswenp8PM30oFNmLijeA1UQEwj4SQ6FXL3eEwO-RtwbAuL_CMBk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111722623600544892020\">DAVID</a>"] }
        ],
        summary: "현지 분위기를 물씬 느낄 수 있는 로컬 시장 스타일의 쇼핑 스팟입니다.",
        updatedAt: "2026-07-15",
        highlights: ["현지 느낌 가득한 구경거리", "가성비 좋은 아이템"],
        tips: ["로컬 마켓 특유의 활기찬 분위기를 즐겨보세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 5:00 ~ 오후 8:00; 화요일: 오전 5:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12835597714590610777", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%88%EB%A6%AC%ED%8C%8C%ED%8C%8C+%EB%B6%80%ED%82%A4%EB%93%9C+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아일랜드 수비니어스 보라카이": {
        photos: ["/images/boracay/info/shopping/islands-souvenirs-boracay.jpg"],
        placeId: "ChIJM6dlPM89pTMRj5Iy8bL0F6o",
        placePhotos: [
            { photoReference: "AWCwydiVFKVRpap6x3fphLK63OjQpgbOML7aEaGiaXTvg3_mlZ5fGBbpRgkZYma9nTiVAGQiyB0OlYg8MfNsVGlLfAaazpYDnZhAJcyjhu967LerzBI6jRWXK7iQCQRLU1bNkBlewPZSrp1G4js_0pna2CNK29RNB1BodxM_7r9phZlTnsZFWA8bgay1beMjhFIRdqB6QoXLfml4coKxE9AIVCHsWxbBE-rMjWukSNxB0hKXqIQbMOpR2bOssoN7yQxiUGh5Q2E5WpvrJeT_BMPhTaHAec4-_KW3SaHqdCJRzmFrm0P7WRNaJApQwAtEG_ImELukNtikgrCBX63r_uuIQunOEXPHIlWeeEMzeDWzKQV1VZaLeinsWCcDbd3BzT4pP5RSieqmOsDIE-aA7ZlSxicezVyX39hAzAeiBUGO9QJ_wA", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100461629585281095003\">C S</a>"] },
            { photoReference: "AWCwydiL7c7aVQJTdpTZ67t2Rt1cRNjzCgTbGoMccodc_hUYo9Up2JqvIxuxzg75XKL_zA5OYP8JkoYWBQtMdDEZn8fKtmwCWMv--QoHRJrqV2yiDM_Y6k7k26N8kvw-p5RvJIbuiYJvA3C5hlKCdbvCqOjM4i9051WoQ4QijvWNZ90DxGAxIoFNLPQV7_DpjEfl-JNPf4R8B1VrOiyjVbk9xVnEG0z6VwR0fCs3WqSuHsli_KycENkyQZIm0kkL6btNoimb0kOlD4VkVdNCg0b-TU5xsoiFbKndQG-4cGWq775JvS_S8OMJz92S5uCdpwx4afeYFNCIdg-__Q6Q7klcUTxivr1GTQEdIccKUtj86XCcDb4GxN03sJ7C40nzO3mNzO1iCbegJBwo17I3tj3cTZ3cVqSwPj1PMeUOKZlOHC_AVUDtlXpo2iOhZ0ImjuJa", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116063710596196023854\">Cris</a>"] },
            { photoReference: "AWCwydjGZW-aWxo48Mv_yl8HeeXJ6mK__XhKLa1F8JjwPZhyJkRatVYTJylOuve-Ga-GHXAdEdoPQWYPofHxi3HGDsfA_ojnxI9RDfY1WXOb2B-HBuTq9t164rj39UGjE_3EmwnmsSKZeVszGatr_15u1XYl5p0deii9R5NGOv6H9Fmv-ads6al8lTkZa28gJQdU9TLtgXdiIK6lb9pMYMpsRIFVltekKWbZro-k8UltJZj0gRF_LmKRiOHsKWPjWGCAC9HhIeA8Lt2-tS4DllssM7L0DoLAMSFq473s-xlbfVNyIN0_R6Yv_plJ72gu-5WX5RkZ6hJpb44VecbWCT-ti7vZq2VEB7GS8E0exV-r4zBqfV6rZYRcy6_Fugse_NPwqN0OuNy4AODUoRqM4NJ8NqYeJLxdCRYNOrtXvOjh3WINPr7yFuR9mz0dMbFWjqm3", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116063710596196023854\">Cris</a>"] },
            { photoReference: "AWCwydhaMUZVPM60W6yJWoshunuTGglPztW_Z-6FMkx78V76_h0TotaL0W3H65v_z5tmld-8mHyrWx4457HK6A0TH4WwJ2qJR0gm3N34oBzzHidMdykW1NX9UKejFnDqP1CUsQWraRm_Ma9SSnTc9CvTXkRSkS15ROLJ517S8P_C97lZn1uDqIGjyEfqE_M46y86KFIrf_cmzZ8diQ2fpYas-VvEnxsTIxduB-tLmWAnkyxNl7yh2rZ__RDgvMc5mifomkvu8xfzEDVLC19-XB4h3Rjmj6yfSY0TT9J6KOWYl9HOqP0RtP3yhXsSu2OdlVhHo6e5sntxAXifgzZaDJN5BupVleZhdhM-Td7u09Mlyop-waYEk3-GN49KNJemdVqkaFhlTDcuf_PPmeP_hrAeCaGSWvTchtsuebk3V7swt5Qokg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107496995561609437836\">Marcio t</a>"] },
            { photoReference: "AWCwydgXP52IJzVQTV-KFqCWf-BpICKS_rgvbycg9h7lZs0ywnYVC_4fik8QD9HQgTkdjjvTlWR7JTivcSmfpGClbjlw_f6QCcA7Q4Csah5lDz9_Ic1hpVO-XU_7GWA0vnrI20ofjVYdRej7yYejUNy_bGroVB_n8gDhu60Gl866iVSfX82LBgk6lsbbWtIsswYU8dgtYQ1QA5H9CcltZgJ-nu_QO5qGH3tOfRbakvftt3DCKcqJmYELekXVCe682YtZOKm9n73UrpNDPiEOqj7NOT0X4gZpRJVMMC_BMoHr-kwYpeEZtGLhSTv_grVRNDaORw1miCx0gc0qDtbXB2D44eZtSw5HrQ4W2tDT9uE1l1Bpjgd0pC2GDMB5FYv0Qugqpz0rt65fVoZyCsth3RqPkM4_weKpqmQOt4z9XSOcQZG6DA", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100461629585281095003\">C S</a>"] }
        ],
        summary: "보라카이 여행객들이 가장 많이 찾는 유명 기념품 전문점입니다.",
        updatedAt: "2026-07-15",
        highlights: ["깔끔하고 세련된 디자인의 굿즈", "D'mall 내 위치해 쇼핑하기 편리함"],
        tips: ["보라카이 전용 티셔츠나 마그넷을 사기에 가장 좋아요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 7:00; 화요일: 오전 9:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.theislandsgroup.com/islandssouvenirs.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12256533960300073615", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%EC%88%98%EB%B9%84%EB%8B%88%EC%96%B4%EC%8A%A4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하이딜랜드 델리 보라카이": {
        photos: ["/images/boracay/info/shopping/heidiland-deli-boracay.jpg"],
        placeId: "ChIJI1g7nCI8pTMRxSmpdF32Taw",
        placePhotos: [
            { photoReference: "AWCwydj9PPRoItec7oVYuVDupYDINnA9EGOFqZ_UtQBQ37MRvmGTBynElyn_TrDdFgmWpoPDeHBU-uF79MNPEi4mGsvw_DJsIfkMLgu38OMpm8X1LNP8EnL9hOJEB7e3qrBM2BOSLAH8DUB80QXHBSuBoSxWk8en4Wr6TIu32-gsJhlRzZANS-65_527bAFIkDviK2yUXTDUcvjw3sJt8qtMLoT2pVUd8GguGTrhs_JjXDdeDDyMk439CShxtOQ3YHEbbpUNGY3dkWlq-gNbsKBVzyschhjKGgYU0fQVHxfemxGEwKYuKMC7QERW9QAJPjDCf4OkWvW8V3pIGtslNjThghcAAya3iVfoVKUuutorS08UjemvhSlIYcHwAE4__iu3ScBYXKZ2JdOdQeH7CV6Seto-BfgCpPZz7ijXSowHOFLF9g", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107313346512687955926\">J Lastrado</a>"] },
            { photoReference: "AWCwydho8_NfcNJIFnLAJkmFNbedfiO7xnv2nNzwHCaw5p4SUfkpeHCixYCfHyvHmoZimUqyiz67FlrZkUMPYjK73NaqvtwDKgv_sqmk3LugBppGpOeS0El08KuWxSywEGA-H4Q5CBtAlbvfTJzMkIJeO4tCTg9KVue61ZK4Anm4RcWU8Yx4fuUguJ1W9IcD5APSH9zCPmQ9Q-HgydlmBdlYUGrYnoNfKRLBXc50UV4sd6NM-tL6vuPdacGDelKBqCYN6-pBR2a1k5zg0kU1HlOxrdv1gHZXggFJUPV5VjSsI0B32JWHkIW2-5SdEfBRFUMJ3uTLfRhpcsGw2ljv-0UpIvCL-1NE9jRo3Rpj56722zF3LBGQ9JLTgzVCozvZt6AqP5qSWmt1PxBYxMxjw45rndH2hWH25mU0BgObwG9uYZiIb_E", width: 1920, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104519658411871692681\">Pete Jankus</a>"] },
            { photoReference: "AWCwydgQAPkvkQXUUNDWy0TD-JR6NnecDNu-c5I3IL3auFUtaii_xdv3zHMD11WEcF5WbYdOHaINN3vq3vQ6TZat0kzccnghB5JcgdpLrnJrM3nycRi7VXg_pdQVOvIak9wRfBpQSgE7Oda1Idyusdnpc7tLNfHI1kyooaBsD0X6lzpxxhzsyuft4qUdim2jYdNuTfKXiSoi8Nxrt4e2JGCqIr97G2diN7maZ7fbVmIdgLgtoMC2787K3fnfxVQz5QrKbmGLNerpSEpOiZa4RkkTCNeoS0d3r5jF1Q6B4pOFiMETA5gU-9_Ym0Cugu4pCf8llXN85Su5cI-9HoC3s7Oj8G9HTaiEwyyKPBBRAS9_ZOsGfXzP-6XrNOM9eWCBFEUueH15ENI8Ib6-fYEZA0n9M6pFJ58OISdCbvwwj29Kt00XVTl2xcO8KLM4lnkxjBqe", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101652915808764125202\">Zaria</a>"] },
            { photoReference: "AWCwydiaoOLZg1tsODv9NRKot3c940NOh1lLP1RetsP9CCuc_736d0J5qLsCAzyGQ4Cpqdx6WsrGEa3nNwfbdsq80OH5LNjrutGI84JdQejgaUqPvBkLxpfKpE9hBozwDBGt8q7GlAtqSYz_C08XrO6tuYgQ2hs0BVsNz0f1AbWhRR2p2kCjoyPsinArJ4scCNBajlHZcI-SadXq_W4EB_07poR64512RBHO0Zz2ygAygIWw6H9CnWfJmr2gB-eUS_54qGbeqruGJH8LcieZw1aAkTh9SvyGAo0ROP2kX1-GBTU2IMrXGpwhbnGZsHTEUQ2QoD-s63I7ToxMPGVufWQxHcJeodqOjS0d5K5nR_Z8guQpTgIVGdy24bgSdVUBQ4DafmKJQSEY-pPrMEpF8v1Xa58_hS-YZIKBuE0LXRD9UyZsVXMzWYDnYuXXstlrk0ky", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117437964780367143498\">Maximilian</a>"] },
            { photoReference: "AWCwydihDVVbsermxs1CMoEq4dNVhMHhZ4FQ49ZFzNBYa_wQsZTECCOSc9Z9T6ASMcjcG2AJb3MnER1OwhmP5HsT--_vtWn3yOdQSMpLmHVBsBLMIOuB_MiE9Hg7cVp-Fb2yC5EfhT_UH0WL0zgd5aEsj4XGw6GS_W-jhobvCV0HizTb_B-n014mpUyzlzTGK78t89U998t3aR8X2n7WuteA87P5hdVWP8iyIrloZraJ6SRPMHZGnvCPZ9zedUD2A7y09d6ygSaXnzP4wtAuSgUFwkMs7e211ovAQexy-1jyCVULtDa4JXa5z-dUX652nTb0hpSFsnuz7lkq0a27Y1dLhYiJpDs151bV-UikUwHQgLpCWBBK4o00FZONPxHZ-VANwrSXWSGAruibZGDTT2uFX8i4NBI_i0qHq6M_7zAxQgFNWBh4yDgKqHcSqCqmDJNR", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101652915808764125202\">Zaria</a>"] }
        ],
        summary: "Heidiland Deli 기준으로 확인한 보라카이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 4.5", "보라카이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 7:30; 화요일: 오전 9:30 ~ 오후 7:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12415850628979960261", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%9D%B4%EB%94%9C%EB%9E%9C%EB%93%9C+%EB%8D%B8%EB%A6%AC+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 쇼프스 앳 스테이션 B": {
        photos: [],
        placeId: "ChIJq5_0lDA9pTMRCdzgv_QBZ2M",
        placePhotos: [
            { photoReference: "AWCwydh_SGSinkPI6qTxR2YnkLRl088fd4akGYHZoc5mRgFb1WjyqIF9hynIdGfY4gM6WQQuiDUq_N0fLZXRKuBQZMwGMe-yBsX6sCpxg0K0044WkEA0Yyh59z2Dw73gZdkDvSkT8bCNhA1ZA7uTpophVS75urDrW4XiecDp8rhNcPJdZDVPOI3j8DUTCelZSxCcXLdj_JSdQjLGEYF2vhpa2LVLtYJy-oxn38NrDwtj20bfD47IhkrSM8Sabn4Rjxi1jsva-SSV8k8gcFotDsa7blnH83_g7uyItm4AJoUHN6o6GqskcQDmdZTj3eG0RJjRDTzgYaEEUfnPuxfgMrysMNTj2fAKp6-aB8Yib6OBW3YEKMQpk2MEQFexXEzuFa8t_MvzJrnKjpeqLiVcoC9BCat0otKsrDrBiVxV9YhOSpvjkbtk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102879334136434199487\">Raymond Chan</a>"] },
            { photoReference: "AWCwydiH48sN2ivBEWXTw3h923Ok8iEPVfTG83GVMLC15lhBYKeJy8_XBGwApaLCaK1N0cTWZuPsM5SsoYi0u9ka8Y81lwGLrmmOYVQh5zDeZCkmlQLF54bz7xZv_cXFvXasoRA44p0C81Ig0rAlOX6KWPR6Ou_XEFxQ8IGxVugXM21FltGDrmuZuGYEkqURKnIq6nAzliARCFZz8ch3IesrUoGk-zhRhmlYlw_i16CDwV58WVglnI3VnSGR7DGn853I8G89GgoVlbSUE5N8ILcFpqo62qazXS37gfMnfMQ8Y7LDKZQAnbF7k1c3OPm8LfpFUTwTJbGVTA1MjrteoNQ4RTCv0guA25CR9dIHSuXhbtwM5n_sVZcsE9Lm6SQKlJW1KVmln9KM5EEuovmfK7ti7gOodSGgTtZHrUGPWqUeuKymnj59", width: 1200, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107265700308932423480\">LGF The Shoppes at Station B</a>"] },
            { photoReference: "AWCwydiWbEdudEm8cYpuH4v2_4ECJU_EjsBfdVhyueURTFOqdCAEmS4hquYooUCAW7nnNkOZu9vCZLc98CXBkp8zZ4ogzsjkF_1K8zVyNFJ_U65i3mkc-r-rUUnuOzWFydlvhPwAWgd2SL2woZBthssuTkGCe21At3rtu_-_hgLQezHerNao_LDlqLzIOaA1pU2eR7UMWTIE1lBC-Y9mTJzKo3Vw5nWKjobrbQDT51vIYK5Qyy1qheS8BnNgAqVIr-uqPosaUjafEEoiC4HoTQPtYLsdKj1J_9HYSTOy6FdY8wCxbWUZsHOd7zElczewjFNAGJiot62q7nk28UENo_5RkxEzxzcatZ9vO5yWmoLC7ueK2CKH_nOxQev1G1GECaS1K6ASonY4uobDeYWiB6LMGbuZyo5G3u0Z7cASjxiPkCmPnQ", width: 2048, height: 1153, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112656628010140474258\">Kali Walker</a>"] },
            { photoReference: "AWCwydjYDoDVlPSk_-4iHnxZgrVmg3Wf2If3CFp9U7L1C90lJNCU4Y4HIKcW981_C9reSS3SigjF4L02YXK768AryC8mLCuTcBtBLIdpjMEYFbPAsxk5KOSYL2S_O86gKAEhO-eJLK2k9IZ9xMex7lHffBGAstobjW91_5j-mhH0hazRMuW6TWmrk78TY0vOWSEzrw6LsW_fEHVTyTzOYw4zyOXVJEncUqdzhfsDKJQ3bc2BvRmKcrUZ1y1iD07BSOqN6n3MbBZPva_lmZm8gtDyPl80RHAJ6Gyko8BaLoalObrdajwiUiD8G2-STYtwOVY_CbCNO_4NrnCz1ZaszzRREb25O9yBXT0W-p7_FJVd_Rti74tyxOMvmhkIcR54PxN7qVt4Jvpz_0_xpH79CbuwD0PpaqvXkjBtjKvl-D-hbKG5_7RjT1GK0m_sXV2XlwJ0", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101026087318048617580\">Nati From Korea</a>"] },
            { photoReference: "AWCwydjFe2RsLLBrgu1urhUC2r5cAo2C9CtYV2X2PVKIEs2NLiBlaNCxs2wA4utWcNIzJCd9c1VBrPVXyqTsinLfiR_hQScDKKM-3UtOjWI4tgxgEkS880ya4aMtsa7pHb8GVUC5kXgjMrmMIQE6ZGdyWMnX83h1GBEHcuxI5i1wV2IFQsWL5WKZN86TIfRku4qX4LkNy-jrbUM57gDP_VVKg1dmEYmGz4ALYAA5OAbO4bHETiyQgA2PS3w4fd-OjGKiGsHEPE63isE8yYQfgVLQZhGzj8V0meNLjgqrv7ZbefEqoIncyjK_AWqD3X7I4_l39amImRxd1FBbygLJkNRd8cj1U26AD0TJLHMm9OzPE2A4ccP1RXQCFGqF3qgCFYcurp8HLX4-j4O4MBVp5HfgIFrKhe1Jh3rbfIcDbjpq9jdUmA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113522007758484820367\">Jude Ryan</a>"] }
        ],
        summary: "규모는 작지만 실용적인 쇼핑 공간입니다.",
        updatedAt: "2026-08-16",
        highlights: ["지하 1층 로빈슨 식료품점", "2층 백화점", "내부 푸드코트", "현금 인출기 완비"],
        tips: ["여행 중 필요한 물건을 사기에 좋습니다", "직원들이 친절합니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7162695883058895881", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%87%BC%ED%94%84%EC%8A%A4+%EC%95%B3+%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98+B+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "이몰 버짓마트": {
        photos: [],
        placeId: "ChIJHy-fu50-pTMRNGRHkpDEApo",
        placePhotos: [
            { photoReference: "AWCwydhKj-WOASFwun0FAIImBo3AqjcMcCLEEBAny4he76wLgljAyck7rCSAEY4rGOI85ytgteSQ5oMGDMhqUD2sktduYoDP6fvnpX9U2HXkSUgFS5ClueqM91OUSZSS2Fkb0YQU_o2eM-lYqzF21x4z6HRsTpewmD0f_YIo0YTk5XqruRreYi9lCtTfiMtrujp2twmGJ90hHnT33tu0of3vZmjIzfnGYyYOXrt_ZNy7vMUm1vH61P_i9HE7xuxG8Fgh_Qr9yr4AJo8o4pLAgkGUWtVn9yGH9MNHzTl0lgELsRCO8_a4RZUApM5WVbVFZwhplhRemXUUAKgnlZHhu7rIv9SMJdgo9NlZlugHWBljD5D7axHXz4Hcm-y2_-zCE9Efjc4O6117uOr7C7AwZ1ZDotuhK0Ah4-2l5-wo3MQUyLg", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103411410782421445712\">함형호</a>"] },
            { photoReference: "AWCwydhiu36bS30ylKDiyrul01_YrcvPqa2QwDHsehbz6HUpUM088Nqc5X587mlkMnjqMYiPHGycvennc2_nO1CU_eaKa6zPid5T17jK0WASv1a4e7BBAWB8YCYdfNV9bxT6yjlNeT4oNWZtHAQ4bzx4eQ6dqE8BkfGfOlzVOXwgfp0Ln6-3gulDdPf2mGYQ1fG4_MAf_P9daViasnIWmk4rcyh3A4YF1vPmf1hNQO87pBgffUfbkw5ksn_yVTDAd2VAhvJ2OOWYl0xUEA-e_glbvTupz7DMji8a03skY3JXL2t-gSLOU7dy0-Zj2xlrKdXAX8Ln3wZrm8qjiwoHUue-vMVjnZZcL9hOCiI-ut2QUeZJQXDwzmaX55QPCotAOHSS8eTA5wJmvQwejwYe9GDW8Ze-hoMuYBBbeK0ewHPBZZs", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110751988926863548395\">Gwyneth Navarro</a>"] },
            { photoReference: "AWCwydgYuronAZEmsIewoVLb09y6H4DPprYXkpUUHhQ9tKA2ts_elgNxWzsADWZBy2HPwmnyEelBsJfZ-a1MsEZ5X0W8HDaS-DRvaczXj4DwA7v26qBVZESvhlyNs1XUZBZXVI2Xn0ZI21D_jLS7ZanRVBVALCYsoetS-d0jR8X08V5PLmyMHss8deJUZsmMx-qGZ8yNoUlot7dqPugA_U0mLg5J01Ydm_NORqmaXkZNwxUDaoflY0-YhmGw1SY9JM8Qe6ngr1rR8EzdoqB_unuAlH5U9GuXek9EI0j0yrjTkYCjImqCme_QQvKDXMwADKuMnh4peu2SRtabC3t6HM8heLahitVhWz7d8qE4M1RG8KxS5kSzcgLzNpfjwTY1yQyrAuuNyUfBIekvXPQS18VAwN9teE4W4EUIvn84wrldK0sccg", width: 3464, height: 4618, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103409862491934518400\">Bryant Kao</a>"] },
            { photoReference: "AWCwydhxD6_9ViWCJxXssvNRzKiHihHl7bPio-MPuks_X42Ot3ZMyCTabjBQmrWkyjwpPtsbkr9cs1N_sx6VF-HYrXxaq5rNF8eDwvYAgfQ4qT20IdV9Kj0OA2aj69r3ZnWiHRxWsrwLdHef6raBOUgTebJQylvW6ORUOAHpLx0Isf7-yhuA8sYl_AzFTb0OKPapwFjB_6sV_nHQ2ykmdm1kw9BW5MRqxeEMZOKlPd0oDANcqZa0bWz1JaMF3rVH9P8KXkMq3nkX0avOym8laAILGfmEsGYlJhY4-MxeiAVfNycQuqG3TxK7oMV728ySMt8dfssM0oSyfSyq6VkG8bJv6-mqmypqXNwcRfTYmkhCCHetAnCfxDo7UZzWgX00w5xNqJ_E0daenkcRNvPyYwKk00JQDnqfAhY2GLF1asAe9n1jWEtM", width: 1024, height: 768, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118011829925797757406\">Alberto Nicolis</a>"] },
            { photoReference: "AWCwydg-Y9S7ZcUNZRsgzFZcs6SVHSWKsccAERHGmi7LqY4E_pzvoCqDBSKtRGuE4nVOgp-arM5nPmvdtkfO3dlhiHNqr4RUQdnRCx1cdKC_DQMWNaZl6wVOJ29Ybuzwe41XQQur__-uEz1vKHVuq9qSk8ZpkzvMPMSIa17XLPxXpRi5Hk02dTJE353mBu9AzeoeDoesIRSOa3WX7dNPgC31VBJcSMhfxoJ_HCy9rC0pzc1-67eE0WYXPDgFeBr85VGq-b9ZcsbHlhPA2oLmJ6_z9S_1jRcmxq27oOsiK885S_KZfs16sBvzU5v1nuJhXnlXRhvYNJrnyRsDXt2l2psM07ASSImXpU6RIHF98W2zi4ZvN1M4SRMDPFEXZEEbtBUpjrfjKhYftulmQcX4RBKSL0CVxZDvtHwNpILqtzOFqxM", width: 1024, height: 768, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118011829925797757406\">Alberto Nicolis</a>"] }
        ],
        summary: "보라카이의 주요 쇼핑 명소이자 인기 있는 대형 마트입니다.",
        updatedAt: "2026-08-16",
        highlights: ["많은 리뷰를 보유한 인기 슈퍼마켓", "매일 오전 9시부터 오후 11시까지 운영"],
        tips: ["늦은 시간까지 운영하여 편리하게 쇼핑할 수 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11097648557002810420", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EB%AA%B0+%EB%B2%84%EC%A7%93%EB%A7%88%ED%8A%B8+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "보라카이 미니 마트": {
        photos: [],
        placeId: "ChIJ801GFSc8pTMRbe9LGINqvRU",
        placePhotos: [
            { photoReference: "AWCwydgbKvT4cvqsc4eEbs-5orw-HTWWUFVxe9KVNnpn11Dj4U5yzpvHzU7xIdbHObftDUJnK-teXC_zu5vgsn1GB9Ff2l_idrmOWdpnxD1C9fj_QYx6pWyufnZVv3QVa2i2sHfGmGuEDrIH_kDomYudbYYpj5Lif5bT4o9b1Ka0gTPZYGSZQ-lk_g_xX3bnJQdmAq8L3jdr_sAm1yGzfUURRukYVQjy5lXZjQCeXWo8awOlOskQjMUwc5QAurkPXwZrGx-U87DW0XQa0TNf7U1C1tGR0qMOEw7Byh9JRpyar2lhFGKs8FHkA1Xngp-g4ma0a_4yR1ONB3tmMqvSvn8F6GKqCHnILRIIYLDAXHUfT9gwGPgRYj8Isus8EETUGjknWn_bIM71DegYDXnMXBb6AEb_k7-LIE45plcLxe408Do2jyY", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111722623600544892020\">DAVID</a>"] },
            { photoReference: "AWCwydg5L_ixqwhvPlpGpfqeEYl3Dh3gla_ikmvETklI_KojxQaiYk02OpDTrGIAeaJ43Hf3P9KCPcebkkd9WRSQ120_cI9dhRYV0BE1HZu0J16mzqE9_mO2aiVTlnIcge58xsOh06ghR96YsTCPz7NzBoMcuTE0hc5BJuau2N_legAVZ-vELmIZMxeTLnygnduwrQJa9qnka0w1zNP2q6O6hLke_rOWHtcfSuAwnAtLNNB-fbH7cnX9O5DVHTnjbF66t4gEXGvrM_X2V2G8QD1O2Y7j-sC3X2L4uiyojjtmBxPRukbyVlQNLNB8YlHzNQnQDlyS-W7S1kn9OUYPF8IikLtP63_67IdW8IqG9rPG87KIZWRrOzq1qBvjKOWhOtIPvZdD4KFpZ4W9CFXnCEXnHGTNyNQls0dggeqJq6kgsfc0Lg", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104368863106163015862\">Jane Gregorio</a>"] },
            { photoReference: "AWCwydh1UvJr-x7XKBIZ1ZaySNbyDuR9XUibBfcyf0jr0zkDHKNtc_MTe8yhRomA8QvR2pXzLFYJpAPEp5UI69olwiwxikMFOkHe-9chRMQbbH3lPrZH2XuI63VNxTrexmwRJYSGQf4W775xpoPGCt3KRknD7LBcsougd7-U5iwC4ZeNe6rEQw3AUobl05ffnRo558oLOn-3HCXJic3ox6c2cacG5ybiSKfij50o1KbBNYWVEFxP-T_vu7aug_GQNmPbM23IW0kXVMX0H88OJNzQlw7wUshuOTab7bZQG0_-UFWQLRGI8m6lFiZKkHto1HrUrasDvenq6Wm_Xxn85DcVbC1EYugZ2oe2v8p0MHvlIoJxS-vOwrLjkts8CIoo6KjVFrZEQU8KKtzEYI9ekJExjdqs2hgpezEQ14dDLoqXLzlKTc72", width: 800, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118011829925797757406\">Alberto Nicolis</a>"] },
            { photoReference: "AWCwydgDODUQYKvmSaMGeuIB6OTH3Q7qDZL_lAdbNlxJ79cri8jrlZEUPvaX7TshHeEgApunUnQCHVoftvbMrp4gI9P2kC2u2PJmrb9Im0g9DqiwGUS5kWl6-JDlR7TFX3KzMEjuTodc6UOUFHfXEppdaE6GjHjyjhC_-WkGZ3I0KPZovkzacOUyIUzgVE6YfCwqdEOZj4od0YNudxN1L_lh2kTqfG7uoYHQ3xYnkK1UITm7JXQS7wEitvrOz589J9Vm8NcsAI9hbJAUfbjXrY5gpR8kACYw0yvFvHnYJpkHKBtukVdQmXBIpXz2sLQvetY0N8uUSe68q5PES7wr7wQbPyhq1d_-oPMujybEUwdP6M8ytMQkmpM_pu9hr2HRCMpgS448gLjxaiicBh8r6L5JcrUIH3ymIFCIVqPO-NO4AEoPbA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108688043507299254725\">김성목</a>"] },
            { photoReference: "AWCwydixoogoxBTfEe-nRMi7Q9nf6UXKQZ0dbXXU2uqzon8NtX3dEUqNrLRvc1rW0OkYnBEIRFiZCBYQqmWbyW0_jcC41cQWXOnbJ5-LCsItfT-cs4Ea6q8T4u_QtgyRcbxP6T8Rq7aJ9LMD-sCsb_3-kHKDG0DZrEXxb6eMeC58Yemfv147WOhdF9IFsNjITND2ztW5OxqRCUneZzppRoisQAam84Svya9kwezHcH3jEREzf_QpxYtsm0IVDhfJd0FAfXSr9hjyhNQf0-vUlgygMtaZ23ye2d4SzyY1GLfNa-NAlXagKSwxPvp1yOVSCND03w4pFZARzkKf45j8bmC2JyuAJ9KJSp4Cm9QFhTcvUlVzUZNgf4nLsfRAkj55L1fUhxKcE3IKJZ4NRO8KqbbmiEmdtou8rwEiVhX322FLJkkElQ", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104368863106163015862\">Jane Gregorio</a>"] }
        ],
        summary: "다양한 상품을 갖춘 슈퍼마켓",
        updatedAt: "2026-08-16",
        highlights: ["버짓마트보다 풍부한 재고", "긍정적인 고객 리뷰"],
        tips: ["다양한 물건을 찾기에 적합함"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 8:00; 화요일: 오전 7:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1566525356675690349", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%EB%AF%B8%EB%8B%88+%EB%A7%88%ED%8A%B8+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "세이브모어 보라카이 푸드 앨리": {
        photos: [],
        placeId: "ChIJxU1hQQA9pTMRNYzVv9kAM9M",
        placePhotos: [
            { photoReference: "AWCwydhFAVp2vDUaM5mIs7LBpw4vxBkuz3OTUGC6qYXdc2wWuToMdzEg19LG3_wr06dgSfqIzdgQQtShDkJscnZKw-5ZMYdHk-nVZR1yWY8fzMTNLO0Hv-hilK2h_tpMQjn2jHwFe8OGiryZ3RE0NXjLnCsY9m8VDCvdWL7IrHMQQHSUjk76XJ3RoO8kNW_reuUgOJmlFWFCJYzn3jYf8Fa3CKSVQO4OP62OZLfkRXbOGuryC_kRkPN-RhZj9NJmijM3rNjUL9HhHQEoaZvgBxWginvVtxhH_R6aMvtrxb2mrPecegxnVBYEzlHkt0U8ufJ7gXfxKR3JwwEVu-eDTVonTFT_j9AuEMXiK6pcMvKPjePtGNtQcWk6rlIuYtrGH560nJSZBrOuNtQPsRdLwmOeFjmTlL2ATRdpdSG8AOFSz2AP3dTHcKCTNt3DJwU-LsYv", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101429420052179709047\">Yuna H</a>"] },
            { photoReference: "AWCwydhVG4o7wfMLKb2uMmWQAYr-tbdvK2abpui8EfrFKiYcBnD3UjI0zXFgUDGsTf0IMPQVFubrxqfcHZ-vgktLnXB-YNNKT4EHhD1vOFOjSn_0MrwXwadGZdBgZ7Je5fe6kj2j7H6Fcj5jrlYDaPg0wR6rHp6KXa5zh95GBo2tw8JQN-VzAEJ-ML3nSS_HljSrfBfJDv4Y2Yz1aOMKITK6ecwLg7x9_eSFHbmSd-i_qfNcNSLUYDikjB28sejhxgO1qq1R0U5zhQey-rRRUrGuuMobvzepBEnMAR6newWY6AiJMEw29WwmDH8jXEHeg-m25ZT-FyMIojPJRl-UeXsAdhKhYtvoUi9jND283w3IX428Mj0YSv3ikYKTY9t8n8vGTIGiyoseFYvEP-SCdZxYz7Ux31Jessvsz5WCePo8_OmKBksd", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114412546484650203012\">즐거운여행</a>"] },
            { photoReference: "AWCwydh4q7bCws_8ISjrSbifwXPVekMoYozv-Llx6ljO0jee3-ItwdbRAA0nHOsur_xhUINSar8lEXGfLNI7OYFCxJSq4LtA8nVlpw1QCz0mVMmp5bUyKfFaqsdCZK_1z0jxbQtUbykvuQ1K0tDIaoR0W985dz0e-PoRrQAWXo4iYxRrootmQTY8w99q5-gb8TkyZDMo8XwD-Hco-NQdQ33HYshkPHfQbwnIvaL_GdAL1cFHuYthyyou8K8wSySIwp9i6nrEYETvRXPYzO-UaBfKMhxYPA73NYERrRwwllhUNh9aqmkQpPPRNW__SNFqEyv_JddxS58IpthhSiszdFk3eWkmwdSvdNvfVE4u7B4PRtKnfiuBOfQDJ5gykmHAJF6bftwv7RAsDZXl3ZPSSP1p7wuvjp0SOA8C4x5GwAI4vYgsB12xLfExxKZ8QtbT08RJ", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106710535660295758511\">Andrew “Andy” Davis</a>"] },
            { photoReference: "AWCwydha1cXSR6td4UaLldMrgHWRKIJ9g5B6JF_5grVZ3AeD4slfaibv_fjoejoyrdkZqofi8wL_He8HNR-9YU-3gsz-iACSj7LHxlx9ZixCnWI_N1ukigSv7z4bultSMw9OLZBQorU4fXnUwZT8u4ugjubWIAf4rjJT-i5e6yT3ACALJjWhQHg-X_dXIuvBaFMm53ZVajd535N1R4yG-b1uSWcoOW2c4Afw7dY41jMDXDO7yczOb1QM69reLyj3CDyqUFHA3dATDDohINZ-eGy66UG4432NWzHf8WhGb5X-cGvAuVnGbpnoBKnSYSI7jhU1q4GBhiazRLJItzk2Q7V7qnu88u2NVpwalch4k-VsQ4x1d28FX-ZWVG1nvrX3gqcEsdbL7q1GhTFSQDqC4yqRgw6_D35iAfOXJ9OAAPMtJprSlLgckbYbfWjvCu8M69Ey", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101429420052179709047\">Yuna H</a>"] },
            { photoReference: "AWCwydgtg8a9z_tJKRKnxpYTk7d4fb8cECHzOz7tFuthZ6uw8BVzg3rWGS4kNL9dzp6jKmhqYDucXCgAVCFCJRgb-HTp9KEN-Mt4eQxuPfoql4cBmwt1AdOIe6DFKAXBU_1kb3Q2YyrVwhfsGNsrA2kMjeNrv7UcbEg5H8F7WX3L8pgkpzenB1Bwv9wG8pg0JTLmEyj87DIKJ8T3jZzA1I5VhTE4n1ZGWHcp7Sqqzok5nRnUrlkb6dT2T2R3iMxQ7QeHdiL-Z2UNRfLlq4e60S3dsrXsVmTSN-o5vSOhQnZwdw0IESnzqhbq5A1fnk0Ie6FKL8VH2p44uH-TodvXZ3Qpmbl0OesH_VB5DJWSv4CQC8oVOEJ9J6fnqU4W-VKngQbfIc9Wkx5puX_4dBGxSCL2FFOM1DCQP2wbAnwR-82WcVjtHP8sNmuqRWAAuthX8iWW", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105111129577516153051\">Jino You</a>"] }
        ],
        summary: "다양한 식료품을 갖춘 청결하고 편리한 슈퍼마켓",
        updatedAt: "2026-08-16",
        highlights: ["다양한 식료품 보유", "청결한 매장 환경", "편리한 이용 환경"],
        tips: ["개인 소비를 위한 다양한 식료품 구매 가능"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 9:00; 화요일: 오전 8:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15218508501041384501", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%B8%EC%9D%B4%EB%B8%8C%EB%AA%A8%EC%96%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%91%B8%EB%93%9C+%EC%95%A8%EB%A6%AC+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "피에스타 아울렛 스토어": {
        photos: [],
        placeId: "ChIJPfsWiwA9pTMR6Uk9r4nQJzo",
        placePhotos: [
            { photoReference: "AWCwydgo_v8WVHhQgm37N73FNuQIWT7ftwB0L0-O44xDDVeKCHfebwCnvp7sbBacXTvBXJEScweoI360kejQl8B6ZWrqoWuTOhoH975iQiWr2Ou2SlM7AjYA2h6vlFOdBPVbgYVBQ4lBUxI_LYqcG48dsixU4XVURSgRBeHtNyjI4lSx17j_USQANbw_e3W0L7E5XrOAZ5s5lvCWsCxKqJJ40ttsnl-DXnB2EwgbN8dDu-KpzYhw07L6vuHe2svODOkni2hLQMqPhXJqrugu3Kqcp8pU5zounqpBQId0zeqGV2e40b2sos1o5Npk7g4cuJBTcYcrQOXwVaayvCv3OnZb5cikpE2gS92mll7VXHKm8QG9C_w2eOeQLRRBaQGXlWTi59bHABLfo6ghPeRgsblS_WywioqTGzjqu3ygYjTvokSio8pR", width: 4000, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106838902139007563722\">Bob Morris</a>"] },
            { photoReference: "AWCwydioqiJ3gXCqE3ONfbGNgn19UrYNjrhfCqmPHuYJOl4ThuPjmJQrX05YYLhQjRwC7Lw55fso01R2thZZvqcK1XN3hbrZh-X9O90eFPB_bXVtv2DkSJa6-mzH7OMIwsoFUpAbiPZDVfgeJ_4kHWYy6k9RCvPw-ZGv1MbjW07BMdRgvykO87qUNnwI_fKRRGYB4QZ5_ftLgvF6I5HC0ZvZ02sqG-Tu-9sSewdn2Nh-NnsOj4PDLaSgebWeLQcGCSd4H37A_cDcDAzi1WiEi39mvO3MwU5DeFV4ddurO4v-ZfdzwZW7NfHzql_ouR3OsAjB-N_rOLYEDDnULT8wcGwNQP4yI78iWrP8XcXIkAiLuGKkohYeIi5ohYxPBx26woIPaWHghlhCYWaCl1kt5vtUAEyLB5O1F4EM54SJKKW4erCNPAobb_b_9PxY9WxLdsqc", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116883730197728427497\">CECJ2</a>"] },
            { photoReference: "AWCwydjdqRDAdHh7pfrGbjQmV1kkvrgZwcDVIu4rv64lmKyj65P1b0dXKHGwl_ETx3Wii1Q7BrX-WAQ1RJqHWDsv3mKVUB8plpo8dDFjHUs6hH7SeIpSEAPyDCALW9-Z05lrIGn90pBuFaQ4R18rJPa3uG0IOAb3UAw6QqJ13f1pgYkEwgql7pLt6Lg39w79vvE8rJj7QCeelmA9X-9szVLCzGN7LLekRCEc8OIcFcyXPUkGjmpW3hsmypgehyb0F2rJeR2X5LP5QEoMokWZXfeb4gAtkFEE-vyeTMO-ngt1XiTDu77gAf7wYmpv5q-aVeZGuLxNbUGF-SPxwOOeHLbuYbYW2AbPV4g_L1aRYnfSZIiq_AA5jPKGTTAezBFrMAwlE2ALE9mkp5HPeDZoD-rLCWeMfDtWtJHtJiN6PFYgXyY", width: 1800, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106838902139007563722\">Bob Morris</a>"] },
            { photoReference: "AWCwydhNLwEcbYVJ0PquDlV_0l9TxyGhrW3iJ1rxgbNVG29UBCw-wZRtOBkoLUBJ0ig9djmyVwDsGJGyl3wvNSbEImQIqbiSfskduB3syNvp5RZ4138feYwt-pxHeoNBiI41NW2lhZuzBc-htdsERR0rlBFTfnc8TFWiO6AgXMjLlrrrgCZriKIQjKsvxBA31xAHQ-sloYjFNET_467-cBfk1VL78g7f_XZCSO7ea-75dp-XgAHanaG5bXCb9hhRkL2Gship1308gyceW7vTJuOKTFi5IQwY0ZwmyfQoX7wflheRENqTzLA0jRYCx-XQVs-X6uMEfja2xDjxe6PBnHzYxSBZsy_KrfLObcaumhqYf5dG6iIEXf2kC5P41_enPdMqlauyo4rGFkvHjeq4cSb50wn1j79TjgaM2q0jNFFavsdzcQ", width: 4000, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106838902139007563722\">Bob Morris</a>"] },
            { photoReference: "AWCwydjuMHsLE-O-1Uh6V9EX87nCvA2LwhGSgWsM_RjIUM6m4l-Eqo-gX2Xa0tqcaGdO0752rtNSSZVjr4Lom5vCtDAftj0GCluYLNovLXkDryJY6Be9xBxrAF0AQVg4L1tXqiV3jDg__V2MGvm80LbV77RWprj5CUQeCBmAszcw4Dkm7gPVX2-1b2QQXmgyvaDoTH8V5V5KrcR15e_uoKVB1esgUq7vI4gq6RGK_uzlNpd1uc_a2Lud9ueJrZCX4ktuITmothCawAdICEKRmVF7lsV24loQGYNmp4oW3SKIs9_zCXgjIdIY9Pog9KdE708__hSxCMr7laCTklinkwfsiholEsp76h3G746xbluXxzWdbz308WzSfNFkwI_-t1Ye6udBRwe1316eW-C7l-Bm6ZVFRrZVLBJHnFijdO91LFQNrt40", width: 1800, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106838902139007563722\">Bob Morris</a>"] }
        ],
        summary: "매력적인 디자인과 뛰어난 가성비를 갖춘 티셔츠 전문 아울렛입니다.",
        updatedAt: "2026-08-16",
        highlights: ["몰 내 최고 수준의 티셔츠 디자인", "합리적이고 매력적인 가격대"],
        tips: ["티셔츠 구매 시 디자인과 가격을 비교해보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4190547268060662249", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EC%97%90%EC%8A%A4%ED%83%80+%EC%95%84%EC%9A%B8%EB%A0%9B+%EC%8A%A4%ED%86%A0%EC%96%B4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "베리굿즈 기프트 앤 카페": {
        photos: [],
        placeId: "ChIJ_4lZgT09pTMRWcre9luhbTk",
        placePhotos: [
            { photoReference: "AWCwydiTQlcTy5Hr1_i41Wc83_UuD4d49aSHW-hMFp6By6H_0BP0FMyn8k1H0EB-DwmDW3z5c8TGzgdfWFu5ljvAFvcyY-y8uHzAxktJOwfVk_moClo-v7M4U93_MAvUXsuT1meaJgc7bhE6NDINBQpxFWtX5vividxOrU8bdBm-yVRkPUsnQ4hbdT2xTTymicNiTxbYb2jt3H8eT1b7Y8-IGuOt0CL0zaWQ4eCzP4mluO--_vuz9uW4fwpRprtzSGigqQOE8ruyHuHcVIdycwTwOtDYcWu74tJit9YvqO1oKX-b1Nta31q-TyHLTY3jIuCO13Om_QhjjKEfDsxhb5fUTfrI7OVhTe-EAHCv8V_y7vEAQQWIzomj125_fQ04jxGSM7EDbWjrbeDwgLi5iK3YMhDnmXlx7YazVKNT1lYJSiAUZtu91A4P-eHYXAWMAN7e", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117893672550637398426\">nill cheng</a>"] },
            { photoReference: "AWCwydh8KtCLaO8l55y5vzN8ZYqEtnnoVFCcw0RSVa08HP4i31P7R593WO1BRhlpzzfGtr_EVGHN_oIwqD5nKezBZDKO4xTfcL9Z-yJXbcf-6_ozUPsLxSrga1ilx584oek757GD_t9D7jCHsuXxV7yFR8vSLcNI1tvWc1zi8ZRsEFfFWkmPoaiK2XHOyNyUNhPkKe5MIaqCpAkcSgQyp5OlZASfyrvXpOnuHlkAq99CWTeQqQw2aq2TZutG4FWrPi0dwKeov8Ori8u11hh3m-FheGwSR7JQdx1QcJ1aAcrsqAyQyau_DBPSi_LmF7ctUD48g41ajM8j0G-NJxAzL792BH_hR5WYWQj3c0hTIbdxByCMSaHc5WTpMo3ZDnkJaqLrQFH0CF6huXBRz4-omLHNxWJbpY-09elN_VxUGgf_YlDAp_HRuP-5g0hTFICvwQ89", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117893672550637398426\">nill cheng</a>"] },
            { photoReference: "AWCwydg0eCdZHITWo0oBrMakPRWd2OBEuUuZt3ktT3U42TUlGyQ7fnTQLpcl3sim8z0jrKcDy0pLRSmv-I2ma8YL10ODgTPhSBSt45C87bfzkxpvqQf95gTJn04NgxdQaA5DN5H382Bm8Jok99l7QPTPS0jmCvUEtzM3YxyaSg67BUBbjqySSPgSIBFtUiIK0cXcr79yF8jUlb2EpDnbBpmwu2Zx9pexPtbIOI_mUvqnhmSTGvz8_bYznsBvK3TG36Lu2H958TzdJy0gg_XkzWYArsSpNkufWDOA4eqvCBvnUF4AHsK2s6jTI9tU-ILHk_eHsBonZpu8wLLSPWqpSczZgsBsDGUZfShQLXrgHgShnM-hirlL32_8LBvhvAqHw5C1Mwbp47Y2myR1WZmq743I2eYrXCJT9AWKq9SBEfAV2VXRKw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111627727891977344511\">장민재</a>"] },
            { photoReference: "AWCwydhq4yyMtlvlchY89LPt7M1LMinOW67jMy0IdjaPq8S-ZI7ZxU-e42YNA3CGVzntCMzxKIcFIgl5b4Z8dkx_u1Od5rb-owC3SaLmmbmSyVNx8wNgslCjw8rsS74JrinwVal7SCqLfcRp2XC7M7EEetKkQYOU6sXUVtADVPFrxZcaxwYAWCpo9xV911YdAWBpaGIyePx15ewsHLOU9FZgRObOZua2WZj6pNd_RPXP4uzcAqKnSoe87qBqNTpaA2wDcJ7_ZDW8u_waFhUC8cp6T9knd--V9HvZB_tVAk0DGDVbl_bTaTG-vfxTgIVZIvlkf-7FvznNWwQDAYfTcQMLKzg_l5sp6G5zy_HUcmb6FQdN0a05wIuxwMukTPnRHTGyslCFvsIYzQtXoyhhuKx0OTDEBvkA0y04a2XYusJmnGl06bGKkgnMSGEcCgAIGVMr", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117893672550637398426\">nill cheng</a>"] },
            { photoReference: "AWCwydgcsFBHdFJzygEewRJq0LIjfuTP15k7sK_qzLPd7eu1QfA-4rySrdsBsV5BT_6_1DiKDZ8eAya01k4bkSHZZQ8XwviVXZ-hexXktIq06utY8y0FMJJF6al_qg9JiyC-oHo45qLUrwyEnEphJuwxHhWVUY3ebm1V-9E47N_sAO9GyAo2gA-CTdGn7uXRokrE4QqRAmO4zBoM38zdQVGZG_XoCViLR3KqxsG8Ns4o8pHkysOlLMn_CBsB-splgXotGfkJoVYO5dHZzUakUb7Rc_NSFIVuET87SXWiXACHVNICkrKkAQ7-DTPZYFS7f5ReTLwl-W8fyfwLoRgIlC3jwq6Onc1QpCli7cs1f38t9WW__C6VYJrY3aHk-kjlGUgHn_YW_7hurJ-p21tL6XIijTjV4Zwl8gsl2y0yNCaUE4tTRK0", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111627727891977344511\">장민재</a>"] }
        ],
        summary: "예쁜 기념품과 신선한 주스를 즐길 수 있는 가성비 좋은 기념품 숍입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양하고 예쁜 기념품", "저렴한 가격", "신선한 수제 주스", "카페 운영"],
        tips: ["현금 결제만 가능할 수 있으니 현금을 준비하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4138141048979245657", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%EB%A6%AC%EA%B5%BF%EC%A6%88+%EA%B8%B0%ED%94%84%ED%8A%B8+%EC%95%A4+%EC%B9%B4%ED%8E%98+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "다모아 선물가게": {
        photos: [],
        placeId: "ChIJG9alytY9pTMR6NTsy4BV838",
        placePhotos: [
            { photoReference: "AWCwydjQC-iINbG6tFKTnxgOh-xAW_1FXgR6fa2z3nGK-bqUYLtbK8K61X4uXAMceoB5hd0PWJWVAuBZnBQVOQ6hd2caZea_KPlWzBEB59iOg4g5-nT800Vkd3MRWeF8iIOe14KLrb4ym_-Riq56vKDW1jQnDsNa1ps53svUvnuHqFlkU07vkotGednDZrH9wV3IuJCAHWbTqZPkG-RhAT7IR0WnB3sfMGN0oTvMuzpEXLJpBxeY9ZOMauEJuw_wpARpKHkpzGHZQcfCvo8tlsJrJnjP9JlVOvACXWeevaO6S2FDVqv-eKxN0hV37fMLCIcPQUS5IBUEpEnOIiND_Jigqe3QoRGslGdvhQ42sBwumewaCV3CTDLNbr2GvoIjfQmkXNDUAUnxln5WJSZpasp-z3_Y-B4rliPdyIrbxCXhTnM", width: 3073, height: 2305, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109910324964106974788\">JS Jack</a>"] },
            { photoReference: "AWCwydjdf0JChDIy6iPfcVZVk1July_6TRB6OOtlTDFyRnghbGkCL49y94GYO1PH58h3nsiW_PCCuN-LBMusAv7hXAc9sNvHefWp6VcYfyZVbTd8tSkkvOZEn5QX1YtXlDlv7MN40rSrmIOynFv_l_1-9plN1sWucaK9huM6vR3CVrZIIKw1bBzNhzHw_Zglbm33GAvRyer0iOia_m6O71_8hv7Odt_IT1ykiw3iOBRy2mvGuXHUqJFA6uU8izmrTo34t9z3jj7yAhv9_pPvV8-f21tO2JNs_qaPaSEOzjRqBi1nOpz6sDMV4rnBc_s4m1xenBs8hjbAKUEDaxTd2YzCg-JzUiDTd5vdCKZV-uE8uiFwO2pLR__MUiFS6I1rIcJammBLYpHpgHUg6iJF6VmXPFUnvGp2qQhcVJxDCh8PQT7Y3Wvt", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111549442645431435188\">이연주</a>"] },
            { photoReference: "AWCwydjOdoZlkawL6gP-0ykcUbKSRjK5hPSKyJJr1Gc9ac36hCVZICDisF4mMRhvIPiK8uwnWt9SDTqEvtpQB-bA0zxR2sHUwJO9HYYj-2_MtIDveW6KRQmSbhUoJxqLt0pVvru4HuXeuavLAWqM1Q_k1svhIfd2td4pc8ejZCTbYuSADvti4PEps0NiuXidMT1l7l6__Zw0HJOuflRRK69pvMON0itNTrwgKf0dA6MmL7wpZrps_-BHc2GjP-No2rx4rPZBA4PVDHUW_2JQ0BLXDSfGtCiEVPvL8Mn1IfX7WuevygxUQOygzAUp3fVJX3SDyyUDRJRJm0Hr900pI5Xnttx7TCdRBXGaVWKd-Sv7Y1YIE5ycAPxibqcbXEQtciPFMnl9uGE-FQH7l_Jv839Q-1AEZTb20gr9phqtwnKGSI0kig", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111549442645431435188\">이연주</a>"] },
            { photoReference: "AWCwydhYjWaGzUOETKoasNN4SGE5_snIGfCbJrsAv17tU_QK8tDZRIkrookW39FWHeTtxrzBExtEMQr3mgmHd2WpcwFx09H5HBGq0LyqUoZ9fNvQzzVfabTDpWYg_ElpIha796JIObTyoPgSfcoEToppg8827Ivr5F9rL-JVMPHwLUtKpkX4YY94oLmoQkiMXUKMdXAz3mAdHJVV2inb-I4nZSrBcbrlMZTI116jidyqeBL_0IGkXnm-WoyAZ7pXfNu1uO3T07W5wTI7mRYKg8do-DWz2FEr-tB31PRytZO4jyUS_OXEM9-h9oA7uQ4U8vKDbbigh4maqTq5rXmj_jxSS6Rz7i9ff_38WYU8lUBPaZft5jTwKbft6Hl4V8_3DgU5hbGvYSLlUq4GDRqUelIW_WwHwCOhMrhM2IcV0ieJie27-Q", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105794418994149080561\">minhwa kwak</a>"] },
            { photoReference: "AWCwydhJ78Spl3Z9isL-dFRKBuBNJ2bmCqD7xGxeKTYLsU7JhfoIdDAT3YL8mJ8aykqKy7slyCIVZXnctPwmenBt5T9pAPea4s5ozti0iuO45dXgHSSVov17XFx8dgtVI2DiAIBDZYRgXTUjMUKEeD-xhbXDSFiN4BXYhZkVv4oHu8rELhDIYvS4uH35s7s1ZI0B6tQKSpNcrpB31n-Fena4lPTZ56-nXG2kneKo7DS2OLw8NDOQ5_nMZALRyijHKXWg_gBOnr-pVmoTv5-t7s-nYL_AzQgQnh1snLn1RO03LGWSj0MSJYvjpnp4a77MJWqRldq99Ak3jskNJiQsTqBeR0XHMrYdf1YyilLmGX5_-Gp6UpU9FhguEFz18pXg3-xpqm2CSV1FQIWEqVs777JXU-f3HNZdhA9oJHOQu_-WMZNb8g", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105346425423949597723\">Layla Lu</a>"] }
        ],
        summary: "여유로운 분위기에서 현지 제품을 구경하며 휴식을 취하기 좋은 카페 겸 기념품점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["커피와 간식 제공", "독특한 현지 기념품 판매"],
        tips: ["북적이는 노점 사이에서 여유로운 휴식을 취하기 좋습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9219806873823007976", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EB%AA%A8%EC%95%84+%EC%84%A0%EB%AC%BC%EA%B0%80%EA%B2%8C+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "메모리 박스": {
        photos: [],
        placeId: "ChIJA9v3QQA9pTMR8DZCgOP7vsY",
        placePhotos: [
            { photoReference: "AWCwydgAEerMqZ7Zen_Mr2QSRdJKjO26oTo4-4V0ClPPxQT-s_qQkK5zqG5ElowxI_4LlgeTQv9cgwzic3DdBg__ltLVuDpVmVjIpBuVkCyk4KMfypihgnRMgd_kx-Kcp-pidQUrxfsYGhXj1yM8BpXgB7CUQP_13nkG-92jrAECDbKAEaA5dxOzXETujJXbm5a4wF8VW3WMOJqIn9AT4v5uA7px9PmA04B7wRzD6dmiPGX83RwvTpasM8V-Ozlsq2IQPB5l6M8a24Crv6sjLNQXY-0Hb1kqdYYKC5OJNFZhsUEgri5sIFLiBIq6cfncJb38hVFT88Ze5-NHF_vwVzPfYZc15PLGZ73-qhm1gqmhbLpjpzgwYmcqjwJhH67At9VefmF54H9l9RAhLUSvCPmHLuh_E-r6sJgFYkYRXuxE28O_iRDOE8iy8lh0F3OFvnYX", width: 1907, height: 1345, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116472262458220548329\">Memory Box</a>"] },
            { photoReference: "AWCwydhq9oF2BzeKdEpo_DChQcOaNoNkbw9020ENNbYd8G3LMvzixJn9lseCtXeLcsvgFbtAj4pmcMHF7XQiN5tmlv3peYL3gE1IcUyWcemfkRm-fvsJitNKZE29iP95Yu2zHnfFwdsjjkwmlzWH18xJjKKpnJljjgidr8ZqvtRzoGvVlMfJYTgqXNfptD3nojtvWfW-fB0-y9UWVMCxvKjGEooK65tOtmu2lF34IqDNqlCmZHdx3epbWEyUcxe3DtWRnqvVO09_AnI61vxbS17W5cYO_jpFB-Fl6Xmci0efEyCmn4Kxt3td6XH5639kSTOb65N6rEqIJEB6p6YBp0XE4JMXKP3QJFDSSCARtAHyIEjbTtpe00bLhuSClB_cci4uhkjywfAs8QAp8_EIM22V0zTop7Xv5Kwur31fUgkk3Al_iJLsRD3XeNJt-jlWZOf0", width: 1093, height: 862, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110070326484693102763\">Tina</a>"] },
            { photoReference: "AWCwydikFpekqGRAyxcTTr9Iru_WnTXFPLAMEJsOr3UiJK9p_bVC4DO5b-jQvYddTOUqK4kPMmQqvARIGAdy3J2_49DxEKPN7BPiqX-f-vu7pyevgjokDq7vA3oHwnb1_fWB8lSPLu6iE8G3nexnqm7pG1P4sZoX5JWXcwh9GF0MVtu7IosKf7qUAG40h20ASr9c5yxaJ9oEAzEG6vfa3Ts8WoklyOxroeyGD4WaAca2CCDzngNj_PkXSi7CQTo4G2p8_xKlC0yOLb49YpTBzidPwBqudQ7tc1eoMmK4zMgkZP1Zci17GxUo7hDJBUFhP6sj5B-ozaBFG6VXUu-VMAyxeGXstJ8uLim1hjcHp53GtuunCEFBEC_MHu0-sm5r6U6iY8IgcJzf8vXME5hlAiPljtujfnnxc23j9tOPtfoQ1H97PMDJ053Z20NcsELdGy3e", width: 896, height: 1195, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116472262458220548329\">Memory Box</a>"] },
            { photoReference: "AWCwydi5BCmEJck6hUkAG_pw3wTDnDptshvqYqmVB_Hy00RV1_4OG6jN4_J_UiQ_1c930DMSVaxsy9j2UAh5WnY4dFI8WdItlb6O0CFwQkbtPHXBu8K_5wgd5Tljmuz4Cg74awrSo3cFGH29k1o7UYp77ox9UiRXIyIwB4mzQt2Bf4IgpBkiJOxKIWDMuqY9ilQoMr_xaVLrpagFUtOMKDLkFLL94kTCn0rWkSNmmysE_L8O-wn8yLc-IjZqAqw9i7t-U1Jg17Nhc-SSGuJ59Tm3YJA1wV585udQzsUx1CVC7PwtkDEr-boHPHnUrf_nn7LzYcC3HRf-r68GCW4toZOaTKfSCnzHxupb7rl2IgfQP6_3ouHD5TpwGztmpSq1QSZBozviWzpS_89bSARUmM979r9TP5ZLKVE0pNphJeXl5kT4HCeDFoyJYMIsd6ka6Q", width: 1170, height: 1551, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110070326484693102763\">Tina</a>"] },
            { photoReference: "AWCwydguexKUsDvk7UyHsR-OkAZLkMuXDKozRKlBFvaqZ-g7qs7pTx3dKBNaBkqna5-NWObT6eT4_GCJR8gmLGTWw-CUgF8wmTBmSmUf7IR64rwHSxqMaiaYPvtcPUZooP8TEfTsEomAc4cZnxd3l7AU1LzFUQT47tQfMw9rU_LIKD69WFPGj8e8f3ie8Y3FCUiIiD2dLR-epeZjqlQD7UKizhs10cTbYAeS-MKqsdaKDN3A-ltVL5fLIqFLX67VEWDZkjwd_zRg9dHFssYdBJPECl4z9TZ3_PYXSMbpFbMtNTLeeJ05ZDbBfPSu4G6pjB0f-lk4sBtzOv0UnGaSeZ3AeJZXNwvOnxN0bePKNYyeZHEo5VIeSpu4spVAV1svEBtDnJgmr6WSwqlEB3rn9WesmZr25Q8xLOilWLSMd9NwpPtM3RR2evXUt7QHifvy1PJs", width: 543, height: 1120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101138898717976225415\">andy</a>"] }
        ],
        summary: "개성 넘치는 소품과 친절한 서비스를 제공하는 기념품 가게입니다.",
        updatedAt: "2026-08-16",
        highlights: ["보라카이 대중교통 모양 레고 세트", "곰 모양 수건 및 자석 장난감"],
        tips: ["독특한 기념품을 찾는 여행객에게 추천합니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14321160819612727024", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EB%AA%A8%EB%A6%AC+%EB%B0%95%EC%8A%A4+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "피에스타 원 스톱 수비니어 숍": {
        photos: [],
        placeId: "ChIJN7BB3iM8pTMRhtudoNnBZi4",
        placePhotos: [
            { photoReference: "AWCwydggoMZjv28nxK9DeYUmQl6KzorIv_IhNt9YbccfWmWSpEoVS_dFK_u7T_8YOZYJPUFhlgkYUhuXN1_6kYe5RzpjQyL3C86-eOvvM-1n_ZGuXojig0xp6a4vXC96bEqLKkrWG7FHotFbM1UTm_wf5U4RqB0rA6gei6ZfnSe6U1d_1Y6nZtBCuKFaxQGUFWJTw7MIw7hyNsfh0jgPdyHlndmJ-EA10XTuae0OejNo0ze8Bf_DHlgILdCBWtuJhpJUDG8qo9nw-mwMsCb6gZbkJ6DHwyRyJen49lK4yoMku4D7RZfEUNiukMMuQQ-VuwKA7DH5_fGzrb78E5ImHUpgQGaZJbQiZUst6zhsAPfvz4RcmNZpn0CaCSul3aN0Fggih6LCH3zy-u9sOuZjcuEGiTM6sMhiM7-swTGzS122TVLHI8yr", width: 4128, height: 3096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104532803246680103079\">samuel shih</a>"] },
            { photoReference: "AWCwydgtdUXOH2gxCxS_i_5NS8ic-khPhzCMy_u4Rc3yJtenTviNF2WGKf7bBe3HHNyOucQ0GIeJbGfyFRnbg9zwc8iOId_9nEZ40YOZBd-Ev_X3Ac2cfxg2BBxHC4ouXURjofQBzOGlYWoxcwByqv9AMKVSynq2rcxVCwMaBEyEAMJjLrpb8eexp37dkIfh212o4l-28KZb1drbj6UjWStoN7E_MrcgY-QgzEWDwbfVgbyd1WjPIP8kZ8QkhBQr3UW_zjitEeuTCpQpxLZD9EDKtTaoW8hc0OEy2HR8gM5EYiUuHVBt5LP_U0lp2sz7j3dKWTe8QthVBjAhMG2BoTcOhvt1LbV8r-JkVpayOPHd0LhBB8uGD5um-nTRjrTEG-zNH-pALzfcHwyaLRyVRwk4cerR0pQC3aKEdarabfAwx6We9-1YC7aOk7aBzn5dbPzO", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100016414170099743956\">Michael Carbon</a>"] },
            { photoReference: "AWCwydiDwoA6laeMu2gD7S9DnNYIDC3juhIK65TzpVAFIkIzEEPUxudw6ARet-lPw7Z8Ig03HtQEUSTAZ1L8oQnmi0uD2cnteUEiDDrs69AM9ZjlspOhZzSDpnApcFMvPgCoXWsJNoWlwTH3QOlTkzKO7bsdqLBE1rVCCXL91kigpr0mKvoEoS7HezMe9NCOTYahcYX-sJU-UDLCnUPepl7YPe9eb2Mk4pUSXsw7iCB-z5gtjthJKSO1Fy1TBh_z5ZMl525y_xAPsPxnjgXO2y3GzatBeGrO4Az96Y8Jj9G_52wohw8MYYWbGKgnaZP6DEu-054GDl0LDDseWhNJxLT-MeY3lwP85JzpExKxZMUMLqTMLuKoHorJvSol-cjJwXADdmEUEF5_rzV7WNg4UHyhsLWwwj_ZwDXW7PP1-uljaCt1AbYbyJnJ2_lOOfXtOs9f", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100016414170099743956\">Michael Carbon</a>"] },
            { photoReference: "AWCwydgRwiA1D0dqXHQvlgHry9ekTvIBl9dzQboe_B4K9ZtRnrt7LFX0qp5QgR2GgW2-wrZn6vjYk20enXOxngxEL6Q5r09UvIeSYIC-gZ7vCZCoqTYGJ--G8t-h6opLUu-7YaLBWVXST5VRRULrrv4Up_8Wn_UmnoIYgBcaJRjZ0CFMFCz9VSf_8h1yD8LbQ0o2BNspqfMI6e7YtzO9s3qdEuDXlu3THvyT3BYHDjwcNLhe1xhCkJikO1tHZDSthdRcbbg5hdUnw4iIu8SLrgD3MK4cDj1Awvb0ja3jgOm8kPtOa-lCLERlUM0s1e_oNiubeS0Ct0T2M8vMgswxIa8b8CkOtemWmXQ3Cr7IZiILn94CIXSFnkSqzs1LmBDeFnDJVek_egSfES0mQzbPZypAxI8X9QcADHKnQEjyexVqW-uzmQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112753301023738125323\">李先倫</a>"] },
            { photoReference: "AWCwydgxQOnrBP5OzZrX5R96MuW7EN8GBDs9KwsJakfRk51BfYsWUaJfCXQ4KG4HKKgtSHJeZ8LeO3MJjxzxVUR5GwPKY_QSFjcynRfJZsLtpiPZCdHoglZagIoRfkB3EeSrMwDhGbVJCYY8KkFnuYmb_80kQZfVjaD4GPfaszBQ6TRdSIoMax1IpyMG8zdOtnodQoZ9d_X5W6EalDSbuijkrdMtCN0i-1VjyWbUU33o7hoDCF6f_mCFl4rjAFm8EgdH1hQFHzsiMis_TQ7KwVkeCFpcG43u2s1j5EnMfAb6N0QVrwCY_j1KPwkq8kPIclFY1v9rtjzFp7fzsSb572im1i983bhG3J1fyzh6E4jYSjoW15K2zMEQkcGJEv7P_FLilcOJAYEMwKdo7Utu1vdpCPI4gMnAWKI4XtCTjz1NOLg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116962843606745312914\">Jericho Saddul</a>"] }
        ],
        summary: "1층에 다양한 기념품이 준비되어 있습니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 기념품 종류", "정통 필리핀 가정식"],
        tips: ["1층 기념품 코너를 확인해보세요", "매장 공간이 협소할 수 있으니 참고하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 9:30; 화요일: 오전 9:30 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3343572913815935878", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EC%97%90%EC%8A%A4%ED%83%80+%EC%9B%90+%EC%8A%A4%ED%86%B1+%EC%88%98%EB%B9%84%EB%8B%88%EC%96%B4+%EC%88%8D+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "달로이.피 앳 로컬리다드 숍": {
        photos: [],
        placeId: "ChIJ1z0wdaE9pTMRp-aSHRXJUnU",
        placePhotos: [
            { photoReference: "AWCwydiM6WcaMNB7upjP5Qtnzpi30wlSsiueZcXVmTtPKG_JR5oB7rK7p9EQQaaqLVyHVJDew09b8MqKfrScFGxHKsS0eXtmZI4cqXQFbHi7ZJMG_zPwa5tZyXH3mZoiSUd618Rj9-HM20OFnncZ8xaI9M9bIpm4RdxJ7pKKxGusqHLQAoVEGR5l0U-EtrsbwVL_ddwbiUZamj-objlzFXBM_7l4Ld8yOL0wrJihk2ZG3klKEwFcyvv1M9m5RIk46X-ZhFRT0N76FjxHo2hV3PqjgzzGJn52xU54i9B4t53Of8uG07fuyteLqOJhN98K0ePQtTmDvlwVtAyEPBRzk-Ct5M0fq2f1q2U2hXfXjq6g-eV_hv6d5zvAWOmDz-G1gUn3OpvMBl56lM1mQjbF0pLdsr0QX_ManNXscMfG78LIeELWiUoVLaCoYjMuCW2Cpk_5", width: 1200, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113687857528047255630\">Daloy.Ph at Localidad Shop, Station X, Boracay</a>"] },
            { photoReference: "AWCwydilX2HRTEshpw3Vp6gfF0et_ODutnIkmKfx51QhGkjofjcGgHX7z3FFnDJqUOJIfRuzj6ETrDrBiXbILusZnmEhdba3z42tr3RvAjJwF3wuJB1ZtfkHJoXuPPPASO_7-X8ksBYtMu7Od35gCjfqAu_Iw4y9mocXVyKgnaA_9DbAnswhsAblCDqKSbF2dWXGaMsp5nzsdBtPeTAJJQFlYrfpe__gM2Mps-5D_Url-hhviAxS-xW8itVC7qCH_n4LCxdmhNkcRun3UVDw0g92xLy2ce9av8ZfyFfaWrRjoQtMYz3lkk-p-oGPZ1L_qWSXoumCd4PioUY0Hwdwy2_VhllYSu5iOqlrQo9vyK7h1B-9IiKn1q4pCYd06BpH6qCibtVyFGuPrgz7ZPvR4U54FbNHGipfbGlzC7aiCZfh3GJN52Glfk1U8Pj-BYoLlg", width: 1200, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113687857528047255630\">Daloy.Ph at Localidad Shop, Station X, Boracay</a>"] },
            { photoReference: "AWCwydj65i9sle8WexxFg_BByXFhOOviZnU7pgLQUqjh-BOL4LWqRu0LPttSkvxZss1lXvbEKyqsGoylDDxTLAN1hoUD6KuNmr_Ey-ZXi79xJ7m5sKMx4kHZSMwH-cKxUvsJUiTCkCmKxh6OltrWZ3OFJFC708dJyUnPjUW_1LqCFJBN8stlPmswza5xUzSQ0vSutbtDaSWF-MJMODhHcoO8AK2LfzAnk_-e6eshFzCOl7U2q3XBGe7emVLaaiCKQ9F3OZarXF_7JElrclrdFqzA_lLR6oJE2J5AhKvmuhQLHF9wRDNrdWylaZinhG31vAVNh76C6vlm9zyBFt_DxqapNuC4ZJ8SCwYP0RJalKRvMcGoyV4ugPoXSuHPtybkg-qZPPbzgj9K9jEcvmpaXdoYQyfQwP2sZwNq0iGaUlcs9wOX1oPxHDizXiuW-qM5YmlM", width: 1200, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113687857528047255630\">Daloy.Ph at Localidad Shop, Station X, Boracay</a>"] },
            { photoReference: "AWCwydiFz_unuOaCdu3TLEmntcPVOb5Jz9lJ589SiuHnm8113S1-Whltx9vrnWZvyPWKkqga7gjWyZ43CHwp-AGU53Xzoc1OHy0x3hWPoZKL4NeOAwPp2ZA3b5XaLo7ewI-DFYoFCodOP5DlQr-AxBVBLOO-CJBxOq3YI4qzrmygbgKbArlplWAAgL7RFfPLg5Wq6czTIs899KDbDBrz95J3G5wqIXQaAc84OC1IKfOo4e7ZUNuEuL8E3Lj6vkbz7Rg9RDN208cN6UJQXCzXLzD_GVZCr1XyEvTLpsGZwgLZtmS31fdJ7TUuuEu2RgC0pGTz-f2b9Paf7l_I9umMrDyNGQZJ91jOtWutQX0X7xY7v6qOYNsqHJFhwig2rrD-rZUzmzp9m4PdKo6VBuBvWLRnmNtEctbqi9gU2lI_ZFxvad6MDwio3H-L4KYGVRmkrz6o", width: 1200, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113687857528047255630\">Daloy.Ph at Localidad Shop, Station X, Boracay</a>"] },
            { photoReference: "AWCwydigNugf3VSkwoilLKt5d7rm9dykBdXeBgoei-4-RQql_1JsTcG-pugP37NdiXvCBj4TKlJ8ZGua9nvYplRjzAAnoXzALKI6EJuGzvDTeNnMS-co9LvC-xKe4agFg95Q7IjIdiRL2dJ3qIEwdb02d-inyixbZZC-KQwMHiLPJvztQiX_-XadkkQ7PraSEmemw1S_tdbx6d529AjjFF062ZsfcSBwVmbBg9Ya5heRxBnR09bdmptPcyg0lM06qFVqolH1e15PNvdIFG9kCO0u9J9zqBZBCbgAKetTkNOasrR098MwcDpPxf5A-vMprH66FiKAlAXWoG21xr28S5s5LlpfOJAtSRV5IJdmeUyddO5HcpVr0ZRXMMzuWQTpjzHtTPTws3cVMG9cM9x3iqC8ax67F17fuoKpRsKm5VFSSV49hH5UrMIFxUjfEp7gjORn", width: 1200, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113687857528047255630\">Daloy.Ph at Localidad Shop, Station X, Boracay</a>"] }
        ],
        summary: "품질 좋은 지역 수공예품과 특별한 선물을 만날 수 있는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["현지 제작 공예품", "독특한 디자인의 엽서", "트볼리 황동 팔찌"],
        tips: ["짐 공간을 넉넉히 준비하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 7:00; 화요일: 오전 10:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8454040543055505063", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%AC%EB%A1%9C%EC%9D%B4.%ED%94%BC+%EC%95%B3+%EB%A1%9C%EC%BB%AC%EB%A6%AC%EB%8B%A4%EB%93%9C+%EC%88%8D+%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
