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
    }
};

export default info;
