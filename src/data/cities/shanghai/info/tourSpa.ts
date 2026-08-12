import type { TourSpaInfo } from '@/data/card-info-types';


const info: Record<string, TourSpaInfo> = {
    "와이탄": {
        photos: ["/images/shanghai/info/tourSpa/the-bund-shanghai.jpg"],
        placeId: "ChIJYUiHi1dwsjURZK_REO37Vk0",
        placePhotos: [
            { photoReference: "AWCwydjfm6lmX4yu1rVRfGrTwndWefhOXDVHqsTNiWGrBfl2bfpzZ1oXXfe72X6EgNtTpVg1D0nUfaxwBOSG9R6qcnV3YB5TuBYm2FrMwxK8iTucf6C19pvFW_QyOWrv7s-QqSnVhFy-ejOK8lUfnifsc8sbTAIw1ZK2v1NVDFCJOr9u5DIaNyt5Md6ncECHkcJJF4O--attuHvKpLHb866fttq1c934aXJdo4S4Uwk3YdAuX_7CAI7oF882p8LGnCCgi9GhoT1pan9MoF-GdLk5JzCeOtX6Ugx8vEi0vKD7n3nGq2EP00J6ZpjthfovoiKT_K0OqlLaVtVMg2fvJ4b_QMQ92sYkT7OlGTpHGg0u-RyjKY1B3UBZifeWUguGx8298_tLOeMZCBfN_F6le8iFWIAsp56uiutlsPcRVa2qNWPTOhqG", width: 1586, height: 1391, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115560752973429119274\">Wilmer Arciniegas</a>"] },
            { photoReference: "AWCwydis53YM7T0bgeoyS6Yz3-1oEig4JpYtx943DBViviWJ_ZtwLHeS-p2RbLs3DZ9LbKjcqIsxusR7q3AMk2NSU0P8HRxEnwWep_jkg3Otn5uWoR_sLqZuU4bT3KUkOynk3iFnKp8piEenIMrrzKcLuKEIPq1SvxdrP2iCzoJZtCoOjORNZNAVgXdllM2--rDHhWCBbBuZ3ClZ-QbPPHiCEMYRPvWc7pxdVAm112mBd38Vdp3PzSCXM-Pld3wswbI9CipfzflhCzLlVjNNJc-R-n4en8F26MYKFg4iR_d0mgoMIfkb2b6GkmwyFLHW8HLNHGk7e_StPb41SREme28aekEyBdvs-CAO04R35-40diw7dRY2E7eFnXJ0rwmd73AiafLrCqbRPHBhWx3j-7Yz4fknoVliqch5R6y4629Xj7P8Pw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102075334040714854760\">Станислав</a>"] },
            { photoReference: "AWCwydj5cyDSWYXzgT1KE48RHSEpuZKtJwQssubiMIGcapvfB28fIwNEueMtZ4O8YDzQCzj6x0t5kUYklgjFxjEYkGD6s0ueZ9dlMusEl5Uv_U_25KRpBBRGVqAEnW-csy0cjY82acB2sT-COowq92UO6b64hxawWfbJljwVw45QdrbPsNGv9PKni2aak_Xv2-6fHelTKjdsffivmGOwKX0EkWx4vzP5pUH0kVdyVdO9XEABYSyNloI7hX7466e1sReJPTzWaPhXvbPfSEE8TV9KFMCkgHY0Lgnn___wKfrj4WzvfX6xz-eFxA9Vw4A8wZ10j3YJnMBngwbCpqRb8QTGoHvVEjuN9xlYeyL94r5tQDYv_8-bqkZR3Hi9DeKSYzDEewwSJak7P1Y2OoswHQoyDHWjNIp3uxpOR6WsCn1kYcdiGA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103182965078119539721\">Niraj Dutta</a>"] },
            { photoReference: "AWCwydjktFwSTn8sqR7BPKUAhHl856To1hDxqO0gcaYTCWIlpgSCO4nBIQizhhqhgmBPCY1MMEU-HZ89Q6-oPnBrSaPTe-Fcr1QClZsske7r8YT9_J6Wef2WWvVKRMSqxDhGSeo-JVARLxq1M4ZkZd2kPzv8T7xaIV3EpTtykXGjg8Yd0n_b43KOxRxXn_Ll2dSfDln1Q0NZnrdis4JtgX4hwkfeorQ_lJOtUBGckTSJ3uBTH3T6ynZClMxnC86dOnCllBfYF0WMsjzlItD39AKFe7t-khIXwXL8ct39cQyyxZbjYM_sGWHhuy8g1qrtLPe_4kKmWP_f3cmCjRAHHJvvJI9GAIdUDdfAchF2ZPUhJNSjNT7mpmg-upKS0Yi6fnluAUDAE3DYKGG1LsAnG414ZbnndavRLfbGFpG9ByJkZPS_Qw", width: 3456, height: 4608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105229652655801258834\">Raymond Lok</a>"] },
            { photoReference: "AWCwydiAyR2fnRFmk5gK14Zd2ipJg21zYdlLs7ym1WT8k6HLf95qIqiuOSWliBlGOLtU4Dya0SkpJCIFb_icVn3eZnoDDPcOuInwNnDsCaB2dTlNM7UQIKRnjB9aN2QjvqhsuzrYkFJVyI72PZuE9Z4FCtsH8W5yVVqCoqBoRVFCVRBvefAwI1fcrSRSlfR6DGgbU9dzI2jRI24sfHKIAiPXUTj0hD5X0ybSw5a2ysK3RXZGq8JN0jZNy6ilXMKWuU_T8oaBcEeVlV5FDWb7U6A6uQul0K-acAPQsBUJej-KNC148UmEn0L0UL-o8K1Ol8aAj5NoTnO6ASSeHSS023COdDFFomTOIb5UdyojZofMFjNlTir_bUC6IBzeQcGAH0zZlqyH1E5ojiYdQGR7rrEwe8VFdCjoICm1Oho3JQl-u396v7YbiwDFdmv7gZsvm20g", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111988721022457645921\">Tigran Baghdasaryan</a>"] }
        ],
        summary: "상하이 야경과 역사적 건축을 한 번에 볼 수 있는 대표 산책 코스입니다.",
        updatedAt: "2026-07-14",
        highlights: ["상하이 야경과 역사적 건축을 한 번에 볼 수 있는 대표 산책 코스입니다.", "평점 4.8", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "무료",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "중국 Shang Hai Shi, Pu Dong Xin Qu, Lujiazui, 陆家嘴西路2967号 邮政编码: 200120", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12335756602182933694", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%80%EC%9D%B4%ED%83%84+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "예원": {
        photos: ["/images/shanghai/info/tourSpa/yu-garden-shanghai.jpg"],
        placeId: "ChIJidPZMUGHrTUR29eIuHbpoIQ",
        placePhotos: [
            { photoReference: "AWCwydguqTWriFucwWIvQp3chAPv13DsPMRCdd1d-4PMoClFEEEY0MrUaep_6ASjD0nI80KYeLkd5YZky8rENHZxLytKGUtim98ZxyBFHv7MLjxThLPj_OCdaxlK07zLGGsQZvD06XFmBCcTPbc25cO1HiDoN_bUghRQALQOBlYfgpNW_WuR4BKUm-wHFz2nHPK8kDn7jOiaqTLehXeMVTCl8raQ6z-DB5FR8qL98zLEsjIlQp_xmwv03vQMHhwBfRsXhTmkQoaYxVLMoV6Ci8vN-lwur4UXC3hYEhxHvZVz0IEd1y2O5t3MDEx891FFViNMEe6LQRF8IayvP_a6sv_E_7YIUMn2jTOIl7d7_z1l5ctonAdIMkB64OtgA1MbvSLPLTuBiwpTy1z-fzavEngeYfcC7zKqO52J4bvyLblj6c_3BUU", width: 2736, height: 3648, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103423865344883218531\">FungSwee Wong</a>"] },
            { photoReference: "AWCwydjI-LMjKeKFIUffuJG3MC0TUCk8wHyN6T8GY_QJh0hARx2pcJzIl9v2aOq5-mML3FkDDrmgt_RMtIS9ArsjKPeVAOTRc61PWbc5hDivML5Mwrgp3sINqc0sdT3z5SFJ5VdfOlzwzj4hFTwJ5kS_UQqlvnfxbUR5IYNabJxI8UTktr6hWzzrI4VeZN1KAQKQly_Ogvj5QM2Oj-SsHoDmDqzndhMR5Lba3hKp79aDQbmgiw1hIvDWlfFBCuZERV7J2hircubxtmmtQiG9ApLvpLISQzsiae6YfVmz0GJn9XBNAB53DnNya8gbLUgVXxQPAfsysplM1-eDPyJeWX6ztdnX11knojqwSgwN1LEm5DBBJDgPogD-Uyyem7mkWV7xxJ5ILOwwDU0g4XMiPxUKp1h6ou5QTCnIFnR1MX2Xs0tVDYwlWHUllXpF2L3W50V3", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110850940204018475334\">Charlotte Lin</a>"] },
            { photoReference: "AWCwydjaloPGXNyWrvBWBQfjIuEN8TtxwN8BheOOm-p5x6FuUougdwmMN_XPjzUVP-kAjXUly_K65z7vXfkvJN4kwvKGP_VXqdyY2XTpynyZqqf0-0LWmty0emb21RTgRqdNY3ydWO67yRW48ZxjyRIPGgQ5EIx8_HhIQJ4huXKvWDc6gY0zisC7zo83KqDTUZAInw0A4MuwtrC7JTK2aXzY1A0BjCHeD5MnQbs5vnk3bsb1HhBAU3lGKSGEyvyl3nPTCo_9ubjr0yC0FMsTo-TIe5fqtys8GOJEf1dXuRgyR7mmigv1ive-DR2tk7hEZdukbcgL-nFPui1mfW8E8WUeG-ZLli0XvoL9hef19Da0Tvr2Z7D_ZCz0POSBM-rM6eXXwk-c0jkHyHlvS5NTiyqv0mN7KGY5qmglDuA4jvhPNHa_9Z9H", width: 2250, height: 1500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114014430533432266990\">Savoir Aimer (Admin)</a>"] },
            { photoReference: "AWCwydifdNqTc6lo_0WiIH-y_dOV8UIoNc9pjxtkQ04V54VwP5c21MtNMm8VQYj8CJUrb6mPMIB0m79xLEW-SMa_f1iTrA-efcwvvr7blw7EXTsgeF2-FFPNa5iqfFSu5alRSb7ZcK0sdCDNRc2dOM3srxiTGKNcbScdT6VVaHwMszA3o_jadHHgkVPGQlq1Dda9aKxcJWb7j3yH8z0XgO2H54liIX-aLvxLn56Ctzk60z80cbObPeyEz1ujlJQn3CNlO9fRsQ8fX4FPgbXzytP76V5EGviec5n_WjbdUqeElQs9j_aH7B6pPEcm0_kjQTDuf9ASDDToy08Mb9r1v2mAmzxZDCRalN1ijJwhwg-kRZSgQrfClAAcWZF524IcKDNqoRHvJJrcEBl59HIi9SuW7g8v7pjT0x-slFo5HTRBM8B4Oc9vc1D4s-aTqvhX-csD", width: 4192, height: 3144, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110164822733041549731\">Joel Pagett</a>"] },
            { photoReference: "AWCwydhg9MKh3gZy1yMHj0Fr01nwb9bc2RkF8XWkREWXXvEtg1o5frGgugnzD4LXMeU1he0Ed2KrvHcj0It6zU05ncLnf7KI2p7oBJXvsff4UipREXFVyDqdbpk5nXdGGaDUZDcPTs463Jklk6g6_KWmbqo4QtgaAWz_BgCNI4vIzdf3kGeS_wMMZ1iwiwEWCzH8WdenFq5TDe7p-wJJda6FcvXwj4blnRqfbJ9QGx2YieE4hzf5rdZKFKm3MeHd0YLi8x8GKyb2u-WH75hUugpsT0dbiebrKvlkA5MmyC3rtCZKUDlMo-LS0fg84ESggRsdBBKAWPtDo9f3thsj-CDf0_CHkoHbjFuvFdUwQtZWu5KIXX-el2BGRx8DNAGUQ00Ii-pFV7EpuEzgR_0GLobSAt6YBusClNis_4rVwzieCqScGC9I", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115906123535101583799\">嘻嘻</a>"] }
        ],
        summary: "전통 정원과 상점가를 함께 둘러보기 좋은 상하이 대표 명소입니다.",
        updatedAt: "2026-07-14",
        highlights: ["전통 정원과 상점가를 함께 둘러보기 좋은 상하이 대표 명소입니다.", "평점 4.5", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 휴무일; 화요일: 오전 9:00 ~ 오후 4:30",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: false, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "중국 상하이 시 황푸 구 四牌楼 邮政编码: 200000", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9556895105391581147", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%88%EC%9B%90+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "상하이 타워 전망대": {
        photos: ["/images/shanghai/info/tourSpa/shanghai-tower-observation-deck.jpg"],
        placeId: "ChIJcT52JmpwsjURKKp8uyIQKjU",
        placePhotos: [
            { photoReference: "AWCwydi-3eQdsECK5wrZVfxXjWzNS1axK44CYbcqjKoMoZhp9Cu8PIjhcfmpxl5qE7RT-n3Qps5k1VfVJC0TxNC4W0weLr9QcCE1TRlQhcPT39cHCv2dq2rIKmKqBsxlxy9Ycg0ik67NLUdr1t0lnbM7pCLp8SBKs0ImP8tygh55mcTzdkyGk9IEHQ0JIzDuDAxbQN8MSBrVg79k_6KB444GRUiGjFHx-dpLEtMP37afudroIZAq86v1AHJ-BxIijfEeAhHn350JDBUhZp6IPhpt8BOUkyFfqOooeXNC-DBCsnnJwqmRsNDmyukkKk9gWEa367uLeuVS8OhMwruzNjU9rWtMhM1NxPoFgeySZgxzZ5S9bJTyOwGEtsdgHVpX6yR1WGtWk7e-OU2u5M_UcPKenOzEmDCCEH8kbAymCeBEfun3YUOz", width: 736, height: 1103, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101431495761220231120\">aj</a>"] },
            { photoReference: "AWCwydjOU5UXAKUaGf0EuIfNSZ3qI26Ney4Nm4IRRRHao885HXEF_chqeyqOjB7CMtH7oZTmgHLZBssDisDAuIPVpAAF0t8LQCcZMapYdCeF149DnO32S_OjN-BPX24WIvkzDvWKnxO-20C9p4O6eyieTIJpz1ICqVbxI3d2y_PD1EjIbiSqepKzYVVjpixZPpXP7JuFHu-Rzu9itbeShaI0Rzl_juOP7Bf_2D9dijLhT70KY28BwRqcfRYij-uNSEBzpSAzyNocX7rm_Uw8ztcqY6Rr43-PXwclf9SpZsrhOjQ-Vyc1JPPS8bsFEA1eHEJRLbyQJmRG4k7zjr1cxP9ESWLiDBMCSv_BBC-Dt0fm3aZkn5i9luPohWDmY9lLA64ZyhusuaZREw90qb5Jzrz0VTzOknLSGa_e6xy8h497cjS_cpJk", width: 1628, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101868680202364429222\">wen chen</a>"] },
            { photoReference: "AWCwydhMAEElIjGfJ1l9lH5_oua30pOIPq6LQBVRKUy1_ukLmbELLPU68Z-FwnxKsxhgjsqKIsegrU2o_Uc95hzDnVRfOpCp8C204W0UPHhNsOJkPrHptXtDPkAx7gx4K0yy1rJzcao3pN8KEBm81PGD2reeBQGAWk2NrLPsQgx9e4Oh8aOvbr2LBnTKmJ8jC5yiZeykwJR1TfMuVNjF_ldCq1YAnqFYOYsmJBd4fZM3C2d9ieDPpEONUxbcYMEVJDobSacHbKbJh28dqK5dRtzvxYguKLUq8vrij85EhNcQbyUHhX7ABCoeH98_hvMmKoCtLXKBczgIfk8gn23fYjml0xt87GGrJYwjfncBErUXTs3gGjwbaQ7eNcTT-G2eCJpbxoDVoZ_caUozKdLyIkyw2hMiD07Ni1n6zSAfgy1fq1H7Xakx", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101517748726070881164\">小莊</a>"] },
            { photoReference: "AWCwydiwtIRr9WrrrtL-kQd6sMZ1ns_tn38GoiddOsnpH6RKgnsLMHwwxv-gbC5Zffgp1KrrAG4FSc3qtlKceUq3t3s2iHlnAtQkPjeacMmgj1Z3qeb-fNZkM-sWDSK7UbIRiC-GhoNti233nAF639s2clCzfUMHj-d_deI19DBQ7SU1OgkNAU7d5Yv8bSUec4OkUXTAmUJl_98t17_kS3XaRPv0vyA8DxRna3iGR2DYKRksxD-yXkEa1JGqZmyk0S45s15U8JzyRGgawXIMZj5YHhi2uZ9AVFuzzHZHK_yrKzncbVHC6XPMmW_Wbi17f0JwIli6vAPskpqRChw-57LaRtUoAzrYY9_UWGejoSglq49X4enPJmMDGv78GoSD8CFIi7CJ0Q4Utdx4k-TJX7Cj87HDRlFzwsam4ffBCdu0S8KoNmM", width: 2160, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111356922079883528414\">Ilko Radulov</a>"] },
            { photoReference: "AWCwydguv2SN14Aj_HtY9LZmfL-iVCIzN_PcLH5OFFdWZ_jewzZ0YUN49eBnPbM57drPflcJvg2_wc_Z6GY2C4R7xPkbaRm_F6EuG8N0GxNPXU0Oxem-xxNBhWzg-9W6c-M9jHT_bOfD4ZlmeYVc3ToBCcNXmGbiA6wcqVSeYxVOiU75tPOjxL-jla1iNf3XCeh4QnnvHqsktuHwxp7G9fRa3l7BlvA54u9rxPZyaSKCctyKzAuS7XX9yZGN40iK5gv8ih1gR7ic_jxhm7gjx8FXv7aYStzY-BYv8aJ1xacvk9ddULlpgayAkUl7nJGnNs8Dafqt2Eqs2dPMco2SBOLZQxytR3eV53IDocEqti4eqQcyCqYOHiQJ3FwGpLZ8CMlX0_B8oIIoJdP0NMBNsKNFGR9g8kel9zwl2j9Itg3l23wSojyS2qmadd0cUStJ-w", width: 640, height: 962, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118386519538714375586\">Yasin Ridoy</a>"] }
        ],
        summary: "루자쭈이 고층 빌딩 숲과 도시 전경을 조망하는 전망대입니다.",
        updatedAt: "2026-07-14",
        highlights: ["루자쭈이 고층 빌딩 숲과 도시 전경을 조망하는 전망대입니다.", "평점 4.6", "상하이 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        hours: "월요일: 오전 8:30 ~ 오후 9:30; 화요일: 오전 8:30 ~ 오후 9:30",
        duration: "1~2시간",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "501 Yin Cheng Zhong Lu, Lujiazui, Pu Dong Xin Qu, Shang Hai Shi, 중국 200120", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3830892174392470056", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%81%ED%95%98%EC%9D%B4+%ED%83%80%EC%9B%8C+%EC%A0%84%EB%A7%9D%EB%8C%80+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "상하이 디즈니랜드": {
        photos: ["/images/shanghai/info/tourSpa/shanghai-disneyland.jpg"],
        placeId: "ChIJeTeSUGiHrTURrNSkfYkOFGo",
        placePhotos: [
            { photoReference: "AWCwydif0xoaOWRnVb8p6tqmq9H-OkbPvakY0Nrf5_mtlwCM-2JRf_r8OFJ0NfAqLz8eZz0jYUmgJoLUWSkgpTUhPyrl1TRZ4tfxKNgq9-Cva7oPM86ZiKr4hro-NURaxwnGFiKJTInM1WFDufNMMnytCn5QVssjFH-gojW7PidGwr6FfmxVarG_fFI5urtBAz7agYpNoR3j5KT9ms0NsIF5TmHmVR8DBDde5dhE7KqU9-kGLkYhBhfUj8lX5evAX6CpTrLECxoyaKKH33OMfhQEqXVo2Y2ADm4ry0jd94d_nMIEZXgTnc0d58093n_nbSFx_DIMdFIRKx8sAMSmWKJ3i8YCn2uLnUovuDD65w8TQ2mNv-PrX2ULO7RWBp9OwkuEMD7-9rHZITx8t-Szon-tyGgBFcxDCp17m_LUxbOAPbnM7g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102552734962804301031\">star2kiki</a>"] },
            { photoReference: "AWCwydiB4A5QaoZKyNotj9nMpGRDTMHaS26Fapyq3Vx2UYeNaiVbCgK5w6DtMr6mml3I1pDT67CFV0MSWdbIW-ynIXZr9hldSoerdrRzn1nTVicj4CZYTt0wl3Vboacyr12dDK6mAd_jReLvgfOZr-Q_oHz9dJnRHTskqbtBiXAF8fn21KxAuCOwNufvaQHbS3ZevxA9jBWDAPHuo_aeRSqbjcs6z2Vh52k72VAahJFDSHpuc9NkZkDO-qnjEXnNTosRgZaC4n4Ai421eOZx97zzmZdIT-bhSPcYPuRhOACH2gqH2HiM7nXvwMZzIoKOwlnF9h-cNXLPEGtE6B4eAcEp5cUN3BLHwiHHp45A2PfSRXbv-7ST7X_p4pDZyDA9hQPeFZGHjkklyO8xpgZW82e9Ge9Wh6I6G0xT5UisvpDlJRNaBA", width: 4032, height: 2836, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116972011040804907975\">Roy Neoh</a>"] },
            { photoReference: "AWCwydjjI6FBSzW9SV98Cy-bqBOuBZqE_iscHF4meaLOZ16EeJ84KAdk-CoZ-32PtyCD-4MLPSwF7Fr4la14r9HZL9pvCgHbTKphSntDzPNHaVB4aPHM9Q1WxvyTWSNKCY_bY4QWuIQnojEqBFtgjOPACusp5eA3l6nhCLB4BIGZBB6DgS7JVpZpeBjx1Qu4cxHkiXZ5HmUnbMPDYFk4Fs4Ca1JZAGdOZcGLJDdmlF6uwb65EI3ngmXO-3iJam68w5w6c7MFj61Z6_Aj3yCpqTY0Srmr-0pH8JMtx8oaqUUcBcEqSk0vS2uS6zjxCa3GOnOLVZpvPsdaQ-obCGti0Ux24V-0mkWifSTbx43T8Gsn_sEZYr89xdRvJNW_lUWqDaxxX_PLH52fTTfAfPndtkl8Woa5WpbWZFNc3svGQr-aN7wxBQY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108461324035928545703\">LEE</a>"] },
            { photoReference: "AWCwydgzDUHSzAhHwxGksoxAQysdF_iXpH4esyzEv8pP-Du_Rw43BJO9aW8MKMTAxs1oxT1SshZBt-FVPNVQiFMmtcwFiHg_1ddKGYA190tNg0fCEGQCaDMP4wm_GXcdT1ARQ4g8H8MUd1wZ0Xft6FbUfMSPdu341yBW4EEgKrIcO9QUYX-_0cojIuydcm-8pSD0rAoOj_Sr08eWvJv7Hc_eomWbSO696ALLUNAd65tDckDjsqX7EBG_FwfKmT8q8CvFUltqktpqel0bCYXX9SGwHUwpSwHfUXrFuv2Zs_365wzIRxR9MuHWpsO8Bb4cLx04AcQ2HS36QEMh5KQqdq5gpbw0plaNyzu5EpcdepAVASt9O1o_EkJtfFiLyd-_9jfiohtOWpgHyMTp52NGPJcNmSdlxrZWDhDp75LgWQbO_mo3wQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106728358970059464884\">Shiwen DD</a>"] },
            { photoReference: "AWCwydjU8zScJYZiD8fjkCvop8FF1d9NGqaDe0ZqYn-z7MFaXZySeUUf3g2d19ihd5gXVKx1ekHfYprCQbLYoCJJ-ObtTcgXjgphp_V_LbsEmLZoxD5hyvdNgEVDyFe5Bfoxrgm-LaV1sPU4QJUvtaAbGJtkud_5EH9embHBcbOWEY6j5ZdOSzsCotKVMRjBkG8cqTpaHZ1S1C4QP7R8vtnZYlptnubqhd1AA8s7uG_npcYvKkZZz3OIXaZfgCfMEOnkMpXVVPawqJqYkShJ68BNq8WhxiJGFfprEROyxpZB_H2KwZogq4-XFikvrY-vDVIdvix9W6TUAqOvFUZfU4AhV8WPU6qJVzWAXpOdfzPTA0_DbntN5FpfVFzMZc6TjkgBafy9UPU0NuPpiBZcaRtzd0NKQGcmtgoLYOrkSykNGF__jdBV", width: 650, height: 406, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101881630015098865988\">to ri</a>"] }
        ],
        summary: "상하이 여행의 필수 코스, 압도적 규모를 자랑하는 테마파크예요.",
        updatedAt: "2026-07-14",
        highlights: ["짜릿한 트론 라이트사이클", "밤하늘을 수놓는 성 프로젝션 쇼"],
        tips: ["대기 시간을 줄이려면 프리미어 액세스 구매가 필수예요."],
        hours: "월요일: 오전 8:30 ~ 오후 9:30; 화요일: 오전 8:30 ~ 오후 9:30",
        duration: "하루",
        price: "입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "중국 상하이 시 푸둥 신구 4MV5+945 邮政编码: 201205", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "공식 사이트", url: "https://www.shanghaidisneyresort.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7643750451235837100", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%83%81%ED%95%98%EC%9D%B4+%EB%94%94%EC%A6%88%EB%8B%88%EB%9E%9C%EB%93%9C+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "주자자오 수향마을": {
        photos: ["/images/shanghai/info/tourSpa/zhujiajiao-ancient-town-shanghai.jpg"],
        placeId: "ChIJT1Qv3rX5sjURTmFMg3W7vqM",
        placePhotos: [
            { photoReference: "AWCwydgmOSjqX2EtK0fxYKBc09aXWlEhXUyNtji2KfTJlZ8AlIHWK_DLPMNpqb4Z-AEoVU367qSBrzOrhheE6JPonU6hhjbhf4jeF2ZS7_B3eG9Z4DXx_1ctaDtEMA3kU3iWeS2H4zzLYQuvjgszdlh43erh7hzSjlCWB4TRoA8Mzr2n-kzsi0_HgvuebRl1DXnFgMp1BhnE6zN2kh8XmMN5EmVRnC2yL2uEHnpJaSDwlljLlZUeuVfTGcbTxoCo032F6ZMk0bEIZuAXKn0rgIXNwOIUY9j4jGU7mTBOQ74otM-iL1lTHGsJkiKNqcuoq5r-MR5mq7vgPqkF7x8dL1SkRMMv96BcvyCURDOudfSXCbEzjCPRqNMkFSLIB2UiQKPQ16X9DQvYkuVu4Na0PGeV-YNEFqi599veDfnAVtNzNSDfD-0J", width: 719, height: 528, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114227774606573286354\">Francesco Pascale</a>"] },
            { photoReference: "AWCwydhHOU3SFHKfYVOyd2tCrNJSnUFFz3bPvJkItqQvmL6sPMv5EWSD_q64Z54j-nd_A4AeGaZ8cGeTnTtpp-4AxhzjZI06uYeHfCE58WxCOb1OKXjMa5Tat4_zSnLrRr-L4G1STpoG4u26RrNIGiWjRAoGaLfEMHhDGb2qWYjRM_qEFh1GUyrBNb6YzCf04dfe93eAWmMHCxCfZXjpbwKMfOasXBCPE6rS2OHNhImANSzJIhn5Kn4r7fLy4mon30a_ZCvuiB8nCjRvwlsy71cBdkGRhsItr8LmnpJB4B4u2NNTiGpZdPBOuDS7RCwTzhhD54_WGl3aem2_DhfXbap04EUe04_n2T8NGqnZcViyFsyw64eNRCa33Tbk2wKE4_yU1N1oVdvoGl0zbP_FwNPxf84H3X4XFvmhELDmsmteBynM43yY", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115027288387975928704\">Alan Chen</a>"] },
            { photoReference: "AWCwydg3UEuBR5kEuYqF4m38xqWBt-ef3MG_w2M3apSv0sP5FQGWelit22Oi40fh5NN6lnUXWb1NGaz8X71cvV0FEw9J6hNZUQz3R4tS9wMLWhKCRa-gWCCNFhBUQXhOzEdmCMkIWFJInU9FmwxFPGe8nWxtW5urTW-HYYqfQZs3uCIhsZ0-KLCMoBpsb0F30qeFjh5U6nyYGtlC_0SOaIHL5TI4OhwtG94IjiGGIU_auHYi_XxLjN04f163bLxKW82X7TtLRdEl4SHnUb_BFsTT-Ov272KaNqWfg4PDHvl_e6s7QSuOkCVY7JI1CiYZw5R1j2GupwC1KcE1xv56jG7ou023OZQQ5K7s-Y_7gnQT7eUEhFioYLtzdrRoNS_HQKY0f3TJ02eqoCTQe5K4rrkK7t1fxcokXP8g2Y8qRMarHjE", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107774313558404556930\">薛Claudia</a>"] },
            { photoReference: "AWCwydj88pSlJ68kJTjo66mKArVJKVumsrJczw1r0JqLobQWtKbtv7Spm5kgjUwnijyRnaYxugynzaSokP4qANKLIiTsgSdyI6b9HGr_wHbPNgMjmwFcM-w1dMEsaMmZI2xj7219ithEdYd3K1RvQ_5GFZMZ1f2Z2R8n8VrsdLddV03fOshLyEI6zFYBdFPJv0527DeFiVvn__oZfKoTwWWiPCAcGBPOsdY2nnEecIHZ9XEn2A1JG89OXiWTBnixz0WJu2maSXtNjqoJMxYa18AF3TCoH0xoBVKM8JiUH7vgg1zGkfSVOTVs_vHW9j4OL8Ay20jZBzTvkdLgSvSKdQgDsoC5aptAPFWQD7cWH7gxn_KUmDaKr3LFH5e7bd2X4qpabghZKcdY0uI2u7jD6hFHtOeSGPoOOdedKeNB2QopOpx6CL7c", width: 4208, height: 2368, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101809413954100075103\">Moonshine Lin (Moonshine)</a>"] },
            { photoReference: "AWCwydjlb9K1VYZD0htebqyjZ1uivzp5ZxLdCRe-YKqqSwr3swo-2NdjVvukt-37KU1cgoHX6P6520ZXqo3QoeuJs27_T0cxI1c7Dlq2T8-1m3wOXXUCA1vhak9Gc6mn-fOEIlvgAsSRSqwOCPvDssfKFBLdfw5IWe7qe_s7DWGAwBuX41qDHVrkwHqZZdkKv9fRBUVIqHZLAmBSfOmwqTWzInqIOwuyaAzHGygYdTqG-eqdJrIXgxAzjbWAZY_pNs0j8R3twjxjhXtnUS2md6qprqAu1Fm2OplrzAtFjEPvE3ZmcqmsY3OHkXeKZL-TFm96RdkrWvoOC0KZtYX82C5N0n3fXj7ilqxMaDXYp0sekrrywUtuaSr6cDA5ONeUxlZXCKw0yoPMeF8rXnDL2vnkFwfxjGZ4-baaaguXaryeyT479NVN", width: 4032, height: 1960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117786788405980135080\">Justin Cheng</a>"] }
        ],
        summary: "상하이 근교에서 옛 운하의 정취를 만끽할 수 있는 곳이에요.",
        updatedAt: "2026-07-14",
        highlights: ["나룻배 타고 즐기는 여유로운 수로 투어", "고즈넉한 골목길 산책"],
        tips: ["반나절 코스로 가볍게 다녀오기 좋아요."],
        hours: "방문 전 확인 권장",
        duration: "반나절",
        price: "교통·입장권별 상이",
        reservation: { required: true, method: "성수기·투어 상품은 사전 예약 권장" },
        access: { area: "중국 상하이 시 칭푸 구 주자자오 4364+82Q 邮政编码: 201713", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3749861631834114476", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A3%BC%EC%9E%90%EC%9E%90%EC%98%A4+%EC%88%98%ED%96%A5%EB%A7%88%EC%9D%84+%EC%83%81%ED%95%98%EC%9D%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "황푸강 유람선": {
        photos: ["/images/shanghai/info/tourSpa/huangpu-river-cruise.jpg"],
        placeId: "ChIJoRFjK_RwsjURl4WqoSsVONQ",
        placePhotos: [
            { photoReference: "AWCwydjlMHpoN8Dn7UE2cItpXPl-X4z55E3pvUA5cjQBLFU25P99gJ-vZspWItIjjBUh_YxsPvrZA_FalwBAO4kKVNFi0HN22n4gZnUiHYAeX1p1diUOERzm29SfmzSppVHx98cu3edNkTnmRrHUWxg8ERJCcS2DpaEwvGSsdYmGG06Q930iGDmi1UsSriL3fHxnQjCJn4oE_wc0KFaTZPajzaUKrGVKmYnoSrQErdVXVy-GIV-hUK-RO5A_nQFNxZ5UtcDKopaqDnsDp8Z_iBTj7ag007LSNk25r2nx2DDsGkmAYYFe_ges1htZIdwfyrxrhpLDlFZvSeY2LrOFjimOL9c0ql8aLI0WMIdh27JksWYT-DVaz3B_2qJooaadTD161UUo0Wwnq-VB-bmoGZEO7QagrIoQf6r3zebO8M0PZdpPPHGpz1o9uonqr-bhE2dG", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113254171550747761428\">Helder Mendes</a>"] },
            { photoReference: "AWCwydhpfkluO0X_SdU2jIk4ko_M3tO17cfKR_kDBXblkwm50i89srTiEBFXlkgLmF37dUyhOG4wetEwgi_9TcZEKUo1aWe0-JMstKr4EEPXXSu6zGJJvt5p_nyZUgIe3SSM-eIoY9T2NQbXzcFpk6JxopVyyDOWMQyAzJQDjBiCpIEK_9RK8Tg1eoZbKLNFLfvZN3GGBnuAx18zl16-7sQU6SIM0IUuyAm1Igovfd2Sz3iWtdyDDhhxXfKP2RkRVWKYK4ayH8iLlGij-5CKlWT_JcNuMdGJO0EqB-5v-dCII11-ayXDZuKkPxRT_HTyyHjw_M3mCyYvyB3cwTV8SyYL2Qxh-nQWvwaRF4qZkWHUoKJt3O8uil9lka9dHjfDONRpxH_iEp4363dAy2bMwlo96pDuMNOv-pbuHkihFm4dxjWdhyMOROJmmPUsT3ok_DXm", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110701441996460740985\">SY Teo</a>"] },
            { photoReference: "AWCwydhe65CVjPNoE8L4O6YWMQtHHIialv4e12ZMOpnVuRY60onrhrehE0zXCH-pscHAHoxr4fbo_3FY5_y14sXNDvPX5_R_ha5JvOeDrZSjJlaqycZDbHCwBXe0UkwIgCI-fqo9hrAhkPcINv8ifTi0rP0RDc4CT4RZRABjpufMm24uNxDTBydyZqPTO83Wo4xttYGs60O6L8wdTL8Vo-PHr2HXDxir-LPn_a6aw_1cVkj4LkcNiwJfISTT4Qa7G6FI2F76cxpzrmH7fXHuR5tLtjOgWKuvum1hwHiRLdBbf_OL7O1zl4IIAaDV0w_eaCepmqQGJ9_R7m_gBudUadQRogmywXzugvOvfMX1_OgyvkxuzZc08P19qtm9AeOnfQ5LybYTxMA9_-uoL9lto_k1cQA5oOiFrv_bKtH1PvL1zZX-3ega28PKl3cEYub9BcEd", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109769750197655913860\">Vasile Dorin (V451)</a>"] },
            { photoReference: "AWCwydjySsLWy5zDJnCnVn725eZw9Rgj1irrM1MI296_j0a8C74mXOQg2V3miYIU4VuRwOuZbtehd7sBJ5O1kt8gLD3FEP2WKb8pwMQYTHtLVmVrJeTKnmcDV5Fyxc9hsznyg6UBDlg8l3eXGTnBXJdeyK23_DjZB2YmcwoURZBoBouSgttEG9awTyoTawMccFB-zcG4IoswK1UYLYtzZn9VHC7rXw5sU4IkTVrE-CcZ7GjDDrtm0zLtn6mt_vsFDSkPNf2BzGj2BucmiJWIJcptgn0DPsuIRn218Q8viYgpsa09NOd8vC0xjjngdDQYmnUqAcSaDfBOuUROlaOeaJ9BOaCzo59tDIPbcooIrnBsJhicj3TIWB3BiPs2qQqvi5Oq43gwq4Jst93l4Hz41duqjdkWZ1DRymVF2QwejoSlJTxIJnfr8puIcoOtr1wb3A", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113600123557223746998\">Donna Sundblom</a>"] },
            { photoReference: "AWCwydjn7x7Xc4eO-rHJ5Yp4BPl0K52ti-g3UgzTizDWc-Q8xndPCpYvSde67mtVDKowtW9Hg7T2y2XnOmoZtSGjaPIzro66wetwcI4eIOoJx0NF0mNlilC6QRojg6ZyL5Q_BwHYJbm7-SQiBI5ZoSCNm7YsRsDpmwXS5fuBdLRYYuecSq5LgnRTnWBclUfd7HvY8JnE5QnUrb_aHSPo812BMp_PxzOnG89D8gOvfiOV71RpHbeZ3Qcsdg4NvLz5yfSqWwmuCmWK30wi-3aPA8ZbISb00-hXeCpowkDlfTWFxccn-AhXkfopIq-NdeCPKkY64YWTKe5xtSrEiiUpZaH-4CWnUuybFlH16_meLegCBmCxpTwYesVhoJyykx-XkZNvK-n1qH-BqCDcuPLIeckGLwj-xvI1sNOp8fgkIwrKiTFDRYwjcyJKbBrg5TUHpZ-z", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116270769156075381795\">Pasindu Ranasinghe</a>"] }
        ],
        summary: "황푸강 위에서 즐기는 상하이 최고의 야경 명소",
        updatedAt: "2026-07-23",
        highlights: ["와이탄과 푸동의 대조적인 스카이라인 관람", "상하이의 밤을 완성하는 화려한 조명 쇼", "강바람과 함께 즐기는 낭만적인 크루즈 항해"],
        tips: ["일몰 직후나 야경이 가장 밝은 시간에 탑승하는 것을 추천합니다.", "인기가 많으므로 방문 전 사전 예약이 필수입니다."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "티켓별 상이",
        reservation: { required: true, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "153 or 291Zhongshan Dong Er Lu (Zhongshan East2nd Rd), 外滩黄浦区 중국 200120", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://www.chinahighlights.com/shanghai/attraction/huangpu-river-night-cruise.htm", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=15291995811876603287", type: "guide", description: "지도에서 위치 보기" }]
    },
    "우캉루": {
        photos: ["/images/shanghai/info/tourSpa/wukang-road.jpg"],
        placeId: "ChIJlYmtcE5lsjURb2bqWG7sR7A",
        placePhotos: [
            { photoReference: "AWCwydh1mdG6HySBHuQ5m0GkgkQ1ngBKz6NVdPBC3ApPC3pDlHBog8tR3SkLtJm3A81vf0yPczlIIl1lXMDPQSx4FyBqYEXonfslLqPCyiyS2zMrJ3CSZgzSJqCzFn3uUsMOSMeVYgqhmrua9G05J2lCXS629JFxgvYnj8Kat7yctW9_5geiwxFOJSMPFP6wGHjj1NksnM9GjKIENiVm1Y8sQsnRMOXLKfZnpT0zviRYdi-hjl2BfG_Y1OyD5sAiclU5V9Xa4aaEyFGYWThRDMiXw9u4kmPhg0FswjZDG2SqMM2jHkewT-u24oT9ieUwgRJZUD3hp1Yv25RPLzW61nrHJjUaFyeoMy1NrkLjfICMKSR0gzp-H3CcLn2UnsP1t2Bm67xh2g-OliqfHpqTAiwAFbttPD4-sjCI80ha2XVghvzZBo7a", width: 1600, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116117180696502519139\">陳傑生</a>"] },
            { photoReference: "AWCwydgJ77gEZaSgdad3maWT16d-0Wq74V8F4bHckzT7bCzjHOiWz6Z7bkDLu4NWe_v3K_-btGVkv9Z7ta2EiT8xKUf9q6tVYDy2PUcyJLJMPDqeppUl7fDYjLD68KqVuCVJySIQf1eTW1_WuSKqISPwftgk8PtrqR75u6AqmtAdCqNbZfp9znDrCYX_jHN-ndETZruAHn0gtuTKE_j5QaxfJBR_hs129doP_pfzaL47ytcG-r8koPdIDdI0R1x_veK66tR9RMIUfS3WgLLhmO7NlhGnhYFCc0SIZIutRHPP1u0Dh_jQV8eFqjBJaUHmmhJrFW_CaW9Q0puT81rFaTO78f8rZ_gNwqqaw__cdSTMIfIsJ47JCrYmzzDtXCBo3kPl__UBxtPmXMDJL0A-ZPU2-vesxaVZvpxL_5LrU-LLCvnGP9_J", width: 1600, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116117180696502519139\">陳傑生</a>"] },
            { photoReference: "AWCwydhfAGPB0cj7D6EA6_Gzw0HkwxwslGk16nxP5_TQfHuLaUop_H5-1bDe3kxDfJmRE6XmzKo54IRK4nY3dS7tA7boB6CEIj1xtXNdEZsN7MgKi3EyCEVrzWcLKN6btLJIS2xoIH1Kscf8fiQdSzJRNLJMIJU_nORX83rbnOcvL4t_NKxzX4k9x11NPCEe1vh_0XLOTKvzUBBNcy2LOwjbse3p1_CNp89nbN_Y-E3-UaDsIJrsJskkGyivRVt_exJnmGk9h6YNfBHynil35hGCzQ5knOPLsuB7jQB-mPCvQxYqJffuNeF6vwhvmPpmYpq-sBOGl5M36FQtAj5_4wrSQtC8CGQnHQ6C10ByeGFvt-skbpRXRVag11sxa_IcgMDgkdCRNM6MeDUjk_0pAKylgXwlq8s5YycUuPlUy2LEIKJvxQ8N", width: 900, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116117180696502519139\">陳傑生</a>"] },
            { photoReference: "AWCwydiiB_BwuynI9uAWNiN8ZBjxRbvTDfPc2IFib1d7vfKtHztDms-CrvcRZIOSAWMOn0sZP2kQDtdkzPiYEGNhnyfe-e9D4PxvOuKX5NBTJuj_xINVDy56rlTBA7_dk3Ry0NcQSTiIcfEQ9-H02dCelj0gVwzwF3u_s0A6j7cEjC8U95mIbjrsNM2Quqs-Tt2-1jXQdtQFa9bs8oYrUesdHYX7Fh-wyulyUSiJv8hevZgoY2WoZrnC_8FI68xN-hibGX0-x-MhmPWgEqBoSb3mM0J1op0-Tx6ybp1uZNQ3rRksDRKArHVVsWDePzmANs6wjzl4TQkhMy9Mks7YEgwn_g-_-Pw8cbPqWg4Z5AFiBlCStzvgytugOe1QWir0q0HBzHJq8a9obsXqGTLTN62gAKXL65ocRpm9Y2yCBXMxyT8MzqoC", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112170049486598498028\">Keith Khor</a>"] },
            { photoReference: "AWCwydgrTmPHcKr3Q_R8FMLE6oR0VQy1nWqwk9usHbEhnAW8Txu8cARDT7Zl5rnh9iqXi_5b9BHv3PANg0rki-zNiZgwSZceu3PeG4cUQN0x1cMGF0XJu4q4Dul1ONa5XYkgeygBgGLd7QAo59EYSsqOaRQmIz_C1dXuJyf4N0uwN8MiijHACZjoZJiNJKubGvvsYdgxf7IddKJSQh7EbvmCSbmOa9i3-WVqtrFUzulYlxWVr34lf7ugkk4eyucQ4giqR_fDxhdYk9S05F-yts_eOGKiGOAmh5fAwmy2EULi3YjinjLYrznxp4H9LmpFBAxjHTw48BevVctJbZ_9qv6uFb2k7lEnA8xd9DhRSCb8l3pZRCz4CNYgK8uNhHsxZfqm310sStufwyxZkpWDlOj9_czZciQgP4Xz0hyPgBHRN2tjOu4z", width: 900, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116117180696502519139\">陳傑生</a>"] }
        ],
        summary: "상하이 프랑스 조계지의 낭만을 느낄 수 있는 가로수길 산책 및 우캉맨션 관람",
        updatedAt: "2026-07-23",
        highlights: ["랜드마크인 우캉맨션(Wukang Mansion) 인증샷 촬영", "프랑스 조계지 특유의 이국적인 유럽풍 건축물 감상", "플라타너스 가로수 아래 여유로운 거리 산책"],
        tips: ["주변에 예쁜 카페와 소품샵이 많으니 중간중간 휴식을 즐기세요.", "우캉맨션의 독특한 외관을 담으려면 건물 모퉁이에서 촬영하는 것을 추천합니다."],
        hours: "방문 전 확인 권장",
        duration: "1~2시간",
        price: "무료 구역 중심",
        reservation: { required: false, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "Wu Kang Lu, Xu Hui Qu, Shang Hai Shi, 중국 200031", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "https://maps.google.com/?cid=12702381232704087663", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=12702381232704087663", type: "guide", description: "지도에서 위치 보기" }]
    },
    "상하이 서커스 월드": {
        photos: ["/images/shanghai/info/tourSpa/shanghai-circus-world.jpg"],
        placeId: "ChIJod1XLgdysjURK8vwJfZQYe8",
        placePhotos: [
            { photoReference: "AWCwydih3eVbS3AyIh_HSIQFmVGVHTRQDlb7kRkd1bs-RxmxId_9OsUsAf25EC1WUy0d9r-fQtJPx3Fucc9781Kn5EQT5yVkAO8ypBiNCHm8kz2UJZBq19bSPmb2zOULzxy7z7TulTCE5T4Ep13_QfLmIOMkHIDGqr4bhjwo6t_kFBgz27f2Ts72eJe4UAu28cGZd8H9sCP3hjLpRMZd2YrNmdBrer9Psy7menZ6m4pEolE989miwLVFDcXNMzgXu2ZsJX1zCofYAc5fnPKLbdX80Zz5Dn2ywp5HC6uCEzLsH99iiBwwfIXJ3yIXK9Br4tmstTNUZYJ2WDP1NiWdmtPFt-ciqV9PPFha0Fc34_pFSCKil4gerjctvfGHCC3xYoP90sFHQDJHYgDMioaWqlVc2s-jw45goDGguBg2LhReh_QA4Nl2VP1R-DREmRidXVpj", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104753822067421870922\">Sumon Rahman</a>"] },
            { photoReference: "AWCwydhEeLgMn0flZMIkJvVZQ8lWGz3Q48A9kwv7YZVX8EduMl2W7jJNbrVrq1NaeYlRhUxZ9oraSlWyaWRBwNIL4ozPfE0PciWcP5iBrh7dJeEu0geVtUcyrW_4Q5XDIdWx5JrYiHUwtSjkkfMepWUObKwCQgMHULScT4QSGljeZaYH43IToTX4r_2dsIy12gZg2wRqxANfypOVfYMZ-6-t7joOPWuyfzKsWMw7V6ALrXYNslb9flU1k_WnqJ73QyyB6Nb73OwrGTX_t1rSSWr6tKFLl-bbeDdnr2rzCrNoUb7Lv7hesxCvb5TWUZiyJzleVb3u2wtiOUsTEswoAGdiyOzpSFgtmLaferqLllqHukbIwolQlEQ1_kCKzsg6c1csqYPf0Rbxz2rpAloXEWrqnUTaARAbL3nGUzycvIlIVx9BCivYS_yoBQWUjL7A67hl", width: 2784, height: 2593, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100459968922514947529\">biri cik</a>"] },
            { photoReference: "AWCwydiDIhqmSuJGI-P8tuk40rNWJyy-W2dQfEoVsxWwoQMmEjQZpzVdTDOre6MDPc51to2a46CWWxKUPEPr9XZY4TfL0ScwVD30dw9TDfawZ66Ag6JNOyFQtzPS50660mac0Zb7a1E3zmXm4NQVii9EuUs4qMefEMqH-E-zCpd-NwwcyUckNmOcJ-pdGIqW7hKZClKEM2IiVyK2aqmDVR5xk7HZY4Tg5OW2paJDO2Don-9XP3XryPS3rqT4TslTQUi5vdMA9xkYpMLw5AUoNyqJN6gayMKqPYxE4h0qi8FR1_0Zhp9VjuMnYBqEKz543VDCt_a47GSIoapNa-SlnNw9A3uczU1IxJuuncC28fnMBN4yqO1_Li9raTCarqCU86s-IDLCbDO6JuD4NUDY70-SvKif1GC1OYZolgG9PPtUPX8", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113918700579839322873\">Taeng Sweet</a>"] },
            { photoReference: "AWCwydjMcIigkh6q81G0sAUL5W4verfPTZZXvt7OQpvszxlnu5DAJMjPtsU6w5TzLHM093HzeAmasJm3dAE41TWZxBI4tX8CjXcIvj_ReOJefCLo7zQ-OnkYhGEXt0wLbr4POn_FQyZAIFud7jReazZ_jmArmQPoD-pTjmyqhtzYcoKtBJu-8g3ycUx9SAkKW3wzhnTM-6wy3TkoZzt2o5TNZfm2ixBYS8qT2X0FO5xO5natdo3e6mHcwB8wCI7K1pMOyz0ZKzsDhBKJvF4ARZyYD4TQGbyFwwaXDFzuCqs6zHEuC-FiJs9cgiJFRHG2a0TUbGQwkaEC18RQGTYPaRP-fVnNfyzGLDuK5dkWENNrE9Dg2e4Uuyr4IenaZG6EQ5smorteik2CjoMLXiIqhKe5R7KFgzMBanHKWvsx6y9WSXcoPfy670l7E0-1tJQFtVXP", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114560399396611390450\">ヨシ</a>"] },
            { photoReference: "AWCwydjRg44ii2BBu4g4NZ3suN0fCE8E4Mg_tzHMTorRmmlPT1EEyOvCzs7QcvJd-9YaU4OQSetngN3h3uj2LdixmfHc9UWqm6tmQHCPHDnMBTRZ1-gzy93Yxzf1AkIR3ZbExa7DSa1It0QWDBl3KL1xrY62mSEHIXb_KKT_-UacmEfOn37ZniIABaqVWdtFaexsesdP3EVFfITmvxrjZGRyq4U4arN-Uc2AjHtKp2BMadogGFb0GvQKFpoqvL9Aqn6Pt99OYbA8crJXNfYbESOajZtABu0IZmGvQby07p0YXXdD3b2h1g_iE7nhd_uKlyw2uWrpsYEq2xbdmD-RQThD1UqtGGEjtr4lb-hhz5X6a-iPzmjgTmgjsfyMwJw93_1seglMvPPOpXL3ch28YXPLR3A1U5lkEV-DqwifPBozS9cb4eRBtMnqf368ue70oQ", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115025844774972915290\">Airben</a>"] }
        ],
        summary: "뮤지컬처럼 화려하고 역동적인 연출이 돋보이는 상하이 필수 관람 코스",
        updatedAt: "2026-07-23",
        highlights: ["전통 서커스와 첨단 미디어 아트의 환상적인 조화", "중력을 거스르는 듯한 고난도 아크로바틱 기술", "눈과 귀를 동시에 사로잡는 웅장한 무대 연출"],
        tips: ["인기 공연은 매진이 빠르므로 사전 예약 필수", "공연 시작 최소 30분 전 도착하여 분위기 만끽하기"],
        hours: "방문 전 확인 권장",
        duration: "2시간",
        price: "공연 티켓별 상이",
        reservation: { required: true, method: "방문 전 운영·교통 정보를 확인하세요" },
        access: { area: "2266 Gong He Xin Lu, Zhabei Qu, Shang Hai Shi, 중국 200435", note: "Google Maps 위치 기준" },
        bestTime: "날씨와 운영 상황 확인 후 방문 권장",
        links: [{ label: "공식/지도", url: "http://www.shanghaimaxicheng.com/", type: "official", description: "공식 또는 지도 링크" }, { label: "Google Maps", url: "https://maps.google.com/?cid=17249157065934424875", type: "guide", description: "지도에서 위치 보기" }]
    }
};

export default info;
