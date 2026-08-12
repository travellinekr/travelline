import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "동쑤언 시장": {
        photos: ["/images/hanoi/info/shopping/dong-xuan-market-hanoi.jpg"],
        placeId: "ChIJh0TC5rirNTER5hfy54P03tk",
        placePhotos: [
            { photoReference: "AWCwydjELu-Oqh6HW2y74YxSo1-AgxVUhvMxntjOXJ_Ph7tvRD31tgbcCQptDGx6HsazQWVrEOTRdIdZGrvPF4qMbeyg9SLfZUi0INnyzTGIytFcPr42ls787UTO81HoUNrZ6TbBTNtpWTeho1PnidYStKukdhMa2VVZNSHi9LeWw4tzsJnvXt4gxYAzy4DjhFJ-O7Pjh3Cgq1Pq9zsr8OAfrHA73L_XCv_nCMo9ca9yU0FrsXBjExrk6l8l3IeXLWzcJ6N7GsMCq-_gU4nbWhLG5_rUS6uMF6QPilunxPyxija1kuhjxtrOxzkPUUZKs-qtkPB1NLrpay4z8lV4v02KHn7HbYO106Y5u7SCP8tDi6MF8zQxvikAGuURT64rgY1Ylgxdy7gO_vtmkPSY-HwhWG1dN5Z4tuXQidV9jDFygn1Krw", width: 4272, height: 2848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110174933226709791659\">Tuấn Lê (Danny Le)</a>"] },
            { photoReference: "AWCwydhVT2JEZ7KJ4RVa0epYUoHMqusfxnQ7x04Tcdz039iokWmbnrfau23y1XcP8xIXfv-ijVFAZXTJnSL1ISM_iCCGhptcrc7l9EQ50Vuhc1KwQ7abSu6OmFTYOctOgNF6jI2eiBX4fE1eERr6j9K-7vTJpUFWFeuREPTYFYyLPUQju4RYLxsPCC0zS6pN0PUIuVR_G5CQgJEVPm9yoUAtpdyXG9fQ9aIM7L7EGQj_5GvHc9Ny9xTHJsQpRFI6Txa_evYtxAVpN-JwmGkVuLg4x0I_G52ZHk6ctQBkNQjT5LicWqfDUks02tNUlJGeEHQjXmG9OdSaA6oN4VozUCLCgIesUhG4413NOKi5WaRrDHKHoz7wAQw1CLlO_IAaO_wnZSqz0EU9V6dCVwB5brUVG3_Oum83aSTLVwUaft5OSCcCqQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113261909475407720839\">Helen Chen</a>"] },
            { photoReference: "AWCwydjV-hr_98yMh1N8GrsSNeQsjpxiTWbj2-3HK-vd6BfGGEcoSvqjiyaiUKJTn89F36-7rGee1gcDxojQzL_Jc8BU_DDroRzCuGbUYRWCWUSPKn1Tm6PYN-6CNqP7aaorpo1urAtI6c5ifiuWAS-kMhByMLXyyCwZ0ktJuKPKFnFxYwuQQwF_6CXJZ4KILa5fF18IDv87Q0jqFGzorHL9xAATLHFWHq6-CRJpU-LQTIgVpdfGvfz-gespUMHJSfG-SsaVB7FZ9eVXO3cc3Gm3M7A8185c-piMxcGkzsR3u7LHA0GRtgN-stSbOf-F-Y0oanSy4As3posMAm2v6mkJPN4yXXN3Yfmoroz3Nc8IFv1UvcsoHkflgNU4epkPs57qEhYH6iI2N7m0J5IAzkGnjsAb0PT1VkrsKydj9MM9GtQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115687909215407428514\">Kien Vu Duy</a>"] },
            { photoReference: "AWCwydgK_Pz06UiJ1Q1s23q1HHRRRdUhCZjWJAochBp3e8rRq1N-VS3CARHRULlTWeKuO14lr9Yg_b-xTATMkmWX3FntKEhTI0xDeE0mtpe_8VfQjMHuwHlGHsd09_t-mlUaCK9osxa0wuTSU4WWIpjyZgSNmHslV_DQSM-CYj-cQPkbBsWmgwzuQZbinlJlIaVG0Z3uFyruIIShSHGzg_rGAY2RL_5Ztbx1BvUD_CqYuSagCCVGsLPwiT3n2YGjGjVvcLPrbuFgj1ahac1CJtQNWS5MYmWnvKMqUylRORX4vdIoNN2QubSuKN055Nl8rHAn17YjAd8PawQRjwbS21JmU8SVEPYAELkowfEis1Ze0kZI-KDCtF8BQwmHQ5E4evltfw3-KY1LAVDUtSM2KWm3iZBfZhgG9_KyoTE4mdXz6yALP7WHEC-M1w5jdJxa_g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109621624697675473422\">Trung Nguyen</a>"] },
            { photoReference: "AWCwydhb7WZuEsb86vhgIcM8E1M79Cp_Gnm5Ri3Iec1YICcnR8ofB8ptRl6Mox_YWcl89c-6pFyD-V8yoyvvhcT3f0vlhHl2KO2k6o27FDRSnZuci9r7twaqM4bKRM8bFL-jlnLZ2p4pfF2Cu-htGCPMwSPDZl4T4QfPpUviEBVA54lod7ZtIY0hjTSjbuayhXlBQCSVSFCBXzZztZPoIVt5ZwB9I6Nv_JZyuscd_nXV9BaKhQVp0aDPxk-q6gv4GEas_2TTXeUS-xCk0fd7IZ6vszczWK18JGuDVs7noU0aJsdNoBCfdwWZvJ4LZRgJ7DOYb3jwTX9R9grbanwonGJmNGjGRVScObzW8EC7tOS4C6XlusT7PHJTTG-pZYGrQSP5rgz_p6dBWDJaSnFLb5MOB6QIgziaGJ8YZv6h9h02kN0ECfk2tNnCxKh2uP6SjBkH", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109621624697675473422\">Trung Nguyen</a>"] }
        ],
        summary: "하노이 최대 규모의 전통 시장으로 다양한 기념품을 구경하기 좋아요.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 로컬 아이템", "현지 분위기 가득한 골목"],
        tips: ["흥정은 필수!", "오전 방문을 추천해요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15699254198429423590", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%99%EC%91%A4%EC%96%B8+%EC%8B%9C%EC%9E%A5+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하노이 올드쿼터 야시장": {
        photos: ["/images/hanoi/info/shopping/hanoi-old-quarter-night-market.jpg"],
        placeId: "ChIJ3x01HQCrNTERtBCN9T55LnI",
        placePhotos: [
            { photoReference: "AWCwydgDUfog2VBjy0kgy-QUPsNLJIk9JVWLQ7mih5vm4edvuFpvD_dq69WZfkG85Pu37LNZfoenNmvgt12hoSLUoaNwjiO0hYC3qO63vDKXYyVnmVzDe_yb3U-CqhAhjfZCg_QaJ2xVMumGyuVgob5feb59S1r_FdzoyWVsDQiozRvK7Tc1MiW2VaCXZSFJB65jEWSq3iHSQi8yjECkBnvUMPHByzppE3N23n0jzqb6rCc_9m-Puw0vtll5AOty74AcLv4J6MhstfXB2WZ2ZhAoLPKsKmVJKDHBcEe_gv-I1eNlTj_6JFh991_Fde95nqhLjtF9qY_33MoxMxzXOBYtVuXI25nAuwAgWQ32DfVHsnzIMiQETR6ToaVmrq9_mbcg9jtzuXQnfuMW1mhutsvQB1ngNgsqr5FTjggPdDjaiZVwncBe", width: 4624, height: 2084, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100594177125036109847\">lancelord888 sir</a>"] },
            { photoReference: "AWCwydjLQa2cvwhAM6-qfURsHEoISGD6_tnsZc63nZ81qR-F0_7ZvK5q_ILW0pruY1gkzPlFf_DoCCrbE9Thya-Dre0IVvHIw9GFnDBqVg-GQmKtbkXSoUpiIzBd1FQ2dAhqcxPUCQmF88c1OnQ5VmZuRux-hoYul15uf6eGNUeeOGnauv08P32DBmnTctKwM47TL1SKxCun7otNb6BNq3T4_utqQbTD2Tpm1iiqXlRb4i-WPYSw5XeblMAHoiTxXebJOewQvBZDt1LiM-vTXeyLnSJ6dSI-Bca4lKZCgfdsowj7kl-xxqqZ6g82Tv89VcDIPcs3dYZTznnOeDAlarqu6CouhA7V8hVcdaJ7v-pkLBFSh2TiqfRACQuyO5DX375jnN5pLumarSaqwfY8HyyuJ1JdiMpPh4ma10r5EEM8uXn1nhyq8XYXWdSJfXXFrKnC", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113786428670309387055\">Taco &amp; Nacho’s Möm</a>"] },
            { photoReference: "AWCwydjRRlCKj1vsePK28cAQKBIW6zxNG2ns8wAIYpjdpHANpv5ErillOTx0z1rmxFcq6GIdxuyFrGVVp7Y-5_8HzfTRbW6JtJk_-6u6BZSwttLE1QZlEVOxlyeot98YGivuc8wiTfnvR-ezKE8h7QdSXXbn1hNhY_pFtmGHfPx5l1ucy4EFX1ZnekT9NEt2s5dG9MvUfT05r-2WP_-9A6umDPghSQWVF3sVK-C8Sj0BBc9xqaI8eR9O4RQYphzZHk2D6OKvc9zUb58hay4jir4Rrj3D3dQKf58WekKRV90Lc819V9e7UQoVEaOPdh6CBI_RFEcovD1Aze05y-dNUTSD3xGcdMfasEeJjKbFvL8XogcUItlMw9gndpRiYpfjQztdxsdsD3w8gT1vSRMSnFwkGJ-eAVill2rfIkUbP9MRRZbiLw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113591747193855476741\">Anita Rosaleh</a>"] },
            { photoReference: "AWCwydhb3gEVDdLuSkWcovRbcwUqzXU7noefs_RczIzG7RiqlcPWb0V0QTl6NXa9UNY8F2TSIqo_zBjpz0Jr_WhrGWFaDAFF9ZkseM07ndF755NCbw-jofvJyEO5X71IEhSzVRQIC_EIi8SDe1MPdFoCNTtMhpggORpJgX0ZrKI8f94CY_kPXEp5D_l9yeTuRUO1LrsjxylGSUx08C7Op8F-gXAXH6HGxH5UqeJbHOW8078dK_aiysM1Jn_SNv_a8wcbIw9k26pscjHOqECYec9833m-eIKVIOaF8BQFmI9kJSqZ_JI7oWbhlboH-blQmeyoRZg-AnfBV3zl3n7ewDdWcunYwLhbaAFV60rzXL4rDmsgD7MMwqU50LgQQ8_35lf4HnZq89u9kCFABX4RjBnbwm_oUNsYwCIm7ZuXvRoWM9tN8CLHs6N_VYUHkqoI5w", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110175537073029682273\">Ivan Han</a>"] },
            { photoReference: "AWCwydjhVQ0z6vg2lMhqrcZdrfiZSQEJ3aHaGqVmaqIBK8V-rQj-zjmz613yw-ClpKRLMqxyyRpdE7kNrdeY1Ll8M9A-dRd4LxWAqt7AwnL3T9zwtpoXN579Xyg4K5ouqCziashXCrVKELRCu9m-D8H9KphWcaziZbtiLrA0rDpTN4vxJxAYT8p3pm_IshmvFjkZQBwue25cnhgE-JA40vIfOsDMLmlNAOtVuUMq1i1VvTKDSdkq2x6aG-kclNzWxD9za8-4fqtQTsZCPzncy82cUc0iLiZuxLweRzCCB46r8JIwUw5MGEri0_TGI4Gtd_Jpsi2muXqXDMrBWAFRpnoS9SWLhy8iAqFOL4mFK_4Stcp2XQ1aDJjPZqdd2Lyue6aJTOySgojCybCn9_Dg2epnr0CCSfCXhy-hcYUo-gCwNdghUMR29uLs0Uq66d-SQMZY", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114109587337495756356\">Mahen (Agent 007)</a>"] }
        ],
        summary: "활기찬 밤의 열기를 느낄 수 있는 길거리 쇼핑의 성지입니다.",
        updatedAt: "2026-07-15",
        highlights: ["길거리 먹거리와 소품", "북적이는 야시장 분위기"],
        tips: ["주말 저녁에만 운영하니 일정 확인 필수!", "사람이 많으니 소매치기를 주의하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6436514622737634446", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%85%B8%EC%9D%B4+%EC%98%AC%EB%93%9C%EC%BF%BC%ED%84%B0+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "짱띠엔 플라자": {
        photos: ["/images/hanoi/info/shopping/trang-tien-plaza-hanoi.jpg"],
        placeId: "ChIJH7MdsoWrNTER_Nl9HDXPekk",
        placePhotos: [
            { photoReference: "AWCwydgFqHFJ2R34POmKkauRp4ehtpYSEa-Y7F5KMcKEhwd2RntvtlBFuz3ZtvAkDem2-weJoOj_-uRwvZXgR269R8DGXmlqBdxjpyfO1PSeG8j17eNwWAmBsBPdX-pIKjpJbiN8E8zaYraqUJOm02k8Vkgi0YdSeVKeAMrhiyo3sLF-A2ofF7287tEnzwMRVYqlLYmA0Z6MyNDXmBkQhI7jVVSOk0uSEr283MnbSXkCoy_xGypzQgK_z6c_if6D9rbxNu79HYRuTIAxQcUKHleQ5vxQnfROcXWT7iQLeE1d2DlUbO4b9K0yXATlRj929PReLH-WLDhSw_g4Hmdxl-1nLUvInHDKKZ9OJ7o_3MC1plj3EfJJIfM2ATpwuLpuq9U0rn0LirhTGBYAclGhgz3_w9NtTyPtm8lfZjPojqSl_kccKF4", width: 4000, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115363728924154775197\">Thế Cầu Trương</a>"] },
            { photoReference: "AWCwydjbP_RTG2dErYc4arcpyWa4p5Uii-CxTGULp4hrSzxm9mR3_-TlAY36kYKQj4M94eW6XObRsaK-UViLlyDAXiJpfFLtu07VJXkQW6pTllyswQp48mGi4fvvTq3dNfpebIQ3gcsFRDtak8UABq2lYQNVQhiwIBZ0BzB5c7FS-bCAFlKZuu2AWRHEgZo10mXqr3cLHG606wMjynxKe17IhwIRrq-sVm71f-bkwJp_dSw_Tm6jrILF4hLFFHZlvoV5NSaXpXvDuGUJ2Osv-BeXX09r8sWCh7KpJFEq1ZNWE3Ef3Qwya5ZaTUNzEIB7YTXO4pm6x3Ml_1nT-Rx7_m8FaM00OI81Np2Y85XcUEtnkXiNHOvH2Z0Q_2SEtkcqlcAFY8Ys836qPsZpolgDZbcBKdPVBYnuj9hbac5hBDRZbEqdczvo", width: 1200, height: 795, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107027244590672207652\">Trang Tien Plaza</a>"] },
            { photoReference: "AWCwydj5FnYy1SPFvaFYTKLphuw7YcPWwbxKhMGSJBxrJBwtA7r1E5q_bBJCwqjkgaC_h7wl70Cgl8-0Rbj9p6ALVRBuqAosw81bWTOLluM5l_nhRwtBGvr91B_Tqwcrfq6AtX42C_KEuaR4qN26ZTjw8rTS7CVGydJxFHgZk5mqmYHV3ltM3GfV415kanDlaEwtTbTTLKAevgDqKjoQ_V_b5IBsSv4zhMwdzP4E90M6uEvo5uZZLIOGQtkoK_z91yr56g5XqFm6l4clhGy_nBX96ODKsVZL8juMGmx_yocOBeHaxfqLp55Tqc9m3I4Ch62a4gXvb0-3dNkSE5zOxYCQK1gmohDgsRiSOAcJovURYZS9YeHXXxfByj5wqju5AkIQlBXSlz65XPdA5bkJ0O8juQpS4Z6cvXguhc52-o1j0CEesZiik3jj-e-6gy8g_OVn", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102386634429324061571\">TravelbyTinTin</a>"] },
            { photoReference: "AWCwydgAKdDuuidVgFUdJ_CfgDZ9AwlvD6VMWwXPpKFN69BeiSM1MbTicIRr4k2Mf-lBGgSVvgmpNNiwI0B4upb9tzEqs7uRZre99x-3_me02haZPZ-34GQJeszJNgNOwLN2alj9S47VwHs-Y8BYwY8XBynhjTG38Hl3pdSqU10YloEKPXHk2GEG_3yukqYAf8MtvgAAUKfHXaVv_GdHG2GT8eX6agknmU1LtqTQzVcqSEmJlL_1nUhj98pgOYe43CpQ0JBzn_j-xu-C1VcyYyKEViERS1Gnr-TcQVX6CL2R62i6ZbPlAU6OmTIafQHbh8c42Y8O4wUPrHLLz3uY7-iDapqQZv8vxobaGnDRN8Vpnd5tXyx39Mm4Q7tZ1-9txhrRX1bB72k3RYQ2txRSoFizyO_c1yhiEzXdf9ZW407c_yTxfMpW", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101729007070537868291\">N.Đ.C</a>"] },
            { photoReference: "AWCwydiNXoPNH1dYvuhJEW9fmb5nGGb__18XqFntM1PoZa29R3-uWdr-RwTJgZXBysl10TkRmGClrl-X5b1KSsG54qOd_d3vvueW6nkNfWAfMnLpojA88Z86iU1ZxQ2iVS8eD7S6rTYdCNP2DetqjzCZHekgNDz3O_W2Xk53P4YLixlf-Qkci8kyifI9DW0m7u0OaLplXt6PiyH6iGgiU-vZH6pCXmZ8igc45rPxoqBgfrNyD7KwxW3vCJBbBPBBZhGMUHn9alN_m11wY7qbgtZXkT4-hSIl4Haj5GsvM7TbYkv81Neh87954zh-PQbbkQC666Pq0R2MDVc9lwz3TAj3iVx7JMkE_uuSLftJ0309AVl457WADXvp2pyH_Kw-6mgg0nl2Gx1Cz91uo_d0cDsMMtivYw0mv8FIilFLGHDEy6gNyg", width: 4032, height: 1816, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106261142121025307655\">An Gia</a>"] }
        ],
        summary: "하노이에서 만나는 세련된 브랜드와 현대적인 쇼핑 공간입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쾌적한 실내 환경", "다양한 글로벌 브랜드 입점"],
        tips: ["더위를 피해 시원하게 쇼핑하기 좋아요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 9:30; 화요일: 오전 9:30 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5294772138945665532", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%B1%EB%9D%A0%EC%97%94+%ED%94%8C%EB%9D%BC%EC%9E%90+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "롯데센터 하노이": {
        photos: ["/images/hanoi/info/shopping/lotte-center-hanoi.jpg"],
        placeId: "ChIJjdY5kmyrNTERz9T13OflR5s",
        placePhotos: [
            { photoReference: "AWCwydgWnxIokiwKyAbmxD-KXfXduPvWLkshWWjLDfHSZInxX6hMjSl0adLVYfsW6P8Wwb_r6lWzzEFNmNLm_GmL31oycAXi2YAR3AGboPRdMa0BsRJ1f8sCaqU-7Dm-y7dEoQ_vhkQzuV6qGGkw5-BFaKXEgRBQjPNt7dNLooELJIuWzHvkTjtMp4YtBDQ9NgsknzvJBGxlKthE2Q0sJjEYCuT29Gmf9_M8vQGRsW6In5jOeAKCdO1trDqFVh0RxDdUDbCYnpIr0-IiVHXcmotcCbM8OG6RfCnL0-0WD8ctXq4zYAYsgueJzpbgR6vThSndZOMfGQCMr6Sic3HAh9zNnA9rt6ggreTfEA_EttmnvYCWJBkkBoHWi_n8_bQG-ijMxxtfLpke9lkZ-beeXadHvk2zFy59Tq6uswdr3uXBidvrQg", width: 3000, height: 3680, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101548807785083425629\">Pham Gia Hiep</a>"] },
            { photoReference: "AWCwydjGpy4b0tbdaEqYFXWCj_eLn6fTeg-ABycasg-8av1BVHNZ_pXjgSTIwjVAidlkBY37lJoqrsCbDwN6NTlGsAr7uEamPhipqiQ3sCjHkDke4Fy6KHK7F7wqAJ_3-ibQsT0C_-oI98NhdzPzsXcArwEVK49czacw76jAJkj2N-bj4B9ix7EA8scETf0fLXdEISarct3FrJuKlSGKtSwW7pVq9ErMnBwguA8UtHak1eXlsoxcUjjTnqUDAZOGA5vUv_dPkMQUBLXPAbHJXhXLy2q9uBYBkSE72QMHLYJ4498MVnB_GtobCWyplbu5lvWm1wo7wyn12dPj_ExDllfkCV4urQUab6_G2WdMHCjrdkz5t9j8cR8iOWE4hw1XeTsciv0HM71HAOE_7ybK4P5OtGZWqY2_1wuig4XQmJ5XiD8LVw", width: 2976, height: 2976, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101579555147612259679\">Quy Nguyen</a>"] },
            { photoReference: "AWCwydjdlui49F0FWMkVaCHc9SV6tppU0qqFzEMLXqqiGjZqykSorjgwkvQco-LfIvUS4a7i4Zi5f0bJ50icJdO8BPPvWHWjHAXPISmz7qIaE18uTeMEav-HL05HKcY9M09xRhmPe7EmRQCpT_wuVhBZTjnd5tNSj35V0B0C5H2fORlgHxsA_ypzH2ai62uPQgZko-0QjYO2BA5PX1A7Zhf9A66myzJLRIt-AXDGPkIlxmhozNxqHfByyeiZ_uMWnBqA3KdYQmIqkxxpd7rv8l-itY-ov046mX_T7TJ1NhvpkT5Kxca6fPQ-nsRVGNCNlIhLSIhuUsc50Nkc5W3YLcmVX6VfMWiuPnOkH2TXuNAkMG6Q9YMKLhY754ETTlyaaSKcWp3XGHImFJQIwP3g3K1DLb26cr-d8sDUPw3cuZgD2aUwmljr", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110597552703112464670\">Hiếu Lê Hồ</a>"] },
            { photoReference: "AWCwydgDoIn8NelmFfRintMIk5VzVraweUPXzbFyurW9Hzvi5f1ePn05HoBsw2fe0NcqXi5JZkPLpwGGDYHRoRCMuBPUxurJGEqW_KgT4SAOGqCmXVt8ke-dHMEF6B3kM5L4FohNwW6-2qYpkfb31xDEhdP7zJ3sLErZ7h8-ZmOPrkIvyiXagbRi81GO78uce1jpi6W7E13xCevreV5ytoJEQc2M1ylOObkQ2K7aAR3PtLXb32Ky_aEDU1UrG1x707KMlWfrXRFKB4dAppnAbSqHues4mF6e70zsEIGNp0J_yNiF3Jtvun6GIkXgqWljuO7tVR4Cb7XPzbEVNAa_unxKuyelu7xTMox_c5kcXK7boSBpAlKqU2V0SV8nbQ15XMU44aS83krGOD06szARp5ptgBh-5uOIz-GDvyZLbpL4OhxKRt5o", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110487776921602658904\">KK Chaudhary</a>"] },
            { photoReference: "AWCwydhKTim51IonmHOIsDKNq_yXMxXdJrVXRwgobh5xqmB7vAQ3QgNLoHvo8Xk97ILbBrBzhJgx6a4S8w07oTtSoH0S8pr_wzJ5ybkPT_Huh2y_4vva94KAdZeuJPsFXKVNFbOazACbTaH38EY-F2y3I9WnjoawfCefdaThWJEuqy_JIxUGqhQOh6Gga4k9weuyR8M2VXahlXpGP_zszTqgYA_EoI-t3KhD-7oz-MldPkemmDt2I2nivkp9LJ2pzPtDmUqhTz-QHoz6AhbMD-naWU1jID2UPdzEqMkZoGJ7H3lrtfi_4VPsQH32u5LAVEEwpD2O4VisbBUiGPUTDwLpNXKCmugPh_f_Afd3rhhh1yfSQPNigdmdXzTjFAY_yhxzdHO-D0LFds5Fw8o4t8lPmSZfvDHNpHWTrHp_q6250zBT3A", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110597552703112464670\">Hiếu Lê Hồ</a>"] }
        ],
        summary: "쇼핑과 전망을 동시에 즐길 수 있는 하노이의 대표적인 랜드마크입니다.",
        updatedAt: "2026-07-15",
        highlights: ["롯데마트에서 다양한 기념품 쇼핑 가능", "하노이 시내를 한눈에 담는 탁 트인 전망대"],
        tips: ["일몰 시간에 맞춰 방문하면 아름다운 야경까지 감상할 수 있어요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://thinkoffice.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18153478485024015252", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%AF%EB%8D%B0%EC%84%BC%ED%84%B0+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈컴센터 바찌에우": {
        photos: ["/images/hanoi/info/shopping/vincom-center-ba-trieu-hanoi.jpg"],
        placeId: "ChIJrY2_Mw-sNTERn0V6wwnp0DE",
        placePhotos: [
            { photoReference: "AWCwydgn74VuW1cizrMjMzeM7VaKMAduD9e9XZBtFll2lP5yqVHojqZlRYBs6f2W7AEWdv0yfLaXPAAhaTCGMXkiIpjDoBGI4y8eYnNvlbC6NB0pdyPM3xfWplMqdPfD1XuuFzc5U2ryhcjPZMvElXCHrMfjXUlP7LCwWkxx-BaI5aZXnK4Z9BnAnUiaEmRuavK7MwlMuKZBiUcV9YzejTlrAXX-9-FEpnHnllsICwTH5nuWuOar9wCU7rYessqPppWUWa4tuowiouBcD4cawDocMVobvL6tjzrrelklxPWE9_OXvfO07BOPlDTZPEbUty0rdA567irghYmCc_TFkqQRUGP2RnCYi6GNxxGxTzU8yAUh_1Wx9e09QHonXfv4vrA-VSgGZCDgEqnFjvjI5bF064dLr2fm6jFODGgEj4OTtkuMxiYm", width: 4247, height: 2831, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114912170524570195093\">Vincom Center Bà Triệu</a>"] },
            { photoReference: "AWCwydiAq43YMIuGUiclUMvaUIJRZtUbskj4_rPWo1XHeBaCcPMZJI0CsM73eC2ViK_gXVVKUxkxMNW93AKauaH80WHbfFKXotP6eKUqjpvVOupkEJheBfwYcj8inkJE8ZGvxvsxS-U5_HsgpPcce9llf_COScc0xGn7dIbPkVru9uReZXSCJwxEvr5hoqGrdAikyZJGp-GrDUxgfyDGc4OlJjnvavZBzHwmY_EyeSJWitJbM0AKxm6EXaY1S0kP1BPbZgJl27RXif_yPpY4klNMJWHR-Zvi0GV7irwD8ZcYI9ye2F6MctrV2JW0uYjkL3EUt3kxYEb5SQVt_h_u3hYHZLDRolbtpoQkT1OjpRc2RpoDP2jDWAjv5WE9tNlc6Qxi-H-FD3L29eAuiVEP40C6ytnvC_ZSJNbB4T0olASccetIN9GG3UPwFkSGBt9vV2l2", width: 1125, height: 1403, attributions: ["Photos are copyrighted by their owners"] },
            { photoReference: "AWCwydhyUNWHMuqI0HdwXNR-0SpGcjNGC0B2aa4bXCM6duHtviOllsUGKzHNIPm8lMIy9DNe0hn4X7-zz824sRW4eGMTXxQVKHxmqszYGG0eh0AVibomXbd-lRh07Til2PreNdxHnxqvUrtKFPRAZyKBpfrScvzeH3h-VX-_wPF7RbCRNI5jWwhqfwyP-SiwjK6GpTO9B_7FQFTMmiHYYCdw7R9CiDnb4Xr-Nivy_mJOMAvylu93eps4xK-LhEASEEf7x7cb6hrSTDVT-djk_HUoHwQPgXy7Kz17jZ2v1SA4DOAQO2xTenQaUGLg27v-TIoUB8DuoumLtxFgIWTSkYemI4LcmU6RB9vyZ6f1MSaTQtdeeVMJ1VOeUHl9eHqFTzP3btLtb0YUUOuXTZ1IoYPt4bBwUouUw0sj1LMxwbAVKx19kGodQcoRUeulmhsZmFjm", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102711845213769326171\">János Fecske</a>"] },
            { photoReference: "AWCwydjoI-IjArQIo8AaOW2bUjZcecqBlQVd-SAfJ04DkwOwJzaIlEjjlrs-ZWlps_RbHoolHMYo5o_phTTx98LltIuZbJLwycLnYXtVRGW74kmHFSxWtINdUebv0sFVt4NKAWwPbNTxF3YtlQiVKLg-EPKVc7HYppwdzyP4ZGKGNxD2poEucDWlmWKRWl_soWsjMyAGghK_0KhN2ZuYvbl09qP3EDX9xpSXhMAjInmMAJdFERKStPALKdPhwN6CkwW2ladifVgP-iwnGlieOPXVnNE7_JOOhRnrc6WSIoDDP6eH7i28sK9MXTg8K7Em5mPUm7z1tGpgN7jpYDQLoR4Zh_agsLj9AuGDM5m9UbRVNLA7xVap2vxdcEvdIf0oi2Eo9kIcJMd7EiG6R6LbeZeNAGs2vdRJUJxMYEPIhe2U0ANOV5aE", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103033936629710573682\">Đoàn Văn</a>"] },
            { photoReference: "AWCwydivj1w1sxyisaSKv55yNR3PYPTNrOj3BV73yNr--tddv0JtrZdJ9N2_q4KhqN4zzVe20zKFQn6H2z7PMvP7TLPtKvIyCBYnwaf4r7akfODBOx1w_7cx1JDJHIJhzsO9ADqleYd7UdPz504oj6m3I61IqYOxxo5IE723BKT7kyPw9pWg5Z9jYtGeWc_JYdNg2RrYuhCpwpDoypSkpisU_7fqOs2-moUoTCkWxYbxGaXyt44JYJF00S6rYoPybF_6BbbNVjNt1KE-jpKY9nSzc7rYaISZftLWvfanoeseXwlkEyWDgIg_dKFtKDoEeF0QalBjYP4_CuFc6syQBAQourt1DPj3NMoncQiwl9tQdF_UoVPOL-JdGQGTPSZnbGTT844y_iYESW0kBbUL9Aa8Bp2Adxsd1-5nxjJ88s21WsxBy7bE", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100218315546107811104\">Kiên Nguyễn</a>"] }
        ],
        summary: "트렌디한 브랜드와 맛집이 모여 있는 세련된 복합 쇼핑 공간입니다.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 패션 브랜드와 대형 영화관 보유", "쾌적하고 깔끔한 쇼핑 환경"],
        tips: ["주말에는 인파가 몰릴 수 있으니 평일 방문을 추천해요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://vincom.com.vn/vincom-center-ba-trieu", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3589625131157833119", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EC%BB%B4%EC%84%BC%ED%84%B0+%EB%B0%94%EC%B0%8C%EC%97%90%EC%9A%B0+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "항가이 실크 거리": {
        photos: ["/images/hanoi/info/shopping/hang-gai-street-hanoi.jpg"],
        placeId: "ChIJme7AyL-rNTERCJAT8ds77jA",
        placePhotos: [
            { photoReference: "AWCwydiuwjBwaU_v9BYYXk2YfI4L6HFJgsF3uD-ThwZWvXB_XAqXQOk-M4s936EINihTSm4HFyFqJ0WmqQ_8IKeJ5pKlUwg3oxJ0oJvImm62dZf40odUqQCeoIhxvqmlHGbYdIaRlxkh_dWxjZnoRDfeOp7_ncjXuvrPgJMCfSsnskbvgYCwrfkTmTh4i8u1lOybfL50Emzv-l1FSlcf--__dHeh5hEq0_UAd8rD2-yoFGbxqTrhG3A27z4ArxtPxF1aCD4KZykKYUNYCCDqixXJdTrvaTXlfrnrgSbFdHPuWnZZVERsMJA2_F2SmUK4NN59QtoRuf1FDRQyQnvNvVHKn2eL-rDYPjaSb80OhukTqrOjFab7PNphOIGVVc21JfGm0yyocfy0NQdEnfw20rEUtkZKkO0ZTZ6UqCJovlvG6Bo-Z3U", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102873738934801008402\">Ak</a>"] },
            { photoReference: "AWCwydi_ttS65O1WD_zQA_6I_9kLgVpJ8YffnKzWAHr3NaX6jQ15yPLztMkncHmJ40_PoAYzazwlLOtUy86fFbP_jQDJytGkm2p6nDDTbej3W5A_IpyaOElK6fDy-3Ppn69Wt4qSWcTUgpmq_9lFsoHMrB5-fAb1fDqdCrOHCycPNJdKakmqD_uOYTdNoJEVS9mtYo4EfHUeK03yYcLNV3dgVz_N93HiTx2nSK9tqzcXtQPqMgd99as4m0qVCaq6ok0PavNfZa9I4dvc_xKZkwtecT7eJLdluE8ofSf4n3HGesrDk61_TVr-AQAXNTMywmhRiU7NSjEzka524f9l0tAEw3dRcA-FQyDEScKB8avUq5_XXJvYHRLB_lAMl8rK1MjSpjrgOanAeRMLL__Sxu8Yx6MuermU0NbmmFz8FJm0YO9aJVcewBDC41_FJfe_Ow", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113137467648368943913\">Hải Lê</a>"] },
            { photoReference: "AWCwydheXrx-181OTxSkCAU-3KU1VhOKMgwQcZqZNxAlsZOPRAHfoOV5qFYz1om04zWXvVWxG9976JtqRgh1eweCIJXg6Osh9wpwG2mHsMZ_CrDLT9jvRVIyoX52Ak30NhfORn9owwECBmDU2QwqWq458A8xxN8lhXreYObwSkNvwLSeyGbMI6ARfHFAp7bSFT4uywnFn6VsSUnWIshAyflNuWvooxfqbrs25mwToR2qSucjQ-YjejOyvE3ACGTWzhrZG9AsSUoh6jsGsWQVkIAJORWXEXXaJWYfBpt1IEEpwOOo_iPMhrx7ocGb0AnGo3L9jW9QIdyn2KCbVSgAlbJQEUM71T7y88ghsrDrglH0kNPCfP3yccI4GRauqKyGDJero4qXVD4h87tkf3DLw6eh0I5p31vLCi8tjH18PVSTtSUSiX2FjF666n1CXhEYeCJk", width: 4080, height: 2296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101729007070537868291\">N.Đ.C</a>"] },
            { photoReference: "AWCwydiQDyUjW92uWocstEeccFXu1iOe3mi5_j5TtHcdIHd-WcpLoo63OHRjGAS4e4sWVmT3oGcM-A9xhctCZBu3knHy_s4R8Ok8jPFp1um4xGFc80BcxpQ-dBaIqREhgQdn1HwcHL70hQqtSdzj0dxnKhF_5kCVx7Sc_WPiFAgKF1w5ahEO5-A0Qc8WWKPsLknSJDb64Kyp4IM1isLuKEKqNeVW8ahAOqmDOzZZ09OsSFHpr4JgNNdnKgF-Pgsa3-gMdh_CiolqRpeNSgYlxv4vIYQnv_5BZ0D8hxXUz2a6WE5JvMCi-EtzDWF5s-PLnCRQKGD5aI_Sc1cLKyRT3AS-W-WzHRVbsd3Tc6WyQVgSSdJfxRwp2eISJN0k4updLkPjlbRI9Qw_X-gB_q_rjpId8ofCoTudy1b0afxLu28MN_5sw3Q0pDycT6GTmM1rbg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115692783613175039425\">Parth Patel</a>"] },
            { photoReference: "AWCwydh7fU8H5VeEOWBgpd1KsQ7f7skaIKSwFguhkMERaxObIXinztaJpVc7zMluGia1jr_m7-JXrG3tAU-pIWnmnfWegTaOXTKIcUGzq9t_EIP0kyIp1FeWans88aBI6aNqhgPBaMuEvN8sr4CWBXVgowcoL4OGkWa3qdKvn3kUsIPMmClXJd0ojoSFJWUe-uZ2JE3Q7VGfuNcz5SgVj59Nw-f27ok-X7RDXbRDFILtQ3C4YIs_2aC0ujycnyG_I6vgaW22xd0Rk-CYPUpAaacd4HlKOlBJmzDgGIvH0aq9NVAXiz_xLCTQKu_N9CJy1YfIEWCiDDuUaIo7xneH2HeHpYV4fvnXxbnSY7REZAK1gSnTLV--btUxElj3edeOyBgBTFhb1yTEt0MTmzedbYx48hkrRycATwzu-FOZG89UyqqPaA", width: 4185, height: 2775, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116026229372575257140\">Paul De Cauter</a>"] }
        ],
        summary: "베트남 전통 실크 제품과 아기자기한 소품들을 만날 수 있는 올드쿼터의 명소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["고퀄리티 실크 스카프와 의류", "베트남 감성 가득한 기념품 쇼핑"],
        tips: ["흥정은 필수! 마음에 드는 물건을 발견하면 천천히 가격을 맞춰보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3525821374106144776", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%AD%EA%B0%80%EC%9D%B4+%EC%8B%A4%ED%81%AC+%EA%B1%B0%EB%A6%AC+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "꽝바 꽃시장": {
        photos: ["/images/hanoi/info/shopping/quang-ba-flower-market-hanoi.jpg"],
        placeId: "ChIJLxiMqPeqNTER5PoS0JjHCqs",
        placePhotos: [
            { photoReference: "AWCwydhXAoUtiSrwCU5WAW_9H4kivfZHK5DVTqCVAv68HuaEunmL6GOSAtsL3UoI8lOJo4ik5jEtbbiz99hiHV1gpwsPxs-LMBz0MKxc8xnzZTE7QFIIp2E_4GMFCmo75fiCU7Ja17fl03S_rZhR7ksABlggrcRQ63D2FXpo7qRKhR2GXVNAX9Gezjr6RduuF02yarA2eFy1jKl-8oja8nzOtOwFPXn5xduD4J_naAio9t_9XJgJBWsIfhsswN2OHiIMfn8AwC-7D8gnIla5XYHiWpmGnFj1fox_0RQMdg_G8qZIun2a-tPc0rnltC5IcsYPJyFfkLEkMi4Zd-IFKzlNLMX19KgpZbVg_JkJRw4d5vHcb0mFJuY_aI7FF8GMG9Tpuv9QAFrlzf3Wit1sQvIcaX1dFPrcMFKJGCQuU3Sx0AGc-O-auVLS25PI1VP6o9XQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105547962159378610347\">Thắng Vũ Chiến</a>"] },
            { photoReference: "AWCwydggqcv2K5rKxbNuO4KjZl7lwT3pOhGc8Difmqgp1HuiivTFiU6SZU4lwHYcqS1zjl0OCU5QISAfksPT5vNPm1nLG1OT-NQ813yVf4IrzMkO-K2W-EBzhMe81fvHN1VbHXBZj4woA0-w2bAF6HIclGauHzHStuJPAtgkWzBwfa6R1ut-67zm42ray-1dQWA7Y62kjc7NfAJM-Y9kxEQxTvjZpcRJlah07XY3jBunfhqEay8wsKZdUopymD00WTfg7Smj2IS8VIp4c90JpzE4mwy4fphjrIacKzQOjkQG72KyRuY9QRSyDWxs-F-5RtgPO6-PEX7affiC3R07qQH9H6O67ydJ8jnOVGXZxZtMtxkwhyoZ2GXweLlzVa3ZLuQhtDI0AIfH_tmBQWh2lCH-7o9GBcs4R82DTW8SO-ILy6qx0nzr5mHooT3obRIhbwov", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100240478323340792909\">Ján Stajer</a>"] },
            { photoReference: "AWCwydhpb298TiJXISS37MQkPZU3MSXqKRlIngrQFG85vl3t-t5_S8nwoc-rl09k3uNdarNsZIfFVBLEvPlvSSo9XCDNMHuW7GREG6paSRinL4crzi9uHxi4-Qiou3skJov-6PPLJTHE7bMWlwh-tYYMu8QeAfPi_JTGPrW_1Dk4214_E6yJGNVBPVmsxWw-GQSQU6KSsfV8BPRIenwpCC6c6HnQB4f5Unm6G-34W5mToGttspYQhRT2SwRY6whqlBA1PUHWzHUY9IwtOD6eLhF2KzLvePa5-33WUi4K0PG0E7rRZlc03SVMasjhYBPYhtTZJvgryTB016iGeBhLghksqHHkKXuEZXxZBj0_nko8B3kGDHcdE8LPE60kkzAVb28jxi_HX15_TfOQGju7dhh07fAebODdIPFN0GxnBeY-OgPnUxZsAHmjh2fHPhwQXA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106113421318888480203\">Andromeda T</a>"] },
            { photoReference: "AWCwydjgcSsJG6-q1EgufTf3fi_S_W6xdV3ocHh53mWAIcxD7H9DKM1JSOSsQE-yaIi5uflcmrYYCqpaoOi2NvvdcapJNegM9lOd84acYLQ2kReFuGWhW3pmsfl-Yw5qwOHS0d-pIEIgHMfgyPHKP6B1wQTjBw4KZlX2-gMYP6GDusG-4c8LDuw94vpI9JfNGjfXv_ZohoX91Fr_FRSLw_3qEWmgCJ0MsHZ5OUmlTloWnvkbcobqyVN_Ykp-5agVp8QKS7gmyc5PpE2RqgUGpuBV_cQD9T_LK72dVELDSAvwQApUMFjEvXB7IfsrIbY8G9t2S_O9s_vHj30ogKnPzrAP3TOpsYbYYhelfdOe6oD7QPdmTmEYMUq47Uwj1m2uSGiI8O_j1viQThBA1sADRBlJxz_vmHzVSHmbXlnNkR6PK3vGy6fT", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114960358695331950973\">Trịnh Hào</a>"] },
            { photoReference: "AWCwydgoB_lYJivkNHFuO448jXXWOYXx4F8j6ZISBN73ppy0KxEs8OqerxfUoOWOFouNAePymgLBAQMd8DdR3AKhqTkpuO7lAy6AEv9IMd6BZV1VfH1-x1D8crbDw-_MDJHgT8R-sIomYxQ4CyJsj64nS7xiZB8njSTpNz4ZHhupTwgHQFOLnJVkyg9XVHMzUI8jhi1X2uqNkrLQo9Zh-arjBfFCbGFcyatm6XB8thSCJU636xq1Kf38amTvRU1G-K46Q4utYM5ck4BigssWWkgdMri60ILhlcOGOtPe2yyazQ71B_FJh60dZXxVp-D5Oqh4B38mCXxwxwoldjXFJsBOlmZqzrxZccKmn-a1t6mtk83sb_bkVCVt0gq63_0i97GIMXEFA7YFBp9rMeW5Kj6iAKKzQp98pyFgK6bzgfPb28zcK5JRznW0BsliA1uApA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106113421318888480203\">Andromeda T</a>"] }
        ],
        summary: "Trường Xuân Flower & Bonsai 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 4.8", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10258092355042451076", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%BD%9D%EB%B0%94+%EA%BD%83%EC%8B%9C%EC%9E%A5+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이온몰 롱비엔": {
        photos: ["/images/hanoi/info/shopping/aeon-mall-long-bien-hanoi.jpg"],
        placeId: "ChIJNz9FhWqpNTEROakgr0rjnAM",
        placePhotos: [
            { photoReference: "AWCwydgn-j_bbyhsc8RF5pa-oSEI34E3pVE4t3ANh-1ORiYwUsqDuULtbGteR4KSTSlQCxedf9eWVVFAr8t0lbCaXSkNoh8zV2zgIn9k5YM-CMoW-LnsfS_FlyUproYLb6sntU_1HrUdE_dEQ1UOoktpWXk5Al9Xnq0rf1AAOQVqzcmhAhbOe6lj2qmYlG2NHaDi-EDi58G23yUyCy1wcPGZAiJfg-CY7VQ4s7BM9n5ha9q-v1Kgd1NE_7-cFSvx_AGWTx56WLNyPcTyOX_pJKWlifHz00T8esmr73IUlH7i7pMx3fwBD5-DITXME82AQx5nIRWUaB__ALChxbTEkN33bhkFaAh-siOqnOM6mv08oj5SIdP_-CpzTesrRfu2BvFojfCgiHI-LQFZCG2DmgLn6s7_n3L_Ri-N24Opav2cfGK6FTY", width: 1920, height: 780, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100467720647624211225\">Aeon Mall Vietnam</a>"] },
            { photoReference: "AWCwydiYWWesTI0A5cfv_kTUswJqTY9cT9PljGfEfEwWTZlAI8qtHA4RtHrSzOJNNpajP1qZxQQlB5XjfpBHcFhNkZ8ednv4Y3-JeDLTP10-THjpVn9NgEiQ0N9DwD3OMkHHUUmWJByBfMHFon5Gd0-71KdNjn6EMt0HWmhnTXiEq3K_phRoilOtDnPUz8Ke_Jf2o7bo55X9XzMRadYUcv3lQWG8hdlOXBvV00ToLILuhK8KcvtndHWtn8WdUV-aCtKOdg8wRdIndkrMUqLSQ7pve_G_t8pVB42_2eLqUvp-rEttY-WB0ZL6VmW1lRmRU-s3jcjdM8yhVUJKIbjFExczGOqP2ZHJrpygl3RhCgsG5UeucZ7-1UNZlDY_x2904-uSgjhZ4nNCEy0typI1fqfRkPV_ZJLWkvT6wPORj-ci-e_WOrhO1cBHolVPy_MMVWze", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114670344432805372851\">thông ly</a>"] },
            { photoReference: "AWCwydgV4Oo-kv8sB8BwllXW0VXs7y3hFSssOCYwW2AM6Gdp8CxHSW1EpNdxPbR76ZwyuQeRNYbX_74xcYjacITj0R64oDlxfqFOMvgZP0Sm2E85E7x6w4Km6AzqOFxAXTKCtBG3nxshjhdCyyZQdObc4ePjzM9PJZv9VXWYIwOjrGpj1aa50NrhXpNUa2pvFS8PY0rGczuAqIhykqiLQCcTlBnogJl_Tz0H53rjhG4UvVvQPuIkrc3CsLxxfOb2bB0xUjEFi1qusxrQ2T5fwoXtbItd-SRMvmcxveH8OmVkUDVGf1pyCwS-767G4LqDGEuMH-oYazo9HzzVnEP8U02-8Vn-60UIm0LjbXWlojvKCZQIxqSBdGQfeHqv_tPJmAH0hettmDf6DwgA8WjWxvhhrNBOX6YLkkmvhdcsOmn7AHw", width: 3372, height: 2526, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114014430533432266990\">Savoir Aimer (Admin)</a>"] },
            { photoReference: "AWCwydj-SswgBCiXlrzea9bfNGaP0USN7jdp-ltoG4WHthYitdO_P0dSJN0CpmlZwP5esoeAzfhT020AzNA8ukW8WbhQubbHdBijaV4Zte3ERq98H6lbqmtBnrnoFGvVZ8n2hWXY0ddXoh59fm4CpRRmxUbyXogHfknTR9TbLmP5c6ORwRJHt96xYVQUap8-ELJYMVye4F4RwHMyb6tr9h6tpS5e59y-dRq4CnhSReWqVizgA_ueEpr1LGvCU_RjebWusoOeK4WYwq-FvhcAObc74OP4X12G9rj6Zd4GuGYfAJQOicI-JhSJieiXO5hH69OGc2sqvgs3oqNPKYij-17Ji2vytcTGNoE-6JMTN5vnNWy41DZlOVqZDvcGuSL7omJiEZXLnh2WLSZ1v28GJ85mp3XG4uGwU0KoTetWgeFWrnlX5Q", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105141487681483771456\">Tan Huynh Van</a>"] },
            { photoReference: "AWCwydiRKOoPO9Rmt53ECtZVh9Ti_XS4hx65sGCcsA7XVCMWfNL_4kB7UGsrIv4XrX1ctyTr2Eq2dQy_wdfDsOg0gzLhx8SC44Hng0hb1JnafRLxo9j4zdeDfQaXuewERw4_ImLKxNIyuc2z36FzWH6kE4pkyNvOpFh1kJMBiSXHVN3oQry-ZhlBq-ZeV9D8nmUpejnwfxjWJhGwOrqdnzaEYnx0yHQgjpwKHvxbFXwAES2LtBGnqZMjjlr8VUB7mn2Vz34GIEzNZNLfEskos5whCCuuaBszE6zaGwyfdOZyElqPu5-vcyiAeEYv-1FUZwHgwxAxUuKJEoA65l_q_oOePqtzBYpK1c6f76iRD3RfCuXWF6vY3AWcGJk1tDOJOgPBVUmxt8_oH4H5OskvKD0j_8Eyqbx-UevDxftfmDB2f03XGg", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105744500782766384892\">Phạm Bình Liêm</a>"] }
        ],
        summary: "이온몰 롱비엔점 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 4.6", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=260332788385884473", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%98%A8%EB%AA%B0+%EB%A1%B1%EB%B9%84%EC%97%94+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하노이 주말 야시장": {
        photos: ["/images/hanoi/info/shopping/hanoi-weekend-night-market.jpg"],
        placeId: "ChIJ3x01HQCrNTERtBCN9T55LnI",
        placePhotos: [
            { photoReference: "AWCwydgDUfog2VBjy0kgy-QUPsNLJIk9JVWLQ7mih5vm4edvuFpvD_dq69WZfkG85Pu37LNZfoenNmvgt12hoSLUoaNwjiO0hYC3qO63vDKXYyVnmVzDe_yb3U-CqhAhjfZCg_QaJ2xVMumGyuVgob5feb59S1r_FdzoyWVsDQiozRvK7Tc1MiW2VaCXZSFJB65jEWSq3iHSQi8yjECkBnvUMPHByzppE3N23n0jzqb6rCc_9m-Puw0vtll5AOty74AcLv4J6MhstfXB2WZ2ZhAoLPKsKmVJKDHBcEe_gv-I1eNlTj_6JFh991_Fde95nqhLjtF9qY_33MoxMxzXOBYtVuXI25nAuwAgWQ32DfVHsnzIMiQETR6ToaVmrq9_mbcg9jtzuXQnfuMW1mhutsvQB1ngNgsqr5FTjggPdDjaiZVwncBe", width: 4624, height: 2084, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100594177125036109847\">lancelord888 sir</a>"] },
            { photoReference: "AWCwydjLQa2cvwhAM6-qfURsHEoISGD6_tnsZc63nZ81qR-F0_7ZvK5q_ILW0pruY1gkzPlFf_DoCCrbE9Thya-Dre0IVvHIw9GFnDBqVg-GQmKtbkXSoUpiIzBd1FQ2dAhqcxPUCQmF88c1OnQ5VmZuRux-hoYul15uf6eGNUeeOGnauv08P32DBmnTctKwM47TL1SKxCun7otNb6BNq3T4_utqQbTD2Tpm1iiqXlRb4i-WPYSw5XeblMAHoiTxXebJOewQvBZDt1LiM-vTXeyLnSJ6dSI-Bca4lKZCgfdsowj7kl-xxqqZ6g82Tv89VcDIPcs3dYZTznnOeDAlarqu6CouhA7V8hVcdaJ7v-pkLBFSh2TiqfRACQuyO5DX375jnN5pLumarSaqwfY8HyyuJ1JdiMpPh4ma10r5EEM8uXn1nhyq8XYXWdSJfXXFrKnC", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113786428670309387055\">Taco &amp; Nacho’s Möm</a>"] },
            { photoReference: "AWCwydjRRlCKj1vsePK28cAQKBIW6zxNG2ns8wAIYpjdpHANpv5ErillOTx0z1rmxFcq6GIdxuyFrGVVp7Y-5_8HzfTRbW6JtJk_-6u6BZSwttLE1QZlEVOxlyeot98YGivuc8wiTfnvR-ezKE8h7QdSXXbn1hNhY_pFtmGHfPx5l1ucy4EFX1ZnekT9NEt2s5dG9MvUfT05r-2WP_-9A6umDPghSQWVF3sVK-C8Sj0BBc9xqaI8eR9O4RQYphzZHk2D6OKvc9zUb58hay4jir4Rrj3D3dQKf58WekKRV90Lc819V9e7UQoVEaOPdh6CBI_RFEcovD1Aze05y-dNUTSD3xGcdMfasEeJjKbFvL8XogcUItlMw9gndpRiYpfjQztdxsdsD3w8gT1vSRMSnFwkGJ-eAVill2rfIkUbP9MRRZbiLw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113591747193855476741\">Anita Rosaleh</a>"] },
            { photoReference: "AWCwydhb3gEVDdLuSkWcovRbcwUqzXU7noefs_RczIzG7RiqlcPWb0V0QTl6NXa9UNY8F2TSIqo_zBjpz0Jr_WhrGWFaDAFF9ZkseM07ndF755NCbw-jofvJyEO5X71IEhSzVRQIC_EIi8SDe1MPdFoCNTtMhpggORpJgX0ZrKI8f94CY_kPXEp5D_l9yeTuRUO1LrsjxylGSUx08C7Op8F-gXAXH6HGxH5UqeJbHOW8078dK_aiysM1Jn_SNv_a8wcbIw9k26pscjHOqECYec9833m-eIKVIOaF8BQFmI9kJSqZ_JI7oWbhlboH-blQmeyoRZg-AnfBV3zl3n7ewDdWcunYwLhbaAFV60rzXL4rDmsgD7MMwqU50LgQQ8_35lf4HnZq89u9kCFABX4RjBnbwm_oUNsYwCIm7ZuXvRoWM9tN8CLHs6N_VYUHkqoI5w", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110175537073029682273\">Ivan Han</a>"] },
            { photoReference: "AWCwydjhVQ0z6vg2lMhqrcZdrfiZSQEJ3aHaGqVmaqIBK8V-rQj-zjmz613yw-ClpKRLMqxyyRpdE7kNrdeY1Ll8M9A-dRd4LxWAqt7AwnL3T9zwtpoXN579Xyg4K5ouqCziashXCrVKELRCu9m-D8H9KphWcaziZbtiLrA0rDpTN4vxJxAYT8p3pm_IshmvFjkZQBwue25cnhgE-JA40vIfOsDMLmlNAOtVuUMq1i1VvTKDSdkq2x6aG-kclNzWxD9za8-4fqtQTsZCPzncy82cUc0iLiZuxLweRzCCB46r8JIwUw5MGEri0_TGI4Gtd_Jpsi2muXqXDMrBWAFRpnoS9SWLhy8iAqFOL4mFK_4Stcp2XQ1aDJjPZqdd2Lyue6aJTOySgojCybCn9_Dg2epnr0CCSfCXhy-hcYUo-gCwNdghUMR29uLs0Uq66d-SQMZY", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114109587337495756356\">Mahen (Agent 007)</a>"] }
        ],
        summary: "Chợ Hàng Mã 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 4.5", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 6:00~11:30; 화요일: 오후 6:00~11:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5180229018120390641", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%85%B8%EC%9D%B4+%EC%A3%BC%EB%A7%90+%EC%95%BC%EC%8B%9C%EC%9E%A5+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "항다 시장": {
        photos: ["/images/hanoi/info/shopping/hang-da-market-hanoi.jpg"],
        placeId: "ChIJ28Sz_b2rNTERhG6JzGZN9y8",
        placePhotos: [
            { photoReference: "AWCwydgOFB3NJWFeTFnYqGR36ejEs0gRchAAwKNhS9CGjFNj_dFVV6DVv1Mv06gOrb7rMinSD0nzW23-p0ue953Fomo-zOhbp-rpm4mOyWsYGoNdw7vrdCAetEPe2a1CbIKgb-5HscDjTndj6B4UzC9VCMVrg6nSHMIJIB-9pOK4ooLiWKA4r19RdQKb6BLG16GliJZVjUbtVqU4jTf3cBmeQjrmL4GE18sd4epgKUU8dDhjyOevVBkpujrRfumXJHiEAXJTVqhKXO4vLpfxGgxhy38SpkJaPfsE0NgOXU6VYvmsqL6_ilPvFmFxRlHYL7-EQl5eB-JKCqdenJaKGR8oxeC7bNOv6TUBt8ZmAhKcH0B_FRY1_MNQjxrjgVLDKEHewoqetJR3UMnIU--f4eNtIGudqWs8QbHZMMOmYl8YQ_4", width: 4192, height: 3104, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115169740316732169686\">Singgih Octafianto</a>"] },
            { photoReference: "AWCwydj-Bd2fyQfou6ocDfCn0hEzUxBmJzqpWqy-y0j8xkcbRvazW_QfVMTLWpbz5autYtz5_q2FcYBEgwYfwKSSa_27Pzqprx6Cubqavwp4402yN7hWLXpvDN7yxF_4RIyN3CLsxBvQ3Rh9sOpKwIVODIjtLkuP4v5aD1AUYSDDShI-RVPkaKpqQlhPfEQnkk3gu4sG4DNMqqlXuY2NY97rfPwmPeaQ4GKHEW4gRh1CL_se1gcs9yYICk-zzLRs79MQNoGLapzDLUlZh1Yv3_oM2gLncaoJcvxnA45CIgkCwd7SKN858QQUbJYd7hP4zUJuoatNozzr7BRqF6zDHMj-ootcFm5iVjiRoP4TtBMfmOcCE3Kx-WCvQjmZIlbrd9-mp_2HJVFgHVBcvEgFtUu4_vFxJXP1lHrzMW7iyc6VlswDDCLSTaCkbhSwwSTjxvYm", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115674584437122678385\">taku N</a>"] },
            { photoReference: "AWCwydjGWeBF3sX6Gp21Ek-woTEFhk_0S3J75tMao4lVvHXVCyjRou5Y1VMZt-GRmMn4PoLaXvQyE5tIX_dCG-RDRRkupUpRVKi5b5L83I8MoRLy6MWCdEP1Il7Xo9CPi3lq77XrKq6yopZxtVDUypOicqNimv5CmrKMRl2tbtQtRUViu7KID7QotFDnI0Q-0qOSiMBSxaRypLscCZGAVLbqaNIm30mxPHzMmKSP_-WYWEtiIIod3jfsdaz0H-1KWf8vgVyfRENY2xnILjLOJ8BXvC3wmZ_pIi5N5iEqk3ML2D_ccHoh7stWSwluIol8dNu3IswxgeaWKVJ1Eq9H3c5aQOMvh7y5ix4y3IlLO3T6nWgQep1jeMLJjYr1KmogAT2-rUdQAjkn_LK8Voe2tgqS3f5oa19g9Dv8jcp3t1yXalfWfpg", width: 4592, height: 3448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104307623754592168748\">Mike G (ちゃんくん)</a>"] },
            { photoReference: "AWCwydj1j4tll6POwxyJkqBtmzy5zKoqhuASPKpaJAEfZsHq5tgODZl0DFzVEHtl69wq-NTzBYq7x3smbj4NCV2ZAPd2wPyDkFh9n973F2nLR4-nGMq3NK52ivPCYQ65VfksSDm06xd7ctuazM0LmcfRsl_64fgAMWv5B1r0mokKolWZ_zBImTlFDH4HthOGC_mNUhaRkPGZVMCxJTHV0rT7M3ym6fKjdjB-3cfFx9hwi1RgGQVdDrNjVZq28pykpGHeW8KH1_XACyCd5mUYhByFeF5Y0wEql3xO3auLgeY_E0ZbDbovZ_6FilZwKutV1b4L63lFy9RPd8Da9lBTw7EwrGFUaaOKG9gqOh4ThjctBUrl98eAfL3M6wQOjUee-6VtbPPuRFMgPF-02kvKDb_E8TRH5Ool7yh8gUgyN6iGkoe7XhFhpsJ4uz9R-lxQtA", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103280260555452248174\">TAHRI Djillali</a>"] },
            { photoReference: "AWCwydjSiqO3613s83clWw1F85V7yWuUiYrd24WHaY3PD4KxCa1oDisLCqZLgy4_LAvcfRbFXHWl_ZiNOxOL8nIBLfEjNPu_dY6LARzuV_jb5sByq8nMYcmhSOWISly24Cu92PJ5Gxf5BP17sq3mNdS4ksdxIbvZogJ5YVJschbZh7CEoTvNyAb6SW2nGoD2cQZc4FAUs_QniGaTDDqsBq1WpqPMvEP1_0pzGNJEQmQO6ojXO52jqwYopI1mtOTa-jjpMTn8HlBwfa-ofgHaAKSwNqpCksmx4QsN6lf3FNNu58CZmIyha_CpDeMnE7DAjtk4ZYfPyVD9H1hho41IjqGp0TPk1iQHnpRcYhY3Q3Fw08qrH5V9Bk90UQoF2E2Acf2G65heuGALlwRoJitWRnDnqRv547QIlKWZgoKs7Fduf5vAqc38fuCFJWLiOVXd3yuV", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117845749568476221161\">Don Thoi</a>"] }
        ],
        summary: "Hàng Da Market 기준으로 확인한 하노이 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·기념품", "평점 3.8", "하노이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 5:00 ~ 오후 8:00; 화요일: 오전 5:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3456316342943706756", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%AD%EB%8B%A4+%EC%8B%9C%EC%9E%A5+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하롱베이 야시장": {
        photos: ["/images/hanoi/info/shopping/halong-night-market.jpg"],
        placeId: "ChIJaeVtefRYSjER8mZ1BjqlgzM",
        placePhotos: [
            { photoReference: "AWCwydhSbPxbdHc63VN9h19P9Cgrqd0e8mHgc-CktLi2LenpqakEMRaXoRVSzPGoQV39VovDB61vQqU3RLBfpfuAJwvKxykaQJjpVbBsAtEdzXFN7t7UbF3kSpwUEII7j-kTB9xbX5xeSmbI_XlXHgORQL3EUK-_8aERWBuwLJXfRykdmHzoxUiN2XEHOI8UQqqAJgRdjdjLO8OLof2JhGx6dkRRDDHFoTyvg-xqeNaqfcAyzdTZiNZ8eqJ2X-PHaetiXZ25m7ytmR1y5Etp-JcpQ8DflpRMlJzdIhMHIsU7JboHJOMD7ANYxDnNweaEnbJpnOTyyFvF3DS7UnxbwTOh_9IWj3sK8o08UUmtuzXBi6tgaXktPTnLmzbFJRVU1qvtBNH3QbPwUE7jBlPnwOvcH4wi3tJNTnMgAwIXMfMSds0", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114897417018946312882\">Keii</a>"] },
            { photoReference: "AWCwydj6P4LvOhygdPRriugrCs9gY2uu9eknkVW1K9Hnt0CjZk8TA6_EfhQ1H8h4hBsnDdCTHJvQDZjHI5j5Lk5bF7hmEy1OiBepQz9dH_xGc4gllnrIzCTiA-2k0SwPOJi8tBVqbtspT-JmasJurJtYQ6IrXDMJ14fpX74-iz-Ioe8i0ZhqNN3V_1rPySiJ8qyjrIGm5TW86dxKI3n5-3nXj6oK6jNd55XJF72u5fP0MRitGlbknDNzqRSK50KlNRU5q6aUbteWGFmjoNcEPXimeNef0TEvMbzFXsM8LyS9KY4HEyW1r5DMEQKYtvRyMGt1p4-BCBvyaILD4fqz3clrRYHW_RyX2mwQbJ9pNu0MJO4kTNZc4jOGlNn3sKgDSromC70n7iSY-auo3iyn54a9uPkmm6Ioy45UE7LzF77F6ayqts6z", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106593370492733542424\">Chợ Đêm Hạ Long - Quảng Trường Sun Carnival</a>"] },
            { photoReference: "AWCwydhR-6zNMWPs-BiTZWtGml1FVb6pyy_oS6Z_6_utdUE8PGkGe1fDMGXyjv5jUGhtbOtAtZIFaxHC8iNMLdT15wSclEIpdIg9aHVcFPKCupW6ruMsnF693wDeglw815-Vbj8FrpV5NcMLkv_DUI6ezeKiueeunJI2JebCyfWbDMafOpbXVqJbuzfLDeI3zPsWjYRHyC7bYYgi1V79QAMRkPcn5Jxa5biL0MiIFrShWd5dRCgaj_fZbckFAeQO1TlzjPKvwKUoacyCHgcT9hpnWlh1UDOCFtb7i_wM8rKvsKJO143jhFTDx3IXwyoZw8p706Er9tWmWB4OonO4fkgyAhIL2xR0pc5xku9lDK4IItLd5Vp6LdIrWVtGgYymB1JMweTR2VSxmQo5s9YfvX3hfa2SI1pDnqEsC9rM9IULkHYK6CXP", width: 1222, height: 814, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106593370492733542424\">Chợ Đêm Hạ Long - Quảng Trường Sun Carnival</a>"] },
            { photoReference: "AWCwydih0UDHHiK8Khkpi5PjitnSYvKgtMzOHx2YmKcuss-FO6BPQXYyTYXY8h7qW3Y_alw8PyxsHwLaalM7kc6Jq_-C2Kw7Ivu2Rc1Q9_5eQ5L4VsZxV3A5lMDQR-v8-IjNH66WCqYfaGlyKrbj83COHJ5Y3o7ahh0g6BVmYFGTTHHEACUqjd_u510G6sxKP7KIGK913w1IymY2eS4wy1rcHY_hyOKckTrxhYSozUtEpjmKL77UmGGxBM9C4dUJSfqJms19d5Sj3GwRb935CPh4AiBneQgEndwbwXgc3wm17UDtbOxmwsaCVLJZYARBer9XhAXOx0blkFsP4zOJNRfr59S4Tc5e5JNtH2LBMzZqtp7XqfnnQ2BSNR8ZX-ii6FGidCkZmcIWkD18NnTzqy589uZTl9qDjw4rzhl8u3hWHKeAb01R", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110097743206011666878\">wijaya dalma</a>"] },
            { photoReference: "AWCwydjuGXYDozM3azdt2QAW1Febn6oLgSRGI_a3YTU_rt25y6GRHJGI6zeApE2diF82T4Zkn0fMd4nIRjTq5-w6pnaUuFqQqTSMsgttvtnk5IAzgqE7c_TcKnThT8jPuU0g7YU6pKrfW2pJhJl9sqM61buinPW2J553vcO5K5CNk86R44oX3yJKzZcrGQASE94aR1i2sWKfS2EJC-AI4yK3nYuWuMtquideKSvmu5-UUwcFcaxC1MB-090CYi9uB7BST212CZQz4473od9UNr7wP5GaehU8EIPq4Q7HaWuXJYeQ7Qz9zouyRAOr43K1ics9Z7dnfRqahk7GtLvCFVGLUku8YukfzvQHemjAutvg07Lg3juv5jSnpUePdczLc_3ZVUsIvhGQK6VK526K1LdBxYMCTt_nmlpw24gmzxFSJxxLFQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107487288747718676027\">traces of life</a>"] }
        ],
        summary: "현지 분위기를 만끽하며 쇼핑과 길거리 음식을 즐길 수 있는 야시장",
        updatedAt: "2026-07-23",
        highlights: ["다채로운 베트남 길거리 음식", "가성비 좋은 기념품 쇼핑"],
        tips: ["저녁 시간대에 방문하여 활기찬 분위기를 즐기세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=Halong%20Night%20Market&query_place_id=ChIJaeVtefRYSjER8mZ1BjqlgzM", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%A1%B1%EB%B2%A0%EC%9D%B4%20%EC%95%BC%EC%8B%9C%EC%9E%A5%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
