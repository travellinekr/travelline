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
    "AEON STYLE Rycom": {
        photos: [],
        placeId: "ChIJz-l6_p1p5TQR0jy2DsR7QRA",
        placePhotos: [
            { photoReference: "AWCwydgb1oSihkXqSS-KVZMop49ODRy3gRs-Gcte7dzWEY1UgGfXaGaZE1OQ3Xz7ea_j_LfVYJF3dfaGOULjp0z8zssExWhgxLXePD1ixr3rxDHDhgOxQbAJeBkbVU5OYYXZugOthL8fA2PYkIzd-Zeskr8NEjc1jKESd9ZlQl49PgBTz2MMzVXkAtGG6UAR1jOnLSYH2bC82zSV_6s8n_tqCiuBTCV0vbeAlG4BFwEbqtvCnimpVyNYJcd11h2enD6M_IpRGzDZ5UFp3DwAyRyQ8ypVSlleg_KIzjWkSMgwWCaq19HsJKDDhUUMf7ajkIXrlOxHhfHIDquJdvkNzrVo8-aZRIvalcPf0TBzUhs4RfLPhBjST3Cfss7G-TpCwCl0YJi9Dl0plYDzPgGwJUl_29HUMPxs_kR2gN3NoBV5gdY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106650570813225322402\">Shu Wing Chan</a>"] },
            { photoReference: "AWCwydjZ0BBPfqLROtEUeyet9_HS1Y6aOacbA6jm5IRLceud2Sxur0aiMHk4Izsiwp9XzmFPli8fXI9db6KKlbUb4nzGwFuy8IsvmjanCdA7ekh69HptdjrrqpPwzcRbI7xQ7qKGj4akJah3ITFVnll9WWtZXuWDjb5McA4yyeKApp88BdQb99r9atxec5vQZBEb_WG7ClQ9SncnZZntwOi1MhxMjFL7el65V-Ge5hxvPoiUcPCtYlQOcySwEs_Qw9DieXHUDTn6wfqalNq9B65ip87p7L1IyiqP-KlCNrJ7RnJgJ-1-4f5GggqMXBx_ovsrl4s19HhfnDhbj_PUb-0v_NtaBqCvpHaDXAKHI9jPRJ0PjPpKPAFaUl3M1tPUl5A6caDb2XK6ByfA1DdL7s7raMJecYAFKIBPEkAy55xFMgPmGB068_MwEDywIW3iNIO2", width: 1080, height: 1440, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116014620797470105185\">Lee Zenki</a>"] },
            { photoReference: "AWCwydgnt-hNX0yh8Xxxm8jMLlP10NYI0saHUFstG2cnj_8ocOatlOGig4mKbHW33KKTQ8YynrCb822JCa5clvk4r8PiGfNhjax1OD_YOxcSlbY10q3pXmHKETrAumQV1Aoy_IasBg81yGqTcOgXctpPJPAGZRL3K-cFBfCIQM5m2vyrUWvAcPyp50PTW_OhfmKvl0ZvjAUxN79DCQnf8olxsXDnEulo9kjj04qgkRnd8hiN-EYMKBbeNtNqMDkHjjf-H6W0jcMNFDWy2yY9ahPSlZ0aID0m7AMm0KQXeU33MYJWebjgOrAviWcDd53hvWvutR7homP9HOzN8ClSxVq1ACQtuhRTyYdOZKlCOEcdFc-HUxJct3TOgtjwUcGX4Vkv51rUy8kvSpM4NzLVJ3FbZuIt2eH1JgGYWCIn_VGrKJVlJpI", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101005488699784707524\">江尚儒</a>"] },
            { photoReference: "AWCwydjW_IrGAGjDTQvinXndCwsuqSGD8YqhRGMVYQeZw18hddEtb8PTDVyuD45KIwny-VieuljRJHDyqg9AvLgfZDhfb_Jf4M4zMxlL3Fq4uxBcwEXnneD_cUgmsrjB8_o65r97PWHAHXZeXGqtGbyveFnw307IYMqNUmE5e3k5Tf2ZksOlYq1sGY7ROvGTZKI8XjIVuUaqqsMtrvqYzEdVuHLpitWEi4HouUQBkmUcnsp1K2w6D_xK9xDpWaIpdRV9GCcj1ogWOyTBW7MgxT-tjpSfNEKGg-zZe-uKW-y_sxFg_Z1J-8VT3Z4xr192z9ehOgONN6VkAm6FT3qL6cHegN-1pf4mUVbLcs8_X_sJHfUTI5k415kkLPtBPRv3ENcZ46QUCJLk32Bu4j1-tLMsO4JCzbjT5B1pcBpOyzNr6Es", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101005488699784707524\">江尚儒</a>"] },
            { photoReference: "AWCwydhTc48ZFKD0006kgY1Tor5OUuumLIKGdKMxfgKdz1xHiJbiYjT2k-L5lrdY8zjVILj5XsBl2bZicDoOEcpyAS-MHRG4YruzA3yJGR7KxPZYM5rQVp4iSglqKuDpZ-IpRHX15RhKqM-CGVingAWtPSXJGW6FRhqj2m3ZJrwDQ0oZD-CL_rN5lg2UbR3pif5RAXGnAWPJYXhQYZP-0-Nkkq2YmRHzTcrvgg5FrQXB9DoGfS4qPfD12jukTBmoP5GMvbj6p6i9gN-Jx0tC_Z4UDsaWQZ4YoodLGv_RtAO0dbiMZwCN0gW7xqF8jUcSr3WSIrMHVHl9t_e3wArKAMv-XOQrYehJNzGpzsVLDy_BMGDZ46jrLDa9joQdk9SaxDhxt2W8z018Q3NfNgUP-df6hBQVE0ebdopHkLRWcNPn0N8xyg", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116184184741251475782\">Mr Ty</a>"] }
        ],
        summary: "다양한 매장을 갖춘 대규모 쇼핑 공간입니다.",
        updatedAt: "2026-08-12",
        highlights: ["다양한 매장 구성", "대규모 쇼핑 환경"],
        tips: ["하루 만에 둘러보기 어려울 수 있으니 여유 있게 방문하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.aeon-ryukyu.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1171353460083670226", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=AEON+STYLE+Rycom+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "San-A Chatan Hamagawa": {
        photos: [],
        placeId: "ChIJTXyIngkT5TQRu2P5ro_xYRM",
        placePhotos: [
            { photoReference: "AWCwydgy6-Ac3kzzLkZWd2_zEA76-ZXt2ljk3luypi2A1XhjibDwzjY4J8HOn6rRxswSFBGbNVPU-4bs6KCc6qe_Buutgbrhw5GiQYw4l6UyzNoxu6RwNzFX-9iCdKYbPDLwppWpA8JdZDQHHEktTpARPVu1IkLWdMr5Dw7tTToRns_D4kgBMcmaGwvA_ToNM79MCZz3DotkQex1wJ39aLdELslS2zoWDUNlf6VYgEkelZcMhJErxhorb5RcR5mIt-1KjkyZW8HnETch0WPK6VBiIx9hs3MfOlrv8z_obIEfoi_8T7Q8f_2T1Rcg0FOVi5UQQOCLVbwbipWWwG4zZibIgUhvGsH-Skf762yypAU0AhBCSYYAi_UuWtrAm-_iGUDAD_ewgnYk07vXysUWOlu5x3HsM1kwvFxiZNZ6nroXJRUCUdcCg7rNeZin6FF7kqAG", width: 1187, height: 668, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114540498555174460069\">サンエー 北谷はまがわ店</a>"] },
            { photoReference: "AWCwydia5ndtxvI1qiqIaSAHuVw7k2r41TdaJM3HrZ0uiZYAwju8x4HY2hSc6r4o9ivfXOtcCjzHi5sYsIZYnlh8ntaZpCE9dzvNLDf9OZxG8axC2P1oPXmHjfA3nhF5cPJNDdSAThOJkadZ2LS4CmMTNFxg2iGp3bRY_U2UFVa1jyOF1sZdBZyLxHxT5liIgTYbII497wlvsa9zdxdZ_zX_tIRgXHvd30RB50nbpOXcqRXg1cqObTfxDT1ezMs2GDvoEx0zbm0gb1fXoW1KUC_oSWP07DpUJq24jHPo6Zx-ikzcj7dBF5GzdjGBWA7xYo141xhgNX6YJE9r6hdBZh-KNhVxSCDA8CR1CHEb-7vQOl5eolAfMjxx34tiUE-VrKE4CU8CYDPTDBFuiqfvuUoNILxnlYG0lAXhGhP5seYXj5-QJg", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117882308013206433871\">Woods Ryu</a>"] },
            { photoReference: "AWCwydjF4kXJ5AQv_WOxMquuM33jb_S7fumW9jtQTGBt1xSyT1VcBdcF0UeNkhttkmd6UoKEvb4CAVjh69cokHWU-DT0a5rOLZwQXmQn4zs9ch1Q60-2LArXieh6Kigucu7fjqMQwatfhBQN7u8zIp0KRHXqTtWg6QmWWcZJT_bl6EbCGEgPSbPyBNZKn2lQdplXYsSYghp7ztmx_TzwW6XbzlpSPvj0X17FooHF4YII41Um_wN12zhZB-iE6vuAfQNg3DNnVFIhaL_vzs_jQ4-5rb6REuwDnhTUQ6T3tzC_JHaQx0bxXj9T96W4ujjQu8Ip18_pgAq4iwlDOzQhLc7W3rR69yIENpufswdsWbKTYhP0RWuEHmUPjiRju0hkOWZBbGdxljLe1ex_1MTb0Ef8XKwQQIl7RjlYebQyTHs5cgM", width: 2160, height: 3840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114732908433270084075\">Hideki Tazuke</a>"] },
            { photoReference: "AWCwydgA06sNc7lSjrglIxr82JLzUJnklc6XAAeUoKzK-QsccSwNZVMA_9C_PDUqfht0TS0x0gsjjagSMWbx87HJeIO7VhYTxyNguT_n2w8qvPTiGc_OEKsUz4FA4XCUNIP2nrICA69PCqv05T3uS-0BChoNuWQKErANNM4DRohsVFtkXSnXCFqOsV7oGwdnQHA_TbPhnEQOM2TiDq0twk-Bnoxp8HPJaM9CrQ2jVbLDMNVEH1xZs0iP6klQFrI1Q3JRTqVGVlssWPRQh7LQmDxJpMbFTwL0UL4_VMJfFvMoAGNCsizWWR20Tws60TDUPKFJyZZx5BJ-jjcF3Sxw_0dJJoYzC4U1iI3YfRJaP4pdDKglYeTv67zJnH-tb_H-6_p7xIolZpCnRvHnuFDSbIwir_05WbpM9joyrRgBMvo3Bee2tbRLR72-SqV_itSUh5AL", width: 1848, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105828197049617320734\">rickey</a>"] },
            { photoReference: "AWCwydhpPuNhPjMYRy6N_qSqN5h8vuHqGrhyH03D6tJiaGKMfc_9qHhbJKyY7DARp4lsJb5Z4AxylbNqr5x5cloFbz1R4IaJCszqXPfXWuzyvl5WELmU0wezqwLr9FKZVnDQakdn1hf2FA9BfoxDz6ENIme244SWgvb0PMqi_TBcHmC6xpnrGYUg1gU8jdM-MFrW8zb3SIV3BWlwv9eEqK59Hl6Zj-2oIpzmvwLoBImJCKrQF74TdLR298gdAoL256u7kCDWcfdv4w6CEMiQhgLhiOuzmiAlyQr40cb7DjMr8q6oGMdMWnLptVXH8MGHD0krTeqUysyr-642B5Rd1pFBqDjKS4jmg_OnpO0v_D-WJaH8l0nMYND7rSJZmmdOWJVxK-nVUGAzlOipvmBZYeieg7Fst6yoyPXiGcdf35pbczykp9p8", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100133697610968656983\">John Bennett</a>"] }
        ],
        summary: "일상생활에 필요한 물건을 구매하기 좋으며 전자제품 매장과 식당도 함께 위치해 있습니다.",
        updatedAt: "2026-08-12",
        highlights: ["다양한 상품 구색", "저렴한 가격", "넓은 주차장", "전자제품 매장 및 식당 보유"],
        tips: ["넓은 주차장 덕분에 주차하기 편리합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.san-a.co.jp/store/503/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1396662958879761339", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=San-A+Chatan+Hamagawa+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "맥스벨류 와카사": {
        photos: [],
        placeId: "ChIJN6As5IRp5TQRSaKIWYxdHfA",
        placePhotos: [
            { photoReference: "AWCwydiAl9Xjwi2WBLJG7F3awvMvgqkgVzH4B_P9rllRK_0_BVG45ZW00JUeD_JoVMC3YsArWnwS9BmXoRF7zN7X6Ur5VJSt9P_Yg_y7xyi0GNTsO8PPYbl1GxrnCNQTmOycasnlMZhg9rIn7s5YqmqwEoHXrsTib49dui6SzESI00ZnhAapBSBPW10KcTHAioPSyO2aPwuRxjO_kA_ULeHhcgMD73-Z3GCIn2asklHkdmMOpBx19Zf9YANWYhXvwxNkSGoce4kzFL1WJNjfiQaNk_7AhHVAmOlzty39syUls6Qh7tdt805hyl7BUAh2AB9rlB9qHY7lKBcIgzur3QWRN6PzxLcjBWEOL79_MiaA32uY9dbG4ERIH14h-hnsx_vgU6q3B_aX1C_L-JEvb6YrqAouApCrCEWOF7wc_R4NHiU", width: 1000, height: 562, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101130553565946333198\">マックスバリュ若狭店</a>"] },
            { photoReference: "AWCwydg1WqCcXbSvC4E5tp7NAOafAOQE3sWbFNfuBa1UMLC6_zVFeHm1jddPCHhjJNR2v7OL7NGTQjvxYCYeDR0Xc6qHmPqozewUJrnGmQBDz9fiYlQ3ZzqYuCEcIjDm1fxixE5rhDZHmgFYsOJCsEAQIhJTvrgalVuEMUm2lsYqc9joKxWTeSG2xzEJgkaxo8IBnQcyOBNj8iv5msNA-QPI_kKIT8oIIxiTdtRga4-1X-b9oFPZPCdQ_e3DZ8Zqzro_CaDFYHeK40_wWK11bXHFB_tkwYbD_zWNN2oC_CG8PZGVJmgnorr9LzgqnKDFDS-YS2kwCvQq0wZC1gMX65rOvbchtNIg1472bptvPQyX2qm0LilPDQLCMP319R_GDWmB254wzFYhPkWnkP9BuharmCX_XYzKm33rjVIJF_mk6OsVmnGnSNNYdpStH69SjJUi", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107989996097567270048\">くろいひと</a>"] },
            { photoReference: "AWCwydhCDm1OQO8Jl9Yow-TO8979tixAOKsrlKtJa-kvi-w3bptmPZXCcYhAHQsvAxbCAlww9EIkGCZFiq4ZdDD5Mf_PV21h-dQ-IXHxO66o-vuJwEiAuut11fn-fRAptyOFidDbwxrC3b3IrcE3VxOKVnnpQe8rbLSafkFBlbnoYbdkrujJDh-G7hrZwo2WeUA07dYBLOr0z34XIqlSW0_cDgr80sN-UcVPaZifC4Sxop4ykGagpY2c067vucqFAX89u-1MPoJDddtwsyJGUTh9W8ZBnDyeO_IrETvTawzMVyG4vvLT_nll8TTJVpH9OMkDCmBrteiuwcGhA8246ET1CLkZRYiYEACmJCJ19fnnIRcqMYXls6fZq3tSALN98MpNw_YCXMi5FACrI45pORsItGx2N5HIq5GKxQ1_RT59CVpnTjLT", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117527050057899702666\">Yamada Takashi</a>"] },
            { photoReference: "AWCwydg-Czf-36iO6AoYm-D1MDAdEnyl2-EuMZZKEZziW5nPXQseowxjU-YWBNSZUi97VP6MN2tKJnh29w8lfgrpN20nk8-UtcUQjrNCh0GOzHg69V5tJFBM4ibx7Uv0q585ZP620jxpoD1mrT6XhBvPHuniToHfyHyNjc3OhNwTndqW7_kMAdglHNxNarnOJRtc2oD5AeZYId6mLtcRxEG7waoWgEN7j7yIZULgZWbQaTCO6YVw-YOUIayEZ_VOAw9qqxiZUma7c2WiS3gDNx4l7iIj9dt512kcSMCnHV-cfnfz5UjWEqXAl-GmiK6B1IQqAmHaf_Keuchy9R0Y5iuG6LuYEQAAeHirQJ7moORkv6wYtRfyLGj4MLIg9GzjVSHVvx-rUHjH--axdC4tWnYMtvBRMwTEt3RwSVfbmfQcHNQIcg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105141336320481788320\">赤嶺剛</a>"] },
            { photoReference: "AWCwydhMrxr4FUR2cpFunrlBVEjlCaxBrqF1rebzBg1cDI0-i_wIrAbfcMXCO6aHbcK8YgTvJmmREpsFSFVU3fg4zh_XWjaowFkXJAWpKCCPj_Ju2Ifw8B3lIQxVmmNBWuSL_gXSyjl7N2zpuDv_dAYYMCBi37jh4c9bVdKv2ha08jUt9sBd44kbe77Jvn21B4FZrTfwjv2qy2bJrnkSOTOVenh5X29NI8abVClCadGJE8KyuPXXHrX0g2QwcY0TglWWAPkbE2jAaPkH6aI-y4BTrp-J_h4ZbEYB7Y43TYKiF5YpuBXG_-iwlpj7cvK4pmQXXe_v6_ib4Lo9xgqZNxZvI1PACQEKjjGrPORXa16UAp7QLILM7D4zT1dDjSzMlp1DSR28T0E7zg2qyLVSSL_o46pEKDptAx8fTWXH2iFdIPIQFWG_", width: 4800, height: 2700, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104304268888945929510\">Lore</a>"] }
        ],
        summary: "오키나와의 맛과 기념품을 한곳에서 만날 수 있는 현지 쇼핑 명소입니다.",
        updatedAt: "2026-08-12",
        highlights: ["오키나와 한정 기념품 및 레토르트 식품", "신선한 제철 과일과 생선회", "포크 계란 주먹밥 등 다양한 도시락", "24시간 영업으로 언제든 이용 가능"],
        tips: ["여행 중 기념품 쇼핑과 드라이브 코스로 추천합니다", "여름철 비치 레저를 위한 불꽃놀이 세트 구매가 가능합니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.aeon-ryukyu.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=17302088200806244937", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%A5%EC%8A%A4%EB%B2%A8%EB%A5%98+%EC%99%80%EC%B9%B4%EC%82%AC+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "San-A V 21 Jougaku-shokuhinkan": {
        photos: [],
        placeId: "ChIJtbeQwHRp5TQRktM9mgcVAxk",
        placePhotos: [
            { photoReference: "AWCwydg6Ety-4nLQuKY1wLls2dGT7RIPij35mQYGLX9U86-fAmBsDtul89e3IVXbovRWHuz_jcjPB-FNQw9BJRLXAx-StlMRPEWr8cXl7fSocgTty4Vw3Wi49exTa_39YsEdlpJQ4Yfg7mUcs7RgHtGA6SxhgriD3pxzZGE5Ol_obO-ncIelL648W205OMCCSeulLajnYpdw5H7MiscW5wIzIdvSNyJ-iDBvddB-RMtciqfWKLt-oDt7Z4mOJMsicpmCkaWD-2cmit7Bl96qMUK8HVnNdYPf1MISBMvhBc0sk9gEz7oiG-mR7buEVe98xSuLGq2lAeQPaGqqxxV-nsbkUo-Gh0dsy0cHSuU5dQQaRVgt80XNzD3RfC1_MWY8axnaV39UlzOqkd3dYE9zE1gwxBnF54Ub7o5W_UEIl_TZHEuxsQ", width: 800, height: 600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103059666866989315669\">きとらたかし</a>"] },
            { photoReference: "AWCwydiP4XnUlJoNRnaEUwF4wINBML-KDRxbiLt1wMY83VWF0khZXMMaJYiR5_AWdxbHVGoBAi1yqFGHBDRrq2DNpdEjDIHwcZvmDnPeyJe0i4htFtnzvQo9jyqwb4Y510LiSUjaTbFSXeGQczsXnIwDZZfPEn4CxHr3BLaZkB7K87fyF9CRdyBNqxrodO-p8qQ-TVdOx70wWn_t-pxAN9f-kXJFhB0qQXqrWV8BXkN_W7yBvGuyYeuDl7WNljsbtE5_38OBmnsd048KczZVPvfyLPG5GovpsvlKYKBst7Vz7XAz5jiQa_8GqpCpnbNYip3BvoIEiu0WvoaFat4d3l5_Vvvcq12muDmXpW_5egYhNKQajFb_wKMG3DN0Y7UT6dcOA1DNUZlozX50BtjFzQR9cUaZ71xRfyX0x0V9SERIdis", width: 3844, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104441928982649082358\">柴田京一朗</a>"] },
            { photoReference: "AWCwydhLefmf27amw3i9zZdXbiYokaHkHfq_xUymj_ahCLoFgiw9fmeqR02l7lYTHZ1tt7f8TfWQjkYstb2P3anlo5cNz5c9JcNFGAHeugiP2FjiTC3TwnAaCwFZ7oYUjEstDtPQ8L9tuHI7hjwT0gKARWqEb_1opw7d1RpU3RiqBdE1ZA6uOqi1tpie-I3sNgoDv38awAYboW-vfeWt-oiKDZyRTHBBeKBiGO3blDmECSNh3YM08QwMqllc--9ZSGwS2R0BYDypLx8ul49tMjC13v1laUGI4XcGWvuDGRP0Jh8ObxdBBhOFZB6nfVd7j6JainAlJhqKSUwS85rn5GXIlq36nxpzqmn-YOzJZeNro1GO-K44RZb4VyYKpz2kLdBz53xl0yPxm0OI2yie9E5I64Gc9_5-mL6UZJeOXYisFbnmQA", width: 676, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116809030576777382564\">サンエー Ｖ２１じょうがく食品館</a>"] },
            { photoReference: "AWCwydg6lUyJOJ37rYAWdGkhLSMk3kJoC_bYY89LS_85YWMwIfOJHW26myy8jZr2X9HS4M9aGwG6DZpWGRQPYcqwLmC8dUt_fO1LkhbqilfbTKXcMYMgTFYQuWSaZBAtjG3tXNFco0xJTlNy10EFnMwnJ3-7DXATZeYm_IBtdSbCnWUqCcWx_eIsIE-CDYkpStKQc3GTInamqR_34L5dJ1RH6s2MGma6yPVRwfbHAoH7980vUxH04_m8ShyYgHUxcp885KMa4vOq3YryFqvMPu2D6_0M3baUQnbn72UAUDd7rUM-wNxPWVzJcQ6Ig64hQrUzkqNunLK1vVQpkTqkYGk6sD64WJVE0Nss8l4p_zrss_xj9i5P5ckLvThTgraTcWaEpGt1OBpd5qQTAhbf7BRo6WxxKjfCRbfROYeLMp21lE5rG4IWv1_FoqptSRo0KES9", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116706037594406977367\">H Simoji</a>"] },
            { photoReference: "AWCwydipgiLPdJYOCYqKKZ0RcVf5qBUUPwvyqnFlyhpoyaA3GE5VkuxU63hgZWGYRK0rTFsINmvr7JazHxjz2xR4e8hxlmnlQDjpWmVHuHZdNqJdCXs1KlotKKgkVTvgf5CbqH4ESLl2Dymh0yStoEyj8YpGfm04EyaLvf4jowfhG6ohiTgDGjIX5MiEZHFWUbZ7WHH6Qs4aenNDXt4J1NrgGt9_9-pSMyUGpMp_pJErxBsk-GEJZibWibhvSGegHP-Y9K-YqT7u6iPqnd1gITaOumc99v1bnWXW2Usxc-7Rrzgt9lXhvVYU7dAZXLyVX_XYRS61ZuQzIzqSLC_ae0ZxW60aIADv1QeD4BVjXVE1ZQACg0NE1bDWxBb93W0sIWVoxIdvQVi6ZtqLNAqZpxvKyiZu7nguww-B0-vPqwNYw54", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105141336320481788320\">赤嶺剛</a>"] }
        ],
        summary: "청결한 매장 상태와 친절한 서비스가 돋보이는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["청결한 매장 바닥", "친절한 직원 서비스"],
        tips: ["매일 오전 9시부터 오후 11시까지 운영하여 이용이 편리합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.san-a.co.jp/store/680/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1802307398275027858", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=San-A+V+21+Jougaku-shokuhinkan+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Union Sukara Kozabo": {
        photos: [],
        placeId: "ChIJdcR-dl0T5TQRYSbK-r76f6I",
        placePhotos: [
            { photoReference: "AWCwydgywGY7e0i91Ix277RwMHJr31QKiB8DOMo-eFDeYBugyQ-hyzbDNyE9D5QbDNPkvX2BuMvRdOA9-uowB_oay91hwpZA52AfFOze56kVsGmrXUM3-PytbQVF96IL1LUxC-dJVnHyuvBd379Ausr1pyHfnyAqqL1xrFRnDtYFa8ULuPUCX_j715iAZZyYxFeIlhjzmBTPisrGrM3ahzyCEIJ-8qwoq1UbN4wRLYmSO0ZvlEBQjlS0wleJh2bLqQvxLdryGSAgp2FBJy1xb3F9Ln2tgjWiftV3ZGxRbON3yJBTjg167Duaqn8a3pwAqiRwt2edBmbPdPlcxV5ldnQbaQlOiZRLJyruA8gq27fxi49xJ5pckHBrh1_EDOfuJ4wh1-B-znn9t7h9YCeZfuIDu4UTJwIsHg2rSmsS4KFNeFWm94w7IFVhhIdk5PEg14nC", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100640022216452200662\">Ra</a>"] },
            { photoReference: "AWCwydh08NPfdj5ar6OlxDEUP_Im_lcLXxh8w8tD6xDry4h6uDB4Vd3UbCObhUZffkSjsEM9ygAPaznlLNUFbItKsGV1qUF0NY1qNZK0A9gHQ2jSrYrzJXKkfAZVP4HhFzPQY39aPTjAnxdlEKhITCNJM1hXJapzoUwvmkDoNo94v7oiUAz75_WRFLQ-SCaPS1syB90N57_rLVCufV_YILXHQASREaR-YlgUMY1yZtoqzpAehITh5cb4NOkqf5SthpFRRObi2v2-RRKE_P7BvcQt2EnZ9IZlKt_gs5sWgw8XdK2i8w1e-hDxbN_lwcMShUBTRlJLZmoK-luYw1b7HZw3_UGRnrnrdAFEfHyEyFrAigqiVxvL9LZ0guDzZUsInvDXYqUwoFkJQ8DCJ7mEN7u-qmn5uhPYvG2nGPUK65TWEyCqtXvmDxz27JHpZmBrL0ZH", width: 4080, height: 3060, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103740067109222054892\">酒</a>"] },
            { photoReference: "AWCwydhYkRnZnyTRU69E3eg3BbClbEBlXNvbZj-864K7VikMq_IvxLaCRLfJz2kJ8ibnGgWQhQFKCBs7pkRzGeh2AEDZnC8ksQfYbfQ0uqnXepv7MlAYU5KNtdBu5jf0x7cBjm8WAiqKC418WkARjPMQwq8K33cQdRh_V_NDUfhP1-sr9vMQmkQB1u6zMyrgiGbFZWashfYgrhrZ-YOUWyJt7CtqhQ_A15XWTDkrgsQPm4fxwpoTSr5UdyT-aS9GHRxIn5iLV8NI3XEP2xg6j3qsIUdxBqmU3dIMe-sc4tsOJzh-GaxFJ6h3i3QxOen_Qnyre5hY9bvDWVex2sklSnM4i1RRoizRAYLBc1DHCXWWW3-t7FvTTBelLlhhFJVu5CWGYeq1qays3iRbiAw8jFb81_I4jD1BElrS1PszRCFWnIOH2Apx32AAwXWlpoxAKrT8", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107304692447157280628\">うちなーんちゅ</a>"] },
            { photoReference: "AWCwydiOWuaDFge0YiGPe4tZFmrM-R7CJjd6wi958U8iFTwdyB2Vf43s3hYP0BdpbuoJjuOkNZYo27xJkCQZ0tP-eLx3Feeyby3voEsXZ_yy7j5-YAXzjaW70J74WTUERYrlMG5I7wbep7wh2JfofkHZ6iWLoyc0KjMZ_xj2oK-Ycn--FHVBfU18SAw6h-wt_NR7ck6D1YSq1ifkqbt1lxkV2tOMXm3syiYU4p2GDjB8BdzsL2dGeuS3999T3rRInuhftXzdLaWpsiKVWSE7Dz_Roz05zrNVlLkd8M51MygLWEpb7_hz7spmXkqmDYr6aQdkm9cdzYeZkKcln14vQ5TE9xtkpDYVbJQuq0AmqzQ_Xd41SDNNUG9kssQQxfTYA3Elllg1RBz1FaR-XhHEoJizaiUyI79ZysgUwt0yOLNJ4RzZYU20zhb-9z2YPfBNiuiw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116428179578295022962\">moca rira</a>"] },
            { photoReference: "AWCwydjz2y6LaR01gXle9QBDgnWTGHH1DKkgvzYtn-fHGoJbI9HmlE_yo8wmdAUuG_MG_52WeT5CFPU2vmXriHAk2xFVRwByZGcAvw2ru_jTPpu_RQgNBqjzIEYMQU_SBVBUwdpKN3H_G_vdJMypQmJUBS5jolPuzfa4gfZweAVrvtEbdu84PI__R6fsSzkP-yAEHjfs0B3Xw13R574wzRE30d466bCLjUayGuq16vtF_kHERRBPLRQ2LHY41NjiBR5Kn5aUn70PTWGt1bxMyD7p4QGxef5zrmtpfQ7R3eNhpjOsG6_r7ZoS0NDLgWki6utdgi6P9ocqolmf9I3ir_KBGfa0hXafxhvWtCpYlfvwSmonJSozkvvpvCMQNEt4kJeiTl6ANX6qNFXFpehirzKS604ZSuTnap_Og48RYpMgAodYrMoEmSwB3YhFNWy2FZNH", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100640022216452200662\">Ra</a>"] }
        ],
        summary: "다양한 상품을 판매하며 편리한 시설을 갖춘 지역 슈퍼마켓입니다.",
        updatedAt: "2026-08-12",
        highlights: ["셀프 커피 메이커 이용 가능", "핫도그 소스 디스펜서 구비"],
        tips: ["영수증을 지참하면 분실물 확인이 가능할 수 있습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 11:00; 화요일: 오전 9:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sukara.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11709353254344861281", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Union+Sukara+Kozabo+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Town Plaza Kanehide Yogi Park Market": {
        photos: [],
        placeId: "ChIJkyR_am5p5TQRvCO7HPyppuA",
        placePhotos: [
            { photoReference: "AWCwydi3Ef4akUsMnCSPs6P5KTq2yWlsN6q7tcOfitT6F9NRc8zuRLSBWOc_HH_Ep7JTzLfFG9yukMFJ1_WrHKwZy0dyl3eU6AMRSmXiAfTtm8EFUeYHISuA7cbfybAR3NbX8o6lX-FBj83sI0BGZzbfuqZyh9Ah6-0nPsiohDO5uWryW6MU3g7qNQDmjfJC3GIJm7UZMT2g3OUrbGT5S-UszR9K7tOP-d0qJlMsjfbNr5Ji2KR2Z7mpUTJNdZvdxuut2Cja9SsplD2nMUZU0rkUAZBubN2ZBdzmZNLHp2WvGU5zn0uy3iay9m0okEO7MLvodldldZt4_TmBPhX6pM7Yx1yIajh8YZfEcGbeOQyIjnNfJJzMOpzTXlR3oLJrrzx0XZ43zu9IDtax3KoL2uFARG-SEHnMp2VJEE5CaOcZmDiiGw", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100166463809274441814\">ひらや</a>"] },
            { photoReference: "AWCwydjDmji7-YKJetwcxvftPVAU7REBHD_WIui5dqX7VSBxGIh9YEowKXd8GecQpi8iehJUhASMEssHAv_OpvDWFkeFIS_JLRg3V4KmJE-zion7RtEqSl_9deDrnmju39gdrBnCbVRtN7z5pAOlyheGzapRsObgNPBbd4TNYt2Qu8MriF5xmXEF4zHUcODJE75TeD3oXZjrYQfM3VyRU4olT1JXuF2zfBKW38tNjN5uGnd8xqgpEYX52leADLJv-TAqmlzZntoBXGtyz-Gujtpf-rFSYr95dvCkfXovbcFzA-n-4x5lqlP1apnr1IEC-UKrFBiTeN2-iyzdiHP4C7I13sAskaZFVsQjNiexm9ty-a8Xsky2PQ5H9dQgGjJROdkPvzImTAbvPDoRCO1dpl77LKbV4NF51J3lpVUz-VudHdiPI2D5", width: 1440, height: 2560, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103919615352549946289\">曹GG</a>"] },
            { photoReference: "AWCwydhQ-Tww3VjDleyt51cNaCfqg1A6InGXPwoWqAZcWjHtVx4wWzP1uy2D2sABevN5i_GHpcBbRdHciMJxWah_mGVvWjC-BM44NrmlxwwtaPoI1M-Rbo9qTzAkT_ebLyfsIvDMW643FdZL6-eu4FKpAW9b04dnfI08YMRvVHs7lxlTgTmjmuoKYsxl0OcvRacDOi3fUxvWsKAEULHvszkAcMUErZB1OTA6ULwvjH7lz-XE4uV1Llq3QPWgqPBpxXTxPfiyhriGAHlpe6wewU5SONU-kGzaOrVsEOq5dLqgnXBwXSex-pD5dDVD4262U5A9KLHs8r4WO2N01aNXvMntADAgYiOvh-ptoQQEewEYbbFdT8rFLEK_41bn99yAs8IPUrufzOpfamE3E0lXigIhwTumAPfUC5mTKhYD9_zHWy1eGw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105141336320481788320\">赤嶺剛</a>"] },
            { photoReference: "AWCwydjIw98ZSvgtDasQA5FwDTrA_jXtD_eWfEUSHUNzowwqBsyfkTvslQzaKENExXbP5mYZj5x66KYMXiS0ZmaLpXHlyWz_9XrbvPIO7mQI2cefDQbGCx0VWpQcdsj1xlf3IrF5jq6TVSIgE8PkbgZv9Mi5vFHAOumakFwdlQ76tc3Fu1B_lCCfDMG_XHxNEzhML6FgYrEqAIOgD3G-ZsxYnfMmgx1ejkQELxHHq8-7akSx9aD7uEFG65wC2ZBeHulLIjvFt_2hsB0FehzwBGkP1p5tHmRBKeZPCS_QmsplwkkPMAwdx8HhQGnQETaVb_Pf0h05UxnY1pXww6haDuBmmBukD6P_6wZjvyi_gT_szxtv0bmMHhQ8GUV_jf90_HiBa9IzHIu8efraD0u_IP0izhWCzyqt6IUY1ToLd3BAUTI", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104721222374585150589\">Banay Zhung</a>"] },
            { photoReference: "AWCwydjww_nClNRxpD89y_wi9nL-UKqNJwnzUToAukmgt9wD5F0mCk5JH_ZifodmiqXq8yh-6zYUEqRZEyeiSRqNPwjALbHMWbq1GvCWDtCui1qBf84O2F4IbKEE8y4r_qRiJ9_qDt9XJ_9dH_NqdxmVeY89JttLeWarEjxoKTPGqBVk4QedFbzgdEmwms9RdNvpGdYj9Jlw362k1MR4syBCrXlCr6vuN6ss33WI7kfg3w4UM12ZQHP1AFJwdXqwCwzIjg-1GUxHIxGXeNZq9eojT9lKnzZOtL2FfU7EMYjjZfcFnbX1Q8Wc2DEJQNdSQrepRoIpNfIummFPxBgnM1eGvvveoqk928KL-D9PQB9nEbZs14w2SHJvb9pTH4_yFtRxbAkphqQAh7rzOAF5LfeL9ghdm9SGkxyB6l6565Igu6UTUg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104721222374585150589\">Banay Zhung</a>"] }
        ],
        summary: "현지 특산물과 신선한 야채를 합리적인 가격에 구매할 수 있는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["현지산 야채 및 과자류 풍부", "합리적인 가격대", "소규모 백화점 코너 운영"],
        tips: ["현지 생활 밀착형 상품 위주로 구성되어 있습니다", "시내 중심부에서 이용하기 편리합니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 11:00; 화요일: 오전 7:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.kanehideshj.com/store/%E3%82%BF%E3%82%A6%E3%83%B3%E3%83%97%E3%83%A9%E3%82%B6-%E6%9C%AC%E5%B3%B6%E5%8D%97%E9%83%A8%E5%9C%B0%E5%8C%BA%E3%80%90%E9%82%A3%E8%A6%87%E5%B8%82%E3%80%91%EF%BC%9A%E3%82%BF%E3%82%A6%E3%83%B3-7/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16187812810908705724", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Town+Plaza+Kanehide+Yogi+Park+Market+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Chuo Mart": {
        photos: [],
        placeId: "ChIJAXWZFQ4S5TQRjhEdadAiXGw",
        placePhotos: [
            { photoReference: "AWCwydiC96NDc11w9ejp3MH7GofRGydtzFfKsY2BRBQfxnnzVCfM3kTtuoUb9j8E8sGzKBs6QqQRkcimVGrIS6TOhNbp5bFUwZsnO9FA6Fl8QAjc-nCWicitbH_ac5htOzx8WZgm3UQiOXSO17h-4ATsYabcSazpOGKUjR2GfyEIL-sKRtD8RqU1HJm53gj2c8PZuewTS40bW9Xtxt94DT3IFqMzTuCdOJ1MwYOLyJrY6fXJqJW-cfNj898ptEUatkhfPlAyQOEfsOtLTt_myHu-o95NIGEs158KwmfDykqrzBdsZs5bXjolvu2trAuHFrN_gdB_y9HeoX-CmjTRLxu9xid57jloUWj281T3nmNQnP3l5eYT8-qN7ekLhXGhMA-4nArfw-UavxpSXfXS2mS5xxKgXolIp40iad5bFDU2YqbLsQ", width: 563, height: 409, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104908300066595185542\">中央マート</a>"] },
            { photoReference: "AWCwydjbBBw_LyBoJnSwqO0ShGbjTSqnDZDNRo4EUCDNDUFJCgU5bH_1e--5rLmIkzHvMDi8rYIl1ID4ekLEy1SvYhIm2xSlYgplM5uvAKIoLvcih0a7rEXqucewb2gU8rsIPNhJYzGEmpZOPkR9yuTq_DKzt34wGAlcs-SNhy9aOL7BpcL_tud5C0Titvp9mSAMfsfU4SYUK1ivQ8OHRGBjohQd2LN2h1_DaeZrJC74YAxC-oZ8JInfMwWxjFDE5Lz9ZpVeI_RQvEfE9mBqKmG7rCmmc4_SmsGkDjIlSs8Q23r8_gRSDW_HKKjfB1N9xySvVxKydY-9BEe-zpD3Ug_w7K2gpUSQMqaftVt775s7Hj-EGr3P_vxuE9728HV7DDNKKT2O_QTfmIyMEeEt70TBV3IG6AuZAa_O3tN-KsNIgcJQ3l8", width: 1960, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116587446129251465885\">Robin N</a>"] },
            { photoReference: "AWCwydgqqNT8YqqN3-tHI24OgZNJDWGhTQq6_wHyRDUcPIrIRJpPkyc8L-J7vE4rmtRgLFlr7wYUdIFfWxTGD038bwtCtrIjx5WTpkZpo5J-E6wjQdgI1H-FI05yB7B-WUQtuWi1y01bn6wsIO7Ifxdf9a9OmXyP7c0nh0w1XYegor0JqZ9zGq398UVOToRnid6810qAojmRS2f9yFsmWKvNY5BHsDgXOU4VMN0x0LxXPt8b0pIP1sVZVRSDdP7MnFZpiQqwSCbD31IVilSgHlZ4mVyKvmIGxuK_LPjtwn1OD_wY5hJqgPbuXIuyb-B5x3ircpgPAdAbXyvkK2_4X8uvf7k4DI0vo6wutnBekppsdr_2Op2JT_2YlV7wfMQ5UckVZrOWrKzK57KimVHxHsNvmqZ3esxnnYb2M-snqBSXqSAFqg", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116441225407734264416\">Iloveyou- Iloveyou-</a>"] },
            { photoReference: "AWCwydhuUTlUGTsCWHfuhX2lmOHSrLzGG1KSXlWH7RhUdAjtaTkc97xhK18r26_ueV341k-jFSGtRKBLFXW9ROyX6WoChBGhEo8lT0bWkjHZeWAwbVJeJWMzw5JCMCb-ni56D_YMxU1JLf9D2hfljVlNlA3m2ckdS2eBzAMwAXg81k9GvSfQrlalHvT5ZnTm0aCvaRnB4PD0JBdpSu9lEwNgC5Q1uFiVWQkm4vd0MZOLHltFCPu23w8ruoQV3qF8YajVXY2JFON3PqVjhRvhsTK8oOz8DQklzqXJAhwAsz9DpK-wV4IIFA9YdyyWXyc-DcZCOWG8IQOqXIJjruF6lcKcjuNi--mRqPU0iinHQGeWkbTTot9lQHly1RZuC4lYa1A3VeFXiXnhSbA5QU_I7ip9NIU5XmCWqs8zs0uEfbiCx23sSXi3", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106029866747879672037\">りゅうがmama</a>"] },
            { photoReference: "AWCwydhEKr67fIpQAdyBFIYnfkD_x93oB6CLrDN2AQDxlshzqogVlbICQRQvI0fFcm0EWRiV90ZSM-gvZPIaFSI_DoxxtXiWtpx2XgI0cPtjqM1mpFjhCErvgf1RY1aZ9gSXLu-HKkLlLE92kHdMKkDouoW8IrlFhVx-CoBBH-xt2KFI15qYcKffibti1TW4Zn8avoeINSHEd6kJtc3M3cRqQKjzujWd4QfEiMzW7Hm2V2QGK762XQ5iPezwQX0ZBm-zZ5-KzuXFr4JuZfEdEzagQh09hda43FwAv6Ij0SfPBjdQ5EoKDjCYqy8rmRWPtaDKjPpklRFZ2q8NymRhS6aqCcVb1nG74aTb1cUGrVPbJNf4jiIxWWrfwL0_-j2zTKglmaINMjS2RtZO1sl6RZkguh-PvTLO3Z10BApyh29yVi1omw", width: 1960, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116587446129251465885\">Robin N</a>"] }
        ],
        summary: "맛있는 도시락과 다양한 반찬을 만날 수 있는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["다양한 도시락 종류", "맛있는 현지 음식"],
        tips: ["고야 참플루 같은 현지 메뉴를 시도해보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 9:00; 화요일: 오전 8:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=7808154132465652110", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Chuo+Mart+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "맥스밸류이시카와점": {
        photos: [],
        placeId: "ChIJNxRIi1sF5TQRku7t9wP9LzY",
        placePhotos: [
            { photoReference: "AWCwydg2YG4g-LDH8C7b9bQdtXXUuifosmuTkE_w2saBsluO_aGZ-GqFQlba74XmR6oLKVlu6NQRH0hO5cHDRWXssK_hhEdZIdESa4wUmexFHN-1VDCTdOdWvLETWDTysqfeyvYoebpWx_hdHPu0P7KN8THFgN6u37DLXqX2ejXVXRq0s8UqHqpm_j27cBdMzhyBCXTyawE9sFZxnYQzhWfVvxU27Gx_mY7wlyr2W_KOPDKwl9hA1Yye037UBQ45AtBfLyk9r_EHVEgcF3K1HVkYLfRYkSoPEdQAmRM0bGnNxLlQIT0XZ6HJFadesWirQpzqCAPmY9eKCOO1aPJ3gLrwEHmKPF7BM-ubM2bwMMXwHdBdeygSTcxWA7UYuytrShw996QO3oe8EWXZB-LFCWLYxyp8-IyKE26GXz1M0odQvS0", width: 1000, height: 562, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104328592886015524139\">マックスバリュ石川店</a>"] },
            { photoReference: "AWCwydjmkftaJ9OwTazIN9-EOF2zS2LwfinbS9AH-Pt-WFlk_S9_Ibvt2i2-v8eqjoEB6qplgJGlO7igWiQOLTbg9bvgJLRhypnUFhq3lHj-a9-bbtzoHQnTmFKKiOMxR9PRRVJWiTn17DXSZYoKv-7RkVY7zGmdBhbDY6Zt4T1ugXRrUreuINfNh3ZM0Zmw-yn5mY_F97N-U4NYiEj6iQKQSU6gdXzsXKiMjYRfjismK92qtfOIxA2nch72zRkOXW8siRvY2IYewbZFkZz_oi-p319rLYzxNDFi137xMn-QGhuV9lDsD4o79m-e-MEdcOiiKePOVkGkn9XjHzZDvoc5UySl8yeBF3L3CDZgwSXZif-IetpIemoLfGa2ypjEFmytOwBm9x6aLy6C8ctzNCHUH2s_iLczXL-reluI2pSyfHgTQA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114885446015453385309\">Lo Chee</a>"] },
            { photoReference: "AWCwydj_ZCIINjXx8ewriFrQsEKbUOK3KH2_ojbY82yj7_8TTQ6stL2zTzEpkQ9ICFMDGep4X4-HLJ1KaN7Wdd7J15x2goLp6IVx3ngvt3C-TXNSVVnNHfImLRKOJ80s6jTyx7F-IzImksQfMx3ix23xkBkDt0T3nMVWwOegJUJ73wM1wIR9en-AYtsi7xZiqepMw7TqFsvlPWQvcNr-0eRqSbfamwVWzXDFblBs-A8CWeCcr3fxj5JO67S1t-2eUlhw4WitrGWpiig7GUvNiV-yfzZbvgwTJeuR2dnWCD5KI99aODCEOlBwez0mJbBZIgMumXYCNqaQRanZ9UkHskAxcWrRTogpABY-v3Qp8uaWRojixS7EvQ89OinO7LsW0Xil8f4KPO8ueLl0jBGNrUSMpZMoF-92iPnHF9R56XX7fgE", width: 4608, height: 2592, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115347435326193526512\">黃鐘賢</a>"] },
            { photoReference: "AWCwydhBKTWl7TeIHaavjUBUi5UTHCpgw3nJ1Z7D9J2rX7gCLgmafzxMPuZ8d6qQV2e3XeIUX5nhKmGeRtOHzW1t3IEk6Kj3oiX-oSF5EFCeFdWBuH3TxyYK5bk3fdfoambf8XxphiGypOtSYaT1BQZ5ow_uEMMhOBD6mQXMgpijelw1YoFxv41qRJ5ZcQTJIwveslfC7Ywk-hAuml-Xpvx2NsnnixQ2RitMuxXs_SCXW-KETpPRq0y8Ew3MHYIIN8WmlalBMsHDS9vabXc8cup8qv-4FJmZBNBBl14cX455L30qGDIHEkE9pUOvkOoldjgjvqJGjQHUI_ssvcKUVSB67dhoVy_f46S4pVB2tE37T8RH47cKswNatwjPLVYSTaMklGghcQ1Vnoe6vP-NaR57lQ1bChVqByNpgenYjkvsgWZRKFgZ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115114513155319252567\">Jeff Chuang</a>"] },
            { photoReference: "AWCwydggDmuydgug2yPJpyVFc0f79ZYs7vZUu2H8kQ7sB7WBzqQfiVHtTouM6w9d8Ji3kxOwBxTZud-7u0aq_RzW0-B-adW8dE8NeOHjaQnuYZLWk9diI0Xsq4FhN11QhFS1ZxZAN57LCAs-Pc3714JWx0gtcBeGI1i17-9wKuyCa6qP_WqdDrbf4gdRGZv68oWdQ4f5vWLR3-8c-7E1BDWpyqo5xt5rDP4UjnOR0ikUVeY_EbVA1JP1NGemjCPdve2oh2rn4eqDJuJJTAj2mlmL7zocs8agPAWwQCTAcyA7bpvj6UCuIQQgcWSwwJJ_4xto7xFnx5xt467rZcD6zwKqI2dTy9hWmSRZ2eX8Wi4q1d3tHmTrwpTYKkoPdVY9C4SkjhD2D03NfVHmY-gLeoRvsDZGvx19kRyiniZWiAih543LQw", width: 3264, height: 1836, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102038506483625045243\">Jerry Huang</a>"] }
        ],
        summary: "필요한 물건을 쉽게 찾을 수 있고 쾌적하게 쇼핑할 수 있는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["다양한 상품 구비", "친절한 직원", "쾌적한 쇼핑 환경"],
        tips: ["24시간 영업하므로 언제든 방문 가능합니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.aeon-ryukyu.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3904617595439804050", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A7%A5%EC%8A%A4%EB%B0%B8%EB%A5%98%EC%9D%B4%EC%8B%9C%EC%B9%B4%EC%99%80%EC%A0%90+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Gyomu Super Koza": {
        photos: [],
        placeId: "ChIJbdQfKAgS5TQRmnG0i3eoHJA",
        placePhotos: [
            { photoReference: "AWCwydjhxdm3c0B8OfpTaVL7CWzUbl9mj3msKROe_dR9MtRXvrNaRlCzisjhMbGbUklQr0ICWXqpCC8F3rvyt0KQbRTx1cET_lwTtNCjcI92cCBTR_BsGngHG6BQx4occefOaQwp1f0iBXzDaU2lVmIWSG9vyQJnNdbrD7ZmPhaeZLU9ppVAzL7YGf1yDgG1jTrv0pP0waXdThTpfI9uIH7JbG3xMRRHk2hIZHbf6wDmdnrWrm85ETL2eDPG4Ae8DNQEBuJ_RBsEI_dW7kig7K1WNQ0acmJQ1C_n7EnJofR6mROZh8PV85Jmsjpb_wD7rHigqH5t_QGyYFKl0KEg3q_IQxZ6AYGJClt7XuzPVq2Vo4XVbcQzLjAF2faX-XduxIPuePA6Gg1bqkVDhmypUi0HSlY0mXbADRP3QQIBbj7tukPHTC8", width: 1200, height: 799, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105213205744484282095\">NW OCAM</a>"] },
            { photoReference: "AWCwydhd_wVfEmrpLH3UZLXPEVWqoUuoSH1GBbSx8mZ1L1vwWgRVqAnZWKegDzHRfOb3eYxnFKR1ea1fNgDZpIqmQZkLNu9mKTpGNj70mLsnJcn8qRWnnGW8KdbbNkx9TAW2hQIzjIZv_gM6CDtXXS2Gje_hs0HgEmwVaft2SN_dokcnwndBeKnADyuYn5Z5ZIal0G-GjOx1NaLvyTqcGBh5uh3bpg54DUXZ3t0QfmCGQB2aWuB89m4IoaVWg3mrNS2CVUHVXI8u_iGmWi3VZdwpMwgiJ2u8LtLwYipcwBGr3MsVaQnMLtgxalHs681I-7MxjNJ6KIMXNr-BybOUCQKTJiOdXaxY5ifCumOq5tC7sE_grP7Hqr9A_N_77dKiP7e9cZxaSQGKo1zFxtmVGYob5O2wknim1CnsYvVdqLT6d3nTttc", width: 4128, height: 2336, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107075712227108931498\">T C</a>"] },
            { photoReference: "AWCwydixJyKHz5v54hiy_6RPJQoDf2kKwJLFjiBX4X9PtsJn6D-hxMfi9alIHsBsbbr4rmOJsYr8AW_zo-HJqDhcxeSccBJt9XKQ68jU_TzMvt8Nhexjp_GWV2rjokVCc6qnJeVzYlk1aY72uoljQxTs1fdbExdQpXzfuSj7ZsRsH2ovB2XD3mpl7agHTWRxOm5rOKIOlSanjVAXvE2CtRlS9EHNEklq2LT63VB0bmXzvaw7oFWWJqvSodTa0n47IY3hUQMW143aeWSUZ7i1lWjKBkMCZvD9DxZbIrN8EiIU57wS4k8v4rYAc-Mva6rbgYiZtxmV6oEKCBpdV5Fk6uf9pP60-zQ_5uasVffCRrxmGsv5ortc1W8J-OEYRCqOYJ1grB5lUA-zRX0v4Re2SoFCWr6uHVFA3kSUvRZFzrmlrCb-Mb6H", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114713124498509564859\">沖縄情報共有基地局</a>"] },
            { photoReference: "AWCwydgaE_3KoBwYso1DFAohODaITY1Z4NqDfdigTygQRtQFY8FA0kRvZxULNM7ZFeOuWs0FrgverCA21wj0Y7VuFLZ2_x88hZmfvPGg2qvMqm9owLKaEptHiSJkisoa0Bz8UwTmBOsMqH2njudVtiXa86lyNwe_nnboRTO-niK8GJ0wPlBfgNP55HK8zlI_mdDioVHqAi9B4qyBGI4cSriIsvVqY0yIAOT891G108Xoc-S2OdU4geGbtIaogJh1zMb4eBafzO99H5akVV5rwWmg92xCFi38N_K7qfGzp7x7X4RCqcPRKkhYML0In2ecMthmzT0gjNmjdmL2N7AAhzfnh6jPXe4Yab1ShQeczVP3x4sQjNNz0_8yG-r67NbAonJmeEf_4Rl67OL1YIqqh7A_7Z-tj8TnkKZFQXO4zakd-bFRk_A", width: 2160, height: 3840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101980223902881325211\">ひやねよしたか</a>"] },
            { photoReference: "AWCwydiqfkz8ELgoq5NgzhE2gcRGKjTKX1D4RGPuf9_rLcCZqSTUFia6LiCFZIZR0xBzOEcRkYs70UWxMZRSI4AjmTgf82zGBVioYmSS5Ok-A4iFTJJ6sNzZBbr8hS7gPx_1_ZC-GmzB1Yyiu37QS0BrJoKwKjk8tgB3FhuxLckXdEPfzrxvA-wp91GhKFhUOMfi82uPf9RQTD8tYdmdtFTdACEhEl_iqM4cJf8MLzgSLttkwfXsoMLNKi4ztddDi25tbid0qP7HRzYMOiGIMmifQ3jPvJ4VDhjSt0KmRIKO6EutFxUzFKk6Yh7DFWbB_UthYI9Vng8XCDiT_bOnSwG1fGHXktgAePhBuWjywclQUYy6Q_GljYpFO9b9mxGVPTa1CCsbPGeG_eedbElXdZGJyKP5Yyx9MkmcbsJG6u0BLbY", width: 1080, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117824355942907158775\">Rinahi</a>"] }
        ],
        summary: "다양한 상품을 갖춘 편리한 쇼핑 공간입니다.",
        updatedAt: "2026-08-12",
        highlights: ["이용하기 편리함", "다양한 상품 구성"],
        tips: ["방문 전 영업시간을 확인하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 8:00; 화요일: 오전 9:30 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://gyoumu-super.okinawa/shop/koza/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=10384360072207954330", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Gyomu+Super+Koza+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "MIYAGEYA-那覇本店-": {
        photos: [],
        placeId: "ChIJl-MIQ8Np5TQRVxMMcqYcJhg",
        placePhotos: [
            { photoReference: "AWCwydhwUn_xwvHdGdQ00rL-Ayk1pwpvVo5Cq0irdu1kwlfmrzeHq64WhPUl8KwOBJuzxVTx4FjrLITCcMeNzE0_Nnb4H4cuiwcWkd6sUlO5CmxGU5_QTO9XcuBPEpNlUB_4JBxovp_-igismnXBhxgteh0JsmAx94c2JTTh_PpuOdJi1zDB993nzZxH_SS1ELwUPfcqWGnqsov6Xq_qh2Q4tk-Uyhgv7tyneMxdOvy6ny3M-ubPCwTnGboTZF1WKijJeAlhbKZKPeUVfCaUGLb07oEheatcEMgDyB8ZqPC81UJ8O_y_YRe--DxcpQLPvWrfyAGmFvuJFcya4UYPIlABj5-mlKjJTbXheiLd10C476PCBYXJeAsDKMo3T7Dl1yhBAie4wAXQYW7SbNsCGm-526p2ROFPirYv4YGg9NDXAnTTg3LsI1duRK0kwnGJXFxY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108518376978350728217\">張佳惠</a>"] },
            { photoReference: "AWCwydiHic-jCMSUI_a6hFbiIJLwHotq4YSxGYgjRON1DgHcZ03pDvB-DbEz5IYXaBC81q-5GlSEGv13lfhlTI5VMYOuYduJW_CFgQ1n8uj6Uscs9ICalnMVEsWQA7QmaZl5_r1uaPd4hW0k61SlMWsBfuIL3vPxdc5qkB38Of993s-P9XEe_mx_sd87dnUeUyucOHn9A5Yn1DH1RtR8W1PHUoSDs96tY-K3OOt5O0i9xQL8w-dL4XAmLv6yE9TZJ_Wr0JRmZaphTfCBwNK2t5YaWtglAY5qx6AhTPjJFLczgtMFj3mbah7rYl0cKLG7FawDUYIDyqEsFmL9UggPHqtB18wxDA0TBT0c6abT4-wbD1n0VH8a69yL_E4hjalici27ejnWnm3qd1OfEdkD7npz3PT-Ht8zOvg6Lh-m2FpnvFY86OTj0dw-lSe1ONukGu7O", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109345367043610243200\">Ting Lei</a>"] },
            { photoReference: "AWCwyditcKEWhBUdAGe8dnk7EfH8OmG0hRQvE_wFriGS9_Lk0M8uQpowyuuaAMh3VhKGRD_9uOlFBK3APRWYGyb0rBqvAqiJcDy2ZMlYr93je10uCfwoqsho2SXuqn6-7c2wvk579lGYdTPbbRI5Hrn6yIPXhHSnWysDR7IwBBO2B93a2bkp15L3G9hZmrIgJxP5yUO_rJoeb8JmLNjTbbEmteG6BIsUX3QUcJ2G-3jrQFrhSjWeNoHWdygLAKk6eN8tuzCnYGlFc5kviekQFdfZIJ2lc8DiXmg0IPZDxAffimEssyRQysTj6hm25msGu12tc26wHqXdpyBFO4qvhH0YY2BVxkMUW2J2CzQS6VBIwwAr3RgTTxMG8dUhqFuSm_EVNftEXZzGHNWdHZ7VAi_5F3-7sxSibFVQfF8kT2b7eSQq4AMMciH8MzLKczCW8Q", width: 1440, height: 1920, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102824975958686731071\">Yat Long Man</a>"] },
            { photoReference: "AWCwydj-qa2G9aVol5ydBmtXlr8WMth787dkYmvYjcQ7rb1lEJpxk9xsQHHdeYYu06Wu9oV0DxpqBv8WYLH1Za8Uht61sfF9xDk_cDRmHIomW11x47VbUZfUGtHEhebnR4Ge86nSWPFqH_z0rfJZMm7t52doA_axhybjpSAIoNUMSN92KM42i0vDjsOaKxhmCY41fWD2IALiVQ71KDCXebFkutjGJyAoCjr_Lkp1slQLrf54Zqc-g4z7N9fLEhPDZaAhz66NDaLRCQN9aMCAULxwD3qzDVQ5y8EOrL5e8Q8S6r74QgtRhE2bdgx3DpMl83e5WiwUCmDcnghQii_v3k05K8zS6f8hlXIWGl50eM7UXgFbyABhWKJfGkQ2j0XtPkQ5j_TYvjrZpWEPeMC_D1_ly2N-E7GUC3wGu4v6lBxvAZlV7ZiF66-zn74I0V6W4yvE", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109368957020486389990\">ichu</a>"] },
            { photoReference: "AWCwydjLJUpherrgMf4A4_s6ljLEKCDtQeX0TUksW1-ljmyEXURDshtWIisvpSa8lo7GmedUvzdzhlaOYVdXgF1tNE1Vlpp92rT6_8jDdeTg0VQhaXvDpawfhArWA436ag-Ktg_BaUfQAZU3vvbqSaAcZuIuAYXOyWxq__UGohmF5tePtC4LpvYcXIpTUbfzDKtYd6PuHgDaxUc1iyDOp617iaqJry-kOuyVrg4eLR-JpzrJmRPuJdgTDHlHUL1-cvbvtdgeCf85UrvfszHICT3okyE3_wS3GTe6n3gx5YA8d1mvxYgtY-pkxPDQikoOmRT4xwcmbJwCPTUJkPt95TXFYF2Yzk_B8w2kfq2kCdl3xBiUVsThzr0-YU3z5QroZmzyC2uZXutDVUccdJmRyjmTixAN9llgDNImk32ofinfM3pDLubg0myowfAWpDWdz3An", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105222018447506985316\">陳佳新</a>"] }
        ],
        summary: "나하 본점에 위치한 평점 5.0의 기념품점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["높은 평점 5.0", "많은 리뷰 수"],
        tips: ["나하 본점 위치 확인"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오후 12:00~8:00; 화요일: 오후 12:00~8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://umui-okinawa.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1740109807228818263", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=MIYAGEYA-%E9%82%A3%E8%A6%87%E6%9C%AC%E5%BA%97-+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오카시고텐 국제거리 마츠오점": {
        photos: [],
        placeId: "ChIJs8ssJHZp5TQRHk_W7YQaSIE",
        placePhotos: [
            { photoReference: "AWCwydiejC8OD-RJ1Qk5L16XaMVNBqtZ-w-WDm5AG54k6U5CckWTKoHo-UYrI1nI_RDwOO0wDWCJQct7xuBKULL9TLw-_q7-BOHuVg07ekNS0Efl3tTme3jirtP-WdFfpbNlg6D4v99ajzb095Jc-XQ4q2rfoFi_orFAxNHF4ocgmpYiqocii_wAQG-dmLWWq_smD8yKrj3NNmkX8xhIjfS_qv_q06AzOe9O-fvMmzAkvVjx-wCD1YLwxiciOv-7gmcppyaJS9GE1qinNn7L2EWGEfW63sccYGQvHMZhtVs0efFZD0fg9kM4-PEdJakWViSddIxzOBXDUpr3KIxyvVOz7oTyPQxrmbw0lqQ2GwGZHYmWdsVTAaPSodYpvRjVSMw0jo6z_HSU5EZSXGgP5D3aOL7cr5jWylXQFS4Ezp5LpmQXIi05", width: 1241, height: 618, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116778540706566694711\">御菓子御殿 国際通り松尾店</a>"] },
            { photoReference: "AWCwydj6fxkGmbmO-RBacI-9lwnInSz1T8LOysSFQSEtYbbXMAX3x8BjuApgQhgz51EIlk5zDxv1kDtwMj4Vf1kgpmektbYYKs_m19gyqwDZQ7Otc_N0qFTN5w4dUTsS2QTeiSRwcqVhQ5Jwlp8fq47MFnxhi-PaunhOUDHOyyqoNWxrWs0eWstD4EEifEplfo-tqTDN7xbjwq40YWIGbd9ie9NiHIX-voqcp6qT294fhnP-eNudUJQaMHO6B_Uw4L9Wh6b4db_enJLQeO21NQYM7My0_YUhiDhOMeeXQzNfZ2bk84J3zjxvE6rJStLdSGBPcPKPfYcTsjzVkJCEJktJkzNGKDYl9M_5-671rYCjgb8fMl982T6hE0pd9u_gJS5qJU0KfNzkuxlL01leQs1CdY_wvFgn5UkP7bzvcswbUz4lrn8U", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111810488179626710131\">Thomas Inwoo Bae</a>"] },
            { photoReference: "AWCwydidYzkNiRvk0FaCBu46J4BNxbGZJYTaQYs8Osi0d3eH5jsHnY71MITLHK3kPdgzXsxmdS5lojk8EPhLNEf3WrxV1BM6DpU93zWvXfsg-ljxgdTtximvYiAc_DS6kbrTH7DePQFoPxxc0vWTQStifAKXbP0IKHDk17jydbebwWgqK_ycAR-WCuM-X9f_l9D6B8x_F81prTYV3S_RSpUa1dXhrveG3QFqPyIWclC0P-XY0X9lYY7eVJ1BQuSDkMCr42ZS4p_RgMOBSnREyOEDxAeVYjwOjvLS-ldWoExgQL2MqVa9hI5lluHtAvGjL8D3Mjuq6ZwFZ7-rtvkg3_366a3TMcs8Q9D0NiYovEGBgz7sU0kf7PenQeDbTPTyhRRS729oINKWDF0hpmVmx8wmk1-HyjkNsundxGIowyL-xjiivyYaYFZux9erVmBtRHdz", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109385455744683018239\">Team Taiwan</a>"] },
            { photoReference: "AWCwydjzKzD0Qno1yPa4A6jkS8aW1N2mWWs8njx9BCsFtwE2jg5rmIC1kszJL51B_BotQA50B8S6qbRxvvspjcMKvcf7ryQHBNIPJVFO1xYTpxMljWQa2gbQjlZ5Scj24pOIfY3NN9WvapYVHZCuvJedvEWhZYosEUXYuOQ2tiBZvLz267iK0lbyk0sEPOMlon8sCn2IfpL2NESZa13oa0Gq99ur6XTKbNq1ozZy6oeaPflW9njfJhVDvk00VwP7_6QIW99LRebP9hazQTdl6pNCqo4y0ikeevcjnQwLdOTRD5-YOdfQczAuC3c7537rDhcq7LkoEtKtGgdXpf_oa4nWbQi6pSBbg2s1UfvXrw8FfANhx3JFPvrO9_EbwPu7iUM0rxW7XFe_qRAzTmq0yRQULvG8mBXggyDimTBA8l1evwu5KOqLlaFTshFaL6BP1A", width: 2700, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110927602648808886170\">Lily Wu</a>"] },
            { photoReference: "AWCwydgASBgLpGYIyod4Zs1aUwNlPowwlOBPOyCrstPaA4-CQOb6boY_wtRMvOOH9z_YUHpBKFeV_iZAm7x4BJTBzPMX1e1-RJH2iNP2Z60MPFottW15x-Qyb06sNpmOT2PAeSmzL7xJll_6S0pw6ag-3u4J-DDwSQS0hnA8jF1tlsaFbAsNIrTU0N84WbXSabkZgFUagsRTyoE1m3A2OeCMTuY8ybWlJog0dXQHNxs3CLvzrTA34eQJlrj5GedRQWFJzNFaFm5cC6h7p8-U7cK6rTRa6MFyIXvOh3QBrYIiNi1I4bxaWlu9_8smFcD9nQyiIRGHVHLp8H7laRs0rrjEpVG09Nxa8p6gBRZjJajSNktIjriXEJrEDpImk1XOectGiIDt6sksrdPMV239dgiMXvrV9Do5FkQnllspbkqynlILe3jnbn5xQvxK5C2pM_qR", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109486781020187829438\">小毛</a>"] }
        ],
        summary: "다양한 오키나와 스타일 디저트를 맛볼 수 있는 기념품 전문점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["국제거리 최대 규모 매장", "고풍스러운 외관", "다양한 디저트 소량 구매 가능"],
        tips: ["2층 레스토랑 이용 가능", "고구마 소프트 아이스크림 추천"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.okashigoten.co.jp/matsuo-shop/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9315724987444121374", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%EC%B9%B4%EC%8B%9C%EA%B3%A0%ED%85%90+%EA%B5%AD%EC%A0%9C%EA%B1%B0%EB%A6%AC+%EB%A7%88%EC%B8%A0%EC%98%A4%EC%A0%90+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Omiyageya Showroom & Ryutsu Center": {
        photos: [],
        placeId: "ChIJYebx30do5TQRfx9lTaciDGc",
        placePhotos: [
            { photoReference: "AWCwydilwcm_l_dGYGX21tcf_KbhRZjD-4OcE2HSWk-JX0QzUMPtJih0XJj3CzBUIp5GYjUAp5Ckw_HmRph5Hb9hJ2CHHQ8SLsmstP6dZswP55xuNBozJ_0PDaOTK7DnajRx7WVDHyEzwPKsWSmi40KqXVcnTuCFJ9cvEwuKNqjlFYIbZ5vKzzJ6836zvWEKtMhwoCfZgqQRVNLJcGvK921aFux-IIrS_Md8Um5ws3w9QixWi0nDuvtOmOUKg0LsBea2niFV1I9vQppmeVLyLzG4aJxm9DkPT6pYnPsFgZQhFvQXoEOrfpbOUpQlx7bm4imAGH_cAN12MXev775OP23DXqf0mKalghTj60P-f-xuLGT4JjvWXlk2XMbMxgxTDrUOstNSBUzMCL38BIA41Gudjsb0leSzinhbHIUqt0rQfDq4jw", width: 4032, height: 2269, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100429114858360955973\">ショールーム＆流通センター 沖縄菓子土産</a>"] },
            { photoReference: "AWCwydgjGnnCTpgcwtFDIiL6G16bDYpocNr177V6UFAkPaP_Ggy7NaRKbkcgJqH9VZE-FLW6YUDPKeAyAiHC5HiMZPrhM3Zp3HhfMmppW47yyRfbp8iVELxCDsVfTbZLABDzjMLgg8upTY1HmFDP8XBlVpOy7OzX6fFSfnWWPxRa8uZso4G83VSTBq6CTnLTGadkvguZqEG-6E3XUrWbGK80PKUU4ut2UgJheZtydE-XicWA0GxYG2bfZCL340y4bya0D7D3dI41TtzT1LaTinwEv0ZFIYUmPSdvKVv0H6RpIyRC-vD5CWHg6IbaUF8lpzTGk1r6YJI5Z6jnplo-jX8vE63xio34YDR53V9iSLUWa_4huKUDd0iEx-ReXDkkeg-56jJ0OoVinBlTcF5Vxodkhdk6p9njBIPvfPUp6pwjdLvBFJk", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117766626270713984373\">Ｙａｓｕｙｏｓｈｉ Ｆｕｋｕｍｏｔｏ</a>"] },
            { photoReference: "AWCwydgvGXC_0CIWKDTeipr4FmV03r18EMJJFiSiK0BTaSToRZo00iaaKURJsED2lZbpODIVmQuxyokAZaO33PSPWiCLckmTk0tLjCx3wZ1naDLEcoBUKSLQgqZ_cUYfK8yl6kPL_BjlA7pkxVp_I8_xN9HpsqwzvuuinxuROd8wOKd7GS2XlU-P0aqy-98CzhYeSfzG2hDd-73IjL8KXaKTdx6snuy5Wwr2wBhh_AvTPt7ybkevHArrwPXopnDamJq3bIPWAZrQyIpuy7gZIIwl6HG3SavYh2VXb1eVOEWDVJI5x3Xg2vK5I8eQ9cPaykNw1K3myo8dEVT-ZtcJ9O76sY6LmMFCdOVENolFNz-GjH9tyUhwtP7zd-BvJcZHNFCYRVxjT5FBgtCi39yc6ajD0Yio0ZyFaKn680zM1zhPD1A", width: 1280, height: 720, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117766626270713984373\">Ｙａｓｕｙｏｓｈｉ Ｆｕｋｕｍｏｔｏ</a>"] },
            { photoReference: "AWCwydii04TJHzf7lEOA5UKzLUJFNH4-weUHQr_1rMgj6ZwejvahdenkfKUpNdQtGwhsYuoXZ_TQyb1grgA74hqclGk38xu0wtyHpBvaY5M4TzL-wSWgrbQx2rPsfShUhWT9GnDTTJrRVsMOOk-yiAV8tpDa-lVhR_BfoNcv4YFOhGFGiicnZ1OfrPmeehNqP9W_6Qmlp5hl4wGnyW-ybIaBgjeVhpHLrgWIPa6DgvBuS3TheuNLWCbyvxqNxNmIhHXxRtu_0T5NLZWm6ekeUxDDPtyb0UMtMBA90TbJQ4UXre3u37n0nt9zpemCN7v7kGhDk5-8sLCRNRrDDP2nIs2e4zfDzW7iQ-ithy2I5K3J2VHYsX1MvvWHs2RsO43mhPSCp1a0phk_I3Istt1OtcicNA0cF6A-qm8utNkSpe8a3BnwLYM", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112648703711471006307\">ペイミックス</a>"] },
            { photoReference: "AWCwydjSh4aTlE0qZGM_tK19fNoZ87l0OSXluKhS8VuhOQYwK6f_WTFGJg26heU7Mk1iardywvmyiVUdmSydgxviw-tnHgYozLb-7JHD4QdkSZkkMq13t8XzQ9ZjG8smSb0XqksTP6jChayvjQKKcHUwToVfVNJKLLiXCIg76gOsn3k7BKtyzGtnE5oP0EwzzuPtl4T6847MLrjRXJ8l7E7lzYPxpAevp5I6MCfsbKBs9z64avIrFjHwbeCLd0nQfIEJGJGW9_xgSnuyjEnT7BvO2ipI3B3JsQUazFabKJZ2S6eRP6pdUK7ZJ-EkBN9AIYjqkKAuzetxCWt_omrnDTemAW4pYF2Pvkhdq_YcdxsLym6XEgp9Ethw5VrCak5KVS0PtnVfVSKeAxKJ_ja7WV_ivCtnvPwIaWxHMTqS7cvt7KWyx86s", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117766626270713984373\">Ｙａｓｕｙｏｓｈｉ Ｆｕｋｕｍｏｔｏ</a>"] }
        ],
        summary: "합리적인 가격의 다양한 기념품 매장",
        updatedAt: "2026-08-12",
        highlights: ["저렴한 기념품 가격", "다양한 상품 구성"],
        tips: ["국제대로까지 가지 않아도 편리하게 쇼핑 가능"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 6:00; 화요일: 오전 10:00 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://shi-sa.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=7425347987580460927", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Omiyageya+Showroom+%26+Ryutsu+Center+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Ryukyu Glass Village": {
        photos: [],
        placeId: "ChIJqwNytRxn5TQRfL7OFx6hlYk",
        placePhotos: [
            { photoReference: "AWCwydhNf90Mu4b33ZTCm4_TCFBWSnfu4hwYHLkBCvWL7JDGZYxDRP97YmpRylxn22cAuaucwN4MXEgh-WeFCht2Bzu_XGmIzBRTiFFxAw24KKcxAf9YrnhQb4lPOe-tFNqZtT2guXKlsvXPX6NpFXI9yotd30uxN3lJzd4O4OR6myTthvtvyTrJb2l6cV9IU4jtyylBDFCeWzw7MEcNbqDz0Rd-A_Bq978395MgAB3HFPXhrHk85fRJKgDT53skT6ANedxfpaFYiw-ZCuJXTsPokXBNj3AyjPq5RA8fi1YinREYpeIUGf1SfGCcPzZptWJJwundMYVvPBoencc3B26cgppxCV0WGB6ktYfJkDaBqP98qe8HphJMTr2rutpZfYx5JeU_7KWIoWSu_VEzLAblLuyZqNsmGQmaxOY8VE5wwTtbXPZu", width: 4800, height: 3204, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110648017204923072463\">琉球ガラス村</a>"] },
            { photoReference: "AWCwydhHVQ_oFbYDkJFXg81nfe00Fl1S6wA-wOMph1a9MA9w_142J-9L27FukGLTYwF6QjDglJDhTpa2yfAPPyekGs7ow_QbzWJ9eeSnub5PUlkUx0ayxm51v206mQqrL-ecXvPJdsKXG6wJbmzTYEJu07UhoaHiezBzQQuyjTyPAp3qQXMDyh3nIaJoYIWZRCuchrnVDB9UEG9-kE47RfoGaK-fmhO8q1vSo9nVALDF9zC-HZMatGI02pTqE6F-jqQIt0GNcvxGa354pWYELiWBA5ujzII3-9yQpAmX3IC5WL3OEALHqAdM-8JnmUM0aOfIde22QGaEMFAUf-rJRMweeWFaqcBdJGqiJbnv0T-cAaUH7TuqqceKJRNJMTw0XBd0AuNMgdb5EjZFHbZHxrflpxvu_ofRi1TaHpjslBRwr2JR2cAti9u1F5HD3ldnMO6P", width: 638, height: 425, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110648017204923072463\">琉球ガラス村</a>"] },
            { photoReference: "AWCwydgGeZG9DoKqV4BcJA17Mf5bIaWxTg68HE3Q06K6RhdfkeY9jaGRlZF4UxJVCMnL49zYa9XQxwQ9K4bfV--6PwC_wJ6sbAzCxYAqsaywJuLABjkUKRYeCUayD2Sdn52YKYvg6NlUrwVjZNQDjGMCXWOp5fzq6ixK8EbQ_m-zLuN3llW1F3KA4DaaWMj2pTsMZBs8U36oZldDZATcecPUjlBF9dmXnbpM5T1BTky_Z0kOGX8m_VDFvlZrbYGON8DSfEEVmhBRHTVejjajTShb5LkYv-eTApAf0eZYerPLbWmt9SG1TXSTyfcRa1stsx10MnT2r7OLMZLnlWhkmWo1HVgqxKuMDBDDqEPvHiIP2p_jDuVwfBP4s1E59q1NZZ-6lcW3vbtmK2PztmcxwUz9_80OPTtRYuPf-gnul6V8AROra5nuloXD1UCT1bMJcfY0", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113709851607596573594\">おおはし</a>"] },
            { photoReference: "AWCwydhugETyCs3nEzmOuR8gqxa9sBD-WlGkuMEboNZrYLeUL8q9JM9oR2MknI_uaVoFrQHHl3fhl560533VsLDWjNwbqnYC8lwWcux9pF1wtzK9yY_jsal5OxKsQxG_AbHVfsDK3Rk5Fx1-pKsIUYd1b9jvVpAnI-O4qC0GAeLn9aJSjp4zcQG4ZbGtV-yUQQNpdTz7o1rx1UMdhAq2GtqvckxAYBREKds7Rb-uYxVUm_XY5XpcbuZhlqu1pORps9Rj7B_zDVRfQdycNATO9BxvwYw_x1ygjcnufBDq-_wWyUoBLV6GnbPAQpYIlz3x7UPidiIISkkCtVX-1ZMHX3PIbBRDGWtTBdaUdFs6v2tUlK0nPRJX_NCZhtOU-YnGxD9GKuPKGs-OF6frv32DMKUvKGCwTkfmm_rsgU2C1QniD30H3ZvwhWhRoCkXU1d0yidU", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111190245407350289618\">koichi ota</a>"] },
            { photoReference: "AWCwydgckgECgdU1z4VnFChhME7DOha1WY02G7IImY_o8U9SHN0O_LbAHtTvwEKsdKX1eHk3sBH0wXc7bXMKPkCB8b_kFp_IM0cqakoo4hfAbdqZbG4ZZ4mWyHDnfhz_iwXgtbek93DSe8hEZfyvW6Z8Gmzs9CoNDhp6LlDBmEEA70cXUEVcq-C-aLVrjov39YvD_Gxcsv3Chr6HBnQSczafFCuekXumoW21mmRQDQa_SGZFpoYV5un1-d6cpmr-9CuCk-QX6-yBnqxj9JNVW0f4Bu-5uILSOTxrQoYb6rtK24KnY0mAkJ71fjd-diba7Ri3m9Pmmg9D5pbnP6C_BjP5lknhfJ5a3E5Le5gCJlQNnR_oYMyEw21qIBVUaWgNWHNjuiErE7ynF7OE4iQ6QgftDfNRF1beJKqZkSVu8HMTc_Deg_HbUMrBEQQ2E1FUVg", width: 3024, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110180994354253626800\">Z H</a>"] }
        ],
        summary: "다양한 연령대가 즐길 수 있는 유리 공예 체험과 아름다운 유리 예술품을 감상할 수 있는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["오키나와 바다를 연상시키는 다채로운 색상의 유리 제품", "모든 연령대를 위한 다양한 유리 공예 체험 활동"],
        tips: ["입구 근처의 화려한 유리 오브제를 이정표로 활용하세요", "빛의 각도에 따라 색이 변하는 유리 제품의 디테일을 관찰해보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 5:30; 화요일: 오전 9:30 ~ 오후 5:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.ryukyu-glass.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=9914007305346530940", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Ryukyu+Glass+Village+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "오키나와야 본점": {
        photos: [],
        placeId: "ChIJ0Q1CZ3dp5TQRLThTwQV15sg",
        placePhotos: [
            { photoReference: "AWCwydgdSeCIBs_Ic8p1jhNo7B-_addP2wzJPNjQZcqvuvQC16RgrRBruD3NMXEHhO5BzDvnKsSQsOsoG5wGHaxNKmtQuxblSR0NoxgNjvU4AuL0KbCcOjwq4DxNR8jW73AYBDa3EXfBV6a9jXm7hmkUMjIVL2i2hRGbARopzh9FfPnBQVHYxozUkgGzc1K9aslQsZ7PfuuNGIGijudiAzyKXu5IjGPYZ49eAZjYFZJowaI6toaHo57-WT-q4sa7p62mlY9A0F32fyhjNPEuhg6zbQuGzaKTMFtn71AGWo_RPtO8WzB1z9ZPVeJZzKcDgYrx3vLTIk0-iL-2ef2pWJvYMhXcvQ0aPuKXOgsS-ut1ppkap1NOXTwYkUyII0qld_CnwMx3_-pECnx8fKDCVbwPD8uKSZDf1IvxYFd5QA6p1HPwyw", width: 640, height: 480, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112842060540177164140\">おきなわ屋 本店</a>"] },
            { photoReference: "AWCwydgJXkrM0BtaJVP1UyTwxWKjwC5G0KlW2rYo8Bwn5R5g5QLB8XmmnqtzH4BqWIZYk7-XY7LOhGdpetGC7ueJhePgnYYb3lPgsEYM8R4Lv8ORrqxSh7T1xrUsGrD7A1OyQuaEKCej8uANNp6ZIT4OgCv41BXps1EQRYKbig5Arzt47E3XdpHi_fKvnKYFP4Yug1QyLuGsnXePJ-KqijSiXuIPKZw6XB3NIHBp2SEo7wCrCSw3lycCHCvdRvlpCdrr7TZ1xH1sDnTotmCNZegmo0HfEod_azWraBQoV1BZLC958ZafRYIRVDMhZFmcCaPna_dm-BxWwphNUuxIJ534qP3KKy3NUXANGSIdVrDrVWAykxRDW8ZE5v00VoKFXcZ44SKd1OVlRE10nFmfSGztinug_imXG6XhMU0Hcxa4KWKFzLEp", width: 2976, height: 3968, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106380468418426512567\">Motokazu Gibo</a>"] },
            { photoReference: "AWCwydjXL7pjuWvcyPOPY_rE-jMt9rU6VfzKK8oy6vmO_axdlVbfh6ECk0R8B1286Ny31Gowk3nfuUeFXl6HQD8bOQU4kfGW7ym4ebHTf0Eueb1FvC0yY3mOkrzEup3CYigpuKaKnHUy-Qz5tHYDQJABDWG5a2PDDgqhg1qFLKehNfZDXy5MRzeuc4dy9gshmDMqButZEC2iI_aDPz0QubYWJWVX8Rvxa7aA34AKuVZMsp6b4yFPhsrJx-QCgvBs7pPfGaciIyvRCeJeC9O-5fH29obYRjaOy7Vt-l_8NHLnovPiPVVNnUXmtpm6E1l1O1VMoQa8sv4pvrLdwsIcVxvx8A8enJSIsTtlplD5ETOOkWc0S3kLs0i7hyT4yoc1zefU9PiqRADhavvttXpnuXx8IUKDy77I5W4K6MTZKALwhxU", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114960089422984681323\">Teresa Chen</a>"] },
            { photoReference: "AWCwydi3lu1MQIoK_pK1WVs65c6FOaZHG9M8qfRjtu10YtnlOk1wQ9hou38MheSd-6IDkUEkDR6cqHWaeGs3lWvaRA3QlnPKKReTxKjd-Cf7acuyPQolqDyFi0Hc5qwTXQybZyhS0XAIZQ9u4aWWZB7N4kaVp2eZXuCu2pE6S_7DWi0ptxr_8nBz9iN2uh8mopla-sNimDXUVzg8G0W2lzIgKhUiQdqH7rcR3vafrwxjP_Sv3GVZGotDrJqYEmJf9SeEFNYaRJlt0cK-pPdBJ24lHkFs_Yb6yRoGzlxS1gvlmuHFeNiR7q_xLYltY9O8rTaC5ffqrX-lVX0qd7H92D9mmAUddD1FTXxeDCD8fbxHX7PeiglY0OJjoXb91sAVAVGoMmyUtvVr4V6TG6ZZz8Wr4iSohSmHCsaUJVxQDmsGPoIcGg", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115349971529965619054\">harujun</a>"] },
            { photoReference: "AWCwydg9bzd6BQBOsJdcGKggyDEEWvWy2FniqeCd7AAzl1Qa9HAUbGq2XoWwSG90jbyouWFOrrz41SilVjllgQi2Px37WvRWvYW_WkD7BsYd4UY3aqiF4VWmdbSNj373nXeKd92wtw45af3joOttbiUwXKbCi2TJzk0DRjn6cfH8T2yja9-4nC0EvHRHJs8ZlvVhtu5GU3MTh6MgLKNT-XI5Qer2hSD1HRtQtcnysE_BIAnugapEG5PmGFhd9en2Yf90Jj8JZp1yrTzXzxZM5yDxh1Sx0lAuiYQEs39VL0GR6i4a14GeG8vBY_pqL59GrujKzizXfGevUVwu95Y0_PFwj9f7aG128W3LhtOdHcsPy_UkEYT32b2ZptABvGTjWxWf6Tp6-t5ZpwzBQ-xDGBzJbx_GHfNjxz5R59AVzDi8ksUzSQ", width: 2976, height: 3968, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118078069248124257380\">hanami</a>"] }
        ],
        summary: "오키나와의 다양한 기념품과 식품을 한곳에서 만날 수 있는 유명 기념품 전문점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["다양한 오키나와 기념품 보유", "의류 및 현지 식품 판매", "주류 및 음료 구비"],
        tips: ["다양한 상품이 있어 구경하는 재미가 있습니다", "여행 전후로 방문하여 기념품을 구매하기 좋습니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:30 ~ 오후 10:00; 화요일: 오전 9:30 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.okinawaya.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14476386719807780909", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80%EC%95%BC+%EB%B3%B8%EC%A0%90+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "류보백화점": {
        photos: [],
        placeId: "ChIJAU9dv51p5TQRY1OpPxIEG18",
        placePhotos: [
            { photoReference: "AWCwydi6QWFjHf4JC0SdfZ38xT3oQl1hVmLzQzHHuw9CDrZTLUeXrQTH9TKPMTx4r1Bl3LgA5BqdIhg2G2nn_zPkYOvxbqPTc4-NoSrQz0y3s9lAJlSjrgf9ShNH99f-GYCoL798kAvVkKTlYgapxv9ygNd78eQZjsSbahS5oyNEhW_yZthH9uawmcnhZWJ09Y8GgTywKyB1zS9FQvVU39kwGn9ZKPz774pcEjNaLtQz8o2Q6_Q_eX7Sfk7ASKeUcEtXyQ6cQu9zalOj4lEK63_b2N7MBzWxZk4iIwNrfRx3T7uTpzzOOwo59X7NMbf6RuYHfB-b_VD-NkeP3eFOIR-KamapXcPsYiW0QQmQ1HqMHfbSpf9RUcDBy9fHvO5qttd5gsXaLpsB5qAoVbVcqBfdgQnWBP6f6W65WNMheY2K9zJjQ3yXAUKXms2deZMsKLir", width: 1200, height: 675, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102427630002119247351\">デパートリウボウ</a>"] },
            { photoReference: "AWCwydg4pCktZgleIY6ET7Wn9gmJkS5msHMZmWQyRciDHwRpSgX19ofzGnXyborUqlCqmq0uOGFLPICDKjfdcRIdMZAMp8dtXA5Zp7GcQqmT-ihgZzStYJ_TpSDhc3aTzUpy-yecKzRuC_-po8XR-v_pol088qSkPCjXARKTURNqtYvXmyRJik7mZjWwjgt12pS6BpB2IOSSLDfmFfjX3A4a3yUnOKscADQ864Bl3qmGXyvPUVHpPXW3Fn9JLg8LW4jw-A4JCeXPsph6ArS8NDGmBe1ZRwaXxRx-du9W4y-0a5dWkpkU-nJzbOgV2SQUCnjpvr259p400a-LFcgsJ6qQR8bcVce_iiuo9gg9qNNb75Cis8c-iZF15dxQJjSZEwPtf-8xVnnBTPvbVHQlcfnLXAIcs2rf7ExY4vALHxHatz_fYcQwT-Wx0kJXYLGU4Q", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114169311333427866635\">のぐちえいすけ</a>"] },
            { photoReference: "AWCwydjvSlfco6VFzreYIJUPlcBaO3AiNHvaBvTD7DpuCxbIleMFguJbAVVSY5C_o3eLPWAhUWKrPnXnXC0eoOjVvItaOL3UDziQVumgVH5ijgkOFIepzuj7YfN1e_7vOxG9l7GOZhvw4SrAoICxKC685fOMOxJa6WeeEXWv0dG9ILT-TPCNWuvHqxguuuZRgAgzaFjusLLhwNsOeDF9RzdXGmY1hrxqzm7f8qutM8rtKl5HRD3QJTicsaMjbxzv5dATN3szGXQMb6KPpvbrnZgWsZYdA0V7gb8TBGcSLyJy2ul8jaJ09ThiWAp40LRyOYDD87C_Ikw3qOnMauetG_c6qXXlBv46L-KEiox5IDBUO7waDGDNicne2wcmmlWShNPMb5AEdovjGx_Bx_KZ-HL3wD-cxKPZGO6adimdgFgyaMo_cA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109535270529966891812\">젼이스져니</a>"] },
            { photoReference: "AWCwydjwCfSvHk4-iD2vGy2cJURVIojtrK4ZB4c_m5w3imcc8ocuPPSlQyvuhNqBs2ez3qTcfXJI7B312cMbaqeZjE9IU6uVooY3cMK4sVI4SnmDC53GiQFZsuqDQqa24XOjglBz3ju4xtoxZ2twXl9_bJzSmLvvQT4W5VPiobvSuyS6bQxBNi1P7Vkqie4LzvvhfvPxa03AfoA1yB1XRSqtQOfi_7gdJF0YHMkROAlmzL-nu14r_4ayhLtIkIv9b9SV1R7y_CbkFI-7PIEIpubX3nGdOngh2xgyXU-NuqzkUsy9y2hY-vOMdXvDcs5fBAL62135H0NKBXpGot5pYuiVlgXo9IXHYrxxE-EuJFcTHPxnQIPqZxRTPaN_k3G7YfPt6-Qi7DqnMRuV-rcEwKOUTXqaR5ZneF5VRNB_ccI4pSbOcRhk", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110198786868530292754\">陳金蘭</a>"] },
            { photoReference: "AWCwydhLpTP_hVeDxXAH7suA6_AjkZZhrKZvdpF9J8CIqkLN8Os2O_Fcu43IEcPL7-2S0HyyodRRKouyquJ2z4Vo-V3Y8bBx6DX-EFV-9hzurLJEt73okWMzCkTiv2G9QYqHdtlpFJAaL3d2Hny3BH4bO2iLCwfdzS2OlNYbhpQ-xlWL0Xw09rwKMsnOOsDSSmoVGnXsnH8ycIYn8L7ZieYZB3CFdzsdQ7wT1DcPMvJnJEyQUl2JV0tajRXfKyJZaxJvM5PnDPJCj-Ikn_VLyQsYrFmQa8gDJdwKOf4d7G_WrtDZdfMKN1p61kmipRJgJB3yElH2Dj9cIORy3LCe2MUF-5zs1kF8B8bbfFdrP8NKpaZfizsXuSW7GwyFocFUtmkwor8bt3V3AZLiOpywmS9JKQwRFfGgknNwhH2KgYpQMTOEwso", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102714692030422176079\">ひーろー</a>"] }
        ],
        summary: "쇼핑부터 문화생활까지 한곳에서 해결 가능한 오키나와의 대표 백화점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["영화관 및 홀 보유", "다양한 브랜드 부티크", "지하 식품관 운영"],
        tips: ["가구와 가전제품 외의 대부분의 품목을 구매할 수 있습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 8:30; 화요일: 오전 10:00 ~ 오후 8:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://ryubo.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6853075734398325603", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%A5%98%EB%B3%B4%EB%B0%B1%ED%99%94%EC%A0%90+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "산에이 나하 메인 플레이스": {
        photos: [],
        placeId: "ChIJFewVGNpr5TQRWa4uFVWLhxk",
        placePhotos: [
            { photoReference: "AWCwydjqQci9Mr7cdMEwzDpg2oN_EOAbfHdQ1T60WWOh6UAbylHDnR37qaxGBp74dbZ3leW1LEFN9vKPW5NaOoG-DBGbK2LHXvi14rpmf5xFA-yN94P9QVM735oSsdx3imaQqOIwH9PTiFv72oBnXz6LiSFBpsZbKDRWUbrVIGqOzYvzZjglA2-gr_R7Wf7h_XPUOPnV9TfK2r4Tuu1slzYBlpqoLJ3EEze57yUNip8QuhVrykeNKE-3VM8jYQL6tTjDVbjaFnwOV3XIHu7YpZnTGVxQe53K7ng85gVEUc9_GBDnaIREyZOUBGNlCkU_KmWrP4yX7NZRIWR_iqLbyqzMjZVp0w3J-K4FcnsmgeBy1ApSI1KvSL4fLcN64GIyHiZxKk7qx2KlZw62wMekhPub7FwtN935BQ7Bu8BwUJzQM_avI9TP", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117527050057899702666\">Yamada Takashi</a>"] },
            { photoReference: "AWCwydiVeba-lRNlHCALo4Lp6eXbOq1kOCGk-NeU_Obt0LFxjms9YqONRdR1gW74LTLgi5EumhySrgxaEgUYvTrpISpcTXjfR7fB22_mL2J9-bja9ddKNji6bEVFlhWz47eEnEcgMEwqipRoexCfuAkpBzXI97cHinO2w8B6b4dmaKEuNLsBKRw4SW9DgyIVbctAJbvWu0aCiENl_Oub67ksTFEIHmXeUvf298QewGttmKQEw-mAG8w50ZXbEteyTZp8K15KcuGqdqovhweN31OYBQ5k0CnrYJXoXKiirKZeHq-n0fJfV-Bw8HqwXXFjTjPa1Vg_u7mAuBbGR80H2YMd2fLvZ2SIJgPxnUoloEy4dRzwSfbgD7d2o3THmPuSv_UlRFIUZruauHfXhr-B5f3jtM31_dYjhYG7JPIWI6XoRa9AG8G27WuCrcuDD53i3w", width: 1024, height: 576, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105725656187191467380\">サンエー那覇メインプレイス</a>"] },
            { photoReference: "AWCwydik_Pgzdy669wl8kZR0bwRdY_BvEJzDP92nBUHTGOrGZBuo8tfkBieSkWGQsi_1cb3-lXmc4jsdePqMEhkmpch3NqOSOsRaGZL7lwDZHh_rPmb6vJlpPPIv8Dh-apV2BMIRDXTzbVlc5VXma61hXcLcHG7fJI8F2gpxMU4TBSn27PQAtBJsXXDMCobE4jj9t45oNHLlC9F_AI15PwpLdtrYQZWJQnTURjfRBdMpQeEwuvqKZKew_wTTv8fnlcdojcqKcvBwSQNp__VCarV7ZmfNo1znlcwyn4ZsYyAKxdX8_dkTlfj4EL0RKZXxsIXOwjq11ilmg0oJwk737ZORwggibqxWuVCKudHDmUvrdwE5XjK2qBlq4OGkAYAPhLj6xT6IWmf1nsCq7fgZSCBp32hlEoXjQsPNaoj0nRiuj4uAOV6aa4CwgRV1viGAG7wn", width: 3600, height: 4800, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109710916127552768893\">太一</a>"] },
            { photoReference: "AWCwydj3CLzw6xpxO2pCBTE1tr6TuyxbLWb6nkcJybp_jVYz07Rj64yPKH4XwrurwoSPIfA2NRgMErXfc6tD4iKdtXTZNEheKdOqry_RoYJdEY_cPAH8XP5Z79i0IzZDgdROLVwQYC1DRU6Zy--k9DAmGCixCqKz6m1ASiRsbsvc0S_uXqM-mpxv-0UWMzrLUNWtHDsskHYPLKrBNudgTIc_Mt58vseo84nlwWR9ZcMEymXoR2mw-MpEZloCkPtFxomkqZd2CJpcx93LkoVjWnOB96ZLtecisfDjbX3WfzRHGP9hSJqQT0ykcFzP0xzcryGZivbfgjgxOffuBFEuusycE3PVgA3WLX1-UnAO1BRaGcgbRs5LYHBWAUfB2pR85PtzdoXwV_diAocXVx4jrQ0Tg8cNooP7HcD6S1xFA1SQ74TQCA", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111432285183067377105\">李拉拉</a>"] },
            { photoReference: "AWCwydiByYW2ez-BHa_mTMVTiz16jDY4Lmq7j4-zC8uJZHczKyaoMj1OfoZ1NUIk5tGRhf2ShGprHOnfveGsB8MIpD12c2jyJBpnlitSpL_-LV86XSyORqYFd42EbTgMZeJHL0i1d4xR0Zq2i5aWA2IzB5GfMRZ0wQ5-hEAKilri-sMFREGQB2EtIdk1Z79zry8mxeItqrzT9LlW_sWuxa8P3ALKGCmo6h4c_ZijVZOPfi6VacEYtWZ8eSCLbFvXIwHz82g5sjNYs5E2wqjKWxjQsyT1TsAAQN0qlKdKkiwrLoEi-BbYnsc-xdnIU29I03QtdRv_xZGVK7HXqBYdDZqDs07Iq5ABN5aLjpert_3YiTNBmXB4Ed9jyGlNby2c-R20140GuFgAI4R56NJE7UOz4A1VES10YdRTF_uitmQ8qnJodp19", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103381972515725471473\">沁憲李</a>"] }
        ],
        summary: "다양한 브랜드와 마트가 입점해 있어 쇼핑과 식사를 동시에 해결하기 좋습니다.",
        updatedAt: "2026-08-12",
        highlights: ["다양한 브랜드 입점", "식사와 쇼핑을 한곳에서 해결 가능"],
        tips: ["와후테이에서 식사 후 쇼핑을 즐겨보세요", "마트에서 장보기도 편리합니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 10:00; 화요일: 오전 9:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.san-a.co.jp/nahamainplace/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1839592170347998809", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%B0%EC%97%90%EC%9D%B4+%EB%82%98%ED%95%98+%EB%A9%94%EC%9D%B8+%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "이아스 오키나와 토요사키": {
        photos: [],
        placeId: "ChIJj-bxt39p5TQRVVi5ETcWlRM",
        placePhotos: [
            { photoReference: "AWCwydiDTAYQ_sfGOt_Wkiv9srL2YcOVuB8IYkxhVqMBoVOcZrrpKdGtwkeuimVF4pxUlgCoJgHMTmv_0oC4NCzdbmhQEmIgy5m1xzhiangiO5X9UcTi_7F8n597EOI5G8nHfwfVjAqcRQtl7_6DYT_GFvP7grMQoITfz8Z5vZJo1_fPBnFT87VlhcodhR6DL2GGihjKFgGzKeLFZLZLGxRun3zwKRlVyXN_Ev_0Q20J42LCNzGVlBa7m099LFhHCc7ZjQXa1kta0Ax6Xd5Pcue0TYUKyjqR6w7fPfegdy6HbIJaiISDSyG6OAVn7hJnZqLRAE0alJ5iIyRl-MhwuI5YmaOB4WJhmREub-bI41cas_dDNNJJUbrNcjGOu3H3n1le-SHhJRC2Jf4YWbT9d3ux1ML2N3NmMfNcZWMLBpsq76jTo1uI", width: 1479, height: 1109, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106998434836514018613\">イーアス沖縄豊崎</a>"] },
            { photoReference: "AWCwydhptlvPplOfQWlURzseflVk8lg4Oq2qs_kIQt96wVLs-bZIRUbyHXkpl2O2ueZkR8Vqmwwq06i_Y2BWiT4_2i6vQUkAo2_5YP9lge5ekWFBWEohd52hffruNI45l7fDDqbE3AEswTFSRI3qBtSh26WSNTCdW3nZtUfZczJ97rXzaiZ-6uQ5RZFJPrSfTfogXYxJ_ZDGO6zgE0mnYtkhWhi3tYtnT_2F4cddmzs0eDtHIObhlb9v8BcYh9mDgltGSInN5eFgax1uQGXn153nDr0o0O6E19ZngOKzBb3IFYE8SKIdvmimCv0eIVhtDqjB7dPYxThFjsx9LS-gKNok-jhoV1KnjLLpPZs6ShTFjnr7AGwP3ktbHzHc-945BCSTy_-euEoHwVM-rXYIkVVugkzMk6mlBk-iqYnr5tnI3O2r7AtX8Xe6hjqTzb9-QI5T", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104497587684135134475\">林信蒼</a>"] },
            { photoReference: "AWCwydjxoN_jDrEqfKstUUQoORlojhgvSQO56YKmSf6dE8RnPAY_S-J2AvIBWJiqj3l8rXHe81Kv0gvRovzC0VezitA9ksg0mKu3lhbrmgkhgNQtI0Z0SK1VXDoODfR-H9oyXZagRG8Eoal31JkqDmFr_FAFDjBhUSCTKkhYwbRcI9sgptdoBFzj4OoqXLe6ImVE6Sy23oiDsCHY-PMiuG7j6TAC-Vbn7yf8VoiGzNsn3pdycXUfKfhlFR5omB1uU0k1hCg9kfhgKUNiG0wsdUuKo6ny1jTmmMnR4b852EK6Bs5bzU16cVbnWZRNl3mdrnIyMfiqcqDNWR0ByIiX_E2HmArKDXhLEXpk-5ZS3Vy3IfGEaVDc_tEHSQ4zHrkktipIn0r-UAl9nRWHMBADKEjv1Uk7yvxLrvx5JK_2WB0TE1ld2A", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100603894219705661266\">Yoichi Akaha</a>"] },
            { photoReference: "AWCwydjt44233I5y3xW4UsAWSGRK1lrv6UMGDmmiAUdVCct0-YZVF6CG6UewC7NcBHq9uszyAa2FC9vCDpDLXrxit62V1TmfXfGvO7R3ByDO7vkTYJYntGXe84z1oWRIxGpyx5br3N7WRe2AMtdi4QpqGZd6-gRL7pLsXOjzm2oEA-cNNZycQV2f9Wl8YW1WUvuP31_eK1shhDVJLzqfw6iatu50nGgSYhzkj5v9VylHORSaUrUEaXVHVZcIidRosmCVeZq7IPsD5w7XvR6Q96sSurXWzWWFM9EXGneJahxhFWG92T-IYZkCc8IOj-jKx-UmBOxWNRuyf537n3hBE-aq927oBU8yBYISintGiJa56XKred-mf6RoTC0lz4ai4MzF8kQ2kr7oPYaJA-g37Hk9fS_AKkoOiA_ZxyyiAuAmgHSixqmc", width: 4000, height: 2250, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107618615774845163751\">Dee Dee</a>"] },
            { photoReference: "AWCwydiV1UlfrWud6WtJTv91Lu_e8H6OlFwcIp1gZ5JarLW05yCfk_DJRLIlq_HBQYiZmFIBuBzb3_CyOyc_Uu-poNyyy3bVaT0AB5Znr_EqmhIX5R59w1ECtHsZNzy5cXwZ3jro92g-tL-mxbCq-hyRRjJ26K6MuJ8YX_JuEt251fPluHxIoxm0MU0tuZJP_wIWvb9JeMppRMbulwL8iwhz-gN_SRMRUr2tsdrs5HSCWoktWCXrAE923g9eQvzso0Ge7Xn2nkpViw_943Jr03-rZPW22LN75Di4zNmF6YC9lvWVafN-UCK7xhTZr32lhglquj5FrX_TJfV6Sdcx9yIyRqtIDTeUHpGX9pskUrLinfOJarXo4HEylKUzx_bRNRNswFarcWkAZWapn85sCrztW1YpHobmXPOefcXYxiKFS6IdC2yiUoBhqRuHI5SMoHk9", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112865525484217699614\">Veon Wang</a>"] }
        ],
        summary: "다양한 브랜드가 입점한 쇼핑의 중심지입니다.",
        updatedAt: "2026-08-12",
        highlights: ["다양한 브랜드 입점", "편리한 쇼핑 환경"],
        tips: ["영업시간을 미리 확인하고 방문하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://toyosaki.iias.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1411058484026890325", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%95%84%EC%8A%A4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%86%A0%EC%9A%94%EC%82%AC%ED%82%A4+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "산에이 파르코시티 우라소에": {
        photos: [],
        placeId: "ChIJxZQf9gpr5TQRwLWyT5Osigc",
        placePhotos: [
            { photoReference: "AWCwydgzqdMQCl7w7Y3EP6vesZyXfY97hoj7AKSSX7Nrw96cnMUhY65QyGVu8kTZNlosNg1mqLhZw18aGZNHMliwXLR2IZchxyk1VtqrXUpKDiXbW7B865Dt0rGKTvyPpahtPdLZunfntZZfo0Bz-EOFoxtnbwdCkIqRnsLlT5qdXM8ulnQDU4VjA7sW3TfN5lLD-fDTM8FXSv12icY_VEeAvIkL7tJmoVcW5n0uGg4Oea8FEpQEq-QM0KzXzh4EArwawL2sHFYphVhDWhKt3lcJyfebs8V9T7hHSDK0YC_581YxEFH8K9tP-r0xtb22JmIEkyhAZQCGbYxBFPPj-eOhfUoPP2k9_2z-n0g7HUadCE7JQ3GlpXfLcKVD0M-b4THf5wXbRncV3kpiC_n402hyiRFcbfqDCXSf3-FjZUkDpEV-TpqPz_qoC07hpgCiwgBt", width: 4800, height: 3197, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106855238234952826860\">サンエー 浦添西海岸パルコシティ</a>"] },
            { photoReference: "AWCwydidXYaW30qyDm0snBI-VHrWXb5Y_ATbItViuvJc_wGX4mSo3l8yQivDLBdwXSGE_-8YjvnsCeUb4BreZFMkySDBbS14XHtKgoOCBzHxJ4_ZrqWMYtTzi_XoP0kWfw0pduZgK_4RjZ-Igy5Va74M4hcPydR11GtGYtZaaR6XhjhBPNrVD6Y7WBkbNhKMDaxGBP1pgd68NNP1FYyaL-YlEoEZG69R0I6pOoe0S68B0u9hPdxogJRotQFUiKB9SkDQBoSW528HNl5byRijXicTKxhQ68tmOPpZQ8PVaWZvsv-IEUR_m8SGPPpoml-3ze4_-upBsgrYGGH2wb0uslGiJ06mMix-8WIbBO3EW1kwhqKSDfMyuJ3CuIiSfUKW3yturqRnFIjLf5Od8KIHJyyQZuASS25bXvQiqZzVz7vnRC-Paxuej2ZV2kyqDoGrrJET", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114426405749622448128\">Miriana Chiarella</a>"] },
            { photoReference: "AWCwydh8krN19gfnAcsp0ROlEUp2-bKHKgOrM8mx2zIFZgS7es-bZ-30nWSX6mkwTHcLZT6DZDrxBJVe5eRGK2IpcSUdA4Ysgviss-8gKctKVtThVoNHJ7QOAH1hH7KE7l-QevcTb1JEfYdKrsg9trSZa-OkGeju3sMAyOdB48lHQ1Rlgi9JG1L08nrmosTb3SOxRDj19RH0w0FT2s-tGA7iKoJxibQpoctSHBQrr9rAJ7UT8bsAVU2BLEBu91PnNUFM_MtBE0IYm84F6F6m7Pa4GnerQY4_bCIoYL3czHRej7hhfDLUh0btc5pz6_l3ImiDKj_Q0_AmtWGwMqGwsPZGMVuDGrc4SUnsF7adTGTuzefHb7RGbTXoE1FNloFmvz-loVsTqR5tht8sGXPAR947gECmBdxMrZXWGoJPthDDUOY4VZ3yTl_qBLLD7Vtb0r2x", width: 2048, height: 1536, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106855238234952826860\">サンエー 浦添西海岸パルコシティ</a>"] },
            { photoReference: "AWCwydixWqhzvHJew0e0P5W2UTScattL2DIADhWcBsz2Amc3_wNPHwCu8JyFOZUgV13BE4_xC_l58Jv0GR4hRyTnQnnQxWd1RtcXO6C7oAFZRE43uk7SxwUuDsvzQ6WnS8UPnwVlTrbnI6LGg3HyorCXbBUxKxUJfMVGvi24zP_Rv4mddjq6ppFwdzTmUrM9is9fDwj3TCJVpwzpBRZxfnV_L7Mwff12Pa5ZD6d4O0vuIA1LDwnDUTModdqxSiovjSBGElNaKNP4bCXLbLpMMU1larxfm7MfllekCu8eXtN8FYmwDYcT0wFbxLb1briliReJQmuK1mMfTGWqIl0-wI_6_YlgTrfpYjjdbu8svPkD71_X3BvHYI7OidhD2uWet6YcXDETueenARE-BmKScsNg42-z1sCbwD_E5apxVvMVek_X_COo", width: 1920, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102092773587123239174\">知念ゆい</a>"] },
            { photoReference: "AWCwydiwao-o8VnY9kzIxtjHblgjjz0QZjS_y-5cNy6ycSrYEvCsinZ6AqyBx4P-a3sCrPmIa8vMxBeQ2kwCQ9inu09jk7CYMhwM90KcLCkvQg_nYChzCfgER8SCjcfIykbA11SkKWI1jHzTymx5txouQg6TXNcpuD4Azu28k-8Vm2LENUeJibaxUgIXMfjWzepRLh-d4nhtf9Ff2iz-UdOH-LavAQ5uGH5Y9mMruFkHfU4MFkx1S_U2xAN5mrbwmnhdRwXpi4jG947H7VjDzTQdljVj0H365PLXEKGT4BXxqE3J8tDC-ZOMoqjaUwrmJ2TNMyUo4BiNdXLR0Pa9OTswadgW0I4_nrSGV9Bf2VuVpTQFDWa2XdONPnZX6TZUDGLizCw_E-3YdMdMn2H919tMcgUn25BSrLdoVDjHG8tTCkKAUkP8", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106419407192406410033\">pophy Yu</a>"] }
        ],
        summary: "높은 평점과 많은 방문객 수를 자랑하는 인기 쇼핑몰입니다.",
        updatedAt: "2026-08-12",
        highlights: ["다양한 브랜드 입점", "편리한 쇼핑 환경"],
        tips: ["매일 오전 10시부터 오후 10시까지 운영됩니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 10:00; 화요일: 오전 10:00 ~ 오후 10:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.parcocity.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=543436453748848064", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%B0%EC%97%90%EC%9D%B4+%ED%8C%8C%EB%A5%B4%EC%BD%94%EC%8B%9C%ED%8B%B0+%EC%9A%B0%EB%9D%BC%EC%86%8C%EC%97%90+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "데포 아일랜드": {
        photos: [],
        placeId: "ChIJD_845w8T5TQR3PMr42X4pt4",
        placePhotos: [
            { photoReference: "AWCwydi8hTewMw6BzO89AjV61xjHGbDQCPXG60zOrNZQOu_72vxhM9IvHVEerezhRhctNe4vhRbzFRPvjIySW24P2Px_Z-7YqXdnjUMKK3SZkaBgNbTRuy3AVZ9xKjqPRe-ufwRi9k9lTBdZNCEkKHKurY4rUqIV_BAPcnVtF7DyEpEoK2iI2izbPrJbP4fNqWKq0S2AydZzwJ26pIasciOoqW22JXw_B6mqrjOa7dEBLNZG11XtRwVm0KuB0p0HxnW-tAR7isPwHbnRXanuz88WHFFmEqBms5g35zUwwFYpsRxcCQlL-hrC1r0blLjQ5qcj8NOWBBPrEndaEZXFH2UB-LBjn4hN54pXUevUvXca6ung1t54L0-Drt8Hn2nUMN4NNglF6Zm8ePBh6OddnSEtJIoeUIMhIzsoffHGvxFgq4A", width: 1080, height: 1080, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105811298234434500216\">t. ooshiro</a>"] },
            { photoReference: "AWCwydhgGbr-RJUa8J2LaXL31cWb4MgRKW6zsRpiUTj_Bot2ncVRuZQkj8Srf4OG4v29GI_j7mIAPTC1UVptmdILEUTau1vY_yqcxAlrz87lTjqK-uFgpoQdUoEPymksQzstgSMDyGOb9ilRdkbhQrmSYHFptnRMjimVKD1M_BrRXShRkGX0jZK8xIMCTKuJegvakAurPrJdl58VrvDHed-ejHcspSLo4JisL2aFhypyuH7KwNQUxzO5TJJrM6ADe3YqotoIqLw5bJdQS_chQ94ULmhHri8aKOIxF8z3aZGS3g__YpVnGfJqFnmRfkckOYTY0KYYvOZ5HbhMfTWjvs65F5Ruo-XaGLM4Drffd9lb6RagvDAoos8wDOJr_Cp_GUeiPjoDma903ezT8aBd0dKTiEEIzQFV2kIW-JcruaCTDafqRmY", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102806593966821960866\">K K</a>"] },
            { photoReference: "AWCwydjqSYdjoQXwWREekJnrySCgXMTMjTyCXU0magAZJ3i2BOpfFiuxjEMm1R3zT60SWIWXXEXjtJVSMfDl3A6jiMYKeGa4yY9nr8Yg6JFRMfbVYH5OdJEyKleRwVAa3JWJBhdKtqOlnvQxIEctu5BFCFW3nTSJpGIlGugXrAAaKffzmcXCvsun-S0dSV_J91InrN3Ax-zENJylgybzac-EijlK5wvzBtSpqads42XzzFD-tN_RTil0nZbNmtqGhMKsLMp0XfxKjOWcvE6gDNXjECAetNvCnMTm5EJnqyE1odwt8jWHsSwJ-LkLibjICPM_wccMeS8-OnhWsPrenkC5Qo8VIyGhcLf6_qIj0l4hBVMRQa8a81ng1MClEl_olGBj0HhNp5ZnfknV-W2-5eUhxHfgEXG1UCwZJ7Ocrrn7DQ9tVvzpFfzrrPX0hYKAqzuZ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111274755290187983822\">INUOsan (かーとん)</a>"] },
            { photoReference: "AWCwydhYbylz71mWZ39FByKOnw4DPsXQZS7JSeQROtJ371S19Eq9PGRqeqVPrT-eACWj3VcFBRPda_F5YUan05uYm2I3yhrQCiHhsCN-ykFVwoJE-vNii0Yxaj_eaa6-slzEuIGt0NE-dPtCqCFNnU5pEBGSqkR6j8Io-FA8PThMI34IkR9bRTfD72bm6YHIBdwBZ_GdG4TakNE2KvWva0m4uS2LXABB1TP7x0Q5ZqK4KjHq_jmNKw8kTJznXB7r7FM4UP-jQ9Z6c1mwagExhW6BVU2UJNQx5hxMxApH2WWG1byf7MDVzYI6bi7n4reg_34Gkwnj5hJ6DZ7GmuU5DLt5oi2Dw8rK3-voX5b0-WDXRrT-2_LIR54tx4G6_grf_ayJ9_sat9Yc2LMd87jAaGsnnO0Q5bo1TR0R3UvxYrSds1kqklngMv-FoCRmvBxizg", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112445971699201722753\">林信良</a>"] },
            { photoReference: "AWCwydiWMtQB2C-50a-m4KoKXUiwbwwN-9A5Omje1yG4lRtJO_Cm3dvK4esD3GfgLgrzmhJdyepR_zZxNPWuo-ivwvbE8BZ2FP1xbTiosJn5z1Que_OnR2mylsw67vKRGt3fdZc4w4oCZhb204IDyChod9zEEv8snmeaW7lsiatx20RtXKJdWTbd7Tt5zk95_EpTrEtc-fzn2Jp7HeN5NPt6SdazjzMZIbLoTDu6Gw3F3JqlFoY-qCwgEUWhiAr5i-HR3KajJF_q-eXto1S_u8umaphRWUWe70X4I6sfmhAQZz6A6gXczYtgG56R-vNfd3ggGddstu2mDL3u3bdNkofwgE4WSuqnJW1kqdHfF7O-_WoyyVAw1Eg3wA5r0pZw7T0jOkRlt6RubXOlQCy-VI9hna770MXUn3sZQghmbGJXeLrOt2fb", width: 4624, height: 2604, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103106633303728344818\">Gábor Veszely</a>"] }
        ],
        summary: "높은 평점과 많은 방문객 수를 자랑하는 인기 쇼핑몰입니다.",
        updatedAt: "2026-08-12",
        highlights: ["다양한 브랜드 입점", "편리한 쇼핑 환경"],
        tips: ["매일 오전 10시부터 오후 9시까지 운영됩니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 9:00; 화요일: 오전 10:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.depot-island.co.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=16043783839040664540", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EB%8D%B0%ED%8F%AC+%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "이온 나하점": {
        photos: [],
        placeId: "ChIJnyJKV7Fp5TQRHWdGau5JmQk",
        placePhotos: [
            { photoReference: "AWCwydgGKo4tx7a4x_fHPH3pslO6EVNe6hY900DoSodMKJDxy8XMvh5jf-sZZMXz0Xl78UnXKyTh38z6Y6hqACbaZbtG2Fq9bpes_GGmARvf_D-c33oEOSm_t2i7ddbOfw5EwVC-5GYLpfUDelj3PFmBhMENPLS0uS2f1n4NZRBjsy4Iqs-ntUvrudG59_p1FQlAa-IFGlADpTPkGM1IUJQWdz6kwdp95SpL_b8P9_FUE1SRiKi-GdYB9Ue_NtOSMRxsqbmjZYgNCbOOiGKYbvtN4lutHYvF-zlHkYgmuhDzLfWMlVyEuYOG60SCdiucl5hbGXZzRpltfaApBieEovp6Ol1veMLok2IU0R8bDDiNsI5fOq3xzBgY-5l3rgXW90AVxoZbNnQpCkRralmbpKZoD54YXNVM03BIZzT9B9NJbOrvWS-r", width: 1000, height: 562, attributions: ["<a href=\"https://maps.google.com/maps/contrib/110715082647810423682\">イオン那覇店</a>"] },
            { photoReference: "AWCwydizq18Zwyf7BPBz8-mctYa7zlikeE6a6uztC5DDXumpeAKgRL97iK9eJRoLKq4PP5yBxPHBFlO9TdZ-fll8XMFcuE-vFN-M3-P-3WWKeDjZA43nfUmJZH5lBBJOCTkXU65XP39-7zjEbQzGg00GMVSo6tan_XouEXLvZB18SrpKMkq2zmvUoVj_QlZhEsiDbbWOXjZoBivpSuwns75J5yuA-GfIDzfFP_Q1oCltAcFLZxMpAqEaOM8q-6CzgzBMEnKPtSrfrJA1BbEsGjp2K2Hq0a9bwlp3_z1kmBMXlMlHK9-5KflQFbMcb0k1zjRWDrnGUaj1Y6ce1toK9EOQIln1bdpJgd7UgrzB9cJjkzx6_PX2z0_gVCSrcVPT3Rmdi6ZjYbWRso8Zim63miQRWXVHpS46DyR55ySi8eRj8YMq26pnfmdaT1fqiIsbIID0", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/109470846431475160555\">DDT Chang</a>"] },
            { photoReference: "AWCwydh-QpuTo-ClUuQ54Em01vL2g9NEEZ5kVOAhlBY5BM9q1QYW1Ltn-3mldwUICiYROXkVOU-dDQP873bC_zNvZtUwNisH0_4qBkv2oYq4dVJwFu1tZk9ZwC1hRrapfgMO__lg98OhWBAW6W4lOj7M5t_EMrLFx5a49hf84RZSIlmurXw-X4eD2DfX5TBd-RA6_lgEfm3mjCbickCcsHUfIKUr3Kyi_VH96SLyrKGPdyxlTZU-Kmgd_oS3FTTGYax3FAV0SXEWVWNAa2ABwtDBFmeZzwLYWAY77FVBGoWVELR5zzmxeIN-QGRS9Bl9-pjaiz752mgwQKFLZHwX_RM6EJkuj8ORH3bBJ8cKd7Ld0xfMt55WFW22ZOg5OYnF79wmwPyuttZa5xcrEqQl63io_YF-ha2jL5pRi1H8YRo-A5fR3rCa", width: 4208, height: 2368, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105440870370160228350\">陳佳憲</a>"] },
            { photoReference: "AWCwydgAmToN2xFhoDxkYDg8RNtq3Epoef6PQylIYWTR7PMCcx6JwR0Tvmo731I5AsT2jhwt4jghYtlgXFawOQJepAel69x1CUXwkiuEeA3EFoSsaROJgfg2jf0yxFQj27mJkvTeox7cuxWRexVma7OSMRUcI5osQwMSRLgFBjKMtnmQSda6INtR2nJQIXuTsxIXlc15sBHVCspPtaTafGbF2Dobg32MI3Se6qlPKG1FoxOvd52fylejrIzT-UPWF0aQl1RNOnvTPIMMPvSVrzOWTU0syNUzKyg_GWxsnnm42zjZL5eFQhM2MFWLIoFgVQm4DdBVzNBCsG1WPfKOScehBqlqLg4AnwbpQ56WZDeU7qdDB6ApB8fc2o88bgLMpNctiwJOyfxaOawvXJ8qBOYDeSVlmmq59Zafe03J2RpP3K4", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103832929823822657186\">亀岡うさお</a>"] },
            { photoReference: "AWCwydgTrQPXAehdnNZZFn4HeIzRPB-sbH0KoSBx6uVsov35b0jn_d4GLpwGiDef3IwE8cevX6H9yDlEDHAyCNNpQpl6LeJtH8uW_UqfNVcMEbr_aK8P4E-himHQZsXa7zh82R5KaLElW7gqIuOw8Cr-WwOizXJ0U2sZFvJ2Lbvia0WUXlzQTAIqnEXWn3QvWy2_0QTELeNtNv-oM3QaP7RXLu6Uzp8V5HRGjdfY8LqpU46r3PNFTnvCIEMoyl-jCw0isg7w_wsPVyx85KG20q9u2T9AL4DH9MqreX7o0NkWNCD4x8PD3ZEJQMCp9YoVgpC4Rli7pycbzvpG1ZkoEy6lenPzRzlM_rErGDgNIVgBoMtW9WvFm1l-XdNaZc7rDVPgVqQpP1HMCFFRXy0NMmM-xABCZiPFOrGnye2024SJOHlZtw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114378900391798564827\">Allen Yuan</a>"] }
        ],
        summary: "고객 만족도가 높은 쇼핑 및 서비스 공간입니다.",
        updatedAt: "2026-08-12",
        highlights: ["친절한 고객 서비스", "다양한 편의 시설"],
        tips: ["영업시간을 미리 확인하고 방문하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 8:00 ~ 오후 11:00; 화요일: 오전 8:00 ~ 오후 11:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.aeon-ryukyu.jp/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=691665306112124701", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%9D%B4%EC%98%A8+%EB%82%98%ED%95%98%EC%A0%90+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "플라자 하우스 쇼핑 센터": {
        photos: [],
        placeId: "ChIJWdBFDmQS5TQRJbK80lBfDw4",
        placePhotos: [
            { photoReference: "AWCwydi5-Cb7ocAUD1O61rHsvV5ZQb-q0YS-fWQcRJQsOz-W6jwMGQe_W5S5nAJ8fpv8yZnf4APr08DNVTfEP5843gxw5c_NzSaf2R2a_k0Yj3hKAe_jh3E8RBlHJifTJfM8PgtrsRRWrqPz_Y4T0ygOx7sSP4a6zw7yd4jKxARjP-_a3OA_m3srdy14vnt95MjC3GfeFIL2M1HWqgfQyjD3MbVPEKPF_dhHUzd24xMh2biawVzIt59hyQwozlN5Rdkd09tUUKeXs_PRS6HUyllSDO9vlfYmFAsJfNw0jV6l3ub1imuxmlBIz_GrqNbd2lOeSAZ7STfrbWvbHG9LLQhtwovGn2XH68L2VGNkugBZSUMPBjZyW_T6H6lzZ8uWJISjfIMqEp11nlmZQ-fvngp_WC196ZsbSu3P-5OXppuv0VkXOw", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113138013889396502435\">Z K2</a>"] },
            { photoReference: "AWCwydgfUM9VQVZpnmPWd9tZbAMsqWqRGF-4PtZOSN3PxvwFSAUR4me7atTvmfubottl4nFrm_kpmXfpsazWH8mhXqoscjrgP1oWQykR-ErxZWbNzE-mFAz3-wIr4P6yRSsiMYuXhbcqLFG4sj_CEgoNO5OzlUGnHpavL-OehJJR1RHsYaCwmjViB1G52117T27xtOT45Re_Dfpts6RMBQbuBJb4WtkL6tZrw7vcGx4Kwcm0NuzHeRiRwZG07Oj2K8MKoOnwxo2iHXhmyYxGKGpYwUP9QUiX93WdVFLOQJtA8PzmKUkDgbDilsV6VKizd2oJE_YdIMeF9BH4UntEIP25OVR530Hm0SQ9zK5a8zIKP8PM95ovWfUvipXzNZGh8LsfvHKh_OubFZUJ3qjZJF3d0NqLMEnleEzFOvgDwiu7KOOCGj-AIpqEybY9B0Q8FQ", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115121422792451523259\">イッシー2000</a>"] },
            { photoReference: "AWCwydg8LE7-SBwiy9YaFvC-v6AaVO7AUYyK5jHKauuHsXBOQRUQfJghwmB4MsDh4oXGwAJvHyc7FO3YSrUh2ck4CARdvFLQpo3m-dyd7DuZqCR2QlNZvVLyn_o5Jfo2Fu7xPF9WhFHrhDlh2HZgXbqnclHxyknOH89NYtVHEi_z6MxOi5snMr_5_5NFCd6bJvh-uooLzhYHhHce1Kfb-nRgv7_2NmMxuCRPLZqmO9VKu4lNCDusnPph52lCWMmhRmR6MLLsGyhuEY_CvzsklD9Pf9v27sZ_gETi5g4ziHnfafX-2hj5Gcpzg-d7gjEE9HOW1DtL8D_TwIHp3ZHaisONvuxz5zdXxm1cC_-b4050v3xcgYeSH6wOGgyUiNEN3A4ZtcROolAYzsDf2Ps_s54AhewRLz3cjs49FRsIsAthlQuqTw", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117527050057899702666\">Yamada Takashi</a>"] },
            { photoReference: "AWCwydiY2rXw-OB_HFMOzlZ7P-A47WCSfQB1LpDXamAGiQCpQ8sGCtAIhuMPtnLOzZ8y3Wz2-o5a5KvciT7I0nJu24dWlYSBAUzNwajxUutVZ1lg6H3SUF0nqVWgUlU5FwD4LzyU8VRaGtYHLNRFUbpXPat5cXAnJnkt6zL79S1cYs-teK1x29exO5_G362b9J655QBpcG22H8KZv4gmu-vgemN13cbmiN9ErtuwVoJxx5pjRCA3Ono_TqS36CK6L5pgss24kIj5aTs80AqwiP_FG3awyoH-QnMM_k2y5ggxWaYxIRjPbk1TR2qnGhJBTsCp7z6hhkMbhGiWbnSbG7Z0RvSKRflDrsRIvztOnUXjN7V_mtzQAF5z-6Oe2G90rGP6JcLc-qxyGaEPhjXy68aRyUbfAqE4TpxOAURg02KHDP-gFNtK", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108396983054720957922\">Yishu Chao</a>"] },
            { photoReference: "AWCwydjRJNp5ETeh7QzgCdE2w1zbyDaF-Pokpiv81S5Cxakwz7GJtutFrfjpQebN8Kzv9KVBBsiiZkOSG1q53YDRB9nv11mpz07tqgcPBww1h-5keJFNCzBNwKr4lDZbtg0wdVxpQ-wtzezyrvMXIkt67sx3c7A4lkpLWJ2p5JP_27H_JUWssXnl6ZI-4pjWEYtf37Wo0QwBEIpR2dGSD_V4SXND7PdWBfWIUr4-j4i1XQxU4FB_fa7JLa5vsrAtl4P43gd7WWVmOPQyJtlvgrhk1LlIFEvUpszMJfu5tUFA1mNjbtNKpfpNLGlvh9q8Jc_LWy3h6HDjijeOiCPbRmuZbx62AhOh2CL7ZI29l-wjm3YsvKHL-dXLGsS62xO0MZyUaF1H3diG_ZySxm-2O-Kfw9bmO7zOgOO53gdtNX1TKqKrHN4", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116438708007155690135\">そうた</a>"] }
        ],
        summary: "다양한 브랜드와 매장이 입점해 있는 쇼핑 공간입니다.",
        updatedAt: "2026-08-12",
        highlights: ["세련된 A&W 매장", "친절한 직원 서비스"],
        tips: ["매장별 운영 시간을 미리 확인하세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:30 ~ 오후 7:00; 화요일: 오전 10:30 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.plazahouse.net/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=1013133241919255077", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%94%8C%EB%9D%BC%EC%9E%90+%ED%95%98%EC%9A%B0%EC%8A%A4+%EC%87%BC%ED%95%91+%EC%84%BC%ED%84%B0+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "온나노에키 나카유쿠이 이치바": {
        photos: [],
        placeId: "ChIJxRvW16Ya5TQRubB2b8hH3Cw",
        placePhotos: [
            { photoReference: "AWCwydho_RM-IFptcd9RcR8SosjdI4yz8y1euPkWvEbevyMRAiue0LRbkuIAll1eFBQUqH5uKae4NkEXcUeNV6A6l8Smvt8gVfpv3aBzKWfaYcojBn4Kt6UjbfqxYkOrS42bRfbWo59Sk_DyTR9rav9k4PBqCGdvCXRpeRmIQpg7l0hRJVePWEKIbvMWluvaOqJ0iKOJykwSCGEoKJ9bKDJTFF0Ge3vil4BxcgApP-jFPbGxtqyprvmdSXIGuCIpS2KEDuABsoxPC7ZKfgfNt3m1h7wum7dVLcJdPJj62TRzF158EZ9zqFmOIYdpbrVkrhiRRWVmiPLZaU5BiCN-1c9AuNe-r8WBjmg44QlsGU2Jx9sSwpoXfX6nENnoMTZqEu5YIy9TclpPVZGaroTusrKX_klr0dhuKbIwWW4hCrebMZoMSK1x-7MzOlWe6satsQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116705743767428096382\">おんなの駅 なかゆくい市場（産直市場）</a>"] },
            { photoReference: "AWCwydiaoSTsDddcjWwl4603BW6jniIvlZ6psenmCx4LhSRUmbehew-YrpsE6o1CPkN5fq9oXId4nmR5vbYCtxxU_htWv5Rw0eA4lufkAB7xaHxyXvEgbb5ywa-ZRznGH2gx0wSeV9RTn6YEuneeJ--904YoI60nSH3xyLINwlokOP9-392RLPEkRPey77bjz14tgmgIwKt-gakX9FuVoocNvjJ7I4LS0yoafccTldNpNLIzkC_mBe9aDvGeu-bsExjse9VsF1H092SxhBfvxfLHewvdXeKevWARAkZcY4xUKaCXgjiEUtaDh7QrbrHiZiCY6RtKhpyov4HjsMxQYFmnf7JnkTNVj3IxR9bXo889w1wXuGxuLK6d0g2crKy7RfcX1iXW7iZjnUwPOmfNAbl-H48Q9jBKzu8w263ibsPS3j8", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/101610245567431435868\">Sunawachi</a>"] },
            { photoReference: "AWCwydiu53Sfi4evX7BALQ0qvdToxROOHMqWVayz8FVkHrkKeiHcMaBHkXtSn3KYDr_FZRiXHuJiws04-GsN-ptOeJQXwh37rsVbN24QAwFbv_130DolsZsXufx8bo9Uk45qSdJ7C0z9cPMpS4mge_eQGkzF5r5YmbOa0704fIaaq6FitfLaZjStyl8cc3mHZafTjvfWmuWeodu9ZofG1d8vgTtJLnMDPmSW4D95HZHHET57CO-TemBuxemnpkjLNNM7A1x-b86x23gb5tYrAU1gex2DOVRglBbeBAEQsmZfXUpvtLSyKNyqyWbkJdxe_gSwCQZWWMIpg8eAhqi76IjGxSUKZf_eMaXob1-c-bZtIaq4ym4IxsVfyE_Obl21tVg_7ZP9pS3dwxz9YdYI4EJbIV5hYUTVZcGf2Cm5nyKi7Q2obArCfnHNdSG6VFBjYXX4", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105467539154941724284\">Nani Pikake</a>"] },
            { photoReference: "AWCwydibeRhslakS34qM8vsikqtjoCcN1eDbBhDYDCJh0Oazgu_pXQUrtFH5XAIUdjH3ps2t_PyzQJYVgJ2S585VFMRxisWm9Q-NxgoDWvGmICFCSZcFjxpXycSIEHxXBui1MLXFXIKRXfADoYU1htdfvnxQf2VYR24gstUho-QlGLsF9zQD8xceV1ZNbsrvu3QyCAahVE0EUKWquAvzZooioaby3k3TuRTI2x8PEVhrtoifrtJWKPIkeHTbpzrPWWov56j-jf8hfjeTN2LVFXQPNPOqmr1yCc0ZK1sl6W4t42g6YW3iarPwqEw0RQCk_RwGtdtybE8OSRQJDUI4lIvPOX-cbrTv7sHEjyuHyo-bxlnyXRj4LhEgXHEglNwE94AX0Ny1RL9aPnM_Go9GGNC0x9XVsuIU3LPkXK3PO9gHUAoH5o1tnXQE8X9xcvnQF8JY", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107761305955495176302\">つばさ</a>"] },
            { photoReference: "AWCwydhWv0jApgR5BBszdgRBycS5pFMVMRpjn1IlQTNCoZdUuLjzLUFrpSs2sFq5Sp44A5HOtTIM19HvXP3zjZ2bUOUW1UPAKdpMa65WMXv0UFOl5Bs2DF4tkyLw30WbmiFm4p94h8yreJvm4B_N47cZCtBwwwwMclmIYHWzTriLHCviCfTzIDm588FT47LHeCk4fPGmtfzInySvtuNfk4VaRFhtl2d-uxZpEx438XkCDsn2iWEJZCQ04WKDVoO7qPTtl2pCQN77Z5doG9v6zLTa4remv77mWjm1eSR3ol8kAtxEg-h9EBVjR68KFwnsE9fl0hLBEPCJUrtOEX-ghywnvLJQ6hRKyNWLD_1DvrK6O5wOxCbVlJYVqnDRrywyYHhnmlHGSdajJqV_JpqBtecyugpsx_xluAJPaHqus_5IPu_QNOMo2VkUqjYjC4K6bA", width: 4624, height: 3472, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107457074266537572631\">Yoshiaki Ono</a>"] }
        ],
        summary: "다양한 맛의 선택지가 있는 오키나와 대표 간식 전문점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["오키나와 대표 간식인 튀긴 도넛 전문점", "다양한 맛의 선택지 제공"],
        tips: ["현지에서만 맛볼 수 있는 도넛을 꼭 드셔보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 10:00 ~ 오후 7:00; 화요일: 오전 10:00 ~ 오후 7:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://onnanoeki.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=3232537558734254265", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%98%A8%EB%82%98%EB%85%B8%EC%97%90%ED%82%A4+%EB%82%98%EC%B9%B4%EC%9C%A0%EC%BF%A0%EC%9D%B4+%EC%9D%B4%EC%B9%98%EB%B0%94+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "토마리 이유마치": {
        photos: [],
        placeId: "ChIJVVUV2ipq5TQRokk51vsSwDc",
        placePhotos: [
            { photoReference: "AWCwydirAziPrUx8EjmknL9PGDU4ppJwAmkevirm5gWW0tL7vp5BaF0W-I4Q8G7926B34Rq0wOnS9DztkGOuntbodbUGGz1Owtiwi5927AGGZq6p8nFLP7bjP_UPbkJNbcc_DkYW-eiw3rSfb6HgpDYDMbPAQ3pSW7SqCq9_9H3LV0RWcRtAqTjEFA4w8p3MURcw67lp5D-rqN1wOYBYhHrqjeXrUT26TjwGcrOQEF_g1lvkxHulkmhuQUW0XK8PdnqfaEUln3Yp_eGcYWRmloKg11VFo-HEUXEtv0kpnMLlKykfN1c6iilb4lFNHVWt9190ciFzyUpMKhPsKeGoDcgKqCR7UD1czVveqJHAYmE2RvA-4nAVaSfh7oAVM20-AIUmzHkbKZ1JZgz_sYOAxQJct_D8vvLSrgmknZHwZHJQA3Xz9g", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106468958982602997771\">Yang Evan</a>"] },
            { photoReference: "AWCwydiztPJq-Xgagw9EoUBUoxvIhKDROk7ICqzZ7uzpAtiMx3J8zqQWz_j70nGnPszdSKs1gJf_kM5-ywp-9kFoo2VVPWS9NHcxtJjvvMzCvyVwiXS--3RT90CaskpEZVDSRT46G_5PriKBK-31rpdLa_MegChFoEjvuS0ms01IQYm1bwcgh06rUo9fae4pXhbHj1yUgdhNk5a8xXzkJhBji0Vty5_XUTnG-HXFHBeJ8d5fRqFh0Vh1rmgyjSgzAWCXTGw8LJ7sWyVj3uEvLh9E5VRNEj4obDBKZQSjHeGdKgH-mxCwDIqeJ7yBsPWo2oF3JFJz8f3bt3yEPDw52W_Mnx5Leu2IxI8KFg0cxFNeoAcjuKLai5jjSq7qS9s37VZAEeTzLBJqRSN_AQsBZcJ-zOXcv5yikrZgCeMA8a4HMxyLYhnBltucESUG3MKYClt2", width: 4096, height: 3072, attributions: ["<a href=\"https://maps.google.com/maps/contrib/114426405749622448128\">Miriana Chiarella</a>"] },
            { photoReference: "AWCwydhL5fHB68smspCC8INeLeYCDXJMMN12ArQvt0RgZCP2lzfHcBV68Pr_z9flS5YHNUDoDfVSIo6xHRnaQ5YrHq0oJX8D7kOwXzk1ZeeK0LBUjqKg5xMJ2x9EnzNKHmM7gy86BD-Q17wsfc3OIftjUAdulQAoUy-AB0AzHsvVGoDtJoE8pziR7kD8U2H0ad3k_zX8SELu9P2OCes6EAr8YV-MhvxFLoqVZ58yfQWboEEfdzBVPlw1dhXZgzD_P3q0n-wrX5xyReLDNQtGm7Vz3sG_Zk0GehuPiiRCzslrfI-8FJdZ5XMaSO4cZuH7e7QNIkyk0xfmA26eVPG92-9plJnXPy-NxgsxaQtJYuJy0KoaTTGHPbYBgV66ZueXavbC7jU7Cbg5iFWiVSemGFxqS5eg1bdIJLtwTL-pYXYphVGS8w", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102355327716118561424\">Bad Apple</a>"] },
            { photoReference: "AWCwydgy-HKT5sRPvu-3J7FGz8Jpg_6JWeXdixpTQe1Si3wxLqAiAHmUlOi2S6Z18BxygxxtrvyBBZ6W3mcCmAX0xjMwOVmJs4W40Vm7EmxyGUV6ADlOUbbq1EyiE2DI9pofAZI0rDlvwO8SiQGPmAgxNT-dZ-bHPTpXQxGbSlaWCcUK7FxygMM5j9BmkrXYJJOX-80G_cX91h0RzeK3FSZs_O8XTGrRfJc_oiVI4ZCwSbmdQ5DEpAolkOjWucsdGqn8_NKqZn1S6om4crfnjU6TM9u2MofHzAgDl-mqc4YxKA80XQvjGfKPJw_zCjrycnnemIoAdIfbICnPFkuWqg2wHa80v4NWsezvxh-QqTFw8BkV4kPQ41Nv43LNcIhnulsTgXRqTL8mb5cJRtkPMXrdN2UgUlPnatH5ibhsUI1TOzGvUsE", width: 1010, height: 673, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106668607710872763445\">陳東甫</a>"] },
            { photoReference: "AWCwydiLSEzkc1CC5nOd7ss-pGKfrlQZ4wfFQf64hTOtkUYaDBsovNMYnc38Mhol-0DRqbrO0faAUA3fyaB3pB-94o1g9aYZNSoP5gIQnUJXhiyK5eJtxWcuUUS4thEXh4616VUbzjB36SCW8ydAuD_pfK8kC_QnDOmz5OwHDSkUS8GNFm7Dh0yEdH72OmhKrRl5shM2r3s5CwZyPMVbQbMyHFJzD-ZK9WSuGzBZhwXSyYvIbTjOEpNQmvwh5t4Od64qyERx-Zr6AzHIg4iRKAEtvdPWjT6QYfOciAp54ms1A7_QLsUgaclrSyg5_8HNMLiDDC6DBpP8ZeQGhkFrZaKoVGPEYgDuNl4wn94Jvwl9wacdNxLsP71HmL55qKOcjue2XdecYDvxKUHWc8k1Uy0Yw4ePrb82xQ638mhoyDyXeTp6O7NpPXro86hAzaFLAA", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115340149415386201890\">wenyen hsu</a>"] }
        ],
        summary: "주변 관광지와의 접근성이 뛰어난 효율적인 시장입니다.",
        updatedAt: "2026-08-12",
        highlights: ["빠른 의사결정 가능", "파르코 시티 인근", "나미노우에노미야 인근"],
        tips: ["주변 관광지와 함께 방문하기 좋습니다."],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 7:00 ~ 오후 6:00; 화요일: 오전 7:00 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.tomariiyumachi.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=4017231740454652322", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%86%A0%EB%A7%88%EB%A6%AC+%EC%9D%B4%EC%9C%A0%EB%A7%88%EC%B9%98+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "파머스 마켓 이토만 우만추 시장": {
        photos: [],
        placeId: "ChIJxSbvMMJn5TQRcVN-hKOaQ7A",
        placePhotos: [
            { photoReference: "AWCwydj6Ra39m9co7QMs-qS8s6xHj4UK5rRB-zY2XFH9Ryu-ggOL8fAShMV8_vXPzVg4SgphL6etjInPAtQ5rNJm4Eng3H5PWanPzmlfKoZAqTjfK0zOzATnp0Dyf19qyf2uVqAh8AfBwYrhkQCNMdi8Tk5_iobCc2a0sKxiv124XOh2nHm68Q03ivvlDTxdG4NcjID9VYpcHGp2hSImLcBgFs0v9aXQ52_imJJcw41LsHrmiSGDk7QMkySQWk6tz6cOuyUOdQ6ZvvRniqRSY-9dmeDT7YvkwMNm3iAT52PV84iOUeAMduKY7h3eZsx7Nk-Zvvz9FY9Lqga8MBJIigvj0pAgXURcQpKGgBBU-HARbIfcmgjktUIYqWj6LupGokDleiqSqmkfB_LK6knf7LaTXPa7TJ3WfDhGAVSCHY2a5Mzq_W4", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117017516465146929783\">seohee kwon</a>"] },
            { photoReference: "AWCwydj1k0HMZffguxqNJ_kdaIuDEMfZPOaapzjQ7dpgcTYQivT97Qii9lAjYNZzV13ABvffvPlzdTvnWSoWUDK-fLuL74X9RuLXDvAO7avSlSdnRGUy8Sfo2LUCoxGwjix3lXBrEmwq_dUCG0xtoHLdmz4tNhuNjkPBBEVjkIQ7qiJRKQ7Lp755auxo8ioZM3tW3mfaIbsnlnXfXBOtMkiHMPkS5lRwDn33mcOpKTGFZ2aOh0DGkSRXTffNPZr29u0mSs1nI3xBRF-nbCC1RVNiL-TAg1RfpK9EEnxnlffHo1lKObzBnwl3OVHOMHeHTIiVqdMMhv9LMR2QMx9Bt-aAae8pIhizuKavXBTLNjWByUiFhfhT21mmq82rIZGqgl8X95WKky3cYkf3glB-aiIIF_J1f6i9FleeDmYi9DEE7RJkRNUm5__MpJCMvk6aQQ", width: 4800, height: 3600, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117447931282685035977\">ちこ</a>"] },
            { photoReference: "AWCwydiwkHvuFtI-34qxKaJG82tbwd6FrHgSVpm3aLldlcq8D06-XElg2tB5qe81UzW8E-Fz1h8Uhy_qqB7dI-KlO2jAIF4-5quOjdkKR51uO3vtN0j6aNiVSbvVOMwTjN7M19X8-ZXG021ikaI6OqYTMTuAwcBdUksO_KJZLa93CbJx7_Z1kzbVUEcYUg37XgaNBeXnbWaqnGTM9Hx9CNQJa2zqiR8SksFYj3qYkgDKaowGEGDGJdZAdZbAF_BQKifBChHR92Rm0KZxICVT-L9rqbYr1BVaQVH6GI4na6ymqxtxIabNJ_7ZFzZDxQTWHjmqyuV_CGUUlPdwVafSJMmdMjb-bEW5jggROEm4M8ag0k7I9H5Hl1nBSwDXsDQB2mRB95KRnjsWcyKM-YeDSBRpZOFRea1N71zm1Udk-9gnfkHBPg", width: 3264, height: 1840, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108058501277816730650\">SCORPION PAPA</a>"] },
            { photoReference: "AWCwydjavFWYOi9KHJuC0FEgwa7XT7nrzxq27idd_GE7Tv9iUViWhOHrRJOIfvwNBc4fbAXf3KBMFiQQYy6mYdxCd6eF0KLFj986QoNrtL26Fc67jhXRlYGkMmHHVAhJYYdaKW--7zo3hZSjd4AdgR3D7D2fhEI30wVkY8Dg5XsDOdOZZnqAwBoRlbJnadv5bc1U8wOHEMOORSsJQG7-vM0mjP7AU9plSmnJezo802XIuXBy79lL3gn7QgYIzgBEAUzCEZa6RoRmcmRdrwhmykb5_u3pbcYdKU3tIlOsvG6zl0_3w0_yJ9Ftl1hNS9lb78ZGG40jeoMHTztaqP_r8gfjkGKRAQjhc6hNievV3Pw871Bpf8YTaJoVIUllrH6j-CUiYchGrM1Bj72zho3ME9nI3q9_54bozlLUTu9kfJEF0REsGiq-", width: 4608, height: 3456, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111612398546268755319\">HYOGO S</a>"] },
            { photoReference: "AWCwydi-l2LH_FvtdgBNC_OFgXvciVwl6vXXl5zdNeJ5298KEvsu_vh0tOem2P_6ohfGih6nKuaXr66XLww9GLFAmN1k74Y4NZiyieZxNMWP6dQRm2L6ds9L4-7m2yEdlKW70JpByv2QtRYe-QtP5JlT2F47b3vIk29eAV-N5Jh_2Ex8e5CmYSJMyEbKEHYZgQ0EXLqqdDM_y2WXKxJXhCW_5-dcRBZJODSOo_UytGwzl0SqNI3ZqpQKuT0pvx_IzlnZrBfhqxUzl8ssHYbmSXkUD6QgSLskhwaveq5GKyAKIb2iCXLX1mvbUG1hR0saAQifq0IPpVWbi3HLcmARnhpkmS0ItpsZwpHBKviGFjr0gH1MxDGvlHMWHYMD1pUxQu-0VJ5jfoorbu9O794o4UMk-aGsDZ1RMU2I7787gMWF44__fg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/111582797180852807103\">LINKS OKINAWA</a>"] }
        ],
        summary: "신선한 제철 과일과 기념품을 합리적인 가격에 구매할 수 있는 JA 오키나와 직영 시장입니다.",
        updatedAt: "2026-08-12",
        highlights: ["제철 과일의 저렴한 가격", "다양한 기념품 종류", "JA 오키나와 직영 운영"],
        tips: ["망고 구매 시 직원에게 조언을 구하면 더 맛있는 과일을 고를 수 있습니다", "옆에 위치한 어시장 직영 가게도 함께 둘러보세요"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.ja-okinawa.or.jp/fm/market/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=12701165401208148849", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%ED%8C%8C%EB%A8%B8%EC%8A%A4+%EB%A7%88%EC%BC%93+%EC%9D%B4%ED%86%A0%EB%A7%8C+%EC%9A%B0%EB%A7%8C%EC%B6%94+%EC%8B%9C%EC%9E%A5+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Public Market Alley": {
        photos: [],
        placeId: "ChIJDbAHnXBp5TQRravILqFwLgE",
        placePhotos: [
            { photoReference: "AWCwydhu3lnrUbB6MRz1UcesvYICTX_UB4ztwh4zmq2zoALh0GISQyeJyIQ7bQKqrpoI5WjrBx_BtAS8GncCA7EhwK65Hey9SkngiLjkL1YYSbb8UA-p2qs0crOM7aXCVTIoGg3SMc-DZV2ASiywjVC9bcbp3ctPEzPZ67EqnvTXHYY-0JjkFknkWx5K64olQQF_7fNIkkelyehrYz3ywUW0i6qg2iW1EvllVG9nonftZlqbATr_Z-88QEwHkgGXDHYGrE8WuY2b6pxk4b7XmFM5hyAlDUscPG8a3GSqcnlydwKjvxwiHIsAZf9LvrBgeqP2nINoHJTlm-XgOGN0CLLbYkjQQ1mCXHZ4_RVVWSHpxA0551bqE8Ld-teGqoFcgBe6fL-94JGqgoAcUmVOBMocy68aKWiQPW5cyRwJi6YH_pUis76POeouJvO3GdQ8iw", width: 4512, height: 3008, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103614101794116587983\">鈴木健介</a>"] },
            { photoReference: "AWCwydij765a-ghm7CLQ6tkzjnpRPvImx_DC6Mh-Cmk_lh56pFfduKGtMU5EVKNJdIGx74IYz2oM7CBxcIwrxtwoH9MFdOl38ElkEuN0Sa9AGRbgdcu88RbLAqdvbtuJmR6E_ljrSq7M-IZHxGfoo65X7ADdPb0WHJjgIKXlZsZxpdb9MYLRgRjeu1IEQc_0dIYnyFGwdM-VVQBXe9xO2OkBUffJyEKVKJdT75HW68nytOPazo7cwq-XdmujCLcz88dV04_dh5f2ftmkZOqE4FoyK11kgA40HNGK_zWH6nZOUVtzisapM-n_5Wz4wqldTcfyFo5L6weCG_ba9EKsut5JLgAWE4i04HCwmTC106SYsloXRFlPsLKGZBEXBEQE42bxxjK8t1WnqHvmXUTBTqZWJqKIjR1uNlN9GV94dISyO5NbijYuTU2Qi8LCbrkflg", width: 4512, height: 3008, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103614101794116587983\">鈴木健介</a>"] },
            { photoReference: "AWCwydi3vSen5Vm9S1KY5KdNW7yG6TrX9GSQIlVKtsrjLS9bSjdFQQl6SEKSOJrxGPnmsQBGnsvvRAS4qiujdG4yXnsGbcaHYpvSFpUeuLwQfymqXuTQQlntbA38ptUwENzxlFOfNhFkJvbDAP7wx48ZxSHo2wxWjfcxeu_yflVs4yEVchuK1Ey4bWaGpMuwXpuxjN5ZTcy_Wb8g8r1-JeDMU9GYzQyb4zWOFp-9OAhcKkeqO55az1eKH2dfCpLN-Hkgkg_XjLAIZ6NI7JFn6SzOzjsvdBxiTQeIaB2gBFIWrNLYsQwb0iFEurgZqvC6z2MbcFWDfrTiCidv_F4czjdSdvlMAhNxZtTf8mz57MEqhwxXfVANw84UV1KxI-nI_LuXKfHsemCq0QTbMJKK_9Cwwqv08-tFV5CaU4pVkSZVo0rdo9s", width: 1600, height: 1200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102066185136208854412\">カカオ.</a>"] },
            { photoReference: "AWCwydgzN4yh8HiaQPQ5mqIWx2AGbak2q-EEi6Py3jsIc0rX8e63RpU5zW5wu1nAsy1n-0yIsjwDLd0sjJo2oih2A2xjjR74mARqfDB1q3RpqHpOdhn_Df4KrF_LpNiqSz52rh6QXbacINRKlIseQCMOwHQ20ceXOCl-ZN1jQ-cRz_6VDTqBuw7a5ys22xMxZqZwJnCK6992sPOsAT7TwNbEcSQXdw3Q0KCKiRG1glXYbJ5L6VCsDWsYLv6lg14UHOh7ZeAsJZe9Pmz8jAJKlPzp1Cy85XEm5iHbfNaStYNC3MVASqVDlPihVAcBLOAT2fxk2CIKoinaKSKdVkJxTb_EPVpzMVfnKGvPWGyuS2zolUz9ETd0Q7xemo4wbNzODXa0aRVifvLMTyqPVtknAtVUPG34LSsdcSW4NT_-VdgD5w9k1_8t", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118192990929795059486\">Takeru Hasegawa</a>"] },
            { photoReference: "AWCwydhhOFHmKz1B9XYE5ne93q43KX8o0pu1WIIfTo0ijU_sbjK0MZsiZ2fojAgtWp8z6YTXpN-IEftq2OP6wQ8bwlYyYC0l7xhJlekqfEoni1Ra0N8OzNnQ74ij2uPz52qV3PCEnhRRcVI5fTa2lvfUw8QUDXi-mY0q9MY7SboqWxrN5uJoDMsPniGZI9TZU8UUnfBtXujy3mvcOYVf1D4jKOW5maM7ZJQNpqoMgT5ETq3-rn8dvo9y62Sn17q5Lzpd2bo0CN1ZyoYpFKM2t2zrT_4e23StgPc4j4Xx5mS2wOpkfKaNpYxiHweEgZsIkDPOEK-Ja5h731bCWzsggeWbZ3D_lvYPoPLiwdIaW2FDjpdLNtxzqyBzGvbo1L_dauUCzTZstyxTc76PvQ8xUbu6hQ77Lf2FpThAZeoKLK8CRdPZvA", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118192990929795059486\">Takeru Hasegawa</a>"] }
        ],
        summary: "오키나와의 정취와 활기찬 시장 분위기를 동시에 즐길 수 있는 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["오키나와 전통 기념품과 잡화 판매", "활기찬 시장 거리 분위기"],
        tips: ["아케이드가 있어 날씨에 상관없이 산책 가능", "국제거리에서 도보로 이동 가능"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 9:00; 화요일: 오전 9:00 ~ 오후 9:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.ichibahondori.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=85129280543566765", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Public+Market+Alley+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Itoman fishing cooperative Fish Center": {
        photos: [],
        placeId: "ChIJnfH0IcJn5TQRFTMsWWcjFlg",
        placePhotos: [
            { photoReference: "AWCwydgpv77hjzQtTp7MG0BjQ3x6yuRAFTSi_kUKf_Vg4KYP5bwQ_962bZMua54cahcoB8NY8zctIOq5_b47ogeD1-9CxHBuDBImP8FxcWIC9Su12BswI28ImJXzBSDFTgsoS1xIUhkkR86Rmk5-_o_W99k3YgIpuvcDs2BZ-qm5ul3X7NZ0nl6C_XHPccUeqcacd9_r_sjnIFU9UJXHxp7_lcu_5L-6pX8NbohWu4TWMPP6k3YKnV3FZ-6G0MnwMNSHpLucpvHcXEcZNvuogHQ8jdjI2O0iIVsbG1K4_r-JtwFKON6zcL21-2IOBORhCKAdYon-dROBtoK5O813KKGCydGylR1saur09kCe4PG2DSh6SOPDm29Lto0t2X11opI5DIOxzE2vo07lqrvKpWU_-aNYRC8-zGffo0V_L_pg00lsT7-q", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102357075581293300381\">Amber Lai</a>"] },
            { photoReference: "AWCwydir9selNUnYzdzEclP-ATQcmsQSVaQ3t2lkoeXTUdFGjyDfT_4TOtI0Qly0WB3bvvc4WT9pdPU6G5wBcA3eC6YW_vCrY1cKUS1SJq-ZI8pcmfImYCr0e40vV1HK_Yqdsv2lBaoxcTQLkvAqdF7IK0RZ7-seycTPT7AkMstQuxslHcWzqZjxYshXtxJCZpY4_pFxJfuywv57rcPzWYATxqguttb-k79Mg_7AS1l4DOq_I4l5145Za0216T4pZXxcSI42iWyHrHvX0HJ3EceDuZqNSzWodlPmWyCIgRpvfqqYWnIwCby2krbwJvjWaD3GeRGit1sbZQcmZx-yJC3xKjBnlz21KXQZkF3S4YYoRDM5NFTa3Ai-hg7yFlFKp12Qx_IkXglveHNSdbv8KnsZAeLuHt7RlfjccgRK-ZyKc1_zUHsqEauRJqxv537JSiaQ", width: 4096, height: 2304, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102720223684336692503\">柳坤煌</a>"] },
            { photoReference: "AWCwydiOrEh3mbmkaV4oUDVQLCzjx96TTSXHPr6LC4qoUimrtieXMrpeDyDyckqzArCalGSgvuwkmfpiUNpS14mTDF6kJzBDUYx4U6TEmj4EeBzBkIObybf6myg1yXJtuxQd0wGm3hG5opXYtesbye-stylchpe_kfdsMpcvY7_r48bXjF2TPxdcuaFLVlJQ4K7nJieYa8klxStjlbT99f_Anp4C1kn6fzesao-PHnhUt7RaLiQT4nKJ7yrwr7SxZyVQz2tfBUWD1t3G1ho2ykdXo6wauz35Fb0IitlW6WVH7iZNz9PTB2FE9VZGRly2uFfkdt157JPnzG5IBLni9_aWM7uF2EGtuvilRZxdFFPTqcz3nvnnhJ4ql9-3b84v6KEiiBGOuky6S781j-GvwTWxUufd9Y0z3olDFbYaNkxy7ugHYw", width: 4160, height: 2340, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105774227710981302342\">ㄚ倫倫</a>"] },
            { photoReference: "AWCwydh_o4eKYhujGBOF3yIE2c585mA_oegFaQfU9wIbSW7EV5NErGK-LKn-3jnBBM3m42Yn5D2Tl-ehiqpLG1hGmUzKIHHruxYG7N3m82P6tLkkxGp6u-6YxslENqlJN5UvluGCDDZ-JvPpmlN-C2OpHm3ow4OrekmookBNGY7KGjggbgr6VpXH8Z-GIRkyuvNU4vFd7vvL36-4-P9nir0wuQ0HDJxWmknEF9a0S2Itn428uAAvujCJ3kbM55fwO8mef26He7nXArU9jgEn3UBsQhqm9x0QVxSTk9eu3jiSfgjQlWBFbRxpz70d79X_SIbqdltXfNNpQDtQGYNplb-qPYSRTaBzkym0Dltke4gj6bM0IabSmDvrVYbyHYRV3ra-ZRKN2ZdlWnBJM9WrT9Eq94XrmjXupvknmzNxHjIS1C14fQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112866670596958171584\">串の浪人</a>"] },
            { photoReference: "AWCwydjO0k9WQkzfbB0i3LI0F51_OABaOfPKfiAcYEyaAzkffByvSGlwSRG6ehFgrnccF8Iez6yWhmhfLPqD0JSdDZVgzVpgRPPvaNch1fo1HG2xJjKw2brx-7-vyf5aLo7VD_yUrwE9HWn85hIhE5H06fgDpHcyJGorrFLbutyJAMaz5zNnHoic2ge3ZsqKuUZ9qutsFdX8CLK1jZDlKiNkLyQxVPfcYE_PB9fuhertk4Ghg2teZ2LAFbEzdvXu_Wg3O9xSvm4MzWa6V62D8Wk7e5t3Gjkk_GDLKgXzmmejM_lUW4vulTXDVuGr98_4c_zeCvm4BDt0UNdZ43xtCpZLAjcByZLsX-LdPoW_D_Ut6FLkiVNk-pwVf_hzcz1X1GYHefJXy_JV3jZYY-p9WALKOPVkowh-gCRgxySHIScq1HAP_So", width: 3000, height: 4000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/103662736527782348180\">tora.とら</a>"] }
        ],
        summary: "신선한 해산물을 만날 수 있는 활기찬 시장입니다.",
        updatedAt: "2026-08-12",
        highlights: ["신선한 해산물", "대형 새우 판매"],
        tips: ["새우의 크기가 매우 큽니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 6:00; 화요일: 오전 9:00 ~ 오후 6:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "http://www.jf-okinawa.jp/?directshop=%E7%B3%B8%E6%BA%80%E6%BC%81%E6%A5%AD%E5%8D%94%E5%90%8C%E7%B5%84%E5%90%88%E3%80%8C%E3%81%8A%E9%AD%9A%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%80%8D", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6347299651609965333", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Itoman+fishing+cooperative+Fish+Center+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "사카에치 시장": {
        photos: [],
        placeId: "ChIJAQDsBmRp5TQR9e89nmOJv8g",
        placePhotos: [
            { photoReference: "AWCwydhF0TVkT6vE1xPpqj86VJVHJhtXBcdh1y8GMN6GqgG1SxomRROv3CM3knoAc0svHP1k8bWj20uWp9cFlRbl26CBG27nTOquQy1BC3ik3vo8GvFJ_9BCN026fVjizIgrd4VvcqMTcDE3mlBBO6HU3DyYxubTylMg41LkzZobj8IVvGY-FDf8AombUuUqiyNU2nNCpdyJ53-S6JRtTTQNjnUJeC5-41L8nmz7gZnW5KsMeVprT0YAjlfS3c9EgvyMvtZdjQHI8hj4DQBL4WwGVh0D8A5j8E2XsHSVxdBhEtgMYSNqFNOSJWT_6nCHWyvj7YlDdFvSzpkBxZTA0AyEn3ks_xMPXOw6t2uMEexuG-m1PbhXxQQS3ZVdxshAQiW6oFwNPtQy8lBtKz5HXt5f0b_cShD_aZ9I-VZIQuQf-ILgrqJM", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107668022941972198305\">YASUO</a>"] },
            { photoReference: "AWCwydjxn6E6jmQ-vsPxgXml1MYfL1xIe0m01sA9_45HOalPOieqdSaH8woTPUnij-oQVbq-0TOZX3hXuvo_cD946dtjh5Uj1rHow47JOk-uyQzN3Fttv4vWVqCnGSZ-tQeLEbz9KTbRe3ijnCW8Top3pQ20AsEzwdGHteF1x9gN__tVGsoek3TI9P0c7FpMIyVg8yOx_ORSKG5osI36V5vU1x_tqEq5rstj3e4VXR2-YnNLNyQGFFpjcmq9egwcBFf6DOivB73qG7gLKdqbaQ5BsP0JRF6HpOrtGmS_XP_6KAZRygSHdsD89J22wffnP9wCcSeUddR9NWsv3XIaKKTs_tZILACW1RgnORNJzTJ7yeSUWPqF0DTxTa6JxEmybLrcFS0IBo0KNZUy7Zjklw5wcrU8CCRdzFcagMJGKJz8GxwoVFq69gxf7z-DPyXmIw", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107696379403878710348\">ヱヰ</a>"] },
            { photoReference: "AWCwydiEVL64AdmJQpdQsxrVZNmqE7rKif__Waruu9bYwRoL1YNT7j8tomeW1Dx6TiQYVKAoManUijUKFLY0i__wP5xpzR8pyjVRCn3xYoDhh9YI4tjjX0Fvpx4UkBsMTl2brYwjDBSleQJUUxhcxbbMXVLzqwiSsMFkyYIBl130yA0YVBtZhQMq0uK4UX_qt913DTU8-2pjtIyj7kZi8-Y9QwgkLp292eOOviyN8TMJiegbeWAR10hrkCftM3dCchGkGntlpPkXVNCS8T8Sv-IPDgEHnFciQxU5JNdq414ZiyYHJD0bpDz6vPi28PuSqn2gmiB5d4oj4VBybtjqs9cA3rZa4L8WqHsIH-iU1W9AxpNQ4aWdrcKAHAeU0-o_-qm-VNdep0wZNn8puK31SsZxoFZ-Qni0rBJ02mxTunqxQpLm17TZ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/116838116454344482791\">中村伸一郎</a>"] },
            { photoReference: "AWCwydjG6F_FTR63gO8apZzrs5GNxkShEjOxgLlQ7SlcUwzFoS-kmqFm8Is5DUZEazCf2mHRDyu-KBfiCD5Z2FxPFO4pK1LbATKg-9981XYkLFqCPtbM6y0VM57g2k-xRPkSJhlHol_CZKIfuivUyO9Xf7L61EfLGG_SzCMcdp4jBk9ZabF0kn2Sh7ehDJZ1uR9CFnqaLiO_YSJTN45DsnApFD11MAgNlq4LhUo53FFOHMmSy2z__mk4H5Hycon_hsSr68tMEGlhhBQ0epxfImrkg8ebow4Rbfs9dHZrIcy9a-ocOfYSz0GWmYShm8fKOV9HqXb6OiHGSjWGrXaCfIp5tZbYBCBzZHKjsZ4nRA-zoDkr2HskUb5-JwEt4fwuvUob4kROISGZZPAzjFCUC997EdW91XxSakOktwn05vp9JT0EaQ", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117822955576185127070\">Aureva Wu</a>"] },
            { photoReference: "AWCwydjXGDN3guMNlgHMrUFAs6c940hRS7J-ZMOnMYmAgi33tBeEM9BgPpaD7XXwfXi52PpsusohS8ob9BnIPxSEPcptgkPMQq8xpFqhfOgXSNZRPs331_yBUfGtaEkRSG7qsHUgNOi97JHNVorpEZdPWD283fKCK3ChmsO41hDSKuet7yhk8QhHKFJFw5_2zKTiZvwvmGtildPqAP7AV2xXWoDYrhUSAjfK0xK8NJ33tmVvTKbi3VirXKjAD-vZ1Vl1wfpMhLniltj4GAEKaf2u5C1nni-jk9Joop0A93ijaT2BwONnJpmQ76oIN_QD96KnExfuk1WXHcq8G1ctZV5peEoDP3S77t02gJvuzbtZ4irUNBtt3zO8649m0FIYNTt_LfPmZwYGVmDCAhZg7f9ZYnNuxGciA8-C1GdV1ueOljw", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108659860072283068330\">蘭蘭子</a>"] }
        ],
        summary: "현지 분위기를 느낄 수 있는 매력적인 시장입니다.",
        updatedAt: "2026-08-12",
        highlights: ["현지 분위기", "24시간 영업"],
        tips: ["언제든 방문 가능", "현지 분위기 만끽"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 24시간 영업; 화요일: 24시간 영업",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://sakaemachi.okinawa/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=14465431589086949365", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%EC%82%AC%EC%B9%B4%EC%97%90%EC%B9%98+%EC%8B%9C%EC%9E%A5+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Motobu Town Market": {
        photos: [],
        placeId: "ChIJ-Vi0CV_55DQRz6dK7KiNy7s",
        placePhotos: [
            { photoReference: "AWCwydhL46jGzFhbKKukMScJDBTflLmjisGEsr9R7gv-zeWZChtYgH-rWUJFOxpxdZfe1W3ko0E3qrPRL7YLZtGuX2hdF9xclYWYUzpJLFmJuacXrQtvFN1jnfzd0V9lQ8bb_IQphtRdzzGBnBQJqh074uFW4uc1RD0yz5qFkFI3cadUydJgpkd03SSL83zLwL2wUHhCUwaeRMCMedgFejWfPEI7GCCDFZPe_ntLHWD9nPdQLeNCXkQgrPRHlTUKXD63DwwSWQZn8lpULCmV0g988XlkiH4z69Dcr_ptOrhS91gHFOX1ehSvefc-v7DqU-P4gdygUo-2Ir--ol1Raf2sLaoT9ka3Gwbgv8Y5G9FWqRpD9iHu4EBzs7JK7ZZ-toPcDCU7HuXVD5YHpqZdrgkaTlWG4CJZBQU7MLn4ZNmgBUh1DdrU", width: 4800, height: 3200, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112825573657166999062\">Fumitaka TOMA</a>"] },
            { photoReference: "AWCwydg06TRnHAVknhHIDiwmQU6MUKVRI5XH3Wqog1WakmioVy5ijtROyaP3uJ062ijW6-Xo5kkt9dglqP3Cz1Q30iDiud8N2NIExH3oyE3tBZpxTjknkfjaFiAPVCzzYtPLtpJkLndvwqSqFKph-ff3aGBhO-rkrLdBlSaCbLynB4fM0LJG41LPRa7BLNbSqTN0hmSGFJdVrHm4BM867hNP6OUDSx736aRtJstg7Tb76weDKXh3BR2O4JL6KE6pYpP-eU9FrzERbdTmoo7xUG9QYJHr1QAODHJIVXr60uQ7RqV2RJV2EXYaG2mO2_VOWneFVCCaR0B2a-DT4jyVGDRBHtBDZhWmF_meyVu9Arq_75asqK5BZZdU80C1D8wQxWqz30I6USBz3KkcF8mjU5CXPoipguqHDuOzKYCSqo4aTqFwPP7s", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108396983054720957922\">Yishu Chao</a>"] },
            { photoReference: "AWCwydgFFcG97M0R6IKHPkMXO2QG_As4dyMaKBmbHcK9kNKuHeugWU36hdQSzNckS58bXiy-IRnHpXSqHpONljHm1YAcu1pWcKaF2l3eZExjuCLxIiQYZCPhtRS43Ua5oRVvYXyjN7v4J_N758f_eQnLi0VYMNTxjU-IJalr3nKOz8hHaVaps0mEe-7HmuNGTDr13VOCrujafcemlkCD-pQbWH5729mG4Ct8ffRFYrlSr_C4UjUYrx0rERmEeD5yxkzbcJz-itX-6VjSn8UxpUjp8UlpZJkEHc8wqqEWK3N5VZcre9Nu_M_Ggt69eZ1W0TKyFxwkjZQ71kFpCjgT2S-glJl_yxw3Sfceq_m36FDeHoGZ1p4ivfidyO-6j9wfJtOfCaHllnKpIdVMUC8FRu5KcwVYgZ1P6IyvJEUGVq29o5Z-RWAx", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/115133848517669177952\">Devin W.W. Chang</a>"] },
            { photoReference: "AWCwydhaMii6hsvyWIQF-3IA9z3-u6sWxJchct4Qf_5B2XkW7lm05pvQjCz1qebxyAYhykVs_Fg5PSQiYAFo1rGpbdD1odehSdUqAHhwsyyaPUfIV1Amzonbc2r0SrJ7lvx2NP-JmRvEwe-MxPUDh8NdtWYlH8TpIuKn0UHL9-LgnskWLl8YRh1Xo0ZEY2oP6UOR08zYiHJHaSIHri8fgyBMLFVWibTj_1XE2XF5KzDiawfGkkJ8jVcRC6hBRwCujwSErHUEbvFFcOx46mpHHbo8xe1sRe7Is45FJZ5-RS_ZshmSnheoioaIuMK5cvNkgqHAdD9DBL1qO24cTQvD_wM_9dnovslGICr_eBTandUcJ4SeePQlANKx17tkMvHarKrVaiKrbrdI9MLrkaMrA-ix3uNasaBGJyoULNyFz9vHxivw0w", width: 2448, height: 3264, attributions: ["<a href=\"https://maps.google.com/maps/contrib/104012205772248145549\">Shinya Mimura</a>"] },
            { photoReference: "AWCwydht8RFpHfKbBEcMMkdkLTXGwixXlZON5zW5kOXcr2pkbWFXr7fV4tJ2FgXoCnPb5f49VaHx9gluNWNIDMavBGqWAa3l8eO0L3ixjf-mSRVgMfzYIt_m4e6PKmxKVoHa8zpN5ZTAWSkRMyam8plgN14H4wHL_Vooh8gyhk_0TwMrKHY42GP6toGO1q3U2KvZbdjXflROtGhrZzx_pjw09wofcc3UGb4OchlVt0FrHeGY6XB5QjJorOKmEBgLiu3bghRqNwDlDznQGowwlD5wrH7QX_ForxiWcQTSaNR7IOeuugqjsGeBZMBJ_EbM7YiXbKKGtO2Y4m29M_TOwJMjT_aCUrumhvyrTsPgv7UOFTXorGgXDTDWWQrTSOiGz0I3LhbD33eHsYg-aVFaLGx_fApkfUEiomwfxLa4IywRC6drAwsB", width: 2605, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/106595975692982703119\">Hideki Umeno</a>"] }
        ],
        summary: "저렴하고 신선한 회를 맛볼 수 있는 레트로 감성의 전통 시장입니다.",
        updatedAt: "2026-08-12",
        highlights: ["쇼와 시대의 레트로한 분위기", "가성비 좋은 신선한 회 세트"],
        tips: ["낮부터 저녁 사이에는 활기찬 시장 모습을 볼 수 있습니다", "500엔 또는 1000엔 단위의 저렴한 회 팩을 추천합니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://motobu.main.jp/wordpress/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=13532065262023124943", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Motobu+Town+Market+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "Uru Marche": {
        photos: [],
        placeId: "ChIJa5d5VXwP5TQRQURcm7f1LqU",
        placePhotos: [
            { photoReference: "AWCwydhvQWAcKsbiotgZ3M8OY-VzLjNVIHrlKLgSkD8gH31X4-FKP8JQpEPe6K_M42BFN_6-80XSGQWFpqaRPoVeQbqURDhCDWkniw0ymocGOaeWxPrwE1hk018G7hnUmqtC8C98KYrpjuhyysPaiEZ3Ijoij_zVrYEN1pJstBhg5lPSW-iMe6rxgH4MFKdPAGfr9rlhmhw7ja__QTPiSxqRxxY2PCmGrLjkn8gW0bfBa1mOh9aCuMinu-HhJs9syuTIlQUv6eoAIyimF2hV9lBjJjvoBKx2XBCiPYs5j2Ti1q_H7ZaHcVPECAaC0ULdfRky90YBcRcRMFwRCRQUzDsVob4p9du6zwDWZrUsRw7t3xkNur-6jSG4e6VIqv0pXkPzHGYuQP6pjmnCjSploXuBwl8lBhrKVTPu2uTxwMVw6gXplbiF", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/118395968051929881417\">ひろけん</a>"] },
            { photoReference: "AWCwydiHhKKU1gWIgVThNcrefyYAhlEJrz79I6_dLDBkKUQB_4InswNenZmIQx0xjk9CwJRIbBsqqcURKlUVE5KQDtTzxigUMx03oNEJzEsV-GhCnT7YLwNWiiwiothb5dIdzIqc-9pSKddTpB7Vjpg2WTdkqiGWtOcTUMsIatBfy3BzcChbaUnQ-z3gDLMHvuGQUBU3MMKfOR9kNXGi9nOpDQgD_EQoboaKZtAoS7nHPmDDP-4BLm3fVR1_9qedpJ6S6ntX-0059cJeWyybbknV7mUqj7OS3zOnhxgu7g6KgiPdRnhJ73hVCU7MbHH2eZ7u_lMa8FHl_eo6NtNLVCFyNJoz3I6cniJgikWHaNXjiYR_D2TJZ-QHBHSeypCDGylqOl53mOeW3kY5Wtjm6HIu0wp5IB4G0ZMjfrGNTB114mf1LYRks50LxlG3OgOsyw", width: 3024, height: 4032, attributions: ["<a href=\"https://maps.google.com/maps/contrib/107989996097567270048\">くろいひと</a>"] },
            { photoReference: "AWCwydgtOCdfIXOKCw8mv05Aq6AEk5qQfgglLAt6YrbhA1zxrRzA-IgafJ3qLHrbb2TdTvTswquv0uUQr8E7E8kVYP4rfzZmjbyfW6hWZNnI5ovfMyQKnr4ajg3mkNY3wLZQqgwyg9OB1mjdBz4X-u5NavmlGUmD8LH1fVJbjfgrtW5vY2P6H1LKx_D1IU7t-qnnr6OFRfPlQ8a3tH2qTGvslj_q9eAexCYb76zi4K-0W9sfGCw9WcL4DgjpC7xAwOSE6rStpYsGYBy5ohSZniRqHB0YlqZ7nT3TsFaMvlADYLcoC6fCaZgSGg2uRhKpzpXT6iItBYAugfWMLcviQ9tONYvnfCc2RRO1EW7333Cz9y7TZnwXQeoMX-B7q0jdR-fNT5rUnqKlTFyOhc7uv1UAOU8uhdZ078qdKcLRIQ7_4RL1ZA", width: 4800, height: 3203, attributions: ["<a href=\"https://maps.google.com/maps/contrib/108484814781456516134\">miyagi FF</a>"] },
            { photoReference: "AWCwydgls3089GTLhx_8_J6opIQ4IjZEunRn8QozU3a9RrpGjYnE055d5QPYc3HjGSJZsyRJZK_SRlRGMdaBAuFlqso5rOuVPPmEe56f9PyHQJBqafU3wcZ61Qsyi_Qskne4Rrc8HoM_Ijc3ebExg6Zlxy4zeG8kQBU2WP4M8c7O4kblM5whRRCVZqe-JhukjHz6JrSTGwe9kXiI4jd2QpAP_HucnLf7a_kRtizIQdslXy5nRUACo81_FYkiDAd8MheuTBdyjVxgKWFDDK1b7xi0Kal8jR67NR-CQJY-HfpkBO-qAOo4cMiEqSk1ozPhGa7IwTFVXLec9LhxEUCc3GvDFz-J1JGCEhx2-ZZ3mvUAGGCauk-mJftrZvosTCehFxIyaQ6_dG-aNcsR5cXVzFhFcgF8arpL9Q5v2VOI38nj5BCVOTyQt9XAN7c83iKe3UyI", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100640022216452200662\">Ra</a>"] },
            { photoReference: "AWCwydiEgj0kF1Chr6Q5qUS4iUpc-i1arGVuEwnkDMGNPQox6dIWOIbp3T9IStrNCtdq0jTTjdUOuIREKcK1tE180Sn64RZSkSoCogMD8ml6AbcXTZnHo2B321VYKiX0IMeS43_SaqZ7zRlsFoI2nq-rzYnc_jy-z2SgbXYjF16qojdvMvxUWgqF91LbfdE3_B0DiGiOcxWKyQ550x3SNj5vWnBEicpSdOQuH7IhBP2tHMHR4j_bCNTu6vLzdPUeMbQqaFqP0kFHRv_rkrGBNBio7JwwPYa88aItEORmQ_jSGh02caErtSpLm7frW0YjLsTlzrDwDX0mGeH-Ve7DKFPX3gieTfXYcwwT5zjKOhCa0DdFAFMdqtLzXAIxqbQmNzhrkcVtMCWqmVJxKWWWmm6XegzlDMmq5oqpLS5hfAM8j5S62A", width: 4000, height: 3000, attributions: ["<a href=\"https://maps.google.com/maps/contrib/105788296892593721382\">Cyurasima</a>"] }
        ],
        summary: "신선한 채소와 고기 그리고 다양한 간식거리가 가득한 곳입니다.",
        updatedAt: "2026-08-12",
        highlights: ["신선한 채소와 육류", "다양한 가공품 및 간식", "활기찬 시장 분위기"],
        tips: ["고기나 생선 등 일부 품목은 가격대가 있을 수 있습니다", "구경하는 재미가 있어 방문을 추천합니다"],
        taxRefund: { available: false, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 9:00 ~ 오후 8:00; 화요일: 오전 9:00 ~ 오후 8:00",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://urumarche.com/", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=11902721034121135169", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=Uru+Marche+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "DFS 沖縄那覇空港店（国内線ターミナル）": {
        photos: [],
        placeId: "ChIJ2f9vYMVp5TQRXPSL4X-4iVM",
        placePhotos: [
            { photoReference: "AWCwydhMQMttUItKsKhVwl_JSlBGnuuCq_pgCIYEVbYdZ5PJMi03Zbc5QiWViqzNnhBPMLQfDNkOmuuWqdv1RykiCWjy5adSz-o1EtbaI29JmwiYcxkQHx44Wk2P55w0t7ppTm4Io-GuO0P7QXNPxG5LA6Oyfg4RNL49r796vwbF30_TTo1KeP3dOh89MVoqm1DMj8njDiC17sh6veoRu50525SrFPsUQ3ZqL48aEIDn3MOm852vm4yYsfH17L4IF-f1kF-Hb8n_W_ftOv9FUqBChWF7_52YlUGfXaAa2YTvO25LKhX7jVILp3ZJmGTwqXBmaR0-c-mm0vI7dJis-vEpYU8ytw9gZhwZFuV1UIGrDEhKXUj8jHLlUX91azZ4yaG2Vmjziy_l75EjF_nvwk1QTDOH-Tl-dlo2cXp5zf2iRimWuvku", width: 3840, height: 2160, attributions: ["<a href=\"https://maps.google.com/maps/contrib/117294368366339487001\">K</a>"] },
            { photoReference: "AWCwydgAxisJSLCZyYB0INrMFX012Gy-lpcemH6ILr0KNAXLM3zPjND0xdDEpgrTmMc_B_HuSjXxQHD7vL48XBuonpbb2bWtFWAuP7V78LFUf-y_mlY3ztd0FffQuq0Uw3ODDTMwTHj52Rv5dWm27xUvUkPTD8VMjNxeoygeppZljlBA54QwPKHINkH3dTfpke2F7o6NcjfD9ggiBgPNn1U-P9UW_Ru1zT0MjtEW0QhYuzX5Vsy3x4-CK3wHOSQyGyQJmYCeTTUA7xVXbbFWEQiwujSiCE347Ts3cAZs--jJyh_jl2CIoCHXoSazl2e9w7djLXpt6zpDRXQrZS-ennAkGyOcy6ysFR9M3lL198gMGCDgjqrMquryzaFk4f6c741ZsuEV-LM9TvRd3a9NKer92LKBfy6N3Ls9BZI4a66rpjAdQw", width: 2200, height: 2201, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113586652902223238168\">浅井克之</a>"] },
            { photoReference: "AWCwydiIlHfNK3Mz1xMTPvjHlYCEsFmR_BcpL2_Pk36s-JNTdwyWY1PMduw1xMDzS5s8FqxWKwN-BrMW-td5845QM9fPwyi9qES6ozTjbIC8mqq36uQ_M-C_0p6tHDfNF_-o-o0i879B2EhpEhVGFwSE4mG7qGvs8xxWtjEFHO83jG9eHfh6oAtNuv60ER3QruiPxLepF3ABZzp8MMftYCheTd7FXYYBuO9KlWOfYvdvMeISON0XU2z-SArMkxVdBYiVFRjgPKDyB4GbAoCgIXUXlbowQ2PkxipXq8LKersycqnTuhLcbYgpuNGmmCH-hnGBa5-BlZ6c7zVX42qPA9KmAwE4yP9bQ6BXsb2361Ei5Fp5iP_pGNuljmA3FMzaTfCBo9OX0irIFpVVCbcj1rIW3B2V4HKkfN0Afg05-qyyccs", width: 2208, height: 2208, attributions: ["<a href=\"https://maps.google.com/maps/contrib/113586652902223238168\">浅井克之</a>"] },
            { photoReference: "AWCwydhUK91gbtPKFTXy6IZuqOC0C_fK6wyFnzrwV8WDtNIdSgm-lfleMDRywli-53wPjC6155Dw1oE9EB81KdZgyD-Y9C_CpsQCYol1ckdZq27zkOVaxytgEJpQhuCAIpNsb9MPy6AdCburo5moelPYOChSGSUgRkQ0JpaI1BSTM5v7hUYJLqKa4zSxVcYbQxghVGPFBmbc3dIcLF0VUGmGJfJAho11zcskpJDf2_k0K3f1ywzV16UliGxg4WFpHswWyJSpmP8IYkbizXCZSPlddaxpiDoC1qjc1pbfNc932EnarrBwo3oQLKmvbcncADM2NYW9KoN2q0yEm7tPJdV_HZn8LWdRcrf6D9sF6yUn3uUoNgFeMxHF2n74iWLSTKh7S8qOHUd4gWbyXJ_diFofoRdPGBDBDKWvJ8Aj3rW4W-wznqA", width: 3264, height: 2448, attributions: ["<a href=\"https://maps.google.com/maps/contrib/102320003889151287681\">YOSIAKI</a>"] },
            { photoReference: "AWCwydj-V6hUV9yHHj2-3XBW9O5il8HGDtOCuoCBfnm8wtCyBgchUJrzCmFolPewNnnAe_rUbm4Qcu377QWf_W4Hqoj4pPp6vG1elayK5gxP6DO02SXAPddj067WHQPIyDyCoO8Gd4E3efiisoveb1SaWPRTaAMRbbylJTfHN3zaxCvg__jYBeBDF_ZPskmhhy11tVUfL1i7YqQfAcMIxwYQxmBf_P3XJukcriX46PLmOYc14_YMQF1URHLOwd0FFadQJblnBGj5PxvRFmGCzTCR20idyBlej6NTzQ89B9FIfNGuxAKpbVZcDu1cItJ6jN_wRmiqDivpVgKPTzhvS2-FeCX1RsJ78vcr3vGQnUT61mLnz0wykqEK1UODZJkiHTuMn4uB0NnpMLgMoXggOarE-0OyOPV_bV89j5sfeCalvtXTPg", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112404614539742046055\">Jake</a>"] }
        ],
        summary: "공항 내 위치하여 접근성이 뛰어난 오키나와 면세점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["공항 내 위치하여 뛰어난 접근성", "항상 깨끗하고 쾌적한 매장 환경"],
        tips: ["공항 내 위치하여 이동이 편리함", "매장이 항상 깨끗하게 관리됨"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "월요일: 오전 6:40 ~ 오후 8:30; 화요일: 오전 6:40 ~ 오후 8:30",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "공식 사이트", url: "https://www.dfs.com/en/okinawa/stores/dfs-naha-airport?utm_source=google-maps&utm_medium=organic", type: "official", description: "공식/대표 링크" },
            { label: "Google Maps", url: "https://maps.google.com/?cid=6019545236341781596", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=DFS+%E6%B2%96%E7%B8%84%E9%82%A3%E8%A6%87%E7%A9%BA%E6%B8%AF%E5%BA%97%EF%BC%88%E5%9B%BD%E5%86%85%E7%B7%9A%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB%EF%BC%89+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    },
    "免税店 DUTY FREE DFS": {
        photos: [],
        placeId: "ChIJz-oSog5p5TQRyt7DJ2VE5_4",
        placePhotos: [
            { photoReference: "AWCwydjtDhAdpbU858Etwj1lLeJm64pJBmX4D97Pe-wIQFjS1Wp-xutuLxxyMvlK5Ax_eHQLxidat7Vx0wnuBcd--Hwi-3SXN262QhcGzZyYD4pcl2GOKenFFH5plx2b3NLedrGqy2QUY7WcFVNfL487FK-iQmPRxMQyHpk3M3xM8obsSTIp1Y3tREzvEl9TcP4MeRiT4FX0_SYq8gRwBRfm3tOMoET7x0oU-H3iEK9gmay42b0n54DDxqqoMXpfEJCZqEgcdU4_0fQmvUkY-tsjykIlPcOGMjJ9QHKimtmVhdxJtFGw5izoPA8AFlb8nQuJBwUULuc3P01UXvccVgc1Wf7pHd4AW5DdtcJDfjzm3VIbyYeXo3eubDZj-1pcRG6g7IWv8HAip6uogLuh55y0DXRZw5Nr7GnA8TXfGCfODUD_2jLn", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100423422509119810689\">Lily Li</a>"] },
            { photoReference: "AWCwydj0aMoCHG9DoV_CiXxQtJXUPBigTUyvDIBip4pIcLEybUJo-6c4I-5Z50httqi6pC1Z3RBCa-H2XsLLjZI_c_NuRgwseffvY2dMIj0LVQkFQHUZpm1GvQ5pKVvQRLUeVY6goH65AgzItTOGttpqmlXuKAa5EmucSp1TrFnPrw-qfUjiOA3mZj3G5_G7-vt4w5t7C6i09qTmmO8j1Jzm1pzjOVdiIRQLIPKxQiD5pb6HK4OS71H_h4_1jO1cFdt8qsJ0qHlde22Goan6EYgweFfV2e8QvyDTlCDahqPJVDE5c5RNZOp3Als0kx9voLX0lQA484RVDC6gda-P3hmEHfnBXlohsUK0NBgoNsQnlG_IM4p5scTHXAKMyJY5kubHrJrM6c4ealqP3B6VKiqVq7CqJ9qyR__DkQ3CouaGChiwnO8", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100423422509119810689\">Lily Li</a>"] },
            { photoReference: "AWCwydgBJDqoEs0kOTs88kEJSmihY4CZy-8xPym5KoCSpF_s7Z8HJBMp9oEJ84p4HoVO1z3iH5nx5DLgdv-7BJ65yF0cOXaWjwoVFXQVQZfQBg8NLUlabX2VcvNXaP0ErWf5QqQX6b8txXqSrn2LH8eSVawQln4v8EGWmq2XFJY2YGYbOBdYOuXj5oahieAtT1s6_sPi5OofzakjFQxniW-MH5BL6lIIS5t0_5DWidad59sFE_cCc6HbsVCe6RNUHQUQVwBubhGHRBoxMLVUNl1d9A8ZP0LFBGKzJdu_ku_1UdSrp-7uCFE2lG9kREwQepMS6uFOIRC4bts94f4XcyU08L3Bhy9cvKlg_9NOTjSpNGzJ_mQyp-WZmVnMl1PCyTVLVIED8CjJsxiADSTrXlKP25mi9-omRtbYre0PV8sDfyQwFTs", width: 4032, height: 2688, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112747808357696224690\">藤伸江（のぶえ ふじ）</a>"] },
            { photoReference: "AWCwydg01HK7JFdlL2dm3HYintU4hBppncNNGpiWvZMIXMQGkZt8WceMZiLlv1npcf0qXatRG-98jhdXas4cMtFEGTwRTqBU5Y5kQkbjnj12KoAKIeMjqAN4S-CfQmloOTuaJVkJJYIxRRgV8zIpTWbK9apeUqe3k3in0MELSno2QQ_3FfqWszbUSRtSLRGWOREx1lCV9HI_-wvzExKYw8AbTJ_eEoPIS_15S25YKGbKyAsm61haldkbTJ39HpK55uptmgcOsCwig-szIKcYDAuHtA6GTZYJAPvSSppmlLUrvud6kpQGIB4BA-cGCEXhG6boQdx1PfaidLKCdSQlxgG3yMaEmINUbCM5v-3S02mK070AlJCivwgpVP-oKtuDKTLZ90wHccW0W2fdonOocNS5HvIwa5ngpKf2rk7fQnRdfKn8ZQ", width: 4032, height: 2268, attributions: ["<a href=\"https://maps.google.com/maps/contrib/100423422509119810689\">Lily Li</a>"] },
            { photoReference: "AWCwydiIGuN3g4dcGDFWIoPIr-6essYGQQaw8MwkaUYRMcx7m2TUb0iW8pZOna2yS8jFn9G6X2k5h1vc7nKu_gT9mZYdTMak3PdI0H3O6cVmy9y-5rop0MmYJs3_P7_ZGEpOEw3rFT1fFuiFbHfkse-yfmHIHxOs7o7z2myUjqwBiX-CNNE4cLAkt0OceaS-732neM3R18na8UEJjqcXfSKXegNYBKVprshXFu_NCPv0InQlM8ogPFT3L4JOug0vza2P-LprfUMrYNMQYKFNQj7PTiXfrbc37Nu_eHXcGmR3AxS3DbuPMgcyWQONe3I6GW7g_rAxNDMOwH2SQsF9CeM_NRmOsd1Q0ftKCgycsj2JPIIIgkv28QO5fb88yzlXXzRYZhul92bZJLXANcbmQFPDJeSeEDHe02e-RvQBtvVCU6-HeYOj", width: 4032, height: 3024, attributions: ["<a href=\"https://maps.google.com/maps/contrib/112404614539742046055\">Jake</a>"] }
        ],
        summary: "다양한 품목을 갖춘 넓고 쾌적한 면세점입니다.",
        updatedAt: "2026-08-12",
        highlights: ["넓고 밝은 매장", "다양한 제품군"],
        tips: ["중국어 소통이 가능한 직원이 있습니다"],
        taxRefund: { available: true, note: "매장별 가능 여부 확인 권장" },
        hours: "방문 전 확인 권장",
        payment: ["현금", "카드 가능 여부 매장 확인"],
        links: [
            { label: "Google Maps", url: "https://maps.google.com/?cid=18367724806503390922", type: "guide", description: "지도에서 위치 보기" },
            { label: "네이버 후기 검색", url: "https://search.naver.com/search.naver?query=%E5%85%8D%E7%A8%8E%E5%BA%97+DUTY+FREE+DFS+%EC%98%A4%ED%82%A4%EB%82%98%EC%99%80+%ED%9B%84%EA%B8%B0", type: "blog", description: "최근 한국어 후기 검색" }
        ]
    }
};

export default info;
