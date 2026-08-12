import type { AccommodationInfo } from '@/data/card-info-types';


const info: Record<string, AccommodationInfo> = {
    "콘래드 오사카": {
        photos: ["/images/osaka/info/accommodations/conrad-osaka.jpg"],
        placeId: "ChIJ0YkmyvHmAGARhIuTXo0rkZI",
        placePhotos: [
            { photoReference: "AWCwydg9HO5d8Qjs3z51FsuSN6BFgzNXsEN1P-TqySzO6ujZ0diut5TjUxzBbtRQSLlvwHuTK1iKb-2bY3ALMEnIsva6Yki2pRlTmLwkaoayKaeQxaxcZY57PT-M96Swqse1R-dDgngfQ8h4IPEeJ-kpBMCvNdS4aC3c9mXvGFqh8tqSIW4Ee3PUpum8_dZs2oBfU_Rrk821syM4b-tMOm2dxv_ZqRJ9LwFmFQJ5YAkOun3qY_E8x-_1C_hCCni2f5nkijl7VqzX3sdJYNpZXTCaZTO96fSvrK1VSS6ldpaFKSlMgd8zg8Op_7qIEA0lu56Wk7bxQ61RV7siPYVYBJSVpkfjzz90juwau6VfK-h5v-4VKispGx1EW-K9FeIDnhmHqfGnaFs3k5hN3GvRF3PkiIIhdymXGhv5EZBsX8-yHJdmZQ", width: 2500, height: 1583, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116502192645749980373\">Conrad Osaka</a>"] },
            { photoReference: "AWCwydjjPtFaCxrIqp9w98UDX2eEpOq9IRHFnzXPjJ7dtYUTqUirK5Pg63a6MOcxvzEeLXqUKMIUe7W4Tb_7_xp5qOH572mOniQzeqcnpS5H5iJvGzoRtw6XSYFe7YcWeevdcCok8rzz8LsngYs1CFtnh2fnO-kt0Xt0ZcoFXMrErNk0xT4ketsIZh8DCIuLDYsudCkv6Wcgoh8qm00JivISkaG9ZhpV2Th3FUBUjT9aiSTGoQhS6vZRfWWaoy96d5WTNr69uSHYTVvCDqwpdUlBaev9h8flLeeDHrDnDsyZyCXTv1B02tO3MHkLSXLJUTN5TnIRl2ZbJcYjEM6PlYTlZf1TjI-4NIT47y1YQBBqmrL5u8EbKjJQzp0tM9tCUgX8oBNgrqjsVLn_Xk4IbHHeEK01tC9v6_CdFpkiYIa331jdOg", width: 4608, height: 2184, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105737034553089512881\">Alex</a>"] },
            { photoReference: "AWCwydjh4wmlORqmHRP097OJhpAltwfq7gcEGLgxn47xgPd0MLbOx6nEc5bEiOhRuuAaOUzLll1F_h8ps6SZE5fDc2eZAoxRAS5JmvQxg9Q1mOuU0DEUCtrYR7uM9c1_0gm0KwwDYMW-KQ9npHEteaIHGZIvkN88ldziP6Nxdfc_gQPMDC_rndQz2bYHN2UWuz8WfXqobpW7e-QueBG_zm9NOzDMZMqh1SCTAmN-lyk9Hq2xQZ1G8mfuMtp-CxwRhkZCGndKuH6NyMSV26e6buzKuOfqUBzK8uLhj-edGvm4U3caojx54-8XoB-ohORlQRYaFfRqZwBwnS0ZqW6UlLH--3LI3JSDHaY2GXhEAC3VtX6sAiMmcQlkdcv34lKmZZAleMELo1kliQ876tVAlIbjvaZKWXVlDfbeLDhaZKr4uDd-q7uK", width: 4800, height: 3421, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116502192645749980373\">Conrad Osaka</a>"] },
            { photoReference: "AWCwydhFUWCC7yfYfRtcnLhIII82KQD4axs0DNSSFS2C-NvCkNPnJg8NAm1HoRkI6_6pA1izED1qxCAN2PTNOLjXzi6ZHi2f2RSoQTN1T_s-tVLdXJgoOGUADCNYUXoHtD9tRLyFsbBuMiRGkwdpW2WZPaoQmrkCz6fgDENdaBWGvy-yRO91DugxZ73VIqGxWQVFqJqR98I97jyzNw21cdt9GcZobB6LFCvi-ZstfvnKb240FKUKkVdtrzDx6Z_ZrJ8dpMEmk-FsrNOxAP4JLXeGwRclNyhlpcjs3WUl9Yz_gqY4-M1U9bds0oLSoM1BVu--_98a77KGIaDzHlote_ED2TqzrRoj4SOBC9thzIfMDTPJkug91b7cuoGdEruAc8QFC1FkgseK2MBiZ6o1f1pOUmZ9pSHzL2e9mYi0Ic3R84XT0yyr", width: 4800, height: 3203, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116502192645749980373\">Conrad Osaka</a>"] },
            { photoReference: "AWCwydjcluacjlVTVW_UtNYBW9srF_MdcBBFsYE4nTACQU7BmuSp9nKFkSUCS8N_BZ_gjrrizpwewmWhlDzzTnad2e7DWmsVBGejX57vSrsvcYr0L9BlzCIWk1Ys9EECXwD8ikdLj3gUuox10T5-udratELQs7TaFR2VUz7xcqTqNsTx02XYXAgjynPOUj7rmQG0ZGhr0ynsn_gpBmh0hdO-3Jja2ZUyxYcX9-a4VMQklSvtIYi0lag6sHEIu82Pgvmzy1DXuYQtUvzOGfK0v2fFH0JDQj114nh0I6eq4pYtfB7US7AjX_fp2i0XEUueuh2TJVjuXPn2uJ712a2tyU7irev4BcYAUi_r6diqVuwVS4QGln__76b0NSkRhw-wxhgXucPzN0HUn_WFvctFHsH2mvoIqdO5CNgt3NgOuonHMp8NoQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115170398986483826022\">Yoshi Take</a>"] }
        ],
        summary: "나카노시마의 환상적인 고층 전망과 럭셔리한 서비스를 만끽할 수 있는 곳입니다.",
        updatedAt: "2026-07-13",
        highlights: ["탁 트인 시티뷰", "프리미엄 서비스"],
        tips: ["고층 객실 배정을 요청해 오사카 전경을 감상해 보세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-chōme-2-4 Nakanoshima, Kita Ward, Osaka, 530-0005 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.hilton.com/en/hotels/osacici-conrad-osaka/?SEO_id=GMB-APAC-CI-OSACICI", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10561270487337634692", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%98%EB%9E%98%EB%93%9C+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "W 오사카": {
        photos: ["/images/osaka/info/accommodations/w-osaka.jpg"],
        placeId: "ChIJ14tB6IPnAGARHVPDh9i9jCU",
        placePhotos: [
            { photoReference: "AWCwydgrwP4zMIOPPZzRxYklNUDDJu-zRGVFABHPtd-6vh-wwhPguEx8B0g92Ikn9MlbUvcdhnW9_yR6Y2IsQCPxK3Q8TbNuQpXVXxRrTvq6KYYzTKvK5M_HPMNp4M7LQldzCjmhJM7ghASx_zVD4xXm8Cr2bXvdciC8FajPd_153V85-cvFuxiZ8blqRVXz2DdtFF4dKCne8sY1oPt5YMlplcfe5qpfn6Gtcf_zmMqn7cl1Kg97fZT--1KK-IJxPdd8vRx3jY6l_Hqe4E9Mg8gEfnruEk2uI79xapbMCEo165FOrlW7vdk9OlhlRQZiF13QhB0VqsI_MM8s86hNvw4mCuOcRU7AALeD7RKiaACwerjI12rmyul1gF9iBjW9DGHdRX3W5EdHGm9uw-mAU5LOEgU3OOqCWMEbN4kKFQTXMYIb6xwHXW0gYaJv3_PVBg", width: 1444, height: 812, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113663097177019033059\">W Osaka</a>"] },
            { photoReference: "AWCwydhytzxirG30sZQOztbtdLzgYOOesINQtptQYVyd76A7FwMyW49utyfku_K3zSo0fLvTmZ_-Pgoh1VED9qzuPM_7RSRikDRs8zfGYS05ZCLrKhQE2o3kuYJpz5LLx_cg4sqcMVxGGF_X_ARR3TWKJHYzaqamhuEzKSgsbShPcQYmNnAmvTUEA0ayxXAeZdFyfOVvNXcmIdGEn0OEZk2kpH2Ov6k8pLjtpbeT636XXVhUEoh-V4aNpvX3ElbwOk6Yo-Xx8cQ5MtutvtOoRjfCZm_SXLnlIV8jsuDYerwdeSBo7fqBeg97t4ErIXOsLiYbmNtFL5YoY9NXHrmGef0L0Qfg_a8QTrJkiKiwBQqhGPnRo_XJ_qLMoESKYN7OPUunBbzjDHv3lAHjfYjc6MytprnFykbtxK-Hd12x-ZJgBRKZQw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105501211946808244963\">Iūnius</a>"] },
            { photoReference: "AWCwydjBXx9QOs5aL4CsbD-_lNtxIKSvMM7QHv1zx27EdGGKjFPl4Pp3bVuIJWmqKPayrM2z04vz44B5-WK645ZkJde_svzliGeLszNFkf_IKglN6YfW4pDtNpHdFve_UXsLSTk4W5QgvOcCDAX4E3iOleMwgtIxoigUYXkyPmwQ0YCKvxvCIFKex9CATBZ1TO_5wG4UGDiDjsL6ok5bFEPFiwRZUsMx2e7Ca3zvhYygGoDiFB23PEx87BbN7TDXfgdvtuUnsQVKhIlC0E_TYAffUaRRhWRCYoXkfyzuSRKmRHv1uLk-4Od1bx_u_aZ8_0t4sGn5IEGt9evUbiLNYOjzdq9PcqtdrXkpIlJ8Jc9jun6TJbPCBljXcvrqpZr0VqJ5rjEY0Qf1GSbuQVrKPt68lYfkB_NS6aXvPriD8dGnaezR3EkFzK1nD00VpLnsyIGV", width: 480, height: 320, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113663097177019033059\">W Osaka</a>"] },
            { photoReference: "AWCwydhS3y1X6GyPdspf2YA0hqCWgQhIBTQOsG5f6MWcKZ_o-a9C4-gG1F7Y_uVM3980WKCqjxI3TbCHH6HgO6pXWx1CWmM48-UBRp4ARi0qaZT3xEVJF9kG26hfTFStqzRvzS5LQ0YiUFvNQAKOzkPN0PuGYNzdotb2WRfhwGrPSq0kK8kE94j8fmXixkuKr_4biFot_Jd61v3YVC_zqCVSqlLyz93_WQqEUUdMj-erLVdaQZnoSNmp9r2-wXa-_K-hmaKX4GqF7YAR1u_VPqFgFXeouFl2yavdQ7R18fA90wHaxuGXqhv-KU2yQ_IkR5HWBc6XN0UqCfZGi-JeLj2kIPU85I6mejjcN4md4F-NYeiRAyYuB_MYf5jGv_hC9vxg7toeNAa3LsYdXjq1GQzWj7tls3OwMIS4PNzhc99uZSDbEA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110685037260416821198\">kun Ryu</a>"] },
            { photoReference: "AWCwydgvQYboEVXkTR3EXV1CY3lIxow91yEIf2a_mt2tivUg93kYR0Zas0pDFMDOzq_Bb2vwy5uQwCFsZGh0B0YuqZvnwGxt_s_b4nOJ05fbMTz9L5i9fKrSV-LbnHGery0bFZx4PnL5znWCBLOG-3r-RCSDOodhMkCYv8jDTKKnSSr_82Vg9YVE7rVbVUmd_s-37a1-qAm-amNqxtoSiKQADBy7P-Y3MFIbVoWCwb8bXOPX7gpmjyISAeM6KiLjyjfFZPY_omoQMIeqXjif00wZXtkmpfqNLiaDFCrcVmQYD4wmvsYSBOk2XKyx8G6lTNXCoRxCOlX0glshrhEoCzMjpyRNlupio-V5r5fmG9CLW5QbQvxVQyBDNX5div_KJgCWtN6np8SXyyx3AJuKN7ghlwcxbGTKBtv9ubC5xMc_MGNMDxImixGcdG7XqrH3Rg", width: 480, height: 320, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113663097177019033059\">W Osaka</a>"] }
        ],
        summary: "신사이바시 쇼핑가와 가까워 이동이 편리하고 디자인이 감각적인 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["트렌디한 인테리어", "최적의 쇼핑 동선"],
        tips: ["힙한 분위기를 선호하는 여행자에게 강력 추천합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "4-chōme-1-3 Minamisenba, Chuo Ward, Osaka, 542-0081 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/osaow-w-osaka/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2705746213831136029", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=W+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리츠칼튼 오사카": {
        photos: ["/images/osaka/info/accommodations/the-ritz-carlton-osaka.png"],
        placeId: "ChIJz4HJq4zmAGAROLy14S_SaLQ",
        placePhotos: [
            { photoReference: "AWCwydgUbqslRxBZG3D4tlIMJZXB0HcGXzZKHaRjfFXuvvMpBnRZkeUwBHBKEkP85AQ-m1anoOMhPF6N5fHpWYy-mQ__yrTrW9O7klCHBL5R2ChHvw4oM7MiMd7w2Hav_fSl0RY_4gBgnjYRbNSwVsdLgttirz_zC2mY2wz2BmpQXwHr7CKvCFY3Cm9tj5okDJBrqqnfngG6lP1ex1mSVQRIA1H6x8GjnJIpMW5PHuJlSyUK7_YTPM-5nLiiPVO2hLuyNbTjx0K_V9h5NRl-nsm-cWytTTi1KE4o4w664Xtlm6yFj7qKhy_8AxmDyp9RLqSoK4OC3UoS1Yl5vv4Bf3QYQsIRNNXbMooFfDQorHVH7y8JhWqH-I2sZOFzLBHC21yBN0stLexJdyfYtsZHWhQ231WnjpsPkv7MVej2idqoEvbus-JMH6ZIxcfeFlV041xl", width: 480, height: 270, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104086826847057052102\">The Ritz-Carlton, Osaka</a>"] },
            { photoReference: "AWCwydi94CAd3Sbvf2Ds3VRAT_2FAsKVZHn-NZeLcgqxZ_z0SWe7NsHLbEe3cKjg0G15ivP-YYPn9dVhgJ0Klji8m73lo0wvaSzFyMHBNgcbLxmbgacfCVsr4FEwmyjJWtV9TryJa_LZqBv5mfgTizwdAPmcudloQ3VvNFqBFW9tuspsniTQjAMd5gvYs31cRxb9i_bSQw1hX91YhF3XZbod-kqSIFB6FaCSNW7c5z5r61lf--bVLG0Nk8P9MqEzNQF1SZ41Waci3lgDwEd80GswVwaX3Ctwmgfs6lsW9UryBiDFse9EIXE6a5otg0OFqffhIvU3zNYNq0lhTJXvwU9hmGTtEmOA4OskN0OwA4-y4AQcVfKgSwzud7irdd-Epf1PoTWkduSkHgbxvXYBYl32ABgMO5NcdoPwJxClKEqmSXymRSdf", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105501211946808244963\">Iūnius</a>"] },
            { photoReference: "AWCwydiJm67aVd6sHGHTeY9PsA2AvdS2bd0nnnUtdGIjX_TIugCjFbkA0ujVDiavMz9WL2I994R0jEG1BCtvg44zN2cSd2hmdgsY8wAEEaYJ9_ylWW05gT5WrPi5RzhqVcputgc7U-uwdFH-ECOcV3xv-2tZLIuc_FN9gef8DSC1TP4sK-mDjI-siG8dCxDRCQUX-2rI9l9qBKLTu0_ekX3H56FC1W8vbttTHZ0oq_PSQ7v_ysaR0-Jz8EMOyC4FL3ZqIE1Aiskh5BYgJzC1rSc4l6yTNRuZZZIjmziY6Ns_lnWyun28c1WtAkrVWwUt7cusdTmHn93KMSwHn89WgyZrCGb0hilo4evUwOuLymyrrZQNsC-O14xqrDPOmTA9EktfV7PrCaPR1kI2iQXGVvsy9da1u8x-Ag0zzpultA628t90oIk", width: 900, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112328851743695049981\">TOMMY LEE</a>"] },
            { photoReference: "AWCwydi-ZDAzJnzNP6kl_IKD7wtimzAauwoqbitTiLbsu01ea9p1UkL_Zd34czLAm0TOJw14k3PPr2IrnerdjkLZopKWgCLVsFzXPOFgwLetWhMwnR686o-Ck71EUuTwUk7nAbyq6ju1suoKhSN6lfz9D8XA56CB2Xpv4qHRlhZ04lU-0BbnmHb5IGlydMW-nyZnuqjz8-twMBKuvz77rydjfTpdAjOb4QTEsOQWOVlvxXl_Q05euyv6fkA1tweCOfZGGaQOMY4CZBghbAMP-fE0A6LDPq1Q1p201d3XLPa6HO_1eM0fru6Qn8l7eCsS-mviFgSNhhqsqsst9kya_I_8BPzdlvqz6okPfFYwsmC1MuFcF-OPlacdPfrYqewjlv0iHidJb6KESz-EUDte6qqcT_D0d-FruqlVifSmLsTaqaJy_gQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107846206827975765182\">北出幸代</a>"] },
            { photoReference: "AWCwydhe0XoOhsMuW6KR5TBi3IXsDY-za1vaqkbZuqSu4NjO3xT-qXbaclSzpGCFg1Rrn4SCZaXsTx1YX1lK2IlZ1oQ1FCiAiUCP5QZcMAUm0wxFyEx_qDneqhQD5t_-nt9Y_9_-UeKaU9-vEr3V9XGnafQrLcfIStxyxAIJuoMo04lQ9uvzIgltgueaYmy7TNDwTSScmZUf5iHM2u5ZCQ0edbaqnjO9zkzTzFx4NqoWn4eMR_8Nr4ttYAHgaE9F-_t4bkQsPqGD_aA-zenYJjiYJW6W7Y1qx-P33LgpWT7Kv-43Gu9JBsZG5Z_1EEPN9BfO5U1QE790tE0xBy7HTvtlEgDNXI_Cq6_ESBC557d5c4PF9ZPhgwlf4T9o3y9NM6hh-RRZy9bxWrHcSgAKrW_DNCFZEOQ8oeGDDlAIpICWy-gCBrHB", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107620560744219648554\">尾崎弥生</a>"] }
        ],
        summary: "우메다 권역의 클래식 럭셔리 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["우메다 권역의 클래식 럭셔리 호텔입니다.", "평점 4.4", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-5-25 Umeda, Kita Ward, Osaka, 530-0001 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.ritzcarlton.com/en/hotels/osarz-the-ritz-carlton-osaka/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12999871427497016376", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%B8%A0%EC%B9%BC%ED%8A%BC+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "세인트 레지스 오사카": {
        photos: ["/images/osaka/info/accommodations/st-regis-osaka.jpg"],
        placeId: "ChIJEcBu5h3nAGARa1T7QiewwjM",
        placePhotos: [
            { photoReference: "AWCwydjXxUebY80UM5ejzYXhsa2j_cBSpzDXNYOlrhbli2wMMInjo1-iSOFx2e30HvhCmUPy-4u-dfjCwmTWfBc1ypxu7sMyAuFWWSWo6JRffjwcACtSUJXvdoGkGwA4v8blMurTf17i0F9yzjmp7YkZpR1hXaackmGIaBxEMBQgpsN0To_yE4h1zxt2GFoHvZ25MGQhuy6S8dvbYnaPghpAPA0FYC1NyfIww4NADe7rFzhx_15rBcde9kbqEtVcE3qCBTkai5_iSnWG1pGXL5KY_Dc5_rta5IgQNWKMbr8nzfTKo9FrwD3Gh-2FyzEv6U79FU6i98xcLnerocbp2auCfgbBXfYyA0F9UPgD9IP7NSx96Ib30G8Ji7W6g6wP7m4xupmg5s0sj7D07odh71_pdTCUXjS3dTwzCGhFB9OmXxVNaAsp1ItKwyzrlS63VQYH", width: 480, height: 320, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117997183480996442802\">The St. Regis Osaka</a>"] },
            { photoReference: "AWCwydhlIWpZrD9ENttBl7Jxv-B-WVCA734q0ztSVlh7yA4kC29vHYi7Bi8om46_rxKfHYnXvC9hQKpbVI5eRFkjKB9tYn94-kce95zH3F9B8RcX8H5rWs4c9_6dDz-uzX19zeKk7BryowozcTe5d9peQW7OcGl36Z0JjC9OKhnjYZcIDEDaTuDkklgxzdlI55OUZ1Z2UCwD5cbPptFfHhaLxA55JaWqeVPwDtYf285frb9ikz1C8hDHxKJze8bhQtDoZmviu2mOm3JUXoGJklsU5KYXIGDB72Evv2ZWwya967zxecqDFaVzPWocURRUqEBMhqab2lxb1ffZqJ1zxD3Zub7aIS37w4P5MQ4mpz-d7niyiWc9l5kn5NeiijK9prkoEIPgiXGj_IfE_oLox9UI8JfIlGPN_Pq4YpZPtFT5O-XCAqfTimPVleSdCb7S7hRB", width: 480, height: 320, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117997183480996442802\">The St. Regis Osaka</a>"] },
            { photoReference: "AWCwydjmJISmMllN-lUuwG3Hx-pb6T5jLWCkgeK2MnJ6ujc5zwseMeMKYaskd09MA7si0w2wC8GRqsNEHl6cwUATCnag1KU-ip1JdwHQiys8RsLAdrf_i_PqWXhOv6FflT9PUIvPORCqypHWrcPVJ-JbxGhMwqvaAHl7I2kjXaExdNbya8HvXhiDdMzzr47N-7H4RHVzIgEJcCnJZVoUIPQSJx0_g4ZR8ZoGdiqgJ0hqdgCoiQNt4YmcdmOEtgtdBHtzDaTjbAO-XF0WlXcNYjxNfgITatwEyt4kBugh3-hto9px5QQh_mPu-s6mQtlrFhB757v9t4UHTesxEMUQY8iVgNqmqZtgAvv3vD-cAHRAEp2DjgkcoLXZDkJaMTLoqFFqC1CsOm__dCHu8rEWcVbt6mBgXTOeb75wWfT2w0yRbvgriu2D", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107398849700363299941\">Andrew Alcantara</a>"] },
            { photoReference: "AWCwydjlSH0wE9WXbowYqSibuPH0Z1ic4_j0GclpmzvpbrVbxluKaD46bgbmnKaOlcwOJDtnW3DkClo28eoGhEsZUgdG5szuiXS6JU5jiVWdC0nS67ncbfm2qUQxznHe6JpMa3lBGiPoIgC1gQt4uNzpvURCTz9xVeStS17WUtKeq0XRCwAsxhH6aoswxmFZspxkS6ANNO24DYNFNXeMEsf-uxfBriSl5sEUWpnDj8ERtEYqAqTqQYcM6tlmdO3jly9CwXaTokOx2Km5RzI4LwBjPN5GE5wFuLydGWMGbRLKf0_f9rTqQ98uXqy7MnFsAnbWxaWgGevuiNz0FNZwc98JqgxhyMp6sV6MHq_gmcYv3eJDtVanLM35TVmZQzjDxrEUPL0gi3lVP52voHk5EZQ617Tkffm5cnYjRFafp1OESbEouCh7zkU2oMjxQxfA3w-m", width: 480, height: 320, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117997183480996442802\">The St. Regis Osaka</a>"] },
            { photoReference: "AWCwydi5kqQIOU-j-F2B2lRnDJyCNGnzL87qDEMVy-3Fu5g9VVytFUfSuFQ7ouMkbKVWDTBsXKoE9pcIKOEyy5XbfkuF61ptgohe-wYaVGYS369nuBUcwOoGAw6_2murYZ5a10p1FZo5obRlEFrJFtBl6dshc-EmXviO74rlwXL-KOirRzVAaH_V99xquamYRjA1M1sa7QvDHV0THL927BYHBxDXd4kNdNEN_Pur_agarRP8Bbt1nZHptuFUXhmAsijHrRtVrN5Ap1KJB0ZskAtWI8a0anEWVCeVtgGmjjUTaAL1sCllWidyuGAu5FLpTNzRTaj6QqdRiOyhYAO_hNNrnJ1Awq92amN4FIMZLDpVf7fDGc3eloSaUUo07xa9fswQv5QtCt-2QzS-v5iIpvMeTu0Ma665frZ8k1GYE4RT4YayvWV61Kb-kw9dpqQVr24u", width: 480, height: 320, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117997183480996442802\">The St. Regis Osaka</a>"] }
        ],
        summary: "혼마치 중심에 위치해 난바와 우메다 양쪽으로 이동하기 좋은 고급 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["품격 있는 서비스", "난바·우메다 접근성 균형"],
        tips: ["주변이 비즈니스 지구라 밤에는 조용합니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-chōme-6-12 Honmachi, Chuo Ward, Osaka, 541-0053 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/osaxr-the-st-regis-osaka/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3729737124090172523", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%B8%EC%9D%B8%ED%8A%B8+%EB%A0%88%EC%A7%80%EC%8A%A4+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "인터컨티넨탈 오사카": {
        photos: ["/images/osaka/info/accommodations/intercontinental-hotel-osaka.jpg"],
        placeId: "ChIJ30LI_YvmAGARwsgnmlv_H_4",
        placePhotos: [
            { photoReference: "AWCwydj9Y56h7E-yoY2KL68fwjH93A-0SQvi66hCvZioALY2VKCW8jyage7uB2yS_JztYvRRx1jJIanNqTEoWVg1uaT6Y3NCpULce8GeK4mTkip58BwFNlGmTI2l6cU50_Dm9W7b0vBmSrhmCrqvWgAOUliHIw_JRF-M78zXckXt0nekGYjBz4b4SMH96uqsDqLWYtqwZSrOpHCtoejkr_59cGw5s0CmMph3HCUyP00-euA3QMdB77TlpFP6T161RMBFvweuKLixLdeyaY2va6uvsrUh783ZFU_L8Ko5NglrVkJREgA0iECpRNheeoiwiM2T5PNMTUONh6v0M9fj0pertw5Zi80TCpK-Ok1X2N05RiqR6fJb3XJxGU3zyAxPb8p7kOoewAq_5LvvGOndM_EBbWrEPYLlXh01ASTTeTPHRXHchAk", width: 1200, height: 766, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102026578662995961612\">InterContinental Osaka by IHG</a>"] },
            { photoReference: "AWCwydgTtYjMD38vedC35KheQJg0A7Zbqo1mQra5zXmPqtN6FNAJ9HpJH0MBJT-7IuW6bHlB4eWKtm-UAzyUO5j0z8BFUBraPQ1bnvuRPuv6ftBznJP03M0by45amCH-dj6Zlobgct61kwCUZ1ejWlmzz1uLqsYXI5JmDHYb9N5WYBGks83asydwp4jtuAkJ0fdD4u8pigxMBczBFMofca5hbxU7vTMyxVoNOX059wlr4Yf2CvYmvF2Ecy8L_Ni_gqDyFzFEQkpI93EhkQhr2OVgxV71_Sz00Q_mOK_zpegS_Y_Cr5rSaLc3dk1Xc7_u16JqzjeLDXkeSmWHGN6jSI1gN-UqDEv0Pz6Ov9ibtUAX_iBBauP-tcQPTt8h0frblf-qFZV6V3O_ohY14JlIwSv8PYaq2GeHZxLqiNOHzA", width: 2048, height: 1535, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102026578662995961612\">InterContinental Osaka by IHG</a>"] },
            { photoReference: "AWCwydiZdXni69a0oZW7_hbwpxo87-Wmdhsed36csJgQOblr5MAFG6WLcBuZ7e5ctkAqy7qt9a1PZkCKeqnw2JwPoxtjMlEvmKjd20n1XztrJpkIoCED399z19bR-ZrSxJYL1Q_47Mj1b5bcj7xxyMS4ebIB6OmuwVUXzjZ5ujAz4JaJzZO7_1IzeKVYgY8cqbveDqgL_kgOeRcAEfde4buR9hCsud0GH3yPVwB30ojW-H33fulXV4_QA0ZvIaNF2lgYR8_ICuhJSOQk2PpuOcLmk0XJDoxHdo8kP1qAmTFj6qZVzrTUdbLOoNMVxqROoBJRqS3bj539-mn8vZH0bLRrLXU9810x-ckw4KDOGtOHE4IvzkfDFoGbWxm_CW0k9fW01TtOF9wucvXUREN4t_ELK_vAh1lHWfjIJK_OYzDikhyXModS", width: 1478, height: 1108, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112473322940475903863\">Kayo Yamada</a>"] },
            { photoReference: "AWCwydhtXjF2kvXV2-Xe1ugjWXldHbUdbm2lgR5571gh-XXCb2kDvQbAl94hRcw2wf0rW4M6TyASJOU_vdKyN7NCA6m_UX_pPEAoGbDIWpYOxOcWhI4MBYW8FYwU5gXXbBku2puWZ1UYY8rwctqd1Dwpib0UzDA_NKJ5MYIxU0XNMiopIh6kQVyUzL1m4CgmqaD2vWlsYy5Jl1qXcSPlRt69JCMz984OEhHawkSs1Ce4ipWE9DUON6kTPfxGS8HWe5lKU86rT5vUFgueNsUbedYyiWmE7xKQQfgYti0XXxvwUIa3N13RFpAB4CEgGAj39FcPLztuZqhTEahfQgjZfvzGBYGVnOwvukqULFM4idZCIeqXzN7BqnBeHzS8KcjjRBnrzrLEZvde6Z31t7_LnY52AO49nVQFPyVv0awBBj2qfGweIQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100008747342604990967\">Super Tony</a>"] },
            { photoReference: "AWCwydgVdhhPAjay1RS6_zpn9zPi8pnQ1d-Hx5qq9r4iy-pzF2Ror-0z7KGdvclCncGr-YSSIM7INak15VSim1UkMQsUxrqwCUyMcztkH4p7kz8wTAAGb-lyAxitjs5yGPA4bGS5D22_dgFcs2vBRsKoWTdkHRmdeBTBS6WkBtOLCsZio6MKD-9mmL5sNQL6oIYWWv3eVQmSgKRSKiz_30lMNfsW2yRZX82Oi_ZOkQQkIEp4yZH9eYM-KdawfredWDupcpjxu7XNS9pVEzdqnMAy3V1hIrnqUbHeQbuqAytC7o2GiSGX-bxiLetckMIUYc-qEgxOdMsNrOnTqyWXJmPc29bsdO4G5xq78N7bAu0y__2y_hmUmeYWQXDmfWaamRYemsrNjoImF7CqmGELekdcD_T1ZyrdiOuRMqBC1MsR8qUweA", width: 2048, height: 1152, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102026578662995961612\">InterContinental Osaka by IHG</a>"] }
        ],
        summary: "그랜드 프론트와 연결되어 쇼핑과 미식을 즐기기 최적인 우메다 럭셔리 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["그랜드 프론트 직결", "우메다 대표 럭셔리 숙소"],
        tips: ["쇼핑몰이 바로 옆이라 비 오는 날에도 이동이 편해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-3-60 Ōfukachō, Kita Ward, Osaka, 530-0011 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18311635378805131458", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B8%ED%84%B0%EC%BB%A8%ED%8B%B0%EB%84%A8%ED%83%88+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 한큐 레스파이어 오사카": {
        photos: ["/images/osaka/info/accommodations/hotel-hankyu-respire-osaka.jpg"],
        placeId: "ChIJK58ZLmHnAGARzi96ugXQHz8",
        placePhotos: [
            { photoReference: "AWCwydjcvzI5n88g2PbGFppAecWenERsCh-dHGQXZ1_NfyPdcWdx2AE0tleZiN59KKCKoyaMATbZRf3H1Y6uU2Ul6K4VcFvK_6IaYH2GFeBxSJbiIktCpgr4N8F8vWIVhostuyhPE2Ar4s0t5lSZPyUxhI-RlbOQVlrdbVcoXKEAj7uEWMCG56oBcOLXhN_IBV9qrxzwgMcl2uzyP7v7SAhVqbYtrisRxdS2nR3hmzxlB52Vs8oX4I8Y0NFMis0-Bobshw2avKfHwMDuBMh-R6PfFPRVDwaIWSswfv7Uh6xiCkZ_4s-xbb3Cw174xzum6GKWMD0J84K09qdq9R8Okmnf1v5oxZJoTzyNg76z5GOYt6eyp5bY7pXfaZEMENvUHUuNUzJoOtbKionTssWFXeHeT1zemWcUXdTeQWoFm3tTur0nNQ", width: 3601, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106422257025221942935\">ホテル阪急レスパイア大阪</a>"] },
            { photoReference: "AWCwydhWPlpzKu09mJyYXi7XbwrFAFNZ5pFMk--nlOZzoPalNXiNoHx-8zS9VaD5M_1WCYoXGa5b_WDcqC0_mH5tqL3N6eFseiYwXVR6HtPqa26WXukSps6A1801fRSLrTEYm2t5FrelS95zyLAOXVkqKzip1xKfB27ElT-7nw8iPuy6ywwXP_iwkhvVNCXCaYbWc4u_U3efdv_RujL4a_k37-odyhu9GWyGoIaQCrbwriVXU28UB6TJkb1PcO03ihoCyS34b6XNFATXEoZ6KbWzuqWv6ctlAOTq5IBTMwS_JbW2V0XStnkTDb6uavBTAGwP4c5vlUwAlu6kH1AQQsJFBwqX32ulIAFSFTRpZPL7LQ-z9ao8Wl4F9ZZd1yANtJ87SUl3fcNkolCeE2VyBTgpX9MGcSaK7lSn9MvdzPW_VoE", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106422257025221942935\">ホテル阪急レスパイア大阪</a>"] },
            { photoReference: "AWCwydhbgOB_VQtusePleDSXIEs1dIX9P_nPYVckkhJGPmBMeHUyCvGvfvy93p7QhC8ny_EgrjXG_u2Jx19H0QKAXAXTtbUYysx5QsvRB7tjCBdT3mhUIn1UXYTwb9k4FXGOomdKpxOUN0lM7YhZZ_yYb98DRDn-vAhLraXsAhGXFCrSdcJDhpkwzuBvEm3KlT6orlyBTwIiq95RsNVgVcnMTNMwuAMEaFwJyDHQDSOWzmusijD126yMCQgvPCTroQ4nOkvCnchpf3Q4K5YlloPrqp9L3BNRyjZNPGt3q3eIPgx9iCjpnxPoyoXQppuir7u5SVtuo5vCi0yeHoIGoYjzKCHvxTQCc-tK7cN1ShWRyIBknCBzlgP-tzVHcltFNgClHzpjjdC-FLQ_8oeOKHSpAaqLxhBNtxE9SyLNK2P6qFczDg", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103635817965811684896\">iwan iwan</a>"] },
            { photoReference: "AWCwydh_yD7sJg-Y5eIHaw6xQERXyGh6es-n4NIURHneX7sb5JaMvttlUo3STedWmMLt1j6__YoWlHP21gmOhqhxBzUyWk5A05xkHxERuG95GFZ_-TYi2FyogtB6OwoqpB9UflUjXq0EeP5rV_5Par7-iaNchkul6ODEv1BicjtEtMFgeh0RlLxy-QL12XmCZxDlytOK-Ac8X6GoH2xOZKj2uscSOSXcq0sSgp558FEfRhTc9X3SiUdZVoE81IpaSGae7lSNVyd4Z3JYMvR-lZFkKcSlf5MqXn9fV1RcRmhIRCt-sI4J7cTKn8phlhhtAttKcgZT2zh218e5U2y9c96oKeooaF8kBVnLPBwKSjKxumrzanlZGRuN4p3eKIXJiR4kmXl77ctGj--CJbR1tsvKMoSd5Khc-13PcMGNU1PaP3mXAA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116887973096497242776\">Emilie Yeo</a>"] },
            { photoReference: "AWCwydjOQnKJfsY0MhPEbjzib0J9QR_F2UWalSbwb1n3zkJj6tiJUmIlzSq0HwkyvUv1D4PKA3SXq5JhsQiG6JzvECSavjgElPcHgukbiNC59u4QkA3wpftcnkuWO-7wIapBLlkTODMVJf2iYQnavqNaOGcau4sGGurpysT0Hfmb5FrYoDZWCIRyePFeHHog0_rUx1N4Qkkf-yexK5J6aONrUEYwKpCtBUcoJbSmFu5ClKlhXiEAuKs5zI54wrV5MeOrMEjC2h9zz0VSsDdYSg8bGPm9kVZOEfO2YAK6F-KTd5L8Qdd9FpR4AfYbHYdX-t_eS0zlX1outPOAKpwpK3VYDe81_xw38TqdZR6QsdpzjaITbQGM-wu4stGnq9m2TZHAoZry1JvqfrEBmTq0oQIjG-lK7CLL1_VFs43IlUZJISKhYXEF", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106422257025221942935\">ホテル阪急レスパイア大阪</a>"] }
        ],
        summary: "우메다역과 쇼핑몰 접근성이 압도적으로 좋아 여행객에게 편리한 대형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["우메다역 초근접", "쇼핑몰 연결로 극대화된 편의성"],
        tips: ["쇼핑 후 짐을 바로 두러 오기 정말 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1-1 Ōfukachō, Kita Ward, Osaka, 530-0011 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.hankyu-hotel.com/hotel/respire/osaka?utm_source=googlemybusiness&utm_medium=organic", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4548582871689473998", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%ED%95%9C%ED%81%90+%EB%A0%88%EC%8A%A4%ED%8C%8C%EC%9D%B4%EC%96%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 그란비아 오사카": {
        photos: ["/images/osaka/info/accommodations/hotel-granvia-osaka.jpg"],
        placeId: "ChIJy1pGdo3mAGARjbQgwjt3bl4",
        placePhotos: [
            { photoReference: "AWCwydiImRO9lwB3DQ0MSKS7fcsr4IPohi9RQ4sDwEjCp_yFLJqk--MI7OtY_2TCaju-v1nOPK4jeaSLfmbGpoE6GyZjocuHB-R8-0RZ4OPyP8pnfw9fIHb4KBnYg-MNbvxpXkdgaoUzcgOwYz7W626JSzjr-I-wPJl37jckK2AuG-djA0tk1whG9KIJtyUqF5Vx3F3kUIzDAEZP7tmYpVM5U73yEHhAdAISw6-QFfsHV85BXJUCtmdhNo7G_ZPjNPSKCXhm-G1BiYmRcVXIl4JZ9wbWK3HRGE3C82FzE8pDh0HcQr1xSTSQcMrDc6zmm2Vo8-hc1fWf_gJvvXSVBUvubuHz2oW9_frig3iSGGYl8LO_BPy6x0ir3SDECHOgsxZd8VlWekF6iWT5f36qUCjSmqyrkEg56gM6v-3wbTEPDlLnZQ", width: 2480, height: 1621, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111385423110307524028\">ホテルグランヴィア大阪</a>"] },
            { photoReference: "AWCwydg3IdegQ-PdB9-8K-uAo81GsILmEzY0m92mlFYyfkGHfpzjbTpTLBXr2kInd5iJaw3bubOO-MgNNUf-XwsmcesIBU5437RJMHtiRjTH3m8KDk-HfNpTifBaVtkEa9nMxX4lABGLp7M2C1Qazt0XdJ4MBHLvOQaWs-VXaOwHmK6fvtIevN1nnrwWVvJLo0OieDC10UK053m0tdcIwUrFjzj131rCWQ0hFUyJt3M6WKNalBce-3W-ipL4GeH4DUP2EIYj1POVhlEHQPcD3oY7shAujIRQ2C1H8ltfBQPcZIs4ty5Qb0Qooe_gXhDdrwxULz2q1xiHQlRfeMcEQgFopK-8k_5nS-T0MZSpGQoAu6BCiKLix7_P8K8X5FgyubChRUeGW23O6cNpLYhY6BqMu3Yj0wHW5kGqrrxWmok0DD4", width: 4036, height: 2748, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111385423110307524028\">ホテルグランヴィア大阪</a>"] },
            { photoReference: "AWCwydgh_3xn0BS3ojh3-ytlJhxulk3EO8hvxlphC9vtHInbOn2aaWHfQBeWShB9jBdqa2P8oK6Vy1Cgqpzh1IAwVLXVVQH0eloL-1haeYZDeqnS0xeFK5fFP7Uxta27k7vRUBjqf_xalhFArG8afJNw5wD-wX5KF1F_UTJKgm-jKp9twMuuyDV36hVOi0yGVCWJY7A7wxAnxPS99kJE6ik38iFTCbLSkW7rM06MwWrlBikggQeomWGS4gG7GP303-Z_ZrVVQH1BLZCECnomnBR4U1QteemX1-LjipupYywrgTvpDJQ3FIhfK4VgB1M1XRl9RyeQIxNtaW5TVfc8H30HYoEt44sBbyP4QgYMafCxZj5_n9Rr1TZNuKbUPExerhOC0UmoqtcNgr2lIBLFE3_VSAou5pJQn5pizAzTv9qAPivr4Xvf", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102744311654008392327\">asami m.</a>"] },
            { photoReference: "AWCwydgjEfi84T8nYiYCFCZS8ClKj0DLiCYzY7CJmaw8ew1v5OHl8Mjls66HM43eWnW73JYyVK8RlbMsAGpUWV4kWFFbYQnDfSu-pYXQ3Nh63Hcr217hSEJCd1ouuMWxYprbp7pI8uObBVvlleQm7gMRKfUVmqtzWMLTvuLO7jQ7pofrlYOYuHjRMk2IFLQQaKDKFoYnWoVoiNL_z-RJUAz-AMqiY5IdK1iJeOAUWDjroKnEPvSBuyPe9zK_JZvjSUpi00ER21GsFKy2OXQvxvr6p1Mk2IX9HfJiH5MAJEdWP020WBrCt_yfoEwm_cTF7a7_WIUoGud1lEUEGqtjW06Hm4Vq8pj2kJywTtquz9tIs52ZlWKWOnnYaB5oedWPx3iY6e_6thHJGCe8LHz8PnGkdRY-MVwKtRgoMO_QzseuP4o", width: 2500, height: 1667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111385423110307524028\">ホテルグランヴィア大阪</a>"] },
            { photoReference: "AWCwydi0arJrMYuJeGCwr0tUC08839u37_tBUfGFifA5tD4vXZXyyg4BdQXqfWxEXSTpPCusWDwr2k4TXJwXgiyvJhumeBmbrazmj--joPIPk4UWLjlskIlpJH1NKv1SoTE3lu2_CYEKoHniVnStDGjjWNpkCyS7a94osbq7uCyFcRYFlCFKkmt2RAZQV7pBnpNK7jzdZ6bz39vYuMEK7fMGFTzhT_rU2_SfPeT3P9SPG1VkFtNSK2CKZOc5GZBSDNu0dLTdMxuWFCBpBC5kjSW3yYWSlODrL4MtWvigrcbXxMES8CSmHxEEzB9PwmJLoB6x04SG-b5Atsr4I13QX_3LnM2RiP8uGS0s8ZKH_7L6C2CiSlnSJlU8f3vR4cUbjs4yz3vQf43VIRVKjUth6iymNV9sm4vug8JfI9fLqL-D2HbMDAH9", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111385423110307524028\">ホテルグランヴィア大阪</a>"] }
        ],
        summary: "JR 오사카역과 바로 연결되어 이동이 정말 편리한 교통 최적화 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["오사카역 직결로 비 오는 날에도 걱정 없는 동선", "교통의 중심지라 근교 여행 가기 최고"],
        tips: ["신칸센이나 JR 이용 계획이 있다면 무조건 여기 추천"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-chōme-1-1 Umeda, Kita Ward, Osaka, 530-0001 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.granvia-osaka.jp/?utm_source=google&utm_medium=my_business&utm_campaign=hgo", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6804507185547097229", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EA%B7%B8%EB%9E%80%EB%B9%84%EC%95%84+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스위소텔 난카이 오사카": {
        photos: ["/images/osaka/info/accommodations/swissotel-nankai-osaka.jpg"],
        placeId: "ChIJ4-pFiGvnAGARPcEaV-HE5kc",
        placePhotos: [
            { photoReference: "AWCwydgh-3jFWnoO4-eT2apcFaGdrR1UCeiIrtgMyDnGZsx3zbNGdNafBSEVdn3HiCmj8Y2YcJkUeXoW8eQX9pfnAJCY-DmZD832QNQcPCKNsV4rhT2C4hHaM2W-XrauOc74YEVpJfxDhJinb5KlPQ7sY6sYeWpcSes3LzMWj8RBi3sy0wMoeacZEyEdffEWw8_47CKITdbdO6_peq3XyEMGYxF_o3pVLSM7l6eol0htUN5MTEDb-qJaeltwP9sy1oPePYFR6jhmvTdp0VPkDeovWHz8wywuwjndDW37OTJk4EhWJQekv1_LQczCLrSo4e6oVi_V_7tK6K1azog7RenxB5UNNbeuWJFiw1Rv3wVsu_sSUXgVBnh8-PhNIjHwzAgWRInT16valSokxSHgaFaeEq2OCjyQDYMygF1r6lmILSLnTw", width: 2118, height: 1191, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112468311758007516471\">スイスホテル南海大阪</a>"] },
            { photoReference: "AWCwydgI88y5uAOgGRgeSLyBRH3Ri8jCvNChFZl_z4oNPcUNIN06kuA7rpIsdOUsHRoSx-QumlXqmCs82-_mjnOSUYtlXarprJ0CD6SuOzmKL3GEYnnNrOSTzZ-rL6VT23ArvNnozIwWX84AUXS9UAq_MWmd7Wx5-y4NOsJ9bB7Ju7ZFWOsorgQQWdVaor9km_3HEAL6d_LGJyyRNayE04Lkzv2SrCJM2LS1UAO--jhqPwq7v8fcFZdXVkkrYhjHvzSxtJ2h6tgdOv650phkfkWqBg0cRUnJ1HcPuA5qngJWgJGsvVKs7vWFMGwbsXmwFpYQP8ao4dOW9SY-4-fRxWL0UIKgBa47n_28IvMYEvNaXYjqnxyqH9T7luEVufkSzG_JHSQfVPBc53biMRVh8UtSc_eHKUwHeWN8rAxB6wfTbfoWBYrY", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112468311758007516471\">スイスホテル南海大阪</a>"] },
            { photoReference: "AWCwydgagg9RX_jWVuJsAcVje_oYBXb7ZGR5LMZE0TqLf8GY4hBne4qolVqbzazaABriZxUWlpAF3OMlxI0AQU49zweitcl26AwFarUSZtic7Yt4_ftSL9PTTIaCYnPAhL-79SXJI-KFe4eJbYb2VIr7SUG7czZ9YOqIMXg6BbQHbNf8znRGf6eL0hYe9iHghjp1qhG6EiOU7xVAMD5CNQYgzshytyXD6HLqUWZprQcoBX2w_Imt-q7oNm1jdUrx4KEGrHQfBMLQoBcQkNeDgFU1Jk3ktjMKi-oeljYwb5Ex1VgdtzIpixnWkksVv_mfLteVFqKqLSwmcmQPS2CJZ-5b-7khJ388N3QSWS6EJvLH69brkGXGGVFdsTqh4yYKzmlvxawl-BC5KsNxlGCHhI_idVUxORAh_D7J5cLEbfEWIr3CPQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106766012076954590832\">Jiri del S.</a>"] },
            { photoReference: "AWCwydgbHZr8GGelk6GSc7Ctlkd0AFEqy0TAqJJz0MmTT85BsvcT2EnAVdO50ONmZtmZpgCvnyfWNhnO-7H0SCvM_NXhQZSjnwdz78_TnnZ-6vYarde0gS-k2wIY_QjPIJKT_TSP91lc36IjLLEA7ctm-u2_GYhwX-h7qLRrBwOkIMkl0QUQUCocjfbo8kwBToZqg3p5UMEt3xXkTvpwBTPLSn8idbh20htSloQYxIG3wdpf-sWQP3u-p640vZbbaBvppW3gAN1LjkARjdoZYPDFQBBxf3X7xrIa1tqOtUtuGJYdcAEDxbvTQk1Ps3prYym_GCOosUdYlepWz2Do64d4sgdG8w6N3cZq_JqBAlIStE8oSXhpds4vVnkjav3E5g3XYkCp4yE3GoQcaIEMYA00Ud6XY1y92bc8S6GxPUNMAt44CF5u8eX2p5FGapgCqDzM", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112468311758007516471\">スイスホテル南海大阪</a>"] },
            { photoReference: "AWCwydibG5GbB8MEmrtgS3U0hEYdKsHbSL0ldZ9EEOeoVUarz573ZGcvmhHPrsR3X1uW3eWL3IU_Hb1I9ckq1aSyVvdCUpOWhs9ofHOnLTi9UmWFwiEUN0p_GWn-XdH6blqIWPM4drPX_zfcUqG0Y-C7v-B7QJh0xzrLlgJgqntOhDgNkvbK7dbRIDziXvLVRQcqKMY_Xb53aQHX06y8zRBOpKD_rYKEjXwAKGc8BTHd6Jgda2vmu0RArk5QCePNj1bGSIRZkyCZirE0NvhbuzqCscdVfELeNPlFNQ7Le4gXQYtX4acYjAne38lNfY-2k1fQ1nQs6sTPlqfALHq-pwZOWnCdZrq7iJ5I7EWbaAdCDtcouYWEFDYNO-w66c1Piot4cI0_dkIAopEwEFijTltjykPIqWo6ZQskqIrRFyGNgtVv0KXz", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112468311758007516471\">スイスホテル南海大阪</a>"] }
        ],
        summary: "난바역과 직결되어 공항 이동과 시내 관광 모두 잡은 완벽한 위치의 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["난카이 난바역 바로 위라 라피트 이용이 매우 편리함", "도톤보리 등 주요 명소 도보 이동 가능"],
        tips: ["공항철도 이용객이나 난바 중심가 숙소를 찾는 분들께 강추"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "5-chōme-1-60 Namba, Chuo Ward, Osaka, 542-0076 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.swissotel.com/hotels/nankai-osaka/?goto=fiche_hotel&code_hotel=A5C3&merchantid=seo-maps-JP-A5C3&sourceid=aw-cen&utm_medium=seo%20maps&utm_source=google%20Maps&utm_campaign=seo%20maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5181044893444391229", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%9C%84%EC%86%8C%ED%85%94+%EB%82%9C%EC%B9%B4%EC%9D%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "센타라 그랜드 호텔 오사카": {
        photos: ["/images/osaka/info/accommodations/centara-grand-hotel-osaka.jpg"],
        placeId: "ChIJy29XSX3nAGARbCUz-2-lpJU",
        placePhotos: [
            { photoReference: "AWCwydiyyKOG78CAEravwWJ2O0dI20vCS8HRqpEsdo5AQI0BI9KIUVIwrOUIJHwo99a-FePA5gIoXr_wQBbM4NhBbIEVlXcbXKIa7-7lAPOnT_fHwNmc1nn839lIZJerecnDqOH1754PvCgjpPd11gj8ubpZ3WQO5O8fta0hTWn808Yc8MXahxVh9oS82d1vm6Yo90ZH_q8EObZCFm6TT0NHHYbM8qTlb6-3XWtb_kZjHQajwTMw76vzojTpxe66vilW2KE5bLWVnITPdQcAeMOFpnYDZa-7x5_dow0UOSz5w3IQ7a0fl55G69KFdA8SJ_TDsXfrt2wlGpDqTq3rXjxOVgcjrkKARsV2Ad3aA-F0DzeAmiKFlrtv-X6B2GBpwJ5O44RuREYVJVU6QgQOEbFtteaRP5oZRYNI3dJgyUmkJ1w3nw", width: 3302, height: 2237, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115970823975161519186\">Centara Grand Hotel Osaka</a>"] },
            { photoReference: "AWCwydgbuqM0qSBHS8-aCxQC-62wLg_lK6vRdnUG_1W_EuJU4_E4YcLMtDn9H2rCFVQ2F4VeocMiCkDYAg0LX_d7YJQj-b8M0USrkK9Gb8xDsnwhrJJr-NMOrL7IoMLzwete9mp4-W2qONWWpPfGzEkQy6NhrSzWjAMNaOD0b5v5Jo-jKnTZXZLNQtJvoqkXI3rHuAPk4rhIJSvfrN7Wklk2J4lxxusC7WyNEFw2w8dPL5Xitju9zXbQuKN0EXk7FT_nQfnYplddeAFB1sDKlsBlRvvC_GSwaBP7g2owNk1urRzvWH9yPiOWerOeiocOBTBb5G4csw5uaPag7YzGgfomSdv4a1RCWC26Dd81ldsvetBCcUrxo-vEp1EuGYHH4r90IkVNq3CYGB1rtcxfIGrkLgLfsKqnNuYkWtN4KRbMSwg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109029564902137519431\">Tote Varisorn</a>"] },
            { photoReference: "AWCwydh2npZhaFRIsL3S6XY4dYZ0Ja8WcYQowyZWQ0SmlTnjXMS71TwdbPOGkpI_g6bauIbnA-UXts6c4_okaZaUqXD6IQgxd8n4ZVTCchDqi4mltm3K3DclLtjeeOdK9Wojd-R7kfuOTl2K2Vd9slDFQ5M9erFJcy8vQli0TR0UnYekveJcox9pwc2SJbw1ahm6FmEundy2plABxaKDAYOQHlOVQ205nDmD3EUhAlU0LWx-TpmmptbA6Gb6luxh5mLSffm9bgqwHd-PD9XuN8GPlYESNyC4S_aYWK8AwOS5v2TI2Kk-WD3he8QYf5YPD71yQYTO4CpTLjTOKKkfdUYW60u9Qvf-mcMuLk3jL8fJB1fuvu5-jKwqtkBlNj5Qmw_0anfnsN6xcLmy1fCAE0UqPnyRHwEC7Z8qBJjxTrbVOco1rlbZoGvHvWyDAQ4_JQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109462887398913055857\">Zhanel M.</a>"] },
            { photoReference: "AWCwydgP7tMbZfx0V9uQqRNP91qinsmxxo5P5AhL4kCi94eTIw-5kSqPjuL3ly4dBs95LKUgHueNGgzGjzCZwa-74HB7qcfdmkNXMnGwRHKisOWnP77xTj1ilWrMOaNGnda34lOpbJQzv553XlPwH0vjfq70mt1BzVCNjYwAEK911cEziBq_qZS18T1pNJcMwZE2mduREAEU_RklpZnJCIF0Hx-pFN3hY4G4ONsIcE9EJ0UBucOsZghCfutViBKCik7JZdTuZ1NfRT-LH-jugKquHHHgPA-o1dzXS6BI46RGn0WiinhBh14LpM-1HVL5xDTTvo1I4vjIO08oSmGYEmujStdBpaGP1AcLCeOpWlroerLavBxsvgP-nPL-ru2cWpXtr8FK1fA60DtuC7b1MasIxrhjGw7sewohJGuKXGhObLKdR_E", width: 3201, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115970823975161519186\">Centara Grand Hotel Osaka</a>"] },
            { photoReference: "AWCwydj5AuIZcSe6DNN_yy8wzEbvTEVMOoIBehFGTq6p6gHHRr56MLLTBiWWElwNBy30RviZzMrEl871k1Hbe9DgwnkSIBwnyZtK7y2GsMghddeShMM3gqoEk2n67PBQ4t6HneeSQTcYcZhNvFJFnR1FOjooS2PPdw_hnXQW1dpGZCsacdD7FX7Yxtf1WuWm_fktgI3W5aaUVVGrBMzxOZTUkKPuCRntzlsj71OXzaUxS84w1tl8jZODfTHo8GPlWJX37S_8Yc3C2WDM065zqxPVRVHtB-wEAOIDRdIMdsSssLGTS8ezUOdA1s_a_fKjScWDum5mhlnt3NwNvIdE24kAUQ8Zf1PlhpsHqC_GlRP1QjSt37q2R2zJJPNcVnJqzzCq99YaxYs_4JkNaHYNXFi-wjPyD2ZmdNi3GRUiF8NEOoge1w", width: 2400, height: 1696, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115970823975161519186\">Centara Grand Hotel Osaka</a>"] }
        ],
        summary: "난바 파크스 인근의 신상급 고층 호텔로 쾌적한 투숙이 가능합니다.",
        updatedAt: "2026-07-13",
        highlights: ["최신 시설을 갖춘 깔끔하고 고급스러운 분위기", "고층 객실에서 즐기는 탁 트인 시티뷰"],
        tips: ["쇼핑과 미식을 동시에 즐기고 싶다면 난바 파크스 근처 이 호텔이 딱이에요"],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-11-50 Nanbanaka, Naniwa Ward, Osaka, 556-0011 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.centarahotelsresorts.com/centaragrand/ja/cgoj", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10782925308206196076", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%BC%ED%83%80%EB%9D%BC+%EA%B7%B8%EB%9E%9C%EB%93%9C+%ED%98%B8%ED%85%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크로스 호텔 오사카": {
        photos: ["/images/osaka/info/accommodations/cross-hotel-osaka.jpg"],
        placeId: "ChIJA0zO7hPnAGARHooEfgZ_MsY",
        placePhotos: [
            { photoReference: "AWCwydg19Wi90-d_k5-hMGeuAkXZTNOtL698mBI9VH6yBerHKYou8Cxf7XCpo2RZDA9S9AT5KfzPqviyENxHKuDyjm809SA5eLQFCsScinJXtANfNUoSNkmWaRkK4bykJnnN5n5nlpozAOz1P-cot67CG4kA42brLgcs1hterq26CYF-ctPAOEusUIqgJBzhbXHjhYxnyQVGZdU0q_4OREqDHiTHyH1nfwwG0yNbrupAGemSJMDT3NjO2QrGBiF323n-RXuhfXPGnwb3YULjzP8f01hyYlOIEMYBuRDS5Z7bzDU5tJpaoIA2lLv0HTipBxV3CsfSVPzDCIiYbpGLguGi9cgx6YGZeQop5roNdmknfdGn53aqGqxPdk1hBayijQK7yhuyn0EMMsbjioziN0i1Ypn_R3UNSf0CdR2xWFtGvSXm9g", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105863984483709549862\">クロスホテル大阪</a>"] },
            { photoReference: "AWCwydhmgnDu5ucwIRTfNslQ9rUE8Z_dqTdY-9VL49WjUDzc20c7Hs4iBwhCKRm4Yu99njbAwkbFIGGb52pBQL7PxitrWIjcvD2a9fkRnRQxHGZEa-EeIAIbEoDR6gP7m6Jy7Cjqx0zam-mGsPWL1U_Y90mh4MKeJSTqrVRFAyJnB99FmTIkmzxbb7RBX7_C55tpZR1F51uSOl4PTLmtYRW4qlbPfidbNsCVumIzV14wP2b0LMdKFQQnStvFfx5_O6CnQpho3TtHsTsMUTGCaRSc5ntkBSRAJepFQt2PgkunT4p68jbQ3QiHP_V5HtwNLVnuHANMG5N-9Tb0vy62bXt1ctu-yMnSmqCslrdka9oH1D0YJwgBwNXUEVFlQU6tBf2wfqtA5VlboTcn8A6Y1LhxGIoJ6RkrkWM2zyF715bK25swlA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105863984483709549862\">クロスホテル大阪</a>"] },
            { photoReference: "AWCwydhfHaaxbUqLPHbHB5tVOeqSJqkKpY4U3BUUEuVeEgj9MmLNcVqTvKnop5JGUOdlVbZPIks_7DS8K8e1oiVxpyemTqR-DfD_h_dei99Dp8b8vEVXDhtY11lRZDWsoDX3fayt0ONozDIHU2V_WL-Zj971qD0sQXLTKaLjMNAUPojwE2YuIRVfWJ8leqbjPh1MeHCmEzy0DSFrlKVVUYH4NiF4YP6FNjD0dFQAWJqymg3C7q6xR4HWvHIm1gnri4f18QOgoCYnQKEDSIx3dAWHYkzdK3cavDqnCKRJ5ypdcfNK9LuGpskDlQ0CRnWUIaIR08Xv6SLtvsNeihByGT5AoOTtySeeDq0iR2WSbgsUghdlS6UUk-WFKFnrj8IK_8kdjyqBlVsNbXrTtl3ISKSjUs5ECpzZuRLsO8fq25y2dnE", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108686004768193568919\">ホカンス大阪</a>"] },
            { photoReference: "AWCwydhwirFJyINTZ98aa_E9mLHGzlbrfvJdbocrv2b5fsLIv61Axlzv5qlrFmzkmLqjW6IyFTKZ5EzQNLZfEfMnG6xQ63Uz7U9eqByOctZX5hPzJdKeviZjXH5QzssT7ZoZIcTpVjRhc4VSiAJvnqfY3_6U3tXhxahxhQvY3ALKv-iaxUsEGhgWLIxHQjwM1FUyVSv_c_UpRe4NdKKn9zPbPlqooilnweZKPee-Gy534lhHV5A19ZNA7NLP1PDHSuyxMsjGTb4NVbbzIJaCBlFkFZAWx_X4vBUTlKdZqKX7CmWiYZ_apPixzfz3yBIA5aqezI13bW_Ebq_Yb_wZ6LANH_WfxCLQACADX_vS62QIzPv2sHx5UQRSbLn1aax_uvOqQJ8kyzT9swxljhwWDo4AkqpwWn1RELh2bl7y2z7QfVDhSwhBU3hD8SH1vhvicIkN", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105863984483709549862\">クロスホテル大阪</a>"] },
            { photoReference: "AWCwydhJ65qkV8UHYjaCiTz6L_5YMV72QSdo61PL6uUKtktBaJ8J7wPlpGNjO3Rj9v0rM2m12pI17bo9dFOXh7jinMmC8nHPATGHkbCf5LVDgem9eJmXnT_UJq82t9pT5u9w5Jh2CGiNP_FHTzu_C3YuOsgmpg-J615F0rXNqf3xGMCKRFA3CLcyQLKo0XWtx7QZ_64aaVilfaAbZkeQZ3gKXF9YI7ZXFAIImPff_5z1fD4gwnLMnboaVQzKvaqNatlhiT94ztogRY226cXfla5EwH3eLndDQ7Uk7gdGORP8uoPpSZC1VuFDlMmymcW4JioxookxsnDvUWOOkr7RilsXZ33hdy_m3IZGACYqS9izG3Bqci9CDs_kiycCgggEGwmyVOyWX8VFrHD9T8xhqmMZBXp6GyT0W_CpYVwQzPq15PdR2Q", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105863984483709549862\">クロスホテル大阪</a>"] }
        ],
        summary: "도톤보리와 신사이바시를 내 집 앞마당처럼 누릴 수 있는 최고의 위치!",
        updatedAt: "2026-07-13",
        highlights: ["도톤보리·신사이바시 도보 이동 가능", "쇼핑과 먹거리 접근성 최상"],
        tips: ["주변에 맛집이 정말 많으니 밤늦게까지 즐기기 좋아요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-5-15 Shinsaibashisuji, Chuo Ward, Osaka, 542-0085 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://cross-osaka.orixhotelsandresorts.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14281617034206022174", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A1%9C%EC%8A%A4+%ED%98%B8%ED%85%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 로열 클래식 오사카": {
        photos: ["/images/osaka/info/accommodations/hotel-royal-classic-osaka.jpg"],
        placeId: "ChIJFfYhKlvnAGARNTv44dh_pGE",
        placePhotos: [
            { photoReference: "AWCwydjQcZKYIO3vIRbO8YNiPu25JHFLE2MvUDNQO-H7IoBE0RnaYPRsVieMdmw4BVe4skbzOm62xrLteBpAtOGjkZF89ZQirIT9Jc-aqpSsTs-9zcrrq-oxLQPrFbXLCx8m8Ir0MCiZSz_JvlMiOlmhP8wawFceTYw7XiaXAOnzayileg-q0GjMNEl8ZfbuH02FE3dZ6-FKyEgpsMolmHCOZr1fyXZrRZCme8-l5XNpndHhIr184vVOpOLC1rY5HkJUByKlHU-hFgJGpcIRMGXUXfONvjXf8NJ2I00kdCobDC3afrpT6tAJdKyesL5kEypAnvcdt2B0TSkAYZuTWM6fOZjUIsZa4sq25zh3x0cJGVxb-R-DipQVcWWLxvr9OCkD-PllxQqqAsApY11JIpAQUXHV4W4wsaEblQnZbdKUQo--oqw", width: 818, height: 465, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101795623153537775391\">ホテルロイヤルクラシック大阪</a>"] },
            { photoReference: "AWCwydjNFhzo35fUrhmeS8iopDI6MZcVbrp2zC_0SayghdRUzrpNBne7tNZXInu4AyZirBVCjabj3vwsbsjSlZCJ3TApTEJvR0nse1Y8BwkV0wwIDTlSGem-s1YaV-HWkYKnKlhzNJLi6GuUVWhzCr8lItBSFG2uCuij8KAP5zGIXdAc1eZrNJa7QWRXpmFI8jzPu7iUNXbkwOwQfgW7cEOan5vFPIIH--w5g4OJB-JsmHSp522lV3pwc9Bz1wtPxzix9-_OOx-WOEs8Kdh2Tyy-g-kGqrLfQCSbdGT9_J001c7oZSU86iwHxqV37iVRyErLTWfZx0TkRZc3Ez2PStRZepRhNnIqedBdgaQnIoArZDZtVXyW_9CO57GVHcAEskzu3BcM8LC7NoGQazsces4QQ0HLalkP1-3OVSiGOqcle9AiJ8WI", width: 1500, height: 1083, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101795623153537775391\">ホテルロイヤルクラシック大阪</a>"] },
            { photoReference: "AWCwydh_HQR3bX7hdaxdZZWCwaL1iPa5dM8M_5BUk6Ybnta6IRWbdI6KuxAW_KwwoUteuw-vhWqg15JA-OIBNpgWdC2105b570JfD0hfIzrnpgb6T2xhS0vpMyMct_-yNK1DfDB60iymDNroHGMlyKLpcibQ1VKkiQlEVRDX-zvNh5wPumQJLJo-zrRqfsTyr5qGVh2TD3VMPoUqNVCRM75dqlyA343u62lYCRom-o_nAh1rHtfrNKLOJnV5cy29W6uFB1HQ5IIUwLZOiC3KHNbB08plUVESDQPIKUNsyC-apBiai4X66WB-NK23TjepggTvJpCsoRzjRhvQkOUfBSw3N4Au5jYgDCiL0oEfL399iH0rPeCpRSuanPGTv8UlgW4bF_nGdcFYCNevgybjtwS_shdojYFkD38zAJej_VeqXCg", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104892543711125336498\">고송이</a>"] },
            { photoReference: "AWCwydhHR3fektt60n0T-PuCALtGymkNVCfog5AldCz5E6T31zfOmXkiT-B8Af27I-qrZPe4krssMAx9YjMGQKG0Fcmni_Vyqyr541Xaguy2h8-HCTcKuK8RIfqpTDMyzCIqdQXZZ2DeZJOn94py1P5HFd_ge2hogNADBgVlZKNU96tF7be8FkXSIf9eaEiPeNGAMj0oNLGD0CQjp3HVOC9Au_bTwBdJ7M8P47r6FDomcF9XSXWqzwGRiYcWKHap2s6q-1BC0TKg9HJxlilDnpUW6ePmHZnuD6UWr_9vFLVfN2yIQObPHxiAUx2dR5-dZ3uwktXSXwAOc2j1hVQ3IVFK3Mgk0ePzJrYI--6ZtxDecg-wLWXpYS57cOxDIkHfr0w73vi1trHtN3FVx3EEc-AiA9n2Izvcc9t_Uh5BYTBE2SPcDibk", width: 1008, height: 566, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101795623153537775391\">ホテルロイヤルクラシック大阪</a>"] },
            { photoReference: "AWCwydjB4uUaYFV0pOiyXee8BGzDzu4Me3uDKDjjCxySFPDbyx6mi0rnjgTbQXyQCDUpux1THjN1Y3NmoOSt_dQRC1sxCUriXehMgK78VMTd8tNwfSpX_cv0kg_ejtSHT9unwTkLbF8w5KRr2kZgleNbfL5GyxzrJpxHVGslm_I-xcJztaxei8DLh1mefIgUBZ0xCVmf_IqKGsC4zzpml3EkUaPwLxSAjFoTd9sIPgI062is3CFM-Omq4--UbzWAdoBk7JUbcf28B3sb_RqBqKwXS0uDDi4Jfmjy0MeZvaSeuyAWpL_3CJoRQw7nxtrNlByNU3w9UqwUDWgj5ckVxO4xqv-_J32z91yRhI58fLT63BwDl3KmUflMAkd6HBandEOEqMlE9eKFlL_Fss2vNw5fP4cMPj3t0xVaTokJjg", width: 1500, height: 977, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101795623153537775391\">ホテルロイヤルクラシック大阪</a>"] }
        ],
        summary: "난바 중심가에서 쇼핑과 미식을 한 번에 해결하고 싶은 분들께 추천해요.",
        updatedAt: "2026-07-13",
        highlights: ["난바 중심부의 편리한 위치", "쇼핑 및 식사 동선 최적화"],
        tips: ["주변 맛집 탐방하기 딱 좋은 위치라 이동 시간을 아낄 수 있어요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "4-chōme-3-3 Namba, Chuo Ward, Osaka, 542-0076 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://hotel-royalclassic.jp/?utm_source=google&utm_medium=maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7035889087340362549", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EB%A1%9C%EC%97%B4+%ED%81%B4%EB%9E%98%EC%8B%9D+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "시타딘 난바 오사카": {
        photos: ["/images/osaka/info/accommodations/citadines-namba-osaka.jpg"],
        placeId: "ChIJ8X1YUbbnAGAR0tniA-jGCCg",
        placePhotos: [
            { photoReference: "AWCwydhnmCHa8hgrJtpzhu3WvdoXmtCKGxIj1FuJ4cEvDOudYuZggGcEAMXHmfmQ3_ftcvMhLFwz3cBxUV241v-5MhuwqA6RTS084Kv1uMRRMW252kWvy7kss2b2uc3ju3P0FSdxDtvE2PJ32KBZs2g5CZu04bAQ5mSf1YCOYpoB41fttnxiJlcAGUia_aV2dBERTz4j27HM8owmN43bB6L6g6VmIxoi-w08ABt7RIGP62_iKHeO9azHGIBe-Wf7MyuuSClQv2fWW7sWexCeSPZsAM_pmonYLBqiuiMBTMMbJIIQNlWs7zigs7kl2PaQR2CJPKUbdb8tpNzV4F-2YUJIuMTgsH6Jf_hcjJhwXR0YcX5L2NtjaRl2vIApScUquV16_2nbwje4u6R6sOMDSdmnZ5OYh5RvJ-U8UwM9dgVtqw", width: 1080, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102027224993983775478\">Citadines Namba Osaka</a>"] },
            { photoReference: "AWCwydgro5UEVUJMcWupetXh1mLaJekZISUyl-VYWEjLKT3lbEW3mTDmUi2vDyH-ZsDi0sr5qqn8xZugBOvraGLLGjr3QIZUBpO5L2wzVjiT6wUTX2r9bslKizj7QxYchLHNpYH7TcTVMt3njE1wJ25w71xs0c2zdLpQt6AF2as7gFAsn_FWn9WyCXWxTlxlP6RpkbvBG0rkgUScdKrkov6P9I7-JbLz9jAkLTO_nZPtiweAMljAoVBUS5wAwTlFj_S57N4bhkhwDPSXcfre_q9G_fBoyncft6_atAyxH2RYSF4YVtT9J_x9PoR5NcVBgPprKSa_WARQnDks9RRT7Kmvx3IfTNcW0lM2iVMHbrlrFEYsBQ080kL1FndI2HvJGmJ8oKtyMJ2ic9xMXhMa4kefFsXHhiGNXluoRCxx_hq0EmP-z6p4r0VXNbF64Z0QQ8_z", width: 1200, height: 800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102027224993983775478\">Citadines Namba Osaka</a>"] },
            { photoReference: "AWCwydggvm5R-jPTFZIPbRjdrcWmm3GrdMIqVAHoKwhZYRWztwVCXLujkMnL1nrW5hn0_LZX1rH2EmqovotPLiCaFwi578V__RIgakUnPoUYlhPRs1JByCg78LctqsdlLvGjOxLEQITk41bMblsIpM9B73D7VTrE44yEKUm2AFtbvEn30luUKRTJJHNj1QtVDeuVizgBeNWpzCBLlpleI1QO7D-p2D7GQ9TpOaJmfvJMBTHYLIsEuL1ZcYRZoz5-PaDHGmqfVRINe7NVbYNtY4rRY2miW6T5ozxPexuEgpwTq429Aa9yOg9HMB2HW4UZGOOoIWenGcgP6dLL8NZCGnV7pBfsJpd4SEGM2kD9m4PXh6nSNDGqNcVKPo7icgNzWBul0bxmaFxwDRrj9wUgEQxE-j6Xx-J2G4k1rAQXwZb3fs0bjw0Q", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114280181667438602195\">Dominic Arrojado</a>"] },
            { photoReference: "AWCwydih6tYA0WY8u-6O3VIz-ug4Gtx3VjrDJU9jxKTbdPJa8AlOyKXyGMQCEutiiE7FB-aHEm8yKHr0kYFehzJcSgBBcbsn70E62YbzClH9-vsLxAPUq9tpXK3MbLRu8ar1810VZ-HG_zQLUE3o21_xaGD5qJ_jzNrgx4CP8z3ARwUHDvrtxk5c7YbKEYgDwUipjTr9f5PWenptIamWFNRsWjF7ibFC5NTVyZmRIcLMjJ_6mB8qQQVVG8ZJ16y16eZx2iI4pDJ-pLXVDQWhk1zlKgtAzR1CJZ-fv6swuWAPtznN0FFnbG6nNz9Gss3LJKbuaYsusmpDMyW0TiNrYWbjz_p0i1h8PtYptF6DyMqWJy6CQ-KxV2ZKjNiboT4w6VSakOEF3UfjeXARUcotscURuiVoAUplVmi-F-EnMbf8kvM", width: 2500, height: 1667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102027224993983775478\">Citadines Namba Osaka</a>"] },
            { photoReference: "AWCwydhdevR601_XQQ2lbr2nUA61fTEy5Arq0ppnbyzi9Ngq3vQjwX_htDdhvF-8ulK54Wbdr-IRvB1UDg37CJhdHghY4s4S25XMBOjmD5xSYDzzbnojlzOtJe_-jyUN90bS2wuKCxjqusCJCKL6F-BUaWcIcQ5s-UMlN7Pm8yf0nNjpNEhLjgqd98ZB2PngLFnfCZlAezoB3WNzNeANKLNiY2pGJ-dyn1tb8-jjbBiwgrZ-dE_OGHRffOQfSnJL27xWmPV5im3qr3gu5LZeWYiEDEazCkjUnNJNYrYFu0m0FbCtX_xjAtOulV6bXeq_JmgwSa5OEtYwmLcL5CcAdB4r9j3aitDk0B6XaQWEIlQkdItnCTUSOvXitUG63TH---RMt-Xm2AIS35V4QR-VP3HMOxILn4hitvNFOFlJmBDSV1VmR9BrbEyISFuXTjbQTw", width: 1200, height: 800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102027224993983775478\">Citadines Namba Osaka</a>"] }
        ],
        summary: "가족 여행이나 장기 숙박에 딱인 넓고 쾌적한 레지던스형 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["가족·장기 투숙객에게 최적화된 공간", "취사 가능한 레지던스 스타일"],
        tips: ["아이와 함께하거나 짐이 많은 여행자라면 이곳을 강력 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-chōme-5-25 Nipponbashi, Naniwa Ward, Osaka, 556-0005 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2884774261130713554", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%9C%ED%83%80%EB%94%98+%EB%82%9C%EB%B0%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 라이블리 오사카 혼마치": {
        photos: ["/images/osaka/info/accommodations/the-lively-osaka-honmachi.jpg"],
        placeId: "ChIJMbaiiyHnAGAR1PUvQQSRB9s",
        placePhotos: [
            { photoReference: "AWCwydi_fqJR3Z3oarIhW4oaM-wVQkuKlYa3ASDSF38yBBG5Im83DsEvKbRtu9aN1ajC8vn4F-uV0RIJzbDQoLWh5zBJ0dTlRdN4-waJ0dtsHELv3ceWwkiE-HAENiPRO7xYWxdcvCt9YrP7V6GDC26tbb8lHEWzjkYG85SJtjkOvHAh8BgKjsaw-NdVsRRg8k_gGxHGWOiy6560xymn_XIrEBo5sYfSXobsOgC0KeOHEX_kczVirOoDW27BHcLYBZD93jhq7Z8QRR0_515q8A2Y7Gr1R7ZDnwz8qzbmHey9vT9TqZhlFRDIFU1SQm-5rsoHtc41m5RFS1LGA_mQmhq05cZFQt3AwcOMP-vVJDb09EIrPvqQk09LOfcIl_TrXsVVeT2uwnkTEuJRnNKkhDP0viOfJwNZlqXWEAw7ORjKIys", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109596082475998406551\">THE LIVELY 大阪本町（ザ・ライブリー大阪本町）</a>"] },
            { photoReference: "AWCwydjY_XqWRSkM2WN5KwrG0_xlojqko744JfKLqzFQxfafot70KSNEMbnzMTsKoQuQqY1_hvsRq8KO6yNgArmJwn-Fdeak8A5r0_wd1hsMmlYuj8rQbj26c8rWFc9_m3gAJuGDJQLkJ2zd_j2K8BUVLwTUy3Gn7Y2HIEh3l0im5DncXmRtjlt3sy-sHo0XVYXQR0NM9qDM6ubaDrOw-LF_XxY1cDlvvCgyHLicys4laaZaLTpC5YD1vM1dZE22u1pM9FYj9KIuIfsK8SrvsVnsoMwXMbVxvjmnc-1kjv6JMOtGQgy21oIfHM5K0XCddsw4mtZGK87QH-Kyt0nb6Dfcp4Vpe18g8nGAm7ckO_SkATQOxobulWlUI5KkMBmt6cX-_gkhG3KnnxQpmIzJIOOTgAZdW4Riq-7CUKP55MTmf1DqEw", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109596082475998406551\">THE LIVELY 大阪本町（ザ・ライブリー大阪本町）</a>"] },
            { photoReference: "AWCwydibsWmEzS4SIzwSUKsSs4CeoqPu8awD-H9Z4UzRKYqotmkW0GfNQxIHAidVvJNGdBd-qCnmcDyV5kpevgystxxRXXXneVo6GBcuhzzlnO5uIQqaExFWYJfg1U1GMRzF4lfJTxa0Fp8aZUS1AkHTUbtO7TVPBeYtj3FBwhrmwwdrvuxZp-AnRiRMsIRVq9rDDHHh43veGw_vgXmwPKRl8-If2Q9Fjv7GkLxAByqRVkjhSDZ5dK5ozG92GxS-14BeIRQqFC30-S3sOtzO8DE6AFhi7zKRSTzWzel8pW_bwZCLXI4ttkmzxqSwR9lTSic7Fusv1IlGJWaQxX7bqYHpWl5nwcHF8-KwcMDcNif-VzmosG1Eiku9AeUWE-RsTOdyLAfNjTEFXTLK3WLPuA_NegLUKAA4ayiKEpAmSMSn5WYn9g", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109736511930719491322\">MEILIN LIN</a>"] },
            { photoReference: "AWCwydjbM6YqzsZ--Rv_f3-v7BPle_NvVzXmde1K_9x5e4M7PwY4fSfEF-dHieP_Nf6ulOX7Oa1YuHesI2rdoCVO28TnHT9sHH0u9yfKtiGQhlVTsEl5XDHaSDwgIax03X75FB4Mfss4rzwF0nWnXpqMQSIJwWG38iv-RZnPVyh6aOAAKtwTn_zUl0dsyFNWIpv-BmbCFTFuz4SyANcRngmlWZtWsufxj5ZQPOJuPV2wzDbpdmEvy4AlemhZIRy-L3nz3LEDjjtjnkSttU8Ozza-r23_7Y0aARwicF1zCGhUSyEsd0xGUw7xEM7XrToshYcz_GYWeXD2xjcDWl5qxXjrkno_GKb7akqo9PN-rmwo5Vj1tkRSuohFLCYI01JbFL0F-sdhZH3BSVotYKDMcP48JX5xas813kObYu6DJQ2nJMY", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109596082475998406551\">THE LIVELY 大阪本町（ザ・ライブリー大阪本町）</a>"] },
            { photoReference: "AWCwydhVlgIdFQSgmq12X5pSVKWt5QLX5hDlEJxWgiImtlCkITHbgSQ2JtcbBP3M1Jk90B_rDWF8XzqG6HgeR-sFxmgprdnIy-9xAf7oDxCjN2B3_u1E0GfloL6vFNp_wXLgeNp1Z9NWRLF3bINh8TfLksIGMmwklD8-riXMNEi5CSV5v8EdHFj4a1PCl3Skb4wvdEmYST6qR-TV8Vxn0iuzqOEI-XEb9oTXFwG-4Y1-4ZUaiEbeDTyr9jTfIkAOkzvAMEYcgP6VCrjCesUvhO-ETnXjU6v4S7XJZhDNrWrEp_oQFpk3sm8LKvvz0wbSUaHe5F21yBaRb0LvZqpjTc49Ej9NFXM_MyLxNoKBchRh4VEj9dLrsLpCh1Mm4S9F3htuIV8s1ovz7mSf8-eYbYI0oyHc0huYURM5kdPemDTd9_Y-3Jdy", width: 3000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109596082475998406551\">THE LIVELY 大阪本町（ザ・ライブリー大阪本町）</a>"] }
        ],
        summary: "감각적인 인테리어와 트렌디한 무드가 돋보이는 혼마치의 스타일리시 호텔",
        updatedAt: "2026-07-13",
        highlights: ["세련된 디자인의 객실", "혼마치 중심가의 편리한 접근성"],
        tips: ["호텔 내 라운지에서 여유로운 시간을 보내기 좋습니다."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1-chōme-5-11 Minamihonmachi, Chuo Ward, Osaka, 541-0054 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.livelyhotels.com/thelivelyosaka/?utm_source=google&utm_medium=gmb&utm_campaign=gmb", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15782742866602751444", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%9D%BC%EC%9D%B4%EB%B8%94%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%98%BC%EB%A7%88%EC%B9%98+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "목시 오사카 혼마치": {
        photos: ["/images/osaka/info/accommodations/moxy-osaka-honmachi.jpg"],
        placeId: "ChIJVVXl9h_nAGARVemv1jo_1X8",
        placePhotos: [
            { photoReference: "AWCwydgmUZraJ6mekzRHWPjpWgXNAxoSEWgC8ggcqzEbgQXM_b5Ojdyv43Xh44DfxqkqUro9OTdhCh2cO7AbaFVKTNKxc0DBgognlpRnReZK3AS5vO2oy7L4BNXHxkPF4wNQAmxgB5O_U6Yk7vsVvfm3WisySXA27kjB6N61vhk1K3TgqAtO105tWIumugwB5h20eWv6uOMNgean8hKKtiGaZ8dwNJkjYUaaT0Hma_0YnHd6ibTkH1HCGgkNHklbDDFGCSi1n-fveAH9CdVBTfOt64uehb9F1ISIDJ6FElNHLipphcsCH6J5EwiIlHz-7ywwc3L0JyWWJS8yQkVokxJAOFs0UqmVUlb_hbVK1EhnwMpYRGLUe0WWObGohFppDYrSmhhDClHzi-a8fRTzwZScXZcMZZuL1hw9Zz7TB22xzwzcNAC-ZosNaVn6i9htTQ", width: 480, height: 320, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107415603514253647162\">Moxy Osaka Honmachi</a>"] },
            { photoReference: "AWCwydiKcENtMlx1yCfQa6YDbqZ_RmnqT_Tfo2eVNaEwgdJHl1lLISweX1LtM1crl25vLr3uviHnflGrXn21F16YJiiobX8CzpzDwFXJ3kKDPt2Vk9w-LDX-fSOtQC4Mf8RrZ51CM0eL5tg_thjzIQkV0T3Po5G8e910CMGScQeZgnXVD39J4ZV0WqbQYe9JoB9uYKknUWTBBIrBHNDdwoWDlpuZEqpw_f3QXAk7vfwTLHsar6uQVd4NsWeJPgcdyYOFVw4HEyGIJ9xom2f9fGFsVtuPowFa_3I_STYnOuUdWNxzzr9K9C8t3EsVuesAY-d8wXl9QC-n7K7l_O5nZp8huomhqIy0QW81cP_cCrAzsAH5rWRIlW4b-0oG2S-8RFHzH2SKReVuWLpUfAK-cZgzMnO_XoN34iLjRl_o4WTUiZ_HQCSGbhFfdDM_IFYodw", width: 1707, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107415603514253647162\">Moxy Osaka Honmachi</a>"] },
            { photoReference: "AWCwydgwvf2BWZYqBpmaP0AxzhJG-VvVNlwN-C64O8LHqdD7lZ62sKPXFzOmeFj8kV3euN2mbC4Y9j2EwvNz34NxFmMeTuPlEa1znJbom1MFT5Pka097U351IVdmrLQNo61RYUlRmHeAKeAqlIjPQCCQZoYqu4fleG3nmpb5-M4VNCmn7rpUWQDCh6VQFEwQwQpE30zsE7BwyiKgTGoRbtoZyQlwD6ojKvUN06hz9G8tfS3YodHiIIvUm-Wptz6rfyjaZCkQtGshfnROMoNgoZ9dc78JSMoGnwwYuy14Y36TxTli-pYBAG8WYt3_1vhZqnYzIG6GDDI4VRJvKvEJ-ASgvDbSQd9tcNQfHPWfSl11dqFbZzixgTalP7uozEEOqolaczpQtXNkDS7daItS0A-HZvxcQWohh7sY_M3DvaG8q6SOiQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104341668183001577009\">Komugi 812</a>"] },
            { photoReference: "AWCwydhQ-GLYUdsgNs6HRXakk0yh4m-RAuFiaFGrXrqg6TTS2VZrfLxQ5C7rai24MTw1uxmo-BTvjmFdqTubtRotGFZYuSSAsREtJ6lx_HGfMCYsta2pC4skT4U-D1y9z3Fk7kP9ylTlXNqIbcEUcw1_9f1MF_4FpwfRDD4IuD12hofZLOCupjx82rOf0tUgyA7zy5kXsz-OtBV2SUxr6hVSdM3x0T6GFkyiCAjluCmyBn7qkVFcH72kevaKRp4wZr9nuCBZj-pjq77d8iRELhlGgtOxNw3qHqHd4THOOkcFgSmRE1mBKNIpojOCAVJn9q_grEqgYL5ydVU1Ir88jSSVKFO5vb2T5u_YfmUvE8pVV0HRNa-XSQp9XMAAqgGZfM_7pRYTp5DWpdOmQRqwNu_XljQPQX-q2W50sxkvXUP9TbJ2_Q", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116972411931277010080\">Frenzy</a>"] },
            { photoReference: "AWCwydhcejXlXIutdEmVo2tZcZbaui4KHuMCAdk-5sysEqOyUeGTCrc76_tzZPidQx0522l3HbygTKvfExSNjDsnV4WzfrJ1aOPAPnPhPAcFmrNwYicsq6iEzNjyAv7uDZtwr0n5YPoLr2NLGEHag9aJN4JU97g2Io6-HX2cDsQjWAGkDAEW85UCDdapf1RDhGFw6_i39mHOv1g05wHCxI5ZwIa2TIJ62Nb7nOVKC2ZFaoJ23ZGTHszxCXrcUkAlViVqtLTPTi8Smn_dz63UpD0MLS_2gcUilup0DWUjNMQ3AFhSKIXpFCQttZq3Gawa7Z7FeD_pEpLh7eRKw_kUoFUgYSXhPFdvYFmsdiSSpsDI7knY3m_51CZcVXFRGTkmurpTXm0PSq3c4RzB2keX1b5g9lf8VpRgh7F6-jBtwq9t86JtfPW-", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104341668183001577009\">Komugi 812</a>"] }
        ],
        summary: "젊고 활기찬 에너지가 넘치는 캐주얼한 분위기의 메리어트 호텔",
        updatedAt: "2026-07-13",
        highlights: ["힙한 감성의 로비와 라운지", "가성비 좋은 깔끔한 객실"],
        tips: ["체크인 시 제공되는 웰컴 드링크를 놓치지 마세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "2-chōme-2-9 Kawaramachi, Chuo Ward, Osaka, 541-0048 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/osaox-moxy-osaka-honmachi/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9211338134798723413", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A9%EC%8B%9C+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%98%BC%EB%A7%88%EC%B9%98+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "OMO7 오사카 바이 호시노 리조트": {
        photos: ["/images/osaka/info/accommodations/omo7-osaka-by-hoshino-resorts.jpg"],
        placeId: "ChIJF3Kl_ejnAGARurgo8k1sU5c",
        placePhotos: [
            { photoReference: "AWCwydiaxyvBMUWRwzik0S6b2841WTKxsGFtRyFn6ZnszhuLI_XEtf9bVZDUjT3Zlp-3ND2OdDu1f3SGKzaVVErMLqSNYXv_GUVqU9IGBmj4hFBykhwRL9cIlcf5IHKqe79TqtaZRWfbbLSryXQIkXHjofCOMv-XtKR7BdIolqOuD564A5qKPX1lzwpgnLK-9vzAEsN9qHBHtpxI0MHcvfCXoSwhZFFPL9kuRxwXi-IjP1M-6AsojCFgbb7Qx-FGhke-f0Ym4iTyrYJxaDV4aVFxyG82neuxvAjQdpXzEHSNVJKc9U9_wxUeCvLFkOrYSMCs4mDvJiK82DwQ7qgbDPa0PuCtwUR7l63vo7ASbVlkmLr5HgwT3JqCJAG5oioLKHgPax-RhcKHlfCT0hUBu2OyjLL0Kuf4VS3reO4W08MUD0I", width: 3000, height: 2212, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115100429704160498475\">OMO7大阪 by 星野リゾート</a>"] },
            { photoReference: "AWCwydh_o5XMq4M2m1VEZwtw0uk7g9bmdpm6LlEPvgwdbOFLZQl7IUzq7-BB7Do6r2sWBWvbhhadPG0m3RegcI3AMvhm9MEXW768B8eQ1U__ZvwOVm_CNwYqsySQ_wp9BCLaxEI-dQxKfFWePomUAqfByyl5EMp7jo1m5gnXXaya96_BPBn-aqabG-tTEGpAzkXVoocZ2XPjUD4erxIi7diEfaB5pq2rPmug_95wuDROhpX952QLmYpAp2h9-cOGXLcyA3FFYuUtpUNBCb1Vwhnb4InJoRjIm1F1Y_p1T9iUcmbcd4-_op5PidHVEfKb-ReeDKl3nVnR3G01G9EF20pnkhqDGkiJ6C0bs71m72aHqHDcrPOINz69HdOralyUEIzekfabzKe5Cz-SpkpQ-ZbPxyDEcnljU9IDwHMRimqQ5qS60FA", width: 3000, height: 2001, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115100429704160498475\">OMO7大阪 by 星野リゾート</a>"] },
            { photoReference: "AWCwydh5nKpAOys-leAp7JxPPHXoifG4KzsSp-JqRsyeO3Jjmi2Kz2KFA31oVmafbe0NpQk_4ErLqgcLWbfzUdbJ8CUv-uR8vSNnnwoRQhQAPHl6Y-f4042Ct2PFb6W9ZvnettoVx8Ep7E1CJymHSd5dOCJHvx--iHJ9ai9yINRMVxlRxKI3aptndPbzuV3m7zc-8ML9e2Her1YfOtvo9byZU6aCafp0G8LyEmps8uShBu70qSp3gqzj9AZ7XeDPez78Wgs0btVFpmtLUBBMBdou8xQUw0CTibq1VRqDMctRs1VUMrlZSbQ6ZxSHcJ3NpxtbdWfQfC2j3R9onXbgMzlVvb5pY7GmBnAhy3JARRp_kMZp7kCJQp2-vT1aRS0p-r3trFVOWPf6H8BpeTRCnC-jJ7R_JRQ51iP2zYsBLZirBfNxwA", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103261751632002591210\">葛谷彰造</a>"] },
            { photoReference: "AWCwydiTATpUEwnb_eUk2pcyXEbqa-LRkEDatM6iEkUls-GtJryL3oi7xmSMjvwNuwh0fOKynwyWHp9PFg3x3G0IIMd2r72DU1iYQSlM7NXd4ifcyw71DR5ivrDufROjlLeGvxZjLjLJWjkoqM1Vx1tpwGF-g24Wlr0Il81O4_8jzU0U9alpk9mITCYM-3BHGhpMhQ5LQcWe0GKPmZfBbScfs0GgzIOFKfkcuJVi5ZKsWNZ1ahfzaDBmjmyhvaHZ4zYSp6KuAC_Kc8UHMUZb_A3qoz-NJtGnldxww7ZGUJYj5FZiqkJlte0MPAamfgQlniQQsHTcEP8F68CCLpBa_Cr2z8-nz3wBgccsbyscIhxxa1KJnDtL6Vn4bow5l2HZROHAagj1PYW7cRkCi0cl28n0OqsHBjYl_TkYjshhK1fuAaFsZ3p2", width: 3000, height: 2001, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115100429704160498475\">OMO7大阪 by 星野リゾート</a>"] },
            { photoReference: "AWCwydjH2EsurF5IxeW41hPGF2msAa8F-lnwQpcGTwH3rPIDVaS2QTlfPaxBcfsw2aV0dLO-kL7D4VQ8JiEFd-UccTYFm5usDezLI04p8Gg50FLP2YV3EJIFmIyE5WRA4ar-gPPOFs1ON9uHGXyQnL2WEHqto1eUOjiA9cBL-dtJm_Alf6Ms5U7zBnpkB5CS1iHYI82bxdygeLZ9doNdl9XujYoU2QBJht9ytdLzDyijmlDapxQfKJIPzF3uF--_s9Y6r1S2hAiOWBMpbc1tjc_cxWTnhwUnmppUAzcyuCKBedzgfarEyqKHFwWxmbJ4w4cWqaYZexXX_nqyWOrIAzP28VW3xakE_c23N32MavkA0nAI284-Op-7jbV11Q018ZL4ljB0ss-gc9I_lq60jFmUIu50FuRAJ8G0Z2syol2ehHJnPg", width: 3000, height: 2001, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115100429704160498475\">OMO7大阪 by 星野リゾート</a>"] }
        ],
        summary: "신세카이의 로컬 매력을 만끽할 수 있는 호시노 리조트의 체험형 호텔",
        updatedAt: "2026-07-13",
        highlights: ["신세카이 맛집 탐방에 최적화된 위치", "로컬 테마가 담긴 특별한 서비스"],
        tips: ["호텔에서 운영하는 로컬 투어 프로그램을 꼭 이용해 보세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "3-chōme-16-30 Ebisunishi, Naniwa Ward, Osaka, 556-0003 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://hoshinoresorts.com/ja/hotels/omo7osaka/?utm_source=hr_google&utm_medium=mybusiness", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10904178204825139386", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=OMO7+%EC%98%A4%EC%82%AC%EC%B9%B4+%EB%B0%94%EC%9D%B4+%ED%98%B8%EC%8B%9C%EB%85%B8+%EB%A6%AC%EC%A1%B0%ED%8A%B8+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호텔 유니버설 포트": {
        photos: ["/images/osaka/info/accommodations/hotel-universal-port-osaka.jpg"],
        placeId: "ChIJ8WY_B5HoAGARBdYRmKlCs9U",
        placePhotos: [
            { photoReference: "AWCwydgaLFs88xwVN4V-e0Emf3dpY-3U1aVoyPw7cQVyekXRHWK6J3br9W4kTgompXG61q-5V7LtttPq5ib8fzQVpmoofuse3lL5NmeYDjq4g9gLCABbMW_Qz3xdHxPxc78nbAZGV9iYGvyYKQeGtEURlKaSou85Mtnihm9ZiR_56vb6HxOKA_IaZ_Sb0CKkwa1NOSjP7AHgtdXzQrMp1kVUApUpUpvGLrtWkWFtFDKEkWpkDvkuH062TnessrWRdERHTC-JfvLN0Z6LrLDUqO1Vj-DzNQEpUT_yz8REwZoMbbpZnaqe7A9zQ8jZEjJHAGDP-dy63uz94Lvgifb-Lzv_la6dGqkBcVfxPlGPvc2xgknEIGI3rBIoVw5BLY_TZRM88Gp1Z5qUH7C12tCxZkrbseV7DIPxQ7RvJSibk_KgnisSmbdJnBzpCGcuio-d2QhE", width: 2362, height: 1581, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103135583701363506643\">ホテル ユニバーサル ポート</a>"] },
            { photoReference: "AWCwydj9aC1s0DFAWcaTISKn3D-1135k55d-Bq8rSLBpZE3rBJOGtMuh5DXGbzqFWGw4rwathds2SPjGOCZ-H7SVBm3Tu1VJLbL_MeIF1xp-aV2atHPoVPKSDYG6FoaM3-DQmGOQ6PVJuGgK3US3MCMiCc5GI_CglU3shvL7T7AoMlgu_fcOGi_50PSopi-biP-S8LFOi-KdBJYJUuqBzqbgoHgbXPHLf_eH4oD7a_EelqNGIOm871O4Z3xQWwmRAsMG-FHAq4KqENRUUQMjYgNW7hPMiTy8gvFzL6E_Ps0U4qV6aarDXF44ticOr3fSayAbGYWrl0sPczqcm51pZ_xjDedTE6J8HgOubIF97KgrGvmbL_2fte8AU8zOFEvuY-9QWTveSV8iWs78K2JZ3sgHaTzmuZubA7ZO45orzdDkcKitoqZapRE3PeISN0fYnQ", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103135583701363506643\">ホテル ユニバーサル ポート</a>"] },
            { photoReference: "AWCwydjAX4HSDWkrPV7oA5egRf6X8PWzXaDCHtWz9ccNzJoWa8Ns5jhYrYcR8JiYGcBz0ebyD7lVl0NCY1Wpae2Vuf2s5aUx5jjrY0jREBeKQ6RGE3x_J1eJ2CzpHtXkpBgZlAyX_GSb-9xyEfOaPP2yfSHpJ21p0Wru3vtRIFxRPIGFIJuHLbyMBvFeDPEJ55elj39cAsm34P3kkfF-MCq1Xaorsr1k2Zx4BsUj_D2KP9tvwle5_ft91ULK3oX359nte8lcbJ7gtdnIF9UKCIOXc7XIiU94cQ1GDZ_zy0aNlwwgFgmqo7XSUk9pRFj7mHyGLsoxI2PyA3He8uTF2i2PIF_ePROqY5c5fuOjqYbwyCeXV_ZewgjdvgSeye6n_xuPzQhiU_pD6zhqIsjxPzehPGhywgLdCE8rSh1244ueg2vr1t5d3tGHBn9O1Rg5YA", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103135583701363506643\">ホテル ユニバーサル ポート</a>"] },
            { photoReference: "AWCwydjIlyDzvlWM86JRMT7REm9_FCZaYVjWwdYkQ92QY6TMEdEbFM-4AZP84qeXk7eg5WxpEB04_6Z1fx7Eve4M54_cU4VZONqIvo_AFcHNXzJg3lkAzeHSdsIijAOs74JUtqUcn6GLJOOb_q8MU4_F-LYLkGhSfILkNXJmrH-htaMZT8oljh5pSNMinnmVRvm76EhXr6CeUUVwOTkrI4E5_zzJxng6xHvpn0IXBTFqwu5u8NRhyC6PJpJTFWcNN3CNvD7dOIFeVG7F4OG2fOfAH51E64VOvVnvWZoAMScZqoqxLUGNCQebl-XLaHConB7yDyn5QnZsceC034DVC5OWn7_Xgpkmntym1LEc6CWWvsNnkEjUTXuTka8JGq2I-_babw5zUOemPO-SN9QCt5p7HpDw3LtkdCuqIDCBJxOj4BHSePQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106783963363205262337\">パパたく</a>"] },
            { photoReference: "AWCwydiSJLRxUuShhcJm5bWsxaR0xicp1SIsdgVekQ1ovgEZm_hK_gfcVMW1PaXjxuOMoyus4Hhy0pVkqMBUnYoCINbgclUa7HTYImr2gAUMKhRtIVdL4eXR9zCwJ8ZyO4LcTAUJ7nDsutBlG0hexvpGyqqU9UO4fHZn0-o3Aks8ThlR87IlHTRaHXQR8BBsJnOaL0VKOmDk8NfDbNFT3fiqm47Z_aWbkkdviSIpHgTi7qp19EaBCKw_o4y0bpdQNDsHq4w-2reST96Nftd2Mfx1ZnNx1iGKizCAdzk-NmAFaxB9hTZT12cOz-YRqW6IG3wNkf3MkkMzQ9luz7Ik8kjZPrqqPSNi4rj2D8B8KOL6foAAvC7lQ1x2r7H4FvTTOCWkwT5CKwluRlZcI0j0fwIUSkTjl3z2CVsW9mZWGbYc3VnQC3y_nlmonBmaLEwBiA", width: 4800, height: 3196, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103135583701363506643\">ホテル ユニバーサル ポート</a>"] }
        ],
        summary: "USJ 가기 딱 좋은 유니버셜 시티 권역 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["USJ 접근성 최고", "테마파크 분위기 만끽"],
        tips: ["가족 여행객에게 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "Hotel Universal Port, 1-chōme-1-111 Sakurajima, Konohana Ward, Osaka, 554-0031 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://universalport.orixhotelsandresorts.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15398724847078069765", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%ED%85%94+%EC%9C%A0%EB%8B%88%EB%B2%84%EC%84%A4+%ED%8F%AC%ED%8A%B8+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 파크 프론트 호텔 앳 USJ": {
        photos: ["/images/osaka/info/accommodations/the-park-front-hotel-at-universal-studios-japan-osaka.png"],
        placeId: "ChIJ__8_NJHoAGARNHDjdayadr4",
        placePhotos: [
            { photoReference: "AWCwydhgjzxfY5MB5ydd5S2w821zvVGpw10DUztzVTCGJ3ZsJrswCvFSwjBo4y-7rjhsq8NYc3dv-Gv8wRP4sVPbg9UTWiVI1cdbG7ueSmGFbHpdnO0IDVfNgqKtSEzSOHnp0fM5vA6e1saQtLkNmGImuCGFXjyoJxsF868p6Xqw2I8gL4B8QgTL0iflQ-Lbp4exDpXcqze_d4zSnsFkcX6jRzCRmqyisDr0QuTyNBaqJmADTq_E8T9fTOJFHHgI0GwTMMgoivpt_Ajq_neXR9c0xtBcvOhfup7kGsut4QTihcYlKDlKzoamW7VZKncsPPIv0IozSSj2nPFeRLsc3EytfUeljtcmPbfqkGcdBsgbZm-SoEIBVv_wbEWpm6Ygym5wMmj0oerS4fbNJ3_0gfJlxO6jM2woJFaRqd26VhAJ65evKYOF", width: 3994, height: 2246, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118168257867451462835\">ザ パーク フロント ホテル アット ユニバーサル・スタジオ・ジャパン</a>"] },
            { photoReference: "AWCwydiL-bM-zbBN0bpKW3FP_lPJiduV0476ysCAPaD2sQlRMHeqpJ5_2dlgIfp5yl5rZ7B9bpbDPfXmNnkqsHYIO-lyA-2KCq13l3d602QAMu02WHqd2ielNoLehdVZrio8b06gXr7TA95TmNrBbZtt_1shNCw4kcpEKeZAD-gjui8BWgFTe_jDwXJUTSaVGqrFuu7def0ucY1j06a8W5AyLei9B8EYNCSNNwGZY0IUtpkGA3E2gZv0cpE_VV0Cdh4ON_ZwQcvOZtL4KS6WBHTBFITcd6pGXIqFWmQ7GaNczGNGz48feD_mEILVVIm03kcFxLAdtVJdreqGtwjkWWJutXWiUH7C1zZydEz-xyGiNMgTiOuIreqBfC8Z_1uhwNnuNtiU_9P4E4WB-kuWPToxR5V95T1WtR3_lCli_E-6rShU_mm8", width: 2362, height: 1575, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118168257867451462835\">ザ パーク フロント ホテル アット ユニバーサル・スタジオ・ジャパン</a>"] },
            { photoReference: "AWCwydgVrXIu6bS5lx8wz7Cl720tF9Ww9VRgk2bTb-1_pHOz2qvIkTG3uDMXT9s8uamxKyrWj2qQ_xyZKwGP9rerEO4ovxY4CeEDIYElg4XdKDdTjOX93-Hhu1jM7BlfPn3Wie7chVHStTgFMaQSchFsrA6v39QHmQ_eOILVOtj_VDvHSPKOLm9uKLNdWnbSl4USNP87sPwIJbpWbmQy8Ol-PUp6srtqqkSbruyxV35GQsC2mk8SuGixrRVLBgJCHoHsIwmZKwdwA4miSBpsBZ-0ML-XACNPsyHhTKYgcVWJ0ZK2bZghVipE3A0rH93pyvrysmVB8VNr-XP-RU0uyyFJGNTDy2U2t4-e1wwyV9RjfpN-mxJBgwLRxGjfUV73NQsvPRAH8FINXKzg3SrZFuTXPHtw_rGwMhLv69Z_Iuegd4AwZxdK", width: 2362, height: 1772, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118168257867451462835\">ザ パーク フロント ホテル アット ユニバーサル・スタジオ・ジャパン</a>"] },
            { photoReference: "AWCwydj3T3SEFVaqEZxD_-Lb1aeZbHxIklNvdSVNBLdMgZQUUTyeOy9-eJb4MVp9ktGpbpD1jCbsNU2pwaRx355qga9T_XaF5rA1wz9Hojf3BvdJTXNONAlrmKnU-7DtrATwkVNiXP3_I9ajXtYt3nrkCtWLImtN4hb50EinIriIMJeyGIfdIJiaIMXdzZyd8oAFl97k1vSvM3ykEWsDFNB53CTIOLuk5tTZilXHmOuBcbZC8Eballdw7YlZmoXmEgadWNveedLM4Ce11NAbDdh88K-qyhV0Awy1TAv1dXEqWTCDAgMcDbWOhtZlZNQTw2_TtBz7nhZ4GjQk5BtPzOppEJ7GB6zC-GRAw1vQKdcA3L7kCtms_Ikmjm8Qnm72pp_5N7pDWZxO2sIo9tw5B2Bpy1UauqBG03a0r0KfllQ039E", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114649788613005068136\">William Yao</a>"] },
            { photoReference: "AWCwydhosqYvlg9LuD7RoWliV16iwcJBFHINtuHLtP0aopJiCI228e3KiRpK4ZpxYqA-Qc44kLrZRYIcs8KNXUG-KcPjBkQY9e5_d-Smr7tFsKFgkeairJwm1MWlvZIucrSOGSIuyf5li038GwovZ7P3A2AVasxKcaQGRx4YcfUqLMHJtyXJGk2sbMzXmVHhcB3GtxbzF-GGSCDMgkqUasMIo3zA4r830MjbwK4p2PTHmZdj9zDviIRMnEUefgdofeJo_nRA9YJ335eJcE8EyFoOauZdNMCInTt3hQ8GoaPYKnZCgHVMv6I-Rao0jCa63KgP5A7_bkBP_n76aSHWO2ylua4Zc_CgQi5Y322NHDw7W_4SE1WOso_nlbUQC5KXW4Po1tFNR04F4x-YzmXn_5Eb0wZEAqoLu52ZlUVpo2KgjcocSg", width: 2880, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118168257867451462835\">ザ パーク フロント ホテル アット ユニバーサル・スタジオ・ジャパン</a>"] }
        ],
        summary: "USJ 입구 바로 앞이라 접근성이 압도적인 공식 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["파크 입구 초근접", "공식 지정 호텔의 편리함"],
        tips: ["오픈런 계획 중이라면 최고의 선택이에요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "6-chōme-2-52 Shimaya, Konohana Ward, Osaka, 554-0024 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://parkfront-hotel.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13724326979961057332", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%ED%8C%8C%ED%81%AC+%ED%94%84%EB%A1%A0%ED%8A%B8+%ED%98%B8%ED%85%94+%EC%95%B3+USJ+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리베르 호텔 오사카": {
        photos: ["/images/osaka/info/accommodations/liber-hotel-osaka.jpg"],
        placeId: "ChIJafF5azTpAGARWJn-33drztw",
        placePhotos: [
            { photoReference: "AWCwydhl18Smn3UcyhIslcOD-xa1ozabctVsQXxVptmRVe-WmBvB65bFitfDGonhWsPfOXjsKLTQC4TGBW9n4T16kml_pWDK_3KoBkXvP-pnXhsf0AQHS4160eq_H3x8axG_b7QB43STBP0sVtWWF5gM0wJv5dLO54Seun-HPKIZw8j4mygAEZ6AZXL0RQqi2g543J6kdyw7ZnjqirwFsEA58vmDYc3P20hs5sdw1HwMBaw7_p0npK4NK0k846cKfIE2JaC8N_U3NLTEMmqtvSgWlKdRWXH-SOn9aJbypDI4VzyoXmItlU9CkkiJ2AVli16o3710qDUKNOaFppYVLXnhj4CklaTBnNCS1ox6RnkTNrA7rPS8nBTfu0QhGnWiDNyTpIH4-e4X3eC7LrcL223SKbEAP5Z1xmg1Chu4E36uL-Ja-pHkuwCBVKq1W0fsgZMM", width: 1440, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113440951751631082360\">リーベルホテル大阪</a>"] },
            { photoReference: "AWCwydjkKE_CPKVvI1LrC5TNtbdtCWCenDWAhO_ZRaelZNL2Ug85adG1ZiBN2WVjMced0JdJrgAbFdHWS29Ok41I2TEHFNKv9Zg54rQCkKLEUhevuEV--MePbJdHv-hHfD_4X7FpOEZ8NN59cx5y8FaupdSc2TaimEgJccGfBYSbBD67pVqwjs8-26Mo9KuMFfmu2pdWvYy0MKQZu45-dmCRdqSBkc-zNveZZXjMTYMu5qmbiFlR_T9bBDwPiYKN3IBG1KdVxC93P5I8QMcktOF4pFOKoZppxt0mO-gFFDLj73O7LItKaHWbtc69IAoezKWIjnfBNEjl7CD3FVes-RZmiqSyX8sbzRw-2jtKAWVPEvTNnqZ6uGYWlcErFJLnnva777frC0GOmDu_vk-RuLRjKs87NUnRCu-SIeW1AiogXyA", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113440951751631082360\">リーベルホテル大阪</a>"] },
            { photoReference: "AWCwydi0ox0kC9aW8AGeOEogfqKtn8-HNlrxyiOyEtTtXs7GKlkbHvB5CqHvEngKKCEOtiiN1ldq3tj-hVIfgVWcimhQkV6qtywcb6xNTw8BopdlHpUGtnHKaxK-F9fQTPfumkfw1ENWxs-GpC4WATMQdI2UpIOC4JaVlIroimceFQmMNPpK_7hNjGE6svt2s555Ue5LCdbzgUAwFEJ9B7bySeDE2SX-tZ81opcx6syD_AmRXSwqhc_3hWsYwaPZUIyJiW7Rn22srdMavQ8jncQJMXn2I7IpDOnOa9ohdQnkuD2mi5EsQl3zeLdApjb4WUBQontga1s0cNEd6tSdVC5cttSNx92rR1fldazmaYcWRT5hQKLp1uCxu-Cp90qE41FZin_mvYqWu00DQVbw0PhAuobwThpgSPThrLKX6ofZW5XGE4fc", width: 1280, height: 855, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113440951751631082360\">リーベルホテル大阪</a>"] },
            { photoReference: "AWCwydgJMkMOiuPsgzZvFCpeDRHg-NrCn4aRbTtdxFgH6XE3IBKRP9sALKQqYCEOvQowx83FY5PlzGQPxL5nr0yy40rJX4JkihOk0Z3Ujs9cl5OGEfJSusIhhoAc6qaqFxsKDhUVgxFQCjW9Xp3_l4mb4geR5RLwm568O07x_QEXP4o_BenrzWONG2Jq0R7t3uYJYjj7jNpinqlbGHe-h_Rj59xEyj6JENDKGya-C_j-uvvHOXbkLAIe0fRk8ttEu1J4LxxNnWL_DEdksyu_TF51IuzfCNu5WsCMwzLyOjiUwaaTbYP-Ewke0xW_UXlJ40wweFZB7VVje6ms43ckWCcF8-gcX-_ul3eEvfUHigR1F6W0try_Cr4XH8KGTCsJfmnXZwAwv8PO77sXLPPIu-xSoKG-g-fCPBOP4fD9b4oZvWVk8U69x7U3Tnffxzf4Un2_", width: 1440, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113440951751631082360\">リーベルホテル大阪</a>"] },
            { photoReference: "AWCwydioRFEBL74ZjpcSmwtaZHjycOkSFX4sePR8fsJICKbuYQC6swOoACkA30Nc1k6m1I_7_Ro6GXRsRyWVh9Ei4clbiCwsvWp7ocvBMadj9C5c79ryVqpabwvB0-SFvDgUUuqyUKuAWZGJJKeIupQdw_tXDf-K0Hs43exmBAdnSSQJu7VGqQqpaLLIZIhzdLJmeH3zaaoJba5758lPQYQdAyrWIFzINVTcPV8w5n6ePf8ASECCU1rXYr32GvegCS2C_kiz9GUJIj5QNF_pXnKdvtjMrCxSelfoZJ1a20mYBUqmsL4u4GWxRRyYdpoQ9r8kmMOCgM1BzekejY-u9fQSEwRE-CQTVWJUJ6zJLol34ODeUIdu2cHz_u5UALefQy2cea3LCiTKHqzrYhrfCeXn52DfB7UZv7heG9IVnVO3fspQoAp4PcqqmokfDQtAtw", width: 1200, height: 800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113440951751631082360\">リーベルホテル大阪</a>"] }
        ],
        summary: "온천 시설이 있어 여행 피로를 풀기 좋은 베이 에어리어 호텔입니다.",
        updatedAt: "2026-07-13",
        highlights: ["온천 이용 가능", "넓은 객실과 대형 규모"],
        tips: ["USJ 방문 후 온천으로 힐링하세요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1-chōme-1-35 Sakurajima, Konohana Ward, Osaka, 554-0031 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://www.hotel-liber.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15910772696149825880", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EB%B2%A0%EB%A5%B4+%ED%98%B8%ED%85%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "미마루 오사카 난바 노스": {
        photos: ["/images/osaka/info/accommodations/mimaru-osaka-namba-north.jpg"],
        placeId: "ChIJVVVV1g_nAGARbS9HTmG5T4w",
        placePhotos: [
            { photoReference: "AWCwydg--63I9RMJhlVmOPjFLYnqs7ZstsptZ_cnRPScOtHFUf_reM9tv75cgpv45S3Oa6FPgYic6LDhSSEsODy6KeJLps230geRd9J0nOFkK5rrT8lTY9xbJr7YhZ4jqIZCVwGFw3uRdrXV5UDzq0EiT52KGbJhmi_Pc-LVhmJe0KFyVQjONybIcPg06vCMIXDaBLsl3ifmNnEe0DtsHQiJTSu7vq5qG9ZgGC1y_-xZFA83zJpzTYVqGTi7TatwWO9nQTShDySHS4dcfbpoUQvekno4qeNowWsYKbyU6vN6XvszLSjk3J2zHVt5j6Kul6z7WtHcHEAgnfNlrxr7nf0vS9WfOvAK2Q2HhG0iwAFvLhdhWsfwhDiVjqdOvEAWxfAQTIaTZn1vYwtGPNTjO3seUfqD5m-UctRf_gE2sokTEQVfI-XgzzJD6DdBmjFid6US", width: 4000, height: 2668, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100829835310849277437\">MIMARU大阪 難波NORTH</a>"] },
            { photoReference: "AWCwydgoi4SaA4wIBIXwSlYw6_r1lGKEdXyCrzHBAfW-ExXGZXAIUVdg5amYjhBJfYrUJ98L6g-ytzOLIG8tKB0ZdUlkoShUhFq_SP3-7LBuTX0Y10h4zTUG03g1nEP2wlxRuYidNQmhn97nmgXAtLXCCSxHDbxiTi-FveFnwR35rwP4t2EadHKBzRYGXG8As5KxUguQB_gmWF0dTOwhQ70UW49Ax1QTIppEZy4_1hTyF2CfOvr-j5umw2_gExhnT0pQQtFTc5EwKM9nvVs9vnPBACjcPUvCpNs007zJgfTLObPJF3TzLUUZb9IQfnfhnd4Y4q1txCwgDeKc7UqCF3M-6oRrRSpS-TZhzYqXSEKDE5GnV_g9ifR0CuT81KDwgdFeyH_NZMpVAbW-U0JGovpId_kGcJ7PH8liy-7ZHMm36U_Z0YGgILViAFxXoXo6XBwf", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100829835310849277437\">MIMARU大阪 難波NORTH</a>"] },
            { photoReference: "AWCwydgmJKD-c0EZ6_NmXRJ8_NNjcibJSmgfDyx4pgammoanuJ_gFE2o-vtK6kmiY-h6S4kh_gmxjmuciS9Sz4cAjnCC3DFRA5QbIALshPOW2WHtmDE5TutxyI-qq_RcoBPlHZk6KetG-qKair1J8aYavn7THzNoyFqHMIeoiYBhxZ7xVYnfBN0xCtrKzd5-oQ27-ooYxP5gXzwiO5mOpWM4DPDvEot1SNQ3XH7R-_z3ZfJSIRcoZghvRY74g5VHKqzPtLxIcHgyjUN1_BCz6qzUsrfYB16IaF7CDicySQcnvA776yzFKr6gjzmAt1l9WLsjh2ZEfKTXTFEowaojRF3VyefiZCMQc6lB_AHfZY8NNQi5EuVRgB23UAMt5vyx0CTHTySRScJlwK6qiMOdFgAK3zYJgKiaCNbif9hFBujuyxBNS7MJzu4waCCjOFIZOnox", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100829835310849277437\">MIMARU大阪 難波NORTH</a>"] },
            { photoReference: "AWCwydjwfRnb0zSPqV8wChH7CjszL-vElXTTWkrdjl-r6ZykJvI7HYydrZ_cmOClSs4j-bM8SqJitOHTqDd72_jQfv2tivwxOXc-Grh2xIXZAzw3xkQ9VnaMQu0kZQhggHYhERS3XHSKpgCYX8_MKPF2vJU_6ZjKjCaqHRsxhFOs31N2MlQvF2O96LpPzp-4L56y5eKuFxDiHeJ2D_XFmXDF8EQ7DIK4_ypr9sLw8H7Z6sEFq3WCSkbP2NJdDtukeEuP-RZMnxIpQORD4tIuephXGIQk_jIQKSezRaWRnXHqUIyWlbfOGjMU4x_l_ei8Q36Cf0PvthS5w1IBnFnZwJEObbDeDEMeTLxQZORgRT4GOA6A4VuucMy2Rr-8HhSBKut9rklIcSFVmCzEbY6AXewuLVdiR1HcsuyUetAR8MV_VnMmfoJnFanD_ZQpoGhooQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100829835310849277437\">MIMARU大阪 難波NORTH</a>"] },
            { photoReference: "AWCwydja_1je5gcoyrrCoZKLuFXshuR9mp31JamGk0X6zXsig7sTP0adwxSkBz7jziR-b6Ejow5ceBLDIM9NOwLsDPhidBgVqGlfn4PK_uCiGwujPRiBcZOP9YpH-bc2NBdeMVAjcZtqjYpV8dVNwcywoPpGtqiUSY5zh9IHDVuhp9gtQ7DYj_uU-E-4wYy-cWQX0QXfGAzjlFhcUfNYnCZ6Dqnin6bQPfTyoJeNY5zmgEeZ36yWUCvZjfqws6oKXaWOIQbpbG77-HXQe2myuF2d9Lo0pCUl0oN9ECkTBVCvSQULC06e5Fgk6eBYYAZppxlENNbrKnhSPiTpBWdGsQhpNcEaJFysKnQlUvQqJxAJXTf-pHgokhuNAqB6Zb0Df72AtiRRHMIdiJ29QmHfhNZriHtSU-DlbieXJr0XtQxjqaeIe5FSXw1wf4GEHRS17UeO", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100829835310849277437\">MIMARU大阪 難波NORTH</a>"] }
        ],
        summary: "가족이나 친구들과 함께 머물기 좋은 넓고 쾌적한 아파트형 숙소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["취사 시설을 갖춘 넓은 객실", "가족 단위 여행객에게 최적화된 공간"],
        tips: ["주변에 맛집과 쇼핑몰이 많아 편리해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "1-chōme-2-10 Minamihorie, Nishi Ward, Osaka, 550-0015 일본", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "https://mimaruhotels.com/hotel/namba-north/?utm_source=google&utm_medium=map&utm_campaign=nambanorth_2511_gbp", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10110503516046307181", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EB%A7%88%EB%A3%A8+%EC%98%A4%EC%82%AC%EC%B9%B4+%EB%82%9C%EB%B0%94+%EB%85%B8%EC%8A%A4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "프레이저 레지던스 난카이 오사카": {
        photos: ["/images/osaka/info/accommodations/fraser-residence-nankai-osaka.jpg"],
        placeId: "ChIJEbCihY3mAGARrjQcyq9VFy0",
        placePhotos: [
            { photoReference: "AWCwydiesFSh_hFouLAD6zHHc2yTuXntKTwxQA-qKkUT66hxnWTT8EKWh2jotF3_HGRxTiGGK7phLCViEm33fl0GbCeYCsjJ0oPBqehMBp2dW85gZRFloYwGA4IEDZSVWUPTr3lFhzTnYC2cQgT2oVTWIaF1sljc-WAzZociWLtdiIq7MQ0Aff6yGeAtfsStAEvnczAJnVQ09dhU5FbUrefngCUnqT25GSZbzo5h6hbW_RI9oxW80SMCM625ZUPLp5yr4lGjMSEl1q2-fecmTxw8cXFnrRXllv9bCcOmmQJxo7gdffUHstMOdkZN1-ZwPp-dFREHHnCJJhRZ18lgMWickvgPvaSZjwnJlV56BRSm858bVIKMB1nVemmdnvctGDOz0GMvW6bI1ZSrpVcweczFzBug1wK2kjmShXomD3s9l14z_2ia", width: 2040, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110980329352600439830\">フレイザーレジデンス南海大阪</a>"] },
            { photoReference: "AWCwydjTwPSS8bWsTI2gt6_Hr0_ZmUWas6lotfPeYZPrVfmf40HQzjGpzVTilNohet8eUOCUSiwV-8GS2AEN9mNa6w3J4mPCEsvjBbKsitjJR7Dszk5b_QJxTZmjoaIogKXeYRCjXxJzL5n0aTHSSRQWhoUd0p2lXpnjlxikwyJoHw0V62nMYegXGpm8Bg4c_WUg5w3-MidgchS0AzW44SvfmPxUtnbqpmcBa4WqxvU1dBqCdWEeph-vPe5KIQNUZZFya83HfFddtuZ-driiCtxl4omOEa5h70j4wiCmlu6T1gKO6xj1nG0HJC3PsQHoFbwRRe8CeWFYGtSFVrA1-BJGufU-k_c88ayOIp6mtxTf1c9WDDR1HvxNR4JFR-bNT1F7vdpaaoKQxO2SV8oUMpQgFh46QkyjMCCqCVwL9zcj92rsf3Wehl-Hqt-ZiP0ycA", width: 2500, height: 1355, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110980329352600439830\">フレイザーレジデンス南海大阪</a>"] },
            { photoReference: "AWCwydiTV52OXawH0ZkZM6miovaIA1JSzdM6XvyClYCekzV928_Hhf-ATrs_5avlLmnVWfTMr20nlB4gDpVhBao9JGb_VmVVrXFYdO3vpQwQhQL94ReUh4Xzx-0ktNF3SUyOodA7dSNVzL0EmqszZvUdmDoAd78enhGImHCREuI7gCOrHwLm6XS8rHxVa3K8HYZMZMyEjBH10Fnw2RrS-SRdGjJAQBQojuTpvHzHXUlroSBx1I5nEJ36K17lyylCBCY5-RkaXEfgEI22m7gItjw4uvLyCo-HE_ybMZ0Srbr0D8tVTXfhBMS2PF_rErNAjlxj7nelh1E4xEPtlqqFQyoF823q9a_UCyzvgHt0poaY43W_PDLGY666o1aiDEzlDx0ieyxY_oNypNRFwuAMEufvFmfAUsobzsHAc7skc5U_270QRIqv", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110980329352600439830\">フレイザーレジデンス南海大阪</a>"] },
            { photoReference: "AWCwydj47J5V-WqjtBjIuEYpK9Gaiy-LJQ7ZgyIbLugqYwMgwu_OA8O3Z6hEV9UGoenYOxQVRvlbuZXaK5lA7MC3pE_Hl1CwoDoJi4EpcxztX_s6Lxea6J9lglAtGKAmaGHeE-s5_L2y-w65tSavLEvsu5R_5f7Szqlcp9n78hd_FMbulrY-FWB_j6Dni-djqCTbZ9G-WRBUncSxdpRcyG1QadeA7Ev3ldU2bSetaVN8abHt3NFKF1l0ONIr5VNYdhxWs7W4wfZoiCxOa-h1wGqGzH_BiblUhd1jfNvFrNe-bVT-hBA-r5nJ8CK8YgFfPKXNLaHTcKPK6ELapx_Rpn7HSOrsQmENhcDb4nSwdPFm7_nsxkQ7kA3k2nltBx6rGIdfkix51bIyKlhiyDfiVNcoPVN_AYM_as-dlWG2WECG8DL0IQ", width: 2500, height: 1667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110980329352600439830\">フレイザーレジデンス南海大阪</a>"] },
            { photoReference: "AWCwydhW_mLfew5nvxxIrS4nGE6JiyWrNrlrs25_BUf9tB_sJ6Yq5LKeIBMIRq6-n4q67tvnvMC1le_1V-BQF0sdiN-ZSejMbajeIH95-XE0JBZf2FIUL_R4WKBm_wMRAZGRIbZRy2YUjk6WomkfZLFlXn3yH4vTbY4IgMJ6Kj5mJQoLIhFqE98hrsGThZTq2lAgy33Qai9S5EWYTXWRvk0XHKOcOsB6YnPuJGwRI-sC0gAWPOi2aqgwvFr847ir6cQjK2zQ1uQnJsCRexPCGN3YVQWlphHBrLh-QDExtZdV3xVSw9WA1Dnk7D_dz721_YL_6YX6cKtGn7qvyj43rg_RbaLap8ChcJulL3yrxGzwFuUG-uhBdfOGWUUXp2rjrZN95NjOFeU_P9j-6nkoKVf59RcfIJmO5L0LszIrMOZX_PrDgQ", width: 2500, height: 1667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110980329352600439830\">フレイザーレジデンス南海大阪</a>"] }
        ],
        summary: "난바역 인근이라 접근성이 뛰어나고 장기 숙박에도 안성맞춤인 레지던스입니다.",
        updatedAt: "2026-07-13",
        highlights: ["난바역과 가까운 편리한 위치", "장기 투숙에 최적화된 편의 시설"],
        tips: ["집처럼 편안한 분위기를 원하는 여행객에게 추천해요."],
        checkIn: { time: "15:00", note: "숙소 정책에 따라 변동 가능" },
        checkOut: { time: "12:00", note: "레이트 체크아웃은 사전 문의" },
        breakfast: { included: false, menu: "예약 상품별 포함 여부 확인" },
        amenities: [{ icon: "🏊", label: "수영장/피트니스", note: "시설별 운영 여부 확인" }, { icon: "🍽️", label: "조식/레스토랑", note: "상품별 상이" }],
        location: { landmark: "일본 〒556-0011 Osaka, Naniwa Ward, Nanbanaka, 1-chōme−17−１１ フレイザーレジデンス南海大阪", airport: "공항 이동 시간은 교통상황별 변동" },
        links: [
            { label: "공식 사이트", url: "http://www.frasershospitality.com/en/japan/osaka/fraser-residence-nankai-osaka/?utm_source=google_map&utm_medium=organic", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3249159869669586094", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%84%EB%A0%88%EC%9D%B4%EC%A0%80+%EB%A0%88%EC%A7%80%EB%8D%98%EC%8A%A4+%EB%82%9C%EC%B9%B4%EC%9D%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
