import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "모던 노마즈": {
        photos: ["/images/ulaanbaatar/info/restaurants/modern-nomads-ulaanbaatar.jpg"],
        placeId: "ChIJR3TX_2eSll0R_Zj-3BvpjZg",
        placePhotos: [
            { photoReference: "AWCwydjneOodywuBopOsHQODrKe61A2fTSbLQYs95JGUSLIC10_U76nM1_VmKSYEKCmIIYrgns4GCFn2rNYU5M4uO5c7ZMFWTrojwh4Rv_HopF7j60fhMwhgell01HPq9ePPh_VdiSOygdTt2wd0yE9cFJSFxZM5lKtJfEGr1jdxtZUn2BIwcbp0SJpjA6jClP00H331jxv5-Yf87SwLIe6e1H8tGm5SbkvqcRBm0DatA68_dlXvr3LTsLYJVFrtJqtmvt-gp1gYgWzziZMzUNZhFDT_sVqev03AIJI4Oi6HDIa8fVPcMf-k4EHIr-g2WKwleLQgT0XsRRi1YBrRHt7REHA8f6uBMEKVnKEYXLlxTpuI_FtXXStp5vWlRpAEkY9IPQ9aktAtTAnFGwilgYlpfl3uhfH6KLOD7SC-8uXvrkA1whXJ", width: 1100, height: 733, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103724268512321427531\">Modern nomads - 1 restaurant</a>"] },
            { photoReference: "AWCwydjJDqMDOexwRyLgAU0t_Wj07jI5qloWuV8_n0v436L-3tv-APECCEwXdvyAcloAJSYkvOCfCkjj72tB6i_f1-MGEnyGXlxeJfpz-VRr3AJRYcnPeFlRFbaOv_BPYTAGMS4Amv35hdu9A7lpO88vWsM9DpRpku23gFq4917WbZjsFD6Ge6pK_fZFxJokRbLGDrlge9CLvekQPDE9NPjOb--NWRLDzu4056sOfwshmdyr8wev0MuwgF_LXhv3TyH95ySIYZC_3EP0XKLKael3DU3rsfHZNs2y03x7DkbqrHI5tmLoFtxV8wRmM7SHgjylEFZjRe4ifGaRwXQ4TxcVlrkbc_co74nIkIicSNOiynHMjVlv8kbFDCdSrPmnQUQF591tKpCknF9xvGWi5Y3YFcPApl70cuYkryKg5lgbqF9yJg", width: 1100, height: 733, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103724268512321427531\">Modern nomads - 1 restaurant</a>"] },
            { photoReference: "AWCwydjSsaNUnV9sMP4zdb-wzVMb70nP3oyhiEfASyH0nOIbVkuxkRaUc-wCBf-vDHiou-UGZiAbHW4lufdYOeNkFjZu9fw74QBydejI6NtDF6dsGCZ97lXWADJ-H2cdToPyp3BBRQexB6KZefRgmoqISsfBYbUw84zNJjAPYkxeW04BPWlTspK5Lq_MOf-Gg9gN3cyBG_jqnJTJVKEJRg2Gpk4dTOjjsjX_14afIhtPzk9IvU1w-OKIQ2O21eT9Qxacm1_9NS3N8uxU-j--5mM2-Szma_P2J7BxA01yhz66fca0iOR0tnVd1F6IasTRpDvUy52bIpyFONRQGj5VJcC86nkpEw_97W2agPWCD_oDUPcrnE-vxuY-_0zVIGI76448YIrE6VCxiyS6Vv6vwlLAjsdcoDQnt_-1Q3cIIcYcsYA9MqTL_oHxuEmpuMZMXpS0", width: 3599, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106141986548815203655\">HAti</a>"] },
            { photoReference: "AWCwydh2OPGg72cAdApthEruqaKTUXAgHIgzS6HtUzg5ww9neBW0ifBPIftk1t91Q4h6Rf8spH9Z-V--pxuK-mjkE7ErGekMKEdaAGIOJ4GBFfVKc8RMZLqBAF0VmfA0YvxgrrowD_CRktCh9V1MsJ0tKud8gCyNsROgg6tXANuaENAjpLzkt_8YQTS2j8-BLjeVKqmuifbSfH8N3RNkPQ_sWEVq_YMzTD6MKlh7JCuQ7vAoFSoUR979mjWCH-L6RXSLl-mEDKPXrT46dRM-X6b2zoY5clKr7J5QGF6C9v8VZiEX3sFH1oZtrxTkZkaqDk0Mu_0RTgBSB7l44bP6w2Ld5Gmy7WcDaNGhznQeJ26nCcEOBTUKFYHFvvV3vIGKqRvKLXSIGtfiEqa1v9ggZ2K9mXhrOiChVKqzQ_m0EpHWPTOJytiqHDNMw5wwqT2fG5EB", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105995315989575657880\">Ryu K</a>"] },
            { photoReference: "AWCwydiv-BWflkinLoDEVDuPLWPM6JPufDEHqdhl7SK1rrjHQm4Tqn-szCDTl0HTifMRYbLE90qMNh46bd0bErWyAlXV6Mkj9bigrDpJQnMOaaH2Bs-HUVd6JpdB9SIL_uWfTR5mO4KjIBex3OQ0kk8LEs2lGJ7-p1aZO4hLjbVIdRqJxYK1qK1ormaoVYlfCuIYsRSYcgUwgIJmrDcN35ni-sWViFfOAUwaUCGKzhS4cCsOKQlE2bqXwFZdeY3YfUM9Y9rr5-kJg_TEmS-4LXAZ6SgM-zmrMxrEFu0crChG5OPRIW4uoHEMqxr65Sk6LBb12rGCzGHxVCfhqShWAo3ANk7cuGkrVh4lo_BxEdQolZLdc6U0kjRItSYrG1WkrDYMsST5PYfcRbG-I90ao6kqWQpSl30oWMUu6bX7wqzzY202E_rjcjBd-0Gb7Uqwfw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103971331144566235240\">平岡謙一</a>"] }
        ],
        summary: "Modern Nomads 기준으로 확인한 울란바토르 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["허르헉·몽골 전통 요리", "평점 3.8", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "허르헉·몽골 전통 요리", items: [{ name: "대표 메뉴", price: "₮40000~90000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.modernnomads.mn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10992698571362310397", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%EB%8D%98+%EB%85%B8%EB%A7%88%EC%A6%88+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "BD's 몽골리안 그릴": {
        photos: ["/images/ulaanbaatar/info/restaurants/bd-s-mongolian-grill-ulaanbaatar.jpg"],
        placeId: "ChIJtc9sL3GTll0RlI5j6FSFLe0",
        placePhotos: [
            { photoReference: "AWCwydhZ3YdyEkIrBRM6pesaRVsHXo5tydcwMxN8GbzxXpshS4nctQQkfXsdnhOeStDMiQ3YwgEHso79BtuRnpMwPrqkXN-N-mWGOjF3qpgoTYz7QLxevRi-YKJfSgybmHPMSK-L2D2cijzrR3cJNBePz9ArZgRT4sCLqBQ9nPggnWmquZov2K9TITWhyfEKLruwITia3m2aRUgp05Xua8uaf29Hp7ZkcGm1oMQU_jlca6zxDLDXmiAzy8AAEqumNUxV_WUog5t0niMK0CQF-VQ7teq-qFCExHbvPTWhA_oIYJZggEca5RV1qmSVJ1dzpmGIms2PGe0JYBsp2wKBIt7jcgGRMk33Ai-8o8ssKeMR7kgFWLlK8teECLswoQGeJX5okgecNO-I8WBEpia66VB70USrqN7EHKOSbmx7rGpUvaajtKeK9tiowO0wMrlWfg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105535802230059040388\">Antonio Affigne</a>"] },
            { photoReference: "AWCwydiBfl1YCLO0XQlmA6qpBXaqYibAoVlIG-578XugLZSQHjcW9TErNvTHJNfbd2Gv9ikk1nqr6y3QpV-HmXfmcX8I45XUwj89XtzgyOgQs1uQtU9cppwsPlhU4w-y6y60IuLsQjzaa8WeYZ5ErtiTONxHAhGEGF3-tZj5QC7rq3KQXj7V_UC--o9USZrWaX6vU-jybKcCL-AjajaPBmxz_DIigA2P46nItDdnrlPJWmKy4wp7d_y6U8ZNhR9IS6gEsdWA3BnBUaQ5M8jZ6e8xriJbdQA1BDTKWQfSiBbalgDYBm2bIiURTZFpJlmWoVqkd4EzqYyOUz3BdORRwOtl_G5XWC4O_l5C-DtUh_4WS_yq8qm--NiUPCSz66NXav2BauKTKtsjsIABA3zklALQr2H347Xv16taV0ZZpEY-8I3qI06ywyl09eVtZ373_uzC", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100096889162149317678\">Togoonaim Enkhsaruul</a>"] },
            { photoReference: "AWCwydi5TYKGt7cnfuUD6AfBZHm4qJxSHMrfHvXqjsiUEW0-ivnOjEtlKWfPLge3GRhH-acc07P6RLdcxBvpRxlaF0_hZpFROlqITfOjItRj0AeJtLzlqKAIOOcSI0-q1gM9wFKCMH7MJnF0kFnOLKNLHTrctvFEw5D-YDKVrVkduwNmzqHULFexlYiX2UpWF2o-H1fUOeTWGxbNJkeXJ6N15He2qv7i9yYdNtfxCimZt1CeL9asY5GNhjlyDaR9-Gizfz0gDQ5CBTQ0P9Nx_hUyXpwgi3z99-ADZrZVdJtexfhwqLMOf-SDB_hYfUtRTVcNpOt8PIwpXB7ve4O1p15yaEeGeCc5nsnusy9oCwIs5xHU3AxPbNHVVCCoi81b9KD9QjpN-QGgb3dIPtnS-s-766K5K4F7iX4u4XTz9JRxHT4DkAHAXSzMbiKMMH1Ufd0d", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108142732509598935019\">Andy Dembe</a>"] },
            { photoReference: "AWCwydi3pLvxjOFaHU8YC01XYqqhUYmSZSemjefTSM4xUdeKyNMh2gin4_XF4ev-Aa58Ao35fH-7Qwshexxa1DmH0TKUN_VaEQ0SssAJmrqoTUepdKmFqN2AHw8BPfyX9x3be-tTK1IMXjYnqnhGi_YQsr-5rDnlhOm97MHgRwRS4KN3ih_GIv8YAdB8KaEj_od_TVKnm4G6zNN0NOs3WVj2klHBT18KqMbmOCzTQThl0LboLI76gBiJPwL4Hs6tVbWAYXDH8MTDk_8xnv2P3lHZtZC2_pOZ3x8MODJC8e146iCowW2MB9DfcAzNLHNakoEdv2O4dlo79nVsrxAn0OVNdzYjYvAV-lOsD1Pmd3EkkYYfqKRKBlKGP06Qtny1LsPIbddEBw4b6VzabZTUlxU6rW0tfnf1KgR0H0hUpGlZTJ1wEaJfvQQGQK8V3WAhOjbM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115627059159567401516\">Tae Woong LEE</a>"] },
            { photoReference: "AWCwydhOLame6jRAc4_YbzZYmh2D8iuXQN_2Tj8KFYH3NQDndCJlEqzPL8vyDCsGUHkeVUF-JO1sgzAQExhzeJs69xqM7p3JxDR6ZpLICls8i_dZRaIly7jUKDXqAdD2aCYBbTA6eHv8JMUR3BIEigN5uNS_zS6EmjNvDWH8ggL0NTzmQEH9q3MWQ7bJw0Qj8vYF0osdzVtpkxoYmxlxyKGRNU6YT9-A96utXKJDBr1koKxkHAwpoFkacYgsC4BLlwZMKOsZfgaQBv0P0fd7tFQVCWRvCPuUV1M9g-UeIkFHKycX1bp89YfSVU3udwumdwH1Rhx_jTjMs2WgzaFf04tuYTJdHZm_GKRFFq8seUU6ju2sN6q8PZOPtcAtzHw6MuKazGP9Cuk2wG_tUANjNVN1e63p2BdheoinWmvf_vHEpxAw0g", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114812126641625444886\">やかん</a>"] }
        ],
        summary: "Хуургандаа Mongolian Grill 기준으로 확인한 울란바토르 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["철판 그릴·고기 요리", "평점 4.3", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "철판 그릴·고기 요리", items: [{ name: "대표 메뉴", price: "₮40000~90000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8141258327118955682", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=BD%27s+%EB%AA%BD%EA%B3%A8%EB%A6%AC%EC%95%88+%EA%B7%B8%EB%A6%B4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "베란다": {
        photos: ["/images/ulaanbaatar/info/restaurants/veranda-ulaanbaatar.jpg"],
        placeId: "ChIJrQI0p0iSll0RYPZfU8yFw04",
        placePhotos: [
            { photoReference: "AWCwydhi8BLH0UEKudTWHf6T0YZpJnYTX7WDuL0r3837tsITbAI_NzkSPk-eDKqUTQW5XE7byinvBQ4vRfWM9XP0aqaO74KQjMsCq9VRKbLiSdSj_2VhCZrjZH-w7JCMHtxXv9pefWG-ffZEGHlptZ5xQ2xylmpPPozHj7YYjqHUGiViKWlXd0060jifPtRMZwaLA1bH_x_1cwu0j-98b6dBA_kc_LI5WpH0R-KF7nG5wq7mTtW1POHSaITmGiv-CIHJUYGcerIWO6B-YTgqDtXmNfXwJ6UJ8hb9ihsSLhF_VvSApk21hor_vq4IdxWT8U6gZzULxxs7v07MbtZusO22sqEgBHY1SwgwStVY5KABWvUofef87cnFTaQNH8EHoSbf9_8BbkbFXqKisujpHouXjs570zbqW6WkiiyqVy7_AloPfA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110518802000306634305\">けん</a>"] },
            { photoReference: "AWCwydihwaP_vFyXdKJIZ3_J3hp7ZMjAYDg8PR3oN7SCA3clvOmKq3FkI1brQS8e7a9sj6PVK0pW2heuXjGGga_ehm36eNDk9mtmae7_8dPtTqG-wc_cHQzZztr-0ZxijtSzBuaUSkflS-cq7GsNwxKRxQa28vf3io95zpqDa_3XRih9JIT7lGfrL63gwCvkn_Yw0hbLPsrGcqVXQZg16XB2s9iyK7U1wwfwlrhjLA2Xbd6gyCek3WYf2xJmH-8XqC93Gyr8ykY4M07lxacJAxT6vPhvyRLaJdFjf9qSM-voi-xjnSU3CX1LVPl1csgwHwNVwpAYrogm1qWKfZTFhGZ8oMyJyfhoDetsIRZlpoZPghntahcC_TydKNe0IAfXwr20koNL-na70Md1GDl6jL1jpd2Uk5ZQzFCdUXcuocEDWE6zwXXGLmSnJo33BWuK8bjc", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111197590638329822118\">M Hisaeda</a>"] },
            { photoReference: "AWCwydg6uwiSs2M7JyUo8Q6nuQOTmtS2V1zSVC64l275IwjktpSVAwmSEvWL0GfpSWX8xojtrUeVd7DfGm0vB2qqSdL1tpIsVTjKd_tyIVTUlyollYh9bHzudLdaHNnoNVaAim8Ooof15Q8n4PD8_1gZCIwOb5FqpmhOw9tRlVUYos0wu-VMaNxwGlhiKr7kYvfHMT-cq7sQykzsPbxXC1tx7Jh5HYa6nEby_txSK2F0eu4pJ7yeJv5Xyxk-Axzm1Y_CL6HcB7xE31zc8U9K7DWtm2SgUeZeh0H2HBEINUvvAZPLCJutMq4PxMm4FgpVPoL7yBeQ06DsIydxnF7RchlvVvAHSsXeML6DoXLeEHu7_nH9hxdjbEDnG_7uyVjRNBzqKOt45eRpoHhlb5FRoAl0IBuYDaigHebORyoemewZOTqAftxmDx77vfgcw3VUuX-J", width: 4716, height: 3541, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110126151635678757145\">안준석_Jun Sug An</a>"] },
            { photoReference: "AWCwydgc3xqQVzURxovxXN6kU3tZXQbBhqVrb2K-YsSrM0dWzgJ-5p7FbdEW_ZkhUASmyLnhhMxSPrVHvWhvuAMlHw_ttX1XuDSIWPpwLm1ZxpFpm4BUmYFCHDscYk7366_VK3wvbjcnAYZ8TR8R_s0StV3TqPoNkNs1ZwXITEDwBhmmzHbE61pxcabSWJjo69E88xvp5P71xe4gTEVhPft2dRt-xFr3nB2sUwfs2a6e3GN2RoAqoN8ksHZv3xI06evmWqoyKPEZ5uNCZ0DoYMK8RvSVkldwj8sJswgM63xeOiCW_0vB2Z_J-LIBCE0rMkAAPL0dAnwDCriiCORTOAcoeQkCru021YYs5NK9pGUW6IQGkW43JpZsjq1D7gKoYyzoOaGZxMddD7syYsMYfx5Et_kZWOTDusarV-arZjC6LENYzhlWp-qXJ1qX3iYUBR1L", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111882918953578756538\">sophia arias</a>"] },
            { photoReference: "AWCwydhibBNwjsuZkpGyok-j8afPxKArjqMbuw-mefKXcgonV8QRnVKnXm-Kl6C81B6MnxFKQUxVJRNQCoYDTCKgxyjWAFuq0nC3aF-vjpaexTAEDaFr-vmM7gna6ph9kWC6vOf2Dxl67xYwEQ9vTskDpJ3EaGZnsWv3WPmMUdt_znXJ8pR-3lb4MSXh5AG3NYaTD3WskvdpQ7HdUNTIzNVe5jQ0ie-Tey-MDLlzTK3SC8Rr57Lo6ccffgvIWY8wbzaO9IXWYFwuKgc1N08bke1w7Qg8SVCmvGnwxtTm3LbNu20RLY285PznHXoafpeLWjlOm5FOL4fqsdZIfGjJQD_H3sSkPDGGFMQwUx_vp3B8UbumNUUNkoa9_CT27KHIHFVbVin9mgVQ5wpmjDV0ohAed6Y_aScE0BJ1MPakIDuf1pYYefc", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103216995799640395128\">Shan-Yueh Chang</a>"] }
        ],
        summary: "Veranda 기준으로 확인한 울란바토르 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["파스타·피자·와인", "평점 4.4", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "파스타·피자·와인", items: [{ name: "대표 메뉴", price: "₮50000~120000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00 ~ 오전 12:00; 화요일: 오후 12:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://qrmenu.mn/menu/MjMx", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5675527068035577440", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%EB%9E%80%EB%8B%A4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "초이진 템플 레스토랑": {
        photos: ["/images/ulaanbaatar/info/restaurants/choijin-temple-restaurant-ulaanbaatar.jpg"],
        placeId: "ChIJ2xqN1EeSll0RwBnRprZxDko",
        placePhotos: [
            { photoReference: "AWCwydiETmlr1xneiYgNnPMj7q99tmkR3a6O7jHSYzInRhMCJQHyYdLo6AGGs1sW6_UKV0SHCdUSj-87h9wbPqhx4DqGYMb_REgGju4FDjOp_AcDYDHwXnMe1LhZFt18BvvQyTOWRl-ds0ixJ5rEGhvLdch4N-3Uj3N2K2ElP_QFYjLtq-AzVZiyvSGGwZKdVbIwlt8jX6-yGSzOLQ2Zh2TH0cwVmW44OmrnAX7riKzpDjp_WRW6i-XS6q0KWsKAvb0vfyp09r54Vmxr4HqXHgEkBtF0b0rRnUAjUsorc1NvpVJ3eMxSWNXzvu7KfYuVIubVCG50KQyw3hoUq6O-rnOQaXZOwaZwVvdY7ZQPJCBC1vMhyfC9GwcIhVfq8fPoSiC3ZWtmAFKlc0yZ_qqs9cVLBKDv9KkIT4ZlXx32vsXyy7h1z2m3z-4RzrwJLr_Vq2gd", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101041628673869897056\">Phoenix Blackwell</a>"] },
            { photoReference: "AWCwydjI1tNblUWqkCKtdGsMdL6n1r7M--Ll-ibR0ADno6O6V_DBB9xvkjZtCG1bopUBrvF5PO7wVxtYlMXIdF0w35JfZ6DHBbVygV30bs8SxjOzW2SzqfyGNxHq7bu6LsQZ3i8N3mdtUFBx6U9Bf_qxGtpJD3rMt0Xy7v1RwtWSPQJCSfaFfuToxvSYvi3VR8a2_vCwXQoJbmTinNjuCIGddScKNvjiqiGyOaaroqPQMtch_8EPvaFnrgqpOoIlo9Bi9mLz6OeZgzrsn63HsCABnK2HhWPxg982qRDTwFdf0jGsntlWyWJB8zPm8Oz0Igp0dhm0PyxPVOzrYo5F4U0EyqBJxLhIToPuLU7RhXH_CwGElPV7EdMDXiK-7lLWs53-CH9Qxkd2O9hQRj6JiGH60ni8tXISK7tDEyIIlLh0wWtrR6ow", width: 2048, height: 1363, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114443492368312185496\">Choijin Temple Restaurant</a>"] },
            { photoReference: "AWCwydiDp6kS1xiQaXiikhlEV-4-eMV7jCeE7nnKTbLk_0YOvnq42UrjzyNhiL-d35HlgRL1E8OZ76gp7XL5fwc48JX4wOnNfjbr7DL5BD34Dc4OTsKKfHg9lDC1-HIddArYbR3R0nUEJKHP3B1_70lzdS9BMFtPCjyrNTiQJxC825tPKgAmOFDu30PCSEYyo1ZtImd2hecmHu1IXSHFeYCI2AzFNYjCK-qzbV3stWjl7ikEY9b4U90tgRS2ln5noPXaxq-SLa6_Mlj3LZs88svG-PiHVrbtj30zNyq8W4hHDNP77JYt6LdU_PHJ3YyNylGkMcA3dYbV2z7rpQQYAy1SMqjGdYMl9c8i8VUrbOz6Tlf6iBVf2X34MrLwucHBhxdlygX8SnP6IpXG_n3DFA9QNVqROEnvur2L6HIBjwTADicYYrXzWeJDtmgTIj1nmBdS", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113994345755633073218\">Rich Nomad</a>"] },
            { photoReference: "AWCwydjmJUaNWOPTKpIXxTFr6OFEegNB6g2bW7DeldlL2uwzD4XGug3ypmlTeKrtqcyYHxvBcsvgTWbN7tm-QzOO0WP0lkx2G18OjslC2-beDPwpXAVBy6HVOYar2M3R4EEXxGJWste6XuNy_5jTYe5NFTvLIbQpJ-vz3yqU5nfHubokZKxwH5a5fkCeU0tsVpWmDhlDOfXjm_WxU1-SXk2aj0GmsGOxUejAoMPMbWt8F4P8Jtdhg1_5GqM4w4mCCeXDKpjlIFmGLhf9EHYUerIHnoqwx_WmUj268Wm9YLLTAUN7gC13EvW8FjCqxXNtzVe20PZseUMVoZrLJ6XSGCjg9ibG1aSAuE2tPiVqL4xJNamGIsR4XZrRhONzgICHY4KEo8liGgEUjlPB5MbrzGC-rcgcw2_7zGq4CVX5xx9APTHBsL6h8Scpp75z0l0X8A", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108653322447224143204\">tulga kanta</a>"] },
            { photoReference: "AWCwydhhPfY-zpC4Mn28j9aTG7_HIC4hGhV-VZGEXmgq3Li9uU3tNLPvbnH_vMfQS1yNiLDNPf8dTOcdXpwuLGhBiXbWVggUqSB2HwhBo6DKkTDM-3vkv0dUwuxpOKsuREuD9CoZ0Cn1hq5Fuj9XMVXwCLvJU1x380Fq3QzpPR21MqZbb3UTbY8-6R3Z0Af7-9IN8gsRojYQgxffXLz7T0dE_4Q-MQK1AuzN9ueOt5X5y06o-r0hhPidAk8KSXRrZ5GGbd-bizyU6CbpdQRhhYwfxEEwAUTBgn-dZLA9d1xIcdCQIoO4UCQnM4GzK8tGFBx_KO9mDrB3xWgt5J2kJHDjI7XAszPmfRE49PrjGx55CzjI1D9ZwsPsiEtJCzUaMDSBfKkXSHrlwDcM6LueRvoVjV0O3OGDd6wH_ykw6xJO8MyENcPcrt5eK6PfZK7cF5nk", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101041628673869897056\">Phoenix Blackwell</a>"] }
        ],
        summary: "품격 있는 분위기에서 즐기는 프리미엄 몽골 코스 요리.",
        updatedAt: "2026-07-14",
        highlights: ["정갈한 몽골 전통 코스", "고급스러운 식사 환경"],
        tips: ["중요한 모임이나 기념일 식사로 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "프리미엄 몽골 요리·코스", items: [{ name: "대표 메뉴", price: "₮70000~180000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00 ~ 오전 12:00; 화요일: 오후 12:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/choijintemple/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5336327637777324480", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B4%88%EC%9D%B4%EC%A7%84+%ED%85%9C%ED%94%8C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하자라 인도 레스토랑": {
        photos: ["/images/ulaanbaatar/info/restaurants/hazara-indian-restaurant-ulaanbaatar.jpg"],
        placeId: "ChIJg5_cgzuSll0RINdBW-I1GfQ",
        placePhotos: [
            { photoReference: "AWCwydhlU1aOgN6W4NDh4Fcw220n1dJ8Kq9OuAEZz82hem35iKtL12f9bWdVHV_jjXbq1A2OSjUHYyH6Tw3LueIXFs8EXyGkvdgzgQo51YrFHq2Bu-_g5jai9SKoqQkcpkCgQcquS-1SBshD-K5TNfkCxOpoHLehhNQ4fPJZThq7OrWvZnswsOVIlliWDXPzxRswQleb-auaexmG3CyG9uE4eYIL2-CTDRUCSB0uqbeOn1bf1AALsSAp2WIbTICBIyo3i-styptXFJkXY2bdegzE9hoiNveB0PVDuOoJFp8rLUnbZMjYr2PNwsiESuZ7_DPByIkOBgOgvnmc4FU2j2g9UJJDOiXa6oRi-vKeWbZ2h04sZQjwpG25LTbvzNGVTK7ccXPKBhVtmGlumTci88Ks2sLnNcnudByZH5RZP4W51o8oaID-bCPkiuDxWpjx1w", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116964923580079050513\">Instamon</a>"] },
            { photoReference: "AWCwydgEwbgXHKobGX3Ot-ZRSr1SJGSjbOSdGJO97mo54Itoeypa1EHb0z42_9HTYjyWqDWLUBB2ZBtdF_VHLlLnKGsy-TRkhFaJlQDgbdNmnGQVj32xFx6oRidr9ELwINbMGEyzERcKqhxlLT9EViUbFoAsdLYtlD2nChlHRaTluIw0LVdNFb9TQazzWIbb-jPvcH5cD30KGDonnoXA7fxI8CA0J7uDhrtShJsS3COFMJRkGk1rgkdJ5zJVZSjU-t5VYArVSKsu0qcwR-dPCe-OJ1iOTgx6DIdAqzqchTQa5qa1K1GgYSLp5xzh_vbgUpcPvKbF16MFg2usy3YNTDqoxCH1PyGPxx_tsHFibmub9DTOnA_y3cRQ0H1rJb-1Z5ZYEB08HS0S920YlGOAaKQCBVS5BbLHPbVmkGph72qyeJkRYg", width: 4790, height: 2839, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110629583979251129987\">mewat international</a>"] },
            { photoReference: "AWCwydhEzuTEn7vlXd3VrOnob7Ayd-ttg4eTnkMAw-D8RXFVt4_DT1OschRrGFZiUt0cUpR2ZqdTBXZdzKPfeKMf9nlePBgPSb2189KsNAGnaJD-Z3zz7YHpynarLHfqb38hVtROLHYAzrpUQMRDNn0Tgv3mpGWLJ1K84LiwAPtjBTQJtNpw9qC6g0rZfy8-b7UPq0merOvRpCdCuN-Ynr9mBMZx-YBKBf5iJROy6m8vi9Tx_pWlU_utNXf0agdOw54Gl1y2RZ6AVtgpphD9x6J0hVsrt4hf1A0IOpDd18JijA4rbhEYghUVgtXXv-qjxPPfeyJ9Bw0dEyKC611-RHNCL9x_tOOWegxVyZ2XbFdjpbmJB3qjXZFC28JXJuv3zDazHSoac3-I_2aS5jbSGDvWH8blLm7q4RbS8q665kaQIR7w__oNs1t5SLw8dJcwu1zJ", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116687126411939549618\">Jordan Stoneking</a>"] },
            { photoReference: "AWCwydh40jeB0nAgUI3s921HFNB4l8sGASRZbJZxlXWFFmpUAyCtn-2_kfKSp1ZGO_yhfN9CUgkNU0ZFikqQhgg9lJNVzXsp0MfEL4fVxZ8xTpMSvaOL1W0JRDLb-gUrfwc7rr_BZ--MTal0Ny-QzqS5FyfAOUygljd2MUyK_Tsw-RSdlKAsI_OykAduutXP7jyr9sn0NjuFm1Z2pzsS3wfIqw1hhUr4CjnKB7T_MF_fSEVd0AukJc4CAO5RkBQevUDKRDymIWYS_4pzdUxqSS6ZHTL9sDik6iPicdkFLaKoFiOF1uRDfdsYRLXIyMVHScXZCp_4ZR5cEQ3wb0XXcdO96CxqW4yOZRd3P4xSTuz8_0eYzXX7_Ca-ZjlEr11BB6gfDBMN4AI-sLUIkyMMaZ_MuN7wjftOw7T33KlpELtXAiU9H1lgEWrc72rI9NAdo7F5", width: 1536, height: 1024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108880861832378374332\">CHIRAGH ALAM</a>"] },
            { photoReference: "AWCwydhAQUsUxXLrDPmWubSZTCO8YsEVXs2uZhKXiEL3gUxYrnBCDmI9n8l2N15EYI0cbaYM58F3j_I09sgmrLfvb9vCLxftDXnsRTlggYc7PL5bmiHj91YfF_AB-8tgiofndma24CLFb1Vhg9h0_OFK7d5sPT5oJSv3JCYJfUH-jrCS_x5k6IUXwLeUBE2I1sIp2hAEcSaox3TQ_TB-8nT4YroOSuIi9Hn06xFAeiy6wTya9YDtcGZZu6aElipfmcg866DGjkGCodyasVTQB4IxiQ91fpPiQJqgl-3QwjmWaw7m1lFjxwu2FmozLE6ZsGGSkmjIVpWXhacLgdci0uALsUQRWTRMli-LHfKivf4IVfSMd75klFxnmeGPl0AmgE-cOeO6ZpQa6t2RkhBMYK-5sw10crJCBZXhuzvYPz0klbaXgbULeaGvYg-HfEvjDzKH", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105784837223965323060\">Jihye Kim</a>"] }
        ],
        summary: "정통 커리와 탄두리 요리의 풍미를 느낄 수 있는 곳.",
        updatedAt: "2026-07-14",
        highlights: ["진한 맛의 커리", "담백한 탄두리 메뉴"],
        tips: ["인도 향신료 매니아라면 꼭 가보세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커리·탄두리", items: [{ name: "대표 메뉴", price: "₮40000~100000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~10:00; 화요일: 오후 12:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17589149065982105376", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%9E%90%EB%9D%BC+%EC%9D%B8%EB%8F%84+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리틀 쉽 훠궈": {
        photos: ["/images/ulaanbaatar/info/restaurants/little-sheep-hot-pot-ulaanbaatar.jpg"],
        placeId: "ChIJdSrmrqyTll0RPhQN7lmMYto",
        placePhotos: [
            { photoReference: "AWCwydh78veJhfT7U_lhNKifFLlz7RMqfRHbAg_tTFh3S6UEiWx-x_uEWqYMGLASCT-4JeSqKFfEl3Az4sN50UgRraYR9EqdfJ57vdj_qGTqaze9Dlyw51c8GeW1NiRsE95WlFP9uurCV4P0RKb-cB1ERuP_wtY31DaeZljoP1YQfwPobkZAZkSoRF-5W2SkhhCUlMv4L4KkG2wwHUVciUGMUMo_Ps0pSjzE5zYP8FvKiQLh0RLG-N3ADJTaL5dmmAEFPfYiNLyF6pk5yL91brv9GJYAjNq4SsBrnKwpWBZNstXqXkac7Jval5fBePoon1Nh0fgm_s_KltXfuvCQmoUhCnUsjx8DlZgKiVUpFnHkRDT6AQXkVbxI0VQcArLuXXcUUOW34Z-IvO-kWy93X_g2sYQFugZWJTKltBrNnBKJVc2FlfA", width: 960, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114017974823212131865\">Little Sheep Hot Pot Restaurant, Galleria Ulaanbaatar</a>"] },
            { photoReference: "AWCwydjmYY5KSAsj6sGd9AeNtu9si-wMsDJDuvSzDt-033iND-ozRr3rX5IeozzRplN4uYSmXg6Qu7uuZG0tfsyaQocZTOLX2-b0O1CkpL-CAWq5PVoqO7fE7rJ3MZ3vzDiAp8OfnB6_W6KNLJQKVK-D8dnJC0QKztjKbPNRakasKlLFEASJhKh1uXTeDPhkBlz6A0WWGIkGjUznk8bMfUVj6cNplTWSO83UDcmP9PUP5FYQO4gtehWZYYAu-bQaqwY7EK3Q3C_EGt7OHoWUfDkw1hYVBtu2B79QANP6f1yx-Kt8QUqjba2PlbzxTQquYLquKf621mHkNWv34nSD3aqq8D3Hf01LpJ2iiureS_k3oUYboRzI9qEub2UPe1rFsLHO3IYIwyd0oyC_ey7FvPGMM3rZNlZh5MnjSkGdJLwNZIlMs3wc", width: 1181, height: 885, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114017974823212131865\">Little Sheep Hot Pot Restaurant, Galleria Ulaanbaatar</a>"] },
            { photoReference: "AWCwydjsqtoj4zX4zd_sD80jIQsNePQYQ28_JuhB2GhuhRYXS9EZIxWYsV3JiLXm09caHVwoYk44j-sBLkEGlK_X-XlFDUTuvAgYNXfWo0ZO6JFfdUvOtxW4dIJcnewVihGtOb7y18ZhtWYnJp8px67oPuwQxBVRCUWc9aDQKPcDYLZvWAQAa7a2LsQaYnYA8ddOR7mDGIjBqwou-GN3d4gkhFFiWCtA_OZt5GVkrT7AqyMje3Yebg4NWURXL49xnJtInJXxKbNyPHvPcHvzAJXwzNj8obACcyI2OsUJszDCq1jEIi7Jr_ReKBU5REegRhp3pMNUqND3WkO0VYHZ56G8y3-e2_mwcCOsFbqwtJ8Y4z9FKps9TTDyndtUrOjG1ait7YKY42YLY0PIeOnTvYI1jCSXzjwI1lRTTrjFStXwg6E", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108295660106474642771\">Alvin Chan</a>"] },
            { photoReference: "AWCwydhLeMpWSJt2J1S8kHLsdwNGj8Sl-hvexZgLbtE3LmsMx74CU-6_zmq0VFOB9zI1GUywYr0FM3uqAOVCZNclUaHWgMP1ppGDWeb1010ntjgB8TBiTiUHhFx0Q46ZoZ30KjTfHeD42qGFfyTtpmC8pTRV4VAbLZUmr2zdyyQ2DnhBIfwBF0M-WmNFyEUbn2NGHTT7JHQT8XsKdIJFuTS2FAn-6m01Sn-lU91P-50vQP45hEiqpRzi1-bfkjKABRKrWZsWhYMe_8EfTk1SI3k3D7vFtFLaDdMeIvG7H5fCYVMw6kFvnT1daHff2WlzZ8bFDG2ct_-CUDCmd97fhzfzX273Y0oJSKF9oN4B35K2MFCRj_THry2ZDoqO-Wttf2qh2-t_gY3_Jo85dIGR7btOb1brC8D5p2jANUToZARhbUUznsne", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111710182167104386410\">Hyunjoo Song</a>"] },
            { photoReference: "AWCwydiO9PjqOBIiaW2BT8kmH3WfrZ1PByJm3kjmhOJMxl2t5agVBqsitxUtjOPrXbeWZZiRoWI0IwObXDHpn_RsQ5GYFDsaIj06qLBxjkYeTMuwQXMFIuGsQ1Zf8w2Ocy67vBOi5Ml4F7_ZQleYgspxGkGNGwvb9gYB6meZZqUi_t4My2_fbXtdK2CH5IJe9MlHr9DVhTb00figS0XfY_d1yOHcZINoqhbxju17YB3nsQkMwSlA2gBnTHqoqICZ-yPY6xbolJUzlTYh6xKxwynk6NgX3VtadSAAq6cHb9xxsOok3x7glrba_WM0j2kZ0rW90D3y0He0K4o9ct_6yHMh-JSVTaPMsN_zpHPPhTBg-Hkgim9Ooc4vzkTvyT-CF0jaKLyRmyElXinhYZVnxoLF3nn1YHeisKeDD5ALr7TmCRHzpvrB", width: 724, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101318693262873297394\">Saruul A-</a>"] }
        ],
        summary: "신선한 양고기를 뜨끈한 국물에 데쳐 먹는 훠궈 맛집.",
        updatedAt: "2026-07-14",
        highlights: ["퀄리티 높은 양고기", "다양한 육수 선택 가능"],
        tips: ["든든하고 따뜻한 한 끼로 제격이에요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "양고기 훠궈", items: [{ name: "대표 메뉴", price: "₮50000~120000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15736294365859746878", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%ED%8B%80+%EC%89%BD+%ED%9B%A0%EA%B6%88+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사쿠라 베이커리": {
        photos: ["/images/ulaanbaatar/info/restaurants/sakura-bakery-ulaanbaatar.jpg"],
        placeId: "ChIJa9WjtVGSll0RiQ5ZiWtwlbY",
        placePhotos: [
            { photoReference: "AWCwydjH5jed6lSf2Ka4cSL_qgOWElfWyb_suCAiw_gP_Ik2-nx9TDHLrIdrYiwDZkRkhxLwFCzOy3jDhXvqOq-BufvkA2hd-H4x_7mBG82eSQBSylpN2rMEyVyK57N3iCuQNvLlgSymOejRF5OEj2SQLq1HqIHeg4g44hJdITS2V_4iJYpDL1Q_CNYuP3b3c97e6k3UyMeMef6OaxsZR2z0yoIP07MYWwcS3Y1BbNGhUyhWpCqfrQQt05qlLuYJMLSpG5xcWXDrMtxCC2hZcqjy8hNeZv4WazzSYmhpq5Jvf8WCgGCj7vbhDIWGHNpP5dwSTpVXRxhsIlbn1MjVmjnEpO-hhcHaTMw3wsMM8zi8P8hnd7Q0nfwPzC4Cn8V0XYJbZl2rXstJeha5CM7lIH2cNF0UeI7Kpo4Ayz_HBj6kCGcGLm2D0dteYQ0bRFmmvh2M", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100192523295938436691\">Dr MD</a>"] },
            { photoReference: "AWCwydj9XG-VohqY2PPtu_kWjAy12phSXTSya3ZSr6s0J7KvEP3_s0YufmBzXt9lCWuRG6wWkgu4b16vqtUyGAp1dPx2PHtzWOSoeZkEe4jbGD4JbiBeImt_msOhpHMzAgQ7UDnCmpfYudf8110xiWl410Xw20WzsxYDgzBg80DQ6lG5Ji5orlGtAb0HPe09Yy6onQpliAjEre7gtJi50_nPAizUp5O5GwdC0p7_E0lLpkidtDGxZbJV0Mw3dLHQ2SRjTXwxHMtdmtMxI3WEMgtVmfdDZUiWzs09-Io92qKDsl5Pk3BtSA5c0oSzCFAhkh3p5xTX3GuxwwKbLt-W0DtpixblTnwnnVJi8us6aIpKOSBWyY206QVKDERPxr_pemx-f-x0myTaRZyNBhqaeMr0sL6oM0Gjr8i5tZPyhvvk3to", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116655568848752987771\">mo go</a>"] },
            { photoReference: "AWCwydgnvqx2DBecKDeYT1zwuTIg_HYTNhDEWmfArFHLODjVBWzo_uG55FaxNO8Z7yNpBK2AzyXSDf1xNjZOPamqpfufeU2Y2QzvnB9WNedu55rDz2f_2Bya0e33FeslAQxab-XOSJ7Js1Gk6O5cdvUmYPd_WNrTcaa5DoAJmWvazWVof3k_8oNKrjL5AO9SJ3FBjXQcZ_Z3d68jVIpthPlDi0yY-afv471K8Nm2IxHZnGYld7WSFvnkAlhgo2NfIBKeLR2kEKdQ05hzjfyHyyame1qRKvJyUskzT0nEqAN8oidE6lmv0f39ySJXi8dTbIcOBqtidEnGqMo-o4dJp7N5-NCaB9KmDvvVxYruAVBRRKkGqa82y1xAcrxeBWy7oSCUZfnbOeLqtRS8FANY3XcMdm4H0f5yOzrQZXuXET4RUgFc1iX6Fo7wl8T1dYsVG6Ew", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100763577324509385174\">JUNG</a>"] },
            { photoReference: "AWCwydjC5pIj1QLLdEGOPohbci34gMjl5ej7DGYEwNpqeNi8oVdb4YhcuZEtkd4Fw3VYLwVPMUi4n-tDDLejXSYT-gceIogrR4Kz4wQklkIUFtmNk8KP-zx7-dIYEfmH4do8mbmAbq9S8aR3HwKBfV7iz2puNv1Y5VCuzqv1yaMIvjUpYsNuOjntAczZNeGoZtu0pD3m_C6NzZV28S8V_Ze3D99w06A4PnR-ZP5G3OvhzC4p4B5zH_CsGCleEjhdILDJlWq4aMtvHyKH9GY3INEGYmwKeTO0GS8RI2ov6jrTYUMq9hDxWOVWV44yTRQjOjGo6tbQeLu88O_1cHsJAFQHv62hcLBvBt7ImogoRcJ9wDtyKZ_DlOL3lELDX70ud1rhpkfcWu0w7hrXzSiGEFQBo5HZ6Z6h9pzV5hpe-Uc_gqqpCF0cX20o8SVNk1S9ANLX", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100192523295938436691\">Dr MD</a>"] },
            { photoReference: "AWCwydjEnVzdXmF1h1Us5eg0oRZG8WHtxdjJzqYKstr6F48bR3JRvrYHryabrlDE9P3xL7_C5rUjTqmVc5ONyF1Ci748ToNRjMbqEP6uRPuSEr37PdP1TaJ_eiz3LgCY0_Hp7STZrOnUadPFbsqaut49FHrep9ouF_Axx5bVSaIt8v1eQxiphf1_2i4q-wwGVls9os1gMJCIslJw7ZGhy6COeiMmDNgmzPP9BKJiznDqD8vWHqazDOYYIcv7pF2t1mSgGpYCpyCSeqtHIesCpFpXbcpJckmSaQHUSEvl62apjbmr1NzgrBKFAdyivfhWvmGlwr5TAsIQWu9d6qHZg7yZ9eRgLlpL-BanNLNvSY-NtmbXCoCgP_rHVpCWZ1hXpxg53cXUEkRGn82SP_1CxJ-Nieswy3woEc0NuAKxwHcyJQzTE7kiXgfQMP-xWODPB4qt", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100763577324509385174\">JUNG</a>"] }
        ],
        summary: "갓 구운 빵과 달콤한 케이크가 매력적인 베이커리 카페",
        updatedAt: "2026-07-14",
        highlights: ["다양한 종류의 베이커리", "달콤한 케이크와 커피"],
        tips: ["오전 방문 시 더 신선한 빵을 만날 수 있어요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "빵·케이크·커피", items: [{ name: "대표 메뉴", price: "₮15000~50000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13156545493600898697", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%BF%A0%EB%9D%BC+%EB%B2%A0%EC%9D%B4%EC%BB%A4%EB%A6%AC+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카페베네 울란바토르": {
        photos: ["/images/ulaanbaatar/info/restaurants/cafe-bene-ulaanbaatar.jpg"],
        placeId: "ChIJ96TZFkiSll0RCokF7KjsZ9M",
        placePhotos: [
            { photoReference: "AWCwydg0AEMKwNuCeFRL_7UMp4K4PCRpNQV52vWiWRxE1vkbf0ofapOGOqQZTTgjcWYNWKuJNLNAovVdIER06ETNKW_dUzsKMIP99lTDqghTYNrY1V0BZ18Gukc6FLYCNvMfLP_kAunWbhUm_xg6zfq753e2n4JKo1mNiZJXySKLQShJ5g-ziXB-cCVhC3uTZ4HGXGXYjK5j8rK5O8KTm9EKpmzH3-VPoxLVNmb6-e-IMtYwDkt7Mbfb0gY_ENQu18Hx2Ns2AZD4hCW1k_1uztqio6Iu8wPlEoGDaNf5nSLSNmURTinW66BSAO81VhrxWkX_Yn3BGH0UbaNNC_1KB1NsRhinlzB3dEqwb0lxuKCMevg3kqIwf-NypNacWii5QGsKfAcfKaDVfBomsBCRIKBQdIQVOavl8RnPrULhd0OimUgm6Nq4", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116169740743763412833\">Ariunsanaa</a>"] },
            { photoReference: "AWCwydhIrtUBJ7qjsJQe-lB4DI0lbwLPDrDLpZAAsyKE3ReOthO-WeLhpWOfGS0M_Ttkpn5-tMbEzbXNnT5yM3w-vBzOL0Zt4nR3lIEy-lk8mG2zGaHnexrM_nTidhtgPcQO7ju7XL7vJUNH4VkgvmcZsrQ377VdirvSa_lz4jBu47h2zBAA6OJY82mjbgIJZz8y2n0I2P8OmxEHixmLJwTJK4Y1pZjauIU7yRE4d_Rpg3CHkugI3c3-3_qlWPL50emw-g3aAt2ThXfzoaSMSenxy96yJtT7lReChQ9omR_sM0vYJ-eEzGwBqeraG7W80_xUAfPu1mYaVyFLzCBYljr290hiJWSO8BUt9R-mwS7hsPcB5B33h2XOzl8xpkUNKTeWGY_CE2ORlGofwY7QzZL8gjI6H96Xc3al0ycJL4fRU7f-mg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116169740743763412833\">Ariunsanaa</a>"] },
            { photoReference: "AWCwydh93LYOkcoPCMuQOvUR7HgF6FUdRpfMsCpVX3b-p_sTn_Qp16GrI4_DOJANRscvEokkNEF3XOuJMPK8nLIsuwcyVi7bxh_UvyRXYFdAEpzLMXlH6bZPsMYPrj291qImXbS6FunmqgkVkwfyzk0e6xbkHXHDY-03Lk0q_m_vMj6qNCehKkayWrh95DxgtEwCdQ62lwjPN_N6Ox3yxf5caWyfY4tJd4K1pZp6x35eFTOpty1nDmPktHXjD_uY0x3lKn3jaetLrdIDbxN8JBiv8dmXCgp2lLBcehxsUudBsO-iK1QzddyvQ5xu2A0he08bvPr4k3fHnkB3PrY_Cu-qZihHZC4gWWlDqZG4R6Y0C15cijtQFZlClUUfYOxvHqM6SBbUUb4ZUe_Jc_uPxiE7a-sFswI4sXcxt6Bm0-U4aolVL10Q", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116141059723975507695\">Taivan S</a>"] },
            { photoReference: "AWCwydjSmOdGuWwA8KFccS3sSv-JUgJWb7KQUZ_2GthB6A-irqpFPfnXwF4TgRzQZfDXVOkoU69f4ZP7s_3vj9KMXsA9vNPoIJnAbPkKyaWv-9_iRWnAQLoIro7Gfs1M-mSXzdHP2d8EBwFunnTlrvy4QXBLDIlIqT6-hOan2xvG0gStDDKasJbX1a2kbyuLVdt7WCsLPVciBO0Dtk3EQqG7waS8YYBz5F_pdofKps6TzSb9uLbIiXz7A8pl0S5frOS3Lwbmdy3R6O_1KVq3umBDmrcad-f3iBskBWuT9ncAY5G0Z7URLohxqUiiV7iBvCB1OZIvJcS9GJa5AANaLolRUNSYLpfxR1a_6uStt-Qhilc3h2KrhPrMCz04NFzbVoh7pnUnK6hzsD-mo4-vnhkoywVDRoaplsZI7U6Pcs6bmfQpb1ci", width: 2560, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102529717681543370413\">Bibo Lino</a>"] },
            { photoReference: "AWCwydiP9PKaJVNlVVVBZt6ka_7mIGC1ebvDQ-G8l2r2FBW-8McWrGtbiHXIHnaQm5GNdtBBMCZie6ygTJyf8wfnmWV-2h-pTZOwKChQ1HEJLUJZ-pM3XyCWqyDwGbENFC8FD_LgKwRqjnyy-nfJgFJUKM5HnZ4nStP3LJwTgUuRQvZkrfriGVBRBNK7Lc4F3gE7en5YTNKvrfhiQkbX4SWgCXO7PdSQr9OnWW9tW9JGvEXnzRJIOSpHWsRShRcmwR3GmruGMYH30B913P-BD0aekkVSsY-tzXmJKEYnuNzCQY3qJ4CE4PqMHAEy5QC7pNHnmsOHqanBu2Rj0FOzpN2y2BPot477TXqRG7J2iwQCtGhu3ADOHiZ-KAeBgsLX-p7n_PizQwX5MhA-Jq_wZ8iKiZ5zyjkTHqmf0Vl8dZX1wV2G4g", width: 2560, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102529717681543370413\">Bibo Lino</a>"] }
        ],
        summary: "익숙하고 편안하게 즐기는 커피와 디저트 타임",
        updatedAt: "2026-07-14",
        highlights: ["부드러운 커피", "달콤한 디저트", "아늑한 분위기"],
        tips: ["여행 중 잠시 쉬어가기에 딱 좋은 장소입니다"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커피·디저트", items: [{ name: "대표 메뉴", price: "₮15000~50000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 8:00; 화요일: 오전 7:30 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.caffebene.mn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1170270325154095333", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%98%EB%B2%A0%EB%84%A4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "밀리스 카페": {
        photos: ["/images/ulaanbaatar/info/restaurants/millie-s-cafe-ulaanbaatar.jpg"],
        placeId: "ChIJ4bnVkEiSll0RjROo8S0DFkQ",
        placePhotos: [
            { photoReference: "AWCwydgeq2u0nTedo_DCxvJ1lMpIV6KT5WxdPxBIfhH06HDBQb8AXjb98HZctgvPBdc2KiE0orIlpwkMTX2nAlQUozYlRs9mi0qQE6m91qoBeLFGKFaIS0VegoDt_PrNrdIrn3ywGQlafYGlSstWzSENpj1IT4fqdbPuJ0W54jeuV8qoaCe0qu6_CLiVYTrT0oIkM8MT8cQlQi3KS-AMyadPUrt41t-1OgixDRmwJp4EnNYdrfS02kFpYnh_Wsw0cs3G_BxlYCcw_RUlmVbuyidJVLe_yYDWDrk7PD_uRNk3CwzA9x2jasbJykhx98-g3FHDaIvySjitHGfRGpYKl0cQTEmlvj9mJBV81j2pakeej36JsB-Nb-7xKTRXOT-vHP8_LllpwuINlWl5uSLVfu_-aNEihK1WZAY0bO8hnDmDZb7GePI", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116597843170102329352\">Joseph Kim</a>"] },
            { photoReference: "AWCwydhwN5cMQDKpDyMUUr2tANgxX0gGuYHYMiqE7j5-555j4nSM4V1zX_8QT7SG88D8oaKtQrgHJa0hIFu45xg5yxIvNcnbwtucEQYnmSppw6uPp5SwNyeHBea0UpKc2ZNHs1w2VdI716atxy-go6qpQBGDtZy2xkTT7X0EGYKTpzabaKgjUacLDjuQ8f31slW3B_rSSKPCKVcGBJSX9a8vZkm6OmI7E9eXMZdOOuG2tO-WUFZnFhYNu-c3QnvwbHFKY5hFBO_puySuEeSdpnBS2mzNEuFRGu_tFXzGj_obZ4hxbwSYy3hq2zCMhN0rMgUi0lFhOlRytM5Ageps7wqHz_X025OyR3_Us8xGajjfhRinXPhLH5L_bqfFwtbsH5zvUGXR3yalnbgL0gH7WgwFX2WiiHLv3aWHn-wsgW6iy9FivkojlgCNuMt89HpR65KS", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102998017300128155447\">Gökhan Tokay</a>"] },
            { photoReference: "AWCwydgKVGXtYJ3CXhDjdqEACe9VG0N6tV2JBziPRqn_7pzF3CnnnGrcGD-vTC5Ym8myiKPTw-ytpjcwG-22ux6Y54USCmZ_tRk3pvv7614Poc4GqXspDmlq0w9Qb231wzbgboSdCSqrzhAEV5YlUIhnd0P2Yo6FwlZBoOEgoQb_E3lhOcdKXV9lsNpT_C5mHUV_yr4zg25UGdFYwxgm05UTloB_ZNAx5yHqALvp_IkjKe9K49dKyo2vdoutGltcmh-hBP1Czf1nmKwCyWNAeNBxt7QJqayEEAZ7wOFxkH13myIzFvKt19JYxMTyYsX-xGJC0sKo7JJVWSP2Ap5mz69TuTWJUosY745JqjxEcPpqCypVzG3-GW441MXqDiwjEoBI7AL1NCXYcg5etrEeA_TQG5dzV5pta8UAH97dF9cb4MQFwUT9QGtFoFA0vtXO3k6o", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103113971949492721407\">Elena Tsareva</a>"] },
            { photoReference: "AWCwydif56XyrrCWiDl8p7BOF7GspAzcmPXcpuBEs7GtqEnvzYC7LCs8tpVVold04O_1BquEbr1YPjqJUidgJWtzenXx6Ou1fhIBHK40pXtsCTkFXeEUYUMSj-xstIQUoljSXciV9lbJx20RHl7pkP7_JduKN3DAVEtTbuaST2DfaL9xufjak3kzLQyKoFss1KgbSEREvBiwz1Wwf4fpUvtxU_0ni3GWDH2FM9uKCjaZJZGUJ1KeIIWAnTVH3OrbhJfnjMKXTcExnTq82-dCKPQL7FOXotUwIbr_v_kS7QfAG1KwKuCdfZdjwK726BbIh8Bhc8pKkGNeESCwEmeTOcfkDF4rIpr7YmiKn11woLBDHOXu3iYtS42ppYQc4tPcLG6Qd5bUIyMDiHFuh6ca42kSjAE6wOxY3IOE2WKiOwB-xD3bQ3isRAqm2V-LObGN__An", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101351808522152161092\">frances forever</a>"] },
            { photoReference: "AWCwydh7vdzSx7aJmLDfBwyUlO7ZkGgSg4HHZ1sLGEWUI37FbTV9-9yqiFS9_a9uM29Nny8GKYt_-ZeFGYRYpdKRe6qQTl4T5yzXz2XCmSB9zjd9hXfqrzxyZWixlZPlNzgG0nn9lEyy2mC_JoLDjoxNY6YcnflLjiFUp9Y0gfyUiHM7Nh76AZG9JaP5qDCHcdBW5cydU_jpqnHLWlM3wYP6cWmL0ZAHOxIuCIAWTWzoDxQrJJNXcT168wqldyEaOCvK_CIs5rWurAxchfL1pqX4FOvsyvUS4e8yG7ixgdb-S7doogK0Doh49HZp9OAaKfLvr5CsgpXB-XYobGI26DQIGCswhn7n34IL4X3yI9taRCRplDcLFTmlTtDke1aZ4BLYfNSZnp3ass5xtJXPxgeWSH8y4rf0dWSd1PMpZmKkZG24nVRrNLKNKUUrsabTvwZb", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102998017300128155447\">Gökhan Tokay</a>"] }
        ],
        summary: "신선한 샌드위치와 브런치로 즐기는 든든한 한 끼",
        updatedAt: "2026-07-14",
        highlights: ["풍미 가득한 에스프레소", "신선한 샌드위치와 브런치 메뉴"],
        tips: ["여유로운 아침이나 점심 식사 장소로 추천해요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "샌드위치·브런치·커피", items: [{ name: "대표 메뉴", price: "₮25000~70000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 6:00; 화요일: 오전 8:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/milliesespresso", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4906112339929469837", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%80%EB%A6%AC%EC%8A%A4+%EC%B9%B4%ED%8E%98+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "더 불 훠궈": {
        photos: ["/images/ulaanbaatar/info/restaurants/the-bull-hotpot-ulaanbaatar.jpg"],
        placeId: "ChIJJbTudUGSll0RE0qVZt1MWf8",
        placePhotos: [
            { photoReference: "AWCwydjgNGYVDeNatd2Opc7KLpFZukSOrZYN967TZB-pqTFYGqs6Es1EU0GSX4zw5rOgdESZGPzPErz7PU7h3H3_KBgFkP1pr6kSSfkAjHal0PX3kE3ks_TU2iE1rp7v1h61hrpxysWF4F5SMo31w1DvILI4LkBC3UeXSoBs6x1dE7h9l5H_mdOX6IKCGF4kemc9eGfrgmT1JeZgFLktuLXcpGYGQW9UVQPzbgGW41xEPWaOFQTWFZXJpE0CXAUei9mqa2BNhK1dtraX9nc_kQboBP_E_8PCMcMK0Daomi2lLlLIw3K_q41PU_nT7rQHt2VylP5pWNBSqRvjGECPFMIsYsvmaUq-jZh0A0uxL7PEVt-yyKDtV0oyi_Xx7-FhXROjYu4KapeOClYwrWw6rBl4ljgSp2M-GnouH2GjgQQU52MZSnY5JwncJberfWMfxnyn", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101116019836499008261\">Nobuchika Aoki</a>"] },
            { photoReference: "AWCwydjzEdBt3wMF42tX--enVYE7JiIyOd4-D9yTVnSCn0FBJT3X4l30vqkqqGHo5890zdX_45SP0lQcdDfnCvIX9cLSxxM0t4lD2ho4SJfxgS_OvGO3W_wqEaiVJ0ExilBQiI6joprh7Fn7smY5fX-rS7WJu5VrwI_dMGG8xWoe7dOsmTCNzVjsDmJ8pXe1n_OPwTFw2pU2QWov6ZoW90HmXvuRBdMMqAk4H1jLDC0OYhXy1nSmB3fW2gh6ki-S0sJeM4Rk9MUubp8zm2YZTFlNvc-99eazS6tZTIgBlUjNKZjPgchPQ4Y0RIX2FYQNPhTCLIFvpfIlkwmLz1QG5T1Hjv92bRRg53ft_A2KXJiiQpWtbH3OUib5CTo1P51mK6rtsp8HfD8SHLX8BPzA7a5QmOEsEYA0AUwpIa85AHOzeBv9-IdDCGDZ-qTgyk8tfBvL", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102951521532973411703\">박해수</a>"] },
            { photoReference: "AWCwydgkWjFEKiJjdgtzDSNbMDfmvCbI_an9FWs5njCVYa2v7nIMnoyXwTtAjXG-pqdTXrmYXgVMBQ15lQK6zYC816-2g4zuPaMYYBdr2J08_JAxJPehPjlDemJBiL_6TInTQdShJDy07-rZZyUJomK2khG9pjrnk9KVg88QKTnEzUTbzM2PU6FONBrAapbCENyFu2fsSBY7m3VPVWQY7TwQ7pkG_tg-3VjtyZqj0O4c9HlKyeN8MgaXY2x_CGmSynL2wf-JQjdwCXkv8gFaj0srs_zNzINLA8cqqCfVV7k0Y341X444aSM-BXUzQvj2iSA2F-COCRZEBCOBcz9eJrJ_yIaK7M3I640_iHTURkvdLsTOAqLGMfStH6P4snSHcbG_dkBDLkFLWuJA4P_xJxZmVBlxNgwN9dJ7CdaRvgQ_YIu1mej48Mq_NzcdP4k21w", width: 4000, height: 2666, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100346336068352256039\">Kawasemi Hobby</a>"] },
            { photoReference: "AWCwydjwrPglYBx9ScB2LO9Hz7tXxHB-VllLeoCD-K8gxuTomAQE2oJzw_tSV5j0PN8hXEFBkia8prE1m_CYFlZvgIy97KnvAi3GrQObuTxZcktVw6Vqpwv2S8wA3ODuSwUOQpJU4u8rQ6XlbIGG6ZnZAby00iM9qoZL4WXAWoJwnNAkDsxGU3PI2DssvSkqvuG9Jix6ruVzuMRUCHV3S3aMDFpqkDY3c-4bwifv6beYyNIdg1aNqPfYoJzwrTULJ_rzrBC-nZEL0FN36Bnk7EjG6F-GxpXGO8wctUd63MQFZg79NaiwG2BsWfOT-A33z0n3XR201HvCBUEue-UCgRme6x8xTi3_7QkZponcCpurX-gE9Ey2ZSmsitKYlIn2zFgmoxQRt6qzpXPeg44Mwd71xDaPIc_pL2rzW0YGMhFLXUVX4-3d4GXlJYVH-f9V95MX", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102951521532973411703\">박해수</a>"] },
            { photoReference: "AWCwydgdHPnTljaziPYW61eZ9xgezwt6x6Qrrc4-MknPCPHrWTkrn79WU3Znk204GtYoQZ1lc8Z1Shj9Qu8W6LxeLVMdnZqdcj8fJGx_DGBjUQNJbGBUd8DhkHgnaJt8FRhIuVbpzgQsKbZnx_kBUeTg-kiXxHhG-fmYFvO3JlgIn1F0TnbWobB5GB0DmWpTMnU2LlebLosFcDvLMPDXq9-aZ03lsKatBwDfA89d2Ev0U8EDBkblIwT5FFTPonHpU77MmuTKyCarnVH3t5gvBYBQHeGTC6Gg7Vv4OkfmhpeW-PU-qk-JuUhCrNlU0nz6nmtJuKwKYz7DtYBYeX8pquIT8BE61CtaU0Fh6OhO6rURl06d1b1SJYF1pDSsNP6JmmJ3RyE30KZttv3Jgo2N5h_ngEDNjHKiJm70wUFmeY1Bp5uBPBjoAi0NKZO7xEYU9A", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104976318637653131431\">Pun Soon Ming</a>"] }
        ],
        summary: "The Bull Hot Pot Restaurant 기준으로 확인한 울란바토르 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["샤브샤브·훠궈", "평점 4.4", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "샤브샤브·훠궈", items: [{ name: "대표 메뉴", price: "₮50000~120000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오전 12:00; 화요일: 오전 11:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/thebullhotpot", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6379317770525393897", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EB%B6%88+%ED%9B%A0%EA%B6%88+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "후통 레스토랑": {
        photos: ["/images/ulaanbaatar/info/restaurants/hutong-restaurant-ulaanbaatar.jpg"],
        placeId: "ChIJd6oaP0iSll0RnFhFFe5pRx8",
        placePhotos: [
            { photoReference: "AWCwydhoQjV-w4tJV3IYG4cEAZiM2N7w9rBSuzXFGp-96LXoJQT8Cq0OauIOLWph6InzhkrUjBUOViK8w0kjKn0HcoW1JlgbZ1kMSNBoA7XFetxzF9azzB5HjvJWbeFUkwXItmyUo7gAHqrTi1caNH85DwZFuRQWFDv_WItSd9v7nfW_pIUXUBjl41m2hDTL8Gz5wrrUwXG35gnHIkWeYFypCqek6ZuLiZLgdk2YAUoo4lkzIx-mYOcbvuPaf912LnYgAOobE2ZZUfyQmELSo0mZ28TOBPwzFKQYBJRJ3rIA2aByN8zD-0E-y4qHU0MrWbZcnbFmDnAVpfM_MbVF5kH_X8uuFoUwm-b3SMHm6T90sqgcf_JmS2w6pGXg91j-SIezm4ImRV442RmWF1-AkNQdsfDHPGFkLrr3NPbHkSPAN_LwRQ", width: 4800, height: 3236, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100581021905544936391\">Hutong Restaurant, Shangri-La Ulaanbaatar</a>"] },
            { photoReference: "AWCwydgZ_TShaY2VqCLerp9Zkbhwd_lbftpoFehum-sfPBmJHPLNo-Nui26iJUbpzpeLbLp1YrA3pwGt3Yq1H67wbIlwYpOsmDHR9aQCX9jMyflrdISHfWyoVdK_eSRr71MfzdxoffFRCZN66kcGcdbcY_t695BitMtfsOFNgPNzUCnu0w-I3xIq6UQocCvWkBxvFJy1_-2mO6nlxN_X3wd_M_HaJX-Q_rJ29jHLF3moDcet6QQwYf8zVoIhNtwStNK4bcWzK16B8_9BSA2zFmSwmsNi3w0iqXE7aIDo4qoaPPNQxA5k9fX29KytX5I4s6rwf4jE5xglpEr36V4cMYC9vQBsXnDMoQ0hSi0Iu0vJBHgwFR9TU9L92jLfqu2O7V4qmLDEbO1Caud908IIr4gv0wSsw_f3orvZVvdY_kxSIXevWL_B", width: 4104, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100581021905544936391\">Hutong Restaurant, Shangri-La Ulaanbaatar</a>"] },
            { photoReference: "AWCwydjF4_9kXD2Iv8RZpusZQZ2SlrNkEKRfQzZBr2BgU1krKckTBsHTZU8Mn9IN7HvJsFPn0kUX4EWSdpel_PfTFJ5oeAJ29G25vPQYE7tJ7b0PZxfG9WeK7WiNCTR37ol6l-e-cSt0iaZfEvtwiK0oIeUlpsd6oh8kpUYEkTHqsbidi4NJygwzUmV6fZPw8kQh4gVpXDilSvNoUkwv0XhEyYTD5NgtBRXAng_mMx_3nqELTTNmuxgr68VlyNJtA56D89L5VJQdNWmkcMcZh_69FCiOVQfifOZ_JR6m5ZqyHxXDo7iGL9-PAFZaw39yWk3HuSralx4GAgx5SokyCyTas014zM34uTL94l3RAjyc9yQ8wlS53dn6-FZ3ctK66q2F40DZ1ZvmfHbHrum7nMu56bgyr7RO24OJUpc2TarTq7ZCbaT_", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116169740743763412833\">Ariunsanaa</a>"] },
            { photoReference: "AWCwydhEYS1zLN-G89oxdxAw7iR5ooX-zoMFMKfe5hm-6BsQckAB01IaaRPZ42cpFCBD4ecFuFfvt7ZV54XzqNtUbq6FdUrKGVG5QD32D2lJSwGHzmBVazLjAA0OunUER3RSUHGL5YJgRIBGl2AYtEUhTjE556jDRvhUDcDk7Bf73x26-ov-IN4FNszAcsPf5U4LJAi2Q0XkFGgrDRqwaYybjWq1R3O8KxSDH0m-LtEuKe6fHTyYQ13GGXdonkDQHEx-09DFbgzJL-j70krvcWEZd0DG1hl8DUHeq8sF6gcP-IoEUMVrwMqw8O1KduOp1gPkCqSAqMxOnw4Bde0F7BpOzaS4EaTh4SQTANqz3SRoC09FDghvChVYXGXLzh4VRqlzIdktwh22zYjyOfbAYU_LNBgwpQTpqzFpcQA4dE_oj_CHgqSk4oFYE2Pa-RZbRZet", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108875787229048557287\">Anderson Angkeyile (Flying Sailor)</a>"] },
            { photoReference: "AWCwydi2oWdhGmDCP9T26jbs_myaoDmHwczQyl8RC1JWzbeu7Sy2off2NzLEhRorIwvMuVieRaDBeKB9YinfyaZZNjvmh-2vWZPqHMePmkFzSl0NXKnpHBV6m2j0fJgYVoy4MsqkLZHnBvnCKKu13MKxUrzxiMEno8U-tQpW9B5ubv-AgKhm5yU4zHMg0Yt874qKlDhcyLvl42NnBgP9u6m21dkiswbAvoI269RNAeCILELiZDpThHS7oAgrKYA8dKetWUKv3tsYM0Gpau_U_Zd91HVnVzxIknlIAeWHPnbXOJYzSG9IKZzwJKGe1HgDFy2xuftQuuGj9_bAhhCEVIwotiQdwfuiXwESj1FbTGgtEhxrJNvv3wAN0CtlYSMQqzXKLdVuKZ3vAGpfuZGViFwMhBtDKKiNNPOGjeMTHp76JSrq9sEy", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116375528743673288186\">Jonathan Marc</a>"] }
        ],
        summary: "Hutong Restaurant, Shangri-La Ulaanbaatar 기준으로 확인한 울란바토르 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["중식·딤섬", "평점 4.4", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "중식·딤섬", items: [{ name: "대표 메뉴", price: "₮40000~100000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~3:00, 오후 5:30~10:00; 화요일: 오후 12:00~3:00, 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.shangri-la.com/mobile/ulaanbaatar/shangrila/dining/restaurants/hutong/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2253886609802221724", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%9B%84%ED%86%B5+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "블루스카이 라운지": {
        photos: ["/images/ulaanbaatar/info/restaurants/the-blue-sky-lounge-ulaanbaatar.jpg"],
        placeId: "ChIJ81DsfnuTll0RQVucSSUUkjI",
        placePhotos: [
            { photoReference: "AWCwydhRxF69FqHdPHoTcdhdfDiShfwGRWzpCRnRpqjU231R6GfUJxEWe50HMWru4QB7NZoW-9mtAf0R16LXrdR6OE1VCHtKtX5qs5oCr4PW62NP3xl8dYUomrdNdrn49yWqNEdp9ukqVsRuiX9xVyw6frTz62jRHSbZpquMTMc6E_Lm-fWKpBnppYY40OfevzpwVLaVGRvhFyEWSvH74JQJcMhP71Ksarm3YQ-JmOwAeQd8HpTAHhvkbnPhW5ZRXEEaXjjhWha2wcZgE0Db3LMtsHHy1xzakWelxb99Zdc2aQvUlaIrAY3pBvqJ9CkxGHTopREtR9QztIUz9HP7sf3BXkjoTJ8o46geEPKDftorH6jlhWPS6NbcFW3K6Mey_HfCGsDbshEMPUvzudAg0BrEEdufxwdu4_VwLnxDkZ-710qyaF0PyMyDkW23qNvC_vRP", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115759645558849469194\">Serdal B.</a>"] },
            { photoReference: "AWCwydh2I4Fpwoi7-229fiXuTZhboFiK4ZUcXgSRH6EvFhwCQhEu8fZeYSl5N0MlQv6yHwfiLg5KdeEPz1kHBhRczELf-fgHsB6i33llSdEdaU9JobfhnHZ-xghLO0Vjy0zHcJnm6x7fRIXPkkch4ZDdOxY-d6zYeBB2T4m_9hkPgI5gawQrUfRil0rIXx2MtFsocIicDdCTkGEMdCE8xzRf4uUs6WOb1uBohqc8HTNShtExma-DcRLmvuDehZjR2oLScD44V8j56xuqiWREBiwR_kNheKsnDC43Gk5qVGekpQPcmD4_aO3vr-ViUIT9ZxeHVZLfEYMCCM1LwR7W1a1lMl8RV95RC2t1fp3PIpwvZFuvTehG2XepUl6OjVKR0IrGh83fOeUyh1hccYLX4O4zbneA5oZjz3UDAwuLfuiKpbFbvMkLoq3Hs3x9h61hbPO7", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115759645558849469194\">Serdal B.</a>"] },
            { photoReference: "AWCwydgaf3u0AtNEqJgEMLeYF-P3gyJ5m2kmm5Q9Tle7zMr92MfFtu7Lqexi0I7oXBEI5D5tnIZ5wZCekPPjIiY0KKU2AuQCS9bpUFmQnn6ygoHAXwgdvrmh3ilFlgTVIkYvs5YbfsmE1kyupkWlEBfriUM0KAudOHLEUpATneRa8hkESlVX0jSW5t6on-WgVvucd8A8fRfjoIaEFCIjDUSIwcpl9on7c2l4Fjo3Qphrm7_pfUE0JhpPGXcYddoGO-1oEEdJWM9pIU3vzTJtP81SnQ3CO1897LTjeCb6L2CujXUl3e3sHJmoeoIFjZPrlS0lepj5y6Bs-oEFTCpCdaZDGEzv9LIf8e8lGHoRYB74MtfLFHw-xlyOJTTl4ufuK21J6LZOB4YTaUaQsDXIYQhZBjiHxL0n2T8ThTUT3M_afUot-b9ZpqVQ-7vWThsFA7Zf", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111012275078044357217\">T S</a>"] },
            { photoReference: "AWCwydi69ZtJYt9-lQUSmUXYtvjq4r6DQDA8ARGotty7xnzDD5EXDIJ-7kk0Q8f3S7R0yospaGQwHNiTiMFmAz-vehWc5xTHTVC8LrpClhb7hgKuryUAizLBG7bzMg0ONHXT-z5guSB6R78bbbspwGd183uB1yhLk8i7NlK4nGJJqolgSIz89VvnWIllEAqz6tOJqpVWCwmq1jsVEIf2B_Hki4aaPceswlk69kcul-FFyKWe_OZi0oYQlaJO8CGak3KWqvLXcu-hgYkSlSQ66icLziBejVLvwTVaPlPqGIl6IiKbThFjhJ1lGcwU13r4vupP76ZP89-TqUq5noXnVIrPPeegSnj478lqF_uEdeuC5Cb9K4xiuNF6BnNsdjyrmjRFvONeNt2gvLHT4B6I6y3ti5yV4Z8WajzDn3eclGhKlW_CwA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107456009944400087010\">Aiuna Mongush</a>"] },
            { photoReference: "AWCwydh1gc-FlgAA_kefcuoLNXPLGTwYTi9BeC2KjPpJcQrEfRGIsMU4fJU5uQmOjyZHvvWM13YqZQOtEDIgaxiJv5WyeF1ziZ4cXrZkaEMbSQlyL4aXifPEwu4qGVVfEpPcEsWfuSnwDGgy-nQ3qL7x9nq3pRSigRv4jX_SyUrZxoBf4jSbe4fdBxQNZ-ZvcGc1T5oxWE9oe-YBrIvJsZU_qqB6rT_NXlZVmpz2UjJvij9FWVccDhS2lytY3ICapPDgO6JZ9nrE8UXvqWcFYA0f_4D2-W_SDdjA48luF7q9DRML6x5ua4bELyigpGazHXPzxjxm1CeUdbi__BEVcWsD30t1twWRxj0kRYb4TlMgNexFscIOSI34bAWuap5FLSEuzsp555ePAw72P6Uii0ZKvJsuQdhQYzly81NrNWWl3KagP9ApMNkBC_W3i7tZcvrw", width: 3009, height: 4012, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110796681418185226266\">Sanchun Wong</a>"] }
        ],
        summary: "Red Dog Lobby Lounge, Blue Sky Hotel & Tower 기준으로 확인한 울란바토르 추천 장소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["전망 라운지·칵테일", "평점 5", "울란바토르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "전망 라운지·칵테일", items: [{ name: "대표 메뉴", price: "₮60000~150000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오전 12:00; 화요일: 오전 8:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://hotelbluesky.mn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14244022914946003156", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%94%EB%A3%A8%EC%8A%A4%EC%B9%B4%EC%9D%B4+%EB%9D%BC%EC%9A%B4%EC%A7%80+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "실크로드 바 앤 그릴": {
        photos: ["/images/ulaanbaatar/info/restaurants/silk-road-bar-and-grill-ulaanbaatar.jpg"],
        placeId: "ChIJ7ceiOjiTll0RPiAqE_EbS_E",
        placePhotos: [
            { photoReference: "AWCwydif5D-mB8aOQQxXqN7thJASqhOWyxwHAWyazloBjLu_bJTtVBAFmqG4JMhclLeRuM-AYWlkUGcI9B6kBtwmpW_PM6mud3Tcge6lrnqyzKiqTNSTOC_AMsxFw-On5GcKtJBnK6nxvvUtT9FlIyk3d9LLA_QLtMXVqTivHS5OwPtmCC3TwHta02f1otAAnh2Fdf7ftTrishUlVrWc5GLZ7kAP9YNWaYpM94TJ7G8dXdZCEo-LUHfAmZ_kjE_kf35-_AY80baSsXV2ZZiVw4LQ8YL2hA4k-CX13twUrsQtFvnOpA4-a2wfUdhyt0xA_Mvdcrv7ZUIrO1cm7bKftXR3MVccsT7aJp8aYirdQ5RO84-evbfb86MoqPoVDY4IutYOWJCzJOZaUV18svFqLgDseTWN14sX3907dYXP_umVZtQpsdaB2XsbQXtKhGrv9wib", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111676566177365874802\">Silkroad restaurant</a>"] },
            { photoReference: "AWCwydgkEiEM5sR37lX0nrEc3JlKEiJGXv5HZbLKEh0Q_VKf5DYW_QiWtR_3oaXZsd2mgm_6ooqrH5_Ts6K_hbIN4aq0ltyeqVEqCHbzfGZGGXYu2rKIyW4yEnaIzl-iYTfYnn9l1ZqixUHlxrWjooYd9qWaUC9oUBK62DnFtsf_UbJ05AvqtB_iymMwszSfrzoFb1XWTZh8XPwOfieSpo5UWcKr3kPEuctD4TlEUuGQQsqPEon9jMWtlrrVJMN3oYd1MIGX5utQyjLiyLtZw2A4Msrywi-RpH89fQcroGK64r_BsJitIKJKc0VFY9qxrqQzNXM2qMH0ZUNrpK5H01qJqTPfEMjGs5rt4Qtnn19JQJoXn6JPSgjpVnP0Lp9YDcdMbes3tT1-ywhwCmNL2I28UiX2PdvTPl56Of-pFbTbPu-A8dQ5vIr1huFpJmmbjGN1", width: 1440, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111676566177365874802\">Silkroad restaurant</a>"] },
            { photoReference: "AWCwydgHz36wi_uOyx8OhZpmfLbvivPXKlL2Ic-gWBZe9ZdejRnR2oJos1mNe8y-IpXZ0wCUxIAjIL9BwZMJt87m9UVy3kdXQO86zQ8yLjS8x_-_JWIoBwajr2lJxD9jyalqVXoW-g2SLBiTiiLNxrO0WLVgAN5CqUB5OQMz-vLdvPTarobF8LNAcorq_irjZdp_1wsBKSb3Yn_Dv9vmYQqW4le1d0jy_yM3GgtAbooLdDXHh2PPm8n-N3s7eIDpIQ_Ytrvo7mnS2tzVlzQdl1zgd8Xt2k4qsmfM_eNI1eTxmKPGc_uM6fXCQozlBYo9TaEjWJ3Xm0eZSiZw9X9_coJ_m8aKfPg6BDeQ_0cBWfWqkOLG2NIsb0HKoKhITaVYbLhqWwXlUGtcr4dDHfIr_4lDmjNS7FUWzmOw66oVEgYen6KsnUMZS1g1VvdfpkuxSAiK", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110602553633426427546\">Battor Terbish</a>"] },
            { photoReference: "AWCwydjCwHdkkde_p-f3MT1mJrNjxnBYhp0t9xhtl0TIq2pcxIEliw9YM8cDcOT8beBrYHRcKcTZgieiBLCv3lBNbpGh8tmGen6Q6FITSwQlgREukU8dZzRZqcGYZgIjF8R0QS4nbJTV9NIdjkQQybU2ORLPmCKpL98KkE-4c1BgWfR5U_kaN3yg48cX-6sGfGOHFr3FntPx7vhOhce0SSSsCkYlhEEkT7QfO1SyfpyH4sOXx4n9qXr3u3OLlS4GPfFS_Zb_pj0X9ozYrbQK2Af0BMEqkj_uUeB3pixlta6biZlixJDWu-bJZoWa78txUhSxT4VYPMv3CXFs8K_DTvjzfDdU8VSGK1XU2iMEKy8FvJlzTVyJPMz43El6US2-tFThCsKBYgsgGn2Iuk4hs_w0tVXKqkxWiX8QEQtBkZHvu6haz8c4WKIVhjlLxFlId9Ea", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110602553633426427546\">Battor Terbish</a>"] },
            { photoReference: "AWCwydh6rGzpsZTcAN6zQWbWNC-dM-DRVkjh_A37cxKluh2FGCABBr67TfCmJHedm0pLrwNteW0hPk6VNMDzecKHKMn_c_K152GFQBbrf15bEK__USGbPHQTATBpG6ZQdFg4Dw0Dfpj-TNv4BrMumyIDifUsMjOdZMbZ3EWSSzNU2SBxVpN5ozoekO78MywRsAGT002_LBheL9Hks5feFNYIZ8FTg8WGvmx3pGYutvbhXWQI2VqMYd29cjkAc7G9fwCQRCY_xYRu4K9QWKXXHqLYkLTNzc3apbU5Pze_LJSzvYF6NIxzVkn9W1ewRf0PJzv4XXy0EE9SgwVQOdQ4zSe-nKAVIWKAAq69174Px36KmrIaYWZrJ0626Rvblpf-EoEYLbrZ5E675yIALtnipz3zdWKQmZ8sbEKpBgLYJevevg-4ory08CQimf-c-FPJJw", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104206064012465179058\">Linda McLoon</a>"] }
        ],
        summary: "육즙 가득한 그릴 요리와 시원한 맥주를 즐기기 좋은 곳",
        updatedAt: "2026-07-14",
        highlights: ["그릴 전문 메뉴", "다양한 맥주 라인업"],
        tips: ["저녁 식사와 함께 가볍게 맥주 한잔하기 좋아요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "그릴 요리·맥주", items: [{ name: "대표 메뉴", price: "₮40000~100000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 12:00~11:30; 화요일: 오후 12:00~11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17387021508616527934", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A4%ED%81%AC%EB%A1%9C%EB%93%9C+%EB%B0%94+%EC%95%A4+%EA%B7%B8%EB%A6%B4+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "터닝 포인트 카페": {
        photos: ["/images/ulaanbaatar/info/restaurants/turning-point-cafe-ulaanbaatar.jpg"],
        placeId: "ChIJpYStQFCSll0RdMceih2nHcA",
        placePhotos: [
            { photoReference: "AWCwydiWshcCIZqr-8DU6BGCFdKoJlnmUvW-VZgiEi-shWgERTYfUYKIinCIYAo8DamvWdalq1mHavf8WyfbPQRek00aM0W_pVlnqTMcYAd62EfCgcvcGlNbASw0hM2y3Qp8IfL_4cWqB--72XzFq2vKG4gefS_LW7XxN5Qj67Woqb-ltGNJm47SxZW7fxdk_5IxW1hkqGEJ2gzRjQTUgEVsvh852WwsniAIq7RK0gDJhuq1ILc9V4M4HvDXRPPOjmGBzGqdOoacETRdx3WUs5894T-drywkj5j7tRNfsMXtZTCZjwk9wLyxge0fsHK223372wQpUHLWIpZj2P5l3VS4l4T-wP4qRh2Cy9iSksJbFIQxkDskNsStuBnMVv9440quzFQOTsNpxppZQfRIehbm81vh-BQbOXOlSRTDppoUuCdzlN0X", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116228963091000082929\">T HUB</a>"] },
            { photoReference: "AWCwydiHAds8m-9eHZeE22Ci2eSjtsjegE0gpYjbLkmPl7HoUw50JCjMniXAcAkFAN7e_c3_Q8UQri2XJXAZRKntRJarrDkDwhHg2D00x5KIUw1faFY_D6F-B5kcxJw8F2tT4rpLb-Mf8xRZr-n3VjR2oYjjTurgwXUABgW7esvqp77Isn4PEWasooFYwBwPsGRm-DoRsexOZepFMJXO3M94htky7W3UNv30s_dZ-EZeU11IShc7o7j2YawCD2oQGiwd8tuiCKVx-Ip861FuChsqQ0a0GfsZN5idxJHFUGMUU144KlgGgSY-9OtkIEHYWLSS3rRmzeOgomYoci6g04XUa4JHj40B2rdbYyvVby-6L7c82_JlHiR2PgOp1kSHe6aXFFd3MXpFZ3Z9Tl_ODufjlFB3a1HcwlBIFLGAnLy3aEu232E", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110671242526590936029\">Ulzii-Erdene Bat-Erdene</a>"] },
            { photoReference: "AWCwydjAMpwuVC0UN7yA1DhPcU0dbzSpPyOdykYalzxO0uLKqdCQswxG2HzVXsYlYI7GYmXV_PYqLj9fOldzhFA7dmzz-ifZ6WCBg8Rvh6VLNBzo6vnaHCL5J0ycF-0qxxOdPDOzqEmVk2fdq8RiX28QCbax1o-TZ7CdeuXx-k3aVM7OQMyLjP4b9mxd8LDAmWMmpgQtGj3x80LSloWhHaOBpEUuiWcvy7WTwmaTl1kiFFcdIf5Wzxvs4gxtb6q5LhHk90sxxeTm_VwI75pM0AbC10f_4REnWxKo5QPXIK2Dk9hG31aBkFPSTZVJpHKMPmtxeDdbkfoRX4H4lJUB5QHfZIoUrVo15zf_Uozmi5cD0t3tERWf9DbgOc9Ljr4Ip_-gy_c_ojdLI8rjXkr-rM01zjus0HbriK8fdZso_XUN-rl8i7Pa", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116810844041341075547\">Tokio</a>"] },
            { photoReference: "AWCwydjUjiMWr7XArwJiUCr8LbOy3mckyPcZFf9zB-4z8R0Y-0RQ1P-Xt1U6IWXGnbBBNsqzO54PXDU_91q7k4kiq4vM-Ofh7dCjMNsi9MaDTtkpb66BAm8qT8ZwmX2rs7anxat4Vd8SxcZLJokzxHFwvn3y5b_-bUtuN19rrO2d4Hnn-CCvkYzn7X4hurVUXfB382GFPPdYFYRX3RoHRSR1jtS-cBRxMNfaxsegESrpvxTN2_RqmJvutrjKAkjGUBxkayHtA9LmSM6j2T0geg3YsEdmMCVR9x6q1go-Hrkv8jXuFINlyS2kuIYtjOB7XP85LI2Sx1tLaIkoXAcZctG8rdFj_6ONp4EPdOtci94C-_0SAWb8TzB6T5M6ROgot6u6AQCTsSvSSW-xc3XLbHFmlNFGhglfI7wJHbmMBgcK6Qy4IXCsQAuABZoPa9Dikw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108796636274953584103\">The Tuior</a>"] },
            { photoReference: "AWCwydg9fATBLleGl3-SenEVjcWt_CvcLpvUkbbFuswJBZH_FbyUCAWsS9iWFYyO_gTrAWY6y9bfUK2QIxZuJwUab-90N6jh5RppFkduWPspeJnPwQhsuKadkdhWCdtllI4t0OSZBXX_7ONAVRnnAH7hZAaMocP_5aDi8jejWXSmcGPQka66vqQpvswGRhbp_FA2uwJLpqkbkkPezAWqzMzpvxDP0_emWkolVzYsnO3q_kmafJe8euwJykDUcI-1PRKIqcIg3ZwmucwUztMM6SpbKc8c0hIF_EAgGw0FXalnywOWf_AdNk7mLXi-W0jS0Up1NISYatG_CJ8JR6VJ-ZK554mJByemifodnAxBKjqwr7Buq13PolisJUvgdFzmKNEfNKD3Kio6r0YD3inT6ERSFaf93qh7Lk8C-Xm4z_B5MqLVXoH5", width: 2160, height: 3840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106924722435088718722\">Onon Ganbold</a>"] }
        ],
        summary: "재즈 선율과 함께 여유로운 브런치를 즐길 수 있는 감성 카페",
        updatedAt: "2026-07-14",
        highlights: ["분위기 좋은 재즈 카페", "맛있는 디저트와 브런치"],
        tips: ["여유로운 오후, 커피 한 잔의 휴식이 필요할 때 추천해요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "커피·브런치·디저트", items: [{ name: "대표 메뉴", price: "₮25000~70000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 4:00 ~ 오전 12:00; 화요일: 오후 4:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13843404574919935860", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%84%B0%EB%8B%9D+%ED%8F%AC%EC%9D%B8%ED%8A%B8+%EC%B9%B4%ED%8E%98+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "블랙 버거 팩토리": {
        photos: ["/images/ulaanbaatar/info/restaurants/black-burger-factory-ulaanbaatar.jpg"],
        placeId: "ChIJ-__PR0GSll0R_G-cZ2isQys",
        placePhotos: [
            { photoReference: "AWCwydjMmYK7Obx-xBBXCp2fX6LaON0m-YUy9JNIkDk7RHcXwvfWdrqpGOufvduKLPOXKEye2fwIPmii5rZmoGo5FeBJToljLCjBEYZdqss9QmULL8Il0unH8tF0_CL3HwxU5BN_wfFXq_osjlm9bin8sZv9bldO3uXbK2fe3vAXfm0wN2dDLitamXkALwqzfC2D7QvKTjQcojFP5W4N6zr3dgtSg1A2kicGjxKEb-ulpb4jMgUOQtCGf4z6VdWgojm3GOJc6euwBtBwLD3ihUkmnicA9KFp09VGx0Tk47v81kM82XCh_PmcNvvX5bhLn1Y1mBgftYDmAhaH471SmSIh3Su83DpyNwi7Jbdr5hBniWfZgmbQkzUv9c2DvcDsaGj4eMjoe-wnBrecXr6HblFEAJAGhbjMqIMvrg7e-SWImgMPNQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113255216915967485566\">Black Burger Factory</a>"] },
            { photoReference: "AWCwydhhFOY9s4DoDlbsD-a8fg542gzutwkrfIQ6QssnEFU7wXmLkvxEph1qAfme42I_SxMTWDXAezIZqVoIMDQwYxmZX0Tx1ua7O357j3kZdAYnh3Oi20ejnibAjNxh0D6Efm6c19_Apwu0vU9Tg1gcq5ayJXNrOyitbVeemdD6HExhPeU7aISRKFeUvND64ZInH7PqolB0fzPbArjUiwUtYnuxw-9L0R2jKJG035RY4B16u00Cb6gwFw-MzmC1jFfKbJM_p7kb4bPjpL6_lmbtRjK7TANN5JMyA0mC1m53fvnDUtM-NFMSLt0immOYByoczpHelkRrgrKuJ9NFdr5eFIOf_gmcqs7LjN9g27Lsl38Xlv6HVCRHLGhlpD1EuGmP4S90scMoFocLgpUAAL-s8383YR11MYCZPtrW9gfKSCwIgUzGVdIW5D-VqPANeKew", width: 1073, height: 1158, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113255216915967485566\">Black Burger Factory</a>"] },
            { photoReference: "AWCwydjdW-zZaSy2cDiPW3ecXgYUODYC5Bdfe9rzP4LHobcAH_FuA-mq6nVJqgS6cg7MnSURYTrQGu8pLKVRlhznT-keyyR_B9STNINt9Z6o34Uxs78pFMhhdaUzAFUw_OHfcfNXBR1FABLKt5GKZ5p1vrjhM70TNbyWnFtftAuZDX8aC9q5UhIcfrzzjAuZkfVWzOFo67NJmPH9PwO3KI2rFtyOm36aFoEsfDihY7eK-NtmXezPDn6ej8yNpYZR70i-LKL1P-u51qyFS1jM-RYBBVBjlxjciBmfQBQ0dOC-VaWXd6Drve5V3eL6Rpjl_GJCFx61f8vWVsPD7uy21mDFKO9YBGXKh7YhuYDtYUYkhUc3sjZs3is4ycSqlt80fJpSNCK8p8eNzOFqeoFSI7coMGSdIwPdbR0kaI2yKV9xXFpfUg", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113255216915967485566\">Black Burger Factory</a>"] },
            { photoReference: "AWCwydi0QJOTPKnNMXkZ60iojeiGR7zfqCZe-Ubvdo3eIch3vlpKRuUpyJb31c5PV2OvRjhNuqkDVTfgr5YFihxZgiqAQ-6QUqKivd-fHmhSRZxtE9TY3b_lu1ltb8_xJ8cvv2_tllxZHcWi7sLmy3tCS8w8WoRwe2SMq4oCCkqE7F--LtoC05M9JHiH92bCG8eskvbFKvpERelPfWOnoHi8ER6MvvrmyNQzKKvUbvwa7JfoLFr7ANm3h0QYiYn0uxCThk6BlXU1d51Tm8A3y20BomrMDOxoQ2Ft1fUHf1mRb87Hrb0azaI1x1egK7lIerR7Mb33nt0BbsYoiXGqJZngOTx-1JwUgwfoCResOFfdxcDGMGnBrsHo8LlJbO8f_Ic9uoyiSVOBErt6fhxbnqRIBUCttvAUdYXxGFLfn2i6zgtISs4cvoxg4NQucC0nyg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104924048588145092090\">ᄋᄋ</a>"] },
            { photoReference: "AWCwydiJ7AlCR_zWDooIQuBRDljer0pEs2zkP9ATJORfxNMfInnuh1ff470ti2cJtGmKUyx4xk0lmRbFiX9QGcvGqCUjorezhADEuilshyBZKUS4UO8CI_JlA3JNpw_qeP8QiiSxB1YGdHAL9FmAAga4CTyyVWPNjXS7alTcw6b7_qbTskKizW3STqqoj1XgRFylTPZItDnfF_zj1MKgsXzKYw1xvT80-XgmvKXmtupTSX-xKz3C0Oi6kfIrLBt4Ayi_qqA2edBb-tFZjBoLQAWjqnCA2oHxL2PhbeXfYrd0ywERSWQhgPD-1WkS1nRnvoV54Ooo0z_RU4d8aKQ5jw9kvqyjvHaQAhWKjiqOaZIYeCaLCH8OYrhuUtNRvd8aHqPdaNlYjqFlP6qZxxnvSmjbbTw0UUz_pNOtFDUdqqBHPxYwaVcE1CxsmdMT21yE194S", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114571576779083308340\">sky hahm</a>"] }
        ],
        summary: "두툼한 패티가 매력적인 수제버거 전문점",
        updatedAt: "2026-07-14",
        highlights: ["육즙 넘치는 수제버거", "바삭한 감자튀김"],
        tips: ["든든한 한 끼 식사로 딱이에요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "수제버거·감자튀김", items: [{ name: "대표 메뉴", price: "₮30000~80000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오전 12:00; 화요일: 오전 7:00 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://modernnomads.mn/index.php?r=25&lang=mn", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3117524931485396988", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B8%94%EB%9E%99+%EB%B2%84%EA%B1%B0+%ED%8C%A9%ED%86%A0%EB%A6%AC+%EC%9A%B8%EB%9E%80%EB%B0%94%ED%86%A0%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
