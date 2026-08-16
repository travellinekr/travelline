import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "신사이바시 파르코": {
        photos: ["/images/osaka/info/shopping/shinsaibashi-parco-osaka.jpg"],
        placeId: "ChIJHZ9qxhDnAGARS3udWVQdvD0",
        placePhotos: [
            { photoReference: "AWCwydhratTxqfW8yqVhcGNSdqPXd625ein9WA9V2mGpsdxWMtJNEj76lYo3i1uiJse-qEVNzJcNBYPxds2h8m-uAtsDRWgeKBEaXP1PP2fyyivDC_q6p5NU7P31kSGFpRDbri8RH78mnlXLsTPW3l6FO267oUJPTAds1eWEUvJogVw5ccE-7BfPhIWDejjblbwzudV-e7DwmASZjnHUBceR0JBAkRhNxh9TL0vE3hwe421ZavuwUp0YyBvCpmBnDFjQMVOW-xeT6oJIkx4Blq_7gRolucyYntCIFZFNBWvdbgL6lOnDf3l62JiGJSKHTvrROZi8ywVjhhzP1ps0VxDYnSDkYuL0vKppKEPiyHfJniqel2iscpqAA0nJbYCtbdtVKjKV6w8ldgnhEK_XXBixOLuX-GLOP-Ub-jGKf5JzvZezllSE", width: 3060, height: 2185, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110234670538930432204\">心斎橋PARCO</a>"] },
            { photoReference: "AWCwydiSrXBlm4RLcWXx4g2LYRBR7vlAvm9oYx_Z1YWcudROw7GtkwODEDqkjPb3qto207Zqw1ZYjBz2FOmLtMfGA-o0VdZVTCMWIzp1CUS-DVdkNzb326477AJHfVFbDn40WSbPd66P-Ts7VAvEn4TQ_NYisC0nOydt89xDXce5IFueD2ESPbQ4foxRS5iEZztuZ7t7j_4eXkr2-GeayKN2epVMQwyX-wQHex4kbFYez4fPsilrimpSRzE4XSeg5D-gvx7JmrbQYtiofW6jTI4Nn2qRzUAgkTNlg76AoYJmu4hrPH-D7KGXG7udJCyiHrI9zyKP0oe90fbasHjsSEfU6FKvag8zt2nwH1BelWHwcVSYmG21YoW4Xam3E7huWKXFPZ8fycPiPgXb2X7chOqNjZeiRxcC26m0qE21arIptc6GqFBwg8dHuQm8R7Ist2gA", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104662520318327738246\">Karina Robles</a>"] },
            { photoReference: "AWCwydjWnKqoMxY6seWMp0v_z8mwvt8Vo7BiUUsgBGRJtE_0DWG39E7pD9oqbpw2_2h2zbVB3OVpXxb2-lE3oHzHvMA64mcsT10J9VspRVO9Gv-1tZD4yBq6kbW5LKAAgCpUTcYEWSbreKCUh1GCJmIPX-4WKu0F2Jw89-xOrlwIbl8DM8b6A0F5elaFbig62L2mtVRg4__rN6fVfwqYFOXdi5UWvgFwSuo7aeagB592YgOHZ33I4UasaC2FebE8On4pps9ILM2nZOOSWnwLtLdBNF8DvvRjEAdb_DKNt_Ycf79ZtS-3xOEBon-GDLcktNG6RzGLjXmzcYzLpNzvIc2fofV7mN8W-dU4GhXptXvlyirmmdUf_i06zIxLRoNzJ0DTYJbxT71OyVDMP6E0FsAfoj0otp9jP6_Vd6MoHH85Lce93nxguEkdjHjUFQ3_zw", width: 2992, height: 2992, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111755142856792240738\">Codie Nicholson</a>"] },
            { photoReference: "AWCwydhhGEuBw5HXExdiy_mv42DQIagw896C4TGa894fmIbY-M4CB9OEw7rFiTDGphLaDd2K9wT3kMn7dYcY-UhLXNkF2xUBjzFf6NZ19nRsds7RG2nbuevjlZRB05jE4N6Az6m8szRg6C3fJDlooGZwJs3f4oDWKCVkt65AH8VSunuofpj38CT3Gm6J8ct1Ez-6qT-hDeUTUbzMHUZyu_oRnTU2BXtzhr4X0fi-HGkDz79McAe-ZYVZa8g7JhHDuYS1gFeOVTXow7i5BzXHkgmm50yBn5Mc_ZwH8QvT_EvoTU13xSwwqf16jqSrSYL9_7h0_vYfu83vw31Rs7kavB81EnZCdmzmKLiFoBKNv-acRjZ_8x7XEx22mQz7gG-vNUbxywSlKPo1jYRg1d-vew1CHZYXGueT4ivbmDqW4HxSRvou9w", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101615812478717083938\">yunmi cho</a>"] },
            { photoReference: "AWCwydgtS66lqGqwfD8jdwsSsoKWF-xo-dY0XKWu0raEOWK-8F_fxEdRt_xi5kQYY4ZbFOmuMMiwfBtjQGKNwhVlAI3ED6WjgfVTz5ayuYkHzoPJss7DdfJbcGc46q33doqIuRw53SgVYwzZ5uQX4OQ1K44Jl_CQQIDMSdmh0tTJrTv4_WGafZq4dblu7BSv_PiUX2nR8XqbckI-B9kdKMnZcfXYjWwszrN6ozOhA-nD7yd1bj8bwfLEDnxMPCdJJRN91_W8Y77-GumZAXU9-B6-bmTJGEgeerv4c8f1KFGU-28Ii478NNMUW5AjyykhwVrw3yr3bI6lo-WdBzDi7atBVqHQKc_RBUgTw3x2Y9twRznZlJyAgAmS6LA4XGuW3N4cWrQtbqHdevvAavKl2tnyIuvzH9RtyiGlSbzsK7u09me8nGCt", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116272767814861166883\">Satoshi Aoki</a>"] }
        ],
        summary: "파르코 신사이바시 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 캐릭터, 식당가", "평점 4.2", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://shinsaibashi.parco.jp/?utm_source=mybusiness", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4448462780053158731", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%EC%82%AC%EC%9D%B4%EB%B0%94%EC%8B%9C+%ED%8C%8C%EB%A5%B4%EC%BD%94+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다이마루 신사이바시": {
        photos: ["/images/osaka/info/shopping/daimaru-shinsaibashi-osaka.jpg"],
        placeId: "ChIJZ-xhShHnAGARHwpJWTM60q0",
        placePhotos: [
            { photoReference: "AWCwydgjOomWdftLsxGXim8KZ-kFtJxz99ZP9HiF2b-h7GnMwXan6_QwjXKKkSmz9Hs6lsdGAmQ-jpV458CUZLhnN8o0BtSaAjN_iEFIR4cZ4I4Xt6Crhokplc2vfaF2ngbMYZzPB9PIfCZ2Zo-3MpTGHjQ6BdNR6gkxbmazwEKF7He4Gd7hDZmT_iY3-dXQtqIH-06zEq_msqWPC-qo5T4Sn0YOGUk_ALSSb_Ta1oczh2GCZwMaBWwFr1FK28vKzBpLqZH9AzIQuKzNE9mUDLdMbOmoQtcuxs_O4NStugCUorOLNMd9rDEf1KU75l6QQiZ-Tyz_dleRT-A73be0VbfdrWorU2XN-RjABTvS47P920MvvB2KonnG8rowZ6tgjeMqb6pUrC_GYWziz0Y4IzwiFI818jfm9BG2kdSxmyv0iEw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106217676530332144177\">hiroshi itaya</a>"] },
            { photoReference: "AWCwydiKYWPazf4LNYt3XvyD_R92v7PIePzPCnyNcJKWWKophj_XB6IjLsCWVXDQbFN5GKzgnU5PVVCcaKOwObNl6oB-7fuWEyV1UdC47kQVunF_j-kfoHU71zhZT-x-shzX5Dh5NeifrCc0sf3jKyRUerZ2APt7JkOCwnJfS_0d8bm9GqXhZPSr_TNW-QDqMP3uJuG22zzd55DjQEhk8i-PROvNiFADqmZ2A1417rVyYY6Fr13g73ZH6FmUaQFswRsjM7IakmM8qKPnPtuuJAW8bJxccuZ7nbvui1BcW0lkDUWEeh9_lGu36qtAyvwDNqK6Uixl2XZPG0AQDpORQ-DoA32B3VltqJh1zNCeuP0F2iAiqJFwweP_oCX1ju_SmPX6WsE_hpHMQ332LG_QtIcsFJtDh5tZW_yP5mljoQ7T4wEYdwMv", width: 2120, height: 1192, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116438397003795018437\">大丸 心斎橋店</a>"] },
            { photoReference: "AWCwydgQcaEfKueH5_1SqBvZAdEATZotFAcuS1OiwXpa8Irx0daqDUJvHFq1nwfLlKEhibDzP69KQXsDeBwSZQBHHeFQp1zi1bx_pMs2-Wpo7DUCIM9NSYV8i9XFrWQ64QsaxnamUZuduE9h3bXjAz8zEVHPhP43Cw2lKh1pYz4phkpkSzZ8Vaghbd0ap8aXl9Rv6STK0BR88IRJDmWePRsgjWDfGT-dbbWS0Y-eEkmcrjQpx6Gl8NvdY-YdLdBrpOuaq5XTMwjOsxj34EiNLnpFF2Ws869IAzIaFOgba90bTKbnx3tBgFyB09tyL_ZZtcIyM-Pi56Td9B2RbzCjaSai_oYkjipraicSZJltf0NH_N9l6R31-fBgl_AseAMt1xWGBXuiZzeNC3luF6HUpb8vhGoYo0-M3X9uXon-xZVYjH1V4F02c5a5BsdqhS4cp-5C", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110436777139862210427\">HOoOH</a>"] },
            { photoReference: "AWCwydjGNua4VU0-zJgy3MR5KoGn3vv5uG2qjpw-iWuDH1FI-kJwupTzTRccmD3F7lsGsXzhsL13FspiOhckfE9XYzkRZTMgzBFQcj__OpwFBpBiy4LMm4y-SrYRXzsrWn31pWNE-xOV4iBPI16HWYsuuThxhGLWFpWJME10os1P-bEmStdg533JLpnsD_O61OR0c7E6Z5s8Gs6z0cUJicL2b4t5HhuMiFdPo-s-JcRhpO_qIS2qpZFfELA_dLmzFSWPweNrRny5i7hm8UduVlznSK01XzZZqfnR_eK1OXHHVbDRcKUcSsmVl1ok5lvMKPqdJ6Xgn62SX_MiiCmU1mvVfPYIlPs1LGmb8wuGtAcqxC16YlQg0yhaA27trpgahcIflpPnfM41txD6-pZh-YtXt_sMW6pb4NkXLgajXykMc7M", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113536643584042246754\">たろう</a>"] },
            { photoReference: "AWCwydgW4IL4_MMi7gTe8yC20HkNFXkwOeFmFxVAqSua3YSACfeH5PBnPaaAm9_0eb6CwUOWap3EJi2V89FncyuJINSXg3zowJu1gcCHuJqLoRoNj7AUioggO2L-Aztc3Hodr0ufLU1_sVLKIG-_U8MQm34ssq3KQNA7qWs3mTRl5GqfXu4o5bw1CsTvPMzUkK--jeP3mYkI_ncwQMlgr6YlrjBhH6F92LrdB-iwAJypci1Df38zRMX6K2xdIQcwrHmIxApcKc36ZQgVZuGyA7DNWC8EIuj_whsMkKST_4U10B8MqtSiq7Uqi8bC_2O4YT0nd6T7z0ZkPHJhusZBXmru7uZfYv6ybRC2yDISimSMG0vMeLSWAJ5cb6Nw_uP4D-NfWxWk3h37EeZ1V4EBmIz3X4ISwKAEOHIxUveK20RJseKAeNg", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106990428983252651288\">杉本たか</a>"] }
        ],
        summary: "다이마루 신사이바시 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["명품, 패션, 디저트", "평점 4.1", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.daimaru.co.jp/shinsaibashi/?utm_source=google_map&utm_medium=social&utm_campaign=info&utm_content=01", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12525137505886472735", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%9D%B4%EB%A7%88%EB%A3%A8+%EC%8B%A0%EC%82%AC%EC%9D%B4%EB%B0%94%EC%8B%9C+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "난바 파크스": {
        photos: ["/images/osaka/info/shopping/namba-parks-osaka.jpg"],
        placeId: "ChIJ9RFkRWnnAGARZh-hyWjBhtg",
        placePhotos: [
            { photoReference: "AWCwydjtXuJyeUb2-uGN_dJYItzQu2mr3rsfwKZ3OcA67VaVqj7i4cHRUKXd9mclubfwT656rOWBKZbkX2FLdpRNA340kCFh9yTE33IBC2iZieqnA2neipj5ZEV7R2wU0A4LKw1KQdVcKYXAanMxb3kjzEoG1NA5bkdYgs-waEY8_GsIVqFuqDjWH7VJkfZOliANqkekXCI-GNIbGZJuYRm21138j3YhWYECZIuplF9mPZTiZUzoBsXlDQzG5LX57zc1qtmvZccit095JljuN2NNXobG3yxRenzFJokYZ5m38yKEh5GTZLk4Yw8LOajY0-MK1Ev2mGeGrTzrywEgteZuYAqU7Hx-nYu5Wni7IgePeSaYxxohtfytBqi9lulOHnubOu5jeXpasBPIRWlb3zd7w1JFGxudECKj0V78IDn7ljhOQw", width: 830, height: 467, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104774008825957087146\">Namba Parks</a>"] },
            { photoReference: "AWCwydiXqmLlW1uCQ5llIs7rb35DEIvUlk_0Y2N__VElvSAqXQ_B6pcF1cwPfB7MsjE_8CcGotP44KCD28FHZfchiJa7qle-PXaZDhFKkJVtAqn6WMC5IX8iT0ZH1-wgA5UlyKQEN2B4dDkeUiJMiuxxZ5w3Wh9i8WBGFM9VP87KI8_nc-ixaK7d50-kcmQU8uAxM8v9QOFG-rlHYI31ftkh87-Tvf7pjbOZFEM3q2j_yHzIpcqkLNl-kOK4zAIu_TfzCl8Ta1kCOY6iu-AbWfiWaZbbKBsbCTyzf0DRXff0L2dxzX1z5B0rPz4bft31XCemJrAPY0eN1tB9diUj11-YRONE7N2LjXCjJx0sj73vn_IxJZYTtZ7JJAwVe2hQNv6YIF1gz-TQOK7JvEUf7ZN62-7Enw3o6BtqApWIuGKfUcSTBCoUEXpgp8hQ3xIYjA", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100102139848189581217\">ぎょぎょべぇ</a>"] },
            { photoReference: "AWCwydgRN8-Qg32ak_D7fqWzCT8vCL-0M7FIk1920oTcZNOA3PuTEcvCiwXjjAnuGVhGtvVaN8R1eHpYCyE7vN1f_hic3yra5b-v4zZjfP8rac5eXFXr4AaoASrrVnxSY3Xnu3RjHEJ9W2lRnr-BjXcmWUWk_L85GI2YiSdulQQBgKqwFvoelM5yVSCz_aPFr0AAvZmW_L_oXZm3dNfMGxoNUiZGiepdbgD6Bh2IsALIORTKVwZdbk2B1ZOexYoxNQyEtQ7jXj2QD1h04KS1N6YpyRmhBygPOZ61MF6pTC8_2UjGeWVrLvC97_8uDJjf6EMMFSnQ3LgHDs7qoBxjuA1PnfiByJGeX3sc6uM0t2iDHV9gHOX1HMv63O-HnMnbLDhDZlRrUythdUAV7HLIP3l9Ct2vRQuZmFG0PZNbMbVM9aFY8Y3m", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112874558123118544016\">Kamchuen Leung</a>"] },
            { photoReference: "AWCwydjdBql8XN9CT9db7I3rHclGHS0pz5q5-NzJCcufqgk45IynXSMp4vocbnbZCRc-dPEI5Iq66A_JZ3LQFdrW2uul-hN9wrrFqHqdV71ANFGRsdCkwBMIWyDMAmW7TAo6YKiZ_eKXLfmyU8aD0baRnCuoZ_f3MMZVcmI8QabzJLDvOiarkPMbPyI34lW775oVnJd31lsTGnXKPrzcDJheh3VSaQ4YNI38G5CIW1FofDWUI1yZwlv-yMP2NTL1UGgI7hWhqMvjqmYbiODGdW7_M539dQQZGBjPOGXbYcvfA264NAS2VSMpBA6b-aP-AtBnvjit-ua8mITUkTIrBOJKYMPU-Xz0sugdCtn95aZpyoNPAGk0QwVEcAgjC7Xxp5QJIZmqOHJDz1hSc8wc-NrD_od8wphl0BYWTMS6vvnoQxaT06bS", width: 2084, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103238999438360364803\">松本泰子</a>"] },
            { photoReference: "AWCwydifJQnoTlBA118iatbeLwXPWfKZIwHBdrGCM9hBdpRB--gQYiPr2TRPr3t_QIhztxPeCAlsUxgFROTziBx3tYhrHTLgI3eMMJnii7vvYNDaPizHywbGUqq9Jo8vG7CbqUaip1tB4Qw5E_oWVDEnVzQo_sgkqO8Vbt6lEy0u3xFST_82wY77DMi4q0SqPUHcoVgjZxgrLEZZIagN5wdFeLRFp59eONfHAaaF0b9YltFfpdPvpzB8GKkHWG0IqRYogm1IH8milg2fs9wttblUhknkiydn_KUeZoH5cpOUvVSMRkYUW3LQ5KpjTEsIFAdSJuY0a-NhBWkhvX5xY3V_-keh2VCKOM5Qv_PeDHkM7YBAvzVHZthOTh4TDTaa0VpQ1fAnAqe1EF0pcnx7ONX2WhGMdIUaDWSXon66AkXWkTa12w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107143365089483827075\">张宣游</a>"] }
        ],
        summary: "난바 파크스 기준으로 확인한 오사카 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["패션, 식당가, 옥상정원", "평점 4", "오사카 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 11:00; 화요일: 오전 11:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://nambaparks.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15602370614875201382", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%9C%EB%B0%94+%ED%8C%8C%ED%81%AC%EC%8A%A4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "난바 시티": {
        photos: ["/images/osaka/info/shopping/namba-city-osaka.png"],
        placeId: "ChIJFd5ZaGnnAGARMfWwM6X4XWQ",
        placePhotos: [
            { photoReference: "AWCwydjaISNDaGC9l9nB6Lwvpuvt9au6fFdBa6Acpkdxy4JMye6p1MVwEXDv6Sd7Qrnsdv2cvOhxyJ3E76hgB7k2cX-5CDMlphV9jrZ3sEa_t9qsnVeMQTlxzrjDvaINyjsOjo3rnLTYvYKNhveyqXru_CbKn3GyJZV_DBrii1-NdFgeDaykmEUVLGnq-pUzCS29Syp-PNbPj-fXuxnyH921Uik9dHQm54RY4lUAfy6KQikhtzFL9HqxiH1QJqy33XgCGqxSZ6V0VnI617MfLDA8UerjiKEAg2GAYBeToewrGy5rtMExgizgbcaul350GA5DR-p9luRCwMWINT56aJRlKl6DED5LWEFJ8g0e2cFeHjs3PTb4v4NDZgu0AydiMnRmC3kUg-hXUP20ev3DwYeN4gZXS7v4rVTrE3t1rGyB_QcCGgow", width: 4032, height: 2269, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113110083910370156983\">なんばCITY</a>"] },
            { photoReference: "AWCwydikFLezKpqHMEyvZ_krW8pQS2YHKr4WoAoC0Xzbrwzyk1a6yZOraqCbFVSnogVKTzHoPKtBFU5mBomZO1ijHWMCH6I4EsiGbNcjQ_lABJubOegnmKFWthNfCgBKfhynqnRvTdTZFCBrpURndqjiGq1FnggHanbB-YoZmIUMyMbwDvjuYiseY_b9gnNmOo6UDA0KS5PkAIXJy7bmXOME6_WUjzQZgQ7djv5zyCk8fiLCDaM4gS1QienrbLRYmdf9jpaCILFHr00Gv-0KhPDl72qhMJmvh0s8LEkdsfhlFi70p_6r02cBPNc_iHBE8GTNPmdsQiKWNYfNbRcNMSmklNKpGmfL0ssDowe6RV8XsxygXkfgj4hnlkODVilY6-vnhnYB1x7KVWSp4_o7aJ6Jn6wTQuH7GstrU5PIsmk7ekHn0gdF", width: 720, height: 480, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109311643931219240427\">なんばCITY</a>"] },
            { photoReference: "AWCwydjkkUVh5-DxgHCIuqIXIw5t68aV5KZyc-9cs8-FxfXhWKA8KWCYNDwp14RlHyfUXLoRjyDejQt3N6L_GKc3vm4wq4D_L2jBsrTuAkBufTWjkOomxe4AI9-JfDVXdYpJXGJbLpT_ITAds3PmlX6tWhq2igzuV5u_InbfSKn1AXh7z1sYPwoFM-w84LDLduZno7TWW4z_LiRm4zDLCqplnoGPU31P7QdOlUUokPItHxa2IrbbZdeXRqn2nvbUpLDY3-a7dYtw4h8XIlPdkt_D_3VjJQJAC_cHjvlyoL4T4t3iNWG67FosFOTmHhNvI8JMamNJ57VW2KgSCRrkZcJRiYld6KCSkhXOP35hIXGIPA6kAM1e-64P7P9azFrQruE5Hzhzm9V3fSu6niISGsnvLARZvZwb4fjdcda64zho2Lqom4CpSIm8zXBxl1J--dDq", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110832945885871844905\">H Hao</a>"] },
            { photoReference: "AWCwydjBZdJPYdI3OXxRiOmiCm5KkwkSxkAFCMovZ775IXt_9YJJ4Xm6s-93_qnVDOufmouR-UHSCSAqS5IASs9G0bYQ9hQHUupr-4HaIlvUhVAPnIn0CIWSZnqfyvCy18FYdZfon-boND8QQXGDbtFzdZS5Vvb52ewRZ3oIm3gCpAkSkH-8mgy49jkzBcMYjSZYqTskVe7DvCqtw8_Vg_XX5BGUEGLG3N7D2MQGGXY5Gv6R1dd4VPN1K4uIQs-Cw0T7LDwFk129x4Uy-FA5KwSTUFhPdAU5QH3CaQr5-tdjQTYb7WR5BffCSopzmWFnR97ZUwpY1OAI3KMrvFd11Ad0us5lnooHHGSFwwUhb8TPELhjpqeqB8TRX9GeMk1pGUA7Ocdpws5bsVXEAkKEIDQHGIXmnp5w_DUgWdif0sbAxJlQ5A", width: 3968, height: 2976, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100691706518766430433\">Christelle Frebourg</a>"] },
            { photoReference: "AWCwydhE4UiW8_P45vS4LSVTrSrvJfxxTVlnLh0mSBuLNM3m9ccf3EUDLhnwW6p4L7V_6w9m7cS_QogAArZxmAiypIWGNCMgbEyc77BNpYPcppDGhYghsbZJv4IJZyM7qv2FbBiSGpSLk6G6ionyIzyFXw9SgwWI-TBvUfq31DBAqMZe82Aq0tCOstqC4znjoS9ZnBmt2ROR1KTKW_wHzYpjR1xGYrlTrTnqJd7DlOIkq3hVj_BnbP42BHzD8NXZkdl1rq-0kuSbVQLzkzeDGS-zhrehUjeto7hTQrxpp9864MWX3hy7be51nHLkwM585Buly0vhno6KmaTvo4uqivp_dQ_jB5mCOGoSGez2Dyxifr2AxocUNVN39ZVkOFylsQypH7FEOuXbmnd-mg-xuzdn86gYV1K4iQZwD8Y6a5qdoGhTwQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110911599845922304523\">Hanuk Seo (Little Prince)</a>"] }
        ],
        summary: "패션부터 맛집까지 난바에서 한 번에 즐기기 좋은 쇼핑몰이에요.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 패션 브랜드와 잡화", "편리한 식당가"],
        tips: ["난바 관광 후 가볍게 들러 구경하고 식사하기 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 10:00; 화요일: 오전 11:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.nambacity.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7232209965047412017", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%82%9C%EB%B0%94+%EC%8B%9C%ED%8B%B0+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "다카시마야 오사카점": {
        photos: ["/images/osaka/info/shopping/takashimaya-osaka-store.jpg"],
        placeId: "ChIJ3d1Uk2znAGARTAdQTpymgnk",
        placePhotos: [
            { photoReference: "AWCwydiRxGi1mTEKZ46rzTTTdIaYcKLqo7S4sqsWUtgYBtMnwGb1VfX2HW7b2tNLFtDf9ls_cY77pEkxYKFhPhCplHERGPE-kHGR_s80v4QFdXyu5zSBRld0S0wQmE_OAabEgseQDd9u2x73y703lr18x7Il-J6e3uSA76_bMhsq0O88bITR_zEWkn7CZ9pU6o1vdrAVmjuchedYnkDjWHoVQNvCDlOuXb-VC5pwFWAMoJTIMnZwqOoN2ayiSzUAzixMlMUzV-UMz_9MHZsFwEengc6VFfNK2ipjIL5_O0drBDE3NJwlq1X7W1_C7IPu5eouRh2eU6BpgFn5nO2sF_QMW8lXfvDOBVr3iUKmOWu01KjkN0-cocx1TySWhfKFPfBBEV55x7fl9HtlyhUGSRYU9ip7rMn7sGE2orWnqtFaDGSk0g", width: 2000, height: 1508, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107195440280524530159\">Takashimaya Osaka</a>"] },
            { photoReference: "AWCwydjKQX0j5mEcnHaXfS6AuGlh-9IU_lfifmZorw6OUm1AIQP2ZkQFlA476UTmNBjs5N0AwqefHG5t7AD7wHSMUnRHraqtANlPPe7fyqzFaxeirwSMzX1oIAAFjpPq0czo2KaBBBavk5qssNSFLFztvwTSc7_jlg29wVuJMOFvzUOMBy40alcNhpUB0q-9sanE12z9ZL1_kDmX78QtWfvbecilhU6qoWGGfjdu35mtF8Sod6AiUq_BLuokWfnUOkWDCC6AoqEdLs0Zj7Y8Ga8H6Zhg1LpVjacXCSq6-J_qpCblwAs8KZqB_WKpti25uye9x35LMUGe9Qyu_fd3iAWMSXfgSzODaDVhNmkWnDgHKgeD85OMdnn2NcVTPRs1wSRTq71mIjmygLaybRE8kTar-dy5_y46j0RYavFfSqJRQD3XTHM", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113110785269193509711\">Tika Lie (Tizz)</a>"] },
            { photoReference: "AWCwydhdYdotvnScP0bxCXr9JkOsMkAGtzqVQMSi9Zdnwycvy-p1vJ2BQAG3RxF60FPBERJ7ON7Sv5EzIGdFW2fpkfYX1pwfIr2rfkIYT-wVy1a3OJXYpo0kLAP0ALoEzYEOMu_CbCwb9IxEm6wiO3aRTrTDD6jVvjOPrhfuwEXJndUM36n3aYovyEmfv61pJ41QzEbfg0Gt_TeIfpPvAYo2lO_bYzvh5jZoY0wobzB7iEQWq2eW7gjAgjd_y_gRlBQC2ShIGEX7-AfrGktnPhcLo9jlblgXHb_ru6TkFDogUZHSlQW71wGxedl2wNiAKYVSC2LWwCWIud12t2IwXUCJEXo4KVlEDyKKNriB3EhCoxPnWZfLGsxHkOr5o42qfV34oXuRZRC6ruFoFAwk-Fgcj_M3i14ilclM3k9_uFuQoC2a_w", width: 4000, height: 1868, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104079866272464791357\">김이브</a>"] },
            { photoReference: "AWCwydgRqfMGrQ3xJhmxJS62gPcx3qRUAaMblVKm-JwWWMlWnkLh5FPbuaDsAKpqPnY2HEGwaW3UIvT0Po_mqRxhFjyHJ6TYp_L7O6mDPMxsbyHjrG_pkVla-SGbJnvdpQhnZpZVSW6QoKC_dlT_6kZt8qAr-suvINQ_a5Qzn9CYLVXDyz_ImYFAZmDBccQv2BSjxcttJRRfdWVOCiUxUH_w6fUD8BXiOAEAVyK8akmyxVajn2WkHVp7wwH75EMbd5_b7ofLdQbRTkH3qscKvueZHPpCreJ1RO8G_yPT2Da_GPHAk52sgXutYHf2Kea17M4eMkZ5uwfA7CggH5iTDy_uUwEvRiNa9GDWMLPTLHPcxeo5BxtfKYF4j_XFANCYiIvt7fRij3yFout4VYUI47Kcu1I-loJbPw7uACRUZ-Gu3wRKGnA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103592028156937116807\">Andrew Ang</a>"] },
            { photoReference: "AWCwydgn47nSKUiKWOPQlRjzrrMwXWuKmy6qS-AMMPqBrEGJEZjLMDqe0G2-7n3CL6icaHgxMQRhax39hiUwU6cqjABGPTdQOfeMB4-kChA6Sqr0klzgpPVPjhXySDO6Eg-RTDV4AV3CHAaPIJlHEktKJT3Cd6mjGA8nTWZOCxLiFhE6TIMPv18e_BNH6pPv98EKRjRntSbA9fDEBvq7gsmXyYyINq4XzSUyvmkfbHCs9nFtwbJGjds2iEVAo06nT9c_NNFV0Jt4JUJpjs8VOE0auiVuGug4TMXgfI9rTHUl7yx0y6P5O9o7T4TeS5Wf9kUfSEJ9UWaA67z5BUUjeXEDrIEOfUGVBPa2UAPpi3pe8pO89sbAe37eV9ScwbQiQgYEcD7xEiZ02dP8YEli3fed8_Lvyq4ctfuBHtHV5T3aGEme2A", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105041072232296362418\">Felix Chao</a>"] }
        ],
        summary: "명품 쇼핑과 맛있는 디저트를 동시에 즐길 수 있는 백화점이에요.",
        updatedAt: "2026-07-13",
        highlights: ["럭셔리 브랜드와 명품", "퀄리티 높은 식품관"],
        tips: ["지하 식품관에서 일본 현지 간식이나 선물을 사기 딱 좋아요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.takashimaya.co.jp/osaka/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=8755743815820642124", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8B%A4%EC%B9%B4%EC%8B%9C%EB%A7%88%EC%95%BC+%EC%98%A4%EC%82%AC%EC%B9%B4%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "그랜드 프론트 오사카": {
        photos: ["/images/osaka/info/shopping/grand-front-osaka.png"],
        placeId: "ChIJAQAAB4_mAGAR1alcFGtOaAo",
        placePhotos: [
            { photoReference: "AWCwydgRI-mYD8b0FGjsaKp8net-mcy9qf6SQ4kRWKaFxnT_l-wt_FJqyao4F64IRuazw35Bv1bQyhyCjhxRa2gsezMtK0ewZPtSz1Vz_HrIALXnl1N55YcVnS8YEmAD2jhSFXv_e7HpIGyKVpiGog6WI7P4q4LbJmlcCGOg1-TkVlTfNeNBee3BZgxifltc-Vh_ZLLfz1YHhRe1OR35Ul3NhDi3-0xuP6VKA2dcoZ36CBup-NoYHrnfVRjJ2Qvb0RtU8T1kgKAdx4fBOSQ6HnN9UhZ2JDC6bDbTeEDacKl9z7qnwQyqGcRzl6skrQIecTYSR9GAsxsHrSpea8NCdrfT-NdZcmUD-e1lQqdlfNUSvgVGzN-eJ319KqMZ64eKAoZ-A2eB1W2HaagmhZAaIBiNkdjvgUXH0kAL6CqiY7LOGvWO1_FXTNCqgS5aOsqIrJWL", width: 3363, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113543944676590580886\">otomochi</a>"] },
            { photoReference: "AWCwydiDAQImSmkpz47SXh03i28VIXXQbll9j7W7xk0vSUd9A0JNKTa0SoAcoEUoB0Myv4FRxxxKr0Sq70OcmXVbZ_TIVxNJbnKfpG8MhAzX-fUJwZnitGYPp_o4kAyVB1wcOGzXl_A5TJ8KwIauQQGI7yH_U3vcZqVtC_oGMirDlsgwvJ_sVZFTCKY8lSecmCmfFcfhpZYaM57HHC5knnlNDxCTZuc6UXMILoqR8Ci8dgqpfnPzuaGGt393L9MM5yRHrMYU--HZu_90EVVp7tZappnLSuqEgdS2WN5RvNvxZ-gC3n_KSdXV42EFnd8tq2-TrZIa6BTt00x5pgVt3GEu4sqSoW8Y91LgDTxzQzzstDjNXwSEeSIJbD86Cf41Qz-07LEaRqmtu9wrzdSNQ4gwIySQVaM49d3mUPcV8nMG6_2AggXetI1RBapqcejZI_SX", width: 1080, height: 612, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109238642822895985488\">Nirmal Gupta</a>"] },
            { photoReference: "AWCwydib1T4gcp-V8mdWcW0Fn-KgW1KV-wUcjSIKsQNMpx1yOTfRxU6IMvPrGlLEScpW54H1jSUV4TIDB69xDlle_pnQ4fgbbWPWV-bmrbL34E4UqGgjP7M0XizEIVkdjv-ZynKA5y3vN5SlUHN3TtB8Iy3c-wrP1hu0y30Nm9Gb1NAB02zENbIgwLX-nHmKXuCKTZ0EQvbTKvx-C_k5sQ_IHuyjGTkks0-G90VJpdIfr6sI7unF3P0XiarpycUGcgNHbrtujDFXKcN1Ez-3TW8p5Pk8TPLRspNFul3QPbAiZuGMMY-pF8FPAP4Z8eLIGXYNeqFmtDViPj199iCDCDGGztdxIyq6dfYgnsc1t2s9IU73pIMGs-1p0-y79GyjH6ZKMt92QPHKWzDbF3CuCLB-aSQc6pdQHJMm3FDnSIj3eyOQ4w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101931566015814732134\">秋田浩子</a>"] },
            { photoReference: "AWCwydjAGX1spMQH3UBc0Sj-L5Ov_-w-7FLXVvx-tKpDqjtNFHs_k2db6WOmyZhONSaS8X9MDeaa1VxkpCg3YV4knvQ2mMuqWtn1f1Hij5Fx-MqWWop3dnacF98Q9u9wnKQLSeqGQDAbI_QBCf45ViBjO3CgwCUCr0Ak2ybpthshG6f_6MhfJNhFVljbA65_ereEBChne1Sh5OSoIBoaHJcx4ci5efgSeV6WKCXf536IboCBUIW9asDGHg0CFAzYYJo87faLUJTQwdsIqcFAEFEpXof5ADHIxHRtRX3dnhBK9_zwda2C3IfvI64O8KR4DvgalVOOVuy1W0Ekvecp1rGi0pdI1eVzQsQM_wu_1_vgQ_Wb7ouQqqFIGasvUqSe79eFsXalQrILb485ClDiqdENlmkcjEKlP12w-yr8QBkBrqURPYMN", width: 3802, height: 2851, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111780875091179645187\">奥所雄二郎</a>"] },
            { photoReference: "AWCwydiHlPtCrqAPaqSuNEJbyWjyXFHJW9N4-n3utVEtWG_Xl89TYtPbnxs5PzSDo5n1x_Td8gJeJZxur8sGChnUcStfIxUWjE9SREzbxZierSw2iG-BGd-pDlUCRrbzv2hCf4ZnW1FuiuHi9ZCGotYZW79X7sxDM7jDqW0TMPjs17BNhh-euxyiIZStx59dMFxSFI3aDPXx-aa4DW-z3QJfDbuy-Ujhg01m8-cw7TAX7j-a3-xBPguP_W07dRu4sXZR4sv6be_eAsT7qgKew27ZrYxRi8wrSRnAlkACQMrr0CxO08fstXrRwsI-ZO6P-HXX8bzRbpMi1wrUvvXmkjw-7I8VVoK-EWq7DlqoQSjiKAxnkYZhGK_lyCYjBgr3Aq0riWa3bxvS6U443MsI8qMf4izxKc4P0dYWTbkjhadczfTywq0QL68ut6BkD4Ka2yGx", width: 1080, height: 807, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109238642822895985488\">Nirmal Gupta</a>"] }
        ],
        summary: "우메다에서 트렌디한 라이프스타일 아이템을 만날 수 있는 곳이에요.",
        updatedAt: "2026-07-13",
        highlights: ["감각적인 패션 및 라이프스타일 숍", "세련된 식당가"],
        tips: ["우메다 지역 쇼핑 코스에 넣으면 딱 좋은 세련된 공간입니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.grandfront-osaka.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=749935559767271893", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B7%B8%EB%9E%9C%EB%93%9C+%ED%94%84%EB%A1%A0%ED%8A%B8+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "루쿠아 오사카": {
        photos: ["/images/osaka/info/shopping/lucua-osaka.jpg"],
        placeId: "ChIJ_W6qxY3mAGARSV21ZIJAEmM",
        placePhotos: [
            { photoReference: "AWCwydg0h2UqJAmIU08OMbIjBSmSV9QF_ysqIDHUBMAkBn1zjKWX9KxqeCaBxfWHx0qMJ5190DMJG4EmuArXkYj8KJdbWTvkMY3ahVV-PYPRUNixbB7HAanf6hTQMQAmFYqonvHJ-r2eRbw635AR_UjyFQ5zM3kwAPPAszaWGBWXkRK0cNienuWE2uDFzJzoO6hEdslk-PFbPoogSUuwL2fLOzFTHQje5OFx7Kzxqxa0NARTHQYaHqC2CCAP5U0SiYA_82IOmGY2GpfGJv9Evb4jU8G8zX1ARu_jW4TFGf3bCOZnKsLtKYC57sgUBYDoUT-_NS4lz6RFdUUhLgKCdmeZZNMxgfVPTsQQuTtdP6NYcJ8VasfrK_HsXF-TDFwA-qcHBBJomVvBIRpfdH09O0z5HVF3fjJ3edRx0Q4rgYu0-NpTcw", width: 3875, height: 2906, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101494525268329997333\">月見の真治</a>"] },
            { photoReference: "AWCwydjGX6o2e3I2mkYwRQVTDDDwnBJxUKQF0mYQXCjuSHVwpg_SmJW2w3FC3HmyDZgaX38I8EWLtIYyhvft47Kzp71fHgShrqWe5fimVz7flMraeyilp9l-J3BrpfBUUTbdvTnmWH3A5eHUvyh0M7bNDmO6tJIwn0sHl_s2wc4f6uy8yNELFTsFRSZ9kHadpA2tqAPjVe8wkAIKV02gQW-aaGs00oEzHc_GjZPeVTw9lbhgG7QCOQRgsmuIeJ2qByVpA3z6i6YV9Ai7wVYBjs6QFPcEram1w4_9f5J1wSI1OYcgZPOfQT3pQGahsJwQQio77IFvUpA-73_xbw30g0BYQjmA22dC_GTVlz7uK4hItryqSym93SCjalEJ7HzFeKPjBfOEi7l5XjdzSajtquprr8mu8O3L3qpoKnQCOBlMkEhbZ6c", width: 4200, height: 2715, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102076352061213008365\">ルクア大阪</a>"] },
            { photoReference: "AWCwydhPt4VfMNfks8pk8mDgSDcHtdGUO41uFkZFqxIz6tAyLqP-NQi4QBgtG8iO5oC5Rr2Afo0V8BWlQEN_Qn5Q52TqhuI2sTXlXVlXZkBFefSQqAvktkFRjqi_fH9wM_yV6SfPcPXkN-RsZMHKwHcFOUwVJstU8kyYLmkwXs6SnetAW5c8VDsLJqaaW3zVgdbT7v_yuVG7Kh9KAZPEonGIKLlFAZpcbvlu4NBiJ9uIsTGimxC-lHVU8Kewjn-xSzdB-OxN0kq3cXvLJyAx7Dxq5gK7f2fWpJ1DkbjhQ9_fWeXJtIKvpMiMx1NOqksOSs-W0ueTxDJaDDDljvPcrggO5awIGAOg3ovxqI-fOrQZxOZ559gw_1_R-Mqvj0Le9EtNnMa_mHu97FqUh6tNk3v6wxnItuIjeCB_fY3yqKZd8xUulY799Ml89lGIpPWYTp-P", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105769448393132558794\">LekLek Roll</a>"] },
            { photoReference: "AWCwydjBvkJQkICOyqIYLmU3Qb_q5fdxfG80lf1aHX7k5q_16AtUTN_-Nx5hl2BcmDfHztrTrEknrl-TbzHPkm31ePpqlZ0mcqf-EF6If-_EyJP9LLrKD-4TioH9rsr1HQYIEavPnhx4H8RrPeIndsiPLZ1cJH9l433Fvf6mArjzZ0PBbTTQKQM7OyvvwRZofkYCNuavfXmBdCb9U1ycNKXwjoaBrA3rONn3qZYsszy28YfMg3G8KkpnzEsLxmXpgI1XzV9JSV7ZmJf-uLFONhC1pX7SllRlbc2WAkeSixk2yiwOOVpqEJZjWYXTyePT8TZZcRGHFWf4RZP2SIqk4eFeeRZK6ILNpN81ObLyLrOfuv2LjGShbgm9EklpP3UW3xPnrq2lwqejpFvM3fqhprLpRJ28rgB2BKHDkjQwDijgfVY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112369093748989537967\">tmtm YC</a>"] },
            { photoReference: "AWCwydhWxOS7R1vzD59Af5mMmiggVLeWHMiSdTLLUhtKlHUjxfsgof6MAbRkYGrTi_aEm_fden6vP_5oKIpr4AUjpMHw20bBEK5hVFW17Jzm7UCQkGQ5T7i7AazZhMQm4RJRi7KO21z0YTCKMtbOvarfM16sEEKcD1ZhXM1KzXY19hhKekBcDfBPFXB9RbmAs7tvg1I9Z5Z15SOONg9J9KcNHki_oDEfCE9XfVIYBgoLMmVW58y0Dx9mZcOiPO_7S0_auj5oA_1G-RvJLRmNdxCaPrA1nZjdgR0Gx0VLKW-Uhvj8NlI1cj0pxHipWzdkEWVqcmgRl7uNeina-SG3R9gsHKGVhCZZmFjNltbTq6J5aoXvyHN7F55GVxzzGJCcmF3mSyEE72CLhyolmd9av2L57QoR9qlmPfff-SPYI8_4oo7HnA", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111959507712774424431\">矢田久子</a>"] }
        ],
        summary: "트렌디한 패션과 맛집이 가득한 우메다 쇼핑의 성지",
        updatedAt: "2026-07-13",
        highlights: ["최신 유행 브랜드", "감각적인 뷰티 아이템", "입맛 저격 맛집"],
        tips: ["루쿠아 1100층 식당가에서 여유로운 식사를 즐겨보세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:30 ~ 오후 8:30; 화요일: 오전 10:30 ~ 오후 8:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.lucua.jp/?utm_source=google&utm_medium=maps&utm_campaign=gmb", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7138839288115191113", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A3%A8%EC%BF%A0%EC%95%84+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "한큐 우메다 본점": {
        photos: ["/images/osaka/info/shopping/hankyu-umeda-main-store-osaka.png"],
        placeId: "ChIJ67mcWJLmAGARrUf0FlFtm7w",
        placePhotos: [
            { photoReference: "AWCwydjVv-OFosgwXRe444CR8h4a-Gb9DwI1OWxphOwRndcHCGPWKq2VDtuFvdHLH-RdM1yOCk93q_K8w_lTe_ZleuNEPHdl_yDZqNKw9SBNFwMFUMbIZoC4WWRjA1VbmxaBhjeri2DIAbUOUPoQH3df5rc6PELAVe_XU6kC-Kcyu7rpeONbv3Nb-7GcuSEThZsQFFl23sUoKymgUzHwbmDwq8oQPb1ifjnlDFTf2UTzHG0ZeKGJxcn7Wg0GdL6MVKREa85jrHj0Uf9wn6nHExRDyQveozNZgwt6SsA01pmQI3YvnttTaM5GuoEfRAuxcXOSesS5aDnrtAtT6je0xZgIvvEIRivENd5wy4quX7DCzDz7qPABUiW1akQ6kzkSeWUaPzjNsrONN5LdVKXWKhIvPbLo-fcz7GcvhidYyWb3gxHDa1RhEfYMl2DUuqufnJmo", width: 2000, height: 1333, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103018153199447291466\">阪急うめだ本店</a>"] },
            { photoReference: "AWCwydhHKt_RyWdY_s1oFjA8fKHai6_XYcY_BpBP4_8J1WXikQSsCZkOXdomDTwqSbaLmSVuCQ-0tFrPBumlilt0VjHxVbgxMoL4BsiYBY-FkfAaPptE-Us_5I1PRbLohjzvLfYxhpUP_OnOUh9bNexvcilKUEGlqzAtorOaBSwKEz0_NfwyrGbso8TFyPiCDoiK-oxVUVZ8NN7nylkac9wG54RzHpURxR0ibCWWPM4eBLESyoOxgDayQBf43O0JJxAHYJtYwjmHoRR4CROWAmVO9VisolxswHmSv-RLuolZC902E6RIbJD_8-zSTI9v7puYE4t2aDTbFCUakLBs1PiimJotu8zow0-NJFMZ_H4tGdt7s6LRToVmM7Ob_f5QJSndrtM0te1vWD3a0xK7e0cqoCCbq_g1ovHpJ1oTLmDKZfYAE7Md", width: 933, height: 700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103018153199447291466\">阪急うめだ本店</a>"] },
            { photoReference: "AWCwydgGCTRM1XAsNYGnPox1X1iXP6f9l3xYPzTuvQlwgAyMyKarcvhmWEWWC1Gm0EEgqRD-Ujj8dHbifMOd7AFfHFHeSfLjT6pcBH1TGhIlNHvZl983egOGF7zrhmNpalKO03SQ7CF8yCPmLOXME3kwOaRdLdbRrwOms0jmMxcWsitsWTM4Vx_0gN-CljjZUj3XjQe5gdO4Dw5RFzNYwt20kxIrnwlVpy_Be5YEv9aZOGFiuIYop8hx7lz9gDsFrdFrVuWx-L2l9U7IE0jNTHpG3FcUDaIvo11yECCAbOWi9-C8gGbqH7OrfLEjDEdBoEOHXPlRvgiDnjGzqHbL51GkjSTSqMXTHh7sH_-0u49FWn10icoRUQo8MfI6J8zC_sTmqCPeFa8EG2RpK-WnwhCW45btcy4fiiRTEEmq8NFK4LFindoV", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117588597944083694173\">Akiran</a>"] },
            { photoReference: "AWCwydjKsPEci9ji1YcRMJJ05EUTBNTQa9n0Lp0JCQGzlbD43Zbhd6cqtlMIztx5oAG56WGwmLutL00SngYJ07yt2fcPeqldgN6R0jOkyT_72hOFlziB9KsgecuzXZjXO1hPsxwst_Mqv-mNMDK5OiOIXBZUYUfYXkklwEJ-jj5Sq_RYl5bSmjjP1aNYnUL8Nev_Pi494cpValaWcp-XyOnhQD-z4l9smmLdGHYlQPqtwiYNQJp147fY1GDkSVc0rktPfW-Zp3wEigTdSJDdOIpoxKlVppFCeypwN8SqIWpQgsgQJByCUx2FVNoOD683ITKH_jSYhT1wvMvkGi3gPZV1sXSKsN17N-dgbokWeEZvF6KeU-9mSQprwEDw6c5l67dBQfHXdi6jJGnjbCvkDpUtM2p5VWNgOvhqFryeorGed5wMe_oN", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102932270597020462726\">吉野光一</a>"] },
            { photoReference: "AWCwydiRhIpe4KJ3Ju9rQ6nvKScg8Evv5zr9bevMUGk5B0rk3f8qxm-MKk3mgEOHPIpftIv8gwjQzMgUVh2-_qt5CflYEAWx-LCfbZJF34l5WJCq-9EUQZ3ZM1bLJSNKVsqgwwM6XlRsizbqmbtE1fXBewWozlIRzRhTuV1cbaYM8WUSubYnva1uIv_r39J5yFHeXqG5240DAyAaUdhG0uODBCcQOg4ZvMEYf9rycmBd1xoFYErpd4AETWeM8OXq3kF7zSZodWN8tTschmuQBsPh1eRVUd6uSNU64wxqAy23H5AdwgIptL4SYck2TZVqiQ4ARLg2Y6bRVLvnHwbJ4EYGUrqocaSMxqgEjtLp4NsCZWxy5IrFD5hKLCRMaAoALenRHmamZQ_g6Wpo6OKPs0ohBcuCCKQBVw2pmPU6aKOmAH32GXk", width: 4160, height: 3120, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100251730623188560371\">まさやん</a>"] }
        ],
        summary: "명품부터 프리미엄 디저트까지 만날 수 있는 고급스러운 백화점",
        updatedAt: "2026-07-13",
        highlights: ["글로벌 명품 브랜드", "화려한 식품관", "세련된 패션 컬렉션"],
        tips: ["지하 식품관의 유명 디저트는 놓치지 말고 꼭 구경하세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hankyu-dept.co.jp/honten/?utm_source=hqhtgooglemap&utm_medium=storemedia&utm_campaign=information", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13590576495565490093", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%9C%ED%81%90+%EC%9A%B0%EB%A9%94%EB%8B%A4+%EB%B3%B8%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "한신백화점 우메다": {
        photos: ["/images/osaka/info/shopping/hanshin-department-store-umeda-osaka.jpg"],
        placeId: "ChIJPU3BpJLmAGAR6L51aIqg0ZA",
        placePhotos: [
            { photoReference: "AWCwydg_6fJnrvKilruyD-HjUOGNTWYqS1DkuMHPkAob85mvkKiaN7HXb2u6jnqZQR-uCJ9rjy2n966dnBDsIHLywnHNLflnkpuakF9VZ5-_LOB__IyXqTzK-9bxlEzHJsdQhk3MpKm03QyZe4xTo-WwBM05RWbmus7a0mt7S6YxjGCyNkgAi6entZKEIhC_XAYRkhgH2HHG5gjri93KBgPKmIG-CyHIC8UNWINU0Y6csKU33F28EdgDjNHsypvBTRRXoyb7GDCq2CBGvssJ45eVZlw06DmcCfWKKjuP6VHZRjJuknnDWKutcPpEYpZyKZ_pUvNwV9ErFqMm3Jz3JR83dRnoEkD175Cog3L3aYi53jthCyfkHmbnjG3fJ39v9AkpRdHCSGnlB-xk3_hG95OlJ8WCm7odarwEfkiDjeldLrqF79YKTReslkXNFryicwc6", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100091472295590336682\">阪神梅田本店</a>"] },
            { photoReference: "AWCwydj7Nadh-_bgyup4lIu8j0a5bb-prlw-jY0-BBXW0-_C2gXCtjQQFyoBVtGkF6mE9bePeC4zAH_76rOoTs3yvXK1KbX3u16L9XNUPQ0eoX_tvRSzZ3W0FWp_IsW7cryEoqeTK10lT_fwpVEDztzG5RfGsyBGLx6zB7lbNqni20GhzekIci_5JJR8Mb0P-JppIEWIZw6YnMNaaU6J6lv95VK_dGwwpKCLwN6SxIy6ZKNn_GeXx2hd02F7wFDy5Y1Vs2CarqxFarZLbmTUHuAQZSKDUq4lgzetBL4vQIk79hNR2tsUSSiNKRtCXYpV4pOaylyi355QXsOksxUOaDp5YhANH8YNsuUrXDivrmPNyP5hvHfXVSDwaopoLDJ3dxRTA8npt_IUqp6LuCIdB1dybjffNyoFJSyPs07ytDg", width: 1500, height: 500, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100091472295590336682\">阪神梅田本店</a>"] },
            { photoReference: "AWCwydiMdsONalVPwgVvuDWSHMICD417Nu7bKH5J1nrQmbsagoS74t2jX7Y2a_INLKjOILAJC5HAEXtnHE64T2P2gKvzgdlkj4McG36pIpiqGD4bZyAlmiOwyUD5eXQW9OZhMaiH59CqWgHlIvg2APh4-Jl_JJmfHiEEAZTsXa-7pWyxCbkHd7y_1RPCuPVkyrb52eKyHQSUMvseAYYa7C_LLgEhNMXaTzyeJDizLlnLyKswxcWi4jC0nDaTBjTyz0t9Tl_Xg3o7u_X1FBuK-EkJMJnAuAOL76ZHhtOPqRTxAunzcHtHxIUgQzcQV8kPV5drPgIc7ZaGbvvrDhs7VfDqXIc1YGzX0anOeuaNZNqHULQGgc_bp6ekAFWV89P-9-pTrO_wp4ifEliZ7UVIeBI_Hmd2R_PUkM6s_y9ZeZZ9wj-kjHd59ITOzBnXwNlC2A", width: 1179, height: 806, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104118620410147436228\">9070系快速特急</a>"] },
            { photoReference: "AWCwydjzMqgwUanShrw4q-YONOT7HV1sTxFtTpWDtWK0w3L_UmGVbU5-0Gb1lpMCxZrU6GvriHKJKFXJhu2TOQ4TXY5Jasdu1OpbJTxHpbQAiz-F3_dTI3E9IyRqFsuPFNfGLPchGUpA1qUz6TP6dp_0RuD2wJPak8HGlIHOkrRey5DMtkRt8fjRJM6xOrehm1NIHUMqSSUOMlkwsXwy7JhOOBFF02khKhHChs6jo7vJlPznudPHo3kwK5INSJQk_xCp0727jBGeTiWDE2_H4b5PmlK2JKrucDhcFmc8DjQVCRM9P9-LbnvrkZbuwFhB89x0WGYzeNB_uJCaIp5RKrKsVXv9GGyFxCsu8UeevJErS-ugghgT3lkSqkNJXg3IEjpZIopEeJc8ckIYYpWW9r5giW6U-TpCNI7y_gRcuXqfXyXNhmA7l6uVUAjletC2iV0P", width: 1080, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100091472295590336682\">阪神梅田本店</a>"] },
            { photoReference: "AWCwydgQoU-F3KVdZBdMJlvLFJDfPpd1lya3g-hwZ6DEwR97nh1Vn51nVirHmb6sV4h4rZ-m5kXE4R1hVIu_v6-iWAzP68RcewOtLHKpahbi9VJK2wDvB5WbzLh0wdfY9M6HJkw0vvhIuK71RjDH1QLfkVuHqBoP39udYnrAq2T27YM0NjbATKyqGRvv48ugFssnha7W0j-MSfBrcjoAfEF9efawGoLgoRl7nGuhDucOKxL1sg5e9D21s0DQnMJqI330SzJszI8Jc9zXUt1cCy5q9o9ZxypdYGt1fKhPyiXgGh-DlhCwW7eao0Gnai1Xv25DnpPUbuiZ3Z4GQHPUsjm7uVr-JxzNxqxNDTJRG7WUd3KZ_UHz8kcLbw-6J0gmvDGgiaolmmfMr9AI59it33ZhFDcsc4wbVxCtgeiEi4SeKZmYeTi12AeDtTerfVHy1BX0", width: 1080, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100091472295590336682\">阪神梅田本店</a>"] }
        ],
        summary: "맛있는 먹거리와 달콤한 디저트가 가득한 미식 쇼핑 명소",
        updatedAt: "2026-07-13",
        highlights: ["알찬 구성의 식품관", "달콤한 디저트 맛집", "여행 기념품 추천"],
        tips: ["지인들에게 줄 간식 선물을 사기에 가장 좋은 곳이에요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hanshin-dept.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10435298327912627944", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%9C%EC%8B%A0%EB%B0%B1%ED%99%94%EC%A0%90+%EC%9A%B0%EB%A9%94%EB%8B%A4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "요도바시카메라 우메다": {
        photos: ["/images/osaka/info/shopping/yodobashi-camera-multimedia-umeda-osaka.jpg"],
        placeId: "ChIJF4pM_Y3mAGARtA_Kf1KIKPg",
        placePhotos: [
            { photoReference: "AWCwydgrtKakoP29hDACNdqlBufLUReoKRXEQv0GViZqEMnBjIz7I0WzWQWl5oQEIpxmeUOoq_dsIf3a55krN5r05rK8QN6VC54irMCBzEUh0B2TFi6Pm1E6-6qxSH8TFmjO30LEA1UQPxjLrqwyDFJqQFpV8iGLcfLbaPCuaMlTcTQisHxVax5a3gtSpfYSa3ZRikA11AIc7sQNr2V3_2swxK3xJmwOBkTEm2EGMLCc26d3ZTofkxR-px5NAE8mPW9T-b18TaUbgYLskpEUUKFhcWptb-F7U9e554mylLxQN0ieRroT8pqxHss4fh7kWb5QoPvE8q_GXuzTfLS_PcAFtRQi3FU3yYaemug1k5LaPJrqyT6PCCD74r0J2ERqTQw9XudPMj9MtOBa73BROobmegtgcO8ga8FJTPDjMVaPxdQEOZBFuGE0AIYQtta-IrZb", width: 3672, height: 2754, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105235040510465711825\">Yang T.C.</a>"] },
            { photoReference: "AWCwydh0Mg9mE5Y1obAH_vS7M8noBRG3KzPoxJASVxIDNrJRhpN2QKkfxZ5HMEUvjqNHwQXo_seofR52EKc8f48FuH7wgJOp0hbaM6C55d1XKa2NnCISq_vFH9Gygx9WyVkqIXIr_L9NOvnhAgbbymZC0nOkynJGaUWRIlgjGruiCXMsXItgD7kZYzOCaLqEdUvOd1ww_vWxHwDa2CQnhDn2neYDDVfq-iT5_qtSgyBH97jjpm8dK4rxziF7M_P9kuxbG4kjwwWR3OxUYzj5lo9kfZJAsfWL-ltSPvaMxYV9_azIE-exELR3KrqOsWtrblC8CQQ_Gay0cP05L3M4L814QuhmY9Ws5huv400onGAHehzMygGUS2WB2y4EkZJa8467jQK_AHlvJrniIMyjPuBWKVPLSaY1FPb6DHfQlPU7n3bV0_3dLwiTdNBd9Sn6lg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118244673903307314030\">hai yu</a>"] },
            { photoReference: "AWCwydh_FAMQKxDJK-6omqCxZIY701lRQulvWy7lyYNu6T7ufn3EJNZoZgpfLCI0ekG5RyZ61o6rSWXniGAc9-Pttuv2kQxdl_nm6V_Y2wJkMQjgO3U0-sAZMHD4Uz_WLHGKopZ1nMXJ7Ad2nb-nFhVAwhdH9kiXe-T7iVsaUjlyMhkP3MoT7el0uPNBniDGy282a8R0e3AHnMngJJ5V9E0Y-wAKj6VWDnmEDiEGJXVh1GJ_qVS0eMlINEjtKL_yW1fVjdVbSiCDtb-BH6xkUvSIZhigVwFm0dvgNh-gz6jKhNoAWCd4cUosC2tYekF_AY-Gzcy2X3KEyO-mdAZds9nzNpzo7JSGUH5W1al-9yOItMyq4wu5_fRdaPpTom0U36Qqe5ymGQRSOoGNiBVaJzgGX7_UL_v8F_McjwesfnUdFFYq2A", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102262734455351167960\">Khanh Dinh</a>"] },
            { photoReference: "AWCwydj8Lia2obB_itcwvisRIIeLdcCc22Fxl6SpqXnJkhIzK8VzxbikvrO1D4SFAuB09CJF0-lfotYRJWVSNM0jMsDPRad9k9IP6SmxtXeluLc7OJxR-6wlrAylHUdZvXOTdfTUZMC_tY1ykOpyFtgD1LWI4nsJi2-gSl_jVop2kpn6416oHFmwuJZFEyWhspQLz00Hzls21J-NbnyKCUhTHmIVcouuJMmkyXp_hbpZ__FCAh1DsWRIVtYat7r1hYlRDhYye0y-mZAYp_Grwm_KkNje1tqav2kvmPdZREP7iJdy7WSybHIdfI6iO4MP2n9SACeoLgWiygwTZ8J1s37wHCgwtHGSb0UGHVgc3rRi1CQRzOmFAMhqEoMtUfj8ft-yx3betQcH5DS-WNWLQiyk8HButxknrpUdSNe5YeajIf4jd1aH", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107527457701991976960\">杜の都のウンポポ君（ウンポポ）</a>"] },
            { photoReference: "AWCwydgyFIfKjTvneb6s6bOkckiAkph2jomtgJ49avf-kFDWFI_em86CBIMaVeL-6wkWbA6Hpqms1sxaM7l45Oq_z1yF6wMlTYgJFP1qZ4IV9tCAu-xbMfGupqsqPKq20fQ9tdN5nxYYlT5z4kcfucyNakveFkHP-XhAS0aZhzFaeR3o8BLpLA5Csr9FW8PBgEEymaNXUWQBg8k3LxxKYGFfk7cglSyErEnng9qWHXop07-Qah_Ak6iatcO4wLXwvJnTyZAmLh_2Rwo2CnaZ9WUIJqfLAksFoaKg6U1eYShFkZ271KpfFYpOUdPlBRjrzwj_4uEKTs3b6KJx1NHkb-vyrqMVLkcdPSds6DsA6fV5P5w_RFuN1s5wZdXHyh-RwfXzb1n6xrCHpSvWOcn19KJ2_q5CwnChL_uPMy1tvWVR7eLN5_mv", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106710751054782940050\">Disney Network Vietnam</a>"] }
        ],
        summary: "최신 가전부터 카메라, 게임기까지 한눈에 볼 수 있는 전자제품 천국",
        updatedAt: "2026-07-13",
        highlights: ["방대한 IT 기기 및 카메라 라인업", "우메다역 인근의 편리한 접근성"],
        tips: ["면세 혜택을 위해 여권을 꼭 지참하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=17881692208387198900", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%94%EB%8F%84%EB%B0%94%EC%8B%9C%EC%B9%B4%EB%A9%94%EB%9D%BC+%EC%9A%B0%EB%A9%94%EB%8B%A4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "돈키호테 도톤보리": {
        photos: ["/images/osaka/info/shopping/don-quijote-dotonbori-osaka.jpg"],
        placeId: "ChIJzTcpYBTnAGARRj0CBKJJsSY",
        placePhotos: [
            { photoReference: "AWCwydi-OqVGYkMBLB_XcuHFnA7P7CN4bcoykg8ZNEsNq7t0Hu9ma5GLpz5V0lrOi7qm69iAT-lS9UTA_uiZ1n-USEKomtYTFfgZvGORfUEFD1tos-CLjq_w4RjnHzNRS0OzZs9ccofqWdIShkzPaabCy9j5JQMVI9qi39dB-AilFk00vW1xPZIulDddsy1oKNXTkIpCA6oVxNtk3Rg61_Bibxhd3f92yy6Vspd4P9JiYMGO67QFTgYFgPU9DrnfzvFJYvtKIGnGdcIyDIEaMRKXFJsDiCe5FHjyZCfrzyx93307bdaUgY3XmIYdZeL_SZH2SZv7pMmKK3UIY1PMAweWfjMzVHe_zQvVSKWL81m6ozaXlZAqBnk70HlL5Wt8hKxAGlRjFXWE75-AvGVjoMpKYh6CmgKqEkHKwYQ-sineTlFFJw", width: 3264, height: 1836, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104188018179181900685\">David Chan</a>"] },
            { photoReference: "AWCwydjbTEJgdfCBKjvUC6fSXN4_s0ts7fF7q3rKmSrOSyBOT8D1tWuT2WvbEk66mNc0yG8GTlAq8bSTwW1ZKo4FSug7-vA3NTuXgDnKavbTrWhOBf2Vs3_PxkJv72YbabJrajom5WbSVhQKuNAkqZVxT2g76-dL0Vtsa3d6GqS-1fsf3eEKZEoo16kWdYv6UpeM4HVbvGkqFSOCy2zyZH9eksQMgV94bFDQB1VEOm7DhIYmkOP0dal6Q1vwe7XS8yZh2QprY6VSgwAEFsocBd6lLy6fvKP1scHQyi2d1bJ6uxwnLsgvBVaf8bmLqeOOjprigD-_Tljp5WD9CY81skBn30BmTNbuZL2_9De_9HvtCdhvkoYp3fUgdIbNEuDt3R3OYqa0aOsfoKi-VHezUQAvXZofh7YOpWjoUdqPQLh1dzy1XQ", width: 4160, height: 2340, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117587098194611930000\">GT-BOX GT</a>"] },
            { photoReference: "AWCwydgl5VEvlWq8RZsDO-K_0ek7ABvyyRANbEsmdYZzhwsOH5VPnNGjR1r1tWKA24cuhNonHqrhDXv49MxKIn01iYCbzO0lycEbv34-iMLGI92_RcerFwYM-bdt7sTPCwTRTCzbviEJHc3E0edVn_fY9if_wabBDlr104HSpA8-fnCa53UmOZUONQE5rLRS194zZphmHl3_hSLYK4-fh3u4kCRwLcNjbjfH1ts_5Qpxiq1-zvEYNmF8D-fE7NOfMkB_Y9j1twzkEiLuby8PbvjzlvCI5V75VFZMhZUYy7fgQVHXdYs8i_-tJTvw0hl-2ptyGMSEzrbQkY8YsATfs78paX8LEHYdeahc7Tl59ajEfouUDU-6eHsx8ukXvixcEclKH9CVh8uQHX15-PkdPqvoGzcblC37dUJAW65oMIo--vGSxs14", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105512150472409944054\">SHARE TV</a>"] },
            { photoReference: "AWCwydhaeK_wOl8YND5kGhfcN50oOCmZVU5-QuWWPE6v_6z8740YuLEzJXmyC07OiXZk5zY5mIvzC4H4oYPrfwXsni1zW0UB53z9Q2I1vd6BaU1WhQa1yrk68QYjf_EeRawWq2ztczrmvZPqGUd196ZFbzbYaD8plqLoUzsowwwarLa77E5hD268jgnol1EErnYw8W8GO5hIvfGeihZWW81ijQgK2ZvP7Jur3vZu-tXTrJ5JkJhnQbwaiTL05h8nJ0CCRXhBM2j3vyqLc1qr9AmY42rh5IOETVRDNRrgcj2qIZX1-a7_gCB1SCMrDBTA0yKYlIRaaRH4Zw8wBdk6VAdfYfigsbrH3a4OSc7kYq6X7Nk7OggQ_pcUX7s402vBiZ1u1Q_IO1N32ktx1z5rFcZ7V4llOI_vBLv55lTYVidD5hTuy4IaxuA2fzmlXF5D7lhx", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101799851173752140136\">Christian</a>"] },
            { photoReference: "AWCwydjOb55akCPWPthGuSrElz8bYDcMxGs43x8HsEbB0NoihqguLAepTadv0xrIclXFdj6jE4F96oPdpB5440WwACXfubqij2ZbajiFh3bbMBHYY8w4nAtSdxCPgWv_yKJSNiPwGWrWQOgdgYTkHkRTcEVs0bmLswtWPvb0jCyaVfJLmp_o0MJHI7ZY8NpXbpHqEeqy90igknLvgFB2iYy3bb6cBs-PHUAxyWCVn2WNDnfXc3w1rh2uunkod9hu0HYaFmDmAhisI0gDHipvqhzITUQEF4LE3jGGzdDKDAi5_tuWMx-5OMjLtPh3Sph80qEudbC8v8itczzxDfod6IAWnTjoB5FVIkMgKzUDxdaAzW7SGT2QKkWuieSGY8gNv55Z9jshKmqcJp-qqlP8N7lJHAVcly2rJJU9Zm5wl36xXcwfVw", width: 4640, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112185664020138307257\">bebe guide</a>"] }
        ],
        summary: "기념품부터 화장품까지 없는 게 없는 도톤보리의 필수 쇼핑 코스",
        updatedAt: "2026-07-13",
        highlights: ["다양한 일본 간식 및 과자류", "인기 화장품 및 잡화"],
        tips: ["사람이 매우 많으니 소지품 관리에 유의하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.donki.com/store/shop_detail.php?shop_id=110", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2788090604519832902", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%88%ED%82%A4%ED%98%B8%ED%85%8C+%EB%8F%84%ED%86%A4%EB%B3%B4%EB%A6%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "구로몬시장": {
        photos: ["/images/osaka/info/shopping/kuromon-ichiba-market-osaka.jpg"],
        placeId: "ChIJXSJB5UHnAGARQcEjvngsHaw",
        placePhotos: [
            { photoReference: "AWCwydgGnq1lJ5UdJpO-1HHUIc0E7jNc2RKzn4Lbh8jfrRL-4x-KqrHPwXqW8KQ64K27Lr-uWRIHBmjvXF3H5k6-gixpY8la9aklmOBrCm3o_uYXz1c7atN1o5VPXLP4dzDfNGP5Pln229w8hgNLFAIUx8HTOGCa2b_NPrxV1jXPh3N5rEtDpihmduGJSvnfRQwAAYAE7TAaYXOt4x-t34Um1cYo4Rh4vwL7lgyL3CaeiEa5knH7qaoaK_0CdvK6KLjoMfFiR3vByXLdSf8xzXhLddtzeeOzrQtgTHb66pOzHgnOvi1Naa-RT5gPp-aXjtKX1XLFFh1LwzBHvnQetXXoOKKGgTNZ7uIJybqWXiw4tjopg39A-qHitYESPzpSql7a2p_iriMIucinKafAI2hycPBdm0k_USXB7_2_LdLGGyo", width: 1024, height: 683, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107119841055579439303\">Jensen Chua Photography</a>"] },
            { photoReference: "AWCwydiQeZETLVwR_wErAXODLXQKu4K0Boj0ORxlejFQu3LFBHx5YtmRoFzg115nyn4o_RdclNcoUA5dkYmabUdozapxOC8fwW81TKwYi3Ss5bEO6bpVAyK3GDgXQZNEwejWyYOfechBaHXdQaOVYQD1_s0-j-AqnfJTrYUh2W90dArvU-fPAoY1ovRi6L7Ubf7_OCrTMKGGIqKh7Vmk7bxVVHQI3GvHu96bnsDxWjDc2AfCHZZRHuRkZJEtp6cH3SGL83kCaO0X31hCLBLkqRK38egaRp922nucTQ1ulC9HrnH6HCzhV2brgSzAcZXHTBL63RmOJrr5pSDT3zJ2alFX1pPiGkpGhju2ScRLSeheTSc9h_w44sFCan5VAK5pL85GtTa9C6TK4icxoaLwftgDmr5jRdv8WQ7_vRky0dLonZlDtS2sLPK4NROvWwpi5A", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102338917768196083708\">吳易晉</a>"] },
            { photoReference: "AWCwydjqrw8jJPA8xrH_vh_m_HRvCrtK5BXVxZe1M2p2kWb_xdIOe_2asWHMvGz_NeXpL2GP4AFv6XHcq80-T_8OxH1PfOiYa_dOikoZy-waH7PYRqF45CJeirVAqXEsCr8YU_AWYkbFWIB-QOXsJxG93GK6Tufvp8yfuYD79VN89KvO3uO_HB16B4pB8lXjRdWC02rnN1wOIT291dA5raBWhc39H2ZuGk9vrjDa884b5cMGHeEFK91znDwuF4dWFMNAUAYxqzQobVtzAup51wReAxU_p4CZKI9bdl1sEz_G1zYyM-nzwJtYIKneQmbdeBPMV6YBSjqZ7S0zXyYNoZgFBABipQBdpSWzwettvWlqyWKpnaC7bBZoXsSHvynv-QOyjkI73AspZLUBFwTeu4M9l5CRFhr0WjlKJuNcjn4RWAcmYE8o", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100840366827975745500\">Vincent Chen</a>"] },
            { photoReference: "AWCwydhnPZpIBhf4Yu_j4rhQ9970Uh5DMlfoaIMVTTAs-OsSHlalMZgBYb7YOqlDo3FjWT4oTREQD_nUZ7yoPQKtEOjmpuohp_a95mRetEvH46fCjzunroOdagGRoWvPJEIesSsab9urD72qy14fmDddYHu5F9Ho6VpgQz05v_2ue4omL5aB7RbCx3qsS6FBTYnNqCoSI6X5dR_-r6Qeik7HvNszhVcxra61mgCBhhmXx5vUI7xI0Hl-qpnZ6PDvNvua3d7JgksmbJBXvTwdUWSYVbrj80im1SOXrarQe_9criEKPdgvTMacJ8hewNbs3yKIp6g6EXjdTWSFqokCz37wChDE4TEtd3TX3zlp1a9scUeUUSo4YBya2h4XG2mkzkJj5DksIcpSrU7Zpa3HIxvBvjmniAAIBQiRXqV3DkXf7TOEg1dLhfJaKPyp-WfwTJar", width: 1872, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105427476783551449676\">Mr l00</a>"] },
            { photoReference: "AWCwydgtVN4ai1eAiUTHXPQ6ywnAhulgiw6TMVtH9DaYxxP3IAo0YjtnoWls1Xl4vrEc_Q01GS-mocNFj_tX5Tv9PVvbp22oD4OpQvlERHKrLiyyFzTsWgbrNWtpx0KkAJneyZSZGI2My8tfVQNL4jsrWn7CcNMIh9cvRLpXA_eM69L5-IlOV-aX2Lj1-5n1waalmlPFTIi8ZwzAksgnCqjygBml9jV9Xl4xcpktszqzmggt0br7nK9pscFoWDAwCq1mdqS6r9xmFmnqYyAN3TUh8Gu7taQkBPyiwbLIIXeEwWwYKxevaOESL_33w6M7A8vCVDE5H3NUp9eajn96DUkMyUiYCQnLuUQ3f0LthSse651otryKOTK9rZJwr1DYQ7hriXbBVMpbv2LGRvC0yoZ47NWjga_hbW5etuEnWzzNQcWO2toU", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116009875498276681020\">Pauline Chan</a>"] }
        ],
        summary: "신선한 해산물과 다양한 길거리 음식을 맛볼 수 있는 오사카의 부엌",
        updatedAt: "2026-07-13",
        highlights: ["신선한 해산물 즉석 요리", "다양한 일본 전통 먹거리"],
        tips: ["현금 결제가 편리하므로 엔화를 준비하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=12402117845945925953", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%AC%EB%A1%9C%EB%AA%AC%EC%8B%9C%EC%9E%A5+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "덴진바시스지 상점가": {
        photos: ["/images/osaka/info/shopping/tenjinbashisuji-shopping-street-osaka.jpg"],
        placeId: "ChIJTW9DUrnmAGARVwa3Ga1U-JI",
        placePhotos: [
            { photoReference: "AWCwydheSLmeU5aNqO1e83YCxCxq_qI0Y8CgOxozuuVfKEgvR2KJiUBjuIHZqos4KhdVM1q1IC0usqy98O3I-A-6JAkY2w5fyXmJgG4X9i8wh0l-TLvf0tIUOKR642MaQ3N1cA8iAkirB2aXUfD3GY4ZNc3F0Yh2UJQYYOYEXo1qPP_4Vs9811aIQJt84Kx-PZpAIQS0mH1k6y9M5Ms6t_g4adup_hXBlzefj7e-Gw7aAZ1kPq4CVmXisKcsIU6Gt6sNBvhIVeiSg1LNmHh9uv0KFbxXzKEttM6rwhS--ewSD-tez1I2OkkFtvR0wLDc6S_yNYwBhwBIU5_VWy8Mb3G-XLOIEg0kGfjRFbNjbfQz7B3k1Sbvc9d7Lhmdi19IUMuIJe_TekPFcBpcgYes87Hvn3tsUJTEmPaTy1EWwI104xNRUqMV", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103158393281374859690\">新藤</a>"] },
            { photoReference: "AWCwydiuZJGFEG5-H8zvHANGYHijO795oTawf5EpD1q46qARCmaNZNg0g0Dxxj9OjDekj_zVaE0J4MeX2Hw8jELmnr-hCVZq7PPhYgcMKwpN55IqTpZoWStJtaH3xUN-ORhq9jjbkkmxkOEgxIxZ3F3jEoHNt-UCDW5sHmrUs8VzQ4uYKcCYt-ZR5YxL1GNGq3HbjyIO_ESNt_Wm0DdRE-5XeaFI3cGrVpOTxaHRljkxtoVy-EGzMM0AiV5Icj2GyfiQ8fLwNKmIPxB4DwSlwq5kdOyODM4inpXzaNEZArY8tU7n8StPnjvcRDYGubIhODwkQfYqHbdm9jggIjB3-nB05H_xC49rBJ3T0XJ3CgOkl3jOo1qxyBdaC95no7XWXTedZEo5hVTmrdhwfDrtLc5mf1Xsd__OMYM_oj5mtjpllPVb_64E", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107365316010283225338\">ひにます</a>"] },
            { photoReference: "AWCwydiSWDV9-dyxduY6Zlcc9tGO3z2u6YY7GOyTSe9ibBVN1AJxRcaY5xdGZgH2qcbsX3I0zF5csCr8OTmhDOnwbC8LEalGoe2nu9IwW1p0VuAnag8mjSYCtpZ3Ln1oYRlbuPblFltbfO0MwHufCH__BAyPf2J_dteHHq3eIrkr56CVbN2lbBsu0QH9olm9oSYSEaFdEil2NyXwYMYnXOsCLHK1_qfi8PL0PeubPQvRiaMpCDCuYc54ikRfeyiLLQrpc5OGjQYnScIeAdetAr61y66BtP9nva0SBVAYAYxeqsdbmbU_2LU1fnEFX7EeFK_HAblgActoUGOFX7KhWfKtjDLawNgg2LdGInyaQFElriG6LNkLzLKKx77pKLj9Ixj_T8figQf7B3W1L6puVpL9t-EsvPfSqIPxBbtom5AYXJu9BlLUvwtjjI-pvbqnuE_D", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112322276277025548552\">高松拳人（株 メタアルケミスト代表）</a>"] },
            { photoReference: "AWCwydh8j6d635KfG235ouDl0-ixu3PPznok9DFqpN-U7sgC34liExUL0zFDNeknZjHGrDLiTeG-s0xcJ5RtKrC-rRmgEeTjUQJ7AnuiHDZKlLXJADxyVPMHgcNAtYj6HRc-v-ZKlMmu369M1DskQ0CJuM3Qr-qR5jQu-ZBjTkoot-oS6aYcHJ_s7IslOAwg1BD0HhlXInvZqiyZ0aoZkUTCgMYEPtNOGKWCelCHLdoQ95IyMjoJ001_f_UylBxRKPq8pOTxnH3x2KXacf0BSYO6Qvu0f3noA-MqqnF3fTuxU0AurijTaEEg7wlQUl1uZ9lsrXLCUVfX_ECTN_rdTgFZJ7hj5z4U3TKY-meY8dwtK1MGLhke7chJAAQV1LE-D0itqYx7N21Qj471k5-I2U3cfdmdPAqNwKXQtQq1fqGiS9Ok8j__TW6pmoQRRxLfrNAv", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103402541866217784852\">V S</a>"] },
            { photoReference: "AWCwydh649AfYkvnA8t81E4acqVleLtC0DYYp5pB7aPPhI6ZjWmDWsLrCAIKQOx71KDaBG_81_hpRN2AcJ5IgP-Ki4DQs0Kdlq3mLkazRye13TyRcwQkCXGV784xh6jJ34NXUcb4C-IMmFsXz2xHLcdm8xYxltj8UjbRI_fMJqvu8Fk3wcNdzvteBs7prXjBpesY26_5F2j0muB9D0agcB9rNEcftWV8gu55apfFFnRDOdEM6UL9fu4CoVyGDunWRLYuTcxCeB0D2c_mWpfsmCcgwnTo4vfX71tn4y1AnQIzk1QcKvEa0xqRIw01iQzhBmQfwoFMRX3wbvQWd-yXE2Oplk8m7NInNTTpKDtBhYEtYLC5dezYAD_Nf8QW3ZU4j4Vj3uqVejFpQFYBmfpSxQPP3tzsNeLXfL3q4Jdu61FciKwspQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105195314927409596687\">林思葵</a>"] }
        ],
        summary: "일본 최장 길이의 상점가에서 즐기는 로컬 쇼핑과 먹거리 탐방",
        updatedAt: "2026-07-13",
        highlights: ["현지 분위기 가득한 맛집 투어", "다양한 잡화 및 드럭스토어"],
        tips: ["규모가 매우 크니 편한 운동화 필수"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tenjin123.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10590307626199221847", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%B4%EC%A7%84%EB%B0%94%EC%8B%9C%EC%8A%A4%EC%A7%80+%EC%83%81%EC%A0%90%EA%B0%80+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아메리카무라": {
        photos: ["/images/osaka/info/shopping/america-mura-osaka.jpg"],
        placeId: "ChIJby5T_xbnAGARF39mR8GVhdc",
        placePhotos: [
            { photoReference: "AWCwydij5c1NIqF5jw6IvWpuXljuFqOmZq_OvvzQbqpHY2sLkTaG6vnF-9lfecrzxKGjR81usdCSdcNqF2Ha51oujKZpc1DzNvnKhvtYSOmsqctpy5dqeQMmtHe4Ym3U1k6qFUEX4FJ8N31pfG0KMrEZqrNUr16iEAt9q8woSOqGlUwnmEX1k-QNEVHxyDnJFQ0hBOTxW8fZdJfXzkbAiT1wtsFYCFJ00drVcPWOlYQGZ9V_vgxKFqDfa5fnWvWLWGiLsTt74-HZuT0WX-2rllagMKvWR0Q5UZ47Ai4qhm3MsHeh3FxE3lCRdpH5-pIpE9uR04Q8sl-O3gaHFBIwoHee1fZ4fIC-fP8SMBviRpUl6HURJCm3DRS1odabF_Z6b_Qp3KqoNeUc3x48HmN_dAcSURKwbwgG_hs8b0RqxGjZ3ti0_w", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111948855078843206763\">Hiroshi Drone</a>"] },
            { photoReference: "AWCwydiq-RBOJ7STTq86tfS1dgxWPDsKvauyV0ATgbSS6NGr_eHBzSY_u3y68bdHpuJaztIo6VFMtbOXSPrNNWSYNLQW6iClnHxzzr15fZEdvTLVyoaJILuR7O4iLe7kfGqwMFNV7BTufIb4_vWLlJykpDrDgP_LzXhebZG4l8vOLUDwyasGQpMQ9SiKadpeaimIGuOzbaOaNcvdL3XM4DY3EV8jVFV01noI_ikKzBypYZCU0Q9T52VDKRVqcEBV4ZZlDx7h4kU0Q4T2eySLGUk8eYxbHpZcQSHzSJUw96ZXaTMHwTgI0w0w74z3GwLqF0RUk6ueg-ITZoH1b27hVbYXX7wlvHddweAy_FbmkLgTDVpka0A2Q04Cm8n4HZ0RwYvE6POPVjKMqRQeM0Vh5TPM-Qhb9w30Itgbsxw0QX0e591oMUB6yrS_gNj-CB3_2f42", width: 4800, height: 2400, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105893011248619196264\">Yoshikatsu Okuno</a>"] },
            { photoReference: "AWCwydjSPjFdpFrzLCD-fe5-eP-kEn3TW3GssapHgtyo1SuRcz5mKyif2ZnBO70FB42vOQXjwJ9oYDkfrlG8XCgUTKgxvgtr5_MDEyTpgNj7-8qeM1S9V_dCPtaeMcj6M_y8yvN-w31-8DlqBHavYoqRTNTEAXcVhbRrBC8vaehszN4rXBML_VvFVFdPl7YfpXa71WbkH0ObHZauVKJUa27Yf0th-GJvVKfi2NlTzuiLMDnxOTnOKJ-iz4AgYI90yj7L3zFZUk7zS2Keyo2Ut6bST0RQEMoBMB5l6tMslYcQtVLm0A7YuRUQAvzQ4DuCWDvpq-9dwfZIeQ-Mkicihpf2n2yRaDRdKZAfX02m7HQw9RnODztPW7P2zLD0-KnUnDq2f9K0btk60hdcCroabkUat_zM0YNZPvqp89VpIFvHwgfkz5wh", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111457123191604876452\">오종우</a>"] },
            { photoReference: "AWCwydhn67lIZOr1IumAEs0HEjnpnce5DT4Ao2YuqkOy0UMUolmekvhPJucSlX-FL5dCckJ4TKPHPLxCdUWBR3SGVFHO57vjKRR3eCqhUN3fO1aguwxk_Ms6aE_etf47ns8aGbhjJXiJ9fN5f4-iKpLAebN2kF2jLaIrIpWvARV7mY8PD3uL5UTLOGyn7-tJMfrSbZiz3ZSftSDPCzISZoWzMnfA-957Qgu6eG_ak4yUGOSy4j07hL2ePrjd7gzxd982gqTCDx3yciQilUHTqW25WrYXrJcTqfsAQThaHTvq0ojfwDA0LOACkn4DEtMFfdc-r4R_Fd4BVhJHcl-PzEog881Tcgx1lpXP150NgjKc4jqfK2dsV8epwQfRrVg381lrpyKYicjyny_1k9qH5o2fiH5B1JSO1-LK0BjgAPOZ9fOzpQ", width: 2268, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105736855936668713202\">R</a>"] },
            { photoReference: "AWCwydiRlnFjmW2w1LnpvRDkyCcCPbQ08CtuHRX32jN_m_uRgPGf6vknJtIt8w0rZ795BsiyN5tQns_4M8q9aNwkej4Hb4OcF7K8P6nxDoqZZ9AgUK3dUHEXiys3JqV89f7oXsCu-2LPoWDk7UETcZACPDANkB5LGsAoQ_xFHVDdNIbKAo7RRFDxVQ5GJI0nYJzQ4k9byZrXnCZcc4UeJdjpxAs296ChIKBavR6Xx_Rs2wEe4ZMWUesgF7dEGOJpblVhSYoTLM2Mk4tUvKw2M5s6xslMiscDoRE7cmNpu3alm0aBwtRHzLDX9MncxSCn8N2aQnA_c4QQxB-bjHySLhccIekDAGUFTb6TuXGcEub88O_89ACITjt2K1-xLTGN2UgE0sIy8IoBgbq9KR80tyrAahjLYcmEko1kRbbTdDWfwNXbjg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114949342011792624478\">Indiana X</a>"] }
        ],
        summary: "오사카의 힙한 감성을 느낄 수 있는 스트릿 패션의 성지",
        updatedAt: "2026-07-13",
        highlights: ["개성 넘치는 빈티지 의류 쇼핑", "트렌디한 길거리 음식"],
        tips: ["골목 구석구석 숨은 빈티지 숍 찾기"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=15529983547416149783", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%AC%B4%EB%9D%BC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "헵파이브": {
        photos: ["/images/osaka/info/shopping/hep-five-osaka.jpg"],
        placeId: "ChIJkfagoZPmAGARIcaEGF7Vd2U",
        placePhotos: [
            { photoReference: "AWCwydjfu86vsFI6tSoUU_4qAJV0_M8XlQzj2JWgu3zXOQwQJfJ5gMJs31YANYbHnvuW-zl2dLajNZt4liMk3_TM5Axtw6xjyS9rssAEzvtmCExMpJRXZt87sSqeTJEfWX1FkqwTwKhnG07gAAG17w98bsp7VnUoBh8PzKYWYSDWvg9Gb2c2xLaFfZ8-Qn-yLPKnbbteubEPPz1dTEz86mdLg0y9GP5HoWpUb9X-PGNTOLTNLS92Zyyzj9YOipJRJci3agYZsrRvcDQOiEu_f9NegHX2-o7bNnH8AIFVUTbDoB4b0QJtkbW3QEUpM4-DIhYWs6D3pAvhzJ25gT4fclI568a9gk6zmjASxucVG0ofUdl4c-_osgZ0VPuBewmGKLlxBxZTEL7-fTrhyZF5blvv054yZJbeMt8iVfildWq37ZVr80gY", width: 1881, height: 1911, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113146095286890035727\">HEP FIVE</a>"] },
            { photoReference: "AWCwydirvkRLfOiWhnlvL_kU8auAo2FgPINcbC-YuBQILLHBipIQJYPR61wrf2yZRKdpLU96pHwLiQUjfWEsGw0JpVuBQo-l6IfXXzNIVlpaoF4y04ik80oCj7tnbf9lraQjIh9hgDRxzSESWwv8c2Al5SslGavmlZt1X_WCAxFx6s800oKFVAvlcGVYmDAPkRvTiNH7ufSnDSmjO45fFsMB8DLbZmV_M5VbngGgKmiINdB8nkUbscEmSd1kgF_SOE9PzsZktEAiZ08OXaq4YY7ml0c7lfElI6ut-rCKLs9Yo6GtlnE5zMxJdJC7R6G1MDc4VK_u6Odnw61TrbhlDqCaij32D6Eitk_gXQwMZ-CZViGSy0gSG7i1wzgbcEk-Pd0trAltQ41-W01HdAUomZK6n0dhSZJifKENFsSJOYkwLN0", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104800859475433712157\">shan ari</a>"] },
            { photoReference: "AWCwydjLijxv2h5WfgQA_qet0c8bXuvKStnAcIv7NesgB3cNI8AYYNcFwBuFljY8ZQQuzRVA0zJGeaiQKigG6cKaRt7YB8zzBZ5lGIeZMWE3L9QirrNeHk4mYK4-RVbqGgJJ7p4dBiFPdHL7liQfoxHYX1ypRndt4P54R2530eqbbtOr1fklvIKj7Syy5TofHOI9GxKCn4vyw1vvfy-QPQjbqAGFoUk-XjM4H7i_8AeAtj6TsBoUtVfkqV8b5yXfTEiCuyJkToLjbR5IWRZ-JBH6SfO1n3oWdP2FLU_hfdq1X_QKMCt6Z7ZN-Pm2pXfSu1mdPdZns2gZJNnXo6bDIgvoSyJk1wFfMTSRYG-ghI31LmTA-L7XMTfhYPuleVxJe49AzK4kPCg8dqHIgUCzSz3XeFXbnGa1kmwJ-837QBIv0TD2uIbI", width: 2560, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116625682058968263384\">노정재</a>"] },
            { photoReference: "AWCwydjHXtCV4BpXhlkdCIdidm0wysKXhKnar-L4d59Ij1b0BdpkB4uUCw9joUm7RpKGqePXphO8uMrJT1n6iJswKQ2kZAzw0XLL9pdJeRCPhRRmWTh--PXowTFR_m46SkJ2Chu4al6ckYN5XPNze5MWcZ3jvCIbaV3-RjsiTu6b8TvKH5t2SVpha3HYe1NW05imp-HUk0HYXqa9UPA0cWY9V3ygLaRYs-PchrOgQ1PZP1BAPTsCRtumhkTDAl5bxBGS90u8Bl7QxlA8KiYeZAGu4uV1dPZwsZ6yZvze7P1vyJssUbMTJnUTmJJp5cupe8744NCP_WNFY0SRxoPrxNcF7G5FGmi9SGMEWTz_5jAvan4ihgwk4v-lBniR9OfWWaNCxHnOkM8qgj1008GSX4tJ6yJxIACWBM5GTx0VWottKso", width: 2505, height: 2625, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113893741088012910806\">김진우</a>"] },
            { photoReference: "AWCwydg6CDaa4pJ2JapznmEs2q2KyUd2kgXLHvjLqqXAtlWo3-tH5lNeOQXqCeYF6hsA37DE_SDLkzMegXLglDERohTNnFUOA6UCmu_oawHrO_r5h3dj7eC_vAfL-7wMCc1LfRbZVsDqUr6i2MIaZsRTNrIIA54Ag3DsMkvEAzqDgn41gZPFmEuEBpBuwTNkST4pg6ip33rS-Xg7UHWde1WD5kwDjIYr_N7VL0S8SmbLVnvyLvf8jdigzyaXkPOJs5P-YTQRm1422QlCF-SU6MAXfnSJfqiGUA_CptEr_sgUSb37KiA8AIDJEwCeCBDYnT45pE3HFRbmnMyWiD6YxP3OwgC0Lu9fNljnug47Ufdj1_0QeUz6BSSjU38fAzn8WCIojkC5hwKdEVtr9VJQGcoWjai7xvjY2LDUQ92Rl3I5PqZU6l0", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106783819804472074974\">Neil Gerace</a>"] }
        ],
        summary: "쇼핑과 도심 관람차를 동시에 즐길 수 있는 우메다의 명소",
        updatedAt: "2026-07-13",
        highlights: ["트렌디한 패션 브랜드 쇼핑", "빨간색 대관람차 탑승"],
        tips: ["쇼핑 후 야경을 보며 관람차 타는 코스 추천"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 9:00; 화요일: 오전 11:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.hepfive.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7311547120174286369", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%97%B5%ED%8C%8C%EC%9D%B4%EB%B8%8C+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "아베노 하루카스 긴테츠백화점": {
        photos: ["/images/osaka/info/shopping/abeno-harukas-kintetsu-department-store-osaka.jpg"],
        placeId: "ChIJ-dCc3xndAGAR3GSqJ_WvtPI",
        placePhotos: [
            { photoReference: "AWCwydjS7dVUKlEYO-JTsALMd6Tl5fOQfSwl0uAsjvdv_0hPWX3tWN8x5s6gUb3dLvCIOJPA6teQ3qdIx52OjBcxw4VCcMOzTeJ-cV8fBavj5DhoePvoppK0Fzc4bTeBRTQX6ADv_usyI3WJwhZNTOTMG41iSnOMozfHS_BKu6iF1X4GpfpGfLH1ycWp35VESh0qSnnHnr0iSPIBAk5rI8ATy8qmULVqz2RUjMSZOQ-dfR0tdBDp-4DCE_tGhfJh3hyfdrmz4gxo5xnio-UAD-Tc12MBaEMSuuYA0nl4ldML-XKT2968qNqy6Ihd08F33BeXI9ozn4tTFBaCnr2cdH3t6cQ4RZquPszEMXeTJsX5VIsCg8mDEEqlOerjZ-2fKYSR5tNv95RzpHqmlZ21PDnRMPET155LZzioUCZaXJbgLbs", width: 1000, height: 562, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106373496279722806505\">あべのハルカス近鉄本店</a>"] },
            { photoReference: "AWCwydhFIqLhfjHRRaMSK8Xhy5mczClQ5P7cZuK2gKtoolHAM_HIZhxH5hHuESCzQkosUFn4hBcT-sG7r-pyBgmKAUadNQ3a_YYI7WzDAsjAUrkh55Cv_Y5fbWQT1mLsrIq4v55jV41ZOcXy6rrET0tl7DHAIKJwtRtb8ScIFgTPgPVcxBbWQLnU0FeiE4VZV10NvRKJLK6hielXgT966lez0bLsl080MD_J137CxJhTwtM-bcJVfG_XDF-gq0rwrJWMcy93Nr3V_qwHyHC41BUSYdCUCOPTztHIVvHqSQRw0wwNDmugk323M-LzurjTEm1LT1xqmypGGlp5lzqih9Oidp9Os-b7k43MLBP6yemS8MxRYla8_EqovRswdcblWC2MbGKLwLjS1uakDJZW14_FlFFiuzrORHKELLZHxy_sNa6JemsAQjEG86F6AmtnEA", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108530088717065043924\">村越真司</a>"] },
            { photoReference: "AWCwydhjbBELGQKmGCZSzyberAMNHewZT0q43YYRBuM0roCKgFfdqTlo0HJe8KsLAtOJEhto5V2WIZ4eiz6HlgCZExu1wLOwPOxuY8kXqoOj5t4BudxMgIHMPT5ea-PqUnIuAaGxU-rWCWdDcy_ZsuAorwtulqZcWRVVQ4nwAKgIGX_-5WBvFnpJiqR27Xf2KNcM5K77myWuG1MYq2zUKBfMuB8A2W7PpmAahzZN9bchsnSnbUJrf1rbc1aOiiKuXVaQcyIUxmJA345SP9rq82RTCQ-MgQphqQOyf82dKH7JYTAmD_3j6psCEb-N1rqSdwEXMHiSun5QlH9LmXH6GmDbMopJQ7vRWU5Gsl0mgBQs_eVdT14PM-YR0yd_fwB12KkxINZh0IDe_b3x3wwDqpHjqGhLq_797ytjls4Yvx8Qx02C6w", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107496848470562258302\">nopapa hira</a>"] },
            { photoReference: "AWCwydjyFpelwPbZ23xqS4xd2JYp2a2Xn1hvofQ7AU9Yvzc-maAuEHCsPnyg6atuBapeWvRwgJSM64H-39HSZXIEfZ02Nhnu5OIAXy72UlQwqV0hhcX3h_3qOF1RM2pqi1ciBTTinMfYrsIUIvHHMPIAhaaPIbxhcZg3JhEtaKY8J6-172sjgqXp9JjJQRDxvKu_iNIqYvq8nI-UjLwFRmxIt50FXA-e7iWEvkGPG3AaPiSRw0EwN6P5_g7kPgICHLN4wqkt3fTrgniDqgsrRlVNBwE4XNUbYCVNQPMiU8XMGts4s_Hu03no0xb2FtmBmA7H7H13fpkNiOmnn0WN6HxsGxED-9EgvEM5q6h-KkKqqXTUqNAdBTQzs_m0jmzK5quxyVSTb4IjHw7wt2W7RKpLZ6e5gGNQ5nsG6fAdV3qdTmKHlxo", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105774174444787308383\">World Explorer</a>"] },
            { photoReference: "AWCwydgyzeZxYc-vug_0pKeCwuhDzDbFWGM_53mz7XVHT1D_kqn2it3kTuTte7IM-KByHz-umW2u_EtVvxEKrDAkMu_zbj3zacwxV2D81dlCnAldKQgzJ1_TXotpvAHWleGOSLnaJd9KhqFKNnSOnMPURTaHUNH8Pqm6V3JpuxfJHIzK6lNpq2mYtWizYcSIJq0pH_Ard8l7LxBDzTCcjwbAwvr1DhokMyq4m9fh7e-MUJjdjX1lgnZFos55IwWBtBoQ1MyHCB0kwD6dqOTmSXTc8qbxTpJIc01Xc7t3V_SzHoUtI0iB_AlG08EkO2tKrdlAnpum8vL_-D70s14udH4_7GThexFkYs0vv9j1UU7H5D-zZ66Swlxs97m6HQn9IF1MeWfdamjTHpUwWrOhJ-1CNuRfveGWBoa_LnGKyE2yOCZwK5tl", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110422214064076179895\">西崎徹</a>"] }
        ],
        summary: "쇼핑과 전망을 동시에 즐길 수 있는 오사카의 랜드마크 백화점입니다.",
        updatedAt: "2026-07-13",
        highlights: ["명품 브랜드 입점", "탁 트인 전망대", "퀄리티 높은 식품관"],
        tips: ["전망대 관람 후 지하 식품관에서 디저트 쇼핑을 꼭 해보세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://abenoharukas.d-kintetsu.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17488796720453805276", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%95%84%EB%B2%A0%EB%85%B8+%ED%95%98%EB%A3%A8%EC%B9%B4%EC%8A%A4+%EA%B8%B4%ED%85%8C%EC%B8%A0%EB%B0%B1%ED%99%94%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "덴노지 미오": {
        photos: ["/images/osaka/info/shopping/tennoji-mio-osaka.jpg"],
        placeId: "ChIJiyNERvDdAGARyi1AlHIt8j8",
        placePhotos: [
            { photoReference: "AWCwydiRq8H-WKqWfT3qhwiZ_U5nKFV31gS224vqjsiI7ABUpPIUIJjOs_FZAefpX1qYBeo6MIq8nD3jCh_XDH2nwOG8b1akcVFQ92zlt8vNHSKNapv3PDuHa_C_V0AUZDyhVauZJ8V4PkrK995wcKj5x72pk060oMxwkjd1Ui8-fZtmsnGUkrDZgjJRNK-Hh5j0S_R_FubcIqrq9YS-8bdlS_0orpyuOdgZGdg1SxybH3YsSilXar41Xtaco_X21F7ebI3JWcX3Db0771MHJOFK0NPowM2-mLjskz1ZdmTGymuAvAfJCCEfARjCn9BHC6lTBOwTUn3X5-m7hxTdI7pB8NxgAUdwoDreXwdjPRTdf4_Xv00gGMP0VXqUN6k6UOG8b1ppDp5G8fwslzTy3eqTIsAjQwpGFtr-WawHldHgeHrQsXM", width: 4800, height: 3168, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116069810177072467536\">天王寺ミオ</a>"] },
            { photoReference: "AWCwydj4-iFssJTz_DmfV2IAHJ91m8VTnh509A9FuIrxe9vd1y8-h78MP6bh94h8ZVCGJPWU8rIHuyrXmi4WoH2jhQCRaNRiLQjIqi2OAd7DXa5tuDmpuqkfYNXLKqSWerOd_LxxBQ9VsmsktKLX_YGNk_reEPp8GoGatEmK8Kw90FxS304vaipLO7Xo-WjMYLlkj72QElnftnPVpMuTYUDrx9iu5oLka-Njtnkk46RzA6sq1BZq0nm-ry87Awr9ohiGGU_QJydScLPQ8UYs7R6915mOSXgQIlqawjDxCq4AusoYks75A-yFz3CDjAb6_WTbIqmrorvlYlfn1Cz7Ea0o1Rn1dpYkcpyuIvz9TOSkQ5GFA1umljM7_aNR0I_hb8QBXnkyDqVfa3nbq3NgTZRcRfD8YkPVxrqRYOeDRj13RKFNaQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101718232196215419007\">雅1225</a>"] },
            { photoReference: "AWCwydgmB-1jb1rI8Ce9WDCeaE1SjThLQrY8BIbwd7fZN1TTUX0oqZGGWbpjAQMcFnYTZu6L4TReFqypTUMXnYWlv9VbmRXubfZZSnb8CgM5ufgcSlgEyEsimILiuk9p-8JA0BfaBtc_pyn1x5C_1ppKAmzNvaoV900TG8_6QXjgITuA96mGxZUYEBuOeN5KyqPEfNZDSCbn0NDUjPBWLlMdiUJHXrHgogmxPEg64tasyvCr0hsMJG4K8_SlslndAb73-39OPhVkyYMnZpvbHQ9NRtJ1_TktR1Zsn_JosArIlQPIU0g2PRu6_qdbdheUacIbQIzOJWYMGkjLx29w85gYCUenKOkYm_rNyBARYpz_z_azkWV83mv4E_hMsSS1711eSKW5IeoSscpufBBAGufs00aszq51fWIBrHpLivFsxFE", width: 4592, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100467201925494428635\">Nicholas Wong</a>"] },
            { photoReference: "AWCwydiFMrna-vef2az4Ej3bOXAEnMmNRUjwc-ltcaDectpx5FxRS4i9ALx_GgN0r0Jm3hUISCm7TQIfr3Vs4w3obU8Zgn1n-MKC7MPi-XSTKw_zy6TeLcrTqNkuyFOylQKFg8ETbh9s-W4qPnopIfz7ns2vIdgR4FNBJPKEltt1wvZsyv_3eepTC4YUBvQnL_stQkSZZ9hiMSk2uHYUJIdqGadT4d86wuktkKjbXnRWpmcddaIUW5ZvfYGLCwgj6QA1MoBXMfxEWNFJ-7pQP-aX3WTvoi85M9_uYYey9zSA22Fyk_3PruLKJlW-p44fHCEMbcRZRw7vCpOAYTQZlthDy3Tg4_2_gCY0IBF5iy3FavpbU1T_sQZkd4SlIhv5c50HW-uVpK0himtG84sNrgKi1nI1DcqFVAruHGIZLkXt5MiGrA", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116276215661222880032\">Mana F</a>"] },
            { photoReference: "AWCwydiGfUsEY0J9Zdbj3gHaxwd8YhDPBeAtN6B6T2ZCpa30ly_47jeNWJbgASUrY-04pzrkwIp1N9Gb686YGdw33qsxsjolxPOQLP4NDZLtGPlkS1cWyKOdRd9e_O8-_r4dTvRsi0skZVrhEykUGgmq4PJ-lbsdtxAsmQzLvJOLMBHFktIxwOw6iw1uJ42JcIWVIlfxP4VpoCDshtn_Mux6BH7I1qI8XwF70RubkMOSU_X475MEoG-26oeQObEir237h5uldIeKZNimmo5zRVJb5WbvD_ox-xZ-4UgLeJi08CeQlR01RXPh20yXwCh_RaFnCblV2fRdUXCcNJQmakiLzMi4OF-jaFnUBWZaklJRUSewKR6o_rZkIF7UdvOtpisDvvIiR_RvVhNLmZckn7h-kv-psTJnShdP73lAw2LuYYKyog", width: 4000, height: 2000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113260694303713596628\">此花治朗</a>"] }
        ],
        summary: "다양한 패션 아이템과 맛집이 모여 있는 실속 있는 쇼핑몰입니다.",
        updatedAt: "2026-07-13",
        highlights: ["트렌디한 패션 잡화", "다양한 식당가", "편리한 접근성"],
        tips: ["가벼운 마음으로 구경하기 좋고, 근처 덴노지 공원과 함께 둘러보세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:30 ~ 오후 8:30; 화요일: 오전 10:30 ~ 오후 8:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tennoji-mio.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4607795338890194378", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%B4%EB%85%B8%EC%A7%80+%EB%AF%B8%EC%98%A4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "린쿠 프리미엄 아울렛": {
        photos: ["/images/osaka/info/shopping/rinku-premium-outlets-osaka.jpg"],
        placeId: "ChIJJ9Tyyv63AGARgvCwoRNkP8Q",
        placePhotos: [
            { photoReference: "AWCwydgRoS-oRM3LnMS4S6UOZbZENJZD_xf0IErJxiYSB8S6MLIEa5WjTYOctolsxGbzXL41DFVxW6vIxGyY_QXN3jbjcM6W8qUB_mD1XKV-weT59dXfffROWVb8iTBfRzLzRqALnGTnx5uWaVAdT6vFdnhjz71yL_FiEPaBAleYDXhzF-R8CQPnre914j2XyDJbhsdJzu4jlSs99TzSlQ-kQC_hCUMJ3LCo1e-1kSqi6F1TdA3BVlRTmjH2TkyjRiNVmc1c8z0vp23Cxh5ubuz-SBtSmhw1zkTbL8pxE8PJeFGrB0i28f4JpGyHNL1TRcYZOhHLk_0HVkkDQQFuzHQWv8BwqCKCqeAFZamDRf8Ap1NS_SwQDdurbIRz3zoT3yMaN8tSku6bz0IGKIx41jiUlMVQ1k2dK15S7w8hID1LXxjmMw", width: 1900, height: 1266, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108488500125301942733\">りんくうプレミアム・アウトレット</a>"] },
            { photoReference: "AWCwydjRp7ptTRdIAdMKkcJjNATvQ7n7X_BBLaFwEGV1g29b-rmXsE1z0b5FJxkasX_R8HTW_3_C1WjQpTiWnEAjPhYQzzZQJPtNRr-E2fheEPmE3qyAS3zgELQ31OYECly0RGwfyfgDDx7YiNeLcGLVmTVaw_h0s-8bzgu1T61JV7lsbcguJssdCfgEU0EHt6IEpPZRXQSalQtE0BzghfYAawBbpUVLy2uO_mms1-rSwndZdt3cE3j0QxEXs13yVXb9RpN--AIvAbWbRpOh8n6ZBHc2xWxNMjLHwlf-njFM-SI7aCRxK3--EaAKdW5U5nNDHXjmi21mFSITxoJaZMANlJCXZu9O9U-lChUbRORZ6b6hWfga81wfM5T60zfhwQ_1qPC59tSQg7KKjEuaCjhpbIG2vKsUL4gHl4Sl9Ax07WRdrvo", width: 1886, height: 1061, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108488500125301942733\">りんくうプレミアム・アウトレット</a>"] },
            { photoReference: "AWCwydiFne45NuIghjrISIqIiTkB3o_P88_8ZNf8A1mkXDsDaAVoQUhi49n3zi8BMYBQUKWPyEmHmfzU6nwCeRgSUrbV7KbKk2vTS4Vj5sUSOadVINiEio7eL2JV_X9pfgM1ImKCuybnnM277z-nh7JIhKg4zEv_vWhFl3Ki5zw3J-uo3rPjQHU83t2P23VI6kIhhXg635914LAbF1WDGA-428mgBR7Be3i2wbkQl1VP-z1co2xtxHC0FnGxeL22nj6DA0EiVRcGGhoDoSwAgRl7N0OfaMHWUUXVDCLQLAUpPWjR2O8MmmBLQwIYA2TwN87WUrS2fq-fMTpp3sGIH8YZIHDTjlg92kzfsl8_5WtkRadgofIOLJkwQf8wlTJ2Agy3G_DMw1ut8UJQW4a2xzazwEPmCzWZAcb-Nnp7F-_mFBfQQa1J", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112583448979651075431\">Regina</a>"] },
            { photoReference: "AWCwydihlsIn_oVwTt12Kk4TjPLXHiU5kUa9gqhh7GG_u_GjFds6JLN3LaSFbKK3BSK3XUnMNq2XuzDhfmxX1NVyfUpGCgoMLwOg3VhTY_5dZuBZF3QW9z6Pnd-iq9laCWnSMToWv6Egeawk2CPihfnhQBkMBydHmYwb70djOjirTcAWX_ZE3yvWPV3RmoiaAnEUUnr2NxFmsLhpV7_uotgz_72Ez6bKY6DoWOR--L8JXFxkaSyVb3eWTetH7sYMdqPWoHERVHIIPCUPc1s_mc-YmoLADULLnuTyNIMUeIQEo7uSwphmhmgAqZNQwLk5cXQdOCBvuaLcvG9QcjNaq5d27eq2whiSGTK_Z5Q22PF27NgyCGPtWoDAgGcVNAd4xRkrSE2GXOMtgXhZlLcVxj9Jzwf9yNOrUwo17dtSMTihBJ1OIQg", width: 4000, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112110124461672525776\">masa masa</a>"] },
            { photoReference: "AWCwydit3tQOQIANpAg8nckbmX4Y8tQuQfnAJBH9yAc1vnppaQJNnnMUkyzwKwW1FKRMyeMcpLv_EPQHLzPPbL6NLvRXsY40ImrbJvvPB7hBkBpUT8MrszAlEKphk6Ya02uX6HdD6aQ5gVAMuOWn0ejruK6Ntf6fEyKbisqfKLioNvc4SOmLnAqkBoEhCv_LB--cwUAO6ISCYtccAG0acB-ybgKXUFiedZwjdQiMFnjo8P6XEhJYwXoN3fAmQ6mX1pRxc4_2tcCgu2o-HneKUzjV7Fn6AJBRFsNkIBt4z1xPwNy3PyhqXkHyoXA-1EHzdhGqOYK3gxy08KBGCbNVkfi65MHBWnMFrevU0tnWxMOzVlT3rPSoTEBzurW1FEOSWYkRjqmYGjt1AiJ-6Dd3Q5NopA6n0ovzAi4KEkOLmsqUOVc", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106217676530332144177\">hiroshi itaya</a>"] }
        ],
        summary: "간사이 공항 가기 전 마지막 쇼핑 코스로 완벽한 브랜드 아울렛입니다.",
        updatedAt: "2026-07-13",
        highlights: ["글로벌 브랜드 할인", "공항 이동 동선 최적화", "쾌적한 야외 쇼핑"],
        tips: ["출국 전 여유 시간을 활용해 득템하기 딱 좋은 곳이에요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.premiumoutlets.co.jp/rinku/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14141131390446530690", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A6%B0%EC%BF%A0+%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84+%EC%95%84%EC%9A%B8%EB%A0%9B+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "유니버설 시티워크 오사카": {
        photos: ["/images/osaka/info/shopping/universal-citywalk-osaka.jpg"],
        placeId: "ChIJ5REkyZboAGARtRRpDc4_RMs",
        placePhotos: [
            { photoReference: "AWCwydjOCF70rEoX2nqZpQkUl1gMzEAghVoDjl16xiuqUst4GwENTKW7t-iwT6QkS8VtOtSyrIg7Sr6Y5ymgLBFh7K5rmmWGK5dTWXyF_Y6Jht6cSbdD1RhNcpPuJjfvaUyjX5wXqxxyJJTEFyHsAKHF_OTEtHMWaoyB1_Z__yy3Ik4jQ8aa3mPB3ZJHIc4yE0y_r5PrnztUvKi6AWPgmmQKeir4_6COCR7CGjBXsSMNgnWCw_2RX5SwtsLSdXrrf8sCEu11z9Gz8l223RI6TtOIHVhC0-TTGPkUQU5drAhUVZU94Qf1weI7rvj6F81PgfSCdgyJG73uMCTgoesBm6BaBqCGBQcAtCE1owa4VAXe7g_l0EHGlD-sncd88jIA05f3aTv_E8F9jGN_ImxJr7IOV1ywNfteHPavX36VHCG_2SRr1GaJ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112562958402127370151\">Ikuo Nakamura</a>"] },
            { photoReference: "AWCwydi2Z5JRNCzeHqW8q2bNpXmgtOD1MboUuHnA7S8rCb4cZUSCXGMs46gO_zoT9fATeQoKD2pxwMFItJn9FKxTiV9TOMaIkC-0xY6_y2AUhKoYKa_joBAZKXX0b0Rm3pHGD31Bfszn_gK93CWx5DC3Wvx6Q2bLPe6eyAT4yi-WPHHH7FC_HQr94o1XyNvjr4NiKcjRu3PLD_jQTrgDcNDffgzZV7lRCZAFeajeOfeKSVFu093QH4ED1ScN3aPCSED-r_a0myH84U6-q9BX4gDw95lwRUDP7XAnJi5TEOJD8BJwzxUsliJB2NVePjH5C_XBjt9qzqj0WWfE8NC9ICb95R3AGZl58ttVVyqLM3t2nMhtATIqbSr7uYuzw0ZsUH3J-UQT6PQi-3ze0PzAlMJmtAS3Pyo0uZtWvSO360Dbh6TiDho2x4-y6J7K5ATh_w", width: 4800, height: 2701, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110797065295731607106\">Danh “Sujieun” Dang</a>"] },
            { photoReference: "AWCwydhq6JFUr_XBWyhT02Js4s9LXUIk_gqpC2FdaMcvpWb8QwaslbQj9FwmfZV5nzcV9kzKv302X9PraKsNxqifidhHlD88IQZMOwhstmnRykcl5jlqdg-1QfuP24uZBM5ob8ZoijLEN9Mc2LWxGJoVfbrLBAnfWaZwcOOwZg1j0YkyIQJTo80mpn0z1biHcw9r2phfcTHA591_IfUzx9kf7JL6uyfmqXwVbCW0rtKHhqShQmxonRDEp0jy2pHzsQ0qQ3smZ2aC3c4rirdnr1Z14fdC8Ml605E7UYd67sCXu-WwILTPzZKXgWxloB7mALw6E5itxM3b0SiMPuEkxLB0DZhiE_axzW3v6TikREWE2rvqUfDzGig93Kpzs5U9wbkO297XdVPtJC2eWTgiL3ovVjvkwKXWqw0yn-QcK6iMmvhPwts0", width: 3072, height: 4096, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107523045322946592318\">Mou Chen</a>"] },
            { photoReference: "AWCwydjY2ICMCLLe5x6Hbnz80uZF3HMc6nmQsuSZ9pa5mQSgIBHf34BVXzWJzm7TDp5_oT9jTvSK8rRXsTlHAazCELHDGQOzyjXwfg0M-Vl6R6x7DLFuzFQ0o8e-VXVUHGsaQJWKxl7ACK-MpdGcPk2OrO3KTalDL9dwB9W9ywLCeidv4rXGvUrk02aoSRRFptspM8Mjcl6FV4PcIjdNLduPfrZtf1nJK_KDQs8UayAOcm0l0A9hepnBJjOzcwMonK5pm3jo9DZKNTdtUnTzngCKUtJOXiwsqv3EKFMVggZr3g9GbDblsh72qZLh94EZzFG823TKIk14I3MzeUernC9Nsk9iO0AFuqbVPOTX_LmMxqZrK_WyIC_108FcTz8f7Ul57OA1ZHIZEma0ktXxI-oOOCy2qL_gMkZfm8C1E5IIpvM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106333824828183833124\">黃美鳳（試媒體 創辦人）</a>"] },
            { photoReference: "AWCwydjv82DsvBKosc_U5Rh_cpLtbirjutD2QbZKJmOAd6gGXdUFre7HiXYNDZi-RN-tkyyaXjuEuW_vIzenZQxMvjYMtHEkMxypr4s28ThdBfx_iKmwTeIDF-MByeY3CwPKG1xyzMZ-rlM-bgCAu0d-O_TorCtBAWoZia4qbV4RBY_mHPyDGeuXx9asp0Ea5mAmFir9P0VPQncOefZKuIsIS_EKSQyGK672dE1_C5bgHYPPA5fdiRUL1AwWXvz_XG5rKfcu9KwrsCckOgx9zRFDBXper15xPRjFjnYBTqYxZs_R-EDoZxuGy-CPBk8Isnp1elJDfKVlGI1LSvDGX6_Jb_cqofhYcyWX7IDwdKX0U-HOSH3TeE-rHS6obly8fA2G8e_N0OBiSqTzTREcZj3S5_kH_Tr4-At73CQDFExby6dGkQ", width: 2160, height: 3840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114649015256529113271\">Massan</a>"] }
        ],
        summary: "USJ 방문 전후로 맛집과 쇼핑을 즐기기 좋은 곳",
        updatedAt: "2026-07-13",
        highlights: ["다양한 테마 레스토랑", "귀여운 캐릭터 굿즈샵"],
        tips: ["USJ 입장 전 식사 해결하기 딱 좋아요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://times-info.net/P27-osaka/C104/park-detail-BUK0044884/?utm_source=detail&utm_medium=map&utm_campaign=mybusiness", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14646902042336498869", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9C%A0%EB%8B%88%EB%B2%84%EC%84%A4+%EC%8B%9C%ED%8B%B0%EC%9B%8C%ED%81%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "라라포트 엑스포시티": {
        photos: ["/images/osaka/info/shopping/lalaport-expocity-osaka.jpg"],
        placeId: "ChIJKeZ_slLjAGAR11Ph_LnRmvI",
        placePhotos: [
            { photoReference: "AWCwydh_8_cg5qHSc7EQH7yI1Gr2OPchnYA4MSZzF46_MZnAkFPcTIr5cj2BJYYtei6_nOMq5cE5ETau2-iZyFVkLEBSroPciXGjiRrlW3JmQ3KQHl_jTfKy0hUwWNch1MWZD_8nPCtm_JGOu0THnVlOdR9491Kknor_oH5uEzcc4yAf26hnObO8Kn_zMw7BHiJeHrwTt1MsRfjX9Gqj4jbL-NIi2GPsQnMO60WeHeYYVieN34eaa0NgRv2CahE5NlBcuvpYkZ5vOwAhUATZiBb70V0s3Mlf1HbYvMZwgDu-fl7YvIVHwDLOoUDrdwNPQAt9VQSiUMq9wVhlYCVB4JBVqxGGyzNFPg5ynckjwpCtDUE029iZWZyN-HecDviR-5r3XGoj0s4DbuvWIx4KEkyeUz9AYY_-MxnTiAFY5qmPDvz3TtkisLR_N8NSdp1ASw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100102139848189581217\">ぎょぎょべぇ</a>"] },
            { photoReference: "AWCwydgeEhFbwODZyvee1X_E3TV60yw3BS0AFfQDczN23_qALKThTMzcTTZYNJOS1M3gGdPM2azKYF9LStxuKMiK8VngnoycMBHCjp0AEbWT221GFmSSLNvMzuSAa9wHsO7ZsF_dXc3zO0zII_gEkiXJQE-G1KDVGO9zEgcVm1Ezmf7vXaoUPY4Ig16OM4V5tXHCa8HKtfMAfnyDvU84Lt1T7PjHg7Uh4g6pBWIyjXtZ_mns9HxC-fWUIs-EfR4-NHpSy3F0x9ggxYogvQcgoCHYDU1ElsDe1lwVaW3J6uEAIl6n0b05LaLSnoAMQEXEDqvd_0sM-GEpTL4LXvTgY7X9MNanm8rrXqkMhicqIzLG54tITpBKrJrLYfNRvk4i--sOpvczvGPIxIbfmVJYLzDSi7uXHqy_5MvJqbiZiZUReWLcn6L23oN9ma-mQFL4zA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112039835618428399723\">L K</a>"] },
            { photoReference: "AWCwydjcY19KIuVTjoyFsoMsv1Hxm1MOUSjVfgjWA-H_51-FDKomPgN2avWVaEvslGkdrg5kRTeDZdFv_Co7uePR25tsm37zlTR9ocyFrmTLHxkKEg97cPbp9h8bo1sFabr-61MV5sV4I0ox6k5aC7rwEjr1y8sb28QbpZ2L7Qs7bMik0RsmYBY8dUBXusRjGC6v8PBcEle-mY6AGZDJJhZQptnB_BVRDMj0szjk_pZQeLqOeRYhOggai0rGKH2ZYSOAknB-a6_eZFyhLo1JXMlhDwW2mWh9PdPHr8ckW_kPzKIqrtHrFgu1Mlg_OHepXByi9IqduacxHd10yvDIXuRRbsYNMLf28UQEPRMMfxbEdPrVvWee7lJ5J9bJOZ0s9DmtI2BPpe09HLoLn1cEfMCnMklfHzx7ZTaSvpYzw9gaVQs", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109147411628994482300\">yowyow chen</a>"] },
            { photoReference: "AWCwydj0Vy1AsR1f6tV4LYUQ-DbUUbtrAnCwDvQ-pMAESUJSME7kAcUWhuznAd_f9HbgVeoFlqR-PnXiNTAuF09pfLE_A3JDUH7NktNTgdAZiP0iuNKu8Jwi4jGKKBGtZFMqE_RLkv36y7I1CRPf2hT0qeE_uHbfGqiPXo4cdC2ENfQnyPoXbNfSc270lE993bvg8_sHMfYDNyOcBKwpbSp7EP0hYPFxY3_xFw3KAxyi4eKuxiQSlVT4txaMyHMf7xTUvRoeZTUhr-PobetUQFrpBG65Y84KHbab6FFj1xU5XOwUjsad59_GDkrlPm-Pgd8YvBDuvDi5coA6nDSz0b008r-xLhf_X5y0HsrpVEK3KpIk0ymE0nelrJhyZyIx7FPbSu1aUooWvk9R9qPYU_4TlCc_s_o7KCkzpno2bc2d2fECUPkH", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108804839641828724651\">Hidekazu Tanaka</a>"] },
            { photoReference: "AWCwydh9FL83MiwwFsgL3JcCYnhrVZ_wPcMPivvUfQvJErKphEKL0IwwzEcKalXEv8c2FXvhmR9rI_BLUkKnEWAhs6n3Sjfa9JWJGpmbq7hfM00rFudATKLp9sEOn1WryjQnNx-bnR9_97So63kHd_0wUesYVfScnf4rRNBWkACkpt3MRo7keanbwgvXMnWO4_6InwB3TpmBGyfranvdrhrbNNkuXh5f6s2FVvBlX8OWCZ9iBTmjutoOzi5ofBNJvmVvMiSGrc9PRIFUI2U6XsRLLxawmL_pUO77mCuk16CCI1TyUHtbhB6Q_mVhL8ZFEYPtgc3x4VaYwoH1DkuxSt8AbyJzAxfY4BxRLYNc9KH17fbgzVhgx-F7VycCgGpTAlg2z-py_CsdDFs_j9q3gKeTPrvKd005Ehu4JhF5-WIw8xJ2m2w", width: 4618, height: 3464, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110025113478547606103\">37 37</a>"] }
        ],
        summary: "온 가족이 하루 종일 즐길 수 있는 대형 복합 쇼핑몰",
        updatedAt: "2026-07-13",
        highlights: ["가족 단위 쇼핑에 최적화된 브랜드", "다양한 엔터테인먼트 시설"],
        tips: ["아이와 함께하는 여행이라면 필수 코스예요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mitsui-shopping-park.com/lalaport/expocity/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17481515500333781975", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%9D%BC%ED%8F%AC%ED%8A%B8+%EC%97%91%EC%8A%A4%ED%8F%AC%EC%8B%9C%ED%8B%B0+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "신사이바시스지 상점가": {
        photos: ["/images/osaka/info/shopping/shinsaibashi-suji-shopping-street.jpg"],
        placeId: "ChIJc7M3_BPnAGARI8OZlTnEXGI",
        placePhotos: [
            { photoReference: "AWCwydjwN37r0uC8npKzmO8AGh9xgLKvqSSbrKT7Mz_y_v01D7olq4Czbh1ocC8gebAgDIETud6fp9rIXWCPuETUy5wmv33t23hDNbqm9OvutCRRnxgMoD_f0hZ_OcFH224bkP3CBIhZOVJOfX1wf7wcybocMVZr8O3_GBuYNCIUN_0w2eDxc64jPHuLchuZpuz5uOLpSOPcgEqVHbkjzgly8naO9VaWQMz4IYaw8eTJlaXF9cvKi1yWYsjxUisq9JlWywKiCiItmQX2giiFkYCIaVFyo72dVq0U2hVl9LYayp3UBXQviA2shmHfYLKZ_b-00aFjYDzRyCqA6rDX2AH9GZXuLV1ia-8oHGhyzYJxWFk8sJJviGf8Xjxw29EJpwoB8oMLUJ6yZBqQkkkZkez0fTx-hXrORHwoY5m-tXTjpaH-wg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102057908644332506836\">NIKO NG</a>"] },
            { photoReference: "AWCwydgoeYN5UL8-CvmQgTUgjvxiaCdzSW1puug2CzgYoWI7sStS0waZi0wS9u1q-9o5WEOGJm55zkekqB5SxsZuNsTp8GcWNz5aBfzGyNp_xOAhIkTTlB89ettI8I_FWp1KvaFo6ifvIuTBsPh8kUMz5-EZrfi2d6gkJuo72pOaNbX0tXhhWmKNvvIq09aFpFVHO-ICwc-Elam5IMAXuAOTwamGb6HVZbYXRQWW9mmLkdVXzbEk5giqcC0P9YEqZCHdXmzpmposja1Av9PZOyRSXHS0SQYCVEqG18YGtJ-tp5_r47lKmqVn21lPm_ZFEas9KCVneX-6d4y0Xq0kSY3OZNFdA1RDQTaQJSUmItrwxhs6RObDOmdWtrT0q3RUgpLcJ5FECOq15iKMG2TzrVTeKL5c2SxWxQHBeQc0L1Rf4K89Sw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110699918951917976807\">hin SO</a>"] },
            { photoReference: "AWCwydgrgDoWDngrBNhyyvVIJlDlIU_V2OUiKmkay1DVJjdtpfxRVPUEbdvx027l240rYvNroMF0b_NBipxI5pUdUBU0mRTHaXVd1PyXOBCii8apW2v2ATZhJyQ-35IyLnWmUpqKD3G4djDkzzETgO2yzTmojyHOBko60arJpV27rvVVpfSIW4M3lhuSa0nRQjP6bn7A1z1jXVlmsIARiadVlOBqvBBHlHJCiPL5Cs7XbS1QltLjh4Xt5Dfej-c5LjdWz4KAg18ibqfv2GgHD5YUJKpkK0_b2R6UHTnzgOVQakDQZ_azJ-vS0Ei_hOs9bU1wsMSFI-nLnMNhtr-4g38RSlRkpWVKYMQttHca3tD64UODyCTUVA0lvJOWSs3be1BR05sWDuPfTah7p5Urir4t3_0LMrfAFeLj5zdzEiBUHos2Zwl9", width: 3480, height: 4640, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117093153718443163460\">Louise</a>"] },
            { photoReference: "AWCwydjitcm73uFvyAj1v3Z_8wmiNNfJVRbWjIuBBHXsATrVskJYlcCBEeuErSjxhZLzz_orfImoxQcbUu7oNeqI0a1x-rXxTkDVC87UtOl-PbJ5N2B5EgQe6oA3_fCnZr2UeRy8At7M2S1RBjUXWy55RVKuWG4pCNeqC6b0RZQR8qAql-dOMHmqKKjqM-9SVhmhKB0iZfb9u04XVGoFNM7ySrrmhf6yOwwdmVPDZqN8zNztKo-ro7hDHXxPLpmmJ9e9LAe5QPmmZGUBmNgiZtM-_hSENFQXid5baWldOFkLSdkUqP_qNDOVVLeEhrDhbOsBPFuq75AzySUDVwL38Bg5NS_OFRxY-R7wZSG5iLvpdKGP53YvZa9mgiOnSzRUYgafwOo9eKA96KoDyHoPB3vqk9QMU-f9S4r4lqxihsBArBXzQWjN", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108766324901327085193\">JAMES LEE</a>"] },
            { photoReference: "AWCwydgwtpcRo7CbgbtrYgAokBpCfjiuddj-fsTHvx12lxuC0TrS79aRWnK3YMyBtZ1rxFxrwP3nLYEItcf5IAEnaZFiOYvoTwETW3o9HLho_HjoV6MEVdb87tWnAiQy2md6rq1BDjv4PYBlFdcgweqn3M8e7dw4cLr6dD3mINxHC1TNQ_Alb8PC3O000wGpWMKeDqURDCaiUaw-TMRb6HeuEYb_rfUOLNLSce78zaWpCPNLa5E8G-Q5DpVvSMwE5H4Xgsck9812DCNfRmRCnCWWaOpmr3tLjDHCeZpQH2Xn_OmoIJ7a2O9DKfMkYKeFASW6toRVARyww2zyTpt6SKFYPFs_fPy4NGxdhRITokZlS-okuubN57D-rk9MrVyGZ8O2j7cdqCuaEOVwk3HN4BMauSdb7WmvdXOkwVrgHbzGZ98IpQ", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109914439093136154820\">ナオキー</a>"] }
        ],
        summary: "패션부터 먹거리까지 한곳에서 즐기는 오사카 최대 규모의 쇼핑 아케이드입니다.",
        updatedAt: "2026-07-23",
        highlights: ["트렌디한 패션 및 잡화 쇼핑", "길거리 간식과 다양한 먹거리 탐방", "날씨 걱정 없는 아케이드 구조"],
        tips: ["주변 도톤보리와 연계하여 방문하기 좋습니다.", "편한 신발을 신고 여유 있게 둘러보세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식/지도", url: "https://www.shinsaibashi.or.jp/", type: "official", description: "공식 또는 지도 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7087755665176380195", type: "guide", description: "지도에서 위치 보기" }
        ]
    }
    ,
    "신세카이 시장": {
        photos: [],
        placeId: "ChIJx6sIjmDnAGAR6MZeGdLQCi0",
        placePhotos: [
            { photoReference: "AWCwydgtfJrYpEoLY6-D4Rbs2T1f7VmRTGaLIiKYkS5a8_UbtN11FFbsKUeB6y0Cz9oP13wn6XShkjUAnPeBmyNw2wGb_qQhR6hXhruUZRditQmSUT0Z1RymqreWfrzWainbWwbIk9kCRALVBb7bNMqaXYNu86DReMNUreN8PGNyGns35KRhgaGXOSZit2wtLan5aQxyVZ5dqKhf3c421vMsJVSLjM003B0RcCNLIj0pD9e2HeK_8kx-seM_LEntUwR3LCcwzIYFiZyobUATo-vuX2BSZfkNTMZakzo9Np4sIL432HW1VgcM3tAr94v93jS4OdLrCUgdCzIBUZExlU7ATd5-2-Tk5-yUX6Lki7yM3YemRZ-OXC1Z6QlTcfrzGmv9piA17gwk_8ly7gFexk8lmD_nQM3UNd5y0RBUmu9yuaseo0EQ", width: 4800, height: 3614, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101095644616576349135\">Fennie Leong</a>"] },
            { photoReference: "AWCwydjXGzmDl1KKappHbsbvl-UighdhnlT1DKmauZB-TYHgOGxI5T5s-vCTVDPJ0eYOJjSX8-v5yh9aS7P6YW--tGlfjQF4Y4iXakFzvSt2_bUM44PcKJOkddAsFFXFrk19u4D3hzW7yhUhU3yO_5ous8sm8ITbmOTo908RESzZRRzP6VVIKhgp3bjIFXX4aEkRIiu5qBWSSl8K4se_z53JXafVZD1wN0gCYT_2plTPJD97IJ-0TAWnm9W3VJJmJofmj9HE4ggFEFmt-b4-JXNEw1eLZmhlh5OEeSGITLrZqP0SM34gYh_3bIOrGCfWBMyAnUdlGrSEQVWdLRku8iYc8XVrdAxDfpVsHPkbnet08jLf4YZgxFEgvpytDgtGYuze4YDnDWJ6JeI8JPEjgAb9VTJyv1VsYzmJtEmDsB6WSyea-Q", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107216194717376568469\">Meir Sadras</a>"] },
            { photoReference: "AWCwydgnE6zXIEdqy2nW_F5lyy8blzfOFHncio_j5DjngrBOArJVugzYSn9AZ9QMCR5_KJUndN8yDUEfEQqEYDNSCb0frMs6fLpM5kDZE1xqBJfTXxJjIcbfoqmlWmlYPIAubjrHxbT6ux88uv0fdQ5Az1211NjhXaTp6jL3sYzrMrGS6z53TM9oDgsLDge9gJ78L33sS-RW9zd9jnNjlYh03RkwgyF9PID16LHPHxCEhIWi42nhYTuN4AO51z1CXF3s4U484SC7AQ8WzDqVii5xvkS9kruI7c3uqKkXr18gn3VOFQZOuV9HSaH0MjBh05dbxxsAqXoGYuMhHdPIR5He8Cguct-AQc2w7sFK4T6Wys3v2-NXTcYBfVMHqJSxRJYAWyIKHWKe7OFw1_MaP4X-KvnD2dLuF_QMkCSLkVglteDNGQ", width: 4080, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107629135706508217703\">sato</a>"] },
            { photoReference: "AWCwydgGDtJMmLfEpQK83V3FYTmrAXhRwPj9xQmpoaonnwnu56H7Zml95DaLMmXRkdrs-yfHtfXxm43NTFQqLEG4dTNRNA37fZ_h2nBTbKTf63ATHnJpk77QNqcXLk0HOSMChsNH4Q6d2DsiGoF4bT7iNrNvrQlMqOl9KVXyAzsnMvIkF2CxUeYUtsQ_MiQZ4u7xzjmgC31WtBU5ymFQpDQ4fukJHmK0WIS-NvUXcWx93IVg4YlYgC8QNUxYO5t80FCNOejfLWotnG9amL3EP_BCAw3cHG8_9_tDPmfc2-wGQ0DB1VcWcsnOcfoszd2NUtttjOMLjnjSwaj6B96mV815-r_axsGFEMHQDwydHVY-ElnPMyxrSyDIEGs9ek-Hjw-7gR4VVTFiwMNYx1c7PfHn_RTu3cyjC2SN6hvN__nYIZ8ZS-NDxZ3Dz2_Pockfng", width: 3614, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111203230084365417659\">Valentino Drago</a>"] },
            { photoReference: "AWCwydg8IHE5Us2GhkMuHRy_NbvPia4dMuvTEBSbYr_bMJhmB2GWKsS30NEn0jnawsfQ3J6TndRuYSROZIv7FQ5vfZ2XFeOca_Brqvpnf8HY3oKVBGKlh_93xI8uYeEHUhfyv3yErY-uUJxJNdkwHc1hSwE3F-ROZoypmeLT8OxVxOUGCdMCx26FnGOQ4rLOwyzUnYV7E2tsKPKMc31iT_BGR69rgr7uuRLRVGctUeyRWvkeXSlVuvdhyacpktQ9C4Nx2xIhwsuJR_RTUT3HUjmx5LcXPGTbWemkKZPELwEwjlTnEdAJz9CxGuXeFAjFSw45J8sv0NvUdXLrLXfsbt8-PFSOPVDEO-fdshnY6C-zRm7aOmYBIbO00izaJiXLSVRDtg3IqQqfyS3vBmcA2YFvwLLhdJw2oM3Q_sny79AqFFuQBw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107515925831550241068\">traveller DEEP</a>"] }
        ],
        summary: "다양한 상점과 식당이 모여 있는 활기찬 시장입니다.",
        updatedAt: "2026-08-16",
        highlights: ["관광객과 현지인 모두에게 인기", "다양한 레스토랑과 상점 보유"],
        tips: ["다양한 식당이 많으니 식사하기 좋습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.shinsekai-ichiba.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3245636082261214952", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8B%A0%EC%84%B8%EC%B9%B4%EC%9D%B4+%EC%8B%9C%EC%9E%A5+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "푸랄라 덴마·덴마 M": {
        photos: [],
        placeId: "ChIJ5akwcMfmAGARY8QyhVBB8wU",
        placePhotos: [
            { photoReference: "AWCwydgiQ-qRK9e-3XFMp39lWqsz6KpKCSmtMVX4JZ-tSU02EnVlbfo9ZgSsL7r8da1TeVLzvvlpSMo3Z60T5GBhKxoIpgqm5SbxkAa2i8xbdbvFOkpWIra_xeKxu2IgeMisWtm5RC7NsxYjTOCXoh4jCwYrlQzE15VQTULpdkZ6EjNnJQWtKQ05eaao-lCkIf4YXKJdMxQ5PkpkBmRFpHNMvcX15Wfp-qTOCxwONFh4a3WjsCb-eL3BK4Oeq2WH0qhn5K36TEClbB-1czbhYLk9s1dMTzxzBxJ0DceDWb5O1zti9qsYqG1cbvObdgogNTdxS_k3psHw0ANJbDPf4KxSAL0iF6h9pWV8wGEuiq5YTei2uCJt5EP2z0LvMEAlXLg7i-ccHz4CYl8GvbEMKL_DssVmdJFRISw_WxIisdIzswMiqnRW", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108771793904511724112\">南岡寛充（みっちゃん3）</a>"] },
            { photoReference: "AWCwydhA93HNHzt1c9siWky15m2JtF7tO04hpZ-15LkLhNNvuPa_lEDuiqXoRo3aMUxpxz8KHPAbRaLejGLAfTDSw746U8UVEo4de1sm8TELvnBc2NhfAJsCjFqsEh1jClCJ6vc-xhLVx1HT3MswpP43SbfHLpL14Z1m1TN4Vf68XhokDaWRk3g4qxYbf9zazv6kPGid360DZ-3DaH_PYUf9spL1-3aRisdGh6iX44GHGJYQ-iTX_Uc3aZGR6Y30-GOQru1NV33Q8HpkiMMpRacxtjbGTdQqkEYkP3K3vi4iDQzJEzGLgSUFKi9PW-cD3dkDxI6W-6CPRqApE6V3v4wb2TS7CSVTMyPWk1dqP5HKN_8tOMUgu3Cp842S88FuiYM0mR-IzoxcbI7uBkr9wzMZWbFiyIKV3NBE9Kc0umQzfTzee0aVWJmaVZXy_UqcGBe2", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110832945885871844905\">H Hao</a>"] },
            { photoReference: "AWCwydgK3ozj5bfeso1fX8YbvQcBzl6FLhEZPB868EQnMeIwlGpEEipYQTO5zGpekEtAnsBNVvqymjrA_J7eL1sgGudJ4TIbigHpf7hjyySAXg6TY4brolcfaaDS0zeH-AiHKwUflmSNofjhIILqbZq0ti53nG68otz_2fwypwzMjnMBjuuDxObkQj6FCmzxgTgWABEcUBNUdxC9IN_LBg7QFC_7Rilp4FhjQzu6IyEFSW407yLmeTmQP56wRa-MqaNTwhSSmQzEP4m4KZPwrUV6cLhD99j0kfMBDv1_4zADpk-40wv5s4d5gRdDoH0cFLcQMfFs3SSfbxjtG2LO2JsZVyr76YqBJe7yhXgVN69XKr-nZsCqF4GyElBeAjzmG1V3-neZsupjJEVdeuMDiUYrxSYtARbkZ_nqKgVdmu97Da_DIJ8", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105856541327388343043\">うどん</a>"] },
            { photoReference: "AWCwydinF6AxnpBMzmrYxSaLyb7b3DquM3lRCq0MCxalZ6jw-vPFwlwGJHpQAN1K993NobhWbyMenXNNpYDyl30BX4LiybjgjbhnnnP9cJeuLvUZj6b3-NhBjzkldA4q-fO_8Zl3tpj5DSOkagxO7rV430IEL96zGgWl2Ax139acHzPypI3aGEiTIQIisoHD49YcfNytYvQxhkOFRVfugUUUIs-PsJuDNqggOUx-yDA3QG8LaBcTkVRUq0GD3kWnCjlzZ0zKGlWBpNGOoovthbf6zVn5J3t7d5GkSjVkCpBy9xHEfPa4hM6vf_qOE2atM5nJfi2eKZ9AMSIpZl80TBeCE3WYgAxuQlagB8urFBXiobxMOLHWhXitaaAVQxlN_Pwys2WrE6VyKApuoMu5GqFoBv7bO7AVcmjVtETNCNPB-XbQ0w", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105026020016069991292\">AL HUDA</a>"] },
            { photoReference: "AWCwydioMtHg1gtaoYZKcOgvIK-BofBAtLemBJWtkdl_UO--bGxrH47gyXY_fmZOcDUYF8Coap_zt-M15vcOftZ2f4bEErj9STU3JzXLA73MKkj6Wo875S2a5rEIC0m2DuLE1UGVtXPO9t00eLB2q5fDXdLsqM-V4NPHynwXdog7g808cBV0LhCXtxGJONk6mR_hZbAZPHI5fQqP-bb9ghiHPYx_aqM_8gm07ERptoYr6sT_lYzDw3YouP040lrRQz9WP-cgBs9t99FWW5mqxLoeQdvXxjs78w0et3zxlL_xqjlqRMXGdgR73kXVDftMRSlBGJ8d0edd04EU_AEnhJ2yhm99QIeAfzdAQh3uZuUYPdeSTRKmbhDWonkeIsHZHjxDM_zO3trnqnTK23rJ463hsUZjKyZckkPi4QWzDHM8Y0QNt1Dm", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114397614035104373490\">days sunny</a>"] }
        ],
        summary: "쇼핑과 식사를 동시에 즐길 수 있는 활기찬 시장입니다.",
        updatedAt: "2026-08-16",
        highlights: ["신선한 과일과 채소", "저렴한 고품질 와규 소고기", "쇼핑과 식사를 동시에 즐길 수 있는 환경"],
        tips: ["와규 소고기를 저렴하게 구입해보세요", "쇼핑 후 시장 내에서 식사도 즐겨보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 7:30; 화요일: 오전 8:00 ~ 오후 7:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://pulalatenma.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=428758203618215011", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Pulala+Tenma+%2F+Tenma+M+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "덴마 시장 상업협동조합": {
        photos: [],
        placeId: "ChIJc-YOj83nAGARGCciQwYYPZk",
        placePhotos: [
            { photoReference: "AWCwydiH6b9Q7sCk7S03mwZi_5A8FHE8PS-5YEB6WxAts0sObVX5iUdUKFqFXMt4XERrjKFfXMi2CYH1CuJ8xCm2vrZ3--U9OvXEvRQvmmchu5b3h6-Ts8zqt7ChSURI7Py0q2oeKGdWO9je1V6D8JXclDd0v7d5NDj4gYQAptm7rfZOteSwF3JspHJgV0aX_drf4nD0d1LkDWLFI6ADguuiS7X9DMVnKxdllDu2F-0ckenKiuVRl_QCPNX7cNnmELoC6qEhd-wLWrvCxYy58M2E0oHoCOB9-hhj6ZNMceTkyjioObjqio1giSv1gYig3TPryq_fnnajmiLu2anMGXsn7vZyUihevQZBK4zNj-0T7f1ZTrndALo6xcv4FTcGd7mWF52HsE9BH4Tzr5f5ouKwuDxBbYTEcF2NzgnjOpeHBa72kg", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115983758253416652147\">Xin</a>"] },
            { photoReference: "AWCwydgrpxs4g2mnCGTNEAPVxtcR97E4LA8LRwkrF8KyTzTsGPPruWlCPBeJWdlLXfZy8v2Vwq818GRMOgQE5dhnRTxRXl9_e_D8UZGixLz46ovSiTchgN64KmpH6XE-EEtTtoiQc4xH3ccFOpOlbcN66dtz3UtGoh_2YqQ-gx6kv7Uzo5yqGeG41cTe240p6Oz_JDc4IvcooeKHVRCV-mrkDAXRs26uZOQ-hTmJqNFuHFqN0z24x2dp7dl2av0bFDsLeZSF84iOH-CTb4vjWtStmawnA4qGQqG57gXtasiiqaiivJLJ-lQGpFgheNhSbrQQs5_wpQ4jQ-tx-gpshIsVe1kWA1_S5BH6Qyu-zRyBsQ0zkk2IOrpuo8cAT1ehuTRozXY4JVJrG2wzsAb50-ZUO9mhOJbdX-Vf5_mEbRgjTM9afOB3", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105709009377769047019\">miya215 chihiro</a>"] },
            { photoReference: "AWCwydh5jzXABOqGQpARE2DAN1sEdocRg3N5Rahgg7sq36wqFG2GL4vNiBh7dszvQCJPS_MpuoybDhIN75AUaJVccr93qsuy1-c8wa_67BIDM6EP0FacJFfAR3oS4dLRnamJKg3jTZ74czEiRNTONS3a-T0PDZX1qyqXoAZqutLrZ6lNozjCwVrItFx0rF5O7R_WR8A2ZkGc9AQ2-X_4KbtKsmi9FkFFrmxb9oKs0dqbGuBUdth01tg3QaqpBoTxx5dlDwvl3v7k6USCfUrELuxpUp1g6QryWg4MhkNOq1r4mkGmzogE-yyb2wAoOXwRn8wQkktKWrnAC3r_DpT9ekWCvgAa6H6lywQZOV9GfG0_3WMagwnBAousIeFtkVDlLxyIzt3hH-vhnlwgrBFM8INTKOgEtoQsGmiuGQ5qrfUL-J4w9zPznijxPG8d7PkRd24q", width: 3586, height: 2017, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111906427571581210503\">森本嘉樹</a>"] },
            { photoReference: "AWCwydgSpKni9sAfXhKeBQlLC_gvwcM1unX9TYU6e81hZYyN936GQnGKKTOOmxtytM-0eeuoweNihVePD1KTyxIiti-rPh5qdqxn8oO6mucepREB3MsdJT2XjcRbyLUQ-YIIChpWZH30-bIQ3KEz9fbjYOCtqXnCBxRK7gqgs-2ZvqqScdxiMe1h6zW2B6F7U2jILwcuwiK7Z3gB5Q916HhRwGjBjZj7GPruw4K0U0m_PVHEZDAtdosgu8K3I2_S_28cmNPyfX3cTY3OQYJdoEczeFHKN6sNLmePuCz60YRorYXKZPOxDgDi4ayrYjT4Xc0AEq6ATI34aKz2IzSjZ0NJohAmHnysQoqLWtSvgyCphGfeEF8c7w0UAINiEfvFxWDMXZtH1d4nrEcbQ-cCFkb7t3RLdL90xohOBzMa4y-cAWJNKW-RIUm5W4PzP568u9r_", width: 2048, height: 924, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106092825534660249743\">Rainbow Leung</a>"] },
            { photoReference: "AWCwydiOmxw5_e9NDRF3DuI8gi76UC_hKX1CZRzUxMSokM0tTZfrmbSymQgzIUgD21PGmBfvaBD2C7fDq1dYYoXRlZA_f7ZdFwnrSGBNdhKHPlXP9snH8I2B86U46qtEwAg4nzfn9uRVWnTFXuoTMydibLHQopG95soniI3EpXcAlZj32NX7rlw99bv8G-KRViTQo0UluwBzaeMlPGAJzcqEwBdK0TOiqykbcoxKUoum3NGbB88qbRvKx5Mhq9dR8BSW_ITHMgWPtykk3hOZ9fJjs_nYl8KzVbAImQSm2NTm5Ayo29s_Dlj99kmnCuUh1j70IwVSnhz60m7Leg3SLNcWy5wVogyHr9_9QC_P9ZtSE4wmAls8sg8xpZLOR0016IBNoclfRP-Xg9WpyUQcf69p6sGFZ6xEhx4ilOFchE1SwLsHjw", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108978657719749208820\">ジジイ</a>"] }
        ],
        summary: "오랜 시간 변화를 지켜봐 온 지역 사회의 역사적인 장소입니다.",
        updatedAt: "2026-08-16",
        highlights: ["지역 사회의 역사 체감", "변화하는 지역 모습 관찰"],
        tips: ["지역의 역사적 흐름을 느껴보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.tenmaichiba.com/index.html", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11042008276557506328", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Tenma+Ichiba+%28+Tenma+Market+commercial+cooperative+%29+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "쓰루하시 수산시장": {
        photos: [],
        placeId: "ChIJQ7K8Y6jgAGARINvjq-TC-c0",
        placePhotos: [
            { photoReference: "AWCwydgahFhh6pKyTB7xMPe89mAq7gWDSJ6QT-QfDM53YUSCWfAcUOvY-ZW8QG8SUSBeqH5sB9otRL2lbrAv1ZCtW6QmL_wjRyg6GXRCZzFOFUF4fv-TDgFfb_YOR49IvfGZt4WRcSuByTCsUmRDqEvMuBDN2irxtW1mf9IjIfum9cV8SQaYnNrKZ0dLvrEp9CpH58UghShopoP9RUiT7QCWtWj44TE1uu77OMKQ4jVlXbrsK2kfBs_sDmcbL5XIghGGCYd2XJbiTZz6GDKo3ifMju9ljSSBiE4l8QxGtQUmnd5KxuNExe1bz2uR6vOZfnRXfHKfpAqSF2CmsxRvVlsAmJrVHRQPpOqIDTDVzkEPXgFAC0wql4a9U9Pfu5yKE_TsEoNYuTlZMqyWPzIVqFy2EdxTeBcJqgvrgc8g6QFArO96hqo9eYZSvt0RZhU0nvkv", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103252966489816805057\">鶴橋鮮魚市場</a>"] },
            { photoReference: "AWCwydiHgvoJIlybzzZWXYjdu2VQ9dq9viFEsiWWH99Qk-utD2Y06NyCPdn06hnFY6R2xDFdspUFd7qZFj1iPR6atr3tinqz2WlwkxO9tWx26gnYWTbXsCoOtyjCg9edNh1Z_BSozec1ykDxiCns4mDHbZQQ1hCQAfSgtQkDXFfhgH79fwpcozHQItZ5wC57z-PtPNGFdTi1q2JPsWNTdb1qheoWfSEik-0ZShfMGZr1AQPcXLVkaAG7V1xH_BOml7KeVx9z0YFcHD3ClloFwMxZ4kkuHvmjro0oymhdbt8nJbXVZLIXjozGtXkLJ9TxJ2dJQ8DtdXTVwFquRX46OXobbaK0IQjuoaa0vJUmw--eyQ0EGCSyagi82_xaIINb_5JZ7PQpgPGk4NoC2Jy5ClzbKCnkz4bczQ7-mdmIxjOHHQcj4w", width: 2976, height: 3968, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113546806354655678990\">野村聡</a>"] },
            { photoReference: "AWCwydibkKAyJz4yWDR6lyunJQRtOEkzgF-mGNNsdooFiGxsUUQX4c7tC6UQ3xWaAKrVgfY2n_kDIIKiBY7YBg5RDyQSkk0EqSJcupwdN0rwQujrMalYaubcC0Zy0sgaaGaG9iAEUg3giIj848XxBln-8xPGX3MDOcGTsaA_jd4ZDfMMqe6QF8Vu4smfip4I5L0JWmnT6dBNXefgQYnpyfHMdRZsmSNbqw3K-ZBd_QrX2lzZexVsejg7DrhINq-nJe2yrP4w_QwKrQTUgSdy3I-2q_ysJp8uegHY31hgdbmHs4XGQxfNixXbg1USqwaMx7fx7IexzKHDcErdCldNIkpHmO3OgQ-3bmKlsRmdE5Jk4-7iTscNpF_H4y0iWlcKh-mK84G_gpAw4eLvF3dW5aH0D_7ajTPiAx0m3IO4QbnaUtQjOZl5nP7fj0lKWlq9GA", width: 1061, height: 352, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103252966489816805057\">鶴橋鮮魚市場</a>"] },
            { photoReference: "AWCwydhyMgoVbENbTEuFih2QvnqX788mUSbJEB0nbx--qyowN7NTl53gVNpUv5VN2sjdTskgLaf9ISnxfe3gPbEDt3EDvszaFgzXDqlOoC5JuSTxESAY2xAAq09mJVJ9NqxzeMcLXyWmIXMijEQ2yk1MUVTz0umjhYcjKUt74f-ZRqvljmv8xG6hW_HhgekZCLsLeiMYrX1rLSazrjS2elZD10NuhFRLT6WggEnl_09xKCaa4aH_NVMKykPZ_FmYr9hpDaDMix5iMaJ0_2ezbb50kqXmyvcFGgwC0ffIqM1fcckTv48UaG3A98ifN3hO-TzFbEFN2nazA1yTq3n5GMs-Twf3QJwRPyJ5ElNypa5dXQMAdBzxmqFliovBYtYWpnAt0DGBB40GDw9tvhR4Y2McYjHHWZ2SzAyfGtCn_6kHnheG25kpvsNuUCz86-zDlg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103252966489816805057\">鶴橋鮮魚市場</a>"] },
            { photoReference: "AWCwydjlY97SOc8AfbobyvW4nje1UtZYkdgVRCbNjwFlmmZUqvCfEbNw-qSE9XCh97WPiZVX9GK_kj9NQDS_zDWQEVjOBr6aMaAO_NwUSzHfnLCGP3-tbc2oxcyZQi_164wQDGeqyb8xImlQ5X9yvODDRmQba9mgnu3_9o1Km9HOBK4seYONtf5nO26nNss59W35UesFo6-Yp4cDlFSzlTUiQENQuazOllmsi9wAnDDriPOammMVVu1NasSHSJh2crMzlEG_ce0pzsfWUHTmZblrKGCN4yIOQBW5Xi-K9FTs7_uYlOSAvMS47eVjyyLZxj9j2_5pCkJx5AjP9jq0uZ_u3NTLUemSRsl6t9sTDZBgtmuevTdlOew-sVRu5z9d6ETcfzilsV1_v5_4cP6gBegeC5PDoN244oy62EELcCCqERKyjpN-", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103042115207990787177\">เชฟบุ๊ค บุญสมิทธิ์</a>"] }
        ],
        summary: "다양한 식재료를 판매하며 신선도가 뛰어난 시장입니다.",
        updatedAt: "2026-08-16",
        highlights: ["신선한 참치와 생선", "장어 및 야채 판매"],
        tips: ["오전 영업만 하므로 방문 시 주의가 필요합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 5:00~11:00; 화요일: 오전 5:00~11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://shikatokinoko.co.jp/memorial/advertising/13436/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14842108334368348960", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Tsuruhashi+Fish+Market+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "라이프 센트럴 스퀘어 난바점": {
        photos: [],
        placeId: "ChIJfXPqjw3nAGARhca3Vf52P8s",
        placePhotos: [
            { photoReference: "AWCwydiSRhrkZYsH-0CtoSACv8i7Hr_-kaLRH7DyaYE3YxFOVGHWKrRI6SVQoVKxFYUYcfuDEOqLnzWoJLqa4TWh8efbo9y7hIq3p87numlJ8UXXoU6XDjcM1PgJWWs9k3aX95BsHpuZkTiBuw9pnPnWHPtiKEzGWF0ewF94J2SOnt5qQNex5QIXsFCuL-zD-2AjxtEtJjbNFJuHsC1Ft-mzzgZvFQwPPZcjskVGH68nb1iBGgOlWCZqkgGBSDWiYkBNvBp4P08IZIHQQc4o0ch1T8MuWhjTwU6-b4vpY1gEnrICrghwdWUFUwIZssAzXmLXqgVKiUv7JKHWvaR04NsKlfvUvNOtV_ZCcEv9lFu7G5TQSonUxiBEyTLJ1Z2vV4Yk4VFEWo-n1NXE3Nt0jFD-VbAgx942r7nFP3YXvIJJV7ofIZM", width: 4030, height: 2687, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112228717848982338439\">t s</a>"] },
            { photoReference: "AWCwydi4NW2gGc26IUByTzUZlHp1VIpLzl89HozaKAEzUIXMWI4duLkXSxKwloQQQWCMaQW52T0eL8JdvsOfFzV0zTHb0qa_eoBQSeMVn11x0c-DB2MSipnNNUKTvs3v2g_lMSUJlVVHQoL2ryyUDrl1jVKPXR3vIl_c9IhJxBet44FcqcgPaV00gcnuRoBt5Xn2SxOklIluc9s4TCGI7QFCXiwCn7Lz-r6Qr3Q2ahpF6XKDavmJIrR6NQxMSUOnJd3RcJqJmOL4239zdf4fCqHix4ufQGfLMr8Qg8OcNCJBFnR-rr92jAUDHW3ns1k9YJtBv74tNRsD-ouBQthtjIhQKb0lkV9BIdWUqX3LIPFCYd_Cn2hukXhieerKZiikkV2bhHUamIc_TRnPxDUUaWwUz00wrUIoIjH7wWx6kgBPhfN8fQ_c", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109918762269162887282\">woong jeon</a>"] },
            { photoReference: "AWCwydgSgKsf1V9T-IVeonoI79luKBCryWTgsWNO5KHNcO688YIzogP6jqvAqNpobUnHMTd901wGCq4H9XQEqNNx79Bn5jQ4kedMCcEXMlajZ-Os5LxHon5Lp5y6iQNdRx6Xtk2y2EzcY7vcLDOnqVnMh9MqIILORHxx3qVfvlE1xlpN0NApinfQGfHVbCk5AG2b1rtq0eY-lTxdtarg8iCZcktZCjBtUHjbEw6lz8wmiNieCGM2rZsO9TeZRWM8CrCK-Y3QHFTu8oAxNp92FZZJRoOejRJa-Bx-tEEpO0mm4W3NfCFgV-JDdXZX2BD8Jgvl7ciciQCMVMPFW5U1ZCmoIorUKPaKDmFsXrZcvekAexkCZf4_QFQpa1M02Z-IzTWMvXFVNA8bXR0pNQK5nnWlJqRxhJL-nS3F1TG5IbriYiLFtA", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106926633961151496563\">萬金千金</a>"] },
            { photoReference: "AWCwydixy-YTlRAWRfl5v1wiD__N3bBAV0y7CPRiI3rb-VQ_bnE2iJNCr2l3hu-PA1U7tN58HMTQCL4YmtYrdMmVRqX3daq-vchwUYFJHRuYwKjSq_4j4D820ati2V7ViFdVyEkGFpEvXax223D5peRlMAY7MrlVg_VjlS81fxzz8Z_BkV3Fq-sJqkhX3jTmjlmdUKxpud_s8tcLqLAmR_QMqnlGV6Eau7F4aDzwBVdKH3NTd2CDyZp2HpO-dxrKN3xqQ-Y33UPTgFy5HfAHCoaP9zN4lHjkZppvyqb5GUYIFH_0GY2P1qSBWqOMMcfacL6xVKrTVwOxkSvfqm0C3KTsGgH9pWFdy-iHlM_mHZQs_COLITsEnn7tvoATrWqOXo6cOfqUeR005M6zeypOQ8NikpDUtu_Z8sqF7OlDi-DlrrIU4g", width: 3872, height: 2576, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101900328988692368672\">Piotr M.</a>"] },
            { photoReference: "AWCwydi8qemoI-xEEyR8VMrnp-gB-UpaUrarexlXKqWG8YRkJoQ_TmGF3k9TUukGsFdabkU-y7C1fIyn_S1X6bkli0EeKUbZL8sHR80xBpad1TWKuc9mzxsSD2UEVO14J2VIBbKNDw2d8bD2vOROp8QjUpWTvcka4F7SsvoqkbdT2w0ZdvhP-LzXspVmgsZZLtJasdh03QdZIeQzINGvkuMqETehR7huR2RuLvhnQWc5x4zwOokhDttBG4MKUBGenY_8NWlK1UXJVZLMvWrvtQ79vCqu3hN2t2OS2mQqGjpjsZVFroG5Za2V_vEEs10Xj_59ZWfatWUIzPO214jzDO0Twpy2bMfBeDfLqDoC1N48tDdJKUa7F3XAuilrk1xqGfRiCI7TCMbt385d1gfGaCPjvaVt2lkKoKYBo4Wa3DCH7bP8-w", width: 3581, height: 2686, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106217676530332144177\">hiroshi itaya</a>"] }
        ],
        summary: "난바 지역에서 이용 가능한 대형 식료품점 프랜차이즈입니다.",
        updatedAt: "2026-08-16",
        highlights: ["일본 최고의 식료품점 프랜차이즈", "다양한 상품 구비"],
        tips: ["면세 혜택 적용 가능 여부를 확인하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오전 12:00; 화요일: 오전 9:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://store.lifecorp.jp/detail/west219/?utm_source=google&utm_medium=gbp&utm_campaign=map", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14645555347964020357", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EC%9D%B4%ED%94%84+%EC%84%BC%ED%8A%B8%EB%9F%B4+%EC%8A%A4%ED%80%98%EC%96%B4+%EB%82%9C%EB%B0%94%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "이카리 슈퍼": {
        photos: [],
        placeId: "ChIJPSttl43mAGARt1buWry1y9E",
        placePhotos: [
            { photoReference: "AWCwydjUXD29b7-jZShcLLW8i6AZFdO3bBVf8xPaqccwsgg-llo1hVC5qaP9kVEZ3AxQGAA5s-YK-Q0hnG1ZoZB5KZU1XF_34mpPIQyWKhZ71MMlTvm_9lIm5BsuPfiOuHRyxIaR229WZvzzSOtNWIaCsumsywH6G5NZlTaBg7TnwkzGwu4ySH55EYLUEQHfbsPUYnT08QZE9YAv6CfUE0AKaDE7rVUcePv4HjVVnTru9xB37QVqwEZ6z6wc91T1iOWJxDN5vqW1gTej1JrZy6X4xczrcVNq8av6XOJHrOyHyePVwythylO7u3YT9bhyhRWuNtj8EXKNW3I3zrBJ5TurR4tLDiKOhfhCzW8L9MLZEfJMefqbDFmurmk5n5Z9W2nFJ6qc3D7KyAugqv72NojQjyfqURPvmZE5Ax6GH079-W1tqrzO", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110287694403061300637\">Geta Chada</a>"] },
            { photoReference: "AWCwydhRS0jOFK9aW-2NvU059TcvbAxEgfj8znS6dPBsjaVkeacYjHauJhm0Teva5oAYiPkb_otup_ZXTIduGH4qaxUaRzMa2H76H7D06lWzzyc2aKdBJBXtunpE9bhVeMPAJjIDWJw4cDJB77DHr6iS9b7Fy3GQ4iJPUJGOfXYpX5A97H5SL7QojYot7s-qh1OhzC1L-KQuUDt1mbwJNpIr8ZkgyBSlJE1lDR5FI4iIb4AvNlTvoAOnmZlaBaqgYaUNUvx-xgICIWGT5wbSFzqBIzLkAl19fvPp7AjVmmMZG2VK0sbs_pdSGnbciBAbUg1TV5ZEFOOipWhuPfQeqE7nMzd_fG0DOLcQfgU4BkGrGj_OqBKvkqUpMuaGaiS2dwuTsjGL15yuhtqgA6pznGxl01Hp9rnt_Sz2kqLp0xABCfTA4g", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117323333459697605332\">DS Han</a>"] },
            { photoReference: "AWCwydi_8L_9h5Ey3pZXRPKZEIn3ylc-BGWMLUMUc-RGLMUTuSNfYDx8aNAMPnFUz2499CqfAGuRYEbZI0qqeWJnM4P5Tpwln-axtkkFvd4rV5K9GN-IcA0vMp3lYtgIVEu3spXWJsXzca7qlyTLvCa7Lhj4VqvrhIz-ahgF5zD4ZiOymh8RCfGPTFEXinSudkpbWrpQUS0iKJrWSRGgKYYqEBYgM51heecJbD25y8_-bzgGfVc4y7cpRADEppbOxGFbg0AI9iPWQ4-8XE9069fR3mZs7lCMGE_Ne6DuAm2Zf4HM0TwJynaDnniMtJyEFTFkUJA0svS1TKTXwh0xewMVDdfD7efonSrGkjIIeC5h3gFCk9TZ_8qYq0a3e_J0zqDupwBtV6Z4DpLzC6Bo6yWQlrdF4yArhNwrx-8fQHEaAOM", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114765326816667984172\">私の足跡</a>"] },
            { photoReference: "AWCwydjpYUvhURM3hgR9cTJruNA7fAhOIBh7izcsEZ4XVAFykI_hcgVFeMo1GDUI0RfWY-d8ThApS062q_6W7sJj2bMMqTlJrdqSIuA5OSjNpSaahNh3m9_tbgQBuK090v-Lm2ApkCP27WGLSNwomHiB1IwzIdKH7ZqowofXJmm-OzL3vj3TCnN77HLuhQ-24RQG6TgEfIPRva2-BBHRDauz6q3qS3M9NBXYgx0ri39_sQ-DmiPsA-urmCybaLRwgOYJy3tJufHv1YtNdPezPpO8UXr9JhKBogK4op3r8o-08ghhVhzPlPitljMBvbpJuVJu5jJBlz0HasL3iWpXlIgkJ20aZO6I21ClaNnAMGbkrPsNpGVIghDnJMs0wmPB794imyFb_9vxIdwiDGNNmKBd45FUjZMwXXg2DIwmnlB62IupUJCd_eb5FAN7MD_mcoKc", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101395813188199744850\">おけいはん</a>"] },
            { photoReference: "AWCwydgftjjE0YRsDVqGWuq1sLl0oU6H3_3ZkUt4kRM1V4hkQcJHSJCDZ_jdPM6mE8mzEXvHqbiaoVZN4q4spO1wBI3t5VGpbxxaT5T23s5KZl6QooeUsqcP5_KrDX5n1B8iyBom6hUBQdjeVr1syiEtR1sPNGg5qHivZAL_Jl5qqEDoGa0bWIur8bXB1k4ht_Q2J7wxhcm_5uthPfl8rkrl6sHcECPYXktBG3rYe6NOizvvQycHvyixwpajsoCH5RdAIWBa4R1GPqrp9_J-rQPWSvYCH4R-TISMljjQROSO9WLTbvczxbaflAh3621FCtF_mftsvK4S00fPv6MqDAyQjO0qjQMLg9Q6Iw_CMXJ3j3DO0NbmF9_E-Rfjhf3JSKFCYbOHouoBh0hjS_NsLa0XpeaNL6LR5WArN6Vb-gG00QuvnrY", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115006887905628035002\">空とこの道出逢う場所へ</a>"] }
        ],
        summary: "우메다 지역에서 이용하기 편리한 주요 슈퍼마켓입니다.",
        updatedAt: "2026-08-16",
        highlights: ["우메다 지역 주요 슈퍼마켓", "매일 오전 7:30부터 오후 10:30까지 운영"],
        tips: ["오전 7:30부터 오후 10:30까지 운영 시간을 확인하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:30 ~ 오후 10:30; 화요일: 오전 7:30 ~ 오후 10:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.ikarisuper.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15117376394783250103", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%B9%B4%EB%A6%AC+%EC%8A%88%ED%8D%BC+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "로피아 오사카베이타워점": {
        photos: [],
        placeId: "ChIJd6zh8fDnAGARcLSPtZL_rOY",
        placePhotos: [
            { photoReference: "AWCwydhW2bxl3L0sggvR_emdLf3MY_i8GyceNf8VyhbNnkAMpuMz9b_hBZF9bmUuXUF7mWcmcVCO0WBdudfZGS-gV5Nx-vFLoN5iD-2biMuIkS32DodDti6QpfW0sqZkU6PkiwN_mONJNt5-w5n_SSzgMAx2f9ZovMD23o1zF_zwKejyDPFNK0dm709gM3vQXs2lCTbhMzxlUR1FOoB3aViZLHldS0mW_lDAA-WLp7a3mnGgGFGyOQekoxeOjShR6eVarPvWcv-_u-xsgczzlzfMok7hKC2iFtcX0_AHBaRXlRTfhSPzc8dR63p9sxxCZRQC0qCGoVRYIOjoFXINlgXiy9JhhRAF40JItIdPjvQ_VDAgTkcYt9IfjKa_sdO6zEEDPFFOhgIATKfVVaju-u2gq7qfn6jyp1jj6ag0KfOdap66Zw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103125462168316429196\">a a</a>"] },
            { photoReference: "AWCwydgg1ggMLixCeTCkTGhM8cEn0wOMNzjwRpLIUTC1tjkcEqBw9db07nApUqf3ag312nCiqwFSkYhCYH7VnAPlZwi_U1IwPvsYpn0gzO7Gl8RJmEc2Hbih7kh4pWb5jGOVag7EDbb-OJvzU-CVJsQumOTCh8_XmGUY_mDB8JI-uOTGL7gBTfDTRZdB5E8cO3HSqnEs3D6PVSoZPyeYL27xUHc8LFtH1d90CjDAwnn7JVK-GxHWuTfmgO_m6AMRVDIePoOqZ-Gr5V65Pt0Vz_5fdnAxEMfAV9wFgeAT-DTn5F93IIKXkQZDyoPcp3cSfF1uNkgqb0gMAykCfZbN-tp9ToNtO-DL7UVKbqpYFQ7UfD94lOEsNXyWmj7eCbSZNl0bFsFAEcnjalbUqETFbNzQ0siqETyHZJMPpjhe2sURIrpXJUYq", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103669917595575547689\">ban ben</a>"] },
            { photoReference: "AWCwydiVuRCqtKTY_WC1bdhx-1jhqhBrEaF3j7ZR0pQmQLxKY3o_wTNaENC9MFkQOhFIBOzjUo50h6OXY3BuOAwgZ9tZGEkODWN3PduqClQ7fffujjB7JvTpXjQE7Oug2UFR-M68aUCOTagXze9cxOXkD9uPUCeVIJvilJWzyfCSycVHa-phpSNbbjxbno-P0Vg5CKjqJKiTefWcnXxgEfxrIqm2kD42o2SYpe66XdcOYhT0ueEL_NXCJ7m0hpU-GBw2iD4a4d7_ZEDoBjiNB5Qi2fK2rS9aj39DgIJ1hiencm-SDJVUBoShDROsmoZCsaBQ8TCDIstWiLR-QcAc25rKMlpEMihTUTDx6O1TNZ09--EXUaCAL8nb3jM1QUA9h01k9SoU1HzGYt-BU4ELu_F06Meu3r_DSGXwrm2Miw9xNpu-QDY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104830618853863883280\">M OK</a>"] },
            { photoReference: "AWCwydgHQNuyoo73UGPUvxE0e6fjN2S17ZHK0tf9a4qAs06tBmaotHoaUjkgZJp0Er5Hci6BvtfrPP-xnW0v6tG7pg2HD43EwiuWNZvaUvsSxCLmxhnq4Qm6b7A_B8GDfztganwk6bP8N5GLAowH-7gaG-ZkYhtXCCXAQLZo_Pl3w46pVg3MjgYUwwc4tXAWGhw-5TDvJkaeqe1UPvMeJy2IQlRfeTNNMX2wSmpyaD5TtxnbB0eZ9unP1D4Yyx6k9nYFqkAnuZuZ8kHOFCvu57pzpSEGtRgrnjqS1mjqJosivXsYyA2inonNffcEsMC2JQtlaFo2W_edLlYspwVTPy2u0py5MVUVuWXSzzudx12zZUTai52MdsXCQ-313n3OhS3_mjDYl4ilMGaQGMDPej84jgmaMmyjqyhf5N2f12c7KZigbw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103125462168316429196\">a a</a>"] },
            { photoReference: "AWCwydjkX2ywS8k9rti9UCEYa2lxcMzx5mO3rb2ugrzHYJ1RxP7OUKM5-ynJZ1UcIuQyE4szyrtkb-Q-yOeaZKnf2IrjTRlUjR2PX-yLW3E6Gml6_9txqOlYzaVeM2HqGdpeBlTA3MM53otRO579tZ_bimrSJSmXIw25wTV8vEjBrQlnNB-neHlvycUhJN45rQtnsz2zpbeG2_AdnItovPV-IQ7Ih-DYG8g2ujzf10gfw4HZuuIHSR14YBdcK45k08W4tC5iaeGy34y5F1_z_3rfa2Db2ASUamG83YcO7zfCp6Uh-a3KY-Z4QSaAOza_lGBMhYGPWToXcmT2sCuZr_TEV-e-S0l8LaTQ4tf_BlU0SqWTNAAgEnhenj8rh916cmdTlJ0Iw8qGuZgryzplDTtyC8DQlhNC1Gxl6QExF5mKTWw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103125462168316429196\">a a</a>"] }
        ],
        summary: "현금 및 앱 결제만 가능한 지역 밀착형 슈퍼마켓입니다.",
        updatedAt: "2026-08-16",
        highlights: ["고기가 메인 상품", "휠체어 이용 가능"],
        tips: ["카드 결제가 불가하므로 현금이나 앱 결제 수단을 준비하세요", "일요일에는 자전거 주차장이 매우 혼잡할 수 있습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 8:00; 화요일: 오전 9:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://lopia.jp/shops/osakabaytower", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16621941330294060144", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A1%9C%ED%94%BC%EC%95%84+%EC%98%A4%EC%82%AC%EC%B9%B4%EB%B2%A0%EC%9D%B4%ED%83%80%EC%9B%8C%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "하베스 LINKS UMEDA점": {
        photos: [],
        placeId: "ChIJdfhqFY_nAGARqMmsCLMxRCQ",
        placePhotos: [
            { photoReference: "AWCwydhE02k2YfMQpvX1xPnw3aYO8bbvb_eusulrl8mwxwrKQUNGz-jgKWu6ctiTZJYwbjLeXQ39eAn_iUSvT3miYhzMQ4U01uhjPd54RNsNy4-FLlXE_ob51TpAcJoeltQYjvxpHhYZw8L66z0-41oP9e1FQKowhVZV0Fe-YCS8ZsnL_b1Y-otuwNZR4v3d0HzCk_tcezgVDWIpUIbMrZ_ugXIdqWTQoaKMj2PGCBtKR_HZ-gG6OKD-_YG1KcetdjjQmqWVCfkHU7J6sL8_PyCR1zEv2jRvV2KG4LU3-j34SK53HCiGaKWhLBOY7VP1Q2xTnWNaoyTk-Wus4TB_DKLEIMp5OmfcjUq754jrb8qJU-Iu---ckUkyFn2P4bjkmsybbnTW9FPkx92ep8ImCzrH_23BKbCAWuzRiJNSuYlp9bGiTvoW", width: 497, height: 279, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107341149719360387635\">ハーベスLINKS UMEDA店</a>"] },
            { photoReference: "AWCwydjSZz7m8qxqu0irdvnQBCIBeh4Z0kjECIIPLO0-suc1WEwpn8Q8-hxwK6BPQT_AWAoOYph2KWEg06ooiEghgzXZ8jMSVA314xqgSEiM-JmR0exygYqDuL4l1SkuIAxSX9trBxaabuCiSEf60ynGVjhEKnE2izynf-QP1OytnRkCN-x2TDJ48zTQUTaK1YdH9j3_AvrugX7nLNvwg1KweMpxyvbAfmK4wxgcPb2NqbF_j6cwjY4Lh2U2z2FwxZ7xgzsUbdDh3smCnyCNxnGTa460HPQ37is6kGD4FhQ4JFKges4S4x50ehSug7hWuwgSzrl_DVTUOrjSKMKN_A2u1bQGVpDQiPtyMLfk901QFtuUCIpbl7-HgodtA9BWVxS3_l7lExSNoW-G1ZBZBo63ZK5JElQel1t-VLKIvQ7jKX3i6oXOrLwWTFJFHuw6Ylzr", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107341149719360387635\">ハーベスLINKS UMEDA店</a>"] },
            { photoReference: "AWCwydijU_OvuJRWwLzOPyaNjbQk4LQ2GcmqZKgutODMaj1gtiUcpoecILTInbiv3ljOLKPnjPaIZ561xtCZtYqFRyk5kPM97kToKp5JxuhMjfnuhugPdWJlQl4GKZ3ZjHzGclHyTALQnhsFfhgCw99mTgLc2_GtzlCa2LLsPqB0PZGSZuvoe_mm64fsCgNB8dBjgsVOznIvHq4TFQoS5mlswFOYNedGKjnfzzEzYsinyrDXPViQB_0cchaWAwuNf_IrxYJApGZ06Y7st7pyvHDcPJvUpvUIhMYeRH-WG03sAe6o813_GlKYTfu7V5ZIOIsyje8w6lU3y81UBoXANrwAWa87VNqVTkguHKkR80AGUsz1hCnC-070dlXb9KaqUl1Q7jQi4Qq_4i6V6ehhxnP1965VMKJR5jpPqaopgqetT9Hyupyx-I50COZKcG2FKg7-", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107341149719360387635\">ハーベスLINKS UMEDA店</a>"] },
            { photoReference: "AWCwydhY5lIQARP7LaazpSmMHX2b9QphDsL0W-tDtrx181EZNNb5WB4M3zyUUoTBFbmtAF57qxitV1sxmncGertPFo2dEisF50hF0dWD5WNFXEhKtKCVI33CntQAOfKAsxl2X1-dP755TlgbzTDNUq2lvi_PlKV3kIpHxTM2vcG51gCv95GeF-KH08tUiFR6NfaUZ1Cpd9MoKLTJxKZ-9djaCmlb5E98dcLCPyqRsBNIvHditK_AXkOCOMbw5XpYC_Z5L5J4yqbOo2c5WryNLcvxUCJ4WpzNj7iATpdZ-uUSM1ugFdWHfOys3O1q6laYGzAKo_WUhn5zDgoMsV83uf8ki1ZfeT1Gj3C3DkhJpOXyy8Gd79-5i5E8U5PvOZw8prkKUCuxmR52cQQROoLYl5N6GYzyJoQnfWFvuNfvSt34yucLSKhyPzRO6HFXUTl-LuVR", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107341149719360387635\">ハーベスLINKS UMEDA店</a>"] },
            { photoReference: "AWCwydjqTr0tHNWJRe2uO5uJxpJe41nXw1RmO7qeHEK2ZPCPa7HZOTdtfIne2h2eV_ocrVtsQj1pz-UeUmSkKR3FQNeds15ycgUxk7fLXdVNPaRfiUfkgexeuAF8wBXEQWyAM57i-0jY16D9PDMKUdhyOxmfQZEjgsbITaP3iDQ4E7OgKxixqxbSGVtee-DfF6dNwg07mHrSTq2Mapgd0ailYdra2-FDpi4IWdguHviUU_bUvgFaVXelpeWJdvclf7OEX-gguhxYfiVNB2THeBpNTiVOrl9JjUV0GMG0SZq8PwYnn40eORv3JHdYnCcEVPzr5ULPFTPiKVuMo-7g6xrP8psDeO0VgUnxsluE37dNRKv1ZTWqtSPgoj0tGpl_CDHzho4aGbr-LuZUJowUgl88Dqzvxz-LB6d83vdlvduOv6361LL3NnyfV-994k5jJA", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107341149719360387635\">ハーベスLINKS UMEDA店</a>"] }
        ],
        summary: "다양한 일본 사탕 DIY 재료와 우수한 품질의 식품을 갖춘 곳입니다.",
        updatedAt: "2026-08-16",
        highlights: ["오사카역 지하 통로 연결", "저녁 시간대 할인 상품 판매"],
        tips: ["저녁 8시 이후 할인 상품을 노려보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.kinshostore.co.jp/store/umeda/?utm_source=google&utm_medium=maps&utm_campaign=gbp-web", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=2613268328796178856", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%95%98%EB%B2%A0%EC%8A%A4+LINKS+UMEDA%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "라이프 사카이스지 혼마치점": {
        photos: [],
        placeId: "ChIJ0eNu9iLnAGARjB2JvPcvDRc",
        placePhotos: [
            { photoReference: "AWCwydg2X4tux3b_1noVN1i_mnGJx51RGhuYuG7BlOyfO1bA1KEVdgnLzRo2QNDq9BZdA6dvEO9yYBC-n3uZS7fGlCCvU-gAA64Zz_8ubmt5ybDsFDCaY3iEA6XMhOOPtFgOdNB6HUqzGij_lKN-5eJSs2PhHf6pCaJfeu-C7RAO_HzCCLzTYCZzXERJPxbtOhyOuhZZTk6UV6DmS7QZDU_EzZse5Df0VQxm24BoIfK6OW2WJaubS8uGcsZL4YVIkE2shODLJEkuheeDZkvRcgZlVW_G-nUt2FrB2FISs-9R7m6r0KgEt8r0jJGnmIzG3HbOu3xCvy-xM73L9I8V5yhjMZhP6TpNzmuJ7p2lYdo9j1NkSkFbHbhGtuCUAoL68N403fjjsuJFthKCSphVN6KINihibFnIG3jjBzz9BNS82YLU0wQf", width: 3916, height: 2936, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103797631139469336775\">KINO</a>"] },
            { photoReference: "AWCwydiL5DRC9KO5NQDUd2RheCjRl3g96ZyfGHfAPyEqxCPYQXfoWn_aut4xK-58wOK3VsHg3cjNqZsfTTlMRJ0JK-QiS9gXMTnjgyJxgVrllboYhm9yFdIP4Z7XHJRiJTc48qbnStabGDZK2GKGtFXtRevKhGI-Wq65Ftg7BGdNuaWc4uGaog14YvNvVylMeDEHhDq9Vm3sPniP34bFdHLKOzBOYa7iZD37C0hyCUOwTLv6yhRGStVYRttldNV8soyXMy1ywydj63-3f7iaswHWQM980TI06GNRWljO19Xb5Pw3Yh92uHeMVZvpQyej5ttgRWEHQBcMK_RLwNHQRdBA8DlHTAzw8c4L6UcCZOPlhB_2XQ5J_heSgSkJFOsG_Ldiwd6u0yg13V-YnxlivkeBAvE_JQ_Fa5jciGWGmi2w4OhUpg", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115562465486108406192\">謝俊彥</a>"] },
            { photoReference: "AWCwydgLXD2dH4q8UTaki1vS05XY6UXWx8FsIthn5faKiy0sBVzHOR5NUQaQ9bdXsdwZJbkpp3qsmRRQLcZFNAJcoXg1sGnuOTHX-dX0LUT8hFiI0_d9SvL2C4G41jSpeilgW1lyvJ9T55HLFAbCXCEd51BqvayVeFEVd7GxDl7bnJV2cT_1xTc2t-Y7q0vWic0SY-lCfrnYAOxsr0Bxd9LKTSxDJT-HkdAy34EcOPda5tr6v9POiPTNN95v8Irl1njOBYrCs-RF6IxdT0xuj8zaFJZdtYeExE0JfF-H0HBsYiBmbSNGPLr-BXttOsGh6rOHjIAEmKYSE97ZFUpI_nOIdTm0HcVmb6zh1cavNSMqVbbTI78gKK9YiCfW4nENlW8u_6X5Oz8ePUQbpdcdjZE2rvw7uemRSRMDGHrBLRp7oSaFngI", width: 1440, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113726047551623889872\">Alfie Who</a>"] },
            { photoReference: "AWCwydjgRTzv9gDM1BCPihDPmE17xQ6ky7Qn-32_vKcpzQebz83hyULQdkSBxD9UCQiEgtJuPA31-_bsBmkSXm2dvREsl_l30dLmyDLV1hGm7MCuCd3A-bTxYhc2kL8IS3af6cqXMbpTVPa2wnr6wzz0GqlmADMw8pfX435eKhBNfj0KXN7IclRP1tbPsZaBYdl9C33rGMfogGEPGVM2uv9gpS1yEmVPepqPPzeldLd8NQ-D14-pSCOdL9WOIehn3TXjiOkplKrkOgl-g7XqKWHxBVanpQ1Sr7QH5-TmE6ZuiwlYELinnm7NgCIslpYQLzcAUaz1lzqTvoAO8nBnFCyQ8l-E9RAJ2CNJbLw-kknvvMJAojW2dNX45Heh9LCvDUPIrKfK-y0BhvR2MSyBC7YplES-eHVdfveGKD52XxVE9uI", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112049955971247572199\">maruyo japan</a>"] },
            { photoReference: "AWCwydiXQn-GSzXeQW-Ie5-hAqCufljr5LGewmaTGtXy2M7ecr55OMB81aiHjXEp4Jguyy-7WJAHx2vLbwQv37MjvclxEcdEFUT_OylAtPJQarOSZchg0S4Mu9s5C4Qa2XxelrQUhryQXcUrM5T7snduIXeg_xVYqkUR401zzR3cV6XLRcz7umkUjqAtUXJyyhiph4m-PVfC3Di8oqjzv_gTt03jP5-rqhnapzuJvxu14KDu-SGjE79U-2VU4AAQX4n6wBQuI2y7VJLBOnNogMgoNWcXgMxfQPbCUY_IRvP6RJKysB9F8CWbDSOl6cPPtZyCDny2nhbrrTMP-i1gz36HY3mdczvEzgKFtmw4yI1Xj0r_poQBiFbZEf6VBKnSqY-1GIg9C5SUcN6fY4NIctIf0Vun9R3HWj-UgOQeT4h5FFRLk7SS", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114397614035104373490\">days sunny</a>"] }
        ],
        summary: "신선 식품부터 일용품까지 갖춘 2층 규모의 대형 마트입니다.",
        updatedAt: "2026-08-16",
        highlights: ["2층 규모의 넓은 매장", "신선 식품 및 조리 식품 완비", "2층 내 소규모 화장품 코너 운영"],
        tips: ["저녁 20시 이후 조리 식품 할인 혜택을 확인하세요", "다양한 샐러드와 채소로 신선한 식단을 준비할 수 있습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오전 12:00; 화요일: 오전 9:00 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://store.lifecorp.jp/detail/west408?utm_source=google&utm_medium=gbp&utm_campaign=map", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1661036578636111244", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=LIFE+Sakaisuji+Hommachi+Store+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "슈퍼 타마데 에비스점": {
        photos: [],
        placeId: "ChIJuwgXL2fnAGARIOBjQNRYbfA",
        placePhotos: [
            { photoReference: "AWCwydhmY3bexUxY8yAOiQ0lX4EFU7Aly1gyYLErRx1e14203jNxjIiLYtGWKHYrsXApcqWNt47VFVHu2VmLhe7ZfMX5qdJlZYtJfkCkYVrvXdjrZnPbVFsCgwn1vQaNl_nT2EIwc41908G7ch3YGBS7qt430wVKuIcyeus5Zf404vrBOcsGUBFR4ZyvLm52e-Uh6Y-L78EsxCrhPyfgZnfCJDduxfd7-qZUONvLTGRl9cgPUTxmh_h68KXbaLemXrF-Nf0JLZV3nDi375zINIASwKhgBjNHKCLFnfUtiM63YVyEqc_Ja_QH1uEF217P06HP0MPKJ0l7-HY7sovCEesmaS6V_gCuIiaIq_6151xhVZPVTb1XRNTF25anGtMBBpWPKdw_rpvyAR9U1lnF6Y5Tv3L59eN_RqV9uIoXjYbT6XgKGi4p", width: 4656, height: 3492, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116829173672494269939\">pei-chun chi</a>"] },
            { photoReference: "AWCwydiINzV1vuQGl28GGbht-BxKygVz3uJYZdKmFnLfcve-e9lVYXsX8hcQZF3NQtny2U580hADKwduS2ftP68Bvqc8vN7MPvIhZCvpxWxOyhx88FysKde9EpkhFyeq6b-KxuOXV8wUqVXLlTx7QIeUHiKqAfQ_KKaDsUdBpNqKrJSmRIdYdSqcE9ZtQ8S7acrw1wMAG_nxd7j9nscEVJ_vjHd_q5j26qoCxZl6cZpNzOQv_FAzjkqptDjCGzGU_nm_-VznkYYr1MoTO_oOKjfPFxVyIt68vqwi25tUVplrrdwSD4lvY96A1-Wqfe9CpN6DVNrjyAZCo-NJ1o6CrkjeTePFZOX9ZmdtQArXbQYBnIGH3fQ0S_xeAmDu9cchwI-2sQMtGfLk5o6VHfyl9KE7Jp2UQ-_tZCNDcbyXEk1bDCqx0gml", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105186953904806263681\">Jameson Lee</a>"] },
            { photoReference: "AWCwydjdOy8eRZlu4T9BsipHoaUdyb5-rKI3V1NIOdXmbEDmj72fQDhX6QIb94STyEDTWZd4o6fwCIQCUoCgMAU4ZiSEvlk45m5Jhae4fXJ_N1LstSxtSRR7mkZLPO4gQm6hrHjaWm2BODKMJbUucDTPQqJZWXPFlrgnVHi9-Ws5ySZgns5ZlrSU9UzHmhIlcqrqU1dVTuUUN3xluKri0fGsxlpdFxPgMLMlMs51vCPH-hRx3MxwjBmUAXcmtDleou4lMNtKL5zO40hhlr_kdjUETFDK_HQ5bImtxIvpEdbmPq74AVDGBeqALcEXZSeL58nMmpV-DvZhbaPyXPtkO64XPoOuA59fwU3mvjbhEIzOTnEStWlPjmFtfp5tIYXsd9ljsGP4hcpF2So5X2XXQ9Tn8kKVLN7p27vBFJ_T9Fw6_wn8ZAAM", width: 4160, height: 2340, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104902397387255123838\">Wee Kheon Loh</a>"] },
            { photoReference: "AWCwydjN-RXOj91tfmGJm0gXG9a_3uFyPPVhLMjM3Rk84wpwNvvWY11WIoM1v2CmjtTiJheBAYDe2qFzybaLZgF7KIVTyVTZXF7veCmu4GQGzaSIbHtx8MV_jHKfDrl5zOmEZQfvWk7wl3HZkgI9gkeeUZe7k7zsnCAmiIgB3f8J7LZUkbcy1gnwOkll6v37_DXn1uxdz0zXaYiNCnNXREcPmfkZ35np7XEB4Kad_Tyr4E1cCCDL4NoIAvfNAapCVfoZs7nJmzixMo6OaqyKhTA8TUYu2A3mG-WR5jU4P5rYHqVqz9XitJ4M19-SO5vsusMnq5fTfB1_YFmPyXAtqRG65yyMQhUdUlL-dZh_ocl4O-PnZAADrKNbr6lKbEeZegod5jHerhrvbtW51VYIZKVx_QQtJ_QAVw4mKx3NWQVYyug", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117231515147783865868\">H N</a>"] },
            { photoReference: "AWCwydhHIJxmv4MG5s70W86HJKZG1z8thE1lH5v5WwXciizmOMcTeHOOltNer-G_kvTmrBHxcfBvoD5rqe2IHqiFYyxc3afXGZI0o49RWgmsBqJFMOw-K-ow_o57QDXW0wDHHCe_icoSLYp13fN0XhkhYdM1hoyz6U026vQiFMPA4HEwqEnYxTlkaTx_bihYI7aAeq_Yvfovr4H2yj-gimJzrSXefe6wNkGYxFI7ic7_7anz8DmiIqQSREp4-T9VIz_kCrnpcl0r01TrLgmZMOkC0Ru5-4jvtQNR_TONPmizB-YG_E1qL8tbQ7cq9LuWmvWCRrt746hcZO3fIsqAbkbSqalReSkRNJ4WelRY26QOTmML8AJNfyqYi36t6eb7VEu5W4XgAoxwRHsSZ5spM0HL4ueFl2MG7vaKc7fdw3s003nJJd9Q", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109135427967229601236\">BEN tw</a>"] }
        ],
        summary: "언제든 방문 가능한 24시간 운영 슈퍼마켓입니다.",
        updatedAt: "2026-08-16",
        highlights: ["24시간 영업", "연중무휴"],
        tips: ["늦은 시간에도 언제든 쇼핑이 가능합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://supertamade.co.jp/store-detail/?id=950&utm_source=google&utm_medium=maps&utm_campaign=profile", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17324601010200764448", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%8A%88%ED%8D%BC+%ED%83%80%EB%A7%88%EB%8D%B0+%EC%97%90%EB%B9%84%EC%8A%A4%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "라이프 다이코쿠초점": {
        photos: [],
        placeId: "ChIJ13Hz0HHnAGAREXzi5KPwaW4",
        placePhotos: [
            { photoReference: "AWCwydjbjVt3V2riukfiRIZC76qKXuD1uzzuahIbFIfI_XAXcYs8cQsD8wpvp0EKzegFBwbweQUAXSi50iMcD6cNi2JCAYybbVuPg3PI6wGJevT_8WBacpAc-8KRjrn7VP3wdWl4O4avsNR6VWshiP_F_KoP_K-XlRxNC0QsKsscMBbH3oxkFeUsBqADfZtZC184M0e3oR8WdrVdZxahbZElM1GnyC_Q81T9anW_djGJdy_r3nD-oE75mgAtA8DN67SVVet0ZIsRah6lCGP9XN9pGddzeZ9fihehOXblo6yhSPv1HTZFAC5UjstmuXhYOa3Zlipxtp8d9fXO1yzFsWBDK4D79Ilm-LS2Qd0mB6Xf-QG4Hx8F8gKOru2vBo_tVeP-M_YyigZm3Jw3dz7sPIfDGs0b8uy-Wb-6MrLSuKicfrBfPtox", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102032425048414120522\">Takahiro “ﾜｲﾙﾄﾞﾌｧｸﾄﾘｰ” S.</a>"] },
            { photoReference: "AWCwydh-xnyqVGZpfnoFFh97U_fvt8cFU27SfojpjQRcv8vdt5xECO2J_1Ga-U2Ctgq-VFXnYJMWChpFI9PDrtS2X9AWYLhNEwVd_IdfGzIRkdI-_Cqtc8QjYo75v6rpWx6zoQjlWEeEl9CzCCMV_7Hd0cpsbimv6Xj7ua_qAf95pnzbiE3IO1q-13liLD2iHxQx8dA_JBl--lMe8GK5pY6VQOtn0BF6hR67KVAyFdbB_P182VmT5sHQF2JcZKXlsyyhOK1o7L8idOgRNR3i6Qj0AsM1crEI0z7ZyfcGBXixe7CyQc1j0lPJNObiK-Touz87XxpspeSc12XmhCWWeKBAwvzoiutk_j5ShnZUUU2075N9Hik27tF2qGlWFSIqURNGi6MkbTXIqf3BNbAov5UYpSi8qRXEBpAwNYYJiVP2onOWXH_tLdn44BcH5_hM6JFo", width: 3200, height: 1800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117008767795652171040\">遇見尼二人</a>"] },
            { photoReference: "AWCwydhVUXI_zf9YY5TmxvCCWnxnZh_S2fMvu1jHQadwKh04zf16BVkumoPX3y9tidPxhKLUPBXP8fLzWfNa8DzCnw_yHOWCkdC3COhxN9xTvk_-Wsio0IcVsWriF0A2JfQidkQ8LXYrtyY1vCgCO6Mz9_JfyDqJTrp-OkafDneQGDRzmYV8JBcWxwowezFbSA1Gm69zMprGaM1JL0MxLI48Z2FNHxch78jnIsLTcfsnj6IDfd8VgCacycQ2jqnrloMNbsZPaGVt6Tm-YBILN3sXAEV19gBjfRjazPoa3dRrdTVRlQlVF4VAUeZCgAmZ0Uo9PqiDWid9FQvjcSI87krnHLEFP8Z7P1LND3arJgiRU_ph3oCUKwJtpQq7GN-SQT2zUZtkQhgyUqDVLKPKmbF0-B8-k4hGrNnWw9YHWlnGUWOgRQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117750918962219489906\">Kim Jason</a>"] },
            { photoReference: "AWCwydjSByaDFHOY0bbYnujpjFTSQN2QbVOKpt3hW6zGu1gcH0oCrJuZSshQF1knNO6_r0J3H0-6EDvCZ8WbRh6rMRwKE2CQ3p9WRcVvTXhuRLYtDHlIR4rQqQXnNfmKN302HCyR4UODWbY8iM5Z7yNfkTLK1rvBN1oU_LfSerhhzCq25JTKVmDdsXIuK3jfRDc9Kl0TXSC0_K3NM5GBiNa9Q2acHT1o1N6pSi85rJZNQE-jvXCLWLWkVhh59lnQFmPQHNa7rx_RrGnVOx5WIk8qYDayM_inkoblngqmpDqxcBEoXdSdHwwHptKGNsWJWQ0OKWQn6Pc5QUgfLowWZJk4FWoAjHGKGeELc1vFpu7rIM9Pxc-tChEyNYC8xare39iK5jNakkgblGXnmzvNifh_9HP-bcPL6p59SM9UcudGKEPk7A", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116580884909302297599\">DANIEL HUANG</a>"] },
            { photoReference: "AWCwydgOVOQq2QvGHTR7k1nyhlP8seNaYP0WOP4UKby75cIh3DsJk9AqbkLyaB-4pOOFwjeGdkBQVzhbBrAKSm9uzeooHsz2XL9J7_bB751jdNNjmwjZuABblLVrmC-V8cSI4rLfs5ipONEQHFK-UEYXiGuIk8RolQLBGAED-i8niXUOsIApLvuGRPuXV9iDlwXaBHEDbKBXsFQmUtppsMiyadcnX3kNXeoQ4SlCw73RFmOjgtE3UI566o4CilwvtQiVjOMyQBwYxLMqf7u8NKse4NzIBleKDi0ROSn6yelJLYahwMJyBENBo9fYUI7-dzPDP0tlQir-L76P7L04_rA4fGHE2u2TqaDAD9Wa3Kn1prrvhg7RU9mZ1umiMy4mdrhzewy_ST8q_MJots2wK98m0u3FQhSwmjV7HmHNdx9I9K6ObEKbGq--NCo3Y8Dp4wtV", width: 4000, height: 2252, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102742645926548889828\">Monkey Gee (AsiaRoadTrek)</a>"] }
        ],
        summary: "다양한 품목을 갖춘 편리한 체인 슈퍼마켓입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 상품 진열", "합리적인 가격의 자체 브랜드 제품"],
        tips: ["500위안 이상 구매 시 90분 무료 주차 가능", "주차장 맞은편에 다양한 식당 체인점 위치"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오전 12:00; 화요일: 오전 9:30 ~ 오전 12:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://store.lifecorp.jp/detail/west215/?utm_source=google&utm_medium=gbp&utm_campaign=map", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7956154803437075473", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=LIFE+Daikokucho+Store+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "이온 푸드 스타일 히가시신사이바시점": {
        photos: [],
        placeId: "ChIJL8G48xXnAGARtxe_Nyjjvw8",
        placePhotos: [
            { photoReference: "AWCwydjKsNQmNQZCw8YxzCFaKoAAJsW6E3mvmIknQF7kWY7QS5OemfBu4ef1V7g3-ukxFT5OEp7fMldy7jnvNzTHlNN-OEy7TqjvIJXFv3nBejwnqFrN6Gg4gI6mZp9o9cY1c1JG_TVQX4ACzOdtHMeqPckvzlf6Ngx2aJDjJSLRV1GL71uULGrw-V0dkNZh9hccp5oVKYn20CP19_kjsUoDefonZK0bj1jwyTrzSt_cJontVb1z-vWR8ov5XpbJHqzEJlYZADzYgma5jDdOZ3w_urtMl9ac_rVXdtMBReZQ-hYmNI4mmdX_TWTctVG1jJDde6y_9NM2UgKNKQzT9u_4lmDFGoQ3stiICH7SiMK0SgaYcRzZ4x-F_31d3aWzfYVI8Vm0MUx9oiTuEKzdy7whv4Mn60pjAKBg6NOC9w", width: 721, height: 721, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117799356036544424596\">イオンフードスタイル 東心斎橋店</a>"] },
            { photoReference: "AWCwydg_89NB1Dmovoy45oML4r3b_korNxKosyxveT0twgksFB9CmLS_6ICnK8qCOnMcnz3Zz7mAcnLoy9QQZ7Xi01ieVufY4kS9urbQORab_rbdFCe60A0lX722CTXD56eqFULZ-gWvrBRUy1Z0FW6pddNA39cIDuDXkEaZPILsmvsXb7FJJ2BGaJIXS0N6PGKGMG-KbGEdlXAnOa3XucBcsjNOk3bJc5bzjwFlerjY_OqbN4aBdbkpPqZqwJDVDpjp5e3ulaAY6O8ILomLvnaFVTIzGduSvsMzE3dnVek1KQDRIBgNxfKv7KbIbkE4v0k3HuLgkjb9TzbCERtesqnxJzh922GOU81pxyhw5o_Ov4EKMuCZutDnKBc2xNFu0XdRkbIjOHUsbMVEc2a3aQ1bndcMEW6V-KjbvHft9zjxZOW6_HjgDnWmk7PTxNMr9g", width: 2048, height: 1365, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106767594099503866178\">정다노</a>"] },
            { photoReference: "AWCwydif9yZeQ0MUbVHacIWeHTeR040C9Bg5y-McXPF-FqP1OA2bemeE5QitK7vIDTw_-nLQxV1d2NESYQFwyZJrYQTNkfGg9av_VT0KnXGH88mOH07pxHoldB-8yx5zdzfIFSy9v88wpfmc7UzvTy-Y4wzYmVm6dSu92RPKuEx1j8GvY1fFV7QQn02eFIrD2UfaX7oY3MutWZ_pY33v_xI85Jm40c6IwLfw-GbJndHk27seVGXnd-nu7NegeQN_u8AQdsYgwZcPCyB0Q3u2v_IuEvLqSsXALslUNAAxbkAZzkaLMoJMnGmL_e87W94Vn9-ElsP17j30AFu9DeEhuZPnmmdeLktgIWgCsn_CZ5deja3vTbs_i29m4UMY1ME0NNXZIW-KO6yZLMIwiMrtN_BkYvmnbEM8Po_rHcbiwSN6q0XOJpbz", width: 1674, height: 1245, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111037386708270906686\">Peter Yeung</a>"] },
            { photoReference: "AWCwydhEUI-N2hxunLpT9tjnQanibixg12NcYXwKQc6K-ihP5m1nQ4mXxw5AZLDz1mt1rvAqk_KlGCt_krBJslMIIHmjHCUM1VXEEx0El4ecH4aC8R79381XQuwaOSnCVagdV23AOrsfDAA83vAeXgfkF0XuF4Awmm_XYf3clq4ux4X2v_fVg8k70qzPdcLqUtt72WnFaCTumAAsb9fkPPo95QIzZIqdatXCoHC9dIUgDM7a4IE4So9yALg8Wtj0p1q9de21DF3CHet7geIAzyOyZZRISqqkrAPbw73HMWzF42LXrvlNfc7U9-qUC6vSvhiX7nB4yl-NU12XiU-feTNJkRCRF0fgU4hmdYQZFBZttf_u61DKluVIbkcy2kNXWCi0HiHpY3UdmpezOdIrxo_eiYhXjcF9RK2eN5ahslEp3r2s2w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106266446640024977074\">bernie tzeng</a>"] },
            { photoReference: "AWCwydhc8yjXVGelL4Q0eRNgzlIt5S7vAC2Zy-F3EJzQBgKYcrT-KzJc4vHvScIHrNNWKuCiTYGu1sMKXenaWglkYnA5tGzkibKPWMdDeAFB-U8VUEdpsZqF2DlG5o2jxTZIUEFylIPHjZPCFi8EzlU3b_ZdBkNStAozcO4Oy81u9nz6x-SspNjNdJsQ16ngeVU0ydhBcB3kL65Wqn3u_B--s6g-F2lT_pCBgJP7PkD5CKwtXI5Cht1bPGgoum7-6SiqQ3evlGOSvIWi3Lzx6Yy2oKvwVRmv25ZpVx3B_kokf6j95tq_rIDoKAEui-5vYHo5s-kcXytnb8H9FMnD_ig29PoOTvdE3Lu0HQPU8ag47bGrc6zp7Q-RGZBAJoVWObsMjume7zf3j8hMqmcWZZrdxFJJtrYTqRRh7RVJx4OhhTQ", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107117455219717999628\">Chan Francis</a>"] }
        ],
        summary: "신사이바시 지역의 다양한 식재료와 생필품을 갖춘 24시간 영업 슈퍼마켓입니다.",
        updatedAt: "2026-08-16",
        highlights: ["24시간 영업", "신선한 과일과 생선", "층별로 구분된 다양한 품목"],
        tips: ["면세 혜택은 오후 7시까지만 가능합니다", "매장이 다소 좁고 동선이 복잡할 수 있습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.daiei.co.jp/stores/d0820/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1134875392994121655", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%98%A8+%ED%91%B8%EB%93%9C+%EC%8A%A4%ED%83%80%EC%9D%BC+%ED%9E%88%EA%B0%80%EC%8B%9C%EC%8B%A0%EC%82%AC%EC%9D%B4%EB%B0%94%EC%8B%9C%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "이온몰 오사카 돔 시티점": {
        photos: [],
        placeId: "ChIJKbtifLLnAGARqn3ClkB0fRI",
        placePhotos: [
            { photoReference: "AWCwydiSicEtShqHL0wZ8babAAOh_BbvR9TLbenVjiENbxDpB1j23K-rGODvLIdqQZllGF1bfUIzg9JKCI6wabO8CmG_xRID5jl_psybEwYNw0m2w76SowXQqMaYAMJkpBg7hZ2PGnnzUEKRapbDIQJJpktJgNO19w_TuxyPyenVP6YPZLtIdZBmCYMb6TlfpqH77gk3k-w5ID1Blm47AiXmdWI7xQArbi5VGEPZJpjwAuyH6iSuA3bHt2gxU5XPYDe8jGBoQ8OlSArQM32zevzpkDjlgXDnfBjoiQ1eBi6WQRjqTdGK9-4t-MdJU-1RlG3-VC7vZgZ12JBd_NONrWiJdVOilDwMyaoO2G6pBwugi4KC6wdpEO2xiLi8c9WK5YYK2R42iiwtb_QJSjDPqje4mAyvyAJCwBpNW2QJzdja4b6YTf8Z", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110189924069853726362\">yan kazukin</a>"] },
            { photoReference: "AWCwydj9qznDLfvRlDaPo_rfs_xJ3JhjpcCZ1sRiFCTuRF7S7I15N5B28aS-rcCJWeHTF-Q7A--_UahnkbTWUcBK9lxuO4Tb-ZwysTZwSZPoVNhXsSQVlpi_PYB_tavZyR3GgleZ9ZMXX_BTg7F4oaCPrVAmq7U3Kv9Y5svd-bjulPjvaA61aLtgB4-A9w-XyQilf3NOugAgm9og2ffBqAAyK6bBbcMX-CKZ0FDLv54wrySkoZsGuLnvSH_GmntzU2SVYV6aDwOjoBxbsP3HihTC1ZZy8MVPWQNj-K2E-yKXTPR2qyZ5X3voPPMtpm-BTxoQ3utznP3bdWM1wgS6ykWu_PwnvV0ge3aciA38zgZ4F5X-lIOOAn1q1WaLNijMIFAIfdkL2FfZr5Fu0Fl7bJGCtH4Qx0EbeWmUlAax2jJqlrrd0g", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104236501826168968049\">リショウ</a>"] },
            { photoReference: "AWCwydiwodkZLEyaAQb3m4jj4X_mzSyk9FY0tDUifv1t4PrA8gjMT6t8Zm39ynRCiQJD9R4Yq9QfBnknezqRQHanWqYr0onZHb2OuA6nFTLHTHF0-NFjfa_VKVlY8KKC0b8DYtHEAWQEoYi5cQZ4T_EcLm8D62n3cgVjvp1iY9LnmGOCk07ULOChjAVX3XgcXG2QylvbTEdvsLdB8fuuET1AWwNsXg1OQehEeHlcpXcD4hSmo5qXxvd_V5YDjx83j-dX9IhWkNwdO6X9gEapnck2EgvCYNXMoEJOm9WnaWrEh6VtVuyGfMzcAB3bHm4eSdmwtgLD46SkP1gwTbKpRvDhtumpPoqFTC9etIE9yYgQljXobfyqGp8FUkG7cUCUF3gqpyi2JQOPnl1Q_6-uXW-k7knOVkFb67OiCsxexVKIme2nh3yp", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107461179858819857251\">toshie i</a>"] },
            { photoReference: "AWCwydjQW9ollKIXEXqLi4TqcOtz24cFrn9ts5Gqv_mihGysFoQdjipdOdLYSPvRLWyz4euEXn4HTUV4mdUhYono9ETqPPgfNrkTHvEhZwLgJnPbFaLsCgeub39BOeTyg1ui5bm06eLkML056TiTaWuYfBWpRliuGjDLBZSxt1M9Hhb5t_YsKJmIKdr2jo8wnGoR92kBVLMl6rg-G2bkRgZ5mabO9hoJynEr7zC8IC9gcnRnva5QfxvzJOdh31l6AvUo8956LYeFAJdTRyUvQ9HkltNLhSgcRnsE3Y_KQnIb_5RMbO8TtlBI49VaIQ-fvEaxbmNhQxWj3vqUTiPkOlga9gA9FEQruK9tYYe6ey0L1U-5jThViAEHRkF1PtY-XBOn__VBCFQmHPyI4yLNP1CEltwFXOqM7EFL1sqEh9YbEbawDItg", width: 2133, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117441394115230943519\">Lun Jung Chang</a>"] },
            { photoReference: "AWCwydhVwtBLacdEs70oo5tqPdbR5YCg6TZlVc9yF1CzYE3THrpOCBi04fJgs6pyFpu3AVUXeX9wDGSDWnn41nXH3cbWHfIVwOQ9ZebEFcC_LYtViFWJGTgythsr79bFScBTfWIFy8kpw4Q175C2QcPLtKesiYn8OP__1SikSw8ez3phkQW-zXwamQIEBYqIo5c-u6CGmfG2B7trXe1bnTqUuT35eSZ2ADoQ9vpwRnMZlnsBiNBnvr8Qv6sBlZ_wQ_xu9oWXat_GDxdVlUALhlZzpZrrInUkq_3BRrERVRAqbLVWYKdeY4Et4JRECUy1ECP-P_mfiJg8O8_WhG_-HgIGWVkuvMJgRblCt0by4_BI7S3qDuzegDk-99pEUyq9m95ULBOlniuFCyu2D069YyUA_eVP4Xt_0IovDP5SbhQUXtCIWnlw", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117323333459697605332\">DS Han</a>"] }
        ],
        summary: "쇼핑몰 근처에서 편리하게 이용할 수 있는 마트입니다.",
        updatedAt: "2026-08-16",
        highlights: ["쇼핑몰 인근 위치", "편리한 접근성"],
        tips: ["쇼핑몰 방문 시 함께 이용하기 좋습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.aeon.com/store/%E3%82%A4%E3%82%AA%E3%83%B3/%E3%82%A4%E3%82%AA%E3%83%B3%E5%A4%A7%E9%98%AA%E3%83%89%E3%83%BC%E3%83%A0%E3%82%B7%E3%83%86%E3%82%A3%E5%BA%97/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1332348885527592362", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%98%A8%EB%AA%B0+%EC%98%A4%EC%82%AC%EC%B9%B4+%EB%8F%94+%EC%8B%9C%ED%8B%B0%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "라라포트 카도마 미츠이 아울렛 파크 오사카 카도마": {
        photos: [],
        placeId: "ChIJKd-I_i3hAGAR-_k7_4bZJUI",
        placePhotos: [
            { photoReference: "AWCwydjwEGOEZKatmZ8FNBBZcldXSPQBCDJXjZL3x5h5ta4fNEr6_8Nwv2YEjwoT0oWG3YqEg4wjqM2otjjh4ggyvBK5_8PDNmJyOhqZ_oA9ESl0SmWxvZ0CVtmx0BJ5tG027n7QFwVl7nbyCmtB-4wsB35WWxz4cEiWiQgBOt_sxR-6uc15h45FyNxZ-Q7JMqd7GJYxVzodBW0qDE6_OAFj-RKh9o2ttfD-kva03izXgNJ4rOgE6qptgNlxCASc3l-oNUOsWDZ1zVVVONb1wGm7rXrJcyrFjhMb-nNIf3FwOIdp2fXZZNzhvMF33W7Ye6TsMRpS8sq5wC3WsHi8EW4IHlL9-v_sCXJmnOoIze-I8RSAMKoRwu8id3YWMqPWSnFBa3v3NyaRw-MS71pTcrLS7OrI7cLTARSCAJjQuzawsU56DA", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101681164755352778011\">Masahiro YAMATO</a>"] },
            { photoReference: "AWCwydihudLXUgwvycgQBPYnor9awPVUJlzSvWSa5Nx89Gfpimra477UXSQZMzfnEqc5_evQo7FCJNjeL-fWCkLRtjZhkuUsWJkBT2_wN-6qOXqNvbNed8VPu4buZhQ-K0B7zDhHeRCKFoDBx_aSfnXpiwEeB0_h3kKm-Uhhx7JLKHTnyJA2HJkjadZxJPdt23b2AMO_UEGF96ICnaSEwbLobnbZyaHt1_nSayJYxjFQndr2y-04lerG2Jl0NPt9u16DXHYpoSPQS9dDld4ixcm3u1V30pWbZmmwRP1THkFGYZ_Au17twHIVitVgEeHw1rzzBT3cfJYnvgvrPo3vH3hkoJlGnBQBEoIejTajPMmeGmmPQM9idRNX6250HoyeeypkPW1QNl76icq-dKoRdtd2l4H0f-3m6YrKrZrmA3ck32jAJQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102229219166326801006\">小早川健一</a>"] },
            { photoReference: "AWCwydhlaHwSPrk9N1DfPC1CIOp_AQFwHGKpZ-0fEgXgFLtf2LM8FTUwVEAaj2VI6EOp7RN58WGLaBGsh4d8hizmb7url3qmxywFKTtQ728myfymZixQKYltwZBVXNwL1XpASMY9ZKW4hbmD1edbZvAe1J86ODpdeK40a51fJHR_ZfrSor338qWwsQ0X0-NbgnijJ5WIgwTWBQBWUmQNV-J63BqSk9jWf16l6JT_TNfDJCaAk_5TUeMcARBMQzZNDgPFifnxXOSKKNhNEQ2cRo4sEmO3W10joaY2O5nT1JoJ4BMvM1J2wg19EkThMrKWAfRdGf0H-DouBdgEkq4UiKocNklhgwxXfbcDo5yAvhG_B4u3MC1sH_-UuDLw7zkv1IEhX7zbEa_BAh9-ep98Pvg6dlH1hZ6sq_8f9QyHz71iyy8", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111982965585695421662\">どんぐりころんころん</a>"] },
            { photoReference: "AWCwydib-t2COr0APQB6wUzGg7EBwFj7xkLiGtq8WXqX3wcyGND0-ib5MXSaYRo89cYbGJEsRnViP12e2qdbb6kePQRGhVsUS-jCm1WckCAR7FRGirAFzfxQdExdb0qluA_c2-6ucoiz4KH7zGzANjFk-qsMAy7CoX_Xydsb576krQcW9SC3e2B9dwpo51mQJ8RS3IaoSYLLDLJ9BmdM3L3RozCKLjDSYA5ECvEI1ljd1ITbjlcdc5C2f3MXOfY0g8pTlZhBICTza2beEPzdBmpW0muUe8R1XMYSE1x7vhg63DSq2Vii2NiOc2e1F7wloXDQLrthgcmsd7k69CBQRn3-GtoRhtS8M6OAaVydOhA1iFcDP9LDwrb32p-rUW50jKA-kxJ3gfgVQYqqAWc1cBZUxeUws3GtiEiFSMnTXGaojiORJKg", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106514613063507516045\">joe ngai (Jnstudio)</a>"] },
            { photoReference: "AWCwydi0W0nmTxtlNucgOksXIFHoQcyuqWsB4jYM9Tf6DOpXvoc4pDkhKGvKMI9GcHaRb2nGbRKR4DVjnRjVgzIXOGxy_a85kil1ieZzbQkND9RTmkeqp9RWF5qpl13KqidjVNkLf6zraGlnWYnV7PVRGRVc7vVtoMHjZKp3CQdb5wPCC8w5JX9LzhNKwC4-xUg1SNBEU5djBhGoZoUaplMGY8YNBm03_ccedECQgW01uMybLUVwmk7LOgOiT0i-GlkF0FAw5mzx3dBn5QuymH2vAz5a93P2LDrV0PFvz-Qm2w-47y63ZKiPPfs99s1NkKaMAuPD8P3vHY6kPrBRxn5VOg4FrPkbjEq_1jJuySYWIOnqFBTb2L9giNy263I-I7qPZ9KfRRCFRa7e_Gvbl1Tj2CUvdxnqcmR3tntm2Jv39zCEcTk1", width: 4000, height: 1848, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103125462168316429196\">a a</a>"] }
        ],
        summary: "많은 리뷰가 증명하는 인기 쇼핑 아울렛입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 브랜드 입점", "높은 리뷰 수"],
        tips: ["매일 오전 10시부터 오후 9시까지 운영됩니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://mitsui-shopping-park.com/lalaport-mop-kadoma/teaser/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4766454954472503803", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%9D%BC%EB%9D%BC%ED%8F%AC%ED%8A%B8+%EC%B9%B4%EB%8F%84%EB%A7%88+%EB%AF%B8%EC%B8%A0%EC%9D%B4+%EC%95%84%EC%9A%B8%EB%A0%9B+%ED%8C%8C%ED%81%AC+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%B9%B4%EB%8F%84%EB%A7%88+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "KIX 면세점": {
        photos: [],
        placeId: "ChIJ48LvUhK5AGARngVdDTUAdOA",
        placePhotos: [
            { photoReference: "AWCwydhlbfgRkkXBAqz7Nd6D77RRVRvg9SqTznTPv0BygIHHiKGjn7fcdzt7tXQfw-TtP6baWWpIXZR5poeSkAoSwiq4SaMfUYc1yOjGwpDxtUzm5-yasrot6UjI2eSqC7iMzEfngzBYsHizlfDzapKRQ1I9AdJTQQxeL1C7JhgzSai7c94VMojtg63WW8V3Esg8sxWVrGI6YJl8Ykv6gsqWSREbv87VDRpeULDOUCWV2ol2xgO25FE-PVXRg4GqZzCKyma2jCivS8FlOUNQBZQivX5My9rrOPCwSxjd7ZfKcRq9IJaquSh2WVEQWy3TmKn8fwa7iYgy_04RO6Ytlv1Lgrox0HhcjG88JrLYVyB_dW4lfXXi8jr4rtVejmCdJUYf1Y_ZVkHOw_gh-Rl7PG8jZEOtTW6EnC6icHl8An4YwVhC9fMn", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114222122076872669000\">許小咕</a>"] },
            { photoReference: "AWCwydimnDd_XVPwcnFfm8JwiySL31m_RQ1tubzIaGvpA_Vdu81llt9H96PGjS5OobPLwlMyIbpZntJ52qEd3IBfXvhuuLk4KQgTv1EcVTXLHSFXEVWtnELMIzkz_ZGaJx2Ta_1AHaEzTrYNZUYOt9PM3FaK2Op0FZcHBEweDWDW2_pEWJ6kBB9rWzDIIajwWCH7RYLm1cE9SCNlcH5gaSteDeHNnLj-a3pvq0_K0HWelneguDWMvQ7TDAZNkkS0akBb9ggUhIEi-2FjzvgEnQbT7oFrNApodncntjRDbgX2EFyEPjrmCXdE_hIElQgZCj5_2qTUMltJ-7nQLMGvBeGlaOy-vJzuFlYSY6aHZM4E0EgjtR8JFpnl6zi2kMig2ZqaEo86m_El5Ok6fRgxjsEIfVAjZ5cLZ7RHZwTdjzUwaFml2w", width: 4800, height: 3417, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109981564513159621683\">KIX DUTY FREE</a>"] },
            { photoReference: "AWCwydivjdu7eKmRqSbRMeb6kKmAxwFg4fHrwZp8alGf2qKa5LXlvAwmbW1_QHRszDkGkZweesl-BkP1e0o87xV0KGlLFcVv-dZgxJeVgWQfRPpsNo2zztPhZbUR8N2y4fHuYyHfnYh_H9EMaXUbk1mVyfDgwdV1XuvDfZU7WkRiAqMJyXX9TZMd7vivE_eqRIHrKGkf4EWkhUkcnjl2TQN3zOUZ4X7VNkl4mepxRWyGEwTBZ0SOoNjP1ePccriZ5nqEKUudqpuzjHS09QqKm_pcjN_Hv4CCrsfeE3KjQYJCehSjptC5n7TP8tlPRIOJxKK_PIznmg6JoXbQtRMNoGJIprnPzYQiFwnJFzEjYOXTUjxpnSdeqnUdV9YDLYzi24OFV6kPEWtnJc1_dtrR687FR1SrNZzldc13tXgoWsbuB5pD4x5wc7cUPoPxwXTkkJSl", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114222122076872669000\">許小咕</a>"] },
            { photoReference: "AWCwydjV5rvJp9DbSO-rMspiDrri00adojy0z7s1DuiKMc5Lss0E_UTEN3AF62yAEOyjstVzgBAVPSlbnx3e_Z7_EGunJLyBBT3rn1-9b1Ak7mliMsqRxoBj8qjZyySG3rN9y1CmMO4ymlbgJwbRCKELMrlx9mikA8CBPi22jQjua5YlI8TIp_nhSKOUCHIJ8iMMqQrTcOvmXzMK--aG-JrWIhDFp1l8H2va3FlIIR0XsYt3Xuu9ZrJzs9fCLWKm1iIT28mpubm9JIrhX8uvmdl1xkJ3Ddc6bEM4Xpcxjq3ROLgAgrhSEFhH30Ggw-tzA5O8nCH1uKadIEX5Lv3bnru_MXmUyXKDxMX9uVg7p5mOmuzWSUn752C0qpXlcb6D_D0v2cChVapsZyh4CWMp0zB-k5D_qZc0QXNjXJ1V9j96w5xryFvK", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114222122076872669000\">許小咕</a>"] },
            { photoReference: "AWCwydiA6IbboS_PwZbi8t2OMow97TsJkiUGskNm51PR-Jzv1KbujZ8rPZQXWmfRykpJt9Q1_PPW77z0kqt6QKoxSy3tp4MSB2uzMciIb3zQBXC3Yps5D3IhmcrjocdkHtX0EjmUTRGxlMxOesstmF0hoPBD9q0rBeAjAC3a9OkbvGRxsFqBzdn8aAI-wu8NJRnX-Rf6_fiN8zzLw1kjiTQ_TDEOHGAl9x0g5sovs09eMTiemVrCE6jGPDnJ9-CtNW7MC4T9XR9xJLkwzpF4V_EaLZv3ujLthOWrgwQ9q62kGgxH6v0V6l8DQ6kd1EV5PmVH56jyg1qo1UKv7Su4CnQNH4fVf3HpTVIceIGLcqREDGT9KaAk55xjZwFOBPdrsJpnxqj3IAUPKSF0DOWZOzePWaan6j31vr5Zxvn-Gqh5lalmohHOMumEyS2w3qrfFXv_", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103992850125891523108\">Notorious Nuke</a>"] }
        ],
        summary: "쾌적하게 리모델링된 넓은 공간의 면세점",
        updatedAt: "2026-08-16",
        highlights: ["리모델링 후 넓어진 공간", "아름다운 인테리어"],
        tips: ["리모델링된 매장 환경을 경험해보세요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:00 ~ 오전 2:00; 화요일: 오전 6:00 ~ 오전 2:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://bit.ly/4oonvBu", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16173552389651760542", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=KIX+DUTY+FREE+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "도톤 플라자 오사카": {
        photos: [],
        placeId: "ChIJHcI54j_nAGAROikjNXbfwMk",
        placePhotos: [
            { photoReference: "AWCwydhtqc0VbYO0Czu8bMlsCrXj-sz9hLskuE6dTpblrIv3SuZeCsHIL48QSqXyWcHlshWJVPwcBa4A-KRagD7tVbo0ofOKqD7IKDGg7JSuVAnE2WWD0PgEPVHHp3HXuHJYemxkrH88fC1z8s2zBhX5JCPFMLuj_ljZ11BrNYle7zUQs7ba0BSQt3sTIQcpPTRvFE0yXC6rGsY6X5rsI7gSKGdNmXAGQHOBSdAqYluBnChQ77H2d40emlh6R4vfkdYLyjm3mRzVBBCRba3Aag9Xoq5TzLWZ0BXHA1IonRpq4WAAmawHbHXgVho0iH7aV2LmV9Jv4ZMWZs9M9h2L6b-b3eC6YHwe4Xb4vpmDXwSDFhlBJwWa3IaVRirBYbERqaoS-FqWDeg-OFKQ3vg21JnyFhiMS2MzyeGFn0zMuaIbWrWHpb_i", width: 1000, height: 1000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102425185990427806682\">DOTON PLAZA 大阪</a>"] },
            { photoReference: "AWCwydg6NiDU9bzUMIZ0g8g8xPXgFu9pyJ7yijXpfS1rLJYG6Gv1f10hfnwNmCAfFAl3seNy0wjDhoWobmjNGj9G3qMQnqORoztJ-Cc3VoF668G623-73-i06VPmHC-MsW_90otSf0AvaryoChN01DyqWzc1n9B-XwvROnxd7C359HnnteuxQYmRT2SXSDcxQRkH7wzflhHZslUWgi2KGSPkv9hHske7RxZlHvzvir63nzJH1H2tP-K8_OdEc1QTpvjXbfqrbIZETCYH6wSZl2K9sQoSNzcH0gEA8F0c6c6IW6-BAnbrRehEP4DAkKOx9IwNONzvPZEO1okrQdbPgXeQqsNaXxr1rd8SKGj7FFkHqOlYlYfpJDkqzYd0b5xR7QbhcdtxGc7rIbnv367CkdItO9RNMybGJo556i-9YtDDIDukqQ", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115482299405389289620\">リンダリン</a>"] },
            { photoReference: "AWCwydiP8NcFB2ULqqoHoIedUIQBBrFDfu_geWo9NjAJId05TpzuNIqD5jU_UWQfZtZqb5s2J7pOa7NkC9rDHckg5vksBqKF-cdfQ5wjz8jP0JlmJU5s4YV9l9RScWi4KWOOhkixjXrTJKWhZbJvdbm6pD7is5Ivl_QgVUhc-8tRi4Sp0ypEzFeUIlUq-uDKQSOg3omNImIFiFPZJzzf4LA1DectvujeWnQrP9B0Q0QKrnXw-AliVfKZ_bsSyNhU-ONFn2AE5ZsSWM2iypWOCfpdomFzLiP-kGqfhbN23TvAyyvwqDndYgssG02qlZYANqrZJaXNLckNbrG3R1kJFJ4HXyQnRBe01N900CtBeAtVr1FXISgGejYhHRayiTt2P24Nh28WmxnVsyvmyfznTSMZ9jehUu-AMu28VNbAytMCg3H4jQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102066320491835176511\">Sally Y</a>"] },
            { photoReference: "AWCwydjEOD6DdtoplEav4v0M2oFfr4nuU0Qzk2t2HKkW03CvhgMySR313SRKMiZnLVChraRaePgsZH7BL4E8gp46PhdcpRqMdHv6nX_md9tkzlqR6BvoXX-9gIkFkpXQVLSdDsW-wihKzsCc6NkEZqFWUQvlEs3s-uoqN1B6mdOnQXn21WG45Rxc4WeeXcXikFhT52vRBDS73V17nhFYUyTM5TNDt9PpKKc_3Vw7NRDKnSs1a573R-Gc4Gpfrde76GEEgjzsCE8Vb-qWQDzJeNBKxOpuW8OO60AaLAQ7kC7yDeUBAjVTXPNgqzi04Nush9s-0W5lTl--MMnHR50X-r1uOUos9ImOgAf8aZDlr-PzVyz_IYaVCMMzGZmyrDIE1mG1niuj87Dq5M8WbN0BXKH6Wi8Vro_c1AuMeLsRtBsb4tk", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101328457240186240468\">June K K</a>"] },
            { photoReference: "AWCwydh-JF4agyWsBZ6xp9SMVS3qNaQnYu3kIJb4csxnf-b3-uJNpQW8S2M4XKaZF9OHJmTg1whc3tYpiD1VtnXksDK_Szl4jfFcleadO0lsA1umVABh8B8XWcXZbFYnlnUoJfXCldF7l6bG3YSco1qPOOuILH7dPZN8zVsfGABmEuwn2MLYUvm18o34G6JmUzEbV7thprnhfp9YLF1vUo9h4lvmcrPmv8rNPkrdLVMJIT3skVtJUjfd3nt_L3G7HkejNUwCsoGsXdMOEsMTfTLnNuiFMSFPoIxNTClXp2P8eSgN5OA40OBci5tCahTddjChuTWJVBJSSs_x6Ik-N5-PmuewPd8Ey9qXLBPIwhCJReOkCW46iqs9YIRog0oq421tUEZCatRjkFhERWI9daZFiUEEDYyiBvLjmqtM0aERFNI", width: 1000, height: 1000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102425185990427806682\">DOTON PLAZA 大阪</a>"] }
        ],
        summary: "공항 이동이 편리한 위치에 있는 면세점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["공항 리무진 탑승장 인근 위치", "우수한 접근성"],
        tips: ["짐 보관 시 별도의 요금이 발생할 수 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 6:00; 화요일: 오전 8:00 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.dotonplaza.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14537865295942592826", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8F%84%ED%86%A4+%ED%94%8C%EB%9D%BC%EC%9E%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "KIX Duty Free(남쪽 윙 선단점)": {
        photos: [],
        placeId: "ChIJJw6t_W25AGARP79bIr5VLFI",
        placePhotos: [
            { photoReference: "AWCwydheX2O6O_9moPoG1LCUYm4W8azwqsqpo1G0iealBVG6444MSMeW9wAkocZ4z0Afc5ooyhh6-4KCoVbzNGHMu7oj5qlDkmpGsHkA5LRxcBIi6q03Gj3YYUUaA64pcK_1If1VimaJmsCSPeX4diMoqMNbXOINH2NUXGk9sKON4ghBXOMxMbFoqhtfAQEU1xJG85up6LLNYG6Kb-u_1rB3LWM3mrMbNEpArO2ev3vrn5FzBzG2JfaQ66_4bRC5VQQ8W2U_IRHdOgzFqgBJjiAlGQ-KNUaCELabFIOy61ClNLhntJdf0O4DAuL0vZ_1559-jTWRIO1q7ADvKQSVcR-7Q7ttj8SGLRJ2vC0dGKvm6tk1GznP3HhiWC9UiuyDs3aGjenFsUqZiOdZ3vlBVEUpDNs5M2Aq15Tp9VicZxlscFbNark", width: 3916, height: 2204, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114244647435480931071\">paul hsieh</a>"] },
            { photoReference: "AWCwydg5ePsLCt-FcJ8xmQzZ6e-I8P6TZYo5AtDS_A6Eg0WHJAls_onQLk43irKadb1KIfLMSV9D3VbUzswhtoEeImPKF8P-xrZI30M4ywA6a3dNrdNmokSyMiKgXDUQlxinkUaCzyfjiMEQ5hgWxSxQiQryPBhA9LL8sGeMO3riFxA2A49ZWir9tx2_3zdcBW3SBwwVqJJa0KMBry6K9IgNU7Cx5-iJhK2jjtdVxXGiEsfGP9aYTy72v2q5I42o9rnxZh9WthBmM0aurD6qeNv4eclLBeO6hXFV3YM7pQRLJBdBN1xNeY0ZaXAI6rI-Hm2pu0WuZva0UuWWH9KJWkBFZgrXYguBglZ1lfAitX1NgGS5IQbMX9iVSXGwYy8TNq1E9f4VjPZ-f5l3xHHZtjePya9X_7stp_qxpaHHEmK8PeVlpj7E", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100506616126015146082\">Mark Caval</a>"] },
            { photoReference: "AWCwydjUqPZ2Njbm1uCoMrCGhpzNsAYunsCy7CQPcJB8PF5jkjQmNDBoNkb72Ylgl5Ze-N1R1f4M4TQxQk_6td-zmZT0IEpugD1Ck5MuvsDU-q7E5W-AHDdFVIOzjey9mTO99EKg3_EF4oRgQvV8dZLfJJeAEweHlk03A1tsP68Sct-0Wvh5Qv3LcMmPIdyltZwOfWUotbmPMA3mpKwmrV2NygdsJ2a9uxrSG_RkiKef0RpcS3d1bUiYoJmOe0S6UWygUPDGHajGFY0NHMxAapKqi59byQEeY9GvMzUbVjYHeCa1_1DJebIokma0-w57vLglt6QwU61VZaZ0ll0_Q9ZuGGpjdA3dV6cGjwP3Mw_FXQSAQ3DzhJd0rsJ5n6CaMYPaFAPSQ5P9Muqx43drC-oMykXKxKCXY9lqCUdSAviQMHFmPQfH", width: 4624, height: 2608, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115966563386505338765\">dr ken chao</a>"] },
            { photoReference: "AWCwydhSUIbDyXRoHeHFYPlZJq6Sp-qDtuCEIHtMkZQ6J4vY2b0I85YBSf7PAytrdaFAOFRXGXARmdEBBqhBbL_lzxKCoz8CHUxeTj3cCuhxcesIKNkXwc7Zn1mY2k6COUpsrkYJxqzXbxTQGB0zzEgBq8zdE4N5JhsedsSX5mb2RcMOgFrlKjY6G9LcCO0UiqCar7XSLgIzMtrtdjmOL4sb5_POE_RRDwdQYOKT0iVvQOwuC9i9PLvJ_OcPVrH2OwlgQL_Yr-d6QW48S9RVjR2CQ4uvtBlIaNbjMckmJubSc68U1TBS7zNIXcYOyqTyJcCai4ed9KcVCPldDuyOAD6WvAHKWqbKv6S5tZF_Aq1ZzcGsVHgkFH1VuDfR0Iwtv2E_yvG4Wk76sYBIVxU1UZAF3AaHQyoDMqrzH-rv2tPWJRv-grs", width: 980, height: 980, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101873236303181091046\">Jt___01 Y</a>"] },
            { photoReference: "AWCwydi_cUVnWCwjFkkAeOMGQUYTb6NJ1iB1U93qmNplHPe6bJ9mDfFaPtVvCvli_lyCWdq7K0aVaic8kNFzCHeks2VvEidunvMbOEaLwBMC0Q6EoJZPl25bl-Bx6QsiGQJ6K4NZLnSN2en63xELr3mgwCz201m2q07Ofu7D3ggtpaeBSR7SDqBIPglBOmdA8lgdBmES1LkLW5GbHqVehMUKV1ofwmr3UkUFbIsmpQKexyB1AzOVnqUA3CFJN97gi5lZQ6acYFArXHG0VlHxWLS7PpC0gDqLiOuVHjuc4hcgWG81EYtyHQn0OSn7RKYqlv1sRkgdk5wofewwkeflgkx_4P1xmW_Tpe_vCZn2R_mDSmTXv5naUjLSX8eCVN-Z-pNStlAMQYHPt2GHYK5fRk3TJSfBiHSFjDWkdP2912D0rew2Cw", width: 4128, height: 2322, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109798252390671936673\">문인석</a>"] }
        ],
        summary: "다양한 상품을 갖춘 면세 쇼핑 공간입니다.",
        updatedAt: "2026-08-16",
        highlights: ["매일 오전 8시부터 오후 10시까지 운영", "다양한 쇼핑 아이템 제공"],
        tips: ["영업시간을 확인하여 방문하세요"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 10:00; 화요일: 오전 8:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://bit.ly/3J95RCO", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=5921201885193944895", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=KIX+Duty+Free%28%EB%82%A8%EC%AA%BD+%EC%9C%99+%EC%84%A0%EB%8B%A8%EC%A0%90%29+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "이치비리안 난바점": {
        photos: [],
        placeId: "ChIJY1Oq6RTnAGARuvmAxMG_KVU",
        placePhotos: [
            { photoReference: "AWCwydh2bCT82KCATjDDfRE3E1k8GyEB5dprZyF33u32N3Val9lB2S4x-JGEsq1h8Va00AfIqclMseOXD26fSM73SZ7U9rYoW_HVqm3NSHYskz7QTl0QDVedo6765pZtl64Pr1OEkqHrG65gKBuMMxb6RkIOKUWdxPVNy4RxqIBHipSiWaGIeuRccGq1o5dbDggEuTCqa4PIUXhkB9zwXz4ejKbJ1QUk4wPNZYaMetmADAbgk3A0bkVZ16texU7hpC04MlCpLaE0wOviFdZu51ajpfBp406ZdjebACDM-Tqh2Pe-MsMbxINsNyJE8oC5bmyej0PSEW50k8Gqpqyb-VgDDf3ZlVIgYlCkoo3gBAIrQ3kQ7J5euyMeQeLpm-4xVmsR7QlKSY0g1TxeChIZaWNMlSbR_2bWNLiPsT1xcf8ckPo_3fGi", width: 2227, height: 1484, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112228717848982338439\">t s</a>"] },
            { photoReference: "AWCwydiGAJw1KpwFxlWkWcJ6ViFs88HLvHpNRsLPE0jJNjR77FFZTVqVi89TGuPIWV6GZDTxVmEjCzdl__vioq7jzLczEwVAYRG8_S_fD0p4K-2L8hr6rvMwuWR3q0AtplbHnOFkdpdV2GeQ78bKkb1FOKbNT1jA8ZorfqMKZnYfcmYt_lu8ylEl2t3JDFyC7wr34YT6QwN_ueJp2Eh8jk2F49zGvMNiys2WagqTEmEdBFeEyt1Y7k4jfDXIdw07MB6Rt3_IEwghEz0CVs1VfO1orGC1U9aySe0vUtUHR0jlStlN44Kwx5T9Iy6XMojOei5-dS4Y_iuL1wtIZ4hYkZvDhs72vuSe1hSAXBy-LGoEKlElQYt38qFPjbM7HartkI4VaqnvtCcXgPVbrRPis1a3H-7IYwYYN6v256vNyQybmxA1Ng", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105260753470010098955\">ラムタル</a>"] },
            { photoReference: "AWCwydiGRb0Cj-AAnlNxvVA14jyO_z4BrHPYlxjqH37e8e0BhQw6EdZqKBDgp2OkdV1C9Pv-Ctq21Nz-tEIzs1rPZC-tVN_O9lh8YedNIQEfdBQ0qxlx7oUeRp2Mr67L2kR2ptdyWNZ9mUdieMmVGoNp_fAbH4fuZ2zIfvBmq6ZAlPAQZZyx8ITId9IPB797hCslyu4OX8a1wOt6N1pgO6Qc_m6f4CsHFZ_1tXydzwQmFOJGJdIhdCSp6xGbFetbSrkGl2MQDVYXEPI5j5ic8zGOBheW1Cl6LwMxvLn6AOOJfh7_FIiRuFF0vO_aAqcfnxgaufpjqGiQBuQWqz7QRvd9fqCxieScisjgUcGvQJYAJbV6SgibtUpgUMpjch7hEtQIV-9gf6gJwuFZQaOYF84_9dZzekK1wItjYbK-F7ZbCNg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116951845923189518251\">CINDY魔法ABC教室</a>"] },
            { photoReference: "AWCwydhVP54Pv7UcbQjgr9YaKsn-3jstlpqknoFN3sDU2scQ2aY3qnDfjIDvkqC1Rhwj1rfVS20tHI1WJxX11OXCNoGmhZIOzVLD6aWjBbTPXKy-Upj7lSofyU_XZ0JKcHD9BEhMQlPNGvhRUprhlq8CfWzfmeWVN7upOnSewBq-xcIIDBjxRHE_DlfveKKzPfXFGKPDy910mI8ubBgdX60P0Znow1l_pQi50jpQav9zJHgGVUs1rcX2w9AGXdIetTyp-9gGe8sTd37r0ytyf6PSYcg39hUunNdL77ZA8LqWbczs3lsGlY9P8pVN4zEOHQIU2FFSXc-z7M45PtGyT4MX4s0ZXv8mP4Pkdq2dMkUQK1ezbDYd3LbkOmXPEdeGjdUZBr-plCTvXnXiWSbbqXKAFfWmCHYA9w4hEZDdTbPYo4MWRw", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111995705591411713584\">Wai Kin Lam</a>"] },
            { photoReference: "AWCwydi5d_PAKWeZeiav-uku3DE6QSurnCQKNMGZ4oMdsbFU6uAryQaeK17vdg0snY2rqQvoWAfIHQv64eMbAvCRYv4yvSGcvVlUswhcLSpULB79CEhg2skAMlvtCO7ZGtC07yZea29yDS3wSD-2gpKCXce2tImSEBYYDZgaF9r7XpReQX-E3ez5n59v-a4Hwg9YxtATg6Cli9alH33k1EnY2LXpq4jAW1yEqpu6Au4zA7Q-PjSRak0-GpjTnOrl7Q8oOrvIH7o9t66iFlXUEJv7XkAIfu_8da2LlkOEOlavjTx2nDWX6iNPiD_IGfLoEZ3i7onsNc_xqXhFsjI9yq-6HPp-Cfso7S56P5M5aumugymeKqiVBTcsycXY_vM7DUBolwkNdvPNTWjR0jWihOEpyDedeyBmqeOTQiTR09w7-WpgU7Q", width: 2604, height: 4624, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116448683495138452734\">bob D</a>"] }
        ],
        summary: "다양한 오사카 기념품을 만날 수 있는 친절한 기념품 전문점입니다.",
        updatedAt: "2026-08-16",
        highlights: ["다양한 기념품 종류", "친절한 직원 서비스", "꼼꼼하고 정중한 포장"],
        tips: ["택배 서비스를 이용해 편리하게 기념품을 보낼 수 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 11:00 ~ 오후 8:00; 화요일: 오전 11:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.ichibirian.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6136646806215391674", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%B9%98%EB%B9%84%EB%A6%AC%EC%95%88+%EB%82%9C%EB%B0%94%EC%A0%90+%EC%98%A4%EC%82%AC%EC%B9%B4+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
};

export default info;
