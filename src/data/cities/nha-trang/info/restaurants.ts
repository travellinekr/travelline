import type { RestaurantInfo } from '@/data/card-info-types';


const info: Record<string, RestaurantInfo> = {
    "락깐 레스토랑": {
        photos: ["/images/nha-trang/info/restaurants/lac-canh-restaurant-nha-trang.jpg"],
        placeId: "ChIJ11JogoVncDERLmzXrZU9-Sg",
        placePhotos: [
            { photoReference: "AWCwydiZUMboM9ayKeX4Mtkk2tNSq93uLijwyOMn4CGI6l4puYiNGOGELgCk5hfZSV4p0yWIhToufgYq5i_PwTVCHj5Tkp2aXJO5yzuu1jRUeTnYcfxtP28G7DxK_cxWVBPotUUdhW7ktbeHRDZL6bv-YjA-UN-OSqjemGHrvLZnhPzIvCs4Xmr1hvaJ9okyrcvXT2_EHjXTL38PZp8Gjm-zgGBTx-NSIsCONKiHRH1inTldtzNZZpqS2P0Bh88BPHjsPvalwqVwZ7PST0H0_0e_0UT0BTgbPEzxOnULKakCd_KazpPjZCcp3oDoPmmCQcHx0rdUdDFk2SjjxX7g5LrVfL3lF2AEB6ApWfHQI9S58JlA7ww1r0pK-DggCDmNzep_K5msOkPVxVijs_CgbBYDV5nET5UMqKs73aLFdbKGjOOgei2f", width: 700, height: 436, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109226154037174963278\">windy vu</a>"] },
            { photoReference: "AWCwydjOJuutlCTVBshoE2hwzZOWksNszErfs7odegw4yF2EMwZJzLJ0zj3Qu8gpuPPVH87-p9_omriXLA0r3fNt2CpcL_ZMS3GRZkIHM9u8dEX7Ls_l9Rd7qinVm_TFIDcGe8HcqhMYaZ_BcsvmAswHZi2zTN6cB9cgus2qetbSROhpfTVwQfseT1tkDrXPeb3_SCyq93AZFUEhrGRy8T5rd5c5xzKz0uB5oJ0SNQO3XMG1GFNLkbeBiqBa3N7soV_cMF35EMfIR8vuxtuATEOvFA0BHOjVpLx9_LF7DaSJ3zkD1kJbveTM_hMWE-pBDHPu2Il6IgxnZXXkmGmo2nbOnj-zofNv_u06GIZJRzvzqjWOAAX4YiDCNhtZEGYokBcwz6FKYGysi2ab8LhFnOVI6PX4RAzX6W3JZZb4tZZYnZHligQsVkAWlxjTXUfaxpVn", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106371095563729862498\">Tâm</a>"] },
            { photoReference: "AWCwydhFsnV68-6dhdoMn_M5SVEkp8CqYofqriQZdyGtWhHSh5T89feGFBkUE6EyyPQ-vGbghpPCWnXPLuL-5HiL8ZLlF1o7CD1rW2IhFQ3fIbL1BT53eGkjphwVCxSVYZnQh9PyZ-rvupFxpvC_ILYuWgHgKOfvbJElNsezLHjV0RSr8NS4MSFkGlSNEcZpryKbwqVbwqWQ7yz18NQF4GSKMeN0SIO9RSN-9jfk6hr2-Q1337gZGg2oSKxzRW5kImUADVEPnB_W3lEeVsanFVIzvAnV4yV1hJCMuENGgk1m-7pjZOSvYa7899u3H6FMqyw_NDRADqUGrjKf1dxPse2Zl4uRKj7SBRsA7giRr6gwJ0-I_z7nL2C391xrzI5cnkVSc894Gg3JnfASldrTs-36807QdXzfBMx8YIhTA7jodiKZbr-Cy9-hnBDgDZjeTl0m", width: 1108, height: 1287, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112748582318673432635\">gin SHIN</a>"] },
            { photoReference: "AWCwydg3V7XFt41fBQHX9ekoHKQXD5Ge5GQG7DO0jFfiK8Gx6EaF5C2u6FlGuVGLrfQRLukc-SPIEHXEXonMo7qX0FalHXbC35D3mB7KvtK0iNnNzkE_JxzSHa90m6_Xij1NyUhtC84yXn9WL1hEsobqxoZDFIPlCqqitc5JQpIIg1hms4Vpbff2--FqBZ46cTq2-8WY9kPwb5PMuil6wJnn3zHw6upaHdlohPUNQV-knzDFQfbGJU588d25s2UWszhjFUXnBMEKVBePbnbIqj2GKha_SxRu2Ndvs-hKdFBSiOHjlszrmqsg2KJJ7IF9sjz78NC86VJZIgmoUjwF181y799RdSCR2caQ9BBLpWIemFS-WgTq_DlRExsAS5T7geYK80grZ7qjw-zM3y8XmGs3jRTV-9cEeA-x0OhHsssbRNZHZ-mMXV9V7T-5cD-Z_w", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104882323432634326306\">Ngọc Anh Hoàng</a>"] },
            { photoReference: "AWCwydgrxwYRO0kqw8Qu2ilpcwD4lyWZTVhn327bbZwOcFGpiGZJOzwwSekJ1iqBKvJsciZC9MuVVf2dk3FAv_bzg5TmArn-68MIwPUjEkJXfk54YB2KkR9a64HWWrpNuBQ_AaBgyLh_ERagRuiIBLR8WL4FbbvfxVZRgIMCQzZK0Izy22tTK2M3AhF_KsbCNGFHEBXXuvI0Lqonjcu7foieJUqHpho-lpTTQgXOtW9BW9nr6MrurEdGCYDapwQs5dgVdWpkt7qO2Q41fLm0RTgkoWbs_n8c0-XFxv_r1Nr1IhnNpcn1a8pep1YCv16wo75OHvOKvVm05jN5ACEyyjB1y1veR0wneABiFDoEco7gkLanJGPTMI6rJmCxmwY1E61icwuySo3ldKwrRrkqp0ImCOwaucyi-S-QN28yO4GV1wVnUMTp1Akz1w0kosoyMJ3w", width: 1020, height: 1020, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102040895625604637606\">Nguyễn Lê Phương Anh</a>"] }
        ],
        summary: "락깐 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["숯불 소고기 구이", "평점 3.7", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "숯불 소고기 구이", items: [{ name: "대표 메뉴", price: "₫100,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:30 ~ 오후 9:00; 화요일: 오전 9:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.foody.vn/khanh-hoa/bo-nuong-lac-canh", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2952458743794068526", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BD%EA%B9%90+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "넴느엉 당반꾸엔": {
        photos: ["/images/nha-trang/info/restaurants/nem-nuong-dang-van-quyen-nha-trang.jpg"],
        placeId: "ChIJrYhLgoZncDER6fpXnhTtHH8",
        placePhotos: [
            { photoReference: "AWCwydiFsJAkjMUw7IWBImGqXk4fKFFk2rIbD5XxYTW46DlqEEeH6betN_2nA7_F7cW_mGeGbWsvu64GsFx-e3U9NcRGx-NBP9m_c5a8QDSWheOC6yiTfXVI0zEP7T8RZ-S2iiv7LQOjcTE3VQJ6gUFNrxEjoewi5nRrGSBffOOtYrbMA08lPvi4uvIxgLgBWXC8RvwkSQ6i7xaigMAbgIxUpaswy-zr9v7Abrw-8jPFW5izXacLdwWN9GhE4c8UUCMzdZMnwx1N76QcS2dNoYVZrvOtM0MbIvI9RMEUjzarrcJUgWnRIeXz5GQEM7zkbGlnMsZmQfRWO3Z2iZBngtUUs7AWZByZViJFRZ29i8jZuNYc9SH8HVmArzgC7Tai6WIOCyBQjHq-GsosiuSpRq3RDJjKIKccnNZ55uVs_KvVelMftfXLWwToy4ZGatlXddFP", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105673092441356727312\">Sunday Go</a>"] },
            { photoReference: "AWCwydhFqepqcHyzN4Co88PPYyeOKUUAtLDorafB6INGtidsWELqKojiru42CRsrtEo5Zz8NP8flzFgibVYvyppMZ4k2yUr-eMorvKUMUYg-ELVATof9Uw56Tu0QrfuH4NLiIleZWjgny52sS232c0HDm17c5Eez7Hoiu-SUvIfRYVNKmZV78jGSuHdWoefKANrcMQpvNbBaymdBqNzkuy88f83litaOanSUQRBa3ajDddQp1s3o07wTm3KfMXT5xzaOmBlR9uEYcbUczqHJkFljUX94_6fBle9exdVLpi2sgVENbsszGdo_QwmM0pgYsAOBtVdZyx5vMKAaiYVAACEunoBOnPspHOSPqIxjOBkkmiDuGUt2f5qzhYQt2u23wVYKEhkmsl6N57VySEmSuBa8wLAXtk6V6l24UJ-1cQYHjvTVyfrK", width: 1000, height: 667, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111369756473516661305\">Nem Nướng Đặng Văn Quyên</a>"] },
            { photoReference: "AWCwydjVt4sL0db2Ap_WM3O52UJZ38DFBLzhbAyEn79Rr8vr7PeB68QuvOQzrad7PvSFmVGsBEiO2mrC6iQNZJ3joZsc5mdVteHk6pkhiLNKgsVKcHqrORtfyG1cfLdC1WyaLgzhwlkjo3-YBW03JzoV6LuR2JVAZ2wJK8WtWmDtB5zOFtkdsNHL3hM_9cYu6Wl_yg8bhnOr0xu-n6uFTSvGmCmen1yDrDePGGD_5hiUrHe1t5v3q2t-SIxLYTilbIFIp3wFMZFaFVCCB1bR3dDOqct5QnROpMD-H48YCqNsdsESfT9axK_ymTVAGu0PwLhF-WKga2NVCCjH0NHflbPF1WY0Cgj2wQ7wS1Z5_GJykdIQy3Q45whOw8JNCg0UKqx2PqhsmzdV4nDKm0y_qe4FvCbqGBXXPjtjlBgeAUreDHjDiM1t4d7-msBKelK_0vcN", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105941321491019526598\">Gạo Bé</a>"] },
            { photoReference: "AWCwydhq5lQ4LDNHx5z0ThD-JMh_pm8aJ2YLrZvDw72JEJueP2lD9u-09w_9fEkzCCNWnunpcp76l8clsf8VFR2kBS5QQHNpM2ppQ8VsbtJ5xRu42Nj7tKXBUELu25_HH9YLGK0uA5idqA58JYbRyPBmCW_OIiAkAPK0gjtDFf3ER5XcYywHSef_fSeE8IqwcTpxd-uv9fU84vg0H6eAdELo85oJFIo5r6A8AONsB3iGyGfphb9XWBFypUvD7gacwFGDyIJxupZwsl-yS_tyxNm5dxkzEqmjxoNCekMwbpBZuQyNujs4RKK-rhgOYjABEdPplzyLimuotTRZeE3hbKCqlExCIEDFvpYMAQoBioRVkUKg2dwwr50NVCLMqHXwREqwTrZjl-etMwSpujsMksGmmdkkJwGMjDg329PjEHh1DOP6Otgl", width: 1500, height: 551, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111369756473516661305\">Nem Nướng Đặng Văn Quyên</a>"] },
            { photoReference: "AWCwydiA8mJz-PntNtWYALIBrCjAO45hrQSIpX5ZvB59R1MXQuBg8zmRG8E64AdBph7mgoMq2V5sVOmWQ2CQc11tOdciR_0ouJLSVMe0uzXJknZNChO3RTEndkg5F7kDOV1oSGKQ1C0WE8tdmrOTa0L847lmVfDOOrJNS7Cndm4r-hpKlb_-Qt1J-F717355lEAf6tugP9ULxfpSTUCG7AY9WHeXT4m1rYkdN8OJ9seNrwfOJZVab5-1JGlv__EHYDmMwO3-29kWya9xxbvCLJL8zoGJP3hCDCV1cY8wwikLOsPLc7YcffSqRhUJnAaxvrCksy0Bw26kVuO0UteJmsixV8wUjq5ZJlcpmBgKesaj7CfYVOJesVCMdIT5PIOWwZStVglUKNKOzPvWoLHRPe7upnXRjWoithUcnjsk61u8K4C1zZhZBdaPKqc_AJIBXw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113986753952538337961\">Sweet Zealand</a>"] }
        ],
        summary: "넴 느엉 당 반꾸엔 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["넴느엉", "평점 4.1", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "넴느엉", items: [{ name: "대표 메뉴", price: "₫50,000~200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:30 ~ 오후 8:30; 화요일: 오전 7:30 ~ 오후 8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://nemdangvanquyen.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9159456414976441065", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%84%B4%EB%8A%90%EC%97%89+%EB%8B%B9%EB%B0%98%EA%BE%B8%EC%97%94+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "넴느엉 닌호아": {
        photos: ["/images/nha-trang/info/restaurants/nem-nuong-ninh-hoa-nha-trang.jpg"],
        placeId: "ChIJp5UYjJhpcDER0BPuJZT4yes",
        placePhotos: [
            { photoReference: "AWCwydhqqxIX_Rkz1Ec5SS2KQ0u3P9c6ejEMGzxaU6uN1uzwYaJnZmd5XRxs7JoHY7prI_2S32Gfww42unpO4iMG5JyTwnb9AB5HGus0mBsKyBysCj3zZ9MZa6QsBgwWc4lyNNrEn5mfBUEyfUeWHBhP5PTeIYjVocEgQKrG-kSl1yY0Qu6PCKVvZmaqhFyOaPQ0uyxbuSLAEHTG2E58Kg5DsVxK0_NV7KPHjUk0Z-g_Ts1TWHrJwfp86izkBYEHR74QcBF1Ta3W6zlHvWohMOy11CSR_XqvqrRMYxWxiTgUSR3XHWOg9n4hUtsSvx7TZyhrWUtc3mUdEHmtUaEpglQGIcnkjmO6pUcL998XUIFoBPl_L8pAM9E88KCjbTDE5lPAVD-YKpmKUdJLhWduJgJOENCZKFEqkcDPllXW8j_kn81iNg", width: 1665, height: 1071, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110353871239890634629\">Nem Nướng Ninh Hoà - Tố Hữu</a>"] },
            { photoReference: "AWCwydj7fbPw4c9hKdLhd0QlY3rv6-bEfWVv7RjRNacvCijTDy9SrHiqJatifXGpBVg58d68Vha39lhmWYKgyOm55QOa5RqZpyXCFiKPMugp4XeIloumiOJB5u_ghPAnv-oqdNAbtY-ZKqiXKTK_Xpy40dxsakJp7aSF_t4Vj6fU2taVyXUyTAFXkr5HLxvnKt5zajkAqPw58hZRbPkRdZQ3FR_NL_M7jf2-L2j36TsjnwE_zDfBefLLB1Y-uJyAle-m1pYEIJXU3sZUJpRMEX2g_HO9c78Ax5I0G082EdQyhazAUeeb21iuC8QRvQcbxB4FXiar1XE2b9NtRp7QxNEDAEr3aFBIuMCAkdRi4ew8-lVpoa3XNDZrZtaIdvbCJM92vFrt37iS5dlQS1EmjQWqNwIBFveo3vasudS4is2qJeSWmA", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110353871239890634629\">Nem Nướng Ninh Hoà - Tố Hữu</a>"] },
            { photoReference: "AWCwydg4xFlzBnvScRtZnAaYCQGhZQVLRHPOH_gYsUdkKWpg9K85l9Xo3f7q9evafpaYphe1AGju6wY7m4EWsF393drZpZnZgLSyhIVFlXK_KYywu3snVFIYJUrCZ3oyFvdyIS2akDDlQpBo_m7QiDgsqZVy94gRvzEAijVgXGBHG3qRHrmRhiUEPvph2XakgqwfV9ftuIxLMPPhezePewz0MJWQX3IQS863Mh6dRmTLCkO1ko54YFG3eIeyiydBrMoeh8srswD7iFoM6dd-CW-voFsji8TIQXR8cfo3Dqm3hLfr79I7PaxgD4lmozRkpLxJXWmdCJXAV50nADrOHRQ4YDqsgam5KhGsABMr_p1aorcDF4hPpjtrMqt_L0HNpSzOhpzmhxf6TVBOp0qDG6mKwrwyYQyPM-klUkFnqEKzQtRC8F5eRQl1vS-4LKYFR7TH", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116205157088053100816\">Gy</a>"] },
            { photoReference: "AWCwydhMNWOsR689pmn1tg5TwcCiUnh_TO3oI--JMFhfHsgpldD3MRAkQrZpMp0R14zWv1OTlyCPHluq14A65qWBuOOXPVZt2bDAFr516adRx7Jnw_UXqhN6kD_gkH6sV9pu-Yi-rYkVVETXf53IPxe-00GBpmiKCuZF0sEGmPZeAg2NZaI7ZYcWPkpvk666D98yvtyOZd-8YFAZEY2dXtGVWYqCpdT98H8WSpwuZXpOvuEySwqjW4DukvfU4An86pf-FadDbM2Qs0Jz-Mz4Sfoag5q0_hIPk0QWiiLeQTQ_KkpjaAs6U_Mgu8UyKsF-R8ml8d14WM7jk04xv0k94DGC0kBxMAZQfmH4G5mVulA30Run37i0OTBBm5YIqYskotbUUViE6qu_TP4rTkWQVbIJW26K9SMeivINBMrnXv4rd1SnsGRryRMOLaAqdWWFZeuC", width: 3213, height: 3875, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115061347377374118464\">Culinary Slut</a>"] },
            { photoReference: "AWCwydirq3TjBJIUbCd3m02pMkhVhe4TjSSJfcTDoXqfQjfQy803ucPKoKm9ZY0Ro3_czsHTzrIWz94ZFFlldoZ9EJ2fFOZHagbOxIg8Tg2g4XYNaKqTnaosMOMY_u3m_jHdb1jFYt9N4Ue4w1yUVPtry_uILhKh0MIAmsaDEVdfguoaUx33QXGNrEGr_XOXqcqKl0h0gqal_tGZGPdFdweP_94iJXQExuTxIxTUkqqmZtIslEv6k4hjOP0tO1yqp808-3TShMqDQ7yoHqaoJAh6WNSQ-o65wcszXfVBHH87TDifnCKeH-IhcSOeMZM3B4ELc8t5ZIb-rUMp6c6E6y8I7WROfLZxdv8ARAXhSPWzTTbpEiwHaQdgK62bO3FD-buefaiTw5ln-HWzyRzcJQjzz-oWHp32u3CuiNXqxUUd4oXjcuUO0eYyl4Cm8ZSUoQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109915084362573369634\">Hieu Dang</a>"] }
        ],
        summary: "Nem chua Nha Trang Nem Chua Ninh Hoa ngon 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["넴느엉", "평점 5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "넴느엉", items: [{ name: "대표 메뉴", price: "₫50,000~200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00 ~ 오후 10:30; 화요일: 오전 6:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11447275002939089685", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%84%B4%EB%8A%90%EC%97%89+%EB%8B%8C%ED%98%B8%EC%95%84+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "분까 응우옌 로안": {
        photos: ["/images/nha-trang/info/restaurants/bun-ca-nguyen-loan-nha-trang.jpg"],
        placeId: "ChIJv8aX-rlncDERV4JzMncK9g4",
        placePhotos: [
            { photoReference: "AWCwydgkxLtslVjIUb5sXfZ5o64YgZwKsMOdXlEvQSDcgQEw_hnGSwAPOmdP-LeYeBfpQf1HJOEEe87ZUjv1L1CHqMeKJ5qMq-UIAReTse1LtgJXnu1FlCrMTR3Dlj23LGi6KShy4mxuAW9EVmUnQiNBNGS413OqgjirfB5dCkk-Kh04o4S-dCO3XoQ417Iva8nlhZIts5FIUCu3-kEjlPsEa8Ifedl54nEgZYgL3cpCr_hGq3sZM-3MOjl1veY9L1B1qk4mkn4_U8uiEY-VXE7jR-_hPsPPaZ5IASfPrkUgn_KARyCQ8GODVx3KzhVvyiocG3RKLGej1SidKRbOHuOu-pkahaUlFRW2p37YQ5AS36AZRH4d7CTWXR9-hci1weeAaf_TSjqQSz1gr6UHkUoC7nw7vDvT6VJqeCXe0WuOTaV19Bdm", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109497903233731687046\">Teddy Teddy</a>"] },
            { photoReference: "AWCwydjcHNL1s7RAG0gWT8lI6c1aPjLXASeY1DH2ff585AcpCgNB-DBnBrWKBKKybKrz97O6DY6yQ9_MdPKvbMz83qYW1NEx_1ERiRvWrrQ9Pei9atV481JbrGccWLmypArBtfWJDi4QlkTfGIcU5lfbVXKBv7MYmSAr6sPqFC3028HtHgM-pKjbjvita6h9ZRtrdxKkV0GoJ0i11cHVDGjXJW_FLvUffTsu_nCqdUt6V70A4I9G8ATETTi13M4sNgvGkMkHF_o71yNyBA_3EVGbE4YKlWtjRs3qAWOZOnLYtIXPnVkwbJRiaUcBjlERI2ujDSHpv_CKgl4Mt5zbx9R2aFDahIRBwt2EIb6z2aEo-Yv21s136olOyJJo9QJzo6TdqaaJGtKEZRWb0xsxRGslw8PcAMFyssaWqcUy5hXGWzH0IC84DC1qVEz9vEEoJpBb", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114295149821443248265\">Khắc Hảo</a>"] },
            { photoReference: "AWCwydjVZxUoAmbrv2C7RgcBOZbtfVxhWorfz_lqiPHDCi_c9YabXt0ZUtTTeMoawq5lApP60H0q5Paq95DVYbamEo0BQCVAL89MtcX7_hwPjv-OsHs8n-Yv2qoENzAtoqXK7eaT9LeiJS5PQMJpFqVtkLuG04g6inajcN9M9zuuVm6r4BLayY4sf15WLnaCEnS0E_fUjbONyZ6QFVlliMTbhgpbR0Otru_uXupS8rdCa41rpXq9NfJcbbxiPwC6NRTN6H3yHZ3vpU-UTNTf5gO3O4KpYmuxLlHQpv0jW5ZK6UZokhGN87acUAzawX_KZoVBZqn10yA1Rw4bzinxEnvSIJtj-RIs9t9uDBSEzshlFq6A3RDrW__ypD8ozp1MUMwuQ4YmQz07PAlQELhOKjXm3wzktsjoK53GJIfuoLzIec5kzFg0jaKfxyYTWvKt_fMz", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106461024924864544124\">Khánh Kim</a>"] },
            { photoReference: "AWCwydjZj_gz8cSYQwgH8YC1ImEixTjC9NtWUZVqkHX-1y-LF4PAmRDVGG95yWQs63E5Zg4a82Lvaf1ncTuy9AtczwfGGXYX9_kslnPlrZa5NS8cUgfu72aREuEuP_gBAscxRX1mtTGG94QvQ122hDWOr5026G368_bLEm7dgnMQ1IEYL1i6Jf-sMmS51fh7QzHmAzo7y9MH2d_tC5H7N4fKoiHKftYzus3vZ-zPkjhU8gZ1SnTxwpbnULu6rIWtuGkvmzD7OGthh4s8fMVRsEiR_RcgT-NuSaFBTvop0FNsWhn0fjdobURPaCy8nI6eZItAkyvkMD8Lg-eXIFnm4xA8rRUnr6FVUZv7OUeW6aHL8zMFNUZ_pgquC-8KBiulY6eNXQTh-yb9cmbJgsBN8VYXCZb1jqRxMs03up4YxEYpTzqQaUcQPmci2eg3QjuakA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105342325742360809976\">Mai Thúy</a>"] },
            { photoReference: "AWCwydgJ4xJc3uHCCXEKx-t9PnPzwdyceffgeZCDOS5XbYBjWV1zUESiW5CjwV_41gUEwuaFk_7FAEYov6fJZEtQd2ZjA0mIKg7ym4k-7P_NnngAstea0yaaWb8TRGWKnXKLi9cW-n815BDhPAmNGKA9lM3GB5D2v6ljMxHa3910YAadoMr_TcJbcrikFvp0JVt7TqCmuo5vLrcwZPLK7ExAJqlPbPRXmPL7Uit1udhxZJk3nTv2pDHPrDH3lMku5hGOONnoqEGNRxyQZDTqzyco4U4fMPTvi3lE9urs-NG2ChtgoFuOyieQ5p127OBtXV1dg_9RBGAAJuUbZnSVDDHVUyfO0429Gm3eZRx_zltfhlgY-uAlA9REOfzGkHdQ4mgUm4eIDDVONtr_pjNZqjTyVaxk_vkfkncYL1Y31fHdG13P3pKm3l2W8SNJDIFM0BFK", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102478582768744819424\">Mpcl</a>"] }
        ],
        summary: "분 까 응우옌 로안 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["생선쌀국수", "평점 4", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "생선쌀국수", items: [{ name: "대표 메뉴", price: "₫40,000~150,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 5:00 ~ 오후 10:00; 화요일: 오전 5:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1078060667865629271", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B6%84%EA%B9%8C+%EC%9D%91%EC%9A%B0%EC%98%8C+%EB%A1%9C%EC%95%88+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반깐 51": {
        photos: ["/images/nha-trang/info/restaurants/banh-can-51-nha-trang.jpg"],
        placeId: "ChIJ5yH8XHxncDERX4EjvrvyEis",
        placePhotos: [
            { photoReference: "AWCwydjTyDUlrMPmogE0U2kiJ0tQBI6V0Y7AeUEQxBcQxqKLb6_Ub5tXmetyhQeUKOAf7YZ2GEoxTUt-DeHXVy4C8d2c0AkcPAHCGnDvRNVsx6udhux-acD4xE_QJv5NJQ58WRBsroEccUJCfYIeLdNWso2v9W83fHZT6r-QsgOBV68VTBpZYYeV9bxT-M4Ws4GYdM0MunVu9UTGNFnqO8Un_-wsHGfSSNa6CJK1WqPZPBVymeuawvuDP0aomkf57DGun2RorM1vzWUh-xdkZ5eUeH7Iz9tpP17hlbKfHAq8ZI3ybglrBqyNxXRHa9Y89zG2uHTZP9zijU3GgouySotRK4TtYM862ZQcqdc3L_n7l4uOBXULNxurB80ruhd1ANeGWOe3mqpON68Doc_fOLeSWa4JX1DKYzlJQn8P7wpCDAbZA92m", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107371882629086125124\">Phuong Anh Pham Ngoc</a>"] },
            { photoReference: "AWCwydjdNIAU3WbMpPXzCiY-2AC3jfZDtXTzZlTFOFx7M5vBz2m8yyfFOcriSGXVRpvnnhO037h8vsC-VIqT30oFMthKfzpGws0WPDPNGLUghbKLrbOpJIseWNIem0Z-aCiqc6Qjq1dpEHM2axhTu2lREmK2Jlu_DcXBRGcYrFv3fr6IQLWuRL2IlC7yVAZSSz5Xzp-WEoEapy-Rca-qT191vGn82v6Qo_GKs6iguZtBkD6ZgwgwznMTVGtel1OHARv0xq9dC53P_W2Wz_Nvsfjl_Xe2wBNQkD70fE7uHAr5w0D_31T8S1JFMEYboN51RmiNrb95xIfALQxCKh1ER7NNCU9mAT6lgsEq8WQ_3q45fmN47ncdaFatDaem89EfSv9XrH9zCw9dFIa3JMuVbBiDxw3Ih9Eo-ab5DzeAGAGd8E-5PdnF", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101729007070537868291\">N.Đ.C</a>"] },
            { photoReference: "AWCwydhK1G_TdfQ6q_5LO5_f0YADtmDdT__tOmTjlsYCJ0QYMJPXP9yvruQpPxbABr78US7YCi77aBt8IQD0fv4FZyoXqg4kcdcVZASMeIc4ANt3KwlZ69V5eRuyNoHIHkEhKlPeDhEb1I1DJMhTPNXX5-nNgiwQT_KfAsw-sV8FbZlE_thcfspjDdXSmoq2VWV_T2-f1o3Vp-RPCkGtKDtcetLMOP_VyGiuyMTRdU0XJQhli9Br72aCWwupokBuyJWSIE4ntCGlo0w8VWfDF2mWy3-fERhoJHuItLhswGaqFLefuj_40PM0WTbQD0iyQ1Uw5gPdPtL6mQJcz5zeFC1DZTfVvD9wOPfk6rvlvBOUkke7elaCOeoL8GBcZHEkZrlNs3dSzEPSMhX8pt3NcspuIiTqAAWNLB_wrjLam0iBWdBkgp2UPhepG8MzTvCC7g", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113843123644299044008\">Tuấn an Nguyễn</a>"] },
            { photoReference: "AWCwydgLFaEY4smNV7aU1VaRToLpzthy0kmuEJa014h1FLlgMixPFq7uV_-DiHIeqDYeJbB_Ljlsg_AQ9bcHAZ45cRxvYXhpCX25VVnww_4vfmpKuje_ryEZ4OByNsQfAYkplJI03f3xcJBhMFMq3g3YQpuPptL0-tkp569W0zSL8MR1fwhvWfKhDY6tBkloRBxkCqAK3cwyrJ8ngfVCY4lOx5plqmMIyvyoO_42paX83L8yaH4zK16WJl4269f17HDTXnjL4CxQfVeOHn2tRYwbg8StxzPV6GvBC-HGqcoQo7xFPFTfVV0C7UWK-qtXjz80QOi8OAPET4N-GPKi6hocFddJg2JAR-BiDKWO0350tsghrhM5hqdFC8pILQz8hKoATvxX9dI07zesiJ5tFJ4mBmSu9Jx1CBUwziIHnQwc_iiolNjnXRc7vkhJVwWubGn8", width: 4031, height: 3023, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112350061045463924868\">Phuong Phan</a>"] },
            { photoReference: "AWCwydgGmni0qo_YX79r8bg1o05_jep5yMn0rYZSUZJgTxw0-Bs4RCrb889E5bbibgZlH9NmWKB3oIrTq4MqMICxIu4yQTH7X6Lj_tkte1yuJkWb6YohiXbp7V_1i-vikPimXTOxDawTJKwL745AGQIcbUgQK255WDi3UPI-ljaAgsSVjDvZrSTK4PkcnQyMnP_yrDMFeOJuGoBvhH4sER1xtaQcdhe2eZnSfplPiGEGk4pVCVsUzLEgLQCd4lIlXcLMsEvHgz0sO0O7yiXGr-naqFugfUmjivq6STaQTXx0ke_u2Eyji8qHCZEHnFZTQ5yrKhY5TQilTRJYTwPxL06MJigNB4EJu4QbbgMav5gutN06CGx0ZvtO-4hPRzwT5k7qFx7CG3PIYmKtBJ7rX8B85u0MPOa6qcdujuKaLzrnhbE6iMCUm8FHxE4d7AwJ7ZQl", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109876939017018246154\">Trần Hải</a>"] }
        ],
        summary: "반깐 51 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["반깐", "평점 3.2", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "반깐", items: [{ name: "대표 메뉴", price: "₫40,000~150,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3103809981374497119", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%EA%B9%90+51+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "반쎄오 차오 85": {
        photos: ["/images/nha-trang/info/restaurants/banh-xeo-chao-85-nha-trang.jpg"],
        placeId: "ChIJHzUXyd9ncDERw2DAcTJdwM4",
        placePhotos: [
            { photoReference: "AWCwydj1e8hR9ldGoo59EVZidW52kEL4ewUDf6goVncC3RZUlXO5Khw6lDjIiMtu5xwJb6I2c06Jy4DM9HuwvmAm9gG9cewGEJebLRtOYClnxBLxdRI15e7AyVCJwwKCkwelS6-Ug-e-foSfdCiihNi9KGMgOxQxSrksZSPQLwnqD7l-Di0fd_YqQROlNPXP85ZgHXBJFmGY_M5-3rpc2a9eTNdKIhBsz9LM6gPLaiqrXlcfyjuxQFEtVivqFjkqF8dFEO5rHltEt-UiUWHe78R7Y1CJIOPJ4gGHkGLDzsqZu0KUH3_odkK8TvQ42iJAQX5Fo8fb_EIPw05G1GlaMewHGptx3-fOBcZhyyruxmFZBSe4KfMbgZsEjlWcLCiEbTDZIA7rj05ttFEPc0FSd4frjmCeo_vQSVzE8cMwVmb_zGebCg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109357148665226735046\">JaeHyun Lee</a>"] },
            { photoReference: "AWCwydiU4vGE82sPln75v7RJXbyMklwYwprS0RqYbPHcdgZw4XKff7AY5u7o3_PNVKJq7fjU5F2PS5gqbVL6chsMFl8XcbyJuoHTFwG0dF173tfnRqW7Zb70N4XNCBjEN2T_4k2kUbGwmThGFTkaNLhphSdImCC0OPxVW1FQtDiQIcsOReqi2pwEDsotLbkwit2M4NzLkfqFGWudLqIaD1pU5esqT0rr1Ns5k8oYJrQodpU1RiwpPeZecnTmPzvHDkSrgCHqPjiJbgZfMcBivb13fKcqobviLkxONtYjTUQU5jAdiizJEdyoefcntzweRQXnh26_J6Zo4YAcMpSK1Uyp-MqkOu4gfxh2qc6fCyPHNQEHVgrq4nflWjr-0bU4Bp8tf2T9BSBfqtiWWNn-PVvYdyU8CZpsqCozun_LE5SnknsWMw", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115460658877851185883\">summer Elena</a>"] },
            { photoReference: "AWCwydjdhqe2QUqgYfBh3NS0ijx_4gTm6mVbg0SBFUkd7vOF_ZCIWEoW2OhotLLWt6US_YLUw19Sf-n3So_GTSw_ZnQhlU5a58OwQ7-xfHSjqR8kZBfBh1nau7paa8QvAdpr61XQmRpXy0aXGrMWA4lP3cHTUnLnii7G-Dow56GhhZ2jnZXWcvjmR5b_BKUvJbIT-5vPP3A6uV-jCihHVr7aHPY9mMS8jlq-i7P49oGI_q_hgiW9FXCQrY86mJ2JR6CJ5unk4XJvOi4Vg9J7_jOik8LCEmjErfH5xYXgEAzYJyKTzXSAco81HdqglD_78zFdvQllBiwipYMV-osSwFRCEWK3tOaNZpKCMMaoz4GGZZv4EyaPmCp6_aYGubItnOfAesyb6G935zjGJvOYsFhlyEEn3Q1TRuMZXZoLu9Co8K8msiZnar4g9FsEOL4OvvXx", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108344785154665024883\">신승현</a>"] },
            { photoReference: "AWCwydiM2lU_jMhhXZJPZqLLwfrvSfz6Tv08N_TC5QQCI7GDi018qiQNW7ASaj5T94sbpfc6UoL8PtXd0Y9KUbTNne9uo2HVGm3zLh4K4aWGOXzi3QaX4D_VXx6xrbdwvP-PNNRKA8la9IG9BqX1_hvAZm0H5dr-5Ug7hMikDKJbfPme_aD45cf_EA2UAuGWLOIm6I38eAT8pHt7ap0pi_xgEyIq1EvXPZUUnC-lWRLe4JpdaC3poLUu3hT9CBu1Np8MlrKeKphd1FvUyeV42Y9ciquhQct6VNF5H1fP1eokWEnP1dyQZ7dVudhlKR1-nooApR4hI1SlLamIS0va4vIBL5Z9z4azcC9lDeGeg2s8UU75ivn_LWNGz3u59xdSJ1A3zdTrDDLldn509p1fEuwpGq_md2mHdztkBKfL1p7a3C2fvlQvyqMZ3QY5hz_crDgk", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101741729312433233493\">안영선</a>"] },
            { photoReference: "AWCwydgl3l3R83WvgeG_Ib-gEsGpP0S6aKpBF0cezEDerMNrq1piEPhKjeKtT1MWqWkagrjcZV92Bt3T8V6QqwY9OgQhRJeeAE_oDfD_fh2InpfEryVJ_ADMa8e96aCIfZzuK73sGum5T8PhD9RG6e4bKtp7QrBUIRKIbdLuzDtjg1piC-fEbRQQb2R3k7hB4QNnuLa2CeuA6ySx-V5VFRouZ-3e_x2DD_WMyFopo3VS9WjRn6Pa5aOYLuhtPO-ktfVSQjbnp_nvSNlwM4Y1AgtWvxkhANCMGI0ltLyhbORH_8nMIF3_4q3jLwQ4KLtAkx8bn0YMkk3k3lDt435lXpP3r3KEFl0qHkzuA0jBIMWLslO86e1Gr-D4M7mDBSi-wzcTb94_haX0bGKwE3xqgMxarvNuJKLXtgkk3uJyC-gIuFm2a4HgVphAF1wDy9R6YQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108344785154665024883\">신승현</a>"] }
        ],
        summary: "반 쎄오 짜오 85 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["반쎄오", "평점 4.3", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "반쎄오", items: [{ name: "대표 메뉴", price: "₫50,000~200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 9:30; 화요일: 오전 10:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14898010038579781827", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B0%98%EC%8E%84%EC%98%A4+%EC%B0%A8%EC%98%A4+85+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "보네 푸옥티엔": {
        photos: ["/images/nha-trang/info/restaurants/bo-ne-phuoc-thien-nha-trang.jpg"],
        placeId: "ChIJmz0eMNldcDERYaYMUXxVEoo",
        placePhotos: [
            { photoReference: "AWCwydi1mGCgZGSIsu3w9L9ypmm_ZgteSNef3Rd9D4NGoMZbgNqU3pr5NaKpPi0mJ1EnxhiKVVeUBhmsKceTYIOThoADP6hQiHRzVlIPiADCgD1xsIB32WZzEhQRKdYKpFR7fA0OxAt83eMkEL49UH2ObEadBU3tj42fcUTzyOrWxrny1qjUHbvb4M4wBQf_HhJ0rEulEihOhNn4VOu7BMjDwYR2MNDV8JbLlX8ab8HwXffLzoo_cW7ILqMg3Fs6em4gMOxJ4uUk5yvBvbg6y7C3Pihk4EFSUKySaQD8GF2PLkCfw9dJ25nKduhpAwDkh0aN-4eof_uIWBBnPufo1b6YORnjCmkmyKaK1_317X7gLJEKTRaPBVZ9T1W5TuRfo2KioyBxxv8KBTQx4esRQL4O25o6vVr1Hc3TgdIiEP9gWkEWKk2gOK0lo-HjvKHhsA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112205207262842427512\">Minh Thuận</a>"] },
            { photoReference: "AWCwydi7xJ7LsMd66vKYbBobXa6ILtb7A8Vckv9smGkXK0QFhGqfNm2VRXbuGmfFEY5g9AMSeu1rmxkwxr2Y4E5v0IoouC4c_g30uv6jeFRsa6HrBn2RLnhOE4FrRgx4eE6eyUJ_6LuPjGQYhvNyCyhqAoHqto2The5Vsih03tMOmtjYczDqis8qIg5h9tSRR94l4IuJoC3mNknAKaiBYLW5SO1bgEOqYcvYSSqlHImlqnbJQXq-NegGZbwrIm_dm9UScQeFBW0cLZN7-Jziy-lwift1n-0vG8shR6GCkYWnNHGbzxPJnWr6Rm_yMxMvd4MGS_2Si3KaRoHN2K4lo0QzAiI0zI0CupUpogbG7OeSkYDP9t7VhV0IrrvnvsioRPnBvHHDhqUZdVjkLu7op4p4Fp_srdTD9XFZh0Wtg4eWL-RK9TjpDhF07_b1UwJiHg", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117617947275172354393\">Marina Shevchenko</a>"] },
            { photoReference: "AWCwydhdUTy6aEntdENSpM_lOi_09_dj3Up73rJ3euWxvye-zMwadC3HUlQD-bM_HYuhRdSIIwB0Cra4fvRmQJnqZDBO1J5Un9xvER6Zh35qWI9HWtiAlGN0MoDdSXOPg5dtpFzn5kK21JkwLJz5x7UwiwcIsm7euJXZOj0Zzbrv0KwCdbVLNjyoaP9jCYVnMQCcsMdh3KYopwB3lKNMMWF8oktN4to2POOjrccG05Jw-yqV9dPYW78BAmKRbgwHV8h1xefZzSLt6bcEz-SCZpjN15QPsIXEUi0gp6y9GEaI2O5fUSkUSjJNH1IwtzsngmZ8w1mOItxhOv-LIiwADjzzx7TJTslqGnMSrXagv1jzcVx06lw3VILDQlQpU0EqskFNmm1t1KMozRyyrrCJQDioGBhcDC4J1VNdCGubjVVcD78qleS7yeU-j45T-ju2IuRy", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102873738934801008402\">Ak</a>"] },
            { photoReference: "AWCwydjKwr45CcdmSCvaZ535Ob02dolaQsIu_sXxCdYoVyuExFQha6z7205yqQ6XloDFX9xezaokQiMPKWfbHZ7epbfbvWYaZ2OAULOsx_Vu3kUObUYWIT76pZKK-T9rKXaI4iICbNijD3cvcXcvuQfunPVdlgoZD59fbm4lLLzSiJ4ivaBU3W6snWyh_cZgJpvIb2EdMN5qId5JVSWhDoyFH-9OhhUoBy3c8SZauiahtxn4rD-oSeW2XUqvHWtAHTgkO05STX_SyFzJH6qQiJO043wVXZLoVcQbxGYvhIfEdGHfv-JB-129ctNxPxdBerKzl54QwA2avaMFnqBAqBRReNmocnZnX0RCJKfX6bs-356jZIO8KzB-13PzHrOSThbiaNYvbJFREoBb2c4kQj9RVN3Xjkr2I4IqLF0tyvdBcpKDw3fZPnYNKoCoSvy3jg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112205207262842427512\">Minh Thuận</a>"] },
            { photoReference: "AWCwydjqAZQDUjKCA70nxNp4OknfVNbQQjGHrHsnxkgIdYWjvj3TdqRrUurXJjhy8oTMcNzeOzrvXFePoCWUWZB-l9quLNNadCY8hH7-83WM8_EXY5PPB4XCR0X24Gx2xVwWwcUwq62OeW13Kl3xTFxPc1-DqSnnVpPFMPols2ChJHAOdGrTTSfKFHzdV73dRy4qsy7APAc_F_L0EIEiy6gmyPTmKwoRKNLwgqEtSBRTaesQrYr5E7XrVRvbb6VF4hG71I4HFTv_77SxbCTpqGo9rZ0XhDPukMb2DA4CtLXM2zZFIJ8zc9rsd-TQ6LhCIjY1LHhsdTHphwRg2lI9YeYTMLT_JtTV0xO1Q-4G8empfEadhpBCRYFsdKK9cikUY0FYoGeZDM2xsHix7RK52xGi_Jabr22qYX6_lpxJBnI0WMyuV54iQwyjZEajocxJtrc1", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107339435215681479989\">KhanhHoa Ng.</a>"] }
        ],
        summary: "Bò Né Hẻm 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["보네 철판 스테이크", "평점 5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "보네 철판 스테이크", items: [{ name: "대표 메뉴", price: "₫60,000~200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:00~10:00; 화요일: 오전 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/RicardoKakavn?mibextid=LQQJ4d", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6289557321624824544", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B3%B4%EB%84%A4+%ED%91%B8%EC%98%A5%ED%8B%B0%EC%97%94+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "옥 쑤언안": {
        photos: ["/images/nha-trang/info/restaurants/oc-xuan-anh-nha-trang.jpg"],
        placeId: "ChIJ7QjncI1ncDERxuqeLFzrcr4",
        placePhotos: [
            { photoReference: "AWCwydg_UJtPH6ihK0E_ml_85kYquRXoiCsclXgk30WKjXDWnIkoSqXS-YpcjK1kEiPYBxw-9jny-lrdVWYbjJkJoyInFxHEJI8M-zanC13E9Y3ePuC9CmCCOWIZSyw1SOwgAlAp7Dsw6D6hUmKbQWCndq32TMLt5KrPQ9KuFwa7lapRqwzf5Z-7838HZJFcl9xCzQD-P5fTII0qcexUhLOz3V7mLmzXtmgT6rFaeZYkbUM1H--9eXFotXlWrYgxqAbedoBJVYQjneup0L5ai-blCqwiDVzaKCwW3BmHs3FoMUHBC0Zda3Zp2O7snCZDOSoziEk_vYo6uIS-R9kn818DIr-stEQygaJo7kIYJjhxQdrOD5DhHO60KJgwz91C1KeqmRRd_rZfzD70qUHQY_3MvTfzh_6uCNbTlfz5jxoniU1W0BYeODN___szpLACRi9c", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112598138969036251769\">Thanh Nhan Nguyen</a>"] },
            { photoReference: "AWCwydh44CN-6pMzTvyOqZrQ_do7-B8-Yf458xlFnnbsezOzNiU9siP6rD1mvRoqeKVCalGNAdwqejoU5og4gUPkuxzXF_zBJAX9gJjn4H4567-ZTEAsDETC2UOynC3qAM0EynkhTyGS8guqp46kS7WE5YPPm6avwVMYVJdkhV46nWJafGSI3x_QrB4gT1jIdM7IzuXEcJgTgvJsOUZtfPea44hBLfTBMRbT7MmF-U2HYrb7nm2xJaxz9Tu6E9z1NTU6TbUJmmT4LzPtI9vBePO07-bmYBM5nXQkBd-lQoZKvkt5uy1ujRJLiE-oG6t-dN_0jnYFGdx7vSXZneCEuO5oOWnqyaGNDI_T83y4mTEce2yN0ZdVOzcVj_jMaZYdzY76_f1pONuHpe7otQfNkGbl_IowLIJHm-IAhAqBnGVgsdswss0p", width: 1650, height: 1650, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112205207262842427512\">Minh Thuận</a>"] },
            { photoReference: "AWCwydhY4HQrPgxADmZVGXQfXsY_zQE9lwGSJ8OA_vJ9k2WFK-R2joSkiSiIi3LNEoEjSTisuLr_l_kuvwRO-C2wHIdRK2gYsPBCV5LdsEquCPH8MfvQp75V_IzWpSQJTHNezwI2d5bXBFNdXZIqgZRPDKuJY1Sknv_GTagvwiLqcqmkQSCfEuGgmt2QZiq9ikqWzueftPKtgMP2xthlZoczIFhVvvCtkua5xYJLYY98KTfD5IepmyzgP6S1CD7YLS0A8UpHGe6yraY-uyp1YyB3yCNPRiVP-agwXRWGf6zCp0nFxaqF4C_EC-ktDXM64Xw469Tk4dYyX6Uace5td7LhJQDsGK_6rj2a4WGcm7zVKwjVhvIiNuVU5Uhggvgt5z2B6SPKKQM6BelJjsJXs0qL2s1plRVXJOTaGZIjaSOeZfEt2FGvawzXXZ6OcDZMpw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109476406351374391773\">Thanh huynh</a>"] },
            { photoReference: "AWCwydi--T3KgFwuQZJaIMK12IEXUUvkEK8t0NKmbLF3L7YaWxYP6uFXTJurYocWUyV0OBqAybQ8RosZe7VOT3C-zvQu34vvJG3xfNT_90hcaCUky0jNZdDe6eUj-CS0ItzRwJpe41bNWajeNKTqbc_z46Im6KIMzu-NeD8qFFIZ40-hO0Z90VUyWIL61XXrhBXs4L_AdIGezpEeoci1h1I8YYVs9TQV3v3tcTFXKy_AzMXTsYGyy4deNoFfcY4wU-E7B2cnrd6ZYB22ROxCF7aIWaZJzDH2j3Oqid4mnzEZ5xRLWPcMWUL79yz5kccmGrup_tDVI8WSh54MQoPxj1kCrah5rfanSbZH-xfHURIO9Wnmjn6A9PWcmzMvxq3W5nWNoRvW_G6fVNS1-O3_aoojysh3Z22FxzOT51zYq2A9LXZtfTiw8rl4CSwu44hYsw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118369655995426365023\">Huệ Mai</a>"] },
            { photoReference: "AWCwydhW1gcFvOLMln7zzeUw6IIgHN2R2J8XuwBFtOVET0px9JQ05hbVf1zE8WtHv-_-_azZFwsDsR3AbbcQtL9fM5izAHsP23kVPk21ScMaUjRoW6_SgGdaCQVABj863kVlc1dWsjnW0KGrvlggajuYt7VayqJLppJwGkFCHKAaVbtIYOLPfMZheUVACQFMeraAotSvJ-F9pAn2OhYzG4B2T1zDmcbnA-cwiFGvJXv2nDVmBmWqdng2nuPNNqPF_d-3I7JCsJ0gCAY4Byc_uSjOMU1tJ4fiMqb4ETByHw49AV4DkuXU_4AJo01OPy7-Ce2v4_D_plUn1Z91I5mCkxmWju9sX4k3wJ1ji9v7XbYl8paLqHBwfZFzxAxioMT9zBXEE022q9ncy0HpqtKZByoKA71yAO6Wy0DHh8POUpb8Arcx9xzVXt6gKfojscjyaHTS", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112598138969036251769\">Thanh Nhan Nguyen</a>"] }
        ],
        summary: "꽌 옥쑤언안 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해산물·조개 요리", "평점 3.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물·조개 요리", items: [{ name: "대표 메뉴", price: "₫100,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오전 12:00; 화요일: 오전 11:30 ~ 오전 12:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=13723289795669453510", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A5+%EC%91%A4%EC%96%B8%EC%95%88+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "하이산 탄스엉": {
        photos: ["/images/nha-trang/info/restaurants/hai-san-thanh-suong-nha-trang.jpg"],
        placeId: "ChIJS7q8xflncDERSBBJWVt1JoU",
        placePhotos: [
            { photoReference: "AWCwydiSRGAuncU5waBTe6QFHmLCvbTp4U-b7qF6ShbDSNC1RNkdHL8S3zP5uyHNsM2DO02VLeyBLvUEl2KY_R6AJsT5-DeEsi_Qwg_1FOgRKBMCoiVpxX0vD2f8eo19dbarSrAU3hoembtbMdhaOkexb8crwMXPXHDZe-TKCJXWE7Hg2WJz-8W8Gsaq92o_OmbgVpJ4mSe75W5q-ucf9lMEXdplPQYv4ZCDquNq7FB4w8E1NctJsfLefIRkYwyOxPC0NfuylIPKt43lnDCHxhTTOrSo2B5kaZzlV9npcbYOhaKziJB4uYsG23fCd16e8Fdo9MZZkAkGawzKBnCuUYbIZbVqMsO0s733uleS9yuC0aapeMF2lb3-TIeEfMy7RtM_HC0OE4CbYVWgvpgVX6O773bfny2DWKN6fK3rFIjIQEP0qHM", width: 960, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104764003507375336318\">Quán Hải Sản Thanh Sương</a>"] },
            { photoReference: "AWCwydj_v7e4QqNumirCrayc3S3IVCKgJnn7hQOvvje8TBGYNrMF3CocSLAhOeOpf2F8QDBx7OL7fJ0ofLX8zdbmWaNO4bfjfXq6PHIuz9fC60Yyn28sVwEOaNQjoxru2iwJrUaCHw6RGhsm9CQAxCVhXUtAhEGwPTGx9Zw_itRUuNRsuBtN5tjOZbGR49NmrigWuLFVKcUHMGcSem8xPDLslEw1aEu_KsfDq0cUXgIeSt_eVorpX7-ASmGGhWLt0exggoNhvIuH5wvN4XFlguWtKA3TA4hR8zROC8F2gOzSEXl2gbjRlWcyHi7oLllFq9XVuKOCkUruvlohPn_FWlrYQ2NYphvgzkZCu8zacDfQ1mS1QC3GYH_w4St-PSF_Pv-nUJCZaw06wdEPE3Jv2P32HThR5cm_UyX_ku-qWO19TQunItS9XYWnbCeyw4XFCQ", width: 1276, height: 956, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104764003507375336318\">Quán Hải Sản Thanh Sương</a>"] },
            { photoReference: "AWCwydjfYJxbl7JwLC1j4gQppJ4Nq7H6li8fKe5_WNcjunYhn085kyH7qNmVpzbIwHoHcM36YFwBanpxOi7rSs3JJDRRn_yduFYlK4e_LXRl1H7qlnV1RcnAL9j_00thCK_j2VrtF4Wl8qJg9hrILZrQBAYelWiVAmN6hL2kztvvClL8Iitjj-Y_psw8KV4hwOOYCj790c_z4NkfOgAZOLoubekO-SVoV8V7KLCfNlaUsACbxT35h_ZZp400c9Z-nqfXxsDu8fbSYNo4WpShGFgIKzGqycrDZH5IuX89ay8vP7zWMB9Sd3nSPY1qfvQhpj_dS_LhTc61I4YIfIEZ6EpDZCIujOPsH4LpQNQrup1QA-ommK_FBRoY88ucbS3_z5YA2GuGqrJajT7oTMu44Wq9T8LBbtZtjsPqvUbFvXYXdBgRWXmF", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104764003507375336318\">Quán Hải Sản Thanh Sương</a>"] },
            { photoReference: "AWCwydgiWKibc-LevqnahaTxDxXuemrNvuUnniE4eINeNnwemKwZ7jcsdHo_K3_aFFU-SG9e8TzVlJUK5ENG3BpikLX4FP3lwjxDfc8ZrPwDmK-vAxvTWhlbs-3AOh316OLKVuzdHdxCLtGORMjKHrPW6ixCCGtjQAdyBgy9Bgk3gIj9Yj4UYViSQIwqgpYuyGA4nHmIVBlELOInnBN6uY8Kxblha3-2xaghA6QjziR9lsCUXXwKiVVx45PiAKPvZHAtH9AE1Gduayryq6rFHwiCy1oRONDcU6Bi1ODjyo7VQGqqItsq2GS0szLlLwqJBaEQ2-ksgsrHJJRPADQ7zZQaaz_GRz6bG8Prv90K40HKR1qgOykdCSaN1EnMRGt4gi589HeXzBXq2SaW-ip1vaEvGNZgoKljdFxUnF4hc_K4euHhPtOuHSyCyKKp11NV1MAX", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107348379235489764184\">Huy Doan</a>"] },
            { photoReference: "AWCwydh9TEktwsr123q-DakMEpY9o9pxUo_OgeXedl__aFkkWV-c7rXFIYT0iPbbJT9lY_a5paD4iuVJwLunEOR7AltH-erUPwbALm2sFiZrlIrQA4boBacrym-Ln4p-hHPoFRmvYbNio43MIIcj3U6wAIOgOlW0z7M2Z_SKqZ4Jq62OJ4IezHyfw9OSeIGPVdV1xqRoTOzsR_oMyz1Kud3F_lwbq2ofIKxmyl1n7ph2I7pC2k8Hy5bAG_saHh1pp9dYthCBO-2gqX0p195syIYidhNKojzofBCpZhRqQaUcc6JKRckq2XK-w2ahJvJHMp2v7jyD5WjndNKWWD-6hBwDG3ualJ7BnbqsIhj27eUEgPlT0tKvkcxBy0lCSYr2kJ2hM5B8KReuKBozVR5yZj0C1kKhqAp2kmkdUZ8C6xl16G7UJIKhTuyN-4YjzeVXww", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102262734455351167960\">Khanh Dinh</a>"] }
        ],
        summary: "Hải sản Thanh Sương 2 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["로컬 해산물", "평점 4.4", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "로컬 해산물", items: [{ name: "대표 메뉴", price: "₫150,000~700,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:30; 화요일: 오전 10:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://haisanthanhsuong.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16989201618745281132", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%9D%B4%EC%82%B0+%ED%83%84%EC%8A%A4%EC%97%89+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "옌스 레스토랑": {
        photos: ["/images/nha-trang/info/restaurants/nha-hang-yen-restaurant-nha-trang.jpg"],
        placeId: "ChIJiap9jgBncDERIIwtiaTrx_Y",
        placePhotos: [
            { photoReference: "AWCwydgvVzS3dfrwqb4MQC0Ljo0Ah5zKKGN5L9GJgNYNwFeQzBJEwE4u834l0QIQ1beSZZnPeesVuqncx96Q9HA19-jn7PWeQh6Hz8RalkF4uJatdeXiM3NPRN0nRTuCwJYc8j9dgVyFmdwcqzYDt3phYIOLbZUBtKlOt6WEwMR1_kJzQSb5D5tCH5llFWBkMrtXEJ8154rVzReKnNvk_onSXBlxErEWzjEvQ5kGrr4IY7hnrcFucxRIznm6E0CzoQq-jmp-vCVdk-WmlkqPnxqg8WPvXV9h8VktnG5UjfJuBU1brQvvhs7aps_UPTirt7qcLrNPLVcqQSouswA3ZCRdpG_U-I0wMrmSu_cPCsz6DKndB5YPAdgA5U9NupsQIRHY6kHdvlBCOMJcUF2mbu6xIFmI3nHby-zFnMZ__PoctxPH9He1RxxXiK0kYYpnjg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116261900280975317863\">huynh quyên</a>"] },
            { photoReference: "AWCwydjDNlS0diJJnbT0QdgBnVpsIDkI8O8G19EvJNVBQiiQ8RZiBJyrFIGzd4xZUpORqs8NhCbzOfXRdeWjSfv2dG1aGkYebAbtnO3LcH4yzJ8yNZdQQLtPbmoSXbwVG9kz_AhiQzy95keS4CqQWNLyhDyRb29NuwjKf2azI65PRNfaeNnW7Vialxvy83lyT8zS0KW_Bnywa2Yy77_MUK3_7L881ZlZRbx4eW0uC4Xa4rTHcjn6fmVHnlZPfiv8yIGtAys10W14kWiWOYY0SZ3t2scrY4Nk7iLYNNIzxfZMMilE2oKrVjaXemy6AYSJUDATcZike-yYkHOCVsp-hNRivxGyJIJx-dCxHZFptlpC3E9zSs_DcNefKDN4VCdG1tE4OLr-h-U2KbrSIagvGIac_H9q1pqCTdSme7Hn7SsXbovCEYDpS08ONNDQp2WQAzVQ", width: 2400, height: 1799, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106987649698760622750\">Thắng Đặng</a>"] },
            { photoReference: "AWCwydjiaXAFcndxF3zCeyQ1HfZ87xpig4q-VcjxUaGDdJDXPUDiJJ7jhnOVjDXzz5acZ4Q6g1dRRcfYD0ZLhBtZp2zyU7q4iONtzZNfUkb3uSvXbv9CB3kgqkkJ-ONZ5RUPriQ036KtbvDQBT4tAXdVUdo0r8bDsX9__SYA2I5SZD5usV-SZejOzkUcT_ooFJnfLKe0I5VRFNzSUosDxbou07Aylz7n-ksjbfiBZL8S-UG5_dBeis_ASwBsizKuQ0cVsccxsfAECyfXA3OH-HoAAcXaYiafL5EeNEqQAOD79aKWIarfkx8CwONtm2VKzj5i0Dnx6ccY0NlLV9bTBE8xqYBH3D-k5SrCgL9NesxbIBzfqFqmfFOIO4xmZD2HNa5uAMsn40-mDad0aO6kw2-A6gDTl6SED-OqTvGJ-e2XJMQ6DoRyWvOnyGyvb2bNDY0j", width: 2000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106987649698760622750\">Thắng Đặng</a>"] },
            { photoReference: "AWCwydj55SqbJNOxG4S-xG9WKzqfzOr37IMvRIcAmKPyR7CJ-G8RXsTcqnleyJCbDFZMv6di9fynrCpytphxnViFJz3C0O50DM8aNlEYlwrw2T915AWqQ_K-ROIP2ELPxsD39RVqn529VTLflGn3dI0BNr-7oYj5gBYpu4r1DTO8dI3ciYK-9aCqeh_Lfy8zTF22Yb6Eish1cfjHN8AMPjWPlk2RGQyF_diHaDHfFqeCvvVI0iDX51LEe5u6DYQEH-BBB5ugxzZNmtwwnqLDuKdz9ION5GH428NJLgtqQowHEFROrsrFM6pwM72OUImeHvnrHmQptDaG_BIij0lDLXbguXNt7ZSxIJLyDv1nZ3EjpK8wH1r_zi_068D_p0cOI7pWx3qeIglriJ2XqUPXb39Y7SmqSRxRdynwcCzcmfj0fFZtaOVhadZZ_5RDknORRHjG", width: 2000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106987649698760622750\">Thắng Đặng</a>"] },
            { photoReference: "AWCwydjCSldo2Cqvd1wsUr9FV2KvT8DlC4OI1-nITAAX-MuRz_ahPmF51DfX_rZfSRtZD32zTDOSFGxfTNoWKQH7b1Nku_GvF2B_9Z7UMHNPRDvEF54G_bfeBEI7YxrlekCYnmwQN0DjihFgWyBuoMmFyoApYx4zIrcSQyn9xpG9bnPGFCVOwTCm9PcS2Je3ufaRltXLZ3ML6wrtIILihTjt8C1xakpNPNK3rS2xmcGG6_mQGwdrhnEf4nXcUaeVq9pmr0LcqgSxRlvK8ZP55wT4KUjcFaF4K4W1mszxA3ZT9inIXLACYPSC6AK6RKmN1-ljxOso-PIBzm5_ckOt7WWGNXZWb-YDbc_KHHgSJ4ybQUn_iow6QZtWk2GHKvg3E3fmMbIJdtDYAtIrSgcO5M2s-9qiwBg1FxzC-4sDAIFVDVWD8nsB_lJMI_gTSepiPw", width: 2000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106987649698760622750\">Thắng Đặng</a>"] }
        ],
        summary: "Tiệm Yến 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["베트남 가정식", "평점 5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 가정식", items: [{ name: "대표 메뉴", price: "₫100,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3831036860284618946", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%8C%EC%8A%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "랜턴스 베트남 레스토랑": {
        photos: ["/images/nha-trang/info/restaurants/lanterns-vietnamese-restaurant-nha-trang.jpg"],
        placeId: "ChIJZV7rmWRncDERH6zs3aF3H-M",
        placePhotos: [
            { photoReference: "AWCwydgbM8VlO-702MXu2mYEiK9wnnIQG_rK8a1JGLkY5DJDMGaPrBZ79_BCfdO6bwDcmPMUkgeWtO8dG09BgerfilfZIS_0Z9X3YPfPFJYaWy5_k7CFFFAdAo4BgvmVc2kfAYfzJYfnLfh-bkv9L-vN8b9_zivTVaQmOKXQA1TGQg4pEKTVN6nG8A9v6ZM0PzVcizOCn332ZYuFiUFwVIeSkjvGOjPY7FOJNfSPRBsyOUs8nGlspFsRBi1mNjJq1Rkw3ZG9dYIGB6Khp2oQ6r8pZHWW-W4sLFEyFcETfH1vSCn0M35EGosBCJImGOOMwH17uRPWB6cOcxNhOjm7SwrlnSccJHUdShnbfCGu9KZKFBGOJkNQucg_oT8tjnLoVwCDPv34O0c_a_Bs_cR4y8o7QmbQlhBzGVJM2jXL85k4E6W9bw", width: 1068, height: 712, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107677140669965502933\">úc việt</a>"] },
            { photoReference: "AWCwydi_qJy7HqX7xnQ-Gotojm2QfDy2A30XiMcfXokTXrtFRF_lxTjNUIn-l_g6koFoFppDbbNg9taf0nLz41s465UnmfiEJMEV5zmxIAReDKi2Fqs02Nd68zVbX2RQXdChTY8ir2nDNRa0Im93MIE0WphV7bIXo6o5cpjeqdfhqX8PkVmF64zDV0OiH6ezAGbq2MZqOq7tBQe63qHvC5WOBwshOOLwzSCdNDFAh0f1QOhQ0tMmqtdC2iz2zhctYfzgodwOy_3ecXO3HbEHZy6xghXPUzUxQ3XZyp1x8penmY_3t9xqw-AuSj9basuNojm6jeiRM198bI_QAUltAfT9L0MYA-Hunlc6GoufM75v9yqWNucze76muvAp-l3ika9WV_tlkw_-SotIjkRxzNoIGKJB8fL3jXNFfjT53_sRrGF3Xrjt", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106883830967463986494\">pipi pi</a>"] },
            { photoReference: "AWCwydjZH9GL03QFFvhxt-EuRLBPCBzPTQ5To0exa6crBHkSVFr6xQsRCRaLXmmS3D52d6ZewdR4QNvgDBD3TMDM55nRLQMvhBpWf6Cei88ZMRuZTY3kBgYmvLuERTPmxQM_Ap84E2zeGBdvbDD4ufWkMsp1KZ1wapEmq9aKbuCwh3GvzVNxmIYulhpDK1SnlFSX98spm-Dfip4fb0ckIXfcA2ze3Ok4rWcNY0ob6IusVAgx64lPYZ122IL7O8Q8gGvEQY29PYoFVNo9GVgWv8yq7BVcN5_gjnFT3ymNJ3elFwpNBU-Vh8hnWHh5B1RvF4t_IEkrmfxclhyaVvTQYPeEn0KIv21Fb7EST7F7MBHBnXbCfDV9U8DYEj0bQhnCYwoQGZazZ3ffcXJ5Z-oTD-oVUw-afmT3GAmHxiVZHFxmAjKwag", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109042062150204878158\">Ivan Ya</a>"] },
            { photoReference: "AWCwydiJSnsuEszJXVqyycfXwULGt0CaeWwkbm3BHFTRXlslD6sWSGxYGj_S3ZC1L0v1JfLvVySnYavnuoAzV6qXIxhj15k8dJQZAFEHFJblGAX_ca6-njlF552AIy22XlQX_WGZ1KPOwCU0ID0GsrBdBd7CE49WsJixCU5_Myc83say_fzliquPtNvR6xf1lNiHJ3b4p1X22h8FwBKCaVSQCkFHsL8u_rKM7a0OxuUMtvvw8wXcmezsj-9fLRPbUgHurSwE2YUsusHWK-wXd1n7wOvakROVtL550ITT7EWyLEXDjubxgWvUNKHoLTJS0GybcXKlUfDsLMTrofQqFXJCl56JoGEFXJT8NBGRwl40q8Y709PUCq-1wX01l8kfy2mGh2oeawVUazjgmaRo_NgvKN3bmnMAGj5mcRZC7PE-NM33rsk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111215512844706717304\">Celina</a>"] },
            { photoReference: "AWCwydialIxfUeZ72hEAd9T0OfJhZruCHRLnYlF56JFoj_5AhXQ4wCphge2Kd0jdRjyXEIKWBA9-QBZsbJvoQUVPQjxKMD7mWRGrgmClnzF8D_ttmjKw7VBULPdbvXEGAXRtgasuagJiaUBMp0nXc7v89CUbj3jO9up_EY8a_TAHMF2Gh9UdJoZKA2k8ZMwvulzgvb_TuGlUMyG_VsjfBWEy8qFzNR7PwZCC25mxcgBwVPPfcPhWpuK9REUjhNcPD7TRs0Bh2RzHsUvf5wRprHiztGVEYtV0qo4J4ZsgK6_9O3Qas9V9uHahg99o7NKfb2BMkYx-E4bsh3sgwnX5VZFkLdgRwnmbehqchHiR0KfjrQaj5_R0tbB4Cz-zKKOKVC70szW4clp2ZjNwGzVyno5Vh0I2JgVpqp3kZdxLTkJR55b22A", width: 1125, height: 900, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105734158930676927859\">Shih-Che Su</a>"] }
        ],
        summary: "Hotpot Story Vincom Trần Phú Nha Trang Restaurant 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["베트남 요리", "평점 4.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 요리", items: [{ name: "대표 메뉴", price: "₫150,000~500,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://hotpotstory.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5658495031634414498", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%9C%ED%84%B4%EC%8A%A4+%EB%B2%A0%ED%8A%B8%EB%82%A8+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "세일링 클럽 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/sailing-club-nha-trang.jpg"],
        placeId: "ChIJix8YGGVncDERjFbduc6Ffrg",
        placePhotos: [
            { photoReference: "AWCwydhZr28B3h4mcUOMMWGw5QSbRKkxg4oKEkLKHohTcV5CdKOwOFinh4Vv-UrnsNDRO0pyPJ8aSWINv5eBWxBO-Kp002EzYdAeJld4PmREk2LcQXV_RqWbqFN2AKZA-XLxvmYjpjXsKK57X-61ZKO2bJuMiUkztXiU5WuYA-bzbCrrXvwYc9bWGsFIDTjeHRsES_XjH62Q78LTuxq_G-MNGigcRcA9ga5t6glIsbw6G39lR0_fPDU6LUO4IlPI3rOgoPxrL5KOiLxY5OBGXSL9oLp_lfTnBM8A5v6CwldVSmQELsriN7Q_hRy5gdjn9DBWPL5kH7TGXMm18mooG1zhB-47J8ppSdxLhapdkl5VTLAUtLBGqumTH-5XHp156tPWWr0vRTxyRICp7eF3Emce2nUl9pDYlT0Pw9_1ebl2P3Uq1Zo", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101750965554247135369\">Sailing Club Nha Trang</a>"] },
            { photoReference: "AWCwydinkSsDyfhupCf0GAt3-3cek91QMrqcPtYTZD-YBn4-SmJiLLw-eEBJQsSKIfFGoUd2RRWe6YZmAIWre0WEWjBdzwQMZU-dhn4JuCXODmL4WFUtnlputOLAvm3fdofsCkwIkD8gdcFQaqVfwtTBhoiI-Ry9HrnsC7boAgKi5wNa6EyJ2TcE9jvj4Qhwqr-WQTNCuh5TTNhEQ1eRqqHCdRGnTrw1HkG-pWw-WeVcRsBIegx0_37hCKyWEVxoFpHbyOFlLJIb5aanBZXbJmsSmkkMeGV3gLlY1BHjw7e-5454p42Al58qP1bIgdpKw_3PaUcod1PP0zz1R0oeQyMxYcbBMcUjZocrRrZW8w-oo2FgQx3EkVUDMp4Bo0DlYIgRHcBUnb09ZQtNHiV-AkCwg-BrRY8atEFxSMdsI_onLEwnz-hl1-QugsvycmC_QQ", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102046839760491644228\">TOAN VINALIFT</a>"] },
            { photoReference: "AWCwydhwoko9zfvrDWF10Jr_9BA67Um74Qins1d1A1OQzWG_seIfX2kpa6I2o6-czu_rNLCP3bwNmhclARh3OPgrnc8crGl1N0ymh7a8guD617i8Ra9JKUlxtLtj4w6S4k-0k4d60hG9rVexJF7fpc_RiA2VY_TtG_svN5647TzBZ85ZZdT7-4QfrcD3EeaRPGOBaFQYLpJD_2x0DJC1R7-hYvjopB5ub0Fr6a2b8bIk9lGLk6XYudXCjgc321_l8VOgDj-I81QksU3xkQ2uabIPAIJaG4-491TgLV1XT38MEXSz5Md4IIAvZIeJg2GTiWmG3M_YNWcLwwMenFoIQCQ2ObQVag5Bl-f4sMzZ_ACT4rVldGRScdfG9uHa0rv7sEQ_barqC3o6QnYt-Zwnyee0dZ_ynefRpVMNThB6460A7Y4b5-Ni", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101750965554247135369\">Sailing Club Nha Trang</a>"] },
            { photoReference: "AWCwydjyCTuCTOIwRa3Z8YDAqFC4E-GtolPXUCSMfjHDYxitIe261qv0j0TNuL0iqsFINQllG-T7zHIe5FFJieN2hzV7NS1NxMm-K3G1LTb8Ar0Uiyz-E2tDyYwnUdP5Db7h8KN1sQszk5CyDs1xFGv60zn-L-VNZgC-DnFLOMIaSsNOxdHzQhJ90liFmDhRA4dYdvlebKLrNccyHVYntEbKqxCL9ZsoRjUknIOLpPGCNI9rvG6UGFrqt53wMiZHrTf51kkFJuJ6IaWne_fWU0lsSnWaaDRy2e1s_44MrkDSoOoCE3iNV7YbzyNPHqF0i1AEpuCLCvYKhzT8jTpmCv1IdeU8LK6-Im8p28XMIX-84FbJcOlD9DHxJYIvgZf8P7hM9hiT0ZJtId1j1tX34CFZp92B6oskmuO_wm5NG14MDREJ7ynCbuDQJQCtsBtEIF7R", width: 3182, height: 2485, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104115378785097471480\">Tweety Tzeng</a>"] },
            { photoReference: "AWCwydh78uw-VEbUy0GvrGg1Q-rjcNrdb8wQ6hweSatkZSEj8gutvDHnPm62Mpt5uUrsZm6bQN90ToP36CFF-pglRWbitghJOARBwObMlre_XVclV7M04BjMiuzvcbs70KP0syRAHA4htt--_g7tJ3rUUa_70mC542g-AUDYKyWt_PRQNrjCxVi8hON84wW937a-HcDE4zgM7bq03Y1K4hOdx-GRIsYf0SVpQT2O1TwYX9GVbJ4a09qi9SeP003ScVHdOLDeHKZ-VDVHcupc5349T8Ujm0bM9OtLoOJiFWVgYYujV2k9v_sk0qFK2d7zmFfU9DAi0000KMuI4zlPXuyGGlAbnqMu6KxetTKDBUKWdO0GMuQrFgRoXEbXuuRlwugRM7lxHPuGc2Wl_0m-1hsiUvKU7gb0Kbza2qchhjvcAX54nGllW24Wu9ZNC_DiLdQw", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112506605616415500933\">Dubayda</a>"] }
        ],
        summary: "Sailing Club 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해변 다이닝·칵테일", "평점 4.2", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해변 다이닝·칵테일", items: [{ name: "대표 메뉴", price: "₫200,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오전 2:00; 화요일: 오전 7:00 ~ 오전 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.sailingclubnhatrang.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13294210272972330636", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%B8%EC%9D%BC%EB%A7%81+%ED%81%B4%EB%9F%BD+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "루이지애나 브루하우스": {
        photos: ["/images/nha-trang/info/restaurants/louisiane-brewhouse-nha-trang.jpg"],
        placeId: "ChIJxcswvkZncDERQl0fDKfK6EY",
        placePhotos: [
            { photoReference: "AWCwydhF_zYJdV0MfFE2HIp80G7qr-MrllErn9R_BGi272gqYaK_CVtH9PkdDEc_Z277yGs-Lj6EnFBVwRsg4LYQW0y8FinmF0lLe8QaQY-uC3vUgWAuf2RePHVcLhV_tJAx4cOMoP1UBWWzFWf3TjpAuYjOVH5CbJpBVEjWutqNmpHMwMXrk9J5Ap5kcmMWnhqlL9h6WC761VFHsKSXeKqVZVfR5O-ukZJKxNl1fnupvCtOVRonwjcY28ssX1wA93pyEI1HS3kn75sGqfl5QkEYtR5C5CfCdNW6_ipiONZw-1etxZ-dPXxI8-R8lNAjx7vpcnUwBAzMXgdE9FtkLd02HZh-0UJInFTQ16rJPNGSf0o1WUIC-rGglXMZAciF4CE4jLTtfjiVpyWp3tjQ_UXAq9-aR_3-d5fnI0a5-xD7kJnWOLhJC2h7A4xjeO16yI8g", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116181917515646818297\">Lousiane Brewhouse Nha Trang Restaurant &amp; Craft Beer</a>"] },
            { photoReference: "AWCwydhcyXCe9kfS4Hac3kg39zIdlfzs_UMXIu6AJcNkPNa_9OdASSM7XP03c6zlWQFdsPP01SlRUb5melLBCOyHMUx3GsdeByng6_Z60t7g8kJZJf3RPrVd6Racun9e2u3oSvJfrX9XURDO02YIiIzxrN6Q4jmTfOHlqBexYjR2WJsz1Wqk06CUUI0-OL0X9aQLhGxtw22f1eWpxzNqAGWth0Yn1BjcK-xr0VphM9ISjkL1lUe5PcqT1GF3gBIFgfu53Hus8ZTkM02SXR5DUdLcBvZXxiy9QDWXlPpH19k0NXxKq6TlHaIk5tuT3jrW9M13kRd998P8dEuq5nItfyFhX2yeHwg77OdImg9aWD5ia5QsX79p9Qrf6dhIVlbOb6rwLSLNGp02WsiRLVgf9f2aRf9KPCCwvdQX1Lu_LuqIFPTt4ucS-yYITPX-zxOJotQL", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103147624298469136560\">Quan Suneo</a>"] },
            { photoReference: "AWCwydjy5zlt5cLni8nD2wUeunKCMpCmD6giMX1m-uEfJ_b0icDzcoAzewCkYzPEwxnwr38hsFU-W0B62X2WcQEfktbMERjhg6DIl1QIVmx3ZZshfa6P3XIShn-_QauTdJl4wDZeqhOkE5zW_RlYmA2dKen1L1AG2L62Gz8PDrYlVRFWlvLQgW4VH680-DjgHypyDm03-RsjNcIpscuxXOeduoHPw8hE_zwLv7HGxoMn7ftsI0qnR8lUs01yGwIbTYGxnCOaD31wyq7NJT1v1r2ljryvHw_7MqEe88tw0a4CV5dlUa6TGjl2Dv6GuEn19UbJWkM-IGCJHJ57BvD7gdhmECKXUMHXMtOrCmlvoSFpwDztccihZe5zs7HvvietdxFH2NB2jHufd2qQjEnKBlfWXc3XZIH_6g3Ai-mb96iO4-MRPv7-2ICtoUoXoM2rqaHF", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116181917515646818297\">Lousiane Brewhouse Nha Trang Restaurant &amp; Craft Beer</a>"] },
            { photoReference: "AWCwydhE7uTrpuUIwlSIxDbe3kaHP3HHEcZEiEYDPT_Po9NM02alZxvxZLCG1saJZSFePSejhsF_Da0JjiqLxi-OW5CPDEn8Re8evzcRlKT5wUColYak6ivOk6cNZRR69dyFTWhJVeEPwLE_ALAMnV5bKueRNV598YQEeY2bI0bgvh-RHcPlFYkbt3Utly94dpH4yyEooI9-vKdaESnH4dumJ69HWI8IRIMLoP1EoPRVmA44YBNPWtEU5dowi0LL0bjV1G57IoXgbX0VsB8k35u74C_OmvB7Ede8xgavih-J87dbrl_Fe5JGjrqfJpyBQLgmqRLVLUPIBjyehZx0JS63zFSE9huNi_y0PR9ISj82IDHZlLkEOOBVWD36KW0I3jU6KMiwHmhyd4UVjE-THmYdKX5ZPDGL12Q1F8Aoc6024-HtnOVHMWrVat1e9p7Phzmd", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104805042793155330887\">Ольга Большакова</a>"] },
            { photoReference: "AWCwydgXUTSVW_5YZQzZZ_sRuF1F70y4cHaQaqfSvXaqRb2zoueV399m1KLageWIJVxgQKMmTqJhv0sd9YdRdbct9KhgVx6b9OaqsEiCVxIS4bik3jZhgMHB6xcOsD5mb5JzSo_gAWhKLG6pzRQNKoeXB_0LjUPpZDuYc5pHzq37HVo_Ri3AVtyCz-2nTujvX7ZLVw-7Vx15kgI2bpiVAEYwdMa6bSe1cGBzwu6On4YJHdF4KJdTkj_6owUbuIVjpfUX0EJn8fsbpP9s8M-_G66bOshVtJe1xbEJxADqCdoWpAGvUN_AY021UXkQZiYEQf8iphx01zy1a5_FaIvTfPdoEpbIxGaFZuszYe8krpOB8_NjQvDbUpEqW0299qe8dixcoK1M-rDwuE3vaOUQCwFN1gR_zodTOEO3etqCoBy1Imc46F3pfNX-phXL2PfXdw", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114622574756518880929\">Vinh Nguyen</a>"] }
        ],
        summary: "Lousiane Brewhouse Nha Trang Restaurant & Craft Beer 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["수제맥주·비치 다이닝", "평점 4.3", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "수제맥주·비치 다이닝", items: [{ name: "대표 메뉴", price: "₫200,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 7:00 ~ 오전 1:00; 화요일: 오전 7:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://louisianebrewhouse.com.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5109556596063558978", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A3%A8%EC%9D%B4%EC%A7%80%EC%95%A0%EB%82%98+%EB%B8%8C%EB%A3%A8%ED%95%98%EC%9A%B0%EC%8A%A4+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "믹스 레스토랑": {
        photos: ["/images/nha-trang/info/restaurants/mix-restaurant-nha-trang.jpg"],
        placeId: "ChIJ5S5cM3tncDERceyRUdd5ops",
        placePhotos: [
            { photoReference: "AWCwydh2VpEi2gVHhf9UfzkwQFuJiJfVjZtwF8QMKLXRQXUHnsZh1hDrrR63T7XJB-Bt1-u-QpUf-b8OzAaZpN-iNWqTM79lsiYpOunHYTwW6SmmO_9kaFWqiLmSWQSNymQz8V0uBMvK0kXrYzcrMgP3njcKjKrY4eMa8ADQfl0CK6xfHDI97q6A9LkGg7kDSlI1Ahdi3yMX5TEZTyU6q24rZsiZcC-nJrPFL2oe5jhTMd8-HfSEABW-85C-hOXbK1n9pjRhCXbM14F575sDtb_NuCrptZpSHT8iv7jWfU0d3H5nAkWttLa-tjuaPqc8p6-bAziAJ0jxreiXJ36lFEccCIrQBT3Vd8-dv0H93VGgz_zkOB1KTp-O4-F5rUgydgMXNMxqaTRt1Q4vaq6CP_Ef4UIzc5xIb1MzAlCcM0JHTw1Bl6QE1WVYyay5S4NNYsxx", width: 960, height: 952, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115458602105520740191\">MIX Greek Restaurant</a>"] },
            { photoReference: "AWCwydhH_e7-TIYc16d9euHvqHapglql6Jb57N8ytNWB_ZURndH4h3RDsl7AQjpNA3ZFarogHbfdhvpDmtIZUlfgIZV8NZClbjt2wSuX9uSvXBhRUpp2jrd9QLoTsI4bG0FqLHJ4ySyPCW0DUwWJtgZbedCXZ5OzZxdBGGfH1WwWRLPSy9C3UT6GqMu--yZGLz2Q84wpzmXj6MSRg8_MCgyuTxAWe9IGw6TUsT5dqSniXn3bJgpMWcn_fsBea5YI5bS6_V_KIlhek1tbsSKNZ-mjXXyzcdIcOsZF07DZp4LxSbWHY0XjRJPcpYEqY3QNGtW6j2oQ8miXY8WrnGGh9cYznmwLtnns6oxRJ5_sn2Q9GVJVxsYEJtbrjD-9e0-UdMbyi6_YX6lX2LTSRl8SOkyAL-HzJ7jz__rv8eRmeOMXszwX0rs", width: 4800, height: 3122, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115458602105520740191\">MIX Greek Restaurant</a>"] },
            { photoReference: "AWCwydie-u8zHwOLWTRws__aRpxiSamvutVRac5Go_9uEMVIuYS9R5606wGL-J-rwKwq_F6ygrmzsOS4n1-qXXS9ruqbWLJ5TvvKw312HaQZZCYLo9WmQzwKfiSGwfAUnDFAJRdohw_SVY-oCxb1Am9tc7UfO6mvJZurSTNUB-pjXF6Eg6kQtag09DZ2ke9UwzYDeTSnt5XAqlRLpSj7YgO8f_IfdH-ekmmGiOkzbVvcBPOw9P2_E1KADTLM8a0X-N0dAf7kHgIeKQ4SURag_X73zPZI7DT-myIqCm3F83CUmIsIplbCyq1In7gPjimnhvolggL6pyFwATD9Yjq9I5F_sQvPZw6emK8zykh-ePrL8fzQvbOFshd_wLrNkseMp_lzuVoPi2vkvh7xFF7iTlSkjjnmgI4jS4uj326zv4wVeVXqLtBbPLu7fQq-Ijuy5E9a", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103887461479732736742\">Hung Cao Nguyen</a>"] },
            { photoReference: "AWCwydiYEoQcYn_4CbYt1DFmZi3VXgGPpl7DIp67GXz8aL4RKuXJJ7WNrZ03TGaX6yC8qrJzI6FPOm1C86Esdplo3Wyjc-jEIRvbmND2QAHNzRELq0bYYCO7PCAtc1OhtW9lIutmNc6SxbQ0YlmpDazOwEJjYxKN7LhXROX8ss02iFdSYfT8XL7EGQ-9urlqAcwQvLfUiEd56bwneISYDt92YBc9Fwz2FK8RKxQt6xzoi50-2UqGtBuLJiHQHRHdODFo4TA2uBnb4PqBJTaMKMRA3nkU5Z184eqF603SPKb9GziQTSAUjx5BX-UmL8hOXJSCtka8SLah342tnh2mlXxJOvMHZ5s0-TN6vBjR3qQve0Au9YN0iqb30gJAGzBdMBSjxrjeQrkK2yYubJzrgCf-duU9gw8rnoleVCkB7oTVL9CXwQRljpU2KCCr_SEcFaa8", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113966939782967954432\">Сергей Карякин</a>"] },
            { photoReference: "AWCwydjio0YB2J1T_EMNCOH0IMTm3ZC2MLdbYujcRbQWUcR1i8Vwyk42zFeI_B7cbH1qx26y3zeslxfGqJRvPY99Dcxf2t8nzrZ1iGyfns9UwA-68N_6xxfEmXUctmKSyRHMWZEnsWqqdU88FzMbiRfKVZ8cKvF_Ji-l1HUmlsuBx3Gj-XFkNLX1tUUD02xwdXG_RYKZ3smLEOatB5O0R6ZnQfZ3lDP-IqH-dvTsLBmpvDte4VuwXT69vtrGhmgrBhsMeLZAmirnFiotfj0JLNvEuH4PSViPzD0lujaELyZNtkRRGl5rPCnwuzcbRSe5-9KUvKjQbgvNWtUMHSlCxcgYjrZBf6zh3e07QGp4BH0ossXNBd2fCgNC8RuxdPnNlwsFPMu2kGTafpt4Q_xFzbkpTfgcPsy7ulxuJ9wSBYhwwFJEiLFFicwfxckOwX1fBHmE", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114292209633033991458\">Анастасия</a>"] }
        ],
        summary: "믹스 그리스 레스토랑 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["그릴·지중해 요리", "평점 4.6", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "그릴·지중해 요리", items: [{ name: "대표 메뉴", price: "₫200,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://3dmenustudio.com/mix-greek", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11214659987799403633", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B9%EC%8A%A4+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "피타 GR": {
        photos: ["/images/nha-trang/info/restaurants/pita-gr-restaurant-nha-trang.jpg"],
        placeId: "ChIJ21sMcABncDERT509zRnDTPw",
        placePhotos: [

        ],
        summary: "그릭 키친 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["기로스·피타", "평점 4.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "기로스·피타", items: [{ name: "대표 메뉴", price: "₫100,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17286891428455853102", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%ED%83%80+GR+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "알파카 홈스타일 카페": {
        photos: ["/images/nha-trang/info/restaurants/alpaca-homestyle-cafe-nha-trang.jpg"],
        placeId: "ChIJBQeZkHtncDERDHPjUfZwEys",
        placePhotos: [
            { photoReference: "AWCwydiUgWZuIUj1fjSBhxNiyVjHzAXTPJ3v-JP1GsrlJ0Ky141zSqHUOSHpRFYescr_9zs4YHMGUcgxXAApXEoNX9MNpqJLfNYvQwtbrLmbJI2_C1ti7bOxXXNDCu37uHTJ_vpnGpBTYPFMda4UQJEshCHP2qnnwV3twcRlgmlmFVl7yKribLAysA_haQjgIUEN5gOMB1VBWfDplbkiba1XnFJEGe6YaGAQbbxiysqQfvUEH0yiLqZVpM7aICx1UKdEoP8TqiBSgLCXGxdbEGydZQrkaxhyXUQHsnPINKcX6geejPpwnJmBlnlnsEqTegtm_V6xmo5CZAotRundzEDSvDqu4gEWrEQOCbfnZCVLsEpmAV0eLPm_B4BMotrxPu9EdksU-kdlvNjdGjFgrjfUhmFK1pUv2rAiYne49bdiHjtwCw", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107273280703786217204\">Alpaca homestyle cafe</a>"] },
            { photoReference: "AWCwydgY5tvNsWrskOT_VvMF5b56PTJ3BcJO5igBhLJ46kc3dwJ3rUk-7iaYBqVeH3LOw80tI8abyv1FtEdUJxG3vI20rKAnD7axuUuI4qy8_1tSlVPoGWvUj9e50fK4o4UCZyiBxVsUZZwlKWx65kXuOxlI9ZyB_iF6VP6N9lvG4hLE3I69ONyRzpE-GKl0WsiBZp9FYneXcqNGemsppdVU7W2AIy94Q2lJYYHgX5qZpn2mq3ZbWKDkdVPzrxG5AzBv0yo-2kxiB2dSZiv8CAEvIpMmHoLI45nLnrKVNZ2gZtIpI0yxyIzcneRjKaMdEKw2p8La9tqjf0OlFfVTJ0QMVix3Z1Qaneq0_9Yk5fjWPytCH_P-z8clACBPG-TSNtFlrRZnh-okrl1cmA_xlqOKyGAWwHZMltLUEGLIZACVKh5NPc7_", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107273280703786217204\">Alpaca homestyle cafe</a>"] },
            { photoReference: "AWCwydjYOaJrALlBaO-CadbbbaXR4Afxa3PT9_TgYucNN3CQw6xI-CfkEdGx0gdRGdEo6VcIccc-V1cPm7acBhErpPJcEJit9gSDElb3W2DY7be03v3tNQiJfER89dOi--DTHkSzww8679YmCBDOSwvW2Umm5tBaBu3ys7WNpqHsBegbuCvC6pS4CbOzgMJ1nm5cFpG-r29EjczRnANZBOqUT9iCbZ87qTVodMBLoSaYHVGMj2JVYGsXcRTHeksAB-yxMeXLE8_-VBcYoXzDhST9K1nA3-FIsKuqQqBGSRWV9E8fkOVBVlJTvU0zZ-1cfHTEKuCHf0-0OI578T0kEWm1GzmxUhR67QDNZrZjfl6EVKUT1CR2HH2XlUPMQq9HMXTBmPlK1P8fLV8xiqfHr9WYneKOBqRBUz6N72ApoYGT5HQsJBq-axvLVXGrJm_Z2QLy", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100787159285930903278\">Dana Nadyrova</a>"] },
            { photoReference: "AWCwydj12210m68GMz_fOa9GmnvPlEKcZjyxabChNAxDd2wsVkCnUDKVjP_oS0BOELW3RnsBJd_WjRoMGL4Mnl4qr43VHh3LdVBgnHWbPD2d_7cSCHtnYbiXQ4KyUXSXJSblXHFGR_cOPxJ7dP7alOoNbECdnZAMCAVKU8KEQ9qM-rCf8wlMa5wDlAh-O62EA6rsC475b0e9PxWdc4Fv8zlgx-ZskgWfTHv6oXvA_Dolj06RFBdOP2eFdzNvYDTVUpqtC7PDqJSMy1AB0msA_A15KXCer05eNcbznZO2xL8szxeBdnFeV1es00B49fd_f5jv-_OHhzPAG9Nhu5Mj0lTKRW23S4vnm1-hBgV1a5XBJQ814C5SiDGYqWGXBEn7YdBlNvOuJ4iTAbppNfD9uvjzOZzqYfosfsa5ldgX0gQT-Q_8riWpO53SMypppM7HFg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114950663972598457792\">Adem Acarca</a>"] },
            { photoReference: "AWCwydhyoAqaH_75_5zuaCdL9vQEbGWkEQkTodj2TQWJttuQ42CrjX3wU944faS9QPhYoORiTDDPZ5zeWbf2ivc5vs53wFE7_oFQleaU1M4GDEkrlXV4JLzEFXo1R3tz8tCGtdS666_FUdDxrSz5GnTkp7Rw09VHe3s57MB3JKdEhVosAMW83R1R4zWe4EXQTEAPreAYpNgzbDqkDPKKluzF25REIQx2rJ6JCpcTSi_j0MumD_Ru8LZ3_BEPWI0wfP74drAOYVEG_zjsLgeM_RKCEld7V2DEFgMv1ykpbcoNkR1Kfq2qviIhl6P_74WzcO7k5h-LWvcHMmprKPD1Zly8ZLRM5NtwJZtLz4X9LvJxi554-RPGMPrS2TVzzRkYR4Z2KdwVl6mF0VH-5Othn7QdTSdzd3SedGcD7qvVPm_ONs-G1m-dnThk-PTmmK_k5Q", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116475807765750872227\">Регина Забихуллова</a>"] }
        ],
        summary: "알파카 홈스타일 카페 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["브런치·커피", "평점 4.8", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "브런치·커피", items: [{ name: "대표 메뉴", price: "₫100,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 8:00 ~ 오후 9:30; 화요일: 오전 8:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/alpacanhatrang", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3103948771426530060", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%8C%ED%8C%8C%EC%B9%B4+%ED%99%88%EC%8A%A4%ED%83%80%EC%9D%BC+%EC%B9%B4%ED%8E%98+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "레인포레스트 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/rainforest-nha-trang.jpg"],
        placeId: "ChIJn8rIJnxncDER_mZZLE4O2es",
        placePhotos: [
            { photoReference: "AWCwydgbgRAKdnDBpgZ2GgW8kGZSPlrn7m3l5Ha4Dynb_gSiyPkh6Rz-Vl_UFuTtb9DaU3tAQc5vsTjiLn7-U4WvXOCupIkog-YzwozmSDhO8_LZft8kp4-cl1mhxSyc_sbAj7vDKZJi44dq1JJ7orSx9OAQVhkPPDBwXszryTMy9ebOXPd7YH4JUR7XVsggql1rpBnhDpkn1KMd17jtT3aeXIlxxstExJL7xtD1K4R5PXV3NDO3Tmz9TTgU2inypYK0DEdJJTlTfAnR5jXx_mFNeydS8t7jln_HdXU2DwFtqP6Ox-uMuWAxbCXjJ9O5B5bHQTwlTCmFDm7DSaiucyX_tEbFzSq_DyH-MNioyCETthbqVwi67bbtcYOewRuQtRCgPRuHZq0zYeu3aJsiKLq6nDZbXpj50yerolMmWv6bfrvqSQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108111294326322727288\">Медвежонок Обыкновенный</a>"] },
            { photoReference: "AWCwydjLrvkH86DmYwiTDcOaMaVADDGRKo4nmzgU5IKXorF59BmGBXp-DoKEWd6A2alPLVqelmIZWO1hhVBbTW1iFoALTrUOA2KCV8mFPxcDhEeccu6cfUt5GLywYChDrbEZo2J4s5yl11eO8psjasgjrWRs3xcVy6EZ-zQVyj2gkhMRjXNAdLiXPvOhnmkgVKXACFDyGj59WgbIJ_DM8smc1eIqpaM8UZu2mdb5n-Xq9Tn2K_Ee2pSSwfTh_zmMdAM4QEQPpRyGskZ_hrfDaYbH7WagpFzAUGwOfoBd0D58yCSNyF2WiZ_l80BH01KfehAk-WquAQQyAIR9AVwn8K0BzNLLGiV6_FsjrD7yrArgh-biwTQuy9sqfIIvNh-CYtZKW6YWZ09IeH2oJwmYsMNP9ISoJ0Bab2u7kk7jIImaFFh89Exk", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108111294326322727288\">Медвежонок Обыкновенный</a>"] },
            { photoReference: "AWCwydjuBwX1XVZOEWg7LWv4YZ4KQyqqkRuQWgFVubjhgUrd8N0WGNI-sNv8vUJ-ZGxekXz2BBIt0iXbibOG-SEImpT1icLOrAgfd2BrVkacwXq_ak2BW0qN_zF34ZFgrpByYRZVsaShxVixYhhL71wxjg9izDoGr88ZO4CCJ_ZPRbekvDzHNUpUZOTa0T11dHkScYpqysuXeNyqX7IBcPUjxRtYkOAnKObJd7a5ckRmY7FdCeWzYSxTk9sQBy5_vsQKVIY4L784MbFfMRrbCX9C6u4FtvjNZSMKUWRlfInCgqr4YmHpFIOemn169AtSLShKA3uwacSpCAJadlNiZdR9VP299OLGhr1Q5S8H0EjxrQ3oYb67c5WDg0ThMdA8nGMEHkZXZEixQiCIvGyJJ-l06BOmDG5bED44z3Dp8BhICp95wuc", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116957738622953031666\">Olga</a>"] }
        ],
        summary: "Рейнфорест 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["정글 콘셉트 카페", "평점 5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "정글 콘셉트 카페", items: [{ name: "대표 메뉴", price: "₫80,000~300,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16994630397773571838", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%88%EC%9D%B8%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아이스드 커피 심플리 오리지널": {
        photos: ["/images/nha-trang/info/restaurants/iced-coffee-simply-original-nha-trang.jpg"],
        placeId: "ChIJ-1F0YntncDERQJFXhQmEaf8",
        placePhotos: [
            { photoReference: "AWCwydgQMl_ksTQzwLoivlP8i6--L3mYNQR38kyX1yAXV1x53mG1hZ-kyREvEV6-UT_RQ3zWlri9byrKkbV2KAKoDrbLb44QcueEOLnvd03aY1OFZsudlWBK62_NlT6anJQ7vSUeRZJf2mP1glUZPCtQgMmonZjRxH377v9YPygxkGG1i9hqMnPcdgXmrGoyLhZDi71WqSBn2Kxnea-adJ5GE52TXIAQP4UrVwWdAA8xc9NCfnTWUDnhks3ZMqlnSAwHGG3Bz9_jwOETB6iiMb3H6Ut8HMP5izGvm0xxIm1TQtv5w2nPCgPWOMz3S8jWL3RGHqKkdHASX-gDf6ZjFzOaXH2H-CYs09qiDYdLyZlvS3_onfXJynNDJQUnVpqXJT4vAp8yljDJ5L7gfBym7mdctTnQxVluPCYygWRHqA9ITnQaPH8", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100180887197334773036\">Christopher Tape</a>"] },
            { photoReference: "AWCwydg41MtTq8NGB0c4tmPNxxKzDkYRXl39BjS19YSQkFwO15wfRIzBfveJRf3aQ7GYlX4B3s5gt3RVABc4Pvlv_fJZt1O1ZrrjY-5wpNCtQtraMZPska0FIqsfAfP7u-8hwIYY7_4bPJFNTu_ldeJl4xDHZHOerIJyjX0Fte5Yew9nUTcdP0CoAYxd4l9bU2OkVoiKqEpcuPDwJ_-sC4x5wEXp22QnVO1bTxL-g3JaMihMk8LaxC4JSBMK4nogJZglL5BngSWpGJOrhYfu7i-zerMgbvJ8yF9YEOkJHOEcRbxELw1b2I4TeKgaRozRG9nV2VM-wNtCeD_VvKMg-x7zddnkO1Rjgm0hZluQ2UuqePD8sN73UVeb2cNhTXVToEIattT19LI1P6xqgDPjEilYZbTtEliXOCBgA6rZ7WpSFoE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102286694931741629025\">Thuy Dang</a>"] },
            { photoReference: "AWCwydgzagG3PI_DtL5Ag0LOPPkKN9lflJ09Ri3fEYS2UHdikhnRQFGR27UJxy8327ck783NtBpMImfvDjpmyXe0C4OXp-bbW2eYA9VHnyNiJI1m0a1RKPuqM3NsSMBF9hQPfwpjYES-y4suCIvDqjkPwWbwu3yNrEQII2AqLoN8T2zVLPGHY61KTQwLiYbHj3tMFrU1U7VuQX-jd_NjjMAeyFeCrVx6u6P7qWLOk9-82HPnoC5k1D4cQGtjGutyxRudT08SxnFMq-vIykiYMruI0HRX_2KzRZQih3r55rkVK8mR-WwyKTRmPyeZ4l8kAhZZYTUi0H61vToXFdxIglrTrx5n9RZFRUw42JGlm_X0xVsZGjKjkxW0tiqDFurM0z_mu_H1_dOcIsIxIiCdWa22TFoJBXPosU4Q3MuzKV9P8KB3eKQ1", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101463414321914019666\">Karina Grimbs</a>"] },
            { photoReference: "AWCwydjmjE6hS5SH7am_TzRGS6MH_GY6gLX4ILdQ0wwrWk6Lpa-XvappRg-TvtX8YeoRNjGVu23AMlH7ObjuEjqMcGJaRhyaGIsF6cOgGL9C1SUl0853-gxQKQViumAs2dcEc--zyMF6l4cT1Nel6K-JEgMN-yBarlNeDE36Ylnw7MYcethimYMRbuffkxyaOqiCLgLIMY0A4eQhlL_Iq3kFs-j8l6TGozG9FuIohOAvUbXXSW38slWe1ikiM2lFt1vIqTjgfrTRm6ObFM1_TjaiUzGJ3rTG_FnEJqPm8k17UcdncdBfCImHfs_0N65Xa43y4P3vSoYvVhCrhtgpYCB_bA1NRd96PaLYN7AnT19VGLUrDFu22S3yXZbw4EojMVjOBuhJbghUyH_SfzHWIxgi41zuRY_uBbi_qIzkpko_fyRNhqr2wB-6c8tcaQ7CS6T4", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103821226016024779516\">정현선 (Angela)</a>"] },
            { photoReference: "AWCwydhBqSviJ5dX0fEWNcrTsJqWMk2DxfIt7O9gX94LHVRYKGm7o80L60eq_Qw6ASRYFXLX_BJPA0J8mtZ-cZT8-NmNgMLvoeS4a9SV7qUKVpQrm-7FFk2giN_xf-JPiqHZ7IgjAtPi3ktuv7vMZzahxC8TLPipxOsIBUP5QmIZtZBnErenaGEq19izUM34Q3tReIGnlr3hJFuN1geXmrcedzUWq3nfCt0nWmcIKV81PsSFO-ky_MoYSlJJo9QzPA7hP64UcIczfTA0TOYll0FvffoxOtUL88MyAa75J08sqv-EYXHUo7wdf6CyagajhZEVY95LPzEw7MaGgQRFNh3vzmlEJh95Ov0GifD6uuJZJte6EJuQYbdjk9Wj9dX9Y2nEDHiBKHHqWjE94IOHmXYN1LO3zN_XwPomWwSc5DdZDokr1w", width: 1920, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110812104942284303430\">Diệu Tâm Nguyễn Thị</a>"] }
        ],
        summary: "아이스드 커피 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["베트남 커피", "평점 4.3", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 커피", items: [{ name: "대표 메뉴", price: "₫50,000~200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 10:30; 화요일: 오전 6:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://icedcoffee.vn/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18404386528652923200", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EC%9D%B4%EC%8A%A4%EB%93%9C+%EC%BB%A4%ED%94%BC+%EC%8B%AC%ED%94%8C%EB%A6%AC+%EC%98%A4%EB%A6%AC%EC%A7%80%EB%84%90+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "나트랑 뷰 레스토랑": {
        photos: ["/images/nha-trang/info/restaurants/nha-trang-view-restaurant.jpg"],
        placeId: "ChIJk4ZctaZncDERZf9WlaofrIQ",
        placePhotos: [
            { photoReference: "AWCwydgjqb0VlMCabhEIIUc73kcDegSEpzQC-mKqWMceyoIoL1hndzbdd5aZ1juWSxkmulepPY_MUeZi9FRazIzEe9gVekt0QklUW5FFP2LVH8uyu1LWIZuUfXTOOvC5btKsyPrOmZDaSBqpDq2iNo5ZMI-WcFNZ3YgFam5ODUlJqjKGz-jvvikU9Aa6UwXaywlleYD2AHLaLT3iPu1X9nEEhOe5t4jCLR0lRWYy1B2hlAwddTpxnFhFtvDXzUaliCrA87X6PryvCFgeuVZYVlRfA7ldnDAZLMjm1pS2imQ54re8Ul-vZobenuUT9AmxyWhdQS1XfvXs9kP6c5oWsHc5lrTgPFznd4AHmXwj_pVpigtOiT9nOymeImK5GOjOLnYPaNeTsrDIpnjZDqpvfUUkBSN1ThxSm_5-de2KIG7FMLRrgg", width: 2560, height: 1707, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110254887743252208272\">NHA TRANG VIEW 378 COFFEE AND RESTAURANT</a>"] },
            { photoReference: "AWCwydgbHk8SQMg_bAN1TwH1JJKVF5bBe-xMJ-EXVkidAe0zoJnBAQgeo-Ql6MZQgqm8nJuKioI2wrw6OOn-wbgIVxq0g73V-Kljlc4SRsA6KnS9Vkgg5viVJ3cCFJhR8N_i5wd2TCfsBD80Ih73Lz5MWkutFIbkY_LeWNaT6B1jKhpDSVLIQ4ji1KLElKh89pztnBBtI7qZrdA71GIZvNkCaXv4u6pOBsiKzyM83JS1_i8yi3tmdy2AKJyH6mZE61Z1eeY1N4AhPWyaQOtsTFl3VDCX_xmFnOJ4Md9S_F9jTqt5KojIylMMLDQZq20D0uijMxXTRSEJK1n2K8PIHWy8C0JiAq95Chvbe38gVAkZnvOUejISBYUfEqmMruei5Rwz6SSyLNc-4gge-ss-30xGMFVTxrukOujmqO1Sbdu5rgOhJs05rH7VJ7tiba9fRD2P", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115782422439567074569\">Lovin Travel</a>"] },
            { photoReference: "AWCwydi-k8h_UkeROifnZ1qNsUSTwUjnxOsLp2dJrCIU9RV9SVcSc5uywdlLDXv-BflUBxxpTmjR3maK95AdCp2cDag5S9mZMTZbcPzrQPH6GPheL-Ubq12W6DmTnWMNTn4aznrtGqL2qy6y8G9zTQtR3UlF60xU7fKN3tCDi9n-PQflVjZrZVYet5Fg4n23sOwsyjsSKTQzZP60hiKZLvDFr6k_orgdBGPPi57vCyYX0RA9__499ouXQ3DKIakOdsEMiB122K-481cn1W0xdAaROBVa3Aua2z-zcJvZMmUwQ2VA1nsOyWqWsh-yxgreuHDKiM2j843WqS595IRyEWW5yitkFpd-F5RMRdEPB7a9rVtEvJ8VS8DYwROli2wrcsyNdiOCuPhQQwIic_1rsShD7yRyC4O2KoXdVKE6XyC3h-UXBg", width: 2560, height: 1441, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110254887743252208272\">NHA TRANG VIEW 378 COFFEE AND RESTAURANT</a>"] },
            { photoReference: "AWCwydiQaXK7Nj8H6RBosYChw-7awuvzB-0ouEvpL4qsS2fJ2-2CpXrCmNed8WVrD_V6QHuRunxZnLwSCqiUXjSE_0Pf2OJzk3qI78IwBSdHENwMUYvlvm6_DyBafjrmBjMORgQEpVSsLpaehv7D7OMM5annF4KnV7e9EZVoX4RhqzOHwfCezmwRyzxKLHWZZzpl9Dv7r9mZF9w-bReksxFaArz5xVPPAO44KJZUiySWuuFNTGJ4RxdqR4zPNxGTu3mnRJxQ6A2s4Tat_Xci-KK8B3Fnq2FfEfpaXIeqf8Y30FqKAh3ga18dhx0lPyiMFSi6lN8wO44bJIJ51o2Mau9ZBXIslrIPqiZ1zoiA85XcsrTbVcKKzxPYoPwHux92PEWxFXzac8AiVZhTOuwBPV01z4dXuzfESo28eYP-qqxnd2AV9jIaghHQ1K4mIoTzbg", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101986345233759970830\">Taras Shumilo</a>"] },
            { photoReference: "AWCwydhEke8bgs5b1eFcvql-hkzrPn_2L5WQmAGIXEGusEXrCWx_QxzbUNesuFPyYE1FgQffop70a7S-xCBXqU1IDQSOiL6XHgtdef9KLhHsjc9ws8172ZCe9w7fCtNvhF6Q0DSRLV2WPkQIaPfbz2qGxxippDwxjdQAwCgNZ2C_RYi-hLJlFRD-qotVsjVBnw3LXH4ZUjwtTONeadTcjpSjKRS0HAjKM9WkhvoIZcxbfBUmPRHZU5F8awVYtoJd4QowUhK-AsgZmrdJXSwRP1qnwgActqu3PUlovi_XPNcyCVF_zmEdNetbdvhubh5oMxzD_v4KiHb7Yd4wedW9ikj3AkRz2cCpOtCX_fMreWBMyKStKDQnBVpvZ-8tYpKP5z3F7KYeL51z6eNyTfMVs_npXH5NhGoFNAdak4FpHKZKxvV_vE7yf7zBJfUqQSavt2QU", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109842017264328447557\">Treesa</a>"] }
        ],
        summary: "Market Café at Hyatt Regency Nha Trang 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해변 전망 식사", "평점 5", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해변 전망 식사", items: [{ name: "대표 메뉴", price: "₫200,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30 ~ 오후 10:30; 화요일: 오전 6:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18180513313375050742", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%ED%8A%B8%EB%9E%91+%EB%B7%B0+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "코스타 씨푸드": {
        photos: ["/images/nha-trang/info/restaurants/costa-seafood-nha-trang.jpg"],
        placeId: "ChIJlaXv8XhncDERClMvFw0zr4U",
        placePhotos: [
            { photoReference: "AWCwydjtrDNt-ktGR2lV0gS06JwGp7PzN-H7-qY1z1PFsLQl_dG90WlzRMHGV_j5cKykwxge4v16Ng9CJI7QrHmhWyTXSvMIED1P8w-Xu2OEa7suwQib9FgdGuqWwreNBP8Pvv0RI2v-JarMqFwOE0WB4FajQd3EncjJJVhx8m_Hhc3jT4rvBehUScceIqymMxxWb8GEIgaG1D8_khDab1I4YjKYg-pQbtaA7mgcYmemhth7dpNHvA5koDb2u3a4NvkaCDcPXZ1j9hZeAO3ImViY_qGL6bQemuwTSscWTQi6T9-nkNaO04rtJ6BpMg2c97MQhxP5vPH-6D3bupaOrN0Bo9nM0zfLpuI5evO464zEz7eYsHmGoG8OPuum43Bj1eIk3pxESHnN5W2qTfCN16R701_b37dYgerHwWru_1z8hleCvw", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106405048925484454886\">Costa Seafood Nha Trang</a>"] },
            { photoReference: "AWCwydhpwpm0wa42naa9a9rx4ttAGrwsBPZgRITnZlCdQ98xIijS6QRxQjjBy7OhWerLpWgqvkAnOqot3L5RONc94U7NUTabzdDVRFB-5Jm5wM-d-wsEpsHG_-Y4PxvEvBS_yrQaQ7iNZndXoaCjN63wPE048eQ_jf3xPnkvQxPBpVL_y9thvkAV8PxAlk1x_2P-72PADEwaTUVF_UY4Wj6V6v5jNt8lFAxIYl851TzgnLPJjg2rKh8xB0TPlyAUjon5FfUSSQdD9E7Uijoum3dcb_Jog4jxti5E2ISGOX_s8KKi8Q0T5ucC13w89FJqtLqI6VX1eIztBYWzjoaFry4tF1AKHMGb9tQwk_IojY7kQGEISKYCwUceGn2GskHiTracDARZr29lKrVFpCBwNRY8UBtdwZkaQvwRj6h5Z_TC8oUQtrmU", width: 800, height: 533, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106405048925484454886\">Costa Seafood Nha Trang</a>"] },
            { photoReference: "AWCwydhVcKnRKjcskHZ6Tz0b6dRqQwtBLeXNaTxo5X68WWD7RGPToDyox0KGX2egLEDeAevRi3Recw7B24LllbACVdGLG1Yp0FSfGQ_Ir9hJ_NrsZTVh_4vYispuafyhbaXwnqbQMptYiH48Zk4dG1IBRhw6ZMIr28A1yMP8hr-Im0pIH9vgn32AfYZALGuxYqRKgg2Nw39H2_fQmb_pnmSKBn4WK6MFoofAnC3Hsy5K_ObZI6KLfI8XDHDAR3U9mTAddsuCQmlwoO0B-EHscQH5ffwr0WMv298-ClAuU0FYq9IC5opdBJCp957RXiw4akOJuu8xwAwUge5jtUjXPUvDcKKKu6NaVudq3xtq1EB7SfKiJ_diHFmuE2LgD6-LjgympAgW5R_Hvtl496oesVG3yVXH_KxlhhwR7gHbFQR1euDZimwyiYaIcvh3cpF4Wg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116090667150703783918\">Hung Nguyen</a>"] },
            { photoReference: "AWCwydjStb_Gi0WyaHCxbhnAE9bf_U_fd-WzSQMuwaUHRPq4iMNp72huBSdZb4rIKxkUlplvYbgB3B4hqSX1gV0RX370MPgNZiJ8OkfZOj2U4UFAG6FjDa2sZ-c3P15hIZfWq-cYT2_1DKcx4wIjdYywOFStoSqmTYl2CVtLuJtDprBewC_CcPUOeZy3XZNOx7mryQea0IZmDH7dD0PhDVv4fT7WCArzxt-unpUmAhxBm6qk6EKedBE37XELppkoiKlIvXbwDVTCeFObUb8H5ZbGj1gJZcKi41Y4nke8t20h7Lz4IYgUyoDXX6EMh4wuTVkmJhcPO5KmKSfX-gL44UOMRPYDkED6jAi9Whb9VF-nktglEiVTvA5DFS1TMubjFRrxeYqge6jpoQc0jvz0_AoMC774kA5D_iQTak4w7SYkH4no7vGJ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107037672211774732638\">Woocheol Choi</a>"] },
            { photoReference: "AWCwydjrEYmRg7nENMZM0IWx6HdyVrLfhv6fkeLoIF7VK2yqlsrCl7LugPXSDg38dxBU3IF_5-x8f4LrjfU-K1s6IbjTQieYtgYIzlz1HqeDljrw8CibOqwhLtG0qj4W8sv8R5p7ZvfcMwI1ETfn2IyXUgFiXVq4nfP6IcCBmOkIDEjqbAUkSVS-yFDbAAzkdWLFuN06edoj1A3WfqCjDukyHLvXggef5rMqE1W8TXEIt2SxS1B6Pd3FfirsgRdHds1tuNw1g-czjTGJGeYol1D27NOmSxoG4AfJiuNt90FF0MLWNnQvGUxUtL1py_MHf8B85Cda-YbtA0nohTZxrPlytdQEIyZoDltcKGZ6cd7kn7tEJQx61-evcm5LxzaPzP77oPad-sH3FxD5hRA6M5vghFp0OlBXsmLyjkLvGFYTztGeT0etZNBS7F12VJ_h9jvT", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107926473365151823007\">Thanh Vũ Hoài</a>"] }
        ],
        summary: "코스타 씨푸드 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["프리미엄 해산물", "평점 4.1", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "프리미엄 해산물", items: [{ name: "대표 메뉴", price: "₫300,000~1,000,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30~10:00, 오전 11:00 ~ 오후 2:00, 오후 5:00~10:00; 화요일: 오전 6:30~10:00, 오전 11:00 ~ 오후 2:00, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9632974259285349130", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%94%EC%8A%A4%ED%83%80+%EC%94%A8%ED%91%B8%EB%93%9C+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스카이라이트 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/skylight-nha-trang.jpg"],
        placeId: "ChIJXeYWDXlncDERdz6NupXSzTo",
        placePhotos: [
            { photoReference: "AWCwydh4XLiaiywGmqOa0DO8ALQFgkp9fCus-Rc_PhpOuckrgdpgCSQq3BE9X0YCSmCd_mNsuIxWinENkazTXI-C59UsgLH039mFkVYRc_6MPPPSFWgBf_Lw2VgFJYmai79NgK2lsg56Fv-nxi9jMxzzB09mUMuFAulx4yLaBbCHOjvHikjFXuXm4N5B6P9BTQBrq05-vI86Xmc9CSUVQtJyHyEO5s6npHpptHGhYRFjcWhwo0Dozdi8kwc7XI__5UImZ0DrY8m4JbZWv6j2dGQmzrndx-HSEF8O7uOoShghgaCTxMbHjVEiVbrmf0VoLdGPaEVXLEAz5qaaK8Lq_X3kDRLoABI2lj0xpUXUKK_WdrkYmYzFoRpuhhIwh03jNCwxL-sv8RUz4FNac02CMeKwg-7ImupSW_Xs6Q_P6i825ZY", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107895978546277853930\">Skylight &amp; Lá Kitchen Nha Trang</a>"] },
            { photoReference: "AWCwydhrVGxxD3MMWFP-Ri_dNPe7YmIOKQ-Lr1LE8dpLLXIzRxMZzbC6aDUdcxQliOXNmn5QemUvhXtFw6kqbTo4XqugnVq8FIx12EcpiZgXqmUTfOFN60mIkm-aP2ctW49Dpk8E9IFqAMKHmuFOl6h-kL4LQ_kPzRVS7QBHP0swIX6Xps-IT8AFhv8BYDOiNPKCY6oOSR3woAHO_NwSUQrDNCDJET31Mc2XYWtA8vDwIZM6_yxLGLdQw0L4LAUSwgK7WekgBzvkhx3HXBfltj_lxeQCdvxPY-xjy96Gp2jxzLcn1NNP_hH-IV-zquv-jPfLMkkvJ48Z-ohD6lhNb_Q9Vnhy1avCjI0bIBs871ayoO6I21tE-SicAov3yfEgac22_JMswicwfA6ciyd2ZC9ajtFoRhmKdkQq1WMkKT1EADWsObU", width: 2449, height: 1632, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107895978546277853930\">Skylight &amp; Lá Kitchen Nha Trang</a>"] },
            { photoReference: "AWCwydj1QAj346t9ASMHvBwFkjHaQv9TFiVppoef_HaU_kpa9DXyJ8JMEBU3-kvjPWJvi2x_G8vESETnmyIk0vs-FEuuvKTUETzCFZs6n6RUBVcOPNRM3ZX4HlSZq4Uc37uKp6hzQy7TCIRFkzxd1B0yJHajtrap2I--tw6zTDDpVTfvJlo5uVZHQEd9gOIX6qf9rSFNSF98OzWAcVIIdiA-VrsLf4UBzJM-zl-PA_y5yjt2reTrWcr0cKjLMhwpUQ2QaWeaaPsqg3Eh0-22IMlBIIRveOP_hM__RQIuCLSTJdvgR8yG5bPHq0Exh2kjS8ImUbhOxYu_4T02KiLzHcfFppLkdrkmW91jyDevu9zeIS5e1SExsOW6oOby17wPjHxXTcyxk_M81NvCdoHP4lKbgTCgo7IgtjWRMEe4tKSiJOv9Fhxq89XSp3HNH6bSbGB7", width: 4032, height: 3024, attributions: ["Photos are copyrighted by their owners"] },
            { photoReference: "AWCwydhu_u4JDtJxC7duWSH9iyYaf0zASeMsDRYH5rxNjbI-An_dnTryvnVtioA0GbP0kjgqxh1-1xisID5K-Ghjw7J6XieTZgxpsDXf7WB8EdNa9UfvzWGS76IkamokLbd_Y1jwnJm1jBFAEJ8lLgvtcOnXyXaPoXbLyUdULV4e6tfaZGQqcTU4kQuR0TCNHCV1sEQGCBILjBM89GF2tO-UcEqq6XIR7j9_xZtVTfmFXLaN77oTbJ5K5-2yYtxgB05NuEbELOeSHv3RiyW8ZDsKUP46KNt6Pks9gy4bl4G9lDMeceqIvPaKJyAQ1_-qwYQgSpEqVEzfo0ZEBF8U_6Vs7HZDW3bjCzq681LioZLo1liPVs_ohQn6fdlz-5qkRf6nY5AFyRUrGDnz4anYw9lE1nWkSS99qTilBJdC5Yw4ezhlnsUfOxlkNSjQLueW9fBp", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107895978546277853930\">Skylight &amp; Lá Kitchen Nha Trang</a>"] },
            { photoReference: "AWCwydiuxk9xVzOXKYLnKiI_Bvw616qTPyIaZVphQpVgo3UxEw2d1sdmZi4NatuAf4JwR43cZ0upkv9UpWuYn8K15WUGjEhr3ZHWNEGux2iUSDeMdDyg1Chort1vHEl6LSxJ3gehiwkCkNjdbPmKjC8C6xC0hAi2ldojgpr6FX9x0kpkcsCkcGAlZMnXwQHOJwk3AmFJP8WdU1u72fDcZTtmd6tW9ffNhhr52atQls-xHOroUdFlt0IjMFk1wVgog62tWoTvIJqDswSH5v9XJbux230xPgU1lAF6JvlDBlspRv8sWIN94Sa8sHM7021KstHHP-AgYTPnY330Vr5bIhjrXU4hrNzBsTKNbtK9DH3p47GrYgtgqDhjAFelNRV-wku01di1KApDWjcjQAuN6dvdSi7wVbGzbPS_79YXs0raK8-ZtAduLzSjyhiNX4g_SlSi", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100110119152760093099\">GlobalTags</a>"] }
        ],
        summary: "스카이라이트 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["루프톱 바·전망", "평점 4.6", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "루프톱 바·전망", items: [{ name: "대표 메뉴", price: "₫200,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 휴무일; 화요일: 오후 5:00 ~ 오전 12:45",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://skylightnhatrang.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4237274364947283575", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%B9%B4%EC%9D%B4%EB%9D%BC%EC%9D%B4%ED%8A%B8+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "응온 갤러리 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/nha-hang-ngon-gallery-nha-trang.jpg"],
        placeId: "ChIJyQC23LBncDERBkzLFEbVXlM",
        placePhotos: [
            { photoReference: "AWCwydg9mhsoh7N8BTGj4CmjAFEZQ6EnNLWThpPpzFoFw2NOZIHveCNz101UsmatbZ4-dnSy4JNGjZvnb4pFK5JuVinVoaBb9nZat9d9txiXMXzWA2M9fOjp3qD10NTpyUT9otCupOyO0YF4GvwQgMK6J4sYTf_Pf9r6sbOdD7yqrByC_Fd_HiN5ywJgRqqYapUqwnJUbtfd1YMro71fbELkKqnKaNT4-3aFsfdN1ndmH6BsfgxrBIODKTfEhI5PA-1091d1vnrLRtBbPkSQWquWT-Xvf8Qs2jQSvndupeYFVmK6hKhgF2_sunPdhyBA3ykhTgzKFmW51RaJGyipRmibqIk5XAV3t02NeiHNMnpOpzJSFeTHX_eARpf52gTeIovOqT_IUActP8PxgS6zPY8P1gfHR86sUplozpj1z1DHK3eWjS1akRoXYocElpLtbaGW", width: 1920, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105212592318547074878\">Ngon Gallery</a>"] },
            { photoReference: "AWCwydhPw2PSV4wgbL-39gde_v0-TeBp7buXtozXBtgbtGXQ9n3br9mwG5AX7GiQO8y2vm9vB4vWS_BR0-u9hLH_0men5AJXmKGfuuNN_Ndu8j53cnKoENFPCozVnw2kKJenqz8K-oxZAIqdaGTTaiX4mE0ZnIQ2mQy4artZcGbgEVRYaEkhslTp0RwD-k8gd7fk-j56mHy9uXcktg8n6a7vZwxdZIpSehWQ4UNcXehwsKQIAbtKGhDkqVTXZQbTr-jmnHP1Hhbi34j-awtJpZNRj58jV4uXFtvr9qlvAVKbBVylkFpxUibovA5UZB7myA3VinoOP0WFCQoY4urq-Hu4OmZRHvfQYZebOXWsisUCjaswa4HixgRe_M39FRfI9PyYzVI5F40bz5hC_6x8b1a3P4hJE2WrZfFt4DnMbsdTZAEDckEHo5vyaIAnbQXJLExl", width: 1926, height: 2566, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105212592318547074878\">Ngon Gallery</a>"] },
            { photoReference: "AWCwydj4rLCgVkwb5LyWwCcb8tn_Nb2qssCGwupfFrEn6sRCXjbwAW_0mhhM9rg0cq-FyDQDfbTht-jrQuFcOWjbzwXmGLzzxMVhN2fAm73AR3Q6Jo37jsGuU_xCXl2o9dT19mP_GD8hvP_3MWCj_QiPRN0LuOf7e-nZxl-kDts8DWzBM-kdpgqGJIcEAknAkyeQE88qLZrm921rcHxjMLLTb4GjvsOAFxURLff-LAwYmeDC1fA1x1JpvE5DcLvTA7YxTO7Ho1mm7u7Rs5Zk8sIm6oxCOwGWjRPC4Z7fUfLXHfTTK_7pKxPbgVD9UTESYlcAMPvemZB3dB8F9-8LqxyA3C1OKc_1GaKo1uojaQeNQD405tcSWXWsP3FyUvRXjomlSxtPG8XNtrCwt0aqsKZDO6hcn2FP3pfJFWQgYQ-hsg4Et-sgKoxKNTUXOwn1bQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107796347674605907153\">신준서</a>"] },
            { photoReference: "AWCwydiCuearAcdpbkwGSl6Ott0MR5b24dpZ41eKjiJZNKlxpgDI5CRBUQ_Cqw2cEyFDGDDkDfwoiy44UeskkkXRB_PaKsEzjnVzOel9i4oWHNVl5DbMRIXWcPliIvFEltO4DOpVMK4aTr6XAvoBi9W7CI9_75bVA-cEjQiLO9rbzDepZ48c4PSJYmbIWn7NBxhWwT__i8-f7d0rXpzCMJRC47qHLAkKAgXgLJY70iqBUQDAXLPYRstJEq5nvplzmU75_ZOQFdTcsN3oDDX6pbdMzhUjRqdBktA2NIsCsCCHCKgksBRJDeosTjc3Z08wUYxZ6QwiPL7NRpRI3lTimlAhBZAZm62ohLFfcFlNqfXo6sqC957oevUSAem-PbfI9pMdMX4kIKZ4ORXttsKwlTcuKIKHcqA_gm_xe9Cn03f1uAe5igJk0-isk4XC8aBzNQ", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104115378785097471480\">Tweety Tzeng</a>"] },
            { photoReference: "AWCwydgBcuM0ajrY5tg0zxfzJG9KkKeWfI_WmEloKjQypCFtJNkiOItysX-hcGOgHy8SSN1YHoRqcpNiyREhvVSjv45qmPLWAezdcTA-xxJfWVSaGTE-PIjaohzPLaecJDqkpkWbMkt2MdIC9ouhjeVJbGELvusTYji5nsBq_1lDjui19122VP7HAOMmRKfnSx0iJs3TNjeUhi_ETX_1TZT230Uteo9G4zaBgkLVBot1gDCwkHmcb1oFFyvBS_L5w81BDZfX72RE4GzMFJLsOAih1otjbJwepmzmnjmLxT57b9DxS85p1lIwC86xIpP0X5p1mQO02fo_1DTwlqQ7Hb3tPQLTj-ro9YikYkSBYmgc8K38M7_6aJOx1SFyXIbpekU5afbN5ziehfGMG3d9gDqQmMpaQzhbK8xI7yLXLl4C26P8AQ0pOXObJ-Dzoq_108AR", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118228197448050111825\">Ариана Солодкая</a>"] }
        ],
        summary: "응온 갤러리 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["베트남 요리 뷔페", "평점 4.7", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 요리 뷔페", items: [{ name: "대표 메뉴", price: "₫300,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30~9:45, 오전 11:30 ~ 오후 1:45, 오후 5:00~9:45; 화요일: 오전 6:30~9:45, 오전 11:30 ~ 오후 1:45, 오후 5:00~9:45",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ngongalleryvn.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6007473449932114950", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%91%EC%98%A8+%EA%B0%A4%EB%9F%AC%EB%A6%AC+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스위스 하우스 라 카세롤": {
        photos: ["/images/nha-trang/info/restaurants/swiss-house-la-casserole-nha-trang.jpg"],
        placeId: "ChIJ4bICeHWFdjERhzJepr4Uso4",
        placePhotos: [
            { photoReference: "AWCwydiKAuCxHIiu1-0x84JHhk4zSrOeZ5gYA2P-4WRLMqae7EnNyGloiIm0tFHO7ahhv3EQBNUcEnKN5P2txMfzqI2hGtu2lUhIDRT09nmt8Tt4dt8kCAb6dTD0LG1VVBlAyV-wOlwEVA-8l3eXGiuZBIaAeiwaNxnfrSM90WjgJ2MxAWDmPLT4GX-cq4jk7G9rV6XJJUBFkcY4oCMzbCsJoQ90mzv73Je2eM0hJScFFQ9iZi89IEbYCee7XhI_xyzmkSi7J94GvBMuE01UXoVKuTswAJmp-mQCL8rH1rcetGyuDwqewEY1gt6zPd_HN-9l_R5E7dZMUAOwK5obslUx5MmQwmCENdcBW760GKas3SEEgMpa0uLPecA3kz73m5oSalwPFeP8wT4QsHhkTFTrjjc-vgewF47UxDSbsutSSFQ", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117468956028122120577\">jean-luc Fernandez</a>"] },
            { photoReference: "AWCwydjqgrqstxJOYf4fuZe6568WIPStBImBQqucGuWi_R6VoBdjLEfn7CIWBcO7uZOyLCke7Fi9eSBDcjo7yu_sBXeJ56Ps9vLVqBlf7szKBOwG1etL7xnjZMK-KoohCH4e_dZ4XinVTF0JdvovAb8lYISC8hwtfcv6K1OtFPQGwoxDBbryYXoz_CTgisPpxiyw2-3epeECr_6wNij_IQ_Wyj1o8QyC_H1gJ5QpPF7jBYX5ROXPX6j50H5-4tK5F3YmxhbalRUO137RYR3x28qkEobBAY2LbHqSPiLq-EeCn2KbMhCl-d_2uZPjTeZ8jJzTqu8ts41xr9dFfj626KNsiovKuUMpuyCs-y2QjJgq_yvjaBTvt6pDh_IznU6g7CrSpP9VPmHHQ-DRZ3sFD9_VcBbyDZ6XQeokx_COiku0LuGFtg", width: 1600, height: 942, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114083760052742409362\">Swiss House Bar and Restaurant</a>"] },
            { photoReference: "AWCwydjGad0wQubWqP8oD2UXwn4UZFMenFHGvO6fNVIJPN4J22-hCwipNX3ei2ARK81ZXtn0DHD9NzZHYd2pZVX3WCCZ-F7l1I1otxUPlF-HQQT3hylmxjSqZYCJbkVXXE0x-aIQoX8bEhv7B7tDG378Uk4vzpZje7aK64eOpV5WW21LcObEVAmLVsOhRqdae-4WXsnB5eA8cMuF-Ee1ib9aGUr3vUkKc5SscIvjJ_gBlMryGiNrckDwNAufmOdHNydn8SfAyQTqvDTsu1odGg2M45ZqODmdfcyPv5uInGd0KWRhY7aDdiwWpRmVI8mFt9xSljmOAjhFsZ3pCRg2erXjouCGnT4tvJ9l7GA-CXcOReAHhrVte31eS5-ZrTXVpaee3gdmpRThACklromRVw-zxv--M7N0cqpEyDWW4-eaUmf425e-Z4-diCLsYdOijfUw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104840857885132835904\">Justinus</a>"] },
            { photoReference: "AWCwydjB7nWhEUjN_cqiRv0XW6xnGewwf5pkkjpoVOej8q7pNBL3qkANpfkt9HC0bJ717Nhb8yEvZWNcVObvsN6hQsipfRCSW0CdnVJsaR3AhMMKtSMehfLQw67n9TN6dUCv-Mf0HQQwy80J8QTzRPlvrKYOX3iFi7ZWNMmoaeQceYkuofDpSvCT1aS3woqq7dLIcKbYeT1PJSnX4znn9InSCyQ9MB4f3qjnpeATF2xoIAo3O-FuBV5fZTYNhx1XfIxRKx1reAs8LN6H9rXEJKy5muBBQeCyzs-3DmfYjtjNCabrPcqAM9lC3INU3cEx_lkFbZyJQMSQQiiSD02boLzqAaVtatZvXhKaLcQ7ZV0RgBn2H9hkZcFVCphw1GXbxTWI1yg5H0W8sHO4AT45FoALWPM5Vkm-R1WlA3ndSjRqf5CyUI0KOi9Ao6n8nYeTAg", width: 3072, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107218572776681277442\">Gabriela B</a>"] },
            { photoReference: "AWCwydipdcOwMiDnvKbJN2Kk3VGa6gNKNLKaw8lHx88yx-f1NIuz5_v1WVlkZDTw77bxc1zJQvG3QpkIXqxQL_m5kE_N0Bo_8T7SC7e2ue9C8_rzF9mWdnHxPexNO-XimjJLiyHuJKxfdLQbFJ2Bvs6SGxaSSyzn6h4JVwZfFH8DtkPygiRj0DpthYZs54PEzYhUT_lSIntEqMEr33p84VGGU7poDyDG7GiqRv5Tnjcl412WMMUhl-Cz9M8V9rk8bx3YH_tbLopK9CPSIuh11ZzyfB1OjIZULD0WdvYc9weQPX-1wEAnqPeuI9L2cyaDglV4zv9qVx8xiajE7SEMSGWk9jLsPwYogNvFCEoMksfUVhBAEEsDnxS6IY6PXABF4k__FyT_EoYMNXZZVnkLACIdnW5tHBANQDLoJNe_xURkm57Fo_t9Mqz9gOyri9RkonH9", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115935160462022742676\">Stéphane Taulet</a>"] }
        ],
        summary: "안토이 2 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스위스·유럽 요리", "평점 4.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스위스·유럽 요리", items: [{ name: "대표 메뉴", price: "₫200,000~900,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 10:30 ~ 오후 9:30; 화요일: 오전 10:30 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/anthoi.vietnam/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8616602372252073345", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%EC%9C%84%EC%8A%A4+%ED%95%98%EC%9A%B0%EC%8A%A4+%EB%9D%BC+%EC%B9%B4%EC%84%B8%EB%A1%A4+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그릭 수블라키 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/greek-souvlaki-nha-trang.jpg"],
        placeId: "ChIJ8zgM1pddcDER93n4u2PSQYk",
        placePhotos: [
            { photoReference: "AWCwydj_uDdjnzhtMnBWRrNga07rzMcLjBw9opAElIcesmSSfv8ZU7L-gbQMYUPa_FlWR9iasRAHcp83gOoXrSjWCRE2izHo8_ejEiw_pfkO_cLm_hjMk4Dp4NW-9b6V13-aeUhNXaNZg2K0l7azkGzlQ1uR5YipCMKgSSw3ir4jOYhit4O2YurVwQzgQjrAP6X7dmwnyeUdE7F_y3ug5BNE5IMPX2g3Tzh7ReSwr7iAyTOcVCWho8WdSNOkBN_OH_YjFORn6L722EdvxABxX5gCtKm_rKWN1f7wbYt2T_VBmF8ETNLaDlpt0s-JGO_BKOlOuDryfmEGlhapJbpv5HwnKDakLQQCepIab0ipleQm7H4YZiXK4BTuPgvKTRod5zWxQwv83t1oBqkaJpTJRozljZhapTUD9ryYC7p_qTt9ZTIYPg", width: 2048, height: 971, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101563951697156462665\">Greek Souvlaki Nha Trang</a>"] },
            { photoReference: "AWCwydgNx-lRw8NiCqnjg0MGU-rk6KJw87VJ2lI3-H1P869qjhFjeeHedqb3_Z2V8fXdX_j1rVefeMS5VjnINrGc4pJF_ywUvKVcCg76APA-BgYEhhWRKT0awUQq7r98YsEOS1YuAypZ4VU14Pjrhy96UomsG7W7NsKsO80GUmW4uxwfM4ZXxeGlZNuIy9jTKStYn84jbUsulVk8wvg_0bpaF1W5tpRSTmEpASgMYYf3GCDllkUo-XtYuM5GhHcz362pC0QPE7mVwHkAke3CvgVsKmHz1yPdXXrhwwlSSXtRh0ebWQj0SBt53NocPeAan9Ol2_Lfcx5jApMDjnslQJsfFRjqzU06jDvsKlHHfJ1TWg0ofi1-5oM7rXBecU5qOohMr-CrcFMZzkHzvwccvPY4hzwSqFc2fRKOL6IplBwH3UDzi0-9dfO0CEyKnt-a18If", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113840326180700611888\">남송이</a>"] },
            { photoReference: "AWCwydg7DrN5LNqxcJy0fPPif-wxCo-J5iay3bUbZ3xEQFsV-NOvdy8CBf_v4GjmZEu6rt30yoo20Ec2LV_ody2nuEWSX0ibyeR1d7ijrTWPDZ5P7eZ-IwWUwRmXCfrGolNBcq5TuN5TFzroGuBzNTSMViS5t-bgLIc2OvXHWTwF3P1hQUGuZiQwAHxajy8rTvxwF3ZW0geGAheUNpWQYnUKLHSj-OM3zL3vdK_fTetzgyJGrWacybw7EmQtVm5gTsprRL1zwBlN4UKC5O62Yns6hMhtJMSm9KnlKAFUhZmB9i8aM1TYydIu0jQXZkkYv2pIH0objj3LZxvt7y5P8w7wKi3PWybuOU3XVphTU8SdkiS_FYQBfzMqVO47O6xuv-nfQq2pDuFWD-XHvVGZlx5BdxylAROtQKPEyr8psVsW4KAiYRGCEUdLepqv8YRo1_Us", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111397510996465335664\">jane park</a>"] },
            { photoReference: "AWCwydh7pGiVaigb3f7aq2XXsoDY3TOrShBkatzx6HKxDMHcHzHRd8TgT1ion5IygG_HHJREqPnvro1ZHQC6yMfNnjZdyw7RkCt5Wzad5i3UDlY0VF8jZBinJPOY-z6rSdvtDyHvt0WnipfTsWfKII8_FHQGYXZS_XMBrVaBxJRz7xYATSbi5K9Y_sh9Or6CgnrDgDh_kcr67RPwFUgEJJg7JgZrkv8NwdNfH4xDWLHKqBuoHt9obl9NwjqHuG8Xr0LAvyOIlrIQ6ZTng8Jb3r-6BxQuf4i4Lq_VBV4uNPVa1Rgu8uriz-oSQyGy_ALXj4MOmOgPQuPnboObF7FNoX8K2d2zIay0QOyLbkGotjjMJ7OHtMLqgXjGDBbIXjpFfrGBl6EwpUnXbEK0NhtqTt0AwdoxhOjLSbbPBZ1xNE7Pd_qV3kAw_03bQIQ_VLeQKFOA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112180157672091343013\">HJ K</a>"] },
            { photoReference: "AWCwydiHN6ZYUczO7WnwqV5NDwQ2lHjLj3oae6mtN3FqeIsXxOsVDdz4hKMwq604N8lKDAtPTzHeBPk8lCSDFSBjv4yoMuWdzI-vYkVaACNr06gjnsW-R3xwa5LK3DcOCfhd0yDLH9CeV2hc_nGGeS3npjf6gdY67WrfqsmmYy9cnArHaCO28YrBhSa_vDU4UvCTImu-V8UmHZ6wnze7L2b6JNwXS6qOMtm-0OLuSHt9PZNejdwkrh2hlpM5dYzzrRiElOFIiGlhv0t2SWvGK_3LRwlfnBBfrGW5758YZkexZeQMY0zf83rM7d-EdVVCp1lBaVo-G6J2FHy_EpueNt6fR4jQ83ZzNNqP_ibBmDelhClpW1xP4HyVvl4FpVfgDXvXu4rs1vGoxgSjbvxcqje1SykYnLBLbo57c8goa9RfpzXfi8sWVJihm63OB9o-To1E", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114781416635204555847\">유학생</a>"] }
        ],
        summary: "그릭 수블라키 냐짱 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["수블라키·기로스", "평점 4.7", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "수블라키·기로스", items: [{ name: "대표 메뉴", price: "₫100,000~400,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 9:30 ~ 오후 11:00; 화요일: 오전 9:30 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=9890417582479538679", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%A6%AD+%EC%88%98%EB%B8%94%EB%9D%BC%ED%82%A4+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그릴 가든 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/grill-garden-nha-trang.jpg"],
        placeId: "ChIJ45eh1PtncDER9ELeVW9qf5Q",
        placePhotos: [
            { photoReference: "AWCwydhQC_n7o4hqWHSmxRXbCzO7Ssj3JudZZMYVi_yETmCDz3U2XxDY5d18KqyYKoh6jFqj5cc4lfC356mw73QZGPON3BwFcczpr6TbfnEu99iCI4Fo5stRC-WgnQSq5mcd7x_ytd511d-Ko--Ov3G1hUyyE0ENGdVZVXST5Hx0XWeKjV5hrPYuE-f3ikahCKqgvJELDFlEpXDkfcHO9sZSi1tagZnjHxHYsF2HtsqQrzfRRg0Yp4nFXS6eaD_Y08UGywymva3dHWiTevw8F1K2MAVj32u3UkD6AYubOL9gOdFUWJmWxvLZ4vERpXeeGqcizA0xsZy6hJy4Omxe8wB25wbHt0uqdFnmkceKZsOzWNAEGrOrEGEkZbjQZJsRHaUtm1z6u3aCRRNcUvnyGvSVsC4WJpB3O6aKsctOvLMUEalCABqbUgRquRX6HOj90GfW", width: 1130, height: 636, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107750390145004034673\">Grill Garden 2 (BBQ Buffet)</a>"] },
            { photoReference: "AWCwydgxxWgWdhv4rK0OTC1IHHfJydbLdvyEWDpZUmPhDUo9LthhDDSQD-G5HoFPsd9UZnmgv_8X7SbvaXaVRhYIwUGInlRaMulPnKb835QSKaxqjiQ9UwwFJRHLO2TIE72gjgpfTU_jyeYQxh5ux-rYEJyR_tsXQpfRD8PgDZ_ds1APoLDoUxnjLjCEpNoZ0hqdHOHH717reRQKVOa4Vn7hXv2PtXWRLM9trNX30GRLT167cigwAugv7Y7fyZpZJvOCb6rVKnmd-UhY18vAqWHWrzJRSR0MlD2ng-8Qa-xD0ZkGB1lAr6lgW7ulC-HD__IJxBv4CpMzRLp4EQ7ymtjRZgURo3P4qplhWw408mXYhln76gamotTNeVGP4gy_SnFi8EUn4ONWI1rjL_ImY30JtvAfnTQsmXEkuFUuR10ucZTD-xSZ", width: 1242, height: 1614, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107750390145004034673\">Grill Garden 2 (BBQ Buffet)</a>"] },
            { photoReference: "AWCwydiCpzyCiMzm52wijDep4613ix72zConAxZOsY7wVnWXz1TFN_uq7XAtJe5kI5nSgUGRCBCn-RpYYuIJh5nhDoHU1NfsdOwELDv4OLNORG2aRFSJrGUI9o4E7hKcm05ekNTpj5kbRC0u8l9pmh6QaWOcI1nEfWPhXeg9we-ABfM17frakUxMdOroLEgHYfOTHiFJrrbiSuL6SnbLRi1mAeDnTZWghIU8fYmByOMcOkXvnbRLFSeagpMIDImoXr9MWbHcGMS_OldO__ai3FrIXGGcPxZqlM0l3mSeN69TPZUxCcd2waks1DAEvRo2wF_RYw2G9WA9hnofWYWz0oqUGUmEM4Wf34hLFtpsNJUEwAaxf7imOFgqL57Gw04ETCd3ZbHYYZDj_SevdW849wzUwLtRLJA75ypIv3i0l9hzjqZHpPBMuspUvh2-nMd8vJ51", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107450845224079062835\">Thi Nguyễn Đình</a>"] },
            { photoReference: "AWCwydgtQrLfDHyqtZapObWtyJotw2aQy3gLr5mDFPo4hlV5flaC4qDZPbwJDLH8NOXKbmIyfal3GXogy5L4FIypwQsyk4REcGG7FXfePvw2XYLkNBFaB0UrqP3RESK1R-KW99fH9tH51S-YHC4ykg85vHbFcF37yweOxryMdU8fGODY4fR7lTuYd6NFCPxQmuAin0TnJmYCjWuZZZrx--GRUQEqXOAZHuMUKvGIDiwc_HQc6IcXuPAGrzfSUm3iDPsftg2WTNysIe5EnNAPuxZwfYQwBEgqmHqpHCvIENkWJpCwreuJEYKQTdu3YNc36mX-HNbtgwtXq9hC9hgUC9Jy0SU1qaDmx4Bwuy2hLBr8dfPp3l0RZRnJJoyrppY16qjKhPmGjqNMkUa6iTkgxzwX14sIYG6Df5hXvQZlH-_VdWwycTNx3H9McbIAIBDedA3x", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115382439036540313185\">Linda Lee</a>"] },
            { photoReference: "AWCwydhS_tsGAiTq24PGnUKTTmwd8LLZr6KzofJGsHEs3lgy9Tdj4RiHqIfi7uWArgc5HKIz1GS9VkcGqGKkr9SOT4FWNXfWL_qxKHs1b2uZmEFkwTE6ia7Pe_JlObE8lwbUH2vX1KT3BW4f5Mc3NEeu5GKNL12R0gzeSXcBsrVZ73LioRFnXmFSrf7NiRUEhzRH48wdHNFZ1HeTq_bcv3msF_7tIggKUJjR-T_CYQfGFl9tnSRn3e0Q8A088TccLdwrBYxqq_IcihDDKuW7grzUU7SXp11rYcFifPL-Yb6tudXQp2p2Vnc_CMelybAUjHdFQNDh8oOoxn6D-XNrPUMmzDRgyJFPTPFYXi_EmJn-cIUqLDqXKef7uLWdw53vxi8PNIel2QPOzYbD1PveYuGlUOo_r4jqEeStEJvQdMjH0GAKSjtW0ye4gIPJ4U-c7A", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108338410776921093800\">İbrahim Özbay</a>"] }
        ],
        summary: "Vườn Nướng Grill Garden 2 (BBQ Buffet) 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해산물·고기 그릴", "평점 4.3", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물·고기 그릴", items: [{ name: "대표 메뉴", price: "₫200,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오후 5:00~10:00; 화요일: 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://facebook.com/grillgarden.vn", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10700388266070131444", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%A6%B4+%EA%B0%80%EB%93%A0+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "피스트 뷔페 쉐라톤 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/feast-buffet-nha-trang-sheraton.jpg"],
        placeId: "ChIJz1qmd4JncDERJy4QOcHAh24",
        placePhotos: [
            { photoReference: "AWCwydgn6QadTJ2AmEKAo1XZYnuYyej518z4uwQc_8wXc4RxpEJuJWcJkQ2rdQXwLi0ejBYj7G-1BnxK2u5uK4lrXD9_qKIY8iDNyya7UAYUaGzYihLszPvE1HWgQGusqzwrdKJtGt-LhuezSOiF6_93B4WkXoXD1t7G-Zmop8E0u1AsbNMq6kaAeI8Wk8zHmLv3vX8stNlUNvvsCugjTpQC7F1mBhUZQrDba6nmOtY388lBIfIQJp_FM4a4pWq7EpRx86OM_LNFWhcXrqIfpn0PzO_yT9m5rF-Te5OMmq4kza7rerW0Kp1zFFN2y5_fwz7-dxY4umV6FOFbO3oevlpeJhizWNEDzn9fGHUOGh7YkC4lIwV1f4v62BOIGJCcp9idWR7GfVP7sNyZhnq_GZXn5HMj4UyVRqEmFpdkKjDFJ4V_sTKX", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102163927786997661896\">Feast Restaurant Nha Trang</a>"] },
            { photoReference: "AWCwydjKvEiO1g9rHU9UA4X_RU4RxIUvzZLhkiGb1aLb68eVaB1UUGZFmVm_sZtgxrr_sYSKNfZeVbHBpcqF0N-mjQWqLbJFAxYcnPMZ-g_rzUB5YiL4wEMdMjT6Z44Fsw5bkfiYtYx2qn9nrv_4us8Cw9cddZ6BFmhDP9s90GEiuLtov-zcMfPj8Te_hFKTIxzMhgT0-TihLE9asnlLrGcvOW-CawkQ02qrLrKtwzph1Ez5JLYfO9lI6FXxmnlFB3ZwAIppe3ODZJCt05UIsXiTQyB2Zl2Yux5kZIUEluv_zwacZRG0KhGuslWWUIBqQyTNKCYknZdy4Xa3ObSSz7GZX1NHtQYmAAwcMLa75zKC8q017-AyNGNrUwQ1nsZDSae7JBh1bmfiJALgJJsm1frpi-is-H0Dd2j0EJ1tbFJk3u3GqhSbiAw4Q1OH4ITjvSXV", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109662103773987493147\">Игорь Зорин</a>"] },
            { photoReference: "AWCwydhdJUYMvjaWXQLqyvW8Hw_fDoOpqx8KgKqHxz-kURfm72LbPT32O9bZUNtK3vH3Hlv4LSv714QE7A1aLU-hnJrKuENpFOoysKkCrfxIPK9Kwig0ezjc8jdhg_8mfbtIe-4gVSdqIVY6asnT9hwWmfS9HOqxGPqQZI9-1gqQWORrPrycXaCAFgLl5OwEbLopQXxy1HYvfWmhkeVtziMSQL9r9qNXqoGA9b1f4jIeqULRQI7bLBF3DOba4uc5TUGbjC5CBM_Xqi2DzufLi5af-5zocLSQYlSvPLI6R6LkbrnT6Pdq_Eo3PtjBnG7npFF-7tsqod9XKx8zEP3wApdyFEhLAE-YsvJEbv7GiK7lEn7r4of5owPPBKi7LD2CFinpBjr8qMx2TaJsIpe7oED_5ZAYroH-Rs50KloThtu8JACxufrJ2BASfY74_5gEig", width: 593, height: 395, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102163927786997661896\">Feast Restaurant Nha Trang</a>"] },
            { photoReference: "AWCwydhgdThucmF6SPTk4nwT3WiquWgfOMGm-qup0r7O8CKx3db_ezTAZ9o9n2PWyqlTQiqNhpqDepz6yvUhgB1Co_oHq1b6ZpgMbFsjfORGD04vlyVUnVZHib0v4ZuyYPbNcVjN-lDIgjb1ubwtNVbHGY0WjrqEKWV70_xU5FZngyxo-66xYEDDmg32vCi0sTNO1j-_8ElgF8OKLOJwTeDCo__c5b34J2YvOZp4GCgR-pT7pD0F64st6y-QSD7dsQ5dXurAPcIeckH6SJO_k0azr0NaBGBun4foaI12B-T-z_2KT8W2bQ0iorua6ztwoDsXdTF0YM1Fa17ahRSNDnMjhh6MlP2VIKYuNtV6acWRf4rP4_JmHK5vDYgYYmr_nfIh276sBOBZOVvOUmmfNSxZ37gOWckDccg9bisas0d4RiVq006Gv6a4-YQOjl3-Cxxk", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101668662779256701803\">김태환</a>"] },
            { photoReference: "AWCwydjO0riMT1Yz5wHwqbRgtrvwAR358v1tjqrqsp4tIl848fUAT7E6Rp0OkcsP2eAeAMuXjdTwbrVHW76P1BNzbyPKbbG9Af61wXDh9-bF-rfrklNFxW56v2vDHmA2WvcqU7AnqCGdWlp5d5cpPBI_afDNG7uhRnT5W2chTQRGy_nYelImt7I5kgKodsXrUCzpBFo0Q2nhBAiIxZUvh3ZhC9R-3KrHhM7cMkss0dkP3HxfJkQt86pfx9QrkMVs6OiRmRUlTqNjKzoYmK2wvyQGEIID13qgv1ZZAnreMQlPx6vJrCo2cvCDwXJUSjzNLcCX4a08zwglpf3d_FcMYovt8z-DQVaAv1uP2AwwB96Gzzkx3omsDO2fGVMoRY7C0YRDkYkSOLGFK41a0YbKLdCkbGIwdaxtlpZ_4fSJ0aqXu0k06N-Bn-LPeewMS2orL_K1", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101972201519309691065\">한재호</a>"] }
        ],
        summary: "Feast Restaurant Nha Trang 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["해산물 뷔페", "평점 4.8", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물 뷔페", items: [{ name: "대표 메뉴", price: "₫500,000~1,200,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 6:30~11:00, 오후 5:00~9:00; 화요일: 오전 6:30~11:00, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.feastnhatrang.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7964546402146594343", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EC%8A%A4%ED%8A%B8+%EB%B7%94%ED%8E%98+%EC%89%90%EB%9D%BC%ED%86%A4+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "스팀 앤 스파이스 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/steam-n-spice-nha-trang.jpg"],
        placeId: "ChIJ03m8dYJncDERiZLGtqIqfZQ",
        placePhotos: [
            { photoReference: "AWCwydij0Da_k1yXRZy7r4YSpXKR6dMhlluXMiFWSXV1iyl35E3ysCQzAYBQT38JfwXe0No_LnPZn9X5KE3zssbbY-rDwMtBbuxd1npLwRUzy2vLtww4IpyXZFGRN_puJXoP7lJ0WE6mJS2eKliOl1NavKXC_FlW9FyJ4XC0wmAlCRMsg31rrZlhjlm2r_uU1w7vSBNq0Ua1rSLhBPk-rqDsdCLLAE04TiGyr9HAsKxU0ntpzCMqLB010A-Bjqjo-lBkFNNv04_7KBimARXabWf0ZHxjHeOG4zkRXwB81HC86-INGaLhaI8oXCAp6NC9loFgYqF_UgdJd7TnFt9KCLAzO7DHuGeRBAzYI9XMHRD35_dECaMR1l1bosueJ07urg3hxjNJnn4bpliwIMmq-LHhmTkiGXq4r3fSLXsVLtdknxSvBb1uqR7GUhiNTE2-PcpF", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115432859342991440775\">Steam n&#39; Spice</a>"] },
            { photoReference: "AWCwydh4wKEI4jHHlkQJr3BO0Dpy5AAaab2G3WuWqJIK9sWfVk3leq3wyDPE6puh37rpzJ5S8uAZsqO831bUWtuJGvaXygEC4jX2rIvbO5EJfelKIQ9ujokijuZo4pmvDdfa-RJACWDHBgiq3ahZCUCN3aDqOkOjIDjXS_IL42-HvqjCSW_BcCEgiFnXLJqGi6OwRZVa69zNRe1DZBERFawZIbW8Sou_5-pi7SFP0wYeFXINgOrFDvPUwtI7Gb7mvcpmPYbQAo574rmor2XWDTfX543mU52u6qqvEjA9Tjfx4U3GU0jV1mkGcgywPF1ERVQWjGaGFaRfEDWv-6z1i3WIbftMd7aCGLrTZjrPMGodezIYSU6J3e2Hl8SdMfTf9ZwGWf8aq0JUlYY857ZPTiHWcAiPQtHGAwG6CQB6hKRKtn0", width: 3200, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115432859342991440775\">Steam n&#39; Spice</a>"] },
            { photoReference: "AWCwydi8-4pErc2iozTLn7hlb00LRFX-BCqHihH7-h1lkLBvBtU06LJ7sjOjhXOZjcPVj8lA2Vp7MbG3Zjfc7nlbT7mUFaYnY3ePUAlIMEzPXPKNy7nI4UfZe0ktmZwBSOYdjRz_l6ioi0iBQ_9yUyw7JsTmS_Xeu5yYHKh_YygXsjfM6NolxGRxOtyjJPvkcZ3te6hSMhNu2WuJWQ7xBG9Iyyzz0CfzMWXFG8rpMwieR796bopzRDCBL_ki59mFIW-qj7wmk5ySwV3bIffy2rX5ZPS85eqZHHuV9Y77jGURfYZs4shH_JNU4_YVENolvUJjXWVDnCKOiH8kBPPHOkVaFhsp57xF3MtksKSdaB5ChxBuxc2t6eJgJD_PxFxZF1wyJD0ux7Ea_Uhx7VRGYn_vFcQXXq9GX_BR_V9N2_ePlIJZf5RHskUSp8-bETtcw4Io", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115468796329508614676\">Việt Trinh Nguyễn Trương</a>"] },
            { photoReference: "AWCwydg9rmCkLhAxoxVbJY2R4Jr_5VZQe2UNlVa4JjmdW3N3hnrQ0cnrqS21931PkfbjmP2lH38rixy6AZN9cFtS1vpM_m_3qRcXeZ8nv3eUWT05PyvEIJgqWjokxwIngawHXta-iUUQ49tEM9EbraJysIv8mamp_k8cadOne6c3_-cQfXpe__iH7z3AtboF5Lei0t1uDeHiX2gi5WCNkU2UWpu4bjEJmajiBx-ZsPU_HkFOY_uC-p7kl1PsEsAM6GJ1u2gulUHldN9LdAiUceV4D2hm9hHjoaCUsgLrhGKZWyTQLkoJkS_gp5a4CWEz1nO_G8U0708s4ZDlQCf4Mp8eKxLltC9er9ifbPcduItaI6kirmKy4ysulR7038crkZ6RYyPFTwIxGWL7yI9Yu-dtERWAb3YXI-VvBRfn1tM_OMNl2Pl3OPv7_PP1oU6p3eKG", width: 3547, height: 3338, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112401582833030329651\">Lê Bình</a>"] },
            { photoReference: "AWCwydhcSJdq3sonxsYA6H7teQ6qh5DZq0NnDkP-SfxQJxoFmyZqJQwzNj-av1HPpWFmUhffPFRowNBAmQtMWrZYXGpVrGk1DVmmajqvHjnLWE87S7EYP0SFhhTV56CgXWjQHZUu5a0f9suoCQ_cgsvp4y6viiC1kuoublDsbXwqeIWmBCLNigIpSaPZWgvbZyDvZjtyCTfNsBAxW55C19nKJSRsGwgwbeA_fpD98wCdNj5T_zQj3oL5RkZHX9M0EO4b-vtPRufFwJPY30P9ZCUiph8fjlVnyaYGLlE6QfYzN5ud1HoMxAV1MbYVyKvD4HAXwjJo246-8FrehIIwTtQNsb0QfQMkZwIItlp-vezBEsowiQAMIRSI53R-c_IxfX6rfSMiBWq0Z6AJEcX6rGbzjU-GPdm1RFY4dm7fuZ8T_dtRncF5Tnf8VcEoSAX0Gw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118345270920068569477\">Evgeniya Evgeniya</a>"] }
        ],
        summary: "Steam n' Spice 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["딤섬·중식", "평점 4.7", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "딤섬·중식", items: [{ name: "대표 메뉴", price: "₫200,000~800,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~9:00; 화요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.marriott.com/en-us/hotels/nhasi-sheraton-nha-trang-hotel-and-spa/dining/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10699755168041702025", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%8C%80+%EC%95%A4+%EC%8A%A4%ED%8C%8C%EC%9D%B4%EC%8A%A4+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "키와미 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/kiwami-nha-trang.jpg"],
        placeId: "ChIJu8MROnxncDERnWCsOuwqBBY",
        placePhotos: [
            { photoReference: "AWCwydir4dGvDJLbl1PSDSliAo21z3-07ix2e7iF-fT2j3doTH9XhPVXULO-8JHdXNURv0Ho7Kd_HPZIGK685eJkmzLnbmLqXW30J8N-DdstY9-Zhs4T_V3IcZhYg2xkKXGjtTp_l7AJHKF3_UFr35i0lCZ-nHQNpRAzj4DUqQPsKDzIECpKdrwpNoUCJIKi-Cbeoo-a72zZ092QHbqlaRCHe8eFZEEu896-SJeYkR7cuqi2kQEWUExoIpApkT2FSJq9SrBwT2VU7hidOTjvftwociDpE_gEcsIrdFzPhVxVEDkBBMe3v5QyebhIzKU9WacZnJnCnuOhEDEdHJBIdPrzTQSHbxcCcRLsEH33K-XMe_nKQLYLFMvcTx74MSvwJ79fJXLdVbkKa5FIFgD2ZoMaQMVgw8maQl0Sm9IRRsSnMOknDoG0", width: 1290, height: 726, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110417532647901620070\">Nhà Hàng Nhật Bản KIWAMI</a>"] },
            { photoReference: "AWCwydiHy5WNhWLHiqAQppNPR_4tJdhGc9up70ONWLEzZbHSDOMgnGfHB4pqIt7gqxgoN3uJv9uVOmUiIsHxXNJEP8qkhjk9zYawPJYpldFx3SNY3k01QNq8loCYd63ECtlR6bOZO0YvO4v7XAtt8_kCeKjs5IoXzJZ1la2eh3l1bg2s0dR9ja-z-ORqLk0rEA5J69pMjgdTqR-qCmCiM8hTkF92V6J2oBjopXe1ii_b_lyJPKdBD-axJLVOGcy3-aRQ4kchwFRhOqO6tDXodwJLdHcE7ZMDsG9N7_Y04a0AqiiXjW8bNalAi7XWAsKP3r7cTncHspfin92wTh-OeP2OXc_RfOS3aJGgjlAQ_sFXqV7kF39ajnJobiLSbPyebPXwTjv-YQUXgj_ZOk1mkoUI4MfHL9paW2bes8EHfDO6RfaKtMxtdw3QON2cag7hebFY", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105611016281826963182\">Frog Tree</a>"] },
            { photoReference: "AWCwydhFflLcY1gfregcTiF38xNmfsYOp0DIEBiuIsbzMP-eOtns4ICNviJLbcM1mQLGq090sPWl-PaiwzcdRwHWZIlZLr-pLapSP32O7vGI9U08bVvHzndpBJI12sstXXJr6GXNlLzBF_U4FZmAcTub3NKvOTH7QlXJzcxZCKal7cG1ine58C3V4jFCKQtLc8-mnJLCzxWP-WRAIfLIB4BiFoL8B03VUl0krMm7DSLKY7UeSOD4X9r9LHj1gh6uejSzaTFFAY27EQQ7UBctCKICbOGEbOI_jSlfTVbD0fXsyXzLExEeWlfRBCqg3olclpBhG2g3JXR9TQc7dlV84EdpTJ4M4A5HJzkEwTaUbV9nHzhO3QQEj4bgRT8YAEQhQiWdB_pPxorQzzdF4-Pr-JGTa-XnH8uh13tr_guljtQtHSVuiIWLQ2TYIuh1XTJ371tA", width: 3639, height: 2120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107505675145017527297\">Duyên Mỹ</a>"] },
            { photoReference: "AWCwydgMGW2arNsvVeaycB8bLwuuQ-7nHq89YoTxitkskgfrr3IlNOxrzkyzUnHf1rt2KPj9I8wzNMmUyx7nH6Xj-oa0OJg0cqk9OGK3B_LryQB8ejbh1Z_MLuhdlKbDY0Odx43rCmXjRDbuf7w_U-hcw_jJMtOmJ8P2odcVo9EAzYfMaLmzf_tE61SYoz0Qvph_jZ6BfsqxYykTCFo4KAzHRVMIeCPmShFQEhbFReY9BheQIZ4ygWN_eCLH2ieOuStC91MXOy2IZwdGq0NB8fdai1WXqckrLXAi9MM1wi6N1R4IqiuUeOQm521E-JjVKma3CPrVgZJXCQDbEgcmKfs5hCK_dvarHDuNkSkzhhZKYwKDMa2ae8akjYZ2rV-jMOYHENCOBN4IWcw38qd1xB75U1afWMXeLIi41bd8oZ8G1fh6P8Ty9ra5Fw4FUHgHly9i", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110221298773860359359\">Lâm Quốc Dũng</a>"] },
            { photoReference: "AWCwydjWte3BRbv0-Q9QAUowAeEIBiB_4gDAQloHk1wSR4gdNPe2v0PJAKfsNGWQzDzwv_pHRBYBxUhey4Wvf2a7qPhjdMHgT1Oo3nKA3W24stSf_4QHXBEM5AHa0kXs3fPH_uxXWSyVd-PmiY3-T4s0_fvELaqRAlAIGPj93SAjsaa7p2wzZ3b0YZxGCtZSGB0_BmsxE6p5pjm6xKreUsH4EkPQAAC4DVV8Bx99KnNkx97Ic9vzFuXo-yaJZ-sfzqMFRxRK2OIFBmyURJxWaAE5KPiWQ_FsFPh8LncjPxlSfvgiVbPaiTRS6AhuMw1ff0ZqkXaKEorH1kj2RmWleB9xji2JDW8QOtZ9DPQ5BUVQhL-wHkMqE1LFF8bX4wJyhrJOhntWuYhpLg6Of2o5Tr_nO6flwdFvxnnLzjwd8QMJD_gid9NjqJx96fp7SLuzAg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117925123617006808311\">Ирина Коротаева</a>"] }
        ],
        summary: "키와미 초밥 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스시·일식", "평점 4.6", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스시·일식", items: [{ name: "대표 메뉴", price: "₫200,000~900,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:30 ~ 오후 1:30, 오후 5:00~10:00; 화요일: 휴무일",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/kiwamijapaneserestaurant/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1586440162826281117", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%82%A4%EC%99%80%EB%AF%B8+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아키라 BBQ 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/akira-bbq-nha-trang.jpg"],
        placeId: "ChIJu7zEd3lncDEROST8fIfEAiQ",
        placePhotos: [
            { photoReference: "AWCwydgkO5JfRati4iMOhH15u3ERzE_xCwuuL_zu7Jz95eY9UNMuNbmhaMYULO7URsksJh4qn-lld-6saoLpFFTBau3PoYooXfrhPU8CEOEeg_RXHn3zVHpOmJaArwnOTHQmcN1L9f58E8Z9kjcv3SP10wOkDhYZX-Xjp0Kd8sSk-hPaR8r74kZZ6qB5Y2SnO2_sf38lXykR9bVpnoP_26eJJnHvrgbDUPiYb2EbCfztpYvYbYRzL8uRK0Op-N6avB1GriNC_womNbCvecyoZceYXQSR2qPqIjTJIYtI2CI8Qget3BYD6tEogX9P7fYldFwQKsfhEe5NmQ85hcn4puWPKM9y8bpdK6rebjOHo-D7B4Ppo2xjDEm91KOKESX1Q_9gdnjN19myYBh_Km4EHi378swOA8yzIavPUJ8RzzxLpMkRXA", width: 4800, height: 3193, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114895903169404310397\">AKIRA SUSHI - Japanese Cuisine</a>"] },
            { photoReference: "AWCwydhAQwK330YrnxU3Pzp07_iyAMkObbg59JUrct89cZ-FjGiDL0EIOvhrldipNGL2mLlOHyerpu9ag6C456PenNJNL4rCjA-cvukf_Q8V1UG8fqlGt4JGCHgQrqfiDQ9PVaTcDbGRtR0mIr16msEb4HLdulQZFqD2QOTXSrY821ZS3j45bANsF_PgM9fBY7F6HR0q1JaSmFG00GIOEABJAcYbnCNsXOuZkwiM7Q6euPDUccBqmu88Nx4_k32TZgvZSYKyIWSd43zk7wgZdSxwk2EoOywYpnSJ3ZL8pgP8en-XacjhAt-e4ic0-aJTySBUiX_3oHTcSsb8Z78ZxTUq173OGBHh3sWj2u7uT3ZQP7xnBAKfROH-HWXlAVCC1a81wAVUZY343dDDnF6LGZjeu6I3bOmz2q4P8QaQoesZffnAUw", width: 1169, height: 1170, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114895903169404310397\">AKIRA SUSHI - Japanese Cuisine</a>"] },
            { photoReference: "AWCwydgTs3BsergVpUtUgMm5a2VQiomAXyd_G3B7h6S76rI1nxyYbNHSRPB4SajNfjxYXn1walKaJoh8CRTfruqy78AxMXelfENVkwWQpyiIYgMkH2azcS6VnAigypro1WXkeRcXPdbQvoSeC5CaWvPTCjNJeSGOBDIC9Jrc17RApPYqV-nAATZABi_fjGTW1X1jngt58O-YzeLMgpC42Vb2tGp__mcFoLpcjOqEP3lZqLgDIjElbd9X0kwXD57SJIq32hPe6nuUgoPMzD0FQm46DPh27cYX6Mzmd6Up6gKu103huiZZvoaDrqD34RQxm-BHxt9MbQd6wOKl62y1WYkHeaRGKZ-enIXi21mgFYMw9SPAPmrmPZMPgzFVNGD3vMaRlszJeg-irqKVT1cdpbe7ir6zGZbMdDsi-QOcFRZh_ykX_Br5", width: 903, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114895903169404310397\">AKIRA SUSHI - Japanese Cuisine</a>"] },
            { photoReference: "AWCwydjTEE12UI4wA1qL9gDEb49hY4ud1Iyj2LPmbManVAIGp47vzlmsv-GXpVEDNzyjNqn0cakFcPJHPMNeIr3K8QniZMvNUpO-L18NiBbDgwfy0W54AAwn1QkWC7l0V4Du9Ji3G_-fkYorr5i3E2TZuR8NaXicuTNRMVnkePgJbM40kTzeW-Rvm11GW7iZiKuqa85pAiRQVednL7eCxVBWFqTPYbjwp5A4P_VifEM5K8Qe8nS4QFHvWbXHwuMwg6ZAOjrpF6PBdduXk54Gb0glYJ-fnbiu4o3TjID-nV5DN5ZboP8ghci2aREQ__tUGMJMvH9RCcn1zDyyrg20goTRCL5sT4h0kbfoMdrlQ9O8GRg2EHu09sHf7W3AUqkR6X-c_GcjX0EPWH-FIVmgK6gOWdSnd2-Ieena1CypU0hioqw6SsSB", width: 1800, height: 1199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108671098058466150048\">Nguyen Nam</a>"] },
            { photoReference: "AWCwydjiBzdC03Iyu7YN7Zb6ymwaeIBiZxbhhn_e40Npk28duypzZwMMUnQUcDwfzvj-Az53W11NYtuoZ7ve9pB5GQ8BP35CZBh2Gr02m5OQMHXBmFj8yMokHjRnIDPhxvrhiOjvLMJxydJI05jJa3PPzAipFHtK-z_hPk0OfBCxrxoIXvwNI5TL3NM-1KVIapPwGjWHoF49Gvm6hnHgKBYi3gLFsbQPv1wjAW8pu_9mA1XhIFcg552WkDV-Zsm79HXaQg371jX9NKQ26EQ0yhcsvs9WDMZMvgHHJY3yh0L6lumMJjNetCYAUH7awC4qPn4BHYb-2zXuP2oAjQTZFzI-r2Xo15ljxRoHiHqrNAmvqoz2GS6I_48ahOOdTqs282_Mr3lXqaVbNgGr0hd2VFTvXojcAHCtPr69TBVdmzG0rK9efw", width: 2560, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108671098058466150048\">Nguyen Nam</a>"] }
        ],
        summary: "AKIRA SUSHI - Japanese Cuisine 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["야키니쿠·뷔페", "평점 4.1", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "야키니쿠·뷔페", items: [{ name: "대표 메뉴", price: "₫250,000~700,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=2594852421515355193", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%ED%82%A4%EB%9D%BC+BBQ+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "옌 스시 나트랑": {
        photos: ["/images/nha-trang/info/restaurants/yen-sushi-nha-trang.jpg"],
        placeId: "ChIJ5_WXT3cpdTERe6Q5yhr7m-c",
        placePhotos: [
            { photoReference: "AWCwydgOm4sTQGt85yCh6nPKBZYigHYy0xSydBY5wqE4e98epStJF1D53VmCofLrL0GdxsJkjTDCYNM9Ley_YA3in38CARWAcjqv87X76ERh3yKFDn8PCXkR8OtqhSqJT__6e8_Ukh5yk14xYU4V_33Du02F5lDuph2sbEN4BTdXYYnr6S00YzfBfKHrIZpEZdwWbaiU6n4BWFLc22Zfns26xVk7N7vapeEE1_qbdEPnDDVvr6rejf8kqXNOahhwGijqGziVfUcfM6COGV0846qujc6glwVeK6kRY-fn8nBsOjJoyecqU_2b_LEs5h-w05B5aRyqo5qatjEnYFw6Nw-vLuXWUM_72khebsMuRyNHnlbnCq95VylupYjrTewbBXvHuFnYstlIS6736IOAswYnEZEffxDP4eQ1H0p0WLNOkL6kaSo5eO3u4J63xkhVaVnr", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111336788734151075480\">Mạnh Trí Nguyễn</a>"] },
            { photoReference: "AWCwydhdYkTiSZkqMWsLbIlVWhw9eOAa2zp8aC2LJ2hDrULPcYSVwGWvMqN2Hyn5zp8T7YdWFNOMZMXFTIMbgbR60DnbLUDG5f88hR98TO_aV7V1bdiZujzKjo0B_HnXgwBMnKgLeD_T6ktA6i9g2yAO-vjGWKQFfJ6A7chjdx4IJT33esU-WsKQ3dT7MADe0HvlQLvps3tp01MtrLwDnliC3dBM3wC7u3PFW24WIpqpcj2XjmgdQ-kivGjAtCakyX69DLFHeN2gVTYZq4oV9SMGhRiHPqxU5elI9oLkokgiISm_RMMxqxTTEJbgFrZTEZ-KPCY1guBKtCftc3_WmgCyRlx654vurpkq50nKiwrtpZAvJlDGHy3cbn0fa9D2hi0NDHPmP0c90bsjKZmW3ObqTflLUOgnLRK6DK1RCGDrXiU8tfTU5X9p9kRl6fzcqbDO", width: 4800, height: 2973, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100337099628393574434\">Thao Do Nhut Thanh</a>"] },
            { photoReference: "AWCwydgfPK2KAaUS3Q4JO4KtcnaEq4JMMoisrMcUmhCKqoi44ad_lbOUYECUph22uumjC-JdlrXONcbi55FSgFGLKtrngA3_sbBzm_vwdcSsbcKogHkaX0YAwefWmYlnnbnNMn7Jh344Zl1GOmBhqGnbWI89zJU6nQm4X24Ilf9eZnQbdgOMZjDniI0xKW3tHg1-_wZHG_HlncZIDkyt8okqvQ3fCg3Pqh3aZJiTRFlelSklejWWxn2KGQ7kYA36q_JGYpR1MdSL-dlRI7zVLnWzCrYca795bWwWM-16nQRfdAyqu-TJWbiGdtDkCBIKmndZpzSlMGKpT8XmoCqe8R5zf4UUSXI2RMLUlFbuD6ZOfL6Pivzx4XI60T5FJFVgWbpOP0MZNk5GttpmzzfBXjueic17ocsN2Wq-mnHB6TQ4VhJ0VrSXtm1lNlTwRvJ_zR0h", width: 3024, height: 3632, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117288219954343502248\">Tuấn Thanh</a>"] },
            { photoReference: "AWCwydjm23PNvTs8H6faZ0Pp0rejHEIODA3ZHC3MRC7obDEGeUPbXdmTvhU8XoXtfVbxBOej7y4Zpji_8GZFdQh4kpU2wnZUMOrcmjt77K_wHHZXRCd0NJv_KqotdhZ7qRaWaBGCEsH3E9YWc2NHG--1Y_CPVr-Oodd_Dv5YXrsFg99hT1rjg40kv3yEOIVQRxsYKxQK4Nlso5xDoBEmouJMFJNtq_hQRGQ_LcSLm4bgeZ-in6hbLIU7CLnP56_Dc8Rz--SmN7y4VjX9acwIg7-IJqyfLrOMUKiBkBKczVuMaXImVJn9Rq9kgrbTX68Z4yWcGbh9bV44vNwu8hotcFfbSFdxLKinUgnTaR5BdkT7CFYxFwiqcGiHNcAGr5EvyCpIY-a6sf_qZYh9CXN8__qM3YW5jVL0VoUqHHBXxx0IDGkNihODLTBx9gJzT1h6egcH", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109404178565132455193\">An Quốc</a>"] },
            { photoReference: "AWCwydgM4lHo90rWumO7BOH39feWSwM_X4V6cKieNbDyrqGu-5oMwcGvHgA5YMRdFP9xa3W0Iubz-EYAYFqOCus0BfNk7dgCqT10hPovifNQBqSR1e_Wdje20NfJ7uM8ZRlcZzFFtjATyNjLtX86vr77HDz0hQc7II_zEd5wrgN-wpnCBswg_gEqlrc3KqTqKk2MODCAAM57Qb9He-CNEB68CM9MDAN7bkDLMK3hmMlBGtK0-AjdJSKi_Rp1emH5Yq3o0YAp76uOyY3S7T7sL2_NJv5Ba0XIyd1AYdueooCrd1nrsJ977fIfrGAGk3ezv3ouVfyEicgGclLqThWN3bzDq82Yz14K3zu-vpcbMFyIJko656EbxySIy6Ja5LBl4R6aMKmDiyblJlRsQIPkxkjtHSMnUYg315Bhnz0VgkkHVmcKQBHKv2gUW_pHmrLD9JpU", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117288219954343502248\">Tuấn Thanh</a>"] }
        ],
        summary: "Ya! Japanese Dining & Cafe 기준으로 확인한 나트랑 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["스시·롤", "평점 4.9", "나트랑 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "스시·롤", items: [{ name: "대표 메뉴", price: "₫150,000~600,000", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=4993998049791800181", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%8C+%EC%8A%A4%EC%8B%9C+%EB%82%98%ED%8A%B8%EB%9E%91+%EB%82%98%ED%8A%B8%EB%9E%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "짜오마오 씨푸드": {
        photos: ["/images/nha-trang/info/restaurants/chao-mao-seafood-nha-trang.jpg"],
        placeId: "ChIJl9IKarFncDERTt1CDnomVes",
        placePhotos: [
            { photoReference: "AWCwydj1mLTapeWmhT6FLCxI5dtsmX4IFAlP8LKpZjud4pREeAacitr-3g3-oMxryaCD_OaQaomasneB8LdNXEptc_eMKg7SbiyaPzTmSUX67UuittOVSgvL7nxw_6UMIHd9LvVtn1wE_Y57Q_IFdEaoCHigeri0QIJfvNc6IvF6lgSkbFq79kIq2kzKEsoVqfR94pAJ2pirqhjTFbMVisFTHiBQHBdKFagnJ9cC4Is-AgcK1xWaAf46DNkG9id8RIVlqzTCOGRvgCAFMdIja89To3S37boPSnW9BI8alzRxOXBGf-Tk4CDoSoyzKnj1cGd7C5y0g1wsOcReb3cXzwwcFKGPAd8y6onqwFwabdLeXK6MDFtIixC8sZVc_xY6AZWNX4p-LeLa8R1gt8UICi3ofwhiq2w9SfaYHjE5jzrjr9m4o3QCgTGCBmUu9_vKucYT", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116539475460670105380\">슬</a>"] },
            { photoReference: "AWCwydiiudrI3du3P_5Cebce2g83u7EFJhTfn2-VopJDT5xZ2YLB0Dnxb7TLLifU2bUaE0edjQHOeUjbr44F6Sf74eLLoJlpaAXKn5fzv-0WleXh2XdlcSZEBBL7wztGbKWUbOza_jNhhjBXI5mL8o0eBDbUEmvt2SLoEi0Qbj5OgwG7F_LhNPRmvxk2ohZl-5twyq9bwt5GeTcae1v1A7H6oHv4O40FijI15Vz51FaEGEQGzauKoB8l_p1tm1hI0jSjP6GzReUF9R-s44C_c7zjZJDIVwa6hTm86j-1lx0Bx-6xaBZMNaeZZEajKfEpQQaaDXO9hGG9N3quhHkfM81aUMDnrd-CUdphIU2lgPAejv1rd4DNUGAzMyOJB_Tpa_KhTODWnTn21RDam_ouJi9XXmJnfgIXLrs2VVF25UE44jhJJlS-IgKIlps-5WdX9Gjo", width: 4800, height: 2694, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118384342876843468216\">짜오마오2</a>"] },
            { photoReference: "AWCwydjjE8YAzcBJ-zFlIWAI0w27DsU-XJ3JpUQ05iWEtiY5BDa2kzPSKMbEmiN5UU7wGqArLQC2pruI-c5k9Qk6rLUH7VKyypLU7i_DdpKjOIbxZKrPQ_cLHBEMl3mvpsWO0JhlwX7D3JaQEfN5ZoWABjXgqC4wYk0wu3hUoHTsjrUucH0U55de6ipnZ-hGRoBIYerxAB0Ww9t1h-PpWN_I6UuTruko_8lNmisFgj8m85ROu_DUiBo99FIJjEwnhkudJqL0x_jJVDr09WhJTeXmfQBVsgRl0SOxu13pICc3xl0tOos4HpNZWFKroqkmlc3Tx9N_wbSd4PGtYwEtQdCLpQVDE93UzX8a8Xtkonej2zAiGKU5nds02sYdjz0DFSVwHmonzLw73QkgfzWS8v53BGK-kSQFXFsEMXmcDROSpPOPcTHV4B8pPMcurZLRnat9", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116804807543576274699\">정가영</a>"] },
            { photoReference: "AWCwydicpRWPKcaXtPiE4-n23qjact_ShD1zUq0--ClohLZrcUW4riaHnKS5lmBVkHaCGf1WT2UJsMoDCMDxXf9mmoOD2tR-9su5nAoHu5aduxaYJKTlD7L3cGpQF-FZ2xRQacMS9_GkaUivRpJi7c8un6vNRPF1ItW3qjF4_c34rZwdyJGucdMEPUM37e_aPE2qRxMKpoAXuer6MpPmxrirU2zuhnGzhdjbxFcyCKL5m0-NiRHR4GI_SHHT1JEYy-xg2Ed4XKIOmEJkPg6ceLzFPReV0ucUR3QnBzlVKbP4KmouKpcAdvUktkDjoHsp8WXk4yFQwOJbJFmq3Za2VxDlONRx6VzTriGY9i9rO0HRZeS3HTTGlzuZNLuEK72gU2i1mDV8OPWimIo8NdEAcDk0GhjjjhAw6zsF5XgFvIk9OuA", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118384342876843468216\">짜오마오2</a>"] },
            { photoReference: "AWCwydgw8amvIfTZvw18aMAbCClb6yN-PaT5knk8MfjqBcW5IsGLG-uCqR_KbYZEA3pvIn7gfS3EpQFtGvlYRaSRthsFsRL68vpeYjsb1NEwKW5KTsKV2a75FYQ3EeiBkcznSbWyDek19E0RSxa8SIfVdPbv0wkmuTvsUEo5GB4KhxEgm7xH3EcA9RRD69Rukw68HkHxSJffbz0Cq_UYMO-KDBIiqWdVEwR13Q9EUyMHZNSGoPR_rtVeeST7Dj0Zs_p_4Jj3rmxAsndA7aXyUgMjI3Ve6aWqopNK70i4QaMknRof2J1fzUoTt_L4sVUd9joROmMu2HhozH_YxE7zeaaSW0GROtQUfZxf158NTJf4Y89PmnHIxt23Nvl7VQzeIu4oL4N0kOaZmxMzLyIqmx0KxqgJlGTcdKyGzbagDBfiGUflMiD5Y6XuNcwhGbqWQPd8", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103153350109290563123\">도리도리</a>"] }
        ],
        summary: "나트랑에서 꼭 가봐야 할 인기 해산물 레스토랑",
        updatedAt: "2026-07-21",
        highlights: ["신선한 제철 해산물 요리", "베트남 현지 분위기"],
        tips: ["인기가 많아 저녁 시간대 예약 필수"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "₫150,000~600,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 12:00 – 11:00 PM; Tuesday: 12:00 – 11:00 PM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=12.2406793,109.1924411", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A7%9C%EC%98%A4%EB%A7%88%EC%98%A4%20%EC%94%A8%ED%91%B8%EB%93%9C%20%EB%82%98%ED%8A%B8%EB%9E%91%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "냐벱": {
        photos: ["/images/nha-trang/info/restaurants/nha-bep-nha-trang.jpg"],
        placeId: "ChIJMxdpUwBncDERQ9-lsNyfBcQ",
        placePhotos: [
            { photoReference: "AWCwydhB7eeiqCXohvgcA18P2_esWi4Md3oLmZe39dpvtdYlmJ7sBpzplePaKWcD1-jvesMKD_AjerVFR24l4p6wfy732lPuymQFYvibujWIrxY2oC1pWMVA0E5Gaur25WOFk6ykOYTIFR2DGuOdrESnPcmaQDV72Ii8BRdn5ITJRuS2_XurhAoAYb6BSAWtkF8COTpKZhlv8rFKBbXTQVvIoazWUtAUniJCZ2NAw6Z5_j403vDTXuCYkPFQvjtUwruvS9O--4-WONHCKymxnKTxzEFMiuNtk-mSPVun3JG0t76dEIdksGrQPJxXLSs_e5HDql98xE81CzywE5s-Oz5JuFl2CiOvGIdwRfqER-O_zAVZ45OdPIKsk6E9yeDCBSULvgRaJ1S6PDEgQBzbvD-LdWJiBYEb-7n2ks2rcQIRo27P3Vi2fRXJ6Tlv43wb2jYv", width: 2560, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100165892933036415921\">BẾP BIỂN Seafood restaurant - 벱비엔 해산물 식당</a>"] },
            { photoReference: "AWCwydgtBuqV0GV2dUJYlDJFwAw5-H33D1q8yTsqpSYHF4dbgULDtcpR53H_YQS7m_SGPaB7pvGOQvLv8AUkCkALVnWuEiP_QXfTPQFOBePFG-G-VZXfaW9Pnsc6RmCgA3hCmPG2KW6oqJCHXT-vqlFT6y61V6c0fqtHx4T_doU26meUBlLyuNNLpVHF0rGp1U_QTOBE1eK7Ef94oJT0ywJjq8qLehjhIWnhol4-ArbqhuY3ICQTyFBd66frx756_U-Vamsxe5lLs_uEy6IesC9uw7YhOuth8wtCBuzT3O3HGX510hCd9QEKv5K-rZYb-OapX73FB2J2UhUSAlN4ubUmJPIDZlx_iOeqM1GjQ-U6hxAEvXZcPVpCyrHjBDp4w-rHXuqhyYTM6t_g2_kn23SNYSrFIynJn4jbV5JtdnfliPvSFesw4eMf_BVRclfhlp-U", width: 2560, height: 1441, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100165892933036415921\">BẾP BIỂN Seafood restaurant - 벱비엔 해산물 식당</a>"] },
            { photoReference: "AWCwydgxLOC1Ja7gL90WRpPggA1CdI-8kJssPz8f01R13V2wqACOhoI-R3vTR56RH4C0uIJ5P2T5WUtli4V2M5R9FKF4Ptmmm4ohq0JDqyrNxx295ZXVbPg0fN-3qUugBYmG7fa11-NpWnOwbube7ZBRgnVfpJxaquyHSaIXmF3LSw2olGNWb5Ze88I2zP9KfxgYGL4C47ulfJ7W_S43oIGIpCcNfruFE24s1_ecEuf7w8ph4Y8dhDWpL4c-GsmqefppvxCrGlhWa8p2f6XB7X1odbZ4tsR0tjE-_rgt1-41drGqNSS-ZVVVKWuvJwV81VyHa6orOKxeePxmQYMp_FIVX2-VjTr8L0379MkmtPgzVJODQBhDEs693GYCd9AibwxvnNqXiRMGi0TMJ1KojNMufTwMZHcIKNVfpHASznCOynx19WKsWdnhO44JcSYuUA", width: 2560, height: 1441, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100165892933036415921\">BẾP BIỂN Seafood restaurant - 벱비엔 해산물 식당</a>"] },
            { photoReference: "AWCwydi8NnG9VHA4j-xNuxxQBtY98pvQ0N3vJkbo_HolHAH9pWS5U4tjI9GQ3LwiG76iINPbHuUw65WoowvSWRXG-CMqOo2Zbc3DoUq92a_9GSQs8r3c-Ko0mJDrEwmIOpqQ4SYq4Y9-fuPCuWKHZsp3w56y7laR7jUz0lLqVvNR2rXGpXAd5wMnAfkosnGt-xHMX4qz9ZQnPlwN7dcn8IodgO_VC3QKdjH_Tx3Uff8t570sV9ep4NGqmqURtdZ5ANZ-2lpiyXPWsO6O6_9ElwKHayuiJUD1sORHtGztxcvJXOP01gMpNqZ03tGYcIeVSCc0wHqbXP0eeisi4x6GzI7JCMtHPvSlxRk4hWXTYr5WkCeAnmNa3T6kfxy-csbvH_I2UwFnBePC2TYjZScahw7ZfQ_8sgJrgkNYLq_u1ZyiGxqsZTIDU1Sanwfpp35rcLNA", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106848527502935116099\">신혜원</a>"] },
            { photoReference: "AWCwydjYHsTMpMiB07f9Yp6sR7rQMzNh-v85MRV1wHGAZxnMechQUAkV9bZ7XIK-rgIlnfibcY8c0ML9wR4_JLecXR43wgRteo7PjWUA8El3Tk3-gnzDALrg1GpE7us682We14H-Luukab0sqz2swhQu_rk67FTd8PdJGKVtDIxmjqIEtkV9wO39rfHvOR0Cj6Cdi3OyCneqIAeZnxebaeeew4Hl2yPTb7bKzNGBC8m0IsrgzWO066SpF6YpCmK7ExbpBt70JTHpZXCn1ah5GDWpRFE7aswPvuf8zDcHaRqNpfFcwlaBIpNdPgWEx-2phK_B20Cj3kizjFZ8q63FU3EF_6AakQb__Zo2nFBpsY78zHOZT2yB47hh5Yf6_KACeaBiEjlO2WEwwE5Mte_BKIpxGC1u7ySjrPVrbmIr0jiZ3SFP382rUZ_SkvpH2Z1i2w", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110462445558732978073\">김세현</a>"] }
        ],
        summary: "깔끔하고 담백한 로컬 음식을 선호한다면 추천",
        updatedAt: "2026-07-21",
        highlights: ["정성 가득한 현지식 메뉴", "쾌적한 식사 환경"],
        tips: ["가족 단위 여행객에게 특히 추천"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 가정식", items: [{ name: "대표 메뉴", price: "₫80,000~300,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 11:00 AM – 10:30 PM; Tuesday: 11:00 AM – 10:30 PM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=12.2417798,109.1917081", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%83%90%EB%B2%B1%20%EB%82%98%ED%8A%B8%EB%9E%91%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라이씨푸드": {
        photos: ["/images/nha-trang/info/restaurants/lai-seafood-nha-trang.jpg"],
        placeId: "ChIJBaGTuR9ncDER-smXtm1fYBg",
        placePhotos: [
            { photoReference: "AWCwydi5zK11wpmXHIvpz9_xSPasIthDHhdGLiVYEPL7qOI-Y9SxlzjpMiHcxyVtbpDq6sIUEgYcI4bkv2VTP45BHL4wU8yzoWwE9skbqdOF8gQuCiFNzAUrVzgkFg-AgtMOkLiUNEMYiEQsqf3wInKsQ3xlQABwOy2Ey8FBNeZlPREas3Jltw3QmB9TQsrh52Ibvoo4FuVH0SpxQ-PTYos_6cslFG6jCyd72k_Q3LfaZIbUCkm2G2WU4OXWtwPgpEAxbumLlNU9ZIfbpRuNAyaRVolqVr2bWHiZA3Q461yR7AsvYKbA4Fs_eL97v-6rE-Up2Zd6w0l9UwAlwr1qM8VKle0GtzbuP4Wx5JwOUXATyzHpgDY-W1KK52uKLtr5Kb3MhdRrOdyU8CZNo3KJDk36oikzpFw0qp2pwzMMNZWWirnsxkFn2HZpGqLr-3fNmEhh", width: 4800, height: 2694, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114991088959407429100\">라이씨푸드 Lai Seafood</a>"] },
            { photoReference: "AWCwydiTjGh3HDmwFiH2gxxS7l5r07FnJbgeJUYZ50vLa_cWv1MDqNp5Gft-WjjKy4FNkMynoOA-Ws4rksJGI-aiXCZOzgX_mvD6B_XDMdZZwkuQa2qNyS03AnCWMGg4BfYXDeQmG8zObhOXS_rncVJ97j4n4fDjB5buFlOE6z7aaZkkayzE0WIE_1dtzlCucZnW8HaslUwtMrnYQD9KwVTv94IZkLOcz8kXrI6A-MWN7u8f4_NjOjD6a9Dz_kvBABKg1WGubRZBoLP6w9sQk0nn09n0ejWzXmSg30zlq94APFoFz5hIUyk27LceaRuDktrGu8JuyUsbDyd_eiQO4KiZM4EZqMXf0nNoz6XRb9cmd6o5Q9JinpbLkVSnGVqEGknJOxsfnJB1SHDm5c1tJvFFyi9pIGJaPn6Z-tr-THlA-xo2BoqLp5XuhrWl5dT2hF2r", width: 4800, height: 2694, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114991088959407429100\">라이씨푸드 Lai Seafood</a>"] },
            { photoReference: "AWCwydh1T4ocHkkKwINdEQ2T_KbVRXWj8PxJW73NU5tl-tKloCxoiyeSNg-DUOcMkAUk7fGg5uo4YLSMIT708pQtLg3VFobtcTVoCSOth0g85j51PPaiDsiRMqNltMWuk9R31tJ1SMqZsb1feZKfvuUxHAMAd0UoV27eIwdHfKQkslrOS5X-MI803RTcE1br1_Jg6RLhKAfUDxO_gX0Pn5b_jNrJu4GD9hXI0dE0eqdI_5D2CJNl11DF4MQQ8nPiyvvcbScEKxhCI0Oy_JYn8ZS8oZcBOds4EB1Gl9CfdLX8Sxf4l83OL57G-0HVfIty2yG6aMydxO8Gwq5tX7ATr9zGDb-vcW0YIBbtoRnY6s7vrZvYR4Es4x6QKz_f_kOxdPMHgpZkBmqF-FJ4-2naEI51kUlYNtja0Hgk_HVx5n6hh9NNk7K7-Lnm_dF1TFCfrDLb", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114495496024891001021\">EK</a>"] },
            { photoReference: "AWCwydgYronIHaBiSKRtKkIq_oDHcTnappwtdJP_v2iQl4LQYdYQ3ewJ9kRi5U0sw-cgfkn61kidYDTFPtqdgDUu2vRI67HZYO9_X-QwixSTysuP8Ta8LF0bzaUT0zPSU_ovopoSpivjuNmkEAwu0FY1oGPnNti1GrTt8GomHDntkuEAuTFNTvi17hyge9UwL0ZBVcmOfOl_N5LJspbB4PvFQLniqxPu9ucezeO0jIr7ypcIos-SfqSX1Rb0WUOIp7ZcKTjSoYQj8ReBN1UqAnei8Vg7TOAB1TNKAdwzKo6yHpAtaKgtUH9m0i2-RwTmBxPeIMmJf0YT0QbKvT2BqzciMJbWEbk65rZSfyE76hRU-GqJj1C70nrO48OSM47hp2F66s5TSg3k5fpnYdOWnY3Y0vQPts_JvWnQ75OQa4GBgRFXbf6T88BaiKYU2Bzj5KMu", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105390386884791211033\">미미MEme</a>"] },
            { photoReference: "AWCwydhk-CtLAtWhJW0sM7resiDrLXNvU5QM6PPp8JLzWYzsjvwIeo1IYhCM86hTQNKVrPbLriIyl6U1yIS5-nhyUD31p2iCafNUZGQMWwrhu2Eg4tWMxBZAviMa83xrxFO89nczy9wkGRAFULuvwvw7MmAakHRvsbudvI2iJA3maiwW1r2NAT_0EPjCPp2VwwNHlAtbrdlr5FNwCcUyKyivVQNAIZh_11smXPBM31Vuh86r7bRPwAAFcmXp5tvXQVv38eCOXTnckfQ1rVv-Pd4J-ED4-gJdpxXimi4-5sLTfH_pfv-98Px3IW453fLP6SrsAGv6yUKBWC_T6M5PB5e8EwjH5aHfHtMIrD0RQX7m344gP_iw8FC1v4UxhNeO-CZGyvSJJ6IekwwDKz2wSf9BxS4U56tydHbarbVl5bGB-KtQ_w66GTT0_h2aOklWXGo9", width: 4800, height: 2694, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114991088959407429100\">라이씨푸드 Lai Seafood</a>"] }
        ],
        summary: "현지 느낌 물씬 나는 가성비 해산물 전문점",
        updatedAt: "2026-07-21",
        highlights: ["신선도 높은 해산물", "부담 없는 가격대"],
        tips: ["다양한 소스를 곁들여 드셔보세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "해산물 요리", items: [{ name: "대표 메뉴", price: "₫150,000~700,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 3:00 – 10:00 PM; Tuesday: 3:00 – 10:00 PM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=12.2341867,109.1947213", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%9D%B4%EC%94%A8%ED%91%B8%EB%93%9C%20%EB%82%98%ED%8A%B8%EB%9E%91%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "안키친": {
        photos: ["/images/nha-trang/info/restaurants/an-kitchen-nha-trang.jpg"],
        placeId: "ChIJJbcQ2N1ncDERrLWX_tKoNJ0",
        placePhotos: [
            { photoReference: "AWCwydjJ3NsJAmOzTH1lVqhC_9JobD8tF-dKsX9nsxds9FPXnWYzLz58xLkCLcv4IAP54B5NWowthIfc-86xFCF52CFukgZH877XAXROEL6NEMbNr8RAyjIn_GWmBaFv8yW75qddHRANQlr4zNz45LYwl1llGHPgKC00cPxhapsM4jvpIzs4q_38Jj-pPlTXZQ1g3r8e1cBVih1jZhXP9_RjbB6iCUmHgWO6S_dP6RI8hOMnd5iiWqRzoYFDmqAO4sQJhNLvRmwJxVztSQ4zaKyrtwdY9gcoIav1bedC2b88P5iPy4ibtiq976M44lraYc1M190EANmMXq7aSF8xnw-4PPztHvxfmBTGvZbuWwOZINPljnpCaE_Fs535BLE8hxswchrSa1lM01q1_n04ROPCygS4cvarLpJTk60Lxfy-p047QB0b8JmVa0QeruvR6g", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108731020926097990162\">윤미경</a>"] },
            { photoReference: "AWCwydi1wqxzLOpX42upx-k4x7fJdjIRWUvMmGDz907cpL-wcNF-u5fvz-9JQZ8s4VQq-xZysz4x-oCk1MyPETX_IkG9lU_MBbOpM2cHehJUnFBpl8xDNZdxkhZoapYTUUwnn0W0OSbKJdaT5Kkdin-jUEnzSqutG-V6vc3qWkrZl3a8jwLgflq6ynXTVUDV4R04onbCNa20ohK_xox0wOfGkRXgySs66zr0S7___oVl42mHkh0ZKatPkctfWZZJEe3P5yUIPKLhakHxVihETg1nkRO7vunv90vKgSnDo1pqk_HNVivxl7TSI1jrLQzpDd08LaWLsA0nq2EoQ-PLIWTqKop3ss0v7pkO1WJIHltpnh4cJ8PEvOoV-VLoEME2UOOLdpIJ75xG3PwbtaXJo7AkDHkQ1OX8EJydigljHpiI88Pn9kdnQOnZu-7cu7ITqzfO", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109926275313969612660\">박민경</a>"] },
            { photoReference: "AWCwydhBCOyGN8Yzc2vJZDKjQN6BxW7eazFuRhP1t3adbqdW9ABVwdJStJQmtI-XA-rwWRJ13oYuT36QlVnoc0LMNJuV3EAXwmXQj2hiS7eoBhe530115HFlvNb9horRAPYiJpkIJuJOvAk5YNSqdpOTC1JYVdlFO93E09d6dEJDTY2-FxbLmeLtX1gTKThjqjw3vVSLsHgDogS9ZU-7FUKZrltAduZo0Kik6HHCqJVoBuxu_lAiNAJ2Ry65ai1l9wVmhiORaIQRKRyvWIb6HV8aVCOrj59G6LKfIjwUsIE7aM1RGcYrT571zv5k6E434m785tNa_V5f4pauB6H5fEhLWTdt7UyaBsG4fmdzMoxA8xEy6Eir5zdv7-UqZziEJbbLExbBdPb_TEID4lY36sXj7zzl-fQVIIi9-OS5oK2gf798fHkOSOPaiBqoyTlUb7tJ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115986218764369049701\">오징어부인</a>"] },
            { photoReference: "AWCwydhRUapoQ53z82ySvE3FQfiJw300w0jADq9ind847y-EFk8eAI5dm209dH2UJjYMKVCteNmOVZk4Ex4gDxz9_BlGJxlVcKErejwhXKmwpoDZIZG4ppUBK00qjJNZSxkQc0U5YExtRdw-HBSc3Sz6MHEXVGOo2PSwJ_pw_dOX8hwU5QX7U0LXjhhVh2y9U2FwlXQYPp7rjtDMu5tlKcqeDDS-L85DiR0sMw8UaRn93mgQnB-LdVqPNcM-7nWH2hiszbML_xaIE2ygiJthWISucyWgXx8DCvY8YFK5CnSflmokOq4v-ExueoPDw9XqrcUoyf8rF7mG5zCPBPPdqOqvOqMgYrGcS9A6Fi7MwKv3oM6XrzNhAxRZL8lGPZCCK9AjXi7-pH4XA2LBIGEG7BF1sqKnTATmKft9nBXyuT_7Jmuo72sgl7rCqo1YmROGTEPh", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101731737235224331406\">Phương Lê Trịnh Nhật</a>"] },
            { photoReference: "AWCwydh-qp0dyl953nFDQmk1rIjozaaGpcQbI1kj9ozR08KLdoEq0bg_etGNCBp7hqFzKcT6iWxxmmMAn9QLYRV9qaG_vG77WhQmQdp8bipZp7pizTOoKL5FSB2uGBLN48XnrgOAVzqQsME_Igv_ufYtf27UEJnrZAvI5uhPtPhseizQG43c1U8GZ6QJU-7jRCI0QiwXXnmPlDj4phu-45SoLNoyC6PU0EWxLkrr42SiMKuVkfr94jk3LF-cICuZAMzlcer51Gc45dIvJlCFjwlTJZvuaDMZ12j87ZqvHDpjv5KbY9Fgz5SZBgii_8pS01vog24Csf42YqMyVRt4cW09q77VdkD-OLrRE2P-asH-6Igne1kYZbExU-qrizLBm8pcQdYJiW-rKVoO-cdbz15ysJs0VFrFjp3jiY73INX8wQs7_LdZtKdGwsKlVNLtxQ", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111993171172812013578\">김미해</a>"] }
        ],
        summary: "나트랑의 맛을 느낄 수 있는 깔끔한 레스토랑",
        updatedAt: "2026-07-21",
        highlights: ["다양한 베트남 메뉴", "깔끔하고 세련된 인테리어"],
        tips: ["현지 식재료를 활용한 요리가 일품"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 로컬 푸드", items: [{ name: "대표 메뉴", price: "₫80,000~300,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 11:00 AM – 10:00 PM; Tuesday: 11:00 AM – 10:00 PM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=12.2417827,109.1914829", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%88%ED%82%A4%EC%B9%9C%20%EB%82%98%ED%8A%B8%EB%9E%91%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "콩카페": {
        photos: ["/images/nha-trang/info/restaurants/cong-caphe-nha-trang.jpg"],
        placeId: "ChIJQzCqZzpncDERaqLPBYsPyo8",
        placePhotos: [
            { photoReference: "AWCwydg2kRnjL_9fh3WiQMdKO3APfi_rYiuLDxYFoaFXm0jLs8X6jIcfqFedotgjnsre1iTGsIpB-9dsvDZJwza7v_rNyFqn9yvZ-lgdG75dqsPoqiMx5qllbgTZxm-xdR3fiKkVGMuM7cchbn8QhwHJG6zwvca2ydlKVM95jQN_hW1KCp73NMu3hJwzCZc2yCPvNo9JQKIkfpa4tx0l2qUAzdzplkk9KF8uKVsJYTh9fGonWHbUK5HKAIQ46q5USemf_VOFd2nH5q_VQnaXUYpdnXcBgVaSz0T-wtaqABo1HWNFqttPuYAq0fzde2c0C4cma2Qn4O-dIUTC-4nR08ItnckDhfgbT4kbUHFmiv3mDxXgMc9RlW4fbXFuRB0-7ITLWUaCYT6d5E8icDB6sVtvkGDFkBceMPD1bCWhZSLYjzN2CA", width: 2048, height: 1368, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102110429503568389698\">Cộng Cà Phê</a>"] },
            { photoReference: "AWCwydh-cbe8rKmpbMQ4z-9DVnNppCd84wITAfMw4F05NP4lQpIpGl0VPd4tkBXcNo3RCDPgr2lNjSw7PC_ZWNtjdlCzyH8CzpDe-HtlanKVNlvGllM9KvuMTDws1qEDWs5-fkshZirNdY0-USbMbz49kLeykGZxP3PQs3WnhxJiN0d3jKf4YEzfxDfyb-kB7LKxwDMZgsUsX53q0JgFdm22ZH5-JlbNt9sLRiyR0gUhwspZGHaYKdFC8ah6RFDW2SDMRXGxQb-MPcRel6RnFPdcBbYldwoGQAdq5upLzEfrOgKJJvf_RrY3F-UxFNVx9u8-Sx00C4PwqaiI54IqFmoZFu8GyCIrkU-MC6ovPIA5dR4ir5EjNoPBTNu3QHOLizYgqruK5w6EGicr7jwNaMzomI9p-8Crg_Rg4xOHq4HfG23liw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102110429503568389698\">Cộng Cà Phê</a>"] },
            { photoReference: "AWCwydizCv2atL-XLfLg5Iphbs04dB1c_VvtBQHV4k_zGlL6nRDw7wDmH98XpYU7Cb3xNU34vGuc3zR-9WQ75J6I2aORokCn1Q3yS9sPmAfMTgL7F9mDKbMvHS6kJ-QicIl26sz8DL2ItrjoGiAIoDrWPFdBXszrWi5HaTzuJfqY1WIFf1LcCpXt1Q0Yk8vuROs5svxuhklZpSjFNyaB_rCEpiA0r2hiwj0WbIpwjfAfnyBx3ESA1ODX4V9gRcnn_kQ7YPWo4enkj8oqUXSmbAMM7UxhTgP0b7KGUGLOBVkNS_sadCaBwWHZUQleKxnGGZbZGybqwgdeouawVqdAD_V4lu2G-1bKZ0OsmzIFxqV9VdxexEkn9pIgPe-sGLsApDm0Qerq6gavSLWlZCYq0XeJ4e7eVLbixpg-nKbaVS8DcxAs-_nQefEG_dcGdzK-d3we", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107049181491225763215\">B.S. David Kim</a>"] },
            { photoReference: "AWCwydhRoNtf9LRfutMPF9zSUKCRM1mbwGTvS-f99CW3ZNeWOnf0VcJ1yxVga2Il_MhhSEJIO_0kn98qW7SLKsbMAn2AdKvOQXj4hNb6EsAVRDf4-D8YuFS1k4oxpm7olJDFlK2iKaV6CcnbDvJscu2LvLFsrf5oh5RkFAt_h9yxDQ8RP64AuemPFewT9BXL8DeqaekmVHm5aBQLX1JpoMAlQn1dcT6Li8cU_veuhLaSUMxOrnYYMiabig9zuR4UVaYCQ40JgJKikF7I-xugIEVIxjO8TXl_7qh3N4NsvBDff6TMZYrdAinGEJrVw_StKuzJwhmbd-A0ja641eK-rrZSawbXplRu8qgmA1zw3TMSlcfB_RcJGt-eNybzJzZ1ENwiYa5bssDbM6JpUUfnWKYtLv-d7pyVp8I_9-mnHlGE4yuH2YXG6HUtdoEIyoauXfFl", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105112465013643799916\">수수 (Susu)</a>"] },
            { photoReference: "AWCwydjfJTa25oN6mt5p0YdGjJSOzEguDoq-0XmucPR0acwE2qqnzTpRIcu7i7kIAyVhncj4ABFVQIBJsDak1fOfO2f7iS71jRB_JXzliArIEJVEFBvs2-Xsj0No-HUwBKm3wGfSaTEUjjy5K7HlCbwslVzsLpo27oYFStJLTGHC_qn0js6Z6ETvkgJPH8xgrjXFweVLoE_MiCs7Yv_LU37JBa7LrwDCrWZokP35AhdPh1pOr9lNPf9U6AmM6k_oCJPn0SIcsKjmUa3MBjP8yPR7g5ORxAMogjbFgTRop3KuHW11cVOR75jXuUaH11v_3gWVr-dVocI4YSJqcPNcfbctHyUR2oqJVzD6jws2olAICK8_HoGnK7MRIXe7zJcU_THPwYitlEX6G2xfx-feEr-yX0QdjfsY4DwDvDo_1sci0lDPeZb0OJrcYmcJKLX-K9rE", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103628332679930508812\">Nabi Jan</a>"] }
        ],
        summary: "코코넛 커피로 유명한 나트랑 필수 코스",
        updatedAt: "2026-07-21",
        highlights: ["시그니처 코코넛 커피", "빈티지한 베트남 분위기"],
        tips: ["코코넛 스무디 커피는 꼭 주문하세요"],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "코코넛 커피", items: [{ name: "대표 메뉴", price: "₫40,000~150,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 7:30 AM – 11:00 PM; Tuesday: 7:30 AM – 11:00 PM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=12.2382683,109.1937485", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BD%A9%EC%B9%B4%ED%8E%98%20%EB%82%98%ED%8A%B8%EB%9E%91%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "안토이 2호점": {
        photos: ["/images/nha-trang/info/restaurants/an-toi-2-nha-trang.jpg"],
        placeId: "ChIJWWNXRwBncDERgX3fcDRSlHc",
        placePhotos: [
            { photoReference: "AWCwydiCobsQoX6MVEiu_sEXtysmM5rTLAdDoE35SubHj8qQVcmYs7G0u-AyKPTm2THnLh6i3rSMrH0rAXlkTr8Ul5R8loq1D70pZdDnrT6FZeGkp0FhVCsqQUIQ0FTOMjjusRAD6Gico1fUmrT1AuWL7GuVQjHLgc5Wfi2WZ0zFoFfU51FGXcu1QjPKLemPWW5yocxk4mUPxcKzZxSDgItycGDde36xjgFHP_YGgriX-n6Rq6OMV1RjqSAozqwTVJs7iIm0iZr2DnIg4pD1Nj0GmrRvPrnA4SMmt9n1hicraxaYYaZ6Lh8CNKv9LV8ynVcnqNA0Y_X_4D_vKCzbCsZwsAE1P5wC_feM43D6BvlGcacaFUu5dtVsEzNILHN0uScceMxrPGk3uJcp3YKYQ6O8PTybFfNf4XMW9FloTd8evFJA6QnlArLBzHE0ldknyFSO", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105105491373707259415\">Ăn Thôi - 안토이 2</a>"] },
            { photoReference: "AWCwydgEVoIXAsHgqwQIdqofY8Oi78wgej6lyhYBs-17IVsCilVakBGniCluDxOauZ80DReiAdtBCdZVGzBHbsErm575AtTTPBB_OlLWqRWj6ia7epGhku_HKRX8SYKJqmoy5moxcInPmNu-o2mC0Q6weg37HyHecL2BY8JgKczkyydew8dd5kSOwP7ctl_4IH21L6Iyri18HThjvjqDG0FRbaguElvtuQ_QZiXbbJ-MgQOiYOwgjfBdffZKiVePryUjmgrW_2kMEf9ub8crTgxnsYdJ2qm0Bz6F6_fkgtpTauYQZCatesZrHRXSAx-TQeStGojP-b2qS3-jWqla2jt7awJ5y4Fpk-rT6vbvMw2iBR61bQi9SDO6IUKKlZkSQexUwESIIK1FiMX-jDgC2fRLeGm-ud2UMFbfp_D_r2-fXYB6T3yYWrLJS9OJoAfKziMV", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105105491373707259415\">Ăn Thôi - 안토이 2</a>"] },
            { photoReference: "AWCwydgvbZYUWuv7wY6cX5b4l9GfU_U05yrm9sChsPGTso-F329GITEun3NnVC5iKPb56Ot6Yijd6cezS9p-W1VMkkI3gM3RHOGz4SwNQwJs6nsta5H4DTf7c0Ks_PaYv67WfHzzv3LM5UvpIrdiVd3ZrfhBdLeVvgYGV6-81B8syZPYgtchoOyGhG5iapA5vblhBr6mi79yJih3_RkBelZBqirN03ydRCDxBEMPvbn78ohOkR4zuMP2taBNDq_-dCwcqylnfLPxe8TmBtLMGQwoK6VGic0VIT5YNFAPo7f-ufDqRWOvwWFwnMVc-X5R_0l3PWOLCk0YI_91nBePQdRjrCOaRZa-Ww65Sr5-CQSqnCi7-3VkrYKoxEQMAwoo99WbYjkDLIkOw6weFx84Q8uG-mtEspSJMig-fT_bWjkFdRTA2zb9eiRrQ3CH5CCAdCK0", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113752688671288978416\">Jong hyeon Lee</a>"] },
            { photoReference: "AWCwydhokKBQ0La5srY2sM5HEaW3CNuStnRg9EGanmPHoQkBwNmHSR0H5IfsUWz7lH9Pi7jAoLNDysu14t4OHIYKDKlhzCLgpQWWupqS5IR1qItCBRtj5XlR0XWOjyKYgQjJ7eHIbnurxTH4ZawJAbfm5GiM0Eav5Q0nYa9KWXbplUoAdplYZsCCzs3IjRWf9RMPdAPLnwQklj0oAUjnUgfrj-oVRQvk2lTjUw5wHXo4lWk7xaKnZqrbNWshaolZv7HvmQOjK1S8lVHVZ7oquGDEBKv4wM71q0xcp4FhvVvFoYvWJWGRAmFNALRrn9fVCSFDNfnbdE4NcQ12fh91s9GW2J8hlDblNt2oH3mXivIxEhyVQtCKEO2c5X1dkHN1rvEFZaQriM4FqrfshjsNen5pezej1ccQnjHyPrFxeLfBIpfoNgbJuw8FzXJuM9PZhJRp", width: 2000, height: 1333, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105105491373707259415\">Ăn Thôi - 안토이 2</a>"] },
            { photoReference: "AWCwydgT6PH6EGrCXScfkXbpPdK9N2fNxQVr1uAqaxR9pAJnvyr9Ys0_QYLItA38HAGTPWBa9quisY6tkYWi5QRtRlhvv0lwPKLwLL9a48JeZesn6lR47HbVl3VXKkpfu5EW3-JbRThAmXc5AlTDNAy9hQ3s8p5qwNTSgLm5PfrdxPH9zTtigMYaCwK182nDBMjWjdQ8FM9WjMpqcfFssThgbZ9G5QCrY17UZ9-50lRH1O9gbRs30x6fK5tL2Y2ljDTS1Hu02CBMwxSk3xckUt4b6fuCG4190_eUvtPTs7iC6IkND46cuLpuRnAT-kbZYv7bkdNTHxLu35uqi97B8fe8CBMWHNsrSlVoyoK8GxATeCa4dtuavoe6_eVtrYUhgw8KdqwxyAE3agQoCSMhtgqafZvY9YXz8SMG_1wB_pPWrgBMpziZ_UEzQkbolZKleVNP", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105219693979310136285\">Jae Son (제이)</a>"] }
        ],
        summary: "나트랑 여행객들에게 사랑받는 곳으로, 정갈하고 맛있는 베트남 전통 요리를 즐길 수 있습니다.",
        updatedAt: "2026-07-21",
        highlights: ["깔끔한 현지식 메뉴 구성", "한국인 입맛에 잘 맞는 감칠맛"],
        tips: ["피크 타임에는 웨이팅이 있을 수 있으니 미리 방문하세요."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 가정식 요리", items: [{ name: "대표 메뉴", price: "₫80,000~300,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 10:30 AM – 9:30 PM; Tuesday: 10:30 AM – 9:30 PM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=12.2416163,109.19164&query_place_id=ChIJh4Bjsw1ncDER3mheVtJlHtA", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%88%ED%86%A0%EC%9D%B4%202%ED%98%B8%EC%A0%90%20%EB%82%98%ED%8A%B8%EB%9E%91%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "CCCP 커피": {
        photos: ["/images/nha-trang/info/restaurants/cccp-coffee-nha-trang.jpg"],
        placeId: "ChIJx5EjOw5ncDERCXpVpE-lRSI",
        placePhotos: [
            { photoReference: "AWCwydjZP_MDSOa4KMOjY3Kho8sZvDS1oIlzvWFxasLskNVQbgw3NqXUS-Vfo5Fy0P6Z6ixndytNl5LonMdqlEgeRtfc2dTz_Xqz3ztIJ31h_ola0L41OgSH1bnA8BqJi5KJjzG3F-le9yfMx5Y2p_etvI-MdT8e9NxfY82TbBo7kZ1k4Vg0BaYytUuVrJ3CAKJXnGayQtpYflQYbMqrwD2wSrq_QaM2_jCjcCx-S3s8njSywewZ-gcYK35qFBOXd7UHwdcyegu69HhdRCYftiAEiTdd0dn9B30xwGZrJg_zavj-m-82vps4ubhnEzDZCOnb9qrtwFI6PYS6TcEq1rWeR636ChuCocK2IxkQz_HxQXAF2M59-99RrSGnv4EyChhHew6iA8C7mUGHiUg5c570YADGRZ2SCLlnvXBeC2GIMq6COQ", width: 1212, height: 810, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105602883399519552141\">CCCP Coffee</a>"] },
            { photoReference: "AWCwydgraE7EdV_YshCzxi7aanEZUdqurLg_CLhfAo42Nmg3lyZCET4qHhcV5n4PzLJjb8yLZBStu_4ic3MiMUw4Ct-LvxTLQ0GN_GFkFm6O_9Q3obGjJFRLfIQRV4NREJUKCvYISBQyKlr7tZzkaqtkbeF5LwMVO8Z3__wb5LIoWZjA4JW7EkfF1A9rgMM5Mu2s1_A8Yo6ASurqXYxYAcvbrjCG6EVw52VUWwUQHxs73yyyKH5wFA6quhFOBsZOCulD6u3wlPdGdidNKIfG8OXhfpKRrh1SPbz2GgZIAWOkmfXKy0G2CQ3U5fqdhYrET7-ci8fem3sVzeskdU648JmEBeeR5U_x2UHO-LXVywuj8-bcdli-oULyuczhFpRbsmue5C4w7A4ZNN5fIJpc2icr3Y3gCxe_GrY0MUstpb-rHgNQR7l7", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105602883399519552141\">CCCP Coffee</a>"] },
            { photoReference: "AWCwydi1NhX2RHOlNTAsYBFdc8cCsrmpAgmkjZ_E3VQ2DkiIhwHnSm_WxxuOlKdP66RgXKV1Z_woSLZHrIPqg0aGtrWXgW2CIamS0zFPqSvVkH-s1uboMd9HcuQR_bQS2f3A7LSnhoIazq4w-upXy6y5c-Z90FfKHzThBYQ1VEbhNVlYeMzsuJL6RObgjFk0axFgawOdUPL2tfPq4wp8ieb8Z8eCtcSRTwCV1Pe-__8vQAFpj6sckWcnoeWQi2hnP8Yfxu5LmpKSFq27moQMO4QNnV_MlG-b1YzDEQwOxXR1Tv5-sq8bbO3TKlj-QqLvct81dIZhWHoiJFiORJbNPim9tzmxutiINC1NcFT10Ef3k8egZNxGWhzdPyTW158v9uR4oaatqmhUJW2GfRgCWOSfxJ0BZ4hUlzlrwmsDed8Jtc8Dadu9Ee02iGG55lfenw", width: 4284, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105520877315510960951\">Sunny</a>"] },
            { photoReference: "AWCwydgIrgO2XFzmLN8MWmogzLeoXR782Cwg4DYfUFRKEL0Rw80B-35AKzW9kPbH3kpfGMdxKO8_YXi1eBmPHhy2gh5KG0voyh_A9wS9IIRcXPjRd3PYXqR6cnzNgp6W1_1aGJGNgird4j_GQ-ZEgNggRxKfXx8d4J6yV7_P7m6JZY7aYCv920y60ZCQXAan0Blhk3ZZwzsafdZqkDSz7nt4LSAib2NaBSb5JOzRpS_zlwTPVBTQUY1fkqf6LD_Jt_JIpm27In20JXze6gRhYyKJe2TmKDVQ05RBJRLdKDRYUb71gudT79CWa-zBCw1jNMrmEv8spScPi5iCFBo361haSYr-sP5EzNyan3OAP2xmUf-h_k0QqUkdcDcRHPwY5pDz8gSonYIVy2EH87FUDhFj32CmYIFBnkcLHCGAnfX1dJ8jwW7iKeAwrOYZTh0HpYR0", width: 2494, height: 1844, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108750324593214847836\">H</a>"] },
            { photoReference: "AWCwydjv_txlZNLF6dLlyAfYZVWfkliAVPRLNtmtK4LZuAuJLVR-PZ7x9w8xde_upaSua8K22PX_2HQfEcl06Ah3sTHXiiDVNauSjHR-K9Y0xKfIf8RagToEm29x2sHiBOupTvS8db8hhFKN6dJiFCC_SUuYbtnmgTQSPLypgifP4RsU19Ic_Vda-PiJ2eLN5bX4Cweirtf39ZsfZmVdOmZl0Q2H5OfYj4pwi9Tf0zgn8xe2sUJK7G2tKR6WKum6POUmsNDff555xak9YKyrpBwNZD5zArkewvM0jvZTW256Av1TX5gLIREEdL86jHeImqOrwf4Wwk2vDFCDXA_ipe2KfSc8OQA71BAhjo0vGbmivuhvMDh1-3MbzSanY7Sq9lRrL6l17KCi9cAkLoGEmtk-4v4qugNMWWRJL3DNxRTzPH8SZk8s5DkP0IUJHvtmT7NG", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110271134392136454552\">Elena Runtsova</a>"] }
        ],
        summary: "시원한 코코넛 스무디 커피로 유명한 나트랑의 대표적인 카페입니다.",
        updatedAt: "2026-07-21",
        highlights: ["중독성 있는 코코넛 커피", "여유로운 카페 분위기"],
        tips: ["더운 낮 시간에 시원하게 휴식하기 좋습니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "코코넛 스무디 커피", items: [{ name: "대표 메뉴", price: "₫40,000~150,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 6:00 AM – 11:00 PM; Tuesday: 6:00 AM – 11:00 PM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=12.2400149,109.1921561&query_place_id=ChIJx5EjOw5ncDERCXpVpE-lRSI", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=CCCP%20%EC%BB%A4%ED%94%BC%20%EB%82%98%ED%8A%B8%EB%9E%91%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "카페 제시": {
        photos: ["/images/nha-trang/info/restaurants/cafe-jessie-nha-trang.jpg"],
        placeId: "ChIJI96DayFncDERUDxdJFJl8MQ",
        placePhotos: [
            { photoReference: "AWCwydjnV6X1f5vDunW99zn7vZc7UOhqzBaHbkGg1x_j5hbtpq2Rf48GgJrVYeMnGNQmfIxOzs8OxCPEAOARrgTgJ5QAMElnhipX_kr8LkZRfltcQ28IniC7TeENL5hkBrh9Dr_cFNe5exVmU7GnGD9hiLC_LmWdaVWtNrCIM0AHbQegMcOTfFen_pVkYm8P91_OAluzINz05DYCsxgKpUKlz3IsDCgNqO00C1Zuf2Xx6B0sRI2yA6Q-YukAzyyYxhtY0WAB7AYZ4N7OUTRbqlVl7FdTnYY5_hGjQ5ic08wDmCv445J4Q-HssrC_oPmIh_Zar1zc2kMNFSbzXin7U7KCX2IxXWUT0c5mnoHo6dHRsg9lFOtIoYQl5CN7Yl5Q-KfWeSixMZlWetoalwyFpTMj7wQR9Zigo6Jp8uE7-pIlZgrrnA", width: 4800, height: 3193, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104399662972482900287\">JESI FRUIT &amp; CAFE (제시 프루츠 &amp; 카페)</a>"] },
            { photoReference: "AWCwydh6UynRpqegiIVRs_IAGvhXKKPh3qxdXTkV7KXQa4nETN8e4R4XRK4wSEdPKz6TZDtEznF95vpuMhIcQnVjkXyfrxC9JiRqzcq4eC9J5-qqOfyKi5iXECc-HmXglWZQdzJmlKZ0mq8mwakoeF2k-siQM3dOoFyf9k8tscdt8nPnMQWUnwIEILYdQ8iTwzqVqAF8s9tjnGSp-2h0Xi5tN3wA_492nuDxips0-07YbOGq96cq52-LJ_rkZfsF6A_PZogBn_Ssh3hlfUfEeEbMEOcGUM0mEhh5fVoPhxWnoJYJ8lldIsULHpZdMWdCoCSdWjyepOkE2Av7b7SQaSXFfrYtV0xOuC1zFoTNNuC76q0tjIHbe8AB9-JuLo28RjKXn1jMBQ8WmWOiiqe6qf-k6NhyX8syymrsC1cw58MKI7i0pZjolf23OrwkWR1Onmej", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105112465013643799916\">수수 (Susu)</a>"] },
            { photoReference: "AWCwydht7Mn00uqyPXRaO54EpL-kxeUndyVsmZxe_KqkdN5nAauJBN3d9WtnmZl55FAXAvxwp-UwJmZea5Z5IxMybwrc8icReAB_RpbL_izTQr7MlnJpv2tY8KDZaINF-AKwCeul7It9Nl_Dw8JixUJjWrWPWTWH87Opc2_bRKbdRf65aAhoguF0RihvrGD1VHD4inP-KU-bjcfWEkYvyZsr95L_GWQwsk6KpYlQn7pCv59A5PaLcRa36au-AMO360DmzbeYSKF6tjINpQosMFAlalGI24BaA741j1xbsasjvKk0vfg1A2Bt5ZTUIFgXSuhNnmwsAEfHE8E4VD3DFzH5VmtyusUBgxaJEbMc2wq561qQ7QXpJ5RRv9fLGg_25PPOjpDayrUEcwemgIc6ke75Fo4yorXKE-3z8cioTCMV53kuUQ", width: 1920, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104399662972482900287\">JESI FRUIT &amp; CAFE (제시 프루츠 &amp; 카페)</a>"] },
            { photoReference: "AWCwydhZ90IbEnwZr-yhsO81onKK4I3vbJXpCRhx4LfZGrw5nmWyJtA-USd9MrgTtoNKD75RjgTN_PO7cy1Jp4Sctpma3bwoQK8IbaIdkknBUsycIhLIcepelTwOcBlXBQn5Rt1cX82rcXjbkGd97cdG-TdnUTOcEdS60b2LOxaC2ADHsM-bY5JYWUHIXegCwT5oufO1zir7amzQX0PcB0Vq9VgP4omKlGug24aE-rMO-IwnH9PN4dQbjA7OVN0_-9o1rxgaZjbqEjtAhyMfXOXbqyeQMSOKGfqV74XQ_vyKRYYlGsSnlB1T_Du4KR6XsefSpPFWEBkPRk7DwZO2AzYqz_0qt3bYbC75G1tI63si-LBHHB1pbaok-wjfBUKlEh5Kf0a6TO_LaZpRWsLHF_pCnob_msBel-M1gqySVR8-lJXtU7FrNm6n9kDExN8Gq8_2", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105112465013643799916\">수수 (Susu)</a>"] },
            { photoReference: "AWCwydj-Ce3ZJ-PqmGbDLeG1v43-5uchAZtSj6jsfnECEKT4SVDzDkSGQMAP9WiYBsb_V1DzaxM-T-NlkU8hXmNEubNU3dYG5FZu2_WJM4GUHgCIthcIhdMTwH4yhDmLZQfuI1TKEBtL87tMx3g8-THXLJj-YzGFiZtbdNBmJYe7uHwselOh0TliHuU93Y-WSQ_twnDzztV_4CT0t5x-W2EOzb-4W5Vi6_NsopkHFJdlYuuie6D3DUHB-x8Tio-syZwueWjFz3BVt7MQJ8XwYjW-B35bAzMhxs2kwD9sK1tUuIb2Vc0Rz4dQLCPcEiK2hBvG1BtTB6NqwcMjlTu_ou-NIx0anXfMEHgVEY_zTzqjqcNNCE_3_V0FkwoUqAV-alR3APTsNg0TFyjRM6tTnjseT9lVqzvyZ1FJUtA3hX-mVH1wcWpyy871Cs0dTKhlfw", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108415968211559984696\">신혜진</a>"] }
        ],
        summary: "다양한 생과일 메뉴와 달콤한 디저트로 힐링할 수 있는 공간입니다.",
        updatedAt: "2026-07-21",
        highlights: ["신선한 제철 과일 음료", "아기자기하고 깔끔한 분위기"],
        tips: ["과일 주스 메뉴를 추천합니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "생과일 주스", items: [{ name: "대표 메뉴", price: "₫50,000~180,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 7:00 AM – 10:00 PM; Tuesday: 7:00 AM – 10:00 PM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=12.2418473,109.191583&query_place_id=ChIJI96DayFncDERUDxdJFJl8MQ", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B9%B4%ED%8E%98%20%EC%A0%9C%EC%8B%9C%20%EB%82%98%ED%8A%B8%EB%9E%91%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "케이하우스": {
        photos: ["/images/nha-trang/info/restaurants/k-house-nha-trang.jpg"],
        placeId: "ChIJTQBISo9ncDERyPcP3aY9kI4",
        placePhotos: [
            { photoReference: "AWCwydgyi5SK6HHgi2Z_h9dpD1LdAahSaUB1e8FbDYD0SwDL8oOkA8FcCS1kVzkQD2f_ECB7FCobvGRgRG9Ve2QRHoF-e_Su2-6Z5nLaRWhGk4i4xy8EymixKIboaeMDzCwughOGuG-wwvTAykJa2GHnraaO8EEogrkA3xvd8d2CHjNWJr2Uw-ampWjDXL3fIryLAIdUcOTelRm_Nhmd09IbfRYw0AUgLQllk-vjF2K7GIRKBWTNhtQEVkS68_XufACZNmBMO8NsISaRClXpGMsFmgZP1D-Mg6x_BlMQaeb8gTOo1r0G5xvhEmb26ZlG6iayNA_IZ9l34Xe3R8aUej7opyQAkc7Scl6rXKfjG4Ohboktd1Io6dThOcjRDfnBixoRRf9e8EnByRiveezBGbVWxm3LRiZwOqADZwsTKmqjsAg9Ew", width: 952, height: 952, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108915737107566580039\">K.HOUSE Restaurant</a>"] },
            { photoReference: "AWCwydgXlfryOy1Pzg2XyrH9Xggw-SxYnEKId2iydeWn9JFxjdnCsRq9NlHzD_YmvQq49kwDWwKteTusXdM9UvFDMdt7jZtiYV7NeGwGAC8FXr-ThevWYvlddImR_uj664vnmva4Z34UZG6o5GkfE9F7IO92C_Tx-pABxBxOP8G5bom0nS-sRSaRvk7s86zG-FglW-LlcproYVhs21gO9zbmFWxVQqQ52E2cy_40mYcrRvRb2r2n16e2hdMfI_H0qxtg_Viho1b_UjE_KYxb0ybnkYThgZrnVGyTV7eHlH7Hw3N_gpCQwKG1x7ImMS7F-AioZ_gdZ_iTjt69-JdzlVMzBa0EMcmS3WS9zb_KaOQASwLRsudSa8Crw0iR8hLQVLhUAvFrcd4GocyPe5h039Cyc3cO009sR03GDzNkRpCrhNSsq1viqpWM86zIMb3nOGkC", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112713264171547184904\">유영복</a>"] },
            { photoReference: "AWCwydh7l1SgK30MU4rlTWfbsf2yQeuZi49gMAWohHeO8N7kQz600kjt6ZHBGYLaCBAwtFkXKigIX0d38pLBS0CbkIcMwMSZgzAjAZp6kprMn-lx1lOH2SfKGeOef6xZQKdR1wnRw30tayf1VdXgbx8JPo5yBj-PBpWKRdD3DjpbFJp37jXA9ZbvdhblsN6deT2gHj3XhooROMq7WImvsrRjufjv0NRa7yHGODD5MNSR7yd5q5kgiJSS-eSdwuB3eiOgUjtzsQCedixUziVQHTawVjIv-E7senjnkjidsxskuS6-9R7yE5ajsVK6-5sMBrjWIZ-_sZwwnZMZU3itfe1lSXpL4YGmagJQNVmujDHU4FmXhEz_mDfelkGBUY3UCYdVPZ8pD4vkzBsNB00C_VjgPL5k2B3w3Nwcka0b15Ifn0Pz94HGitjRrwyrV_iFsNaN", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107792959461972093041\">이주혜</a>"] },
            { photoReference: "AWCwydjns6IcfxVSi9XOexyQZlQbgPH6T8LVGUyAEUR3vaUoUrkTKZpzWuVvpzRgg1jVj186D6PVy6CuvQ3fARkrnCJV07RGUlGoVsbiWpK1XFBQeyBBt8jOmpNUJOun2jSCE4RkBuCFWVII3OU8nvFDjt1ylbrijGmqtaJhfIhb6AHSAluN7f15ov2uoRPL5-OgxHQy9BhZk5gy082fPmR8RJ3vl5RPfBdMtucQe6D4xNKatkh3bTwO-zXCcVIPC1Bsyjt6aO891cgCfSRGlFqfpNoM5ZIIcubF4sG4adeyMW7RwgDN9or1yggwdvSvvUGzlFrH8cBPeZOsJBYcxfj8vRLvgF1JcRNoEV9KudZfch2EoQaDLVkEsmfKjbXzHdrzKnH_Zmzck4aGRx_z4TN6qYKmkHpMjstk8AfZxxyPYMAB-9ZyC29Bie_DN0pGGQ", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105750527076922157686\">신지연</a>"] },
            { photoReference: "AWCwydgiqbTK0-usZMYznIxFs2W5LazYkzc8I2T541crHNAlYcRUC-OULDPL6uzntIys6SS0fM0nSkEUun-twoGG7AzIdaegpyX7cr9DM5If1NJL3zs1JG9HyQfnQSBUHoq6D9H6Piv4cs9xxjUxf3tTXQp1bvDtTgO9-Q-J-3oogD95bizIHljmEEkt9sDfHiHaS-4Hitzp2Dyfg-PAPz8Bo1CfPZF3YQVjobQG8vxrE8tbKwpe8w6h8kqEQN8HaCishLYNtifDqlC6DOT7ni62LYfwjiuL9R09ountQo18YHpKwKihO9p3tB4qDxJxyYKzB0mwmf4daj6kJK0ErPe4NYj2vBm-BkQ5UiQLDNpfNXjiURiGzxUxsj8VjQzPyHqs6PRbdIgGisZKDOZDcXoGq143RgUOCO9t51ULIXELWS4hb5owqVch67rBoQKZ5Cnt", width: 1440, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105278006015001460501\">Soyeong Park</a>"] }
        ],
        summary: "높은 평점을 자랑하는 곳으로, 정성 가득한 현지 요리를 맛볼 수 있습니다.",
        updatedAt: "2026-07-21",
        highlights: ["검증된 맛과 높은 서비스 품질", "쾌적하고 고급스러운 식사 환경"],
        tips: ["가족 단위 방문객에게도 추천합니다."],
        reservation: { required: false, method: "인기 시간대·단체 방문은 사전 확인 권장" },
        menu: { signature: "베트남 로컬 요리", items: [{ name: "대표 메뉴", price: "₫100,000~350,000", note: "메뉴와 가격은 시점별 변동 가능" }] },
        hours: "Monday: 11:00 AM – 2:00 AM; Tuesday: 11:00 AM – 2:00 AM",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=12.23059,109.19912&query_place_id=ChIJTQBISo9ncDERyPcP3aY9kI4", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BC%80%EC%9D%B4%ED%95%98%EC%9A%B0%EC%8A%A4%20%EB%82%98%ED%8A%B8%EB%9E%91%20%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "서울 불고기": {
        photos: [],
        placeId: "ChIJFXZnTgBncDERtYeOq3YB1d0",
        placePhotos: [
            { photoReference: "AWCwydgF1eqmgJpgV3DzU3sbWNH-TNlIpo4s64qyHqzUNqgPfBF78HWO15WLKtpNsw928M6bRPUyB5E23D69QSDh7kQ4hBWgtYeRwFJfHxWxzTIigkYsSWT2DJhC22yxj22yP2mLnimwki1cDi6exmVGv0n0xnOUtT--6bm85SH8_Mg3b1LtIMzlboqNpH0O4eeO8Ym0zOYG5bHVkNQ7SZ8SP301n4jhLxxUQlwNS38v3XQOZFf4r_HugqlM08T4C5KHmITNYSDxfSF736tPF72cXWiqAo3169YAMxN6prpjqjxjpJURnAlXKzgkxeIQi7Z8w8rtJk-TuQ-QUmx-GFfFLXrdRLxHzQPJdNeyGOWkxpT4GNhBmJLsqLvnSUGhQgz7LrEWN8JiUX3RhTUyljgM6T7OS5NI1voPXMJYrxz3Caj6dz5sTocq4flGHQZi-S3d", width: 960, height: 639, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115949398993198249641\">SEOUL BULGOGI</a>"] },
            { photoReference: "AWCwydg5ABwxOqoathkjPqFUA3fSM3qFOUK87_ybbPVquGvSVOGaoqm3wIaeb8gTmAsULuwRYUGe2-HqmKux-GFG8dQ0I50Um80aMmtCfKloQxKamLKyNr6qOfqPSdii6dCD-cf0F5YfdKy-WPOHmhQph-WyerzLnDOUm_NJftPIWODKQ_9ZG6sEuNhZXwjxZYlrgNp6l9RIf5c_4XmjBxQcZa_4Buaw-Oz88SurMfKHSnXyqifK1PFWNt6VKuUOelE7_d-XxwsFd1cmUkpFBuhwT5C8ubnD-on2g2IC0qdSCz3lJ_Nd0nDRFuLy43yFKYBixsL3OtAFx84jzR5DnjotpREsJIUNDuBMZv2dQWy8VA9SBP1Vith1i0tutQaM8zvp0ybIKJX8DCxy_5CkOoMIzXRQeDXhgvsWKJ2GtFhbNXFGTwME-rFwVJPPMwV7Bcsx", width: 2560, height: 1704, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115949398993198249641\">SEOUL BULGOGI</a>"] },
            { photoReference: "AWCwydjptU3KEvNmdpayweQ3fLSOKOjeJeuetJMXYW62TbkFDGAZ3K8viSaihUEJ7heg8pNZv3YpJKS-_giPkAwVA3la4mGtO1Yk13UoFnpvini0IEZDctLAbwWZ5DEeFzpIzk5fOb4-mIUqVj3gccqi2dWV5ARWT7FQ6Ni_HwKzj3BpDB6yLnd8JwXhJ3-yBjM2aNkINxLpfvtqQzCZDdrlD1yNqSpE5OnBALnRbptt7XtlR47O1chf06JafKgqnGEeANwi2XjATVWWlnHFJpkZ9hemavaJ4iAL9FObGfvDu8tpJY1EmM3hG9ZYo8fMJPe3KrnDFILGXIKwtsPDF2abqQZQKjPmLtrdSmMxyzEpYjQgWuTysuldDa3MeMkZX_SoEo7TMeG4E_VmMjIg8wK6BazAVb8-a05CTzhYfJmOrnS4g3qyRysKzOkwsr-zXNhp", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113164193432478067993\">김릴리</a>"] },
            { photoReference: "AWCwydgHVte-bze95wCf5Qsx52XH6ktuKpLwjglUifLfBF53rtnat6Bs6JA8G64ePwJyoKBPKgiEXXU8LuEVJtBT1HZibGhDULn2--9Fpxs8NQiFxvL_rNSbaSH2ZQo39lUB0VL_HZ1glAODJ6bQoE7IwGO4_T7hQNfudaeHEeTQogP-gHL5irYe4Xm_rocnllZOxz-bcI7-6PFl1OeGTBuCA_ns6rO6lEgX4hTXgrsNWWNbNzhMugjk30_8sAItM9jy9pCTVvtH1IsN5rtpbW9iMLi2noZITAEFV8yaTUaAA3FvSpXdNgBEX_LKW8vaf0irewtXW-KunDo6T20TMD0r4qA3dVPVAYJcw4YRCxCgqhtTEZdCFPhdMHOHDQGGzafqFkmi5v1aoHlSKc4VFmurJTHXN7cesakjFcxiqKjc3mZVo7IZaj6-t1J0u5uS9xbY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103966386813881252192\">Nguyen Thi Quynh Huong</a>"] },
            { photoReference: "AWCwydj4Bg3zdXqYWh1wCfP9aZajvOFiMwHDyTTVeiXPPWDshQtJyXbquf2s8ucdutvcCmn1thLsy8YNX02A5-0-TxbRirCah55KWDc94axiz0XHIpv0hRufMt6MczlfaHIIVBWBg4e8cKMakXGaJ4NcoDvR9vxaB3q7UXptTJOrqydGoNASNT_8ZkU9ROnTnQPaBs7cIZH8Pupdv8QvolFs2GfRvTCulGR9NR9N67mOuJbt4XYCiEQtR7S-Qa4b5pdrsNnTjs7IWHjLgjlxmGhpJ66f13nlelOqiGtqaX6duJraplfs93ug1pSHmlFqGEwZWda-EkhLQYG0c3EUgTKWJSWVlwVGgIglba-miME03uSY2dQWrO2jHGn44OERtc9_rebneG71ZDuG65AwrpZT9KDGPxTLNtIlvVZ0ZPvbbYLD4wccZvS5A8UES4Cj0JmC", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101731942013864129351\">nana</a>"] }
        ],
        summary: "직원이 직접 고기를 구워주며 불고기, 된장찌개, 김치찌개, 물냉면 등 다양한 메뉴를 제공합니다.",
        updatedAt: "2026-08-12",
        highlights: ["한국 맛집 수준의 맛", "직원이 직접 구워주는 고기", "시원하고 깨끗한 매장", "차분한 분위기"],
        tips: ["구글 맵 위치 정보가 실제와 다를 수 있으니 주의하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "고기구이 및 한식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://seoulbulgoginhatrang.lovable.app/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15984684061617457077", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%9C%EC%9A%B8+%EB%B6%88%EA%B3%A0%EA%B8%B0+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "제주가": {
        photos: [],
        placeId: "ChIJ2xsIKMlncDERh_NKRFOM-jg",
        placePhotos: [
            { photoReference: "AWCwydjXgVg8aNfoQ7uTZDFbMd8aKQZQ5pGqbSIJtXp6old5YZeTHzPsp-f3NONZqhApc9yV3CJHXIdr5lIBoVoIG4jZWucfxTYxQyu4f-nHNTnDkAEKdSVzItIeY2rl3K8tvk7LWYCJUWlQWvBVszsEHO5mzF9m7bhYsZZrU4rxVqC2ArIrg4pqeh4KyPmO5-p-D9aIzTOk5zdG9djfUgIRFmbaOHRWbHKyRXpPhVUeRKouBcT6fTp8MufFXnp-YkPkEbvKhRxBQhVJ7JQiYDJStTVA3_iw6-eUlcimksuwhHC4UPx78AbUw6_c3Y0WHWVD5oJx91qNLSdYalvlaUEwsZbFb5Anv0RIz6am0C0Whm3MnR06wgl3dy-0-kasgDF7cGmBN5oPxsmk8xImnIXSlbZW9NKOqQ9mFLs7p-cCGtKdUBCX7RBsRqJ3TMr0pQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117261144753733790529\">VPT</a>"] },
            { photoReference: "AWCwydhEGE2SG73Nw-uWSXCLdA1pP_d8PdiHgTwY3Z9154FU9k0KcSavrj5t7Q5iGpme_9zrTjF-qgx8NSkS3GP1V792RBybdJbB84WUtBqYqgmVZeGJi5T84JhE6qemo8IeQUb5x5IrmWLl7uNnoOHFdcuyYVf9nOTt5oJ4mG5C8yQTyNS0TybJmKwxZpyyPn10Yxe6zmqPp7Pute9uWiCIrSNgu328OJs0aA9Kv63UT15_pdpCUuCb5RGbbWu7TUa4dwVQd-XoQJTGhVsNcaVTU75JtvW9KhNDoLMbq_YIlAKIW1BjqY_qGyDIgC5A1cDE1vSSSpVzsRGIb5hRLNgQycCwOEuz-orjo63VBmubPQFW8wI-39-VUC0_otdACyp063_aMUWD2CBO6I25sbi0SBm4S5bw0Y6S2A7dmKlICuseiN8Q", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104738861024978684349\">김우현</a>"] },
            { photoReference: "AWCwydhhcZVVHW8AgtxTgBpn5RLNObQZGhrM5FyDbQBzWNYja3ATu9N8U8cAS4HQGskf5eAbt8Q7ii3Dcj3QqJR45jop1bJGPO-odYeHnq22o4I6lxghlinqg-aLooQbGzune8sUwkpxHYHpWTr5Z84oaBoGTjHiPiZZfdEJqTyGaYka0fCARE2J0JUEfHv1GPgxT6VFdLGbnIrtzf0_0CoeCfZcWASZki2jpGPJnTMt9S5yHzRYnRJWONd_6z3WWRaKJoz-4Yvax9TKp5dYaU-pbCreOo7Qy68vwat1NxLObwKpByeR4ANt3fKLvdWaR2W2IiSoUXgBb04Va3mVaGCXIW0bglTQPnheFVDjxzA1XNNsXz1edtNOB9SbxwaJG98FDoAa0hTFSZvj6VWh4_vZ-qVFZQw7FyTogaDJF1migucIqmfwAKmHEvZItSTx0IQj", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110773785666033411488\">정명재</a>"] },
            { photoReference: "AWCwydgXWNi4drDETZQkYnQ3r9gzQy-dAMQnKlI1qEqCyTIRfIMrv_p8vb9mhfqFrts4kteC2oqSP1OlftIbVoBBU5WdkzhWJQawV5Wl4MRaLCYiqUg_1ju_P2nsFDrI9tCjhdmYOY4HjYbA24izvcbRZ7LQRkwnpg_GAns7tBHyoM3cFpIOFE6iTZ2EBf9XSMNe4jL8Dko1Qg1RJflNO8m0waQx3Rgln1yafg6r1EYL8g-DNomSpFV_JJBlmOBDWruOiOX_1C_FNZWRvUSGHFjCQaghda8BB4aMgFhRHvbXQWhj7sBC_0YD4x9ef1LBW4dcKcrq_ypprKHZRF93Yd0CKvEaNH-kk5wDJRzkCmzOhiXxfzGLCfLXwRJ9xc2hgM6FL5JeIAGCwhh5YMoNLS9krHA_I_kUzvNvPetOMFsFJCI", width: 1280, height: 759, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108245125212209423846\">Nhà Hàng Hàn Quốc Jejuga</a>"] },
            { photoReference: "AWCwydjiF72_6rHzk94IQ6aP2GvELLEVUGWwn3WS_pRqYzUjHIXbJQqApxulx31xm5GodvSMMb-bWgr1jsNzc7uYQceyh3iHyYWBQOZAuAkKOtrXQkN5PDm8kIDGssQlmyLn8obRZkeA_D9PEOIZRjQOzKxPYd4jurviNv6FxogjRWK2y-rJ2zcMrqpRRUkLe1LpvJ8CwUTSZbLOFGq0MU1cuxeORH2jlPL3WYnl8LOpKMSBEH27jefbGmWzcEgyhZFL_0pXVTEokljM1MhllgN48QCr_YFnKpE-iJjYbMdhwL0AugxyO4p8gCqevcKkOuJlybmSrK47pjFgOkEc50vXhDuUnuUCCsX04x919md7vv7ugY84LLjtuhNuKDVfd9VnSEmmmvW3Uu6TbEVwyXG4JdSCUmJl6-8JwnNQ0nOubQuJr-2uf8pN1RHBUWJT6g", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104929666718991715860\">지니</a>"] }
        ],
        summary: "높은 평점과 가성비 좋은 점심 세트로 유명한 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["가성비 최고의 점심 세트", "친절한 한국인 사장님", "훌륭한 음식 맛과 분위기"],
        tips: ["배달보다 매장에서 직접 드시는 것을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "점심 세트", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sites.google.com/view/jejuga171/home", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4105748299557565319", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A0%9C%EC%A3%BC%EA%B0%80+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "베테랑": {
        photos: [],
        placeId: "ChIJpQ4geQBncDERsIV21bJ9N4w",
        placePhotos: [
            { photoReference: "AWCwydjhlRYXBfNaORYskv1Ot_WetKqC83ks4uuu03S8prKPX9eAjEYfrwl6IdX6qDm0ree7HLYyE7tVk3bEdsGeKMPKu6XtQl_ULOyQ21_obDKpLtIridraQ4Q8YgJtsW1O8a_YmnLOKbU82fSuGbtc0v0AngtVl_6_2CLPqgZERFfQZfBcHFgLk-MV99JHRS4yPyJgDF__Mx3P46--cUEnUDax_Bx5ELaLUzuE7Z-1N6UXWiEgEi4hLpT63I2abs7d16DXULAaz3B4K3M5ZFcikuDjDtXy_aq1FChonaE3_3zJqewV1wpSRLCY0OgNsimWdzgV1sZPjSZksmAZT-qdx6fhAq3GMn3_QIufCGtf62LkfdPjq9sH6UkUTNlr0Je_lnWmWJbEUqwDHGwJ27h7ClFdQmmm23yM3LK5w1Np0Ss", width: 2568, height: 1926, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101124658435320178435\">Nhà hàng Veteran</a>"] },
            { photoReference: "AWCwydjEDrW9hBUrOQ_msQYWCMKzc_oEkc0LvM3imPNO6-Mc-COcvb0Lr-UxQeINhbUde59GqZLsYx2ogmFnGP5r4SQhxP3gvoq12S4hINADStJivmE3fPYCil0h4017gHs8Fonocuujd_30fL9N4ppIKIJFWsKLbuNZzYU_DYyTOEqmWT2Vk8u0YAZ2vbOFS-xDc_d_BWlUIzI_wBTG78txE9ZawVTI-nTXeCvdjyxJtFBQHXNmzzQ4zTlyI2mI84CLb9N-irUW3jm5F_flmyAj4laeibu_p6ZLoYgKZpZty0KWZCG73pR6gQU5hpoTT5pCynp0PoalXFibQONkKnDKY_ajdqYDXDrR9ugggTVzsCgikJgXx2oCXpDiM-vljUax3ybjWvo6wS1VHP6SBMGhPLnNa1oWCJXs-yRlilnLv4XSAGgleHo9Vvw2l7UmUqgt", width: 2568, height: 1926, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101124658435320178435\">Nhà hàng Veteran</a>"] },
            { photoReference: "AWCwydiWdYQRVhorQsVcTOJKBa_aXuxa9Otlio134UM4UiEQ2Whh_57ypGwMcc5ibqYosEVFX2FmOD1lUg9i3YAAAyzO_OxB_H-9VaS8lg9hINNyY09TgfHVlIQtbIjluqK9TpgP9b74vhNZbigG8IxDJ0X6bQHPxROfVIKcF4gDyXSI7HIzZgx3_lKqMXYxljwp60sw0Ijw600seDi3kTw73mxs8tsCK_qEq9styKJB70C8b4jYT0IMaY1b-rXEZIL4uVk_JWGSXJgqaSkauKSNHGPnggOhGQ-AD8zDaELK5Qslbh8NSyApobP1AneollRr4yua6u189STHFjl1MtcF95OuD3ILdL-bt4OizBSf6sXlT21BV_3PkIG1MxUeyRDhSXcOPCw0PjYE6BYvLQVnrah7vkhjqDDCxsJlOD3MTTmJQYiEDdHNIuOp7PteCA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113788925588548234556\">Ngoc Bao Anh Nguyen (Miu Miu)</a>"] },
            { photoReference: "AWCwydixk_NPzxnKF3ZJ0r4GsZSMjxAbcNrT_D_uC31Cz3pHsx59xU6snF5Z-bZ0pRcZtpUgLwOZte0Etn2m68oikg79NmYKzIgxm2DWbAQtaX_ros2VjAs9JRnDFPvh5vYvM6-xIiq7PWMQN7dQMruq6piDZ20sCL1IAqs2z33kmmyiBa53KqKfbraA-Ay_jIe4AQhTC3bJYu9iuMzTophJ64A13sKP6PJyfw7vMNJjQHP4TQ3qeY0PDAxdZj-wqz5Vaujt8v1OAtRDPw--L75VOKmBL8FYxj2oqBYW2VVaRTUehTg2nrcW2f1eGb4K6_RKMHfw-vwsqXms7pVk-FwkNoG6W4IatMDeGp653H6oAReMNpSISbaCwHH242ZoqFiam302_RVd_99giyKdtKPeNdePRWFXcvGtTQIsSAqE9NrFp7yRnF7QrjYzYJntvTFw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115928347296559131324\">Khanh Thu Do</a>"] },
            { photoReference: "AWCwydiEsZtBMQpLbuJYrb9OMzu2YfHhQV-FZm9ZZeOmxcPYrIjwWb4WZgzitYxoUUylqccIFexSHRXrIA8Atyj_eOLtmwpDNKjHup6tQNUS6HUj6fanRVKkNLygpjLKpPyKMcvlpjigQiBLGU-3hECSwODyNI7yh4o0GulEDQdG_KZqZfSrYmAoEeYerNG1diCLt8lNYBB-cneab8tXsUi6hETnv66izpGakNSVLpicB7wzLB0RMD2kIAJWtN90xNJASsHK2PxN6ieflcQXnQ1USu2aoMhyBJhRZzjhCWs2OswXahWN5J1kXs0oFF92sVOrKG-9GhcvtBA2FeyyvRMpM2ivXu2T9J51v7WLg2ru9zfk4vDEppZPr9Fap-fDPpzGqa2Wz9Ox4od_W-VXijpY_O1AhV7VKRgPGAh9UrPKig5OBC48z-XCd0NjBP6kOT3r", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113029608133073249452\">박건영</a>"] }
        ],
        summary: "높은 평점과 압도적인 리뷰를 자랑하는 나트랑 최고의 한식 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["직원이 직접 고기를 구워주는 서비스", "한국의 맛을 80~90퍼센트 재현", "머리끈과 민트 사탕 등 세심한 배려"],
        tips: ["매장이 넓어 대기 시간이 짧습니다", "서비스로 제공되는 음식도 매우 맛있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:30; 화요일: 오전 11:00 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10103682496067962288", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%A0%ED%85%8C%EB%9E%91+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "YookMong BBQ Korean (육몽 바비큐 한식)": {
        photos: [],
        placeId: "ChIJ5fLzi0lncDER-YIT0Yb0FH0",
        placePhotos: [
            { photoReference: "AWCwydiMeW4LlItMEgw16IUEn2r64UBvqqF9flNv9I0B9x0Cdd4EHdZxyJBIt7uxr5oGAmeoPvbRAK1aTyT8iZV3K948Ev1_b-oVRKwTjLG6mQkXgwn6lYLBpFHK8cIolPYwMlQpNw4bIANLBH7O3MG4EjTvXIb9zu-ER2t2DtM4_4YnjHb9dIZc5qFNitADfBIHKaEwPUBhrtc1hwHH01B6yJrL-47e4Bf_FzPU_la96PquHIXrT-s9TeU8SN0ErrVubwq1GuEjayG6KB3Bi3kSLbd1GZXAiTXqsPeZs3z1i-ru4OotOQIMFgFtGBXl4VlKv0RZFDUIZYJ8w9trwtgKD1HsI_SCzTyPQqqJd6Ta0osVv_RjNpgsEhUWlDDTsXoMyecH-Y0p5zW-u8cUu6PJVaCMEVZqsjqcss5gsTHYE0ZhucneFyuQAj8_dP--3g", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114280205391984986293\">YookMong BBQ Korean (육몽 바비큐 한식)</a>"] },
            { photoReference: "AWCwydh2RxSQYMqNKfMvApHZR49yhtWykxdNtpkaMUCiSBHJY3pGXNdDYZlHZALsFDh81tu-WH5VPybhB1Eot0Fd8gElbVAjU4czxuiVzJ57JHpJb8HhZ2z82wbSYNquaHg37WLLtOXIU2qw_xJp8nxo7f7qYLoa0kw58-nwoWL4zSLFPdJcPGBvhtzTQ4itSz8EUCHA0AWQXZbT-7tMcGxidgaPuBOf9V7ZSRgTbGEjrqMQSZXivpjqeCmQW9WVJKmXDlVBnoT36Gcziktn1hI9rnYnGg3Ys_v5VsROCBmb0bOWof2pHOwcITMnBMFmXhH0oIgobi83ZBjw7d2ku9nm5P3VF-Idh3aKAdnU81k_VJ0MdsjwVN6ob25z1gq8xgXoVeO0xfrhLYFGyPcS5lxzLYdjWdGN5IFc_An2z0-1PJsfizvBDCjmAtEwkahc932S", width: 1280, height: 864, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114280205391984986293\">YookMong BBQ Korean (육몽 바비큐 한식)</a>"] },
            { photoReference: "AWCwydgFywICIbtvboRm6RO_db79yPTyWq3P2pFCc0xv1Hm544CMK5neF-a2SuV6NEyzQcSw2s8TxUNh9GLt1XugwFYCRd108T6jUexhtfSexjKAo1GN3nM1QCVQA3z5fNj5USTMEZYkC_2zTFC4oI7c-lwyjRp35AFITpLQQXFa0LvpVpVaPAqkyO0L2NF8wILR5016B45BN9vExUNAI3MfQo8QNWcrx-vGyZSKz6RdWJrD7ETGC-KE6-i33Ej-vVRxz6MPkM8wjU1iF2Cok5iuXdkPwKsJIiuOsz16IEwSV94MvmsXa00H7Efbd4nUzUs_vRh17uYKwbjRQyoS6fuk8fuagZ5UQPRX860IeRKPk_5M8ZyG3BdMFHWhdcXk7bbAj96OlpdLoXAP93LWZ6QzjYGXNku0fO4Fk4ZIva73jwMSsMjNTX5p4vjagvBXRg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108524749265099719049\">Sailin Chng</a>"] },
            { photoReference: "AWCwydintGdJVdQ209FQ1GwXaq5nTOOUAeDTslG-L7Y7Wpq4oq0Z0e1WXLJrlY2OsellUVcws6SHhbBve-Uku0PBVub2CNN5xo9gcBkfEo4hleKjpabj5N8H0iavRJSHE-mcDqDY8JViaEmkpjOb-CJWntZLW3JQRY2OsyK4sjViY5T5vuGB4isWkz6ZqE3drmyZmYog6JevInPLc4ywBU0ovpCCaKl0vDZXCr0xzjTrI59Lb9ndQ5R3DlYsu0e0aCW6fLra0Y_88szsTssIPSM4eD_wX5_vSeR65DoVezO3m5JzAYe_U1KoMh3pk5yStRtHIFcjg8CUO7SKWgSw6csZje33_sMn0-7A471a3mrSI-MmR6a_gSNNK3PTcPMMnnUNEC2GAMCzGYV90w4EIRC_H4ZTySXgJHuboKqwKye82kVeuz2RUvzRUj9xdWpVJRWg", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117304353962058444736\">Jamie Park</a>"] },
            { photoReference: "AWCwydj28qv83dk5XOTTS3jDArwXd_rCouMSQMTdxvIMvvEZ56aeNqzJFKQfqMRmnIBju_LepRt1a1OncFylIsfp3qiSlJAqP-wq-gQ9mClLAHJl5kFDqqaoGDYPU-GgAfJmKt9L3IWDDFpZXMUJeEjmnBGI1RCR5aq1XhYFOClmibPjyl3gE9-RCwJ0yg7mwKHyGm3K1bX6fWXkdIj-z7VXPJcv76PZPjCzSxvEKXwM7RUXPA6PACkeBSU-FPfGGTevKEXPzKhQbIH_OetrWdVpVfWoik_4oR3VsvXlbj6jkBmjco1QIXhFPOxgk-dvq7Hdbqomx7dJDIEizCYiVvklmKtMWkSZ-mw-P6PqqyVnQ1gFi7tPp1LZljk-rT6O7praCkadC7FhjcCkuvr6EGnBBPTJUhEoh9TCAx0GnEcjaA6-AGTG0CKPbOMMFMtw1D7e", width: 1271, height: 813, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114280205391984986293\">YookMong BBQ Korean (육몽 바비큐 한식)</a>"] }
        ],
        summary: "한국 기사식당 못지않은 맛을 자랑하는 베트남 식당입니다.",
        updatedAt: "2026-08-12",
        highlights: ["한국 기사식당 스타일의 맛", "신선한 재료 사용", "빠른 조리 속도"],
        tips: ["한국 음식을 선호하는 분들에게 강력 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 9:30 ~ 오후 11:00; 화요일: 오전 9:30 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/yookmongbbqrestaurant", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9013097614145716985", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=YookMong+BBQ+Korean+%28%EC%9C%A1%EB%AA%BD+%EB%B0%94%EB%B9%84%ED%81%90+%ED%95%9C%EC%8B%9D%29+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "나트랑 돌산 DA NUI (한식당) KOREAN BBQ": {
        photos: [],
        placeId: "ChIJXT9FNqRncDERePIybqNsnHE",
        placePhotos: [
            { photoReference: "AWCwydihmoWYynU2dQqKtqC8BHHkKCKTrPYTtrNvSgpV03SudZ4m_F6gx62DRjQjjMTGl9-mmPIlZGNQNdaVA6ikXWHiFnxDuEn0LPseAP5up08WwOEZkMUaKS7avqqQcSZNabbU-LzqBCO6fKRkSQHEooL17gDT4Xx_yhGDm2_UOaZtC0h3zD_fuaT0gXYoupXIeZVR_Lt6EOM2CyVSU_1GPBoo_cG5AdOZcPZZfaeCRC6iWXuBYd_EtAEcRCEmWi-B-2bqOBYM7c2Ph-iQ8oOjiDfDlEeJJtXXRemfnenRTQiAN7IfCCQoYkkfx8YnCeUrYzCucS4D9wwnjyZ9lKKNj7K6mP8EgHmtEZweod9xOPyZJPkyEtrh5ZoOP3yO6btstvzuzs7Ui8EtaERy6TvFt8BVv9p6btTGtl-6OfIsTyEcerp2MiRg-tx_bz0Z8A", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106245066881722612307\">나트랑 돌산 DA NUI (한식당) KOREAN BBQ</a>"] },
            { photoReference: "AWCwydhAzeken2jYQQZBIHv6tUIABZIFznLE2pHZS_N-beGHOzada-OBl86hYp3LRBT0s9RBvyq6oe2ZH6K3YMgZmrHhIWKxaQA-3QkzfZdGpmZn7qIPI5Rrl5mAbipi8Vvgcvby1Jgfz9wNEOqlgsGDVnO6-n5FBksOG2oxNUIjf7hDJ42_rXMtBqEKPGlSppxsu118up2_BFuigGECcIU8Z09lUedLlYm-m0AhbGVPrBfRaXJbcAgMxl0YIC5skjXLevodwsBglXNZw9xa9VAHsqmKzlZqXZsxeafr1FZE7NNlDKXygd44gyvsdi5vbOZZZe2GFe06Mc3XVzjAzTeh2UuifDvIPVQoVEhWIvSdp3rnvF9ahpBRYHNSq4mYasaYPDLm1XnjsmNFVnptT9mwOD17MZ4U4rS0s8mnUePw2GFc7P2cn7UtIYcuMDbrmlDM", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116487730260672904928\">김방글</a>"] },
            { photoReference: "AWCwydi12IWQhnjveT5QK5O02g2UIyHcuP8n6CRcTmQTdv4aW2ehuZ49sMDUywa8uGom61xW5SA2-lkT1V8QhMH4YZjKwAZtK-Sp16EYwStHo2mSBfKMsSVJ8T1DhCbyOBgyy0OG-8AUr0cW9aVQKxi_pa3lBAhTdluILp7JHQJ-j2DDAIV0qeeAr2u2Votz2r2WeYFsfgDNUBw24Z16MnB9jHWu-leBWPvjvD4bZMa4rH3aManu5alYKlPPAkp-5VDcjuDgPkwy48g__a50Sjregd2DbN0Ms1g3Urr9j3qITpH2w1UXO-745G0779E4UjF_ArktupgN0WibHWooLmBinEkFDY3dtNU88yjeBtsG2OrmT0YQTaS5EendEjdvkj7qXZ-PPYYDpD199fNuONDGgmnU0sAERH3OoOuy3JtaIZtaXqH0FZ8j0cthoYkJjOU_", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105395360075867878594\">조수진</a>"] },
            { photoReference: "AWCwydgvIjJkOkrKNhjWa25Dro47bf9oJ5iwocBqOBNaficGqT4H49DmRA-LZ5nWLMIgma-qLcMwqY2GErKRk_mEWS1XyLext3vGYb8DjWIZEGNQh6mnhYsXQt1RUIJv1wwENIqaZAZYlT2tTpx5E5xaTTQNtOU6Ee2bEadJjtvG8E_VGFVzFbkrdDq4_IKZ0Ks6WuKvYFkHv2fur4MLmxpsma-3ze9HJJ_N3wzs19x7ZTHmWALrN-LHGZS72QtrU9OYkbje70EHl-alSSQFvLi2onj19uKUGRo1ycSq8Q6ZRs22o2UqrFaE5HXZQSUpDU7_YJOGaRoWE-SYfBHWcKpC-tRtz59QOit_7iiqW5FkM--1ZkTPI1rKegb5ASFk4UNG1l-KxPpkYmQ_Ek3VXgRSj_C9PYETY17Uy2_V89i_EAnIeQCoEoss8Hjq-PzA6GUk", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103925025655795281609\">윤다혜</a>"] },
            { photoReference: "AWCwydjVwe9HEvLskOUXjJ-G7Q2njE8mYhRAQX2jD-yUKUd-RXeHbbfpRPDCOyY2ES-yCcTL_qQTCZhNNZVY-rJEb12CLiaRYwhbGqLaArZnQGsRK31giLdfYzCNVh2tyg0pc9lSMgpUQW9nOQX_xymOFCvhXNdCmTYgbWpHCfB31e1LYvU25sfVecLqi9uFatNy2qKAzs4U8Xp2WIS0jP8Iz06rBDfT9Ey96DtyghrTmxRAxukBio3YenW70K9rdKp3cJKJw-KB9W-2MX18mBcj7ox5xldRrfm05oElam9i0r7J2laRT6Mjgg-hxBtxUmdgqlY5oGLlaJK1U79mVv9Xr3WNBFLZdJz20qkvkXQs1O42ta9kCRCPUeNJlZ5dFJoGC0L-Kd8jW-gl2CDIhFzU98vOC1uUxAZtvKyYbSwDoer4bfddwX2eNU8Ir4RPoMNs", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110798816133149899153\">이성웅</a>"] }
        ],
        summary: "김치찌개와 고기 요리가 일품인 높은 평점의 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["맛있는 김치찌개", "품질 좋은 고기", "시내 중심가 위치"],
        tips: ["한국인 입맛에 딱 맞는 맛을 경험해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "김치찌개와 고기", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/dolsan_koreanbbq", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8186537671837020792", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%ED%8A%B8%EB%9E%91+%EB%8F%8C%EC%82%B0+DA+NUI+%28%ED%95%9C%EC%8B%9D%EB%8B%B9%29+KOREAN+BBQ+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "미카도 스시": {
        photos: [],
        placeId: "ChIJ-YWdLwBncDERK1U71GWCmnE",
        placePhotos: [
            { photoReference: "AWCwydgAxODNsC-d7RMtdXHHeZCwqIKWf2TuRyG4wWjQWysKRPxXroN5zt5kfMSlwjl2qtSn0Ehh4fzsSa3Ljr7_CYqWYbXEIC0Gfaw0Hy6md_BIyAz-_E954WgcnQpufdYnENAjynVg1zzbL96aNTdR_1JfsVcspoUvkl575COrwh09EYkPM3d6gD_we0xKMl-ArFimZwCclZ47-Sbefhg_DRqZzs17I2dj1s-hM14StHucIrAlnen7c2JSRtzJNmr1uBe9QmoGhNs6KD0NfZhdcQu1FTkLM9noUNCMSwZrUPU3P62DrXhSjFXw67-5FhNPUn-KlaEiAs_HCALZcSJCKZf-N2fAd47Ls22wyMd9fA5U4628vM3GeA5bfk1ZgZ0-l1tNl1-s1fS1TBK-p4PfcxdeEvBwBCCxg19yJc3uGx-qcOaFgm1KYXu1gtjDvdjl", width: 3872, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113887890265360406079\">Mikado Sushi Nha Trang</a>"] },
            { photoReference: "AWCwydjn1-azG9AOXJmteQojsF-fOQGiHACyXRLhZOKu3HgO9fgTaMQ-ypX6VaE5dySIDgAG3aS4XwJC1j5iOedoyo6l4r3AlpURcpBgr2h6sROxdwoWxgVLstA6lKnrUIecrAQo4ryhM0K0AOTXRgUBmuhaPm2xFqfZvOZ43CW1sAB9FpSTUdlbmWAxDnhMrlX6vK6Uiy0CEy74y1yv2S4o4U5jIV-5zqZ91Ug1U1ojVnj0WnAkrtxNAgog1Iy9e4iUeKavlckBqWJ0wGNF7dfX8JdEZko_1wjgAAxWS2ixLN1-4uNwXK6TNElfTMie5U46BMDsX_l-l1iQ-BogbM1qyYj9M8NBJY9Qca3pUT1OjHL3H8ecpIrWT3IqVrjYR6LbyT8wjOOzF0Jneyu556uK5-Cq6dI3DiD8YByNHBsbE9a3Mo_P_vEa8T_DHo3_JVz3", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100736596807338966042\">Яна</a>"] },
            { photoReference: "AWCwydi-atVPYjgh6b_8J3-vjApC20ZJW48giUuO_cMNd36bn6KB_vNEw29c6knbqf76DB2fTocB2mnaBjesiTiJ61k40xS7tJePTkmX_7-LiUDRWuhX88eYVIRXsT7VT3XbpGbMW0I-iQ8SGJqWeqD5oM4akQtxngUDfEyKwZ7QoYvBhmuCW01oaF6qWkwqYbM1Cn4HEKff0uGZ4OsNlq5YDrF4ZMHNcRn1rExsA2Eap7DhqioWsDy19XyolZBSBjHkg1Y0WvL7gahkTUIfAlukwZfe99Q7cJMNtTOu7OZ44J-69k8Kzn6FCaPl36vFcRgczMZNsBsFqyTVv3UA0L6TxWRTPkQokBS6lMvCOM24UdY3lGEaQvlAn_2S3AvApH5qv6Bjntkh5z8TViX9VCbl8iYO87_ddneJd9AdJDXSpCV5aZ3Z9ryaP1MaG8mOkiDt", width: 2000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113887890265360406079\">Mikado Sushi Nha Trang</a>"] },
            { photoReference: "AWCwydhBgRkCnJXzQf90fAMr8bnBAFJSQ3E_Nky2iAicxnz9D1wDvvF7710lqIreRaa9cR4wm9VZWkf_N6HW9wQA7nKXai_brxIxmILwptYrxbRla86UoU3HAB88stqeG4JAixiCdijmss5XLFk-ICnYA1FmvyzOqgZyEOykX-SOkUMfpEmuBYJE-zm8t4xTddqH5OXTsH3nac-ecqSgYuCllYkwEQKqxZ0i2sAeSxU-0hrBuqSCA5OfJrDDW7G4u2-IanwVla9sBmC4jdaeK2h42DB9pCll5ho4Qg8T4Rk-DhZ_HqWaU8hRV1SLtsXmi7w2J_GLGjUAh2eUQjm6dIOxZ0OZozc-UNWE6vQ5sYCY-ii21ozSs4jkc9yzVd8gDqJQrIcfJPPdMGmRNSVtB4llkxJL4phxaWq3X39i3UOoI-x6ZrWEiagFJRYTkhHfiA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100736596807338966042\">Яна</a>"] },
            { photoReference: "AWCwydhRzyM7GgGovSis4SpobOXttCSm5EB7pN6CY0sSzkFMRxYRtM9RTuIxmaPFmHPUS1X0YetIupZeFdIBY1GrhgM7r7J-7SEy1KI9uLkXrZuFXhPsXqY30m2tCiowD2V8vbvSAqMKTqRZa2gqmY8zHxpTuuHM8c94mO3IofhPcyxjrFvGDfKUWwrxFZxltOrVlokWLWCBAACsO1s5AL6o8iyyCZaLsL0--a_DAz48SIzZmwzCPidImvWYwAmYN64VPCsRu_YVuTg088A8cB5saAu1eR9lFqY0BWE5KIvvf7XKpsfZLJkAu_cH58aktFpqhseSbl1gQgiQlwZGFn_2bKx1YX--JuE6WSc-Sn4AfYo79EqurWWEcz9FD6GeYyda3RXXvy5PusVFy1wPVRWwGXGimv0C5hj1sJf0KlcZliWE80PivaubUvLdP8dbDQ", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109561793306200678561\">Alena Sozonova</a>"] }
        ],
        summary: "뛰어난 맛과 서비스, 합리적인 가격을 자랑하는 일본식 레스토랑입니다.",
        updatedAt: "2026-08-12",
        highlights: ["신선하고 맛있는 음식", "다양한 메뉴 구성", "합리적인 가격", "훌륭한 서비스"],
        tips: ["재방문 의사가 높은 검증된 맛집입니다", "분위기가 좋아 방문하기 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/share/14MiT9sDnL6/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8185998646563263787", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EC%B9%B4%EB%8F%84+%EC%8A%A4%EC%8B%9C+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "MITAMI Japanese Restaurant": {
        photos: [],
        placeId: "ChIJn35ZE31ncDERsFBYVpZzvK4",
        placePhotos: [
            { photoReference: "AWCwydgMmtqFEJuu88R3pzcrfwjOXEnj-9SG8Qrbu-fA2idoKvjmkVShVmzRTBM1yNroa048lj4nAsLoQ4chwdai52qOBRo8Yq_InjJE9WUXL9C1cwCkxSdqhFqeab7cGrDwbfJ9WLFS6EWEQ8p3sS-PShDWEFvMPhiIOANbK92kR7LQhSHf7nz3rF-tRhB0sCcD017ndpGNFJTwkXE2QyebZ8V2PzZgNGNWfy8D_vbNnSbrgc4W_inC2-rzvVhQKzvZX-Q6gfGR_9GjDtFcnK02X_gRh7W7CEM2ch9GR_wETwTHLRcraybJBEetw50jud5HX1f2xoynhLfoRSZ9CKwW9h72x_JH20gnpBVM8LnOUMMqYetc3q6RtKD_JTTWgnv48dGHOdWvt49mjiNAjQTDWr1ajckJrN4emck6Xk4", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100807191154452058956\">코코제니</a>"] },
            { photoReference: "AWCwydh3wVbnOUu3dvM07whr6A0dvsEqVuJ4uHQgnlVKGne3BG-IwSpICHn7s-uvsnHCI6BmN2fWJjB1S5b7oJwkbdSrHoIYhT3AJP4_5lemQrurplNbHz0-yMcQ0pGO5v3SrF0X5nXeDKg3n8Or8mRwZ0iO6c0aIBJaTahSpcPne36BpL40pm6wf8Z1416sZSAl28q4iTcDByoUkRyY_HZCX0o1bsdXmpxVb89O9IGgqvJ6CgYKY5IdLAMcYgcsLHna5BD7ylgplPBhKDNAEJUKDMGBL52iopJ08FU4dC8GwUIRcYRsOrJ4V6rh6FlHAiiDwxWSDC4Hnlu0goiuHrDtdieTtFVhZznwZYyeUbOh1t6jrtux-wo-SAMcoIrlFAKOOsgt84KQcYgfKKdPHYCBw5KuM4SYwxSk1GNRVpokr7XGxqZX", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106502635167962857461\">MITAMI Japanese Restaurant</a>"] },
            { photoReference: "AWCwydgMcfWz5JmAe2tc1OFcXR0qw0oINLKqFbyxxXdd3eAtCWs3oKcj5mYwF17RwKDpiuLE3Cn_RFP0oK-9VSONnQV8DTg-zgm08eWBjVYNtCnke3-uvp6b_rCbZibQZ2Z_hMjiouWV8RxMU5N4mMwSFctaBQVzmHRCajBA7V9TzIoVkP0e9VfjgfmF6mLOK0zrsfdOXhNcAKQvdVTDorrtENghHawt-7KQvqj--GOwNna689AZH_DdCvCd8B00Jf4fvpoeqFI8ioAnmL1DR0hkKn2Ro4X0a4KeHLYf2sF8aBPCZNKN9DTx-ka7btQp_HpJXkLeWrsMk1qCf0la_fc6wqZClQbTzcrkJZ1jo7q2_wbztU05PR5eS_NFJUww2YE1C9cQRbhxXSO1pYXd510VXWLSqcXBqJlsly7YJSIDXmyZa8hMjKeZazchZrfpmFzD", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105871494793319775902\">Махтина Алимканова</a>"] },
            { photoReference: "AWCwydh7HRKWspsUJ9C8ZiqEQ-0f3kptf_OZCvXzKQh_3YgirwdFHxaX2NWvn59AdKnN9OPcA89u9VsaK3nZaUjtbTuW9yVarEjCRXK4FqT5KFvkeokl7_1cTscZ9ImFH3qHSWMx6frjMEu2bUiYHa-SlTgBX-Jgxgt_QgoOiXeD9WeWsGndS5YHM8bag8jVmZUgCoXJTLtIEASVrY6BzhCjR9alXGLBb9Hl4MtiEwQr6vn0kZqvCF3jJ1T97Pqsfw1d3iXVlTDuhx7R3FSFIQzNrKekubP-B_qaS9anZVD81sPyoYIxKkObYDUTZqhIg2h-WQnL-TTNM3NsxgleNa95ZbLdxAP1EVKk4NAUddfQGMIwzixYLJ2OY6_4x_4db_Ng9eumI8tlnsN2ek3Q3SohPfWUFVGl2ey79Tm0rVFT0OaYI4Q_Xtnk-ANW1qCNhjP5", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114412882069819736634\">박보미</a>"] },
            { photoReference: "AWCwydhvkviL5TGL0SLU-aVofkmpVEYi1t8q87w1QQHdOsps9NYB8ZflHF-rPGYT-fW5CQC9lYFVKT0Aw2ZQhmuAhQfSi9MDgHfRbmhe3kV0v8FxXlvoe4obO2KnEzONR07r0QXGlFk86IhrQe7znXboa_9OZnofULrwgJ8eepmXeXI3wtPqoCTSEvYWdGIPmKslsp_XrLCCC1r5Vw6QD9OXDG4SpWTtq8Ap3RS34ykvnTTX6WaiLnbYWkuOVW6TcgGYCvZznwDZE3-MWeNcHJrdKBtyvaSWnrwz3wVe1sSLHmzifTUhkNYIyNkKQhwfBn6ztCZvOWAolKetKUWFH9myB7M9GqN_Pwx_uhhQHXlX0RK_GtcmeUKnnYAJVxxnlYGhnFKmcfwcFXltMngxxzoHXOGwDPdl6OAOzroVNOYRMEXZze2OlCgDYuNG3MgjoEmG", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105871494793319775902\">Махтина Алимканова</a>"] }
        ],
        summary: "가성비와 맛을 모두 잡은 고퀄리티 초밥 맛집",
        updatedAt: "2026-08-12",
        highlights: ["뛰어난 초밥 퀄리티", "합리적인 가격", "친절한 서비스"],
        tips: ["간장 새우 절임 초밥을 꼭 드셔보세요", "한국인 직원이 있어 이용이 편리합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "초밥", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~10:00; 화요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12591065747751981232", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=MITAMI+Japanese+Restaurant+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "나트랑 목 해산물 식당": {
        photos: [],
        placeId: "ChIJlQAZEABncDERwYydDaMUIJM",
        placePhotos: [
            { photoReference: "AWCwydgiUKl8CnzgkuNfDRSeQlbhTiRcnV7GVw_LtPfPc7SKEbCMK6T7TfR_TQheevaKeVBuRJ6Xrl7OTgy_eL783ZZ7Xt3UmgvhGhJwbuy1eIwfvqQdEozWGAgOAgai5pNKXYCQ88MC6tOV3fE9VZRRjmwDJgD8D-bjsw97wEOCr2j6UfzP8RCV-6FzY4tvivx1l_pSXBJOQX9dW2aKqfDEq3zoz6NdQ0Cuz6hhO8N13y-qnEdizvwk6GjWARGlgnjhVXbgd1TQuDvV3MYtO7cHYMqTgrvA5ZiDLEY9OUGOCReO_yjWLKpNtbPhReHUOE9-H_WeFIYeuRrK6yDdfhU3CNjqesaNZC1GkcTUfGTtQYDGzQbOtoqRPzEZMLDtQQAQF8PMNMu4bdkVzlvKlH3WaR4aeeMXd3AKrm4Cc94bcDo", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105566792339350414492\">Mộc quán Seafood Nha Trang</a>"] },
            { photoReference: "AWCwydiv06o8Pn4b55iOYtMFzLfFFI7JNRpPpjmTuWDLP5CpwpjXzH4OuBvhVCs-5WY7zab9x7fN41qpk2Ot1IH3IT3DCp0qFpzq5MaAv1ELohrRrTUKXx4lP4SxFyhgKkcUHD8JpeqyWJd5ucEB3eu3GqpJ0OuXRPl9XimfGNpDKD7KjH3DdfpamjaLEbAtOtvXoQKrT372ZWu7-GAaauAyF-CRlUC8jk6sbi5Ta6nKBT1gp8MEcpxQmCQWT-KK3_VK7A-hwPKfIqv-Uzoy1ghxQO45dPEbeqoLbLk0nHmoMpyvHO6G1jNkfqoOaK9o1WrzpGOxPfW_HRiLhgrJj2YJ8vIDbob-UPWqh60ve1GDqKyyPE3TTlrTMwT-p7r0-_-E7p80bqm8AjDLF3-1InUVxJXO6x3YjcGdno1sWBW8oLotNK9skpiFdeyfehx-dQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107887545517699765794\">이지우</a>"] },
            { photoReference: "AWCwydjVYrj2VdOs9VFuWKyNw-339gJIP_6XJa59hzbS3a2_hX-x5wHWf7RNgSHnlpCNflktQM04czwUt5usR4vZPflTZeH6vQBSXkaWtptSqDsh0t17GHPrex6F3_DbGrh_LvK30g-ZLd18yLOH5YMIre_xDAAaeLug8vJ74mqK4tTnXrS_eATKpU4yL5EPHuFgIXSdFar4um97s-Yx4uts1lR1wydJ63V_q3lWCOkQUu3oPC282ZohKmlNH6WYaZLGn8mYD9x_SHpD971IHdDNRoab5egh_1hIm_O32Uz__iZS1Beo246LUGSIDMCjKQp_3g_wNrt6Hdp7tHdMceLCwYYpLCdglpqzTlFgyA7V6ZS0cwuQ_FWIRYDXGuDGAilZFpW07XxYg7iMCBu6wNqmPUn0dBlUGTU9z1A4pK6WMbMIUJTu", width: 522, height: 390, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105566792339350414492\">Mộc quán Seafood Nha Trang</a>"] },
            { photoReference: "AWCwydhcINXNqbeoaHRoBVA33GmD9FTudygoNbbeeF_4LR6KjtMtopjS6ODXRgXBTpvZJCvUW42BZxcQPcs6SRjTa9HtWsYWtPJPSPug3NKG5ZjkJzW7dyDJ5Mo_cbBHZZ-5eIJfKXIiKr--9MGGiji9AXuf7LADRMib65d9qaWSgVk6ZOn4zPpIVvk-kql5Pq0tfdXCgq9Y2bfUn9GL2ZKFQehq83k44L8Rr5wjkJwjRR2Ykace5w1kzMUgCNjOnLVJG3Rq5TgnLrCeQe3fMJvfrF0F-IOmTw8_BEbl9Xi7dD5HXjclRqpNdblOlVwXRFXPqGI6F7sMc8sO4fRUN4ybKjT7iiD_XVc-1TnzSKadAWirOlDU8yNa03KsRCH0o2UM3VOkn3M4LaaGgDL09LSatLsZ9enDVd6cLeSGyRqJB0m2lrSrQgiafwlcSwcB0dRc", width: 1609, height: 1207, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110180399218839671892\">Роман</a>"] },
            { photoReference: "AWCwydhFKWrgvg7fP_y0ZSEzTYl5hdTK3pFrgA3QtPNkjKXhBobP_v-RAiWgTjMCvniHBjSexGeTquxmZXF649vYr34SrQ9sKGzFz45mP7RBwi6qVn3UpmEijhjziHQoqe-Jx4c8yfj2t-nrUapbfx-18vH8ytcahFRRqhpdE7UXnrXNmjRKWTbefM-Lc3nEC7-ZpMYPbF8d74y367gLKY3cEWrGPbFlg_pAlJDd3DOWqWZ3k3qm42HHu_lsf82jk-ZYT0jmVYIVPSCIWhXMZvHLUsXocX-Tr_IcsLKUkLXyvHq8B9cxFPlAn4Jo6IeCufqyCkjI0fhiVzF1B7PzXBACSXvZiSeSiHXfcWMkc-H7OoCRO-m6DD_vbyWRgIweJxacEfpDTUJ0XfE_Fk-y6LQ7u0urZr2jbx-WsZlwSBUvzvSaDTu2po1-rc9n5Ur6GUPs", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117875118509373822991\">蔡世勇</a>"] }
        ],
        summary: "4.9점의 높은 평점을 보유한 나트랑 대표 해산물 전문점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["한국인 입맛에 맞는 맛", "높은 고객 만족도"],
        tips: ["언제 방문해도 만족스러운 식사가 가능합니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:30 ~ 오후 10:30; 화요일: 오전 10:30 ~ 오후 10:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://pf.kakao.com/_bxmriG/chat", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10601496213370801345", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%98%ED%8A%B8%EB%9E%91+%EB%AA%A9+%ED%95%B4%EC%82%B0%EB%AC%BC+%EC%8B%9D%EB%8B%B9+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "JJ 씨푸드": {
        photos: [],
        placeId: "ChIJLZZqGTNncDER95hIPN1YNFo",
        placePhotos: [
            { photoReference: "AWCwydh4JYjV1zBivn87wuSI_B_vdA8VQe6Po00pbrPEnoN5Hwz7OR13sJ21Z4EiMz2QvgyRqtytiLfoyexdSGeEt3kmYMTMe4dEBJhc5A3Oc03rXFH3MbUzcbaEaEk3lkK5Xg8LUWEGGmSXDEmsYpniu86LsHF9HFnNYBIDCkrqlvx-svJ6RsJQLAUIFBEL0mf4iAdDO7OqEgTj1ZxQv9c_VASw6TiALRI9N7fQ1LHRT9EQnaLBl2NCr_4PwXyzKR53Xv4QmrorlPirOFYrU2NCVXxaDlRNRLVPTQWzKg7iKfQOThWmX2XpZiD9_Uc1-NYsdqF9qL3igb2vhdEeppekd4bRGkbO-lhWm7O1F2l6H2I6smmNcq3Dl1Y3hcxeChMukRNd8Vc0jpfMdKhyvZNaacbQKuDalWx1voE3-37EiQ58y0qlJKT-LL-kf6Ovdw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105492811487859295722\">Azizullo Temirov</a>"] },
            { photoReference: "AWCwydh7WhCndBiTZDVX3j2_MQ72qRLxiVV2WbncBOQNbMQDLQ4_9lJ_pm5pBe6yjgkuelzMpRfYn7YXdumUeFzsCnrLoRBeTWqOAspSzDpTv4MjM2qxCb90OwtlA64hQxp6GEWPXqvONA_f0N53D6SUiB0YBEegxR9KR-yJH7UVFOZqVatox3Oz9B6AL-JBfbwQ2eqX860orogrAI8ADdUO4oiO_gnyQscGCHcacFQVnsZvyH9atObfUsyrzlJlmmmpkHsgX1-Mw6sG5ctAEvsqxw0K1Fb028lCfTrJ69hDte4sqagnasEq4O0aZtYtf6NP1MtqweZTGStAPAIGWUo_OhCd-YDoAW4H1bYP7Fpu7hnKyNKMYwtdFkcrKRHgyxSSXiknBBRxba9rHuKsErtS_XHym--8abSsKW9rQiK5JyzuiwMjAcD0OrblEvWWz-ul", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112485883536836498541\">차민정</a>"] },
            { photoReference: "AWCwydjNgCtKOSG0ZjKHPxUDSTjz7KU_3puM0NqOrn4YDZR4_PZkJze80IvWAzZhMyeMKiiMaLMVvkN6i3yC1uyynkwY6uELuWqjekUufHFH0ljap0J1lBBROuiLlpBlhHvFpdDy3cqHreb-iELR4i_MKqvbAHRccTNx64H0MmVkUNfgno27l2shBZMQye0dqxAPLXuWvOwi_Ip4FH0_hNsO6zSqh7swAHpjTJa8kf_FCuW2SuEcVMf03uax4l-Pi0-cqzI4bn08jOBZgI0K0_BkG3YQu_6mbG3xm4D0AwDHMwPb2XUgiHjnzvWhgKii3kwzm1KnSL6ZpgYAYI6lzoav3w0uixkZ-SYjLCyLveBp33dkEUhdTfIIBNdpUwFIO7mfZ0DZf34IfDJrMGiHmyf6jTLxlzoGETIJpurc0wtWey_ChCuquCSeIVFKKPIZzi-P", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117090613852303498414\">임형호</a>"] },
            { photoReference: "AWCwydj8APw4q4kbz1Ac2a3t_AbVbP-CxrGp9_dExhnL16gVx2tUHwxw6RwKcTrXeWjL68I8SAxE-IC_kibaEC8p4Or5v1ySdOXUif_5jPiknbG8hoMNDPVuNJEsxm22a1rQiSs43KhTdN3uykpv8nBYapc6opviohuxHjsJ-xOUJZQvXWckQh5PmFi6uYb69aIMWFYmCLvwkCphl4fmiG7WKR1mXmENsQQyL_aUUHT1gaYcQ3vCfQ43YKO8vGBeqasLEfAX1qWuK1DfEgQTTwvAlo6WWhsc9dgtlGusDHqaJiWdFJsfEEl8X7J0ijicfS0PAOm54rxptUSaG6jS-ThPsx5Cot010WjZXpqjFGdUTK8EN5LleQHBZ34GLJcO6Pio3pHu8AjFIKNTUTf3NqQ-u8hlSNo1uEPBzpua7kYqvP1xnpexhq0W1JXyQJnQqA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117027175694147501688\">김서연</a>"] },
            { photoReference: "AWCwydjB8wsVbtJy7qZNo8d76ogecLcukNWGeYZrDS6APTOtK_n6DI5OVgbuzwAxaMA6710LhcuHICXzVDuG7TUSMitBk420pQHdUscZAVXbEiGepiitnSEAM5dV-yFjPhEPVeZPOds2o2bnTpsCLTO8u-2OCdewtL88f5b3vUzh9VSxHzw3zMO04RJhw_0eXJNwXt_lTJ7A0UCSctQ6V8HwRpYUXaOmEtrRevfoyPSiAANFC91qOvPvkApln9J-X31yMB02qpPj3DbRihYEW1NfMxksmRJhGMpGA31Wl8AN0A4Dk7vsksuPGp1CuXanvuO1bKTIvIvrMX-jscLWjTS0o1XfzShFHFjHQetXDeLimclBSFLallGy-cOEL7gO_1V0K6xLbIASy_Q-qqgg-AiF37B6CeHi7FHsOnmF915ITXbBRXCqSS2bQgdGlUZ9sx55", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102105280188062955704\">정연서</a>"] }
        ],
        summary: "높은 평점과 수많은 리뷰가 증명하는 나트랑의 대표 해산물 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["랍스터와 새우를 먹기 좋게 손질해주는 서비스", "한국인 입맛에 딱 맞는 해산물 볶음밥"],
        tips: ["해산물 볶음밥을 꼭 주문해 보세요", "직원들이 직접 손질을 도와주어 편리하게 식사할 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:30; 화요일: 오전 10:00 ~ 오후 11:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=6499917869424875767", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=JJ+%EC%94%A8%ED%91%B8%EB%93%9C+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "루엉쏭깡": {
        photos: [],
        placeId: "ChIJ76O9Wr5ncDERPDSDjrd2qys",
        placePhotos: [
            { photoReference: "AWCwydiLB2olmYSA2j_e8fkhEuz4_i5myVHTG4ULdJOQGeduVD0Gv6ZVnKMor2hWgBxfqQA-njH-Eu29uXhGPf8frRoLB4XFCA5K_gRBv0UdtwrKbRVg4cLtRWG3X34mY5jJRZNEOOcqaFTUGaVRJS531oof01eqXJdO7Cosz2Zw0bNFMIEvA3pBWKHj1cTIzOO2UlI1W1iKHbExc-bmS6TTT7mBlXk7ac_SYtE-PUU2N9MNwflUKkY239UAI81cYzxl2Of6Jj1Ki2oQQZFIuu_4Yb_pMZXrVd_xdjmt97352LnIlLW3lvJNb6QUXX7MLYP5xxA8RvVNY9OxzEPSEvkIVt9rjIzybEwP-3OgFGxvgHIIyXEgNdmPLnFXz3cDPRO5lMTXCYPwiDWF7LzKNedshlzi_ouSbblVPA88Jhqn7FkKlHtHfeCGE0KJ6bYA2QHO", width: 705, height: 712, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109496632046601904580\">Luong Son Cang Restaurant</a>"] },
            { photoReference: "AWCwydiYI4uZH901W_gkkokjgUlAQ7nCp8HM7-GiS6TJC9N6ZOYVmIMizXHUdQjomlzMP_h6Qz-PtAuaDzYaL0NFrT_38QU8eIa-xZp_VzPUqehLDaSVaFyIk9K2z_FOrFgEFFfp1gFuDGBAMNtKZB2raORmhlLurU4XVNGEfkZSut1lUjL3J1foH5fgwNJfsNoqewhS-WSrWMf3SaK_qRizVopLuK1Z3UuBKTxknnI_54XHCbo8WFPD-S3g5xM_yA9sK-HiLw1oSWdRUitttDWdhfN-pucVd68uUW-cPFfuBmunS8jDfrHVPIofOnTz75W2-w7WuHKdd1d2mJbM7Np9_rbEHnJuIjs1pi8pMBXz-JxOASgi7tK5q78q4Q0_HTTTXYgqI1t36RvlJF6Q7r8Asd_kX9_YgM5wCdAc6E2icUA2w5ZaTTmvDzGXZ-XBw_s3", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109496632046601904580\">Luong Son Cang Restaurant</a>"] },
            { photoReference: "AWCwydgscFxQjfctcNSQ5UDRr4ysZX8iLBFoBN_dry17Ea-ycbXG0NyQk9JzRLZA2O2vypxlyJB7HN-oJ6E2Y1ZT6FQR7uB9JwtawKrV3DzPN9RwDnmxX01xc9yB78Nqpl5cuWU2tyg7tTSUgVF5h8_IRVTwfXzmqflXljC_rDpUXjq8QZJMjA-58CU8S9KpnSDrLDG3Dq4wVi4Z89nWGxLNY6iGJ4fSQk3ipSvQE2OLv0yfhGr8e3sbIOuVPve-rcVcagsh0t7_ofmVWWEe_bhNMMebRbwy9F6XCXgenqm7kfYnM87MLWAmHJ15KZajwgf1So2HWJQwlKnUN8IrF_hq0EncJiHjcGKbEzplI9f7DNxp4BZfZQJ1jg8bDmTIupO8NIUztIXTTuvz28t4I5rmTOe7lNf79uuWF_899lsJ79wd5xRG7F-TErp5Tt2EMlgL", width: 1256, height: 944, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109496632046601904580\">Luong Son Cang Restaurant</a>"] },
            { photoReference: "AWCwydjZy0PeFHGQ_6ODuXjX9VI_ytfrGpEufvoRtalklSsiwOcQgujCPdapX2vh5GKIiARBZhjrJNZt9x309xjwuroi57JORRxfX6J88iV8HpFZAg57g0i_PuiW1FdcviqFJVRZKhpEjvb2VV8nuCo3Fn1h1D5tNl7NCKMUMJNlLlxyOVggL-R9vWYED_6byzti6FfmVXw45XiKxzFt-diSFJmrNJTbqplLm2hvjmShQoGaXWzaK65wQ-SMzfnGpn4NFMQQfM9lGslyPmZoro8XfTJ7ccMCQDAReUDeyg1igSBLjoFrQPTMLk2cVo1JeYpi5pbHb7pTTppKeDgFOhrYouek17tT25fxIPrllmBybzzYWUEHHDGYTdPE6qn4xx6BmRQirPRnFEVlCLbbQOOVXK1CbLtBQHgW74nPU5jMSUyOnBW4HCrYORrxytAWe0yC", width: 1021, height: 842, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109496632046601904580\">Luong Son Cang Restaurant</a>"] },
            { photoReference: "AWCwydgdiMjMMLpEo9nG6-EaNTr1UvqgE8jqoUGrO40-0vbisY0tAxsfhb7OvwY2soRQyzNt12zeK6DMbLVRm4esMhdKW2Z6xl1ZgWF4oGZ5m_2D4jxWb40kw7a0g7mPcdpYyOdgS74r0KCPrBd-9BaCKp5pMPnD90hKE3EhDoutQxXQgkmkVrCT2cEI-_Z-xy1Ao6Q5j-piFqpUmEPQQf0o-ADH1KaYOb7vKGY-9kMlwEkJ-6MkfE0rtp7zOKrnVOn7xSI6LK8O0oEGL2n5RNsjP9fUPfygap8wAREo2iB-EclygBBFF347Wt3KvufPIz-jGvkpZG14bhVVkHSv6Ah45PGWM_5ucYJaNEtckb0vau7NSqGG-ZfFyo7eyukFp2WRWHqLQJEGyRpTcxmm85mBRhUbAHZcwB7oFkjYCwMdd4MT6mKshUK0WrgV9yu3eg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116650133707562570451\">조한솔</a>"] }
        ],
        summary: "높은 평점과 많은 리뷰를 보유한 현지 유명 해산물 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["수조에서 직접 고르는 신선한 랍스타", "먹기 좋게 손질해주는 친절한 서비스", "한국인 입맛에 최적화된 메뉴 구성"],
        tips: ["2층 에어컨 룸에서 시원하게 식사하세요", "랍스타와 새우는 직원이 직접 손질해줍니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "신선한 해산물 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://luongsoncang.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3146739295390479420", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A3%A8%EC%97%89%EC%8F%AD%EA%B9%A1+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "라라 씨푸드": {
        photos: [],
        placeId: "ChIJIdBzNQBncDERF_21qmpF6i0",
        placePhotos: [
            { photoReference: "AWCwydgg4K2yydzKsQMwQf7OG19z0ItldJyB_wenniqEq1j2JZZARC6rYPvqw_xd19GCeprbc8CpQtb3tmOnIljSjOtxzoz16qfS9kQdeBUI9Nnp6hXjIVgUd0aqf8VA8PEUvExL4X2N98ktaErVlnu0jHpL4VK83cXGdqK2IQYrkydMDaMVcVDtkwGUbDchiprMUuHwzcr-Fv7L6H8vfmYKwdfnKDn01cJByMV-Bn9tVv1P8eYeZN9kw5SpOTU0FP8TMw5Xz9szOFwmGe5RsYGHxuW6aUuO2lX2W6CdZdFqETJiYO3izlMErGpn3Pt39Q6XLNKd_FxKiLhJPKYaYsUMRG9UDkms30h2dB2PgVEXkm0ttgKoX8pz3JoZedNg4kEM3YINygbpl5Fl0o9FJ4nwyMEEkuadyrXgJDzYCfxgHMO1swmjMAYEB7GwS2em2w", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102918977608393240103\">윤기</a>"] },
            { photoReference: "AWCwydghhT7tLJRdxr9wrdnQdtzA16IKg1ItzihFY3-2K4SIx5cwlgwrUs2biqibcsX4anzn4YASHuvQF-YZc0QasNQXHdu08jr98QPBfSWzP293u_9TOcIsKsXKt3Iy-nRYhPHEPhHdDvCqKdlbXGAwagzTJvOcWKKXLQwEh7tCHomBARL3sML9wREQjAqfP0bzV2fG_6u437hHsrslclrnQUfaVCB7cFX1RMkSNVGgKI53MlXF68Ituy2Ew0lBNObCAGlamQE5KZkErc_8gvw7DRQxBSkuEp2d-wzsHodkKqbvBOFWWNJDEt8EOuRmxuwgZDlhxLO20jnt-n9xNl4y3LvhbgMWyp3Ty75Bb9Cc7qu4X5bRpd-qSltyq2OSviLZsuk_NcUlYEDfG6zpeZS9Ayf9z_ASIJYQN6ao5EtaDRi48C0moEz0rX9-lsHnJi2L", width: 2560, height: 1707, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110354478949105201324\">Lala seafood Nha Trang</a>"] },
            { photoReference: "AWCwydjh_UFRv1Y73b_gQDKu4t0Yce6IKa4RfJ4zS5u6IG89n_I9UQa2HzTVeZ8Vo-nwoQEhj6l6ndJUvlG7qsFGo54fN5cTGqa-C2LZ_Vl1al4lJDU6HzCdIzuajJhW-UpvtXmxriaDZJr53uEIYy3ANOMpvB9-bywJul5mgGR2nIJuqQJPscEBEWpbFoEIxdPyNtteLi-vrpBbv46QvA0vFbwBsiQL1yTiJTpSNmQU7zF6lPZHW2R6A79vmvey_fwE2lgAQxtopixvm1lT-UYogVeRYzFGrn4Z6rr8siPGDj3IcY-Zqlpplu2NGmTVuHHY5DXkfBPY77QDWBVnTKcs6r4v1JqsYL3OgSTF2HQ9Wx6Y0qwSXPKzDt-i6WAosmjbDclFdG42lB1UDJb8vtCgmhELGRvvVyCBZ8zMd9VXzmHHCdUriw2st1VHvEWfyXQT", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104739122303954994130\">velliy h</a>"] },
            { photoReference: "AWCwydhtFx8lsk121_YV3UqN2Y72U7oGNQ8T2JySYJOQXdGbcuAdu_JphhY4WDyV9JYbRIpw6o2r55bBA7Ge-NTM7WZ3gYf8AAefQuXyMqd2Zu14gnLQh2Nxt8tk5gFIEbjpnpeIyR5lMfNm7H7Z2PXS3GFWr87aK17b6f3WbruzKcu2DPDfBepL4tZg3UBbzc1G9q61tNOWP5gw9MkDPO2APeGezejoR5mqDL7tcTLTi5S86L627cdVpjlnHp55pQdUf12aM9HCc0Jb5Dv2Kox_pHNU7bEVT1C71_rheYq_rnO9z6rx59P5_NQPLHE4QQvL_s3t2DG-jhffhjXHklWD_XK0meybIf1aM-goOZvru33H7pgqFeFyuNbbI0QYk7E-Ulcwx_yIEEV2z0ni10hzx4NpFAWHDODTvU9A4Oa3kTaaYAl8-OuLXLVJeE8KSKvz", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107050527302558485112\">스나</a>"] },
            { photoReference: "AWCwydh46d2yLfEZNqo-m6NcpAc2UU4NZOyDdhp6E_2DOOkBB75zLqWuSrXUdK49eqHRBPxphNMtZphqoeGU1Qs3g_4QrjKFQKRjkqknhsNGe_gLiWVY4FthtmqsmsKl491KA4VBup8BeXe_l2tWElg0DsoTatVAphmNKW4F4ODxDKTbZEx4i35bhec-GSeDgFVjY4GwzVHE5Aoxkq2c0rZRzUEjjMUT73xW_QjYrV5RrS93HigtlEKgrWx7gq4oe4evZ6Np29x9y2tdiHpfOpkKVtldmVWXnJGnoiQM7QJYKT-2mooGZcCmP-wDf7CtCsL32dthj6uHLIBUUi87j5Mx3bVB7nn2C1rEVGqjg4IIooXDdE6pueNfwcnAlUaH7JgFddIChWkren1ShiH1S5FOm8i1ty7xBuOKEEN5zvuQYLPBM5qQp165mQ2bofZyOpna", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113817688825267442930\">Neal Yang</a>"] }
        ],
        summary: "가성비 좋은 맛과 친절한 서비스를 제공하는 해산물 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["높은 평점 4.9", "5,871개의 방대한 리뷰"],
        tips: ["가성비 좋은 메뉴를 선택하세요", "친절한 서비스를 경험할 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3308533200689954071", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%9D%BC+%EC%94%A8%ED%91%B8%EB%93%9C+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "큐이콴": {
        photos: [],
        placeId: "ChIJSYcIiqBncDERClg5VvC4Ff0",
        placePhotos: [
            { photoReference: "AWCwydhx8EqdmosJMCK115mzfCLIoadGr3_jzUNH9Q06u7KaCMXsA4kpvvvedQG-fxadPTvs63SldYxBc1xZuJiSBm5fi3-2YehVP2eEyn9h7u-OEJO5GKz0Y4WAt7rt1EEqWOc2nXGGwc8DwjC63aOUxfvCV-LC2G6lEY5f_IMxKtiTjDEBc3rlIuD-Wpky6sbfSvgTTa_tq87lzdIgFTivkslUow3MBNw06I9W260l63UYMVIR4K4eMty3W1lB6G3YWdzBpAl6c4IFeOSTSMFNQ27HDWYeRrK39kRzNnhprRqYntrHBXci1vy-Ma3-e_5SlUnouQmxSWRqcuiI-RK8iF-AuozoCddMQ7JcunAjHTjz6AXYsrEh8A5Wlm0MG3OozarHyOUNtEssTmLuE2LmHXk7ofEqdw2NIGZePelvlgWBKq3KRs3PeSTehjpxBy5W", width: 2568, height: 1926, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111430742903938403922\">CUI SEAFOOD | STEAK &amp; VIETNAMESE</a>"] },
            { photoReference: "AWCwydj6JhVK4CPTnYzxNA9Q0cl-128qxAC1cwoMdDPYaQziLLaNrmwhD4fAJvMRt4fsCCwVeHcB8v52_QxKbcMmnskvq6nArbeydYhcqGqeqwWQ4VLrrcHoXTFBWMHqaywsK1b2wNrYjk45FJv_qAmaQab7F2_Zb4RxGn8ZDMr2ihRGuqWsvJm2D30u3WWJ6B8fIGgWBywcPYId5xT4PTW1pLVWVNR0cYsYcoga1MWGd_0tA4cDwT6d-tOqjnsb0Ig_GRlD0vbDnIVQFMR5gmKFz1HrvdmWT2AVfOjGgRjYHlLO4qIa_BqmHLiO-DenHl9eGqtJ7hEM6bqoOGyoQc3Ols4cHiGGxtWyrSlj8tCbovPx_caDN_AiCgyuAKeCFvtPjKfXQ1UZEhw7sNYh2JQ1Kq0VF16MH3x9gIPg2-V7XFeM1OueX0IRSy3CTUC6tlvT", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106377393569976387511\">Ritesh Ail</a>"] },
            { photoReference: "AWCwydjuD7rUOI5KcbOaxzPkVT3rMtUukqbN2cso3mzIIdDdoRnuUmXC-7xZ3mOAp7GlKCdlzOjhvQ76nqMEHCvgy2vVOS_Z_phjRcnd2-XKqrItM9v7Z53_wymAX6yJESry_tdXHCGR-BiWQmhBLmkBLC0tHhYx5-l95WgNeyVCB1DPgjOxHAfxj12coTizE_9aR-Ut-z-ZnoIU7lL6WFIuNiTpKno6tJCnvR72VFXAj5yJGQqFiyl_rcai96eWQLPZ9aCveM1HpKIDsJsKQjrLMsShg6nxGvJkj71SwrbQ2_hUmG2KULQKjUS1SJ5mVzn6FVQSTb8NEb-DoZGmYWfkcP78ix1HYw-m6mK0Ae0TIM_9HypHL7CkdbZZ4CV8w0_bEEUcPNda1hfICwRaZsifx1PY02Gidd6qSqXbgJrTGH86nNx3A3x6fK0m2B2drGx2", width: 4800, height: 3199, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111430742903938403922\">CUI SEAFOOD | STEAK &amp; VIETNAMESE</a>"] },
            { photoReference: "AWCwydhMHkgcSkyadbxksHGoPRHwLqxeIE6neLGR3b2Yv-65ldWctZvdHpGohVU17-Z3mtI-nZbpsq89GEEtp8GZSDgDScKDGS-hMJ9OXJalvD8uQJa-pLMrcMLs4UPUpe6SdP6EyI3xNdO7Bt43GFBqjmR_LbfGNSMbvIUrYqPx1W4JfJbSpBPCSxFSLULG9_UMjFmASRlBZBcd45MGTFIBag3GyrFM7ao8MBi2hBukebXaJODdr9ez6sy7_MIAsCYMFrpESrfTTN4CJnDlNgvHHB6q-jNCObATI89VaYn_Icj-lsjNGKmTxH50gUpHAWE1vXRwfLmSHD4A5O14rnsUkhz4iFkQeCFDEJBo4LiQ3IeY930Hx4L8Oi0GHa20DTqrrdxNNj9MTgGGiXLoq9XmI0BXciXY0iVFZXBcQ1qRBqlTud-dKrs_mEg6Al0YsLaq", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105001893834054802313\">최쑨정</a>"] },
            { photoReference: "AWCwyditrb57tO5Ul-YcZ5wF7gGS1xuzxmvSgDh6VUEJ2F5DBzHLmg6xAXaywCYpQn490WDXK6kTrEgVstSNkXsH6W7PJwGzc1yg_6TYtasQWdVG3-VvomsUZn5HSLaf8rIZemVCWGyo6WAkadYcYbKJbibA1amA005eIUF7RxV9nOOvXGuu7yKj55gvmseEZsS1ojq2Uq1Y_H4Nmhpk2HIk1KM9nJu7ZCJRApHscDQEiY7lBZPjX5w9ReRMWVzsOMakRtohxbTSs0h1OfZZY--O7KjZeGEFq-e-rris1zmYqlGp6I5gktgotOnUK_zpQsjbBBwwSksylHZgSqCt9g-p2yy61Gabz3HYJJSDkIuh4cAk2h1V8XIGCBYv-OPUaGVpg565jyweX2yHLUC9lG9uTRFLXj4LgO6_FMoFCAA0y_xLuJj7wvfvxuI3IjwmioFV", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105729346000113377976\">vino</a>"] }
        ],
        summary: "훌륭한 음식과 분위기를 갖춘 인기 해산물 레스토랑입니다.",
        updatedAt: "2026-08-12",
        highlights: ["뛰어난 음식 맛", "매력적인 분위기"],
        tips: ["에어컨 시설이 잘 갖춰져 있어 쾌적합니다", "가격대가 조금 있는 편입니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "해산물", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://cuiseafood.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18236685608484952074", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%81%90%EC%9D%B4%EC%BD%B4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "강유 핫팟 나트랑": {
        photos: [],
        placeId: "ChIJ47sauO9ncDERX0XKj0an-Ow",
        placePhotos: [
            { photoReference: "AWCwydjpf4nWa1zt43O5L1gJeTPCRgfkxJHQONS-J_Xz0mM0adfDFcwSicRguGylKR6e2FdwDVpXo7iOeGyLO4rXGRAIPY2B1ISFv4Hbd846Edk2Yz-q6vZXEhx3WoxISzJRGJR0fDWTQwqzwJc379L3wJn3d5r02nAcMRD_1eWfCCl4G7IJb78DukncOPW2UKDGC-KhEUSvcp1Qrm9RpMv4YO8VCJ6KJscQtTG-N7S5Xv6ax5LVikW854aR0ZJ3eQAK9AUpAz2wEX3srqe5kCTBaGbcPHTL__NSjudQZrq_a1XLitiltUrlEB14AOlgRcDIDlUHrJBLHq1vzu-fptdMLy6g848ot04Kw38J9o5vfQe5p3lCMh9pvUYw4ARWGHZK6vmRGUFic1qhF39Lh-YJLqWwZU9Dvb0yKMiO6D-8ff9c8Rg", width: 4800, height: 2649, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118026231256546158001\">Gang Yu Hot Pot Nha Trang 港渝火锅芽庄店(Lẩu Trung Hoa/나트랑 샤브샤브)</a>"] },
            { photoReference: "AWCwyditqoG7mbWjA9uF7K3ZsGG_P1xEwvBkR_5AWUOjTJB3tcvoOnO9ocxVatz7CtQjO7jLom897yRFBFBe6Z4GUBKnAT7tFrOfpM3vN_D-xE_CLKY_-pYs_UK0M02rb3ulYLh05GxZNH0oxdemANxVKssSuyE1Z5d_7nBs_-J7UiQ0hwLPsxg2kN4CvIbWe_4SOckQK9dnPFgOnUplMPDqjiLWvzbLPfbkrGNXt3y8p0-X45_sJFwXV0LeeLBFpk0lNUE_cjzzIIonfQEsGqqcJkdbRys6s1Uaica_Cc6riJd9MfDnE1nOCC4jxlX3Vev2bR5V9RLnwN78IHn4QB7BMbvphvIHDhZVrmKDtW7FJ-SVBKMB8_-goQYiHAL1W_LbR39QPR3Kt87fZpuUbKAi1BLMvmVZ_OW-6TBrmQ48tTsh6zoo", width: 1440, height: 810, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118026231256546158001\">Gang Yu Hot Pot Nha Trang 港渝火锅芽庄店(Lẩu Trung Hoa/나트랑 샤브샤브)</a>"] },
            { photoReference: "AWCwydhpqVXgKqcHADGKjIy36bavVmKDUh_2hk1W6ITtzvLLwwkItzs6aYKiJtmF-BnIoTBZXTqSVmLLgbGmJdtnC5D9HZsDrrEj321uUN34UeP97xmwFbUQ2snbcs57hLmF0E0nO-VvulLU8wscD_YZwgA8pKa-j-muoOEHDQ29M5G7VYNUhnz76Zl21fL3Nf-cKFpdS6WQqzzKGuMXDzeh-zJN5ORSfwugVEjDYi9aZlu9TkNK9_3QsJ4WToNw9IF_vZczxQ7_kufRQty-5hJk-IMD8p1sXmegxOLnXpgYmrS0zRFla_Dcz9dOmPy9xrYzRj0Lh1jjJ4VoNRMDstvghRxczN8731CednTEgoBH466FJ_up00W_Hj0XYb_3Cmt_YtsSLXDL1RRKw1BLdhhSaGkZoMyuo4BxwOpTAHzYYhR-uoxuKjyxKqnlrzluPm3q", width: 1721, height: 1132, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115504902175900308033\">Nghi Đoàn</a>"] },
            { photoReference: "AWCwydh39CF99DgxiyYySP2QDKlEt41M0RE5erSv3orDx3c2oyG9lq1an7cGA8--nhgy91I0C4OOC6Eg-LXadAqVAsy8u8DDc63uI49EE_WYvXDK2EHf9ysGdCkNwSuKIeJ3JuTWRkRH5but-s9GK9INYMBxdUifKZVtHvLCYIv29v8Lx8GKs523iAs2JIbJ8RiZ37U4nwSBUhPOm7DqoR0ywEAHnW17zX8gOt4p7g3pL-XC8vDso-K136ulgj5tF6jTuNckzjRSsS7ydCu-aXRSk6IcFW7KBd6_1tBYrxi-LwmIQ8E9Xc70QScO7mETl2PGaIaMYMs96hG80SOVuyQYRCL4OIuFJ2IzgOLP5iWVpW0bRJK4OleTdsMUpIecTGXr3GuhjR89anDYYsLQoEGbTL8ELcCbzl6qmFbuPgqXNoBpbZolVsEfFNFVyGupdA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105136878262822402186\">Review Food</a>"] },
            { photoReference: "AWCwydil451iIR2Pmv2MmAd14uMCV8QSfqISiE1f_jYE_I4NbI6MoymoEs_98J-H21ShE0PNRBU8KixMUbFuGGBstDyBwbShJ_lh4G8BgtvsLZV5YA2qXIiOXYq2LzOHwCjLyvrT3RK5el6SG-LkJBu-fwC_ZIS-sxCSgb4t_RwrlFPwQM85MhdXjYICCq1wDSUO_8cR4OiZtPLP2CSm2x8puNWm7azCfwBN82TZk37wSar0CaTN3g3opgVUEcZrcJRZ0CwxcnDoTl__A3sD0UGUXwB3xazirdyAqG1VnmmUTYSeYPxHYqz5ksfjMtK_w9ovYE_x1Cg3xx3LyO2tmNcfVJCjaSMXBWOI5VmA9ZJv1BdmTR7vFFfX3YFQ8ThTkj_5eR__-zcKmq4ti1miwQ4XN1Ury_cufsDHcV05jB_zwwrgLkzOeVDX4FMJmFFg0Q", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115413218193153803400\">xunpeng cai</a>"] }
        ],
        summary: "음식 맛과 메뉴의 다양성에서 높은 평점을 받는 훠궈 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["맛있는 중국식 훠궈", "다양한 메뉴 구성"],
        tips: ["방문을 위해 미리 테이블을 예약하는 것을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "중국식 훠궈", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17075581908677182815", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B0%95%EC%9C%A0+%ED%95%AB%ED%8C%9F+%EB%82%98%ED%8A%B8%EB%9E%91+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "청안 딤섬": {
        photos: [],
        placeId: "ChIJz9YkajtncDERLyGMGZXvox0",
        placePhotos: [
            { photoReference: "AWCwydgEfdSsJrvuopSkDkBZropk7TOYDOXfosNteXfSUs3qoLZVowuE5LeAb6khEwK5bx2LpBHaaab34oJJVwNv4TDLMIb2OoZU8BWqQWxVjFubKUDqTbP8qIzTWo_LIxGkqfFT6uLcAWHIgvabJIaoxx2M_sJZA27AVFsJIA2jqlZ3n12rL6lL05j9raC2V8NHjoMXKFauhAMZrtI74Z47rh9VRnzKG8sd5Rj4GseS9HHp6MlxvtdiJa9SEyIB4T3IBfGIf1lnPeTUCwj0t62JbYUD_qzqOEKYA5Tnf0cd61koi6oWudOy-2b0ghNP9QhCvco01GEPnTk0107uylTxv7INM3xXc_dtOvmziX0xOZnKkmrdTUFlahjEUWfP81yDF6XW3u0Vu8j1oPR2NbB959ozakmInCuk8FW9tewYdISekpw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112065769151481313282\">Yun-hye Cho</a>"] },
            { photoReference: "AWCwydju_sw7AOfuKvjqfTFjXq9Ab-Q3osFg8wZ6YqmV9gJcDsoze5AU2uGkl3_3w2kHQ_ebbmc-ePW5ht4zykQOhQsjRsUbEE9wsQtGvoYYCuXiyn05Qg5A06JMiTBRf6V9iMLD6nGsPKS7qdVw17KWYuU9HvreNSgiDb8zvvTg3dRcfgfrhiQUgurcY0IEz-sklQtp4kbjLv22EccOxYWqSIVIZdBCyrU877NvKN-JZaQKUa50hEvxzeHSCNUb-NXuGb5hQ3azkP1_BNumniZRaEWJ7H-ANj1tA3sVlmA67ajYawLhe8JlOdV1wSjZpp8qh37t69eqaz-V9awIBSSLTTD3h5nBAXX6nMRIenqDdbISwjchIn0ZeMUNVC_23pNmBr3RKXr0Sg-xoGHAAU4skDYpwaVAfTsXgb8vIwRJKeqrMEThVkVrNDXKgHDyIBfI", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117040293119794210795\">Yen Bui Hai</a>"] },
            { photoReference: "AWCwydjckR7TxnJEjVjYybdw-CTICpvQkk963Irgp4RyMTmOCIC4Wq5T5dXesSPtAyHQpsvIztYle3jRH_fJahc9Xp-FHBl1iQNtNQOXwsBgTNH8uKiq3YBkTW6S32x_KOX-0etKF_EZcORMzaUdhfz3QwmTIwLKuzqI-lmgJuprLLx5FN17H395bkDUI1rI_idG_ogQMKRL7U71-h8Yz9NjRZpUJHVesfYUNspYuDVYvSyTQbr1WmuyDeSsq9jrPjiThnzCuMMoknGDn4Q_5aL0CVVcYyrMDb5GtQZET2ZXkBfHJMun6O7NzE7JeuIBaPVrDOpzJPxmQoJJIq-ibYqHdo30lyExDk0cf2OpOA8O-uKtQjKk7w6RFrACpMHq0JHtZk78HlojuLAp_JYTQipW3oL5UaBnrval_AFcaFeZbyj_cfReCI9R68z2SiAlRc0F", width: 1280, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100037202249921472254\">Cheng An Dimsum</a>"] },
            { photoReference: "AWCwydhpmOIlttjX8vvuXEGWl1Nf7r_LaBJf6ZWjD1K93RqU229vB9ZglBN9jgyBnQ5QBcbLfjQU3CGae7V4NBxN0UN0CwK3-Csjitlg0CiUyvTS6Q0lwDKJk02ImXclJpAR84NaQDQhH9aCF_67RT0iq7rvf-20HOdeE7s2AZwEOrX-MkMbg2BejeGtD9DjTaAczJnAdsAi7dnC6l7zXV9EsUt-icSky3bPO5CAMI-TefBtBXn6fPeiZqeAkCKbYKP0VBKs80nRb9U8SU8erCvdC63z2ooP3A1INu_7ZeRtD56r4H6-zYKxTtMFZIziPISgg1edNyAIkeV94X9TgBH_qXmSufP1MksgBMBkqceRc2JWs-VRUSKG5kKkKLlShK-YQAl8jwpY_kBddHmekFyjy6zOJ4f4Ez2I5H47tZVW1DErRPESMumaOJrPMW2A0oZL", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109436252807548891633\">Tin Nguyen</a>"] },
            { photoReference: "AWCwydhpJMaWMGhAmyOiyfodLRB05nh1LDGzcBQkKQDNQ_vv04nE5XBmayYoVflxMr9upLV4n6FYu47NeJNOcNfyhMo6iIkOOr6kBKeeQUZc90sKAzyZvGif5hoGNboeUfQ7DaJGt0zWL5ln7qpx9PkeyFnAkZOwqHlSZNiNKbK2YsLBloB9WQU2oAJTxopdMXDK1qE4bCuMZCGc4UrBZwyJIyhXVp-AzMrb4Kp3cGvGAcqc5JQrwR_2PaY0fk4cidjyn4C_tIIRyEDYH0fUGdq3LKTZOkWKxCw79XqCX8Uq4NfTbRG_1-Ezwg-zhq_vt6l5UYVoCvCte9J0q3GJ9mnSxS0J3KYFxnxECye711QaIcKQpg95a0RqeUrDm3CC9G1l8EblCjPBToeLat3pouCabtLfLBF7mkpUjDRPekAT9SjTXUofTducHvIYpldWdgd7", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112071541300667230563\">Đức Quang</a>"] }
        ],
        summary: "맛있는 음식과 친절한 서비스로 방문객들에게 높은 만족도를 주는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["맛있는 소고기 국수", "친절하고 열정적인 직원", "쾌적하고 시원한 공간"],
        tips: ["소고기 국수를 꼭 드셔보세요", "재방문 의사가 높은 맛집입니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "퓨전 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 6:00 ~ 오후 10:00; 화요일: 오전 6:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/ChengAnDimsum", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2135814071961526575", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B2%AD%EC%95%88+%EB%94%A4%EC%84%AC+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "푸미우 딤섬 & 티 하우스": {
        photos: [],
        placeId: "ChIJDfE5agtncDERR4vsgss8k3A",
        placePhotos: [
            { photoReference: "AWCwydiK3ANSJHbsyFMpc1hVlMZYTXrarp7wR3fvnvgq0mOI3us6pgzx2KBiPcPimQ1LeL_2zuKMnfwdjGza0wUm_Ava8UlzXMgJ3dUqaQncg0UwbMuHxAb3xQJyu8C3XJVqwpSKN_9bTNzFlXGeAj502mU856-CHfkxW4RlXSNXfYHnlwXKc3Z4YL_UhZSJWw3oDSxBSYNAiVv7rnrB119mYeZ6IrBoJ3lSkv-T-BQ96XPnSxGW6qKfPE-lhn7RjD0hdi2thV0SrzzbhQJPFXO16hnwH57vh8gwCEjdnUADLLkjXBD0xOAO1oAZY6yKy78lN3QJZniz_0WL6K6nGf8x5cT8AsMMB-RBVN8fSrny-J2jv-_T9-1a4TpG0z5tih38oGHbqj7g--p8gvn_MpVsMUb8M3b_ogZ7Lhro0rHveOA", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104784604479383855935\">Le Nguyen</a>"] },
            { photoReference: "AWCwydhGYcQBzGBVNKYiKilHHzEBcuIESdLClo3xKCGbTdlbk2kz1PU6XhhnNfXiC5gBzHuU959WPcbXdutfNoTg81H_aRjDnyGhDDvRqx-mx7xV_ISpCShtTlfmTLFBNanf_LKUb1WW4LMnKC5z5YcMlUgNuCes-v6zBgY0ae4dGHcbZgLyTITX4ERwGswHA2S7QlX7cY5el8jxVSN2vNQhghn5JKVn1uDdHgxksnrnNFZzKCNVye3NyYFRMyuQOTaRzJ6tcx4cpEFCfvIB43ttAOMXCJFZe-BQjeqCsNdA7FI3n6GtMXJ0TadmvOfSebanMNUKzQefn8-SxtipLK8bymBq56oS6SaVg9OixapiMYBlELDY6RLbxzIhOmfibtyEaOlA1vXC0noPymOiCcbz2bDJcP-tMKHIYgvJlEcKPM9OD0EF2hOE-jxCfD--Ig", width: 4032, height: 1993, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108726688382466135112\">낙천적이기주의자</a>"] },
            { photoReference: "AWCwydhUYhMJC_Dp_8wRyC3lt4M2MQDjlz8I_ExEgrvkVPYiLdUxd79oFKGXbc5UJCXFTw0ks6dgr_iCfe8mMjMg3uHdCwcR0n3TWL6zdyrYhtfMuU9IJZh0YDSsMq9A2c2Ad4k_pVUhE4XP0saPhImxB6eqpGK-jzcxYBjdEeKimimQD57dbsVeD4eGWrpHiYIYFHYd1gGzzX-W0vD0MgtOYGzKzfDj1geyXQAakHwCZAqICypHJp_pJbL539Kupy1oW3C9VY0QODK0OrH45_1OgG4vvHmP_gU1TwB-WHsldt4EOSaKbJ0_jFM8EfazXt83l_-u1sSfGtcJtSVatugwscE1DCZu88lCIhUyN7MKajkmiyODtPzSFJ2uspzvfu4UpMCqGvcObtooE-H1yWowVhmJQAVs_SNyf2Pv_jnnPEDq71RWjcFwXiZ4wbz_oGj5", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118144538129916729468\">Diễm Hảo Đặng</a>"] },
            { photoReference: "AWCwydg6bKSGiC5ZxxGfb8C-nBV6bdGxxHQooOxwAGu3CFsQC-HttmAcbPXOl4dI3leQQXdwosfWjKsemY8ii4BF4FZjbysDjtKamoadinDW0rh9o1--iVLRWihhPTYXJocILEFKzF8xiHTi9n_rK3x3S84EKfKfovN8GJoF0DQvBeyvIm6otw9mhh0OghH-1fux5PScMwZ2ACaupVG6O36perY9oRPwE2NBbRbbcGVsf6kWnr5Rl6V7XMogAUZGReKv7wmjeVTwlAqGJ8JBcRp41RGZDWKmjbTRcy_rqnkSW4lkxkTTC7ZXhSaTwb0EYRqlc9AlQDsEfVeR9Oxm1Vqz5sW5CEv8yOgOYpdFKgF6U8RZk4hJvpVk03fStgUIo6LOGhG2TtSIsdkGkLAjIICEiG9PziHRG__ozRaMglcA-LRXyLlhThJp3srHBLw2jUui", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106696222385283749686\">amber lee</a>"] },
            { photoReference: "AWCwydjafTSsKoC43mXNp-XauEyhjCud46VKBiePJz1exMSQyhTBmZfPP6pV8GUb_9ukuZ9kkT6klH-haIwjy682b7Xj591UNntmy47FxF7mT09lOCvbwzwJFs_-e_1qBz7ZRnLiY79rOIU1cKNyaCZekXx6GSgOhFffvCsuMfa4JFfkHAt64Nsr7ogi6JxuyU1zuOrqauML6vBYT8McE7TLrvw8Pl4lH5zqhzeQLK5Xr3Xkv6KwmptMywNOuNVrTFS6q-FYLL53WL7BBlW9aOQMXJijxONVE9Jbg9Bx-Scyg8mqfIaVawBb3-Fk4D7sEa3AL7VdYmPeSyniLL7RuDrEwLfRRLzuGuDbw9gk7XWiUklpo4-6LAvEwivTn6XqcUSC5HEKRoqHRpiTt19Quys5Pc-DtWNbWzdm3ENT0UuYtGJZPhjmjRJ07TaxHMb4zgxb", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110064513532434863886\">cuoilen2222</a>"] }
        ],
        summary: "맛과 분위기, 친절함까지 모두 갖춘 딤섬 전문점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["훌륭한 분위기", "맛있는 음식", "합리적인 가격", "친절한 서비스"],
        tips: ["딤섬 메뉴를 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "딤섬", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:30 ~ 오후 10:00; 화요일: 오전 8:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8111894198596963143", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%91%B8%EB%AF%B8%EC%9A%B0+%EB%94%A4%EC%84%AC+%26+%ED%8B%B0+%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "딤섬하우스 1호점": {
        photos: [],
        placeId: "ChIJpUgTgXxncDER_5LdSdtubk8",
        placePhotos: [
            { photoReference: "AWCwydhr-F2q9cqaJzQAu6eQDx_7BZ8z7szPfKrkd05_dbjoRcswdhJHo98fQcUJRSbeuUEt1b9FWASMJ2ZoXRzVd-3uvW5luOx9ErOP4iKDlQm_4NxeZCHXNvli5mmOol9SjzG4ZX4YsQZB-1DqXGJSI4GSGl49PcwBkw_OSqVgW5SuRLuisCdpdnYAasuqrOXaZoDrjQ8pjoYHxnPGgAzXaANpcOpOJNTE9LbYfQNMBcPQdJROvUtVSleZNb8jpNYnoxCbE4dTIoM6Dc2lK-n2WQ65W3qqPRtFxkIvLeAsZSS5J-94GC1BKsKDIaxDJZllGdkHG2tqXLI4fU3TP3jcBnp8Um8FoxYXB_eiVhHzU2CDUzF1AY-1UHlykCGGNag6LT-Gt96p3C5KSKrv0-JZAEr1J2FINcX_bYX3gboNGtfPPA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118268432714930039229\">Heji Phung</a>"] },
            { photoReference: "AWCwydjSNEb9N72jXfm7Xw1FYz57Lj3lLDgcw5UtaUUYJBXfWSKR31OFem_KI_HDBax2eiUPkmlJJ--dJWglSoIV-USoZZj7XV0m5Wp_Rc9Aqkwhj2wYY9lqKSoVsnuDn7DRe4CnroluEZj8Qy8JRiMGugcfgrpVItinSAiYKNVJsg38BKLqwG6_85_3yD3bI-pH6s6Ar7EtAOMyLs7b-KQW0fJJs04OhcHQszSDjbg8IrLj9Z395pwbgPR-2a6zPzXub0iTzL3vbKaUqlLXfcZDdNa06iwR-8Te2HEh8thwv8bBkF3R0mcRErtoR2qWuMhJOp4mcZDNrdTi_rKO4ZxfiIekhL56Sj8aaI-eOOCAOFK8FOnFWTgrlV7H1RBgyHCS4p2DEyQb1y37SgcsuPDfceEocwFFJyb9NusOzXEUFjaQMw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100095155857849429149\">100유월설</a>"] },
            { photoReference: "AWCwydhklhcGd7AuW7UgCqEAg8DGOXH8A3PaSGq_Kq_8H2aiHFJF4xlOHoUVaZwJws1Yq4i29-y92uaIM93QRVCJcj7oIkKvUJPB6CKKwoDUYHBfeaXYXdmPFdkZhvbHB_Lt-NniNpzfvHltEO6TpWTMjnChOyitxgXH012LvoTbt9mf22uH_IYnJjkH2urMTETfp5qKTKcfrVkQVfiGADw-LMwvm5rJ-qA6zPBZgNXg_bWiOhnREKUUdmCfc_3GBJkia9-mDxzC00YysIwSXeTZa9xjX2hSx2s5ndqX33mD4OXS2PdNeDRzNSXvHQuRVFswTBLZik8P5JNB4SxXr7POF7w-LbyOKRssGxg75u9fxDdDTLNmbMbqdzvyExbJNPEuBErxsYJdGCX4jmjBuf7xdeE1quxk1Xr_p0Wn7wPNTNWMVkFPom-9S4h_av7y2A", width: 4633, height: 4284, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101764748337392783629\">Nhi Vo</a>"] },
            { photoReference: "AWCwydiJh7tfGUqYYWSPKyn7KGa_0AmX-4VBNVtySrQLfu_juu6BVps_iMElPS7WzVpt1DDlDUwvzrpcC6IAts-zMtkSR_c4tBpQyV_Mx2Gb8zF6EqNTHhBR_UI7TeFDznaaC5CdDI5rkE2Dx0_E4FXsz0h3_HMWRcoOz4yuXoC_LZZIyGI7GCMD09fUSr35bkiZDcRy_DE0TI-wvPCiAijlKv6vy5WQt3VT9PhDJ1VkcC99bgYWoPKUJAKA7fgmlCk20pQHrZuV_2izyGDtb-gTnNfVQ091rdNPajztGiQZx7UqPXHwsQ5bqagR1w73VxQRJ_GBvm1sgh4W17ni2Qmygss5mrd8Vk8N2MxADAkqlLviMWXtEy4X8eCQdpEbkvznXhBnxy072c-vR5CzsBd_8sf0swNCherzS6SsOFNIvuYO13KUUQHYYTdVLn43ZFg6", width: 1020, height: 1020, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111248984132050238906\">Phưnnn</a>"] },
            { photoReference: "AWCwydi-zJmDwPmAi-7-EVV0n5uZa08WAJ9tdyFuaB_wZ1Ql_rMBoT0PE2QKuiTxZujrzmavSW-uRZJ2IBPYo04ANZaAWBrkgnJ6MV7qGUtnJ64Q_AbO2cg6yh3nhh8zbVsQvIHCjPG4MgySK1whcjLnN6wGaXjFdGxPrxyHohXwsTs68CAgjRxZjQiXNRWa_5kn1bwwfvzfWdLogtdZ2ARzJC59VxUQBHspxxoUDX4pqV5fdscdks1maRw0HZL-bh2OVNUWrs8csjvjiRiDUkUvlQ6UZhVkfO2wn2IP4jUx_aOPIZUi1YXWTJQP3Mo-h28rO8Ff7SlgBjNuJmsxq3OBINRfuEbED5ym4KIpc2FbvXocrzSbO5zg2E0ZmAwyGNJ00iTlFthcpIK59xRHTTxe2u-EguErOlbqvESTNt4ef0PSz6VRvUAdQJzruXl-KHs5", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107728780577929407850\">Nhi Lý bửu</a>"] }
        ],
        summary: "빠른 서비스와 열정적인 서비스를 제공하는 아늑한 분위기의 딤섬 맛집입니다.",
        updatedAt: "2026-08-12",
        highlights: ["빠른 음식 준비", "열정적인 직원", "아늑한 분위기"],
        tips: ["아늑한 전망을 즐기며 방문해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "딤섬", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 2:00, 오후 5:00~10:00; 화요일: 오전 10:00 ~ 오후 2:00, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/chengandimsum", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5723634064550630143", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%94%A4%EC%84%AC%ED%95%98%EC%9A%B0%EC%8A%A4+1%ED%98%B8%EC%A0%90+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
