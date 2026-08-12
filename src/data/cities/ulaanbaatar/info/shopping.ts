import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "국영백화점": {
        photos: ["/images/ulaanbaatar/info/shopping/state-department-store-ulaanbaatar.jpg"],
        placeId: "ChIJdaLnf1qSll0RkOQm3Pe4rvU",
        placePhotos: [
            { photoReference: "AWCwydgwJmiILJ7kC7T2sSn0M23IaM0jLBBqKcs3O4cGAXYrX27NqpXQ1sEOzIFpDafdkq4tY7i5EO8R3zEF5tBguujcsDkC1tox_xy7cVFIioGEn1hadiZInTFKRI6KJmMMXNLjFEN47Jjyx26xupyT5uOEjpXk9bi_D27wKhywAGVgS_nONfw87YrCmpIPmV_TXZLd99I-22uor_17wNp_HWnyKVX1w2b-Qu5LH5ItpQVMDxf5ZKaflGR50lvW1ItQbGHueYCiI9jFgTHdlsUjMun8ij9e1eILpCamEoJH7dZAIAHWXO28yP8pHDnx9JHMkWkaqN-2jCDgKtqtccRDKsyGvjzW-NkwtjZB2a035uBRYrDVfnSzHDbj37BCiGCai_xqOQxeWfFjz4tuROpsZPsnUKpXz62kxa7Wnaf5TXGzM3SB", width: 3511, height: 2340, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117799548398037315076\">Edward Asquith</a>"] },
            { photoReference: "AWCwydj4eBj54FZEego4YqhN3WDF5Ey66qHuCP_SXBnlSK4GMXmhck8WziH8W6Xq9cPj2s-FZjsD1ALXsC_JQyQeiwQHRbX0ca-_7NZh4aMBd08LQmt9dUbOW4xrILySMBPdaeWZo_eihvg9x9QPQarbcZVdkA6W3EeW09eQmJvLr1a6yvBOodPDnuw6J-RtooAZ6DWln_50_9kVYY5n_0Sq1TrbfQ1qp3zs1FTzwpIncbgZC5YhIyyq-14QjwAbntGWIMFNVlqCFrpfitpVijWLLe-quLOYlvJl84fAT_056-ZY_mbX-mPQm13sFvaMWnABx3YoCGt3xoPvleBEvoTr2BmTTj6ZrJSEBkFa6r5yEUz2DfdvILo_9Uu1l7nTMsqq2-d34-J1CKX4KoZb05XInXIT4lR29Vr0nD9kyqHR1EzxqpTk90OUpckdD_kYAerA", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111477102713665679749\">Jeongmin Kang</a>"] },
            { photoReference: "AWCwydifBUgtWPcdHSQijmRAL-py4qcyxQ8_xqrnnCjFhB5DgWqxjVHTwEQ4vkx4IYFf_4ZI4yuuW1-GxM_8Rkp8ttzAU48C5tbt7iTHkqc27cA0y7Dv2senZnlIh1OXdmgnN4AQR42ajvjfr9p3NC239alThaynLR2DNyRcTzFO1P0Oiwew87WyA8W2NeElexSktEjTPqrxm1K1MB7VLpYCc3Nf5BKIqdQepotFKC5zwYA9sOqeBwSobFjNzs6WOM6dIQ5_hLjse4xd7ldLWXuCQcYWuXkzgym0D89WFy0GZLQBAI4aTmMLJLd8NEfd_1mZp93thSeHvrQesmGbIfcEs66EmAUV1l1WE92RhPu0A-I-xTFc2yNzZmOdZ_TtJF1kRHBj-PYsIC0nXjnefwwDuUbpKpBbrxXljpCCMjTQ9wh_IEE", width: 1022, height: 699, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111237231064661599981\">Nomin Fashion</a>"] },
            { photoReference: "AWCwydiBtGFTHvxGsOrJ28YRRbgsX6GC-c84ReePqEFq0hadsGXwVWB0-lWoFBeFSmDNU36Wdyg0cIpJEAqTav4-Aohtv_IICFR5shIKP7QGG-XXNUSiHDQB5JFm905yQvG_9AAd1FTfM_HZHygI1nZs2gXup2Gt-boNvcif97CBZ8hRis_2ib87mR5FIwKcQZQ9-QH0kdtbzQLTdKOJWwdGA_4pHLV48GM8FB2ruzwP9G_OLWksox_fjbwjSlpLuGolYE-uVCF6MYVe4tNtQFaLfjxnGczm3Lh-uNZIO9UEKyYjySqhVcv8N-FhThMtJRBZtr0J6qXtWBn4Hr0I-kqLqCJSHRkU6DOC5u3nJD5VhMOP7khvfSKeRuerAxpKP1y2XaBBGKMQbIWNo-wCLFyA-A-02XN58eSyZOMYVkwnZPI1Sg", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100992627560841913279\">Ming Choon Tang (Ming)</a>"] },
            { photoReference: "AWCwydjSDePSzo6f79vx7ofSy7_7c12LDrj_xcK7GRHf2Mz6JX_t8gFh-4y2Pxv0LqRu1SpDeIADRBJdmzum12vD7cl2HUT-aRhUj5sNxf6EGvC7HB3sXSRlGFUqX5qtcwfYq9JBr1ij9O24et503uZgMsqGxNfUfE1QAan1vuwV2Tb1oqvx96nsDqpvMlp5NocANkgZcDudxqY_-9aYDejM4aNFKopx8WkyZfXSGnV2wcvpkuPvOab2aeVw0xue-DbQqzjjUhx2f_t-yhyIcksQX55X6tqcHECvmeKswDAIdI59cESFOdMNMPoFbiLLa0n6yzH3T8PytnY5hmwY0xp0IfMLH6ck8UB-olMZ2oSCDi_-A-l6-gU2Fd-MIFQVQucDVV4bbdVKiPFF9zULvQmBUYCXaySK8Mt0bdSeL17V4FBk-g", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105877211565266529251\">Mongol Expats</a>"] }
        ],
        summary: "국영백화점 기준으로 확인한 울란바토르 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["기념품, 캐시미어, 생활 쇼핑", "평점 4.3", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.nomin.mn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17703290559929967760", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%AD%EC%98%81%EB%B0%B1%ED%99%94%EC%A0%90+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "갤러리아 울란바토르": {
        photos: ["/images/ulaanbaatar/info/shopping/galleria-ulaanbaatar.jpg"],
        placeId: "ChIJx1392tmTll0R-DvurNDkWFM",
        placePhotos: [
            { photoReference: "AWCwydjjEyeKa_ARrJ3Bnf18jvC65avU0c2UY-XPjw54hEl9NK2vnfdb7D8Fq45zQV5xjSoJQfsPJSaarCk82oNISIBYKouNU-kblKpzB6lMgyEPdAHNpIVqmNGRBIpGi1hUJJPOZsl0COkdOhN1Z3HK1y_8pJcAU9X6_3EblInId7vl2CtlG0tqXkTKKJk05uWhLGuFbJn8d2Yxl2i475jPDnuHHVdSQqhiomJ-ShSAF-4Fw3EeE0HBfHOlSSjbxx2u1SfkarYxgaCugeq-SRL7gGMiuUJ04_w_VjM-wP370wfEiNU_FvSwFI25oPuZHLSsg41UNi_wO4ISPrzTV3oqUWGO41A6DvsFbOJqAGjx6y78GrJIYK6EPT_3CLnNpBzW6oara5hSxUv10Cz_I7JbtDWZgs1YvUrl6fQO4Mra4lxjXhNT6sGPwkSnluMJow", width: 2048, height: 1152, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107150384266089838490\">Galleria Ulaanbaatar</a>"] },
            { photoReference: "AWCwydiqHGJRJBBhpTu9scqpN6eCGzkvyKTTtvDwIEzEoXmTWHTZVLk09l7iqKTsWsSzjvzObSSe9lUcIlB44D6bRIzIPUjjoQeZLMBXtdFoIZ4YcjC5ESqD64flm_4azrrG7WlUvpbJa0kOCm82XVo2zUsDA5sX9wZPaRvLBao8J62rLLgWYUnp1_zqcsZ0Jg8AkwzvsOIaPyNwmfS3ToiY3AV2mf1uUaeL1wQKuQZpiuM1nXUkn8ypwBZe3zY6IBzEpv0aYlpPmFV0Z0BixmQjoBvSQt8IxihWu0G1rTSFYu8csys_5LTrDOjOuiRciHd6k_Cm3vMlESps1R3ifeB4lZ5itvvBN6e_kIOdUWZ-QO2J546Rqv4g4rSXgCFi0OTrMuwanrfyLH98PZQMjWFfERik7Eqos1Vi8oMq_N3lSVAZvPlp", width: 900, height: 612, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101318693262873297394\">Saruul A-</a>"] },
            { photoReference: "AWCwydiB6l73lEeEnl-2I0Z0_AELqq__X3oaOEYg9np3hfdEUFvVBtERmXCH0bboxhNgHyjlKFG_uv2A7TbFz78R3qDiZ3thqR1ubLOpMfvVKkxsPjf2ULeIlgzFtrdtTd_1nWdqV4S1QHHacq9af9X7V_GNFRwBOEWevfIChGgnOaHjXkXTCABAZQ5j-ZBSAHdK56N33DLlhFWOvVYFl7ZtnHPHbcPxeZUGelrjGbPSk-vplFGyyEyJqACcadDHZ2-o0fabdZtlaclTHczf5AYBeSFOyjzGfljSdbvbk8R2XYB94b16ZI5wihsxozvUV97GG-l2z6bJhs37vtYdmdV9OnnnsCsvs2xlbFlHaL0fbmGoKT7_liDZNIuEQc1TOjyTI91qKySwfbmdu5QLnzs0XHKbzw_YYk9vCBSk8xwCCy2hf5yO", width: 900, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101318693262873297394\">Saruul A-</a>"] },
            { photoReference: "AWCwydhYZ3123eNuHWUOodn6cQu2txl7S_LSD71GfcEt0UseA0mzg5ZhGL1JKzSx00S0DOlmmcoe5pn-br6kw_auVxXrSo0OWWEW5wfFexMzCAULLylTqR2s23svftoEWSI45nLPN-zTdkYakqI3lqOCrVrXlFfZPO1ITNO9W-uNyiiHGOCwmAV0VaOCG5QdHUO-Dq2WPCXxwokfz_WOl3K83w6t5c-Gc485nUe6o3oyCr_hzXrVpcO2JFlzlduL4bmmulJaMP6QVfsTT3PFQ9XsCo3HpFcw3EuCCKVrBCGy9LYWPcM6rlFFKDBG9DqDPhUlJz-lLnm1NS4og1qyN839E3Z6eJaRdyLdszgEPX5icVzvvJRBw6r-uwF9CsWBbR5SMg-YXXHnxM4iNRTxnOM8WxGverI2yn3cwZ00hyzEsKSwaQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108174538295370587419\">Edward Kuzmenko</a>"] },
            { photoReference: "AWCwydiQUALprx_dkEAjbWVZwVciEUxHt200GFt4FRhfTILWRXN3uhbgTfCChiN9RHhM1HVEyJT1mTV8BIO0SC92ZjhBSw2dg7u3pXpEn4pyzzgsaRg0MmBRb9ZQG-ZtN0iLxUFpMBolFVTqmgw0dI-imRcrHiNjpGl_pAoHqdH4onifH_OQgONDUD_leRjg10WffbvJ_06GWR7qjw59lMf8inSgRFFNyCL1ntX3n0yrA_cmsclOGNJGs3F_7g0TOmQZt566HVJw2UlqQKImCeuup-UymG68YD7_U_x6mCw8J_y0VWXKsBXK6ZG8Z_GJfzSZSLmnvKOAInXTEECIIjH61u3r4Uv5h5dIdG72agAMOihicvM1w4osYA8mW8io75uEg7BTMK1TC9lQ8Iv0hmr81YvP6kEm1KsCD3Tn0ZRyuMTb8fE", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110808778111308925770\">Bat Holboo</a>"] }
        ],
        summary: "Galleria Ulaanbaatar 기준으로 확인한 울란바토르 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["패션, 카페, 도심 쇼핑", "평점 4.5", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/GalleriaUlaanbaatar/?mibextid=ZbWKwL", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6005801688004180984", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%A4%EB%9F%AC%EB%A6%AC%EC%95%84+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "샹그릴라 몰": {
        photos: ["/images/ulaanbaatar/info/shopping/shangri-la-mall-ulaanbaatar.jpg"],
        placeId: "ChIJ-zcPTCqTll0Rxeupl_v5ZDc",
        placePhotos: [
            { photoReference: "AWCwydjj0gcvpZcjgsIPX4Xvb-8c_wucsOvGLfOW8WyqkxTjcM9AxMykhn4Ghgn9-vvvJzcaF3OexiOVzfFTFohLMLa70GrXmCS91ajRd5oGEOWByZiLMn_IUre-cuOLYBuox_qMgEQQk5ygIiGhzlIhE3acfE_XCMPOIDU8nkyLXJ0WKv1HmWBB7WHmCf648nrV_ciHbkCkpWgCfKFP9QP3Ri_sSuz1gjQJU3uYzb4cj2miRP1x4FdTu51eEFaSqr2kRPiu9RZCm394YwphRSgwX55WRADtfDM-mtJmRCX1dvLHNOYXiGBrzj7-qd0j8Mjimne7R0ymCDHR7z4ERAYy8mtzAnLlwwC4ByG4KhEEjVYOq0dcUaMeccwTlkJ4fcJVnFRBiYr0L8jQWO9CHOejeIG-0IPX4B1PhWkknx9D9nc-0Fx5", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117383036378989604044\">トホツヤマサキタラシ（KatsuTokyo）</a>"] },
            { photoReference: "AWCwydjEykdLonj-ScCuHGtmGjXqRoFJLN_r452nPwpEY0tGBb3vjld0WFOkkKxjp5URjcvtoCweLB6ZVcLV9rOb3PlOBHfoyBkOw6MLLP1wU46stX5Yyk9MYuKLPHrxKitEeaGmXdfxvuKZO9_h7EqcpwYZqLRlTV1rE1xtLWC7XsaDCwthbVTQnxN7p_d4ixg3k9KQZOLjFINP8w3Yh80ZaC-pMh947gs3vr5qvzvZmuE8YiC1E571TDX-ENWgnHp6ni3CzcxHnGjUqx-cl_ydtYbsLx6I6mfaJv4x1sl76zmuq8INYgKDIyPtzOdGrPpb-NHh1ONg4I0xeAkRnVnUC2YC_59EFOM34ZfKaaSKcWbNi425MEaobhI3y02R2V5_mb1ltdD824_qy3HvSTzL-sUxoUpo-eJrbwYjfq0GiGs6YQ-U", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112814383326826162541\">Munkhuu MGL</a>"] },
            { photoReference: "AWCwydifYmW79iiZ39MWawsU8liU3vX7TOL5BOSKFBnhNP0y-R2TERosoPngVIjGW40AjebiAqNTOTDCa0evqiftf3Pblm_JIDqCuDQBp2ceKxmqJFpTK2uOqe4dLXTuk2NpqAwYfm3Q6orlZYb9jlQqByc3jW0nPo_QFDf-jzVBSUj_cHkID20hSfgnJJ6rPkdeOAZb6U1RxXzmfarWz_N46fmN1RZeWAx0ITZMUfRJQA_vMMdy8A2j3j0VNdyixBWK3sKWfC3RsvSprz3HX2Q00RlaIZnSVCcY3M6kUZ8DvaD8LOL2hvORDqQPP4idzfPbYSlYbyjyIPwtiwfl-6qM3C3jL56vN76xL5_pMpaFINyuk3wIU9f34CA4WQOIFUqQa1Pb39IhAn6ZjP4vHw4Dj8PADqIrZYf6fIkuUxGhbpKcsA", width: 2736, height: 3648, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100179457560619462919\">Andrew N. Byrne</a>"] },
            { photoReference: "AWCwydjkSro08qrfwp-_7s_c-cyjU2Me2pnp9ssMPbl0KJAyRJUK-qxvJch-soNSSF28hQTJqKigClHu35-8WiuoPTBIhWQyRazElvXZvYE7aaFGLAGQzuDje_JuXwInvMYjBhh9CSFAUo-Cw6bwnX-la4GUiGrhk3a829QddbYbkMBEvaeZCleH_FyqNWUET45dNjIXKESHNxPa93PsCyaG5YYGXJyqtbpMabRs6aNV_JXdlkxVT2jEFxUBm3KloIdgN4cpfuosO_RfdTMDhbg8suQJPdo0aLnCjqU-b5Yx9e5nNzILsJ3q9A_W6t9oe-PMF5nJ1_MFHZb2gAvvsz3tgQCSfC_z9sM6RJPuDRcd2Jb6tbFantR0THmhoQ2x3dE3NdRAC_7y0-PXNHVDaP5Dlnkgtf9kZ5Q2j1BYKCk8g22qMQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117383036378989604044\">トホツヤマサキタラシ（KatsuTokyo）</a>"] },
            { photoReference: "AWCwydhk_jp-w60EUyvt7fJy95WX-I4-9nKdDCWjUxKyzZEnRrwitPEilofJ8gfydtL5HcOHPPoIBvYGAQpAufvzfHKCoZF4HUEm6awMfIHgOrKjiwGKyoxs1mL4fRqcdx_gaH0LnjHaqC30I_koRL_BWrVUvP5Zatg82T-x4U7m5LaLPzpHwguY7CVW2hmY91U6qcJSMa6ic2wbMPrrL4_OhSqId5n-vqe-MMQYDrEOU9YsB3pithHeyv7UZPtPfkpydRbealnlq2yOxSsT-7l_k9XlEgzH-IPZOWhTIOAOv8OWSbrfi9VR6xOYxpMCjEkKMx4qmNaRCKkBK2puOW9oC20FUorwtADVzR4pTXdNGsW-FzkB-sh-GLNTVl3xsofpCNNbS7EeFm9LC8OLn3wODQVe-xQ0-7ZQ6vVeW_BM2n-qRg", width: 3456, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101930322293220511953\">Ganhuyag sharaa</a>"] }
        ],
        summary: "Shangri-La Mall 기준으로 확인한 울란바토르 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["브랜드, 레스토랑, 영화관", "평점 4.5", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://shangrilacentreub.mn/shangri-la-mall/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3991590028733705157", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%B9%EA%B7%B8%EB%A6%B4%EB%9D%BC+%EB%AA%B0+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "나란툴 시장": {
        photos: ["/images/ulaanbaatar/info/shopping/naran-tuul-market-ulaanbaatar.jpg"],
        placeId: "ChIJe8YYDiiSll0R4kyxQPRv0YU",
        placePhotos: [
            { photoReference: "AWCwydig2b_Mc3aPQZJd0Aii01tbQHjLXaF-VEWMVwsGU2iDnrOHD95NqkRx5TCbQgpoLqa0_nHS-vJQRazJwOg3Fah3SIret_GXMHyjh6q69I-HFU5wqBctRb6pSJ7-sVcp7BpQgNJG-QZG5aCttn9u6DbzSYzHJxSN6plUwVQljaJ3UtvDPZUB8Yj8Uqjho2lvASRLUCewL2vkgG_YxPnMdCDgjgmTa_oP3-QXCD3CSDeS-tceu_6XPWPGEUonqebC3ze8V71hHBP8f-5r_kPxzlbyqeGfjM4M-AzjWPLlz7d_tCA8xPxNV5c-3YMyvlE19pj7DrNOi2zZqRgz9kTdTymzoQ3S8jE9VcCZGwsd5Ttv_PfO11JmsIsINDmv5YJyJ88aVFfJLPbNsaJ5Pv6u3hQmSPL0lTFgPHszIjKYItAcaqZE", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117383036378989604044\">トホツヤマサキタラシ（KatsuTokyo）</a>"] },
            { photoReference: "AWCwydg5xuQLUoT5Qr_WsYN-HNQXmrwF3Sb-05o-nsnwSv9XcxhCu9mVhBsxfqcY86pNHUOjT6kAS96n4EmsOWOeXh8YcvzFmYki8hgdUV9RaNP2oKKFHfOIziLQG8WUh-SdS9AikRQigczMOM1-0FxQIAXvo9ibQZDmm1NrXglHNv1JRr1SsKNoei7E0a67lrQf2IF412pEwgKTE4gxpv9OJajiGfBe5petXG3T7_cefyvi2irVTEvXafqdndiH-LvSiMtAmlUcWbgG_fq_ANBYdRJvPzYefTh1eDCI0Hog4hrbmtPTDn_-gI-F7GNr9TQnP8qIOG9KwJ_XxzTnz6GREdxcOY8Xk9pTgB7sa_G1lwl6fAAhj8E7NG7X3m72NzYC4VyQFp7AT0ZMPZSQj9dz6rb3Cakiqg3elubV6avHOFEaQjY", width: 3456, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112241149333614883659\">Almaz</a>"] },
            { photoReference: "AWCwydgUJ7Xzc6ZOkgFsTQ9EEPHcfMutte2t5ko6BW0ghciNFPhft27NzUtC-L4ae2fGr0eQlS8A7n_X8pEF01-WfDpOfZpqPzl609H9MXs-XPEQeVMoukfQ7oXwAGOWQ4gt-ma-N_j245K8g7yTugJ52Dg_QTvOVY9rhHOx4C8FaFvg1w5hIceb9--W0Xe2mdwOxWtY4MXcs83xxKP5JKMq7u7_M_gn9gnIhS2sSm918LrP655xCY3cNsUdW1kx50HJ8zk6BojJSw_-9h010cq_KUJK95x8P6nO44IRsK19UbpV8TzykzstgAPNElI4wcARyR2MdkVEnpj1eE_YjTYS6Vbrq5dZt-gDrudvHqnFImII9wghT8XBZW3VqryaQsIR6FyakJd372i6JqnWHwHyC_RieCt4wqG1CjUFulM0auw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107828689080488250889\">Sandy Juhasz</a>"] },
            { photoReference: "AWCwydiwDYs7WIzYzM727ubr7hHYAF7shF3simXFIVOdPuFfd_gHqyoS98J-aZOQODETS5u31NMhPRjRoqGWD6G7gxpR6909BUyKbECT7fyjO_vDtO78Sp16kLxDES0WKQcZ1C_azQAY8H4XICHRGqzeIExtepG_FVH6E9wlo5F4FquigVURDTcHuQHy_wpDsgd5zAH1f59H0KTuaL5UnnGwwk0lB5OQrvgBu8vOCkrY-0jxGwMnwnXPYjeMOEZGEW0DZUY3GkyKtjbqjb0n3miE1JRTzFqwZWAUAIsdvt3cALcaWyryt5xMBaQO_ZDOsJ4oBxHPz84BXegChyN33rkzVcRQBmI_y-3JJfHxcyNeQunij4wAzgzZjudZ5sVrnt9v1NE5Dl9f8j7nhX8-TXPP50PlshBHKZ_v4e84BRqB4xHDRd3JmucmEIu-tUu8LwUy", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114755571946195532260\">MonTy R</a>"] },
            { photoReference: "AWCwydgBioHB585e5C4zbjkmZxgJ2XXvDKpVJuvYoH1W3jkNioq7E8wH8ZQFKU_OrEBcgNga8Ei1Cx0RQlmt6syWdvEzWBMglMqX2QQAdh7eaCSBh_RgF-brZyciCFoVrKNUDFuLEr4ylJHpPKCwpI9_GluDbJKkdTC-dKdCsLVPGb67SeOSN1P89J4t8ehLIangK2Jz5YjojbbtmCpX5aPuNvgxZNvIC5jCfvAAELUK4gcYWfw8czAmGLQPpUFgjFIDUc4sc5KPLgfCT5s7jIfTWK25UA9AliLJAu8elxRiYjMdlZT3-GpqoTorE_YY0ommSiIbZQKEt4XlNF5chlr6k9aPo7qU2xfUS8FePLAHzf9ismKS2AYeLA5Fg5Ezb8pY-3J_Wyvfcy4cBPavLKsTwrmKZYhuaaJ69DC4DqtuqHc", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115950916528104434944\">Tseegy</a>"] }
        ],
        summary: "현지 로컬 분위기를 제대로 느낄 수 있는 울란바토르 최대 규모의 전통 시장",
        updatedAt: "2026-07-14",
        highlights: ["전통 의류 및 생활용품", "활기찬 현지 마켓 체험"],
        tips: ["흥정은 필수, 소매치기는 주의하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 8:00; 화요일: 휴무일",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9642611372025007330", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EB%9E%80%ED%88%B4+%EC%8B%9C%EC%9E%A5+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "고비 캐시미어": {
        photos: ["/images/ulaanbaatar/info/shopping/gobi-cashmere-ulaanbaatar.jpg"],
        placeId: "ChIJ2bdAy3STll0RGKxcbb39ErQ",
        placePhotos: [
            { photoReference: "AWCwydi2Fiiygy1q7v5grPdsM4lRQEx6FGkJpjewOPEXK2NJ7LYC99M2UT9o55LKXXyfXGGiuEDjpybWFpGOcbY8UdlnDESvVI7wyGaiPDsCojZ4rFtHlCppDiyhJ6mmkts3JAxWiNLnf4t19CHHuzY0orqStbVEaM6uwMf7Py0AWXCPaTIgl4LwejGmPJqTzEpsue5zdKE7rO932x_Zn6iocO5D7JVhc4oG0x3OEEj_5NC5B3lrH6EF-8gJxj-UjBrFGiSudDxMLa_O0bTNYdBKkd66w3_Q8zhoL1mQumkZi6z506BoFX0IdouGEl-YW18iaoQJadT1jS2P8HUyEaOTYsg_iP5Zj6WujlgQAmmTselXZ8df1sBlI0tJYIXvkn7OeBYidJPmFLmq21rH2CHcAIQGEfqcnpp7egEW4r_dPWk9gbjZmdh75K-ayY3ywU0P", width: 4800, height: 4231, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104671726865276008185\">GOBI Cashmere Galleria Store</a>"] },
            { photoReference: "AWCwydjyl9UGoiduyr6x4-O6xlz0Hoqh0h4mWdcKZJPJIO_qO45U231wpddN0JEdYiDUXioy6Zv5m-vQ-Jq3uGs2aLB_AixztB2HwbHbm73PAiTkIjNKMeRVuI6RJt7nbn7ZKNaluz3wr8O9XKPoCgI5IMsWB246iSWUVdKCDCXguoajqOrw-Wi4mX5Nj10vOeVUYW6IOQEgUrCVh_pjQBPfwnOBHUlcc11Hkp3Qn00nFkuea8-dUkzoCIP7cS58j7dP2JFcW1Y2BbsyiJ-FExKdWZNCRdTkCUbCHPY1W7GdPynZjiPS0pu_TVwkSBB6AYDhbkplnDbcnlG9j4Nl5G015tYq8yKBnrGjcfLxJ4NrqAjVAJnu7AshgMx1NbxGSCLZrru-oNJuJ9Gx3FFEv9yWnnEbmuJ4jsWTUznu_3MNS3K_zUMr", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103507200342603841740\">Dayyan Shayani</a>"] },
            { photoReference: "AWCwydg10Axgb__VEvd3nPzp9UBESgIg_W1sQpeesQ00iGFaaWbLW4cehQaAig7W9R2C2aUAb48irx5RorHajwWB87VadB5gdjZ1Z8KBayuFVKtb35x5OCbNfQF24MqmZ4GCYPEPza8spRRIHx-Hk5oJw3A29_Fh7u4XiAxG7jw6tvVPJItEz6Q1RBFv6Pj2N6Tmby6ZL4K7C2NjoKYXYPxRAQm3SVzS-Z9XVAaJ4QQGC62Df3KTt1geXp2e37Gy3GkvqPHP-UXMgqrLXxdP2eDbf7Gx6hQli55Yy55prLFByV5Mqg_uQHncYc-31h6XC1STYqO1NvgamaOAGjP60uFpm8E2nitKfZQthxh425vsA9uhnX3DyRNQOSA_4TGYuBo7XqKXOi5QYrlTrksPrC6isxJDUmxyF4CryWtzhG0Gk5jang", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115950916528104434944\">Tseegy</a>"] },
            { photoReference: "AWCwydhBSjWOkYQFESDTsUY5w7kX45wrNaDfsWsyZm0rxkWDC5QwgaiCdc3XR55_6RLJA57Au_R-kYvGjrA9SwTn1uHk0NftL8H2VVXvvIq7F9dldk6ClHU0QYQ8brq9cRV2T1omIUlELrKMYZfB-GTwIeQS1IKUcnLHxES1U5PTe18b-jadRzqf8rbBNuSgPkfhS3s4DzET-HnRdHyyki8Kw132Gyy8n4GAL27jmPOChyA9kWkqqrFNjtQ0w1GeDpbUeSKWtDsDd08hYf77oAxxAXqMKM6war4gcFRKW2toB6iPUCVlydEEFZcconwqJEpdOuqhUlcwidg-LlDHrQDxOWdcFFtzOQ-lO1fgX_Tx8WoDajjSrMOjowLg9aVkcme08UV1JkUl-9uWwh0J9tOK8h6HZ58DR8216YpwfiiEKxk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109641509071575878343\">Erik Versavel</a>"] },
            { photoReference: "AWCwydg8ZmlS7SofxuFjGlUdVmFHyYWEW2qRc5fMTBVYrjyEJk7Q9EiScQG21wlKDbyUTcRw_MUlHZX67OpWdGu2aPGiAp4RY0ykVR1PvdTxbkwHU_ztKCT73d_5npNVWUupnR-BIze4Mm3Nv99ds9bhWrwjdH1KvFWpvKNKe-qJlo45Gdqni90tvAyf2yllyNrrXJwgsLwIb-sh7d5rsZZJiJmbat1uKzhhdGiey3Mxs3p4JBSkHgnqtfx25_ltYMHXG26gk3hrAwNuaRud__jnHSknKoc_y-Vs8JiRtvLYJdfDQOrnY32wuRQU1Ubpn78bEy897ZQQFmnb5vCFpS4v7r6d0ouC3_40BtT4VwAjnU0dC9aaOkvV0V5nlPNZYB9nd8uZOVwcuvznosy31A5objnGBgOV4cxN6oHoACZc6UZNEjM", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115950916528104434944\">Tseegy</a>"] }
        ],
        summary: "몽골 여행 선물 1순위, 부드러운 프리미엄 캐시미어를 만나는 곳",
        updatedAt: "2026-07-14",
        highlights: ["고품질 캐시미어 의류", "기념품 쇼핑"],
        tips: ["세일 기간을 노리면 더 저렴하게 득템 가능"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.gobi.mn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3838172254526818296", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A0%EB%B9%84+%EC%BA%90%EC%8B%9C%EB%AF%B8%EC%96%B4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
