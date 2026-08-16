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
    "빈컴 메가몰 스마트 시티": {
        photos: [],
        placeId: "ChIJYwi0Xj-tNTERWwalADGv0Nw",
        placePhotos: [
            { photoReference: "AWCwydgAYmFsEf9kaDiiTKy_vlnGfny2Ol2T8svpv3AV_yFEIDAEyTpUhpgtn9aXF4cLxApfJEk5eN4MCYMiZjxUBjuKPI2ePtRB-LufnuclOBMF4R5la6ZUaqGpIW9eiF7-CCnfX7HjRnoeW4hB8dJY0jSIl8eRK9Z0SgAJBY09xuSEbauAeueA-smRqmopb7S9M9Qe6Dz_3e20ftkhqEiW_EMdFZ1tVsPx6bYylS7voSY-1rtwL9pzIImkbGY3yJhbJMlLL5inXJnQ9HG_lLzAzmv39KT-SRGnuo6W1NoFIEjZ2ey9YjnmE66CSeMYR3sF6lh595O675Q8VfVI6QF8cuvn-k0N31VzsQqnvdmWrE8d5-p9WENQ6fjnCaGnz1NAxoKYr6Pn9ROVEB_EE7Hxcou-wPm7WA0wJWvwjfum-rUxdg", width: 1344, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116020496898634077489\">Vincom Mega Mall Smart City</a>"] },
            { photoReference: "AWCwydilRwdDmmFP4nacNbkRwQCJwImhGjblRmwJRJNN3pnQTgvOayp_pBGp9x-umDLwnfhUkTFIpa2s_mSHmaMz7qea70-lAYjp1pktJj4qqgvRbQeg0Q-8Mkpt2q-CyrQONzI6sBXUhvy-fBtJ2KQk7A7EQMHJoseR2mDfVMOXwtvg2fqoPHl3YLx-0ADSgPOLAIPafDMVMob5AbQmTs0ELDzjGPO1bmpk8yc8xZWNiIoE9kcSHf6PUKZQuEjOI-cVc2NWqn32ULlAWB0VGy7eIKviTkR6Xic3GfyDetj2__Fc9ZBWkYjKKixcifkKi6IapSyu4STVIZ0oIo7NKd4OYVjfHV9qUBGW1-DFUiNxibpupcGwcr1Owjqdya8GpU7DRZxwS_nnL7tdb47BxATupzVlTNFLTTZ19HGvi6BcMe1UFFB5ZzXcwH6v2jmqsRwS", width: 1284, height: 1675, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116525031865571459999\">hà linh Nguyễn</a>"] },
            { photoReference: "AWCwydhCpsm-GLWDU_Dr-xzZCLuLAEOFZT-b5SDKcrsbgd7gs3fZSOEWGpvScib2wurM1wThtXwiUsgUPithEEA_-sxyyrx1682YyxS6-tQSD8wSS8nvZAW3-oN-80E7nw9eqzGaLktZgZBaHVC-oBBqY-rT0RqsfQUEYkJH_gjcdxUMB9VV5R7fGNa0v5k8xV1GbrKPZcAyk0Y7IPH7edJu1_9pArZNvKqHUFH43O8RVOJW-DehJt1YZIVNUToHW7TVpKd-CghCvx5fc00SP1RiIE5vEQvmvmpmJ56BKCabY20KXgZMppPM_LAToKiXIjdy8crQoM6fIIvESbPx3Vp8-ZWkS09EMy7KYYsIFT6pNWaVB-p_doFr3iyqYa5vVkHLh3dfw1lJc6-CMTBI90Bd872QgXysqS8Ow4ta8rJbzQSjnA", width: 4000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113056887161451540977\">Tính Đỗ Hữu (ĐỖ BI BI)</a>"] },
            { photoReference: "AWCwydjzNW_Yt9ILhf9A7XND5bDmGTh8kNiFD0PqdUOwEEWVRuGfTLGHFogw0ZjfGlZrHvb--kWyj-aWDrvkmnPJkgvjE8oNWdBlZ_2LB3ngASL8JERszTlALeBCD7MMdzG0GykjB_sbhy-MkN0DJqZhDwPOVH2lxa7XzI9amBT3wX2fnMcNdmkHDZbQkrzd2iMTxahSWEAAk-40LEb57gRsrZKuDJyYYkBAbhobXgfj6FRgbdJDvjrXRtz-tYWHhzoyN8M5MTwQPKJdHY-XOwGaI4Qbn4yk6rGPcBPYVK0MIqvI5LvOvW__Y1Ur-eBtQkpq87v3tcXJaJRkD9Jlq_qHB0SqBNYtCPffMCdFn5rfLzLDtvgl5iYgmN1cLDM35lMdK0N6kvkReGBwOpkrtlEGkZyTO2cH0Z7J1T00BrCMwxv6oCcY", width: 3264, height: 1836, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104864138677664230488\">Hoàng Bách Ngô</a>"] },
            { photoReference: "AWCwydgeipSJkGKnpzobAe789T-79k1XEPsZQKo72LBMHOVIJc3xtqyk24kCOJrzxqkDLyZBjkDXs-_bRXwM_ZPiJONegR8cHL_1_hJJTc6fyrYMd4D7mj6iyk1AwobKLeSeVy9gJfJ-nhTa-33PEOVoK-BhsctUn8nrRCMSC3oarVozUsgEpRk82fNGA1ewOkyzLfnasRAQa5avaNDRq5g3XgCMDEMtOLmOyn-5NS3jmiAr0_zJuDjenxHzf3HE0Arm9BsC_MPAMjSsnwDYG8Lu3lTaEmm60moDU3-ctmxzcpQzc8lU1hM3vb-yn4O5m8nuU8AgrlbCttxG-jdDB-r6JnveCfl6nON5edgeRtcS-UVFoIM2b-8wyj38WKKWXQpOA88LgowfOfMx-LdyFgabFIjC0NBFmZzctFCanrtv89k", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118183945290533013878\">Bien NQ</a>"] }
        ],
        summary: "다양한 매장이 입점해 있어 쇼핑하기 편리하고 깨끗한 대형 쇼핑몰입니다.",
        updatedAt: "2026-08-14",
        highlights: ["넓고 아름다운 공간", "다양한 매장 구성", "쾌적하고 깨끗한 환경"],
        tips: ["한 번쯤 방문해 볼 가치가 있는 관광 명소입니다", "쇼핑과 구경을 동시에 즐기기 좋습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://vincom.com.vn/vincom-mega-mall-smart-city", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15911410108499035739", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EC%BB%B4+%EB%A9%94%EA%B0%80%EB%AA%B0+%EC%8A%A4%EB%A7%88%ED%8A%B8+%EC%8B%9C%ED%8B%B0+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "빈콤 메가몰 타임즈 시티": {
        photos: [],
        placeId: "ChIJY_r8tgSsNTERL_S5Q0qXnlc",
        placePhotos: [
            { photoReference: "AWCwydhVp5AvFAukgcx5ggFQKYJ6dFBOra9fMwO4vGUiUKM7AXNu79xwlH7CkubTn6Zo0jOxDkmjsaWvsTAGjFW2lfn-E5-Lyj48NmUB1Oxp_IQ_Tf4MXPT9nQ7KKN2JG2dyLSJszz-VNVPFDeFpC4il2EX7IHj-DqZwFdiAQeHLwY5s5ceaGz_j7jcVM-xrS864BJABi3aBwK_5WCy_gtUagmmxtoSPbEPnRN6IugjDHJF5mObyctV2UptqqdfB-E-cCjgQQEwM4SofBNVFZLBh4ToGUBaGzB-GqG3IoxKHcVEZdcwGWswbT9u6IqbEYAEx81QDgvRTq3ScFTOC_kC8Ss3VckKdXyWszRpdwKF2_9raj6EEg5VGsEoQvqGRaJIU2dH5dO3OCw0ZbuGROWV7RCOiHCCiFRDPjL4N_bi31_hgZQ", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100244170323287597596\">Điểm Đến 360</a>"] },
            { photoReference: "AWCwydgyuY1bw4bkzMzKXN9bJMtVU3y-nqfXy-jOqYmkQJUVfQpnzwAbuoVStdE8GYquh2QjBNwpRdiQciiyd5dWYM0tQwpatZUAq0H4z17opyJdg1D9VsE77bN1kqvEFF7HZEQ4FP0t9fnGBDmmd8wD8ZCi4oc2C4ENZ8AIpGm__ltdcsqSIhbWo7cw__3yJYHdeqni9x_EKZJ7JKndtpkQZiFOJxOjAoYE3YG7O6jYAYWVBoRg2H-Amf-Urz_QGju45OVLuf8wRHwXE5el49S8kms2NhmYDdfZRIe8RiFeusIZdeMnidmsJ4oVxqJcFUMDsg1GdMc42Fb-EquYTI_EAWVfRjwNS5QkXasSD8FrIabuPtHslLOlMbMDhzz2IEFQZak7u4z6kL3S1m4waOcslGHSJoK0zD9xNaNMsoGYVDWNxZpB", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107953071902493346196\">Vincom Mega Mall Times City</a>"] },
            { photoReference: "AWCwydh3GKD2pqCWkDjDOHl0qcnUhKOODzKIePNVMsBu1VOEFl-vrEhaW5V5hVQjQ-03gmnwm76gNak2pHomhpDG2RNvOiR8BtRgDC8x78N5l1jvQ2LAO79fRjzUGgT_E4pekeo_zD1ci1M4cCGCx295-0Uy4Vk3BoKGpdF4aAJu-2MJ71EfaEkzVVf_H4mY1JjPq0eCITdIY0ty0runanCGhSFAvP55cSXal43DlYtoA5PVGP2DgRpwcLeWi1RZ7ezEEPk-9p2aIavmTMsCL4ZwoqM3HOqngtEeYgKqMQQj2nGbo-RGby5xWTDtZCXk0V_kbi62fHW9nQ3mN7-g7bEISHm5cpSZsMNSOba5yYsJEi_bGr6yK0BnSgywXot32gzToUQpkPbJovltv9MzSOQY-jmLKK-lb9DeOxGyKzIyfKXMzxTBsctdi8OeiDuEGgsx", width: 1080, height: 727, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105621341261198272332\">nguyen duy</a>"] },
            { photoReference: "AWCwydiaEY5LXy4HpmNJ0U6eTq91nQfBU5FspL3U9CjXA5COuFvZPkQ6ETZmYJQA1u7VsZJmG8VtYuIpPxCS-TrCE5AryCtjWQ-3nEfSn84e0XnmW4KWXGT_RAzKU2zNYQQY1LkMrbBuDu01R16tGXGOtXJFhNb5hdSvpxfct0NcuiEsE117teCjjF077q-kNB0uQhQdF21J7XKL1LJeQjKuENWeboWm1FQBnkoX_-5UnOURj-XFeDC4d3iYKNLMAaW8LaUUPhvN-H4IDQYkfP13iMotastmtw4QiXpcWtGwApkhQyD6GW37cqm1N1yVUnh4XJB_6CiLwJBE9V6Z7zAZssQtfA0ymsWhKkj-5S8I3aPceLVqTNK15rH4jM7klv1Tx-HmFv9ajpYgkQdrkY30IBhSPdqOwbh_k4sVUk4Pp2AxfeGi1LDFV-vuOgmd9ej2", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110479205730704390235\">Thành Ngọc</a>"] },
            { photoReference: "AWCwydhwCh6-qUtRmsXEDDxUJCNQm4rgDvM3g3PZoMJ_0kUUYrDvH3tZ-uxllzllcOlO-8EVJGiJ2YmNscgPx3wiEEMVRIySIMcVevQI4hynnqXTqFFJMOKmmWdwzSADf8JRpnWwDKOu63_cRkNgGNn_bT3RsxgWCPT_SHhE5YUPZaugiY8K4fEny2ndzYKr3PWbMGIchiXl5EXM5YzglrAwif-PRB6iK0B9X2BXhusdKHZSl6XuRbTCIMOF7qz4_cIeR6PYb7NgYCGzPOUKZCQZ3wE25JBMNLbAQjQOwJQwWeLu-NZTG9njwQSoQfsUg2PvEdhiBs3jFdWbRZ7DfdZf1M3pCuVWIOMYukkebejIklk-Sew1mkCKUhpljY7Gvffwrqxc9bjtG-gC3VTkahtf44WgG_gz3Fe5HA3_mC-JW6GLmw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104405572200721385338\">Hiếu Phạm</a>"] }
        ],
        summary: "하노이에서 꼭 가봐야 할 대규모 쇼핑몰입니다.",
        updatedAt: "2026-08-14",
        highlights: ["넓고 아름다운 공간", "방문 가치가 높은 명소"],
        tips: ["한 번쯤은 꼭 방문해 보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://vincom.com.vn/vincom-mega-mall-times-city", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6313650072839648303", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EC%BD%A4+%EB%A9%94%EA%B0%80%EB%AA%B0+%ED%83%80%EC%9E%84%EC%A6%88+%EC%8B%9C%ED%8B%B0+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "빈콤 메가몰 오션 파크": {
        photos: [],
        placeId: "ChIJp1-24WCtNTERVLrUJsNagso",
        placePhotos: [
            { photoReference: "AWCwydgPYkBFmopvUWCapE9aXda8WUWQEPIR7RgkeUr2dVUxU74Brsw0-oPNP2dIEdmLZ4SSF78pDtw6BjypV4DHcjEDV1EFrkH2SG5GbKpRRukjCgcKy2t4YRXUb959jVqVYAM8gnpE1UeA0Rg1VRdQScGGwLzY-ULoZYHoWGVmz53To0EZxBRHUIfrBCbxwtU93YJ_6KTeyY3C9G_AuJyKnvl3U5drmqvAzt75aHalvCVKsX2FKCxaxGFWlVWmTKEOYropFUO7U_TkAUgh_Eeg7ShoaER9ZCAO49KlBLzvdZXavO_00dnLgKV0FKWbrFUnAzWH125D5sGWEMa0lUqb7SnUrzSqS27wLUIAnAVy-wejE1jt8xvvIW3xaQQ_qZKgqfMiBJej0ysv1J1BSaR5dmrpqEDIgvNAzdNe5Neo_WQ", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111053673702164609062\">Vincom Mega Mall Ocean Park</a>"] },
            { photoReference: "AWCwydjVWToXBlNJXJOYSYLsQrhuCsfYEckbP6PPGxWWr1MLcl_STsLFcM7X6SrVCWV04BqV4ufC5VlR4xgdlAeSOnPqD0ehWnFnxs0GWYUfG3HymKANzlUEC1XTkKycW8FQGdwcPyECOgiYmerzSeUKB_5cKk28juVx24IVwiGnDAOX9WuDidFV_upsy3NctdnqAsLyCZYrX8CBTfnszAq_7tKTcsaGeb98WNPXSQ4GpCEzuWvMXE022Sy9tSeTzaMSP1Mw5HQLfr9LwVPvBZUtdj-XOosnPx09qw8VowsJBSqQsErPFWeVTosu0zjt4E-t6qQe-x53yHCSeeCHuFZDGQrCPsWr0rOhfVoD6GgOD_515XiLchjw2iW6WxTGXhuh-1n60v_4saCnifoXlPdOth2SaB9RPQ7f8dWbIvj8R4b-WV_w7pdPxkRSgoC09fQ8", width: 560, height: 357, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109128087404821322871\">lanhuong nguyen</a>"] },
            { photoReference: "AWCwydhToSogcCbqb-BbDyp-ZhpLmJrm5FPE9LiC__yFUdAb6tJRwjOYbM6EYUYWMy2_qQEixhDtQhotGAxHboLg08MaejgsWHDB4BDwa09Uj0JPOwqVxdtkVqjS_tUT35r93mQ5I_qT0ZugMRTF1fh2KtSpKAM2MTHsdMdQH1mhtl6Fiyrv6l77_4Mz4rgWQCZZy7QM9RhPFFWGuODcVK2ht9XtMRSi87HBwU-Iv_MbmnfafuOEBqRuptyczEYTq1Y4bHBDQJqOpi2fSYakomuv9AutCEAmmDxb7Ztq4WUklg_NNJlai2WCXkoql7WnoMWWwLdAYT3kzasyXh_sP9OcV0zhmHjcFVzfMUfKuQizE-BX4MsNgBNBMXTQdiiQt0Nr4K-zOcN-OXKF4zZVq0o2qjLlMpChm-7yi2-W1NI1ows", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103274030919671687638\">Anh Nguyen</a>"] },
            { photoReference: "AWCwydjJcstimQTklhLelHX6POOlHUiZLx6630NSvNX3eGkYSv53SKR-CV2H6bPkV9NbGJObhDTGmVjT5iEg-xF6mbgSDbZgdQG4kVC5d_M-VoRmLNuxKj0dfthxlHcCuCsbwIHVqTCqVTJpP4VFIZ1vTcLfhB9PJSAL2rZw8nKJzcnPcvXuRt1IIxHeNaObzRtj15W7EkgjHuHNNwOZX6tQUv2YpaIDlQ06KWJfjm7kET95OS8ItrUAHDfor-ppGNJw-LcDXs3TBmd_fvEbGStkSmZMPTZtCMZE9YUBw54NpGkfAbSuooiWgECU6zH1TochGDfq2Q2B3F3jUNUtjwouMsIc4dstVL07CfPv-NFkx73msXt2CEiuelkpxhLEcsZUSj_jOfrBgv8BuApmhzqVB4wSwh7yst1ZHNeGPllXXLIFchWN", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112773436028347162984\">Richer Teng</a>"] },
            { photoReference: "AWCwydjucVzN6cmqdYTnUSaodKthiFAtyGbyK1nXfBV1pMcDM5I2zOzPOncGpA8qNSpO__4KnCRyXZTQoaI2bdBLF0U6vYrq9uNkl6X41tyOnK64LFrhwr07jO1L-CceJ8wVILeP2RS98hF4OxY4Lb9Qv-QgyYb6OmA6exKrGbVeZrgZGCCDGIYXbZHCNSpI_wqmDKU-gfiJyTbDhOyUiPLF1i_CNCKoyyhFGltijBygvz7sY0gQQoAjrt8MED7rvSFI9ONsnWeGRztaMlMP5rwi6h_F4HaUO_2P_MTRoY6FHFH6Uwu7XPLttdLWGmbjEV1HwES7bQqxeNJng_ioa58GRiPv-qQbrn8nineh6VdCmSXuKpcYZnNS03_enpb2VLrABCqhtJJUYaWQ83HANVbv_LAIwRGTUJq_nzxBs6UoO9BxgdA", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111903400270741267126\">Nguyễn Đình Cương</a>"] }
        ],
        summary: "쾌적하고 깨끗한 환경을 갖춘 하노이의 인기 쇼핑 명소입니다.",
        updatedAt: "2026-08-14",
        highlights: ["넓고 아름다운 공간", "다양한 서비스 제공", "쾌적하고 깨끗한 환경"],
        tips: ["직원들이 친절하고 세심하여 편리하게 이용 가능합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://vincom.com.vn/vincom-mega-mall-ocean-park", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14592325536850426452", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EC%BD%A4+%EB%A9%94%EA%B0%80%EB%AA%B0+%EC%98%A4%EC%85%98+%ED%8C%8C%ED%81%AC+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "빈콤 메가몰 로얄 시티": {
        photos: [],
        placeId: "ChIJxTEzDEmtNTER9sPifbPhzDg",
        placePhotos: [
            { photoReference: "AWCwydjuLj5oFVl5zbd3SAhfM-oVpkewFFzZEt1efM4NNwxPkeYppTHwm4Ninda7lCJ97R-bZ0dFtgKIhnNixIoztF8othEIpSwPi90491jJzq4tVNvvCFBIgbRRvGjlXLuH-SbmLCAHm1O_buLKTmHJIIZqev9ghkQU12isl7fh8LolM-lMK44ZbEPgSMcYbCUUBYcoRCQAaTekDU0iNT_bIXy-ubGd6Lcjsa8n_3jkh0WzcUMw5TNnphBzpbkxtqnvzYA16_f4mn-YqTT-tz7i_7565xZ9AYK2nz6G69EUvGT-u20_-aE54ZnMoqp0Q94EKEpyi938Zs-YVdkRglN0w7nG93szKEqlsxxRszNuRlFAMNAHT593E-bEGSN3R78VIAWJNFCd4oRf0loMkuQ4ubDRF0d1uUyYzIID2fAFm47oLDidKTj8FXaTjP8t739f", width: 2562, height: 2050, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103046874475079494474\">Kien Doan</a>"] },
            { photoReference: "AWCwydhy_3oFkc8MzI_im63L0h8cSOBQpwixLIn_MEVL2IU3pPZhWLOb5a7cb369y8G90Tuyp0jjjgtfRg_X4Uaohk63xf3JWjvb71LxZNSTv9X23l76Vj-UEpbBIsM2W4-xaKmb79XZXPo7GFIs9rMRwadGxQT8EoQ42daNl4UnFHTGGz7GIzJo7bY35NST29gD1gslXflNp5wkEAP8E6rCSMW3I-9On17WrATPMiwSwzxzoNr3VgDV7xpqgtQ0gJql6hyKu-RRYDtdHyWpW7euzeRBHcTlrWNz_fBsEsqP7ftcAknUbFmHYSKfb14SZ4Vq2fm0uqSMNs3J_0UuyQDdZTOs4wdbobfzujk-ZSnLu91bEOPp1pDBsQJc3-MZyl-JR5AT5Nl_16p1H_JhzRv4F6IJtF_Y3crruKNI0UT8vuXEnmM0hllNSkDNoVs0hQ7f", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112483112283115853703\">‫جاسم الملا (‪jassimmulla‬‏)‬‎</a>"] },
            { photoReference: "AWCwydgJ8z5RYKBc44__AA-5p3y-sN88Ekn803qOS3Td6cB7r3i2uK12RDsykPU6NxIhLmXkvrPMU2QuaRnn4dZf0Ou5RL_b_P4oOzfoZC3ajbvCAmpleeaUMo8xbgp6qt5OkdlzM8tn2csnSfu0SOUoJqE1z3y_0uqiznzWUk7OH8nsO3vuM7hdpUwhUC8k7aYOUrlm7DwNbqYw8seJlCPi6ZSPlp-7f4YWF1F08ovjZCM85oe2HRKZ321k6BmuF8aXWhgaoDISeuYbDNEKtzEhgeTezBFxEXYV4JKlsRei3uGn90HUb2CuDrFF7A2rBfmopvFqthgY47j8L74Wvrra3C4YnNZf1HTVKVnVvkaBRa_jMdzePFRdGF-xp-CBMST4eMK3VhdnzqeOpuirABgb5ECRAx5kGFfKYxilZwutuhAI4vqSl9fogaMHgDJMrg", width: 1000, height: 750, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108653355600731584568\">Thuan Tran</a>"] },
            { photoReference: "AWCwydg2q4vrsctCFx84jh55Wy_9_nTf1idTnTQI0shbyYxU91YMs4p7KjqLbgEfzlV6vnlUR4XamxzdybsFtPWwfllUygAQeQA9XmQOClutTiXGxvkELKyrmV1B-LaDYYVm0qXsX69IqRtHFCIjNXwvg3xsoY4r8M_GRDdKayESY6x1-3jMJYaqBuYolOuV3t0zqMmtNU-_gnKu5vxISOGacbvAF7dEwupNWS3itgr3ux7y-GpgjmI8v0E7yPOSQKHFTCevJqjjhBjLiPfQauvhz2FW6Jyw6EYGsPG4RqEmGpJlIeZMsQOM58DuYHd_Ln9TG7gv84hvMZUjmvw8sv4BV0irvtEenv2ix8KM2NNbANZ2DM-RBKLnMBWD9NGRXltHQoO0_03vh7EPFHvUcu5INrY9APkg5oJcvYuBGfVR2J-XZA", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115118805126672072611\">Đế Tuyệt Long</a>"] },
            { photoReference: "AWCwydjX4qc1ER2d6bXTb7K7BfwBeR5MvJVDJMPtBCyWAwd4OXZPHsxLZIs7jet3fi7xLI1w-_r9NFIQKPBM4zD68vn4qR9Ou6hg94p2nYk7V6esnTt1QkbpvEezyCmO54BvclgKpf3BLUIjA-ABY_9dKqO7zozO3_4-umucCVwqRtaW4OSlgkx2IFeGFu2jfaom6l0BbaXcnXL-ecDkk7QnlY99uFvr9EDSm547F6cA8u9XLFSX0UWjmPvpQfabkjjGSu1UlZ6vkL4XRaDiIQv5ap27D5gzkOotPatdJbZiYjXXfu98mh1ZeRUyj_7sJ3LtlFsVer-eRCJYyvtAfYQJUhsOictMPWDIVr3FS_47_o3anfrYpfZfl2IIZJnOj62opFU6zVmPhkUp70N3i-sUyrrMxoPY8Sz5hd6BC8Zb0ins5hspoSqUZSJi0lvNjJ-k", width: 1200, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118059907865768154225\">62. Trần Duy Thống</a>"] }
        ],
        summary: "쾌적하고 넓은 규모를 갖춘 방문 가치가 높은 쇼핑몰입니다.",
        updatedAt: "2026-08-14",
        highlights: ["넓고 아름다운 공간", "쾌적한 쇼핑 환경"],
        tips: ["한 번쯤은 꼭 방문해볼 만한 관광 명소입니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://s.shopee.vn/1Vv2BJq9e1", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4092894322400347126", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EC%BD%A4+%EB%A9%94%EA%B0%80%EB%AA%B0+%EB%A1%9C%EC%96%84+%EC%8B%9C%ED%8B%B0+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "빈콤 센터 메트로폴리스": {
        photos: [],
        placeId: "ChIJcfr-SqurNTERprSgnJ4BVT4",
        placePhotos: [
            { photoReference: "AWCwydgF9Msd6LdSGQJO-GLXW3dJ2t16ErdwpzAgdLmXQf6ZXhGoMMB1DeyCMAev7uxnNUudRbuFrjVbgH5Tt-CtSKHwcmVUURMgA-Sfd8uYYDyRq3cFvySlQ5lJmhWnnA-Icya--MeeIho7n7ZIOiiYx9HIx__9d8ihafXuRbV1pvZasDgXiXNtUyr-0tTfR4DIw2EneN1UlbNkCJAaUNQtuAVzlbU7QXgrqf9Ep5KW6N0n8kqMR524R_MJTdCvvmP3UPmfaqOzRfv1NGW9V6T6ZjWsFTedeH5JATIoXJcLHwqZG9SSMXXT4jLL6mlNYmxW2WBuw4h2SEYrxgf7HHQ5iqtgXj88lWhDN8YNV-o-gagQYbEwb0EBx2rTVKhF915vPfGMJA3QUD_bn8zC_Wgcgqj1xy0XZmwh8j7ADq2gQyLS3Bk", width: 2557, height: 1705, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111005189586006692113\">Vincom Center Metropolis</a>"] },
            { photoReference: "AWCwydiYCTkh9ibO4ICXWs4O3DVHwfmfnP_a7SV3KthCWJjMYRwbkRz0busB9A47-mZmRduIlW1sjmQS7_CVFHqYqVbksVhs9dUbQa4zEFjLf6UqvOJc5DDa2rzQoWds2OJrlJ_8S8W2de9HZKoK6hhknaUNDqUbUcwoPbw7E0eXrODM4MHjzkknKTbJrC-mLvuATMl8UIulLLrzjofL1RZgdJMcmQkb-OgEmPPHukA0jkmdEKXyjTxsxW9US9wzdhPSIYqLmrUQXPHjB5ys9QFHTz8ayOQjD0IyUy6ZhV-a0lGA8L8HQXQUqQz67UM8ZPfkWk2BpTcRPIrGOQMXMQ-SD5VGfIkKXUVg2LHHVQtfGcGz9tXkvy-1prs7_KxapBhfLIG1-XRwGRdAvhKtwGCpR2vW-AvRcfXyeLk2oPVjQOZ2NC6onofpcYOxSetrIHm_", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103316665518104899010\">Zons Amado</a>"] },
            { photoReference: "AWCwydiGE5qmy8r9kuGdWqZR9VofRf1bGCAMwdPhsqIKVeIbmAHVVc4yK5V5VMlbYQZXXqz6EbZSyY1COoco5tyFoc4LFD3AQvTnpeTppWIOY2iwkVUMXy7DRTi0BJ7tqilKguGOTy6IzqWeOFnk8H6kIze_l8QQbCBeCF_4lOQDLdB0tjGmOiDc5FJ53HOyv7F_PW94l3uGGf_wI_w4M-jE5y1SrM7Dgn7zJourdc5DLZrZD0SwoX8SO82HVWJuBsjiI2td0TVAnF-spRWsO3CueAw7V0STwPYLtzALslQRcSmEzk-CU-cTfYVg0-Nd51jvw27SjboqUArV2g1CVDJXveQwtMOYF8-Rqxmz5hD8Q-a4M4RIUDYpRTnOxDdnpWobKwb8d8ljOI9TwaQcHVBHhqzblrc0ZJDkUUC-rj0yYXs", width: 4576, height: 3432, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111600490926301057744\">周利槃特釈迦仏</a>"] },
            { photoReference: "AWCwydjKLYmXVIwvqXcQSfm3l-3BljrCXERP3A4W_LMtiptnFevYo43jNCJWuCEgwk8iZobmPc41A0i3vZEZP-NzTF3ShIjMoyTbjcGtbHC9brQkFD0_hEs3aHwxrO_-Q6MteMMkmXiA75C6fmxOeZygYwe5lqvhuOjB6s464TECANDRVEPeMcBcbQCo-xIqLko2apq8VRTOLj3VCcx8KflLKwhbzs0IKMx0gMnIUZcotZlCSv__pn74RuxujHtz1Ny9uwrjENldIPKCYszdEbCyfXsSsksedJqIquGyQu2xVNq3K7CZ8D_aaNVhgtFlVL1p9p0xWldApIH154ZV-MkXaM0vI0hKUfy3PzLb12T1oDxSr0X9K_ejYIFG57ZZhwtUdBw-HSVG-4tQCx4kDWvZBmWz5tYplfLvnLkNQdcx9POeUJ-w", width: 826, height: 498, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111005189586006692113\">Vincom Center Metropolis</a>"] },
            { photoReference: "AWCwydg8eLV_bKemRdczm98h7r9IKtioXpZ0QvQC_N0Xg4pxsNghSuFsAfWqQhHWN1I58otrJiJZ0R1IxpFUwezPXWZDfqvD7FUXrlwMli-DUZz9mfBJGNed2O22d_Hr0VeG653fgCf1j29ezca6XEkymsux02-DzzwIHlaaRHnuPcDqUoKDEzWJuF6iLkQ4fl6ntJkwziTUmPrubfRbsvkOt3IfjuD7eqAD9ZXGVoOpIh1L75RfR0_uk258SsAVJuOY_vCUf4kJ9eINXkubvQivcAc9XcSCo_myPku5T1Ft_x60NozWDfvecY3AU0FzYucrPtBIoxZB-4lfioselR6i2g6vcFck1TAynnfR3-7IvIexjtzbqCwKtxQtfORtbxvfNDUO_BQXxMMDWnNuM-BF7CWQiT0PHHqDxpt2K2qA7Xgh1B8BO71eYoz64NAo-Q", width: 1080, height: 742, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102025237131075680428\">Thi Nhu Y Nguyen</a>"] }
        ],
        summary: "방문할 가치가 충분한 아름답고 넓은 하노이의 명소입니다.",
        updatedAt: "2026-08-14",
        highlights: ["넓고 깨끗한 시설", "친절하고 세심한 직원", "다양한 쇼핑 및 영화 관람 가능"],
        tips: ["영화 관람과 쇼핑을 동시에 즐겨보세요", "주말에는 운영 시간이 평일보다 빠릅니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://vincom.com.vn/vincom-center-metropolis", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4491497984116176038", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EC%BD%A4+%EC%84%BC%ED%84%B0+%EB%A9%94%ED%8A%B8%EB%A1%9C%ED%8F%B4%EB%A6%AC%EC%8A%A4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "BRG 마트 리 남 데": {
        photos: [],
        placeId: "ChIJK3RDzeKrNTERj0Lw3zvPpaU",
        placePhotos: [
            { photoReference: "AWCwydi7OvbYpdXXzqHfcLbOaPg0o1a6oI919ghYUg28Vs70rNh_p3ZzDNf4bmEEqMkZw0gRd0k53fJTh6Jit8i6WPpPk31qvjJx6oWJ1P-kr7TkvZe0AiFulQGoEsWJau3rQiA4uKlOyLEfBQ6NLMe_uEZmnv32NCblzbm7LcTKF3hZBXAU1hiWb0AP3icst3C8wZ5fem9T7md4ZFxqqy0Pcl5SaSgLCxyBASxYlc3TA6x7ihfyvcoMopiqq8FZzI7ZEqhq0gX5qpScoeW9Ej5ig8lRApnva68p8o7OjZayvxkOmbP3KCIDKzGJFmvSYF71snvS_ZjUKu7puqa3Cq3nVB95wV1aDzGEs8TDN7uydTG2LgIx2FNCM5mCB2kjIukLPqB7skSjQDmW6azdrVH7Hp2qSVE0QmI6oys5T_U1YDmyQHXkwmdQtR9U827riw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115216729275113270039\">akio yoshida</a>"] },
            { photoReference: "AWCwydjhhbau6GpkKd6-NznXUJWlTn9gGFsB2SalOBa4zNcMOthLzTrsJd2I2hGNJ1VZop9ygJqlxzSotYXgL7DrqWgqTZEnC5qsFTL8l-xAfnyp3519D9xwZbvJsOEsdw26xfm5hO6tNLrydYK8d68-jjG8tWWAmf18zYJIMSRONF9SdAGH2g1weP7nwbhkopbra-2xLqKWvF47JEHZoItC43p_IsLRJVnL9EsNvjxEzVW0g0_OxYa4weqcLQPAgPA_wZHDC7Fp0-ZXTyjB-lWwdUsLq9MN1ME58EE4boXyEBQzh393ILu5POTtdOzCNgSDB-4fGjPyxThnBLCJXGeSFW6eeAujBb60yjILwbmj1-nWw7mg7-MBjuGVtHDtaUC0swHyMBZJJDnD9759EUY25mQEuNawuyFVbc3RnYByZ8E", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103217497483603238481\">Amber</a>"] },
            { photoReference: "AWCwydgGBj9nXpFmCIHN9TD97-udN_S_m7Zz5ugg_-bIS11J_y7T2mu_mE5JaUULeqqBKqkmqhT6kdryBXrlQpI6_VWtGshZQ4pzu6h-W0W_RHmu8xFElwrkgi3ky0lR-XPvNnm6CIJDA3DQoCE3BbTgl84o74hKPp1E97ihj4oSdHwBvf0ufz5GRLQG-YAgX_yPYVA-tqElnBt9H8fiyx2dGCYqAVHkq18bn6vwF--RiQ-DVw-ajj7AfQ6gbRV_H8dFqMBZSzupp0OftFwpglEQKwwGvzByyEMmaqd8ez56xzNNJ4a-b6g2h1XWUcC5FYdAht8go0OyUv_puATGi1tZKz39xLm67V3J4-s9y_R2qRxyLVrA_z-cfucJZndcw-d26GLO039MhxYelmyFxRBeyBTrU5iyyNjZKbJ4sHdfGSDokat44k4vOadLb3XWfuez", width: 1926, height: 2568, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111070138716101045717\">ngọc bích trần</a>"] },
            { photoReference: "AWCwydgpp6yRL54WefPxZ2oA50ia-GdC1cDTO3U8zHvm4VXcex6kKwygIbDrZb6suNitn03fvJMqgryMM8j2TxBkw1GpPcQEySbxWg79M3fFtCJIO7198uruMpLHuCOgJreppp-1TNYwXj2ry3znqZvAVt92aDmZF917vjtCgmj7OobSlNFThyDqMAF-Xvs8JXbwoNNDF0MD1bhvRetX7WKfjpB1rF2qWv5RkQNVPKlmS_9AWNFHHRsKegh8azrDX6BVpgnSNo0DemvcQlF_c_iIJpMSj4g43vcxhQ_cmycVM1TmYN3GAIRBUmiMfiTW_b0O2mnQodgILZbCNx7iaK7wqh6uaOEBS9s-a1v_e_Drpn9yHJZ9BiSZ6cKeDll17IspV4-u61MJt6c_7AP-ybNWtAzZ6R5kOlOHGH5zrWxGh77EFl4MXh4Skb-xMzULMvqO", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110195438883337321923\">Mai Híu</a>"] },
            { photoReference: "AWCwydhEZo7mhCvhG76aeMwSXcP-7Ky1liekJakA7BYGawh0eUxxNIBvHbbkH9ecko21jRR2OWBCu2cxp7I7gyY5RG6iWptjTVlfgMGObxiiSxtx5gVJ5M5ohks6ipOW6bawxcDRYctwksXFl--LmbJDhnAir9V_x_bhGntOfKSOR_xNcF39Q0kHk05Up1p89K1LpztxmF4eCZER-yRw_2O0L-MjP7tAPRs1WK32FCxtB5R-hjp85vULtdbTejnT10TCbV42ITWCTKAnYy4odQyUMFyj-1QHu9eOr6LwvHJ9mnnM80-axK8QDiJPsqTQvhp2FSP8cdYpynbsspL06SJWnSOhzmNVucamsCaFcYbf0-Mj6w4xBnCFRP7h2oJdYdNecL7DBUOBMBR5ZbG5EYcfumI6jH45w9t1_yWZUvtm2aIo0Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104848338282941942258\">Bùi Cao Cường</a>"] }
        ],
        summary: "현지 및 수입 식료품을 편리하게 쇼핑할 수 있는 미니 슈퍼입니다.",
        updatedAt: "2026-08-14",
        highlights: ["다양한 일용품 및 식료품 구비", "효율적인 결제 시스템", "현지 및 수입 제품 판매"],
        tips: ["일본 주재원에게 편리한 후지마트와는 또 다른 매력을 가진 곳입니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://brgshopping.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11936174243482452623", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=BRG+%EB%A7%88%ED%8A%B8+%EB%A6%AC+%EB%82%A8+%EB%8D%B0+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "후지마트 레 두안": {
        photos: [],
        placeId: "ChIJR6EoloyrNTERwKP815-FPBk",
        placePhotos: [
            { photoReference: "AWCwydhTKUBc5ZvbhxpprN-aH4IInnTylxWlW2QLXnrJvYagcPlRVU9eeG4-EBHYgSEy0ZBCvcZWKEABtEX7yoTKSwSBY14-kWDDScMysj_WRP5-AtriviAftKVkkolXYdN-7zqLvWejNNzlUT1IJZJePHCarG5wBBCGXzXZzAUKEau-i77jJgmtF9XLhta7T2M26fcyB1vT3ygaZAzPOXDBB1hyNTfuXjLzgzHVoCejF0K3kdSG7g_d6bT7lOFj9zC7vj0GvcUtxjkkBYjg7HzAVjAYWWRXTpcpvMFQUPZbmzjAr9svqf2g9u6UL4Y_51BzrjKdHPR65sZtpL7UZzemyjMkHIqDnyD1dpcN2te1DFG0jPWbfI-1tjIE2_LZ080zs6t3lFQBOQMy0XhrPPgsvH4tqc6XKo0hR1l3M5nXKzDR4Q", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102381319348044575705\">C Q</a>"] },
            { photoReference: "AWCwydg7GyfAgY0Yoz4y4BZkRPiN_S0vqMswexC90B-Q5cR1JDyOZA_nrBHzAs3T-J88fDUPQ0ld9-lgT6RdodN0yulsqTH9WCbOssEaLmKx6l6SccBM6TUUXmz5vHDz2HyCVhhLUQIYjMAsIzdf4kqYbxtYNlBAJ_d2snvdZwGmGzjbAOgYgkcSFleUn3k45vitqcChhWKDruQjwbZQK6SvRcAiD2hQzqu9OUadJ_tXP2Fqkm1shRliWvrfWDN1HQLCu8qqJ7H-GaeYyG3Wx2cGjnyLtkvlykG3X6LPgGXhqv-kukRfwu4aK3zhkthMWSG85w9JYX5Ut0evSa2kg_MbCr-iXCXlpqQPp0XnIQMEbyzcUiHOwaDPwb35imltagGniBTHk3cGXRS_HABmbqajbKtns7sAr3iF3dYNIYBS3Jl3Fbc9z9f7aD-JUdU7TGCJ", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102750533885837093762\">Abo Fahad</a>"] },
            { photoReference: "AWCwydh68UDhILttjqOtqeFM-mtBTcfDJP1g_taHcxkpW9hEg99wuTV3genGqsBRVPUQdN2gKaOAzYeRv4P_qagDtkP-eKSh0Ir_Su7OKNRmkGQ4ux0Q8s7oSPsOKqLAvK5E3bh-l9uNMZg78eg4tFMlK8kPexwMymFm9fViQRocp6hqFVU8_BnPmM3WO653hN_txFJ8xFNIlMVbWtMSqXX9CRUc9WdvxN85OOGKtfCeW0-4gpOo3J5IWmEgF35rBaFuXnE6unOJG2NaArWYyYQ_PFvTlV1JPU1hAZG-VQCGKhzVSnwNFJKHFC4ApJa4s8Psl9LViBzQCb-tyYJOYL7dXFdlIe5oTPziUf3UZiTHO7I75pHtnu2MZvsC0s09HXciTXpyOsGmxnxuyVOTBACDoZYHP39w4ORku0MMHdKwk1dk6qMN", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116467277599759385354\">tran phuong</a>"] },
            { photoReference: "AWCwydiAZ7NDslbtksa1WWFHxGTuhfE10TUYdgYSjLdZFFwjcmEUd6ISFsWHcAayMcdGLkU2HJ3auhwL_Ew3IOTvn2uIVMFaFH46Slsq516SHR2-QE9hjqV1r9tUQOaGmzt0OSe9Vu8MgahQBOnYaQX5dMwR9_IqmXs3UpP8EJLdkWNLgTM_dIzEl0XtEoytfHUHo5-KQac-PI836u9rY8d8xgElRdLGVGcwIgaUMcCcdp7ZjvMY1JXZkSWOiRN9Xxj6NHoXyNzzZa08SU2vFSHfE4Qs3D50LjEO0XLGoDJzqZnasQA-ZNfnCZ1-M1uK603fbSNX2aJ2Y7k9jjgu67iGtmE1nOhgUWhR3aZObJxCFx3bt0AHep9q9rJxd3a20ljeFI_iPX_CkyZIl_OiO6b0Evc4g58vjS8o1DukOpwrEKBvtpvBC5OAhIZxjKQu20Nv", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104619509646966246153\">VYNH NGUYỄN</a>"] },
            { photoReference: "AWCwydhfKBDCA35MFHzsRreLjaVSNSnW1WEmO1LPTEd1Slc50w1s4z7oh_OT03jc25nzRJAokGZhN-IL5Tf3S_QLimumC0hW8UGquzWfjqBYAfCQ05mQ-PUjlesZMVAY2lojc1iTXUVYucSrn8v14krB3JP3pHGoJ56OFSUO0FBBA53YGPQOS7J4RPVJJV3b8jFX3QD9-ooluDNYhXh5OMSnL3kGfOlH7ywVvEIowaB4nwt448nzmzvZUMiFG8nbXOy2P4TEHuuVivYxpiFtxTJux81iUVCfuLb3AtqzlX3ZXkB1N46FwIHlKngGo0Pr5YsyhYe-m0fLQMqjNSqiITq-_prbUdWi17FwiBjhaTDK4dvNwS6_5z-GkdY2onWJLNpBZDMr-ln6sMMNPFgaCaZgggMMJLYj_hFkbhQxwOU02moCCtQBX3lQzTmct7j8lg", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102750533885837093762\">Abo Fahad</a>"] }
        ],
        summary: "합리적인 가격과 친절한 서비스로 사랑받는 기념품 쇼핑 명소입니다.",
        updatedAt: "2026-08-14",
        highlights: ["친절한 직원 서비스", "합리적인 가격", "쾌적한 쇼핑 환경"],
        tips: ["기념품 구입 시 방문을 추천합니다", "한산한 시간대에 방문하면 더욱 편안하게 둘러볼 수 있습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:30 ~ 오후 10:00; 화요일: 오전 7:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://fujimart.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1818475271120790464", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9B%84%EC%A7%80%EB%A7%88%ED%8A%B8+%EB%A0%88+%EB%91%90%EC%95%88+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "MM 슈퍼마켓": {
        photos: [],
        placeId: "ChIJ027mJiqtNTERHEVJWgqrRAo",
        placePhotos: [
            { photoReference: "AWCwydhakxu5bLykcgXF_GPrfJe9cPLJhOaXRsqx63ompgUvs77UazosMIUQyBs4d6tXrbuiPMlUn78lgkS-cT8f0Q1j6-FtlYIRFVOr1M806UwiMV1JED1o7rtnTMTSoDSzxQSFhov7J9p8rRRn03jnHGdaNLjas3ueUkAI95APKxyMy38m2926IptyN7_-7hME67hpb_e04ES_JivxvYVhrmWY63XbZAEWc9BNAHQoBVmXO8eZN6SfDvhcDW_eWOC_-6zEc4ePs2oERs3TFeMKhIKhUrxfc-TMbErRlIPgYlNOcoxymfCJCUD1vqvkuSomhNlBabtFC-cI0Ftaw8OchIq_xjwuFhIAIYBOfwSUtxDy4MOlt_OFDw7uTc_E3Ehg78NQmsegBxxKLlN12nDi0RzyDfMxSeGS6YeGcUtOUuvmEXL_19nLAwjrj2IXOg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100720376686557496316\">Phim Việt Nam</a>"] },
            { photoReference: "AWCwydj-EyVrY60QKZK4zV_NrjDgJWZqeFvK6jxuY8SizmTeEBPYTW0Ay53E_LavRvRqvHsByzUuR3Z1PKR7GfbEyEwfkAOd57kl88-w3zVVBW_ObgcM62MbxkEEBshZgG49xkWN26x2snzZH5t-e2whJLbe_zJKG4Y7wdQtyQVcBnBefb735vVzawOlYCkW01PBXct0h8Ph5AnALmzRV8u5oAH-jywdEQLn3bxXe9Lq9a5-AH1FU9lAndUoDHUBF1UFP65dB-qmm3ryjfaVrEasunKjwwM4ML51dmpGW5oTVu3beH-tQP30Yrf6ZbeX_1kfeVoY8w3WpBFesCJaA-Zo0oMnl27zZMGM5QzzXPKs9Ui6LA6UQ_AiX_tkhaTuokjw98K7cchURZu5l4epPpQvSbW5-oTcfiR1sOdbIQwQP-c", width: 470, height: 250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109272272023900576770\">MM Supermarket</a>"] },
            { photoReference: "AWCwydgmRmRIiLBzw28EAXR1HAcSQMChwY9-5Ars7VuK6z8gnHh2pX396tuFW9ikVlJC3REptQx2yhG8tE0VBFgvZbs01GGP3dEYnsYQXP0EELnZUVWATud4iUeZ7_emYmqDOyHuM9uLJpj92YTFnh2XHnO4qZGZhPsT845Gl9dfO916RC0X9gIGfQTS3kParDAfwXt8YrjvZQSrIb-7cgL-_HMvDMHd0dOoPGE5S69BJXoXonl858ZSWHdR6qLp43-NYsJS7GbpKV_TNTCZiVv1utg6Cr68ar7oDnyT7SPU4kuNXB4NqpUATliiXZfcMWamZ5-VsZ8-YHbanEfsCSNF6Of_IgRutUEFRf8ysCPnBgrzAHAm9lRXd3p8rk9RuJ_RD9nzx1JPaYWJvOY0kL-rJYUYRBzrOvkwQtqBADqMwsLlscfBM9RD_FS-Qcje4A", width: 1124, height: 1423, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110091720143429600942\">Hoàng Nến</a>"] },
            { photoReference: "AWCwydiGxUDAEr5CEGMyOUAsXh--j9fZEZ1amBez25nQHXZepsDNtSqzkVFnrTTJGELSFcXpWpNvXBQVHneNyQBXtkpub4XiM1ugAt6J8gwObUjiksbQLIsdVPgX2jmnMRc3aeemxRrW7NbQnXzGxbc5sHiltXuRCGi_x9XYyUeRxff9JMlBm9kyruAo5ER_fVkB787qYV6mGo6pKESyCkdjMAotGuQM47Dwt45gKlZ2aKLGTqOo5P29YxynRBk0oP2K3Ww8D8nT-MxKWIivcDx6gZknj5D-RHQJrmCXjUo3pozbHjYYWxtpZQUJJ0YK2ZOuqnFQ8yVgdLaJHLBawuyGZAeUU6u11mq9iIOvHpzOok6ejOOyVrQINRPPx-IDqGPQPS75pIydmx8WM-JynIw_BqhGzmaqf2hA8GheSZSzmwEc2ALxkyoYXnZu9BsISQ", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102766265042782948894\">Hải Phan Đức</a>"] },
            { photoReference: "AWCwydjdlSogmgy1bKOygRrAeg4PAqIVNXRX9--CAlzrAudKpULty6oSBVRvhukicxazyG7SCWNds1JE8vOzYfLiUXbAQIbY8CMkXady-F8FEXiZmi5Ois3slyGcktTCZo8EDRXG0iklSVsGOdqwXgXijddDnmf6sJIDPoWq-qEHSOrs3ll4LMXDb5Rx25vY4tFcgVF_jhbsZV2jmoZNFs6hLWefgVLYhU2YbKWt3UIzgm7znJm_nYEH-PXg6gq6VjV0OYDU8t0JEGcmhzxbYisTLhFwGJ-E0hlWyFpKKH49DtluhE1J5EgWOSaT7adVWS-VBWJ3c13V0W3chQ89Y7s2C6QrRtKEI4yRxPthfJF0CThNEVOWMuuA09sSn5d0pujvYkg50pbjO2_jONBP-1VZIGnfoJxvpTXLfTEHtAfKSDbQb3Z-T_8tbM_nqreGkT9P", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110573864550806540995\">Black Cloud</a>"] }
        ],
        summary: "신뢰할 수 있는 서비스와 방대한 상품군을 갖춘 대형 마트입니다.",
        updatedAt: "2026-08-14",
        highlights: ["높은 평점", "많은 리뷰 수"],
        tips: ["매일 오전 7:30부터 오후 10:00까지 운영됩니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:30 ~ 오후 10:00; 화요일: 오전 7:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mmvietnam.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=739904299748377884", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=MM+%EC%8A%88%ED%8D%BC%EB%A7%88%EC%BC%93+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "BRG 마트 항 쫑": {
        photos: [],
        placeId: "ChIJxWkrjj6rNTER5yOkF9RM4NU",
        placePhotos: [
            { photoReference: "AWCwydhOYbQWiHlw_D-WTaDcTpvZJqD_CozEU1lSZnEw9NCDQtmfz3BBC_N21nbY2xCAsTo0A293xwpP4j74rDXDVnN5DO9BPoPo88cpyvhauSAlPffpx11U1H3d5HCtTjKQrGZMhQfZef0PXuteQqy9ZApRf3-tc46pYGb1DS8zMA-IqTVffEp85QkeyVJj6A9q0u8UI8LBwR19WcUObTCAeEGpVvaqNFpsWEBdnSFFKUnq1ing4sbLbZ044bXxLk9y1Z3_9PCzWMu1anmHX4faRs6O-eVZEESrKrbbgSlyRBbFF6Mnvz3YqTH37RAbZ2PgrsZj1TP6Y9khxnZc9jhKyNwDU6rXrU6EVefc3zN0Jk6ULXJCdqJ75-F3wWm_y-67uohlk43aWxRbpIX3tH95kJTX3TnclAfVXCF5CxSflr4", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108937137074528325394\">Spotといっしょ</a>"] },
            { photoReference: "AWCwydgKzAcyuD8l5OVQjI2AmZ2gBDTM3BkIGfjusBiLQ5cF2pYfcg5NUI3SzMQmOL6M8wbRVfcPFAKUkxwknzvzwx6bnFtYvIoJOwhIG_qvMtm99IfMTValQ0n_f36SyKrrlBIIdcUZe5QVocxXgvw3ZhWwAs6x7uIZwf7l7Z6_qHhLiCTgwQkRw4nc2y0XobcUoYziu-2eCflf260mvAc3kgWxbynr6p6tTbb8kg4PVUbJy2GYuI7-NM7O8ae0iqKm3yf34LaS7SwdaBj4Dbvz02lzG9p_twzeHIw6NJ8AFb4WJ1XY9F-1B1M1iurOiVXjJ1IFqn8EU27_BMnirgajvKOrvfxDhmv6vQl4aWgXM4EVa867OmIM1MBiki-Ho7H_NS4TpG_hPI6KK6TNszwNJ25NbwH6twlvBkEzxdCfoLKwJTEFSELvUAhAIc5IOQ", width: 2304, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111262594673962005142\">hiro</a>"] },
            { photoReference: "AWCwydjIBQk507-fKlE8pfz0uHcQclHxfKUCs0RhOFzxMdER_xZF-woJ05rpW2VZHI0jKnTOeykIGO_MjOo2UQQ626UXypcxHNKLxp5CMeUYmNfCwWeTS9bLGm6KB0y7AQKImXdYtE1SOo169w32-y92_91rhMflZFDNHYOSYtaOCjsN1BZEqwWs3SixVfUspS9IppML9DatSTIfT1u5ndgqGbvU7KBm6WNg46FftFL39XW9AKKUvGhyL3KcBQ4AE0-_GtcMGfYq7K2DLE4PbHQyF_IgqgMaTtDzlhEof2D61VmIQ68H5XBF44ojFbtGV-RdgDwW127lfSlKoe90QK7PGteO2n90chVo9-wQvWHYeaA1gVqmNXujLCiden2vhzJS757Fz3V4B1CgIoMJ4CIWQqGnXqPVj_zeomQBPJMCOzsJEEMZ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111762795479718762161\">Gojappe</a>"] },
            { photoReference: "AWCwydi4PMSoIZ4CeIMsWWSHW75eDmS0loHh0AzgDaqUxiYwLqpGztEEPZ5z1JKY_iSApFJU5tiK85kutV7JEIMwYUgelonRrk5cXx5V0uwbPuQf1WyKpNwESnFO4r1qLo-M2kDbZA1Jyn9Du5g8nm2d5HiDqYebAJprmhsspC1qxh9hU9B4RyuYQP1s6jyfq0lR-3BDbUDHBaUXeS2SdS4FB-IOS7Nbzu0UtEyxD4j4ZdHxU8J2N4XJ84x5Q7YZb1anHl52SoULfr33Daek-uc33coGLokCf6v9_CmMjTwft5JK1LNsYJmQtI-ELe0fWj9vKrLkAoEj0vyiZYeF_Bzkfr37qdWASCsZzr_tcRG0AQh0hPQ-qs1TqUBrZiSCytYZIkeOjRLZ-lYnSGO4eATjgt6GdugeM_FDTZFuafPxr_Nu8g", width: 1800, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113060645206232200431\">Irma Hill</a>"] },
            { photoReference: "AWCwydilMMyO1R5cqSRjtMLlFLrp8F8-veB1poNsVObXEqXHNqJWWrV1EvrY2vCUjcTZuXSPkavXxlPlUdFpgKLVoCrWPFkx-YTGnSHdOKd2YT-EKuhOh8WfqvZHpepj2PXdCA84AUBXTnslfsUBYBKoKnZuuuHf_Ppaeh4QctAuwwNDFiDK6SoYOlf5PtRV2-WTETHiehFuLYlFvKGZON9Q0uxpN5UorDHUjLY2KuH-Zy9Yig7nVgLzFH0adF8SnV1TxylQdoqwMcr8eTTsbiIvp6wl6PD723zBfxvWsAVq8VkMMpyncHiX7fzmBr3GkS9o6s778bTicz4ZdIqenVPi7Wx8VfBWJJAjWmPtvryZmeoLOGtw4KzJEBRROmcgujpe5nVKQMLyhd5Rf29VK3AZG6nTJRT175Y4tEJSw6F9t5z2VQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113150587750850656620\">Joe Sze</a>"] }
        ],
        summary: "다양한 식료품과 레토르트 제품을 갖춘 구시가지 인근의 편리한 마트입니다.",
        updatedAt: "2026-08-14",
        highlights: ["2층 규모의 다양한 상품 구성", "레토르트 제품 구비", "합리적인 가격의 헤어 제품 및 식료품"],
        tips: ["숙소 인근 방문 시 식료품 및 기념품 구입에 용이합니다.", "레토르트 제품이 필요할 때 2층을 확인하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 10:00; 화요일: 오전 7:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://brgshopping.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15411402398675248103", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=BRG+%EB%A7%88%ED%8A%B8+%ED%95%AD+%EC%AB%91+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "탑스 마켓 더 가든": {
        photos: [],
        placeId: "ChIJCQczaapUNDERrBdRGlc478w",
        placePhotos: [
            { photoReference: "AWCwydjRc5NYQZin71hIWVctJ8d44NljnoLexm8T5mm8tDBUKrNEq9nHAsbmZjEprmVjvbUKa3wzAI69rU_s80YTyCmAGsN9Iqf8lMjYK48B5tJdouD7eC0H1KTTdalFbQBRjyl1cIO2pM-kgQgh825SffMVYzaSmQmJB5GANg7_WGW7Hl82oMctn3VLG0s8pn0zLK5G0Hvxwwi8QoDfL97fZqLlfUOjMafags2D-Wn55fS7YBEUxFORmqVQf9oahtOgqJwc9_tzmR-zKNfr_Qxq03dWGex2NvBlsAREhXusCCBReXWXJBdjRMFehhozRGmmhObYtEINUcCdTnyJFSnONr3Tdyx8GOARU_4eKurnEXK37FQ_LeaobqGonkoHzM8lH8uSts-qPAdS0hIm9sr8DY7ptU9VbwdAWM6Oju84xGkKaZVw", width: 1280, height: 875, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110064653934648410104\">Tops Market The Garden</a>"] },
            { photoReference: "AWCwydhsHfJi7fres9WCQleBkmi4g7hM4X8cQDxA-mnVIPyUgIOe8w9Oq5mdq6WGNvQVYBUcW4Ij3bdIMpdBXLctQJf5KaToqA6si89I5h_quiOkqolQFm0JOFUMv_tCxuGAW2NvOMpaPVJJhcnhjpo2brR-nEnzYQc79QzEJIVaeM_-r6u1EUARuxwxMnPwssEqCQIAqT90oTr2qknFJV4CLLOvwQRSId4oqjK_3o9H-chPQL3775Y_-WKnHvablOFMzldNvUjLzzNHM58GWpCSjqMtx9PUNn4TXvBvJrLOJMNw7pbw6Uzi-Pg1GPbnDUfNiJgxFVImAS_7pGWDWtSEoMXJxVeLRMgaC4oPaxfhQD4hcbiS7IE5I7BuuWUe894TIKtWi1ULzzMo6ro1J0_a8-Y9sMkbhuarjImIzLg0-bP9lVlhp7fJkRxVTYRJIw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108144993267557908177\">희돌이네</a>"] },
            { photoReference: "AWCwydijC3ceqBPmLI5XCCffEvX7vTcF8YkeWMRPJgtMA5UK_FkgFw29qhGKcA-KFeWWWNvei4fOUhCdBhVUY567TTpp2siuXq--ymJTir4ZA1_kbHA73rtYt2nqGYXget3_nhOXTD1O5zVpO995vbkyQeI6UaJ3FCXGC7YNi_72qvulvx7ygzbiiYQH01LxRESS4GXqpE3uyrKpcfwKtJy8S6TnNJ6h2ApJ8bnWjwDPfEY9hxj6sxQK0_b6jlrKcZbHMTemYlTjLAeIQ-yBBgtdrnZZnyqVqBG-N0xHQb4m8cCrbu9CgTtsBJW-c0ONk4EFbK-6K1emmoOUBixkvZq0MhVCk79tZ-ZClraDwjuZ5HKNQlsyeO_jB-PgjtKXOq2QBWbWbpTBoc2PScI_8McaSh4n8K-A6Zi4Q2HLADCrj1M", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106225012407672796802\">Ha Noi traveling culture</a>"] },
            { photoReference: "AWCwydiNMfltzhX5lL7kF9qYnd1vREUAGNwBbTXOgYUvyJaA1-g7UWTRi7UzEn2cOhIR3IIyQ8uR1zru32eNGqA777jeqIZNMgnHteBvuF9kyJPkuaXHX6s3IGvg3Zio2DA1n6oZMPbDUHYIJM9VQ95avxJ2zebKO-Zt9EZ86zJxO7jORxJ_D4Q141dZxc-k6IXbCyg5BThIs1iqRJ5tXcv0w2uDSpSAlcP5zfXNewR3vB26Xb2OoROFBoP7KID0h0Rw0cNu-q7fnTP4JSVNyBcUkQQ-a9KcSkPR9tfHuvtYtYMDwXm_XQ98xPNC2Vr0Jq4IL6fMLV9-BC-PVINsiQXPoT8DGzetHLWSSIGFyeVipk3hXqcZcMp64AC3aFLqSdNdEPH9xNjfBOiiA87X0M_kLUGkfE0d85e3hOalYACXq0r4ag", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114269011274748972848\">Uyen Nha</a>"] },
            { photoReference: "AWCwydjqiryo-bRKIVI644MKf8uE88yZSr6gKxto-0RYDtM3oP4Z2D3zwTImlwQQJHSGT3HdGjdYDsa4xP79pnWQnzl0N5O1gahqTLQ3jUQ_0lb7UKwt5lxiLy01yfkpnffULDGUSTdMwBcCFmLw2KXG5qLzluHo633j0GzCx__UlGUqKZTgu6Mc3wyfKWOjUGxnMn6vQ-uK_rRvzmb1g7lZjN6kK3Kp3GT5x9Ma_bpobnnhQKfmZ2uLMUsLatWu4TS80bTDXm90utc0-12K5yWXwByLhumEEIOWYRh75ZiGRKd6jebRC5bw-3kHyY9m5Go_5caBRTgrklrDbZ80Ysd1G4UZGqCkbQVi0eZyr6D9YqmyOwOG0yqluOgvA9e8QglBZn0_v27mct3-hyX3GTBK5_CezxBkdqnM6eIMqF7vLiKNUXBypSaYPIjvAc31_w", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100227809879172109987\">Ellie</a>"] }
        ],
        summary: "다양한 품목을 보유한 하노이의 대형 슈퍼마켓입니다.",
        updatedAt: "2026-08-14",
        highlights: ["다양한 상품군", "편리한 쇼핑 환경"],
        tips: ["직원 서비스는 다소 아쉬울 수 있습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://topsmarket.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14767083649925978028", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%91%EC%8A%A4+%EB%A7%88%EC%BC%93+%EB%8D%94+%EA%B0%80%EB%93%A0+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "노스페이스 팩토리 아울렛": {
        photos: [],
        placeId: "ChIJFYWWQXSrNTERJmLeqV1W-Yg",
        placePhotos: [
            { photoReference: "AWCwydjSE6lkTmuULOeM8LKjmTgVUjFC160oEOU6A2Tr8ZhKaqiybRugddldxX2Z71DZoB_1flxm4VpQM04N3Og2efhHLqhD6O31xZhFk_CRNvimTYg1zhxbutLpwUvt7OxPLIVFb8B1Ak9vDlQzweaSK2beFIu9WajDKUDJT_39mTfvF5i9eUupxu6kNICivz1M9C3wuPJ6selNR_omIX1AMd2QFrceGcIqPatc-c46Cub0wtUaIwtlGdOyBUvSUjTGNAnxqfjkBGpHu9P_pm6IQi0kK-Mn4rebrhxZPgR2Bw3Ojq4pY76x6K0PmY4C39ApAGFRRShYcQ_U05nZY7bpAiFcEqXaopMqPfs4RX98LakUJvDBP9ztKY8gPauqmvbMrDOloeCo8mP7ucXYqWsUx5P6a8cmmuAk4J_tcHStMKJ3PCE", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110051131004383270688\">Zixuan Chen</a>"] },
            { photoReference: "AWCwydghhQaK9JYISjTQpKH2MQJKMJ0RyJehJ9eihdCTZoOJENcq_62iEZn9zUUT86_jITHvB45h6vQfwcR5zKaw6zlifY6oO2DaPNGhRSDrj_ai0mmnBLdpdMXxjLIqXdlKvy0fzt7cg9b4EUDboroU8jm8x1AKhLBleJqxbJhG2GdG-tokrkg8KZAM2gltJPJSF2e9URFPN4kInArjXwcngwgPHR7gZz9YFaZxrKVc_xhZh-rV6Giqm517xYldx_y8GpOCpryFZZvUV8UMf7mYMJG7z60ENdqMGMkbFwo9gRE9657OEPB8o5QiP7pMHuIacBv1bDxXUTN71HaEjD1BHAZ3gXuDK3kDA2WGuDsy9cOMdvvaNoLEk9-tMxpzSQ6SZQcBAy8wEsCI9OZ7CwehjyjRZFUIioGJLkCtgyN3GYPWnA", width: 1284, height: 1713, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106855650333786245739\">Quân Tuyết chuyên đồ dã ngoại</a>"] },
            { photoReference: "AWCwydg_78pro64Rmy_HmrIHbVdUZ2tBePmr9meJ80hTv81vysT_fyzJjZmHf3VJcKg2bH0dp43p0q52w7ap0wVnjwkEgCitxV7d6JzooHnoa-yzzpzLbnepNpq9dxAbi64TRTadRN2mEIq2rqKv4S7wHez9nJypbsIgdv7O5i32vKI4z0aOskUTK2E4SQQQjVMf3DpPvjiiax8j_rxNxgTu1GJWyL0UJPHkbibSvPL2S4x9qo39KyJBcjRC3uD1pV9csHDpAOUhQd7kYNZpWuhyNZgPykOVys42A-8S8yPgCHoJTZISY5asxv4-xPwelbyP2xeLldDpoaK5e_L4QOYu3CHYbq6zs63YES-TpXexxYwk4JOpJLbZEQXwoKRgCZ7keyRiAsxxH-BApYayHH7fxPtkyeyWLQJo6ZyLQTBBCbeltUU", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106855650333786245739\">Quân Tuyết chuyên đồ dã ngoại</a>"] },
            { photoReference: "AWCwydh412ioCjfy0vyZ-jj5w1RHqareiTgvUdmIXzJHy0VwBy5IIaKckaCEt7x3Mwqac2eUsvVzuYi95DoCD2FrhHt8L5yNydW1AcCPrCVfSuXktQgEV06zfWd8Q1_nDD_0ZdqWl9ZLcomYM9OTTDKuM5qhZ2KC_5eQ0HxgukXLV4FLnkrZ6F2QnbmXnfjmItrBFtaTcs5l2siP5gamoX78yphdZjoy6bk9FmOIjBqkr_43HBWRcq2JymUcN6x1PzYTEucmFyTMG0x337dJuL1Wnv9bn-48mXuoMd05MnSlwrKrC4iw8FZwckJld7yqxCYWbkdHbDIkbhipkpca5jFb3rh8NCZQ7sIwLBTY9w111DbPzdOARHDH0jH--vSo_-elX-neTF8xMyx-ATTuo3vsCZUWSJNJe0d72pMdAy4r0cokDTUi4dBNUh9qkpSb-m7p", width: 800, height: 980, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106855650333786245739\">Quân Tuyết chuyên đồ dã ngoại</a>"] },
            { photoReference: "AWCwydiVly7dSebDq5KeZmCX6P9eBfs9k3wxI8tlNEkwRGgpkwDXHR8-UbLvlf-P-CSOOMzfh3rq6w1ZCpHf3tnD_5gGBmRWa_W-mJhy2uPP-U4GhVFAsVqu9zp2EQSg2BGSbFPWIAAUZRtUz1ogsCpEzgZeWYwV9m8vd5jvOFK4L7yQxhhqjIw5RC3wR0RhLSfjCTaExSlmW-U0uQe2BV9xyTG0-VsvC048TILfTGlJXe3WZXiw8t1HOXF3fo38w27M9UjSn47xxbUCQ_6uoTMOUJHoYdHytgn8EeKpmJZ7a1KYKCLkIj_1FvTDvekAhOItBM-aqWINbBQvZ8Si3U_XZ5zzPjthWnwjjfKH6PlCzAKGtuI09k85lIABydy60u1sqULMRe6QoEwY586C5SsivX_xibIzq6zZGYUw1bmW82fFmSIX", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106855650333786245739\">Quân Tuyết chuyên đồ dã ngoại</a>"] }
        ],
        summary: "합리적인 가격으로 쇼핑을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["높은 고객 만족도", "합리적인 가격"],
        tips: ["방문 전 영업시간을 확인하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9870015018641023526", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%B8%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4+%ED%8C%A9%ED%86%A0%EB%A6%AC+%EC%95%84%EC%9A%B8%EB%A0%9B+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "아울렛 팩토리 스토어 86 항다오": {
        photos: [],
        placeId: "ChIJefHxbgCrNTERfjMMF0dqr8A",
        placePhotos: [
            { photoReference: "AWCwydipE2xHGIinjjTU8h4IyQO3rMs67T4QyD1971C-IhJw454d28lhLWGmaGKMJ5OEC9JV-hYDV6Tu0PhtXQtZGiMqk89czqHC0sNNCM5_AZCgN_0HAuufPap39NU2N6lSDJtL8f6ZovsWlPwAPkeUb8nYT5bB6OJCaReOjKY18NlZXWQnSaFbTpnSX9ci3_Y5TWI28Rytw4gWzsB12bHwF54DAuaDAyHkn_TkTc61nyJ2AuHvVtWNlFwwRxyGrdUQMLJaslogP3S20IKSLV9l5K9vaKN0u1i1Tz3-PCes-LfBNYYF8HuEqzZHz4QNZGsu-Mg-n4Jk6mMN9b1NdfJx9qOxrsCVn48VAME0XyGU-hBQ-dr-Wu8RcgnW-aZJkCHKqNpQ5PUr1fTuod9UuNq3VwRyvwNZ-HK-_hUwc5k5h4KzsBAL", width: 3264, height: 1836, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100132170171536100407\">Outlet Factory Store - 86 Hàng Đào</a>"] },
            { photoReference: "AWCwydh5-EEBnI-HtKGQL5LsZLyD36PzbOrCAN9EnkivTElXYwOYA_g2A_dE4fvkqfmwK7HUGiqiAwrwlKlqcA00CIsUhVvoJqCsvtGUrpdwA3XRnoBbLzqRIjf8q9AJUiPV2d3nKODkXbgVyatcO2n0X0gRshBln95h8w4EQREw2Sf9zk7xNt6FoFCtfhuWh9sF2EKZw5b5cVqXepbXi7xSCaNS2AMxwM4XCLWrCgRQPjjeq4ufG_h3ifwFKLUYemDDfZsnpi7TatixSvJy9Uez1_LhnS8Lz3_TZyQ2EGUFq7v4AGWTSBDnZ3EvBv1IgFCrDcU6R0_rsm7XZPI0GkioouBtOg8Jti55Wzpf_LhsaJR2TCrRlJa6T78sYUq6dIdGPJvqsx7fIN07e0xDTg8AnB5zfSrk8OSj0Q0afkBpJxPRGOpjr9dZsRBGLprZlA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116386065173992685434\">Charlotte Becdelievre</a>"] },
            { photoReference: "AWCwydjiWxpAnURdtJBuaBUExX--EdQ10nZ70fh-km1dfcx7GlfzKTjTdqNYzVaXVIFbBE1KbIyG5lrWvbn0-eTOoVcp96nIpwDMBG6Je-rAdonTjYvEKnIFpEIKYef6wSqnM7daquzcB5l4vqY1ne6HULvFyQN-bgjbC4qNjHG1jCJSfn_w3gIurJdW2iWFM6-RJsUt7aJkJ1-yc_Hmv-_-d3-uKY12GRBZVxFcmRC5Q6YhOlUjBx1xUBfzcgUEoa7dgykDScj2K7jAXCqNX3y5qeFnmle0oVwFfvUc39_lyDwCyT5S0o56AQ-f1xXb8XwbqKr9_uKJSRQxqRH1dT_h5pLhZ9sD7wEFvRWLUDlZP-gieD2k5zvN419DSYv-YuXcMpe0kCyvGvCdC79nuxX26FI0TGMkOoziqEefizZzV_Umchswk0Lmat31Jh-kMlhk", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111608758338235590829\">Wani Mstf</a>"] },
            { photoReference: "AWCwydiX0Lh8B4UXZ1m_7wIrNt2ZBJ9aLhmEmGWqggV9zKgRXG_6pMp-CUF8Dss0AkFD3Gvo0SI-lH1BAwZQcYcQPd5jNg6Z-sb5YzJJ6Abj1eltV2ROWePBLpA2oqgJ0AmrZhzzdR7inO8jdYflCMaqIOxRb6b4oiNLwLCU17yJdLqcJ-EEbxa__Lk-i3Lk8DvvF2idRM-u5zDlPpc4oMg94A7kaMXkNmUY8lHDM2N_oAQo7Kx1vwrkQsGmopUdfV9VLQXg1nnb5__WqU-MzDz1c0oN0n9K8NdzVjVMIvU-319Ckmga84u27LfRFAKKLtZdyRWMJiIcnMABI9VaTWp2rig3DP4Qwz4nSGE-JzEaXLiMZZW0Xv_UK8flznQYE7D_vodtY5koFD2PORxMby_DaNzQ-6PsiQSHepwMRY7Arl11CQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117352205726946848375\">amélie bellazi</a>"] },
            { photoReference: "AWCwydjuxQ27Q1k9XKR6wM-LhjbXrW-INiszuA6WLl5rsV3-ny5y_ecY-Eh9Vayjw5kbodzfu73doPSS9MdKVDVolw5bbP_t0QLwxirJoHnQxV-d-mobqoORitaZ-SfFr_OPssm35DUBYkQu3dh5PTxLGyJs1qSRn4ZPNzJ-XEPQrXcKJJOvsltjB2_nexTulNdoWMM1vN0eDWkBsIhGGayOK29thEgVG1BTab7vb2JiIRfpKJ17a33GOqBJ-WoMygezCF36Lpvif9epj3BeyX4boCFPB3Z_PEp3uIotcX4viIO-YDwtgzpLjanP3YS4-6Baw2_cwAeYU3r_T2HTjn-oAId0WOeHzgdx60VtDW0skTrmq39k0zemH4IEHktaebzAtwxogNC6eVrc0oN82f2xEyxtPs0M73Vh3LIJWTQz5h-DzyfT4aKpN1JWIJrQvg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112423903398311375680\">Robert Burgh</a>"] }
        ],
        summary: "친절한 서비스와 우수한 품질을 자랑하는 아울렛입니다.",
        updatedAt: "2026-08-14",
        highlights: ["다양한 색상과 사이즈", "우수한 제품 품질"],
        tips: ["직원의 친절한 서비스를 경험해보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13884433029768426366", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9A%B8%EB%A0%9B+%ED%8C%A9%ED%86%A0%EB%A6%AC+%EC%8A%A4%ED%86%A0%EC%96%B4+86+%ED%95%AD%EB%8B%A4%EC%98%A4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "숍 비엣 안 - 메이드 인 베트남": {
        photos: [],
        placeId: "ChIJdSwTXQCrNTERo_GgfrQ6Xoo",
        placePhotos: [
            { photoReference: "AWCwydhtjFSjXHCYH3yDzxlpMSOjuSq7UGdg0pLi-4kMTjWpiYccCyOyjGzrxU6EBgXBv0ISdunavAeI0Z6fsY0UPGaiCoOEdjOTJ170B6rR1wO5lgroughPG49wwcnix0Z6t3NR7kMXPT2IC14Ix-L36488ThR3i_Yw_IlX7FJ3hAJCCd6LG9ZE93fI8fPDbhvjalDip7QnMoM9KVrsGnw2WLj8ZADNwcEfAsivKuWtNJQwnpJAIKTqMkCyVD3kw2IcrIF-xAkWupINFS84xEUnY6lx6yLg6ogSKj8tMQdxUJ81J4MRm2KFXXfkgeQPCqKVOxmVEx8cy5Xd5Ms-CYxKYKEmwxf_zgjrxAsFO5AS49N73PRjwj6sGdlrw12t2IVw7bHCFenALC-3vbJ4wDyZ80je9woumVR1IEOA04V1hToSDg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110015708592736292384\">Local Spoon</a>"] },
            { photoReference: "AWCwydg1jRQESsN27ryusi2dDei2bFmYrRfkfqfxEqvmCp0MyMFEjkAhmani1X9F_OEMxhBfwbUzrvmD9NgtxBPEtyB6E7npPX_7hQIs5oHqL5VZvBLZ1ad8zqpmAAyTftjX2ZdbY59kGcAFNfid_1KDZd5L-LVqvvyV0iEyBITYUfGUBNl-hDJ3y3Dp-xMpKQ1DmlcDtnSdDFvIZ7ZO7Lc4Xs1_gdR2d1FKPm2XAcjbEslnX8Qjnkt75kRSyxgdu6pd11DCcWMdaSn1-lEfO6f9wIPqRwTi6p8C7cz5-5jrcgmrkEQ5JEEcDRU93L4OG6gaxHUAnECtfBRTTI5uTMG1NCg5IzE2XA_QkkMyMVyU9I3R4LFKGYmb59nNEQ4pj3__5CdI_IbTU-ss8lIjtjaCZ1-GG4bG5PxSz7QhCJwUZoYE-I46zWWFw348HxRE5iO2", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107181743065674277473\">Chi Lưu Thị</a>"] },
            { photoReference: "AWCwydhzPKflVlqyk8OGdpBx3Y1T1CtwH52dWW9JfM1RorOg7R6pGVfySREnYXht_wDjxk02_NiS_nbvteCo-FAd77nSROxVRA9tT9pq0o7J8TwoUhFiPufikH8T5TRiLcq6Kt4yUymn9eUcXQ3bIMGZ1UdDMCt2hN83_Wzbu6mqtQPrqIpoBVb_fwsFEFWdX1272aQaUL52Zt4dgw5RgsA7eEzcSJeS6ylFCd-EB-ZWdYd7dZIvO_uIOCv7R3ecplzFIbMx36g5mVV8GPVpMbNy7jJzdhhjfSuTqOk2cYV92cw82pyIwQrqpianoP820nfz5nmU2YI3PX2eOWvPnhysPqbI9xKf3Uy1ziTKqHTCRw65eVG6NcdKW9Xj6l20RDPnQV4MVyApoDiEQf6pucmAhOWNcM20feEg5-g3kbwov_jzJzICvRFIPc-yTGLKYA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111917397755342263319\">Nicole Bacayo</a>"] },
            { photoReference: "AWCwydi3smk_kuSF-XkZZjif3GmNjRQUzaCbona9jNputnmkH-2QTis2okyJcomyQGpiHDaeFxrFGAR2eU0rBHM-zgqlgJ3L0zWwou4qV33hAMHU1MWQEP8FectG91hmf7HIugAdL925K0AvoUBIrjLve2y93G9HZ9GbUCOUJBgFPcVWUlXkER5Vikffc2jV-uYNnOH_6xNwvLV5PSSK0Vb1dC2GnkVTwWjkgs98R2LGQvoXxfRTVu4hgpg4fXP4JgJKpkDTaNGjq_In7jNt0V971Y4C44u1UAGeaXPBdKPXURK8n-X-1repACfvdL7lK05MtvOroEmFlpZaQon-IG1UcmtQgvVYejPo6JV27dNQQlODdbOejQ5oVcylFGm0jbygQx98bms-4pW-CUuy0v50cuyKjHRQK34WEIR9IUPYt3MdowXG4uBXA0eKUGAs7NNS", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112093204099481177356\">Téo Yahon</a>"] },
            { photoReference: "AWCwydhqcyn72A_8ZqriC84ZJL1xaY2aB5FiQEop_v_yHU6X9xq7Mv20ZOGEKvSH_38Omt9fB-f_vYzpnbFgekGQj4OFGJkvcXUl-0yPaCuT89ROLjTFtlzGi9kLYb9eofeS98u3w3FhToFwk-BCih1OgEDOS3EaSP6uCVy8WBF-oLFZ6TZSD-OAHf08dDTaVY8HYC_KB978Z1QNL1Y4E7STlHZNiTs3UkyY5s4lRJ1xU_fBYxel2gBKuZcRwYEHHP3y3FFWGDCiGCsJp-4qh4uZmwOc4gGiN11-i9FB7Z-g4u-LYiPyhaN4OZhUaCueqy2NrQ7t2_T70AeWg_1wuV-ZuvOesnwQwiKrk1fdH6oZ5wb9Ar3JYNGgaCKFm_iprRmX9HY-MZLGH_gYwhxWVn3KdsfTeumMsQDgvN2hKcPzCaRrAURf", width: 2160, height: 3840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100265114959852242703\">Trang Luu</a>"] }
        ],
        summary: "친절한 서비스와 저렴한 가격을 자랑하는 하노이의 추천 매장입니다.",
        updatedAt: "2026-08-14",
        highlights: ["친절한 판매자", "우수한 제품 품질", "저렴한 가격"],
        tips: ["망설이지 말고 방문해보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9970471171937857955", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%8D+%EB%B9%84%EC%97%A3+%EC%95%88+-+%EB%A9%94%EC%9D%B4%EB%93%9C+%EC%9D%B8+%EB%B2%A0%ED%8A%B8%EB%82%A8+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "롯데면세점 하노이공항점": {
        photos: [],
        placeId: "ChIJcaV2wGUDNTERkJstUqQ9ubA",
        placePhotos: [
            { photoReference: "AWCwydiQtBzkL7of6FTkvhvsfNJP3U3ifu7IjGRSC6XghGE8xThbGCg6HiCjsMcwSH1W_egVfBrdHqtmlJfLiy9baZPDrai3JQOgDqPznfof4wEYBbiF7gnDCHAIVK60sPD3A9RzFhZvLxQXlSU8rDQspFN1o-sfqUmdhQ-5nyYPzxN_BRppAT3ldLXArngRjniO21qKdsNXPL5KOsE__42gFBvlAbTrAh9ZCemh5a3EeJyxp_BmY2uOUbCzp1U8kodx2dxAdCKvFGpleE_5389uJTzODKKwBQMop-9Wj08NZBVmCcozU-k4bx75gPYSORX_5LWOHiefARCWNeAzLVihlmQOC5DZt7Zng99MFdGQTNj9sa8AhBC0KUuqhVbfUTYBm_xJW6iSIAPnzRdqGVRiBFqe-eCM0eN4TRzWwDOiDJwVtw", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117867366419731238326\">LOTTE DUTY FREE HA NOI AIRPORT (롯데면세점 하노이공항점)</a>"] },
            { photoReference: "AWCwydhZLBwjlamzfnGNm6Jt91SnNN1V4iqMW9QL1bP3w1F8bPNqZxdsyjWByTlxy91m427ZzfUbBx2yT7PCHnw6oN_OfELkWxfi0CeIcufc3-75a0S9J2mFB6fzsWdfvOXbCCIOwhvDGT1PNrklcscKXU9scZINf80SJBa03Eo7hXBF54fgIaVubYqgaG9n8rd2YlwBjOB-NmW-HUygej-QlP_6TMk3YB53SwbtzTQ00kvNtZuTXB6zJwkuT3vHzvmHQ6A3YLRMHKXT-NQGHRxPtiLkaMvTPmMiO7d2fSd3UWG_4rcntDlZmb4Gm6mmOIkReZ5TychfBUwIp-ZzEVUlBnQX8kZwTtyJBODXPi3lcOYQ95AGbl8RvM-4NbLRI1XfAA5kdomQUbohxs-9PEigY2yS3qTVFpXAFOTPsrYa9Qh6HzU", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117867366419731238326\">LOTTE DUTY FREE HA NOI AIRPORT (롯데면세점 하노이공항점)</a>"] },
            { photoReference: "AWCwydjaMHDCstk5zZor9soobDG7rGmYTCWCo0JEa99ejWunKqa7DaXd8EjwEpxixAtjjarRN_1O2N2oiv91fICIrmkNvS7WQoBGSKDwqm9QFUvwqexIOhcDLoLB9hFIrdtDdH_X-2C3oCsTPVWLl6TuRV8jFVbPmf4pz8upy7VVWVMEKflDiXGAVv3XnNnv0tXjTXTNe2QfCeArzsAfVLT7Jf2SEGz_CMWoN_6mZxLQl0GeXi53k23Q5L2w-5weyLQJ9enOY-Cd-iSYGPBTtAqCx2mBmFoeLwrDuoqavE1WopcpFguURnQbH69EIaCLK_W4RUZwEB7anevFY3048TK6dmQDg1yX2H6Yfuhknqtus5n214Ayf0sRDlKux_C7MAwBya4IR-zqGOSteeYkKfI_mWZyG4PmLVjZ484Nja3Wsqc", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104428661442119601012\">Huy Pham</a>"] },
            { photoReference: "AWCwydg8ELORKshtgZo_rDJA6CSdGwVnds_H9VpX-JbqIdMltIGtQ5aY29SI4G-_h9LdGzprmt6xOTcOcTV31Kqk61cmcyElNFHcKnB_wp2wyhFKzBRDeSGOuDKyGIONbyCh71iZYKDv0mwYLhIBa9TXEuuzcuFxQj4Y-MkoE2B2P5gDG1TuNIuZ3qTaSAaJ693cCFXtLzZHiiHQb4s1HMfPxR8CTFmlhrt2RSbzulIazSrhspfeyk-G5yfqRY2ByhHEPbuSyjfrEaX2NlgyVdgeDgG98mMOPKB4jIi0wZhfMYqUu9MLc5PAZDSj8MlLxPKsitGkjKdOn7U1O4uu3o1uvjxYjGvsfikzo08DykTGdiIWuqfZ0c7ctMEcD6OCf9DWY_KtSpfiowFAEoIEznmmrtp5t8W8bC3x-bc7yq4ennCpFhV2f5VFHV5YbXV2VA", width: 1435, height: 1799, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107967071189201099816\">Kiều Anh Trần</a>"] },
            { photoReference: "AWCwydjtZpRdI3RmQNHNVC1iv5MJkOAC0L8GQe3zfr9OqwCwDZGcSyaKko24Sb_DLsjIy4Q1LYqSTCa1-XoAJ9eX3C3DCFYYC91i7wB-U2MWB6rrlUFCh1EQhf-E_9i24fYVrEYD2su7Gbc6pCc4lRoC6yqqAqU8JJQ0cvFGk8TAyWxlX9zpMVxgk8YLUNQyC6kg7WzUoq5AFEddG_CYP8y-1peqNKHBLWWpAqIVSij10ie-2II6GFMq68RjI547Q67bBfG99EfYfM4aGahB3BOoMcOV1rGwZuqAtQwDg3pgle6pVHxIEqrFPD3SUAWG3vPX79od0jlWSf4fKai_5W08jmKY5fhMtHmNuzgDGp03FZScfpvzKIhq6p4VEVREXuPK5lCnavzKqKhxgxMWYF0hmQ-UleKZkPk0Itgmc9jxLcilhxCzlBsSCG5WRbOgZA", width: 4032, height: 2272, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107343870786152708142\">Yoshiyasu Sugita</a>"] }
        ],
        summary: "공항 내 위치하여 편리하게 이용 가능한 하노이의 주요 면세점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["공항 내 위치하여 뛰어난 접근성", "높은 검색 순위와 양호한 리뷰", "매일 오전 6시부터 새벽 3시까지 운영"],
        tips: ["공항 내 위치하여 이동이 편리함", "운영 시간을 미리 확인하여 방문 권장"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오전 3:00; 화요일: 오전 6:00 ~ 오전 3:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://en.lottedfs.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12734277197329439632", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%AF%EB%8D%B0%EB%A9%B4%EC%84%B8%EC%A0%90+%ED%95%98%EB%85%B8%EC%9D%B4%EA%B3%B5%ED%95%AD%EC%A0%90+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "VDF - 베트남 면세점 노이바이 공항": {
        photos: [],
        placeId: "ChIJj-gUPTADNTERObjDeO8MjPc",
        placePhotos: [
            { photoReference: "AWCwydgnX50zhfXwqBKLA6bgxkiPyxnMwsRcYA_tDsyaP-qTIBdK2JRStB-WN-hZNeQBt9DPFnVBZ7hCmbC3cznFFMxjVktCaTHLAXokJVX8tevY4hGwGLYGBxjSto8lKtQvfVf1aD96Z5904EqjU1MkauCbhOZvJJhB7rO7IbN0_cswShRLUiWRof8ZUviARyL7jZU7sq4gsc0ogSnqX1-v-529ohdJ-TwX0nd73p2-1YdDaxxCef-b7FARn41a7x5yL0NEtKB_KWU_-F9K52-NFnRfj4qywbMQCkm34mLt_HZllUOwxHFfyHbfRrRRXx9CqylwCbaEtrSVDfe9EQJnquUck6mple-V_xZ8SzAhkhlXLGRpw5EnPaGJzavqYrC_ljZSq-yzz2zi6EWTOfBDDsng68440SpqwAb-Pm4reTkmXIEhMV0d24QYpr-XKKHO", width: 1672, height: 941, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105362413730314052768\">VDF - Vietnam Duty Free, Noi Bai Airport (Departure)</a>"] },
            { photoReference: "AWCwydgBI18p8GerQFYtFmEI98OaHhMkjVT947paE9DUem3VeNGkZRR910I07rxQ-mmhthrbn-fFxiNGO0DtgMQ3q7Btl--MIbdF80pehZrL3m2Nc-0XK5nCz9KaoS4pwQdCkJoN0p7fAk0KMSxEK5LNtDGx6FrNxTslvL8tEJ0EZGTd-Kk-A37PIMnfr2ySBV1wVS4Snj_FZl2vZcuzrX4Nn9l2bz8S2u_bJhFz-onPXPUpZ6mE2hhtFlFaIOaztvMiKMMNzFJRqtU5tdQ8JbPHTQIhaa2ms4InP-aVPoW-lMrrXidEAEQea9-Cis6bziK0qEt1sxG4B62ziXaHAHQsVwnbshioOiXPSwRuEDGu4Fw21EZnuh-I4fb7zhxs5wSBTeyXDp4YF42aDNoc8uZ_gj3Bmn8yck0jPJNQIt6Y_EGQ92yYKtTl-fmRIHjeVmDu", width: 1672, height: 941, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105362413730314052768\">VDF - Vietnam Duty Free, Noi Bai Airport (Departure)</a>"] },
            { photoReference: "AWCwydjBaNkpmu7Ei9KbtCIpZd74alS1yj-5ipCTomB63NvmOCX8MWpcrk0W2blG4NccCYT359gKa-I9m5X-wUQchcGtC53YdFNpldRy9vVdgiOr48AJbfiBG3NcwFoe_3tPouAQNOGKM38PzZSdznK2fIAM6jJ8fBa6yOtCnxXLiFYLwOLV_NEncFcYSUa39siL6XYbyNJ6b7j6JBlEeiyNJ884KtjZcjv-AnXZOgV3eYUfWRUr_qnvV_zoPTYRKhY9X4dg3-hn8twpZeyiUxAFf7qhA6LQyL_fL142dbZHvgqPFeen6lgUWPtGOCjVOFCK2VbsWcwTxbmo3AlGgkIVLlKqMtU9hwLEzaQlk3FHSNIhHfkm4OCzD06__kZG3ReaunFKko_sCJCIyjBVyLik-p0wU6aVpJ3Z2BVWMU6XWychqd_728a_S1gx3PRaSLVo", width: 1672, height: 941, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105362413730314052768\">VDF - Vietnam Duty Free, Noi Bai Airport (Departure)</a>"] },
            { photoReference: "AWCwydjajOBRT3rX7kqTLB5_Z-iiNaohDxDTndq8h8gkf-SNh5TvqOrbsbhtDMmJrku6hX18WRYsxrD52fh7jObfbz2nDc4yV-c_sY_dnNYB4Mv0cyGslChWxJZin1za37MLmT5_Ib1I1UP6PYrvuswEz6g_aAuRpjG2_5H55CJVMOVgzipIQqP1Q_emeXgiz2KNx1xKvI8z8pOaFKt1KD4A0TI1u2sk7-RluN9nPZcWggh9DgVy8iclPQHhyZ25s1Lg6evKm_rQm6wgeDADwt5NRT6M43foM1oNnJd_wF1p0G2hceLRsVe-g4PffcY7pUxAbVarVIGIM_UR-ol-vAcIh8H4cFTh2WRnUrWLGHrbyI7UBG7y8NikYKnXre0Bp01XyfbcoOwsdKefKAw_XL45d5iokflRYTuqFcJx_cfRKf_PYb37usO_sDvpU62oNA", width: 1672, height: 941, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105362413730314052768\">VDF - Vietnam Duty Free, Noi Bai Airport (Departure)</a>"] },
            { photoReference: "AWCwydiMxXpDam1x3COOtNeDWZ_EdSJPhaBZ4ptxH3_cfdoQW59SSaX5QwVEQ40qPEMiO0utOMcyH67UFnyXTKLdhxPDLTB-8zT0F-5SQNOPk10nmFLRJ1RQOSxzlVNuIajMkN7qdnSq3CXn_OV-yjB9xi_JHvAemVjr7nhZHD4TvV2-WGfOL1XgkJWCCC69HSk67g9WCbSFbECUNcDviujWXGO0IrYZ54eNRbM-QX_BRyv4mkCm8865c8y914Tw59RpMrjXjGMbViBDka6_qVFkpU8LiWtV0BEzpR3nTR_-jW26lvwr8ehKqU67TDKP1kZOoCYvTdYz1Tl8w9N030off5Px9fs37Y0tMlMGcpdAOs6M2ARJqIXEVcF5uPFerzEu42VBKBBelpueMSJ48zUQwCylY7R5_PCKOD8dKauRqHu9kFQaQdNpT0gBPJ42omzQ", width: 1672, height: 941, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105362413730314052768\">VDF - Vietnam Duty Free, Noi Bai Airport (Departure)</a>"] }
        ],
        summary: "다양한 프로모션과 할인 혜택을 제공하는 매력적인 쇼핑 공간입니다.",
        updatedAt: "2026-08-14",
        highlights: ["친절하고 세심한 직원 서비스", "다양한 오픈 프로모션 및 할인", "아름답고 쾌적한 쇼핑 환경"],
        tips: ["비행기 탑승 전 초콜릿 등 간식류 구매를 추천합니다", "매장 내 진행 중인 할인 혜택을 확인하세요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://vdf.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17837646446770501689", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=VDF+-+%EB%B2%A0%ED%8A%B8%EB%82%A8+%EB%A9%B4%EC%84%B8%EC%A0%90+%EB%85%B8%EC%9D%B4%EB%B0%94%EC%9D%B4+%EA%B3%B5%ED%95%AD+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "하노이 쇼텐": {
        photos: [],
        placeId: "ChIJFbukrUurNTERbdGP5qUJXdw",
        placePhotos: [
            { photoReference: "AWCwydgnBK1v2sKd9kclZc0k3Wn-_VpeyXQKzZjXiz_ag7hdCJzk2rQgTzX343ru-_2bnGzu5WGg9NHpbvyLbXndA4ShGZB0WAIKVCoX85Og06qzM-oj-mBrk9b5dkpIi8J9zmy7OgyM4ITfhIBbpiCwIj2Q-vT-Rq-cuS_JayOI_VxY1OC4aV3HVZhbTAk-vBqPgnXSa7GbF1bXi0nNPc04LDJqIVSlAbhKZoArsPznKpP3jxATFU0U5JBSd6GWAvJgY51QqBjmFdSWH01-OiFMddNEwxCB-VCzhsBLG9sismw4pSTfVpzXRgrsI158dbySyXGscsip-3CV9wHU_-YsV7_eeSzji63VBWuJXeCiiX7LRV1VmwXcu7fKgsdWMHbgiy9rCeRkMrx_DNsJGllTeuyjvkuVvWN1xyhRYyMm3tVxN63TF2hGGEWHkWL8zA", width: 4240, height: 2832, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101487135367912932007\">Hanoi Shouten - Souvenir &amp; Gift Shop</a>"] },
            { photoReference: "AWCwydiT9XYWMTbgXY1Jln_HGlw04qZtf0ZoAGSudBo6BC0RdOSIWEexY-BOyDk6_j8E350Spd7oT8s2NYXOxuUAOEZQLCiuCz24zrdCyPch1ytZyrpx-qIWnugfLfG7ie3euAu6cS9Uzl5KXnHO6RC26AfemTEOE643xxza7jpA6yYB9vvXITTAWK-8vEz3iJYjfXEKspNtmUXgTdKddXq4nbuR2Httbfg10SqHgZXLxEPDAza_DFiAntc5rLfBHRocO_eNSEOiN1XXOnXPgpIrkXFnMs34p9-n1CnN9d_xjFh1qYv0HK9QAsUUM1r-ZJ5Usj1ajrKuSHA8Y6Se1CwfjfCcBTBvgMq6on70XL68HWYby_UxRDV2hdcirdBa7hDlpTQ-orQDGtKVD7ksWJYoUXJcVtdQaO7ABiIBJ50Ndgs", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115430659205617960991\">Wilfredo “Wil” Davila</a>"] },
            { photoReference: "AWCwydhGDmFzQ4OLSn2l3SKGd4I_E6br3s4UC4d59fdi0QTC7kV8nLHlYa76ix3oLMLVnudU8TRruyIbLHoJj50sUOpFQvNu2KZH_hlGbmGWV7R_HxmymOxBRN0MsJg4rN6Q7q5Pzb1hv6FIv9MyjbJzwdAdICAUaCQg-ncyQzO_Rao-S1eSXhiCqNBUe9xTM1HXPfLbMTcR2DHbVutvl2H5T9GuE7FCLu65skH2ATWOTGmY32A9Sl-W4k3jze7Vrk0QtxHRl5tSKKVV-2jNs2nvZ6uAqhJUyWPl2bUYQya_qtppm-NN8uQ-SqeWrYcYK5RtikZmDtgNe_K4IVW0Htvd_jKzhGCWdu-aiw21w-7HBh5wkcpLER7CNvL8QnmCcbGVPR2lMzwraouWu2mzKu5hTe319J9myluyT-R-7z59Vp69Ed2FfY1_PmB8cHbAYuYR", width: 2048, height: 1368, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101487135367912932007\">Hanoi Shouten - Souvenir &amp; Gift Shop</a>"] },
            { photoReference: "AWCwydguMANKaN1ckk8kAyP0RE7YG5CzjYXbvJdo7KRCzhoF03p6tv6DGTfHEOaOfcNMm2yXilzWf2Ml2TNWH4BX37FhtsepepysRp8cKa7NI152daZK05E-hFAFbq8lOSnimd1T8daJIEaB6l0qAQDBiXrZNMNOXPEH2bA1ZinozVFMSGjTnqYuE7SedVbXyeWF4HjekhXG2Ch29LQnWHpx7Ugxq49eygPOxSSGBSdlEV5JIrBeYclYt4tv--XutsviJpyZyhLfhAk2nSlerabNmVvpIVP0xkptZKoKkPZB0DlafKnkrz36JOoJBW1iqAr1WxG-ZSk_Q8BOISejko7OZ36yXTJOnqBpSK-t8XG41RVCVe_Bk9LPa8qyGMi7oHiGnrPp07ptd4lNxG0mlads7wjD-WSCvtQUn0rQd2Yp24om7zaSa24S5lQ6_h9E-g", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107562334402831505172\">Татьяна Ломонова</a>"] },
            { photoReference: "AWCwydhrkX2BDzMHPOI4SJIEq7gxW-H2ETfFuHw2CHhsZgLvz0QFsa2BNvKlT8vio2Lcbo8BG9pqZvjAMFwsnTb7txsDefMd0ib_VQ4_LyIEpkyQBgJSRGezF-f3bfhWAoelaYlX7rf5EyuZzkA5HfOyG66ptUEi7ufTGyJEskBCEb3axu0j-iOjxRJkDPZA-NRAbQV6r54yzzek9eLhcKGzcAdpBDkFsA4KfnVCozAr6VnCogzz827VVmHtdpqIDOdsKdJl2RXJOvc3AcOP9dWmoeVn2ajHUvRRafWR8JLxpAAzXtlD4G8HSe0gIkRoSTwICBGniBvdvwHMNAbjZIAnPIjJ-JkJ-tAJ3NapIWJUWsf9pWJucVaiQm_AF4mKfutNnm5DVl9hHNhrBUmA2LO2AyP_DiDkb23E34krvuuImr5pPn5FmK2MJWgpH8f4s9oT", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113369372346595342360\">Hoa Nguyen</a>"] }
        ],
        summary: "수공예품과 독특한 선물을 구매할 수 있는 아름다운 공간입니다.",
        updatedAt: "2026-08-14",
        highlights: ["세련된 디자인의 기념품", "수공예품 및 독특한 선물", "맛있는 디저트"],
        tips: ["바스크 케이크와 바나나 브레드를 추천합니다", "위층에 숙박 시설이 마련되어 있습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:30; 화요일: 오전 8:00 ~ 오후 10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.hanoishouten.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15878858469320675693", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%85%B8%EC%9D%B4+%EC%87%BC%ED%85%90+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "고이 젬 카테드럴": {
        photos: [],
        placeId: "ChIJMY1ZXVirNTERkzcHqNgHOGc",
        placePhotos: [
            { photoReference: "AWCwydhMO-7Vax3LjN8wbtOuvrrnQ4WukG0Qghvz_dtTW-5Y2DpImsiOKZ4HqYGg4pZGCDcSSrz3C_XCE6hGR5U_byDDOyGppfL3pHqEE18V4nsr6oEIedJkTWbCi2ay3Hk3_0SYBP5F7l-xPcFY5-2rZkRdRQ5h-v5ZMLj0CQWWuYEeAGY7n-006LovmruViy5FlrgN31Rsd6tBXsGQI0yAEG5nVAngq2Nt0Cwh4vMNC8PscAiwrk1JD8zI0P5cTkzeP3c8nEy6ycCG720PNWsodPNUaANpdqsspq0itxNSPSJgWr3Wy1kmmeoMVFSKn8es4xGuCVh1XwyQtvOVTX0szk-V2sPcT1YTBTHkWrY2sV18Ns2QYW9u8X1FjgL_h1ABgNV8Ffjq3sAIshLqr67kN8ynVbB0oloxtZ1jID7fAtKHNfyLmuPSd6mO0vZOy_Qf", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117545807574913897262\">#shootfilmwithvee</a>"] },
            { photoReference: "AWCwydghZAYesG2gPxwXfxDIr3o2q6lNn28aLISTfOajk4eEYe09VpPLM3lgG1WX2-GHvFk_Mr_eumhfO-yez99TRSpziKPMp4XyyuExRdRvt8NFWO3ET_T8j3Eegl_iFOxqjMzE_JM0tcHp6rWj9-Sbv79QAaZAzZtPmi_LP8YCf40KcKNQnxoswq9uuqHZz1Z5TlmoSR8cvNGXK0zJ4lOB0ZS4g2UVEvpzizr4IIuoYZZHhr9RSO9jFrUlBJezKg4ItU4cGhSI_i5KyeXa1v8zbi5T2imrYhgN5_0YAFH9PI2nLGb5ZO4wLycO_Eoe4xhjfsqS2QOrvgoCdVMaXLJVZh25xyTDk6T8RWx3eyU0mcn53RBf7_manupPPCARFV4WEtGHiq9CVSBVF4Pt2-9gKBbRUoCHGyOtwrCPVjg_nWLU-DZLFy8cqEOrX8Hu218x", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114690266990313821096\">Lily Chizmar</a>"] },
            { photoReference: "AWCwydgsJ3iPgggWa53avkoj746SxLQJeAzyv5HGYUFenzx3yLgoU7X3aaqslCG_UgOGEG6Hs1GaiulPPngPVJFDfNQihdFDWHsVPPiT3k7n4pv3hepbGJgKLKgP1Gl8XZahnYnoqB2AQFU0kJ2vtd5S7IL5eQLXk89b_GoyelTA91A5006Xsp9Yx-8hs8ySAWyXpO1qAKF4GfWwT6z863S2so9PFvsqTNL8dbtiEyJFq9L_y4x5ihXAjsMhqLiyOrnP-hLMOQLkn7_TnaDDfsy1wxZW6z0NTp0sRrgY31DGCnj9C9u5c2eGS1kP7DR0VUxZ-wJNJiInz_Hx2gOUS2oUtTwCQoCD7kYU8Vo7bV4Z8-6ilgsL1x4_iZDj-6XNW4abDUxF3txfxPSB27NOfcBeuEZeT51IWXD_ZYlFlnPZ0ZCIAdcSwyHebTwAjaEhECkC", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108197457569901674722\">Haziq wolly</a>"] },
            { photoReference: "AWCwydi4o4ePqay8bZz4ZKq8-Sbz1fBVd0JCyJ9AAkT9bSungUtb5HzDdXTrGvXV2Nn2uDGFDYUeKo2ae_YwTnSme9MDyvA59QnVpqd-pccVlutHfa2nX5BAcsXiTRpbidodv-ddVMrAQ-l7ITGzupCzBI8x00eVMmajp6VhjRz1NBD1Sc0-SvfEbMa2Iwcu--3DNPllLyvXm_9XRKhfOGOlvPSVZ6iskCR7uU_yQcE058oo5z5JIYIDEj6V54AsNqiSkMjJBsZGqn8qrzBmqeqXqBxg1qLAEhJnP4R4WO6QNDYxjWusMssM3EPgKbexwMMEYBqIg26MQ5VBXrUfAzOUtbASmcEUslbsjtTaEjFT5-Ho7FaJ3mKxVi5zJlCTwpOQegyMHtzjAEsEtWtPiyrAPlOk9WwYOuY989IEvACsKStcRB1Lqu3P6rQLYkmV9hOw", width: 3023, height: 4031, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112888317778022694330\">Jancel Poliquit</a>"] },
            { photoReference: "AWCwydjQbs9GeG39lO_4_R8GOxdE-qLO2qIWilmYt8ekmBeYQTyc1bEUZnYp8i55Jg2dHIQKELCstD4rSQmEJ_mRNN_5cBWvvxRfzNul1oOavZcdiTbeo_HbT3m-8L5Ttrgx7gQXfhivP4qm1tJkxqgz-zmahabZ1jo-rqetjzO73oD56_pbzX-b2avV0bECfC9Ug4NYKMomFvh0ygLheHiI_pxORRVWuyStZgNxRTeOYIvlYmKxC7R02S77f4MM9FuJzzGxz2-NqdPkqBSpSZ-JYsu-g4BJBzS4G7ukPEWP-i8wxIN-AdJUO47iweD1csbpUrQfvxQ0GRAFKbYUSunQeA3JxDj54RhQcxf2PU_TY3x2J4nvM-2YEOaqmbhCR-8rDFQ1Nr-bvDTAiaWcFEaZRHdIt40ansccY21Z01jT4MW5COlL8zu_uSem3HoTeGEz", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112979126140151423830\">phuong bao</a>"] }
        ],
        summary: "다양한 기념품과 의류를 만날 수 있는 매력적인 기념품 상점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["귀여운 기념품 아이템", "다양한 스티커 종류", "멋진 의류 제품"],
        tips: ["친구를 위한 스티커를 구매해보세요", "친절한 직원들이 상주하고 있습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:30 ~ 오후 10:30; 화요일: 오전 8:30 ~ 오후 10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/goigem.space", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7437703411715749779", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A0%EC%9D%B4+%EC%A0%AC+%EC%B9%B4%ED%85%8C%EB%93%9C%EB%9F%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "MET 스토어": {
        photos: [],
        placeId: "ChIJawoopR6rNTEREEjPLTKQ0Po",
        placePhotos: [
            { photoReference: "AWCwydgSSWQDy5PP4zxyX-_Oj7QDeZu197ReI-iuI9Az7MkAW1BYrEs5vkk-QoaRR9WoICq5F34enJNYNJUA3Ree-nmJwHHXe-xAr8fEVNVobRnMa-AYDU3nk0ICqF81jwpizFk7x9oSLP3NYDsGTyLFKwCHCId2Avx4lS6nL6UBJAEvvMS5fPhPJzzw9DNBT6J1kOvNIyoGmuvnQvucvvbOtmNMTmOvTPmlQQs6bYNMHZw_HMCJ-Jqeilq2SOjeEaETdY15Hy7PEMrVejHVM-YD9SeOzTkpv3axGS4-kpWowA5vdWk3IOH3PSnCsSmFebc_OsBKlKNJ21nUv7ssTX9n9G0lxmdCyUhtA7btXmNghRDNWSFpzFlTw0uBEp-N8W4AG0mikG_Wpw-y7DC2H89BrFYtXefB87Ia_d66xEYgUPrFir8C0Uelljc-wrNyAl-3", width: 1800, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108542534319889728342\">Alex Ledesma</a>"] },
            { photoReference: "AWCwydirlAeTz7FW11-XlM_45hdBnRjlSbHpq8gXnJ8rGX3bn_oO8pSExWtPU7CE02ao8kG1vuAWUZvpsxijDQIv0YT5LbksSA1XabZOZfIAj_SNUIiT2KbuWwLB87OKMDPnm7eyvEyJxiFKqQJReFjSLuFso2uHkY8enADccvLbgTpdq8gJH3F3BDqUZG6yDyp5jwecFE18v0IB0u7v4S2eTQsuDRDNRpFGvxSQME8utBJ4za_bpVTanQdHLhS7oZxSS6iWWsZNyLg5eH4NwQcIWH39GighdPJcTeXk-XC5w1PE4z8H7WT-MHZnmajhIgAz8oKN6g2cfbGAx-HETIMbyFUDPC-9CPYJuZ_NMruwet9iAho2lWy9bMsP6D7CdAiCs_RBp49hQnf0mmdCcBorR92VTHmtnis6ZuCgtqtJkGoBXCU21WSazgY6pi0Oig", width: 2592, height: 1728, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110656085331156702728\">MET Store – Vietnamese Coffee, Tea, Gifts &amp; Local Specialties</a>"] },
            { photoReference: "AWCwydil7lVcbts6j5NKXgAvaSakl8o9M1mziZWk3B3FBhzySYLVgKlkyJXNBk9IPXiiEYIDdDnX17vyR7OaBBL50hLY2FY9rAOWzyfIXE2qYXBUMaRpjzxPZm6A7vjfZtIewvfVs1OvDTXcHA5fKYmnCX7Hb5_9eYEYiw8TAr6QnhSTlVlDmQGwmkg-pZQgAmTlSZBoZzuUl2VQEC_r3aEtot8hmLwdVb5gmT8BUpbTLfDIsh-qdmw6C0DQ904K41VTCiKUtS28a6_uHlYfQH0yNe09V6ah9ftmnnC7duzg0NbFFbJ09SVdYFVPDYEMEehu6UomrcPiDMS3Q1AqPrzdeINCJoNnTrpGNJqDArvL0eG4IuHbUrp4DDUScj2tXKVPwta9bTxdliQW0YdYpyXFXsjK6pAwUxrZlc13TG8jU4JWEqyz7UsraeDw0OXuW1a1", width: 2592, height: 1728, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110656085331156702728\">MET Store – Vietnamese Coffee, Tea, Gifts &amp; Local Specialties</a>"] },
            { photoReference: "AWCwydilPvq9hc9ggR0Cu22_1x8AZ1k-blkIfrIarsx8v3-WLYxOxHjNfCs6MIpfHcyAW9Jd5CeksI6ZULrmYzyO6cPL2tbVhsNqw2NZQ5F3HMwDsEafUH82DD_q7JcJncYPI1csCfBLeev4FWE8XU0bvkW_8H-YMj5SnW9qhouAzLdLzyYK8WP9SxHhDUQTyepZqFhDYQP_9JBDjXEQxgE0BiJCFFbzcqSTgZY0TiKMe4Lk_NgIzlmsru2fcjnQwTTSsJwbmqG_YCcG3PsjhgdraEzhQturm4ISu6lrzOwRPJekOWze_yJVdG6I2-wyK4S30j_KaBfMdB1HRIUVSImqRYv2suxbcW8YAbtvrP_k74WvgRQ3iIy5_JJzTIlkDb-qxtmrxGRgqFA1tkDyOHLOqj8YbF_lNYSmDgDd7EhxY2oQuiGPBGxeH4G5aBJJ5Sf2", width: 1728, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110656085331156702728\">MET Store – Vietnamese Coffee, Tea, Gifts &amp; Local Specialties</a>"] },
            { photoReference: "AWCwydjTJnze6q9_bSdilHp4wZ4phfpIo-hbtgBk8XaKyYXAvYFD6BC8FJtNLEhcvy1Ra4fsfR3PsGTY0OQg5RXsWuyLyCwBxBwR848_kHjrZWl-B-_tOcXkiygdsEbrRVOHngjPeNgybRcQJw_gHzIqOUatcmEKNQBzXAP8HP56ApN_pxmtKwbmyWPK7TuUfpEg6p0HcYHylCEgmdWTwWY2mUnixIRhAfEwbnVCJ367cxet1COlDXeqRd8_YdCVCMMlbFzyw2YGz1U2M5OjYhCbRRjr5JJhxJ5Y35jmsecA5SX_NyzKPQj95yyqJGvjpHYxcF2Y5d4LIE3UoyuItW1OBfeRpQP8EPjiLS3hM5eI6VB-OtBaAuftxBg1JlI0JFgSZs9zgoXv1DhKpZvYknDEl2KKxMsUJttQCmyHwiybFUX0cR78ssVvk4vHs-XSx4CJ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104657945689444932803\">lam hoi ki</a>"] }
        ],
        summary: "높은 평점과 친절한 고객 서비스로 만족도가 매우 높은 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["친절한 고객 서비스", "합리적인 가격", "안전한 포장 서비스"],
        tips: ["도움이 필요한 경우 직원의 도움을 받으세요", "포장이 꼼꼼하여 기념품을 안전하게 가져갈 수 있습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:30; 화요일: 오전 9:00 ~ 오후 10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://metstore.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18073103849829124112", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=MET+%EC%8A%A4%ED%86%A0%EC%96%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "고이 젬 크리에이티브 스토어": {
        photos: [],
        placeId: "ChIJr4tqnQerNTERYPvHOh7RE3U",
        placePhotos: [
            { photoReference: "AWCwydjWXpzGXtRWuXD17yt6EE-vel6INoXI-6NXdE5OtSHD5rwYnY4bmDAcLk_-wvpXWSD8Bt9xC94c-CsBibqPMMRbOcjEhI7RmuB60UEriPyANOx0PQPlvqKAbQO8o1YF7JBmWKm7UcoAs1kE0oORM3CMJqzuzZFjNt07yzZwXQd7csr_zmsk1zDGO5QIq439Qpt147JkS6I_nnxi3WfuOYl-Sc8E7piQIE9G89cHAGSDmxKHr1ySaGzfR7tOZunoAW9LQBe9wxFKYCa2ZWWYuLh3TGAE0z3exi84z7hxPFh79IuDbioz3EJs48V7GtaHKGXcxfChFnnUia2bsC5Z2Eyv87hZ6Y8Lj9jSrj8W2sUsbkgW5sc9Q3By8BnZbiCYjV0xeKX6chlIGViR-1IxJ1SgGp-YEhzjQ6FH1Xmgty7G_QogKLYq5VXzT-aoHQS0", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113131165219226869261\">Gói Gém Creative Store</a>"] },
            { photoReference: "AWCwydiLXx5FFxWKMNMMvxFgyLUWZXL3d3hC19xtNnboxwFWScxHT-_Y9lqkuOwX-FN_8kjEZydkJFPUdYv6fSQYXpaasnVRgW1dXUFaBh4nyPSg_YpRzHRi5uLn0UmasDH8ADvzdcc6T-D6tahU3jHXkmJND2v9SxMau5VPdRvUtjjJpWvVASXy0eLUMp5xnjzDH_HVpR7K8mt3pH52N16FHnSKsNcfNXe9QOYhvzrBY-G08t3-wIeNJ_wQ-i02KOgx1WW5MCQREb9n7c504xOZ79ue-gQFJQgKNuwSsxYn6PBqvjJaj4BAmqvYGGOZH16sXC0EGHZJK-_pICxYdIQ2zWR6My8OE3ull3D1k_4ZrOISgC_PiCaERxQXfVa6l4roT7TFYC8B92O5nTK1QpfQQYfMxBgp-3lBwbAy6NP08y6Qi-MAcZgHib0TT8XqgN5H", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113131165219226869261\">Gói Gém Creative Store</a>"] },
            { photoReference: "AWCwydgXsi_gRoltYEaI0n-mmtCJR44Xt8gBNRpYh6mSJT1Mb7gut8Zl3vM2USS2xZBlPFxZYsbdpgC9sZ_eK_oPG0pUACRzQNHigu1uP68rRnvrin5ixck5f9Bu2-voDlE-oCuiaVrUt04eY6wzgQjRFpSqY40TGDL0x0zTjn9Uhholf997KuYXmZ1w0p3I9WgDAV7HYA9Jg_2QCPzrrABG8RJ7SQLEY6BAgE5yOleG0ClbPt2PeLHLzV_l_BhbFug69vjqYRrw7MSSw496yMPMDM4feBxZ71CY2rFg9Gq72fdRQ5EbO0li1SECJfzIgmukhp1YS7IWAQH9GYij1GS35E-DPQqB3wcnBYPqy_foiDx6TPUAR0kkjT1g_F5O_kbUKCUAJlMMOTKJ7Xhj0Ajwj-t3QRvQJ7nXF10sOvUDQRi1Y21UPQUzcNe8s3kjM2y3", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113131165219226869261\">Gói Gém Creative Store</a>"] },
            { photoReference: "AWCwydi484f-3mgtZ_dwsIyHVSBjbNsjZQVDkcObQfXO60ninH5ElRSUWxumPirF9H3uGP4VUSiGJZx5Irn-TlXWHtyD8OISvk9PR5pMTAYXhG7FQ_VKstm5mEAq8psdeFPi7_CM4S2VN-ha--fzSYcelvFvY1TS6NgG5gqxFTwB-eIkufZRooO4dooBpirbdPSdK-H0gz2OwfB9t1gSKczoVGXXEQ1AVH8keE1Y3knkl4esueJozncjlRU6jYGcDL0n13eyACHd5oWEcEN_2aDUMB9jO4Edi8QxjqT2XPJylBR8WopvwGbA3PSYFN-CczyngAYiyd-cda4wjo0-LA2LhwFNGZ5jz3Xm5l_0tPmlQQUN8Nd4kjACwqIfuBsrdHSFEQoN2HBjZ1vQXF0hRgDwkkXVReqz4-TLZN-4K8ECVDnILiE3fOlhsq0iY8_BJOPh", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113131165219226869261\">Gói Gém Creative Store</a>"] },
            { photoReference: "AWCwydgAbNreodl1LXFN9OeDIOJGo1SJzV9abnIkdf3L8SjM4BVQYeW3p-c6uyPuafD6LW7QvmQ85iBn_A-GkiKP6VmgmYioTthhkr7yaPMiufBwnftqf8hWjjwkAmDHxEUU50OVDnW1VA3Dh09lxwJveBXcq1weWbE4WzIOk6taYqVttKpC5T7lF8eRlPaiERfZmzDWThSGU6b5t7bMO5_J67RBC0SDckbbSG-WNSQLhH3vjVcz6nPLBmwtLRJOJMzCwhLoCkPLJHvYsoqWWYpSSzO6oWLR65C1QvfcqwipJmF-9NOVMzSzVcuHumyXOanOymUZE9_rlo_oSnu-cKYy4HtIwRPdh70S5RqpHfO06wbB9AI1Io521bq-XnempsSgcM0Lr35C8W2g6KCf7hqOqLiTToLmh6hdw4b8NnyDUEDOvd9Rwn7KMvla0w2W", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113131165219226869261\">Gói Gém Creative Store</a>"] }
        ],
        summary: "친절한 직원과 감각적인 디자인의 아이템을 만날 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["감각적인 디자인의 의류", "예술적인 소품", "친절한 서비스"],
        tips: ["구매 시 사은품 증정 여부를 확인하세요", "직원의 안목을 믿고 쇼핑해보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:30 ~ 오후 10:30; 화요일: 오전 8:30 ~ 오후 10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/goigem.space", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8436316454760479584", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A0%EC%9D%B4+%EC%A0%AC+%ED%81%AC%EB%A6%AC%EC%97%90%EC%9D%B4%ED%8B%B0%EB%B8%8C+%EC%8A%A4%ED%86%A0%EC%96%B4+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "안 핸드메이드": {
        photos: [],
        placeId: "ChIJc1vxVdqrNTERkB486_pJ6_E",
        placePhotos: [
            { photoReference: "AWCwydjxsSutK-D-HZ-CcSNlbQ9x_YcHvnJ_UrXTww8QF1dPGEG4ENLPgR65pIGi-F2vERq-fFcQc9cb992_alHZY3jn9Pb8At285QHwbr2ZQJ80L_VFGwenG00OGZJ9oxjSML6Fcow-3InunPP3-Cr1TAM3vSqaZC8YRpZXn-HGSmKS66s62qiipwbNU7H44Eju71cBZd9uLOoAQ1ixYkkbDHM4VMF42sKzcS9qDlXg8ww4mnYQ8j1Y1BbPbisE__Pew-2PyhszzWLsRy974KImuAMkZN-Dwx2FmR_V9yUhwN1qVuB7-lnKA8PUcDp6Udfp4nsvhrJEC8Y0L1Eb2SPbqWT6_Itd_UcICODJ0JU2RR5wgbE6VjUQU3KG-0s0I22gX1iNhS0A60_02_8M3OkE9R7nTdBgEab3xj9-mnSCNJqHoeQB", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109375486211215643617\">LYN VIDALLON</a>"] },
            { photoReference: "AWCwydgIQzKtV2-1tBj5ZS0zSXHU0PEt4-jQtNFprAZZeLsNmKq79gAs21wD8PFtFdKykfXIk1vQdO-S7_hl2Z2--Yo4hgrrrDeyMptsCpt-3T3evmpKe5AY9QfHypduBX8TYYIfFtCiSmJOSwkobWb5FrEHCdu5B6lW9l6mDdsSmyMmIgPapcoXdwrjZh5jdlveP25wOGUrDShDnJuA4WEfjcexd88r9lMeGvyNUrjZIAbDYF0RflwMRS3CJRSm-kzZtSR3b_w3KtcrWjpM41FyiA3YqOReG8o3Ax4ZPI41SAbphdEdlOTngQhjqVJQu3n9uRJixAZ_p42pssSq9eFX6nsHyMZA4Y8uvrV-y5dF03bh5Ml6m06TU-VqL9OAm9MUQL40Ex6bMy8JOe39cU7sY05pmGeFslws2G8R96G6vubi8yI", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110948242795749129835\">Như Nguyễn</a>"] },
            { photoReference: "AWCwydhnxnJdALInyEwWBRVPaoMv4B_aad3JatoHtmabDSvjec5X1ThGXorN4sz436bcd5o0bRr1BssW4YKUSDgrwKJffQ6I2HXo7hmtxKbkd4H2Mi_R-cExScTu_zTu3e1mVK9vFRXfHJ-CErqYYUwzYNb1dcxwnQapYw_UKOtqnpshMj2mZF7hAARWcBvLwWAqRNberj_jF5JyjivSgEzzbetOLKsoB-pHAz5S1nIrWAsAhaL7J4xrhYeY56N9bs66YNCkWGYWBO13ntTTQ1jX3aj8zXbfSmdFg0M4n6BkcvKzkhSzBJKHB1tjphsNjElMzzRV9MUWWQU9n_-brHkCLG8PNYtT-il2IvTRtEHl-XvRGW6P-YSP5Q-d9kLh1Vfb8TblohJkrTKBJSxQPh-FnJkyfTv2GSCv4lzFTN1N1tY", width: 1038, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109067051599858555591\">An handmade - Hemp fabric gift shop</a>"] },
            { photoReference: "AWCwydgXjTZAI0JFWuVbDqy0xIK8HlLA8dK0e69Sgbvsl8d_au1ZbbsnzQpTXgMREiHWxR7EAmaHnXfglVwpnoeFGloa3crjxpRGaXSks4hRt_EwvSLUqmBGAXnmunBK7MvgFRe4RVuC9lxR4fdf8NgCDh6Pi9yKITb8R-cDuD1PtVetpZ2ElUO5hp_0TR1Pu9DB7HZQYG5AWGGoqpiDI1tWFfPqOYbHrmulCpMDiz68No4NqRAzddWowXpe2qb8w9ZA3LMisWgKXRCm-DUx-IkB1Uj8_WvxOEcEZ_6CqifiRns206FNo56OizRFIWf8nTQTmvJ-A2GnDz0K2GK8NmGhLHnrHqTYg9SwLuInl0wzpKpthSqXl_d8KlC5zb7aE08jhonOQ7_tMuR9UXib2JCGNJWnHvcYYBYPxjzfXq132REfBzm_", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117968964168862689750\">Emily Wallace</a>"] },
            { photoReference: "AWCwydjBnfJg-TUWt83C-nU2lN5tdzgnOeZxXEsBtz5N_kXeY05MthIOjLQ3tTekmdmWsylZqJIu8lsrvFPasX03rGHAxUmf_6p3vH4TPPpB16_t-8SKdnzL4wIABfIiXERjkA3Gdqif5htLLKkHitZWrJYWPHj_qYhEq1ISSXXuNGyu6q3imX4Ich0nFC_sHIRzKMurpO-HeeeBcdEwWqWAYsL4micff7OqagbEOvszw0gbZhw4B9fs1UAuIH8Z1AGQZeaGZNYg1cMikgVYvYpISPA2oTNeCEpGrkJoaq0X0I59tZArIW2NOzredvRmMsoenM26Yg58bYhbXrEvEezqVRstzoeP4zfPmV5m9UH0gihRS1WsiL4V1tMvPSqdlHMnKZOMSTGGgk1akgHIWXyzw0Y6y1Ls5a1tejC5105-SKbad5xI", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102752134056001360502\">Jiho Hong</a>"] }
        ],
        summary: "친절한 서비스와 합리적인 가격의 고품질 수공예품을 만날 수 있는 기념품점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["원주민 공동체 제작 제품", "합리적인 가격", "친절한 서비스"],
        tips: ["수공예 제품의 특성을 고려한 합리적인 가격대를 확인하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://vietnamhempfabric.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17432108124704874128", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%88+%ED%95%B8%EB%93%9C%EB%A9%94%EC%9D%B4%EB%93%9C+%ED%95%98%EB%85%B8%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
