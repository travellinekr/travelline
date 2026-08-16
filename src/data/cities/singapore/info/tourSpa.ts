import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "가든스 바이 더 베이": {
        photos: ["/images/singapore/info/tourSpa/gardens-by-the-bay-singapore.jpg"],
        placeId: "ChIJMxZ-kwQZ2jERdsqftXeWCWI",
        placePhotos: [
            { photoReference: "AWCwydhsV43QlfjLVXnmmVqCFQcznmFro7jsz3ll-jIUBzlZYi0Z3u-qPBTKgpYO_TW048dmRom0gr1GMfNzEfKFRG9NyJBchw-SjBN2TmK5DtnT8P1eaPOnqiyDAuO2-h9HeaAgApYluRXBMcGentNJasijPYa_zCRhG6lMZyjKGxGsWWRohcZr9jxC_f6WPgtBpj-dk1GsJTvYvX2dZ4c90gpqtfFedLt7uere9FQUr5omdsttUmfNXoCEA32_MGZXU62XATBAp7_lwQGmEJy9bUN-HUuId_n_p0CXrQCSRoHDS9aJcbNQFnkN9XfUE3hxNaKKkUOUet1lUXnoFR_zc7iwANsaj4HEij3JGFlZQ4uCtLMVhluNc8E5mz5WtGz4dH-cZxjfGegVA5GX9naszLjL58wRfa3YuV-F4BXq6GA-kvc", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105218373870422086636\">Humanprof</a>"] },
            { photoReference: "AWCwydizZIP8r166KsluHLsqp0j5TWGy1lgbPuIQ7bOJXV86-NGFJ3tA0qS0wJ3OGwR6Kcx5RNHAQxnMF1JGbjQ9z016R2ZjlC1IQlTHH1bOEdSfhxM91ktFUwrLmuTFL2bVgOFOqR5hsup8v5jpLZlz4D1Jbt060RA58zw6CxXqVS4Zyn5y1W9ByUyqn4iqmsLAkFpLyatOFyYC-JKXWwf5wz41tC2vc4h5T4h4OYMuIICILJlUK5ibnSKXDZlKr6LpTWP4bo_UOziccBKDVuSwFb-R4-Vlec3cKluxbjcB-3xK9mCGz-ab9NqFdeS3_cPwwPUDWBd9ZhAIeoVoqi5DqT8YNrg5nxODFrSgKQtQgjBE2iPa0UvwadvJjAcd-SfdlcPRah-UBJhA73QmvOMXsQ9Jj563_2BcgMVyizsIHfEFd3QC", width: 4494, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107985197090547373008\">Wolfgang “Wolf” Mtr</a>"] },
            { photoReference: "AWCwydhiNNCtj6SLwX6CHEHEn8re6a-NL8YlYAJCK-EfVMGyrUsUUkfosFNJw0fZs40WXuW0eNx0Mcpb8Ku6e6xzsDCy3PGqGADUK3mafTYHs0X3ZB9CwtN2BXs-2Xz4_w_PxuvczPLwyTj5T972ayjRlygglAdzycTYaRenLlEykY0jriB43UQ0AnHYXkIJAXXRRFXQMSwg0L89bc-d5hxbNkRaHy-5EHyi83bALtMgh7mw8_GdIcqXOxzvWfPULw4MZCzgwyMJPSmnv3lfnA7DTSL0PvhvK6qqEAc24TMcAOgtHYMmu7mPrDpyJFl5z9qYFj9tpl3b01V-w9ecBm_vgEvif7f05mZIT-IySoRAqONbwhIwZqmcLFV6zBlOxFOQdH2eWxKKYHC7_oVorL5ij8NJW_6LB_DLx7PsVIp4IarVMTsJ", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114480534412229580910\">Ngoc Ho Quang</a>"] },
            { photoReference: "AWCwydh55qbmrMThvM044JCj38VxxvMRbRnQyXwd4naF9g-vnZ0R8L2Khc2i0J3aZtfFsPTzvbeS5MNJzFFKtjn229IkfRVHNDRBtBotlnP5YcSFDUsTIWNvLoHZ-ZkIt2yTxWIsrJuuYEbTbfnGcRCwd8y1qtxYPoYUKejx_TQ5p-8pIXzegFbQdiqsBpBoR2b37v1hMt2XEo6pTfsDZKzySigwxWOV-gxftakaNjGYZvz5BFmf-klTQUyVMYZyhazJcYLG1uJenPIBFB_4ScKONu16uA1Tm5ppSIbY9u4dMknFJj1W6nUTH7hWJfHvfPVpjSOxgNVWArTWCAXNGzaPSPDEWO0ZHvdRNdh-Kc9Osv3w0CriEZytOwJQbAqZQpwaUJmqXdF6TI1FbHh1_SCikAEjuhhlCTYvnV-foliISJ7SSQ", width: 3527, height: 2345, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106022864863587503681\">Lexi</a>"] },
            { photoReference: "AWCwydjaoK38nVpDtehPCyRV3N2PY3zGK3yomtRuWM5SOWKUOwAIFeHaAZikDHyyfUqzh3tN322pMW_es4YGyz-WK0LAyKqhZpIcCBrKWreS75E7QWqJn_S-nQ03Fg0wTHzUUU7AqbPvaSZZjGYbj_AzU6aYbUfCtNnOzlx6b-Y0cSuLOT9wNovLmhqHj_sC9YzvOgjM6eUJE-JpARcDcJplUEFzjOzbY8_oULs97spaKyN7hgqikEXbTw1S_OYh0THWa2H9jRFFI1KbMwba2EpJ6_0Df5tCQo4ho1bVr4lKEDmPqStlkxFEWA-FYofYVErX1PsU1yfe0e0fSPL18AWYa4Hz9PzhsEd_2efzj-bBfkUtLfekAKczynhoupoGIVb1N7ZdxCT64jINyXWcizSzD969C6UJOJpcYSv9QubCoFY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117093153718443163460\">Louise</a>"] }
        ],
        summary: "싱가포르 여행의 필수 코스, 화려한 슈퍼트리 쇼와 식물원을 즐겨보세요.",
        updatedAt: "2026-07-15",
        highlights: ["슈퍼트리 야경", "클라우드 포레스트", "플라워 돔"],
        tips: ["저녁 가든 랩소디 쇼 시간 맞춰서 꼭 가기"],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "8 Marina Gardens Dr, Singapore 018951", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8947725083216466276", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%80%EB%93%A0%EC%8A%A4+%EB%B0%94%EC%9D%B4+%EB%8D%94+%EB%B2%A0%EC%9D%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마리나 베이 샌즈 스카이파크": {
        photos: ["/images/singapore/info/tourSpa/marina-bay-sands-skypark-singapore.png"],
        placeId: "ChIJOeEf9S2vewIRM0B9a06CKwg",
        placePhotos: [
            { photoReference: "AWCwydh_7Y2aAJd2NMKzr91TqiKJkYCq5E9S76eOqb7333S7mM1uM-_QA22AcbypbAFndXuc8Pou0S4ul6sMxMT67aXdhvcaN0McdLqlatw__Sc5fGgDfUMMgay7Wh2twUuUy3mu6kjIpKSJ1rlMKCG_pveXRV4J3CSghUeHLiES0BX5-FcRtDBIDQgiMtUoCc53GvZB5JUh0-vyPVF6LN4CzKkvyx7rWRkA366OTRt5WukWFW4ZzK2p6MZFtH63D9pGerqY8DZCablPhps45e7oO-TpjZwbritAiVMK8UeAaRfvr-5Ndd60-oFHkNPRgwmhOtktvCvlvsNjeSFyNYyiwcX_lmt8aG20-GlLF21MZIh_8bKQL8Ejh65En0910KnBd3kuddbYlfDNMlAdR_pMg_9nBD3kjx3GaLdGA2-m-S5-Jg", width: 4800, height: 2754, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115846829488293328786\">SkyPark Observation Deck</a>"] },
            { photoReference: "AWCwydgyK3y5QsNYJXsUyogoT9OAVyp1Ew0TMxpFGNL0PgdkbZUWfwD-14dxhZGyIBoqg_6pCzWTQWjeZXHyrvmUuZxaBkSAL9Ai_X3n40lBdHjA-TXO1nma-5tmUT1Gym_gfCYQoYvRzwZmrQLfQQX3TYqnQ9XM_7dbnZNBtVTGll8aqcss-GXA1k1dQGe_vZxT6p6RngusfRXOP47mgnx277-zoNB0mrPIluNftmLX4ADN-GGW1JEMXRazu3lVr3TVRhGsuQAHaRgaHc0KVTOqt_vdtgGqNKGd_TznCvrAg9eNAx3SJN3lL_XsjUFHjYCgfldPBw8YB6QLUXWhYKuvHhBd0Nbz4lgAzaOfMCQaVM6ygFQ-1Bo9RehLwSpEd6VEnsxTrwMSzP-izaJ-LVChFwMy9ae_4MSpv56OTF0uMbc", width: 691, height: 444, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105995477557920143219\">विशाल प्रसाद</a>"] },
            { photoReference: "AWCwydjSDsSrg7jwmUHTUnXLXClJ3gFQvUfWms9EFsxhWUbzZlDqhlu8tvmJFZSxk3wYBlMCR-09IClLPzAYMsIwx8c1Qf1KijUEYXJruOVIKVt-h3t333HYpq0JHJodr4Ldu_sO4-97bT1eldX97cZ_Go1_AN5D3LXItkHHIPLikh_vya5nZBdYWlFW0eSTLMpZ2vtDqrNYvI3iDnshy1ARXU1vPQZM3Lg7ocEwATCdin_gl2Y3Ee_5FNPLjO4n6u1in9FsyG6Zu40OxgLkA1N5qN5WmvPv_m7uyipkiNt5zVvKDR2ZqtyqrJyMEdsj6nsXctasFRzQGJC2nNNtUm_hVJyn4ZOBbjCzLYn6fatBsqx4MBN4vKEETIuan10WOevKjLTt8_EbJQuxXy2xZhj-K-3pd3DUXmqYo7oUznlQw5pfLxyP", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107165020896552014566\">savaliya nirav</a>"] },
            { photoReference: "AWCwydgXjZR2AqguvUWRCZoRhDkNqMgxK8zl9DiKxSZR6aVVQ1rMnj9KLsV5Wrw4O-ujhDttP7qpelDzgqqjyikeqnoLafJ_Fe27bUPX2LRxIhYiQKnELRYKZZ2w_VhJTgrj7RcTcBXM07-ldJYYQg3aGgtAOClnmAefWrMIJ-XQSroGs9miUySSPDU7SEay6ltwl2Re6qNRfYEzu-ec0sMIWjD1TmibKe72L4BFiY_g_1KXkBBuxyE-MCFMZ9Ie8g6ms5UmwEfcWwVn1deYci05uFE5qIPajLpmBicQ2iU3wK17JbdUohpjI9T3j_Rvf3lH5uXKSGMDDQIqQvWuJ5HR2QolV3giBOB6J4kNkdhTzZ4fE8ilMKQynl4LFHgqPivQULu-Do_UdXXnBAmUQvOvtHaNQ_2X7n4HiYWfAwHTk9Upyw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105594433125180869806\">B NAJA</a>"] },
            { photoReference: "AWCwydjRvkAoum5dNmOXGc3wthrEhMUwi0nF-EqANVWLXE-AzwuilJf9cSoHbbWvutOwOewIyWv3azufNka7bUx9Phf2HwSCy4k6yozio7DVGmUjupKyyiH74tyP1ESK8f5HjFb0W_E5hUD1ftRa4iMuFHFGFhokHv301ftQ26Ys16QfOukUkxbAvb9BMs9HU0D5G3OT6QazApgNBWiN96dpuPwNQq7lEogzLOXKR3bAz-rdyVhqI4RDFkZCNSLkKMz5QHlhcZIEoqDb0kYfjE-a803xSJ9NBhICwggFXg8fCMLonHkwf2wGd2VtW9Ak4B6vgq4qWkBErOv5MbREzzBx1Fz6F4KN_mdjHD7NeglTKvwNWU4LNlUuZt9zBFTHQ57hHgAmjohMur_8S5OZ_369KotKIxM7Qc2DJS94K3lZRCKGUg", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102744106714828380968\">Danny Heng</a>"] }
        ],
        summary: "싱가포르의 화려한 도심 야경을 한눈에 담을 수 있는 최고의 전망대입니다.",
        updatedAt: "2026-07-15",
        highlights: ["파노라마 시티뷰", "인피니티 풀 뷰", "일몰 명소"],
        tips: ["해 질 녘에 방문해 낮과 밤 풍경 둘 다 보기"],
        hours: "월요일: 오전 10:00 ~ 오후 4:30, 오후 5:00~10:00; 화요일: 오전 10:00 ~ 오후 4:30, 오후 5:00~10:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "10 Bayfront Avenue, Hotel, Tower 3 Level 56, Marina Bay Sands 싱가포르 018956", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=588707449624412211", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A6%AC%EB%82%98+%EB%B2%A0%EC%9D%B4+%EC%83%8C%EC%A6%88+%EC%8A%A4%EC%B9%B4%EC%9D%B4%ED%8C%8C%ED%81%AC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "센토사 섬": {
        photos: ["/images/singapore/info/tourSpa/sentosa-singapore.jpg"],
        placeId: "ChIJRYMSeKwe2jERAR2QXVU39vg",
        placePhotos: [
            { photoReference: "AWCwydhK-BJzLxFQHaVGnbWl6PZ8TYaINjhTYp1aWy_lyEL2eMJf3HH3ugw3PIyjj8oJpXtNO9q2oBhm4Ef1xIanOIDJmzaxMwVax2fFdS9xuFoOjsWYGRZb9gNRJpFz1bVyt-H_iR2x6X3l8FIDDkGvJiWwMWJvQKWlBEGwG7GmwGc05pMpg6jPWP68Lg171TnZ5-0gwP3VFCZRHzwb1YbJ2x9YKM591FpE3dcx1H7iUFKQ_xcriU9TbMkSiT1XbhhDlNo23jS8_2P5ktwK4nA-MF_FzYLPvbRAPWMB5ue3dqooDQq8Ms9PNBhjW317y5XY2CHwo8TnS2h9cmM_0HAlIapZA2uSliRzuhMucgIIK_yKsNxxLsVjA9hcESyITUGSS1dMfc1ymBV7Yv4Pc-bnB8k73WKz3dXSpUoNZONnf2oNww", width: 1080, height: 845, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113011531051361937710\">Saish Naik</a>"] },
            { photoReference: "AWCwydgDvteRj5oi99CW9dv8em2wfGyMjaTmXeJl-I6XXAsSx9lizkuJcHHhsWoIvLs54qJaQudUzoFszJtB59i4_rxfcn4FWTEOVD9KCO52NvLg89Y_KMG608Xh6ylHTdqjjdakkyZL43bc8NWlZ56kdIXJZNlKN8EmdqRdbnQF9lH15oDxij1EKCZdnMVXRw4tvIaclFtaEavRpJF7wh7lT3JxBT1AymHJWzch--217EprXM4i18OirWBRXCABzR6TqMv6juw5FVUyD91-WazhlXItxyGHdMQ6Zf_y_LdLEXg9cYq_OS69IXSJRINFNshv7xTFQhg7qXAvaXzLavpLlSjiC4EYQT7VnMwn8u4fQxf75C7elgyPW19gbrrN4re4UR92n7y9HRX780dcdl3eIDaAHFY-lRji-Il-9d1HI2Q", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111825717536992824776\">Mari Ganesh Kumar M (Mari)</a>"] },
            { photoReference: "AWCwydgeodLjmkIT1vcuRVyMO0vP_b10C5ERGudspBKhqS5YFHe2fT90VrkWTcbPsKL55_FN83M2raKa0N0c4iPIk0AFgwHWCvWCmGbPd63RKb1hvG-_EiKzXvSmhBNzVh-NJTUNNRLUYQDNcjfLoo_JU6R1aQJpDy4atUwQpsPowSFL2k5Tqi9PHNm_LJdmC1KD6Zx5Kv8iBMrGXLKN23Ir-atU9PeRQxi_ICgNglDBNi6hsHYTghaRUgVCeUuFR2hNhn_hOWcFQbpgDUbmC20kxLSKxCsJF-DLKLrTPj3-7Qd_V1cu9RKQ3U-2-tfz9ASqJG39aEpe7KuKUAUSsNCS4X4wWw0qWksqV1b1AbqAxl0PuijIQ3PMOARUIqd-yQjlU5zwz7q-GVHaRMKxgATM8vFfgU3GfYlyrTe-HM4nnGs", width: 700, height: 466, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109235848694789437661\">Mohammad Salman</a>"] },
            { photoReference: "AWCwydj3P_pU-L0H3URv2qA--gDhCfRJj4d3AkSA7gnllmJBgV_hMjotKkFe4tMccZPEr1Ulh2AdjYeiwOdBXal0OArv4lCIHIUs7ghF9UORZw-QUcjUrPv7DGLkrwGujQW96vIuoaWjBqR-ZGz1cRQVHeRGi81WcqnJYa_04NTd2DC8rq52mv6Qf_JsCgUDIruZYEoRac4FAnGFlD80FzJ26-TuO0NZQOfOHPonG_3onHkrRtF6xgSpAf9IEG9M-TN3Qw28Ap5xRHNQ3CnAaCHNm6t4Nmyvj_n_QXtkPDA872I1VjVESL_hLyPw7XxRtiS8vgKzSAAQEUShYRc_S2EovXC-BWgV_S6ukzvVNRTLgNZ-Pd_zvA7lUJ9EOd7EGrQLqEGSdXs7R5QrBsCaqCJpW4lgROVdS4CCewtTRoDvBg-61JWB", width: 3510, height: 2687, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108346019978321917804\">Tsang Lai Kwan</a>"] },
            { photoReference: "AWCwydiJ41KObRujmJxQ1k8Cq-sWkqtydlvWIuRGdAaZoCWe-GxUDR4hmpgxs1VrXwiBATbxmCFoRiUsTnNC3IFa01L_xckt4EjCMpNIF7cik1ThPW4ySnKaGqNNtK7dIc8fIKWLQdCOYuYJrcwTIc-3HFq-TNUbuvOo6KyYH67gjClqUrBZUx3in_RgrQzuw-XReWZGsbBjrXWRTLgQS2ckKSZs3eeZ1xxvd20bC21PabV0GcH40pXIVwNjsydivdfA79wF3FtqCMADAKVPv1Oisv1T-qGA-gocWGMRaFGMqKhKAwwxlWJnrKRmDYt1Z5luu3HUyfOiv2a3VaCvgEavmDqFTWyoQ3ohx8cIXiMBmQx_m_1-aZT9TWMghs2T0_Yvw0YRTtIZrDDqzKPgaCRn7y8Td1zE3oEoqmH2UKw40wv6BA0", width: 975, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108955551125194807486\">Harikrishnan Balan</a>"] }
        ],
        summary: "액티비티와 휴양을 동시에 즐길 수 있는 싱가포르 최고의 엔터테인먼트 섬입니다.",
        updatedAt: "2026-07-15",
        highlights: ["유니버설 스튜디오", "루지 체험", "실로소 비치"],
        tips: ["하루 종일 놀려면 편한 신발과 선크림은 필수!"],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "싱가포르 센토사섬", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17939587005458423041", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%BC%ED%86%A0%EC%82%AC+%EC%84%AC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "유니버설 스튜디오 싱가포르": {
        photos: ["/images/singapore/info/tourSpa/universal-studios-singapore.jpg"],
        placeId: "ChIJQ6MVplUZ2jERn1LmNH0DlDA",
        placePhotos: [
            { photoReference: "AWCwydhp8dSAZbgVDdgR96HMo3YXh5Hke0ludoJIYE-xFp5HR9zlPEks1iOkPLbaWNvTCC4x_c0gW8zExzNZ-_Pez5vSr90GkX2AMAGt6OGAR-DNjz-ihT9_XZYSL4TzD2vrY4GVXEOHKH5GnU4MqPpA5iym7-ATmx61tE-FbIyJu3bswP_stgV6ijWTbP2IQywZSb3hE2wvgu4UnRZn5K0Q3ZsnhnBNx3aFC4sQT-eyW8GrmOTeyir1ddqibFA-7SMkMd3ScFf4qGhZIQeX_PFKbk5Pa1B8uPesI5mdTn5ktF8AcwQDyR_W4kxISkdnHSszU1fBOgNpeksGKqzCPDoz3q4sixeDtUmR3OfY7zWv7CR2AuGu0NgjHwaBt43-XJykf3tE0fIfJ_W7Ewh9qDG8cGj4n2u8k47vJPOsqvHjWTFvvGyT", width: 4800, height: 3599, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103615691078490664381\">Peifeng</a>"] },
            { photoReference: "AWCwydi9WQaV6ooboG9WnFlRx9w0JW4kQI_0RuP5DOCzEE8Zezd7uBBnMZkXBo2NtebQKno1_xXSNI_z0lNmAi7ngRRN6eAnI6X6-T71OmftAiaGMIx21fgdsO8-uSZ6HqNYjauVwDF4y_8MZeuNf9S80sy58LqW5Fpwk-hgXxpA0J7MhHpZY3iB_MZr_fvlfiNYJZKoCsQz2pKvNca_4mObXQU7P-fnc5ARnOdwZ9L1chOM_Q43C85SCDGLR_urgTzf6XePe_YSTIDoOUr4yfqE-FtuWKYAAmnvM0tG7NR4V6dST9RqOUrN-y3fuMI-uRN19vq361XWdvVGNxgSC84A9E7xqoz6phyeUxZD_bdgVntmBrUn9juN8vKtZUq8SIVxmWoYfFkCDYTCU8SituoEnVGyXLA7v4z87-HFMQqaNAcuyyI", width: 470, height: 378, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116118922369668133073\">Avinash Tietler</a>"] },
            { photoReference: "AWCwydhcT4GWbFJu8L0T8J5TW8dnC3L-RT_iwc8allv1mbiQvsfGrjMTH9ghm0ggH0nKH4wV_fJhkJ6n58Ai-8gwYPNJrx5yJVf6mQEtZs61Jy2Rt-A7QCnQ_bmOSQq9ri6dbSM0l6lW5jaB_effg3B_w0qBmo9_5_8FA-VcTu2rPO0_S-3AsdfoFBrMBvWlQsf8lXWbpRgUbHobaGP30DQqHb-3o6MPANe-ANDwa8LdCaQ6Q0bRPjx8xO48PYlaIFbAPEy0Dui_7NyseihyPztbKn2t6CgZbtP2bs2GsZ7YAbsMGU2j_5iIk5xBexqNbiLIqyyCE9cNSQfTzwzqrJeSC-6QEv3kuK_rg0LVp2ez1XYVy-PKDb_WutrZIXQkhtTj5ffDxYVrN5T7LbKWbFln7943Qq5RrUBohi4UE7J49RA", width: 960, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117925953730462401764\">Vijay Gupta</a>"] },
            { photoReference: "AWCwydgo_JX8MF-FWXqqPME_8FIBbrWmWzG9IjCITDQQrFy3kreFuEM0w4j4UV-dmTztnsb_LZj-FxaJAgfo5f6jKMzt_EiYxChKBYyv5hphZANSQdpgGElgM5yjUo7rY9nJMxj0JYZoD6gTqMHHvpxaofySZ1zvzrjgTKBUbVGQrsTeoAj1O1NVf0Mu_1boUNYeJsXvkfGInnMsZmTRgyUQJ263dLdxjdbjaOL1z5dAZj40YEMnDUNXLAPucQXAsLOSwI1zj3b5eHTZWvOD-uyKw3URuv7_41pWAOH8tQ2XKss_F9xDUjgSMJIU7tsxyaLqowQJPpctBfRogCLyMzF6it9Xwz2vC28antycZYffojsLv6EJAR2X4St-zjEQKYqMUloO4SSauB50_sqVvKB99sPBMWfsWG2C3zjjdEyppk3jmg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110179777159398655887\">Jayne</a>"] },
            { photoReference: "AWCwydjWnMrlvrb_osyLHTzKpSX8pXIZYURjIE4V6ZB9pT_cHAnL3GJLH-NZfkBewEpg_-N_RHBQf0Vv-TzgsM9uxuVe9S-_3TB1lBjxl5QL36tVWaOYU620iydQVJw4ryqVSnWNQjw8G55kFDNTlTqG4r10Ws1F8i60WsHBPnMU1Tfov_1cCG8ILMu6MzKcO0aaDtVqyWCdnlz0uoPa4TFon1kGXPr88za7DV8X8Nw94OFF3GIHltp3EFj2E0M1hd-vw9X0Lp-Oax49dG-Y24q0GSxQiT7KJhzPwqrVQDmkwHMk9UCNQJy1lYsAH9tYHQltSFSOSjrdqn0Q3KMip7NCw7EqWYkzQhAEoI6nHPUlXp5sY92lmCzTRdFcJh8nn6tylkloBxRkILA1eUEJscNnGbAv_qWgWsAw4DOSkG6FG4bkLQLTtZ5BFHiePXdFbQ-6", width: 623, height: 468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100642361879447156559\">Ravindra Reddy</a>"] }
        ],
        summary: "센토사 섬에서 즐기는 짜릿한 테마파크 어트랙션",
        updatedAt: "2026-07-15",
        highlights: ["스릴 넘치는 롤러코스터", "다양한 캐릭터 퍼레이드"],
        tips: ["대기 시간을 줄여주는 익스프레스 패스 추천"],
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "8 Sentosa Gateway, 싱가포르 098269", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.rwsentosa.com/en/play/universal-studios-singapore", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3500426646667023007", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%A0%EB%8B%88%EB%B2%84%EC%84%A4+%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "싱가포르 동물원": {
        photos: ["/images/singapore/info/tourSpa/singapore-zoo.jpg"],
        placeId: "ChIJr9wqENkT2jERkRs7pMj6FLQ",
        placePhotos: [
            { photoReference: "AWCwydj7trUCahqumDgAZigvna895f36oDhxce_dNC30f4iFJkyAGHa-qhB2E5J9sVIFupJ-L-ybUghh0t9id3WdpaHk8XEfcukVNmpAwoFBNS9S3FGe-pT3JlorSeTm-0l_4Yx0Gz1X9oQRejHjh0AtXf3eqAStBTkLxzixcJzutejjdAVa0KdOt0fy1QldLZGtm-E5CGwWBY9mUvTJzuzJ2dZQ_sHsoHsHmbnjTsIZrtkHlTdYKlvJQN5dD5-ofyLcmkl6NZS_RoFlte08U53iBSO4sm75qj3-Yf15TsQ8YGobrvS02JjuniVqaDoZa_yP8IqPPfJ73j9pwP7sjcbiKxcq53jrgW-6p_aavSwlZxYkx5lSGymC0oRoiLOjGL-40spnTL4HMLR8txgqVt_9r5o5prEJrhOSx_GGz05VMXGTVve47RkLyqzxjSF5l8In", width: 720, height: 524, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117944932247087804557\">Amjad Shahzad</a>"] },
            { photoReference: "AWCwydhJ4qpIzrxIbyhcWpnOOhx8vbgDcnO8UJHnfO92MyFId_beABGx1mNCNfGW-YXNicHHDRTMdDunGhleotVU4rF7Reb9dxwO3mN-lJZrzqW8ncMNcA_4s8Vr0nP4HXAB8805bqHeJ3Nb1b_uzJcdfuRtL1ZRQSehuwoEQuq06O1J3UhXtXmarR88rlzWLqzeCEUWzJOQTkmAC2YvDRKDblvyQCOJAIzpujGXw_rtaRs1a6VmJeaM0s5UXa62JmRZLUB4Ae-SbMbuaPIb8BpDYVrZ4GU6OH6wPiM9gaBkdGhqbRiD6D1hqNRzMPl3poZcOiuoR3g-JijpMlB1C3Qg6IxNTlFCkm3AvFMA6XQ8Z-ErBGTOEtrlLbRCn6JOM1SVvBWY9ybz-vqHHmNxdzDWc7KnN6h58L0h2foLX88RVxZ723lN", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113726979526942487363\">Sean Tan</a>"] },
            { photoReference: "AWCwydhIjNhVGtWZsI4Jmb6kz1XrRfevp1R4eDBGgAJTQMCuAyaBW-sg7-T3eNG66uk0YA6Kru-oFr4ZVGtus84CCzYEQi1wBam0Cp13NkhAt1v8dq0CbXB3x59Sqiq43zLEPSLAdJmQRI9OgYgmx0aFZSAO49cEywL557MQse4_eVZdqgKFklXJPlAWAYwbt3kUiUnT1cw_Pg4DcZ5kMJM42EydfYoCvPfR1qHgSB-D-57I-Zs7qUFB-6NRCwHkzCpqFBtfQfzfneTFaFIA36eL68rhIdDjgXwXcbtqIGcw9tBInMS0NTm4mVWZ74qWAvTVFUJBtSRexsORNnI_rKwIVi-tNrA1APDv-Csv2E0tPxCssuNEBVyPkteLpPckHodykLFmFcNRXhInjGRdbvQ0dDiWUIDrWmmPBGPRSqwxd3FUkTak", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117183503001257294166\">paras shah</a>"] },
            { photoReference: "AWCwydhEtC7NusUg6nULSSI1acO2-BDCJmBDBbbyuD_3kZmXx_11u9UkdOORKUgRE-Ew9BiI50eD315RcIgtBBQbCz9cBToy4F0w-NIjZk3Ik2PmOtXiKpgx8NxJq7xusjh1-2iJERxN9lfv76b6CmTgJ1PfDtNstGnGdmUEPRm-COmbzS-sRIt2I2SfPn5YswMdCLROESlWQkGlo5F1HH6ibRnFZeEi4FEt2984XfWMU3sPMBkrdbF4ui9gcyhhrIyns1fny07OUUg6C6nFm9_FCDzDIS9EQh74wBWjPN9UpGAWEqWKsnyqS0b53XHGBmMefFT1Gkh7qrax0TPhv6Isj5xivu6BqLxqzNB-gq348PY70i_lr0sLHHeMKtn1HdBP_Nsms21mdUqbquA5zI8e_GvBwxIAUx8XdbRUmLCjZ53GhME", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108515564582551576615\">Desh Raj</a>"] },
            { photoReference: "AWCwydjta5UKOdDINgVQbI1O7yvRfwrn2Rb2cUC25EYcB7_kGkMXz4aJ0OOgiyn-M0FoGSNd_1TiMacB8dWa_NcY4aBe4uv8jUPqKz3wcoT6MKKHyu1zcDo0Pl5W7VfNAy35awV199VULjOdrfWjySJEORs-MBDkz4F5iVXRwEZSPGCkZT0oX3svWK6Q4V5v0LF7W1FmNFh25pThUSNyK60jDhWCh2UpYB5VmoEJlN2X_Ou9pVumu5Q7cOOjfnTw5ub0y3V0Mi2qjm_Ptw6-Y05bYzytOrF7qD2OhHCRIVQkPe_-K4C2iCmqa_ctgeJ2ia83OWe92WvAtRsBdlVZaGcqau1niNOLGUVNNw-EXhXIxfQPZlRD82GO6cTnIxZ9eAg72qgl1-OXG_nqEwg5heAYnU_EcXpAMBomGkY8IsIoDcmyQanl", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107592262535720741858\">David Ctw</a>"] }
        ],
        summary: "자연과 동물이 하나 되는 오픈형 사육장 체험",
        updatedAt: "2026-07-15",
        highlights: ["자연 친화적인 관람 환경", "희귀 동물 관찰"],
        tips: ["더운 날씨를 대비해 선크림과 모자 필수"],
        hours: "월요일: 오전 8:30 ~ 오후 6:00; 화요일: 오전 8:30 ~ 오후 6:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "80 Mandai Lake Rd, 싱가포르 729826", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.mandai.com/en/singapore-zoo.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12976272166016981905", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EB%8F%99%EB%AC%BC%EC%9B%90+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "나이트 사파리": {
        photos: ["/images/singapore/info/tourSpa/night-safari-singapore.jpg"],
        placeId: "ChIJ9xUuiNcT2jER49FS2OpE8W8",
        placePhotos: [
            { photoReference: "AWCwydjrlGu5QYqhvzsIHGYNili4P84Cwur-XPWET5u8sJfmVOyhOSYuxtJUdeC-YYl64XpOEzz3CjbV9FZjoJ8W8bKahMniBsmIhwzVur9h_0HV1I67OZe2LTwWYZrHqbnkHxAjc0BOP21sOaM2b0gOcrVkqbt0q8gR_IxesPscmJyefcdmBIMb5Pj9RxphddJtrGkk7JwLK9mgnNt_xzs66Ytd4GjfvUqttIFhxlcniQTkbx6ydqa89PFcJYBAlk1vNR1vIQL1CkbCZudtDet2SOhyVeFMLdM57CPraV_1aD8JQB0VAsQzL1pduh7BjRB59P6KxU2qTsHKlKi4RsfSYrR0yOXbPsX1FTB4kNiLBssz_asPBtf3qGzhRRif6SHVKWNUSA-U4eWrRQ-fSPYVCioDd8dbPR1JcSHDBgeRFxOoP3A", width: 800, height: 533, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105762448789476736050\">TEA MY (Mii Baby)</a>"] },
            { photoReference: "AWCwydg5KrAE-_WZBZeMnXmfpXmE6mKg0xVQs8go6V-J3dWd8qgLS3tLqcjFezPdwrLiat9EG9Bf0bf-rROi4_birK559XV7GL0iKx_1voxMmUL3--h7VpuiM9GfAcYc-ojek57-DXRpTMAX70Qq1XF4A86ZZVCZG2wIYLtJuF6U3N69HpAqRN-VXPH3ixV3iXNtcwBlIyTD9Zf1AQf3_nvMC8VHNMWxHFj0pMiZt6Ho518J8d-0Q7Z9fVDFpSfX6lY7vzXwAm591vFMG8ns3VQWAjZvAJ1figeJW64dqJMORKtN2NB7YZeMzsjtgV3EnPcjod0lX94OOyRN-nfSNIc6uspARfapOQKRiPorxkEru_YCpMyDlwiGNCRQQ8bMEnqROhyvc5qGg0I8yfgeTxnxsHVFbqFqz9DeWTQETm0yj4gxqhOm", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104325905605276536875\">Olyn Mediavillo</a>"] },
            { photoReference: "AWCwydi26m_u5vrD-W5qkXy2LDHGIK1iJ6SpP0aA_jgS77ANDULnC-5R5fvRe-m5CvEDSxJ4nZfk6460e-8V6KqZM0DWUdPV__MVdP9gX12T5GZXqcox1-DN_EylCbia9_ZJOEJ-4rqo43VShCLEQ9W_Ytga3b72Kk7mItIr597FUk4iZnYuBrODUM6DNNG8KaIVH9FKTbI7OvWQExL2WL4sVngvWzTb1RJyGvano0GpvZJCfWsxp3l9psrdokONmQYoXri_66rIG2jU86q49XJ-NuaVAAxJj-00k6xbEi_nWuCDN_dP_PuiwNgJ9WWuswo6D5jtmnsIgxjwpSePJkmWv-NQ6vkFvwAHvu6OdFAtetB0Ai_58SsUh4vQA1UJMCytCHt2flB7lDU3By1jS07Gqg98qtbzAlzjtCE_RfUid6ytnEFOAQnDL6xJCOn8tw", width: 1080, height: 1412, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114465429574363989369\">Lin Den</a>"] },
            { photoReference: "AWCwydhRb4EJv2bqaWDGtLOnp_XHjMob4A54mMmOvD9in3BGFf9GG_IGqIeO-pNQW6g6CJjTaYSH4Is-QYSN-W57Rr2M1PrH0me7aGSwTXwibQkVNKRjOLad2-N1GmKJVe-l7itzUryKECVLoyFtNZExD6wzDqjkoc2kjs0Bb9tFne-CarkVey4a74yoMqeuJeVpaE0csjfWnSZTGsLWLeEMPTB9nqCKRe1ujta0pSL2kkrHj-ui6br6MrujI2G9mfJdD2gDtKbVuS68Tgtj-iUjVEWyFchItwpywBrArCc-VweaZQeje220YCmxFgecMJ8f2zxo1TpGsIz32lHro72C3al2hcfXvaGtp98ZANfwVfHDaxu2PUuZ1gtOamygVcC-ldDb9DwFR3-Tzzk7ldyYkIV7Gmx_sjTnOWlqo5AJ-Ryz6vIeUhqfobopYag95zWZ", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115851785737919185475\">Dinesh Singh</a>"] },
            { photoReference: "AWCwydjvIL1P8EUPCIyvoPoODZAXlXvelODKeO12AoddpA3DUgtwSR-SS_nERvBYSWybRS0Ui7E709eL5OswsBwzaKzCi0yyGc9unbEvchFfFO9t0w0B_GV_BXtBqKKt8duwOCRdO2e_iDT23nKHoSJtAE7Vjqw0m5NXH7-z00KD0uDw3E7DMLIGiYk75byeG8q6fpuntnlxBfsFomMTn3Na2w8FCneyRjvJp33_DFoa3mfAcuvWFr_PDj1ylkVVq_0Wa23hFBbhkxAj8muPfjCuzJRwbSQPccZ1Y9xvqaCVh35HPNKIILtlfqK_sTIsSi_dO_15WnByNM5FbiW3tfoAKflkkLCjrZPw5EKDOAiAbYoxJiMWXKwD_mUrTSqWZFUrkmkEAxXqkZes6UlTpfKwhGprXT03M-PqLplnfzT57IYaBmvQwU-N6IS6m76GBY0C", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114451450065820446456\">Dr Ameya Velingker</a>"] }
        ],
        summary: "어둠 속에서 펼쳐지는 신비로운 야생 동물 탐험",
        updatedAt: "2026-07-15",
        highlights: ["트램을 타고 즐기는 야간 투어", "야행성 동물의 생동감"],
        tips: ["인기 트램 시간대는 사전 예약 권장"],
        hours: "월요일: 오후 6:00 ~ 오전 12:00; 화요일: 오후 6:00 ~ 오전 12:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "80 Mandai Lake Rd, 싱가포르 729826", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.mandai.com/en/night-safari.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8066304183039611363", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EC%9D%B4%ED%8A%B8+%EC%82%AC%ED%8C%8C%EB%A6%AC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "싱가포르 플라이어": {
        photos: ["/images/singapore/info/tourSpa/singapore-flyer.jpg"],
        placeId: "ChIJzVHFNqkZ2jERboLN2YrltH8",
        placePhotos: [
            { photoReference: "AWCwydjH6_MYEGkWad5cn3mz7ffmZ7uo4lK2oLdgrXd7xuJJPEZXss1oKQBU1lEKHKgU8C71xRsJM4c6pvr6j02Li7TjilFSIsacNK02s777H111O04BLUP21tPYbcj95Mh2BC7TMMvQ4h_U5ABDi2DcCG1Avb4mMpZsyHOuegPwoslEa3C4s85uWLoh8sQ1XGN4sOJRvL6JspUhzEwLblbD5fRhF44d_tYQ5osjuFUR03R1e3xk1LcCfAxGiZBvHM25cwIsJYT39A3UIb758yAtx6OUbNuJrmSQoWtMYr5J7BC_064Xzi6g7A61sTyS_OiFNN2lSRKRMolqJ1cwKJTQ6zobd0bnNztVuNNk4wh1byzz9-PGVqLtO0Lp6zZNgrrx7vakAl8A9UA5hlwELN1t8Jzj090inDxs0y99Fwtf5ZVVXg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115547351276037607529\">Kok Seng Ng (Paschen)</a>"] },
            { photoReference: "AWCwydgKtJLDR4UDN3UN-49cAHQz0BGW_kkZVTCtww0H2ToPvsUTtSgRe6E3h8wTUGwQU8xWNQ7BQNQZZ0cHuJev3PBeM7eboCuIAPBuGSpLXS9XLBLByPhECVIa9K4P1X8v5n029cCO2zrIXi3mPpyIhmn6nIf2LQdRXoPlKsGcOpgFwj8SiTjVuOTXP-tnAJGObdK5AElE4pks3Q6tqgG-nM3Mi_Xjd-Efq2GTtqNaesmtS8QL20tRsTFZkgbJDzVYwVQdC-DMs12H2-199LW6PswIl8P_avqvG60ACbO83iNn4Wbhc90fzMs4op4KAuLYGvzvEnAgzAUwjAivu6-ytrB85Xnu5p8IOi3aDXPOsPAWAUZfGM4AYHwXw5LapwSzuaiuj13hgnym5TN2T2OgcEnJnq8k0EyCQg-_Vdl8LAuVsEdn", width: 3991, height: 2661, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110775917609102837825\">Valkyrie 8411</a>"] },
            { photoReference: "AWCwydgPpp0yd-JxCA1mtnLXsEHx28IqUyWUIRx6T6oLO5R0wVwflEgDi_RKmtCXCLMlLNfQEFQoYpksDGCu-pOSNCLhvs_M7DfAjK0Xmvw7n0IKv7YpvNt7yctSuGMTFctUDIJTqek9P6ECXBw_d2-GD2-5-_92dWDjSC_cm-8LIXa9eNl4f_824JvHU98iJ3HN1ZiPcJ-iCshF4yow57vmdk8iWqn7fNCRMTcRI6bIZRngKNFAKJ2BR4uVVhsVES0LUgEvMj2lNSWuXpri7YcA_rs0cTID8UPXvt-8IOk9PNP_J78EbfYpBMREGB_bgPej7sGmuUj-ZKjsKxiNBHyP8y2ekefmnyeQDLrJsFaSMozMr6PDo1mHZjRrvA3vzVAxgfxggUzjEC9lWD2xLzHmtKEPTvLZEQwfYElQg7H_riMqrjjT", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101651688861591339509\">Adnan Almuslem</a>"] },
            { photoReference: "AWCwydg_db58EQNT1Y5qnE9BYQdbkaHv07xiElNPoLvCYmR-OzlgmLF3QfH6bjxbUHSvkEnYEzJqwgm7sPdsadh-2ZXS0d7K6ixeNO1dAF0Kx-pfmVugQsyQLid5zb9IdEA6Dn14mGgpylsozBt-MVpUsePcyBP1d3fJwYw7GTRY5mwBvIC_fBo14ji-Rjvaxk3K_4xrdgP00JMIqUOVv_kji4eOLNH9VmA8Y76I5PXKgOoiwudDfHvgB0GnOzanBGnQAPcYwgZwVCpOj0wVFkA1qo1cgEqZpi3nyoq0YFxJpgIkBYb1nDh4UgJsg-ALr6x1G9d-Bsr6tcrXDhI_7GoJby3nZkXybmn9Xe4eFRAS6i0FVUsCqBL2IeGpgwHSsvNu_cijH_4efeTtnpAqqE1kObn9UunyNZA0QPygUu2v2jp9wT6T", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115146144803669537445\">Brett Holland</a>"] },
            { photoReference: "AWCwydi0itlUhbbQNnjTLikrxUKMO1vRDRTBG3947Bqup_h4MpCtSNkW7WWhF7gLhkce3Aq5f_UirZAyrzkM9AIqEkP_HghxGBboNo1o91tuz_FhcM0rfq5PQKfK2LfgKlVVOtLlegehJ1F-6ncqD_kyb48GOckBQeYzOCv2fshj_zOwRfGHYnlw1jNvzrYeEGyHCjbFn64rU9lu2_fu_njdnxlu7noLOZPDw38wA1ypo64IlTiS_XWpvVwQU49xv0Ij62qoL3I-IKeBXKFDxf_td2qJj717xmzSwdX1FLitai8jd5A8udflA7OZ4vXLbzuy1WJHSEbjI18-jMUUAVgYM7Fr2a9yET467DOQl6zNvGV63egfH-5Egbyba5zC-l-DtTbqTuNpaSq13OJnorJOOyCz6cQUAKNVBKlr6BmfozpEpXOOfdXi3fRwgHqSRZDm", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100276539321101450821\">Indunil Prasanna</a>"] }
        ],
        summary: "싱가포르의 아름다운 스카이라인을 한눈에 담을 수 있는 대관람차입니다.",
        updatedAt: "2026-07-15",
        highlights: ["탁 트인 파노라마 뷰", "싱가포르 주요 명소 조망"],
        tips: ["일몰 시간대에 맞춰 예약하면 야경까지 즐길 수 있어요."],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "30 Raffles Ave., Singapore Flyer, Singapore 039803", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10438516373862103395", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%94%8C%EB%9D%BC%EC%9D%B4%EC%96%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "멀라이언 파크": {
        photos: ["/images/singapore/info/tourSpa/merlion-park-singapore.jpg"],
        placeId: "ChIJBTYg1g4Z2jERp_MBbu5erWY",
        placePhotos: [
            { photoReference: "AWCwydj_y63XnTUZ9-NSBvWDAyUUcxwZSx0ZYUNXq0MmL-sQC4zt9ND5NqHLc3y2AjNNB_Gbzq-Ka2_9e49smdSlCPqlSpWSASgmnypSgtioo17HW8Xn8UHgFIyma_IV7165UwAfGc_sUMRE-EpcEKRa5FtaIqptW2qhfxoxxkuwExtyaGfScIbklckm3oUOlqpu6NfTnZdxYzllZIiCxT24uTO12Qk_PNaYSD5xHQ0xLxg3GebEhWCWexTt09Y4bE1dEZGHujh40qtIPCvd4g4iPlygFVp5SKhjWZNv_hl_eUZgAaShOQptPkqF573-TqWzVe1Z4QPScmQPNc_3nDpR7RskM16lZdQ32ijsEr1DM8zWYulhLG2P9QllBtRISxhUP_Q04f9fsu2eJfiwpBYpAlABL_mBcCaNolYuFzwnNRDReA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114675362677853352241\">Rumesh Bandara</a>"] },
            { photoReference: "AWCwydjS5spsF9CIcA6votqfgxZ_ELeyKJHLhSvy2lvR8X0E2GEksmtaVpv_eFQjLUlHizAKKC_fJCz2pUjhhU7kYAKha6pIBR_V0SFFW4cOU2qleN9XDYLFpld3s7ILhVX9XBJtYs16zh4-CIVT2hR2-xgcBWD9X_XmcQ3BFvG6EAhOWUAq_f-EQjRhmZeIkahCrQFCXGtwdmG-PCF2l3grPennoLebgyiN_HmXU44AMyTObdy5XJgiV_zkJwesWW3siEmd_TIE_TpuTXi0hKsadmajSQgdwHU2tJxmv-gh0xwlfzbXGtexHtkaoY5djJgYoCrstvB_bwkX2QyivgbWB4sybWndJLu7v1ing_zYz0ii8VS6Fq24unQ1_nv0nl9RbmLSUOxYGYtK8FRWvTDlwjY-uvVyjJway9cWJMBcILxh8Q", width: 1200, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104149828155529764361\">sathaporn kumsakul</a>"] },
            { photoReference: "AWCwydgri-54CrJAsamZfG4T53zRmbGiR6LPdaK8qRg7-4rBMwFNQZgRyEa9pHkEXukmH45k64IQa__2IM6pncIxWwDA0Ka49CXW-XYjNqnETnUOdHLDN_gaWEBYwSBLZ75GWcvBHsDuiaMZgGXxmXG7qJGNtC-6W-JQbxbGJeU-XHjuDRt0rzlk_iHKKfFCb-988y7wgNKsNalo6sa1aJicFD_md2NGs-O8OwwRFbaHCEe7PsN-CcSLFBAKG4tbfxuPhGQ9ZjwmDbNEZwNectkNleXYkK4TJ8Qi52Nqw8sex2YM5WQXVgYc_Xjm_LR_pdhjSDZGYdaaUUVp8yH6fIdIrbOS1h6Mh-SN0-vtdVog2Vs2fIH1DZJ7pBc21GmAA99J2dRPeb28GBXQBk2ffUE0ldvBSpa5WC1giFIYyOGFgxa-TQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110193693662941706625\">Po Chang Chen</a>"] },
            { photoReference: "AWCwydjCC8QIMiqSKqRGkAwN9TtC395UKt-IyA3IVhJTLqaJvHXCajEHNn8CadsVVNdeNZd4Vda9BmX2sZVe-p3H2eg6MXEcxHnNriAZqdl4_uLP5gA2YnimnNOnC6D2XmEwJov9FsK1OAJzNE_d-itVvbUq2ihSWRnfiMTWJqUXRVBJCMfSOgL5EAO0i7zZNuTVqN2CFApalEMittCcAZ272tzB7VuIHobOFiVXEPQqzyTWCl_Da8FnwNEwJy7tZzE0PndzjnUaDcC-gGzjmExFI27HrJJr2yj1q3bIGPnw-q1RqvL6Yiq9FvSqw_SWjDYLDYNB73tKbOxG9y0TJHnClhmrH1n5KixZhToWb-Yd75oIJLbn_oAaTwcc4f_WhMyN98k-Ku3fMNvB9MsvSJz6lsoMSfkIAxdib7Zx76Zl3OyZiXYu", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103311335936575296614\">Rufus Ng Rui Fu</a>"] },
            { photoReference: "AWCwydiQqt79dKdpa8vT4M1NLfO6AYvprlwxuOJ-duocl8jMXulftDEQl8OhcE-qJ6Ixno39F1fK0psqGqjdHPwhwe3J1RifbkRJWia5yIUrJUEETCdKhH9z6moF81wyWz8mQ9rPdxACCRNckalXerj6ALuJfxTFL_J-cimN0tDhtV1MQP8HUPW79sYcgKD9xM3aw6YEq7UQZ4TjhfkvE-S_fGfgyTuNzoyvjSlRhZP1PACezNd_wm-g1zdEBYP5f25ad_h7T40x7blHkXu5QUBBYMmZ79K1FLfvGbcDYnEY6tDDn4GR2GyhHikp928sxjg3xVboCu-DOBmNnndDR32Jm7inEaP3FNbELydsGUwWWRiXtUokZoV8mzHcHJbKNe_29-4vngjl21beRctxbhSD74u0n3pLh7BbHIvII5NgAt2yy8-wjaZ9GTYQCy3lJzst", width: 3666, height: 2760, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113627432025944491070\">Jason Lin</a>"] }
        ],
        summary: "싱가포르의 상징인 멀라이언 동상과 마리나 베이 샌즈를 배경으로 사진 찍기 좋은 곳입니다.",
        updatedAt: "2026-07-15",
        highlights: ["멀라이언 동상 인증샷 필수", "마리나 베이 야경 명소"],
        tips: ["밤에 방문하면 화려한 레이저 쇼와 함께 멋진 야경을 볼 수 있습니다."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "1 Fullerton Rd, 싱가포르 049213", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7398674140980442023", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%80%EB%9D%BC%EC%9D%B4%EC%96%B8+%ED%8C%8C%ED%81%AC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "싱가포르 내셔널 갤러리": {
        photos: ["/images/singapore/info/tourSpa/national-gallery-singapore.jpg"],
        placeId: "ChIJFQzeR6cZ2jERgM6--iWeY-U",
        placePhotos: [
            { photoReference: "AWCwydjlgGqTOTZZ71bRX8-zr8AMmE9VXq8VzWr31l0ojouI2aLi5cGW-EUvqqZ0XDIlGqzhGTdm63K-G8C13qF7H-NqG2OQ5kqWGjST1agpQ2xxGvW0sR2GV8le3BVYzEUpMo5zlOTYnw9nV2BZ2rkKeyeYAtZtEkNCJJTkoZ6oc2tG53r911qT86E24FehgyFhE-Gw4zB_vxDrOFbO4QdWVcqyw9D79aoL3Wsh31DTZEnFLAjjyM4w2rRppncMIjfexc3Ffrue33vumH4itvCsOMTeTGDJ4A7XWCr0jfVCnZarjk6iESxTHTRi0XCokM-ibsLbGhyNCluFfvxyrB-UUrcmoTEsMvRO5G4rC6Mn7-sienmV6ent4JQ_OwZsVLzf45DiAHZa4Drp4-D8OR93TVGkHe1RzxzJDGjcIAK97Q_SuFk", width: 1440, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109463427792824006408\">陳澔子</a>"] },
            { photoReference: "AWCwydgQeS4zlFBLABIHLAs6EjX1aTwhEoTVve4qW66UmNSj5N9zhoTbjOB8Yze8GngGjedr3UtwBGoAlN9t-vgOqISuDSfwH-bLftjRHymeFdGf5xgF149qzhjs9vkOXibKSCvZZQZe27WT1im68mu3Q-z6isA8nsqz02oxMcUH_5IdpcYVuCnY-DL2xbxhqJuaS_JngT7emh4NQCh8dL9DRA4uacW4o3oqs7tliJXrY0XgL078kidOpXWXsmYJvcsO5m_g7nhcw_QdazuUpLNYSal4EAaZ85iyjNpT8rkdn-RFvVid6svs_cpcrIwD09RCi4LrQftzgvhu0sQ9wHcO8DfLKczqW63kCyn3jViju88XTiDIaTnl0ZlRE7p0U4OBHTrRm4xRMSdL54PlonTOrRrb2agHBHK2er92OHemRLo", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110188198383693932121\">Robin Koh</a>"] },
            { photoReference: "AWCwydgbbW3lzly21NfJE7cqGWL5siIybZ078hBMOPQW4LvacOFNaP6Z3VhZTVuQi6V40JCN_uoAU3O-n-efrKSbSWC5sJOHwcPirMGWPfbBDiWMy1hA-93Q2aZklDd3ONnuSauIKT13nL9STAYfIQU4cDgUML_8-kqlfWFxmKep_Q411JfkJ4U8BOUFwHjtXW2MInUPwNJ2sRs4jVoGNV3hyp6NRIULidVMyGdVJZLAmla8jf1TYnK8R4VFvgJY7zQKuGoHfM3nXCjcNs7PFilWA-Uazok9GZS3xZoiuCB4B4QU851j2zAIN2xH0lJWdB7GoWzH-ZTskZR8SnssHMJCiW1DgUMF61uATt9qzZN_Qm9IWTWOIsR3jFFZy89yFTdLd09GCbo1c8PopuM1QvpTHCSqSnJJT-rrFyryO2xugL2B_mE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106593079043031949121\">Peter Lin</a>"] },
            { photoReference: "AWCwydhOHxNEHRD6Sk32_OWAfyd1dGDC5dIZVMtypa892lGBjR-Z0wh_0-0PN7VX0Zl9sv1uskCT2uzWTiUqn-YbctoV74jPP_ZeMtKfjN86SO_1MNpbXYu7cAFTx7Mxjru0w27PwA29OufRU_xOgSKfQ7uUkjB89miXVQTaSHbdxai0lGGsRgzw-HS1WJiyYcv4Kl_mob8HhUXqLON5EvOy2fy-s7wMQObaPmSeQo5ccXyOTeDbbmZPIpC-QBoo0qUVH3UDPeFWU6tHRN0OJJkTY4744pCD2WkMWlCjGz8QsXSVCsImr3Cx1pdPzQL5WoBv9uAZJZdPuSxCK-5g6U10-MnTBmCi0BwUf5nSs6Ei5u966KPw7ZrHTOHzMTWvNvfu6Jt-k8YOyoLdqbpllLAEhbXC1UAUB6XXejDZojkGlRCxHw", width: 1170, height: 819, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111739178098616282678\">Kelvincsgasia</a>"] },
            { photoReference: "AWCwydjv3OUwkilggCcpx75RcC18Sdc4dqBka275-lis4XqaihzTUwY4HL1ISM9A7c3FadsPKpUfH47UMngoxuu0LIBlyaM1kJ52FEAndXHdfU5GZX-GXtm3LFGFpoypBc_txj4n2NqH5NiRVbvXO_B-uTBEpi_MLTj5-Pj6C6awxF8Jg2Wd1fM_-iDiICMWhRR1GCFH71yF3fiWAT6KXLSmsFJmBEuAGi1sDTk9o5iyQujt7cJJ90Y8fgKbw92yhMm8lbRlOfOlNkutu0E3qVieKG3h5vw50NAYFxCBCLNJf_bnNT6Lz5RC0bHSJcx0szgql-7KgL9RE5WzmVWOgU2SWTC82vI7gGYpzKaAFB0op4G7g5krMINH8ev977sHO3nTeK_fMdOfZ0y7YXRQx9JUoBNeTjaLYpQJofjImZXiEfuOeJFH", width: 1440, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114755676886122135992\">Estella</a>"] }
        ],
        summary: "예술과 역사가 공존하는 공간으로, 아름다운 건축미를 느낄 수 있는 미술관입니다.",
        updatedAt: "2026-07-15",
        highlights: ["웅장한 건축물", "다양한 동남아시아 예술 작품"],
        tips: ["실내 에어컨이 시원해서 더위를 피하기 좋습니다."],
        hours: "월요일: 오전 10:00 ~ 오후 7:00; 화요일: 오전 10:00 ~ 오후 7:00",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "178957", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.nationalgallery.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16529228943337639552", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EB%82%B4%EC%85%94%EB%84%90+%EA%B0%A4%EB%9F%AC%EB%A6%AC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "클라키 키": {
        photos: ["/images/singapore/info/tourSpa/clarke-quay-singapore.jpg"],
        placeId: "ChIJEYPxKKAZ2jERCIsTQmAAyKw",
        placePhotos: [
            { photoReference: "AWCwydgVrwT-QuzQyqp2l7VOZj2NvtqRYtQRefcXXota3Aw32XqdU-IsQEojCG9w8E6livLmrUccw0S8kg0HLEUhsqucjH1y-xrfbhKoB0pJCdcsJMu3bWWYDob3Uvl_PBlSRmRmkZHxNOYsaAUN8fpmqWTe97Jy7rhdhxjcjQ2PFwwecs5UdFMkOVJYWXm2ILy4Zvl9mfDYQinYnexRCe_KGW0mvIBkWyj1XF34mqFXQyQyUylQFrHLLmA2rAd-yYmmg90E8OCfvy_05cGXflDx_Dy7evOF6kIMsePSZ9XhCWQu3GvWSOPRvuHwMs5XWsP9eccoBKOzfVDOzRTcY7-HiVgsflyp_vTySNFWkeI212wkFE7UZZkAcdUVwj2bkh2k4AQH3tsZkSLraka3ElJ3bCIGgSD4P7Ya2k9kM2vjLDSVvdCWoXoYgOAgi-pN125d", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103235381099676291640\">ルーシャスLucius</a>"] },
            { photoReference: "AWCwydg0pLnSnglQqx-_S7KUNlpMrhQ-pR7VpIOxLittk2DJBU07U8455dqmTUjE02mvb7FD-ZYY94V7dZ-Mfq0bQCcRUAETACzKAgAZyHDM2mTuo6LUWtGQZ2l-OqhtR67ux_tHcq7j85MN32dRJoXIVwg8l3gAaH-JhQlG6L5G0MnEKl0Gph1ilLb9CxkoKN6Kme0Vv-kK8zjYFlZjSBkGAWBsKk47CCVCtDVPe0kTmbMveeDB5UCS3gA1Q3ao86gFQcNMKcw03J9SLn5d9wq46YrN_hSkhmBjEZqn5OXKXxoB1Amp6lHHnQNFegSuODJr0bs7t3TLytr6tePTs3juZUpQNj3XC_rwtMqlx2_3EE72sPStBPNTk2NsPVPgbnM5F6uyXTkACDGPNzseGr_PW4-TAtm2svcQvoh19gkEaiZ9Kg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105828148194469400295\">Chen Joan</a>"] },
            { photoReference: "AWCwydjZY5iXLGgpqgIvq2JISsv1w0IkNY7m6_f-L30onxxnv00h7Bm9B2-4Epg30POU2yfV7RVAq3-y53g3zOh0vaLvo8QGNoC7HGLdFxNDI9JbxyVZMNQOxyXmZiIo_SXwaUafObbw1nNGHcWtPOU2PImR3r8h3JKdJ9nwvYEPEmdx2h_1aKi9r2NaUGLbkb-scViaL-wtZBZt8-oOW46o100Gy6qoi4--5UAvpx8wXpUYKqcbRhntayQnQpC6bUGaBvIVst-WH8Ke5RuSIwIP3EYTFUiTnW1eelyJq6ARDMPd8KXA5I4aw8eu8T-8FUb5LwGf9xA7F1FXlhxDuuxGg8cj2UQ_oMoGDDZA0ctG9vReW4Ggi-R_ApKhXA34cD-aphtiC0z5MzDncK_zTCN3Uk5cpwvBDRp2XXeeWdT3NVw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112090819788613777039\">TAKANORI NOJIMA</a>"] },
            { photoReference: "AWCwydht78C-jMwg6qzgT08RbVyaanh7FYVwXRzIjqX-0vtey2GPzPXwz7iLFhTFxY4o1p_GGxy44U-k1v9F_2_A4ostVNfiWs8rcy-yJYH6D_6DVqc70v23RTCS6SQAC0ot7fjUeFDXaEIORBWd5BRoDizv5hxMg3o5m7_VRDUcka9dZYYh-z04gXVDUbksnvduGnQ3C_5HGW-9V9YiTrgUB3pmobq_hYkJL_5-u6bM9X9ZPA_AM5Hup9lq3mS2RFjvUzJqCK6lNzyQWRV6SfU4CnsGcWGoM1dTNJHaU6BGQnN19BsuMhZhsixyX7K-xt7V1fHsabqRILq9Rlo4EKAW_IXYbLg0iN0GfFscxchl_FTpGcKmPxFxip2nZBWw0oqUcGBKZBENspWZWOAmYtDQ7yxL-Ke7UViW02AQi0aoZeCjB3XD", width: 2688, height: 1512, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106249971696546693107\">mi sima</a>"] },
            { photoReference: "AWCwydgbQ5vegUXimU0JSGwK3OMpdtTgsfZUgizPvA0PGBHskuU5rCk0os7bLHFjaYUSS27kGrNxKMN7KUtmFKDWEUCO6259ekSzhOmxi2AgErafR8ynW-Ogo3HkucEL2Xy90rnozhjtfMAGqC0N9x4gOqbYQBgIVllWhLn9skQvpcOuoLqRlIEMJSDJuIgPuAW5GGHyvamjaUYMKVV-seYe-5u1N_vQgOWqusZPydviGfNgBnWFAaiWgj3DdiTud2XjncmOxp1KJev90cWyvoZMVIvsXASeBzNDqLWe0N22CJPKjbbwInCaI4jeKYRGRIJMrRvdYh92nbXbT0pRyCN9oycomQSQiGw32aUKFjBLYjbPfu3KbdZtOM9TY_P_niQxXykSYXeXKVFVCqV_ZOcimYnVMb4h25IZEupHifOzw4M8USzGgKIvYiAOhZInCgQq", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110511817246037596646\">Alan Wee</a>"] }
        ],
        summary: "싱가포르 대표 명소",
        updatedAt: "2026-07-15",
        highlights: ["싱가포르 대표 명소", "평점 4.5", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~4시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "Clarke Quay, 싱가포르", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12450201583291173640", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%B4%EB%9D%BC%ED%82%A4+%ED%82%A4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "제니스": {
        photos: ["/images/singapore/info/tourSpa/place-gul6-qkc.jpg"],
        placeId: "ChIJg2N2KgQZ2jERejqJk5gp-k4",
        placePhotos: [
            { photoReference: "AWCwydiKvm5zmTnb0hyTV085sCAXhLvDc7j05EMR31aQr9eza2Ywhb8kDcwotzZbKVO3vbLjZ_Jr4v780JBqict7UuLey6VNV3CdjumVF_qsV_nsvapLO7SxZ5Jh8iUu6SXWhvLKjcocV6C7Q8D_KkYNM5qfsew0mI__3_mSvGMsjJhRL0R-7Sn02KfsjxQmmuyk8sNSaOCLAnTVNb-uUx7zqE8f_bMsfzfbkZ6oQCXNmCMgWUG5cohm54wgGJxYWMpmbDiu5BH1S5t02QTsoc3hfyiJ6UDvaAgJpDry4jh1vXiobyrXfm7FzxlbBioi_cC1wuUR_qMpx-cG-zUkCIHxqFMt9MtS-eiVEfryE_Ty8O5EbsgZyVD-34KjnQknMulORj8EUMRHvnDq5r5Blp1xsGJkkWOjCJwMam2udHeTsBNcJAM1X9BNWKjzhnzk1pBJ", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117856924666835445114\">ZENITH Boutique Marina Bay Sands</a>"] },
            { photoReference: "AWCwydg1_c8FK3iTnIj7lay4igqt7JZaTIgEa2waxfLe0RhGHiSbOYswHz1Vptfof8um1jI-mcJMPuTSQFiEAbFXPhlDNW0jJ2kXqfWvCE2iSDMRgAevU8mJk48eIPB9JQGdjLx39WDhU3tuwbN2Ihc1R6c4dEfz8MO7aVPYA_RrYI8RHQIktwDlpRympzK5BH840Oxn5cOGds0FebZb3CrieDPRUDrywxCIHuXP8y4Rel_4_slhtQpA8g_St2TTjv1BwPP3m-wi25sDawTOAxpp0MEMq7mapB7k_oaC9hvtgvihNTj-4_L8-5grAugbfdDZ4k-tdlBcTkteSIKMofRNDVLROpApUdXX9mZ04S_lv4WHZhkraU8kWWcNxVD5lW7CUj0jfaWKltAGYwneWBOUoC415NEbXdfZeqGHAYnKogKnNw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100904742253313029733\">John Koh</a>"] },
            { photoReference: "AWCwydjjxUqe7qgZeUKXmx8kzXYsJAlG0kS2GRnE7bcLh2XcI_xoH4obnXk-46lFZt_N-3VTWTfz1HEjMg4QVzd2ueIaDSTQjOYMD6-O30sj2t0284po4m1zif4GWYd1QzciDaDcVzlwYmVQjwEGy7EuARXPFzaUuAJJ7kilflEwDUxf_lXiJCzZVlDxC62vD02eUBbfvqMPuwMNDqP7IVgx5jb3SaYtfCMb864VNgNnb6F05ttCa0TES8LFjBnnb5U76u5EuTP_IkPhYhAAYxOy90oDbsrzZ2O-lRkOIHqDDzKp5-XUal1R5cj0TdlsOdyLninwW1JV2ldu4BLmSa5j3ohvmH1QFYJI4cnGrSGEY9FW2aDbPxYtZg3pquK2fuv65cQCNcgkv7PZIiJPLEZplxbZL8QReeu7Lr8u2VOEME8wng", width: 2161, height: 2882, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112156568902883705542\">Daniel Chew</a>"] },
            { photoReference: "AWCwydhKDvxWCyeuoXk8c2LGulqj32XpO3f8xTzVjl1pIzugQ8WEqUS3p8LAIx0d9qIRzTPU9DfWWqeohAYINbnl57NQCq963h_IPoOTHrt_CnQVoJN35ZyHOlTMhmKDTexC0_Z_iwHVoGjfRzQ8sbT9FN_7iftLmm1K3tedub525F7Z-29i5GU6s1SZbDBJdPzgVSAO8wEA-EwX4kaDjWqiUcera0rwZb0VBDFYDYVWj7CPEnBAlpWMq4oFow0lHormaaJk1Q_hsVFWaY4w_23nrEDMopZWl7Iq1dNU-kW11uz8lnyGUOEiLVNsOyQsQ1SMjOXzn5p0Wqc5JAkeCHvUdHjBLM_qoShMa7eFo_v5hizmnKJYNa3Edu8Q4tnnKIcBzXeOqI9CwYsqS1Ed0ueh5qquofwPCqDqKJYmzPgNZhbYUUzI", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115018257183843833698\">SHODIKING</a>"] },
            { photoReference: "AWCwydjvZJN1HfdI4b8J7-DvZiSOwDClcWG5EzoVU3LQrTwPZzd6wC8I_himNp7xezwRvJqmVKJfrP3yDivB6mA2lSm5VrPBFPKAbvM-dnsNi784BP62C0HokdHe3s_h33BUsGK0zeOeQy6u-1ZzyAKrEWfaDj0iALqyYcilLcjJZXLPvzzSWzdT5dw2ynJOHpnkXvLigX318l8ztkKPnvging0POrgxrfMjAPBmy3cRrQ-8syK6HruhrzDKcGaXY46B7Xd_q4L1TBcEYtiSp6bbfKhVbmsVztq8VMS73-6LDokc2R_R_dKUif680o3rFDcVwpmj4oOHpJutpr4nXucjtEQLAxrBzfUHGXfG9Rg8FA2v2OdKKV8TPA2DV0jlUziawoE4Ibca1KkqqsBoFTG_Vcb9HKpyVfub3hVmWqhmLDEnrSpY", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104763502660999360441\">Edward Chia</a>"] }
        ],
        summary: "차이나타운 근처 파크로얄컬렉션온피커링 호텔 인근에 위치한 만족도 높은 마사지샵",
        updatedAt: "2026-07-20",
        highlights: ["차이나타운 인근 위치", "매우 시원한 마사지 압"],
        tips: ["파크로얄컬렉션온피커링 호텔에서 도보 이동 가능"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "101 Upper Cross Street 01-32A People's Park Center, Singapore 058357", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Zenith%20Healing&query_place_id=ChIJA2YcJ4IZ2jERlWUGUL6-QKc", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%9C%EB%8B%88%EC%8A%A4%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "네이처랜드": {
        photos: ["/images/singapore/info/tourSpa/natureland-singapore.jpg"],
        placeId: "ChIJN7PE_NMZ2jERj9asQqpmY6A",
        placePhotos: [
            { photoReference: "AWCwydjrCnN30ryW1VhW86NLukJLPCqxikjOF0PJYCDDCCaMMm2lpis5GPB1K-UB1Pem0u2GSW2LsvzzaNSdvD6mDGLrg9H2fG3f5pUC5Amw2-Y2pwVajUcHnC0WvbL8tSsctkTFqaiohXUFlvrPAx92b5JnPiClFR5U05Y6DE86p8BInUNMBPv6WpoEPGVvc-ix_TEZH9dczLGbL7vnkUpHQ_8bNgOvz_hO581mngCwpCriSOnyiDQAe_bdQQrm-AW7XvgJG0UGs50ZXL3pdSwE8sdRPsWpdNs8TS5kY_e8D9Zjy9rrm46phgNYpWr7GFiR9fEWEAD6QKwqx3ZIfTy_IB2ZrdsaerJGbNlVVNBAi0vT_tzoLgv2CqbfS1pCJWZr9kui6Z41-hnITdImWxw3Wf5ngR8LIxyRBA5H4a3_MNKy1xYR", width: 1000, height: 564, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101279940600315829801\">Natureland Orchard Liat Towers</a>"] },
            { photoReference: "AWCwydipdsNl-PyoPz1r3jX-E5BlQRs5NHvHqFv4PlOXNU_agmjFM-DSxeoqjemnWLrDtW-tedqCktQgMj95ewq-YYi472tRwM07_nTtXySDZhe2sCYh5eOHq2TFqxy1hDdWVCv0kfK-LC2RYuGIdcpq1lydmu2XyZnY6gb2DATlY4F3_D2xIukJ1ApYmlgcd3quOArp0iR9iPbFnlyzAIaU8QE2HchweiviQGh-SotZZ4RAJYzKy31JiycngILmgKa3uBbXVsqAnZ7DCHENF3sNcXAghWNANmI_NkOqvLNamsiM-rKuMN6u5L-txT_-KSyikp5ydP1Fl-MdeXWF7ERECGgQS1oi3ELkuIukKZCIqRO82W4a9-h-h72tGx4vGZqu6hwEtlpW0Ut33nQpJ8GwEQxmAcGzKvCYFNdBMmjjhln28VRm", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112778829475776252617\">胡佳恩Jia En</a>"] },
            { photoReference: "AWCwydh32vgHPDk1g1OmLEZvMu_-ent_rrG_1ODfeZsWWJhC4S9ZR0mhWN-ocNKAGwXa20R36auEoadr1zjaqOeKzlulBYFFXLY89F5SvpshrAsD4_waOU0vgCWu_V_zpbwWb_5Y75bFvySGxzS_7UFheCPQCKfbY3irWm5KWVEUDLUjLMSJiKUJj9MO5r8nHbrqLz8j9T3L1TBaX3p9YrwzfuGrLvFYw_SRd0QrSR0ZBca0lCTwhDzIrUzvtcflwNvb5dzDu2m3JqgUzH9oNvrfWY_UI81MBFPTaruP-bdC8eKDIiD0o5nwGohK6YyDLo3sEouADhdvCRUhpvJPb6AeppUssbPWcOGeZDVKW_yZt7fyeK0q-AxudxSgdUgaUwSw5UQNuira4OLgivE4LdZO3Ckyb0og6jpwd5gE3MSF4Ur3MA", width: 1000, height: 700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101279940600315829801\">Natureland Orchard Liat Towers</a>"] },
            { photoReference: "AWCwydibRr697Meb3U6u6ocmxHNbaLPOzg665IML3VA9sXr0oEsfBZm7vx6V8t9OnIbRgT9ENOUE2FV8wwVc3bZjyyV-gzUOuDFqo54Mzcym9VnLxqo1ad5YGndiH-r_HYtV7JE71rEc1ujG_FdvmCnvTS-g3N8H4QqnRoKoLJmv7hOIP3nNrBbhYVIhANVnABbb4BTZD5Yj0lYZwrEgeXwl8g2bfd0lYRdiVvPqmSmg6W_AkLJVTt8WdE6gQgzLhkqcaWohNQjjh8Ath3Is_dBZdzFeuBkPICEMFsFw0h9mAcLNGVqHh_kalhY_yLCBuDxEHuCU8c-I6ekYI8uNlzyRsn_NPtzqI4pSiIIsgriaot5j9VljW06bbg9FZX8B6VIo6MwlGKEoyYi-2PN892Q3-uLw1oXDMu-ChYCzgcrRriJCl9bZSvUhydEij961mg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112736132261695336129\">Joey Sun</a>"] },
            { photoReference: "AWCwydhXvNiPYgEo_LLQ6liv1DesIgU6iazHLEn4-LFGcQMtT9vFK_btdsLO8EjO-x5Y_nZBK2LqMTi1MFgSPkPZgSsI5Zq5SdYjIUn9GA48Wm1qDhGN7reauPDZEexMZOZ5OVeYGpEnFtMEZQVGRbzM8x6_YIIz3l3r680gj-ROcGFC3pCZCUuaSQnDD48ydfjsZHTvOnRAy67b7ftG1U78aJTW4fkBdnk-M7-ljb13kVd2J738fVdSr2zAhc5gwUXKPdYYOOZKq6lrzAXhD-wa_wNpZKV_-bseHwSDVh_hDkXLV-TqlsySPIAdljJcNJowIGzq_nBDGx6BxRj3C2Ds8skButp9gQqhYP3u5lp3LLUXJ9jaijzv-tux2n2NiIidC8uuhLqS8JvX2T_C4eHaa9siCqcPGx4FocHyn0fc83N6f-s", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111922026214590063249\">The Red Marker</a>"] }
        ],
        summary: "창이공항 쥬얼창이에 위치한 가성비 좋은 스파로 발과 상체 마사지를 동시에 즐길 수 있음",
        updatedAt: "2026-07-20",
        highlights: ["4 in 1 가성비 코스 제공", "깨끗하고 합리적인 시설", "강한 압의 마사지"],
        tips: ["현장 가입 시 회원가로 이용 가능", "창이공항 쥬얼창기 T2 위치"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "238801 2 Orchard Turn #03-19, ION Orchard", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Natureland%20ION%20Orchard&query_place_id=ChIJ37FSCe8Z2jERzuuZ1HcoYjM", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%84%A4%EC%9D%B4%EC%B2%98%EB%9E%9C%EB%93%9C%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "소피텔 싱가포르 센토사 리조트 & 스파": {
        photos: ["/images/singapore/info/tourSpa/singapore-spa-singapore.jpg"],
        placeId: "ChIJyyaE0q4e2jERSZ9xGmqPcI0",
        placePhotos: [
            { photoReference: "AWCwydjnbYMxqWdfthsXuYJYCASTh6FpmOwwfrrY_krzvJNBrd3bqL8pvxoiJk145RHXZVxqtYBibwFpcL7PbzzqkrAK9nbybCACRab0va2lbTyi0iaHm8gebCPrsooaeEJx2iguL7W1aeOI70J-muU8shPxZZrhaQMF4Ric0JEzRz8JxcbZi7VLp5JUAdcasBdrjUSVAszqRIHWNVcw93U6nkIgSyTgaJR3WnF0EgCjiKcgyallLtVIX2oXTf7q2aBUjBIEL9hQSa3VnirKXBaMQ4x9q8844mxiwZ_cbCY30n_QtZxg9CuCDC5x0UHHyqzok_e1We7Ux5r1rjxhJUDLs3Ef3uY4QSUK00gQYF6lBEgsopAxVXdGJ9w0Hx-nenCcVWm4L4AMkfimZl4R1xjEUXlElBs66dUuZo6aQ62MBfpSowDX", width: 1600, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101042368010380711789\">Sofitel Singapore Sentosa</a>"] },
            { photoReference: "AWCwydhHvcaVKi3xfRjcILN4ep3Synz5lJGOQg3K6FdfZl4Tc_Av7F-5muUKvDPKeN-bfpiq_6YZu8TgdAWYCXVtPvzD9Ti9LdtEZZAMbYbWSXXARHTJPDTOknYZO1xUpM6mAYxgD1uryFrYvig9HwGPRDARagcHsUNKMl8Z8f5IyzdKrwvKbHizpg3B6ijeeTyZvvUYSwp9RpDDCjLMWPJVYry2j3QK-WxXbq2x3s5ZyEmhMqDOJIzs_WvJPwnVZGTy75bDMew5vpmRJCopOlTeujcOMb7qM7hNkgB1KVaFLoQHybauSG_y4HHGmHSnTSxStMoCsWrLCgOrh8RSy6UVI3BvkCuOmHenfB4cCG2cfjfYVde-Iup1vZFgI_SKFWayrFDPO7ubzLa1pbSLrqj2cBVuymAcvqfHVOXQFY5XBSemww", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105157820954605224495\">Hong Heee Tan (Jim)</a>"] },
            { photoReference: "AWCwydjByzKNL_wQSOJuCpfCjjGjDmLh2H9kCnWrNN80pwRABTvjnbTEAgHHYnr3TzFUDDgtnf5cBUFfut80po9NLaXnphXSL3sqW5It32Jgtsz9pqRgaxoEuRnsQs3ZVmzDOFGc_WUQNyE9PR7T9GK3YSfnhAiKPZY-WoI_gUQD27DqqOpOGdCW8GWoXu1WDaW2vuhEZHmsRJtEHsThrwIUDdWnPwz2CFNRXzaQ_WbJaYCyEkUPjZt8mI2Z5S-ANrnxzUylecgf8uq_wdylFZpwXUCSPLCNj5HOLDznjdImCPxgBl7THcnRt-LVBdo8QVET6B-QOe9iY1iOZOsrmf55BKKhSWihap339HrYKSmcyUwbEtf2KKctbVupSVuT9XXTVtiCdkRX3QJx31jBS9qwNMTzuWU_hREj4FSrhP2Bwfd8LIfd", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108612219845613469045\">amit sheth</a>"] },
            { photoReference: "AWCwydjGhTdk05rLmrWJFCf1H7vwwdpNxgG6CY2f9QRPusksg0XjTfvXMhX9goq3K8QdwESGb5fXjJU1g7AfxUKaOoCu0gmOp_sLQz7GbFaKPb4bKk5_-uRf6lDNdZ6StPcSKHZ9_plm-LH7D1R4-9X9Ez0fZD9rNFGhF7kdFGtssRpFApbRZk_41LilbvbupJS0tSeQt7turfZoTH7qwy2sUuz0PKv52ZR1Cr_95UdVweVq41tXAKnU7StAz7HkRpFKWNsdV3Lior2Pjx2tCsyV721LIaQb9fc8BfK2DJQ31Lpe3TttkTFDxKkdZP5zHmTp-O3YbOEIwhAJj7llV23tCxTPQRfVzcNWKk7nDx17zKBgI_twxR4HRfAMl9g_DnoNb3KaEeiQJMulutkAsnDeYyMwUkEimvPk2qBYJI2ErVxEiQ", width: 1024, height: 768, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106510699634529977289\">M. R. POLAT</a>"] },
            { photoReference: "AWCwydhbPuvGsmJIYP7JwnOyaTd2XiX3CVDgeVXfqOWFeyiGGoM5ewhb_CITCjYMPx_d2rZPM7gBZm_msEZXYIS4afprZyJISoWUb_wU0c5r3ZAorhClqqxefwl9D828CN5CFYzbgeB7jZemgNu9Nu6p3auZypPuDGNHi3uM-Op60_RaZIukM2sMQBFm5lfnxyKS8kNVu7eHGat17gH2cfj0acWCa5pciiEqivBfbhz1FnYFQWMobbjJLIMFQs9GTuN40vq-LLOFVNEyG0AigEuUkRvHKmMEDsgOQFq3cS3QVCtKYLFj1c1R4O0S5gcbsOe_NWT6ANxOPOgWaAYZmrZkAO96RRb-RYf9ojmiCcmjDtMxMi9bZtuZD-0Mq8vPmHmO1g2vxsNG0uVvQ0iXYukNZ0nEFRkq5C9UQMC81mgvd8aDmdim14baONe8Ju9vWQ", width: 1024, height: 768, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101042368010380711789\">Sofitel Singapore Sentosa</a>"] }
        ],
        summary: "아름다운 조경과 함께 휴식을 취할 수 있는 센토사 섬 내의 럭셔리 스파",
        updatedAt: "2026-07-20",
        highlights: ["아름다운 리조트 조경", "센토사 지역 위치"],
        tips: ["공작새가 돌아다니는 예쁜 정원 구경 가능"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "2 Bukit Manis Rd, Sentosa, 싱가포르 099891", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EC%86%8C%ED%94%BC%ED%85%94%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EC%84%BC%ED%86%A0%EC%82%AC%20%EB%A6%AC%EC%A1%B0%ED%8A%B8%20%26%20%EC%8A%A4%ED%8C%8C&query_place_id=ChIJyyaE0q4e2jERSZ9xGmqPcI0", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%8C%ED%94%BC%ED%85%94%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EC%84%BC%ED%86%A0%EC%82%AC%20%EB%A6%AC%EC%A1%B0%ED%8A%B8%20%26%20%EC%8A%A4%ED%8C%8C%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "페어몬트 호텔 스파": {
        photos: ["/images/singapore/info/tourSpa/spa-dytuc9cm.jpg"],
        placeId: "ChIJIYAZ1KUZ2jERdF4dYtUc9cM",
        placePhotos: [
            { photoReference: "AWCwydg1MwEL6vjO9LG22EXV1cGwRPMDZ5sZxXVotutolnQySAYp891n6ZB-8RGa_uYaIDGwmxaKs_Vu7p7SDoqBnYQiJc8iZfD4x2PD5FO2dR6DdKO0ZEO6Jv3IIFHEqvQbNE7avEqU-_uUkTXEg1wclxjok3H01QIXA9chPdaTRgB7nlO3_moLlG15Dcw7crbszG9jzF4AIeJtQrq0Ohhcu0UAiOnTIpOlagn2BM4Z3nnUz18dpKheZtHKeKpxZdkAsm-e_rj8Mk26xK2QTdTJOMVkDJCyGhNWSaMoAzqawvCtVTM7L7aa7Q1kmXysChK7wTNSaC6o9EMQe5IJOK-uFiHaWsvG-6oB-rsxr-kRw5QuSKOIQ1Fq8GuGj3pfJ0j6gOGRcZ0zkpxzJd-G2pLBhZW_U5I8y6OBcKgdc1ZX4IVeCqWd3Fy3TbBzztogo5y8", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113960647340290020810\">SPA</a>"] },
            { photoReference: "AWCwydgNlJ6ELsYIk-IXIeq8D63RKYUDXrkTqvAIU-vc2cG54SS1ajEi6Y1outpqXUFkXC_2fKNbLSrEjZDJmTQc7HSzhrZ0hrTUR1Zys8M_SwV2dq9IQd4reP3lFHkMEvqq23qx5r_Jq9OFi65dAsGW9-wvFeYEmtXTi3bSu0DD9naYwEwbU9-RKaSVtCkJVi2ufASTy5X6gvaqk5TgweAYcMoIS8rb2q_VKYggLDjpN0uVN-Q13zSA1xBhuvPNPZN8Kbbsv5XSnsD-_irblNgE8QN-J0GwHqBcWrfX5Ams_3UVaQ5X9m85x65g0rD5QS6CfpHYTKVnprzeGzDY6V6ip3eGSwDrYiQiE1GMZ5kbpb1RkV8BBOeXbmbEslzbQFuB2iVyqFoMcPTVCdGokQdug1d7b1fBkGZCdkiUcizwcUd8tA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106132089105333214779\">Singapore Katong Cat</a>"] },
            { photoReference: "AWCwydj7G9S4Oqt6pv1vah43pwXtVIFQo8KJIC401o2TmPceuR93Q0-7BPNfN2Wq-zkDYZOQK5S8R1cHZEKflpomXC7e2qqPo5rmSmzMssqhk3rIiOdCtFvdcBqEykGRGEZSIezmDwy1WTmTtfRYx1hmZoCl-WHJAh9uiJOjhrmvwGX8bnjkhb6PIyzoV6QNKyJE5sSmnwTYIlzHYpsoI7UzuCvMicMjGe0cjuCnAZxMGbDay9N7CNa5ESkKRt6LF7z3KgnCRKo210cpFbjAxh4Ez8i5SQBXNGbhLbozc6pUfRLKqBVtO2kHquX_zNUCOHxB-Ktp-XrcgqZvAZNdlZuHnRDkPxYLzQqX3NQ6lxlZXWQTNpi-RJkkwqLMgJnj-S9tZhKcIby91_iUim48GKm3yAiBYWU7UmUSRUy2OqDI5Ye9I8UZ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110179777159398655887\">Jayne</a>"] },
            { photoReference: "AWCwydiZB7FGxlitRNN7EFVM9WsFQMFSbyQy52QCyCSjLzwmNyzXyx1GgpxUwHChP-qJVvIuSLzdwAfKsG_9b9kYrGP2Dskb3grTlWv9K-scAR4zaQPzGxnsV1tLcuohOVGu6V9YavJvbRWzs5s1Y-4YAHGPMm9eUpGvnH8IIdA2_GrDSG-hZd4vp91MQf-t3NMbpLJkdSmD624z-IQiBbZlp0GwHt-zkN2ecRiF0js-SCSWd616Qj9U33cUHM6TUDYc7XHqjVBSxT83qH2trydlkd3Xs5VtsBrMDTUeFq-0tXLK4iYr-5Bn3kjZx79YZdcUx7Ja98HM1xkjwRfeWkmLttWZZ9ci8Teb6u8M_nPKf438EtAzhjeb7Ok2PabThMvQVBayv1JsmPCJk8jw9j8BVqARiwLQ3xJSCJ32ROjUX8YfPg", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101549422110022201488\">Gard Karlsen</a>"] },
            { photoReference: "AWCwydiCRYHjJQ-42CoK8quQdRZz9YjZWwrvXGiKs7nJU0vj8KWICrmDbO2y_bGMDupVK5QDAIR45a2q_hpXkshdz79b7718soBWtduxzgOPQGHEQEWMAyEuYfl_1ps93fVIqWB6969ltRJFDH_HWTxirXhnepemQLs9Q_12nCORE0pqIJSRrBG8m0dtqPRvZn12L7nTpiE7XlA_oMCMdedBM2XKMugOOES1wBnAxLxdeoVECo0EN8lIQ-Wm15stHNWRT-EaQ_NEHuh5QiBaJfjcM85F738VGQ-AVRCRssAqlBkh7YKwAh_iKmzjHY3CGk2ukDWLDQxOKuedybzqpMygtj0wf0YdciHCg-wko2V8AUazu_waBbUb1HEkZAzRyZLHveWvXSN6nmh2sft7aNY1s0VfSXevr3vVPrJtQLWHfTGMUMkW", width: 4800, height: 2626, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113960647340290020810\">SPA</a>"] }
        ],
        summary: "도심의 분주함을 잊고 조용하게 여유를 만끽할 수 있는 페어몬트 호텔 내 스파",
        updatedAt: "2026-07-20",
        highlights: ["조용한 분위기", "자연 친화적인 휴식 공간"],
        tips: ["아침 시간대 이용 시 더욱 여유로운 휴식 가능"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "80 Bras Basah Rd, 싱가포르 189560", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=SPA&query_place_id=ChIJIYAZ1KUZ2jERdF4dYtUc9cM", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%98%EC%96%B4%EB%AA%AC%ED%8A%B8%20%ED%98%B8%ED%85%94%20%EC%8A%A4%ED%8C%8C%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "래플스 호텔 스파 부티크": {
        photos: ["/images/singapore/info/tourSpa/spa-ydt-ppju.jpg"],
        placeId: "ChIJe-GuIWIQ2jER28gVZBVxpmM",
        placePhotos: [
            { photoReference: "AWCwydhSpN475FeIXNvCsKwfjZGTPeun5QaTiIcUU7zzexV-b9cUsPL4RJsYnKQlpPvgZwUgTr1nlgEzsdCGr5vH_c2rRs7jQAyyNdOXDQKh4nJfsOPLk3ebra1lvQL9bAhywPf7iaRNObf1U_3SmP_N9Ph9zNhoe5Xtxi47hx0zYOPsW7aFYMtfOe54ZqnhzZ-5teBa5dpMC36-wLDvasq-7_Bh1y2d1nvi2FmDHHR9SMfrXI37qsVBo6k7hgy8h_8xGKVz8lZfV6UjnudvsYVlmottJS81S5CAdQCfneQpUfRB3RWJ6Xrr7e2_YYLJxeKuSnZIZoNGkRf6pci1dtuKa-DBcGvuqW4Dwv8Ivt5SakSwKHVcDnlmuYGVNEaG7rXFSdtaPhP-GFA5iDhL4_jyMgcqB2uou9oU3_-eloiES0I", width: 1167, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117208571823195358815\">Yu Spa Singapore</a>"] },
            { photoReference: "AWCwydgu6cZHZCzgLLQ4jeCpw5JaFHYN8CWUsnFgqEg6AJ9PbT9OKCTrqGU92c3tg0Q5CUcBk86WloHGboyrtTFg-TxOq6UgQcCxmbAwMsQDn9voOZUuMpVGxxrKl2IdG0bpCTrerHvhf5Ws7fg8Qvh6PgxqBayjA0sTp_0cjNf1wbvObwENIaYOBpGDVUp-kbA-Nk0uDXxbOQA0kul_KChm_GUDDpW5SdSscAyD5d1wfsm7_ZZKT5Wwwk7IPTqKaOy6rGOXjGFO8BRCrItqvhej1HBHAMSIP39mm0zlpiFNLxu-zG5dNgP1u6cJvet1uksSErnsUb1PyE3hY9E1XFv3ruteZ2O_6cE8wtCy-6kYbb_hevq_wxlPuM-wKBEaXfwInGriUQM-IGATdoGwoX3VDOPNTmaomy_w0ZH-TNfAwSq2E0P0", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105304761895761617407\">Lester Kok</a>"] },
            { photoReference: "AWCwydgCqsowGhCr61LmBDqBB7E52CksQevAjNeIJANmPvfCQEvUhP1rerno97XqmHNlB7A5KNt4RasK9QYs1qi6RRRuh9RsPuRDzd49gvI1UNCl4vTybJtDhEPcF7lgqUm15FUzVgvVG9jV6SMy13qdOLuket_uF7fY0xgCOFbY5X9zCGzi5_3r_be9avzxvjbCZQozRAd0tddnhdDJvwz9cpzVNut__kby3wattCSeJmgx3pYGq2C-NK5UZxz3WmOgaGryrbAPDPOKKHaiKRkh3boCKadibR5fYthNLW-1bgBqGgMYEPwGDTasgAqnVlfVAQLbiERbEwwAqT5rZ2BYKeb_P7Ow2UwXwFj0O4D4b33xZkPs4IDHZGpgj2WxAIRS1D7hX14W0HoXjdTm1_V_F_rSk7Y4rZg_uogAFe6mqdhVJL-cpOf6A7VHYQ_0N5a1", width: 1200, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117208571823195358815\">Yu Spa Singapore</a>"] },
            { photoReference: "AWCwydi2cBoj_KyE9c6RNew2Pd54WEl_VQPZ-yQgK0xlvVfKTabWiqH-1dU-6oDTI5QyPo8LBr6N1kj9mEz1ZiTF7UHlMDi7z-JxG5sK3XsIvAcxC8MbFHqUg2Q35-kTTPHNw43YexTxCnLSGjhReWBtub0dFhg8eCucsLA0r053E0FEjC6UVQw3Sn27vsmkWkjh2LS68c8qc2vsrZtyzZLIDurL-AcE1KdVO4gGrweojZhGCPkFLQITK0iJRJtGHC75_QSKUXa0Ow9jCEj-HuBuK-dHTeUfLq4YzzhTDVhWVGUd8ruhDCUwXKYFTYPvGc63ad5zu7bwb3hS7nGfXKcJcNIfhTN1d8RpuIuvr7hTpSB9JQjJyY-eoQldIn13p2S7dEVi7Ov6AhuAnHj02pS8Pq2iMMPZ0v2bPtN_nfZhHR8", width: 800, height: 1143, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105730167810258839389\">邓玉玲</a>"] },
            { photoReference: "AWCwydjQMBO1aLoTJff8Fb9C9zyuH6rktQ11CNSq0gZbfVpPKAhlUvl7Kiah-LvlUl40GKR12Q4zMp3ZQwLCSaPBzwP1lMY-8sncmOFKUETPgRVDV5xxds1DrTy1o2eIq8O3bKKQyINKgfs1dyME6fWKnN6HejxswKi8WvhTJ77yvVHM2eMzpfToSZPkLPKYaSPn7__0y5m17sn2hraHBF0whEllCuIx6pczoY8N5y48afYhRW7dVrvsPqk2iG7TrkxP1ROiQX1s_aihdbJ76XkQE1bao08haw_wKA-KpnCx7E73WMvxsIXSdOV6F5kJ110duBZi34lhOV0vwPGbXhNRUlzoJVijB0K61vFP5ttXzagkwL-_fzU1DV_Tvqr1xjVxMeDhzfcr5z53O7cTcbQGWB5ATNbFw2TvmItQ1cKIds3Sbexf3nNOigLapx8hQlj5", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117208571823195358815\">Yu Spa Singapore</a>"] }
        ],
        summary: "싱가포르 자유여행객을 위한 럭셔리한 호캉스 코스로 유명한 스파",
        updatedAt: "2026-07-20",
        highlights: ["럭셔리한 분위기", "프리미엄 서비스"],
        tips: ["호캉스 일정의 일부로 추천"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "328 N Bridge Rd, 싱가포르 188719", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Raffles%20Spa&query_place_id=ChIJRUb2xKUZ2jERnSGydt-pPjU", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%98%ED%94%8C%EC%8A%A4%20%ED%98%B8%ED%85%94%20%EC%8A%A4%ED%8C%8C%20%EB%B6%80%ED%8B%B0%ED%81%AC%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "반얀트리 스파": {
        photos: ["/images/singapore/info/tourSpa/spa-3g-r5mum.jpg"],
        placeId: "ChIJhwAcqjkY2jERLGQW9k7S_d4",
        placePhotos: [
            { photoReference: "AWCwydiiJLE8LUztjWlAMx_ohu740AQa46E6fiw-VaTJy2oHnq9SZlQnGRTpy4lH7lz-Zogvdxinkdpil-hqyKiHsKHC9zOaA4VlWHaK-GjwSVmzj3gbthFa3y3ktriWJ4BIRF7vmK3ANpxSLfNvH-FCZkVvi224BJlG9PViAGukeRtJE-jf6ayYY96atsJS2MGzs11sBZneparSgMhi8RfL4ZoGT6HtZgOr1a0urZ_pkpLYh6uwLOfvPGb94TtW-pVXhtMMOJ57HiSjuiQewb7ljLw1MG22efqDnWu6aEobQG-Gc0hH6n_k96x4xgnNzKZWiSptWNpcvoFnZkqD8A2RDnooeiYUTG5XZS5cfFA6ve7x7MCkcpCv-gU__IJw_P0Pv6g662jOI3r6Vsn7K6OPL95CX044h1BhH8cM1RVDPTVVt8LbY2iIhy9x0reTYkIy", width: 1536, height: 864, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108756809301585213816\">g.spa Singapore - 24 Hour One-Stop Spa Destination</a>"] },
            { photoReference: "AWCwydihmUilBag__kpY5V1F3yzzEPxOGTEOfvJGOKQ5RY99GGAM27loFCah_UqT_xzbIcPAhFElRp14NG9GVcumiKQFcy50li1rGBAwKiI3QlQZP2M_eT6VFi8yvHCozQpKFyHITkOyCoC0NN2oGB85YorV6qOgH0ms97sZySecOs0vuWVKoiITJKwZVer2wHnD2ZP_NJKVNsBlU7pDbfRnIVq9okr7u2LmMMfBQQzCdpkoplr7olPon3pVSyCG1u_HGeDdrW5YItQsKcMwaq2RMOGuScsNEv6ynsV-8BQomfTCwZTwIEsSQLCft4ObjNmYuRHhpyY1tFuDKCDnGVnaUPWHg1I50qfCMUCb1aedv8CXcuxl1ah1iJ1_6Eu_tXScZK0Ru1eU2mY6xodDJ7lJqwFCkDMKL1NDerNzzJ-vsDzZTHSOOVlwJf8fTkC-I45R", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105028782764100809863\">Yeo Kai Wen</a>"] },
            { photoReference: "AWCwydiM_kY_2lgkE-T79qhdBD1RH64sp3NMW0yhcopQbnjUPC2B0XSYElacJ4q68an3hFNAJZd6LXXc0nCgpPsEXArjyjhdEd3583Xbzi0Y2XkIIu_-V1i7YVSRE0EgLDnTew9GqZslEK66TshTKDAqJQf9w_LXEWuVewuWWpwyn5SlhXTBkCrLZbAMmeldZrCnlDTtTDEoP4i7XkAYNvmocsEY9gfnbxc_Oqpz8v2uIGviKU9MMSXW1ecaNxeocmCs9uWThSkw-mimo9SeJlhdp6xbQEOsuE_zWtE5ovQY1dBXX-Ren_zM-VDXaGvvxlG2hIIZMYCpnkOw6dGHuPi20Av8bKKXNTTxuc9zZGdS0ReIoA25ly593dpSmSS3PHJeRtqSPNbALhqdjO3fqgDIUZjFPd6lsh2t8NzMzyRf4gPcUgl1_wT_eXBCJBI-DURz", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117342453133315572378\">Yan Zi</a>"] },
            { photoReference: "AWCwydh77eZq04Cif_jJT2fz_NrOtGJmgx6zoejtcVhOCpWg3SQTmkcaYkO5Cq8wqz8UgNcQy5s_qqbgL9zsBGbKab91ED_VB_AfYhPcCJfZnr5-oJLE2d8QLw2l0t2EvALenZnrrGizWSlSSiKUCbZgxzGn0QeOXYsPAccyOEHqlYXBJDFSa9JZEonvJz99HDXgcbudfk4duIIXOhUtnm_M-sELO4KbARo3U835o-TmMgs3doZnJe9fW13d_CW94Ht4n4v_51kSCaB4Vp4miHb4cK6EchrBOdHRJ7fL02orLX1wY_s7EnPN7o7gIQd_-bxeWJUQG2BnOlftOA53mPUmTnk7VkDXPt88xLSRXXorvONAYuIbgjyCINN1hz8bYxnxbQjrpbuLfNnMZrES75_5DtscymnITAALI-qb68cb3uZo_-w", width: 4800, height: 2400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108756809301585213816\">g.spa Singapore - 24 Hour One-Stop Spa Destination</a>"] },
            { photoReference: "AWCwydjID9_9PqtEp8J6OTjkaEGx85xP_4vjs8C5Fpl71jxcdR933b3wXhrUFQa862oMTVtToOFgOmxdGuzQNZ74I0-CQxV4FomYeoIMknCQHUQjyXDUqbL4QWO-n6HTon52nxHcDY0B_C3IyUxIjjzNKRC0_YHl7GcmkUmwowd0XWunyCstJR6B_JjHcAn4RPUHYnu7Vn4AfR82Q0oVKfSaIpQtiPBj37pNgrpkiU8Lxv8bxsT-Pf29Il9mfs69ORdFj7sMiOeNboaT7ulr41SIk3EQqGobVJ-ZttKc6xZMmd1pjM2Pp0AsTHrATUebd8kvvcrrgbl8GHB6K6ZtIpiptWOtsg01-Z-RTNZS8zNfPCqxYWsMWwwIw2hnCCHAeUuqWfnXOXd_7hp08aSDXUG6525sk9GtWG3rr9_sX8ZC8mmWsA", width: 4800, height: 2400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108756809301585213816\">g.spa Singapore - 24 Hour One-Stop Spa Destination</a>"] }
        ],
        summary: "마리나베이샌즈 인근에서 즐길 수 있는 럭셔리한 휴식의 정수",
        updatedAt: "2026-07-20",
        highlights: ["럭셔리한 스파 경험", "마리나베이샌즈 인근 위치"],
        tips: ["고급스러운 휴식을 원하는 여행객에게 추천"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "10 Bayfront Ave, Tower 2, Level 5 Hotel Marina Bay Sands, 싱가포르 018956", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%EB%B0%98%EC%96%80%ED%8A%B8%EB%A6%AC%20%EC%8A%A4%ED%8C%8C&query_place_id=ChIJNd-ipgUZ2jERT-k3g-R5MUM", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%EC%96%80%ED%8A%B8%EB%A6%AC%20%EC%8A%A4%ED%8C%8C%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "싱연 풋 리플렉솔로지 스파 피지오테라피": {
        photos: ["/images/singapore/info/tourSpa/foot-spa-singapore.jpg"],
        placeId: "ChIJr7pojfIZ2jERGwwM8wdbLoc",
        placePhotos: [
            { photoReference: "AWCwydhtsq1ZtxHUVGfNme_iGpxyZL2x8-wi7Ra8L5GjhpSv-Ajpx_HTmQ8qvgT9TMaByjF7zrmlAuauSSyEs_WyOyy6tcOPUe1Ecz_2vbxoP3qrZAfp8bh76ZbopC4zy8uyDGddTSgHrvMneikrdLwPlcbCdTc_mhhPQptrhh18G7zLFjXWfqL9_JV2PwgeTKl4-dJtTdMt8C9dSQlC3KZ8YTHKiiS5fhL8YMd2hllhGP2d4hStCc_1aBEEwL7-852AOxFsGjF7V6GOTo4i7bBVLYO5pSZx5CCMDeVeujB1gU_uqgnJY7xdlWledJ0VLMcc0S1nNNA7pK-YR3ZguBfwzTbo7x62kRfLkgnzRF1HC2k2R93hqdc7R5yXrSszhcYacH3yhGcY9jK8e-8Bbq3-55z98qBfCPSSuIFf9DwCKmuCJLYe", width: 1600, height: 901, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108046757431623722574\">FootNote Reflexology - Body &amp; Foot Massage</a>"] },
            { photoReference: "AWCwydg_f_E8tJ8txcr49k0pV3OKxSZeVVk-e5_oeHGB2Vy7E5WgT_xApmbaSClTmFZYwg0Wkr19M2IKDmJRsq5EtyQw8_ZP2KT0CJrH_Kb-PHkSiIkXKF92klZnPZnUz0OGa9IcFbMN_De5yIiUQ6YThN3W8nIRXnJFYSUTYu7Ni7PRNyCaP82dKvAJ73atH8fA8z85qvTpSeslY5PX8DoVkLj9MF-B0rUyBfwEIW3pwvYZ6V0jNzGK00rugwnlasGUHfdqtbUnPnlwup3HozGCAwr5R0wzsBvd_75ZsdtP57fzVUiAXzzeTzgCEQ5JAWD30OFXCTxtaIZtXrlCNx8x_ieLTlyGf6DOOBPAyxP7OTIM4CzgGyPY7e0VsCJciqkrW6UqlMQxvHohjfw0n3dBo7T0TYF4r4QSSUdDAAAJMjbQ9cyvUiFKK3gkjL9GzQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112452173556248879795\">Bo Bo</a>"] },
            { photoReference: "AWCwydgFhSkSrGtH1hPGEBIT7R80wMtJ0ns2Z02IQ-K22vC4dfDc9m7doSpo6EzccK1Wi-3vK360Ou9joFx-cINa9AYGNEh-D090zUnxFOwJfJmWsVd4Pea61agXlLOmpB-h5EfAh-irEhmJ4jaBSO3lAyu1O0bdLSw8cdhEQRCMGcOjqREx12dOsSXOURHz5ss9ei6X2rmzW_zbLuEaXCqetEt7-pJmGtgzNxr_iNNu_tG0wSQhDRgBrF5Lo42qAKI0X2TW4a1W7kKcNUI0IW-DGD6Z8BT3L_hAVku5tqd1saO8wYVknQjds9YSviM8o1rgN0Uw6IFk2qeQKUKJnk5EBOa7cVqdroN_ESrFQUahssT_XE_nZF_PcLYrkp2oJmt2cN4hqQ_q9Vku2WouhCXBUKiBtulyaT76KTnZdo-AOc2cVM2ChfQHiRiczP9SZffR", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116242596714162440076\">Kwang Yong Tick</a>"] },
            { photoReference: "AWCwydixWxdL4CG6NTfJzKP6N-Z1k361KT0Kg_3mKXcsJRAiCeSvJsvh06jGnEFZsGfesjSjfmNM6XRzxIdLqQda0uZ2VXh75-ZWNU1r1K36tB-ftE6VKypYTmSw0KAJk8WpTykZxY3oWLW0bZ0cFXJxyD7Y-aojKNGe_T2R18EL6KJhku0UBHpePIFc1JhhoeZZWJRDl2Gi3EdKmWinVJgXcJwQiJeWoHmeeqrMBaSZIvGDQuzGArMxMHJQqwwkkYCz7HYZG75kERGypViIPMACiOnf3g37yt-TzERSZX5kR4ITtGsDGHre5ipR8BfP5ZnJPMS7IA3G9tXtkg_rRc3yJHc2BHC3TICngpZoJAohWy9KFmcSCs4pDzAPvjqqqWb6Rt9_vYJQQ4oWUEZZZsu-OVMM8pyEilssShXDPy6i8XU", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112325909842890245902\">Gerald Mar</a>"] },
            { photoReference: "AWCwydg9ZNt509zB-HJMwyWrc_NhjfHIOCrNt53JpiQD1IbsQxVh7AvMBHfkbAxxNVgypOIWwyd-qniiayUvf5nuT308yQEpsTtH9ed9FsQXZ8QY5dwClAWfo4tTHk3YD-fuehKat0i22f24ykmuEZECDUD2JenenQ98XsmEC7WASBrZOqK7p5qraLNVz_ZXWnMz89n6cp33-ukeeCPyTwAFysV_-rzTBvlWEZBq6Cw1-8QWEQCgIZszWp-Rs-cNqo-hTapYuVLTyEzdsl1DlKugiQh8RIr2xdlTZLThc1fzSdEL84evDuRZ-cWqW5T48tWtzrtmOnzblRWjf_cg8rWwxv1t_h7JbyIU5ETqTKlZZhLjOedsGBfmr3A6gCQTxjDWtcQv4ButDbnzrKQEmKNgUqJ7dN6JjAgBHH1RIiiK7GXFIg", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108046757431623722574\">FootNote Reflexology - Body &amp; Foot Massage</a>"] }
        ],
        summary: "발 리플렉솔로지 전문 서비스를 제공하는 싱가포르 내 스파",
        updatedAt: "2026-07-20",
        highlights: ["풋 리플렉솔로지 전문", "피지오테라피 서비스"],
        tips: ["여행 일정 중 피로 회복용으로 적합"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "101 Upper Cross St, #02-01, 싱가포르 058357", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=Xingyun%20Foot%20Reflexology%20Spa%20Physiotherapy&query_place_id=ChIJcf_XvnQZ2jERtOPulECpMGc", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%B1%EC%97%B0%20%ED%92%8B%20%EB%A6%AC%ED%94%8C%EB%A0%89%EC%86%94%EB%A1%9C%EC%A7%80%20%EC%8A%A4%ED%8C%8C%20%ED%94%BC%EC%A7%80%EC%98%A4%ED%85%8C%EB%9D%BC%ED%94%BC%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "리츠칼튼 밀레니아 싱가포르 스파": {
        photos: ["/images/singapore/info/tourSpa/singapore-spa-singapore.jpg"],
        placeId: "ChIJOek7q6kZ2jERX8_FX0BTcq4",
        placePhotos: [
            { photoReference: "AWCwydgJKxCYqYnU2JrEMl2cAUOitU98RpW1N15rsy7RtR_k4ktBKHdTtp5pMg7xTqlJ0ctW9V1bJB3eTmVunAXz4IWrmKQxCwKHo6Nk2etZ4rPvyYQTpqwcU-0YEjHx4bfunce4mwXeuJY7eeMbpPlTjkFMDkbHvGqpjnQLh0l9ggNhef_lLXHIDDJkoNXEekzKw_ZlrwSetaVqUSGMvb7QltKixQYLDcHJY0JLhG1Jy-_A1mebOWSeUbQa7YFEsks16f-4VLwj6VCjgb6lc32-JlAHNetjQKICMk9TCaqiRlYWSeW9YY7qATcuaV-jNpjkITZdfmiAWFwzbH6DEpkJ-4jaZRn3Bm5BNUkp-a_-NreI4Zhr69omudQrxW5E991L-tWGEWyig6eKwipk8VWNiiaVVFbaBbLUc03c80ISIdC7Xe_s", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108913561072574806917\">Attila Jaszai</a>"] },
            { photoReference: "AWCwydhkclQZm9jcd3y6BNdm9KrtB07roJyWgnZbIBiGvnqC7WjWRm0OeWKn5yAnUysSfTYJ6gotOyWphLLtgzhteWhq0MLMUHPQnN_aVXLrYhD4nJk12W9Ato83ewG-A60t_GUJrjWgUfmzNV1RZe0mfiHDPrBCwZGGhLqaK46HQQ75SnA0qoev142BoZGob4hpK7omXds0R2YSRQTfSn2sdit6hJV09LtInXOr5sKZNX3WwV2NrfF3rzuD87ygfGJAIXpBwfq-C3TTixgc_xNVZBAGUMVKvw1trahCfy06wjrBXfGs4Xt4ES2Ci25Dbup0UOoih6A4ZbXuSxG_hWc6ECK1xoZ8Op30gItTDwoNxGVsCUzelcQnVKKkviZ_zLhTNHCm9oobmOyBvFCTGiCIY-vWBQRWK7f0oJHPtt0CC-ykWA", width: 760, height: 425, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111231167988098721922\">Sonia bettencourt</a>"] },
            { photoReference: "AWCwydiT8qKBHqrrT6FYVmt7sYxMiRiLSPCVywr9YDrP1XxpwtzShEEGxM3tnUkpL4rOe2SxTAO7sS6Z8xrmUEV4rDRcIhE_b--3JKHg8xSNoL7BmXOUHp7fJY99WADG_N7CtzaixH9GD9xm00RivtEXnbkXmE3Z7nxHmNR7c_QViq6Rv78xQUmOzGq3_RdWALsftAAc71Y8ZIn-40NaqBPsLWAnovcaD5IeuKlDzYrz23w0JIfZwwgq0gU-cojVZJQgAtuPsIzauvGwuy0MZ3JjmnZ4Y7q5d7_oIEDKKNSy8btkDyISI0fobMrD59EP5SX6HhHGM0PM3D1Wash2NNLurNGhbP7g6Etu7nVmmIKNBXD-sFKQSiOuIJ8GF34mRmSFIQVH6qJnugGVS63vJIdfYvNEJpOx8i8jxyXZ5MELLbRmMtm4", width: 2048, height: 1152, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100283295042048450199\">Bora Jang</a>"] },
            { photoReference: "AWCwydibuxroTQRG2kNd0sBeNZ9Nab3J_0gTyHQNjgS4BLRYvsm8u9X4lloKBqqultU_cxFTGbkERDeGTKH_QzzH95XUlDPQuloYyz7EzSthI0f0yPV0tsu_n9eEv839CMH6CvnVD8voNWaG2qgNQEXpnEaum-beHqlcgEHucznG28Z3qSoIwIzvi5kBMpfrwtcVx0ojC_EBZDl8kgYDH-hOfWEGiG_CtLdjTbSyMk7uqhgq1qoRjQhKGcSjvK7hFL6z4Ap6aV11zm8z1WaoKwmn0_rhEkniC8OBK_2p7PUscinwwCP9TgXtJuvgNigtcf5CkqBjgT3_KQSMBcKfw5Vl5QDWY5Yr8kcN0euSzFAeBLDmXx30sSpjm151Qampm2Ahpv0u9KAVyA6uirE2zz8clWz13B7Ng0jJ_NE__l06HqkTbw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111163394801813833458\">Samuel Yue</a>"] },
            { photoReference: "AWCwydi7n0VhcBle_y8Pt2EgSF7hywzRzEr9_1JzWFJSH8r4btsrI4jn5hJEDECJxSts3_9FMroUDPUCbhk-MU4bb__NiJZ0vH0MPrZz1QKUL8IjmCpjBv7zBUMxEyKV1eJY8qS0VjphkS9hbj-lFkA4TVrM-2PMf5FKMYIJCFhvoKD6_NS1631NXqjwT2mq2FWFyjRkKXyNxlm0jc7p7sxk69SEjSPtZNg7jJWSLGUO94HiqTyqoiLMbidArlhfK537VVYSUmFNEixHy9vFXc91C_9PSdXyqk3KA04f7HXZ4OG_G3g2TP_fxAmpdzMkiJonp0TXDykThSf5DKrwPm43PR1h2C6bGkWWEveYsKOcOwTmCQyYlRtVX-J5PneV5s0tilsT5qPMgEObVgGz95A83aOISb9UcrqYrLaQTbok7Gwqzg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117294576007722185911\">Nuttch Pasuhirunnikorn</a>"] }
        ],
        summary: "리츠칼튼 호텔 내 위치한 프리미엄 스파로 세심한 서비스를 제공함",
        updatedAt: "2026-07-20",
        highlights: ["호텔 내 고급 시설", "세심한 고객 서비스"],
        tips: ["레몬물과 수건 등 편의 서비스 제공됨"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "7 Raffles Ave., 싱가포르 039799", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=The%20Ritz-Carlton%20Spa&query_place_id=ChIJ-YtAPEIZ2jERUjTA0DKyADY", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%B8%A0%EC%B9%BC%ED%8A%BC%20%EB%B0%80%EB%A0%88%EB%8B%88%EC%95%84%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EC%8A%A4%ED%8C%8C%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "만다린 오리엔탈 더 스파": {
        photos: ["/images/singapore/info/tourSpa/spa-wpmkkbzc.jpg"],
        placeId: "ChIJt7a1YKgZ2jERZvJwPMkKbZc",
        placePhotos: [
            { photoReference: "AWCwydggV-2JRh8avSUptX7TjjC2shEjvH5a7BvVCd0xU8kVi4IzYWUPQ6q7qeoKr4RebPh-mdE6HN7-POpjzOHYl75U0a5enCjTlHOfKRuP8g-Aw0m4YUIZxNdJWGIBn3MZQhVYir4kq-XXyZpya1X9kI7xIrCotVwvEiEv0yXLCg0m79iz2NO2_I2DdHrADT4Tu6KVX-BBw2unJ1jSfBtCLnYFjKLHrrVkT0S8L5DE35tM7ZEdRcDU0S_Nb6W5LW7_asXEv7WPvkRiLJB_f2Fvh06E1cMqC092c0pJWJMzCviT0poYRTGEKJ-snI2qvnd0SOxsCLPhEc4GVCfq6Ov-zkAa4KqzAIHOg24vv52YAcYSLH7vF2qDw8ZrJtsoqBeqRO6SxWWoYMme0GVgTlXxssFRgZGgqu89x7Vh4BM-Oqo", width: 2119, height: 1192, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112575890029238940957\">The Spa at Mandarin Oriental, Singapore</a>"] },
            { photoReference: "AWCwydiKUk98-zM-NFD1IQE4sRrWktSSagxq8W2AZAkFh5KjfFck-yIypkEzbsj3tYVE4-qpw0KmCBxfSt8jlPGfvgK5VPFidPoUYGpHBWxdi6K8Ro3nVSQZjDeuBdCYJ7cW8jHZ34GovyksX3f2ladqtoJNYS9hughDRWjlT4jL0f3ZkQu0S-xlTc94LUyqiZpyCh4jhKR4gf_MJckmntbQ7UmOfFkAHK5rSBfuWFKbRIgVTKWK8wXMqss7p11IY1264acH9sj6XjpA6DTRNK48G4SG3QN9oIuq5aiytFYrtuVoypVmjW1ehD9iEmsNh9oI2ZHEKZD1OPJ-aUnTeVwQtbyP3hijzODPKHBh2F0MWjbq8i-pVFMhYyuMmWTcTKnJFVhOLFT9dzdZeuDzV83Sj2ouMvj9bku-ehcPN-q9cU0z7E9v", width: 2753, height: 3883, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108469694173089419496\">Ying</a>"] },
            { photoReference: "AWCwydgYgMwX28ykf6BS6kYMIYlBkR14XHi0w1WhmB3c9Wdz69ObFKqwqlj5uTmdo3nuyHo44rVm2yRovB_gkRCd7wYJRsvM-hJB_Qcy6tncYr3dRVAzb1RUbTKyCukhVpxjrDd-HxuZ_bAAjLr69Jh_YdV5TflSlEmxuDa0u0mh1QBi2NrGRmUFIbQPl1hOek1l6ysAxwAS0wixFtifdVo7v5NCP1UsJ-sT_4FUFem87LbmM3JWJUuZj4xWRemUgwSxapTgpTZALCCBYy_7Nox2SABMoDL_4kiPjtH40hPgtPlRrcwUn7ACl_3ovdEa0jB9nYpQChTGbJcgTTFk23OQszNEswJ6fdGwve9X2bx6XP0w0wTTfEDdBJ1mjWF6zHtWW-8SX0ODUUo5u3ZByKJ-IYNlonmj3L5sA1K2PXOWyIfmWQ", width: 700, height: 467, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112575890029238940957\">The Spa at Mandarin Oriental, Singapore</a>"] },
            { photoReference: "AWCwydjUo2c2WkIqUHJThpb9Yic27fZK_YGl4ifebwV7uTbelc0DqL16LnDJo1bhelpnKvcOYwdy_3leqZBRK1Uv21KV2nvHe4W-IUzJgT8cATnMYKNFqwCZPlmgPufFP62gOU7rDrB-U0b85PQ3nUv1_62J215lBMxuMHB60bPanbmEXGHKigXhRAT6P9xkXn0AEzhWi4deUwR5KLhisnq1fLOtpTgj0jcahUzXCdxcgwtAnvFgze6OIsD-1erk6-7hexSbeHIm643uafdU3GBbeqImz08JjK-ZIRhqBBZf73amuNEytDfUP6TqAgkg7KOCrhil0gldKsY1jQwyDwIOc7dOocKy08HPGt9SC9TQG-jdhNljCFrUKDKJYUdPnN3mITFmtvFD4yHeMDRi2VIFd_Ad7fKd4M2mPc2vT4fXvm22dck", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115326456249102699543\">Kelly Lyons</a>"] },
            { photoReference: "AWCwydhPNNIJjk_ty_eB-AEMyThO9cZXMaHqXYXdXdPag4WWJaFm2LvlXP65MmJ1-5dvOoqEN-7oA74j2307eKC5n4D_EvyP3UWbfjpc4afWO3eGnShPx2lK4FdlgeRNGZvg0qN-UNysINkXODBXM7v6AT7zDk-3vfEJPTRqGDAaq5uAQtCkTZY9_X85hRcAcSPk01jYgJ_Kg3RoIam8upYr_aOuCysqYkrObQoiP4Dr7YQZ95OTOQowbFA4cSxyloBwrWZHJwW7qeVCg7ZKMynerrc1__hXWf-_NEr7qQPzZJXb2Sn1IxZ429f_erF1tfxXHtmxrP3PezFJ_vBkCDQ6a6aBJuwWNjCvKjfwVza_JLUdSNwq3Kw3eBtRdw3EzLB2KWADoLMfdflSnV5Q0TzRqMEstX3C2r14WxMVTgF1sA-EFw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103644255895624551637\">Dave Rodwell</a>"] }
        ],
        summary: "나를 위한 사치스러운 시간을 보낼 수 있는 만다린 오리엔탈 호텔의 럭셔리 스파",
        updatedAt: "2026-07-20",
        highlights: ["호텔 내 럭셔리 스파", "프라이빗한 분위기"],
        tips: ["혼자만의 힐링 타임으로 추천"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "5 Raffles Ave., 싱가포르 039797", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=The%20Spa%20at%20Mandarin%20Oriental%2C%20Singapore&query_place_id=ChIJt7a1YKgZ2jERZvJwPMkKbZc", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%8C%EB%8B%A4%EB%A6%B0%20%EC%98%A4%EB%A6%AC%EC%97%94%ED%83%88%20%EB%8D%94%20%EC%8A%A4%ED%8C%8C%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "yk풋스파": {
        photos: ["/images/singapore/info/tourSpa/ykfootspa-singapore.jpg"],
        placeId: "ChIJsX-MA_wZ2jERiCnpRhti-nA",
        placePhotos: [
            { photoReference: "AWCwydgDhpymdVGwyAn7Ol4LDASgyWkzYTHFvELlKnt2fk47qsiUJLKytVJG_fa0KLgwS9Mb_PA9bKfIrRd_n_06PAtQYM5bp7NVUj9oWycN0BYI8WHHCcCi7rAL_yeRaCrdLYgBIURIEsOYdaXManVp5N5pK4svnwUm1NJ19vXUik3pEwPb6HtYRC0vQNzAjbbh5KyA05KR3jDQkSKTLOVpkebV8Om-ECb30s_kNDg4WHDPIqt_fnbh7kbjs90NXtRWaSVzMTZhyQi0N5sYNsIXTBnaWaQ46L-HRoptz2rmWrZdvPrMMcXnN065D5LF2sKycdQxFiVjc2kNmNxZ18XAc1sEBZZ0XQPF7CmA5YFY3PGfmY9T_k9VwIAT5HkkgqHDuilraCSB1GKocfCHbSvL_FQEr7ecB7i0rFnn-umYo7QCD6w", width: 1512, height: 1512, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107335302599254230224\">怡和堂桥北路店 Yi He Tang North Bridge</a>"] },
            { photoReference: "AWCwydhtqTdJXxwIuskB_XDqkNryCggOcve30RIrjWrQesWpVYhDxcDtCsse5K_qmSR1PQsDRtJ2uK8BI-cWLWriNdlgogB_KoJQsC362T6W4S3ziX-NAP0d9_Pv48-l6hw0xpFR23p01S7HhorfjGgKJmM3JFUYyd2mCrj2p0koA1JApFf4HxfxIS50G6NeKpf9zbRS6ZtEXo39TREIM2owNuqm2gu5AvDlsC5DKSU4PtHRH--KqWfFXH7GPDGQW6o6TsKu4GZ_fBSLd1OEwwW5jem8kvxUngHme_eBIr97IMrhyH6xfKzN-xPi6zPscT5rf4eTUlh2dPkcUNuTlNW0me1QrR4co9n_-JxjDIcGyQ8ekRdole7eol5VKNc009rTVXqPFESSk47NmKdjdrdF0o3wHHppDWo4ZjVJxg6y1EqrlQ", width: 1512, height: 1512, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107335302599254230224\">怡和堂桥北路店 Yi He Tang North Bridge</a>"] },
            { photoReference: "AWCwydhPJnxqc_u1kQ8-xyenp5fL7YQ68IvgvhvQm40OKtXpGSGdjjjuVeO7Zg-i6UOTpg020BlesSHH1CAbNZtCNMG_v501s1ISnPeLqkBg0Jb_SJ34i7EY7aTAWr5H827oWrLhGcbag6RPjR9uRcaSzh1a5XwHRv73BL5qrJReCYe152lG6Sa3Eeh7m9NR0BTRrA2-mkURavTZkFh2dihSH-DnnLeaHXMBiF2CUb3ZskLWOSfUsMuZSc3k-eFUd15bpic2OvG24T-8urWjC8N3-Wxt9_xxY2RvC_R-ObOj0gBoxXnWOk-HelXbND1MtI-8mUNYsJrhEdhydBS3IOO5hMRcDFgJgJQX8TkYOBM5Pv-AyZwudl2wBM7NAzSgP69SnR3atiGDvXkslV26eL-FRyx-G8eADraOlWoNZU6E7i8D9A", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107353623863604624641\">Gin &amp; Garfield</a>"] },
            { photoReference: "AWCwydgMOs6pfc4BcG16rPlWS0HZJsGs_AeUn2VsI3X9O8fNjGXvpMXKSvwftwB2zH2gLFqqab27jULMrO6p_0SyR1VH3oSykFyTzTGyae_Jyqg5Z2CiDoBNwXUHH3ZPtOJ73vllYv5jig98AfXMaMtRGO5UXn1Uj81PDGStL_sIejLgOqFfNJGpkHZul2aRVy13nEOxzJCDpBIMpkfIulLB6J0jehr7InLdtNDt5F29JlM4uHd4pTf2uqYkhq_rCFXV2qj3p0Mtt-5oxbu9x6MzAMV3wi7PfveR1XxLSSCnO_5sGgFURs082OUfivxTBngOoweeSlO2DKrvAJCLQQs-zPys4LfWhR5SSaBRtoQd1vsRP1Zm88mtaBQcpNmfPE1j_9q-VEXFp7FxNI9tNcZnyT9QCo1jQraMwGq6kTHcmOU", width: 1512, height: 1512, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107335302599254230224\">怡和堂桥北路店 Yi He Tang North Bridge</a>"] },
            { photoReference: "AWCwydiSzqWbt5U7fMjM6zg-Nnk_X2Ja8MiMj5rH7xvyjicTiVGcmWZC---SJXBtpXBk4_UfRLPf6ca4SzIInXArjBvVSORr6ain-CkJZSk7CYo_-URZgQ34i6MGvUVyDdI5EsMLFO8wCu2Qm9Ynxza83GqmWbO4YcvG89Dy50gaJISWwWs4BEbWPEeUWjLBo2aihD63EK7TmbwJOqNmDrgc2iPIs5pasJcB1Deh1tggQWSJxVFfPMyetKUBjLDnfESS7RnLH-khEpmK7dluOYtbMvXC-kvb7EQtXD0NeNWEKY86_uzXG4nxsLNwLHfufWD2kmTrJ_lITdAxxST-hYhw4HH-fQlxzcR9NYDTx1YrNF0beL4qkZFmSzDQ4Gaw2wAVCEzVFj4b99pIP2mynr9lEbu1RqzS4b9nPG7UthZT6TfHf6M1", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107335302599254230224\">怡和堂桥北路店 Yi He Tang North Bridge</a>"] }
        ],
        summary: "차이나타운 근처에서 이용 가능한 발 마사지 전문점",
        updatedAt: "2026-07-20",
        highlights: ["차이나타운 인근 위치", "발 마사지 특화"],
        tips: ["가족 여행객의 피로 해소용으로 추천"],
        hours: "방문 전 예약처 확인 권장",
        duration: "60~120분",
        price: "코스별 상이",
        reservation: { required: true, method: "공식 채널/예약처 또는 네이버 후기 링크로 최신 예약 조건 확인" },
        access: { area: "772 N Bridge Rd, 싱가포르 198740", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "여행 마지막 날 또는 장거리 이동 전후",
        links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%E6%80%A1%E5%92%8C%E5%A0%82%E6%A1%A5%E5%8C%97%E8%B7%AF%E5%BA%97%20Yi%20He%20Tang%20North%20Bridge&query_place_id=ChIJsX-MA_wZ2jERiCnpRhti-nA", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=yk%ED%92%8B%EC%8A%A4%ED%8C%8C%20%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4%20%EB%A7%88%EC%82%AC%EC%A7%80%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "보타닉 가든": {
        photos: ["/images/singapore/info/tourSpa/singapore-botanic-gardens.jpg"],
        placeId: "ChIJvWDbfRwa2jERgNnTOpAU3-o",
        placePhotos: [
            { photoReference: "AWCwydgZYc_-Ll7v72M4vzhULtX2LEo3QVSp41ofsoE-ViByqWwUrzkJ_9N0Ra2-LVZ8x2ok5lmipw2mMwDJ_yVHjfkvwsIbDJe1Y75MH02cl0iEfAWjSzgJ3JDb7KNZLVom1q8hvQfhhM9aAWEV3sLItU9ec6jqvmWqK5aqFh0BECUwwSvXygq4P25QqSuhdHDp7WiknbepAeSvi63v0hNY77NwBtTnFoANXqqUm7MCMjVdTc7lvepMS4LvXrMWOapFxxJt1V5_WQioKFEJCqklIh6fxngiyPd6-IJ7xhC4EY9XbFX48hYUFFTbWfjZY2FtORrQIy-8YG_W2DKN4gaXYhuhUbkpRNvKFeOR_w2edhepvKJFHmHzJZ7rDyQZgX8dgAc6VwsTcphs9w61C5zEA4lIJ4GPtmkyLe_MN-9K7qNokqM", width: 3968, height: 2976, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114099260479005188745\">ABHICHA_HAHAY “Q”</a>"] },
            { photoReference: "AWCwydjH25_wl08XSdLQoQ-wdG90jB1Wn1aLgWFCP81CluYV17FS6c9jHfHIUFXD5ckRC69rNgvIDi0NzwyKeKXrv711ostmqvBZ_wZ1OtpTwY8FDV4ZVYGNrD-Xl7Gaub4BcUa2cFluUAHSnwB4bDuWKo4JjKfBNwmPm9UNMTfyQ1FLDczRKSDmlzxJqF2dsW4dGYNEcv_aJCPh0kw5lVc17RkwDXvRa-aJCYYdkT6x4rRADf3XK56aCU4L2C1t1qFRFmYLPi3qxD1RkTe2KPefNhZzexM7mavm9ndcjlQz_CzPYKIiZEYHXjCl-IG92ISWgE0PLORuYdOXYlPFl0bUa5HoA3XcYTxZ0GnC-24_jFZ_ROUaIxPZScawI06rsfctT8AxryDl1UhOm-frlgqxCcazXeo8HBE8OwkTDSqBaJL9rw", width: 4208, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117992110672307416300\">Tan Chin Fu - PerfectEdge</a>"] },
            { photoReference: "AWCwydjkzLLbk_UlFdLKgAM91fZLHEOq7LaEp7JnCT-yhwEt6IxHsprTZEvhVE8uEYVb4ji5YDuY7k0I8dfKap1ygRSOIqNuELtAJw4NDos5xcLiwJPwrdcPal9BwUUciUDCaFoB4PiTjljPRB1kIXyiFE3A-K137-WAYY1sBciZKnqvFYxP7GEPTRfnFm8vyGzZ3Ncw1UJSPDQPTw2jl3wsw4K3x_gcIW_SwZZ3YOiHDe2OcC9rKq_FeHaMnUIcIp_pWE2oA94QCKWP_Yp1O_BnZb4JLNE_PALjOVmOIak7OBNDPeW_NxM6omcL5im_yYPkLrrdrV_4jRnfMHMxT-AhnYNfgMocZB51oz35vXJ_i3HU_2gmrt3xAjWHIDc906f1J0a83mePyGuEBxNyqMZs0D78QfdtSON57ASvCesbdOrRdOmOp-YVd7cQVP_fVcAu", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100135764351548273503\">Piotr Kalinowski</a>"] },
            { photoReference: "AWCwydgxo08iIuzVH5wdw6cLE8oXO7i3zTnC9oQ2XoR09YIxbefezdJHsTM7mPvACbeyF381anJchjKYyazKgnoV7znsJfSw6ai5McuzcBW3EfnhP3HKPJqsYf4xT-ZnAWhFsQKqJw_6nRYIRbiY3QsjTnIrWmNeLEsl4rky5LTg91M6bSKU3dgb4MR9NVAAE0ZY2wwIZlRumkSyLYo1zoMR7q0A-PBdqKG7dynqdeT57FDU3d7ju_ZTKEAO2v0-DRrhLXJXkhxJ6R-PXorS-GO7OIAeWeW1ctCnXq_VXmTiegD1ke9Kdzd0U3DxF3MY9hfuIMWmD-Kt-FSxZthPx-dMjvipAxeu8YaL7XzVUrCrHl3eLKE6kupO_Z2HV4ZJibms2XiV3KP4tebavZUuJF4_x0g7RqfEGN8Oa-r2FB-4bwtAYJU", width: 1200, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114336487561089575917\">malik Irfan</a>"] },
            { photoReference: "AWCwydjv5ezzpLN2ffmH1lN44LesIRx-rS4T3Mm5rmgE7__QAM6nAaxPfdJRqwn4HFQ5Xltb3wyEeEctzdQCNlZB_WHYYE23hJgRo9_FqX4f61DUdP5XWE7sTWhjmIM4smOyNewiIhHR1ywd0bJuNc6Zz6NWCWEoPS27FZ9k89ULD6Z_Da2p9ZxnEZ3h-TBmGIKWKlIigL5rabzQDcASaLePSfYM-fWvqtN_qagWKsZBxldskNbSG2HzN_94ouQw7votdZpVdO0wZtXYWglE0YUN1bbZxI42tP8SHMQvA23jRL4W39bR5mZPIHUHExEAs9TYT1ddW85Y2ovy_ivcSfxVGs4OdlNDl8eCqURkbOkjQL4FcnkSOE_kM6OWgwm0ZHIm-hNdTFUztFhJeV1zjNN7ny3ZM3xw0QsCf_9BGL0lDesM6Q", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104792725236220331115\">Min Liang</a>"] }
        ],
        summary: "싱가포르 도심에서 자연과 여유를 함께 즐길 수 있는 유네스코 세계유산 정원입니다.",
        updatedAt: "2026-07-23",
        highlights: ["넓은 산책로와 열대 정원", "오키드 가든 등 가족 관람 포인트", "더운 낮에도 쉬어가기 좋은 녹지 코스"],
        tips: ["오키드 가든 등 일부 구역은 별도 요금이나 운영시간을 확인하세요."],
        hours: "방문 전 확인 권장",
        duration: "2~3시간",
        price: "무료~유료 구역 별도",
        reservation: { required: false, method: "특별 전시·유료 구역은 사전 확인" },
        access: { area: "1 Cluny Rd, Singapore 259569", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "오전 또는 해질녘",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16876812000428083584", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%ED%83%80%EB%8B%89+%EA%B0%80%EB%93%A0+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리버 크루즈": {
        photos: ["/images/singapore/info/tourSpa/singapore-river-cruise.jpg"],
        placeId: "ChIJIyHR_58Z2jERGs8ou1UQWKg",
        placePhotos: [
            { photoReference: "AWCwydikYqB3a7HS50p7GqsTTR5bZM6BFe_goVk4ZvrMKEsGSl5mpHJ3vKkKaxBlxiKzY-Lxt92NAl6-TgaF51fnGY2AhltXSIYOR7_QPvN5vqd2crtVaQXZ5z6D-UnSAnRno-scSH1KCJOhhFiasC2nWoe-Wt78bFKSxkQj-2z3ZmcWtoTpLrCMKphIp-0vE6HQGIMs7ZlEiZct97UoWaF5Sx_9cih2on66Hn_nvSZ95O5Qdy4xXDOFy24v6NzQkBbEcnLZvhxcpGTpyY_MIsm7C8WgXsZ3WfbxgICkJQohjwencouufBpqB0IKcfnc7CR5s5zibbhPHWQZZuh6KWgtJTLIs7UNZtqjXpRsXvCy-vodhR_Mjf8BEkntDhlCyG_BSyV6wpUMmOv3X_M4MQbFmC2_CRDf7tSeKOdcHO0gDOB7vho2VskqM4WAAYr2TF54", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113825857764899855482\">blossoms cherry-</a>"] },
            { photoReference: "AWCwydhcEl0WIRWVcN03L-Fv-gLuLSMnntDv8zvSbe0T9KOAxWCpA0BMEfEh5FzEPN0SFYvV9J3IrVxRTg82FV89PwMFkBx9Gr40PLSlrOIVVXmvnihM064jBVI3F61ySz6qIqJ8psBwEvnBbqzNqg1pZ4UP7ewRXvSVW-dtF0wbQn2FXu01YnNM1NmPEqXuErMNsbSNZI_TSSw4SItgTBUbQ3jNkfCBCUVSlzOcU5ZeKnA2ORL2DZMqFXIhii_GFvLDxekPNpIiW5VmCbB2jGU7DkOkp9sGg8-7zBn_eEwg0vJ6I5smUi6T5B4o0jjNxvzo51E7uAQ6XiOPG7VPAr-iRsoDtHo7OEetHsuU2j_IPRUW4r2CbhqMmKFT1rAfrPZA47ld1F77XqQrQ88pH0aagda9YSLs2376us-c6RiCrtT-WkE9CFmE7CcLZwGCdovu", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106690276812995472021\">Venugopal Bhat</a>"] },
            { photoReference: "AWCwydigMJ2FkVE0-8cZBAMQC5ZYTMEOZfOJS0w7Az2RjlTHIfLx8brZx-WjmvZcuLvkziNg-pF7y_9A-LSVKMOHOHI7wpqa5VisnQwEdgYZffQdD8o_kdTOkZz0dfXkmb4g5_DkTBeCFOnAhKXEDsz2PE_POTqETIQEbl9UgkFA4_tlgvunpWeVTVnJP7o9sr2KpMY1pjeAW7dFiKGe9QXH10UV50zmZ5AXth7rgxtKPXuogskCdlqr7yvtXLbWVP4S8r2E4qOOqILJ-QcypRGrXDYh0qdXWYsxZR9dyXeYfBEjbD5u4fN1Ji2aNJWq6cNgRokHbn6FIKSotDk8DVAWB8bkCnhtQFX6w7cLynC8dRCZIaGRiOMZJ7iauhneILMtxcp-VEt33S5WZULi_0Vf5VRsg3TUq2_goWAo3DdneXyzgCNGCmSwK-sDPMoM5nLY", width: 4080, height: 2127, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117087820075552652379\">C JZ</a>"] },
            { photoReference: "AWCwydgRvBX3ZlaGmxpY2ZbvWB9K16hG7tlvizogU3MTpBXtQ7zvx3nKphTJVnqS8c39H1i9xll6Qd9v3yyceo8fvCbUo5mbEYzxeQmDTVve67DJZIalc4RJs5zuFzaTj7Ww9wZWQTZvoboE0_mX0zlZCTN8DA_ALT2LDBfRW9H5CGfgn6pZRUFbFbhWKkdorLj0flY8bWZ4B5OhrIKDwQXf3d_Suk5TYnyqx1XQ-KdTY2GxYBCQm5yqABDnVi94SLYgcnhkEtLtw0Ykgqck9GQP4w96alxySh1pq8SFa1438mxOaPboz3FRTiDkS2B-36IdMsc2kRC9h5qieJbGpS78Ui4yDPfUL-IAeFOBHWne5_BODwesXqk6L29MIlom5RBZmbqtRwSE0lGBffLEOFTiUE7drYblcgh7jBab2rwppxgNWg", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116536372130568450349\">MOHAMMAD SHAIFULLAH</a>"] },
            { photoReference: "AWCwydhNkJRHVTKK0A_sGNd1j06mW9jP7Olhm3eOK2bG53_9pNVX55wiEEmYVD8owb-ABoImlcmNR8MSKFfWdMAN1PpLH6wFDItFXE6eszHrybTe0FmLYg66CVKYeNp8_wTVWOixJo5v_5NmqNPF8ywQ9hRIFVi__GsZhDrC4eJkbjjry-EaXw1pUOlvE8K_m-r6gNds_bkEtu6meZCcNjf56LcN0UwrDxdaBF6uNm41-2wO1BO1TSZGZ65qn2plyiiW2SAJZ_r0N655CFQPxDF_UTYH5k-IQvoDdciNUjL5ddQefQpBEN0lsdsavcVMMbtSJqXk03iXzDIAokgLI1gC7us7E-KY-88HCHzgLIZhEJcwEX2IMhC5AVDuQDGq_bTzL5MtMiJXev6-yLxw0dn4vm0Ze8SaOhi3Z2Yd2cagCxyL_J9vqqxDFIYjFaS4Ww", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102700121919294622996\">Kim</a>"] }
        ],
        summary: "클락키에서 출발해 싱가포르 강과 마리나 베이 야경을 감상하는 크루즈입니다.",
        updatedAt: "2026-07-23",
        highlights: ["마리나 베이 야경 감상", "클락키와 강변 분위기", "짧은 일정에 넣기 쉬운 야간 액티비티"],
        tips: ["야경을 보려면 해가 진 뒤 시간대를 선택하는 편이 좋습니다."],
        hours: "방문 전 운항 시간 확인 권장",
        duration: "40~60분",
        price: "상품별 상이",
        reservation: { required: true, method: "성수기·야간 시간대 사전 예약 권장" },
        access: { area: "CLARK QUAY, JETTY, Singapore 058282", note: "Google Place Details place_id 기반 좌표" },
        bestTime: "저녁~밤",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12128610364800667418", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EB%A6%AC%EB%B2%84+%ED%81%AC%EB%A3%A8%EC%A6%88+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "몬스터 데이 투어": {
        photos: [],
        placeId: "ChIJoeScxg0Z2jERUhOkAfrx-mw",
        placePhotos: [
            { photoReference: "AWCwydgvD9XNXlhkOoTKsUEIW5lcsim_W-9YZOZ47YlJVqjXDxFgexEfp7RxEG_uBuLX5ooJXKtmzIAyHvfqvZeztr8PhXjRDWGm5kBYj25A5HyNhEaiuXLVW2M1N8YjMCRiEcPjs4_9aJ2DaJ8pGU44veVu4-aaY_Tmb2jA8EkpiAbSd7a6LXG1G3DkxwdBQI5TdSZ8w3sm_R6DZcB7gTCDvxF83Q1my5w8j4APBTEr1A32OIgk0hz8gZ8d_etJA75LVO6l_-fDrDTYql8LNR8u22f-Fp55dBNpIS8AF-QlMM1_FfmVoO-Z24N3Us9bsXovdb-Cp-mkuOUbGgrF2BdQvhNyedtM5ay2UAYFcAAsComAly25YOicbkb5GsRU8ItBphyOCmD45eEDMo3IXtVfwlqsXZdO1upaICQh7gHfjYYOxQ", width: 4800, height: 3599, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103584304335840469235\">How Deborah</a>"] },
            { photoReference: "AWCwydgYb3bQCQpZhSM5ZFilYR7z6ReuI9HLIQ29yFtL7X78OHpTJO5FST3s0dDQ8DEWJuTOuYQdTQB3LqObvP7efhTcLGtflnY1QGt7dxDllC2Tl3CF7MBuJVYivrza33gR8UtCSI6t_EqvZWqF3cwcq_UDqhXJexSJz5eX_Sv2I_qdKmZ1Ci0Y1kNhRi6EBX74x-53Yw5Htq1MAHsPhJxzyBffcjcoTB5aboQopCc7yEtOByEJcI96rO-HD9U44BQFY_MZ2y86lYliZrrwTthEUWuuEQlarOIQD1APrh4yu7zbamBTMpubfk2fVoGI03Bqk3mtopuLvngQYU4OmkB-pZxVYTVZyrZf2EFnJ5JhFctkF9Pp-lxd141KR38kiHn0uizslSXnIryJ-VOHetyFXUKxb0dBgk_ZI3k4OnS584ZX3r-I", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117425940512621001723\">Jocelyn Loo</a>"] },
            { photoReference: "AWCwydhSuUIpP6I6RKJNqK76UIMZNQarSuf4BsGe5D36RrQw_8tWnyXCWxMCXwsgUQDN8-BmbHKRFsAD6ETDIBuX5skIFExJ5X9P9UMQwnAeld8TzgjOEPlgojIBRAhjUNg6EauGBhda-ImZV8qEhfAwqVoGt9_sbLZQMtZ3XDzSj3T-zvECnhAx7ssYXuACO81hSgyXt72XqYQJhdurmCX7mA1pz4AQ2UHCHcRB1kCdpTgjjYKHll7xRwBqsJN1_zXmnG7ZwO73sR90ACAclxcbhxULpAHCvmHEnJm-iJjjEPbvQ2MjzzEN8I6On9dsCwe9iMMRP4opOPnrOr1cxvXQg8yL_uspyfpdtoxcZ-83CSvOJFY5WETzPbqV5tjrsA6lnGj_g_gC86pGfl16rvQ7uPgznJPv_2HTN-mipAVvpkB84A", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103437736777087877085\">Gerard Lim</a>"] },
            { photoReference: "AWCwydhi0tA6TtcqcDUUSx1hjMRylh-IBn48vel6xZUGo5PbmTGvw-YCxsmydMC7zWwhfiUhItTnqlW0mR9fsWkhBT3SK24HYwSrDXlJo6icVI5fwAZbTRNXYn4tn-R2h_6iJwKe8G4xs-FI8gKkEJDOOKMcy0-kWc1R5N7ajIh5D0KJyJ4M8cLqfESxFD157Xr_-sTq3Mz7etG1OSLIlsTU-sCoXYGp-wpGCwiQ14cTMo9UxH_pPVukV3_vaL0Y3Nfa3oGL5LZ0apeiQKbRo98ZEC4h0zXg7visnOqfacf49nGPwJcmVbkZjoW3AoypXdskBWU73sWqsFFeMJvPd1EHfWGW00HdxSlszAYqDAJ_XCxL5JISF0C75fgOSAtgbQvq4-AqO4sssOszC2eEZSSoj-bDDYfC1EEMJKh9YHJwzr0NCaYL", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117425940512621001723\">Jocelyn Loo</a>"] },
            { photoReference: "AWCwydhTxAoqp-YuzvPigyTQ5wsBl4QBnhZLY5gygztChwNAFrbR-wVTE4OjadxEvXB1kC46mbLbtMugmamNvHSoI5oCB8vuVUjLomg_RL3Jxv87aEK9KmdJ1SZRXifp5-BjJtyhf5K0sCHfWqJT0bL7HLTf2cQ9BZaqdTKrgfapE_3CgzkJAsbZIXRE9g2Q0jkfsp8EHvMyJw16whEqGcViZKZoAPce-KCMeYXoLDOWrFf1jQ1tyRpgg6xAanHxRSgPeMu8mFOi__b4tvcB2JpZyl8upbh0EBGXVayGeDO8xP6um6tifbTNmkuDN6gxYkN9zbZORGgz_Twi5MO5TJw-tMgEfrtaAC_4Z7bCp32R0QpcLcfNlTz4XhDoedP26yUexohWH8vpM_xU78uAvVsUjMIBOauY2I4RTnoh5VH6SN9HPLoEr_4c6zW08gMLMt5m", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101787360764086920358\">Patrick Ang</a>"] }
        ],
        summary: "전문 가이드와 함께하는 즐거운 싱가포르 문화 역사 투어",
        updatedAt: "2026-08-14",
        highlights: ["지식 풍부한 가이드", "즐거운 투어 경험", "역사와 문화 학습"],
        tips: ["존 또는 리처드 가이드를 추천합니다", "가족 단위 투어로 적합합니다"],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "71 Ayer Rajah Cres., #04-01 싱가포르 139951", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.monsterdaytours.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7852854956345529170", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%AC%EC%8A%A4%ED%84%B0+%EB%8D%B0%EC%9D%B4+%ED%88%AC%EC%96%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오프비트 싱가포르": {
        photos: [],
        placeId: "ChIJqeySWeoZ2jERg9tRyvxx6yE",
        placePhotos: [
            { photoReference: "AWCwydgqT3vf4EFApSO3Z550L953eyKiHMYvSMOyz2toh33z5yGN5_vz9ZQ1_QRLEtd6AIAzeYOn8FAmEj-06p0--JO9kM1u-UQU5HDycrpYdOnu4zg8ZNYwAKU1LA6VMYWh0nNbzEtAAIcaIdDYf4x1RE4jNVbt5e9ecWYYaWYXz-g1bfJSd81jm80nwW5erXObpYHt_aIcTKWckiHT8sK94y0STxse5kpm_2uz7St2CpThmnO34Qx6D6x7d_lkRmKg7oonWBgHDGRQki6DxyjNNXFHW4JBrEOFkL8pcCQxNTGvvv7x05zWdQbhqaiuHaNqc4uka4VqbpxyCvnT_QqWGOe1IbimBMePrhDr_-X6bZLUWq_YUmP1gTY_pspyDqG3tpIBom-g4me0rHv_pkZXjlo8f7n04dGPGwwNy7HQ05q-4ICK", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110798763138469431312\">Offbeat Singapore</a>"] },
            { photoReference: "AWCwydji_MZRgMNZWugb0Qu4AQ97oQnngPB0Vtfo60Glo11Veo0bhAotsqSigRvw4NWrS4NqKcHEJZBJiU5N_WIklby72HIj-AkoVXPiMU7FqjRWzaJ9IUZiS2K8hkeGM0bYK01iwAXaHaZz52cceQSK0KGAa6okzhvPVRk1r_nolvphsaDrgfPkGUA_v3d2gppDsg6DzmoBEfsSF_zjfJfF4OLm3-ktTQ_0hdLGEGw-dvcMowiFQnee5eg2UlsuK6c9XjWvZaYlm7XExRaep90fdFCIavULL1pLAvGN-FYgEKBxgB6G9kew52hENx8sMhBmJg_WJukdp3LsN9IjqKWdKZ6DMQGJ0qU4ktWXj7gmqTOr9DCoOqi4536w_ZsnoFIcqCBhuqPU2ECBf15evv5tU0YPTCevhuQHEx4-q9M93ecArQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110798763138469431312\">Offbeat Singapore</a>"] },
            { photoReference: "AWCwydiho66-fobypTTXZU4EzkabWJuJLT_KAiqaVRZO7J4kHjcj8JnEwJQCSJM53IFcQSsb8KzJyHwxh7UCS8d-536ZlAlm1i7pxG66GirRZLtmeIFgMI-4fd4KUVdwoNlNBjAlmcqXO-mKndGhQrdYEPO4zHiDUxkSxFr3EGPi8VtA77MDkQZyyxVEjmbA1VLuYHTu_MFfLk7nZCzEy5NOCMVYZB1a_sm-_j8Z0gvOgg70yPQ3ZXJFSBF0X9d3Xe-yXhLttY7vlBbG9HJ0bL2MZ2KN5yR9ca22_bQB-i5NvTzhLMvx5Xr26jDm4MkpRzWF0esp0H4pqhwFcEdc3k5sgHyRhCqQpj4sfvTjxuCDdWht7hyjGDcEED8B9YH9FOgL8u1Gt8X0Y2SgTHldcfOpfl4xUZB_lHNa6aymlwSIjCHMEZFbSRsaOsJdEsY7ks_J", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107124395588784912673\">Marketing Soundbridge</a>"] },
            { photoReference: "AWCwydjIihsNOCfODrvZF9Ok2xlivzEejDsILXdhTjTtJINwWKRad5bsczp-wQ3imUcskswxwh_ykPzK_Bw7USoYlYDuppzI0_NRjbs0hlKyoWA1rNYbl1PdZsz_snvX22aK4D4cq5NzKDRFjsKeBrlCUwB-1l_XEoMoaLC56a672PbzP9zp9EGZrNUogA9yCvWiOKskY_56Gii0zDNCgHCu-GZ-AQqnAu4yt4S926HiB6xDIoLeqUM1QOl0j8w2KG-7A3DPa7eJzgw79n8lcVqXujGnYdXsPsxKapUAUvgEVsK2H5Jq3kgz6ntKvv323q-piCWOgFHdWFgG1wmSDtYWaeFqHCwo70dPoq8eM3vo7a4BmxdOnOoLYlURU2o6iV5rvCQ3L5oPUtNkqHcdPJ4iuzeRjecvAg929kWZ25bLIkbYog", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103863939956804131638\">rogemar placido</a>"] },
            { photoReference: "AWCwydgnsXSgKMn3jaLg6gMmKal29oHiCLLxiILm-nG8mMJp0yuZmHLR8fI6hTgrEZMptlTppsEUPaa5iVommJ-yeCvmnLpA1fbhO3p6He2jNNe51EvT1fLdyDqNbRxz3HzzCx_TJk6qMS_LelVICxbomjEZkzR7eTVbb47wrSj-RqYjB5E2CE4EAUPptKZz1L6ec8Wncp-BNzmJ7HyeGH2tAPfrpQPAZCHnKuBP3Bbx3MKkEKaFI5jyXXqWmfBK-kDeDYA6SiZD6MxZJW_CDZ5PFgu-cRz1Brgcl1pk4mt67zigkqKzKg0z35y6_TNYCPcwd_bMFAM8WsgqDrjFzdKuo7VfQkce5bdS_iQC2MkGqATxBD65nYZ6XgIOB8WnIX2yA2iRmZlldPmfNj0A4_-wyV6hxX14JDerhiUUB92mQzNxlYQe", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106333662016415121910\">Francesco Esposito</a>"] }
        ],
        summary: "친절한 가이드와 함께하는 훌륭한 투어 경험을 제공합니다.",
        updatedAt: "2026-08-14",
        highlights: ["친절한 가이드 서비스", "높은 고객 만족도"],
        tips: ["투어 시간이 길 수 있으니 여유를 가지고 참여하세요."],
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "403A Jln Besar, #02-01 싱가포르 209010", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.offbeat.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2444172553318685571", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%ED%94%84%EB%B9%84%ED%8A%B8+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "렛츠 고 투어 싱가포르": {
        photos: [],
        placeId: "ChIJgTU9QHMZ2jERhUGs_BvKlKs",
        placePhotos: [
            { photoReference: "AWCwydgCQ-R2SgLgm75tpWL2L8PHP_nCuqJsDUvVxOW_AfbPOWpaCZZJosyjJfbfsbk3Vxlit9PugXLDLnQfH50zuzH928SQ8GrCxcaxo1a_XXJJVVGJNH0X51pji8l2cx256JNtXY4necWwVFtGEYq8ktGHKvpBSjrwFrUEJzrx66tAqrkXcEvuaJlrm3qqbVl8k_zerlpvKfeh74-9GCEmT8QgVrEAJugGBxWwHr6NVMUFsVAugZVDSBSzpIfvuW5pB2gKS5U5IWMiOnYaihsrrsvQjJog1BcBij28NmFOYhd0gq4BoHYTEHNKOMZfvNZL0VACdNVCIjtqp0mrkFIl9EFPXLKo72ftRx_fTZWw8KhW0XUO25NPmKEFTmO8smA4KRiTEtXliGpxNQmFJs-aIgbGap8rCqKx3eNGN-WW3324sw", width: 2500, height: 1749, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102822793685074236146\">Let&#39;s Go Tour Singapore</a>"] },
            { photoReference: "AWCwydhEmxXR3t8NxqZ8g7ddIcbZX6RLk7E1JI_wlUNZcJVU4BzBSsf73ZynRCPGDQ29XS37YEIubL3YtxX1aWf6B4M-DKCT3QGg7HuqQCh8fuDyJ26EVO-aL6mfsEcBvqch-asXWu8kRM4A-X0RS3_QYe05ZQ3zlV1q04vGdGFcqTV8hAky5UIZCTKiqxvx8_Sjp76Jz8FNc1JIY0pylXv5wwsdeGfxqMQ4irVHeBG_579_f4hPilaog0v4-G77OkDWVdutdueKvu_zo1yMc4aIn4VO3VfDZPT957Ux1Zp2ijCcOZozTIcqZcaQPtS3iKFfEfVWJP7QNCBbI6uV45Bd3keawG1uglLzlUB_v3X6Iaj22raoZFieMy3CkXpYvBnMydqpAfrfbfOsf_LuEkajaHU_0xV1kNuNII6b3EL_BAdaHj9lmUI_kKsDEIpvJUjM", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106574338580943562075\">Theo Gudsell</a>"] },
            { photoReference: "AWCwydg60IngkSHQMUweGQ4LgD3k1W77Qhc_trwdmNzaJAFjTaYqbSWpTEIaXm0bnNAhTD0UN7UyGiZ9enoA5WhIsJxnk06q8JSloTsM5J5C_k7u8ixxiuyjxInCi3zEnxxbAWGOxN_ZC_YIs2WqC8EjUskpUu57bJW9zLU4aJEdq2Nn9Qum52sftThSHtNNRV5UWj4ycA7ENSh5XpmdBdfkFQDHVbihfDr0W_KYaFlvwnnIp1wQ32ZT6jl0OSvDzCuEhoJbONMEM-THVFbuV21wHABo65Grt-F7lHOng__jKb-Di1UkD69tR16owCANAwjXeFpW-YP-PR21RKaCiJdHtf3iAIShx6_NKUoY3GP5sfSWbwihv8_xOyAQl-N_eG2JG2-lZggWW1ZKvdhyFipKOmA4F8XxWkIQiVPD5d-hhe6jG0cDG-1o1_Y4GAe5JH74", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106253635469363444651\">Darci Van Deusen</a>"] },
            { photoReference: "AWCwydhCbVin_uGc2TMSr83MDP9953Ztuyw03KTRHfpyRfL5Wf8ToSF9D6DcieCh2xF6NyFnc0iL9XvkHhvWvFKafSIe8KIXmJ-leGVjvrIUdeytmkajGR4UsCVIG-JCVmlExXpqyYM8ipjp3wHIDiy4KBHqpdOxTaKA_F93WfLKuoIs-11kUy7BShc3UOs6uh3VH6BW86ncrQIi3tP662vAduAQJdX-Pe20gnfux3F4YWMseWRPglYqhK0YiorrmS3akQ7fiIErHEDG5jNrHurXIfRtkY02p6KyhfqrxYfyKSvEWZQE3amF2atIsZeg4OiDx4XEX2WJ0JMkrYy9stXWMQKr9cVZseWwjQsRnQutaU3TKBs82bVpJb1v8xzcYjSdkyWcGrlRiBZHabvM3ruAipwXSHrDfZ5O0VeX_46ZIo7iK_zQiv6PYp-Z14IAXA", width: 4290, height: 2580, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102822793685074236146\">Let&#39;s Go Tour Singapore</a>"] },
            { photoReference: "AWCwydj2Zf7EkVDw-gGRMbjnRMje-U_fnDFXEfFoIzs-ERGdGvp0feTnVKZsRDySGP7RoXCLTN6VkYISZn38QoLVgNp8DXk92rrQwxVep-42QBpbSq1QrPUH0Y5QeryQpXEJaPpH_U_gcsoil3KxJw-4d--Jk_xPNFE0vn3x7NJxHXPbUHqOpCYnF6DdJ5XuFKC_G8wmZ1QdiC6B7XpDVYuWoed8GX-NZL-HRkmJ8DEuBwxEgvyaRXCp6ZlMhQxqPx-niAEtAMIpi-TwsNfPvU0_JgOpwDGR_c6OT7FTlkfju-aATzGSgLc-y2lN7duHu7Q3w5dcOhba0RmW-LeuFd0HGUBfQpplhxeC_IWEncW7gslM0NFgVX5lTBQs2Vhh-xd_dt_-IPqazj5yOqfq8BAjhvXm6N3OxUyRHkawnZBMeU8oGPd6KKS6rCRqcRojVfk1", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107149571843299519772\">Pepijn H</a>"] }
        ],
        summary: "열정적인 가이드와 함께 도시의 매력을 안전하고 활기차게 느낄 수 있는 자전거 투어입니다.",
        updatedAt: "2026-08-14",
        highlights: ["도시의 다양한 문화와 역사 체험", "열정적인 가이드의 흥미로운 이야기", "여유롭고 안전한 자전거 주행"],
        tips: ["활동적인 도시 탐험을 원하는 분들께 추천합니다", "가이드의 열정적인 설명을 통해 깊이 있는 투어가 가능합니다"],
        hours: "월요일: 오전 9:00 ~ 오후 7:00; 화요일: 오전 9:00 ~ 오후 7:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "Block 462 Crawford Ln, #01-57, 싱가포르 190462", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.letsgotoursingapore.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12363729098590929285", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%9B%EC%B8%A0+%EA%B3%A0+%ED%88%AC%EC%96%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "라이언 하틀랜더스": {
        photos: [],
        placeId: "ChIJP4UOilsX2jERc7ORRlyaxAk",
        placePhotos: [
            { photoReference: "AWCwydg_KoMOMGBaipqtqCl0B65LhKOxlFTv0tRG92SRWEb6DhLwl2Sc7Cmo9ua1Gwaygsz-nMB-OmJPJw3-ePZWwqdt6Z6U78Avd7A36AY15a2ImrWm1W5hK2gTd7mepmyRh2edMD9MPgXc46Iu5fEipaGOdZ44eauspdwcVsx8pTfOOeuxoh9k7xmRsOU-xH-nu8NsBHxxkw15U5DTIC-BsIGncDbUclXCYdR03kN7xFCwyyDm_-_6wR-Cfq8SeoLw7dDJ_CDIwwk5lKm3NAc17fa8UldpNGQH9-60AxPHKdth_hg_jqJM1l6fHXm3eJ_zuwP5v44D5iGMQeiNer28AxzTnE_kLD560jy8S7M_L1nSoss-cB9pCF8CzzILiEnB3CBeJK1LnHjA85HX7TJRJkdO-NFQU3YICP1Zvn9_8nf_PALiXAUkihoOprwsoraX", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116624519871505110676\">Collin T.</a>"] },
            { photoReference: "AWCwydiNM8C4NgUdndLfp3iBjytJJsCyubYS-aipxtdprEu-_z5CfUrQi7W30rZht_Nuq6Ky1iidJ9vsSj1_3FRv42NukzjeHp90gUaaqKRSjkefb7nBaIodlj7hOUENt7U9I3216m4QbAzi6uoLJaKhYeLP8oYE9MI7hL7u7s0zU58p0Wbs0Zz8AEmh4XFpW2xL1o5D33EH9uhPWxeT9YGphGfAxj-KcJXDXG2boK69Q-g8vBkYGUL3mbqu7NmHui4VF7-zdm9l7Co8d9-NnAB_fXAFjDj8TEQLEhrwpWo8I_Fhpsi7BBxVLiih2RgXod2pTcCzlqWvcp09IjlhiQjp0JERxzMzSWNVZpU5yzMRWg9OjZlOvdAFcGOkhUpfod4QNub20-aZQaoTwkAJablu3YYHI0TrZnfmcwVtDdL4vhZ5U0UASBMExze40K63hP-T", width: 4624, height: 2608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116556450513402968047\">Kok Leong Goh</a>"] },
            { photoReference: "AWCwydia12Mgu3Rmi5krcIq_KH7-AZgKyCGg-l3boSIJRIlahobPcptOV3c3RJUK74gvcfl5UhTKsP3dklReNnmxmqq9usKQhjN5_6cktdjdEu9ovItuRGB8GTFaPGIMUnLq8yj0JxPa_BrRe0Td14cRXTSaoo6VgMr3BP4miKIBD7dLAANWLZaqgievBmh97-uxoTI2alVQjKH1DG8CJFFUnyTRQu8Mvuj_fVRApxEwOflFK_mIrEGAidxTwYldIcm8j1FKM72mTCifuaDw974iUdNBRZB2PmCWoW57BaP1W5_P-3nyGnF0kceWArLTOSUTgpVNbDmV6yb1KbgI2vTyfM-OyIsyWje8rhShBn_5WIIA4Fq29H7WhalciC8Njyjnz85FRCCxgV-UG0JtEh-CFU0dlUsdUZzh8lk9iBsIg__QHMV42B1yFpo-yNF1acUw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106707318182566186403\">Sofia</a>"] },
            { photoReference: "AWCwydgoD3ljkT3T72ggk5bRUYs7N13Kk54hseGoBDhwLmCGy_rK_2kiy5WNL-1MQ3UdMa1_NagXxR_u-bPc_svjhnFcKElFNr2Tej-l6DCYSVeoqtvWfxBJ4tJHomLVzzVmLEIXo2xaQS105fV3ybpKU6vvFda1_v0pHacEoo-kHDcgaRGJ6cMtAZ1Z2Ik87yoPbpzBuEoGidWJfpYxZ3CF0N1PPUUYJvmpCBG3Daiv9t4WYMwsR_Up3lgoWuhHtFhaNmEPljqAyTnp4mLcKJs7UNzlxbsPQ7x0j0-f0499A3aDmGNmYJJ0xY9CyPdye3AmJC9P_5bFzEAxOqKUwnry02LQtxOgWkN3nN1j5AUQhDYDbyeoCY9Auw-jRvFauDTK0KRbh7F2CRB81mSTIwwzAgQk8pAxIiq1cLVTwV8xXaIfew", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101090473314887455188\">jenmi yee</a>"] },
            { photoReference: "AWCwydiACl-kIx-JsmLa9tpuHoFjnhcq2tnwW367GDy8MzhLMS81RnvLJEu-hBOewY4uUgFZn-9jrfjGVyBCtB-gcxGJhp1bhwd25dIeRN4K2ZEtmN9c89B1Sy91RWXqrzkAlCA5IMvBvAUBH3cAhuHqLCg9Ashl6srcvYX323x4JHYBrjAnm-aPQEnRyQ9RVJLokmcdm_U5H35a25Z2rejeOrvZXx-LLBFmCHyP_2XCo8UFespHoPA0qBH7OPSQ3OMNwIzENU1LO76Q5A96vnPHrWobhY_iK-y6gmWkXWl_UP1XfScZyv0cQVvWeA5vkxpqMOdM2NzhI4LmT7SU6IUi_Re_vYIzlSXzylTLQTxs_mUeKbyWTCfkJljSDz41fJtYAp33vndoydN4skvHzXCDjqXduqLNY_QSpENKNIW6Tr4RjGfoyGXjrlqtjueV_Q", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112782061028758780196\">Tay Yi Herng</a>"] }
        ],
        summary: "압도적인 리뷰 수와 높은 평점을 자랑하는 신뢰할 수 있는 어드벤처 체험지입니다.",
        updatedAt: "2026-08-14",
        highlights: ["4.9점의 높은 평점", "7,000개 이상의 방대한 리뷰", "검증된 서비스 품질"],
        tips: ["시민권 프로그램 등 다양한 프로그램 참여 가능", "방문 전 운영 시간 확인 권장"],
        hours: "월요일: 오전 9:00 ~ 오후 7:00; 화요일: 오전 9:00 ~ 오후 7:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "71 Ayer Rajah Cres., #04-01 싱가포르 139951", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://lionheartlanders.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=703857162888262515", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%9D%B4%EC%96%B8+%ED%95%98%ED%8B%80%EB%9E%9C%EB%8D%94%EC%8A%A4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "어드벤처 코브 워터파크": {
        photos: [],
        placeId: "ChIJS0Dhxf0b2jERAuG9YaPrYjA",
        placePhotos: [
            { photoReference: "AWCwydhXKc533dx6BbkcnFKk3wsjH73MtUsqc1IN-j8tHzcLyvAekNer91T3G0gk4-MCrWAvdalyVl9z_1bSpjI_ORxi2_LwN8VRnQcU_Ye32UxvTlCJy4PyjhCC7TBBDlSg5AkYb0cl7DZZ6Mi9Y7ISyoW_nBf6ujeb7sOeg96JdPBVXW5uwG6HrgNYOqICWTg3om39rQznSn3_RXOrqsGeTjcnWem70EqwaqKugM0psTt0-niXOdlEuqt-3XoYP6yiSnmmO-gXqdOPCx27SRfyQXwHt4Q-ZPwjDNdxhmxFGTu3XSJ3x-QhX86ds3vMn2N40Mbete6YoAyTo5Me0XlDrsWQ1AGZ25pM4l3vLvX7yGIdcvZaPpTuspcUFdnjBUrgyeOlWT7WrAXSuSTo3JCHQqQg5uAw78xOJGo6Ao5liuParw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103125165844136164329\">Ganesh D</a>"] },
            { photoReference: "AWCwydhT9bG2Q-8dS_MxVp4r2m9JPcmzSaKAsRjznuyhdTFKYEKSgTPaqohLEiPuuV8QZOTp-6x7TGoRkx6JQlw3iEyhHeE99KH3eRWnZi03vCJBH1avQY5FHfXoydJf0utNWSRmlQl0UKirOIhXsDpfQfs7am5wbf6XJkt7jyexLr2LFXGzdQjNwQXd6VFT8uDpWZURfnAggbRHNYL9h0stFsIOwmm0IVpJSALhp9mAtR8pQiSopRKcswEjSjurBL93h8jA1N-7S24RVhnl5wg_thzFsCnG4EHCKPhMzp8M3hPNH2g_rh0sMal9J54PRvBChCCDAAMBTobVt3iLV1ZSsTJUPFQSDFJpojxISlihxjCUhKPxjloXeKbBY0q4xrfQsn0oxnyfJ4UTOzBcBE6v10vYEws2h2nhllF_-6vPU140yEfH", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115988323065110786349\">Chee Keong Ang</a>"] },
            { photoReference: "AWCwydgO8zx1w7p_54_9sK-foCVvLsEguLGDqGNId9ihqrvJfITLZZFlrkuaREJQQLk6hA26ZIpfVr07mHobP6jtVAe8lxi30Qk8EKzaub_EsLT_KKvHvnv2pg4b0nGGVkRTbdOc5dPsFaUUE6I8Idv8zzQaKuSUCbBIjnADu4df0ZXCTqjs36bxTes5NlxCbwlzeD9emYGO4lOWlwplu9V82KyMEv9ChLKC8osrZD7wazg33RnUMUqPIF3A_nuOZ49Z6DEWaxZw3J2L3RkoLXC-0NOPFNJ9cxIELuMp2rCx3CwbLCoTToeotxMoU-1n68SMCZ3lpujNfiwCT2aHAC7BEQyzU3EU39typzK2g-dWVjURb9bwKRU1CFkUYINEqWH8aJTPK19ipcQm9AlFil-t1GzgOSMpaOZugXBCIp4uS1Tnpm8avrgqOIl_H7C_F8qo", width: 1080, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116830165471327910160\">Adventure Cove Waterpark</a>"] },
            { photoReference: "AWCwydj_bBTrroVOxS0K-wZsjk0cqKv-GGS2Lx_F-bVrKlYC5cjPsvW383YxVfhZbR_Dpty_rmzDRvd6oG7CG9FG-q0zaD68pbbKA8STUbOk8sRDLOEMV0L2iUMkoD1e4q5AChKl4XxXn5MY4ItqZJhol3SM9RNYVAc2LxdhUAJVPKECKjfvmVYmOXLoFUfstfQ1TqyLhIayFAKkrODAPwfuP2Cj0mybNqVmEwPDJq6i9_ygN7wCdJAorUABPQ6PqW9E4NdsHcqarJDYDBuUYQ7B05XRPTimKZIxfdcw6kQu3DYzeK8GQ1sKlHQ8-1Wba_N106HX0Iw-x5sf_HHdrRZpLix6NoWm-IeL2FrOLHDNKsDaGH2neFeGpnHHeNezVi_ACelhO_K0hMWWEVyAC-xsgKbwObTzmTBm_VmOqud1GPO3Cio", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106352079186783919796\">CL Ang</a>"] },
            { photoReference: "AWCwydj3RMsOkOvJZeePuwQMQ-MsuHolyHnVMhy7nkmsgAZ3Q4FMpf5SYj8ZG5o_hh_ROQSEgrmxsoINuoAhoFQRZ6bilZXDGek08aj9aNDS3-vqRYqN6qAQA1MO1vhmQN87T14D8e372dO8Nfw477QmgKuVYV2NxAF7x7H9WZsIP6I-dg1B1rnd0cd6Xk_zAkZoUrnEs1OYXVdLm_3B6AI3yuDx74PCSlIDWBeFY33WSaJjfYKTVtpkiHRXPF1o7KV50EUGbQHMuLYxaM9cx0px90r99KWThZNuCJ7mr8b_1rw3Cda5UqrY1EGiHjfV3YZteEwmMbkViz3RFjzf6qvjvtlcXg9I2zR-VFO3-ID_Uip-eOJ2YjUWdAgNhMc74b-pK5QJT9RavJOzNgXNYJi3S1cxj1sn-clx_JVrXCw7y6JBgzA", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109944888701944239117\">Sridharan U</a>"] }
        ],
        summary: "스노클링과 짜릿한 라이드가 매력적인 테마파크입니다.",
        updatedAt: "2026-08-14",
        highlights: ["스노클링 체험", "다양한 라이드 시설"],
        tips: ["인기 라이드인 티피드 로켓은 개장 직후에 먼저 이용하세요", "평일에도 방문객이 많을 수 있으니 참고하세요"],
        hours: "월요일: 오전 10:00 ~ 오후 5:00; 화요일: 오전 10:00 ~ 오후 5:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "14 Sentosa Gateway, Sentosa Island, 싱가포르 098132", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.rwsentosa.com/en/play/adventure-cove-waterpark?utm_source=google&utm_medium=serp&utm_placement=website", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3486608148490215682", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%96%B4%EB%93%9C%EB%B2%A4%EC%B2%98+%EC%BD%94%EB%B8%8C+%EC%9B%8C%ED%84%B0%ED%8C%8C%ED%81%AC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "메가어드벤처-싱가포르": {
        photos: [],
        placeId: "ChIJpxs67_sb2jER1pJkEAHxc0Q",
        placePhotos: [
            { photoReference: "AWCwydhJeU5ccRz3QlEJHUgXxq52QkeSTWbo7UZmqv1AeBvxsDJF-JMkYTlQCuedex9_jcsS-Lag5-jZCUhBK8yV6_FJK6uxxBWlkiK3UXY0BbM3rNg_-BCOMC3s_mBJ9UjEEEDM3N0BfrhM2y6LCpscGpdnnnKO6fDWDMedBWHXssocWS30WqtZmGRjYvaps6RANFfIYr4ODiXvdLlxjHiHV50Gd5x1OxQBFFUYSjpP-wEeOoQQ0E4B1CBCgvJUPmYicZ9V6Bkp1wxYYRjyGexsu1yLr1g2kQlhqMhBIrRQbf2EHTEbSow9_taINo7qjpCyfjcR0oMl2K3tg0_H9t4ZyaWx50YBiHINLMJXgKolWhm-1hHKTdViVP7ddBZOe33RT1sCSgrmgjIv63Gi_XFAhBdM6oB4CzONTOgcE3pen84DVg", width: 3276, height: 2508, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114391224828136407192\">Mega Adventure - Singapore</a>"] },
            { photoReference: "AWCwydj7XGMXkl4YXfG2zHOKdywhVtXmSasXHnEwL7Yh_PdkPMKLQi479cEsQ-_hcqUSt-gsriR_JOSfeKD7efN7FmeBI35kNFKzreMxtybuns5jjc3oRrrMmCMXXUmI_LKjQskEEK6wtzGj35NYMSZaBn34dvwjfdAHYoC7Kh0sFlFl9QL8y1D1xlAo48nqaVaoAqYFMb5_DXeiLxn9ezOWQu4HUB378knOQX8mGR6DF5xTZsmXvzcOYERRQYBX39nNIdiH_JlyfGbc5oGGGJTtXeaaGKLa12jaIeb_gbcToJGAmW0iY7ozQAV2-RMMoyqgFmagHh0J-z_wU4I4iXvHUX2hFHpLnDVk0R13SFQCAO3-JZFxLSLAywyx4K1yhJIZgmPd23TYCeXdNV0DD2M1NJrOrtVmrB8IekrTVRBOK8id9KVeh-qJprmGNqWOw51d", width: 486, height: 389, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114363129400040495682\">Charles Johnson</a>"] },
            { photoReference: "AWCwydhUVz5iMODT8wn8Cijfjx4klZnJtOFiI3d-4DANBCH75LB2H86LN7mMsE3bMhGVqbr7OyhRA6DBlP5hVkRmF3h5kb9Q5ZBuXobCoAEbTV6gruvew_llBjCAMY4_UlVax6n0lbIx_jLZ50QyjFVHqyrOEZKKZLPi-SyL1ffwFRZcFuaKPdWABFYaenP6uW6JDQsa88MDdqRYlYCSy2bPA0TUuw7aGUYLczIoe4qPcMNhBXBaffoIuL-vDeUEWYQ1HJUhKQKdeBHHM69sPTSKSXwmwWFBOAq2IGVL-Gb_rNeovNTX5uGZQ_GRMl93AMGfyOGzvWVBs1x2cLbv56BOV51ZTv7VnWf-aEeWa1HiB-saVBDtMHkLMoSWooa1-7MZ0yRhvCWQ17yMohBuFM-seB1snQdCZsXl6SNA2lLahncEt4Zd", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111916002875484558629\">Xin Yi -</a>"] },
            { photoReference: "AWCwydj-ZSugNHWAv4UtZIwbP4T7n0Lh9lTFIvX06Ag7_QPuV5mcFTf632HQCAGz_uTKPM6ecmH4Y_il_FOu1e9Y4LIUex7LXNoL2XPoIlZSx047s9tOwyaOv-mNl5kjtyqRXcTDYfMEN5VQVTvNRGlzk93l1nLmhwzQ2xKMVb17ng7tzfFz18qNT4W1W_AHP3h8h0oLydOCvzYxUyWsF63BeRDXwLAe29is3tJ1ExdZT7He43axdFDYUH820Leq3beEGk4H2QKvSVkwCgSCaOq5QwYOqc8jP7USwoeREj4OKEofFOS85GObU681ysQkdATPF1QzIXHRo0bk_YyTcCuKO0I8P3VHBhzKwIsA-d5PsKTy1CE8NrGrvLaKwxeW52Ay4NQ_4fxu8NzsI4Hls960ni7ABZbzMphdnGyM4Nl6KKzTgy9h7rpPS81MVWkQdnQR", width: 2048, height: 1366, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101463154181027804003\">J B</a>"] },
            { photoReference: "AWCwydgbAj17DdImAxw9E2EM0IeNObI7FJt1oV5xHlVpzlju__3a2523DDID8xOwG02JMu7j81Ty5BRYNy9vqtgMLGMO6OUpqSXOQXJrW8_cdoMT7t2Ls484MN08GUxqymEIH34ScZdXPtqiO9viBMZcRybFbj83H86ei5AMFplgY_Z1xYJKjv7G1P5EISvRvAVCHe79Ajzm5ZFVYNcOGHQRqMKMdqUQlqUqeFDKrWbxQmdzpT2BHaaGv1hk27SO0abxiiZjEBa9qFAYHYjVByRFPBv61uv-xDL75_WHgJvCrCIH1_DrlmKNFV2weYzal4dgYaafY1HPpRISEdiipW7bAgaYpj6viBZFpx4_0XS_mtPYC1GG3kUJIkk4tW-snyxpWnLKXigK9tknjy1LZE-xaDGclcWi27-ylCgc0jy4JyFubA", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110768591854763215780\">Ishitsuka Naoyuki</a>"] }
        ],
        summary: "높은 평점과 긍정적인 리뷰를 보유한 인기 테마파크입니다.",
        updatedAt: "2026-08-14",
        highlights: ["친절하고 도움을 주는 직원", "즐겁고 재미있는 경험"],
        tips: ["직원들의 친절한 서비스를 기대할 수 있습니다", "한번쯤 방문해 볼 만한 가치가 있습니다"],
        hours: "월요일: 오전 11:00 ~ 오후 6:30; 화요일: 오전 11:00 ~ 오후 6:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "10A Siloso Bch Walk, 싱가포르 099008", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.sg.megaadventure.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4932551003773113046", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A9%94%EA%B0%80%EC%96%B4%EB%93%9C%EB%B2%A4%EC%B2%98-%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "키자니아 싱가포르": {
        photos: [],
        placeId: "ChIJTfijDAAc2jERoK5KlVJtFxg",
        placePhotos: [
            { photoReference: "AWCwydi53tHX5oa0OXteq1tVZlOOl22N9UndiDYvA-2cXbn3nnP698MMU-mhAruyufSczMBUiLoA0n52fzWgb8pAwChhP5i8TBMaCbVYnEFFE2ScTYrEQItOO4K55Jh272vIdWa-WuuJFzgqza94WWH8OFnmv67ztYTe2fn-8-Iix06LGZUCMHQsfzeb8HGNg48GiPS-Z71T1Vkt0T2Z6UksgAJVmntWopPDBa5LALBkExOKgARHFjq8FstWw5RVNmFMVjzXLiWQbuUsdz4l56XdW-H11Mr9WJbx4dIsi2NXDMsRvdFhL3SO661jl__6XaMuHNcfQIsgGu4dpt_GQQKeF6mGTplpX7ZshN-zLuubZagJxmQzlu8a5Ty8hk8pnRD3p-isT2kE8Yp9E0Xrv_cgLUTbXcBpL4qcmFTwPUtYSlkGmA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112514340651353359830\">Tejash Upadhyay</a>"] },
            { photoReference: "AWCwydhW-D0gO40oYAVk6SLcSrZlo0UHQisElIXfq5zMvZkAfsaWbYkFmV5Zp1fFkqvUSpTELTWEh7y1F2ZWgS55ciD4Ak2-cSy1xMk2JSCzyQpF_EhQ-XwDnqiiCDUBQbLLYRUMZ0O_ex4fQvS3tV3ndGtG5oFtfpydkCbz_AYdncHJYuL-DZaVEDbaDFOsQtsOHVOv92AzaVPI0uMP_yAILGV1PYnmtpW6BATxKpwkN-hfQSgCp5lQmmzeY-qQy9sAuRv4sgaZHC3mB3PFowp0EWV6-9mlxTbiYnL-YT61EhpjP0c9-dqohHydCFPB5284exkNUT74CXk2Dj13tj7g8Je-_vPIy1lH-UxUTxlP1x4YC4nBi5klnYEW6Ez40b0oBPyWJiYqQqoQDWQ2V8YYJOev3Z2Vfk5uMlQ-TbE4TGuh8fk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103034899222805671102\">Jawad Akram</a>"] },
            { photoReference: "AWCwydiwn-HBjiuODtz67X02qLWh1wPhm-tlCtwuifxQJoIJyazH8uxeuMcQtXNYcvfAqIeXWQziXazoAfJRSm4_gTjYcFm8ftdB7AdX_yt5FaRI9Fbhr1u24xqXLiUHl7HUmMUg9ipPxVMYkKdVlGRErW1p-enlaYk4AHt7r0PtbLN-FADI9Avz_ent58E2IkKqfhlbpRnoby9IaLk4a1yowaA91CCG2i04suYxhxOSUBWfOKSkKuzUtKfCE4V__KBrSs6t_GfU5BZkLOtsSgOMbG8FpEeOSeIfo_eTH4BBa1IgAzSKk6GVVGdf7gAJQ6tE3v13U7GITLnXcpUtEMM-j5J4WuejtlYsuZRA6RNZ06sC_YQhO22BUB8K026lqHYuez_5pilT5HD0iu8F0AbU9RYkYwIXBfz7q5K5zB9F980tJxjy", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111099982422698135291\">Chetan Kulkarni</a>"] },
            { photoReference: "AWCwydhiljgAvJZq44-i7PP8rhFgCC1979t54fYM2MLriEUr_6000kL9RTPsRUqedD2LQE-dli1L0Cm7eptWDg_znyRsgih0aNKFyvlYJ1wfzTRR_G6X_RDbC062Ba66e_aiV3NAs--GIJMYfcmCBldcS3-qFEc2TT0YrLJ9xpPsHI4PAAl_Td5BR8DDVI9kBnb029xGY_AtqCIy7g7JUrZ29P-8q7Rw9-O-pchwyzFYtxJlG5yKmFmbLHmlI3nizoqZ_TQwtOKt1d9nyl1vCTZ9SkSdqNOvBB8E04S8IxLgGAnGSkdiRAYMQ6xYsIqnvrv1CTZztm_-DI5EFOO24XFy8scp9i00oFPG6jG5EWVkg1QnY7wK-fGDzd_t4VzenIzE0zMLgNy2qXZ_XRHFMbUJgJTGMMwq0ex7cfii7QPLaJpgqQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118414779972405165627\">Bhaskar Singapore</a>"] },
            { photoReference: "AWCwydgzKrp8pvGMDX_7tK6-Vpo8oWAuPbG_7ZPS7kr9tmc2_1uo8sMcHyPMg6WaIyJ6f2jnhAClakdHYBMcryr6Avomy1QBb1Zrbl7QlWaQhsM-XAe90-FAmEtpotM09DJkaRgQMqJ-65ME4dkQKLnp3GSPH4oDCDYeaBc1qZXM8pxBpo13ryAF7gPOlMBlbrbQw0Swcxje3b-I9eYc6-OSnoDSGTZRK6gSGVDRNwfI1EJK93SoLYkkwfAuRhTiK1m2Ind48D8fM9bp1JR8WMJpTR9vO0PBGEBbhAhol8aIDuzm3sGZ3KQWGWak_UIvPj5GPcoo18J2C1HD7GsCYpXJwZw-kq0eQmo2EQ1UcrPUByTZENHz-vsAf6HtUVcH8Gy6ByezCsHifs7l-WxBYLs_k2WUqvZBk8aSVbwiDCFtIJKkO-aBPPMbgctFgYyOLj_G", width: 1009, height: 744, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113316208923277227429\">Edwin Li</a>"] }
        ],
        summary: "다양한 직업 체험이 가능한 가족 친화적 테마파크",
        updatedAt: "2026-08-14",
        highlights: ["다양한 직업 체험 가능", "비교적 여유로운 관람 환경"],
        tips: ["직원 한 명이 여러 업무를 담당할 수 있어 대기 시간이 발생할 수 있습니다."],
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "31 Bch Vw Rd, #01-01/02 Sentosa Island, Singapore 098008", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.kidzania.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1735976382834060960", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A4%EC%9E%90%EB%8B%88%EC%95%84+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "홈팀NS 아쿠아 어드벤처": {
        photos: [],
        placeId: "ChIJF246z5s92jERaMjvEMrNJlA",
        placePhotos: [
            { photoReference: "AWCwydhaPagbwNmC-WpEkAdyG-vx8h-ocoIRZ7JHyXe6rgRmgDNhdlzOoLP0Z1xQJvx15pGoaM8FmtP5c2s1up1rnyV7Nevn9s2uEW4_TeVKG9EDeZWNZWNurbyAJ5lACdyrMqjvD9k0TvyMr4tOJKcp_o4Xn-mvL4XGmDV_HBDPENZAau9Y5u0WRdSHgnU0WGsleRNlY4vlDlizq5FEjIR5YKC5ag-qZ1-jY1BNApwHuAmYe_T3lRcxo0tRZvomQdOQ3ZY9zEY--xtQdhNIQOM8UhXPOQ8cqtyEA5IU5gxrl1MLE4PHKhAYaD__1FcLAvd7SFokhp84Y81pbYSaSpLid2aAc5YXg2NShsD8LpwxN5Qcdlrf_UgkawycVHT4ts2_rBe-ftcDcDQ8VsLV4iE1lHbOlInToGQIo8QI8WHhVqvdMSJO", width: 4800, height: 3788, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105085979186338779140\">Joseph Chai</a>"] },
            { photoReference: "AWCwydjgXSfvnG7W5_g47JjwgQhcVGA0Sy1h0H2itHAouwh_CtLIsXHWb7oQJtdl5e9l96jkzjjq121jF7BnrFG0SmEYoe5PVdEvlGs-TmUyL-_LiqfvmDtffL0CELiSe9UARHUf-QvDLsAUlawtz1UYqe35eHzyMx51wY4ptmHeSMVvyJpdM0mtNLC51hF-RufibtYgc4k_wZi6QrZLoj2a6iLc0QpliXD8whduVl57yXOoyphKBJ1Zu6h0WZAfrOdxD_jpA26B0kV857U4krEiieBrmPoYtgFt9HaUt8C_8cXXur3BB-u0a0EcyiK12o0B83bAaYI-XkmcuTXJfEk1oKL37JENiizP1prTfLlQcAx60tMU9Y5HG2OxeTBWGYPSXwUVgRQDgGD0z3HriubX_ncT6mo6BUBfGsEGTH6EdJD_UCuq", width: 4500, height: 3002, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102811304486149703355\">HomeTeamNS Aqua Adventure</a>"] },
            { photoReference: "AWCwydi_tVFUs3lTvozUwfVkbNIyYVKINzyvoZQZsVrCLRPVvdWdB4MpT8Vj0M78L2KnTcE5SqpTvCXv13ewQ-WOuyRoRLnjvVabaRnuivb8QQgiVmcMOMc1BrK6RJcrzda4-BwYCb59OgGfPI2d7eYaXiAouLLmEjfP4eANvoj0fbkkayHGSRqMF7KJ6_IBoIkmrp_r8-ZNw97YzOEL8N3nu9PBtK_5k2xj48wRNcznqJVcW1C4te3Q5uPGez4Ls5ign1qPUNIQgDuz_2Zo25H-UYd0CGbUFlqZdPjNMHZydqmrwBbyMXUr9kTN1a1A2XK7AsfiSyGFCCNHM0GSTklnk3pWo3wOGldojkqhxl7siW28qOu_TDjAYrdJZbWrP2bD5mXN5SlSRXrBW5z7Jr616U-ZCjKU8E5nVQ3H2w5UVWiCJw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116421320172580230375\">Instant Ramen</a>"] },
            { photoReference: "AWCwydjLBaA-N_Rq3i2hSzo-myaRKVd9CGrEIvDEHfaNWKl8lTXYv7NSwDFN9kyExfiP5p0nBkcIqBkJnjwyT0x1iDqlMlHfjexLXrb8eW2CSL8k4hGR9X6bE81gbkN4xTHuuRSvQAJAqowBl0d0uGHrO8-GHoLsikba1s1NmOeUDUTeXHkk9OglWdy7Xi1WSWlZQccEfiBu0tNszFW0A55BJ5sfyPBN_XaeoqszbjjVnP_Qm5q9zSGYKzYimQBNzBEpZbCYPxbw4D25iL6VXnEsV71CtCkmAg4CmQrm97cJ1AbnikSuMSZaZK2DOqoRFhx8EnJZDBCDon29UzkqS5Wcz1BJVHUjmzC9CmZPp6VQ9_NTvPXRM5bCLA5BiGNev6JVEglOhrg5X3jbRIvS8_Ns3qt4JhvcUulQYt4OcM0q5nLMGA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107931475924901231165\">Siti Nur Hanisah Abdul Rahim</a>"] },
            { photoReference: "AWCwydhB1i0luNHKPpi9etQjLpvBnOI-_j5C2LY9JQyeYDFKozx0yEnAoN1yZjV79I-FHjgga_t-FCnCTwt9d99qP5GDNjOJR2kY02DlgegAkwcrRtYaNVsMDJvpYSzFF-c6wMBqNRpZ69htY57mJnfYGGCYtj-3EGhgWWqXtUYr8YGNkxZoC0VeaoW2MIJYrXQ6rKjiv17zoSKb6Do2--bp4_m9Jiyl72Ak2OqCb6jXEpN_2B5sZH3xinLWw84iVlbfWKfGE9v0bG7CZ_ieX5DtEfbrxitNT_4x9Cwwb_89ovOyebvW0MPS37dln1ZQgtGBYcoimnLzmZO-fpn3raJpHjsl5Ita_eU7TYbuLCTwBNmcWgp2zXFAqA6CCRHQPTaUje1KcHJ6e2XiCbW8vm7LnTXgWcXJ8sQOolr43KsriQeZrSs5", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105534875072206033317\">Jeyanthi Jegathisan</a>"] }
        ],
        summary: "높은 평점을 자랑하는 재미있는 게임 중심의 테마파크입니다.",
        updatedAt: "2026-08-14",
        highlights: ["재미있는 게임 시설", "친절한 전문가 서비스"],
        tips: ["월요일은 휴무이니 방문 시 주의하세요"],
        hours: "월요일: 휴무일; 화요일: 오전 10:00 ~ 오후 2:30, 오후 3:00~7:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "900 Bedok North Rd, 싱가포르 479994", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.hometeamns.sg/bedokreservoir/aquaadventure/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5775529839900477544", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%99%88%ED%8C%80NS+%EC%95%84%EC%BF%A0%EC%95%84+%EC%96%B4%EB%93%9C%EB%B2%A4%EC%B2%98+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "레인포레스트 와일드 어드밴츄어 EAST": {
        photos: [],
        placeId: "ChIJVXvIfP0T2jERic4-tMR0Oj0",
        placePhotos: [
            { photoReference: "AWCwydhISDeZjE06hgzRyolCLetJEasQTMZzdE4NsoZW1D2LR07WtIig-iPhid7JJEn9AMSCcPSc84BZy1m8AwPb54K8Hkamg_yF_U-rbN28VnLAKbPOsXpvUtFjBGA93QYsGSeiFa1X5LMhViZv9_2dFDKtSYTwlIqSEpiqev38dpNWO_wOZyI62E5jXAVD1HBreCAOEn2meQcqD7CmghVKwl7wq9tffKniti0GPghbIfk1YPvkaWOkVAPLn028NjTFPFC5ON5777kkbFPQZO-lFPIK-fZGVN3OhgmX5mncvTdIa9f2fa74_udYqG74caqX8taAL-L8AU7h7eSisQkEOaUh_CGQLiwHvRzE2cwKYEyKs0Vo8MuzIOTUTDSa96KY56fNbu6Ow6n_Uoszfp9GaDQqk81dnFy90STFLJTL1XVkXPonXj8wWF8--q5lNg", width: 1200, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111356570966101369460\">Rainforest Wild Adventure EAST</a>"] },
            { photoReference: "AWCwydjpTPlii71RVM_MkJ9q8BqIXBmAF0w6MjkkVGJ3IEMzCc0EtlNSLNYrwsQu7SZJ0ypGhY1ES_DStMpMwH_AlAEWHVtqQqNssFupvZ3CObuhHJKY_PaCc8jVdHPhiVUiIMTisQPD9m7gZx-5y0zOfIq4sxYiAtEQDuPX3vkrEDCpxQUamxNOmKbWFcEVYjXe5nKXyA26pw3YtVk-3eAfiKEIAKp--0tXE8CQuqTrUX3caDAaeZUZSEWli4iZgY79xy77WSD3_WmCeAooIY1dvX-W97JnFmkZGB_2aSuFtk1Yz3GhJ_5XpaaQ5sVpofccJKZCXdSerwdoZ8fqI6h6q0cECOwgVRFvjKc7Fuc2fEIP8ov5YqdCLUbV1sZ99beRJPzDSceLMcVYs-cvPY24sykOcw8JspJrZJeaQVkdUqbO9qyUsKGxPt06inWK2WE6", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113095709583539593990\">Tan Keng Chew</a>"] },
            { photoReference: "AWCwydhL077Vvj8GrpfThsYHJozaTm9-4lw8ftqbdfQDIKTFwZZi9eblmUBpboNXBJYa6pxj-1sVtv1JRoOQokBgFD5FHoQvkg3YKn1kJkJb82r69NfYXdWCtr6S_XY1qEdYZoUdWp0xa9uPSThAoGKIzLBzO5_-R0FNmsKyrnwXQZm01AQ9QH4N_e_lD5KrvxbD0JjXTApr6HsHCtaH6VmlgAOXqftWZomZGq6WOA5Yty6PpF6mUogV-mFKL-PAVmHPq5Ut-hl8c76LSgRawM7q98TEV0rCwYYX90kuWFpo2vPXlhjr_tlmCoA9Md_fvBY8uX_aLJnIeauj6CRefTo1FSrz-gWVI8uM5nQLdvVLtghMRmcccgVesUfdta0-MFG7O0z_q_bh0SvDBYeoHKHUm6UdctJwWzK67LTXdA1NFbs2KBtcsR8kfBV5IKs6iv_5", width: 1200, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111356570966101369460\">Rainforest Wild Adventure EAST</a>"] },
            { photoReference: "AWCwydi3pBu2j6Fs6fpfpVTSH6Gpdp8HZsZ2a43BV4iGQOYd9B92KSlCnfs86UhdwaGQCX6LoybdeZLvVjQKc8jO2Sxyyvt5EAmIna7IHafi6hyHuJxvpbqVRbzm_75HNAfIEDROBJhjHz-dJN62fTbUhvbIV3_-p5VfQqOjZ8j79nj1zc3uolyU9fXmg-BfPNYd-ZOymmAo7aMG5FgcoL2mb7pGkQVsJRcVG6JhQyOU-3ZGgoFs9UUPgQ7QrjGpxjE1DshAu9abQQkIz2yy-rSKn3mycFZo1-GHylPJ2aGW6DwPBkmDo83e8x3LmvymGewJgJ9OktJSHxgraRywxd7gjJEKWAulPWOgV0bRZ81KvvRc8nNjzRgp8F3lPmhZ1OW6uBxKXS5ZX9vAp2zrCeORwziJW4Cc2ANxDP0ZIxWxymEIom6xD2JkP3hxMf7aXWXm", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101780677852017046028\">Jeane</a>"] },
            { photoReference: "AWCwydgaWImWCJ2CeaSvkJqvg7FF0flwn-oh21AwuCgS4pGBf7_S7sOeac4Sev0mAoMDgURMDESk_esXNFsLdfjZsKUA6zRwaL__v3AvRpS3wRQIBXaPOO65391bEh-GQ63-1KlZ_rTC5ofovBpGj3zHMH3G1E_5OU6Vi4YATuksAwL4dk1GkVuw2MVAbwluSQo44ue4jhO-zCqK_RrEdPGaXWdhRzzjFkCCkWYTPwV0iaSHbLy6CF769a3smMV8zmCPNr-TU-h__Wf_R-_MgGjXW2-9Xh_2I5D7DgM8pXxq1bxGApIeMep2xlKpkXuHcMPv5C1GMMMe4zc1e3wX2tb7uOpHHyG0i7h3pb_xFf3BdsLH5SG8Sv6fi07nczE8L-DomZhi55DX4DXjOHtBjMcgzcvFpaLbfPBoSoqDXVYF2C43TFL6t_nIM-zLcbEzTg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100871569702329629962\">Rachel Wilson</a>"] }
        ],
        summary: "풍부한 그늘과 다양한 즐길 거리가 있는 자연 친화적 테마파크입니다.",
        updatedAt: "2026-08-14",
        highlights: ["캐노피 글라이더", "트리탑 트래버스", "레이빈 스윙"],
        tips: ["공원 내 식당을 이용하면 대기 시간을 줄일 수 있습니다", "서쪽 구역은 상대적으로 덜 붐빕니다"],
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "80 Mandai Lake Rd, Mandai Wildlife EAST, 싱가포르 729826", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.mandai.com/en/rainforest-wild-adventure.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4411967173149249161", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%88%EC%9D%B8%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8+%EC%99%80%EC%9D%BC%EB%93%9C+%EC%96%B4%EB%93%9C%EB%B0%B4%EC%B8%84%EC%96%B4+EAST+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "피버 카약 어드벤처": {
        photos: [],
        placeId: "ChIJ2eM5mH8R2jER4b6KcIAVT04",
        placePhotos: [
            { photoReference: "AWCwydgkONzdvG8Qkq1GIrXY4rZxZ5HqHscFGDuMRgZfW3-HLyM_gv6amrJ2q-W7FlwfoQBhJflkNO-We7-QR722nXKK8Rcm59sjg6PP4EoAYiICwsDkTC-hc5lMwch955jagIMkYPVsyXEnKYp3lM7Ul0phLx1iD-RKIzp96ZT_nbKB52t7ZZKK1Mkwox55oNEtzSaqJlk4BDC6EUduHVTrZaebPIz0TtKvBIqCKqmtM2BrzRKdG0JOoxE11FZP8996-_G12aYvKRTtfmvVHxroLNFVxhE-JeLt8v25YDa4bIOmvjTQ28K71K_ii8OSuqWVWpCYQqLMsUJZAQknoju6P64WZkfjuwP3x_N98r61oXuT6qeTVZYOvbICj6de21bVT2ISzO4CiRjObNSKOrvRG5sjip2vkjbE_xD96msaZWUo3Q", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115912840748667548861\">Fever Kayak Adventures</a>"] },
            { photoReference: "AWCwydhAJQGTwSrMKD7wwG2nOiiMdxO1lhWbAD78elmlZ2HZsEMsaSDYK7tIchNpXHj4uGouaCSt-_amvLNuKEox0EN1F3vaagM5xGRAok9a4OQlMq_fAs-SB87UHS6BfzQ3_ctl6v2FCTmag5htaRb-IUW2IOwQP_C7Fuggq9NqNQhqWE0w-SxkaijzLQ9vkrJFN6OoClVVIpi5THdkLItlKXz5J8bbwr2IydJ5rGc-Zah3lMYjW93ftJ_vukTjC-qLx75qmxXmQfHovK3lWSn68WeaBroAc0HugcELLjCQLfjzaZBtCRq_w5v63nklb7UE7oxVZwinAl2USIJiZhc8CRvlgzKEJM_6tEo4_RZxqE6h_Xyipd2_6nhDJX6S_8Ant5Xooh0351bcGbjz0DnHaWGtq9NGH_YqOnPNhvoBLTzJIDWUXvwI7HfZaNaJSsqN", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109673013727856704915\">Lin Awr</a>"] },
            { photoReference: "AWCwydifn1JCBjfkq-DALaXz7SK1M7_5oFoqmj3L5VVt1pUrqyWL71Qe_oogIX0dtDC7blZSmC3Rb7hAce2HzojTmBE6mbr8SaJ4_F3aTkkWs1OZgmpyPVu3SCSbnQcoQAWBZZquS6r2hhyNdLvv8BP-w5Oib41Yo4eBrUkEe6iwXJ4BZufWJyGQ3fPZbnjIbKQTYFHM9TSLIqSrjUym4yROUevwzlzoP2g_-xxG53z88pMXvUzCE08YMLp2GUzqLRyi1dc_xau70kUT-t-VvElWE470KtJlJSrF_vz3P-V-6PBCo3uCTD4lBdA3-zAEA0HCEKeUhx6VwyTypZKkZWF_rdjbC8aNoN3beKIgiyk2Ojz3DJi_0f1uqcTRjFVmhDanfZ982Xz7y7uJMyRrpAv47DC0RvSdPIpZdPHbqi4GMGePqpiZ1EHfGo0N2_lpTA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113213818130265323622\">Crystal Zhao</a>"] },
            { photoReference: "AWCwydg50KCMRu_p1bEJB4udWzHdSGtP_NiupmU6iRhCrHAQwUu1tNuZ0SjFPxRqFyFDdKk0HuNadHTPmRTPszl3T2k_h4zEqoYOCCkQW3PciAl1L0xIwnx_6TZJd2rnNGFCWNW1vcVkCB5Fwxc4Zs58iWRRxoIg7D5_tMhSr_VQefCdkLen349PiNMw0wwOSCM8714Ah-Lf_dx55d4lk3nQhppQWy_z9HU1k7_vTB8ixIKr9XAC8kI91A5g2RuEkzrIe3BIKHd_Lwzt1XyLkevM4WIFIxY3-9fUXmd7ClXVWezVgSmyDZnlQ4pHFExJDvoszM9UWp6rqhcu1aQGUzepufgWIKw0m7_pJ3ytWegFiS2vKLxgRAlQ8p8iWRgk3s5bX9rPZ6CdO5DSbXmOLbT9e3M1ZVD6oqiD88JbOa85TwIDuXCMCjehXF1T4kCE8uEy", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115113336709065710674\">Ed Hagad</a>"] },
            { photoReference: "AWCwydjZx85V3qZNd5tlhi1l55j63RUc8lyyOpAPpQhqEgV0g8ZKPSk3BKUWQR1hsdsnaulc14Diy6fHnQSvbA546V0S7F07YKR35ZNjM9qNX52Cs2GeED1uKkDfnCfeoTfSCTWwxxrFq4v26GLHK7WbIvjrYVYgbKfkfrltXQ0nPfRSSAvyYMGkALU6hfOZtsi3nWIkjpGl0FJRwHdMpMFUpSf8u-vhO7OFo7HY3Hds2e-raT3N6nUnv58GbWTZIi0XeQQjuZEs9frRJciusTyc7hD_e4W_1Ujkkpm73fUsAaMQuLTjkupUwTKe4-tKrDouY4oaiQoVZksMIH4FBE04DYHsanwy3c_FFgSSPRI8f3m8p8QxlA4iOEZhF2H6q895GMU2tMpBe1XpThI1uGYDBFzXI_34i5G1W0_PUPEp0cdcY8t3lxcJ0P4BYFh6BVV-", width: 2822, height: 1882, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112212085140371103410\">raymond tan</a>"] }
        ],
        summary: "친절한 가이드와 함께하는 풍골 워터웨이 카약 투어입니다.",
        updatedAt: "2026-08-14",
        highlights: ["친절하고 전문적인 가이드", "수달 관찰 가능", "물총 놀이 이벤트"],
        tips: ["무전기를 사용하여 가이드의 설명을 명확하게 들을 수 있습니다", "투어 중 제공되는 코코넛 음료를 즐겨보세요"],
        hours: "월요일: 오전 7:00 ~ 오후 6:00; 화요일: 오전 7:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "Tanjong Beach Walk, Sentosa, 싱가포르 098942", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://fever.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5642752499506659041", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EB%B2%84+%EC%B9%B4%EC%95%BD+%EC%96%B4%EB%93%9C%EB%B2%A4%EC%B2%98+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "카약아시아": {
        photos: [],
        placeId: "ChIJgTU9QHMZ2jERneZC64PmSpg",
        placePhotos: [
            { photoReference: "AWCwydi8VLvJE_Ju-Y7AkXz4V4NM94HYCHM6EGmI7kCZtnhXxAIc6uQSPH_GMuE5xqs0Q8PpjZC1cBTjiwmut2WfqP3gIwuzJ8Irr1jeXXkSrvL9LoA9mdzVXDBhVCYCgB6jvnSlzXYeX7RzbYnWhugRBalq59DbaNuWuTrTNtt4kyfnwzQz0JaEeLA-vq6B938JA8hdm9mdLvIFLxBVFRoRYOdQLiCmcECTlMNzMcEbTPz_NB4A-_8XjYyH8v173iNNtj-GhtuuyWuU0DdweHkRx5Jo0HSH1mY_pWxyvDkAxifdVAxzyWdCXbrhYrTYenWiWjw1knwoVMKtyROBLCzzRUyTSR25VUPxlh3J5hqBsr3wl9eKG5nbGs73h3oEfJXpQo85ZRHEeG-z4Pygv-zV-hIHME8c2MHqFhkXWxUMVaAqLg", width: 1803, height: 1014, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111979554820781484982\">kayakasia</a>"] },
            { photoReference: "AWCwydi1Iyn_sLDbCLk3yHAL8L4AUZP3GQsONkUIYHHDV9VObUi2DczorW31MHbugTsmazG7VchKV_TqGMkGMWoVt40li2HCfSs6ProMnJ4jCnLo2OM_krHVepxL1eWbdTf9HDpjkzhq-_7rLBc55JTcCDQlUBeiTozHXAbZsfzg192kyZ7lkbzEr1pVClKPMrugzK3cAGZtBZ72WLa3nZ5dltAt-0zcp-xRSxqnjn42GYW-9Fr0pp0X7lDhNvxwWMHqeDL9gQhHVUgJtBJ5COza4qZ-_8slp7QCMFgMdl4UwBWUaFKfl1joxmDC6OfmUvPv_vn4uMJfFDkscuwqmF5GqJjq3tQ1K--qtWbMmEJWxWwFYgCbJH8Om0pCv0ToLB8QYJ4K2d6rvml_wObuTH3U7VN68UER_-EL0FwrwR1fkUw", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111979554820781484982\">kayakasia</a>"] },
            { photoReference: "AWCwydh2BFlvcB7m2C7kw8rMW7QGpC29Sn1NLH4V3v_H0wwNSbs2l9ysT1pACb0RXr_2fhIvF1HMRbcAYb3eRglfH4Aw00FxiA5qJZRHyl6ZcGF2IpGeEK9i8__a1XQoiggcqUlk-gPtlG8epHcHm5OAtx6uJTb_KcxvSxnlIjlmyZLz3aIKt73SiDTdANAMqc-xEuE10E0dZSp1aCqJJwzE9D1KKr6xrP9MviIyVH0fjcxz_ceEleW9JykfQ7iDR1C_zIcN9XbE8C1nBVIDp-jtc9OwMMoXlPohe9e4HqIMSSjAguNjE5XLEIBzlIZOeFPla8FtDRH-XTTtGarRxr7T3eHNqR68MZuIz7X622HEsvjFKe0W8b7fTfJmJs_NgvWbo1jxK6dvhEh5wQmg_llUKttXCiKfWGAJUa-TDdU4WKV-E_Ir", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111288605724326575164\">Suhail Ali</a>"] },
            { photoReference: "AWCwydi5D--ntimwAMJ6vDh3oRN1v-8IUfRO-w7KQr_V9r5KS9cwQyN-70tf-5hhzm4bYwZBkqaRgozGFrxvhJOaXv3wbDzLEshmPJ1sYRLph9zESE-L05mB8JVQCXIT1pd3Y_EdRW3UcSZ71VBtN5N4uAgnZ3FSNnJcN3oIcieeQIvwbyjDbk4CfytoQm9uHH1uYiclENBqt0bLTZHRWd4J4AM-P-j-8p5Gwbq3UuwM6McHUZu-SefEEXV5gF748pQakaxwRdcPq33VqYnaaz8jwMWx4B87mAXgV2YlKfcfo5sILhzTFrpmaaSNLOFueHejqAMwPZMvJh1tMFq_mCd_zMgfWzZdrccRcgrb2GqVWvnKvO5tEaX_wx7ee31FWeA01-T3RupkywSpRlLUDL25I5E4qArMO0uBFBA_Px0FEFHxxQ", width: 2048, height: 397, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111979554820781484982\">kayakasia</a>"] },
            { photoReference: "AWCwydjnft_gYu_I1VJlat5bhuVD6erd3e-_lokAdZDpBQW9piwvqO-KhtyiqHhfth14J0s4SIFParg-ZdKBn9X6k9Gv2NSDuRpAmhYnMaAdX0Yi01kfyTn1ND0CPlVGUoVRCvDlzxUTisvmnOtisEUIbu9RU9DyzOUKNno6lvt73QEamvvTfXCTBwJOCgL-IEvvc0j28UTPAmXPWVM0w7tENokjK18W_4Z0tg324mI5NVLBncIICTFXe0Uf6LoLt-j6c4gdcbkhle3KXyx-aSgRdvZMHE__hTRTyJvJ8Si2kaSoJKmB818JJuES_JYDLddKBrSWZjmnQPY8er2pamzprgVuTZ5A14e8wZOlb0E6gFKlIumggrby0CXNxdi7HLXZQbfUcLyX_Sujr_4Nu5YY6p0WXP-bbXG_N-PdSB0y69S_jeA", width: 1024, height: 680, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111979554820781484982\">kayakasia</a>"] }
        ],
        summary: "전문 가이드와 함께하는 환상적인 맹그로브 숲 카약 투어",
        updatedAt: "2026-08-14",
        highlights: ["맹그로브 숲 사이를 지나는 이색적인 카약 경험", "전문적이고 친절한 가이드의 세심한 케어"],
        tips: ["아이들과 함께 방문하기 좋습니다", "날씨 변화에 대비한 가이드의 전문적인 안내를 신뢰하세요"],
        hours: "방문 전 확인 권장",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "59C Temple St, 싱가포르 058604", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://kayakasia.org/contact-us/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10973836896303769245", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%EC%95%BD%EC%95%84%EC%8B%9C%EC%95%84+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "커들피쉬 다이버스": {
        photos: [],
        placeId: "ChIJpYYhpqAZ2jERvsz99dsY3Gk",
        placePhotos: [
            { photoReference: "AWCwydhuJWLPqUJWnzy9_wKwF0j3zQaB_I2lqLKIrCR9aNCRwO_2l1VpoeQMTetHJiBWHBYfpSIAyqMftCwXD1YNaHgO6vm37O-JsaM1gBxvUePKvYUMl2H9xQ5fxgZxqtNMacws9YSWnZTJ3bDecZC3YD6xUa2qcZ4S06eXq458NXU5XOhh7dpjbGxFfhJWbAgvq6YvmvbSAvIE0m_GEl8oJOA3RR1awamqaJODWGcCoaxIOgbQyjRrpYGKnrhj-dO6Orrqc5wy9sJNCW1OdKELFEZIcyOci83GHzRUhSx_0VcIXz-TnM7DRt5bbcewbLSnqmjdGwjBuknkBzaSF1UlIIJ0uSh27Cqq4LrNcOUtzcmPiWU6tCkri8CdroYMNKkafCX6wMDQaE7z9Hm1yZGBU56t5Lf8Wrr6k0VmHd8Au-w", width: 1024, height: 768, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104665383230229291011\">Cuddlefish Divers</a>"] },
            { photoReference: "AWCwydgkRMHMgEg790kxAY0WSQJQWoex-aU0xWxZoDOCB4jo_qmbJNu4uCADSxO6ehV9y4tWFQGfzZdbAPViWV758djEcbn7bB1Q5AJRShV8cbx0LI1r2w8V1PZkAuhkMt2hwv6DA73wRRxI_Zb-o29Re93_ntsBz7JsCpQ7J_0fSplToMXqCWKlDtXWJlm4ObFlx4h90Ujqc89R2KYi9hpQKgEmK-g0Y23UZoVb29L5SG9NsrjRIF3wzMfyqirgzpGealOAuDW-QDu4rRpow90cIyxXTzADMKAYnwDaaiBxG1hMEU40isWThufgrB1e0DSwfUI7K8bjmyO8tyjAnlCUteNu4p89Nr2HwKAVMsRLlUBFGpUrC4GykhTYvNiSvs-oAdakC97oEtTkWLKcEqAHLI4fkhdgqfadEzLgOsrG-SewYA", width: 1440, height: 810, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104665383230229291011\">Cuddlefish Divers</a>"] },
            { photoReference: "AWCwydj7wgx0aOHNgajD6vliT-23UxCpPgWYKbo0ifdAlpAzgO6gDiRpq_ZpPy7oKuUWJjwMSEVSXlmBHlj0MaWew6gr3rqccF3ho5GtSjiLzO8Tz7_h6sWBc0zBPweYmphdXTojsbDGZOX_XBCSLUFU3d5N57SBSAQ-el7EFhvUceRraXfSySzfm-GuYhOU8LQ4Prjcq63zThbh7lGuPsDy-WmksP6bOdJlnWmQdoxoroPxBWVhForSo3WdcW_X2qBKG99TtZ3bdY7Y3tnt2Rj8lu1YYBHdpTMhu3SQvfD9PyYQrlVhXu1P3u304WsIos-WtI4SXtaP3DravpDsBu710hDZbZKXi00dV7Lhz3j3xbHmHSRmYQb8Dksc6v4_TaR4Sz4yq81QUwlVxzIrrw4E7sDWGt6gpzL4aiYjDTw8d1P-0A", width: 1964, height: 1472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104665383230229291011\">Cuddlefish Divers</a>"] },
            { photoReference: "AWCwydhxr1r6l_HOdUPpXYUZsCH8KRRbgTz09MduQWLxpdj8HLcXCC0W445wGadHEBiZf7y667roJYmddALXaJWZXjB3A1BtmPdiKcTZXGWyreiT6fwotRnkavffrQjIxv-ldWK2yFDkXN_5hBXqWMGAo7XQECus_QzxUbgl-FS-RO6DPEL2DASF1G-6pmac6gmSmCJbbuwhBuKjYuXBq9l_BAffwYz2ceCr357bQ726GnLDOhFzNnqDL2AsFNBxjrXW1cpjtS_vr6Gu1BsKpN_RHPhSq2CxIeNnVNwS3T7UQNbMRmnn3dshIrV_0_Af-E8SqzbH3FtyfOy_gHGTYoFZCEVfwjr3hQ_xtA7pA_UsRMeP4FIf1qRXBvhXqZMpol15wMGxuL9YWL4uguwS0B8FmR2IfWmL3_oJSVAJpzlow0Y", width: 2856, height: 2142, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104665383230229291011\">Cuddlefish Divers</a>"] },
            { photoReference: "AWCwydgOi03oU3aaF2R22Whiom8IAVU25TuC6KqF9fGjdUkGQF_NMqq7ArQM-WoaSljnKZz_SMVAc3ukGCqh4AhuMOBPkDMO2NMyBFSCxwoJawleXwlM2ew8uNhkpQWVQYtYp_e8vfXjUQv0cfNRLJg7fmSltoki16s3KlCP5eidb9NILxBEMU7mc8jyH1ybqFWdsJgo4AwoFo5sW4D3c-lXqTpnqEje2YHm87J0q_qnL9JvIrnRus1Vmosm1E2cTQVmvbdaUQJNdNbNZlq_VyFQeLAKkWG1lIYakLq93yAQWTdWXikBxlsXVjIKJBuYKVQ8HNjwagtLpt7HFL-pZXk9Udb2Ewvbx1qkeL-btrA6_Pfn-Qi1AVN1HcAGRRRsJjvL3CxtjVjJ3sM1zI4qxLbkuqndS73SU7z1lEe68AZl8LlALQ", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104665383230229291011\">Cuddlefish Divers</a>"] }
        ],
        summary: "전문 강사진과 함께하는 안전하고 즐거운 다이빙 및 자격증 과정",
        updatedAt: "2026-08-14",
        highlights: ["최신 장비 관리", "전문적인 강사진", "다양한 해양 생물 관찰", "쾌적한 보트 시설"],
        tips: ["오픈워터 자격증 과정 이수 가능", "다양한 해양 생물 관찰 가능"],
        hours: "월요일: 휴무일; 화요일: 오후 12:00~8:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "39A Jln Pemimpin, #07-08 Halcyon Building, 싱가포르 577183", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.cuddlefishdivers.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7627999201862732990", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BB%A4%EB%93%A4%ED%94%BC%EC%89%AC+%EB%8B%A4%EC%9D%B4%EB%B2%84%EC%8A%A4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "패션 웨이브 @ 마리나 베이": {
        photos: [],
        placeId: "ChIJ0QlpxqwZ2jER_FboWadlmn0",
        placePhotos: [
            { photoReference: "AWCwydhOBX2yrz9oJ0EYqHPAdyY1YkV5a0kIFo-E1yHlMWZe47dUKc4BrQ3deCx1weNB7xiUuRpba5qqdV4zhOQUCS-rAT4-_Psdcrop7sWfPW7zRcwVocOfxAX_u2nd0Fl_4nuqge4p5pizz38a6R9BFO0Ww75IVXTLyw-RnTFjLCiC_pFZt0kSHO9ekXNTwEuALGfHjTIZBHXSC1VD4Fl6_uqv1G_2DOeYhthRH53yH0vniEhxL7saN7foVFteMDM0Diz-6zcj5WAixzxvldmsBzbYuBaswl1dnAy073Ai90wF14mzHnZmNiev4QTC45Cn6qPWcBSIbwao5Rw2MKk0rGrPNx-iwP-6K6Ixu5n7pcu3A0A77Ib8X_QkHBPzhnA96VjAw7CINxi9rSw6bZjyBBq8xZUoVw07D0qJPbbunUbjC1hK", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117694321999811982098\">PAssion Wave @ Marina Bay</a>"] },
            { photoReference: "AWCwydhyiRqiXftawdVfOznUUUUM3AB5qQ_wAAXqo3U0DKGsjWhv6zjT2i22rbwbc3AS_1EX5FMRRdxvW9AUBQdl0vJNVMeDv7MGGFVdPWkrasA4Cl08zh4nF6yvZNFr0t9V70KPjSzv0pGr_NstlO8dxyb8FI6EkCmo_Oo_IVdKKMuOkRrbcnRourACAOvjp3mVqYFdvWaJljhRMOwkqyA4t1-J-41gRRBYVjMYM65-7tQJ7e56MnK3WVky0AsQQ_I6EqyLEfJ1-__Tb2vOR7NM0xq2Bm8itrbqlLFojh3GTXEEDwg-YOpKVU0QlyNSz_TrUikND40i8AiYw2dFhoygpV0QAjFcNlN2OJ8h2xrGBsDLCSkPaIV8fBCCVPv1LYBpnXBA4Sx4cdo_0_B-_gmLap9zP36TxBI-ALchjwtSP1O-nhkYxf_Y14CmImCUMmDY", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102929981247209299741\">Chua Germaine</a>"] },
            { photoReference: "AWCwydiRrzF2G80w3k-prmDVHv6UXz1t0BTAcyxcjydXUW81KEGi-lKoKEopD4hljrKtI1mGMyznVgmKi-9q0BVdBQ79Qtnok2J44HPuc8JqEZ19365caOsAckALInMWK9WzPBbHIhqnCIYFdaBEowEBfba18rJ2fkAvgzQtleoOEUU-XTA_HdA37GIJThA_MUxuNvNF06DrDzZYEJIsHEUfahag9sgbAuMf5E2BpWbqUl8isK67xfZt3c6dEirN8oqzRs5nhhnjhIMFFLkDF0VKWuVN9bHRufkF0x_gkL357WlsMQCO7JtvYEizjegGxHOxXe-KVON8hSZ4AmZuJ8QtzBdTRauUjZGs5nKpkfwqbcitsbp76QgOQbnBTq-uywj2bgC_FUOuwQDy2N82MAcCqRcg3gSPxjQuG3ISXQ", width: 4618, height: 3464, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116678199091086593394\">pehtitus</a>"] },
            { photoReference: "AWCwydhvLt-Nq5OMOy1zWRgUUdG3yW0AxnRuLZUpjFzlRYRChxpo_7hOTwCymKS8CYODhCgdeOnwgxgD6BKQUUcgwsZzC473j4te1t4rZo2REQm8hNW1P1NRgaTycvE3353PSHksnxbJvFWdomaaWWBtIm6sbb8i_yJdrrC8_wez6EwAtXJeaNjQUhf8zlZ-cn_Q0uh0PkAOws1tBzBqpjQt2nX_gEB-1gH0cQgsEQxTa9-G8cjMPw0d1FTfBBFbK2_VfTBWfTH8z0jL9awCqBJEKAE37MpSaLvsSnSULymK5UmpFcJmOEf6ZG-c4dqGr7BtUQj6zg1GtZ93iyOgCHz2CbK7KTxAeEnm-8J3Af96Rjk9lJ5DDApcVuGvQPaCqFTwc-7SB0cYQQXBLiCiPtdSqhCxZ4vk6oJgB7sGcCF8NfAwejSClvU0qmySJdOK-wCZ", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117900679284458770313\">R L</a>"] },
            { photoReference: "AWCwydgfSjY_P_EqE5gs5MlYnAZBa92WZRV-nXXJ9VYp6A95nqCQqkBiZMOSrEtm2nemCOp1uwvfRgPqecpGFzkcXiP-gjY9H_kMhWkNB44PDJv1zMvpwZNbtJbxCFwCnRf4g0MT9I5eiwf3YTt5VU1VzqbEz5RN7x7SuJ27FEwHXjBKRYjWAFaApqRDUVkkskQdQ7CO3NwoXbiSnfpUAjK9rsLtvvinO0u2xC9Pwf2XbQTCnmmk4jKTkiVOx--jCOtDnRDXkYEffo6GHLLumaku3WpiabdjPeJ2JC3PShpVld8YyYHy4Fl3cRIjAiHk1nF4hb_X1oLf5t00a44rCkO2Hpd_4Upyj5v5O1Xy2YxoBeiNenNVhbcv0xbSfDy_Y1wMnnQlR128e--LXVh66iQNUAok7bPWEqp0bBZqPwT6lYPfMf8QjDTMsS5iLW9mcjUV", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113358641978982843425\">Daniel Liu</a>"] }
        ],
        summary: "전문적인 리더와 함께하는 안전하고 즐거운 드래곤 보트 체험",
        updatedAt: "2026-08-14",
        highlights: ["마리나 베이 명소 조망", "전문적인 운영진", "야광 패들 나이트 투어 가능"],
        tips: ["패션 웨이브 옆 넉넉한 주차 공간 이용", "야광 패들 나이트 드래곤 보트 투어 참여"],
        hours: "월요일: 휴무일; 화요일: 오전 9:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "11 Rhu Cross, #01-01, 싱가포르 437440", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://go.gov.sg/pwmb", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9050658170596775676", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%A8%EC%85%98+%EC%9B%A8%EC%9D%B4%EB%B8%8C+%40+%EB%A7%88%EB%A6%AC%EB%82%98+%EB%B2%A0%EC%9D%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "라자루스 씨 스포츠 센터": {
        photos: [],
        placeId: "ChIJgVrZSp4f2jERMPkBp2Mbpu8",
        placePhotos: [
            { photoReference: "AWCwydgz7rc5xIt-uFSlnAXGICKFv7V00-oxS5EUt6uWWEpmGcSz7Kzw52Ck3vksyMB_aVnpYDtLzAVO2Y6F17mdA9Ew3CvC-G6Kv8xEzW5nDCuK6P5salMr79lJxPFHDJo1R3y0nOXRbBt3GHh9zAIvm0MNJDvDeu7wRIafPVctE6eMku7jp-zi9g38xiH5cbb9GjFAbjYSTpS8CPnDasYR3jhbp5TXAg51xFGyiG9nnIZ-h-rjkgBkqmpP667e22yotEkD_NmYXuUYprRIOcUAxwi4i9lcSFWjUqeVsqQ3yektdsqw8gPJTUP-y5TLMu-WPvJ2TdxjhxubiVxyTFlA6aXkJ-lcM-mM3qrbNlhlCFYryUII2riN9HACVXm18MTWvleMgM2mDBSgV_tLHj-yUkP-UjXNcdNAcXL_hd5LAaoFBLsB", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107681942187818933054\">Ron Lee</a>"] },
            { photoReference: "AWCwydiwvZEfuodAtd8nCG6WtU0Y_HpoVrpyhUeSfd9Kg5A0-ZmJ559a9zK0P44ZhOT9pBogK2xTQWvuG0AIT2DmkWPfUtK4iIc68ACmz_4Et3r8z7RVpsMtwwKw6vxNy3zj96DZKLdOr-rpRSw1k3eQ6td0SOZJT2HhXRIB7Bj-bXF8uImhCxfXspMWPkEZXqy7HhepHvFuhNHWLuC_r0MpRMSYqLZbbKRKxs0TixcLQPls7-yxdKy0XuWPibvlhv7ZLHsu0zWAQmhnrhC0ED-71FuXcpNTguiUxaywcEeJj9rdl7aKEx0rbZ3IkoV-AWyAFlDdUOgK-cFB4YqVsmTFtT1T0rkfA1JbaIMbparRgYLZSQhmJOikb6bloIrZyfcuLEwbZTRpOzwVih3sevoAxqMu2BgPxe5C6jCJLBo1sNwrNbMA", width: 1284, height: 702, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108446864556413414105\">alvin leong</a>"] },
            { photoReference: "AWCwydgDO8VjDw9K6lXuxpLA3QR8WjF6lrDZ-SGb6LF3rb5O-ilq7jgXC8ELdl_4_8TIR9sMlb_OiZ_mLRF7CAhfyCCrgB0Sdhy7usKSmVRcqjwKU2kbI6c_FZzKTzWWS3kqH-u8-M-rh4XWUCoUJG8FUsDmtCWD59zCSdNWV5i7BaOno8dPSbIAA3zbi7tG1MctwQw5fpi49foBosQ4USOkN9BlSc2wbINkGp-rHGv63Nl5Zr68CpveNB7IauGPRe1xkOSN3x487LKuaa2C1t8FC9pZI32UyqhN3SiO9ElpWX_dEUoqX2FaWk_4MIlTTZN4X_fTScmbtMOHbQRuhtJ_yA3qtNny3YQXv4suDFWRF_hMH7GPUZSBvJYINLQIeLzsFcV2oUzooaxTDvz_5cOyUPfWLAUhQLvq92p2vpjiKMEAGN2o", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117015952917937818829\">Mavis Lee</a>"] },
            { photoReference: "AWCwydj69EWRs5kVts7T4ax4tbWMxUvvPF2T7JarUMRC050J7hTbNw0HNL86KRFzdV0LK6VTbkF-UrdCIhLkv-ZZuJcoMobeJCOuY-GHeRQH02FQk2AdNDvKVpUO5-LqQX-rz1dVWPhpzLLTetCXNxWtdnfwHCRvXBdfd-8RU5sNYuEzsM6g29BhRlpKlLB-Sd4eUbTmtUliOYSeG_5NSWhoLrJf_NR37my1pb4_GfNs6MIvLTctmh_107h8F6pPsd3aFZJGs3Pbi6ZcXQUR00iewzASkcNmdj4U_UW6rdU4Cc4awrZVdxHzx8ES4GTb35gd5iUuAj8f2muLex5WyEYA2rfn5r9uPGH23AULlLRN44QpREYtYGPPxoMf_6GHfT2Vcy9S5V-pacI1FXeK3Mb8dtTuiXiQ0UcTdseonXVJThc", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109384415496435217762\">Charles Yeo</a>"] },
            { photoReference: "AWCwydiB9L_ib9R03mw9SXhRb3DKg5E9MZOjvagC5Bw8bwqABZyUrLtly2UQXlt7DZmL2CvQnjtPF-kdd-RJGVo_Z81gnhEmUkqUhjt2A5DJ3q-lDaexVX9aI5yVRbwoabBCyZGHGpD51C_QXqdPXNx5ru7D0uaHr5zUqzJf0iZA98bj8VnluRG2Dr8qDOQSfQnR3UOO_yx-ZJh400YX9He3V9ss4S4XXukVOoLYBos5ILS9hFBjRznZcr4lueING_roGka3tytbL8tu6qvTIhkY0P1jFiFR7EQtQ2v6Eio0r-WLejvtXmQMKjvj09bDFzHFurlo9eQnvklByi1zQKQKqSRf8yp3w0FkN4zabxk1RRtyy63HSuRVOdzNmLxXEvSZ7FUkK2lwrpSNJJrUyUQzhUOrCMJh5bf8YR9x0ChoYTdejA", width: 1284, height: 700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108446864556413414105\">alvin leong</a>"] }
        ],
        summary: "카약과 SUP 등 다양한 수상 스포츠를 경험할 수 있는 평점 5점의 스포츠 센터입니다.",
        updatedAt: "2026-08-14",
        highlights: ["전문적인 스태프의 친절한 안내", "카약 및 스탠드업 패들보드 체험 가능"],
        tips: ["방문 전 운영 시간을 반드시 확인하세요"],
        hours: "월요일: 휴무일; 화요일: 휴무일",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "21A Pulau Seringat, Lazarus Island, 싱가포르 099555", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.lazarus-seasports.biz/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17268519936016382256", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%9E%90%EB%A3%A8%EC%8A%A4+%EC%94%A8+%EC%8A%A4%ED%8F%AC%EC%B8%A0+%EC%84%BC%ED%84%B0+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "에픽 워크숍": {
        photos: [],
        placeId: "ChIJJf53Pc0X2jERHrmuXI_qf94",
        placePhotos: [
            { photoReference: "AWCwydh6HjQpNCX1iee8QQ38cqdld_-6grDIRPdg3v0h_UfXsSJOVccIdK3cRHUf90aB_VlKW99Pg3mjbeRhWoevKmFnmRZMwWqEc-almM7aOBE7udaa5dQk2Nn30nYI8xEsivq1UqHA0xIYw-Vl3NhtvcIJl8vtdb0DZS6nt5JtgExqdONdc-HFT_Wx6Z1TWMEJpOhmDx5M8nEBQHsi1SBC6djTFgVJjnfe3oPotv0L5LTZ_zZIldvs4dJXYP6bSBAPzA9VZ1qLkaoYaD-2JA0A-JN5akPfb70qmGAXiDAOEkIthOeyxtnK9H3CQupnZyZ-54drCefeJXTCp2XSt0-9Vm6TZ_G48JAdEAaXSTAdm6Snme141TK7vF3yzljLBJ5edBrUrWCzGdL0TQ_HxEKfuEFe3XXep_bFeoF32X8QsCz6Bg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102658112446297265953\">Jasmine</a>"] },
            { photoReference: "AWCwydjxZNFre8siOIF0KW00x9wmyOVbv2QYpCSYwlCtfjn0BxeIzDNXHDUZ7mOGkYlnTzmd-f4XtbpOFBySYrpbWJkvJvGdfTKrvcJK_JZewXvsShbyXTb5TMeJc1shLU8rKa7pHH2AwHSxkZ0CwzgIU9NGhToqWPTzbalGt5vdoVd6_Fwxp3l-s3btosNYh4WSQB9hfOxLvWcbEAFrb01szzAzT8XTyVjrLxJEYcgubDvV67NTmkMk6LXALvzmDlCalm1sjcZ4SEWnwFsQzwYxqJ3Vy1jGmi0SnWKRgEJtcV83iXX-B87f1RzS9XHMoWmK8QMTW7d6MT_F2K_e0SJ8gfD4hms9ZI5BhajEEsaGEp9vQg8KyDWJ5yqfIDsz6KhKyL5ys3tmiK0MjAeF2MTn7yjza1XhY0P4fjRuHPhbbO0", width: 3024, height: 2961, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118426901522818209782\">Glenda Teo Jia Rui</a>"] },
            { photoReference: "AWCwydgLz6Tf0O3mIKeZr5VgslST_dzDYSiARaSYke8IisjaywOlU0-MHJvFMIv5xYQXj6hJgDZUjWZjhgYkbf_rAL4YqnKgyF7pdiSND0I6q9PJMgLgiYM2v5676sIR8L8ScaO8_1f6qzeBHKkglXiZXZskhPbIKY_M0Ri90FaF9nIwn5pzbx2xeShB02I6eXSOHJxHr22DSGr7K1lVtek-x0fNIKu-UhJq3HE6U4Xqq_fkj97_R9ZYL2IOieduSkaOx9lSl_sQ6PNFO0HDr-8XN5w-RGqhNjYigRjvIEGaV97-YIs17ymOGtXdBV5_bhJYgyInwk3BY5C2Wv0YxlK2l8Yyi33q4BrFPqUskslnemndkhWBdGunRzQ7hBHzWtCdCHjnv0iqm4dWW7yiNp4Vi-Rw0v5sWusRXH4N0baehXI", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117537992069752651413\">Daniel Hernandez</a>"] },
            { photoReference: "AWCwydg-vDJcmJeTNccbjbi5pGMXNt9oXW3iTfQjiTQxX6T9aASJgN9uVDari7uXU37Z3Xq_FnesJ51KwGBMxfvj6WebmnCVGb4YONoT7PLsfpXkGPmzL5PHAKih6EiSYbYVJMj5Gcfjzl7bDmpRLgfqSenvm6mxWvg2cqul60MNPHWq-9jCX8D6YzF_lmiIEVIW_lKPXcbVolyZVmMWXty5pM8_87kJCqfKjr2lVOVAMfsAXDA7_0mGjKOP1yvYj77j1ilQvIvau6xv7-skgfdfywwzpyNgZ7EP7phAwhNUU_rtykoQuRorLffCvQiXb0RWynZyI9XlzTrR8PKDeofUTAgPmkOuHJtgF-h6EuW3O88_B6AfVTRdcCas_JqOtzDZ7A3IkIu4DVlusTS9mEbzy4-0kSsbDvtx9n1eVbpN9k0ngg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103943798403384585564\">Annie Heng</a>"] },
            { photoReference: "AWCwydjwnvYr5FJFMWf5TvFrHCI174yG6aw7gjaIA9Jr_jUQr7CAWTno0WKei0sM_Q8aw76rys65iDS7obyjT60miLWL4ryxv9YlKbj3FFdnFADi1YiHSpkt8F7lM4gmNjgPWI4QCwaCN7EfzVPA3FlTW7jh27vHwJBcaAm20fyAfFE3HBsI6VI9aoxydrF1bl-0c9GuCvMAaNG0lTtb0uvcSf6pBlSSWxzEnYWTNamJpUSX4qJ38MXvnU5VkIs6EpzvhtcIEc4K6ap2f72AHEBBeP3dJoqXi5kaDrOBqIgKJlngb_HMGEcl3Pz0WiuWD4n-0NOCV9LuP2izT3FTlD9VSFKba1a47dve4kJYRxBL8gjnOiDwJwCk9_bgmQmBIO1gFYT1-KOtwvqzilQ9ZuOqFADkb1KFU9gIvqUheuN9v-z-UPqWMiDlfsqolGWJtnQJ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109375350060790624061\">Priyah Haritheertham</a>"] }
        ],
        summary: "치료 효과가 있는 고품격 워크숍",
        updatedAt: "2026-08-14",
        highlights: ["치료 효과가 있는 워크숍", "높은 고객 만족도"],
        tips: ["워크숍 참여를 통해 힐링을 경험해보세요"],
        hours: "월요일: 오전 8:30 ~ 오후 6:30; 화요일: 오전 8:30 ~ 오후 6:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "37 Jln Pemimpin, #03-10 Mapex Building, 싱가포르 577177", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.epicworkshops.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16032791099918432542", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%ED%94%BD+%EC%9B%8C%ED%81%AC%EC%88%8D+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "디 오픈 키친": {
        photos: [],
        placeId: "ChIJf1qEtaQ92jERT_HJ0tWXF3k",
        placePhotos: [
            { photoReference: "AWCwydjeW1xC0glkqZ2MMKeidw7NEHkEFZ_Xgk5_24b1uuL1uOVaoXmOoG2lhr_B3_VfRG982vRfThOQQgPt-tuFyOXulf0aLrcL0oUA7jraGiUN-4p1bBXI3AyVWtqMLUmq5XYkKRZMAj-IMQNANUPIdk5Yde7t5x7KT27Jjk4LoBoxqU3uJe-rMKEDOZQ0B4xgisQQ2QILCiUECTdFFYDlC0LUsU4CM1nZM5Vja2L9LIhuU06hnN9RTNo2DRv9XuhRyYJULu3YlHEf3oH9AItWYznJCuihiR6YisYKzBjU67LU6NOevNBFfAup8zazJDJKoMT4SiCNn1ey_mur_Xeq4RiljFpJSPDzKCNGnhS9x17Ts41EXIDHwtVoAfRh2BiCVjIJOTwK9oTsqhTOr2aOFb2JkBFjmO2yL3Gnd871QEribYas", width: 800, height: 450, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102951436847332296981\">D&#39;Open Kitchen - Corporate Culinary Teambuilding Events</a>"] },
            { photoReference: "AWCwydhebTQha1Gsfeek2j_teTrlxkB-ez0sqGI7d9VakLLfl5laXT61ZwSmZnfMJZ5unkWq6npvhHlbKKFlDfuFfI7Vkoz8ZemPWIL-GLdKxFpCxrHpmn3wZHCNZq5yMsc4zWEkaNtjJH57ovirqpg00i_fVhbhEq3y8glWxh-6C3Bd5sKgbJ4sV3IDtUxYR1v0TkJAt8tdH5ZXSkksrvpW5XANeMOycgwbvX3bcuHxP1kLPMNvsAPy5NsLpJ6DcLBUPDFfp1UAhQrBk-SuLL2ZEXJyUWVAn5dvQKp9UsKRUNRiL4IkUx5meHngdFS515i0IdpMJbfAk92GFIhl7YGSI46rQg8s1FwbRBoYffTrAhm68MJDZOvqMidIhv8Sqek7_6B7i192U2aOh4Iw-uJVKK2mNJWu6cqIuT4ySY2tLSfXcNuZIeGAqZHHjJ5IHIqS", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100286415075345823712\">XI SU</a>"] },
            { photoReference: "AWCwydiZ7WXe6QcQTwVspuxMzvFqkspq5BKW15w8-zJHegwncHaE5IdrImbNLj_6Hdl3b73hk-K5PYvRP4kirIf5ADchLR8YuI3FSp1uF9Jg5Y6zwnr5JU5EB5ZiWWymL4nQxy6urkRi7RVwQvstevPeJ_-_zVsUqTcgCK71DKNdhxgqUgUQr6xT5Iuv30oe3pvsuqYRvMBc-kXw3EbKu_6WaBSSDIi04tBJZn0fFddzfA_4_BRIPp5TWue2l5EeJDdwnm2oit6-tL6Fm23r4Z6BXjEJB7G4_zW9NvL6cMzcBys7JEhA4DZEyD_1bzBFsuGPrOseQgD1lCtli2JDKBYT7CIGbeYL45YM8VLrq2gDux_RFvJDD2EkyD0Zoo01DEAE3AlIp6N7K1oh_eiFeuuU81Ha6G7MuLkPsXSj8rjejplmFk4", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106878831295161756312\">Esther Poh</a>"] },
            { photoReference: "AWCwydgfYwjod4yuF19q50HJkluD_OqjZ0eztbWk1gcHDKMze9kgi5anyvtcgpoxVgH1UVrJN8eGVGEI55HZJO_0X7meCgAHpW9ROKc31trU5bW3fcVl3AOBUhmMTqkUQV5zOeQwd-EdRgB2Lg80ZsA-07VCG5q4exmvb8_VLyuYKFfH_vuE5FGi_jnrl6UTeg4cBCKVp-bC5FwYwLYnqaqmeYCp3Qpd8uZew6tHfXnb087fdSKG5RaQxBqzn-sW1pu9F52biuOhhDFSoNABrHNY2wbipruxmloEvglLaYc4YY36W7hUH0Y7VwAp_yO6NY83BY2r7Jcff_608CAYTVZQ_yufFj5rx89ZJU_uJiA1TK2D_uivRvfVRXDwe6H25aLpML6bo6SRKzZ0pHDXRewZhAcsaYHe7WK3Rw3hkGre7bQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102958367688752749306\">Collin Low Thiam Leng</a>"] },
            { photoReference: "AWCwydhK8BS-m656FSLG29LWgp7SFAst28begeYjTLuoBOmb0bzc5arBZLis92GC_77MMrohNs3cEwKY7TMiWk3lkGnAhtjfXXPHqDVtdYqVG9oQw0nXy2lT1O4rb8PwGx5vaXTmI2RZjKbpFPIffucfLzXqIgdGELj8EZ17ZIcedpiRA_Fa3pHtRBbuUNG5uP1MgyNHEztR-6cSEe1jdkTuguPZUo05U26EU1StJJ6s2rWvwjkTPVeMTgsho0nmtO3gtLGQb8GU0vT4h42TsyADTP7wyM-yrKGbUngxYGbQ3CkJ1plfgIUAR7-ZvPjONFRMKQXigK2X0-iQ4SXTSinayJY-w_AKfVNXlamxJD0oZM1viiAWkrWckrmc_kEj1_HEXcXernyQc01djagk1okyz7m1qdf_O5mUFpugBaxLTssvMKsAoDv9csd9v0IkJiru", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110327982324194867931\">Weiwei Loo</a>"] }
        ],
        summary: "친절한 직원과 창의적인 분위기를 갖춘 팀 빌딩 이벤트 최적화 장소입니다.",
        updatedAt: "2026-08-14",
        highlights: ["친절하고 도움을 주는 직원", "창의적인 이벤트 분위기"],
        tips: ["기업 이벤트 및 팀 빌딩 장소로 추천"],
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "6A Shenton Wy, #B1-07, 싱가포르 068815", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.dopenkitchen.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8725609747673903439", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94+%EC%98%A4%ED%94%88+%ED%82%A4%EC%B9%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "푸드 플레이그라운드": {
        photos: [],
        placeId: "ChIJW0vXIG0Z2jERg_ae8DP3ak4",
        placePhotos: [
            { photoReference: "AWCwydjVm0JHSrRni-FHEH7AAQfQp2pK-HoN4zEVq4eM4XCHyqkUO6Obr4uCDBVJXhORL9c4zpZELdgYjKC45KV0RCQQVP_2V4BqfCBZqsFJn7iE9ff_fs26EVgOd5Nw1nAbS4K2Qdh4cV7OevoMNzsU1G6UjR095Qtq3QneS0ywcI7_zIHTKC5_HMABI3EJnHYtuPb9pmBO7GLJ9UfKVfVAlhoIli1Gt3aeY3cgcVLVDu9ER7UGg66Ei8Sbmk3MyAYxTXcPvxfrxy5cI0w7wi3eRonch6VSooUUuq8NfpPGfY1Arb6ByC4jfIhiEMNFqkdxvdO3IEFfowhtHGZyvCyArp6IMd_P1nzS5U7Wgph9vIpjZvdtXi9thsI4_Q0VnWNXrnJtkrlVQPcWkeVMs6yl912gpM1UnJznxI48MhBdP-ssY_UvExi0gHVUxwGEPRYu", width: 4000, height: 2664, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106694086400943075397\">Food Playground</a>"] },
            { photoReference: "AWCwydhqWbOURnKeVKwsDyKyTrATtRdaeGkr6MFbcFS87qgExldB5tOc1X8FqlBaeUGCDq9VZWoVblDFaNGfexTrPH1o0q3t4dJ68idxNzXvufPAVg537aIVNgopEQ4NK6pLEC8pbgK6tGy9zkzot7BYbuSKgq9RTSBBEwzFGUDMxGOrE__9JwN_H4NclyJMFuHsmq_INzCOwzSbjszaJr15YOuh8ai4oOdNjp4MQDpxXFiqqgXKvLUD2dJCBjFmBtFwgZNMv2Ngd0JLP1xnDuWJRCOTZ963NsVuucah8NXljb-Nitxk6WEB0BWJ_F2ar38IrBq0_aiwJWsZMNRSzwN2g5VHpcy3AuXC5XT5bbcC9rUhyS_vaK5DfqNcgmO-w1IGLeHQ30BBuPVtRe9vxRLr7xpeKevo5tI605r2g3iwqhxMBw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118355565691938791237\">쬬로긩</a>"] },
            { photoReference: "AWCwydhoguKvxpFpJa9Fi22S0Xho9ohOZMwEQVvaZgadWVp93mxcGzJfIEJfzf0QvMEDZxmybJQd2duTW3izo_igJDzEor9Sa9HONxgwa0tch6drxMKQ7JqicLLAnZiRpYhrkULlwmQqSdvDGfaU3qhxxdd-YWOYU0fNrgNlTnONGM26djhFYiNut21MNSkNjkMhPegyzXXQRG4HPmlMduljCs64TiRenqaPIPbmrSIr2J7KOONtJLSFG6GfKl7BzyyTQSDtVcX7R9i9psFR4_0MYGztRUJGKmsMmvKajBiEIpX-1uGncFcmOvr4TQr3Ec0jbeQKeBBGsaY-ZfZcPrYolXEzGHszMHT1b8AD4dOigN7qIXCIGEpPeRHAAOdpyItXmHzRHzV8o3tKs5RcYpU7O8RexjP1EsPy4VIqzhzNZbg", width: 4800, height: 2400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106694086400943075397\">Food Playground</a>"] },
            { photoReference: "AWCwydhlQnKOtCvr2xiWzFd-0CpqIyU8Z9X93HL2bavoUawqKh1GwIahq5Z3yZ_P5U0J2eC-DSFAEo2yDFRy1DoIUn89KVJ6QaLFbcOovOftt-WuIFsRFTlskpnKv2K6UFztQswKnq4D8yML_BS_8_K7woXjniYwinGRXBjfjV1RU-KvBUcLyjujBlWcF2yhGRZkaW92FNTYokTA9npdtSuBGe_X8KLN2f6tNx1S9qiJ0Zy3ujXYcoWW4TkCxkCkROHiW3j5vgU4axVJHyT7_oduBsvAnICtVT3DyxtvosYSYdklJoys9Q5aOC9QqsziLBVQQXg6dwd0rnzbdXqH6li0kqPyxDhKFvY4Zj8qozLYBufLcdv_JFpddg_wNx-e3uJFXeTwMIQJqpohIlHzQV0fffLCrcxHuaacbon8iaq9SuOnPZs", width: 3048, height: 4064, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112316273815177053310\">ting Saul</a>"] },
            { photoReference: "AWCwydgBZ3slubmBU5ybWHbtp9pMVgZqUdwSXEiKoasSO1ahGDMv1sR66MJSpIeWgeVR60vfBPAwboGZjNG7CiVtLZycaCIqcu4IX9m7LuSJXBiZI5ho0NIDUZb0dHV6w1-TE_ZmThSisk8ZBTwMyZvvmMx-DrXu-Li9UMtIvhQ3oYYbj3ajX67LIw4HA4UGV6BVoodJ8uygK1Syr1KUCxqQM3JFhwN48qEMIeJ6yrH9KN08OIv8PvB1FoEHNxRD1jt_VOuEPZaNZzralnZh7143cFiwt4g-d1vqROvOyneD-6I3ybbsCTCWKnFuIwaIXkdd8TB-3wlXC-BdLQP1ZDEAlBO2lP9FpiUcCC4F_77b298r0jhyumq2nt0RkveBQYTTUnisGDM_uXVrHMMKfaHrBRXG-MBnYol5XLEofePDnPvmjZM", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102505572814063271056\">candice lee</a>"] }
        ],
        summary: "동료들과 함께 맛있는 음식을 만들며 유대감을 쌓을 수 있는 즐거운 요리 체험 공간입니다.",
        updatedAt: "2026-08-14",
        highlights: ["팀워크 향상에 최적화된 프로그램", "모든 숙련도에 적합한 레시피", "전문 강사진의 친절한 지도"],
        tips: ["팀 빌딩 활동으로 활용하기 좋습니다", "다양한 현지 음식을 직접 만들어볼 수 있습니다"],
        hours: "월요일: 오전 9:30 ~ 오후 9:30; 화요일: 오전 9:30 ~ 오후 9:30",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "24A Sago St, 싱가포르 059020", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.foodplayground.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5650600484942050947", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EB%93%9C+%ED%94%8C%EB%A0%88%EC%9D%B4%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "키친 쇼다운 싱가포르": {
        photos: [],
        placeId: "ChIJEz01O20Z2jERao-eejDkACs",
        placePhotos: [
            { photoReference: "AWCwydhx7kpyQJLYdqR0GGjb--DhfDA0N-tQ2D3oQAB_isCggoZ679-eiRAxb6qQmrdGn2pM_WIoVxG_mntpDram4VRzEJHWXBgKr1YntEBA2-VbZMhFRF7Ol71h88nAvVitaQvGxo84UdFtRcaYx-nRsCRUYGI4mfBS-_B4LD_YVYaAd0ZTtxyd46DUNGh4eWryb5w1w_gItEeRJVIDiSQGdpIlGtkmZyaRaAy5OvT4BPEMDv3X9hCDmB3fWzW3eia0SKxaSZWC31SuWwYvCN9oB4vKD8luQ4bQZT9Y7YJGIdi8FL6BSvESXrZnXWMY2KlzS4odcc3eQjV8V8YQWKjZqaWOPkD1vnWvs9M2MM5iV5KRy1XPVMZHj6vs3jpbFYyaYeeXn73G2YO4zoMEB2uo8yljlovaReM0A4fO1h4QZOYP8YNh8ruDYjBn0Wr44zTJ", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108441167580543821183\">Kitchen Showdown Singapore</a>"] },
            { photoReference: "AWCwydid6AmIOLt33KycBXAHmhan64jhiX1PhlBkST30UJIAe4-N_PmVmyGmR59fFmsqzgR3E5PkVTDFP1Lyir1RtM8QjcqGUGHKJ4Adlv4uC8vS2HU0M7s3IUPUdLt393r93igadE8a0oh95oMUOz6pDoNK5MV4w36tCPcH7SIRu5Fp5gri9CR0nlLds6YC9jMWkfNwxLoqxlkHD9XAHTrO40AU5vefWFFWU-EZexQa51mEQzp0nxUvL-D1gwRZNZ5XupFTHxV9Qejxtq89knaqvYKJfoq0mkNk0EP56aZrpMwK5qS36nFIDzhpmr7effhbLsjZA8Fx85vBrZvriJcB4Fnir4dIk2YAcWJPBQEwpi94krHwPc5w4cQ6FMYp72bdwnVm8vevtGW6FZZHEghWfTWwKocUWR1LdIxJhDcsR52HTLWH", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109303066553460597739\">Jean S</a>"] },
            { photoReference: "AWCwydgn4rkMws4lk1j-AuTIl_cDc-Zun0CtMVapsz7hOuIGXBM0ZNAVjmQI3xQiubXrD5qtAyf0xPQ1sdcHShTX6VFeQgU4ztWVUmOyWsZoRSAbRi6ipieDHk9U2DoeUaewC3RUO3y7KlIMv7tbKJbUFhqTp_bPY_apLNetaRwLpmfzOcEgnHp9M8zz0CSU4Gt1l_WeMELOktDZ5PbaUswrO0rvRJvvKk6cJDv8muf_qXv3RnOvtyPVKxZuOujncgCmt3vmpDsSojJ0yNgrXtoLMzIei4d4jbHp1NuZQqVUkZiELI4BTMvu5dtCEPhYt8ZXCTw6rk7I2vKkyd79esqGvHgMcaN-zHjhQHHVADxInLUp_o1A1m85TIl9zZyW9qTOzOpO396W7CPHUUGJR1bSsH8K7zcMX4bgG3Yvd6_uuYtgVQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107956497174517084664\">Jessica Hoang</a>"] },
            { photoReference: "AWCwydiV2eFw27fFfuv_fr5EUHZqTv7wU3dcaoohW9klG7knaqub1zX2ogqCd6M-OWm7xVcgTDUo0412mMprI7H1bRn-zlFdapX_on05Uobo4XIRo84rAe4Vwn3w1q0q2udbB4ZAc8XkZ7cOH-4aK_Ar1XrIsCLg6DI0EaApyW4hYVR0Hnt65_u58fz7HE_ORt8o6ve1KWWDG2VjRghli4CXEkP1p4pLwQrIJyBPmh359Qb5wJiNQVcehiV3bMVP7ZJ5OWeZLfAvEuqP1uuw7y7BhQvth96gXje9C1oUo82IMQzAjGQFt62VQi9faEYSoFVqm5z8pOHqvjQAxHKNUIQXs-eK6Sty78bLHLfdj6ItqiXkeuK8GDLlKo70f2YUct2jJ0ODJY0LPoo-6HUdURhPJFiq5Pn-7lObOPaXkAyuX-2NBx-F", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103418924376092323276\">Nick Dawes</a>"] },
            { photoReference: "AWCwydhftWC-8YCsN11Gaieg-C-zZWdaxQa4nxbPYm7WOW3z_HsujWew4_fvB1HK7SADE5L03CgnjthXbvNj7YHRcC3WYiItsPINQQ52vF7UNIhQVzkkLvzRAD55lUxb0eMxDEt1pNDoWDq_dHEuDeRP066xV8IKp0X50p3-ucU-cxOGIBSxepEBg21sxh5j5ke76aofCByGCE9aZKRP4cK3bcfMh-7-4FXKB6VGHIZAMP7P_uCcj2iiMKUNNMLXcWrkpR3wppoA2sR6WTfODt_AYDRAU2eF2P-7VddTJT4A_j0ogODc3OQ80wic8UQnZQuIVQ6G9SrWgYDLEC4EmyTuNj9pfmcnSpGw4v5xpVOLNYMJiBhakYQDUUva7KdLnGX3DffzcaJhOzVftmu5ABy8BehVq5PEVQfDU4Y0eomeyIKIzYc5", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118132169390190939390\">Xavier Wu</a>"] }
        ],
        summary: "4,900개 이상의 리뷰가 증명하는 높은 평점의 요리 워크숍입니다.",
        updatedAt: "2026-08-14",
        highlights: ["전문적인 셰프의 지도", "함께 즐기는 요리 경험"],
        tips: ["일요일은 휴무이니 방문 시 주의하세요"],
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "37A Boat Quay, #02-01, 싱가포르 049826", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://kitchenshowdown.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3098727440497676138", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A4%EC%B9%9C+%EC%87%BC%EB%8B%A4%EC%9A%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 스타 퍼포밍 아츠 센터": {
        photos: [],
        placeId: "ChIJd7L66kIa2jERaUxYdmhostU",
        placePhotos: [
            { photoReference: "AWCwydi8cGwpacLkfLNd1H_XZrmUTQfM2mtL03fkCLnxl_7f5O9bHfcmEZwDkdhmXx8N-GY2e7El3SKUjxQEpOTSLN19rw43Eua_szmD8iuhr3Zo-zRXcHg4EFwnFDmdmmTaqb8eP-svi73uvKUa8sRDR6w88kgBUy5IRv5Nx8OQOdBc8-ybDWJTwi_0nVYiwM5gWK3DzW10vvOqYLiW-vu-N219k0FqZ21yEKXtrsgoCpzlZYsCcEs7wBLKpT4C1wv6izT2ufwud46DD8jngfFypdVl7Sl8HEucYzATLVe5bZHhLxzIDPN8wl0MEv6GjvNqyRPm8Jzmn7b-9n8RvXB9ZEuFE9r1Fw6EK78j1DScP7VSKfV_qRYZ78hNKXl04P5bKCoJKZjZoL9gy0K0-86EBUM_TXFNvhxPQfnYJQ7NbaqAJw", width: 3680, height: 2070, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103095509685041757153\">The Star Performing Arts Centre</a>"] },
            { photoReference: "AWCwydhr5PTft0wP8fGAU_OJFlsZ4Kx0DMKHWZZ6oVzhJCi5IVQm3eYX5vpJsUT78ikRTFIlWJ7-ZfAxF1ovr4tnfIGiwlZD2Z4JUjKTt2_UnE6iJIx7gZGPIOKYBRLWwoueDuuPxN_D41fXXMEMoKmtodmCRyqx9Ujzv15CWCpeK34Rbp3mfK0UZg3dTXulrFbHSP35Crwz8em6gmV7ZTFRNZTD_z1fvuKX9bhG1hPk6mxQuS2Ekyy95-tjA4nIbfURS3SCFnK6qHuj2go7d9cEi0qVMOUXM48h02299HfMHNtX7CWWC8CntIJdMPgd8bnlbPNhEWNhFiiQ_aWZB5Jjv9QZo92df0z95YbY3WuCXZK3d0WfNsfnM2y6qJnYq5c9pGJ6QckyxfNRG-yvFYghmV85D1E9jQymVX7qmrFuMqt6Xi8o", width: 600, height: 400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113366603916524646580\">Amritpal singh Sidhu</a>"] },
            { photoReference: "AWCwydhAO094Z6L0l9AFn9ia2J15jkCy-Fw0dvivtKU7RGteaeyuLT0T4zZH8o1khhQSX3Xdp5tA237osKkloyh1nvA8ick6KWZ-DwNXVV9azKPy13LeqIVTOK5lulF7Hhiq_ycAEL5Z5_btxtb4THTc-XLXNzDenwIBo_SEAFjWmDP5oHI3pfXw_9ujL_vrdAw-F4_rH_g6wP4VHk5qlgjcXfoumzqabuaOYHos7U8ldllq85pjsaQQjMPwapd87wOtRYw6Oa798u-OW3PBEbQgy5WNtoO1wNYtgbRevdM_Hlp76L-8Um1t15hJOjWk7t3BkLE8XETJjAL0yDSmz40pC2adgBUJxLiGv0daQ42qrK_oS8dGuCfMoo6NGmDBvxUbhjiZFezSKnaAormun6FEQyOh0TOdYIkYfnT04tgOsFPfe0A", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111643836648159206574\">Stewart Wang</a>"] },
            { photoReference: "AWCwydgvtm5NIvvVd2qprXZ_U2sB_vp_dL8Ri96KaMVpkpbYwe_yzNaCPbEPee4XzLwiBSwfwK--kZ7GiyVAd6nIJqxLrvAex6QNaY9iyLR3eRvgqeippO31FPH6quSwa7wGl7T63LnfRYKKvIEXi3FgXFsbMHPvBKORDbRmaaKW8NcRJrrWb62BUHQKh0G-G_UrA94TO_3VaxLKffGmXguDi6etUV1rfa75qL8SntaGyI5KQ13WSytcJLlr9TaIynJGURwpQrx7wUEIOtaH3GUa7rO7zp8pexiR2RRAVyETBszAEBT-R_0_hXDr_P4_WHU-sHfmQTxe6LYkOaBqdCrkadzdjV3MBmEGyoH6eZN2QgaybRjTjB6nNPPhT2SGofrYy7M4KDVUMd1lVeLS8ssMQhtYowaeMcCmtuy0HGPnZso", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116951199293759785218\">Manuel Miunske</a>"] },
            { photoReference: "AWCwydjbryG4taQCSJR42Zulfl3CbzDLHUdbVj9DloPWjjIsSHE9I3ye70dljKnWTSd9pobw2gDk-D9VzaJjmIeWcr7keTPd6lfvJmgLHKFvgMVOiBD8u51q1vJyC03iE9uT9z4UiCawNN_7sUHVOXdLyuF5n_Ip0HTa-eAtdkBH2iQPH2X0IxCEAxVjwaEpGz0PerFJ_U99GCLk5Fef-eJHmMnARhZqQlKEMHfUkSH4Bwbw2rKMRTXF5gIaeMVA94EDRZpOnRXHgVpKdruC8iwcWp2Kf6pcT0qow4pLqi0uHcUka_n9fXVlTnWV2H7mk9NbEz6pqZHyRPjL_LQrdkENW88RznVKsHPkXxPM5IFnaegAdE3YqKm12o4zynSkeiUi_mz_nSsku3RjtHkITVsRSgzsvSgBxb1-6wD7vAwnVXQc5Q", width: 2296, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109797649602460148372\">Christina Ang</a>"] }
        ],
        summary: "3,145개의 리뷰가 증명하는 문화 공연 및 쇼핑 명소",
        updatedAt: "2026-08-14",
        highlights: ["조셉 프린스 교회", "흥미로운 쇼핑가"],
        tips: ["주말은 휴무이므로 평일에 방문하세요"],
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        duration: "1~3시간",
        price: "현지 가격 확인",
        reservation: { required: true, method: "인기 일정은 사전 예약 권장" },
        access: { area: "1 Vista Exchange Grn, #04-01 싱가포르 138617", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "http://www.thestar.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15398484873804532841", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%8A%A4%ED%83%80+%ED%8D%BC%ED%8F%AC%EB%B0%8D+%EC%95%84%EC%B8%A0+%EC%84%BC%ED%84%B0+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
