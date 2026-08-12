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
};

export default info;
