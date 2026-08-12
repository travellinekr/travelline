import type { ShoppingInfo } from '@/data/card-info-types';


const info: Record<string, ShoppingInfo> = {
    "국제거리": {
        photos: ["/images/okinawa/info/shopping/kokusai-dori-naha-okinawa.jpg"],
        placeId: "ChIJMS9BUXdp5TQRAl6RXvY5aY0",
        placePhotos: [
            { photoReference: "AWCwydgy0pcFGPRnm87oQ-D1qBtQCk9vahhBl10geDYnLQh9Kw4mulnMxJjOIKXPaYUIn27NZRP-pHGWQ-N4Q8gxqIO8ZKkK27bUZb04hs7niAVffgRqZNcmUhg1-bFFs8qJk6SMiEuokocqG7vMSQ5FycYFNUmf61m8b5QnX04JlgU24rUsRjMqwhUDWAUEbcfndN2eVnRrvXymQRRe73Fo6ROjEb0RvB21ZJNDYzv9qb6RUX5IUDPWsJjgrhbwofmYhaDvfev8PUX07wbCz4UaiI48GU_iIx6U9nRlxf7iymlUmcXn3JbVyohxD_f68DlNRgl12i6kywWl7i27BPUMskwRUK0760ZvSOy87xaiVQlmh0nGbsnNKVx_Mqe4WrGyyVVqV9dYkQrlbk7Taabxqzj_6G5tbIpqcWMTCTdackWVwbU", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101475287509173757976\">川北哲也</a>"] },
            { photoReference: "AWCwydgxEZ2keQR-6yxZwViQj5Oz8O3_nKNsn1sOIGFMPHDsnfZqpya_G1h4UssJG3Y1LRw6U9OcvNM9mZ8tUj0Coz_iEAxhq_Gb8PkUQ5vuuynrtkW59nsKjEQv_LoJHLUs9jDDswHo2M7LgSMCyEzwkxRDsbiN5PEWot8PfBTgQ-1SzMSgYJNT8OwaYXjk-Npam3-IlD4kWf1yHVh1Z_SOJrvTN3Oj4vYNcNucvfsI7CpphwS16amMSDmJR3WYMQd1ITKyRm9hP5nL7N2l4wtv0AOc_vB9XlTlBMN8U7oqRMvwok52RKHDG1hEIeYqU69h33BsP4ZlFxD9uChwr9RDrrkf2uwQn8613QdefbnZr29kt3yEG0yCOETwq-6sFt6j6q5Q470AsjNBbvbfHB6z5Azz-_fPHKacw3xgXJ-uRXpkCA", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109793082062245101192\">XiaoMei (小玫)</a>"] },
            { photoReference: "AWCwydhgyVjh5NJxsuYZiRinqteCFeXnbtSVDg8Z1_kid0C_EtfJa4k2qFkEL6boxN4xOwUYBaNolUeLAtcHwOhhbImGdZEcNap75l1Tf2-V6Tr-fwP-hZ5nZWBeuuFpBv1hJE3uIgry-NuXVU7Fl2jiUcF7ZzTja6tx0blkivPIdVDNYdsVUukqkUXq6uMyaA7-XKX5PsSzjWemWfwTX_nwt3rvbUDog77fRijZRlJM6V0f71kwOkZmxLeCwZ8yUQJ6zrgPqgigmRWbIxfQeniBGyw2MQsyes7ZzPqDfw1bn2bFeeLlKM5BRvKKRlBi5VGPNcO-ln17dsi8DzBfe-Wn1vgelELha7hAF9hqXyrU09Z9aaSWnGy45afHsFZ8q_T_Mlw_x0Q0G3N1rwij1PLrJAEDmzRl4wj101_tDsM35OP0oj0", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106219964508638039880\">Masaya Sakamoto</a>"] },
            { photoReference: "AWCwydiBQgFhjoypB6cwCqc4X7rpH80b8tOisorTX5ehespGbbBeXwKmYtl-97Dy_-fXWm3e2DvpiEhtbVvicE3DbHl5u215qP5TdqBPhGrO3dRjIBV8fu1Klfl6Osh2pcIODtJBJ1Z8HGA0MYzRl3dcQ17lkMxykrEbfDfsVfrOrelnrvnAVqjLhEn40IPTO0gfi9Ce1ELCOyEIlvZ0vs6IHbeCBP7kdHjtheJ6a-HDb7N0oY_jCwSM34zZNEMVBtBJnF4IjkFDvONhE8jUUkICJPqy2J1liYMVUq9roHlh7xyEVHsL4-foBXWE60LhYjjvWhVIGNc29iCHJd3z-eiyLes_ikUXwbHR-Zlb8qEH_m7J8LhK69Fiq9uC7mp1bb7bNhPK85_4cIEq-43gsMePhGx8irVW6WQhhy1H2QQRdZrIsbwc", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118151442379215554988\">japan killtsu</a>"] },
            { photoReference: "AWCwydgry8z2P8xn0RrlDEMLO_GkYtnjhAZpgmM9ShbMVrShYMQ92NfFPS5iXCaQ5jP4h44fnIHHOlpDV9f1dNcqiPIiQFcMrlD9vBF2M98FO2EpqoAGl9DENYfvoQeSSwx02ZFUPrNclx_ocuAZ3IM_aCTabWAC3as0JFmtRxprtlW0EDPHSl6QyhNW8hPS67VAoqCRymtOGXnV_XvtrLYrDkkmGoJuy_XJmX8DREl_LZtU5stEKqZ8RkePSFJAY4MQIa4nAQyq25ZvATf951sB2ZyvXJzVoJwmQ1KpEPbU_mJCHsJFi6W-CQuhZR0HykTssz6KoYptatEnZTU_SxjhE3fJtL-mDtZe8xwSoh4J53WKrtfPlHktuIGC1M1nc6QyCIjwJhfuL_UDo0P7eY-Uoz5colCFPUBcnKrMTWG8qo989fTTvpmGj09xAoNPY2RL", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104889173919348391186\">許祐寧</a>"] }
        ],
        summary: "오키나와 여행의 필수 코스, 다양한 기념품과 먹거리가 가득한 나하 최대의 번화가입니다.",
        updatedAt: "2026-07-13",
        highlights: ["오키나와 특산물 및 기념품 쇼핑", "다양한 길거리 간식 투어", "아기자기한 소품샵 구경"],
        tips: ["주말에는 인파가 매우 많으니 여유로운 일정으로 방문하세요."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=10189739362213780994", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EA%B5%AD%EC%A0%9C%EA%B1%B0%EB%A6%AC+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "T 갤러리아 오키나와 by DFS": {
        photos: ["/images/okinawa/info/shopping/dfs-t-galleria-okinawa.jpg"],
        placeId: "ChIJM39Jsthr5TQRv8Bcs2MMgaQ",
        placePhotos: [
            { photoReference: "AWCwydgH0G4Ei1YUdEyjQn-uoVekReUBGYuZDXNCBLRaBc0-CoqZ9Dmd-lFNLFha_VxKYuV_ghj_Trb6be5rL5FVuW8ny0JZbWxV4UWVrPJF4H3-VbAmpTviGb0ZqV-Avb95qF-uGDxrvuGAchBM1imtIzlHeUSA440NMsEBFYoMuwu1o4sMXIqwaRZGqTZgx9f1bg7pqci4CFM-c6rxu8KTlhnRHdLRoN3IaXEjmFq3yKoaDCx0AY9Mdo3a0OieootrVkYMIjZQ0jtLbrrK8P6ce845jdDrQxxUt0XLRrSFahJMHRb0sVePvAPFFUt0MrQimhGCg1SdDuWnjGvHTqTcjpQ-x-St6HSyIzvsXx8exk7YbLAXEVopCLtYe5PiT5eJSZqwDf7b9wgUfPMK-IQb455stkynB_q_ataPvc9KbdNfkIkPV_stGlKDLVIwauLd", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116024647001005078695\">DFS OKINAWA NAHA CITY</a>"] },
            { photoReference: "AWCwydhsvCGJNI1RzUmDArFp3_HNqcocoX4Ac8pFtkyWNb-FVpnbFMX3WsDLv7aMKmmlBEhhuBWrQiroS__GKabZ_rbLes5XC800yYuDuipPhRzXKlcYhgN43kJHx5OFicHy0i9h7yoaqrcXPJHcplK4pIvGh5RECOZyO_dPJNbV2FXeIttURO2AZ0RKCTyb6ch87_0v3W4Fw5aBuNyOyDYI6zRCn3BSR1Q4ERAzAi5kqchEn37uWDVTj_S9vCGqHkXivatcBfUIM3BvgQpZ6oOddme1wgXMjLJoJcTJ6fLcLF4RnFFWKqVq2QkAz4j5Tx3G-LE4COmC5MuSSei7hEd9aRu5O0I6dAlb9a0ctfB2wdPIHNfrDa2mkurEQY-O_yTKgS_GKxg_0mZz8W7osoI5RHphvMwY_Em2PavOsz5tYha0Zw", width: 3264, height: 1616, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101960847496698201600\">南見謙二</a>"] },
            { photoReference: "AWCwydiC1v1j6sHfjg92oa0kY8tOxhJOWn-sHkonj5C8pSzTVeEvLDFttZpA4i0aOHS-dPnaB1sxkw_BFjYgUZlWlA3H2T6g8IZHueD8HeRBovn8ubbiRmm5zQpdN7o7JL0senKJvKFBxOIhoD61T30AF2_Z9l6psVUe40Wz9ZT2if6mohqc54w9x-IglWP_mcwZd-D4zFKhsxaFt7V6rRLp-_VgYCOCMjdnTIBfyOmrAOsCCkuLNoufbW2oon4QcnOXm9_TMysy8XWwvb2K1OJGE4JZuIqgsWKKjX8XzWF60xGHFwIp5wFeTRAsDuUpinlwgivoEhe6Ju1DoDS87R1U-CDq26yTPHdqdO8XehVozvjZNb6joR67uD5kqzGpsfhvWwiEQDNpvimw-XfIojfUsG8it-9sAkeJgq90V-8HBxlKL5x9", width: 3264, height: 1836, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108268783436293549012\">lee sd</a>"] },
            { photoReference: "AWCwydhpindWZUSlfpvCoageNFfvGFxc53j439FS3WV2Ik8lrqafXCO1C28Z2fMn-ehYGtn8DkdN6mF-SgxBLbqlHXbv9PyBQQ0k8S5uErzuc-MwxJYwD3N5zck_RNw5domFNKoAzafVZTa-pwv73YKb1X1GjuTJOX2IdrG-4YEWG8_0JV8Ch6OEzIu2cnK8tc1RCn0Zu_st_TY2fYLIbKstPB8ZWNpOEFsLpzKb_0NSLR6claLQSFL1s6OK82Kl-a4u6IcI8mqcY0DN69rmfCH4BjU8Hu4Lgd6F4_2wxxj-CXOZS1jg7V15SIkMXOWBTZ5t2nPXyDdw6bZ1c4aZ1ulOdRAK5VDkojDJuiDYuuwTW7sgE19wUs11_DRrDSiG9vDAJ6gJ41XvuXQK2gdquXkQ94NCnZeoG6RUYwJZ5PuW9eS0_A", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108495686227846244598\">Catherine C</a>"] },
            { photoReference: "AWCwydg5UA__kpTlh7VupAJEREK3RhhJKPBfAQ0tNMCcNN_nurAI7wnoWftfLPxSUZnINJEa3oU5vAMNNkaH_9X2eOSQdQMgem8RtlhH1V42DRqW68aAKVMYCqqtQf1dqDA40kdqv09a7V6Nyh3ICrYFyBx0tXcAeUyVZCyroC7ucfzOF7HUGvEk3jRc2VM0BZ-mWe1FlY_6lu8Y1njFnq0og_1YT7nGFwyhO3BKN413gmTwuLLlG8eluLntH_G-ZqLEqzjLWaoJ3zwSG8FFnrheRMnfZQBZ94yWlYdhm5EjCldysNl386BSpuTFYzFXjtGtkhplAT_zFEpKXUkUHfpHqO1Uoh7i9a-sHE0OtexwCbf2EoCPzCyAL3X7lZ4R3-7ZKqyIqfY73m1h2a_LThMvx4uipVw1cJeaMMFCzbOjlQI4QOuC", width: 1616, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101960847496698201600\">南見謙二</a>"] }
        ],
        summary: "명품 브랜드부터 화장품까지 면세 혜택을 누릴 수 있는 프리미엄 쇼핑 공간입니다.",
        updatedAt: "2026-07-13",
        highlights: ["글로벌 명품 브랜드 입점", "다양한 코스메틱 브랜드", "쾌적하고 고급스러운 쇼핑 환경"],
        tips: ["면세 혜택을 위해 여권을 반드시 지참하세요."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=11853769316566352063", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=T+%EA%B0%A4%EB%9F%AC%EB%A6%AC%EC%95%84+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+by+DFS+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "이온몰 오키나와 라이카무": {
        photos: ["/images/okinawa/info/shopping/aeon-mall-okinawa-rycom.jpg"],
        placeId: "ChIJJ_TSFGIS5TQRa_HkdjGALss",
        placePhotos: [
            { photoReference: "AWCwydgsiV8P1Yt0vRGLS5mFcMGuivbMeCmHErQL_JK5KwNLnX5xFt44FkUnEYkJd59GvNhht8ZwEhQfPXy7DRRlVpJ-oti3DMlEKHTS5Yu_vVeotupH394L5ORODTqqcVABr7Kwey5uXRP9mUDTpwvX2Nv4xrUtKBNax4uU6_ZlNndYT8K_0iICnTvZZVKRI-BlmhvJSEMoiUNmPqwjmbDot8PobHI2Ww3_60m3_LXBM6YjnMtfiUa36RWWV2xY0Jvq6NWIdvxxpeBs5LFCho6ikKGtg61JOGEDAVFIS3LcqAk7kFWql8B1JyqIdxt7ED4dU1D8jnICqVtPJhz9zFX4xG9ER3xzB02BYAEqnb-b_ntYJlbsRvUQezMmh8QZuAb-7PcEGT6en7ktJ13_7r8ed6hMesnV4MahA1rAR9g5dIzPqg", width: 4160, height: 2368, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101002419794853214580\">Yukinobu Murata</a>"] },
            { photoReference: "AWCwydhyoeuvPdQQp6BWl7Th_KFtRS9XaXAzVEtcEQlEI6woNqRYbfbK1RG-llrCCZaazzeTl4cFVfpBnhgVGMZVVoXpbGguby6mdrKxE8AaWqljQzmm0aUrJNvrrowgohAMmSyTA4kIv1ScphKX8RcZGKLEpBBgsoXBtDd6jtcwV5xyOC5985hnidGfa7KUCipCi9gg4eWpteH0ZK3-6it4O3PxIWh5v8jMF9dOxV9bdqOe4R6mXN9NiGLwyyAliCBNtTIfP55H010T-9un0Li6Oa23zk7qwSFeS1OX1fUVI6GRp4BLkTgsPB7Msnf0fY4lybn8fFAu7wqavKdWMNjYHBfgNHsR0mG-VNiIRuUneCcrRpLtZ-uNmIMvvTQoB-u--e3xPZtIFRfiqHT8kVXx8FSkE7Y7oS6Vc3Osjn8UKigdUCrf", width: 2200, height: 1380, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114834334636020561462\">イオンモール沖縄ライカム</a>"] },
            { photoReference: "AWCwydhQM3gtGwdDP9O7KqrtS47pARsl38DWZmF4EKMm3YYQPXVKR74j0zNDEAcwHU1yW1nSe8crpK6Vp_bt5Rn5JAGZm1a_u7fUvfOCiyGt8zkp-tbdbWSkSk9UxLx_Eqj0Z6VUq14sh4EP00Hxi-PG6ffZ9WSVhCAH9Ynjro12tS8cc52kU_G86blaC4dF1kOw5xibmBSj4a_pdqxbh5jrjYyoJEw9X_aFxNY6odXiHa1pbwSEEU8ThwFp51wPiyA0FPj2seeSnNNAu3cQnfHouZqNH-EZvT7aa5fCrQTFKG7ZL6IfOkJi6ycMBy4eR-WOnpZHAfC4sEuVSOkSirjSAKDH8Pb00epsmqxwcTf0Uj2o6ysaPbBvPlk5_zhmD07r3r6pX46FG64xrl2VBUtSqb0MhoyqwGj3zLVmHR-n8tsYQZz_GgclQ3UhRlyVRA", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108256479781760994112\">Allen Chien</a>"] },
            { photoReference: "AWCwydjrGurONaGnkKcQzVK85H5AWLfUdV0EGqG5y2toNpEATYZNMZUxO2XELn8eTddgwhTCJTcyLE9AC6brGRiTUwQ9mHYfpd7D-8veXncLSK_RzvKlv-MdT20kDLt-8PJfluo_6g6mPSYvgftmGr3P4rb4C8xxl4409jad7hryVZf7d6_NcQirpZVU7wUQMONj0yK5K-DyUm0CYTZsaZIM0tHQRaX2cuBXcCJWSUDuBYPfY0sF5LGJpColOVx2TcxDCvZpJB6ysraFR242RLqRM-zqFCS1GKdS025HVXcHyC9xN2be0NPVJJ_n2t0rckvKsR0eCMD99hM9mAkLicHUVi6XO5eTBT9KGbKk0AjKLieAF9e3CxsQgD_0TXjxBeL8iwWmiAE5mAvO9uCO0SIGDWwqEHqSBPMtLZGXpagLK2MZcR39", width: 4128, height: 2322, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106363144741651021836\">Angel Lam</a>"] },
            { photoReference: "AWCwydh9__pLXziy-OxQVXzGA-NbyoScMPWv_V1uorOF3lvt0NTAd1RxICHH530wDY_COHO5eRW46zNLhE2ZrL3sTUbbDukQOR5e2GwUnZFw-wwB8rhXQAdahb_mDjfRC1fwlEiTn_0O11EKJnxqpwwvCylKI-slRp5fQSyOBkK4eYFuLAu_adQhuU5uhIIDzpWglniVyMIyUI-8e4wOjPU3x6d23lFVdVU1E7U_seOS7J_vXeDRCMyqigcBOE0aubveVrWLRCUtVv7cn-p6pbTMm76EjwatbDqhOOEbggvkQhX6YzdvdKUeXYlcKmxkX1FXRIUVl3BnW1eqN29QxMCJHOo6DtjI-2etp2dskPjayJdUt5me8gw6J4hoBjG4-dqwexMVjFzo4eMKnLxZ86FGS94hfepahk4k4C4InW4Hl-34xwUQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109216828353744814350\">Teddy</a>"] }
        ],
        summary: "패션부터 식당가까지 모든 것을 갖춘 대규모 복합 쇼핑몰로 가족 여행객에게 추천합니다.",
        updatedAt: "2026-07-13",
        highlights: ["다양한 글로벌 패션 브랜드", "대형 푸드코트와 다양한 식당가", "아이들과 함께하기 좋은 넓은 공간"],
        tips: ["쇼핑과 식사를 한 번에 해결할 수 있어 편리합니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=14640780388564529515", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%98%A8%EB%AA%B0+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%EB%9D%BC%EC%9D%B4%EC%B9%B4%EB%AC%B4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "오키나와 아시비나 아울렛몰": {
        photos: ["/images/okinawa/info/shopping/ashibinaa-okinawa-outlet-mall.jpg"],
        placeId: "ChIJ98yehgto5TQRJj4hYbNQH9U",
        placePhotos: [
            { photoReference: "AWCwydhBHHLlQm0OllRQnJ3JfiLWS5WRDAx9zY7OPHg9htO4DM36wExezV_rr3fKsBH6UxAkKFDWA5wztsDVhNcTjRIObQGr4Gy1fpLWgkNUKczK6Os2lFWTDl5Vu843d0rjn-NTfCbxbDG43WkU6QdobqP2lmQvzLB4eBSKNahVM00C3B7C2-HpX8DiP5a9QHY9tnRlhDVFpWdE0zVxSXCus1IMP78c1bcie0R-gr7_U4zw64onP71vX1QQGECByKHqjvqMToHaLxjrdBPZeKISldAmviCW7MJ2gTibfdQ1OMbm5DVkuiLz-35wmOgJp-KQz5Pr_lYG0b12AqmJuAybOyj7eO2sSPSQL4zSUsOC6z_mUoHCe09pBZejb1Ijhp_0bj_k10NubPPi9Ns1yWi3agv3zP7ydeSDrmheRrKJsKYa9d9tfvgt33cghfddjg", width: 3714, height: 2475, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104201061981238178302\">沖縄アウトレットモール あしびなー</a>"] },
            { photoReference: "AWCwydjwow7Ke6L-mkUyE1s6k6v68ZhAscTSwXyJvrsHHYQehTor6_kxGG8Bo-YsupER2tzN8msVeP--bQuXP2ZwrfRwtw8jYDWlp9nJzQGomSZvsuRplBUGROH-pWg9RrMHXFCFZsJicrc2WQaDrYLgxbliAabpqmgv3V59qlsWWhuwWcb7C729QhBAY1GsXJgdRADoH0fq9GZNw3WgoxKN-2ae5KLHDWi9HvICmxzzBXVcCXhUVwYy7qhuC1aRFyUAZRn6LmxsaAtwr6GbkYTQm9bQVbrYXjn_uBZihrtyFJng9FTjuEmZ6UJ_7t5DPHXzUtz1Y_BY2Hddy6lZ4ghBrdklRGD83nBJjhDMuDQzeZX8WnUtd0eViqUxHuAL8705wK901Ewh4-Dt0Eg1r3rlMm4r0Okv2lQBZCQSlbC4hHQohw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112660119187862744953\">Peggy Hsieh</a>"] },
            { photoReference: "AWCwydgB9XBmm9lJglZOgAs3kb0E2VrKWncVJpXULnLyAAOREfA3-Wey_SLTOmB8ETs8MWI0sa4xZeHug-bjXpVi8pDlXsQjdSSi2vsfUUQuV4R6GfAvP2rpNwkUHLcJR2Soas9C-QYD2svOU_34ifRXFJdK-O4-z4yJl6zprGGEwV2Z8WJfpLiTrqUbtECXwLl0JS-z9iNcdbzeP3g7jts8hrUByRct-G9W49BejFKRhHXWRhZtM7VDJMmHzeT0GGnsXMQWYi6RtUldiUOrH1dsOJ2qspm5lpKOE1ZMop0MLL_iuF4JlZS92QYAAlfeOPbeBSAPgopcN1ip9I4C80_r8nXiH_pri682ePWHWWnYqsyhUhrFg_RKTVHo8oXtG8gzqr1zPbDkkTFtIhplmHrfmaBlNbp4XpAq5u3trm1rMtVjRlvQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113464766841808150152\">YoungEun Kim</a>"] },
            { photoReference: "AWCwydhhY81unCSlvGw-AyNkaZXQH6scVRq5dyE1zX9epP-Qr2X9Uhh9AzuxXFwT68lsa7w5QGYfe3TvTiVK6cigwveklIelLYIByY4VnC-rCvldlkhsHIdui5UjsH_tOLIIucXt5L5W1S4ZsXJUPn-ZCEK9HyuajscqQ-RbbtB3c3sJcLarYVrQMJhkqlZxAZt1rc_g21u5ee4IT3tHBTeaiax1-h7STp7scvm8i_wZixe1fdM1oXBF0AHHTsrlHdUIESEhjsFKFKKuiwuZKq-ND1s5bV2wIFVfFkssbouZQkrBvmoutYIh-7vOibXJ0ptKkC3NrZuh8qeoCNMffS-wLMD4KX87KA991ECvkoInbbqFPG-yIRxmJirxgjdIJmRciR4Z0vRD0GqQOUspK46C03UbuZTvpOMrkWSYKjpYrkSWpVw5", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112290443809771485033\">派大毛</a>"] },
            { photoReference: "AWCwydiUwwJIhNzrEaaDd6h8WBYGfOoxdXXQG7qK4rk_hjp9OGpOcvk-Nvf6CHN9AppH9ZhX86sAgtfmakTbThPV1PWXX62gf0Zf45s8MZJQjKjk2KCpq9Ht90ES3t9-aRpDsM-o8KFKMff41zJO-kkQ9xHX_fWfarQFWky30Cg2l_9Y8p_63kzI7Q64teIE-8IT2o4U4dXnEd_sd24gJ7pQWnDuyV5yD4Go1IJCnBsC1HF5qrJObanq-FewijrWTMNiLaURKHcsXmF1A-6yCVMvhsotlsWhLzxnO4R9ShB_FV2h06hh4MUv4fbmOzl-STd0KWBsDQpS9QdtrqPNXcZG5poPYFUmT-JDZMsA3ezVL7vzvr624lCvU4R6HkQlkNcolFOG5GR3j58KGklpTMvHjEaxzQxQQllraIdmZm3y12z8hlM", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106155176713472784326\">ann Chen</a>"] }
        ],
        summary: "오키나와 아웃렛몰 아시비나 기준으로 확인한 오키나와 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["브랜드 아울렛, 공항 근처 쇼핑", "평점 4", "오키나와 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.ashibinaa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=15357081985715617318", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%EC%95%84%EC%8B%9C%EB%B9%84%EB%82%98+%EC%95%84%EC%9A%B8%EB%A0%9B%EB%AA%B0+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
    "우미카지 테라스": {
        photos: ["/images/okinawa/info/shopping/umikaji-terrace-okinawa.jpg"],
        placeId: "ChIJTXE7iR5o5TQRuIMt_jUINqU",
        placePhotos: [
            { photoReference: "AWCwydhzVTUF3YaessJ02lFIKWy0SzIwtc9xsPPos55Yv0meShG6r0YayV_dDiU2Svj5XnN9Vc9jC-s0BkWrLog0ns81IkQXoyuCjLCStKYskuzgzUx6ZHUr1DuAx0WnTjXiGpLtHg6rwx8RRXkPf4u2aHdLRMshLHbcJ_9d2KM9JKiR3nA_TkGuYwPuGGCHzvkpyv89o5H2We87aECTIMyIGAs4IQGD5n2AHtmsI-MAwnyoyOO4SuDW9kAQD6-bTcSALWt7iK5yyhMUGlqT5fB0mtxE0Cwk2_n8JhRfBuC5pHFK68Cj82dd_djaHxTvY8KqMg-47-gtzRQl9CwwTgIko4sQXhlZi1MZIW3zyec81JjODKLlKUK-8mr2_dc5_cxg93KT9V1LNU0XVEM9h2XUdl3WIpfwjQQm3W6H6t-bZi7_4Lk8", width: 1920, height: 1280, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106543311176132361193\">瀬長島 ウミカジテラス</a>"] },
            { photoReference: "AWCwydiUnAk6QD3vmsjksaITfCWbEpFNre7bbtAwEO8Zmj63CzjJyOjw8IQYREWjMTgHiENr6r00A-HSlokfJPhkQ7bBJoOmmHQdyiAAkp9yVvEqQkaOQUVPXdX6pEfIz-BjO_C4JOJkUhpCGVZTeiDAhyDgUJ251fzLqsZpGWEj2u745kPpyVK54WXxrzyEtCtW0B6lWCjpBugSf4yXyI80z08qwPcSrqItCW0RMpvTIUUrVCc3HIygoKRDlb8vmw1BgyyEwJtkpmHMJCaTZR4pFl2i2WhTBg9OmEymMZyGsgoElyw9SLn0LOHa2FCjqL4ko5E-sho7pWS0B5ReHT1r5jLQLyJiDbUiF835ZS-PhFpPu-JzTuIRuijmKyMwZVRC4wQlmMZBK69lLcxBonrizIM3iwyLf4cIuqOYMiWW3tQKgJzc", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116762275463371969375\">安部俊也</a>"] },
            { photoReference: "AWCwydhwjniBDEyISVkMuSwIs-WiDpafyMX1Xdz3HyUltQpgmew0VisBN0wthxgHDg0vpTGnZRTdRoKF8K7P3IvENijDmsl48evPpBC9jKjFbbToXIyaahx0LMjzDujGplLpr0IauB0CuE6_YGOp_FZ17NAVXDF0ZCVAM0qJ-zhN1l4MM3Fal7g_OhWExyPRPGJdpLRhxQcHeAtnd-eZbpN9K6RDtMTKw65CtTgYmVCbUimn-1fnKlg-sayoO7lUjLnhKDzrEkRfk4aEKPMEpGynyj4PfsDwiscuf4KCLh3aSFi37-DUX1PB5XWoQzeTrDZyg8TOKegHYOjlcRWjVWnb7I35GhPaxXNLr_WL114ayDcbJ96Fdq1PykCQGGQLBcprmKmZoXUTeExksNqi3wKqhf9NBIZSNW5AlpveAdxn67Rdfw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108328977796888903373\">sittinghere YO</a>"] },
            { photoReference: "AWCwydivz60SAuy1860DB5GiYU7FGyGg3DJwm4DBBLpX7rQSDXJ2FS6iSS8qN3a-9UU92kDwpBwGUjUqYy0xss1-YIxMueydhCCx00dJ8ht0cE116NoWqVPpPIJTsZcU4p2lhn4Ygv7e93bYNXOhaZUzByOlIYik3PhOZ7iduQzZgPBBASluYiasODih-nfsgB55ZCgCOlZ5lrGlRLVJX2afkoaqacKaKXQ3ZJJ18nASTnrvAz0zOGb8-hA7-9_5nUCNnWY52SERZ-20-QQXq90Lsp60pof4jzBzqSanYf6HIKwNcxNuplD5a4rMrPf_jY-God-EjsGoexa09mP10YUsC3OqvQ0D3TgToET1Rl7agn8RtZLnvHphGDYaPMQ5LWFx9JrynxQMsYkENDsQgschGzNIdfZTHgwIXzCo5l7kEfw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116106050021129285572\">しおり</a>"] },
            { photoReference: "AWCwydjtvE4h-w7ou3iDDC_WUneDN5ejK-KYwp77kBp_vEAmQF1yZC48NbDQbulTTqUX_2Pv9MXTrwWTzJ3GaaP_HAvJIvLQB2qg2xotL_DOwKnLf1Y7ESB2VtTdNI3yYZJSjqzexxqsnfSTSUz6Zjpvi22DQFYmdg7YidCjdrSNOlKvHWkqtddEL-pA0_t6s6H5Z6XorGoTe1pAQnGI167b27kRCYhz8bd84ZMc_hd1Zih6Kg1WIJf0r21gJTKiDbyaaj2aisXBgHwdidw6b6ES_fV9y3h5TDDyGqZxVj4HEFCwJzw1cLTj4eaDJAZUb205XJXqfvqPJSPIPzGohxgsKt44jHaI1YCrhxzJLYuzfNVZe27e0xKWSxzUSOTxnS3_5r3AjUXjMJmJ_CTcV09ihQjzN1vTDcoIpjMgu2o3DLtQoBOliouRxKzEBSj4u6S1", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101538919493458403127\">Angel</a>"] }
        ],
        summary: "세나가섬 우미카지테라스 기준으로 확인한 오키나와 추천 장소입니다.",
        updatedAt: "2026-07-13",
        highlights: ["카페, 기념품, 바다 전망", "평점 4.3", "오키나와 여행 동선에 넣기 좋음"],
        tips: ["방문 전 운영시간과 휴무를 확인하세요.", "성수기·피크타임에는 대기 가능성이 있습니다."],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:00; 화요일: 오전 10:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.umikajiterrace.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11904711692991169464", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9A%B0%EB%AF%B8%EC%B9%B4%EC%A7%80+%ED%85%8C%EB%9D%BC%EC%8A%A4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 여행 후기 검색" }
        ]
    },
};

export default info;
