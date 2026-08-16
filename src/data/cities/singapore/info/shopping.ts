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
    "게일랑 세라이 마켓": {
        photos: [],
        placeId: "ChIJ9YySoRAY2jERp62zayDnKuM",
        placePhotos: [
            { photoReference: "AWCwydhvDh1KYeWOpkKiPRuz8ZUUzBzkG_WR4nGb7OJc4baurJ4evWrtsPNoGpu_09CF7Sm3w9G6mEuCSe06_ptphIuw7GqQDm3m_mhc5ZfkaeRoXaj_Sa9I-kKdg1kN7uOdxN9GwqFi1ngs93RIMJp0Uo_jXdOQMikmWPKaAe_WpEPX8GldZZHJcJ8KT-6CZcdpkAKaYtWTE21tnBLdJ6RIgxoK_h6EMtxc3DSzfggh9HTmUjXfmCD6ca8Kmtr7xKeuFoCRslnd7rbsA2CCcnYI2vx78q9ObDbHEsw7F00tThc9sX9A8hvk4y3IBuRKEBR1eMIiAp-nKQcPKi2aAgA9ubzELQipV-lwE1bFDJwCXryhNBEZLDJYmBql8GchfEYmtETP5dmqw3G4IZbuyvg5zZ0qpJU9yim5AMQ4pZoSvZrEEuoa", width: 3968, height: 2976, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102466174965816931372\">Ip Stephen</a>"] },
            { photoReference: "AWCwydgl7NBB-dyEqB21ZNVcyUaLAlULvelVaE5O-Lqj_JCQx7t77b2RR74IL4k7QyC9Ru5Ke7J4_icmD0E3r5dkyEE6dejAgZvrsfXo5FfRlmNvG1NwhuzoxOjHmuM4zBqER0CWSKBTNFtSDOfYkXDubR6pVqmfE9JCDILmJ5oCLfCEM-pGh2zFOvboGOKXCS9zLeWOMn_POf_sspGiFxy_eIg6A_1f6r68_Y0FRGFwzx1vOg00ZVhZAgnETE7tAHD8okNze_2UOEpQ0i_EaPUrMi6JgTEqGW5WksxqnN7-tK3TWkD7nb_StEdqPRiMtdvG-tqqOF5qz9ZLc6Klge8C0PqgWctbPEhYT22pVV1l9SXH_-7xXdpyD35G_X1ctdl2QxC6HNSg5aiJly0NvvNXIYPEx7Are7KTOd4HY2rdHKnzPg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109195462123780257913\">Shunya Kaneko</a>"] },
            { photoReference: "AWCwydhqlh1sBU9raSKp4WTPD4UKlQAG96iig4NLPaIZnSECCsx6TPuSqhee1Kfn373T8qJMg6KG--eOc3Ggq0b2GIOMyonV_fpy8V0DchAQYYelEbyBHG6xsEQiUyykAO0Iv9LUndV9tfGYUqebbVCxw1eBMdMzi2oPP0xl0O1BFQZ7aoAKphMLlzdZs3bO9DXV9LNUguyBUhTSfNA7sEBBNVldAbntoB93FE8wgpvYsTo5cLHfYJKZerytuQMusiU1Def4G8eEIx6yh0B_A0rd1Vv3P-R2bT0nqUPwydp7FK2Ja36WpRQnVKvQr21ypFj3WWOBBwcxdwXZWaCU61l06XwJctGRLJdcaAM6YY6kDP-NycNd9n1S9OmJ-JIuLwebLGZYGnd6Fl1Q4js80GKrExorJTZ4vhAKjXEDmyLOvCrU82LVw7ywqYYetK5334d9", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109434407545627601391\">Kevin</a>"] },
            { photoReference: "AWCwydgttU9vddVMFBdjHGexULC5idteJshMlXIye_AVPd2JrXk5A_PHKDuTe9wt0k76rhIApg4EKS3OpIsxeINJ4Ow3WD_zAXHPPYrhAhOhozmvoUDkSAvrXc-qk2W54VsSGcJCQs4Ntxbo6kz_IUE2Iye2IMKTd97qv_CtV4iku9x8f5xz1A5VG4bBlpUSlmqPARtjLj_aaSa8H5wctiOGofX5e7Y3Scj-GAq36LJd9iyj88zBEHcMVHToU9eQDSnKBjVsYO1HQvUkvqbYGz4IAs7S3g-L8Xsf1S2CLeKuKwX_txZKwnZzRDDsGg8s1kV7i_uqEG_WgXQKQ2l4JCjfK_o9kBJmL-dJP7OXw4KvUW3XNlsYozE1YDtAtZ1jriUbi0HiBsiQYiOAQwj0CAAeMxpHfsogNDXghwCJiqmXBPAmPK-5h4EAwrA_--BBtV11", width: 1038, height: 804, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111712206057614262325\">Hardi RB</a>"] },
            { photoReference: "AWCwydiPhfo9UmGXdppapk61LMgs59E6sFz2n5e3GZGywqTSyabYR6OX4Y02SQL_qqQqaclEZZ9owHDdJNu_fOgAeAFDofa6iFMuK4Im97a5807cF1OfFSwRJ9ZPCz10-vHXZHK7F3KKirOq-QBBfsZjTJSazK7yBebx1CFHlZvwuvbxFqTxpjbQe2yIoR6gKt0lhQlzWSFpuMeUdXGoelfbQqYZiK7--eRzvUO2kT1NEjeSYlzbv32xpb6doxTtqviMUV-6owK-tzqy1lXQWAylGQmqzu9TaCBI-JL4b-uj0j0_XwPuLJ9-mjfeOqcBd4SjNZz5XmNKx_1UTDi_KTGzVnd4ZBWttoBZphVt9gLX3-xg1sgKnX8SDJzwq9MoTm3rtIbTT-V2Su3xdJDg9pPZ6hT-ZLX5JoeOfprJPXZCcq6rpoyGT58nKBPeMOfdGQRc", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100724947900810290913\">Mr Low (미카님)</a>"] }
        ],
        summary: "많은 방문객이 찾는 인기 있는 전통 시장입니다.",
        updatedAt: "2026-08-14",
        highlights: ["높은 리뷰 수", "높은 검색 빈도"],
        tips: ["오전 7시부터 오후 2시 45분까지 운영됩니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 2:45; 화요일: 오전 7:00 ~ 오후 2:45",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.roots.gov.sg/stories-landing/stories/Hawker-Centres/Geylang-Serai-Market-Food-Centre", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16369149922063396263", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B2%8C%EC%9D%BC%EB%9E%91+%EC%84%B8%EB%9D%BC%EC%9D%B4+%EB%A7%88%EC%BC%93+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "티옹 바루 마켓": {
        photos: [],
        placeId: "ChIJOU6y-HkZ2jERchOICIgjl0E",
        placePhotos: [
            { photoReference: "AWCwydgMyEAgGuu-BMORf6nm93tkhG9eEw80I8T-HSAn3K2PgMCMPBP0eF0IiaOjXOS3zMM8IqMnUid4Uwr-kZLd_LFoEKnHCVUvNTNNGHno9dTa-poeeVC8V06BVGIMvZKHyUCjBh6zxZpi194Lk1hEkUme6jur1-UsvPZ_QGEIqnLpXOs9G2e0treYag612uLNSNcbanqy4L8MCZrJqQBP8NYfkwQCwtoEcc0WED43n3ch4uUgDy6uD-q-vi4bzBt66kDLyYyEDU5baQypuaZr5Ru4Ki2pvzwFvRKgn_OGHWsfD7OYvsWAZ7wmJTmBinin3AYsLULptGFCFav_w3jNse4rZ9CoRAY9-RgPadobRuq-ubBVwRSuTGjSIAgKpLd9hdOcXlP0hu_1evhCRsX6ib_45HrBsuVD2HAaap91o6LMB7tE-ALbyopKv_uAv8pV", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112022352456001040733\">Daniel Arndt</a>"] },
            { photoReference: "AWCwydghdre5pfKnVcsopdDyQkqwWgC3mUDaq1AYKBFXqzB-W04Uz4cISRnf0r6osRadEak4XdmbVw7nvHBnYEUTVvqKfJ_XsYJ1vVoK4WVFrEg_9oT2aeL_l_SBmckxaBS-ZGI8dWSrVQzbat3PHZwKl8XigpxAOV5UxBD7XO4wolsxqEWOVS-Ih2J-TiD3VtcGAlGMm3eL0GWUeZz_ASi3E9DfoN-WybBYfMbeE1ZPb7bp9NFzYXN58utDZNu6pRbXZsr7EFY_tP8DTqsLMaR2NzRLA3bJQ1EUV5IPjgJhRJvriNOm50OrA9taTTrFuS1IYa54AK5ITR6UxT3_B6WlRxV2Nc9zOSFmLgW_aGUP8RA4R-kZMW75zaNp5vgSdnWj8Lk6cPTjyHyXqTsTKce1vhJvPJktQ0qaTU9findrp9jnpFi2MbK6F5v8acJRtUw3", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101700999008764657171\">Aroonalok Pyne</a>"] },
            { photoReference: "AWCwydjgI4yOZxi-M5c9K_19xHA3H4pGIagQG5JAdnfFLYE3RQznQ91Yxbyi9yUFhzvO8sFYTI0_8kVbDUsc5qh0ok_aProzDvaIFXNLJ6F48C8SaBiRRcSWuwvMvhnh7YfCnG8my2HiJWb1h-G1V4iE78Q7B6ej-7whqE9ruAVdPPwuxma6QHMxBR0ffUDRlHhqNBsRWO5w4qlHynlofyBTdY4xHEETC_Ef-T0FRjJ1LWAyE15DklftzZruqc46prEZYciwxN9v0ke7QRNtqUyJt7z3rCSx_HmISJbOBB8d68Y_6Sr61c0LRvtMjdAtDLnk8JwiLlPHkeYeNeiFo8s9UJWDuIC5NcsC6HwwjFLeDkFDB-R7aMR4zRY7fspJdtpSPQyIT26V1xXH05e8W8a-w_U9fVW8xxq0l0_SdP6r8z8vE4Y", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107816724295199727145\">Christina Michele Rios</a>"] },
            { photoReference: "AWCwydg-fvISTPYLUvtsrE1o_l3c7jJzcP2nlv0yI65juQ2tDwp3GCAh9y-8kBTwK9hMqA8qNqJrOsw-zEA9hcw9eUAj0OJ9ZGhVoalbSQO92IH_V_-z5fRbbS0wQIwvpA7T1fT2Q20fCK-qmJF8psUM24Oq96wNb3ROvOwrs7ApqOdQ2hkwQS2rfREHzQ23lc0NWUreXv12G2qc1OQ4D8LHWzfBMv1jmoPzejsGjLTkDG8PQH3JHn5m5LyamgzI17nFq5_2iora_RJTuUnAV58pS01pBk80DEY2k-Qh2kNlHnK8ra0tmEe7pg5lC9lBhlceID-NzMAHouJ5KW4Um6sTRujB3WQ04ZotFPo6f6VjMTh1Ksg65nZyrXv3tGzNrFcOxXmq0JP0tMEtFmuOnUQ2GFgGrLr9b5qoy0gyCGCJ0zvVkEehIpkt60W0v-rDTQh6", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112103854866816776797\">Ronny Tan Yong Hui</a>"] },
            { photoReference: "AWCwydiWRcof9JJ6ZCobCTxKhlj5fieLVSQ9HDL9_Ws1Ygr_KaLP2pydB2lyKxDOpyI7xjSA6UFhhLRYCpBZMNb9yWNxMPepDCOZZmneI-xRncK55V7652oaXkbjMlJeCbc5txH1duII3qjVGFHlcaa42AAe80Dfwnazddrjuui4ES0piM3LKmmhhoy2tGbvOrMwVY8Pw7qSkdeaHzslmBSou4Zw8ghjc55DV9rR0zGn3Z1mY9AxVLr3P8zbjNy3toQ2RWFX04Ab8pMzyg-7GKkmH642PJ33ow9Lrr0MyBAF-DXLp6_-bTXOcLjMPy49SIuq9zdUXLYRC33q35eJMjxx3jEpK_l3D-3Y865MU4k6yLa8te5ZflGmxZPB97-FOPv8WewCRlF5aSHdEAB--gVk9AM0Uuxx31FYSPOW1RtqBwE43aTL21TlK8dhmrf0dkPC", width: 3648, height: 2052, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115988323065110786349\">Chee Keong Ang</a>"] }
        ],
        summary: "부드럽고 향긋한 차슈가 일품인 가성비 좋은 현지 시장입니다.",
        updatedAt: "2026-08-14",
        highlights: ["중국 요리 중심의 푸드코트", "현지 분위기", "가성비 좋은 음식"],
        tips: ["차슈가 포함된 완탕면을 추천합니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4726285401114284914", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8B%B0%EC%98%B9+%EB%B0%94%EB%A3%A8+%EB%A7%88%EC%BC%93+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "레드힐 마켓": {
        photos: [],
        placeId: "ChIJP-DyGdUb2jER4JzqRS-ubV8",
        placePhotos: [
            { photoReference: "AWCwydgCv2Grj36SrhNCYsibyxDgOOiqLlpVOXVtGv7StjIDZUAS8l8qTM9ArokhPseLCMtLkhSR0O6NQC3f_bYH6hWgHK_B-6GzO2fU91USdsHbPjmsAj98nmb4-N8Tpa2n15Atw-5_MGTtFBQuTfymXGgNRDaQ1acP1vGVOUsgQ2Gu8zm3Hf7Aer7B9rhEj1cpy2-Hmb8V6er97YW6kma_qzAajmJD4tubZoW0_znLFxWMQZYlmBDRt72EtKnwHT9h84ozTLa15Q6aEod9r97h2ejmZFIv7maXcorxL0TSIY1bM_sAZNX4m_44_Kltn-QFnR3zj4Z5I84e7V0y0dOLYeCu878WLLQiGOELm3qgOYETOCUKjwhc_sRuGex0tK5NgaTtdrT3z56jR9GcAj5JPK4i6m3v4IcEVY4tnUbenK5Ofg", width: 4640, height: 2088, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102065061270160596315\">Snigdha De</a>"] },
            { photoReference: "AWCwydhqnXd5N1jLpmq26gF-kf-XtkdxCnSBDhd0ttvBKn7TFwro3jsRyqCMOUOn2OK-QXIjUWYlElTlFr-3690rCJ2KKaOEdVt0rBEi_079hd6ZUTAkEoFt9MKiiK1h1VbohAD0RDJ1WBP5_dfzUdwBsdmzIPbAmhfoQ1QwO51S0L2RQZOl6kIxADvr5sw5jyfF02er19ld5TlvFp2pnxx1qAvHipwTsWX2ZhcNX9LGvbH-qR4W12AYlYQ2k_9FEFofWOSkDiA3SZ0_2mWkrXO_jaLQugzE2ss3KxDIVXHHIfpjzOCk903uxr5JZVCif-A1Fy0sqQIzuai6GoCjAonwZsHMn9F34hLrqipsQ5P36kH85Zjun0YxPzE2BDzjbuy9ZJFy7VWJBwhf2-l8JAcFMjO4I4pwj7YnWmjQ-V23pMg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105696132163488045758\">박기순</a>"] },
            { photoReference: "AWCwydiqWnK587-jUQms4VnzBIZb-Xo-M9ZzTetKW0JbwTSrp3VJ54IdsvfMvvkgo-AiDlm0b0btqftz22ODvrXWXqKJX5FOpg1jqdMnkwYW4uSLN5HYfTQXl7rRPmCTdVsRnBz4gNQ4hiKWXEkmpSetFeS_UW5ssXXjSVHKBr8yyugk6USXL4MEvi-6DCQ0efgufBnqvCPDdQXI9aesFd5sIKy75qgDnoQBOrAAsgrwQ2VIhkludabYwvKuDozUibmQm0gOYE_p2kgtYPnSJy0IkQOW41Y4S6k-CcPXptd8yyS3WWQ8TA6xNrcHZCUavP8RUNIHmxjrVmXOCu7yMmQfW1zuJk9DePXhjh6M0ujT53R72eQxVKSYqj_IZMIhszXrpEjyyeGSnZ5chFLWG9zC-hVmi4p54FSPXSJk0hv8WCwF7cSS", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102744106714828380968\">Danny Heng</a>"] },
            { photoReference: "AWCwydiZlxz-F-9g09vZz_Ijpuv1gNpoHzXYeS74ZaJS9y93tmSHe2sfPPcshB8s3SsjNyxPLu1u440HAd1710yqVFGZIsMBm8pkAVb7f9W6smfu9ezKXRLh2Lv-6IObqBbIi4xOqncm6WvgsJoCxRaz5yFCrjsHYADOF7Q_dJdvmYPfqng9o644D0P8XNw4Y4yCaVtsQTHlt1bA7axXn0AN19EWW4_6Va0O_bqDzAXMMx6F6Ol39OmpDxxapvjTOj6MO_9eD61oFDRn9wm_e0FHYaoIG0pqhLsUZ-_yhtpCErclnmKyjsR5xUlRWk2UGBEyMiIQ3OHexRiYE4WArOIT9P6pS-Ab5PPqTYMOuhdjsUX4Uo4-vYZCi6n6MlL3FIM6QY6-MVS5vJeK39-uJV7bvdQJvjBalCL938dK0gBYjaM", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107557588153745055831\">Share Share</a>"] },
            { photoReference: "AWCwydgG4nh3fRQAXHKHeYihiCLQlPofUr8bfYyS8cPG8E0MybJwlF1T8vrORkMGOtku3wm1QAIrSKd7hPFMXs3WtzzYji8Ti9-tbibn-Q04-uWehao0J61cTadMdjzIIcBlKMVeD5cEmw6kRBeI_yK4Sx4vFBa4NW9nBRSIKGCc5Sc9gf6Bcp1czb7QRzcwkIwDiopqQ74_Jpz3pklE3cjIyS7ku7uu2BBVpYcW3izEThyw8I8PytSMLWn7irl-wM7T_QgWBHfvEW3rQiba_8WUHIwhX7W1tjn2scK3Ox5G9jB5Y7pR6yetdGvw6MEzJlWRWRQ_Gi0FCx8hk5KCJydEdcVrcZ5ol_0u1QbHn5ML_qFoC0v00YzEff69Hx18NiupPy8b1l-iKwHaH7W6xpB4qpCjsEhiN8rt-UuGoN1io_a8rA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111160623033515870694\">Masahiro M</a>"] }
        ],
        summary: "기다릴 가치가 있는 맛있는 완탕면을 맛볼 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["맛있는 음식", "완탕면 맛집"],
        tips: ["다바오 푸드코트 맨 끝 줄 코너에서 찾을 수 있습니다", "길가에 위치해 있어 차로 이동 시 주의가 필요합니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6876343724124314848", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%88%EB%93%9C%ED%9E%90+%EB%A7%88%EC%BC%93+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "칼랑 에스테이트 마켓": {
        photos: [],
        placeId: "ChIJ5Vc8XkcY2jERCkeymcZzTOw",
        placePhotos: [
            { photoReference: "AWCwydgpM87V8Rff6TeUIbDWar35UeBfqXYPMqPhLtltz0Y6aOtZhv5WaGMopR-zzJ8Pd7s6iEy2MvYWl29IuDvH-yUvMvdT_Ku522FNKArHDJBmXFBLgEuS0eyVcSWFW96wFLBo9FEl1QRPwDEi18to_paiK9y4og6zkWCa1Ptc0yFYUAi9j_fUCjN47g-Rl0yXyR_ZaSqMwJmp4Ahag9rqCNSFe3Q4heSX32TuRWMXZ7QoBNnKXA-WUvdID2HIPQVCg6ge_r7rcKp7z0zXVZ1t4xDSRgv6OtW74T2-Zn9FvRllh-b0UitsfDTSUTwqJBz5I6ou94GN2cQup0kqCFRtBF6-37EtqcJ3eW3sAnTkw2o3Q_mAVI_VM5JeigVo5RP0fGF3NIrIvA8kmn2NpQIfR72PcgEGH_2YMzLJsX4jk6vbmzS_", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101275638998259105662\">Chee Meng Oh</a>"] },
            { photoReference: "AWCwydh77hyaacFVwhiHDQgSQNY1UyYbosbwKtasgsgxsYrOwqt9p_3lgctaaLzpn4yJ9MDpojBbzVmQ-BWplKjgFHlhTi-OpX435yRKURNgPk1IhJDECponqcTxloXvaRi6x3ybGlYre-qVTqHNzW-XqKT5L8OJGef2_g5vX2KrporSmgpDUNC8t36UmEI8gaZnYblK2ukEXBEmpM7rVpB_PQsi-JdbzvwQSos7RDDSACdtgoAmsFAEWpiFeiPRnNQDRW39b62wz3MlgRAbUiQ07vuKC5xUExV1C_hKUcyBJrfSMtlSvx76wnz4rIaRJw4NT3dSa16qYq9DdJE0W6rqGlF76Rmw1sCIZ6tHwCYgnInF30iyeCvDkytBm8AmZCO00U3jTCcb2pxKGc6tckU-9ZNeePI0MRZF3BJ8E5Dwr8YNMw", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116129438839845015042\">Piyush Kumar</a>"] },
            { photoReference: "AWCwydioZ2yqFcgt9tZo5PK94w6wQpn-DyAkU1K7lBLWxlrkKwNal-7M7YJs9BRVHnny3aJ1mdpgJA873oS6GGFA1aWR-Em4mZOLyUjQBoRoQLP5TNNnV_HD4W_8W1aTZVI9X3onJHOZdhXv29YLnz2neAf7vfC2OoJwS3j1mnGp6se2Ba9yLJol0fyh2XjfMjLsINPPoQDcin5oFPOhU2z7Y8ZF0vp-ehma2QR0IkDxs5sMaZ9af4ElTH34P2UVz8qCs68V5EegM4AodLjS4Q4IQGqbvDab6i3LRMyqdE5UbewUDPS681vKIWaWG2w2w1NHt40H_6NI4NbXdK5q3ZdyjcaNNfr4-7VPRFtqGJCwwrZnF6CepHK4Yo9ymScWusF4Hzamt13wwb5qeVawR6y_ZLeYHu_ahGhT76K2i5ID2yeXru6d", width: 4800, height: 1909, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105162689256920416366\">Charles Ngoi</a>"] },
            { photoReference: "AWCwydgOxK2CGBmc68xRXCsY1LuJeRk8yWR7RJMCCWOhlHGEL50RAEWTXpYVtt6mu9VlGgc1iAPJt5liI_qW2CdLRv9wMssk38Etuo9pjIMOOZS7GetMVAjvp5NesVN_3U38EJw-cQxPrGYT2aNe8v4r7_5dvPBiLxLbrr7xcwfK5HkHcp_BosSGYTudgQYCiMCl7uXIqcvsLQZpOc-RhRB7Wd66425o5fXKhnY9JCgDhffKFqbf2HtVYBF8TEEqGWZVbJBAixXLT6m7Y1Mbgq8i4Let0CqL39zelJvJzYEAs2KvhTibqVd0N572ySs0qfZIKN3t8D4C225yDjhQ5wHS2XT5GEEo5ePBnFaR7AYoUBZAABuIrt17xNhRjgjJWiG7DHuW3YpyuNlyiF1SaCpsMBHkj8O21Rli7kx5nymnnR9svyI", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107763623537910443191\">Ed Perez</a>"] },
            { photoReference: "AWCwydj8sFjjjQGZqQNtPqy1u6iEFkS7n9KSrikKRmH9BdltHtkCpAlY7zrmZxipZlfjLpbQ2MnzrSqbXb3_8LNaSMrO0kKItfgBp7T6iivmUv_aMtZmpYyypI_SjmUD6Z1sqWhUAsye4ks1ue2W0RrL6C0wLLT0wvM7wATwlCsD7x8-x99g2jK3xJJqT9l-sr8x4qq_QbPG0s5Nt2wZ_3l81DQ2EsuiNTj9W-2u43hJ3FFgW1xphXfN5IqzMaFTUNkPJgSLo5ZQuHO0Rpleq_4o_dYnRquxGMx04VCykpTpJ36bUnWum2oUfb7Js6dMjr0y-8kw2FL54gxwYMav5J4fLHvAmcMWP4XaXNNTTnQcbkgWWm750iPYYc8HZ-tO3xbYaB3kjDCoK8jHCqiKzFKmAro_nE_Gv3kzHSU3ZwAZjc9PgYEj", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107763623537910443191\">Ed Perez</a>"] }
        ],
        summary: "맛있는 노점 음식을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["다양한 노점 음식", "활기찬 시장 분위기"],
        tips: ["아침부터 저녁까지 운영됩니다", "붐빌 수 있으니 여유 있게 방문하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오후 10:00; 화요일: 오전 6:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.nea.gov.sg/our-services/hawker-management/overview", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17027111588000319242", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%BC%EB%9E%91+%EC%97%90%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%8A%B8+%EB%A7%88%EC%BC%93+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "펙 키오 마켓": {
        photos: [],
        placeId: "ChIJKcCAXsMZ2jERJtnerWi_JYw",
        placePhotos: [
            { photoReference: "AWCwydh__xn2Evo7Orage0hwBRazXkwAYbTQ3UQUMSzZIo48_YflkPRewMVmev3k68R2Zjv7GsrCd75CYTeuzS0hmBIb4EwzMympI0cpNvgqrW1B9Ul2qfZUkZSSdjyfXwsqxSbOyoWhFEKzQA2WiC17MdATDJoWMUFsrU1jqJd7wKoYKq3DP-FgkCwiJf8mV6HdF7m23PCCC39Bee6IPXVgfLj5SbWhBaKQ3H_kIHuKVJAGN4QHgWboNg23QhRz6yEVhKMxGKFn3E3Go_EpRENZY8bvrTC_945Ad8rLWffWDVY5QHXfgPGzhShLHhKQqiPuQb35Voo3mBFmtb9Dm2KgB9dqkj1fBOwDVeXHgFquDHvQbPRFuwHswduRHIbkx2yFC2klKbeOjWSbIVTYVmyBX_tTOfdF2dt9CuLiQ3vZvHyNcn0", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114743192510179128601\">Andrew “Wook” Chapman</a>"] },
            { photoReference: "AWCwydhKgcJwqtpHnEJKg1W1i7k7SHyTNV8rs_F1FJmHS-rIseuIyRzDUuAyOEMKyAurvbM7TUNBw0E-OABoYY-9TaKUN0y7taz7rU-TYDi5MBW6PPPD-EQav7Jw_7KzBnVTm3p-13ewKx1xZKvc0MqSmQx8xsIe_7Fty10vqoBd0EP_C_84oy5Itg8hh3W6ypondCceEuwX32Ta3IKbNsTflzJNwYroWsEYhzCiL-O8PsSlFm0pX4kwhBjw8tmQL2zBFQ7nDyBkuFi--rOtyirM3C9Wly-zOQLSIjks2dev4TCjGUiRNARqxSvLD4G-187tcDCR0wlWEbi3SM-yX_7xb1EDdN-Fnc-ZVfRnnVJDzOlf-mM29X4hQGkkLyNr2UgVX_67aak9Q7vhLrNaR8_LAwYagam-ykm4uNYiUi6ATjs_JF5H", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112553970152620676438\">Ben</a>"] },
            { photoReference: "AWCwydhQ4XyI3dGXw66KSDmPi1k_TGw2xfHI74Jmc-LG4rtMwlWm63FwF-vAIfNvAX6nVGwSmyVkBxhfWma3Yog4zavWhPqXwMcQCCtIfxpBrYBCL9rac_5NWS43mjaF00xLfrIGQhSwt1pbQRhOaqT0HETaIShzgPA-GkBwPiei2el8oELWJiwxUiYKZjMd4o9LTCAUchDKHf45eL6ClXX2EyFkEC7tJyTKnGJWK_tC-e0Kc7Qxy1srZ7fCxyGefI6VrmJ0oE0lKYq2wcv7m6FC9YpTn2P_EzhFMJfMrimFAXvRcZTzi6WrtGqdKEDD2jN7Tk7JNQHSKRGXirjFXqgrwI7AUjLpGF7-6i-MYoEk8IJr2M-n1yLSZ2uTJgKNBXEVXh3NcFpZLHTOgPCNgs-yIDzYSw73Ct7aa6I24EpxhklG29opFb7GODBSNubnFHUd", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112457365583280311470\">Derrick L</a>"] },
            { photoReference: "AWCwydhom7svJsF6A-7Ew2-u2SwhWLiz96NiNat0HBqdkBFD4e6aCLQBK_kG3G4zo9I9ZEvjMrl-Xdn7D4lJYkK_ReyNbIygmtuT7EuGOy-NHc_ARdrIYDx2pV6O4kCwoN8VZE-0SSMsxSZcDxDiCCp3oOewiZG2kow5OfCfGLcfXYazXgjRnft7KuBUSUKGa3F3MfzK3GhQBrTElBrypNwin6nnkIygT2H3j37IY36bc6GErJpy7OyZbVbVm0YTP1TMhWGg5lOUR8vMoMZCeyeTSEp74LLH03utnEWSO-rSk-Y1_Qb8Bwh2ymUGo87S0kznXDUM3Yv6MEEq2PYlB_DvTpscB8EqR84qizd2atn_kXj1Bu8iVu0qIvae7SUZCUw89yWTuNgDkFKhMXYuatFnybqh5SxJGrF63iaiBwl9AgR9GRliawkpLDFuqJDH8xiC", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100625987334342106651\">Flo Y.</a>"] },
            { photoReference: "AWCwydjudZnFTY4ISTxcJChTif-_h5F12LrcP9UAGQK2akD8MCJPapEKKL_m8CtXE2t7u9RO4w-51aduJHHLOKXQbdaDNOYKzsSLALJxqdBkFV0xYo6roA7ZiHfyDgpkHmifKUEpHLt0qRvFRACX8ZoaaOA09CtG5TZGg00bN0-oFe44yZfyUrAoGWA4itFhz84Zl4hZ3w69Ozo_-DlhHOVDWIrdxTBKKdRpzJm8knl8V9rRjxT6QFTRmkP8yapwyGg8bVVfRkDQCUoVZRzIxilPXjdJdACDXnwSoQTSK11ktT3K_4nZgwKY87C_O5_DxsF1x2CljMp0ayMT2ZLyWoKYYJgItzn3q4rn7L7W0LEfAG2Ym5QnKss1cUjvmtVaOwmECbitqWeyjG0UFgcbnkSMb-wH4-FoWNa_sgurAfFQ-n4zQVhIjN3sQsFOSDCJsSaZ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105332509441800160693\">William Tan</a>"] }
        ],
        summary: "다양한 음식 선택지가 있는 넓은 푸드 센터",
        updatedAt: "2026-08-14",
        highlights: ["넓은 공간", "다양한 음식 종류"],
        tips: ["월요일은 휴무이니 방문 시 주의하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 휴무일; 화요일: 오전 5:30 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.nea.gov.sg/our-services/hawker-management/overview", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10098688195762772262", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%99+%ED%82%A4%EC%98%A4+%EB%A7%88%EC%BC%93+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "페어프라이스 차이나타운 포인트": {
        photos: [],
        placeId: "ChIJAY0ANgsZ2jERaYY81OR8CFc",
        placePhotos: [
            { photoReference: "AWCwydi7JGi9HDS8zUJUyeN356c0kPozwj1GPe_XiUlFwv05GZ1IrqJsw0B_mKfsPe4G-I3q7PLc_iSXaVYmkkTPBmcactnbvUsEANPqhirdpCigUz8-bilx6Tcdd31OSTVMtyDXasEJqpr8c8Y46MB0H9P8nLlsIgb-DE5dfwvtUnq07ceSDN1vrDTInaXOLn3I8zD5SV2hPDnzNn1Ay9zOOFNE-Ntd_vMNjKpobVvvVgmIQuNYxIXKrUHNgcNUmKCC58TNI5CvQXBI1q521F_ySd_rDBdDEsTrL1YbjS3WZoEmD7ZMVxMmUhbuN5owDLKLe98_UMyAH8DMNfFIbb-2OFj8Ucg5qibpDqUQzH4CPnGEdJ5SLE8Fj2O2BzHVximjgjFw05GNAvnnO84NQa6GnUdVWgLhi9dDIKOOorUf5AaYK0OH", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115901850397984032213\">Vanness Wong</a>"] },
            { photoReference: "AWCwydj_g66TeuCSGB3boZ55cpV4aPAuF9033nwYpw-KMI4CSyyCFyCfdywJdjIMWqSRhk8hyfyg91jMLG4JxNWLHSRKU8WnKHciHirE55JWEW-L63iVm0W__bhCvxkvU-gH7j-nQBASQtSWFqBL6oT2I43S2E_vmYH8qaz0SeKhn2r97VC3ROVsm4qQMDl7ZuQAth4mHYxH4sniScS17ylcQoQAGNyfk6vXYi4r40A7LCUqWsn9xPUSF3GZ4vNTdjhur_sqN6IA3VLiTYPBMEfhsQp0t9roAr312oTncnMCNNGIqZRB_K51DxPs7WZiGV0UD04N1oEceCY2Kv6-QxZqabM1HGD-ZWuOkVwT7-hkZ8BlwKDpDD7OfCyIU_D6RL7rhgo_laYkg-UFZx0v51KdvyOLIVuHBot8xqLZk6Tyd9atpQ", width: 4000, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107727549028398783661\">Vu Le Hoang</a>"] },
            { photoReference: "AWCwydgP17I6KfMODrvdnaSUOyr3tc6xrHXMHPjfl1VMiZzw-3IKxB3MJnbV2JJlKeC-mjjEniXVfVOp0oyVEx34kbV7HlqqFZklWkqj-mW5IlQ6dXHi7EhODscOHj3tcRu9hbgXyTuQO-314zJR8eM38d9tlm85IOINLxaSIfawNdlEiux1afnailypLm2xq83kIDPLCmQlOTJ5iDciYOAHin4DJul27yB2-4RGljHzKYcY1NPpkV4p_QgV-DRUM4fONY7HWPydQgEQojUppzej1QvDSHCZMaiYu_7lV7gXDbjOJf9gZqqxCLY8hGOZDNqq9xj9-USVdpmOzmOv4vuOZKk85p8XRE-o3z3NniGPNt_FmJTp-vUjqUkWuMNbCNxqm9K7wLZDKbHDwUa2WLAEbJ-nUaMCLODTLP4zqvsLRyG6hFQVyKHTerKQ5kWyiR4y", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114422003905509242228\">Angeline Chew</a>"] },
            { photoReference: "AWCwydgR7qjxO6QKypF_cZ3600_e1V0Lo4WTdOFcgPVFOE0ALBJgNnu0sFBqKbI5yF9sKSXIwSCFZea6JSmmH6OrboTwHiCsIRnHYdA7-dQo0c-8Od9c03UKVszbRyTodUXQyn9ZcTujPEc_sW176AcRUwZGKtSaYt9usnPNNUTSn3YLlALc_TBfWE7uzFpd-lvpgBxLLT077EIn1cVZrG7yJL2GgEOZpNVdWXw_XMHZQ4tv4GRUfqv-TC-mXoQcoSQzLjv5PSGheal1fwg1uH75sWUoZy7RhtyyQgFXZ4CV4xsnp81zLSlSfJChpcyM9r6SvhHuTUw08Y7FOpPYtQ7DzhomKWL9JRHWFTTgX-J6pVa8CSBy3bWFiL4HJ1Tr55ElqTMUK1G-dbRrCv-SYe8CKZDC3YWaD2hrV_RPFwnEhzmrKTfL", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100178836333366849641\">DR DAVY GOH</a>"] },
            { photoReference: "AWCwydjPiBnZRmbn_k13HWNOCBhLLzkwyJnNYsl0DTJZH0LmeGYsu-lJbh2yu5A47a7gJBN9KS6Ior_maVDqfa6IM_WSwwcs9P1fcEtpbI1jQULgD4rGQP4ripVtbzmfWEfYCzfV86COvzAP5iLTFNH6QgHC5xRDi_-yugc2dYR3ELa-qQDCrGAlniE0Q5FlGgS6u_Kpk3BKnJ94sFnd07sjfstKf7vqxrmVHcmRBr8g7zBQD5sa4_6b3BJ1VqLT3zRaN2pLum2ctF3Ns-cAhxDU7Il912ZP8xYDEEFDRfD1SXmKmLh7ZWqEBHM7YI1LJMs7hXEa9xMGfYw-WntQcPcIDFTe3VjH-vemEsPV95Uj122le-qTYJUZct47CGm2VnjaEW2L8aJU3EMPYQndEWMPgBHCD1kkdXaDeOq5pyXQ9amhiGcSs4grqwap0LDkbQMZ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114422003905509242228\">Angeline Chew</a>"] }
        ],
        summary: "싱가포르에서 꼭 가봐야 할 가성비 좋은 슈퍼마켓입니다.",
        updatedAt: "2026-08-14",
        highlights: ["저렴한 물가", "싱가포르 필수 방문 코스"],
        tips: ["현지 물가를 저렴하게 경험할 수 있습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.fairprice.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6271399803368539753", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%98%EC%96%B4%ED%94%84%EB%9D%BC%EC%9D%B4%EC%8A%A4+%EC%B0%A8%EC%9D%B4%EB%82%98%ED%83%80%EC%9A%B4+%ED%8F%AC%EC%9D%B8%ED%8A%B8+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "페어프라이스 파이네스트 버킷 티마 플라자": {
        photos: [],
        placeId: "ChIJq93BHIkQ2jEReDU1CrhkeOg",
        placePhotos: [
            { photoReference: "AWCwydgeHYd482L3MKkBrHG_VaHN-FpEQW5_QAWR4X548R6mk8wXyaSQmnS_DE70WEzAOjLkPFwmlkzW7z-VJgsxQ7xwbfhShBHxpWW9m_HY-pmsdEnD3Dby2R69q22EkTESTlaTIt8L84RPSXOS7E90d8lEGM4Qw83I-XcDuKZud6t6XeJg8AYS1dfJmdBaj6oqWtkKgMCfFBBP-knYIXpafZ5ghZr8DBcgF4V8LveuGBoJTiJlGTISaozhez6KV27PhQDPmkBTwNH1chjyADmSqlfsd5mUAYVE6shFDpP8m_y8BzCVO83OvF9slsgdoP_UjnH4A99d7sik-aIyXIqQq7RzSNGlmuKJACF0Pl3K1Ch0tuCNEHYCOhj7N2JaBTGIgNMUAKQNkInVkxDSEN5efr_KWpwOPfwhMNgbElqCjz4FAltY", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106106471613940521224\">EG Brothers in Singapore</a>"] },
            { photoReference: "AWCwydiZEu8gx-_fx8hZRV0kQ6XuN6K5LtQIaiH3sCWNdm75lDzb1pyOsmBl4H-IwLzKbDS8YBmzmxwv1Ni_1Rord_zjRxMbaIkbIf0w8-QVO6O2OuwWgxpoVY-iqR2ECXqbs9g7_DltFC_oiny7TdsLHqtqJ5AIm2yMi9g67L8NLarSvPlHyCy1Lsra-T_VhUSfArnR0lQ6MISouTTs557ShoWYbgyXjxfOIuzBebsEw4HHIbVb7hO7vNQCSRHeLzhZwAqjFeiXwvEAf_u4pDowwCyKW6qENvnwJgDD5Lthf6CiXJtqILs7TKBFA65QXxLt41Q8z18m5MZCk_6D_m7Z2Hu_JQ9ppe8ikCarqJSaS6NTsVB1wgZJcHFlIWEOuKTVbV_qYj1YwTM13p9sCZUYgeQYX6S_dh7c2rsSdtkgwL-f1NV_W03olrv6SWEt7w", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109116338207654158938\">Aloysius L</a>"] },
            { photoReference: "AWCwydiiou2EBQkDgyftockkgNmIsYq4s0Fg57v8v-hR2WQkRpm6A9rEDlHKw3saAS82FoR8lUoVFonE5IsZUdDvaaRvAxhCJbMVr4FqZCbpHo6Fr6M9dnh2IlJLK6wTDwqWFcaNDd9Wze9OgyJFSNw8g2UF_Z-Zlo0mQKrCSBuYU0QIVOUoTDVU-8FkLhDigWgJ4CR6I6Zoysp5XhNrWMgUPgU2P8DGSangvurHExNdaqtFafomvLNFlOqdEdOKGPkBSgP2Js7dzBqI22eBsZWfE7zsfFyOdxca7ih_nARYWpWDu4GCUbAuhGJP07wgYZ4NwVVN955DNuONESKfSNC8AQxJbEaOjrdkxsdxrkJJTgE8UScAjFEe0aUNShuBZsQeWl73IXNL07X0ga73Yn5ZS19cTXVkPnfDrCoAG04pqqryuPwM", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110942438124179436999\">Sweemin Neo</a>"] },
            { photoReference: "AWCwydgAMEQ_cYy03p4GZC-xGAcmQMwnBDP5GQHC8RdyR6MpuqDDG1oC2I48n_B4bjqNhEZ7wQEBi_UFAc_QLH8u9rtvu-98FjmcyxJmEBBlbylJD9EIm7x6iINH_xeIswpFQVJ2-jMu7EYtfzeC2e-9DsZRMh8AL8qwlB1U8H9N1tQxgP42tGTWscIAzaJhBqtl7E_qu86KrriRvJtxz_MCwyFfHBFohawM668w4flt-zGYmmwvq6d0pIm98RhMXF1SZnLq5JEeJe1TnZ_wzzMFgjlLiuQxAOmu6KChQ-Sf5b_J1K3ZNkjo7ewMNd3yCEkmS6ZGEQNEsEiyxjjw-JLbJg0n5-fN6cxfHst0Ak_F5zwhD8K5UdtOrLUDbH0vohzueRgcxgel4D6zqDvOf6gYxD_05mhjuih0nJ_WfvjZJAtrLQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109434159714049459136\">Joe Ng</a>"] },
            { photoReference: "AWCwydhd_qSnHbW67SvQfPJoSh0E9b0wi0sS48dw5j-vVme1qwL2oPf7ppqGfdHCYnrrA1ED_Xhqy1diZRSBmK0Ke8v-AsfGY2Vwyp2tco6TAftaKzXJRdhhkeOohe1oSFYASOjziPFPzYSCgrsWQ47VJDSYptcVp9k9cKzzXbyEAF5b5LYEb_bJXkj2s0XsjPfdnJCg-vwqZ5tktju-rmzI8YGnZCTL3LxBI8UxAMBPXyI-Pfhr68tbPb2MzP96bbREB0pf2dE3M1O7WZ8qZmesD7dDGcj2ddxxR5rPHo_RTO9rfJ6JTix8KOpE9yy8qOqQUBnXRyODLBFiuzWXhH1VmV6RGFqvQdTXWDP906axUvJNTBthruFgjyuWdpM8MKU8ZGA2WDtIZu41QsWjX6AwOmrZNJmOCMq8qUbqgVKEhkPWvA", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113015523826545524096\">derek neo</a>"] }
        ],
        summary: "친절한 서비스와 쾌적한 쇼핑 환경을 제공하는 24시간 운영 매장입니다.",
        updatedAt: "2026-08-14",
        highlights: ["조용하고 쾌적한 쇼핑 환경", "직원들의 친절하고 전문적인 서비스"],
        tips: ["셀프 계산대를 이용하면 더욱 빠르게 쇼핑을 마칠 수 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.fairprice.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16751249555612579192", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%98%EC%96%B4%ED%94%84%EB%9D%BC%EC%9D%B4%EC%8A%A4+%ED%8C%8C%EC%9D%B4%EB%84%A4%EC%8A%A4%ED%8A%B8+%EB%B2%84%ED%82%B7+%ED%8B%B0%EB%A7%88+%ED%94%8C%EB%9D%BC%EC%9E%90+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "페어프라이스 오차드 그랜드 코트": {
        photos: [],
        placeId: "ChIJ-RepEJoZ2jER4WLO94msolk",
        placePhotos: [
            { photoReference: "AWCwydiu7_dROhkIGLyDYU6ojJjDZYgSy8nDlnwY9ihjpXuHWHtmH7hZC4qu1VFDckI1Cv0K2TL7pseHQividlWVYHSBWAUW_CNfzNlIq08ksNISJe_Dh9DXu9JPors11-ISicBrbAd2D9J-TrNOpMpRbjFJIm-zTRVoyseOucAD1n_We2lOhXB_2MsQIzuQTHyCWK-Dmf-JUKjLLkYvcTzCuHZ9Ut6iEKHYQ-nGgLTqta2D3q7h71-rRuafw2H-eMBQieFCckYH8ax12diGXdmfVQJXg9ijDzWBYF1u48z1ArFMWXmiA5R656CKLxBTUNBWL_ozawWtet9t21G36SStbH_EcDOwq_TPjj6_QO7aDXSHgYO_5SqiYGUVG7ZAZisQen25O1AQfpRiZZj9aQdVLf5M-Anej9HJdYRu0SwOx11YV6s", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116361384050526627082\">FairPrice Orchard Grand Court</a>"] },
            { photoReference: "AWCwydiIEtvQVXIQjAcdGB4R1Bbt-VIiMw8F8xFawIqf0HVCg-BCbO2AUlo5tA4cdV4XITLmrZlX_qExr7gkZFeIcNYKd-3GPI0w4EA9pxJpYmDdniWP5qI2SYkUZcpyWt5u-cORdYVuZHg9ksvkye-nP30WgvKb_NTx0z_E7lv-sWT6sz5XjGr7Jo3VlcRAQHCYpY1b-6KTcE4XYC1rEF4RSYm1CQpCD4VwVDH9SK7uQRTKP8RyYoGBnGJy4j1UvRcvk8GNQqLBRri_QSYusQbovYww_8r-vfn2PR7oAosoSAEKGlZ_O2FX7lKF1NR3PCjyppXSYL0IYxJP8S90MgGeYk-4TYWQPGEhstZDn6ICgyEc0KQnhUd8d1N8b683tfyIkQ0FM4p9CxPZSeNJZU5ClgJHGBvFi40Dtj6xeYAEoJbr9Co", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116361384050526627082\">FairPrice Orchard Grand Court</a>"] },
            { photoReference: "AWCwydhS91WaYh8y0BA88itWCMkIDj0VbRFK92y3gAAdmI8-NVqfuKZJjGPZ-BhuM96G5GnHbVnyiU5wqI7ro2inVCf3sSDBKOK4Lk6JoqNOPC_ouwmh32E2wBY87b9MZtXyuSqzP03lNhnCahyQzNWu1OJht0sTn8mHF-172tF696O0JqEFbUvao1SW1tYvyXr1MJPb0FBvjxYsc_CcSqLDnMaObB1rBy1iJjHiuUXHWv6gqRT8Ez9C4Zqzjqk5Lw-g9ouWtj4_dErorRCR1ib6mDOqJ1ArnptpMlbe3Y3LuS23xNKSvIYlMVNQkP5WfuWhahC2rAFVgOqhBV4sfwnlGTGmUQ6uP4lg8-5SKzQyLPPplZ_E568aHkOyJ_-gsjHeUtXrpLDj3HbM2I0yeKDcOuCJzbwMvkj1XUDQln0tUGPsy1z3", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104204293008932406165\">amriq ali</a>"] },
            { photoReference: "AWCwydi2FaCGAglffLPgeJHdOLzWUmK1-ZkBT0Ypb2YHTIgiJp74emRRLM2HydXpm8e-6cNIXpbhP-EWU44Dx_ZjBpQOgw0RqwkCfMDtASa5RZtfL13iEe67VmTgaGvXzkltomAMUex3cd31Wy6tZFOBO8yHxtKpZHtCx_PQSdCVuFhMnUuJINcwl26sLXV7u0RUyjLi1ma-F_x7FgHsn2qe051RVsVcP-BoGCghlgnYJkETLomIZqgY489e-0gmQs9Zp39JKVqkVOmGTlJUCGIKmgYyOJ7aX916U4GG5yBIuxhvHzKS82pdgI3jGvjsL9mZOXg9daLDW6-yLCyaCVc05s5y9oS2bZRXEY81ErFmIjUQbnMN_gC53OtUN6XSjsJSMM5HJ66pveaBNUGSO4Jft5ewIj_UqVqoD8IU17BCQJddo7gT", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105170185011156963111\">Raunak Gupta</a>"] },
            { photoReference: "AWCwydhGK5g2HalcxcL3BXTpLzWq3ygMWph3iR52C58f3AiGjEr2RCS1bGxY-EqUZeYhopyO_GLg4l-UMy31QW90X0dt8YY6xGtDMoC2z1BBY2j_-LKGqQCVaorNv01HIIBapGkwzCfTsYhZh41CVOvw3mJZh4kKxjvuHS3Nb5gOjHJrp2qIgNgSWrOC1m5aUJ3zbLKX0nyINYTZkPUea547EufkuNt1jcOwYi9tDTZgKJidG7xj4-ltbNGgKtx0lGqFfraOJZSIUkBbOVAO40sw3ddm2l5cLmj5ZqfHuGbpKCHkdAbBq1PTcK6UYhsCuR1Xrrd7D2PZ6fdmtVuLOw8_WrpWZIh_ReR2BL4zq8wAHIoSo672b351D94wIlnWvL6b9pyEA-1hFyO0NzDW3PnqRCSNAmE21eemXfEYoXHa9NIfCXTHXPseSgTHMyMorruV", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103217497483603238481\">Amber</a>"] }
        ],
        summary: "다양한 선택지와 친절한 서비스를 제공하는 24시간 운영 매장입니다.",
        updatedAt: "2026-08-14",
        highlights: ["다양한 상품 선택지", "깨끗한 매장 환경"],
        tips: ["싱가포르 물가 특성상 가격대가 다소 높을 수 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.fairprice.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6458914524170707681", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%98%EC%96%B4%ED%94%84%EB%9D%BC%EC%9D%B4%EC%8A%A4+%EC%98%A4%EC%B0%A8%EB%93%9C+%EA%B7%B8%EB%9E%9C%EB%93%9C+%EC%BD%94%ED%8A%B8+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "CS 파이네스트 골드 파라곤": {
        photos: [],
        placeId: "ChIJl_sOMpIZ2jERxxBnQVJpECQ",
        placePhotos: [
            { photoReference: "AWCwydi9yad-ZSu0H70YTiQI6J_moebGgauKQ8GUTGLufXF4PcPwoxshX-oeOcJxoxpL--S-gyjLzgFrj-scDNIKDe-ajX7YFAJDxr-XMIp5VAK-3oGxzrk-Rr5Nxo8Mc5Fg11w-fzRumlXzxxiFL0PkE1d8nmDYFZIEsebBQ2rAHNTmW_vkDXv_2z24jX2XYXcQZhqJaew43NBKothr4WLKwAb6k_Y2sL-audWBOnWQYo3RoWYP1as6ffg36UbYATsuvzRB5VD5CJIw_3sEejwwHCuYMQdfAiVHgi2FQunlEmL3cc4S8bK72vHnNNXszg5nF6xWc90u8SUjOcFgdcLNEyPkG09xZUj1diLbq0wSj287nRt5nTWJzU3CJqqHNLfoKgenEN9LprDxh__LxhH4OPhSEyqVwBsE7EoxGp4XK1K1yA", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103615691078490664381\">Peifeng</a>"] },
            { photoReference: "AWCwydh3jjP2tiOPzt71le6LdzIZqeVX1suUU5Dmg8hqePNw9PAMp4tF9QEEAsPCInmyHU7ftN3-5r8THZG47B5wbsCGDnML_sK2ZVMVRBVInsX2HsZSMfphMQEJyEm4RaUnn_tLJC1acJLoGzlz_oQNHJcT1yJCvUa_M06Na-HmbnVQEZYRaQiOZH9wwL7-YiTyVfG0qw2zK7_PHMhv0OtyBcTjkaYMnspouQmFsU2JruR7UXP7YWNqZTxtW_XTS4oGIR9MhhUHb43bSKG2ih1_dA0vnQeFRUKMRWj_Kl1FNu81BFRo0mEog-LzyE1mrbL4xfopyG_4sNV_CBhLNJ1YFEiMRPitjFf9FGDldSzfxozhF9qn1lCuHz7DeDJKHJIOEGbquFyn4lIq_3OygllNj4QhR9Pe29JiUuQVcuPeRnA", width: 1760, height: 1067, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111070066409013703140\">CS Fresh Gold</a>"] },
            { photoReference: "AWCwydhPh6RFC02dv_Y_EO3Db8xFQZ_6hwuzEOWK3i8CqIgESuDYNy4Pt_n5PfqsIG3scGax01Du1vbb9Oap-_fr7tizjHzFV7dmMQIja9zqHoUUj2j9kjHTwZi6vUNwmfeLOl1tIdzMpJAeTnu_0aiTwzwPA_VVJp6q5nP0rAQk8ZJa46NK5nL7LNTs4vaj-akaUwTQ67NK5nJc5uaww_KOz8LfHoIhpN-Dcp1UDdzVhdKNo4GEbj9Vw7H_JoTOq399OsFgQ7QlR8DEUXogABVAFPOWpv400RAvI4_6Q_TCOZR0QXC3O42IoTh60TC99am-4w9WCJI6BlZu5wWfMV_4gIRLvRU8wmyQdCRyb-9QPZQ_-yltuHoaTTj_JcJUU9ofxDR_WONqGEp9S-nMZe3_k8hWZulnQMAdEHlEKftU1mJ2lun9mkp05bMH2_9K_oqS", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100240034269455071251\">Kakens</a>"] },
            { photoReference: "AWCwydhwDm8BoUjURZRG-X4ijJRyxTkdb02n4X-EdyFO6K2Uc_nUSshdyiLes0Qimd4rMyFNunsUy_xD1Z14kV6FV5RwVKOZkSOsl_-iksMIAfemNbIVLfdDCSoeEZz2roucB1K_aZ7GyqSpTu8cnsXvKag0mURA1LgJYNKBW1BqcGJ1CIl-UD5Z6yhRWwD8H7nAz1dcfPQftctK-l7aghoLs6vV9mSwdvoAo_g8eZhkHxZKxQ6VQfk521Kid5dmtJ61nLJGNq4apiSmzdPn-X4kBzmvE1v73lCHlMtbsBTSIlTB7yJl6mbRFAXh55vf_34M_CuMfY0WcOTwl1WM15YoMeHwUXP4nKQRYqR-tcIRiXps8fLwMiI2rppxQHsuIhHsPkizckdHBL7qB5vFr2JJ4YuoDkITXPrDMt9YEaEfizQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100990702926977832853\">J J</a>"] },
            { photoReference: "AWCwydjWkdT52jLGr26y--rej1HeO97m7HvFMUMxb1wu-GlbnxqElr2O9-lvVK8WETkHuY3X1vuj_SP9bhxD6TmFs7Fjt6DAVDP6RBWf1Int-LSQOLW3s3TV1Sc_te8mLhj5fO0g3B9iJB3uaY3qm9EASg4wYk41ZeJ7G_6YXrZ5drz7D72c6tEk9OVhiQ8m-Zjuxv-q1AP3Yt2pZ7z3_qJCfE8lPAJ-CHdprPn83U037oyrg-6cmYJbdeROmItw4NkfR9qUcaNWu5cTrfSO3KAdxDrj3mR8awpVwPGAbHnc4_lBWlvsnoyqZM7TWI_e-hIMAN3VVYr0DEdQl9Cx-rfo5xDbFVceSAGK6_scYDPDdK17DuGYOFhVH_kEQawZjC4tdbCwrZJeK_YZ7DYZxPYD_bGzwCL0h_5cTFVAYLj0SUCnFQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106081966351615781892\">Lindt MM</a>"] }
        ],
        summary: "고기와 오리고기 등 다양한 육류를 판매하는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["다양한 육류 취급", "산책하듯 구경하기 좋은 환경"],
        tips: ["고기 품질을 꼼꼼히 확인하고 구매하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://coldstorage.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2598692786998284487", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=CS+%ED%8C%8C%EC%9D%B4%EB%84%A4%EC%8A%A4%ED%8A%B8+%EA%B3%A8%EB%93%9C+%ED%8C%8C%EB%9D%BC%EA%B3%A4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "IMM 빌딩": {
        photos: [],
        placeId: "ChIJa2nb2g0Q2jERlcUMLtMVyoI",
        placePhotos: [
            { photoReference: "AWCwydinWXWutpfwjkPd4ombLnO1rlS58OSDM7HPtQkX_fY2S-U5ibvOBKGFkiWe06e7nNhFCVkdtQ3QoOHFLVEhjvjQXssWH0YIlFTU_bfP16Aeesmrdle_M8KSdzNy9h4uCc61rbZ5I-L41FzNZBvOEAVBCx_aO_xqQfREgVefSw1rE19vZG7po_qQBf1qMAz9FHZXxv_BIKkMgF8-8Y-z3NHpMjCYMDjXarcOtI0IHnIBCPArzq93ZBVZG5qxbW6caaFUnnXkpK8RHTmE6aUjZTNmT-RrpAmxO4_-tvprN_VHqzJ6Y7yxcabSEJvskQh4SseUMSDbX_81ZI5a5H8yK-UzkS-gWiRZqgE_XD6yNBi3QHDvWZG3lyC9jIV45ASi2XL8-mnkbVMMb50qJLx_wGY4iKh3OgAjIM2L_zNF9aCVu88", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115103522407258882410\">Eugene Lee Coaching</a>"] },
            { photoReference: "AWCwydic0-njyIzDLHysi4GWb7ARr6LLFk9OYkI_5DenViHpi4pXYGSidA4Mj4tNhcGq7po-IygtSSQnWVFff3lmY-ND-sbe_zZH3uknHiZCgTIB423FigLFnDa8-C9YaAScmcQJW4KY5K2SFmR_egeu1m2XixWo4VXOuDPfZdbfvcTlBk8xT6LBFPEi5Gob8h0qfg4oMf9VlVlgsggP6NN5ImElaebIW0tWbis0fJlFLziyO3C1t-ecd_krdtUVUzCxQWi43QbuLV0-RyO09RdiQ80IjLrGciNygJjfkNLcY1e04Zq_335vTDyeRXCtILk9xiseZwApKQBX-I6-AgxwdEa24knfbrUVhr1TtTkRYiu_BJLHAF5ob02ewGUZxnhxQv33Bg0nZRhsMdYPEo9ddQ3mqwaHsap_ej-JAgryFVcbaBY", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113671457188005165481\">Garden City</a>"] },
            { photoReference: "AWCwydjk3bl-dimHRitXD-xBVZ0nkYhxF-xRZC3h1OtW06PtB770qFFyOb46ixs8vhZqAl3JtnnSvklh2_r9Q8z__cQwz829vH9nGUtaPf0f8hZXJKnwZbMp91Cc65nxTJQeOh8ybHrXts4KwQsWek5kC3si1Pkx1WUuvznvyU-WGHv1riQCoHXaE2asUgk-OdiRUF7lR15uclhDCRRBxhY_-lzG6Wu2d3uiKPK4Ki_ssabPYvSUIvqHmDZ7OUbwZL81ujFwU11uuRM63vQa8OascoXvBtQP4i6v3VUSdy_WJbvKQpQrw3oqrqMOFzCmsn7hcP1_WmFRAwcC5h77CZl6VKTOl0o0Z-YUWNYqmjKxAL8QozEc1wRoovyopY-lTbRLNGHIuh02-1-2ZNQYn_4FXs-d8Q_A5mX4lTAKqud-spM", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105744172257980026913\">Harold Ng</a>"] },
            { photoReference: "AWCwydgLnrJVFMJDWMsUtvVmUVH7ojVrAHKNrygoomC-sLO-yg0h_zuiogXM6fL7zzTjhHRx1UPLJneri4qnhAFqSfRqF3gxtFaNpfTIuOHvy66QH2etAlVxZH_MQcsi_8blcQS8c3MWkKudYM5J_i-EoyxcufrfumxTeKZk0fF9UskdFLZiwcAF1Jwvsp_sFjgE7siXGFSVyNZ7a092pn2lyPM6hsoFLspVytLb_yBekO5hjuxfOeSKGl7jMCAUo3ChDc1L2JB5XgBHAMa-xXFcWwkinGMgOT1NL6HCmiULJDlH0giMiMcsOuUJuwVqpDq7JSKPAarJGM-3fifsCIxBgzzLge0x_ROFHo17ksoYtX1rfrQXLb5AtcCqHNjYD5FY_KMeDwpDsnNkzQxXXFLyPdrATss2y0XyBsN_qdHJM_5CYQ", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105266008531959898981\">L S</a>"] },
            { photoReference: "AWCwydi_oOAFOH7A2mOuKVx2XlnXe0fSWTLtD2J58r2S23NXqJkw8EWrSxlRHy73gB9VlSRlKR9nhXaxO7Za1RsuxWHMuHWhnGf__sTo7Zb0VNhKXX9FE1ZBza0WeGvlUF8uDvyaNbIlTER_VtkkEJTLTcV99UPrnkR43FNMFkhXTeOtMCBW-L4elRIngBG3G-HaftEi9w1YIg4vdLVN_VBCy1PB3WyCKeP-8bIY8hSpE3EI31baJA7PUmMNRfXvgvFQsGtlG4FmNlvcrHriaH-TE6dsaxFTLi6kZIQTVOFufSKylCo1P4ZvJT7dYPG6mY5l3ZflvpCwKrlWJM5nTshfHRuLBzkz98p0UJtrMgxlRyxXd4VpNLnw6Fmu2c060WsNxAJtZXBVFBLLYBG7uAnsZKrc_NWfVrNuavKe4BvfQvGD2rbg", width: 2252, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115398600768930372718\">Nguyen Robert</a>"] }
        ],
        summary: "합리적인 가격으로 쇼핑을 즐길 수 있는 대형 아울렛입니다.",
        updatedAt: "2026-08-14",
        highlights: ["대형 쇼핑몰", "다양한 상품 구성"],
        tips: ["합리적인 가격의 해산물도 즐길 수 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.capitaland.com/sg/malls/imm/en/stores.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9424369166981055893", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=IMM+%EB%B9%8C%EB%94%A9+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "창이 시티 포인트": {
        photos: [],
        placeId: "ChIJPyKq0o082jERd1bghvwiadU",
        placePhotos: [
            { photoReference: "AWCwydiOpA5kuZ4SnHZ5nzkL73k6RFjmbja_DXBDteb76hgPJc2zDG7JZyb3ip-UOOjfGpWL-exzBqeHArV6tugzy5B3ZMsxfrGlXNZIXw9iKBST70i5dHqLs4uNNzzMN_ooyiv3Fad8ZljsL0Fbz8nU24saQJq5xr4r4Lafv0KBcFIchr8Bb00UxKuxIjpUz3ybPsaFZNSZ84EvFFXbkhZ1eWfNQ2ezukP7BornZpi0epAg3ZaVJ0mlGWMTGUQKOdTNBUD8wz5pIXHwLGFhbfRrxBRVY9TE-0PoebY0y4N-hz8JqdzBsBJ65BfodkCuKpEPLH2CQsvV2yCEr24NMlP-rJwBkZFkVjqto7oqK6tCuIXWlyFxRNWhi6E1GA_SOaVAJmIxlUBsYH4Fis-xou9Fbj5NMxCU1O5LuZ7njJSDOUk4UMG6", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101392994740347272357\">Varun Jalandery</a>"] },
            { photoReference: "AWCwydjK22AtvRW4WBEsOb1ejxZxeeEZ8Jt1HtDOAo_AO2C4y_2ZVZ9d29U9n1fu8rGhz6EDGmQi1StRcKXOk3nRh7YNjQf1MeqlVAzeOtcoiKzRijeo9NikzJXQnw2_Nxdx3aTFBgP22jfzzwo9Jz0NF3nfRcVJkor0W2rMhK0PCfZLjzYIL-wjns-k2PhxMWrb40CebuCQRurgB-voCfMBJSeK9VCJgtm39QjiKkwc4t1_L5_W6lWX_Nm9EKPvvjF2TS7q126BkuaDkLwxYBnzlKuY8VWe85fpZzWh9S4ucSEnCHAuPmpDvOERCrChLVGxWZeAetMTzRFlf0P3qMcmyAXt2tAcPPj_Wxw6y-FQbMwAUtzaW6UxbUozeWUqOeHayg2fKqyybWaWj2MM0vNpBVKkedxUovItCMjxRQDznbBmPA", width: 1772, height: 994, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104779892265591351466\">Changi City Point</a>"] },
            { photoReference: "AWCwydjvOIzEUaJfCrwkXKmpYw0PrlRDrjb7hRY8CqKofHnQiUGUCZe4d2dl-sDJNMJP1sZ_m0aqCXuUx0Rr1VtJE1EwlQiKibZ6lzH-qPoEgw7QyHjoP3GaAlZ8je5Cdf92JSmaS3gvMcUR-nj8h2Pzd00E80QQATy8gZYb7k0A1Qw5aYTLBs9f3KAgnxh7Hc8o7HY03x21d6QmVRZZSZcll-o26HzMR9n0fUkRgcglctPodCYrKol9_aq9qV6uJMuhy-Yx3LahkcguorUpygUPJ50MP8wsC1ZOt5fDJRkQ9rBq8MQQOYiP63rPMXj9SXO8J3xm9qWMOWADiUxoq0dfn0KZOPtsT4k8hzO7NTdaH34-yPx8zozQ_LmKOD-NCOQ9nu48qC2S432RdfsvDBZFo4uUGnCmfK0GMHnMehSGYUoVgzKP", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105732667335415294658\">Kim Wee Soh</a>"] },
            { photoReference: "AWCwydhKzbFF0dIaqLRh3_dO5yvslMX-IpNcLUnZ-x60hureqSdNN6F-guskyvU8A4yDOWYrOCVbdFeiozkus3iG2BmNV-osuhxVGo3op49gFoKVcUrW-JlZSuOZnJX1UaL5XuWrM2udxh4Svdl-nKK6E-n88APcKSBGnqy2iOstRJuUXB4hWga21WNJTj1aa1_FAmbkAjx2bce7AcvxWf4gyHc9dUwm_9jI2guB_EXNMrRaaKdjCXYpPis7ZEtlHktReqFhA0Yyl3q9OH4clmEGIu5-Eyker5a46ONh_SohLABElSqpYGApj9_NKCiFOBjeuHQbuMXYIDtSS51314FY5RRgd7jEfqCNDnwYtJdQV7MZ2ln4zmpXhuD9LePW_3_UnlEZI4ppsnXFN1HDCWGn0Jq2cI4BwXaF39fizFWVL5oEu5Ox", width: 4000, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110482105440884166565\">Cebuano Laagan</a>"] },
            { photoReference: "AWCwydiGf6PxzKVZ0zvZTpZNwu2celBSiTanm-Wq7p_-Rm42H9kT2Bt5aCfwUJ7pDzxnOplLH0fbRyvbk25hpEy_CLA7UMIhVdPgC0Jh0jhIsU_BxI_3ZVgG_1yO42zZgBjWL9VLvi4Z3IuVqMEeJaAUSSkSWO-tIaOkUkL4DRLA2ucf1o1K6jhvQSXA7CP8I2_IaO_zX5XSaqKjJMuWGUfYP0scwJ6VDPzF99jkESne8c3x1JTEmgMGXeA4etBANb96nCpPddMSKTR2V-tqt5JrvNYovF7LIjmeJScGwTK1uBwai6DsvC7KKU6oyL8oLZi7FbyN3IgNy7M8qedzjP6bAneGwsyn0jNMIJB3QDT3cOKoB4jm9pglJz1k6GC0zlxlDDbjPFKPr_mqiAfP_qoNBFr3ua3mMqZoMYq8DCZTRzCDUggT", width: 3120, height: 4160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114552862465372108332\">Fatma vhey</a>"] }
        ],
        summary: "편리한 쇼핑 환경을 제공하는 아울렛입니다.",
        updatedAt: "2026-08-14",
        highlights: ["다양한 브랜드 입점", "편리한 쇼핑 시설"],
        tips: ["매일 오전 10시부터 오후 10시까지 운영됩니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.changicitypoint.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15377860870623221367", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B0%BD%EC%9D%B4+%EC%8B%9C%ED%8B%B0+%ED%8F%AC%EC%9D%B8%ED%8A%B8+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "나이키 팩토리 스토어 IMM": {
        photos: [],
        placeId: "ChIJ9bEj2g0Q2jER0_B4YWaCsBA",
        placePhotos: [
            { photoReference: "AWCwydhqtCITLiKDCgiaIF5T-5ifSeE1as8taYaRxrI-PtSE2Dq4qIx5iVmRyr6sYFWS_CTr7GRtW_w0raMZriHooDHCifs83yt_OBum6rwhX-rijE-I8QjfbQaBJfwsLoFI3WEuugytSDbX17gOYVKdqYBpjPVtkDSPZhkC_1wWUB-LOOWU4Fmz8IefP5qAl1zPgeYF8H6ezZ6X89Vrd6oJQj11nNtLk0YIh2V9iG1AbQutAQUX4Zm3JOoql8t9xQ3C3SsAf0bqofKM8hq8jOwojX4D-Rbu3lnJ6E6rgx5FIhDG8FicAVzmolpXTfRJjPpCPlaE1XMj2p3TLw6oRhxqtNu6KFgYPT_4v4BLDqly7k4lGdIVd5tOpV-nWAqzPgggj0VV9hSrlcMXqprOtDAwAPDIdMAUhXjPwHHIXYYJCtXIr6M", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111268657170252796763\">joe computers</a>"] },
            { photoReference: "AWCwydiUAobethIC3wcn23srHtr28KrraGiBje2QlmHV2rdypeAU9jNwL_SsZn-Wda4ytTmByFK0Til3TFfSNq_ZBTKWQnB--dqTIEwYpB_Bq0TFZG6ugqFfNLsIAE96rw4zDkpg_aQKbLoOZf81fHuutX8KpVYkg4QAUUxvStO6ChE0S1cWJj7HdJbV2hx5t2qeg2wjpMISf1Rh5RYg_6HfSilYPd7ZQFwcj1BlvwMkYoNnpDoG3y1sxCsj71jflmuo74bcqA7V3-a7Ji9ddjNag_o1OMCR1wcJhw2kZJmUlYtaB1GVnpYrAcXuPIkFBpSLj_J0ZLfrt9qi4tqeqFqFMMKZzlp4fwA60tOfrQ3Ec7u55f0u2YJsF70FeP1LTg-umhicDdk-wCp4dmpU82Jlpo84afqYwOrxW94BdRE8Gz19Ino", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106637880864046228946\">Paul Park</a>"] },
            { photoReference: "AWCwydhHs672RbGvFxcuO_kBelc_QvHncdZe33nmSOQ-fEfRZUX7kex5d-Mvwr4W4TU3tyaRGLLVVJ-KhSmeH1Mn7CtYAIHOKA-rBGkLsOafzSl3j1c05q1XsgJx_KrtWiBoGeT41fNJvdhm11p5qsp5X4HVaCeZG98NoJWH8r9cUuUBIp8h3-TOZq_goX0wD9jd785M-i5wB6g5uosANyHOkIUKUULvLDJ3y2f4aOviE4hzVB-IRKla6vzYXhfr5CByQ66BLGn55egFJH33SR846pEs7tQPz0CWmNmTMZegisE6yUbMSmd7UlLC4ukLY8sCSnrGOuvQjsurIvLpFODfUR5GopTj6lauz3rhvPkCrTYTTG2z9H_TlN2NPccUmzPHAGT7K6ki5LLGv1KN9vbwfQlebJLpTGgj04xlWm4dS6B5KzQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116957883414431139342\">Ngô Quang Đông</a>"] },
            { photoReference: "AWCwydjtIYovQnM3PrHc8eYKMtkUyxV7DhHkzjZ3sQWlzLVDpu4CnoHC21uvq3Oj52U0MoMEKDv89Yqouiwt4mYBcBTfge1PrvmtHYNA09gwNIBQ5egpIxrredtLtKezRsvyCemqwOEtbFPUpbZU8w7tKeyU_ya7-dnsV27vwWrtrZIuydgrthqT4HnLqHIyZotTqMmVNprXl1TREUuYFHL1lpUAs3iWRa4KXb0qH3YD6sVQr0JO0Acu-vhsY4qQB4LnDk1YzYWcdWw37Jl23iKXGcoJJl0xsgSy5wEXEtY8-jfXwIB-FlgMEnR3zl9u21tX5-YgcqiMryNAMLGTQtgeQtc_0mSCBvuDFQCxzKRoCADbor2t7LLdE8dGju_PWcmILvTBCMX8IwrtdgtuexDa0FIIwo_pVTsd23Buk1hj2P1P3Q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106593129017724916676\">AK</a>"] },
            { photoReference: "AWCwydhzYC8vOMTr59cCajbRjs4m3r2sJR1uDAyz-7d8keBGgwogaPcOYCMc6cblfbyAY0rbM6VOavkiCeJx7r5TS7Cmbt3ZoXKw4lgijksPJ7yqea5s6LwhaSmu8rLILOwSEm_NHJiYHUrvej08Knb_30-pqUl-6_9GKegE9TBHdFYVPY3SZ-Q1-Hpg3aZvt-yJea4p-O5gRdLoczvcuyf5WKVpIUtgH6Exoe7Q3XaYanlJ-HZ0wAeeNr0_ivQDfNlTx5cTVyDtkNnF7PDd3-Up7IiO5rovjfOy_aCHsWsPuQmqK_CL1yFlihBuXSCAmlxXHjWe5IRrTu9nnNEoy8YXNlXNEcDnhOk3W-G6RPz-qbJJh00RiBmQW9X_XrvcJrEGKF0R0u6Q8yMKXj1wU6zi_ZFAramLuKthXqVhvsOBbV6Curk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113796572659279486041\">Capture Asia Photography</a>"] }
        ],
        summary: "전문적인 상담과 뛰어난 서비스로 만족도가 높은 나이키 매장입니다.",
        updatedAt: "2026-08-14",
        highlights: ["전문적인 제품 추천", "친절하고 인내심 있는 고객 서비스"],
        tips: ["직원에게 원하는 스타일을 설명하면 적합한 신발을 추천받을 수 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.nike.com/sg/retail/s/nike-factory-store-imm?cp=72178864724_seo_&y_source=1_MTgyNDA0NDItNzE1LWxvY2F0aW9uLndlYnNpdGU%3D", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1202604476741513427", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%EC%9D%B4%ED%82%A4+%ED%8C%A9%ED%86%A0%EB%A6%AC+%EC%8A%A4%ED%86%A0%EC%96%B4+IMM+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "롯데면세점 창이공항점 (T2 출국장)": {
        photos: [],
        placeId: "ChIJd4Plepo92jERdIPV_2Gya5M",
        placePhotos: [
            { photoReference: "AWCwydgW45m2aTLIafW_Nl5cq2Hr-hcYDViukOTIcjj7IWrO5MaQvoL02Tbj8gyTvzXlPapefvzij1FRlI9qHa19BoMtjVcOimt0SOCSd-wJ86kzxTknTY6WW4Dm914eI2qpAKjr281p9M_P8CqdOv6CLJDoYd2FggjC4LTynEMtmqAJWYRX-gLtYX6GBzjBoDkI3IePCWv_npfj1-gQc0VOO7hOe4mxrNz6ka_tWT8TrIOlc2nspcknk0iP3DwflSH1cSnb4vRi_5Gk5GTkTvzLJIAbviqletpEp321RfE00yvdUuHwxZnmV-nHwCsLjTDIZNssH5i3sYyg5i-Q67P53cPoQ3BOY_ZnUBBnk9vLjWEo8PLIU-_fyod-ZOS8yOEz70laIWBklRYYFFcCWyWZqVsxWHCDWEpWrzJVpDOemZZGp8cd0w0hP3cmrl1OYX3J", width: 4080, height: 2296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101917762378525045239\">Calvin Yang</a>"] },
            { photoReference: "AWCwydjIY7ytUDyNARAk-279MVwA8cR2ZYY58m-g_67AE54UHCczw9PtvZTq1fgNIFJgX0yisdSV5ycxNdgwe3ufnahDinyB1J83cyCAYixUq987bykqtMTd_G3cwIG0hZSLrETe3c3W_HzitT6HE8skf4YlMXGw-CY-9c28e-UsjL3llf1t2BjGfRRJj2_-NGpPjaIXw8bs9S3cBah1Dks0w3i1y7yz15o7yBPTCxE_tR61f6NFUOaWLVFyByqYfCV9C34f7HyfMPa06z7f4CE5dFqmq2gU5ZFlCn5D85BwkogcIiPZIZKf-FtCmWyBeQ--LNbr91f2soRjHJ4CqW0rrL96_gj1TPOBu5g-P3byMeUVfAtF1_v-bU6z0dWGjSrOLvKIL1gMhRzsH8zZwsS_GF-kUvGS0_OSpRnDypsBuhgqGSztEwUDF0m0P7Us7fUb", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118414779972405165627\">Bhaskar Singapore</a>"] },
            { photoReference: "AWCwydjlYwF5bDr96iq7xGaj87MJwJgqFJvnke4nzFoaKQqF9rJsoUo1DesRT32tlHaSN9aPh86a_kEJM--J41fNB4T_U-35xKxShZb9YWVz2pBhUMN4GN5q6SvEXM8JdGxVhoAwC9EGiEatI3UMKsUhahAktvYYXcpX6h18XLIB4XBDbklaclF_Sz65-idx9Sy6d1uy4vr1YwtTHyeAgDGOeX8oFIaZD_zE_sRDkGBfiz7i1rXUmjMmI8TA_x3MUXTZlmva8K3u8hDYh0_il-9gAu6XyqtlbWeBSueFowH692jqTj4mb4kT7FFNRaExxbVtk0SUyCV3W0mHpYmTKHas5Oo2hLD8Ho1Tn2i6c3mebiN59XhWDWSr8wOPl2RHj2E9Do8vJzNTUjyCCoS9RTg_l0CHGs7YK-ESH7qexy76zgprrw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108248090410992770196\">Yasuhiro Watanabe</a>"] },
            { photoReference: "AWCwydhHkyt-IeKULBUthSr7Wy70hyokyc_i0oljqeiivObqXpvubcGN-k0FfHiyEy04FU76ms1BotTBL3rkQXG_CmzpUjCNz9CO4E2HmwlBb7H7bPVhmPmWRdAeebnqFRDIpm9Z3imYpoGcLF2lsZJCbuyzoaZ6NQhoJTYpQwgh_vv7eAZ1vQEJzNnSB-Yz75gJYdREfAqs4zHtNrreBUI7Olhv63-UEwwFeTzwiTw6fqOSFbv1Uf-HI5-rRYmVcoqdUwVpXBhTwtrWZju2iAiEJkesxd20ZK7QJF5DxPSv9j3jq1dkD_3tMfid44-4-Sog4zowG59rst9aaFRvkkdcIVx1Bsg45YoRkTKopTyX2eNqx7x98I-zGZ3K_KFOs6lYE8ccfHL4aVFtL7dqTJVjXQ29WEJ9mSGc-KfUB5u5Eo38pH25", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109104673503451209616\">Vladas Portapas</a>"] },
            { photoReference: "AWCwydjGWpsvuza29TDTddIZi9rtPuJmpFLwagNK8BK4b1wLLOksxuoXt20eLwtGfssUNQnYNkAjFKwtOugY7BLglel8sNmPQ9qo14g7Sfdwik0BeXGsNYdjdsiBq9aDFx4UZtJOkJnEUnyvuJ9YvpSb6dNT6J-xjj_Wb-XDm5CXXQcw8MAaxLCenar_nfj4YimPC2zfpuGpKDqUgYVHBMuatMDJr6gPGZhZjQfbflBmsZzKNe_n_bzXsASVQL8XwxmS0t40D1HopX1dacifWtcTCnOAFH-kZSm5CH45VqWc7bIA_4HG7-QxKoJGkZJx7g7ObCkqOKylygeZrmUHIlpCtUh7zvXwun14TSpXern6aWY-QAsmJspdPAjR6c2Tyd-EvteMh9LNaElioK1Kb-oPaKPhDjLm9zxdJprUxoLr9Tg1biuJ0kGnymYu7Qnajw", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118414779972405165627\">Bhaskar Singapore</a>"] }
        ],
        summary: "창이공항의 주류 및 담배 판매권을 보유한 롯데면세점의 대규모 매장입니다.",
        updatedAt: "2026-08-14",
        highlights: ["창이공항 4개 여객 터미널 운영", "로봇 음료 기계 보유", "친절한 고객 서비스"],
        tips: ["로봇 음료 기계 이용 시 밤 11시 이후는 피하는 것이 좋습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://en.lottedfs.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10622780280057201524", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%AF%EB%8D%B0%EB%A9%B4%EC%84%B8%EC%A0%90+%EC%B0%BD%EC%9D%B4%EA%B3%B5%ED%95%AD%EC%A0%90+%28T2+%EC%B6%9C%EA%B5%AD%EC%9E%A5%29+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "듀티 프리 창이 공항": {
        photos: [],
        placeId: "ChIJs561zJw92jERW_AbjEtKwXo",
        placePhotos: [
            { photoReference: "AWCwydgHNg8n7kasAblyXLWDawYokEGFhkYGp0D0bYkcarMONnsy0H0ISCYLOIhZJbsrrtpN15k2YxmKWADL_me1d-1iMsyKR5U57xaxLE99GGIeHHFY0shH0ygoW3Box9a2pQrzEvqHPcX-7f8B_xFR1BDb7Wm5EQ0JLKrIEI36UFv7tWiKcN2CwD3Is2TmB5a5fzk5CHBGHJEYopxVvZOneeIGC1--5Rga36WrN06gdiWWLCsopb5El9rOdu62_DBhX8RWvEj2k1lbf8i0bDDCp1YhvOe7EvnEzrEmJ6C8z-18N6CaSjvamUI7vvzzdkgpFnw97MFOU0-asRBHOmGx4nAPcAiPm7OdCGIf9LCk4JbbjjU1fVB1BOHJNLhZFXU1VUW_hFFA0nrPpZUXvx6CHq_lrukK9eyEH9FmmbHNiR93YDLi", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118414779972405165627\">Bhaskar Singapore</a>"] },
            { photoReference: "AWCwydgVcEkz8WAvHof1eBPgKxfkvHu3SYROlBhwgg8ECNTMy3biYMajQGoY8RVKaFr7ctWiSaBI0Liq4QuyMnvbPqjVZ6SOwYoqf17LJOgaJ-sLRviEOAWWXvCPIN-vaTVIzmQMkSN21qaQNXaCnlMI0vdz-pVW40H_AOhYWZBIL233ePmcrtsefxSkOQg1hM-r5MWeTPics_j0Ps6K4t5YcPAFoaQQlAecrvt-O0-E8o8_6WRg_Pv8jmmKn0Xl0i77MfoMc35RYqshRX2EEW-Lrhc6LHR02czSVzMqTe5GpHlAm-vtqR5GlO6g1Sn3C8sFryfb-Jj37fbwcTtcVTXss63UhAWMrCgapddld1RhikwXEsTT8tY3khUp-iFA8UJE9u6JST0xxo2RvCxxqMyIbX5iEeZj9bEgFRT9PH-efw9CG_aI", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116622660847510840952\">DD</a>"] },
            { photoReference: "AWCwydhjriMEpijKBZCtbxtodYCPYBWfz9EyA62K2dYxwljvlgsFeMZEqz1fpPpLJl7a8KGiBHy3jRLSSR8hxCsEV78x7b5ZmJkg70sdufLF-GDq78sf6Wb7_1461L2u3B6Xymm8AgXB6MsotKoIxrZA33pEKYps4LRXeY3_r_7SCSZ20h-xHLsG2GBm3TscptpHOsveZf93mforvdTDDUJvWQz8nyhjIDPsL-5GL0rYziWkW8VD6EbX3VyLsjWfwdLabxRibGoXTaKY4bdiyi6fY0f05CclsXVyys6K-JRWYGg39CUSB3Oe1-jtrOJ2Tmu8mtaX6ZGlX09OVBwc88SJ134IMJtH7nYOP3zMxiEu_6qKUq2pwmjr1SlqmCvuGGuhDhGRDbbW4wpvvaWae_5pdNIr_ymy7ASBPIVcReRgq8cQr-8c", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114797686259212079139\">GBS Nagendran</a>"] },
            { photoReference: "AWCwydgVdofEdMGwd425ZagE8a62DBbccbFA5WsIpyJ74JNS3D-ZZfoW6-0YV2K2LQlA9V5ck5jIARKQnWKGiWpxHP7lp17iwWFAu4Ke79T6RxKNRIvpxxMi5GEBedXXsq21gjKn-GUDtI5ki7mHYXLgmUQ6F5xTZymw8R5P5mBrqLXcVRpViUUSdSsx3wu2FZ1RW9ejTnWKi4uNHuEVQYB20J8VefMcd3A2sBBtZNw3HgHzAVsmvaF0T9he94bQnVfA1PU1OoKBcZOQn-Tw75E_S9RNPqxURzAu_CHQOs8fd_pgApyUmG7ffiqX5z8Zovl7stFANo_jqMIyGSB-UJjhcvr0vkxmlJP3Gm77oZh_Mqt3W6ZHlm-jdiHMtXQ0d7g3YXmvIPpUjWhFs8mHPEHUx-4QLqrKKr6t8ag0U9wK3m0H0QcT", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112216243082219122612\">Arafat Hussain Mollik</a>"] },
            { photoReference: "AWCwydixOS6ES2MoSeiPv4JurI05N0zpf03GAigBoSDZdDhyzBKVgGEseP9NbQSbYIW3Bov0ap09umARKqiXjAJaS6yQ0AuhemMgi4lXegSHv_8vJpSPMKZn4KgoYQS7-bJxiWUQyLkDJlf2RrQOWEkPhZVuBobKx0ZUc2aEdOKOnk7FXwavwRo3usjQp2v9CIPbWigkqqaUUAWPuFCxd_0CmFbZfO-t_dQAy3sRO-CJwvNB9wVR9zOJ3t5-TG9GJGS7oW9bBUFLnVx7NzkkLwlhmJEUf-W9WS98rQ--27j2TDxkOlXGn-2tENWq-PzfP28kjRgpFPGRPEIdVwkzp4vFYjimrCD4PvgHWmfPtN-xjQ28Ulkiy0SZGPOAvCaXEjq9Tq8Gyz9H5ZPRiDzSUFYZr1l2ZyBohE289yM6srla6wotjg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116622660847510840952\">DD</a>"] }
        ],
        summary: "창이 공항의 24시간 운영 면세점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["로봇의 무료 음료 서비스", "24시간 연중무휴 운영"],
        tips: ["로봇을 통해 무료 음료를 받아보세요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8845432831466008667", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%93%80%ED%8B%B0+%ED%94%84%EB%A6%AC+%EC%B0%BD%EC%9D%B4+%EA%B3%B5%ED%95%AD+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "DFS 면세점": {
        photos: [],
        placeId: "ChIJzeg8BpI82jERcQz7djAJVqY",
        placePhotos: [
            { photoReference: "AWCwydjQ3CqEEiEPrKPd43GVNwv6SK0TMJjGnZL4sIKYfhMv6ejQa4GU_Ow1iXWe9kxV97Es37ZQfU76eP24SRfb80RZX8sRA3z4VeJp4L40Cs3BvGBWRVJdHo_VpMvULQLen2ImBV77eDvCWor0Mlf0vJujNOA-mlZvmU4K0qorRgvSvEMBSElOiZoxde5Y4LIVjN1gcvK9JADi5RHc2JaHjrMgUOxtl5rfnFKA1R3fyJ-mO6dzj8WFe8ReaX7y3lDhKo2gyKD3hB83Cj7rbVIu5QRgAMACbKuWrw_vez4ygLI1czsIrY8QMnUSltSCgbeBFNnV0FVJH6jhpVBLB47hEM0XW6fB2yNRg472R5lQZzejFRAgAHXr0_yArql9PnNGh4UjIYBKHIjcUKmGWvGvEXZP1HEbibjDaOzR3ap99vohiyvX", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109104673503451209616\">Vladas Portapas</a>"] },
            { photoReference: "AWCwydjvy_jC0RjaZiPxRXM66eRL5I_CFaW8mU-4-QiFtSI0FyXcDUx_qPsPMzMgmUvH6Q-Ns5X_9r7nZwnOsKN6D433ORU3XJ5mfpZGhbLolULHtMBrFv3rvrkf4NuSBstDXsMD_pRux4WWAkQ-aBN-v_G337y6quw07jGvPyRN6ZLnOubsb69aiQI95b8NfPAmvaoCLcBKkqqmsCNH408s9EurM-0m9UCMbmGD02vunCsCOg5DXErIDB16eBZjTjZHnvFGq10H_wUlL6UuTIB_l6V5WZE-22ExOYhybsobbPN6Lh8vEiNPyagZNnOONM0d4_h0myEVdNFoDzetaV9J1jGaR-j73AiuGRQ2aBk28cLojv-E5gmwfHgKl-f5FVX2_RhUnsMS5eTYT4g1N7REBBJHUMtqykoTFXNYflXFd9fkTHQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102073268709167363309\">Audrey Griselda</a>"] },
            { photoReference: "AWCwydhWmwOjFsCVgL5OON3vW1uI7fRzAf6pZ9KMwk5lxov5wgKQ-9aH1CacHzaHeLHb5JLY8BvwJepS5bamUyzVLRd6EjUzmSQ_CQ_mVMioSqba2B3qYnD9t43yjImN6K0zbO7q_ydH5veRIAdXvJKN-dAHdmCOygcPWVrwGKAXHLyHlXlzLybx04DcCLm8h_fumHbLKG_HlEVCdZEjdKeYrye3tmeOw2m6k-Ec6dy0d7OFDhDppZVLIOzc1vva2Y-X0RCBgvzdrLKOGxB1eQiVs9EhP8m-7ZvwOgU-HF9EPB8QKA2a7OvWv8QmFwBl4GtY0gG-996--VELo-MThS0WLwPsDg6MEsg-yrZUpy4c_h1LGGSkssJnFWRGism3GLqQgQKx5DDKTZyC_apzhh_OdhPyskGamE_dEctzrRgFSpX64OQb", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109957732626379509466\">Vishnu KM</a>"] },
            { photoReference: "AWCwydizoVN5zSfEa14Gi8lLd_pAWMQaocVFehX70xAqsCO1RkePxBIJFbiVHIvideKiwVHzwO01BFjFn_hTdLJzLjS6aHPaeg5J28vK4IF2aIHj24s9yNFmMBtWB9-pQVWRf2wyZ4wJsOBCOJB66XOqOCRvB7fAuK7cdt2sJ550AoRn_34M69_DD_wsVA-RIge_YAhRZcnaz1NoMecqhmswmJWhV1RjdYg1euyZ_gWYbl9O_1zke0e_d6wNe8X_R0flMSg_cHy4obdwIgcnKEwJp1oadbXtcPUm7aM_DUB-Yc1S5Irsms-ox9dqPi-2m8Nzr8Y_n4N9NmOubtkI0W94jg6oRtDudFbJOFhGa14HAg1Gl6pi3HBUZEPkUaaq-UE2wm2Sb6BaT4EYSNL2xwfGmEDmryw342Pm6Z7K9StM25qZzQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107815791242776192553\">Hong Eng Hoong</a>"] },
            { photoReference: "AWCwydhCcSWqmUve7SBCgOCdA1zdGjGlalxs3GU0Zl6TEDJ7gmPSYQ5Qo8wGRKxdRJihYU9F60J2sz1Rrkh5TjAbbBSPsV4WAe05R9FNTIT8D_JRlO2pqBjg1KfdcGq7sE15ZoqdgrQ8y_MfamX6XrydsH_4O9jvx3KxODoXY8UypGUrkTN07AYpV7-hp-vzqINfoPQLY-lSqza5jIdFOxvnIAEDFwc1Aqp1sST1Azs3TbKtQtoh0fM6ZQP9lTCE8DhQLjrDT1OgdBL5f73D0fzRgqrY9oOR41bxKyfMNMjesYZuZ95sg2so3h1aZk26AgWk59weT-Y3dEVnHI53lzJRz7oXTG0xpaRP5mk8K__0RuWpoW8kkkhEx18MgrzMtmNJTNnxjOvRLbhzI--_bnd4NIb_I_EgEFW3pJdSxrP6M6Fxzw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116086256323635039533\">Oliver Shum</a>"] }
        ],
        summary: "24시간 운영되는 편리한 면세 쇼핑 공간입니다.",
        updatedAt: "2026-08-14",
        highlights: ["주요 면세 브랜드 입점", "24시간 연중무휴 운영"],
        tips: ["24시간 영업으로 언제든 쇼핑 가능", "다양한 브랜드 라인업 확인"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11985777562052398193", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=DFS+%EB%A9%B4%EC%84%B8%EC%A0%90+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "DFS 싱가포르 창이 공항 (T1)": {
        photos: [],
        placeId: "ChIJ7aP8o_M92jER08jXLvLNJ9c",
        placePhotos: [
            { photoReference: "AWCwydicexXbqevaDOC-lS1ZMg4cToGfL1TtWnQklJVgG2dDZZMlRLbCZJZ1144o_5_FYkZoaIxo6pzSpPVbJDCaopJEKmKv8aDRLUNchiK8OEn9KSwQAc5DJ9jSaXgMZs9L9k8ASJ3e657G2_OpWMxYA2WWpndn6Vf--ukHwdB2yRLdvHHcENLW02_P0_coZUXY20DqFnvpwIPw3TSI-te93tiqlPWEscnBi_3nneLZSTccJvhbUfbJWrF6NirWU4fqWyEVWrKoNHXQbPtRhnBGO4mvLdSCaFetmXb6CSb1-Ihgm0pTESRWlaHaLSieId5pnBnfNgIqcs4C_cZ34p4gLj8C8P97me49kVu9AGgDrNfM_9uvq5W9JuLNSQNA8LyPfZJqiOQam_9XJM3d1dOS1ew-S0CSG-te1IvB6MOV-crDcdI", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107490774270407595916\">Ruben Licera</a>"] },
            { photoReference: "AWCwydhniboF2rwykGUhs9PPg_FYJS0xpJDh7qQsdTPcWSrAZI60-_NjvpfP0wfmZbpqUtwoTFdb3eZQVnXaBqXXEz0Ux5LugkA_tEfuZNFeMS0iVaYTEJIGyl6MAY-OpqTMUQbldWeK-gEWTcGjNMwAU0qf5kdtdmEF8ypg0i3praM1gc-04d1OX5ikckeHFRQ7VfHomW52gR_yRok0RC2yS8cQuOKQe2X1IW78erXFhlBCuv78kyQpAvR0AMMx2p6GRkUqT8QFi4a3Fp_Vs5CkgSottmY-4FIwgDNk8yvDTDXP_jRWAd6bru9KhNcujPb9WvVCfVpuMf1Dq5w-DI9s-4bUuizNYo99FdgdOAg6XRDXltg0YzMe_raOKFAGq3hyUAGL5ncjWgnzmfBkQdCuAvvUrdMRa7hdLOqlh_HsPI632lc", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101917762378525045239\">Calvin Yang</a>"] },
            { photoReference: "AWCwydiAp6bO5jVo0D4Tt1AWcWr9DFji7nm_bGHQm5ST34VQAs5uk42Xp4HIg3zjm5aygz3BQBOKG8DEmYfHVj30NmIzgIlAr-ukhC-GT96DrptaQn0ElMvEGA-Qa7A46ALksgW-Fx1muTolnD2epxUcyUEjlB7yhF0xSp8OUWaw1WHfGwZ9TzxXyeLDh1zP8zgkhoXWxLr70x90zfG91nODyNaicpfsekwRQRGJSttWBfjlOulocW48NrsZEP_O61s0vyb_CvQwJgC0keP19_EalZTSF61YvH4SqU6LihYOnI7Kwdfc91Z9HZ9IhiFs1M_l2TKx7Q8fIKG4bSpZyzAKAFDU5rd39TK7ovnctYQVYyGTVgVjx6RF2ffodDMJKd3hz23vuXI_0_n2OhpApgbaUWbune5VNSBmoEKfuIL59-4vZyUQ", width: 828, height: 621, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108682295088839321358\">Foodprints</a>"] },
            { photoReference: "AWCwydje2cFz_Ze4HN2wKC3V0j-OGWNTqVKwOcQ_VEES-RT1SV87CpinMgNdXu1_AUIJ87efH5QuRRz_b3Uou6M09Jn-0GoDZXeYT1rRgIXMZX0paAciy2MG9W5Bc_KNZCUX-Fl-4EYakx_AYZ8SfUxdsVHc1QRGBcuuCgZOCQvOB12ldww8uFBvtHbsraw1Z9LTvc58qNbpdvMPBRhpMMvtynhW0j8itICbPZCc2_3IFTy6tNFkYEUDWwdlKy44k-FKQ3Ea5nbz1zSl0hNkSi8CHQbqqAdbZQHuGy8o3KQksYnJ570dthl2U6Gzuv6mDPecYvPybtRjROMZ-6JEHW_iHYGYrsApWKRiw0Amrdj8Csld_viaUEro1bUHU2pgLQX_O5IdjEv9A9m4f5qf0lWLFkxXtnoEsdbwa_SnTssKjehIfg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107490774270407595916\">Ruben Licera</a>"] },
            { photoReference: "AWCwydia9mhykVarYiqwBfiSRMw8bjmqbTzKnz0yysG6U45q4he7V0bI1NLgz06MPwGrHJFYL5dTXL8yACu_6NXrnXYQegVttYiXDU_TiAOIgUz69TEXRqbB9dMRqJLaJKwBnVX1uZCfyYf1WFCMy3348zqkt2lqVoLR9fMkktfJjTwwwcn30bknkXWcOQfOjRxoCPgoyY7dUhm6aJcgEW_hLT5QpzZubyiVqXZHtM69s529t3TeigaScpWsAHH1NqLM80vz6ZqRPK5yeHUwWXza2DsUNN0-n2gn9ICS1h9YVM0azuxx9UyNnuz8iJ34yGjMnUA7gjMfwRh3Ev-uKe9Bb4OjDBsCm2NLhp0QWmtn5oDZhxBqtTLXDbrb2ssTCVtOtUAYllsu9Dq9zq4w_5pfcM4jPSov7_wZhJOYAsLy5OS7Wg", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117256500359230363636\">Marvin Alvarez</a>"] }
        ],
        summary: "스마트한 수하물 제출 시스템과 훌륭한 고객 서비스를 제공하는 면세점입니다.",
        updatedAt: "2026-08-14",
        highlights: ["스마트한 수하물 제출 방식", "우수한 고객 서비스"],
        tips: ["직원의 친절한 응대를 통해 기분 좋은 쇼핑 경험을 할 수 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 5:45; 화요일: 오전 9:00 ~ 오후 5:45",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.dfs.com/en/singapore/stores/dfs-singapore-changi-airport?utm_source=websites&utm_medium=organic", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15503586682297895123", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=DFS+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%EC%B0%BD%EC%9D%B4+%EA%B3%B5%ED%95%AD+%28T1%29+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "SG 기프트 숍": {
        photos: [],
        placeId: "ChIJn5Vou_sZ2jER9O5Q-j4QBCQ",
        placePhotos: [
            { photoReference: "AWCwydjpbdDzLKuuBI3ABdWO81IOO40PB60o4U10kutd3d12rNaJdWZGLCBru6DW5XbzWj-L-87-U9WiscgBsnDqJ2gCm2TjVkZNDaaGrSwPynjY-tTZ_Q2JixI3f-V4AzPr-1i6uR_x_wL50ZKKnHwe5n4wgdtmI58dhDZbbY_fiLondIt1DYg5YYqlcTJ12_YryCoXkYuaDqPR9Zrejo2oe0GyAaVeijhAJR1YvT6Gn0fYznQPghNzydZLLBwcemBgx6bCRKRkhaJ-fhCEf7kXnZV-53Mr6x1dka9LUbJeOOAgfJg418qK9lKRHiaUOyMLnK9McXL0XLcEDJ5-4NtOab0ekOGNHih4n1b8itMowxtSrfpKqUuraCyHb_UW0ql0JLMgStr7HzoLjjyQZ9eiswaUiOvHTqnVGNZJkU8wUbVFdb9DKEnTPs5wJZCVcg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107215137731668999886\">Uthai Lee</a>"] },
            { photoReference: "AWCwydioL5CX1tZqC1aTIVdqw6Vuf7uDlySS3OX55Z1mcFJH96tDomsn2NJIFkUOaNf6UNI6o8lAz42ItD4DjoA_nvT_5iLHBWqZ_Zog-McyM4-95ro0IV1LmNO6ITuxuw6QYvz-3Ow-5-x3fTR45KeVAwhnetWqRp9wnhy-MeD0lfAouA3BAWM64WIilnGBHRrWsPheQBxVMOYf0-u6TZft1qt1tf04Wxo02CHkGBbFmOltliwy5iL5OA2z6o-9z-an33BooIefPKM_MaJEq1evawEeB9ctQQjIlEdZcC3UzjviRFEj7o842pcfnytoD5jOz3K-VqGL-eTF5RsjH_95l7-mUO79w9DlegIy0b64J6JiTLMIGay4ptnhQlddpS3bJPIf5e89gQS1SarD7SBEaz2l39befqJX0ZqisUbWpiyZjg", width: 1932, height: 2576, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101312561705095136037\">Marc O</a>"] },
            { photoReference: "AWCwydjciuUfwaEqQV7FEpWXgwuh57nH8VChnBe5vwKYvcW8SuwiGWg_V5v0QuEmLxWcUEFfZRKcMe88kFVM5o-3j4H3Q9gi9naYPCLesSvzZ52LXoL9gkr-hZqzrOsrx1wTG63knFCp5OZCIGuNhs7kw_oLMC3QPF7h_5tj8mm2fbgiNS6V1NX9UkK0GSolDQm8BZWRuv1i248D4ajucj796qcNGckAF8vkOMRcqfM0A5QzFSRLkYSwaZIrFj_nXzCMAd9POQOE_ksadIwQKFH51Jpu7YfcVtTmIFQr4Qp_ZCv3fBSE2FKPh_tlX_4AH_IPJRHkpz52pd6z_Q92jWCo5RglZy2FVSp9yquh3fFsZvov4grh8YkNN44p_-TA30eCQXGXVH_VcQkwckeqry6HZpxljIxmjTjcgNDmV5ZnwInQ6w", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101381958760200815199\">Junard Roa</a>"] },
            { photoReference: "AWCwydjbbANYf74lUcXbpnTlXu51acidvsOdKkiv318cb-Xedfy2BRyYJ0PZ-7Fwn6pM1m4ZXyFBuW_XXaGV3N5Oto7OcGwJqPz90aKtKd_97F120e4Rj99VeTSVeB2EaMVx0ij36wCi3dUfETV06_0FsExb90S51pN--sqE6ykc3z4aCt1fPSKllXosaJco4m5D-hh3tSCpq-xYcKa-vs-AetsYd1shCzMyiqKlJBe9NpJRSrAmV2L5C-odoaOiFUMt-BExwSyFcJvm-_gNCCFK3V8pmpEP2UdHbcbGp5Ijcj0dC82PfZRl_apA_nSILt90jdW_HvootrB0mOFUIWuDyxiLM4z-xBSOS-xGy4Pd-QRvTU3WK1X7qlouArkQJP3y9YcCiCPcYkSZ4RQJqDOtDUJ5q-sCl048QpemJ6lHQnOLKZPI", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112557299013957176993\">Laarnie Bless Lingcon</a>"] },
            { photoReference: "AWCwydiw4IPNEMvcburSmk6XaX8hTIqgzodeJb1i8OXJFhdMtFdMSFKSzlxg5pLQ3m5Tg_3b7DC6y-G0C-r3oXejg_4hSmsV84Nv7aowCcX-e_RBGjMjh0wxvFRng_iYPAW6FiIilUTeWKxSZpMIpKFCx9e_Dv7i1hMbd238uKUqkEqMH96sIMgVsYYXvr4Vd0T4tQaJW40XFEDIMJgrLhiHUqv99aJ1OiFASZ6rBioVapsB9V_5IyLTAqqb6xq8jFjX0DQWj6LG08c92ZkMlk_p1VRSQXfjz9wjwv3kIfnR-NnKczZGwVrcNm6psFj-7mQVuKtdw3T976vjhppWyGQMmN1iAXivLmbADDhO7r08HpgRKyAmqUS8SBTNxoZvgPE-5KatFQAD9brT_ImBN2IRivRj9dnZxt9ikh53W_64jkJeIw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102555429415150430560\">Kianne Marie</a>"] }
        ],
        summary: "다양한 기념품을 갖춘 관광객 맞춤형 쇼핑 명소입니다.",
        updatedAt: "2026-08-14",
        highlights: ["열쇠고리 및 자석", "포장된 현지 제품"],
        tips: ["타이거 밤 같은 품목은 슈퍼마켓과 가격을 비교해보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/SGGiftShop.Singapore/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2595217147945873140", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=SG+%EA%B8%B0%ED%94%84%ED%8A%B8+%EC%88%8D+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "에일린 타운 기프트 숍": {
        photos: [],
        placeId: "ChIJqYGZa2sZ2jERoStfu0jkp_c",
        placePhotos: [
            { photoReference: "AWCwydiK_k5gZe59pfxHj82BRLTdWYs-g42FXNwxcTrseeyC7Ni1MfTH0MKQd_T1gHhUnNwgjV57KvI9ddsP70gtf9xiaG1WlrUpRLkDiQhXi-QAg1M-WaX3GWndgzt74YN78CZ1ANSljpxreaSneQanrraiCb9vqSHScpayYnsZWVhDOtFF-nsL7beeyvcL6rz1fvNNjWFyfneGhquhOzLTd_ngN0_-KhP5Ghyo-0t5ro3GHOUienqVLy6QHR2dQshS87QX6-aGHLfeENCnHOhrQu26HVrfv7cVkUWUj1t66cKUdxwduDilEXMLBYGmIq4pxD-9mM9tb5-SHHQDZsu48GmirQeY9qnHCmPUXEwiTm1Gpj_lbzSwo7v-trXQQht2SDU0oqIirE8Nv7XbvMzM_vEmcFuwxrr5JKxNqvx5DQYOMg", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103456642025621045382\">Eileen Town Gift Shop</a>"] },
            { photoReference: "AWCwydiEayrUbUSESHBCs0OdsqP4DX5ZxHDOs8FsTFUQ_QPErzfC0n8YDQlCVJ46yYrr3GV-nMrSu8jfeFhml7CcMKL90swNMqAmMdZZZUy4gNbKXqfl-8EGfVs1o2tygOf7Y-oeWsFNoFuxGmH_5AIoy0Lhl05lIdTNXqdf6HCP5M7sU-Tek2EQJ9M-LNXsaiE5S1D7wg8OLTLGyHQTI5mgknQbpL1Anieb1SMR4YxL92M91kUqxUq68yG5HD8xm04jxM3EeUDq2js2fMLpRJY0clBneZFkrCDV7EAYjKwHe-xVqayMz5sps6OEQolR1dCqr3P80z4yWrNZpGTRzYLcWqMP0hyXzz2ryY-rc2HK8BbRtcLrxB9QCEJuSAxTciaVdBuElEdnRNw2IU_c-BRAypL3rI051kcEQsl9zCtbMSWgF_c", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116617506614769648332\">Tahir Hussain Mir</a>"] },
            { photoReference: "AWCwydhsW2meINJgl7kG7t8wg-V02U6tXzCJfL3PmFlbtzy44wdoPF_ErJG4B71hfZW-Cygpm-JvUNUUuNMj2qywqGECMx9Q6gKYDCDXOCAmr7KdoaSj1QWNhiOegm6al5olQ48OaW7x-01pTtYkTbZdL__hqIdzIIUx2jOGBy8gnK6z5KwgrXahxL2vTMc5GGWX2s0Wje1O3Zwsf7gZW3iPE4NVbFgkzvmpxwAAQdGrIKTve1ey4wqNSUi4b8rMiUWd94HU7sAqm_zy7IIFYF6d9u-5v_ogLMPGu3O9SjRF3JV-6fIFZc6vl0Zc6CVjxnUSF9EhwJTpK-R7pMcWcfB42PDPQG2e4fpNEldL4rVx7r2pKfunnCfiaY8KRAzo0F-1jC8D9WZS1-G9zwws0riZYJBupilqpKBhPy0fx5CYImGP5X4w", width: 1440, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103456642025621045382\">Eileen Town Gift Shop</a>"] },
            { photoReference: "AWCwydiiOPsO9AtcXw5Fz19EIpErRkd9u3xI9M2NkM38jGCkLE4xhkIUqm1HJckl3Sl8bHubZRA1sNI5EF1W7z44x5X_otupRNy1Qw_BsuO6KT_gqPmz8K6DhltDOaaTYSEWU1QqsFjM1hI9uLvmhFETcedLnhCXSd63PKjVKM40hXuKSMgOVbZlNF6aXhi9nVGHmqIFvewXE5EUXAJ3mckazXevxPpvSzPYrWCAwvcDQWeysZukS_LkQNdiAjqih5tfK5BNbHe3w0BR3wrhCngr51z1SO6ppMm-krWpvMRh94zWbKcvVC_qxomgw4w4nTznu9PpnvEjV4wvwYW8_OIkFHZIPsKVKsNoBZznOL35rPETAfIKFeIDKcnkS8wCB4coJQ0-vW4H6Wk8KrsPgtkUXcfashn4QoprTGVUKecMyFm8SJFE", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116617506614769648332\">Tahir Hussain Mir</a>"] },
            { photoReference: "AWCwydjydnHfTzgen3xFhyhXG_YB7c3qpoTtqDphvPZiitlqpQGj-YjGJM_jzO0ih2pXOtmuIQQveS--U_SUYfoKc79UqNdFZZfscgt3WakI_imuF5I104PSKiuZUsn2iy1qeNqs_Nu1RogJbkc9ahYgcRboq5uPMBDdMZo5mPaAKdncsQN3AAqcciWaGm435qqGRMam_R9tetK25v159VvPt-AKRBAz8w8V8qKWQm2Aymx6kxITlg7TG-xub6gBQ_XtNJhue-6PiaQjWtkvzFIgt4HYpxmQbXjv99OlXMRAaZctkg5yCSeTqDUQsALt8FBx1e2oHUDlkMzPlxX9YiMp1a6QtwV-vC69u4CMWVTrp3TNBOGjq9pMt8J5FqfCV2otgK4Hf1zDsMOZwu3HiJaRotYmFQWikYmp338xUFCvUNk", width: 750, height: 750, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103456642025621045382\">Eileen Town Gift Shop</a>"] }
        ],
        summary: "정성스러운 선물 포장과 친절한 서비스가 돋보이는 기념품 숍입니다.",
        updatedAt: "2026-08-14",
        highlights: ["독특한 헬로 키티 상품", "정성스러운 선물 포장", "다양한 선물 종류", "친절한 서비스"],
        tips: ["선물 포장이 필요할 때 방문하면 좋습니다", "일요일은 휴무이니 방문 시 참고하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.eileentown.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17845483049511234465", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EC%9D%BC%EB%A6%B0+%ED%83%80%EC%9A%B4+%EA%B8%B0%ED%94%84%ED%8A%B8+%EC%88%8D+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "에센셜 엑스트라 기프트 스토어": {
        photos: [],
        placeId: "ChIJjW8_TBIZ2jERddbShGOOx40",
        placePhotos: [
            { photoReference: "AWCwydgqIWTNvmVQDhO08Bv2p6ljfGE_qqWPJBo34OU7prH9bKbFtj9hj6rnhB-i5sJ8Q-S8h-fOqO26mt6sA0EybePDbbxraPwRNY6fiKpRL8F_hgNyRlTKDLSPbTDJu6ajODIvOtvOKdfMZAupWwFdxXjL5tz3fzdS5O6FvdfizClTAOOxw6ej1DTUfazgA6E6rdTg78aaeUEpjhuOM-j6lnFlwF14PoLbvfa00OPbvFkdO4poYh1iEwTitj7zI4ar5b-Ml-Wb8yFgECOr2V_9s6o76wwW4iSg4In2VLiGyb4KKq9Ej1feDZAWjm_eGCAspHt5F4KcnC1lHZ8jsWFO_yd0QJgbR0TA1SnK1rpQ9phbDVOmiqDY8M0GBJ1A76Q-flJBoodRI46xzwg78lLP-0qxyK057IOzPf508VBgyjPBWlQs", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106908980478089121676\">Sue-May Ng</a>"] },
            { photoReference: "AWCwydhlKvd2uM0c7wGjKC_iwldkUxMt0ejKUEeFZxtc96HmXwYUlVwnwJKQLSYi5oxns_t5ydBNMiD7upf0pvrh2iPblzmFXF5035sw-FirEU3mTiCyammKdAzBc3zExm8lZSNz9wiyocEgKNgJkDyl-dPV7YS9XbNqCV9y8azWGMuEKzq_o4el6H3J4j52i5nNi5hXJDqdFRBG3D1A4wDmlveusBu7_KI7mf7MZrCxhM0UqsIXafsiaAwcAUfKpvil453Wt39chBiLmUSqWf4XaIrjsYnWUMJMmYYIaNoVmy-hqHpkLpJuU_sED9TcoC-JHrBpo395AiKGh4FyH4zJQSr6BmdOzmrIr6AA-MmIFU6zmBP4H3lSPrWcVJsI_gW3mIfqWyuWdTBe4wqalUdVfvcOIYYHFpe99LfxKZ9Nvhnf7nIW", width: 3000, height: 2003, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110092130858444696121\">Essential Extra Gift Store</a>"] },
            { photoReference: "AWCwydjqwwNmLq-PBd2Yy1sV-4XurYsi5Tk_qvs0bWtjDlACbGMQYZoa3CUqoaFSdYZZiUz2K6SS5Yx8fu_BQG_ZVm2C34sZBpMfJQbptrlv5sGq7rj8V_rjA8VSoizW88pSMfJVYCuPJxEMlR_B-lB8J1NrIw3FWJYverA3bEgMrOUeADTdb79cml6gL7AkyuCIKuITVQckssdNe_sZgY-mytAh-b9omUESdGGxW6vKS9IAIuWaJVE_pBe2YeYW02DuQJBa8HuN9EBfoMjuZ9qFNbdmEIX-95gaPsFrJTRc4VkyqpsGDYS5PSgkDaS_NokdRj_CnnYcb0jGziL1QeFdIZHflRIH-jjF8GApTqWcMwgk7BAWxFIR_8pBnYAmAbzIP2nkjETvFABZAUp6xpkZvsMI0phFsJFWCsTNrumRSvYYAvZGtDYfEE49ICmj2K0z", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110092130858444696121\">Essential Extra Gift Store</a>"] },
            { photoReference: "AWCwydh-GtijrkUFCdaX8ZdUUS-nvntUp9Eo5_9BVYoM7rEfHBXSpxD7LxagZkjMS0PXojrZqPg9yFTaIm8b670cRsrSlyLbl5CnjmIIaGf4XZZqWtSsNbgwd2Pj8U_nhVEbh3Dt3Z_uxfuOVKgWmGC4p9Ey0PQfa9A-mfAuQfLasGoFUP714KhiJ0ACtki8w8yNNLml5Kv4GN6VUFyo6Q7VOTRcFmtMzuvZUM5Nzxhuyr3MLBxdgO2n_yoDModwso5CC_lyS6e__eHcBFQQ88SHnxiXWio_olzPNV3T5CqWKhPhz0p0-TXBB8YV7vuiComsAt7eeAQc5QKiCjG-sUAuRnUyKKLfFR3D6iNLBkP5F95mepMeCCRL7R6-X5Msw0Fg6V25GK85VI9ecAsMIYVrnW7nHDFnW20zj_Uq-fFe5ki_fQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111922026214590063249\">The Red Marker</a>"] },
            { photoReference: "AWCwydhW_3gHyfwZNXVyDCWdcjiUaJiJ0VH_MH4P6APRB_y8rXBSon4DcQ0wF-skxRPXWgpsCblmGyfpbU7UEHR6-qhtSsKSrdySq-RX8c5mFGLfphAPsyUhwbP2U0vFMVWXKVgvaYUX22zISbdfgR0-NnV4xOKnJAmUTxDZlRcei94FMupyxaqKZ3u-uhHyjQv_O1Q4ojCoBxDVvlSz0SGmFzB3dGpYOZopEGGYqNfc19GUe5NErfCh3XrFH5yfR1b0W5USqONolXJRd0MPFVXQocqHg2n_RoQ8AuWnUciLblZDwD1Rc8kimRiYVnrXoo8Q63gNA-6fKWU29_M4PrUgn0R-G3fXfdOT5kg27OvOCvKACwJxVIQKqg-zzR-Mi8ALbPvfQkh1jNlQvY3lYAqgfg_0U4m-BBAiEAgEk8FGh_2pXQ", width: 3000, height: 2003, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110092130858444696121\">Essential Extra Gift Store</a>"] }
        ],
        summary: "특별한 날을 위한 완벽한 선물을 찾을 수 있는 곳입니다.",
        updatedAt: "2026-08-14",
        highlights: ["다양하고 아름다운 선물 아이템", "친절한 서비스"],
        tips: ["가족이나 친구를 위한 선물을 고를 때 방문해보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 7:30; 화요일: 오전 11:00 ~ 오후 7:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.shipoftime.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10216290837794575989", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EC%84%BC%EC%85%9C+%EC%97%91%EC%8A%A4%ED%8A%B8%EB%9D%BC+%EA%B8%B0%ED%94%84%ED%8A%B8+%EC%8A%A4%ED%86%A0%EC%96%B4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "기프트 마스터": {
        photos: [],
        placeId: "ChIJl7bnRHMZ2jERAqEkHksYLTM",
        placePhotos: [
            { photoReference: "AWCwydjf-_rUnUWq1htfgDhErTZwz3H-1iGsnQT63RaKYGuxAimEQtm0SeOzIYZUQMnx5jOmF2dAvLkfXY8ubwa34EEkw_UIaLOlEnM-6jiuTHbgSNazDUCnba6zfQfmQ4Qh9GfIqMU0OGlDx1DsLabMx1ZwPS6wV_0arVrxoP_oVKC97Wsa8zGc0zNaEIKmpR4UMpZD09c8WGrWE4Ax7xQ1iBt3bcLTFnlH5oxPNqevqfbYhfwr6gkASqNAj8MWsNO79ILfGBHlXWHbLnDgPvL-zvIKpVpbcfKdmx8BVn0Rk0Qs2vGEoVzWnsscX9ISwaaPSXH32o2pb0mEYMi8qqgKg5LnP93HGtXOF1KWAY6qMVFaYZElqQYu0O9Otm3Ld3dtGdeqAlX6r4FoH51vsGgaGkMXo0JI7tfS8P3DFTjYniOjavfPmLPwBNn_JLvlHSGc", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102102752065940130654\">Gift Master</a>"] },
            { photoReference: "AWCwydipEqnWs14FIULxbdNNYFaK2L5rqp_qb7AOhyxu9QzhEQpHXQIrIAhCaPRIsVNqwabYK3OHKCJXZBOVslfyT_ab3ENirz2RPZJquNflj-0GvujIG-_tuVzHmFVvzlDc3VVViXw1T1lc_etCMhOr7wZchqLwbC44QZ5IVw_r92de7Ras3FuJ83N7tPWGgASgI7hdoUn4sZ7JjDjESnDPv5C2dRK4MPDZKYwdrEn03rMK-E-mb6KjnDuMeqGyuUyhNm1pjySRs3R8DnypstJs6ldE5YZ5pAly6CVGxJzfeu9ftFexnC5nG7pDCVffHkcmDptf2_TxuB70Q_FE_ILqVbSj60LLhT4I_l75odJ3NKFNasaijCDByLHfQisumLlOCrYZS4IQptsYRTAVxHgPL_EYsuDjqIlKdV8ZrOxOWpzAo0iibAyHuob3rreO0AZd", width: 3113, height: 2335, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100212538096699683483\">Sarath Upendran</a>"] },
            { photoReference: "AWCwydhOQoLdBRjpPBqqFWCJpyMIvSC6Kgv8hgOtqPx8uJyK4ULkG_OZ8DYlKEXjthoucDMIfEOSyqXQapLMVIhW2JV7DlQHp3x9kCe22Z9nXqvMbDcoJ4eqcs6n-g_Ha2jZsKEbKoluDCgNFuqdIiveTsZtWSWF_dlblbLonxilTXxx89W9W3Jq7wAzUjob0EztN7sA6Kl_cy_izRWDxtirFT0slQHZmDX6tqzLQ3yFCfs76bvOplTtL4X3KWAwJWFqOw25iWCaYMBIzrS_HG_SKU1VSfcsS7ZBiMfGFAH3-VvcdayF9BIHLSM4W-zwLlN_PJM7JQfxbw9-GnGmUmY5B2RzTeppKi2FHru2_wIj3rZE6or5WBc1TbdFPmQ8yjGhEMi5zrjnyCoI6bxqUIHeD9YJRUoukrvhZEq0pBH1ml4XwlmvBJxeIksA1TY6_dID", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102102752065940130654\">Gift Master</a>"] },
            { photoReference: "AWCwydjyHMri2aD4H402vB11D6a0Igyb7TdUJ7eAr_GdxAyKydp0wd9hbKYzFpAGmrK3Gl9XbV7ZqtdaTqG_oBQQqFVC5DWMVgUapBxvcFeDT3Wn2Ch66lZZOEPOq-71rtoVTTFhSZN0HD3VWq0woQQYqdinFLfxtj3Xjq1_082Eav0KOqm8rZDGmnSlAEh0mW2LQ-P7hNb__Lj-GccSHWt_9nz1_wTKmYJhW00elZwlYeP5E1pkFFNuOJEZxFaZo9tvLDflqtJGqF9WcKr94f5hQP3AaBnY4UDZxk-N1l_NXf9eQcrkmHov4NhfcahJMmlhH87Hyscce_ue8FFapHbbzcCdbFANYu5HIFQHUkroY_GfJrYogaIEQg0sZFpcCO5N_nud8He4CDekAWG1kSfixgPBEX7KwXSdzA8PcGkscvSJnCjEfdYUedjZgBSw5iyJ", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102102752065940130654\">Gift Master</a>"] },
            { photoReference: "AWCwydgjKqZf1cjoOEt4fLS6jMcNAiCHmkWmCsP_Nbho9DLLkfWRxwje_5IkGfDVxZ4UoUojvf3EL_lYqpVcJs4NyAqHk_KeqWFONFitt-oWm5vdqu03TJ27aE4giUa8Ux_-AJckrS_PhMgTMRMalFjtEs75RIAaDFadCIyI4ggU0Za0an8iqOuyOlsLmm1cp_ODfgpN1Wq-paIdtMQGbGnUTW67nRu5Mx07Z4yVICptBaO7fMAV0J1yvrnH1_GUcLbPMU_Go0CN7zSikG0XDgrC_jrjSlvYEZg1_nXeOoUYYd-Z_HyAOXaGTLNI4BNtx2YrrpBeOvrJjgTXg_cLMRORb6oHmbNhWtUb5qurAw45DPr7nnmgXx-eonIALokCQ_yc8edNpJEX4wFGNPAdOZY6j-iaUFln8t-TSAebS5DzoT5j2EA88mQP0sKR-UtVDdSJ", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102102752065940130654\">Gift Master</a>"] }
        ],
        summary: "다양한 싱가포르 테마 기념품을 저렴하게 구매할 수 있는 가성비 좋은 기념품 가게입니다.",
        updatedAt: "2026-08-14",
        highlights: ["싱가포르 테마 자석 및 장난감 가방", "싱가포르 테마 초콜릿 등 풍부한 품목", "합리적이고 저렴한 가격"],
        tips: ["주변에 다른 기념품 가게들이 밀집해 있어 방문하기 편리합니다.", "관광지 특유의 바가지 상술 없이 저렴하게 쇼핑할 수 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오전 12:00; 화요일: 오전 8:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/SGGiftShop.Singapore/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3687630380793635074", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B8%B0%ED%94%84%ED%8A%B8+%EB%A7%88%EC%8A%A4%ED%84%B0+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "페어프라이스 파이네스트 클락 키": {
        photos: [],
        placeId: "ChIJjZniPwAZ2jERx4qx_7dlNy0",
        placePhotos: [
            { photoReference: "AWCwydiG1FQ-XVLhTUiyOZZ2HWc-Xe0BFT5uL2_pS6lgwXqspxO3LSdP47ZSYl3TRKgJzSfAKdr-jlTNRwcXQAro0ywm0zytQmYdcuCX0UAXcHcD37_56tVANsE8O0nfGPawsg0G6rncmk6ILkWLre3cLgOvmN3_8WXtmSGJEfhhtb0oW_93YBMgNiOGDFrqr7drwAy5f2J2U1MdXzxo0e9gfRbd42ooDhoRWScyrMdkWjKJMuEiLHU9zhdtXozBP-bHsik_cnU3blKfyw7JFvLfPHNQqCKwauG-QlFofmAVDSDY6FpcmF4zPug16M1BmPDf_CneQzNvCkZ7mHlmFHyoPg_F39yBFZ6kh3Wt3nY1j-I53UoXeEU4W56AVVLqP1ii9mk7M7NgiRwamsyDa9rnyb5zVecfqEFIoze0JQirnSVSZUKX", width: 3599, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111548471902598864985\">Ranggie Pratama</a>"] },
            { photoReference: "AWCwydgXHoTF97f9RJgCVx79RxQlLEm2Hp2DHxf-TRmxxzEsRCPXmcEHIrHgI9rQ5x4DHTp2WktXTYDHr9yc3ub1WSZR4i8Dae6c0pbtL_TApMpiSMGfMIiet07u9ew0Det5y9Z89VLb_jsvn7VficUF-zXiz4qLNDaakfhrj0LUCAPFPpepOOLSnfPdtyO27A1_fHoj7c0fAWJjzC2kj9xZnpOYlvSRrhuEVu5QhXnPTHl2dM86l-EiZNTxmBz9X1sNz4lTq-pf67vyr_2djZXB-qLdM8yltAWF9AP6uskENExRuaCTXLrR-jJ2fKvBky0E8YgkQNHd2rSSzQNY3Ibk6Q964qWA5a7dcrcHkF6fHiMUu2B7JN95VXf0I1KTzrRJTR2u7yJALihbSZucl5zmFjiVstc3D5HnOF91QxtDG1I", width: 3378, height: 4500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103434247940086643832\">LP Yeap</a>"] },
            { photoReference: "AWCwydh8mgoAUeiBu6Dx0lRUidtsPefWgWet0-_8v05PpYdZEuJFfMklKsB5RVoOS4lnAwYF0tHXqfL4Spiw6eCx0osAc6AhDyY2cK8T4gz_RTl_OYjpfCgLj7GVPXMRsEJFnydIXPlHHlVx2b98dumTgDjojNQyVea8uL-7pBLjmSFM8huSO38MhGs1IXRGjEiBUNaBlfpNiG4JHRM-UM9bZVvu-_DgpgrwWY5iTt7xqETXDAhpCN04fdjLyy6T3PtnZmlS-szoetrU9N18SXSk1nv0Epytdz0CsDs4ZDUD2TI64VWAdl0biexD8FUH6JsC-DLDKFRdoizgK0luusXwfUzvpP7HAEn0GImcqQHEaI2opRF5zLZSjhoLgauTPWI8dTXZ6dzmhqpbDz7DABYvhXrMu-trGY5t2k6i9yX3MWTKV9oWm5cQiELrdswp5b_8", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102656561598060120185\">Florence Leow</a>"] },
            { photoReference: "AWCwydgh64wphj_DnqWl1xiztbGGqijwGm6bd5ucvyXWjUzWn4UDMiBZJTUxWy-1BQo0W61E1GHd2FIH4Zk25MNKVuvK16uTs65C97YOY74X6y5uZrn_8XRR3h75gg2Wp3I9qxL6OwjM6tuSLEKkhe9mHvCRfPy4iQc6AGehhPkNnknHJEKsj_MDYCZ4Dcxj-ceRkMMW8Yi-Z1UtxdbCMwvMVHpi5ct_A2v8_4PUAYXXfO_vOA_FnsBDWS0jEB6Q00yCLrvWLhPFxufJv6h1zgQdsJCFLzuRQgNfTnlCkdX74Zk_3_uPUf40etlaO_Cqo-MJlFm-Gsu38oo04meSPwTX5bHod2_bBS9UYQkzvVxh3ySJEPrUh2_MjE3Z7lhZ7rHXEXJ1IRSJO_7eK8pjxj8-g2Jv515Z8xp0KsQW2m7qpLuWl_KQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113861923464679544218\">CP</a>"] },
            { photoReference: "AWCwydgIQ1wWy691Mz7AaNdki6FlRjd_5p0DVJnDDTTTdWIp5wY1C-mpMUzHvq1NQz7q4r4vKgHo3k7XVb9I1fdLj6VKgwcF3B5pETAkuG3cjQQD9jfi_z9tXrEGvo8-vLh_kAVXPe2ORp5qDXfFxl_5dpumH-JcnqVBtO12zpnI_UroAcSzXfzW3KIJBAia111NeuqM2_a-1vnKosHpKRyE2hsytdYWR5t-M5rKYQ2pi_t-x7SA61zejeOY5AwbBlMJD6meAslGqVhwrQrf62G-S3Ui2GJ-ANmGUFwZGrHqH-8PEZoPC4TZ84D2R76QHHSrIniYhJQG7Qx9c5RU5V3Pl5dwfnVyipDLnJtkcEBBCYghO6nq-wUIgpdkPlt5a6fWzVVqvBVddij7jUwNQE5xRsJbuIWtIbiheNW0ShCxXkdeNg", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104323017563348374305\">FairPrice Finest Clarke Quay</a>"] }
        ],
        summary: "공항보다 다양한 기념품을 보유한 쇼핑 명소",
        updatedAt: "2026-08-14",
        highlights: ["카야 잼 등 다양한 기념품 보유", "스시, 햄, 치즈 등 폭넓은 상품군"],
        tips: ["공항 기념품 구매 전 방문을 추천합니다", "다양한 식재료와 반찬류를 한곳에서 구매할 수 있습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.fairprice.com.sg/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3258184696369089223", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%98%EC%96%B4%ED%94%84%EB%9D%BC%EC%9D%B4%EC%8A%A4+%ED%8C%8C%EC%9D%B4%EB%84%A4%EC%8A%A4%ED%8A%B8+%ED%81%B4%EB%9D%BD+%ED%82%A4+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "래플스 부티크": {
        photos: [],
        placeId: "ChIJf7soyqUZ2jERz2YH4_UGJFE",
        placePhotos: [
            { photoReference: "AWCwydi9fLnYgnwWqr1k6fVI_GPLhFDtEAxHq7kEBwPV7TtmI60Oqu8JJIpJ7mSJJ9B_nBE5gARPqJlNiGKFCcPUePEmwFB7aKY0TfZ92GSgovsvVIrkDPRluKiXyECdcXaj69f9ktNj5wVxq5p9u72yadF7q1EMfwd5JDL2qxA8C4JScNW7F8N7CxEGReC4vTC0_m4P5JyBodJ6aM_BsyJ4ie1KkHV31eu91iQEUGvW-j9M4R__OkMrfekmjPcQ8jKr6fwZnqSJ5f96W5MsKf4fUZdifu9ZBUEkjlLNwwbdrutRlRsQozZ-xF0vFas22DxsU0rANWVivDdCCC_kNHlW9lFohnx-i7zflKKHxpKi7OEXLt-isO4_z_mqwXlAw7bzgXP0oNXcqDKCkYFwhQ0GpX7EF8KmvWkM0FVQd8VloWg92Q", width: 2448, height: 3142, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108587097813548525260\">Ann Hanson</a>"] },
            { photoReference: "AWCwydgIY94VkWk4IIeNtq_NlmUNsLldYe6zutp1xEdKMg0-SWLQKFnrhFguT5hVpsoIWIBaF0TPO5iczWC1UABdyScnFTDJhwU6An6n7FLihQRGZC09LEGvKC_JyO8Mv1VBd0n43mOs-qpTPf0r4Sm1hs-VWy9cNsTz5O-iEGoDLi4QO4ZUYSco-yRORxtPqGXM7m0bv2UB6ohN71qyf1zxRkrODOJ3iPdgdIR-zIFISPp6sG969N6n8RRBsB1eKS3DoDVcSfyY3DG4pWcLqhAEof32dpMGyVets0L5H3dP1dF_0SSbQtuF0eRiVh-oXsrL2L63WhKSS1qmTiXVlzd2e84JPPY1GoQ6yNtWdKG6apyBQ-qkgeo2YQn_dFGUhF2nbiPFSY-dH_ux7NcACpmAp5RwVE6wmhmdnDB_lJAOW-uSaB5b", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117553835180250865360\">McYLLe</a>"] },
            { photoReference: "AWCwydjnYMJ_1LqODS0RYCHtKe95J19ekzkzdCP2B4PI_20818OSJbnHp2s20z_1qZw5rJ7lQSOe8gyCqWcS_Igluy-m_tyFR7u6R2qSxPqbhY2PLVxVGWCu0BE94Hsvds3YSK2B6gEqHoRxBQQbuU-xIGnNJjJho85AN4cG4AahERBiLJOGD0hbKi0yDdemcQM0xZBnBcP1x-4w4PKUHVInQHPDbfnRjhP3OIQd8IVY94gB6UE7PUh6DLybxvgoMDgeOmpFXzpsw-PeVkP7KNdOKxoQadSF6SWiOKGYeRRm_z82c0gsjFudeLoBj8QT9olLcxbtvVpsOuIMyXsB5PfUZG7aAWQp_ql7Rfd1F-uGYgKjTWyI0HnwBV57E2FtJztk_R5f9DfOhdqUtaemU6rY7AOOeP2Wak_OfKhzAjzg0DhKUx07grkTlzRmO3nPZw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111111138196744095886\">Hikari</a>"] },
            { photoReference: "AWCwydgc_evbp0euJUj3oNkP2l0V1IwofVi6oLrZITXmvoLI1Kgv_Hcb9SzfO2_MNvXOxc7MpKs1t3yfSHw-8JsWHQPeqVap4M3EFXGxjgVkB_iwbJayuDGslMXANnEabcFiTFPQ2coao-OE2R309oAurdBS-7yQ7iaOv76768ChEab1s7oSawnZ2FwP5mjIDMKbpD985otYQr6dBPaxM3Ym-gqlnlnCi0RvjZ7bugUIMLWQ3eDirhxgn69YE2lOpkeQCKuhIVqE4Py0YUduThPjCnN8RJRl71HMsU6TdNw8aEkfoInKz8KhVJZf8iyeb-zuUunEO-nrjBkhVeHI2ovllKYxAIIWUFhueIcslozFZV6U-y7Ku8UvMzRSQaISj2Y03moA1otqmEbrJAe4RDq5unJffY75AyNANRP7rumFRQ6OQA", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118395200523287063467\">La Madame NomNom</a>"] },
            { photoReference: "AWCwydiQOPb5rmdH5y8YFlylQN0UzW__q7uohi92HjHUT-OpZ-BGc3bcLvFKhSFZxIgkZxi76BXDXXReVS2fYZtDilPgYdZnk5mv1G2Gxh6AAekwUKC7NCAJe65L6cmpWj2j9h4MTRbndCXUGU75Af7Qh_AmzVYfks6Yuml7at_GJFCosrNBJQp2_yiKmOjPRJVW8daduYMWrQyIVvrok5adDA0A6mh8OvgRxwziUONxBFBnTrGCsGSZ1SAVCNtUEejBXDuNrW718q6-nf6g7CZaHHl6_SidDpI3pH_oxYBF3tM1bM7yPNKWF5Vizswc2SuoCg3DdvrU73s2mdvglMD4rmW1fc8UR2KcBFeXqPaKuoRx7IkqR_2PSMv5bGILIaB0VK63pjZMXtmD5uVyzGQ6slXL23uMGJmtp-dbr216z2JSYagx", width: 4000, height: 1868, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102318344788353619319\">Fumi Shingai</a>"] }
        ],
        summary: "래플스 호텔 부티크에서 싱가포르 특산품인 카야잼 등 다양한 기념품을 만나보세요.",
        updatedAt: "2026-08-14",
        highlights: ["싱가포르 랜드마크 래플스 호텔 내 위치", "카야잼 등 현지 특산품 판매", "친절한 서비스와 세심한 포장"],
        tips: ["카야잼 구매 시 전용 쇼핑백을 제공받을 수 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.rafflesarcade.com.sg/raffles-boutique?utm_source=google+Maps&utm_medium=seo+maps&utm_campaign=seo+maps", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5846805869379413711", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%98%ED%94%8C%EC%8A%A4+%EB%B6%80%ED%8B%B0%ED%81%AC+%EC%8B%B1%EA%B0%80%ED%8F%AC%EB%A5%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
