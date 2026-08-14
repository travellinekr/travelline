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
    "다인 코리안 레스토랑": {
        photos: [],
        placeId: "ChIJofiq9T6ZqTMR0BnaCNErVnE",
        placePhotos: [
            { photoReference: "AWCwydgyz6y5XGTL6nRcT1jAy-7AElOKg2etAkMioLzk17v2sp_L8eERu_3MdzYbI13TGxZmom7U1AjDO7Yp6xJjQXKpJR0MJlCvKHoFGo2J8fUKBZd_6FyOCVFkMCXI-FeSulSYdDRXR25i-mTTYJNKZCorD57ZDczlsyHHJ-IrYcIpSfE3Dmo_EHCXYSz5On1Yj2kjixTgp-HGRj-32rA0oTfAvLEvWAInyxuhdkOGmHlK5AqQatRNmLm423BEh1008iHzkRb3oaPxQ9ZgM1OeNpqo26HLzcIe2MzXFZmG7S5TJ1VoS5Zi1yqFmb92hrRbuBd152GWxFW026Wh3u2Butg-eqSejK-3ikZsbcJBTzRBQ8rnxXbTjV02p8fzti2ZDN83j5pYN_0iPqhWiChjBzuapjQVlI0w9mn1DsMEvVEmax5_TYAAB2bZHp2mLA", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102855865720341400815\">Da-In Korean Restaurant</a>"] },
            { photoReference: "AWCwydicpQYBbqqp7v-wq2AY0VpKAYzMxJv3wJcZ7w60D4o443VO8CzjzRU4a6Hrg0NNrHL6XVtoYT-ccg6Fhmc_N2rMj2Gz8pF1eLHP8Yq3LimxRERGyGMhXSqtL2-GmLtMRg1fZtInlg59Z4Q1QmjjLALc88u6XQar6niz3k_yWiKlJd3iFLSYPVg2g9zXGebOpQmvxD2wAIfuL3RITGZS9XFU1znyQCie8nlW3zT4HQHc1Z3tSGMipxBMcmEX3v6wQP2h279XLuIn6mklW9DxnTzlSS2UtbmG5R9UqbIpOIGTRa41o6_TFYhpyVS7FFL6tGuYu-UGabP_NoaydX3eaVWw6Ya9SP5V8FOeHbvHCQEStw5naf8YFkCmuNf_c4i5RoQnAHayOkGfPMqiJM7fQ3jV5LMG4oQt7GdRgxxSQkttyhKy", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109855022215893936425\">Gediminas</a>"] },
            { photoReference: "AWCwydj96nnswzy1aNmATyVxRVgTGUYVWGS5orLZd8wvyrZJUgTA-Vn68fP6hnFpno39GlX-mLbpVr6hqQTbq2RFw1WcRGiayOKEHX4De7p9bmFKQlT8nHpvlGu8o6Cmry5CU-Q4mi44hTy7P1ACLxCrzKSf4desPX3FPH357eMgAWUhGPX9VcOWnS4orn8DAtzVuT9hkEHCXxiUuHACJ_HzCZo7Kgg5TI8NUtNosTb7-kcz01Eur2HmgGyfHbaJOwi39HJl63yZ9vfKQnu7oYDf3iEwlnZfvGvCLgBIN_MSSO2HHYxUpW_kWM_VnwaPsNGZtjNy6Zi89kM0gvce54Wm0uCRWqLpCOARBDJVwxqNuBHqlAMB2P6-AwrXRIXGh34fqEZBiZv-HmbjjXXFAsySV4e0aiJ0clWje3lUtdy1Q_RZTLL1S1B6Y93HuDCbAg", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102744449318333383556\">hannideww</a>"] },
            { photoReference: "AWCwydjJWnxGVkJJkIdo29srefpvuhXa0GlCUUFO33PJGfKtXSed3Q72BXovdlU9ZTkIKQC6nkfBLvx_WD9hl0l_8VPCDNdKWuJCTOeaFrZFcM4l3Pc_l9W_Ie2MkEjnDqANE3JFg3VzN5phSlAHeB3UbcwWkUdENH_Gq4ntExRk3O1wTX-Jrs8G601qLW0uLo8EDNJOPeLHGuk0aZHTFSq4YtvnBXAa03_k-LcE4SfXmA6RyLrJYfdvxd32UeUtyj6n8fIVD-9-Sitg-eKKJbu2wmhhq_w5SnkntzwxKW_-nvas6isgCzUG8EsUhCsN8JGbnMyAhh0EJIELQ8TESzkTw3Vx29sLozV9JOWTqL63Jb7w4y1vjI0F1G55Q__jWrYFsogio8W54AeY05NA1znvATC2myWGViBNvyqi7TnWJTihvaeiM-_7KUfqOnO_JHVV", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103539917601120436467\">patricia doyon</a>"] },
            { photoReference: "AWCwydg1gSg7ZHT15AwnTnvRgz9fiGmH-TZR49trXC8_LYeRQiJOZNwnVN6vsCLzb3irAqAPK6S-EfgYBiFqq_4-11QTKLUxtxPeTMZ4YuBdpJ5b_E0q7gMwQMxZd0LeYW_gddc31UZrGRW2K7fAmI91i4MH_j_V4ELnRo7xgiPp30iP1D_SqfAxl-R3W3BBApTlYJ8RQjVMSMJ3g_543cpNE5e-LL4m0pRiuaeR3GSol5Oxg939hdU14wbSUChlQ8f2DKMEmbzDZAtwPUrozJisvatAyVpJ_c50-NHjIYvqWi3QSWNYy2lGEXqUaIYRa9ybd-hNieJH5y3-F2rSnQN-w8xczyQDyT9kacvQBkkVIJRkEmsJYG2Ebq66IvoZeAJpzf96Wef06zl8GTsDQeQODjeLLkWOdLJMOod5fNW4b2dZGO4d", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102855865720341400815\">Da-In Korean Restaurant</a>"] }
        ],
        summary: "맛있는 음식과 친절한 서비스를 제공하는 한식 전문점입니다.",
        updatedAt: "2026-08-13",
        highlights: ["높은 평점", "친절한 서비스"],
        tips: ["음식의 양이 다소 적을 수 있으니 참고하세요."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:30; 화요일: 오전 11:00 ~ 오후 9:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.creativecuisinegroup.ph/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8166763151079643600", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9D%B8+%EC%BD%94%EB%A6%AC%EC%95%88+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "풍류정바닐라드": {
        photos: [],
        placeId: "ChIJ70VNDACZqTMRYnTvZbrfvpE",
        placePhotos: [
            { photoReference: "AWCwydje0KTwmYfyTZwzQsnKD5gGOqp-xVbwIrFevTgYQZlKvqK40pO_5RFe2UuvBaUki9Un8qMFlFTwu_lTT77aiE5pUzX7oQY7g-f52yALUydXB53Qkrs7fYYJwMTOoIeQu3Jvz4-DLfdFi08Yv8uKZKberqN5HoOJ5J7mlqnHSItErWxWiCnqqi5ZkwZ1qKEVSwKhqNj-_mCIX5WViadjnI6bUoLy6NVDJBTEq_e0NdvEQrufRm6QuiBEMu98sjbedGSgHrjf1MKIPDB_dJU6KJLJ5O376Zp4t1UqCebjUVkXaHZIhd1ZeX8fZA_8mi2M6TONYb6NUxmlyZzrlxBlJ2g9kjngbUX2O32MYZrcW4JUfVTFV5HSFllUZCl3QNDZg3n7GaLfG2WUEMK-zCm9ObEvm-bvvMjhzZff7_cFRlaj4BY", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112864091812168400395\">Pungryujeong Banilad</a>"] },
            { photoReference: "AWCwydhv_wHsPfwHSjTiloaxyL_wUYF8-8wUoDAbwdiCZug4HXTvd7vJoNBAI90spLtT40Mtp9JYNSyJv18tzCEnFIQCQSADrW3wL_3N9LnOUFoJQoSRNE2qcU4NAxcL0bKgKsBg6-sGXBCh_Fxryv8VMVat9n_zLuDztCCchQLpi1R2Qd1CbpLzeSaE_LE_-bNNiFr7EZMfThxZQqR-z4oMhysCbphIYcedwm3eEzkDtIfd_bdR0JQC0JSykc05f9TeXAJcztLXVdiKyyurLCPVF3SCm1h8zuS9FcANT7-CGv_CsT_JjKVF8KacQu9t-6d0drV93njEUsxCW2w8DsifX2Bu5Cm11S-03s1pYeAZaOXS4YYb2oRJORKHXkdiCJJGhMosnrjNQni0ZALLZdH4at87VOuDzs74wXo1FaEJqfddNHknEZdru5xvo5CRby9p", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100312734728474720383\">Olivia Lin</a>"] },
            { photoReference: "AWCwydhB16zv7HroRJFQldiqr-6wnFDiwY2XpX8DpvFCG502urcL1SthhGEpvfXAr9fWYqEmol6mv1dDGr4lTKjBQaxQakc0TE1WMXrok1FymPY_-YHG6msXKN_8qAb3rX7bgRqf9D1XKTndXCBwOTulu7_5dE6qULplAZVPeFkr5AwqxD3DJughJFGEYuUSfPQkj4mkngzc0f1vTLGCH33i_KTT9XojWpepNmN8fUMiI9d5956Pubz2zs9RaTZWRKHqFqdcqVgbQqfE4Z_dTy9--oZ60rkwE-s0V7pBMXXYtt_Qxo9VRNEYQjHLcqOPFExvNgBVgiCdFOiA9zAJZZVJOmqbss8ZUv5IQ2Gt_BClGHEGAHgyXbh8kK9F3sXEpRLQu72OYnZYBL32NSqlsVFKv5MvvTyyFL693MRbcGPMWNYJTZDghU68aNHKc5qjNTpF", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101243389304700493803\">なみへい</a>"] },
            { photoReference: "AWCwydha2ervzO2Q-DX89kwPpNZQca1OJHhNC0sG_q5ByjN90bOPZGkdzjkqjimMMcGAWpRcBTKvGfdf9_VTXU-vsRYJ2ePghOpvb81fcjgN6biGEX2IIV39tK9IwD5jL766Qd-G5H2zNoEpcNgJXMtDbJ0HlkEBEWwup9uK5GFMiqK8M360qPiFcNHWJJoePddqNnUNxFR9zF8fSO5eDQtrYPMrCsu7wLNfTxMWd0mFRzbrNgcLYB-rydvkGeQRBuIq5fr2BEIIWt1emsfNwYtGegUQwNkgciLvE6D8Y-7bX6iB3yqdL0WPPmnrXEhpganBhqqJaX6Ood8q49zfzqAS2NddK-YjIHhq2n1msiQ2lVF2dWOn6moOPNMUU-_YmOyQVz-s89rmGLt-t-HtppvaB3HnfSmw8mx2oTLojLgmvRHgew", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112864091812168400395\">Pungryujeong Banilad</a>"] },
            { photoReference: "AWCwydjBeJlbhPVWUacI1C2SEFdwNEPSMoq7jivAiQHbMssgbNKznrU0-a9Vhh0wfwA4h89B3BHSQi4zSgA3CGwLxg5xzZFQT2FqlIJH1Ew7iUkJxlnSLPQaGjS7FoS1tAZTpSHdpGMhsvhCReSqZim5Ymnyju3EYhCOFhboBQBYbkVgRPYS6thE6FBZqc-0RJoOcidyG83XmzBrRtq0URdTI-zjEPlCXBQWX421nOxxIWd67SAzLjXcW2e_omiLjkV2J39SAJpB8ZWrwwXGIo35WvzMN3jpEjrobkYNFL74SCNQHWGuDFS2bQXWbKRBH496YOAlYZwzAxie_n5KHQrbRo5MNklgRQ8L6eKoZJU67O_QnfNJwfE12NVPfdpn0Ck1i6EDt6eQfTPlT0ZJS62JXueDtyS5c_BAWh-1yN9Io4h5TMOl0Tsalk5uFaVJdJ82", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109449233231404889251\">CHERRIE MAE LAWAS MISA</a>"] }
        ],
        summary: "높은 평점과 쾌적한 환경을 갖춘 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["맛있는 음식", "좋은 분위기", "친절한 서비스", "쾌적한 환경"],
        tips: ["기숙사 근처라 방문하기 편리합니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/profile.php?id=61569474455044", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10502077372741678178", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%92%8D%EB%A5%98%EC%A0%95%EB%B0%94%EB%8B%90%EB%9D%BC%EB%93%9C+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "세부 닭갈비 언리미티드 K-바비큐 레스토랑": {
        photos: [],
        placeId: "ChIJ-flPMwCfqTMRfdlVpUBf0cc",
        placePhotos: [
            { photoReference: "AWCwydiENaL_VHV8g0rfvcmzRXESQV-__iT79t4Y5Jav0SOK4pIMmotl3Sxg6Kmsvyy43pqGiz4VzVaWIjJUtzUMWCRmnYweDLQH9p1bClq0Ds_Gixfe6hsRElDj6XefyhTaile5k8x3TO3SJJw0Cwhv9MHhWlvE0dg7gS-9oMWzlfixCIpz3PM7tx0ehfJe7IIBa_57PZsGCbc_wTNUPsQ22nrkaeaa1n4GAIwDc8z1TnnuNZPCgfevBGVG1MonKT_315LGBQZcvvrpytJwE5-GSPjsg_jbCsrSPN33bTWiOvHygSrsWXyqkjAC7qRVLKivxvd0gRzljTZU1EF2JBTwYGMhSg9SHY136lbsGerrTNLKVBrI_oFmRHde13bA03dInQ4EQ07kmmvmxBC7vH0krA_66c7tFIMGqUxbdjwtWV98c4k_WzlK7n0FHAdcEgi5", width: 3073, height: 1730, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109776498906631549216\">Cebu Dakgalbi Unlimited K-barbecue Restaurant</a>"] },
            { photoReference: "AWCwydgj8UoPuv_HFjZ02cGswpckN_CKlSOEgaNH3aMhMeDYbwU5R-FFG8hc4LI9gwtEkSb0iibBd2uTDI9felPp4MbBsIjWwGwqn31YkPK931Rtn6yEnZkCNTIYT5W5aO1S-De6WLyJIrSvGC1DjwjMnVqjixOJiG5cH70uMTWGPHevLqvtgRC9J30xToJsCUZrAI51RFxlqDrKQMq7_oel38knS7_8Ti11vBPSLL73vupNPpkAwJWQpN-BtTr-x7HgK4og6uy7BdsGt1K6WKBYBU-5yfAKPQs51OU0jE8lhny86NZyD4KHvdfMmrg6sgzrrBHY3JNTSksitsfDdDjp3tb3cz9rRWJn5y8GO0q-Z1Ku3-cvaHAHn73xmeSESjxeds0dh-BmfJ16pJF4zZcrQykDKTGpRsXyF7zBCqMKjeYuE_ixZ-xSekJdKN_Dt-lR", width: 2048, height: 3009, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109776498906631549216\">Cebu Dakgalbi Unlimited K-barbecue Restaurant</a>"] },
            { photoReference: "AWCwydj9OvSaKMWmCDW1Bu371KmM2ArFyUCy7ihjnBYk12q69XVKz6mcA6V5-MWBR3R5X5wweN_nvtcCECSw4pYLygqgXIaQJOCaK7RPbWhX5xxtUxqb5E0GAzv7oEH4WvYD9Fo6_5iCT7rL9VCbnm-w_crHoCkU4rJ3us1NeK2g6fPufcR71iIrlQ-cokkdzeaue2xrw0GFhd5WnljBbo6_GvSAGa4-qM3xLzPvlsm_lNBQanOSPDhmmIIwuKa6pEMqjh9m3Woa3phzvVuvMrShfhEQJLa98J8Cpr1JB5pLbA04Xl--dKJTPB7IdpnczNjiluWzdiA5QPvNGiYulnu7jctETEOgO16DzuoqyMrnDHdCkXj7ms6ZwCHXPqhoFLbpxW30lPLOHt6u9AgLj9VlS-2PNCMLJh1mDugRmW9ZUX8JZqd08iplPgNwqycJHKNW", width: 930, height: 678, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103622669846840980579\">George Evans</a>"] },
            { photoReference: "AWCwydj4te-e6zdRFetv-aJbGgvmhplz-2eATsqLeN_pirRpyCn1KW508Flolffihw5Ys-aKb3x3NxAXS40DbLplSJObsRoeE9Nok0QCtldtnkMuaa_-hzU6HURfgamd8akdkON-eNeQKp5j2SbJ01pe71fUktJ2aTK_nOaGd9S1aKPhOyhf9dKlgX5sbaVI8XLZHWpva8JZIPxbCpm4xp94CvLnyh2OjUhDWgiJjQHujIeMgNvAIfb8HufxyNMQD4yJy1rSX52aXw4ePBVpciWizr9an3ZMOL4SaCKc12yBsG9jtilOQy_qwxVfnudzUyrOJvI54FiOztEn_bWt5UOBOTvhZxV65Q-RVIp1T28Fy2uUVwK3ZKgoiIigqqfvhYz64hR4471kGOBNOhbVLLF8C4CSo9X-057hjPsYpQ31bgQDXIWVGTn7Ayr2gTpLsw", width: 1080, height: 1350, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109776498906631549216\">Cebu Dakgalbi Unlimited K-barbecue Restaurant</a>"] },
            { photoReference: "AWCwydgG-J5ajYeZqxJsZf9N2GDgs6w3xy-2d9ME4XdevOM-JUjUbB4_8945XP8t_4MsOBKFvouPk49QKuOsFcKQt-E8e-x1ABgWRVRW5VOjm24TMRML09w99RhifKbWjNtzXzccPUZPTizYWtrFrpdkSclKBaOQa7Jd-4YJzNBB7u3BLTshJ9Ogh2-nXyBKmGfhT43kOxkgDaNCwkQGwjx-amvFATUAYUstCkMfA62fa0dx-9iP-H8QA4XZ4KjjOSw90n42DCQyiUuJS0iMA598qiaFv-nVCUKOeq6RXpUnSZ0aPBzFElmBZPC1-lPbG6oJoX4Mocqp_OsWVX284ozHvnpjpcLwoxzZGvwA3RO8XZk3G8-l5CMKyvmqJxNLZwPqzod_x7JTsOjHLFJx9f0A6vXY1718K09gPjPbI6hBqDQEAHk8BLGdFmL6D1ZDwscG", width: 2610, height: 3480, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108760306105256658872\">Quinto Kris Luvaine</a>"] }
        ],
        summary: "검색 순위가 높은 인기 한국식 바비큐 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["4.9점의 높은 평점", "한국식 바비큐 전문", "높은 검색 순위"],
        tips: ["매일 오전 11시부터 오후 10시까지 운영합니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "한국식 바비큐", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/Cebudakgalbi", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14398394214936598909", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%B8%EB%B6%80+%EB%8B%AD%EA%B0%88%EB%B9%84+%EC%96%B8%EB%A6%AC%EB%AF%B8%ED%8B%B0%EB%93%9C+K-%EB%B0%94%EB%B9%84%ED%81%90+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "세부 더삼겹 31": {
        photos: [],
        placeId: "ChIJa1cosYiZqTMRCRgx2UfkbjQ",
        placePhotos: [
            { photoReference: "AWCwydiU8CZB9iUdT9hpvHusZV4OWyptxABUgovSIUq4Om_TwXtpOTUmF0IpMLdLtnRGqIkbnG4hiBwQKbmTOGyGU21kmg3LYGcSOofTK96XWC-z2RRXHp24Rmt-AIH2ZAwGd4L9Rl5osEbtSM4cI0T_Gt9f_cAqJGv3z8XN3Fi14mFWiCOBb7K6EeKaJfO_yx6MUUDouaHsl8lCEfRY6nfHTCNfZm2V7yewZyQIA8wg5bMp3hTWrU6ZPAXfIYoj7wZlTq_bh2lfwQ7nX2QMpHCiKXA-hl2h9jj-zyJoqVY4S3K5NRVHesFGA3xrvhb5vY7af6qFIgDXPYxCnMG5mffZkM6Wm9QEVyEdSmGhJ56P_248cz73P61pFMYlzE6eQrr58hwkwUtdxHVPStLtOSfHvSrHD2b-efA0uR7Gnw7r4udwfxkwGEbviXnbVxraDw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106664688756275215616\">Cedric Lucero</a>"] },
            { photoReference: "AWCwydj4d0VPTffbzkCRzC6g5VAjCxQ9kqdaCdNHi7QlZjg9pqMv3cIQYq86UPKbwZQ7rkidK30FE9Y7rF4pX78lfoopFyEKuLi979MpEwBh0qrEL3FsxZeIU47g3Es9qc6hFPYnT1kpcmT56GYZlgs6GUAYD2R4aAR6woS5ekndHcWoY7LqTXzHq698bORQf7iVV7-7ExuFIurjdtUJ6KS5nyzbA80zNv1KkYh3ljAiyfwOclaRLZ8QTpQJs8Va9mk030gbItRDX3wV1Jli_wZ66AWuwNwITTaxDW2uA3NV4bjHuZXlSS70gHE2hH9uXGp-abrs-nqZI1kOi6go_CvWf1hdQCYPgGgM88jiFnot-328puVVoDYmggHD0toPmptxj2Q-HGYklRDCg1DYjevAegRngRYFp4VFlJ_UzDompJPJozaE-karfNFevFhRJuFD", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109223048669901418045\">shyhder</a>"] },
            { photoReference: "AWCwydjyhBU44nj2hMp_nEZWKQJTNuDIk_IvswbWVKNVLYXSuoSUCt4e3m7LR9KQBRRxgXj9W5ncBLhVJcZn4LfSYYyDYqLQMpYDtKaAYlzITVSHFGpqcGiQ5OMKq2UrH3RLHUlBo3NW_Ns_sxx91r0q8LFbMCdbKY9RfgH4HIgK2TAG1sBg46yB3c9WYHJ8pr2_4GgsxIw0J3AovO93cxYVG3S2mgN9ZbWQWOXpMiDYSvwKSyFsIZn8OQh2dbd4xUO0UFRX7rMQ-gaG6PYJdAeNIOEO4eZ3ti4d0_WpHxo9pY7eetdlzUM26dagXDp_1HH8Z5sJ6GRkNlr3MTV5jVHFrfXTsG_xF9zCaJSlXdmjYCjFIJBMVaPIvfxaHGYWINwPvTRUz02FEu4dncZMu3OEO7Yc1koKw3GxJ17Xwmq4dzmQItQ57vjDgVqLyE9uK9ut", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111165984269070053135\">May anne Velarde</a>"] },
            { photoReference: "AWCwydj6P4B7nxfP-4j9vDP779hpwGCauyK4mb0ZoG6mXgaQ-GaTAx2k_rbCkGnAmDDuMAyXJBeGs7pKopcPR_FtN8ZZiz6GKlwMgQWrD0Mc5JeaEUWX-FpZzBE8PeTdLbNPwE-03ZXAycSKvc2ELfYjFonC1hwsr0TawXhlVD583eiO-K1tZ_ML1OxXwZJY6ILxWJ8ua94HiI40ZLbJM1AmRTfMnDFIg_pwlnmwzbSCYLZQfwQTHHcVnXdltxjO8SpU-ahPCv0GdbTg9P4ZvY4MliRIC2ByYxMkYyjIekt9yAA17F9vO45TaguBKFSRF20c0gc2BffEYUh6wgoYuQ2S8j131AE8YzYlMvd91cNBLIBtRfZ02hK4_SvsM8Y6FMmAqVbKkyy5lHumdNrtCwrfbbyYIQin0SH84X62ng7zyxvioQxzbKU9SxcJor2V6w", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101557624383046966105\">Tp</a>"] },
            { photoReference: "AWCwydhTHadGKVj8nQLaMlkSQQIPozIhe0BuGy_UiWtiUvZaCy4vJezvV6k8Z0gHwxmhxerqjrTuHKb4NiVwi-o6FFEN4On1_52M3YjHXNvYf8iQrkm0bRgphc1mjrHpI-ncuR4ayCLdD83-OuLJbHBlNTIhUYX0JUvkTbzb--fNd0WEUa5iVflZie-W5V6hxMeGBX2sV9vttwpV9EjEAeI8Z6PUTtrXmODnTNfjPxJz0zPcrQtc3FVMnHzZAIB7bRtmWabV3VFa0KqmwlHIHZCTUNAY3HQ5n5MqfM_TWfpW6kmK2oxcDjS5GWUbKqmUgLQyPjdJZV8OoPlu8Bnn8CTvb4zGJ5tLSXeGrLFammNC5jvEwquIA_uYEk6FoArflH0Hqfit4hho-3LV20CYpScaxLWmzx-hrhHwdTbOzOAs-7pWTWHJPlEf2T7uPqRqL4U3", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113969427449221132894\">예슬</a>"] }
        ],
        summary: "훌륭한 서비스와 고품질의 고기를 제공하는 한국식 바비큐 뷔페입니다.",
        updatedAt: "2026-08-13",
        highlights: ["카트를 이용한 신속한 고기 서빙", "한국식 즉석라면과 초밥 등 다양한 메뉴"],
        tips: ["앵거스 바비큐를 추천합니다", "아이스티 기계는 나오는 속도가 다소 느릴 수 있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "무제한 한국식 바비큐", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 8:30; 화요일: 오전 10:00 ~ 오후 8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/share/hGtwWRUPcmbd4Cgz/?mibextid=wwXIfr", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3778208134648109065", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%84%B8%EB%B6%80+%EB%8D%94%EC%82%BC%EA%B2%B9+31+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "서울 코리안 그릴 + 퀴진": {
        photos: [],
        placeId: "ChIJYRJmhtCZqTMRk_WJqKG5dFU",
        placePhotos: [
            { photoReference: "AWCwydisdA-chpNyOJKkffIX3BiqmkC2BU-Yg-jAMiJJaUWtIHA4etqNt90u35qdu0T3Ml9rGj0PV2ixZxTJMsrxvU0deOZ5CvJ631zFdPlhTZuVk_5vLzupUF7V1lNAme0NRA8_bRB6f4S9E0bJdnuyD64B58Lq5GQLba_5LVyHOaI1cNGmWzIAR6H4IwTeDKyi4oTHn80eLO8uFVqhu2mZC0sDRUNyp2A9VXXlSu8rTnlU0NGeoBQwkf8NQVHToMWht4EO19pC8bmdZ7lXwkus4yl3Ph3VfQY3p5Vel3iOFqe3_Oq7LQr2XsQZnHtNMja_CJB1-Z40vff7-Qx0_nGeaCka8gbArUnLp78UiNm1aaoihlWORSXYyzvCQrLiDcFxNOS4-uANaLkqSaIpZBaCfoQUp0hnpWtTVHuPKFzsO95KJk_lQHgXBi-KZjxhXA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101906135633993482487\">Kimi Kover</a>"] },
            { photoReference: "AWCwydgo_l0HHCaLdyTR8gMRQBSChfCw8YiPXTAaJTYAGuWZG_MkN5bRQqtK5V13GJKLmNyMg32M4YSBFZAG8Vp6i622zn3VOtfpUajgLKlFfGCZ-PFWah6WmNYPvMJeVDi0yMoiBt3DyFO3FaBm4yYm0zyT7mf3lrgMUmRHdiSJhdh8pwA4sXuOfyonFJQwt_1u2COJi0BdO6YHbAkZc7jmuC2ByB6Fya1cC7APgtHoaHbT7a1XOH2rpYHwmnirlIWLzjtHhijw8Tyt7DmSP56i2fJ0jO0nVmDXVm1zBXe2xfDBHZE2x6r_mpYLYgVJRrYctaJTRftVBKTvk8bkfaTr7xHztGY4V55QVJdE7tKbDv6asPLtHgyLb5DKRgspQckEBG8JZ7kozhvLSPA_2RlwyIfHlOpdPP7Ba5VwuIj5BBbVQiFk", width: 1170, height: 1175, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115766396597237591716\">Seoul Korean Grill + Cuisine</a>"] },
            { photoReference: "AWCwydgOTRp_oIOSvq1pPt14IzI_351sN6ZtqAnApxD-rOJI8YjXMEj-PIxgDs6trQCVUTGUdybHRzeqbTXxVZ_dyLubQxnwEn2Drqo-k2ulSfQAo9QUDlcghFjGarqeNAusdJuRYiXK84GFrCkqrTG4dj0SvBso3pODsxSvo5btiRYg8TiGOtBLl90nrqGB6GOoY7KGdDGE5Xuw9VnQPa-xWKUabHZwPsCp1SExQHDi5FJjslDtGtaKkTrn0zHRKiPr65NjkLkA1a7BnFAEAgdhgoNQpVFNrKK2FxwEk7YCT6BJ5ehFb1hgKxEQEEm-Njv3EzcdkeOfoFnYVL99yfBsZjlcvAp_paq8G4OY90FR8IxpgoJC6-ZW_N1-yH9xQcZbt01ZpnYiRtFC2JrqJCnemhgburMrSRMuSOPntT6954M3eJb-l1xpBQjMo6w2ikM6", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101373957167051826836\">고미연</a>"] },
            { photoReference: "AWCwydgL8p7fnqLPLLu8CYtzoqkiNt7uggjU9PHYCNI8-jt2X7lLH-hu-LMaAqW1Qi-F20qXCh1xoPVgMn7AzS5QmsCSwCpNRuMQHpC1s-K8yG-cRPWsh88M-1EmFjqvRjjWBWy_ERuxXn0v0qzW4M476DQOHARXp6sB6TY2_09OubMI1vScwLRmh_Q3xG9avD1ANbc6Zce1jyJ7-iAk3cC4VuX41DJHnTNwOYm74gfX2LSRC1tl4PPMZD0UnDPW8hXeC6EQacYyHNCAaD9TqZinIccqGYwQanQBIQCaQ1qASfQMi8aKtOP4nxARPWZaiyLf0zQfKhHBVNUnqvYQhtI-9iwfG5JkiScI_3iMrCb5e6PiwBDSfMs74EcbY6K8HzoKr-gwM6cW4GZuLK3AvZb3YIhcTKmz4PFc7dWBpFxE20N8rsZaQUUItqp1nMK-LHs3", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112372471015393553006\">Renzie Marie</a>"] },
            { photoReference: "AWCwydihI-mm9_0uKfNUrkBifnJM4ppLxhQgShihyNuENXa52g_-_0mpUsGe5ImGB5TZVzH4WIFUQePcUCsqt-OaGSbo24U7QsN7ci6PzdfNxB1fVmAp0UMUDET_UKCF7p7G7cB8Zxd7kufBfKEIDS7z8q4srvygsYswE_jXZ2hTQJy_-DAyCC3JKOG_BRT60Y8ocbSS9gl-ytmtAHYYVFNYRlzV1wX55SqZPw0nfMi9ugvsJDy0tgRnye9eiQjNaV7w_9nFRxUNzVIDdIbYQL0YEvO2ioJhSLcp3_5ddyb8rGgfpO3UsFqw1A3UdTSY8L5qdj7T5cK6WiVzvrEi-qnNJjaNz1tloX6fawX4p-vB4hyD_gqY7sFuW_-GAABWQIpnJokYTBCfBfSAE3_0By958JLfZQVLwrHVv0BJab5CFeMZxsJO7cnNB-4tf5zrRpys", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115339630791224346896\">MIANO</a>"] }
        ],
        summary: "높은 평점과 뛰어난 서비스로 가치를 증명하는 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["친절하고 세심한 직원 서비스", "뛰어난 음식의 맛"],
        tips: ["직원들이 매우 협조적이고 친절합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "프리미엄 한식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:30 ~ 오후 9:00; 화요일: 오전 10:30 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/seoul.samgyupsal/menu", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6157750694490797459", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%97%B0%ED%99%94+%EB%8D%94+%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84+%EB%B0%94%EC%9D%B4+%EA%B0%80%EC%95%BC+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "쿠로후네 세부": {
        photos: [],
        placeId: "ChIJBcDrIx6ZqTMRGMgiUUGBLPs",
        placePhotos: [
            { photoReference: "AWCwydgbr9iXnbXt5f80XY08biOIdiwCTIZvSch7MfTEhqcYmupy2h8wzUGSCI8ToDnMt8txkXKQastuIYt7tu_d1iyoPE2C65w34Z_k3ZyDpvWjqter4ejm6BrXl9jCvUnclgEn2PMtyKN-v2Xnps4p_bEmdYcbU4ksjmHR1vhwdnB2GbTEVw9ESkyp9BlrrOHXT4DmtoLAiqOuuglTNC_kPLblNgEgIqTHZmMp__whE7dMvrOoN54_mRU5sHp6yyjAwiUpYHsGTlxc5wayTImaiv0Fdo_fflWgfXJH0m6Xm1210ToKuQQj6u71ZeXGVjFER2yHG4AZBZM9FC5f4qJB7TsINA-3JSyp26g-MXpOk1nRMf8Qad_D8x16-raDDpVt68nfaS9F2M-GEWQ916vsRk3NXXF38zfX7in0SMquh6L7vQ", width: 540, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100153171706834872370\">Kurofune Cebu - Authentic Japanese Unagi &amp; Tempura restaurant</a>"] },
            { photoReference: "AWCwydgZzCZ21_TI5yuaRoPPapV_gpGiDuJ_OfSpoCVpOBEba2z9jbAJdV_SKeEO2_V7JDBr0HVwYB65y08GKymKJw1Zi70fFbPh8uXxfwJ9iIz3dzRUpH7_rGQ5vPiTs-PkE6qTL4jE04XE4rzVLLrwK1DU-YfJlzmTaGE0haJ5pypFWytS0lVEThNzyByK_HVW7spL0ZSnds5ooIsu1tJbQnOBxYqcWvuHhASQA2GvgAG3EH2CyUKB6o0mn5EzGfRA-OaLXQLrMx-yQ90bZTHu4jTZSXjvpz5syY_GYAgirg1PAD6pJvZT7kf8wsUMDTY68w__2HW9GL5vNtbtdzrE4cwW2HOwgJSfZlgDP6omfIgPt5pz-rU2ZSLtatk6LjsHF9tH70S7g19TytSl0s8yfb7SFmaQ-6dTpdc67YV-HyaDXSn65EIExd4UPxJKrUA0", width: 4031, height: 3023, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100153171706834872370\">Kurofune Cebu - Authentic Japanese Unagi &amp; Tempura restaurant</a>"] },
            { photoReference: "AWCwydiJwnwyGSr9c1gcZwvyE95yRB41-iBcAxTFakt0sK5Lmp429My24ZwzIurna-tOse9AhhL64C6bhWm8PH71iIAt4H7DQUTLUQ6ArW6pPHxbu0xoVSlYPauG602EgGkyw_qZbd9n5amPIcrzoxqJMQXQ19-xD-7fBIVRV6DF8uLgHA4rgt6t7qdbIu1Fi7YmeEHzrzuO2BPTLmrxz6sAwlDkPjdoCTDpIwlG2ABDVsx7El_wgiDzU0438avrKyfxE1iYHobufd4V9A98z82f4E7sl5Swira8TlC4EF47FUQw1BmEDe4hCHrnr1l1e5f88kLLjHJ9nBIxoI9N7ugW54jM10AHl8PVzmpjMztJa65EXrOrZrXiSTgA6FQvjz5uLylHkxPWfgKU7Xtf38FvICqUvIrwZx1Yank5HWLx0Ttdcwy_lq0aKT0L-e9GfsDs", width: 1320, height: 2346, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114335473644611160559\">Evan McGill</a>"] },
            { photoReference: "AWCwydiuXf07bINMZT2sbAF8mPHRh8KaH4UKIJA4vBm7ujr2W566MWXNjjvNBWXZJaob1zasW0mmqPXeiHb4Y5-mhY4vlcNcAiUg7dMB35oCPPioCrTh_Y8IB-otwPrIrLdlMjwVJr-8gCNuiGn_3HjKFZwUkGWOHDnr3RTNez3IXdrAxsRiXo6fIDS9_4NMwSrYIeXcNjzYoWLZGrzZfR0aKQp59O-MxqUGeSD23E2toNK6rIC-puc1EVjgrIR3CJHevN6k8Dm8wu10B0kFErKi_UOII7GxEHvtzoZxBFvYWOqZ7cyFG1WWqSditona4_bARTnGwAewM-bMQkvNZThyO4Mrh-OOCt2cYi269tRZLn8xQUckcTDhPrTHhBLBF7IRl7gqSBr_3lJTsFw4BLdmvRyca28ATqc1zWAmQu47jvGJBXzIp8zdf4I369ZK04P_", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116979415961842423930\">李珮韶（Michelle）</a>"] },
            { photoReference: "AWCwydiMQlDYO-Iad_VXLjRkk9BavM9ZkAWuJz4xlGwN5Ldc6XWRLxnXO-b420B5PGHAnWkGywbW43zFSuTteeDYBez1vYTWbOSGT8Itg8feyrQ_cVZIOJIniq-VJO41O30ND3KUlJxmWrvYBasK2wvCQzVqFv26uEyh4CbsjitJkj0B0kd2XQT9cd_3VHy-VKT3PSCVIgJtFGcWkJIlIuWU_LF3VQVOg4J8iIiY_8QchtobkcexYyVCH3iTFvI-e2OOV_9myR9n4mUIqN_OF1cTxKP6IL29o54jgginVwhd6mlsElDdYVN9iEh7C9sGQZxrcVnn6OSRCgQLlg81fOc3Y4R91IcDVZ9gOvMVdFb2PaoJ8Llm9lsPmO5aq-IpRlNx5AlvsMmqUGwBWa-yv7ZMl0s5Dt05GVkOHlqWKt7KbXJBBxHx2wQ2Dib20l47bWiH", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105461414737794885446\">Grace Endrina</a>"] }
        ],
        summary: "오니기리가 맛있는 아늑한 분위기의 일식 식당입니다.",
        updatedAt: "2026-08-13",
        highlights: ["아늑한 분위기", "맛있는 오니기리"],
        tips: ["오니기리는 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~9:00; 화요일: 오전 11:00 ~ 오후 2:00, 오후 5:00~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://web.facebook.com/kurofunecebu/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=18098983120029272088", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BF%A0%EB%A1%9C%ED%9B%84%EB%84%A4+%EC%84%B8%EB%B6%80+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "쿠시 이자카야": {
        photos: [],
        placeId: "ChIJz73KSgCZqTMRFLQIvDJb1dQ",
        placePhotos: [
            { photoReference: "AWCwydi6Tmc9d3ROFrAa5CJm0VIO8CT5UxS8GwRBHVOB7ppRYLNWUlwm1LKcd6OopucswIgwl6UYoASsyANqRZSeNpZJCTZW7b8K7y4nVYbPx64O2vItuu0nkQZh8dt6YKeeoMdYuOeCqOlPgIXov-lMMTrdHEvpiF5D6ZqdxOg6P666zGe4kUtpHSkrn3ctf9dYFthEICubwwYP7NxPn2C3pJmsVO6Xr0j2YHn97TDgd3_ALxPqOe9x0KqbBwCIhBNkmFWi71qe8NtODjc-xpalVeVQl7cCy_FWsoCEdFEHxkFY61eJH_FJefEfbSJWTANGb0CYzMiQHkvdiHnVQsaNYT7OKjOO7qZCD6WopRkZYapcREYl70uPljixOR01KARSM95cWvUS_pbfFfn0DbphezyOT4geUR66OPs8YkL_l4Bbxg", width: 2304, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112014110957064397495\">Kushi Izakaya</a>"] },
            { photoReference: "AWCwydja43LyPAFUPQ-IX_Vws8-KmNlnARSfeYjddXfaqQ7Uci6biGt1iJvCuXi8UbU-tonz_5bkIdO1opDqOYR1_alQQRjI83_vVyLqZfskaVvunaAC0VJhc2rQhtpOpp7myUxwZiqGY-XnRFgH1ajp7_aHcooFbJb1hZoc_xNwwdgk-oU0JFqK90y37W6Aq5UoUD08XwOBjINb8mlr7q8Kx4pXwfbo3kEtLTWehMvI9zZmt97FNS-ZJP48aL7wJy3knt5Yge-YlfGTGkUTNX_y0k056L5AS5_YzJ0Sb5yptfdFGo_t_QosE4URkAMceX434zVWKGpqSW0tMWgTOXc5OKSMZgA4zRfke-S7MdW0J9zz2QBsAGC9Ycj35fbVEhvGtjdqlqcv8Hm347Jv9-2iti01AZLITGnpSO84nWcVdHo1vqm5", width: 2304, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112014110957064397495\">Kushi Izakaya</a>"] },
            { photoReference: "AWCwydgmEtQRFSIqaaSNJDGOvc-5mosbcwNHGi9ZgEiNEtorpsltEfYCwqaMNKcJM0tVVx4cpNBiVXMLgDt3WDcRj0xpMuWj4gxLSprDVTKj2dqrpvt4K6-GBijaRCnAaeYlvE3xPj4F5sDNzxLP6NRMFvwC0oY10q8hx3lGsYmrgomgzzu0GiZwujJJ9KT8COyc2PMufyPo5Z03QzKaZxYUMilobgO1ECmbTW761zwH28qjh8Os4iu17C7yoB3EKr5jB5NYGDXDdJ7a0QUR7EXj5suep8o6kjEgCkbiGdXyb5GoTpaofNWagm-8-6bo5mjglMCAfct1ZcNjxXcTAy3ukjT2-FxaA2y8KSEj7lgU96XIgLdhjGZWCB63THLR9V7zh-o3P0lIOvVEw_1CxCKt1OtLxYfSRUybP9yhq3hMePevtJ_uGgjO_Y7GAss8hg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116398766383825489902\">gel</a>"] },
            { photoReference: "AWCwydgwKvbKR0l3oEexjp2k-wkMNlRwB03lwtWzsBT9X8ZPmoZ94XkTfH-r1kwmsz9aqht4uZKdUR0FSL42JKhRqhRX5xKxoWQPCqvH7g_NfBvsCgHxyK_gi5gKNQrkwhjE3646IEvsZgzGcCsQtp8Bp3Qv7MZfszdfO6OjBgSEvS6sKmyPBKkkOMucnlVQXGt4bu-o8xv8hwpJHfMKP4IHe77eENPooUV-wVW6dH9wQHuLvF4f25kKgCdsBfFi-nUWhG5ma964bDCYPX-U18ErmaMh6rtxBycZU04CQFgX9M74KBHRD1hMQrtCNkcXNHboFT-ZsS_9jijJWwkmwKtukgyY96PwxZzem4ZdfVm_Ud4A6MfR33rYrVBrrLf70tmOXbmzpDBglERm-Ex5VF3xK4SqNt3JKwp3PoGyHgHb5yRvuocDm2t8XWN0ra1bbCxw", width: 388, height: 411, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118395847200426116281\">Sony Cruz</a>"] },
            { photoReference: "AWCwydhcxTjNOoO2T9faiUmETlxIY0TZ0JFEsbLvNe8nLrD6zghPd5H-aQK3ww4lJNOHfdY3xiJI8xmEcLCV_aL0tmsywXSbW-Yyn0ZrQmngG4LgtPzkT9ES9BMKoZ-0M_kij4nLETJakzRlN9bmRaTpcIvpS0RHROPo_sfNR5ZMw_qFhWI3AHJpHSYmjwn9c6QLm1f9WyRi2kZv0y9-Vi_Ozo0QES5i9TasJwhTeZ53RWS_BO_XqWgZvNSnu8m2uZFjbAiKpIhh4ZVx8itkMErTMeP2bCaSmPPfhl4Fl3ZrJANyGi05bxE-6i1C6uhk1oHB986fAEc_DgM2eeIZXlwqoejMgDfH6K2z6jLPf5uExJA8aGe2WrUmfHCb-L61zcCuLqbbVzqLxOtSmpioXlw9euZqpPc-g8FUAztZYoSj97Aoe9FrAdWU5OnQc-v25zDb", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109584839149562371381\">Bernadette Guanine Barte</a>"] }
        ],
        summary: "높은 평점과 훌륭한 서비스, 맛있는 가츠동을 제공하는 곳입니다.",
        updatedAt: "2026-08-13",
        highlights: ["친절한 서비스", "맛있는 가츠동", "다양한 이벤트"],
        tips: ["가츠동을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본식 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15336264379541271572", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%BF%A0%EC%8B%9C+%EC%9D%B4%EC%9E%90%EC%B9%B4%EC%95%BC+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "미라이 키친": {
        photos: [],
        placeId: "ChIJCxpUAgCZqTMRyB7Y8YBz-Sk",
        placePhotos: [
            { photoReference: "AWCwydhZjnV_NrU2V8Oh2zEYXZZEAJmONDd6363j7NtXPSj0o5zZItnXq-uHlbrjDsh9BrJkOg8WBC8dtilhaKK2cXpUK9FMFKT_1LEmdSdG62jBNFjgYS1_kcZ_Tg-ipYoBDtOkAf8S2pqEoLSV1JVUuBvICjrNVG0aKgE4lccqIqERXJp8rSZjfh_siuR68J6EMD7VOi5ol2eHu823jG0SSD_MRWbHyFQyHxAty7x91ZkyJ1C5i-RRU72PQVNGtgbDeeKZiZYg6SRzBWa2iDN84F3YgmWedzvh_Fm1q7ZYi4lzw_so2cQxF-u-EY_7fYMBmvpsEOH4mZcqvNBoNs0aUEFiishItfBu_xWr9PGpLhXYgjhpE2b896p1cLyVOQJkSiI1ZR-Os3jAz6myzWps85jONx4FJH73iZGtIeB61amB0CZu7ZrdQTzT6qBPnBie", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115803629300907668097\">Mirai Kitchen</a>"] },
            { photoReference: "AWCwydgj6MS8gI_3KEwqasiGA82-0hq0P9KyifQAk5WV6SI1zq12_C6_iT9cIuQHLRIpx8teybD7ouNc2BERQNYCcDs1aoCG4A89XiQqvYTlf8pKC7YpynHTFHp2m7H6PKxqg7BgJmEffeiw--V7JeacTthTDMn9ewfxluXPnnheLovF-vHfr_md9Tx41eJvbSWayCwNMYTZ6ImMD9tHKuYMk4x69x_6fuJFERuS3OO4x-vdEaYpyp-gQpMeTgUk2EYLYQ6pJhWRtKwJT3I4_Mb5gbOJHiYO3pX0Vb80_yGc40qRm1Kls6utlCq4J0p-k1cLY9lBN7Lry93hAkaaXQWDG41fiQu58JBwkaB2JkfcZEtKxAxKiWjc11N2LTnLe4DJVLf2iL88_BxRrQ1sKBPVzsfH4kVUcbd48VhyQ0iMMtSxTsbARas0KJNLybyJyA", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115803629300907668097\">Mirai Kitchen</a>"] },
            { photoReference: "AWCwydgDohZnVYfBoaVz6DhYwwIo5OpPMBiPUbpW2PldHTVm82He0jypLMu-5wQPh9N4QGCZW1MzEttyQTshe-RCfqM8lBdY5HWm6LhC9xQsFWRnVDjw5Pz9mCM-uofzVmbFtSCHhbKs40H6AvA2Sk3GR386rhM-WJcRxsSnG-gIQ9ZZ5RoKi-bARBqA-imnwAdkM4e05EqiH7Y9M1PIlAXAACWuCrXhHjR3Fs-wSoJUI7Yp4Hkzg_escZEco_KcyVp-fxPQqwtHZjlEX2cTIBQ94cQ7YJGivPKNMc1mW2Z23LAoOvgLo_inc0B2ZRqzv-YHj4RTm2DWhOrlrgqwQhwVAptT3G4gR8t1UletsHaLDHjnbZRSKZ3Ei5DFq50MCn1ghscIr5D7RA3wKKpYqiXSMs3_cNl1IeMWVkcgA3W5NxTwN5C-RVMnyJPr8ZDFJJxK", width: 1108, height: 1477, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115803629300907668097\">Mirai Kitchen</a>"] },
            { photoReference: "AWCwydhjfOzkXUU0RCM-Mu4KREApJhxJQfshrobI_gmx15bFHJgwWzinvZ0C1Qji71LuWGGwZ2gSNkrCsXD4qaOE047JcQvvIN__0J9Yi7vKeIYiH8I4UGQTDuWHsp2iq5-awmMUTLf2vqVUywWDBrzER83BGEV_wNxbJjDyypvFGZYpp6tR6yBfRMDJpIGvf4cyL7jpkLJYO5cbpf04mkitF5rFc3qAMsznEgPFPCZSwNMdB9zs54TdvC_YgppKOw11YAw826iyjZS_MvB0YKhimmwqMEvco4AWK-R74gml0oda7Wz59GkIHek21LYYM0KuHy1arpHR-jsgRsCdDHw_4EYXc2eJt8_TWRcarlYNm3GPa2rXdVcBCKug4xQaNsGlbZM012VPfFtqsBYX2MYVMMruLW8xOfJAP8UCcmwZz0argeuCHDEEnqIMpDf_fFXo", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115803629300907668097\">Mirai Kitchen</a>"] },
            { photoReference: "AWCwydjxCGOQ9XruEqumLv8kr3CBq3pNpKEy71RzGMGw0x9vQxpvUHfG5JiGHwC4OKhKyDXP_1HSgTIZsw8ZxTbSEmDu2u47vmM4MzLNk0o1k3rS-oH4nQWYO3wK5zFa32DdQcOV0Nr_OhZlf9TVbABbgPBJLL5-r6SyAKQlQtHiliUjAVubDGUj31qFh2e5cbrp_tarIh7ZhpHGC_Wx7Fsc2DR68_BwEHyb9E8ToNKTI-2VnGnFkikiTv6XzIrkePm8IGp0T10OrLNYo9Lww5u1mtZiLucqy6K0yDK2ZD8pKhr6WxeoR0rkLc_OW1Kg7bKOChOp8OO1DEHNDpNzZMtPZO_cnzO7lwF77uknW7hn20lnmqCgozpi06M28Jc1pDRVNtzpQ9win1ayd-nuH8ssnsNRc8j1VvpVsCywGV6ih2_1OCPujVgkXS0vHLHTUQ", width: 1536, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115803629300907668097\">Mirai Kitchen</a>"] }
        ],
        summary: "높은 평점을 자랑하는 맛있는 일본 음식점입니다.",
        updatedAt: "2026-08-13",
        highlights: ["깊은 풍미의 가츠동과 규동", "아늑하고 아기자기한 2층 분위기", "친절한 직원 서비스"],
        tips: ["2층 좌식 공간을 이용해 보세요", "계단 근처 신발장을 이용하면 편리합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본 음식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=3024575622406479560", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AF%B8%EB%9D%BC%EC%9D%B4+%ED%82%A4%EC%B9%9C+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "야요이 세부": {
        photos: [],
        placeId: "ChIJv3uAdsqdqTMRdGF8uKQaXtE",
        placePhotos: [
            { photoReference: "AWCwydjkLE7op7yw1lPZAzC7ouYyJQ1It-zh1a2UkuSXX2ISHvZMTcKkTzomWBx7tJXG6-m-3c6PVluCATT-Mx6yRh9g1NXB3JhbKbeer2MfBukWu5_qtXvE0GSDNQQ72nefnNkAXM9Ti9TiYsV9jPiQZuO05286h8PqNPGlGEQ9qixrzLyzMyEO9GSb5DKzNA5uQK3-RreFX628QXrw3J1Vjn-T51AzAloLtbMiZHF8kJTpU_Ss6ycp4Wh9fAVMFl8FyUmz1tcMeb0WVpKpkWMxQ02812VZeRKm6r1d_lHuDf7jyDlUbezj1HfODCj59aobHslVEYvYVb9RWNkdggUvsNNkHVOy4fEEuBZZwvU69O2_iWGbD1AHvV9HmVT2GYqWyPyu9cImM6ciYZyhsgwBiYBeaZLNlBIQPffwbKo8zkZL_yQ7YX05vstZbDbyfuRL", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102297185431696537141\">To To</a>"] },
            { photoReference: "AWCwydhqFfN85bFXX8_GVMtxdoZB-vF__X077DDKFg5X1Tc0K1TlxMRMjpTVhnKYSOB0zPPhk8P2wmoN4TIwWwd1MhuVLgq0vvn-5pyGdVGL1prgeBbG6iKS6lBB5aNfBeEfFQmcAvlcO_hozzOmvMKMAxz45smFGaNiaQrLu4UWBY84cmrs8qAy2l1IJ1XjgOCpR2fZ0YZ_4atGGTlBUnqlRvfY-0zLhGmsY5aTNFH2C3bK3hsbvu8DHKOlnGdz2F44s9Nx-3OBwRRiAzGIb-cFwxey7JZW_PEnOMCaLPwnxhXhP27GxppG6wOMtRH9tNI-eX4XXo6_uJ1VOQ9QBROjpKPha49xS0ECwnKRl9N4Nh7LDuekfFrxmlV4p5TRR-OKK4FUwoF6PsAY0NJJjCxWxqNKnurksigy1crrhxu5PtX1xRrD4Zg2O48zLC_Lug", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107865201188738557255\">rinrin</a>"] },
            { photoReference: "AWCwydhd429Yig0UMfPdhqsXwTeA5ySMOu-I6wtxCtKtP0nZ9iDnAXnQYXjHcvMMy_ihLp2q3sr7oDiw4dUQ1ti23aULeytHXKMMs0nLGlfNtyPODKsaHoVVSeDndWDh6rVQ-FFdFbfJFseCEEwip4IYWMg9RfUfT63e_FgjG85LnB-Q6vEGA4xmzaH8ZXQU30-GVY7bA4Bs-Qq-GBO6MWmjLCfBg58rNMABBMcSEbSf2L5zonazxN9PUil0RvgL7V_fUG-C9Dykon3bnS30y6ExUde90RlVeVeQoeNGMPd0xwIjVrxdVIGO2ViAml18N1fO9vRaRNg05vpH7GZlp1GdIybQP3ydN1AqjURb4Iqa1VPebtaKIb9ax6RHfqlUF4SNuTfCtMAj6yTFyZI0KX8d0LQrYEZlU2QCGTHHvxhqHrUZCc4QpUOijO_fSErPqLb_", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100145184075172601205\">Lara Larah</a>"] },
            { photoReference: "AWCwydgUe3TMNF5TjeWQsBHFmcjsZCJHwNHR1LozlhiiiAf2xIJ42ZRmlSU91u4AbsgxE_MEmz-VIV3Rx0IQMTISflcxYuQ3UW_rWVG-c8Gu3TFJOsPPUKsULQ1zNwCyY0rS9_dZYVHLgR-SFDXaU3eKjjgCP-77Vh1u4dm3r83LR7g3a7XMk8txo5P47e0TPMQxBTfHq4U85GtXzuD_mf5wCRY_0HcNLiwO_nwo0FOAbz4KjB1wHWEzS3k-rilxQVQ3ZuzNS7lt6d4jSEayoRomAHn7aiU3l_19KllXmVDGyqbJyLmY9yfRDcvdM3KHZ7qFnCbCyEKFXfchVfD18xrttaVa9AkrC9Plt5WysEprwithZi1yf4fpiaB3ezPbJj7CLNPqq8t4gsxNbcNh0KYvAKUSuu2xd7q-M9NF96mqAOm3PSUnfb7n_b-OUhPTJA", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108077562693072993353\">Mai Debbi Gelantagaan</a>"] },
            { photoReference: "AWCwydhvAq04mqFOPsywPEJvT-sZ4TT_0qcSgXzm6iItZl_6u00KBb1yh06DOQCOc6-pA-VoHa07iW4Rs5yQ0HFkoBuyQbWlpLQLitVdfeLt1Nfc4DjzB1fnagZGmqMgd0ln8ABeYV75-BUzp3kDbsYCbrs2Mkxjf0mP5W3blyPO4OAE1fx-9QMMnjlYBkhFr4LR0Ln8T9MXAPggX_u4ldN17lbFnT13boJquM3OzG6_PB11p-Ak4mVJsF-fnhcrhxUhdkMOv-EEDhMJI2u559mMbQzWN_lJcTyPWUTwrAGtJ5GgjVwu9KUMQkQX4DbaEHH1BkKh35fwAVNHtwvAZ9Y_UIKIcUCC3zTLdUq4Fse4ilVbFr05pT0n0mABpwVK-B2h25Hvq3gTiXUniMRqlxC-DAS2LX33-6VpSL-V8gVpMwHzOMnEcIwqhSBPnWlLnteb", width: 2048, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100864951556694720982\">MiaVerzosa</a>"] }
        ],
        summary: "높은 평점과 맛있는 음식, 친절한 서비스가 인상적인 일본 요리 전문점입니다.",
        updatedAt: "2026-08-13",
        highlights: ["훌륭한 음식 맛", "친절하고 세심한 서비스"],
        tips: ["음식 양이 충분할 수 있으니 방문 전 식사 조절을 권장합니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "방문 전 확인 권장",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15086525096509858164", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%BC%EC%9A%94%EC%9D%B4+%EC%84%B8%EB%B6%80+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "소바 카마쿠라": {
        photos: [],
        placeId: "ChIJfU736PWYqTMRtS48Qye7G1Y",
        placePhotos: [
            { photoReference: "AWCwydizp3SVT7eti6Dwjhaz8FcpxkfLjpIONHouWwsVnfIY8MoUJaO-8mQ2KC6PEMxEUfN_RyL6pefitxhTTphzM7XIZovMsXqbhkRI0mP0QWji1yjwZ9IB0EtMlCD5tqDIwtgyE2CZh-sT6s9D9VcCgaxdtcOTk_ujg1FCuLBt1WBpBax70scMHOovzp_6T1I31iEDWhVZYPJqFZy9zQl1a_0ILwPbHpuFN1qMCfXKHw9d-h3Rs_lp3oQfcNSl9jHQtcuzGJy40ZD_uiA5ZH_HdDgIUwX6fUNQ09q18gpSL-bApcX1tu6WWQgv4h2-QowabqY_9RKh9cYwgyzOmU7mXxw4mXQJbdqk2KcnSuqTNbubkp8YxaZoUjKMNRxetPzoH3NYuIfUlVX_xM04OLOu9sCVhsY3gtIX_fq-79S5kgGlBbk8", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106174214264441793315\">Jek B.</a>"] },
            { photoReference: "AWCwydjRZ6225wrwch5f83aviFgiNfyVrUpxlytvss2EmNTx4Obpj_94uCv81JHvtGKi5MAr-VDs2l0nEQYjVGWcb6fWqatsWmcVm1EgmW06dLTQYWWecGzfw4KyHAXwnw4sk-oShCEnw8ZDeppeEArK-WyxF8VzLPRkAl5EBGXu8yWnapk-fQWjdqe_QEt2ZuREs2VzshMKp6yLTALhFaSblgGlpwIfSoMX2lR3qUmLyOAyLEzelz8k_xj7MYEiapF03SDgenCjlB3co14XVz_H1O7L5WWUBErLBdY19hvnSJRKXKLeqqJB7vyjGzQ0y0ra4QB1_pAmdoLqiNdWSZEZVwCvelrEGOL7jel4caSAucJRH17YzNv1LLw2YCAKr6UL3RiDc85m1InrFIxWYiDrvuXvvNLUESjGArRaUeRveTRssVQF33LVw82afrfVZj0S", width: 1486, height: 2048, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105437636518533095267\">SOBA KAMAKURA (Reservation required）</a>"] },
            { photoReference: "AWCwydi4QFXErigXyyguqMcE1NOHG7QCVDdtWDVk2fCFtTGNZXqYMjGw5BQq0rnLRTgTda98GP4oCmnZO1bZYxFCO8dbD44NmzUqePdVQeA5uRErnvfb8dB1yqduJpkhAc8TW3YmPbgDbhe9IGOdxiuaYv6au_augNIrfvfap5jAjr9ZHnyi0cvxPN1V2HUu1P7pxBvaAf9PZ5O_W4EGJw0AlKaBkPD6uZ4yPF0jKh7FV2b2X--Q_-ECDJIcOQAIqJNaWnj__J5-wFwm9i7GSdWrz3CNu7iy34ha6hVokh_XswE4p-E6WFmvktPtICX05ofjDjtlCLHTbaQWqJvHUFP-lajR9MEn50xPeNPxSbFIePrynY-jX7s2X8nkiXTcEtS_ghZ_wbP5wQGAMaU9mhWGLqW-IHBhBcd-JZdxClhpRNVdzckNaZ53zi06jC0ZDg", width: 4000, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116902998391627521980\">Entoro Wijaya</a>"] },
            { photoReference: "AWCwydiTtEKyxbrkQA3nNN5ZBOFtwCJXZKDMJ2MpH7gQIDjMBev8_DBiO9fNiCMBGV1uo0G0LV_f7xIqOkN4Zhf3k_R7OU9JHzdmQ2kPiOrBQGBPXPaCIyDxYFaYIhPYosSzN9EojbPvOYFzN-Jb5B7Xa9Zi-oFFjVdbZ-wugmCr2tbdSgKY79-J603adBeaTNU7Nb-aCmXgWEPt8Bocg2SAOwKvF5M_W75MD8bPNH3RtmfW-cR_jkqjRvAvSr9pufIRDepCGzMChadzd5BGnYz-Zp6zxXHV0pMnzIhX_AupfGfMBwY4Lsvc_QiCMMluhSmryWzv9Smn0DPb4g5om43ZJlhpFXY7FFkyyQXCAZoFU19yPpzHpaIWTba_0VljshKXK1Gnl_ZSi4CqRK4AqVJ7r3tXg_RXNLroL5TMguQ5RjeFAjLP0L6cQVMImm6xtw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114781173918981123018\">M nTing</a>"] },
            { photoReference: "AWCwydiY7Hxf8QaCKL_N2eK0Dtl9NivcSj3IyKLhNn-B7FsL8b6dbAGeAJqqxSqZs_t3OBbU2oS1u1INMQj8v3ylsV7TD2F42w_YOFNHcLRHxZmq4CKMs-kMFVOgAaNWbMqy3t_Wg-qIX19S9x1aB1IE3HMlEuWPJghgqbHvT-Uz7PC_h44Vp4Eg8UCertzGHkTs1RAzwtz6jSvAwnJN2cMhDsvqt9NGhkVq-q3SaM3snp4z3DlFIQFHnjj6ROT58ZoW4icHmjWsWxoAdAbAvc51dgpo0TVeea3SXrppffgCxheKo16cTkv3pX5Ref2qrKEgRbUHD7NzRF7VKNKCvPlEn7xdj1vMvNAqx_LBk1ma2e3-8bhSC-djIN1sIWKA_bYaWw1LFV26AcKSpKUfd3ghk5uKeFbAh4eSyYo9d79t_38r9Oc210NtrbEb_yQreJ-6", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118229872044450012437\">Jill John Lagusay</a>"] }
        ],
        summary: "높은 평점을 자랑하는 정통 일본 요리 전문점입니다.",
        updatedAt: "2026-08-13",
        highlights: ["정통 일본 요리", "장인 정신이 담긴 요리", "신선한 식재료"],
        tips: ["카마쿠라 고젠 세트 메뉴를 추천합니다", "셰프의 정성이 담긴 코다와리를 느껴보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "일본 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 휴무일; 화요일: 오전 11:30 ~ 오후 1:30, 오후 5:00~6:30, 오후 7:00~8:30",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://soba-kamakura.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6204758688939126453", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%86%8C%EB%B0%94+%EC%B9%B4%EB%A7%88%EC%BF%A0%EB%9D%BC+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "타볼라타 디자인 센터 오브 세부": {
        photos: [],
        placeId: "ChIJFVIYyvqYqTMRDmetS6-FEj4",
        placePhotos: [
            { photoReference: "AWCwydgfsWnD_G7UjVqEA3uUymmsiOSnt5FNabXvz04gCavRQlt1h9741h8R4FqhjcXGugCCYUTORjaKNgOsN_Fm-SMFuaNLiUGNXGqiCWZzotWCwGp-IxIBgYHa4gs4VNt1TRcUCXVMWgVgo06AvwCHTyIGOH8eudTg7rj8PyUWXz4w0gIXkamEnAqoh2iLqeSa6dNT-jlS0KOEaevQTBUgTLjULDN7fXyGSZYkXuG8V0uR6LLfxcYJ5nCIJUkvOUT3vPo0sbOp035xK7o0XommPZapnM0hoP-ZL9H85NxS-iKqQdp9dX6RjKECf7gSB7rmoYFcZ9EW6QwiWfBdf1NCqAIXNYfj9E6OxXyphSU7dG5ec7IdTx9Q0_u0XhgswKegYKltrpCEZfVII_iOeME38z4XSBS1rpVoet7n1273SNW5mYNL", width: 1202, height: 800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116186003592839621805\">Tavolata® Design Center of Cebu</a>"] },
            { photoReference: "AWCwydh-DqEViQhQmoxQarYdWtRALADB6rMPmLEQpY1xhuYbC8bEJ6GaMeNmkD1FsNAR257UQ6ZWYcyDGu0Hl9oYNvt6UdhVGg2kKrPbhKGElQ2__XcHT66NarqJTUsTmT5rmfF5Wjeb2rOa6J4BOUVXsBld0QKS7Ajtfe6syIRQSA-t0yAymW575HDayvWqDFRtdLo-QKgmqUki0DufGKyYnYIEz891yrntVGDRPROgwy67TE00xxjoSaBn40NOsEdU8Ga4sIlJXoCwaZfelL5puiCRECTs3wm0_QsTqvwcrh1PjyWNjjMjotrzEiQi0AipaGpUr2YPzsBcs6HG_Q4g8YBjXiY1eS-d4QJcg7M5T6BMnFX-5x2nWBx3jqL8UySu-_uKWzLV3z-nS9wp_ynYslziS0hseaRMbq3Haix9pUBQy6Jm", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113040069056286975406\">Albert-Jan Santillana</a>"] },
            { photoReference: "AWCwydhFj0JNlyxGTaLlLktHuJJpa4RssXU6Bva1B4QjxvpQFAKxgGnNK0OCAHKImIbolVNq5bXP9T0-6RSpEQKHbhqdCDTMo2a9JBC652OapXNaSQpt0SbpKZEeYe4QRsR9eIq5fIUJLFLJ2z6HJ-jY2KjcgAGZ7UPLVQ4O3KX8y-cZsaLGMvsNie4v7XET3EJqGdZuV0ZCwZL_4xpYl-Zv3zC9DXmmhVSn1Wg5C6IzCJp2Q53SLKdKJ0arnaW40wZPtRlklEP05Cq9Wa1W25TLfJ-rvcpp0XmTTP4SlM6JfdrNfwHCxqzVX3xKP0WZiN63qxmuz8mP6k1dSsjyYTedK6wtwEvoeMy0R682iSCrRifv4QFVrhCJrzm0ek30lYDgsgCZmxxghuu8UQlK9ljgSP4Sgl0lAU4yXZGriwHl8GFH6Q_nW5N5DmNVXQsjYkuy", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116131202910405803237\">Frank Klingebiel</a>"] },
            { photoReference: "AWCwydgFHyqvYmMs62JLQgxQlT7Qe1FZSzVKvmPlpjnDwAuD5MZ9wx2oNUkG7SGyOhXIVAHC-wxsiqPWQh-IFrtSdXGZA7taDOFMFtJZ7FDjzLvGbKEgvEkrm1uTsicTSwjp5NQcqXQgZotAtuesH2gGFGG_V-_XI3o9LW7WI_OJWGNK7t7h8HeMAcvKnIeaYPIngrstwMImUbKBkzh2ScsUEmyXUH93eh-x8fjFH9qLXDwVXueTIWU9P0gGYfC0lzqTwp6CP8lSDWVyq8La1DRzN36RuVIRa0YpEI3XGrAJKmg7NotONaLa0pcGIDfxiIsDY1eH8RL4-pbB_2_Ps03NKpO8ksi8O7vRatR-R6GwAXzIMi9Qgko42BKD1zkKqHfqDrHuB3kjvXKOu2og41qZv36sfZEm3LvwPk7shkrQdpKok19Ll0bGvWoMdnNixg", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110905512096339825474\">roger lim</a>"] },
            { photoReference: "AWCwydgdQzaUQ7WmS6VRKDPrLhSkeP6tQ2qzV1yekhIbNV94Oh3kdmTDowd-gl-FU0gyKRwhBa8OJRilqz8lphozHqRotZ213PzAEZwtRatvppJYjZ1dlc3AEmeqnHb87uu3lEZGIUJXulUAJBq0dqQQN5ti6OLjqOeJns279u-wkHsMHpK0LTfhZAikoXcAbrR7LXBp7W3dct3flV1vCedbxsBOvO0flZwrpjz5kIqfk7Q5yt8HslYgXlmNZUJyqo1x2DhN9Fm5rjGMFbBugk_mGHuD8_Ck84Tz27zsT0Z6F5cb7xEArnc6CEK2dr1uQ0pXouGbz2QNbPY9NcBfCyDjkDwsHoDU9_xnDN1NaNRyyXf9Wjx641Aq_tSzvQ4P9Ug_S-QPGMAM7Yez46gjfma1FgrpxtwKtQk-1e8wJDlx5fA0iESDpolJ8PeqKukLlg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101107881214437072933\">Irene H</a>"] }
        ],
        summary: "스테이크가 맛있는 인기 서양식 레스토랑입니다.",
        updatedAt: "2026-08-13",
        highlights: ["맛있는 스테이크", "친절한 직원"],
        tips: ["스테이크를 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스테이크", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.theabacagroup.com/concept/tavolata", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4472784367867750158", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EB%B3%BC%EB%9D%BC%ED%83%80+%EB%94%94%EC%9E%90%EC%9D%B8+%EC%84%BC%ED%84%B0+%EC%98%A4%EB%B8%8C+%EC%84%B8%EB%B6%80+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "안자니 뉴 메디테리언 레스토랑": {
        photos: [],
        placeId: "ChIJndRuByiZqTMRWrKfZq3FAOk",
        placePhotos: [
            { photoReference: "AWCwydhMr2r--RirdLgm4FFbz9hJFOSkLB_ceMV1jrTmR9ywOc9FqAbkTyVlQ2bxyWvUEsYFIo7xWIir0RHacjQOhfSy49ZOy0kIO02VBNN416TZIZs0AHiI69DENY0Qa1XCX5hWgpsVsllIfgJkJ_azHhQXW2yFnrOKuofTXVXlBRUmqIpIiVIChfHFs1rYosifm6Ek1iBgxFSonhdaJHpniZ9cjAwq8MOkP35ttNjXHjiuf84nIfMYpwOq8jo9ijTudSJzJayLPxcukkFkYpeGDMBwJbWkXJ0s8APefd9f3mtb_0luZ5x5DXyuNaod918oxFbucvECGv7-GUuOLcHCcp8olDm1gHQ7gk0SDIML-oJ-pRPJCeJbf7xigjYAKc4qrvpqXUBpeHSUHZlNoOKd4j3NLmXJrDTlJnnNNM5YfpAOTl8", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115481644195815736533\">Anzani New Mediterranean Restaurant</a>"] },
            { photoReference: "AWCwydgdNeag5vtj3KwIpyJY-10Fp3Eh8rq-lMkPa1397au1GEWBQLmw6PLFuqu0WxfPYaOMlqRjm-pd-WrUyJubOfQv0hxBIve7DOzDYsoKTidnIwHrVW7nQGwa6YolnQXlN_2ekIn4FDDxJnRRUf1S_nKRRHquNJI_cbiyzj1loHFlnjSRfTTwzT-aLpgHd-ulVgbqxqsixvtQf0oj2SRUSu908u5BIC6v63wP-o5RCzQeQsuy4Ddvhx8NczZ_9IP5PPTKO8p6_3xUk27Lufuh7VDi7ZR122wlz1Mrvu0Q5ZyUmAxVQpdCHc5TiCgdQKZoqRDiQlyQgiZ6eDKeC0UB9iINCfBQlliY5gPL7nwiUZXb5SS_h5h1ggzTLAKWeEEeSQypzTlgifIeudczD-Oa0TWTfKh3D8G55wVBh_uYpJ9-RF_XVJDHswMcEPk94g", width: 2048, height: 2731, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108530955827713805320\">SARAH MAY CANTON</a>"] },
            { photoReference: "AWCwydgRlTirBTdNAO8vNncv0NBksM_EtrGqxYS3b_oHGpI09hxS1-F82wmykTiN7aJOa4_Fxy2OGQ7w1J46UY0tBI3GWSeJosQD3ArJw2qgr-hXd8-tNE8_avQ9eLlwaUonw3I_tdo5gLANxkYKYXgHNi7lk92PGjlwRWzKvb84uAIiGAdnzu6MoEaGxDr1VMnbR_dN6fIY7vahLn1WNbhPL531XI50cxBgvOwY8Zlg9uMKuqlVr-NuLI9KvGcm-PD4w4hJpa1byRiV-RvjLy43-B3s5hncaBGR7KMgFoDhW9KHdnLtkgs9LbIcwybsYu0EiHdhJLULcYo-AYgE_3z5qfa7gYo4MJ_Gr7rgB7gKElLlXqPFxgGkAOOaWlvueAqW5iAyvdzV61tyEZnTLsOw-qMO6If7On5E-elQbgg59EClSw", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115481644195815736533\">Anzani New Mediterranean Restaurant</a>"] },
            { photoReference: "AWCwydg8FbWvebHxWmQ6mS0o3_z9MtmVHmb3VyCSJyCiS_e1zXQDTax4b9XJ0MQffbZ2fN6PKUwfzbP1yVpdf8G7pCAcT6Kz6N9uM4IrFxhL0IIpG9RFQ3DlzvmFCukDR8fYSy_gOwPZnf6txI_pX08FFdHUwTYEir1m4etYcUt20Wz2vRm9PENvZdbO1LhT6UHtJX7qga729F-hzfSNOaV2bRRlgfMuuoakCRqJE1rtyPeezUIpyeGMmGXbWqKJ1ftNPyC8P7RLo0iQrlbJE2Uet47VSh8wBj8PfXoJm99p6BGOvFCwkKbAyoITYqZ1-dlAQ2wotkNAoZVABR4-V3IgW-M70aVRsf3K4hGfbOPQ-QQImTaXI2RgUDlx_-j9r5lKULim-OLhevwifbQ2eW5Zk7qaTXz2hnOEEIvRU9vudyn2-NxhCfVhjsUF4DiY_zCx", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110065900151682375556\">Anni E</a>"] },
            { photoReference: "AWCwydheUtMUpV0owVQ-B2eWq2KBSkdtpQOZrwH9bc55J_ueL19w4pH2CSAq7T3aXlCRAYK9eidPUSMnjRZcnI9IfiqCYltR2S9JMqMhjzY3fEQ7NBt51oTSTa2MMI0LdDVDUvkJ-er2djsZEfnogYj5h0BjK6vIMV_okjcv2fQh4w67GZmYaBzdJ-kCVRTWF7s1actr3psFrG7S8ULKFrRn7ueb-U7u3bS8uAEIxgdU2BaInDSqhoQgWWo5JkfgiQJBKQRVh3yWC43n-tDuXYlYmGAC6YXbgyaPuKPVAkywqVdIiaZLVuNZjmI6Tw3ueosugDD_S9n4Yj_JLSg0UOdhn_GaySWVwdOKuEbxns30MUn3Pxc7olnfrbwDKsLgNS27PSWrr2XmMTF5sjdQ37lZaZcUD1cQo9gfdw9tfkxvMOXfU8JNqkEjmFT2tsLcmjAd", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110065900151682375556\">Anni E</a>"] }
        ],
        summary: "기념일이나 특별한 날에 방문하기 좋은 고품격 다이닝 레스토랑입니다.",
        updatedAt: "2026-08-13",
        highlights: ["친절하고 겸손한 서비스", "기념일 케이크 서비스 제공", "조용하고 편안한 분위기"],
        tips: ["6코스 또는 4코스 요리를 추천합니다", "특별한 기념일에 방문하는 것을 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "코스 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.anzani.com.ph/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16789636759378965082", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%88%EC%9E%90%EB%8B%88+%EB%89%B4+%EB%A9%94%EB%94%94%ED%85%8C%EB%A6%AC%EC%96%B8+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스테인 앤 가벨 비스트로": {
        photos: [],
        placeId: "ChIJ0Qy-WgCZqTMRJ2yIc8DFgxE",
        placePhotos: [
            { photoReference: "AWCwydgJyPVneX2LLky2C5jSz_nXwIw7hhDIFtOtQB6MlVzbQVfozsHFl0vifDKGDFj0j-m_wjgDlfxH9nlVI6W_t3JJJoG-_AvqsAGjJ_6bMXxVLLdzyc_yAW276FPXsiDshCs0wknk7qJd9b_gN_vhqlnqPT0LxqhHJmpfg557qB2UdtquQmaD4HMe_7Gx9QKP3acLneJdTKJD9WxofK6OaUjkOPdonWTg4Kmga2yINrMS1cROGPYS0G6MgXqQF8Yx1WDVrdPU8CCSpjBCPPETc_hB6ioDdM23WAEdEu-Oj9i_oHG8Rg0wIl_jMZ_QhhwQLqjog3IRevXLAI7MCTz-6xur_S2Am8305bQXhYTm8e0sw6Jcv0Xy820mqNFf0Ivz0qyOa-U3jYxuirNP9-OLYVmkFXCHGKroBgUDGone-4Jq6XK-uWDIXnipPasKagjn", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108646159769862956539\">Stein and Gabel Bistro</a>"] },
            { photoReference: "AWCwydioUwwfwENUCujY6di5n-SN_-lW4ijKN4jWzt8HfQUv78rVtj8mxi3-x1EGLbJmTTCI2Dvm88Im5-QOpLHjxSMbHB_1TFfdXfBSPZbVZ69mO3tAUfGGI1SJ1uad-9-gpWdtHPSfl5krQbMPCRlbSXP0Q_XvZa3fZ5kzWJLkLrr8VVPpl0eacXobD6OxKGe6cKo1S7qcsK3jDnCizlPOhBE0zEhgIB36ZwmWHOPtygP54eUoSd5XhI-Z6KY2UTJ2_RLrgv5NmJee38ecrMkMlWIEREA3cvlwl-FUnSJlVTqHozfVJcoWDvDiQbrHK37gwW27zX5lure_y9Uf1_epA7H0jHCoe3D2n2EAAvDnIzqK63mRSHPk0Gyril9HOC2Omn4pkP5ZUzsQYg1buevRaER5fcMaDLDlcvIBQwrAPun7L_3OXHKaX_iHJ0aj2-yX", width: 991, height: 1311, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108646159769862956539\">Stein and Gabel Bistro</a>"] },
            { photoReference: "AWCwydjBH2erCr7EqS7ncNJtBTFTqa0vP8YKhhLgEY6d1sEc0ZNu7q-1rSz7ySH1_eJgVAbN-u2WmS2Uf8C_KemdGs_QdENmmgv-kCDdJ83cHLY7seXv15gMoYabhZng9AE4mm3_VCuowTenuTxZovzLf25X-gGAEP_3QsS_8jxUKP_Hj-SoaNlljd55qJdvJ5D_ptXAca_d1vGXrfuwxWa-YDy6nch_GE-zbGkZ9mix8Vu4i7bu6908mkcU1F8ZUI7zSE4DTVwZQvMx3Oz5G1TnDldmWUp7S9yV3Agme4XOsAISE1V2-I3Uk10ZpFGRAn3yBC78S9P4D8Y7iKs2-o2VO3uuBJJjKpGXbix62MxMEi204UXeNC-6twGZVDLazeeW8pYF3Zpy8oNQMhDnQObn_h6CmHUbhRRQcd7U1a3OZiNdXQoIp_Hf0pOPWTZBjy4F", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107652345230612039235\">Maricel Manaul</a>"] },
            { photoReference: "AWCwydjYrorGcoclYDduHsK9HtCVVahUOqjxZJKf30JIpUUvtmczY3hdfeRpHlGvv1pgyQZEKsHBv0vo5ryXQvhvRHCpOziYIdsqmdVH6mDY64x09E5QOB0JYLTmC4luduGkiG0rqAdGQeXMqkRTCR9u7kGBHjlo86c8vUOdXYew4YjABJfDX4wYTfzT206RafSkDxn6jZmvBtiLxx9b63v2m26630WQMTmtu5jDEaMMChWA4uGYS-Trwfk4LFfgdhb1TombToiMNrthQhtzb8bW4BDJjv6pZ_1AfhJ2GHP0GHkbEkhrvgVpR7Kk06k0nrDUOhbdj96cOmRrDKuXxgQJTsAM348LOnXto_x1MqyeLHUiQVpZANPx5wzuI-1FbFpk79iraffPGsxGMUOnBNuAkVGLs8bUTnSu5iXvpsEzewXQ1HSLyArvpPNXu08IKQ", width: 1587, height: 2245, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108646159769862956539\">Stein and Gabel Bistro</a>"] },
            { photoReference: "AWCwyditZ6X29_QiePp_g2eUKoBPNStnSd9HP9pWtHVM75cr4QMd0Flutmq8Nm9muD3MnRyOOmpAtQHX0J2oX_y4Lqo3cQLMk4ysiG5Gvuf66CxgXJ10dorx6ZJto9X4Zb7GFGZGWQkRWsvIo4E_A6Nw7CF7ufmhFayXpJXBmaHioRjvnBq-sM1xzHLYBVDa71EzBvaGDjj5-ILiUZsWlMvQDExDqmRgpl7H1hfUpnhm5hmCsM3pk2YFydY6XL_qJHRkSGVuenPwztbvnsbz3RiJ55RbP97Fza71EFRPdLsQG1k2WKWND_tOz2WroZE8DH8KoorPlTmT2P4D8uCj5IhWgh1ehxDQEfhA_ZXO93mAPJG5k51LDOLasJYV7EcAHZM-UB9hUvbiMK31X8o-dSK_pDLBFc91wr-OgWF2vmEE8MaFZRBglx6pEJBxuLGVJVXB", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108179483984465028010\">Katherine Yackel</a>"] }
        ],
        summary: "맛있는 음식과 푸짐한 양을 자랑하는 편안한 분위기의 서양식 레스토랑입니다.",
        updatedAt: "2026-08-13",
        highlights: ["맛있는 음식", "푸짐한 양", "조용하고 편안한 분위기"],
        tips: ["친구 또는 가족과 함께 방문하기 좋습니다."],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "서양식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 6:00 ~ 오전 1:00; 화요일: 오전 6:00 ~ 오전 1:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=1262069750956583975", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%85%8C%EC%9D%B8+%EC%95%A4+%EA%B0%80%EB%B2%A8+%EB%B9%84%EC%8A%A4%ED%8A%B8%EB%A1%9C+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "피제리아 미켈란젤로": {
        photos: [],
        placeId: "ChIJ3Qv4KQCZqTMRUk_p_ikQGmc",
        placePhotos: [
            { photoReference: "AWCwydiUE9c5TZbv0dUMZ-VXhFdmlM81VMYfLiAc8mayE5l5t6a4_hqQB3jx7nlWqPFhzkCVDI_Xdrp5iIJr3hnAQAK4ioR76id3vGYRyOkNM5pEtcpF5s222vLNAJD-V8dlI_FqpTC1kuc7Neg-vJfIK0GLBadx1Co7bQI7QgqsGAl3y_oKIaGm-emxYv9jZ8iHfGUNtUO2l6hAbgGTP60KQGl9aPVsm1V6D6JtVBGNdHhIpD4rh8L8M4izXWUw6F1KYxEMLXXH7AQRXp9-jxNvHKELoweebmEjiQdWcwakfCUYA9E4gBHSV656AW0Uh68B8mD-A1wPIWzLg5WKqpUZCTlewP8IkXkTl1BMD_ZF-wZmn09hSnAUPugfxLIFEe7WXI_Qg8bLOQqk1fqQ9Mc1Gkz5UVkYnWsFCdaO0SGxBI8Qg6YEJUWK03l5b8CfXw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108122585512888823834\">Pizzeria Michelangelo</a>"] },
            { photoReference: "AWCwydgufeEdYH9xnI-0iM2a_txhoFFV578uzSXU766f4oHVHmp2CDXwUDMpoeecXSsFKMsZQ8f-seR2OciNGvD3quUDj2i8yLWVE68FHpz9VstxH8IY4JJlJgKw5rcqaak_KoVmv-KEecc-4WVDk-s8TfH7S4Y3wezAu1XPtrvOy_89LT90hVsu2ezxdXrRRNWJFfpBgPp5argKK3OF-Dcja1bs56_w_c-E4OSprfhriq6Rpu3YcEVI_up-gR_pzVlK1LNEQKZzA32lfP-_nTxPbZytME3Z5_OLBz5JGfQP3WGFDV4VJIspjRxABir_mbLzRwx20-4Qq7hooykrAxlfFp08YlOwsiuPzJuRXGWiqYRe7LLH9f7tUmi4BT0E0kiiWI1rAW3_pG_lFMuaKcxNaO_9iwRaYjsd12Sz2GTfuz2J-kt6gfkw0GeEI8G6UcCI", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108122585512888823834\">Pizzeria Michelangelo</a>"] },
            { photoReference: "AWCwydiImEMXBrQWqfmrALliSaDukEEkBg7FYiPyTztOmYSJAe6U9LV-U-k501qBtNv0BEeKie6bxRpqZqrGwyDuprCDXxlFnAGIR3nSmeHLqmanGM9wpuUpCLJKHrJ2_o7BK5gqBrqY7nWH0ejB_MUh91_Ss-V67GwLlf7jaimHXkg2jgaKi571ZU9W0x-en7-bMdZzsWiX7gP7vDYAbE_i5aALXXL7xke6NkAbYj-ABSf2uShq9cA8zK8nIpCM77ILT1TkZsq1T_Fx6OP99ubSdzTZJjXmIB1SU0BIVLuUQZ7lrg-JTi4PUKhipnye6rO3sNShTowzmc4LjE2Hp0d3FFxpD0mix3ylDzsCcL2QOG1J2qrC53KaHCPwnGmYZoNtL_Fwcsrf-AhMQZyUDUaxNMCRjsUSOgNU-c4ZyHtctfz1ZcGhIhhwIx6mWr1Fvw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103046122774185127499\">Abigail Florence Taghoy</a>"] },
            { photoReference: "AWCwydjg1krTOULXSEr5BwfHMeOu_suLzQlK2tR2TGOpLvTrL6xJvogdf0V2dsNpDPz4A3XrJssc4659x1NnrTf7WEXZqSybMliHZneRbGp6XRNIH3AG5FGct2PhO9R_Kss647FSNzUTfjYbiMeSpkAfUYKtZRKO_3MiO3p95JQFQXam6CFUZUCTWRdLVAuzpDitodivFq8EKzs83y1ZigTDwi7SgbpzWGgPHygu6Tih2qb63RfHUNhWJCdDQ-QUCMwyP2Juh2m48fAeyWl1W9P0SCdkQ7OkfDsXVPbYfYTO8cl7DM42jhJ_cJCKLSS_ESrbGq8vJmY4U_MQe1G1pVTsXa5x44ITPOa2V4MMCcO7jBDJ72Uftp51_psTwmFRdEfuLiLVXU-R44u1BVuC6m9xeOpG2YAJ2ikS-74A5wnbPl1D4KYhLDvd69ci3VpzR9uF", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105428627860360007809\">Fahmida Alam</a>"] },
            { photoReference: "AWCwydhekybjMnk5z1E0boxXC_qvqXZTweMkXj_pgGMehMREdFtQ7Ap0_iK1e0weXFQmjrjK1jlvTTtw5RgcwkR0uPsuh0YVmZvG6gu2M3C4tVx2J2Beeo-ImZOko8jZDz1UGE6yMlxIiAL1o2V0ZUrUflta2lknYVT_2V7KUcZWAjf0TdT1oMaa7ESBKqsMzfEU38TP23ZSPOBH4BEYsALbPtmlb_XIPkqiHLnAbwGT8EIDJVba3PfVk_8RVWOtcPafmclAFlRHo5FCXcClQI58mypXbK4pmlp53aBJRiq2Gez7rDu6OpF1RPE5KpSWzlq5nI4QYlxZZOu1J442td8inMUw68WUb6qUDBuu4BesmBy7bcD4SivSkEsRFhWgHh7GVqnPVy6zkkBAgNfQt0HN8KqTa1JntQkXF8ygo4SwHZoBpcKflfEqbkamcTALoA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112045981021637804239\">a raishi</a>"] }
        ],
        summary: "맛있는 음식과 친절한 서비스가 돋보이는 피자 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["화덕 피자와 파스타", "피자 만들기 체험 가능", "친절한 서비스"],
        tips: ["피자 만들기 체험을 즐겨보세요", "서비스로 제공되는 빵도 맛있습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "화덕 피자", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://lavielifestyle.ph/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7429268307857461074", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%EC%A0%9C%EB%A6%AC%EC%95%84+%EB%AF%B8%EC%BC%88%EB%9E%80%EC%A0%A4%EB%A1%9C+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "주세페 피제리아 & 시칠리안 로스트": {
        photos: [],
        placeId: "ChIJb2mwdeiYqTMRm2VEHNVq8Uc",
        placePhotos: [
            { photoReference: "AWCwydho8h7J01qHH7prC_YMLlQpAEza3fuTMxogHP2ubdptKmz_oxVaX1S82LVJf1RoGeI9zV_ps-pq99RvDX-eLpIVLiZ9-yCRrZ_eDDogSdATbhaxuoiJITyb0Zd_Vcd2tBbK-7fp9yjujnCg9bxTc7TCWoqn0fFYiBTH_Y-g3L9Tb1NGnDL9VtcP2cQoh68soCdEDoNTDIvoHFBX1vxtS-0O1M0-s_QQANceygutq8IQVwPrbj2sE9XNK_43Qxk53wVF9j6LAqM7vh-6Zkw2VOL64CcuYpowECDR_eBa0AYkQ1FEmBhvGNrWxxkpgjXWBQ7MMkslU3-kKnfquvS73CZpOKrViYXJyDUBYglHmPlwImtM9AUyFwnaPD6iAqGSzN7koxLbbmzXiMDP-AXfpEL6v0xTXCDvuZBTF2mrcvwJnw", width: 664, height: 462, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106870026152733859356\">Giuseppe Pizzeria &amp; Sicilian Roast Cebu</a>"] },
            { photoReference: "AWCwydgSp6H1bqzEe6sR_ARX48lOMD8fg54Q3EVsbNzpR06Sufy8RZmDJc6yyC4zQfoN8egO9CQvDGaixCqzbVd1pRzcfovW9VKSx7SVwr133KQMGc_TdPBBn018TbOaNOyyZ3GvlUkIN1HO_QrMLPkWYg2jXhsjtVVKz26UNcgTsy9SekL0SvqdbMk_PD94FeYFlDl3NAl6_u1UCmK3YjS_6Xw82kToj_sQ0Ii1n00jeEw5DM-0uxU5Vz-BVuTbuXWEHgYsUkRGLHqquUWrXr77i_L7-pihSRA6kJWBMZZSfINsBqRWqeIWElbOp0piqe3Pz8nCiRfBBuHA-hwB9-8Oxf7ESNo5L7NFqqLSGVR8phZWyoM8LbgpnPE_C4fjIt0dd0XlTpzIXP32UEFhzRSuenPR2JJ0XDZOP59NVhaWWghxFw", width: 4095, height: 2305, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106870026152733859356\">Giuseppe Pizzeria &amp; Sicilian Roast Cebu</a>"] },
            { photoReference: "AWCwydhMMVMXS0huQ0_QGRexfE8P_RkCr-U-P-QbIsYwEtNRvrvgOmmAa-CqBIM6IEV-LG8ho9aUEiC6k28B0nBQj1KkNM7HCW7X2n98Rm1hVuZQFKTZD4AraiO9SguoCXPV6M5dUa2AL9ykKvk1aaC2RcyxUIGYfH3z-vTkFuy43Qkw6R6G35GYu6Spc1qpvqmLzv1ZMybyT7obT1ypE3Kz9RQwy84BNx3bVz5Ciazlf1Yk1L-ZQInBTjADl1WgZGEWjv0DhLXx0soQOfEhl6e1nrMJzN9kSJPxB-nmCTEh4jWC_XVvc__5SK0XVOn-93ADH8J7Z72B8Z2VPytKl8R-BPgdd2rpr22E7EauWuiJmNKbamPAIjusCjY7InPU47VYUj0prYd9brVGVw1_145trlqrMrfaJYN9dTGLJAhAHFzIH2l6nLTOBjHpybF8FuSP", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110970736506071543263\">Emmanuel Maggion</a>"] },
            { photoReference: "AWCwydh-iF4OZ1QKliwwYSpV_kWmO9hnXv-OvEb6WSHMK-Go0y9A_seM8SDnwSs9pitdgYjicareQMcxXkpurkzi70ItMK1-tyABmfFkVImYGfMefde25osATAQu16oo7p8_S7hjmq07PVMwL7v_e3u8VqrQmmtUS8mqChzFV1NcWLttqIPeSq9LSnU2CliE6N60NfD3k3oEDTLhW3vRS6a-7u3Qx0PgYcdy8Ay8hS_VDaNRbs_F0_1S48zb2fGwTC9TJgJPrKzglgew1WBYvDnCQmDidevEmOikMwBlv9L9TStCyLqgEB1MAjKTANNwY-1lp0YljKJ86h-DK4NbPqLvFWJhIT9ZB7lhqQaq54phKHnUQiZPCECYhVNPVO9rw5TQV4CrSdGkbC-0AAj6InVNuSKMW1JVK8tkHBVXuPDu8EG2zI1Uf0TZ-G1XKrXR5Q", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114944314453672107373\">Christine Joy Podot</a>"] },
            { photoReference: "AWCwydh2bXFBxvGw-PiMkvU1b7MlBWD2NPwGpICQ2auQBs9H5MFUKMg6vVp7tRKRmtQ_P4dbCHiOKDKZj3wzxiVn0Vjxpr5ENVQBz3vP7SLw2y1VPJA4x1CDjWBFJBitjMSm3ohR4CKSPu5F7p-8tl7c8579Tv_X2m43MW9omi2Bcl2P5Aflo3rBtfbZVydpWcGXS760_fS1CQ7_dmS4_lHUCav4uMhD47sRQLn3dFJxwQ6oj5xh5317S_x3-Tq_HWicjk-IeckLOKjqemSR9GDhCaIaxYDDHNVQJd8N7CI0o3DF1AHNYz4CFRxrJ9d-lPvpTCT6P9SDN2XB2eODNaVilfXO7-SC1CwGEAX1SaQ6UQKmXquASUDG46YaGJ0mT01RFzALq4ZL2QPNFPw7hKxuOr8tQV49PD1OUfPd1JXVx6H7pm41Hw_YaybuAHEvE27N", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115429021543324398495\">Charles</a>"] }
        ],
        summary: "할머니의 전통 레시피를 고수하며 대를 이어 정성을 다하는 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["23년 전통의 정통 시칠리아 요리", "가족 단위 식사에 적합한 분위기"],
        tips: ["할머니 니나의 전통 레시피를 경험해보세요", "가족 모임 장소로 추천합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "정통 시칠리아 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 10:00; 화요일: 오전 11:30 ~ 오후 10:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/GiuseppePizzeriaCebu/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5184042109614974363", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%A3%BC%EC%84%B8%ED%8E%98+%ED%94%BC%EC%A0%9C%EB%A6%AC%EC%95%84+%26+%EC%8B%9C%EC%B9%A0%EB%A6%AC%EC%95%88+%EB%A1%9C%EC%8A%A4%ED%8A%B8+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "굿 컵 커피 코": {
        photos: [],
        placeId: "ChIJqR3f-o6ZqTMRYHtjUIbzJ4Q",
        placePhotos: [
            { photoReference: "AWCwydiSf1vepUSiB-Hgg6DCFIhWDJ1deQJ-9uxZs5zI3z_7ibtowoqV2Y9TyxhZipbsQsvjGIpAcwQ8mnFYXXIhB5z0STxbloD9QXIPisqmZBcZb0dvaHIDmY56hLa3JzwoYiwIBZwSvhSeB-x0cZbWyvMGeGtABRROUd0Zr-cbCfJ7Vih0oGEoSR5KwVw53G0Wd5Vl8RoCOHtU1KLreDa8QmMrAFoqEK3moNGkngzD1tWEL72WoSLrN4V6arG_Ufpcry0gkJAZZ5sDj626KFkW4D2SmovZBMId1j9GHsfMxdIqzA2_Hutu_rrQzFhp1A--lZCLUATXB8wYyPs__DzreEcz_EjLNoZoq0z70uHZacJCRyQmpd8ySRe4Ooz2ow3rw6B5METldNfCDUEe2cLxEW4893eJfsFWKJEFhawXVlckUU6d6K9u18linDjGusyB", width: 2199, height: 3293, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108356319210345523035\">Good Cup Coffee Co.</a>"] },
            { photoReference: "AWCwydgSflYi8d62OWDB27z5CZaiatpY0yVV-Z3Ee-_vvbm4_PJtcxC4NA9dfrGJzxPUMsIniS_akcKFx2-xgoFTpYlt3Kw83pQMenve-UmeFxNdytCT-RomQ1-X6cbBnKuGs499t4LGxTrpLZicNQ1Zs2Qu6gL6ovvJe5Rm9v4vFN3GCEJfmjGCV7duidBzqgV8qVXj6LfzPVj5Jf3tBgLNn85Eg5R6wb2WGhmd-DJOvzsoyi9drAN8_eLKC6UklIFbsLiRsz0iHulhT5mZlya8HfoOsYjMd9r_-Zq5x9X_1LSlvw4ZfaedWxrYOFZNXwzn7BxatV87d5didH_aSm_PbJYMb77KOkzkEvQfqVX0Qy4K9Rfl6pyxTkJrcdQvjtl19jKdQqIuhkQKy-A8AeIZyEiX1pCQgjb9x8ASXv8MldP6I049LUcMWlAfuwmSej9Q", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108588492074838525470\">hnzlmt</a>"] },
            { photoReference: "AWCwydjsb0B2KqBpPYzceXBdwo4Bjvs1UVcGl3AKHyKiHdiZFPiHIcLO_W-8mRE9XvhyFB6WWmoIYEGMcxRxotNvt7AsKMGx9BKvvZQ4hHIx4lfuJA48MmaPsEntSyatKmx4twBpmCB5RtCm0dhHEojdjsefv4rs9w7-k57YUD6-avXsIU9bHCLQOt8sMnr0zA6fCms9J01KqWHUob9Bs2-sjzj3eeqkIahpJftBPj8wzL7rwqvifH11tyPJzwinwHuXntNGTSXVIZKuhGsGbvAgUd-lX5lu-pCWW4k1rupSbI0E_LBVoIenGpfTSptb4W_QjibA_tmBdgMMEyBnZYVgurx39lwoPaEKTeNo0URM-hXpvrPhgOyKN9ZXfBPSJl2D-IbQEZZE46M0TVKEg2gUmga45h7g0TH0KRYjtCAzfjk", width: 1080, height: 1493, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105419544392005146952\">Brian Pao</a>"] },
            { photoReference: "AWCwydhNQsKeZjQ-668CtOs4R6q9yBQ_1uFFOnxlMX3xN5eNNXcjEt1veUAkVXvYGgQRvT5yz_bLN6aoY596l0iXTQ_cxM5yxHWkZewe_N8ZGuLZpHYbM5pC4r-2L_5lYVnR_WgRx5ZHXTtwQCklgmLy0kmuBzVDtH96ch8g7-cOkNg3NsygAdTcdK0AJzs8jrD97hVfvMN9Tk807cM_KueQ-ugTNgqw0srK6C8tqncIOEtA8ioz8An_ECr6VBS1Mjiey0qwdJWzajjOdSteRmee2BzKomKolnBJb9bYlD9QzmSstmL9ZRZ-Ck23CzMpXXzfw-xk_9ygwIfIzcI1r8BORyraiAyCsQpexQHYLiuvy-uGsZaxJKuCoY3Rx80ajwWn4fV2BOfe6XW8ZQctAE8aKt1V89JfmgdkGcO2UQYHdr0XRw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114326625601817532263\">Linh Neu</a>"] },
            { photoReference: "AWCwydg16vOM77rSSo7tE4w7GGbEwv55DbJ7AnRN5cFGOc8rfSRVwQd8M1it_wJdmOBTqBEhP5UE6hpbCT-yb-jWay2d5D3zuudj5v5iaWxeCj3nOsnoXgnLxGzYwJ5KQjmfzrrKoIaMV1dprE6tIc7Nadtmz36p82yVZ6HPCmek4LqKiwCTacEvzgmDtOqUKDuNadnztDRqrQFMGw486zshS-uEhe1-TL9XTurbwIPMEZfRUuM4HH2iDbjYZnIgD3gMC9Lmwt9tRH980mqkCc1BmP9ht12jvWRmBn5LdIx38_qtj1RIUFyVzn8AhMRrnLJH_y95IVM5L6YHzWRZLURHeUu-JRCZV6GlBN1soyZmON7gSbwphIIHpDEIaAPW8S3SdpHoOPsjf3IqIxTwXs9Ck3eZ8tbVnitSrGkEGMsF9Qw", width: 1125, height: 1232, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104040657734453600447\">Irfan Silalahi</a>"] }
        ],
        summary: "4.8점의 높은 평점을 보유한 세부의 대표적인 스페셜티 카페",
        updatedAt: "2026-08-13",
        highlights: ["4.8점의 높은 평점", "많은 리뷰 수", "스페셜티 커피 전문", "매일 오전 8시 오픈"],
        tips: ["스페셜티 커피를 즐기기에 좋습니다", "매일 오전 8시부터 오후 6시까지 운영합니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스페셜티 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 6:00; 화요일: 오전 8:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.goodcup.ph/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9522847695298067296", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%BF+%EC%BB%B5+%EC%BB%A4%ED%94%BC+%EC%BD%94+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스패로우 카페 컬처": {
        photos: [],
        placeId: "ChIJWWBJDQCZqTMRaW0uOE4A0Jk",
        placePhotos: [
            { photoReference: "AWCwydjMtnwxE6P_zCGhtHIghBYrtrwKY1OhXEUCu2UMia3VxRCjfHGjPAhUPx94yjMycxDyD6znSvlPMMgpEmibP6uQb1fmlh8EP2vSzfiKkSsnxy2tcBRKtK-_7M4vPscDLX4UfbIM8cqyMVwcPctoCb5nJ3AiVIqtMjsCH79KZJIT0jTA2yYn9A2zExluno53J98Cj78eU_Dz87JfNb-Qa5xMIGE9hBG9hixhXh6kW3EsWufEXjSZmZDDdCGMw7t50YzYtR7tdEljYjGqKF-WqW3yqb3W0B7IO4lKCfoD145AHVzZsTwIoLp00KSL4kED-PArGPED1R3GJRS0nFh8mvd2AXeOTW0o2gZVqZMiAVAPdDZn7j-ivDswwNetPVnHQezHVBcFtFnnyAehZVdNlWwgbO24Fl-JMGbMBhmbSqyVK7Y", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109893895001552211339\">Alvin Arimas</a>"] },
            { photoReference: "AWCwydg8W03RgODPSUT9rhnJ0wtarQzDTWYvKHLgf32uExGa_dzvNze0ME8Nv5DsnhguREXmEXV5EUpoW8t-HzsFmnFwj4KvSUAx1U8F-wttOW7NmU35WN9k0Mo4KV9llW1QhxsJLw5rKK1xF8Vinwb8dVlzoqHM7_pca24hvbxGC4oCHRrqbsKYXRd--OstcT1RtnhLeyq0FHhMzqUWuPcwer6EcZhZikH2pAyzK8WmzW1P4BBrZNbIsjFPbrYH8IDvD8zQMmawsodT8zujGnzNX5mYT6d-sUvo2L_Hr2MkaVzKNDS_KJacRtwgdzPDZ61VuiS7Cas9dwEZYUftinx27GhtVhUCuRxubQNRsS0fyS32vvtOKBURWLIzzr8OI7bRbZ2qmpakLa8ILCZcL1xz_x6vqyYKPWn0UpaVAOVpWXi3Im1Gr2014dnV8nicKDcH", width: 2601, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112844307937809454475\">Karren Magdadaro</a>"] },
            { photoReference: "AWCwydhFOx-fiCJM6qFN-VjxyBOaEkzOWE6RF5ZpB6dAr0B1jwTbH5MHnfF2TUvCeCxvqmIdFNIIa9_THgFjRHIBSAYZL0n806zKx3KTwbNwPg3hGYAUTqShOs6ODiCAFmmI-GJJqv_0j4tP8M1Um5Zj4jfaB1aSh53FhVlZRg4xwCES7kP4e81Kz-LYsEN-nf1GP_wf4UxF281JqR7720lr77QoCCd6Egjbk5pzORtLK2STYhHKNkgfEU1AZpf0L8gblv79T8i4SWS_6zTkARphzo7fbgjk5bAVttr8-D80XqjBLdOBwUUHXCbdfYa6Q91og3M11vN3MTQ3Qfe8SrlsznB2DaOki8Epv3J3oXM0BodesmDQd8tOMVEVaHl5hBzIXyGRSWucZdBndX8FZWxrd9_WKUM0pjXl3IWpTEDNIzGiTMVfrMloEwnv08k-qw6B", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112844307937809454475\">Karren Magdadaro</a>"] },
            { photoReference: "AWCwydhYC_H8DsPr8CEjieJiX4rUVYRK-L52UBtsblxCFg6eORcRtO-m34ffyvDaRE5wavgkIjkhMK03LU_3EpffbhaGGsgse5mgOSoUnYu5dZeQztNTt4YTWwPaGCCNWRZ0z7Nqaw6W-wPjwYGXSkquTgYuZpcFIOqyJhKY-jCIngT01-Oz_eLqnaj3E_uZzNRis6-gpiUfwtL6wxnEDKKpByXMmvFm6OSHpkEm6DWnmHTVpJZnbzTFwhjL8lrxjksi_DZM9jhx4kRygYbxGqcrmNsnYzkckvnWIpF_-ZFDAM2K08UZkTuKSWFC-KRKK0-aXkTy_nfbhUU0sURj0Wp5c2TRzUfcJlghUfqlzxipyfMggTHGDg2iX14A4U11Eb4D53mIC1FNY-RqgMcTyLGk2vam2V9r8b47-IrYdlHjoHc1zltDtEUOtfBS0kJf-T3f", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118072664548855822841\">ssang</a>"] },
            { photoReference: "AWCwydilHW9XOiNJoMDYhLPs1zu-zJXatNkOKuyo-maQHTO0X4iT3sgw-HjbRCyTj3na3Z1G6e9A2bC96Am2r_q1iMYzvdBTIbM3kYyKnm9KtF-ghuH-IcdoZiBkf_ghumsKSqdnGI9iEF0Lr43Jis6IWQyNaQaQS-t6lSDnLrAdumrM6kK1Se3_VOwfLPIm1WY-lHp4zyknIOAYGzT6Uli7f8z1pA_lCFcpDUFXgUiw1XfpnHuvoSfgTsT5G6b6PpR0Zyhh9VuNZfJgD75Qo-7iQCB8fCp3mf4Lds0xOpHAvXqpTPunzB1isTQdcyVKJv2H8sfk5JFmujk99rAvtX1AoOJXbDuPbEdQWZIxTkEWUksqbhgl1qnLU51Xjx53bmbu9IWmZE_fZhi0RVXvuo8UgbXLo-vIL8zpT6N-iaA58r1DGEDwthCboKLmmiDAotQ6", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112844307937809454475\">Karren Magdadaro</a>"] }
        ],
        summary: "높은 평점과 편안한 분위기를 자랑하는 매력적인 카페입니다.",
        updatedAt: "2026-08-13",
        highlights: ["친절한 직원과 우수한 서비스", "혼자 방문하기 좋은 편안한 분위기"],
        tips: ["치킨 카츠동을 꼭 드셔보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "치킨 카츠동", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 7:30 ~ 오후 11:00; 화요일: 오전 7:30 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11083359018908806505", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%8C%A8%EB%A1%9C%EC%9A%B0+%EC%B9%B4%ED%8E%98+%EC%BB%AC%EC%B2%98+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "스톤 앤 페블 카페": {
        photos: [],
        placeId: "ChIJlw5plTKZqTMRl6XAgPtXDQ8",
        placePhotos: [
            { photoReference: "AWCwydgjgahDb02LhWhBvDWfX8CZS52y5CLbVv_9yaK1ISMkqjx9AFV7Ba1g4A6l4RpHVgYOlx6hAw1EciY2hxptg2ubsJWFQKjSogaWrQ48BudhNL8L018EUTJnE_IjY4QZx22HC277MRUIt_xGhJ3riYV01XLhNMdpzItox0cCWI5Mce9s3UPLSGxcjgZtg7M9ycZxxkChbl2lBrKAAO-kyTzruQWthoi5rLbXvX1QfaPM7apuWjxj2jNhjr2Fn1DXMF9bu6nddx-I44On1jceEAwOkhwZA8BWtVY5a2HxsrEljRjhsJJTCZ13zIZ0xXj42boGaFUwTIMFkKUbe1yX9W3wLCIKzj6ev2DPeSDLUDhSQpGYMfrMQcQ5_LTljbdhgNh2nz7skgb_9JllyakCLkgxX3aRbWJfeRsTLemTAzaJDJ_oGg1xeXjKL1WsBifZ", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113008725347376657602\">Stone &amp; Pebble Cafe</a>"] },
            { photoReference: "AWCwydillF0cHynsqdiwyjQRGMr5UNSVBE2lgmEH2RfmmaTHzF1EB8cALNBDWDbcmr7CRNTW3w1aMTigwkccnGF_HpT7uL44qn7cyFLtmNfMy26d2dKEaVxZuzwVQwDTYZiBr9h6XZa8Rfn48SQHW_nCZ1YLNkCZyvLWRP-Xg7A69D_zpHw-kThjSoSslVv6x53WuX75mOAXhxOwYFHSUvEDQUPWaj_wwSTO7406YwYq6A6K6N2PAyF1QchXTRvc0tsux_oLwBRcm2ZXltAZ1f6TsEM9gyOaCOK9-_RJCPAhN4ThwwGgyEYeq5u6bmccw6w48RdjV11Z2tztMzXka5HsmM4FCL621ieps1KkqJ0NYHA5D341HzuitHkv9sguFfjOYrY8KWuv5zLZVpGq-jEGR30qNaudJLhptXWfJMwiPuiUcAlggVedGW1BxQavpA", width: 1522, height: 856, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113008725347376657602\">Stone &amp; Pebble Cafe</a>"] },
            { photoReference: "AWCwydjj8U8t3VRYUHrw-NnjaQQ9BrirrH_oinfXawZyoCMu2-oRSMS9Pczb560LW55fGLe4NGbVRogcSjhD62EhXCugDDdAXjAeBVZozS95v5gO3OCgqCdPFnRqcCG1yaF37yXGw3d86So6-MmAt0Vs-4CElJ0SP8iEFosMJ8k_2M4iPRK9F5uVhMaaTh8G7MP3KZx6ra0GbP2T1pNXlJW4XRtKJgyHWVelWxJwktxBjrwvrqVEnlxmpaSQ8b217ur6FAl2T6weyN9RzDP5jgRre-NTuF0F5HlsTKyLo8BnFaIEvZmDQQLxEYWlusHo-l9_Gq29cFKcoMXOSxNWGo60nxcbZSOWzyWXwWxJYHtXUxHzPXnd9zW8vrtOgfkSjuNdy9v-kSDlBFpUsovXWiq3E1AiIcmCZblBCaLZsC07MyvBxCTh4LVgc8Fzsyznvn0s", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103384090610319809771\">CRUSIO, Theresa Marrie A.</a>"] },
            { photoReference: "AWCwydhkTVjUD6XYZa9GXLmuxqedqad2H_a97fynBA0mlDsS0dxPqSXorE_IExH2sQ4AoLFCpJrzp5wyg1FCKUPjtbsZUDOvdphxoOTbudkdtoUl5_8abkVYIpeejFB5jcPk4VK7V6jdZg0i77Rw5o150xzAmuxq0mbq-s5iIf9R7xPRjuS4zq_xL5GuCyiJ9juM0qW6t41N-mxMgcg4OhhikdAAeTkNmCZ1MseVO2IhrFsRC14-ny7idcRHXmCobBkFSAPA82uM00pfGYZlYyK7ckOuVvIElqBWW7Jy2H-crmHqV-SrKRn7Al9to51jpNVMLcVg43FzVdr-Q0w2iohPDkQGlJn9o3H92jqGARtOtaB1LGlgOVDLDH2IvrUhBWc1uetUJCbPDEbFNG3o6JpGtuMmtV77DIRjhgEVpylz4FYK1QLxkpwEa-UvJ7Gz5JyY", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113008725347376657602\">Stone &amp; Pebble Cafe</a>"] },
            { photoReference: "AWCwydhSZKHrRJsbgHj0SzuXxmf-9CmN0jcJnQFEmN7IJ31OtZ_EJRBw_F1fS0XFQLAfQ75VwfTlC84NFQVMX-3p3bRjFajh3Q7dU7kEBEHT8G8OiTXBAqRzQymjSf0teNr_tWfntgZq2tYVUVqqmIrqcVAK77c2SDAEmM_kXfuMc9UX8LMBNo9fu0WotU5HLuBSH7bKBpb9i855_0JKXwJpFGOgtbGxI8IpM59UriqBXeDJNLn0KMMMYH21kP_fLu1nYjYMWFR4obXWqNOTSkOGhu-du8hqhO4BqdU6Fe2laC62VNqSPFjev04pKRCT4NFgrb8OEtXZ2spqzfRHiMafyj0WNgax4lZLKa_9RIFNerYmsTpjqqBC7jTAGDk4c-rx4upT7i7-EqmRM6Fp_myJkyU4XdJeeLdBCBT6P4dD_mpFSqAS7kDlqnyTReIve0yJ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102579079972036441230\">Florence Iziah</a>"] }
        ],
        summary: "신선한 재료로 빠르게 조리된 맛있는 음식을 친절한 서비스와 함께 제공합니다.",
        updatedAt: "2026-08-13",
        highlights: ["친절한 직원과 훌륭한 서비스", "신선한 재료와 빠른 음식 제공", "부드러운 식감의 소고기 살피카오"],
        tips: ["소고기 살피카오 메뉴를 추천합니다", "음식 냄새가 날 수 있으니 참고하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "소고기 살피카오", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.snpeats.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1084619822974674327", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%A4%ED%86%A4+%EC%95%A4+%ED%8E%98%EB%B8%94+%EC%B9%B4%ED%8E%98+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "피크 앤 피": {
        photos: [],
        placeId: "ChIJUY-8HQCZqTMRIPcXeGt8EFc",
        placePhotos: [
            { photoReference: "AWCwydgpl1S2d-EsrmUzhJaBBjCDZ0Cp2TFiLlBsiaqc4Y1TNqUAimiSV351Blvwx5q9vzYmQ_BfzW8tlhb44XrTpXOiGqAyiFgozRd8miTXmGvZG8qvVO5HkS-UKaUmgZLRRAFE325s5GkqpegvT0M2BIjHuW2qOe6ptXt7SnmzqdrC2BRb_0p9AFOF3Yyx0ZpwBlXBQw82T_bSekWNScDDU7IGaFWuhGbWIp_X4HeBDXUbjvIf9SV6LVJgEOD77WPoT5AGzcxHmByTf9A1EzgReRXF1Rq4MIbwEDtpGnoaiv1aHFicP3VGIz1xdbsSPaOSN_H5Mmujhk1Dd33n7H3Q1TJkqREap_tupR_KWqvT094edjBgzLJ4qkp8lwRnULddxlbpWdeRIyFxGzTIYsyGDQHIeARCf797B9mqkxZO_TbLTQ5dgRUABS6M7fejUYf0", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103931522674995265912\">Neil Jimenez</a>"] },
            { photoReference: "AWCwydgKRnIsvth3aF1mgxfQdxIzkum8ykwJd5y9Rkah_u8-tqZw9sBul6lI25kiOkL_1g_nDr5SxckTk5kBFRkbWwbA5B4Z4uKXFHY6plktuPL1SgPzH9OiF2qpkEkD2-X7R_Ua7ekJFiWOuzq1uz0EGNLfHfH0_E6uAz-grmbdPJJPJxEXCl2iV68-E9KPKnaPjaZp0wt1X1v5a0I1Ri-8sn7gvy1vcPci9tddiHj0jamapvIDRAL_kf_3AA2Xb9-ezQbYua8T7titOzUzr7S9nFjF56iYsWmGr3Kqr64vm4-mGfxYgZcvZLSLIsyJ3wW6v7aahKR7ZdP5KX_ZbWOfC7jL5iXuWzk9KdBrSUEZVi-Y4idac3bpCVOiXOeaCI9LIOq2vc6-IHrAxE8fBC-U9Gp7biLgsjOxxHD49Nu98tE", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100075109993156907886\">Robby Martin Lopena</a>"] },
            { photoReference: "AWCwydijYDWZMLlRgjsUn049yEfEWAZpaIO9g4bWEidG_ACRYqaEgAGmrpIhBXIqb-M49EK6LVoMlX-VZ4fhy9Af41umY-lCLMKYyQhtO6DZGUN6KQ_lS9T9kKmv-zx4bf_NTpiZ8Jsdc63t6iU2zqhraP_-N7DJKmFEDmrHeBlly7lSRR_H0xhvL3bCoktZkkCG3LVNe-GrhDhkJwrTvUPlrQan_kuXVC7ldnAs6KFwV_ZwRusKvNe1J2TPwEX0Qp5ifHgaw6nQeIrRw_BwcDbfWA2O-JaXH8ohaMUZjhceSgPKFgYsTOVwI8cb7E6boLgpvvIis44oBYsgXIKkx1X6SM0n4PWyRf6dWn6WokOT4-LijlY01Mi8Y_nzp9TSpfgRGZuD8rt6qvwnQxLFy65F_MngaNXx9hCsNiJhCHOjoVkZdYaJ_nPYJ6z5vrUuu0xf", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113846804528033788756\">Wiza Egusquiza</a>"] },
            { photoReference: "AWCwydiItKBsIN5uofguojG74TEuHcG4uGRTHRcnCMPWFpCsyMGzX8yKV-pPwJNTBLPsYNUU_hwbcX4x7feHCj8OCwtA4fdSG6RhTNGhJXmFK9LHCOW_8nMwmQ4qIDtyW6ezIXgksJePa784cuC_tij5X9AN52foQyp3mx-dCB6FmFdqbcEvVnWWP9TGcVJEKc7iMxuDPsHmo12vnemYmN5oUfmHxw0sdyKlXct-mgffXZMvLUyV2GQPJyvX-dkekyYTLk-SiDrqj0Ytm_u7nPm3jjkpEctlgZyavCbAa0R9Ju9bqNh_fqkLCGnlD5NPNI2kjCyYwoQhDx75zflTKvay2QTWJjERHTIGCBFA8GafUBrF8Cr1PMuCoH0B6pNsP-zCBfsfdEUysjHU10SBs4lTGDEJJuiiWy9I83uPGJVTWNog19OU4ELlDSHZwsQy6w", width: 2048, height: 1153, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111191110762421362571\">PEAK&amp;PI</a>"] },
            { photoReference: "AWCwydj-ViPyuniPfCFDAT2Eujj1YYsQcJyX406_IotHG27m3p0vanSC2B25ZZPVkwRIP932VJPPdvOei3EBJGdXMswqA2qdW_aIY7hr5ebsxegqkYO5hvXKd6Uodumj4XxF8Dc6WHWgpExK1ch3viW4xHXVPW0ewAxfVRlehOoESVkGoq6xbFbZQgNJPGg5lSD1Hl_dZIOPWstof9JT5vyjAIdXlRgg8OYOCZzAhuKMDw763hx6cBDY-VlzKp53T5Ct69jnGIkwMROmIiYJ7NxEpfPWYAdyX9KjlO5ndQDzYgoiu97vW_sSMO_74yBqI1LqrTiOKI7NWyLt7M5OYfEx9bbsjZF5kwu5bd8KsbELnoqIeSAfnWLSV4th3LtaUlnub3jJflqPMsrsXtJ4nOTGW2JRaNEhqG2urkyeatNzVjpsMTXTk52S8ZcqtgQK6zcl", width: 415, height: 363, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108973021011905937794\">Belinda Ignacio</a>"] }
        ],
        summary: "말차 애호가들에게 강력 추천하는 평점 4.8의 고품질 카페입니다.",
        updatedAt: "2026-08-13",
        highlights: ["말차 메뉴 추천", "조용하고 편안한 분위기", "친절한 서비스"],
        tips: ["말차를 좋아하신다면 꼭 방문해보세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "말차", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 8:00 ~ 오후 8:00; 화요일: 오전 8:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.instagram.com/peakandpi", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6273651081945282336", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%BC%ED%81%AC+%EC%95%A4+%ED%94%BC+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "타이트로프 커피": {
        photos: [],
        placeId: "ChIJK8FWebCZqTMRnFI3sLazYXg",
        placePhotos: [
            { photoReference: "AWCwydiIKwzGJNNiQx-UgB1VOdJJXeIK_56oVnZyVr7JW_ff9S6_q9yDRHkJbsVnUM-8LPIyiHILNNb5ta-cnhjC2c3lIyt8AknZe9-v2VnG0YGf3Z0_pllCENwyyhC8-F3XL7HC-6h3Kdzu-Jwex-u41_iAB4tN31r-JU56MrC5BV1NTpq2e4kMLY6UrnVcDaOA_dMjCIZz-0rV2ozbozfB4KsJS4T5ljls24Ofn42Cn3DGmRt-9VWIk-PdZtEUPyQlEXnaJgaG0F7nUXcUadXictvZTIisx9I8VDR6PHF8Y5pnceQ0esft2O7zBy0gyXwM7qhVi6e4comhZqOTABB8LIQRaxyNG0XvFd8IuGsKgraZMITrx91u4kYIAGCOXT2Ctd7yRkAJfK26h-FXdJsAs0GC4JfHchfGfDbOINTTBTBhjA", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106703777603559310873\">Tightrope Coffee</a>"] },
            { photoReference: "AWCwydgogOVgQ-CSbSB-hcDxZ3SyptuXEk8J2GxDKOg5T128TTxtplOfGX3Dw6W0aE5i6XQ6bA_h2H8r3S0egUvx1gvHK8iB8CKxEfPQQSUCCIIOvPItudZKXoI5P6YKv0fib324P0QjP14X7a6eB5wHNG_MN_xBtoDEZkqCjTtYRe2k82b2_bBELM0wgPNrkh82UlL8IJN0Jgcm1BT8y-4UC1E2W3GtH6v5ek6JlNcTSBPDAYKx1utZFMsqMgRdURBmqOQofg5JWi15eiuCfAj5eihLmTtZQmEKtitjZO32aIFsZFOsn8AEAtN47WupMFFjQwLxnrtVhSg_41rcMTLUrd2SR-y0nTsDXBSTYrfbCaZLgxi7cmhR9XxsYhWmTC6HuGLNr0O6-f_WK3z16mPqcIy-NyuRwrRf5JxFKlM7si-PUGZT", width: 4000, height: 4003, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117583026567002243695\">Francis Gabriel Pepito</a>"] },
            { photoReference: "AWCwydiRhcW_M1OPzs6uLpfWyuuwFIM8T_tf6LkfiQtEYJwtg1lVYiWDiERD-_dKgcQo64V7jY1Ebu3Fp3xut0aiMNOVg5eNYvqa5xARp070f5OHwILzxZY4uYBrs4OceJKWBgLYes-QS6FN_65wJD0-YXn15d_LNVdVjWK2EzltM1lE_gYS79QEXC3ALZx_d7yUvT-NpayJLzkJ20nqGF8OLrklyobAtO7ILyw1YcNYGkz8qRWmN0qUxg78ubmuQRxYYXzkQXU9jCMICh48MlAKNMhUGfd17sIet9fcHYrM16ZLlglYrPVuLgCW-Ge5IEtZUbm_ymnubvy1TTPjCWLGJOPBZtt4BFytEkFbpx1rix_a3YlAwRGO_lIpXDcSwlA4_GOCCKG_93BCxwTvjSyFM93FF5ivC0TCs_C4ANfzr6lyKdOLAKi6gjqVkZypGOAx", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103467473856036750601\">Abdul</a>"] },
            { photoReference: "AWCwydj08REXgv3-a9whKDkTCGDZ9DSu2HhOBfXiVOQMAbQTNwOdM9WZxYl_ST66xUnwXO0A0kNFbKIKMFWw7_yM5IhUq6Lh6CGMHzbJUitE5FrWd0Fu0mtGZieHvBCWiGRyFvV7zLUcUkAaLl7vMc2tbJtY6SXN_D46a48EnEscLaY1TrlWyeneZMeIeW6Bjvzc2W4RnyOQqeNF05NouJglsqAno2e6hCSgTPVXjTM7_LBbiiL_C6idI5lcJICGWyd3dJs5jHjqjR0faRrsXkHOND8q79wFDSkRHHXXOUYTqMoLvbl4251aJvqMfrCrKhqVt8p0MQpfLSnFtfUo9K5560OAm8ArI_rqtv9U8wYFRCWjaJ9K6uOijCTZqo15gC1RalVUKs2ba0Q75YQzt7dCsGav7CbX80cDHRjANvsaR4k5D_VMemPVPJ721eUv0w", width: 1320, height: 1753, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108983126686632132479\">Angel Ruby</a>"] },
            { photoReference: "AWCwydiQ7s9Blvt8vi7f3xo7-OW6sAtHgCo7DZFQwe2e4hB9sj-lL-efC_1mP4cwwn8F2hIr0p2ClZqC8xuVQqSFjiUlMFZr6-U-jmDvjfVtyQhFlr0WxXeQIXdvU-_oTtWcVZt0QzhUL7oR32MV14LFe7TeJlV75gf8tmwmWvkBwVWJtPduUENIT6lcXkb1bFN74JUw4bUTm-rEm2D82puYuw2GgHK0MdyLP72U7Q5kWmtbJV2iZ6OvDciwFB7O-h1SEweA_Vdnf461yAImESH0L9wlgo3zWbZ1BYi-9a6WocbPZUs_OdZTCR3UNVWtNjzOj22YUbBp8peSATVx9_GDgrm6Bh8fatEKcRPCwesV2DQwjipYFFIfKJ3lbgSkpzoMx7orqtab0jCmFRBDgDH-MOMcPpOKyy32NckV7gFVmSRHoQ_GgqxZPhjoyK8B0SN_", width: 450, height: 295, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102505713746514717639\">Sebastian Foster</a>"] }
        ],
        summary: "커피 맛이 뛰어난 세부의 스페셜티 커피 전문점입니다.",
        updatedAt: "2026-08-13",
        highlights: ["훌륭한 커피 맛", "100% 추천하는 맛집"],
        tips: ["커피 맛을 즐기기에 최적의 장소입니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "스페셜티 커피", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=8674411954514121372", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%83%80%EC%9D%B4%ED%8A%B8%EB%A1%9C%ED%94%84+%EC%BB%A4%ED%94%BC+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "모트 32 세부": {
        photos: [],
        placeId: "ChIJb6kdsJOdqTMRZATzH-FjDOo",
        placePhotos: [
            { photoReference: "AWCwydili3qjzUbwabakBKfAccMLUlyVsl98QrvGph3-CCF_MlHsql57ZGsg75SdN5yV2DEXBgH3OVGoID4Gb5TNFWlAqrLzGQ_VAguVLXmmZJfmUDLt3aKZsj6Pzdm36OwmQzX3hcuLtz3q6Y-D61lf0RQqfAJZ90BT_oS31w6l_UpCesQTMpfTe8qhOWIq4chuOvefqEh9XM8kLEIA95Ms1akGgdKAly0IveUl7ZNGXX33pbAoFEu4b3KhXFK1-vkv-pt86r0xnMSgVFY25cuynhz_vkp6f8w7-s1X71VWmqm-SRj579qKsUy5XslfdLINa9cMSckKVj9gZ8LJM8y9oHmPFNpMvzSeqHMggdmYIgdUKzruD0a3HFuDMzrMtgN4Cnt9e4_av0kkSH0wPotG6A2YxunExFEB9Et0mwwTKDpzyl7l", width: 4800, height: 4788, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107300642045757711624\">Mott 32 Cebu</a>"] },
            { photoReference: "AWCwydgy-H1o0lkI4Bes9EiWLnxKWz3SZvhavfg4UAGdg2ZwdVa8J0P2CCebMUE6Kvb1MJQXkD4rkVOmBiC_yFTFoM5d3faI733hxy5Z9bFA0YmAEAwVDxsXSP2Iq10BEGLyBzxA1CSmTkFpRcwcqkjaL9vZcXPjy-bijpj9l34RoLwuMiKDNIILL3g8alC3vO14cNKHY-WbIchnl1kdlPtsDszqyqs10IptRdq7gqAxZNWs7RQW7cUBphTKZ-jp_bpBgrRI7CtSZo6xSV9bHaLwqMg1tmq8qbJw9bkHKtd7oBS3hYJNxS4XkZPQ4IVdKub_ly7MPxdak50rO-xNwDhbfrHJzxWX14f8UU_1DOcpiCQ6mb7o4t2eV8KMjLbU2CHHNbIDEhQmQ_fQKKDLUCkVlp1JxlupczfPZCZDQME2G4CVgw", width: 4800, height: 3201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107300642045757711624\">Mott 32 Cebu</a>"] },
            { photoReference: "AWCwydgLYUuJuIZkyp09AITrsc3XAaFutl3OVDpVjVii9zJMQ7eROXkLXy4engMFfg-LwAHnX1RVrfuL6pU7kY-RLuiXktlZGJchiHLxR8ojjNKeA_hmZ5EahAjFwtXGl7G0R9dWDYrgFtJsw6h-1b3oVLbbbyTyl_vdsijpMWeTGhVd9UGOVvAOB7ZQAaV-FmBP69bW65pw-1S_7VByCfvf_USaNdlSoWKhE-KpEO3oA19Og2i2y5hVrKkfZdoYYU--s-E-ksPhPqX36yCbHbGfkCXd-vICiO8n9c8oxl-MDvgjTOUjjtkEfQVrmMNKG1Z7qyXMOGa8wNWq_UgOyzvh8Eza7PgliVbKyb4PTszS8MP6y9tYxadaDB8439zDGw0cAYkYWKL7bCuYkOzItD6unia655h98q_Rkcbp_5Oq6Yru8_PINIudw7aLi5MvpUQL", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105851941739646172352\">mango king</a>"] },
            { photoReference: "AWCwydj_XV2aJcW9n8YtfL7CB7SlBm6Y7J3YyIKc7BWg2VxO6HdeaV-KipuhU2BKO0fL55X87Bc9mrfObBA1ss3DAzCLMRZsGlDK-01k1demKHTB2m6psx75ye5Utsc1KGZ9Nu7HR42gbFXPdCw0xJZEwga0V2n1o_0G8_8kgjYr69uVvibgXBYyfMZQhlpQK3xI4Hsku0lSXU5_mYinyTn071fomGgxWKgJalDulJ3sSQOef5OqpkumUktedreXxx8dsLNnrXQAq0tu1A6XXt1rIDLTTEDC-fUTO_OQoK6lLdrZDS30hcZ9PqC9GLf3KLHzBQSm7h0o-glKzMFnDMStzhr4Cj_G5xF0JrRT2IcpNLDdypEj0gBShGUMIXoKxQ7aQVg5qzJEBc1bGHinhrt7q6lGx1vs3Pl-ZAV856qFaUJ8CK6tShlIkrPv7utixFAF", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101724427091422792246\">Krizia Ang</a>"] },
            { photoReference: "AWCwydiWH6ffK1KiaeSmwV1fYs1iO0ppMg5AojEip_NcPFMO6-lrGN5RDbuhgsNJMcjQAGo9koo9zcUN16UtiOKfCcLqK7Ff58_I1Pk4oQ64fI4GPZEXNwRSPqCBaDcJ30nPhyJ8Ed2DTJUgEzfQ_1sBHWRTe-xTbSHDCvjBO8s_-QbimbkXcOR_vmXdFpF66ocRww0oh1FFOF0Qs5z56OZquBUBh9ItTCFfXIj9TMxQ5uAV7xTdYQqTSfGspV68XYcyWrjCqXvTke2mBcWGnPNNaX_Qaz5XfRgoeEjUibLzI9mfQXIfQEZVnNjo_NMdE2smR7jBxNrZAV8X0NiLNj__mXGN5BO1vQ0Risl_Ye9hrZqgm3A88U_jywXsAjj0Lnv0uY-BePYwa6N_gFICrT0XBKWilmBD-vyWeOvo4P6R_SWDm3p20bKIyxNnEODuECs0", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101052349955388588366\">Ellen Chua</a>"] }
        ],
        summary: "높은 평점을 자랑하는 NUSTAR 리조트 내 퓨전 중식 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["NUSTAR 리조트 위치", "높은 사용자 평점"],
        tips: ["영업시간을 확인하여 방문하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "퓨전 중식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:30 ~ 오후 3:00, 오후 5:30~11:00; 화요일: 오전 11:30 ~ 오후 3:00, 오후 5:30~11:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mott32.com/locations/cebu", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16864964523150476388", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%AA%A8%ED%8A%B8+32+%EC%84%B8%EB%B6%80+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "와일드파이어 아시안 퓨전": {
        photos: [],
        placeId: "ChIJpVuZupOfqTMRhdbef1Nuh_c",
        placePhotos: [
            { photoReference: "AWCwydhrTDP7be4e95rW7BwsXgNrsuDPLzt1rRGFnNScZOs2coK8On43PxMAVv3Pj35jJXRFLJJKmXp8vLzTWWsHGraL2bds0wo4eGaZd3Qe1H9hNXD3Q7YaRAHXzzGUi_2qAJfOko8szmatUAZp1ve9F4mQdgxmZyQhW_bL30ibRlIhbqztRw9pN4-lhtgEo7CUtSVPyGQeIG_BWeykNR5KSpulIDmjr-PckbFEXuYilkQHbYgachbwow6pMqD5tirD0FlbnzZfiwP9dCM5GBXCn7AaIyqKhUZ7roDoe8BBForTh03eL1-ighF06fUa12KPupgbGmHT6SY6epBVbwf26n5XfOQQweG-EAoIfhIQ3JjHpKffZa2XGYBiBfjK0_tjZVA2h4xvLknpmiayiRyOx9rKodM_aJviZn8Pkl_75NI", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113807399758477814658\">Hieu</a>"] },
            { photoReference: "AWCwydikk6VIrv6fJLCLdyizIrgwyBgMw6Yv2KOHTOtX0ibfST9CcQTMn-l-x-rEvoc2fpM_B4i6k3GQlb0dyF4cD9qXttKNrpyCp9tIMWz9iEMRjguJC0a79XRVD_hPIj0yXVzj5ETQZpedzlXiFodx2T0AjPWyNe5ZBXQvfo9YYVLRJBGXBY_yUsOshv9XTAsyQcwCSO4VdhQo4R9Kk9_1Dqf95yRfCMnTyIF_b1YGEN2aRwrqD0KYycUNquSTLeJ3A5sB_GRQVxUTsyyctgt8VuRfaZZKN4-6T0lOShddI41Edo28Nc-CHEBsuBRXNMfZp0_u8pxAWxzNGgBkM42aWN6lWYnaOVcelx-V03-uyrr32HK7cNrHefBlPrL4pZZRfHrTq2GmTIDeKcmY-Ra3VjaAqwmAwhX7uVBrJp0KdRd9bQ", width: 1200, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115880881841457426265\">Wildfire Asian Fusion Restaurant</a>"] },
            { photoReference: "AWCwydhKlFVJO_-gBshg1Y_zf776VvGc_9f5JN9KvOaYzjjNz1hvyOeLqtLnHRLfFmIAHVtWi0RMRPEiuQ4ygcV_yHk2pJdavg-dbCSpNktorOleNyHqcQpekhmdHICNRPYxpkQXYQokp3TPJO6NYtd4xKsjScJO0AY8L9WLBfH84ZDYIImTwM5Zg57elxz9T5NoLIFfhYAYIVz2RNLkD4RKIwzeAonsgLvzuedMY6mv1vntk9U7s2PKY_iwsY-fSdjdju5zTJPACHc0n6EvkLJl2MEOpmZ9ObpQ4YdMZteGgBSXpxQTNnhss9H0w8kVfCqS9jEPksUl8X9_5ZCOaULfrGRJ6wVWMDUPDYyr3tNCL8WqEdUB1p5-hmFCUlKz9C6t80mbSQRlikThcLnbVh9INI3dltu9HwrLU868CtPJiomG4ixF9w8_tF7orv_WDw", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101495739748214141780\">Анна Леонова</a>"] },
            { photoReference: "AWCwydiTmSFEqEF-QfBj4p4UULRZw8p1NWVS-Ce7z4rv8Cfi9Va1GnrKgz5dqQFtkJ701JMwlugMeuoO179lBcsnEmwSnlZeGf0zSt0gklnWPm8GMwXb9tsZc-JzBxjsPPMJm1NFaHRIZFb4gTw20hM3N3pzOEFZQEyOmkQwPq1P-X_8H1xG7tAs-DI__Pcn972jeKWvEXU_jpE9bJ_sYRPwZmU5l0dA3KbDW4CWRac5LVfBiLxVn4GJU4DTmhmWhF13FR5_d801W_ehnJtCsU3eThRTISMx8YRM8U_hKezdhbg_AGEiTcMBNZqfAbF1FDEzbfPgvE-TuxzbCYTUzEr3d_xocg10S5OhRgGfxdl7CrQJ5psGq3Ib3w1v8MvfF8unAbNZBhqgsfrq0jAjI6xmvhgUiFnXTx8sA5V5GmxFaaAU3zRKoI7LfTbYklLB94NM", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107639149961089012095\">Aaron Nuñez</a>"] },
            { photoReference: "AWCwydgN7r1T5_Ae61Cxc0gqKQxsPIMH3s0W4IYMnhgGHcQWTIQrPfbJWHDpro2Bb4H13Y_FnEvBILyGJidVbfyoJ1o4BcmR3cJvOZlSIZsub0fPiJatd5a6g98qE_1FW2RseTo3O3krps2ePo9ScE6bQelyMiNbSPPFDxZ2EdTFDhIoX0KDDC1Qq2ypIhrtI5pWn2zkg3isiHL5D3m1w0l-y__HQmf4SvxKRNmJXdye7kXD5NAySz5q69FT68SNLoqjJNoJe9ktVJKOIGglG-GhdcFuk_zZaca5QWovK9rUvmBjjWWqicOrOuWSxGsXzm0zdx-p7SMc8-ZP_XFR41QLJLmM_MWaB0xmB22lpsZE0wBBtbdILc_sxR8YC8ZC4eB6fWN3Ws59V3P4UBLOFzBk5L3IUo88ptnul5gqVDrrG7BoTtEDck0uU3VI4Qd6XASI", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108042915358161693519\">Kentoy Galano</a>"] }
        ],
        summary: "맛있는 롤과 오코노미야키가 일품인 친절한 아시안 퓨전 레스토랑입니다.",
        updatedAt: "2026-08-13",
        highlights: ["맛있는 롤 요리", "훌륭한 오코노미야키", "신선한 재료 사용", "친절한 서비스"],
        tips: ["오코노미야키를 꼭 드셔보세요", "가성비 좋은 식사를 즐기기에 좋습니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "아시안 퓨전", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17836346154130790021", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%99%80%EC%9D%BC%EB%93%9C%ED%8C%8C%EC%9D%B4%EC%96%B4+%EC%95%84%EC%8B%9C%EC%95%88+%ED%93%A8%EC%A0%84+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "더 칭 팰리스": {
        photos: [],
        placeId: "ChIJtx9VOVSYqTMRtPueV1rVg00",
        placePhotos: [
            { photoReference: "AWCwydi6weuD_52yAvAAhIfBl8l-ZmsmcnmV8kX3xb6J63zcD3oUesop62VtUtIjJI22j9bX43seRHeLR-9iPxNTQ4tIe12I1d4esmTavCnsop3HbDft_VNe321KDOyIhztvGQC0-tHoz8Rv3xqzvCn0KsTFynZWktT4UkoX97laDMuv5-uOraJ-Jrl8l7SvUf4lqAQIzAqbPtKCsoY0qqcN0NGY9oEBYvt9Ym5vCwDoEYDjzFKuEPbeaa1-HeNmrPrdZUy4U_DmZ23GJWK-IVZCa5fbWc_4d5wC64iGWcCgPas94Kd7CihIoLVRzPQY9nUvh_SJTQwzXK0Ye3bxq9ecURvJet-S01v-dTRMokIhXqtK7FSzxsZ0hKxm3n6zBQ-aze6kfpeErX7De43h4xjcTEBbPaBFwAe_0Od2eFknfv-cvSw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108404054131246693987\">Michael Chong</a>"] },
            { photoReference: "AWCwydj3AbSFQTZBqojZ39scuRFlRe_FikO3MH7rtX2JZLykiD6YHtsw2udfEph6QyVDqkte_DEaC-4AI7sH1JoCf0_rvk3pm1wWAYfoWaz59CW2YxiKWW_bGeygt8uXqC5jnc9-19YhXcKb117ELCxURZR56BCHQP5xozxu5Y181M9fKQtW5nNUcnA2f4pfW87mydb9OWHXi-LqTYneqfWnG7eawDNjZmA2fpLjs0xyZjQp6Wk_Aj2awtNYaW30UwP4KYR7HJbVbaKPxflv6FOTsBah9zFVPJTbza7xwmQD3V9gf6GYglwBpUDGNHLKQevq23nuFimhfKEhU_36tFBs9RCO9jy-RNLHnWaNQ0P7MLXHzdRTGEFWMvFqODSf0XCCcLis0er1dmVUD38OPLkyNyN6P2eqkYys8EuPvuQ4CMzvdHX21fNa4Rk4iSSjnCYa", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102579128704877560996\">こばずん</a>"] },
            { photoReference: "AWCwydjDbvz7bs-eF7DxVHb9ORwgHmZsAf12KHginShnAEZuBKnL4-UF5H5qI-HDYmXLm_f5LHHGWYSjItlxkEParfDcJLjxFiSMeydPLA7-3iBJlp5IsCi96KzVDg8eURDLx9NXAe3HpfTueIyum1lm5-8TOL5PzmlvAj2O3mQym8OMEmd5_XK55xjXFBxT9zGfhQrGrduFPwiWhimKYXn7wMgIzWIygdALRtKbtlYoVxgNv-xtph2bmRwd-xPoMVuWi6_ukXxGNT4LjqzpyEE4zhiF8MbKzfcqgZBqs_SsKpYQPTg291_D8u2aP_UsQ--05ZYHf5SA30G-BhdmulsoUwf2UBR_RGvdTJknE4raWIVyKh8uKQ2YH4-LfxlmV1fGtNIGKfCUcaoob7cRM-WU59ouYYrF0W07TcndnlfpAcudpbM0SA9W8b-_cmi4Rl1h", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112266949363632643693\">ひろひろ</a>"] },
            { photoReference: "AWCwydh-nVQqKk-vlgeX9eTzXJySpst87RKSb_JdqfY7NSBHdxBttVLVpuj4RSYMTZq0bZTr5dxEx11qVJ3-D0gBhi0ENYOPYmHRONqPYVF8xxGOhxsFDtv46NLwAEjpgSnazsMiQy77FbSlFhPes1-WPzrLdhJJB32Sr0IA0WegPQYRheB-R4GMY02Ph2vDHD3ofiq7i4-mrXfXFacmdMhLmkiNk6X8Pbj6vbtnXEzmWpYNpGSicwueSbT4mrqVKyh6_uhx7i-5rq8VkO-zIJA8Sb7j1O0ofmFDPVwTlbghu6fqKaVFG-I4b5qUZLDpDXL3MszmNbdE6vAkZN6PTxDemQ5lXZEMX1Pg8zJjQgDYmB_W5VetWcsEjntdx7bMm7seHseo3xbnwXGOichT8aq0i687gx1-UghHRYthxt6YNr70-NmZh6TXSwI6asNPdbWn", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112266949363632643693\">ひろひろ</a>"] },
            { photoReference: "AWCwydhriq6Eri0dhbZfijxQkvJWLe1eXb6OJ84sakVv5f67SniE4Pn-LD5e3lGml6DExb0YUow2X6HAnI0glId_GEZPENPuKPsfQppfeCMaxtKwzoNs74_KOdNnhRC8pKHgzO13MZAMah3VjX04kyRrxPl3IxWyxsN5jDFb70vkfYHyn5ev_qI0qkW2CksPKgjEC2kUCSxp7R7wkXDtCU5-mlkrbdinmd9V-6H4ceN2kLoZLsJBhOmnsuuGrcp3BXrpNxX-X7E-2fy6Hl5LYtzMbx33afotrdW47FhqPJd49O9cAVAs8butnjLhZX5LmSjGXcboztsDwVdN-JGtsS85hiHkG26r6Ekp974OVzwZ6uZXnpQTB4aRWDDBd80uKNBMk5bGNUW7axPkubSK0aEEiSdCVcCN0K4ora3P5x7D4_pukiXPoxcqAbLEmLRtEWIp", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109080203129065685942\">cleo C H.</a>"] }
        ],
        summary: "세부 시티의 인기 있는 중식 레스토랑",
        updatedAt: "2026-08-13",
        highlights: ["높은 평점", "많은 리뷰 수"],
        tips: ["영업시간을 미리 확인하세요"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "퓨전 중식", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 10:30 ~ 오후 1:00, 오후 5:30~9:00; 화요일: 오전 10:30 ~ 오후 1:00, 오후 5:30~9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.facebook.com/thechingpalace", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5585542546863356852", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%94+%EC%B9%AD+%ED%8C%B0%EB%A6%AC%EC%8A%A4+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "7107 레스토랑": {
        photos: [],
        placeId: "ChIJG9_J88ShqTMRf3LZ4nE3NrE",
        placePhotos: [
            { photoReference: "AWCwydgGqq-LQCkBp1EIVZX_RYVfNCXmcGdnuU2oTaLfS3b2r309bhA2Kz8CyI92VN6z06rQYYLXJ-yLewBSb59izp2GIsjm04HnBrMlu8Sw8xlVOFhOeRp5n1bOYL2cpOXLRl908GXxmNs3RMFLuaTvtxcJ_6ZBn2JFqaFiLaXWMeza4HAhfax52YZaOIaPxTBBp2jiEHh4XS-tVbzU1FcwYfiOCgf1r-5XdnI0xkk1Z0RTeMEf2TSg_FQzogPHdAvnIW1nJCtDrdNJ2YpUVpfK-Y7i-fWQfiA0pdoe5bEHvz4ib4iqSQxn-uyM2FTIOiB7yzdpB8E3sa4AvgeBICqPY6pF-fmEf6k0nmtTQK1PAO9tCr4NLWSb8GA1zrhjtQYjo9MuRGACqVlkAST_k7gEoXePrldXULJEZmL5PL6U75OdvhHEbMONSmdTRSUi6zAF", width: 902, height: 1600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111434674153417600571\">7107 Restaurant - Cebu City</a>"] },
            { photoReference: "AWCwydg3uWI5x9xaY7fGVPg68uFaW_waP-l7ohTom3x0-bDuhz9DA5sn64pheD4wEXor8G9C9qStOPsQLKCbTFD556-_mAvhohF2I1vcQUpCjiwdV9NjH3FXaU1E0UMUhbTavEgqU59n5AMSzk8Yro0HZkPpYTvj__OXhBAi2cxXhwqFSOhAUXIOtDxsFgZqAr_rCBIRDbRGZ0FivbZMLlVE0TlaUowdceIE2TvJ7eHMwOD51zwpv4qhpFjeOO-H0LiyeBdCOUUuA8KJU6z-WHTyazNjJr7eP2VK4IMFSadXsKqmwiAVPonv5dY7FOYet-bzHn6UEXC6-eCDTLMvLoq6ZNMlWn6g0nXCyiIv5NzpABLaFqYY5PyOXSWRyE8BUx1wm-uIMweion07NzF4Vj_DaU5L2-On94Cu3BGXEK4rQB5FLNqBMcxPFzB6_5vA49T0", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116449334147092973418\">Elina Hsu</a>"] },
            { photoReference: "AWCwydgb3d9WO5-svzmFRXgG91GJHioym5pOGeXhIXtGLSkuKXO-9PGTC9gzhg_Q2IiK-1uweMCll7xt357HsW9T0ZThi6h833RgxKcoaxX-PCbx-usFf_Fne6iV41UtO2-P_Cmret5wbEpSA7wctMNcVJCwocN_eK92dZPxt3F_56dV8TP25oh1Z2EheWPi61jyNXGDuKUOmq9DYvk_ujsstVFwgwDlYx-bUgUFHzBc4_3fETgRijcj6A0lG9rE2osdBgrzy58TSd_-bZDpikpq9X_jC_U7WcoagVuOGgKj50TkXdeZfO1gR5tI6npM7vM6jubWD1ZZ2sVpQVWdVnE5mTfb0ZulIhebb06RcyNcnXcxxwCMo5I4iK_ls-dzVn2a8VDCQGviDMKjIqSpVmRBdm9eGn5yYG0m6Xj1_neBQJ_wAkP73op6bka1EqShn2Ra", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101292723919436967868\">Jiyun Park</a>"] },
            { photoReference: "AWCwydiKbmYlw29SKzQ-BzJAJa-MK3GMZFS0tcPj1vB6IIIh5k-rd7c0-pWXuAu7v0UUvJH9XLhVw5QPG7HaBHgs5ZevX_tjsx9gwezBGae6L--Xb2rX6HmcxmxEs55R_MPZslB6YCCEgpMeStAjj-ppsmiwCeypWsOOxQs5jFKGHv7fMh5w1W4uPx4YUHfP1T4GJcM6J4bqW3BhEZwSx40p-LTWwuCi0qyTqGF0n04eJqzc1pwljnl_xNJldNzx2kYBOApiWt5GzWXJ4dYQ6q16SbTzGjwu2CPLHRclYogyfm87YPUg8DybV3NwmqxNPkC8ZVTLTzgNT3F9_DlAsqnDDbLY8rV-HkVQHW-ckBFxhZiUH06Yk1sV6Isu4HLvYRxyM6HfCbPg8FuFXnnHSHGGn2rywjv-PP7caulysVQ22a85yhW4OPO782XjQtcbPx7-", width: 1280, height: 960, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111434674153417600571\">7107 Restaurant - Cebu City</a>"] },
            { photoReference: "AWCwydh2mAFC5aYr2tdUHoGSlv3P4Htu-CXiZglRJAG_6BRYqGbgv6YMTjlvN_KGF9eqGH0B2idszjv8Fj_5XkxTFBpJOaC3H3C8Ma_6AhL4A0FwWpmctZVXA8KNCNXB0uuNgJtI4tl6lKe_3lupj3u6cVx_O02_h6KVQsm0BkqCtxvA2sHZZcb6Wm-fSI7nORD1f1SbUP5XdVqdlX_TcnkzK2V-p5ZH-_5eHmKY7twQiXsxh5rjjmOQim-M_R4S2IppOkvmYkEz1yYzURJMQsQ8qbbnR-FFNnoUyHd27nS0wEYmJE08slajQ7r_WJHxn6eqlSOxHFNTdRVAgB08WTNn81G-BxS0BY1fImWCqdIuJs-6cZZEWPebFLvxi4jXjoFeMc5GnWnTMsUUYI82RGkXOpGzDJT8Gzu_fPKauo2IjSUnZxoZ8d0a3zlR1O6MwwYa", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106958778344797175455\">김현서</a>"] }
        ],
        summary: "높은 평점과 친절한 서비스로 사랑받는 검증된 맛집입니다.",
        updatedAt: "2026-08-13",
        highlights: ["맛있는 음식", "훌륭한 분위기", "친절한 직원"],
        tips: ["재방문 의사가 높은 곳입니다"],
        reservation: { required: true, method: "인기 시간대는 사전 확인 권장" },
        menu: { signature: "퓨전 요리", items: [{ name: "대표 메뉴", price: "현지 가격 확인", note: "메뉴와 가격은 방문 시점에 확인" }] },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        waitTime: "피크타임 대기 가능",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12769454755732353663", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=7107+%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91+%EC%84%B8%EB%B6%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
