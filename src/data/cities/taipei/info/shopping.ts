import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "타이베이 101 몰": {
        photos: ["/images/taipei/info/shopping/taipei-101-mall.jpg"],
        placeId: "ChIJraeA2rarQjQRPBBjyR3RxKw",
        placePhotos: [
            { photoReference: "AWCwydjkvRGRUiddainfqtIUGm8vci46kSrqtBI7WQRHwmp9Jh5uwUEV6QP3uy6nuOFGHqU8u34j3rIZmRZMFOrSzj2KrJZTI9YgqyP9XyUoBNpnwQ9Sl1cvVgjTMkoRqoFObatsV_fgSaeRjCqMjk-InTkqVuJAH5beFrHLdvRVtOxLy0V8GZtSEA9bGHd3ckW-r689X_fQt_2nPRuovk8QIbLPmNydVi3U_T7BHHNHYBrXnbglJQvIJbrvv3U9Cb6mSAxW9RVuVV-xOJb1_GhPL0p2_PO7CbIuoa2ZRw9b5ULNrP3sJg4MpJqBpYg-GmljkYoLjAueG6A6Qny3OlDRwYrARnXEBIMB8GS8Vs7gA4s5cnwjOErFmZ-Ob1NNfKrkCDqDj4AZfbmH6s3P6X4LWAEKYxkPIE1bJlbnXebPwpirrQ", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107345122456042600865\">林家豪</a>"] },
            { photoReference: "AWCwydis2hW2eakAbQ-fnD_BaktTZhravUhmeoBeTEV6Y3qHi1XFJb0ihSdG-HHq3LhQIM3eLUQ7Lv5cDPqT45Q32-jTIAtJ7nQYaBPF6nJz8SCE1ECUWJIxYKDrMMMD0EquR44iCBkQTH3YWazhRoiEt7-Tj6HilChowKcvTiXdbiT2wkM3Z-lWlYUTg2PPma97jFAhkhW8NLJW8XDTy5JkrNi6unVHeiqNWEh4QDNhGhNySXay9aB9BCIB3I_jFb9ejFrVXXC7VingNgJiN4xMvzlTAfH4kiw3UixN4zbmQcKtOyJFW6MOmZkqZBBN7hOSCa19ub27eLERjHlaHLSJ_8DR6QTsHsWmM17xx7D33eYCMyxNz37BocBq_nm2YtxgbBaKxl1bpl9lSVyyVNmLB_LWIv31oPsGf6lDsrQCh-1YIeOHNTO-f4hD83rFrw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106928487619891494365\">S.C</a>"] },
            { photoReference: "AWCwydi4GYrdma3tyRqGsYHscuiqO1c_qod6AeDeNkPiGzkXZPFxCgYnck5rgxaWnP7EKp0_dSRs27deUvT6lueGkvQfAzmYWniiZ28-9fr0KPoJp1iyt4U79Lr9poDjUXX_pIVs6e5DT0HmsJ7HT469SN554dTTiad4dOm3Y3ZK4XVdtvhBOevAYTjSR9eBZc4FppGKna0LR30fAlp57F_BVEAVnojHJp6vvQpTOh6aAVmujD2Mw6Yea0bXv_Gu9KbvOp6zOESoWhwid405IrD1CM5MZQKF6_AQnQ_AtleaLe-atO-q04sBIfDrN1kjPsMSzsJRY5lkvyJ3SPxQTqNBNC0EBh1dFVsLpRQnmveio8Ya3ZrUBBFjUBmwyr4d9Zv0or9JIjgKUFVsnWdxvfzPcpw25lb1dZvv28srqObiN52P_w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113061951865255425349\">小安安</a>"] },
            { photoReference: "AWCwydir0CHYbUJzH-Pfc4cdp_6xvsuzdCYchbGBJlg_dsgfHd2RgjSxP4U0ljOo_7ICoOHbr23N7pDTMQEZPwyRPjF5loPGq9_i9kLu0EKbJfsI78S_iSlNzHiZWEWjx1LpstofgWufXAKpCu01mchYanJrBaCgkfWxmvHw7sfNvP-lSR2NiLMIAKQQtCv6xj6Wz55FE8CMcb28sWdDViWHYrVu8zvCoY45-KNxq39tsPBaKyY4fUnjtp1kR_N3Lc-RC7MGI-HOerlnJIBbK0PbBXg_bJlqc7jRCvRWZniqnNL_0m8Hfbjz3F5nZ8v8lHNdV4ZkjXGTYNxbOr0tGA0_F4mgYc9vOAeDkbXwMJcM4knW9lcW2ixI001YFVc6dmQa3OYnKQg3lU3U23KPUaUu4VZAwY7NJKR_hjiLJanx0gd2Ew", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101582462543436399007\">pony</a>"] },
            { photoReference: "AWCwydhnDy1c4CMrZc3XGXcX_LmB4beXQ04olRVBIHaGP-mZUooUahfAh9gSoXXjovNtfgFRmddHATGrFF5-ktinTotF0oljuBi5gehU3vT4XIMquQi1IiUpfHBluwtvldpLj5SnIm-OahDv1kR0mjo9D13UsIn2xxEjeP2izJGUKvKhs-4q_vbrB-sgXQviqM7r-CDRKEryCcMRl3ngUEKaE3fQOfeqy-eCZClAt160KPST2glzBacurIZDpFtq8aSesP2I61SSM0TdI5C-81jbJoAqFKrpLcMV7DoSXN6_Ml3G1YvkzjuIwo-W-9ll5QVHCfyS20vc3f93aiLvFaFaSGh_7LH2rFM_jrm0L1L-JFxzcJOK6cjr-liFvKWV0Z9_q3bzOqAssvkXlLiHNW9bp2IBp1-YWELf9eh5kyz2iZU6UNbk", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109946720000229134816\">David wang</a>"] }
        ],
        summary: "Taipei 101 Shopping center 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["명품, 전망대 동선, 식당가", "평점 4.4", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12449305195821862972", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+101+%EB%AA%B0+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "신콩 미츠코시 신이점": {
        photos: ["/images/taipei/info/shopping/shin-kong-mitsukoshi-xinyi-place-taipei.jpg"],
        placeId: "ChIJQcKOdbqrQjQROgrX00ZQqmo",
        placePhotos: [
            { photoReference: "AWCwydjKafiaq-KPlwzA3eeSO5g_jtgXzvBjuyeiUQ_vWxXf2UozyI74TojErWCRZG6mh4o7j8M940FmwaajH1MVXpbJh65Npmk85uktBLLv4t2SyCakS6acJeu7qqzAVV36wjDcercql8WSQHCnd7dWDBNfKe25F8iD1BuKghYf9LgUoOHVl4oKsRMSkaIyg1pSndEtXFRgJ-lyeVUjyGxLKQRxi08RvXAuDxUHtYMF_Jr-nK9c6TZSOsUEM3wKwXPwLGo0CQ9nLTDfkDtH2M_aCjHomb_iAhB5VCw28KFVaWAXT03NZqhMwJIknAduBMtso1yIJp8K8-oqR6xV-wNYPYbsAu3j-v3_PipEUjcW63VvI-dQSVsEP8EFFCDDe1ptLabV7GCHkm0CSiysL-OOdPvg9r3xBSQrwKHZPcOkmuq8nw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118267642828023490808\">Hope Liu</a>"] },
            { photoReference: "AWCwydiOOEbzLo5RzpNlUhUgkC-5glCWMDHECabhiH2TwItndlPiBswYOFY9zttLSyPED6KfcKxsCc1iNgj0vU5I0SasFct-hHUqg-8qbWZM7bsHhzQpzkTs1X_yIACVpvS13B4OwRf8ajSbGLp8sZb02xIPBigG_X2valid6iCKFenPulGW9FBKYQTOO07HmL9JsI766sHygyxmmW5lxhsRAO2-AweKcqX-JNNDpjDWR8wRhadORq8eANDQ-9EekIGS7_Rzi-Ao8twb6AyxzVt8W9IaTsVDTiqSU5mcV_w_97zira7cK16PjcK2q_xvivt-N5TSjRogLOAtzjDPWe5GgBzH_LC1OBAIHxKes5wxhFqbysO-2M0hEMVsFWmT5_QTtp72FKRs0RXVG4-6xP2fq64ze9UAC02eaztMAHwBhPBDwPHH", width: 535, height: 685, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113863360252957725304\">新光三越台北信義新天地A11</a>"] },
            { photoReference: "AWCwydhGMbbR_JbeHeZNLc770mKsgYMQHDDaY6Uh8U5e-Hy_U8uCD5AMYbwF2mTQUb65SvYQhZScZmmTvKLWrgNFBbUTqN0-jd196W2MjrLchDuJOaBSmm11aoal2fZHsMNw_FbO5jssZ_otmRL22WfyXG2mVeqlnq7JPrxP3ptSqEU-tAgmWW_I3EqLKmyICES8eBSGb8MJVfZjh_-4CHka7jXDLaih_LnBJi_rK_2R7reLw717AniBf9sQ8_D2YZHhn1ckrJsDZ2b5v-O2NQoBXHDqMgFR9Ii9lTwD-RllnZPpJeR7XbjEuHlj-mn6WA9h2wEjrra0Iat6EKXtat86oNhMhVN5E0SZql2t4r_LA1FhhdEJGEc7MG7mtZ6Y_j_B5zJLy52kTj8wh1vn8C5oGvabqlWMS4R-mu9UBkcHqLkFCar4ScTUcGjka4YPaw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105543184360347478184\">吳柏霆</a>"] },
            { photoReference: "AWCwydikQ2RzsrON3pxMhYJVDNp-9WlRraRq0-uAA_9fPEdOMal-B_cYISqC6wmrnYhcBb-57RB9o8oFDQnRJcWmBFJFfvngX57KQ20vsYY0S4BY0yqvs4aNzVVlDp1KxlrYbjAt2WF2Fr31AWs6uYGkX1WyF4UFE7x9qkQuK_pMfb0qgCq6vkni5HpL74Qyzcqe7H_mLLuZX_gB3AxwUbkOkJDbOmDwO40EJGKxNVrcH7vBTOGLSG8Muw6HIYS7JaGF7h9NGE_Ts98AkXecSqXAVuP_kAwqozRLApJiEvpnwxyz-quwdEiIDvAU24xNszREgwOdG5VgTJANrUmqRV7eK196eDVRw2Xxz2-tGyq-DqbZ07JQeLRyTaqQtSdLprRRlWEyQU4tMdxvT9Ue8iU8aqdkbdRF5kPBdJMTeOyeYOFKkA", width: 4608, height: 2184, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115935165693628949039\">洪志瑜</a>"] },
            { photoReference: "AWCwydhQSN060IJBlp0v6X3xkWvKZTNMSy3jJwYDSM7cUImuhga-BgRB0qYe3yYWj5JbGJoRlbMO3G7om5K3m_y8TF9wcTUXEw70LaDzaa69K2zlQmnFHqNKu7hoxQopmditO7Rw_D5s-Dj_Z1TQTRYUSp_fq7PD7QuD8x_87De7YJTGDkCodiyqH7OfQL7fkphgrTCBmW5FyxLZSJP-gh-itQ54q6HZDUU_ZsdhwdG2a7pwkcozfACBXqi2Hhvikmy4EIzTkgfOWMZO4UoeOKvVw5sBdXQZLDXszxFCwgB5vOBgo0pAebwWdTyVG7nNxaJPmmkiumrOB4XAIL5op8ItCGTvwBBiw6wpL0n6Pt3lS_OvhyH9NO6Sg0eM6GPlu6hjnzizqNJNFOz9Mb2JppCs-VgWXAS_hr8V1E3MLRS3g0a4VKm1", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118267642828023490808\">Hope Liu</a>"] }
        ],
        summary: "Shin Kong Mitsukoshi Taipei Xinyi Place A9 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 화장품, 푸드코트", "평점 4.4", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.skm.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6361610829778237583", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%EC%BD%A9+%EB%AF%B8%EC%B8%A0%EC%BD%94%EC%8B%9C+%EC%8B%A0%EC%9D%B4%EC%A0%90+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "브리즈 센터": {
        photos: ["/images/taipei/info/shopping/breeze-center-taipei.jpg"],
        placeId: "ChIJn7Qwk9urQjQRNTJw1qTfXTU",
        placePhotos: [
            { photoReference: "AWCwydjm9FWGKEhIUI9fvQ1EyBtj3OO8Mh-MK8BxACS-RuKdVRXXlyQtrTTF452P31bXJ-K54vc2VJlVLT1CgzFEE0kJI_rwiAmHE_ohOgHbFJOHd5h9gktqaNoR1Kn0d8I8PoK1F3LgWVYVFofGqkkgnlIUldZOtbSjPafl3hzz4kjXdwVXBUsn1kkEhClpWwIRN2INFQ-1YzqkgYizKsfHcpCN2yowOZmbLKzX2RAgwvL_L1EHIVcUKYUt878ZT5oLEb76bogc54tqjl5Z1nzC6jGgPNkLYeEBNHtjYY4uGqSK2bcOKbxpPVBQ5SZROUJCpHPVJEVs3olhRjCnvRWaRrxVn1jDbtK3UReFSHXGoDUwuhhHr8_AxywCqYTn9VdEYJKBfki0o6EeiW4gy1_rUiKh79O1tJ21BQ-QgjxS6U0xpTzg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112946518555418748097\">林煜群</a>"] },
            { photoReference: "AWCwydg6xjyXxFXOHm8CZoDAdW64zv9ABRvm4AnoMq9BEyPLLJwMG-c4PfSJl2nSiF46-W_magTDOe20envUm4GpU1lKRvmK18Yxx4_btRMGJt_TKpM97D6hlvd_pDsqhNBSVZFIzuNzeGyGL8O-7iF3_uRtnAi-3cYtbSnPEWEmUQWNQPxAo4S6KXsCZMfvd8tzpx0lWAO0p5o579SFRx2PESv9L2Lr4ra70fehDZNcOqxJ63rExXR0LFknMnYJ8t5-7sqj2qJFD5Kp7p3dwnyAHKIRFVPWFTq4hFKjxyIJNYAWzziWZJ1bBer9QNWIoRXOcXgJCaOn1I4bzxyqWCXnhC1PtgyU8qfN_UFcEH6dacfgXYntGYeiq9XgIZ8oKkQOno642VTZ62hP6lbfj_Y-UjmCs0DI2SyLWxst6MeY0UkTG8VQiSGpu8kmI_OAlaEX", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101899315456804180730\">Frank Yen</a>"] },
            { photoReference: "AWCwydiqpmANSQlSeAKrkBgHwCz7kQSzLqMrxcGAfckh6_IMmqcIODDdFzT16aLQiTVGKH8m3HPsGKTHfV4CskkwUHpD6R7BFFkaskF06A9-fVtguuHD-Mp_lhj_D188yA4uJc5NmG0KaFq3cWYs5MSOYFOzii07C8gE1Bnf5zRNqIMnGoWoWPlF4Q6A89xzzPnaSPFCfl1GwGBSZTtpLbRVbL7ggikQ0RGN2EF-FAtUYTqpz-EFKK1MsW19vuM0EUHoGe8Z1JVmc669gibVz5yfEuAFn9wckRf9q8HQ_BywRSectMRbwi6wwNEczlcsWe76anW_vAGTl4TXwquF0dLMqp42LVcHS9RJdtc1drRIMQNMtKobFa2JJRMLvPqt-vDs-wmBf7faEp0EmhNOto81k8N95cf6-5-WVyv8dTwxmoYLEA", width: 4800, height: 2707, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114265381156331362147\">Mei Chou</a>"] },
            { photoReference: "AWCwydhcEgtFHREVi1tad8GuoCpnUxN-2WMzbA3TLE6PEqxOchqS3_cyGnKP5pkWnQlansz_4iIsIeA-qdlNWlNGVNjdckgFAlagmz3G37G6HNIow6VUwflp-eXkIRmD5turtpmeNvI2GnQe0UNbjmj0HTWb217zYaYoq4r9YYFB7i0DkQ_2NRnYVOHza3HMkVq7sQrX8Y7Go8DVoLjnF1G_fg8DW9Q68UXn6nURBsHQl_DQW5KI7h0oexrICm15LeVLDFdn2Aehe1-JM_C-9E-RnEEPiHZ6QzlGff2EEZyOE1sp9KKWsGskgJPsOUY3d3-Jj4z1kz7k0-QdT4LUZ3i79rSqLnOLtcRDCAJ1LJCojm3sf4VXMpQD66BQ8_UJbx1Byb-qUxZANPa8R931CX5CWsiy7UqjdSV5-0CN5RBz7RKiAQ", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106766597772144522813\">藍鵲數位娛樂</a>"] },
            { photoReference: "AWCwyditMZzwQLjeffrQ8tSnj0YbPiXplm13MNBL4lG_7UeOsJzjTLMfB45GkGDKBnx6nYjXA0EzxT8edCnYIBDT-Hox-QJ4o7z-RB_YvSY5t-tyY7ce8xyn2O1Buap3IEDnOMsjUt3JZBYLnx-1XoMpoLS1q5MCx3PgafmRayqOA3qFHDAXovLndjP_u551_ogolzDUNfDHIOiFUrWqx_KOrUABgrMyd1dBjTzu_hfWepM2i0xQJdHUjaWqe2Hq5Y7xvBtTndnxpZ6BVW3GH2XatP8EQGnLy0aJ2sfa4xDwWIo2rW2w0_R34C9oR-7rEaMRe_biDKSQY2b8_Mi1SU_gQtiOloeBfXXYrmLWAJgKcwDqjXZdiaQi4mPkW7OM3K3SxcL93lAHdQczS40ThR5KZxGfeLcCLOuFG8qbfce8GCARng", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118267642828023490808\">Hope Liu</a>"] }
        ],
        summary: "브리즈 센터 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["럭셔리 브랜드, 식당가", "평점 4.1", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3845475555909579317", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%8C%EB%A6%AC%EC%A6%88+%EC%84%BC%ED%84%B0+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "브리즈 난산": {
        photos: ["/images/taipei/info/shopping/breeze-nanshan-taipei.jpg"],
        placeId: "ChIJLVgF7AirQjQRYDwyA8yU1U4",
        placePhotos: [
            { photoReference: "AWCwydjtP_O5wSQx1hgZDE13ICh3lyn3cJXWc_P5vKlUlK4Qh0ElHz3f-j8Cffhn0LTjjfhjNyaGh0MFLv6zZVNkrdfZLfzvGo9j1vKTDblWnE9lgJi4Mcp3Ja9CFrBcdtVTqnG7_pkMJ9hBzqkxlgrDB03lZFRcTgVzyxY-UxQaU6rR1OQ69R2Sra0zoX5Iy5w4CgU12YlylphQGVKe_HnvZmMeocQxzgqqNSqkaEndgDKoWn0AGa_wDv3ERFMMdBUlp4b_6jM_-7HKuBvlfzMdnV3RkvF51LmWX1KDxtavmN0s6ZDcnB2pSSPcwiq0KefHFztI9GtRBsW3SrmdfI8LahWxvXtWSKRdGfzjzBcMxq-Mp-IR0eR4IiQJ6N1uAsZDqfQHn9gwdb1RFDlf-NwOBZC7LPhPuxT5ngAn4xQ-_oHCgRuk", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114493634417966417890\">微風南山</a>"] },
            { photoReference: "AWCwydi19wJxftG5LInuQ_RhQ3Yx-tv4xUyCK0yYqY6jAUllazwxztDi9qSBC7zg-I0xknc9ImMuCdmp37aPwk7EvgW4zJh4gIf-QKX14qTDf27c2vKjWeIsMr4WVPxYTM6aqYthoHYlIc6GGJYar5Cl-iwqz94w47FCkpuurcZTT7ZFvdtwZhEh9fw1KZ89s6x8cTRIUsVJQaROIOhOAgO8RC5yLPfVbvYGnvh6YUhJwYLSwrrghQH0jO4gmpulPcUMR2ktwZ_zabBZbMxo9EkeUN_Mn6rG9PzV43Yz4nNnZ4awhPSrtov2v4okqkmWAy22d2ijbR3xmsGHUlW8Qp5tOSBx0oTFD4cq5ua6HBjlos7PZPJ9GyH0PbM2E6222C6bCkzfmQwCbhWwqEHFlHrVTpGrYf-OYYq6lG0pSXYCjrJKM-0bC6JfbmROmbOGUfM7", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104882589154134169493\">海豚</a>"] },
            { photoReference: "AWCwydi0CGL0vEW3WbqJlZKsEvQXPzlcOSbMrzPIx-4kqgLeXymJSB-pHS7n2IK4kCMCqtp8YwwRlZuqYgF6FhNaxDG2NU1cAOuVbvezBEpRQYFk-1cGPaudcdJy_pucWIKjUaru_5hZ7fcx89Mn-COqs6_hbcajnGvkmTwwwlgZhOvwqD2011xh0MVh64FZzizPtvcwx__ZhlwzONleyUJG3ZXz3lVtB3E7VyLxkYfncAjx6spmuhkPzL-E0slFy20MUejhVRfAtw2MkzWMllFJJwo4ezKL87Q9GQwnRVxLcG5A5zbi8G1UDZdGPiix3aief-03HiILLJfYXojz3-6T_5E18JRnHYAlNNEix50dtWtwAjScZIy9klpp5F8ta7gyvmIHICu8p3sxidS3vuwE-j6LWYYF_i2gnYOBNjD01Dy3mQ", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103856250206063283195\">Peter Wang</a>"] },
            { photoReference: "AWCwydg5f7G9hMj9lGogCGODPLZZK4i11-YI77D1_zoMdtPNbx8RgkrlubnEkn9IO0A2tpsRPTFki1qwdeRZ3mpOvoE6x-AQkbgTns10U9Ue5cdQMw_uM121a9pmw_HbZIhcYwI1mAPqVwH0qqOV0DC0-bMcp5Odpo4jZuGEoam7d3mYjQruyiMoctzFTdMs3glAHpn5-Efl6wZ8i3OkeM3dJZKXGWDeyV5xFCPpCvuwSzam7312KeWFbGUr5DI-GAh_H6gSR6ctF7T9pi5WJZuNgmI4ebca8MYUEfHpEgCk3eh-HkEfcxQYZFFTSO8Tb2jusmcyR9OB_I6x3yaTm_huxbJYKVP8yeaCXwUFuAuCSFmUpyDAHYgwAaMdoyCYc1PTeW-hQKGdFVS_P9vykB82WBRJch-jB9VaqKvvIKwyg-B3WA", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101262171798058440174\">明德</a>"] },
            { photoReference: "AWCwydj6PsdfbluHwR3GooNIoZY3Xv__IXU_MG7ok16HIgv-jkuHnM2XWuYQznlqcExPrtoDJakU8n6M3iscezxIkpLZshm0HOAEX5_Vb_Z2NmGL4gn8Yerviq6NY_VqXvBUPAzCOTosc8ioFpghY8edI9yuU_1lcdBqq8vUtiomig6Gy-uSlvqmPr8H6NVA42Hkqg7p01jtqJOcBTAqCimA_T5MmyfetExO1P4y3g0cBXDuAQ5ZtN6JK4DphcLJB1SHXRFdTsBrPlzD8hBE7p6Up97ana2FcCK6ktebFL2-aGPeIWm6nag-3NJHDJaRCa_04t-fvRmmtgmQiVv_PAvEeS7sE7Y60k6V9PgVsM2BGlAxVl7z25pZyU5w78RtQUJ-cFKPhYTa8FysUY0xMsEqRMeUWbvupGPJYGBSPgxIeXLFrMM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105750006613908337700\">John Wei</a>"] }
        ],
        summary: "신이 지구의 트렌디한 브랜드와 맛집을 한 번에 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 브랜드 쇼핑", "테마 레스토랑"],
        tips: ["101 타워와 함께 방문하기 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5680610108945611872", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%8C%EB%A6%AC%EC%A6%88+%EB%82%9C%EC%82%B0+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "청핀생활 송옌": {
        photos: ["/images/taipei/info/shopping/eslite-spectrum-songyan-taipei.jpg"],
        placeId: "ChIJid5gFL-rQjQRuDnNVuYE0gk",
        placePhotos: [
            { photoReference: "AWCwydj-HNiyZa3MFGclYSzUrgln3wSBpnGGqlqliAU5V3DjJiu6KM61A51qR0yIFGJUZxUlGExaISrZYd9yzrSiaIpMA8AYHOpOueCPdYP9Lp9VDaP6JWeVZsrwXLpf1df1aeSoNjsM7z6lOs7HsiQdXxsq-i9E01yXR6TYWTr9IukkdSQt2XjayxYSLlCjfVE4p2HiBV1lDCeG7JXoQVK1UNlDGpSF-clTsIm4nJeHFo5cAPpJYrPpnv-cPzeOwRSYr8J2gauNMkxhRlK0z3px-YVlr1-WsK9We5Je1hKt5BLXvtLE-nbAa8BhjipqH-fVn6PN92stH-RdQiF2L05kAolb7YsO37WzEPBQhfAYhw89mVd4hvaK1BZnRIR9MCynLaBUzn_U1YQTIGLfsN5hHibZ6GhY8wFmGpEpYBNWK_s22H-s4hEwhi1InPeqKFM-", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116689782956899881155\">神秘客</a>"] },
            { photoReference: "AWCwydjoRQiMQNY6FWXFUt-I6HtNg-KejwpuYUpRUJrHpGg8wM2VKa9F6giUC2_6JtxHitNM8trHw-Eh6wYEmJlIvfXvJbNxKhkLx-HIVpsQYrvk-j5xnckFWYmMpAUuaJ7INtj_cowF8bEDOxUZlus29a0i8sW39PJdf_JoL9qqm_kQ4K4ahTkGqHY5MDeQtTJqsTr4qL_xqmyvC-6Vr20XwCm_yl3TVAxFc9ELjop-OU7V5IULk6qxyfczhV2H-G2NC5kfpiAiBofIq4bAoXZJvEAsgcgIbwCid3KfVqLoCBrJGs2T6IQ6FX-pL0w4QhRgJYaYLNkiQ6QAvpuUzdRceWQf2sudEbylACM9oO8ZTykqERyzbS0vR_BkFL34XkCXATIj_PfGUQOvkPvYgQ5S8nFBHdRwyNOshmHiZ63ID-a8wKS48JjMnYfHQ4pgMw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116689782956899881155\">神秘客</a>"] },
            { photoReference: "AWCwydhEgiw8Xs7GmszYpor134sLvqgyU4XdHQQWQ3non8pXlATZhK1mLDNNGJs6waeKc_lGsvNQTLVEWBf2O1z29qRHqMnp3_O7hIPcQMdStH32-JWHZzuyV0KVUDRSPXRp7gvPT_AKhHiV1Jz5dtELNE_ugLZ-W1uIfxJRQ0GFrdXwZM24r0NNUVGu_bQ9CBlf5x_xdYbcJecesPFCNLgoD8xG6qgKGv9bgNdeecbC5f_8PXCcRMRYOZnHU2s34YQA_-HmTqtx2ujT328BEOPrik_5DZeSNspj0P7Ml_UVu356fnO9m6d8ZixJnVQYNUAAcip6MusDxZfi40WCfmZuT7brw8mZiTixd-Q_c6UKvSpIVU-9MokFSS8K4mLNbaPn265WgW8JFATcgkbkEIWzoAPUdifVDn4qsYePJfzhtmCQQg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116904374243723631638\">潘志強</a>"] },
            { photoReference: "AWCwydhhfLwiMTvtgVF1X8XXhnYdGedsBw6ER_qk9LPSMysx3_jL7knfxJPzJOjUQMLKmbBB1C4-bOHPXtlTv5yFwa5PFriXfy2ohnibaEJJitOr1MMXV73xjBRIR82I_RTGyp2KAcYjz1R8QXkXd3yrMQDojM8gIQjKZ9wENMHA9iPmCU8KoLdVXUCsSPtCaehsedGydXT7uOIn-AmAt3dj3ilqn-AYidEEoiBiWQYPGmm7sQ2xuukwJvkSFLzgyuxgBKIYKr83TyKYQca8-YU0V9PVPByDQM4wiLDwMpeIRnEwAtKtFJtRZxkthnmUvl7ik8kaOHs5djY11uEl9JTSL5d42sFmpYRT5aMuZdKMNjVCMjRsL4KMO6pl4rEe2JHhvYTIfJ1P6cQ2tRKXX3BmGzcLFszVhogQlk5_Ic9s31dE3g", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107348006150916585533\">Audi Hsu (奧迪許Audi)</a>"] },
            { photoReference: "AWCwydiZoqexCda0ODikEfZ8DsyxmuKNjYEqyzGbYou49AbXP1UsWXTDjXcclMx_vFry-T50s0ifT8iW1lan0eKLnO4DkjU-S1bE65BqLukJr9D-C-4PQYAV9kJWefPjcFkgnwTH1ykdbeQATrrafuzjS69XdHuUkQX9eTQt5lB8NM5zeo3zOHsnf146hWRk48wciM88rVI6zOdQwjR4zQkCOywGqwFnMEgAE_Hnxk5lV7LHVYDwGUElPeRHvdfNLNsEqqfQMnZr79ZHL4mQXHE1NpJEi16tsc55I6TREzBdiWYonwNjpIpYl96v8m9AGhUVdtQ8PLsBaTPxBOth5VrBME0ZUTYWfd2oht1VdpQhvWNyuVfIMuQbpl5LS3bMDk414sqSbYkkQKpZUjHxpZLfGlbUOX3X8o4ZlZjbM4yRdKI", width: 4800, height: 2222, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110513925973336172391\">林嘉焜</a>"] }
        ],
        summary: "감각적인 디자인 소품과 카페가 모여있는 문화 공간입니다.",
        updatedAt: "2026-07-13",
        highlights: ["디자인 굿즈", "분위기 좋은 카페"],
        tips: ["송산 문화창의공원 산책 코스로 추천해요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=707633478795868600", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B2%AD%ED%95%80%EC%83%9D%ED%99%9C+%EC%86%A1%EC%98%8C+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "청핀 신이점": {
        photos: ["/images/taipei/info/shopping/eslite-xinyi-store-taipei.jpg"],
        placeId: "ChIJywaY1LurQjQRS74hsbes0Xk",
        placePhotos: [
            { photoReference: "AWCwydiHozHzXWWNMbdqNXRVm5zDyMRn1wzcufVdb8yrUWjLsq4BIg5nl80OJ6ErYTw2rrpqHMoCPfNPDz7NIoMMOp6x5lT3G9QeBEvmpW_u6ku_vOYiNy2OCgurngcVh3bI84Z3g5AIAy4-y7Nl1EDkj8LJ1_0WggOsRhhxBdRsqr4atzSwK2dxmKNutKFLj6_eZMTeIWMXP-srbEmfFkQL0CZMvYY8Kof7ZeBzaWB-u6PLYqoievkPFm3JmpqIxBFsZOVNfqeJh7fVSd-rFmNRbEUL7hYLdnd53qNkVsPeeVt6OLY0kAOJp5U1VWqDuFBnd8NQvhhHEnt7kcoiKn--3IYxnoDkeHZUCna0NS0GVkloyljTnYjwJ_wb_2gd6Rw3E-Mtf0BUXuAJRVQCeleJxIuyFoBkZFIMSP958cnMsDmEKA", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109172961983035734162\">Jonathan Su</a>"] },
            { photoReference: "AWCwydhAXzEqws1aKr9hb5g0FF4aO2NTsja5durp0dWLYw7igAjvh8YEXDssxgjt04KHLBKvCDCxlaTgsoFYjQ0zkr6UwyJthSJZjEGhYUATQJZVCEdE9RP7UMrxMuBNDFyEVRESB4EfOn9GYcryIxX5TihT3WUtehsY2L7HTbc53bnFBsJQo6B3OU8bysWTYw0gfF3nVDY6rhkoknm88nEoyt8Wi9_XBWCuZG9Z02BdPntXM3aXhEy7B1_hcYud0uoApo6HOhzKXbvhRTq0rme9iE8hLsCg0maVCjBHXqhicPpbLtuR3186FaJRrjquPZl2KX4wCObn27LXjvTTv7fDrdmK-HWn_5LxyhqzEa9FU320hQnO1i2A9poirIMmqMIyTXjwyrwmSbY0NaqfITDvshUgOR0Ofe7-hwP0QBqSioc", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114694003749567092078\">Marc Chang</a>"] },
            { photoReference: "AWCwydgCYN4jWQfMxlr2LZIxfz2o0aIP5DP1oJYBvWajQKPIRKh76AglCIij5QXNM8VcwAyVvyCVm6NDbgXGQLiESvHh56S6vWQ8pJ7fhKVp1TI8WtiaSAeKbAy4zG_HfMD63CcVkrAThiOgEZEFPIFLZQVDm8UFQy7I5yg2UvZyq4gS-Dr2spk8s_ijgt4dnevhWkGAeX_oxrCxdEfQa_6Osmex76UTVvvuk1uRJxvaMna-TIqWyYuuEgvgKfzJOKvaL4FeHXQ0PWfy-XeZCkAWB5jDAlc8h0K2cvillRpvZNa5ZagO_Wl6MMWu7q7X-Rs3DdRwhCh5Gg23ZFi-qYXBYCknzpfqhnCnVlXpiRYFpqwSVzg2wTx4YvBqNUja1LVhq4DKXc9TJe62hPsz0T1aCNUc3zWsIn5TmXw9r3u9gszvEaE", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108306806908000164561\">Anders Lai</a>"] },
            { photoReference: "AWCwydhwja7d9apYMrvFpjuWF2F2ujfYBHvyz58RyVG78p0Lean66kPuJiAPFYBtGScyMBrySL54xxt6faAuJyufhOkEdOVk9Wn1QJk0kvcpPjli98NR40HdRdVC8rU3LpTNKTdD54wYzxMH5TYtGLCsZ5xSOZ2XCgUwTmtmvhbF9R0ePlw7O6jqwPRoNJvJXCKvxpoE6Ethym11WYSxJa9DquRWaMtC03iyn7VeStS_WTjg-Fqc6OsFvVqkWxzvwJmWpGpujhBgPiv1KUV4PmwR95mFJmFhIuLjsUIvvNIZdvCJlqL7wF_LYIkCZD8j10x2ph7f6jQyXsUWny7bO01Anz1QIhFGRnAaoUlNjqhhE64FdPqidpHqfX_z_CVlPfKuDu6iKnYwQzmMVPZ77v0ImvuCPr3OhB6I8_84jKHSvFgsHA", width: 2160, height: 2880, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118024609472781474517\">Amanda Chang</a>"] },
            { photoReference: "AWCwydgpWumQEgZfHuzaeFbU9iVDoWkR2i3O_mYwYfQCggdMUhM_drmExnXbTDpnjOXCPozY53-3IyXxhcJ1mqTJnKvyKlr248nVI6eUeq1IAArAdhhStx6DNPUPx3ACuBxjpyCJhpTdp1pClLfszr6RDFgtjmY4n7NHvwfsAJ7EeYc7Fjm4v367FcbgFoz-rDqclhqVmbQ3vo3PyCRaQ40dy5EHo9Ivt8Yr0asGsJ-YClyXI9WjhC9qLg-iFC6I_ZSS0sqo-nf406PycdQA8ZR81n3gr7_LOHaMyVrQ7GZIYfseNQsKCL6IxGcKCG5oe3GnNHBOhTrQLYJjWdIz2h-2vM0ybJ3u29uY3s8Ad4atMVznpdtWc6Sl61RAfc61FhpB10589lYSHPaU0eB_juqN4b8yVPR6YXyvoKoHdKxYZD4my60", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108705381394460090602\">錦達邱</a>"] }
        ],
        summary: "책과 아기자기한 문구류를 만날 수 있는 서점형 쇼핑몰입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 도서와 문구", "디자인 소품"],
        tips: ["선물용 굿즈를 고르기에 딱 좋아요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8777987053672578635", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B2%AD%ED%95%80+%EC%8B%A0%EC%9D%B4%EC%A0%90+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시먼딩": {
        photos: ["/images/taipei/info/shopping/ximending-taipei.jpg"],
        placeId: "ChIJKyaoGAmpQjQR99RS3zrx9Ms",
        placePhotos: [
            { photoReference: "AWCwydj9bOt56ztg2-wwXTKmJFfQAl-nC2WpmwFKsy_H2GlhjyA1LMniBNL-PPhvAHV1FO-COwqi-JwJ3rJ0H7z9aBqw8GuM5UotQo9cgMDfhFw7n712LC9F5Dwho_cjHleL4eZ2mRoxGpRlRvn_kL56B3pW1DxLWRdUSDiZgNKaOpo5Smg5ZsIuWC64bSqrJlPhhRtcU3FcLoTe_BUW24OCRj-nEYanNTh3UnLCS_5Lg0kiymM4EJHOBHZhdcb8141fojudXfB1vnCLMMapI8D7AdTTlH1fOpnoAFOJwBOCy562h_pGSjecx1GTJOOW3FRtuZJSOF_Ju0dF0j4gEfACVLZ9wAeqC53ZSqcUiViT1l0SsGhCl_dLhs9y1o5CIOpAsx7rkocrpJoi5dnRwsDqMzV8OZ8l6xgdDqr-sfR3j5Tdrw", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105195572425031700474\">Tony Chang (82東尼)</a>"] },
            { photoReference: "AWCwydgdXo15p4w94S9N6Zp_A0-q5RFEUc0lt24ETUQ8jHxEDs0Os3d-udHxCWX9a-wHi28x84ZoUfvkk6dK-VWC_AxpcmoqqJPIGL-HOiWwOdPWYMMnENhnAUY0u2OvPzFSDGTIguZfzb6Ot-tevNOm36Q6O1lNZdlZ6AFHHXCAQFuOTFtW8bzeDTuHLcl0GVHL1RP35QtGxYO_InW05RuhH4UINgMMteKRZGlvi6B4Ebq6EGoD3C2g_ZWHxgdS0PWKQtNJkuQ_Q2mdULispJUUC21F_Em_RdWFk91xhCIdNdq1_QyMIKSIMxGT-ZI40VeXElQF5I0yzW9Qc9pawlMI-48b0hZRPEpWxrEVkL_tu1t3pMH7d9CIna5yCA9NwqznppQok0mIeeL0icBSiRppJufPeDFEXAhulEYJYoR6t1hcOQ", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116338483632127354412\">Smodindon大</a>"] },
            { photoReference: "AWCwydhQBdh_SixitnnZdz8ugHoy6AJXMUmRkqNNmgcPBezFhAEN-XntW1VwZihF8G1d38M1l3DmD4A6i7NTOpqZQvgjGbqdiyllvAKOVVSwKHrpr_TQMy9WiTRFs-gT4JoYFN560kknMZO9Gz56lwRjU3-RDjjTr-8pc6rxyxWVP1s53712FiLOOhWcra6K_pFcf_UMb4fbNTQwFe7b8ThA8bYPALq5ob5VOiVm2w9YcXdJ_fvauZv71bxu3Ydyvux1ukr48F-uBmTSuvBJS3mY1VGfjs4yc8Z4loRGd1hXrhA0ychSN6Z62S8yNXHNcYzD3c7hiN8jUjIdGEOIhQRD_3szCWJvzXvVeaI6Hc82CDddU8rl69o2qqCCx3GacHfFf5bbrottvtUcVmy8VVzCgC8tS129e_ML-o7K8QitXkDJC-AH", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106786651090928599601\">高敏郎（阿郎）</a>"] },
            { photoReference: "AWCwydhCvYtGLgtZhueCRpiiq_h7h-Lo5q4A48mA8FaJqdh5aY5PQQQLgocHeb2V_wD9eZh4s91YGo3n0zT1Apof7U9rC1M_Y4bDrpi7wvkSbR7m3kjFjJSwgekVX7S5YhmTbga0SL6jfjR9G6NebhxZYmHKccHPWqszI9GT67_2Q69PwuyaVEq2egAhufQADUoHxDoknykfn7Um5pw8CwnB-DiHGyKpnJaFccwP-SXeP8Zy_58Osc5gyvxlVCvvPJnWBB11DsGkh-QrNuvp5fTs7cTSag8nFyEbl2o4R9nch3TVRjP8PJDkTw_awpurEvDFN9Gr7fQBxA1XtgJknM_FlrwN0KQ9bFCTGK2SErNLomAwbWA4UQ5564wZYZVmNSsxyY81lQYI6pP8joYJY0MK9xHpTMZ1ojOne27S8eAQTW0YaN_z", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111803980595300360204\">葉信宏</a>"] },
            { photoReference: "AWCwydgB6stthaZ-S4HphF293RqLUroGDOnUZWnUoKu44h25lpQt3gXEND5VLfJZrI_yng5DHEhVRmfZcFMUdBEhFBlkvY7ExW_NRrw3P65Icj4qa3mKNFHY7qc0dyNTKf-FfZ0_7sT1l5WjSmj8sQMzeewzPlkqlPk_wFsdIymDwt20bgddozyHMFUy615xvMdf8FpIYQ4-1Lt3iUyy3db28Akoe27TbJSDnFmBMga7qcvBBrlwFF3MPddZVCPj8o9jgjg7RSiGCGsfeAVpnXKtwjTZ9mvhIxWNU3W4Nfdvl4zRSbiCRq5MH4BV6ZfE2N26vLNecgl6d_g_YHwQtOcQ9BLwFCoEcafuik7u7ZibwZCT8gZEZfHDC4A-K6wSeYuo8_1RkyCStX5-CtktcDfkPcDAvlZUDwWA14urwSfwOHWxkw", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114965638822511884513\">林米克</a>"] }
        ],
        summary: "시먼띵 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 잡화, 스트리트 푸드", "평점 None", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14696636719173915895", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%EB%A8%BC%EB%94%A9+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우펀푸 의류상가": {
        photos: ["/images/taipei/info/shopping/wufenpu-garment-wholesale-area-taipei.jpg"],
        placeId: "ChIJC1KFvJirQjQRmS-gn4gGaFs",
        placePhotos: [
            { photoReference: "AWCwydjva0Tgo8oYdCdJe74TwtA5gLbSUuhst3I6TO47-15gIS9YkAIEdVklXLAdjAdFCWhE4ZKL6iz42oRpJbTflvqU4wuFXTKAu-YvfLeByW46NqxOHqd1klLIseMnZeoCT4lOZY9ht2C-QcfkTV5kVzCCiMybYDLsnikbmyZpXSZfcxel5rmbYDuxm7xWnvt-oJIuFH9XkjluUUxiJn-xgO1OketiDOmLSZ5B_4YXOcs-Hif02Gwvx70KNoaa08vjc3Af4zETLoQu8SsQjd_xgkOgC8cvs-Lwe1F4tzeFvjED9JKsQznsf73_get-sTsMpGkY5SL4hRt65_MYtYhQNtFUop73kv4KER1y3mzjXnQndhpQ-Eedmo3zIE8YKr81_S2Xcvs7YJ2EAO0HJSA4HoaFtLnUxgIExp-TL7KQ-wsFzQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117918957922626886503\">Yoichiro Ando</a>"] },
            { photoReference: "AWCwydi5hTkPV5p9vlqXcUFl46W1pR6efgbWt4TcutO2NXMpSFq44AD3NqoGXC8LYcZqk36MAm2a0K74AN1aXe_9wsz_L2O_5Qu6IGyJkWtoycBKFWp6_jMT48FUELp9AzcCdcS9E0EqeVcDzkmfEi4c_1B0a6R3h5a3MyzUpKA5vYd9E1XYi87leHi-bNZM7UjhlQI613XARZdxceEJbY7NR12okaa-LG6xcDXb74TztAr0zRHai36_NaF-fPyeo_xoUQyF_rows2SAL3Oz4p-NI0_1N5_VFMqD2madbQevkyc-SgjAdhNEFeZW4N6xdTTgHhL-CrL15cXk7AOssaChme1XB1GdKFRhUZ-tv-Y9gLBtBvsfJR1tWhEzmP1Pk7PT4mnHgZYb6SHDhp4CL108ib5-fJM8es3AD6tmEWciY3474kR8", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111818654696661250866\">Thái An Nguyễn</a>"] },
            { photoReference: "AWCwydhd115NfGUDdbjByI0rHsGL8kvWRy0MzNF7qTjO6KwMzk_h2mtUsYMRqE6iljl3KXzGpBakJ0juN7iNtprZ8OoMzL3IlHFvs6WH-0ibmaBKPKSCAj9pCWcLmkWqPoFRSN-cKpyLF1XVu1v5JU_Fm-uh3wxqdgk71VDWkDdi2ZA9FeTAI7wqLHnuS_8VGaiMIbfbwrxeytTGF9ltq9ygab1KgUsOX-o66Prtzl0kpkhzAHDpntA6E2jGDDhw2wwNmfWK2DaobAnBYPbH_b3woCOGeWuCcu4VAn1Yo5_Pn8Cuq-eIA5kx9RTHquGW0fl2WGiWqyE5vNhw9WIpE2TqJxRrMnyP6eo42Y6RF68X3nvac0u-RG5WgCzZQylrtKu5Emb7BbqqlRCiD1jK0MvKCzSRDz0R0oN2vezyI-t1CCM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116689782956899881155\">神秘客</a>"] },
            { photoReference: "AWCwydj_MFJHK2UflouVjd5JVk1ORi5cfQW-IpKfX8xdiNQTkXWzkT1-Eii2X6sNUtwJyOOttKwM2TwQAHndNLHrAd_Gs6tfsuc3YK2kNSIRsLBrNqiem0BRpi0Cm5uwyAK0Zsn7N6T6hdXTtX_gIC9OZagKdtXfA_hdSULmuvljYNeVvGKDmkxS8s3PKaTlNVkqKIURY4kNTiQzc8FyYXnXIAQfoOoePjyxEIr5MK6IXrCN7ZVLzmmqsegO8xpKqnHoBZ4H9La7eSGiHfCjRpqWdMW-BkVQu5aPF2xeS3mAiybPL16te5Y8vGYo0dkMlfsMZw9H0bI55G_hqbp5n88mOBe88OB7YbL2MvUR2-I7A1MqsJ7AG0ytawjpbNsVcDneGXVe2DMp_EJpxRdGZcpR_wKNtUtriG19fy8SRMIIYrj-HTM0vMgZl1TFiB-iOQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109750155652914128045\">KING (第10級在地嚮導)</a>"] },
            { photoReference: "AWCwydibQLJaFGEoK0UXYiWKy0Q4zQYy7h6xxscAX2hTtbTaL2NVZaJ-0UxiXm3SLRtc3dTsLzS0yAPKVe5PXFS35GH8RI4_bS2ZbF0cJvzHnK-IxIU4MhtySuYefOvu33vte161e6fawkLQwkFmGPlXFt3RHIY4su1K4wQcM0bItsRn3gY85-_rNSQYv-mcJCK4mk0IwLlm8z8m9rBd9JN3ARLG31hymU1GFqlc5COjq6DFCSUkTb54s1auD6ViyFn7JTwQ2ZM2yoNMwt8JJtAbYWMrlUWRnw_Hiav5M0uvnXgHjLKctsn5-dm9zyFhLhRtMBOUBHw5m8efw46Tbe0SwcNO9XrWnRgZvFv89Pq-uImE9_WdfwghddiAvkfd0VkxB5TA94MQYuM_G_Qei1QMO_s30qdDjByPS98tv_HZXi4hZA", width: 3472, height: 4640, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100521761568417828722\">李得仁</a>"] }
        ],
        summary: "Wufenpu Shopping District 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["저가 의류, 액세서리", "평점 3.8", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 1:00~10:00; 화요일: 오후 1:00~10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6586521638892744601", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%ED%8E%80%ED%91%B8+%EC%9D%98%EB%A5%98%EC%83%81%EA%B0%80+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "광화상장": {
        photos: ["/images/taipei/info/shopping/guanghua-digital-plaza-taipei.jpg"],
        placeId: "ChIJfc45RGOpQjQRh_HHWVA41kw",
        placePhotos: [
            { photoReference: "AWCwydiRTaGKI-ys-qO0GZUMM1-0j2Ggr6pkibbk7QWPpZdDGrIrwh9k8l8Ju8DmeZB_H8LUD-WWhQS5V8Fz-mDYnZzRvTQqnAwVVqUFe8cyr3xANEe7nbBpBN0VAH8aDwtMJGqVOiF0Ijc2IP01djPsnJrTE_t6I1mJc0UudK5fDSaiD1KJIMhQqK8nBcXF6WQ94HpS0AjGJxRe4-dqtAOe1g351_cS5LJrQGuDnNYKw1QYKAQYPLzwe5d1WaiM3Ky2f5oEDLlZuwcFssGmlbw2xnzUqbHTblKYcmcObMLEhaKb20XzF1pq0bWZfxslJZBBFNieCsoYM8WUaL2twu8PQJDhto5a1rmbIM2YKk6J6QsBnP9uGbtFfGR-3KHlAOMHE2fHMOK87co_J6nFQ-jmhnk3b4ZHKETfn6In4Vlkf_vHAOg", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105521603629216733732\">知心音樂網</a>"] },
            { photoReference: "AWCwydg-6Z7ChB5XT-eimUZfk23aA7ujLZcoPAFtiwUKzspOVaGr_dPEnmNjyXczqb7uUiHunMGwGW_R_V75RQzrIzeE392VOoDjEPb1iwqi-1d35Z8aTqx7UkPP6kcU1Kb3gcVOtL_8zy67PEvNZzOKIgL8lMJA_9e132UDHpAy0_ypFoL9Eh4K2SIwcijnq9FzB25aM_xVA4tZkyy2ERVj3x5fvJunqx9bEt1bgKOUs3YD0jfZEnBtqDzpczMW1SjzlaYZE_uK1nnws-2XDHpRh5TmyE01sz23WRhA8_6wAoF5rSE9-35AdUiprbIYa1zKr5HHMx71Y1zA_cyFdHezwoDRfT5cgMXvGdR7Y9gLvDVDVR6r7gKzFhFGK2C5M_h2vEdXVJ7PeTeGq3L8t-bHLe5lpWWsJDZQeeJGkIS7trOMWw", width: 4000, height: 1868, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108218855122075146486\">Cornelius Piros</a>"] },
            { photoReference: "AWCwydg09vswCa6SrQZ93KfEYKhPEEuRuKqyFQSoM3dyiX0UfFhKZIzp9I_5hrma8gLFO0C_muK6LIITKR2vt7qa20Tej2_S0dGEzo0r9qoLzJTx-eUaDIc0_mLFeY5xxU1JoCxegDEcnYe9p12gkdS52A5hLTMQtj6Zw1vdTHTN-2BvIQbYGCo2AO2-XfVk5KAkEeCtNkxcfUUSym9nOFVpqUG5HIhJOEMhf95jQdU5Z0wECkw32zu1U7rP5UCZSx3pO6Bk_oI79BIsFY64ejmoOFCRKJnMJHddAGeBwgC2pNLHZ-O-jLMf8d7p3tRoLWz1iMrPh34vhicm5PMKzwf4FThbDJ_j4XNHJm5f-weDx5W1JanQ3hSnq8ob-OmzDVOUbC0WpMEY4uG8a9A2j4c6b87MhXpLM-P1-HhzF1OEjtOY8Pt1", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103461303093990045045\">Oliver Yang</a>"] },
            { photoReference: "AWCwydjIOzphZMvR1uBN6CbypmgGR0AiZ9K72qLKMO2yWzRuHcZtxi1Mp527QWJHDmoahrF3DnAtuMENEOKURTUXemGVLasqDYQhAK-UtHw49B8lzXNRy7TBRXintyFDkkb0miaHYgMcz9TnEYYYBSbOUyG-CCDdv2zE_htNq_BiZ8gun5KYK7cNpTi5uo3r2hYz91vCixRRXeg-XyhAj-dxx8BOn2BsmKGWb4JKS51UZ6IfAalJbFnAkXbcG2xPOHrzgQo5SwvwNM54nKhq7-01iVX6UGOxVwxosZG8kHRm-n9nq70jbgjSzVxZNWgJ7Z_TDX6uGDwgCnqXMG99phUvAF--6hFfavJpLO3lnk4Naa5Ypghd0aWYaKVE5Z2Mpka3m8MCD4jVYFBNoJOKTxwgVY9Ole99oQdiCeTJYb2smTeHY2Yb", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118024609472781474517\">Amanda Chang</a>"] },
            { photoReference: "AWCwydjePZafZDRnRSl3RGJFoZ7ddNFwxP27UVlsL8Skb73zttyl72tMp3krimBpcuFdqrs8Pg36NB055jZD4yfeymwfCz3vUTdSq4h-pxcsDxyF903sugO59nRI09sl64aktAeNlW3Hm8bD5h3LptiWorUaOCfduvuPg9Yzv1_RYjWEF7f1E9iDh6gc7EnnBrFZbPqQKam_LY0dA0-NGy8d6r4Q1rfXLzi7sZ2xMXAakZ0rNulWWXr8_2ZA7Wh-VCAR7LvUckDiV8o9XYJeeM1FMr74dGV1UNE7UALqOAyzVsjEnv_aFkis2xAji1hN8TLeJuBj5CBJy6z7DPCWEHxkkvzBuYAOpfrLAuv8GjDnWlqROAoS6bXdoa6zW5TqbIRcvJtLRHcJoBAmw1T6HLgkzxMh47oxzARIVLC9uhfjRBtkVI8U", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117416902533110050886\">老輝俠</a>"] }
        ],
        summary: "광화 디지탈 플라자 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["전자제품, PC 부품, 카메라", "평점 4.3", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.gh3c.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5536674709653418375", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B4%91%ED%99%94%EC%83%81%EC%9E%A5+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "삼창생활원구": {
        photos: ["/images/taipei/info/shopping/syntrend-creative-park-taipei.jpg"],
        placeId: "ChIJc1otWHupQjQRYn2ASKtWHps",
        placePhotos: [
            { photoReference: "AWCwydgvH4zdU9LpxKScWMaz_l4UJpHE-TkZ_xsQtUcq3iQdPxFtf-Zd4VsvxESvNHJMOOoeAKHYKxOQG9rsoQu03P2kz4wH_ZK3h5D63F3TBlOjmNoqF9VaWuOv9VNO91Hw9htu3JcORs93UFd1hGXR2zLqnSeWVMSVjy1jCkzY0bvBtzkaji11T2_U-hZjgFdNXc2HCkdaYVgJRo1Z_N37pr-6LfN3lWWo7PRmAnIwwEw3QFai1azyDcKtAzSoxSTNvodKmfLgvZlWK-GuUmnPD3mvTpKOm5asb3VQn_WXe9C0P58NKmkKbMU567CS0Bx0O8lSR0HyeB98SDXc7HWGSZmUjOMWOT7n2jc4G_2KBMA5RablaWYcM2xhGXjEaFyRgYrwIcScxH2VC7Mm0J6hKGn0NINM5cGsrrpiNV5L6Vk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117349836752267760599\">林沛暘</a>"] },
            { photoReference: "AWCwydhJqtXjjureszITUkX1AAWmSZre8DwoViZ9OE7YXZB68vOF5Wch-4EVaRq_aBB8g7la4s2ElTZqUC6vvQPKLnarRlYvxGyc_wxCx337uFyy0RxsE2Y2oVtEXtwLh18l1TiReYe-e6Yj5xCoZzEtLfLJ4zTVcs6HgoRJogalH29TPwwqVIMuBN_0ck3fcKCX2Fwh7TkAaBcTcYMF4pNedHKvt8MpSfvSXrerBRENdLn90PWdchQgrj-7HFyMBVhr9x_Of7BuRws3W6E2W9XnBtPV9JOPxxpRrlJnsMxBzBwXp3vx4UtfxhE7P0Lk17lgc29-ZEJhUv4HK17Nmdd2P2jic5n50XZ9nAccqeIEKiq7WUhVhLteDXXtNywbYNQmzZ-vEG3LqcAs6QEXPo2ZJ0rh1O3BkmYELF-I4B0LkU_mWg", width: 3330, height: 2220, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103054408268604338422\">三創生活園區</a>"] },
            { photoReference: "AWCwydi236ZJ9UpTurd_id9lK2H1qKG4WZ0dNttCvPQAwiUhugYEuEllL_5D0pwmXQZhXGkijaD9xWCaSTmWgDpLQs1xvVs-I8xkFq_h8gFaxiI1Qd2gpEyMPQlD_XHviDqekaMHQmYQgvRx9pLnRqG2p4yPC0zKovsgXWz1RyU5fKn3eeQPwCCYRvDjv7ia_SmkFev0h7wBBhrV_Yb6XqQGFtVAaDrz8uI24EONUXbaq210kAG0jfr-ycHOhDXX8PvtMWxArCBGwJHLKx-48zoqPeRQ2Tr7ubvLlfw4SkLB9HNO2CGAs2RBH7bUfCNP1yAeIXEqCRZ5t2W952faJ0cfJEHh9xHzMdAKM7Vxgp6NobWwjMeSR0C4WHxP7XDp6SLqdBdF7TwoMNpYoS5Cr6Wmd283C48t_wIQmwSXOWppa0edxg", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102803243762372314384\">Michael Wang</a>"] },
            { photoReference: "AWCwydgCczWy459sx5F23aG-zO11DNB4DOplt4kgzdyyZqswuy0Bt0Bs0Uirn74_oyV0R5SI_YVyN0v4LxGDC-CntSm2tCnmz4FJ157zkpQ9rbw2_B4ECavYICOgb1qFjZYaXERE4g3KbDPcXXC7LEamogYqQTLDXD06FQwNJwqiT6CDeDMRE36SHZURB366yp3uBIUgUeZ1IiuXmgEVuclCUOfWhkzYGAQc0OzVWOGz-8NHie_2Ny0kRLCBCtKbJEOSh8oATFUVIfydwXh7vWqMHvdmFzOu0mMomLc9Kwt5qRCIfmgN4QjLu3IVb7ep6DKOhcEKBx_hP14t8rl2gtGcirERrT9L4gmncGlxdlLQYv-NrV8r9uXsWYOriYR_ZU2fKHXqX0R1ne8LI-gsuyZQkbH9qXm9jdxlkMHzRCBhOto", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106115367668020630913\">John Chen</a>"] },
            { photoReference: "AWCwydioZ5o5XvNkdJUayBy3tvYw4Qy3THr50XF02kDdjfOhhIyxRfO8gQTN7AR8O2vtmMilDq3NfujhQnHeN0qPMJKB1r4W56SLajQx-mTHBrY73VWz7ckKUbooDI4gHYpg5ItN54FHJqCRwENCM8EMVnUEAAUEKmpTQuNAg4zx4XHnOLZT3bHJZ_Ft9PQ-wFRvBs4hBO0snvTNLbIAj3tQA5L5eg_coIfG3-085yNZ6v0VleMau5BuEJRZIMn0JGP3kJvuiFJwDSIoho8CwhM_IFRtL22CSZjD7xwyLi-7LuUWTi9QJfnje2SgPOnZr6TOdNwZYAaxicTZsEikMw3PdHZscxrKqf5nTBgR82oZpGhZatZmWh0EpDe1kLLV1TefgIDi5Y9vR0oIq2Tzyow_VOCcGjrTf49Wgtj-f7xms1Y", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117250156965963206438\">周春天</a>"] }
        ],
        summary: "최신 IT 기기와 가젯을 직접 체험해볼 수 있는 디지털 성지",
        updatedAt: "2026-07-13",
        highlights: ["최첨단 디지털 디바이스", "직접 만져보는 체험형 매장"],
        tips: ["전자제품 쇼핑 전 미리 모델 확인하기"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.syntrend.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11177466618835926370", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%BC%EC%B0%BD%EC%83%9D%ED%99%9C%EC%9B%90%EA%B5%AC+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "닝샤 야시장": {
        photos: ["/images/taipei/info/shopping/ningxia-night-market-taipei.jpg"],
        placeId: "ChIJxUXPVmupQjQRtBB6oj-S5qI",
        placePhotos: [
            { photoReference: "AWCwydgVYnBnA6vraSy2SemZr1CYl39MteCgPZ5Rk_uwHYSySLepmhOo8Gu7dtEhQM9lOdROycSrVG9xzYJ5N53YCriXmW62cE2ydSm5U2StUajv4SA68Aheq9GstzIGntq_gGYvn9Vsx699aagkLubn5EQZoRSMgxzGqM-cTr1hqMQoFJxMfHoEqgetOMcljL75XOlyAcoigZxjKZdlmiF4XS7UehVCLVlhP6BkDDXOnSseuMGfDSyJW0aAkMgTogPJcy9FS3Yi9r2OwFstDTwpGXtNcXWcukbpDiUCHopDSgIl_kbgCHV2ZKrM1Er8BgIpQF875TL3rPJCBeFE8ORK8_SnqOoLp7Im0D1FCGg2drsf56jUlscB5hXbIiso4W1N9wAGAnsi4DWPX9Mz0s6eeaykNc2NrUqxlxGCa2LDOMjHSOXS", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106268058510488839609\">雅雅雅雅</a>"] },
            { photoReference: "AWCwydgJ9YGGx8cMYoTQcszIL2nRQzus326h4D_zCucwypk5FGB4uRe8t21inh7iIGgX4JNNSz2ezTnz7wdx1ATwabQXvrhRzYbx9YXcZQO2_FGW4U-GiZVbxdC6R3tiUNU-a25faJjvVoKRuNtOYHET94NU3W2hxpet2zgy6uRp4JE6HY-xXh67JkjwW2gw9n8u-vos558PWKcAAVeTtG-I6p8fuQCxS7U826ZCBiFm3K1kusn_LllzAyvd4cW8XJZXUcX3-Q8HZXSF1N6Ta3UpbK7ccbEm5zykN4G26plnu3noy3MF8jQvhnN1c9gZ5y8eN12HSuSdwnhfHdCHOr0_ble3EhTssGv7bwOyv9KNoAsMrDTQTEoXCFy44_bMwWGX3FxMCubnjQnuKjJgsBxOK8ULyPsZTB6Sa2lvLoI913Nyxbg_fN8KwCVqU33TtC_M", width: 3623, height: 2038, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104043466865704768146\">人稱大合 曰剪</a>"] },
            { photoReference: "AWCwydhegm7d9eEjqGns2EMljwD5R-2DBGv5k8yrXFr5ZhkWoC-FsH5eZscAD5BpufqmZpIYRDTHoJ_WIk9lGyPhalGoUhgYlhyQSiyzjUouOITXhoM0QJjpuAqW75tMw4DvQKqiRZkbQ3Yo1kBdvrOf9O88hJY9BMniKTSIiySX1R9HxqWAOvZbjQTOkJZ7ujH7t-h5MA2DV3As_4OjdWNrPrRXWKculZ-73s8bADcaLM14mdJNxq5OGb_N6R-UNPR2mW5Q2sEL7d8XTnh2UzOxOlOFxC6EMmJCMiq2_sIc1wOZv_vKL8bRSJlGAFRD5BxrV5wm6u1T63KjL4NovGCbZkZUKAQVcNnNGL614dr9BIcjfeomoHqmJTb6OzC6_5hsTCZmS-8BGKobJUYSCtdqDNKlik3QEmBqnfBsm1OfkoWAQw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103629164568004657344\">Huy Quoc</a>"] },
            { photoReference: "AWCwydiVVauNfwsdl_INND47aETELubntfKwdPBHoCMxj_StBKoWgvRSUzFES2D-XIjT2FhPD359IoqLC-NtK7MT3wAclT-OUjNGG5oXHLe67GkHlsVJG7AD8s0VMC4vI-jjP7YDcgltBtRj986a6IY1TCbBpOJWn1gZysdnjABPYPki0gb1Yk_vrq6M-Orfj3GTr1Ejugcduaf3FF5IlkrC1CWGmmUMrGy20rIAaflF3TWNZMp6o7xQeRpJNnLvZdyzxaCBM8Qt35sqgqik1bga9XKMwCm8hM2MCJOXFhIsNQQc34BTrdkAj7jB1HUK3lAlASGHjNA9q7EPY-KOwB9F8F5rTU5mAXqrtAGQfSi09t2GsngC2y9xd8y4ykhxcD9bDdIWQi680mXK5vUfb1xPEw1ogg0NAKxdc_EK3GqoDc-ufNVi", width: 720, height: 405, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111651079405853646239\">Jack Wu</a>"] },
            { photoReference: "AWCwydjJzHCuNReoH23ajkBDCcunz2iZ4YHPYmTvOzc86qf2nbfsXVf6wHcBeTP1ObuaWvoTL6zb796eubrMbP_QvwUPtcWSmQsFHdVBULNJF2e9lhLbsV700XFCd_EamcIY4iVri2FYVZ7ECJAWGs0pegH1dZt1OYyBXN6Os5qgWS7CdOdOcdTA8pPjR2eiooDjvbssrE9YOTNkHpfaydCYYSse-qlWYqjEP0qrGBIRohcxmAj23tEDV29r_A2hfTpSwwr4qSXPeKLYm7KKTzN2_YDfptQv8hV21FbVBeDk76k8jZ1ylci6bNp4_vA5yg4PGnFUoQMY_koLbKhCoN3O1heakYyGQ7XdBiRIq7E9YjMS-0DQkZy3ztS6UF70GeqZT9ciG_ZfytlOKMxplMWUG9Uc80ZIUPZN6d1flqeNOH-X5Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116439814490956081430\">Botox92LG</a>"] }
        ],
        summary: "규모는 작지만 알찬 먹거리로 가득한 로컬 감성 야시장",
        updatedAt: "2026-07-13",
        highlights: ["다양한 길거리 간식", "현지인 맛집 밀집"],
        tips: ["사람이 몰리는 저녁 시간대 주의하기"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 5:00~11:30; 화요일: 오후 5:00~11:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11738230280794280116", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%9D%EC%83%A4+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라오허제 야시장": {
        photos: ["/images/taipei/info/shopping/raohe-street-night-market-taipei.jpg"],
        placeId: "ChIJg6W0DZyrQjQR9vZdgYMRoj0",
        placePhotos: [
            { photoReference: "AWCwydjbgzLk6-fC8KxQiRbTL7R1WL9v_cityBL8MGfGDHCi4zBWBulMxW6vTW5s1V-RJvCH6jud4tfC0pmhJssHNfibBPqnKM0CJhtOV6GHn_jCfMRdI6CwIvkjTu8ep3ciJII1rIO9_DaHn6wTaSS0TXgfP2wnmf8L900d7D6Rps9zJnzPqooF9U3WkV34NnJeBP1em8Qzf75ZcbSHCwAHjC5RbKzcITu1Cn3p2y-neGTMueeF6N4H7QhaAb85aHF3DTsyQJ_0FH4PhtFN5CqgoBiqPXBBPXKnfZ7AD1GQown7nNGa3KSnA0H97dzXvc1kN5k_1sqv8D2iCdfsnYWl4ab8zjwKrkTuJjkN8GtwKyetrpKlBlc2Nvo_T-9QhGuUuxsGfogN9abYKi6OTP7sT9KUqP-wxK1D9UYyyDSZPp7NBnE", width: 4000, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106898605513419475021\">迪麗歐爸</a>"] },
            { photoReference: "AWCwydgS9Ht39vW5o0uTp3v7hgjZuUWikV1L11bu4KpZSvRxph4jQZIM_xUZ01riRK3lMR3YfmjbE8B1H7lGELU-wyW8g_IRQRoYHi3WmQnw625Hb9dm96mWxq1P3o2qDu1bpk2lht5DWXBZvlqchVl5rHqjA1Ay06-GclpH5HIVs4xAneTkqZgHormm4VnTOhopPcIB4QLTiPFlWBl3-lkdmTw32XK2wgHcf71NfmLfMvtC_Tdo3lJh3UXIX8KDGtuuNNbWWo49u_dl-1euQ9P3YsAlAMAcEkcpmKR6EMT_qmYN7RE_H-udj4q2p7vAPhb7kZAfZos4ynDe0PdzIepGNj5MtNKHXMmnAOXR-YYxq-saF0MYI0nCaRQz27aeSvPwObzQRX2dFPo5SGyN0Bai38vts_06b3muUW3N510R2ownyD4", width: 3036, height: 4048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112075848352529767336\">nina fuentes</a>"] },
            { photoReference: "AWCwydi2sN0sv3-3umVjP-PbtvVMUdm99wPFreYN5UzTcOK1NKR8p1OzhulWQSUb7HoMmFj1Z19m2FfNJ9PNZ1nVjJHLVcDVhCkl7xROQ7ZsOn1IIL87rKVxmDqLEBaiHHjYUW04jnkG9V5TcafD3UEkk6xT13dThGrLoBZwVEDywaF7njQmJ3xWsWJ4VDYrnD9p_3g_G_Z1YGSP9sENJNsEfsAXWM15o2AtQDK1iSuuJv2PK-ED0iJWWX7CVLIubGmbFvXBxXjFMXWoPlIep94HayhKiblNq3FIYWbTVvRgHn0FEGubK2EwbIyOvfq1fRUrKmqKxwMm5JUHEUMlItVqFT-oBYQx8eUbcxP4MU1HnVbp4nfX7VV5UZ_HLWLnNYpY269d-eoTRly_A-XezMPKCG8M-f_AIpwJhPThwfsjjxhQZJdd6IT9lKKblk35oQ", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115226605662861036217\">K. R. Justin Thomas</a>"] },
            { photoReference: "AWCwydjlyVSR6ZZfZShbYWPEqp9fJ18Z3MWL9wsvRc__qycazN-xruhVL0frJGWrWzWkq0B7efhFzjx34-qRlIW1Lf0dWEMtHHUifjBptLx3It521KTANpm4UNlPUkyd-j0QuIAc9EMA8SATfAaR6w2x9k_JBGzC5StAW2X_lTBH0KuRdard9syu30CbEAhdstlxs-XOG8ENmG1ISA1tZtWsHXMM4r-7Nz5t2U-w3HGE6eBmwd1xYZBPFPqx92P7eTIBwwC8Aq0JTNx1iXpH6xD728_9KoVYzx2sToQ_AbBhomf0rD79ILEJyjoRWp5j_9n2y4b24GaVqVxzxNVTVh8_LZmgIoQHs4QkCjaEkUpruZN-lbw8D9PKS1tYV8F_0D5YR_np29vtAQ9Ls2O9MwqWLX2L9cEoVoukOYvCajJyfcnMt6hb", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110415251321949017019\">謝英</a>"] },
            { photoReference: "AWCwydg7R_DJaFMOXiJSpjTFcdx0Fu8dOQyrk1SmOPqQZOQSNSAkqzN9_-m0hkdJ63W6AWhcn6O0Xp6Z8jQXMyQgNr7GTNTYufqzcsj5vyMaKt6nSF-jUmC0Js6ehV0qaCcyyHMcs5w32NJwgW8BxT5JZCwn49fAgtqBjPBck8wwnclIW5l3ciq09klkghpRUdPpro_P8EBugW8SGMwzWIwwcoj7M2u807kD0XU5R4r3SJdOUhlme2fy3_Dt0FQ0Zh9byJo_PsGI_tfKPM17kI4YDMGBC-Gc40RoGoLxbxVkJaptLd2OMVaDrXausvcLjKqV7xkqegIxAvmPydrUd7nL3tKNSj-o2phU4Fyuziumgwh0BpZsllKw04CaPWncKnt1uFIl70pKFYRyAp4F1zfMzUcSrs7UCCo_W7vg-WjBudcywrwG", width: 2736, height: 3648, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108117484686562418352\">John Tsao</a>"] }
        ],
        summary: "화려한 입구와 맛있는 후추빵이 매력적인 활기찬 야시장",
        updatedAt: "2026-07-13",
        highlights: ["입구의 필수 코스 후추빵", "다양한 기념품 쇼핑"],
        tips: ["입구 근처 핫한 간식부터 공략하기"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 5:00 ~ 오전 12:00; 화요일: 오후 5:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4441131439049537270", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%98%A4%ED%97%88%EC%A0%9C+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스린 야시장": {
        photos: ["/images/taipei/info/shopping/shilin-night-market-taipei.jpg"],
        placeId: "ChIJBa_9xLGuQjQRKfnnhr5twuc",
        placePhotos: [
            { photoReference: "AWCwydjhgMeJ4pRH3nSljDvJ1rRyuGXCu3QTMr-v3pWuGFEtPNUqQbApKgGGVTsfBUnXuZ8oB8Ap6sMV5IFGfYBUDVcmDnynU8OxwRUAMLNW4winkzJBU4_8by1APzo6E1Oi8dAYLPw0g2KkE7Kl_bBuTkBcJ2JSe0AYphXW51C2qAzbbhWpDEJRRzNqK7u-a67cAt_Wi6n-d8VosGvQgmAKOSuk8HF7LOmEp5naWALkxuiWfeyDx3uV2OLWPWs0jQ7F9s0TKJr6mXWlyRJpAIW3l7L-uaCwxdwdZJEFzh85RmrWY0vcWViXWFYBVsA5q2PTfVoJQApmjXuRlDmMN4dtHVkQDGCfqNHmTpcOekntNQAqVhAogLA9SxXI5dtfDaqHhz02wIP11HabdotboNUTenknQVSOnnMm-4laU9wrMmQWDA", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101090374854004432537\">Ook</a>"] },
            { photoReference: "AWCwydgiYh5G5U925UMlXlAZUM4zDxik4jGBxbT6P4jx00_GmguGH8nmE2cj58kGwVjrbCAkIeZzlxbHC6MF1EfgZrJsWF9vIZ0OM1TFVeRNhSEpZdftHqmo61PPUMHUo20WeHlAfLz9fwkSztsMhPeXaPd3f_sUj7zOjLmq1_4gjjpLLAqd5kOYaOamReZ-Hk7KRDV1RH3PbA0R4G8_mwK1cOttEpUFLSpEt_zxZ46rQkSimGAs75zdmiQYR1XeeWYZXdgBjAqCAFUDSHZk9m0Jcy9dX4h7zrO2jZccz1ez0qTnB2BEfkqB_e1VXibHdcwySh8AEc2MFakqAg0yuV2vbN-7aik-RrmSgT00FxyMJJJQToD-r1J-rXUMtG_O2kG6t9hk_zBp3VJzOG_R67GX8OOFsrDIhKjEHxOMaHeHx5-eXQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115100463299149359402\">甜蜜蜜</a>"] },
            { photoReference: "AWCwydhi4NSEy1gOZnlMxbheXiBmPxQBzgnHkkRywuTFyJniTg9OZwpkk9Gn7AT7emSJYoqD80NrvRbJO9MhzXBHukduazGhr5MwReKpi4UUp5XnmKqUq309ZC8eYaNa94gXMvBzMwKuUKO5jvtwshq7nz3PO6ALeMPEUDDYSUhI8LCy6q1HFjCwCnJN9M-G7_5M7BxTW7Qg-hBqK7glLjXwT1FJqu79GI-v0uuHOAxWTjtKFtkxamlfuNfGIee71qdaAkeW6qn3vLlW25eBhubF_UGY7SzeOmwpqbT2Wb6WUYgdHLEqcuOthhg91OrP5LaDPoh6nnBmxmwUucoyr3QR3g1GSFbe9_vBIhf_76MpZ5NOBO96rEVOU2Kint91Zsjj4ARqViWBn06hhsyvzJBzuEZhU3sDwtpHlMXFvmHjNaEGjg", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115516861285567073371\">jas T</a>"] },
            { photoReference: "AWCwydjNwxneZyuUMZOgvjVbs0vJ0TWb_lGuCSVFvtAOOMG7bQ_LXx6TfkAfb1El286_kizkK-FL__eN7KmI8GmOL1rg2enkhmwnV1ejQT9sdAv5WJ_xUv6CFmmAJiMEKPuW0WHVOQEB4MRQGZaYl7Cr5DAt-BGiFd5u7zU84JNj5z_xTG6ACkoxE60Iq4viILRiep57MHm6UZfO7GzB8E8odnV7sKrBJlTyG4dtBp8rxZIlUvKFALrZ_CPQm7wSpICOVSMqC4hP1u0UFyv0UPc5_h8D_qJB69b0iQLtVYncIypGBiAzxOwDXhn_0ELqgalUz4RIUr3tAjhnqEasEAXZyJxLs-dOl4SVh4nnyB9CTuaqkeN8Gc8ZMt2ZYO5-iXzWnGEsTC7CIgH4nMphNB1yvByyPT2zmrM-lDiH264PueRJdPrE", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113272110313112159237\">Maurice G.</a>"] },
            { photoReference: "AWCwydhi72v_wu1WLHEXnacmlmDhp9NXXYXTnPzgcxzXW2ve3lW_pMa8rPsEmV-rkRxqaGyfWKvMKsIxEizXJeYEwuzbD5_iI3IIPNs5tj3jl_BdHTqaSm_K13RURYhmWu0qxlHQ0FnyNZu1sL8fZ1ZssYNVaEAVplzd7hThEad4Zqe9uiEiO4aQIRDpFNNuir8CjrF9VQDee9QBO-HsRQMSj1Cq1aDXMQHPbyYtqsEeIwSrHZpjzNhfDSII5HWzAJwxNFahdM85Z9bSy_uaaDffy-_FsQXcpy8dzMQeNhBA6eYP1cPahz_3LCR7wbgSSJDkSVdD0qs-qk2c4Ek4miWM_NVr9DsZ27eYGFq0v2ql8c53XideRTlqo8rMaeQ3MUSEvrtenT4anfRzAzS9dgjLaRd649EBYI-DM_xARgLAsLM", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103538113688279200378\">賴佳和</a>"] }
        ],
        summary: "타이베이 최대 규모를 자랑하는 먹거리와 게임이 가득한 활기찬 야시장입니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 길거리 음식", "클래식한 게임 존"],
        tips: ["주말에는 인파가 매우 많으니 여유 있게 방문하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 4:00 ~ 오전 12:00; 화요일: 오후 4:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16700031033317783849", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EB%A6%B0+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "디화제": {
        photos: ["/images/taipei/info/shopping/dihua-street-taipei.jpg"],
        placeId: "ChIJeXELiROpQjQR1REJMdOO8Xo",
        placePhotos: [
            { photoReference: "AWCwydjvWLWvSBVVcudAxdbbVEPIoyWUf5FygPra-JJQ7fBkkLVBmSzq7Tz5CE-T4kV49Q59Qq2_26-s663V97ck-0MtDfXpBIC5aq_Kg_8CcYnXCUuLVYKsQBYzsba0psnCjEaqzGkl0K0l0NGgiBJPQULD1yhDK7uxuityR8xGYfOd8vsRglwLhQ9FSblOzdnIyrIXgtWzLJofkwhAaHDIDJlHmjp_JVuMjeqNDWEm_Le4DyV6uKWmx5o2P2MC2n7cEzfuAzuK27BUyid-zl3KOhb6_YfsKsDDs_xrfoJ3BnFj826Hk9_3o8e5oDVs6bT5AyB2E_x-39NgILQbKMm5SScWO3qoGlSLTyENF4OT2P0Hol38h960AKJvptvGMqsPE7T1dkK0e-mkbFgj5Uwmtw0q2x9nPuaUY-QKsDGzlUqWVt0IApylMgfMa4Xd_g", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110911458822123117785\">真實感受</a>"] },
            { photoReference: "AWCwydhfECtkQE9NvPzdrdQDb-gEbVsNCQXc_N7_uXdI8v5AJ5Wz91H53P04tre8ryLz1ZIpNQefYLMcI_byj3AMXk3Jg6ff9qKKC-01vl9aG_wERP3xg9LODO_eIMv-JbaCkJkoGpmXn7KND7WfctzX1f6Vi8od3rJ5rxt3Mi_ZsVh7erX_P1dvbW_15Yr8RXa3GeRwrM3hcHKuzs-TRwwdTskWaHYAVXXavUmQOCzDguEF2qZzGOL7R1zxoOjHVk2YEA2Dn-J3pPBImIfWL1uvjQwG4ttVS6YVfi9pLwWQMODiwIhj-Y0i3CWq_MNtaTwN9se_j8SbmyMUfp8FA6UE1pkTlYATRIkzBhcgnbQc7KMCXVvF6b6Le0CHqirVv82zLuPPK9T20fN1JKgkJOfKKz0B47vrNL3YIhLmgcP5vWg", width: 3024, height: 2926, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111124089673376526501\">no nno</a>"] },
            { photoReference: "AWCwydge_Frn3eaIWP5JGNkm6E98T0EEy7hY4cvjRFEyRCtUvIxJIrl_ndO7nSJJqwubtZwe01cfs2uU7buKAux7pcdeZPCM5KYQqC6BaFRxGRCqVSUnjhuod8xv_y-3_cXIKq_4R-qWQGD-vLWNhVZuA6vMHB5xMPQfoR2hQ4wE-GLujnvs3kqTIFdZWcqLoVrKuZSJ_R7vRm_2vPCY2S-bEprk0yE_Mukku1jEKnntkIjPD4PCmDK-BS8da0EiCuGLgZRlClZgROCToJa9oX_IlNZ_63m2Iu8xZr2O1sCSuM9g4w5oxvqyf2ZIVLGm5BCQE3InhPdw0dOlF3EORbsLGkEY1vLJY88B_6yxFBDfIW4aUJnez6mNsVBlxToVsyRgFCyTP3gEqYsqoq_Yd3UeMsuo8oWHgJl69QtBmKht7jvJdiXj", width: 3968, height: 2976, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117258799784494109493\">Winson Goh</a>"] },
            { photoReference: "AWCwydjH23VfaWEoe8mI4PlLFUjrQxPF57_ki-pgmg6vNF28RX6hmkIgDQ3sqEDmetMTGpGEzy-qG3pB38MK3DVFc6QDsLCkXCM0-qcRTn8kh9-fpJ-wbPEAKoMFP3OvwfBmNT5FHAVEIBjqsD_Q0VsJiC0nr6gQ953f_WzeeY33bkzVcZhyRD-h0gebk88W4jce2E1sWA-haOhdn1PH9H1DsCQaUYWJeTb-gVqoFbmSkGNpUjNmXo1H6sX9Y5yDw1zKQMA10uz_eBLPCaFZg4GNj5Ql4s1BsFvCSLa4LigxnJUnqDVNX0nQmzqq-MNEPqDRHebb8FwfkDownWw2M9_KL0gqKIup-cTb1FBx5gkguS4Nn7PTeyViOxCS7boxuZy0esXxFZ0-qfFpWb2ws091J1mSP7DsjeLbIGFxQrY3QrI", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108520103290175317891\">Dražen Jonjić</a>"] },
            { photoReference: "AWCwydgpYptLlbf_r4sjNT2RyRQVua2WgnMl7zm_sxw7tjfToiTthawISTV89Rj8w3y8PmqqawXiPX6udFmiomcGesOCgUMkxKCx0N4U8JiW8KKKf7StxspgjRmrebx3C0rmOA0OwkM4VPeEIWTjfvyncSCnefLB30oPjZB5ofNKIX1n9Osc-EdBzvr-n-qmfdkQMRpMFdy-zDL9BUO24iGaWEJdOYTflvMWZawx5FUp4oWF9IBDBtufSopceFMyH1VAbw5x8sSoDrTDwryd36nNp87G3yZlytiKWpcn1mbUbEgmxUOb_-xKhahE4hB9YArM0WE4BmUzuFmksPN9ZqT09Kswhi2TIj0rcaH-L-P77gZvIhfzlmptYkCV19OPlgNI3t29Cufp_cu4X8iH-j863nLZ82Az_5DXs_HFyp5EDSM", width: 3007, height: 2863, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111124089673376526501\">no nno</a>"] }
        ],
        summary: "대만의 전통적인 분위기를 느끼며 차와 기념품을 쇼핑하기 좋은 거리입니다.",
        updatedAt: "2026-07-13",
        highlights: ["전통 찻집", "건어물 및 한방 재료"],
        tips: ["빈티지한 건물 사이에서 인생샷을 남겨보세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14205669941712931358", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94%ED%99%94%EC%A0%9C+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "융캉제": {
        photos: ["/images/taipei/info/shopping/yongkang-street-taipei.jpg"],
        placeId: "ChIJ-aQ8v4OpQjQR0ShTzThG1VI",
        placePhotos: [
            { photoReference: "AWCwydiWQ6mzd7NOXXWKwqdw2JzhOHXzYplOcGT9G41NKm5VDDvhdoQfwB7L_s1GObj9rpxB_rSiUeTWNw8m92ZvJ3sMH3XU4qWUrxtF7vKer5wVU1QOvs7ECUMs18dqJsPRWXlYoFZYkQ_TvB856sCJ4YlfVJ0CYaKovcNSPzjaoW6SLKrMWCkRdaK_BEdPqlaiuFL3uehZWbspXs9KEZoR8hD-ht3caBdhCZilxUQ9r2ehXgQ0WNQY1i4QwT36mBB8iwJVuuaKZk7ZV86V8V3omEKMH9PyvTyonElJKDB1PNJpT39Q5IGEGWqB-iQ1WFjBWYfiwoGgIDceiciTcl34REnJGJHdrkkN8JsLFn42DS5pznBP4JfhLQybP88Wt0DyXeSVYgeHnTfUvrRyjajYbMCgC1XrRIlFIvijqaCShDaUJg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105429116463889776630\">BRAD TALESKI</a>"] },
            { photoReference: "AWCwydgFT5n7dzlSI4jCTTUTJM_1NTViowrF2-9fxSG2MmezdUOteTMTmMvzCUTc5vRnnvg6S5NumGHt4cCo80idys-Z0p_BIjMpWj9PrCPxi9ffvfovRhUUjZxHqGWdDuvDb7abxibtxg43VcsN2lfFXgwy4sRrMrrl15Yissq6sPPZcInwLV1Dli0oU0fIMNLIvnB4naG4xiEAH-qAFMv90s5ksSAaYmHtGa8oOtlwZbpxrWPjcu3STJO8EydsRnjLZQZfwNraDr8KsFSwd1BOAyS3JZEIj6ic87PEelDuC_33T6jsIFwFb_yASPrBEBEtmdMShWp3IciWCBJGnKyBLqPG2u2GQhOEn-aNbZNVjQFaMeyclC0Z85d5JkOtQqgt6MH8dmJy1P14RmcxKexEx3qglb6WBNj7tfcdswOcW5l3VztZ", width: 3264, height: 1616, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101960847496698201600\">南見謙二</a>"] },
            { photoReference: "AWCwydi4qNGsronmcMUCb16yTk4_dGBbKnONdgXEYOBG22NdNwLPz3PmQQ-xqWlzkdKIFiPGG51csSSt1PLNXG5dmlvUEtNSv7FmnWxRlAPn2lcV1wPhpPs28vEOGv9fxxLyGvxAZCqgVN4so6yMMEZr-p4vFpWM7p2S3r9K6ieeQ51AUdPiINe0-9gLbWjNXVqhyrC5Cfl1X_KqqIRBhKOsfhBE05qHfM1I7n_cY-6cbzhufS2MgEWeLtWWKaUrBegod2u-s2QqpKFkQVfaXjj5H6W8iAKRBCaulI1L-OTLc1FwwpLm2fiXbZQTO082T-ENU9QvgIn1tYzwsAw8D-Q50YmooIUyeQwejUvHW8Xnr2Nencen_oAnGm1sEFD1TUdAI84grPvocf0wjiaQv4UejXJRVs74Iswu2G5VW7Oax379UrhV", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105042123928081284307\">陳棟樑</a>"] },
            { photoReference: "AWCwydjCPWtuCZLmOlyh1tungnJeMBcPhGA-8q7qu_p9eOozMT7-nRNIMual3hwQxniVw9EhzUX-uXcgmQ8d7YrLeBWgm4ZSGcASWCCSVOWMOPBOVIzLavDPvdSpS_9uKeQJ9FPJIz5YF5cgCkUrHksAP2xCkqzfAkYzjyytaYzRFavt2_PLIZIya7UjPF92SCislKBa3mOiLYtoPPVB6iyYjryoKE4Oh-_O7mmRxvR8ZZ4XtImznVvRz8B668PbxbLYGZIKfcX_cl0wm6vlvcPNsE_IyUMYH02yGxvsIzrveYJaR6CGnMC9aL3UGuzIYdsriK7ezWBsv54GJBxrpNhBpFHAnet-VBw97jlHepF_N6dQ76E1VKQ4IURzTXFT9yIQwmNkmSucloMqnU43dPViAfkYOpz-IAPsBWB6oo5JgxF2fF_u6YFkwG4jkCccQewX", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116576119714504915183\">Denny Liu</a>"] },
            { photoReference: "AWCwydgPMoHkmkRk-NX75TpZf7EOd7KDz7EXIU_R72rj9UBMsNgm299ZiboWjaDg_YENerkVdUDfL9vEzHSgmZFab6j6hgXv8uzPwhVrjVvWAHeOLP1Pd_xEMZLxH61P6JL8bq4USZL7_cXy75fs6ZDXPpy1zVYbsfGzW9o8kmLVquwtOEFrmiMaEpgFYZBtf0VFjJ2oDpGcPJQbuWDUmeNSscTk1YgwX1jnQdjCyA-mAT8HzGoRlgN1GE26IwPvWEB7kk7OcfAZgvAc9umi-fzyU6NDcHzjyULWmp8GcGAFfljqLHd0p4tXtEalVQfWOuid8cluH23UTbRlcmLxQ18YLg7mc6fV9j0vcrs5ocBt3t91NK_1xtn437F0y_1vjqKCX0SKoN2Da-Bp_goKAwncwy7G2XJxREHej9Gbs6tD2oaYIqw", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105429116463889776630\">BRAD TALESKI</a>"] }
        ],
        summary: "감성적인 카페와 아기자기한 소품샵이 모여 있는 미식과 쇼핑의 성지입니다.",
        updatedAt: "2026-07-13",
        highlights: ["감성 카페 투어", "아기자기한 소품샵"],
        tips: ["유명한 망고 빙수 맛집은 웨이팅이 필수예요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5968754090926352593", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%B5%EC%BA%89%EC%A0%9C+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "타이베이 시티몰": {
        photos: ["/images/taipei/info/shopping/taipei-city-mall.jpg"],
        placeId: "ChIJ6cxPB22pQjQRLik_97hS8Ow",
        placePhotos: [
            { photoReference: "AWCwydgPPlnjlOAbx06ywsEExWO-2b1K6wvyGhR30JCw9goStoYgf6OiUvgktAQEr-Qzm7dNpxKwOYq3gTl64o4zBraX5uQq93Fb2_o6n0baQqNy7aBLpN9St_fdGu5PdQqBMOt5pHWmeRxMZGIwANYcwOD8c6Ds1cisxV5dS1OR-EFRh6SA_cCSzF2xjPi8AUurdR6vWn39dVy5--iCLZuwFWx-J9eoQFE_qQIQy-QbMMh88fiQX2-NpPZEkYZASMPD3Abzl8QuJg9_NbM2J0L-fdA8i69A9uzcwxJoVhDCE9HeW489ryOXE-fFSrpz5rnL28Rnc8sCxHJbH2Kk2nSmu_AVOreMsUnpPS4muZR3goaIOY00Yu1W23gi1ZKWNi89hIJTwTEMwX4mD-IH73r9lEwDejeICEluR2QCyPKdIs5ksA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115379758262350833842\">sun long lai</a>"] },
            { photoReference: "AWCwydhtup7CvlgF36D1nVZ8GPNQEic_3x8gXI2EeypiuvfBQYwF_OAUsBfajn13CIOHLrYDD1DIMpjHQPzpmeQuUN9lA0Ss0eMKq7bGuDwkx1HHvqiuEgltS1Edmr5ppZ3JABX-EpmzaO-8LfqyUsem_k-r3L8UP7gHf3NoVadHtIEhyt2aKxoEhgSnSunMY4P3pv6nw25eKRFXukLxx8QpiJO8cQkHWs96bw5EMjcSMBBeO9wbZqMe4Mg4RlIPADmGUWKwHLC_65hrRbKs7mck_3Xv87aOp9CD_7bgK5TBo7QKxlFmLDQA-lRNPXckDSW5bDUKYlIGiKf0IIMm2Y781uhyEPktBvns90Vr8gO8ucgM3avnShe7lDTDa1d6nDcR45RPAy4JyrXvVHe2SyoKLl9XUd3H3iRQbH2R9jax1py90heO", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108983825288671733505\">齋藤斉（移動性高血圧）</a>"] },
            { photoReference: "AWCwydiviLVZuYfzLtad3MLZd0m2pnqaW9hiyf-Am5ntcHDXHModTyS_kODhWApb3AOA3QycCGg9hoyjST2ZX2p5mM7jJSU80FiLJCUBEE7N8yn3sFATfJnOotff57rhvIsQ3AkEIFYnO4rkV2CXDt6XsddjA7oBEO12y_hrs7ujsQfua6G-fBlzkCyWIdttEQPhAdgUwSHDHMyiObNW49OouEpswaM9UsOwGpCyC9VkbN4KtetNcE-9LDGJoGJEtS5p1cBAo0h4dDRFE1dURh6uDxo2tpJNizQkeTnWCs6UZZvb9HliZ9U5i-X7irXYM_X_i1RqwsfHSHkyb7S8rExtMQndxp3sAYkUQGThTAzb-UpPUDzI0hEO3N8bnPOMuE6Td6pFi2cKd8gzCv7HWVocLPsIp8vj2Tsh1zId0bdE72bjcg", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110912543072576806831\">Gary Wu</a>"] },
            { photoReference: "AWCwydg5a0fJcy45yPadu7XnBbLG_1NMyXTYFSqJr5T0RznrHp11iPjcWLDim-3n_WVMYhrgX8kAIs2gasE_YeuXmXHsAhO1Nhx75qhM20LKW9793AtOruc59qNvnbZCVh-LgXbUy0CjQJoaZZ9zldt-8T2Oa13PVYhzYplEcUt2C6a4J2TAY8oIdCu43Rd0Hz7DDJHAmdHe7m1Xz18RsodAKZWbjXhdQ4Y8HQBdpT31sO2Y583trYp7bd946-FrgIKo_cp01eCDButbFUmAOLJymF4gT1tKYpKiVnp1RGGe0sseQen0N6vYZBcjpKiQtD1BWq2La_Y3up93lpee1TZOkiqTX9VxaJMSDs93Y_ARrG3f6E0f-Ml193EWLarYiv4zZRP-8WBUAE9l2pIMEpV9bjvxBup0NExLnEHBJhjCqRUQDQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105186953904806263681\">Jameson Lee</a>"] },
            { photoReference: "AWCwydj6mxqcynLLS6Ejyi8aXrEacw4DkX3T0GwrixkWREgUu7sP7_5iuy582PSgvasQ6CNDjuyPdNgiPOUK1LVYGjDK9zSlL_XfZC5VPibgmWOPJVqZ0NPfpHiVLUEzsXUvkwohk_h5Fdi0zUpj6mwvxH5yAaGEyklFBohWycDdTCJEx1nK_mYu5CNTUUXJ_5Ya1owQy6Fa0_iF2dpO64YV0NMsctfqwu8fCVk2EE_BaKP2YqrjiwegVhJsC-VJthpaZC6692K53QKAZESPHlWZ3uIj72P_U_FFMyku2RFvvQ-xI2sPOzgMumTD8lFVSWU_qU4FzvOzAIjBwUGT0Vp5MyoFzsCObyYBy-xWbeaxNm9Bd3wA9aHKidZ4-RRON7V5bL2CaTQ35mpdB9GBOgBqB-mhqEzqQqxX7UjurD7W5tpGMQqV", width: 3717, height: 2289, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101637027641513487005\">陳錦中</a>"] }
        ],
        summary: "아기자기한 소품과 피규어가 가득한 지하 상가",
        updatedAt: "2026-07-13",
        highlights: ["다양한 잡화 및 피규어", "귀여운 우산과 기념품"],
        tips: ["지하로 연결되어 날씨 상관없이 구경하기 좋음"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.taipeimall.com.tw/zh-TW", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17073237141737122094", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%EC%8B%9C%ED%8B%B0%EB%AA%B0+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "큐 스퀘어": {
        photos: ["/images/taipei/info/shopping/q-square-taipei.jpg"],
        placeId: "ChIJ-dlEoW2pQjQREfI7Yhirqsc",
        placePhotos: [
            { photoReference: "AWCwydhloQd5k5zlslg5bkOW7WyYvHSMu32mLOswkkxjKO_P4Ud_K33QJtysz3Kvjd66iMn78hVnwix2FIIEpf9XIyv5166KjdvxBzNVCigHK_uo_UUtSL70PqYQx1cnxwNfpJresHyuhS_eAbr9QoCgZtzD0iA1-dD-y9kr0mTsJ1b4orR5QBTk-ycsgR35jFbGXstSlodXtcvihUj5BbQWBl72PGgtYC7hbWgAHYcrd2o19AkwxK8GGYvbscrKH0X4b1EiZOl6qoaZmax8gtbfu-aD8UDo4uCRARoloaWosuRV6hXGZNUDBXFNK2t2Ikyc_MN7UQqLeFDCxTtJMrb7rdK7hbJagL3Ct8gABwrEChe4VfCh80vPPRt-mEzv_7uBjqqmZKXk_IjTbN8VnfsUpvHCBAo5Mwo-_saeWFJAtaB47g", width: 1478, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101829618809351252839\">京站時尚廣場</a>"] },
            { photoReference: "AWCwydg1l8tQeYaYxTjO_9hpjixjfxFR294rnOP0brs4aU-qchFjU12tDnNhp9UI8jvO3VIDIS8n4KYqVKeb5T_Q-z9_3EGJ26pEYcm9TGYhLr_VFyJ7Ijz0RmV8ebvOyT8mnD8RD_TOa2g0tQCdO-v3BKxe3ZYYQAtpBz4pb_6CFaymekgiZsPaDHWhsnlduLv2gdGvVHJV40gwbVCLH3O8fHOOiJ6Mql8Ett52e6sZNM_wFQv6mpEnX5E0oflRuaFcurNkTGMT3854Wo3t8CV8ZIe_rsrzlXk8xvZUMD0Q-F01lzTYfQTqjVnjRApIjfLRsFeSwO14nRF-a7anwY4B2ViQYY9ig0spQsPtLvXMqbLB0qso-wyQKIPnE-VhTuu82vhHF8YD8ijHjbA0jw7ZdxPkCKe6jHF4FzgHgcrP14VfK3g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114222122076872669000\">許小咕</a>"] },
            { photoReference: "AWCwydhsmKU9BN7uLIzcxaZHU4stMQ1CsRokYXYPxBBNSSuw_DHtRl5hXkl0pAta_shSqo1cr42KUjQmDf1J7sknb_-5oKY1GCeRkyUgicqtzoClOSiinBM8dDXVhVFm8bWooAoG8ZFGfTNnRvEXdjOFhAjQDU5tGBhcxp-4rGFnPXJpkW-HK8BbHogfAbqvCTDj-FwqcBBI4qsjcoAObIL4joR_r_9BkAo4wkIk0deemiexRUzXYX_sajMkHXCx3wQyVQWr_MxoT8dzlm0nEKMyW8_9F8Ff56FX7FNc7OpWBWuW45cgasyw4JmmCm0_wsVNCSq5R94stpkkRHYt8GAYddUlGHLVwlqTanYYM_XigHwHIaYkCVeTDNy50Qi2o2fyzvf8OUogXkx8Ss_a5Y3iow6zn4ypysLpwEpjSAjMFUupdC5M", width: 1932, height: 2576, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105222495603754256646\">YI CHEN</a>"] },
            { photoReference: "AWCwydikF0YcKwhHOl4mU7RMLiQV2zjfLpo83lvDwCdVbh9lnWRSj5hy6OYakodySYSstvC43V0EMv-YieX0icAn028OXxFj5hg7dVrtGjmvjbzXleUljXs93oY6t9oCXkcBxFx__2TBDVHc4LceG9Bf3gv2sgwQMEK2NWh78Ve271b01PzOFprKEflcnnen4fXs0e3zkw6pPEFbPLsfkLkTPpyhYSVBsQQC2Qkc-t_hFD7I4dKh5jlm4m8wzD853RE3Ce4-EVMXNPod1ZVsZohGee3Tq1zc6ZLyVdIEclCXbDcNlCj25agMEVrnIHDPrJpbhG542lQqZUg7vTCi9lIz7dpZ__F7DvXZ4_tOBcANbgR_txVyWyTppeH78Hdeod9lSP2tpDWsHkRY90dzmOBcCsEZ63FN10S7gMHGTL43-x0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114222122076872669000\">許小咕</a>"] },
            { photoReference: "AWCwydguUGHqk3WCtpMvhq2CB5aR-kc6mT-5QWthuMIPSpfjX9uKr-WbfW4zqDL1JRdRpXRVdY_qZ6Z-Hqrt004-hXLK1eY8yWf2ng4D1qQdIuer91Oqb6Yoch4zmPcq8vdx-CPfA9rUatrjhnfGH_eTo49Z_wZPnH4s-jhryxs0kLSw6qTZwjyelQzpleqkVr9lChe6I48CZUqtLZ52kis-mDebAtSMlrYvcbgYfzLSw9YVwKV_1_kCk-M1Qpv4j8s5boD2q9qWHtBD6-ZSnXtOdmvAk6zH4zjD725p1KHZudj-ZrdgWV0bxRbhHNijC9nZQQhtUnynwRRGyMkoAzOQsXQ1h04M0e0yWn6GKAdjV3mfIwQNrkVamc11T71FBsoQv4ShmZhqa7P25Da2XMpY5A_5AHzvTeosxInlNF1RhQ2fdRk", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113533564105323779005\">undies</a>"] }
        ],
        summary: "타이베이역 인근에서 즐기는 편리한 쇼핑과 식사",
        updatedAt: "2026-07-13",
        highlights: ["타이베이역 최고의 접근성", "다양한 맛집 식당가"],
        tips: ["쇼핑 후 바로 식사하기 좋은 동선"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.qsquare.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14387500080804131345", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%90+%EC%8A%A4%ED%80%98%EC%96%B4+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "ATT 4 FUN": {
        photos: ["/images/taipei/info/shopping/att-4-fun-taipei.jpg"],
        placeId: "ChIJjfzEsLCrQjQRsd6k1mO2-WA",
        placePhotos: [
            { photoReference: "AWCwydgZQg621LzzPP63sgomuNC75AeBxY7fhUJ6HkZPc5ek3hlyQAxIth29Z0lNjPgJjonDQHFZE92xhwoMzwd63RinmfRtyDEOMHCdhnw3nQPA0qE4gEqrVbBXtizRLRIsUadYITkParHUfrXAKOgcgp0IkdJF39uRnrtWhhCK9NdIY730o34k-M_TKw7vrGTyzmXLpmSzO82ZfYhvgzSXhvpzBfm0KwvcjW63_v7H1g2owzwwy0BRH2p-INFtlwT1AeAo-fQTHlbdsgcXpdTRez97YJfE7YxDrvJ-7v10FPwBq8jW5JGdZBaWzTlsx_HodDzB3dPASoLLWAfEebmSMGLwPycN_jLtnXDNng9gjBQ3BiGscCfM-gueo4mQIjAtV-LNpS_G0SRDdMQ5JvftcglFbUmR3x2GT-e5JTB3EMLMLdDsITNCseGuYyJdtw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114109902564805002128\">Vicky Wen</a>"] },
            { photoReference: "AWCwydhuaVIj4Ur50-zmRtc1NCRLBhuesFyNOYwvaA8pc1-kRy0Us950kvewngnMnar0FQL4nVRmiAujsH_gx4HU3srQzcCE_ikgAeGPtuLBTlV9QQ_7Vj3a4bn4yj0UhBnU1Q92KLrXVkdd-71U5KhetUMmOr9_L3fmWkQzcYkIZGHWMIo2lGrYDIzMW_fZVIOeavi6-fWYba25hPuLsX2AZb_-AP37MaU9K7qUS3pN3ShyeVDuViS-le0-t83_UilNZPRcb0nZSu-24lF70cEICEKiOqTojQDkNfoGzlq2-mTcHsGf1YmYKaP_GWLR-q_damf1CJLP5J66SZt_oB6Gzy8sgnf5VFRrocgbqGwOC3ZI77yyygKrprlFIN9KrqN-cnobwkWQAhqw9ZpVY5rPP4xsCkh8NT1UhL_7aDw1Bam9K617O9BDma_HJsm9hbOL", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114109902564805002128\">Vicky Wen</a>"] },
            { photoReference: "AWCwydhpZk0Km13UzH5v3MABuJx-NnJLHrFzZYXz4flOk-vPAMqUAF6LYsuOMW8XTKBCPYfIb6AopSyORCgKJKk_PXAKu9u3v04SLD804WluFjExO75AuxOLPtGx9UHboxmciDNmuATk7y7_t93nTFNf6yAPaFF3brA4LAyuCzAGVZtJVGxDOIIcaj9a6fsK0wkfBXcYwEhrKTCQegJsUyYiSbAizCEcvlNJOOiZCUECI9lw0tengPBxOoW-FQWRGiL2-BGm3-zoHF2R83Q8rhYGV_X8Z031lSb3Gh_b6nILTTzXRUWRf9Xehrp60TMXv6OT6w-P9TCQ0yy8UZao52ZXl9iSV0gYb4IPDWJiGKa_QFI-K9uELoX9k-xvCP0f-E736RVzZ_-y0kHBqyYxw_1C-Z5qrwnTDbSUW0hIQDX3roRTh29_", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116904374243723631638\">潘志強</a>"] },
            { photoReference: "AWCwydj6Azp-rGly1AYpvIKws4gtn6wKf5v2Tnqaz9sCCeLjCrlcs52yPfu437zvSpey-gg1inxdznY5cYnxOdQkhmRPx2tfeT-iaz1B8-9Feqfi-AbzhdrmjuwzjvbU-kSuHi3JglYUgwim14KMtyd5GossYmoW8IpvpETbTaTzgIPueY9rW7CCsoJXAcvAu9wEfomyGs_Vz6IhJsOsMwduvxE4DSEZ-WQzIKmCntQ1q9iBIDE3LlsrDNzEaRdPhRq_3TkRJgPjiLSblMwewxWfPaPWPrCIk--g5dl0we0TPQH1aF_kBAH5pVBvbgX1DQ8Ooj78YzSp4ocHEaR7OzfAIws0m8SgiHmqlUdM_ZmGPIXqfKXTXe2pIC5q9jQCjARfgEbl7mI54cWd2nnaUBRT_3U3Fc4RL7Rw1iDajbjAdYfIXW49", width: 2160, height: 2880, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105867915323987496483\">高倉櫻子</a>"] },
            { photoReference: "AWCwydiXTEDgZ8pz9bCIQBi0ezTnVzaTxI-MJ--yvVCUHmoBTp0gk7HSz34n9k7dEsbL9DIAvG6nmi7-XeK25JCohLVrIIwhiDCaLaJCVM3ia7fNtRbz5aUqwQKy5dTTjPyn-CVjSXqxvfKibiKmqzwlkPXWTiQSJwq-6o_yT2rr2QXVq-2z_E3DDIb8FGWLilxeoIoSzT9ue2nqdrcCuLbDFRm4rYRrjDW2aPzCXYgElFz-6XBzWoh4463znTMnAmFREZnspuVWlHPuKxxmPeYoOTYQq-JehN9-yLLA2x9Ik9eJY9IQzi5jElRFiprjyXHr9JxWD06BqNWynjtnb7z7RiNkqWciDmYPydDwU9JHX9lR-1LROXKa9Lil_1St9ToIOBWLqFma833pVe8NfLMCGGvKkvPD0C_eB71BQgfXxZIjLC1I", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107493523800056068658\">Vic Huang</a>"] }
        ],
        summary: "ATT 4 FUN Xinyi Store 기준으로 확인한 타이베이 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 레스토랑, 야간 동선", "평점 4.2", "타이베이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.att4fun.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6987816836761181873", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=ATT+4+FUN+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미라마 엔터테인먼트 파크": {
        photos: ["/images/taipei/info/shopping/miramar-entertainment-park-taipei.jpg"],
        placeId: "ChIJc33P9hKsQjQRIc4lByk_c00",
        placePhotos: [
            { photoReference: "AWCwydgI2XjPJmV8nh9waJMRQ6tGxG7AUfb1FqY7M1gtGddQRHpQuzpKAj-fBrWPAdHXqAlzNyKZoVE7q6bLN402sic8y0t_CCUhxY1s-F0MftKTZNlzOD0uGW6w1XsrMQ72g5LrnPVGgQGnnaJhTrQhg3z1iDXkhLHCZZZqCEXXl2PsC-SOxACfNkNbDs_A6Oa4AjBKlfOc7DuoJOpWBf8Qj4v5elDdVP14HblFW0h1IeEC30i0AwS05sKlsSQKv8dauZjWK0CMwsqU-EOUAIBsEcUXFULrTt9AoD5IQOWlOuLMgSBzV8m-MrPZjXi32LRe-u-DzaFDo1qvGlb_qT4R_6YkVgwHFeAPBrCYorvOZLTU1z0CPKS2dZWb6UM0V6gQxBSNRK19NgjFbkK4zUeFCYVyHjsAwmPqiT_uyGQ939YcJmza", width: 3886, height: 2914, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115705693174651045691\">Joseph Lin</a>"] },
            { photoReference: "AWCwydgJWWInkfJ_lsIoCs7kyAUYB549Eimi56FIGIj9CPdu1JZ1XWvX8P0W5ePQtZk3sIdoiKAr08aq1T8cfjMgUFqLCl03bM3am6ZejZFIafJHsWUvhxQqN2Qo0hCRoBFGgMIZVfTWZ7s4kltYaCO53WUx2CVRymEDyiXc3y3H4kUEH4Xsi2QXZqNKS_ybUapKFB8MV1FdM1NjNz8NSFj5lOJu5bvy6Enb_MzLbDNLfRl6JiMd2A7f4gzacRZJn-ty2NKZlTrqqeGMG8-ThLLzQqHvt6sFctQGW0ig4R5W0aHcQZiw-ZH7I3JMMAbJkGSN-5N8W_Md2n39r6QN3m5bHAy7pDd7cUUJi99UrpCIkUqhHMCGbW6cA_jKblNhU0SCVkdAf6hgOcCoagCU5EqrmeLZSwnchbEvPvBpUOnfjMYSjA", width: 4800, height: 2732, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105668893955291291183\">老師戴</a>"] },
            { photoReference: "AWCwydh0MhPb5HzLfA63KCy804-StrGXAEHclM6ihiYFjaS9aa8aBSGcPmHofXjLUXYbWtzFq8yUvW8yWM5XD6bTjHuhF-VmUE5ZMsPGkVrQ1QcCJNPkdqGptk2umnh7hEXGRgmS8NvsWkLtZC5IjgUeXgJhGTw8XYwtc_jeZOwDwhPlB7OY1erAK69Q_ELpGJfjEDnR0vsEl0zJhmPt3mUnsWUbVx2pXrO5joEM4jj7rcSvFEZNmiVBgNGgi9ol7EnVD_iu4zOI6s0TV16hOfJUSpf0yLyvr_zxEWKFdwXq8tD5g6WEXttU5YuzjJ7zO1K_x7BCmk1EN78HJBCLbv1FqYCE6BAj7le0i0Q_ioJ65hNMOqpBgMqmyU4HO2Y3EKIH7p1ClqryDMx9vt8a63M3kTTLrxGs_Tov3S15nCFxj6yTduw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112299757034802503100\">Enzo Chen</a>"] },
            { photoReference: "AWCwydhBuGxtAro7fmvctbUxm3hEuMjDd5bpDnaNKk4-MPJGvRIDQjb-XmrZpIsDQIlYMLatb0XezksFEtpZw7R1fWLQDphG74ApdJigfkfT7r_rJn9mnnlfqqC1W2DXD59C8H4zUSemyn812SKY5uXlpdaOEE4BlqzXrzB3W19qb-JhEfl_29OcQJq9tiKT1ZtrQvGK9IrwkWKc_Piyfgq_qgo2W45Qkjsok7BTFKOk9Fk4KqOpF9Ddq9-YH8ekxkB-lGzF8l9NZY07nMnZyEqyp96kKr_D7Z3e2WZYrI7qX2FTMoLIHVZ-hEosBQclyaWjCkAJlmgrf8nOi1kwV4HZ0FHA4nRStPHQfi_uH68682p4uWeXAQ2YIu3oBt3T046HAU2kwkUrgm-5fUNdSP3MS14MPvoDQtYPcD6HzkjOyueXohY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103548522298425734686\">Hsun T.</a>"] },
            { photoReference: "AWCwydiG44BtOefiBM_nwNMBbx8v5lD274DSJzSw_ay9KgUbChoegebrNrP18ENlqwvP8rSrA5X5eetxh7kFHEM1DIyX698dcMG0b3x7GoGIxdOuEZpNdAVkm587smJRM98Z-pMorrwqnJwoaNGwd0BgNI-LWNGbvE_uqXrM5Lxn8qWcLgMPOIIP6XheFBz_bS7y7FzuNBrhN8kceBJMYBiq8cp-4gR6NDubAdlLR-rpojeBPjaWchfAHGYOG5dd2nWR4Esa7M8GBe11-C2VuF92QIPWA7l7rV0pWgPMdS5kLv7fqMRW75ODwGvWjU5TbzZ8dwyvTeAJ2qzksrFsgeo0g1iQIpzLJozVw05UK1SFmQV598oAgjUCcKUtZzK7UZ2_wfQyJQ-V4SzHtcPrVnw8efxs3XiNwZjJCjD-EpP-kIqkDF8h", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105576530742812899174\">楊凱茵</a>"] }
        ],
        summary: "대관람차와 쇼핑, 영화를 한 번에 즐길 수 있는 복합 문화 공간입니다.",
        updatedAt: "2026-07-13",
        highlights: ["타이베이 야경 명소 대관람차", "다양한 브랜드 매장과 영화관"],
        tips: ["해 질 녘에 맞춰 관람차를 타면 멋진 야경을 볼 수 있어요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 1:00~10:00; 화요일: 오후 1:00~10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5580873808688303649", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EB%9D%BC%EB%A7%88+%EC%97%94%ED%84%B0%ED%85%8C%EC%9D%B8%EB%A8%BC%ED%8A%B8+%ED%8C%8C%ED%81%AC+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시티링크 송산": {
        photos: ["/images/taipei/info/shopping/citylink-songshan-taipei.jpg"],
        placeId: "ChIJoU_hpJ6rQjQRi3W3VunN-tE",
        placePhotos: [
            { photoReference: "AWCwydiH_oHrDoOVi_Xb0qWQ76twBfykUEkXrwPjDOEJOwCuM8eVagrEJIHWTK1EfLwmbabOahoQNd23oEf5Z9otX1MmqldUOPKZ8kdSjIUYeLzn3Ibazh27osW5icV7acXL6DblqHWzv9_iWivhLhrwriDORbzEjPr7KH5wnXJ2Vs8v_m4puXBg3lCfDxIi-Wor_hPkzwq-EqmE0waeIduGIyFrYLpPGO1YMCANsfpNqDrYE1p0KBCGMqN_qI5jvCXvZQl30Wy1U5LXZRg5WovY5i3ZaCns3-awpbWWYkFq4wSUyYjLEGLCKyB69w9EMANXc0WOQqsv5CyLb-GLCMmAb7or4PWq8-JoY-VcWw0s_PGpa4OS5nnzbZUD7pLSnyBXjwAHSrXlQwJR8NW2raaG4qVKyg_vWvk2f1EwgdiM2ZhokvSa", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112932737774699676422\">鄭彥龍</a>"] },
            { photoReference: "AWCwydgUQaxiOQCsrlOohJL7JKtCTRPWvFiV6W5esqUmCFYtpTw8HYonqd4YSmLLls96ux6KPk_VpotKAJJ1BO7LAzX2Z1Xhhc59QPBptSgwJizyBGuvdSiKKKa-POV7NlRXjHmyL5BK0pZRPu5345wA-3hy61t2SN1uq9zfNKM96KTFcc29jRLVGVjSpcNBsuPMIusU8Ms5wW6eTJKe3hsZ1ebxRUxehevaR_75bka0NKD9lfFOevrGvpU8lsziGZr4PUf0axyiF5Sw6cVHGg9u1u7uQi3by7z47pcZ2KcrVU2XCVq_wjDEL24GGecOyE0S1OIz3Cws-PN4bddvJB4QPkXi4erNEXgUW4XhZWoG9-QPzMjKucDSo_wc6GvrZt48IXAWBHOjxDvLeckFUfcWN5HyernZRyhHASFIYYmetTE6In8qctWzhKTxnH-_C38P", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110406490661636083051\">慶</a>"] },
            { photoReference: "AWCwydjn_HvX9jD_TI3LgDNCC8hQbL4j5tu4mZsUfyiHow65OCEmY_l34qPEYjg1OyrSoGBpshgTDdopBd4LVgKU_bk1Hlanr4Z2SeX5x-oIhIFKvwyqozJ9ChgoYAzeK1L2Ejn4UL8qM-TGDXXkQScI8MWqnRDYj016xJkW1G9Ig9H-vAQo4KfhEqQ3caH8QCBmLx2g-MTDNwyC6zOynX1_eaKrFDK2Glxf-Zvz_YUvrIOmrP_njq_w5WwfC9XoZynVWMJCsqwrwVdez1DE1HzJFGZyeUGdtVhOCZiumj0LFeNfEkYftVHpybnftVJEvPF1eVPP84i90DfrDTzHnBBZ1Nsp-BZp6ltHTdmyDpOhfwSmLylQqOUhUm9QRekD8v1Bu3dCVucCgCum1zsmf2JgHE-PUvKCwYGsELgscuqtflU-oQ", width: 2449, height: 2449, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110211615644164019589\">DADA Huang</a>"] },
            { photoReference: "AWCwydgT5bUt3uK3yMyz_WOwuedpAAupBmRaCl0lWLgvimwYVOqNJuzfxGhfTGU-7B_E_yKHUP-hppLdCcVez4lhWEbu3A0FbfltJ4YCpUjXihKMEP-zLXVFdEOvujY_nDTW3wVM5lbkAwLtkUK0u4ZZdz2ld-8YSOXHjCxdtkcub74fgOvy-hlNtvHTjMIlzkSqGOZhlMlxZdEk2F-eMQws1F0p2OwuwGp-vQS6g313av5NYXcTDkZoUzgv8i38NUt4Qes-VyXrMlazUEgsOBNTKwSfheaQyhvxmHhitXLFO6GMZtx-Tr_cZRi5HSbM43-ULWodl43PRnTxcg9MSO02Wyiim9lANOQi2Jpu1Jy2LdVBY2iLTFnCNAsaVW8ft3ZMSp3jvYQAVjzbA2EH9FVIX0kfQw-iNjaTzIqc84QQapIqiIp4", width: 3264, height: 1836, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100663001123867038294\">Ray</a>"] },
            { photoReference: "AWCwydiH5tnHrX6G97n-stYHWxr83cViNbw6cfqqCt33_6L6wzhjnH0YeS8kp5_WXTT4m8ujcoeoHxCJuhc8tjcvzPx9c0av97BqDt0XtxXeeJVuh_fDRjUmIAsGMTOQDNnDJj27BoQeqgpB19A2ap7LsVN4sbq4BlAvt8M-o-oQ-PY10sEH1itJvT7iBWxXzXx8MCGK5Dnw6_5i3pUKnyxNdgnO6yJxLx-Rcrq3x3LSWnpEa11AapDNMGDeeYusQ6lM84RssgiHy33a1CpO9K-OZcna78oCQWMPBBOvCXmeZC-bCPV10eFemGusxVDb0PLfsPpsYvEImA9c4KI9HZn956U_SpEZDaUQ14sue8YbP2zVGoyPOs7ktc_JTfLG4f_E1AAYuvxuKHx47tRza4fI9-Fp17z67xCcof8VqIKZsI0Y6ZT-", width: 3030, height: 2272, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112805707399184928693\">Vincent Chien</a>"] }
        ],
        summary: "라오허 야시장 근처에서 쇼핑과 식사를 쾌적하게 즐기기 좋습니다.",
        updatedAt: "2026-07-13",
        highlights: ["송산역 연결로 편리한 접근성", "다양한 맛집이 모인 푸드코트"],
        tips: ["야시장 구경 전후에 들러서 시원하게 쇼핑하기 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.citylink.tw/songshan/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15130632300170540427", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%8B%B0%EB%A7%81%ED%81%AC+%EC%86%A1%EC%82%B0+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "프로스퍼리티 플라자 구이린점": {
        photos: [],
        placeId: "ChIJZfLxBKepQjQRKWVPxv7a9aI",
        placePhotos: [
            { photoReference: "AWCwydgursz7F66E3QUwx_qaPClhZDbbk6kXOOXqmz9SljM_dNwq39G9f4SoO7BWmlrceo2OaVpNiv0Ykx_K1OZ29CbYtxZTN53zIQwYQCgFCUtcPnL7v9l5bNCabhOZBHZXoyDNPnFwpbFPPoU2QgBLwfU43_E_YVQUxoba3ZTaB2_J09gGHjqngVYKDjyLpMTHQwGDw5OT9FDh5U96x4ueHjWnmTbobZYx3gFJq6CZzuxEFqf2w2fMjVnuPitq-X_x6KbiUW6EQ9TTQjzzC2QGhrXTZ05QDYekvAtg1bzxgNChM2_51Mvlo_6QESs0oLMO9Ew5sfuOFpBeTebsoPNFVpZ3eV_RqPiz8ni1XqcXxeVD4Acx22iGX9fospQIU8xcY5zA3GzAPuhChoVWFDQTflntJqgrdvp-4sqePnQPCdbjjf6a", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115850902788670353777\">范振鋒</a>"] },
            { photoReference: "AWCwydhDTRc0EAcyzM4yY-vhvqjE9J1TqvfrqC72PH5aeIYu0A3daT9pRmT0yCQ80oNqVee5BOSPxNLVY3zN098jIc8veobOhNlpLV8o-WIdaMFcOuUfE3UttvtNve9uIKf4xlQIcFVlneQJZUHaXMfWzm-hMzS-QZaQnt-I-CPbd_LPXrkGeQd0a6zaXnsbtAUsht8ZH9UzwgQ_-8zD8fL6Q4XYR1cvQD9Kg15m3M3bYFyyqMzg9l6uIeZL6APmSiqgH9NZKVBKg9qrZjHRisQueSRwmNNq-SWE750gd-kd3TN7FxWHg_7UBzgharVJk6Qi2VV5gxuf0ERVK8p3vOeA9bLEPzyzptWfGONZqObrtFGB8mOLmdp8qWKMMEukXXVMbGj8nBns2-MeKzwVa8d5CFaSKa-jVHBkE3QY_rd7KHDPpx0AxuCO6_hTbwzorWVr", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106147502638589716873\">HC</a>"] },
            { photoReference: "AWCwydhl6UYad361ixw0ytlls1Dx2x9jMrDnRy3s6oM3ZgpJEQJoQkdigQFnrpoFXq8N3B29r2v0uT1tcBSypJmh56UFidqjPWS5gPo11poMt5zUS7PS95vfr2pFqYzhWLkojj4LMqNArm8n1IGeDi1RuZ0iPAK_XxBafipRSwr-VeDNbL9fig2rcMvitEvJ4wgMWwE4WP00TuZ2UO8WYcK7GFb1KGtF9KWUlpK3xSqlZ1j82-YsCis6oTUF2MSy4wvtT-UqQ6mmarg4BGe7FVPSFY1taGFDhOco0ZZ7KkSU6WR2EPNUC8DLssZMQw-qUCuYaQdrAay6cJn36jhTBkNDRjyDig4uZmU3yCuleYYjixwN2iScW-XGHzW0Ej3ZRXqL578y0nZon3zyzmg2IRZcSqVJbjRmaBedUm7i-dzTBtCRQVONUTwiAfO__kmvH4oV", width: 4080, height: 2296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106559852491577113472\">立神恵子</a>"] },
            { photoReference: "AWCwydhNvTfI2q1wFmiRGCcp8zE0quojPFrGEF4Bx4LwwQGFYNiZ_3Mb9ziLKcuCzbV4wEPSHwYr4DfyH3I5DJgC8_kW4wrrbi8-xtVzxeXej5QOOEtjElMHTyMYThNMqPolKkDjAQG-xaks5j547S9zlePrTZ7wddZHpQ5o8VcWcGiAveWBcrgq3c98Z_TV0h2CN0kEOB0uqgQWVFL06jRN3E-3CpGHRuwBwP36Cu74WFPmqjfeMKTJJL04zNFSVpy-KUaPPOp5I_yjcSdZd-n6zaFfiYnmVkFo-u3enSUNe9MPY0ybllLMOdoJPVIhj2Lpxar9ce7ZrJ1veD0QZEPoNemTpFh8p9ETtPijUZiEjsXxDXYxQ-rT7YXnsbZ4jQGb4h6A44jzNb1xcJKTiziQeHaswbzs58Ktu5_OsqEPamt5QkCV", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104092362851713080814\">Chrissy Ho</a>"] },
            { photoReference: "AWCwydhvQUeiQwxY9vWaq-zS9oAAKgPaaMIJ1-3LE-3pwPNfEhONpRN29ACergEp6K2ajfOL-zWk5AwwMl_5lyS8ONK2fpa2NBx7ZWMAB-A3ErHzwJC6kypsdf5XJR3RR1vn-6r2RD5KJdIVHBqF8PLPC4s4uy98sHNV9S_MNVOr2Ixbp6_e8ZGa19kfr0izjR93CJUCiMVu10-uF11PGrArRd-18RokuQfOs3FuPf9MgJgu9CktjVMgB05X8wg4tGRtN0w_tOJmFM0v6NCqs6rVbA4KEUrxr10FGCFGPVSaayQ6AB9sUu6625OtlpyJiRw4gRir5Bd0UVL6olj-Qs9zVXPJSFbz88hwhzpKNR9RuHqmT45t_W7yPV9wD1JMs190Ff7RiGjqgKnT1mQWDSjTqHMZwE6TJO0azf72Sa7HslA", width: 2620, height: 4656, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111638948732532575050\">章露斯</a>"] }
        ],
        summary: "다양한 상품을 갖춘 편리한 쇼핑 공간입니다.",
        updatedAt: "2026-08-16",
        highlights: ["쇼핑과 식사 시설 완비", "외국인용 쇼핑 정보 제공"],
        tips: ["다양한 상품을 한곳에서 구매 가능"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.uni-prosperity.com.tw/store-info/?store=%E6%A1%82%E6%9E%97%E5%BA%97#tab=info", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11742532391222076713", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=PROSPERiTY+PLAZA+Guilin+Store+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "유니 프로스퍼리티 타이베이 지난점": {
        photos: [],
        placeId: "ChIJ7zDC8HupQjQRdS21WnCOB38",
        placePhotos: [
            { photoReference: "AWCwydieRuOy1GdYVt04ID922vO45Bi_nvpqQDux-n9ATbxuZZNp0QTSWXyrA19nnq401JBYrd8of_9iVDZJzVMMbr8hpm-rNgsOoIi49zgwP5giWrm7FK6IwmUMit_r215OzN4YbUxgzmxzHV13igAi0UPcteopiK7FOMe0bY7WnGq-hDz9BfLlK80xcg5B499n8rFzsnvGYq11_clVWWQAKHQBrWListf2WC_wk5plbApCPU1IeJX6MZpE73-8YGmpb9RhAWaNLr7PBnjJIl-G2LhVJEJpRtdGDWbW8TXDbm3Ml3VOZ-OJMH9APol_RZHajmhkojFlZivd65R1BF5rPYLEpymBm43eM2445u6PYFK3YxU2u6IES_l8mUpnzRMGtyv63lNZTJ2lZXFjq3E7rWXVMs7cWV50xN5lpr2N3Rmxj5k", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115511954609975650623\">果融</a>"] },
            { photoReference: "AWCwydhIefdC8CXvfxC8HCQ8-W4X5wMqQNso3u7g6n7t-um7CF5cCaVHUiZzGcskDURl_bJfhJ6d74KH_74XIefCr3f-Y5_2igUDwrPB8l_OryJiHe2AhcuCiMBDoPTYV3R_BFP_qFoq3Jnt6J_O3v9uhhqnA6cD6_LqxCkSqxYj2OCnfhD280m5-WdG619Fw_MQvPN77b8tZgvHFUlc4CkGuZeWS2bx_j7r-FHyifCPzLQ2Is4Mop78rNHFuDAaTdCsjtKhcSY83EPzJOTfCNp-LXOZodYaGxfU_b9zgJPnkdSTGiwmsNhvbwWt8CLcF-igqm0mvlJFmDuOXUgUAbkbbmAATgUJRhf16k4HcY468e-Nq1ctv3TgkqMKJ62dxm0KK-Mm2U35n1v3XQo-YuPAmtEkyXT8Lt37OjAG5lC9i4OOEwXp", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105389243764001395623\">Rachel</a>"] },
            { photoReference: "AWCwydgqLVhk-2v4uYsrfUwqXRya4F-ErLIYXnjTMh08Idt2AhilE1WFZetKFb1oKCer_L3mHtjNa_Yi6pGnLuU2HM30CC7HDoD1Ad4tn8fyKIksBPxltXWlSSrEjaIpMAOr9VaVkCTzZioLGFCUt1Rol3eICOlUbt_BOco2CRUY02up-Bd5X5pd7l9Ux08PWBgGpYtol0KGhQ0XJjjRvZFulDn7RemufaIknKAtTfo5OQQM1KrfVS3ptu-CTkLFAn9p7f2eYZmoVaYlfUksFpboTfFosxDTf10HqlYrnGnEvJjqtALyJwKbhIcrh2rHOsILEfdL1WmDK_Mqbl-Zi014-oljgvU9QqHqJp6ZRxKXL2nmjD2F5XNq6TlXKWX-CoqcgWB-jWGfPjYE8pMe_PEdqC840f_rtMdEaMBy7aKnZRE9GO9L", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115511954609975650623\">果融</a>"] },
            { photoReference: "AWCwydjYfL9DS9wEH3WANu6E1dDKBSmdL0I1Ah62-taCPgWXZZ9tLjXm-DeDFBJhpfdaNzYxj4gBWTbe6BjydgRhDxlUSfcXetldRKf03RP4SaogE4KnOTJcOrZ7ntJ4or6JaEM57QLYGeIUdql2G3VTyvuiUf0QQnCm_tUJ4mJvb0W1Y3xeM1tW-3w9_jQr6ozqrxe-KYOSyiwkfPOCTCCYVQ51CCT4Ym0sdgsWkxvK9Ez_D5c94A5H10XkYHkGLRLuvH2EqMUZ5dQHmMDmtsXsyeCQbEuzTXqF5bRsqseEAmqL1JBR5A_spLki2LhRaw68FZtAm3LbcNZNxqgXPfIm8_zlMehPLTN8AMFqwF_BnoAOpgU9byFIx9KkkznTUVmiUliyP3oTA5Y0CfhokC7GSp_ItVQN8oytox9ZmQkiays", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103851862358048662552\">春天</a>"] },
            { photoReference: "AWCwydialq2Gos-yoW10gfFLjGFXVECSGblqd2j_dYqho_ozy5e4obaMfzTxg6RHuuYu2wPAwCWOigpPdtSw_aB3zWJExENktPX4KPsOpH4B36K_nAQ2mJo3ABolUeQd3C2CtFpSCZOufL1TmerXk76nKnZ1jWbiDfWQ_u3tNmvYOivf7iNajNpp6IhQQiovk-JnI9Z6-KnDrVh_I-sjTY7JTRF5xDCA-4rQVXxDPjDurJSAzebmIfMNZex_YnWNzYZ16ikuMORxJx5Ecrgc2wnhJV0jqnIeDuZflTxVNX71BjSTnOtnl-dzEHfZhFSKJVU4QCeWAfWQXnXPID_n2ph77vr2aONEtk-GPBt-fnWGcvP3SPLRudBmFXHayoai0HbYuAEJcE6-YqHdJ6lmBN7Jyw3BFjOzn323WdLKZveQoV0", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103851862358048662552\">春天</a>"] }
        ],
        summary: "24시간 운영되는 편리한 대형 마트입니다.",
        updatedAt: "2026-08-16",
        highlights: ["24시간 영업", "쾌적한 쇼핑 환경"],
        tips: ["언제든 방문 가능한 24시간 매장"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.uni-prosperity.com.tw/store-info/?store=%E5%8F%B0%E5%8C%97%E6%BF%9F%E5%8D%97%E5%BA%97#tab=info", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9153441380863126901", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Uni-PROSPERiTY+Taipei+Jinan+Store+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "까르푸 마켓 타이베이 창사점": {
        photos: [],
        placeId: "ChIJE8LOJfGpQjQRtSyVJo7Fdbo",
        placePhotos: [
            { photoReference: "AWCwydis-cnpkAkMW8NWWdu9QAW7uuwh6SyqtOzIJUX9wQ_flRQq_I23fIjmQ13cpB3XL38g_y9xDhRqs8bOg3E49-yhzk8BNovhsWdD7oBtC_02672dhhejWE2KwurYMwboVFUsz97MY12Lsh2z0KIxoxwUSyeZAbFKpSG6fOu5jb5_08CJU4Nau-Wcu7QVZrKR3VRT3vX93hM4_JS2aUCPb9XWwayeaM_F7AEmihY2LDmFHhHtqb5f_LrSxEpg_xLNKdIUeJVsrARHwnvjTW1MRDAOV8SPSUFL0tY1crxCQW7nmJPqAOSQQryGrWvH7OS9JpHbQZ8wSPd2IpdBHizqfmGIJl8DUyS9nvvgl_JJOIcTb4XXJDLI4HEkadlhE0zGuqoHtO3YBF-d6x3X4IBIqYGjtciXwPcbPf2c1eh0Eno", width: 2592, height: 1936, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110676890302569490901\">郭景福</a>"] },
            { photoReference: "AWCwydgI7NOVxmrIklyl6BHLf1ZhsAXQBZxFEQU89gj6MxsNSZxaPW3LobyvpYK30ef5Q9MtD_o6PLBs1xK6PwoPBAohVus4VFX6vbl9uFzBzqv_xz-ssIgi3po80qA8X8dofJUUgX2vy12E-esi2aJfEZdOrnaXrrQSKhUp5Cnte5BMnsQcvw25Ygk9OYCe8VdJ2afHQ0PfpuoG1vWw9zxY4-k2jbZ5bdUtm1n3INLAm8GgckaHI5QsmSrnI2jJH08gbRlVYGqJGx02AcMAs4gAqQIhpZKBCeu5duS3VvEKoxuKzd5j6lklbRfpML5z0j1RS0OWBa6GGoZlfjbyhftRSgL9_MRl5ipZQrhXiKebW924ofWs11BLYUoVyxTmAcM2S2S2lqlq83Ps0cxlO1s9z_L6HeQrF7-93lAQFvsjV9axElRS", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105478083228711115362\">一流</a>"] },
            { photoReference: "AWCwydiUYS8sYNfrGhAlhpAp96RTcHF75NlEM_zPp62H9QBwiwEgP6LGrrnMAOZ0bNHOBFd6MQBJ1VDoglofQbmT7xgMW5Whwx4u91hjVXneu_mjPVs3LblQhYKg3xg7xUclapktp9VAiavKCARVvaS6Zpnpq26XgfXGOZfaNmJA5owvQ8LWYWe5ZlpDV5LijNj6GHbIQxReLwsbkPZqXTqXokRRJRqZ3vxUxAxI7hmiVxnDB2urkYKceIbnOHzsrUNPeHJjNFN_0wc9CXIEI3LhjQiEqF9kimknB6UtudcpUxjWTfUdkvSRAdl5MmgIay0FZ3KXglfPDR_E6GeLHmgEkRN9uAer999vvBqskhXhU6L7oKFe3ktAEiiXucIeCSD9ZgQEXTDo4o-7hb6B7D66DYnMEwdK0eO-8lCdRZJKCQuVLoGx8S9h3XyFWCyr5K_X", width: 4800, height: 3604, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116900802599741720903\">Richard A Francisco</a>"] },
            { photoReference: "AWCwydjXu9LyXlwNzbcRq_be-t26rxYDiBTZux40PtPrc8UaPNRCT75nKwpBRQsj91fvxXKcMgc7CFAnQbVBG6oBdezMYhISfUZVN_mcovjQwakJItK2koR1cKjSrS97usSfMj1ObXmvA4hHYE1xwAkbj7iKPJANoSGtdbO8hf1cWJvGbm_9JEMkeKd2l7VaeUtvTH7UpLFIzu6T_mFtCi4L--5dJx7mPwsILwPIFG1TaU7KXybZ7rtB_l5W8jv3Pzd50e32mNM1uBFCF5JBrRvmTxlL0kz9v6JCYa79xJk-QqimH0lkv2qcDdOcag0nquICWhJQeaAi-BbBpQ_R-zzn3tRugnv0MDpDC6x6Cyse84hD-5IZyreLazFrFNsNibe3hPDEEbW2zf_cNABObVTwiDoGcbGUC7psuUAwcmTFIan9lbi7jK6UENGJL-25PQuJ", width: 333, height: 324, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110305434267629497891\">樂家康超市 台北長沙店</a>"] },
            { photoReference: "AWCwydjVlPiab9uArn2oE3dBkrZVFjN0hnkINkc72KvtdJ4JivkAtpNlrDTsUycZQ-ygdr3Nnx2m05l0s2h1UlQ8OF7kNoDKem4pX2Ut6oMRx519TahilNVJ_ZHgUm3ImMfPe09xAjLYQn--131_m6Ndm6AO6zmPn_u9aYvo0ziGNz3EJ_OOTbrc4WYiBpnEyYSfDs2paeldOwEZXgp-xtkhshL3HGM53GaTJ3PFJLqOMRywhD75u9GfsI7hcq1lBYjnYA0ZBDBq7Clp1HZyXV8Qxsm4V3kTKDKJIyM3QT-2RhHFC9QxdHJ8JmnDpcvbGQJySvNSs5u9GpCmg5W20kikrtFyLQBRwDwJlSiBefiX3g7jBhbaJ_PA_KN7xQSKHR-EmMGwJdINkwfCAgM5CJi9uP6COfFKqa3mmo4VtXTtmTY", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105478083228711115362\">一流</a>"] }
        ],
        summary: "규모는 작지만 24시간 영업이 큰 장점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["24시간 영업", "다양한 상품 구비"],
        tips: ["과일은 다른 곳에서 구매하는 것을 추천합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.uni-prosperity.com.tw/store-info/?store=%E5%8F%B0%E5%8C%97%E9%95%B7%E6%B2%99%E5%BA%97#tab=info", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13435862277653081269", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Carrefour+Market+Taipei+Changsha+Store+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "미아 시봉 큐스퀘어점": {
        photos: [],
        placeId: "ChIJ1SD8dG2pQjQR1tfKBTdxTqA",
        placePhotos: [
            { photoReference: "AWCwydiRC_dn1xdvB1p2YND0gAlBx4ehIVgNcl282ujdm09nHW1eZsOu_rGdqhJm8TKhrPdCJ-7mZxADnl7-k2RA0zFkfVxdaZ7-tnto_3fVjLrGv2CjHj-G36tIyv7al6rzHauGZQcqCotWDs54jtRKdYpYTHC3_9DfTuGGdxRoki-mJiWL3FWY8-a8MPApyJifGfrqdht8KLTYTb8ONnY6DNhdKssRjTV0D_f5rblBnDlXuW8DvWtw5ciaklpmOxSaqZksdANGOdw54NYneJGrt19PdtwSbpVz1Ehse5SPmxlLMh1GDz7aP2wNdVa2xRgpEf0_vIMprk4gmSp-b7tcZzriQV8wVowivJCP2urlCPOQyouOg6QDtxKPDJ1xZnfNm1kv8e9JwpkSVFrpgtV0Pzfksc0fbcmlpM-Hr_wpTo4", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113568944130866969997\">Ma Yo</a>"] },
            { photoReference: "AWCwydjoGRONAFXrpjXmQqoIi13cYndO832-KaHREeHpUZllSBdelOFIsqKgE5uzzEkMLc4g0s7c2qsb2vFXF8GTkhtuXeCaiCsXVB5r1G9WY-jdYoNBTLQqtQWiibRSm3ds1e0-roh41-YBBKRS-wg-_oMRadRMN3xPgNUHb6tg8S64ruJxnCR4TQHh-PBLsa3nISDCfwXsb5POfsjbzqwltpjP2SEKBB5qRv-_NIFI3aP2LWTBivICA6Php_vFGuJ9shzf7ud2w06oijauYS2zK6uz1iVMuN2hsv6LBpKa9NK4766b8jjnjU47MvxTzl56gK5QjrDaf9UWQAbaR_8WnV_4RXCKx-aWw7dvDKzKfcahQR8pG9fuqgmAINMu9aFd7jten0J7ND72cAeKD56teRHDbFScX0Ysdor67aIFNpDRCQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108370649323422753241\">Magnificent 7</a>"] },
            { photoReference: "AWCwydiVGTYzp1K7h4ULm7L19emGoO8d5nTi10PEWDNaAquJhEdeu70se0i5aGNZ8_-oIauaoUZ1zauryD6awYHTuK-Uv811uBLVMk7jY9-uImUPyNd8-0I0Pb_xWtrQkw9dHpqVsAHs_LjiLCq18AvFk37l6g8zNwtkYsBkflWiItn81Ki-IzMSXDM4SA9lVpaeLSxJjzIZiP739HwSxZW6mEOoCmmpM6oILaLPfQn7Tn0ODUokQqS3zrGZHFR9PX6U_8SmFlUznaSVxByGIPk9oJhnW9_1IwrH32v-69p7MtGtbgyPhdYWNswYlIuffQP_b_h9glDFuHZ7Wu73fp7FbRaGbf5A_h_Sq69PqVGeFtYx9izXbYfqG3H_K-gfyppRb_myqC8Bz9C_vBPuITfRgMhlrENgPHZBIhm0KsavT8306w", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107782683989232274144\">LI YU CHIANG</a>"] },
            { photoReference: "AWCwydjtZmlyhZevwO5etLdjR3XHF8qX1NCbdsUji7clTxC-5CjceP5qj5746TIXoj0wHlDZGQoL7L87h6pNNUff96VD1zS2mYzi4DUWIHqvyk9nGQArZqp1vIGDKlDb0Bu1YulhLRqfeQKJ8QN0khD-u9n-sOwwevGexK5UDGbdekcNdF4V3ymj2uTQc1lJVYk2Ru6h_8eWUJFSgtFsArrCxA6QrIqg7WyFcftfp7P6CqLl0F9sUdxJ-gB0cWSAfLHcR1lxalL7j7GrJMAeqmpVlRAHh5CGu7Dnp4xWD3WVsfbaYiTOPdfVhoJ5N7QXhBoT-lgNwc7rbNdq3nlRRu4xXxs__9e4WV8z10sPcJTYlbl3-u5oH9YGxIP0bB4YEl5a6zj_qEReXr-EPOJpIivZ8KfeP3W-xmXpyy_W1mxExbw", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111592249165790936905\">しはんチャンネル</a>"] },
            { photoReference: "AWCwydj1zA5shrEp5CszcCP8dVxmQ6mclveacuGVyd-NPqSU2y19dBNXNfa8B0O26M8_8WJGH26erOkxG0_baqr_JH9EMeiZRtiZamKcceVb3wsK5AnwTWfLKnxzhIyGvw7ICM1Fg0WAdxNvLMnHzyH1LcCrljenL1t3y3gwn7vDl00pKqh5vitw4Ns-MBlyaZBTl1W8X7GUJ0ClFJQyK8ewnrMFRHzDG3bVxjsTkpDZhCQ4FP71QYnqSm2xudXUHZE3pGpL0ak9XLr9JpnqC8sHe871cyU_5WLZefMDAIkmIc_nWJzZKJvmonIBRBphhXc5x0Oc_dM1HVY9vD7b7bwoP5dLFK87lkDubh8lL4holXaGdW3G5x-97cLakXmMAawdiCgs-X-lxiuVkQpHRgUplEGBKhVgX8c-FG8C538nGhSyAA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107782683989232274144\">LI YU CHIANG</a>"] }
        ],
        summary: "친절한 서비스와 풍부한 상품 종류가 특징입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 상품 종류", "친절한 직원 서비스"],
        tips: ["현금 결제가 불가하니 주의하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.miacbon.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11551294575386220502", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Mia+C%27bon+Q+Square+Store+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "유니 프로스퍼리티": {
        photos: [],
        placeId: "ChIJ2WPQ33yrQjQRzw8g9nUEgUA",
        placePhotos: [
            { photoReference: "AWCwydhp3rPwSn5TyBS5x1o0QleBc-KBNXR664kzjMtSIT2Fh2DpIvceFUBMoYXau2SYO7qZWjiTYy1SwCPCWbHTKllyihK1MQtzkdN6naS1zZpCU0v_BKwrZWivEQsOLCQ2EIHVci2eyxQRumkYH8V2srjHYuW1Y1G-wkjPDOpvUOeGx1D7WSSz4FCycQE_8ln4zaQDt8C2XnkjZPb8PsX1HG0jmkyDbZWnFoERjMi2uQiUc-Aa71rvfpyaSkHE7rrKGvjf5jXz8oyx0gi9yfQdko_-Lwg7CZZ-gaCN2rmtK0osLCyZU9JDf0grXkuQgdn7MQLum8xMLfmVQoeDgVRa-YgReFldXg7ThsZQMQhVwMVPIQpK7d92cJSRiEsnSgdlySS9ulo1ZAPh3xYrM5BlL_4z99dFZkokWacBBqmn4mP36g", width: 1706, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111746772829920512935\">jason Lee</a>"] },
            { photoReference: "AWCwydiNpPW_thSKKRIOPBQVLBE8rAGvMJb94Hbn3eYj31bBjrZ7ViVtbxqVgWJHcM6cgDgoPkNVeMCrp02hkrSxyYt23jVGFTaVxrlR55z3ILONEg-LYDSVtXSjuUBgu_iPXyidQz2DpMYjKaUjxbaNno30R7hwrjMJRtN7_kWqQKSK1kIl1EIr8u86RuAHKwLSow0AKtPuQsTY0RqOWmiRkTi8Pd0fWFziWLoRyGm9372aGY0-UpMX0-rsPesYEq_bOU6xwe2JsL7xLngbsj0AMec5FzRvYZSHMqjkVQumTWK0aBI5H0SzWdjS8TJVzwXERxoxvMrwQbd27LUuJbSvcUZaTQsLPxhe1OiITUf-jnYhoBqKgjJxs6bu9AK_OI4VUWMxDrUma9nw0uQY1dbpD3gaEH4XKx4rrPiY4lAqjI6LCpf3", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106596031662182807626\">Chun-Hao Chang</a>"] },
            { photoReference: "AWCwydgbv9kiPqO4arzlv9DH_dhm7rSmDsu9C43RoI0uoGYE2vQDVNtHCOWjleZGlIsoiNvwWTtlZcJaWtxGfeYr_gS9BV9fSjM0KIE-FON2Xdqxq2GkCok22MxUk9kJIX3hRA3WBJuDm-J67rls1kp4I7-OO1-D-lOHun27X0lhLe0HyNIGKnmlzrojq9bodtd9dLr5hhCcZkbxiaR1feDrcLUrfctQO1c5Wc2IL_cjm-e8zFXbdJ-nHqqa9M8L2mE3CfAGMh25hMqYQus-u5iL2UN5n3zMXuBAnnqnNMyqHOrcTwLh0rZoSvIY-uSDEUqzUNPema6mk1m6ZQ4eFjbhf14WAUswQM1XCr9afZaPuCOalZbIaDNZ7eTehHrRIr-p8NLWDg5R1Su8oS8k2dR4xdcNBHov6FdRJhEPHnAlqo2bdnGARbJVOXc869Ia6MnE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107313612841261765006\">YuChen Chiang</a>"] },
            { photoReference: "AWCwydgjfCa4kVJcY8Q-IC89zMIaHhC8k1h_tJFoi1kNmPrG_eQtAlgjisDutSL3j31Lsu68Dn6cdW2J7v9-70YRCdgmco5Te9jHCvA6X6Ts4lXOmHp1hsOo7xU78myTv8MFeLCxmaSuiBexhIh6IGrUsJsGWJisTjZKkajwtnFKV30Ff2Mmk8LlskXD_8MlVOdZDvNKh-ZzDdU4qUMeUgi_qCZ12EfGYptvzRXRiffHtRkE0X4W_dgnq55dDvUYqatNVcEVXsIEWN69imCcNCEBolir-KdbRzfuo8nu3etLTPj1_c_mDXgVEut5THuK2S3t5EDM08uYBRYycWVQqSlNOZ2__SSPVdX8s3G4ni72vc6oE57bXaQfP8YCLeqlmMUtGePA2VB_TvRVL8q40iw_5Df7t_V3jlVw48Fxp1OxOp4Ugw", width: 2592, height: 1944, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101134618886871026923\">Allo Cagps</a>"] },
            { photoReference: "AWCwydjoQYv49lkSM6XhDp8nuqMZPQrByI6TU36rsZ5az0WMOhevEseorsWCToEhIFtkc_fExHEEwQzBC_iKjj64_dV5ROus48Okig1e0phS66-oVttkxq4K5ekAIMO5gIIeVjSw6UaEh9Tn5dMEvgklr2UaK1gajzZDde3Lkq1K6Yjj86PjlCRz3lOfQ07dnx6nuNPl-5bEhcAihmD7hZLTyMlzmzw1coM565BrII2bSs2PQ06BRJl47Tgu_Q233qk6cgHxq7ppWyUYfftxGiYbb0YgznMW7OVGB3SdkSmoK0KbbvcI0R3T_v4PlEw8KTOPpBrS44o0erDe4sUBcd1fPzef0JA60qJt6rhtYF_YUrsh1UTHm17hYP7zt3CoBXG2qDMaxqc0wQGFneU0DtqpBgB-8SPRLrTJrQyYEiu5APgjiQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103851862358048662552\">春天</a>"] }
        ],
        summary: "다양한 상품을 갖춘 편리한 대형 마트입니다.",
        updatedAt: "2026-08-16",
        highlights: ["24시간 영업", "다양한 상품군"],
        tips: ["늦은 시간에도 쇼핑이 가능합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.uni-prosperity.com.tw/store-info/?store=%E5%8F%B0%E5%8C%97%E5%BF%A0%E5%AD%9D%E6%9D%B1%E5%BA%97#tab=info", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4648001195110043599", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Uni-PROSPERiTY+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "메가 PX마트 네이후점": {
        photos: [],
        placeId: "ChIJUQlz1IarQjQRTTrLG7fP00U",
        placePhotos: [
            { photoReference: "AWCwydhYAYbTN_G6HNo-F6byIUp0__-LKiem74Ka9AS3Itov1gcbXpUmbV8x0axYTKMwoFeR6rfQzOBB8Y3V62JQeRQYLzpPPO4R29vmCGZRTrNy0ChcVhKkPfPhmG2BIJWqlUZzlEiVESoIZVBXwTvr_8DvuJtIFVrblkSsfGbVtNKGMFvznDCUsMYj09RQlsLQY7MZD6MszHwkyGEAv35r82oEvACR3WfRt292jCT5jkdTmIkz-Ft6Iz3VQS1u_D2bN-ZTgms6okWA4V8ZDb-wRSKZBJ4GIAfJdJrcAU8YZ4-1SA0Gs2OnOXsYnXC6mo1cHBnxNvJp3QQSokA2lBLYWh2GmPI5DVcPfjdK2cQobRdStQZqRI8uQsNi3toxIyYbYAS8AMyPShz5lvu3-LIQG_lzOpczYa0DBhuTXBXBFP7LBg", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100023975436243435159\">林宏偉</a>"] },
            { photoReference: "AWCwydizlouljlWnnQ845ifXIMEXjkTT8U-hzOa0jqDqZgT0fZ2lYGk9ZqWrBeMG-OBgBRS3F4XFTEMQZGrEiXt66hY3jgq93saoXMti8ZLdM29FZX1rjfJ91DgacvmvNGLenFPuedht1Wjur1cqN5wRzMvC1SmTbmVKi-0Nj28bEnQQujrvDtyOG7S6RM0dWMr4r1OOCGoelkIGRMRhFCbA2UBQ8MGxQPfqdSODU857iSdXQWHHnkS6CleoqDqTkTbA1LBoRtoRcmmGXsiqOVxGh-xuqsCtaenPUWOIJbb3u6Un0EaAibs2f6TgvbZnmG8v456jLgV3MONCaKr92WusVon-WbdpCHQhPiqp7BGdd0Km6N85QKyDOp8OptCapn1hnl9c8Si_tGA4pvLsra5Ty0O1GFnYtvhTGoKWj9vxV7x6eiBOZCf19zQeL5fIQ4DG", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105333318013937556346\">張棋村</a>"] },
            { photoReference: "AWCwydgyjIbLQmFYXKSZSTwGeLBE6vMoDTnH8a4h2PcKgDMOTsExQdkeS2wqwxmi0iMkQC1AA8mBOo8IMN1W6xrQB4x27hVopsAZoOwnDeKKD7fgnp0LBbMsbH1l2HXY7o5px5f96sjCWc1tnsltxOfzDaCeqDQDkSsAZsjrS15NgI5iZDR0terh5MQM4w_nyWQ8s7oDw3o-M8fPnKvvO-nWB1NXd-WrrSYJuUF4KzDSAnAz1PrOGZTxOl-QMXt3Nx56hnF-Jx4aFIZEk5tDWoEPfIaCBbAri6FfOY57sakRpNYARlLDgpPY5WPxgs7EaMJubHm1PmlCjEdFC6Iwhd1RNrLP7rxi_emV0En-CZEUzf8f3-lZEqsEdo6oLNyjBNU_RgXzypMMnMHeO0eW5S2GF3Ipzz1ZJ5VHE9K2XLq69av9KA", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109404325463072700052\">Tiaoho Chou</a>"] },
            { photoReference: "AWCwydgrf_wepi5GoiFABf6rsk64lrYsWU-e5oseXJ8Bq5STTEH6Eckhw-D_Kkg7CIwafjtVo_s-oRsRVKQBoRt4Uf5NJrsiOYM6u7_WKFpoVKtRBwrYgQQfqJtWFHSrW2EB6n9XTueBLh2i-TX_XD3vDc9F7403NJQb_gdO2Yw47DAeSKTXebWLsQ1IEVmUbOoizRycjo-lxmWcbsooSLgjZ11nITObHzMnLyKXQap0niWi7rzpKUACJ_6YG05-HBkl9vd41Df8IY2ncsqeQ9QBuvSjWvAvbbhiIU3KTuo_McIzedoHPJdOUtG7VRRc8YWOGXmMC2DEhx7uOWKQ6kN03Rsrqvng7xOTUg7Tn0CYxZ2Uei7krnwzmMWXrwbrIO1VVJ0cN165hCVONAkfugUY8QRnD24wzuqvME_CAGNABh0T32s", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112885343161664954512\">黃世榮</a>"] },
            { photoReference: "AWCwydiodFW_0byGhs6SncWLHJCGHMK3wGRFiwBqJ7-Epjcnlyvnco5C5J0seMy1aPIiPg7yiYlDtaDJOPhsy7-Lw-ubzSPRpsxO9OADs1D2NqILuILwgQrpkdpSnaSNupRB_HLnl0YPFMyS_DwHjO4pXdiHpLhOIG3Sw_dHw-ZmR0owsE2oXkqqzb_p0Oc4b21huPU5fbY0Jt7qMc_B2fqSNaj5al3ykG2kMvhgUOkamVv59HCu1K7KBiBFELK7T55kcwWI7_tyyW9fc4WMU8dwhr2MaoPJ0AXhGdq9EQFQ5vnvUDMqkT5Jn_f_fhg-fxRQwIsFL4xMCwAdMziON0h5QC_L_U3BmvKEM2QuZZdQHGF523Cqw6XvRoHuNMy1ol8_0eQYxnN9Id8DxjnaPFUBwHvekIPyL-_YelMqlp9s0qejAvLE", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104620915678541976006\">陳健雄</a>"] }
        ],
        summary: "많은 이용객이 찾는 타이베이의 인기 슈퍼마켓입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 상품 할인", "많은 상품 종류"],
        tips: ["일찍 방문하면 주차가 수월합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:30 ~ 오후 11:00; 화요일: 오전 7:30 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.pxmart.com.tw/mega/store-locations/store-list/pxmart-mega/%E5%85%A7%E6%B9%96%E5%BA%97", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5031593594055244365", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Mega+PXMART+Neihu+Store+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "시티슈퍼 푸싱점": {
        photos: [],
        placeId: "ChIJAaBnrtCrQjQR1HOxVa3blc8",
        placePhotos: [
            { photoReference: "AWCwydh1X1kqFYMxq7X6W_H8frQmzDy-0NWUgPtkw8kLozCbZnD26AtXTEqWzpNpMlcO8FB-T7-MMpBlVZ1zroRxtCZ6DlpymNr8A16PZbpITP9pRf1LCAwxYgId2ibN8B3wO2mTji_E-MjxR_twwB4zS82PeMy8ngOjVNPDMGf7-QmAd0W32OPDQREFFCbn2T03Wl7906h7vy6sUjvxRMtGGqTfUwbYIRszKB5ybv4x4dBsIPz6DWgHWkA9XjusSgRmF-nbpJ9ShSRJStfYi1yEEcYB-QJccanndrWm5Q6CwVZiOGWfqeUKI7KKmDXYdnUc6uL47Kj9y9qm0T7SPNL1OalYdvJfZzmERlUFmMJyVBHeqbiSoTK8ibD-n6TLBN3blFbnRnGrextrM_zEHwkAlmSZpv_-w2Dldba_ib2BYu0VCs0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114621533839674152791\">Original hustler</a>"] },
            { photoReference: "AWCwydgBdeGLxs0B4svPEU7HfiIOPTkp2HVFVKZttQSYTRnCVTuhGoG8RQ_9L1RPUbF-O4XMPXCSv8arf4aIemfxzB72wjUOih36JzFBLbC5FlZ-oijYj0v5c1RFO-CFyCPLYhf1qJ7bT7x3UfgVgrcEmayNQI6ns8GzGKuL7itfMDLf1O2hKeModxs2Ud_fhD3x9aito12gh8ie4iwJIjfZWmVC31T_aO6rx7aqdz_X9kV1GJHIJoUNua88KdMUQX_PiQx3Nv-OrY8Nr2Up5RKLEFDo5g7pMq20J8OmXNGIeqlTdPelje63wiML3Ja0pvREmHccXboSFMjCDm3BVlGcaAAR2B7HNOsgfR9QiZYpClLdoZi42Hn0_bZkdt4tg_MswAQjynbqa7vJzGPg1ZO0repHzE_L3uW32FwwXUzn8PdSi41l0wShWlNFfg7g0Yys", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100220184657913413572\">Hector Wu</a>"] },
            { photoReference: "AWCwydibdvgWC4lxuXVXj5JxCjYd3aouNznr4zhs5bZtTFhgVlKuYKeEXjMsP0Y3Fqr2I2CWwTxhLw3n_KyyPJ3ZhwpHWHkcMowg794dArGox66jQyS6QtmKZy9mHjDQ0OIr4sQDxyFsWOS8Y-kej8JmvO3Ghl6bLu9EpcPFZqomgMnZnH9BMh2YG3btKzZCyxQRq61Oem6jpFZEppyAUKFz2ZzzV9519coiNdd6VeFI2rM3eexDE6wvMmpf0el7i-KWIztkbbaqhY8EZklbBIVTidJItIi4b-tzzQgCe_H8Zo8Ta1BeWMAloBVD6YAmZXXqESb9rV1uGNSYd60C5NidgeqVKMBzOyraInyWAPgqjeTMbopQiV1r-oBXxE1kmtW6MQj59SNxXzi0NIjGmszqy3zkbnu9Ot2gN4ejrbhxlQN7oRQy", width: 2976, height: 2976, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109250666753914164323\">Danny Hsu</a>"] },
            { photoReference: "AWCwydj9SIgzsdPMRiJ_hmpocVhJ7p23FqsDmWWH6Hs0hoHAL_i1B9x6Idi8zjwH1Owl0KQKgO2YG2TzbZhboZD3LEPsy4cY4kStYs4iSlEPoJPQrAh3b-yeUy7v-A4QMTieHlfOrTFxmBwHrqLlR9LQOj6l2_pj_SA5jr0Y8ty1XCdDZAaNGteBsOitCFy5AbYQiItt4DfuNJrIRvQXlTaQRGbAqe_UW3YJdhq6N6XU3jl3yPs-Y2Rv_o25yliJq5KG7wm2f_il34Y_IzSITEkObSqvV2mbwpmdWVm5IKtvLcxgt-FnEbE1_hWRhh-4co-5brhrHlgZMViDJbaitbI1vTkBwn3DZGD7eGFw90QAWc51oqhM_mz61wlA_0rojohp0IYYQDNlaWf8Vh8EpinZuFfgdpl_hT6k7Ku_H-vdCw9mkQ", width: 1477, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116904374243723631638\">潘志強</a>"] },
            { photoReference: "AWCwydhjeFWnYluLWykzyuFVJ24jiOvDffsY8jvEn-fhw5Plip7jSI7uyHSMdWzkfzvzZROT71ByX8L6xz5wnkqEffaMPTgBRdXngyDPnEo1-mrTK2s195yj0tp9mpDsq5xO9V0iZp5oNgb-WtHYx0widHv_9dDviGM45vtkhfaqN6TlWF2DWgdFyL93cNo3SFuRKYQcGpXesDrwT38JNBvaWIHpNsoL4dyC6TBgA4L0CfXjkx68jtW33YSXJjm81yn7CN8tJTUTOGDAAH7cVVct0vmLylj6SabsChBeqkvchcLQ0w10KARzLcrtwLDdNMn1hCfVfKwRO_30f_ECOFZwAt1RdCVN2FzlKwEF_Nv_eBSxf6Bw1z8GBOyQgWbRT0Ojw-ZNIlLB6xMpH2Lcl55lt-qxOwa-mx_liA4cg0IYZaRQr-2gMvZns-1htc9P0hK1", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101643820823137654634\">FU Chen</a>"] }
        ],
        summary: "다양한 상품을 판매하는 슈퍼마켓입니다.",
        updatedAt: "2026-08-16",
        highlights: ["친절한 직원 서비스", "다양한 상품 구성"],
        tips: ["결제 시 여유를 가지고 진행하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 9:30; 화요일: 오전 9:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.citysuper.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14958103274894488532", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=c%21ty%27super+Fuxing+Store+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "시티슈퍼 더 몰점": {
        photos: [],
        placeId: "ChIJyRrGbTKqQjQRSqGzlvTaza0",
        placePhotos: [
            { photoReference: "AWCwydikFDzWtXG3rzbljVxD1ghmHndNBaUc6i6rprNXbYQSk-WQpCrl8SQbjAJOdLUlTEO4A2Ny0WqPrMQkLLZ9bBjHg6tdTB6MruqWA_rUBNpRKs1gGxxiJ8qyDYZzrAhjiWQsbFYdbgHfwu5JjFtS4Q8qWyAqXZvbVj3UVN-KgaZ_Fh8RWZQ_gLhrYNkJ6r0Xsz3Eyg5G9Rd-_ihrSqTtJHA5fLoLobkkKDeMIMD-j8FnVEAc1-O3yU-bMyspqNTdZJKUkWq27S56IsBJjXVWVbRBxhW2DZYimzreUjBkSU0Ocu39UBKJuerTEHLNWS1QH4k_4QZPwsR6R-EEXK4PBIxYTDDMThay7D8GCOkE7fTN6X54s05tt0P4oUn9K92rSqlu_bYZIya0-3CKdhfbSOFzmInOikjJUjLnqZIll6KbmrON", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116708094651477909755\">威 工作</a>"] },
            { photoReference: "AWCwydjc-XKLdIyLQC0ggHA5DJIm8qC03sPP0LemPFhJoVXFveShwFyrR3i4skbC5bFuZ3FWQvLMBwRTkFZOeGjHE4p6K8RUS9pmDf5silq-lnYgVJCL4-ca14vh5drNYOfxoc06Gpal-Xo6hgtb2e0RHAHkqta_bzP1x6FYBARgbG45u1C6GxpVWz9IbSOdr9Q2lUesOJzLPZhh6Y9t22iApKlyvTp7dXbbzdXBXHfqVzKRyPzlGsNRlB-om6nExh0WltPYZkI-Hina9gbBy30IPd9BhXqh56xdzz54shw_yWaThVhGOFd9TWV_V9f089TJ1nM8JsAwrC6hghE6NBpWO1UH0UhZ-JAiCseGAGmRWs4pVY_Mfy5cr2yWmQbqYFtL8tiDxsriZuzk7UbLZDkYhS706iej-h51xWIMbkXmJdBQlmHv", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116708094651477909755\">威 工作</a>"] },
            { photoReference: "AWCwydi0PIpj0qTQoehz15NFtDrnMBatiU3Hd8vDTNTiV7D51Omd7Cs0h-QbGEfaHMuNP5MJRkjeg_8yWrAB28S16av1GR4hemItFqUfcykisgWreT1DPjnwvexI9HLZimS6n-VmFfyXtD8zWIsd3iyqu5CraFlVblJy-t3wBLs6BQqTyt5CR2Y4CIZCuKIgZLj1mgeWZBIo5HSTe44mwWb6QlTXTLlEIrcfYw2FgsPM8BR7anWyqgVxjHytGlEnk9G2bqv9X0Mn1dN-m9lIbmsCrYuZ3qSiMzYULQbTeHcjDhZ5R8ea76L1Di-Re5FNMDG3JWQXikqOenIrU3xjlkxAh4U-OEaKuh1vw6c2YMt6xgOiQfPIso2N5tOpMaGgQlhWU0mGJtAdHvxjWhR7FDvmWPlN7_ObcUjBvzpqky7Wllx8_kCc", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102255121746974784893\">陳琳覲</a>"] },
            { photoReference: "AWCwydjbFe2fqxL07Yyb0jsBQKWQFXEhSwraoHK3Sh9FSqFDAPgDJdCDdm9uOrpedaDvnn8rcZ-FpNFFanT4zv3UTK0G5rnRrbA8bvJrbzkeIY5mRYe1yS3Np20JcbdzU6EZN0FDXKSZVOPW7DwnMDjfIQKbPndq3JjmmZGKo-RXeL13A-eHK6_WnYTskbUzrb9yB1Vb7lrW50Q92nXdKgA-OzNCMt29GRbRe5vDuVHfsyMLMGSsczkV4VYyMhadJYGexstX7NegPyMQOUZhy3l4rhjzzLhFGj_FLobWoQvtPqmLfcaO_9j4lsleNzcc5NpOcjPp9iW8ZkuIdThCCFOQlmyXUBOlGgwJlf8cMp7lJZYdN-ZX5MLGOuhCL0atYcX-qrjzXDReHV7jKjNr9SS7H_yUtDs29LDiGxm5IjvWD-_9nMjuhaIUqE4_yNHxtPNV", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110450924334669777386\">Sharon Chen</a>"] },
            { photoReference: "AWCwydhk4vU6hmokBZzvRXfwWZCa1no0XyZA8b5wl6tOoqVSLxHLD24_1cNABx9wU-6KFW76XOPljKRF_LZBefnaeTvpzpoOVHuJP99EIwHJ4Ywnuqubl88A499ioViuaYYDGNnca1AWc64Pt9TNnqAqrlEQ_7OvjgbgaBDWwl0MtIJmFfKcbKeRjjcDsr_89xYbC1h9UZcDkPKxOS07OX-bjngE9AvvBXKxWzP8dxWQuCgZLbV61i54NyNszL4RPU0G7wfeWHWixrS4ftYy6poYPrTLgu3Ymv-9U0RxV4MJO9biNQoflU7dOpg9pl3F-DIHJ9uI2kCJHh-nQqI0QIPi3t3dn-Fj2IyFDVLYCJeo9Z6NCBecfmieioLKi0gkURJ1o8iYxaqVUJIygDaW1pnguU2ujd1tPPpXTGRvY4NqwOs", width: 3432, height: 4576, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103713943126699964055\">張志明</a>"] }
        ],
        summary: "쇼핑 환경이 쾌적하고 상품 종류가 다양함",
        updatedAt: "2026-08-16",
        highlights: ["다양한 수입 상품", "쾌적한 쇼핑 환경"],
        tips: ["찾는 음식이 있는지 미리 확인하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.citysuper.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12523906882822447434", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=c%21ty%27super+The+Mall+Store+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "미아 시봉 타이베이 101점": {
        photos: [],
        placeId: "ChIJH7fiEdyrQjQRI22LeUAySBc",
        placePhotos: [
            { photoReference: "AWCwydjYPBQE66jqGEePz1PEnPDtRvhrYzL7-P6BCWjYzVZytkEqbWkKlguP-v810kSyoGrz9yrGqp7TTY6avCvx0VgPHkYUfLlblzDqsHXRX8i5Dn10Qyp6bNCVTO1ElF2NuXbDWEnYjWv69rm0fq7F0P7KI7PY1v5NjFh6Ra1FOtPrspKdcxHQZvigKHQR8Vt95irl7ZReWSUmJadqIdAOmj3psAZYzLOfZ0OHYAKchH1ivlsxNV8kVwcv-00nWUOL5YMsrJaDZRhMyFMPGZI7_qxj0-ztD68ZZBSWfWnW7uo6B3dbinDv0p0jgiST3T9T25_hRVq-I-O2b62uKnk3qQL8Lb0iVOih0ceRE9eW4TIQOBbyRVvrTbqpWglIsyuZVRkfQuCMH8I7pDeqtFLbrj47OYh8CfmmKeC16sFBTqURbg", width: 4160, height: 2340, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105058994683284633683\">Charles Yeh</a>"] },
            { photoReference: "AWCwydgzMpp68qci5808ezCwaoEr5ON6yMeQ06-WblLFqKVpIQ8uZ-CSzf4H6IxmSPVweIWHdJG8xTBSm9koYYMwpnlx1AjgPY3EVvxdP_pbLRFOINlxA5zKsvOcF_-P89PTatW6-JW7278TCPDYt9i3Z73MJU2rnfhROcdmIJX_W3tY1K2tz6yxf7t4htaTU714gkWBMjumRoVyj9o90R3SMHmgeRW5Ps_TWrfEJP3S1rhdhBNVFIsICs26-f1UsjiBqyoKCKvB5Pge0r_FCtRUhNt9XJ0Kg0SkCVkKn87UhflMBUgsqNnOjNE7kT-TNbt68LfgglmZxhgZOgYk3gpBNj2ykChEgx7hSN_IA1vwSFsjiYxL1caL0veVFOQ70NFb7CEHR6_FnW1wgkiai8gZ_UZayLrHaHNsAT7F1lzmASpQJg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113866131990830070465\">Mia C&#39;bon 台北101店</a>"] },
            { photoReference: "AWCwydhg5F5Ir-S_Tlsr74MGvbBznh3aoFXbLHuNj2BidSVhLqT7HS1uvi1f5aXJuguhIqinFUfi6vilKRKtUxi5aCVng7oToQ9mME7aTDQgviK9_eaONEyrsBEm8FPFYsUXaWYy4etuztjZh1bMzUxCUtEftiQN1W2J4NQDRBIRcg096w6r13HbEhqY0q3ylydKZd-s1O1-1-RrYf8CKQU-WS4JXxUk-WRqmForaclMPfw6NRnPzfYnjhwfe8yji6WUPpeffsUcMJNz6Af9Ec9EldzoS5iSE8kjURHKq2dsxZbQDRA57022il9d2SEuzYqrVEhMr6ZJJrhJCHiIEwOG6Z5nBNqL7M8e8TIiJflgd54UVE4xgk_1qwE5jZz1uszsu5zs-HPsYBWISVYlcZndc2fmWJ2a3zwgANd1zfFhuGOtRlo", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108786967772579147368\">kari Hi</a>"] },
            { photoReference: "AWCwydizW0JeZeBPQ03ui9srMlNPA9Ut0b4MRX3VuKB6etszgqIWossxVrYJ46kGOEFwZhy0nWvssVczupGXXV8zK_PURQ4MMloUUcelcYT6TF-teqDXR3DEVWrMi-412faT3WB08xihGFwzOHAdD6A6r1dqIjK16cBbABzTRma8MZs6FlrXFEPj_6mf5V1Bw6K_oj8187tY5jHtpUUIdOnIwKQd-My5W7fN-hExpQw6720lP61okPVmR37TiOIaaLVe3B03QgRAFDXAxMAtuX8BU15wgmMpVgQZE9FTeQ5qRvmeORl4ZLy_Tlh3SR0bggmqKen44WyivnzEIqsA8KGVurKLobeKYTw-CUXOmEjirhnSjthu5nHKhQmNTx_nqxifjxgmSjkLV9SumJRNcJ11G2J-09hqXyqr0_f7DykuoHto7bTg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104240483873638522749\">Shinnichi Higuchi</a>"] },
            { photoReference: "AWCwydg6BN_XOFToGE5Vg8Svr020MO3Dtr5Jz_a9bEfhMRp4vxaJqmFy146x9CEJQU0EDYoLOMwm0T4Sm4mg64xIkmy0RKEgYIaqMsOPfo09AiYmz39mZInsXxYDNIGx7lJ5JOtV01p5HwcYzDQ-AvVD5o_WsOZJNHxZFeapt8YQtPBTjMSpiZJ7lXDTE_G7GBZECjlk3XcndpEVaHxGqCe0sW6N6lyNhHhZZVIfi_TgNx4AUr32Y578NxW_u2nCoCYXCNpeogdAKnctFqjtUzhA8Egog3_YwUoiayuaXhxylGomA3NkJMnwdUWPJdwx80rvVx9Ww4BOU-Xa2cduY-ea6b3Rstuv8IYlEDgAkiWowL-t-dSZB7YCCidvIJ8oFo4TIDPXUcfW-CfvpT5NmbRxdonsgvHRvaxfYP6mGEplglt7QQ", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113866131990830070465\">Mia C&#39;bon 台北101店</a>"] }
        ],
        summary: "다양한 일본 수입 제품을 취급하는 식료품점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 일본 상품", "편리한 쇼핑 환경"],
        tips: ["과일 구매 시 신선도를 꼼꼼히 확인하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.miacbon.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1677646113693986083", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Mia+C%27bon+Taipei+101+Store+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "리코 아울렛 네이후점": {
        photos: [],
        placeId: "ChIJ27M7BYerQjQRkqFXyok-7vc",
        placePhotos: [
            { photoReference: "AWCwydj5ulFrRXf0uiKrt9THCOwV3RWAu1lJIdbCgtMkXNAY9R9chQZ7qvoecWnKp-oqmKw8l1G8Qh7-n2HjaawIFrYcqpfflikcuvVBpdNv7CX3uNVF6nzjVTUWP18CPmPJtcSZBmVlnQmLF6gujj9tLYvjl-q1USaTKfJQ0TpZjxC45GVNzZToUShFjRjKfTgBMCOKPlucPaFthpW7feHYgyHwLqf9gHwuXjRP-5oFO19EVuFU44_xOHlXbFpMrKHrg63QqR848_FLoNDcWso7h0no0LqlstvEJOWHwpGGsqQKKEimMd6PErzTaWa_eLYPKQLXfHkJWQTwpGCcLYgVqC_lEAbPihtz7-cra2RQThFYNdzlng2ImPjBEFhqvQxaxqCKHOGoas9MboGebXHoFjHg4gEzw4rZI_1Soa4nz5awawTo", width: 300, height: 256, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111269944757533937009\">禮客OUTLET內湖店</a>"] },
            { photoReference: "AWCwydjuJXbplweK7HApQjA6Yh5x6zLPSvtLvfdeAURTZsBc_bPbWvxqc15VZbv7YJFtT0nmkF2DT_oN9opEkn5JwGG_r7KUM_oN5LxjTSXT13kRmo0oNmnX9OMGCpFczkXk8PrTxsCJTST8M2S4Sk8nkyYazSnB5ixtXNzNK8YUBp9zxC0GHZpbtenK70k0bOAVwe1BiOOiQVF-oT8eU9ae5S98a1Lsmypki2TjSLYNdJN3kl-KLMPcvCwO3kfOgWIJUuN7S2NzDXyqrwcZKTn4s0AYTaOtcf5Nt-Z_EgY0nx2rqt63kINyl5Yk0CRkN8Mo8YIP4sTYKJamw6bkxoGATrHD8kJg3CT93LC0EkRLndmmIGMOEQ95e4Ssp4zusDkgTKbDCe8OB2kh_4BBkwDJ2GbjYQHo5mhN4228O92uie0rvQ", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113653674164636030863\">杜米娜</a>"] },
            { photoReference: "AWCwydgjE3Ek6tzIYjTVz2hQ22pt-8OTBMeRBMendxlgLv0dKp-Yks3bNOx_S5pN4McuaT23VdLof5Mi03IZg7E5b2t-RxGPvwxRmBMxcYhvKrfLZjPX0sJK1wyAcQZMKKH_kPNn41j5kb1TWwa-O7C3tUXaPaDa91YlEEk3Mp10B_Nn5QlpZZz-J-72WPjcXGz8PoOsEQ7hqDPw7W8VOUIpaRa5-SBZzPbPkejy_MTwcOF6ZT5rnOQHy7NoIazVCwsVoCuHmgAWu195F3Tjc_4yHpBvBRciuNpaFJF_PVlTV_6H67YdBkpDoMDKIyDoSyQx0EA3fW4dhG1uJSZafReXy8LDcShhfFngSIPgsEmcXFVLDXy5PUNo9YmGaPbe8eRQXOLYtKzH0cnGhgl4PTSPCujkxhrFCspKxfP_F0idUYI", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111956324532010905226\">don low</a>"] },
            { photoReference: "AWCwydi0EHuppD4DHjCWZiAEAIHy1AZdKwV2dn2nqvQ2ngu4gsOyaj5OhrKluH0OYx-Kp68lZQssg2SlOfjgczZ_bzrC54A-InjzluaAF8lhRsI-UgmvqTc4JrNT88h9dManoKH9Ze0BYM_pRhxKNaOvkWa9nf54zfi9WZkPGN8qt_NwDEQW0OEyaO0GWNQqAu6Mk3YkHk0OLQo6OBbLOM5dMXrEr9MnQ0Flc-SYQdI1swtrKY_dAbp99SLkp5cFbUpsiu-_oMYbEQ6-XPUZFr0kh69mYUpMMPIV8qTBW-G7aPB98jufLqsU3ZvFZTQpzAwzCBLmC0918QMafkcKuNY17kLVUnnE0OXoU7TknmCGNdXQ-fPSBkQXOruV7RZVAKO-yM6Hr5cICQXClvzHwcWtDK0k5EU-VsrkuMZTEP_MnWc", width: 4618, height: 3464, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111997825440620329821\">蘇艾倫</a>"] },
            { photoReference: "AWCwydiqHz7dOatQXnl4vzQ-7o20-KrXTTXWPi2fWu0cf1cXHWNCcLHoEGmarATqJL5RAGZeN_udmpHHSinjuG15PbyYeQgFk57ibDWFR7lzbCnyEwCVetFHlNfdHp8yq6Eh0QMkxx3sR804pDSizkuumQtaJ9q6oF_ieIVWJuuWmpIdWvS3G6vH38d4ljNtVsaIdY4UOw9xIOuBh9PTkoxDNsioxOfxTNOmjuvNhjbEwmcxaoZYaxlD7404adFzUs0542NaQWTD6-wst3wLsOLnXV36KVARQNojlYFsgg2rqw1NRDxQc5mzUq4pksSKbiWRfeG2E_TOC6_D5J_B0QC5a5NGpkgUjsArFtnzrPXchj-OV0HpoPNkK8uLNul10lk4qx0G9KOSmA6XS97F0RgESq9H-TdMSXJfrcJHvjI-DUaHtg", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111956324532010905226\">don low</a>"] }
        ],
        summary: "쇼핑을 즐길 수 있는 주요 아울렛입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 브랜드 입점", "쇼핑 편의성"],
        tips: ["주차 공간이 협소할 수 있으니 주의하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.leecooutlet.com.tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17865285533351518610", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=LEECO+OUTLET+Neihu+Store+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "리커 아울렛 궁관점": {
        photos: [],
        placeId: "ChIJi-M2uYypQjQRd07NP294JMI",
        placePhotos: [
            { photoReference: "AWCwydiscimlek9BVLE0Cyy6Jzl6SOR1TVAgy99PBdtK2D5RQ-QAf83Cqh1lW9pLAHNpioLCD8JLlxljcMTqeIn3a5JciXxNa6PICTLSgWdaBWCNfuqVnuF4FtwYAhJr02fxq1Imtuu43qJJNDlQJkYjQbVYjTZq1aaXWmgkHXudlkQxOsTIcGf_lpyz9MBJuR-Osl5ute77Zf9yZHMOqpZ-jA3kj7Y4kO_llGZpZCrZNIzccykymCDHp59KNLH2kWyTdiBJhF8h6OPH7DfY9B_ehP5wxuUN_6dTeqdaQ2-uGBe4z5Nb1pWYqtGaHiJRjVA8BWgwsV9LLe6Ne_5O2AsRPPYRckD877MgiwCkjTo2lp3vtjFdwSInJea2KBhSgkkbbdIQLHnyU74VfEnl-Fb1WlIOYiSdKGRlQhbV0AYIjYw4YXE", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103708460918936625813\">maggie chang</a>"] },
            { photoReference: "AWCwydhHD1hnmclqkjAn4BGW-fZl7zKyQQs1KtZ01KoV-Wiqg1pca-jskYqq7kyoD1LfBkpVrOOVGx6xmopd_4yU5gtKtaFQg38IP-hYbCbP_lJj0lp7Ju8m2G8k2n17agKBx4nQEvM9bkiSiOq0NJ1vWc2r4YGWsaymTdtlt9TFvYUo-ziGd7M3cUEPziji_Z32lB87pxl1HKWZ5EwXguvgd-Wp9qHySbZr4t7YV6nKcQbOpUxfg7Z8ysGTPx-dzxwdf2_3CLozydZWrlMGGtH__xjkXgcko9jBXHsxm916G9mHVNhpa6aUCWJ4NLDMHic-3X5zmlunIXW7umjmHR_3iTZwL9lPsvCGe5ySibLqzNL5ZNkpanhbNguM8n90rBRD8DcDqsF-ZxPCecP1gV4ska_Zak5Y-cCgZhK_K5Dfv1d-Ej8G-wJicYpEYTusRA", width: 3432, height: 4576, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112471718487724961168\">唐瑞和</a>"] },
            { photoReference: "AWCwydjOD47csoSf8icgNJP6aav06SDCm-DYHprBXGiiljlHY8-2MTEtIT_AVeMyaCKj02IxnuiO6NxHKBzlIKgCh72OOXj8Gl7B75VdZuNsUxuDHCZ4qMKenXtNh0Y3p4ZJ6pK05vSnfJTaO71e-TyGNb8NgyxZEufQ80x5GCBaAGCypVyGBcIdaCHoZ10-bSumqFn68Wn-PVgjIgMiWh2IyARUFNhl3wH7VZP2GisxR4LOAswLduGP-AxzfcyfJS6rbZeIjHMJfgYTcqGGVrKR8TYy6uVPUYt4sBenrKflS1Kdm4dAAjHZp-pvTvrrGIK0_nsfQVUiIqJxVkxgoY4dOZgRxYkzJkIfFT_QCAfGHNMQtDRSeyQXjzQvw2m6kjUfwpUsGLLX6x7OmAzmfS34m_H3Ik5jQh-lpV0vYiDsMSUuPaM-", width: 3928, height: 2208, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111970878439191581278\">韓奉威</a>"] },
            { photoReference: "AWCwydg8YyFniEtHQLWpFNvbDzbyWbsJZnaTfaI6Dkt-FGD4QNMOVSKoSyo082LGGitlvyzLzuq_yayzAQhOs1DI9A482JsFHQVNzUApIsiqAaMiDlmp20fzbiHWZ-d8FzcZGcSUFUWjhmnZ0nRmF2XYDKGc1dMBOCwrfjhjptjkpTUWdtchXm8BFumtB-4JBYAP9ovaazHeK1lOw_NybQLxhT0K4lApRHQEzXkK6Kpr_Emx_c9NwaJQF-VXAXGfwtSQUg1f9n3h70WaOuRmtOK7X8MzugCt3-u7VnVXgG-AYpIfb-m_Pltx-n2CCDrSwpLOao2_-lUgfyVumNHZqfRFJxkvSBTs8KoZGaaRADrW9iStBSICL09R143imDh-KNSf_CWfLvit6wx7Go0jkLu3mUcd1vVK76fv2wK1SNj35Jpb2_Tv", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103708460918936625813\">maggie chang</a>"] },
            { photoReference: "AWCwydjwzmaIznDk0NjOpjrGQvDZzhGbX1Ypj5HBbrYGz29i1N8u-IyIsf1ThQAQkpkaOnQNnQgw8pBVQXsHwfdBWw8ucEGjg_J-eflDc5CW9Zx_hkUeJhUF2o3bOmMyugMBXNYlR_mt4EmUTutMC0cVhS8RAnXWg4uCeh1lSPtC3XfKH5VbVzoX4dBITi58JKZpXVnpR4PmE4s1POyLnMgVfFqArn3VprDyddsEqgdEla0Q4YCz3khOqHR-wRTBEk66BHKi2LLP7z2PvzR9me-9Qizpyf4BRQGLs5dVbp45-fxZJOM0tdc9y-4y-nVCHY7l1Cn6-2I9SYBUQK0MYCUTZzuPDJEggdHDguE2klvZrkI08vH6eKw-Cs5WLWvvtziH4wxXC2sOxCHj612v0ugYHLq7nIRVNt6LzYBqMJXoTZAGHMFC", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103708460918936625813\">maggie chang</a>"] }
        ],
        summary: "쇼핑하기 좋은 대형 아울렛입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 브랜드 입점", "쇼핑하기 편리한 환경"],
        tips: ["영업시간을 미리 확인하고 방문하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.leecooutlet.com.tw/index.php", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13989438761726725751", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%E7%A6%AE%E5%AE%A2Outlet+%E5%85%AC%E9%A4%A8%E5%BA%97+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "나이키 팩토리 스토어 네이후점": {
        photos: [],
        placeId: "ChIJ-VywwoarQjQRh7hEzua-mMc",
        placePhotos: [
            { photoReference: "AWCwydja7-C1KnpXndr3f8JhhYTN5DeL5ibn2Kv59AvCIpc4U3Gtkv_-6Yv_DhWwp_PFTG-TwCl-y3K5jYnFXc9L7E7DzVzkAeMVzhmIYkDV0szZk7udtLnG5oEobBaUu84SLNf_2dFQtDwo0KWuwhKYwUXQyfjuySylhkdkxXs2csATMDjjpZ97Q4kkOkM6AvFzsSqp5BW702hXhXO8I1eRNpKayKRrO89geG6JWi62DWF3cakprFHwfs3J2DghiDYLxyXEbV8glSqTItVUMCJHlyoipH80zeRE13ii3CD36xLQfpAL9wrM9mCpqOm56bCCdlEJb1Rs9uqn4ifctZDXezjz8PfRne32n5JSgSHTotEmZNNGR9NZy_I44T7MIXkWJnQwYckGEzRvceJvn3uYPHRqUJcHq9IRVwYFPNd4tWxyHg-O", width: 1477, height: 832, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101235578834378442156\">Nike Factory Store 內湖大全聯</a>"] },
            { photoReference: "AWCwydgte5uWGtWZ5oEXGe5bxjKQWxTe6p9kZOdSrSoo8-WFHBNVJO-eLIybwowQiyz_2ZWSbJmuTIjV_QB6Jnd9-LS8XwhK6wzrk-AhcWJh-_iEAzHpJe3wjqRfsS8-8neuqjs8OB7kyyX5YfhC2eTiZKZAADcVfVoncSb0xfW4fBS0TPGANnhL-_nxYnH-wcNvCD9OWxkDrNj6MtJKmjMtrd7fsNiTIdKOXFYP4zaDSLFoVMDurBb7k7nygNcbS_u5nhkEq5gvRX_2cUhGKSfljJPziNLTe_5oDclyh83N8znLGEcvLBxmxWvqbRs3iVQXRCYmIAiW7cV_0gllmO-n8la-DaHs3xjvJNLnzRs4EOCYnh3ax2Ti2LvGji8fgj22oZFs8L-Ob-OiNw5HZ8pqHAWyUHkCRa190249LjcfPVg", width: 3468, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109458678888901590371\">哆啦爸</a>"] },
            { photoReference: "AWCwydiO5ioe1SQpXyaU6vlyfUFfina49hNBEr7yUuv6ITU0eGiY6LP8p_FokWyOOFVH72iDn6t1bxOkOGjvBL4DLL56_6P7ODDc_P5qkodrMY53WSqC_fctBWL1CUFgeb5qzCIBY_7hiyTi4ZSZQMON7N1mIZ2SuGQewKEE7vSitw6JhiubUjU0a6k8-w33hswRfQXfxKpUgvkGbkt6kma5sSxV0f35I3-i_vZXsqlz8jJxbZg9nlSK4djrHZjNoRDlwqzzdeGTVnh4iY7X7b-F-SqbG7NdOdnyDi3t1ctiq63rZMQdDeJW77BgRhsbejAXW3n69Yyfk2Wu4jxcN7YiSwJ_2y8UDnOuxiFmPYR3xJxC0wHEXmjPZaGqsyETzjdWq3Qc0u5wKXSztG-75JDyMzHa4fnvf1do23NqWLrDz6ZaXg", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108117484686562418352\">John Tsao</a>"] },
            { photoReference: "AWCwydijmWuP4KeM-RhS6H-ei59Ycnf5xVQEg23HNOZvUZW0etS1ltfyCf52PyKuG_JN4PJMhjJ1oub1Ln9zWjPGbYrjrNhDNwJ54GcRyreWpq2OdsxGdqHBZ7x87Ib4Q-iRsl1w32hS7knUz4moSnd3J80l57GeQNK4l-1KfUaORUhA0LMbYhhZNt2LGtnn9KFfcCOrTrzHEjjUujkBLRy7nB6aiozMYGgZQWYAXBoyspZuj8EncPnD131ssiquhw9ShLDHKFnjseSOKMGp0hxYisabo79zTQdezT7HPI9M46eva86I1NHKIEExU_nXCG1bUUI89JMZL15Xj10rhA-yLlHXCX5h_g6NM5XkoGvQ6ENotpNgmTsvwRICsxdukw8A-oee-l3b0eDgLGn5Ce8Xp1gxLA91xsjj5vIXqQCvoHlg1A", width: 4000, height: 1868, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111230465935058180920\">Ted Wang</a>"] },
            { photoReference: "AWCwydiNYP0I-nI3qFIhBVsEKmCd6NqixswsSp3zFwH6InpEvK5k-AnKjmTfLcoBt5We9afiXOIGV9K4P5mZ-S8bLOqqPaxi2svrj1b1dFjvwEFDryC8iJ9FwvUH_UMbYfIfOqvEJEMwaUbmVd70vPOHsOOGNkR9ofY5Rc74yWK82RljWjXabcC3NGXFl1i5ghXx2iUiiexEeRHFWyKxudVjuINLuUKnrccMRY-NE0Ry87GIw9gV8MCAx-oyxYSzDIm2AeCN0nxlMm2ffCn5J81uryU2pmKkNoDLH7YLuIf1PATg_792XyBWE-x0NPUPH02OL3g-tI1K8qXV061d-WWaWXFiSwTJ2l7mNlnmzdls0H1Zzg9J84sGKXK_r7e0pMG1AaqFgWj7i8z79Tr134fWYXh5QxresH3jW1W_jUAE6y0bdlPg", width: 3468, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109458678888901590371\">哆啦爸</a>"] }
        ],
        summary: "높은 평점과 리뷰를 보유한 쇼핑 명소입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 브랜드 매장", "쇼핑하기 좋은 환경"],
        tips: ["브랜드별 매장 위치를 미리 확인하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.nike.com/tw/zh_tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14382455308520044679", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Nike+Factory+Store+Neihu+Mega+PX-Mart+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "나이키 팩토리 스토어 타이베이 민성점": {
        photos: [],
        placeId: "ChIJs9tRBF-pQjQR50eyXpZJQ4M",
        placePhotos: [
            { photoReference: "AWCwydi6lRJJHIbat3gbvvcGPG9eE-KpGj24JuFr76cmMzGsnFEhN_dtxOVx2WSA29tWuDjDXzPKUNAyc2-hTJyNadd9VwH-_h7Nf1Cuye52_Tr0Zd0YiNd-MYLYV30xMVuqRi31T5vjvP7bU3HYugwcAVSSILrbiY1UqsgU3pbFUjwP7mizGb2n0DSxPwWbC-MNmCDYKgAKDIX32gQ0DNuO8JYJl5J7fIYZItax2ibe8z8wRMrzIy4AB3WALqzE1O5ixwA15aUvzEjeJTTXOEK0Qx_IFtRIZeNINJ0oeCJild0GH6ewGxeP4ygvHUMFMtC1HxA4oD6Oka2I6Qm6KV720y4Es56Zz1IjUqCCwD5G1-sTXz341ipgv0YK0tHiEiB8iJtrX5fCJ_1FTAYkVk-7mlBNRBVgVEVbNh4SZ4tLSQdSu-U", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104999915584707768369\">解妮瑾</a>"] },
            { photoReference: "AWCwydgoU8lWhtGAJyd3R9dE604REa8PnFiFDmuTTeP_v94lZf_FPhF76j__zNP4XA21LOYbTorXcuG0xTaQ9umD8OipYpY8wgbiisYTuU9HRv2mJLstHfHRIkIQpHmIBpuR-eCZMr_NZQgeJw2mfMDm2OpBzrdfzFXqESQxGBtOFwnacOGQ5bxGhoRo9onrFSX3rV62k_yLWnLaVGJDxo9J-TgBV7Tsa9td5NqsujIF5UOzMtH_M43hKDLsuA-rb6RBg6DbG3ESrgQ1pGmn_PEI-C8ziLuMqBKiXaXnoyXnQ94HfIwEmOfeJSDrgv2-P_H7N130al1_55CEmiGyfD9RO-ai2qa24_fy2rdEVmcrqJ4yW-6LlkN53avm4x9Ap93XKrCJTUdGVnoUZQncMa6ypH23CIPng8Ts4h8HMk7t2Os", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104946350848119563750\">Rafa Loves Travel</a>"] },
            { photoReference: "AWCwydgt4nN26ZIyf_Ea5FM4aruWIRXHb2JTmgVFbs778dLL5MPiFcDQFxP35ZMDez31jsj6nlilDBkU0QVE4VkGvVZgmSn7FmU-kEwEHbgz4ftH-GbxKleqGsQCsl_qHhGPoBKg6PWsmHKeKdhc6c6N2RADZXuWW51FvUIHTFD0XNhmRqLRMrHO_fvEXCVdRWEiTv7XwQjyFTrSGIhhRBUn5T3yeVCGGDbwaXVfxSJ90ZlZu66On4pswO3Rw2tO-PRivmuEzB5QoeRWLQAGUpRk7ukCmYclCFP6gpACk5v3q0kgMzTlt2mNwujlfXKj5a0Rltc03BesF1EiwRBmHpxnya_1viSX0AehjjomivVPpIiollKTAzUq-bjUPmM1NozOSmy3kMADmAyJGDlUea1SA-CghvQ9w2oWxb-BWRcQD0Drj2k", width: 1920, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110593799809349783702\">Miyuki Nakamura</a>"] },
            { photoReference: "AWCwydiUMpNvqtVfP3s_fOViy_r00E3Fd1d6nZmJ6_MpPIwKcFKlsnmqpf23X4HdtUkj_UHfyZ36I3JUavvhNYIoJkJQzJozfwJ31-CmU6ReH0lsErUNoA71F83D6DbRGT7-dOS3-pv7ZC6IxZxMqfz4OWjYWdNE2j7eW9gOIfpLsirgVOc8iaCAOZSAxn0PA764dksoVApDSwXkO9UCPwG7YbTiVzFNebynl8ch8rpIp4hLoBYV7TwsquZMeM3ohY1tofqzq-gkb7fWoB3V4i_WDLz5pQR6ul0m4g-7Ei36CtnPvL7HqPwDg1m-Rbv5Pe0G3EFvvZZ4sdLW1_cU1lhrKQ-v08Z_CbJV-mx25UVFwi-oX6wunhPsoTnGnFLXt7L18CtbevigEpeI88Gg-1p6wU69EiAnUEdG7aRmm3ch0Ad-UZBr", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112146804064807993665\">光昇王（山姆）</a>"] },
            { photoReference: "AWCwydhbSUiyKtmMtF3IcuJEtMUKI7uTSFHUsDoXbRnF187mzjNiMhhDjwUvmaNw7keS6n-Kjs2ipjqywtOVJlqJN11tbzBIULQ7xrQIS0PBB2VeNrcmRJp70ZVNHEakqRIvrAhEdK-XGlr31J68jYaLnR4_Bl0KekvakOQu1zqbwEJ6dRyYMMD9M1jJjsSwdTNI81zSQu_h7McbtbzWdj-DInKGZO9jW8Qx1bO4DzRnPoyHemXEP1rVp30kdHJmW1q1pqio9HVlJhuev6RkOQ5lsAZE7pwvrCZ_UTi-WRdD_RZ3wXSP_6hJi7QMrLZGcopmeBGwa2StbOsSjgFEtp94b_0tg4p76JjvFSxk1OYB4RwsMs0Y47POmyCd5iQ4x7iWY6y5ALUSDyMtXJoxHgRzFGP1vAxHwA7LciLzPvDZjdqs8Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104999915584707768369\">解妮瑾</a>"] }
        ],
        summary: "합리적인 가격에 다양한 물건을 구매할 수 있습니다.",
        updatedAt: "2026-08-16",
        highlights: ["가성비 좋은 제품", "다양한 상품군"],
        tips: ["CP3 10세대 등 인기 제품 확인"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 12:00~9:00; 화요일: 오후 12:00~9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.nike.com/tw/zh_tw/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9458484552590837735", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Nike+Factory+Store+Taipei+Minsheng+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "에버리치 네이후 면세점": {
        photos: [],
        placeId: "ChIJy4H1AYCrQjQRF-9ngOm6e7I",
        placePhotos: [
            { photoReference: "AWCwydiXc3fWQy9tm5r80JDuZ3qLxvYPH7_H7e-dg2r4GThDNlxzWJcLKleiLWXbVlgJwObxK1PtpjFg0WU9cB1DSYtXhG8noO5WZbMrZvJbM0G1Jp5TYyctKFE23qFLfemdjLX37p7wPs3-vmikwBBocjaZ7hqFZg-DG_651eQQA9YAB2WJvgXhJYr9ReNK94TSJWxXs8xhpE9Fj2HU8SlEvRTnMC2oZfFLGw6ydh3vumRCJU_aobqBJqG0OnzYwoXJ5mSGe_lK15X8BAlhqYUUfe1MbYsb2jPvX5m9aQHlgoRWcFZhlrIADtSBXbZjpVoqFVfGQ6_4Jjp5jcFtKbaBL89g_p57CFa6G_aijTWuBMo2FtqUKN0BOIZlWIaYlx0f_6WvJrUKgjzzI8vRrlE7TPYO2F-f7QxcQ4f3uc4F42xhsA", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108297285729387203300\">Hidenori Arai</a>"] },
            { photoReference: "AWCwydgTJACgUE1OwRXtm3yIEqVsTI4BhrOwMdJ6RQ61k0UpLz4E2Lletb_8B24k0PK0voWECybzrNkKdVG-Ao14eVjQ-5Wh63_h-PaJnOOZw_nB7oMnSRNC_fDOZ9LudIq9R7ULk4KnEPeecqqhcvDcEVuNPRVy4Dr09O1moEHichWmBgCfDm6fR74t3b-9WS87g4AXxXBov5lva3AHnISLYmvs8RpvBiOABQ-k4FeCe6b6Um-C7EUFnotIwffcQdx3aHjEBRpoJxLzRPPeRWDhyL_l4jdsyGR8o798rAB_C_Mg29ttRu5qU_FT6UudWKDIIYWU9w0Yh7Fv8UdGyYtp_om6Il4bhvdtTM_2ddvIO0LeQHOlwL1cIx57gjFsuAPuS7ekFGD2jULomMLozNsUsU32zdoGhdrQTGkF0a6ZC0E", width: 4506, height: 3795, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111318278249280756764\">EVERRICH昇恆昌內湖旗艦店</a>"] },
            { photoReference: "AWCwydjqIu6K08yx6V1DHz3HDYGuBPrQkBxlJ6zS8oXSknBGE8fJ5ZFQRkTx9bittF5kIsNSLi_GCbQ5WCZo-8h24FJKI0kGRBnNBvDxr41kuQYKjETrehyoSGggYaRhStSXe_ecXNtrlw_f9jvDHk7_Z7XVzbq_guO68KzJ5xNTnw-byH_Cxisq1ZyDATwAb-kWcjwUFW5BX7Bt4EhhDgyfBC8EpFsDGNr48FBgWieqzSCHKHGkDG8ZtMfi3U0Uuucn-7sRv3t09TqIi_BV_PEN_jHCl724hK8Wrub8IfeWSUY4e2s1eOgFY6VIYU_U_QRj7vT7SaTBKzL7ubtxOXZv9UQW4_uG85sKK3CHrPqDheX7uk9XhDoFpeZdZcKTWl0JrPkDOiPAgVWRxiOSb_9IEFYjW79vCoICvjRTzrfaeJMOrK05i0tKU9has76RBg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101456133575900948466\">Kien Trung Dam</a>"] },
            { photoReference: "AWCwydiysaEBKVCMMj90HFWkO5M3UaUpqxnrVHQlctfVNlVqffvYlwJ7cSSvXLtEgSsSht8V2HM8Hc-WW0E4zBFL1GkF8jPsoDEfexkH7m1K9JnyAu3TtAQRV_81_5RGvJ9L1rmvVhp-kudzLlT0wLbuNml1R-nqoAonq0HzBbG3Ojf3PtjK7PAmkk1DaJpw7BWOt3GI0rjRytzJ749avtLtfDoHkDreYTFM6SUaU3Im-cluNSWnCttAYukLWUckonVGBXyiLKkXabfJ5RbPfv5lktwkCu8l4othbqAufDnO-AZ4wbZwD5E6M2UgyJCnt_zO1AdhrItEQHW84auoT6xCl5kXTafy6ZgMiz9kmBr6EuRt3pwItxGFh2pPju9HrrxlhCbJIzdPaPTa7qS-Ck7hv35fLJJtGbsm8nDTAb9fHUrrhX6m", width: 3264, height: 1632, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107993093158191370986\">蔡明峰（lovecool）</a>"] },
            { photoReference: "AWCwydhruRH6f5kjn7fRuXZzeIzvpxoDo9bYeIH-kgljFmxJp17xdqvLc9trpsopK5zBdTHHRO6DtnMWdkb7YnNAV1y60B8mhBVF4QA2CDq1CNCZen4wf4LJlCyPaMeUaTpfvwKLaC4-cqD_JBLzJtOqaf3Y1auf3PaGID1TAQHG8yy1wXOAJ5ODy3m5ufOIcMhpRFqpwRXT0wGDhU4xthO59DR55uda34LmrpNZPUD3AChiQ07FpSvHsn86RtDFRK14aPm6DOcG7Gd-sXMORgONAj7KqTD_0O7HzH6os6Eq9LerB6jNCZjT9pQhz8QQaIkyJMx6O03G-WCcLhyVPXLsC4FuxIRr_LrdckKfDsTNLb9rllq30P-8mAX-EtLspCvS4eODlb25_y-gic7eDmLLbQFyGE8x15IG6fQm0NAbRB7wZ5Wp", width: 4624, height: 2604, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105298604122911929917\">Jack Chen</a>"] }
        ],
        summary: "높은 평점과 많은 이용객을 보유한 면세점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["높은 평점", "많은 이용객"],
        tips: ["쇼핑 전 영업시간을 확인하세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.everrich-group.com/downtown/neihu?lang=zh_TW", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12861078672931024663", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Ever+Rich+Neihu+Store+Duty+Free+Shop+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "에버리치 쑹산공항 면세점": {
        photos: [],
        placeId: "ChIJz0O2wNyrQjQRD0R8UJav4so",
        placePhotos: [
            { photoReference: "AWCwydj-OOnIX6syn09Zy6UIlanb5SrdUJkTThI601CWLQwbmetgVVOV8bjounmV-xDlrERAvpgdBq81cNPprqHTC0vmoRRldE6ibFjlR1sw1T2KNct4PiRpAkHkE839Mcq8gimhkykIN1PUyEQRQWDZhksDKfTnb0wFZIOYjRKp8hy7qmp6G_hzpEb5H2kBzlPSZ8W3xyt5kl6Kemq7jgdWF77TDONOQfhcufDDemBXo_Bos_l2ARk9c_crF0OEPWsKB_UZGBmMw5JonqR-LEvU-AqDK4qTOPsbJansDXKDf2mKop-7EzP5XQUCS6Iqli-2h9kWL_ZVShfiQdth_RG6Qc842dmK2aW61LT0avZrFIi-cNlzq9Wt_ujWa8bgMoxy1uso_GV_D8Fyzq9jNVRtE6uT3gKAhrvYvyzDUa3ktP4", width: 4800, height: 2995, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103954572970572414033\">EVERRICH昇恆昌臺北松山機場店</a>"] },
            { photoReference: "AWCwydgVEmVsljdgHsh51bZ7XskdOvd0-mN_2Y7rQu6CPkoVt5eooL5TavzkIEzFJZhRQ3j4lXPYQ7iqBll9rKuDesBlAE98CpPIZQf_Ok3HRzD0D2RdIO-qPqnbU2E3intn5HLaUj_DzprOtxlRSbG3xbH1EBkuQHMAG0wTPj2xu4uayG2mQ09ZhsCMTJrE4UdAMGRHXegzbfa1ZGBB2Fj0qo3U3p2bodVYmR3oPIYahe6cZi65f8mev_lsoxnDO22zz_ZCjs0d9GgnC8NfUX-f9Jy0VerR7nonouskqGshK_cosHVYt3de70l6zSobJ54JPgrPaWTZIMRCwPjSuu-Q1R8MRq-eirQVU3towaf3D9_RsrG1VzDOf6GVk0Dub3sdQhcN1-h54G8qcB-c_SmXTBnJPyKwold64mYp6A3A5V2geQ", width: 4592, height: 3064, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117347621100845170199\">Song-yang Tong</a>"] },
            { photoReference: "AWCwydi3pbhgHvZFSzKuW8coUXnQsghcshXiSzX46joKKG_ES0At9aNijhYy-3z4UEzQnEhJKZVwR-oRzSy_Y5uIVUrNA-ORDEdQdXoTLigcHqyHksIlbMnUhclAVfAxtb0YE6PNOZsNmRt3E7WHdpYfcwaW5_-afT6tvPCFKJwqVnkgUXxWWD52T8067pXtI-YcU34RnbjN4REBQvIfZ8I2Y61E8Hcwqa-1XEk4zmSjbLGHGEhxRAinq1TWHd8wrlU7Porx6_G3DlrbLqENRJxWkT2pBCkhaVuvVW1Ij-jG50JWM5PFkeH7D0Jbbaap8cBb4idLDdq0LHMtKlJ2c443chaKNIxNbvwD-fRlWdvXLf8TleDDV3998Zmk6x_1sy5UmAFaq9n9S6itBK8qCVeP7hiK3Ba3PpTvrdQiyDBo3jpo27BA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102788817126692878309\">Tseng Frank</a>"] },
            { photoReference: "AWCwydjeR1K57jDSYUDYsYoyoyPHY_DTFnbKCZ6t7q1dy6NciRXputtEOAryGJU_BYyBgbTWFS9ACkw4xNhjJH1TvgFjo03d0o1rfCvqegLgHiZ77PPsi9yOmMITxrnFT2sWW5vRkQvzKJHcLxJTnIHVPYC_GF0Zp8nIWD4SwcKaYrnc7PS9t3SVeJkU99xxdnu93WokozUvkadn2FAzmb3GLQktYo-r73zDO8Mv-L56vdCRXVlQaXChlzT7R3NMHkJXzn68RoiAdhDCJTU__kgPM4UKcetHmA4WvBiZ6kdVfHu5dCYzPjJBD0e6kHuMYJhDbNA0rUgsyRQkYM9NzjbsnXYy-867DeDrV6eTLoi8IrrbJrHiF0fq4rrkup3jJvjx3IDUkWmDrZ17SXIgX6FWpM96UePJXAL0ne1HPYctgsZ0zHYk", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102899003880351755686\">Keaton Masuda</a>"] },
            { photoReference: "AWCwydiaQq6VzWQxGoVKwWRMlyYosCT6uI3lH7Hl7L19MGUMgvJDtIdX20kGOTSs8aS5vTAEpXcZaXkF_CgFetzIekLbEqPIpUZiN0Q0Nv7PClJYfqhYWxARvcEgTv8TLi1yiGzfAbVIN6pNaRBZb3K2-b6OIhnDcz3bbJkDO7J9y1LSObG-HzAQMcgDiOpz0Tv79D77GoZ-8zIvaTCKno2NVks3Gci2G59o-ni31_0PZqJNYO0DI9HUlaiSwYMCn3onGUvUoc4tg9Fokr04o_g9n3CpIDoroOisURet5I9KdGJouD2ORkUNdxJDhPN7H_JaieytjC1eK74cB_SBuoRSF_hG1dUX9TIu_J3v2Ugqaddu0eHqkdALqgFHJDh4PrP93EqIYwydiTxXzdcT4KA-SMEb_6TAomYBdnXREwUsOw8Pf1yL", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117615181492376427153\">Yoshiaki Katsumata</a>"] }
        ],
        summary: "다양한 상품을 판매하는 면세점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["높은 고객 평점", "친절한 서비스"],
        tips: ["원하는 상품을 위해 인내심 있는 직원이 도움을 줍니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 5:30 ~ 오후 8:00; 화요일: 오전 5:30 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.everrich-group.com/airport/songshan", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14619440400528327695", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Ever+Rich+Songshan+Airport+Duty+Free+Shop+%ED%83%80%EC%9D%B4%EB%B2%A0%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
};

export default info;
