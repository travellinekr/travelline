import type { RestaurantInfo } from '@/data/card-info-types';

const info: Record<string, RestaurantInfo> = {
    "리코스 레촌": {
        photos: ["/images/cebu/info/restaurants/ricos-lechon.jpg"],
        placeId: "ChIJEae3ljeZqTMRk9DvOna4Aeg",
        placePhotos: [
            { photoReference: "AWCwydgT0P_vFqQ8VHKC7OcyL9YzjAVu82YQt2O-XYDCOnT-HHcArZ7fUNkVqZmx9fGJK8hrmRM0H2kLsmiwcC9_ijmmTf0CwgMUcLiK8A9wjNAjupDerG1bLVeq6tA6SwZu11QqTFLSA5sFO5GkmH0Z4JotgsHGDBvk3l431MY10DxcQHPiCHC6eKC5Nw4wkjfzud36Zi-zLCXB7UKTrlcLhndlopSBlf65Aiv33rgjMdulVOwm6SST3-uPV_YFQh55ZCOQLk53pUSAGSlpqJ-Cb4ITnZjwte0-1XxdYx6byUU8tjXERNmS8Lhe0FbuvjjDHj92ZcFxUU6lnG_OMmTNOC2ZIMdwRcSuA8M6S2lYvH_2KSBy_73oVeTI29eRhXsHeJjqFiWtwnz9JEV6d_CQg9WB4LQ7RZVs9ziCFDkFN-mk8XZo", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103137497386092992792\">J Pedros</a>"] },
            { photoReference: "AWCwydixQGp9-VidrsRVx4O7BCyHVMGMtSn5fmv-Rdivpx8RaNi1hxaEJ_5zeENtJdSKm4WPt86OXZcB3AqqJkbeLa9VKZgnGWNgPdQtx8PVqi0WKSCXwEbVaPa9Zv7o-l8Szplvo5JKAkQCZe1q4VnWRDaLQv2l-WyffIGuQe9MbTA3IXX4k_DrX23njD_95J5MXlZgng1hi6I6y707Of2wE4bvG9TsU5rBCgauY7uRSO5Rh7c38yN9JJhKccCD_EcZDiUc0NDLBgtVZrEOX8g9Ad3z4S2z6rrz100oPuMLtFUpYkUE6UQIWXD1cVu20WNV-ss4k66gJdAymLf5fljzDYPdSDBI0LGuPsFYKw3XQQosRsuO7HA--J2JrYJturDNJo_Ex_EQA9BZy94-hSXYNQrB1cmscnUi7816vBHbJfK_QUAo", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106744693291438991912\">Rustom Ebesa (Thomas Cloud)</a>"] },
            { photoReference: "AWCwydj68pJeg_uuaAp9jJWWzonX6MyilwEQ-D93Qwn6ruWFTneqvjQiHm_fJpJjym60u8pDWvne5wR2oE8_LNqzkg-h3KUqbG0gED2fLXogzwFrQ4kfiuWvRbVqrPUbhib_aPPVe4kP_XvvfD2E2ub7M3dmPYrvzF_hLLc895IZgpOuaCaLWAmBinwvhxZzlwI38m3nGy5nRiVa1bcgSgQCFavFX4cBmZwfdDRcHA9iCP_0VGKy7pdPl229tsQYiB6S8o2VWzmq47-VkdhHhp7QKUTreETsPoeRyD3bI7U7KSv00DrCjiAzIeTd4ihOlVPTlta2gDsvsDIMvVHuaG9Oyd3UWcUudY8E8f0y7lyX5WPMxb3Req6znbj_fZPQX2-fg7VnfCYwJrAqHm_VBXUyVa0t9KR-hlNmvaZc9IIxiERpPw", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104885808687033254813\">Joshua Aure</a>"] },
            { photoReference: "AWCwydg_bj62jJX7b2BTK8-YavWIZemWhkekG1jZiP16cstHBHHSXvCxeOm-XYHb7AaODJ4ofSi8CFCrKTSMmjdjJGM0FWn51FOEyBPJczGu0BVawJRfqq7xh6vyHfo8LmUItWXFsWaLQoY5ueqfCeozygfOXv2swBOOTb2-v4nQlY3Zu0_egU0ooqI64ZRDvCXpnJea5eVsqUSA7yWvYQm0l6tFq_qDYr0RUo3cGYMcBI1hTr-2p1PXgS-OT6a7FC4vb1QpyK8t63uHtrJWzTxPEbJ47xC0JOTC8PS3ZE9xf6yt8q-p3j2VlYgGTBIzeVQosONQyJRNquWKoBG1SYNZVj5e70qclRJr17nCh4__uNBXCYiLyI60c5ewJX4UiiXHfLUY43pLtaZHYoadGTPoFTv71v_tkFaPzFuXQpht1C1vkSvCg2S6YrKHTP8RqPfR", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108940461832745453767\">みみさん</a>"] },
            { photoReference: "AWCwydjFKXnsGeH7gsLxQQv-aU1KvcwEdZFS-5HoChGQ_62stm1mbUMdbcsbSHCd6eeu2g-4ydMyjygJiLblVLOASaC-3YZ7m4JNGzszD7BQRY8vnOrBnNjvIC1YElGM8m9NT3hYXV3YyeSe7ctmnM5eDxnNO7q0vFQoLfIMzLZUKYsIfyUzoeCuecw1dK8kDvniB-DV37vylp0dqmfI0Vy1xQNgnJWbcs7St4FlrY773ibUuEBBIiRsmQxNqY226m_gAwABuujSEfV7R5TChuDsd2ju82zui1EFHV2GBk_MNz6wtRlkZy2B-8PKFP-Ayd5xM5VZ1so0et9iv5cbA6FvBmCgEEI3QToBhMHFzgazU2KOHiJagtRBkm28pV7mBrHbz8KIVi-ammY8ucgzTt-yCDjbalAU_uP57OnNv0No2K28KhW_Y-9lFtgcmsVpiOLc", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112506120711607119801\">Nate V</a>"] }
        ],
        summary: "세부의 유명한 레촌 전문점입니다.",
        updatedAt: "2026-07-12",
        highlights: ["레촌 맛집"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "short dish/category", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.ricoslechon.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10392488734988804874", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%AC%EC%BD%94%EC%8A%A4+%EB%A0%88%EC%B4%8C+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "하우스 오브 레촌": {
        photos: ["/images/cebu/info/restaurants/house-of-lechon.jpg"],
        placeId: "ChIJN_ykxTiZqTMRZ59ExS6Cur4",
        placePhotos: [
            { photoReference: "AWCwydiWILjCOurO6iSThWqeBKr2g8YXB54CU4cRNj_337SM4gGC2gFOFL6zFX5KeSlqHa1r1yBDbssARY_rGpY4Kh__qQiRsAo6UInor09E_jbfZL2qNKah_-iMF8u_Yk0aSV7UjaP52ckDcqyFrw58ucXO1Leo30nh0ueIp39kG4e4EkX9a-O4lyxRYE08109Pf2j_Y3Wgq15VXV4WNsk9iW8Z2aMHl5AelWYBCt-WJOGYbHz9TcYd2L8MZbkNcWXROD7SH3r6h1wOkqQLzRvVval7SZkM1OQlF3HgNk4Lo7DKRv2xGLJF7H5lHs97ZvsTOFUhHBCox_gDdRe6gBQSCASic3WWjJ_ugYAUeK2FOM0qTp1wwSrXFX5Wqlw8Y2bacBU4VKxowS9cGXNtTdgN_bzlXwwj2V1TN8gNfxm_EYBttkVQwc06xCAvIIiZdk_I", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105571668020046674870\">yh zhou</a>"] },
            { photoReference: "AWCwydilzn2GQ7dnpDPzfxq3vNOOZhIosolzfGMV9Y9QLOcx4BacwhLzWcJbSf4OO4Sq1d1tHyi4cwbWAAssBKbB_eAV-rRY87PSdMLc3mfhgur7OzIfIpHc9q6Kx85z-25HwSW42P0eZ7YMuevWKMlyrakXj7h_0qv_8G-00xaPHthz55grtHX9C7a_Yv31HY70oG134ORj40-j7w1b5cpnDcaGu6wUQDOmynMVJkSSf2TLugxBOUDLRV9uEn7189P4NUzuK3TorzrkI_rD59QrQ6d26F3D0eRtHG3hb8-bfaKbOU8DJe2-V4CmfoZ75hX49xUyP_FDKAbGRh12QzOEQ5fkn2Xs5h9opDkxYY3MFzgIh8iFOzvY9yClgQQR6p6SxJqmgaiNe96P0Mz24YDSWNVSst5k-GtgQffFk7xktLJIlPL2", width: 2048, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114326128434240881238\">House of Lechon</a>"] },
            { photoReference: "AWCwydiTFgm2_FXJhyOzG_qGoietaqUSVmbiwr1Dw163N9TVQ4DpTOwXiDaemgFV9ivBCH8hPliA1XJhr9bKRWGXRsu2Uxnqb4_xg2rB-kG2t9ZJmOVeDW28ue5wNaZn9SaL2WUSaqIA6f9BFNpn1KMDIVC4AFeGxDJx-L2HKO-zcLaV6SbAhsEUYr9GeAhhPg5CSh3CM0R4UjTFAq2H4zaga4B7g1Q2R3hj4s44lbHxEUuehxC-6CbuxjA4EqagTqiQ5ePfifpN9t23ju0Zu68Y693zaIUpn4io9tuGg6T--1vFNvsM1T8yt2Tv-mkmh_JvBZZt0HUnCOUlyYvSzTN_At1rINpkU8e0X3VsVL4gHTc6jaMWH9_zf6sVegoyyND2U63K9njR9fnN0Jra2dVvEdtKQeQokGLPpogyXb0_zgZDEozKiBgmb7idEsRcfA", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111806603160420425081\">Rehlen Pacano</a>"] },
            { photoReference: "AWCwydi_8PvgDfsZU3Lu0nbLtvxdMrsLdb8j8D_xaKGKgD_oH7CVNNGc4gGf4rWq2g2UIv64aW81GbLIUrOA3UOr78-kw6Ql6m0aQ3fu0zDLdk4UeOCFSGHOU4OvuUUVYBDcYwP3Z5qUlIpz7JT7wjhDtqmksLMyeNzh4bq3OX9io9R2LoIX1TlI5P1dsZi21O-DTSFORjLlNoi5G_lFW0Bx7XPdUYm2EBdu9sLNgFuCunnWpZ3yaB6RnYAy_HHpIY8vptiftSC6iHOLO8rJm4Q3v_1UY9PHwJQqZbDDDHz3GK98MTmO4oJ6NFMOEDAn9HII1YCyt0FhIBB0RqpCQgvXc8hcoRumMCbgNy50scQdIJIYgO7Qn2eTJhEKGDDDBO3fE_HK39zbDOOyafAIoYdFxe0oAbG_uhvD9t_ifzNW8rjuKJK3", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117053941372416500834\">Josh</a>"] },
            { photoReference: "AWCwydhauu0fIy2xmjKXfR2MAel5OkVj9P3YqVuUznMRFHO-cnu6oMJzDC_KNKQRS9sffJMYo2rLRlWP__99QGxi_xGFdWKtDzKm4UvowJuyp8v_mGJSkNjn51JjVsftymyH_HRJXY6LGnedccS9O465MqlAmxHvIlX_1KZQKKhhWJyHoMQOGCauTSx2siGJgAGzLGOnJ405luQabZMBpa1rQDZiNokDtHA57gXIvmImGl2ao-UlAznPiOQbd6QQCoZrRssPhOKQqyYJQrZq-2ATC3V3Kqp-8ywk6xvWm5i5pTQ-qb7gFD5lVcOWvF9EDH3hRGszgsx9tpbNw1W5IW4tTZ4Hg_zJKewrKqzXZ43cryfpk0VtahZfoRsldKv0h0LQsAq-66SFNhQf-J5nQvkBgF8oAQumBiq2BG9tcmTjXKZ5FdiKRMwbCV5iJGMk8A", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117281061426537000212\">林凱莉</a>"] }
        ],
        summary: "높은 평점을 자랑하는 레촌 레스토랑입니다.",
        updatedAt: "2026-07-12",
        highlights: ["높은 구글 평점"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "short dish/category", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://house-of-lechon.shop/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13743440350264205159", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%98%A4%EB%B8%8C+%EB%A0%88%EC%B4%8C+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "레드크랩 세부": {
        photos: ["/images/cebu/info/restaurants/red-crab-cebu.jpg"],
        placeId: "ChIJL25WpeOXqTMROJwLXTIeB9o",
        placePhotos: [
            { photoReference: "AWCwydiQ9dxVZFVWqOw5FIaJmYRVNVo0Djzvod_WNPNWuCk-4EJhU2F-4l8H1Zn9bx6wfaNNQavZM0F4AM_nAY2AmHRENHhJgC7JmpOjF12mq-Xo_ZGDFCEUamcvrkoe4Rl21JBekOEbKixe5t-CbEz1zeJqZhYbxcz7aQDDsGrhNMbz0b_KBavAWFeTLgHBOEuCOSw80SpDDny2LPNbdQiFAaAH0tSf9s9CMj0BYgzTDi_YFavRhUfME8q6sa3xz8dOfaJNs6K2-lySn8XOYTFKNoIr6lj-MDpf-SXo2nOB13F3sHQVZhT8eJpFqAzqLcrYVBQFPdY_Ntj2ptwGqPkQq3dXCkjTcFHirGbWuPo1QpdneOHffhK6w1HEHrTl9Z0LZ5lBqO1fOcnpMKWYMujM5A3PV5HplvZG4E0fmV20vNJl235R", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115979102964704825608\">짐승TV</a>"] },
            { photoReference: "AWCwydhEH6pyR7ZnY57ZrmhOfr0Lm7kEJ6MkcJoR-NuoM3n6Kfww99tYlV2a7O1hWh8hh66Uk-SdfvFcI5ulTotvgcT4-tYtrW2_IGourh6Spd9mLdSBrmsJ_9b6vq1s-YcMjgft6ebknXaz2NKNdWI-bo6n6n_3pB02HBsu1aKkkq6ehsLMsPDy_rEKpqY8bWmmCYv4nYzHw1oKyct5hM08YL_7VlEO7is0_XJwd6zWNr4e1wzrFKSZDNIf90CRr6sb32BD41LVSl_2nky7T52kGID_sChDF7_Mb_c-IP31OE5t176W8_92bwHC3_lzQ4oDyaEKUuxzGbSZe3g4fB4BZ18njWelqeHb9RoXkD8ZXD-BriDJHo44UHO4OEwMWE6wwBaghpEz-czMigydWfbMT4Iz2WLSWYIWZZAsextG2pqhtw", width: 1280, height: 851, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108449371738819005912\">레드크랩 세부 redcrab mactan cebu</a>"] },
            { photoReference: "AWCwydhDovupff6UUHalzNEUzYCoWZtf8VDFMjzUKrzGBl7n7FuDDjZ5j1SmGMr6XtIv3KZZpE1RvP1d-A98iwQ-jHOkddfvCpjjdmo4kMgBHkcEby3OGHa6zGvMZ-89lovz_t_stuM92XnkdqHHV2Qy-yzKUlc0FEWBhGBo5TGEJf3gRgc3iq-AynBkvdyav-vHcY1Jo6cJ5HBKEUfnfRfW7n7jXWSlqVS7zVxWf_IL9KWpZ7Elkjd4e6ISTxya8wKGQV_G1-fXlFds6KC1aFOcpffRZAJIrCWlosW8gcexjhZWcKs4NaiQVHsqSSqoywhyxVOM19_8jrL1e_uOzFWJ5VVYIPtADqyY-_pQxgV6hPTd__dS7DGSTWcyykos7UzrHH7UkCRlyEwae8TPyKekmQgZCgwmOu-IgQNBrICs-NTJn5XNR_TgQ9Mn1HiGssCe", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111935962124145973299\">Eujini486최유진</a>"] },
            { photoReference: "AWCwydizf4IwNXAl8CSqrbeMW7TGhgV9Ha9KFpBBrDvitg9ETkgf1GF-qONB0qnBmftVQsuh6PxaCBG0ElmkjtdVl_E00g2Bv0kRdioJwrYiRCTW9y9GactEAukwrnAYtAg2KxkAdg7yhqkURkaepCbzq0w97DxdvSITaYo9e7l7AXUu8kp96XsnPEfyMp4neymC2HljmI5O9yf9f22K1vevMBkOkU4ESndhpLH3uioV1glKcZOUEOVnBwy3xRVC_b_2zo_sKbDMfcfZvv0CP0LDPLfE_Q4NE9cy4eLTX6KqTDHkIUcFjXuQmqhvmn7Ba6CinD957lyqfnI1NwRYLJN7PtlH84bxKPjBA7zS1-i2oET3U3U0C851RZwXk9XCkIXI-PiCWA2YLpmHBBSU4IzKdrGH_wKiFS3ZF695wtnRVQQcBa7qkGeRjU0WXIhzAAwv", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103270291810711565553\">이경훈</a>"] },
            { photoReference: "AWCwydiSBFjkaqkuzop_TPDl8FYxxb3KMFz8W9Pm9V-Zj2tmjONIb_Vkq55c2iHtsHdct4fZHKQg72zXtBubqcv7lwMn5csXkozf0qnA9vgNf1ZuccrtM2zqESNfm9wkvfB5d5w0eat52ksuGZH_hpsEqcsr4Rkj4eXgb0T1OXG7ix-_1wZbYEu-SRy3v54ZMb_sqt_PaHAZfgL9iSY1SB5hk8phfNJ8NEn7RQJ53q8i1zh-6_iMf0Zj-_q30_AXH_TXoW11e-lPlBrtoh2BvbuCPfYlxnGgwOPtBH6Uk1KgVaHCzOD4r0loxBzQxigJCwkTrun4wnz4UMGBP_kJkfBsr6D9xAdmp2lN3kplil_xy2U0pILB0S1bXIh3dkRpogRkmU_z8FvVIwiulsKG6GteeiIXOaQHtKnXpv05y6EGjEtB5cerZ1vTVQFd3lXzxA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104180323374646909013\">Kana Nakamura</a>"] }
        ],
        summary: "해산물을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-12",
        highlights: ["해산물 요리"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "정보 없음", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=100029538203349", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15710559026763504696", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A0%88%EB%93%9C%ED%81%AC%EB%9E%A9+%EC%84%B8%EB%B6%80+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "란타우 플로팅 네이티브 레스토랑": {
        photos: ["/images/cebu/info/restaurants/lantaw-floating-native-restaurant.jpg"],
        placeId: "ChIJ-RpVc1WaqTMRahsEx9XxEE4",
        placePhotos: [
            { photoReference: "AWCwydi-9ZyeaMMFcaSjOFNuFBLHtbtFZwb0ZTxmQItfd_RSPS0cQI0c3JISA33DZWBjUmsj_c5iApDEaXQ-gnZhe8oliwfU22O3AJZ9TZu43FYlVusMZX74LhpMEaqsjPrbySDOjNbEIN6vi0aM_jA6BK_9pXQ0ckyj3EYyri_bYJ2wU9FHMSc6PhRzy72ivHm4arRL8RBogPzsWb3Xb2ZA4P6Y65KagsoF12_3Ev2iZWcUQub5gX1aQR7aRXWQwgwZCyMDMu2QWVdLfjw9ok_nA1-PSJKyviSjvfBTDtRfaapYgu0wngmlFiR4gf0ILjuk6BYi_eQPRXJuE128neB2P0rjy1kjvFF3qxnniIjjuwjl9i8JpA11T20_Zt6B82xxV6fEYeDq-iKOLs6MAanVJ9GCCMus2EcrmauXvAc", width: 3888, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113893451620549702875\">Abrea Tan</a>"] },
            { photoReference: "AWCwydg_GMne4yS8Jsb4L1D18sunGQv71an5rJMkrg4cbJrAknqYWBXnbYc6rDQipi_Irg3xoHrfEgnlW3sE22L5mcJKScL2uAy0VAWMpJ_tQvZX4ywySoQ606jt-435ldB8zXkacGmGHJUjDfAUBE0NW4HeXy_iUBRIOhBXTN2cj8ZAOuedpruMTUmZayVEoouU36R1SPNzTqtSDetWNEiIzvCagWzgb-Apcg1yYTF2nE1z1Sl4l0YCbflgTmJo4DUE3lX-EAypTbK6pljjHgbSo2npsp0WmDXf3K58-MlE4zfbq9eIuiJpEUeQMFmuBFLKYM0_5G2S-2GzutAygEN5HoyQzUr-ovltJcxh-EqOIqsAEl2GwKK31s_BrlbajKnmOFUEMPB3cRwTMUa5nV10ik0K1o6KraCfSR_Ei7Al7Xqimrc1", width: 3264, height: 1836, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117091707539078662400\">klara kosta</a>"] },
            { photoReference: "AWCwydiamQRQlZ8To_K_n_A_qG43SDTtgGe2HEqkPHZiiJomqSrKWKMnLTTht5AWXJNrj9E0aEfh0b6an0M5hXU9u-jDemn-pgqz1zuY44IBCmNmixUpPXWnSkIgP3Jdf9Ycl-meD_cBwGXFLy8aH4Upo-LO9IpzqKkGevPfsr72txAxBolzg4Q4lNLKT_TrHHqUPMB65wdaOrldGUvkr19rOrsTqK_mfwNoZ7jM556m0gUiQ5VF3BbwR_kr9rPRe9ZpfKXS0pXCLQkejG7XaIy3sLUQDaGI0tIdCZlbNoA56H-7-QrozbsI4gBH8_Q4sBTeGhZgprNIfqJ7xojPwEgGc0TII13-tvv2rwJEnu9PjAe90INOGFfyn6pXzx0HiwfC0N3CtmrAUEdPqtZI-lnlEGmvzu_V4ErFvtXdp-tqJmmLTmJG_nKbHtBv1oWlIZVW", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107764207232601514053\">Garin Pando</a>"] },
            { photoReference: "AWCwydhJTq4K1JjgL1golvOR3l_imk1ozcpB2eoMplHJwnhESP2GuW29XoagAK3NwTsiSDE5JJmh-uasyDXupFDCNDxXMBc6k8MbqlGOpJdUvZUliT5pKLjTmh7H5ZzWCQ9jbf9gSF_FXwTlIUGdaV66ClsY_zxyY-4dHDWbb004DvU9A8xim6cCtSgXkzb1pXOlr38EZsW0PxT8i-7f2ayg-dcQCCoI96El_YboSpKYI1IUfhSfkNHJ3Vv3Ez0ECzNcApwKToo5YpSl_T2roM9z55se7JCpGpEWfqjysToofL-M0vbUO2BnjuDIvtmvhFo6eEddVmM4Q3o_y91nN_wDD18-SIp7qd8l0IXRUcGIoeyzOd2FmEXa9vTTd-OR60fz8nFyJJFwaZtEjUVvjcg2EvCcAnGYL4FoDXl8tzGLcsCm6Q", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101774892787941153577\">Aaron Kwok</a>"] },
            { photoReference: "AWCwydg4mf9Cw5JbH48b5m5mYCKk_gRmbGKE6m23kTmmhUQ9YTQnKpxIBPf6M9GTdoeHFR9IrUDPK4lk3tpCzUIw7tZglZ3AugKNq2mMBXTwTDL3uRJhdwxpEEQuNvS6p6bKFDnGyyKfjQAvpDTT0AHm10qPywMKT0psrxXxN1GaOoauisX24_ljZMGvdNaFiPLnrbtMmOBR_iaa_X0kP8KADjbmJX-db8BzSi0iDkxPK2exzztsL3PuNdpc911qaHmE0r8OH9JZbG6KJjY3KlmI4ThnoPxjh6Yqt8C25CIpXhqkCPBVYHeihI-J3dugZAnPqmgmb3zONFUVQW0ROFUvNtMHGh3RjMgAKpY17qczTqNUonJHKSe71ve05UBpsAlJC8QoSjCdt9ZTWWl-y_LB8Qi8qYezKqnXbIehsaAoS07zt_ODvM8ULp4zYopkxbD2", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115647412924222889599\">Achixah Tandoy</a>"] }
        ],
        summary: "바다 위에서 식사하는 이색적인 레스토랑입니다.",
        updatedAt: "2026-07-12",
        highlights: ["플로팅 레스토랑", "현지 분위기"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "정보 없음", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/LantawSeafoodandGrill/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5625261835055012714", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9E%80%ED%83%80%EC%9A%B0+%ED%94%8C%EB%A1%9C%ED%8C%85+%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "골드망고 그릴": {
        photos: ["/images/cebu/info/restaurants/gold-mango-grill.jpg"],
        placeId: "ChIJMwbEbkyXqTMRjWOexkbVtA4",
        placePhotos: [
            { photoReference: "AWCwydiRplDWj_UWVglW6n1XVjOoFUmEbEPUH5TNbk8Mm2fZAnXIChTUFV1ortg5ZJXjvJuyQNHpS6JV_T6OgUgxX4V-HF9ukO16JQTBXqr-y3KLxIrzyX2mbMpxho9St4PCudDsTUJZziIPJFxcSO6BUZOpbUTla_kNJI-Ti0x7DMUTKXi-8hJRf9HHfG37dtTa0O78Dhrr82QZeHNY6FStcev-5EuIBzNjg2PXRH6yxhb309agaC4llb_dby6qAidtJwAy2vhaDIoU80XZcUiRFw0akdHhOAs0cXPXxB_xubTbPCf6VKtsX0VYIZ9qk2CXIkhWittfobxiiOrpV2FSyueSJrQqkVOTiz8QXT9VeDLN8LCzRS6sGm8N3zvf-CqcqNhjWQO1ScH1SkyDJmVdXtmIJfhUFCGfQK7DtWRz-cDg-o0RP3KGdwY9AbQsRQ4_", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114199519778916270407\">골드망고그릴레스토랑</a>"] },
            { photoReference: "AWCwydjwGxpziXKetlBcMp7EgeAzhcyCS1U1uCpeYU854Q2XGPyUL00uMTjFZQla3SIlaCAnVY_saqIolWTrxRcS7alLXFuMZOBv09KPuJ1Juj5HeVTNTI3lCn-gDQeWvEwwuNFCEAxkdMSMju_rt07F_WwjJGpLxu7Fac4ekZfxgLhVxHZr4CrimzVQsUBsSIIJiUGaK32U5BlFhoTQMcD1eOWXPFxVYQ67XlEmHIBqc5a-cF3T2Z3gqd5LHWG6GeyO1lfAdcrsX0u6FIrmLOcBdaLw1-TY6sePYEIzaXxqAlUkKkVUE5jyRGJmQX_YohoY50xyd4dJgIRZlHb-sSrjA5bH8zBsRVW3gDL8vptsJMz1CnmcaZdxjci2419jFDnRuhSbGjclXMCT__v1hkPGQo3oYxrte5kjYOtT_p_3rARK8Xnyr6l1Lq-0FiPXPbxY", width: 1035, height: 1294, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114199519778916270407\">골드망고그릴레스토랑</a>"] },
            { photoReference: "AWCwydg9R8mrELQ9GyJwHF5O1MKGYOmTkNiz1lsxa2vz7UHDyyLwI3B5TA9QRiL0_Rw7uhxjNH5TUJYldU7MMdc_P9oNfUFHOl5upgY8Ufet-yOEyY6713lMaBp96UYBneu3KxyVILKDVJqURrZfifD5mogFnLCJ3C3_Y7O2zV_L9FVQbrUTXZ3ThY9-13R-mG5HwCfg4jAJH0nbBUQGSFJKP7E1K_k34fcI-xOQv_0KMD6fUw0RLwJ7gq_QHd9XsnEDFNbErN7s74Sswp9JWDr9TYsGW73kzWRW72olistVPO7HFWbpXdpj2WYcvZf_ujG_E9kDWMgFsP9StXVlIes_HTUKLOc31qPcmdB5kKi-oJP97INZKPqNH5t8YesvOd2FHFTa1EGb39pAfVgWOtKol1CfTgnYkrshW9rji7_9eYvNya4hZbqPkFyu0fuoeTFC", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114813788527125575445\">이지백</a>"] },
            { photoReference: "AWCwydi3M8VHy0p5j1l_9bk9HqJKAjbwCwN8fbau-NqAelBEcppEy0a5MYOF7IJVUiicWArBQe__EPiuaZKbobuXckJQlY7QhYnBz9-KD9HWTme-yv6vzx7AAmfPB5RpdK7t0NsvR_v7xHRqLuyeccrK9HTNAhus9SZ-Y310Kq8khX0R-rfMrf5yqVZWyK2FrqE37WNcvVv82E4ITu3BHMXuZlBpH5owQSHHf6_wD9Ow9nTTzdUrF8GORNSTTDXASX097mB-ZxmOBb1SPcSutCZVsOBIHh41Tw4C-M64RNT4jHoEPeaPoI73z2IxaawXRJJrMi88OM2_8_gNSBwsPuHVgK5aVyRpMiFhRmq3Rg0MKzdEOsO41nihkhCvGcU3Xj1W7gAM_yMQP8ICWx2lQ-_iPS4Pr1_46MlbMVQ8u7ICdyA", width: 1280, height: 961, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114199519778916270407\">골드망고그릴레스토랑</a>"] },
            { photoReference: "AWCwydi1XpdpXdW9G6BypXbL1dQ55Z87QUjmaa9XgmvKS8EnZXEzRTRI0U_IlxFdqfc4SZy-U7uX_uvg8IAj4MccBM_5iGZYS9jg01Uz1BM6PHXbPanj1Mug9Rf2bhX46F2wswviH7zSGN8Syf10vAJh6uaM2ipj_jdBln8QUrqGa8HP7kWVZTO6QSlO_AB6V8c79y6w2jly2XaRzBzFkngCiovIC_VIWaZhE9q5jd_MkH2g0D2ggQDKAyS6adSLjEtPT96BFqmAIYJHdHEAJ6k7edD4EIB2e2chlUP1VIZUYayXmukTAguapRoK3Zf0XoyFNRjjXwkZS8FskJOuoHmB17A0S5lDTfAP0ZbdvLTCH-0Qu7VMSyejaLXU1XL1w88FsOyVBgd85mj1cWNzKzYUy95pq8WiGtrkBakxvwOF-OAsqDWcmCJPJkrZmhqovXJd", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103314523578440523579\">김경구</a>"] }
        ],
        summary: "높은 평점을 보유한 그릴 요리 전문점입니다.",
        updatedAt: "2026-07-12",
        highlights: ["그릴 요리", "높은 구글 평점"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "short dish/category", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1059706312295605133", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B3%A8%EB%93%9C%EB%A7%9D%EA%B3%A0+%EA%B7%B8%EB%A6%B4+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "파롤라 씨뷰 레스토랑": {
        photos: ["/images/cebu/info/restaurants/parola-seaview-restaurant.jpg"],
        placeId: "ChIJqe7Hm7abqTMRybfSecB87Og",
        placePhotos: [
            { photoReference: "AWCwydgGzFUdr3QywhINLIZc-3rIAMfI2X6wLPYRx6kGAFtphhZmXrblE3fRpWms8WFP_e9q95TR3IL5KTaWOH-YaPj1rRuwILRYYK28HEThbueGUoSx0inhnwR2e26lKiU0jIRmY6ES9URdDtZsRHfJmYV8_e0BNZy1XmYvPQRhc1Ek6h0AnOR7R0IFe3655RuG_1OY8ohPp-hI2OVm_g0GpV0wjWZWJdEZk8eFIjvmxb5vtwgD9d0EFCOe8yrbQF23zp707dRYEHajocqhsKwpNbZi8Bl4KyRBcg3KtOZvtYaPCbZlJPdb3J4rvDOpOE2zlIHASe5QbQkZVGe4hSFFymKQxDES_Az8xiSq4g9zaLcznp_4HGrbp9LYue2RVnIlA7ue3Brl3uAgVL4bnT6W414yNy3tgbkebqGivVuvTaf5_zMp", width: 4032, height: 1816, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117158742449113550956\">Robert Herrera</a>"] },
            { photoReference: "AWCwydgKSddOcfkbmhW8dihLY_l6A4FcGXTQJOdSzdFzjwzEH7FgpwrZxO4Mmphet6YmJXmCEyjgSSPfn5_6UpIAQE71BnzVHTyG5AA2uLQCznU32jY7Sznt9raHODjDTdoHgooDsK0sW0_6zDMdzCWESPQtUCxZc4T6-xqb-YwjNsFUAYXky3_rBqA8BMMya5Gkc3u1l-9Vfotl-flW-rZvLYgAccvoko77Ju5FfjlKPU_ulLXXWGEOdM8DKP5qKqOEMqZ7g9GOHvwvZPpSqgAw6o5tIXLq4IOcmuU0QHnR4OYedGCtSZ_woXMA9CbIa-nrHw4JFAU3Q2mapRyxrBbfNtULnOACDOUkKl1grjbPB82bAiKdiNMF5zdX6L7SbqFHs8cq_OHbCtsGHrA-zLaGrmu2GlFd11hrnisLY3mSR_M", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104812635040160199857\">Parola Seaview Restaurant - Cordova</a>"] },
            { photoReference: "AWCwydireg8szrMey8K7A4c69w_uCnpjhsBnZ4pG0xGfxUkKsS9UvhThzA260sZXb4qG6yhzv3crjHbWsgsd1ymv6Kya41RN8A2RCvHhekIgYdwoJj9odpRN4FB-0rUDqcHMEwu1cLOdaOwoUqiIqA9x8UZlFdAOh2wGxD-kz2hkn2dM8yAkxs2No31wTCaUksHSk3XwLHclrjxxcFKZclsfPaQ9nXhfXNbW0uxvFF-p2YAEOb-EJDQi3VjNPLgOs3mbI-c4KKlitk4Kz790o7Hds3ns7_HpyVGqSY4cryDrNtmYNudIjk6cDlnkofIfwjU8XllZSQRMy-WaOn3OTvPe0EPDLo-T3BfXUoa-tq9GEmW_V5MgOIHi3aXXVMCDh6Eix5F2THZBh2SkqY0YL_Crisg9zUxwxzDtOwpaE7rOJ-CcamlM0iD2uCNUwP6J4JR5", width: 4080, height: 2296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106836673165106599326\">Surabhi Sharma</a>"] },
            { photoReference: "AWCwydgKGtJjdVuYVHy29v-OSneZI9hsY08Xru1F73PErYR4t3NL3I-DBYUPCgb-m5OXl6C1irwCw3aV_ft85DhFR2-HNeCeBk1EeSPtlDMEjwR-Z6IkeI3r8oOLj8J0Rw8BDXGXOEqMfTWKfD1OBNy2LFcBiKsNyTQ7We7TNo9De9wVjJGxuki8yi9lsvvSZXrLZTY78lvicDhAalq4V8VlSqBKqgR2_F5pMpbC9S5JuIQ3aUiuIXRNRsWp9-oLFSlPEAU4XAJjrwXc6gE6TnLKY1Hk7NmPuj-iQqFjMdp4MkY4S0QF991zypuLml9yHoXc3B7k7vF-OEEvecJO2zboTVW5qW9yKdIYyu1EM2mn5svQjHZwNjr5CyTGzifSdlIdRWc71KFyXROtxUtEvpWjXraEHCP-enxGRr8pyLBr3UmSeGX6N6HwdhErl0k0izqD", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102113183354869357326\">Virgilio Superable</a>"] },
            { photoReference: "AWCwydgTsTR3NXCGRzberaO9ikIxsZA1aIXi-apHkTSiInf2oI4vPTvsdRs51IV8CGAsv9ewt4t26mg7y3-Ns0bQBFVfEnNTGVBS1fKIooylvIk17vjnQTPMmNtiSdrWaVg3CHYGARTTNJg6ECB8H5-eRf29WPoYX_xkov-NY_Go-uLy0nO_ZowNBHw6FKDDkuGID0-WGds7JXBc5QmzUx2vbs0wyEnWcdNid6GgXM7ExbMNKUHtMsF5w-bhJvSM3blTlHHv90EVkNUp_SZKAOHk8ZuC8sxJ1ivJkLF3CRduL5BTWRUIiDxJKsBAOJUSpL8IxosLvktEktHxGnSEfWMoPO1f8M_3nnx6zV0UJ8d7OlkDdzq7drHK3Pqy9IqOe_KQUcgkIFB6H6jr_Ap-H4oVTtHt5MNuRAX3ATC5YXO0bW7LdEwTGz7YnCTIhT_mDLDZ", width: 4080, height: 2296, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106836673165106599326\">Surabhi Sharma</a>"] }
        ],
        summary: "다나오에서 아름다운 바다 전망을 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-12",
        highlights: ["바다 전망"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "short dish/category", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/parolaseaview?mibextid=ZbWKwL", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6550066795522532856", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%EB%A1%A4%EB%9D%BC+%EC%94%A8%EB%B7%B0+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "주부촌": {
        photos: ["/images/cebu/info/restaurants/zubuchon.jpg"],
        placeId: "ChIJJ66QD22ZqTMRIy7-u9kZsLA",
        placePhotos: [
            { photoReference: "AWCwydhTRB-NocCizJN5YZQ0fYN59JdlJJrl_lEimdOLqGxKShaUxV9-D_TknuqdhKS6aWNj-gGk8DMtUYfPQFQB7QNifiDCMUq1lORS-2eNZ7B5r3vICwSRu2hxsa02t21BHCv0AO-CinbuqcUo7Y-bRG-Oiw_2etpfOjLe5rcK2fEP7EyWQkNMUp75KQhf-XCHJukpsXNp2YN1iqKKdo9vTittLUZ31JjcAJzwoG11fqfUDI4IpWz9t0PVIat4JzgoTwqPqRLZkXg4olqIfg7GeePZHthEELonQsxRQ4TdzB8XvtvHcodqlqJj4qr11PM53gqJ_pVDSPrII-TFrkTg7OVy5c-DvRxX-rUBT4hFxgljCs97YOhj14EcVo-3cTnst4zUKFW9c81Swi--D0oIh58STTsD9IFGdARSpUvGoZEyrGQj", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103332774186344234127\">食空旅人</a>"] },
            { photoReference: "AWCwydiU_3Oukn2QEnryuq99EV0nq2ppGaWGgpgY-ISHH87Hgzg-5fiWwttgeW84yLU0ssGVaQeCXShpT8C-L8w75RLQGvj1i8lG_Zr2YqpjiFUEhKpjXe8vKduMSAuLmefGhk37ohOgASy_CDgTx7v-o79lvGeZpoVSdC1gQp6ZpeOi70V8qPK_j1kdBi9VYbln7CMEl8UeVXosJV3Isd8wWVuVKYgJ4GS-heRtmeg231zmF7DkMX16wIwHmmsAn4AYaKFMkPPq9LzhZLogVfGbj6wwn-uaCSIljpCKB2cBH7r47zmT0TWVC3Vgj6HFQn3rOy8xOzeNU9Y6E2Erd0oEXbSzJ6NA9lIwPyoVD6tBBR1AySZfTuCMVrMen22zLBXR_WGjNF75ttkxfly00FkDz2PtxG3pVDcsU6WpS414aa6d3RnFosG8Q6Z8Qirkkg", width: 2160, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109858163799145064514\">JU Y</a>"] },
            { photoReference: "AWCwydja_rR0l2SSd0tXZnD86kvRGXlKFZKcZ2nfFVJfk3VkvV_xkqyuO9i3U82oHYxcHjwdyHRFhbp4ji0ZCl3rABGguTo2CirVwogyq5AtlQ1dxKw8VM4A5aUM2KIcbspKcwMqgzxoHVCdOSq1-Y0Mk_flHKVRPLqtWYKWRDTy3d72yvZgCQI05o75Fqu4lMWeyUGj3ADx3qAPaE1pam7CHhmSMs3QWEbnDInePi1bWd2ToBo4NkpwYELvL0f3kH7wGdzJkH0eeouH83blls5Ty3Kp-jhrQrvelldNSSIZ-fTwZ5fv9EiHLMncSOy28wilXUjAhvnjsjIqFpIredCcuNaVmpsvDFtfI23zpR7Sf59hu-0nxcYDBgW-vTywkMQk3cAwqAi4vV01H74z9xFCH6klfEP7orvDsich2jf6TtKVUGND", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110303700012271243163\">zeppe linz</a>"] },
            { photoReference: "AWCwydgp-sn67V3PPXXCya7dOGxL-JzVMdQIjASzgMYE2OxQAq_-4Ma0vzR_S8ZFtQ8pVO7ttBwHgAv9KuwV5ackP4BsyZXKPtwK0f6hq1n6t6lwkEFFhCORiVTeVsB89iUtbzOo4WvHtKfUk-dct6Ec6HetuhrzdO8dofp0jlewqOX_V74VZU6r5FpQ05evLPxEm2SuD7Qm11crb2rH3R8HI_vq8etZPvacdUVR39dgjinnzaF-65NKYdMZvTOJPQQMRA1pylzCre9xcmXjmwDxhqO06nLnU_j-gNKYTTubHEUNQ_wpBLgTGJy9qSYOImY8WLF91PUrr_gQQ007C-CFWOPEYP_smDmN6ewrS7bnugLNYzeA-wIe92M89AET-5EYLehAlwtA_XnEDb_aFOOmD6EvurW6QTjDXoFZAb5k8X2mpUUghJ233KOJs_sAUA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112524358176106852366\">Yasmin Respecia</a>"] },
            { photoReference: "AWCwydgmF-OcH0nMTwkKZjDA0BOdffhOxALEu3Z32KtT5ONpZ9GqTkTirf2FPyiRLH3yN4JtJJIyEoHxqsMFL56vy4Tx0AhH_l-TB4PsiKnU084eKOhke2qiUDzFwbRZ6woLoL5bYds6ORQvoxo2OFXOANbTEp7R3yJ8gb-7BiGOq6YyKzo3pPA3_pGrPfwsLLXFpgpXLFuRcqvrm-RrNkfKvv_9nzWrT6RWWE35qYN11XPDVi4Jmof7PpEiBewfCxD2AAEx02ZOmMRUuXQWjl_Dt_ASrpGClpdVUHaogPLEBW5UFwwfPI0QJ6m76KHMrlSGt9mbxN0D5FShsCzr1Okk5qW4ZAgC6hbeKssX_1BlgDIFQO_5z0obUSHJobyD5vGONfqk2-SF-_y69cc864E7e135nniP7oejgT1RbyyOV2AfFPkjrvHrDAgzAQn6ugtK", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105940049790802981694\">Rico Loquias</a>"] }
        ],
        summary: "세부 시티에 위치한 현지 식당입니다.",
        updatedAt: "2026-07-12",
        highlights: ["정보 없음", "Zubuchon", "네이버 최근 1년 후보 7위"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "정보 없음", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12731704569528987171", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A3%BC%EB%B6%80%EC%B4%8C+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "에이에이 바비큐": {
        photos: ["/images/cebu/info/restaurants/aa-bbq.jpg"],
        placeId: "ChIJw8nEFySZqTMRi9n1DQzkV_g",
        placePhotos: [
            { photoReference: "AWCwydh8GjXAJKq4JaD9N2J3bTWwmHwd9197Wbjf4wIJrLu36ITkp8uGIXkGwNYFXYFbPJdFfAKoC6rSlHBrorzHI6Beut8kfj0i-HJwkJ5kcG2ig-PWTXN4b8zc9-rsMKVbk9ZcuIoaSA3p7NeYk0sTenSMufIU9iPSfK8DO-J7-VtIvOo1nSkmWKtdQV4Tp0gZx4fzxoIIT0l8ps40CEtC9NV_gfJhqTqIhdjKu-0O6zmoDxhEJ8mhNREFTapqe6sbl5j2GcDAgd-NbhoulIS37w0H-_LuP-8UkzzFXsm0MpVav2X1HPc9Ho7eD4f3ac7eAu5sI3ut9CKB4h9DK72OQ54JldvP6tCG0atTFfXV1D15AbdrezLjIfBqZb2hnKv0wbVKoM0SlehaELLzsG5YNImBY2ATcjzjN3J-wfsvDKpmFlYi", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118361846821883261091\">Joeiz Daryl Mansueto</a>"] },
            { photoReference: "AWCwydie7oBW8auYPAdEKU-eAIzPE10rraZ-ealyilGRD4Hep93nza6JcamNbYB--wjdY4ngoIDj-NnjjivJjS5U7-0l_ouUEl9liPZvLXgsZFwQXwNQMjJ6T8EpI45SgGlV6ujmXKW95KI5oXUczsoPzt5Oe4eFXsRSx8vWuavcQHvG8Fp2Y7UUPAJrY5PTbMZbXG9FhjG7BWovXcJ3JIa6Uha_fr29EmEJG_c95_KxvUBoWAMNDl3tEPQWqCIJn85J4PwZVE_kGo1AOk6rjhYiHeQbbhoa6GD7hIUkC1V6HJchQ9zWfwJ4AwTRKFPtTskMaYoMqhDr8DNnuu4HmYU7A4hawk7X6vkNxvkHRT40WsFBbyMQ7Jpo7_LM9O8-JAACwK4cJqg5wR_WkRJ7P2aMuURIUiTANnWSbMeTEjhGU44", width: 3264, height: 1472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100810707029362616707\">Karthik Chandrasekar</a>"] },
            { photoReference: "AWCwydhSFOmj_eX34vyvYcNh39WPsLlBlaVL-5SADqbCyovBY0uOeLQSzyWDNJXhVdnaN-Q4L7CWI082Z8byfjv62jRzWyAJCu6S_1hAzExjjJxJbDg-ZuyN2QafYib7a8NW9SdsGqvwp4P6f_jRASYExgeTufFaIsVsYqN96gDp7SLBzHSXtEcjyn_PjGpJRuBZ4M-JvwCoQJNtciDYfH3bYyrfFlA1Md5jbkdeVgcSnWU4FJMUz4puBphdIG4KUMiqSZSeTdJUbBtQcYzxUEp1fxEJng7x_Z2OdtAhcC74EaoFTaTVAvp04fRpb-QDBfCUIhocKR-mcz5ZN71vwSQMY9L-GNxqK_e_cjxPh5lXSFspe6k-RIbEnAY0kJQVtuwmFKtU6qiNoV3yoAyp-TbFasY_P9zmEg8RKiXRVs9E4Flg6r6f1ctGPGBJIGh8Zm9j", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102351381666454993354\">Giovanni Oncog</a>"] },
            { photoReference: "AWCwydhOBWOPtGxn2bsIEBrFA_jDgMXOwpVjCXoAX0Vu2nUggNnusuwv0HgtcmpdTeNNsdhuhKclQ2p7ymDP9tu6PfEJo32Yfdn1qIwU1n0W7symwbZgH6omcOreV1-nFRAHcID4YrWjXhOuN9MmNaaNr-2AKGK1gDsZGaZ6jgmVh7exnvJbs_I3e4_Le0wKjqNC7EhIIgFoFw6XO8vxF54E9mZQdYff9lJJqYDHp7iypf3i9K-SX1j7hdhoasQ2nkSkkH4Q8q4KbaMShszFUk7YHcLi7OoV895rMqlN1g45QWkqLLYNBsAeq5ojtK51ibjLtqZcMeNRCUmGDKrrqskYuMEs5bSgUzdIaN9ZBs4zZFMLL0P9luLpL_ie7WRplVERVXZotpMb0fli0Bh1BzC4qZrPDvfgM4peFKhluk2SAocF13MDOCNeTqWA07_B9m4Q", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118144910962027079333\">Matrip</a>"] },
            { photoReference: "AWCwydgTCxK7zZYwpcU3NOcFsk5ZJZQFuE6tlnH2PQqAC3BPKOQpcQw-TlfeqmsH6PZK_T5lB6er9wQ8z-WQl_w__PHqgN6a_eOqqbrjuzGJnyq0yPlX8rw4B-y_yCkymOcYvXAusP-f24dZCiitjZxDfqGJ4nM5Hj7Bo0UHA17EeYv2P5Hemc_QvpkqCzp555dB_cqSt9rbNuwSXnv2_TNiuFB4jW_FouC0QdMUK56JGWSr335zaPo4BK1e19OGJN_1KnX6asyJNhRD1ApQI_U7K_2SIwP-eoizPe7as-AwfcnCy3UuFB5e-0qYPSP0M4BnjBNAXALHjgfzp38_sMu_ZHPu_6BXYH0Df4zGKKhBHID2Fcg-Z7V1x_nPdHUDueJycN1jaUpt1L1YTegumLKp1btTMCfFwzZk7DBKh_Y_FDHV4xVhOZkgZH6HX-9hbQ", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118144910962027079333\">Matrip</a>"] }
        ],
        summary: "세부 시티의 바비큐 전문점입니다.",
        updatedAt: "2026-07-12",
        highlights: ["정보 없음", "AA BBQ", "네이버 최근 1년 후보 8위"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "정보 없음", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://aabbq.org/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16997550835311780085", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%90%EC%9D%B4%EC%97%90%EC%9D%B4+%EB%B0%94%EB%B9%84%ED%81%90+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "버킷 쉬림프": {
        photos: ["/images/cebu/info/restaurants/bucket-shrimps.jpg"],
        placeId: "ChIJhesQ7EuZqTMRpS8TmsMpTuE",
        placePhotos: [
            { photoReference: "AWCwydhIkrBXWYr5iydcCKdMPw2aUIZd4eQUH5Z8eBQfvuPypKXfyX6EenmX8oK8TJeKyho1bLvmdhwiQ-sk6te7tQsim1_MsAN_60yEVA04xltd1j74gwjcMGPa0uAgbGIT3-znfaaU3Z5uK32nCSjdah9_7Vc4OgS0dQKDIxihwrN1kfcvOW2e_VSOGqN-aSOmurOAc_US7Y4JdYJhkhQFX5MAm6Mhf7bWT3Ti8HfoKj9nDSVjKUjQBgOxTdKUJIh_8cjVD8zHnF_TK2PWPe65Om05dtLESoMPSWy5QWMuCb-0fHY_GC-ZlL-2TED1b8HDaz6J6U3bLOCrn4q4ZGny_3xpfqq8d2Z78c6Lfxgxvm64fVQzjswjgebm6GZGcVBWGyaqP4EIVdYGxp8RTar2WE1iJSAj6BDUZ7gDYwMXOPQmIi2X", width: 720, height: 540, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112808606653355421168\">I Love Bucket Shrimps - Capitol</a>"] },
            { photoReference: "AWCwydg6vJBqb7DCJV_igLFLzC4D-W93qfHlWtfIliFgykBr48suo0l_U2KYvDcpdwulwvRRLQ-io8OTO7Fq4mr4iY9QYWGDEKmJqhP7gRh8dFsSSzUepJ31SnN3bx8wcV-ByKowjvgHUQNNXCgCp49l1XRsE9kaUijIuLWXrZs3h90QomH9JwAAXwrvSajKx61MBbsm4WOU9DgTJxI3lEdQ_kmGxR3rs20q_2dgWuCPpINFsXqZ4irS4lJYcXM2L0PMdXtx44MGoz4ATWLm6PEw8FgYrpXIopJ2bnyOfi2I6lCQ1hLgmdeYu_-AjrfMNDmxk9Z3gH-3YRG1IKwz8u-dEHEnk-pZoMFS0PQQMMR_APfUW2xy77xpHpTFbtlBK-TJE1EXs5Pa5dPXP3Tr_plTtQ2UvXGpDw464X9gdIZZYPaShAyJSdkhW8f3-p4pwPCB", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115486959906785641132\">黃琮群</a>"] },
            { photoReference: "AWCwydjV6MJ0qfn26rvNAKb3mJxW0L5arFx9j-_Vq5WVtex6ua4-w6WP6CV6HGV6jRtLNpW6EP3Q-9JwSblFpIctoKZ-wZAmQOPxa-D192kFrAhTKxG89K3LGMEPdwADJQG0uCOS5jv4nOeypprGKWHlWdmzDtsl_vTC1VBBJDfXHspWmpbeIltfXwX96jRpUUNa3xTsj2Murg0rWiMU-pSQR2xpWxkpdSNLYzbaJdltkX04pS8OLad62W4aSrUUiKaoHek5bBrzmlCIACG-8zPft7QbDEqCGeQA3QC5EaZjplBFN9ztwC_pyKuvrdgBu9k_IHRTxS9Yj1B_NSjnU4TavTZYK7PVoURjynM7MEfXgnVLFESFPAVycQbdAfb5W-LRYvs8qjotPS30q-vXM3qUErh7lJfCDVJ3Ru328H-GMtz2NhC33I70uvnpIKTZfPft", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107523436758842229677\">Neca Edralin</a>"] },
            { photoReference: "AWCwydjDflcqpzzfogYVZ8AwrRc045fxNqubKQ8KLyxPsKv3vN4jA6L3epOhCHtx6tf8ZYMQFSA6DJ2jMIJCU4ZgOxgnyF9sF8e_wO_rbpuiVK8wme7dq4qh6R6vUS7PNRrer9Y_TlNx5iDaIwfw7ZhQ-3LYK45iMx5h2pymM0gTpneyNCkM-WGKo5GOYoK7vbGf2ARWBflYrPUEbCwU20Kyf2mq3sOgIuGAWsFcdRoFSx_yY7RjvYtLJ7amyiNna7PMZNwRoyaqeBsrzKTwuV-4aTJw47-QqBbKL5KlPzCLygh0W11SPmS5UQcSWZswFhu1pHBy_l6zefg6g7QzsQbxNgEwDZEqy4IUi_07mT5u7rj1p8f7z03ThWRKaSq4MS7cWYjMUveDeEIqc5kd5Z8M6h9vrHrSIB-G9nj0nY6PJgXHvg", width: 3905, height: 2929, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106440958830699100433\">Morel Chang</a>"] },
            { photoReference: "AWCwydi2TCcwLHELlu4rDqw5K96JEgzWwN-zjDdiko_47wCZ5luxid0AjgMWs1E1XIJyfBe6GIaTZ34VQutlVluIksfWSzpqxh6mYUorWGQzB8fEz8LBNf61Xmk6VxbuDYbbTKaVgYv0LRQWaSNctFPY9AUlTpdMB-FON2dXlUa0iOk_lw8hSEnQVUgI8fP1FC0QlH7zTvC9RKZPReGhr0bUWHmWky5V1gqK_EKKbGJg60MCKLgD5gDBLgV1dpLVCq4UJcizZGqs1eU6gs798tJXEgclOqJc1MWdrK9PPBUroQ1MfFA4P0HuLve12EMryiiJJml9eylp4EG3zL8Hmwhr-CCOQC8a9gQDlS_UHQIjDK29kjyDVjeeM5W0ttFO-PpoBPdk1wsNvI9A4qWwNXrRs-eEQfMm6ieXLlMNOp2bdS_eOQ", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109358584438833975861\">CHIKAI WANG (Kevin)</a>"] }
        ],
        summary: "다양한 새우 요리를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-12",
        highlights: ["새우 요리"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "새우 요리", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~10:00; 화요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16234959626797526949", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%B2%84%ED%82%B7+%EC%89%AC%EB%A6%BC%ED%94%84+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "오이스터 베이": {
        photos: ["/images/cebu/info/restaurants/oyster-bay-seafood-restaurant.jpg"],
        placeId: "ChIJddM9nUmYqTMRL7vXF1wsAes",
        placePhotos: [
            { photoReference: "AWCwydhlRwP-CJKS5Dq2gAr_NZbCK0uoWdMGxaSg133v_v_SvbN-s-Zi8oM5TEuOJ_T_gFVBNya3f4NDlQCOmp40DjhdlbceFfL_sz0YlWjY8jYsanRtxKLheRYFawle3JlLNB1_annYUyEXEl9P2-YH6hk55gIJNAtJ_da88hO0E5I-k5i2vIKmPX1Gbhl03Vcyk3BwEkHIjPJ8dLMnzzTho6Xqs-iDCcJDHaxjXbzib2Im6CqqUaq6_NWgOxS7-cl5VGWRr--lpzA5FjA7gcSWd7ZqEjKh9Sr13yjlSnWl9KGbp1dTFcWyLH7KI_xFFj_oiWihGFbfw1j_REQMFJksPZgPXvn2tzLCec6GQ6YDVPJLiQ9VElUFQ4elepz_3aZkUv7VqQhGxV5Jf36c37vMvQdr8BTcl_CS7xiYWd86G8TkrI22yJOd2A4CZZoSRCr0", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112113656577544810871\">I3qsiL</a>"] },
            { photoReference: "AWCwydg-h_AlZryhG83xVTUKpv9yVTKfZWVOCb7EghkSt1lBnrGSEKoauJCbr12Y0FAm6ogDHdTAo0o-1l6iZwQq4eu4OC2Wj46wvkT7SCVe7NaNstoQ6okIN1rZ4trA7qGYqt5sORQHfts3SexGIJFcNWrMtWM0_0D_r59QmK1YFVoyki6l-tcS2Krk0j5oVmge-ND2SXYeD2mGu96EQLiVYN_FbZiEuFXesJqiCAeRslSOGAFlwTznfA7956cbdVPrUP8eQERRP5jgT2owUkPPzlqZvw9KJDLuQsCKdi1S_IoFJW7UrZ3AFTPg94rpGdFwto1KZUhMobi6-qSi68eF-_pBrGuD9l9vtp1PIUXCQdQvyODysnGS2Tl6e299tIpYWUDN-2oZRaQi0HpgBLo-iHhjisz0X1_OS0MTNeYsrUfs0ZdB", width: 4160, height: 2340, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108688053321937303113\">스마트팜아빠</a>"] },
            { photoReference: "AWCwydh07A-y-J46a1hq1GXyDrzq_3meNbt-ZQvfQeLRIx0uY771ccZrnVD0wY_xo-_bi2X9VrV3AzWSgTP4I7rDRlyATPxjSDAVY8Bv0kXBSxcyayEjQbB0Z1vNrUxFEfhdOsLBMWm9UIYxkuOmAyKKVbkbHdjsOk3GpnVbwqbFD9yoSRA1f19zoB4ZLQ1rS6US-NY83BCgALJg1yWdHsh2nRR-A7JW1y1XXl-HVOtO_uZYNiqqKWmKwdy0Y9ESavtdKpcZ5av2LHVdjXrfBhvfPrXH_BxasL5bE3x1c1J1qZ7czOPO5yjx6YgQ0QooOplFFricE2EhQtAfyh-9WgSdZrGfhlXV1kvA4lJHJU7_6Of5lSP0B3AAEMCJEzn8FF6qZFce9yadp8iyEjuV-bf2wgzBwzW3-dNP3FZK6t-lJZmOWaQ1PRYL5keh-e3t_aVv", width: 1171, height: 1560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116439246570753980573\">High _5</a>"] },
            { photoReference: "AWCwydhtO1-okvFwtTLV_NidrJXiIUPimIJZCq5U6Db74ExkG-t5hMhiRQrBAlCtOBilSnpeA5jpSIHtRVxXV0MuEJGZCRqqrLfDR05dPtYCGFGnrPEcFR8RDG6VTDuD6LRrXrkuypB59voYF_Wk-a7Y3-F2CR3OLKWXBocOtCgq9_wunpvGW9U24jSsdjzNhvLO9sUubUpY_K2bRapyGje9amyiosDmNrEe15pxLDNEOsfyppzrn91E6LX9caTqvYgeB6-ybJ63cl-sAerL1dgMLajIVySBLsVsm9rJQFU0GjVnE0Fd9uQx-uwzfTw3ny5uk5awKvDuU1q2XMEE4tJHlFszaTUfJQxXAFXWSpaMCh0EKsW9Wj1VoZOFzoRlaaIesHVIKvu45UZqf0oR5xLbDesp7z3mb_c7PHinBKGvs4XXxw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101310310660746829957\">Tala Pinoy</a>"] },
            { photoReference: "AWCwydg9GROA7Q3YGGlhWRv91gTMgadwWg6GxwtPyJxeL0l0-Muro34vyjsh201Z03Oz7LyU4BmsqqR0aapZ0v0-zvkgYGEml8lSMGcz4SVNYN94HPSWdn4C-dnEJsYIgruNKkCliV2LbIL0gi853gCKxq8cALRtn1hP6Zs0tChYyBHliBixyda5ke3jq51L1qgDI6k2fHpFCR_bab9nVsaEf974Gpw0XGhZKqI-lt0Wwg7GwZ_YdzzYuZocTvFVL-I5tUIu6ZhWSLm6QCthXRquwEqFHEqGklXyl35sDrnDyZaNC3KtlUhBB1ORJVNS-zmw4qGn-5GYA_XyTdWSw-uwFI7wwmngKiTDEOki9FCCth5l13KiaRAIoSd7rNgNoSMXabHbjAsxjxc-NitxWZM1e1_cBMkoyTIe7yZvKFeU4TIlGga9I42iMCFMjqzc6UxB", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112113656577544810871\">I3qsiL</a>"] }
        ],
        summary: "신선한 굴 요리를 맛볼 수 있는 해산물 레스토랑입니다.",
        updatedAt: "2026-07-12",
        highlights: ["굴 요리"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "굴 요리", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 3:00, 오후 6:00~10:00; 화요일: 오전 11:00 ~ 오후 3:00, 오후 6:00~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=16933864847938403119", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%9D%B4%EC%8A%A4%ED%84%B0+%EB%B2%A0%EC%9D%B4+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "게리스 그릴": {
        photos: ["/images/cebu/info/restaurants/gerrys-grill.jpg"],
        placeId: "ChIJHaYcrNSZqTMRm3QWSh1oTHM",
        placePhotos: [
            { photoReference: "AWCwydjWl_5c_ZxZ8oYlDWoy2jfrxhEM2MjUqtgkSFrrZRSNMJxXF1_61va3ZCj1B2WgzYHMUqvMUcPTopJ0ZYsjg-SFAGbwdprP5sH734pLMmCP11yU0oPKrgcAny2aBHmkZMLiK3KEu8wMaNxNYnbWytnFRrB83kD_XW3t1IMUV62S4SzSAQU2_cfdYTr6kc1StCCJyto81nxBRk48rBfPHpdUezr5gsw1LyiDuaXG3-He6mAMMDoO4nWRuxQBjW0TyzZFTBjLNpaAXy9_jp5rszeTKBtCLTp1ohGUvouSGvQfuWhzarbcg0JRrlzHHi4CUo3lzS_3ETMkoz4l6WmUwhwYtibpue-mp34yxLt2nQwXWlyZbg2mKe99Y8jbjKnOrOcrO0lqyVlXqoZE1IOmrcXTtqdj0rXv7dH3M9U7-vQzIQ", width: 4624, height: 3468, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101930318594418932718\">Archor Peralta (Achoi)</a>"] },
            { photoReference: "AWCwydjPQLT9tybtzaOMOKoLnXIVMnYNNMlctaWJtSSCWlYHUKUulgax867ahg251RQMy0E63J_N6koaHntqN8ayuNSNqdyEPlDuZKIyaVi76ZLpJTOb66HqEUg-q0lFuosSqGt_Gr1RYAE7esRIJ0gufm57ccMCMZW5jtjPB64-kglNbGHhs3xE2SxFCdqbRBx6cXiCuujeRMvcLUN-HyvHh6o6Hn-JcY_F5oNB7qH5iodn9Rr8vpWEC8Tf3tx3sjwI6SA2mdoumFACiPOuAal6sQfwMUh8WsVqzgRNtTIwSf3tqhp4OnEDWNcr3MB3fwalCZ_IGD_bBAHRQC-9xZf3NVJNwluSdNKMeeFYSAaI8Fzs4hvCjDIBNHgRBmoSqaF5jV_zMnLaq89SO2mAVArjDyG648zPGdo658pwgdh5QH4AZvA7JEPlSyUDX0ybZA", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103817374174218237576\">Cristine Carmel</a>"] },
            { photoReference: "AWCwydhuL29PSQr2CBJpGXHSBBNNc72bszhMOgiTu6dDrBFDbCu329T7iNyD0Ex5vZIMjzS9_kuBirilCNQYhaSiphgVbOC-7geXYJn_oIalyOtEe-9z0rq_RJyYDJ8QScZ4qsWuZncxo8TK4T-IWoUCc7bOUOo3xo8MrUA32eawUcehvz6i8631e7Br2XQZ4r9GUxoP3gvdlFZ1efhVsCLfuULx1W2u0S_OdaZjC8BAi2EAqVd1ZmsoquBrW-Pdz4OOj9DjbNdu0gqwgSTkVaMJjNHYrDFanSc5Bep8DHW8RuG0n-CCp2xgYLmNkmB8ALnpyVYv4UyWKc63aJa1GrND8s3Y4uS_48iCNt6T01R9jKNMPpOwPipi4e959Zx5Y9CraBeAILOrnXatXfM-qbzX-KaqLw6L_TlSQ9YVJpZM8YQVoheEUGmytqVdsL8m_8y2", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116143149424561488473\">christine wang</a>"] },
            { photoReference: "AWCwydg3fZ1rAJxR2yFc-A9Uj9sI-0UZkYU3je-GVxavCrGT0VR4ka7MRTmTuazmNAnIQyJd3pN-efAhhVWBPuUsA46GsisPMyo9vMUyH3Il5QbAnz0gtez-MuQKAElYP5FtWrJHkEht5ZOWulaP2J04hpj4UHpRUsLgJ5neVD1AXanfnTLVPAjaghqVX25mBWnUcKHUGa5T7d4R0Ic3mvFrAfzTcbeF3q2UZM5hyuZj159BxMwrA_lhG4diD5Bi_M9vXMxk2lbwMPyeiqO4_aKBxzFbonh9bFaJceGxFbbhIbtc7IoAih9DAtcQmE6gMPa055Z33LIxtzpp-VyIO8sRUEmOI64ECQukA61dL1N1krrd9MkeiLo8A5caJHB7ZITQP6QAcgOBRlbdG9FwsMk_iRX2qHLxXXFYm1-07nvcNw58U_nfCw7WpfNM9lSTIZhl", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101174636982889190155\">Karen</a>"] },
            { photoReference: "AWCwydg1na9VzavIq-xCTtzOPhcI_O1sfPIChouCR9r9oPvyqIN4BYdiDlQoN5t4ZSFrJzWY7WEGlaCinsddz0ULTOZfzgOtE-Rvd7FLKJqvV_M-pf8JycVvfKsFxPoP_eW8cmni0KqU6LmZmpwzg4CeczhUIOIpwiQZTkLteTNgzbzcDb3WmvcowlgeR3HkU7nS18cPbxgA5YAZ5J2BpwyF8jyLWGFGksRUO7mZV_cVAQDG-hnCJEO1kc7Z1RkMQ8VsoMC4HBJt7i-edC2ibqz99Tne5iOL-mnIwhmmkCt7Ozste17NXjfcBHF2T-66EiaMv64dfsLPGu9cI3dsdRYEo5uKSw6kXoEyoljjC1ORuBv0TaOa0H27hutr_o5Ql5RyO-pXqKfniZ5GSAL4lzCRFRU6hZfvsPwPXrpl1iz4QBKjzAB9tzfSgJN3frmn8Bml", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110861963858898578911\">수경</a>"] }
        ],
        summary: "평점 4.8의 높은 인기를 자랑하는 곳입니다.",
        updatedAt: "2026-07-12",
        highlights: ["Central Bloc 위치", "평점 4.8"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "정보 없음", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.gerrysgrill.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8308129887598048411", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B2%8C%EB%A6%AC%EC%8A%A4+%EA%B7%B8%EB%A6%B4+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "피라미드": {
        photos: ["/images/cebu/info/restaurants/the-pyramid.jpg"],
        placeId: "ChIJ67b1CiGZqTMR5u6HRAGiRMg",
        placePhotos: [
            { photoReference: "AWCwydg5IbueCDOMyGK0LvBbcCBXESLyWozQVrNmZ-zsGFOsRfaaVyF8I70V3767MdrcOqzKvXTW_F_wXQnwZ8YixJXf6tHIAg24JBNigVY2a8y9jAMRWrVGcpChAYohODXo_NMzo2GRCGMDone_yclSqyKrI7zYk9zF-QrO11Dfd3bkbSFhGYf8216gDjLu9YifSeMgi8K4IHBYZ0Z7iDQ06mdABu0Rayqru8OzhLOhH7_uEc0nGKIKeBL_omDjrHag6nkH0J0VhPxYoQ6rm4SuGCYJvGsZcV3As23q46FRUPegFVeFcqXSi5wsOw02TUMBZx-KoMh-o1HAZZ6-dhB_34ezZwKu1CKScLXQhvv-St2T_L8LhCCRXqL3B4pDCpOKUiBmwJMs6RAqqhtSVqjSwY1bNdNEHQm-IAkMvzAhmyh_7Q", width: 3584, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111256610549698301891\">Jonathan Lansangan</a>"] },
            { photoReference: "AWCwydhGv1AHWFBzsgPJbB8_6Uurp4ZcXCEXKUjG-WqF6Ncd1Y4iGC4QqCrrWj5zDExe4xTmXre2Z7PYbwefub0mwtWlq-i4r9p38w9KJlr06shkx0ALkSlq3pKRQO7L8-aiX2NSjSg0m7mEowbxKn0NA0bO3pVAvbkG1kEzzQRl1dozpKeZMQ2JnFMM6XF5o6DBj9i5t490Rt60e085K59-yJAmyNSSEM2WneOTewy2qEsmRklh_P3IXRyFADwdmxb_AU6Yo-SoxM90uQnz144XGgwvOiKn2dB3JEej-cNol-Aj88lAVLe6BwT4ivOLs_OcoIE3OMuDYzlWHxeYH5t4NxV-GnjZXkLkIDQv_7iOoeYinbHhk30Zobn80n_p22zxsHXGaw59oAEEwbqcMmjM6gIo_7-HB-8Ze6w1AvaVdrg6ThOO", width: 2962, height: 2962, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115556084340319826238\">Doyzkie Buenaviaje</a>"] },
            { photoReference: "AWCwydjxW1n2PzZMLthYKks0pdpSmII0tO6LBxfCJc3rg_veFZkwU0_f5Ex8FLHgou4y-T9luohVFYl8ZLOm6CGWkMagXeAf_j6-Vc7UlENE1ZBOaS5-XQ1AwrluctMitXzBi1oGnyM6BYDOnhe-HGjJNSRqz_6P6u34aWiaDlU3IeiwOI70pvUC2J6eG_yMyWgFTeQF95OdkN6Ksm59nB4z82DiBxF_AnW9rlPKxyqKXCO-tE-11eQn5C_n-XVfpUnAsggiXOltcDVTAogqfqzJ55yllCu3ojWgi9x8K9-FawbBpTcsqgnzfIedbtcCzaB0WUSVPht7b4J-CyUxRlsX8G7h5LnAx0FZXQHr2647-NF47PBzAZMis-ZMS2iMvn0q8mkCghDtPoilINxLaxW-wMn-OPRgEB9FgpwlOLxB8EgVPnJJ", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108048509502345537302\">jason pham</a>"] },
            { photoReference: "AWCwydgpUssVqC8u2PNlralNPYrhxHXS77mcQYtpfFtm-icSLJ9DAx0EUs4ET7rhWWd6gykDNJAHD1KTh8piuyhKoISSzen_vJLYVM-1YmYemPQvAo7DRF8OzKcvGgLYZsOAQqfkJ7RMAW4_nvN9RqJzm4oVQ9c7JiB82qEpURcvE5CWYmRSV7ssVNUVHLeBueYGlG1nHds38qjp_WK84Gk68pPqY4Jw6F_chDy8jIK5u_ZTitlzRbei-L-cLDJUqH2loSeGk4-uel6OTqVEJj4iDSjNUk-DxWV1zMwdcMTpy11ujyvF0RVkaYfnlmbBfTq-qvK_LKMPz16WJdK6nhhgVgjkMP5DI5m587E5cLcKpSF1cMASXaYkRsCf-8OYXkU0-vu1vifjEy-foWr4vkcfbALZwmt0a7iKPz6XJNdIvwWaXEI", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109902971474988725739\">Jhon Stephen Rebusa</a>"] },
            { photoReference: "AWCwydgQvVaBmr-q1FA4_1YbgVHOd5cK8bKp6uE3V6goSkGlWuWQmlXczdBAbUNJsaeFWPwgMZbWlq3MS-Gb8oaOmplYHlDa81te-rvMWqPcKZvbI0nRuETM_1GwX6OkmBlBVQygj0rn-Fm5gaheSUIPFzZcHczzQsRJdWKYB4VjAxILCYQejRuBnGirGCcsvvqfO7eRlyL-V3WbhK0ODTiu1qot8PFjeNqXnPsw_SS6Raha-TzMIaaILZVvwRF_GDGSZMkXPdX-f8UlBmWMqAhZft0HGW-gf_b8VptqFx6EvmIbrI4mq2G36VeOGSiigSGrd1fD9ADtU2TXFMuhy79kZXaNuRr3P-d75FraZY6wnIBlqX5345884LxNxZIDFdkzndj6F4rsOYufRU8C-KkjgTiOW8Lyn_FeEmFxJD4qliY", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104975900900326400515\">Em</a>"] }
        ],
        summary: "Garden Bloc에 위치한 평점 4점의 식당입니다.",
        updatedAt: "2026-07-12",
        highlights: ["Garden Bloc 위치", "평점 4"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "정보 없음", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14430837232330338022", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EB%9D%BC%EB%AF%B8%EB%93%9C+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "아바카 베이킹 컴퍼니": {
        photos: ["/images/cebu/info/restaurants/abaca-baking-company.jpg"],
        placeId: "ChIJ4X4i5hiZqTMRbrc4DMK1gXA",
        placePhotos: [
            { photoReference: "AWCwydjLq12-st1cViubtAwa3EgrvKB8ABNyA_YYWXMUj1kdMLG9cWUHBkQgS8ZlF_Sako_jYsajqEFyPV7N8QeD53_n3uq3tOhPlYR0q6wBj3ekx_QzdsGTw_Un1wdGFM6Q-KD2ueXKb4aFAQLTviPux9nqfuFeSj6P59K_hxNCqEv-WoLLeP1h28zyAV6w3T4Jcu-Bd4-fUyC662ZeaFgUpTTqQhI0h2qOpWRKleP7mdHHFS9XJrxTa7hd5BJ4gSfrbv-h23g7tCM0O7mUYVXH1Tj0DltGJOw5bogtAkdq3GZ3Y4s70KpZUrS72BqUop89NcD9qhO_Jo7covt1hwO8Ea46m3ms9p73Vzm3NEyVnl1HJver_cJ4uUCbj87fCiirVzbqwF4YW3BScTLK8Ph2SU_X4vTYpNzCQFWNgghGziN_GlMP", width: 3600, height: 2400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114638588154271600910\">Abaca Baking Company® (Restaurant) - Crossroads</a>"] },
            { photoReference: "AWCwydgUgarww0mLiD3UXgNPxQTgl9YilsUJsZk_Dj2BJxNF00kybCa4kCzS_0imlLgfCux686Pc7o1H-W9L6dHYFMuc027Oh0R4qph0_NpjaaMz6Rux2n-pC7oJfkD9zgoDncnYEkrIcxT9RZ_MCyVNXAPJpdbF6t0InOfYyM5nXC_ED1eh5rdYTZOWs5zNgVTg11N1xq1XTsBY3xVB6tSy4rvvv1lebQAVP9mi5ZS-hcBznKtnZIAW5_yGKlnBFmxzSV-rfjPROrlrajj0JgIHNhoClT4j1n1Cs8Zz5o-5pmiZdTbxiayglXUjkpvJGmS88YI-jajbeKTBLyEhVdvnSgusQdUt_T0Jm-j8o838Jd1LBQJXpq7JdLspVm5GBMnIBONGYl9CxeD0hHIFtaP2GNtr7bY-0TmUU1jMayMbq8YtWYHP", width: 771, height: 1156, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114638588154271600910\">Abaca Baking Company® (Restaurant) - Crossroads</a>"] },
            { photoReference: "AWCwydiCwZm2_EnK6auVdMk09DeilH1F-GhjV4vHoH-Biuco8-p8TvNo9uhtxCeSlKUqOENfiJL1Gvg-di6k1SpgeNaPwpZt5oJHp33yycrTEp9f8_zX0l-EPz3unGogVJapJYIcdzghegjqm_zXfh2-sGGaIgC40nF7KBKDyXSCFKC3MqUbLbjveLdk-VB4O5sQyWyOgYJ1aahFXWJMbJ27IJEQtavWt6TvExbT1JwjlbpZk3Lk9jKbLgoMtE1Grl7PLHOOkq5hy9oLsselSNZZcD-mLMCqeNy1zuzj-fB4x1z2NuRTfRBId0yd4NH6EH9qXQSWu31Idx4Y_meE3mqbpYK9UR4DESbFUuCdvNo7pU36uwPuNz3sOfeI9IiPrLHONgzKvtwB2eL86FafYjMlUzYfzRxFCXPcw-t04vFXr_CI_bRc2klYJG-kIJ4pFyQi", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116600684193656539868\">Jamie Hartley</a>"] },
            { photoReference: "AWCwydjk0YUpbYkeidqhaxxVHcUXCI3BXrV2El1RFiE2FJ6CxugxwSMi8Yjlq_8qH1sK2pOCsEo6XAuGQcZQBARjqvCccUAtFPmqIY-z84rhfIP8HnPE3j_2PVtuF9OgtGQxtb2IclkOXaPnQGjGn7iqOxc9p0n0feSdVXOPivrXeV_i4HKl8dOwbQIKYFrP_exbSXvt3GtijuEdJgPlGWb4GAZZwcxhUWlwZ7us8_br0uIUHf0wD9QiNVPsZtpJlDxlILLy0G186rzZDy-QVbbw7oxYQ52zIBdROX-4t_VETwSDV-VoH-0_pQ3bpKA12djQjscrPERUiCsHsm-Wbq_p3nsGUW5Oe9LUvWGJcWChnsNx22Dw6idVxPvoZ-aVI9hFQAyrmRFtfqTKeB4-SpFF_M4gJ7qA3J96UQEuYCAbj2XNTOa5iuZI8g6fMjaUt3Tg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100814030900511046855\">Chen庠凱</a>"] },
            { photoReference: "AWCwydjkGNd5MPW8KwkNBlmJ_O8gfSG4I9r-Czo6VJzwOFgC9h7dKRPwq4gNbSe0DBpNAl5qAtTKJsw11LCZVxyiQp4d94CshDmYentGrDQWVZG7KAYusmRaZN5XVSKauMz4KAME63ps8IH5Wdh8hy3LF85-cLvvlE2cWXG_CdttB78pgGhsEw9Px79TU8nsfl9BFMYX_RZ2kVoioPz4ppmYc3T8J2KcfYwrCZlSzpNKz8Axi8PG1Kf8fMk3Rul5Bzy8D0vah773HTrtNUWet-LRVoAU92DVPgTEjNCGFy1Pd0sXkilIK_NNhkYYF7gwcG2tDnq_BSYmJdtwT5-ugvXJb_Drc8GECaW0SsAwqTO-690yrAmIuIYEjnXZ4su2QcQ7Ym-cxJX-Y8-T9KPsNehD8qYXSxQWR21I2iGDfVoVxatmgDqQaqUVPx8Yp0dsTdfE", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113344024491625577463\">Stéphane Martel</a>"] }
        ],
        summary: "NUSTAR 리조트 내에 있는 곳입니다.",
        updatedAt: "2026-07-12",
        highlights: ["NUSTAR 리조트 위치", "평점 4"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "short dish/category", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 11:00; 화요일: 오전 10:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1445115719214418309", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%B0%94%EC%B9%B4+%EB%B2%A0%EC%9D%B4%ED%82%B9+%EC%BB%B4%ED%8D%BC%EB%8B%88+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "라 비에 파리지엔": {
        photos: ["/images/cebu/info/restaurants/la-vie-parisienne.jpg"],
        placeId: "ChIJaejjSiWZqTMRePxkwZemv2M",
        placePhotos: [
            { photoReference: "AWCwydg-J2WXbfF7uXBu1oDJ6FMMtAGH1eIf7dBaeRT5giLtvEZk0BaoMxkALdBPRVTY0m1LGolBmmcdHKCReRKjjCRHfQjcHPN8GFzFLd6snOv0n7cmx-5dEBHDWwXpNUb75vIo9J-F9S6jkT30rmzyoxFwP88KGjF_arLkh9FwtLQIL4S4K0LyRuxd84GShofSAjJckpdN6Du53rkYX99VuNEzUV9_VGDVsM5lSmyDfLdCUogIjfC5NVYrYoqVe25fKk5rLFxnZ2jY9hu4AEhp226KYLDKkiZGIGQKlmarXj7fc6UMmwGlOqPUC46I3gxwcS08_RlyrF6huSWPNZZfpxQIRZXsmlHOTWaWZensUnwASfSX7be2a87NUYemE8vsgW3zFF_X6p2qF-FkP0boyzHLIW1l4vTVE6nwiajRb8STk_XJ", width: 1000, height: 750, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102270205499520408733\">La Vie Parisienne</a>"] },
            { photoReference: "AWCwydjRX6BiE-RdMNEx5TjBMD2mu8ymCHSgU0BATm_xjv--g0sV7EqJYEM3xSnVPxtXoRpcTq-pENuxprECSWl2QhHJVafGfMm-iL8eW-hNtuhj7AhW4jooS2QZT8GzSnLtczbur9_httM7uxYyC5Ln1u-LHNnySqD01AMFAY0siNPRg_eyPZySx9DWhlFkeER9hU3ONdvFSdBbSF2gQn99xGJIuPKgPNNUQz55byinAO0V3EpbLLQVWyEaTG-HrVTWLMedChFJBwNrDRB4uV-D3a4GAKLNswKCXky7no_1ph8hGtJPfLIWzDrYyekp6eZJqd9Wo1TFKtCpm2t8bDxP47H0HsZz5k8as1-v0kFX1F6cp_HySy-ZU-SaMsM0NnsIKJXbm7Jh6Noox6X-mUy4AWyRycYp-qPGCgzYSGZLkZu1N5VHBLvC187z7sAT3w", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113520723008524898406\">ADJ Hotspot</a>"] },
            { photoReference: "AWCwydhvSbSPnS1S8_IzrKFTj06jfCgS_F_0fo93SPZQ3y4ZUcngJfagLCcKRtPTx86Pni1NpsNWtkm4EUrUOUdUPG0Z0uXf8OwUzg6_5TuxsLmKPrxTq5RIYX91UvHupkXi6C-uNpN8lV2TavmafYCgKRWjmnDPJVaSok669LMcB5wYS98mriUMJsCkhISgZHAdi_K0bEK6k-xr1zsnTsXZioyQK-JntY2wyNJx-gUUI2SzCMPnSQ0f072ZHSYfkcMgjpYP6YPEpP5oZhvm_me6wthYG5PDEiPYFkFPzXtEp4a9CwS9_RDY2iiY8e61FnjGq9WdIxMoCHIBO38P3lhe6GYCICsvy35K4uANxhr4c7eFiukAFZ0SZkrp7l8QCbU-fAtfP2ycL55E13wxMwa0VYapvJRv9MzbnrpNjSvxh67fo-3WGRmHDAFF9c62_Q", width: 3614, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113520723008524898406\">ADJ Hotspot</a>"] },
            { photoReference: "AWCwydgvzubihX1J5B3P9wXTvLIehgabPeFBnSJoDj_ogTkBytKGnxAL5Nra9aQVWlz_a48jrJAjpIk9inZbeadLUjmex6PoPCvTAQyV2ogL638OcpoB-G65RoI1sk5SL6PVqH0YK2Twq-NQU24LpoqIwmZzSRRqIqlz8pc17TjQXnnACP5T7pXzPW6htsEXlo9tfFtkenbOs0_a3-u5vN_58WWS1s2AiIBFTBUJTrPVLTXW7Kisbjy-6nyCw28mW8GeTh1NzRtMteR7e7LmVlEzoMf35A-o3UUYaChgGusDITjb6GDmLruDMyiGBCjwUFgmU2ZeXfLzWlyBs_rqspJTYkwcAlFZeVZxPK2QRZ3I1tZZIds69wHHoQx3wKAXHssC525bUBlSTjeM5smuyq_zq7CF0VAxdaXWqOmvxRQum5Buf0DCDMo5sciYIZiWwn_X", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105362696560070814994\">Martin Ayotte Cummings</a>"] },
            { photoReference: "AWCwydiOEunTFGUkQu7gkIEBTUzFF-yvzH7HzKba2z2hi4RE7ibsEaaomaxI4HndUfbfpb64MZVsqzpD5nppVq4iYQAXjxhWRTwx1F4aXZDRqHNtXR0NcsYnE2UC2vYPEGPzhle-h9VfobXPGfVQSdGCpuxyGo-WDlXgpU3cVEpXpcXqr89MwHZgkPFB7VDbg3MI19wbLyX4xFo6Gbm7zqeZHTKh1NvH0A_JlmpJ9C-OoG9-zSXhkabnOs85LedfcAZT6tmatIC8bd9g2-0Bo4dxPL_b_T6oLSexEcjebfxGZ84Bo-GGmtz1TKzzl9mEYobbpie8Kq-_PlJdvk9fHAG0Rz9oj8kroRE1ja2qptIhH6p8f1pNXXsW-z0ovagnhJeJ8Ft17S_qJyfOWF06rT2mOSCcJGdfUZERGcx--rbzXTVs3bWtJWEaPzC0gnYVd_6F", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113520723008524898406\">ADJ Hotspot</a>"] }
        ],
        summary: "Gorordo Ave에 위치한 평점 4.3의 맛집입니다.",
        updatedAt: "2026-07-12",
        highlights: ["Gorordo Ave 위치", "평점 4.3"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "short dish/category", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오전 1:00; 화요일: 오전 6:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7187646701021494392", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC+%EB%B9%84%EC%97%90+%ED%8C%8C%EB%A6%AC%EC%A7%80%EC%97%94+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "일라푸티": {
        photos: ["/images/cebu/info/restaurants/ilaputi.jpg"],
        placeId: "ChIJkVEpkDeZqTMRKtnBG5WJCQM",
        placePhotos: [
            { photoReference: "AWCwydi0ujp-9rg-0y3qAYV56HiVjHlXAcopFIdVKMOnFolB2qPfYFpxbgsxLBksTma0HINZl1rP6nVwUXBIFDOj8KI3tlELvDAyEMppgsieU9qJgiyXxvQ9hZLeL1j-pkyqeli58KiiPpKqZpgdQe7tYpqKIQYeZPy_pTz6ip5iVoUk8IridxZ8tsHh1XrmAihc06YnFauh3bOKSqzTerKpESet79NB2AgJqANKQ8h-8Saf6b0ff7BFk5Q-2EZ2WGAv8wfMm5GOkXYyhLLKVENDdDfHLs54ZPvzTNmUby-TMqHSc4J1gaZQkI_j6XfAXVPGe7A1YPRQ7LJzDmMT-e5U5suS8PshP9C19ozq2F3l_bMNqng_G4RYTee4jvpBYJziVsUpe_A3fL-4G0vHEXPpQ1wsL0eDY8hEh7D_tara6KCP0yLP", width: 1275, height: 717, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100770005944323365770\">Ilaputi</a>"] },
            { photoReference: "AWCwydhl-OM_y2TQ5u8YIxkBo6BtGgwneIA2lOapYq_d6QeP5sXVkv8UrNe4WDRB6WvQsbDcY1Bb_31PhUJkbqB9FSu7yooax8ppgX4h5WSiaankHE7OR-BwTdhsZvmrhq_wHuBnmkC-zLSJa5W2G1N9YM61gXxzZGNapViYXja3f8Yk17DFwn7Iib_hLOOCopp0zLay2hlQT3Q9elcuqd0QbOvPTP223PP3kHtqvd6kOyEbYPA5c__3a9ALhGO5aK7XcqxTgayn0oWwae9F_VcH1bNCq3guJGsQuX4DnX8yzppHTefmr5GHeOnUpRWa4SyzQCH5legVJdv_kjIUANDLJBDlzi60UP-aBmlvQ5mNDBm7pOSbsb4dWl6EhcUOQjRVPC-XuDjqMuUhfXNK2BtwLESJSYlGzaAOZLANe3TfuiXPwOWS", width: 960, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100770005944323365770\">Ilaputi</a>"] },
            { photoReference: "AWCwydjAPltMvsDSJToAASiG-xIkkYeWtMLW_W5ul0U5Ip8vvUkVvtNBLoZt04POYb5gwyCDfwNCASJtsJzfMxF0hMtZW6B-wG_kHSfe6CKZAITb0h4Ms3uu-qzTNOJPzVsbpPYVDuIl0NmOmgUvXeSsE0lMt6Pzl_pbNWVs7sfVIlP5Blm2DGYWliNIsUJwr7UpdubtCQCcAzYW2ydomTtdBjYPG0JPPAQPzm5iamBxlrC7LSoBonsfpJIkcvm0q2DHx9mbCo5IBL11N48JTdnQFtqDFyp4Eam-Bb2p8HtmaeEPe3rl-vH5UMB-uRi96dQV0_UP4GU49YV1BQzF8ZNNJOx3nlIQ5vohnHycz0tlOxGYJdSi9hF8cvd-4DCukeU96m8fThYICZR7u3ldipMKSrooBZ2hd3CVTX2XXFCoGjrFw7mGIDWiLBe43IGqCfl3", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115115580282352588724\">Dexie Estrella</a>"] },
            { photoReference: "AWCwydiQu0wJJ2UEdgyU4A9HbqQl3mUC7VIdVmfjdkHHpnWidN3jp6rF1Gh3Lm-ZcC4LropyY3lN7QPiK7VZ8R8GRytAYEKUFFLWbj7NKGgKi8VJ1wOV0QSrlbV85vmAV1VH6UEweNDuh2u41YMg1IRdGlCQP73yshE2NJ3_eBK6oFZ2yn799IlULIZU8KZwS2scPFmjsSshWp4YPI8DRs_hdQAsSQxwUkaMCqqAGnjQET8aWYdJ9CCnCtrGTXxGUdeWfKr-BL5H7dHZv9mnh47d1DfiZhhc2K-Bv0um3tOClShm0NOUUuckeMCNWEHqcLdneEX12lD-RueZgjTmaGUx-UH8tbESdDo-siXtozxl3f7MAHAUuguezDCa3J6H94-Ma7WICFZJRYxCoYf5laFznBNsD2opKwYffNzjOX7KSSMUrzM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113753367436231931667\">Chiin Hajiri</a>"] },
            { photoReference: "AWCwydhfVW29sgPvvA-CpcxacZHqOiRqIphukuQ5IRBfVvHlYQFM_EPkABGi_3-OePOVqtx6aXxE8WUtcpIrukigHHNMpd2ujaGgjc1lc8zk-R755qAdOxGLYaRDLdbAX56eofZg2m9WdSXY4Vwu3YsQA3iSaDLIIgGbwNdebDHjD-1LgRyIK9BX10C84h8GvIZrUagZnOyHrIxkvTI2soErmMwzVG4P4ttdhZ8_L7m8CBNM2MHHTvIlT-jMwdII99tG3PPBcmk_8kD8162HkGk1EL8Kw5g7Jf9lPwU47D14eu6RE2acOvK1TTK01sB8C78k-pAtrRRJXwO3p764N-3FvYOJyI1l0hc3XS8epIwb8zQHsxdTtft1yZ9KvV3-KXlB7mi1b8sPD9FNMAbIyT_l9HPWfSbWkhlPcEicrqmzfBfLHqw_8QxHQFyqSHs9DPry", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103664468119863956000\">R. A.</a>"] }
        ],
        summary: "세부의 유명한 맛집입니다.",
        updatedAt: "2026-07-12",
        highlights: ["세부 맛집", "평점 4.4"],
        tips: ["방문 전 Google Maps에서 영업시간을 재확인하세요.", "인기 시간대에는 대기 가능성이 있습니다."],
        menu: { signature: "세부 맛집", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 휴무일; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=218857330413001002", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%BC%EB%9D%BC%ED%91%B8%ED%8B%B0+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "쿡펍 세부": {
        photos: ["/images/cebu/info/restaurants/cookpub-cebu.png"],
        placeId: "ChIJq8QErBGZqTMR_6DrquLK57w",
        placePhotos: [
            { photoReference: "AWCwydizoMhOpnfSBzo4k6R6VriWSmrSD4sS2kMlH3Zs0x7sMJOw7TzdU7hBP13mww6sEX9P2lMs_HwYvx253XCVF5jBbBiKm7dGnC4RUShos5WVWwt_bkHXsXHuSy4y2lSUU26Z6lm0jR7Ds5RbRX82YS3ivEyI5n1awEGnCvsfWmJhKL91sVpjQesRryROl9D5zumif_N38vmj3gSYrcQdMSx-MjjKj5Xeg1ii0rDKm4iYITt1SyoCzbvaK2r1PoVU0CSCIEyOlbMB_cThc0DCeeJztapk0xGeASMSXiIGtcdTkF2CH3gQJNGivZM1GxKbfmZHZ5n6GVB3R-SWp0Owu8pWSsyoeFwWlpg5tOyN8Bam7nKdeBgB_vC-Nq8T0BejM318eliyunzOhfCmx8TKp8hXhwaKtn1YQUylrTiaQN4", width: 768, height: 432, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118114453277210577726\">CookPub-Cebu Banilad</a>"] },
            { photoReference: "AWCwydhDuWk3fKxNd7Zkpi3OmKjDR_rD6gbA9B2EYQ2ZnyN-axK7coUvmzyCCLt2R6hDP_zNB6jC8I3TxQvGo6p5jq880TaFGQoqCK4JxCY6MYRZTkPMRJDGELdzZ5yKV7C2zBElfgPwvNQsmgjoLxEi5Wx4RW-_WQE8HqElXWQWPamkRxBdHZMSHMNp2F6KCrqOL0sG8etx3q9Hbv2zznnbVSRPNil6L0YflBy9Z2kYei_7OBxNy99cJqKVmSjbJd7e4GZMRrHyDHcikWZHZ_loiMAg0Jm_ZBPD7rMGliaFJxDrvh54mh_VmCS2wSNEUiWDlPaOcypk15J3_3VKhi5TApIwLQbgtKjTn2m_TmkmbYG_vrcJq7zpJ0-62OibUeuhIE2ymqucn4Jq1gbVDg-39_ofd3e1H57dgIyZKGAjWRY9SVBj", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110575809345525630856\">Mark Esperida</a>"] },
            { photoReference: "AWCwydjhrbY7XGucvo0YiDrb0aBIveFRf-CjtJVeCbdfsu9DBEnf824XidM8BfqNRKX9c1WRPQb9hzT3kAJ7nMj4Qz5mKVOdtXxwZI19_tVGpcXZwucRhUP9Zjnn2ldL35fIuCQPnibuJaqMCJIPxmotyBoxZrOZ_NH6ycZi9-q0ZMUnCEjaegTOCMQ9NR7lADOrkRBSmo4WMh6Z3H5y-YDvqh4JZc56IT3yt_m3RDAV7o9os8SiNJjmAJi1R0t6QyBOu3a28zJAR2ifE9XyTKEFpFGBwuMedtWQBjZvylBsRru407XdswAsWodpQnadp9MI5RlauyqT5WbePwncb07DEBkgrclf_2YZzY-7_r5nDS2voj_RPxPu9KjrCKj-B0Pnf9Kk8xMXQfrUklZW_qIDbp9GRYrjxnLWywZjcho2Qjf93bb7NvyUMCfQEKLvkg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112412939600684854406\">Gerriane R.</a>"] },
            { photoReference: "AWCwydhx_EqoP3ctKkBVDqul9a563TG6-tf2TLfXMLSmGioewmc00GeHZ5GnUwI5VHhoB4ihoanwYl7M6DiWIcAaY-_kf1K8wEUdfXZwttIPy9wz2KbTLf29FeBkGWlO4PVo7jnf4KqfV3374JdzqJmjcuAfDwoUQVw6iqphwGnEWkXS7v59QylymmJ0ViwzMsmqBggeZUHf_HsmvkdQ156V5bS_YRpzpuFTfgPcmn6fTYxkWWPWHKxEpbBaEwN2UPmHlhRzRBFaY5fbJcX94q2PaA0ll-TOkaTeMs8aZLL2KzqMcQJUJKQcbPW1IklQgMBFquJ9T_OcsordiI8zZjmnU-MdHLq21adBvc8OvrL2FQ5nZ3j5-ezbEshFKw3DFHA1ZYZ2snRyw76GAumgsTnamffxbfmkEiJkluJcr1GGZIjsUbFFLXOkgoS4yClxbbrb", width: 1179, height: 1572, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118114453277210577726\">CookPub-Cebu Banilad</a>"] },
            { photoReference: "AWCwydhHYsID4U2BnQdpAKpTTNlBvi3hDcbetXmkGo1Q4uQxxJYS1dgkwHxTes8dXyaSXKP9Mbngnn1kQQUbQbwdKIvGYt1Pm5ATu8nETbv6BYgWc8ezw2MeufhvxlhYqe0IFkpIrKA0M_ihSCS1bEd2fGtRq1ET11ectyZZTbilqkJefyM5SxVBchf7xlS00DHKOUFB3o3FOIoFx5eSpWROr9IiT_E3FRMWvZrz1QH_Jqr_zarXlDh1SHHvpiW1w94SKk8kCv8Ps9yzHNOCV94ck7iO1hPQxWr065SUWGfIkQKPmEFLyRnv3XJ_AipXE1YqKhqZ-a-4sAs3jMqzRatQ30LA0Sk7vp4jHjaVdyuNgewuSnwkq1ks3u2bLbUaTZdJVpMpf-iIBNIOrkaFb_CeXoPFgva4cKh5WdrOzzZFNrVAUpKMadyYURWatefvKQ", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115311498130766553033\">Nary Angel</a>"] }
        ],
        summary: "세부에서 맛있는 요리를 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-12",
        highlights: ["세부 맛집", "CookPub-Cebu Banilad"],
        tips: ["현지 분위기를 느끼기 좋습니다."],
        menu: { signature: "세부 맛집", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오전 2:00; 화요일: 오전 11:00 ~ 오전 2:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.icookpub.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13612071473629602047", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BF%A1%ED%8E%8D+%EC%84%B8%EB%B6%80+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "씨엔티 레촌": {
        photos: ["/images/cebu/info/restaurants/cnt-lechon.jpg"],
        placeId: "ChIJ-xs53G2ZqTMRFsyZ8r1p1Ns",
        placePhotos: [
            { photoReference: "AWCwydjDrowRrYnl3FM3jXH9Z4DqsDbneYDszr8_-jmRCmK2dX0LRhuxTiIHF4GzrEFL-pOoOTWud5xbZazqb9oeBUwhCh4YDLgrIvxpd6FNMZ5X3RzCcW7uCcKcLyzss6orL39YOmvQMLy5uaHCyfwPLzHVOcUCG8GZjxYb5WfaoimkAC7M8Cg9p4E4tJYeNF-JnvP1TWEI2n14zN-4gUs56LzIM47s-urq9ESipJAiwzverPOEbV_GkbnuSQ6a5zxCcanXOFt1COsl5wD2ODfpHa39pQUkfknQQ-F1wvSGm9kaC-0wcRmTQ6AKRbe7uVAmfHX4Sie8jv6qpsY7kGzCUaqjAwy6KjBC6Mb7p6VcSotuT4ugdVfRuIssU56npoXlhvoA9i8T904o9bWVQA-FS2t3DDEIyyYADhCGi4mDJRpp9EzJu6ujHONGTG71Og", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108181485285592188890\">Jake Esteves</a>"] },
            { photoReference: "AWCwydg42JS0O2IN1UnJmNMrcUMwotVFuckyOE9O4FUL_1xARta-62Hm5jtWL_ke1aF0Fqcs2FvnD5LYSDb-bYY08anGpizeL0wdN4gnkogr5IFmpKf0lz6vVjtn39Kg0TCRGGrzHJVJUlxkgVxu8wqfIhRKH8pIGE7xWN0S35U3wL_2HYY0aO0znSyIxs3V58Gp5Co_VsvfgYc_aNFSd0Z0kN4flYDWT30L_4Xd17jiVyQ4Vw53LAzOj_HfbuwAmhLhakZqBjtzfRw-IbHkFe0_CRW1U98ZouTI0Rn282_-RGMyZKT1RsMLCg1cl6ob8MLqkL1zcSo31TyMkmuhbEVqGBMAQ2YxV0h_pBmzB1fdOzXG8-rZ-vNBPh8O7ZeUSC681dlgJz0dJ7DNGDQkg-GZQseBh4F1ci1pVkyvRpv4s8MQOdhfmPy53mOazpKhZ2C3", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103533351580001799370\">Jun</a>"] },
            { photoReference: "AWCwydgQUeCDXQyBkt6GjQVdVfA-oFD4uaGj0LJnpsPI-UrP0oP0ZIhoZeDVkFG9GKdD6V6gqv_MOZ5tZPQ5uZSuLCnYbJnjsBFfjgDQmeuUt4Tpvrnygw5YHUzpbVReZmho4TnuPIpNLZVnpwIACsiwRpTunRvoWJSs_JUZbaYiG52AJlR1cxrJLcVJdC0l1_AufgwlEPjQ6mCbYWoEhBTY_i9rgjn37686NZqpBCtcyNeGeVBLGJHsX_itxjpqqNgOgBQQ71z5_jSRwjYqys7qQ-v62sVEQsbFWlJIHyMxH0cq69Q5DNzYEwikEtRASSzSMQas2XUDsh7BZ87Ov6gTWwrQaM2BvM-oWIgZ4-bfFdl9hWRoWFPwEChuh6ykwj4OD_zdegB9_HOv9CiWAbG03_-JYtdHv41nndbtU7h3Tc7XJ4fHzwg8Qwfuf2j1bBTb", width: 1292, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114236629987331295963\">Lara</a>"] },
            { photoReference: "AWCwydjC8SG3PUfHaKiSgDaJB21_rICCh5ne5WYTA0PeIkJAEsQmOkFfK0gNw3z_zQhzl61fe4A6SYnLj4FUkpNFWMM-0Yg0ExsLyOL9PV8VCHO3VgVwcS97i7MtJ_X7SI_rhaY7-CSbZPnl4XV6FuOiz9uWNFWYebbmSz8SdbhDuhjmPJrhBss43--AASWSQVJQ6ObW-GeycIs8tn7bV1orMW0ELLkJ-01F8YS9MS-rXIs8fP3wFxD0OiV_R5iELXvmiOrT5yYrGuNhIt736C_MumZyhCp8Jmzt0FLtCK73YjKQ1S01SKgLnCwcWlzDiaBjet0lXMZK2NaQwcoHumWtIT-WPeVb-hYfDlFpnZwbcLfO9gW5M8I9dXbii7QzT2jdFPIWqAmuROqP6qRsN2JgV3R8-0jEHQADYizJ0NVEdLVv5DKjlEl2g2FeP7akbg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104125391191631105055\">Edwin Lim</a>"] },
            { photoReference: "AWCwydiC2fDT17UTbj25oFBXxgtk81XL8Y_XiLbbaAVuBhHTg9jNZdfMtci5i04a8dus81eSfCkrMa1CDnqYp2owlur_dXsb8FTxwnddGGDBXyMaPAr-3hq7qHUC1zQLPrlSIodX2-xjnavQg3_gmcTWtNw1gwhsz6k9Zy4DX2hBwfDAMG5b9PPs9iFf1lQl3rbcHQF_vo4JaOKEW2-zE5I5GYmcMP8Heqnkbh4JPelsh7p-b4dMB25Zd-WXdfgHMNjG-BjLTRKgXdCMonP3c8pKWNNvj1o0wsgNFWrycQrd3xEsETRXgK-83DvMbeU48PBWyqMxpWdhtU1A5RWvKyAq8l0JaXe56AHc5n01roDJ8d3UC3aT7dyAuwPF6dVDi6MjC4eqCYP8Y4hE_7mA_1dHutywyP6wZfhzUmNd8HPDM5lkmwjuAF_WHdCqNJsPow", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100046677213531614852\">Dennis Diola</a>"] }
        ],
        summary: "필리핀 전통 레촌을 맛볼 수 있는 식당입니다.",
        updatedAt: "2026-07-12",
        highlights: ["레촌 전문점", "CnT Lechon - Guadalupe"],
        tips: ["현지의 맛을 경험해보세요."],
        menu: { signature: "정보 없음", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 5:00; 화요일: 오전 8:00 ~ 오후 5:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://m.facebook.com/pages/Cnt-Lechon/100751080018862", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8353230861151258927", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%94%A8%EC%97%94%ED%8B%B0+%EB%A0%88%EC%B4%8C+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "마리바고 그릴": {
        photos: ["/images/cebu/info/restaurants/maribago-grill.jpg"],
        placeId: "ChIJiZSyrl6XqTMRZfSk3VtCBcQ",
        placePhotos: [
            { photoReference: "AWCwydiPgnjUm02vxPVE76oQgsZkpA0ynBjmt72BbGq8l-YBvPhCyXNxOE0nbwY8e9MgSXdK7nbuvM81Kb1j_MYMC1-q31qH-fFUWdb_94jYDfO9GizzJLQdXuxNcAhL05KTL7tbVaoFZvd4udcmsELCvjKNAYPWZE_SUosRUKAVeTUfcYABNlyW5K_RB-dpi7YYNBTqxATdRrjG4zcWvAMdEluO9IaWM8sTYs8_CV_4kqfSs83-2erJTYsXdwqvPZTFeDiZFOGolaUL_wEucOwa4HcCme-aDb9s6u4LNlaKo6haHzd17AaKefPA9BBxaU_KF4mp1N62_lYqLFlqZ1IyBWpfckUp7ZnxxtBY4-MjUlcT2y2Vj3gRXPE_T4nzN0TjytTdoPJ9-0qGKHpamWbrnxN-aPDFLAdD1E8BWikK3p9ZaUrFXGEsfDyUoL2GrNod", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100829390768281933309\">양e</a>"] },
            { photoReference: "AWCwydhVLvY29TaeSlmQLr5sinrkt_fPWYUYDjWgvTyx4FI4DwT-L1aEjOGfHZ-PsZeQ6AusA9Ub46BNjobMTr5bf_FtP5DkBAowytDSpxah6Mcz9EPQ8lOh886JSpRKh-_TRvElOESJqwDJnsLOJtzr9BK6zKMIfR39YMOCFZHFwM0R12k0-eo6CpC3ZpfLQ2A6-vWm_s8sPIFsT_aw943w1NROJ7wL9X7ZstN_Ztv9DqtbjGct8xgrjcSuLJ7loVwhwdh1FFbHA6BxOguZewBDUkfPuvP5OiRPKcef7ERKV2AR2IMjxiWPfbBh7o2gzwrDvY8Etp3zML9VkrhMkjwCX5ngcUS4kWvGYQQuEAdeSePeo6sqZ_N_AcVqgQhMMZOYN00zv0Tg_WQBVzUreljB60E1Tnn_ZCv8M7O1976SSzIhDw", width: 1500, height: 1500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107991740559481399222\">Maribago Grill by Pay&amp; Pay Corporation</a>"] },
            { photoReference: "AWCwydi9DkTxljzzNppRcmQnAkY1glfkShOd4AZ13oXVL8TW_GHI3jX9t_oKQpbRhE54JRxS95VS6zWGaJux8SWCdkSVUQts7ohzl-9D49sFQ-TpaeKw7jj7ZQbZcWa5rIn-HrF9qVdSNjGepZPz8Z42xVXkEfaLc0rR7EMiMi3PneFgO-pJgCmP6yJJjEgKcGzfsvr216MElScuNxHrJqxS2VWBuBFA1e70HHa_40WhJ-CKk5MG-SLfPXzmnuV4DUCnBDVL806XF2pKnvYRIVLYq6VkwTEZLdmH9g6BUizn13D_OxFl4SZr5UX01FFJsrbCvR58-__yiVemsPVnRLWm8ksgsy_5Q0o0A2Oo8jvf_3n34SbEJH2zV4ZD5iW_zJwjnLEiqGHDHNgaE9GLD3LXTCWoDwHDbZvILOsnfpN6yirWetO_rh6ZH-LD3FXcgQ", width: 3072, height: 4080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111768944251901076278\">s.m.</a>"] },
            { photoReference: "AWCwydjUWt2VvOZdBxuF6OHGzeZ6ogYiDabOX0Wxaf85OruGVVQdEViwqbJApIyBe22P2zK5JU8Jvw7WwxlaMIkDp6L3N9NSqozCxka0ectf21ofSR6BoAkcZYUwmNJbwrzW9Rq7PQFJBwkhvoE4TwWZ2WMLs6BMULWbgKd1kpxE4N98t8yOo49KZAKwV3MT1TUi44f5Ms5kPgbRJHC_n5zQjggt3YmEwAATCNxV_kZvpHS3R7NwbZmCJgo4z0JgYSCPIKof57l06jCG1be9Abt0syaxR7PMpV0kY9VRmiBsJ83NRwtfG1H6IFpJTCHGI29g4_PUwVFxJR_0HeubWjvHtVv4fbFfRryuwLpALT-JdjdYy-6I22pDIgoCTa8bp7hB2smR4xFb6pqIuzsBpyzEURpvudzvLYqq7zvv0-TSCUzVuQ", width: 3472, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111472821281316155322\">Jon Whitton</a>"] },
            { photoReference: "AWCwydg72E88CJ56FLzvN5164LpRG7r1CfO66DjeJarhWWq2ixerZutR0BasynzpgRc2bWhYIMgx-aMyLuRsY57xFIt1m6fpORb-k8DgDJnHsDzY8iYaZ-sxO-Wft6DECdDKpKZ8rw3unTx3ghcGRWS-21xqRpwnQ7ENDcaSNYxRHjJf_NXmb4W7Gq99bX3-xB-wBpfPoGDT4V1Kzo2tZkQXuVFOd0_LZ9Si50BNw5NiGTad4NMiZlPQvJWaeqtBC39olBWJtHCGFjdCf-zBPnw-7GRRcv0ltjtDr9iOUJQ_IAG7Kx0T3DL3F7yDowEzVzZWAS9T06OPwRubGSIV998q2CrM9fmUOdK1v4ScnbDdNfCgOZln2NYiowEtX1aA8aAsLt4OstR__yJIcNHjT-CFNvITSJvJgcmaYERbkMwr06bltYItvxvsw7NnJSmlVwD5", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114745025880205784548\">Daniel Poh Tiu</a>"] }
        ],
        summary: "마리바고 지역에서 즐길 수 있는 곳입니다.",
        updatedAt: "2026-07-12",
        highlights: ["Maribago Grill", "마리바고 지역 맛집"],
        tips: ["현지 분위기를 만끽하기 좋습니다."],
        menu: { signature: "정보 없음", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14124768768645461093", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%88%EB%A6%AC%EB%B0%94%EA%B3%A0+%EA%B7%B8%EB%A6%B4+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "초비초비": {
        photos: ["/images/cebu/info/restaurants/choobi-choobi.jpg"],
        placeId: "ChIJyXkJvwGZqTMRL2yL7bRGawY",
        placePhotos: [
            { photoReference: "AWCwydicZSq8XEB1NnuWrC6J_ozWDvUNHuq9_8kJO2wrylSZKMgySwY8OWfxO7Gcy3mjJK35rTn0tQ5LCdIILnrYKnrOFH8uqUzTSuPxkoJBRXxzJBSHR-j5m9AL-SlLN8KwgNbxKMUg1KCfur9zwHSIN8S0_2fxtF6z2xKXgRkUTCk10EVDt6Af6L5Uf3DR9u0KQSdkZftgkn_0wRPWxA4DirHmeZPCMsf6h3mU6-gCU0qXbxVxlaFW1OhcT9LU1iiWQ0UlLIMlIxX_CxC8aUi_m5FXpa2vRfMcegQmZZYnZwpS3Cjk4iApEPz7BIVtIUK44XymRtbTrufziHjH0G8LWpY3NscxiqCB7LEMasLKHHItR1ojDbKQaAptJQgM-UtHHR7iNKBXX0U7mOnhyUmXA1ATr0FZl47mmmFpxUIzNHcfBZ8OBXjARJUZDrNok3WM", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113751035362469570341\">Martin</a>"] },
            { photoReference: "AWCwydg6PhcEVHytW5-kJwU5vUBwejuY6L2EAw7zIgczBYlfpuKntUZMsw3sRUzvjnzui_RlJSZtjAaQYqu3v65u-5kpUzH6thM4YlpZBBsAgdaxdfYDUcbDzTrAbYfV-G5IeD6zuq54rzE_XJhmv2fd_vEDyxAjylfsRXMn55PUSvco5wPgiZQlLcHmRVaFej9OVa1iu0WC-wT7ydOIejMxl7BRaHteBI7lYxCVFORAj9nHhj9wuIh_nVfUG_3zZEWevDTcVh4ysvSB-LRX5gAWzf9BxFnsMqFmAfFwM12RmThW_uBdJzkq4BOXFxPP-Frr1Mvv8oLJ2-nTVsfd42n5UKDcP8tSrBQDwjtMBm81wVpx5HISofsJW4yyYGV5xEcy_1y6tvepsCrr396czE6quc71fTphih8_TDoLYerDbIs", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106640372444829276510\">hye e</a>"] },
            { photoReference: "AWCwydhNTwwKLBO0LoikY_p9ZLZoTQ9PQWQt4l9-PaM1jaoDGa-5Je6-9VYBOKZ4gzmOyYUJZfjN9ovsH4J7atFKbPeN1o9OpreeMTnZgKz0aUz-j8juzBjVTXaaj9bmHD7GRpJDrgDArcVjJNo1GrIz8iWHN-heQa5ZqvBdxOTuMx8rPCSBccwEg4NvaE2BakISfB7vLho7LtZy3ajucAH_IWwFvrLjvRk6kk7heh2pPS-CIeZ88liwi7x19FO2x-ZUwyC7N8T9ROCVTqjyrmezU_dRs33A8k5kBQq3CbFe61px2uKlhYlZvUltnVGMggak-gfdjukSBJrxVfigymg2ODcF0j38A0f_vOq60Wf7DIqIqj5U-HjEl97LSacXbLSTLjCpfKQ78FzWOGAuLVaS9mWxv_LyS5AuNoBYVU373L2JsO3RApgBQiOWxx9nQej0", width: 3338, height: 2500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118441231522301914671\">무계획여행가</a>"] },
            { photoReference: "AWCwydhfrOjtbPiGiz-Ox3yE6-HkeQ46LW1xRx2LYcHmfiuqyFPb74bGYzykdYee7pZdAYXdyNoFtUFSintdIos6WD99FZi-FK2WHG8s_xaFy601JAUWKOJZJZl81wODsvUhtWIq_u5tdSTOjzPFKXjlO4EV2taPh6R6eky6ON3Vs8_O78bJTM6XmB31G2Ea8gD9SxLng6Ys4Bc99pGj_blp4GQqaKi8K2tOG34I2cqDqP0-OBKZbgx54r5lRjjG95ma8w-EGbgBJ7DOtYh_gu-3Mn7Q31eKPNn2oc83NRUORY2db_BZkSpe55dOzpur2U6knNjWK9MEb9Gb_O_yVEcp7Wh6cthcXEkq1IYXG1FFA2j07z9_EYmtapdwygf1xmSf3iQA9Tod04KXqFlCqtYdlKcsIynjAyh7LVTHNB5Wr0pk5sftKNbLcqRpFoIcAg", width: 1936, height: 1452, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118441231522301914671\">무계획여행가</a>"] },
            { photoReference: "AWCwydgfoae31DgPZLMnbRaITDBFRk6i0GzVKLnMO9klIqsl6MK_TmONhTFGs7OuHpJv6UvvtqWbQOSsDON6Z3oOOHSjL_DC6cQKXvIOJYDPN7r9zQBN0Mv7ZZKEoh7eeCIMonOBar0qPGdmb30W5VTSIwY1pgG1L_t4ucE_O9UIB2ccdYevih2aaOwHFn5w-a4Q3UZe_zM8xh77TlQ6kL0tMXThAjKQAYh0Y-fhz4N5mGL-uo8-f5SoSb5pm0vF764rO9tKYZPtHYIe3lkPi49zOCG6FlgmA_euGqZqxd7S3LvTXBDhp7Uo0F-4Hb-QlmBpXbQMxk_e2FZ1pENPRMgVf78IE2djJnAbZopCPGZeH89YUCR0qcjypjzcut9aEIzpZvMYILOSkfOISR-ZauVBT-3tABYyrFUwrh6rimDw5gcKgnBWWlfFdbtvUHr25Eon", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117415917240039271279\">Paul John Genesis Mendero</a>"] }
        ],
        summary: "세부의 인기 있는 맛집입니다.",
        updatedAt: "2026-07-12",
        highlights: ["세부 맛집", "Choobi Choobi"],
        tips: ["Parkmall 내에 위치해 있습니다."],
        menu: { signature: "세부 맛집", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 5:30~10:00; 화요일: 오전 11:00 ~ 오후 2:00, 오후 5:30~10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://choobichoobi.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2832685960721123801", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%B4%88%EB%B9%84%EC%B4%88%EB%B9%84+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
    "팀호완 세부": {
        photos: ["/images/cebu/info/restaurants/tim-ho-wan-cebu.jpg"],
        placeId: "ChIJXzMqKrWeqTMRoswntQJBYac",
        placePhotos: [
            { photoReference: "AWCwydg0g09sKwG9wLA9WTBUGvq66VwIFhN51nTgzs96nlsf_nnRZznF-UuZBJ4kjWO11G_XvF8hKM1hstGYCrBUdiW1mR7vOPsNkYPx9N_vtKRlkxM8T0H8XoE57Z63MhOJplCXa0WUFmoPD0SUO-usCkzTE3N8EnD9ZZKvEFp5ii7nCmbyYYJgpDF6iIzgwY3YmZNzeJeF65wnOuR7oaMfG8eSzr0j9JVqZgO3732mViwOe62m5WVeiqtcyHI01AOv3tdgPjBP7MZKxoSQrMIr3aYqYxVO968NaBX3QGylbPW2v1dOoGzAYxnf1Ghm6J3Egu8tuer7bXxEKM2aBi5wMCq9mbyNuEDaZcMkhX7PFOIkmDti-szVtrX5FHpAb02H7AmHKahaE9cqf4KxbbESKLYm_ip0rxFeQy7uGwK7ACCLvRz-d4lKTGLAjdG7odnQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100673765674223404371\">Gregory Hernandez</a>"] },
            { photoReference: "AWCwydi8r-TPFRsLfAiyGHNYb0o2OBCnUs_K_Qegu9_tlETmlaJI8-Jfl67Q_1IKUr2r9oGtWo18K5GEWZd9XoqOB_qFI-mBPLs3kpJ7YkWAqKF3_vvNabRAkJAwi6-cHBWT_XwXElLQGklT-EmfwiyClsimDgf-HWvL2rOPhpC2EQvUOeilclR0DqlVGTfwbB8MD3-uPGLUbrb8p-ppFrUz-6Wrq618EWQHEzZ2nEiUn6qf5XI0zjl_3XmChHXyA3k9XEvFwMyQgFEOnY3cp7lU8lX8Vu5FVBqgkoLmxDf0naw_KhiD_saucUy8q-mxh38qsX-iIBeUevwBBGTxFg0DKV0FP0hvyB_nCoiUEZPQPBCkX_nMYNaqm0zz9zimJG0WDjjbpXxZ88nSGM_koWQ9vOceZSG5dnpF6LQvZCLeglxWXnMXym2wTlL7Bim9ig", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116522296566951989668\">抹茶糰子</a>"] },
            { photoReference: "AWCwydhX1ivc0EuF-xkdwx-jvXPe7m59DLqPx_M4Jiw6ONI5kpuJF3sah3FRTU8fasaOQOqkD72hPT_mu-uCvSuUXbL9WxT6o7kjG24AQ-FJizGirMVmZSv9BI6xdtjSeQtPFVOqCJyC2HhNoYTYgLpNYQdde0_UFbukXp0Y0tdoMee6IDagwYVAPY9FRdeTkNtq53Ce_AgresViuaBeHgM0Zb7YWy5PHaZNqrlUXkEp9EWRAxkOu6vVD5pbCHzDnQdIZDV-NfafjSZEx_1ycCiqXWjX-6FOT2smiXP__psB6QyunrDLxr_z5du0DDzxe8oc_VJSyZ798cD5Bc19MHg4BVL3FwMz6pn1us6PAdl60ht33Z4YNZmdaUfLX7PiQVzRC6j--KvS-p7YatKimE7IWZk7cDMoQ-H32de04BLdMqZFpcy6WAuGvfiCk3RlfXq2", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117266414170237341405\">Timbuk2Crusader</a>"] },
            { photoReference: "AWCwydgPqw3_j9NoWPae-KZQQ5O7egab_8skpDb_hj16ZbanIPGH7xOT9LBzfdqw0t0JpvYVCZvPPgVLrD1TUyM38lPoJqWc0xbdXCUlKc6W1Wm_KLtZ_B1Zh1uQlxSIZ2OmT273vJu31jKUSe03fN1MA1i1CsLQEueyovEmibxm43LpmZZqu4yAU7I8ybhmP7i1_t3QP-d2x0q7pnsp0cRsqpB4Q0X9pbqU2iyXUTJH_7vWgBfJGvradcUp3oiav-1c8M6redWlHLKIYWKClAbIaUcN6u_cqqYchBoe5TTZVnMFdw8uAl7AJQBZO5IsYl0PDEtYVwd6iCNVh17XzDdJa8jIve4A2XIjzOC9pNCy385f6-H5i3TJYlOO6fj6qrDPyJN0KkE0e9uvDEVL2XyxbwqU2z4AdRpV6zfL2pdlzLb6Lsfd_vrHcuRfVJfNjDpG", width: 4416, height: 2944, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105328319515498465084\">Junki</a>"] },
            { photoReference: "AWCwydiOW4RxUKVZI8aW0XfbDVAjN8fq640ahpzg-3E6bY9Lt6WQAezSKo1v3JfhiTNIUNQfhnVdf5nHLuHttl0gpVMc0ZrXQ6J3wwriCcdRnJ8s6kLLiUwiH-xYJOF9xfly1qDIYZ3fvef3PtEAKCgdIdpss2ROeX1spvN2cBlPH-yF_B9T9Ls79g1CKF0vrSlGXuiQKcAEN84aUS24zkCrxgTrOjFS8-OpXqPQ4KyThNOv_5XLsJzNujG1yJHU1MgbIcNCunn-LDXTN53IoHjMAUwyO0lWQGQSn2MWj3WC3FW6YjsFbBxVVU2EUh6VaAcYkLNAWA4MBrPuDbHG3N55nTjEeRJkfILVjECRvK5GgRCQQ_hq10jPQas7uFoCpARgy5rtenHQhTuCde6pvLV1YZWFY40XJ9v62d9SXQao63aygHTQdMuGXrS3OoBD2Qfb", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107991863553316986101\">T K</a>"] }
        ],
        summary: "유명한 딤섬 전문점인 팀호완입니다.",
        updatedAt: "2026-07-12",
        highlights: ["세부 맛집", "Tim Ho Wan - SM City Cebu"],
        tips: ["SM City Cebu 쇼핑몰 안에 있습니다."],
        menu: { signature: "세부 맛집", items: [{ name: "대표 메뉴", price: "정보 없음", note: "메뉴와 가격은 지점/시점별 변동 가능" }] },
        reservation: { required: false, method: "워크인 중심, 단체 방문은 사전 확인 권장" },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18403881097153144155", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%80%ED%98%B8%EC%99%84+%EC%84%B8%EB%B6%80+%EC%84%B8%EB%B6%80+%EB%A7%9B%EC%A7%91+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 1년 후보 산정 참고 검색" }
        ]
    },
};

export default info;
