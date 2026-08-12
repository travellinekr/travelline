import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "스미냑 빌리지": {
        photos: ["/images/bali/info/shopping/seminyak-village-bali.jpg"],
        placeId: "ChIJR-PPjBBH0i0ROpxHpPPJp58",
        placePhotos: [
            { photoReference: "AWCwydi0UA1EFkLtRYBNp6cE8oGhjVOvjJ1UY_SqA3_iFfbubevqIC44rczT16NhZZ0FhpUJoxT7GRq32CySqNAzgaDSvl21SklU5vxOlC8r6ivgtzCcMuSCTNlRhbqCd5luXOfK-qMbDtM5aqH-3QZkg319J1kRH47akpCxfo2jBxh4OYmVhDK-gnOvMxbPkJZhm5t-4KgxOdIZtCIQvptN-h4LnFA2h5fsyWi_L2WwqV8m1jDvICSidFvqQ1WmfpSzG1zBeeGZ9jxdvnXCdScCuB7oqTCz9hO9Gg94g3zH4yWHKOJIksW0bmjiHwTjvBm-Kako3pudf4pVFPgMX8DD0jwVzvRfHbTj89GsBkGPg8CqWqynL86bP_WoJ7ALr8xSj5n7SyZtvFuocS6W-rPO8-7GDza0xlMr3xA1j3TOyIITXuHs", width: 1920, height: 1277, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102585993636904941816\">Seminyak Village</a>"] },
            { photoReference: "AWCwydiyxVtt1uJNeQImFChb6HYy0KnLY0NbiYXEn_JIgnDkLicjpFWvv_E-_Nr-I5KfQhVL4lpygNJ8QPfwAkj5FyeIb4doSx-xjvCMsit9fMhwM_p6BlfH4GrfXsAPeJibxeO4EdGFJj7cWHr3Pkjuxglr0rthlkZQfiFISQ4WWCGw1h6mzEZGWFrPYdYbJjICIY6zTh-HKs7LlkNvqQuwOarGiLbaEHQhBXkD5ZBvF_zsaYyirtM8r5VBd6sPB_r3GiJk3qhoxEcz2CDGCXnCx9Kr5xwdo7MkAJDibCLNNsA2tAsD7SaErJB24xY7-H01Elfk_eLR-Jf__ymTsdECC09imcaRaSzQsncUkB1rb2PCqufZc2pzXyIWAXy2K1wd_7UWA74VnFYBPMqeNU9o-1zrXDdCPAA03g8DuRpMk67YVKBBWjYvIKLjFdfVrBZt", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114232575142728205938\">Vania Hugeng</a>"] },
            { photoReference: "AWCwydgnEahCrPtB_lRNNpp6v5wDUJkX5eJMFqLAaWe44q9DMmBkB2I8y4HUZfyllANUAVjfHF-z3A0Xw4l0uvZZYGlOfw9yV5w3WyUkMFTDMHdeCEdrMh0NEfoCCn1dHMolZAD8Skijjofnnko5VzL8k_rs8IUSu6GDpXkhVPTOP0jxeGlDnDxlGthOIQcCzvJkAkf_QS52iWbMoPo4ZrkQt1ft4UPFO305NZQpesse5fUFv4L8DTIwT77cRer5Tq0UGYjRNEVlllQWQTZxz-zsYu5Ao2zBWmONwhMAJuM1CId9tfLada2WnGhzUqyLf-RJeThX6WRx8-1xopqUyB_CQdT2aydXE0k5x8qYRKBXGMjpZOXN7pYJ8xHv98tIOttsAJgTq-9QIEwqMZ2BvYGwyQ2qRJ57MIc8Gvs2Uj7VWQ38Lw", width: 3833, height: 2687, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114389342210806642170\">Shaoping Sun</a>"] },
            { photoReference: "AWCwydgv3c2FCB9NvSkqpYgfxIIABjH2Qz5Y_EKoXTPDppeaqrrbfWggEHkChUQ0s0Xv2EvHGviO3tgmUrZzf_Q4z81cgbDz0G0oYz9Q-vSelWbW70tb-3gjaZtTjT5qkjGO2KX83_Vek8hM2MjRT2Um8gCUlr9rwS6Sh9wtGnsjPtpKdc_THwiOodueHbJRJ23Ju0PO_-U_vdbIxV8nnmLIfy3RtkVIzXdktxTBanN9Knt_KUAcaSsulI8niX_R5murOdQ_o4tWrerCY7b3NdvjdBfbuXkaJ8YDmzHcVd8BtGa53FIGIQ_ApXPM0PKHEi4J3VhIWeR7NRm7ZEo-v0R-s-H87r5UdVhZmLfGax9fIxgGLWEBPp2TJu4pxjzRwXOamQFVxKTEER2mqbHyjdH7K2OX9ume43QA63eDwjwMxbeBgg", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118090492052316008029\">Bryan Martin</a>"] },
            { photoReference: "AWCwydgxfa63k8-vswkLSIUUD9DzaMKljtptTBoR8ZxYShpl4EklHm48HXD2gwaA4zNszRVwVtDYJRIuw7sPETUiIHfxA_mlSkxwAE_VOCkrN5FkISvamhsrElJU3jWBhCbw5pyWAFSbTZaJ7RF-J44xYrwzuzPaOJKeg3T-1OqefEJfXs3ovcNurOsLXrBKVZqgwD9KENNY8uRAdLsGQiie9Q3ZY-41agi6MrVkuCPnJypZAw8MeVJ_64_kpM8wVW7I6mJUn1Mrs7W1jrnVx05IIfLDwEVPdy6xcAA2ZH0wMUnQJYsP8nDMJQk-Pg6vKWt-fd1k_zapv06jbelwe3lcm-_zaHWAloM3Wjxf5VWQICqpnmcX6cq1VTe0RzizieMnC2IIs-2r-Ueg8fFqgubUEqFVsQh1xWvglpCxRoY9UQZcXJE", width: 4800, height: 2295, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111970879855654184253\">James Aziza</a>"] }
        ],
        summary: "스미냑 빌리지 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 식당가, 실내 쇼핑", "평점 4.1", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.seminyakvillage.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11504385821411613754", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EB%AF%B8%EB%83%91+%EB%B9%8C%EB%A6%AC%EC%A7%80+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스미냑 스퀘어": {
        photos: ["/images/bali/info/shopping/seminyak-square-bali.jpg"],
        placeId: "ChIJxZIeShBH0i0R6Zl5LzayYNk",
        placePhotos: [
            { photoReference: "AWCwydhPu9PWVLSJsSqNYExxSHrzQxavFsUYfUNqlflz9PW2BB4UXK6i-9jz_5KnlfHJ0_Wuh2bE8tGolklwr6DGHUgDH4iCm6BOFJTqW32a_KQ5ofCoGgI9w9-1-zHHTK-zD4zgZGtpNc3kRHL4agAi05tEmo8gyXG8GVhzSron-7Lti2WP5vF5b6cwW6uu39Of76S3yDIGu7SbJW2POYuuqVtsdk5EW7OsSdDMStg8MbVsanJsf9O9htOsmukybX9oyGQrgNuinMcyE-8qNR_BOz_gmI2_dOYfudSlvMXPGcArQEB-8Mhu7HuyZV3fi6QQZ3FtXwz3RtVVyGDqu8cnB27O_bn7eFBZ7Jf47v5Kt3hA1vQl12pEZcHNMg7R7gxJ18i-EQAcWUJ2J2p61wJm-mEzR4JZpJbNnUveX9SKQkleZ_Rx", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106113139769794356851\">Pillay</a>"] },
            { photoReference: "AWCwydg1CINBCcEaYLVqmrYxivj9f2-Aagw-iZ_ijw5-BiaLx7eGSfqHq03E16YjH5Rs0mGdX-PHarAqZEUYx-UPVaMnEsRXr-aGnjePL3TYEVgk4dIFYp3Ka7sdAZ-FWKpXQKn7Gfjmo3GwF5OCYDMgH6_n1JzqLYh26qLHSQIGo3sNnNprCxZt1-6tgNsezFvm0x6t_s7dhylJ8HBHK0gwEaG88LkPz5feIETv_Yvfg8EpC81TqjDTzt3VGiVMWgIMMZYFqsSbiivSPElbct4ruq36BTAbSxP2NakjOxFtZae9_L3sMZGCcYYznKteIGKyRbQr_xPBoUeCP1109DvD77nuaM0f5RukcdxKq8m28XP84rtzBJkBP3_j2jAUdxeRzZ088cyABN1wz0eEoX0goW5nIFq9aEfQLzMIsc4N5M5x1EZr", width: 627, height: 667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100660128471794201008\">Seminyak Square</a>"] },
            { photoReference: "AWCwydgk_8bf_hlT0eaYiqJJn2Bs6at4rrhosPcysF5Dcrh0IPhXzSa3fvUkuid1O3env8xMXzP6Ek7o-oSj8aF5-tzWX6vgLtg3mHbMECBpbQGngEPQAH3wXyWS-vT_FN6UA_i5DhiE-4bT93KR-YNYILanCuqP3a0bnuGu4EPvGspwXA9eL-z__F-vdNUuLMT7VviVxmPFnbiJCRzS-WK2eJivVBba4C0TXLOjiUhGpkf4FrKjUNxaBFGaQz3ZArkAmdfUc8v79MqQM7J9uvOyQqAtk8ZW4-lSROiDITMdy103fqc3_SSKC4Pa-vCu6zARi81XVE4g7ntINNVep7u0tDAJ4Agek6s2MQlV24OYsRsQrVAvFzhgXc4kCBsWjRWhlLDc93_nS2I4dvhO_63k3TsbYopb91KEmibXPJEGddJ1_5eQv_ehHaZPdKKMPtZv", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112155184672633529696\">김긍정</a>"] },
            { photoReference: "AWCwydjlXpsxjkkvDsfvOvuFeTN-4Due2bHl_gszA7KNAjVT6jY0sPLZ2h9r9UAflE1hSF_8tFdt0QFmI7HWfFnG9cn2L_FkN3wjBzhTvQxZVKo8B5Wt_gaz_a9NXUzCguUkBCepcY1YQJLkt8ZdI_KuSS_JvXOThO-RBs8nJ9W-3gJxCWKLUkqHbqg-R4inDfcG9_CETadQR_G_Zoke95l4XYx3B7dYp3YQQQnx2NO_ZzRoMfpwvo0I9hic3v7x1pMhUk5tcBLO7NArsMsWe55V0L_i1ZqjvunQvYEmWn6ZNCEW8hbig-0M-LtvDm6nOzfkVECr4CbsdzlPUgUA2vvalN9hYvPcd4wsshCymiFA4uImzrKFQsvAraCO1JQsSh5o08vqFv3o-sR_TXEfeXHWH2jzkaD0cACkEXCHpcMQ3A5cbw", width: 2898, height: 3724, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114389342210806642170\">Shaoping Sun</a>"] },
            { photoReference: "AWCwydj9Xpzu0-xOT5cwaDTzpaHAn5cD8o8bV2hxZs3eEos0tEoZ9VCU3iA96BoUe8PXi_RLt6lysO7o97s3P22OUnarrEHjyzNlh8DXoOzwRGlJrEyfmEX4_U5GJeRocpQPYbMQPoVTmSch7ysjuDOFL-u8Qqdrx2Mpn1si45G0-S1BV8sVjKkmklPLXaLxCAkQ9-FDBLkED8WVlN-lvqsVxjf7FT_4qIb6_8PZneME4tymRjLcSUT0VJVrvOYZtZavnkoG1sAZ4eEf9oruPLfJGtCBfQQeGXUoJ_7GIXrQpjnWvwrOdVNKgJUs-umVPk9WrhttDpRcI8EFmUc9UJNIO98F32FNGi0TnNIA4ao0ytVmLMUtLqhpsAItKxApiqpK006Qgccq_uNJSk8voOA8111LGT8LTSDrXy2EhqycnqQz3enw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102067420016100883443\">BRUCE ALEO</a>"] }
        ],
        summary: "Seminyak Square Hotel And Villas 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["부티크, 기념품, 카페", "평점 5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10528880290974469178", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EB%AF%B8%EB%83%91+%EC%8A%A4%ED%80%98%EC%96%B4+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "비치워크 쇼핑센터": {
        photos: ["/images/bali/info/shopping/beachwalk-shopping-center-bali.jpg"],
        placeId: "ChIJqZQg4L5G0i0R5l1LCcy5RSU",
        placePhotos: [
            { photoReference: "AWCwydiq5mhQKarT1Wf98vmjyjSQiKbw5y3oVDdWCSeDIuf_QgaHP0TJZpgYyLt1ZlpLyHqTGnrS0URSbjb8swEzCCYtY3MjNLSlVHe7LxlAOFT1JFF44Cm5k8KsAnXpVhwJiXkjXdHZli__G2EP7oZnUM-GZlnN3bPjLhcQGDRlGjZzSrACY8w-SulF7EEZEBmonaRS8AMU076epyj0YALNdw0wj4H4mcSojs3OPhJ1W6yeBhdUJ5TXolQthySu3-W7DB2Dr4jzaq4LIGKo39Z3_Vls2N8hVcl_JXkycnDN90a21PnNi2XJL67-pE1tUsjw-MIHzwmdrOwgaj-NdxQv5U7gcpogP6pnQ8--Eg2bGMQSIwzDipfG5ifjDploYxroGU8g2Sc6jtO4LhOeMsFM6scnRcm53MXFmZGuc-3eW5aIPaTF", width: 4064, height: 3048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100420672498636221003\">Suhartono</a>"] },
            { photoReference: "AWCwydiEyrTO1TAUCwHNM8wzi1vrg_irGHUiJU42wMijrAejgbhnLnO-DjrCqD0swdCrlylPwunb2TqxWn2arSKGpGq27QtJY5noZDo9-cLFRysR0jHZdkM1ONptuZYC4efUZRwPVakTYRcniBPDsSdUUD1EUtWRJxgSxD7yZD0IH53A3Je8m9KbAJ9IKYYYZfX_Pre3h0tco3-ql3UWRaSiSpJ8SY53_slD8yVDshaABTGK_8xB7eOyfhAdPIPqpJfZsdruTR_jXHpY6eAuV4csredr26pZu7HLl9AU8WPoMcrRXPSsJ_Sl0bDV_AwRK2fYbZpe-mS7ifArdxba4jjdgaOAIV9lbwVA-a4vCE1Gdymny0T-5BsdCx8UvY5J82foIk5G8LMd-yg7y4Mq7MmUhi91Wo2YHh-lgv9kSUmcZEzMjTeDL9sekOpKbyCgLmvD", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105581089367113106705\">Ravel Raf</a>"] },
            { photoReference: "AWCwydg7tvT6yQnmWg2I9AiBkQuMG0ZfOibsLcLBrgjr5SxOKjrW31JqL-hokl7WBK93AxfkNj6OwVRG1qWuS4LPtQ8hdxUzMVQYBPhARww5Hepmy6-X6ZuAlzOLDebr6780pNzgN17vQ5yBDUfUw-vfXblB6KRIGlc_-_AgQk7ar4MbDiymJ9x30pcMQ7J0NFf5hl5EBCo0BpkCUtfu55nCv51PtYoSzUd2Aid-SJZnh58wgLa-TfSXWn-f_RXEWE8FIr5XYR_RqJvsMjdsdT3K0vUjpytyKOvsDIcr1YIWRSO_WK-Cm9IZztb7yE_voYNNfwJOULuCFfA3ljUwY_DkLenuvtxY8lfAjf39RORkyKdPyYd_juyb4j5AgSPDW_l0bMNXe26ZmYVk8QGt_CqV8LqLYEHfo46u-NBEUoJdiRUj6w", width: 1280, height: 429, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107561663901666093393\">gusthy mongga</a>"] },
            { photoReference: "AWCwydim3WZeDmIeV1hubPHklF-8C94mJGuWZT0ZtfNNnvwR52Rm76cQEAqtjPpW2kmNs_6pqOC0GEAbrIyCrHNrVY0r9OosE8QQhK596nCHDETDH9BL8id3C4jkBDSn_epA_nVyQLvgqK4Qopp4jQkocAQ9zs1sMcuqwzo7P4vqAbnUQIyA9CcqhnVyt_1y8o73I4eamJs_QiApR3Mad4zDOmQa6Xjk5gyk6lYlv3cZhtPtesXxsDsOrNpyHVDlwebk-9WNUT8K_REGMIF_VDFJMuYHODP3spXhzdzOENAsACfbdK4MBiCjJI08fslNwGO66apwMCjIsE1Vn2n_cwHT1WxeS5BkYLChcVmobNToPiZoz2Zz5tsYVR7JMv2TZyQB41gxH-yB58OHIbvXRvmVr_KMKZv5OUlWztNZHj8T6KU", width: 3232, height: 2424, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105830312133325864396\">Mary</a>"] },
            { photoReference: "AWCwydhhRwTrWAfl9-crzJR01AxFzFDkk1kW_iCFYmw5X4btOhnMTX2K09BMqERs1hCL2qLoRTIt4AFQ_gYRQCpV8rE5ddQpS4mokZosfCfPZA8CgqKc8Vu0Isxwow-GtWz2Tlcnkod3PTY-R44OLntpGRpkV1VKxyhaSRJ1SZTaI0PAE172ZQdebdE0Kdf4ViFl3eqQO80vkW0QRxDtxkh-CcrHBU0TwkDqZTppVDBUSRrq6EmmKAUFxMfM2AaYljNwuF7OfQIp95GT2WZtcZ_CeQPv4mSocongl0zrbWAQrn0-4LHT4_bkE5S1oP-zGyFIShLFhx6WOTLAb9rzMnPPEWGZpCowLXbPN8ZHTfe11g9WGL5LQhjkzXRiOUytq2OqbDa4hTG81I-hqnTK-I5Lk9gWjea_q87ilihUVZDtOF3Y1k8", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112109709586683633233\">Marcel Rothkranz</a>"] }
        ],
        summary: "비치워크 쇼핑센터 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 다이닝, 꾸따 동선", "평점 4.5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://beachwalkbali.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2685757038776770022", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%84%EC%B9%98%EC%9B%8C%ED%81%AC+%EC%87%BC%ED%95%91%EC%84%BC%ED%84%B0+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "디스커버리 쇼핑몰": {
        photos: ["/images/bali/info/shopping/discovery-shopping-mall-bali.jpg"],
        placeId: "ChIJpQmhxaNG0i0RyWNXbgP7xI8",
        placePhotos: [
            { photoReference: "AWCwydjdaZw-6dnv3lvHYwx2lUH3eOQIM4QP7HxmT_bbY7VXK6aK-GAwbWLeuK_bfeBgt5wkgHTo0oriAuT6oliRG9fct0AxiTrziYgw6GVByreVeZ-KZda5Eg16-jIV8Oevbzas92ZSmSOsZRGFs8mPvrIGBBTxmqrYuwKdo9-AV-pjoMIsTFQGlLeao2XPiZ8EtPBRlGiODq-X7NCooSvxJzyjsT_2SohRnwKwCvnRReSuC3DE29WnfGtFByfecLz9egwEw5NqVd0IHM5jvpgZp_5DlzR9z1Vb65Qopm3VLwdO5lATgC41R3RNc6NPESFRzFg2o5qr0__eJ05iP9JaAqpZeYsAHEPa24PiB0Vm02HpZ7eeI-bh0JM5W7R5LcSvjlKA13ILDA-eW_nVaj1IXPcjvO02jHC08MUqlO1PNU6tQ9vHBjNYtqkXGIGNnmqU", width: 4080, height: 2296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116007468496556557369\">Mimih peri Surga &amp; bumi</a>"] },
            { photoReference: "AWCwydhKGKEzS3sL0cDjCCOBZCXyAGyoOVoFHZ1bA363cvx9LCgsOuf2nNcRN31M8Vw4FMuLPryk-iie20y-c_HPq7C5vT7fJ5TJKfaIJ0OAH2TRytUjYUGcYOmSxaH1RpfWqAfVZtE_m-PlO5Y9maiaLJId7fJviaviAK2tzAiM0TZrd4Y2MPS9RKvHrjYzxWoRUB1Jo7omLLAWn1zNPFmV077qxsELhtn7vij2z3tY7iQRzrJZzJ6G0qbO278gGzuWy5cbX4eQTTlYOd7sgliYvxXKO8IYHRtDhs3KUynil0FlbmoAnSveMT2cDxQu0A1HPbVKy0c1UeDH2CGBTF545DFgsszhc8TS3gJOXICEysJCG0HDZi9zYF3rFI9DXR7wCG-WPg37__Y8GJ3C6D76Lamo9ommC3g9znYszu5jblu4zyxXeAy7NY37mzfm7A", width: 4017, height: 3213, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104745262602954095025\">Discovery Mall Bali</a>"] },
            { photoReference: "AWCwydhKKpBubWZLOZTmmmcT7spJZt7O7Zzjf2ord9b_wod60-SCb5gZt3Er_lvkKjKBvyVVObeyN0684VAQnlwQbJHyyxVIqmXGYE0dTsQ8wFX1Ob-HwtJlMshG7QrkSAkS77QeZvIsEftkntxi2XCDFKrDgYc0sRWTs5qnN3M26ux-0pHtfBt2w4r_1QiOSzk-ZUvgkal_NmiijBLGCrMe75eYy3bWh-N63mjW35CdzKc3uqon8fxD7P_ET9F8MlHhlvptndco25rQhopudD9ms2rd6u8beRW3TQVLlqt0oUcDzt0Tkg30oMRaA8gKYgmg_upSewQUAtiiNZLIGFpz6jJLk0mmLn7vKS_opX-34Xe9NKZkWbTSm_r53HcEcxGTaZbvUtJ3u_I7xdmDGg7NRnrDDLYYYMXrwhFkQWu9RsVmxXpPQ_yIpaeVUb3jSw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105525629059635123482\">정진허니</a>"] },
            { photoReference: "AWCwydiZz-CEpDEbPaCyKxmxB6lu3tPlrjC9zvKxp0FFLEfu_6KWXz17-mHX3VNesGJ6FE_J8INFy17UZF_EOzIgcM1KLz5ucdhFu-dcNJttLjsWc9QHBWFyVzDUOjY7e6s596aSBHrK6kuOmLqpqH7Em34DF4tsyltyD62l55KaOAxfDMsi2gKtg1bbgLSVdhffXb0W-tlw_yN3WpLZGHV-7iHndB43kfqJUNIoJo2jrtTFlCApJZSh8JABD5ruWpWFlPCDRHVnwPzSMQz-v0Lp-Y0n6fNrIFBLdBMnUvtRKLVHS3C6CNXF5JOuYbSDXYdSJfIEq235ovY0xky6Hy2Sgw-gaCwZGgA2kRnvM9wKhEErOvohaFdB_hfmHaHZ04hw0miHSauap-jFagctk5cqBsqmwO6uzUzD-1qkkXwGGdLoeQ", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112895107238408683313\">MichaelTheBuzz</a>"] },
            { photoReference: "AWCwydis3zdUgblvUk3RM6w6g1yDa23fn7Dpqv8HQS4J2_rxFXQP8z9sXEJMU_4z9bHI-YPM4_nPS4AoUO8sydx1ljdY5vElEyRQxzDjZCEtpIXy5Y0URDQjAX1P69FRSppBw-6xWAz5YUC-Rtgf2mJQ-2fsiH_lsPkKZLgveUgbEnS_y2o3SOc1avx09ZsbVaJmj8DG1t6TTtjn5aTEQPwJyCTq5FKznncyH3PBhDg_kKEDRTtyYP2xyerG5zsN7c9v5-TZjVcy0J_Sdw9gtN2KaMivDP7vukOKiydb2befzBjcniymJglFNqpUOYwwFtaM81jEpRE2oe0vrRqLpCTotDmEyfFP6NT1esEhyc_aHhBHLIdXyi5ey3dGxGHW-rXOcngIZvmRM7nAR1qlNvwOdTdAXXkPW7OvfPScF23KXhtBswK4", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115392664223309257615\">A I</a>"] }
        ],
        summary: "Beachwell Bali, Discovery mall 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쇼핑, 식당가, 꾸따 해변", "평점 5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11650716874786225434", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%94%EC%8A%A4%EC%BB%A4%EB%B2%84%EB%A6%AC+%EC%87%BC%ED%95%91%EB%AA%B0+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "몰 발리 갤러리아": {
        photos: ["/images/bali/info/shopping/mal-bali-galeria.jpg"],
        placeId: "ChIJM8AfG7JG0i0ReQcuNYYHXhY",
        placePhotos: [
            { photoReference: "AWCwydjSnl6XpyAi_6VxloF3Zb0t8a0Gy80lEQu9FWOevdz79mBZQJdfl55rZwVpH2N_12l8EGrVZ9wYq_V3UDyFYwNx7qmnAv4VAGaSXIWYGf7OQm2BY7QAHr1Z7hR8eLLZIq30kNAAZ477yIYepHMHq8BFjYC45dJ651xfLFDGAnEKxIBpvJbhsGia9RD205LEaSMne_g7TAHTwBCWdWnJmlt2vx313_jm4PfEKDfdUYMa_MRopEZ-LP5hgSj8miSSwRm9jtJbYux_TMOtZS6CEDVaIJ9eNnvMzaj6rfgJc3XRRHcUnVc_9BqcxMk0DZtebEbazW9ZD-ofTafWnkAdPSUGTdL3YIav44Osi4K_DQVu8PZXCNSVi30xCcoJdZHlXSvdaQd3-mnRuHkCpMmTBmqtst-sJhlAFvWBL_sjewi7yaH5", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105132669536299313417\">Putti Siri</a>"] },
            { photoReference: "AWCwydgXzIeuB_aaYvwpi474UL-yJdYnC4dARPqwEfGzmAedpJBKfzebDLRpph0-Cdl9NZnWeCQoGr9sRfkCjMla7oDomxrbZ6V85JjM2jvTSKGwNUH5E7emRdGYqkK-riAsdzRgTE1LUpae3yRCGw0RWUE0yKZJ20ajSFH-gyTHvLAJhn0tgSZYcdoRrDrSnuxvnNiryVOTG45F4AdLl84bddPO7m9allX0rqI0cAsuiVBCbEcNEuIhEUzX817HDMp_LAB1Gmrrl343Jl2-PixaGWW0BaruANzrar2HkOmVex0DzikmyDkhJKcalY6a7x2CuFH7Nn2VQBu_gcKAFDjpn1zN2930RyV27jPxrO1Vnn6oVL6Pg0eTQctx7PPPoXPhrWpa6YVZ4i7XLoAvpT-2-d8V_G-89IWXO4p7PDdj4tLQs6Ix", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111951050689486003513\">Merci&#39;a Mall Bali Galeria</a>"] },
            { photoReference: "AWCwydgcffDyJKx17Kabnggsvg6Ffe2LsPDXdkNlNfosReqeY6kfKA2xAbL2SWccmRSBU-zF1nQcXdF9AyhAbXYtaojcGfXOttj7RGElkhpHmn7TCoxuHw49UzUAYfltnwSPKkWcz0T3VWfOOZWyfiCB7MuQrWeScpss7Y76VJyJ4kQzqM3tO5BflD4Gdmpux8Cm9RM3FnOaUb1kfT1lGww50RNqi_TIaE1xOGAkJTuAPNwetgZ4C3st9q9qwcKU_VWiw2NeJEVn4wWE_oGNDtXPx5Jc3uU0_2XSLTMIRL5VrQ6NHjufFvacZwy1ILxBflrYdyOt6et20Wz-5Xm2OeGVgkWCNK9P9yjRoTKHDNecyw5F9Nw8oQj1UHxBPhSCFPxauoj8aVP20GpDh4lgaYi3HtRr-XqOHMS4ITCs2TReXpp_Ve7ocadvqZpFOW79NzLr", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107137816142357360486\">Paramita Talogo</a>"] },
            { photoReference: "AWCwydgtlrP2ZRog0NYfp9hGyITBYlmxe9xSRhqNdgUpWztHjmjdWgA55eFHqnzSsUNMwL4rBnzV_UTn7eAhrwttxj44mf3CPlIVe9we1TL0Xiqe7X0VfyOAvhOwcqkNlAzAou9tr9kzV541IObDd29z11oqTW4h9XPrKWGZiHL9W5Zlg480XbZAYHYJ51CS1sQMGV1Mje7vAv_CMftQHR7Jc4ipo_38j5M3qHK0ev0HOJSy4nBnj33PDQuWiZMAecTrxg1bYAVL9B9ww1NWR3aH1_6N4qT9UNqzTv7bEthk9ZlW2ASxSru8hWKg5IoT9ZCKTjQahHPhyjWDKpJlffd24nD-TolCavrRYOkYPmtnobHHPBQ_ZCwsYehN81iTlI3cQlQzDQnoyUCQjsa9SLnN53ZlZzmZVc5JvVZJLa2gUyP5lA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101484014188456774444\">togap johan</a>"] },
            { photoReference: "AWCwydh8wcWMK6QMDHLmG6yQLpogTvEEzeeoQKV24AT-ky0kynahoQetL6cG0dGgZ1AFLsm0c6XCvFfK6rACJuogoKSo8kfxJA490Ox7Dg0sutZ4eUxhZycDTCUQ-GiR0DwiaPAyvtEx47tcavB3snWJ_qSq5PSy1pJKTwVP_0_BITRd-iH7d4TkiRZN1L_xG6N_Mz-Q9o88VtMCICHgNh9voAvcwvVJmJar2oIusMwdMc8VHdimNR0H9rdstNA397G2fV67cvz3cT1yDXbbPQyXxpeUyXWUM6Lh5pXlkgKyQ2AihSWPnDzKLfbSTkaCH-JQ-dP5vjDYFp1q-1qX7UssTzQQy_V_NhCANYUtD2Fpw012THEi6P2bKooN6ZW-W-HPxu3lxu6Rl7sLGIKWWeJQjsQPguo5Oj2VB0wK3O8DApRQuJ0", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110414039958491593168\">Dewa Purnama Sidi Putra (DEWAP060)</a>"] }
        ],
        summary: "Orlena Mal Bali Galeria 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["마트, 패션, 식당가", "평점 5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.orlenalycious.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16341034795191765734", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%B0+%EB%B0%9C%EB%A6%AC+%EA%B0%A4%EB%9F%AC%EB%A6%AC%EC%95%84+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "트랜스 스튜디오 몰 발리": {
        photos: ["/images/bali/info/shopping/trans-studio-mall-bali.jpg"],
        placeId: "ChIJJQRRy61H0i0RmaJdm4RlPpY",
        placePhotos: [
            { photoReference: "AWCwydhBMlBoh1Pk9h_ohWXODz9afrvO5ADkSGdUrXz0g40m5KGzInV3f7ErLZCAkHpqTUMlMVuzSowRWfpjrHSnXcw-04JvKSo1gPy7J6Nv5ZdOTEmunYb9slsJkDoRIOPfX3pXghCfwOBJ2GrE1Rg6Rn7NfZYBWYU5JtW6LVHsqGCx79fSYa8NUHEJ8qgEkpHS8i8sC-siDoIs3hkGEtQvLXiOWc6C-WhcTcnGaSh49IzvxUWVMFRNskcSGinOMvc6kBjpJIPbtwwDt0pVjxCedV-Z9B1jwlE-UnnTo6ESRy4Kk3uldqtZq5mN07hvB5_bwZfNeLnjDc69MwMmvY-iCMSJB9PmJtKRl43KnnJanEDqOpo1s3f1oFEwo3LZKmSVH-jOw-HfaV40YEtJXrn_5I5rUzYT4NDQ95wclW-MsX1UxQ", width: 957, height: 667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109693233241730218285\">Palm Lagoon Trans Studio Mall Bali</a>"] },
            { photoReference: "AWCwydhoBSstXOJlhAkQIhzgyqxjIEignPGDJfz8jqBK6-Xf2Y7opgBa0N6Dqdm0FF9vmJKyTdoeYFj4SXIjRocq4-0tnhzuzkSaVV2Rn3xQeJ6hR8qAznhYkDBKuZyiPY93DaxQpyqGm-EhrwgJpzWD4Xk0D9EBrdMw2Ejbo0LFLzlcHbcjZi52E5lunr-XvjtQd6A9bgZJuCUVGOYjQUZg3-tMsLqBi2Q-6lkJx2iSTsL48Emjdz5H5VzV6wpDa4-_3sXT_qUz5KCrtgNpQh9RRTRwc6-tn2ExRbqMvdT0oOwEEhtb3sfo_nRGoXV1VQup8063PrLzJzSY7e0-F_xRqMm4eLWOK3uT8CZF7MyaRqOg2e4GJ7tfp2KJNGRMtxCBSUFHuxVlsEobpCvVOlbNo2bkSLVJbQUL5RpYoCdZ0C3-0tLjFcq55HJR5eYWLowu", width: 680, height: 382, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107951462866334776244\">Trans Studio Mall Bali</a>"] },
            { photoReference: "AWCwydiILR6A-YcdlP4LA9BcsdpP2XkoNNIXLTe7wISPRphmZcofSez9VHr6_6vE2FODRvvIBcyXO0VZmRAJP5RJnQ7x0rAs5rY6Lzh3ndXbkGv2dUu4dTmAfoEB-EcQuUgq6IYvNaIYbpj40kjWrtDG1ZBUfrJxwI4llUg9uzw7U1cK0vwouBoeOwEf86orLJznSyt_DtDUdbWh2ZTOfSCLjAJ3CqA4HIVbuxRfNlt3Mz8GgrnCmhnmV9H-mnSqBdPjopp-oAHRtdHRBl0YzjlAkL8JqvmMMuLvWsp88SkS7eRseLSP8_LaKAtyaWCK-tCPX2SrT6ZYD0x8_scmj2fZF6RR3puQohkzJlg2DWg_iuqeD1JpI5jK6Rik3MSt7wzKzCluEXVYy303_7oDaQgi3tHvw5G4HijPVK_illAEPHreWw", width: 4618, height: 3464, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108054914192576514004\">Nyoman Edy Junaedy</a>"] },
            { photoReference: "AWCwydivP-xts_PJIMvtp8EJ0pj5wfsLt6r2BwXQi7iYpD_nsv9fXtnOPYdRlopDQbzrMPwwmjXnI7k778IeDlCravvWQhgo3MVdM82rbO2Tjznx9zpEmPfkypYma_UtklaryKgHZoH_gOnWxfgJP60m_CbovPWHFI7cQcB18hktiLl6scBR_dOqo8GsFnDUwNDKNoXrIp6YCBegtwUaGDATrna5F2qatEmuxdXRbO4kDDn4kPdfyc2eQ5-P25iTToIDJj-h2cMRQbMcjNxrCFhbS4ArtQQvRom1LUNJhE1QRZqUByLqcdwK6VW8O6K0e1MAXKzPF3uzxqDEQryLM6s8cpB9dui5LswD3doMKsAOS5TuFbZahxSJdt_KcpJ_NHnVL3schf1Jsq2mDyMJ8gGWR6FwC_wpGpFotrUjf4yik-hLIG8F", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110887435059432665326\">John Atkinson</a>"] },
            { photoReference: "AWCwydj9dxfh97j5JhSBP6ljTJMibcabKzcd7NAvKTI09iNO59YxXCK6hH0u1QVcivge6p5GLbM0p-43cNLXGnd96fClWOg0SYN7Y5keN4EB6PsG_nj4IhLF6fWlDuxJJz-GYu8vJpbOM6bZR7d1Z2qGFT-dsATf2B8C-4ESdOkjQIZjlgJsccMxLszH19hLMXu7GNT81uMUy_Bm2ECJRdC-tls2_Z3QquRk6q-3LHUlfqjOjeSE19hNPmoZIiDFy1jQTaZVObgbnFIsquDdANiw9kMviHo_1X51TydIb6GiSoEx_jO-CD9ti-z7HVC8GD0UwZSUQlDmYgktEaIY7-Qi_zLnXcu59yaf7WF1htA_3rQWO1KsV7WL0_4p1rYLbll5GtFirGpp2bIcES6N3Wqs6K4rN21gZlb8EufpF3QlyzlfYM4", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110900529871255881654\">Bramantara Komang</a>"] }
        ],
        summary: "Trans Studio Mall Bali 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쇼핑, 실내 시설, 식당가", "평점 4.4", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://transshoppingmall.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10826202174461944473", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8A%B8%EB%9E%9C%EC%8A%A4+%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4+%EB%AA%B0+%EB%B0%9C%EB%A6%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "레벨21 몰 덴파사르": {
        photos: ["/images/bali/info/shopping/level-21-mall-denpasar-bali.jpg"],
        placeId: "ChIJseulnc9B0i0Rkd9V7KFQch8",
        placePhotos: [
            { photoReference: "AWCwydjhefNjop64Z_1CeuT3v8krKsLBPUGjD4DLys8tXuUIpNxBCyuIA181jRkO-RcIgziawQIC3Ot7q4iecx86wof1I83QGK_LLGXjayhPoZJ6zacXfOyi_r43oHfAdqtvEsR-BIGXmFMRToF2l9OXAinm_ExirFEEWvkNUkYcGH5skMx8h4_4gHezKcCGVQ2sYEvgyWfIvTwHH24-Ufsv9Iyy2eMGGHk_0aM9pzKmS2rlNVhUdnOP6QaOfuKRpl6eLIa5XuD7vXkgZ4pLt63eEGSdK9HapKxpu69q_65MwVwiCSKWbD9ElrlR3MMpfHJW0_HbDtLcLy-JNyBPuvpuMnrkVYlXSP2x-SfZQC0d6MFPLmHgtkSy3oZEXlInDd1BFoky2K6hQBOcEbr8PaHD-NZ6ZF_2B025jMJzSzCTEcY", width: 1280, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100539472070257982830\">Level 21 Mall</a>"] },
            { photoReference: "AWCwydhjvkC7V5r1EbMLmLguR3MWCKQiIG58CTJo9bgXbU2ZpYKXrqKlUGeJSA1C4kzt8rL3syOSwBMnBKde24Pj8L9242IRGy_TRlFHr-fAJ43EGFCuC9PgPC2UsIb9ZZHnbl0nWsCI4lAayvK-CSIc79v6ujVVNfF8wOI2FAnKbjM0IWHmVrCOLVgfyNQp1bFghYckHQIKmHu_zwkkILrVhyoQdcB4aPS2n4Ub0xdlt0H6xYzPNGTpvHOzT3eTk8pLETm2i2b5_cZHgBqjL4JGPxvFGvgjZi5gSRmqZ7pcn1b3-HEFGzlKiZu08ge72aqGLRZpv4vxHoECRQCqocWLntqzIbVk_eOT2l3WzX8-BMQEHmNn9bjplfDxliavWe8JGExY6HELm7cg08cjMn1UD9c_70LnsQXfour5nddO0xhvNw", width: 1280, height: 718, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100539472070257982830\">Level 21 Mall</a>"] },
            { photoReference: "AWCwydiKnPUJSA9xGrB5MtRqz2FwkHVvchVVl2wQJbq9ijXjL-Up6EIuRnm27jHvWcTqeVmw-NZRSVBsCHlIW-AkW6bnpDnsXu6HTrLg2prh3sr0JnxlmyFzjwhR7KfiFdeJ1GIk4yAo2UULsvpLtP83xuwGhaYFMFFpgLWMCq7bNfxhceUnnhahHVKIBYwWhZMQCSV80bRpVym6If6cMmHbRkLnapvd1P7fQcu-uSwS1H39sJxGcTBIjF9Q5hB_ZjgIib8Bk050u-i80cJ0XQVtpk4m8EjFZG1WzST-cwsv8RICqjEAAqu01dMVIWTvQx-puPZQqmBZT5FO5zEmFcAlPWOPZ0PUYbNcUKUDd185Bm_LbN4Aag-d2BOmzBJnMHhrW8mSnhvbTc-Vu2Lhy3ufGvcaQmBE_-BFFXvVskZ44hTLCz64", width: 3200, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111474371543464006116\">Budy Wuysang</a>"] },
            { photoReference: "AWCwydjAa2g51b0Eo6QwrPRe4Br2yHZKD9UZhtXNSzHUIcYcuNqI5-mSM8Y7tCxKo1dKYLX-8bsPK5SBQEIhzL6On2M9f8o7WghTNdmZ3YQcQgrvY2yy1min3A0XfLmeFYvIydOV3_14OhQompE9wO07UjNXWmQ7THZW4T0IdynL8unQUXOplTQ33wKdN0xwsWQMRPicRJjv9ymE1f5CuTmlssrOSgWmZ9Xcr-aEEaZQeF9cq9VJUivTPg9Tfi6E_yK6mnphLn91hjQQVsDs1UaS7TkmQCrAK4TX6AgfYZCkGFMo-D2EBv4PG9WaBtMU6tr3Hch7BrGfbzM9qvdN4JnTuWwq_kHToC1W8tMbzPTlEkVW1B6SNixDx0oJFlNUEjtYN2vFb7f2hZ-ndzR-zv6pGWIPg4_qU8ZraXPb733HqKE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114929324125851088410\">Raden R</a>"] },
            { photoReference: "AWCwydj67B6IK46_KBzRrklyb2IAarJNn8TldMy3_SJcaXDcMsUD-EJrln9Ix-0KasHvTcI-QMPMMAj857R1BJz80qB8Hp-9CHkVLbJ_BUvLiQJHcwcPvfE7XlBdOILee_yBF9uDFMsmqjsP4lRfO5QomxBFZeRqJx0Hb_w_YV0mvYFOzm2yWG8X71cGmVFEDRJpE_oT50XDHBwe-OIORTO9LwZtmEhpFxCJprHRh58UEs-4VB_njyxpBv89FAgcsxqbFbfVZ5Fa8E1TrHaTlKKoR7eqU8lfHEnXaL3fiblwuu8ho1Ao00PIKqbJ5hXPKf4ezy2-WAQnCpWzAfByS3EEOWu6h_7hHnRil8sOGXscaMiVC7JR3fHG2GEcCE9LKYHybMn9pS6K6IvI0f-3Lj33lCwJ1db_XGxpC-PpN66wUQvSO5M", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110414039958491593168\">Dewa Purnama Sidi Putra (DEWAP060)</a>"] }
        ],
        summary: "Level 21 Mall 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 영화관, 식당가", "평점 4.6", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://level21mall.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2265962218905788305", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%88%EB%B2%A821+%EB%AA%B0+%EB%8D%B4%ED%8C%8C%EC%82%AC%EB%A5%B4+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "리빙월드 덴파사르": {
        photos: ["/images/bali/info/shopping/living-world-denpasar-bali.jpg"],
        placeId: "ChIJ75U-Pw0_0i0RIRFe-_KqAn8",
        placePhotos: [
            { photoReference: "AWCwydj8ZkatP0K_3_ovCy_Y-2_5VG17JOtqPIVfYPV1enMbl0_6ngGLub9al-W58ke_neXyEdRa0pIavT0fIQo9ElWDKSuDrTm-KY0x6tFXKqS6QAdlHQG6cfZ58n_SdtKex3yLaD0EkKfgDfMQvxbNNeMv_BE7dEYpn8lc5tWifoUEf-2ykQ-H4hDD7UTFmWhbDHmK3UIuTorOYlGSLNuzblRXLGz1x0IKQc1-bQtZdJ5GsU6o2_I4VIm1A14JQRDX-XIJgbz7GuphcqnQANCiKQpMpJXJMM8Ny9avUk4P9KhFU-Ae-Pu7aYqzVZjxDPNZipmFNUhas_vVixbsm5TV0FGXTExkwe_0pNkYQ_OBgX6Xyk-I6tSRa-BGcn4lp_ZvRklHYZDWhNgwVIPjjdgtG_hJjB0hgY4KHMeNpB_yI1DIDXw", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110899120684414118153\">Rendi Alexdi</a>"] },
            { photoReference: "AWCwydhwqCcwsRubfEdIVy7A56gNJwCgLGuRcWIGfy_eg8sGKSjznxm0l6RZrTeoQvRQWC09y5xorNP-rpxRUV96S3NZmQrCmWzsKP9DLhrTJ2rnNveoCIQi68EGRTUZyImvUBTx2eRmMrgHIXfDAro8uvYJ-lrYNfa8-zUfprhqRVnSIIUfF9lRZ78uSfg9WPELoNdQW7F6RA1tYGobe3laT-2YbuUh1hTESTjWv3-Aci6seQlr-9HOecYLQgmSUWczhRT-m_S2p6HfET2QAkSXeZAgv2enYSS52bIIr7V1pqHUgCEHQ1HtDrzf31_qf6387xcD7YFt2MqVzPiTOOYGWpBPjFogd0CRVdJR_x9ToSoKLaVzx6_73S4_0J03EW6FaAdRJHrgtd5e-xqG0dn4w1CviaZasUEo-WtfHmXC_dPbgiOc", width: 720, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112105610905502903756\">Living World Denpasar</a>"] },
            { photoReference: "AWCwydg1a_F6Ud4fpHaeWA5ltUq-56owzvcny_e-aEwgACyoHGI8t-nPyDWg6kosONvLCFOXfkAukeX_ypjPqo_hExsrVAZ-eVuVQr5D-xztsr9PWHHWxFf2gxHJ9P_XyLajhroN2j0v9o6W1kqUPW8pwB26xj9QXg2fhk0YI00wTwAHJbrYhjCXdFcJ4RfjXkherGtHazZ379lhuDc9GPWj_gVBPJ_U0SOTscV6dvzFcIQwJoTzdxDvMHlwQNFie2j7IYV4jEPlgT-0aBv5dWnfneQh7RhudvlNyh8D0IIqetbT2eqq4u5xLj8zTtf9fuqcxtFdiA-xxuUdzCeuR6R3ms2tIi55nCrWdtRnox1BX9g2FtdjwctEFVW6IVT9IiOURetC3gBKtKBnHRe-0Af85l4y-fYbkpmxbA94g0eAszCNDhIs", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108287843971176868290\">Yulianto Maliang</a>"] },
            { photoReference: "AWCwydjf3aZqFnFD-X8ruIoRS3WCXbUPzpMg83WuTnSR7uj1xM1FEOWEIX08kp71bXLhnzFC5m4WcHnlIVDSNh0JGP_rDdMaSzammt6siukhqdalkF4ImjpcEwM5qfAwNC1vZ-D5Rnu5-q7SeiuxJp5-4aETUmHa0X3a4hZwDZdmbwTPe_9Aae3KCiJGDsIx-5ncNHAGt1oKpYOdL8RvcZ-77SUSB2BPWzK73EXBV4WVI4DeITkewcfDnRufRoHm4ZQhajaTzEMba-36Dtt2GIFXZNnwQJAoVV3HZs8JV1C4EaFKiE8aQs-uevSB6uZFulJtG5jaSILsuxD3XD7OevSoCx1ykQhaWLW3EKeAtpjyY-Uk2vpVYf366ZC8gsJohNREGfeVB-x1fItoH09AheCoHtmahGn8ctoda-R_7nEhxC83YGM", width: 3264, height: 1520, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100356659099028987969\">Alfon Rori</a>"] },
            { photoReference: "AWCwydiioZrtpgLy8cKxMldb_-RNMwQM-NkP8_blTA4cY3hPst4gmrxKiSzJni3VE-Ty1pMGbB-PLP4N6knON2jCFlP-HxD42UwoxTdn9hYf3clJsdwAkpAlnV7_2K4SUWdSTUO-uHufwxhLhugq0At5c02csWZAVkM4ggG-9mtnoo7GSnodEAnELnJm68ZBmXY526Mnk1SfFpSplY9fJODKvvcIl86sUoZXASY4prjJ3wgrQVlJgsfCF9A_ThElbhs8QMzuudWwg3NDiTQ_tQiTDrnSIXgLTBLoZLUfTRIi5ixOn6J9fwW04zswewqx7ynAGrySSXF4DGN9qoXc9CkxM0uesx5MY6AA9PEVnl1anSFbQK1_oyw179L-b63KUVq72eQtAuxlPUeet3hGSt67_1UFsyOE4_43WVCvYkbXO2mwoA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108985938201102832997\">Victor Efraim Utomo</a>"] }
        ],
        summary: "Living World Mall Denpasar 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["쇼핑, 다이닝, 생활용품", "평점 4.6", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://denpasar.livingworld.co.id/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9152065353346322721", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EB%B9%99%EC%9B%94%EB%93%9C+%EB%8D%B4%ED%8C%8C%EC%82%AC%EB%A5%B4+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "수카와티 아트 마켓": {
        photos: ["/images/bali/info/shopping/sukawati-art-market-bali.jpg"],
        placeId: "ChIJDUFsYSg-0i0RPD5Un_6vDpY",
        placePhotos: [
            { photoReference: "AWCwydiyYMpXX4-sJnw3lAmKWfGKbjy2sham70_gnHXfKjR8Ot8gbMFHmJ5P2Qvb6ELgUlMYsGQfO6Bue41vOSJKz5qXZjtjHu5FUBQNAaW6hXtOqsrHc69eHctIDaCG3M-1HcGiJ3UrLyNEGxCB9Dh1rqN66Qm6qtygvppy41cMwhvzELXX4UqX8CrB_ASr4XGa9AdQVjqLg0kOtuTP4zXiZC4MjRTH13iutneBIlaV5zu4VedlJ9XLj7aZ8PYEdYV7P1UuDxCDvLXE5CdxzlMlKAob-MhU72kmTbHq_3F2tcibrlztTHIWxar5htZoVqMR4dMVE-4YN2utCe5JD9p4bUbOp4aKHRyWAoaEXER_d5Lj2i29Ta3woE0s5Epl1Z7HiZoOWFLLTqpkHtDi41u7ce47clbOP6fh4j6UjTwIccU", width: 4624, height: 2600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103215067154288035665\">Danang Lagi Ngopi</a>"] },
            { photoReference: "AWCwydgtXcaL6mEoPOYvK4uh2EPSRURB7hNnjdtZf09DtldC8iFaCgF2qpdU3wmgYhkmrBFwOcEGblxUo8IMaQ352hKJQpDbFwUuh9-b2bJ-k7yCtxN3gL-a8MHhLrpxf9myZUSpUgGSo7bqiWTRTebi4hFswfYvwDaRXi6iWTk2gxp7e7pdEU8WM0z6_l4iTfBHti5gfi0j8KV5Lm6mKmy26VyH_JGvtZ_bWTQzf-ITozd0KtW-RMQfFtTA5TxfDasxNZbbw_WcokYrA2b2aLxRiArayg4hbKbpgp85oAat9lbCBz7Sue0mxNA-LI-mF2GAiMMifhzyoYizTeSuSFyx9641E4ShBaa77Ob5TPeobTKGiq1tZ7_5mdEYgdOj18_UIaYj8UQXCVqvVQE7eWX8ixeCTHqGrkmkQx2pbW5VRKqyFQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114850233768378814069\">The BALI Journey</a>"] },
            { photoReference: "AWCwydhjkTXM7Lp1BwebCEZmaUFIW0crodZwkxy2EzFxJ2MrcUXE5kHDqc7ENzOR2JYQJMNpaP_h5u1AERsRHhKc8YE5rNjhCcbG9hpqWbMqXbejtSUbQPKHGfpQEqN_4EpN40uYDSxf0ZgcShzOGP0a0kr8Wqs-8fnqFwhWkzUErPbV_qtzKJLcXGv-LMCgWmHh-7ELdeCfFfhjwXpf4aRG4ObqnvPOtwL7utVZ0H1mpxH8LC-3hLmIVsPVlMsss8Zt5bCAnK6qFxdnpAQ0lcpPWie_ZPkZXTc6Krp-T5avP-qlhCLGUE2DhnFrdWypH7CiMxW7H9i3EHFzsF5_yrFCHITrIXyp3Aa9SyaGxfN-mzIvkjVbeG0H3LNus3BDwzEpTbErVqPhf5e4qlT9PNKO5wngOUAwruzYO109-oRYUuYGOA", width: 1012, height: 1349, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115881649959993300277\">Ivy L</a>"] },
            { photoReference: "AWCwydh0Brobzcis88lhWZBsN9zq02pDomsVHUtXVBR-VkKlOAKo3awhrrsxjUgQzF6pxAFQoZdk6oEhGucgSx1oMinzzTBk2ZS0sry7x0pTUXqcM2CjGelTkAmOfas1373sqMDDDmSsDmQHZtxYNIwX5PtZlmjOaWwL4MS6fDyNZrjV0-SZCIObukBF_yGkPV3a9GkkUqPmB5fhce9XEWqyW18xPwTy53LikgU8CGGconnov_l_O_pQjB-XpIaOuPwh3hebHpQiznOlCQgB0XiabfGJLPWOLH57Rw2feILjdcmOaymtYzA0yDPuZP3fEZRTifHoZy9VeHczvF7sy0TigUpkEjqzDwvTDPACG2_FzwCIaSniIVvorVPFkWsC5_GJ7ZAt2IbeGV8lGBD9F2phtV6rPZtURHPxnWIBmFTPlfrJeiY", width: 1836, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108268524591042788753\">Eli Heni</a>"] },
            { photoReference: "AWCwydgRgD4MhL_cUv0FagPwGZScwmAsPKD2fGsXZQ6PfksvRKqZh6nWMrDLB7WnKXi-dUXV2_eczNXlgxMWM9VOANXyBaBnkTrPe3KH_EfOECBoG138xsezH5y1iIucJQP0eg5K_b1IyLln36sdMeoDx_OkjCjazRmnxmnVDUAwZmbdi1qT73x1Hbk4NcXyG-sOdrz9SsZRBbb7ytBLp9cm0r1iF26LVye_l-c4fkOwapYJiDnqDUDD4v1sWwdZ1DQeh23GGvQsqSaAAGN-y4p-nfhE0xltFbKZy4Rr71c36l_b9Bbr2DiNg1gEZQS60Qbhd9lRRinTdGrv7XhDFpcQdiEROHtuvcSkVr7S5fZlNgf9OSLfQsVLS2s0W-YVyM5uHGhvfWIpACf_25JddrBqtrE4PN-rnUVVBGm2yDSKZocpsLU0", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114850233768378814069\">The BALI Journey</a>"] }
        ],
        summary: "Sukawati Street Market 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["그림, 공예품, 기념품", "평점 5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 4:30; 화요일: 오전 7:30 ~ 오후 4:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10493413356971676537", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%88%98%EC%B9%B4%EC%99%80%ED%8B%B0+%EC%95%84%ED%8A%B8+%EB%A7%88%EC%BC%93+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우붓 아트 마켓": {
        photos: ["/images/bali/info/shopping/ubud-art-market-bali.jpg"],
        placeId: "ChIJoQpF2-I90i0R7Q2a3ncHnUA",
        placePhotos: [
            { photoReference: "AWCwydiB6lu0U20IuvPMHZviRJ6houd0-Ktm80p43TfRCo_uMjnzt4r_fwt1OSUoITgBw23E-pWGW0ekLyyMAskJe805nQvKqXTVXM3YoicoSS2pInVlpk6oaipntuOYKrAedhxSedhr9lZsJ_TgOk5UuNGts-1XSjpREuaNkKog0I-U8nXa8JZ5LhgsU8TddSX2gOFQDQsNo7Jc_ZzJhslP89cDgJ3gWrzkgxEWgT22kc-5llLFYjgdvy5V2jJE3q7ASUeLi-ai2A0pUldqz7GvsCkGzjOZWFlGQyN0NkteBKi9zutbePScFOH5pr9K7r4qqIXxGWTGEiwT3ca67Vd4Q41cjfD6Whgc2heQ76Z-shErY96PbRO5wb3b66ap90uDOzIgQlB5q5axf17wGptTJYq4jIpU-2U4nfF4qzeVuX3Zc7c", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117936980981366985574\">Baptiste Boichu</a>"] },
            { photoReference: "AWCwydg723EuARUk_b8o2bgF12UD9Y-cO9xtsQIBAAgodZdMhpKLQ50VHuvvtB1yzgW0Ji6E6UKXy3mjCctqHFCtGu_YpnofSSRfzJr6FuVsAOgowb0ZIS_qUAAFIy26MpbSTHUhrzpbsZBVp-I8gLW-PUlcvdIv2UXB7xotekwNkEzLUd9dxwIOlU3TsA4D2FsTlEl61wm-NCx40hHMeNVTQJcQb0qmc9-egqW2bA4mzZyhzgdG3yUMKQb2Va9Usdgw5vcl6gg5pp_995lNOuGEeN7xWjYSg9CqhxtAhd0zZij0z_VrpxrgeZrPMZaro4xsiB3zzjMGpfIRMGPJQ4YhVm8l53wUxJLOBn-W-ZYb5tDsve6bhKdiIUFkWlTRCyaD0H1sLTKleil4eCbQf-i1Ay_cbWox0cSWbGpV8cJXk0DVQg", width: 4096, height: 1840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101199222319476739000\">Siu Wai Alva Leung</a>"] },
            { photoReference: "AWCwydgmAFHO9zYdmTvYIo6klhxjoU3lSedAFzApfxLPeZ9alAHup0j6StGVTohMkJZaBRx4ilKZQ3Cr6MKpiYlfgX6UkZLn0HD5NGKpZbHdCFXLxzFEYOWyv8Oc35c1bzcbFDl5oDm8O-otfKQEQy6MGyOxKXK8NnQJEv8MGhNQM1QolK5HFYkgYhhION5_ozoWnNuRFqTLtHDSWGNz8aiqclLq3Gk5Xf3qJTT-PiX1NZavZLqowUA5Ofze5MPNjPHFnNBAeE1okSupR8IR46LUE7h58Deof3Ccv7xe0F4r7PUnZxX7_xArJpMO5veGyKecM5QCtFjbv80ephXC2TxtzpVDTs407lsEBT9LkKhljdEafXutcNx-XB2rgC0OTP_kKsAlRLC7YUQ5sY4x3Ry-Eur2xjBlqR4bikR8hdthEQzrCr62", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105104313003432121794\">TungTung</a>"] },
            { photoReference: "AWCwydgc3PQOekgL2toNMD_uof4Vw5BoRH7yu2kDnKk29OAJIYEZCXu3xcqoMufDinkALNpL2bC5bccJoYBqs2gDqntErW-WWapdWu12t4LV6aPEDInZCZPJKjFF0FLkpdjDQxA1NceSchdoOVUTcilqXtRbwJgHhBSmIyP2mm7NKc72r2mu6vnvlY2Ko9zYr8En4NL1orSnVohDi5-rm3ekfSdrAnxfS8DQrf3yMCIUdKXmIZ9NgyGLBbFsGzuVNHUSz30yMpHIZ89JoZgejIaIpDqmOnOpoYjglab7vg6Mo0j2vELiuVsZVZkv4lACw0E5mpbtTmqcvN61JVyz6YTxwacZO7tYvP56B-J7oI6LV4XP5JSPJVt4n9uBkOJapVG5mWjazoBw1ruxJyznHvdeZsEwvgYnsGr0FyBPbYn9siQZRmYY", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116529625530441344935\">Peter Wiering</a>"] },
            { photoReference: "AWCwydgqNPajxK_M84ePdmB-4NUuScnB0HzKk3-YFmibvxPx99fUo-5-2OQ45_AFBaqepTJjQuifAzveoitPT7xlLNNJC4AswnK_DzAXmc_DA49PokRZya9M465M8K6e4BVtbsvDxI__RbCteUIC0__olEfG2CaDEaePxKdQr-BZiyTX6VAPSGXMrwkSCXjdE3cT2-AtjmJgD54NT8LjkavXyF3BmL6WQr0uh7OW-AXbQdycTf-KzGoCeLwAsQPx9km3jWkr5ulH9wBekZCjHzql8_SKbxZ1XL17IU4lGxfzR3GFqfNhA-4vL6_fMWHVki999P3s24kgssPXjUaFGnUCxc4qlcy2TBAVFXWnTID-TFHIRLNreceo0QF81qokRwPcZ0Vhubwt1htVEmYpJnqfnSgN_BGMW9_CT4EMT4YoS1EOodEY", width: 3264, height: 1472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101199222319476739000\">Siu Wai Alva Leung</a>"] }
        ],
        summary: "Bali Becik Art Market 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["라탄, 의류, 공예품", "평점 5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1867843771783129079", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%B6%93+%EC%95%84%ED%8A%B8+%EB%A7%88%EC%BC%93+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "꾸따 아트 마켓": {
        photos: ["/images/bali/info/shopping/kuta-art-market-bali.jpg"],
        placeId: "ChIJHzh4J6VG0i0R2zM8nmnVGG8",
        placePhotos: [
            { photoReference: "AWCwydgW7iNa3sLzNQTrcEcVaQvwcAOebxLeVU1ONIW_XOimHw8hbqhFwPk9C_uEUXUVh_-fqhA_FsDEVkG0OjsyvO9iQrczXYZ2FMWkRAnkCA0GGhXzMJRpqNbnBbScsmr3lSB-MjFjkz7PLVe7C_Q6Zxy_wNSfe2w1SlQJLEt7cneKxF0mX2feTHtdQ7FT_vZXBw7ILVwbH8mkxV-NYM31T07OrggYyAhPf-F-xM6NmkKyWxdGj34NZ6DM6eJYcNAwF_tEgvbAH1loAuadFPKGHJ5TnnwvYNTWFP7pLJXmkT-pvaCuzMzx2Ei67nrsQ6_1qDQf1lDdpcHvnJaYERrbN_oXQDNwf6LSdESK1Uo5gtGvU7Jig87vyJVV2seeokPa2i-aPNQ3-66MhwR8BOBQU-fQaPeyOEP5H995tiOn24rTvBai", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111279599862600776794\">Hyungjung Kim</a>"] },
            { photoReference: "AWCwydg97Kb-x_v8WFW39fACf_zjwfvXbKrTmGu7EoM_cwv36b528GK402lbXOWdr1KauAQ_85nygtLIJ60I0BsxacCqLh15wOxTRngNxcGgGmssOnSaPLcVOYbvaSPSVtititlpIWqpEToQtO_1qcyOsa2WewUAepO9dw-Lg1n-_ZREEvOnULWJsjsLNycNPCKqCc-_EOQt9vnj8IY8SyVwVaY22LYuSGL6HrpAAAus1kyF_xzYWDCHXUrY89xHssTZcWemj-6Res7HabTkMq8IXFzEU7853zuRBx8pX1BMVrptxpLhsNlZL8AiVArUFHYs2eXGGGN-WirPX1RkVjSY4sUWGW0XDUMFJyWyXXDVtsmwSyovpDmEYMzAQnPKuyPFg1wc9TOM2WfUYUFSwkItuijPyEmVBqrJf-5kDbOn9UXtyw", width: 1080, height: 607, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114868351432267241783\">Pasar Seni Kuta</a>"] },
            { photoReference: "AWCwydhVqP6ilk7Sg9KN92ZAKyuUWdnxmCr3iRG4ndL-Y_jRE_earrrtdLRZzIphej9Q00cfuK8sGveRDksDmlxy_F0xCIFOvkB0DP7gZAE0Ai9eQY5WCLvEIw15yNhr_rfgLr0Zc7Vg3MWHFuDCpSfcz1XhoE49kYmx8rX6Yewd4AOzhGYmbFYoQ2SyEnTn6S6PwI-wijuNlDM3aHcbpFQm7HLv6JfX5BX7cv2EOcvr9OFM3E2G1tM5wMeT8SiTIIyheGqUtNyitdR7G_gA9mJb9OX7MFJ08zu4mYI4zMZNTGaQJ_OEYgXnA2B5cRFTqZxwWXPL1yFDUCRrE3YC2dKBiGLCrzw3a82VB-N-OKI6hN72SxWV5uYPBJIwIhiYNMXbcxpCVn5-3l0m5e9akqJP8lup1iTHomGS-nw1WsvCREqI25b-o5TKs6P6n047gg", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107583623044625468306\">Mostafa Fahmy</a>"] },
            { photoReference: "AWCwydifLouleG-ppuw7fgpvTrQIYslJiXPsC3FLlyRK3IFCbvApmEJ8O6GlPIohIPd9mgmJVKZ7Et4L7Qm29cs9fV6hBeYp3bSekuYYbEL4usRFwS0KQEz-WovwlmidbXNImlFuw4i_VeIorZypfap_LmSH5Xyt3KMcJV8-p9eEh01Hdaokmhypzu6Y7UAH4ixKCeAXa8JxHeJPw3n2534BhO2re2pETFrn4l54qDPI2WAi_hjE_Id-y11dpiNsxZmSCgd28CXELoCtQC7R1tLO8HgwT2io-Ly9556KJGVGiJXI6IusFx4w7n8q1ZjdrkgZVxtM6THdecFnJewGV_OUb4dTXzRCFqr_vO-5JVRbIrsHlmadF5Ha1qMP4_UNlxYUSKKY5cmmvoGYDa9Z92S5sZ9fHuc0KDVW2qdwoIS8IwAZ7DqG", width: 3096, height: 4128, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108886285024629696170\">Sri Rahayuningsih</a>"] },
            { photoReference: "AWCwydgJ40zGLgZ_2PXIDO2ecHaBipPIoA1NoJArgqt9lugE2F3uMfxcqC9_xYym8IFO5elaLOrVDpRanT_tJYACNAAmpO-C4fsL-zvRM8zXUaR-uHbjwBUMgTOCntwq-ihShUzikolSvnAUDPjA4vB4MCkqXv-SCg8rTJ3vohWA8SV90bXtICU6tr3dKFE0xr7BoUxJPOMhthjs9GxzQ9EI4MHaGrewtDQWD078o8st_QcIEBQJhJUxSNdFGExNDSSP0MaacQF7Vex50rISRY2NDfB_HSnlFLpdNpT4vWMO_khGh0oXg6Woh2L2SYau_aZijaVFJ3nI2XbJtiLRhVHgsgrgb9sk2hp_-NapWbAduE1ZBgOvT6Qshd-TuPLavosmntn-AmX1nDimZPlCnDzMCXMERUOE2wQWnxyL_NKjAZxdnF3w", width: 4128, height: 2322, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102917333083839075131\">Mai Porcupine</a>"] }
        ],
        summary: "Kuta Art Market 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["기념품, 의류, 해변 소품", "평점 4.1", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/khoirurrahman45/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8005382987254084571", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%BE%B8%EB%94%B0+%EC%95%84%ED%8A%B8+%EB%A7%88%EC%BC%93+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "크리스나 올레올레 선셋로드": {
        photos: ["/images/bali/info/shopping/krisna-oleh-oleh-bali-sunset-road.jpg"],
        placeId: "ChIJiWcwaNhG0i0R3Ra0r_teTtM",
        placePhotos: [
            { photoReference: "AWCwydjUt0rcBtVgoeHoKzj0t-5FwtNgrFXbEkJuGqr7Kq8p6_DhwzarCUVuDy1TbnYtP7N8g-NsCVyEPCr3ZORxRzH08YQNjVT_4wkos7wbi1cYPJ7THU26BE-W6k4zni2mrnAOzXLMWEOBowG9r5cN3ZfzGOD-9uv1vIjdWpDbjXFmdWDcUV2osUcsCIXuUmH2ebnCid6nBY7o36-a71Q86Rt0vdQW0zv9hjnxfWkme2cntjlAt70f71tgFVH3TqitZh0DuxSNAkwZKn03qmTMFVc3n_PZVSv_SU-YA1D7H1mb014JqO42aHa51B0G2hvOkKTRyORFNnY0ssHn45CxaU0G8u-a74qzFbOkgb6dQb0JLKLgZ0PZFB8pqgwhpzcZ_5KBbpxNRHH_tSR0NJx1OACgTo6tv_GRIuUfcm7GJHiSHoJc", width: 3440, height: 4320, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114024029453592054061\">cing onif</a>"] },
            { photoReference: "AWCwydilwNvKcieu3-2wPvo05Bh5PW0UYOKji6mMxVb0rKPeVP7V5xEMc-DaQioqpjtWn9F5bQJ6WYJo0ic24JlQY0Cr_QGiVVzQBxw70_y4e9OYYLdEGJl8oLu0qJopkwXYkrFoD9UEEG-lpqjKjPzKEb0TpUIgee2aUlg-ZL7D0tEM7-koVwm7x0Ec5eIieJSZCXYICpn559qSp58wrt-yaGsmFMcCUHyMJUyVre8un0l89enJ_jQOdZnS3EDmjUxjKlyswjN46GszwF2KqMheehEEuy3cO1mh_iQCtUWw1EJF1jCNj_NGUm4smyAZ9iBmvLUI1hQxQQzQa20bJDwwDVrdQzXZenqPaQ0K0dEznOjO9lR2So3sYfDAYhImxMu_E3Npbtkz0PD_dKnMfo0eDUbVwWn6sZYhLbf_zQRw7-9l_A", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113792803790498529570\">Edwien</a>"] },
            { photoReference: "AWCwydg8_odbKdbPZDhxEdDgqmE6_efX8NaIkrnK-pubuSNvQLLkw_oTHI9yq4Q0BR5f7BXHorr__QbKJpCcaddmKNIh_pZmmbVtLZHG1l8fsGER3-iRZMgvMmdeTE4lNIgGSkMLQfaiwnZCKiVNZKCH_JGkQKiOYgaTgH5eejAZkXO7cPoyZEOuB6SbeAQg6I1u4lGgP9n2M4G5fVn1Q_vJ7DFkj4q46RrNUzrI1WEd41c9mrN5_l-eAhBetJ6sA2pIdmLYLWt8Eeq_6HfJnDfezwOEHU-h5ZtsuCf0oLP4DZDBOwGmnUb-YJ7jzz02W2RkbfJO-0A-SRMgB05MRK6A_HrAVsTnHgRjnDorItKdUDDpM-WoUThysGmEDpZU40SUB6yxYcEXFTUCUE3Eue_55Nxycc9D953DKs3j3GIeQUvznXQ", width: 2080, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111218435299230686243\">Iman Suhadha</a>"] },
            { photoReference: "AWCwydjP8o4JK1Ucg3kMzZeeZlqWj8s-0Dyrynf0o9PqIOzaj6sJubWig5fA2ut367ArEIhKrVrEF3EnPn4jhSQuSzYKRi-YqppeoghEKpmRdhbvO3bALHlrw1QJeFLEFbYVCE0mJkpJKUgs-UZQcGp4eqPx_I7UtMsf43yAANsxR-bgVUt_0C_v88LxgBr7P5urKEuvgqnbBNQ1OIVF598TDKESG-SUzll1uucciKQub9bsyXmcymUeAFlN4NCxxCiPwzaVbzddxs429AilE--IAiVvInptQdpJTFCBq4ACcKMkd4te6eNFCj6gfRbmOMd8aS1gqY_-TEEeXqiJLJBt1jqCfa0vm6qldg_6SGD7EyY6DXeu1ZVvUXZUSf_h5kTeMTPMD5s84IasGGK-tn5vqsT_MGq9m6AMCcjxYtaPtJamgg", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107839082470789432681\">Luvfi Zamzami</a>"] },
            { photoReference: "AWCwydjnkxOku2ynewfqtR-F6AqW5mtGh-E3CfOtGBQ5qTwRhhseGEBQPVxRgNNYxBNJEZBNVcWajiLHdTBgcf10q7WrR2aAc6ZjtZsqm9znu5lYe6mGCUbH3myrDllM7Uv7fwo8mXg7-dNCoTcOOx1VaM4FV0Q9STMCzCNv2OtraqszUcZvXbhywOEBfpXLD_qcUM_viQ8-QM9HqkCWUtg6q9aGUfuAO9dQydsvoMByKc4G0V9i6gxNm5fWgxc5b4UpsD_Hdm11QRs8qlAkDf46oxlpV0esM7sz2LL77mjw_VZfwDH01pRNo63KYPTYgaOteOn-vWpg1SRPnJxoy2K5yAJkfLaH7U5RvXyHGdT8xCoAL6J6l-Zu7nHpdLsya3p0BNX0kjF-vtxLoRIcfuY434siFUKCYd6b9RxJaDpbGPfKWA", width: 3096, height: 4128, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104323686198403746315\">bintang prindo</a>"] }
        ],
        summary: "Krisna Oleh - Oleh Bali Sunset Road 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["발리 과자, 기념품, 의류", "평점 4.5", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://krisnabali.co.id/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15226211825263843037", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%AC%EB%A6%AC%EC%8A%A4%EB%82%98+%EC%98%AC%EB%A0%88%EC%98%AC%EB%A0%88+%EC%84%A0%EC%85%8B%EB%A1%9C%EB%93%9C+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "에를랑가 2 기념품": {
        photos: ["/images/bali/info/shopping/erlangga-2-bali-souvenir.jpg"],
        placeId: "ChIJCXXTXb9A0i0RKbBT4Pk07Gc",
        placePhotos: [
            { photoReference: "AWCwydjTlYmZLfU4_UEve4zv1tkEaEnqRTi9H6D6BiY1fK55LU6QBG3JIQ6Ln4wj8WU4ROw8p_rkR8nmDNPrpjpXHj2GSTrtaGyxlejTaJRqsUNc-vzEq4ILeD0zDbTxo7fX7-xNmJYLNiT1MHifXcEq8mAC1Z-FDd9kZJiaaE6AhJnn5WsK-PqAPuQHN0h8W8kJqSciuGiFl_3ljQNKCAIiKRrHhzNZYTvfMnaaY971nCI536fme8gn_UH3aUJY79yjnhakRNUOUCeDmkpTXTLldI77HL6UiZwflOhB0LjPKy9ix1XmVYEmMMNzZe4EzgDk5aGx8whum6wCO5iE8KD4lA9S_iK1tdQg74hy6wIfdaFtGlwESCfg1MyJOvhjEAWUP2hUHnQRK8IvsmuPa37-MNsk5gAbdpViJ5WDhp2ndfu3bF9-", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111287244448141108472\">Rahmad Nanda</a>"] },
            { photoReference: "AWCwydgxU5KDlzoN_XjfcOGVmc_uaC_ehBWXKh1lqJI9UOMvKCS2UYlLDMTc-QSG2amAzTJ5cVgTPY-F-wOYNPWfWyJj8OQSVo6k4dlFkzZuFvzUNix3FVzZFqBINd3Hb9064GTf1baoDrtKjPysavoeZ5Ixl2ofEHdBp3tHwzcugU9tDfd4w9JWkGtKtttKTM0kVPtikAYsIyC1L0bhkt0E-VnEaSD3OmgPbbAMIPvuWdoowBAqJUAS3Hs49zxKxe5Pq5fRavxqd7vqW_7RnqoijIrWzt9pIP8US43neQJbHRu4voa1bae0fGPcSDhdGxoO1amklphc3-2INqCeqlLLVhFUxHDg-oBkfzNYwSM3NEuUFGICSGx5-xJ65JMk8n3EmqgsBlQd1cOhQywgB-T_PM8kRGOHnWAvAgi1QMKbRAA_l3xv", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110647110670581605248\">Erlangga 2</a>"] },
            { photoReference: "AWCwydhUd63U6aYGz1AUYyc-E4u6bnS4Fqap2oPwmubjikQZCRPUdzwnpC1LvqhT9oqPiq7oSjlAUnwbBO_0_ahsunhz_Z2eUbX7fcpR5q6UWAJETy6qO2FkVFoQZqTmCZWvTuyIxbrt9wyaSi8w9r5J5zasIPkDN_Rd3ZNrCL-eRekeW-zHjIVA_kLM-1Z8drH-E1gZYjWIQS0R_JFhzJfck8iWBQyUKgkbd-meOUx7il9DxOdZEX0iIa2nTMxiAISnQslYlE0JzYIz20bp7Ddftc2zNFpRMts3Sah8uHThrCn2Hvz_VI34Iq_vMKG8L9P-R0WQq6HphzIyQiUCCMezVwH37vCvyCm4xgHMyvL6xq4loqfwTbAIktB4T7j1D_R6bZKf8LCHH4Ecjv2RO9QsizYMiN0gwZPTeftfhReMwNQ2Av227AuD4Mmu_79Ge6fq", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109281096570849241363\">andre santoso</a>"] },
            { photoReference: "AWCwydjWeNQYVbCQ16VM4C6CodG928w5BUFAqjOQJiimiOm7bZqj-eZyLmUTyFl4hq9ANf8hf04tUYS9MBIqfvjTOJSvjTqW5BOehl9igrejsrv4oyVIm5bITxDmQ2JFaasQxBs9Wtn83e2Puwk0Bz_cSxQhZ_p7CR--_SDVwJOflZyNKU-X06MCoxlKYwX5LHRQDILfM_16-SwK3YuaZFNSTzPfacwBBRVg5ePowX2Rse2rmqlNmasXLeVyvzZX_tyaRBDoKLY3lctvl-wWFJCdm0IcQZRgJibMTapIdF4pp2DvjzvFsE_fXj1nOHz3RX2jxKV_BuC22DtvlCSKLJJjIQi6onEMQ50KP861v0iuX1EwwEkvtONRpeXoxNTbFC3OAyrpWL0PjXoZJ8qSnlRhWyJzlFH1iLRsG_38eyFeijmJ3Q", width: 4000, height: 2248, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103069152202325270084\">Ardian</a>"] },
            { photoReference: "AWCwydjvhMC4uSFnRNeHIUQx1LCVBJ-KF0ARJGfRPIHrl0HoKzOIxiHfGX_mpbdkDdQ67NU-xF5qBlqgPGYlOnFR0-kMqtOr7ufNFJ7ZoTVu61KmZoTCi0VWkk2WANTLTjaRSZhHyR5_qdgoBjHyTLSqRCLRyEfYH9FGPSnd9QBV_a3eQfLVb0FaIM3A3r-9EtjJYmEibGkK5nN1NbC_72mSDC_wm1qR98UIydPt0IG06sGEq_iKWM-9tHkjr1IUj2J0UE-VubhojFqTPIRZY_myv2P4nNyYs0VtH7pwc81fRlYY8eHTS02pXy_O6-PJPA__VZ5ETZvZcaxkiMto5y69jK0R831DwHtlPaB1ae24Hgz0GfZtveIBVFw--RybZ7uF2OKVzNQmuToPe0JfWzLSYGOdu9zMQfqPz0hfkPWKaPM", width: 3264, height: 1836, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103069152202325270084\">Ardian</a>"] }
        ],
        summary: "Erlangga 2 Pusat Oleh-oleh Bali 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["기념품, 라탄, 의류", "평점 4.6", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7488418528225374249", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EB%A5%BC%EB%9E%91%EA%B0%80+2+%EA%B8%B0%EB%85%90%ED%92%88+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "빈탕 슈퍼마켓 스미냑": {
        photos: ["/images/bali/info/shopping/bintang-supermarket-seminyak-bali.jpg"],
        placeId: "ChIJdT8Tgt9G0i0RWILBsNv7gjU",
        placePhotos: [
            { photoReference: "AWCwydigGfUX7lgMNYTLXMslfdu4dyJBaMHCOtbWLdExRIi1BDS7IYeBy0Ash8QFZkjiZF4v3OaGwhtp5uDC_PrApI3z5UEboV2mp5MKkLgxmo7neaG_4ecf0dCzLU7hM2V76lZ39PM8Cb1zIXD7nzRn-IqZPU09xXGzvvCv0kvsRTgsG_bnKoXP23vy_ziSdfE93VuBm9JCBLCO-gyKDTvjQJo3w6FmEtsllalxfjdd6smzNg_w05jq43nbS0-q4T6QU8qTHdDOHdcQfwtaqjIVzDz8kurN3oua_qh_aTwuUCcckieDmjfHmO6LDaPu3YeWdk3R_LfABVtcn5rd08iMfROaBWtvW-LtqUbBJeYhvodAtpQ0goqka-C8ZEqub1CmOJMx2ZLiBTZsM2exQJZBOVD324A4mZV1c7cT1XS5KVBcyJj3", width: 940, height: 529, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118052881682996686012\">Bintang Supermarket Seminyak</a>"] },
            { photoReference: "AWCwydiLrYVwxz5N0Bmoo7JtvV-WY1NtrkQIsmm_a6cyH7YVKnHKOscK-d4rr-U6m3C2OB0nJKdMp2B0lW2iCLygHZwkzEMpQLNE1AVXZQjbXH-BdAyrmL7u_NGrTHqmB5aS0E4pi-TVmh4tWmZ8Cfb1x6URZvSnTm-xZ8R22cs-7AKpxiBkUEmvzXPxwZPRHc4adKpoe0WWjwn6ILuoX6-cAkNXhyKzeLIGI9NdtIYaUw1HAW_IWCXliVH5muucHHOMzw1tr_z3d9apwlSlVI4AvUg-Fh7bbtNk3KnttcztKFjEJ1wfnD8y5rAmAw742pcfibZodsINL8Irxfg7MYkjntdY8uSZYcvLPkuF60OABhFzOJwWzQdPRL1E_Iwy3wWNQjL1-fJakUeBCheh-cBVXjUWhuPjxiQ6QTFkqe_Tc4123A", width: 2255, height: 1532, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118052881682996686012\">Bintang Supermarket Seminyak</a>"] },
            { photoReference: "AWCwydjBbYORL5dGtzKiAS6GCyAYdIdDFFj9tESK365Dy2cWUZVS3E-pM9aDY5W4-HL1lick30YBrLhh_6Wbm0bRyHYIQPYRDDDT9Yk3gr10YFkAHaogP6crBnLBokXFOY1A7uZ6hPh00Th14HfwC_azSBnj_67fmN2kV2YGua_FJ9FzBEhM4q6taFUQyuP82u2Iz3Y9JtfsSp3DUOROltlg2kajR8coS5QQ7sJLMiLhyhEMKZHlFnSRjy-UsXxyJZEc8b6s0hL2-vyvaWnxEI0x6k_OmxJTnTYw-qpCJMqm3tmMzTH0Ro9zXeUFBraw9mX-O9BbiqiTsrBnijHxwNV2yyphcoR3lyVysUZNP7ASP_5sVd4WwESXd6ERVZ_wROVmE_GWzs2TvMjIt3aHGeYajw6aV2IE04wDYlf13wO62r6c2Q", width: 3120, height: 4160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112684003134235667266\">Andrei Kholkin</a>"] },
            { photoReference: "AWCwydhqIW01uQ6x8g3inploLYyJ9EOxXm3j1VXDXHWf_SwLD1nSNjZ1a-egyX0rJJnp0SLTVesW4plqJxnsyxJAGcxgq5Oy1RkVwUDIMLDkJFmEMNAb4EzxF3hZjJDyVBnmL06dqkcsOpXRBrgZCNz59ECXDqwMXf2k917zdRxGXG0ZEdRId5S0FfPtCGZNMX2XB8wqzAhdA2zcuuTX7gz5wed4jIkSa_8Rg1_k68Zc6mjBYCtrX_HvXVOQ4ijlgRB_XU7_7Tgv_qQDWJyAYXBVClWTu2wkZLi5QF9CQuMQndKNyQyOg1dPwLAF_KwGg5-D2j6TrvjW0AI-HnDkIr-iBSv25I8-Nl_JBky9RFPzFDOUyw-u-dFNxZaniS1SJVMonnI0Ad1CANpnlHTzObKzfT42Tn104B-zwaXxqELVgTEI0Eo", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110803191221693817459\">Andrew Sayer</a>"] },
            { photoReference: "AWCwydi0HsdighL1we5MHCv--J-CVIpfUxIrZZG8knrH9mEC4uRx8CozcFgKHUejGXCNAImHy-8q4oSPJ5EDn6TMfrhosAVaGnYkiJxZ8XLVnx_hunEQ4iYbcHyhLkgnKYS14pcqZvK-D4AWB8VlkIYofYziFC1rLcybPtsMn-z6X2drl8hp3FKDG94WMdGFlFi84_Bxzl_AaF99y0MaoypC59udlD_E8sAI-bnkbW8zNaAdfEjZtoJOHBzp6R9wu-fcuneucqmd5k6i6z86n2hqZFe6ybiBlunx5rdX3TtCRU1_NYwbSMmpeC_5Sb_GCEZ9KhY78qgcYt3AUcNuB2BTYE8uPbsO01hiMm0PKnzlHgJzY4IaPMrBipYipUivXlxiYA-oZSwnXDNzDjqlLytT2w8FThIVeVblSTdB3YaVeEiN65Gc", width: 1024, height: 686, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117557414923920008272\">Barracudax</a>"] }
        ],
        summary: "Bintang Supermarket Seminyak 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["간식, 생필품, 음료", "평점 4.4", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:30 ~ 오후 10:00; 화요일: 오전 7:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://bintangsupermarket.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3855921151964447320", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B9%88%ED%83%95+%EC%8A%88%ED%8D%BC%EB%A7%88%EC%BC%93+%EC%8A%A4%EB%AF%B8%EB%83%91+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "페피토 마켓 짱구": {
        photos: ["/images/bali/info/shopping/pepito-market-canggu-bali.jpg"],
        placeId: "ChIJDQcyMIg40i0Rls46mg2olsc",
        placePhotos: [
            { photoReference: "AWCwydh3ww-PeYzja40ti6d5M_hO6_6caUPVs3yb--TC-238DIIhZourexac4K2UKiqTCcKudDXne4teDBAn5jamYZBBGEABbdKzhQZEPQkm9azJ0FRdHvkPiYknHsY6SBUFIDjzBigLwEK-MEGfxJTkgwxxlhtA9bjDRaKI7AtXzeJTvgjIZE0lBZ6o0DrLgtq3EWUaSGMqK7QB0KkKH1EEqQHa_ZoYwY_RKhiVg-WGOU4_g544D5LjOhA3tsAm70NU2RF9enuaqztKx-5WCZJc9M5nIzJqRFO4BEnRvakdh12cS8pMSomEEZPBF_1NPHhBAWteSmqWZBzYLfZilpks2Qe_KtymP8FbK72ZSnijYiuljSX2ZwzYYIEPmfLGuVORzyp6EEnVOwu3m63zaRkBCpDlenqANxY2fbVss2fVFCrsqg", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107827685384630861976\">Pepito Market Eco Beach</a>"] },
            { photoReference: "AWCwydi1SFTom9NwJVLe2WFgLLDxJw68JV9zxouONpfwqg_t4UulbqJBSQL0VH3H3votaV_6WJmeY9D8zFpV3LxJaVG3ngLXDkY5XzbCvm0SB8zvtuW4kPBZGa6XVfuwM4ylqu6Ars0wsWWWv5Y62wjCd-GH1BroNT5RHjHKrJ0u5qU9qo0FEmu16XmLBGtyjNk9i3jfQl93fvKE9OVHJtjpHr-w5ngPR5j4AFTaNhO9MNJxHHgmTIW_6BO4wjHc5vPWrtVeE1Dx_JGBa3cIkR3VZcaySM4M2leVTecbb7g0bcAdqoa3nyZAWpVZvS-RIzG5wvbSfV0NifIc4r5kVaRlgq9QJ4EpGQ-UHaYlgEpLamm9t4fF-QFKLZ8c6D_JZ2b5jvMMjVft-5OBiC1EhACn05PN8Bbx39ZIhkSh0zCq2FdRrhgP", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105851465661948729085\">Smita Amarnath Shetty</a>"] },
            { photoReference: "AWCwydgdby58zQj2MWZFCdc0VIBmV46fdKhpaHtFBpfdZtclUQpOiLoRZwnfDwjcvapMc-t9vY-PyCvRrQ6zwfbse-zKUyGvPobVRt34FHJY5YOPEkZXD2areKRvvOFvBeWJsI_b43YgrvIPJB08ZBittc3Dr1t3X_jWbo_a1AejaDKK60_UhbuhFuA3Xz7yiVko_hpcCPIXenDL8yCG0QF_8iJRVbIsjO9YIoHecNjYaQPFNRVCpcsvedDdqyrv2DcMcsQvxp5IiJxJIMzh67CsDx_KU8XgtfnGxYwaiZadf5hC4WCTsL8ZhZR2yrbzADjNn4CifGG4jG6jZRuKRkXccj7JhFmcM3bFxZk21c8xx8aC9T3qn6fn0juHlIrFMVp-neCrdk4kO_ROAaw2e4qRUtxwK8HdX46jy-qOzzL2Mv0mlw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117647202976807502185\">JH Park</a>"] },
            { photoReference: "AWCwydiht9iUC4eFspv28QiReEndXXlrvWW2N7IAcJK-XaV8-A9YBhI2u3ojifbEcXhZAD_ngUlSQCUMFztRBYpTII4Hr9DUR-k1tlyB1bNjvL0W2Q1dNq15SzuWTjtOn4MmeKEFw3FYLvCZwcDNxDjzEoGNHuVbL9qBX4bCrpmz0iRCvoz5y-YlK918xnlVZ00xu6Vzz_5h08xXWADHYWLoeG_FWRe-Mswr_tncZafIe_BE0asEDkGJVZrniHbYoLhHbyx6ASPqbcOiDtwE2mT1tsdfBqOxHILzgzAC8s4J-7sWQ1J7PrzTOqc7FLsqqPff3ztztdo1n2uE_8LFJabPacaLq_jGwXYZb98yNoaQa_ygxbIXyHXikdSYMSjnInQxsWtnC8TjX_dz86iMQUURV0SWs2m0RKMEmANnBO8xNZqUY60", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116398612151551343487\">Esteban Cuello</a>"] },
            { photoReference: "AWCwydivUUe5Mjm9FufNIB0_K2PaGYwGHTfksqvG_-zHNyObp0g1bcAfrU44p9rcwPDz2_vo_rWZBKXNMb3Hn87yTuj2943lejG3GTDmAq_Q34mFZ-DekPqxMxxbcJWmY2-5la6Hge-tCqzibwCUH7Hozig5ZNInZ7LyBoM5PpRkqytSqQbVSWWURTaLyIcljb1uySJd5joIoJzjQmjIQChCjAMWSJFvn8sbEYt0nRhI7UYogoiRpEM0byHCe5XKjv2MUGbm58C-M8a0Af1XCigRkb717pqyVlZHiNR4Hfzg0Y4O6I7Le853l6vryya6QrlT-5OF4Qnxmjk0D4lV8Ztv11CtCuxtJDGSfwt2I2HmJL5xzwqe2YdRtd4TR-x6kzQ0tp_RJRiBOdDnJLJgYii9BW0f3vanQ3DahDHhWyRKcsw4twtM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105851465661948729085\">Smita Amarnath Shetty</a>"] }
        ],
        summary: "Pepito Market Batu Bolong 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["식료품, 수입 식재료", "평점 4.4", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오전 12:00; 화요일: 오전 7:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.pepitosupermarket.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14381867236429844118", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8E%98%ED%94%BC%ED%86%A0+%EB%A7%88%EC%BC%93+%EC%A7%B1%EA%B5%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "짱구 스테이션": {
        photos: ["/images/bali/info/shopping/canggu-station-bali.jpg"],
        placeId: "ChIJV61D7HlH0i0RfmFHFovoeVs",
        placePhotos: [
            { photoReference: "AWCwydhOCM2EwSQYPNDt_HJfP_amoB_p44zYulsCfFYJZA0NQtyiweqHogqc3jD-fH9AE5-xOofSeTE2OZYJjD9UhCwJLKYUZt2MSG0pXWauEZ7eh1PS0zZDsQ0xJIZo7NGHhRsCVNc8jFc4h7Tuff7r-e2a8mtK519jq-YMgVCBdJ29q8h3g7l6g2eIvxg3IPf1UhByoEjYSv_-lc7XSIo6KfbU9GcSh0rlhi9W83sVRqwqDiDlw53WnU4Y8Au7oCrKkWvCDEVFxb0cF2S0kpptuw7hK2Mn0O6NXqOvg1r9EPGNVDfsRJxlhVkWAbKLOtBYW6quDIU-pw27cd8yJSFTwASEIThS3sXbDLnTYgwwHNPbVZQfT8Fj5U9TZTSraMogbbCA1PZ2Ri1gYww2rApkicdn1auO5V13tp48Pktzw7MMqA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113326690469790567466\">Lourdes Medialdea</a>"] },
            { photoReference: "AWCwydjPCQoKglStCJU6LfZUyxUZiFEcpPxfSAoEcPY5tgt_k5aaq5A0DNWSlJdRf3GFI0KsHlaWxd-056PdeazIW8OriPXh-exjJgtmbNXUM0T9Mz-vDD-fJ9v_1NtBFLnlBLpRgqqAg4iJuyNTAUjnJ4itWeRNsOA0aA5Oushib2K-7KDpqcr___eo3_ymhvRUKc9ALriPYAeIQeoYLmlXXUAolpEXvxMWRscFVIzgy38_QeIn4GWPKxDKtgq8vSqXDDguwAWTtVnWy5ldcc6KP-JjmBFeOGOxXmjvizs6iK5jPav0OB14WSStSV3vfVecejnpHVktUCoGKO-ZNHCUft5mqGcbtNahOYJrwEDFTovJ0GMEKhBz3HAmSL7nfsobkoN8m1KrJbTOdYbOK8HDp4PvSooT9tYzqBLk4koxh2zd5b_I", width: 720, height: 405, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115410963724609132500\">Canggu Station</a>"] },
            { photoReference: "AWCwydgxu8pMoanDCzRxH34CSEd6vnofzKcVYiVOQf-O2d1ulDcN2eB0FJOrs-Cde5dYAbNO49KO2ZkddMBKbMcEJg2kgygfc6nNgcQE6L5Fwdm_m3gh6j7nUPB0QyWU95pmwlzi2mbMT6o5GwVGC3ltyXq1bdoVBdImzIKhQ-jQ0x-rV1y78u8m81nJaSSbi0vIirlvCuffLPlb-NdPKbN_yft5egAK5autd7UV1kiPYwCl3EKdVoEYb0AB0EhaJ4OIzfxg0dLG2HakETwIVLjcuLob5aHkuuizsKp-8-103s3Sh-XSAUlY2rCeSjJOU7Hao25zKKJXiEj0NZAU7BngLgs7F3pm4ZwEbEfF4kYHRcl-CV9V5Vfvx-zU26AOKjqBcKUbBjK8-XUDjqM1NTFA4pnWlKEh-mh8IQbEBccX7W-OtwmEBYS-Gjoejy_q7w", width: 960, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108467281978299603109\">Made Nia</a>"] },
            { photoReference: "AWCwydifIiHjUBKdQeiuManl9d8Mb0MzcYxaosv4142Oc2-2rEpaHFifuf09GNs5vlJNyFXEVxZIpEvMHKmaJrhSvMpJ7vn7hKRT8_ldFZBghppOrSLK8somj6rJ1EEU80QgvZ3l1uMx_5cCd1O32bWTW1A40y3hBHjBlWOdmnFDCyJJq1NuKX52qi9IrOmZRloOevSCtllOjFuecisKgGxDtWO4bThnqNlDoeYGrMIG71z5MnLHbIDk9B50kh6jLfmx6xbDx6-RdrCyCPjKmXRCrOGoKBie10NnI_QI92irwuqRndKPDnDLElimYcAqCT2jO3eNwQXL2oO3NIuJqebp6G1gcTe2ITtwqJBrUgkqx5Jd2BubSrgmgDJAQi_QPmpkjtkF64X41Gs6kTA-NkIj0K4ETdOj2NHp5iwOCwmno5LDX49s", width: 4000, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109855126783772145758\">Johan Magnusson</a>"] },
            { photoReference: "AWCwydhTYbayYRtVZjQNQwYfxVOFJAzSHMUtIKpl4J0gPoyYmvOjooJCw7tx6PYeEqmg0j0Lduf9w9Ak7QjRnUwzjZECh88ljElbQ-0a4vo2toxXVEIhIlH8_mnbfVKJkftcuOsZugpRRFKOvTUneRJrf7E5Qo_HlabgSYsZtKdiVRU21w94MCp1A88FQqyOdRiNeT6pJfEwveu8tiv-c3LFwI7on64xlXnnNr26UXn9N8vcyLZRN4I05XBrY8vPLrw7yT5hQ4RFA--cIjDrZ5mHE6MyWRI_QrOfyzZxDXWeVeuxwU74Dut-rvLfXEv-5B-Y1Dmt8uvSvWo-xY-m-UToknjmSVrHlSEQ_5cbLosmAER4txt3XSJunKJAW-l7ZxR2zRPIcowUF3n5gJt03rsArjVOJ6plAz2dpOr8dxsLBFU72n3I", width: 1836, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100378329029443426809\">Putu Bagia</a>"] }
        ],
        summary: "Canggu Station Restaurant 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["식료품, 생활용품, 수입 식재료", "평점 4.9", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/canggustation.official?igsh=aWw3bnI4dndkMThm", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7736804867465044667", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%B1%EA%B5%AC+%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%85%98+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하디스 사누르": {
        photos: ["/images/bali/info/shopping/hardys-sanur-bali.png"],
        placeId: "ChIJQVnc_shB0i0RmPedT7-jl-0",
        placePhotos: [
            { photoReference: "AWCwydjqWmB9x9F7qQc1IpS85fXRLZlkJgqsyyvCjvTNiSMt9IPVC9j4u2juK_Bp5ib_SgJGfVYB2fKmt3I77gN4yUvEG1lGth7lrennLfXiW33nmyhvARVUFDyWtsqpP4Cps4VflxLpSfBO4QamnysFrDCoS3VpbYIUnMmS8KSq9n65_Qt0qoahOdFM6bKXMIheUkKG7iEXRIor4NU6_zpzyA78V5ZQ9N4YQnwmhy2GbvCQigVHjLNSrA3HfAmwK4g2L3LLd8fgwxYHPSRVHBzJPTkc4oCzmop-HIZDq14PItT1jlyU79CrJ-gadhz-ta7joGNeepZorCMULKBTAxbU6KfL8S4ng4kxxPhRGWW3sgQC2Ion6YpnklxsVsF2H8OR06vOBRXpsZRr-od2Jcr9QTbyVoX54dnf2a8MJDwp3JU8sA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109796417552767577849\">Arta Sedana Sanur</a>"] },
            { photoReference: "AWCwydhHjSrCrXsky5U5dqEVuX2eNMYk_wAIwHrFxVW0jLw5ZTDB-CgU-03Xw-VIdCBxWIiNXU3SgL4hTBm4QDPEHQA97Y_xM7A7Ge2pvHD4Vb605ko_HHaV-ureU_OXgVS5uO2aTWinzGYbNgnSaMLIe26TpkyMY1NOT1Bgof9HjOE1F2ci0FGXM3XvP6MNJ66nsDeGcu5hSdhFRfU8afEi5PdwtelaelYbueZllg4YJqvnPrb_JMuRVwiGCveELkTvSkemm-8jiLVRI5jnUeXRq8gSbjknlDCSMwSkvKbPDbLA-JCKK7zteKz1_BF9H7zd9VoLggS9P-22SItKAuJS1CVxKosXh71J2sTQkteUGPILAmTaP6Avxjot0jGnPv4tRNwJNL2Jv3VM8yNPnrTN8ZWRLTnAXiLtNIQy5YAaYXOCcg", width: 2048, height: 1152, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109796417552767577849\">Arta Sedana Sanur</a>"] },
            { photoReference: "AWCwydgfNGZBl7Sqtq0yLivQONol8Wp7eAmnpvSTLY41TnToB1ncql8Qec7KJ0niF-SxyAfS_5Ye3L1Mk7yqjCCdB_9LjEj0dHJOvNdFFv7F-zPBOdjn2Lle3LXi5gNy4XxrsSjltm2YTFpQK1WemUgfmF8B16bWAiSgzmrUu2vYvi_WuWEbD1yQha8xjA_ir0R3Xmf8BDn_Z_Tg0lYd_-INXVgxbubKpHikO6qsQybekEXNLFeQN5sO6Cwc_8UTEFFx9d1J-nCoBcpesrEtZv5QHPmP_aX5uVKJ7z98SlnnOgJzxBfnY2NR7C5E4hNFfTXNZ5CrpfmV5xdUKWvXW4X5yCQ9ASFiwabNkjnayztiI2psr6MLLHp9AowPRQG40658fgfjcS-ltCGU5otYrLLOhENdK0LdK4vc6vscrbVO9bWEV76A", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109088704102387338242\">Putu Agus Widiada</a>"] },
            { photoReference: "AWCwydhj0gubStHA7KysSZAfmjdAepxmegkEAxvqK_EzOmORlsMzvbcqduztGfH9PmdWgqnInzU_VQKsO_Ac_1jTkSToE68r8AwI7YNQh1YlGZwvQKL9XVL9TtxlxuVkeAyMsVvEF-eB0V2j01ORGiKNF3QRi9gzoGke6PqOMMMEyP9yiDwPm00TrzH0MF4d65giZP-y_vFjSdYI5aQCISAEittYl3MxBwvQlpcYmcARM_uOTVPWa_upoCWxUotYoVRSkXyD6HUs-_oBYozftlhBew5h-Fcgh9DEGHZYdC_79lbYYBNpI7vpL3Wsoju7TqSxiNxqA79-AE6_FDN12hoyAvew1PdmRhT66duUDlI82H6T5wLrrmUEOkfMzrMoOH5nG70-hAatEAcq4bx5V8aD69VfSYq--xVuoL2muVM5UOMhP0Fa", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115093434588134385510\">。たけりょう</a>"] },
            { photoReference: "AWCwydhf6mqdFR-UvMfYQqVeYNgPwPeRQah0Vl7tNaXtoJeDv75o0m78K6LRmmkVGIvIZaNo_8hBLDIo1xydWsvHONXXPOpGpi6v82wFta8IznRlTzrsTRGrIgpXrkScYrh9pUAZKLMBAlzPbAzw1IKwXndKaJ5a6EGVgmL-VqXO8tATAWbwicQAyjV40PTT_rUxG0H03rR8zEfSAJb_arMdOZyxNl4r9mzSoNH6p2mrYpbw4gQKEZ9BVcuD78pJ3-UYEFB4QFOgV5Rq13FcTnPf1dzVAnNLR4Z1mZXoz0SsRv52UxcyEHeqWDKqfZCKMc5GSpDAKAPYqjx7JqgpG_lFQe4GOL3PIxJQkm2xxeTjLSx05gXBzTP7tOJCmiV59K1Rx0xuzMsZX-_pNlQzf41NfkqG0QjnVgpaw2tgscMAP_yfLvI", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113920206509657614282\">fup9chanfup9chan</a>"] }
        ],
        summary: "Arta Sedana Sanur 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["생필품, 기념품, 식료품", "평점 4", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/artasedana_sanur/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17120332550542063512", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%94%94%EC%8A%A4+%EC%82%AC%EB%88%84%EB%A5%B4+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "사마디 선데이 마켓": {
        photos: ["/images/bali/info/shopping/samadi-sunday-market-canggu-bali.jpg"],
        placeId: "ChIJWZ66P2M40i0Rp1amKr7VGMs",
        placePhotos: [
            { photoReference: "AWCwydihcWBYzEUfYzKYn_f4JbatRyvtA_jAcWsxRbH3vHjeuSIkrlnSeqOztw_M2tT-MEIbGpDDoY6O7ygtvopUaDOSXPl8wR7e6Y0DI8mldoN6X_Y3p8_-0jZqv9hR0QTLRAuyS-2cVaz8CUr1luLlimNAsi0fUFeLkFVt7rpkr9-qXQyjJJ5t2UHGBS120qSnIQQaPEKXjPcm3SO8Dny4t870iuHZrcaDSZYx8EmqPDdPC5TiPwAqv9_FPmqZNXeYt8svrEdESbmDBdnd6DzJTpl-TJpikx6Bd4xovM-YwmMaA1GGzrU81eG2NVbu-4WtJGY25_2giowFrhx3EzC5qjGd_wRXoJaaj7udbfXBg7A4vequrD3US-ibdYj71TdOI3vVx8FMdG4dGuTUtOcxg68nOziz_N-0uxMuWJ5cnAwlgE0", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110432289723991503419\">Fera Santi</a>"] },
            { photoReference: "AWCwydgZPhuo0Nun5I57cbnn2esVO5oDHaBMm4gRVxNd8ixpEKf9nWl3PG1uu-fCriBYpbRCWVBw_aCfPxhN-HBs24pYZAGXO3OB9f8x0-lDpHPfa7XiJGwpmpqG4z0Wf3hGoPQKRa621sG_Wv5RG4e8DZCnTEbh2Azk1jGN1OUEm311F63nKoW2c6IF3dH0Pl4ADz3C17PyU0lvIF6aVYUHFa_PyzysKZu7nK82ias1QYKhWX-WPD8AaCpMbEYTVqhrIoJbkqB16MkoRaONa4G5RSDVBRKkZykIHLIa_WoYYqCpeRUD2ZZza7Bf9gKlcOPmCUxThPRYMVwOFrqirsF_ZU_0Q30t3HDJd-52WE5DaAIE3ndiWnkbTQQdQzrOEgwcXaE7XopD_4PCel_54taEElNV1lIjKRon7mpaX2bP19fr3uGU", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112703335338059786294\">Sandy T</a>"] },
            { photoReference: "AWCwydgQfSqcl-2-b5MSWEr-5rG-JaUpmLlVKZor_7ie6n6UmUG256pOeXQ3DXB79O8a9sce7HSu2kVs4LpZuupnO5dELcThpIEXasnaiEeKqW3GJjrKCY0Uct_6nAGEUFAoD2DW4zJhUVlizf_WJrfLJwYnBv1b0vN8ML3tc-B7HSYmB35VcOy8SUNjBZiiaG5Nki6jnmp346XMsFLyal5isr4tVSuE4o4y_cnSX4yu0TsuOnZWqBI-y8TMZB0rS7y04OxTiYj_kTGsh4XBcdpiAXIQ6NkLWX4jOxatoFG_gNLQ8ieuwxaOchOpoa3qmOjirAG8rAI2fYTSNpK6nrkrRGarpXY4X6qhPcRTi_8sSGbv5JeZOK3E_1rh7rJiovDMrBCE2LxzRrsWdMc5JM0PWjPRyu0aeTgS_7neEygwehrxaQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112703335338059786294\">Sandy T</a>"] },
            { photoReference: "AWCwydiCVI0K85dFcZOoWQpZfpavFiw3V_2vM_LDcMPb5m0OfnAllj8cfqTjTkMNisFfGOll3I13SR3Iig6xfnXVlB-yjv2SxTNBvtKumGw3PxD3qiGeu08J92_x9gdKVBEYsXtixWCLbo52E2G857OgMF4yFXoH86piF7xs0chspOaVQIACOmUpzRHGMbzFU0y0tF1hq5mSUzgFAdf8waKWCJc46T9gKTIAk_6oozNQjuzUWBBoryPB39mbXb5sRB8g6Q5OxoRTIcz_lTmJ2TY4XEdWZleXszJs4I6CB87mJUdI1N61yf4qx8RPFdfNlt6LiphduI7soHBCu4SjjQzSxTJ3h8ILpVr9EDPwZFjZ_C5gkXNkFHYknwYjoy4SPRnz1KcDWcdbDtVr3myuA_Ac9waMCLJhqVEaSpLRPe49LsmtB-Hb", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112703335338059786294\">Sandy T</a>"] },
            { photoReference: "AWCwydg8_NYQIIUtUIPQ3LOmoIHf9UllFSW67dXQlP1aHxwqI0o-5N1zHiUbM7q4AkFRbD1dqKsOOuUMdxDrxTPBwUj3QhYifT93aWIZvn_ad2BkkwjUu0Yfpx92xgLJ0xhZKZxMfvl585wpzpL23s198ymHptFDkRIitjWaW4JXe0ySVjprPLSBR6vt7ph98Qu96VJ6_UcLzJnY46LUH-qWwzQgEvxaKJOkBoy2pBR5uLgNE8Y_A0_oycx2YuWVQteNdiwUxfiOVRP9FtIuKhGII4d9vFOfibtMe2SlvCdf-jQ42jnBXg6bsODVjcoHNMBKFuDMC6TuGP5Qect6_7Su0nKT61ae8HYwLcnWY4K8QqOHywC6h_eZAR9jAzUChjoA_6m2dOXECWk5rJPNOh22ll4FEXqkHnotJQpSG8NJ7NJm3RM", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112703335338059786294\">Sandy T</a>"] }
        ],
        summary: "SΛMΛDI Super Foods & Wellness 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로컬 제품, 유기농 식품", "평점 4.4", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:30 ~ 오후 9:00; 화요일: 오전 6:30 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.samadibali.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2750921785388538930", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EB%A7%88%EB%94%94+%EC%84%A0%EB%8D%B0%EC%9D%B4+%EB%A7%88%EC%BC%93+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "러브 앵커 짱구": {
        photos: ["/images/bali/info/shopping/love-anchor-canggu-bali.jpg"],
        placeId: "ChIJl6fuank40i0RsicrYP5o-_Y",
        placePhotos: [
            { photoReference: "AWCwydiXIQqeMGZlbv2dqIdFzAR2yfc1H1Lscu8znj9iwDmFwf9VZgAHHs8e6FuF7CYZyQDfD2SqyriEtCvOMCbOXppxEekCOhh80Pc-DQqsdP91_xOU_m5HFdInr-1R7dGFAtM7JIapp7WS1HTN4pSI4s6hz-RYa-WBrOdSXK9Wcc3EBuQSyxumRoNi8rzmvZ0NO2W0EqCWaUMpnnmNhP2MzO3Oeslc09ngQEWf0Z08X6GZjdwnqZDBe2f-urYmTjBuRAUyR6jIUoJbtkzrqlwUkY6UA7rV0P2yLBjFTByKI1Srm3IxMbb8vdv8rmFl0cs7A9mvCCzovJv5lAfSKvFga5CY0q4iHJGWqJZSzgnMXkQrN-b-xTT1Gkw-iA0bO9bxaCgfHbzokHsoxDLFNXzo3WKMI5LV9nE3-ojB-0ofVUd_Ib25", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101540230734589828997\">Anastasija Nova</a>"] },
            { photoReference: "AWCwydhf5ZZ87c5pW30LQfEiojXbCC1z-jPDefkaCFB8p2TS--7ObHJVcqzySFKDUJAk8cb9bh_08c0QJv7Y9PC63fZJ5LMR8kf30Ih3kSIEDdWvf9bTaweaHD985tN1W4-2gaM7nZiGwDLaRxm2Giv1XUCq35EszLsvVr1Eo_93hF6RAgZo_4YTCG46viqg6o4PsuSiFoJBYGHBLCcZRz-uYy8E03WZqcp4dQs1PKTx4ZAjkHM9Ew5kZdTmS49UEKQ9csUZmIuBvImbP_Dv63heh451_dxUMwY0SYUwWBmrew5x25o_g-MHfjEslbDaezvkbzeW2O6AuDXjNdW573QY6jvFUq5FQFOzwKejnUPd6dnmGDltFrMNz7lo0WEKfZKhFCCW1yRTeN8mhiw_pB7z7HgSE7x8jTlG_JWOSY7qiYL5Q4tuLyPUbVq9LWo1-SeF", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104391454991883462619\">蔡堂</a>"] },
            { photoReference: "AWCwydiJhwLhc1i5j7rbO3vM54KLo_s0AHBxyTHF_Cip-BdEiBt3LdPhGfN_WWVRO3C9EtRSUlA-_KJZlrzUQJ1P15Ke3cKGTNGeKBTk0iAjSTe_VSk21Q6VbjrWx8DtZu51_ziQTYlaKu-FnBFYqOawZJ-ZiH2HAfrR2eGToL0xd3b-UxgYDdLZn-Zp7X2HALvAFuPEV0pUNuiWvu4alZj0RKZABXWzdbigGI-JZPNP-RqOIGqQCd8yH7O9xqMSF_hRQcO1IO9Xd26QvK3Z_rrBRX6-PWd3XsLJgF61ZfEF6_UvTv66ZFIW36tFxK4Zqm-EKVDDAi1nb7dkFAfAtRReJY3BeHhO4BmvYu8GxxdkHW3MqOZP5Gk0SgnwkHGkKycKPHvoSZ2sUJqMP84c9_gaThp_hj8MIn5JwHDrMrB4WRXPcg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106050942663290858335\">K K</a>"] },
            { photoReference: "AWCwydjK8aaCL9KieF0LJUhrf3R-9P4aOhdPWG5j-RuOFmgWBndpgTNezqIP4HpmKGwJk6ikuvQth3s2HQ06U-EuhJUCMWlXKQyPRaigR0hmjUr3FrwgKTbK7uA2QEOWMG5ctMaEJG2yPkK-p1g_WEXNsalP8LZhXXNvMHqmqiMOgpG18oyc-bKgM642jmzFtlZyjgZahZiOOcZvCgWa8Ly6tKDx27CWxAOmuiAzO83iYhWPKPtPwW-oPDJcSaT0ZnamLYU9ubdYIhnWrpewrvndZTma0GWRX_7QxelE_udXr3D1Kvwew2eALS9mxzO1G4wIGkawWmYaE6YJp-m4vlFzI3Pp9K66Ly-TdBKVwQlOKOJTaA1l9_IFQtdUgjmd-CBgFW6CodfjZyZ9aL6l9YsAjbEuEKRYmImTh4H2H0Ab6OkZKad0zi0llgaWUtBzGHpb", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111899865311404852186\">Muhammad Fadil</a>"] },
            { photoReference: "AWCwydgbabFVuz-mUgvM7ud9H1LNCKvGjPz0FtkMsGDr9JW4GW0bntxfo13dmu0UwHRvc7j9xRlu_FlzdtTdviu4dFpk1HwSGHj7lEbhbba3S-NsfRxzsj5OYKgPby8Noat46yFS5U5uRuNwmo8rC6dSOmzOnGp4BssMnQ8N9n1Vpoz0Xb2qqhMoMaEVBAYRsX_rdDFardxl8lmanzOJ3p7eu0lPx9wCf_ndOaJCdHykgDNSLUBR9LK0FULvVohmbZoVIjbTxLoIczQLhSpx1-Bvf8ts5M8Qeav52n1bW7PgFnHOQbtFVNqhFb-XI_PwX_Q_wNw5qrIU-mq3O6aBgFfKm2u0BSx_KIsxJv4HR2icFQOZEUbe9FoHysvEeCl-InevQU1YIRmdG8Y8SJwbBHPbz4LfA2GsCIVD1hQgUDN121pjU3Hi", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113708626395682867893\">素潜り屋バリ</a>"] }
        ],
        summary: "Love Anchor Canggu 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["의류, 액세서리, 기념품", "평점 4.2", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.loveanchorcanggu.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17796933794229069746", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9F%AC%EB%B8%8C+%EC%95%B5%EC%BB%A4+%EC%A7%B1%EA%B5%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스미냑 플리마켓": {
        photos: ["/images/bali/info/shopping/the-flea-market-seminyak-bali.jpg"],
        placeId: "ChIJexAR9RpH0i0R0oLfx8SaXRo",
        placePhotos: [
            { photoReference: "AWCwydjntoOzGJHNyIC8JCVqiJkbLOWfCrbykHxJfk9mSs65ViWIhSnCJbe3bcql4iDZAyDLrZVVTUeRgzjphIZnZljLc1_UEKkxjhrqV9-GZnkyXiZDtD78LjeFJ8OSHolTs3kM3KP_PxI_qDegulw8FRCI8205FuNNTNrD74qmJgiy3eHtkjdSNT8nnZiihc_hrKbFWIMkU1XUfICofFX2R5sLw5xVzrARBUdImd3vkY1S-b07syWHCUK4TfBz38feJ7oRBOt67-5YAEVRlkYf2VfvgnV_pvrm-3pOWUGVgP15gmMzijAXYhn3v9vnZADyqDcPwu4VW3WN4UcV0QnzMBGadM_3lITYMA25_wUbnftCiDa14naDSFrjNyJBteR9ztcs8fiHe_zxq4uM8l2YhJFvSqig-Bivp50qNyBKUYQtgW_6", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114097219563843954520\">Priyanka Singh</a>"] },
            { photoReference: "AWCwydi6h7qymVajRSwP763HgqSEyCKyvzMloLsK2hmeT3tD4xfsPVX7mdApchMg21JaCRUVqXEFxWvVUUsbUvHd_9whIQVcMqw4REANcSYLxFFLnBd7G1N8JZob9XUgskiU9xIa81VKYsMw25BEHk-oAKi6a3jgiYCl5UUyU9RF26oCpRmG0sU3lDcfAtP_qCP8jSpymzJdjJFTqLhkA-k50gijT9koT8mrW9AZzSLIHk2WwQCDa5mArcu9wbzM9fpmvWE6ijA-PlEDANpuSPmMuamxg1khSPKhCjo288NW8cdB8Tyag-Q9R2DnMDQQS3c7egp7yQeYwuLKKH-i3icHluPtW5W34sBG_CsRQy1GizwwUkiEmRDuh_CaTAtHhiDLqc0VkQjw0-2D12a_Xz6l1_fm1w8AObk4hjczMZtQrV3BDB84", width: 1067, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108275981389208465693\">The Flea Market Seminyak Bali</a>"] },
            { photoReference: "AWCwydg_omgnUQAHZofhiC3ngYkonqspMHnWYTuPIIYAfcCW0F8cPY80kiKmkXziaQB4a4Bp87dL4GttCOtnfadLZ9kqSs1pGu3tJQvG1Huaenpua7i0x8WYeBAqQcKbcbYw3xDsZXBnAcofS_HD4W9g4vFm4echpcWkHMMPT0kHz9xVtAP6vnblNkHk_Bxkg82Ka7l-G6S0urYHmqcxGitzJtbJjpKSXIETv5m1Top-GUdyOE5MijGDyKUqcee0CvPoyl6Y3sJvYKkMwU65byUHk2Y9N40b2Hjs9knQavcfDJ_mfCRfVyYGxGuYf2erkZaA06SNbuyH0wuHjlYrHa9_8dX3Hrq5I8WG0S_NZTZ-ZXeI9Uny26CRMcGK8Kr4g3c3qwZExRDMeQxOR0v6Sf5_HGeLMNaqJOGv8MRaeglVwh4WrmPtWUTP7Fr55VLTGg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110174570668418607437\">Nat</a>"] },
            { photoReference: "AWCwydg8RlJfci0ePS00ZF2Eby_VGWfs4Y6QJfBESvvVTYDTlVgpAu-lCC52chSVey-MY56DSDojm3GC4oNfG3vaYOC8cW6ap9M3Myii8b7ZIbvkfahSe4dA0T-AqCV4_KNPEZ0NMmpNQw7eHobltvug334vWJWG-E0mlUjuGkws8VOLHm-ZvJr_AFofJJWj7-LY8DVSAB8JIuSwBZWsq991F-Sw41Mp50unh3FrDgEwzH0iwy_4hsPpNcucfiGpSC1OTnFczaADIF7p7GP5jd9ydgf4RHlKBBINdS5NEAh5_4a6uwmYiP6yd_7M6T9DgdZ08ZxQ5RZhiwAPQ_ZFzeU0wWlYwY9i0r0NIz0-YAKsH-qj42ZYzBHwwmIOI35vsPypwkcnDHRPE7x_qGBGw5tfvTayJpzU771UAxS7J9y4NuQ", width: 1800, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117509826326131215737\">TiKo 542</a>"] },
            { photoReference: "AWCwydh_jEXQd8o2nDwRfPC2Vn11jTZI6izp0C3veAUog7UPqjPCfiIniigIRzedqPL5fSKl2m_FygLAz0IwGSh_UD1Xx3bcXrpRpX9scPJCL9MUXx6u5_uJie6TeJzYfWX8zphyW1zbl_01GcpsisuxaUFmeVdEQuCpftHUW5xkrN7WoFA5iwAzbuCMdcAqSiuWg6SLYbsOhpbofpbCG9M8I27_Wh6zcSD3rcd1S5Y53PFfBvhbAEKbusB0UXMUmHW6qf18KkxOykLxexo8v4GBmmJBS3nveBgLwqJVQwE5RlsnajIebWNaAaVzaZRXy9G5JqG2wV823P-cEHruZ_ma5U1v7bdtA5RiTLHsStmUza33pSRqn3nxrb2N2wAweO6r2vOsRBpUipp8pgT7XGUQnMyd4SXM2S2gWWaoOauJCU1RHg", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116096417227938391088\">Rodellon Principe</a>"] }
        ],
        summary: "The Flea Market 기준으로 확인한 발리 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["의류, 액세서리, 기념품", "평점 3.7", "발리 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1899844787777798866", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EB%AF%B8%EB%83%91+%ED%94%8C%EB%A6%AC%EB%A7%88%EC%BC%93+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "발리 밀레니아 팩토리 아울렛": {
        photos: ["/images/bali/info/shopping/bali-millenia-factory-outlet.jpg"],
        placeId: "ChIJb9Y8Btk50i0RC-mM8C3svgI",
        placePhotos: [
            { photoReference: "AWCwydheAR4z05VdsWX_UpOqbIqMpZl9iQzt9HKHeIPu5juKb1-YvsJswIBy0dqoZ0Z8zYg87AQ_zKX14wwQy-u9ZselFBZSHCmBE9n8a9KCadfEnNRDJvbakJpv25YPFTU4_7abpPd4ZEoZzxalvxk0bVDAseWd0uStnkJ7E1E_fASTnbSdJrtKnmCwqQfZCN5RZliFhzsgxNMd1TX2er7k4mTs-BleZLIs9RroRjYnkit6DdBiX45i4bNMc7yZyYpsXGwHifqbbZh3ev_Ucso35UJHWebTk1cVLz3LgTle1Rty-HMoKxCeSBQmdKuxTbj2JUM_7AUfZhKn2--mNq2Jb4mWFH8nEQnm5mgEfI853WoJBSZeSgkXfcXDCMlu2J3JoHCJTOdwngACnlWR7xPEXw8X1cKFWmxzmu2ciuyjoh75cKXz", width: 3264, height: 1520, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100173934511069148177\">Reta Pradamanik</a>"] },
            { photoReference: "AWCwydiIcvHtbYjL_eF0tbHVFdqW7nwI-InYKBgDj_MgEbPGzGs0J9oJtENW8zbAwhoXqjS34ER4VeWOieg1aTXSqQZW2xfbkCDRqAAtnxKPbbcvR87DTapltxyoQIu3hHn3qj8WGDNR3PqY1vBw93Q6dImqg_V95Dom0Q8JdT6GfRyL2n3aGXT-5CvXykb5lkXzwZRqLi2rQwParnBoEPE65gVuniF0iwUBlJsyLtZ6MTp6QPMrh_ksqzvaraESgekqLy0V-xCUAoQSrvPm0qkfJkxomYCD8kQspPikW5pnLtc4y8kcQt9h7bDGii5u8GSkQMX6IqtMP6p2U95wpYjMNv7s997JwvoXxNoDow4F3a1OduUruVsemv12YBV_nYc2EopIeLOW34bZilJpenqyytm0xbcEyAv7EwU0mTghX5iaVpcYpGBW3miMBew8srpR", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104474407347352723494\">Masriniluh</a>"] },
            { photoReference: "AWCwydioLd0zz16wu3kEIKcQtjM2oCnE4vJSqAaxHI35Z1ROGhgjaGWF8oJ6YWam3f1dnwRkhahd3Pre4UuhG9nPJZAe2eEovGFYkeDukPGxg_EazvW8CD5hlgxWCZi_cJfCQvZ7b5SYpFLBU5KZzW1NHdde8f0E_KyOpHLMkHXCteZcJPXhovsvpX1YwHUisI6WsWAg9cdKRP30ft-3pUKe7win0dUKj5z-fZq5jbHjMjJyhck8zlVWYkBHfqq1_qx1O2_Ty9-L5yWfGq_iuDztyX7sZ61BKFLMm6YPjJCZo9VjdzfQScalLn9I7Sqt7wNf50t8Xj0UKde8_0soLDhe9YF3yDka-QEQy0DKThTXbbEiFSnBzvLVUqh6a8Olt8uwa1kXJBLbcc3Lpcjl9frNK9s8OmeXD5oE_VWDALjMy9So8-xfov9uE4vdoxFrfINr", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109414201926742910674\">Fadli Agasi</a>"] },
            { photoReference: "AWCwydhlKCZNxHnkLPsjyiIaKH6tJkAoThJnkuEJzPKK6PHL4Psfi8mIgbHka8dR9EqumalU-uAhYO6fXBXH8HuQhhI2LpJ5iMtDYxoEM2s5gH501wPdq-uw88ZkI5eRz0dxxtED3tVh3HtKSuGXVJqa_OaSASbauH893MX2MPYt81euOKG2YNrdbld8YkBzERmo8x8PP63Bo9FdKmTHdcWowJr1SFjf8jWo7o44wWy2Iw1URXZ3akvrKt_AmXKrwOvYCWWlYIPPg_2Z3QD2Y6b3Ohw5Z1pn-W-e8hkTiRosuFCEqZLgxQ_uKcRE_NZwB4l_p1jGUNv8xBPiR5qjYr2Jk7fa30UX3qGHasIIl0fywDr8TfOKmhB2saZfcriReCxj-VS04ruifT8GLs4JWVyYRiXIozIb0Fi7DwI05kkGuWs", width: 2695, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114489391200102655691\">Annisa Rahma</a>"] },
            { photoReference: "AWCwydjcmV7hzOK6gcMeffCFL4Ztry6t6b6sIWeUAkxwDI3AsRZAadfGGcRPU5IXf9kF9qHR2SgwzP9I1_90Yb3aGMPO6Px2PzKDlYkV-DN7MglXU05fVXL-FMGHj_8RZhATXNc9VA-ZgeNkeGMp4xUyvPslrVoaPE5NyLpAK_FHdhapG4gK71m3dkKc8xrLvBfQRTboUqZ0MsLbaBEMI4MAtSnebMwBy4pxlX3SgFYKLdHIT5G5tjQz2gJFEGZw_HqmsE5J1LFMf5sZ948C_CrP2PE9nynucR5XHWo9dH82Tk758pTi7Rcy79PKdlvQB1gL_-lkYG3GJ3MSFHGTH9jeHSrakQ2OV9RiInOsibiYTMzJUDRbnsr7JIrDcM9tNhdAbP3oUye21pcq8iMqNcOgIpoXQKgkzP5EeDg9mwFcA6e1BSedDZCCF3XDO6lbDxtE", width: 720, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110223409469140729095\">Yama</a>"] }
        ],
        summary: "저렴한 가격과 편리한 쇼핑 환경을 제공하는 아울렛입니다.",
        updatedAt: "2026-08-10",
        highlights: ["저렴한 가격", "편리한 쇼핑", "좋은 품질"],
        tips: ["가성비 좋은 쇼핑", "편리한 위치"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=197855115704330507", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%9C%EB%A6%AC+%EB%B0%80%EB%A0%88%EB%8B%88%EC%95%84+%ED%8C%A9%ED%86%A0%EB%A6%AC+%EC%95%84%EC%9A%B8%EB%A0%9B+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오리지널 서프 아울렛 (OSO)": {
        photos: ["/images/bali/info/shopping/original-surf-outlet-oso-store-bali.jpg"],
        placeId: "ChIJ6VkoLK9G0i0REFSgv3-kkBI",
        placePhotos: [
            { photoReference: "AWCwydhnCOAORNm7FmgSE2S6KhzyX8ftrb6mE06HvarTZAyusFtPbwIeb__LAM-1frfsdGqoF9ufb7BuDfTsy53QSx53Zlz-xcPOAfR6unuq93zcs6WhOGgPa3yBEQQEABHPgcbnjTdqC-0THXZ0tj7mYnrVpraWItW6A-YwtHFswZm846zwU3oWjJKX6RElXNuHcPtx_s28TZH-ihWDo379WH-qunx3b9r2HK7fC0s2SMWhn_D2LfyObiprbEcHmXxgQsnfoyOFnFyiNNZmRIE1n-Et55qtHh1k1ZtZKbz5LZ5UeGFkEiisUGUvEUoK-oJlHr3EmGaRSmRcnRFjgHSJFEGip1BIm3h4zCw7YrcjIyLQ24UWlBLzoWHHP9RRHZkNvmR9boNkdN-Ci-GtsagCjqlmUzXzwaXK1PtTTRLY550_6Js", width: 2160, height: 2880, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108905898398084607807\">Safina D. Yani</a>"] },
            { photoReference: "AWCwydgR-e_rzAMmXtLeL95rMwWmGwi4X6FxxXz6gAD7Fz0s7ytBsbakser8Tqe5agQZdxGG28fuGnrzElm9qb9Zdjt_NjmcsqtpEtDlPG5m_RMcKT7lot2amDXI-sz-sD5mS77a_KrdkZya1nZPwKdkJ8wlylW1EPEQFNgUhNMnW7vIz9sfFXXa9HIdD9WzSLo16_F8pAOYkHoGoE3KCzCFwWtvWrmxOMzvpm0D-tLxkap3We-E0iP2x_206n6ZsSrBR2FnoY5rrY3LFDCJ_W-mTqQ2VqSBvASHS2B288DxuWh1UsvT_h05EBKP5QjRCKbRYjq-_Laye5_qe7eJp6EH1fBCZ1a4dEVc561V_ydQ-bg1FUQ-7vNIYsx9Vejg9jl55NWFsus6YpQEoIDZsQZKZOqDTIORikLB8EdX3IHBrnqJnQGlollQg-ehuHVJULnf", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105444040010874894193\">Lin Di Bali</a>"] },
            { photoReference: "AWCwydhUtfehnbdpiLlSNn3o79A21tTE4O3VXm8laYQ-RvCfbj4vzGLTbWHxhZzYBeJkFZzAxmltgS1DD7tav2uFBHFsgGXrBxPLpOiBi6wFKJ39Jkppi_2tZ8drwaJjTGbI8EMFgYjM7J29940-cGDMfxYjD5gpXEb3QQulTQXfA74S7sEpLykepfWv4gzYElU1K2TZa3HX2KSfpK3fF85UDJ0ZqCaDMlfo5mckXlPj18zf8s24CVdFDJB38BqxYsBY92vh7k6JwTJrM7sBHJw1AOKeLMRvCfs1wOGHMgqQ8n1LWnbeAaqs0a-aACbqB26d9GGQ2DPBpciJgUbsUAlGnsvt-fAtNjmp6WdWcQK1zIvceIfcip0nN93EOqzFQDpdxYi5dJCB1Ft0PVd7jw5_zQdtlqHxGby_uvWcER1gIrOCZw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117389645257995448340\">Raya S</a>"] },
            { photoReference: "AWCwydgJGRxzc0oCT2JnYU4Sih_kP_cz52HT191nkC53sEY_RgetLzEI9Hm-k3_KH1OT2l_CQ2vB-7LwlHw1KEtyVjXzwUKOx5d7vxu07JFkK06fQi5J2R9C2qrAmkOk-_V3nmyzgnCfGE5U6O2BmWAsanam2iXludWWtJppvenvHb1dQnyIWHw4tz2K4yBNQjQ6zRVT877eGr4kBI3bhLbJTxq3FJVRi_nAn1bZZAaw2x-6mfjtYUdFQqG-9K9O6SlxQsay_FFRgEJrbcyQre3wopLzzPOt4_brUGsKrZWXDEDq1KoUbZYItR2xqVqrJBTwiCLlGUa80lW7GegbsEmDZX3haZ4QOmvd_e5JJ2SWBE1M_Z136k-DD5nzxPdi0ZcNsnxZqWr_MAyR4CcybBzWiuWfoUTY10y-0qpqgcOWiMk", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106947507091984805223\">Selly</a>"] },
            { photoReference: "AWCwydjXsox78wbPK812zjx4tbx2uWO5tv_-8ac-JTuTkNo_1ZLzq7sJIoN81o8oPxLobjLIHuHo7tbl32QI8DDVOri9AQESt266pWzTbIQCN9SrXLZ4FLf4KihSlgSGF37tOjAvbJLkvo6ECkDz3fGpQfBefN2jnXCzZvWwnOzoCDLwAC6DX_ZKF2SH9N8-fdhyCCdr0DPQJbv_ILt1w4N7YHOHXvW-4jFCthvPgmwK87nZp1h_9ebapEOKBZW1Vthtd-30Kqn8-RDOWwDzIKdn-oU9Wym5aINDDf35x9YN7AqT-Bcfi93rs-enI_a0neU-ZgaZcOe1s-JCdV8cU9v3dlZUJlhZzbDCMMZjwd_fuSzYOl9BOW6kgUdcOfmPfIx_eSbdaVv7DqOe0D_CaeO-c5CuKpzjI-lagYOqiiIHS114kQTV", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109281096570849241363\">andre santoso</a>"] }
        ],
        summary: "다양한 상품 구성과 저렴한 가격으로 재방문율이 높은 아울렛입니다.",
        updatedAt: "2026-08-10",
        highlights: ["다양한 상품", "저렴한 가격", "높은 재방문율"],
        tips: ["사이즈 재고 확인", "다양한 상품 탐색"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:30 ~ 오후 10:00; 화요일: 오전 8:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1337749957911794704", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EB%A6%AC%EC%A7%80%EB%84%90+%EC%84%9C%ED%94%84+%EC%95%84%EC%9A%B8%EB%A0%9B+%28OSO%29+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "발리 듀티 프리 (Dufry)": {
        photos: ["/images/bali/info/shopping/bali-duty-free-by-dufry.jpg"],
        placeId: "ChIJSz4o4gVF0i0RQtjrs-Fpx04",
        placePhotos: [
            { photoReference: "AWCwydiM1qU0kNjAt09lHBewMHhz-kZY5ReBXycQ3AQrzcA9vAOa1-W4OEUWW9Um_laEdAmVG0XzJXZP_Ck7s83UCpucxjTQzJl0_39hn4BL-iP-m3wIiea1NlVAw7hCFvG7ln8qxceE9qeQMj8ANp3uTGPDwEvYIuF7usDisNbllACiVMbHFXGLAjPRpTckU-sRZAZp0VhZHAdJNDqmCKFO-ur9O-cre4K2oPIBhcl9t6-TNr9PmS8jxI5INcfAlUJdZaZ7u7OjZsvHlw-iHW_BdGRUdG8ixMrW33Cswv0w1caen5qf2KIlLBm9E6JFhZ3_eCHqYX6T9jqGvCWe1USF4gOl7NbQxgxgVVR8RISR_t6LhpK2fkKTCmUbk6jsfbbAypL-TXkGrL_hKjCWVQiBI879oQhIKdzlB_r6OeCjLuh0g8It", width: 535, height: 301, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108904258799440916981\">Duty Free</a>"] },
            { photoReference: "AWCwydiANWl15fsLccRXPiUVfZfQMcpIrps9rIFgw6e-lipmmZw_2cVouLWQlEsUsU7rBFXRqEC4nBm5TeOvOuoByPsjWtBfk5kQ4Sk9M21Cv-wSKpB_MLCT2mIO1YFH1ZvpOHIIAb_tks5LcmlledlCAKWM9_oPzP6QiXHLY_KuWY9l-IfkpFXiK7gfHvh116LLc7bMFdev1snzF5yWv3uH6AkKxyFsNTpTSm3Hp0o6PqU_ftJ_m9c94d0YpX-zMK9Z3GXXbGlabcEy64VY7d-mCJW0ruDQ_xx2pItxINctlzbFcwVv7KUD6utjiMuj-BEIjA7ZNZdE7hI8KXr-bnUiUhoYFER-QJ9dssPWnNOZkfGHDS07Mdjmsl56hfAw2Z580psIzSj3OrqRgcOtdwELkYvKkWrzD1BBywZvHQsJt1xunQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106659921810196857025\">Arjun_Durga</a>"] },
            { photoReference: "AWCwydjyLOtybU5WkE84TDBeiS37tvHWGJlfqORyQO6pRTuhpBWvGR4i9gazHFrr5ukbN7a788oCsOP2HExhBwTNVfz40tjsOqMirTKHRPNWSb59iGzDRMNaK4gpnqvOLui1iZUpC0QDvjaNUO_kXFbZMvPi-5nlVVLU0qm4MkQubZJCFI0QOA8BKk5orCKKRSl23JiUAiM5wCrw4rvGyOVEr8mFypb9FztRB5RuxA24YnkVm8lKUX8AZwE0F907Vwi5hzm2XtDt6dgaorM_Xlp0eB700_YKUDcHe6UvUod1BcVqEZgQwZMjH2NzOvhWEmV5ante78-tQBzXlOI0aHx7Fb6XpmBj6aAnF2yNlY7vgfYvEgqvNtxN-g7tHewnwDINnHqIC5zszTqAFmmHrTQ2k-RKWEJIfAli0PmqBU3j1wXkbA", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101082635309425394088\">Ivan</a>"] },
            { photoReference: "AWCwydiqJglZzxoaeLqGZafdoKrMwI5KF1LQHXTC9wBl4zgaT0gIpABXe7ZO6SuExLEX9tg0VTBpwco3P36FDj545vr44iBvVpvy3b4jJIbm3UHdxek7Ne6fUbSeav4DwwMrlsspke0vX_jHwwy7AAU04fSLREO_R-W-cwXsGwTpNW4rvUBW5GbAuTKHX3z3mkTcdaY0GozOtOjLtBKV-iSr9i5RCD9OFqdIHj6ZP8UIvq6756YWdFP5FXq8fpXCV57vWeAMhg9KBiDdFqBkHmobkBWS_QUUofHYG3_5URk8oPbFaV4SQXfOA5aE_PWAfqYfl5PY3Vppw3rL9_iXPvyec3w6ZLRz2YMuo1-NoCOs3IMFawkefqKsHYiYMtiylXsp9m7VkoYV5hYXdLG8UxYNuL1Q6Qa7_6Ly1qSojsqJageOdUKu", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101082635309425394088\">Ivan</a>"] },
            { photoReference: "AWCwydie2FkpHwEgKdLIBkSYM4ScNrBHuF6__XA1b27nQ6CF2KmLuKsuB8vQSgRddIAC8zeZuFKbzpCyugUY-11egWznSyN5zrfI-V-u0nMWUQuzRfcIW118vJGDqhLzJaW5Jww0YYsaMat144olfreH4aK2_TYGLeQANFpe0Sq-g-fmDno_0cHT_SjhCprZPjRpt9NUqlKGOBDKLU8r__E0VV3WKyt2tDtw_Ba18hdbcyJwDSdtj8nHhcWHPpPGe5FatVQdLWE6qO2zXd44pNEqQPByxg6JuDsiYnKy2PueJ4js7Mac6zprgye9R14jzUDxY7UrSUrTDRxGC75QHXcD7dllqMJQPKPG7n7swWGiHl-3rii-3ZAN1bxuPDPtmTFrnVfLtfD7rFZtfOSkCKnYhRPsr77238FbKdqcDMbxI9pYOw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104997855567125151362\">Octo R H</a>"] }
        ],
        summary: "공항 내 위치하여 다양한 기념품과 초콜릿, 향수 등을 구매할 수 있는 면세점입니다.",
        updatedAt: "2026-08-10",
        highlights: ["공항 내 위치", "다양한 기념품", "친절한 직원"],
        tips: ["할인 혜택 확인", "기념품 구매"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://bali.shopdutyfree.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5676622273430935618", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%9C%EB%A6%AC+%EB%93%80%ED%8B%B0+%ED%94%84%EB%A6%AC+%28Dufry%29+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "DFS 발리 에어포트": {
        photos: ["/images/bali/info/shopping/dfs-bali-airport.jpg"],
        placeId: "ChIJJwi3KBhE0i0RuHSfVUjsLao",
        placePhotos: [
            { photoReference: "AWCwydipO7XJq1jQ_PTodZaNuaaFpXvky-k1HSCRHnm20NUCq0yMMRMkPfDs843-hnK5p7DC71jJW-GL_kWdYvTvjuqsPxkc352NGCDb0IV5g7Gquitwfst_58iTp-ws3kUoWl5M5yJpdvKvWhgaID7jRZmTkZX4XUd50ATnE_j7LnZ8nnmfNptPGZmX5XtMx7lcLtTNu_c10szjUjOTMcIWd979S-1_8a-QyEkg5OqUFkpuLRLPL1wXCSMYfgUQFbf0DuQwb9h3uBgSimKLiXyNY21OCDtYc6PuKGCuxlt_Ii8KrYx05HkQt3jV8a9SE_aHGUnGgdSYOtPfSa0eo8f5dg6MtQR69BQz_foFC6GMvBISW0rUP598GR_Ye1iSqzVoRKAjs5TwCl85Al_FuU_9HxCxLOJ0oyQvGC5QQl1G8po", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116804848972791559661\">謝美淇</a>"] },
            { photoReference: "AWCwydhQqIeMLakOGllDZQSYMCYuWlujGQoD5sxP4oiAkFB6X_wcETF2A_VX0KApa2_jYsAkZgAzT57xOG5cFh9o2djCFatljfcy1myVPlRVIlC56a1HPjM1HB2-MYn64LzPU8seJecZ-CxO39xIxmSQusR3SCLwEubtpbzQQi9HnWJ8Ivyhz251KkCTNucUDX-1OXTvD5y3MGWx9hKUWkT4d2GxkgWIrZbaj7nYIB_0qA75NLoLwlSWBDWy-ZTmrptgAT9YBtOfZobjW2XwfZJqQ1R0ogXNpWErqom-N-o3cmpLkqkpASdKWV-tuWXnd2l9yUIwqxGCmU542zrUpUfEAaDYCuoNvDfo2Su6-2VLkkd4FefcAwmqw7PHua4Lw2boqSI4UCq4kB439rwUYquni2MECjuD8Ieziafc2lmqfkNgV2P2", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101082635309425394088\">Ivan</a>"] },
            { photoReference: "AWCwydgkjR2hMnCmC7dmmFg2sCtUlvz5WijE28mg57CqJuj66SEs7RvCODYOLlc0ZK3O_1fG0t1RAPkbLuEbTHpxOr7GyftNY19Qn17nhhV7KQ_mQk1WDl7FVkXXS1_Old2e8nqBEfTngmK8Igo1w17TC70tlxJ344s0tiEXeun-2fTeFR4XPpCKo8wMvsoB60zTGN61w6Oxl0pG2ohfQifzIYHLDkeISa2ieyUo1GzW26_I0h3GiANa83i7LK56IN3BEHh2fU3xbOZvh8A98-x3mS2olLlvYb3RwIUu81GKPTSh3pjUyYPWQGw13JcRRIQGrlPOjvkMuNG-7PHN6u4RZvSBGKiMNypBnEtk8ltsBsVbD1ik_EwFL6Iimy2LpMq5OPZDc0eVsLN06tpUsOUsjO43DLdZyU5semg0sg_MmdEsiQ4", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101082635309425394088\">Ivan</a>"] },
            { photoReference: "AWCwydgTxjCHxnHy4n2akpy8j01b6Gm-2OgKqkUaI3FcIuZjW9dQFOTGvJw_rBfohd_M3U1Pr_FBM9EDm7moV9f3c5gv2H5KiFO1jk8YAKcFTyjJ_ig-0hHjylgeC20fWuqC_7LGuabbdUodvz1B7nVPya1udlnNwDR2qzfVVMd6vDDVi4EoFMBTKUiVuE-hwVZOnWAIH3z9ya8yuXh3oYfgycWC0DZZCXU29iu8e6lBVFSoNVe0h6EHtbkHAgBXfgiwrpyikFGwi2pZRlsn8_s_EDhjOVDuP_4_NAQIz5msKgwBHGBMr3JHD7QttnOZJeIWXzKcRc1qhIxvadQUTyuHObA9jirvdEjoA0efaNxkLK763SOIUaHDdRMrd9DaMHRnqBcb0cIxKeFU_mSxb56PQiOyfjl_sQTtSidn8k8hfRwTn_pt", width: 3908, height: 2852, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114118451392288609524\">Pako Valera</a>"] },
            { photoReference: "AWCwydiM6eMjlr9401zaDhoa4Z2e4VN9qQb5dk2gxsXKbMFhiKE4p7cJPRM0_kBofl2kra6TmLmidvEfifZev5TkDUUZuPQhfH1KH00ddYXDxbA2LRAnacKK7lw5EqKMbc6a1gqakE_3nsosQTFlCz7iPZwOoqC6MEQmIxpGLpinkDGvCv0ZpnBnb3DCkypSTwL2GIYvaL4NJ1Tok3LaqQnW387cx1PH9pnCMC9qBcd4juqTn2_7k_Zf-rZw2MqxGNmlqyQhP_FxMs4va--XDYjlTAhs8nr0pYikkIpaRtzBNr4mFMWi1NTGcqKX_iNN83s0OfQ5_PVzysj_ABgYzMSzdVdM4OeoSbKTwJgh1CpqiBT4YzMQymD_VnOdFVXiGYnBRqDVDRiehBSLGRPgeLYjRbOr_Pl8b7w-uF1NDsjQeegcFQ", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101082635309425394088\">Ivan</a>"] }
        ],
        summary: "공항 내 위치한 주요 면세점으로 이용객이 많은 곳입니다.",
        updatedAt: "2026-08-10",
        highlights: ["공항 내 위치", "주요 면세점", "쾌적한 환경"],
        tips: ["정품 확인", "쇼핑 리스트 준비"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 5:00 ~ 오전 1:00; 화요일: 오전 5:00 ~ 오전 1:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.dfs.com/en/bali/stores/dfs-bali-ngurah-rai-international-airport?utm_source=google-maps&utm_medium=organic", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12262717155818042552", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=DFS+%EB%B0%9C%EB%A6%AC+%EC%97%90%EC%96%B4%ED%8F%AC%ED%8A%B8+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 케랑장 발리": {
        photos: ["/images/bali/info/shopping/the-keranjang-bali.jpg"],
        placeId: "ChIJE3N6eqhG0i0RckSPuw726-A",
        placePhotos: [
            { photoReference: "AWCwydg4kplgCHKZuRJrunuTjTI4xRIxzW5tQlQFijqQGCcbqaGQNEHjcehGciIK8KXIixVnPzPNLXade3zFxNbGAiVEwX3bITB66pcGTgKi46zu-f4SMJ8cKf_4OK0odOr2dDBjlycVot2eXV02PDYs7OFbAtDQHj9tigWNZmQ2xE_mfB5agvDHTnwNPBFgMoE6vGuwadyh_FQGLa8ZjZifKZCk67o0_bPN8UTb_G9bgbe1fOjQ2X6tP8j1tWX_uEbUx_J9PcQP637NvrbAKVjF4JPXlm6YIC_PfIeHmmT_s6jzI4aOWucm_opb6BLI1UEhqaXUOeOkCNTsYC6GPxlVwO3eqz5S0JMQlL4jePqpfhYAY3LVhs1SyLDgP6iy4jUVtOo7qaz27Woj1lT9b4AFqZoHpmvF424fgNZH0db0R34AjQ", width: 3868, height: 2176, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116141211618962527406\">The Keranjang Bali</a>"] },
            { photoReference: "AWCwydg6fx3k2BEAn1if_vcUHoPusOfd8wXPDvVpr70up40TCwCRatiUZ1kqJk4hASH6VNgZmLQLHbAtOd4WF1MieYm7qzXiGtLxaeCTIidxtKS76WZN5ti1eJ5MfcbTC5P1rWeMuD5LZ7ii47ycgWFPWXxWqar-ESCC2y26ngXbjBO2sDFSeF-NqHk7eZ7Dv9iTDskizNqKrg49iPrjdUejCxslIRgyCOXjsN11VS9gDMmssQ3XjuAGxjaT4Thew7BibXzRTkf2nTZ6z2Fsrd5nVokSMuiZ7_jeapl38_VlwfVFbh5UOfmLrB4MEtOlayC483GjOvqH_LN7W2_-UbeZahozL6BOgJ1Mm62SPqVYMFvxUqZ2cx_wWW3hvVpDMrnStYnNEU2ImCJIPIR1ExWctOaYGrW8jYh2fVB65vWUR3eaUPqeBVjWKKKm0hD_xsOf", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110840797497128555242\">Lii</a>"] },
            { photoReference: "AWCwydg9j_5ljLQVsYJ1yk917qiL08cYqm5YClZvo0uPyJDT8AFexD4jW5XteM-El775zU3SIA1QChjSMhZiSl_RF4lghfEkXF0btLVyT7ufbTUyfYkV4OBJXVvq67nwxIh86kOnElMfUQgQYA__gtCa07IlXbpQ2umuL6QCI5QwH70ilXGZAzZPxz33qe3idfO_mIXc1vtB4SgpAWvp8rFDY75_ScJNKzS7vNETw5u0yZzLUe0RD_NXDUzmZ8wAcQZPVAdydZX_6m4yezTg0DdtNcUQXaZYrK0cyzHoVvPAwPV9em4GOI1wMMOnOm4Ra95ZA4I8DAXtKrDo53c7R5PEVY22Svsx695n0TyNQvyoTFvpeBBWFYcfN29jkrSOQtNTvHMpVdlt85VIWP0zUJhopBw-t7ru0oQq_zwQ_bdSQmmVzDeir-byuAlxU-I8pw", width: 1024, height: 820, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116141211618962527406\">The Keranjang Bali</a>"] },
            { photoReference: "AWCwydh9EqndRKdOc3p7Kl1MpFZfIrHD3lJX3xhpA0Nvry16nXKK_331YxLIP-PF3PrhzRamwEDPe60BZDaiMHk5T_PzwuTNX8nFaRcNIJvx18Mkf_nFiNHsN68FrQ4N7zaH25KSJEn2O9bZG38Jw6lWRy-SWNYmuiIAHB0phP1FeNmUW7_X9JKCvxel2VvVAcCI-sUd5QpTWrVluaR4Qv4aJYcXHt24LSXpxRWJPKo9sKspCSGI_UPSx4Ny50VS2FfPMP5K_ZdcWppg_EbaHKAoo60u9mbjAoVP1EQwsltBoZEJSN4nynlts7lWldIC209Yb13CO6cr0-hLU3Na6QBaMP-vxowun6Q6glLKETApedLhmOpY6Cn6Sn5PWy6TMZOJrpf2zalHvh63amONMQ8XTUuYD5gGMdZB6DkL1L1J5-40tGLmWR22ypj7HMFylyDj", width: 4800, height: 3169, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116141211618962527406\">The Keranjang Bali</a>"] },
            { photoReference: "AWCwydhGWegYOGjDeVnCm1sAGbAtwi_IhGEDriBSwfQEXHAAryltcsnkk20Tfp-zDJNS-2UfV82XI8AUE52DJAHjJtOWMm2ntVeS4luheMX4irrbQzBiR9M3aeI-2B3FoQy9riS5m6vpYBO0lNl0O0D6QaQYx1x-4S-COi1cwxRfWhEDS6u1TmSM42yMD20zWCop03JixevKolFEpZG899px1G1_h4ENkfERiJkCT2Cx2gp65i_oP9aY6Km8JE612T_rJeqXl3PwdRk3Hi2eP6Km0UUf9cyjkI6REJ5cwz9h4PWD7qazZGWKYgeFbLuHVu7uLFuSCyunmCHL8nqAD9dQ0CvhWBGcJ8HIZ_jelxHIJPpyW4xsL7KqmkURdXy-2VkMZYNebu7J-XouRG-QuJR4VqCDmtExqnmFscoMilhqhDc", width: 2880, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115342007938987685195\">Sunarta Suen</a>"] }
        ],
        summary: "매우 높은 평점을 보유한 발리의 대표적인 기념품 전문점입니다.",
        updatedAt: "2026-08-10",
        highlights: ["독특한 기념품", "대규모 매장", "다양한 상품"],
        tips: ["3층 매장 탐색", "기념품 쇼핑"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://thekeranjangbali.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16207318227159565426", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%BC%80%EB%9E%91%EC%9E%A5+%EB%B0%9C%EB%A6%AC+%EB%B0%9C%EB%A6%AC+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
