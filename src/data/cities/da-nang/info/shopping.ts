import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "한시장": {
        photos: ["/images/da-nang/info/shopping/han-market-da-nang.jpg"],
        placeId: "ChIJDcx-OTIYQjERP4eyjItPspA",
        placePhotos: [
            { photoReference: "AWCwydhSH00uvdtLvc2fFB6LtBZAKjehFt6HxpzGTILhBkNvgysGYWleg9hq_Pk4TJUUCIyDHtM__-OpQNU0rVp8q-igWYq03QeFOGndYg4hScC1_oUqP-Vgf55LQMN_lUqd1o_1P9BtGt_k_kH1v_tRJxvH37gM2zQ2Pw-gaUSQ6cB3juxl_OQo2q_IubMmXBo9DwrczFdqjeBfm2xRQP61sC7EVfSkDJaMQfK7SGU1494IPBqX-BOMpvir70AkLcFxHHN5qlKoq9E2SevNfRKgSFib3cBKbmCoZJeb16RAQfjy7-_A_aT-_nvqIyDo5A6U2lOeecB4zkboNnj7TPjh-nCol6m8kWKwrecyEtiNK9_-xhvOXEbCduXfEcaNJNwe_Je65ftjy5M6hzLMIcp3fi9fcLR5Y6zdtDGn3JKeGMQ", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118247699883116092330\">draco Cong</a>"] },
            { photoReference: "AWCwydgpRxgToMRqhsRqOi_ytl5zeLO2vM_tCdKt9MqggDNU0BY5qS0vWBKDGBvd_uTvJSMfaUOm4IP32c-j_HaciS3IkWLZitkh_Xbl8Ti8BkKN4c_NfIL3CWM-_Fn1YAt4OrhnI5ZA7koDF4flPJkk7kGXUvYOwcK0rjYnh7SZQHsbRj0igzmNn4bQvg93qGVvEdTkP70GhDRZYPBxUMoFprZuZxbi95wsOlzHhg9VTgghH1v66YABvs44ulWsTsY85NgbpNk8vRGQfaYrf53zs92SGdRSO2xBkjw3u_FJH3xG79F2dbHgFD4x-2aOS1NPa-EUtXX2tcyoY1u_H6LaplBHk2juZtLr99GK3iiuJu_1F0SNri-PSX60pMGSzpxd3DnOb5N3WTilAWe6e5DRN9H_1yuWS4rgAPCn62t9V0TZ7Ud8VH5xRx7SZdjWYg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108210766530718620404\">sof sodino</a>"] },
            { photoReference: "AWCwydhqKRK6tveLjyO5JCEAQ87MeTdY4XFgqf1ROor3WaDPwkEvoXHknkf74_KO6Rs12stH8seNVIyCkPLq2rFttxDdJ12TOCtxiHfSuN5OQw3niZNDn85dHwLUUv0uAX9yYMxMuX2NTvBbqPiZirhhwxF_jSmgELp9frFQkmSVyEMba442fDR_EQGNrhRmPI1CdYKBHsNpf5KwM2qwbm1H-DMbBCiapkl-akRzVX_0exQOd8tcBDJe5-y6WlqVgALPNj8PnbLEK5xmdHWTvCnWejqVvgg46e2sOD8MldnXIib2kOamO7H8PpVUndDmR9D-2t2mVXsCl0YPmJrE5tO4Hy-j4kOq8bSxq9hL-olzS52jAw7bcULEduAXNV7n8kw--4IqeO-C5Pi8OnlfOojifUEoIOe8-c4xzFBYPDIFuyd_PA", width: 3920, height: 2204, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114518056647574592141\">Stéphane Granon</a>"] },
            { photoReference: "AWCwydiuXBfiBZR8AL_7izHBElO4amU0_mNRR02LSvXmJvazZaTVSMNEAQm_1D9Ib3fI1DKwanbk4SyclWMHLussNhI7XIGJ1TMYdR6GvvyL5px04e-mfXqGz7BZpK7iUh3QTKqcWUKa0Z6n1U2QiWxgIpsOXg1REuHuBRYw28h9uXTGA_CnJDAXetexmxHrk1f_HP1h8YvErQZaJYYEz0c9cfQw6e3LMF_VSjwFL1mmf4O3syDXwjYAywKESD6JFla9i8PS7d12-B795_X7L1BDW64snVwfvLgNHW51smTRN_nEJHPSubJqR7z_aB8zGULapatpQixmIMy7nugeyybQSSQXdlmeXHewDBBimTVdXVgiE5mm-VTj08PbYhALDYCtDNnDCUgRJdTlmmIHlUbipjk7MLwnIAuPtroSNDb8Qa2hsaDUzHSSEK140xfa5Q", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112924617196913570011\">Ken Loy</a>"] },
            { photoReference: "AWCwydgU2sIkmTcoagIL_CyBeds97DbGmmrlYWzNZnS6yUy2dPlXp6CGvmU9i9kcbQY_3bwOwzXbNPczp85NsJ5IwcO4ujq5pdd7BozQ8adFuOYxYwwwLjdUr5ljkMgVZwLsq8JDSqf-GNzBRgHYLWWvkSZlMV1yjeCPX4UwsLRj3_yYJ2nDaw1SOFtAM2T8sINaW17LCAqVJtDoH04HDB-U7-bpLSamy0PBr98U1FsQg1-Ljo2g4y-oIyAelrQ0dJiC8nBdB2nUt9HZ2hQyQ3sU93JsWddgpkZO576IkTZjy3oE2g1SNrRexTHbxVA-h3LtxMrz_RHoKgPTpynS8Sfk3_JkxWaDMODitewYXj4WciZvmbWIp1z45KI7-RsTVcTWIpq5fiPPtXYFJV1tQPG0atbsAohlzGSm4ilAGj_kZmgBuwtvqBfjhAnQZGOiEAda", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111316508982657926957\">Natasya Wullur</a>"] }
        ],
        summary: "한시장 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["재래시장", "평점 3.9", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 7:00; 화요일: 오전 6:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10426483548095678271", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%9C%EC%8B%9C%EC%9E%A5+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "꼰시장": {
        photos: ["/images/da-nang/info/shopping/con-market-da-nang.jpg"],
        placeId: "ChIJu6FQjzUYQjER39TMpgQVRUs",
        placePhotos: [
            { photoReference: "AWCwydg5u03aKd8ia2yWlMDhO1oCqPUAhMOzhCEsPszaHFYeCL3RWI9QjRlaWDkl94UikHVhR0d4NZXywOZ42tKxOq8efFE7V7jEPSBkeSbzfodNgH11iVofBpt2YbqP-IxdTJ_CkiKBKAHAgtaA4Vjqy_nCLONFv-cgN3gbA3cZeRGRubxWIkTWeYla9G2gf8bv3XgCC012Ghl6I2B-9w0PLHPAtXkGT6HGr02XU99AbploM8-f2gF6uZMJSUy_a_MTgawJ-2Gnc3PyMGVqGgIG2YUk9X9RDp_iot9vdX0jdDcFjm_Aydg-LBu9xyn0quf6RsTBYmXulvqAb-6jRyW8g93Nnqy2snd0FbWxZk019CJCuverDo69sIoBFa4cahRhabN_CdKuWcWMglGWq-ElvPshlEzIMcF3yvmtYuF2-BC68_Ocut9twgW_mMtVPof3", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110418734573897940977\">viktor vosecky</a>"] },
            { photoReference: "AWCwydjqRYDgmv7xJwhPid_AOQ_zTm3WnaERDLEVqn6lyReC2Lv5cpHx_LUZG1195TQ7d1LkywK6CrmlzR_PWYFpC8CbmxAwi84A81kBNrw-7F-4zstlVs2Eu3X1xUteK7R0uACzxNLAr3ngWvt-bmPyJh3MDb2KHpKE1ABPs7cQ7ttrMrHBApEHJh5nU8uJUXcY-je8WA1LTV9qcLess6-9pAkvPeeHK6oiZucgW4S7EXzDHzKa3dOyoJ5pE0bcbmC0pg00KkAs8k_JyY82uKfBK4FVq6fDW3qJDE3ti6S6RfyBsbGwv0Rfw5j52Jza1u7hjXWYE0UeQMZSKrxO_mUGMDAZSLFawPRRwpfgs6oMrZst8u2fHoCDb322DGU1fvx754XKzjw0Tgb4kYBIaF9wsb7VT1Xn9o4oRokzzMxiWbWPcuNUhIEygZRvdPevWDD5", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104013749776543911822\">TED HUANG</a>"] },
            { photoReference: "AWCwydj830ncFkIzB4Ax8eSMYPqEF1f0PHqU4SugfwNXgYmC3AHLs_p3fQJAexmqAUBPCV6YlAr2gJnTuQNaRRBF20k4SQZ-xdIT-ngO3FUa0XJ2R61ncCkar8RyvJ1iA1OFfLGr1OVeXRzapsrF8YdD7ri1W_26ebdFAhq_NNuWC3_qk6NLTSDaFBpGyRFqHJPJRbwXDCZl9a2dTNm2nTTln2OruKp-8lvig-MKKjj6Pf-_yFmcXkYuWavVPnfGQpHr9dd5tcpyOn4zGhLpWCWlHoZ2h0ke7IzN7Hf61pglCev1TiHdh7MURqkjq0HHAIGDG5trq2uVhS5rty99ZjLbdIdjYRELE0yTTLsBWgiQljX4PONDubVocvV-zo9PTnrb4dYbwQi0q2XNtPRMUnBi-1I7IBdtkTYf9ncB0qXUqZjRDgOj", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118384257045543964523\">James Chia</a>"] },
            { photoReference: "AWCwydjS_aJFaz9GRx1bX21e5D9ffBfayJc66uzGBR-UQc0LKihMm5ucnYO5L8H4yoOsojvl1dFobaUwPg72WCp9CQvD7BOj5JF-bvL9K2KxjgOXFm45cumujxp4wYonF70CzpvVhufSZ7tuhzxrCDBPt3SdsHDqFLHjSNUAXw-9YLSLsoX8knn2ZrpgKk7jxBO7_e6-3PDURsxYEm_QJaS01dnJQJ8lQxtx_zDnX4TGP9VBlkMAS5_Eys33jwPjPu2jkmVhUTz1mtTHvh5XQgUN93otOm8sr-aavbjNOzVET7TPOuHMhomPDBEUaeJmLrj0yDWS1ct-goTKZ6oLxWuIUv2nWVwOKWxRweiNC1gqpf2Sd-giE6WfTnrb1-D7kRy6CKmNJbyBrtk8-eF6IrCjil19tVfAZDhu0EqfBfe0IIqJCtn__TcWt-9tMHOc1Q", width: 2200, height: 1650, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107139242981758339539\">Kien Nguyen</a>"] },
            { photoReference: "AWCwydjHoi0FdxvQR2AOYCan1XRgToZDFMm6GDgwfqA1hMv3IvKU5o3Tbj2qYpX3E4qgwUeIEef---QeicB85zA6tuiQzLBh9kxRJ8XbdCxeVfzv9A5O5HvCXSc9SA6xqkdC_qLWdEbwJuyVhpAa54n943xhpCMN52Qj5yCAP7vHNjHGG_icnG1nqm-LrrslSzCbbZTMmbvEAmqPogs_FcTwfw0vQ5dv5zaJbajxojJ5gfX-Ghb5lIHUpC72QOtO6cyO6W6riN0-ERxTPe0tSbbUlshat8ijZGJBiYWKs-KcGW7A-f0TklKO4zezUAZ8nnMr7kBaKFDB8aL5EjAWoSGUUQj0zxxGYhv4O8ZDTI-pMfHlUBkmP1kaQTk5_FN69EQoDl2ZqmjVXiRLWShz6x_rfnfKemX51jjmXdy2QcfYJTVX5u6z1WKnuUcS-0KQwIrw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100897063379675004226\">dat lo</a>"] }
        ],
        summary: "Con Market 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로컬 시장", "평점 4.3", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 7:00; 화요일: 오전 7:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=5423764435960124639", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%BC%B0%EC%8B%9C%EC%9E%A5+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "롯데마트 다낭": {
        photos: ["/images/da-nang/info/shopping/lotte-mart-da-nang.jpg"],
        placeId: "ChIJ8VnYK-QZQjERpZiaV6g7IFk",
        placePhotos: [
            { photoReference: "AWCwydjCRy0rJjnM8NMdsi9Rl0GXB0QJPTqP5yuS8wOfdttsdRuU1IzB10XwT_217DzpQcq9DEKKjIceAviAKNMXMa-H818PRA9ozj-19yrCNKU39hfjuBFs9WYZRx7rRFr-yj50tMhAuOMvoa-B08xFRWMTJjCfma26KPknlzJXf8_5SXShzloJPsvLMebXGdpyKnI5uSbGahvm_MSvE16h2ZNqOAzLo0kpf2Q7bsFkDHfSvPhpUm2sHjki1Z4dIZXNWIZV7dBY4Q5yj3sUkk4U-xva7x04pjrH_lfkB3UvqAelW1EeGfPdcqSLviWlnqdx0apSnn1DlRGW-QUsqQjnbtMgSncNWfSabVnIleOLu2LdgzFtAjnqwtY0TfQ53LE4LUWCKaH5KIsTBOOhBG-LPPoq44e-XNzEhifuoUIcQe1H7TOp", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110076977979793804261\">Nguyễn Trọng Thê</a>"] },
            { photoReference: "AWCwydjyFfb4gVSafhjLs4ts09-c967jVbX8aS2etwv933v5bP-8yDstIG_udMoEzLwFBoHwkrGHMG3TX2MiEfSTIRyHv8y9fKQZEIDGpHF3N9jZxFX47iANzm3PGjM3ntiV0TFO2TzsD4gMjzYXfadDwWQQENZBA2_sekQvVO_J-sdp6o3ZZtaGa1nmjXP8b8HoSe_ELDeqaSLrIsEXYAOC3PFqX7g1eLnwNsCjG1_xYGBfKHtvpLQg9pe3yoKhYaH7dkBOq-eyq9x--iBpLZbhOLwQnjyHD-3uhE6YeWveAA9VJuO91q2SGRL3kk2PGXDofW79qs1jUjNjIZOVIa5jg5RzfpSe_afvC7qfdgP6EQsrjpUamoyx9dlTmQC3FZ3tskyjQ2bPa0dEWAWX58Z8zu5NG5JJsG3OsuQhkbZkAQMYRVzoByqbLv3y-B3DGA", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103584868441536557519\">Loire C</a>"] },
            { photoReference: "AWCwydjr16EzPlZpyIZqxReK0y4e19Bc6-gPjCTiL2MgyNcephg5C0POhRWnTT5R3djopsMfovWO1czBZwnnDO2ZGn-5U37C00kv-Exoz8vHFB-MT2yyolEAJ1Bk2BBY5kRCnFSFkugeJOq_uGvA5P7i6iyRhmr-iNg6_VD6sHh4k6WwEBQu2BzVFYm-aPVmqKVNx0LalcwUijqSICrNthr86V_UD2f2w46CQI0kVvDNc2UxVGrYs9vm2Rh0qDN3jRV6JrnG0y_61R0be2n-ms0Ic4LrPs2Y6T_xWbSTb6Bfd0Bl9RLwrRzOM9OwQjlKs_7YZ5ZnYt0j9y81LQInAFEIPunJM3UbjvVy-wBRuaiqKs7dqX-22qwCd-LfQtaEXTlq8HcOkdtVMq061CFVI2sFvtLDFriKnFHuXssXUuYEEoYO0UQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114567739117150435040\">산유수유</a>"] },
            { photoReference: "AWCwydi_9FVwClC4DpCHqGvnEz209whVW5ClHZmkM20ssASA1xX9Pki8uyYe7iXJgw-mXwwDuUVPgWP_jj4eEIQT5CHMK4epbCDf0ZF0ic_C504WU69rGa4zG3vECH6TNBo6mI0muOJha11ATzgF_TLNhIFp9McEs7F1bf-uEasU_p9XiL6SmOmVUmvXIQyNaSLJaNEKlJ0I3MDAIaj5EKkFlNyzCb9ld7nhS9YYDbNMMzbyp5qx7nTjExi0BTn5zY33eNefTaM9XtC-l-6_gbmv1RqdFhmwhYC7-HlNgZX5-76XUdG6n93Ml2zuxjuf4lQSzTtUljmm24wiA6SpSLj79npFRNxWGZywhBkpYJaRORYSSuHE_M3Cg-2Y5FYWXQFBvX0f7ldyHKdMc7ziHorU9CX4RBMhYXTTaffnTfFRjcZlhfjg", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113286993452903149982\">Chí Trung Vũ</a>"] },
            { photoReference: "AWCwydgW1drP59gIuc5q9bclsUE99uXFvVNdO97KtWmjHMOdFx0CO64mlNI7sBhEF5fORwtDd5QL523oUgeDgjxdoxa0oqvQwUZGjGGbAofT7ccNiHo8QTSzU2rVDBnTxHTm9yGd6x350Zlt-DhFquSDOvItDU13EE39l3H6ze0dxFgcGSxFEUWORoHX8DdU3P6PuYCYMTpFQweE-tBc0oUPR3lUsLLVjjqohsD-Mqo9E6rh7GR7wQs4808jTOiaalV5Y8ECUr9hB7To3ZKaRCwtfKau8HMUG9LNbLbFlY03fK_7dxfwD6Ow9xfY42xhZ-yPCZhhkHZwctDBqCYkcPwRUdrzk7Q7Yg9UnVsXgBfa7c73xCSEsKQ_lksoxDyTNgBNg0sfzDbcWzTBTAZCnMwQ5bQdeBma2s_u64jEKEQHoKkIlImi", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117874385670166605106\">다낭새댁</a>"] }
        ],
        summary: "롯데마트 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["대형마트", "평점 4.2", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:30 ~ 오후 10:30; 화요일: 오전 7:30 ~ 오후 10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://lottemart.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6422198662840621221", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%AF%EB%8D%B0%EB%A7%88%ED%8A%B8+%EB%8B%A4%EB%82%AD+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈컴 플라자 응오꾸옌": {
        photos: ["/images/da-nang/info/shopping/vincom-plaza-ngo-quyen-da-nang.jpg"],
        placeId: "ChIJiUHaki4YQjER2xtLgxLIgWw",
        placePhotos: [
            { photoReference: "AWCwydj3pvYP-mSxGBkeK7N7dT0YDZEFKxjlesHNv6wP5NMsSwvsgjkvauMpvTtKY636TU4kyeqk_dKLNp8mY6xX0gIThO8yuvdO_tgUJ97guWxbNcTJSnibr_6exMFz00-i1Nlc260WNPfJyQilMRzXhJQCGRhB3tfbY6uXVUGdyyczy8ipAuooCTdEy6_HAIPfvyKwaEmjV7A4F6sMNOcoMBxCm_YxfCxVEa961Y5GJI6Km5IkSaC6ui-3lpxVlMzrRdH_PwXT9-T8IXKQe8748qKj8hr3fQXPEri4CkDT3sDHv3vSdwYXEolA3VlE771gIr2ZL2u980dZDYI7Riau0Snx1umeDXtTk7kqhwARD2MmybTBnwz76Iy3TflQCk8HtyvkCzfEUHG4K5rIb96p-GI4Im8wGXDde2-z6PUa4b8LcA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104397548865024553005\">Nob Na</a>"] },
            { photoReference: "AWCwydgJtlNn7UO-0ImqWOXLAuyrMVkeLWXt_JhG1eridhxwXIw5ZpVJGJ_NRuuWLyM7nCqs3KZ-fHrLLj6t6TpjuMWqFSrBQ1tCxxRnD8UFS6PvWSbvL_xb1iob7uAlMoGm3vdsJxyKUzvxQ1psiS70hTQg9bemmZdFRoMgSFnQdLjlnrscfCfQI6wIbLwhIXmWXzewJ6UnXbS1s50C21P7WliCufHkpLnwwUDagOSEqorFvYSjaN2q5-lQP7AyVIYaOv9pyclAXnV7Uj5SZpNH4Zogfg3G7y5PiShpx8Yajf9jszrH6VPLQnURuoXw6h-fJe7HhNDV0yQczzAyjtG6FDVZkwc60gjuM57PyLDalow2jftpdOp-WOCWC4ceZ7_FVIfQ3dzyaPgQbOvt5dUK8hrifgscHbBhyYhChIJTHY6Pqw", width: 1276, height: 956, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106697796521510347677\">Riverpark Premier</a>"] },
            { photoReference: "AWCwydiNV3x-VyaYdWmnnEtN5GDdG3tre7fNVvN0jSGsYxyMUk7dSCgE9XThOkntp1JzKQXU9izjtl0d3VdtJW8O29tmOQC3bJil4H3OavXGDgqprSeu-y6xTAzflfQnI9KGLgA-Hgwrf24ns1hAen_ucShWaMQgxbBFTmxz3zITc_izhCLNcAjAlvdZylL6RD2yKfZgh3iI2WVrHwUm9j6cq84wbbuemPsdZ7X_G3kg9q_0yn5he_yexhXuXr7IwPI9U5eGBZGGWR8vKeuN_vdt51LWtvHHU8mVcq_evcRnDyeLJtQAaoqzVfZ89oZxFUbKtwTZJ1iV3tKR44LWSSgAbalHZh5zrtY2UMtuUaMqiHg8Li0YN1riBAA0vd-q5uS1hUSX13EuB6ARWQ7HTSUAmsvm9N8C_Im04xh5rFErCHaiYtixcGRNfpisQ2v6IiDM", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105305160993681831934\">Abdulaziz A</a>"] },
            { photoReference: "AWCwydiN4IhoSaE1-mUF0IJWumBDYwcX-VdkucTauzsb3_6Rs7s48URejNnLqxozxRHWxZASyTSzJt4xg2GKgdh5Wu7syc3kEE4jkhyAl-7Be26MR3Go9Kpt2N1jpaE28eyTgGq8NqJuWv9HrF-YKA1lz7uwIyrmbGVHKhlg0BTHQMh7Vs2o77K3Zo66h_OgUdderXMp_pattuZ_7Di0-PieOSIBJRUYLBAw3bIrhXayanyHDL23-QBjHzFqT5KyL4K2HRtxPzzc6Asiq2zOQ3Y0RA9xKJ8I5F7dIdY5irZxjYwZe_Dws8GMWnT5mToNkzhXkgtMNvnD6lNesVDFRCJKu5CgjBqvCiQMhfd9GzJVeXbCnAHImM8kYwP0GUYlyUkiSMX-U7OXRBHX0DCoABkv8USGNbrAvO88EIUufkm8f4AmgQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110378588688568462546\">Nguyễn Hữu Hoà</a>"] },
            { photoReference: "AWCwydjaCo-cb9bl1cFk7lu3QiEFhmyNOdO_BDDuPX7eEamQ9ZlbtDr77ppLZYwq__15NS-8jLx3_90pbfBbSuMT9kKsCCvXtKVpW61T_3ZEnZdfSlVIvj6pcOX-jLeqGTf6iNoMC9xKBPILCqVoejNlAeg63kXpWef4_pizk6cwC2hXX6r669FDeNoKY7BRJVG6cBfNrN_H9gZPDp9zqvHJ47I1XQIuWnpkS9v5bsvVf-bZRWVRck0J5aOlq3iE2s26jwIr5M0NgZ6Ev2quVFY1Ri9nveEKo9u15MOzPYP4OwG4hl8ThsVF7aVLoror1B-fPTtoZsIX3n6zOAobXk8gnOR9GTFSNcqqbJYei-Xl2vFH3MTXNgsDp_lescxfAu6DzA6H4GEICMEs32-ZjTZMXJrH6Qa7NzY7vmTa74mzzRRy8g", width: 1600, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111297183965203511362\">Thanh Hien Le</a>"] }
        ],
        summary: "빈컴플라자 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쇼핑몰", "평점 4.2", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://s.shopee.vn/1Vv2BJq9e1", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7818750409929595867", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%EC%BB%B4+%ED%94%8C%EB%9D%BC%EC%9E%90+%EC%9D%91%EC%98%A4%EA%BE%B8%EC%98%8C+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "GO! 다낭": {
        photos: ["/images/da-nang/info/shopping/go-da-nang-big-c.jpg"],
        placeId: "ChIJ6ykCgUoYQjEREnB0G8qmVQE",
        placePhotos: [
            { photoReference: "AWCwydjs3ADKJTNpHijUHqWWheq7b_r4siYhwWMz9DZKup27QGMDdRQGMBRtjyW0vM-2inmSkOM0Tm0sPhZ5CngStcOrGYPKZSiTDNBIlnZhDZx22EZuFEM5Rf3hDGq866BqeMtT1ghjkT58PqdsIOdRN_NsqEljfiQWKS_pCUDS6YaaE1-x6GkpCELsR7Dt5uX0QCpoMxWVibxYeCuPjpSdCtTRmvrdUzYUk-ZxlbOpuYCYEuICG7K1In4FYplP7GhQDMOVgMXKPc4P5bnkxHWq-zsfrp3SehAv8ROgZdN8fcCWHUAf7DtYBCunVjScRXe7HPsn5unIg7Vf2ggAwUwX1S4Q3n_jE3pzMqMgx1URkpfRWNnddH-Oon1jNZuUa_9pWbDlnadlYSW3YZ-ZslKm6xDXIXpKIDYiLKGhWzZnboz4ZwMbq1-NV8VL9D8mOSZY", width: 1920, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104727104325264129651\">Go Đà Nẵng</a>"] },
            { photoReference: "AWCwydgn4CU4vbldTkruM6Gku4HGDid9Mv9JBv4xl3JDJ2dCSD2hLsxay0IQBcgavQ2sm6-j70PI-_XA-1VT3u0x_mNryMdaXPCactKm0zOy1MFmKgX11XX8VQqLmixtHxPIpodcJAH5aYGaPeuZ-RwRjjgeHs38cW1VWPFfYQysVfkYCYRfzf5p8ZGL4oh4zWG0nOFunw1exbMBpcn-98YYlgp5UGrFY7rOmC8zOf5vzlVOAO1GTq0sG3GhiYh-RcBN7d1NGTkEq-QMdt2riSqv6W1AkbUr9T-YcL3Te2GASF75-5b7JRnfLietWd1TWyHEeVXXNexcMOAt4WXnh1dYjxbPHivuiXEg4v05OEz4aCZaCsSw__uwRhltsa6IHgHtk_2C1u135m9HJcsmVC83-IQOKqs8vg4Ai0u-vq08Pjy-pHtHpZHXT8x1nZOGbQ", width: 800, height: 451, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107697521515867012325\">お取り寄せブロガー</a>"] },
            { photoReference: "AWCwydhSSoldu74I1f3Hj0DOJCV1xISEIZLl3qMUQUWz7gssbCs0xC1Iv-zR7dmTmyyJakRTxOCy0AlRarpLlJGNTxfRGLppM_qp4ip0ZnW9aNk-o3N9cAS1dsCD5TJnibGgsxvDXa3zpnoTVd9aGNuFG7aQeQtWUq-N9GcW9koeNmF_b9JOG9cytoheiEZEIhlXC7xb7kGwszv50TC41zmPVUkuGxJFsjX8JxIJ58XGdCRekeBm2AXX4vgxclS-dd-j9iQFphz4-AFJ-DhHzFzgLEV8y0kYB0jH7G4Fb0DRfhIDEOaYJ-k1pty96kqtfT-WeGGkueeFOSoOd-cQchtM4Btm9sQ4hc8Pt_KYY_lVjRe1bev120RqOvUs81Bxj2tmS1HudcVkhOA8EOT9mATwPlfPUEGYecQZRh_V7YNqPlJNUHw", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100038463415853135552\">M R</a>"] },
            { photoReference: "AWCwydiiA5W5Vhs9uQt-Nz14BhYdyt310MhBq54fxz59WKOvHlXc6XiuAT5mGPozLLsE9bmkKHG3WpE6m738P52_5gnL4AwK9pZ9YKO6OetbfTVoTRv19xyOK2C-Xk7KPLjkdSmJ0CqJUp3xlpSAQScHVqYqvFGVcCtuOurt-8DWXrxuYKwveFEMOgGJSKzc7nE9m9_1lXSdNYF-1pif2NAP9mF0EE9EyOBjslsoXXeX7IE-qs2jLX2PeA1M_vycJTDX0qDZija7RmehQN2Rmt_gMB9T48Mi7YaaafzDP2kSNnpKfXH_M7vy-ORX8YqknWzRIpRAbIJfaUwcWM8pYLWOUvZnBTNPjKn9tC1o1NlMWIUC7FbLOPLXpTFYNAqFgu5jImFpyZEEXE1CcB960ZB-Ysvp4pVy2P2Pq6oO_jte-XNxwA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104458655013421621434\">Tommy CKH</a>"] },
            { photoReference: "AWCwydjfnLJFBokkxF03ncMefixKdJ0g92tgUVOGwQZaTyNJeyGN-P6RbHkB044Vn980z_3I9a6XWEaO9Ol7ViLDdr0oj27fKRrSUmWOn4tB4Lip6QmgYhhbUuVDdlDGI-2vL8OSOhmusruavUjUKnaFEcXS29K0X6cKd2gwTWhXobu8uyhXinv-Vu0XB2UKDPVlswaq835i5uHq7I4RebkQ63qGAjS-sv1Q2QQI_Ua5o1rP2X-Q6J8WCVfffIu9Dt8wJUPjYZJRgCET6YJ7xgbLKMauAIvpnAfjLR6LrRifh2H8Vj4rKKFolBEqSfNVRix0l0F53Pu2jHwuK6D7WRHKWY6DxovHVG-rNxhgxNbKc0qGjVu_Zfz7fa79y6uTzbBFVohFBptHtv6Hc72UJn_Ode24h1OGVAEbSWpHVzr2_VHGaeln", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113422973437677326373\">Bao Huynh</a>"] }
        ],
        summary: "고마트 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["대형마트", "평점 4.2", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=96166354032554002", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=GO%21+%EB%8B%A4%EB%82%AD+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "헬리오 야시장": {
        photos: ["/images/da-nang/info/shopping/helio-night-market-da-nang.jpg"],
        placeId: "ChIJBcr6kegZQjER2nCllYpT_Qc",
        placePhotos: [
            { photoReference: "AWCwydgPm-iMVq-utg_6HB3dwm4Cex0nL94GpTWLoUPF3_C0v4NpOq2XuAoKnGUBLlhsJLU7Cjk2_lyQiHbUgSSAjLYIktiGIR7eH-iid3tbXMjIy2wnNRLCkWoVlAqhKNpGQatXhUrtX0CH1vBkGjdjrTPq-KmE5JlnSUnNFbQT7XiaK3eBvIlXgf9CR5PGW9D8UoN-XP64zFIkH6CX0FQDTDJQrgcvX8-mnzlMZ2JucMthhPgYwb_TCHdNyAhAcwM8i4oKJVITkP-w9IzkGt2baomjb01OV2OCuHkTWZOjvbxlejQIO_RxY5NFEkuYvC0m87t5wA1COvQkSk1XsxoR6Z9m9WgSUNeF1LuSoYJalOJtqBnZm_AffOLmb_3-ZRa6L-SpyQS8s9oUUwgn8hyE9zIIR1epiCYhmeWHi12vaDi0qXdDYM0v2pLGFbg-WFce", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112374326548523342438\">뱅뱅</a>"] },
            { photoReference: "AWCwydggLr_80z8V895eFWE6B8z_pYvF_NyGwj-iq7bpsAtat-Q9nNSZeCgAM2voQoiThdTTXG-_73HUUnT6XRMKibQX9AeLLg0IAl_RVpiCXLcXJhCv5qvg2HzC8TtFtuRZqywxmGCAt8-SG0VPmYjFmQn3UWw_VwtjdZqkkkPPhFrPT2KmW1LAnAV9nXtkM06zEQRucu4DzMITOTnU85jIJSkElcHM_bDo6tMV8sqyMDPfVNj57K4Y-cKBtyhdD7p85YusvRcEE65eW_Kyuj3mPWgsLD5m2A5bAcb3wj1QBZyUOQw9uV_1ixWD7OwWSlTUoN1yiaU0HorNNyuITr4tMJgDbZsHqeLn6Jp8QPGkdNDgvu6FEquCO03FlM_poqDmVtsAO94uSTbM5QHZGxbw0xtMiW5Lp1KctAUKVS70oLckRN1BGErU8Y96bJNKPg", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113590251007316797601\">Trần Hoàn</a>"] },
            { photoReference: "AWCwydjxXA00C6vR80_fJ6dSRSz-WTR8e8BWIta0hDRfytpiBDKQDaU62Yk_UuyQjjI0ODPf5GWgrSJzb-YlyPJEXNm_lHCWzJHXEyX19XCqziDF8p7Gw5OoUdayBMZGYOKYW5C4yBtHGC_4jyFqEs9IA62HRCF67L59efVaBJ3gZCGc6xBMRqxjReRnnN2iaH4gLF5YIczHYo5O8cq7AK9EGVHq567X-xcd6_wJed_ASQBaRQj6lm3XirZodhNMFz1g2yBX6DEdJEx0ekXNvbUZjQOb8fMi328wDwl4zgjR7Hlq8ARfWJznlw93onhlgG-ekJwI83P0BTrN8G0yCQNFuqFliH2UzkiNQcZQbzAs9ncZuqYSmlTItNO2Jh6pQsTaGvylHhK1o8DLkGO7pJTbT6sWYIZFGiFgrZTASovSFi8_-fKM", width: 4128, height: 3096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101712378161443066054\">Toàn Xuân</a>"] },
            { photoReference: "AWCwydhSdWylHVyDi4dz3twjK9ndakrZSGv7LfZFM60M_KvzXe_BElHyfuhR7dJBfVVjbsv0Mc7hobUtZTumI9YdC-Jv_CxcAERcxgnxTIuUbVkrwL1v9N8-Ad5kjE83KknyDvpMj6P31SFWf38EEZ1Yb36JxDSbDP44bQhM09v4GuSGvpq519SzULFTkMbHbghEs1oZIBKCR6NRhf8IDve4APF-Ajgs6QH-cIFYsXh-Brrt0mTqO2KNF-bOR9gJ8S5qAvzyUnD8j8zAoG3p1mh_dim5lwC2KP8XsmsXNmyKIvpBrqcxdR8IVVkHM0aiFZBCQzAc83FFeQalzyLuy00Sah0z5JUvB1UJtj8Sbpqd0mBQD2Be4Un1LDZJE1dNEK0431siHxumPQ_QTg6WHVp65vQcv40gwo-r1VXG2eD0i49nUg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108507620589129535984\">Huan Dang</a>"] },
            { photoReference: "AWCwydh9Uw_GBFr2Vs9YzBjbqmcZZXn09RpmClDMtji3Y44gVpvn77iZt-20JPsj0ODPfDsScpfuwO-7Ce-TVgOwkAfwAwOQ-7Yv9EJTYtfuB0kYG5jNCeUs1t0G-uze7_uV-fNG5beBoFLLoknjqmmdU5EBNaTlGSu5-QPa4js821vjWxRrdC6s6dTKoPuX10mbNUKcWU_SJjx71VoixcsdMFEskqEjoiGqSDm1BvLcgA_S8rAltYmpE4bv_ikomiWyIJQ3I3JoU33VmWQ-5OqF4nzm-VEOsUxmH8C_CsTug9sQmeOvq7pTq_kkjc3mXfObNxvkUpUh4Fh2sz2Rh3OrZUt0Sj-Rn1Bo9g_EOFaDI2pifkYnpVQOuKq0Zhnm64vvyNDlDwhpdKwQDfV9OvHnTNdNQByXRqcBhpaGuDCRwXuvSg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112468783560525791079\">Mahmur Marganti</a>"] }
        ],
        summary: "헬리오 야시장 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["야시장", "평점 4.1", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 5:00~11:00; 화요일: 오후 5:00~11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=575708182054531290", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%AC%EB%A6%AC%EC%98%A4+%EC%95%BC%EC%8B%9C%EC%9E%A5+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "선짜 야시장": {
        photos: ["/images/da-nang/info/shopping/son-tra-night-market-da-nang.jpg"],
        placeId: "ChIJ51xLDgAZQjERo2eoSsJQsDM",
        placePhotos: [
            { photoReference: "AWCwydhDoF9CQErDJjnqKAp8tpeMBDtkSAm4hpOxYIAw8I1J76c4w9mxueIEkELq5a86cTpXdLHwcm06PkIhcWRV2mskIlVu7zile2y-XIpDv9sCKtHGpVGlM-iWJihwPRl4zzVsgjUaVRaSupzkjWsnxhDB-ybuC3VMP_QPxcN2o-xPE1ojkmNtj-0X5FfeKr_j_ckuPPTS2LWQqTmZEBaG_-Q4BH8Ff02e1sSCrTbxkLJxkL4lz6VHK2LQAfB1gjYns1WlA3jopcaPXbnRJm1RvMGQgUZs-C-sKfp6qv0ID4DZkdOj-TLLyxgn2etaLcno9XQgc1Tm7ie0zi1m-sHEFd9naBJojYSd9SVSO8Bc14fR9rgytloJ5zOfH7zmw_LhylyQaSXlqtpjBDeyL4v227BjolQXBOIXkvZxFejEcsfKcMzSvWYvUpviWx72gw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114410566056319887414\">Zol Lev</a>"] },
            { photoReference: "AWCwydgUp9zgqH0YkyZSkzFWk-7axB1ON1X0TS33d8ngFgiddge2oG6GCBqi825mq4F37N4gJ4Co5rrpZIpRe8ew7FEqglmc8muHiP-_Ipi-B5Vj1yL85vlq2npkF5eMI2Q-wfTST4K0pWiWwS0QCzWlO2DIUYO6RNMs85B2e2M8DSE4hL50sWqtMwWwHGy9Cei12NGFZaJhF_Zb4NEXYQVufzPgYApF-9BkLgRsZ7Ly7BNXoEF87RXliflXavyDrGx7859J9V7P_d5AjrZGD5skWx9BTNuH2MwalRZ426cP2vBoGxkiF2XgPTqzYklq_gxq5GByam20Ya9FAQbrTVm2vpp5ASpQZicOe0cxan-8X_jnp5bRtACBMTQO5mwtHq5tEYSyWXjMkooKRnlMauXdz8WB1iApOpAKIhGnQNqsvLtvCbjbmxzXH_Uejb8c5lio", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112867711469666100068\">Joseph Cheng</a>"] },
            { photoReference: "AWCwydjchIoSGQgWm1Xel-GSqKGeNMswqCvw5ux8pDF83SUhIOak-hKQXcrC1eB2HAC84mpNWW8wPQvzJIAx6pA74VJAyzEymafo30d5UuNfmPx3dB89U938LjgRWCGJzb_qn6Rm-sr3ykf9DxtToXCd_r9SPRNIEqccir6GSUo2iVJOJ88XHarw4NGqitTHNBmr0dK-nlJ7-FR-_mz9QsT5zl3lZzNObvOg2Ea8MibCZuMLS56L4tlcGWnVyyzHTeO_N0yx9uujK2sosi-epCSPsFKM4nxh-6tJnRmG_IlcQmrcxxGlreCEybhymZeXTMYx9IlDHdYaTkWTq_4Zfz9Q5Ndn8zaPBUP6yzfjPLdcgDyJIZdxuRe4V6JZSA-wIGxK6PCmHmncMn6V4XSI4h_4egFkWm8XEWWo2hYd2Kc6nnZdirGL9o-rcIOU_KaaqpLO", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104957169517060761161\">Z M</a>"] },
            { photoReference: "AWCwydiJXu4zgMG1tskD74c0pJvgoUzwZu1BDsYXENl6W-4VF-w8d-YEEc1IjEGwzD-xRZ-LhdkiFNQsAAw7FMjrpszYer3tzfVSsl0_l-aRmgd2bOW011b7xUG6mA5wCkuYFrFmR5tb5V86u7oRCsNWJ2G9XeX6k5GyOEZLsoO7KvBYQ_gma54PqjPW8Om-7VbXgEfQvn_riVQ6tkqsalF1F72uiMmtko4dHLbengJXdP4y_hD1EaY3MYdFYTPFcOe2CVG6K7IBwKXMM3hHeeR_WgR0pO5IdxaiYsOp3lH8dtSfHBtHPhIznoJJ1ypK3nmtZ3FVjeX_i5qek3HVjzocElrKSp7am81Zapik_ULO6TSejF13DIWkLkJDZHtU1k9aipd2xQ5GPl9bWQwxBQDHIrm6whR4S_CQ3hNAJLBzxN0RcLqu3Qz61DT_uUkZ22BN", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104957169517060761161\">Z M</a>"] },
            { photoReference: "AWCwydj-_0uBmlZ32D6Xltg9F55nfnzzGdTZyjEb0buvWDAPowcMWWDe5ebnYRQy7ab0IV5suPem2Z-hUQC_s8QZ6r758L4C_t1j8DZmR2JTl0VEVCcKXKEPwQLDhzn0G7DGveWn_T-flaEPHvKrS7HF1jOsUhVNcSvrcYwQ_Aei2skGxOkyjsrtUSbe7289OECDKpIZ9gFvZ2E17MySdldTN4CNkncI7KPf86mWGbRE_DIDc60EJvBJp-UhWB4mPnHbTBxMsGUqFx1KQjzmC3KJi6tNRPkqGJg4tXpKlyyogX9631khtFmTagHBaX-xH4uiqj8b1bkvBw5ZTzDiwtNijBehezwrAURLylsZk_bzsyG3RXkRlQpbHop_a2tNRHx7XY6KSyx-fIqoTdxH7L5w6NakpiC5MxXDbk3QD5dzX6ZvZcH4AmZwIRjpdl6g7hAi", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108312242032713617002\">Esther Yang</a>"] }
        ],
        summary: "Son Tra Night Market Vending Machine 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["야시장", "평점 4", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3724565687241828259", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%A0%EC%A7%9C+%EC%95%BC%EC%8B%9C%EC%9E%A5+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다낭 수버니어스 앤 카페": {
        photos: ["/images/da-nang/info/shopping/danang-souvenirs-cafe-da-nang.jpg"],
        placeId: "ChIJ4wFQqQIZQjERQ29Ifqzv7-k",
        placePhotos: [
            { photoReference: "AWCwydh4RWZUdvUgc8Q06hmU0BH0bp860YndYB7q8vNNKKOSGrMTCeH6G9VKLXyg_yywZYnKNHGaf0W00Ucb1SYI8sSrn0_01u_VvTXZjMYOAaxoN3xpOeSlcozSVTn5bjMwnIGh9NERLT15H9wbH5T7vsDXKpzY_Sjaay2YeBsPm595ACz53M0knoLoWVhRmAIfTCMqqcobG2OX9QIcmOt1E6LeBPUdvzvn-1-XceapqaB0zlhHUa6DIyS3pgYRn-ooQFWrzCR1FJWLR6nC_Aizq2IgjO9iISwsQu9g9_ppbgjgQHLXazNCru8MX_KQ0PZ44kJmKTIOun0C8de50nHNzv66z4tslMd0W4PoBSTvwZKFz7HOeCJgbBEy_UeoY_qOMAvMW8n_kwTnVDQLy5Dna9eLwF7ZhtgWr-NAkayY_uPaOn8zjtTh4meZcH5o2opD", width: 2464, height: 3280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102612932944766354864\">Sachin Gupta</a>"] },
            { photoReference: "AWCwydi3VYK4_Ah1YOSz4w2gSOTkeSbcOdBjuMtXh1QE78n1gt183FJDSgXTGCExEgYOdWzsNIINe1g_2zgty0JUynMQN8mSZCl5_ESDqWxmvJYRD4aWnicbusR4qc4j5XrALSXNas0F8imESNKkGK98uCHDlGDKyxTMPhDq8pQhkuR09V9HlkeGutvNi1X1x5Mb1gkUGqfD-jB9bv2UxkswEliGex1-Ll4M2uxP62xRDQ4vqykjDrvE_pZWxafdxGq1KdV7RCjro22sf27_GXLabAa9-JCGnjupb5wtVdPGkAH9K7hy5OYeSLE240JGk18Qcrfwh1Gud0u5ZOSv5aiNPAhyTYnYOGP1YIuwlevzoeXH6b6QJhUVre-SVMbduC_49ZHU85tbWZjTW7Kio7tguUjtDLqpZUxpzAFXD8NCSnM", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106235102479743824475\">MR KIM</a>"] },
            { photoReference: "AWCwydg1xcWs3OF7FMyGLT3UwREditJiX5MnbcM5TmV71-6Npmtx55WaBZfNUI8hgXkZlBk1HHb8I8HrmUWRp-ssn530H4kU8Lm_YAdYHxwGQPQXUf7ploVMtjT7luNrDDCvd_IrMYyAaKhpaki6zHdPYWynmMCQnaIeYA5MNYMdbWgxMtI2Os9RnuEe0pyQO-3EKLt8f18ZkrIeJCOsF-r5kvg4OZmvBckug5WknhWmvzQxSTubkokGo_YDyRSDYDMNv10inhAZliVaFAl3hT56JOBtNqsn0gI6uQZ2ep7KJu8DsiAdCzO2w0EfCQRtrq9_Fivp1lVs6bNYSg1Y7rRk79_1cqt8NKWEqQGQ72kAcO5R5U-zydiS7--7yjmUIvt6pVjpbMJWJOj3LDh23_NVro8QPsOvoPyaj-Ch4dqJ29y8Fw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101574883390941627656\">Ashleigh Prentice</a>"] },
            { photoReference: "AWCwydiYpwueHt4La2rO9N8jzrsjHiGhKw95_fgrhlVX2Zhfdep9TDFdn1PwWA90YBmfZpVwdixutk_6N59-clj0Oa8ATV8UQ5GD6ffm72QrLbCLmXb9GL9y2PFAQRbJCrzS3Sp5HyejYNljdU7ch9NeMC2cj74vsQRO4MwYOHXj9N58PB9JCwt17tQ5-97iHxdDLTHuyoDe-NMAJC9CTD14KN2wiexabJk8-SZ0lTteQJ3s1PQIasJzYYwnSlbQnYYSuBmVy3r6PF8U-XdGy44VtDJjWlracrSfvDb_fEm1KHkd4DDY1oKHCencs0g0k7_uqW71xdT2MwleXffiI42DBrVI4MAwgig-aAzUjho2z2weIJnm4jqOY40uh1cpdVNsJJ9ZEwuhWbGaCA6BuXUGd_yzZWQN3TW7BpDiJAbOyorBXW_e", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105754600864405043498\">大西里奈</a>"] },
            { photoReference: "AWCwydjsAZas3AEvdvMVnHxrTqGlv1_Hbt-d5sTyQ6FwtBg0jfhv09zu-dA6ieR9FihdfVNsTK4KELixEVr--OnY_cckyOX4gRDsay7UZaIa34gt4TiWltf_DWAD8tdeTR-qJ2viONgz3MKwb4W7VCnVfF2x9zcHQr1j531I_CP5Bwuxn5jSdwH23cez9xQ5OjfKwO-FYtD5kpqANd7xrhm_tUaVRcEGbgbw4RPdzWlwP7RxxfBL_jCPWOFqCy8HQiyGB0geQQhqlMbO7iVnDz3ldf6kOPa7HUtRHRo6A9N9Xjg8tThHv3qyVfbz0KJoJYJnVd0bJ2BpfLEtPc9AfsqwPXO-svrcJdqC7ReeX6wXfyZdWznZXjdcUlHTq6JTk9ujAJziCNtxvUqn1rt9VNmnNqLipFw7o5ut39KUl6P7uzI0iwnJ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107045461163366044249\">Sabrina</a>"] }
        ],
        summary: "An Nam Dragon Souvenir ダナン スーベニア 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["기념품숍", "평점 5", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 9:00; 화요일: 오전 8:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12387221539204512792", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EB%82%AD+%EC%88%98%EB%B2%84%EB%8B%88%EC%96%B4%EC%8A%A4+%EC%95%A4+%EC%B9%B4%ED%8E%98+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "논느억 석조각 마을": {
        photos: ["/images/da-nang/info/shopping/non-nuoc-stone-carving-village-da-nang.jpg"],
        placeId: "ChIJ3a8dOgARQjERJ1pdjlegJds",
        placePhotos: [
            { photoReference: "AWCwydguuWQquSPTI6ydMYhB3YcaPA0OmlG_PceYkm6-pUpu8AHOQjOs_PJv-ekQirqzM2YjtieKuEcIruC8zWEqyjoplO4i0UUFjOdnOa3vi0J34sFqbtVMM6eT5Ux4St4kQKNA2frpnHPYeLHCtVUj06W9jxMjIJxmn49MvW6fCivdPnCb3CSupX8QzfF2Xk7zNz-Fs1-8wGVHUwTx5d1pQQViA5rqGKopi7EizqsEuMxSRcn1-cPS0lp_80c644maJ6obeWZznVAlpDsys8WytvM9oAhfHy5joscqxwAtJWISF6pNTKzSnV4J7fzzeTPb423_5rx-rb0ZnuDn1vIFyAAZi14sDzI0kH0DKKfj-hXV9wqRElrMwvszLD0WEWC2OK-A34OhVPjjooApk3df-906z1TKVlqNX33U7jviutZJBV-7iaylfoHV2UzVpIhF", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100344733452601988220\">Zétény</a>"] },
            { photoReference: "AWCwydheovwzjy_WID8pW6tlkhvi7mzP4jFNNtvZSus-xwGBWmaFPV9QoWK5XiKfHd3W4vBCKzRj6LEKQOD4-ycgUX_oootjHEMAhZXkGqbXmEJ0VZkFcXykChZhOJczQBsYltt7kJv-XE8mx4ivLs_XghUFpt-wrTwYnqZ-ik-GI0Ev9dzQ6epDRV1PGymTANlURJ0lPEqoMZYlP3FV5eBiQEAqCQB6ATNdR5RgoYYYWgHlBFkvGTeZtjBTOmTd4yWqR_aYj2Fx6iZUKc8EOAus4jq8fuLpyhrSIpQ3jMt7t0HBWHhOzyg4oO54nhfixuFfZ3gakkstR9e_B0nayTea4vFsu0MXJkbu-sIr5hdwGqetTqI3-_T55Jyguz1tu3TpoqJappWj7ZWjr1TQW1Ayy86Ezy9brMRfQmX7geJ5NeIKY5SZ6Du57mZl3Pe0hARB", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108659117959486090953\">Chien Do</a>"] },
            { photoReference: "AWCwydiTxhBwOwMLshZFwXnlZ5Shx4kA-OzwmZqeI9FgmpskWWD73GHHsFHikkEO5xJ--l0hzzEsqzdi1xmCqGIsHNvH0AJCOL5ICbDukKkeAko0llOfjYtpdME_kUlAIomIBMg84R_2JOTtle-SQsX2UOLtsMptZ3YmbPW6-yBKPL37FT4KKmG_97tF87RZAiUD-TUGxNER__CbagKs2DxLmbsgIp0t-pg34m_laS6rWE9f1GcWJ7JSoHEqM2qJTNSosbWcBmvUnz3hCWJ0ns6MwhMIyE9d8P9_rl8onovD00hG0OjENhujdWn1X6FxoTCaiEuMRQWd63w3CC6jKDH8bKdh8RTCdcNSMP2YHnu0NZ1pSrqRwNDNC1b2mR6WLbRJwlCipWx7mCdhnK4ZrPRSYALG_kV1Zgl5BGsfmya24P-hC8dFCzf91q0AZKH_Mg", width: 1716, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100457398402035350289\">Hung Nguyen</a>"] },
            { photoReference: "AWCwydgDASh1NkweI-rESNkFRm-g8AHPX1XxTlq48_O7uBn8RJVZSgzlVEp0OZrVluGeFO2ax39dV8KBkaHxiwNPMcgUXnauwDPDUbWDGsTDHcTQ8pMfkIu5WlwoM9FhxzpmRZYiiEUSuQ_e8UJVpS5YalPFZ8VJaibR37VeTUOo4Q-easkttMpJm6QmHh9W8kPN2zvXPMJHurhE0peQ59YoFcP5uIXKIcnIkwmy1ESXnrcrJsuKQz34DhNv-loHI6ByV9La4b9Gaicnr9pK-HBhBaFdad416hsl5-6gDPw-_Zcrtivu-mbliducTmufGJoUcOXzheqhxTahlEfS11Mj-FQfArS9tFHPH5-x4Y75JTg1bX5Rj_NigitfNZvGOEWkTPRlU3bxWKSYMn0T9QUp2NBw11nNJ7KHeJadMy4-jt2fhRyurK0Zqw9Q1jrY-2py", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100344733452601988220\">Zétény</a>"] },
            { photoReference: "AWCwydiYGgEHLE9iqMRXrhkmW129er54ncvvKVdDsHhrpQ_Rcm3T-VS1e2yCb_FlaDa1i8JuuiMCf8KbzHpyW3zdr3AkQ3x694yKxxCyEH_xvRrFc56KLtLn_sMvCyjQYl7y14gCUQiB9As5HOiLtmDB_CnEADZHiX5i3uIUfaeW_DH4uH15CuLyAlBg9FPwmsN1G1l0BmJVRHstTrrZv8XCrTWLUbe7v4WZoKZjYkVUyXqcrsU8sGyUvxVSa0mRwsxT6dap7sy1XWRYbR9LR6s5T4s3_E3_X0RtNNdmrQir8rE-yMwRoz4P5fZnkT3bCaltSPuGYsZDm81A07LJKS0VEJ8XOF3uGLnt7232ZsIhNLdjPdItJ_89E7B7wZiLiXl47h_YQJL1Sji6GrnPWu13t5iDhCDw-P1bL97gspgoiEytOes-Wi31qmYMtosg8CjQ", width: 1884, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112896264219516146489\">Simon Paul</a>"] }
        ],
        summary: "Non Nuoc Stone Carving Village 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["전문 쇼핑", "평점 4.4", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hoiandaytrip.com/non-nuoc-stone-carving-village/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15791203966355593767", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%85%BC%EB%8A%90%EC%96%B5+%EC%84%9D%EC%A1%B0%EA%B0%81+%EB%A7%88%EC%9D%84+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "인도차이나 리버사이드 몰": {
        photos: ["/images/da-nang/info/shopping/indochina-riverside-mall-da-nang.jpg"],
        placeId: "ChIJzxT68jEYQjER0Bcu1ylAiXQ",
        placePhotos: [
            { photoReference: "AWCwydg69u3utpC703T0cQrfotm2E4z942Px9fpCpAIBO8jhhNvDmJWw5IjHO2_oX2nuspJ8X4weKpyyFWoI0DQ1rkguCynHwm0z1qJ86YWU0vEttFG5qzlUeO77lTR4dC7YcbfKJWxXVFiz0qHRAfb6Y3k8fFa5c3drDXJV0Gf3gm9dpcXMfVE6XQ_-wbMLcWD3Zyr1hiWfQ9C0D-U_zJEdFSwS729fiVFw_XmtsVDntI8LvM5lAYbnSvdsKMmZhuAaTJlCcmV1rQGVCUHYfv4JmcGMaIqu6uPoumZ8Ele9sSJhBMsiwjSFuyHI8v3XHnbqDXNUE8WdbtCUAeHKXGwpzNsbotR1RbI3-78pYi2RCPqcCJUaXqIXQ-iRoWESukdBFLf1ywRvkX33GU3AnQtfDlP_UBxCriPybI9I3giAF1pQEK_Z", width: 4800, height: 3204, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103113310249235857758\">Indochina Mall</a>"] },
            { photoReference: "AWCwydhOhZVhP5tGjgrfD1pQJ-MrcHnykBIWdu03dqh65OJdHLsw4S66smi6nlWMOKoqCqunz_Q_fvdeW0fFrVsrxOLO4BADmNYaS-ceT1zyQkIvuqjGCGyMAUWZPCT00ovNGRAHzNjRriJXaE-8OGYRhFsMzOfnaJfWQGNKBXO8FA47tGp7rHeV1BiUhENFhYcz0OlrfYVmFTWzJ1WhNqNdZJ7Pk5CO6aGaochctPSQCDOSe-Koe0LN4qetXMhM7u2R8tL5YmorHq9VCY59eWrF-KzztEvGFivp6joid7vCRBRsA5PzlLJcNisQBMusvVGGG-EBnU796EX4zzvcvtQH5wHBEw12nNt_ObkgbNfsgsIXrav0kgk3NTCJiuTGjBvoHy0yQs25OJFAsR0mzcuX-Hu9qiSN887hmGvEM9RYYwJlkeTjKDxJYvfx4axBFxxj", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114623439957266528426\">Tony Lee</a>"] },
            { photoReference: "AWCwydhEmL6fADdXWzhXQfdcP4w8lxSvbsC8OZ_I9F3L2xYKxx2VHJUYYDFS8fZQ--dv0ctIEVbNx8pKRi30azGCh4iaKFTltxCzXwzbk4OR4jJSuHjM23nda0i2xZQ7T55I_f283rt3pUsTZvXZHOdq5fQEjQ0t4W1SYPqTkGorwbHv88IFUn-QB85DralDfHFKtxUS3BBnStP-OQ8sExBA-bcOBSgpnPxnk3pXMyz49c0oZajXApI7sv_4pRBDgFMbqXcC3lVKFyapgH398q5uFRdSB2hO2PQ1uaX73W4wRAGwYny8mIFRSFkd1z9_Wl9RpmuIcR2BsQjkDr95nQx__L0a9jCEJZV_FqYP73lmLUIaemXE5NUcnpqVUyweZSlTWxgGvZytZPrdXf_hWGPsja2b8NUXvvkOl9bgJAAmRBF4L1Y", width: 2048, height: 1364, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103113310249235857758\">Indochina Mall</a>"] },
            { photoReference: "AWCwydgbb5Nalfqv4ZTv0oj8YrgpK96Bd431GZiWymhYv5UQSJ-nBPDB9JKOoa39mvChleLLG_sUZPVZ4SWInMC9huLrYsCfJXfASMZSs2UhAlB0FU21xYqPG495kOgwNK0QpOw3aTb4Mf6FgLjv4_EumDkxTLf38Z2oVhpjsX13CoGEKVnImSnpx7jFCk8z89lzBY-z0mnqspJau5sr6w6V5tZhrrHQemNZoxzaa9t4gP7g9rarvVCAMWVGkNh9qkTBV9QorzzAjsRz_7Mhxm4ZDVox7x7-9XFMQhpT_8YnxdKf93wFxLCLRybdL7bl2pQORxEVqbJPyLdkjRBy3xa8wQmi8Yd7hek36fWFBbw19x5xMad0D4PoHot13PWT1rCBJYHrx8ZvWBKSmSikL6XMmsKpj5Adu00L9H2U1zNQcHP0PA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103113310249235857758\">Indochina Mall</a>"] },
            { photoReference: "AWCwydi_ZWATEQ7PDtjd6K299wAilBSMwl0TP6yJBPVz1bL3tSEvaSe9P7Rw52mw6SU--Ws8wLQmS6g0XUR_GH-95OnkSz1pAN12-2Olz4Fh1fNvGjFOQkyE70xwoML3UPFscFyDafSUMueXep-Il48In9sjbIlxN4Um5vINxrvTRlKMDEP5i-T8-4uEmepYpNNqjx80Pm8pUTxBnEGDBXfMLs1XFZf8vUXehgzcXIUMmuRZj91oKXUwqecEIZqGZChvFevSDjYLCKYrZj9WPBuBKxqYy8LIXz5MBBm1sv7KJBYIdJojHxLABFGWbHipx3eHD3BneonryVgt-nCZzLO2G5rlx5k5MnUdmzgeT6zsGSS7Y_bl2eO-wypSfnlBayu8w56X1c4mvfwoBv9BSlutZ_ixj1cqgZbPlQCoTmo4mnSna9Ie", width: 4128, height: 2322, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116345723334386262954\">Heo Thu</a>"] }
        ],
        summary: "Indochina Mall 기준으로 확인한 다낭 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["리버사이드 몰", "평점 3.9", "다낭 여행 동선에 맞추기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://indochinamall.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8397313528656959440", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B8%EB%8F%84%EC%B0%A8%EC%9D%B4%EB%82%98+%EB%A6%AC%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C+%EB%AA%B0+%EB%8B%A4%EB%82%AD+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "호이안 야시장": {
        photos: ["/images/da-nang/info/shopping/hoi-an-night-market.jpg"],
        placeId: "ChIJLUlfw30OQjER32jWkRuwRAo",
        placePhotos: [
            { photoReference: "AWCwydhxiQR1cgnBgldw7jm8OjIZXvxwByA9ap0oqpFj0fCQPkpOGh3bZh74J3bOaCCd3Lv_jaVMuFqN7wdH7KXwBfbvHn-vanlzxnn9FMabcKdzFqvRJiLVkOnzXGdRAd3mZl8vakoiISD1PeJEp6yGyf53Dqsp4xJyWs72ZHUYkFo_r9m6ptn3w_ofKrkvMN_ZqEZk3MsHz2B13ZCqCfgV8_kmupuKf1an4WVXfx7Uxwst9Pr980zxtUFs-ZipZ_AfujDYRoEf5yaXr4DMGjtMFAnwClUkfqVJb_mRjrE3vppHVFgZSH-rV2UQ4QLlTHdnhFBixw3HQg9FOG_vbt0KT9PFu5hkK3MATdoVMPT4KnGDvCmuTCPJlKJVV-Ikr0ncEz1L6DbQXMJGg_50qC4z_fM0HUHtfB_yy23JzQ6xIOEl4feU6tFVRprZPPF-OsFV", width: 3402, height: 2723, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111291653184300497175\">Paul Ciprian</a>"] },
            { photoReference: "AWCwydj2E4q0_FexaNKRihwKZBI0dDVeKl48tWnlXi6iBjZIv73Vt66rMNtig3uXwcP7NuiKjjh4rb9G4--OJzlXLMJp2NjuwSbdTsvAm9OUmrldxcyuvWezpMobEN7c0JhEpyQEvq0W9yRlYSEvFdi-Lq2P2PgFGBMXPRgB9QT7NkvxoTwKVFqNU_xqLfQ3ivCUen-GAqicQeplaBZ7wrGEsZ26YoP9nMlruhq2d8ObgVZPux0Vd9icuEf2ob5zmJBBq9Xw7Nzb9s0htv1hPZvax0S32JHL73DKuv6B1iUYYfGG9zhbjt89ml3bBhNe2osXAXcejPIRrudP9fq7QhiqCLc3AcQ4i8s4zYDCXCK_y43PCAOR9zFvtcwhaJQh_P2UdXxgQVjXPS8SiRkIzuTqWZyEdpT_1ATnaVxxmUWhRkpF_WEeMWBMRXOHFP-1Mr1i", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107280890673148129839\">Jherson Jaya</a>"] },
            { photoReference: "AWCwydjd117N3liEEtOtA8CKeSQgFgVkNajqIY82JuYO3ygvAavOqx2Nw8w27BuPJ4H31jsYo7ZRh7W8Mw7F22d1iH6WOkMvr_3tUBbMTIZk-PJTLK-5NrQz9cRqvK0YQo1Z52zbu2bixx-CVQf4L_R2j4nB6wPMDsRL-PaOB0Taow8T_k7OfHVclMIUfMq-iyfmVUQ9touwGvX_kXNZ-6aVsuqH9aJ3YJbymbzAadAyjmypToKi5UjCNmCwz3nBXciDxcyG45Bsi2gaMpaSX8OIFmgKnSM86DN2J7g8XTkJ1HukDEpimaw1adQaiq_sRHSMXw9SbgzFr_Aj9Mnv3W4v0Qxi-EXrvIqbmswIABqCUuhUSg2f9RIt_nf5ugXri2m4xgbz9hlCEIORsGI4olNqkHN9qvOhkYf7Jp7P4ACH1rK5Tn9Bb5zaRxDFBjMfJw", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106233732649298794116\">Minh Hùng Nguyễn</a>"] },
            { photoReference: "AWCwydjmSrGXsku9iwo8aIxIl4vh7lpzli0ANn_W84j_P4SAPtEM6I0boa2rPaYxaLfmINn658Q-EjiBr5qEefBveAheAAJaG84IDkC9ocXevkvjcARMqEFcDr_PWri0k0DbI3Gg5xqDzv-GtMRpXkMQNz-MFdXF_cz_Qz-_9KQQxQriBQ87MUpKta4UFFVWNAfhPwSjraA0TokV7xponvfsxol1mu7R2gWfO8a16lu9DzJOQsujY9Yjd2YEPuBQBqP-Rgkvl5qv4D0V1jf9_5JN4LSZ4uj-nrVp6cZW51irEstFmftNfvE7GQQG-Hgvubg8Sc3ylUGJNba_a_uPx31vIKQAu9xUetaVX5wn6-OpcwjlvBMQOvwSgcLTJsyEjVsb6Ig-oKTlvZ8NVSly4dg2MtH2spGSLRP2cRTvXoWKLxxZ4LJGz5gE2YzmwRa2Pg", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101259986528705723576\">Tôi, khôi ngọng</a>"] },
            { photoReference: "AWCwydg17V3CZHPTzLNRACdx-uR_0UOgvhRLvTtm3KYO-hklqT7Jyyv5Li2NIdiq_inHuc0WLbmhwVy70NQOsDA0KG6cQjSNLJZZZWu_snAxfhe3VC0a-dTsd4rMb4bJlHoyqMrwjmNmpq03IqdX2Z2N40Ipl_PzVKZ7f3euXUChYslmnJxQA17HHSOPrHgoqi02BHTR3zvEqEupRolpM9VkIEbL_3swSUbsLx2kZGLXbqxHAssm9oo4iOkfTasr2QDSWVkSFzWyQGim30dFC-exyrGHRwX4RwsRFJU2xH3SFaPZg6MSz6tAP19G8MzQCFdlhLZIxV1N26dA5pqpEFKTdLlCx1_X1fgg9fiUa_3SbFV-SZOc70HChHVT-CyQVTlIJH3GmcAuzggeUotDb--cxS295lkdu1LWjCptdGYK4NlpCZH1W_7c3waLQygYWxMu", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110557828288569645344\">Arty Larpnampha</a>"] }
        ],
        summary: "다양한 길거리 음식과 아기자기한 기념품을 구경하며 호이안의 밤 분위기를 만끽할 수 있는 시장입니다.",
        updatedAt: "2026-07-21",
        highlights: ["화려한 등불 거리", "다양한 로컬 길거리 음식"],
        tips: ["소지품 관리에 유의하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=15.875503,108.3262087&query_place_id=ChIJLUlfw30OQjER32jWkRuwRAo", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%98%B8%EC%9D%B4%EC%95%88%20%EC%95%BC%EC%8B%9C%EC%9E%A5%20%EB%8B%A4%EB%82%AD%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "Siêu thị Danavi Mart": {
        photos: [],
        placeId: "ChIJp8vFkDEYQjERqCD_kJCccOk",
        placePhotos: [
            { photoReference: "AWCwydhzbXCDTA2PNpIC3w8EDEHstv_8V61GjGk2J7wk_s3PcdkJxeuIG6ctZj-V32WH4UfLrsJMYrNu_bClaFjT155hpxvaikM9glKqh30rsk6lZUBC4tcLyiKgnCE4Mfo6LhAYXNxwsamcyT3dsscpYdPQ99_zN0M3POfKh-JxJ2bQCWkjC0g8NgHj9PXjgXlkDSbyqgcI9EMpnUZ6OMOGhMyGj1yxIAfoyqZbGdlvDjUPz6FfeMq04zgF2NZOcLGi3PrF6aITQfkNjqqJ4a7tpGhdK4rjKZMeCE3qHfRKvlAvVALJW7wh90Hy1P3GmyfzIwvpX4eeoi3p_VRnq-0SkEIHhIHP0fcDwwZAuYsc5vigETNPaTnwPRh9Pne2ZK1sp03waSIdqGf6UrE7ECgeOP7yuGrebuJyfHPONL-8H1Y_KA", width: 1100, height: 550, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104861459444725785299\">Siêu thị Danavi Mart</a>"] },
            { photoReference: "AWCwydj__eA64nx8bzVbBiKCKJIT2slE3_Bx4avjhmf5c7rgqN45QKeflIQ45vGumu4whJyTGPHCOrESaKulzc3MioY24JtNgGV3VeodgEVt68B-rXjx_hYOFZXfUnlzw7RjZD-_HbdSk56QaDdt3YJ0MaAUgeGyPD7MgSpg8NKvaxXEbFhZHqUSrXaD3Pjg_6ga3REgDM56uB4Yc4rw0tddVvB6rvpuR97eZhl-QjdsG097kqropXQvb9az3Z5Mv9E5BCTt7tEqgSaimgBpNLqgf66R4aBvqBbUhKpiPmrLTRjk1091wLZBmX0k_q7jlcqJAsmnhr2twiKdfFKysnRmyDszV-MR6Uo9QNqW4a8Bo_cwLy6xcUGN3ntgMC2mcoyVK7Djx15xUvv4_aiLKRRdNiDYqhp6wTJ6XSHxg2TaLkRjw29Hw4SUnU0htFy-nDYj", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105669595976742284123\">Thao Pham</a>"] },
            { photoReference: "AWCwydgXFPkZsp1vqRG-wUUjs8zZgTZ-hjHmR4OVwbMlvUFn3Qvs5aETgYfkPX303pTBOV61HknWYAN1KLKWA3QzMrjl84IdxumQavh59Cp0_gnm0hz8wMZFiyDQrOO7HkaPAaOBN_AtoIQiqNw-PlU7eaxzQqAfKizlhm7v4X5WZhddq4UW2_971TzaK2lxPvAaPx3mTUSr7pj436XTxaf4IZUyHDVV-SBkuhjbk7oHn4z8QLr9oSk2h5oqx5i3oElOa_P2RY6Fkg-T6I3a5uH2lxsEyQBBPvrqB7ucx94eP93vuxVjH2rIlhfvF4W9Bdmv5cgd7HjWG1NZHBKMz6IoAPSaNiBn5-0ls2Xk9QpY_HofaUX2QAFlTYnf2jTgCXZ0ZywW8GwfgnaJGEWq35LQT2BU2BSiXs7F1QFeVFBkYtiPqil1Cut40a97xrzXPOZO", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104861459444725785299\">Siêu thị Danavi Mart</a>"] },
            { photoReference: "AWCwydii9Altev3ThpzO_5-a-Ts-zE6GYp9nG9zv2-NU-ZizNuHumM1-BcX90kas55fYsZo8J2DQyoYlRIgZPxH96QD0A3Piywm9uh5FmR3b9nhqT1VxjpWIvcM3NqKfKdD1WYp8ZZ2sm3-Gi4Bi5zgHe_LobuFfKJztyjmcPkJ-LKD5qu6num7phVT9opyu2KWaaRyQrvnK8ps5PoksPBJIYqjI0kP2Dptm2eZEAkZGR2qliGJN7SCUtxCQdxlrYYtmLB-R4fJJ_DdjQrttNsPFPQwckUN3GgmuVicEj_PXUUwiaEgHK_cB1cTlHyhk3_mOrZRDdjwD_hP2v1MDFFTmMayRPJ3NH_QPsvFNln_a5KhIuIiFQWnvPGkz1leeWQp1z4n-bvC2s6jmKdZLK0MmAJ_dep7LblVaOoUCjpEYdbvR9UuY5lUChUdHKMaXoRQO", width: 1920, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104861459444725785299\">Siêu thị Danavi Mart</a>"] },
            { photoReference: "AWCwydhPbAXIvxq2BAkEIH7Mar-i5dBrHviZgUkkUQX12aXRbjD8zz21L-sSRqWN9BKwxaISpcHG3zoXo0-9H1CNWL6jCrS4qZtMmroYzepo66YjapWXP95VqYILPwlsF0XRJuyVWHs51rrHYIT558-WU1UWblBUcwgSRGUN5sCnIkWvXgbdp63MM2LsV_nw-iizMnv5Q2i_sizYpMoBnDb3PharstWNq3esJh5ogPkgdQNq46jbwLKu5iLBWolvdYGIMh4FF5XW_Umwj2GtV6Ff3V8uM_dR9DbqDWaK6U4IxsV_6NsA8NMBhq1Ye4-60QFHPhBuNwh1DLF_8dwyN0sPHNhxsBGoHgSonzNWaSn7ExMJFPVgfkPXT7L6sQYQEiU8Gne1GWNJVbjjY1iPSGutLwwVnCWvHK818U5jfXbmZ_lFXxLII34wqI2d7FavE6cO", width: 2560, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104861459444725785299\">Siêu thị Danavi Mart</a>"] }
        ],
        summary: "친절한 직원과 풍부한 상품을 갖춘 신뢰할 수 있는 매장입니다.",
        updatedAt: "2026-08-12",
        highlights: ["다양한 상품 보유", "친절한 직원", "명확한 가격 표시"],
        tips: ["직원의 친절한 상담을 활용해 보세요", "다양한 품목을 한곳에서 만나보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:30 ~ 오후 9:30; 화요일: 오전 7:30 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://danavimart.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16821116752950665384", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Si%C3%AAu+th%E1%BB%8B+Danavi+Mart+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "K-Mart": {
        photos: [],
        placeId: "ChIJ08DctikYQjERBxwPwDPRVMo",
        placePhotos: [
            { photoReference: "AWCwydg0DIQ5Hq2VYqlcs7SMqpZXDptzTt98KhiurGoSBUwCU-tMZXOaFUALMcTcswBYb0lPIV4j8egt6nP94C25g_gtH7LYZUXH_ma0ii1y29lTFVosZp1aDJ9Uz3iomM227lfqOZPh9_KLuS8xyv0pdXAAYS43a8zg_lEFyI_aluRWOpK68mzXOBL8-lsZlrPX-IkNv60qZpO__UiNRZNRRZamAzxK1OjW7CweMbWBwhYNnQXPgh2o0AZXV3ascwAoE3TbYQq5uwJgiP-24L3uR8f3AeZri9kTV54ANA7UQRQ_Nv5geuCjtsKmUVIl5GG_wTGmpMQxKk1wcgp8VCxsDCYE8WOI6VI4uJYjuk-R3VTK7nsrib5zNIVu9LjT-sLOxvamD2eWCnPTP2QcmKcGGT3tOIo0NfCsK1usgA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103303799384674867101\">Alex Hur</a>"] },
            { photoReference: "AWCwydgMI66ptPnRD2Y-yKkSNfGAsHT2fvUOF5Mg3MWZdqOJos87MywlcsxLle7A7KwyIAd3bwRFoz_ciT5kxGYVInVulmsRtlq0g8A-61KqfyYBoDaj4tr3eJjKWMpL1lhQ5kLkkYCmd_TZ_zPSIi40Y3fSM1K5APsEoWTl_msunPgGF_eeoT0l5J_lL6cFBjv7HfGxvhluUCPZyufCTgF-Rebet856q7bh7tlXuQFEuaXOeSAgX0OEKPA899SSJ-PF1PL1wqOBQzVbXiKdgx3gaHyNjcelX6nUAK4dFEVWHffH4GQL_8dNxYHQ6SmyB3I6BDfb73WEllyL3-Hh-WHzymK85qcLDdFTUnv6XkbpWQ0ddmmDtjNwpt4UO4ba0QqIX7njcUj2JFNPLAwWFDTlddZtPG-ceFH00pTUbcivViRvp2X-lkIELYYenI03Yw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105398606563964000263\">An Channel</a>"] },
            { photoReference: "AWCwydh9da-EY9RnNVove9m-89UOGh1FwoM4DAV7rbHZ4XPpAwyFa5iqjXHRpbn6BCbvWI561ZIzJD5NZuVke1XZwi5kNEC8HgZhnpZKRvRvLydPaiLoXtHs9MMJ1EWZWCJhualF_MuNheW89eHCugTjL10kwUhdlAOcYE6-XoBt_FgQCbGPPvKA3zmIoYbTIrDNGYZWMG-Y7DRF2q1tjsIMB3kWgzueiXT_KdsEGzaXHaaKHDJoJpSjQMLgrGaqiF-CEjFFgklzXFFpAldVfDCmedIuIdw6RS9DONnOGUFAov4qmcru5LiJ2hW6oegcCU2_I17Zyb3S96ebvmiOjG9u6rbfk9atkFx6CouekZFQ1Z7BqV68DQm9Ep7BlaDt_-yalHKj2tYTLpGuO_1MpMZ9wGVYNwkdVaD39F7sGmeaCK4aDUE", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113062381957600998381\">David Lee</a>"] },
            { photoReference: "AWCwydgQkUMSiOXruX5FRZtRplaAgeiqKEzpY9-eqC1rbkI0W4L8qxNaogAdBaTagGGRfJsnofWBiWp4jYSmJOV38Dian6uDG9s5cimWGDPK5RwjDVJeiCj-0WjXGXYJae2juj2Zup2K73YeHbs-w1BpIM1gblWArthIIEgchZaH2Nf9EvG97sw2--aootqwZO6ZcXhE4UWV5efIuc3Z3l2jp75NuYnnmc3feIRnidnHF3bi08R-S4_ab6w8jU1GyaVsuaRsVNA0NKduXaMFA6guWp-N__7CWPyz6dLfBtjtpa48Cw5xWPzIkuAzYLLfLTUJa31QhkvY5CwBRJfhkOYqNdr5vsAcu3R2b1jHWSB8_j_w94kjTekVD1V--sTm2eRLiN2c0_me1MvvRLXbx2-IgOD9n0YOWJ9Br8ri6flqzJg", width: 1280, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108934086680788775007\">Mr QUỐC VŨ Liverpool.</a>"] },
            { photoReference: "AWCwydh_vA8RQqxCJfK4-ipauEimAubBtMtL6q7zAPM_ccBNDX0V0IXt8DVfs7TRIvlvE0LiJB-4Jbvq3q8PciYr74-7Gf2feHQLc5KiffgccAPRdkhcXfcQnlXwTp4aV2UMtaPNZBfLFYourncmU9EpynOKmKkw5gixLJtNIiMg4FXyjV8OuMO3Mllfy_Q69xWj_DOylE3MWk9ZUAQVlahRl_r4bmY0xCbGZDa2ymKGg9OH8TbvJcbG9xuWACjaJ7XZiC-pKjnL-Y8QJDopM564_4ff3aOVDp2ekoLKk39PUqYKl7qw4yUG160YeXFgvyo1C-FhBME_6xNDufEIpDxz-AaVKPVuiR24daMnASlXzs0cnpLm6XZoqu6ft-v6nfRWHk1VFg0LaaVyQe8jIzFo9LtOkf49FqwOxfhS43lSCsWCxQi1", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113170269828091879673\">Mirai Huang</a>"] }
        ],
        summary: "24시간 언제든 이용 가능한 슈퍼마켓입니다.",
        updatedAt: "2026-08-12",
        highlights: ["24시간 영업", "많은 사용자 리뷰 보유"],
        tips: ["언제든 방문 가능", "다양한 상품 선택 가능"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.deliveryk.com/shops/2", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14579507913900891143", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=K-Mart+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "졸리 마트 옌 바이": {
        photos: [],
        placeId: "ChIJj2UKYlIZQjERYPJUwtGG9Bg",
        placePhotos: [
            { photoReference: "AWCwydh64YYxnxo6dNHrPL2kSX6Fypb_2eEXSveuggM22c4JvFrVAUttmZTEbZeglUVoDDcjPq3iyZUOtOzmfqNkH4trfRWKuP0bqaaf42mOizlYsUZrJ25B-ChbHi1JNfEec63cg7Q3zfU9T2L8otdKjS193MH5kUsHaNLVwo5drdQ1P_y_MdTbuZxWjw1jnvwDtNZsc1xy9ZgBM5kmtnbMc9BK3HN_ZbgiPDKFzsQqQDkLGmQQmM9psYhwgpi9v1mb5jVvTNGpaNgeqgwzAckb-7HMaUIQ4qVBg50FvJ-NrP1xsYSx84JsMBXlXJ86pzpBRYFwztxnyy5z6FwAs5XA1wrz4qzvavHAHEYpr39xxo8vb3SnfntAJ9hsMsuhujNyJGVErjCjrpcZCdzcfa3WY1OOdprm9L1Ok9vUf3i5_OoeDMlA", width: 4000, height: 2792, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109696179053253868886\">JOLY MART Yên Bái</a>"] },
            { photoReference: "AWCwydj0_fNZSZsQ3K4CbLePDQi-BK7I5XfYqNGdZnmT33KmZesD6f31yojE4VJdHjNrEVDGyKX_gaUygOoFNb2rthD5oemOnhNutFu0XuOmt0Ba22lo48j6JWVZ4v7GC2kJEk6A4d_X6rDxFmxHKy5B6FHlJXTgkwp71Zznx9uilBnQ6AYze2bNUIcYVqyJ4rcBmfUzh5KSKnlYBOrxjlhyBYCtCEdvAZpoQCs9S7yStyT07Gi65gXbELHZFDcZwS8Z6FDPYyRTbG_X4GsGG9j8f0xNQmctAV0ZvhPIA_Q7jruLxY6NzwfPPgxyu-DYbWePgJtEvZv-DsdK5gGh-fC-UECIuUePSfD1SMgMW9oHglO_nDlnK1L-D-9CN2Shdiq4szF-u5D9__AYc4QRSNgbZXk1ZQEhk9ahyhOB4qwK8_qAo5trDY27GDyZdoDVL3-G", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103353903900081562848\">루베토벤 (루베토벤)</a>"] },
            { photoReference: "AWCwydjn0-l3wTaD_GZjsMwGpPdztfDHjYNs0z6aJ6dJzJcsSxjCxYThjp9o3ZrPzY5t75mWjNmcwuZrUzB-qcGC33q8-qFo9Vi0GWN5_RJ8Ai852ofQOvymfWtzKTLLuSP9EtXhEkDP2EJvnlyIggm4u0pFbOpR75LTxIcTCgBs-qOdpNCmbQjbl6vVdTCyeLY7FJltZ7Oh8A7nwgOWeRTDmR_BGnS1fnYnGq6Tmu_db33QUFrr2His4vSsLmaNUurDI5HbQc_pHKK98jXNkh3yecVrQqVteHF2bXY-nXWdlCtczghox-BQUcXHTWabY5QRpVRINyZ9PjV1RNtTh7eM5jN3pfO8N3hd4lxGGLBDjAh3VFzhUL3C0I-SemCF4dG7lHoOgL6IIGI7PZZgRJmxaPCNnHPt04KFpEopM-Tt7Sz9SMMM", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109696179053253868886\">JOLY MART Yên Bái</a>"] },
            { photoReference: "AWCwydjGQlYWOPjMMicbe4QYZWkg276XXvyc41aZlQtNaj4h5nHsB-ZCoYAu50DTVNoXFceISGhokGX_hXsFYrF8JqQQaU15rEeXmbqvcKkos3CwUFMh5e2M1Q_6yxA7_ozogESZlFYvuYklBXL2Oo8PnP03LaP2bDZsCpjoJCaLqneqkKfjjxGbjkk8aOM0oCyoEPuuSgArMuRV3cskNN22hZySTjofGnwF4_uy5yH-r-9zwnw47EB4Mx9RJsjyNjXTRy9gst_35hBJ2V8HuG_AJR3muQr_sNkBwuFDD7dmSnDviwnTlwoXzQULg_rQRBkM23t1C_DsFr7u63M31tggGWgC0xJQTS6xhB8C60mELeBsd7ES1EtU-VGEUEe0UGKglfYeaxdVGONXAGuetpFC5VBSX6oDTRrV8_gM_iBRMK03kA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103326099679530016655\">이먼지</a>"] },
            { photoReference: "AWCwydi7EXGN_Q7HUPHFn3tr5vqymoze5a3qjb1Ui6wBTb5gVGMSxdsJ8wWCz7ubpuiYKSXJA1hCFxliuUj2WvUWk29cn7St1byQD7J95G2303-8sw_scNNvoVOzRBDHNVGqMY1o2hpCdiWZVgbiLBO0P8jeCKpgGR2sPur5Gef87RJlnfs8JTKA9dx-ne4EQwn44ll0waw0V240TvfKldXuSnvwjo4l2eEHqGgnI52QpbSXYc7-IBUZKp3I0US7Y7iv9zsUj6kQZ08qih7KeCe9wnkzBaWU9j-PryrGPVjHlwHL468K19b-4p30261MkcW8NGH0Y84OQdN0a0qSghgk1X-Wu9dOpVNNhujlGfXcCd5Yirc9Ng5gQ0BOQIiD7fc2gdltZ-i1WSIbXMddYpzDd34Sa6yiib4CsrIfX0NGXPghZiOf", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109696179053253868886\">JOLY MART Yên Bái</a>"] }
        ],
        summary: "합리적인 가격과 다양한 한국 제품을 갖춘 깨끗한 마트입니다.",
        updatedAt: "2026-08-12",
        highlights: ["신선한 음식", "다양한 한국 음식 및 과자", "합리적인 가격"],
        tips: ["한국 식재료와 간식을 구매하기에 좋습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:30 ~ 오후 9:30; 화요일: 오전 7:30 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1798210386694304352", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A1%B8%EB%A6%AC+%EB%A7%88%ED%8A%B8+%EC%98%8C+%EB%B0%94%EC%9D%B4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "TOP Outlet": {
        photos: [],
        placeId: "ChIJO04Q91sZQjERd63OsRU4v4Q",
        placePhotos: [
            { photoReference: "AWCwydgVts48mUebDckRMn3ML4-cRpwxSQcgUoWENn_0VmEOHuPU_SRgwWTxc81KXlOw0U6oHj3UZvgyLlGc3EVfn7s1k-HDPH9G1pR5ns4qrJu1cOCYBE85q-Mv1-8kBKGxjPN-PgzxLQRiUPBHzsc10hm8pWWePa3XFX_L7ovvSGK1bhR9dYEOQiHUTk3rg1BPgvwsmqFk60vUHq7vopHg6_tJfwCS1ecoMU-eFIaerCNjXNBvlkg2x4b-HyYKJyHA5DSvOw_UWV6NPt58wjef0AE5hEmAQ4X2wHlt2vh96Qv6CGiZlZ5I93w0cZ3s8DNHSJdh23D5Gi9qQPuaewBTCvyAGyAtLncchlPfaTOurFwUwM4tEaYMJQeVTjCGHV2ef03LN8nKmFteqWrJKntq_WafW6N8nphAKvmp1YdbKe-hog", width: 1280, height: 686, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100351115796088047175\">TOP Outlet</a>"] },
            { photoReference: "AWCwydhCzZHuzkRUeGiNohXelPKsHdo3XXGiQVO_nsuHDu0nRxlrfGMQkDJ4ki2y0C4GjDYfwkhhgF2Fc5J3uybFBq4CQTSe3V_Vav5lqNfx4flKbHpfkgKGoEMmImFC_OiVrgORly43kbNdzIHLczihmqBGbWs8dmjQzFZv5HhaPTSIY06d7JKdSn2haEFn2HfA3NI8jz59_YDigr-oLiXpbtTp4IvJ8WM6XtC_mP8Qzegru_H8dpkOlW8QhKzBT2tPkEyuWRQAf5nJ-tTJ11-I9NbdX1C3SGXy8UPO6_UCoezMuD_F_G6oYwDpgW3NRTJrQQCyGj51FspYm3Y2BqPXoJAuM0lqlSl-Ft_QxWJ0vzEDnYkcEG7IS0CSNF61gvRw8eNSa35-fE0M6__uIielOtPqKCw2QRL_Uf1JSj2ECdsORZ3aOX0mEuwlajoGgID6", width: 1920, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100351115796088047175\">TOP Outlet</a>"] },
            { photoReference: "AWCwydgmWay3hFyqCUNvah8FFsEVVBNBdBhATNQKDnYsAxEsYKUv4FaHsa9WpK3l14z3OH4ngiZnddIlHcaDXStW-tWV8aCx-8u7qu135E1uzAaoAg90YxFnRf9NiaVRNA5y7Xr0KgKI1J4hAkihBtS5N4dvJuo7MwQTAyKcS5NPwTyaChg3iAxGIQIwATKE0NyeOjXShkGeLy0u7XpewpIbjzZnXDRz5e3uVXu7kSO1hE6Ss_KiInZxJvNDQAp8iQl7MgV_qaatV5ImxhvR5NAdA19EfJ2R0rT5Wzr_bmTDQsOvep2as3ixqKCWHJCzd2AziMg6KRh5F1znDbkRjEevR85IetiBgVo3Tgnzb_eB9gqi55nClleERREYJrgyXHZpvxOsZZmMHZlSM3I1x21MzwmqjCaAiHdqWQ3SGbZT1mrSILPhn7MeLuPGXu-SQLwx", width: 1920, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100351115796088047175\">TOP Outlet</a>"] },
            { photoReference: "AWCwydhJXIHHvWjeIc76-N3WgHDwWh3PJ3GGVyIK9D79b30CTM4C2jlFIbjk5Jgfzi0HI9s0BHtG7X2s156-EHdKxOrw1cr8qJypTD6tL1kg_Oh68uCevkQ3IyaOmcmOiJoJrM7r48SlVsk0RuzB9fmBDNHRJUkexLc_qtnzBm34CnF26ENPpfPySq3pNHrLuOYSYaywCVgeDCaNMR54KzBRsIc_wT-Hz1yAyOJlyEEnv73pzqUSxgFFEmSwdo0goTizBYjfx8ABScR5GZNwsVSTvrFteqJv8Gqez0kvKhN_cOFIS5whptgbGfNnQIz71M4hyEjmsa-RKKK8p5rIjiLiPiyP7O3ioRhttK9Q-9i43Ou3PtGxdyPt1lkllkJD5xwCtS-ZGyURjHFrXqOebI6Hh8VeGkwgmfqiCW4CgclBY1x4h-Cz", width: 960, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100351115796088047175\">TOP Outlet</a>"] },
            { photoReference: "AWCwydh6zyu0mB-rSW4xyDKaFpJfGLhXGdre1oudy3SBIi446OR79VzrpQRgHNCwg8NApVF7dyxTqmioFAmj4NBo-En8JoRRacEEMMzlRoIyhh-2rxdIesUjeQD8nCNU-Ro9rZoAJdI7RrY8KnAk9MqLRFTViO3AH_iI7BHo5jhCkPuwN4BgMlDU4msZu4ezYQNImsg8SaMdUlOTxIJi7tZTsbQHgJmGHaLu183ft7WiSaPU3MbJHy9ejryl6zUYI6flTSpGL-LmIwfZabEPbT9z9pvanKq50wnAm4YSUiN3a6BZR3jHDAcc2b4Y5YGVKIv_xXQUzy93Ar3eMK2XIfZbzGh4Pssz16YP4sRJblltcGl3ogwjK39zUviMYw4YOeZoiCw3hzy8kKWk3EDjyhoeArZcBICYJP1S1yqbY2QMR2sKI4sOrUYJsIz5gx7CLPzX", width: 1920, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100351115796088047175\">TOP Outlet</a>"] }
        ],
        summary: "고품질 브랜드 의류를 파격적인 할인가로 구매할 수 있는 쇼핑 명소입니다.",
        updatedAt: "2026-08-12",
        highlights: ["아르마니 등 유명 브랜드 보유", "매우 저렴한 가격", "높은 제품 품질"],
        tips: ["매장이 지하에 있으니 위치를 잘 확인하세요", "폐점 전 진행되는 1+1 등 할인 행사를 활용하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 9:00; 화요일: 오전 9:30 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://topoutlet.asia/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9565425799386803575", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=TOP+Outlet+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "FO76 Kho Hàng Xuất Dư": {
        photos: [],
        placeId: "ChIJnayDg9oZQjERSuXKnNvQU_s",
        placePhotos: [
            { photoReference: "AWCwydj-hmHFce2tqwx5gVX7ZdC_47rHjQghIhX4m5ULp0QEO5xXr0uZFkMSCm836MqWK8yUGlCHwIeLEr1Zge9qS-ECzReWXVz6rsaHB7oJDTjAtOZcPD3_wSrxDGltonYkUwPtcaYNGzwIILgzloHWrM4Il8CE5f5Q6RRzZ85iAZ9N7lw5oK91t6edEXuUvSTLLg53o_D2EparmzLvPuOtUAwx5QBGw2zp8tUK5uYxwMlWInA8Jz-pxwa1CGUGcI4ZZfHtxjEGDvZXcUDioc2eTLoOBNsa8HSxJ8T11EBBgVCKJSXNJFBT06V2VTdZumpaqYR5pTbcTTlfZzpzd3flHAjdZCbTfS40kALCG8A6pmCmYWFEB-cqyQvODVuDhXdA79-tPJ3XHiiraoC3Uqp2-AsmDte4yhu1945m13M-d0fpM3RP", width: 1920, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108081678983424531651\">FO76 Kho Hàng Xuất Dư</a>"] },
            { photoReference: "AWCwydgO2-ehJdKfzmzk7ohsreF3D_UCzlhn3p2dv__R6LOm3wM3gHQEEjwmqw5KvY6cXwogaGzTlh8kC_fqwAeaoHG7UXR09growU_lAdo7SE0vtoiuP6Sn9wpi9xCLhyFUw47-96GMRTD5QVVhdjEdxva1HYlfpVbON958ZfqMiFjoH78TwsGEgyCMsMD8x5B5FUhOcm9qSwXUVwwwyLya6lv_fIVbb5jN_XlxBaO1eDQywT3-0cR2C0om-Quiu4v1CWJUfLRcWXlBsshLZyY0Hpuv2QTIWsabNzR9ImXxbSiQ5ijdR3N9ra07w_TOaLXff4O9FKv6s3u3Oi7b93TDjFSUQAQphioGlZRZ3Sm5P9nTSh2OvF01vZfLAVcq6qQdRSAmeEkRIwgNQBnVQBH-rzHV7FKY1nZntDRk4a79qGTMbAqJKA3kTR8s1mQttA", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111487048547366264873\">Tân Long Nguyễn</a>"] },
            { photoReference: "AWCwydjmDONF2YZTs9TOMtmce4LjH83HRLXa7ntvhHEbZWdHNxoAZR6et14ABm33tUHUj6GfSywGm0-8pEJtYCgNZBFETULXRVRJmYCvGeHckG6-i6IsRWBEpxyXNfbBU854GH-lHchL0_RYBFqFZzX8w7h-8U-WcXl0uCYStOjmsAqqFhpKtl5Gv5Koa4VRULiNzUH69q9LwEwUonYPi7yLYyQWtlK1M8i5Bis0_Cx_vQEVlax67dpse2B22tBoX1ccfQXXlGohTzLLIZdwyeZuF-FUsuwcMCQW_S2ylL98kOmSLt8Qe0U498_H_t3DdJNg004M0k8uX8SniJ8RDmZKoH7aTTNRbybPnISlhAmq-YM0v4cTesg2QJZEoQuzJUEHMmCQmjFY7tpvVxiGLXm3QGsmUnQAs78F2271denMIlG1z1Qa0OlBDqQ7E8iGgp3r", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102263705607441182618\">Асыл Жумадилова</a>"] },
            { photoReference: "AWCwydjeyTK0DQgRMUhnoNvWvU0HYIwQbL8rRfcMjG-bmmib5y1tv4ru_QdB6PeSMrUG6aDB3jLqtokUVbgPMBGglsfYueCSh1FpgdDUIRgmXcQjWGHUU5jlWIrMEkhx6vOQOlI9MlJ4e8Q-sQiPTeJoHX3M6tx1fuSSnCM3zzM3FgarjzObxHdrZw_5zUt_EIb5MAqKBzSCYdsa0lOql03LNHkm7wBlLmhmatQR4lj_8wV0IITKkCVgQda0E-PAdx4LRjjMp-Y8nyVLLJC1AxAnbdiJ-1gnbv_SP_xr7k3awDY_nmOc098p9JQNIVGY94MkLA-Fz6_bktbDy5d5t9CgdYbV-dRLkh-dl2SielJEoYol2PoFKDsAq3kZNgoUy_GN7yo8Tgy0ICewiQCstIvlfdiSt8RvkuX4s4nOb8XlBArlCZSdWBNnEIx5yo5TvDcJ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117021889705351603749\">Ông Tiên</a>"] },
            { photoReference: "AWCwydgJxLCDKWgdbilZk83h9UAgH0Sapse8yr7wtCjp-N1Na2rOCe7Wukv09etR00IxPuBwaLB7W7PegMRXDOycbjOix7YTTCgRkihFcvhnCWBgszfSdHFNsF_2rOwZFNG_jYxPnGYtrG1X-dfoBnV8j9kS_HMQ2x3EZLpQQcweK0L4BO3-soYxSTFuY6x5TCGFC6fxsIREAWz-5u5pf_dWruNqKoHgRSOBhVslQNOXrFOpxu4Sm6uFCFc0bmOLPnqpaKFXqFgL_UJidlunK8rqmZLFL8mW4jHOxsE4W7bRgSfbFacfAWVMXsG9AWXfxy1P6cHx-FPncARCrU3o4jAJW-5tKvVVnXtXOgRzPKJDT0vc9i22Lb-NwyeeHl4U9cHq3Lf1p8KYwdL5IHr9EyViYEj8RUCromQSU2SUUdiz8dtlAw", width: 1920, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108081678983424531651\">FO76 Kho Hàng Xuất Dư</a>"] }
        ],
        summary: "친절한 서비스와 합리적인 가격을 갖춘 베트남 최고의 쇼핑 명소",
        updatedAt: "2026-08-12",
        highlights: ["친절하고 열정적인 직원", "합리적인 가격", "신속한 재고 보충"],
        tips: ["직원 Tuyet, Vi, Chau를 찾아보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:30 ~ 오후 10:00; 화요일: 오전 7:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.fo76shop.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18110048168233854282", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=FO76+Kho+H%C3%A0ng+Xu%E1%BA%A5t+D%C6%B0+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "K - FASHION ( Discount Fashion Outlet )": {
        photos: [],
        placeId: "ChIJmdpmXAAXQjERwDWgSvi2dG4",
        placePhotos: [
            { photoReference: "AWCwydhisqrsoL3aIKprykuIVDvntGlu6IJRVRbJyGHE2DUGGn-HdFaoPSdF3SMt1g7DfjLz_aEaCQGOMLmnXovYGLxa4LcGk8oD8oHAkVLs3936qlXaxRoES_hA1ziBPnI8O-5TQHkFJcGpK-DVD-WkevcA_TS1ZkGDHlOCibXWxSA-xYB4HVDahGfnh-sgytuz967JV20FcARcCv_xocbGzXmJYSG5ZcEQEx_FhE0A9CPhF5A8VFEDvd2FbSyGJ0e37-tYCO7FMtoYSqF1CR76I2UAdxvdVVLpXWwxTNo2GAWtNoNhdpMQVb-j55hEQNIkBWPcJfsuJL8mugTEd0AYdFXQyOaI2AyH3cWy2RrEEkGj3cbC6_mZq-TYLVNI5QoT02kkmWiTUSsqOUgW_hotO-q2ezazDZC4t5-yEa2vNjl4OGhxyYR9cuUB2l3Z9g", width: 2160, height: 3840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115317572364583616072\">Đường Trần</a>"] },
            { photoReference: "AWCwydiYVoXK8g8xsK-BqaabDrsTplI8Fk4UzB0lCWfeps4h6bJqq72TuEOJQpzSSjD71RcILrC7NtlbEl4lfpWYu0MzUe_2EnBvSfRcC5BqEf5OG6VUZevnSFqNAWgaqWpUgeCsDPPMazlQna47xDUjtMFO5dd7Mg-CftLZG8WcXMnBcdMzt3ZDWcDPmGia2vJLZodSBfKnwpojNffhRk1Flr3qDUdORzXeN89hVHwtvS6aAAiCVHNSWyHd89DOF39nEtLnzKSQQlHASHKqJCBnaEKR0epJoju8Qe82F5pxCuqEw3_cIJsPHi15cmjxaex2tWT9ncq3WZPuops7_LOz0CmMHO3LSL--_0nxYjg8IvUjQOScPs6Q3pWnN6UMcnRDNO4PAotF0_BgGYzK0y9uAzRneEN1RP_yNiA0lbHdorBwrNeiN7KLuQ7jr6GCYZnq", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115225841846655305199\">IN park</a>"] },
            { photoReference: "AWCwydiBYE5AhsKOZ3y0eQPgDcLl6kvI98qp_cOWwLEvkAd4jse7U-yeF5nzGUayUabFrdYSEmaUL5vugGJbml_dnWHnSEApKh0EOpqlWAk297913qdFdoliVoQw0sgdikq2VbI_B72dB6AXvoTPsFOd26vzzixF0XkSzkdVbc1zwIkb3jiIESLcmulzm3SYUHbtSDxloCkidka4dtO1HQI156zi-yw-d0_nuFFX2oGv_UE9e6OBP7b1MFa9ePqyuM3-i-u2Epz_3QH13Aw4neHuWrzTwYSyUPR5N8cTqjcb7LHsohzjtMEMk8wTkLpzgPGjLt1aUo_j7lSULIbNnCDJRK5OsVWgaD75ZCdM05JGRgjjQVR5ujaZJdsbQYncMFFtzUf96NDJEoL3gOWuNybfWikdujcybitip8AX-BVHE0BFdz0rSU75vp7SbqrcVeZN", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115225841846655305199\">IN park</a>"] },
            { photoReference: "AWCwydiA20fx_IixJQug1-qPo7mee8wYVabANQyEQIPQnpwYpRKSzMvrn7Igh-H8QFYD-SGilKbjYHXqOAxXX6K7z2j8Qq_DWer5a8jOZOooD7R4raczWnaScjAiZO4YqvY7uTobyIIER99oDcMptAUAs7AIf1gFSyBMzKsoHLhof_H13r3tqkSVJ-BsirUSnVGeo5Sh21fJrQPeXvkEMHvlnVfp8QaGfMYKk85Ied0Y6t_uXeKIfRIlaHEYO845IvOqwEQT6yTiAWx1CQ2W9bkdBI64GdOlxdLGkLbrnLVwoHH8Rju9tJMSdXlv02OVfWtp3cJBdIyUJLz0vZD1trS_pc5TLlCPQPk8qQh1U1MwRV5bMcYvPxWlb_Nf7htQoWfyybxWFjTmzxHb2h8yuBgGMSkS5Zu9mca7jKZp88Eiw0HyAl0i9zt_ozP7pohkXw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102092449968980426567\">황미HwangMi</a>"] },
            { photoReference: "AWCwydj_uObjFRbuNvXo8UJv4g4OZ2uvke9YZjNuqgi3gnDOcfOAWIaOtkMO0-lsOcpTx9M97siMFpOn4DmmHEz4JV19VkkF7EFFEGEzGe3Df-9-AP9H1cKxKJ25d2oTQ_KNCnegh5JXFfG1MqWThPFxc8rQy8MoAHz8L5NRUGSC6W6Xdcljo9cwSK1rFq79pmeKzofV8oFcGRou3B-yIVS-ow1Ya_j0PNef_IAmofb0uzVxiI9DyHQlivSU1Pyg0mTVJhRpELwTCnwSmKnyjD1YwuDN1unNraQZaWwRuyM2ct7R3c4QXeoHlIEdYu-X9M3hk5fYBmbts5p9NhmKMPfryUXSW88eadlpnTlH1S1H-B4hf70P_liWvCWZ4UglS0J0bka7t8i5tnCZ9gPFY7qrlTjVA-19BuNVkFhHTaxobB_t_cwjQGfZupiF8fICd_oV", width: 1290, height: 2293, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102876255923777716617\">K - FASHION ( Discount Fashion Outlet )</a>"] }
        ],
        summary: "다양하고 매력적인 상품을 갖춘 패션 아울렛입니다.",
        updatedAt: "2026-08-12",
        highlights: ["합리적인 가격", "큐레이션된 상품"],
        tips: ["좋은 가격의 제품을 찾아보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7959187618990667200", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=K+-+FASHION+%28+Discount+Fashion+Outlet+%29+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "롯데면세점 다낭공항점": {
        photos: [],
        placeId: "ChIJ7diIH7AZQjERUIhlSMTrM8E",
        placePhotos: [
            { photoReference: "AWCwydgMK9HH_IBAerirKRdbuv1wcWvd-Qgfn2FgSGOKEHPiZrk80PuSQv85rbGhNJgHR4yyJ3eY9KSgn1rbm8XGwHWZ0FNx8DELvf_1n96GiLJf4s9egbtcFUrJsFyXcQ27Rl4Nx0zvyp709xlZ1gcvjmmYTK8j-KsJ4-QULTKWF9XvmoRfdBAgnlO1fc5ayJFqwPvYitJ5esIlCyeEikqaNDt8C0ya-c5QqeRBnX5vtCzosm5c3aLdGW-6IEBaGkEZK7ZeKn9AdrWO_V31SinQL2dRzZlsXHkLQqpEaQj9Ak2v_3FRiJ7-J5-7I16D6FJ839LzUwupi_fINUX3fNOWo6sdLoaSdzX3jxl6AQVKHaMnT6malRmAwYUG1Ew5KoXBiThBB7UEuVxC86CBLWsokdjscUO1IqzhsiqS2EPdZ36vow", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106813793159579874449\">S C</a>"] },
            { photoReference: "AWCwydgnvWNkCKY5f8iBZu0MxlwK9BIeTIO3n_agbAQ51wSssEtXFfLHb8gTLVJ9JddDK42z1plMJqJUpqYRZhgmeYJhRxGzKXlPlAQOhfIv-_h5_nBqCT8bOactE61PxKjhjK0EJ0yLqbXyT9DB3A3Okezqb9s06uKqJUIMUwxSsUTa8FSSQFrLbal6uFimB263QIIZzvttAh1D7H2_6hwmwdRr1Tx4IuF6zb2PAJKrNSwdg4akVmXttmZo0By8fdNanlqSaUIEJ1zhjOtsy5-QK4NUuwN6db4Unv-TCZzMLDtfSaVArDaUEXpgwxKy2L1lRVvoIygw0mf0SR34eiY1bz9OJJZtFSkFFQcPIqs5QXPjed-rL4L44lIyZSyiOUmm91xAPbiAZR0kIjgYj4AmOHfLYh_Nw7NbxgE9aPwuLG-_f5D_", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116217337634577763484\">Johnny G</a>"] },
            { photoReference: "AWCwydjnelCcYQlsRNf0MAQ-cLD0cg6uePSQtf2KEfqUHNrqMPg-9j2e0-W_psRdRitGIkTIDIvbZbSOjZTzr_bWHjG0OhzaOASNqFYW19ET4fpl7eHZl7-EHOkRnqHf_9F3aTT14cPtdXWzxS-PKiY_0BgCbLHLv0R-Nti9yYp6C0FPkcWnHbTaqpIB5r2fcpc7kEWuXLcUL3U9EY8xFJanNwj8i6L3LgEi38tKqdSjVGkZevilwgBKjTqkUotowF7KXNi_kO399qRbRCPPVGIWt3TPtSdWwWhNtbLNDDredXdMY9NccaX9H8I7WDM0iOI50IcEwaWA14iFnUJwUxpmtSpZF3d00nQslHzje58omwuJ1bt1Lz8Qchl4-f4pjWpmq4Q34eAFInSXEByEj4T2Q13cVc1U2lGmeAYn6wTfu2WqDg", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105124922006227380744\">grandkuan</a>"] },
            { photoReference: "AWCwydh9LkQoQoGjezkkRrt8aFEnKC6BGMkV5dG9JadTw30WA6hvgISYtTveEv-0mbbhw1ZITJxsqoYx2SJxjGf5RAWW3XeNT8NG7OVUeeYcJFxF5kz6xEByHAi7QH1RP347xS1BzvcYS4ZsOWZ_B3fbgtRNVKDPYCQPMt9T5T2g6AVg-s7O7iweEC-4WCeccs4P-guxWYFViB1iyqhvuah1s1zQYdhl51uI3AcBycnItHvxr7Ac7nDiDpiE_RhlotJUNl7EJJG-Y6X5GfFe8_cr0BRb55HCDUi76Ah0o4185zymt_pwkhAodRFi1l-dve-NqA9o0GY1vaZm1vba1L--akiA8kKX3DOXMpwp1CWQAN5nTS1BxKwd17wFnDBPPt3-kl8qrnl5j__AJZSwlrhcLZDex-1_d75Xfpw5VQloFr2Xq9PApiDJi3_ioIFhWwPv", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106710535660295758511\">Andrew “Andy” Davis</a>"] },
            { photoReference: "AWCwydiwuE8xzTAo82ZJBgP1NVFRBU0KnaNYsbl05m0bGwhcwfxXpZCbObTPPPKnVqlvoh2Y_3gHj_thAvK00Cjss8lVPWtP9T_VnQ3asOVPOSNNJvdsglqkE1AAt2pIXT0T9iV62kO5vwoR0KY4POQs0oSiyTAw84FP0tRWe3HHlAqQxFkAv1FIJ_ntx5yXyqiVIKbnjT5bE8kKe6dIQfwxCZMwDuj3n-IbK8ECDrsAdUntwhb2hXfwnperRs2U-qHT1M1huzmyfsIaF-7CPUDYZtjguICw-TGUE2v0ydrzjnxRL0OkQGUf6S1TGOY6WiLrocSN8xoWm19zC2ykuS9HAXtHBuE1RHccK5Cc1sMPCayARvkpFTKMWCSiViKJX6mU8GCp4yuG_8Dsjqwh0sA7NR5Gcxrc9at2-PmyXeliPvjpJxie", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116562734164425813853\">Lotte Duty Free Da Nang Airport Store (롯데면세점 다낭공항점)</a>"] }
        ],
        summary: "다양한 한국 브랜드 제품을 만날 수 있는 공항 내 면세점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["풍부한 K-뷰티 제품군", "공항 내 편리한 위치"],
        tips: ["태국에서 구하기 어려운 브랜드를 공략하세요", "세일 및 프로모션 정보를 확인하세요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://en.lottedfs.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13921730101393066064", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%AF%EB%8D%B0%EB%A9%B4%EC%84%B8%EC%A0%90+%EB%8B%A4%EB%82%AD%EA%B3%B5%ED%95%AD%EC%A0%90+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "센트럴마켓": {
        photos: [],
        placeId: "ChIJYcyQxdMZQjERZZpwJNoPSPg",
        placePhotos: [
            { photoReference: "AWCwydgmOI4qKQZ4WuMT4hRqDlEnKUNuk8UoCIAoklIHrgLT9q7r7qiASLgK-KqCq-kzeukIDgy1ShcEYuatbD-UNIqdN6GtW0CWhFE-70wzzKIKLd7UBFNetO33i581VFeaKI0glw20orAwNQDfeCho04DacGqgyV6HtdjHzCCkQjG6QHiGyj864fTAz_q5cZNe8Dm8aNmPEuayizJTEUJlxFQfw43QdnmWR4B0mm3-HH7iXRx0zltCKEl7lETs_yL8xERUfz0SXcABa3iEDS0dTA_j2_0QJK8miufTD3P5RDqWf2_-HXyF4-El5_ZfhvGouYrAzExgV88Jh8rdmLG9sKl_1EDIYxPjXHgq4tteZagf9_20PKhHRxWVx7G17G2e9mJ0WpOxxNOMIEjJPivMlQcWdU4JaDukVumEH56guDosnYj-Q0ErMciec4Qb5H5Z", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103544600405535254341\">박근모</a>"] },
            { photoReference: "AWCwydhZfAVi2UjYfMlT2dy7m3VJSgiz_cEqncuyF5NIoQ4cDwMYKX_diCYcw0JdPQ6UCgRmAuYHEu9vgb4vk-aL6E7L3KRfZJTt3GGnrAK8xZ8N9sB83nHzjKBGgGsUenoE1IaYN8t0IZwxB0aE2UCWGvhjkaiXCLTloBeCmml1nIPIy83kaiSfqxi1I8RGXXEGHIWRrCnI5TSuSDkHBOFzTdy2zCXG7eRhWNC_7bbwDasCX1OybN0wQmtnUQA-YISRaRNfDfchCHmvfdj-bWPwTOhBl9KvUFSHkREaoPR4620mOcpz00jyICd9qMGSf9UNZRPRJYj2PX0viFlA3_jNUUhjUwq2eZ1ts-H60q4d6BEBY9aL3FvIN-U29TZIwAiwBlfXObe6mNpHymjKqXhkDk-5UlfCBtZRh_VRjN2Z0XqMKw", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106613541858815259556\">som park</a>"] },
            { photoReference: "AWCwydhlUbWkNlkQE8jY1VxZ2c42EJt12Io4dt2ShzXpmNPb9rh1eDXZDC0Ya6PFucsS6EMAKpGJPvWdZQ4Y1WclAEMwrKmsuciOPzHF7UJ7M0YfmSUuLym1BELQCoFbmX2cy7EiqKkE0f56gVfcX1C2rCHjzhwVT8dnwaVJx-L_QR-eVYsYaSL1uja2lonYDvlydbY7I_UTHgQuZLKjUsefRd4XZu0zdkOpGarSqSLUeHQz0oTo3XkGAtwUvjR3lSoxVIHGu4fmNX2pTdTvDRKg3aYj0q6LQ_q096WIPV5hjqhfcwvZTNM2BT16bZUzRWWjfFa6O86kX7PuErLgQULrqGab2fWTKcO_3TmrUSwfL_Q95ALrYvgdTDvJVHgvzfk-DAriUlle6ETpuZssRzb5njT9DahURAhzZGPAudTudLcyGXiCuoxd4LJkPXvooFxd", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106921219810397480361\">이미경</a>"] },
            { photoReference: "AWCwydgValeNNA9ROcxpEJ8ms5ci5PjfNAdYLvHrYgDV3Xu1sfzBTRvqdSFeuTPaBFwkkHBD-aSWYyO801nOFl4bL9bdwRi4i1S-Gd3SkVFQliOaHKYVZWB5HS-7X30ChugK6Yma4ZGxb8UaW4Aoi4Sp4Uu-mcz-1dEjxVbyfh6il-qFscO0KiqXsOvnTwSgXBgGcxGhCqbimImH2-laCLb2Vhhp90Z-y4SgSE2cJBKIqOvgNXxKJr7jfwpYQteM5_P2T8eD6n5HYXqpP2j_PrPPNcYk6IO7s9ZEE0ZrWTWJ6Lyn5knn_TvW-AaA1J2O6_STdL3zn017c7DlVFHYZl4ijSLU0CRk4b9-DMibBVLciFyfi_1p7TAj3UhtsG3MiOYEMalZ0jF_qMDnp_1fdxDTOKr1i_pU24lqQ-mBvj6lA0s", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104049425115093080488\">오늘도맑음</a>"] },
            { photoReference: "AWCwydgcEqtYE-djBJR6WG9-OT52gSB2m2NNqLgAtHAYCDJsULSY6DoS8TnHclwQ3wegApySjG5kJ2Z9mafbjCwLUYtZ-WEoNqxchruzoavmxHL_DlSTjTWfeBCqJv_bjSSTpV0hEIAHsu3ip-1j683OJwJgrQED0DyAohq1g9GgrfKdvpEzUnJKJmTyh-0RhkxbTaRwPy28i548JsijCOCNGKvwTOzkfKdkKuSfLb-6mx_IzLwjg6bJ80dlbXtFVSbxd8ZBL4XHn6hhydZ85e54eFv2z-QPr9tMxX24Vrr8xrm0k60KWzwi4kJ7QsmvnA0ukpHYnpUSCoBm0RTXeUBZj4yaqUKusxGXjTFZOOCGTSXRPj3cujCX9JYSq_Pe7qOq3aYCIbjQrYf6sdy3l7LXLgzc9YNanIThdLpDV1VC2WkvE1Kg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102353157476090676534\">나은짱</a>"] }
        ],
        summary: "시원한 환경에서 예쁜 원피스와 아기자기한 소품을 만날 수 있는 다낭 쇼핑 명소입니다.",
        updatedAt: "2026-08-12",
        highlights: ["시원한 에어컨 시설", "다양한 디자인의 원피스", "핸드메이드 소품 및 커피"],
        tips: ["더운 날씨에 쾌적하게 쇼핑하고 싶을 때 방문하세요", "원피스 외에도 귀여운 소품 구경을 추천합니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17890566949317941861", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%BC%ED%8A%B8%EB%9F%B4%EB%A7%88%EC%BC%93+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Outstanda Handcraft - Local Handmade Souvenirs": {
        photos: [],
        placeId: "ChIJwfHEbpkXQjERw75bVXXwJLw",
        placePhotos: [
            { photoReference: "AWCwydhO64upIuwwvrj_h3r1bsirVRsOFKDv0O2a5yycgzRfcICMK9MN1VjnlmkjPioazRyKo-RHPUltFkn-fV1L45KCHGTXtao53cc04l6outB-mWprgh6cJ0BRU9yDNUIW6pLuB-zLuFl7e6qMTlXV1XaKGnmreKGLOYoSGuc0fMTN-tN2M2VE33cLoN4QOJV8PgG925Imik2pI6yDfs9kkW9BuhfjoTJLhzURhvw16B8FoxL1xNu20wRgTDk_adbXsz_ewbXvWx865hYUuiwzKY1Y2qXzvq2Fr-yvjcSELhx5ewkinQbyR9G_0epBED-IV7-gj_qJ7wYKbTfzLuzmKzGqkSGgnwgSP3TTb7uyvpbTuy8-wGvsNlYxoSzN-tqhqdzZZdc3Ebzi-KoCAcIQyNho2mmezDw81llZmvD5twyyvRNMzMVEyVGKiRyBU14D", width: 806, height: 564, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100912036258621686019\">Outstanda Handcraft - Local Handmade Souvenirs</a>"] },
            { photoReference: "AWCwydjVHnjM2TJ8BBGxNsQ7jOZVdlWBD-RCLvKYXh5fNOHUm6I8Lt3rjfuA7i_TNkOWVYq4wk0ZYMUYw2zsyT7cffDKjY4sX2ez8n1sFfFAdPQYyfAjYtcC8ymQbDsRcskxnxuHTRbNNZBw9EzFAU2EZD_T9zwPc2XA_QPyM2pmsiazPLoBij_sUsCkuTbDBxc_cCTmo3BmEro-_OmNc29tcYm1DzayhEdNomducS0qm6XGisY5P4vcVkoHAs_uCZeM0-YXLB8EDYQ_NIOskz627Ad0IHNZqKgrFuh6dN329NcrlCjS8NQS-eTK-HWUuwA-NBcw76GH3QKk94Cm2-6pGMLv_G8LvWNvNd38Z2cp8mXdsXdt7-8oFxHv4-O2CdcWhFsXR4BzrPm4O7B6AvWK1GW1L5NmrIM4vO9dLDDyDB8ZkV2QNZwPbOw9hq9mjQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100912036258621686019\">Outstanda Handcraft - Local Handmade Souvenirs</a>"] },
            { photoReference: "AWCwydjhStyH39QvUI8y2N3H2NB344p-xBmL9PscDk0FZxim0TL5xZyL0Y0UrG0eHOJwgZzsdqhI-lAyGWbzDk9Vks_uThoYqfbyx28HAZ5vZJzKgnq_qBO6ryOVmwNWB12cfN37dGx6auNvwtFKe3mcCEGufW8htMTLfCIpITOnZBTRdbOfqrolR6Is9nIktYfBtj8xFl7uH0-vQRdjyy6NNll9TzLrJKVtwdZuURx_erKXMQaoM8R8jGgBYYMy-ukwzOzFsUNqCJ5osDHGAeJ-Lsl5QOjItpVBowzAZFYlX5fIFqeey1ZduaIYXH-5cNh8MPbVXE4gRknrjRKK30CE6DIdIjL6496vd2-sR_7NF4zLhgHGZSk_fd_KEcGb-qhx5VVNJ644e6hKmw0e1E85_KsqfTlEj8ddU9nTM1o_bYPsDw", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109876152737150005197\">류혜량</a>"] },
            { photoReference: "AWCwydgSdEfUUjuPYDN1HcLYJo6Rn7FfAQwIrhQGoaq5Jf1EBq9wXUxXJ1Kpmho7vvRiY2ojJ7ca5RofoX7JhE4q19eSSb41WCp3vU9srUpYjMp8SBwS04gSjZdyPlcPKaHoVJ1kHT2X6HIvJdTWpsFqe1cyuoyKAOq58oVi6YCwhFaukIJ0FExFwabRJl04dpyBXlpzFHsCT7l8x-fq9K079yhRNZ2NTcoc8BYRT9lEmA2UOACkY2XOiKIElqmtIDF8bOG0wE6Jaq6KT-9B9G5zcO5hzViC-TDATbnMqMO_22wSIf23RsUMBlmEo1yYqXwQ7PIgCYk0urtd65hZJgyFsAzOhkHhIHa2Ie-sz9fqV6fWn3lqh6_g9Mc0eEo_5EYyRX5hS4UpIbVJh0qtkEESpL1i7BdHnyWdP2Nyk-De7ld06Arz3l7MCosuflY98ydP", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114198713826725084141\">Nadin Ka</a>"] },
            { photoReference: "AWCwydjcsSCs3J4-KhpkNfK5rYupFpSh4EvuatKyVt5CVKH-Tds33d9yXlPLC04431RE0kjD1Qo5fc1-2oauhfywSPb5cdP50OfWNx3j2Daw07cNuxNLU6x0wIgQsqiTOO50uLPUoGurHH3sLbfx8jeQG8XdOFL0AS8b5sR-ySnHu9d12KY8dBdvFNd7gBlTj2vhwf_ylH0WzF4cOzlRc-TcjSAmZ6eGulpkPR2Wf716tF1Pz112B3fRIaDSR2nQiekcf_UbOoyQ2N3qBBn5qpvevn7h1EvGeMDIn88J4-CKs8Zsu8SU78M_ZT7QO9D3cIw4wVcVf86DR-yRIXhgJ-cX6SNCtVAhhDg1gRmkvzbl8oQlx85sKzGR_5oHYeOQj0wx93suDWgzwZiS1gCsTuXdQGv8fD55Am3AJrJJiebZFD7HvJBdZAerxxvVVJB3txRC", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113131550845715832309\">garima sharma</a>"] }
        ],
        summary: "흔하지 않은 현지 수제 기념품을 찾는 여행객에게 추천하는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["뻔하지 않은 특별한 기념품", "깨끗하고 편리한 쇼핑 환경"],
        tips: ["아이들과 함께 구경하기 좋습니다", "현지 느낌이 담긴 기념품을 찾아보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 7:30; 화요일: 오전 9:00 ~ 오후 7:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sites.google.com/view/outstanda-handcraft/handmade-product?authuser=1", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13557225165025951427", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Outstanda+Handcraft+-+Local+Handmade+Souvenirs+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Local Gift": {
        photos: [],
        placeId: "ChIJWwx9Yu8ZQjER2h3CcYnIYJU",
        placePhotos: [
            { photoReference: "AWCwydjMRdZvE2bjJ9bK29HYIqwpLIOs0oZEFWgrxR3bwT8Gk11TMIUFu17xeQMM0bAENAdvUrH2R3Mo4ZDQPost2k2jPBNisQz2lJPCM93E3-S1whr2cpuFlmJnmrJ6YRHl7ODJEOPJc6DeOivx_7RGiTP8m6lyH0hsar5F3SLW2WJY2qx2BL32RB88_wkW9QO9QeiyvKxTT9vVo3m8SWFKHAmgKgQW1TCFMDn1YqnpjK1eCcbI7r5w90YMEI2fwPa-laM9gsnHQJk681FDwIWaQAcBHLKqR73tpFfhsRgPVsfuiCVqAaX11-FNEwaWR_-aLKsjLlB-ldCK_onxIVwacVwDHqXz-5jc-Lxfd5zLTrdBsDHaEsPnCL8yO_8OXjmU1yDX6t-qwjbWQ5gYSz-z5L9S0YW6SvKExzn4KjVA-HA", width: 1920, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105231321640624235344\">Local Gift</a>"] },
            { photoReference: "AWCwydgx4-LuwN1yXN5_G2l2V9UeyrIdb6VUnd-f0HYeN-sgkONgyBf2Dc5THdJwJth1iBFP5Dmc6AYfwfbaAUuJc3Kzt8GUPMclXcnlEeCYNd8slgQx7RyAjsfEOdr7iellK42CO5Dxcj5HWmyXkAn2jAGvMvCo0YL0GjlbjhYSdWQ0v-FhyhEPremYN_NK0Atz_f39aNDsM8xC5T53nWYb2YReO-QtFF9xLas7R57PzY50fZNYFcmJCPnPycH8X8u5uJXAeed6fPy-U5aUeUTZk1WxMXTtw7lQjNrS7fV5_rAw0AWc-E89tkho_0uLv2fa8NKkF1neKTx-2h4_11kxu7cjbliDLcFa1JYvdF4PLWN2PvOiqfrgWiCEJVpH455UcWe0ZulLXGEiStPEcjE6xtRp_ExzQJPj508RcVTrpognU-wF70EZwosjU1zQkAr2", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114789603051029803243\">Lydia Lee</a>"] },
            { photoReference: "AWCwydgZZJf-383Sqo4dtz0_P94VwiyS81kbAQ8bKhuNjXlWYbjX0fH5MBIURpa-8XkzFf1jYzD-xJIldWNgJLWUwBhkbJasTm78lFBHj6Yxfcp5g7eS2q8hfA9CGEewBHJ6DEu-RkOoY9rF5cMpZyoLMv2lUOqwuSN4iIOWMbMnJdd-vthFLviTAy1Pk2nsAJvK4S0uyZ5qn7pX0eG8YNypuya5CkffUsq_ihf9KkmH2O_0NhSjDSA_q-G3DpNUTj9bPyHyYtibdpJE2w29WCyGg5or7sOOLcHlE5F5D2z76dyA8Gc97H12PXH6OxR_GFqrlZLuyBqAo5RzsLzg-TIuq9lJadAniFJeDrHwbBE0YiGTzJ3vH-9NVDceXm3VlTqsBV5ERuDO4GKxaBZfseivGflgffm4WaMnWtcAVssnOpBsTcQS-UbYbnBJC6-Le8tf", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106646458824908993103\">마나</a>"] },
            { photoReference: "AWCwydg8U5E4eLHIwdN3pS0v27Sqixw5NXNWQ_4XwQzX1HTmqWvQVoj4LzHT_l2iqxTaz6-nnrUrOoy8z8277_qtoWvxFvUNjgQK5bdB60zP6Pgwcr2BX1jZ4OFDtAwmSkA3grHQ10-GrCR95Nt-_4ME4TW_mwYE1Wfdw-DNwN_I03Jx5N00kI65JoEyyCY1myUAE_7kL6D-iQkPVs1M2kP2UCsSTZnwCp-KFY_jRpdD9xM5LCJuzBghS9QI2FFeL3EZ5U1E7rgqzi72gDH0_yquQ7eYIUddC-cQqmP7loAdSBNhLDcMmEFcCbmLZQ6rypv7GSn5sgESJBZKipejGBFr28nD7HT_rmtEjV20WOsG3ePjzA_Dwt4vsPE4zHDGL8Brc9IQ1fthvsQJYHHtUupWbzlmUEQDm_aADpIwDg5Zo7s-zHVVDgmmfIVvAIMt0vC-", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103766927656515908677\">びあびあSG</a>"] },
            { photoReference: "AWCwydjyp7BmTu2MVq0zjuZC_EL5j820fFr36x6F4VRVClhbT2LDy3H-bLhlfznU9cTmj-qXtRxt_MKOKLVc1UXIaiVCoX7w7U1wCXGyCmQn50Knf4W6oJIDAuUef9tKRloU1MdHL9eXp9Ryc6S60LcegGEbEq13kSrbB5ZzTB49TiElxTul7R92ET1kADvTAtkVI-ZC5elDQsNJRtOEje-i8JqwqMLg8UvzZdoa2WErcybORdSOVBXR4TwAbRG-7r_FRQFgOn3l0rt6HAhEixkmViN87vlBNxDIWrKfPAs4-IRcfysTG2cy9H-QcW01KCpavdOs1c5mNArfXbrpsFr4pZbRj5oNeaVOSNa0OfurVZf0ZGQ2keSHXRNzIfHeuGOIvJfcwNbL1tHsa-DXo5GpXg1OOxash4VfzaxJS-oFDLm1pkogOgMvPsJnfY21ng", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118198401435615954446\">iminni -</a>"] }
        ],
        summary: "다양한 소품과 오르골을 저렴한 가격에 만날 수 있는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["귀여운 리유저블백", "감성적인 오르골", "아기자기한 소품"],
        tips: ["저렴한 가격의 기념품 구매 가능", "친절한 서비스"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 7:30; 화요일: 오전 10:00 ~ 오후 7:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10763823602060107226", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Local+Gift+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
