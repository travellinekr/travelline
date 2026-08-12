import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "아이온 오차드": {
        photos: ["/images/singapore/info/shopping/ion-orchard-singapore.jpg"],
        placeId: "ChIJu6qq6Y0Z2jERZQZRLwnba5k",
        placePhotos: [
            { photoReference: "AWCwydjvZ1hDB7toxx5_1NSzN8J9QSU13lJLF0qDW9tZngIZ15ecQSCwH2glVJy1koQvX-aGIQjt_93r1aIbarL1RJiNKhUW3OVkQSPE4stZYbW32YUIH5ICXAgy4L1VVX-cC3rGcMHV_lzcyLdn1FF_tSg-JtsjFBZzAvKTrYeCBkQisrBAt5FC-dL9DlDwzo-NS2Y9LVhqKo1cu1t3chI79-tpoNAPlHXlAYekX-d8zaMkRQaTXqWJ6aE_GInWDVtscXt6-Ocaz_T58N9gcoFmCt26lfy6sRf4EnF3dVXPnK5ycsKWIdcvLFiyT-xPja5pPfQuj6WQCQsqiksMNOMLAhM3W3pcM3ZD9l5o-2LW7ZV_PJCgz4SbywlwzBNO4aqbHohcJJyE1UWo8pHhmIsGr9T1R5TfpS-X2XY0DUZnJeVtv9A3", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102155783128976168359\">Teddy</a>"] },
            { photoReference: "AWCwydhj6zzAZCTcNOpwzCvN9Lt2t7hYE2fpSBIX0sykyTh2IftvEPz0sqt0g97Lw9ZnIcjjDkpmTaD81cho7Z6uqk6H-KzLoigdLRRg3EAtp9KP11c8coQjUyYn7nIXt5MZK9jLZGqGWBQcda0HylFKZUDvkunSWL8WldDFvVgqmlOMt9jZJFVh1qVcLtvKKgj3NyAlsZqKrxWQrYQyIrnfOzvMqdRnRPHn_YmeXI6cGr72YbY9yKanx8__yxI_hNEYEheqBh_jJr4yPR2hEn5pjUgp9tkvUAH-z2okJ6DHDD3KmIgyX3GgiKUqCx8-EtHFWtTRDXjBqlQ94R2mDKlM_oDtN0bb8NAlmfGHUak7lzi1fGu2Y80VUw-JjcZOveIdyTZMwEI6QNPuDuXyeSGbav2ztoHj4QHehAmzCz6rbxT6kn0G4MQxtASfsdHGfIlS", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103491623976235658764\">Daniel Collins</a>"] },
            { photoReference: "AWCwydhtze0imuKfmXCmW8yjlF6-8NqAfLLX9nAffPjOh0iJ5mYHXfTciyU6yamwnbQKMzhzu2gTheFnYAU4f9Kt0q7-sNZshg9IF4Ux-gTMwLTse42QkaiyISMvyftu4R7-BgWupmKaoZXkqDDr57jJEfg6CgkRnDoTWksbIaWKkxiaMMlf_jphTiJvHfxWNC49JKs350qi7vA0cFsqHJor52Kl47b9naBuESUUs4svXmdHwNPTsQt4nW0cZ3viHKIH9tuaJLsBMYha2EC0s9VEb-ctfbw7S6WDHBJNF6UK7alOwMR0TvPegAZTDylqY6ktMFLKbMfpktzV3h4j-0u13JNRYORasWDKuCkbWshV9oyqiYmAu9kpg8Jv4Y5tJNgggSKBaec6yMoTQhE5ak-wJIhR2N9TMiaybwEbLQZYzLSelU_1", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103235381099676291640\">ルーシャスLucius</a>"] },
            { photoReference: "AWCwyditDk4JoOh_79KbhkNDpyoUAQWXVO9FILjDZfTx9ovjT_LC8Mlb4sExG3PNPsQGI_M7jVLzKDEBGLjv_14xWmNE3LavIbTeKASEoM4X6fbBuMotQ0JoRywHAdHhsuyZ0-kDOutDtiFnKHJz8BRTR8e6Jh2wEeo9j3efNzC17SwRGzi93LA2PAImKHvwooVTi7bfEa6zpLDmUpnXQ1LaFBjv60JmYXbMV4GSiE4htiTRToRJg-S9Uz9RQ-CbqVsDmuDQ_EU4LA8TGKUUldYCq5Ixc54fedYTU49CMNYdYxOPKkd-w6XnqTBKepgrfHqKUxI1qvnQWLwVlol_YiY4RlWxceY5X2lzJHzkiPtu7mLofPwehB-ahmDBHzu3ofNaDIEo0WJ2dPNe0nlmBIIjwkRmY33KA28Re2Y3GdOOTXP3ew", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113017534065818081151\">susan ng</a>"] },
            { photoReference: "AWCwydjDjkiB5p5CYZBZ5ct1p97wC70gm-c01EFX5_7V2J1KWsBDI7V2-vTJlJbn3Tk8zt4pDF1AI7q-f81bVcmGsCwa1dOQXsEUgyWvbClIz30kLOZpSGcwQaSQ8BZDlSqWxY2UHX3XUR9vtK95HCz4aAvAgrxoIwKQ-FlQZ3AxIWu5XYyvT2i3drpvLUc73jdrU-6ZHYmCDjq2_asHeHgZQGiIBoKhm7WkfCCBKSu7tAKMteeOc-yy9cYYdxTlO6-QWiZPMmj_zfCaMZAjOr_GkUk0pPGOSLGfaBj-E4zsF7sENssEhFYJ_XUJo-V9jdE80XXAOe9xEOlkbE80sOBeAJefaKckmS6shQ7Tfq0Jf_rhgaSdzms4PcDAFWfjTSf9flsth9YsoTkI_MH_fx-RQAvy_M8PWvbld5v5vzS0f7FTvvfS", width: 1440, height: 1727, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117802682920032700508\">Arlene Gabral</a>"] }
        ],
        summary: "Ion Orchard Link 기준으로 확인한 싱가포르 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·식당·기념품", "평점 4.6", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16232078173857681455", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9D%B4%EC%98%A8+%EC%98%A4%EC%B0%A8%EB%93%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "마리나 베이 샌즈 쇼핑몰": {
        photos: ["/images/singapore/info/shopping/marina-bay-sands-shoppes-singapore.jpg"],
        placeId: "ChIJuzb5KOYZ2jERLUHxHfP7ApY",
        placePhotos: [
            { photoReference: "AWCwydiFFl4BcFfGn3_7tf6Z7kFafZ0IUyazsSaS8FtlxItBBPeq_82TqW4DZy_HAAkgJl33ywyUckhdxv2BApQ770zAJsWIBEwU7wPgJ_mliww26NFo6qMPbF8uGsUtgTnVu2H_omv2ecuf0Dz2XoUbB2lbCmEifmlSoiktV0wmQUayzWUHvPf-zKnAhnsowzMbeiENJAW1_YGrAmaKdaaaIxGP0oZ29AfMehaz9EiA-0WRbekBVExIyEIZRVY6EnXUVf2I6FvkUzyshRjOnZu5zKv4IPFbNVP47V7RC5zTqGdQBiiIT6ER0phpUf4Urc3NTD_emm4fYdtHB_YoTRXKeS6qBtcQXIEYihe6YC1xp74uSKf_KuVssCJAFqAQQcxlKC6LieiLEk_1CWKyB6DLQ8OssvcdxJMZp0GlzI1dUwtxFg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106689302864944033255\">Rome Best1</a>"] },
            { photoReference: "AWCwydiAdN0aMoyedJtQydcPRwr5AZ2GVbSxXTh2gs28E5Q1u--Rs1AXueE7Rp1iwsfJJokTMywQYdK1OFsBG1ypPrD3TrOvve_BNIa89UwWCPlsNgTUjMnCf9_bh9GZCtcvFqeDqGhmjiLX1vr3X78WinXJmDocF8uO5ZjSv3fKM3Z9IbXBXeM-_lf9-4cNiEfJTvyqtc6P5FVEvvLHX6Qq3GZ8DGYMdaIk4kIwLsBRvSPybS4ZM8n9mA8S7-dn_PDkFLjPHa9tKxFxWgy-bOaDPLkh0k7bYgd6sIClPoIurDcQGxw0zdmueZ_04BOSMFNIgNUUBvvyZR9LNKfwuEkZivCh3j56rZw3T2KxRjeWkyPi_iLZ0KCgP8TEF1iGQzMzN_Y2B1FrRu1sYmuflPPAkmtNP9sE0FFWtMR4Xh1ae7fzy2w", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101936367117565243325\">Dan</a>"] },
            { photoReference: "AWCwydiJMZFPMl7wASEd6M_-7-bYbdOenoldHjxB1y29YJvKV6nQAv3AfuxLyIzQxccNSpeUJA-I1WRHuOhgPCc23Qahh8ii43jM0YUU6apfPZoeSxNHdLy_CWnIZFYzWCTCEiUYQEucHXNC3N3SRO8ydjUiOqFNIo3FxHmRi6N_FGLle7RtsXqg27T-1dta1Z_jYRr0izSVevWMI9TbvdNh2Pj63mLZuqx7pkR0XP05YQrBAsWFDtQpCZVQa1Bsj5k303pYDoRvaoNtgK8eGVRrsiZh7DQFbfd9rLpUn6jrWKsm3UCtjFRAk8oXfp4gbCOHpUza6fN8DOyAUEAOwQj-C7WDJPbkdGcCnd9JAtlMR9IOgtRtbJBYb3u8TVIKgzusmKI6aEVw0x0JOwjeGpuuPCWgL3dqRMonihrHIAeSAOcLSnNr", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113015523826545524096\">derek neo</a>"] },
            { photoReference: "AWCwydhpxFmWTMVfiqJnzuOUgEK1XW62N81aIKZ_DRgcqmA27hcDKQDuWV-JU59P3TfNygT_eFANxndkSjdCZYJBjb56oeyMmsSf6cyWC57p4tJIEJ48geGaSid1Md77fJR1x2v53r9j5qR8qOrdkWIyH7A8Mo5Dh_qITZDC13ioi8s45QyqNHc2NLKd94aQFirM9bOzyc6m2CvV6aLxghHwj1F97pyJVAUWuseGcVFcwVFKjIZAFS3TXjqrzRHwzOYHJRAOdOoe8SZvqipTTlDB_bJ75dAzJ7m9i505Kof2DYGIORalHw2tUxzvfaYB3D-hZvDoGlpQ7e2rOQsGr61CkkusYeRA7XB7ffuNgfVTHH0Ja3wyN54qZ_FyrnjoaLrlr2zetUlvnYCs5X9fBc3eTGj0YvQaIyrc1R9xjWPaq-vzjQ7w", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115615589102659578379\">Benson Kong 龚耀鸿</a>"] },
            { photoReference: "AWCwydjCA7_N3Iqf5tq0Ad2NVxlCiH_oUuFXZHafeQ5KEx8dDY67GkTe96vQ6UIbKbeqjx4S1KaECbQu3r1iCkErwMKaActdLSVFXXPScBUwX7buhP7hlaTKYWdc3SS3B8EU_hRPgCqTfm_fEYorCCDMJmpDhM3K-q7_ZfwW8HI_g9POYTDH4NzHc1Tvt6p2GrWe5ANb-iBbqamq1oauqy_jLTCieWrGHa__kOlZAzwARw5DV8GTnmNxqJIv491kl_Mq5t3yfz8pUVg3WX58Ng0YeoRwHazpNw48umikdgKRkkjIcWcJibQ3fpwsQwmpzF7B7pn7WNZ6LD7Ty_34B4g7__pgefzvBOk_5RN7DEIvydM5ZNDLL4Kvm9ZUpk3tG_EU159FLJz_yTQCJAvNb8NerBzh3hqDhgwkn0rvPac9Qy9a0w", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107957051173910448327\">David Sun</a>"] }
        ],
        summary: "샵스 앳 마리나 베이 샌즈 기준으로 확인한 싱가포르 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·식당·기념품", "평점 4.5", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10809479077240586541", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A6%AC%EB%82%98+%EB%B2%A0%EC%9D%B4+%EC%83%8C%EC%A6%88+%EC%87%BC%ED%95%91%EB%AA%B0+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "비보시티": {
        photos: ["/images/singapore/info/shopping/vivocity-singapore.jpg"],
        placeId: "ChIJK7xLl1gZ2jERP_GdUY9XNLo",
        placePhotos: [
            { photoReference: "AWCwydjNqZfa3Y7KukFWwWKZZGLr23yAc1xTH0L5OYU3qzhQG3LvVE9yHJBw_hfBt-1K47PqkR7rOirEB7cnh0J13x1e-17Su7uR7ZNDw6x7YR2EYmy1I4Wp5U27QrzGgSu8NAa0q845ASCyjFx0BASrgcu9U-uojyY3L0a334qH-kc-lnbDXvyjImJ5_8q_xH7U84Ia6XQucbyp_NC9Dn_vo09w7QfNh-ev4lt92lA_ybKdnlY0-H1fHdHHHlgL61QoaciXueSKnWflrprYfXDS7grQ-IMSKatvc1kao2CDToAbUM_lRAKKVhk5FbasSVlKpZfcxy9rTChdXqQGSzJyoxrdkfnlcNazpB5Fuu2AKGSO8jdeZmrP07f00mK61UN1q5diZX5Q4TDFf0cD7kYzWReN9KW44L1CTEir65u8UUubt6h5", width: 4000, height: 1868, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109532441449540262596\">Bobby Wan</a>"] },
            { photoReference: "AWCwydi8PNsHhMFmTKaOvmp-Nr56Vl9dAl1LsJCbhfApHFP1mD2vwfKkXfWauTI-Olben56kbcRNeFjMZqZJD5NxatrOibtaMHdU50vVVd2jY82RZB-EL6_1ZV2M0fk8dSUTV6OMuWdAAP_CxTCea5gEyx0uPFx8CpfcsxUBNVzXulJfw72KbqOH7aAhADVE4FBmy5v6iJCP6pjTTR32j38LVBmJkFxjX9LutdgKtUIFcw6hgAPzxoZ60-mA9q1EH4zYHASkj4HdwyOgqnY9PdvfQPaBCzTaQ8JUM-bLAhh5-0TNavfG2yEf3_uCth6MLqxqgKw3TZnLihYzHvctidRhL5sFFgZx3EHFQt8ZLzVqT8EftKk-k80UaXyoy-ohIR50oZBC3pTWDuVePQdfrkx5SO_EzimoHBN9EoySiQ2z2DurRtj_x1zRiwl5Q03Liw", width: 4800, height: 3604, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103615691078490664381\">Peifeng</a>"] },
            { photoReference: "AWCwydhPmRPQXV-7RFcErXL0HFG57zVa2JyTmN7_DzfQWSuQJKOmg2HX8sJn5TbSWMa84QvTw3G5gHpVJlLMFp87N_IlTp_ZYS2cFOGLTK_iX0q65ZVmIVXVpRjcjHE4nTUkxeCbQNn3nkf_3POVV4fd0RS1CYzq7VzXxC6WUOc0NHI0zcYwmF7MPhnSIX4y0fZ-P8gY8fX5iGz7uyLWD95WUbRu2Tp_KplTYwLcnLdiHSlQy5ASdNhheQQeSqQzOuFYxaR8a25bYHeUFXtZahObxOF880oMl_V9oOKAh6mSvay67Tdp6GnF3dhIpIfXGrYBIYihGRspE6h7sA4V7Ou-sLLpgcw3T5v7PC2ISMabWEcACa4xmeNqjgu6JsCyylzUT5Bsj34_pKXH0VgJYGTqcGsVBL1Q0GDSuQ5L-tgERFWK3Aqd", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108199081679214051214\">Patiphan Pinkeaw (Boycatbay)</a>"] },
            { photoReference: "AWCwydgkLgaYlbvQ_394BcZWXxePZC98pAtlImr8m9LMNYNJlackXnHbXPZNh4km-yvSwdWuu0xyBEG4sv6m3tB6eVFzqGxuKDLrm_hyyfqgR9ObxoXBrjUUh6414XPG21ym_A_42P3AUdRxdUwgZ2ijp1JmCtZoHirBw10fY4AqhOXgkdpK6uI8Yof0-qWoxlQXDEPZLlDscSNOFThfNGjtKqBLKtfdeQU9TgKKc1ulePZqTwnK3tVXpRNvElgkUgTD6H91H9B5VTdzEV_uJInlthX-r3vX9SXCzuTMQX2nhB2lh4-OWxlUONzaTV0UScNaC7fXzudr0jqMVwwQTMZP15vz4rPKr42HREguoZWPgP0PL94zxlVH7FSkn1f6QRv0Lon4bCVE9XwfkwgWNPr5BHdO849Q_B9SvfIZGbwt0pLqUDwv", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115347025159357371002\">Santosh Kumar</a>"] },
            { photoReference: "AWCwydjQVTXao-Eb5wMWeNx_EEZyP7FgkaD4qlKvtFD_qtrl7SscqlGyblr8iEwwXkJx32t5dRACOO_NDtMUb-bsS2z6FqWx-X5Cquol9-kOJAz304de3SlXqPvJ1_JU4ZZlKM2qNZ6rQ59rN2mN3Go_9MmjcUGv1DF5oC9BAGAIZpWPLgHZJcOHV_4QebMa8eitDEDWBsTBtDq10AtwvSSB0QQ6ba3U0ARl9XQk83CPoX2FwfH3spqRV68A2Ologx-ibLv7_poYanu6EQVLyPHbOGYDOBNspH9tVaE5MyozKrQrn9aocZ_yfl8DvOMc1o4Z-ddTUPGNL-CvoOmlZonAFFbUkwxeAt4DPsGGJ0S94xOti8HOlsaEaFfB87ArP1LdfvHegTQAr1WmmNPVQslsVLI2BFxT_DAy5cLwm6poWwqmMA", width: 4000, height: 2210, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101509513412406843843\">Nguyễn Việt Hoàng</a>"] }
        ],
        summary: "비보시티 기준으로 확인한 싱가포르 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·식당·기념품", "평점 4.5", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.vivocity.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13417445462904795455", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%84%EB%B3%B4%EC%8B%9C%ED%8B%B0+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "부기스 스트리트": {
        photos: ["/images/singapore/info/shopping/bugis-street-singapore.jpg"],
        placeId: "ChIJj7TW9LoZ2jERQgNlXkKhASQ",
        placePhotos: [
            { photoReference: "AWCwydiY-4H-LX-k-TwHLYn52VHOdfpjCm7JuqkdAr0Rs_2FGRS_trfqy-Nmax4Vpwh3J5NwbC82CWgxHhhbkDuQxAV5kQRmGQca0_d4JJqNWODxso7y5meW3v2oHn9WmToB6eWFMZA1YZpLEIcyhpXA0i7zLSA053z9z9iE8xR0Vl6Z4nZc4N3N1am3Jhvdn0z-jEhpA3fjoAvB3w8oEsp4dynRM2BbkSiiHtmgjukcsE0yUF6cEdfrF7IcIMNQM_uO6tmOU7u_hpQnIl7W90fGSZ61Wv_Mhn2ScvbL1JKjrgg2ZOU_FPKho6DXdiFYCY-i6oKRRJgkpShxqU3h6LWVNYMBkW8lHAmUGWXfKcIt00HgNG5tFj6DeXoZCZZKNRODqCS7I73tV9NTjrLGw9ECtW-0a6CIRnWoZNTpNAHUpZbeRoioMMPYMVAUQ9na5Uf2", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104624573098882531336\">Mohammad Palash</a>"] },
            { photoReference: "AWCwydgVQ4szCU6IPA0TpGll2gwbg-zPMgtgdWMv0AbKNfrcNiavr6sNXaR5peXs9wvjbhzgzDK8PLm_BCBRs2TVozwjSBdT6tiHfMKBmIFzjy60sc10tsLsGnRcbGH7cVssHE6HZGYbOaOIfWaHZxFclGfTPrwj1HlUKvEXgdxd0K9l_5frGAmDJNh_3iDF1q2C0_VOBMpO6tepXzw0w8XexxrNP5wJ4Exn7M4-qsmFrl2dI8kIQsl7rBHTKzkNxtnmfDMXb9WxIS1ngNyw3OsieYRu-vg395Zu1WZrU2m0l1kVs2LXGcaUk6iTES8DDd0tJCLxJAjsncTqi1utnci4KC5bt_tcA5aFyV-wwm87kuWRrFKtwc6CWx8qTrn8LQTRYyXN1koM9EylXC_mZC930ReijJ0FvhwQV6uHpHfrJMdBkuxVEkx2zkDJM-IlBj0K", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104624573098882531336\">Mohammad Palash</a>"] },
            { photoReference: "AWCwydhYlJIcSX-wEkiLnC2-gMUmYcEyHCC8hWT1oY1DM4QafrZE7F6DA-9VWavkwI5nKHUMuvHPSSYBOGLDF4fHJsVhilM9aWfkhW1ashAWk_Hs3Dj4HmzjS5jYwZW-PSNraVQ4ltCPCF2a2iwhwsvv4wBtwZADR695MN_xLcCceD_Jr85fHCOEVlkCn5vdV3YUVkRA9l1P7iifN6QuWWt6wQQuApRyx1nwfEZbkFugDCBffuRrtEKfqlDBVD9EH-s2ZyIp6f3IxfXxOYOzZbPYZTW-DIC1YXTE1xjmYAuTdVT0b2HRbyHk21edBPceenE72lrALH94vMBX3KNMcoYTKeZSN1WUnB6ynIoM-_m9tySoVPJHXGIUzbP-UhoBQgalDiWjTLLgpDJ2AAcN8DzcCrkv_jf4o8gzUWVGJGQfR22wUg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108473924516541790427\">Howie</a>"] },
            { photoReference: "AWCwydg63-CiMXHHgXCHmrdaHNAIhhh2Ys_Xo4XBou18JyuZvBhXiIGnoq9gflB6ZAuBuC5vWz9TcQOjaj4kv8Njv6inBntfKB-gvpl_zFU2ZLwWdfXT_9a2i5b_u0qwV8zgxld4eaV_LrBRJ4fvBT42n_keWW4NUNs0NJpyRuhYufdNGGttcOiIlwwqyNE6u-Cw-oZi8nAjFFfEvp2q8O8cEvUc9jZmdP6DNV-GhoUdKjerK-HcmFaSbKaMm-YpwPii1v0Legv3Id4M3LBzXXzHwseq7IGfy1OoTMNAx6tNzPVYFy_M00NB4sVGja5F7Pg8m4DA97r4o0VmvM_igF-26kmHTNky2GIynjsn9CO5nJIvkXwvP-nd0qn0tTrVzf-lKHTuiNgIYbLB7Tn6gTSJI3FikJImXVWQ4q8-gIdG08EvXw", width: 960, height: 636, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115036470843463809114\">Aditya</a>"] },
            { photoReference: "AWCwydi5Kn8Tw9eku0rqlffIlPOwBoQlTFkycfQER6jjIy0xIUGNS8T5q37XktlNAwBC1HF8fHCE1GEYWVNjspu2OVsQfGDqVhVYLEqbUkuu3CqQ_ZMrx7evOUgsVr0KrYF_3sNsZ9zDpxqsOZyv-FPj-7CV6NDrZDkB-qbET30pPHh5s8-q8SQUHOzTLMwvCypluywrrRFEmkCNZTSAkb8WqiGUPX146LAeosuhF0crUdue5jkAZRk7oiL1i6u620AhEOm5TyWAwCQVm75z78wFEXwVCcZ7z5ypNVdAn9iZ96Is_k1c4LMigt4AaxW_bCwELaukg7phWBoya60uWMd_ljFD5p923y-bwxc54yolGFXz6hfA_wYx4ufVOtfbmKIu1dMRh38kL1ERSJ-L5Lo9Wl1LKNbyXV5GllyKWuSVOzqOGw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105852492611463485103\">Satish Kumar</a>"] }
        ],
        summary: "싱가포르의 활기를 느낄 수 있는 저렴한 기념품 쇼핑의 성지입니다.",
        updatedAt: "2026-07-15",
        highlights: ["다양한 길거리 음식", "합리적인 가격의 소품"],
        tips: ["덥고 습하니 시원하게 입고 가세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.capitaland.com/sg/malls/bugis-street/en.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2594532166765708098", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%80%EA%B8%B0%EC%8A%A4+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "무스타파 센터": {
        photos: ["/images/singapore/info/shopping/mustafa-centre-singapore.jpg"],
        placeId: "ChIJo7SpNMYZ2jER15JNmTE6Ne0",
        placePhotos: [
            { photoReference: "AWCwydjFejN5VZK6TWmGvcI3rpGSBKoUCrq7ruLpXRYRli7XircysH51MbBIrgFa1gn3jrV447blhuTA-iG6aRamw5QTLTR8BMBVjDHjxUVHVF7OhRzuHwEjcEDP0Erny8_BcJGPrmDxMmCW-PrOuxlam25slGMQl4Jvla5-O255JQ5CI77c8tejJraQM4ZiVy85XwGIftFoB_mr4abTdK-KDG3m_Taz0BxcpS9rDWIFg8NLf41oh-MVxTU_jdKYAneynHTyMR47EJAt0q9VY5s_MxC9RHqPrfdwcxrp3jpdt-V32RYVOib3jvtIkv7MKkV5rY0pbYrJumbJ6JBDpB7yByJcIaYhxLn4J_urWP4NwEa2LTgtzSmJGLtcIJ7AFEypaQt4nHK1Ci7ecDz7kc99Qj4TMfksD_u1PLaMNyDTGlPfuw", width: 3468, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103539337353774277041\">Arie Lendra Putra (陈维文)</a>"] },
            { photoReference: "AWCwydiGuKF9t84VCFyzskik-K-QKCwUXw6AEqmdzbJxb_M6yxM1Fbwy74STpofCAlawFJ1Ik3kU2cX1gL1x4hr_dZzDNbdDhXKuu8Em_y9J640zEfRm8MmdohPfw5sb2-WABnEBILIJW2Pqnj3kves0LTkNkAxpgCw3EqGwilhVkSM-bIcjKhShDfEh9alqF7HWcLF6o2dEkORHSBR4szi1PHDDbgEnRVoveGy-w3HdMOkqjUA3Sj2WqVUQvlv_4ZfW4gLJ-dadDwba31eSGep8-jdihzZdU7DFos1XuqECHewjZpYfGOTjQuRi1cFI4Q6ADhdiImz0fyuBNETtiTxXkEt_ep_CFyAOxgqXN7JE-40Xsq8_s2LELsC_kqFkR86U2qnIJdvTyVaoc72wvUcVCp0erQwpMYnNDWWWK8hUqSo", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101672364565015082177\">Satouななみ</a>"] },
            { photoReference: "AWCwydi9ierAb6At1opSS3-Qr26aPtFQYiMuOp6jtW8nqbHPMvmp70WTvWAxQAqMn71vfMpzeTh8VOd6MROD2pmMcTBTZRbfLixo9tHhG4j3EtOYKjLsL89a-76OkpRCWYhclfpc1ckKcOyXz8GFK8kpnAvH9CWpbw2WxGegYccWjP98bov-lUmJYHNyLtbZyBYS4YTY2wFbXpnQuIPjia_MSLxaDj45xj4qUsOgtNPP3kN6YnUe5NSLXTwRafHaUWXHMfayQIXaRJ096dnl4CU6a0UdiRFg2R2MPSz9q7t1g_oCbz-1-vy_JMIOZEB-Kgiylg2qugNs_H98I5S6V2kg6Uc2zm6I3y21VJ3EN1xlSlsIOY4epnZ1rIviu8MiO9qBTnSkUnX7zIz-3jCxIUFhw_NZQx6uj8L8XZ96xS9ErRdqMA", width: 3120, height: 4160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101009381817032184885\">Imran Alam</a>"] },
            { photoReference: "AWCwydiJykrT5I3ojvg3ZNO3tHueJ01x2FoKD9Jybq_1Z1XYEacnr7Mh8bJv9-8vWjt1PzeRau_pVvqElzEcQHGApLinlNQVob58QEkr15fcjP65KOjPOpm0oh3vevRfEF5piGLK577oOWgvVwRf_ednWkxU8OEdwyngNwVutIX_8sQ82_7fGDC2GEO7pb-p7avS5PRHKnsand2PaiFFtKxmXm7-vO21g7UNBa4fxymV3T1j8JHsbeWKZUb5l1iC1lWwCh3DrOC_puM1gqMT7Z6GXnu38qzaZX3Grqpd6ZhzurgCUhW39HyT-fKuWNWdqbniRp67oyEKfRKF393CP5XYwBv7ikc04Q-DajAcw5E3LIehp3IReF1NFGHIhOYhPL8hUYsLEHHTSHNmL3U5bMXrUKVZ18rYiSrH5VFxsXj4m-6j7Q", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110347902464816810078\">zhi</a>"] },
            { photoReference: "AWCwydjjKu0b6lWjQH-pG7qmjY1q7585ImDt2-lgEeOAk8RvPVRiKrOuEpRfzP67xvWxQKY2xNtAjbWdWDvhwo64u0POE1FKW1b57XkwHIV4eBKhyTNPDcnDtuI2yPtrF8cSKcTrwuNC9FmH-Dtb1TQK1GPVbGgK0eRMUu5wnlw1FXdCRg-JcxCpYv8nwPO06lQ8bWs2k7b77uvWl1mBIJ4RJEdBoeFSc5lWN7tWlVTBy2zOJwQDLPJXp5bEGoi0CEzAKPZhC3WZc7i86iVJVVQDFIs3F3Qf8iJiYrIyL_sdxboAGevLnueT2FmWOFznYWimyugWyrlINcuyGEH0-YaMdPHcXWtf2Glg2Kio70BPqJYuPO4yTVp2kYLTBiM5Ha-_y-t9G_cgk4PuZ8l9kQVb1mYt2uMxkDgf_yxxddxHC5-OmQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107667029504073728350\">Kim Donghoon</a>"] }
        ],
        summary: "24시간 운영되어 언제든 원하는 물건을 살 수 있는 만물상입니다.",
        updatedAt: "2026-07-15",
        highlights: ["압도적인 규모와 품목", "저렴한 생활용품 및 향신료"],
        tips: ["쇼핑 리스트를 미리 작성해 가는 것을 추천해요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17092631945454392023", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AC%B4%EC%8A%A4%ED%83%80%ED%8C%8C+%EC%84%BC%ED%84%B0+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "쥬얼 창이공항": {
        photos: ["/images/singapore/info/shopping/jewel-changi-airport-singapore.jpg"],
        placeId: "ChIJw3l-FL4X2jERw2pScvHQCbg",
        placePhotos: [
            { photoReference: "AWCwydhqK2_gqHLZoPeI0EuKudttv86SrLan1NcvqYx-_Noj_EuknPW2HQ9f5GqMSK8c4FJddvBfMAfQwCMljPvpZAOjQ7Vk62GxbKekPhf-KRKVA4UXoofyjO8ghwgItrn3OtFBMjp3d8yDmYGgduzp18WV0XiW1eHzv5pd90TdaNTRbyr06B6aiwGKjYHOsHeEV14UqK1AoUU-JbW22t_lA_oK5ixt47rUkicHbJ_iaveAdfH9Kls_guFvjsna-r8lBcbtJgmncuENIWwbI8qC37t5AYX5Llkh_LZVjdJTu7ArH2pCrLA0niUwSGkeWJuCEjxcTxZOjY-S7QjFTIj5kc1ECDS5VOD3MS8ElFUhkhKBCqVVE20hSxL9lXnkvsDD6K5VSt810WbgvN3KLmJizdp_rlvVgfzunqouBOs1xdIFmcLK", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104035162768875748545\">蔡修慶</a>"] },
            { photoReference: "AWCwydhUdrqalCVpn_A5VkfAY021b13KnjweCg431NaNIz_f931Rc1HcoBH8XfnJlwVXU5vH6pxVmKH6ap2YJ4FdZ3BoaI6B6J-REnkgUn3UiQ9eHIHN5VwrJeZ5fFr3DZ4a4aMLpuGhgJ0vS7yLhCy7Of3sXp3zpvTI5QKQCFHzOWvqPX8a3OvE_W4Hxpu4wtHiRiy8p2emGnJBhOcctm-lsal8Z63kOLOBkNUmqMbTKTXAtkyLdYzpzwxPUShaPjHQcJmSjedST0GiuFdfBT4wkQfCIWc7cWLH2GQARqOEUNwJpdIJMo-c_lbVo7r4w5nfSPd--tqc-K7jTFFhNGdEzwQ4sbn3OFFppo-KjqXT_rI1WoubpSAi9odwfdnOEg8WmLCfVn5IEEDJnIjv5WwSmYpej6n9G-HQq8H9evqrigO4UQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105825870681192180454\">Manasi Holehonnur</a>"] },
            { photoReference: "AWCwydh41vj-rufpOIRrB7wnTLaQ4NUMyQimV4We_NlBxRgvJwGZVFift4GYHmtIDK12FX1r486J00Uu6X5QJuG1iUEE0cAnxO_WHMXKw6FUdM2nwH2WSU0JrbIhnc6mjYO0E8K2PwuCBqgvrKA9OBFQyrs7ZBUa6N0Y5igm0yUEhelhJiO5xVPAjV94TmGYYz5V-vRJf68se9fujt1QOVW6XSQ-BNDMMJVQRpAjQF5PNHT6nZtABpiiYdoh3HnGLaYQ3tFYFFAEa1vTcm-nJStw1pvyVFbJt4kA58vVNGPMPs1Ml2iOIdzjK1jvldgL5EFdbKTcNV6v9ynJEALhuNhX0bGn0sAnv5itGx1mwKD10QBWHgqjD7Sn8QFVU0VchRt-q3o_bvHZpi8OhRxD4K13t55h8GGYmv56oWDQK19DxFHohOcI", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112840724023005537312\">Dr. Reviews</a>"] },
            { photoReference: "AWCwydjbT9kZbOswRid08--LHSp2cwGWIg9JJ-eY5bcL8BGRuKH087Ko1i4eNEtCibNtxzpW2E8s_85mi7Exf9vQahId3fq4dGCzG-MzfOlQOjrm483EytYz21PGDgEHTcyDiy6idJEa8LPHKzbfQ2mV5XVSQln-J3R0GLnXLN50B6xWykG3DOtgmcyRnFiDr7lRuHUf1PnU_tr9sCGdDIQedZvlo2RJyBR67AUdGKGKoaaBvWyvywIsi6bvCud7KeTetXDjCtqldCtUg3jGo2qBe281cp9HCpO35EwnIMBl6cke2WvZkLa2qnqXr-ukwO0RgHWvShBTL3PgpialBGYZwA5E0-51K3wYN2yxaqScDT8co_9oDfEpyp-Uwo5cj4mqKaSbXToiyNRBZyeehHOFSaZJXHJMKaIC84mX_mP_IacRQkq4", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115725392210756907778\">Soo Hin Yeoh</a>"] },
            { photoReference: "AWCwydindWAaqR8wlSh8zrQbzA5R9J20jUyeiu-6Pi5s1tvxL_1q0yQOu_y4yA6-4BN1thqFNb0rsU2RWZAflM4WXgS5daL3SJDEXWxErqaPB2gfBVrcSQclFcppR6uYNly8A1BDXRkb7QWyXw0NSVoP2aOlqB3u1M8jYfxOq41GKedxJWUKs8mhh0HEDGSnvlcmSzcGhAYYHuFhvXuRcmfYhjVoEEgTbgy6KEnGgvV0E_HKDEF-G1YeXezmEucoFnrwhKuzM39gUfYmIdCEVx6lMMDhrLHVFpVrXhiD5G2YRINzFExiQjAs26xi23nd3oL2cpruQ--4r-0OU9UOpikI68QrYMhgJgdb711T42CE39ks-TuaSezUwlMbXxvZm4WB3jcn9yJ09UOfk-IhO0_qohRY1B-vK5AI4q49N-vmRnPLAQ", width: 960, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104087532600116998950\">Eddie Lau</a>"] }
        ],
        summary: "쇼핑과 거대한 실내 폭포를 동시에 즐길 수 있는 복합 문화 공간입니다.",
        updatedAt: "2026-07-15",
        highlights: ["웅장한 HSBC 레인 보텍스", "다양한 브랜드와 맛집"],
        tips: ["폭포 쇼 시간표를 미리 확인하면 더 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.jewelchangiairport.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13261360313192835779", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A5%AC%EC%96%BC+%EC%B0%BD%EC%9D%B4%EA%B3%B5%ED%95%AD+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오차드 로드": {
        photos: ["/images/singapore/info/shopping/orchard-road-singapore.jpg"],
        placeId: "ChIJu_7mSJEZ2jER-vT-Nz_3mY4",
        placePhotos: [
            { photoReference: "AWCwydilRXlzmkFTEeskVCjecjjrDAsNACbtUOYMqgmxUc6e9qhFMFj2hXyudLCFIeF7w5rBn7oUqhM0zd5DOaThf6lhH5lRJtq6oXfI0ju7I4HZsYo0kVXJWT9WOnCO94rYlthCppCHMpXMlRF2XTw1vE3XTIU7Nzyr3DLWw2T0_NYrktuEZEqQiSmRT0WeNFLHBMLWejlYCzxF7_mbBhW_mESHhJaQ1PiWc3pKSpWA0DDvZHSzbRr2Z7lcxoFiG0nDmmfCSVn6UnZ2zg6ifS1y_nhT1L6HzhBv6jDvrd2PxEf1POyGDqEL6063pjTu5Aolvw4cICUrX4f8Btj7QYRUavS1eufgBR0g0mkWrIFVJ0pLUdYIsWIQqjjfQdzzi7xDJRY165kL84xNNvxLOLXV0iuRuzPT_5M1zj0KYTpPIwWEnjc", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114335722930186605720\">Pablo Duran (Pablotrotamundos)</a>"] },
            { photoReference: "AWCwydhtDqbChiT_mJ3kthfmFgxsbSPt88d46g_lCxolS6nQUbjXoFHaRtCAaGHQ7VldH4Ikt6PW1LSa6tY3PhZXCQ-NjwruIZUI-tn5bv3wTDpyWGLXEuW5qtuGs8ZTGlbj9iPSEsGbQnt_HRn-8P0S-xD8V7CfM_uvHq418iingnKKLtc2XXRhjStzAZHRQBIHrwJEORMs9t0l_Rv18bqx96K_jreTziyhQYDUp2zOR0xqhUhlq9BgB2zeaLrU2FherYg3H2NTwlmAMi1_tEmcluCREPjNjN3-PCiCEMRrNM3tDK15LrU0H3ScWLvk-vE1rqWKrj76jlXX7z3AwsWNPp85FgfPWHUTq7ELPcjAPJvsP7GTYYcu_Nn4GEs8GhBkmuJr6Q4aRwQ9nn_guWQr6pVYWH2uwJFbVmSeo3j0hAeDNX0P", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117371316634422607339\">Marc Lim</a>"] },
            { photoReference: "AWCwydjKV7K6rJD4V-jjf_5e2aH_ZrLuWC3XBdOlpB1qBJ8CzKF2Ulab-THy9hfs8EVmkepqtREPJoauKRm87KoPG0BVRpgr7QvwuHoQV5cr_a5SNOAJaV2XJuXddtS58IuadcMZUsCJcHOMJFV0lJrYXaeLWVpV0PIAf56UA-grCwS4lv27jMz_lGbx0Dmu-EeaY6t60zDYJCb_B6OMWb7_MHBiXc6bkqSecflxTcNEvtyQyyLRlLhis-cZnr6uaFQNwgVDq7ZkC4CLOUQQ8-YVk3b1XjL4N8lgtc88QVPIb4V90_X-YT-wFp_wuoz0JbZpTgo1gWiUeW7sELOZuG9Vb8bBAgi6IB_LeRD34hU0i2iT4G6f_ZD0ueCmD_4bZ-tlZbQEMQmYK_SehLiFxWrHhdoeCgxmAN1OO6l3vbkrfrvOfRsl", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101588336197881667460\">Jason Yim</a>"] },
            { photoReference: "AWCwydhgCRcLH5Ui6MlaxgUuA4NDs6GSf7RBDn8ttWyl3MCE4tQfxuDKcIYbUqZBTwT5Lj0YyHkfjqOHWOzu682zN4Db3o3RTlL3IRLty-3Mzv8R4cQdxu2Uf7r2aLYO1KIYY5FVmiBSHmOOMDtm5hkD8ersLk3bCTaVwZnb1ZVhwuVqvJ-LP8ClaXmMBhQlrfGBMlKOIKiiUC20VHtHMO9UUgty8pW6zatzT5icfJimlJR-Kh9a1Ppr7C9aopB3qoA--8m6-II47RhW8Kc9waVa9KQ5U4DhHln_cPk3aRM8JmYx8XGOidyUqp4MV9sUZgR5ohen_Xo2BE0u_uzixsLDpjrFvgoFqUA_U6ulPxgLcxJhSWilSUIMTxh-SvnZZxVe5jQ4HjGqW_iOmV36ttcSAC_6KgZy_3sYNMPo53QtxBbL7JgtKenQYz51Z-86u6-Z", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107706864360659116775\">Robin AGPC</a>"] },
            { photoReference: "AWCwydg0-LaoqP_FVhuE7pwzjFRXOeEaQR7wxWdWsKp8zVtjEU_uuEeLyFcvi6xSRrAN9-6V96H87LDZh0VNpEytLngGwVYiSnARABxu-bp0MJCFxLK0Dwisn4eYw7HEAffFuLueamFtvzGdTi7Ud36AjPnJegnBzwOwAGhhwOc2Tj4Crl2KdK38_1a30DvC_cZGkMxAnUOzgODcLgLdGImr2ufuybAozSsGojOzZt6QDOLAlnepuEZf2mHxchcDYnLZApgZnqUsRApNRVuWZzOKFL5VObSzWyJiIOrTFo216jN3bboD3rOILUR6xp91KxTlwgChdQAQCL0EzU1PvQtOYivnLiSZm6LcH79PH-8spMHHse2CUNfIhw1t_ESJlz-tw6NcRGX7Ss1tgBgHHYKa7xOXA9liXb08gCj4HxsNZZqGzg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115547351276037607529\">Kok Seng Ng (Paschen)</a>"] }
        ],
        summary: "오차드 로드 기준으로 확인한 싱가포르 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·식당·기념품", "평점 4.7", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10275515875716953338", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%B0%A8%EB%93%9C+%EB%A1%9C%EB%93%9C+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "차이나타운 스트리트 마켓": {
        photos: ["/images/singapore/info/shopping/chinatown-street-market-singapore.jpg"],
        placeId: "ChIJ44PnOnMZ2jERDhzYwdX5qI4",
        placePhotos: [
            { photoReference: "AWCwydjob1Kr1zQ50pnP2VLvMlJKhTEohz_oS8RNNshZsF-yZ8Tbm_tur2vnBchJ5my1uSE83hz3Yv3p2WucBdeXjE-hsR-LizpDgO-tmNH580Y4zqwdEzJocQT8LDzF6XP_hHTQ4gP9nsNpKN-AyzB32rYpV-_z-n1ncLxQJb0Uwf_ECtKDD42WNOPqvySObVmrZFpp7JqDQCf6pQuIVyYDpup7q73dkAJfC6kcV6XcxJ237x04v93tJy3Rl7VQN35WRB3qkR-PflN8SqBhSuKYpdiq3teGOUkLcc7p3MVrgUsjUYm-jgTvwh7ESRkR0DTu9iGq3YtInj_JMbJJyUuDnPMnOXvduAqrLIJgIFyheWscKci3NC7lJPoEI_wIsmgBjl6zSRnW7rqKimhwXznmm1qvEQj1R0jHBcHXfBlmGvaA7lyZWJUb7-GGv5jI8hsQ", width: 4800, height: 2699, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101555509400782823929\">The Global</a>"] },
            { photoReference: "AWCwydgIPAX9V0sUal-MxaBo2KB2yQOkbXQTINFTo6kTFBK6FZo4vr5wnbXAb-xM674J4-BTLeqD_oGrhWa98mOHsIK2bAigW3UBi4jlaJHAb_sS5wkhtOnfsrz2mmz4Ng96KDorEnLNWFedQzWIJZDVN1l-Ivc-u6mf-3Drv_CnBYUaga0ocXwJQcMi5D3KJLJy8mRn-Pffqq3jXg1ulWTrGp2xSBylGIgqw1s7gGyt7J3AlIUeOg-cqJ51BLTw0wrLlOf8CocmAUUhWQh6_zGC83RieJOOhE49xqovyW0L4GH9nLqOu2UgO3-dYqXT8opDQjfuAXFEKQS3bmhr4fE5jjCRmYF30-6bzAJREIXY9PIy5nzmndrTQXg3iHgOuHtjU28W_kT9M2Sxvm8vvzyW3iYa9rGlkXdNC45dftgdeq4dTm2EhfMO8QTGQ2eDtgV2", width: 800, height: 1067, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100288852313827917724\">Sayem al Fayed</a>"] },
            { photoReference: "AWCwydiZdUeglRt581N6gAqs7jTH3xtcqKRX0Fly27Xx18vRAbIEcAy8fBU0SsWPOBIUcoPO20VaVnvvXNc6CMeVgR9O-2gyQYDYIw0SWDG0PEO-l-exmOmKsitzwzyTCiyizPaUzNuMl82yKuhyZ1wcpi-AonNbdjHQrY44YbexFUNZxrWaPWknGVIhV8YIQA9JZYqPLSLhEx3BUhzh4xBIm4K-al-tqihvfHtP8OsZzOmpmSMnlZzwCSO8MIxcOdasjV-y3tZAGiibE90ycTXhKjbFDw4L4xnBYovICD2yisAgSFJlunbZNfGS7UIU0x3cP1tN-HkdQ4qNaEHb-cqqnt7eYhAzSLWzeCcSQCa3ZEwzB3Pcfh5fty8I0z9vrCc-Fb6pDShrzoRy5nVYRvzC2-_65k1YlOUR80J2TloFksdCCUdN", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105195314927409596687\">林思葵</a>"] },
            { photoReference: "AWCwydg9tALiUbL7iSneaNnh5N8RC_Xj_igCbx70xIuk2QYG-XVbWCUAt-yolGgwj45x1eE-evl7pJatepFv9U5h7tUiFUfXzfwl29sweOikZQ6WCOZRMJ8xqRSKda7Ax1-N-cEnxj0JT4oaiqwZtX9noxqwTz8hurAc6LZLftaxlAJRh0dpiDm0g6FbZwXakClL0BjQFGeqmfmvxIGJ_dpyqSRXm7FjzYBPfT74l3gkJQDJ8nNKd_Tg7UJtdrB_wpefhvQnKRzm2IIQck9VcdMz3Jt7mlisANusLVo1C4pFLdx_ns6x2HwRGJOOECMA8m-MgEQNI7h9ciYttgMQad6Ajy9073Uo3Y37RhQXFq5yoVKX-ci6wbdHUilyo8fT-O6PZQjvOlABD4uQN1i0OiqfZCwbCJrfS_yNeA5MZblhzfVv5OZ_", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113364897961945332182\">Kamil Šafránek</a>"] },
            { photoReference: "AWCwydibngRS3LiJwCPb6H1jWDrScPyeuVTbdQsoZpZ9i835dgLhwo_vBas16a9qiOmiCrO1n6SlQsClVHn3p6FHkTih3zjYWoXWps4oTSsQdAvWZkPfC10BW2kJumZOVoU8E9kXhGHimvYFEWm2YvfZoMH_L2x6PtDDtTuYCYvEa8NuC_EziEgQk516XWGdab-yyd5kR2_ONHW7XVdDyH4jZVGgeB9AKF078ff7Bh-rm1QMU5UsMZHEr7XAUSeMA-WgjoWOAQYcbldTj3FFwn0iejz73K3QMQhCwv1MDlaQgSbherSCRJAh7oIRtwZFfTuFShudkCIG3T1OAIF8LkcUk9guFvSAaPsFiZHysAFSSRalxxU-fVZEt3-mtinq0XRULje9PVMvM0y2iS-IkJCfEYsqoQGDYMNqPlPvb81NEbAuRA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111168622007156419471\">Randulf Arzadon</a>"] }
        ],
        summary: "Chinatown Street Market 기준으로 확인한 싱가포르 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·식당·기념품", "평점 4.4", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://chinatown.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10279740845948673038", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B0%A8%EC%9D%B4%EB%82%98%ED%83%80%EC%9A%B4+%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8+%EB%A7%88%EC%BC%93+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하지 레인": {
        photos: ["/images/singapore/info/shopping/haji-lane-singapore.jpg"],
        placeId: "ChIJyQfG_rAZ2jER6Yr2-WKP3mc",
        placePhotos: [
            { photoReference: "AWCwydjy1a5YYrqnE59kTp9aaKS7pg-bVd1cbxK1txX6ZUTYFaVxG1A9SuGcVfXprjP4SPFaqc9Ux9FpoazH97J5TIcAQNg41yyZQMWEHBGCb6LD9VinuWGwKgmVYJZo_dbd0lxbQqT--USb4f-MpQl5_HENkUNexS__vxEXQeU_PZQ5KcPnoOHllJAXPbIlwqhiPEv2sso4Tvdw8pFuhLuoEj8c1_D200xcsA5li4MW6Ygf1FKf-V3scvldpvQhMnvqSHirFJ62-QBd1j4BnBmjB570yrnehnoBCPhnLnPugSf3DSFAeoj7DT_j3LiJy1ZAlZ18AxlV4FAJ30O7uC1MECfsE4EenhQuLHQ8D25f7fvJHZ2RWsvky8uQ10pw3TeNjwyRXiVkIVDmviW04qY3hRDW4rkDZZRAz2Ti6Nct9YDfAAw", width: 1000, height: 667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117635400718004495511\">Muthuraja S</a>"] },
            { photoReference: "AWCwydgaSSiP9PfvwvzHKRD6X22TjHGCfj10eNQ1dn1WFg0PZxQopBILrbBLrFP0m1TKo5V9ZpOkkH7KbadCdTHkvUZdOCjIaYAlmAfHKVIF_fyk4uv2sqr7FFdHHVEYY2zCjF74rPbLEJ9IKg17J5bPAiBpSXB74nuDtr55YlVr5zw2PQ_nBdmG9Owlxb5ZJgXqd5v5QxE9Ih2J-gSX0CSX1iBt2MjKYQOAgg3I11dqg4zvtHj--PTmPtM3piClVfgHzs_xN6Xb_nKE_u5pY22N1L3b89SgkCg6U37y3qlZhcoOS0iAopEYIrrrGaHPByLF6G1VgkMT2VYkDSlQFRFxRsa2rLToYfnODGM0heSE2V6GC3g6fNVHKEOcHOplX4HrWKfSyyqvSw1f1EYZ02j1J1jmhgcRZ6pXjDsV7OCOHEJIh0H8", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116511762883343430561\">zawawa</a>"] },
            { photoReference: "AWCwydjKrN-4eHDy1MMopwPblFXnFwR1W1DnbfnGOSS2NtZursbZYcF86RyFdYIAfUeVs-Yy5yAA6J9V3KQ3L-W7uGEY-cTi1508SSf0OFFrsXgoxG4GtJYr2ljEEvdTc_49Hff50ou5owBnu5qbOUMVyT2kE869bGzWrBxv8UesQgpTlWiVy_yEjGUYq6P6FGeaZWjv7W9DeCwDjhhWq4YQib5CIBPgBBMp3SGXWqWZNagLzODlygb6Ou2lT69rArLbO_sJIWE5QJ5VlPpF_178iXNjzZn9u-mY-dq3byC4fpHtM3MJq6IgeUry4w_T1sGigPOYJ_vwt2ZzaMKItJLhwLfFxFy9KACVbuy91Oxjv9F-wypgkF6p04WtBAnlzZE8zhjhLM_O12mM8XTcmlMSNkvqfowfx2YVbkaEDTj4w0Myur5E", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100078562590206508820\">Chia-chen Lehahn</a>"] },
            { photoReference: "AWCwydifA6gfoe_9bmVXODMwm1RfVHGX8t1oezBCgtfV3pLyUA40CepYMtd84a1u1_TI5p6tCkPq1gaaU9t7VvUNNO89xhUdfFgLXWwnfuUgnkxn7NoGrSLjqEuvetGHpvepRqb8OY3Lf3ArYd3wUqw29LyR2fTXRBVyD297OtT-_KxtyGYcv8U1iBz7trK_-U0uF71pWjvdwe_zlSixQeNvG-3_yr09mjt0E_6Dm5VycDKM4WtOKgDHAMVqnEEgGju3PvmBatYOlA9Gs50jTMS6NhPqw9O0Q7mRVEjK082lI1gLWuR9v_0MlYFz4eqFv1U5V7bswyh24b9U12ZdeKwkoCz8pnekDYPn9SvMD3UQUxnZCVu0-d1HxVUDh7syLcrAYN4w9ypOQcM7k4RXD9YVfVtTPvHtJ94Z4hcZiV28rZDWkKNd3H8ZqlwWuDu6Nw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101391072747628297166\">Niklesh Naidu</a>"] },
            { photoReference: "AWCwydgxzyqGDIATvnIP8xXqKOtfbsN5Dc34b5ZWYZMkdVV_lILiO7uwQZfK6hrHYfCracrlTqYTbw9y9hu0EDLRdUv4nVgWjrum9wl6KFwaQxpKXUCY8Ku_2IJI_jjzzToJnCweyCb_2TFHw50SFdDhwDwcd8KckAXp1H2dPRhvxljV-cqg6LHT8GCC0R8CiTrIxrQGecdECKo8QHjsiMcw9LZlk-tjCJWQtnfOQkkWH-8dcRFJGuHo5VVGbjCGIcIV0KhVBhs2-zJYWH74nXyjSY1mtl_JR8yeWJ3dLKd7x9Jip_8rK77Caarf-hfpb_qllQ4NuhbjDCK3WH6u-0wGyJYMxOUMuZ8-di5Dcz6TzmRJY1i5xyw-1CoQKImLBDpYDp-Kzqsbyw24W7UJ-ir52AhaMsNCumFnXOrrF-w2Vv0s6_nY", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105558371280552733245\">Tony Mahony</a>"] }
        ],
        summary: "하지 레인 기준으로 확인한 싱가포르 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·식당·기념품", "평점 4.6", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7484577285999594217", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%A7%80+%EB%A0%88%EC%9D%B8+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다카시마야 싱가포르": {
        photos: ["/images/singapore/info/shopping/takashimaya-shopping-centre-singapore.jpg"],
        placeId: "ChIJg6KI8ZEZ2jER9W7OwvUXPRs",
        placePhotos: [
            { photoReference: "AWCwydhJJbvW6K_aA0s8MjhYjj0b2l8BMsQioNMi8wW8iOWPk2lqmSfflshnLPLePSdTYTIKWseVG6sCgiZojS5eNXo7-S8q8WwVFIXCM8l0sb7LYd68tm-P9hHdLBOixyv8WfdpYn7Ord1rnPFmhYZNbOYEFLM-HKFKTnWmaVTLUWK19tnhj5H0iZXhJVfxf_BkDQJNS1fj2r1t467WUC2TnCPMn7A8wYDv8_O0B8F1xgI432LxytAqHKg_HbV9MICIkcVkH9LgtiNBLurXCIIoAJ312A97lUwyyt1AogaGlmwbhbmqk0C3QFqTJxWhNXxiQ7GPnTz4Ms3d-OBc8s1DNegtOrE0CncKvkJIxmDDOQlOFdWG47upT6msqnYUDR8mWclP7Uy7ncQcyz4-vE-YO7Sfjz5FPoIr75TgvxkJUG4RRt4m", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103615691078490664381\">Peifeng</a>"] },
            { photoReference: "AWCwydgu6Fsmfbm526bNZLWSb7UCAL217k_tVqz3BJWoYQhGlguvx1BRlOJO0gBlbo0REGid6n_cykPPuW36MoNy2kLIXGjTJRATVZ1y4JaD8rMR0SoNV9UN163pFcTa87i6kOi_wnfhAnTUn9QjL6J9y3zSalgjiTfj2yfDtzp7-bcnqJZlHPwkZjaM0zYrRiFGG-B6ew5tYCP2_blJiZdN8fVoam_27GNtCFRM69420gYRwc34Ngu8sWUX9Uu2a5ZgdxSpRkNB3b7afJvL3iT-AXlg5hrAeSOA1AYRFfvnQoM6-o5jS2ILxbdwk3ID7zEg6aAL4ZDEv9dFSY29LT3D_8gK7bAFGcyhTQp77Mh15jQ8b9wwyPqqiHFx1eVR9I_xfEW-Qi5u51YXYesTfLNtfFrOr73BNMgEboHKlazuQ5aQfg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115725392210756907778\">Soo Hin Yeoh</a>"] },
            { photoReference: "AWCwydhrogw96JqempTa2aK1p8MQeXokcAuw87WsrHqY61Y3c3Ej39tn7SPjArf5ylqRrx2KxIlHqoIPYrFlT7TzGdyhxPMq2lXwX4BUWY9F6Po06Vg4_fE2YDw1NfKLO4mobcM0mspdgkFeGABwZxQa9v6YRTzk2xfh6WZ_fPuhhnTjL8rBKWwKjf75b-Wa_8eRSgRxto_BHRBck86WMuV63QUGZrYJ5Ex6HO4m06HOr86S9ngWCx4y6DNk-pAEen6p9CkEwF0_aZQaq0RDhSPG9LwuAZ66kn5GvG2eq2soOR8j1c-onsPVytYUM-e20fDLZ_II0f7KstORKCj41Yvn8OkJLmFzVWx6chEmd8TsU05QVo_Bby4965wkw5LuhWI7LPSZIfYkS1KNupHcDGQLX7QFBp-mG6QkRjPkoB_zYro", width: 3648, height: 2736, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101460107607368257900\">Ricky Seah</a>"] },
            { photoReference: "AWCwydgcRAKyGu5wHCO0D0kWo8BnjapOj6dm61cRzjusy3vnrOQlUTs-XAhkrX-ZR8XjD3AITRcQPnFandbkcWIczp7tT-jfOzFgk1rhVfnF1lfaS5iP465vshM93v9qKGBtzy8q8BJqQBRvt74JAJf1A8OA5aVZEn_SUq1cSXjb6w__pPcVVFmV_OgVd744BcSdAZU5GWgq9Ubo2tcKyZJqIOfNVETvlR3q9YjG8AolsbOQdhfnPB9qXYihjU-M2ajX33XfwqqC5_a38dnN8paXZj3flhJL7z6UzH36G88tAQ4v-rw3d0Y2mGkSd1QlkRgYijyKsp3nZEuVRusATQoGCxC1H5lcMx1N_IRh__BLP0aV9dftFosRpQ9zRGrmsDpwq02GU0ml5PEh_oCJl_HlwTP3P28D4iWtxXuoM6ipc4BMmQ", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112598854240446452449\">Daniel Sin</a>"] },
            { photoReference: "AWCwydiIQqp-zJkL0-dvHLbqsxDP_dyzPnwDgjKCUksKH_vha3qrzh23zBdidjzL6CpoCT2uc1dGUaBw_C8Kd8V_vMZd3m9wnsq3IMsBqH0d8xPnHMrtSwbaeTOPgegzZAMUNkQyVR9ZNJ9BsAlVy1Pb_OCeAPj5Gh5Tmc9jFpHTziMa0EL8kOIGINQ4fe_Mz1Z8jvr4ssHjQQ6LUPNv-4FYwkc8TqjD3zsG84MkKz_lE33Tgpq4OhPCxCNW54_8WlyCyTmriZ66N7-NjGCFslEq4JLzIzrPW_QjCa_7toYfM6W3TL_xZer79kzNi2sLiJUrJL8WVXm5hKAepiPG7oylPnugMC5XbDa0pUYrSn3LYxupHytzyZ0SdAFwwGQ1ZtjaHgKgG4iUbWV_Z-qyo4iF4w9oWYzohHJ_xAaF2qe88Vn_hQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116744234288575470176\">Budi Sanjaya</a>"] }
        ],
        summary: "Takashimaya Shopping Centre 기준으로 확인한 싱가포르 추천 장소입니다.",
        updatedAt: "2026-07-15",
        highlights: ["쇼핑·식당·기념품", "평점 4.5", "싱가포르 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.takashimayasc.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1962751356906139381", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%B9%B4%EC%8B%9C%EB%A7%88%EC%95%BC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
