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
};

export default info;
