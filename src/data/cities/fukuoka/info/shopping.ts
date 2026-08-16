import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "캐널시티 하카타": {
        photos: ["/images/fukuoka/info/shopping/canal-city-hakata-fukuoka.jpg"],
        placeId: "ChIJYcOBiZWRQTUR0Rl0ehe67eA",
        placePhotos: [
            { photoReference: "AWCwydhrSqsTyYPHjIYU00ahjjBF5afko_LhM8tLsyV0Otffy0pMw0SKBpU2WCUMq7QxdIHTBOlcyt60yx0ouwAD6vpCTOt6TgtbN8K4aKyFzKXFmufQP0NT8b9mf3_kT_wYKz0EIPyyx3KZ-1ZfxIWPhvisMlJSyL66jZ6JwlOE-En6UhUlldy2MDd-adFKHgs20nARwielN6gJqQlvRZ9a0x79ykqh_MlmYwP7he4sVnU6mI-lmB57-u_c7URN_HwUrqnsut7d8yxHiOW5cKVkOpj-NV1J8Siof-xHM8A9sPGlpldIAw8-2XJTEs-suYPLYAiE7GJd1sLyoa4VVDNMpG2RK7UTo4UFT0C3AUTysKJPyCgADihze0NTFQdm20XIOOOPXrdZrXNWSAT9XX--b-l_20g8ErhK-tbKTKcuYaO2rw", width: 1540, height: 866, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116926727284279930196\">キャナルシティ博多</a>"] },
            { photoReference: "AWCwydj0WkPUSXCiNbJXWdp_2QirUa8qtRC_suqUUGV_S1P3CehWLQz6t0zsdPzXIrJZe19uA8vDAiCSeNcDm2fjV-zLfVvp7vB16EffUdOUkgXsAfzBmgdvRJsNvMIXocspSYR2Sxd2rL4RlYfY39LNxuyrjRC1hdgT1DLvbk_sihuXgSgMDL4G4AY2_nssvH-4ImhuoC6ws5RykmST-9mtkhoMmmOPMIcKegXIjE9X6BL33YTb7h1PjBqYS7Y2-kclEUP949zhpSAN0Rlk-_Nr7h50Yu3jrsUquGzZszImF7bbNBBnmtJrkoMJbWzxIIqFcjBjqA8t0U-nM2jILQyoVumhwqtHa3qkhd3eMd8Oc7CSRpIon6-M9UCN8uSo3IXlAWVV16TvVtL-fcoC2JgB2LH-p_wi1k6_03xa926KXCy1ih0QO_oClN43Veh1_A", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102922959593574827877\">Gosa Lee</a>"] },
            { photoReference: "AWCwydgvtRB3h20baFXU_q1jvWWXyBp41EYdSergD3zoDQYMkw-LYZsNWXQJY2bfwLSgr9RexC6LaK9Nefha64L-XS-vHvse6L908RJ0E0l_HjWZ8tWkeBkE3VmpuEsmpfOGRz9Zoo_ve-kdM2RsS0JWOMNyGN6_21h2H1wapWs5JjmxhiItGuwnEjk4eG1LY5xl1OGv_NcPj3A4dW5JZNTfqw4-STd6hWAR0JY3MZBBlKKwv7FUgI8irnTw3XYN4BTgfVrPnusYkt-L99H8bSfsneGnMq0gKGKddPEvUF2GDaQ0OCJu7eXBhvN6g9g2Un0ySdcBlRyK2N3SKjTOSeQ_GjI70HddgDuoDTEiWFDkBto4a7fnz6BJX6dppQ2Vrx8ImTc_gGVCavYZKW0nFbhhrTb25J7xDZaORHI5ZlRKcI4", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113827568209532936828\">穂苅万博</a>"] },
            { photoReference: "AWCwydi7HdHuWqZf3W6sJPETE4Gt5_Mdnbl1Fe0ZcOlFj5GWTCyTfSk2rUdGKf2PcfK7EEq-mKSFWOJS-9k8crwaQZb4ZuOQ1feKgxQa07-cNiBj1a2cBl2EgGNTo4yHK2yrA3J6pFXaPhg-voTI_sEio1N3zC2YowAfHrpdILVME9WrwSGC6jxe_e1agfvrg2gyh4LykMWVFni62rNkeuSPNrL6IhhqSIB1xisSmcDUcHdwb3qV16G3dzxey9aOGiYX6Vq2hPl04O7mI0_G98M9k5oKkiXtso0siEBtpFSsrOZ1QvW1ucX_4Z4AhiCuur9M3NSpLseuZEXJ-ox8Z29ABfVZCGdfI4G8U92GaX5gUGc2W8ECoQnFAWkiR5etWLhAAegtW0VxC0GUtJhxwKP29pBk3t0PVzhuGRcfLL4HIZ9H6A", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106238818749614884099\">Jason King</a>"] },
            { photoReference: "AWCwydjaP1sOS5CIqI8KEDI6r-_qIjjilz9ulBTu7cFLGJUBb3sAQBpxIXdTiMGl2rXNbM0dLTBFsseS11AvR_MTLvS8KEmNLOyUiKBX3jdk7XSVaDjPirDnjiFNMqJDFP7D3d0eB8Ixl78NfRG576-Th7bhi36zmeqr0S4cFMXulodcg7eALL5hGJ1vljnPjmTSj2n_RPQxJttj4lEVTAi-2dwGlmMkO2Zda7FsnAyaD1q5siRhg_Pve8VfbypnzPpSSLR9PbChd6uYElWlK89RwZ7yBnOA0Lb9CJhyOhy0XC62RcGRRD-EX_77jW8LLn-A8pozA8SQ5H6kjEMB5c7j1QTN-hm3YMJ6L6ORaT2VqySKrvUFTontVlMR1ztRyVpM9wFG9rD692WM_5OfulqH3ymS8GHIw2VVDN71CYo5AzAcjco", width: 4618, height: 3464, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107502088854105853760\">29ジャガ Moimoi</a>"] }
        ],
        summary: "캐널시티 하카타 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쇼핑, 라멘스타디움, 분수쇼", "평점 4.2", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://canalcity.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16207815243977726417", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BA%90%EB%84%90%EC%8B%9C%ED%8B%B0+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "JR 하카타시티": {
        photos: ["/images/fukuoka/info/shopping/jr-hakata-city-fukuoka.jpg"],
        placeId: "ChIJBVmI6seRQTUR9OtcJluKGVY",
        placePhotos: [
            { photoReference: "AWCwydgdz_ATu4ZJwutfqO94b2CC0gWK35_zR9HzWW_24JuTmFZGqdeWWlDiZs46OA02rWJFEEpuA-YqtogWmvTqOnJ46qIvtzDjGG2E4DrdZzJjHyOGiIvQHY3Aams-U1cQHLAgOlspESE7j-uZyXwnSxnz6vyvwI91pmAjNOhMNvtqj31Z21tI5kzstwxofYJmmh60J3V_7ScAeLs7i9JYwvGrwmYa405XFavAKrN9xY9Vbdg7eNpa2-Snyo8hSFv8NS0b0rnSwDypwS-eH-YvpZXeE9qtqPshvSM95r_FUH_WmPvWcKdy7cCfb9jeAQS-VPcS7fOMKY0C9GZ9cMLrQLn_2rPsxRyewGwa5Ly7PnSEZRRxh1Q2LSrL-D5Ipz55F8kY2Xo2I4MkTed0thz0bXP8gCWupVlbZpmbqMzAOAey6IVHyatzA5GzJ40eqUYC", width: 4800, height: 3395, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104313685456290974969\">todachannel</a>"] },
            { photoReference: "AWCwydhWBCc9NL7lVfT9_o3glmWcg3r6Y9hS4qngfDpSGROACvVHA6gUabEcmcg2WsnoilewGrqcWXLtRq7BwtUJ2gKNlP0wxcL82-rB5fPqIXNMt6wJlFGQO9vbv_z1nx6zqMPKms87XxTyVEo03IrNYCyRW-sa5XgubeMEstFGMP0IPJRKDTVw0xwaNvvW87o0j2rNR0WvxIOH7B8_WBaEaFdLDZBvtqQIYLXVSzxxQZIdu6t37VAWNHed06Oslt-wNrFkPMAS67oXs3c4nHIHPeSHb_nXsduVSe-IYJzVYUo-TpOnAqLswU_Ugmh2zGMN7vBJDDzSULGMxAzIf_xTggjDEjHJrIi5BmD1SC1-vAQAdIvdTBlq83CWWR73hOOUOUn65aBLKjShEXWAmPp1hI_fRx2S3kqIRVKz5A3UTOn4cA", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106178089214298873991\">Dorothy Tan</a>"] },
            { photoReference: "AWCwydhw7jqbk47Py2eCqHYm9o0WwVIRkqxhIpn_zlhxUHf-uTVtkdNqhc2amc4r6204cViNz_5bk1Y41usLUTDW9Bu9R_hmQpx4ZYfnyIuuiUxdWkEuKjXTf-JM-ubPHG1Vdg03Z6giZMB027F8Kqe52l_GMaxxxRJAH60z30nJtYXSf62_Oli9M15ishVhGULxEv_7AbNvS1jA4-_wO742oZCQpFroZPuoLEh9Y0V_tKpGEm1ONxGJsH0YdFzXDGuDHPHeh9MFEhFHN2ELFB8m6Y3eiV4UH_Hxpo-oAPk2nnWzUT8yzZh5plXnbqM8huYKpD8Pkymk-roWWGWK_2IhPAK4Sp2fUb_JndGgkEzPUVAaC-lE_Py6HgFs-JWWkCbWs7TDajdWujkEBqJ0PUQX2C60eITRQE2kxSBiH7cM_TeBYA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116326189837181304007\">ごえいかんたろう</a>"] },
            { photoReference: "AWCwydj9n9E8-i7sL4RR4gk17wlAvvhV7KE3BPO39r-QoqpnUySkSd1NAbNb1mBf9PMDk16qwulxSyMhChLvoUFCUQrWBq4z89yskHtbZaCiAcBW6v0lsCOEpA_aAfsw52yRLZvfDeec9a-xEYJ-2FzT3YJRzADCGY5HDjtwmzrp1j-g0_hwGTEvz3tC5grxTVt0-mp1GtTQfp7i-1AftJKfj2nP5t6NwmSsk70m1oHcpdqjFDROUXnfUZDCttoG33x9BMCzPQSQAbMGjIlDF_uBKfsjDNpCLDIqNF9vq6OfrV7jbQUWnXM8BwjVCqWrhY7B4HpJwrHyxR2LrfgPJ2HXDv4WtAnRcRt-5pG1m4Q0yGSfzuqQ3n2qvSzlEI3eBe3xCarf9uVSRIIb1JfiuY0c2rASHMHFO8H2t5DVE9uySLTMfw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118077639290626778122\">ぴ</a>"] },
            { photoReference: "AWCwydgY_eOaStpJBIuElTO36ZnKJHOOa0RoQLXzPin8nujXvETjEIU6sCK4p9hurmHv-7tAKaDOdrn_8dMDWeUJE6HtCJlwZBANEE0gC77UhqMfm8_d2po8zSXU5LKivmwVQjUDKfIC3JuaSiXmbuGX2n0lwaq2ROFedAiyLfCryMwwhk8EnYHCZi8lQpNj3JCKk31D_5ze30KblL9B9KuuAEP5sMu33bCOgH0xbZDesOyekI6r7iACWF8JI8eN9ajHiKrSWimRCP9qyudvp1c9DVORIZOxJkiLvVqbgi8tf_t81bU4hdlygBh37YGBVZjjaC6taqkuaTzcE-TqbldyueNXYJronm5tiyQVlnIgZTDAbqjPyL0aDGJ0S3VKxzz35hYEXo-ExmDDcFM0uOGyYg1LFWMGOM35wq22vrzOtSoYMYg-", width: 4800, height: 3614, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101628839876084342908\">肉丸</a>"] }
        ],
        summary: "JR 하카타 에키마에 광장 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["아뮤플라자, 도큐핸즈, 식당가", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.jrhakatacity.com/communicationspace/eventspace/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12790490125066672287", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=JR+%ED%95%98%EC%B9%B4%ED%83%80%EC%8B%9C%ED%8B%B0+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아뮤플라자 하카타": {
        photos: ["/images/fukuoka/info/shopping/amu-plaza-hakata-fukuoka.jpg"],
        placeId: "ChIJBVmI6seRQTUR9OtcJluKGVY",
        placePhotos: [
            { photoReference: "AWCwydgdz_ATu4ZJwutfqO94b2CC0gWK35_zR9HzWW_24JuTmFZGqdeWWlDiZs46OA02rWJFEEpuA-YqtogWmvTqOnJ46qIvtzDjGG2E4DrdZzJjHyOGiIvQHY3Aams-U1cQHLAgOlspESE7j-uZyXwnSxnz6vyvwI91pmAjNOhMNvtqj31Z21tI5kzstwxofYJmmh60J3V_7ScAeLs7i9JYwvGrwmYa405XFavAKrN9xY9Vbdg7eNpa2-Snyo8hSFv8NS0b0rnSwDypwS-eH-YvpZXeE9qtqPshvSM95r_FUH_WmPvWcKdy7cCfb9jeAQS-VPcS7fOMKY0C9GZ9cMLrQLn_2rPsxRyewGwa5Ly7PnSEZRRxh1Q2LSrL-D5Ipz55F8kY2Xo2I4MkTed0thz0bXP8gCWupVlbZpmbqMzAOAey6IVHyatzA5GzJ40eqUYC", width: 4800, height: 3395, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104313685456290974969\">todachannel</a>"] },
            { photoReference: "AWCwydhWBCc9NL7lVfT9_o3glmWcg3r6Y9hS4qngfDpSGROACvVHA6gUabEcmcg2WsnoilewGrqcWXLtRq7BwtUJ2gKNlP0wxcL82-rB5fPqIXNMt6wJlFGQO9vbv_z1nx6zqMPKms87XxTyVEo03IrNYCyRW-sa5XgubeMEstFGMP0IPJRKDTVw0xwaNvvW87o0j2rNR0WvxIOH7B8_WBaEaFdLDZBvtqQIYLXVSzxxQZIdu6t37VAWNHed06Oslt-wNrFkPMAS67oXs3c4nHIHPeSHb_nXsduVSe-IYJzVYUo-TpOnAqLswU_Ugmh2zGMN7vBJDDzSULGMxAzIf_xTggjDEjHJrIi5BmD1SC1-vAQAdIvdTBlq83CWWR73hOOUOUn65aBLKjShEXWAmPp1hI_fRx2S3kqIRVKz5A3UTOn4cA", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106178089214298873991\">Dorothy Tan</a>"] },
            { photoReference: "AWCwydhw7jqbk47Py2eCqHYm9o0WwVIRkqxhIpn_zlhxUHf-uTVtkdNqhc2amc4r6204cViNz_5bk1Y41usLUTDW9Bu9R_hmQpx4ZYfnyIuuiUxdWkEuKjXTf-JM-ubPHG1Vdg03Z6giZMB027F8Kqe52l_GMaxxxRJAH60z30nJtYXSf62_Oli9M15ishVhGULxEv_7AbNvS1jA4-_wO742oZCQpFroZPuoLEh9Y0V_tKpGEm1ONxGJsH0YdFzXDGuDHPHeh9MFEhFHN2ELFB8m6Y3eiV4UH_Hxpo-oAPk2nnWzUT8yzZh5plXnbqM8huYKpD8Pkymk-roWWGWK_2IhPAK4Sp2fUb_JndGgkEzPUVAaC-lE_Py6HgFs-JWWkCbWs7TDajdWujkEBqJ0PUQX2C60eITRQE2kxSBiH7cM_TeBYA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116326189837181304007\">ごえいかんたろう</a>"] },
            { photoReference: "AWCwydj9n9E8-i7sL4RR4gk17wlAvvhV7KE3BPO39r-QoqpnUySkSd1NAbNb1mBf9PMDk16qwulxSyMhChLvoUFCUQrWBq4z89yskHtbZaCiAcBW6v0lsCOEpA_aAfsw52yRLZvfDeec9a-xEYJ-2FzT3YJRzADCGY5HDjtwmzrp1j-g0_hwGTEvz3tC5grxTVt0-mp1GtTQfp7i-1AftJKfj2nP5t6NwmSsk70m1oHcpdqjFDROUXnfUZDCttoG33x9BMCzPQSQAbMGjIlDF_uBKfsjDNpCLDIqNF9vq6OfrV7jbQUWnXM8BwjVCqWrhY7B4HpJwrHyxR2LrfgPJ2HXDv4WtAnRcRt-5pG1m4Q0yGSfzuqQ3n2qvSzlEI3eBe3xCarf9uVSRIIb1JfiuY0c2rASHMHFO8H2t5DVE9uySLTMfw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118077639290626778122\">ぴ</a>"] },
            { photoReference: "AWCwydgY_eOaStpJBIuElTO36ZnKJHOOa0RoQLXzPin8nujXvETjEIU6sCK4p9hurmHv-7tAKaDOdrn_8dMDWeUJE6HtCJlwZBANEE0gC77UhqMfm8_d2po8zSXU5LKivmwVQjUDKfIC3JuaSiXmbuGX2n0lwaq2ROFedAiyLfCryMwwhk8EnYHCZi8lQpNj3JCKk31D_5ze30KblL9B9KuuAEP5sMu33bCOgH0xbZDesOyekI6r7iACWF8JI8eN9ajHiKrSWimRCP9qyudvp1c9DVORIZOxJkiLvVqbgi8tf_t81bU4hdlygBh37YGBVZjjaC6taqkuaTzcE-TqbldyueNXYJronm5tiyQVlnIgZTDAbqjPyL0aDGJ0S3VKxzz35hYEXo-ExmDDcFM0uOGyYg1LFWMGOM35wq22vrzOtSoYMYg-", width: 4800, height: 3614, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101628839876084342908\">肉丸</a>"] }
        ],
        summary: "아뮤플라자 하카타 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 잡화, 식당가", "평점 4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.jrhakatacity.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6204142085769849844", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%AE%A4%ED%94%8C%EB%9D%BC%EC%9E%90+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하카타 한큐": {
        photos: ["/images/fukuoka/info/shopping/hakata-hankyu-fukuoka.jpg"],
        placeId: "ChIJBVmI6seRQTUR7ISYanGmR8o",
        placePhotos: [
            { photoReference: "AWCwydjOnlkSABuh24E92JXW5YHX-Ia5gIIJhn0j0HCGu6V05y-MMw-mpJdx5kEauoQhnUs1zUDQLEnBtdQ7IiUcKUpTtsBF-3BUv9UcsaZrJLhGdaBTqBpVMbWMoc-YLjjIrPxmk4sxUA5vEdhqN54eiMbK8wvQCqwWo2IYdUsNW0Pwb3CEoyuaipnDAWROWPZ234c2Crt-fuDtMFAlvDgkfKcIKRhrro435iy04DWSmhrUbMGOifaXeiaQT5J1t8_KPWO9i3jAn92tNxC1l6n3zBQyTOUUP36U7oVOWtINGVB5atgnMywQJZ0R-O2j2l-BpM84uPJQiKY1LEHT-74hn0THLQLL_qzblVMP6OaOm2Ou-ys461jBBLcN6p2fItv-loMKCu-9NKBOHH3EHn81OYTWRLA-aSVRQlwlzkRyPxkj1_08", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112146787533742329193\">博多阪急</a>"] },
            { photoReference: "AWCwydjbDFf_ePdH3Nshj1lOQluQcELdm6ynjOlHESAwcATEVztOrIumDGLRQG_YiJK4s1e1LowPI6P00iBZC_YDf3xxmdCcAqtQaGWfLzIWLvkn90CMjX7j-hTnfPcBnC8AvS1V-wgj6yrlDSJoIqSXy1tR7tf1xqTgHvsjWQIQWzzbdnGS11WFGMvn1vNrRh87DwGgdmBx-oR0iaLTNvD6gCXxJ3Vnd8nBjynbxJmTv4VdgQSBIn7BiHD6qvOVRw6cq_xnpaLSUZnUEq99iyHJ9a0DZx3kaGqYaqlXMqHCXadhlO-br5vAL1UGtjTGnoeEx1-ANTXjNQrZyunO8xFecNv7n45laleI6hZvJm8HZzSeEiNCuzM5Ese1f1qEq9s4ge9dw5aNJ7Pq8nDLdCU6vEiCh9NXoaqnZ04VrAurvz6aAk_2", width: 4160, height: 2080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102085647158804507443\">Rod Wong</a>"] },
            { photoReference: "AWCwydibyJpoGfhcBF7CIGTGjPJUNKuhMlgx716U8yz8b9-jR04JrvdWN805urjf1x_sSDQLJoVlmHbvJvN105Re3gd7KaT7gdbYka5D7R432bTJM4obULMZXFpfXXjxOsUDGRMtNylo-arsYEm4TcCFmLsMyUIeHt1G3vW4m8ZONGSf8kWT3wxcYAgLDorj5EBEASsBiBGbFGKrUe2weej-ncRXFcHGgZHfZt2uSUgNv4ruFhftbIIWiT5peSGy330WRecAqJHOtnrz_vmqWI-W1KtlXirdvPjYz8XC76We5zbt0rBuO4cNmehqLEJOqErE_XlVBtWUAOmZbdSaDbGJIT32Uo2CNWo1O8mrGy5-XBzNYWNpSP6ept1EL2XkhxCrQ9stp3y_fOmSrGvs_O_sMLCCzzeZJVVkHtUlRKecuB-pwA", width: 2160, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115067081379059891503\">グルメ旅</a>"] },
            { photoReference: "AWCwydipYMQLAlTmLpUk3gFnVqTtXL1stG5H93J332nvkZGHEltptPT8kue1Pc4xatqP8-I3K4fHlalpD0I-xhoR1goL0BArU_0Dl_lhK4PqNE7eqpUz6u-PkGrmYthy9digb0E3SVdvArhlB7SHc5n4ft5yYryrONEibMoCNXe422qDsMYUoXJk6M_NPN3ZQpWo0o-442gztXvpwCCxbbFSCzBVidsc978O-kEf7lgkRDNty9-1ByKd9puDHcMSPAzmT67Tkai1_QtOviNyxvxxfLLt9-yYIXtHIpWU0OE5za4Hoj61YIzU227kboFNzLehni-UMsTWlUMVq_pr2OEqpjw3kN8OBLVNsExdzgMgpKV7__Hr306jbi1Bhh_h8j4j5Gw0y7ePJ3ouvvkYcVAX6ZbuuiYZil4jYGRHhhnAduM", width: 1108, height: 1478, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101312484425649658137\">BIG BANG (권지용)</a>"] },
            { photoReference: "AWCwydgXYCmNk3uWT73s0up82EP8QkD6hvKDTZbZTZRYKZdD26eltcYiFhhNMYWp60XO8FHwItcE5FtbIg-B9oPo6WgIK4FFNfH_WQuIGX9Gd76C8skLVAsHvjMVKdS9sVzoMJB6Fm0ghpQ93zDJBOZJm-MFj82L0Fci-NrDmjWRPAPwlC1pR3FTLWGidDJgF9x0jnZXIJs0mdY-ClLgTf9mZd1xsLEG5wkwdtbGx8HD_qgwTD2TZOAVezqKTzz3AHfTkM_Pw6lgbopXrycp7I19pfVmzOR-MFA011FzyTNLDzJ_HyFCUwi8mxQcNDLeRhh_wu9xEtoBtEuXe075MNvnKLVs9vRVjxvBuqf8N42zpRLAvYq1zZ1xzYwvMH_qzLeszjBTn54fcwZGqplr5-JjzAeFokyaNethtAMYkARLNiVVWw", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116600165871138050689\">Masaaki Kouno</a>"] }
        ],
        summary: "한큐 하카타 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["명품, 디저트, 식품관", "평점 4.1", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hankyu-dept.co.jp/hakata/?utm_source=hakatagooglemap&utm_medium=storemedia", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14575801725057795308", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%B9%B4%ED%83%80+%ED%95%9C%ED%81%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "KITTE 하카타": {
        photos: ["/images/fukuoka/info/shopping/kitte-hakata-fukuoka.jpg"],
        placeId: "ChIJq6pqbriRQTUReE_oqoFCe4g",
        placePhotos: [
            { photoReference: "AWCwydisyqZBwHwrDnJq5d_PVrQKS1VzceID66aBySsCnyBVII0VF5uW0Z3SPMuqXivw6IMxg88qmdrNr6iL2X92KXfHT9kJYmG6rK_WmljNFSfLzbvqP6c9l5vsPM-a-sR7VmmkwTFtEVv0ZwMRof8j2OAm2WpLvLX7xCrmpfe3A0MCkL48-T3ZY3U6okmoRixI_gxWRjnsqsqGTBA6-dzPUIIO58KAC1SdiyGLq8EAdkYAkQRlBdOOj3tx48fkI0icrsWCio3oyteUrZJXlqeVr-eARXO02JMc-zR74uP1KGasmJEqUU0y2u4WZTlX3w0lXt8WQPCmIWY7_u7Lrtrg6X3n7ZCqYV_-D4gJlg4xpYBPZRGMh1gQxaQ29Z-xsyCxS80-8yymGMtNxtctLr7Yi-m43sffpuZTy_vOdfCVTzKiszmciamh76tKYu-TmN6f", width: 800, height: 533, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117749986496294762361\">ＫＩＴＴＥ博多</a>"] },
            { photoReference: "AWCwydhw7BFagZZqOYYF-hLmGi5P8C3Nd_WfaGL0BgfYj_NyhiPwvnDLmrS3DzUuIo8Q_9oy8bSDxmu5Oj1A1Z9NBZsJGUbFoTX3u1JDtbhOuyHuu-JFhgZRQicWG66ncc5XYuEjRP6PjM2oNt4QJAQ-CHIW4eTqfY6aq3ah9BB2XRJdamstzyj4imBPpITZlaNCPu37OaFgSoQyHggU9q7Jv1dZfYbbfZJQXI8FTt86Xike1IH6YLRyDqT30vmWHOJHE0x_CQal86y3JBvPyPyt0F54h0RutXoaZ-JA8awfZjykhXy3UfgnBzqGHc2KINY2GGaoTLjIsyprKfdDt-BqLxyUjixik0TE3scgvbuxL8aabC5yq58iERf3dn26zIiLdv4mqJ_ic5G4vywxgcR-rbtbXjU5_FAl4mkrd1J42OA", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104630868193757871076\">陳 廣林</a>"] },
            { photoReference: "AWCwydi7oYRGcq83RXYa2ANSACFhic5FWOj36fwE0gqMH__pZoA0AXXqP3MnlAfP0segA6Odo-oaP7hCHLEGSX2ECnQ8YwWyAZ7aYCG4hu45Bh3jwMTjRppZFEEcVTQ6zGkuysn6Wm90hebKMn9jfoSpbwINhbml5igNbXVEVA3ZKctj8zgxAFdlVfzVXiSQF7WtmUEsM5B3fEWjXo2bx3ebPrTi2t9QT4hZhxvXXBOHJSikHfSjzViKiP-rDmd8D2kcisrvdkECOXNNyftlUy_l-K-aBmL28NjASlETK34Fa5--ZQ7A6-qPMctRecylhM79aSDVXwJDxRT9_mAwJ-f4VG8LuL-VkDrxp2KQ4T0Oa3RHsnQvu2TLmiXKHG3HtIM7r63pGZOHTnaH5Hhda6DPjFw1jpVBmKdX5qS_gQoICZdBPh89", width: 2048, height: 1152, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117930930619428717107\">佐々木淳</a>"] },
            { photoReference: "AWCwydiy5MA-MePJNY2fUtIwhQUkOUsooemfbQMBJyKSyIlUcT32FvPrQSH34YAR0-dY5aNn5I0EcGjTXDGWJZg7UVklJadN46pv5pnvdeIWbxttm4N0MxsJKhS6BRDokXZrMIl7vOJm74dxFCmZpGgijG83g9QT7kb0ZtAlGRvks4d_qSlxNXRli4KmJEZtCAQXvK5wNSXnJi0idLeQrUzTHu0oAJpiUsOh8I_XXTmtyuU5xBwfTPrp79gFrkAstT7ZVMtbNzXWRFGELz8_BoLgRm4HYQ6Bvt4Ko8p0sMPbTB_7J9Yc_03pgPZFvUmQ6tapKZTpCsxaGcj4biOMunx5Ttp14ZIRjF3Rq-D6mYP2BwZHx4OKicfvnKXcOre0I6kzgKVlEIw6YVGDWdn_rNuqaHbHJdhf_UaLwvDT4fhTi0knHw", width: 4640, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114061793324729533578\">Ann L</a>"] },
            { photoReference: "AWCwydg_LbhaclD1rhbpbo-ULIFaZcyNdAMAdM-kanODWaBVZaLdteaKTUcm-nZTROAgAaOKbzNd9k7jhh3PUZHqHaEXIwVdzq35-Y9ArpK69O3hwbcTzGPyfKtiU_k6xcMu8eeoQ71vnzYuQg72KRU8XiFB8sf9PYtdpE1eQ1Jo0L7pZS6fqZuokSxzrj3rXQ5czTLX416YiKO95YhC_CAqAWh2G9nfIhXyEoWrCsRjqu7RWh1XpEHUthRNkSShaloWm6ZOh-7ZdoJoAjJm8h9iNqHSIFiLt1hd0jKRUvv7NNsqYAvhE_j71SRYGDQnEzo4Km6LOQIgOwGZfcsBBbgmxfON7Xz2k2FnvUxKi0mX_Y5jq4wMmV3eEWFvLc5fkduNHLjobFtFu8XzXiSqekZAtDpG2BXphhrJIlzzFkeJl6SPcQWdpUitNoMwVghn5mAZ", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103606069650797656842\">李叡欣</a>"] }
        ],
        summary: "킷테 하카타 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["식당가, 잡화, 역 접근", "평점 4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오전 12:00; 화요일: 오전 7:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hakata.jp-kitte.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9834527335979175800", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=KITTE+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "텐진 지하상가": {
        photos: ["/images/fukuoka/info/shopping/tenjin-underground-mall-fukuoka.jpg"],
        placeId: "ChIJ970Xo46RQTURm6GUmUJcn6Y",
        placePhotos: [
            { photoReference: "AWCwydjYZ3So1GnJFc1tzgeBs-BibQO-fHslyPG2BvSawB7KIipjAD9_4j3_9iuDpn8ArVLbNZBZft9lGu54hh1P7SixLjp8MjzCjOTV9rYc2oaapukZfdfoXM6h5qZ2iKy4R4Q-PzsDRQKPAZwTstW3KsyHgX12XNms3uaQE0Ovlan5TzsAduv_i7_lZsg1mb5hXNhbb484y5elXYwVmSPONeqUlKTTJs8PRrq6y6IM1gCa6L7IOCBdS3BrgZ87R_NvOlWWIh8QsxcF8zZ-7rgQBAr226TQpkejuvfBXXVzlhsBxAWSNkueMkTUAVL3KlgHZ2X_PY27CuXPPEvDqBz4IVgGTGtSr9C9dHS_dFJwq1sAnNIAIGr5sOAHjIQrLh3prdysybeZlndj9nv7dRw6oxMnRUuc8T6s9sVfeImcCxhzcOljuYvTiUHp16yCHw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108157890766741889587\">九紋竜史進</a>"] },
            { photoReference: "AWCwydgj2Q8Fm2SNX9kjB--mPA_TtQSCzDfwS6P-BmMqu5wvP5ommQcmdAxfAEjV74dlxXdkthwme9eRP3TOoCuFJxhZVL1N64255h7lb2wUoK4jMB6VbG_1zSY__AZnkfz9f03YFFRHeZszQ_bz0a_tfnt2E9RQFhF74nnTcHGAa0PDTz_KFKzTLKBVq0CuvHdtegBip304H6215K5laZ3QFm9Vvg6mqu-dbLHpV8CmqHdrgccJsUsTmZZLYdWbFhNZRlxwFES2q4LgxB8dUFe7GkHRRDnojtKyo-q84jfOx81Sb4_9L7Sumc7rP0zB8JQtaOu_kwNVAJGi7M0ShP6h950maoNjXmsoUCFdBvgPOuK94LpJftzjBXFHA_p9G9oioaikxpUwYiSrZl-bxORulPBF4eAhPuwo7mdR0hM6tTPVjPVlbxrFkmP2Y-Vn-V2Q", width: 833, height: 581, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108981929756540362843\">天神地下街</a>"] },
            { photoReference: "AWCwydjQII8ia1s30_atlE3dyqridv6Q2MmS9zMr2AML_WfmaDdm0CDWtimZWR56rLNIBade0pWx-xNnUQuyNUCM4F9B1DERkX4NsBr9g1TNZY0z7ycdDYDAhCzsg4672f0D9GcE8WOdiFqa8VU1Vqq0CjDLe0fi9eYMPS7G2NiwX4h4aB_nqnrzSmndOZNQPAJ5Q-pFMGmFF4R_FZDmSK2sUryB8xM9BbOr5lW8dy8Q2Dp_Jcdu5TUNKjGcH1Sbgxrn5UYFnPHketPmtY5ih0raUUlXHrwL05_hNfTssw9xh2jWSuLBuEGKiMlYJBCtC3QlX4VZH9Z8S_1Fl9hHl9DoeeUFkJHYjTssyTxlGby1BrDFUNbVvkFxwwoFTZAHdNNrFwg9dYOtSVLZ0YGsUNZFppZMsg1xlCNg207m1qrMucyarANH11dAJJFD1E6XbBjD", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102848191641057661231\">Richie Hung</a>"] },
            { photoReference: "AWCwydilQ7ue7xNscsjJZRS9-59y1lcynXdVNHECl-4EudRmvHXaRE-hTaWVxUTzXAT6laCvv6qkG7Kj464Q3e-PSfpNYtiY4-dbotPixcf_d_3K0I8Qt4CQ80CgR-7W2BHUye5yi1w1HWEVvzV90QKVv4DC4iFL281bkHhjS9KOY9Cr4Zy6HdDlusj_RQWGeVtkiJxzfdmHfKzhj0cS0plXqwnCCdOSyOc9nNiJp-cGYJYD5MaLkTf2nVmu9MWQYl-b7jjju2EfjCe1ZHHdRRxMjP5tv_zl_JmyUZR7xUeir_ikLExrl-beAovLhSAaQpJT8CVlcCWzH2l4NXxkICIzc286PqRSA31nNzKJEWeuEMs5DCWIu0IRrB8RrACQR3AA26-HU3osACeN7OAPeRDcpGoEuz-wCMDbrLcprJBRl7AzbSc", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116230389627899711514\">George Oliver SHAWSHANK</a>"] },
            { photoReference: "AWCwydgaOIR82bzzYYhS0Jg1sWdQln6pHuYdl-6rOUEavupEYaQ4xrk4jKzHqKRm5xWm79O9urghtz9xLIBKEMMElNZmevnY4vohCwFKhUy_e76H9ZIsDJ5lYN4AmBOZpikHPCdvcarZSKcYkMutoHnv6ENtTuQyz9NtZxMqtoRBMdA_KLKW1S7LWq40E-DhB06gxh1NF1PgmvZsnpYe4BlW-pd3gSUh2pTulYrZ1PkJp8FS_XrA1gO_UX1acmG-dpVccyRLePKAslYmt8G5xzw0u7vv7qqi1HDCQiWVwKA-xahTsm_1InY1oHAtU7L2RXyxm4bK_rHrAVL6rN3vhujYbCwF8j3HTqOvhg5QBJLaV2VvB_bZOJK3fYKU4N3sA51UwbBVN9LtrXxyN6I99OjBQ551li3sIxoiw4dp4rn36nKV9Fs", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104347652810556643310\">Dasey Hsu</a>"] }
        ],
        summary: "텐진 지하상가 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 카페, 비 오는 날 동선", "평점 4.1", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.tenchika.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12006416572707283355", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%85%90%EC%A7%84+%EC%A7%80%ED%95%98%EC%83%81%EA%B0%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "솔라리아 플라자": {
        photos: ["/images/fukuoka/info/shopping/solaria-plaza-fukuoka.jpg"],
        placeId: "ChIJkTl0ho-RQTUR71VA2jf-iSk",
        placePhotos: [
            { photoReference: "AWCwydhWrDyg-2Q2gbrPA-sSH8iNqcBhuRJlq0jEQY7albcEBzPF54hTkBbbfxNHWySRQJHkMMY0CI44ccavFx-0rOJGli15VaQ1WqvKuC-yoFHXo6V_JlaKRWHix2glkwUCLFcKXSonq7earpHgLqhQY8fkYActNj0_b7GmRk8u0oGWW_1__J32lSZg4baGf97nlnm8T5z7iYgyssEUmvSMo3Nq8G-PIfTSG_ODnhETtDARILxVr3gX0WkJFGXA8f3ER3ea2-lU1HJ26gZRiiPxTvidnh0c6BT8HTuNS_ps0LVPDZd5hetUJXQq1PH5MCMXIq8s068zeXWRCDknnDFtZQU9-ewt4nFsxC4cS0p3haysbQw2CAY9BqnMppfZxyw8G1aZfl6Jn2sZqX98BDky3iY2M2QFBuWh437bZ3v6a-uEMA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103945840432086732546\">外部記憶装置</a>"] },
            { photoReference: "AWCwydh9YPtK2WBVuQDstGtO-Q3zwUM-qZ7XlWXdcRGzyLw9DDgzw6lm-mS6m64wWVL9biAIYQsAuETQhQhhTXPP3NtJrGP1Ckh5EN1oWHnbaOawfWqiB_nThLdZAXr_g8gxnaoLGlrwzg8obXtT7JFH71ZVBzmBXhOzbnSGArN13B1QA7V8MJFR1CCneG_i7U-olTmD_9mDPV--bMaF1S8ZSkFPel3yTjVjpM_K-fwNa1ycZuOL7tD9g_vntEi9Jz6k3ibmBdFEqluZl7aOtozvlmMlWVYVzQdrhSM7QdVLXhTcqsBKpqr6iqtOYWb3dUEW5D4f8OtYe-P_rDvqHZEaXYpBgrDSy9_LCZQTOHoBmZheU4ruSpJxtEUSYPk1F02eKog41oUrodVbKUZ4-1YWI6tZFE4iZ8ByNbuvFAHV5Kzzsg", width: 2048, height: 1639, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112700207876789953532\">SOLARIA PLAZA(ソラリアプラザ)</a>"] },
            { photoReference: "AWCwydi9I6j-uPirl46gg-D8DmOdDeBzSZ2pVS50cCszTT7uvQ_BqZSdzgVIktv_Aa1OEi9_LoZl76Ex2xnHTVz8K77QOpzCdPORqxLuY9Zt-Qp3LyXTa_3EgnJvS_1SeLuM3PALQ3HNIhNyVCyUZZZbVfM-kNNUwmg5OHhNACBMDGyFJc3iQWXjfr-Vao97ZSE4y-NbXo330PtvtXmL1xanGbWi1DR2LAtZOtlLGH_iUeoiXS7cCet3UfHgtA8GA4ZjtV5Z9JLuYZzNFqFHOZzwBY2STJxt2akirJuo2KTnES42z_pHhfXFqBIDd011zipl0FXPHNnBq65IFveCDAMxZun1ouZ3lMwswHv0s-L4nHOHeB4qso3VoF4g_ustu5buMtM3skvrPNxtDpf6RqYcM-bMpFXWT3fbGqnT9Yt54R5z_-A", width: 2560, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113819429041045629339\">NAMICHANNEL</a>"] },
            { photoReference: "AWCwydhNAtj-acCrtn9lt5g273O_unN1B5NK0b3qFMp0DSxsTNpkWx_-QqqomtLkmbKXt-LZknZ4ReafRvmxejvsAC2AUZIl1UJ4K5wAzkcD4_uHeqq5XPwsRzWYzAtV-qj9okLVv7gyF1X0xayprAnYtdqidL9cRN_6mhoAm_6A1VTmsQ8gvZCgwlJyTJrYTaN4ueQyRTtDSY2SZ0JbOBc-lHRdqKcxGSuVQMi31hHZX3t6tFbU5ov7LnXh-Jp7yorcTFbEu3LbMvBDnLc9WQBmhBdti6V-oBVv0b84PXc1hcIhfT97guQCpEV5oMUfT1yRGeohCVqCx5BG06R7Frg_MDqu5N_32pP8RHMmsriVw6LdZF_E6PQnNfg2uuA-UZpdn1zIVNeOUFm4Csj9HbytuzscOScxbM86kIk3CMz-JHZx5g", width: 3448, height: 4592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106005607777851840686\">Masa Riverside</a>"] },
            { photoReference: "AWCwydjuzwT2zMEww8JryelvO2zxHPkDOaYZ-Rm4jYWrrTvWpDoPbusP2GCbK32o05i71d26ufJY5qSbVXQRyc7VU8iGL_FgOYB7JNwJwHrk_45yjreoCmYpKD6IFTDmm-cZ_alPctWbjCnIHWbIVhL3odkhf619dFuNm1Ex4LnAdMZvjuARIWbnWSAZ7BEQl1YORI6uiDsXEvh2f-FnQlr7KIKl6Gtfh3yZBUCocczZwPwXGRQqrDaJRSOvCA28kNCbE6n1LiySmPcaUF29PS2hfe1nMDGYS7ZVhwjdxxer2XXg9tIGXtXT68HKwBCA8oV6NI2saDXAIgJQK2OFYXMy9cr9V-2Wnmxny3HgVSaxjwyERde31m33wRpRAU5Q9Rod85yzpa1xaBe9l2mxHctReDLf-MSltnqswEBO4qF3fYSc-w", width: 1156, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112700207876789953532\">SOLARIA PLAZA(ソラリアプラザ)</a>"] }
        ],
        summary: "솔라리아 플라자 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 뷰티, 카페", "평점 4.1", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.solariaplaza.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2993202943202711023", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%94%EB%9D%BC%EB%A6%AC%EC%95%84+%ED%94%8C%EB%9D%BC%EC%9E%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "솔라리아 스테이지": {
        photos: ["/images/fukuoka/info/shopping/solaria-stage-fukuoka.jpg"],
        placeId: "ChIJ04qgsI-RQTUR6z2_jyFWEfE",
        placePhotos: [
            { photoReference: "AWCwydi4-yvTCbOTghCwIyBpRh0H8Dt4aWxiJJuhG67G6A1lQ_-sJXL6cMKyl3jhhx7iq7lKrVMFzWLuizrEEDJTIPKcN2dCjLTKEc0-l7s0VGgFQwrMrYv_LC_AsIgFB5Xo9GzSoM5JyNnejbpM_YsA1eoZk7bJwNJ-QmXR1doBVcm_YsdxulyhkHGitP2rWWqbv_vwUy5SDECjVn4U9cRApP2nGvELPmsfCOxMnL8uW1aE9ypBplHSXfl-7zyH9bowKdEPHYYrlzHFT0wZ2T_oKK3ufE4dJGXeM15gz8qyVhkx2750V4vm2gqyQcKKXXKZlC39wCmPLBzvNmq33wCoLj4DMvNB2JfBVj_WcOEWAr2yjNa8nLG1AMjwctr60v_fv0Jc9dBcAK2HqcDNU0WJOCbGl_2XHw7wavtmsJXDXqDBrCU", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100526772021605602731\">ハイパーきらめき</a>"] },
            { photoReference: "AWCwydj-MVuWzcsrPaNrM7EmH9y0EQ53gn-G9seDuv-QBBWOSt13LFSR_l5MKcv-_FHdMGKhxKr5u9XX5e5_zxfSg6PKvQ6JW7Egu8iY7xZCa7fv5ja1c9WPgy9e7TO1n2Dppwtp1c_NPCzNr2OelXXbIOrote3nZwplgT0PpSSwttUilEDAuwGxGoKjA9TQ7LHykLxyxQ9-kGvT5ReJqSS3FDyVGklI5bdvyyNI8DOGtAdkIu7BDV-m9XYNut9sk-zp7TG8vF50d-DGI7STi_4qE4NJzPKnHXQ8vmv-h3psbMFFA8wUecfCol2FbE5X20djkP5w9QiY-7CIlaQYKlzeZtk6xu3m7H1WCF1Y64Bsaf5IhJsm9VkPsIHN-joEcYLduUx89eQFUWlb52fLP6G_aybZ4bRzR7usQ3KRQK7S09lbSw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114253169365989931826\">久野沙絵子</a>"] },
            { photoReference: "AWCwydgmoeYGlF5lnQ-9M-IYekFO9nLE29lst6gEvwXrlLqFEDdFmFSWqBnKFgxBTchOHN0py29iXGG3nOxL6ceotyH9OW5zXMu9X1tzUxnlN5iDfGgpYrbXPWBuVSYCuyxY3566EtmQ2w8vuvei9cmciFBV_x96IlSz7_3SHRNJ81ljhyKfc67_hBXZkBNOEDML1L4OAzQiGZGPeFiGrGGBSDrE6JeKLTmfxaiCSVlIMeBXtMOtrbLTkyDKdXbabK9XR_zDzDPGtvF0wTen47h-1FtofuveEIYdOquzDeCEFJsuiIRHZccQSDD54VjsBEWPFdD1pJClusO0fjG0A8Kcqv8Km3htBNIXVlXvSkP4ljI1u8w0vf-MLC5F-6iEjMPwA6kxuTbsFKuCFEKjPGC8UNh2xT__t7DFzkVVRKN3Cc5PAw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108081525547487965501\">三重野勝</a>"] },
            { photoReference: "AWCwydgvhwvEGGAiP1lfELbMvdx6fObQCcNlVKFGQs4npZqbf18j9dDTSWvOhrze-u5HSLJSII7tBNff6L3kBi21A4exhtAKWtayhEueUgpniKY_XQpIIn7j3-7kt9I3Ckj_5To53R3xNcwJyZfOiVU2fdwg_MutwDMIwmaqZxJFj6VuL5dScljntQGVE3k4XJ_0z8eoKO0y2hB66uLcECTih-2a5brSf2yO033GyQYUXnU5-nlMLiFciZmMW6p_3sGf5G_tJv1sGaN1KQ2u8kzFR5qY7k9dNpCBoSIb4qb6itMrg9b2HsEx0mydNnY5XIb1sR2SLttUvy-KVuVsCdN7F04wa7bmpVb26U7mtoU1vhYrXtas8PtKG6ZYdI0lgmooHf6Ijn_y8qSuMokWc7QMxUlWnGhR-KPIH6P5qkHZtbd92pe1", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101274423589252994228\">白澤直樹</a>"] },
            { photoReference: "AWCwydjyY_SqRFzODly9hL5tgoNdmnYztqpQeU57CNyZRY6X_lw28k_Zefve2BjLHahNEJT-l78gsCRcBnLbgnnh4I3koLPkBOPnp3ZLqoCG8Kh61iNnpMyQLGewLKLNJ2jcHKlX0tZn1bEIg1VgN47UuB7GsYv_-hRQqcmgo-eh9gvNn61wzm5xFne4wGNmrvSFLrlyqM6AdJLzzFyfaaB2I30dqKDUT1avjMUbqjvd3AscObqY0LsbwZQ44KDsbTG_nSRLZgMdK3DNnWqc6_Me-tAE35xQSwxw3nKgU9pap03hWGxyWSANaO8ddgyB8mi-y_3DVUcrzsmgaQvi2fQWB4MbBQS0xhyDosq9b2tlRtIJ8Ip88kFgloENJIvUr-OjAFpzjS3U4lke21EFtXiPXGwacnHzjHMOyS2nbV21rZo", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103125462168316429196\">a a</a>"] }
        ],
        summary: "솔라리아 스테이지 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["식당가, 잡화, 교통 동선", "평점 3.9", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:30; 화요일: 오전 10:00 ~ 오후 8:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.solariastage.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17370759939890298347", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%94%EB%9D%BC%EB%A6%AC%EC%95%84+%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "후쿠오카 파르코": {
        photos: ["/images/fukuoka/info/shopping/fukuoka-parco.jpg"],
        placeId: "ChIJVVUVAI-RQTUR4O0-0xXxi0Y",
        placePhotos: [
            { photoReference: "AWCwydiLOGEDFuJMSa8KGWmMGpvTTgjqlxjJYNSDmCC1HLjJoLISD_WoZcKvRQHxwrLvNwOjozvMANcoWkKOAcmMUDLjWxtaywCnU7WOEveCVuK6MIDL-XuBYCekHbOYpnJCf-x7niyA6waZ1sWF-mCy2-HtIq33rB4z-GaJoyHMjECcxfxcToC7qU0RQsVu4b8z05682mzAVPcJ-Eb5d5kTKuZgO0hIuNI0y8KR0Z0WlIScuNZ7zZSp2EB9hAXkhelbRt8FEdPtU1u0jK1RnCHVaGoPcVK_kt5zzSD7ccri7hcyyVepwHoUyP1Wxb8sp5gZZ9RNf2JDFxRMI3HZ7mRUsekTgChWke7Ignph1H7RfQcPUKB5onL6-xt6CekLQ42uUFeHK7uVet9WJLPzzNP0PGa_FuZ77jFOhaY5-5cj4bX-Mg", width: 960, height: 643, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107873701263941540893\">福岡PARCO</a>"] },
            { photoReference: "AWCwydi8ZiS5g1Yu3IgKkItMnAYFqc5ZdnhcgiRlsv4GhClh4BuISKZ1yRETP4SsLY5OUxLkC9jTac7GSW_0oGscvZC48QSxEyliR9u2ea7Wij5D_OG2eAAr31MLJxx0KN_FHdUdMURwiXvS6-IcyB8-mfhrOu_DNUF1MQ2y2O_GuclYrZW_Szt99wKPt2cQcCppzahlik2YlIFRVaGSxapKYMhakwyEPyYYZmS8OFH72zuGt6eZ_pltqZBrCrtdXfWcEFJheUt8cFbCQ0W5A0eM0e2Y77N5HA0M7j6e6BGGz6hDA2SHLNYI6nTQevZWOevcG2JX8Eg_7Nunvf_DH4GNdO9Lch859eFTTUdOTb-gJKXKStS73gTREA01DGf527uvgWFMnA3Z1tGjBC1z0RAPVx-C4L5_5q3PdWgWzkB15Wlb4A", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113009347334747424813\">김호</a>"] },
            { photoReference: "AWCwydhREyOB9yvIc4fJ-7FlYbHl_oc3jEoK2AMiZRKll0DW3HCC8-uMAWvS-ZJVcopMX9-JsU9kS7Jp6KA0L-cq0zA80Ld9-cZgWo2cQa5BJHqJokRuhniHlEMBIt7ySA4Ir4gVDgR-N84YoBTcz6nmvjQCaHXRc_6v-d1_qLypoG0eN3ho2vEJPjN0Io1biBX8k4jlvmm4LIdTR1mu4uL-Mte21P9DvY3J4TkhRWXWcv_V2pwgW3Qv4JnUqLNA6-gpO-YOr1ZzQ-_qSr9hoG8PrNNCZ1IoDdIi92VuigUW-JDcLRMmdyogivYlRfwTaQA6xImReQKVqxs7rRHD9uI-hbxkYimUM1DWOezdj8KDK4ugdkdMrxXCW5iQ2DcP1pa8AeWEpPrcLq1pfSZIUC95VtRc753_-dkSyvfBqV471sx0cg", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110699161431272726078\">鄭立泰</a>"] },
            { photoReference: "AWCwydhUH0w3wS2u1hdgY_cfK04N1-wG_cQRX9twxUgQOSGXcgBrNQV4kcbeNSp8zP2WynuikfFwD7UwPvrFo4WGD39B713A-I-kHpji32rGX0DPPwk5wYSG9pdUVWLbGIA8zPOOzAWEZLjAmd5t_abwGiInx2UH28_H-HiCZMgthzQuViS4QJumfubf9KB-4jf7rXs6Qf-35wr2LA4HJxU7JGIqttX9DYL6alsLwYYtVhHjl1BU17PSC-V0SvJTyPbi7Ug9cO_evfoQhuyXb9cJwiBwYeb6li8rExvEvTwtwo5y0E3EQ065BbcGz5G7peZGhhrP9pPkwLJqK60pVKR5_lQZ9y10dBqqScv1q6i3gj2H3lnIUaizD6WuQZXdh1ZgFgtcaL_wT7C-dEdV-vgaayQlY9XxQhMrfzLPSK6tKHgKgMuhxHK1YbsNIoJgMdVA", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106198603978899463580\">黃敏惠</a>"] },
            { photoReference: "AWCwydgLyYaEjZgBP9KBTgJFUUTv8wdVPrKkAHaCPHR3frva7fERLJg2g3JVVJGxj7vGbVs6o3COVy3Xw2PmlFvel4UjMiif01TTiSuOUp5wGeIKUA_0LyXi_wO2TO6m0E1R9d2X1LDqQPJKEVVOoA0xi5upEvKuoPB1Ujt0vv1H_v8gYjJBdhRhrwV-CwL7yG6oIM40NgWznO0YbtJsHnixVR_ZpKqco471AYG63KyG1F4XNzgi45wLP1SyW1Vmi7xASsyUQr2EJQNKdGux8wY_OZqoLnWpuosdDvbIcNBDzJJj5Bd-Utn66Bc26Ecab7waF2eTzwmKJ4gOB4Ru8PBSORiqxq5HsrcBmsJv3DM4lHh1MGLMjjpwCLNkdf2YVNMgcCkspDOFA-gPL1EzBUjTzj6UZGc3y4PQhJKr9aZT-OTP3A", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110726585744148697934\">Wong Francis</a>"] }
        ],
        summary: "파르코 텐진 후쿠오카 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 캐릭터, 식당가", "평점 4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:30; 화요일: 오전 10:00 ~ 오후 8:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://fukuoka.parco.jp/?utm_source=mybusiness", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5083421680458460640", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%8C%8C%EB%A5%B4%EC%BD%94+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미나 텐진": {
        photos: ["/images/fukuoka/info/shopping/mina-tenjin-fukuoka.jpg"],
        placeId: "ChIJtSPre46RQTURJjCpXi0cUPo",
        placePhotos: [
            { photoReference: "AWCwydiZe2M-QR8d9jaaB2f2VQ59Qv3pHSv6t16uUYW63_O3cfVpmeSsBm20VY04f3K7kze1wEw7hyeyox8ojEsJxFzvR3oecMwjIrXwJ4Zs9CZX3DEQ09TJD2nf1zZipjuy1rlQFmUvEqwT7py6LW71sVSohZYgSTKt2ss3Ow8L_X7IUHAKY6b5_SXqaLLysaat7QJKk1zMANephbMEUFNBfH6K08PZ8gYMbmLs4Q9zz0KTBtJk91O0muAe1ob9YvligoplCJPNcThQ9KK61xhdbPje2-PEzfQTU9K1l9Flvovg0CDKKgfvZRhL-e-9KLrbWgFIfdeL0fZBq3NRcPQyeuLJdw1kYQWlSwY5H1wWl0gNQrN5B8WChNpFSXriRd99jyYQGnOUKMAQZ_LcbfuqKAesyTX8tzo4j8v4WC_7g_uEikl8", width: 1683, height: 1217, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104361295623228625359\">ミーナ天神</a>"] },
            { photoReference: "AWCwydiTPHM1XDpZj4r1DZlYDZuCZ6M32r1nVcO5_bV7CrcdrRmlTLx5lKzSgful7jNFjkMaPg0n3irzm4FWsK1IXTs7l6bTEQGyYWkScQ7_c0SfHuwP3FuzGQSfWociCfJ1-sdI-5Mb0qmpGQhuIRoQYXT08n4os3kBzhH6Nn7uiri9R7tgojYZzGGIZbTB5AUaWnqmBwudaqV3RxQvifZ8Ga4xOYRYlV0dlXKQggPmFBQvca05g9k40L3sjYr4A_3xzGig0V3ftfIzCxI-p4ej2k89A6R9NxzNVZxskOAIfScikS1KMspAxDxnHbBWl3OTLOVisouWwoPFSP4zUjRs4wOENuAaUHGwXuqrPHgXBTuhlAeAKopdwiOhq8s4A0OS9rfQxADF_6820iu1ETm3XAmRQW0QEcny76w8ZPSm1ZXCX8tjOAxvexymEzNgZ3rt", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117173458183589502068\">繼續</a>"] },
            { photoReference: "AWCwydhuxdhdfLZV0IEWIE8REjmxpqpjX84s42dMGjFP7D3X_0p6sj1chsDBLrckkfM54wbZV_YlJie7kUO0Md_9Zg51fcFmBk4PH_0PsAd4nernH2MI4_0m-2Dj3YgpxlqHBeLUUWLCIctWSjgUgabDd6hOAdspBVhyhwNqynIhS6nkAbJJvQjfr-sCPFwBV24L8N_bSEKojJU8lByf40xS4cNxzUxgzSo7xGWBPqQeHh7Jgqn87JdBPcuji2DYStRfySPvmciB76AwZIY4gPeBHfgiURcbwhk-dlqQJ3RWj5VpZntHeqP2wnB259mNuLMQO2I9jV2aU0JXJYfZAp7LfnHpPVTdvZiNL1NSO3HvffFumlr_pSmUgv19fXWF31rV4tWOYUqMtJMYP0KhnkAzKgxko_Go07Ciqy3-eSXTJZqIaYF6Xv8czIvleuYt155J", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117051823713128068348\">こしひかり</a>"] },
            { photoReference: "AWCwydjRt06mBn89SLagCbg527GH_syZXkXgHoNxXRNHXBW2zmH5KlsWGj2T7jgvmoMLthGU00YsCmvOa78K3EXqFejKPYvvy6_5JU5RTw_cuCsZ3nu1VQQzpDUH_7JTtQbQ9tR1vpv-0162ygtbJ52O0Z8eo3TZC_CoeipU4I6k6PX6ir-kB2R3MkvsLvfr61Wa6Uwo3ewke1lHg2MMd4-5kpNnhqW609BRp8u6E-I1tyrSKQ3DyHsrmEj-xiQMOhc7BXGbMTiwJTYXfKFKe_zPC_pSjCI4Nzjt8qE3knIyly_g1u_MbYrPksH4cTbEhRCVDkm72nSWphJ_D-zogiu8xGlsxNTncsaFsj9PUQLIF1LimLMibQMLUOwO-LanRJ5XQHG6aBowbXpZW4i--uI2NxLYO-STow6xJRxkqz-6dpQJyQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105952666750510344725\">M N</a>"] },
            { photoReference: "AWCwydgReV4C9F6XpvFnV9LBcyHHEArjCuIHc39Ydf_h1TCz3z3FA5Wm1xHC7WYpoaGH6D6SKKyDtZQ6KsmwFeoUaBfqDXtKBr1zlt50Fi8FxFbALlBnfNKvuf7T3B73X6_zvMFR34LytjA86aydjKWAIuo74eYGDrj6VLilaMOYNsatz2kT8rhWDZFXnjwHKiSnIjBfa88bVaz-tyXcnoo4NBGnOfrUz8TM0CBWEEuMPNTMXw7MfUO7woRXbDfq_qPP7TV_0735-12SHycC0E_ki3uQE0mUxBTamAOcCnvciudP8psyJRd255RUli8JWO8AtGg9G49SweA1z9TAfO3RtFPTGCn8eN78neGCN1UD5ZfGKbGtZfwH0sLiiUivK9w9xkEBca0RgponOq_LK8bIE3YBSG4v_eOEy3uIYpk3B-fdjg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112157529489645007111\">hyejin shim</a>"] }
        ],
        summary: "유니클로와 로프트 등 다양한 잡화를 한 번에 쇼핑하기 좋은 곳이에요.",
        updatedAt: "2026-07-13",
        highlights: ["유니클로", "로프트(LOFT)", "다양한 생활 잡화"],
        tips: ["의류부터 문구류까지 한곳에서 해결할 수 있어 편리해요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.mina-tenjin.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18036947488806088742", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EB%82%98+%ED%85%90%EC%A7%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이와타야 본점": {
        photos: ["/images/fukuoka/info/shopping/iwataya-main-store-fukuoka.jpg"],
        placeId: "ChIJc3uKgYWRQTURWr1t_ndugOI",
        placePhotos: [
            { photoReference: "AWCwydhFh6144vYIuwr0sS6p7f-8chBVKKK82WfM_pY5Ly_ZYpqquv090wOzutRu0S60xKxW6D80HbkiXLRG0FK96bdzdFM0n-HDT0zZBWogjTTvu-_cwvd1L2oDjzDTzdKcvn4qm2gi26tVdy7Ha3diluXkkEWf8m5iDDyhDsfytmJABj0QiltBFF7nApXT0ypDOYD8mSfIrEabzG-zviFXuA134cTf2-kxBq9ZBR4JaraK328lBTo5MqTYBwfTk5U7UxICERq0GyQBTbaL7LILs19F7hd4pFCqAaUs4cNXR9dusvNA15amrnq9ZWDFyAwfhprZgdufpV7lwKe4WLxIURbM4EFulyhmO7BDwYZqgDwn3ULeD5kImaIUPMZWndC0YYpy1hIMT8dA7HzNKd9Hs1IsfzA_sn7wwNDtLBs", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114033296480991772635\">tt aa</a>"] },
            { photoReference: "AWCwydgn8XffAKq6EK8ZqG5dxGOiyCLwwTSMXiuRBCa7rR6cqk3N5b9Aj_Tjsm3PQra54sYv7vHYyioZ69xUUt3aG2XD4T5mT_WKK9rJA9Tn9KkOvmdoTsMXX9RZ_wK9B9j4sjyEwisWguvO8v3OrcM66211eitwsJjVkURU6fZ99DMQMg2auQneEe4PiHBUx35Ajs8152nqqbeDqKX4yHqAGp9dWek_scIWyMJ0ueTvpOFapBt9ms1lH_9J2F92YZGeeUed6OsfMfuiEB8u3RDjAL5lm7wmXxUrPBcZWWNsm274drTWAmzqFKVbw2oqFGepHK3AcBsGpnmeAxeEgrHq97XZJAT1IGoXuAZaFoV1ado-3IkiEa2MvNpaAen4Ond9ipx2tYYm1s5nsuR0Ho0Yu1URVzvyFPD7qMeSnPO9tDcpmUrKZQOKr8ud0jeKMg", width: 3144, height: 4192, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104282148825136172187\">Y H</a>"] },
            { photoReference: "AWCwydib9P5N0h3btXpNrrhkHZTIxRNZEJ-zaukr_3KEkpM_qelhvT-K3jJzOYwgaSfSnM6Uv7aq2HRdoVn1ZiHlc79sHsNjyUKOKzmmgfeLznEe_hmcXs3rojNy8qANQiHk9rjegdhlQuw-z7WHJllOxCEyJmaxGcDfZ7p9aJPv2RhOX-LLBmrWH7k87rk8l64lPYEJ8iCHYakuWr6n3_t99z6QyuMX1LiXevCPWLtqeqmPd142KguymeDfqGFgpzUcPX-w6SglBzYHPmpTQ38pk28d-z0bARRLnkK8j4zBahu3tUYj5Dzjf7H9VxvtQN-cYYJ1t4qsmsam1pFeN-9EyIZSQWgtWudD9xCyZRjQp5281dX23YMnPB74bcuOxx8BpxiRIhYRbKV56HuaUvYT5uQf3EW3ifjED2Z2jAJUBMzSaw", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117404720666471909604\">Sea</a>"] },
            { photoReference: "AWCwydixrLVxjWG4gzLmIvstil4Pft8fkqDOq8xK3D68SS3pUdgSZR6kLHagnxxuYXS_JHF3FK4d_UVWVHkMOWuzA49mHOIjSU643NvLdMZ2NMsIcbAlGdxOHo--KcyCjb9UHGhuYXY4fe1fZ5TioTkXQb8DIscLsHOsuuMCnlT8YOY12ycn-gI4DZzq33lm3VWQD3NxvGaLuCSsJ2YdtDaHE3Jklq3cVPAym_wqSwL1DChuAWR1TJXiYhr7kTcXNk7axGXG1MxY7uJzQb76SONkp0Qr5UYCAm-U8fStr4zyQzN54-W9bdO2lm4NSr6HVvOpqHsbHk-Fq8lCUcvxEGFVeUmpuBqAVw7OHg-cxnHB8NcPOB1RsMKJdBhkd0LTMmFfaGH1HxJrHqnJTdbo7YmzEh43M4rnWRHFdmFlqTZu0DfNZQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107500873251784206409\">pp dep</a>"] },
            { photoReference: "AWCwydgxloNrCyqtrQmsyDf-JXb8qPAEhF09qiqcXsWKOUucEM_r_Zi_b37_YLONVN0ZuxoKtGBxfEi52wbRia8zF7GRPjhXxoQZW3Uc6a4nfjRH76YIhJSyfujRLKKCsbMdxuG2xi5Xant7XEiCasYUhwYQTC-Y42pseCIj6aKFukmpCHIMm4FMTxl5Xj86njVcn53-RnhFO8c1iJdopuGZiOEREi1NKDiNKLEm3lnAMjAdUaRybtetjCZpcMXNceDyrzA5CoxmEz9RAGxsRyIgP4LXigxTVqA2_xsgGkKfvHAvgpOK5jDM45hKqN1Ozwg8k_5LPdGf-ysqocu8qSzlwuqh3kFAZJt5QBSIjn-EpIIoxgWF4r396zmiafDVgz7ILuWjD9-ncnw8PWuA4z4JoGQl8VV0H8Zi3_S1sOytVKSEfw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111576945514476318748\">Eason Liu</a>"] }
        ],
        summary: "명품 브랜드와 고급스러운 식품관을 만날 수 있는 텐진의 대표 백화점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["명품 브랜드", "고급 식품관", "선물용 아이템"],
        tips: ["식품관에서 맛있는 디저트를 찾아보는 재미가 있어요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.iwataya-mitsukoshi.mistore.jp/iwataya.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16321166511239445850", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%99%80%ED%83%80%EC%95%BC+%EB%B3%B8%EC%A0%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다이마루 후쿠오카 텐진": {
        photos: ["/images/fukuoka/info/shopping/daimaru-fukuoka-tenjin.jpg"],
        placeId: "ChIJgY9sI5CRQTUROK04wom2Es0",
        placePhotos: [
            { photoReference: "AWCwydjamwqPKYqm043-RLuni7EfiWh13mi07MyCX2MPLAGx4YQLZLIoW7131DGBAANHGIXVU-r7nRV8yTW_llHP2IEGasM-G_y9EW6y08szseEq_roPu5T8eqVChukDquygwEvZ7XVNaCpd9OsHOu6rZf-YKiw0eiljHUBpHzBsEdQpDP-o-9SONWMANc7YbHtDkBp1QHyVVm1f5YxHDxdgBnhFvQsasL71p8WI952kGjgJ06uc2FbmwsgQbwEFyNHmYrfhEGPeKHzsYvNDYgNo0CgpjNBcq1y9_C2rXktvD_gtP3J_G5jv31y51Ik66MtTV0DB8ygNlLKaPS1dBmkoP1yZ2A7ZOCh2ZCrI1M3ozusI89WiSwt3mzFSExxz7CucjHBM89Y1OBMhUMmOFntIjEqkVSJGgTBJddMrUv3RqcQTaow", width: 1918, height: 1034, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114879831152939516220\">seiichi nozaki</a>"] },
            { photoReference: "AWCwydgFyB9z7ZZJviyBCMCSwxoVfpEML8OI7R-QBSSsX1GIqYDpbPSWoJFZrIxP-ozyl0qLjj3XlWIMk4ddxRIXG0NGrAtu6ntNUJB1toN2QGy6CruzGekAlaNwsjZDt1jnjHaUNSFE5iuStJG1Yc9n9F_y7GNRgbdiIOip6FC-W66Fy7Eime0_mIYu24cGukhGSCsu_m9erNt7Exyh-wJnv7WIFCSTBKG7P1xaER5V4hFQ_7US5JkoRxKj0Aw9c3GFgembKlRI8C-LQORhtEoSWeNauZ1aPAVyHr_7h7YwcWdXig69X6En5x6P8AA_DWn0KnTvMPjwr32AvWWn9NQ0vlXldyc7H4T-PVD2TojUizmt-KEblYw17XnFa5ePKVqwD4V4D6fclsERvqPTU-EixSFWhhxYDUE401xcR2waq0Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100726171759754889760\">Ramona Lingea</a>"] },
            { photoReference: "AWCwydi5zaqCxf0SCizZeBaS9KQa9d_lzEtzDY4LXvOCJ27mc7mWadqJlbV-UkwsoaujngRNI0ZQADiEAmGMycNVailEtwib88DvtMyet3m9f66hswXiFCB9fBvLfvW3I_LktM2S-onQtLt_xUmS48pnNi9_Qo66eUInAV6LCB7f5xF9a5FIR8SPgR0Va4DGOcdRcGDrigUbWbQ1wontgFdKRADdHL8PUUYoiKu2bXwR2SlayEIxhUxnauz2C5RyLiuhXfKHLYlFr719ZZp-GQjv0tmAgrPUvMuIZQgDfrViWvscfL5QLkTw6bDarWXcUWYBv_WJPJSz3u0MQHb605anz5n50KApXZwVhpPkcrU4VhxrzI3dvj7B8AZdez2SM0LL1spVwXWPl4Eg-YsrVgs9cMH50baVal5DxOMz_TW2iqs", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100726171759754889760\">Ramona Lingea</a>"] },
            { photoReference: "AWCwydhGJ07QfoaLgoAUCXZExats_KYjAdiHB41nLpEjZGM4oNc3pD4H5aNmkG-6QAx80i25BuxSO-JRvUTLB4Q2P6p1R-FN3PTjwY58caM2t3LTzWBAE9MRNVU0wIS_ieEOAyfrmU43E-9gkZSYLSEKv64IZidknVsovpvEVrngUmkKVclVw0_TUL7AoXb1_V2FfPJ03bNkUik5XtTIzE03TGWtXE2lQeCnwhdHWbf-VcpZtL2EoRum3yhggqj6ZYIr5uz5XGZuIdBoC394uDjZ_OVau8qw0ou3Iw7Rath9zKI1tUYXPjlVYTE1yTJ3Vowc4Rz1zQvwFeLLYLxA3CJP7Ash0hVC_sWmniBlsfefpoEiNwPZvzqeEThMbjEk0dGFIICNYooHoFAocpsNcnuQ_J0sNUtdMxM6ZXf9JVF0wluokA", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105414642642187912738\">すけさんかくさん</a>"] },
            { photoReference: "AWCwydiInbFjXW97Ktsavb49zW_M0SuvWFdmbxarsSIFxRPZ47JZGcibyLiM85lohyiMNGkp3TNpnzz8EklApG4muBCMJ9G_68d9xgkT7VwJHyBIdISsPFZ4nYe_rCby1K2g-tqg24_bPwLpsvzpHy58mxyRlK2msDZldJA89Fe2HqpSZz2Gcyqb1aYcCf6I3GA58MPvUNbuubxo3_pyBY8-9ONBfoKmpojroO8FI88chftBUIEmtTcteOwguTjYQrQqnXdGwW_8xv_rlhImkOVW_ego_SuVFazgjaVaOY3Q-pDFbbn47ebkh9fH4eKrSpXOrdoIkt90nqVvRsJCEpSu0V_qch2uYSBh4VrnhipJYNUhRYsjSdX3fOaaokOTvLjRKWYloX9uyZ69WC-O667hkeFzrABQQ-o0Utf_8xby3mK3QP31", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100465602249379917311\">에스테틱제이</a>"] }
        ],
        summary: "명품 쇼핑과 달콤한 디저트를 동시에 즐기기 좋은 백화점이에요.",
        updatedAt: "2026-07-13",
        highlights: ["명품 브랜드", "디저트 맛집", "식품관"],
        tips: ["식품관의 다양한 디저트 라인업을 놓치지 마세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.daimaru.co.jp/fukuoka/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14777074030141287736", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9D%B4%EB%A7%88%EB%A3%A8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%85%90%EC%A7%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "돈키호테 나카스": {
        photos: ["/images/fukuoka/info/shopping/don-quijote-nakasu-fukuoka.jpg"],
        placeId: "ChIJU6_Qh5SRQTURhTacOuDrmZo",
        placePhotos: [
            { photoReference: "AWCwydhWKyUzIE-6Y8JDHyOi06pEo6yl_llxnX0paSmuFKwaBV70jKEOpqsvHUn8xVH2NLh1yfvgKLsnuJ-fZJU9BMV-vn_6LuIDkwD0bDdzOZDfPvS5_ztikNJX_i1u98YbCzU5EJ8eZToacw9lvDjY8kDZawSQRsfokcsrkA74GZBF1avzELmbsqrTntfgMZ3HrEnVRVPgPsxNScAaGSxMQFLJ7B8n1nZXOi1ZLNS1pV68_NaAhOIc0dP4qytsg0mVjdWTyJ7sOtcpfX7mvxSfxGhkQ-MCUjBeTZSvAomm_N1V8WsYun_-NwnH2FmUaAwfA-VoP-43J4zhv2pdFWzg9AqYeKuOJIO0HlloHhMHCgUfi9yLV8Z5ydHsnBMqqQIvYcVs_vDnn_TNmQtoo45S0nc7T9prj9gTxDQlfOjWDrQQSw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100203676593006563736\">Katy Hsieh</a>"] },
            { photoReference: "AWCwydjNiu2AxzyxtNbO57vOu5exxclgyVTrqdE3YDerLzQHZDL3wetffsuarW0GD-5YTZV0clbi95xGQwlEbxQ_Z2ElUbJ33IPQC7Xubf2mkmUufO7GNTKSiqGAfOB9iQ9rNUweA4H_oBYD4-pCVWIcUcfWimzHJCWOJ45-gyhlfaE5pztWsfGI8SQdjAKvuinXIx_TWadfZfLDZr0ejTlqW2bhoZoRPO1vh_DUgG98lu4sTddmQ6rw5HfcGwHLKfB1B8KQW7gS_aZtAp8zdpL1oK6lizznAFimR61sCZo1q_cKiW3KlU6w0MHMBe1QU92PXh1LQPFvvD2VKDCbTbqfTz1KXUg_miaU2-pd7zqD-7Ek01d5IANY-zlpAlFjyZ1cnMeeuibJwCgYm3PKnyq3a7dzjfycziVONZKtRYJDbsgkjnTg9GPlpXa1k-kikc19", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113992926846406404008\">Alvin Loong</a>"] },
            { photoReference: "AWCwydgYSdniICclPBQTtbEhqf99WAjToaCINM0yyBhyClOSIy58L7b9QUXwgSJSuLgklFTHjMpAddu272HVPdN3OVqCQM9QByNU34JVOofoXwC9SCKedN6rtxkgyZl1QB4xENNTCWmJRRY10s-3m-DpjAD0UM_sbFQ8cYcdGgOY0CEV617-S4PyxK3ztpxSi6P2fnEDDMdh7Twdi9OGc_j-MviKOsaLd4uWLdsrw4tfwww9mPjiAPfCXeAG59F05jsd9aVLgAQwhERFSpwtK92A1IKRqb93ADK_vrFUOrTjb7M_HnrT1Ns35oNJu_tinv0kRnrjy3POIuVeDYcepdixamGytK5hcNk29WWIA7ssBB3Sbp4YSuasWwgrFS8GQ9dwys3IZnoQKmzMJClqe4pvX4dyq6Ump6Uanahll0COQW74DBgv", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100547396431347031257\">박종혁</a>"] },
            { photoReference: "AWCwydgVsiMGTCjdNcN2_yDxLy-9kmoKKAjXBk7RPNPiBAsR_gI45Y7yoX3CMUokaDfgIgCMBfb-gM2Xfdm-VI1Dt2uDfO6U2e7ClAERDqremnvQJuPNrBfW0ZKe-8lcxE4ABn-M6e3rjPRtjPfwCCMsdiw3tXdme6scYVxSGqwWVyEQX-cSoO70a8UWsSW654XPykzgUlgdfyc1AVB8CtJwsRffzMg6uZgt57BxQzeqE2vkdnsa4f4hJc2kCw55u2_F1gRZdNP77rtvg8wVTkp5Ou_xm_CZyerR2sSlFiCaZJyen8NxNKVvEtVO-uYfnWoxB7B6BhNp9hpON7lEiama7WffsY0jih-gzU6QJGSsEcZGgi6SBdSazEL1-VD85XMEuOUfDlivtVJQYb-ZV75fj7DtPPGX-sVNgO8Z6GfGf8byoA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116122552160811822783\">hyeonsu Kim</a>"] },
            { photoReference: "AWCwydhG2pZp3qp509tHONWIvs9tsV_k3EJcvuNMNjwAfPHUepV5TefcOtevxyN9H_arG-qpOylO7H6QBMv1VlaKC_LEC3HMF9lI_N4MslKsVEf2wpBI6Elu5eCznSbRLnK_waBVexQJr_J5CX5P7ksfP_Wp2str4m2dXL70Ao3MBQ5qUGA8XzLoyC59i3GZZMePZSIfUiHe0Gv4vYOs6UBR4cLunaff81HxCG9kv9QWJ6ErVNL0ujGy1l9j3rRqxAgFtlNNbtabiqQ5RzVeZN2MsoOyqpxLGPKJBtJL1fRmGAWyOJtJ3QHU7FyuQNKbG8jdyXznXMwi-0Iu16vTV9l7SbZOSSTL5iIjhDGU5KqrpePvg1TfPRgKcFvyTJWkO1aEIs9WFNVfrHRlGNarD3nwlADm-akhcCU6crEH52KrXQ1g_LDnwIOKE3E0ULfmCw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112902837669930148366\">BEKKAN</a>"] }
        ],
        summary: "돈키호테 나카스점 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["기념품, 화장품, 잡화", "평점 3.7", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.donki.com/store/shop_detail.php?shop_id=278", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11140194501566150277", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%88%ED%82%A4%ED%98%B8%ED%85%8C+%EB%82%98%EC%B9%B4%EC%8A%A4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "요도바시카메라 하카타": {
        photos: ["/images/fukuoka/info/shopping/yodobashi-camera-hakata-fukuoka.jpg"],
        placeId: "ChIJ48-N8beRQTURyQDOkx2DU2s",
        placePhotos: [
            { photoReference: "AWCwydgBmcixyaz3Oe7aiJP9NbSAkIrn-VfMtA6gzlpUxnldSru2HHmxlj4tXRwnCxHugb3wuebK5mptIGyk8TQjsywL1TvidNiEA1XFo8SQwejPHvQU3ZClQNWnSfm0HKDOoKVK8EVw1Ux6KRfmVc7t3q0HDfSC11T6EN1PGSpoEAfwlzwHbX-Q5TQNiHZaa66TZ_N7wQDgPTa_dBSgyExuG7uF78C-PRESBJwRB_IRi-1NSv7pVrZZmlF31MEShUWy_p-D_v_Q7j4_uw2ik1S-kDcLmx1MVNLq2anel_KuPh_fAwOmwSRuGyaq2i1z28CgeKrdRkMIjoNxilcBHqXZvQ8vvLANtXgeCSKfCJjgqVdrqBFSg2rRlqXkqDqDiwFb1K10BRkkn58n4SoQwY5K8_8StYxSa8kdx4sWxm1bNGB7QQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101265982455537174988\">井上明輝</a>"] },
            { photoReference: "AWCwydje3VTcoxZGd1nE3F7MdJakkRulBDSEpyaeHJboUGookX6ClSYzxpU2q7nmc2oRcNGqrx9UaMHlgiXvvXRBvn_Kpsxw6QHH5ulRtJGzL5yZ6iyByIfBO5g1LMriKB4zCLWU869BBqAxqhdlEjQugzmmHz3jJJj4k0SfcjYG4V7NajTR6DgMfhhYbA9ETILHL780roW7tKAdSgG33R6OfR5u1mhfxkhr0iJq66xWCO4DKS7AQB5KptwdiTYZ5kAlkmdQrJex-Db6yGTOduxcgFdxiRaRv-dPdFz9IxyMCeei_NHP3Pmk84yxsT-7OLVgW1gKmcJEMzBvbGsH6Q_zFuz6CSWiXQNuBL_HImk8JHvmZqMs1vvTVx-sffFauOE2z-Kel6ObgKN9nJMmWESKIbt6syVHbmE8nLq9px8BYPU", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104856352017638145108\">Platinum Guide</a>"] },
            { photoReference: "AWCwydj1WxMtLceWYarlahU84RUe2lr9yTFsEkDej9ZDljqsLDLJouyId0QmD0I2Gm2U6zS6txOMe4a7z0hGLVM13PXqe05TuAOSQMxGTlTRtLD58F0Jkf1Emfn96lFT7I_eZvPXvfvRD0S53jYgiLDsE-z9SF8wbkIiCqD_aZedgkVeWxCHv0CZ_TKRLAvJEf24sTC3CcBDGn0bnPkbBed_7XmLr05H6TQmdH5fV0qDhjABaXq5oHItLU3TXpAwhtMYR_orF0UtsJXbhRTJc3ZIqmYKkIEmLd-0Apr6lRvr9K5EradyOgiQu4QVqBG-8t6b-cGO1oNXBPT0uufizSr3GqlRFmqKzz6nPHQwx6m6s-fZUXMnOpKHq1cLETW7oRoOsSccTXbmrNK87gwmq-OQnIRJS5CxKpt_jNdPaRHts0KAzBhS", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111345151267315395538\">David Kuei</a>"] },
            { photoReference: "AWCwydjr4Ts3JuA9MR-2ts3BTDKmAazlAt3gO93GFmykLJIHhtPoqgO1BYyqPiEcpy3R_gZJ2Dd6JsRzaPbkCHArh2lqfvTz82AHLW9W3lrDMMMn7aETfEYtdfH2FIXAUQEVI2Tzk8ajsWdHl83Ma4wVzPnGb_SANMYO3T4lErEFDOWegwiEHQiNBYO1GywV85dfSNXWZcPd7p1ZzjpWJRnyR7z52TwLiewrqtKjHx6hhO0hk2BNL3j3Rbwm_9UppJMyV1mAlNY5ibWTqmsw0cK2Pp6d7S-GldfplIQYYkUUpFPUO-jJtgCMcRBnRla3zukiYGMl9nc_SBSS51beTtx4dRYPgYR0hX2eTRxTkc7Lh581lT2jXKnkK2JJTzQTziiVEranwT_WdcwWZp3PU1zKC-RcePkT2aAdBkWST4_Otf1As_6c", width: 1478, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114038681949694135188\">masahiro y</a>"] },
            { photoReference: "AWCwydhAk23dyUoQoR0X8v0ELD3SL0EQ36vt_owZc5EHE7h_cIwETXbnmvznoOJTLnlxfR2Xei6BtxGfI7pOG6wcIvne2am13Rx_CtGEJlxk4CMDl0FXqBVT7lzRZS5FA4IxDqX-f4fMgB2zqt7y_LiUPUeDfW9KvW7AI-BR6RQpNrZfTuaR7l_5fkkC1sLZZQJY8nzni_mcA7g19qzzCb_0qnAcdXER_spz9H2AbF2ITgLk6mp-9xz-pGiPUD3cKsZN4L8orRlVdvGdjcTy1jKiydAXiLNxirgFqu5LXc-TTplP5HRVu87ksVP_og-PgTcZqvBABDSHX_fFuex-jlAjmAhidYfNkEVQ5H4oBdrYa4YdTE6O6iDVQbeb7UIBr7KXw2R5V8y218hJJm1ax_gRxhsckbadJqDQTYrmDZ1AD_lHmA", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107947953321602308264\">ZX-14R OhlinsEdition2014</a>"] }
        ],
        summary: "요도바시 카메라 멀티미디어 하카타 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["전자제품, 카메라, 게임", "평점 4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7733669148182315209", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%94%EB%8F%84%EB%B0%94%EC%8B%9C%EC%B9%B4%EB%A9%94%EB%9D%BC+%ED%95%98%EC%B9%B4%ED%83%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빅카메라 텐진": {
        photos: ["/images/fukuoka/info/shopping/bic-camera-tenjin-fukuoka.jpg"],
        placeId: "ChIJUf5hcYWRQTUR_MUxO9bD0FE",
        placePhotos: [
            { photoReference: "AWCwydi7-LJhcpBKi2W4ysAhhDj7dmEboTO71-Xq7pSJWzct_bLjxEO3yV-b9rcKBEfvgZmaDV_1K1B3GeG3OG3xN25cyBhS11R5fJWbp5q-RHeOBjz-YlDN8FwoNjJZfVSkNBWSBwIyFey8MIKu1JP1s6tRGnlReSfcG0qRmHf9M6ZwCkuPf4ikELJU52EqOzOnbLcydsdvI10AFL1krbEoo0089Dv29vlgxpObOCktA_uNui98H-ZhIoHjqKoz_9mbx1sEHd3zQKQktGzYpTrJl7DPcs8ozxVUnsaGofL-Fe4JfgGze5GY1LpRhE7__PtJyatqxngMfIDMNNhyzqb4gASFS0hoPjBfKgc7nAh1OFblYpwKvi96wYX87bol-z76B5zx8Ks6WBhzCRw-yhXszlgkSpXsnoxZN6E_Rt9MrK1yoJwv", width: 1242, height: 926, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103396795552706709718\">Gloria Kwok</a>"] },
            { photoReference: "AWCwydiFFiUFm4ES0PEVPblQiaOPsLsDqFgXjDy1J4sgZBDsWGmigSvrWB7yuthFWBFSTB56V2KAUUjtbt5cHUao1_WAlt4jw9ZvVB3_PmWIJtFJr6CDhbeGIzWiFHBiIuot-V8VWckCUM4-nZuzBfAWUOW4pXVo6dKYnKlphsLorortwMxAT4xdmGR5aSUIDsSrHs55SSBsVydidkM1dS-Jzvm3s4yF2WYrgGmd7CEmswVJkuAj_X3fG0o8m9MggZxUpeULeTg9BWunop4F4ZkiFng931toskyR03IbWAurWqswqNXHPrTkKrasSQGuN2emlnwo8j1DuxdXol_Zuoo4gOh6YrBeX3BAdLL0TnI8d7r8H9s8qfIAses8Okz8j4-JJ_KOwVYR8tk1SZEPhI_hHlbbf7UvLeSYGfH8MwyZpclmXL98", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107911845168372270082\">김성수 (SS)</a>"] },
            { photoReference: "AWCwydiPfmIFdAs88bhtfnKXiyHA6IEZhohkSSXSDrAzRapmkKYLIKLUuUovxOdURsYQlxQa9aK2iKRKmbgAkFtLuCL5-XqB2oZy5dj-Wq0Np3CVudmdZBgFU9K_QD19usHmBexW5Yr62WDcrkLtoHjttPrzDD6BpIXavUlmbi_vyJgPrMuISVYuKoIRnCNVhFtMUZZdDsZuFntSihlTHVOAh9vVw8TKODt3MqgBjWeMgcH3Rw9ys0SBqcUAdGZAckR2cKBsrgStYGTH9v7YEJfP2KmAClLR7XCbrDeWlXwpnKMT8MuyRcqcNObPDzxrlbDmEuh4P5LJKIAxL4g4mBfl2P-Ip-GLmR2nsBULmOnV6Sh1zxkwaEeUGWjkZ7aAOE_jDSwNTfM9iDFcP_G8lC1fcQ1iKXRzX30KRV9F4SxFcFaZZg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112708276946559846754\">K W</a>"] },
            { photoReference: "AWCwydj41zLKbvGppEaL3_pAzpbDnJBqJw6rCMyVUexvApEr0VHx7IOOMbZwSGgfGgP86hgeViEmrsjZxfbzOUeYWANzeKbttW74ASIZgAxV3SiSmD60ueZXQ9GrTkTjkyOILwFPAu1a9Mst894mgYAt--NOF09A6OE4NLfwhMDI7lHKEfGzTzYCiqqD3HfTDob1Dh3FqH89XdS2GP9aIIQrmKjO3ojZBbMWmejfiNvp_eUxieRiAa_J68dt9U_GJCS_lMVSa4l-HTLOaBthNPw61gBMrVeDRYVFsMUp6O61GawlkJFXAY0wVAx-HU4qJ5r9na1OArNyE1ggUxr5Bpos8U888ApTcipvxUuFWxFmp6O3-3ZlOuIbWWf8Nv4VXt7SxxRaz6jimn2hOx0GUTzhoVuTY0BRfBHqDeU-vSEldfSFTU99Of7l-nnbm2M3JkCp", width: 1094, height: 730, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110651983909577500143\">Ahn Hyeyoun</a>"] },
            { photoReference: "AWCwydi7Jt089p1X_c9G1gPEhg2RRpnUUnb7r8sfJsPoYKVq4RjlGiH57W193N7uC1Bpz6tfcXRglSKfgxGdvovaqJsGsYnoeGGKJ4vtkfnAJp6jsG6HafMmfEq9CqfvB-i-fHERucXP7T6RSg_UAGiia611yktmvBpO7RQGfJTtshTz2t2zgJQL7nFxFhwoGix8ToFOt454X93bGlRnmi1rYU8IGwL15b4dVwWlcrzBk5Bpk3gQI5z-vN0jZ-Y7bHIdAntoIHhJ_-yLYGSfH0Tasgrimslp9KQzN-X6Jsdm37hDvDhxagHU4yQI8kCM-3UymT0QSvqn72oNKT-ZozlMU9VwarV6sZoX_ZAyJw0pq8tF_BxucyYTTixOIZ3YqZLp-jOsKKIHLbIaluDg5Ybc7F12qFxaGxSz_yckegl6ZpIl_28", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111667885001023763005\">MY NYS</a>"] }
        ],
        summary: "빅카메라 텐진1호점 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["전자제품, 약품, 면세", "평점 3.8", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2330255254105817357", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%85%EC%B9%B4%EB%A9%94%EB%9D%BC+%ED%85%90%EC%A7%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마리노아시티 후쿠오카": {
        photos: ["/images/fukuoka/info/shopping/marinoa-city-fukuoka.jpg"],
        placeId: "ChIJpz8b5hSUQTURkIF1f8q9TGM",
        placePhotos: [
            { photoReference: "AWCwydjKhbE5ST0pB6HVdoqWOxevLL3kl9UMGchDK3a7ycDb77NSWDbUswlb3QtreWvgZbGMRTTIswDwZq5FMRwhvNCmskGXOZFi8zKdi7FHVkKP9r_LMcC2pLaG68uu4KGvTlQ82bqODgEw-yOHiGjuw36G9Cfi9qTRLsMg3038Aig_jM6o8_aLzJiUyuHzLG59xVZQg54Yd-xr_nQ3deFZcKjLiMHv6L4ZDo2Uz7vk76C3KM7MPzvl5gtkZQKj9ZLLVT2Tw9RodgP7ZbvvNN2-29oiS7Ae6EVnI0joaEQUa4lhxz8LS5kJd4nn3gjWNHLMQwwY7w224yozF0qCZKTMa37V2BQwkcbz_6BwwxAUtOmATJRlwxlTaEa6JCIoPfuNkGqxPus21qduoANBHeCh6FdfDDLaiR1qg2Yauf-redT3sy6O", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101485163935341846339\">Eiji Kondou</a>"] },
            { photoReference: "AWCwydh3JPLTRjiYeGznfcFqVxRsyCk3UzzuRAkaY74Ujoqsn9CWQFyWG4lpVJf1GNoTxEtO6iXYRfpgL4leFDF9rYNDeEveFycOsv2S0-RjO-YWUQTLGBHV7DQ6oFmAcCXxFza14LI7oSwyswPbPgWHXiBysOFkLzxqR6RDvuzH_YwHLVMWBk_7DP1RdQwlpPufkDD4TfWw_glO2ERwZ-MC6oVrRxb5KEeLGCrRJRyCwiYaKvsDwBuUX3c-I43PfeSQzMceFzBDuFt7b2AS8rsrbHPsnZxNQMcmoCb5j-3wL2AtGt3tOjrUURZZQLi12PojXzE4lRaGAOylhCXlht-0pcwa5Mj4QJCarIlg195edaRU6Mvr-SqFFD-S9LgetqmNa1IMx2XKWGflBdp2GfiANojDAvj89MwSezpBoCCOa0Y-Y8ox", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115384791921557616028\">Ryu S.</a>"] },
            { photoReference: "AWCwydhUk-3A5BJpOPixiH3m_l0KHklulqcbpdT1sRRfBmjM4pjSu_FvzZR2q6ObGovl3HjweA6B8ESmNmTKEKbouyA9Ow79bxrQNkHIF8-5MBpkc0dvYNcHtIuV_HRwn-p6-UhK69i5VSj6dbJrGhvrb7NhZuueQLlV7R3SED3MkVhulq8blFDsqQPwT_mFfJVQHuVwTB4n3cubwI9nQvPB675ZUm8T8Df--MQ7XanU8HtgcCmBCXZBhvODAE2BmZC0EuByyehDQj0w0ZLRHOhVCfhTT_npc8yMCADlzHeodabJoopNTJYdhAi3YklYIHENLiTpx01NRD-YrBNHrHcnlCXKkZtkbs9OHVJ1Sch9R8YD3ORlgoJoRPc29O2GdtRqsT40xxhW6ykUKTGmc4uSQC7zNbIo0mTpOS8PyiZv8zH8OA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110372297078188535950\">Lisianthus Kwon</a>"] },
            { photoReference: "AWCwydjk49cwalrNTfXv7TbbHYt5PqM-gzwyYb3DEgu_jRfwsCClqqQ0F92ItcZ8UHhK4Yxu6XryZuAykSune_g7uqrXAW1lWQKirfsSa14EKUMQsHCka3SLQf2ftqT4I5CbDoSsQsm6MCsk_EeLwkzemAbqN5a0Uq0IUzb9ZJ2e0AYKfCzuGOW5L4IUadIo_P7J8Ju2XzWlevc8KkFYV6aqXDrH_IR0moBoKC_RkbiaFEI3xjmYxPiOIlqe9pT0GWGk55CSnFW_2vkfgnhzjAuYHwYg7gN_3QUUTigylVXJB9uI2QjWpAT4FVa--tilt4ImJ7b19haRXgKbQkF_fLXwWKZIjqIQINC1t6p_4MbqpHLyT3e9SEyudEE1yCvESR0f7h9c6wU4Fw7Gx7X2FnLc8uNz44D6Z8pfNyKowpSM3bh1lFtY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106347634157089639534\">lim jihyung</a>"] },
            { photoReference: "AWCwydjDGDykzFfKf--F4E0jdtoq-sRg9_tebAjkcrszqQIYSwEpulTVV4yyYlMFp5JM290J5jXaRr3jSaCpuRLGmRnIFUVzSuO39QpWJGkJ9RMQPPJDCesfV2Jiw08UzRHVnD_Y3lChJpjEaMW7ItwSzzj6HsXxGjv-D1zp43fD5MWRz0EODUvbvVyGtgA_kt5Nsh1g0hs4FabC376Mr1-IVtdnPIpnIcjme-8a0rhzSe0e7y0SMEG-hxrFbxgRGmjuUUL_QlU_84I0RUldDAls8KA36WBbS0DlSXDSC1ZVq_jIKhSKj4K11nx93s5QqnboFOMPZTpJtqchIcRfXQRsHSef4SFRtgOsNvo2KPMHFb5TOb-xf-ED_Ibf8FiQvHeyAOW5LFM9csNUg2Wb0P4QZoDTLOaM8reHEB0vUWulWXkGHw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111150188905353802633\">Sean Lam</a>"] }
        ],
        summary: "마리노아시티 후쿠오카 (Marinoa City Fukuoka) 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["아울렛 쇼핑, 항구 전망", "평점 3.9", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7155302585404326288", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A6%AC%EB%85%B8%EC%95%84%EC%8B%9C%ED%8B%B0+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라라포트 후쿠오카": {
        photos: ["/images/fukuoka/info/shopping/lalaport-fukuoka.jpg"],
        placeId: "ChIJEdlnmueRQTURANHkHiY3d-U",
        placePhotos: [
            { photoReference: "AWCwydjhAahE-q0rIfygn583YC2EMQoh45ISQoV4Szi8xOvOe1Lygp8Qj043xwtHGNTdj8TNh59VBruVMVrEAdn6TkZmazapftYkEzlseHb5ITjNnqIE_B3PbjO6R2yMTORJyzF1p99Xjpdit1Ig8hXuozf5MyT_9wXi6CHjKcr9uaFmWZo7n4ezC3bh2MbbWXOOZOMQZ3R9HRpNtSwPD9S2gbUvonH2Yu0Oyyj22RCtywyvLmg8cBUeegj6M63wkPPGfTIxDN2VDGutdite3VCRIKSesc7K3reO9NsVDceKY8wBaiV3_4_JDP3LH9Wjg-BtNJd6kly06U2jhW4Jh5eWj83EeHT_KOxXkHOVOF8VBEq-kRHdg4kbQChCMiRO-x6jJPYh4mJaPIZf9ZwRTs-a4IvUtLC-v8udLjqA9gDIXQoR6y4", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101681164755352778011\">Masahiro YAMATO</a>"] },
            { photoReference: "AWCwydi19_QOSinJ_g2JS01dai97ckcZ0YKMkCKIv6GSWvubPKOJ9MkvhtvH-d6l9HEZdo5-nSh5LF0shHNhAXABnTnyHLgBim28S-dtN4bOVAwasx2hYbfim4IzZKWXMqklnJ1ZV9zccw6CliLr_noDf2uP4ziH_nL2-HBJGqYQwexIhN4ty9nlvvrXjlwW47XZrwJkUUUhjCDG8P91zzCJE8zVFRfv_Vd1OlDsMIhg0pvCLVLFwCf_I2Lkn2p0MTQhkRJjjvKyYHelipPnAxx8A5UyivVdq_xtDAWz8ivCQw5pMFWO1k_SlJCdQ02okGNBdrnxFf64tr8FPlSGRt2dB7iSslYof1uH62-qTGXkRYTS24tcvZQgmsZdArrSfxJMjch6PUMQOy1Csk0VZb_u5m5qYH9GdzlgdnhJ7geBUEq0aEgXQMeyKFxDZpZVU1rb", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105583016190243990955\">Raymond L</a>"] },
            { photoReference: "AWCwydj16MLNkH_nY0IAbZi7luLHbsfT7t5GabwXX8w-puEXAxUPIik7fqMpqtXB5Bk1la58SiddD29jfu_TqezczaWoKgM2pgSXI0ixDUVFOmTs0K9wBcstZ331-5rs-QutK_q7y2LBIwNhnpxL8fI6_sVYMo-KFTIqOWmHMtiDWcimLCuFxRVU7NZjIWVL5U5KZb4ub58bZSRC41iex3P2FoXozHZ8KLFcDzgrlKyxtqV5EU1KNyceGvZjMD9o4Nx8VuQXhZdU6moPJUa8e9W_pR0a56GuDhzYvctbqM0OFJrWll33XvVmIT7WkteML25ZMyWRBfcCNFym0iiITI682dF1j0HtbkTqTtMhSWL0i896MfR4yc7CuPvc_uGLEtxNlNC62fnV3h_DL8WQh2q3392874TOIPiZlI9HHW1Jov2zNA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101607458349991007724\">電擊屋Taiwan Game Show</a>"] },
            { photoReference: "AWCwydhW1ohTn8DTbbwPSxp2s9RMnEFzVQSeqyjDW3jtY1DdZsL2qt1kLa3u2dybzyg-dKuR-nDK-4wKrVhINixt7zydQAzLxQ89et8-NMhBZN1iYNQXxsPr2vP8pDCwfTXx5xz4waMpuOED4v3LLFWWvM5tuGDXwOfCFS4BeOxQNaY6LswsQMX1r6fcaRz91ibxLjJBopZMURPyaYOMvtx53XP7L0qqb_l_DT3-Ctl2TChcu3Pzpql7-Ra-ymAYVt80RhikpOSe5qkQM6WQiSgyU_xwwjIvUM-DT7-rHc8eSlTJy1hM22jWbGZ5BFSVrzj1f19o-PuMY-zZjyJIWrCy-YjPX0fE-c2brpSZc8-O5R-nVcs7foAZ3BHZlQ9f7oBeIX9nAvK3UbOyQWgM2vQIuv9szw8zP-E1a3lONHrYos2Nu3X9", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115010660290198390735\">Charles Everett</a>"] },
            { photoReference: "AWCwydi_z4Jais1nNEH44B-r1Isul0-UpJ3_p8e_QnI_ZgBpm5XtBVJaQThEtLxRHXI8bYKMjNLL07NVPMo-qrU7p0lj-gAkflYnv0d19iNDfJsqPq853NyVXUNG79LQ9AZ_4H_Mf3_jitnLU00XSWpGTQTNeR1qRAAtym1GHHO5V1fAKE27wE7jA8knt1fx76Y4lvxnfzQTT1MqLzl-oyWH4mn4ZMtzjbT_1xHW6o0LR7921lwhg8Z_hP9iCg056Dg8AFuAyWc8vVIOgYIkmBv7UI2uOLUbGZkOip16fiTRjFMl8d2Zwy1Vmp9XqCb6t0G7c7ipYLh1zFVtqLbiMGTTvK1cKL1rw_xSrins4kZZ_f4gC-ZdHdVYUvTC1IrFfSgINXVmQKC1RjpWwlTHk_FI7_HNXvM-Bnb0atPt_is7YOeB9Q", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111997796890112673005\">J. R. shen</a>"] }
        ],
        summary: "라라포트 후쿠오카 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["건담, 가족 쇼핑, 식당가", "평점 4.3", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mitsui-shopping-park.com/lalaport/fukuoka/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16534745193780662528", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%9D%BC%ED%8F%AC%ED%8A%B8+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마크이즈 후쿠오카 모모치": {
        photos: ["/images/fukuoka/info/shopping/mark-is-fukuoka-momochi.jpg"],
        placeId: "ChIJx0YIukySQTURTcj52BPDl3c",
        placePhotos: [
            { photoReference: "AWCwydjAKK42_NWhYJV6vUV07aYwsof-4w7RzTaDLu32DUejONZe_rmXKU5qOpG81cgxANHgRVOXzTatro-KuhxvkGtm6gI4xklPs7aM42TfYWGeT322CDLkghZh0iMHD6Jjz4v5RQdY9gadnBI4UAyvsJXusoVdZvmdPYzu9HAOZIP4eWw0oMFK-3A0YmtVnfFVFywOD64VzpRtn0wm6pdNxvc9JyL7CYv2rNBgS_cG8zpc7EW8_R3y1k5f74rEoFIKP1rhXM5riUQC792OVevgyfirv2S4QwgZCBJja0Emf9f6MJNvaih4WxqjOLLm_cTb90n-zALwKAuoQrU0SyOtwV99VZrKjIJ1lAPe_kQj8-zZaiIXyWjm6I5Nw7JLd4TUu-NMAtLGI9hPeRa2P602WOH_GIIjS0j948O2j_QVVYaWmg", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113876390791561265969\">masa okzk</a>"] },
            { photoReference: "AWCwydhgFB7bL4LiNY4HbmQhXxt0kcl-aRP2IwrHtqFUmXyi3lbO0PNGdpEM8EGmpiCf-0kkSswtGjhoA6BHmcnOiG8gcDQRXKaArCFq-EMomiR14JLmRHdMkGp42qROSGfPr-jcjAImQqgyruOHYyQH53M4_7yv3-zDUu6LammF5lplHbLU6IGX_oHqP7bT8PiprjUNVjBaXLaTp3_sytdNZOw4eU1f8e8qHjvtxEEtWcbYjV_2fPgv_q7mhmuMeY1a1QxyoeEgIDnDAQjSfccXdl4ixvcYpTnDknziVRBj3S0gRsBOZ52xjQcTH1un-eKJb30DmakFHgNajHg27-2lp-4fFhQIy8Zyy91-GrgCninmeKNqUrA5LyDYckYlnsIwc-dZMR4QZVhI5Rqliw5C5t-u0pD3Mmbq_FDoj_uU8JOluJc", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102965630322602198407\">並木企画千早ふるハート</a>"] },
            { photoReference: "AWCwydhZJqwUbRaUhSrF7-SBHcGIJkY6mHi5Je_SmniaCc4is2wz1Lr6J9udl7QhR0S7YaANzYFH0FetymHuxb7b8oG9bgKnJuHt4BhcNh4LrPcwHGWC33SEfNgBDZZnGc641CzvMPG3ncs88-57ade9FIzQnV6BaZc7tfB-cjgo2xdCWOmDeB2-35Hr6DoKrqoHMvETOv1No7H1IEZjPUPHu1STEUGWUfFaph-5aGVzNQoMLUdTQco1izhsyZly1E1f6TzXn9Dc2FkJkTtueNLuqYVxxsu3d1cQinl8x4J3RgnG2T9_cbuM4WE72iYbDrH5yVWAljoYZz5NHESEjzBdDKhiuAxLSHuWOBQrYzzt1egKUjKafqnbSqwG-rkj1WLH70UTA5MAyIcxk5CBomeIATz2nRHu82wJDtoA3uw5hD5ITw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117447991592045367499\">吉</a>"] },
            { photoReference: "AWCwydia10fDIqak0gvbH5VSBstKbuQcwT-rLWa09V4LPno_5zrsFfVU4vaWnRFlG2GS59TNf8sSWaFXKqJWJGU4D0raS_sQsN4K-dqGIIwnxoZcPYXP5Nm3zWjqTvzBNSW3AcVwLhklxCbJh2ph93z8lvzJbi-bAaPPIgTUftkFDu0bOeiwggHpK5ZHnAfE4xO-L8CTB9PY5FQ4_YliCvhK1gE5RD2AYkUiU7UQQZ_2Ln8rEnpJGHlkhfm2nL-sXxTup26QLyjT2_rpCdSaUNPZvzyHdAB2JwPnbD6qncyNlC0DtE2RL9ws7ojDO41F6OsgLYLYWFThQXZrsJT2a3cvV9xkJPolHKaoXY0gUsTA6-K1buSlfx8gaN_yOSUWcQbPsDY0kVHFmhGL3g79qhar0xmdLQPeAEzE_R_jNSSq8UA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110668935140930086263\">張益碩</a>"] },
            { photoReference: "AWCwydj4Ve4ZdkmGLNMRw2esEFLkWJ89xZ51RpGzqEZQamBOK853WqMIz2_8QBI-AUOmJv9rWtyH89MFxpu3_5me5txEAgzt8KW64qU05Pd_xarJ8qDO_NmrRgSxdy9r8UNVQGaoNK0hdvQVArQZK-UAMZv7OtbHTmgeRVxXHpV__Xx2QUHnYsOzxrAVkstVUUFElx_43Q921i6wejQbbAmnEzzPxGn75QyN7uQwjE5MVLsWZ4sCMfivmSEEo6K-QKNgY0sPpculgRSkyzekCSRF4tSL3uqhkZIJBpRABa_xBS0PUKpKUi3IdZji9RpPjAEQPE0NKbgZa1TbwXuT6la14iBCLWmNB7xcyHQhyll0wChkPwH_TG0BzuuBFaZsYUSscNUaJ4PEc_7gTFf9mw1IkEmSebkpVLEjYzunsDgt80qoJypB", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112378511519763303466\">牧野優太</a>"] }
        ],
        summary: "마크이즈 후쿠오카 모모치 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["모모치 쇼핑, 식당, 영화관", "평점 3.9", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.mec-markis.jp/fukuoka-momochi/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8617570902008776781", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%ED%81%AC%EC%9D%B4%EC%A6%88+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%EB%AA%A8%EB%AA%A8%EC%B9%98+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "야나기바시 연합시장": {
        photos: ["/images/fukuoka/info/shopping/yanagibashi-rengo-market-fukuoka.jpg"],
        placeId: "ChIJcRcfs5mRQTUR5D_YhnCAeBQ",
        placePhotos: [
            { photoReference: "AWCwydiDrsa_Rl001XSUOizNUGsz-7L3xfvoafVF-K8DIj1--Iu59Zc6_5s5R5gOPRH3PJ1AnAKUTPfreNKwWMlKjIVBb6qilHYLAsOYV-yD776nZVCTfh2CZTSNAyqbPjxDm4a6Y3haFzco4Lu94315VT3uQ9JJ6Zu9cdC6TTG3sJvSLGqsQmYT1kCIycXPUHCY9r_F_Wyef0WO2TcwGckAIfZJ3uFY4cJ2_HO1KRlt8HDVx_QdSVE3WdAPmGHC_FZrgW3smMfvyKpmRuvr6wQpgkjk6rkhQEinLc_HCWa3DlDWaNCYORsNGzRT1slqrgG4dUu0QbBV2fmvXfrDugMEzTyG3NUht2Pt8eRLkOTq0M5oSqBS-LlxalI1__gvEMT7nMp3hISponpQ19iXHttKVCylFBAhEzM_ch82lxyFVxWEsA", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113379606254854693372\">Pat Chan</a>"] },
            { photoReference: "AWCwydgiDphrSNEnFFqVA_LZRDO5XKJVTK_MK-Y5NRaj_OJ42e16iEa2f_cg6Zr6nuP0iofMNoFzIpz0yNZivYkcjB0uxAt6Lg3Qu6oeSYibY2H_8I_sYa2_QFuTiZT_kYu2V_VOLjikTl5ZkPCiIouklmPQ8jU6m47coMWwVU__AQ8dTYWKXOij6a-xmubQEgjKGRp46Oqz0wYCRAL0yfplg-qbU5FBez_lp9jcnVocibDlNaWRX6f0GNvH3BRl7X5oyHrKnJrZm-XNolmxtwz6efIAgnnwjvNGOlJO4pOO3ZtM2kacR1qCs0hqDv9hN6AL0qBFuyoJs6pP9ZqUdXcLrGhfPjSSXRzZb3BPQ0SXQJQDsRV6qb5zhAtzn_nMBRmhPmNRpwAcbZ12TpFGgE-Xg4sTVCXrkhS1D83DCMMcKDus6hIohF8alj9Gv3s04YSR", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116321449283048005156\">kinu</a>"] },
            { photoReference: "AWCwydixt2IV4UcAJhnFH0TqznfUaEmG7mKgne_QSX72bIGYYqfndPBrQD19oRiJpq6oyjWMjfe3Zalbb99Lax14JaXWBOD1RQPt7_BAL-hdv-XKpGwZ-795YZJ6-YG83LZsWHGYKRi-1IZhNDe86O3AD0vh_Xg4LPflqbBsZoKtVxnMMnTD6Fz4rN592PU-hV6LrRM2FKCC7RVDA6Ey57DQKT-5wX_0guk11NmHcaw44JMSgdiy8Mj2FmEVPrBWl_lFLV3mahISzXvtIDI5zmWDm0W8h9B8pUp5WA_KMvEIcQs0JUF0NNekhdbcCccJdIs2EEFZI6eXsQn5ggEdLmttc_oE-IzaaVOpcQ6Or_K09FW7P7iJ2iVBzXCzvXZp5kRanf4YlQO9-wG0UcehfnL8S48Y7sTXUzM8fwhrm4Dk6WnkhQ", width: 4128, height: 2322, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102043670617545789880\">au wei</a>"] },
            { photoReference: "AWCwydjiUIO9dI_9GeKDyj-TqROp5F7bdglDWVu1m7rzNKeHP-AIDF4TPt60dnaaPZ-byx_4r2bF1Hsje6xtJ2lrEU_Pgd0crNzO3x2D8JEo0ATGGMsx3KJJwUW-repCMh0Ob5eckSt_TpWeQqoRxZJwRamSXUfBgs6uQ5IedpepCjtQt7kOTERR7UVnjNYJFX1XpdQjU4LqBrV1lauiOy9PO7FXXmTXnzR9s943Sr6NPUQTg6GnKcSArl2quXp79l0hjAB85cRtr9pDZ2ckTut_ZRMR_vm3HaE0ZJS1rG8Zf2Ttu7qlNO1geZqyu5oH1bRPGJ1jLnAmUHrAIa56yAwPkglkieb1Er9Wd425Vb0jr2ZDMh299iV538-Cu_c5etz0eOaPzzq3EzWXABoB4kow63R43egwxoRYdDeDYL3n6UA", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108371063178645253029\">Kai Kang</a>"] },
            { photoReference: "AWCwydhTrUPQLE6khs3ZCt0mznAItinOdiomVZfbJkkmzj70w7Ih2EqH_A83wJrAiDYdqjaUB6otM9TttLYDMjtX5pi7JwGZswE_zRq54SbKVzdVYUCgpxa9uammqsWMlS5LL_1RFCFtgdnzLwy5kROe_C1lcLsWScuvtuXGtTq3NYwOTtHAfu_hfC2wVhP_MD3diTPF_wst4xaOCFzxGoOUQ_W59j6CM6Pll5WbkWsvFCJYbzWb4nAGmrTNtVBJ_kFpOtrIE9HVHDfTWUDnWZ6jnCI07FV9yFq41myg4v5deyb8TjgGWlKv56caG5ckr1vV8ZW3ufh_CeKhsT2JAUdRkUHiTZcSOHXZm407ERfq4U41NeFwPKyKjvNiC0Y6IXYNOirFiM35ylSWxSHQHhhWGeQyER2ZonWSvPhVl4xBuBaSfQpO", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112949721972939820160\">宮部徳昭</a>"] }
        ],
        summary: "Yanagibashi Rengo Market 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해산물, 로컬 식재료, 먹거리", "평점 3.8", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 5:00; 화요일: 오전 9:00 ~ 오후 5:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://yanagibashi-rengo.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1475070098750848996", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%BC%EB%82%98%EA%B8%B0%EB%B0%94%EC%8B%9C+%EC%97%B0%ED%95%A9%EC%8B%9C%EC%9E%A5+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "도스 프리미엄 아울렛": {
        photos: ["/images/fukuoka/info/shopping/tosu-premium-outlets-fukuoka.jpg"],
        placeId: "ChIJy6voaIqiQTUR33p6zJZJmMc",
        placePhotos: [
            { photoReference: "AWCwydgsWKh72YztYGUpOqGoCNzfyMQjBC5yQTP1OFnJI9kPvysO6lYqfQFtRLDQBlGdOco46cuvnvGKp9eSWLLR-2Pi7CR7p8mNZeoXpFGyxe39303GjdHWNopVUVIjrUXARE_J4UnrkqIBCGms_5VrKRu1ZklTq_srSEACMRga6H9HMotTQif9lBIIlKuAA3-7TbSepAGkGY2cOEI9u3mh5B6vk9Px4txPKWREybHgBkUYoDUlb-YVFkhWOOVYzmuQx6ur_a5c33JCZTwLHSfmTxDv01V1pBQUmOy2lEjGj1lGUbqRtOWLjaIN3RsJOoaEaBul52FHOx85u5jTCd6gsQTSs2hrSlLmsk8B2XC9Gqh9Mxv-QAxeVgUWQqgpHRitGUoH2127SCeA0LiEs-mkuL_4bGJmqTJQO9YdAHUhoEkI-VkU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108748388374522117855\">田島正彦</a>"] },
            { photoReference: "AWCwydiil5xqQUuT-wmUUOk_S2xGUq84hoJAbL21F-J8g8nR5oOdSxgZ2hsQOd_tI5aDdRvRf_iqQGh1hYf2qoCDsZrZ3-MSeSoU3ffym31K81svB3IyPzDUXE7wocslTwmCFl5SlItpIevjmpTAmjomCtTMeYGqhkKf0FvWxf-e91QaU2mGK7WPdOwBD60YQ7gB5tsIMxcdO8pMZAhNi1R7pFa56nhnlm9na0jEU_g0Zbjrt0hle1EjhzKJ6URuOGaFzkM3dBk9fSLC-WC9WGiDjhLRA1PwQXVm8vRWb-3RMUwS29E0cvU8caeC6TjXkNqGHTnhwUJAXu1kXRsRwUVmj-dj9Nv28ErF-xUyzEKzOJj9kE6K57NLat9jUs7JMRjP31bc-2UkCxedQ9XC11sNZHLYodXu-uA4EDFwoQZTDYMuUeZS-Mg25zITm9hLooGD", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108234776820735219483\">和田辰也</a>"] },
            { photoReference: "AWCwydjGgsLMu9njZeizKPk8uz9qphJTFFD4sLTIaHuMPl3R6mRNB1-FSY13NK6G9O6gcT_gkKWJmFV2jjryAEyLspOyY2ciGiEWAtq9xOcIg6TSjJzmdogjqKSRtPD5UX674i4Pdy0IT-ZnrBiGPpIlPtwEGbuvFrj7bgriIdnf3Y2WpPxsTBZkjxKUZnWcG0ehTHK1S_JryodyVJdNl3uqbDnLmMYtE-eunOhxSmQ0V-SGwJQA-wRzR9XVCP6qxx3SHJWaUTiRa8Lb-gvm9pKNlfZPn7Iu_Cy26dJ1uN0RyzIx6XHYdHGBgSkftnRggm-1bWRfvbMHx1bD3dnEkE0u0Y8DMFzlpRS3SGyYuyvMYZ0UseDiTHENV4tXd3QY_tOEpD1Hx_NA4nhhYeNRyab4hFIw_dRpo-g_Nyq3ATCbaE_TnrY", width: 2976, height: 2976, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117329144652453069718\">Alexabeth L</a>"] },
            { photoReference: "AWCwydjO4hrWHMqOsbtl2ocT9J6Q9VVXUJp0RvuC6sqtLLYGEAs8irECOFQ0VTOXlNAod6LfsRlJSQpIhl4j-GE8QNPC6FaJWs13zxgrmpnwrQdeZ9K9oV9vY7y_IhddNhd_xq3vYzZs1TO2ujQSL8T3J3IHZ0jYXDzhpQvPeoyZPuqjXBN1rYC8lFOJK2MMLLvyTbuLXfvMJyB3LOD2a_rvQVxBP7RcDugqR_oQJAKOPDRkLkx-x-SwxwM7Cmxw7kw3d-Sf9c-PEPa6GhNOWm9U0YJuyLWvZp5p2zVjaeWNcRsZRMphfjnGCFBTenS4qZlZRyRdjSBng46mhDQzCXN0iWA8cJ-pIEhQtjonDDVrPWM9I35eSFeG60EOHEWxptAvQsQveSMXimF9qMobsG3Oc0yI1o5kFJ_7eyYgSAxuvxzzIg", width: 2631, height: 1753, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110131518233259372157\">田中ひろし</a>"] },
            { photoReference: "AWCwydiA4dXd0NL0-TeQbCLnFysqjI8SOAQ7X5PARhf4TZvrN-nxJ5V5E8y_5VOsglM29nqIGD4U0bD3nz_S3ABW5sde8eHNvYXq9LVldCRn1O8atYMqUOMhc9HXI7dS0IYK_CZ4d45sBRFyRu9zVnIV6i2geJcatECltbSEQmgoa84TcIm2mL3Mwoyu-1kxo0o-exRLleNbOtvPfGpGdpuSEyL5QP-YoqGTVYzQOsmXU3PrvHlJ2d6-f70fd0bthAuoqdqsg-ycHPW3K8xjilC0reUEdoCTCqir4YG7JsNWLQn1VmACb9mWJl3_RNBgLDLEAyaCoD47rGNPIGl_l1DdupsKFBaavJLTWmOKAIQO13QB4_pja2aTANQpuRe7jPtLpdc9_XICLbDQYRoiL6vHDO4z24pZKehik8G4VIma392IzPLs", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111057307939155839725\">Kurt Tian</a>"] }
        ],
        summary: "도스 프리미엄 아울렛 기준으로 확인한 후쿠오카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["브랜드 아울렛, 근교 쇼핑", "평점 4", "후쿠오카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.premiumoutlets.co.jp/tosu/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14382326322032179935", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%EC%8A%A4+%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84+%EC%95%84%EC%9A%B8%EB%A0%9B+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "나가하마 선어시장": {
        photos: [],
        placeId: "ChIJU5sMcSeSQTUR35W7J8ZRPhg",
        placePhotos: [
            { photoReference: "AWCwydj1UHltRUPbsJ1IkHKtH72npj3HFwD0sncLZrEBJdUkBE9R7amPw6RqmI8Kae8p8pDWiVqVQ-y77Eix-t90dREOQzfobyBMTr0sBJcYW2m7dPsXqL7Asql4HJUfVcVz4BlCWHujw0dq_ivdGa3ra00S9YZ2DNCoNapH1gZrk5qrGxY6PqJopF48Y5opYqdde8U6RhbiZJ7_0XriNE5RBnvH__JvqZl9XAS5rly2WCm33d5dMVBK27BizukFJmDAdqL0hF44ez9O4kjHJykDIO4cad0IElscywA6XPVArP228IVp7yRPJHVCSthtZXakQDcun9r-Ev03OoIIVO0ww5jdG2jbNEnOAeV5hZy1DURENucYTlAw8tjUK9ILM8IC-rJ5KzZc-sEpl3a5FJ_XHJHFvO4mb0Dx0tYRGEhLZfEktirh", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112703599611022223471\">Bravo Lo</a>"] },
            { photoReference: "AWCwydgaOHSsg7zfGPJ_5RYez6Y1qIvZ3af4b5f5cIPXNpd0_tnw0WAHaW6wZ8xKLgsPj9-OOHhOUsNK3dmXsHdQ7Dzu3nDP5LAW8jVjFWiLeY5_O3zWobP_xtnIzmhS9UOhf3GgMS18iHsBOANJ_d6KDCIYv_epgqlBiGginvXR9L9ZNZH-3ioG7oa7kVttbN4AlJtVV_nSgPtYY7_Gk8Scs_tCBsZORL_ABr1KxyviO__3Ij6NY7RZDXHgjFUMjOqp-Hf0joD2-58sI2_KVI_7lng4X_cRrfGJANHP03dYzZXXFyOvVU_kWlsptjzz82FZGNhYjoRPeTpQwocZqlLa1dsqgQJMSnyECtywerykuk8hp_yaBguy26GGttsKpDZ57bXR7lLyhJGIg88N34nceKL3yZ1Xw7klWSB-H__BDBHrf94", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112703599611022223471\">Bravo Lo</a>"] },
            { photoReference: "AWCwydi2Wn3FabyTaD69zzEEwc7N6VyjpZ6p9A9v_vn4bu7QfU1MVAy5Ph0Zz5mpA2TzYBaDODLPpRGkMBiwfe5Nlasnd_3l7R21BJGTEg8sZi4L8I963tf-SyO81uJqkp6uFGpcd1O0uadLe8XUzF05ZVsz0msZT3C9E6D7osWtw1RZEAkuveV6vKn7iMyCxbwXmhiXqqUL4t3u-sckHsQJd8uLriK6QbN5qC4IFrQ_d1l6SF2OgzApiqmXtjdloV2d4vCSa55ioFtq5sOiCj2uJUhyJxuVK4iUhNxehWt4FrbQDOEskq2NLZwEMs8W4Jg2M6QNcoOSL-75qLFESHNwfaxVbloRDt2AMaUSnvUoZVgDwLCSNuIcvx5hsIORnNNDR3_OS8cj2hPQFAEEqEu3kQZNql1hjM8Yg8V0tlop209DBg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118039776068912487033\">hornist hermann</a>"] },
            { photoReference: "AWCwydh1oF8iH9MI_AutBxP9tjx9Bugbvj7Vc4Sp340PRiKtUu4VBoH3HFGgxJgUnGPNuyUayD3DL9mr-k3vr-3Dw9NWZF0HNzHz40j_ygELcKJMMtTGXtXIKViGdFc4dU8tNQ94duL2z64KFtQSiN4hgTE0GmnyIsHK7qI-71WhRggrLBjnlEiDvJ-SrzsLpu9ObbjswJDfPVkFLemt7pOeJ3wlySJ123GUjLNwaIKbnbrU9NOhXORX4fgyrH1WRF5GNAymWrh6AxbMlXV2ASpuP7KcxHLF4iA6SY4ATgHI_oryTO27eA8sugh8kA5XmSOmyELeY5biUCODo6RxBttWzXZCOdh-RJo12uWXQ5WMJmXC1YbZkazXlb9BaHNEYO0HgOmgA60kPOmN2VAEzIPVBghJBjGy74Gvv_BcavMUjJQ2tiJdL9VJv3ZbVuwvjV4e", width: 2841, height: 3788, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114743769659671188582\">Kelly Crawford</a>"] },
            { photoReference: "AWCwydjJ2Uvpcz9BOylpZYlttR_I9Q-ETFCLnwqEde4SQI79Kv2ba9sTeYexPXfjSMDnGTVM7A7QeE8Ypx_QUvjDWjE64yBeYzaWiJZYuyZ7d2I1DYeRptXrBmgEMGJHeiz3YEzcsfKNrflxkvVvyQcRA6f_H5aG2lWmvr6qoNSZPNUfy8q-uGc8Vh2QDivG96n5AGJfh7jhdSi0EBTwX7eEUzE5md_ojxC6-_QqVwyony1tq5yYkqZSHsLDiYHNC9dsG66U7ERXOil8m23PyFeHS1G98hnDga8-qFIiKoeIXWA9VUsGjIGNSsYWN6lzenN121qTaUH3_z6Bh0IBu2wg2z6D9ZOHjFZaGywx0ZDnXVPC6XwWGbc8utK2c2jl2kYyvzm9z_sVrptf-dXR4_wj2dnBiqZvWGDoOZBsvBPa5tNRLg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100699306344519739930\">Panaya</a>"] }
        ],
        summary: "특정 요일에 열리는 시장 내 식당 이용 가능",
        updatedAt: "2026-08-16",
        highlights: ["식당 이용 가능", "전통 시장 분위기"],
        tips: ["운영 요일을 미리 확인하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 4:30; 화요일: 오전 8:00 ~ 오후 4:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://nagahamafish.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1746923616978310623", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EA%B0%80%ED%95%98%EB%A7%88+%EC%84%A0%EC%96%B4%EC%8B%9C%EC%9E%A5+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "완간 마켓": {
        photos: [],
        placeId: "ChIJ66epvPGRQTURLBMCvukqVmA",
        placePhotos: [
            { photoReference: "AWCwydjBq0NJi6XljSK-VSKFgDuz-mS5e0FWhteTTNGVUZA4tHeOotnN89Z3QbFgtBb2l_ccYNVe6jjZ2rgli2sT8GVuctto0X2SVAh-HMeMmCFGzI6PlE6A_Tr-Px3LUe2HiVosqhJ50O4zIWXfkyQmY8ZCxiwYyXKX5m9s29_NmCYdJPecvaC7zKKiLegmWikTI_Re7ovlj-CCLG0mhfHtMLpsg7p-1IpAKdjGX8dWHSNE7cWDogYhsYEP0RhycREhConiLxUoz_DuMyJrAcY4xcrTfyfQAY8Z5kGUVzDxc93-qkRvbZRKsg7_a7tWhLqEBNTPAWZzAaDo_iIP3NK32RWRKfJ-YMb1hwqxJWmfGzBddIYyCDkXIuZV305tqP8lzE0mkjQIs2cnaSwziqLDcq8rOQxDR6ZigU0LQBjBOM3LVQ", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113797798832573826877\">6 Mafan</a>"] },
            { photoReference: "AWCwydhIb9D8gCSn0rihxT9WT9eRbCgS3p1ZM4yBO7iJHQwV8qw7SafJ6TKALtNq2wNZqPLgeteJqDCp-lpJpdp2WZi3LHY7C7s2c7D3XWzgJsFVd-AKAU5hAnSBWJWF09MGlqBdyfx-GvFd4YdCptWYyzl7zNE7neVbHBfhnttK-UTS-0i5dHxjQAI60hHB_zPmqqEHUg63GZVFuM_WKtZDJu_MvPsQ10mlIqXOtUzeBGMnfvxN1Wzze-JxYdnBn_KAjPF_CNj-GtLi-BOXnKvoC7HNQGCzM7sV-xKlYk6y1A2tU_P6OWMh8KhwabJc-V3smz9nOY8fwPlkKvj3M4kSmsmOlHdua0jp2e2Xk6C2TdqfbJS83nPBHbQvYZq9XEnmC58fgoJxPMRjdhVNmDihMGIAtT_ae4VLYSNiZERCWN0TZQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106051318422277906092\">Kinoko Hinting</a>"] },
            { photoReference: "AWCwydgFzuCSThO-nF2Cqe0NxTEmFcepZSvh-5SB0WeoKe2l_IdzWucRfTpqof8t2GqM0V4xwobFyrbRjRdtT4NxQYcS5bUHMqeKZYvdDy6YqQy2dNMy16dsaZPa6Ym66JCdGJ8b-tTCnXeiB5MCIngVTfmUf57mHbH5v6kknaak14q5jkxIQiIUFeXJvytsvVvtkuZhWjxY2WYaP2eGJzdy7InLgJ6uVo3lcB88FJnBYPE9KV1OHSVFP-0zm1JFzfeRj9edIsszPJ0yJ-FTTRoNkY8JATBFCPayC1b6_k4zWYm7GgA0ZrlvpO90_6IO6duxaGBtcng_PgP6WF_KNbgCUdlhRH6ZTlrVzt8Wi83jE9ihUyrl0WQaNW2L3578o513zmXZwaj7Y8auooLl-w8SRryofY6wjStYHFGine1Z-GxMUg", width: 4032, height: 1960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110209371327267094874\">i_look choi (i_look)</a>"] },
            { photoReference: "AWCwydgzYQQ3OCpO-1cVi08xSIGsEIS49GhPyY1ViT5tYJ9avRSEgTBaEmxt2Kib6kW3WeGwWcYu3ivGT4imJ7W4USSPWReGkqbWb0hWDnDIqey7_4uASwJcc1hWFt2ONhR6theVntCwrKuiQ8F02N4hIrOBEnr07VEXe1d7XZi1SlllbxuBfNfACBKwZwJ4EBwnT7dWVYt-t9iLf67fNDYVAmww9NM3WnR1apW-gvtBTgRU2HR0u8hJGQEWpoHhkHCWukfpvFlnMAyvwDbpm9NbCUkGjiqE17QJtkDelILRSAtbkwoFSqvSRxCBg3JvVfZpKuTVq9E1KAK34mS4UG5sGqKuSbac3olLuzCx-l1t6JKAhqSUqSZSVPpkGjani2qdokWtp9aZgQzt6qqAUfY3yGmLctz4UXhm_KseRwCwOFwAph9F", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106051318422277906092\">Kinoko Hinting</a>"] },
            { photoReference: "AWCwydgyA61nlZqqxgWwUVeHIDmxYqNwm-hXXvPRy-LwySGzM-xvX3VI3MUqsGGNsucKw7U12KaOyIk2b9FXwW8mEnDVs1wEoN4KEgQdlXZYXjwK9ykFtaNL1VgSi1d-RnDwA6Cc51zCvR-Mtpogj9d9z75h_E0z8GFBSGeGR0Bxo0qNC3Mp-01MEXgbxpIcrfRt51BYoiZBXfI6CdzDLh6cBdEHWMAxwt7Cz2be3S2CzGKCU7A13RRl_HA4XPDsn-T7M5R8tX-U_06iGOVdE-G9BF067AqDQKrk9-oS21mns65atnLXOJCPdpTkbs1Hxwy54LFf3i-jQc-atjwoHVGsa5dNAgFPCJRtqjLPNLyFifthKIeoH4liST4ZvFua24aLfoqYhdwbtynkuE5eJ1X_HCvpDuXpK4__mZETmjRRq_ln3QFs", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106051318422277906092\">Kinoko Hinting</a>"] }
        ],
        summary: "다양한 식재료를 저렴하게 판매하는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["저렴한 가격", "다양한 품목"],
        tips: ["좋은 물건을 고르는 안목이 필요합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.baysideplace.jp/shop/shop_wanganichiba.php", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6941783059041751852", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Wangan+Market+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "맥스밸류 익스프레스 하카타기온점": {
        photos: [],
        placeId: "ChIJB-jXZpWRQTURPnoXmTQvQNU",
        placePhotos: [
            { photoReference: "AWCwydgC99Iasi97TUm_divsxXNrLFZ3_uE7tpKFMYEYQFgYo3amE0S4R18IedU78hACeuNT02i_O4ypk3vtdAvlkT1F-EVaBNYHJesSIqH074w4pPDDj0k1Ya4ZEUqLyZSyrEHp5a_4oaOch_m4OAly0kxuKGfLS7MtzOpuEYtJHJT5NKe8quBW-lOWvtbuc1GIIN-8Bc7-sefCwEMKTSY-HPLOfT7V_8eDWMgoge6D2KmzA87NR3GdFyk9HPFHSilqMjef3XplJpfcVto8wDJZzWIbPexC07BDDkSiZnqTUqXXvDrfJi0NDetg7NiJioBExT3ex7ZEXN1fNgXFgxpttYy-A2DwtmUk2PxRWaWcT0-752026nfe3AAmjV1td5ZObw8eZD6RjixkmYxCG2cndTpWIVHlLiGYBkfceaI-Y-pA7mRk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115083389697457935304\">WJ Wang</a>"] },
            { photoReference: "AWCwydglkZIO6nOYUUKsexwFT9pqFOdD0Zr3TI-ZglFSMJSUsDrgYe-w5ENl4mEB7bGZ5l6kilCwUyTJvBWIn1y1W2F5BYXMHYbkTZJBBssMO3kJjxqEEBPGy9gZw8deK9FaxYRfF2Rpdktm_MUnPE4-jDSHj7sa9-tJqvr4W_GMFlCM531seCeSi8_8rI6qKdgsZc57Z-1jjHOBUvmewS4vQqVPWWGoQ1t74b_gIgSz69OyNx51OKDpX8kL-zKuHmJoOq5CnA6OUa-BwTczQs37C4hGl74pzIphViuMK0EIYunMQ84p4fluVyC-o-qnexG6xNkLmMAiz3i-GWcGLxFtXppaIzGAzRrBTrXd9ccNazFcEV_TPCp8Bfz18tAfESW4fRcoHkdRBTZpp0_p1UxAht8YVeD_tr-qQ6VgiJhjhxlOLmM", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100734263610895856830\">ᄋᄋ</a>"] },
            { photoReference: "AWCwydi7ApcSKmOKJPh0bwsbS2rXMsP-mL0i5n-oMG_3Ks9-0L0nQhyUIX1oPnT_Mf99pQAPBUahOq8xI6J-0wTZvH0ccIVpRZC_NGJGXjtksnHu6x_TA9eaZjNg5JPxh3f7EqjNxD9a5388FGnybUDPCodXODFuZCBikyyyo1UN0fInrut_hHB6YGGMaGyoG4bw39JZNKeRYeRVQN_vgP7rVk__a48Y528-I4pfiABm0x0PgwGlgGY_4j8JYAdsh9R7NmNPA6rK_ncAkHwbCKSqCRSuE4cJPIcgwvvJDcIgjYquWBLXSpWKM3xadJGOZHCwzCKlWAUDQhgoBVLGfsJCHgMV6FCgaaex7L5VyGmx2y0tLm14N-kFDf3VZoT7dVWiQnG5nb_68nKCmD_Mto4gLG6xZmXsPXFOdaR3jk6knbSZaA", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102377195429880256103\">RUN Park</a>"] },
            { photoReference: "AWCwydjSlslHRlF73XEkzqFV5Dw6Labca9rWOnlMgwx915fk-_AlePayMmoD8bqu6Y85szML8Nr6q_sBeDsocXMI_szyfy3tu41jcrrHXGXNmEmvPWU3eGYwr8HrNx6ju72keZXa-hM75rjDMRJdXNoT9nj6hkj2sU0Z4NGhaHwJ7Znf9SFfFOIFYnyfdxMRAXdfILSf__LYP9sPZQgozSZHOnAdJEj9TPOl6zw1s0Esio4GfXl4NA8SAy2_ZR2T5JHuy5D0pK0SnEIKjWnHm2Ephq2NY6kyTYABCMIJ5rxr7MmMKXzG464mkBVax3bJ8B7m_dWELjjGV56ad7kKz9L4s9oRiLO7ALEUSX-uQJ48iiCVheuRUAlDl1UvQWFgAZXZrLA2b6NPKfnTDZw7kTteI0IQBVsn6qSUOYfvg5PbGIpA3Q", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108453125391681614354\">Mira Noh</a>"] },
            { photoReference: "AWCwydiGGsAGrLH5YVnqYk_IRyPeBs9Lk_apSwiI37uF-mnUyIeJpNhT_7JZIQWkvoCcNnIUy_fbwfh6xsYk-MUvEOJ51LrNfTTgRCuXBfMLLG6nvxbcn6Lgx7K4a2WY3H9iU9kaGxcMd1PVg4IMcKMVSz-YPBu73T9Ib3NIAC2LAyTLP9zp3i-okYDFBL54r59Yyxk0kC0z0nqZoMeYoVrlJIGMBb7ecqv9l1h0lOCa8O8EJznnEPePRt2SVyUAlPSRiQUHTn0C_0LBw8-LWrd5-ttQIP6ho7eEA8epcGSCdJz7rNgyx7CY25nj_zyClnNhMmIv_1Zkl6FMS7p_mq21sZISvuoF9eof9SWsD3ahyhJu_B7qeeTy1PcfajZk8y91uCMkbQ2m0YqKD2BfWCNTMDcmaSPUXgvZ8aHH7pm_bgio6v8", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111150188905353802633\">Sean Lam</a>"] }
        ],
        summary: "편리한 24시간 영업 매장",
        updatedAt: "2026-08-16",
        highlights: ["24시간 운영", "높은 접근성"],
        tips: ["늦은 시간에도 쇼핑이 가능합니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tenpo.aeon-kyushu.info/maxvalu/detail/mvex-hakatagion", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15366333831541389886", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%A5%EC%8A%A4%EB%B0%B8%EB%A5%98+%EC%9D%B5%EC%8A%A4%ED%94%84%EB%A0%88%EC%8A%A4+%ED%95%98%EC%B9%B4%ED%83%80%EA%B8%B0%EC%98%A8%EC%A0%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "마키이": {
        photos: [],
        placeId: "ChIJRb9jxGSRQTUR2WrdIvNawjc",
        placePhotos: [
            { photoReference: "AWCwydhDLpzX0V962QMwOTSjr0trPAmq5Uhq7TWn3LXyY9Qh2kay7S-6AkdSRuF9smieBQ7hQVzmh8QeqcE8NMT527fRNjafQufuiYernXiA23if8G5ufN_WBNScNH3tmOEqLEwVHqCQdEGaOE7eV1YYC9U42Bc6QTCcV7AcRWIKwKstay9UfEOMAeeApGwLHiusNJITx0VabyOelHb98a-CuRnQs1Xy-uRDNJ_ef1mUl3l41BeD-8kreUcZA8Jt8uzn3pfxWzNKCjMlKJYOo716bFXUWOxQUzYpJ-XglZVGzFS-IEJsOHWS8el2WyalOIVe_Qp91kSN47I4KtBRs0g7KJc-_hVunB58aCPCFjlDUwdXh-lpc0CHNmGMyC2UjVl4334LBJQsgCrbTnM8eRz7jFbuQtIJqquVu0mMakyYN4o1pudj", width: 4032, height: 2269, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103746526608353206521\">マキイ 山荘通り店</a>"] },
            { photoReference: "AWCwydjh3pahxQ8NCmb8uywNvV_0I8c9miogu-EJTj3o3ZEdImALWWhSo9PUH47xxrE7Uf76BhgItzkBUoH965ppPUzufeR_dBoZh4Gc05AYBZUV2LjALJwrmtdrDg84SFZZok61mKhlCLZWfTIDlCqwu9wograzgQ1BlriPbKhCisAs99NO8hNHt41z7V4UOBZ_RBct9HYKRPVIVREXsjNgmaooUw31LFkYrpxMNwW0z0m0TRSzkfcxLbZi_4uYhV7SwVtEVVYlePn5Nxs00FZ2HBynlQzO09HKN-QJLpobpgMsm5Yg7PT4fndTH7UDy3F5HDjDcPIRvMBUzKupCINK5vMtPfSqatq6gyBChnnG3KoM8A0qD9zlNQpQVRe0grko2JHFxJ2wtStH5crz2YmAKXqTdLbUc2MtgCPdDdkCBkOUJQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101924543719260123478\">pionero</a>"] },
            { photoReference: "AWCwydgYOy85rAYokTLj76GFRJgJ15C7-Uf1yYc2EFe-RnvWe4JvInfczXlm4e8atelqtbLj-8LNryZJ9XZXtrj4CDb2sLfQ8937TqngE_FD5XHLuc9RNyp6Qn6N7_3mhtvw5SIFxyHdfybpe861ZshH9RKRk17U7-uGm_zsh2ZMj--SLu1IQASGHSsOn6Wf-I3uC0iwOL_6ut13CZvfbzgFlE979Ytc6ZHfXWdPehifKzJY_W4W-AMp4wg9YHmeCkFbKWXsqB45w_x7vr7gNsAwI0_039J_1zsk0iqITwOFgA8paKz8wfs799jyALzyxNgQsbKGVbhtrFPEw4UZJeV_nsU3Ugh0DpO3wY54eNpoxe-FCAg-RGzoADrCV9nnMsb7eNc5dlgr6U5S9h2arW3gAvnMm4f3scdLeHZwSiYx0IFETw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105856045547108725028\">愛台湾</a>"] },
            { photoReference: "AWCwydgLvzcWu9JTlyriN1yiWjG1thKwUgsVtSvdg1ttzqP6aNhf_TBs938dAPNvuNM6TQzsIm1_0rKE2k-GiRsOJBVQeuZDWW6o8Qrc-Wccke4M5XGIkRkoKeM7ksOaPUgi8Q_ip8lp68OI24vcyW7AU1Xd3M49pLnHpAvAvQzefMYEgVPpZ1Ie9mx7-8hXG4FebxZOvhrU0zmf_2D6ueQP8bEuiMs48z3ZsomvCJGXMURBOIn-EBXUJQB3pSmwXflhj8QPJCcuPtoagQXJnY8KBckFxfP4aGS7tL3pE1yA9JBYL0NvfQrM76CLNZtuBa1r_3RR9SvCWoxQtfabDRKPmbSzKmpDUsL-O5uop43-TmpZ1q4kVwQ0SOm8jR6tqxkzLM7kSFY91GQtr4qidoGMug6h7jFtjKnxcHBbKocQ4LLe6g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105856045547108725028\">愛台湾</a>"] },
            { photoReference: "AWCwydh6curq0vryPon6AsQ9oP0t3LOtgqykoSznBbf8Md4aQbVVmyNdJ5S7-rRVqFOxm8acvoRh8RefrK9p7rJa0WVBXzvTLGEMAC-_oNcSakJfHdYmq89qKxlUnguW5-xHuWbHmA-W0pLHwpU2QsbsCaxS-G09N0DY7mV5kA71e1qPCfts383gxRiEDf1j_tKzJpCtW7unsZj9QSJ7PTgAi97hu63yKQ0ZYw6QGZV5qT5rQ4_ALZDGc0RKIjYpM7PWxp_Bbt8aCZDskEQ9MsVNFbyulQkRdk0kHSz2ysgdYtRL-lD42jYoHv7whTbpl46CtXFPUILGTtEGngxV02D0asYs2teDWokjYxPKnkD6j5UPDDxrYaxJfZh4_9fWZY2pUayh5iWgEExGcfILylxMyjy0iJzUZaMHy6ABfpucDglqS5Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105856045547108725028\">愛台湾</a>"] }
        ],
        summary: "품질 좋은 식재료와 베이커리가 특징인 곳",
        updatedAt: "2026-08-16",
        highlights: ["전 세계의 다양한 식재료", "신선한 베이커리 제품"],
        tips: ["베이커리 구역의 재료 구성을 확인해보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.makii.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4017873817876392665", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=makii+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "로피아 하카타 요도바시": {
        photos: [],
        placeId: "ChIJIRAc-RSRQTURcw03YwonSTA",
        placePhotos: [
            { photoReference: "AWCwydjeAvWAWg9vKrUcFZrLvX24ZR2QhTHOHBax-ORKV9LVpc5tHKc6xr15iwaZWJDAlwDXv_F3jwBnC045XGhHasjImUAwJ2Q8lUTC1V8WPngSZkjjPvq-ROY6Prut11tdii-yRonqeT6uIsQmMKEnvJlbPM_N1RyccZeNKZ2VG4t5K6bLt0Ls0keYxsApGqh0ydnVu4Yq0SvMhAGj9_EqZ3UU5P674AaCmofZiNMpeA1wMSryZc0P-VWahyxhZ5DeSK3FzFlKkP6QsgBBx_DjaOq1sVNVxMgXIP77WGq_hchDSshkhRqXLgTA9H68cCZ_XNYcZqVy-k5T448rkt01zKuQdZs0SE5uQ0CGXGiALCQpVpz5ivxeTaOp1kQwAokQqkju8XbO_QG8ENgemFdRymu5zpZDJnBAAnqmFV6JrG95PkETtXT8H3knJMNvZg", width: 540, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108992374969260260808\">ロピア 博多ヨドバシ店</a>"] },
            { photoReference: "AWCwydgVU-uwABSUSi-8GfUiuaJ4xF_gqf0yOl4kifGJT59hZnBD7l0n5c1iXhm2PtPXsSPGsd2JSw_hJrYWhWuZcL1LofiXugdhAn1RXz1fEnYbAVPrGF_FaV8hVj_dv_AZneGhH_aguUksIK1l4mrRiN3mTQPL_vmWJcTWseJptnSuX48m17mtQizmYabaF0NN0ugl-oQuUyDQmV-lZVZVduks7J6rek0Jtk5ghPUAHNkRCXXDakpRWFIrevWc3siUXVtMQfKEFyOY98aJu78eNy9dTkq_jMagdhchQXHkpTPSnA1DDNRuCkzqvQHrMrLoL9ZLzEQhBvDqQWEhMI2X_d_pH5iusz2geQOHPr6pxM7Uv3j8pJycca3vjwc1CgSgi4Eiaa9RvNAsGnK-NCJZHSOb4ydfk0E4C6FIVQw98_OMt02h", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116792093141291417620\">モリカワタカシ</a>"] },
            { photoReference: "AWCwydhZ-ZdQ7GRegRXM8MqGGjS_dKQACkMcIS_OfuM9pjv6Ff_d3e2aWtQ40Y1I9B8nl2iYaiulUa6b9VuAeJff0f7Bjv1gv56K_VJZFt0KhQSnaS_7qWhCJkp4qcNw6pJP8G2sSFHN3kjAm-KHbfArxGMhhPsr4b5sggDz5jCx-FCckNnZWT3HJysWmzT_lVRlXqQvcc14_vzMYQNNj9km9WkPt8fro26E7BFD-QPizhMBaPJLhFy1XQHHgWKyOMgSLkPlNa-dc7ns-CWuL3DJ-RbpXDli3p-XGTHK6OF4nqkMhk_6FYdGOfmFfu4EhJeG6z9_oQZxvmGfdQ5ASy4qW_3rKko_kyGJ7yLv-TDs-M6K0Jzkk8PgjOpQdJq0Mgw-dF1KmEFORkBcrvawrou1j0Cim5SEqgaE-SHmNqemhCWHoZowtaWO0e8GbnpYXIOu", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112207685412366060093\">Akira</a>"] },
            { photoReference: "AWCwydgwlceR3obl4Sgcxz1K-G0lxCX5MkF9VD1gGALuBIYzYBhPaO1D9gpYkYMTKgk_9HQtmmTMLqr-KsUifHeDqO4lpEbGzwqVX2TnXxQaRvB8KooxWoUG2gqkufU8DYbIN9xxut-7eZSfpITdDDFK4-9ZP9aStMpbMCQ4wVfnuh_UP_N-AYjH8T_-wbO2ILDQ-JRqQZW-9P0RSOqPkEAXkvQLAmffL1ZFERapVtBFSoMuJH2_r51K4JXtntXnOtMSop1hoQvcexTgScpg9eQjy8_FZG1UF9d09973qrCxZHFrqYsMG3GwXVsTnfH_Z6o0vmkWhNg1Xx1ugHSopel6h8AuLSD7yvdmW-x2VtqnCRmlqhAHGqFh04ksBkRZ_Go2KzkVMzNnkAxzmF3ts6dUdqh0y40fYzZ85ZlQbyhoGDA41w", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110477559246490408109\">MICHIO KAWAMURA</a>"] },
            { photoReference: "AWCwydi9VGIgcqMjblHQPC4ImfkTgKIPv8Ah8ss3MeR8vLWoJNVAHaHJv_Rifwpxic41p_Y0f_cpaJSwu76aK_Ds0p3DJ8mVuTLZVsSHeWyA08YwXRXJXpmw3be3wH2NRwGLSGLZ2AgkgFx8TQEjtYASR4g9UzYUqSSORAHOCeM1L7_hGD2MtVAuYhzjGmthNqe0M6v7ybzKIyBS-zQIVBldFm7Z7NQoxqGcp7Qmda81s5E_qGU7QkHoBMvIlmn0KJnLHb1tFs2ueJKnki6D7HU8DugIoTWv7DiLm0dUji2veDdf3GxpcMsKM2PDjZ0EWufINILl4i0WsebaMTR63rR0mwq71eMjSK_SYlovaTlqkn3BnCqgjZf5kz7S8ngrg_PmHOEtrsDCEZQqLFxePwmnTrU-b8AvFUDECtHEhTVLIp0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110477559246490408109\">MICHIO KAWAMURA</a>"] }
        ],
        summary: "신선한 조리 식품과 과일이 매력적인 곳",
        updatedAt: "2026-08-16",
        highlights: ["저렴한 피자와 델리 메뉴", "제철 과일과 신선한 샌드위치"],
        tips: ["오후 8시 이후 할인 상품을 노려보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://lopia.jp/shops/hakatayodobashi", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3479355112688127347", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%ED%94%BC%EC%95%84+%ED%95%98%EC%B9%B4%ED%83%80+%EC%9A%94%EB%8F%84%EB%B0%94%EC%8B%9C+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "푸드웨이 나카스시키코마치점": {
        photos: [],
        placeId: "ChIJ6RbwoZSRQTURJXFnQlVmDRM",
        placePhotos: [
            { photoReference: "AWCwydgRGeyRI5__hwjL7L1WFcxchLuU9bl64-UlpvlZOgZ62dEcFVBQ0CjNOXb4jkjsUfWisHj13M_RoLJvQ1vZzBwl_FzwMSvqIBe9_jHNlQj7V-pvgD_aNTg7uFhiZMB2L74GAg6CvORXwIRYlb7DUAQSLqj3WsSsn6cYAINIVbi6SH9qGb6kLJj8_b1jNbdPYWqhiMHxmDCKfOHYmwlZ-fApbWL454ioZcYlRfFnuBGOCDYSr0V21II5HFHH6GQD1aKkaq97-PDYjiW72t_Ywds8Nz-wbhr6A1LxQ6LcHTJUJcqiK52GOmbKQNt1JaH4pI9wjSF83O4SIYK9Dh_1HtnYjtaCRA3qTvjtKWV5B7IB_y_fgvMfvQ7j5ysG0fcupp7mAJKw0wWuvC10Hxm5uxSzr5FJzIb09f-InMwzpaw_7wZOwqM2ZgPtYqcAMehQ", width: 1589, height: 893, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111171060518356187804\">フードウェイ 中洲食小町店</a>"] },
            { photoReference: "AWCwydirAfo5ZkpQaIcN0IxYY5Jn-wTFAPBFuEMOnPj5479vUlgvs8El8XzNPWia0cNaI9i4jy9doEHarFKeobCRD0Fh-aQYOi8_5G3RESkaNIqjSHdWcvZ6rXddphaDWzIHI9PJD-bBoO7wGqsPx-dpqMr2Yi6qQk1yHHFDXaBh4z3uqnm0UTQKjc49D-XpDNEMQIVXzyYf73g-48E3GTm-3LJXS8CuefcKB05NHygkuVXTGnHcpMohT_JCCRO09s4BTXuDHKEwXB-aK9x31XWLCY5aUZCpJqGc5cY6fHig2id3yXEfOach5DJ_VBLGk-4Bpce4MISieSFBusOad7L-TUlR3NwFyjmuWqMHyEmcM6JH31zfny6eEdlNx2ETuI53qI-_wQ138W1SXHpcCTsZ4yl0XlQLS0VEE-sAF4kpQy-SemPwxUkAJWzLqAwMVg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117173458183589502068\">繼續</a>"] },
            { photoReference: "AWCwydgVjGjK9FSydUey2w-gFQ_9ZqV0sOVJSN_TE1ZYAjyaTXtaJxWqoCrz1QYCNl3jIVr65ZSCGTL9Jhi5BP_lQOic1OAxGOHUajSRviJsMyaLu8Rf2OtniQFHn-8KOiuP1Z6NfXcq1R4xYhvKjh1GlDTNMydxj1Dx9jjf2rtlXdyTokiGbwdHjdb5Z4pc7vVEVcQIvWi1wAgQT-Mo45_AbviIgU0LtrFvF6Ygl2gNEryihrbScBTneo-3i8MRznzajL817HF5EoiHytFJyFpL4TlNNntpTRQf3Ura_OjbSYMPlLnQLxILBEjvo_V6zUTXbpZ1z03nYErzQxmonpylvFLCLYKVBI_vBfHdqQbd_1XUdb8CgLyOJe1M5-ROOhtb5TzekUzAkhAtBkKoASc8fCNudacaFy9H9ZtvfpBA_jCwinFj", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102520042297773116253\">水野雅浩</a>"] },
            { photoReference: "AWCwydhU4oIx3tTIzJ7U2wPsWFMzz8EQXGJ7YJtm0wwYa-rLAmN6RXG9N1tUwjGYqqAaJQt1u1_iC5hFitWEWu_559fkXwqTChdiN9GzbRS54UXR0M5v09BeyJc8Zjelbbia1FRsejrYJ5SNwq_n9JXK3xnBqssBzglBLtJQgRsn0sxLgg2VD9r1YToQa7JkXHXtHgW2nXA-gC8YLhSoh00xKbcpHd2RGZcDciSyWv-xgGCf13TZnBoTRm9dtB-3PfUSsfRyTf3ZbTTzoYzec3tvPbJVq3TfigwjsYRPf2s9J3WZMtccU_g55Lfp2n04qaGGylV_PsCO0xYR7-7IxL2cJFWlWEZ5MO-qiN2nkSerxaMKTKGLTkzJ2xwTWnTQ6V3VN88h7LvbnrZb5RErUx5OXs-5holDtlmE-VEQYKqf0Rn7Rg", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106891487114366572515\">Chen Ourway</a>"] },
            { photoReference: "AWCwydiAvhUGDxBXhqcVz1QNF3vnLnU2aljnxhv1IV5vwJn7Ocv4kYUo5MibmSYEM5uc8uUPz2imum8uZ1nohvcepycnVQea9sLvlUefJJnwWJBoD6YvTcRW_UKXgtxnMCKbqAEqZQL4QSWCykgHEQ7zGgfXiUAWijE02m7vjK1ie9cvO_knXI23KWmVGHq0dQMNr0ank0PFZw_Mhwp2a6tLqiRuBVMrDSzt43awErQmsJ_7k4bg674UNRA59Ix0Io-WUjdr6q5Fvc10gk0gHoE47Nly-1Bt6y0STaxhLZNzIvwmTlBn0bgQOxegNk91kcoOXbedzxI293QfxdNPADy3yoL_LVuFvLpbl0BEGoLKlgrR8zrpIFYXgsFID2Zh4_dLVAzE5nn6eJqbjaww98gnLO893cF9BTrHP6H3NCB8sZRVd9SH", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101972302314615812902\">Kunapot Mick Poontastarn</a>"] }
        ],
        summary: "지하에 위치한 24시간 운영 매장입니다.",
        updatedAt: "2026-08-16",
        highlights: ["24시간 영업", "지하 위치"],
        tips: ["지하에 위치해 있으니 찾기 어려울 수 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://store.foodway.co.jp/detail/127/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1372865977790198053", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EB%93%9C%EC%9B%A8%EC%9D%B4+%EB%82%98%EC%B9%B4%EC%8A%A4%EC%8B%9C%ED%82%A4%EC%BD%94%EB%A7%88%EC%B9%98%EC%A0%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "이온 쇼퍼스 후쿠오카": {
        photos: [],
        placeId: "ChIJAQDAzY2RQTURU-jmIPN0ntQ",
        placePhotos: [
            { photoReference: "AWCwydgZ1ibqeXxlagtRhTreyDPAXnPF8u9NwFPItuyUIKxdQYAkb2VgqAWBGU6gxCRSH-Iul88ZKxYZPoBwWsQNg-860pI_rZA2a99XpMEFJDT_vktfMx7ubp1JFfdV1lQwHnv3LrKKNJZn8oeY7i866CtzxldrXizPy0QoqA3nq2vhdW20IZFLBMxPOZWa70DWv-tslubPGD176cFaHP550ObfpXb0FfZDTSAT_VLtLKc5KWL7EWnObgUWVodqErWo_mdVDkrN-Z5L-gHoqTn5vuLzX8kLr2mSIv5hEtoBOp5P2lER7u_MOEsVIMCdryZ8k-Li99F8pmYk6rUpAPonT9vPr-W72RFq39TA2f3B-gNDp4XjLc8VV9K5LLoQffR2w3P4xpo-Z713UZeiDbgN3S-rabC7YjRPitGWveKR64pFSaE", width: 1194, height: 671, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109931676378798940822\">イオンショッパーズ福岡店</a>"] },
            { photoReference: "AWCwydjxPQYA4cAUJM-525hMJvALeWKBa72f4v0qaEEmyHsX2XpdIX0KAzui6gB_1jluX1OtyIqCj0vKuVkFkvvIQ-OzZN3sVWys1-zHLztBwe8nXf-lJOVNI6DW5FkZ85lCjZWXgwm5Jg-RpH_hB_mKs40nbYI14s5Z4r52T_FspN7FWUy0Zoh2FT6raAXMs-pijUj4T3LGyczQVeXX7b2t5KciE6WKDdGI45h_n_QoXayweqLDnSQWMuNah5YOJYbTYSZMfW49xw3W8QnPyHdaraa_v9E-vYrTnH70gKLPX1EFY31z79kezDrUK3M1UOoVoXeRwqFeTbA_RBr9ABhMkzQ_OqMwYL6v0G9ZKDffCwvwTdP3uZcx30iTtBS1j5l50gJmfffUAFDt4nbWklZ6w41fSyHE1dpR3A5TPiKXxAkmGVVvB7MVy2c5-vHl4A", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113993481413733099750\">ニンニクマン</a>"] },
            { photoReference: "AWCwydhtsQwRFtSEOGIAD14XOW0F56XIPEvBVNhpoCUL1fUerOuQgDdi-8653aFzD6TooGWo_DQw1D6FpEimZ5tW9K4z_TL8Je6CWB9gCKUlW-ohKdslVLFQJYs7yDpYw7KMLK7w5qWZchbIVbAKiPP-ClNZEpX9LPDZEzAxdlA4JfVBelvp7aHexE-HkRHxGcwrKfSFvKmwwu5SixoIyfsf150YPVzrjxEEsgJywnBP9HGdbW4gGg91KnzDpEVSa-eCHR8M_A-QG01NjBHNYL_McO2vv5GPEjYzeksjnbNUmeB4uN4dnCB3C1Yhqp4VX17a4Ol0pWnDFkARb8ZoBNleLBVggm79wuK5IzudUmxwEylgJpzKevHVaw0L8y7PLTJltKun3EaB_tunuz99j1Dc0fg114EWWSQ45f1SJh-j65TxQmo", width: 4000, height: 1868, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112846108604028590676\">JinHyo Kim</a>"] },
            { photoReference: "AWCwydh8D3ileJu4L5xmdSPBuInnEde5e-A_q8jY1cEhtD2wIhSTR95yVrGNFDFEO8G7FyrM8SLzaNpKYs7fd6y0UR53dXReAZXqMcwpTY6WJ0Z2cIlZH4fvCI2aEiD9CosbcI87oBYBo05nGRagxR2yEzaZTkRk1MP9aOj4hFgxvoNekiJ-_Jzi8AYtFYtC4wIzaCQsh9FgvfY4EdEMfbYXOuzNI_HbqHEq14rsOwiqTua7lgLBB6m-8Xe9rXwp-mRDLQgMf4IRudwTcxhkkO0n4ZmtqtbmJUrY07_-FioyHQ1OxSn1-YAKLGdCBUnNUHaPoT-rrH6bkRbumO6ec4AZTr8HZYmIJ0139VHhOKUoV7rjzShPT0IQh9A5hIpHnmzD1jWs3jkt-vBUbH0F-wER3dDi4_b3eJeG_bE9_eHCy4IVijaF", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115937121978438877230\">どこでも大佐</a>"] },
            { photoReference: "AWCwydhGP0lRzUJ-EOeA5-pO8pjYl25PuxALgJ5w7cLgvftUFDoIu56mJDLbvd6HShrK5fRKa-bFztdlwvH9I7R2ok5rgkZEF8fcyVtFgJtiFl1V18_3k_kjtammfWS-ozF0A7P_7xwIxol7tKe9koacu5l8A29MpF4avDzRdJymYwobyEM_oBsJL8Qg2KPQrSTWpn8EFIUL1W154qTVNNa3lCQgrgH9Cms1OguO9WvGObNtoD1m_fJA1ywSNN0TZDv3wiJLsG2eVTeUgmpn7hFLP6CdrNAN30z4BUuGOo5PLh-Hi6raGSI2iJCRusXyLhNLqFeWdKQkwtW3sSFp17BsLOkyMoUNtTUnccIiC6BVoJ0UrMy-AhtxCcMpiL4_QyNPQaGHAU6JemgMP4wgx9z16mPQDEhB0fn7gqJCpTV-nTY", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102970594699392376099\">めろらむわさらいよも</a>"] }
        ],
        summary: "다양한 상품을 갖춘 현지 마트입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 상품군", "편리한 접근성"],
        tips: ["쇼핑하기에 매우 좋습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://tenpo.aeon-kyushu.info/detail/shoppers-fukuoka/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15320811569938884691", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Aeon+Shoppers+Fukuoka+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "햐쿠슌칸": {
        photos: [],
        placeId: "ChIJ_1isKJqRQTUR-rpMq3j0NeE",
        placePhotos: [
            { photoReference: "AWCwydh5wdgNOVfAAqoAPqviMo4vG9s1rdtPQGFuOofFOjB4GeLr7FQuMCMiyhIbqdLS3a686_0D2ozZTpwNwY6jlOn4dvlm2SPmrhH3WZ9duBdO-vrTn6Q8JlV-d7vq1k-MEwcdm1TZUoIBuuP844xU7udyEeUOIgOaeNqR62zJFx2QDtfhT96DS9BupnI3AKo6sjqXR4h3vMwAP3DCHtz3SMIFHw9kErrQFI4wC4C-yKdWvt27N3AH-x-v8huxwCpu5UUSnokfiV6f-VXsIT2l796PpZH-C3yiFqH2RPWBdLxM3bYj01jGZ3l1BkNWzrmXSb2UQB_bk0yl-dJJ0lFlwllbs6taEPpqV-KzTDoE1b2-qqFhBbJN-jMIH63fLNvQQq_kPhciGVdJj92u5opnSD95EX_JEXTI1_qod9YwdBuPk7Y", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108393561185617618589\">パンダ</a>"] },
            { photoReference: "AWCwydg5Swblk__akfcmjlpOXedNHw1L_eC2hordSqSDMdd-6V_YUdQUVKcRFZH2C91Or2Byb_Srkpgx_u41CHhft7X1cMGDPqL-Yb--YMVsf0B0Hdxj02o3j-Ek9X3A4_eZttN_OlmyAX0zSJQmFm-1lWu5_yMfUWCofTTUUT5-nMK9G6WEF2NEjW546ShKjCB4FE7iZNy01EqTQ-DHFw9Z6wii1jwce4X9iymg_UXXuvojfHKfA3ZmCL0CHkrFmcoJlbIdYhxLk62b2n6k2S_YbVGUT5jPOXG5Sj5wV-KQdhqgB8Xd5T-RLtN9-IbGE1DhBHqdT3tj3i4pPBA7zWKDSGSFNPxdNnkam5fmSpLC5GFIgWx52o8CkfLP2APE1JEj9jppaAEbj_x3VRPDgGaamtr_HDK0TlYK2Yce3W2mq3xPROY4lcux7D5rI1PFam8B", width: 3537, height: 2652, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117642291194541850058\">Hoosang Lee</a>"] },
            { photoReference: "AWCwydhCU9tBkqjQP7NYEoYWsg2P8MIm1-MsLI8W2035PpCuYxjYcPC-BNAIRDbom5vUFXvUvLNdvjYFrEKx8JZRYcB-Fd8ZS1Ga4_swmZiJCfbMMUjXIBebYbYjN_-VGX3fhJW2kkR0z1ek38iOC56m9uKSRx76cuVBcQDlEuWSvif1yeK6_6zKevGUcsoWsbVGiQg25hqJgtC61aNUfgLZZ9fNa2FLSDIaTW_KBhm1rHi9jODnWR7idxoknmIf7WAiYS7jSClexqFsi3wyfErXgejO5ThgsWcGNklkwSyPYuG4deoSMzskML4ixzMZ2AX4jISLrIunLobM11EXJGtYL9NhmRvV3amlyuformRwOXirNLhb2KH0UatPyV5_VCqd6dFMD547Q2Ev8GEN3BjmKouM-r2Sa1fiwBZjIbJlioAXHKw", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113154005056185461774\">terri blue</a>"] },
            { photoReference: "AWCwydh4MQG6tj2I9tNWKzSIVxTCuCNzQJRZW3kR6iu_MR0yEmipzzaRE1M8Dvreck-_4VjXe3_GPcyu2DIB67aTHNlXqhr1Ic8QwPcm0nKoEQy5KWEVvmrItF0iaaI6CvD5mqYBMqcfOjTm0iRH8L-QcQaytSSP2DawQr6wVOrzz4MN336Ev-310G9ROaIIM45t0oXVmfj_xH4QqLRLFsStSovppe0W6kGUytQT5IdZIG40UtwGI6HeTaaMrKLsl-Znlg0DI8-6lf2L2VzqH7lPX9FrOrrAz-5U3Au8e8lZqK-4gwJlYb_TVbYpdIsb8dt_ADFUYKaMloxO5PrdYenYGRAwu_h7gdBVgKYR_k6K5M2zw1RGusHUwRhLENXqsexYMc5FdYt4K9T4SFLLrwvYQuG-8lQOwrJKEq06AxFM9DWLiQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107749249369250837039\">정해철</a>"] },
            { photoReference: "AWCwydjxsRHPeimAmwkRiXQggYYRIVP5RNa163f7AdO6DDf64k2gP0Q57rHOgkUtpfLqV74a9U5buzNt-5SEl489AEEDWx0f19STyGSwUSx5A33AwHRTiLtU_N6iP6uNZx9MgKfCJKFzaN69kDr-LSsi4E6bposWREbm8ACzBpz6LQad9tOc37WlDUhdy0CIZWoGS1Q2WFDKP4xSaD8S8qKRhJO_LC9Kl5qpZqUCk3maODbgc6b2_kdVyLKUi6xOj2NHKbnm8hU0Wb9bpSiLiCh6pjWaR1IinUUsGiD0c0qcHILCNNwTl6qOb6cVEk1-rSAlZ_n72WBvnmhTVVB05re-EdMVO5qdAgsTVgEHtX5e52YpmkefUztS5HbdvkTkdb58motSUZJ3cb_Km9XLRpqFFzACsN8Tx5_vzuFFCiYra0AhsA", width: 3456, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105272985752864408413\">takafumi oniki</a>"] }
        ],
        summary: "일반적인 식료품 및 생필품 구매가 가능한 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 상품군", "접근성 좋은 위치"],
        tips: ["셀프 계산대 이용 시 주의가 필요합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 9:00; 화요일: 오전 8:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.100shunkan.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16228145631406635770", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Hyaku+Shun+Kan+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "SUNNY슈퍼 와타나베도리점": {
        photos: [],
        placeId: "ChIJ-542bJmRQTURsacRi9RoDpE",
        placePhotos: [
            { photoReference: "AWCwydh2SbxDyPBHdgnZ9UeOl25WaJHAiOKdMNQnHfiXfgXBIuO3fJ9fySCIiR_S_YVz4HhHVq6KgSCx9DkEuX-22Xp8j0mc825c3CHNTIIx6984ntAeMvT_LikN4Vhn_kev6bVDqMnLMUCR4zyI5s0ZxYc07afmwBpw3Cd1TSqesiP2QXZ6I6LmpN2gbxUjaobpnX-91XoOfXGO5IroBmYaUmcHXnXsIDxf-RDl5EHxJRN3jzu133F8LgIdO3NEcKoyWvd0C6lDfncWPoAs-ETB3MdZFKIGHqXEWvxDvNZaw7LtU_HwOYWJsBfgaQ9T1rCwiIwPkgmJcddxlHA8SFN68KJm8IfZ3HvpPVfIcy7DSXjlXd9bDcR6SZCUBAEJZdNwzYyDuShMUPzi-Wg9AfZMNgCknpY0ecBvl0pGEBVEAw3F5utJ", width: 4160, height: 2080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102085647158804507443\">Rod Wong</a>"] },
            { photoReference: "AWCwydhEUipzuu_nbEvSeT9Bf410ucDniGSpkunSg7DWbMvwxmbkMwxO5KMeWuLTNL6XpQF6E951QUH2ZaB-Dwjc2rKCj4Vfgb_z3AepdelbxQnXzXeTD6UikDS9TmTwFUPXtF0FGSyqa7KYRKlITxxL3ply1etNFdWZ168TiKN9N4R6kjZmbxVBcxm_E9HGbp_HgyFzgZM8yuejU3qhIF5gku5t29NMMkJOlx5HuyFmDpHxUVe5zcOl8dv2QW92OOI1MOl48zwqAeYUwx8-1sl6O3g0G46re6i0q7gBLG5LaaruXi4_PGPp7EbQHZnq3G11uR996RPtOgQ2GtFp4Cj_nv38TFfRl4TdbebOblRtjQcSM4UMP6a-vuinbsqivW3hGpvZ5YeHhJHLKEdsfrthhxpQe_tocFbOM01dTnNJweEwjm6E", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107480957467443674344\">Scott Yoon</a>"] },
            { photoReference: "AWCwydi1wmzHe5HgkEpbO9RiM3G7_zseTH58i7D5PwIpzl55W74fhi3-6c_zKVzvA3d9SblFM-tEtVWYxYMGMTmaww-fhwWybYJMWighnm2VC4qEuLJwPrlD0H8fdiXn6_w5suWztTg0eqUq5QoyRvYRErsxZPh1yFmNhc71O13xvWQ18ytB2Cz7zlhb1Sy3Zw_axgNxmFUNk2NUszd-_Z6mJ-OS6akcRaQ2HhqTP4lv5VHCbFEBqtNBee7jpNpQ0v4ZM0mxr3Q3oiKFQMveEdEBLrfFFY6-05bhtlei7yXS0IhpQWcHwmIGHn2NG5mzYmUvVyT-0-lcLzAuhJQCFwS3K6eb9MSdmUHMIgPknCZBLyJUcxUD_B7HvmnxumMcG0_w3b2t3VVW5RKp1WOvqKGacWe6kLKwTMyej3ImkTsmkZQ0zaIY", width: 2592, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107480957467443674344\">Scott Yoon</a>"] },
            { photoReference: "AWCwydg2krKzFgcxPI3eFhSokWMGPu_htZOy0XZomxLmfQ8LX5zicMoodihl-eYZ2IrF3Beh1qVXeT8kmYTFZheRfNFNVMD5OJJEcTb5Gu1u2bmjPXReWe9TkCJ8Ui7h9JeBss_w-isL-b7IJpl81Je7-N7HrKA7zE_2DmhSNdXoabIX1QzpQywdi1SisdmVbj_sA1mcxwSWNpkzaAUSKMxOaQKHgyVdJ7UiF8ZgS14Y-HFqA3bbq26M6lZg2X0C1MHLuV2tfM5-zplsscBNOSgExMHFYaU1RPRzlHMAc7wUMj2awUxEdSkVX9GoQ4h8QBo91CnCQ1EshBlCTMrRG9odSwBPblwRgjxkxWO-DzNGEQyZ7UbweWfgV46b-7fq8AKbo09ZYd7wcIxTRK9es0hNr5grCUKZXca4F0jqHkHDECvTfSU", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106891487114366572515\">Chen Ourway</a>"] },
            { photoReference: "AWCwydjec6zU3h4Kc4dW8eXDEHoSzJi8sUfRoPO8Hm5nvfERsX4gQ5upPdMRPLg3b9hLl46cQ-U3tI531X56LxdoTGinKomBNSro4pgMZ6p_9KiyhdETDYDGzvY8K-f3zmZGKJRHEYXozFWZUXycwTRSHWb-3-a4bTTfPLVa8Wz35Pu6nyEPcEzwHixinttST_ogcKsMfQYPFjUz5K4VUlUPHhWVHs4cQuYO_uZGdE94m_CVz6EpSkDZYRvhaphvUsVE6byCwEjeEB4fAr32iA8esiOdIPrsiAAS3GRQBPr5RLxNRF7S0pCgTpexaQuBkRUADBNnNx74Z8WE6ZFkqxJTG8sQm9YLcK7m02Ye9WqCwT4t_XW_gCePQLRpyfHnBnyOJ3Brc1PV9PSgvvBVCtKwIUjNN4wgGxWjLX9YgovXZv8_kooQ", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107480957467443674344\">Scott Yoon</a>"] }
        ],
        summary: "신선한 과일과 다양한 상품을 판매합니다.",
        updatedAt: "2026-08-16",
        highlights: ["24시간 영업", "신선한 복숭아"],
        tips: ["복숭아를 구매해 보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sunny.izumi.jp/tenpo/watanabedori/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10452407047249045425", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=SUNNY%EC%8A%88%ED%8D%BC+%EC%99%80%ED%83%80%EB%82%98%EB%B2%A0%EB%8F%84%EB%A6%AC%EC%A0%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "니시테쓰 스토어 레가넷 덴진": {
        photos: [],
        placeId: "ChIJ04qgsI-RQTURbdEz8IEX3NM",
        placePhotos: [
            { photoReference: "AWCwydh7cwHv7DnTVxlDfirqQo_Vc_gASJqYx363yleWLMK6dxaNV38VGhuRDhLbM1cBxNsA_O6U0qp5IaCqalkdDzhmrEKgrh6vLlSiaOhCLxKIwv7Nu2_cU-yf-wCWvONRZ_BcrMYzp6lTcYuRubheXnhAonbCE_eNSX_ERUaLNVtAfr_aOTrsPgHOleUaZV3ZmEds8Dzhf-t8VF0clvflysD2op0-COOltZTBxEdRznA7pwCWgsapgY5kOiCp1-wrqgfAm7J3NlioarddcdLogh7fvHX3k35vyjatfoaJ_LGXBk6XfcO_ljCsfhj8ua_6U9-TYa3gRvXSBQMBrInPtQH-4n6Tih9yCyHQW8mOq4qHjVR14sDmBE2SqL9-4m_CvIqsflX7hEq3YrXtWpDzR4wNEQjpLzJZiTRjNeHa8A2lIsqn0wRfKc9-FslUPuSs", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112862414313030593648\">nori964</a>"] },
            { photoReference: "AWCwydjiJ4vauBMIwdJi4DP-najnVs-fCTtZw1f9nuSkHVSLlbIuK8xtX_RLTDV3RIx9mfo_f2_xHk7aOuzFZDsUPrewm4TIEDgvgCuO-y5iPTZLhHl5My6T5UWFUUPYhQ_oHw25gnNIL40uaRBKC3PI-x-3YoSggRI7PZjNxCymtiRcQW4nGj-PLAY9AxwuPLLmuL5mfScdycxmMJObguqmsjPrEpIJAuqDBFDmgzPjaY6U3XFMEehJtmJfw1Rv5AeBMA62wxNdlxjjWPsXHpBZZIox7NLYrjr9AiCG8O8A6I4fwmYFC4tFALhFjfgC47AIb8JPQNoCtAmK7RjdgfwYhL4e8-lpqTgByYEHssJ1UtstlcVa15UbPVwlkLxV-EBfYYCS2lahr9Vc2qTBJouA0DMaZepuuTwPbdd_IqeJbARPeJIN2LkQ2qw9DY8cI5Lv", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110614323767595956973\">賴佳男</a>"] },
            { photoReference: "AWCwydjsOeZ7Au0XvrfFkWjhYfJgqYauqvK8dasbRl7o8hnpW7y5YWhJvQrWOTPVilEb6JOU_A5bavnoBVcFujeX2fbX5Pcsz0svUt4bxj-6toVnKO3oPW1NkFa7dqQts54LseFTJdcv3hvUe857KPeQ0YgL0FAt6oXFfx2wUUxrZot9tysdlIsufKZ_0XQiOV2Wmny8givLfRYECyJNW0rqoNEfnm98plYm8IW4tkCGyhoViPl1aUNJI1CIb3vbl1iiLp8qxqb2i8MG0O9pOStsD_hZscCCM3Y5tYWfdtnBTyPVawQXzQZVXRCyvB_hd1A1UD2-QMXKhODngRboqNVM4VboHJ2yXkWb7ZEmVXbAMQX-3aM2ywMXGVr44hHzd815Y87am_b29tGLZMeHPONw3LEnhOUT2guoRZ0IGoAw7iHaNw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114274354316892095745\">pierre suen</a>"] },
            { photoReference: "AWCwydiizNcvx1ncKUSXyuI3HfEJndSciGQ4-9HAvfLoqbvHnFtb1jEtiKSMH89HNGQEcZE31foRjCVRCurFfhqPrnXAY78LHhcytF0lwzzXip4jg6vbSa6dzqfZlnN_jc7yjwfTFoeomGXG0hzwXLVz5MkmdQZtVs7yzMel08GRh7QacvsNZRSoqK3QkNMnMzRWaAihIp1W_fq4lxMrM4wKIcTrEvX-mOHU3uwXHR57xyTbS3MGxqz8B7OZF8lpY2PSuEmbBlW_KMANSx0ir1e2OkNlXGWyTuNQY9_6sxOt7l5sLVEzwMmaZqfDATg_OQ_-ftJnYr9OxPbu0bNRXuoePtnKtDta3t9RMDO91lWW9GHZaT8b3RJdx99maxMdwhzmzIoNiGQsXSEL3LDy3IsEZ-B_UZPmNeFGh3aHs3qrj6ygHD0", width: 4160, height: 2340, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101236694550429225906\">SEIHOON LEE</a>"] },
            { photoReference: "AWCwydgFPPKfTuhW_prUSxdfK868B7_0yletzk3QBrYgcztYDITen-UFvAny8pT6hUKRk-JtiQckZRQFFT2-XR8y0xZYb2oB1ZsaRKqyJn7rc5EkmfYneb7MbhJGknb_OQIluEc7zOWuYTTc6e66Hj-vpEbqifnyNj3KV1R62EwK5-AX85Cz-V5cK_xEqAakc1cGYEcU-raLHsWigbtz44Z0_-9PiSN4SrJhfrjVGY7TqcTCXd5mW3X1q-Ah9SuhxuSyKb1d_0cDlARDxtpscXIryumkIbLb7B2K2w7j93ayC-opqdiqHJ7lh1cBM6GS3hkOTxcVerl4jY72j8gq6a5VD3vKZjbu6sJHp_EKx7NEvLhvzTY2bEAwcWdnt5eg1z3fk4Q4i0wn7Se5f15A1nKJ0OmCso90OjwS6pw1UJEtNhFiog", width: 1728, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105152192311793671605\">えとうごろう</a>"] }
        ],
        summary: "다양한 상품을 판매하는 지역 마트입니다.",
        updatedAt: "2026-08-16",
        highlights: ["텐진 지역 위치", "긴 영업시간"],
        tips: ["오전 8시부터 오후 11시까지 운영"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://nishitetsu-store.jp/shoplist_chirashi/store037.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15266102683727286637", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%88%EC%8B%9C%ED%85%8C%EC%93%B0+%EC%8A%A4%ED%86%A0%EC%96%B4+%EB%A0%88%EA%B0%80%EB%84%B7+%EB%8D%B4%EC%A7%84+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "유나이티드 애로우즈 아울렛 후쿠오카": {
        photos: [],
        placeId: "ChIJ_dulwYCTQTURSQ6WjHjz2pY",
        placePhotos: [
            { photoReference: "AWCwydj6JWH9gCbCZBH5gx_DUjATRAWGhQz_5V0cwLJQsJRx06JGDlBX_wJn3tSC4RBFgN9-36iQa4kSOtRQLOn1Vzcryy1r7ak86EECQ0Ix9PGDEhBHqDwtAKjxi8PDWPp0qRuUpIgcZqFNIJ_ad4SSNbdQW5cIEcWrB6Q0L-ktwTE90YvlmPpxd5-l5Hfb5rvX-CXKcX3TvldyikUVufoj8Tb1_DQZiLM_BZE4x7rhOjADLhCx_xVVy3_HFz1y2LILfK_qz71_e4aQchPnw7cPTZYPOWCwQEmROoGe8l9_UEehzevgtwLT2DtB9YTRjQqqJZpGYqZ3y1Ofgr7FFv89QAQCU1u4fWTw9BdbpanCqb-qKMrwlbJwxc-g_RrF00CQoErmPwCPnYkL98B1sMsO8bVmTNnOGtivIIYBpibUAewJ3PQ", width: 3264, height: 1568, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105952666750510344725\">M N</a>"] },
            { photoReference: "AWCwydggDJxjvnmGLFLfaKszYjmTGWzYzgBtI3n3PwLeiC4-Py3w8fqG0K75Czjzm7OTjvh5QnFFhDtKIztNZhTwIDg0IWzSg0fFINuhdqMBuYHqNzdn-AT1gHQYUb_PJxLZlFC9V1xbZ6Oy93btSUfUYgxTHWp8wGAcmmiUpLtbpld6yssy8NPSKa-OegRbz1AN6a5-2bbx3hnWbqde7-OUJZZzq23OMTtf8-ETNjt2tmrk97HeUFdv9aoSMub5ISERgalmOjfAwgAToBD7AfQsAz1kv1Uss7wKdLvnBD09a6d7lsmXa2fUoJwAAM7WiS2hkaNXjqZSC5MOfU2h7MsDh07app4_246R1q8XbxJCQbt8Eo7t4RcwG8H9KtBoqZeVwFZRgz68DThRIh2SpJif_UYM3kO6oqHw9kswE5ORFad-7qNQduo3p_eOQ9i7oQkK", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101161845617705721265\">ADITYA INN</a>"] },
            { photoReference: "AWCwydhEKF14LVS1Z1Wf87ImsyryNeT3Qxz1H7mYmuQQ4pbjF_yeZZDW3vZSffj4qzuNPDmczoJv-GRndCdj38Mph-9QRi07iATEn6hWmxUUunQSrLN9ob_PFBi8rTSSgWr3X17BOYK348pSTlt52Il46F6om4LzB--q46eFalbiudUDjrVV0Ubap7_O2yL541aEsckgbLF7b-eI7fF7n8WTgsaTa-hLvg0fWFdX0Am_Dxjx3m0bp6_yVrBTGF0TVRqxwb6OnbxQK6s9epif6Zt0yuitUTrU2n01ccJx0Cx0KRTP4Z5tkHxNORHMWPbA-1EGpCLOU4hlyzog3oA5_HTMmlNbrA-pdvo50wW9gXB3AmsPrbHycKKIP3-hKF-vvKBUXsRiHlddJeTBiLc6FBuA6t7n34oRYU0Bo49uUWcpxtftFw", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101852679322581034645\">Rレオン</a>"] },
            { photoReference: "AWCwydiX6pdPRzac2s6c4HfXowjP7hZNgecLZ-KA7i2NDgApKnEy5DqWgnNkTcbxvcxUox4ZeqtuSGAlHmU2CHauJxrzuDjXZTnyp02bee7hv0v8TjSzmFb2ge049I_M7S-hdpvuOK_1_QUQmDvOhTTDc9l76JkXyf2vWwlE09oUFoFqF_4gCQepnnaff7tG9WXMyuhxQhcLA4T3-xcGfLm3jAReBUBwyaFkX2Rab3aKWYewESdbM7KI-K-l6SEYUZpTdZxFACQWpXTHwhHj5g68yPexByJYDB-ZXEoKFl1q0BuMZGzKSmF_UlmLQNkrx3obSh3qQ9TSIoUs5evZzP5MMtphfzlOZbdzTcs9CCD0sjJdDxnwRrFSwnFhwqiqqPGzdEpxKCrz7rvT3AjDL8gQmXJxYg0PVRyLkrjrkawW-OKk9Q4", width: 1520, height: 2197, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114094556256690068218\">ヤンウェンリー</a>"] },
            { photoReference: "AWCwydhIPXvj3DNS6ONEwMK-udg1l_vh0h6_EbLwPwVNVN1Ix12P0dTnLM0KB2afqwgklYtPZBGXqDIEA8NSR1tqAdt9_Flomp7IFm_vA8fInNpJ35EPDkcIDSyJvZAK02AfPQtGdp0hxbh-nGN0E7hDmhESVo6LHM0VDQ_r8AEgqjBtpIaSvlB6Ac6AYys_4eMfG2SneDT-bkw_pB3_E3i19MXt4OOB_Yv9ZMWFXktec2RvD1BcYJ0SM6BmLxEkcisMU7KcXQZ1aP468GfLaBZHodCJ2G8hcYF7g15wm3AQk3Mk1YVL5kYrwOzD4sLtX_ou2fCanw2n0vrNlVxRzkGCJFCGmzY_txyDvMnRHvsZt0NnKdpGgIACRr4VR3Jk-DfNqMawEkWoUCLzA3yA4d-I2DpiMyMaIkfMym678gYowd4fps5Z", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115609873565243303493\">shark1747 (1982)</a>"] }
        ],
        summary: "다양한 브랜드 제품을 만날 수 있는 쇼핑 공간입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 브랜드 입점", "쇼핑몰 내 편리한 위치"],
        tips: ["쇼핑몰 내 다른 매장과 함께 둘러보기 좋습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://store.united-arrows.co.jp/s/olt/stores/ofo.html?utm_source=gbp&utm_medium=gbp&utm_campaign=store", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10870268349692382793", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=UNITED+ARROWS+LTD.+OUTLET+FUKUOKA+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "후쿠오카국제공항면세점": {
        photos: [],
        placeId: "ChIJ2YxmOEmRQTURJMGLyBQrw5I",
        placePhotos: [
            { photoReference: "AWCwydgEcPGM4_4KQMpYEhjfPukuoO4nl6LJOejLc25rfSy-p9OAMRdzHp3YelKzxMVjIyHlGAWRMshC888z48cM9yYipbytbbt4mpOiSilKFpEwZneRrfUc1jOvKYYRRFN7LXnUO0GgIR_FNEP_zftKiTUjtP4xKqhYeHwwXr4qPjlKmwWvCHsAAdmABjzhGD5VUPe1gEPS_kvpQcIRytZ3Lnel-_BjPCxptFPlmFJV_grgEkV3mdqOQPAVrBclKrjV8jD9Hh9VFBepU8cYb5N2gz5o2a9IlPdP_09qovXVnqnQoY3KyLytt-Zy8ukqP4bxaXHECaQTRewmUWKjVWAqFUG1prh15dyjZGkwWF6t6_tOinAVm-nOo7RdvGtHnwHUAMytYCURwInFQnFuUqvRleCAETcqXRPo1l9pkyawGC4", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113007759601306538553\">gilart “치타델레”</a>"] },
            { photoReference: "AWCwydhtZ3IKr6gsLYaBAwarQmqRi_0azqevq6fnlkFqANsGrisafRWQ7yQb_J4McCO1qOSNg3QeQcZ4w9srsAU91AkW0OaqFwaIZRMt6t3fB55oHSHS109urfBnQbcYzLQW_CuW_G-V9Kr5SvxlMXR69lyqUySvWItDKHSTdW4ri55-QnDa4NcOqqWxvaBfBp0tlcGP-IW22T9yQBz1wFtRXYocOv95oY28CzqN8LapYvbdRDU1qvVRTQCCtyFj2LAPd2bpoLWb1oT5nwjMXDaH2AbFh6Pur8qYDnBoBkiho35RPu3Ok9dq3chA2EbD_bvg1VYnlzWyW8n18f9FF4E6_8LMoNnLv57qsP-weM_hR4JH99Z7YTYynCJZSPrvL9hD6ha3vfS-CagQVU6kwz3AF0Wpa_qo_hEAaDxmtruE9rGAxA", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108530343350278656959\">Northern Dancer</a>"] },
            { photoReference: "AWCwydghPJqRuMWEfQ8GhcgztkMec1api1jvsqLF8Sh_Fw2KfbpWVANaTpecrv16iQmZeIcVnyXqf_kI6c52uED_7wvHzYue1r5nujKbOX1C_r6ZlNBtpNQmy5TGH-F2E8HsXv9K45FtkzZTc3M3NobR9GDWvcEpmMdDbzxkwGfz-vBGQjLjsO1TsYIO4K0vXH5JnXCbQmupvlyc53_i-cUqRwax8gctSO3Kj5WEJDx8dLQx4wzrARRu_WTZIicePKVZnbVIr2sEAohZLu3WKGTNDoTj9zFBlNDEnZ1jsa8wqGg8P7wIAQbefbxDZniujRSYlqdF5syPkvfpbNF6X1XL1LtCd5fiY-x5sKOvjQcen_TcATGpfZJZK5ziJPgRLNxtwBkFn-n2fp_-YY7omid92YKkzs1LMuKmGDSrJHjusO5VCuklHQA6lUpM1Yp53g", width: 782, height: 587, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114217016060425520841\">Agatha Chiu</a>"] },
            { photoReference: "AWCwydgVl5kqjTthcwWXW4fb7n6ac6UzFkoi-4devjprnx5Vz6a8WyMYaBH3jPE4ZHuDMHoC50kMLim891JwdqQdUpVRntptxLHXh2OsqSSWhQ9_HtwCVpY3NURk5MCSGi_QzHXw47zJ7vH1TDDepKwxaH6rMk9H3MMXA2HlOlv1FZI77DoPD7D1c4y7EOLgkifwbXLVT4E0APPdiWyvzcGDWtyXPhbD-vYaqGUVoAoQzUleeubgqWMKjL2foDmKCVj-WzJdgPel_PilAsaWn28mGol8GiUGUmFpJ_HM3z4CNRJT5gNdDth0yt2hpTQdaz7Xx3GU8sPD8YiDMQlVM3GcQs2toBxqT5lmJVujqaR_sjP6LwcZVRGbuEFLzRs344cODzsbHu47fbZpYPcoxR7iY3roZKcqokAg6ZZzZUPixmNM8A", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100760683675272696432\">H3nry</a>"] },
            { photoReference: "AWCwydi3F1D-K2HSLjhDuilmdbuyi3lg0HQaksQkdoalgUX49XOXtZ4_9GjhAKxQoApga2wa4LHxO8YKWJSAjJKkCQ3iD3Lbx3rl_2zOs3daXUs5mhp1zkKgxCS4zMIAh9bpGUYl1OPkgWVH48KaFfshGdzSAtdhp-LaHjjm6X5b0GGztxVRTlx22W5-eeLHyKYT_dzGrl8ZksldwPtMYUVPF3p97mRbYfBz_jRgM_KeYmwSyeLkQZelQ8coa0EQiM7NEF1VMLNwRoTiwrRYT8ytwcboQfw-_NhT3pUmCBXtihduJcDBR782_l6WX0Srwf4LhvVXwKxWayELBJMxRYQsKt90JZGKMqJlaGIMhGGMjHtYGLBbQnIAoalbm9Mlaue7iPhZePQK_-NX2WoURgNVF4SUMyFRhZSwvLeFBs95BoMPMA", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100617497562034774849\">hsiao-ying chen</a>"] }
        ],
        summary: "다양한 지역 특산품을 판매하는 면세점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 지역 특산품", "공항 내 편리한 위치"],
        tips: ["환승 시 주류 구매 시 씰백 사용 여부를 확인하세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 10:00; 화요일: 오전 7:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://dfree.fukuoka-airport.jp/floorguide.php", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10575343718259999012", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4%EA%B5%AD%EC%A0%9C%EA%B3%B5%ED%95%AD%EB%A9%B4%EC%84%B8%EC%A0%90+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "마잉구": {
        photos: [],
        placeId: "ChIJkwiS2seRQTURIJ3omrAIJFk",
        placePhotos: [
            { photoReference: "AWCwydhoUVuLpnlIAP0LvKvMA1261x4m7NU_Dw-SyYkOOEufZtdAr9HfW6ZM0k72R4Cu3qWm7V4cC16PL4SjHobAZiSF-W1tgQU6IfUk51lH_abhH2OVLjzZ5SuqJEs7CSMAT1SAqsNTJdOI2_wyp1RpkxN3DDmwdJZJsJ_NGsE0PD1YAHLpI_kmx1azyuClrUtIxqW5-6RLp7jcpdoysDN9M1K0JhShrHuvj0TkoUSxuCD3ZeLVCi1u9l0emqdRuiJ-qFW8QdsQWcF1d8B1sBYWgxHxmRazcFmnrKz03J4H_mqf9FP2fk87yJi43c_lBirfIae1gO0dmKr-vpFW0gHOACtgxYgtttq6Z2aAJyHHgz_lAPyRquBgAXEW22C51lgwVzS3z6VclDUW3cO2YOorJCf6zkbRFxLy0IOTCEu93kc", width: 2160, height: 2880, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104868239455081945750\">Don Kelone</a>"] },
            { photoReference: "AWCwydjiJbNAMkRNeftsOkdPqz9VzdXk25dr00ZAuWubbLUPh8nCPhbyd0tHvbXx4DwjUNi7tJTVSmhG9wKFFWyl1Fu744A7zMIWA65pyaCgcT8niJ0cFPkLDRVCkAc3RPOMVoorVi2SbCOc7FhI2eHNDr-p-yOZ3BG4kyHY7y2EJnDZabAq6n7rc2J4gIrmuVGfvchKOwTdgGcZlrwLDVewEQd0yvrSwHfg9r8vxS8uZf_KWEuWBlQEan_hYYL-JjXHcO82O4FWeRj9_3Fk4ZEFO5dgjIt2uxvb2HVB7m24U-I3nAdtL1BxOGAlL7G66OtcZH0hg0tOWJ1xBAo95kwAwrTGXl57GZS6PyeVKKIJ5hl_jKDSAATnXA8ZREgFj_ySHqvp-KdFx7-XUOyJplYoBTeGDtjVniATm83R_ZCTYZQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102053171075113128750\">マイング 博多・九州のおみやげ処</a>"] },
            { photoReference: "AWCwydiv_Wv4wuxTLdfzZQATh-L_Pdz9sQ46z7vJMsvjoByvBTZC27e07nwHECjafzKs_qDm1s8MLbUBLQFkZDSJF0lY2taBl-7MZzliwMi1Ogx17p4eXwCpGh6ANqtjlZWcGVz6ALBRvNKKtA-obTz6Xe0JBzHklUEInbRkntCLlVwS2Rms_GZ6m6gn-WID8h9RrwfeFAyO_NFt1hbIyez5_2v0ieXaOk_1USIWNuVBdzGdUafhR5_fMG-GB2_kVRDlxh_gpLlta6dcFsMPK00TahK0Qt-pWeF9hcICHUl8ZxGxxdMFyrXX7bLqC3QzC237tYyFS56XGTJtEgAmrJE6fXHQ3oXJJDSO4Lqmp_1-mtC6PHZaMnmf9ui-JD7zIdmvel3JheR-nqjfKsgICHFzudLYR0w17_yPGSqQW2w55x_O2rX9au1DlEwaUd6X7FWH", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101032624166209632755\">ピックル</a>"] },
            { photoReference: "AWCwydhmuDZpFXFs_l3VetnxYGhTrwjVuCcbPIwDI2gMHODGfszN3pXhtQlqsXc9Yjk9wKMEDfnoVRMPG8YEjTfpFMyKyVsGtShW-Ei8ivXRU_Kl2lK8whHh9-2gcpHseZVS4mNSlTiIa7a7PCB615Gqw5SoBWuwJyoBO_o4bO7_h2gFMGTLe9K9sKuI8AUnbFiKGOMGTvd8_dl4UpLiNkXtyQwydzzPe5StR5ssigcE2o5o3h4bSx21lnpndtMbuMY1xeb2s1jjcWswSVdQ7Ag6dbQDR0Og5eaVNNfMtue5_26NQAK70u-WO5NRceV_CsTre2qMWU_-tthoJ8OV7nEzrlm0T1VVoL06EOmFb0rg3xZF6gUAUNCDCSkluwc_7Pvv3fugkE-ouJ9PuAECtPH67Oq5LlQbGOdXjY_XszH7xtebfuEU", width: 2160, height: 2880, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104868239455081945750\">Don Kelone</a>"] },
            { photoReference: "AWCwydhWRtnbgJYD5W50RhOYCeTiZLFo3PCgTj-Mba6Ff7HJcKF81L6TvzAM2nfyRHlQq-5CjDKxwGHXsiaLcUZ1DRsD1EavzdKj7umPoJ2xvgub-MA1mBFYyFvfJTt0cW0B6aIg4gp1GtIYxZXmHE4OHOE97hGFyuHOLECU5XPo6xHIyOvgiOOJQrcxXIt7zKc3VsqgAE8353bX0jz1HCLvYAYIlYlys3Y7E_H3cqZGy1s19GtGeAKcKD3t0us8g8UBibuY0jJ_e9aTcwZ7r1F5reQ_T28mali0UDvrkgl02U-QkhlLPX1sT5tsvFPZpoePt3S0wE-TRJfIqDFZNk8uenVDyOdeG7dnnXT0URwP5JwE23zuAeqxNEGNUZgpbzlJ5f276kDw5OEpV6RbDJ0yZ_LR1kQBClqdClMLMnPmVSMOyoZv", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113541770483522782587\">WJ J</a>"] }
        ],
        summary: "다양한 기념품을 판매하는 신뢰도 높은 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["높은 리뷰 수", "검색 빈도 높음"],
        tips: ["기념품 구매 시 방문하기 좋습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.ming.or.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6423268523143372064", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EC%9E%89%EA%B5%AC+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 하카타 기프트 숍 캐널시티점": {
        photos: [],
        placeId: "ChIJaxduH76RQTUR5Lq2l3JAbrk",
        placePhotos: [
            { photoReference: "AWCwydjNlIT5xCNYOlbTYnQ4a3pBWUB0KkUMDq-WyqzzHxJhfB6JCTx0AdkXJX5k-_0xRZv6DUL3fXz9F4hlPYTc62JaMNeXWIw04jGOaRO9KMwQKnovrYzrAY3NdzgC4sgi2kJZAn62zNxqPSpZaIc0er5tu37xTEzLWXZwXQKGR_NDUjbhTK1vVA4n7K1LvZNFIihm9FevNO5NEgj32MWvqulvg91oizoVvy-T0f55CyhTLN3Si__ldpBgciw3r2qTYcFpuCx07-tYMd1JRc8IZTBYRToLIzpLJd2ZCMi3qMnVG-Eo0AYlMgxSIwGHKlGAAPHe39UYb9NilAeVweXd4n-CYdZhbf1iKSVo8FwMtlV5TUnzEJKarvxPJYK5r7GObhy8gNpgdE72BSapMVwJYC2CQ3o55FIzNBbKslMaeeqCdroe", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104856352017638145108\">Platinum Guide</a>"] },
            { photoReference: "AWCwydjZE2fmLW1fTX_zNIxmh09FLrzY2WCLKWUXvAupNUs3HJ2FDNJDFQevNmafS714HMeLSz2z0wBb-sG70WTbkRJoQHwpinzogIunQ2CpsqEPKIBVrKiKkjt76tixIO-7ZtLZvKDr1iVDkxJ7HOPHxMOfUBpMQrtq90Eyv-NgcthqwxPUpxuiKHF3a_xvX5wisQ-M9OlUfQd6dsB5fguGGBRkC6V5GPnipyngwQKf9OJqg4UR3uLvu9aOsnZhpZInTATiBe6dwNIBBQPzxbEQ2_m2KCsQXQy10i2HHqF_njQziakF29kOIs342ot7bsCOw24xeQVKxWEYu4bq39xy0Q98NCdyiLKuZf4yQIfoO0zjesxP93epGXRQvWDTjWIZn0vWstcXE_9WEmQ3YXbUuzxnyRDGelg6pn6xl-OTheN6Eg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113827568209532936828\">穂苅万博</a>"] },
            { photoReference: "AWCwydhcGi-9py8b1wY6ajH7y3p5Vo1ttPWRDfzyC4Te9q5nbxCQMPMXag5XGD0leWSSMO8NfG4CnKA6XTcCQ99nTkdnEF2tecu8_OXvz1BCo85CXjS-YEsOZpxq4fMjdqvRgmN08A_go7SwxZLswsFmEiMwjaZMyUf_DNb5ABaAR8KV6GUCjI_vE4K3Q01FV369iBW12yLJ6LxBfYrXc-ROnMeEmVD3nu3-HWWb7Ra6JENGSVIev9by9S3fhqMmfWPFZnsUs-I8cSV2QQiTTA1v45EPdi6qwZUhchWnGxU6cuWtrAjM2KEM__B251PKgWw55BawRejGUUOKZFFM_5VoWtWXbNXj2eKhyncjd_fBGbveJKcJUiKWOWpi1mN9fgdyPeTl8DUB8X73h9VIVojKx95YR8QJ6Mo2YDD493hKmpdMmg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115677606086217220324\">David Wu</a>"] },
            { photoReference: "AWCwydgungQqFpiMzjAZSHi_6DrPc_0jPWxAifdUhGd9q--9oT8jWxuxUE7HyC0kei9msVCrRUsIp0b_RJRtQ69--fmLI0oQ4jI6YwIzcKzYdrNbe5xPBUkBy3_UA5HYpxf-nxxTQIjp6kTZu0WlLON3X4s7EqG38eXlpdTON6kZgBAiGUBXIXxeoC9swI5nwp9a3MgK0LbLkGQRM533ISs0h6bUkgB2N82033mK2Mnx20rqLNbT-_GWuLSS8vFiLav9Q7SkhZ8Rq_K9yTQXNVGn8Q-Eb_dmo8A_UNCKgX2Tp-R0D9738Kbxk0muvYtOllRv62mWyp-UMWQFO7AqYx7gb-XnU0UUPLmHXc99y8LRg2-P57Dm5-mNkwJYS4lrNKyfuWano8SNe58BRJOqLVtdb8ciLjo3vKFcwxQ_y94SEAfnxQ", width: 4160, height: 2080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102085647158804507443\">Rod Wong</a>"] },
            { photoReference: "AWCwydgzngXHnRYtwEeFPc8Fu9_28pcHFnbd0C_W3nTQ2MUNnQxAl3AdrqbZ3CFKksJdjLnWu-fn8VJ1cWdrXuNZ4P_nNVsRd0_sOUa-Nj8gxIF_Ce3KDxB7Pa26QB-OgwXasZmHK1HtajWjXONfAmaWZ6qti4Fl1oF0jiNAiAqTDxga_HjgCcszoFmnHK5SEYikOmi2YUg5vWyRPFZw4lD1yuRoEGfVBjcZx-awVZXiEVV1g8DNeTl5o_CXd-OI_xKrW0dZcgh6Oh2Ow-oKBqYRAx8QIOMS3Nd3Ypg0qvtwUFkYT_pCZHNFjDH-p-jCXgW8qPm5DId65XHRMwvh4o4vgWPR7DD7GYF-Hrjk73Vk29z0kCegVqpPilpZQgmN9B2NcclWnk-jXVuvtCYTpr9yNu5FUJ8auQA7edCvCs1m7JCuIg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116259975314911209908\">jin</a>"] }
        ],
        summary: "규슈 지역의 다양한 기념품을 한곳에서 구매 가능",
        updatedAt: "2026-08-16",
        highlights: ["캐널시티 내 편리한 위치", "다양한 규슈 특산물 보유"],
        tips: ["관광객 방문이 많은 인기 기념품점"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://canalcity.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13361688005370624740", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=The+Hakata+Gift+Shop+%28Canal+City+Hakata+Store%29+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오미야게 혼포 하카타": {
        photos: [],
        placeId: "ChIJl6hudciRQTURs9A9y3Pqt70",
        placePhotos: [
            { photoReference: "AWCwydhvIjBvAiEOknQOt6801jTEM-ahOUl_HwDJBJTMT4FFTaFF6d8LTvt1DXZjrguioGZgLgDK25vA10ZqREdC0lOW--Yy33DqN2WDgIUSZTuwivpF6OyykrSczX-vBUkb7UI58tBQDYiboE08Sog_amStGXAPpybIlRZbJjd2OLR54TPbAB7axMNkHFpbO9fahT7zz6tdhKDHf_i33es9wCgsAF2FH8l5kll7df5U7s7_Vv3GiSU4SqXB47ZRFx2HFBcEj1kgSOPilSISmS-p03zczgJtONddyVwWnKgB0YwVg3-gCmy5s83jJ6raiV7qGb8PD0x5VOGIe5T3IY8Zj3Dure9KWWlA2iD-mclRSyD5dkMV9waQOlO5-YVi4Y8ejpvE_c62dt60FyXpY2BLhEZi9WQlpu67AKJqCZ4a99hIstnF", width: 1064, height: 532, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116098832894269840608\">おみやげ本舗博多</a>"] },
            { photoReference: "AWCwydjd5al1iXSVjiaubRIKmQ1DTpnwcq7_CpdkL3VVkPmaE38JFHnjYYa4Ty9KdcprUuckd4yfqLkC-m-c3LgnLGuvMDP3a9fcx5kFYmUXsHMLgFKwjC_iMIwQgVgTbnFxlT5eHwseNPN8tvwfkwWpocIephK4XhNEHUAeR8xyN7j8zqcamkHe3mU69xFsggk7raBOeZHLE-UvYVZd_deY_HRRRfN0fbeXmpM4rMhEzsR9Sc52nqANpGjx49Y7xcEkf0tnk2yvnSHJt7Vcz3yM_eU0kvk622xkR1SgaJy3ZWqPFEL2ZbOHpHe69bxpCAkGhT-2Tw-eDG4q1z941llqT8arrspRHWiNtKULC1anMMTVogUw7h9MGiilNgrwbJ14Okb5VapKA_iLIR_FwefUKfmfi03Cr_-1EqU0Yp7H1ZOwYjLw", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116491303169272085811\">Yo “クッキー” Ku</a>"] },
            { photoReference: "AWCwydgDC07uJhlAPsT54JMxZWyXpOMMSA_cKA8K52Noq4LmB9JrZIh28KsVbYFpGpbtPR9W3ZK35DpNGQPXngfOKBF-wSpL4naHeHW7JLNmGmEXcMYBhpJz9VxT9OlLuQfdgqZP25rbXEku9Lo9kqEVpFMga74ujoUG6wyWksOOT22ZB5CATBI0AjcTVwDfabeOvpAwjSexlxBZtMyE5gSPFVrJ6TeOt3TqcPAhPzLUpnn8pzswP9-ntyOaRRt_dEgTQNZl9aQ-gN4Vz5Hpxq_0tDDI6dCgD0j9176cNnrd0UB-zFYf7V3clKtgxSAlEol_DUTMzWx6I-ZC0h2PHJbfHQOwohkqdwfmr1DVEUGEDQDoZPqBfXd9CThopx1QiYpR-EQgk2bYZQgwZwd7mXP25RuHKbUwgqd8qPM7K1-A8TYPng", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117033466265778237847\">べる</a>"] },
            { photoReference: "AWCwydjQdrFb5UeHx7AjUoypzbx5LXCVPgT_TG2ZMXfafEKLL3f29ato10zNVSmxH-7eRTwHFjoS2KAfXuU0WXVlOGdwjcLxtMyaOuZtUE_g4rnJZWlW8FnWjC9uMBN39w2vNM-YrvF7vpVnvy8OcSfG_Ai2urEJMdW_bpFgetcPETxoj7pk2kpvqR63Gri7LuhrmJkxxNtz1wTc9DAmRAUEGnG0rcWhgJzNzR2RmCHU9vNqGeP0EjThKCOMLu96WDhxsZZItC1vysvSK8lWhUz1dBkZ8MDbeOUygXUQRqAIMnFYFQbiAQEDPisMpXsXZMTFNRPYdVL6PD1pxorDp2FQKw_xHS5RnxYkq5Q7ici6PGqsdHVF9H6vxLESGyUtZnUp11zGcGa11eYlLAlznVIUJvIMlMheRaglq_OOfU0NNSz67zojYbZIuGz0zrg_TzUc", width: 4156, height: 2774, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116098832894269840608\">おみやげ本舗博多</a>"] },
            { photoReference: "AWCwydi5Hh3oYKgGfnKO7vJRFZV84ZdUwjpf5zlTQ-ALn3-XHRNYsqn5sXi7JJ8tYR6YoOJpF3iAHf7smjbQJr7knV9Q3I0UG63VfT8MS-2Ec_y7yflsRfQIl1vMiwWieJicHOaWbaTNlNOhc00jcurDQh4TqhYExmPxj5Z4dshWIGZksYrWjf1f5ienjQTsvygQPeEC-U1xCELKtRBzo5dgwnxmapmFuXfm4bXRammvCeNX3jZINPeOmSavZzUaj5i0v2TGgALTUEYfHec9UEBnj8K9Mbju5B8MSmUApbbYHGkN889LQ477BWgxoCkLqE-Nyzbrv3rrXSJXntbdrT8D9tST1JbimoZ65GP5Pgu0oiYi5szH6DsxcE49DzE6YPg-ULAU8FcaRkjoqZZkDQ5T4CWsEDKPmvU3Rkg_LsEXB4g", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117504185668401099722\">みかん 女子グルメ・お出かけ</a>"] }
        ],
        summary: "다양한 지역 특산물을 판매하는 하카타 기념품점",
        updatedAt: "2026-08-16",
        highlights: ["후쿠오카현 명물 판매", "다양한 특산품 보유"],
        tips: ["면세 혜택 이용 가능"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 10:00; 화요일: 오전 7:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sn-fukuoka.com/pages/67/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13670652976958394547", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Omiyage+Honpo+Hakata+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 텐진": {
        photos: [],
        placeId: "ChIJ-25qVI6RQTURY_e8bAPtzmc",
        placePhotos: [
            { photoReference: "AWCwydgUsehnShD_SnkIKn7mN10UlKaIvz3DWnf_srSvLM4MeabMn1aw4XGEX8i-Z76xqx_1JxtrRPTU6xeuiBCL534RyKnB8m-7RLXqbJIS6uB2ClDt-Jx4_Y3qLooItfnV0qHHPIyFUr3MDPTLtAF34pTldgeT5P_OZGg5VPilz3AKTG75Dd0Eb9d6fEaUf4wGUmFLr6XkgAB-4phd0F4FHJJ5A2FE_N6NhxD4WHDqh6Vzrxgwh2Eo21kQyW2fcxye3O26mxXbSVuCoAneX4cq39Z5kpMx9hpGcMGY2n8vnzUeU_BdAc4FCre3MJMD3VoAY2r5k9nMvVssjfrmu13fa5ZftG8oEfBRVQPzJrem-YBJn0BsS7giptX7tj5tSKoVV4do5SL08Ih4CEifljvA45zwFz2EmGnldXUMRbvQkSYquw4K", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110662926695167966121\">Daniel Vassallo</a>"] },
            { photoReference: "AWCwydhBRUCJFrfz217GA9TChN1EG4Igc21S2-GRq9AJ50q-LUeSgNgrY42o9J0rSaX5dV5GG5T9EpXmFp-kc9oHDsMHysoIp1cS4iC7K_v8BbLDqbVOSpBrIU9QNFLgbfzgR3R8y3RGWCBnqZfBLy3hUZtHlZX_P8q52xwuY3CDXhtZxLwnHVsQMZFPD91eiY_oT7KpIOrC0iTP-5jw1YvCQO_n1UR-eCRPpHty9DHWK2LsZtaf8yZDYGXsAPUi749lG_elPLVK_5uCplnnEQUwxt-0nnU50_v8NKEOIowoy6kWbF0rDJKun9CJkoq40LuAy0iohe0Pi03eDhbeyBqNBBofnth2svNwVTMToyMTloC7IundA9gR2pEtngjSCYbi20PJ5CzCldQTreoS0AUt67_A7CVBPdmsv3z4hToPXGhmGw", width: 2100, height: 1575, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114409113365681424595\">寝る子</a>"] },
            { photoReference: "AWCwydgOp_qYAb-fSZyuDZhU8AmIl1iRUdW_dfZ1UDl8amSZdWteKOae9bpwyxG6F1puU4E-PLj_dDZmuALEblVtF1q1dhLxu9XG-z3Qrg24jKFW_M6a39VZT5pM8rWzsHkMbPDxJd5eOAHoS7kMt_0kM4ZvkMfr2xeEI9YEiGwJnN0SYyfrFH8E3a3meAp2E_ExzgtekUuvPj678siMzgzI1JRdhjKYOybutjhcTIZCdq_qsjQQaLH8wnJ_L_ionTvCv-rpjLcfHlkRn1datMddKgJSZmqUrb4UBoV_YSwa7J8jRZGJ1zrtCI6bQKqTr7dFCcRPHxCGU2nqOzcF-U4fnJxo09l1FukHufW4ZXCwmKQ4pYnAlbvCsfPUUUhqdCje_6LRiwAG4dYrmgBcKA8cmB9_ryubm31nURGWOZxwFxQ_Dg", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101066773134531246679\">S K</a>"] },
            { photoReference: "AWCwydj2wM8zIcPPTy-ZXOHuTzyAS9G_PvR--w-wtj_eVikVGR1YG5sf9I3oi7EiIYODqbv1XnlwFRAsKFE1Eunp-M8VlrGmuwD3WgKvhh0iEffIY9JOk4yHmZjR0wMlv9AOf41B3xrLbidrIiRxO7xXFVsvGeW83UNa7wdDA79LK0TbYviiIydJEckVU3H3ePnlLGU_h_iISvtnTqXNN-JxASZIMfr7XaLIr-kR9Gqp3IJ5vKoYlgc6SIfgVzqpJyWglaDkYfCo-GDxB0B9mdEzP-0mUqwPeHVssTQj6OndYSTBwAzqaFdjZ_9_UcSJdbL_DrTx8NiWgUscuSljHYbvNxfrPe2dhA53fqrZA7LDRDn05hkGN-nfQMRB2eXItrpu_9ClI0_xAOmZbD4VjeYLLfdM8HzXXYPkXBdp1gowWx_BXyeT8gBDmLWGA8itGQ6P", width: 4000, height: 1844, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107002992323558164244\">gary tsao</a>"] },
            { photoReference: "AWCwydg6Lp9Hmk0PiQsyTU0UPn6I26b-mJCIQjUWUkSFbpUYDEB4mfhI7yvsEr_EJ81PWTCAsnapMAqoLR0fOJuhqr0A1DWDo7xkIFH8xL5M2yYdfCUkndxRDKlWyfQkzbw5uuCj6dLcsWTIUOFv-qzsMSHpEwXXDlCPxBCPMbUOV-3H8XyCMJzYKcD-PNxcYFqTpBd6ycstX3UJ4NmZcgC3bEKTm7pAyzQ5WrW4Wlorw6GwIAJyG3MpTERywK_q_i_InksPBhJAAHeOKzJpSdsR7cLyUmCq6jAUfbqrRx9bZkERmT7EVLIKwyd_U1rihFh9ll-QMZF_2j71PFwCrdwMPXXlEU6V2LK4n1HMePdWx4C8Szhu_eFy8VcLWpRb2N5O6NIUtHM9EpSW5VnqXliMydclGakMgQ3JKR8NGrrvclMyJno", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114409113365681424595\">寝る子</a>"] }
        ],
        summary: "다양한 기념품을 판매하는 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["기념품 판매", "텐진 지역 위치"],
        tips: ["상품 포장 상태를 확인하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:30; 화요일: 오전 10:00 ~ 오후 8:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7480176630073980771", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=THE+%E5%A4%A9%E7%A5%9E+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "리틀 아시아 마켓": {
        photos: [],
        placeId: "ChIJ072K19aRQTUR7iG7GuyYkd0",
        placePhotos: [
            { photoReference: "AWCwydj9HNXnVo0l1qKPiNqFLxxTmASLjZSpJahMmm_pzQpUvWbEoRofY-DPRqxWfO83uwMxECEsgmVKq5l-pRdswG7fd47LJoy0JIGT8whp6e1jJSFUGP1urskKzWs-syQenQI9tAu1AdcdD5GaIlTOkTRMzfDMZAekPanmUXD_bmOvxwcwIULyvsYsMzWuk9vknlSkV04oLD_tlf8wo_XG-DEZFRKqY6iqf4DYdowkw4jr3bZBJvYMttMQqSFwdYZl0CIj_PT562g8G64OEz0ZdWG4kz1zJClK27pb4PpRVlJvr-tvCjfe-Xk-XfbswkBV4MogyMh-alU130turldLSG-4_NVRyAHP43ieX9gyIHoEjZ-LZd1B5jS13LF6oATpzMje8IkIC9t0TthJHmk4X4tm3c9zLp8EfFIIaC4Ka4ZkjiQ", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115401177624004243914\">mumu mumu</a>"] },
            { photoReference: "AWCwydhajLxp1qlGM13Zq4UbKsW6uB6EaJBWY-agNqS8Q9E8W2CWIy2_T_JHv46cIIawj2SB-tT2Hm_uynJml5rGVRvPoLip37af-v7UuoIjkV9GEcLTdFM3Ey_fxeX_xiaAQ9JagBQ9kEffCKZQ889MaSmlaL3ktEmNPL5YbPNB64DNPKsqeR0urna6XA0SodEgSMoPGJmbRATq5Vjn9oPnV_1fINR7U5bcono5VoqIL6b2xdTJKzrQqxU6YpieIwywxKgwi2vb1YYuqXqSu9Nj5do6YJfJLpt-C8tE4obHR3TX-c0uU5dr5JT043wPKOyI3lDnzOE4Ng9amn1cQHppstHUnoH6N8lm5AU9Y7hretuub9AUSviZjSSap6Yxbs1qWMK0A5irNgh9fbdpUAcqewpXN96fWTIDne4rr6PvvWDBVB06", width: 3814, height: 2542, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114503167563660447318\">Yoshinobu Yasutake</a>"] },
            { photoReference: "AWCwydgNjwm1cCKO7YnM1svVGr7NPj-OlAq6HB_cBpkUZ4jF5oZPmpAnWBmOVx0XIYXtTla0DCiXIhniprHsZfNMkFnWQosIhNVogyYrLEqbNu5T9LuscO3dpvg-wGlYwdpc2TGp7OYOIm-F55bNS0iVrXCUcCZ249oSUzDuKts7QPZ9t6IpTFMR_xV3UheA9YD-2qxKKMU__msGy4u3Dk49yJE_Xfkwgo-_Yir9Av1skMpgj9PAbe3by7JW1Ozol9qgFestZ4M6HEApGU3tpXmyvLT1Hj0FbpUdkR3hyPBGrw0g007ozSuDTEIUIBD0P6lEh_596YJymKn3UNtNgPLs0z2Kpllh_aR47si4h87WOhV3saGoEEgT_cBWbvN0n8vrQyFeZIewffdgd7uTl1zl1_U8GGZmZNM9iYTmf7UJYMIwWmVH", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112033333945406131891\">高西由季恵</a>"] },
            { photoReference: "AWCwydjGq9jSMp3Qa56w529jwu6-83kplKJ1pI7RNpNVTm9p-Nz_VSB-jRpVe1Ihq47isWU5w08KzThiIybYZcaVQ5Wy0FtTOAi3nytaosWox8m3jRhzMJOg6EORmotnVH1C1ACGY0XEokxIy40-8zFEwMthZ6x71COZEP_r2iZkfvJdxFe_sezDz-Bi1Djne0ajUfvMbP7vptMzxfRR1XziOvxyINHyn57xNDFlGiMQ1wYxI0dwakBbzFkkx6BZL_w50RFwzmF0WB-4fynHbgYO2hCeEwTjL8WAfjtv0SZllu_zZGm2OHszae5FtWJvZOKALVgIzoH9zkp17X7CaR4Z15NZOsEG5boW7MhKwkdTQrsXF_4ju-IwnxQ2ULSHEr-tiRu0jhAapHKKpJhTS2g0gA-Q8CUokuwIo-1ejFs4YBxDQg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104442684504011166540\">Tetsuya Nakashima</a>"] },
            { photoReference: "AWCwydhk5Wg7i4_eyw019WRN05PJWJ5irKm8Sak9mcsa4mEe98nyT9A-WUjpQ9YitsLW7Eq-Y092D1uUyO-l-GjrDggukjef7XzsvyTb1keoA7bCQXfBALkDUX1NW76o4ojdt8pk8yn2iVz3M-gkKB5MjBkjqCdf1O-cFEUJU8-zGY7gzqwGuUcnXswNQP4iUKHj2UtPpcg5QLIRJhdsd5NSeZlhjIB9puDVyEleHtUqqSOQxJ-r38LYx_9RS29N1vet-sJ3RjLeFNf0uFAaBqRIZsY3D1HABl06WYOTtwpRSYEalDytqBte-hSIs6ZHM60wM4QsaUlLwfnhFUbirKJfcW50zjYXSkMTaDfOifUn6lha0P7ssUmiGLssldfOFwPoog5Ff28EJtXAgabXge-9dFpEWNqZ8vfBm5W-MdgTL7rLc0uy", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102467276790618690259\">ayumi</a>"] }
        ],
        summary: "다양한 반찬과 저렴한 채소를 판매합니다.",
        updatedAt: "2026-08-16",
        highlights: ["신선한 채소", "맛있는 반찬"],
        tips: ["현지 시장의 분위기를 느껴보세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://yoshizukashopping.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15965710293833294318", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%ED%8B%80+%EC%95%84%EC%8B%9C%EC%95%84+%EB%A7%88%EC%BC%93+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "베지후르 스타디움": {
        photos: [],
        placeId: "ChIJfyjDBJWOQTURS6u5xAUnTIQ",
        placePhotos: [
            { photoReference: "AWCwydhuCtYAt7hvE-clQ9-SWL6cEG7hYAtfMYjHQuEPXuSfhfzgm_mdobebeGHdcOyDy_MTqElv0L88l16289ctQm7MUxBLq8mznvIYugmhdj3Adv2UVnviqgWmRQ2dMsS2MbKkiUMGci_Rzd4hcoyZoPwV_Gwt9iBYxCsDegeyIHPW-EGif7cGvTJPK7WsOFczcTt6mbVTDNICB-S77zSIv6vM4LWOcZxKyJFi3qcFd7-EgZC_1ouxOY6uhD7NRBZ796run2392d3rwbawN0vFVfRym91ySObUNS2uwkZzN1tBOP_n0y7tISJltKbZCwMncJbf56blNDNe44Z1KaqxCjiELx_bbfqCtlFYxMvWoVqnlFVE6gj2B4T-wHzLSsqKb_AaahHs9g5EDVu9MCHJQvUeFd7731RcQrc1L36kLcbOKc-f", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109113080642066813532\">幸村幸村</a>"] },
            { photoReference: "AWCwydhpgrvRD65Yf3YUA3LMdI1KI5B4MlkikPvMNHzYP6VX5-77WHvc5EEIY_lx0KVJ9v479HRLEDK9MeL_b_IS7ccj8RaLq_Wq1-ePxkc80353aLjsOz8HbxH074ISX5FXu2PAdsKuuvd42L5go5wzQBLiwjKdNQaqx9JQ4LpyEXExr9f0zcNMTeArgGPQRqGjys54n8WD3Y0t8GH47SSeqV7YVNjrSgVPwOarA7W_jEAXc8vmeDkyfaq2_YtHucyK1Khg3ixg5eLWcxHbNhWNoIJ8c2gb5nazgvUYo2IGrJlhtB8XgbR1MS4HrLh42pw5czVKw5im2hQEh0Q2xOaljvaIKF5o6Op93CuZ7q75Jzc4BlDsM89yIAYCD5DYqSptycV24JACTdtHU2LwkkNVu-gx5WghOzJvwIIR42_wNhM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107936796585307388920\">Christine FU</a>"] },
            { photoReference: "AWCwydi0k0XIFHZiFwLIWdGRr0AwdbNA0NnzZnybLLkc_4dJ4qaiRDtrKPl7nnifp8iEquDsOCTug8lkPb27a7flQHaCXUnxBLQQ0t8Q-gQfUY6NAOrGYFfH36edCRzTOF3Ki3-0724GQ-Sc98TMuaptY-ig_5oXcNq6_hgxw2_2resjJ3xERU3OLkvo1JiXn4NMiHtLC3nP5QDY1vNcevdawv0UF6rj-ZgmYD89GoP052G_MkUWMGC0yr5p6HiHzMLv_fC3aVqaE1Y6WUml_4ruUriD-ONQ3xZtMCUKg3iKtUZCI5FyTYAaJi0jko-5-e1Z3GROetTovVSOz3oF25JINTaYNSJfXgQ0VcBiZkPEQ8f1Cti1W15WZGRMe0dTrAnRLYI13A5VoR8TRy6j_TExKnvkhZEnrBUa1OKAp-HhTFyoiRHUtWUUxG4gjJ1m4w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108029372141617574283\">ゆーやん</a>"] },
            { photoReference: "AWCwydigAs9lNZSb9ff9Zk8tNOurjYYn0XnDXuQXvHrT0W51tzYHDIZ8Ydx9JqKOTobbNqU-xxojuFKlkQ5HDvAatFPkTasO0sLII4RfZFGB3LBfiL9jLpL1vhG0iOZ2loGXmCCU06YCIts7FiOmLVizSygRBG3kfBqMAyk4TCvyLB1Nis8f4tC7wIaJQwo7990UFzl8eYPz0Xpd9w7VnxNe20_UPqEd_ttzUXV3R3VQbmsMsjNjbqPLhID_vOlZj5AKbYYLJdL8hLOtATCTs_0sqhE6w1O0Ho0dMGxgcK3F0kSfbNT_FpFAWYSbBK_Q7UqmPBM5QlyUI9hKiO6ZPnqX1Kpkdx5mIJDkk4auJUIwqXnsuhtm6do3yCDrNHt-vZZi1h_qk4aF4bSZGNHeiFB0mEmwg1VE8ssVfdJyTAIAWgZp1ckxspJ3LOAWIcCaww", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105822396568564564901\">haruka harupapa</a>"] },
            { photoReference: "AWCwydj9jWz3OvW4gkWi1rIvmwObfmXy00kSs2iz_9b6NZUdb2qxZot5c7hlCTiFSk0bL2RyZywHLem-eYlS6WPWHVpT5BOiAKw03sOqagQ3xr7zCuf2XYf1oMJZwhV3xM2sSlV0M47pBA87Sm0LCDuPGPSJho8V0q7an0plXTcDa7F_viJa5zwcZx_z8cAQLwl1TbPsV45wR_EfyBFrLhU4GRobFFrZIC--IYQBEOkuvFA5BDuAIxf9f6GLAl7lDL9fElcQw9ARlKXX9HSYB8bZ9YNvfaaORZkQkM_Ozv5JjwsToBGNm0VWmYtwyvEhtEGGY5NZIlDQC_6i7htkeO6lRizv9c3AFnsRLZNHiwmX7NEXjkLESgqySyCfqJmaBNLNP8i4q3SP1P0MB59wSzXG5C2-s6POb4eoPDaKRi3moK11Wg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104613784476021931507\">Media-Intメディアインターナショナル</a>"] }
        ],
        summary: "현지 분위기를 느낄 수 있는 시장입니다.",
        updatedAt: "2026-08-16",
        highlights: ["현지 식재료", "전통 시장 분위기"],
        tips: ["매월 셋째 주 토요일은 베지풀 감사제 기간입니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오전 12:00; 화요일: 오전 7:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://fdydo.co.jp/islandcity/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9533037416965319499", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%EC%A7%80%ED%9B%84%EB%A5%B4+%EC%8A%A4%ED%83%80%EB%94%94%EC%9B%80+%ED%9B%84%EC%BF%A0%EC%98%A4%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
